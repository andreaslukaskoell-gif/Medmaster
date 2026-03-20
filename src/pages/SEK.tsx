import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Play,
  Send,
  CheckCircle2,
  XCircle,
  Timer,
} from "lucide-react";
import { ExamTimer } from "@/components/shared/ExamTimer";
import { type ExamMode, EXAM_CONFIG } from "@/data/examConfig";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageEmpty } from "@/components/ui/page-states";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { usePageTitle } from "@/hooks/usePageTitle";
import StrategyGuideView from "@/components/shared/StrategyGuideView";
import { sekStrategyGuide } from "@/data/sekData";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { OFFICIAL_EE_INSTRUCTION } from "@/data/emotionenErkennenOffiziell";
import { OFFICIAL_ER_INSTRUCTION, OFFICIAL_SE_INSTRUCTION } from "@/data/sekDataNew";
import { sozialesEntscheidenTasks } from "@/data/sekDataNew";
import {
  emotionenErkennenOffiziellAlle,
  type EmotionenErkennenOffiziellTask,
} from "@/data/emotionenErkennenOffiziell";
import {
  emotionenRegulierenOffiziellTasks,
  type EmotionenRegulierenOffiziellTask,
  type OptionId,
} from "@/data/emotionenRegulierenOffiziell";
import type { SozialesEntscheidenTask } from "@/data/sekDataNew";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";

