import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

export function getRedisClient(): Redis {
  if (redis) return redis;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error("Upstash Redis environment variables are missing!");
    throw new Error(
      "Upstash is not configured. Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN."
    );
  }

  redis = new Redis({ url, token });

  return redis;
}

// Daily key pattern: "game:guest:{fingerprint}:{YYYY-MM-DD}"
export function dailyGuestKey(fingerprint: string, date?: string): string {
  const d = date || getUTCDate();
  return `game:guest:${fingerprint}:${d}`;
}

// Rate limit key
export function rateLimitKey(identifier: string, action: string): string {
  return `ratelimit:${action}:${identifier}`;
}

// Streak lock key
export function streakKey(userId: string): string {
  return `streak:${userId}`;
}

// Get current UTC date string (YYYY-MM-DD)
export function getUTCDate(): string {
  return new Date().toISOString().split("T")[0];
}

// Get UTC date reset time (next 00:00 UTC)
export function getNextUTCReset(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);
  return tomorrow.toISOString();
}
