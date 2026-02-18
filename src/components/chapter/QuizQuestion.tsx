import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";

interface QuizQuestionProps {
  question: SelfTestQuestion;
  questionNumber: number;
  onAnswerChange?: (isCorrect: boolean) => void;
}

/**
 * Reusable interactive quiz question component
 * Shows immediate feedback after answer selection with explanation
 * Handles missing correctIndex or explanation gracefully with fallbacks
 */
export function QuizQuestion({ question, questionNumber, onAnswerChange }: QuizQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  // Safe fallbacks for missing data
  const correctIndex = question.correctIndex !== undefined ? question.correctIndex : 0;
  const explanation = question.explanation || "Erklärung folgt";
  const options = question.options || [];

  const handleSelectAnswer = (optionIndex: number) => {
    if (isChecked) return; // Don't allow changes after checking (or allow with reset)
    setSelectedIndex(optionIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedIndex === null) return;
    setIsChecked(true);
    const isCorrect = selectedIndex === correctIndex;
    onAnswerChange?.(isCorrect);
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setIsChecked(false);
  };

  const isCorrect = isChecked && selectedIndex === correctIndex;
  const isWrong = isChecked && selectedIndex !== null && selectedIndex !== correctIndex;
  const hasAnswer = selectedIndex !== null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Question */}
      <div className="mb-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
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
              <button
                key={oi}
                onClick={() => handleSelectAnswer(oi)}
                disabled={isChecked && !isSelected} // Disable non-selected after check
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                  isCorrectOption
                    ? "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-100 font-medium shadow-sm"
                    : isWrongSelected
                    ? "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-100"
                    : isSelected && !isChecked
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-200 font-medium"
                    : isChecked
                    ? "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                    : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
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
              </button>
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

      {/* Feedback & Explanation */}
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
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p
                className={`font-bold text-base mb-2 ${
                  isCorrect
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}
              >
                {isCorrect ? "✅ Richtig!" : "❌ Falsch"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {explanation}
              </p>
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
    </div>
  );
}
