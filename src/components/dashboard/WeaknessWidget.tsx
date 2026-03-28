import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useProgressAnalytics } from "@/hooks/useProgressAnalytics";
import { cn } from "@/lib/utils";

const FACH_LABEL: Record<string, string> = {
  biologie: "Bio",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathe",
};

const FACH_ACCENT: Record<string, string> = {
  biologie: "var(--accent-bio)",
  chemie: "var(--accent-chem)",
  physik: "var(--accent-phys)",
  mathematik: "var(--accent-math)",
};

function accuracyColor(rate: number): string {
  if (rate > 70) return "text-emerald-600 dark:text-emerald-400";
  if (rate >= 40) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function accuracyBg(rate: number): string {
  if (rate > 70) return "bg-emerald-100 dark:bg-emerald-900/30";
  if (rate >= 40) return "bg-amber-100 dark:bg-amber-900/30";
  return "bg-red-100 dark:bg-red-900/30";
}

export function WeaknessWidget() {
  const { weakTopics } = useProgressAnalytics();
  const top3 = weakTopics.slice(0, 3);

  return (
    <div className="card-glass p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">Schwachstellen</h3>
      </div>

      {top3.length > 0 ? (
        <ul className="space-y-2 flex-1">
          {top3.map((t) => (
            <li key={`${t.fach}-${t.topic}`} className="flex items-center gap-2 text-sm">
              <span
                className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: `color-mix(in srgb, ${FACH_ACCENT[t.fach] ?? "var(--accent)"} 12%, transparent)`,
                  color: FACH_ACCENT[t.fach] ?? "var(--accent)",
                }}
              >
                {FACH_LABEL[t.fach] ?? t.fach}
              </span>
              <span className="flex-1 truncate text-[var(--text-secondary)]">{t.topic}</span>
              <span
                className={cn(
                  "shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded",
                  accuracyColor(t.successRate),
                  accuracyBg(t.successRate)
                )}
              >
                {Math.round(t.successRate)} %
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-[var(--muted)] flex-1 flex items-center">
          Noch keine Schwachstellen erkannt — beantworte mehr Fragen!
        </p>
      )}

      <Link
        to="/fragen-trainer"
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
      >
        Schwachstellen trainieren
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
