import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, X, ArrowRight, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { trackEvent } from "@/lib/analyticsTracker";

const MILESTONE_DISMISSED_KEY = "medmaster-streak-milestone-dismissed";

/* ── Streak at risk banner ─────────────────────────────────────── */

/**
 * Shows when user has a streak but hasn't done anything today.
 * Urgent nudge to keep the streak alive.
 */
export function StreakRiskBanner() {
  const streak = useStore((s) => s.streak);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const [dismissed, setDismissed] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  // Only show if streak >= 2 and no activity today
  if (dismissed || streak < 2 || hasActivityToday) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-xl border border-amber-300/30 dark:border-amber-700/30 bg-linear-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-4 overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-orange-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            Dein {streak}-Tage-Streak ist in Gefahr!
          </p>
          <p className="text-xs text-amber-700/70 dark:text-amber-400/70 mt-0.5">
            Beantworte eine Frage, um deinen Streak zu sichern.
          </p>
        </div>
        <Link
          to="/bms"
          onClick={() => trackEvent("streak_risk_cta_clicked", { streak })}
        >
          <Button size="sm" className="shrink-0 gap-1">
            Jetzt lernen
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors shrink-0"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

/* ── Streak milestone celebration ──────────────────────────────── */

const MILESTONES = [3, 7, 14, 21, 30, 50, 100] as const;

function getMilestoneMessage(days: number): { title: string; message: string } {
  if (days >= 100) return { title: "Legende!", message: "100 Tage am Stück — du bist unaufhaltbar." };
  if (days >= 50) return { title: "Unglaublich!", message: "50 Tage Streak — echte Ausdauer!" };
  if (days >= 30) return { title: "Ein ganzer Monat!", message: "30 Tage Streak — beeindruckend." };
  if (days >= 21) return { title: "3 Wochen Streak!", message: "Du hast eine Lerngewohnheit aufgebaut." };
  if (days >= 14) return { title: "2 Wochen Streak!", message: "Deine Konstanz zahlt sich aus." };
  if (days >= 7) return { title: "1 Woche Streak!", message: "7 Tage am Stück — weiter so!" };
  return { title: "Streak gestartet!", message: "3 Tage in Folge — der Anfang ist gemacht!" };
}

export function StreakMilestone() {
  const streak = useStore((s) => s.streak);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const [show, setShow] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  useEffect(() => {
    if (!hasActivityToday || streak < 3) return;

    // Check if this milestone was already dismissed
    const isMilestone = MILESTONES.some((m) => m === streak);
    if (!isMilestone) return;

    const dismissedStr = localStorage.getItem(MILESTONE_DISMISSED_KEY);
    const dismissedMilestone = dismissedStr ? parseInt(dismissedStr, 10) : 0;
    if (dismissedMilestone >= streak) return;

    setShow(true);
    trackEvent("streak_milestone_shown", { streak });
  }, [streak, hasActivityToday]);

  if (!show) return null;

  const { title, message } = getMilestoneMessage(streak);

  const handleDismiss = () => {
    localStorage.setItem(MILESTONE_DISMISSED_KEY, String(streak));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-[998] flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={handleDismiss}
        >
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            className="card-glass rounded-2xl p-8 max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{title}</h3>
            <p className="text-sm text-[var(--muted)] mb-2">{message}</p>
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-orange-500 mb-6">
              <Flame className="w-6 h-6" />
              {streak} Tage
            </div>
            <Button onClick={handleDismiss} className="w-full">
              Weiter lernen
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Daily Goal Nudge ──────────────────────────────────────────── */

/**
 * Shows a small motivational nudge when user returns after missing their daily goal.
 * Only shown once per day.
 */
export function DailyGoalNudge() {
  const streak = useStore((s) => s.streak);
  const lastActiveDate = useStore((s) => s.lastActiveDate);
  const goalAchievedByDate = useStore((s) => s.goalAchievedByDate ?? {});
  const [dismissed, setDismissed] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;
  const goalAchievedToday = goalAchievedByDate[todayStr];

  // Show only if: has activity today, goal NOT achieved, streak > 0, not dismissed
  if (dismissed || !hasActivityToday || goalAchievedToday || streak < 1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/30 dark:border-blue-800/30 px-4 py-3 flex items-center gap-3 overflow-hidden"
    >
      <Zap className="w-4 h-4 text-blue-500 shrink-0" />
      <p className="text-xs text-blue-700 dark:text-blue-400 flex-1">
        Noch ein paar Fragen bis zu deinem Tagesziel — dein Streak dankt es dir!
      </p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="text-blue-300 hover:text-blue-500 transition-colors"
        aria-label="Schließen"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
