"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FlagIcon } from "@/components/ui/Media";
import { AuthPromptModal } from "@/components/ui/AuthPromptModal";
import { GuestPlayBlocked } from "@/components/ui/GuestPlayBlocked";
import { searchPlayers, normalizeName } from "@/data/players";
import type { PlayerRecord } from "@/data/players";
import { getRandomQuestion, getDailyQuestion, type Top10Question } from "@/data/top10questions";
import { useGuestLimit } from "@/hooks/useGuestLimit";

const MAX_LIVES = 3;
const RANK_COUNT = 10;

export function Top10Challenge() {
  const guest = useGuestLimit("top10");
  const [question, setQuestion] = useState<Top10Question>(getDailyQuestion);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [lives, setLives] = useState(MAX_LIVES);
  const [gameOver, setGameOver] = useState<"playing" | "won" | "lost">("playing");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PlayerRecord[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [shake, setShake] = useState(false);
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameOver !== "playing") {
      guest.onGameEnd();
    }
  }, [gameOver]);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ message, type });
    toastTimeout.current = setTimeout(() => setToast(null), 2000);
  }, []);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (query.trim().length < 1) {
      setResults([]);
      return;
    }
    searchTimeout.current = setTimeout(() => {
      setResults(searchPlayers(query, 8));
    }, 150);
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function newChallenge() {
    if (guest.blocked) {
      guest.openPrompt();
      return;
    }
    setQuestion(getRandomQuestion(question.id));
    setRevealed(new Set());
    setLives(MAX_LIVES);
    setGameOver("playing");
    setQuery("");
    setResults([]);
    setToast(null);
    setShake(false);
  }

  function endLost() {
    setGameOver("lost");
    setResults([]);
  }

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  function guessName(playerName: string) {
    if (gameOver !== "playing") return;

    const idx = question.list.findIndex(
      (entry) => normalizeName(entry.name) === normalizeName(playerName)
    );

    if (idx === -1) {
      const nextLives = lives - 1;
      setLives(nextLives);
      triggerShake();
      showToast("Player is not on the list", "error");
      if (nextLives <= 0) {
        setTimeout(endLost, 600);
      }
      return;
    }

    if (revealed.has(idx)) {
      showToast("Already revealed", "error");
      return;
    }

    const next = new Set(revealed);
    next.add(idx);
    setRevealed(next);
    showToast("Correct! Player added", "success");

    if (next.size >= RANK_COUNT) {
      setTimeout(() => setGameOver("won"), 400);
    }
  }

  function handleSelect(player: PlayerRecord) {
    guessName(player.n);
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleSelect(results[0]);
    }
  }

  const allRevealed = revealed.size >= RANK_COUNT;

  if (guest.blocked && gameOver === "playing") {
    return (
      <>
        <GuestPlayBlocked />
        <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
      </>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-emerald-400 font-extrabold mb-1.5">
          Football Top 10
        </div>
        <h2 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
          {question.title}
        </h2>

        {/* Lives + counter */}
        <div className="flex items-center justify-center gap-4 mt-3 text-xs">
          <span className={`flex items-center gap-1 ${shake ? "animate-shake" : ""}`}>
            {Array.from({ length: MAX_LIVES }, (_, i) => (
              <span
                key={i}
                className={`text-base transition-all duration-300 ${
                  i < lives ? "text-red-400 scale-100" : "text-gray-700 scale-90"
                }`}
              >
                ❤️
              </span>
            ))}
          </span>
          <span className="text-[var(--text-muted)] font-semibold">
            {revealed.size}/{RANK_COUNT}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs mx-auto mt-2 h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(revealed.size / RANK_COUNT) * 100}%` }}
          />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`mb-3 px-4 py-2.5 rounded-xl text-sm font-medium text-center animate-slide-down ${
            toast.type === "success"
              ? "bg-green-500/15 text-green-400 border border-green-500/20"
              : "bg-red-500/15 text-red-400 border border-red-500/20"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Slots */}
      <div
        className={`bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden mb-4 ${
          shake ? "animate-shake" : ""
        }`}
      >
        {question.list.map((entry, i) => {
          const isCorrect = revealed.has(i);
          const isLossReveal = gameOver === "lost" && !isCorrect;

          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[var(--border-color)] last:border-0 transition-colors duration-300 ${
                isCorrect
                  ? "bg-green-500/10"
                  : isLossReveal
                  ? "bg-red-500/10"
                  : "bg-transparent"
              }`}
            >
              {/* Rank */}
              <span className="text-xs sm:text-sm font-bold w-5 sm:w-6 shrink-0 text-[var(--text-muted)] text-right">
                {i + 1}.
              </span>

              {/* Flag hint */}
              <span className="text-base sm:text-lg leading-none shrink-0">
                {entry.flag}
              </span>

              {/* Content */}
              {isCorrect || isLossReveal ? (
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium truncate ${isLossReveal ? "text-gray-400" : "text-white"}`}>
                    {entry.name}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center">
                  <div className="h-7 sm:h-8 flex-1 rounded-lg bg-blue-950/70 border border-blue-800/50 flex items-center px-3">
                    <span className="text-xs text-blue-300/60">???</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Search / Game Over */}
      {gameOver === "playing" && !allRevealed && (
        <div ref={dropdownRef} className="mb-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a player name..."
                  className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-green-500/50 text-sm pr-10"
                  autoFocus
                  autoComplete="off"
                />
              </div>
              <button
                onClick={endLost}
                title="Give up"
                className="px-2.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-lg hover:bg-red-500/10 hover:border-red-500/30 transition-colors"
              >
                🏳️
              </button>
            </div>

            {results.length > 0 && (
              <div className="mt-2 max-h-40 overflow-y-auto space-y-1">
                {results.map((player, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(player)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-white/5 transition-colors"
                  >
                    <FlagIcon countryCode={player.nc} className="w-5 h-4 rounded-sm object-cover shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">{player.n}</div>
                      <div className="text-[10px] text-[var(--text-muted)] truncate">{player.c}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {query.trim().length >= 1 && results.length === 0 && (
              <div className="mt-2 text-center text-xs text-[var(--text-muted)] py-2">
                No players found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Action buttons */}
      {gameOver !== "playing" && (
        <div className="flex gap-2">
          <Button onClick={newChallenge} className="flex-1 text-sm">
            Play Next Challenge
          </Button>
        </div>
      )}

      {/* Win screen */}
      {gameOver === "won" && (
        <div className="text-center mt-4 animate-slide-up">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">All {RANK_COUNT} Revealed!</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {lives === MAX_LIVES
                ? "Flawless victory!"
                : `${lives} ${lives === 1 ? "life" : "lives"} remaining`}
            </p>
          </div>
        </div>
      )}

      {/* Lose screen */}
      {gameOver === "lost" && (
        <div className="text-center mt-4 animate-slide-up">
          <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/10 rounded-2xl p-6">
            <div className="text-5xl mb-3">📋</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Game Over</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {lives === 0 ? "No lives remaining" : "You gave up!"}
            </p>
          </div>
        </div>
      )}

      <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
    </div>
  );
}
