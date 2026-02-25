import { useState, useEffect, useCallback, useRef } from "react";
import { Timer, ChevronRight, RotateCcw, Trophy, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useKFFResults } from "@/hooks/useKFFResults";
import {
  sozialesEntscheidenScenarios,
  type SozialesEntscheidenScenario,
} from "@/data/kffSozialesEntscheiden";

const SCENARIO_COUNT = 5;
const TIME_LIMIT = 900; // 15 minutes

interface ScenarioResult {
  scenario: SozialesEntscheidenScenario;
  ratings: Record<number, number>;
  totalDeviation: number;
  maxDeviation: number;
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

function getDeviationColor(deviation: number): string {
  if (deviation === 0) return "text-green-600 dark:text-green-400";
  if (deviation === 1) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

type SimPhase = "start" | "running" | "results";

export default function SozialesEntscheidenSimulation() {
  const [phase, setPhase] = useState<SimPhase>("start");
  const [scenarios, setScenarios] = useState<SozialesEntscheidenScenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [results, setResults] = useState<ScenarioResult[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const taskStartTime = useRef(0);
  const { recordSimulation } = useKFFResults();

  useEffect(() => {
    if (phase === "running" && taskStartTime.current === 0) taskStartTime.current = Date.now();
  }, [phase]);

  const currentScenario = scenarios[currentIndex];
  const allRated = currentScenario
    ? currentScenario.handlungsoptionen.every((_, i) => ratings[i] !== undefined)
    : false;

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
    const selected = shuffle(sozialesEntscheidenScenarios).slice(0, SCENARIO_COUNT);
    setScenarios(selected);
    setCurrentIndex(0);
    setRatings({});
    setTimeLeft(TIME_LIMIT);
    setResults([]);
    setExpandedResult(null);
    setPhase("running");
    taskStartTime.current = Date.now();
  }, []);

  const finishSimulation = useCallback(() => {
    setResults((prev) => {
      const answeredIds = new Set(prev.map((r) => r.scenario.id));
      const remaining = scenarios
        .filter((s) => !answeredIds.has(s.id))
        .map((scenario) => ({
          scenario,
          ratings: {},
          totalDeviation: scenario.handlungsoptionen.reduce(
            (sum, opt) => sum + Math.abs(3 - opt.idealRating),
            0
          ),
          maxDeviation: scenario.handlungsoptionen.length * 5,
          timeSpent: 0,
        }));
      const allResults = [...prev, ...remaining];

      const totalDeviation = allResults.reduce((sum, r) => sum + r.totalDeviation, 0);
      const maxDeviation = allResults.reduce((sum, r) => sum + r.maxDeviation, 0);
      const score = Math.round((1 - totalDeviation / maxDeviation) * 100);

      recordSimulation({
        id: `sim-se-${Date.now()}`,
        subtestType: "soziales-entscheiden",
        score,
        maxScore: 100,
        timeUsed: TIME_LIMIT - timeLeft,
        timeLimit: TIME_LIMIT,
        date: new Date().toISOString(),
        details: allResults.map((r) => ({
          exerciseId: r.scenario.id,
          userAnswer: JSON.stringify(r.ratings),
          correct: r.totalDeviation <= r.maxDeviation * 0.3,
          timeSpent: r.timeSpent * 1000,
          date: new Date().toISOString(),
        })),
      });
      return allResults;
    });
    setPhase("results");
  }, [scenarios, timeLeft, recordSimulation]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (phase === "running" && timeLeft === 0) finishSimulation();
    }, 0);
    return () => clearTimeout(t);
  }, [timeLeft, phase, finishSimulation]);

  const handleRating = useCallback((optionIndex: number, value: number) => {
    setRatings((prev) => ({ ...prev, [optionIndex]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!allRated || !currentScenario) return;
    const timeSpent = Math.round((Date.now() - taskStartTime.current) / 1000);
    const totalDeviation = currentScenario.handlungsoptionen.reduce(
      (sum, opt, i) => sum + Math.abs((ratings[i] || 0) - opt.idealRating),
      0
    );
    const maxDeviation = currentScenario.handlungsoptionen.length * 5;

    const result: ScenarioResult = {
      scenario: currentScenario,
      ratings: { ...ratings },
      totalDeviation,
      maxDeviation,
      timeSpent,
    };
    setResults((prev) => [...prev, result]);

    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex((i) => i + 1);
      setRatings({});
      taskStartTime.current = Date.now();
    } else {
      const allResults = [...results, result];
      const totalDev = allResults.reduce((sum, r) => sum + r.totalDeviation, 0);
      const maxDev = allResults.reduce((sum, r) => sum + r.maxDeviation, 0);
      const score = Math.round((1 - totalDev / maxDev) * 100);

      recordSimulation({
        id: `sim-se-${Date.now()}`,
        subtestType: "soziales-entscheiden",
        score,
        maxScore: 100,
        timeUsed: TIME_LIMIT - timeLeft,
        timeLimit: TIME_LIMIT,
        date: new Date().toISOString(),
        details: allResults.map((r) => ({
          exerciseId: r.scenario.id,
          userAnswer: JSON.stringify(r.ratings),
          correct: r.totalDeviation <= r.maxDeviation * 0.3,
          timeSpent: r.timeSpent * 1000,
          date: new Date().toISOString(),
        })),
      });
      setPhase("results");
    }
  }, [
    allRated,
    currentScenario,
    ratings,
    currentIndex,
    scenarios.length,
    results,
    timeLeft,
    recordSimulation,
  ]);

  const timePercent = (timeLeft / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 60;

  if (phase === "start") {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Timer className="w-8 h-8 text-teal-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Simulation starten
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              {SCENARIO_COUNT} zufällige Szenarien mit je 8 Handlungsoptionen in {TIME_LIMIT / 60}{" "}
              Minuten. Bewerte jede Option auf der Skala 1-6.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {TIME_LIMIT / 60}:00 min
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" /> {SCENARIO_COUNT} Szenarien
            </span>
          </div>
          <button
            onClick={startSimulation}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Simulation starten
          </button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "results") {
    const totalDeviation = results.reduce((sum, r) => sum + r.totalDeviation, 0);
    const maxDeviation = results.reduce((sum, r) => sum + r.maxDeviation, 0);
    const scorePercent = Math.round((1 - totalDeviation / maxDeviation) * 100);
    const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTime = results.length > 0 ? Math.round(totalTime / results.length) : 0;

    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-teal-500 to-emerald-600">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {scorePercent}%
              </h2>
              <p className="text-sm text-muted">
                Übereinstimmung —{" "}
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
                <p className="text-xs text-muted">Ø pro Szenario</p>
              </div>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${scorePercent >= 80 ? "bg-green-500" : scorePercent >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                  style={{ width: `${scorePercent}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Szenarien-Übersicht
          </h3>
          {results.map((result, i) => {
            const scenarioPercent = Math.round(
              (1 - result.totalDeviation / result.maxDeviation) * 100
            );
            return (
              <Card key={i}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedResult(expandedResult === i ? null : i)}
                    className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${scenarioPercent >= 70 ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-900 dark:text-gray-100 flex-1 truncate">
                      {result.scenario.scenario.slice(0, 80)}...
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted">{result.timeSpent}s</span>
                      <span
                        className={`text-xs font-medium ${scenarioPercent >= 70 ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}
                      >
                        {scenarioPercent}%
                      </span>
                    </div>
                  </button>
                  {expandedResult === i && (
                    <div className="px-4 pb-4 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-3">
                      {result.scenario.handlungsoptionen.map((opt, j) => {
                        const userRating = result.ratings[j];
                        const deviation =
                          userRating !== undefined ? Math.abs(userRating - opt.idealRating) : 0;
                        return (
                          <div
                            key={j}
                            className="text-sm px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 space-y-1"
                          >
                            <p className="text-gray-900 dark:text-gray-100">
                              {j + 1}. {opt.text}
                            </p>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="text-muted">
                                Deine Bewertung: <strong>{userRating ?? "—"}</strong>
                              </span>
                              <span className="text-muted">
                                Ideal: <strong>{opt.idealRating}</strong>
                              </span>
                              <span className={`font-medium ${getDeviationColor(deviation)}`}>
                                {deviation === 0 ? "Perfekt!" : `Abweichung: ${deviation}`}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Neue Simulation
          </button>
        </div>
      </div>
    );
  }

  // === RUNNING ===
  if (!currentScenario) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Timer className={`w-5 h-5 ${isUrgent ? "text-red-500 animate-pulse" : "text-teal-500"}`} />
        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${isUrgent ? "bg-red-500" : "bg-teal-500"}`}
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
          Szenario {currentIndex + 1} von {scenarios.length}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: scenarios.length }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i < results.length ? "bg-teal-500" : i === currentIndex ? "bg-teal-300" : "bg-gray-300 dark:bg-gray-600"}`}
            />
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
              {currentScenario.scenario}
            </p>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Bewerte jede Handlungsoption (1 = sehr unangemessen, 6 = sehr angemessen):
            </p>
            <div className="space-y-4">
              {currentScenario.handlungsoptionen.map((option, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-2"
                >
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    <span className="font-bold text-teal-500 mr-1">{i + 1}.</span>
                    {option.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted w-20 shrink-0">unangemessen</span>
                    <div className="flex-1 flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map((value) => (
                        <button
                          key={value}
                          onClick={() => handleRating(i, value)}
                          className={`flex-1 h-9 rounded-md text-xs font-medium transition-all cursor-pointer ${
                            ratings[i] === value
                              ? "bg-teal-500 text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-muted hover:bg-gray-300 dark:hover:bg-gray-600"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] text-muted w-20 text-right shrink-0">
                      angemessen
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!allRated}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {currentIndex + 1 < scenarios.length
                ? "Bestätigen & Weiter"
                : "Bestätigen & Auswerten"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