type SekView =
  | "overview"
  | "strategy"
  | "erkennen-quiz"
  | "erkennen-result"
  | "regulieren-quiz"
  | "regulieren-result"
  | "entscheiden-quiz"
  | "entscheiden-result";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SEK() {
  usePageTitle("SEK – Sozial-emotionale Kompetenzen");
  const location = useLocation();
  const dailyPlanSek = location.state?.dailyPlanSek as
    | { domain: string; count: number; label: string }[]
    | undefined;

  const [view, setView] = useState<SekView>("overview");
  const { quizResults } = useStore();

  const hasTasks =
    emotionenErkennenOffiziellAlle.length > 0 ||
    emotionenRegulierenOffiziellTasks.length > 0 ||
    sozialesEntscheidenTasks.length > 0;
  if (!hasTasks) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <PageEmpty
          message="Keine SEK-Aufgaben geladen."
          action={
            <Button asChild variant="outline" className="gap-2">
              <Link to="/dashboard">
                <BookOpen className="w-4 h-4" />
                Zum Dashboard
              </Link>
            </Button>
          }
        />
      </div>
    );
  }

  if (view === "strategy") {
    return <StrategyGuideView guide={sekStrategyGuide} onBack={() => setView("overview")} />;
  }

  if (view === "erkennen-quiz" || view === "erkennen-result")
    return (
      <EmotionenErkennenQuiz
        tasks={emotionenErkennenOffiziellAlle}
        onBack={() => setView("overview")}
      />
    );
  if (view === "regulieren-quiz" || view === "regulieren-result")
    return (
      <EmotionenRegulierenQuiz
        tasks={emotionenRegulierenOffiziellTasks}
        onBack={() => setView("overview")}
      />
    );
  if (view === "entscheiden-quiz" || view === "entscheiden-result")
    return (
      <SozialesEntscheidenQuiz
        tasks={sozialesEntscheidenTasks}
        onBack={() => setView("overview")}
      />
    );

  // Compute per-subtest progress
  const sekStats = (subject: string) => {
    const results = (quizResults ?? []).filter((r) => r.type === "sek" && r.subject === subject);
    const total = results.reduce((s, r) => s + r.total, 0);
    const correct = results.reduce((s, r) => s + r.score, 0);
    return {
      sessions: results.length,
      total,
      correct,
      pct: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  };

  const subtests = [
    {
      id: "erkennen" as const,
      abbr: "EE",
      title: "Emotionen erkennen",
      format:
        "Du liest eine Situation und bewertest für jede der 5 Emotionen: wahrscheinlich oder unwahrscheinlich?",
      tip: "Alle 5 Emotionen müssen korrekt sein — Alles-oder-Nichts",
      taskCount: emotionenErkennenOffiziellAlle.length,
      onStart: () => setView("erkennen-quiz"),
      stats: sekStats("Emotionen erkennen"),
      uebungId: "sek-emotionen-erkennen" as const,
      instruction: OFFICIAL_EE_INSTRUCTION,
      instructionTitle: "Offizielle Instruktion: Emotionen erkennen",
      color: "#ec4899",
    },
    {
      id: "regulieren" as const,
      abbr: "ER",
      title: "Emotionen regulieren",
      format:
        "Eine Person beschreibt eine belastende Situation — du wählst die beste Bewältigungsstrategie (A–D).",
      tip: "Strategie mit dem höchsten Expertenwert gewinnt",
      taskCount: emotionenRegulierenOffiziellTasks.length,
      onStart: () => setView("regulieren-quiz"),
      stats: sekStats("Emotionen regulieren"),
      uebungId: "sek-emotionen-regulieren" as const,
      instruction: OFFICIAL_ER_INSTRUCTION,
      instructionTitle: "Offizielle Instruktion: Emotionen regulieren",
      color: "#f59e0b",
    },
    {
      id: "entscheiden" as const,
      abbr: "SE",
      title: "Soziales Entscheiden",
      format:
        "Ordne 5 Handlungsoptionen (A–E) von wichtigster zu unwichtigster in einer sozialen Situation.",
      tip: "Rangfolge zählt — je näher an der Expertenlösung, desto mehr Punkte",
      taskCount: sozialesEntscheidenTasks.length,
      onStart: () => setView("entscheiden-quiz"),
      stats: sekStats("Soziales Entscheiden"),
      uebungId: "sek-soziales-entscheiden" as const,
      instruction: OFFICIAL_SE_INSTRUCTION,
      instructionTitle: "Offizielle Instruktion: Soziales Entscheiden",
      color: "#3b82f6",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Sozial-emotionale Kompetenzen
          </h1>
          <span className="text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
            10% des MedAT
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>3 Untertests · 7 Basisemotionen nach Ekman</span>
          <span className="text-[var(--border)]">|</span>
          <button
            onClick={() => setView("strategy")}
            className="text-[var(--accent)] hover:underline cursor-pointer flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Strategie-Guide
          </button>
        </div>
        {dailyPlanSek != null && dailyPlanSek.length > 0 && (
          <div className="text-xs text-[var(--accent)] font-medium mt-2">
            Lernplan heute:{" "}
            {dailyPlanSek
              .map((t) => `${t.label}: ${t.count} ${t.count === 1 ? "Beispiel" : "Beispiele"}`)
              .join(", ")}
          </div>
        )}
      </div>

      {/* Subtest Cards */}
      <div className="rounded-xl border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
        {subtests.map((s) => (
          <div
            key={s.id}
            className="flex items-center gap-4 px-5 py-4 hover:bg-[var(--accent)]/2 transition-colors group"
          >
            {/* Color accent */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${s.color}12` }}
            >
              <span className="text-sm font-bold" style={{ color: s.color }}>
                {s.abbr}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[var(--text-primary)]">{s.title}</h3>
                <span className="text-xs text-[var(--muted)]">{s.taskCount} Aufgaben</span>
                {s.stats.total > 0 && (
                  <span
                    className={`text-xs font-semibold ${
                      s.stats.pct >= 70
                        ? "text-emerald-500"
                        : s.stats.pct >= 40
                          ? "text-amber-500"
                          : "text-red-400"
                    }`}
                  >
                    {s.stats.pct}%
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--muted)] mt-0.5 line-clamp-1">{s.format}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <OfficialInstructionCard title={s.instructionTitle} instruction={s.instruction} />
              <Button variant="premium" size="sm" onClick={s.onStart} disabled={s.taskCount === 0}>
                Üben <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// EMOTIONEN ERKENNEN — Toggle w/u per emotion
// ==========================================

function EmotionenErkennenQuiz({
  tasks,
  onBack,
}: {
  tasks: EmotionenErkennenOffiziellTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const eeConfig = EXAM_CONFIG.emotionenErkennen;
  const [questions] = useState(() => shuffle(tasks).slice(0, eeConfig.questions));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, "wahrscheinlich" | "unwahrscheinlich">>
  >({});
  // Track which questions have shown feedback in practice mode
  const [revealedQuestions, setRevealedQuestions] = useState<Set<string>>(new Set());
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
  const getMinutes = useSessionTimer();

  const _toggleEmotion = (taskId: string, optionId: string) => {
    setAnswers((prev) => {
      const current = prev[taskId] || {};
      const val = current[optionId];
      return {
        ...prev,
        [taskId]: {
          ...current,
          [optionId]: val === "wahrscheinlich" ? "unwahrscheinlich" : "wahrscheinlich",
        },
      };
    });
  };
  void _toggleEmotion;

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      const a = answers[q.id] || {};
      const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
      if (allCorrect) score++;
    });
    saveQuizResult({
      id: `sek-ee-${Date.now()}`,
      type: "sek",
      subject: "Emotionen erkennen",
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: questions.map((q) => {
        const a = answers[q.id] || {};
        const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
        return { questionId: q.id, selectedAnswer: JSON.stringify(a), correct: allCorrect };
      }),
    });
    logActivity(questions.length, getMinutes());
    addXP(score * 15);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Emotionen erkennen</h1>
        <div className="grid gap-4 grid-cols-2">
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "exam" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("exam")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-5 h-5 text-[var(--accent)]" />
                <h2 className="font-semibold text-[var(--text-primary)]">Prüfungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {eeConfig.questions} Aufgaben · {eeConfig.timeSeconds / 60} Minuten
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Wie im echten MedAT</p>
            </CardContent>
          </Card>
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "practice" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("practice")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-[var(--text-primary)]">Übungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Kein Timer · sofortiges Feedback möglich
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Zum Lernen und Verstehen</p>
            </CardContent>
          </Card>
        </div>
        <Button className="w-full" size="lg" onClick={() => setPhase("quiz")}>
          <Play className="w-4 h-4 mr-2" /> Starten
        </Button>
      </div>
    );
  }

  if (phase === "result") {
    let score = 0;
    questions.forEach((q) => {
      const a = answers[q.id] || {};
      if (q.emotionen.every((e) => a[e.id] === e.correct)) score++;
    });
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-pink-700 dark:text-pink-400">
              {score}/{questions.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((score / questions.length) * 100)}% — Alles-oder-Nichts
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 15} XP</p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const a = answers[q.id] || {};
          const allCorrect = q.emotionen.every((e) => a[e.id] === e.correct);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${allCorrect ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {allCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  <span className="text-sm font-medium">
                    {qi + 1}. {q.situation.slice(0, 80)}...
                  </span>
                </div>
                <div className="ml-7 space-y-1">
                  {q.emotionen.map((e) => {
                    const userAnswer = a[e.id] || "unwahrscheinlich";
                    const isRight = userAnswer === e.correct;
                    return (
                      <div
                        key={e.id}
                        className={`text-xs px-2 py-1 rounded flex justify-between ${isRight ? "bg-green-50 dark:bg-green-900/10" : "bg-red-50 dark:bg-red-900/10"}`}
                      >
                        <span>{e.text}</span>
                        <span>{isRight ? "✓" : `${userAnswer} → ${e.correct}`}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q)
    return <div className="p-8 text-center text-[var(--muted)]">Keine Aufgaben verfügbar.</div>;
  const currentAnswers = answers[q.id] || {};
  const currentQuestionFullyAnswered = q.emotionen.every((e) => currentAnswers[e.id] !== undefined);
  const isRevealed = revealedQuestions.has(q.id);
  const allQuestionsAnswered = questions.every((qu) => {
    const a = answers[qu.id] || {};
    return qu.emotionen.every((e) => a[e.id] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {examMode === "exam" && (
        <ExamTimer totalSeconds={eeConfig.timeSeconds} onTimeUp={handleSubmit} />
      )}
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 w-fit">
            Emotionen erkennen
          </Badge>
          {examMode === "exam" && (
            <Badge className="bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 text-[var(--accent)]/60">
              Prüfung
            </Badge>
          )}
          <span className="text-sm text-[var(--muted)]">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-pink-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-[var(--border)]/30 p-4 rounded-lg mb-6">
            <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Situation:</p>
            <p className="text-sm text-[var(--text-primary)]">{q.situation}</p>
          </div>
          <p className="text-sm font-medium text-[var(--text-primary)] mb-4">
            Wie fühlt sich {q.personName} in dieser Situation? Eher wahrscheinlich oder eher
            unwahrscheinlich?
          </p>
          <div className="space-y-3">
            {q.emotionen.map((e) => {
              const val = currentAnswers[e.id];
              const isCorrect = isRevealed && val === e.correct;
              const isWrong = isRevealed && val !== undefined && val !== e.correct;
              return (
                <div
                  key={e.id}
                  className={`flex items-center justify-between gap-3 p-3 rounded-lg border transition-colors ${
                    isCorrect
                      ? "border-green-400 bg-green-50 dark:bg-green-900/10"
                      : isWrong
                        ? "border-red-400 bg-red-50 dark:bg-red-900/10"
                        : "border-[var(--border)]"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {isRevealed &&
                      (isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      ) : isWrong ? (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      ) : null)}
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      ({e.id}) {e.text}
                    </span>
                  </div>
                  {isRevealed && isWrong && (
                    <span className="text-[10px] text-[var(--muted)] shrink-0">
                      Richtig:{" "}
                      {e.correct === "wahrscheinlich"
                        ? "eher wahrscheinlich"
                        : "eher unwahrscheinlich"}
                    </span>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: { ...(prev[q.id] || {}), [e.id]: "wahrscheinlich" },
                        }));
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        val === "wahrscheinlich"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                          : "bg-[var(--border)]/30 text-[var(--muted)] border border-[var(--border)] hover:bg-[var(--border)]"
                      }`}
                    >
                      eher wahrscheinlich
                    </button>
                    <button
                      onClick={() => {
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: { ...(prev[q.id] || {}), [e.id]: "unwahrscheinlich" },
                        }));
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        val === "unwahrscheinlich"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                          : "bg-[var(--border)]/30 text-[var(--muted)] border border-[var(--border)] hover:bg-[var(--border)]"
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
        {examMode === "practice" ? (
          <Button
            variant="outline"
            onClick={() => setIndex((i) => i - 1)}
            disabled={index === 0}
            className="w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
        ) : (
          <div />
        )}
        {index < questions.length - 1 ? (
          examMode === "practice" && currentQuestionFullyAnswered && !isRevealed ? (
            <Button
              onClick={() => setRevealedQuestions((prev) => new Set([...prev, q.id]))}
              className="w-auto"
            >
              <CheckCircle2 className="w-4 h-4 mr-1" /> Lösung zeigen
            </Button>
          ) : (
            <Button
              onClick={() => {
                setRevealedQuestions((prev) => {
                  const next = new Set(prev);
                  next.delete(q.id);
                  return next;
                });
                setIndex((i) => i + 1);
              }}
              className="w-auto"
              disabled={examMode === "practice" && !currentQuestionFullyAnswered && !isRevealed}
            >
              Weiter <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )
        ) : examMode === "practice" && currentQuestionFullyAnswered && !isRevealed ? (
          <Button
            onClick={() => setRevealedQuestions((prev) => new Set([...prev, q.id]))}
            className="w-auto"
          >
            <CheckCircle2 className="w-4 h-4 mr-1" /> Lösung zeigen
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="w-auto">
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// EMOTIONEN REGULIEREN — Offizielles Format (A-D, eine richtige Antwort)
// ==========================================

function EmotionenRegulierenQuiz({
  tasks,
  onBack,
}: {
  tasks: EmotionenRegulierenOffiziellTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"setup" | "quiz" | "result">("setup");
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const erConfig = EXAM_CONFIG.emotionenRegulieren;
  // Shuffle task order AND option order within each task to prevent
  // "longest answer = best answer" shortcut (92% correlation in raw data).
  const [questions] = useState(() =>
    shuffle(tasks)
      .slice(0, erConfig.questions)
      .map((t) => ({ ...t, options: shuffle([...t.options]) }))
  );
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, OptionId>>({});
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
  const getMinutes = useSessionTimer();

  const handleSubmit = () => {
    let totalScore = 0;
    const maxScore = questions.length;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) totalScore += 1;
    });
    saveQuizResult({
      id: `sek-er-${Date.now()}`,
      type: "sek",
      subject: "Emotionen regulieren",
      score: totalScore,
      total: maxScore,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: questions.map((q) => {
        const sel = answers[q.id];
        const selText = sel ? (q.options.find((o) => o.id === sel)?.text ?? "") : "";
        return {
          questionId: q.id,
          selectedAnswer: selText,
          correct: sel === q.correctOptionId,
        };
      }),
    });
    logActivity(questions.length, getMinutes());
    addXP(totalScore * 15);
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Emotionen regulieren</h1>
        <div className="grid gap-4 grid-cols-2">
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "exam" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("exam")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-5 h-5 text-[var(--accent)]" />
                <h2 className="font-semibold text-[var(--text-primary)]">Prüfungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {erConfig.questions} Aufgaben · {erConfig.timeSeconds / 60} Minuten
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Wie im echten MedAT</p>
            </CardContent>
          </Card>
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "practice" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("practice")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-[var(--text-primary)]">Übungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Kein Timer · sofortiges Feedback möglich
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Zum Lernen und Verstehen</p>
            </CardContent>
          </Card>
        </div>
        <Button className="w-full" size="lg" onClick={() => setPhase("quiz")}>
          <Play className="w-4 h-4 mr-2" /> Starten
        </Button>
      </div>
    );
  }

  if (phase === "result") {
    let totalScore = 0;
    const maxScore = questions.length;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) totalScore += 1;
    });
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-amber-700 dark:text-amber-400">
              {totalScore}/{maxScore}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((totalScore / maxScore) * 100)}% — Richtig/Falsch
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{totalScore * 15} XP</p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const sel = answers[q.id];
          const isCorrect = sel === q.correctOptionId;
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">
                  {qi + 1}. {q.situation.slice(0, 100)}...
                </p>
                <div className="ml-2 space-y-1">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`text-xs px-2 py-1.5 rounded flex items-center gap-2 ${
                        opt.id === q.correctOptionId
                          ? "bg-green-50 dark:bg-green-900/10 font-medium"
                          : sel === opt.id
                            ? "bg-red-50 dark:bg-red-900/10"
                            : ""
                      }`}
                    >
                      {opt.id === q.correctOptionId ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      ) : sel === opt.id ? (
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      ) : (
                        <span className="w-3.5 shrink-0" />
                      )}
                      <span>
                        ({opt.id}) {opt.text}
                      </span>
                    </div>
                  ))}
                </div>
                {q.explanation && (
                  <p className="text-xs text-[var(--muted)] mt-2 ml-2">{q.explanation}</p>
                )}
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q)
    return <div className="p-8 text-center text-[var(--muted)]">Keine Aufgaben verfügbar.</div>;
  const allAnswered = questions.every((qu) => answers[qu.id] !== undefined);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {examMode === "exam" && (
        <ExamTimer totalSeconds={erConfig.timeSeconds} onTimeUp={handleSubmit} />
      )}
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 w-fit">
            Emotionen regulieren
          </Badge>
          {examMode === "exam" && (
            <Badge className="bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 text-[var(--accent)]/60">
              Prüfung
            </Badge>
          )}
          <span className="text-sm text-[var(--muted)]">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-amber-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-[var(--border)]/30 p-4 rounded-lg mb-4">
            <p className="text-sm text-[var(--text-primary)]">{q.situation}</p>
          </div>
          <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
            Wie gehen Sie in dieser Situation idealerweise vor?
          </p>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    isSelected
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                      : "border-[var(--border)] hover:bg-[var(--border)]/50"
                  }`}
                >
                  <div
                    className={`w-7 h-7 shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                      isSelected
                        ? "border-amber-500 bg-amber-500 text-white"
                        : "border-[var(--border)] text-[var(--muted)]/60"
                    }`}
                  >
                    {opt.id}
                  </div>
                  <p className="text-sm text-[var(--text-primary)] pt-0.5">{opt.text}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between gap-2">
        {examMode === "practice" ? (
          <Button
            variant="outline"
            onClick={() => setIndex((i) => i - 1)}
            disabled={index === 0}
            className="w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
        ) : (
          <div />
        )}
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)} className="w-auto">
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered} className="w-auto">
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}

