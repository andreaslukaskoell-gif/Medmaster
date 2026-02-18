import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import type { SelfTestQuestion } from "../../data/bmsKapitel/types";
import { playCorrectAnswerSound } from "../../lib/sounds";
import { useQuizSessionStore } from "../../store/quizSessionStore";

const FALLBACK_HINT = "Überlege: Welcher Begriff in der Frage ist zentral? Was hast du im Kapitel dazu gelernt?";

interface QuizQuestionProps {
  question: SelfTestQuestion;
  questionNumber: number;
  /** (isCorrect, secondTry). Second try = correct after hint; XP 50% when secondTry. */
  onAnswerChange?: (isCorrect: boolean, secondTry?: boolean) => void;
}

/**
 * Reusable interactive quiz component with Socratic Feedback:
 * Bei falscher Antwort zuerst „Gib mir einen Tipp“ (Hinweise), erst danach „Lösung anzeigen“.
 */
export function QuizQuestion({ question, questionNumber, onAnswerChange }: QuizQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [solutionRevealed, setSolutionRevealed] = useState(false);
  const [isSecondAttempt, setIsSecondAttempt] = useState(false);

  const correctIndex = question.correctIndex !== undefined ? question.correctIndex : 0;
  const explanation = question.explanation || "Erklärung folgt";
  const options = question.options || [];
  const hints = question.hints && question.hints.length > 0 ? question.hints : [FALLBACK_HINT];

  const handleSelectAnswer = (optionIndex: number) => {
    if (isChecked) return;
    setSelectedIndex(optionIndex);
  };

  const recordQuizAnswer = useQuizSessionStore((s) => s.recordQuizAnswer);

  const handleCheckAnswer = () => {
    if (selectedIndex === null) return;
    const isCorrect = selectedIndex === correctIndex;
    setIsChecked(true);
    if (isCorrect) playCorrectAnswerSound();
    recordQuizAnswer(isCorrect);
    onAnswerChange?.(isCorrect, isSecondAttempt);
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setIsChecked(false);
    setHintIndex(0);
    setSolutionRevealed(false);
    setIsSecondAttempt(false);
  };

  const handleSecondTry = () => {
    setIsChecked(false);
    setSelectedIndex(null);
    setIsSecondAttempt(true);
  };

  const showNextHint = () => {
    if (hintIndex < hints.length) setHintIndex((i) => i + 1);
  };

  const hasMoreHints = hintIndex < hints.length;
  const isCorrect = isChecked && selectedIndex === correctIndex;
  const isWrong = isChecked && selectedIndex !== null && selectedIndex !== correctIndex;
  const hasAnswer = selectedIndex !== null;

  return (
    <motion.div
      className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 p-6 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-md transition-shadow"
      animate={isWrong ? { x: [0, -8, 8, -8, 8, 0] } : isCorrect ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: isWrong ? 0.4 : 0.3, ease: "easeOut" }}
    >
      {/* Question */}
      <div className="mb-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
            {questionNumber}
          </span>
          <p className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-relaxed flex-1">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="ml-11 space-y-2">
          {options.map((option, oi) => {
            const isSelected = selectedIndex === oi;
            const isCorrectOption = isChecked && oi === correctIndex;
            const isWrongSelected = isChecked && isSelected && oi !== correctIndex;

            return (
              <motion.button
                key={oi}
                type="button"
                onClick={() => handleSelectAnswer(oi)}
                disabled={isChecked && !isSelected}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 ${
                  isCorrectOption
                    ? "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-100 font-medium shadow-sm"
                    : isWrongSelected
                    ? "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-100"
                    : isSelected && !isChecked
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-200 font-medium"
                    : isChecked
                    ? "border-slate-200 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                    : "border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-slate-100 cursor-pointer"
                }`}
              >
                <span className="font-bold mr-3 text-base">
                  {String.fromCharCode(65 + oi)})
                </span>
                <span className="text-base">{option}</span>
                {isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 float-right mt-0.5" />
                )}
                {isWrongSelected && (
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 float-right mt-0.5" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Check Button */}
      {!isChecked && (
        <div className="ml-11">
          <Button
            onClick={handleCheckAnswer}
            disabled={!hasAnswer}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Antwort prüfen
          </Button>
        </div>
      )}

      {/* Feedback: bei richtig sofort Erklärung, bei falsch zuerst Hinweise (Socratic Feedback) */}
      {isChecked && (
        <div
          className={`ml-11 mt-4 p-4 rounded-lg border-l-4 ${
            isCorrect
              ? "bg-green-50 dark:bg-green-900/20 border-green-500"
              : "bg-red-50 dark:bg-red-900/20 border-red-500"
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
              {isCorrect ? (
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {explanation}
                </p>
              ) : (
                <>
                  {hintIndex > 0 && (
                    <div className="space-y-2 mb-3">
                      {hints.slice(0, hintIndex).map((hint, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.98, boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)" }}
                          animate={{ opacity: 1, scale: 1, boxShadow: i === hintIndex - 1 ? ["0 0 0 0 rgba(251, 191, 36, 0)", "0 0 16px 2px rgba(251, 191, 36, 0.25)", "0 0 0 0 rgba(251, 191, 36, 0)"] : "0 0 0 0 rgba(251, 191, 36, 0)" }}
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
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {explanation}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Versuche es mit einem Tipp, bevor du die Lösung siehst – so prägt sich der Stoff besser ein.
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
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 dark:border-white/10 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:ring-2 active:ring-primary-400/60 active:shadow-[0_0_12px_rgba(0,122,255,0.2)]"
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
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="mt-3 text-sm"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Antwort ändern
          </Button>
        </div>
      )}
    </motion.div>
  );
}
