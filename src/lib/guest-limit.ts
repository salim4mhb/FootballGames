import { getRedisClient, dailyGuestKey, getNextUTCReset } from "./redis";
import type { GuestLimitInfo } from "@/types";

const DAILY_GUEST_LIMIT = 3;

// Simple hash for IP/fingerprint — not crypto-secure, just for tracking
function hashFingerprint(raw: string): string {
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return `g_${Math.abs(hash).toString(36)}`;
}

export function getGuestFingerprint(ip: string, userAgent: string): string {
  const raw = `${ip}:${userAgent}`;
  return hashFingerprint(raw);
}

export async function getGuestGameCount(fingerprint: string): Promise<number> {
  const redis = getRedisClient();
  const key = dailyGuestKey(fingerprint);
  const count = await redis.get<number>(key);
  return count ?? 0;
}

export async function incrementGuestGameCount(fingerprint: string): Promise<number> {
  const redis = getRedisClient();
  const key = dailyGuestKey(fingerprint);

  const count = await redis.incr(key);

  // Set expiry to next UTC midnight if this is a new key
  if (count === 1) {
    const resetTime = getNextUTCReset();
    const ttlMs = new Date(resetTime).getTime() - Date.now();
    await redis.pexpire(key, Math.max(ttlMs, 60_000));
  }

  return count;
}

export async function getGuestLimitInfo(
  fingerprint: string
): Promise<GuestLimitInfo> {
  const count = await getGuestGameCount(fingerprint);
  const remaining = Math.max(0, DAILY_GUEST_LIMIT - count);

  return {
    games_played_today: count,
    max_games: DAILY_GUEST_LIMIT,
    remaining,
    can_play: remaining > 0,
    resets_at: getNextUTCReset(),
  };
}

export async function canGuestPlay(fingerprint: string): Promise<boolean> {
  const count = await getGuestGameCount(fingerprint);
  return count < DAILY_GUEST_LIMIT;
}
