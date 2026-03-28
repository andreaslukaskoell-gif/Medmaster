import { Link } from "react-router-dom";
import { Activity, ArrowRight } from "lucide-react";
import { useProgressAnalytics } from "@/hooks/useProgressAnalytics";
import { cn } from "@/lib/utils";

const TYPE_LABEL: Record<string, string> = {
  bms: "BMS",
  kff: "KFF",
  tv: "TV",
  sek: "SEK",
  simulation: "Simulation",
};

const TYPE_COLOR: Record<string, { text: string; bg: string }> = {
  bms: {
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  kff: { text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
  tv: { text: "text-purple-700 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
  sek: { text: "text-rose-700 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30" },
  simulation: {
    text: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30",
  },
};

function pctColor(pct: number): string {
  if (pct > 70) return "text-emerald-600 dark:text-emerald-400";
  if (pct >= 40) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function parseDate(raw: string): Date {
  // Handle German "DD.M.YYYY" format
  const parts = raw.split(".");
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00`);
  }
  return new Date(raw);
}

function relativeDate(raw: string): string {
  const now = new Date();
  const d = parseDate(raw);
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "Gerade eben";
  if (diffMin < 60) return `vor ${diffMin} Min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `vor ${diffH} Std`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return "Gestern";
  if (diffD < 7) return `vor ${diffD} Tagen`;
  return d.toLocaleDateString("de-AT", { day: "numeric", month: "short" });
}

export function RecentActivityWidget() {
  const { recentSessions } = useProgressAnalytics();
  const last3 = recentSessions.filter(Boolean).slice(0, 3);

  return (
    <div className="card-glass p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-[var(--accent)]" />
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">Letzte Aktivität</h3>
      </div>

      {last3.length > 0 ? (
        <ul className="space-y-2 flex-1">
          {last3.map((s, idx) => {
            const colors = TYPE_COLOR[s.type] ?? TYPE_COLOR.bms;
            return (
              <li key={`${s.id}-${idx}`} className="flex items-center gap-2 text-sm">
                <span
                  className={cn(
                    "shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded",
                    colors.text,
                    colors.bg
                  )}
                >
                  {TYPE_LABEL[s.type] ?? (s.type || "BMS").toUpperCase?.() ?? "BMS"}
                </span>
                <span className="flex-1 text-[var(--text-secondary)] truncate">
                  {s.score}/{s.total}
                </span>
                <span className={cn("shrink-0 text-xs font-semibold", pctColor(s.percentage))}>
                  {s.percentage} %
                </span>
                <span className="shrink-0 text-[10px] text-[var(--muted)]">
                  {relativeDate(s.date)}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-xs text-[var(--muted)] flex-1 flex items-center">
          Noch keine Aktivität — starte jetzt!
        </p>
      )}

      <Link
        to="/fortschritt"
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
      >
        Alle Ergebnisse
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
