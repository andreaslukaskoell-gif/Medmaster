import { useState, useEffect, useCallback, useRef } from "react";
import { Timer, CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  emotionenErkennenOffiziellAlle,
  EMOTIONEN_ERKENNEN_INSTRUKTION,
  EMOTIONEN_ERKENNEN_AUSFUELLVORSCHRIFT,
  type EmotionenErkennenOffiziellTask,
} from "@/data/emotionenErkennenOffiziell";

const TASK_COUNT = 14;
const TIME_LIMIT = 21 * 60; // 21 Minuten (Papier-Bleistift-Test)

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type SimPhase = "start" | "running" | "results";

type TaskResult = {
  task: EmotionenErkennenOffiziellTask;
  answers: Record<string, "wahrscheinlich" | "unwahrscheinlich">;
  correct: boolean;
};

export default function EmotionenErkennenSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [tasks, setTasks] = useState<EmotionenErkennenOffiziellTask[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, "wahrscheinlich" | "unwahrscheinlich">>
  >({});
  const [results, setResults] = useState<TaskResult[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const { recordSimulation } = useKFFResults();
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (phase === "running" && timeLeft === TIME_LIMIT) startTimeRef.current = Date.now();
    // timeLeft intentionally omitted: we only want to set start time when phase enters "running"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    if (phase !== "running") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  const startSimulation = useCallback(() => {
    const selected = shuffle(emotionenErkennenOffiziellAlle).slice(0, TASK_COUNT);
    setTasks(selected);
    setIndex(0);
    setAnswers({});
    setResults([]);
    setExpandedResult(null);
    setTimeLeft(TIME_LIMIT);
    setPhase("running");
    startTimeRef.current = Date.now();
  }, []);

  const finishSimulation = useCallback(() => {
    const taskResults: TaskResult[] = tasks.map((task) => {
      const a = answers[task.id] || {};
      const allCorrect = task.emotionen.every((e) => a[e.id] === e.correct);
      return { task, answers: a, correct: allCorrect };
    });
    const score = taskResults.filter((r) => r.correct).length;
    setResults(taskResults);
    recordSimulation({
      id: `sim-ee-${Date.now()}`,
      subtestType: "emotionen-erkennen",
      score,
      maxScore: tasks.length,
      timeUsed: TIME_LIMIT - timeLeft,
      timeLimit: TIME_LIMIT,
      date: new Date().toISOString(),
      details: taskResults.map((r) => ({
        exerciseId: r.task.id,
        userAnswer: JSON.stringify(r.answers),
        correct: r.correct,
        timeSpent: 0,
        date: new Date().toISOString(),
      })),
    });
    setPhase("results");
  }, [tasks, answers, timeLeft, recordSimulation]);

  useEffect(() => {
    if (phase === "running" && timeLeft === 0) queueMicrotask(() => finishSimulation());
  }, [phase, timeLeft, finishSimulation]);

  const currentTask = tasks[index];
  const currentAnswers = currentTask ? answers[currentTask.id] || {} : {};
  const allTasksAnswered = tasks.every((t) => {
    const a = answers[t.id] || {};
    return t.emotionen.every((e) => a[e.id] !== undefined);
  });

  const handleNext = useCallback(() => {
    if (index < tasks.length - 1) {
      setIndex((i) => i + 1);
    } else if (allTasksAnswered) {
      finishSimulation();
    }
  }, [index, tasks.length, allTasksAnswered, finishSimulation]);

  const setAnswer = useCallback(
    (optionId: string, value: "wahrscheinlich" | "unwahrscheinlich") => {
      if (!currentTask) return;
      setAnswers((prev) => ({
        ...prev,
        [currentTask.id]: {
          ...(prev[currentTask.id] || {}),
          [optionId]: value,
        },
      }));
    },
    [currentTask]
  );

  // —— Start ——
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Emotionen erkennen — Simulation
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto mb-2">
              {TASK_COUNT} Situationsbeschreibungen. Pro Aufgabe 5 Emotionen als &quot;eher
              wahrscheinlich&quot; oder &quot;eher unwahrscheinlich&quot; bewerten. Eine Aufgabe
              gilt nur als richtig, wenn alle 5 Zuordnungen stimmen (Alles-oder-Nichts).
            </p>
            <p className="text-xs text-muted max-w-md mx-auto">{EMOTIONEN_ERKENNEN_INSTRUKTION}</p>
          </div>
          <details className="max-w-md mx-auto text-left group">
            <summary className="text-sm font-medium text-amber-700 dark:text-amber-400 cursor-pointer list-none flex items-center justify-center gap-1 [&::-webkit-details-marker]:hidden">
              Offizielle Ausfüllvorschrift anzeigen
            </summary>
            <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
              {EMOTIONEN_ERKENNEN_AUSFUELLVORSCHRIFT}
            </div>
          </details>
          <div className="flex items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 21:00 min
            </span>
            <span>{TASK_COUNT} Aufgaben</span>
          </div>
          <button
            onClick={startSimulation}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Simulation starten
          </button>
        </CardContent>
      </Card>
    );
  }

  // —— Results ——
  if (phase === "results") {
    const score = results.filter((r) => r.correct).length;
    const total = results.length;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;

    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-amber-500 to-orange-600">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {score}/{total}
              </h2>
              <p className="text-sm text-muted">
                {percent}% richtig (Alles-oder-Nichts) —{" "}
                {percent >= 80
                  ? "Ausgezeichnet!"
                  : percent >= 60
                    ? "Gut gemacht!"
                    : percent >= 40
                      ? "Weiter üben!"
                      : "Mehr Übung nötig!"}
              </p>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${percent >= 80 ? "bg-green-500" : percent >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Aufgabenübersicht
          </h3>
          {results.map((r, i) => (
            <Card
              key={r.task.id}
              className={`border-l-4 ${r.correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedResult(expandedResult === i ? null : i)}
                  className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${r.correct ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-900 dark:text-gray-100 flex-1 line-clamp-1">
                    {r.task.situation}
                  </p>
                  {r.correct ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                </button>
                {expandedResult === i && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-100 dark:border-gray-800 space-y-3">
                    <div className="space-y-1">
                      {r.task.emotionen.map((e) => {
                        const userVal = r.answers[e.id];
                        const isRight = userVal === e.correct;
                        return (
                          <div
                            key={e.id}
                            className={`text-sm px-3 py-2 rounded flex justify-between items-center ${isRight ? "bg-green-50 dark:bg-green-900/15" : "bg-red-50 dark:bg-red-900/15"}`}
                          >
                            <span className="font-medium">
                              {e.id}) {e.text}
                            </span>
                            <span className="text-xs">
                              {userVal || "—"} {isRight ? "✓" : `→ ${e.correct}`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-muted border-t border-gray-200 dark:border-gray-700 pt-2">
                      {r.task.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Neue Simulation
          </button>
        </div>
      </div>
    );
  }

  // —— Running ——
  if (!currentTask) return null;

  const isUrgent = timeLeft <= 60;
  const timePercent = (timeLeft / TIME_LIMIT) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Timer
          className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-amber-500"}`}
        />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-amber-500"}`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        </div>
        <span
          className={`text-sm font-mono font-bold min-w-[48px] text-right ${isUrgent ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Aufgabe {index + 1} von {tasks.length}
        </span>
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
            Wie fühlt sich {currentTask.personName} in dieser Situation? Geben Sie für jede der
            folgenden Möglichkeiten an, ob sie eher wahrscheinlich oder eher unwahrscheinlich ist.
          </p>
          <div className="space-y-3">
            {currentTask.emotionen.map((e) => {
              const val = currentAnswers[e.id];
              return (
                <div
                  key={e.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 rounded-lg border border-border dark:border-gray-700"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ({e.id}) {e.text}
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setAnswer(e.id, "wahrscheinlich")}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
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
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
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
        </CardContent>
      </Card>

      <div className="flex justify-between gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Zurück
        </button>
        {index < tasks.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium cursor-pointer"
          >
            Weiter <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={finishSimulation}
            disabled={!allTasksAnswered}
            className="flex items-center gap-1 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-amber-700"
          >
            Auswertung
          </button>
        )}
      </div>
    </div>
  );
}
