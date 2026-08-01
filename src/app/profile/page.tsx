import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function ProfilePage() {
  const supabase = await getSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: streak } = await supabase
    .from("streaks")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const { data: recentGames } = await supabase
    .from("game_sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(10);

  const totalScore = streak ? streak.total_correct * 50 : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-white shrink-0">
            {profile?.display_name?.charAt(0)?.toUpperCase() ??
              user.email?.charAt(0)?.toUpperCase() ??
              "?"}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">
              {profile?.display_name ?? "Player"}
            </h1>
            <p className="text-[var(--text-muted)] text-sm">{user.email}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Joined{" "}
              {new Date(
                profile?.created_at ?? user.created_at
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <StatCard
            label="Total Score"
            value={totalScore.toLocaleString()}
            icon="🎯"
          />
          <StatCard
            label="Games Played"
            value={streak?.total_games?.toString() ?? "0"}
            icon="🎮"
          />
          <StatCard
            label="Current Streak"
            value={`🔥 ${streak?.current_streak ?? 0}`}
            icon=""
          />
          <StatCard
            label="Longest Streak"
            value={`⚡ ${streak?.longest_streak ?? 0}`}
            icon=""
          />
        </div>

        {/* Recent Games */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Games</h2>
          {recentGames && recentGames.length > 0 ? (
            <div className="space-y-2">
              {recentGames.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-base sm:text-lg shrink-0">
                      {game.is_correct ? "✅" : "❌"}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium capitalize truncate">
                        {game.game_type.replace("_", " ")}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {new Date(game.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold shrink-0 ml-4">
                    {game.score}/{game.max_score}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">🎮</div>
              <p className="text-[var(--text-muted)] text-sm">
                No games played yet. Start with a daily challenge!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-4 text-center">
      {icon && <div className="text-2xl mb-1">{icon}</div>}
      <div className="text-lg sm:text-xl font-bold">{value}</div>
      <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
    </div>
  );
}
