"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export function CreateAccountCTA() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let subscription: { unsubscribe: () => void } | null = null;

    try {
      const supabase = getSupabaseBrowserClient();
      supabase.auth.getUser().then(({ data }) => setUser(data.user));
      const authState = supabase.auth.onAuthStateChange(
        (_, session) => setUser(session?.user ?? null)
      );
      subscription = authState.data.subscription;
    } catch {
      // Supabase not configured — run as guest
    }

    return () => subscription?.unsubscribe();
  }, []);

  if (user) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card-hover)] rounded-2xl p-8 sm:p-12 border border-[var(--border-color)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Create Your Free Account
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
            Save your streaks, climb the global leaderboard, and unlock
            unlimited play. No credit card required.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </section>
  );
}
