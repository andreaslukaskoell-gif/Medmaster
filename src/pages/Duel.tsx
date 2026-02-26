import { useState, useEffect, useRef } from "react";
import { Swords, Play, Trophy, User, Bot, Clock, Zap, Target, Lightbulb } from "lucide-react";
import { AiTutorChat, AiTutorButton } from "@/components/AiTutorChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useStore } from "@/store/useStore";
import type { Question } from "@/data/bms/index";
import { useAdaptiveStore, getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId, getStrategieTipp } from "@/data/questions/index";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";

// Dynamic import to keep data out of initial bundle
let allBmsQuestionsCache: Question[] | null = null;
async function getQuestions(): Promise<Question[]> {
  if (allBmsQuestionsCache) return allBmsQuestionsCache;
  const mod = await import("@/data/bms/index");
  allBmsQuestionsCache = mod.allBmsQuestions;
  return allBmsQuestionsCache!;
}

const OPPONENT_NAMES = [
  "MedGenie_2026",
  "BioNerd99",
  "ChemieKönig",
  "PhysikFuchs",
  "StudyHero_AT",
  "BrainMaster",
  "MedAT_Pro",
  "WissenBlitz",
  "LernTiger",
  "QuizChamp",
  "Medizin_Star",
  "FlashBrain",
  "TopStudentin",
  "NeuroNinja",
  "ZellMeister",
  "FormelHeld",
];

type DuelMode = "random" | "adaptive" | "schwachstellen";

interface DuelState {
  questions: Question[];
  currentIndex: number;
  playerAnswers: Record<string, string>;
  opponentAnswers: Record<string, { answer: string; time: number }>;
  playerTime: Record<string, number>;
  opponentName: string;
  timeLeft: number;
  phase: "lobby" | "playing" | "result";
  opponentDifficulty: number;
  mode: DuelMode;
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
  const [showExplanation, setShowExplanation] = useState<string | null>(null);
  const [aiTutorQ, setAiTutorQ] = useState<{ question: Question; userAnswer: string } | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const savedResultRef = useRef(false);
  const { addXP, checkStreak, saveQuizResult } = useStore();
  const { recordAnswer, getWeakestTopics, getAdaptiveQuestions, getMedATReadiness } =
    useAdaptiveStore();

  useEffect(() => {
    getQuestions().then((q) => setQuestions(q));
  }, []);

  // Save result once when duel ends (avoid calling during render)
  useEffect(() => {
    if (duel?.phase !== "result") {
      savedResultRef.current = false;
      return;
    }
    if (savedResultRef.current) return;
    savedResultRef.current = true;
    const playerScore = duel.questions.filter(
      (q) => duel.playerAnswers[q.id] === q.correctOptionId
    ).length;
    const modeBonus = duel.mode === "schwachstellen" ? 1.5 : duel.mode === "adaptive" ? 1.2 : 1;
    const playerWon =
      playerScore >
      duel.questions.filter((q) => duel.opponentAnswers[q.id]?.answer === q.correctOptionId).length;
    const xpGain = Math.round((playerWon ? playerScore * 20 : playerScore * 10) * modeBonus);
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
  }, [duel, addXP, checkStreak, saveQuizResult]);

  const selectQuestions = (mode: DuelMode): Question[] => {
    if (mode === "adaptive") {
      // Use adaptive store to pick questions biased toward weaknesses
      const adaptive = getAdaptiveQuestions(5);
      if (adaptive.length >= 5) return adaptive;
      // Fallback: pad with random
      const remaining = shuffleArray(questions.filter((q) => !adaptive.some((a) => a.id === q.id)));
      return [...adaptive, ...remaining.slice(0, 5 - adaptive.length)];
    }

    if (mode === "schwachstellen") {
      // Only from weakest topics
      const weakTopics = getWeakestTopics(10);
      const weakIds = new Set(weakTopics.map((t) => t.stichwortId));
      const weakQuestions = questions.filter((q) => {
        const swId = getDirectStichwortId(q.id) || getStichwortForQuestion(q.id);
        return swId && weakIds.has(swId);
      });
      if (weakQuestions.length >= 5) return shuffleArray(weakQuestions).slice(0, 5);
      // Fallback to adaptive if not enough weak questions
      return shuffleArray(questions).slice(0, 5);
    }

    // Random mode
    return shuffleArray(questions).slice(0, 5);
  };

