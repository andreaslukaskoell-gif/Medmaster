import { useMemo, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  ArrowRight,
  Target,
  CheckCircle2,
  Clock,
  Share2,
  TrendingUp,
  Brain,
  FileText,
  Heart,
  ListChecks,
  RefreshCw,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heatmap } from "@/components/ui/heatmap";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { BadgeIcon } from "@/components/badges/BadgeIcon";
import { useLevelUpSound } from "@/hooks/useLevelUpSound";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useDashboardProfile } from "@/hooks/useDashboardProfile";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { cn, daysUntilMedAT, getGreetingByTime } from "@/lib/utils";
import { getDailyGoalFromPlan, getConsecutiveDaysGoalMissed } from "@/lib/dailyGoal";
import { getTodaysResult } from "@/lib/dailyChallenge";
import { shareText, getStreakShareText } from "@/lib/shareUtils";
import {
  getLevelFromXP,
  getLevelProgressPercent,
  getXPToNextLevel,
  XP_PER_LEVEL,
} from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { getPlanAdaptation } from "@/lib/planAdaptation";
import { getPrognoseSummary } from "@/lib/prognoseScore";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { getBadgeProgress } from "@/data/badges";
import { alleKapitel } from "@/data/bmsKapitel";
import { useTodayEngine } from "@/hooks/useTodayEngine";

const tileMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
};
const stagger = { transition: { staggerChildren: 0.08 } };

