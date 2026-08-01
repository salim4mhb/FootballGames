import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Leaderboard",
  description:
    "See the top football mini-games players. Compete for the #1 spot!",
};

export default async function LeaderboardPage() {
  const supabase = await getSupabaseServerClient();

  const { data: entries } = await supabase
    .from("leaderboard")
    .select("*")
    .order("total_score", { ascending: false })
    .limit(50);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">🏆 Global Leaderboard</h1>
          <p className="text-[var(--text-secondary)]">
            Top players ranked by total score
          </p>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 border-b border-[var(--border-color)] text-xs text-[var(--text-muted)] uppercase tracking-wider">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-2 text-right">Score</div>
            <div className="col-span-2 text-right">Games</div>
            <div className="col-span-2 text-right">Streak</div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden flex items-center px-4 py-3 border-b border-[var(--border-color)] text-xs text-[var(--text-muted)] uppercase tracking-wider">
            <div className="w-8">#</div>
            <div className="flex-1">Player</div>
            <div className="text-right">Score</div>
          </div>

          {entries && entries.length > 0 ? (
            entries.map((entry, i) => (
              <div
                key={entry.id}
                className="border-b border-[var(--border-color)] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                {/* Desktop Row */}
                <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 items-center">
                  <div className="col-span-1">
                    <span className={i < 3 ? "text-lg" : "text-sm text-[var(--text-muted)]"}>
                      {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`}
                    </span>
                  </div>
                  <div className="col-span-5 flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {entry.display_name?.charAt(0)?.toUpperCase() ?? "?"}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium truncate">{entry.display_name}</div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right text-sm font-bold">
                    {entry.total_score.toLocaleString()}
                  </div>
                  <div className="col-span-2 text-right text-sm text-[var(--text-secondary)]">
                    {entry.games_played}
                  </div>
                  <div className="col-span-2 text-right text-sm">
                    <span className="text-orange-400">
                      {entry.current_streak > 0 ? `🔥 ${entry.current_streak}` : "—"}
                    </span>
                  </div>
                </div>

                {/* Mobile Row */}
                <div className="sm:hidden flex items-center gap-3 px-4 py-3">
                  <div className="w-8 text-sm text-[var(--text-muted)]">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    {entry.display_name?.charAt(0)?.toUpperCase() ?? "?"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{entry.display_name}</div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      {entry.games_played} games
                      {entry.current_streak > 0 && ` · 🔥 ${entry.current_streak}`}
                    </div>
                  </div>
                  <div className="text-sm font-bold">{entry.total_score.toLocaleString()}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-16 text-center text-[var(--text-muted)]">
              <div className="text-5xl mb-4">🏆</div>
              <p className="font-medium mb-1">No leaderboard entries yet</p>
              <p className="text-sm">Be the first to play and claim the top spot!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
