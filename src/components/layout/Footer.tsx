import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg mb-3">
              <span className="text-xl leading-none">⚽</span>
              <span>
                Football<span className="text-green-400">Games</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Daily football mini-games with 5,000+ real players. Free to play,
              fun for all.
            </p>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[var(--text-primary)]">Games</h3>
            <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/games/guess-the-player" className="hover:text-white transition-colors">
                  Guess the Player
                </Link>
              </li>
              <li>
                <Link href="/games/trivia" className="hover:text-white transition-colors">
                  Trivia
                </Link>
              </li>
              <li>
                <Link href="/games/higher-lower" className="hover:text-white transition-colors">
                  Higher or Lower
                </Link>
              </li>
              <li>
                <Link href="/games/top10" className="hover:text-white transition-colors">
                  Top 10 Challenge
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[var(--text-primary)]">Account</h3>
            <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/leaderboard" className="hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="hover:text-white transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-white transition-colors">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Football Mini-Games. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
