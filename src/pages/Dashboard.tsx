import { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Flame, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heatmap } from "@/components/ui/heatmap";
import { SyncIndicator } from "@/components/dashboard/SyncIndicator";
import { BadgeIcon } from "@/components/badges/BadgeIcon";
import { useLevelUpSound } from "@/hooks/useLevelUpSound";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useDashboardProfile } from "@/hooks/useDashboardProfile";
import { cn, daysUntilMedAT } from "@/lib/utils";
import { getDailyGoalFromPlan, getConsecutiveDaysGoalMissed } from "@/lib/dailyGoal";
import { getLevelFromXP, getLevelProgressPercent } from "@/lib/progression";
import { generateAdaptivePlan } from "@/lib/adaptivePlan";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { getBadgeProgress } from "@/data/badges";

const MODULE_TO_PATH: Record<string, string> = { BMS: "/bms", KFF: "/kff", TV: "/tv", SEK: "/sek" };

const tileMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
};
const stagger = { transition: { staggerChildren: 0.08 } };

export default function Dashboard() {
  const {
    xp: storeXp,
    completedChapters,
    quizResults,
    streak,
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
  } = useStore();
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);
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

  useEffect(() => {
    if (dailyGoalState.hasPlan && dailyGoalState.isPrimaryComplete) {
      setGoalAchievedToday(todayStr, true);
    }
  }, [dailyGoalState.hasPlan, dailyGoalState.isPrimaryComplete, todayStr, setGoalAchievedToday]);

  const xp = profile.hasData ? profile.xp : (Number.isFinite(storeXp) ? storeXp : 0);
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
    () => ({ completedChapters, maxConsecutiveCorrectEver, smartRecoveryCount, firstActivityTimeByDay }),
    [completedChapters, maxConsecutiveCorrectEver, smartRecoveryCount, firstActivityTimeByDay]
  );
  const earnedBadges = useMemo(() => {
    return BADGE_DEFINITIONS.filter((b) => getBadgeProgress(b.id, badgeState).earned).slice(-3);
  }, [badgeState]);

  const questProgress = dailyGoalState.hasPlan ? dailyGoalState.primaryProgressPct : 0;

  const glassClass =
    "rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/10 dark:border-white/10 shadow-lg shadow-slate-200/20 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300";

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50/95 to-slate-100/80 dark:from-slate-950/95 dark:to-slate-900/80">
      <div className="max-w-5xl mx-auto px-4 py-8 pb-24 lg:pb-12">
        <SyncIndicator />
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 italic mb-6">
          By doctors for future doctors
        </p>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {/* Hero: Das steht heute an */}
          <motion.section
            variants={tileMotion}
            className="sm:col-span-2 lg:col-span-4"
            aria-label="Das steht heute an"
          >
            <div
              className={cn(
                glassClass,
                "relative overflow-hidden min-h-[180px] flex flex-col justify-between"
              )}
            >
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/15 pointer-events-none" />
              <CardContent className="relative p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-400/30 dark:to-violet-400/30 flex items-center justify-center shrink-0 ring-2 ring-indigo-200/50 dark:ring-indigo-500/30">
                    <BookOpen className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Das steht heute an
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {dailyGoalState.hasPlan
                        ? `${Math.round(questProgress)}% erledigt`
                        : "Lernplan anlegen für tägliche Ziele"}
                    </p>
                  </div>
                </div>
                {dailyGoalState.hasPlan && dailyGoalState.todayTasks.length > 0 ? (
                  <>
                    <Progress value={questProgress} className="h-2 rounded-full" />
                    <div className="flex flex-wrap gap-2">
                      {dailyGoalState.todayTasks.map((t) => {
                        const path = MODULE_TO_PATH[t.module] ?? "/bms";
                        return (
                          <Link
                            key={t.module}
                            to={path}
                            className={cn(
                              "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                              t.done
                                ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"
                                : "bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-white/15"
                            )}
                          >
                            {t.module} · {t.doneMinutes}/{t.targetMinutes} Min
                            {t.done && " ✓"}
                          </Link>
                        );
                      })}
                    </div>
                    <Link to="/bms" className="self-start">
                      <Button size="sm" className="gap-2">
                        Weiter lernen
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Link to="/lernplan" className="self-start">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Sparkles className="w-4 h-4" />
                      Lernplan anlegen
                    </Button>
                  </Link>
                )}
              </CardContent>
            </div>
          </motion.section>

          {/* Kachel 1: XP / Level + Progress */}
          <motion.section variants={tileMotion} aria-label="Level und XP">
            <div className={cn(glassClass, "h-full")}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-400/30 dark:to-violet-400/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">Level {level}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{xp.toLocaleString()} XP</p>
                  </div>
                </div>
                <Progress value={levelProgress} className="h-2 rounded-full" />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Zum nächsten Level</p>
              </CardContent>
            </div>
          </motion.section>

          {/* Kachel 2: Streak */}
          <motion.section variants={tileMotion} aria-label="Streak">
            <div className={cn(glassClass, "h-full")}>
              <CardContent className="p-5 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/20 dark:bg-orange-500/30 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{streak}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Tage Streak</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </motion.section>

          {/* Kachel 3: Letzte Badges */}
          <motion.section variants={tileMotion} aria-label="Letzte Badges">
            <div className={cn(glassClass, "h-full")}>
              <CardContent className="p-5">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">Letzte Badges</p>
                {earnedBadges.length > 0 ? (
                  <div className="space-y-2">
                    {earnedBadges.map((badge) => (
                      <div
                        key={badge.id}
                        title={badge.description}
                        className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/80 dark:bg-amber-900/20"
                      >
                        <BadgeIcon tier={badge.tier} earned={true} size="sm" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Noch keine Badges</p>
                )}
                <Link
                  to="/performance"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Alle anzeigen
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </div>
          </motion.section>

          {/* Kachel 4: Wochen-Aktivität */}
          <motion.section variants={tileMotion} className="sm:col-span-2" aria-label="Wochen-Aktivität">
            <div className={cn(glassClass, "h-full")}>
              <CardContent className="p-5">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">Wochen-Aktivität</p>
                <Heatmap />
              </CardContent>
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
              <h2 id="smart-adjust-title" className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Tagesziel öfter verfehlt
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Sollen wir das Pensum für die nächsten Tage anpassen?
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => dismissSmartAdjust(false)}>
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
