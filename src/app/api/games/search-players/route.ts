import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, searchLimiter } from "@/lib/rate-limit";
import { sanitizeInput } from "@/lib/utils";
import { searchPlayers } from "@/data/players";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query || query.length < 2) {
      return NextResponse.json({ players: [] });
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const rl = await checkRateLimit(searchLimiter, ip);
    if (!rl.success) {
      return NextResponse.json({ error: "Rate limited" }, { status: 429 });
    }

    const sanitized = sanitizeInput(query);

    const results = searchPlayers(sanitized, 8);

    const players = results.map((p) => ({
      id: p.n.toLowerCase().replace(/\s+/g, "-"),
      full_name: p.n,
      short_name: p.s,
      nationality: p.na,
      country_code: p.nc,
      current_club: p.c,
      league: p.l,
      position: p.p,
      photo_url: p.f,
    }));

    return NextResponse.json({ players });
  } catch {
    return NextResponse.json({ players: [] });
  }
}
