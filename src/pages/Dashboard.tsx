import { useMemo, useEffect } from "react";
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
  Brain,
  FileText,
  Heart,
  ListChecks,
  RefreshCw,
  Puzzle,
  Zap,
} from "lucide-react";
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
import { getLevelFromXP } from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { getPlanAdaptation } from "@/lib/planAdaptation";
// prognoseSummary moved into widgets
import { alleKapitel, getKapitelById, findChapterByUnterkapitelId } from "@/data/bmsKapitel";
import { useTodayEngine } from "@/hooks/useTodayEngine";
import { useViewportMode } from "@/hooks/useViewportMode";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { ReferralWidget } from "@/components/shared/ReferralWidget";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tooltip } from "@/components/ui/Tooltip";
import { DailyPlanWidget } from "@/components/dashboard/DailyPlanWidget";
import { WeaknessWidget } from "@/components/dashboard/WeaknessWidget";
import { RecentActivityWidget } from "@/components/dashboard/RecentActivityWidget";
import { PromoEndBanner } from "@/components/dashboard/PromoEndBanner";

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
  const dailyGoalState = useMemo(() => {
    try {
      return getDailyGoalFromPlan(plan, quizResults, todayStr);
    } catch {
      return {
        hasPlan: false,
        isPrimaryComplete: false,
        dailyMinutes: 0,
        todayTasks: [],
        primaryProgressPct: 0,
        totalSegments: 0,
        completedSegments: 0,
      };
    }
  }, [plan, quizResults, todayStr]);
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
  const { pullDistance, isRefreshing } = usePullToRefresh(() => window.location.reload(), 80);

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
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <SyncIndicator />
        <PromoEndBanner />

        {/* ─── Hero Header with halo (like BMS subject pages) ─── */}
        <div className="text-center hero-orbs py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md text-[var(--accent)] bg-[var(--accent)]/[0.08]">
              Dashboard
            </span>
          </div>
          <h1 className="text-2xl sm:text-[3rem] sm:leading-tight font-bold text-[var(--foreground)] tracking-tight mb-2 heading-glow">
            Dashboard
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Deine MedAT-Vorbereitung im Überblick
          </p>
        </div>

        {/* ─── Greeting card with streak & countdown ─── */}
        <div className="card-glass p-6 mb-6">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                {displayName ? `${getGreetingByTime()}, ${displayName}` : getGreetingByTime()}
              </h2>
              {concretePlan && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {concretePlan.bmsRead.length > 0 && (
                    <Link
                      to="/bms"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <BookOpen className="w-3 h-3" />
                      {concretePlan.bmsRead.length} Kapitel lernen
                    </Link>
                  )}
                  {concretePlan.bmsReview.length > 0 && (
                    <Link
                      to="/bms"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                      {concretePlan.bmsReview.length} wiederholen
                    </Link>
                  )}
                  {concretePlan.bmsQuestions.length > 0 && (
                    <Link
                      to="/fragen-trainer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <ListChecks className="w-3 h-3" />
                      BMS-Fragen
                    </Link>
                  )}
                  {concretePlan.kffTasks.length > 0 && (
                    <Link
                      to="/kff"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <Brain className="w-3 h-3" />
                      KFF
                    </Link>
                  )}
                  {concretePlan.tvTexts > 0 && (
                    <Link
                      to="/tv"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <FileText className="w-3 h-3" />
                      TV
                    </Link>
                  )}
                  {concretePlan.sekTasks.length > 0 && (
                    <Link
                      to="/sek"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/[0.06] hover:bg-[var(--accent)]/[0.1] transition-colors"
                    >
                      <Heart className="w-3 h-3" />
                      SEK
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className="shrink-0 flex items-center gap-2.5">
              {flameStreak > 0 && (
                <Tooltip
                  content={`${flameStreak} ${flameStreak === 1 ? "Tag" : "Tage"} in Folge aktiv`}
                  position="top"
                >
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-800/30">
                    <StreakFlameIcon
                      streak={flameStreak}
                      hasActivityToday={flameHasActivity}
                      size="sm"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold text-amber-700 dark:text-amber-400 leading-tight">
                      {flameStreak}
                    </span>
                  </div>
                </Tooltip>
              )}
              {days > 0 && (
                <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-[var(--accent)]/[0.06] border border-[var(--accent)]/[0.12]">
                  <span className="text-lg font-bold text-[var(--accent)] leading-tight tabular-nums">
                    {days}
                  </span>
                  <span className="text-[10px] text-[var(--muted)] leading-tight">
                    Tage bis MedAT
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* BMS Progress */}
          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-[var(--text-secondary)]">BMS-Fortschritt</span>
              <Tooltip
                content={`${bmsProgressDone} von ${bmsProgressTotal} Unterkapitel abgeschlossen`}
                position="top"
              >
                <span className="font-semibold text-[var(--text-primary)]">
                  {bmsProgressPct} %
                </span>
              </Tooltip>
            </div>
            <div className="progress-premium w-full">
              <div className="progress-fill" style={{ width: `${bmsProgressPct}%` }} />
            </div>
          </div>
        </div>

        {/* ─── First-action guidance for new users (hidden after first activity) ─── */}
        {(quizResults ?? []).length === 0 && completedChapters.length === 0 && (
          <section className="mb-8" aria-label="Erste Schritte">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
              Starte deine MedAT-Vorbereitung
            </h2>
            <p className="text-sm text-[var(--muted)] mb-5">
              Wähle einen Bereich und leg direkt los.
            </p>
            <div
              className={`grid gap-3 ${isMobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-3"}`}
            >
              {(
                [
                  {
                    to: "/bms",
                    icon: BookOpen,
                    title: "BMS-Fragen üben",
                    desc: "5.000+ Fragen zu Bio, Chemie, Physik & Mathe",
                    accent: "var(--accent-bio)",
                    target: "bms",
                  },
                  {
                    to: "/kff",
                    icon: Puzzle,
                    title: "KFF trainieren",
                    desc: "Zahlenfolgen, Figuren, Implikationen & mehr",
                    accent: "var(--accent-phys)",
                    target: "kff",
                  },
                  {
                    to: "/tv",
                    icon: FileText,
                    title: "TV üben",
                    desc: "Textverständnis trainieren",
                    accent: "var(--accent-math)",
                    target: "tv",
                  },
                  {
                    to: "/sek",
                    icon: Heart,
                    title: "SEK üben",
                    desc: "Sozial-emotionale Kompetenzen",
                    accent: "var(--accent-chem)",
                    target: "sek",
                  },
                  {
                    to: "/simulation",
                    icon: Target,
                    title: "Simulation starten",
                    desc: "Vollständiger MedAT unter echten Bedingungen",
                    accent: "var(--accent)",
                    target: "simulation",
                  },
                ] as const
              ).map((card) => (
                <Link
                  key={card.target}
                  to={card.to}
                  onClick={() => trackEvent("activation_cta_click", { target: card.target })}
                  className="card-glass p-4 flex items-center gap-3.5 group hover:border-[var(--border-strong)] transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${card.accent} 12%, transparent)`,
                    }}
                  >
                    <card.icon className="w-4.5 h-4.5" style={{ color: card.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{card.title}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-5">
          {/* ─── Weiterlernen card ─── */}
          <ContinueLearningCard completedChapters={completedChapters} />

          {/* ─── Quick Quiz (mobile-prominent) ─── */}
          {isMobile && (quizResults ?? []).length > 0 && (
            <Link to="/fragen-trainer" className="block card-glass p-4 group">
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

          {/* ─── BMS des Tages + Freunde einladen — side by side ─── */}
          <motion.section variants={tileMotion} aria-label="BMS des Tages & Referral" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dailyResult ? (
              <Link to="/daily" className="block card-glass p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--success-bg)] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
                  </div>
                  <p className="text-sm font-medium text-[var(--text-primary)] flex-1">
                    BMS des Tages gelöst
                  </p>
                  <span className="shrink-0 text-xs font-medium text-[var(--success)]">
                    +{dailyResult.xpEarned} XP
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                to="/daily"
                className="block card-glass p-4 group hover:border-[var(--border-strong)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)]">BMS des Tages</p>
                    <p className="text-xs text-[var(--muted)]">Tägliche Übungsfrage</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)]">
                    Jetzt starten{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            )}
            <ReferralWidget compact />
          </motion.section>

          {/* Adaptive widgets — Tagesplan, Schwachstellen, Letzte Aktivität */}
          <motion.section
            variants={tileMotion}
            aria-label="Empfehlungen"
            className="grid gap-3"
            style={{
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <DailyPlanWidget />
            <WeaknessWidget />
            <RecentActivityWidget />
          </motion.section>

          {/* Wochen-Aktivität — full width, no referral widget crowding the learning context */}
          <motion.section variants={tileMotion} aria-label="Wochen-Aktivität">
            <div className={cn(cardClass, "p-4")}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-[var(--text-primary)]">Wochen-Aktivität</p>
                <p className="text-xs text-[var(--muted)]">
                  Diese Woche an{" "}
                  <strong className="text-[var(--text-primary)]">{daysThisWeekActive}/7</strong>{" "}
                  Tagen aktiv
                </p>
              </div>
              <Heatmap />
            </div>
          </motion.section>

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
              className="relative w-full max-w-md card-glass shadow-lg p-6"
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

// StreakShareButton removed from Dashboard — streak sharing moved to Fortschritt page

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
    const uk = uks[ukMatch.index] ?? uks.find((u) => u.id === lastViewedUnterkapitelId);
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
    <section aria-label="Weiterlernen">
      <Link
        to={data.link}
        className="block card-glass shadow-sm hover:shadow-md transition-shadow border-l-4"
        style={{ borderLeftColor: data.accent }}
        onClick={() =>
          trackEvent("continue_learning_click", { kapitel: lastViewedKapitelId ?? "" })
        }
      >
        <div className="p-6 flex items-center gap-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `color-mix(in srgb, ${data.accent} 15%, transparent)` }}
          >
            <BookOpen className="w-6 h-6" style={{ color: data.accent }} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[var(--muted)] mb-0.5">
              Weiterlernen &middot; {data.subjectLabel}
            </p>
            <p className="text-base font-bold text-[var(--text-primary)] truncate">
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
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            style={{
              backgroundColor: `color-mix(in srgb, ${data.accent} 15%, transparent)`,
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
