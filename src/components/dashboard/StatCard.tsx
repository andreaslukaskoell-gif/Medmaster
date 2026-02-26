import { TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLevelFromXP } from "@/lib/progression";

const MEDICAL_BLUE = "#0055ff";

interface StatCardProps {
  xp: number;
  level: number;
  /** Optional label override */
  label?: string;
  className?: string;
}

/**
 * Displays XP and level in a compact card. Level is derived from XP via progression if not provided.
 */
export function StatCard({ xp, level, label, className }: StatCardProps) {
  const displayLevel = level >= 1 ? level : getLevelFromXP(xp);

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-4 flex items-center gap-3",
        className
      )}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${MEDICAL_BLUE}20` }}
      >
        <TrendingUp className="w-6 h-6" style={{ color: MEDICAL_BLUE }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 tabular-nums">
          {xp.toLocaleString()} XP
        </p>
        <p className="text-xs text-muted flex items-center gap-1">
          <Zap className="w-3.5 h-3.5" style={{ color: MEDICAL_BLUE }} />
          {label ?? "Level"} {displayLevel}
        </p>
      </div>
    </div>
  );
}
