import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/games/GameCard";

// 🎯 1. استدعاء مكونات الإعلانات
import NativeAd from "@/components/NativeAd";
import AdsterraBanner from "@/components/AdsterraBanner";

const GAMES = [
  {
    id: "guess-the-player",
    title: "Guess the Player",
    description:
      "Identify the mystery footballer from clues about stats, career, and achievements.",
    icon: "🔍",
    color: "from-green-500 to-emerald-600",
    href: "/games/guess-the-player",
    badge: "Popular",
  },
  {
    id: "top10",
    title: "Top 10 Challenge",
    description:
      "Guess the top 10 list from history — each wrong guess costs a life!",
    icon: "🏆",
    color: "from-red-500 to-pink-600",
    href: "/games/top10",
    badge: "Hard",
  },
  {
    id: "trivia",
    title: "Football Trivia",
    description:
      "Test your knowledge with timed multiple-choice questions across eras.",
    icon: "🧠",
    color: "from-purple-500 to-violet-600",
    href: "/games/trivia",
    badge: null,
  },
  {
    id: "higher-lower",
    title: "Higher or Lower",
    description:
      "Guess which player has the higher market value, goals, or transfer fee.",
    icon: "📊",
    color: "from-yellow-500 to-orange-600",
    href: "/games/higher-lower",
    badge: null,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Football
              </span>{" "}
              Mini-Games
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Daily challenges with{" "}
              <span className="text-white font-semibold">5,000+</span> real
              football players. Guess, match, and compete on the global
              leaderboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/games/guess-the-player"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                ▶ Play Daily Challenge
              </Link>
              <Link
                href="/leaderboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-accent)] text-[var(--text-secondary)] hover:text-white hover:border-white/50 transition-colors"
              >
                🏆 Leaderboard
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  Players
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  Game Modes
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  Challenges
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎯 إعلان 1: Native Banner أو Banner 728x90 تحت الـ Hero تماماً */}
        <div className="max-w-6xl mx-auto px-4 my-4">
          <NativeAd />
          {
          <AdsterraBanner idKey="7c88f5960bd5dcf8cb7e3eec2b26b403" width={728} height={90} /> 
          }
        </div>

        {/* Games Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Choose Your Game
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* 🎯 إعلان 2: Banner 300x250 بين الألعاب وحساب المستخدم */}
        <div className="max-w-4xl mx-auto px-4 my-6">
          <AdsterraBanner idKey="bea50751c6107165a7472377aca2b4bd" width={300} height={250} />
        </div>

        {/* CTA Section */}
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
      </main>

      <Footer />
    </div>
  );
}