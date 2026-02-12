import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Swords, Play, Trophy, User, Bot, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import type { Question } from "@/data/bms/index";

// We import dynamically to avoid circular deps
let allBmsQuestionsCache: Question[] | null = null;
async function getQuestions(): Promise<Question[]> {
  if (allBmsQuestionsCache) return allBmsQuestionsCache;
  const mod = await import("@/data/bms/index");
  allBmsQuestionsCache = mod.allBmsQuestions;
  return allBmsQuestionsCache!;
}

// Fallback with old questions if new ones not ready
import { bmsQuestions as legacyQuestions } from "@/data/bmsQuestions";

const OPPONENT_NAMES = [
  "MedGenie_2026", "BioNerd99", "ChemieKönig", "PhysikFuchs",
  "StudyHero_AT", "BrainMaster", "MedAT_Pro", "WissenBlitz",
  "LernTiger", "QuizChamp", "Medizin_Star", "FlashBrain",
  "TopStudentin", "NeuroNinja", "ZellMeister", "FormelHeld",
];

interface DuelState {
  questions: Question[];
  currentIndex: number;
  playerAnswers: Record<string, string>;
  opponentAnswers: Record<string, { answer: string; time: number }>;
  playerTime: Record<string, number>;
  opponentName: string;
  opponentAvatar: string;
  timeLeft: number;
  phase: "lobby" | "playing" | "waiting" | "result";
  opponentDifficulty: number; // 0.5-0.85 correct rate
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Duel() {
  const [duel, setDuel] = useState<DuelState | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const { addXP, checkStreak, saveQuizResult } = useStore();

  useEffect(() => {
    getQuestions().then((q) => setQuestions(q)).catch(() => {
      // Fallback to legacy questions
      setQuestions(legacyQuestions.map((q) => ({ ...q, difficulty: "mittel" as const, tags: [] })));
    });
  }, []);

  const startDuel = () => {
    const selected = shuffleArray(questions.length > 0 ? questions : legacyQuestions.map((q) => ({ ...q, difficulty: "mittel" as const, tags: [] }))).slice(0, 5);
    const opponent = OPPONENT_NAMES[Math.floor(Math.random() * OPPONENT_NAMES.length)];
    const difficulty = 0.5 + Math.random() * 0.35; // 50-85% correct

    setDuel({
      questions: selected,
      currentIndex: 0,
      playerAnswers: {},
      opponentAnswers: {},
      playerTime: {},
      opponentName: opponent,
      opponentAvatar: `${opponent[0]}${opponent[1]}`,
      timeLeft: 30,
      phase: "playing",
      opponentDifficulty: difficulty,
    });
  };

  useEffect(() => {
    if (!duel || duel.phase !== "playing") return;

    timerRef.current = setInterval(() => {
      setDuel((prev) => {
        if (!prev || prev.phase !== "playing") return prev;
        if (prev.timeLeft <= 1) {
          // Time's up, move to next or result
          const nextIndex = prev.currentIndex + 1;
          if (nextIndex >= prev.questions.length) {
            return { ...prev, timeLeft: 0, phase: "result" };
          }
          return { ...prev, currentIndex: nextIndex, timeLeft: 30 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [duel?.phase, duel?.currentIndex]);

  // Simulate opponent answer
  useEffect(() => {
    if (!duel || duel.phase !== "playing") return;
    const q = duel.questions[duel.currentIndex];
    if (duel.opponentAnswers[q.id]) return;

    const delay = 3000 + Math.random() * 15000; // 3-18 seconds
    const timeout = setTimeout(() => {
      setDuel((prev) => {
        if (!prev) return prev;
        const isCorrect = Math.random() < prev.opponentDifficulty;
        const answer = isCorrect
          ? q.correctOptionId
          : q.options.filter((o) => o.id !== q.correctOptionId)[Math.floor(Math.random() * (q.options.length - 1))].id;

        return {
          ...prev,
          opponentAnswers: {
            ...prev.opponentAnswers,
            [q.id]: { answer, time: Math.round(delay / 1000) },
          },
        };
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [duel?.phase, duel?.currentIndex]);

  const handleAnswer = (optionId: string) => {
    if (!duel || duel.phase !== "playing") return;
    const q = duel.questions[duel.currentIndex];
    if (duel.playerAnswers[q.id]) return;

    const timeSpent = 30 - duel.timeLeft;

    setDuel((prev) => {
      if (!prev) return prev;
      const newAnswers = { ...prev.playerAnswers, [q.id]: optionId };
      const newTimes = { ...prev.playerTime, [q.id]: timeSpent };

      // Auto advance after short delay
      setTimeout(() => {
        setDuel((p) => {
          if (!p) return p;
          const nextIndex = p.currentIndex + 1;
          if (nextIndex >= p.questions.length) {
            return { ...p, phase: "result" };
          }
          return { ...p, currentIndex: nextIndex, timeLeft: 30 };
        });
      }, 800);

      return { ...prev, playerAnswers: newAnswers, playerTime: newTimes };
    });
  };

  if (!duel || duel.phase === "lobby") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Duell" }]} />

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Duell-Modus</h1>
          <p className="text-muted mt-1">Tritt gegen einen KI-Gegner an!</p>
        </div>

        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto">
              <Swords className="w-10 h-10 text-primary-700 dark:text-primary-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">BMS-Duell</h2>
            <p className="text-muted max-w-md mx-auto">
              5 zufällige Fragen, 30 Sekunden pro Frage. Wer antwortet schneller und richtiger?
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">5</p>
                <p className="text-xs text-muted">Fragen</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">30s</p>
                <p className="text-xs text-muted">pro Frage</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">1v1</p>
                <p className="text-xs text-muted">vs KI</p>
              </div>
            </div>
            <Button size="lg" onClick={startDuel} disabled={questions.length === 0}>
              <Play className="w-5 h-5 mr-2" /> Duell starten
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (duel.phase === "result") {
    const playerScore = duel.questions.filter((q) => duel.playerAnswers[q.id] === q.correctOptionId).length;
    const opponentScore = duel.questions.filter((q) => duel.opponentAnswers[q.id]?.answer === q.correctOptionId).length;
    const playerWon = playerScore > opponentScore;
    const draw = playerScore === opponentScore;

    const xpGain = playerWon ? playerScore * 20 : playerScore * 10;
    addXP(xpGain);
    checkStreak();

    saveQuizResult({
      id: `duel-${Date.now()}`,
      type: "bms",
      subject: "Duell",
      score: playerScore,
      total: 5,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      answers: duel.questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: duel.playerAnswers[q.id] || "",
        correct: duel.playerAnswers[q.id] === q.correctOptionId,
      })),
    });

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto ${playerWon ? "bg-yellow-100 dark:bg-yellow-900/30" : draw ? "bg-gray-100 dark:bg-gray-800" : "bg-red-100 dark:bg-red-900/30"}`}>
              <Trophy className={`w-10 h-10 ${playerWon ? "text-yellow-600" : draw ? "text-gray-500" : "text-red-500"}`} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {playerWon ? "Du hast gewonnen!" : draw ? "Unentschieden!" : "Knapp verloren!"}
            </h2>

            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-7 h-7 text-primary-700 dark:text-primary-400" />
                </div>
                <p className="font-bold text-2xl text-primary-700 dark:text-primary-400">{playerScore}</p>
                <p className="text-xs text-muted">Du</p>
              </div>
              <div className="text-2xl font-bold text-gray-400">vs</div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Bot className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <p className="font-bold text-2xl text-red-600 dark:text-red-400">{opponentScore}</p>
                <p className="text-xs text-muted">{duel.opponentName}</p>
              </div>
            </div>

            <p className="text-sm text-green-600 dark:text-green-400">+{xpGain} XP</p>

            <div className="space-y-3 text-left">
              {duel.questions.map((q, i) => {
                const playerCorrect = duel.playerAnswers[q.id] === q.correctOptionId;
                const opponentCorrect = duel.opponentAnswers[q.id]?.answer === q.correctOptionId;
                return (
                  <div key={q.id} className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <span className="text-xs text-muted w-5">{i + 1}.</span>
                    <div className="flex-1 text-sm text-gray-700 dark:text-gray-300 truncate">{q.text}</div>
                    <div className="flex gap-2 shrink-0">
                      <Badge variant={playerCorrect ? "success" : "danger"} className="text-[10px]">Du</Badge>
                      <Badge variant={opponentCorrect ? "success" : "danger"} className="text-[10px]">KI</Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <Button variant="outline" onClick={() => setDuel(null)}>Zurück</Button>
              <Button onClick={startDuel}>
                <Swords className="w-4 h-4 mr-1" /> Neues Duell
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Playing phase
  const q = duel.questions[duel.currentIndex];
  const answered = !!duel.playerAnswers[q.id];
  const opponentAnswered = !!duel.opponentAnswers[q.id];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-700 dark:text-primary-400" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Du</span>
        </div>

        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${duel.timeLeft <= 10 ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-100 dark:bg-gray-800"}`}>
          <Clock className={`w-4 h-4 ${duel.timeLeft <= 10 ? "text-red-500" : "text-muted"}`} />
          <span className={`text-lg font-mono font-bold ${duel.timeLeft <= 10 ? "text-red-600" : "text-gray-900 dark:text-gray-100"}`}>
            {duel.timeLeft}s
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{duel.opponentName}</span>
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
        </div>
      </div>

      {/* Score display */}
      <div className="flex justify-center gap-8">
        <span className="text-xl font-bold text-primary-700 dark:text-primary-400">
          {duel.questions.filter((q) => duel.playerAnswers[q.id] === q.correctOptionId).length}
        </span>
        <span className="text-sm text-muted self-center">Frage {duel.currentIndex + 1}/5</span>
        <span className="text-xl font-bold text-red-600 dark:text-red-400">
          {duel.questions.filter((q) => duel.opponentAnswers[q.id]?.answer === q.correctOptionId).length}
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${((duel.currentIndex + 1) / 5) * 100}%` }} />
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.text}</p>
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleAnswer(opt.id)}
                disabled={answered}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answered && duel.playerAnswers[q.id] === opt.id
                    ? opt.id === q.correctOptionId
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                      : "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                } ${answered ? "pointer-events-none" : ""}`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                {opt.text}
              </button>
            ))}
          </div>

          {/* Opponent status */}
          <div className="mt-4 flex items-center justify-end gap-2">
            {opponentAnswered ? (
              <Badge variant="info" className="text-xs">
                <Zap className="w-3 h-3 mr-1" /> {duel.opponentName} hat geantwortet
              </Badge>
            ) : (
              <span className="text-xs text-muted animate-pulse">{duel.opponentName} denkt nach...</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
