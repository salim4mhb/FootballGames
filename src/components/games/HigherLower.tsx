"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AuthPromptModal } from "@/components/ui/AuthPromptModal";
import { GuestPlayBlocked } from "@/components/ui/GuestPlayBlocked";
import { PlayerAvatar, FlagIcon } from "@/components/ui/Media";
import { cn } from "@/lib/utils";
import { getAllPlayers } from "@/data/players";
import type { PlayerRecord } from "@/data/players";
import { useGuestLimit } from "@/hooks/useGuestLimit";

type StatType = "market_value" | "goals" | "assists";
type GamePhase = "choosing" | "playing" | "gameover";

const STAT_CONFIG: Record<StatType, { label: string; shortLabel: string; format: (v: number) => string }> = {
  market_value: { label: "Market Value", shortLabel: "Value", format: (v) => v >= 1_000_000_000 ? `€${(v / 1_000_000_000).toFixed(1)}B` : v >= 1_000_000 ? `€${Math.round(v / 1_000_000)}M` : `€${v.toLocaleString()}` },
  goals: { label: "Career Goals", shortLabel: "Goals", format: (v) => Math.round(v).toLocaleString() },
  assists: { label: "Career Assists", shortLabel: "Assists", format: (v) => Math.round(v).toLocaleString() },
};

const STAT_TYPES: StatType[] = ["market_value", "goals", "assists"];

function getStatValue(p: PlayerRecord, type: StatType): number {
  if (type === "market_value") return p.mv;
  if (type === "goals") return p.g;
  return p.a;
}

function pickRandomPlayer(exclude: Set<string>): PlayerRecord | null {
  const all = getAllPlayers().filter((p) => p.active !== false && p.mv > 0 && !exclude.has(p.n));
  if (all.length === 0) return null;
  return all[Math.floor(Math.random() * all.length)];
}

function StatCounter({ value, format, duration = 700 }: { value: number; format: (v: number) => string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value, duration]);

  return <>{format(display)}</>;
}

