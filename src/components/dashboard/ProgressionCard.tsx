import { Progress } from "@/components/ui/progress";
import {
  getLevelFromXP,
  getLevelProgressPercent,
  getLevelName,
  getXPInCurrentLevel,
  getXPRequiredForNextLevel,
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
  const xpInLevel = getXPInCurrentLevel(xp);
  const xpRequiredForNext = getXPRequiredForNextLevel(xp);

  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm p-4 flex flex-col gap-3",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-2xl font-bold text-[var(--text-primary)] tabular-nums">
            {xp.toLocaleString()} MedPoints
          </p>
          <p className="text-sm font-medium text-[var(--accent)]">{levelName}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-bold text-[var(--text-secondary)]">Level {level}</span>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-[var(--muted)]">
          <span>Zum nächsten Level</span>
          <span>
            {xpInLevel} / {xpRequiredForNext}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}
