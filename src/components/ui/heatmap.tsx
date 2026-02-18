import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

const MEDAT_DATE = new Date(2026, 6, 3); // 3.7.26

interface HeatmapProps {
  className?: string;
}

/** Aktivitäts-Map: Key = YYYY-MM-DD, Value = Anzahl Stichworte, die an dem Tag aktualisiert wurden. */
function buildActivityMapFromStichwortStats(
  stichwortStats: Record<string, { lastPracticed: string | null }>
): Record<string, number> {
  const byDay: Record<string, number> = {};
  for (const stat of Object.values(stichwortStats)) {
    const dateStr = stat.lastPracticed;
    if (!dateStr || typeof dateStr !== "string") continue;
    const day = dateStr.split("T")[0];
    if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
      byDay[day] = (byDay[day] ?? 0) + 1;
    }
  }
  return byDay;
}

/** Farbstufen: 0 = Grau, 1–5 = Hellblau, 6–15 = Mittelblau, 15+ = Dunkelblau (Brand). */
function levelFromCount(count: number): 0 | 1 | 2 | 3 {
  if (count <= 0) return 0;
  if (count <= 5) return 1;
  if (count <= 15) return 2;
  return 3;
}

const COLORS = [
  "bg-slate-100 dark:bg-slate-800",
  "bg-sky-200 dark:bg-sky-900",
  "bg-sky-400 dark:bg-sky-700",
  "bg-primary-600 dark:bg-primary-500",
];

function toDateKey(d: Date): string {
  return d.toISOString().split("T")[0];
}

export function Heatmap({ className }: HeatmapProps) {
  const stichwortStats = useAdaptiveStore((s) => s.profile.stichwortStats);
  const activityMap = useMemo(
    () => buildActivityMapFromStichwortStats(stichwortStats),
    [stichwortStats]
  );

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    date: string;
    count: number;
    isMedAT?: boolean;
  } | null>(null);

  /** Von heute bis 3.7.26 (MedAT), in Wochen zu 7 Tagen gruppiert. Letzte Box = 3.7.26 mit MedAT-Marke. */
  const weeks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const medat = new Date(MEDAT_DATE);
    medat.setHours(0, 0, 0, 0);
    if (today > medat) {
      return [[{ date: "03.07.2026", count: 0, level: 0 as 0 | 1 | 2 | 3, key: "2026-07-03", isMedAT: true }]];
    }
    const result: { date: string; count: number; level: 0 | 1 | 2 | 3; key: string; isMedAT: boolean }[][] = [];
    let currentWeek: { date: string; count: number; level: 0 | 1 | 2 | 3; key: string; isMedAT: boolean }[] = [];
    const d = new Date(today);
    while (d <= medat) {
      const key = toDateKey(d);
      const isMedAT = key === "2026-07-03";
      const count = d <= today ? (activityMap[key] ?? 0) : 0;
      const level = levelFromCount(count);
      currentWeek.push({
        date: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }),
        count,
        level,
        key,
        isMedAT,
      });
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
      d.setDate(d.getDate() + 1);
    }
    if (currentWeek.length > 0) result.push(currentWeek);
    return result;
  }, [activityMap]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-[3px] overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div
                key={di}
                className={cn(
                  "w-3 h-3 rounded-sm cursor-pointer relative",
                  day.isMedAT
                    ? "bg-red-500 dark:bg-red-600 ring-2 ring-red-600 dark:ring-red-500 ring-offset-1 dark:ring-offset-slate-900"
                    : COLORS[day.level]
                )}
                title={day.isMedAT ? "MedAT 03.07.2026" : undefined}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    x: rect.left,
                    y: rect.top - 40,
                    date: day.date,
                    count: day.count,
                    isMedAT: day.isMedAT,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-1 text-xs text-muted">
        <span>Heute</span>
        <span className="font-medium text-primary-600 dark:text-primary-400">MedAT 03.07.26</span>
      </div>
      {tooltip && (
        <div
          className="fixed z-50 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.isMedAT ? (
            <>MedAT — {tooltip.date}</>
          ) : (
            <>
              {tooltip.date}: {tooltip.count} Thema{tooltip.count !== 1 ? "n" : ""} gelernt
            </>
          )}
        </div>
      )}
      <div className="flex items-center gap-2 mt-1 text-xs text-muted">
        <span>Weniger</span>
        {COLORS.map((c, i) => (
          <div key={i} className={cn("w-3 h-3 rounded-sm", c)} />
        ))}
        <span>Mehr</span>
      </div>
    </div>
  );
}