export function HigherLower() {
  const guest = useGuestLimit("higher-lower");
  const [phase, setPhase] = useState<GamePhase>("choosing");
  const [statType, setStatType] = useState<StatType | null>(null);
  const [randomMode, setRandomMode] = useState(false);
  const [leftPlayer, setLeftPlayer] = useState<PlayerRecord | null>(null);
  const [rightPlayer, setRightPlayer] = useState<PlayerRecord | null>(null);
  const [usedNames, setUsedNames] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [direction, setDirection] = useState<"higher" | "lower" | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const currentStatType = statType || "market_value";

  useEffect(() => {
    if (phase === "gameover") {
      guest.onGameEnd();
    }
  }, [phase]);

  const startGame = useCallback((type: StatType | "random") => {
    if (guest.blocked) {
      guest.openPrompt();
      return;
    }
    const isRandom = type === "random";    const actualType = isRandom ? STAT_TYPES[Math.floor(Math.random() * STAT_TYPES.length)] : type;
    setStatType(actualType);
    setRandomMode(isRandom);
    setStreak(0);
    setBestStreak(0);
    setRevealed(false);
    setLastCorrect(null);
    setDirection(null);
    setTransitioning(false);

    const used = new Set<string>();
    const p1 = pickRandomPlayer(used);
    if (!p1) return;
    used.add(p1.n);
    const p2 = pickRandomPlayer(used);
    if (!p2) return;
    used.add(p2.n);

    setLeftPlayer(p1);
    setRightPlayer(p2);
    setUsedNames(used);
    setPhase("playing");
  }, [guest.blocked, guest.openPrompt]);

  const handleGuess = useCallback((guess: "higher" | "lower") => {
    if (revealed || transitioning || !leftPlayer || !rightPlayer || phase !== "playing") return;

    const leftVal = getStatValue(leftPlayer, currentStatType);
    const rightVal = getStatValue(rightPlayer, currentStatType);
    const isCorrect =
      (guess === "higher" && rightVal >= leftVal) ||
      (guess === "lower" && rightVal <= leftVal);

    setDirection(guess);
    setRevealed(true);
    setLastCorrect(isCorrect);

    if (isCorrect) {
      setStreak((s) => {
        const newStreak = s + 1;
        setBestStreak((b) => Math.max(b, newStreak));
        return newStreak;
      });

      setTimeout(() => {
        setTransitioning(true);
        setUsedNames((prev) => {
          const next = new Set(prev);
          const p2 = pickRandomPlayer(next);
          if (p2) {
            next.add(p2.n);
            setRightPlayer(p2);
          }
          if (randomMode) {
            const newType = STAT_TYPES[Math.floor(Math.random() * STAT_TYPES.length)];
            setStatType(newType);
          }
          setLeftPlayer(rightPlayer);
          setRevealed(false);
          setLastCorrect(null);
          setDirection(null);
          setTransitioning(false);
          return next;
        });
      }, 1200);
    } else {
      setTimeout(() => {
        setPhase("gameover");
      }, 1500);
    }
  }, [revealed, transitioning, leftPlayer, rightPlayer, phase, currentStatType, randomMode]);

  const handlePlayAgain = useCallback(() => {
    if (guest.blocked) {
      guest.openPrompt();
      return;
    }
    setPhase("choosing");
    setLeftPlayer(null);
    setRightPlayer(null);
    setStatType(null);
  }, [guest.blocked, guest.openPrompt]);

  const formatLeft = leftPlayer ? STAT_CONFIG[currentStatType].format(getStatValue(leftPlayer, currentStatType)) : "";
  const formatRight = rightPlayer ? STAT_CONFIG[currentStatType].format(getStatValue(rightPlayer, currentStatType)) : "";
  const rightValue = rightPlayer ? getStatValue(rightPlayer, currentStatType) : 0;
  const leftValue = leftPlayer ? getStatValue(leftPlayer, currentStatType) : 0;

  if (guest.blocked && phase !== "gameover") {
    return (
      <>
        <GuestPlayBlocked />
        <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
      </>
    );
  }

  if (phase === "choosing") {
    return (
      <div className="max-w-lg mx-auto text-center animate-fade-in">
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
          <div className="text-5xl mb-4">📊</div>
          <h2 className="text-xl font-bold mb-2">Choose Your Category</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Pick a stat to compare, or let us surprise you with random categories!
          </p>
          <div className="space-y-3">
            <Button onClick={() => startGame("market_value")} className="w-full justify-between">
              <span>💰</span>
              <span className="flex-1">Market Value</span>
              <span className="text-xs text-[var(--text-muted)]">€</span>
            </Button>
            <Button onClick={() => startGame("goals")} className="w-full justify-between">
              <span>⚽</span>
              <span className="flex-1">Career Goals</span>
              <span className="text-xs text-[var(--text-muted)]">total</span>
            </Button>
            <Button onClick={() => startGame("assists")} className="w-full justify-between">
              <span>🎯</span>
              <span className="flex-1">Career Assists</span>
              <span className="text-xs text-[var(--text-muted)]">total</span>
            </Button>
            <div className="pt-3 border-t border-[var(--border-color)]">
              <Button onClick={() => startGame("random")} variant="secondary" className="w-full">
                🎲 Random Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "gameover") {
    return (
      <div className="max-w-lg mx-auto text-center animate-slide-up">
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
          <div className="text-5xl mb-4">💔</div>
          <h2 className="text-2xl font-bold mb-2">Game Over</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            {streak === 0 ? "Better luck next time!" : "Great effort! Here's how you did:"}
          </p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-[var(--bg-secondary)] rounded-xl p-4">
              <div className="text-5xl font-bold text-green-400">{streak}</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">Best Streak</div>
            </div>
          </div>
          <Button onClick={handlePlayAgain} className="w-full">
            Play Again
          </Button>
        </div>
        <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
      </div>
    );
  }

  if (!leftPlayer || !rightPlayer) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-[var(--bg-secondary)] px-2.5 py-1 rounded-full text-[var(--text-muted)]">
            {randomMode ? "🎲 Random" : STAT_CONFIG[currentStatType].shortLabel}
          </span>
        </div>
        <div className="text-center">
          <div className="text-sm font-medium">
            Streak: <span className="text-green-400 font-bold">{streak}</span>
          </div>
          <div className="text-xs text-[var(--text-muted)]">
            Best: {bestStreak}
          </div>
        </div>
        <div className="text-right">
          {streak > 0 && (
            <div className="text-sm font-bold text-orange-400">🔥 {streak}x</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
        <div className={cn(
          "bg-[var(--bg-card)] border rounded-2xl p-4 sm:p-5 text-center transition-all duration-300",
          "border-[var(--border-color)]"
        )}>
          <PlayerAvatar name={leftPlayer.n} className="w-14 h-14 sm:w-16 sm:h-16 text-lg sm:text-xl mx-auto mb-3" />
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <FlagIcon countryCode={leftPlayer.nc} />
            <h3 className="font-bold text-sm truncate">{leftPlayer.n}</h3>
          </div>
          <p className="text-xs text-[var(--text-muted)] truncate">{leftPlayer.c}</p>
          <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
            <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{STAT_CONFIG[currentStatType].label}</div>
            <div className="text-xl sm:text-2xl font-bold mt-1 text-green-400">{formatLeft}</div>
          </div>
        </div>

        <div className={cn(
          "bg-[var(--bg-card)] border rounded-2xl p-4 sm:p-5 text-center transition-all duration-500 relative",
          revealed
            ? lastCorrect ? "border-green-500/40" : "border-red-500/40"
            : "border-[var(--border-color)]"
        )}>
          {revealed ? (
            <div className="animate-fade-in">
              <PlayerAvatar name={rightPlayer.n} className="w-14 h-14 sm:w-16 sm:h-16 text-lg sm:text-xl mx-auto mb-3" />
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <FlagIcon countryCode={rightPlayer.nc} />
                <h3 className="font-bold text-sm truncate">{rightPlayer.n}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] truncate">{rightPlayer.c}</p>
              <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{STAT_CONFIG[currentStatType].label}</div>
                <div className="text-xl sm:text-2xl font-bold mt-1">
                  <StatCounter value={rightValue} format={STAT_CONFIG[currentStatType].format} />
                </div>
              </div>
              <div className={cn(
                "mt-3 text-sm font-bold",
                lastCorrect ? "text-green-400" : "text-red-400"
              )}>
                {lastCorrect ? "✓ Correct!" : `✗ ${leftPlayer.n} had ${formatLeft}`}
              </div>
            </div>
          ) : (
            <div className="transition-all duration-300">
              <PlayerAvatar name={rightPlayer.n} className="w-14 h-14 sm:w-16 sm:h-16 text-lg sm:text-xl mx-auto mb-3" />
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <FlagIcon countryCode={rightPlayer.nc} />
                <h3 className="font-bold text-sm truncate">{rightPlayer.n}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] truncate">{rightPlayer.c}</p>
              <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{STAT_CONFIG[currentStatType].label}</div>
                <div className="text-xl sm:text-2xl font-bold mt-1 text-[var(--text-muted)]">???</div>
              </div>
            </div>
          )}

          {!revealed && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleGuess("lower")}
                className={cn(
                  "flex-1 py-2.5 rounded-xl font-bold text-sm transition-all duration-200",
                  "bg-red-500/10 text-red-400 border border-red-500/20",
                  "hover:bg-red-500/20 hover:border-red-500/40 active:scale-95"
                )}
              >
                ↓ Lower
              </button>
              <button
                onClick={() => handleGuess("higher")}
                className={cn(
                  "flex-1 py-2.5 rounded-xl font-bold text-sm transition-all duration-200",
                  "bg-green-500/10 text-green-400 border border-green-500/20",
                  "hover:bg-green-500/20 hover:border-green-500/40 active:scale-95"
                )}
              >
                ↑ Higher
              </button>
            </div>
          )}
        </div>
      </div>

      {!revealed && (
        <p className="text-xs text-[var(--text-muted)] text-center animate-fade-in">
          Does {rightPlayer.n} have a higher or lower {STAT_CONFIG[currentStatType].label.toLowerCase()} than {leftPlayer.n}?
        </p>
      )}

      <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
    </div>
  );
}
