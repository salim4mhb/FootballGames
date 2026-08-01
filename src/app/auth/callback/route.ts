import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=missing_code`);
  }

  try {
    const supabase = await getSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Auth callback error:", error.message);
      return NextResponse.redirect(`${origin}/auth/login?error=auth_failed`);
    }

    const forwardedHost = request.headers.get("x-forwarded-host");
    const isLocalEnv = process.env.NODE_ENV === "development";
    const redirectTo =
      isLocalEnv && forwardedHost ? `http://${forwardedHost}${next}` : `${origin}${next}`;

    return NextResponse.redirect(redirectTo);
  } catch (err) {
    console.error("Auth callback config error:", err);
    return NextResponse.redirect(`${origin}/auth/login?error=config_error`);
  }
}
