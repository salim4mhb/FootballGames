"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AuthPromptModal } from "@/components/ui/AuthPromptModal";
import { GuestPlayBlocked } from "@/components/ui/GuestPlayBlocked";
import { PlayerAvatar, FlagIcon } from "@/components/ui/Media";
import { cn } from "@/lib/utils";
import { searchPlayers, getAllPlayers } from "@/data/players";
import type { PlayerRecord } from "@/data/players";
import type { Guess } from "@/types";
import { useGuestLimit } from "@/hooks/useGuestLimit";

interface Hint {
  label: string;
  value: string;
}

interface GuessThePlayerProps {
  dailyPlayer?: { id: string; full_name: string; short_name: string; nationality: string; country_code: string; current_club: string; position: string; market_value: number | null; goals_total: number; league: string };
  dailyClues?: Hint[];
  isAuthenticated?: boolean;
  mode?: "daily" | "play";
}

const MAX_GUESSES = 8;
const TOTAL_CLUES = 6;

function normalize(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function generateCluesFromRecord(rec: PlayerRecord): Hint[] {
  const clues: Hint[] = [];
  clues.push({ label: "Position", value: rec.p });
  clues.push({ label: "Nationality", value: rec.na });

  if (rec.t && rec.t.length > 0) {
    clues.push({
      label: "Career Clubs",
      value: rec.t.slice(0, 3).join(", ") + (rec.t.length > 3 ? "..." : ""),
    });
  } else {
    clues.push({ label: "Current Club", value: rec.c });
  }

  clues.push({ label: "League", value: rec.l });
  clues.push({ label: "Career Goals", value: `${rec.g}+ goals` });

  if (rec.dob) {
    const year = new Date(rec.dob).getFullYear();
    if (!isNaN(year)) {
      clues.push({ label: "Born", value: `${year}` });
    } else {
      clues.push({ label: "Height", value: `${rec.h} cm` });
    }
  } else if (rec.h) {
    clues.push({ label: "Height", value: `${rec.h} cm` });
  } else {
    clues.push({ label: "Market Value", value: rec.mv ? `€${Math.round(rec.mv / 1_000_000)}M` : "Unknown" });
  }

  return clues;
}

function pickRandomPlayer(): { player: GuessThePlayerProps["dailyPlayer"]; clues: Hint[] } {
  const all = getAllPlayers().filter((p) => p.active !== false);
  if (all.length === 0) {
    const fallback = getAllPlayers()[0] || { n: "Unknown Player", s: "Unknown", na: "Unknown", nc: "XX", c: "Unknown", l: "Unknown", p: "N/A", sn: 0, dob: "1990-01-01", h: 180, mv: 0, g: 0, a: 0, t: [], cp: [] };
    return {
      player: {
        id: fallback.n.toLowerCase().replace(/\s+/g, "-"),
        full_name: fallback.n,
        short_name: fallback.s,
        nationality: fallback.na,
        country_code: fallback.nc,
        current_club: fallback.c,
        position: fallback.p,
        market_value: fallback.mv,
        goals_total: fallback.g,
        league: fallback.l,
      },
      clues: generateCluesFromRecord(fallback),
    };
  }
  const chosen = all[Math.floor(Math.random() * all.length)];
  return {
    player: {
      id: chosen.n.toLowerCase().replace(/\s+/g, "-"),
      full_name: chosen.n,
      short_name: chosen.s,
      nationality: chosen.na,
      country_code: chosen.nc,
      current_club: chosen.c,
      position: chosen.p,
      market_value: chosen.mv,
      goals_total: chosen.g,
      league: chosen.l,
    },
    clues: generateCluesFromRecord(chosen),
  };
}

export function GuessThePlayer({
  dailyPlayer: initialPlayer,
  dailyClues: initialClues = [],
  isAuthenticated = false,
  mode = "daily",
}: GuessThePlayerProps) {
  const guest = useGuestLimit("guess-the-player", isAuthenticated);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [revealedClues, setRevealedClues] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Record<string, unknown>[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Record<string, unknown> | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [currentClues, setCurrentClues] = useState(initialClues);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const totalClues = Math.min(currentClues.length, TOTAL_CLUES);

  useEffect(() => {
    if (totalClues > 0 && revealedClues === 0) {
      setRevealedClues(1);
    }
  }, [totalClues, revealedClues]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 100);
    return () => clearInterval(interval);
  }, [startTime, gameOver]);

  const handleSearch = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const res = await fetch(`/api/games/search-players?q=${encodeURIComponent(query)}`);
      if (res.ok) {
        const data = await res.json();
        setSearchResults(data.players || []);
        setHighlightIndex(-1);
      }
    } catch {
      // Fail silently
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => handleSearch(searchQuery), 250);
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [searchQuery, handleSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSearchResults([]);
        setHighlightIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      selectPlayer(searchResults[highlightIndex]);
    } else if (e.key === "Escape") {
      setSearchResults([]);
      setHighlightIndex(-1);
    }
  }

  function selectPlayer(player: Record<string, unknown>) {
    setSelectedPlayer(player);
    setSearchQuery(player.full_name as string);
    setSearchResults([]);
    setHighlightIndex(-1);
    inputRef.current?.focus();
  }

  function clearSelection() {
    setSelectedPlayer(null);
    setSearchQuery("");
    setSearchResults([]);
    setHighlightIndex(-1);
  }

  function endGame(win: boolean, guess: Guess, score: number) {
    setGuesses((prev) => [...prev, guess]);
    if (win) {
      setWon(true);
      setGameOver(true);
      setFinalScore(score);
      setRevealedClues(totalClues);
    } else {
      setRevealedClues((prev) => Math.min(prev + 1, totalClues));
      const newCount = guesses.length + 1;
      if (newCount >= MAX_GUESSES) {
        setGameOver(true);
        setFinalScore(0);
      }
    }
  }

  async function submitGuess() {
    if (gameOver || submitting) return;
    if (!selectedPlayer || !currentPlayer) return;

    if (guest.blocked) {
      guest.openPrompt();
      return;
    }

    setSubmitting(true);
    const guessedName = selectedPlayer.full_name as string || selectedPlayer.short_name as string || "";
    const isCorrect = normalize(guessedName) === normalize(currentPlayer.full_name);
    const currentGuessNum = guesses.length + 1;
    const playerToGuess = selectedPlayer;
    clearSelection();

    // Try API for session tracking (best-effort)
    try {
      await fetch("/api/games/guess-player", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          player_id: playerToGuess.id,
          session_id: currentPlayer.id,
          guess_number: currentGuessNum,
        }),
      });
    } catch {
      // API unavailable - game still works via client-side validation
    }

    const score = isCorrect ? Math.max(100 - (currentGuessNum - 1) * 15, 10) : 0;
    const guess: Guess = {
      player_id: playerToGuess.id as string,
      player_name: guessedName,
      timestamp: Date.now(),
      is_correct: isCorrect,
    };

    endGame(isCorrect, guess, score);
    setSubmitting(false);
  }

  useEffect(() => {
    if (gameOver) {
      guest.onGameEnd();
    }
  }, [gameOver]);

  function playAgain() {
    if (guest.blocked) {
      guest.openPrompt();
      return;
    }
    const { player, clues } = pickRandomPlayer();
    setCurrentPlayer(player);
    setCurrentClues(clues);
    setGuesses([]);
    setRevealedClues(0);
    setSearchQuery("");
    setSearchResults([]);
    setSelectedPlayer(null);
    setGameOver(false);
    setWon(false);
    setSubmitting(false);
    setHighlightIndex(-1);
    setFinalScore(0);
    setStartTime(Date.now());
    setElapsedTime(0);
  }

  const isGameOver = gameOver;
  const guessesLeft = MAX_GUESSES - guesses.length;
  const hasGuessesLeft = guessesLeft > 0;
  const canSubmit = selectedPlayer !== null && !submitting && !isGameOver && hasGuessesLeft;

  function generateShareEmoji(): string {
    return guesses.map((g) => (g.is_correct ? "\u{1F7E9}" : "\u{1F7E5}")).join("");
  }

  const shareText = generateShareEmoji();

  if (guest.blocked && !gameOver) {
    return (
      <>
        <GuestPlayBlocked />
        <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Guess the Player</h1>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base">
          {mode === "daily" ? "Daily Challenge" : "Free Play"} — Reveal clues and identify the mystery footballer
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 text-sm text-[var(--text-muted)]">
          <span>⏱ {formatTime(elapsedTime)}</span>
          <span>🎯 {guesses.length} / {MAX_GUESSES}</span>
          <span>💡 {revealedClues} / {totalClues}</span>
        </div>
      </div>

      {totalClues > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {Array.from({ length: totalClues }).map((_, i) => {
            const clue = currentClues[i];
            const isRevealed = i < revealedClues;

            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl p-4 border transition-all duration-500 min-h-[72px]",
                  isRevealed
                    ? "bg-[var(--bg-card)] border-[var(--border-accent)]"
                    : "bg-[var(--bg-card)]/50 border-[var(--border-color)]"
                )}
              >
                {isRevealed && clue ? (
                  <div className="animate-fade-in">
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      {clue.label}
                    </div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">
                      {clue.value}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[2.5rem]">
                    <span className="text-[var(--text-muted)] text-xl sm:text-2xl">🔒</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-[var(--text-muted)] text-sm mb-8 py-8 bg-[var(--bg-card)]/30 rounded-xl border border-dashed border-[var(--border-color)]">
          No clues available. Start guessing!
        </div>
      )}

      {guesses.length > 0 && (
        <div className="mb-6 space-y-2">
          <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Your Guesses
          </h3>
          {guesses.map((g, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl border animate-fade-in",
                g.is_correct
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-red-500/10 border-red-500/30"
              )}
            >
              <span className="text-base sm:text-lg">{g.is_correct ? "\u2705" : "\u274C"}</span>
              <span className="text-sm font-medium">{g.player_name}</span>
              <span className="text-xs text-[var(--text-muted)] ml-auto">
                Guess #{i + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {!isGameOver && hasGuessesLeft && (
        <div className="mb-6" ref={dropdownRef}>
          <div className="relative">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedPlayer(null);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for a player..."
                  className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-colors text-sm"
                  autoComplete="off"
                  disabled={submitting}
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
                  </div>
                )}
                {selectedPlayer && (
                  <button
                    onClick={clearSelection}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white text-lg leading-none"
                    aria-label="Clear selection"
                  >
                    ×
                  </button>
                )}
              </div>
              <Button onClick={submitGuess} disabled={!canSubmit} className="px-6 py-3 shrink-0">
                {submitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Guess"
                )}
              </Button>
            </div>

            {selectedPlayer && (
              <div className="mt-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 animate-fade-in">
                <span className="text-sm">✓</span>
                <span className="text-sm font-medium text-green-400">
                  {selectedPlayer.full_name as string}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  — {selectedPlayer.current_club as string}
                </span>
              </div>
            )}

            {searchResults.length > 0 && !selectedPlayer && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-xl shadow-2xl max-h-64 overflow-y-auto z-50">
                {searchResults.map((player, idx) => (
                  <button
                    key={player.id as string}
                    onClick={() => selectPlayer(player)}
                    onMouseEnter={() => setHighlightIndex(idx)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                      idx === highlightIndex ? "bg-white/10" : "hover:bg-white/5"
                    )}
                  >
                    <PlayerAvatar name={player.full_name as string} className="w-8 h-8 text-xs" />
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{player.full_name as string}</div>
                      <div className="text-xs text-[var(--text-muted)] truncate flex items-center gap-1">
                        <FlagIcon countryCode={player.country_code as string} className="w-3.5 h-3" />
                        {(player as any).current_club} · {(player as any).position} · {(player as any).nationality}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchResults.length === 0 && searchQuery.length >= 2 && !isSearching && !selectedPlayer && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-xl shadow-2xl p-4 text-center text-sm text-[var(--text-muted)] z-50">
                No players found. Try a different name.
              </div>
            )}
          </div>

          <p className="text-xs text-[var(--text-muted)] mt-2 text-center">
            {guessesLeft} {guessesLeft === 1 ? "guess" : "guesses"} remaining
          </p>
        </div>
      )}

      {isGameOver && (
        <div className="text-center space-y-4 animate-slide-up">
          {won ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 sm:p-8">
              <div className="text-5xl mb-3">🎉</div>
              <h2 className="text-2xl font-bold text-green-400 mb-1">Correct!</h2>
              {currentPlayer && (
                <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                  <PlayerAvatar name={currentPlayer.full_name} className="w-10 h-10 text-sm" />
                  <FlagIcon countryCode={currentPlayer.country_code} />
                  <span className="text-white font-semibold text-lg">{currentPlayer.full_name}</span>
                </div>
              )}
              <div className="flex items-center justify-center gap-4 mt-3 text-sm">
                <span className="text-green-400 font-bold">+{finalScore} pts</span>
                <span className="text-[var(--text-muted)]">
                  {guesses.length} {guesses.length === 1 ? "guess" : "guesses"} · {formatTime(elapsedTime)}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 sm:p-8">
              <div className="text-5xl mb-3">😢</div>
              <h2 className="text-2xl font-bold text-red-400 mb-1">
                Out of Guesses
              </h2>
              {currentPlayer && (
                <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                  <PlayerAvatar name={currentPlayer.full_name} className="w-10 h-10 text-sm" />
                  <FlagIcon countryCode={currentPlayer.country_code} />
                  <span className="text-white font-semibold text-lg">{currentPlayer.full_name}</span>
                </div>
              )}
              <p className="text-[var(--text-secondary)]">
                Better luck next time!
              </p>
              {currentPlayer && (
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-muted)]">
                  <span>{currentPlayer.position}</span>
                  <span>·</span>
                  <span>{currentPlayer.current_club}</span>
                  <span>·</span>
                  <span>{currentPlayer.nationality}</span>
                  {currentPlayer.market_value != null && (
                    <>
                      <span>·</span>
                      <span className="text-green-400 font-medium">{formatMarketValue(currentPlayer.market_value)}</span>
                    </>
                  )}
                  {currentPlayer.goals_total > 0 && (
                    <>
                      <span>·</span>
                      <span>{currentPlayer.goals_total} goals</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {shareText && (
            <div className="inline-flex items-center gap-1 text-2xl p-3 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
              {shareText}
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => {
                const text = `\u26BD Guess the Player\n${shareText}\n${guesses.length}/${MAX_GUESSES} guesses\n\nPlay at footballminigames.com`;
                navigator.clipboard.writeText(text).catch(() => {});
              }}
              variant="secondary"
            >
              📋 Copy Result
            </Button>
            <Button onClick={playAgain}>
              {mode === "daily" ? "Next Player" : "Play Again"}
            </Button>
          </div>
        </div>
      )}

      <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
    </div>
  );

  function formatTime(ms: number) {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  }

  function formatMarketValue(mv: number | null) {
    if (!mv) return "N/A";
    if (mv >= 1_000_000_000) return `€${(mv / 1_000_000_000).toFixed(1)}B`;
    if (mv >= 1_000_000) return `€${Math.round(mv / 1_000_000)}M`;
    if (mv >= 1_000) return `€${Math.round(mv / 1_000)}K`;
    return `€${mv}`;
  }
}
