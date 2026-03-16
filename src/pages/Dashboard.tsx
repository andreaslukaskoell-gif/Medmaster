import { useMemo, useEffect, useState } from "react";
import { PostSignupReferral } from "@/components/growth/PostSignupReferral";
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
  MessageCircle,
  Copy,
  Puzzle,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Progress replaced with .progress-premium CSS class
import { Heatmap } from "@/components/ui/heatmap";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useLevelUpSound } from "@/hooks/useLevelUpSound";
import { trackEvent } from "@/lib/analyticsTracker";
import { useStore } from "@/store/useStore";
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
import { getPrognoseSummary } from "@/lib/prognoseScore";
import { alleKapitel, getKapitelById, findChapterByUnterkapitelId } from "@/data/bmsKapitel";
import { useTodayEngine } from "@/hooks/useTodayEngine";
import { ReferralWidget } from "@/components/shared/ReferralWidget";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tooltip } from "@/components/ui/Tooltip";

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
      <div className="max-w-5xl mx-auto px-4 py-8 pb-12">
        <SyncIndicator />

        {/* ─── Referral nudge for new users ─── */}
        <PostSignupReferral />

        {/* ─── First-action guidance for new users ─── */}
        {(quizResults ?? []).length === 0 && (
          <section className="mb-6 hero-orbs" aria-label="Erste Schritte">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1 text-center">
              Starte jetzt mit deiner MedAT-Vorbereitung
            </h2>
            <p className="text-sm text-[var(--muted)] text-center mb-4">
              Waehle einen Bereich und leg direkt los.
            </p>
            <div className="grid grid-cols-3 gap-3 stagger-children">
              {(
                [
                  {
                    to: "/bms",
                    icon: BookOpen,
                    title: "BMS-Fragen üben",
                    desc: "4.300+ Fragen zu Bio, Chemie, Physik & Mathe",
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

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
          {/* Hero: Begrüßung + Heute im Lernplan */}
          <motion.section variants={tileMotion} aria-label="Start" className="space-y-4">
            <div className="card-glass p-8 shadow-md">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
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
            className="grid grid-cols-2 gap-4"
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
            <div className={cn(cardClass, "p-5 flex items-center gap-4")} aria-label="Streak">
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
                <p className="text-2xl font-bold text-[var(--text-primary)]">{flameStreak}</p>
                <p className="text-sm text-[var(--muted)]">Tage Streak</p>
              </div>
              {streak > 0 && !streakPreview && <StreakShareButton streak={streak} />}
            </div>
          </motion.section>

          {/* Schnellzugriff + Prognose — side by side on desktop */}
          <ScrollReveal delay={80}>
            <motion.section
              variants={tileMotion}
              aria-label="Schnellzugriff"
              className="grid grid-cols-4 gap-3 stagger-children"
            >
              <Tooltip
                content="Vollständige MedAT-Simulation unter Prüfungsbedingungen"
                position="top"
              >
                <Link to="/simulation" className={cn(cardClass, "p-4 flex items-center gap-2.5")}>
                  <Timer className="w-4 h-4 text-[var(--muted)] shrink-0" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">Simulation</span>
                </Link>
              </Tooltip>
              <Tooltip
                content="BMS- und KFF-Fragen gezielt nach Fach und Schwierigkeit üben"
                position="top"
              >
                <Link
                  to="/fragen-trainer"
                  className={cn(cardClass, "p-4 flex items-center gap-2.5")}
                >
                  <Dumbbell className="w-4 h-4 text-[var(--muted)] shrink-0" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    Fragen-Trainer
                  </span>
                </Link>
              </Tooltip>
              <Tooltip content="Lernfortschritt und Statistiken nach Fach anzeigen" position="top">
                <Link to="/fortschritt" className={cn(cardClass, "p-4 flex items-center gap-2.5")}>
                  <BarChart3 className="w-4 h-4 text-[var(--muted)] shrink-0" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    Fortschritt
                  </span>
                </Link>
              </Tooltip>
              <Tooltip
                content="Geschätzte MedAT-Ergebnisquote basierend auf deinen Antworten"
                position="top"
              >
                <Link to="/fortschritt">
                  <div className={cn(cardClass, "h-full p-4 flex items-center gap-2.5")}>
                    <TrendingUp className="w-4 h-4 text-[var(--muted)] shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[var(--text-primary)]">Prognose</p>
                      <p className="text-xs text-[var(--muted)]">
                        {prognoseSummary.hasEnoughData
                          ? `${prognoseSummary.totalPct.toFixed(0)}% geschätzt`
                          : "Ab 20 Fragen verfügbar"}
                      </p>
                    </div>
                    {prognoseSummary.hasEnoughData && (
                      <p className="text-xl font-bold text-[var(--accent)] shrink-0">
                        {prognoseSummary.totalPct.toFixed(0)}%
                      </p>
                    )}
                  </div>
                </Link>
              </Tooltip>
            </motion.section>
          </ScrollReveal>

          {/* Wochen-Aktivität + Freunde einladen — side by side on desktop */}
          <ScrollReveal delay={120}>
            <motion.section
              variants={tileMotion}
              aria-label="Wochen-Aktivität und Freunde"
              className="grid grid-cols-2 gap-4"
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

    const uk =
      kapitel.unterkapitel[ukMatch.index] ??
      kapitel.unterkapitel.find((u) => u.id === lastViewedUnterkapitelId);
    if (!uk) return null;

    const totalUks = kapitel.unterkapitel.length;
    const doneUks = kapitel.unterkapitel.filter((u) => completedChapters.includes(u.id)).length;

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
