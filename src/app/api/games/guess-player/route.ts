export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { checkRateLimit, gameSubmitLimiter } from "@/lib/rate-limit";
import { getGuestFingerprint, canGuestPlay, incrementGuestGameCount, getGuestLimitInfo } from "@/lib/guest-limit";
import { z } from "zod";

const GuessSchema = z.object({
  player_id: z.string().uuid(),
  session_id: z.string().uuid().optional(),
  guess_number: z.number().int().min(1).max(10),
});

// Rate limit identifier from request
function getRequestIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

export async function POST(request: Request) {
  try {
    // 1. Rate limit check
    const identifier = getRequestIdentifier(request);
    const rateLimitResult = await checkRateLimit(gameSubmitLimiter, identifier);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse and validate input
    const body = await request.json();
    const parsed = GuessSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const { player_id, session_id, guess_number } = parsed.data;

    // 3. Check authentication status
    const supabase = await getSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    // 4. If not authenticated, check guest limit
    if (!user) {
      const ua = request.headers.get("user-agent") || "unknown";
      const fingerprint = getGuestFingerprint(identifier, ua);

      const canPlay = await canGuestPlay(fingerprint);
      if (!canPlay) {
        const limitInfo = await getGuestLimitInfo(fingerprint);
        return NextResponse.json(
          { error: "Daily guest limit reached", guest_limit: true, limit_info: limitInfo },
          { status: 403 }
        );
      }
    }

    // 5. Get today's challenge and validate server-side
    const today = new Date().toISOString().split("T")[0];
    const { data: challenge } = await supabase
      .from("daily_challenges")
      .select("answer, config")
      .eq("challenge_date", today)
      .eq("game_type", "guess_player")
      .single();

    if (!challenge) {
      return NextResponse.json(
        { error: "No daily challenge available" },
        { status: 404 }
      );
    }

    // 6. Validate the guess against server-side answer — NEVER trust client
    const correctPlayerId = challenge.answer?.correct_player_id;
    const isCorrect = player_id === correctPlayerId;

    // 7. Get player info for response
    const { data: guessedPlayer } = await supabase
      .from("players")
      .select("id, full_name, short_name")
      .eq("id", player_id)
      .single();

    if (!guessedPlayer) {
      return NextResponse.json(
        { error: "Invalid player" },
        { status: 400 }
      );
    }

    // 8. Increment guest game count if not authenticated
    if (!user) {
      const ua = request.headers.get("user-agent") || "unknown";
      const fingerprint = getGuestFingerprint(identifier, ua);
      await incrementGuestGameCount(fingerprint);
    }

    // 9. Store game session
    const sessionData = {
      user_id: user?.id || null,
      guest_id: user ? null : getGuestFingerprint(identifier, request.headers.get("user-agent") || "unknown"),
      game_type: "guess_player",
      challenge_id: challenge.config?.challenge_id || null,
      is_daily: true,
      guess_number,
      is_correct: isCorrect,
    };

    // We use a simple insert for session tracking
    // In production, batch these or use a queue
    await supabase.from("game_sessions").insert({
      user_id: user?.id || null,
      game_type: "guess_player",
      is_daily: true,
      score: isCorrect ? Math.max(100 - (guess_number - 1) * 15, 10) : 0,
      max_score: 100,
      guesses: [{ player_id, player_name: guessedPlayer.short_name, is_correct: isCorrect }],
      completed: isCorrect,
      is_correct: isCorrect,
    });

    // 10. Update streak if correct
    if (isCorrect && user) {
      await supabase.rpc("update_streak" as never, {
        p_user_id: user.id,
        p_correct: true,
      } as never);
    }

    return NextResponse.json({
      is_correct: isCorrect,
      player: {
        id: guessedPlayer.id,
        name: guessedPlayer.short_name || guessedPlayer.full_name,
      },
      score: isCorrect ? Math.max(100 - (guess_number - 1) * 15, 10) : 0,
    });
  } catch (error) {
    console.error("Guess player error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
