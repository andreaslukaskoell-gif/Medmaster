import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakFireProps {
  streak: number;
  /** true wenn der User heute schon aktiv war */
  hasActivityToday: boolean;
  className?: string;
}

/**
 * Prominentes Feuer-Icon für Daily Streak.
 * Wenn heute noch nichts getan: grau und pulsierend (Druck erzeugen).
 */
export function StreakFire({ streak, hasActivityToday, className }: StreakFireProps) {
  const isGray = !hasActivityToday;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-2xl transition-colors",
          isGray
            ? "bg-gray-200 dark:bg-gray-700 animate-pulse"
            : "bg-orange-100 dark:bg-orange-900/40"
        )}
      >
        <Flame
          className={cn(
            "w-8 h-8 transition-colors",
            isGray
              ? "text-gray-400 dark:text-gray-500"
              : "text-orange-500 dark:text-orange-400"
          )}
          fill={isGray ? "currentColor" : "currentColor"}
        />
      </div>
      <span
        className={cn(
          "text-2xl font-bold tabular-nums",
          isGray ? "text-gray-500 dark:text-gray-400" : "text-orange-600 dark:text-orange-400"
        )}
      >
        {streak}
      </span>
      <span className="text-xs text-muted">
        {hasActivityToday ? "Tage-Streak" : "Heute noch nichts"}
      </span>
    </div>
  );
}
