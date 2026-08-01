import { getSupabaseServerClient } from "./supabase/server";
import { getUTCDate } from "./redis";
import type { DailyChallenge, GameType } from "@/types";

// Get today's daily challenge
export async function getDailyChallenge(
  gameType: GameType = "guess_player"
): Promise<DailyChallenge | null> {
  const supabase = await getSupabaseServerClient();
  const today = getUTCDate();

  const { data, error } = await supabase
    .from("daily_challenges")
    .select("*")
    .eq("challenge_date", today)
    .eq("game_type", gameType)
    .single();

  if (error || !data) return null;
  return data as DailyChallenge;
}

// Check if user has completed today's daily challenge
export async function hasCompletedDailyChallenge(
  userId: string,
  challengeId: string
): Promise<boolean> {
  const supabase = await getSupabaseServerClient();

  const { count, error } = await supabase
    .from("game_sessions")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("challenge_id", challengeId)
    .eq("completed", true);

  if (error) return false;
  return (count ?? 0) > 0;
}

// Get user's daily challenge history (last 30 days)
export async function getDailyChallengeHistory(userId: string) {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("game_sessions")
    .select("*, daily_challenges!inner(challenge_date, game_type)")
    .eq("user_id", userId)
    .eq("is_daily", true)
    .eq("completed", true)
    .order("created_at", { ascending: false })
    .limit(30);

  if (error) return [];
  return data;
}

// Deterministic daily seed based on UTC date
// Used for generating consistent daily challenges without DB row
export function getDailySeed(date?: string): number {
  const d = date || getUTCDate();
  let hash = 0;
  for (let i = 0; i < d.length; i++) {
    const char = d.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}
