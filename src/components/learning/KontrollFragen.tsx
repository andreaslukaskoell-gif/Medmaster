import { useState } from "react";
import { CheckCircle2, XCircle, ChevronDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KontrollFrage {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface KontrollFragenProps {
  questions: KontrollFrage[];
}

export function KontrollFragen({ questions }: KontrollFragenProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const safeQuestions = questions ?? [];
  const total = safeQuestions.length;
  const finished = results.length === total;
  const correctCount = results.filter(Boolean).length;
  const q = safeQuestions[current];

  // Early return if no questions available
  if (total === 0) {
    return (
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Keine Kontrollfragen verfügbar.
        </p>
      </div>
    );
  }

  const handleSelect = (optIndex: number) => {
    if (answered) return;
    setSelected(optIndex);
    setAnswered(true);
    setShowExplanation(false);
    const isCorrect = optIndex === q?.correctIndex;
    setResults((prev) => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setResults([]);
    setShowExplanation(false);
  };

  if (finished) {
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
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
                className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-emerald-500 to-teal-500"
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
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
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

            return (
              <button
                key={oi}
                onClick={() => handleSelect(oi)}
                disabled={answered}
                className={className}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
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
                  <CheckCircle2 className="w-5 h-5 ml-auto flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                )}
                {isWrongSelected && (
                  <XCircle className="w-5 h-5 ml-auto flex-shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback + Explanation */}
        {answered && (
          <div className="space-y-2">
            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                selected === q?.correctIndex
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              }`}
            >
              {selected === q?.correctIndex ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Richtig!
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5" />
                  Leider falsch — die richtige Antwort ist {String.fromCharCode(65 + (q?.correctIndex ?? 0))}.
                </>
              )}
            </div>

            {/* Collapsible explanation */}
            <button
              onClick={() => setShowExplanation((prev) => !prev)}
              className="flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showExplanation ? "rotate-180" : ""
                }`}
              />
              Lösungsweg {showExplanation ? "ausblenden" : "anzeigen"}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                showExplanation ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/15 border border-emerald-200 dark:border-emerald-800 text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {q?.explanation ?? ""}
              </div>
            </div>
          </div>
        )}

        {/* Next button */}
        {answered && (
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
