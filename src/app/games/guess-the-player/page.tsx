import { getSupabaseServerClient } from "@/lib/supabase/server";
import { GuessThePlayer } from "@/components/games/GuessThePlayer";
import { Navbar } from "@/components/layout/Navbar";
import { getPlayerByName, getAllPlayers } from "@/data/players";
import type { Player, Hint } from "@/types";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PLAYER_CACHE = new Map<string, unknown>();

function playerRecordToPlayer(rec: { n: string; s: string; na: string; nc: string; c: string; l: string; p: string; sn: number; dob: string; h: number; mv: number; g: number; a: number; t: string[]; cp: string[] }): Player {
  return {
    id: rec.n.toLowerCase().replace(/\s+/g, "-"),
    full_name: rec.n,
    short_name: rec.s,
    nationality: rec.na,
    country_code: rec.nc,
    current_club: rec.c,
    league: rec.l,
    position: rec.p,
    shirt_number: rec.sn,
    date_of_birth: rec.dob,
    height_cm: rec.h,
    foot: null,
    career_path: rec.t.map((club) => ({ club, from: "", to: null })),
    market_value: rec.mv,
    goals_total: rec.g,
    assists_total: rec.a,
    trophies: [],
    is_active: true,
    is_legend: false,
    photo_url: rec.na.toLowerCase(),
    blur_hash: null,
    created_at: "",
    updated_at: "",
  };
}

function pickDailyPlayer(): { player: Player; clues: Hint[] } {
  const today = new Date().toISOString().split("T")[0];
  let seed = 0;
  for (let i = 0; i < today.length; i++) {
    seed = ((seed << 5) - seed + today.charCodeAt(i)) | 0;
  }
  const all = getAllPlayers();
  const active = all.filter((p) => p.active !== false);
  if (active.length === 0) {
    const fallback = all[0] || { n: "Unknown Player", s: "Unknown", na: "Unknown", nc: "XX", c: "Unknown", l: "Unknown", p: "N/A", sn: 0, dob: "1990-01-01", h: 180, mv: 0, g: 0, a: 0, t: [], cp: [] };
    const p = playerRecordToPlayer(fallback);
    return { player: p, clues: generateCluesFromRecord(fallback) };
  }
  const idx = Math.abs(seed) % active.length;
  const chosen = active[idx];
  return { player: playerRecordToPlayer(chosen), clues: generateCluesFromRecord(chosen) };
}

export default async function GuessThePlayerPage({ searchParams }: Props) {
  const sp = await searchParams;
  const mode = typeof sp.mode === "string" && sp.mode === "play" ? "play" : "daily";

  let user = null;
  let challenge = null;

  try {
    const supabase = await getSupabaseServerClient();
    const { data: u } = await supabase.auth.getUser();
    user = u?.user || null;

    const today = new Date().toISOString().split("T")[0];
    const { data: c } = await supabase
      .from("daily_challenges")
      .select("*")
      .eq("challenge_date", today)
      .eq("game_type", "guess_player")
      .single();
    challenge = c;
  } catch {
    // Supabase unavailable - use embedded data
  }

  let dailyPlayer: Player | undefined;
  let dailyClues: Hint[] = [];

  if (mode === "daily" && challenge) {
    const playerId = challenge.answer?.correct_player_id;
    if (playerId) {
      try {
        const supabase = await getSupabaseServerClient();
        const { data: player } = await supabase
          .from("players")
          .select("*")
          .eq("id", playerId)
          .single();
        if (player) {
          dailyPlayer = player as Player;
          dailyClues = generateClues(player as Player, challenge.config);
        }
      } catch {
        // Failed to fetch player - fall through to embedded fallback
      }
    }
  }

  if (!dailyPlayer) {
    const result = pickDailyPlayer();
    dailyPlayer = result.player;
    dailyClues = result.clues;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        <GuessThePlayer
          dailyPlayer={dailyPlayer ? {
            id: dailyPlayer.id,
            full_name: dailyPlayer.full_name,
            short_name: dailyPlayer.short_name,
            nationality: dailyPlayer.nationality,
            country_code: dailyPlayer.country_code,
            current_club: dailyPlayer.current_club,
            position: dailyPlayer.position,
            market_value: dailyPlayer.market_value,
            goals_total: dailyPlayer.goals_total,
            league: dailyPlayer.league,
          } : undefined}
          dailyClues={dailyClues}
          isAuthenticated={!!user}
          mode={mode}
        />
      </main>
    </div>
  );
}

function generateCluesFromRecord(rec: { n: string; s: string; na: string; c: string; l: string; p: string; dob: string; h: number; mv: number; g: number; a: number; t: string[]; cp: string[] }): Hint[] {
  const clues: Hint[] = [];
  clues.push({ label: "Position", value: rec.p });
  clues.push({ label: "Nationality", value: rec.na });

  if (rec.t && rec.t.length > 0) {
    clues.push({
      label: "Career Clubs",
      value: rec.t.slice(0, 3).join(", ") + (rec.t.length > 3 ? "..." : ""),
    });
  } else {
    clues.push({ label: "Current Club", value: rec.c });
  }

  clues.push({ label: "League", value: rec.l });
  clues.push({ label: "Career Goals", value: `${rec.g}+ goals` });

  if (rec.dob) {
    const year = new Date(rec.dob).getFullYear();
    if (!isNaN(year)) {
      clues.push({ label: "Born", value: `${year}` });
    } else {
      clues.push({ label: "Height", value: `${rec.h} cm` });
    }
  } else if (rec.h) {
    clues.push({ label: "Height", value: `${rec.h} cm` });
  } else {
    clues.push({ label: "Market Value", value: rec.mv ? `€${Math.round(rec.mv / 1_000_000)}M` : "Unknown" });
  }

  return clues;
}

function generateClues(player: Player, config: Record<string, unknown> | null): Hint[] {
  const clues: Hint[] = [];

  clues.push({ label: "Position", value: player.position });
  clues.push({ label: "Nationality", value: player.nationality });

  if (player.career_path && Array.isArray(player.career_path) && player.career_path.length > 0) {
    const clubs = player.career_path.map((c: { club: string }) => c.club);
    clues.push({
      label: "Career Clubs",
      value: clubs.slice(0, 3).join(", ") + (clubs.length > 3 ? "..." : ""),
    });
  } else {
    clues.push({ label: "Current Club", value: player.current_club });
  }

  clues.push({ label: "League", value: player.league });

  if (player.trophies && Array.isArray(player.trophies) && player.trophies.length > 0) {
    clues.push({ label: "Notable Trophy", value: player.trophies[0] });
  } else {
    clues.push({ label: "Career Goals", value: `${player.goals_total}+ goals` });
  }

  if (player.date_of_birth) {
    const year = new Date(player.date_of_birth).getFullYear();
    if (!isNaN(year)) {
      clues.push({ label: "Born", value: `${year}` });
    } else if (player.height_cm) {
      clues.push({ label: "Height", value: `${player.height_cm} cm` });
    } else {
      clues.push({ label: "Market Value", value: player.market_value ? `€${Math.round(player.market_value / 1_000_000)}M` : "Unknown" });
    }
  } else if (player.height_cm) {
    clues.push({ label: "Height", value: `${player.height_cm} cm` });
  } else {
    clues.push({ label: "Market Value", value: player.market_value ? `€${Math.round(player.market_value / 1_000_000)}M` : "Unknown" });
  }

  return clues;
}
