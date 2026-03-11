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
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6 text-[var(--accent)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-[var(--text-primary)]">
            Du hast {dueCount} {dueCount === 1 ? "Thema" : "Themen"} zum Wiederholen!
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Klicken, um fällige Kapitel anzuzeigen
          </p>
        </div>
      </div>
    </Link>
  );
}
