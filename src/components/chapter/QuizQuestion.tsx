import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import type { SelfTestQuestion } from "../../data/bmsKapitel/types";
import { stripMarkdownAsterisks, stripLatex } from "../../utils/formatExplanation";
import { playCorrectAnswerSound } from "../../lib/sounds";
import { useQuizSessionStore } from "../../store/quizSessionStore";
import { CorrectBurst, WrongShake, StreakConfetti } from "../ui/AnswerFeedback";

type QuizQuestionProps = {
  question: SelfTestQuestion;
  questionNumber: number;
  /** (isCorrect, secondTry). Second try = correct after hint; XP 50% when secondTry. */
  onAnswerChange?: (isCorrect: boolean, secondTry?: boolean) => void;
  /** Called on first answer attempt only (before retry). Used for summary tracking. */
  onFirstAttempt?: (isCorrect: boolean) => void;
  /** When true, force-mark question as wrong (e.g. timer expired). */
  forceWrong?: boolean;
};

/**
 * Interaktives Quiz: Immediate Feedback, kein Prüfen-Button, Glassmorphism-Feedback, Smart Reveal, Input Lock.
 * Premium animations: CorrectBurst sparkles, WrongShake red pulse, StreakConfetti on 5-streak.
 */
export const QuizQuestion = React.memo(function QuizQuestion({
  question,
  questionNumber,
  onAnswerChange,
  onFirstAttempt,
  forceWrong,
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [firstAttemptRecorded, setFirstAttemptRecorded] = useState(false);

  // Premium animation triggers — increment to re-fire the animation
  const [correctBurstTrigger, setCorrectBurstTrigger] = useState(0);
  const [wrongShakeTrigger, setWrongShakeTrigger] = useState(0);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [burstOptionIndex, setBurstOptionIndex] = useState<number | null>(null);
  const [shakeOptionIndex, setShakeOptionIndex] = useState<number | null>(null);

  const correctIndex = question.correctIndex !== undefined ? question.correctIndex : 0;
  const explanation = question.explanation || "Erklärung folgt";
  const merksatz = (question as { merksatz?: string }).merksatz;
  const options = question.options || [];

  const recordQuizAnswer = useQuizSessionStore((s) => s.recordQuizAnswer);
  const consecutiveCorrect = useQuizSessionStore((s) => s.consecutiveCorrect);

  // Fire confetti whenever the streak crosses a multiple of 5 (5, 10, 15 …)
  const prevConsecutive = useRef(consecutiveCorrect);
  useEffect(() => {
    const prev = prevConsecutive.current;
    prevConsecutive.current = consecutiveCorrect;
    if (consecutiveCorrect > 0 && consecutiveCorrect % 5 === 0 && consecutiveCorrect > prev) {
      queueMicrotask(() => setConfettiTrigger((t) => t + 1));
    }
  }, [consecutiveCorrect]);

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    const isCorrect = index === correctIndex;

    // Track first attempt for summary
    if (!firstAttemptRecorded) {
      setFirstAttemptRecorded(true);
      onFirstAttempt?.(isCorrect);
    }

    if (isCorrect) {
      playCorrectAnswerSound();
      recordQuizAnswer(true);
      // Sparkle burst on the chosen correct option
      setBurstOptionIndex(index);
      setCorrectBurstTrigger((t) => t + 1);
      onAnswerChange?.(isCorrect);
      return;
    }
    // Wrong answer: show explanation and correct answer immediately
    recordQuizAnswer(false);
    // Red pulse on the chosen wrong option
    setShakeOptionIndex(index);
    setWrongShakeTrigger((t) => t + 1);
    onAnswerChange?.(false);
  };

  // Force wrong answer when timer expires (forceWrong prop)
  useEffect(() => {
    if (forceWrong && !isAnswered) {
      const wrongIdx = correctIndex === 0 ? 1 : 0;
      handleSelectAnswer(wrongIdx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceWrong]);

  const isCorrect = isAnswered && selectedOption === correctIndex;
  const isWrong = isAnswered && selectedOption !== null && selectedOption !== correctIndex;

  return (
    <>
      {/* Streak confetti — fixed overlay, one instance per question component */}
      <StreakConfetti trigger={confettiTrigger} />

      <motion.div
        className="rounded-xl border-t border-[var(--border)]/40 pt-6 pb-5 px-5 transition-colors first:border-t-0 first:pt-0"
        animate={isWrong ? { x: [0, -6, 6, -6, 0] } : {}}
        data-answered={isAnswered}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Question */}
        <div className="mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="shrink-0 text-sm font-medium text-[var(--muted)]">
              {questionNumber}.
            </span>
            <p className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed flex-1">
              {stripLatex(question.question)}
            </p>
          </div>

          {/* Options: Sofort-Check (Grün/Rot), Lock-In nach Klick */}
          <div
            className="ml-0 sm:ml-11 flex flex-col gap-2"
            role="radiogroup"
            aria-label={`Antwortmöglichkeiten für Frage ${questionNumber}`}
          >
            {options.map((option, oi) => {
              const isChosen = selectedOption === oi;
              const showAsCorrect = isAnswered && oi === correctIndex;
              const isWrongChosen = isAnswered && isChosen && oi !== correctIndex;

              return (
                <div key={oi} className="relative">
                  {/* CorrectBurst sparkles — only on the chosen correct option */}
                  {oi === burstOptionIndex && <CorrectBurst trigger={correctBurstTrigger} />}
                  {/* WrongShake red pulse — only on the chosen wrong option */}
                  {oi === shakeOptionIndex && <WrongShake trigger={wrongShakeTrigger} />}

                  <motion.button
                    type="button"
                    role="radio"
                    aria-checked={isChosen}
                    aria-label={`Option ${String.fromCharCode(65 + oi)}: ${stripLatex(option)}`}
                    onClick={() => handleSelectAnswer(oi)}
                    disabled={isAnswered}
                    className={`w-full min-w-0 text-left px-4 py-3 rounded-lg border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50
                      ${
                        showAsCorrect
                          ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600 text-[var(--text-primary)] font-medium"
                          : isWrongChosen
                            ? "bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-600 text-[var(--text-primary)]"
                            : isAnswered
                              ? "border-[var(--border)]/50 text-[var(--muted)] cursor-not-allowed"
                              : "border-[var(--border)]/60 backdrop-blur-sm bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:border-[var(--accent)]/40 text-[var(--text-primary)] cursor-pointer shadow-sm"
                      }`}
                  >
                    <span className="font-bold mr-3 text-sm shrink-0">
                      {String.fromCharCode(65 + oi)})
                    </span>
                    <span className="text-sm break-words">{stripLatex(option)}</span>
                    {showAsCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 float-right mt-0.5 shrink-0" />
                    )}
                    {isWrongChosen && (
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 float-right mt-0.5 shrink-0" />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Smart Reveal: Erklärung und Merksatz erst nach Beantwortung, weiche Transition */}
        <div aria-live="polite" aria-atomic="true">
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`ml-0 sm:ml-6 mt-4 p-4 rounded-lg border-l-2 ${
              isCorrect
                ? "border-emerald-400 dark:border-emerald-600"
                : "border-red-400 dark:border-red-600"
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-bold text-sm mb-2 ${
                    isCorrect
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {isCorrect ? "Richtig" : "Leider falsch"}
                </p>
                {isCorrect && (
                  <>
                    <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                      {stripMarkdownAsterisks(explanation)}
                    </p>
                    {merksatz && (
                      <p className="text-sm mt-2 pt-2 border-t border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 italic">
                        {merksatz}
                      </p>
                    )}
                  </>
                )}
                {isWrong && (
                  <>
                    <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                      {stripMarkdownAsterisks(explanation)}
                    </p>
                    {merksatz && (
                      <p className="text-sm mt-2 pt-2 border-t border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 italic">
                        {merksatz}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
        </div>
      </motion.div>
    </>
  );
});
