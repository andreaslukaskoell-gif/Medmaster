import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Lightbulb, BookOpen } from "lucide-react";
import type { SelfTestQuestion } from "../../data/bmsKapitel/types";
import { playCorrectAnswerSound } from "../../lib/sounds";
import { useQuizSessionStore } from "../../store/quizSessionStore";

const FALLBACK_HINT =
  "Überlege: Welcher Begriff in der Frage ist zentral? Was hast du im Kapitel dazu gelernt?";

interface QuizQuestionProps {
  question: SelfTestQuestion;
  questionNumber: number;
  /** (isCorrect, secondTry). Second try = correct after hint; XP 50% when secondTry. */
  onAnswerChange?: (isCorrect: boolean, secondTry?: boolean) => void;
}

/**
 * Interaktives Quiz: Immediate Feedback, kein Prüfen-Button, Glassmorphism-Feedback, Smart Reveal, Input Lock.
 */
export function QuizQuestion({ question, questionNumber, onAnswerChange }: QuizQuestionProps) {
  console.log("BMS Quiz-Logik geladen");

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [solutionRevealed, setSolutionRevealed] = useState(false);
  const [isSecondAttempt, setIsSecondAttempt] = useState(false);

  const correctIndex = question.correctIndex !== undefined ? question.correctIndex : 0;
  const explanation = question.explanation || "Erklärung folgt";
  const merksatz = (question as { merksatz?: string }).merksatz;
  const options = question.options || [];
  const hints = question.hints && question.hints.length > 0 ? question.hints : [FALLBACK_HINT];

  const recordQuizAnswer = useQuizSessionStore((s) => s.recordQuizAnswer);

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    const isCorrect = index === correctIndex;
    if (isCorrect) playCorrectAnswerSound();
    recordQuizAnswer(isCorrect);
    onAnswerChange?.(isCorrect, isSecondAttempt);
  };

  const handleSecondTry = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    setIsSecondAttempt(true);
  };

  const showNextHint = () => {
    if (hintIndex < hints.length) setHintIndex((i) => i + 1);
  };

  const hasMoreHints = hintIndex < hints.length;
  const isCorrect = isAnswered && selectedOption === correctIndex;
  const isWrong = isAnswered && selectedOption !== null && selectedOption !== correctIndex;

  return (
    <motion.div
      className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 p-6 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-md transition-shadow"
      animate={isWrong ? { x: [0, -8, 8, -8, 8, 0] } : isCorrect ? { scale: [1, 1.02, 1] } : {}}
      data-answered={isAnswered}
      transition={{ duration: isWrong ? 0.4 : 0.3, ease: "easeOut" }}
    >
      {/* Question */}
      <div className="mb-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
            {questionNumber}
          </span>
          <p className="text-base font-semibold text-slate-950 dark:text-white leading-relaxed flex-1">
            {question.question}
          </p>
        </div>

        {/* Options: Sofort-Check (Grün/Rot), Lock-In nach Klick */}
        <div className="ml-0 sm:ml-11 flex flex-col gap-2">
          {options.map((option, oi) => {
            const isChosen = selectedOption === oi;
            const isCorrectOption = isAnswered && oi === correctIndex;
            const isWrongChosen = isAnswered && isChosen && oi !== correctIndex;

            return (
              <motion.button
                key={oi}
                type="button"
                onClick={() => handleSelectAnswer(oi)}
                disabled={isAnswered}
                className={`w-full min-w-0 text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50
                  ${
                    isCorrectOption
                      ? "bg-green-500/20 border-green-500 text-green-900 dark:text-green-100 font-medium shadow-[0_0_12px_rgba(34,197,94,0.25)]"
                      : isWrongChosen
                        ? "bg-red-500/20 border-red-500 text-red-900 dark:text-red-100 shadow-[0_0_12px_rgba(239,68,68,0.2)]"
                        : isAnswered
                          ? "border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-800/50 text-gray-500 cursor-not-allowed"
                          : "bg-white/70 dark:bg-slate-800/50 border-white/30 dark:border-white/10 hover:border-emerald-400 text-slate-900 dark:text-slate-100 cursor-pointer"
                  }`}
              >
                <span className="font-bold mr-3 text-base shrink-0">
                  {String.fromCharCode(65 + oi)})
                </span>
                <span className="text-base break-words">{option}</span>
                {isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 float-right mt-0.5 shrink-0" />
                )}
                {isWrongChosen && (
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 float-right mt-0.5 shrink-0" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Smart Reveal: Erklärung und Merksatz erst nach Beantwortung, weiche Transition */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`ml-0 sm:ml-11 mt-4 p-4 rounded-lg border-l-4 backdrop-blur-sm ${
            isCorrect
              ? "bg-green-50/90 dark:bg-green-900/20 border-green-500"
              : "bg-red-50/90 dark:bg-red-900/20 border-red-500"
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
                className={`font-bold text-base mb-2 ${
                  isCorrect
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}
              >
                {isCorrect ? "✅ Richtig!" : "❌ Falsch"}
              </p>
              {isCorrect && (
                <>
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
                    {explanation}
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
                  {hintIndex > 0 && (
                    <div className="space-y-2 mb-3">
                      {hints.slice(0, hintIndex).map((hint, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            scale: 0.98,
                            boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)",
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            boxShadow:
                              i === hintIndex - 1
                                ? [
                                    "0 0 0 0 rgba(251, 191, 36, 0)",
                                    "0 0 16px 2px rgba(251, 191, 36, 0.25)",
                                    "0 0 0 0 rgba(251, 191, 36, 0)",
                                  ]
                                : "0 0 0 0 rgba(251, 191, 36, 0)",
                          }}
                          transition={{ duration: i === hintIndex - 1 ? 0.5 : 0.2 }}
                          className="flex gap-2 text-sm text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 border border-amber-200 dark:border-amber-800"
                        >
                          <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                          <span className="leading-relaxed">{hint}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  {solutionRevealed ? (
                    <>
                      <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
                        {explanation}
                      </p>
                      {merksatz && (
                        <p className="text-sm mt-2 pt-2 border-t border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 italic">
                          {merksatz}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-slate-900 dark:text-slate-100 mb-3">
                      Versuche es mit einem Tipp, bevor du die Lösung siehst – so prägt sich der
                      Stoff besser ein.
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {!solutionRevealed && !isSecondAttempt && (
                      <motion.button
                        type="button"
                        onClick={handleSecondTry}
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Nochmal versuchen (50% XP)
                      </motion.button>
                    )}
                    {!solutionRevealed && hasMoreHints && (
                      <motion.button
                        type="button"
                        onClick={showNextHint}
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:ring-2 active:ring-amber-400/60 active:shadow-[0_0_12px_rgba(251,191,36,0.25)]"
                      >
                        <Lightbulb className="w-4 h-4" />
                        Gib mir einen Tipp
                      </motion.button>
                    )}
                    {!solutionRevealed && (hintIndex > 0 || !hasMoreHints) && (
                      <motion.button
                        type="button"
                        onClick={() => setSolutionRevealed(true)}
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 dark:border-white/10 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:ring-2 active:ring-primary-400/60 active:shadow-[0_0_12px_rgba(0,122,255,0.2)]"
                      >
                        <BookOpen className="w-4 h-4" />
                        Lösung anzeigen
                      </motion.button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
