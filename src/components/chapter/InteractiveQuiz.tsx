import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, CheckCircle2, Clock } from "lucide-react";
import { QuizQuestion } from "./QuizQuestion";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";
import { useStore } from "@/store/useStore";
import { useQuizSessionStore } from "@/store/quizSessionStore";
import { computeXP } from "@/lib/xp";

interface InteractiveQuizProps {
  questions: SelfTestQuestion[];
  unterkapitelId?: string;
  onAnswer?: (questionIndex: number, isCorrect: boolean) => void;
  /** Called when all questions are answered; (correctCount, total) for SRS. */
  onAllComplete?: (correctCount: number, total: number) => void;
}

/**
 * Enhanced interactive quiz component for BMS chapters.
 * Shows immediate feedback per question with explanations.
 * Tracks first-attempt accuracy and shows end summary.
 */
export function InteractiveQuiz({ questions, onAnswer, onAllComplete }: InteractiveQuizProps) {
  const [questionResults, setQuestionResults] = useState<Record<number, boolean>>({});
  /** Tracks whether each question was answered correctly on the very first click. */
  const [firstAttemptResults, setFirstAttemptResults] = useState<Record<number, boolean>>({});
  /** Set of question indices that were force-marked wrong due to timer expiry. */
  const [timedOutQuestions, setTimedOutQuestions] = useState<Set<number>>(new Set());

  // Timer state
  const quizTimerSeconds = useStore((s) => s.quizTimerSeconds);
  const [timerRemaining, setTimerRemaining] = useState(quizTimerSeconds);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Determine the next unanswered question index
  const nextUnansweredIndex = questions.findIndex((_, i) => !(i in questionResults));

  // Reset timer when the next unanswered question changes
  useEffect(() => {
    if (quizTimerSeconds <= 0 || nextUnansweredIndex < 0) return;
    setTimerRemaining(quizTimerSeconds);
  }, [nextUnansweredIndex, quizTimerSeconds]);

  // Run countdown interval
  useEffect(() => {
    if (quizTimerSeconds <= 0 || nextUnansweredIndex < 0) return;

    timerRef.current = setInterval(() => {
      setTimerRemaining((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizTimerSeconds, nextUnansweredIndex]);

  // When timer hits 0, force-mark the current question as wrong
  const handleTimerExpiry = useCallback((index: number) => {
    setTimedOutQuestions((prev) => new Set(prev).add(index));
  }, []);

  useEffect(() => {
    if (quizTimerSeconds <= 0 || nextUnansweredIndex < 0) return;
    if (timerRemaining <= 0) {
      handleTimerExpiry(nextUnansweredIndex);
    }
  }, [timerRemaining, quizTimerSeconds, nextUnansweredIndex, handleTimerExpiry]);

  const handleAnswerChange = (questionIndex: number, isCorrect: boolean) => {
    // Award XP with multipliers
    const question = questions[questionIndex];
    if (question && isCorrect) {
      const baseXP = computeXP({
        baseXP: 10,
        difficultyMultiplier: question.difficulty ?? 1,
      });

      let finalXP = baseXP;

      // Apply hot-streak bonus (125% XP)
      const hotStreakActive = useQuizSessionStore.getState().hotStreakActive;
      if (hotStreakActive) {
        finalXP = Math.round(finalXP * 1.25);
      }

      useStore.getState().addXP(finalXP);
    }

    setQuestionResults((prev) => ({
      ...prev,
      [questionIndex]: isCorrect,
    }));
    onAnswer?.(questionIndex, isCorrect);
  };

  const handleFirstAttempt = (questionIndex: number, isCorrect: boolean) => {
    setFirstAttemptResults((prev) => ({
      ...prev,
      [questionIndex]: isCorrect,
    }));
  };

  const totalCorrect = Object.values(questionResults).filter(Boolean).length;
  const totalAnswered = Object.keys(questionResults).length;
  const firstAttemptCorrect = Object.values(firstAttemptResults).filter(Boolean).length;
  const allAnswered = questions.length > 0 && totalAnswered >= questions.length;

  useEffect(() => {
    if (allAnswered && onAllComplete) {
      onAllComplete(totalCorrect, questions.length);
    }
  }, [allAnswered, questions.length, totalCorrect, onAllComplete]);

  // Summary color based on score
  const scoreRatio = questions.length > 0 ? firstAttemptCorrect / questions.length : 0;
  const summaryColor = scoreRatio >= 0.8 ? "emerald" : scoreRatio >= 0.5 ? "amber" : "red";

  // Format seconds as m:ss
  const formatTimer = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-5 mt-8">
      {/* Header */}
      <div className="pb-4 mb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/8 dark:bg-[var(--accent)]/12 px-3 py-1.5 rounded-md">
            Kontrollfragen
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
        {totalAnswered > 0 && !allAnswered && (
          <p className="text-sm text-[var(--muted)]">
            {totalCorrect}/{totalAnswered} richtig
          </p>
        )}
      </div>

      {/* Questions */}
      {questions.map((question, index) => {
        // Safe fallback for missing data
        if (!question || !question.question || !question.options || question.options.length === 0) {
          return (
            <div
              key={index}
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4"
            >
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Frage {index + 1} hat unvollständige Daten und wird übersprungen.
              </p>
            </div>
          );
        }

        const isCurrentTimerQuestion =
          quizTimerSeconds > 0 && index === nextUnansweredIndex && !allAnswered;
        const isTimedOut = timedOutQuestions.has(index);

        return (
          <div key={index}>
            {/* Timer display for current question */}
            {isCurrentTimerQuestion && (
              <div className="flex items-center gap-2 mb-2 ml-1">
                <Clock className="w-3.5 h-3.5 text-[var(--muted)]" />
                <span
                  className={`text-sm font-mono font-medium ${
                    timerRemaining <= 10 ? "text-red-600 dark:text-red-400" : "text-[var(--muted)]"
                  }`}
                >
                  {formatTimer(timerRemaining)}
                </span>
                <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden max-w-[200px]">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-linear"
                    style={{
                      width: `${(timerRemaining / quizTimerSeconds) * 100}%`,
                      background:
                        timerRemaining <= 10
                          ? "var(--color-red-500, #ef4444)"
                          : "var(--accent, #3b82f6)",
                    }}
                  />
                </div>
              </div>
            )}
            <QuizQuestion
              question={question}
              questionNumber={index + 1}
              onAnswerChange={(isCorrect) => handleAnswerChange(index, isCorrect)}
              onFirstAttempt={(isCorrect) => handleFirstAttempt(index, isCorrect)}
              forceWrong={isTimedOut}
            />
          </div>
        );
      })}

      {/* End Summary */}
      <AnimatePresence>
        {allAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className={`rounded-xl border p-5 mt-4 ${
              summaryColor === "emerald"
                ? "bg-emerald-50 dark:bg-emerald-900/15 border-emerald-300 dark:border-emerald-700"
                : summaryColor === "amber"
                  ? "bg-amber-50 dark:bg-amber-900/15 border-amber-300 dark:border-amber-700"
                  : "bg-red-50 dark:bg-red-900/15 border-red-300 dark:border-red-700"
            }`}
          >
            <div className="flex items-center gap-3">
              {scoreRatio >= 0.8 ? (
                <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              ) : (
                <CheckCircle2
                  className={`w-6 h-6 shrink-0 ${
                    summaryColor === "amber"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                />
              )}
              <div>
                <p
                  className={`text-base font-bold ${
                    summaryColor === "emerald"
                      ? "text-emerald-800 dark:text-emerald-200"
                      : summaryColor === "amber"
                        ? "text-amber-800 dark:text-amber-200"
                        : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {firstAttemptCorrect}/{questions.length} richtig beim ersten Versuch
                </p>
                <p
                  className={`text-sm mt-0.5 ${
                    summaryColor === "emerald"
                      ? "text-emerald-700 dark:text-emerald-300"
                      : summaryColor === "amber"
                        ? "text-amber-700 dark:text-amber-300"
                        : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {scoreRatio >= 0.8
                    ? "Sehr gut! Du beherrschst dieses Thema."
                    : scoreRatio >= 0.5
                      ? "Solide Grundlage. Lies die Erklärungen nochmal durch."
                      : "Wiederhole das Kapitel und versuche es erneut."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
