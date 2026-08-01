"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AuthPromptModal } from "@/components/ui/AuthPromptModal";
import { GuestPlayBlocked } from "@/components/ui/GuestPlayBlocked";
import { cn } from "@/lib/utils";
import { TRIVIA_QUESTIONS } from "@/data/trivia-questions";
import type { TriviaQuestion, TriviaState } from "@/types";
import { useGuestLimit } from "@/hooks/useGuestLimit";

const QUESTIONS_PER_ROUND = 10;
const TIME_PER_QUESTION = 15000;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions(): TriviaQuestion[] {
  const sessionId = Date.now() + Math.random();
  const shuffled = shuffleArray(TRIVIA_QUESTIONS);
  return shuffled.slice(0, QUESTIONS_PER_ROUND).map((q, i) => ({
    ...q,
    id: `trivia-${sessionId}-${i}`,
  }));
}

export function FootballTrivia() {
  const guest = useGuestLimit("trivia");
  const { blocked, openPrompt } = guest;
  const [state, setState] = useState<TriviaState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = useCallback(() => {
    if (blocked) {
      openPrompt();
      return;
    }
    const questions = pickQuestions();
    setState({
      questions,
      currentIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      answers: [],
      timeRemaining: TIME_PER_QUESTION,
      gameOver: false,
    });
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(TIME_PER_QUESTION);
  }, [blocked, openPrompt]);

  useEffect(() => {
    if (!guest.authResolved) return;
    if (!guest.blocked) {
      startGame();
    }
  }, [guest.authResolved, guest.blocked, startGame]);

  useEffect(() => {
    if (state?.gameOver) {
      guest.onGameEnd();
    }
  }, [state?.gameOver, guest.onGameEnd]);

  useEffect(() => {
    if (!state || state.gameOver || showFeedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 100) {
          handleAnswer(-1);
          return 0;
        }
        return prev - 100;
      });
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state?.currentIndex, state?.gameOver, showFeedback]);

  const handleAnswer = useCallback((answerIndex: number) => {
    if (!state || showFeedback) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const question = state.questions[state.currentIndex];
    const isCorrect = answerIndex === question.correctIndex;
    const timeTaken = TIME_PER_QUESTION - timeLeft;
    const newStreak = isCorrect ? state.streak + 1 : 0;
    const streakMultiplier = Math.min(newStreak, 3) + 1;
    const basePoints = isCorrect ? 100 : 0;
    const timeBonus = isCorrect ? Math.round((timeLeft / TIME_PER_QUESTION) * 50) : 0;
    const streakPoints = isCorrect ? (streakMultiplier - 1) * 50 : 0;
    const points = basePoints + timeBonus + streakPoints;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    setTimeout(() => {
      const newAnswers = [...state.answers, {
        questionId: question.id,
        correct: isCorrect,
        timeMs: timeTaken,
      }];

      const nextIndex = state.currentIndex + 1;
      const isGameOver = nextIndex >= QUESTIONS_PER_ROUND;

      setState({
        ...state,
        currentIndex: nextIndex,
        score: state.score + points,
        streak: newStreak,
        maxStreak: Math.max(state.maxStreak, newStreak),
        answers: newAnswers,
        gameOver: isGameOver,
      });
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(TIME_PER_QUESTION);
    }, 1200);
  }, [state, showFeedback, timeLeft]);

  if (guest.blocked && !state?.gameOver) {
    return (
      <>
        <GuestPlayBlocked />
        <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
      </>
    );
  }

  if (!state) return null;

  const question = state.questions[state.currentIndex];
  const progress = ((state.currentIndex) / QUESTIONS_PER_ROUND) * 100;
  const correctCount = state.answers.filter((a) => a.correct).length;

  if (state.gameOver) {
    const accuracy = Math.round((correctCount / QUESTIONS_PER_ROUND) * 100);
    return (
      <div className="max-w-lg mx-auto text-center animate-slide-up">
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
          <div className="text-5xl mb-4">
            {accuracy >= 80 ? "🏆" : accuracy >= 60 ? "⭐" : accuracy >= 40 ? "👍" : "📚"}
          </div>
          <h2 className="text-2xl font-bold mb-2">Trivia Complete!</h2>
          <div className="text-4xl font-bold text-green-400 my-4">{state.score}</div>
          <p className="text-[var(--text-muted)] text-sm mb-6">points</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--bg-secondary)] rounded-xl p-3">
              <div className="text-lg font-bold">{correctCount}/{QUESTIONS_PER_ROUND}</div>
              <div className="text-xs text-[var(--text-muted)]">Correct</div>
            </div>
            <div className="bg-[var(--bg-secondary)] rounded-xl p-3">
              <div className="text-lg font-bold">{accuracy}%</div>
              <div className="text-xs text-[var(--text-muted)]">Accuracy</div>
            </div>
            <div className="bg-[var(--bg-secondary)] rounded-xl p-3">
              <div className="text-lg font-bold">{state.maxStreak}</div>
              <div className="text-xs text-[var(--text-muted)]">Best Streak</div>
            </div>
          </div>

          <div className="space-y-1.5 mb-6">
            {state.answers.map((a, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm",
                  a.correct ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                )}
              >
                <span>{a.correct ? "✓" : "✗"}</span>
                <span className="truncate">Q{i + 1}</span>
                <span className="ml-auto text-xs text-[var(--text-muted)]">
                  {Math.round(a.timeMs / 1000)}s
                </span>
              </div>
            ))}
          </div>

          <Button onClick={startGame} className="w-full">
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  const timerPercent = (timeLeft / TIME_PER_QUESTION) * 100;
  const timerColor = timeLeft > 10000 ? "bg-green-500" : timeLeft > 5000 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[var(--text-muted)]">
            Question {state.currentIndex + 1} / {QUESTIONS_PER_ROUND}
          </span>
          <div className="flex items-center gap-3">
            {state.streak > 1 && (
              <span className="text-xs font-bold text-orange-400 animate-fade-in">
                🔥 {state.streak}x streak
              </span>
            )}
            <span className="text-xs font-bold text-green-400">{state.score} pts</span>
          </div>
        </div>
        <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="h-1 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-100", timerColor)}
            style={{ width: `${timerPercent}%` }}
          />
        </div>
        <div className="text-right mt-1">
          <span className={cn(
            "text-xs font-mono",
            timeLeft > 10000 ? "text-green-400" : timeLeft > 5000 ? "text-yellow-400" : "text-red-400"
          )}>
            {Math.ceil(timeLeft / 1000)}s
          </span>
        </div>
      </div>

      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] uppercase tracking-wider">
            {question.category}
          </span>
          <span className={cn(
            "text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider",
            question.difficulty === "easy" ? "bg-green-500/10 text-green-400" :
            question.difficulty === "medium" ? "bg-yellow-500/10 text-yellow-400" :
            "bg-red-500/10 text-red-400"
          )}>
            {question.difficulty}
          </span>
        </div>

        <p className="text-base sm:text-lg font-medium mb-6 leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-2.5">
          {question.options.map((option, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrectAnswer = i === question.correctIndex;
            const showResult = showFeedback;

            return (
              <button
                key={i}
                onClick={() => !showFeedback && handleAnswer(i)}
                disabled={showFeedback}
                className={cn(
                  "w-full px-4 py-3 rounded-xl text-sm text-left transition-all duration-200 border",
                  showResult && isCorrectAnswer
                    ? "bg-green-500/20 border-green-500/50 text-green-300"
                    : showResult && isSelected && !isCorrectAnswer
                    ? "bg-red-500/20 border-red-500/50 text-red-300"
                    : isSelected
                    ? "bg-white/10 border-white/20"
                    : "bg-[var(--bg-secondary)] border-[var(--border-color)] hover:bg-white/5 hover:border-white/10"
                )}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                {option}
                {showResult && isCorrectAnswer && (
                  <span className="ml-2 text-green-400">✓</span>
                )}
                {showResult && isSelected && !isCorrectAnswer && (
                  <span className="ml-2 text-red-400">✗</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AuthPromptModal isOpen={guest.showPrompt} onClose={guest.closePrompt} />
    </div>
  );
}
