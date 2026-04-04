import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Brain, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePermissions } from "@/hooks/usePermissions";
import { useUsageLimits } from "@/hooks/useUsageLimits";
import { trackEvent } from "@/lib/analyticsTracker";

const PREMIUM_FEATURES = [
  { icon: BookOpen, label: "5.000+ BMS-Fragen" },
  { icon: Brain, label: "Schwachstellen-Analyse" },
  { icon: Target, label: "Testsimulation" },
  { icon: BarChart3, label: "Lernplan & Prognose" },
];

export function UpgradeCard() {
  const { isPremium } = usePermissions();
  const limits = useUsageLimits();

  // Don't show for premium users
  if (isPremium) return null;

  // Show usage progress if user has started
  const hasUsage = limits.bmsQuestionsUsed > 0 || limits.kffExercisesUsed > 0;

  return (
    <div className="rounded-xl border border-[var(--accent)]/20 bg-linear-to-br from-[var(--accent)]/[0.04] to-transparent p-5 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--text-primary)] mb-1">
            Hol dir den vollen Zugang
          </h3>
          <p className="text-sm text-[var(--muted)] mb-3">
            Einmalig €29,90 — kein Abo, kein Stress.
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

          <Link
            to="/preise"
            onClick={() => trackEvent("upgrade_card_clicked", { location: "dashboard" })}
          >
            <Button size="sm" className="gap-1.5">
              Premium freischalten
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
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
