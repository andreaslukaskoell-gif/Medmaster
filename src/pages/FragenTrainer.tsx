/**
 * Fragen-Trainer — einfach
 *
 * 1. Fach wählen (Biologie, Chemie, Physik, Mathematik)
 * 2. Modus: Einfach trainieren (beliebig viele, am Ende Übersicht + Begründungen)
 *    oder Offizielle Simulation (z. B. Bio 40 Fragen in 30 Min)
 * 3. Quiz → Ergebnis mit richtig/falsch und Begründung
 */
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  Trophy,
  RotateCcw,
  BookOpen,
  Loader2,
  AlertCircle,
  ChevronRight,
  Clock,
  Microscope,
  FlaskConical,
  Zap,
  Calculator,
  ChevronLeft,
  Grid3X3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Confetti } from "@/components/ui/confetti";
import { TypAQuestion } from "@/components/bms/TypAQuestion";
import { TypKQuestion } from "@/components/bms/TypKQuestion";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { useFragenTrainer } from "@/hooks/useFragenTrainer";
import type {
  TrainerMode,
  BMSSubjectId,
  SessionAnswers,
  QuestionSource,
} from "@/hooks/useFragenTrainer";
import {
  getBMSFragenBySubject,
  getBMSFragenBySubjectFromChapters,
  toCompletedChapterIdSet,
} from "@/lib/bmsPoolForTrainer";
import type { TypKKombination } from "@/lib/supabaseBMSFragen";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useLocation, useNavigate } from "react-router-dom";
import { trackQuizComplete } from "@/lib/analytics";
import { trackEvent } from "@/lib/analyticsTracker";
import { useViewportMode } from "@/hooks/useViewportMode";
import { usePermissions } from "@/hooks/usePermissions";
import { Paywall } from "@/components/ui/paywall";
import type { FeatureLimits } from "@/lib/permissions";
import { useSwipe } from "@/hooks/useSwipe";
import { hapticLight, hapticMedium, hapticSuccess, hapticError } from "@/lib/haptics";

// ── Constants ─────────────────────────────────────────────────
const STABLE_EMPTY_ARR: never[] = [];

const BMS_SUBJECTS: {
  id: BMSSubjectId;
  label: string;
  icon: typeof Microscope;
  accentClass: string;
  bgClass: string;
  borderClass: string;
  officialCount: number;
  officialMinutes: number;
}[] = [
  {
    id: "biologie",
    label: "Biologie",
    icon: Microscope,
    accentClass: "text-[var(--accent-bio)]",
    bgClass: "bg-[var(--accent-bio)]/10",
    borderClass: "border-[var(--accent-bio)]",
    officialCount: 40,
    officialMinutes: 30,
  },
  {
    id: "chemie",
    label: "Chemie",
    icon: FlaskConical,
    accentClass: "text-[var(--accent-chem)]",
    bgClass: "bg-[var(--accent-chem)]/10",
    borderClass: "border-[var(--accent-chem)]",
    officialCount: 24,
    officialMinutes: 18,
  },
  {
    id: "physik",
    label: "Physik",
    icon: Zap,
    accentClass: "text-[var(--accent-phys)]",
    bgClass: "bg-[var(--accent-phys)]/10",
    borderClass: "border-[var(--accent-phys)]",
    officialCount: 18,
    officialMinutes: 16,
  },
  {
    id: "mathematik",
    label: "Mathematik",
    icon: Calculator,
    accentClass: "text-[var(--accent-math)]",
    bgClass: "bg-[var(--accent-math)]/10",
    borderClass: "border-[var(--accent-math)]",
    officialCount: 12,
    officialMinutes: 11,
  },
];

const EINFACH_COUNTS = [10, 20, 30, 50];

/** MedAT official seconds per question by subject */
const _SECONDS_PER_QUESTION: Record<BMSSubjectId, number> = {
  biologie: 45,
  chemie: 45,
  physik: 53,
  mathematik: 55,
};
void _SECONDS_PER_QUESTION; // reserved for Zeitdruck mode

const DIFF_COLOR: Record<number, string> = {
  1: "bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400",
  2: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  3: "bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-400",
};
const DIFF_LABEL: Record<number, string> = { 1: "Leicht", 2: "Mittel", 3: "Schwer" };

