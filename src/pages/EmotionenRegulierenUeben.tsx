import { useState, useMemo, useCallback } from "react";
import { CheckCircle2, XCircle, ChevronRight, Filter, RotateCcw, Shuffle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import { emotionenRegulierenScenarios, type EmotionenRegulierenScenario } from "@/data/kffEmotionenRegulieren";

const difficultyLabels: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Leicht", color: "text-green-700 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  2: { label: "Mittel", color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
  3: { label: "Schwer", color: "text-red-700 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
};

const strategyColors: Record<string, string> = {
  "Situationsauswahl": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Situationsmodifikation": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "Aufmerksamkeitslenkung": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Kognitive Veränderung": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Reaktionsmodulation": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function EmotionenRegulierenUeben() {
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const { recordResult } = useKFFResults();

  const filteredTasks = useMemo(() => {
    let tasks = emotionenRegulierenScenarios;
    if (difficultyFilter !== null) {
      tasks = tasks.filter((t) => t.difficulty === difficultyFilter);
    }
    return shuffled ? shuffle(tasks) : tasks;
  }, [difficultyFilter, shuffled]);

  const currentTask: EmotionenRegulierenScenario | undefined = filteredTasks[currentIndex];

  const handleCheck = useCallback(() => {
    if (selectedAnswer === null || !currentTask) return;
    setIsChecked(true);
    const correct = selectedAnswer === currentTask.correctAnswer;
    setTotalAnswered((c) => c + 1);
    if (correct) setCorrectCount((c) => c + 1);

    recordResult("emotionen-regulieren", {
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
    setShowExplanation(false);
    setCurrentIndex((i) => (i + 1 < filteredTasks.length ? i + 1 : 0));
  }, [filteredTasks.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setShowExplanation(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  if (!currentTask) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine Aufgaben für diesen Filter verfügbar.</p>
        </CardContent>
      </Card>
    );
  }

  const isCorrect = selectedAnswer === currentTask.correctAnswer;
  const diff = difficultyLabels[currentTask.difficulty];

  return (
    <div className="space-y-4">
      {/* Top bar: filter + progress */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <div className="flex gap-1">
            <button
              onClick={() => { setDifficultyFilter(null); setCurrentIndex(0); setIsChecked(false); setSelectedAnswer(null); }}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                difficultyFilter === null ? "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium" : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Alle
            </button>
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => { setDifficultyFilter(d); setCurrentIndex(0); setIsChecked(false); setSelectedAnswer(null); }}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  difficultyFilter === d ? `${difficultyLabels[d].bg} ${difficultyLabels[d].color} font-medium` : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {difficultyLabels[d].label}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setShuffled(!shuffled); handleReset(); }}
            className={`text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer ${shuffled ? "text-pink-500" : ""}`}
            title="Zufällige Reihenfolge"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            Aufgabe {currentIndex + 1} von {filteredTasks.length} — <span className="font-medium text-green-600 dark:text-green-400">{correctCount} richtig</span>
            {totalAnswered > 0 && <span> ({Math.round((correctCount / totalAnswered) * 100)}%)</span>}
          </span>
          <button onClick={handleReset} className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" title="Zurücksetzen">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-pink-500 transition-all"
          style={{ width: `${((currentIndex + 1) / filteredTasks.length) * 100}%` }}
        />
      </div>

      {/* Task card */}
      <Card>
        <CardContent className="p-0">
          {/* Scenario */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${diff.bg} ${diff.color}`}>
                  {diff.label}
                </span>
                <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium px-2 py-1 rounded-full">
                  {currentTask.unwantedEmotion}
                </span>
              </div>
              <span className="text-xs text-muted">{currentTask.id}</span>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
              {currentTask.scenario}
            </p>
          </div>

          {/* Question & Options */}
          <div className="p-6 space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Welche Regulationsstrategie wäre am effektivsten?
            </p>

            <div className="space-y-2">
              {currentTask.options.map((option, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrectOption = i === currentTask.correctAnswer;
                let borderClass = "border-gray-200 dark:border-gray-700";
                let bgClass = "hover:bg-pink-50 dark:hover:bg-pink-900/10";

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
                  borderClass = "border-pink-400 dark:border-pink-600";
                  bgClass = "bg-pink-50 dark:bg-pink-900/20";
                }

                return (
                  <button
                    key={i}
                    onClick={() => !isChecked && setSelectedAnswer(i)}
                    disabled={isChecked}
                    className={`w-full text-left p-4 rounded-lg border-2 ${borderClass} ${bgClass} transition-all cursor-pointer disabled:cursor-default`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5">
                        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${strategyColors[option.strategy] || "bg-gray-100 text-gray-700"}`}>
                          {option.strategy}
                        </span>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-gray-100 flex-1">{option.description}</span>
                      {isChecked && isCorrectOption && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />}
                      {isChecked && isSelected && !isCorrectOption && <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {!isChecked ? (
                <button
                  onClick={handleCheck}
                  disabled={selectedAnswer === null}
                  className="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Überprüfen
                </button>
              ) : (
                <>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    Nächste Aufgabe
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {showExplanation ? "Erklärung verbergen" : "Erklärung anzeigen"}
                  </button>
                </>
              )}
            </div>

            {/* Result */}
            {isChecked && (
              <div className={`rounded-lg p-4 ${isCorrect ? "bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800"}`}>
                <div className="flex items-center gap-2">
                  {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className={`font-semibold text-sm ${isCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}>
                    {isCorrect ? "Richtig!" : `Falsch — Richtig: ${currentTask.options[currentTask.correctAnswer].strategy}`}
                  </span>
                </div>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && isChecked && (
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Erklärung</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{currentTask.explanation}</p>
                <div>
                  <p className="text-xs text-muted mb-1">Richtige Strategie:</p>
                  <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${strategyColors[currentTask.options[currentTask.correctAnswer].strategy] || "bg-gray-100 text-gray-700"}`}>
                    {currentTask.options[currentTask.correctAnswer].strategy}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
