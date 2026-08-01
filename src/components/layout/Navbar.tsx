"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  async function handleSignOut() {
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.auth.signOut();
    } catch {
      // Supabase not configured
    }
    window.location.href = "/";
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--bg-primary)]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <span className="text-2xl leading-none">⚽</span>
          <span className="hidden sm:inline whitespace-nowrap">
            Football<span className="text-green-400">Games</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <Link
            href="/games/guess-the-player"
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors whitespace-nowrap"
          >
            Daily Challenge
          </Link>
          <Link
            href="/leaderboard"
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors whitespace-nowrap"
          >
            Leaderboard
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative" ref={menuRef}>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-accent)] hover:border-white/30 transition-colors text-sm"
                aria-label="User menu"
                aria-expanded={menuOpen}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {user.email?.charAt(0).toUpperCase() ?? "?"}
                </div>
                <span className="hidden sm:inline text-[var(--text-primary)]">
                  {user.user_metadata?.full_name?.split(" ")[0] ?? "Player"}
                </span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-xl shadow-2xl py-2 animate-fade-in dropdown-overlay">
                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/leaderboard"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Leaderboard
                  </Link>
                  <hr className="border-[var(--border-color)] my-1" />
                  <button
                    onClick={() => { setMenuOpen(false); handleSignOut(); }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-2 sm:px-3 py-1.5 whitespace-nowrap"
              >
                Log In
              </Link>
              <Link
                href="/auth/register"
                className="text-sm bg-white text-black px-3 sm:px-4 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
