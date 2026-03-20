import { useState } from "react";
import { RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKFFStats } from "@/hooks/useKFFStats";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SUBTEST_COLORS: Record<string, string> = {
  zahlenfolgen: "#3b82f6",
  implikationen: "#8b5cf6",
  wortfluessigkeit: "#f59e0b",
  figuren: "#ec4899",
  gedaechtnis: "#10b981",
};

function relativeDate(iso: string | null): string {
  if (!iso) return "Noch nicht geübt";
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "heute";
  if (days === 1) return "gestern";
  if (days < 7) return `vor ${days} Tagen`;
  if (days < 30) return `vor ${Math.floor(days / 7)} Wo.`;
  return `vor ${Math.floor(days / 30)} Mon.`;
}

function accuracyColor(pct: number): string {
  if (pct >= 70) return "text-emerald-500";
  if (pct >= 40) return "text-amber-500";
  return "text-red-400";
}

// Mini sparkline SVG — last N session accuracies as a polyline
function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (data.length < 2) return null;
  const w = 40;
  const h = 16;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${(i * step).toFixed(1)},${(h - (v / 100) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={w} height={h} className="inline-block align-middle ml-2 shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function KFFStatsSection() {
  const { subtests, overallAccuracy, totalSeriousSessions, resetStats } = useKFFStats();
  const [expanded, setExpanded] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const hasPracticed = subtests.some((s) => s.sessionsCount > 0);

  return (
    <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)]">
      {/* Collapsible header */}
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left cursor-pointer hover:bg-[var(--background)]/50 rounded-xl transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">Dein KFF-Fortschritt</h3>
          {hasPracticed && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                overallAccuracy >= 70
                  ? "bg-emerald-500/10 text-emerald-500"
                  : overallAccuracy >= 40
                    ? "bg-amber-500/10 text-amber-500"
                    : "bg-red-400/10 text-red-400"
              }`}
            >
              {overallAccuracy}% gesamt
            </span>
          )}
          {hasPracticed && (
            <span className="text-xs text-[var(--muted)]">
              {totalSeriousSessions} {totalSeriousSessions === 1 ? "Session" : "Sessions"}
            </span>
          )}
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-[var(--muted)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--muted)]" />
        )}
      </button>

      {/* Expandable body */}
      {expanded && (
        <div className="px-5 pb-4">
          {/* Subtest rows */}
          <div className="divide-y divide-[var(--border)]">
            {subtests.map((s) => {
              const color = SUBTEST_COLORS[s.subtest] ?? "#6b7280";
              const practiced = s.sessionsCount > 0;
              return (
                <div key={s.subtest} className="flex items-center gap-4 py-2.5 text-sm">
                  {/* Color dot + label */}
                  <div className="flex items-center gap-2 w-48 shrink-0">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                    <span className="text-[var(--text-primary)] truncate">{s.label}</span>
                  </div>

                  {practiced ? (
                    <>
                      {/* Accuracy */}
                      <span className={`font-bold w-14 text-right ${accuracyColor(s.accuracy)}`}>
                        {s.accuracy}%
                      </span>

                      {/* Tasks */}
                      <span className="text-xs text-[var(--muted)] w-24">
                        {s.totalTasks} Aufgaben
                      </span>

                      {/* Sessions */}
                      <span className="text-xs text-[var(--muted)] w-20">
                        {s.sessionsCount} {s.sessionsCount === 1 ? "Session" : "Sess."}
                      </span>

                      {/* Last practiced */}
                      <span className="text-xs text-[var(--muted)] w-24">
                        {relativeDate(s.lastPracticed)}
                      </span>

                      {/* Sparkline */}
                      <Sparkline data={s.trend} color={color} />
                    </>
                  ) : (
                    <span className="text-xs text-[var(--muted)] italic">Noch nicht geübt</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Reset footer */}
          <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-end gap-2">
            {confirmReset ? (
              <>
                <span className="text-xs text-[var(--muted)]">
                  Möchtest du die KFF-Statistik zurücksetzen? Deine Lernhistorie wird gelöscht.
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setConfirmReset(false)}
                >
                  Abbrechen
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-red-400 border-red-400/30 hover:bg-red-400/10"
                  onClick={() => {
                    resetStats();
                    setConfirmReset(false);
                  }}
                >
                  Zurücksetzen
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="text-xs text-[var(--muted)] gap-1.5"
                onClick={() => setConfirmReset(true)}
              >
                <RotateCcw className="w-3 h-3" />
                Statistik zurücksetzen
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