export default function Dashboard() {
  usePageTitle("Dashboard");
  const {
    xp: storeXp,
    completedChapters,
    quizResults,
    streak,
    lastActiveDate,
    unlockedFachMilestones,
    unlockFachMilestone,
    firstActivityTimeByDay,
    maxConsecutiveCorrectEver,
    smartRecoveryCount,
    lernplanConfig,
    setGoalAchievedToday,
    goalAchievedByDate,
    smartAdjustDismissedUntil,
    dismissSmartAdjust,
    getDueChapterIds,
  } = useStore();
  const activityLog = useStore((s) => s.activityLog);
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const lastPath = useAdaptiveStore((s) => s.lastPath);
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);
  const dailyResult = useMemo(() => getTodaysResult(), []);
  // todayStr omitted: getTodaysResult uses current date internally
  const {
    dueCount: todayDueCount,
    weaknessCount: todayWeaknessCount,
    newCount: todayNewCount,
    tasks: todayTasks,
  } = useTodayEngine();
  const hasTodayTasks = todayTasks.length > 0;
  const hasActivityToday = lastActiveDate === todayStr;
  const [searchParams] = useSearchParams();
  const streakPreview = searchParams.get("streakPreview");
  const flameStreak =
    streakPreview != null ? Math.max(0, parseInt(streakPreview, 10) || 0) : streak;
  const flameHasActivity = streakPreview != null ? flameStreak > 0 : hasActivityToday;
  const profile = useDashboardProfile();
  const { user, profile: authProfile } = useAuth();
  const displayName =
    authProfile?.display_name?.trim() ||
    authProfile?.username?.trim() ||
    (
      user?.user_metadata as { display_name?: string; full_name?: string } | undefined
    )?.display_name?.trim() ||
    (
      user?.user_metadata as { display_name?: string; full_name?: string } | undefined
    )?.full_name?.trim() ||
    user?.email?.split("@")[0]?.trim() ||
    "";
  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));
  const plan = useMemo(() => {
    if (!lernplanConfig) return null;
    const ad = useAdaptiveStore.getState();
    const adaptation = getPlanAdaptation({
      hoursPerWeek: lernplanConfig.hoursPerWeek,
      goalAchievedByDate: goalAchievedByDate ?? {},
      quizResults: quizResults ?? [],
      activityLog: activityLog ?? {},
    });
    return generateAdaptivePlan({
      hoursPerWeek: adaptation.effectiveHoursPerWeek,
      weeksLeft,
      readiness: ad.getMedATReadiness(),
      fachReadiness: {
        biologie: ad.getFachReadiness("biologie"),
        chemie: ad.getFachReadiness("chemie"),
        physik: ad.getFachReadiness("physik"),
        mathematik: ad.getFachReadiness("mathematik"),
      },
      weakTopics: ad.getWeakestTopics(5),
      phase: ad.profile.learningPhase,
    });
  }, [lernplanConfig, weeksLeft, goalAchievedByDate, quizResults, activityLog]);
  const concretePlan = useMemo(() => {
    if (!plan) return null;
    return buildConcreteDailyPlan(plan, {
      dueChapterIds: getDueChapterIds(),
      lastViewedChapterId: lastViewedKapitelId,
      lastViewedUnterkapitelId,
    });
  }, [plan, getDueChapterIds, lastViewedKapitelId, lastViewedUnterkapitelId]);
  const prognoseSummary = useMemo(() => getPrognoseSummary(quizResults ?? []), [quizResults]);
  const dailyGoalState = useMemo(
    () => getDailyGoalFromPlan(plan, quizResults, todayStr),
    [plan, quizResults, todayStr]
  );
  const consecutiveGoalMissed = useMemo(
    () => getConsecutiveDaysGoalMissed(goalAchievedByDate),
    [goalAchievedByDate]
  );
  const showSmartAdjust =
    !!lernplanConfig &&
    consecutiveGoalMissed >= 3 &&
    (!smartAdjustDismissedUntil || todayStr > smartAdjustDismissedUntil);

  // Due count from Today Engine (Fragen + Kapitel)
  useEffect(() => {
    if (dailyGoalState.hasPlan && dailyGoalState.isPrimaryComplete) {
      setGoalAchievedToday(todayStr, true);
    }
  }, [dailyGoalState.hasPlan, dailyGoalState.isPrimaryComplete, todayStr, setGoalAchievedToday]);

  const xp = profile.hasData ? profile.xp : Number.isFinite(storeXp) ? storeXp : 0;
  const level = getLevelFromXP(xp);
  const levelProgress = getLevelProgressPercent(xp);
  useLevelUpSound(xp);

  const faecherIds = useMemo(() => ["biologie", "chemie", "physik", "mathematik"], []);
  useEffect(() => {
    faecherIds.forEach((fach) => {
      if (getFachReadiness(fach) >= 50 && !unlockedFachMilestones.includes(fach)) {
        unlockFachMilestone(fach);
      }
    });
  }, [getFachReadiness, unlockedFachMilestones, unlockFachMilestone, faecherIds]);

  const badgeState = useMemo(() => {
    const totalQuestions = (quizResults ?? []).reduce((s, r) => s + r.total, 0);
    const goalAchievedCount = Object.values(goalAchievedByDate ?? {}).filter(Boolean).length;
    const quizResultsByType = (quizResults ?? []).reduce(
      (acc, r) => {
        if (r.type === "bms" || r.type === "simulation") acc.bms += 1;
        else if (r.type === "kff") acc.kff += 1;
        else if (r.type === "tv") acc.tv += 1;
        else if (r.type === "sek") acc.sek += 1;
        return acc;
      },
      { bms: 0, kff: 0, tv: 0, sek: 0 }
    );
    let dailyChallengeStreak = 0;
    try {
      dailyChallengeStreak = useAdaptiveStore.getState()?.profile?.dailyChallengeStreak ?? 0;
    } catch {
      // ignore
    }
    return {
      completedChapters,
      maxConsecutiveCorrectEver,
      smartRecoveryCount,
      firstActivityTimeByDay,
      streak: streak ?? 0,
      totalQuestions,
      goalAchievedCount,
      dailyChallengeStreak,
      quizResultsByType,
    };
  }, [
    completedChapters,
    maxConsecutiveCorrectEver,
    smartRecoveryCount,
    firstActivityTimeByDay,
    quizResults,
    streak,
    goalAchievedByDate,
  ]);
  const earnedBadgeIds = useStore((s) => s.earnedBadges ?? []);
  const earnedBadges = useMemo(() => {
    return BADGE_DEFINITIONS.filter(
      (b) => getBadgeProgress(b.id, badgeState, alleKapitel).earned
    ).slice(-3);
  }, [badgeState]);
  const newestFourBadges = useMemo(() => {
    const ids = earnedBadgeIds.slice(-4);
    const fromStore = ids
      .map((id) => BADGE_DEFINITIONS.find((b) => b.id === id))
      .filter((b): b is NonNullable<typeof b> => b != null);
    if (fromStore.length > 0) return fromStore;
    return earnedBadges.slice(-4);
  }, [earnedBadgeIds, earnedBadges]);

  const cardClass =
    "rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-md transition-all duration-200";
  const bmsProgressPct = useMemo(() => {
    const total = alleKapitel.reduce((s, k) => s + (k?.unterkapitel?.length ?? 0), 0);
    if (total === 0) return 0;
    const done = alleKapitel.reduce(
      (s, k) =>
        s + (k?.unterkapitel?.filter((u) => u?.id && completedChapters.includes(u.id)).length ?? 0),
      0
    );
    return Math.round((done / total) * 100);
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

  const xpToNextLevel = getXPToNextLevel(xp);

  return (
    <div className="dashboard-page-bg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 pb-24 lg:pb-12">
        <SyncIndicator />

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
          {/* Hero: Begrüßung + Heute im Lernplan */}
          <motion.section variants={tileMotion} aria-label="Start" className="space-y-4">
            <div
              className={cn(
                cardClass,
                "p-8 sm:p-10 border-l-4 border-l-[var(--accent-phys)] bg-[var(--card)] shadow-md",
                "bg-linear-to-br from-[var(--card)] via-[var(--card)] to-blue-50/50 dark:to-blue-950/20"
              )}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                    {displayName ? `${getGreetingByTime()}, ${displayName}` : getGreetingByTime()}
                  </h1>
                  <Link
                    to="/lernplan"
                    className="mt-2 inline-flex items-center gap-1.5 text-base font-semibold text-[var(--accent)] hover:underline"
                  >
                    Heute im Lernplan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {concretePlan && (
                  <div className="flex flex-wrap gap-2 text-sm">
                    {concretePlan.bmsRead.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200">
                        <BookOpen className="w-3.5 h-3.5" />
                        {concretePlan.bmsRead.length} Kapitel lernen
                      </span>
                    )}
                    {concretePlan.bmsReview.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                        <RefreshCw className="w-3.5 h-3.5" />
                        {concretePlan.bmsReview.length} wiederholen
                      </span>
                    )}
                    {concretePlan.bmsQuestions.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200">
                        <ListChecks className="w-3.5 h-3.5" />
                        BMS-Fragen
                      </span>
                    )}
                    {concretePlan.kffTasks.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                        <Brain className="w-3.5 h-3.5" />
                        KFF
                      </span>
                    )}
                    {concretePlan.tvTexts > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200">
                        <FileText className="w-3.5 h-3.5" />
                        TV
                      </span>
                    )}
                    {concretePlan.sekTasks.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200">
                        <Heart className="w-3.5 h-3.5" />
                        SEK
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-[var(--text-secondary)]">Du bist bei</span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {bmsProgressPct} %
                  </span>
                </div>
                <Progress value={bmsProgressPct} className="h-2 rounded-full" />
              </div>
            </div>
          </motion.section>

          {/* Daily + Streak in einer Zeile */}
          <motion.section
            variants={tileMotion}
            aria-label="Daily und Streak"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Daily Challenge Widget */}
            <div className="sm:col-span-1" aria-label="BMS des Tages">
              {dailyResult ? (
                <Link to="/daily">
                  <div
                    className={cn(
                      cardClass,
                      "relative overflow-hidden border-l-4 border-[var(--success)]"
                    )}
                  >
                    <CardContent className="p-4 sm:p-5 flex items-center justify-between gap-4">
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
                  <div
                    className={cn(cardClass, "border-l-4 border-[var(--accent)] cursor-pointer")}
                  >
                    <CardContent className="p-4 sm:p-5 flex items-center justify-between gap-4">
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
            </div>
            {/* Streak-Karte */}
            <div
              className={cn(
                cardClass,
                "p-4 sm:p-5 flex items-center gap-4 border-l-4 border-l-amber-500",
                "bg-linear-to-br from-amber-50/60 to-orange-50/40 dark:from-amber-950/30 dark:to-orange-950/20"
              )}
              aria-label="Streak"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
                <StreakFlameIcon
                  streak={flameStreak}
                  hasActivityToday={flameHasActivity}
                  size="sm"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-2xl font-bold text-[var(--text-primary)]">{flameStreak}</p>
                <p className="text-sm text-[var(--muted)]">Tage Streak</p>
              </div>
              {streak > 0 && !streakPreview && <StreakShareButton streak={streak} />}
            </div>
          </motion.section>

          {/* Prognose-Karte */}
          <motion.section
            variants={tileMotion}
            aria-label="Prognose"
            className="grid grid-cols-1 gap-4"
          >
            <Link
              to="/prognose"
              className="opacity-90 hover:opacity-100 transition-opacity max-w-md"
            >
              <div
                className={cn(
                  cardClass,
                  "h-full p-4 flex items-center gap-3 min-h-[100px]",
                  "border-l-4 border-l-[var(--accent-math)] bg-linear-to-br from-violet-50/50 to-[var(--card)]/80 dark:from-violet-950/20 dark:to-[var(--card)]/80"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-math)]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[var(--accent-math)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">Prognose</p>
                  <p className="text-xs text-[var(--muted)]">
                    {prognoseSummary.hasEnoughData
                      ? `${prognoseSummary.totalPct.toFixed(0)}% geschätzt`
                      : "Ab 20 Fragen"}
                  </p>
                </div>
                {prognoseSummary.hasEnoughData && (
                  <p className="text-xl font-bold text-[var(--accent-math)] shrink-0">
                    {prognoseSummary.totalPct.toFixed(0)}%
                  </p>
                )}
              </div>
            </Link>
          </motion.section>

          {/* Motivationsleiste: Level links, Badges rechts daneben (eigene Zeile), dann Progress/Streak/Link */}
          <motion.section variants={tileMotion} aria-label="Fortschritt">
            <div
              className={cn(
                "rounded-xl border border-[var(--border)] p-5 shadow-sm",
                "bg-linear-to-r from-emerald-50/60 via-[var(--card)] to-teal-50/40 dark:from-emerald-950/25 dark:via-[var(--card)] dark:to-teal-950/20"
              )}
            >
              {/* Zeile 1: Level links, Badges rechts daneben (grid: Level | Badges) */}
              <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-4">
                <div className="flex items-center gap-3 shrink-0 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="shrink-0">
                    <p className="text-lg font-bold text-[var(--text-primary)]">Level {level}</p>
                    <p className="text-xs text-[var(--muted)]">{xp.toLocaleString()} XP</p>
                  </div>
                </div>
                {newestFourBadges.length > 0 && (
                  <div
                    className="flex items-center justify-end gap-1.5 flex-nowrap min-w-0"
                    aria-label="Neueste Badges"
                  >
                    {newestFourBadges.map((badge) => (
                      <Link
                        key={badge.id}
                        to="/performance"
                        className="focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-lg shrink-0"
                        title={`${badge.name} – ${badge.description}`}
                      >
                        <BadgeIcon badgeId={badge.id} icon={badge.icon} earned size="sm" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Zeile 2: Progress, Streak, Link */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex-1 min-w-[180px] max-w-xs">
                  <Progress value={levelProgress} className="h-2 rounded-full" />
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Noch {xpToNextLevel} XP bis Level {level + 1}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <StreakFlameIcon
                    streak={flameStreak}
                    hasActivityToday={flameHasActivity}
                    size="sm"
                    className="w-5 h-5 text-[var(--accent)]"
                  />
                  <span className="font-semibold text-[var(--text-primary)]">
                    {flameStreak} Tage
                  </span>
                </div>
                <Link
                  to="/performance"
                  className="text-sm font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1 shrink-0"
                  title={
                    earnedBadges.length > 0
                      ? `${earnedBadges[earnedBadges.length - 1].name} – ${earnedBadges[earnedBadges.length - 1].description}`
                      : "Badges anzeigen"
                  }
                >
                  {earnedBadges.length > 0 ? (
                    <>
                      <BadgeIcon
                        badgeId={earnedBadges[earnedBadges.length - 1].id}
                        icon={earnedBadges[earnedBadges.length - 1].icon}
                        earned
                        size="sm"
                      />
                      Badges
                    </>
                  ) : (
                    "Badges anzeigen"
                  )}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Wochen-Aktivität + Legende */}
          <motion.section variants={tileMotion} aria-label="Wochen-Aktivität">
            <div
              className={cn(
                cardClass,
                "p-5 border-l-4 border-l-[var(--success)]",
                "bg-linear-to-br from-teal-50/40 to-[var(--card)] dark:from-teal-950/20 dark:to-[var(--card)]"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-[var(--muted)]">Wochen-Aktivität</p>
                <p className="text-sm text-[var(--text-primary)]">
                  Diese Woche an <strong>{daysThisWeekActive}/7</strong> Tagen aktiv
                </p>
              </div>
              <Heatmap />
            </div>
          </motion.section>
        </motion.div>

        {showSmartAdjust && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="smart-adjust-title"
          >
            <div
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl p-6"
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
