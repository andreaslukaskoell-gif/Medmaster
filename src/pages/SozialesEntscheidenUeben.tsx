import { useState, useCallback } from "react";
import { ChevronRight, RotateCcw, Shuffle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  sozialesEntscheidenScenarios,
  type SozialesEntscheidenScenario,
} from "@/data/kffSozialesEntscheiden";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ratingLabels = ["", "1", "2", "3", "4", "5", "6"];

function getDeviationColor(deviation: number): string {
  if (deviation === 0) return "text-green-600 dark:text-green-400";
  if (deviation === 1) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function getDeviationBg(deviation: number): string {
  if (deviation === 0)
    return "bg-green-50 dark:bg-green-900/15 border-green-200 dark:border-green-800";
  if (deviation === 1)
    return "bg-amber-50 dark:bg-amber-900/15 border-amber-200 dark:border-amber-800";
  return "bg-red-50 dark:bg-red-900/15 border-red-200 dark:border-red-800";
}

export default function SozialesEntscheidenUeben() {
  const [scenarios, setScenarios] = useState(sozialesEntscheidenScenarios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});
  const [totalScore, setTotalScore] = useState(0);
  const [totalMaxScore, setTotalMaxScore] = useState(0);
  const [scenariosCompleted, setScenariosCompleted] = useState(0);
  const { recordResult } = useKFFResults();

  const currentScenario: SozialesEntscheidenScenario | undefined = scenarios[currentIndex];

  const handleRating = useCallback(
    (optionIndex: number, value: number) => {
      if (isSubmitted) return;
      setRatings((prev) => ({ ...prev, [optionIndex]: value }));
    },
    [isSubmitted]
  );

  const allRated = currentScenario
    ? currentScenario.handlungsoptionen.every((_, i) => ratings[i] !== undefined)
    : false;

  const handleSubmit = useCallback(() => {
    if (!allRated || !currentScenario) return;
    setIsSubmitted(true);

    // Calculate score
    let score = 0;
    const maxScore = currentScenario.handlungsoptionen.length * 5; // max deviation per option is 5
    currentScenario.handlungsoptionen.forEach((option, i) => {
      const deviation = Math.abs((ratings[i] || 0) - option.idealRating);
      score += 5 - deviation; // 5 points for perfect, 0 for max deviation
    });

    setTotalScore((prev) => prev + score);
    setTotalMaxScore((prev) => prev + maxScore);
    setScenariosCompleted((prev) => prev + 1);

    const correct = score >= maxScore * 0.7; // 70%+ threshold
    recordResult("soziales-entscheiden", {
      exerciseId: currentScenario.id,
      userAnswer: JSON.stringify(ratings),
      correct,
      timeSpent: 0,
      date: new Date().toISOString(),
    });
  }, [allRated, currentScenario, ratings, recordResult]);

  const handleNext = useCallback(() => {
    setRatings({});
    setIsSubmitted(false);
    setShowExplanations({});
    setCurrentIndex((i) => (i + 1 < scenarios.length ? i + 1 : 0));
  }, [scenarios.length]);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setRatings({});
    setIsSubmitted(false);
    setShowExplanations({});
    setTotalScore(0);
    setTotalMaxScore(0);
    setScenariosCompleted(0);
  }, []);

  const handleShuffle = useCallback(() => {
    setScenarios(shuffle(sozialesEntscheidenScenarios));
    handleReset();
  }, [handleReset]);

  if (!currentScenario) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine Szenarien verfügbar.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
            title="Zufällige Reihenfolge"
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <span className="text-sm text-muted">
            Szenario {currentIndex + 1} von {scenarios.length}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {scenariosCompleted > 0 && (
            <span className="text-sm text-muted">
              <span className="font-medium text-green-600 dark:text-green-400">
                {Math.round((totalScore / totalMaxScore) * 100)}%
              </span>{" "}
              Übereinstimmung ({scenariosCompleted} Szenarien)
            </span>
          )}
          <button
            onClick={handleReset}
            className="text-muted hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
            title="Zurücksetzen"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-teal-500 transition-all"
          style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }}
        />
      </div>

      {/* Scenario card */}
      <Card>
        <CardContent className="p-0">
          {/* Scenario */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                {currentScenario.id}
              </span>
              <span className="text-xs text-muted">Szenario</span>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
              {currentScenario.scenario}
            </p>
          </div>

          {/* Options with sliders */}
          <div className="p-6 space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Bewerte jede Handlungsoption auf der Skala von 1 (sehr unangemessen) bis 6 (sehr
              angemessen):
            </p>

            <div className="space-y-4">
              {currentScenario.handlungsoptionen.map((option, i) => {
                const userRating = ratings[i];
                const deviation = isSubmitted
                  ? Math.abs((userRating || 0) - option.idealRating)
                  : 0;
                const isExpanded = showExplanations[i];

                return (
                  <div
                    key={i}
                    className={`rounded-lg border p-4 space-y-3 transition-colors ${
                      isSubmitted
                        ? getDeviationBg(deviation)
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {/* Option text */}
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-bold text-teal-500 mt-0.5 shrink-0">
                        {i + 1}.
                      </span>
                      <p className="text-sm text-gray-900 dark:text-gray-100">{option.text}</p>
                    </div>

                    {/* Rating buttons */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted w-20 shrink-0">unangemessen</span>
                      <div className="flex-1 flex gap-1">
                        {[1, 2, 3, 4, 5, 6].map((value) => {
                          const isSelected = userRating === value;
                          const isIdeal = isSubmitted && value === option.idealRating;

                          return (
                            <button
                              key={value}
                              onClick={() => handleRating(i, value)}
                              disabled={isSubmitted}
                              className={`flex-1 h-9 rounded-md text-xs font-medium transition-all cursor-pointer disabled:cursor-default relative ${
                                isSelected
                                  ? isSubmitted
                                    ? deviation === 0
                                      ? "bg-green-500 text-white"
                                      : "bg-red-400 text-white"
                                    : "bg-teal-500 text-white"
                                  : isIdeal
                                    ? "bg-green-500 text-white ring-2 ring-green-400"
                                    : "bg-gray-200 dark:bg-gray-700 text-muted hover:bg-gray-300 dark:hover:bg-gray-600"
                              }`}
                            >
                              {ratingLabels[value]}
                              {isIdeal && !isSelected && (
                                <CheckCircle2 className="w-3 h-3 absolute -top-1 -right-1 text-green-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-[10px] text-muted w-20 text-right shrink-0">
                        angemessen
                      </span>
                    </div>

                    {/* Result */}
                    {isSubmitted && (
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-medium ${getDeviationColor(deviation)}`}>
                          {deviation === 0
                            ? "Perfekt!"
                            : deviation === 1
                              ? `Knapp daneben (Abweichung: ${deviation})`
                              : `Abweichung: ${deviation}`}
                        </span>
                        <button
                          onClick={() =>
                            setShowExplanations((prev) => ({ ...prev, [i]: !prev[i] }))
                          }
                          className="text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                        >
                          {isExpanded ? "Verbergen" : "Erklärung"}
                        </button>
                      </div>
                    )}

                    {/* Explanation */}
                    {isExpanded && isSubmitted && (
                      <div className="bg-white dark:bg-gray-900 rounded-lg p-3 text-xs text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Idealbewertung: {option.idealRating}</span>
                        <span className="text-muted"> — </span>
                        {option.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allRated}
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Auswerten
                </button>
              ) : (
                <>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    Nächstes Szenario
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const allShown =
                        Object.keys(showExplanations).length ===
                        currentScenario.handlungsoptionen.length;
                      const newState: Record<number, boolean> = {};
                      currentScenario.handlungsoptionen.forEach((_, i) => {
                        newState[i] = !allShown;
                      });
                      setShowExplanations(newState);
                    }}
                    className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Alle Erklärungen anzeigen
                  </button>
                </>
              )}
            </div>

            {/* Summary */}
            {isSubmitted && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Ergebnis dieses Szenarios
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      Gesamtabweichung:{" "}
                      {currentScenario.handlungsoptionen.reduce(
                        (sum, opt, i) => sum + Math.abs((ratings[i] || 0) - opt.idealRating),
                        0
                      )}{" "}
                      Punkte
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {Math.round(
                        (1 -
                          currentScenario.handlungsoptionen.reduce(
                            (sum, opt, i) => sum + Math.abs((ratings[i] || 0) - opt.idealRating),
                            0
                          ) /
                            (currentScenario.handlungsoptionen.length * 5)) *
                          100
                      )}
                      %
                    </p>
                    <p className="text-xs text-muted">Übereinstimmung</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
