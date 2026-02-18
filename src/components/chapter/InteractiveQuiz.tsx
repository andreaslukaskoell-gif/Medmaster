import { useState } from "react";
import { QuizQuestion } from "./QuizQuestion";
import type { SelfTestQuestion } from "@/data/bmsKapitel/types";

interface InteractiveQuizProps {
  questions: SelfTestQuestion[];
}

/**
 * Enhanced interactive quiz component for "Die Zelle" chapter
 * Shows immediate feedback per question with explanations
 * FIXED: Now uses reusable QuizQuestion component for consistency
 */
export function InteractiveQuiz({ questions }: InteractiveQuizProps) {
  const [questionResults, setQuestionResults] = useState<Record<number, boolean>>({});

  const handleAnswerChange = (questionIndex: number, isCorrect: boolean) => {
    setQuestionResults((prev) => ({
      ...prev,
      [questionIndex]: isCorrect,
    }));
  };

  const totalCorrect = Object.values(questionResults).filter(Boolean).length;
  const totalAnswered = Object.keys(questionResults).length;

  return (
    <div className="space-y-6 mt-8">
      {/* Header */}
      <div className="pb-4 border-b-2 border-gray-300 dark:border-gray-600">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          📝 Kontrollfragen
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Teste dein Wissen mit diesen Fragen. Wähle eine Antwort und klicke auf "Antwort prüfen" für sofortiges Feedback.
        </p>
        {totalAnswered > 0 && (
          <div className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Fortschritt: {totalCorrect} von {totalAnswered} beantworteten Fragen richtig
          </div>
        )}
      </div>

      {/* Questions */}
      {questions.map((question, index) => {
        // Safe fallback for missing data
        if (!question || !question.question || !question.options || question.options.length === 0) {
          return (
            <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                ⚠️ Frage {index + 1} hat unvollständige Daten und wird übersprungen.
              </p>
            </div>
          );
        }

        return (
          <QuizQuestion
            key={index}
            question={question}
            questionNumber={index + 1}
            onAnswerChange={(isCorrect) => handleAnswerChange(index, isCorrect)}
          />
        );
      })}
    </div>
  );
}
