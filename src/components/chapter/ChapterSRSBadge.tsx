import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

interface ChapterSRSBadgeProps {
  chapterId: string;
  className?: string;
}

/**
 * Zeigt den SRS-Status eines Kapitels: "Beherrscht", "Wiederholung in X Tagen" oder "Fällig".
 */
export function ChapterSRSBadge({ chapterId, className }: ChapterSRSBadgeProps) {
  const progress = useStore((s) => s.userProgress[chapterId]);
  if (!progress) return null;

  const today = new Date().toISOString().split("T")[0];
  const next = progress.nextReviewDate;
  const isDue = next <= today;
  const isMastered = progress.successCount >= 5;

  const daysUntil = (() => {
    if (isDue) return 0;
    const a = new Date(today);
    const b = new Date(next);
    return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
  })();

  let label: string;
  let style: string;
  if (isMastered && !isDue) {
    label = "Status: Beherrscht";
    style = "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400";
  } else if (isDue) {
    label = "Fällig zur Wiederholung";
    style = "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400";
  } else {
    label = daysUntil === 1 ? "Wiederholung morgen" : `Wiederholung in ${daysUntil} Tagen`;
    style = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-md border border-transparent",
        style,
        className
      )}
    >
      {label}
    </span>
  );
}
