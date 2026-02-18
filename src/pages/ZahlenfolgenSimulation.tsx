import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import {
  Timer,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  Clock,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  zahlenfolgenTasks,
  type ZahlenfolgenTask,
  type ZahlenfolgenPattern,
} from "@/data/kffZahlenfolgen";

const TASK_COUNT = 10;
const TIME_LIMIT = 900; // 15 minutes

const patternLabels: Record<ZahlenfolgenPattern, string> = {
  simple: "Simple Folge",
  zweiersprung: "Zweiersprung",
  dreiersprung: "Dreiersprung",
  vierersprung: "Vierersprung",
  rekursiv: "Rekursiv",
  komplex: "Komplex",
};

interface TaskResult {
  task: ZahlenfolgenTask;
  userAnswer: number | null;
  correct: boolean;
  timeSpent: number;
}

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

export default function ZahlenfolgenSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [tasks, setTasks] = useState<ZahlenfolgenTask[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const taskStartTime = useRef(Date.now());
  const { recordSimulation } = useKFFResults();

  // Timer
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

  const finishSimulation = useCallback(
    (currentResults?: TaskResult[]) => {
      const baseResults = currentResults || results;
      const answered = new Set(baseResults.map((r) => r.task.id));
      const remaining = tasks
        .filter((t) => !answered.has(t.id))
        .map((task) => ({
          task,
          userAnswer: null,
          correct: false,
          timeSpent: 0,
        }));
      const allResults = [...baseResults, ...remaining];

      const correctCount = allResults.filter((r) => r.correct).length;
      recordSimulation({
        id: `sim-zf-${Date.now()}`,
        subtestType: "zahlenfolgen",
        score: correctCount,
        maxScore: TASK_COUNT,
        timeUsed: TIME_LIMIT - timeLeft,
        timeLimit: TIME_LIMIT,
        date: new Date().toISOString(),
        details: allResults.map((r) => ({
          exerciseId: r.task.id,
          userAnswer: r.userAnswer !== null ? String(r.userAnswer) : "",
          correct: r.correct,
          timeSpent: r.timeSpent * 1000,
          date: new Date().toISOString(),
        })),
      });

      setResults(allResults);
      setPhase("results");
    },
    [results, tasks, timeLeft, recordSimulation]
  );

  // Auto-finish when time runs out
  useEffect(() => {
    if (phase === "running" && timeLeft === 0) {
      finishSimulation();
    }
  }, [timeLeft, phase, finishSimulation]);

  const startSimulation = useCallback(() => {
    const selected = shuffle(zahlenfolgenTasks).slice(0, TASK_COUNT);
    setTasks(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTimeLeft(TIME_LIMIT);
    setResults([]);
    setExpandedResult(null);
    setPhase("running");
    taskStartTime.current = Date.now();
  }, []);

  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer === null) return;
    const task = tasks[currentIndex];
    const timeSpent = Math.round(
      (Date.now() - taskStartTime.current) / 1000
    );
    const correct = selectedAnswer === task.correctAnswer;
    const result: TaskResult = { task, userAnswer: selectedAnswer, correct, timeSpent };
    const newResults = [...results, result];
    setResults(newResults);

    if (currentIndex + 1 < TASK_COUNT) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      taskStartTime.current = Date.now();
    } else {
      finishSimulation(newResults);
    }
  }, [selectedAnswer, tasks, currentIndex, results, finishSimulation]);

  const optionLabels = ["A", "B", "C", "D", "E"];
  const timePercent = (timeLeft / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 120;

  // === START SCREEN ===
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Simulation starten
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              {TASK_COUNT} zuf&auml;llige Zahlenfolgen in{" "}
              {Math.floor(TIME_LIMIT / 60)} Minuten — genau wie im echten
              MedAT. Keine Tipps, keine L&ouml;sungswege w&auml;hrend der
              Simulation.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {Math.floor(TIME_LIMIT / 60)}
                :00 min
              </span>
              <span className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" /> {TASK_COUNT} Aufgaben
              </span>
            </div>
          </div>
          <button
            onClick={startSimulation}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Simulation starten
          </button>
        </CardContent>
      </Card>
    );
  }

  // === RESULTS SCREEN ===
  if (phase === "results") {
    const correctCount = results.filter((r) => r.correct).length;
    const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTime =
      results.length > 0 ? Math.round(totalTime / results.length) : 0;
    const scorePercent = Math.round((correctCount / TASK_COUNT) * 100);

    // Pattern statistics
    const patternStats = useMemo(() => {
      const stats: Record<string, { correct: number; total: number }> = {};
      for (const r of results) {
        const p = r.task.pattern;
        if (!stats[p]) stats[p] = { correct: 0, total: 0 };
        stats[p].total++;
        if (r.correct) stats[p].correct++;
      }
      return stats;
    }, [results]);

    return (
      <div className="space-y-6">
        {/* Score card */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {correctCount}/{TASK_COUNT}
                </h2>
                <p className="text-sm text-muted">
                  {scorePercent}% richtig —{" "}
                  {scorePercent >= 80
                    ? "Ausgezeichnet!"
                    : scorePercent >= 60
                      ? "Gut gemacht!"
                      : scorePercent >= 40
                        ? "Weiter &uuml;ben!"
                        : "Mehr &Uuml;bung n&ouml;tig!"}
                </p>
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {formatTime(TIME_LIMIT - timeLeft)}
                  </p>
                  <p className="text-xs text-muted">Gesamtzeit</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {avgTime}s
                  </p>
                  <p className="text-xs text-muted">&Oslash; pro Aufgabe</p>
                </div>
              </div>
              {/* Score bar */}
              <div className="w-full max-w-xs mx-auto">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      scorePercent >= 80
                        ? "bg-green-500"
                        : scorePercent >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${scorePercent}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pattern statistics */}
        <Card>
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Mustertyp-Statistik
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(patternStats).map(([pattern, stats]) => (
                <div
                  key={pattern}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center"
                >
                  <p className="text-xs text-muted mb-1">
                    {patternLabels[pattern as ZahlenfolgenPattern]}
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      stats.correct === stats.total
                        ? "text-green-600 dark:text-green-400"
                        : stats.correct > 0
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stats.correct}/{stats.total}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results list */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Aufgaben&uuml;bersicht
          </h3>
          {results.map((result, i) => {
            const isExpanded = expandedResult === i;
            return (
              <Card key={i}>
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setExpandedResult(isExpanded ? null : i)
                    }
                    className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        result.correct
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-mono text-gray-900 dark:text-gray-100 truncate">
                        {result.task.sequence
                          .map((v, j) =>
                            result.task.missingIndices.includes(j)
                              ? "?"
                              : v
                          )
                          .join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted">
                        {result.timeSpent}s
                      </span>
                      {result.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                      {/* Full sequence */}
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-xs text-muted mb-2">
                          Vollst&auml;ndige Folge:
                        </p>
                        <div className="flex flex-wrap gap-1.5 font-mono text-base">
                          {result.task.sequence.map((val, j) => {
                            const isMissing =
                              result.task.missingIndices.includes(j);
                            return (
                              <span
                                key={j}
                                className={`px-2 py-1 rounded ${
                                  isMissing
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-bold"
                                    : ""
                                }`}
                              >
                                {val}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      {/* Options */}
                      <div className="space-y-1">
                        {result.task.options.map((opt, j) => {
                          const isCorrectOpt =
                            j === result.task.correctAnswer;
                          const isUserChoice = j === result.userAnswer;
                          return (
                            <div
                              key={j}
                              className={`text-sm px-3 py-2 rounded font-mono ${
                                isCorrectOpt
                                  ? "bg-green-50 dark:bg-green-900/15 text-green-800 dark:text-green-300 font-medium"
                                  : isUserChoice
                                    ? "bg-red-50 dark:bg-red-900/15 text-red-800 dark:text-red-300"
                                    : "text-muted"
                              }`}
                            >
                              <span className="font-bold mr-2 font-sans">
                                {optionLabels[j]}
                              </span>
                              {opt}
                              {isCorrectOpt && " ✓"}
                              {isUserChoice && !isCorrectOpt && " ✗"}
                            </div>
                          );
                        })}
                      </div>
                      {/* Explanation */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Muster: {patternLabels[result.task.pattern]}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {result.task.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Restart */}
        <div className="flex justify-center">
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Neue Simulation
          </button>
        </div>
      </div>
    );
  }

  // === RUNNING ===
  const currentTask = tasks[currentIndex];
  if (!currentTask) return null;

  return (
    <div className="space-y-4">
      {/* Timer bar */}
      <div className="flex items-center gap-3">
        <Timer
          className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-blue-500"}`}
        />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-blue-500"}`}
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

      {/* Progress dots */}
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Aufgabe {currentIndex + 1} von {TASK_COUNT}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: TASK_COUNT }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < results.length
                  ? results[i].correct
                    ? "bg-green-500"
                    : "bg-red-500"
                  : i === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Task */}
      <Card>
        <CardContent className="p-6 space-y-5">
          {/* Sequence */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-center gap-2 flex-wrap font-mono text-2xl">
              {currentTask.sequence.map((val, i) => {
                const isMissing = currentTask.missingIndices.includes(i);
                if (isMissing) {
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center justify-center min-w-[48px] h-12 rounded-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-2 border-dashed border-blue-300 dark:border-blue-700"
                    >
                      ?
                    </span>
                  );
                }
                return (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center min-w-[48px] h-12 rounded-lg text-gray-800 dark:text-gray-200"
                  >
                    {val}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {currentTask.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedAnswer(i)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedAnswer === i
                    ? "border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/10"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`text-sm font-bold mt-0.5 ${selectedAnswer === i ? "text-blue-600" : "text-gray-400"}`}
                  >
                    {optionLabels[i]}
                  </span>
                  <span className="text-sm font-mono text-gray-900 dark:text-gray-100">
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {currentIndex + 1 < TASK_COUNT ? (
              <>
                Best&auml;tigen & Weiter
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              "Best&auml;tigen & Auswerten"
            )}
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