// ==========================================
// SOZIALES ENTSCHEIDEN — Rank 5 statements (offizielles MedAT-Vorbild)
// Bewertung: Zusammenhangsmaß (Spearman Rangkorrelation)
// ==========================================

/** Spearman-Rangkorrelation zwischen Nutzer-Rangordnung und theoretischer Rangordnung (n=5). */
function spearmanScore(userRanks: Record<number, number>, idealRanks: number[]): number {
  const values = Object.values(userRanks);
  if (values.length !== 5) return 0;
  const unique = new Set(values);
  if (unique.size !== 5 || Math.min(...values) !== 1 || Math.max(...values) !== 5) return 0;
  let sumD2 = 0;
  for (let i = 0; i < idealRanks.length; i++) {
    const u = userRanks[i];
    if (u === undefined) return 0;
    sumD2 += (u - idealRanks[i]) ** 2;
  }
  const n = idealRanks.length;
  const rho = 1 - (6 * sumD2) / (n * (n * n - 1));
  // rho in [-1, 1] → Punkte 0–20 pro Aufgabe
  return Math.max(0, ((rho + 1) / 2) * 20);
}

function SozialesEntscheidenQuiz({
  tasks,
  onBack,
}: {
  tasks: SozialesEntscheidenTask[];
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<"setup" | "instructions" | "quiz" | "result">("setup");
  const [examMode, setExamMode] = useState<ExamMode>("practice");
  const seConfig = EXAM_CONFIG.sozialesEntscheiden;
  const [questions] = useState(() => shuffle(tasks).slice(0, seConfig.questions));
  const [index, setIndex] = useState(0);
  // rankings[taskId] = { statementIdx: rank (1-5) }
  const [rankings, setRankings] = useState<Record<string, Record<number, number>>>({});
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
  const getMinutes = useSessionTimer();

  const setRank = (taskId: string, stmtIdx: number, rank: number) => {
    setRankings((prev) => {
      const current = { ...(prev[taskId] || {}) };
      // Remove rank from any other statement
      Object.keys(current).forEach((k) => {
        if (current[Number(k)] === rank) delete current[Number(k)];
      });
      current[stmtIdx] = rank;
      return { ...prev, [taskId]: current };
    });
  };

  const calculateScore = (q: SozialesEntscheidenTask): number => {
    const r = rankings[q.id] || {};
    const idealRanks = q.aussagen.map((a) => a.idealRank);
    return spearmanScore(r, idealRanks);
  };

  const handleSubmit = () => {
    let totalScore = 0;
    const maxPerQ = 20; // Spearman normiert auf 0–20 pro Aufgabe
    questions.forEach((q) => {
      totalScore += calculateScore(q);
    });
    const maxScore = questions.length * maxPerQ;
    saveQuizResult({
      id: `sek-se-${Date.now()}`,
      type: "sek",
      subject: "Soziales Entscheiden",
      score: totalScore,
      total: maxScore,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedAnswer: JSON.stringify(rankings[q.id] || {}),
        correct: calculateScore(q) >= 16,
      })),
    });
    logActivity(questions.length, getMinutes());
    addXP(Math.round((totalScore / maxScore) * 100));
    checkStreak();
    setPhase("result");
    setIndex(0);
  };

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Soziales Entscheiden</h1>
        <div className="grid gap-4 grid-cols-2">
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "exam" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("exam")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-5 h-5 text-[var(--accent)]" />
                <h2 className="font-semibold text-[var(--text-primary)]">Prüfungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {seConfig.questions} Aufgaben · {seConfig.timeSeconds / 60} Minuten
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Wie im echten MedAT</p>
            </CardContent>
          </Card>
          <Card
            className={`cursor-pointer border-2 transition-colors ${examMode === "practice" ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--accent)]/30"}`}
            onClick={() => setExamMode("practice")}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-[var(--text-primary)]">Übungsmodus</h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Kein Timer · sofortiges Feedback möglich
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">Zum Lernen und Verstehen</p>
            </CardContent>
          </Card>
        </div>
        <Button className="w-full" size="lg" onClick={() => setPhase("instructions")}>
          <Play className="w-4 h-4 mr-2" /> Starten
        </Button>
      </div>
    );
  }

  // Ausfüllvorschrift (offizielle Anleitung) vor dem Quiz anzeigen
  if (phase === "instructions") {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Ausfüllvorschrift der Aufgabengruppe Soziales Entscheiden
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-[var(--text-secondary)]">
            <p>
              Die Aufgabe bei der Aufgabengruppe Soziales Entscheiden besteht darin, die fünf
              Überlegungen nach ihrer Wichtigkeit für die Entscheidung in eine Rangfolge zu bringen.
            </p>
            <p className="font-semibold text-[var(--text-primary)]">Bitte beachten Sie:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Es müssen immer <strong>alle fünf</strong> Überlegungen in eine{" "}
                <strong>eindeutige</strong> Rangfolge gebracht und jede Wichtigkeitsstufe nur{" "}
                <strong>einmal</strong> vergeben werden.
              </li>
              <li>
                Das bedeutet, dass nie zwei oder mehr Überlegungen als gleich wichtig eingestuft und
                auf die gleiche Wichtigkeitsstufe gestellt werden können.
              </li>
              <li>
                Weiters können Sie nie einer Überlegung zwei oder mehr Wichtigkeitsstufen zuordnen.
              </li>
              <li>
                Außerdem müssen Sie <strong>alle fünf Wichtigkeitsstufen</strong> vergeben.
              </li>
            </ul>
            <p>
              Sollten Sie eine Wichtigkeitsstufe dennoch doppelt oder mehrfach vergeben und/oder
              einer oder mehreren Überlegungen keine Wichtigkeitsstufe zuordnen, wird die
              betreffende Aufgabe mit <strong>null bewertet</strong>. Bitte vergewissern Sie sich
              daher bei jeder Aufgabe, dass Sie tatsächlich immer nur einer Überlegung eine
              Wichtigkeitsstufe zugeordnet und alle fünf Wichtigkeitsstufen vergeben haben.
            </p>

            <p className="font-semibold text-[var(--text-primary)] pt-2">
              Wie trage ich meine Antworten richtig ein?
            </p>
            <p>
              Wenn für Sie Überlegung <strong>A</strong> am wichtigsten ist (1. Stelle), ordnen Sie
              A die Wichtigkeitsstufe <strong>1</strong> zu. Wenn Überlegung <strong>B</strong> an
              2. Stelle steht, ordnen Sie B die Stufe <strong>2</strong> zu – und so weiter für C, D
              und E. Jede Wichtigkeitsstufe wird nur einmal vergeben, jeder Überlegung genau eine
              Stufe zugeordnet.
            </p>

            <p className="font-semibold text-[var(--text-primary)]">Richtiges Beispiel:</p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-xs border border-[var(--border)] text-center">
                <thead>
                  <tr className="bg-[var(--surface)]/50">
                    <th className="border-b border-r border-[var(--border)] p-2"></th>
                    <th className="border-b border-[var(--border)] p-2">1</th>
                    <th className="border-b border-[var(--border)] p-2">2</th>
                    <th className="border-b border-[var(--border)] p-2">3</th>
                    <th className="border-b border-[var(--border)] p-2">4</th>
                    <th className="border-b border-[var(--border)] p-2">5</th>
                  </tr>
                </thead>
                <tbody>
                  {["A", "B", "C", "D", "E"].map((row, i) => (
                    <tr key={row}>
                      <td className="border-r border-[var(--border)] p-2 font-medium">{row}</td>
                      {[1, 2, 3, 4, 5].map((col) => (
                        <td key={col} className="border border-[var(--border)] p-2">
                          {i + 1 === col ? "✓" : ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--muted)] text-xs">
              Jede Wichtigkeitsstufe nur einmal vergeben, allen Überlegungen eine Stufe zugeordnet →
              Aufgabe wird gewertet.
            </p>

            <p className="font-semibold text-[var(--text-primary)]">
              Falsche Beispiele (Aufgabe wird mit 0 bewertet):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Doppelt vergeben / keine Stufe:</strong> Einer Überlegung zwei Stufen
                zugeordnet oder einer Überlegung keine Stufe zugeordnet.
              </li>
              <li>
                <strong>Gleiche Stufe zweimal:</strong> Zwei Überlegungen haben dieselbe
                Wichtigkeitsstufe (z. B. beide 2); eine Stufe fehlt.
              </li>
              <li>
                <strong>Nicht alle Stufen vergeben:</strong> Nur z. B. Stufe 1 und 4 vergeben,
                Stufen 2, 3 und 5 fehlen.
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button onClick={() => setPhase("quiz")}>
            Weiter zu den Aufgaben <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    let totalScore = 0;
    const maxPerQ = 20;
    questions.forEach((q) => {
      totalScore += calculateScore(q);
    });
    const maxScore = questions.length * maxPerQ;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">
              {Math.round((totalScore / maxScore) * 100)}%
            </div>
            <p className="text-[var(--muted)] mt-1">
              {totalScore} von {maxScore} Punkten (Übereinstimmung mit der theoretischen
              Rangordnung)
            </p>
          </CardContent>
        </Card>
        {questions.map((q, qi) => {
          const r = rankings[q.id] || {};
          const qScore = calculateScore(q);
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${qScore >= 16 ? "border-l-green-500" : qScore >= 10 ? "border-l-orange-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <p className="text-sm font-medium mb-2">
                  {qi + 1}. {q.dilemma.slice(0, 80)}...{" "}
                  <Badge variant="info" className="text-[10px] ml-1">
                    {qScore}/{maxPerQ}
                  </Badge>
                </p>
                <div className="ml-2 space-y-1">
                  {q.aussagen.map((a, ai) => {
                    const label = String.fromCharCode(65 + ai);
                    return (
                      <div key={ai} className="text-xs flex items-center gap-2">
                        <span
                          className={`w-16 ${r[ai] === a.idealRank ? "text-green-600 font-bold" : "text-red-500"}`}
                        >
                          Dein: {r[ai] || "-"} | Ideal: {a.idealRank}
                        </span>
                        <span className="flex-1">
                          <span className="font-medium">{label})</span> {a.text.slice(0, 55)}...
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  if (!q)
    return <div className="p-8 text-center text-[var(--muted)]">Keine Aufgaben verfügbar.</div>;
  const currentRanking = rankings[q.id] || {};
  const _allRanked = q.aussagen.every((_, i) => currentRanking[i] !== undefined);
  void _allRanked;
  const allQuestionsRanked = questions.every((qu) => {
    const r = rankings[qu.id] || {};
    return qu.aussagen.every((_, i) => r[i] !== undefined);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {examMode === "exam" && (
        <ExamTimer totalSeconds={seConfig.timeSeconds} onTimeUp={handleSubmit} />
      )}
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 w-fit">
            Soziales Entscheiden
          </Badge>
          {examMode === "exam" && (
            <Badge className="bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 text-[var(--accent)]/60">
              Prüfung
            </Badge>
          )}
          <span className="text-sm text-[var(--muted)]">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="bg-[var(--border)]/30 p-4 rounded-lg mb-6">
            <p className="text-sm text-[var(--text-primary)]">{q.dilemma}</p>
          </div>
          <p className="text-sm font-medium text-[var(--text-primary)] mb-4">
            Wie wichtig sind Ihrer Meinung nach die folgenden Überlegungen für diese
            Entscheidungssituation? Ordnen Sie die Überlegungen A) bis E) der Wichtigkeit nach,
            wobei <strong>1</strong> die (relativ) wichtigste und <strong>5</strong> die am
            wenigsten wichtige Überlegung ist.
          </p>
          <div className="space-y-3 mb-4">
            {q.aussagen.map((a, ai) => {
              const label = String.fromCharCode(65 + ai);
              return (
                <p key={ai} className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">{label})</span> &bdquo;
                  {a.text}&ldquo;
                </p>
              );
            })}
          </div>
          <div className="overflow-x-auto">
            <table className="border border-[var(--border)] text-sm mx-auto">
              <thead>
                <tr className="bg-[var(--surface)]/50">
                  <th className="border-b border-r border-[var(--border)] p-2 w-12"></th>
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <th
                      key={rank}
                      className="border-b border-[var(--border)] p-2 w-12 text-center font-semibold"
                    >
                      {rank}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {q.aussagen.map((_, ai) => {
                  const label = String.fromCharCode(65 + ai);
                  return (
                    <tr key={ai}>
                      <td className="border-r border-b border-[var(--border)] p-2 font-semibold text-center">
                        {label}
                      </td>
                      {[1, 2, 3, 4, 5].map((rank) => {
                        const isSelected = currentRanking[ai] === rank;
                        const isUsedByOther =
                          !isSelected &&
                          Object.entries(currentRanking).some(
                            ([k, v]) => Number(k) !== ai && v === rank
                          );
                        return (
                          <td
                            key={rank}
                            onClick={() => !isUsedByOther && setRank(q.id, ai, rank)}
                            className={`border border-[var(--border)] p-2 text-center cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-blue-500 text-white"
                                : isUsedByOther
                                  ? "bg-[var(--border)]/50 text-[var(--muted)]/60 cursor-not-allowed"
                                  : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            }`}
                          >
                            {isSelected && <span className="font-bold">✕</span>}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between gap-2">
        {examMode === "practice" ? (
          <Button
            variant="outline"
            onClick={() => setIndex((i) => i - 1)}
            disabled={index === 0}
            className="w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
          </Button>
        ) : (
          <div />
        )}
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)} className="w-auto">
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allQuestionsRanked} className="w-auto">
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}
