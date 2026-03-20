import { Link } from "react-router-dom";
import { CalendarClock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useDailyPlan } from "@/hooks/useDailyPlan";
import { cn } from "@/lib/utils";

export function DailyPlanWidget() {
  const { plan, tierLabel, completionProgress } = useDailyPlan();

  // Build flat list of plan items with labels and routes
  const items: { id: string; label: string; to: string }[] = [];
  for (const ch of plan.bmsRead) {
    items.push({
      id: `read-${ch.subchapterId ?? ch.chapterId}`,
      label: `Lesen: ${ch.title}`,
      to: ch.path ?? "/bms",
    });
  }
  for (const ch of plan.bmsReview) {
    items.push({
      id: `review-${ch.subchapterId ?? ch.chapterId}`,
      label: `Wiederholen: ${ch.title}`,
      to: ch.path ?? "/bms",
    });
  }
  for (const q of plan.bmsQuestions) {
    items.push({ id: `q-${q.fach}`, label: q.label, to: "/fragen-trainer" });
  }
  for (const t of plan.kffTasks) {
    items.push({ id: `kff-${t.domain}`, label: t.label, to: "/kff" });
  }
  if (plan.tvTexts > 0) {
    items.push({ id: "tv", label: `TV: ${plan.tvTexts} Text(e)`, to: "/tv" });
  }
  for (const s of plan.sekTasks) {
    items.push({ id: `sek-${s.domain}`, label: s.label, to: "/sek" });
  }

  const top3 = items.slice(0, 3);
  const { done, total, percentage } = completionProgress;

  return (
    <div className="card-glass p-5 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <CalendarClock className="w-4 h-4 text-[var(--accent)]" />
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">Tagesplan</h3>
        <span className="ml-auto text-xs text-[var(--muted)]">{tierLabel.label}</span>
      </div>

      {/* Progress summary */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs font-medium text-[var(--text-secondary)] whitespace-nowrap">
          {done} von {total} erledigt
        </span>
      </div>

      {/* Top 3 items */}
      {top3.length > 0 ? (
        <ul className="space-y-1.5 flex-1">
          {top3.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] transition-colors"
              >
                <CheckCircle2 className={cn("w-3.5 h-3.5 shrink-0", "text-[var(--border)]")} />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-[var(--muted)] flex-1 flex items-center">
          Kein Lernplan konfiguriert.
        </p>
      )}

      {/* CTA */}
      <Link
        to="/lernplan"
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
      >
        Zum Lernplan
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
