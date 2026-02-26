import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { buildUnifiedActivityMap } from "@/lib/heatmapActivity";

const MEDAT_DATE = new Date(2026, 6, 3); // 3.7.26
const HEATMAP_START_DATE = new Date(2026, 1, 26); // 26.02.26 – erster Tag

interface HeatmapProps {
  className?: string;
}

/** Farbstufen: 0 = Grau, 1–10 = Hellblau, 11–25 = Mittelblau, 26+ = Dunkelblau (alle Bereiche: BMS, KFF, TV, SEK, Stichworte). */
function levelFromCount(count: number): 0 | 1 | 2 | 3 {
  if (count <= 0) return 0;
  if (count <= 10) return 1;
  if (count <= 25) return 2;
  return 3;
}

const COLORS = [
  "bg-slate-100 dark:bg-slate-800",
  "bg-sky-200 dark:bg-sky-900",
  "bg-sky-400 dark:bg-sky-700",
  "bg-primary-600 dark:bg-primary-500",
];

function toDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const MEDAT_KEY = "2026-07-03";

export function Heatmap({ className }: HeatmapProps) {
  const quizResults = useStore((s) => s.quizResults ?? []);
  const activityLog = useStore((s) => s.activityLog ?? {});
  const stichwortStats = useAdaptiveStore((s) => s.profile.stichwortStats);
  const activityMap = useMemo(
    () =>
      buildUnifiedActivityMap({
        quizResults,
        activityLog,
        stichwortStats,
      }),
    [quizResults, activityLog, stichwortStats]
  );

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    date: string;
    count: number;
    isMedAT?: boolean;
  } | null>(null);

  /** Von 26.02.26 bis 3.7.26 (MedAT), in Wochen zu 7 Tagen. Erster Tag = 26.02.26, 3.7.26 rot. */
  const weeks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(HEATMAP_START_DATE);
    start.setHours(0, 0, 0, 0);
    const medat = new Date(MEDAT_DATE);
    medat.setHours(0, 0, 0, 0);
    const result: {
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3;
      key: string;
      isMedAT: boolean;
    }[][] = [];
    let currentWeek: {
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3;
      key: string;
      isMedAT: boolean;
    }[] = [];
    const d = new Date(start);
    while (d <= medat) {
      const key = toDateKey(d);
      const isMedAT = key === MEDAT_KEY;
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
                    ? "bg-red-600 dark:bg-red-500 ring-2 ring-red-700 dark:ring-red-400"
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
        <span>26.02.26</span>
        <span className="font-medium text-red-600 dark:text-red-400">MedAT 03.07.26</span>
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
              {tooltip.date}: {tooltip.count} Aktivität{tooltip.count !== 1 ? "en" : ""}
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
