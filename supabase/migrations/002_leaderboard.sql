-- ============================================================
-- 002 — Leaderboard (aggregate view) + score tracking
-- Run via: supabase db push or Supabase SQL Editor
-- Replaces the old materialized `leaderboard` table with a live view
-- that aggregates authenticated players' scores across ALL games.
-- Guests (user_id IS NULL) are excluded automatically.
-- ============================================================

-- 1. Drop the old materialized leaderboard table (replaced by the view below)
drop table if exists public.leaderboard;

-- 2. Aggregate view: total score per registered user across all games.
--    Only sessions tied to an authenticated user are counted.
create or replace view public.leaderboard as
select
  gs.user_id,
  coalesce(p.display_name, split_part(au.email, '@', 1), 'Player') as display_name,
  coalesce(p.avatar_url, '') as avatar_url,
  sum(gs.score)::bigint as total_score,
  count(*) filter (where gs.completed)::bigint as games_played,
  max(gs.created_at) as last_played_at
from public.game_sessions gs
left join public.profiles p on p.id = gs.user_id
left join auth.users au on au.id = gs.user_id
where gs.user_id is not null
group by gs.user_id, p.display_name, p.avatar_url, au.email;

-- View is readable by everyone (runs as the owning role, bypasses per-table RLS)
-- Pin ownership to a role with BYPASSRLS so the anon key can read all rows.
alter view public.leaderboard owner to postgres;
grant select on public.leaderboard to anon, authenticated;

-- 3. Performance indexes for score aggregation
create index if not exists idx_game_sessions_user_score
  on public.game_sessions (user_id, score desc, created_at desc);

-- 4. RPC: rank + totals for a single user (used for the "not in top 100" summary bar)
create or replace function public.get_user_leaderboard_stats(p_user_id uuid)
returns table (rank bigint, total_score bigint, games_played bigint)
language sql security definer stable
as $$
  with agg as (
    select
      gs.user_id,
      sum(gs.score)::bigint as total_score,
      count(*) filter (where gs.completed)::bigint as games_played
    from public.game_sessions gs
    where gs.user_id is not null
    group by gs.user_id
  )
  select
    (select count(*) + 1 from agg a where a.total_score > me.total_score)::bigint as rank,
    me.total_score,
    me.games_played
  from agg me
  where me.user_id = p_user_id;
$$;

grant execute on function public.get_user_leaderboard_stats(uuid) to anon, authenticated;

-- 5. Auto-profile trigger no longer writes to the leaderboard table
--    (the view derives everything from game_sessions at read time)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, avatar_url, is_guest)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', 'Player'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', null),
    false
  );

  insert into public.streaks (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;
