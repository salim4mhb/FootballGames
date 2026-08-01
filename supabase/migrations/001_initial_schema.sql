-- ============================================================
-- Football Mini-Games Platform — Initial Schema
-- Run via: supabase db push or Supabase SQL Editor
-- ============================================================

-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";  -- fuzzy text search for player autocomplete

-- ============================================================
-- 1. PLAYERS TABLE (5,000+ football players)
-- ============================================================
create table public.players (
  id            uuid primary key default uuid_generate_v4(),
  full_name     text not null,
  short_name    text not null,
  nationality   text not null,
  country_code  char(3) not null,           -- ISO 3166-1 alpha-3 (e.g. "BRA")
  current_club  text not null,
  league        text not null,
  position      text not null,              -- GK, CB, LB, RB, CDM, CM, CAM, LW, RW, ST, CF
  shirt_number  smallint,
  date_of_birth date not null,
  height_cm     smallint,
  foot          text,                       -- 'left', 'right', 'both'
  career_path   jsonb default '[]'::jsonb,  -- [{club, from, to}, ...]
  market_value  bigint,                     -- in euros (e.g. 150000000 = 150M)
  goals_total   integer default 0,
  assists_total integer default 0,
  trophies      jsonb default '[]'::jsonb,  -- ["Champions League", "Ballon d'Or", ...]
  is_active     boolean default true,
  is_legend     boolean default false,
  photo_url     text,
  blur_hash     text,                       -- blur placeholder for reveal mechanic
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Full-text search index for autocomplete
create index idx_players_search on public.players
  using gin (to_tsvector('english', full_name || ' ' || short_name || ' ' || current_club || ' ' || nationality));

-- Trigram index for fuzzy matching
create index idx_players_trgm on public.players using gin (full_name gin_trgm_ops);

-- Filter indexes
create index idx_players_club on public.players (current_club);
create index idx_players_nationality on public.players (nationality);
create index idx_players_league on public.players (league);
create index idx_players_position on public.players (position);

-- ============================================================
-- 2. USER PROFILES (extends Supabase auth.users)
-- ============================================================
create table public.profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  display_name    text not null,
  avatar_url      text,
  is_guest        boolean default false,
  guest_ip        text,                     -- hashed IP for guest tracking
  guest_fingerprint text,                   -- device fingerprint hash
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ============================================================
-- 3. DAILY CHALLENGES (resets at 00:00 UTC)
-- ============================================================
create table public.daily_challenges (
  id            uuid primary key default uuid_generate_v4(),
  challenge_date date not null unique,       -- the UTC date this challenge is for
  game_type     text not null,               -- 'guess_player', 'bingo', 'trivia', etc.
  config        jsonb not null,              -- game-specific config (player IDs, clues, etc.)
  answer        jsonb not null,              -- server-side answer key
  created_at    timestamptz default now()
);

create index idx_daily_challenges_date on public.daily_challenges (challenge_date desc);

-- ============================================================
-- 4. GAME SESSIONS (each play attempt)
-- ============================================================
create table public.game_sessions (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid references public.profiles(id) on delete set null,
  guest_id        text,                       -- guest fingerprint when not logged in
  game_type       text not null,
  challenge_id    uuid references public.daily_challenges(id),
  is_daily        boolean default false,
  score           integer default 0,
  max_score       integer default 0,
  time_taken_ms   integer,
  guesses         jsonb default '[]'::jsonb,  -- ordered list of guesses
  result          jsonb,                       -- final result payload
  completed       boolean default false,
  is_correct      boolean default false,
  created_at      timestamptz default now()
);

create index idx_game_sessions_user on public.game_sessions (user_id, created_at desc);
create index idx_game_sessions_guest on public.game_sessions (guest_id, created_at desc);
create index idx_game_sessions_daily on public.game_sessions (challenge_id, user_id);

-- ============================================================
-- 5. STREAKS (daily play tracking)
-- ============================================================
create table public.streaks (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid unique references public.profiles(id) on delete cascade,
  current_streak  integer default 0,
  longest_streak  integer default 0,
  last_played     date,
  total_games     integer default 0,
  total_correct   integer default 0,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ============================================================
-- 6. LEADERBOARD (materialized via trigger or cron)
-- ============================================================
create table public.leaderboard (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid unique references public.profiles(id) on delete cascade,
  display_name    text not null,
  avatar_url      text,
  total_score     bigint default 0,
  games_played    integer default 0,
  avg_score       numeric(10,2) default 0,
  current_streak  integer default 0,
  longest_streak  integer default 0,
  rank            integer,
  updated_at      timestamptz default now()
);

create index idx_leaderboard_score on public.leaderboard (total_score desc);
create index idx_leaderboard_streak on public.leaderboard (current_streak desc);

-- ============================================================
-- 7. ROW LEVEL SECURITY (RLS)
-- ============================================================

alter table public.players enable row level security;
alter table public.profiles enable row level security;
alter table public.daily_challenges enable row level security;
alter table public.game_sessions enable row level security;
alter table public.streaks enable row level security;
alter table public.leaderboard enable row level security;

-- Players: readable by everyone (public data)
create policy "Players are publicly readable"
  on public.players for select
  using (true);

-- Players: only service_role can modify
create policy "Players managed by service role"
  on public.profiles for all
  using (false);

-- Profiles: users can read/update own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Daily challenges: readable by everyone
create policy "Daily challenges are publicly readable"
  on public.daily_challenges for select
  using (true);

-- Game sessions: users see only their own
create policy "Users can view own game sessions"
  on public.game_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert own game sessions"
  on public.game_sessions for insert
  with check (auth.uid() = user_id);

-- Streaks: users see only their own
create policy "Users can view own streak"
  on public.streaks for select
  using (auth.uid() = user_id);

create policy "Users can upsert own streak"
  on public.streaks for all
  using (auth.uid() = user_id);

-- Leaderboard: readable by everyone
create policy "Leaderboard is publicly readable"
  on public.leaderboard for select
  using (true);

-- ============================================================
-- 8. AUTO-UPDATE TIMESTAMPS
-- ============================================================
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger set_updated_at
  before update on public.streaks
  for each row execute function public.handle_updated_at();

create trigger set_updated_at
  before update on public.leaderboard
  for each row execute function public.handle_updated_at();

create trigger set_updated_at
  before update on public.players
  for each row execute function public.handle_updated_at();

-- ============================================================
-- 9. AUTO-CREATE PROFILE ON SIGNUP
-- ============================================================
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

  insert into public.leaderboard (user_id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', 'Player'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', null)
  );

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
