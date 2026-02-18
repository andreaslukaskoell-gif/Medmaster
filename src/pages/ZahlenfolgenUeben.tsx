import { useState, useMemo, useCallback } from "react";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronRight,
  Filter,
  RotateCcw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  zahlenfolgenTasks,
  type ZahlenfolgenTask,
  type ZahlenfolgenPattern,
} from "@/data/kffZahlenfolgen";

const difficultyLabels: Record<
  number,
  { label: string; color: string; bg: string }
> = {
  1: {
    label: "Leicht",
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  2: {
    label: "Mittel",
    color: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  3: {
    label: "Schwer",
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
};

const patternLabels: Record<ZahlenfolgenPattern, string> = {
  simple: "Simple Folge",
  zweiersprung: "Zweiersprung",
  dreiersprung: "Dreiersprung",
  vierersprung: "Vierersprung",
  rekursiv: "Rekursiv",
  komplex: "Komplex",
};

const patternColors: Record<ZahlenfolgenPattern, string> = {
  simple: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  zweiersprung:
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  dreiersprung:
    "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  vierersprung:
    "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  rekursiv:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  komplex:
    "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
};

/** Color class for a sequence position based on pattern type */
function getPositionColor(
  task: ZahlenfolgenTask,
  index: number,
  showColors: boolean
): string {
  if (!showColors) return "";
  const p = task.pattern;
  if (p === "zweiersprung") {
    return index % 2 === 0
      ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
      : "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300";
  }
  if (p === "dreiersprung") {
    const colors = [
      "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
      "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
      "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
    ];
    return colors[index % 3];
  }
  if (p === "vierersprung") {
    const colors = [
      "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
      "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
      "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
      "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
    ];
    return colors[index % 4];
  }
  return "";
}

export default function ZahlenfolgenUeben() {
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0 = no hint, 1-3
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const { recordResult } = useKFFResults();

  const filteredTasks = useMemo(() => {
    if (difficultyFilter === null) return zahlenfolgenTasks;
    return zahlenfolgenTasks.filter((t) => t.difficulty === difficultyFilter);
  }, [difficultyFilter]);

  const currentTask: ZahlenfolgenTask | undefined = filteredTasks[currentIndex];

  const handleCheck = useCallback(() => {
    if (selectedAnswer === null || !currentTask) return;
    setIsChecked(true);
    const correct = selectedAnswer === currentTask.correctAnswer;
    setTotalAnswered((c) => c + 1);
    if (correct) setCorrectCount((c) => c + 1);

    recordResult("zahlenfolgen", {
      exerciseId: currentTask.id,
      userAnswer: String(selectedAnswer),
      correct,
      timeSpent: 0,
      date: new Date().toISOString(),
    });
  }, [selectedAnswer, currentTask, recordResult]);

  const handleNext = useCallback(() => {
    setSelectedAnswer(null);
    setIsChecked(false);
    setHintLevel(0);
    setShowExplanation(false);
    setCurrentIndex((i) => (i + 1 < filteredTasks.length ? i + 1 : 0));
  }, [filteredTasks.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setHintLevel(0);
    setShowExplanation(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  if (!currentTask) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">
            Keine Aufgaben f&uuml;r diesen Filter verf&uuml;gbar.
          </p>
        </CardContent>
      </Card>
    );
  }

  const isCorrect = selectedAnswer === currentTask.correctAnswer;
  const diff = difficultyLabels[currentTask.difficulty];
  const optionLabels = ["A", "B", "C", "D", "E"];
  const showPatternColors = isChecked || hintLevel >= 2;

  return (
    <div className="space-y-4">
      {/* Top bar: filter + progress */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <div className="flex gap-1">
            <button
              onClick={() => {
                setDifficultyFilter(null);
                setCurrentIndex(0);
                setIsChecked(false);
                setSelectedAnswer(null);
                setHintLevel(0);
              }}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                difficultyFilter === null
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                  : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Alle
            </button>
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDifficultyFilter(d);
                  setCurrentIndex(0);
                  setIsChecked(false);
                  setSelectedAnswer(null);
                  setHintLevel(0);
                }}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  difficultyFilter === d
                    ? `${difficultyLabels[d].bg} ${difficultyLabels[d].color} font-medium`
                    : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {difficultyLabels[d].label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            Aufgabe {currentIndex + 1} von {filteredTasks.length} —{" "}
            <span className="font-medium text-green-600 dark:text-green-400">
              {correctCount} richtig
            </span>
            {totalAnswered > 0 && (
              <span>
                {" "}
                ({Math.round((correctCount / totalAnswered) * 100)}%)
              </span>
            )}
          </span>
          <button
            onClick={handleReset}
            className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
            title="Zur&uuml;cksetzen"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-blue-500 transition-all"
          style={{
            width: `${((currentIndex + 1) / filteredTasks.length) * 100}%`,
          }}
        />
      </div>

      {/* Task card */}
      <Card>
        <CardContent className="p-6 space-y-5">
          {/* Badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${diff.bg} ${diff.color}`}
              >
                {diff.label}
              </span>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${patternColors[currentTask.pattern]}`}
              >
                {patternLabels[currentTask.pattern]}
              </span>
            </div>
            <span className="text-xs text-muted">{currentTask.id}</span>
          </div>

          {/* Number sequence display */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <p className="text-xs text-muted mb-3 text-center">
              Finde die fehlenden Werte:
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap font-mono text-2xl">
              {currentTask.sequence.map((val, i) => {
                const isMissing = currentTask.missingIndices.includes(i);
                const posColor = getPositionColor(
                  currentTask,
                  i,
                  showPatternColors
                );

                if (isMissing && !isChecked) {
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center justify-center min-w-[48px] h-12 rounded-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-2 border-dashed border-blue-300 dark:border-blue-700 ${posColor}`}
                    >
                      ?
                    </span>
                  );
                }
                if (isMissing && isChecked) {
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center justify-center min-w-[48px] h-12 rounded-lg font-bold ${
                        isCorrect
                          ? "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 border-2 border-green-400"
                          : "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 border-2 border-green-400"
                      }`}
                    >
                      {val}
                    </span>
                  );
                }
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center justify-center min-w-[48px] h-12 rounded-lg ${posColor || "text-gray-800 dark:text-gray-200"}`}
                  >
                    {val}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {currentTask.options.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrectOption = i === currentTask.correctAnswer;
              let borderClass = "border-gray-200 dark:border-gray-700";
              let bgClass =
                "hover:bg-blue-50 dark:hover:bg-blue-900/10";

              if (isChecked) {
                if (isCorrectOption) {
                  borderClass = "border-green-400 dark:border-green-600";
                  bgClass = "bg-green-50 dark:bg-green-900/20";
                } else if (isSelected && !isCorrectOption) {
                  borderClass = "border-red-400 dark:border-red-600";
                  bgClass = "bg-red-50 dark:bg-red-900/20";
                } else {
                  bgClass = "opacity-50";
                }
              } else if (isSelected) {
                borderClass = "border-blue-400 dark:border-blue-600";
                bgClass = "bg-blue-50 dark:bg-blue-900/20";
              }

              return (
                <button
                  key={i}
                  onClick={() => !isChecked && setSelectedAnswer(i)}
                  disabled={isChecked}
                  className={`w-full text-left p-3 rounded-lg border-2 ${borderClass} ${bgClass} transition-all cursor-pointer disabled:cursor-default`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-sm font-bold mt-0.5 ${
                        isChecked && isCorrectOption
                          ? "text-green-600"
                          : isChecked && isSelected
                            ? "text-red-600"
                            : "text-blue-500"
                      }`}
                    >
                      {optionLabels[i]}
                    </span>
                    <span className="text-sm font-mono text-gray-900 dark:text-gray-100">
                      {option}
                    </span>
                    {isChecked && isCorrectOption && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto shrink-0 mt-0.5" />
                    )}
                    {isChecked && isSelected && !isCorrectOption && (
                      <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {!isChecked ? (
              <>
                <button
                  onClick={handleCheck}
                  disabled={selectedAnswer === null}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  &Uuml;berpr&uuml;fen
                </button>
                <button
                  onClick={() =>
                    setHintLevel((l) => Math.min(3, l + 1))
                  }
                  disabled={hintLevel >= 3}
                  className="flex items-center gap-1.5 px-4 py-2.5 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Lightbulb className="w-4 h-4" />
                  Tipp {hintLevel > 0 ? `${hintLevel}/3` : "anzeigen"}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  N&auml;chste Aufgabe
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {showExplanation
                    ? "L&ouml;sung verbergen"
                    : "L&ouml;sungsweg anzeigen"}
                </button>
              </>
            )}
          </div>

          {/* Progressive hints */}
          {hintLevel > 0 && !isChecked && (
            <div className="bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                  Tipps ({hintLevel}/3)
                </h4>
              </div>
              <div className="space-y-2">
                {currentTask.hints.slice(0, hintLevel).map((hint, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400"
                  >
                    <span className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Result feedback */}
          {isChecked && (
            <div
              className={`rounded-lg p-4 ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <span
                  className={`font-semibold text-sm ${
                    isCorrect
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}
                >
                  {isCorrect
                    ? "Richtig!"
                    : `Falsch — Richtige Antwort: ${optionLabels[currentTask.correctAnswer]} (${currentTask.options[currentTask.correctAnswer]})`}
                </span>
              </div>
            </div>
          )}

          {/* Explanation */}
          {showExplanation && isChecked && (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                L&ouml;sungsweg
              </h4>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted mb-1">Mustertyp:</p>
                  <span
                    className={`inline-flex text-xs font-medium px-2 py-1 rounded-full ${patternColors[currentTask.pattern]}`}
                  >
                    {patternLabels[currentTask.pattern]}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {currentTask.explanation}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
