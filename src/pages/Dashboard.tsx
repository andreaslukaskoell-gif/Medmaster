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
  Timer,
  TrendingUp,
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
import { cn, daysUntilMedAT } from "@/lib/utils";
import { getDailyGoalFromPlan, getConsecutiveDaysGoalMissed } from "@/lib/dailyGoal";
import { getTodaysResult } from "@/lib/dailyChallenge";
import { shareText, getStreakShareText } from "@/lib/shareUtils";
import { getLevelFromXP, getLevelProgressPercent } from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { getBadgeProgress } from "@/data/badges";
import { alleKapitel } from "@/data/bmsKapitel";

const MODULE_TO_PATH: Record<string, string> = { BMS: "/bms", KFF: "/kff", TV: "/tv", SEK: "/sek" };

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
    spacedRepetition,
  } = useStore();
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const lastPath = useAdaptiveStore((s) => s.lastPath);
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);
  const hasActivityToday = lastActiveDate === todayStr;
  const [searchParams] = useSearchParams();
  const streakPreview = searchParams.get("streakPreview");
  const flameStreak =
    streakPreview != null ? Math.max(0, parseInt(streakPreview, 10) || 0) : streak;
  const flameHasActivity = streakPreview != null ? flameStreak > 0 : hasActivityToday;
  const profile = useDashboardProfile();
  const days = daysUntilMedAT();
  const weeksLeft = Math.max(1, Math.floor(days / 7));
  const plan = useMemo(() => {
    if (!lernplanConfig) return null;
    const ad = useAdaptiveStore.getState();
    return generateAdaptivePlan({
      hoursPerWeek: lernplanConfig.hoursPerWeek,
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
  }, [lernplanConfig, weeksLeft]);
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

  // Calculate due chapters count
  const dueCount = useMemo(() => {
    const sr = spacedRepetition ?? {};
    return Object.values(sr).filter((item) => item?.nextDue <= todayStr).length;
  }, [spacedRepetition, todayStr]);

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

  const badgeState = useMemo(
    () => ({
      completedChapters,
      maxConsecutiveCorrectEver,
      smartRecoveryCount,
      firstActivityTimeByDay,
    }),
    [completedChapters, maxConsecutiveCorrectEver, smartRecoveryCount, firstActivityTimeByDay]
  );
  const earnedBadges = useMemo(() => {
    return BADGE_DEFINITIONS.filter(
      (b) => getBadgeProgress(b.id, badgeState, alleKapitel).earned
    ).slice(-3);
  }, [badgeState]);

  const questProgress = dailyGoalState.hasPlan ? dailyGoalState.primaryProgressPct : 0;
  const dailyResult = getTodaysResult();

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
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 pb-24 lg:pb-12">
        <SyncIndicator />

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
          {/* Hero: CTA + MedAT + Fortschritt */}
          <motion.section variants={tileMotion} aria-label="Start" className="space-y-4">
            <div
              className={cn(
                cardClass,
                "p-6 sm:p-8 border-l-4 border-l-[var(--accent)] bg-[var(--card)]"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {lastPath && lastPath !== "/" && lastPath !== "/bms"
                      ? "Weiterlernen"
                      : "Heute lernen"}
                  </h1>
                  <p className="text-sm text-[var(--muted)] mt-1">Noch {days} Tage bis MedAT</p>
                </div>
                <Link
                  to={lastPath && lastPath !== "/" && lastPath !== "/bms" ? lastPath : "/bms"}
                  className="shrink-0"
                >
                  <Button size="lg" className="gap-2">
                    <BookOpen className="w-5 h-5" />
                    {lastPath && lastPath !== "/" && lastPath !== "/bms"
                      ? "Weiterlernen"
                      : "Jetzt starten"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-[var(--muted)]">BMS-Fortschritt</span>
                  <span className="font-medium text-[var(--text-primary)]">{bmsProgressPct} %</span>
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
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            ✅ BMS des Tages gelöst!
                          </p>
                          <p className="text-xs text-[var(--muted)] flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" /> Nächste Frage morgen
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 px-2.5 py-1 rounded-full">
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
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            🎯 BMS des Tages wartet!
                          </p>
                          <p className="text-xs text-[var(--muted)] mt-0.5">
                            Täglich eine Frage — bis zu 100 XP
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-3 py-1.5 rounded-full">
                        Jetzt lösen <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </div>
                </Link>
              )}
            </div>
            {/* Streak-Karte */}
            <div
              className={cn(cardClass, "p-4 sm:p-5 flex items-center gap-4")}
              aria-label="Streak"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
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

          {/* Empfohlene Aktion: 1 groß + 2–3 klein */}
          <motion.section
            variants={tileMotion}
            aria-label="Empfohlen"
            className="grid grid-cols-1 lg:grid-cols-4 gap-4"
          >
            <Link
              to={dueCount > 0 ? "/bms?filter=due" : "/schwachstellen"}
              className="lg:col-span-2"
            >
              <div
                className={cn(
                  cardClass,
                  "h-full p-5 border-l-4 border-l-[var(--accent)] flex flex-col justify-between min-h-[120px]"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {dueCount > 0 ? "Fällige Kapitel wiederholen" : "Schwachstellen trainieren"}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5">
                      {dueCount > 0 ? `${dueCount} Kapitel fällig` : "Gezielt Lücken schließen"}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] mt-3">
                  Jetzt starten <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link to="/simulation">
              <div className={cn(cardClass, "h-full p-4 flex items-center gap-3 min-h-[120px]")}>
                <Timer className="w-8 h-8 text-[var(--muted)] shrink-0" />
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Simulation</p>
                  <p className="text-xs text-[var(--muted)]">Gesamtstand</p>
                </div>
              </div>
            </Link>
            <Link to="/prognose">
              <div className={cn(cardClass, "h-full p-4 flex items-center gap-3 min-h-[120px]")}>
                <TrendingUp className="w-8 h-8 text-[var(--muted)] shrink-0" />
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Prognose</p>
                  <p className="text-xs text-[var(--muted)]">Punktestand</p>
                </div>
              </div>
            </Link>
          </motion.section>

          {/* Kompakter Fortschritt: Level + XP + Streak + Badge-Hinweis */}
          <motion.section variants={tileMotion} aria-label="Fortschritt">
            <div className={cn(cardClass, "p-5")}>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--text-primary)]">Level {level}</p>
                    <p className="text-xs text-[var(--muted)]">{xp.toLocaleString()} XP</p>
                  </div>
                </div>
                <div className="flex-1 min-w-[180px] max-w-xs">
                  <Progress value={levelProgress} className="h-2 rounded-full" />
                  <p className="text-xs text-[var(--muted)] mt-1">Zum nächsten Level</p>
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
                >
                  {earnedBadges.length > 0 ? (
                    <>
                      <BadgeIcon
                        tier={earnedBadges[earnedBadges.length - 1].tier}
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
            <div className={cn(cardClass, "p-5")}>
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
      className="p-2 rounded-lg text-orange-500 hover:bg-orange-500/10 transition-colors cursor-pointer"
      aria-label="Streak teilen"
      title="Streak teilen"
    >
      {copied ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      ) : (
        <Share2 className="w-4 h-4" />
      )}
    </button>
  );
}
