import { useMemo, useEffect, useState } from "react";
// PostSignupReferral kept available but removed from render to reduce top-of-page clutter
// import { PostSignupReferral } from "@/components/growth/PostSignupReferral";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Target,
  CheckCircle2,
  Clock,
  Share2,
  Brain,
  FileText,
  Heart,
  ListChecks,
  RefreshCw,
  MessageCircle,
  Copy,
  Puzzle,
  CalendarClock,
  Zap,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Progress replaced with .progress-premium CSS class
import { Heatmap } from "@/components/ui/heatmap";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { WeaknessCard } from "@/components/dashboard/WeaknessCard";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useLevelUpSound } from "@/hooks/useLevelUpSound";
import { trackEvent } from "@/lib/analyticsTracker";
import { useStore, type QuizResult } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useDashboardProfile } from "@/hooks/useDashboardProfile";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { cn, daysUntilMedAT, getGreetingByTime } from "@/lib/utils";
import { getDailyGoalFromPlan, getConsecutiveDaysGoalMissed } from "@/lib/dailyGoal";
import { getTodaysResult } from "@/lib/dailyChallenge";
import {
  shareText,
  getStreakShareText,
  getReferralShareText,
  shareWhatsApp,
  copyToClipboard,
} from "@/lib/shareUtils";
import { getLevelFromXP, XP_PER_LEVEL } from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { getPlanAdaptation } from "@/lib/planAdaptation";
// prognoseSummary moved into widgets
import { alleKapitel, getKapitelById, findChapterByUnterkapitelId } from "@/data/bmsKapitel";
import { pathForChapter } from "@/lib/bmsRoutes";
import { useTodayEngine } from "@/hooks/useTodayEngine";
import { useViewportMode } from "@/hooks/useViewportMode";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { ReferralWidget } from "@/components/shared/ReferralWidget";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tooltip } from "@/components/ui/Tooltip";
import { DailyPlanWidget } from "@/components/dashboard/DailyPlanWidget";
import { WeaknessWidget } from "@/components/dashboard/WeaknessWidget";
import { RecentActivityWidget } from "@/components/dashboard/RecentActivityWidget";
import { SpacedRepetitionWidget } from "@/components/dashboard/SpacedRepetitionWidget";

// Stable defaults — prevent infinite re-render loops in Zustand selectors.
// `?? []` inside a selector creates a NEW reference every render if the value is nullish,
// causing Zustand (Object.is equality) to trigger re-render → loop.
const STABLE_EMPTY_ARR: never[] = [];
const STABLE_EMPTY_OBJ = {} as Record<string, never>;

const tileMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
};
const stagger = { transition: { staggerChildren: 0.08 } };

