import { useSimulationHistory } from "@/hooks/useSimulationHistory";
import { Clock, Trophy, TrendingUp, TrendingDown, Minus, BarChart3, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("de-AT", { day: "numeric", month: "short", year: "numeric" });
}

function scoreColor(pct: number): string {
  if (pct >= 70) return "text-green-600 dark:text-green-400";
  if (pct >= 40) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function barColor(pct: number): string {
  if (pct >= 70) return "bg-green-500";
  if (pct >= 40) return "bg-amber-500";
  return "bg-red-500";
}

function trendLabel(trend: "improving" | "declining" | "stable" | "insufficient"): {
  text: string;
  className: string;
  icon: typeof TrendingUp;
} {
  switch (trend) {
    case "improving":
      return {
        text: "Aufwärtstrend",
        className:
          "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
        icon: TrendingUp,
      };
    case "declining":
      return {
        text: "Abwärtstrend",
        className:
          "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
        icon: TrendingDown,
      };
    case "stable":
      return {
        text: "Stabil",
        className:
          "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        icon: Minus,
      };
    case "insufficient":
      return {
        text: "Zu wenig Daten",
        className: "bg-[var(--border)]/50 text-[var(--muted)] border-[var(--border)]",
        icon: Minus,
      };
  }
}

export function SimulationHistory() {
  const { entries, totalSimulations, bestScore, averageScore, trend } = useSimulationHistory();

  if (totalSimulations === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-16 space-y-4">
        <div className="w-16 h-16 mx-auto bg-[var(--border)]/50 rounded-2xl flex items-center justify-center">
          <BarChart3 className="w-8 h-8 text-[var(--muted)]" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Noch keine Simulationen absolviert
        </h3>
        <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
          Starte deine erste Testsimulation, um deinen Fortschritt hier zu verfolgen. Jede
          abgeschlossene Simulation wird automatisch aufgezeichnet.
        </p>
        <Link to="/simulation">
          <Button variant="premium" className="mt-2">
            <Play className="w-4 h-4 mr-1" /> Erste Simulation starten
          </Button>
        </Link>
      </div>
    );
  }

  const trendInfo = trendLabel(trend);
  const TrendIcon = trendInfo.icon;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Summary bar */}
      <div className="grid grid-cols-4 gap-4">
        <div className="card-glass p-4 text-center">
          <p className="text-2xl font-bold text-[var(--text-primary)]">{totalSimulations}</p>
          <p className="text-xs text-[var(--muted)] mt-0.5">Simulationen</p>
        </div>

        <div className="card-glass p-4 text-center">
          {bestScore ? (
            <>
              <p className="text-2xl font-bold text-[var(--accent)]/60">{bestScore.percentage}%</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">
                Bestwert ({formatDate(bestScore.date)})
              </p>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-[var(--muted)]">--</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">Bestwert</p>
            </>
          )}
        </div>

        <div className="card-glass p-4 text-center">
          <p className="text-2xl font-bold text-[var(--text-primary)]">{averageScore}%</p>
          <p className="text-xs text-[var(--muted)] mt-0.5">Durchschnitt</p>
        </div>

        <div className="card-glass p-4 flex flex-col items-center justify-center">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${trendInfo.className}`}
          >
            <TrendIcon className="w-3.5 h-3.5" />
            {trendInfo.text}
          </div>
          <p className="text-xs text-[var(--muted)] mt-1">Trend</p>
        </div>
      </div>

      {/* History list */}
      <div className="card-glass p-5 space-y-1">
        <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4" /> Alle Simulationen
        </h3>

        <div className="space-y-2">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 py-3 px-4 rounded-lg bg-[var(--border)]/20 hover:bg-[var(--border)]/40 transition-colors"
            >
              {/* Date */}
              <div className="w-28 shrink-0">
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {formatDate(entry.date)}
                </p>
              </div>

              {/* Type label */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                  {entry.label}
                </p>
                {entry.sections && entry.sections.length > 0 && (
                  <div className="flex gap-2 mt-1">
                    {entry.sections.map((sec) => {
                      const secPct =
                        sec.maxScore > 0 ? Math.round((sec.score / sec.maxScore) * 100) : 0;
                      return (
                        <span
                          key={sec.name}
                          className={`text-[10px] font-medium ${scoreColor(secPct)}`}
                        >
                          {sec.name}: {secPct}%
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Score bar */}
              <div className="w-36 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[var(--border)] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${barColor(entry.percentage)}`}
                      style={{ width: `${entry.percentage}%` }}
                    />
                  </div>
                  <span
                    className={`text-sm font-bold w-10 text-right ${scoreColor(entry.percentage)}`}
                  >
                    {entry.percentage}%
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="w-16 shrink-0 text-right">
                {entry.durationMinutes > 0 ? (
                  <span className="text-xs text-[var(--muted)]">{entry.durationMinutes} Min</span>
                ) : (
                  <span className="text-xs text-[var(--muted)]">--</span>
                )}
              </div>

              {/* Score icon */}
              <div className="w-5 shrink-0">
                {entry.percentage >= 70 ? <Trophy className="w-4 h-4 text-green-500" /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
