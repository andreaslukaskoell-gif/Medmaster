import { useState, useEffect, useCallback, useRef } from "react";
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
import { Confetti } from "@/components/ui/confetti";
import { useKFFResults } from "@/hooks/useKFFResults";
import { wortfluessigkeitWords, type WortfluessigkeitWord } from "@/data/kffWortfluessigkeit";

const TASK_COUNT = 15;
const TIME_LIMIT = 300; // 5 minutes

const difficultyLabels: Record<number, { label: string; color: string; bg: string }> = {
  1: {
    label: "Leicht",
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  2: {
    label: "Mittel",
    color: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  3: {
    label: "Schwer",
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
};

interface TaskResult {
  word: WortfluessigkeitWord;
  userAnswer: string;
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

export default function WortfluessigkeitSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [tasks, setTasks] = useState<WortfluessigkeitWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const taskStartTime = useRef(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
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
      const answered = new Set(baseResults.map((r) => r.word.id));
      const remaining = tasks
        .filter((t) => !answered.has(t.id))
        .map((word) => ({ word, userAnswer: "", correct: false, timeSpent: 0 }));
      const allResults = [...baseResults, ...remaining];

      const correctCount = allResults.filter((r) => r.correct).length;
      recordSimulation({
        id: `sim-wf-${Date.now()}`,
        subtestType: "wortflüssigkeit",
        score: correctCount,
        maxScore: TASK_COUNT,
        timeUsed: TIME_LIMIT - timeLeft,
        timeLimit: TIME_LIMIT,
        date: new Date().toISOString(),
        details: allResults.map((r) => ({
          exerciseId: r.word.id,
          userAnswer: r.userAnswer,
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
    const easy = shuffle(wortfluessigkeitWords.filter((w) => w.difficulty === 1)).slice(0, 5);
    const medium = shuffle(wortfluessigkeitWords.filter((w) => w.difficulty === 2)).slice(0, 5);
    const hard = shuffle(wortfluessigkeitWords.filter((w) => w.difficulty === 3)).slice(0, 5);
    const selected = shuffle([...easy, ...medium, ...hard]);
    setTasks(selected);
    setCurrentIndex(0);
    setUserInput("");
    setTimeLeft(TIME_LIMIT);
    setResults([]);
    setExpandedResult(null);
    setPhase("running");
    taskStartTime.current = Date.now();
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleSubmitAnswer = useCallback(() => {
    const answer = userInput.trim().toUpperCase();
    if (!answer) return;
    const word = tasks[currentIndex];
    const timeSpent = Math.round((Date.now() - taskStartTime.current) / 1000);
    const correct =
      answer === word.solution ||
      (word.alternativeSolutions?.some((alt) => answer === alt) ?? false);

    const result: TaskResult = { word, userAnswer: answer, correct, timeSpent };
    const newResults = [...results, result];
    setResults(newResults);

    if (correct) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }

    if (currentIndex + 1 < TASK_COUNT) {
      setCurrentIndex((i) => i + 1);
      setUserInput("");
      taskStartTime.current = Date.now();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      finishSimulation(newResults);
    }
  }, [userInput, tasks, currentIndex, results, finishSimulation]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmitAnswer();
      }
    },
    [handleSubmitAnswer]
  );

  const timePercent = (timeLeft / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 60;

  // === START SCREEN ===
  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Simulation starten
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              {TASK_COUNT} zuf&auml;llige W&ouml;rter (5 leicht, 5 mittel, 5 schwer) in{" "}
              {Math.floor(TIME_LIMIT / 60)} Minuten — genau wie im echten MedAT.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {Math.floor(TIME_LIMIT / 60)}:00 min
              </span>
              <span className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" /> {TASK_COUNT} W&ouml;rter
              </span>
            </div>
            <p className="text-xs">~20 Sekunden pro Wort Durchschnitt</p>
          </div>
          <button
            onClick={startSimulation}
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
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
    const avgTime = results.length > 0 ? Math.round(totalTime / results.length) : 0;
    const scorePercent = Math.round((correctCount / TASK_COUNT) * 100);

    // Difficulty stats
    const diffStats = [1, 2, 3].map((d) => {
      const filtered = results.filter((r) => r.word.difficulty === d);
      return {
        difficulty: d,
        correct: filtered.filter((r) => r.correct).length,
        total: filtered.length,
      };
    });

    return (
      <div className="space-y-6">
        <Confetti active={scorePercent >= 80} />

        {/* Score card */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-orange-500 to-red-600">
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
                        ? "Weiter üben!"
                        : "Mehr Übung nötig!"}
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
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{avgTime}s</p>
                  <p className="text-xs text-muted">&Oslash; pro Wort</p>
                </div>
              </div>
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

        {/* Difficulty statistics */}
        <Card>
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Schwierigkeits-Statistik
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {diffStats.map((s) => (
                <div
                  key={s.difficulty}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center"
                >
                  <p className="text-xs text-muted mb-1">{difficultyLabels[s.difficulty].label}</p>
                  <p
                    className={`text-lg font-bold ${
                      s.correct === s.total
                        ? "text-green-600 dark:text-green-400"
                        : s.correct > 0
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {s.correct}/{s.total}
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
                    onClick={() => setExpandedResult(isExpanded ? null : i)}
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
                      <p className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wider">
                        {result.word.letters}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted">{result.timeSpent}s</span>
                      {result.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-3">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted">Deine Antwort:</span>
                        <span
                          className={`font-mono font-bold ${
                            result.correct
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {result.userAnswer || "(keine)"}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted">L&ouml;sung:</span>
                        <span className="font-mono font-bold text-green-600 dark:text-green-400">
                          {result.word.solution}
                          {result.word.alternativeSolutions?.length
                            ? ` (auch: ${result.word.alternativeSolutions.join(", ")})`
                            : ""}
                        </span>
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
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Neue Simulation
          </button>
        </div>
      </div>
    );
  }

  // === RUNNING ===
  const currentWord = tasks[currentIndex];
  if (!currentWord) return null;

  return (
    <div className="space-y-4">
      <Confetti active={showConfetti} />

      {/* Timer bar */}
      <div className="flex items-center gap-3">
        <Timer
          className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-orange-500"}`}
        />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-orange-500"}`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        </div>
        <span
          className={`text-sm font-mono font-bold min-w-[48px] text-right ${
            isUrgent ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Wort {currentIndex + 1} von {TASK_COUNT}
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
                    ? "bg-orange-500"
                    : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Word card */}
      <Card>
        <CardContent className="p-6 space-y-5">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyLabels[currentWord.difficulty].bg} ${difficultyLabels[currentWord.difficulty].color}`}
            >
              {difficultyLabels[currentWord.difficulty].label}
            </span>
          </div>

          {/* Letter tiles */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {currentWord.letters.split("").map((letter, i) => (
                <div
                  key={i}
                  className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-700 shadow-md rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Input + submit */}
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              onKeyDown={handleKeyDown}
              placeholder="Wort eingeben..."
              className="flex-1 px-4 py-3 text-lg font-mono font-bold text-center rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-orange-500 outline-none"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button
            onClick={handleSubmitAnswer}
            disabled={!userInput.trim()}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {currentIndex + 1 < TASK_COUNT ? (
              <>
                Best&auml;tigen & Weiter
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              "Best\u00e4tigen & Auswerten"
            )}
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