export default function Dashboard() {
  usePageTitle("Dashboard");
  const { isMobile } = useViewportMode();
  // Use individual selectors instead of useStore() to avoid re-rendering on ANY state change
  const storeXp = useStore((s) => s.xp);
  const completedChapters = useStore((s) => s.completedChapters ?? STABLE_EMPTY_ARR);
  const rawQuizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_ARR);
  const streak = useStore((s) => s.streak);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const firstActivityTimeByDay = useStore((s) => s.firstActivityTimeByDay ?? STABLE_EMPTY_OBJ);
  const lernplanConfig = useStore((s) => s.lernplanConfig);
  const goalAchievedByDate = useStore((s) => s.goalAchievedByDate ?? STABLE_EMPTY_OBJ);
  const smartAdjustDismissedUntil = useStore((s) => s.smartAdjustDismissedUntil);
  const dismissSmartAdjust = useStore((s) => s.dismissSmartAdjust);
  const userProgress = useStore((s) => s.userProgress ?? STABLE_EMPTY_OBJ);
  // Defensive: always filter out null/corrupt entries from quizResults
  const quizResults = useMemo(
    () => rawQuizResults.filter((r): r is QuizResult => r != null && typeof r === "object"),
    [rawQuizResults]
  );
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);
  const dailyResult = useMemo(() => getTodaysResult(), []);
  // todayStr omitted: getTodaysResult uses current date internally
  useTodayEngine();
  const hasActivityToday = lastActiveDate === todayStr;
  const [searchParams] = useSearchParams();
  const streakPreview = searchParams.get("streakPreview");
  const flameStreak =
    streakPreview != null ? Math.max(0, parseInt(streakPreview, 10) || 0) : streak;
  const flameHasActivity = streakPreview != null ? flameStreak > 0 : hasActivityToday;
  const profile = useDashboardProfile();
  const { user, profile: authProfile } = useAuth();
  const meta = user?.user_metadata as
    | { display_name?: string; full_name?: string; name?: string }
    | undefined;
  const profileUsername = authProfile?.username?.trim();
  const displayName =
    authProfile?.display_name?.trim() ||
    // Only use username if it doesn't look like an email
    (profileUsername && !profileUsername.includes("@") ? profileUsername : "") ||
    meta?.display_name?.trim() ||
    meta?.full_name?.trim() ||
    meta?.name?.trim() ||
    "";
  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));
  const plan = useMemo(() => {
    if (!lernplanConfig) return null;
    try {
      const ad = useAdaptiveStore.getState();
      const storeState = useStore.getState();
      const adaptation = getPlanAdaptation({
        hoursPerWeek: lernplanConfig.hoursPerWeek,
        goalAchievedByDate: storeState.goalAchievedByDate ?? {},
        quizResults: storeState.quizResults ?? [],
        activityLog: storeState.activityLog ?? {},
      });
      return generateAdaptivePlan({
        hoursPerWeek: adaptation.effectiveHoursPerWeek,
        weeksLeft,
        readiness: ad.getMedATReadiness?.() ?? 0,
        fachReadiness: {
          biologie: ad.getFachReadiness?.("biologie") ?? 0,
          chemie: ad.getFachReadiness?.("chemie") ?? 0,
          physik: ad.getFachReadiness?.("physik") ?? 0,
          mathematik: ad.getFachReadiness?.("mathematik") ?? 0,
        },
        weakTopics: ad.getWeakestTopics?.(5) ?? [],
        phase: ad.profile?.learningPhase ?? "einstieg",
      });
    } catch {
      return null;
    }
    // quizResults triggers recomputation; actual data read via getState() to avoid cascading re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps -- quizResults is an intentional recompute trigger
  }, [lernplanConfig, weeksLeft, quizResults]);
  const concretePlan = useMemo(() => {
    if (!plan) return null;
    try {
      const dueIds = useStore.getState().getDueChapterIds?.() ?? [];
      return buildConcreteDailyPlan(plan, {
        dueChapterIds: dueIds,
        lastViewedChapterId: lastViewedKapitelId,
        lastViewedUnterkapitelId,
      });
    } catch {
      return null;
    }
  }, [plan, lastViewedKapitelId, lastViewedUnterkapitelId]);
  const dailyGoalState = useMemo(
    () => {
      try {
        return getDailyGoalFromPlan(plan, quizResults, todayStr);
      } catch {
        return { hasPlan: false, isPrimaryComplete: false, dailyMinutes: 0, todayTasks: [], primaryProgressPct: 0, totalSegments: 0, completedSegments: 0 };
      }
    },
    [plan, quizResults, todayStr]
  );
  const consecutiveGoalMissed = useMemo(
    () => getConsecutiveDaysGoalMissed(goalAchievedByDate ?? {}),
    [goalAchievedByDate]
  );
  const showSmartAdjust =
    !!lernplanConfig &&
    consecutiveGoalMissed >= 3 &&
    (!smartAdjustDismissedUntil || todayStr > smartAdjustDismissedUntil);

  // Mark daily goal as achieved — runs only when completion state actually changes
  const goalComplete = dailyGoalState.hasPlan && dailyGoalState.isPrimaryComplete;
  useEffect(() => {
    if (!goalComplete) return;
    const s = useStore.getState();
    if (!s.goalAchievedByDate?.[todayStr]) {
      s.setGoalAchievedToday(todayStr, true);
    }
  }, [goalComplete, todayStr]);

  const xp = profile.hasData ? profile.xp : Number.isFinite(storeXp) ? storeXp : 0;
  const _level = getLevelFromXP(xp);
  useLevelUpSound(xp);

  // Run only once on mount — check and unlock all fach milestones in one pass
  useEffect(() => {
    const currentGetFachReadiness = useAdaptiveStore.getState().getFachReadiness;
    if (!currentGetFachReadiness) return;
    const currentUnlocked = useStore.getState().unlockedFachMilestones ?? [];
    const unlock = useStore.getState().unlockFachMilestone;
    for (const fach of ["biologie", "chemie", "physik", "mathematik"]) {
      if (currentGetFachReadiness(fach) >= 50 && !currentUnlocked.includes(fach)) {
        unlock(fach);
      }
    }
  }, []);

  // Pull-to-refresh on mobile
  const { pullDistance, isRefreshing } = usePullToRefresh(
    () => window.location.reload(),
    80
  );

  const cardClass = "card-glass";
  const { bmsProgressPct, bmsProgressDone, bmsProgressTotal } = useMemo(() => {
    const total = alleKapitel.reduce((s, k) => s + (k?.unterkapitel?.length ?? 0), 0);
    if (total === 0) return { bmsProgressPct: 0, bmsProgressDone: 0, bmsProgressTotal: 0 };
    const done = alleKapitel.reduce(
      (s, k) =>
        s + (k?.unterkapitel?.filter((u) => u?.id && completedChapters.includes(u.id)).length ?? 0),
      0
    );
    return {
      bmsProgressPct: Math.round((done / total) * 100),
      bmsProgressDone: done,
      bmsProgressTotal: total,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- alleKapitel is outer scope
  }, [alleKapitel, completedChapters]);
  const daysThisWeekActive = useMemo(() => {
    const keys = Object.keys(firstActivityTimeByDay ?? {});
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 6);
    startOfWeek.setHours(0, 0, 0, 0);
    return keys.filter((d) => d >= startOfWeek.toISOString().split("T")[0]).length;
  }, [firstActivityTimeByDay]);

  return (
    <div className="min-h-screen">
      {/* Pull-to-refresh indicator (mobile) */}
      {isMobile && pullDistance > 10 && (
        <div
          className="flex items-center justify-center overflow-hidden transition-opacity"
          style={{ height: pullDistance, opacity: Math.min(pullDistance / 60, 1) }}
        >
          <div
            className={`w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent ${isRefreshing ? "animate-spin" : ""}`}
            style={{
              transform: isRefreshing ? undefined : `rotate(${pullDistance * 3}deg)`,
            }}
          />
        </div>
      )}
      <div className="max-w-5xl mx-auto px-4 py-8 pb-12">
        <SyncIndicator />

        {/* ─── First-action guidance for new users (hidden after first activity) ─── */}
        {(quizResults ?? []).length === 0 && completedChapters.length === 0 && (
          <section className="mb-6 hero-orbs" aria-label="Erste Schritte">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1 text-center">
              Starte jetzt mit deiner MedAT-Vorbereitung
            </h2>
            <p className="text-sm text-[var(--muted)] text-center mb-4">
              Wähle einen Bereich und leg direkt los.
            </p>
            <div className={`grid gap-3 stagger-children ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
              {(
                [
                  {
                    to: "/bms",
                    icon: BookOpen,
                    title: "BMS-Fragen üben",
                    desc: "5.000+ Fragen zu Bio, Chemie, Physik & Mathe",
                    color: "text-emerald-600",
                    bg: "bg-emerald-100 dark:bg-emerald-900/30",
                    target: "bms",
                  },
                  {
                    to: "/kff",
                    icon: Puzzle,
                    title: "KFF trainieren",
                    desc: "Zahlenfolgen, Figuren, Implikationen & mehr",
                    color: "text-blue-600",
                    bg: "bg-blue-100 dark:bg-blue-900/30",
                    target: "kff",
                  },
                  {
                    to: "/tv",
                    icon: FileText,
                    title: "TV üben",
                    desc: "Textverständnis trainieren",
                    color: "text-amber-600",
                    bg: "bg-amber-100 dark:bg-amber-900/30",
                    target: "tv",
                  },
                  {
                    to: "/sek",
                    icon: Heart,
                    title: "SEK üben",
                    desc: "Sozial-emotionale Kompetenzen",
                    color: "text-rose-600",
                    bg: "bg-rose-100 dark:bg-rose-900/30",
                    target: "sek",
                  },
                  {
                    to: "/simulation",
                    icon: Target,
                    title: "Simulation starten",
                    desc: "Vollständiger MedAT unter echten Bedingungen",
                    color: "text-violet-600",
                    bg: "bg-violet-100 dark:bg-violet-900/30",
                    target: "simulation",
                  },
                ] as const
              ).map((card) => (
                <Link
                  key={card.target}
                  to={card.to}
                  onClick={() => trackEvent("activation_cta_click", { target: card.target })}
                  className="card-glass p-5 flex items-start gap-4 group hover:shadow-md transition-shadow"
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                      card.bg
                    )}
                  >
                    <card.icon className={cn("w-5 h-5", card.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{card.title}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── Weiterlernen card ─── */}
        <ContinueLearningCard completedChapters={completedChapters} />

        {/* ─── Quick Quiz (mobile-prominent) ─── */}
        {isMobile && (quizResults ?? []).length > 0 && (
          <Link
            to="/fragen-trainer"
            className="block mb-4 card-glass p-4 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--text-primary)]">Quick Quiz</p>
                <p className="text-xs text-[var(--muted)]">10 Fragen · gemischte Fächer</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        )}

        {/* ─── Fällige Wiederholungen ─── */}
        <DueReviewsCard userProgress={userProgress} />

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
          {/* Hero: Begrüßung + Heute im Lernplan */}
          <motion.section variants={tileMotion} aria-label="Start" className="space-y-4">
            <div className="card-glass p-5">
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                      {displayName ? `${getGreetingByTime()}, ${displayName}` : getGreetingByTime()}
                    </h1>
                    {days > 0 && (
                      <div className="shrink-0 flex flex-col items-center px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                        <span className="text-base font-bold text-[var(--accent)] leading-tight">
                          {days}
                        </span>
                        <span className="text-[10px] text-[var(--muted)] leading-tight">
                          Tage bis MedAT
                        </span>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/lernplan"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    Heute im Lernplan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {concretePlan && (
                  <div className="flex flex-wrap gap-2 text-sm">
                    {concretePlan.bmsRead.length > 0 && (
                      <Link
                        to="/bms"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {concretePlan.bmsRead.length} Kapitel lernen
                      </Link>
                    )}
                    {concretePlan.bmsReview.length > 0 && (
                      <Link
                        to="/bms"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        {concretePlan.bmsReview.length} wiederholen
                      </Link>
                    )}
                    {concretePlan.bmsQuestions.length > 0 && (
                      <Link
                        to="/fragen-trainer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <ListChecks className="w-3.5 h-3.5" />
                        BMS-Fragen
                      </Link>
                    )}
                    {concretePlan.kffTasks.length > 0 && (
                      <Link
                        to="/kff"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <Brain className="w-3.5 h-3.5" />
                        KFF
                      </Link>
                    )}
                    {concretePlan.tvTexts > 0 && (
                      <Link
                        to="/tv"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        TV
                      </Link>
                    )}
                    {concretePlan.sekTasks.length > 0 && (
                      <Link
                        to="/sek"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/15 transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        SEK
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-[var(--text-secondary)]">BMS-Fortschritt</span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {bmsProgressPct} %
                  </span>
                </div>
                <Tooltip
                  content={`${bmsProgressDone} von ${bmsProgressTotal} Unterkapitel abgeschlossen`}
                  position="top"
                >
                  <div className="progress-premium w-full">
                    <div className="progress-fill" style={{ width: `${bmsProgressPct}%` }} />
                  </div>
                </Tooltip>
              </div>
            </div>
          </motion.section>

          {/* Daily + Streak in einer Zeile */}
          <motion.section
            variants={tileMotion}
            aria-label="Daily und Streak"
            className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
          >
            {/* Daily Challenge Widget */}
            <div aria-label="BMS des Tages">
              <Tooltip content="Täglich eine neue BMS-Frage" position="top">
                {dailyResult ? (
                  <Link to="/daily">
                    <div className={cn(cardClass, "relative overflow-hidden")}>
                      <CardContent className="p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--success-bg)] flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                              BMS des Tages gelöst!
                            </p>
                            <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3" /> Nächste Frage morgen
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-[var(--success)] bg-[var(--success-bg)] px-2.5 py-1 rounded-full">
                          +{dailyResult.xpEarned} XP
                        </span>
                      </CardContent>
                    </div>
                  </Link>
                ) : (
                  <Link to="/daily">
                    <div className={cn(cardClass, "cursor-pointer")}>
                      <CardContent className="p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                            <Target className="w-5 h-5 text-[var(--accent)]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                              BMS des Tages wartet!
                            </p>
                            <p className="text-xs text-[var(--muted)] mt-0.5">
                              Täglich eine Frage — bis zu {XP_PER_LEVEL} XP
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1.5 rounded-full">
                          Jetzt starten <ArrowRight className="w-3 h-3" />
                        </span>
                      </CardContent>
                    </div>
                  </Link>
                )}
              </Tooltip>
            </div>
            {/* Streak-Karte */}
            <div className={cn(cardClass, "p-5 flex items-center gap-4 relative overflow-hidden")} aria-label="Streak">
              {/* Subtle streak glow for active streaks */}
              {flameStreak >= 7 && (
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, transparent 100%)",
                  }}
                />
              )}
              <Tooltip
                content={`${flameStreak} ${flameStreak === 1 ? "Tag" : "Tage"} in Folge aktiv`}
                position="top"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <StreakFlameIcon
                    streak={flameStreak}
                    hasActivityToday={flameHasActivity}
                    size="sm"
                    className="w-6 h-6"
                  />
                </div>
              </Tooltip>
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-[var(--text-primary)]">{flameStreak}</p>
                <p className="text-sm text-[var(--muted)]">
                  {flameStreak === 0
                    ? "Starte deinen Streak!"
                    : flameStreak >= 30
                      ? "Tage Streak — unaufhaltsam!"
                      : flameStreak >= 7
                        ? "Tage Streak — stark!"
                        : "Tage Streak"}
                </p>
              </div>
              {streak > 0 && !streakPreview && <StreakShareButton streak={streak} />}
            </div>
          </motion.section>

          {/* Empfehlungen — adaptive widgets based on user behavior */}
          <ScrollReveal delay={80}>
            <motion.section
              variants={tileMotion}
              aria-label="Empfehlungen"
              className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}
            >
              <DailyPlanWidget />
              <WeaknessWidget />
              <RecentActivityWidget />
            </motion.section>
          </ScrollReveal>

          {/* Spaced Repetition Widget */}
          <SpacedRepetitionWidget />

          {/* Wochen-Aktivität + Freunde einladen — side by side on desktop */}
          <ScrollReveal delay={120}>
            <motion.section
              variants={tileMotion}
              aria-label="Wochen-Aktivität und Freunde"
              className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
            >
              <div className={cn(cardClass, "p-5")}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <p className="text-sm font-medium text-[var(--muted)]">Wochen-Aktivität</p>
                  <p className="text-sm text-[var(--text-primary)]">
                    Diese Woche an <strong>{daysThisWeekActive}/7</strong> Tagen aktiv
                  </p>
                </div>
                <Heatmap />
              </div>
              <ReferralWidget />
            </motion.section>
          </ScrollReveal>

          {/* Schwächen-Analyse (server-side, nur wenn Daten vorhanden) */}
          <ScrollReveal>
            <WeaknessCard />
          </ScrollReveal>
        </motion.div>

        {showSmartAdjust && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="smart-adjust-title"
          >
            <div
              className="relative w-full max-w-md card-glass shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                id="smart-adjust-title"
                className="text-lg font-semibold text-[var(--text-primary)] mb-2"
              >
                Tagesziel öfter verfehlt
              </h2>
              <p className="text-sm text-[var(--muted)] mb-4">
                Sollen wir das Pensum für die nächsten Tage anpassen?
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => dismissSmartAdjust(false)}
                >
                  Nein, dranbleiben
                </Button>
                <Button className="flex-1" onClick={() => dismissSmartAdjust(true)}>
                  Ja, anpassen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for future referral feature
function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const { user } = useAuth();
  const refLink = user?.id
    ? `https://medmaster.at?ref=${user.id.slice(0, 8)}`
    : "https://medmaster.at";
  const waText = getReferralShareText(user?.id);

  return (
    <div className="h-full card-glass p-5">
      <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Freunde einladen</p>
      <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
        Teile MedMaster mit deiner Lerngruppe — wer gemeinsam übt, schneidet besser ab.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => shareWhatsApp(waText)}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </button>
        <button
          type="button"
          onClick={async () => {
            await copyToClipboard(refLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
          }}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors",
            copied
              ? "border-emerald-300 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
              : "border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface)]"
          )}
        >
          {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Kopiert!" : "Link kopieren"}
        </button>
      </div>
    </div>
  );
}

function StreakShareButton({ streak }: { streak: number }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await shareText(getStreakShareText(streak));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="p-2 rounded-lg text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors cursor-pointer"
      aria-label="Streak teilen"
      title="Streak teilen"
    >
      {copied ? (
        <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
      ) : (
        <Share2 className="w-4 h-4" />
      )}
    </button>
  );
}

function DueReviewsCard({
  userProgress,
}: {
  userProgress: Record<string, import("@/store/useStore").ChapterProgress>;
}) {
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const dueItems = useMemo(() => {
    const entries = Object.entries(userProgress ?? {});
    if (entries.length === 0) return [];

    const due: {
      ukId: string;
      kapitelId: string;
      kapitelTitle: string;
      ukTitle: string;
      subject: string;
      nextReviewDate: string;
      lastReviewed: string;
      overdueDays: number;
      link: string;
    }[] = [];

    for (const [ukId, progress] of entries) {
      if (!progress?.nextReviewDate || progress.nextReviewDate > todayStr) continue;

      const match = findChapterByUnterkapitelId(ukId);
      if (!match) continue;

      const { kapitel, index } = match;
      const uk = (kapitel.unterkapitel ?? [])[index];
      if (!uk) continue;

      const overdueDays = Math.floor(
        (new Date(todayStr).getTime() - new Date(progress.nextReviewDate).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      due.push({
        ukId,
        kapitelId: kapitel.id,
        kapitelTitle: kapitel.title,
        ukTitle: uk.title,
        subject: kapitel.subject,
        nextReviewDate: progress.nextReviewDate,
        lastReviewed: progress.lastReviewed,
        overdueDays,
        link: `${pathForChapter(kapitel.subject, kapitel.id)}?uk=${index}`,
      });
    }

    // Sort most overdue first
    due.sort((a, b) => b.overdueDays - a.overdueDays);
    return due;
  }, [userProgress, todayStr]);

  // Find next upcoming review date if nothing is due
  const nextReviewDate = useMemo(() => {
    if (dueItems.length > 0) return null;
    const entries = Object.entries(userProgress ?? {});
    if (entries.length === 0) return null;

    let earliest = "";
    for (const [, progress] of entries) {
      if (!progress?.nextReviewDate) continue;
      if (!earliest || progress.nextReviewDate < earliest) {
        earliest = progress.nextReviewDate;
      }
    }
    return earliest || null;
  }, [userProgress, dueItems.length]);

  // Don't render if no progress tracked at all
  if (Object.keys(userProgress ?? {}).length === 0) return null;

  const displayItems = dueItems.slice(0, 5);
  const remaining = dueItems.length - displayItems.length;

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr + "T00:00:00");
      return d.toLocaleDateString("de-AT", { day: "numeric", month: "short" });
    } catch {
      return dateStr;
    }
  };

  const subjectAccent: Record<string, string> = {
    biologie: "var(--accent-bio)",
    chemie: "var(--accent-chem)",
    physik: "var(--accent-phys)",
    mathematik: "var(--accent-math)",
  };

  return (
    <section className="mb-6" aria-label="Fällige Wiederholungen">
      <div className="card-glass shadow-sm">
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
              <CalendarClock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Fällige Wiederholungen
              </h2>
              <p className="text-xs text-[var(--muted)]">
                {dueItems.length > 0
                  ? `${dueItems.length} ${dueItems.length === 1 ? "Kapitel" : "Kapitel"} zur Wiederholung fällig`
                  : "Alles aktuell!"}
              </p>
            </div>
            {dueItems.length > 0 && (
              <span className="shrink-0 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
                {dueItems.length}
              </span>
            )}
          </div>

          {dueItems.length === 0 && nextReviewDate && (
            <div className="flex items-center gap-2 text-sm text-[var(--muted)] bg-[var(--surface)] rounded-lg px-4 py-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Nächste Wiederholung am{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  {formatDate(nextReviewDate)}
                </span>
              </span>
            </div>
          )}

          {displayItems.length > 0 && (
            <div className="space-y-2">
              {displayItems.map((item) => (
                <Link
                  key={item.ukId}
                  to={item.link}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--surface)] transition-colors group"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: subjectAccent[item.subject] ?? "var(--accent)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                      {item.ukTitle}
                    </p>
                    <p className="text-xs text-[var(--muted)] truncate">
                      {item.kapitelTitle}
                      {item.overdueDays > 0 && (
                        <span className="text-amber-600 dark:text-amber-400 ml-1.5">
                          {item.overdueDays === 1
                            ? "1 Tag überfällig"
                            : `${item.overdueDays} Tage überfällig`}
                        </span>
                      )}
                      {item.overdueDays === 0 && (
                        <span className="text-amber-600 dark:text-amber-400 ml-1.5">
                          Heute fällig
                        </span>
                      )}
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      backgroundColor: "color-mix(in srgb, rgb(217 119 6) 10%, transparent)",
                      color: "rgb(217 119 6)",
                    }}
                  >
                    Jetzt wiederholen
                    <ArrowRight className="w-3 h-3 inline ml-1" />
                  </span>
                </Link>
              ))}
              {remaining > 0 && (
                <Link
                  to="/bms?filter=due"
                  className="block text-center text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline py-1"
                >
                  +{remaining} weitere fällige Kapitel anzeigen
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const SUBJECT_ACCENT: Record<string, string> = {
  biologie: "var(--accent-bio)",
  chemie: "var(--accent-chem)",
  physik: "var(--accent-phys)",
  mathematik: "var(--accent-math)",
};

const SUBJECT_LABEL: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

function ContinueLearningCard({ completedChapters }: { completedChapters: string[] }) {
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const lastPath = useAdaptiveStore((s) => s.lastPath);

  const data = useMemo(() => {
    if (!lastViewedKapitelId || !lastViewedUnterkapitelId) return null;

    const kapitel = getKapitelById(lastViewedKapitelId);
    if (!kapitel) return null;

    const ukMatch = findChapterByUnterkapitelId(lastViewedUnterkapitelId);
    if (!ukMatch) return null;

    const uks = kapitel.unterkapitel ?? [];
    const uk =
      uks[ukMatch.index] ??
      uks.find((u) => u.id === lastViewedUnterkapitelId);
    if (!uk) return null;

    const totalUks = uks.length;
    const doneUks = uks.filter((u) => completedChapters.includes(u.id)).length;

    // Estimate remaining reading time: parse chapter estimatedTime, scale by remaining UKs
    let remainingMinutes: number | null = null;
    const timeMatch = kapitel.estimatedTime?.match(/(\d+)/);
    if (timeMatch) {
      const totalMinutes = parseInt(timeMatch[1], 10);
      const remainingUks = totalUks - doneUks;
      remainingMinutes = Math.max(5, Math.round((totalMinutes / totalUks) * remainingUks));
    }

    const accent = SUBJECT_ACCENT[kapitel.subject] ?? "var(--accent)";
    const subjectLabel = SUBJECT_LABEL[kapitel.subject] ?? kapitel.subject;

    // Build link: prefer lastPath if it points to a BMS page, otherwise construct from IDs
    const link =
      lastPath && lastPath.startsWith("/bms")
        ? lastPath
        : `/bms/${lastViewedKapitelId}/${lastViewedUnterkapitelId}`;

    return {
      kapitelTitle: kapitel.title,
      ukTitle: uk.title,
      subjectLabel,
      accent,
      totalUks,
      doneUks,
      progressPct: totalUks > 0 ? Math.round((doneUks / totalUks) * 100) : 0,
      remainingMinutes,
      link,
    };
  }, [lastViewedKapitelId, lastViewedUnterkapitelId, lastPath, completedChapters]);

  if (!data) return null;

  return (
    <section className="mb-6" aria-label="Weiterlernen">
      <Link
        to={data.link}
        className="block card-glass shadow-sm hover:shadow-md transition-shadow border-l-4"
        style={{ borderLeftColor: data.accent }}
        onClick={() =>
          trackEvent("continue_learning_click", { kapitel: lastViewedKapitelId ?? "" })
        }
      >
        <div className="p-5 flex items-center gap-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `color-mix(in srgb, ${data.accent} 15%, transparent)` }}
          >
            <BookOpen className="w-5 h-5" style={{ color: data.accent }} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[var(--muted)] mb-0.5">
              Weiterlernen &middot; {data.subjectLabel}
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)] truncate">
              {data.kapitelTitle}
            </p>
            <p className="text-xs text-[var(--text-secondary)] truncate mt-0.5">{data.ukTitle}</p>

            <div className="mt-2.5 flex items-center gap-3">
              <div
                className="flex-1 max-w-[200px] progress-premium"
                style={{ "--subject-accent": data.accent } as React.CSSProperties}
              >
                <div className="progress-fill" style={{ width: `${data.progressPct}%` }} />
              </div>
              <span className="text-xs text-[var(--muted)] whitespace-nowrap">
                {data.doneUks}/{data.totalUks} UKs
              </span>
              {data.remainingMinutes != null && (
                <span className="text-xs text-[var(--muted)] whitespace-nowrap flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ca. {data.remainingMinutes} min
                </span>
              )}
            </div>
          </div>

          <span
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: `color-mix(in srgb, ${data.accent} 12%, transparent)`,
              color: data.accent,
            }}
          >
            Fortsetzen
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </section>
  );
}