  const startDuel = (mode: DuelMode = "random") => {
    const selected = selectQuestions(mode);
    const opponent = OPPONENT_NAMES[Math.floor(Math.random() * OPPONENT_NAMES.length)];
    // Adaptive difficulty: match player's level
    const readiness = getMedATReadiness();
    const baseDifficulty = Math.max(0.4, Math.min(0.85, readiness / 100));
    const jitter = (Math.random() - 0.5) * 0.2;
    const difficulty = Math.max(0.35, Math.min(0.9, baseDifficulty + jitter));

    setDuel({
      questions: selected,
      currentIndex: 0,
      playerAnswers: {},
      opponentAnswers: {},
      playerTime: {},
      opponentName: opponent,
      timeLeft: 30,
      phase: "playing",
      opponentDifficulty: difficulty,
      mode,
    });
    setShowExplanation(null);
  };

  useEffect(() => {
    if (!duel || duel.phase !== "playing") return;

    timerRef.current = setInterval(() => {
      setDuel((prev) => {
        if (!prev || prev.phase !== "playing") return prev;
        if (prev.timeLeft <= 1) {
          const nextIndex = prev.currentIndex + 1;
          if (nextIndex >= prev.questions.length) {
            return { ...prev, timeLeft: 0, phase: "result" };
          }
          return { ...prev, currentIndex: nextIndex, timeLeft: 30 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intent: react to phase/index only
  }, [duel?.phase, duel?.currentIndex]);

  // Simulate opponent answer
  useEffect(() => {
    if (!duel || duel.phase !== "playing") return;
    const q = duel.questions[duel.currentIndex];
    if (duel.opponentAnswers[q.id]) return;

    const delay = 3000 + Math.random() * 15000;
    const timeout = setTimeout(() => {
      setDuel((prev) => {
        if (!prev) return prev;
        const isCorrect = Math.random() < prev.opponentDifficulty;
        const wrongOptions = q.options.filter((o) => o.id !== q.correctOptionId);
        const answer = isCorrect
          ? q.correctOptionId
          : wrongOptions.length > 0
            ? wrongOptions[Math.floor(Math.random() * wrongOptions.length)].id
            : q.correctOptionId;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intent: react to phase/index only
  }, [duel?.phase, duel?.currentIndex]);

  const handleAnswer = (optionId: string) => {
    if (!duel || duel.phase !== "playing") return;
    const q = duel.questions[duel.currentIndex];
    if (duel.playerAnswers[q.id]) return;

    const timeSpent = 30 - duel.timeLeft;
    const correct = optionId === q.correctOptionId;

    // Record to adaptive store
    const swId = getDirectStichwortId(q.id) || getStichwortForQuestion(q.id);
    if (swId) recordAnswer(swId, correct, timeSpent);

    setDuel((prev) => {
      if (!prev) return prev;
      const newAnswers = { ...prev.playerAnswers, [q.id]: optionId };
      const newTimes = { ...prev.playerTime, [q.id]: timeSpent };

      setTimeout(() => {
        setDuel((p) => {
          if (!p) return p;
          const nextIndex = p.currentIndex + 1;
          if (nextIndex >= p.questions.length) {
            return { ...p, phase: "result" };
          }
          return { ...p, currentIndex: nextIndex, timeLeft: 30 };
        });
      }, 1200);

      return { ...prev, playerAnswers: newAnswers, playerTime: newTimes };
    });
  };

  // Keyboard shortcuts (1-5 to answer)
  const playingQ = duel?.phase === "playing" ? duel.questions[duel.currentIndex] : null;
  const alreadyAnswered = playingQ ? !!duel?.playerAnswers[playingQ.id] : true;
  useKeyboardShortcuts({
    disabled: !playingQ || alreadyAnswered,
    maxOptions: playingQ?.options.length ?? 5,
    onSelectOption: (idx) => {
      if (playingQ && idx < playingQ.options.length) handleAnswer(playingQ.options[idx].id);
    },
  });

  // ── Lobby ──────────────────────────────────────────────
  if (!duel || duel.phase === "lobby") {
    const weakTopics = getWeakestTopics(3);
    const readiness = getMedATReadiness();

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Duell" }]} />

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
              5 Fragen, 30 Sekunden pro Frage. Der KI-Gegner passt sich deinem Niveau an.
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
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {Math.round(readiness)}%
                </p>
                <p className="text-xs text-muted">Bereitschaft</p>
              </div>
            </div>

            <div className="grid gap-3 max-w-md mx-auto">
              <Button
                size="lg"
                onClick={() => startDuel("random")}
                disabled={questions.length === 0}
              >
                <Play className="w-5 h-5 mr-2" /> Zufälliges Duell
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => startDuel("adaptive")}
                disabled={questions.length === 0}
              >
                <Target className="w-5 h-5 mr-2" /> Adaptives Duell
              </Button>
              {weakTopics.length > 0 && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-300 text-red-700 dark:border-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={() => startDuel("schwachstellen")}
                  disabled={questions.length === 0}
                >
                  <Zap className="w-5 h-5 mr-2" /> Schwachstellen-Duell
                </Button>
              )}
            </div>

            {weakTopics.length > 0 && (
              <div className="text-xs text-muted space-y-1">
                <p className="font-medium">Deine Schwachstellen:</p>
                {weakTopics.map((t) => (
                  <span
                    key={t.stichwortId}
                    className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded mr-1"
                  >
                    {t.thema} ({Math.round(t.rate * 100)}%)
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────
  if (duel.phase === "result") {
    const playerScore = duel.questions.filter(
      (q) => duel.playerAnswers[q.id] === q.correctOptionId
    ).length;
    const opponentScore = duel.questions.filter(
      (q) => duel.opponentAnswers[q.id]?.answer === q.correctOptionId
    ).length;
    const playerWon = playerScore > opponentScore;
    const draw = playerScore === opponentScore;

    const modeBonus = duel.mode === "schwachstellen" ? 1.5 : duel.mode === "adaptive" ? 1.2 : 1;
    const xpGain = Math.round((playerWon ? playerScore * 20 : playerScore * 10) * modeBonus);

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div
              className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto ${playerWon ? "bg-yellow-100 dark:bg-yellow-900/30" : draw ? "bg-gray-100 dark:bg-gray-800" : "bg-red-100 dark:bg-red-900/30"}`}
            >
              <Trophy
                className={`w-10 h-10 ${playerWon ? "text-yellow-600" : draw ? "text-gray-500" : "text-red-500"}`}
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {playerWon ? "Du hast gewonnen!" : draw ? "Unentschieden!" : "Knapp verloren!"}
            </h2>

            {duel.mode !== "random" && (
              <Badge
                variant={duel.mode === "schwachstellen" ? "danger" : "info"}
                className="text-xs"
              >
                {duel.mode === "schwachstellen" ? "Schwachstellen-Duell" : "Adaptives Duell"}
              </Badge>
            )}

            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-7 h-7 text-primary-700 dark:text-primary-400" />
                </div>
                <p className="font-bold text-2xl text-primary-700 dark:text-primary-400">
                  {playerScore}
                </p>
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

            <p className="text-sm text-green-600 dark:text-green-400">
              +{xpGain} XP {modeBonus > 1 && <span className="text-xs">({modeBonus}x Bonus)</span>}
            </p>

            <div className="space-y-3 text-left">
              {duel.questions.map((q, i) => {
                const playerCorrect = duel.playerAnswers[q.id] === q.correctOptionId;
                const opponentCorrect = duel.opponentAnswers[q.id]?.answer === q.correctOptionId;
                const tipp = getStrategieTipp(q.id);
                const isExpanded = showExplanation === q.id;

                return (
                  <div
                    key={q.id}
                    className="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2"
                  >
                    <button
                      onClick={() => setShowExplanation(isExpanded ? null : q.id)}
                      className="flex items-center gap-3 py-2 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded px-1 -mx-1 cursor-pointer"
                    >
                      <span className="text-xs text-muted w-5">{i + 1}.</span>
                      <div className="flex-1 text-sm text-gray-700 dark:text-gray-300 truncate">
                        {q.text}
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Badge
                          variant={playerCorrect ? "success" : "danger"}
                          className="text-[10px]"
                        >
                          Du
                        </Badge>
                        <Badge
                          variant={opponentCorrect ? "success" : "danger"}
                          className="text-[10px]"
                        >
                          KI
                        </Badge>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="ml-8 mt-1 space-y-2 text-sm">
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                          <p className="font-medium text-green-800 dark:text-green-300 mb-1">
                            Richtige Antwort: {q.correctOptionId.toUpperCase()}){" "}
                            {q.options.find((o) => o.id === q.correctOptionId)?.text}
                          </p>
                          <p className="text-green-700 dark:text-green-400 text-xs">
                            {stripMarkdownAsterisks(q.explanation)}
                          </p>
                        </div>
                        {tipp && (
                          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 flex gap-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-amber-700 dark:text-amber-400 text-xs">{tipp}</p>
                          </div>
                        )}
                        {!playerCorrect && (
                          <AiTutorButton
                            onClick={() =>
                              setAiTutorQ({
                                question: q,
                                userAnswer: duel.playerAnswers[q.id] || "",
                              })
                            }
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <Button variant="outline" onClick={() => setDuel(null)}>
                Zurück
              </Button>
              <Button onClick={() => startDuel(duel.mode)}>
                <Swords className="w-4 h-4 mr-1" /> Neues Duell
              </Button>
            </div>
          </CardContent>
        </Card>

        {aiTutorQ && (
          <AiTutorChat
            question={aiTutorQ.question}
            userAnswer={aiTutorQ.userAnswer}
            onClose={() => setAiTutorQ(null)}
          />
        )}
      </div>
    );
  }

  // ── Playing phase ──────────────────────────────────────
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

        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${duel.timeLeft <= 10 ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-100 dark:bg-gray-800"}`}
        >
          <Clock className={`w-4 h-4 ${duel.timeLeft <= 10 ? "text-red-500" : "text-muted"}`} />
          <span
            className={`text-lg font-mono font-bold ${duel.timeLeft <= 10 ? "text-red-600" : "text-gray-900 dark:text-gray-100"}`}
          >
            {duel.timeLeft}s
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {duel.opponentName}
          </span>
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
        </div>
      </div>

      {duel.mode !== "random" && (
        <div className="flex justify-center">
          <Badge
            variant={duel.mode === "schwachstellen" ? "danger" : "info"}
            className="text-[10px]"
          >
            {duel.mode === "schwachstellen" ? "Schwachstellen" : "Adaptiv"}
          </Badge>
        </div>
      )}

      <div className="flex justify-center gap-8">
        <span className="text-xl font-bold text-primary-700 dark:text-primary-400">
          {duel.questions.filter((q) => duel.playerAnswers[q.id] === q.correctOptionId).length}
        </span>
        <span className="text-sm text-muted self-center">Frage {duel.currentIndex + 1}/5</span>
        <span className="text-xl font-bold text-red-600 dark:text-red-400">
          {
            duel.questions.filter((q) => duel.opponentAnswers[q.id]?.answer === q.correctOptionId)
              .length
          }
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((duel.currentIndex + 1) / 5) * 100}%` }}
        />
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
                    : answered && opt.id === q.correctOptionId
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                } ${answered ? "pointer-events-none" : ""}`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                {opt.text}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            {opponentAnswered ? (
              <Badge variant="info" className="text-xs">
                <Zap className="w-3 h-3 mr-1" /> {duel.opponentName} hat geantwortet
              </Badge>
            ) : (
              <span className="text-xs text-muted animate-pulse">
                {duel.opponentName} denkt nach...
              </span>
            )}
          </div>
        </CardContent>
      </Card>
      <FloatingQuestionCounter current={duel.currentIndex + 1} total={duel.questions.length} />
    </div>
  );
}
