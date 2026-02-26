import React, { useState, useRef } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";

interface KontrollFrage {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Sokratischer Hinweis bei falscher Antwort (vor Lösung); Fallback wenn fehlt. */
  hint?: string;
}

const DEFAULT_HINT =
  "Überlege: Welcher Begriff in der Frage ist zentral? Was hast du im Kapitel dazu gelernt?";

interface KontrollFragenProps {
  questions: KontrollFrage[];
  /** (questionIndex, correct, secondTry). secondTry = richtig im zweiten Versuch → 50% XP. */
  onAnswer?: (questionIndex: number, correct: boolean, secondTry?: boolean) => void;
}

export function KontrollFragen({ questions, onAnswer }: KontrollFragenProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHintOnly, setShowHintOnly] = useState(false);
  const [secondTry, setSecondTry] = useState(false);
  /** Verhindert XP-Farming: onAnswer nur einmal pro Frage pro Ergebnis. */
  const answerRecordedRef = useRef<string | null>(null);

  const safeQuestions = questions ?? [];
  const total = safeQuestions.length;
  const finished = results.length === total;
  const correctCount = results.filter(Boolean).length;
  const q = safeQuestions[current];

  // Early return if no questions available
  if (total === 0) {
    return (
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Keine Kontrollfragen verfügbar.</p>
      </div>
    );
  }

  const handleSelect = (optIndex: number) => {
    if (answered && !(showHintOnly && secondTry)) return;
    setSelected(optIndex);
    const isCorrect = optIndex === q?.correctIndex;
    if (isCorrect) {
      const key = `q${current}-correct-${secondTry}`;
      if (answerRecordedRef.current === key) return;
      answerRecordedRef.current = key;
      setAnswered(true);
      setShowHintOnly(false);
      setShowExplanation(true);
      setResults((prev) => [...prev, true]);
      onAnswer?.(current, true, secondTry);
      return;
    }
    if (showHintOnly && secondTry) {
      const key = `q${current}-wrong`;
      if (answerRecordedRef.current === key) return;
      answerRecordedRef.current = key;
      setAnswered(true);
      setShowExplanation(true);
      setResults((prev) => [...prev, false]);
      onAnswer?.(current, false);
      return;
    }
    setAnswered(true);
    setShowHintOnly(true);
  };

  const handleSecondTry = () => {
    setAnswered(false);
    setSelected(null);
    setSecondTry(true);
  };
  const handleShowSolution = () => {
    const key = `q${current}-wrong`;
    if (answerRecordedRef.current !== key) {
      answerRecordedRef.current = key;
      setResults((prev) => [...prev, false]);
      onAnswer?.(current, false);
    }
    setShowHintOnly(false);
    setShowExplanation(true);
  };

  const handleNext = () => {
    answerRecordedRef.current = null;
    if (current < total - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
      setShowHintOnly(false);
      setSecondTry(false);
    }
  };

  const handleReset = () => {
    answerRecordedRef.current = null;
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setResults([]);
    setShowExplanation(false);
    setShowHintOnly(false);
    setSecondTry(false);
  };

  const hint = q?.hint ?? DEFAULT_HINT;
  const isCorrect = answered && selected === q?.correctIndex;

  if (finished) {
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
        <div className="bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-4">
          <h3 className="text-lg font-bold text-white">Kontrollfragen — Ergebnis</h3>
        </div>
        <div className="p-6 space-y-5">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">
              {correctCount} von {total}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {pct === 100
                ? "Perfekt! Alles richtig!"
                : pct >= 80
                  ? "Sehr gut! Fast alles richtig."
                  : pct >= 60
                    ? "Gut, aber schau dir die Fehler nochmal an."
                    : "Wiederhole den Lernstoff und versuche es erneut."}
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{correctCount} richtig</span>
              <span>{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-500 bg-linear-to-r from-emerald-500 to-teal-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Per-question result dots */}
          <div className="flex gap-1.5 justify-center flex-wrap">
            {results.map((correct, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  correct
                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <Button
            onClick={handleReset}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Erneut versuchen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Kontrollfragen</h3>
          <span className="text-sm text-emerald-100 font-medium">
            Frage {current + 1} von {total}
          </span>
        </div>
        {/* Mini progress bar */}
        <div className="mt-2 w-full bg-emerald-400/30 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-white transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6 space-y-4">
        <p className="font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
          {q?.question ?? ""}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {(q?.options ?? []).map((opt, oi) => {
            const isSelected = selected === oi;
            const isCorrectOpt = oi === q?.correctIndex;
            const isWrongSelected = answered && isSelected && !isCorrectOpt;

            let className =
              "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 flex items-start gap-3";

            if (answered && isCorrectOpt) {
              className +=
                " border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 font-medium";
            } else if (isWrongSelected) {
              className +=
                " border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
            } else if (isSelected && !answered) {
              className +=
                " border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300";
            } else {
              className += answered
                ? " border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 cursor-default"
                : " border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 cursor-pointer";
            }

            const allowSecondTry = showHintOnly && secondTry;
            const isDisabled = answered && !allowSecondTry;
            return (
              <button
                key={oi}
                type="button"
                onClick={() => handleSelect(oi)}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                className={className}
              >
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    answered && isCorrectOpt
                      ? "bg-emerald-500 text-white"
                      : isWrongSelected
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {String.fromCharCode(65 + oi)}
                </span>
                <span className="pt-0.5">{opt}</span>
                {answered && isCorrectOpt && (
                  <CheckCircle2 className="w-5 h-5 ml-auto shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                )}
                {isWrongSelected && (
                  <XCircle className="w-5 h-5 ml-auto shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback: bei falsch zuerst Sokratischer Hinweis + zweiter Versuch */}
        {answered && (
          <div className="space-y-2">
            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                isCorrect
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Richtig!{secondTry && " (Zweiter Versuch: 50% XP)"}
                </>
              ) : showHintOnly ? (
                <>
                  <XCircle className="w-5 h-5" />
                  Noch nicht richtig. Nutze den Hinweis oder versuche es erneut.
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5" />
                  Leider falsch — die richtige Antwort ist{" "}
                  {String.fromCharCode(65 + (q?.correctIndex ?? 0))}.
                </>
              )}
            </div>

            {showHintOnly && !showExplanation && (
              <div className="space-y-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  💡 Sokratischer Hinweis
                </p>
                <p className="text-sm text-amber-900 dark:text-amber-100">{hint}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleSecondTry}
                    className="text-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5 mr-1" />
                    Nochmal versuchen (50% XP)
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleShowSolution}
                    className="text-xs"
                  >
                    Lösung anzeigen
                  </Button>
                </div>
              </div>
            )}

            {showExplanation && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/15 border border-emerald-200 dark:border-emerald-800 text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                <p className="font-medium text-emerald-800 dark:text-emerald-300 mb-1">
                  Lösungsweg
                </p>
                {stripMarkdownAsterisks(q?.explanation ?? "")}
              </div>
            )}
          </div>
        )}

        {/* Next button: erst wenn Ergebnis feststeht (richtig oder Lösung angezeigt) */}
        {answered && (isCorrect || showExplanation) && (
          <Button
            onClick={handleNext}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
          >
            {current < total - 1 ? "Nächste Frage" : "Ergebnis anzeigen"}
          </Button>
        )}
      </div>
    </div>
  );
}
