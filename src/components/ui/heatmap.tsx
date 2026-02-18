import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

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
  } | null>(null);

  const weeks = useMemo(() => {
    const result: { date: string; count: number; level: 0 | 1 | 2 | 3; key: string }[][] = [];
    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - 364);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    let currentWeek: { date: string; count: number; level: 0 | 1 | 2 | 3; key: string }[] = [];
    const d = new Date(startDate);

    while (d <= now) {
      const key = d.toISOString().split("T")[0];
      const count = activityMap[key] ?? 0;
      const level = levelFromCount(count);

      currentWeek.push({
        date: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }),
        count,
        level,
        key,
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
        {weeks.slice(-52).map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div
                key={di}
                className={cn("w-3 h-3 rounded-sm cursor-pointer", COLORS[day.level])}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    x: rect.left,
                    y: rect.top - 40,
                    date: day.date,
                    count: day.count,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
              />
            ))}
          </div>
        ))}
      </div>
      {tooltip && (
        <div
          className="fixed z-50 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.date}: {tooltip.count} Thema{tooltip.count !== 1 ? "n" : ""} gelernt
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