function getLocalUserId(): string {
  const key = "medmaster-local-uid";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatTypKOptionLabel(k: TypKKombination | undefined, totalAussagen: number): string {
  if (!k) return "";
  const n = k.nummern?.length ?? 0;
  if (n === 0) return "Keine der Aussagen ist richtig";
  if (totalAussagen >= 2 && n === totalAussagen) return "Alle Aussagen sind richtig";
  const nummern = k.nummern ?? [];
  if (nummern.length === 1) return `Nur Aussage ${nummern[0]} ist richtig`;
  if (nummern.length === 2) return `Nur ${nummern[0]} und ${nummern[1]} sind richtig`;
  return `Nur Aussagen ${nummern.slice(0, -1).join(", ")} und ${nummern[nummern.length - 1]} sind richtig`;
}

/** Gemischte Fragen aus dem Lernplan: nur aus gelernten Kapiteln, Reihenfolge Bio → Chemie → Physik → Mathe. */
function buildMixedPlanFragen(
  planBms: { fach: BMSSubjectId; count: number }[],
  completedChapterIds: string[]
): import("@/lib/supabaseBMSFragen").BMSFrage[] {
  const completedSet = toCompletedChapterIdSet(completedChapterIds);
  const order: BMSSubjectId[] = ["biologie", "chemie", "physik", "mathematik"];
  const all: import("@/lib/supabaseBMSFragen").BMSFrage[] = [];
  for (const fach of order) {
    const plan = planBms.find((p) => p.fach === fach);
    if (!plan || plan.count <= 0) continue;
    const list = getBMSFragenBySubjectFromChapters(fach, plan.count, completedSet);
    all.push(...list);
  }
  return all;
}

// ── Selection Screen ──────────────────────────────────────────

type TrainMode = "einfach" | "offiziell";

function SelectionScreen({
  onStart,
}: {
  onStart: (
    subjectId: BMSSubjectId,
    count: number,
    timeLimitMinutes: number | null,
    source: QuestionSource,
    initialFragen?: import("@/lib/supabaseBMSFragen").BMSFrage[]
  ) => void;
  userId: string;
}) {
  const { isMobile } = useViewportMode();
  const questionsPerSession = useStore((s) => s.questionsPerSession);
  const [subjectId, setSubjectId] = useState<BMSSubjectId | null>(null);
  const [mode, setMode] = useState<TrainMode>("einfach");
  const [count, setCount] = useState(questionsPerSession);
  const [source] = useState<QuestionSource>("supabase");

  const quizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_ARR);

  const bmsStats = useMemo(() => {
    const bms = (quizResults ?? []).filter((r) => r.type === "bms" || r.type === "simulation");
    if (bms.length === 0) return null;

    const totalAnswered = bms.reduce((sum, r) => sum + r.total, 0);
    const avgScore =
      bms.reduce((sum, r) => sum + (r.total > 0 ? r.score / r.total : 0), 0) / bms.length;

    // Per-subject averages
    const subjectLabels = ["Biologie", "Chemie", "Physik", "Mathematik"] as const;
    const subjectAvgs = subjectLabels
      .map((label) => {
        const sub = bms.filter((r) => r.subject === label);
        if (sub.length === 0) return null;
        const avg = sub.reduce((s, r) => s + (r.total > 0 ? r.score / r.total : 0), 0) / sub.length;
        return { label, avg };
      })
      .filter(Boolean) as { label: string; avg: number }[];

    const weakest =
      subjectAvgs.length > 0
        ? subjectAvgs.reduce((min, cur) => (cur.avg < min.avg ? cur : min))
        : null;

    return { totalAnswered, avgScore, weakest };
  }, [quizResults]);

  const subject = subjectId ? BMS_SUBJECTS.find((s) => s.id === subjectId) : null;
  const effectiveCount = mode === "offiziell" && subject ? subject.officialCount : count;
  const timeLimitMinutes = mode === "offiziell" && subject ? subject.officialMinutes : null;

  const handleStart = () => {
    if (!subjectId) return;
    const effectiveCount = mode === "offiziell" && subject ? subject.officialCount : count;
    const timeLimit = mode === "offiziell" && subject ? subject.officialMinutes : null;
    const precomputed = getBMSFragenBySubject(subjectId, effectiveCount);
    onStart(subjectId, effectiveCount, timeLimit, source, precomputed);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div className="hero-orbs text-center py-8">
        <h1 className="text-[3rem] leading-tight font-bold text-[var(--text-primary)] heading-glow">
          Fragen-Trainer
        </h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          BMS: Fach wählen, dann trainieren oder offizielle Zeitvorgabe
        </p>
      </div>

      {/* Stats summary */}
      <div className="card-glass px-4 py-3">
        {bmsStats ? (
          <>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-[var(--text-secondary)]">
                Bisher:{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  {bmsStats.totalAnswered}
                </span>{" "}
                Fragen beantwortet
              </span>
              <span className="text-[var(--text-secondary)]">
                Durchschnitt:{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  {Math.round(bmsStats.avgScore * 100)}%
                </span>
              </span>
              <span className="text-[var(--text-secondary)]">
                {bmsStats.weakest ? (
                  <>
                    Schwächstes Fach:{" "}
                    <span className="font-semibold text-[var(--text-primary)]">
                      {bmsStats.weakest.label}
                    </span>
                  </>
                ) : (
                  "Noch keine Daten"
                )}
              </span>
            </div>
            {bmsStats.weakest && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1.5">
                Empfehlung: {bmsStats.weakest.label} trainieren
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            Beantworte deine ersten Fragen um Statistiken zu sehen
          </p>
        )}
      </div>

      {/* 1. Fach */}
      <div className="card-glass p-4 space-y-3">
        <p className="text-sm font-semibold text-[var(--text-secondary)]">1. Fach wählen</p>
        <div
          className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-4"} gap-2 stagger-children`}
          data-mobile-keep
        >
          {BMS_SUBJECTS.map((s) => {
            const Icon = s.icon;
            const selected = subjectId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubjectId(s.id)}
                className={`flex items-center gap-3 ${isMobile ? "px-3 py-3" : "px-4 py-3.5"} rounded-xl border-2 text-sm font-medium transition-all cursor-pointer text-left ${
                  selected
                    ? `${s.borderClass} ${s.bgClass} font-semibold`
                    : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--muted)]/50 hover:bg-[var(--foreground)]/3"
                }`}
              >
                <div
                  className={`${isMobile ? "w-8 h-8" : "w-9 h-9"} rounded-lg ${s.bgClass} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} ${s.accentClass}`} />
                </div>
                <div>
                  <div className={selected ? "text-[var(--foreground)]" : ""}>{s.label}</div>
                  <div className="text-[10px] opacity-60">{s.officialCount} Fragen</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {subjectId && (
        <>
          {/* 2. Modus */}
          <div className="card-glass p-4 space-y-3">
            <p className="text-sm font-semibold text-[var(--text-secondary)]">2. Modus</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMode("einfach")}
                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                  mode === "einfach"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                    : "border-[var(--border)] text-[var(--muted)] hover:bg-[var(--border)]/50"
                }`}
              >
                <div className="font-semibold">Einfach trainieren</div>
                <div className="text-xs opacity-70">
                  So viele wie du willst, am Ende Übersicht + Begründungen
                </div>
              </button>
              <button
                type="button"
                onClick={() => setMode("offiziell")}
                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer text-left ${
                  mode === "offiziell"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                    : "border-[var(--border)] text-[var(--muted)] hover:bg-[var(--border)]/50"
                }`}
              >
                <div className="font-semibold">Offizielle Simulation</div>
                <div className="text-xs opacity-70">
                  {subject && `${subject.officialCount} Fragen in ${subject.officialMinutes} Min`}
                </div>
              </button>
            </div>
          </div>

          {/* Anzahl (nur bei Einfach) */}
          {mode === "einfach" && (
            <div className="card-glass p-4 space-y-3">
              <p className="text-sm font-semibold text-[var(--text-secondary)]">Anzahl Fragen</p>
              <div className="flex flex-wrap gap-2">
                {EINFACH_COUNTS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCount(n)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                      count === n
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                        : "border-[var(--border)] hover:bg-[var(--border)]/50"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Start */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {effectiveCount} Fragen
              {timeLimitMinutes != null && ` · ${timeLimitMinutes} Min Zeitlimit`}
            </p>
            <Button onClick={handleStart} variant="premium">
              Starten <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

// ── Quiz Screen ───────────────────────────────────────────────

function QuizScreen({
  subjectId,
  count,
  timeLimitMinutes,
  source,
  userId,
  initialFragen,
  onFinish,
  onBack,
}: {
  subjectId: BMSSubjectId;
  count: number;
  timeLimitMinutes: number | null;
  source: QuestionSource;
  userId: string;
  initialFragen?: import("@/lib/supabaseBMSFragen").BMSFrage[];
  onFinish: (a: SessionAnswers) => void;
  onBack: () => void;
}) {
  const { isMobile } = useViewportMode();
  const trainer = useFragenTrainer(
    [],
    userId,
    timeLimitMinutes != null ? "simulation" : "trainer",
    count,
    source,
    { subjectId, timeLimitMinutes: timeLimitMinutes ?? undefined, initialFragen }
  );
  const addXP = useStore((s) => s.addXP);
  const {
    loading,
    error,
    currentFrage,
    idx,
    progress,
    fragen,
    sessionDone,
    revealed,
    chosenOption,
    chooseOption: rawChooseOption,
    typKPhase,
    typKDecisions,
    typKCombChosen,
    judgeAussage: rawJudgeAussage,
    confirmTypKPhase1,
    chooseTypKCombination: rawChooseTypKCombination,
    answers,
    timeRemainingSeconds,
    timeLimitSeconds,
    goToQuestion,
  } = trainer;

  // Wrap answer callbacks with haptic feedback
  const chooseOption = useCallback(
    (key: string) => {
      hapticMedium();
      rawChooseOption(key);
    },
    [rawChooseOption]
  );

  const judgeAussage = useCallback(
    (nr: number, correct: boolean) => {
      hapticLight();
      rawJudgeAussage(nr, correct);
    },
    [rawJudgeAussage]
  );

  const chooseTypKCombination = useCallback(
    (key: string) => {
      hapticMedium();
      rawChooseTypKCombination(key);
    },
    [rawChooseTypKCombination]
  );

  // Mobile: question grid overlay
  const [showGrid, setShowGrid] = useState(false);

  // Mobile: swipe to navigate in review mode
  const isReviewMode = idx < answers.length;
  const handleSwipeLeft = useCallback(() => {
    if (isReviewMode && idx < fragen.length - 1) {
      hapticLight();
      goToQuestion(idx + 1);
    }
  }, [isReviewMode, idx, fragen.length, goToQuestion]);

  const handleSwipeRight = useCallback(() => {
    if (isReviewMode && idx > 0) {
      hapticLight();
      goToQuestion(idx - 1);
    }
  }, [isReviewMode, idx, goToQuestion]);

  const swipeHandlers = useSwipe(handleSwipeLeft, handleSwipeRight);

  // Mobile: hide BottomTabBar during quiz
  useEffect(() => {
    if (isMobile) {
      document.documentElement.classList.add("quiz-active");
      return () => document.documentElement.classList.remove("quiz-active");
    }
  }, [isMobile]);

  // Haptic feedback after answer reveal (correct/wrong)
  const prevAnswerCount = useRef(0);
  useEffect(() => {
    if (answers.length > prevAnswerCount.current) {
      const last = answers[answers.length - 1];
      if (last?.correct) hapticSuccess();
      else hapticError();
    }
    prevAnswerCount.current = answers.length;
  }, [answers.length]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (sessionDone) {
      addXP(answers.filter((a) => a.correct).length * 5);
      onFinish(answers);
    }
  }, [sessionDone, answers, addXP, onFinish]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sessionDone || !currentFrage) return;
      const isReview = idx < answers.length;
      if (e.key === "Enter") {
        if (isReview && idx < fragen.length - 1) {
          e.preventDefault();
          goToQuestion(idx + 1);
        }
        return;
      }
      const num =
        e.key === "1"
          ? 1
          : e.key === "2"
            ? 2
            : e.key === "3"
              ? 3
              : e.key === "4"
                ? 4
                : e.key === "5"
                  ? 5
                  : 0;
      if (num === 0) return;
      const keys = ["A", "B", "C", "D", "E"];
      const key = keys[num - 1];
      if (
        !revealed &&
        (currentFrage.typ === "A" || currentFrage.typ === "M") &&
        currentFrage.optionen?.some((o) => o.key === key)
      ) {
        e.preventDefault();
        chooseOption(key);
        return;
      }
      if (
        !revealed &&
        currentFrage.typ === "K" &&
        typKPhase === 2 &&
        currentFrage.kombinationen?.[num - 1]
      ) {
        e.preventDefault();
        chooseTypKCombination(currentFrage.kombinationen[num - 1].key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- revealed omitted to avoid re-binding on every toggle
  }, [
    sessionDone,
    currentFrage,
    typKPhase,
    idx,
    answers.length,
    fragen.length,
    chooseOption,
    chooseTypKCombination,
    goToQuestion,
  ]);

  const [adaptiveHintDismissed, setAdaptiveHintDismissed] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("medmaster-adaptive-hint") === "1";
  });

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="text-sm">Fragen werden geladen…</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-red-500">
        <AlertCircle className="w-8 h-8" />
        <p className="text-sm">Fehler: {error}</p>
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
      </div>
    );

  if (!loading && fragen.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <AlertCircle className="w-8 h-8" />
        <p className="text-sm">Keine Fragen für dieses Fach gefunden.</p>
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
      </div>
    );

  if (!currentFrage) return null;

  const showTimer = timeLimitSeconds != null && timeRemainingSeconds != null;
  const reviewAnswer = isReviewMode ? answers[idx] : null;

  const showAdaptiveHint = !adaptiveHintDismissed;
  const dismissAdaptiveHint = () => {
    setAdaptiveHintDismissed(true);
    try {
      localStorage.setItem("medmaster-adaptive-hint", "1");
    } catch {
      // ignore localStorage errors
    }
  };

  return (
    <div
      className={`flex gap-4 max-w-5xl mx-auto ${isMobile ? "pb-20" : ""}`}
      {...(isMobile ? swipeHandlers : {})}
    >
      <div className="flex-1 min-w-0 space-y-4">
        {showAdaptiveHint && !isMobile && (
          <div className="flex items-center justify-between gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-2">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              Schwierigkeit und Wiederholungen passen sich deinem Stand an.
            </p>
            <button
              type="button"
              onClick={dismissAdaptiveHint}
              className="text-blue-600 dark:text-blue-400 hover:underline shrink-0 text-xs"
            >
              OK
            </button>
          </div>
        )}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-1" /> {!isMobile && "Abbrechen"}
          </Button>
          <div className="flex items-center gap-3">
            {showTimer && (
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  timeRemainingSeconds !== null && timeRemainingSeconds <= 60
                    ? "text-red-600 dark:text-red-400"
                    : "text-muted-foreground"
                }`}
              >
                <Clock className="w-4 h-4" />
                {timeRemainingSeconds != null ? formatTime(timeRemainingSeconds) : ""}
              </span>
            )}
            <span className="text-sm text-muted-foreground font-medium">
              {idx + 1} / {fragen.length}
            </span>
            {!isMobile && (
              <Badge variant="info" className="text-xs font-normal">
                An dein Level angepasst
              </Badge>
            )}
          </div>
        </div>

        <div className="progress-premium">
          <div className="progress-fill" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>

        {isReviewMode && reviewAnswer ? (
          <Card className="border-l-4 border-l-blue-400">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Durchsicht — Frage {idx + 1}
              </p>
              <p className="text-base font-medium text-[var(--text-primary)]">
                {reviewAnswer.frage.stamm}
              </p>
              {(reviewAnswer.frage.typ === "A" || reviewAnswer.frage.typ === "M") &&
                reviewAnswer.frage.optionen && (
                  <div className="space-y-1">
                    {reviewAnswer.frage.optionen.map((opt) => (
                      <div
                        key={opt.key}
                        className={`text-sm px-3 py-2 rounded-lg ${
                          opt.key === reviewAnswer.chosenOption
                            ? "bg-[var(--surface)] font-medium text-[var(--text-primary)]"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        <span className="font-bold mr-2">{opt.key}</span>
                        {opt.text}
                        {opt.key === reviewAnswer.chosenOption && (
                          <span className="ml-1 text-xs text-muted-foreground">(deine Wahl)</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              {reviewAnswer.frage.typ === "K" && reviewAnswer.frage.aussagen && (
                <div className="space-y-1">
                  {reviewAnswer.frage.aussagen.map((a) => (
                    <div key={a.nr} className="text-sm px-3 py-1.5 rounded-lg text-[var(--muted)]">
                      <span className="font-bold mr-2">{a.nr}</span>
                      {a.text}
                    </div>
                  ))}
                  {reviewAnswer.typKChosenOption != null && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Deine Wahl: {reviewAnswer.typKChosenOption}
                    </p>
                  )}
                </div>
              )}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToQuestion(idx - 1)}
                  disabled={idx <= 0}
                >
                  ← Zurück
                </Button>
                <Button
                  size="sm"
                  onClick={() => goToQuestion(idx + 1)}
                  disabled={idx >= fragen.length - 1}
                  variant="premium"
                >
                  Weiter →
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFF_COLOR[currentFrage.schwierigkeit]}`}
              >
                {DIFF_LABEL[currentFrage.schwierigkeit]}
              </span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                Typ {currentFrage.typ}
              </span>
            </div>

            <Card>
              <CardContent className="p-5 space-y-5">
                <div>
                  {(currentFrage.typ === "A" || currentFrage.typ === "M") && (
                    <>
                      <TypAQuestion
                        frage={currentFrage}
                        chosenOption={chosenOption}
                        revealed={revealed}
                        onChoose={chooseOption}
                      />
                      {!isMobile && !revealed && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Tipp: Tasten{" "}
                          <kbd className="px-1 rounded bg-[var(--surface)] font-mono">1</kbd>–
                          <kbd className="px-1 rounded bg-[var(--surface)] font-mono">5</kbd> = A–E
                        </p>
                      )}
                    </>
                  )}
                  {currentFrage.typ === "K" && (
                    <>
                      <TypKQuestion
                        frage={currentFrage}
                        mode={"trainer" as TrainerMode}
                        typKPhase={typKPhase}
                        typKDecisions={typKDecisions}
                        typKCombChosen={typKCombChosen}
                        revealed={revealed}
                        onJudge={judgeAussage}
                        onConfirmPhase1={confirmTypKPhase1}
                        onChooseCombination={chooseTypKCombination}
                      />
                      {!isMobile && !revealed && typKPhase === 2 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Tipp: Tasten{" "}
                          <kbd className="px-1 rounded bg-[var(--surface)] font-mono">1</kbd>–
                          <kbd className="px-1 rounded bg-[var(--surface)] font-mono">5</kbd> =
                          Kombination A–E
                        </p>
                      )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Desktop: question number sidebar */}
      {!isMobile && (
        <div className="w-12 shrink-0 flex flex-col gap-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide sticky top-0 bg-[var(--background)]/95 py-1">
            Nr.
          </p>
          <div className="flex flex-col gap-0.5 max-h-[60vh] overflow-y-auto">
            {fragen.map((_, i) => {
              const answered = i < answers.length;
              const isCurrent = i === idx;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToQuestion(i)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors shrink-0
                    ${isCurrent ? "ring-2 ring-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200" : ""}
                    ${!isCurrent && answered ? "bg-[var(--surface)] text-muted-foreground hover:bg-[var(--surface)]/80" : ""}
                    ${!isCurrent && !answered ? "bg-[var(--border)]/50 text-[var(--muted)] hover:bg-[var(--border)]" : ""}
                  `}
                  title={answered ? `Frage ${i + 1} (beantwortet)` : `Frage ${i + 1}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile: bottom action bar */}
      {isMobile && (
        <>
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--card)]/95 backdrop-blur-xl border-t border-[var(--border)]/60 pb-[env(safe-area-inset-bottom)]">
            <div className="flex items-center justify-between px-4 h-14">
              <button
                type="button"
                onClick={() => {
                  hapticLight();
                  goToQuestion(Math.max(0, idx - 1));
                }}
                disabled={idx <= 0}
                className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] disabled:opacity-30 disabled:text-[var(--muted)] min-h-[44px] px-2"
              >
                <ChevronLeft className="w-4 h-4" /> Zurück
              </button>
              <button
                type="button"
                onClick={() => setShowGrid(true)}
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] min-h-[44px] px-3"
              >
                <Grid3X3 className="w-4 h-4" />
                {idx + 1} / {fragen.length}
              </button>
              <button
                type="button"
                onClick={() => {
                  hapticLight();
                  goToQuestion(Math.min(fragen.length - 1, idx + 1));
                }}
                disabled={idx >= fragen.length - 1}
                className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] disabled:opacity-30 disabled:text-[var(--muted)] min-h-[44px] px-2"
              >
                Weiter <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile: question grid overlay */}
          {showGrid && (
            <div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-end"
              onClick={() => setShowGrid(false)}
            >
              <div
                className="w-full bg-[var(--card)] rounded-t-2xl p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] max-h-[60vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Fragen-Übersicht
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowGrid(false)}
                    className="text-xs text-[var(--muted)] px-2 py-1"
                  >
                    Schließen
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {fragen.map((_, i) => {
                    const answered = i < answers.length;
                    const isCurrent = i === idx;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          hapticLight();
                          goToQuestion(i);
                          setShowGrid(false);
                        }}
                        className={`w-full aspect-square rounded-lg text-sm font-medium transition-colors
                          ${isCurrent ? "ring-2 ring-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200" : ""}
                          ${!isCurrent && answered ? "bg-[var(--surface)] text-muted-foreground" : ""}
                          ${!isCurrent && !answered ? "bg-[var(--border)]/50 text-[var(--muted)]" : ""}
                        `}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Results Screen ────────────────────────────────────────────

function ResultsScreen({
  answers,
  onRestart,
  onBack,
}: {
  answers: SessionAnswers;
  onRestart: () => void;
  onBack: () => void;
}) {
  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const wrong = answers.filter((a) => !a.correct);
  const right = answers.filter((a) => a.correct);

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <Confetti active={pct >= 80} />
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>

      <div className="card-glass p-6">
        <div className="text-center mb-5">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-5xl font-bold text-[var(--text-primary)] mb-1">
            {correct}
            <span className="text-2xl text-muted-foreground font-normal">/{total}</span>
          </div>
          <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
            {pct}% richtig
          </p>
          {pct >= 90 && <p className="text-sm font-bold text-yellow-600 mt-2">Ausgezeichnet!</p>}
          {pct >= 70 && pct < 90 && (
            <p className="text-sm font-bold text-emerald-600 mt-2">Sehr gut!</p>
          )}
          {pct < 70 && (
            <p className="text-sm text-muted-foreground mt-2">Weitermachen – du schaffst das!</p>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--border)]">
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{correct}</p>
            <p className="text-xs text-muted-foreground">Richtig</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-500 dark:text-red-400">{wrong.length}</p>
            <p className="text-xs text-muted-foreground">Falsch</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--accent)]">+{correct * 5}</p>
            <p className="text-xs text-muted-foreground">XP</p>
          </div>
        </div>
      </div>

      {/* Falsch beantwortet + Begründung */}
      {wrong.length > 0 && (
        <details className="group" open>
          <summary className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-2 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden mb-3">
            <BookOpen className="w-4 h-4" /> Falsch beantwortet ({wrong.length})
            <span className="ml-auto text-xs text-muted-foreground group-open:rotate-90 transition-transform">
              &#9654;
            </span>
          </summary>
          <div className="space-y-3">
            {wrong.map(({ frage, chosenOption, typKChosenOption }) => (
              <Card key={frage.id} className="border-l-4 border-l-red-400">
                <CardContent className="p-4 space-y-2">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{frage.stamm}</p>
                  {(frage.typ === "A" || frage.typ === "M") && frage.optionen && (
                    <div className="space-y-1">
                      {frage.optionen.map((opt) => (
                        <div
                          key={opt.key}
                          className={`text-xs px-3 py-1.5 rounded-lg ${
                            opt.key === frage.korrekte_option
                              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium"
                              : opt.key === chosenOption
                                ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through"
                                : "text-[var(--muted)]/60"
                          }`}
                        >
                          <span className="font-bold mr-1">{opt.key}</span>
                          {opt.text}
                        </div>
                      ))}
                    </div>
                  )}
                  {frage.typ === "K" && frage.aussagen && (
                    <>
                      <div className="space-y-1">
                        {frage.aussagen.map((a) => (
                          <div
                            key={a.nr}
                            className={`text-xs px-3 py-1.5 rounded-lg ${
                              a.korrekt
                                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            <span className="font-bold mr-1">{a.nr}</span>
                            {a.text}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {typKChosenOption != null && (
                          <span className="text-red-700 dark:text-red-400 font-medium">
                            Deine Kombination:{" "}
                            {formatTypKOptionLabel(
                              frage.kombinationen?.find((k) => k.key === typKChosenOption),
                              frage.aussagen.length
                            ) || typKChosenOption}
                          </span>
                        )}
                        {frage.korrekte_option && (
                          <span className="text-green-700 dark:text-green-400 font-medium">
                            Richtig:{" "}
                            {formatTypKOptionLabel(
                              frage.kombinationen?.find((k) => k.key === frage.korrekte_option),
                              frage.aussagen.length
                            ) || frage.korrekte_option}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                  {frage.erklaerung?.trim() ? (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                        Begründung
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                        {stripMarkdownAsterisks(frage.erklaerung)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-[var(--muted)] italic">
                      Keine Begründung hinterlegt.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </details>
      )}

      {/* Richtig beantwortet + Begründung */}
      {right.length > 0 && (
        <details className="group">
          <summary className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-2 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden mb-3">
            <BookOpen className="w-4 h-4" /> Richtig beantwortet ({right.length}) – Begründungen
            <span className="ml-auto text-xs text-muted-foreground group-open:rotate-90 transition-transform">
              &#9654;
            </span>
          </summary>
          <div className="space-y-3">
            {right.map(({ frage }) => (
              <Card key={frage.id} className="border-l-4 border-l-green-400">
                <CardContent className="p-4 space-y-2">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{frage.stamm}</p>
                  {(frage.typ === "A" || frage.typ === "M") && frage.optionen && (
                    <div className="space-y-1">
                      {frage.optionen.map((opt) => (
                        <div
                          key={opt.key}
                          className={`text-xs px-3 py-1.5 rounded-lg ${
                            opt.key === frage.korrekte_option
                              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium"
                              : "text-[var(--muted)]/60"
                          }`}
                        >
                          <span className="font-bold mr-1">{opt.key}</span>
                          {opt.text}
                        </div>
                      ))}
                    </div>
                  )}
                  {frage.typ === "K" && frage.aussagen && (
                    <>
                      <div className="space-y-1">
                        {frage.aussagen.map((a) => (
                          <div
                            key={a.nr}
                            className={`text-xs px-3 py-1.5 rounded-lg ${
                              a.korrekt
                                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            <span className="font-bold mr-1">{a.nr}</span>
                            {a.text}
                          </div>
                        ))}
                      </div>
                      {frage.korrekte_option && (
                        <p className="text-xs text-green-700 dark:text-green-400 font-medium">
                          Richtig:{" "}
                          {formatTypKOptionLabel(
                            frage.kombinationen?.find((k) => k.key === frage.korrekte_option),
                            frage.aussagen.length
                          ) || frage.korrekte_option}
                        </p>
                      )}
                    </>
                  )}
                  {frage.erklaerung?.trim() ? (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-0.5">
                        Begründung
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                        {stripMarkdownAsterisks(frage.erklaerung)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-[var(--muted)] italic">
                      Keine Begründung hinterlegt.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </details>
      )}

      <div className="flex gap-3 justify-center pb-4">
        <Button variant="glass" onClick={onRestart}>
          <RotateCcw className="w-4 h-4 mr-1" /> Nochmal (gleiche Einstellungen)
        </Button>
        <Button onClick={onBack} variant="premium">
          Neue Auswahl
        </Button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────

export default function FragenTrainer() {
  usePageTitle("Fragen-Trainer");
  const { isLocked, getLimit } = usePermissions();
  const questionsPerSubjectLimit = getLimit("bms_questions_per_subject" as keyof FeatureLimits);
  const quizResults = useStore((s) => s.quizResults ?? []);
  const location = useLocation();
  const navigate = useNavigate();
  const planBms = location.state?.dailyPlanBms as
    | { fach: BMSSubjectId; count: number }[]
    | undefined;

  const questionsPerSession = useStore((s) => s.questionsPerSession);
  const [screen, setScreen] = useState<"select" | "quiz" | "results">("select");
  const [subjectId, setSubjectId] = useState<BMSSubjectId | null>(null);
  const [count, setCount] = useState(questionsPerSession);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number | null>(null);
  const [questionSource, setQuestionSource] = useState<QuestionSource>("supabase");
  const [initialFragen, setInitialFragen] = useState<
    import("@/lib/supabaseBMSFragen").BMSFrage[] | undefined
  >(undefined);
  const [results, setResults] = useState<SessionAnswers>([]);
  const [planResults, setPlanResults] = useState<SessionAnswers | null>(null);
  const { user } = useAuth();
  const userId = useMemo(() => user?.id ?? getLocalUserId(), [user?.id]);
  const completedChapters = useStore((s) => s.completedChapters);

  const mixedPlanFragen = useMemo(() => {
    if (!planBms?.length) return [];
    return buildMixedPlanFragen(planBms, completedChapters ?? []);
  }, [planBms, completedChapters]);

  if (planBms?.length && mixedPlanFragen.length === 0) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-[var(--text-secondary)]">
              Es kommen nur Fragen aus Kapiteln, die du schon gelernt hast. Schließe zuerst
              mindestens ein BMS-Kapitel ab, dann erscheinen hier die Lernplan-Fragen – zuerst
              Biologie, dann Chemie, Physik, Mathematik.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => navigate("/lernplan")}>
                Zum Lernplan
              </Button>
              <Button onClick={() => navigate("/fragen-trainer", { replace: true })}>
                Neue Auswahl
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (planBms?.length && mixedPlanFragen.length > 0) {
    if (planResults != null) {
      return (
        <div className="p-6">
          <ResultsScreen
            answers={planResults}
            onRestart={() => {
              setPlanResults(null);
              setScreen("quiz");
            }}
            onBack={() => {
              setPlanResults(null);
              navigate("/fragen-trainer", { replace: true });
            }}
          />
        </div>
      );
    }
    return (
      <div className="p-6">
        <QuizScreen
          subjectId="biologie"
          count={mixedPlanFragen.length}
          timeLimitMinutes={null}
          source="supabase"
          userId={userId}
          initialFragen={mixedPlanFragen}
          onFinish={(r) => {
            try {
              useAdaptiveStore
                .getState()
                .initializeFromQuizResults([
                  { answers: r.map((a) => ({ questionId: a.frage.id, correct: a.correct })) },
                ]);
            } catch {
              // Einige Pool-Fragen haben ggf. keine Stichwort-Zuordnung
            }
            setPlanResults(r);
          }}
          onBack={() => navigate("/fragen-trainer", { replace: true })}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      {screen === "select" &&
        (() => {
          // Check if ALL subjects exceeded their limit
          const allSubjectsExceeded =
            questionsPerSubjectLimit !== null &&
            (["biologie", "chemie", "physik", "mathematik"] as const).every((fach) => {
              const used = quizResults
                .filter((r) => r.type === "bms" && r.subject === fach)
                .reduce((s, r) => s + r.total, 0);
              return used >= (questionsPerSubjectLimit ?? 0);
            });

          if (allSubjectsExceeded) {
            return (
              <Paywall feature="Fragen-Trainer">
                <div className="text-center py-12 space-y-3">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Fragen-Trainer</h2>
                  <p className="text-[var(--muted)]">
                    Du hast je {questionsPerSubjectLimit} Gratis-Fragen pro Fach beantwortet.
                    Schalte alle 5.000+ BMS-Fragen frei.
                  </p>
                </div>
              </Paywall>
            );
          }

          // Per-subject usage stats for limit display
          const subjectUsage =
            questionsPerSubjectLimit !== null
              ? Object.fromEntries(
                  (["biologie", "chemie", "physik", "mathematik"] as const).map((f) => [
                    f,
                    quizResults
                      .filter((r) => r.type === "bms" && r.subject === f)
                      .reduce((s, r) => s + r.total, 0),
                  ])
                )
              : null;

          return (
            <>
              {questionsPerSubjectLimit !== null && subjectUsage && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {(["biologie", "chemie", "physik", "mathematik"] as const).map((f) => {
                    const used = subjectUsage[f] ?? 0;
                    const exhausted = used >= questionsPerSubjectLimit;
                    return (
                      <span
                        key={f}
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          exhausted
                            ? "bg-[var(--muted)]/10 text-[var(--muted)] line-through"
                            : "bg-[var(--accent)]/10 text-[var(--accent)]"
                        }`}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}: {used}/{questionsPerSubjectLimit}
                      </span>
                    );
                  })}
                </div>
              )}
              <SelectionScreen
                userId={userId}
                onStart={(subj, c, time, src, precomputed) => {
                  // Per-subject limit: cap questions at remaining free quota
                  if (questionsPerSubjectLimit !== null) {
                    const used = quizResults
                      .filter((r) => r.type === "bms" && r.subject === subj)
                      .reduce((s, r) => s + r.total, 0);
                    const remaining = Math.max(0, questionsPerSubjectLimit - used);
                    if (remaining === 0) return;
                    c = Math.min(c, remaining);
                  }
                  setSubjectId(subj);
                  setCount(c);
                  setTimeLimitMinutes(time);
                  setQuestionSource(src);
                  setInitialFragen(precomputed);
                  setScreen("quiz");
                }}
              />
            </>
          );
        })()}
      {screen === "quiz" && subjectId != null && (
        <QuizScreen
          subjectId={subjectId}
          count={count}
          timeLimitMinutes={timeLimitMinutes}
          source={questionSource}
          userId={userId}
          initialFragen={initialFragen}
          onFinish={(r) => {
            try {
              useAdaptiveStore
                .getState()
                .initializeFromQuizResults([
                  { answers: r.map((a) => ({ questionId: a.frage.id, correct: a.correct })) },
                ]);
            } catch {
              // Einige Pool-Fragen haben ggf. keine Stichwort-Zuordnung
            }
            // Persist results for Prognose, Schwachstellentrainer, MRS
            const score = r.filter((a) => a.correct).length;
            const subjectLabel =
              BMS_SUBJECTS.find((s) => s.id === subjectId)?.label ?? subjectId ?? "";
            useStore.getState().saveQuizResult({
              id: `fragentrainer-${Date.now()}`,
              type: "bms",
              subject: subjectLabel,
              score,
              total: r.length,
              date: new Date().toLocaleDateString("de-AT"),
              timestamp: new Date().toISOString(),
              answers: r.map((a) => ({
                questionId: a.frage.id,
                selectedAnswer: a.chosenOption ?? a.typKChosenOption ?? "",
                correct: a.correct,
              })),
            });
            useStore.getState().checkStreak();
            useStore.getState().logActivity(r.length, 0);
            trackQuizComplete("fragentrainer", score, r.length);
            trackEvent("quiz_complete", {
              section: "fragentrainer",
              subject: subjectLabel,
              score,
              total: r.length,
            });
            setResults(r);
            setScreen("results");
          }}
          onBack={() => setScreen("select")}
        />
      )}
      {screen === "results" && (
        <ResultsScreen
          answers={results}
          onRestart={() => setScreen("quiz")}
          onBack={() => setScreen("select")}
        />
      )}
    </div>
  );
}
