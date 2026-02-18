import { useState, useEffect, useCallback, useRef } from "react";
import { Timer, CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import { emotionenRegulierenScenarios, type EmotionenRegulierenScenario } from "@/data/kffEmotionenRegulieren";

const TASK_COUNT = 10;
const TIME_LIMIT = 600; // 10 minutes

interface TaskResult {
  task: EmotionenRegulierenScenario;
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

const strategyColors: Record<string, string> = {
  "Situationsauswahl": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Situationsmodifikation": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "Aufmerksamkeitslenkung": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Kognitive Veränderung": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Reaktionsmodulation": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

type SimPhase = "start" | "running" | "results";

export default function EmotionenRegulierenSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [tasks, setTasks] = useState<EmotionenRegulierenScenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const taskStartTime = useRef(Date.now());
  const { recordSimulation } = useKFFResults();

  useEffect(() => {
    if (phase !== "running") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => { if (t <= 1) { clearInterval(interval); return 0; } return t - 1; });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === "running" && timeLeft === 0) finishSimulation();
  }, [timeLeft, phase]);

  const startSimulation = useCallback(() => {
    const selected = shuffle(emotionenRegulierenScenarios).slice(0, TASK_COUNT);
    setTasks(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTimeLeft(TIME_LIMIT);
    setResults([]);
    setExpandedResult(null);
    setPhase("running");
    taskStartTime.current = Date.now();
  }, []);

  const finishSimulation = useCallback(() => {
    setResults((prev) => {
      const answered = new Set(prev.map((r) => r.task.id));
      const remaining = tasks.filter((t) => !answered.has(t.id)).map((task) => ({ task, userAnswer: null, correct: false, timeSpent: 0 }));
      const allResults = [...prev, ...remaining];
      const correctCount = allResults.filter((r) => r.correct).length;
      recordSimulation({
        id: `sim-er-${Date.now()}`,
        subtestType: "emotionen-regulieren",
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
      return allResults;
    });
    setPhase("results");
  }, [tasks, timeLeft, recordSimulation]);

  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer === null) return;
    const task = tasks[currentIndex];
    const timeSpent = Math.round((Date.now() - taskStartTime.current) / 1000);
    const correct = selectedAnswer === task.correctAnswer;
    const result: TaskResult = { task, userAnswer: selectedAnswer, correct, timeSpent };
    setResults((prev) => [...prev, result]);

    if (currentIndex + 1 < TASK_COUNT) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      taskStartTime.current = Date.now();
    } else {
      const allResults = [...results, result];
      const correctCount = allResults.filter((r) => r.correct).length;
      recordSimulation({
        id: `sim-er-${Date.now()}`,
        subtestType: "emotionen-regulieren",
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
      setPhase("results");
    }
  }, [selectedAnswer, tasks, currentIndex, timeLeft, results, recordSimulation]);

  const timePercent = (timeLeft / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 60;

  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-pink-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Simulation starten</h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              {TASK_COUNT} zufällige Aufgaben in {TIME_LIMIT / 60} Minuten. Wähle die effektivste Regulationsstrategie.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {TIME_LIMIT / 60}:00 min</span>
            <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> {TASK_COUNT} Aufgaben</span>
          </div>
          <button onClick={startSimulation} className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors cursor-pointer">
            Simulation starten
          </button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "results") {
    const correctCount = results.filter((r) => r.correct).length;
    const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTime = results.length > 0 ? Math.round(totalTime / results.length) : 0;
    const scorePercent = Math.round((correctCount / TASK_COUNT) * 100);

    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{correctCount}/{TASK_COUNT}</h2>
              <p className="text-sm text-muted">
                {scorePercent}% richtig — {scorePercent >= 80 ? "Ausgezeichnet!" : scorePercent >= 60 ? "Gut gemacht!" : scorePercent >= 40 ? "Weiter üben!" : "Mehr Übung nötig!"}
              </p>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{formatTime(TIME_LIMIT - timeLeft)}</p>
                <p className="text-xs text-muted">Gesamtzeit</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{avgTime}s</p>
                <p className="text-xs text-muted">Ø pro Aufgabe</p>
              </div>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className={`h-3 rounded-full transition-all ${scorePercent >= 80 ? "bg-green-500" : scorePercent >= 50 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${scorePercent}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Aufgabenübersicht</h3>
          {results.map((result, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedResult(expandedResult === i ? null : i)}
                  className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${result.correct ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`}>{i + 1}</span>
                  <p className="text-sm text-gray-900 dark:text-gray-100 flex-1 truncate">{result.task.scenario.slice(0, 80)}...</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-muted">{result.timeSpent}s</span>
                    {result.correct ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                  </div>
                </button>
                {expandedResult === i && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-xs text-muted mb-1">Szenario:</p>
                      <p className="text-sm">{result.task.scenario}</p>
                      <p className="text-xs text-pink-600 dark:text-pink-400 mt-1">Unerwünschte Emotion: {result.task.unwantedEmotion}</p>
                    </div>
                    <div className="space-y-1">
                      {result.task.options.map((opt, j) => (
                        <div key={j} className={`text-sm px-3 py-2 rounded ${j === result.task.correctAnswer ? "bg-green-50 dark:bg-green-900/15 text-green-800 dark:text-green-300 font-medium" : j === result.userAnswer ? "bg-red-50 dark:bg-red-900/15 text-red-800 dark:text-red-300" : "text-muted"}`}>
                          <span className={`inline-block text-xs font-medium px-1.5 py-0.5 rounded mr-2 ${strategyColors[opt.strategy] || ""}`}>{opt.strategy}</span>
                          {opt.description}
                          {j === result.task.correctAnswer && " ✓"}
                          {j === result.userAnswer && j !== result.task.correctAnswer && " ✗"}
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Erklärung:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{result.task.explanation}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <button onClick={startSimulation} className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
            <RotateCcw className="w-4 h-4" /> Neue Simulation
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
      <div className="flex items-center gap-3">
        <Timer className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-pink-500"}`} />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-pink-500"}`} style={{ width: `${timePercent}%` }} />
          </div>
        </div>
        <span className={`text-sm font-mono font-bold min-w-[48px] text-right ${isUrgent ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}>
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-muted">
        <span>Aufgabe {currentIndex + 1} von {TASK_COUNT}</span>
        <div className="flex gap-1">
          {Array.from({ length: TASK_COUNT }, (_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i < results.length ? (results[i].correct ? "bg-green-500" : "bg-red-500") : i === currentIndex ? "bg-pink-500" : "bg-gray-300 dark:bg-gray-600"}`} />
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs text-pink-600 dark:text-pink-400 mb-2">Unerwünschte Emotion: {currentTask.unwantedEmotion}</p>
            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">{currentTask.scenario}</p>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Welche Strategie wäre am effektivsten?</p>
            <div className="space-y-2">
              {currentTask.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAnswer(i)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedAnswer === i
                      ? "border-pink-400 dark:border-pink-600 bg-pink-50 dark:bg-pink-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:bg-pink-50 dark:hover:bg-pink-900/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${strategyColors[option.strategy] || "bg-gray-100 text-gray-700"}`}>
                      {option.strategy}
                    </span>
                    <span className="text-sm text-gray-900 dark:text-gray-100">{option.description}</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {currentIndex + 1 < TASK_COUNT ? "Bestätigen & Weiter" : "Bestätigen & Auswerten"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
