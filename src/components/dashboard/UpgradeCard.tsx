import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Brain, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePermissions } from "@/hooks/usePermissions";
import { useUsageLimits } from "@/hooks/useUsageLimits";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useAuth } from "@/hooks/useAuth";
import { trackEvent } from "@/lib/analyticsTracker";
import { startCheckout } from "@/lib/stripe";

const PREMIUM_FEATURES = [
  { icon: BookOpen, label: "5.000+ BMS-Fragen" },
  { icon: Brain, label: "Schwachstellen-Analyse" },
  { icon: Target, label: "Testsimulation" },
  { icon: BarChart3, label: "Lernplan & Prognose" },
];

/** Minimum questions answered before showing upgrade card */
const MIN_QUESTIONS_BEFORE_UPGRADE = 1;

export function UpgradeCard() {
  const { isPremium } = usePermissions();
  const { user } = useAuth();
  const limits = useUsageLimits();
  const totalAnswered = useAdaptiveStore((s) => s.profile.totalQuestionsAnswered);

  // Don't show for premium users
  if (isPremium) return null;

  // Don't show until user has answered enough questions to see value
  if (totalAnswered < MIN_QUESTIONS_BEFORE_UPGRADE) return null;

  // Show usage progress if user has started
  const hasUsage = limits.bmsQuestionsUsed > 0 || limits.kffExercisesUsed > 0;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-xl border border-[var(--accent)]/20 bg-linear-to-br from-[var(--accent)]/[0.04] to-transparent p-5 overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--text-primary)] mb-1">
            Du lernst schon gut — hol dir den vollen Zugang
          </h3>
          <p className="text-sm text-[var(--muted)] mb-3">
            {totalAnswered} Fragen beantwortet. Einmalig €29,90 für alles — kein Abo.
          </p>

          {hasUsage && (
            <div className="space-y-2 mb-4">
              {limits.bmsQuestionsLimit !== null && limits.bmsQuestionsUsed > 0 && (
                <UsageBar
                  label="BMS-Fragen"
                  used={limits.bmsQuestionsUsed}
                  limit={limits.bmsQuestionsLimit}
                />
              )}
              {limits.kffExercisesLimit !== null && limits.kffExercisesUsed > 0 && (
                <UsageBar
                  label="KFF-Übungen"
                  used={limits.kffExercisesUsed}
                  limit={limits.kffExercisesLimit}
                />
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 mb-4">
            {PREMIUM_FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                <Icon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Button
            size="sm"
            className="gap-1.5"
            onClick={() => {
              trackEvent("upgrade_card_clicked", { location: "dashboard", totalAnswered });
              const started = startCheckout({ email: user?.email ?? undefined, userId: user?.id });
              if (!started) window.location.href = "/preise";
            }}
          >
            Premium freischalten
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function UsageBar({ label, used, limit }: { label: string; used: number; limit: number }) {
  const pct = Math.min(100, Math.round((used / limit) * 100));
  const isNearLimit = pct >= 80;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-[var(--muted)]">{label}</span>
        <span className={`text-xs font-medium ${isNearLimit ? "text-amber-600 dark:text-amber-400" : "text-[var(--muted)]"}`}>
          {used}/{limit}
        </span>
      </div>
      <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${isNearLimit ? "bg-amber-500" : "bg-[var(--accent)]"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
