import { useMemo, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
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
  Timer,
  Dumbbell,
  BarChart3,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heatmap } from "@/components/ui/heatmap";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useLevelUpSound } from "@/hooks/useLevelUpSound";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useDashboardProfile } from "@/hooks/useDashboardProfile";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useAuth } from "@/hooks/useAuth";
import { cn, daysUntilMedAT, getGreetingByTime } from "@/lib/utils";
import { getDailyGoalFromPlan, getConsecutiveDaysGoalMissed } from "@/lib/dailyGoal";
import { getTodaysResult } from "@/lib/dailyChallenge";
import { shareText, getStreakShareText, getReferralShareText } from "@/lib/shareUtils";
import { getLevelFromXP, XP_PER_LEVEL } from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { buildConcreteDailyPlan } from "@/lib/concreteDailyPlan";
import { getPlanAdaptation } from "@/lib/planAdaptation";
import { getPrognoseSummary } from "@/lib/prognoseScore";
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
    lernplanConfig,
    setGoalAchievedToday,
    goalAchievedByDate,
    smartAdjustDismissedUntil,
    dismissSmartAdjust,
    getDueChapterIds,
  } = useStore();
  const activityLog = useStore((s) => s.activityLog);
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
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
  useLevelUpSound(xp);

  const faecherIds = useMemo(() => ["biologie", "chemie", "physik", "mathematik"], []);
  useEffect(() => {
    faecherIds.forEach((fach) => {
      if (getFachReadiness(fach) >= 50 && !unlockedFachMilestones.includes(fach)) {
        unlockFachMilestone(fach);
      }
    });
  }, [getFachReadiness, unlockedFachMilestones, unlockFachMilestone, faecherIds]);

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

  return (
    <div className="dashboard-page-bg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 pb-28 lg:pb-12">
        <SyncIndicator />

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
          {/* Hero: Begrüßung + Heute im Lernplan */}
          <motion.section variants={tileMotion} aria-label="Start" className="space-y-4">
            <div
              className={cn(
                cardClass,
                "p-5 sm:p-8 border-l-4 border-l-[var(--accent-phys)] bg-[var(--card)] shadow-md",
                "bg-linear-to-br from-[var(--card)] via-[var(--card)] to-blue-50/50 dark:to-blue-950/20"
              )}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                      {displayName ? `${getGreetingByTime()}, ${displayName}` : getGreetingByTime()}
                    </h1>
                    {days > 0 && (
                      <div className="shrink-0 flex flex-col items-center px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                        <span className="text-lg font-bold text-[var(--accent)] leading-tight">
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
                    className="mt-2 inline-flex items-center gap-1.5 text-base font-semibold text-[var(--accent)] hover:underline"
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
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {concretePlan.bmsRead.length} Kapitel lernen
                      </Link>
                    )}
                    {concretePlan.bmsReview.length > 0 && (
                      <Link
                        to="/bms"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        {concretePlan.bmsReview.length} wiederholen
                      </Link>
                    )}
                    {concretePlan.bmsQuestions.length > 0 && (
                      <Link
                        to="/fragen-trainer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
                      >
                        <ListChecks className="w-3.5 h-3.5" />
                        BMS-Fragen
                      </Link>
                    )}
                    {concretePlan.kffTasks.length > 0 && (
                      <Link
                        to="/kff"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
                      >
                        <Brain className="w-3.5 h-3.5" />
                        KFF
                      </Link>
                    )}
                    {concretePlan.tvTexts > 0 && (
                      <Link
                        to="/tv"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        TV
                      </Link>
                    )}
                    {concretePlan.sekTasks.length > 0 && (
                      <Link
                        to="/sek"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors"
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

          {/* Schnellzugriff + Prognose — side by side on desktop */}
          <motion.section
            variants={tileMotion}
            aria-label="Schnellzugriff"
            className="grid grid-cols-1 lg:grid-cols-4 gap-3"
          >
            <Link
              to="/simulation"
              className={cn(
                cardClass,
                "p-3 lg:p-4 flex items-center lg:flex-col gap-3 lg:gap-2 lg:text-center"
              )}
            >
              <div className="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                <Timer className="w-4.5 h-4.5 text-orange-500" />
              </div>
              <span className="text-sm lg:text-xs font-medium text-[var(--text-primary)]">
                Simulation
              </span>
            </Link>
            <Link
              to="/fragen-trainer"
              className={cn(
                cardClass,
                "p-3 lg:p-4 flex items-center lg:flex-col gap-3 lg:gap-2 lg:text-center"
              )}
            >
              <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
                <Dumbbell className="w-4.5 h-4.5 text-violet-500" />
              </div>
              <span className="text-sm lg:text-xs font-medium text-[var(--text-primary)]">
                Fragen-Trainer
              </span>
            </Link>
            <Link
              to="/fortschritt"
              className={cn(
                cardClass,
                "p-3 lg:p-4 flex items-center lg:flex-col gap-3 lg:gap-2 lg:text-center"
              )}
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4.5 h-4.5 text-indigo-500" />
              </div>
              <span className="text-sm lg:text-xs font-medium text-[var(--text-primary)]">
                Fortschritt
              </span>
            </Link>
            <Link to="/fortschritt">
              <div
                className={cn(
                  cardClass,
                  "h-full p-3 lg:p-4 flex items-center gap-3",
                  "border-l-4 border-l-[var(--accent-math)] bg-linear-to-br from-violet-50/50 to-[var(--card)]/80 dark:from-violet-950/20 dark:to-[var(--card)]/80"
                )}
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-math)]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4.5 h-4.5 text-[var(--accent-math)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">Prognose</p>
                  <p className="text-xs text-[var(--muted)]">
                    {prognoseSummary.hasEnoughData
                      ? `${prognoseSummary.totalPct.toFixed(0)}% geschätzt`
                      : "Ab 20 Fragen verfügbar"}
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

          {/* Wochen-Aktivität + Freunde einladen — side by side on desktop */}
          <motion.section
            variants={tileMotion}
            aria-label="Wochen-Aktivität und Freunde"
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
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
            <ReferralCard />
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
              className="relative w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-md shadow-xl p-6"
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

function ReferralCard() {
  const [shared, setShared] = useState(false);
  return (
    <div className="h-full rounded-xl border border-[var(--accent)]/20 bg-linear-to-br from-[#e8ecf7] to-white dark:from-primary-950/30 dark:to-[var(--card)] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Freunde einladen</p>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            Teile MedMaster mit deinen Freunden — gemeinsam lernt es sich besser!
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={async () => {
              await shareText(getReferralShareText(), "MedMaster empfehlen");
              setShared(true);
              setTimeout(() => setShared(false), 3000);
            }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors",
              shared ? "bg-[var(--success)]" : "bg-[var(--accent)]"
            )}
          >
            {shared ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Geteilt!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                Teilen
              </>
            )}
          </button>
        </div>
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
