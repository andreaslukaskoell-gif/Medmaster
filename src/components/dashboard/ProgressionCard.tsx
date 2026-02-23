import { Progress } from "@/components/ui/progress";
import {
  getLevelFromXP,
  getLevelProgressPercent,
  getLevelName,
  XP_PER_LEVEL,
} from "@/lib/progression";
import { cn } from "@/lib/utils";

interface ProgressionCardProps {
  xp: number;
  className?: string;
}

/**
 * MedPoints (XP) + Fortschrittsbalken zum nächsten Level mit Karrieretitel.
 */
export function ProgressionCard({ xp, className }: ProgressionCardProps) {
  const level = getLevelFromXP(xp);
  const progress = getLevelProgressPercent(xp);
  const levelName = getLevelName(level);
  const xpInLevel = xp <= 0 ? 0 : xp % XP_PER_LEVEL;

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-4 flex flex-col gap-3",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 tabular-nums">
            {xp.toLocaleString()} MedPoints
          </p>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{levelName}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-bold text-gray-700 dark:text-gray-300">Level {level}</span>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted">
          <span>Zum nächsten Level</span>
          <span>
            {xpInLevel} / {XP_PER_LEVEL}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}
