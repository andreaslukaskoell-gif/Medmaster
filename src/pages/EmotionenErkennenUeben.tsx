import { useState, useCallback, useMemo } from "react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Shuffle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  emotionenErkennenOffiziellAlle,
  type EmotionenErkennenOffiziellTask,
} from "@/data/emotionenErkennenOffiziell";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function EmotionenErkennenUeben() {
  const [tasks, setTasks] = useState<EmotionenErkennenOffiziellTask[]>(() =>
    shuffle([...emotionenErkennenOffiziellAlle])
  );
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, "wahrscheinlich" | "unwahrscheinlich">>
  >({});
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const { recordResult } = useKFFResults();

  const currentTask = tasks[index];
  const currentAnswers = useMemo(
    () => (currentTask ? answers[currentTask.id] || {} : {}),
    [currentTask, answers]
  );
  const allAnswered =
    currentTask && currentTask.emotionen.every((e) => currentAnswers[e.id] !== undefined);

  const handleCheck = useCallback(() => {
    if (!currentTask || !allAnswered) return;
    setIsChecked(true);
    const allCorrect = currentTask.emotionen.every((e) => currentAnswers[e.id] === e.correct);
    setTotalAnswered((c) => c + 1);
    if (allCorrect) setCorrectCount((c) => c + 1);

    recordResult("emotionen-erkennen", {
      exerciseId: currentTask.id,
      userAnswer: JSON.stringify(currentAnswers),
      correct: allCorrect,
      timeSpent: 0,
      date: new Date().toISOString(),
    });
  }, [currentTask, currentAnswers, allAnswered, recordResult]);

  const handleNext = useCallback(() => {
    setIndex((i) => (i + 1) % tasks.length);
    setIsChecked(false);
  }, [tasks.length]);

  const handleReset = useCallback(() => {
    setTasks(shuffle([...emotionenErkennenOffiziellAlle]));
    setIndex(0);
    setAnswers({});
    setIsChecked(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  const handleShuffle = useCallback(() => {
    setTasks(shuffle([...emotionenErkennenOffiziellAlle]));
    setAnswers({});
    setIndex(0);
    setIsChecked(false);
    setCorrectCount(0);
    setTotalAnswered(0);
  }, []);

  const setAnswer = useCallback(
    (optionId: string, value: "wahrscheinlich" | "unwahrscheinlich") => {
      if (!currentTask || isChecked) return;
      setAnswers((prev) => ({
        ...prev,
        [currentTask.id]: {
          ...(prev[currentTask.id] || {}),
          [optionId]: value,
        },
      }));
    },
    [currentTask, isChecked]
  );

  if (!currentTask) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted">Keine Aufgaben verfügbar.</p>
        </CardContent>
      </Card>
    );
  }

  const allCorrect = currentTask.emotionen.every((e) => currentAnswers[e.id] === e.correct);

  return (
    <div className="space-y-4">
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
            Aufgabe {index + 1}/{tasks.length}
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

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-amber-500 transition-all"
          style={{ width: `${((index + 1) / tasks.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="text-xs text-muted uppercase tracking-wide mb-1">
              Situationsbeschreibung
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
              {currentTask.situation}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Wie fühlt sich {currentTask.personName} in dieser Situation? Eher wahrscheinlich oder
            eher unwahrscheinlich?
          </p>
          <div className="space-y-3">
            {currentTask.emotionen.map((e) => {
              const val = currentAnswers[e.id];
              const showResult = isChecked;
              const isRight = val === e.correct;
              return (
                <div
                  key={e.id}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 rounded-lg border ${showResult ? (isRight ? "border-green-500 dark:border-green-600 bg-green-50 dark:bg-green-900/15" : "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/15") : "border-border dark:border-gray-700"}`}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ({e.id}) {e.text}
                    {showResult && (
                      <span className="ml-2">
                        {isRight ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
                        ) : (
                          <span className="text-xs text-red-600 dark:text-red-400">
                            → {e.correct}
                          </span>
                        )}
                      </span>
                    )}
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setAnswer(e.id, "wahrscheinlich")}
                      disabled={isChecked}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer disabled:cursor-default ${
                        val === "wahrscheinlich"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      eher wahrscheinlich
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswer(e.id, "unwahrscheinlich")}
                      disabled={isChecked}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer disabled:cursor-default ${
                        val === "unwahrscheinlich"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      eher unwahrscheinlich
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {!isChecked ? (
              <button
                onClick={handleCheck}
                disabled={!allAnswered}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                Überprüfen
              </button>
            ) : (
              <>
                <div
                  className={`rounded-lg px-4 py-2 ${allCorrect ? "bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800"}`}
                >
                  <div className="flex items-center gap-2">
                    {allCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span
                      className={`font-semibold text-sm ${allCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}
                    >
                      {allCorrect
                        ? "Alle 5 Zuordnungen richtig!"
                        : "Nicht alle Zuordnungen richtig (Alles-oder-Nichts)."}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  Nächste Aufgabe <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {isChecked && (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Erklärung
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">{currentTask.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
