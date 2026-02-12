import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeatmapProps {
  data: Record<string, { minutes: number; questions: number }>;
  className?: string;
}

export function Heatmap({ data, className }: HeatmapProps) {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    date: string;
    minutes: number;
    questions: number;
  } | null>(null);

  const weeks: { date: string; level: number; minutes: number; questions: number }[][] = [];
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - 364);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  let currentWeek: typeof weeks[number] = [];
  const d = new Date(startDate);

  while (d <= now) {
    const key = d.toISOString().split("T")[0];
    const entry = data[key];
    const minutes = entry?.minutes || 0;
    const questions = entry?.questions || 0;
    let level = 0;
    if (minutes > 0) level = 1;
    if (minutes >= 30) level = 2;
    if (minutes >= 60) level = 3;
    if (minutes >= 90) level = 4;

    currentWeek.push({
      date: d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }),
      level,
      minutes,
      questions,
    });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    d.setDate(d.getDate() + 1);
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);

  const colors = [
    "bg-gray-100 dark:bg-gray-800",
    "bg-primary-200 dark:bg-primary-900",
    "bg-primary-400 dark:bg-primary-700",
    "bg-primary-600 dark:bg-primary-500",
    "bg-primary-800 dark:bg-primary-400",
  ];

  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-[3px] overflow-x-auto pb-2">
        {weeks.slice(-52).map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div
                key={di}
                className={cn("w-3 h-3 rounded-sm cursor-pointer", colors[day.level])}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    x: rect.left,
                    y: rect.top - 40,
                    date: day.date,
                    minutes: day.minutes,
                    questions: day.questions,
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
          {tooltip.date}: {tooltip.minutes} Min, {tooltip.questions} Fragen
        </div>
      )}
      <div className="flex items-center gap-2 mt-1 text-xs text-muted">
        <span>Weniger</span>
        {colors.map((c, i) => (
          <div key={i} className={cn("w-3 h-3 rounded-sm", c)} />
        ))}
        <span>Mehr</span>
      </div>
    </div>
  );
}
