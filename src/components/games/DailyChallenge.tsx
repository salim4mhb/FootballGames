"use client";

import { useState, useEffect } from "react";

interface DailyChallengeProps {
  gameType: string;
  isCompleted?: boolean;
  isLocked?: boolean;
}

export function DailyChallenge({ gameType, isCompleted = false, isLocked = false }: DailyChallengeProps) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateTimer() {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
      tomorrow.setUTCHours(0, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${hours}h ${mins}m`);
    }
    updateTimer();
    const interval = setInterval(updateTimer, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
      <div className="flex items-center gap-3">
        <span className="text-lg">📅</span>
        <div>
          <div className="text-sm font-semibold">Daily Challenge</div>
          <div className="text-xs text-[var(--text-muted)]">
            {isCompleted ? "Completed! Come back tomorrow" : "New challenge available!"}
          </div>
        </div>
      </div>
      <div className="text-right">
        {isCompleted ? (
          <span className="text-green-400 text-sm font-bold">✅ Done</span>
        ) : (
          <span className="text-xs text-[var(--text-muted)]">
            Resets in {timeLeft}
          </span>
        )}
      </div>
    </div>
  );
}
