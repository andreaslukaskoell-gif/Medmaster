import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelbstTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface SelbstTestProps {
  questions: SelbstTestQuestion[];
}

export function SelbstTest({ questions }: SelbstTestProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
        ✍️ Selbsttest
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
        {questions.length} Fragen zum Überprüfen deines Wissens
      </p>

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const selected = answers[qi];
          const isCorrect = submitted && selected === q.correctIndex;
          const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;

          return (
            <div key={qi} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-3">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = selected === oi;
                  const isCorrectOpt = submitted && oi === q.correctIndex;
                  const isWrongSelected = submitted && isSelected && oi !== q.correctIndex;

                  return (
                    <button
                      key={oi}
                      onClick={() => !submitted && setAnswers((p) => ({ ...p, [qi]: oi }))}
                      disabled={submitted}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        isCorrectOpt
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium"
                          : isWrongSelected
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 line-through"
                          : isSelected && !submitted
                          ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                          : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                      } ${submitted ? "cursor-default" : ""}`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + oi)})</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${
                  isCorrect
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                }`}>
                  <div className="flex items-center gap-1 mb-1">
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span className="font-medium">{isCorrect ? "Richtig!" : "Falsch"}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <Button
          className="w-full mt-6"
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
        >
          Auswerten ({Object.keys(answers).length}/{questions.length} beantwortet)
        </Button>
      ) : (
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold text-primary-700 dark:text-primary-400">
            {score}/{questions.length} richtig
          </div>
          <p className="text-sm text-muted mt-1">
            {score === questions.length ? "Perfekt! 🎉" : score >= questions.length * 0.6 ? "Gut gemacht! 👍" : "Wiederhole das Kapitel noch einmal."}
          </p>
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => { setAnswers({}); setSubmitted(false); }}
          >
            Nochmal versuchen
          </Button>
        </div>
      )}
    </div>
  );
}
