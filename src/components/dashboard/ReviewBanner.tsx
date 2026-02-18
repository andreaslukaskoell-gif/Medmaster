import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { useStore } from "@/store/useStore";

/**
 * Zeigt an, wie viele Kapitel fällig zur Wiederholung sind (Leitner-SRS).
 */
export function ReviewBanner() {
  const dueCount = useStore((s) => s.getDueChapterIds().length);
  if (dueCount === 0) return null;
  return (
    <Link to="/bms?filter=due">
      <div className="rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50/60 dark:bg-primary-900/20 p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-primary-900 dark:text-primary-100">
            Du hast {dueCount} {dueCount === 1 ? "Thema" : "Themen"} zum Wiederholen!
          </p>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Klicken, um fällige Kapitel anzuzeigen
          </p>
        </div>
      </div>
    </Link>
  );
}
