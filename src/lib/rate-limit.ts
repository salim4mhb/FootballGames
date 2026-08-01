import { Ratelimit } from "@upstash/ratelimit";
import { getRedisClient } from "./redis";
import type { RateLimitResult } from "@/types";

const redis = getRedisClient();

// General API rate limiter: 30 requests per 60 seconds
export const generalLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, "60 s"),
  analytics: true,
  prefix: "ratelimit:general",
});

// Game submission limiter: 10 requests per 60 seconds (prevent brute-force)
export const gameSubmitLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "60 s"),
  analytics: true,
  prefix: "ratelimit:game_submit",
});

// Auth limiter: 5 attempts per 15 minutes
export const authLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
  analytics: true,
  prefix: "ratelimit:auth",
});

// Search autocomplete: 20 requests per 30 seconds
export const searchLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "30 s"),
  analytics: true,
  prefix: "ratelimit:search",
});

export async function checkRateLimit(
  limiter: Ratelimit,
  identifier: string
): Promise<RateLimitResult> {
  const result = await limiter.limit(identifier);
  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
  };
}
