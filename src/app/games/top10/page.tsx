export const dynamic = 'force-dynamic';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Top10Challenge } from "@/components/games/Top10Challenge";

export default function Top10Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="text-center mb-10">
          <div className="text-5xl sm:text-6xl mb-4">🏆</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Top 10 Challenge</h1>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            Guess the 10 players in each list — each wrong guess costs a life ❤️. Reveal them all to win!
          </p>
        </div>
        <Top10Challenge />
      </main>
      <Footer />
    </div>
  );
}
