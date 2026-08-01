import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HigherLower } from "@/components/games/HigherLower";

export default function HigherLowerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="text-center mb-10">
          <div className="text-5xl sm:text-6xl mb-4">📊</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Higher or Lower</h1>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            Guess which player has the higher market value, goals, or assists. Build streaks for bonus points!
          </p>
        </div>
        <HigherLower />
      </main>
      <Footer />
    </div>
  );
}
