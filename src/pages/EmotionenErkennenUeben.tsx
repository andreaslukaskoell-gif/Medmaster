import { useState, useMemo, useCallback } from "react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Shuffle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import { emotionenErkennenScenarios } from "@/data/kffEmotionenErkennen";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function EmotionenErkennenUeben() {
  const [scenarios, setScenarios] = useState(emotionenErkennenScenarios);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const { recordResult } = useKFFResults();

  const currentScenario = scenarios[currentScenarioIndex];
  const currentQuestion = currentScenario?.questions[currentQuestionIndex];
  const totalQuestions = useMemo(
    () => scenarios.reduce((sum, s) => sum + s.questions.length, 0),
    [scenarios]
  );
  const questionsBeforeCurrent = useMemo(
    () =>
      scenarios.slice(0, currentScenarioIndex).reduce((sum, s) => sum + s.questions.length, 0) +
      currentQuestionIndex,
    [scenarios, currentScenarioIndex, currentQuestionIndex]
  );

  const handleCheck = useCallback(() => {
    if (selectedAnswer === null || !currentQuestion || !currentScenario) return;
    setIsChecked(true);
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setTotalAnswered((c) => c + 1);
    if (correct) setCorrectCount((c) => c + 1);

    recordResult("emotionen-erkennen", {
      exerciseId: `${currentScenario.id}-q${currentQuestionIndex}`,
      userAnswer: String(selectedAnswer),
      correct,
      timeSpent: 0,
      date: new Date().toISOString(),
    });
  }, [selectedAnswer, currentQuestion, currentScenario, currentQuestionIndex, recordResult]);

  const handleNext = useCallback(() => {
    setSelectedAnswer(null);
    setIsChecked(false);
    setShowExplanation(false);

    if (currentScenario && currentQuestionIndex + 1 < currentScenario.questions.length) {
      setCurrentQuestionIndex((i) => i + 1);
    } else if (currentScenarioIndex + 1 < scenarios.length) {
      setCurrentScenarioIndex((i) => i + 1);
      setCurrentQuestionIndex(0);
    } else {
      setCurrentScenarioIndex(0);
      setCurrentQuestionIndex(0);
    }
  }, [currentScenario, currentQuestionIndex, currentScenarioIndex, scenarios.length]);

  const handleReset = useCallback(() => {
    setCurrentScenarioIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setShowExplanation(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  const handleShuffle = useCallback(() => {
    setScenarios(shuffle(emotionenErkennenScenarios));
    handleReset();
  }, [handleReset]);

  if (!currentScenario || !currentQuestion) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine Szenarien verfügbar.</p>
        </CardContent>
      </Card>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const optionLabels = ["A", "B", "C", "D", "E"];

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
            Szenario {currentScenarioIndex + 1}/{scenarios.length} — Frage{" "}
            {currentQuestionIndex + 1}/{currentScenario.questions.length}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            <span className="font-medium text-green-600 dark:text-green-400">
              {correctCount} richtig
            </span>
            {totalAnswered > 0 && (
              <span> ({Math.round((correctCount / totalAnswered) * 100)}%)</span>
            )}
          </span>
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
          className="h-1.5 rounded-full bg-amber-500 transition-all"
          style={{ width: `${((questionsBeforeCurrent + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Scenario card */}
      <Card>
        <CardContent className="p-0">
          {/* Scenario */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                {currentScenario.id}
              </span>
              <span className="text-xs text-muted">Szenario</span>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
              {currentScenario.scenario}
            </p>
          </div>

          {/* Question */}
          <div className="p-6 space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {currentQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-2">
              {currentQuestion.options.map((option, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrectOption = i === currentQuestion.correctAnswer;
                let borderClass = "border-gray-200 dark:border-gray-700";
                let bgClass = "hover:bg-amber-50 dark:hover:bg-amber-900/10";

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
                  borderClass = "border-amber-400 dark:border-amber-600";
                  bgClass = "bg-amber-50 dark:bg-amber-900/20";
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
                        className={`text-sm font-bold mt-0.5 ${isChecked && isCorrectOption ? "text-green-600" : isChecked && isSelected ? "text-red-600" : "text-amber-500"}`}
                      >
                        {optionLabels[i]}
                      </span>
                      <span className="text-sm text-gray-900 dark:text-gray-100">{option}</span>
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
                <button
                  onClick={handleCheck}
                  disabled={selectedAnswer === null}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Überprüfen
                </button>
              ) : (
                <>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    {currentQuestionIndex + 1 < currentScenario.questions.length
                      ? "Nächste Frage"
                      : "Nächstes Szenario"}
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

            {/* Result feedback */}
            {isChecked && (
              <div
                className={`rounded-lg p-4 ${isCorrect ? "bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800"}`}
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span
                    className={`font-semibold text-sm ${isCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}
                  >
                    {isCorrect
                      ? "Richtig!"
                      : `Falsch — Richtige Antwort: ${optionLabels[currentQuestion.correctAnswer]}`}
                  </span>
                </div>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && isChecked && (
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Erklärung
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
