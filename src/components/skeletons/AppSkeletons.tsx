import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Gemeinsame Skeleton-Basis: Shimmer + optional Pulsieren */
function SkeletonBox({
  className,
  pulse = true,
  ...props
}: ComponentProps<"div"> & { pulse?: boolean }) {
  return (
    <div
      role="presentation"
      aria-hidden
      className={cn("skeleton-shimmer rounded-md", pulse && "animate-pulse", className)}
      {...props}
    />
  );
}

// ============ XP-Fortschritts-Kreis (pulsierender Ring) ============
/** Exakt gleiche Abmessungen wie ProgressRing (Dashboard: size 72, stroke 6; klein: 48, 4). */
export function XpProgressRingSkeleton({
  size = 72,
  stroke = 6,
  className,
}: {
  size?: number;
  stroke?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full shrink-0 animate-pulse border border-slate-300 dark:border-slate-600 bg-transparent",
        className
      )}
      style={{ width: size, height: size, borderWidth: stroke }}
      aria-hidden
    />
  );
}

// ============ Leaderboard-Liste (exakte Form wie Leaderboard) ============
const LEADERBOARD_ROW_HEIGHT = "py-3";
const TOP_LIST_SIZE = 10;

/** Tabs + Relativ-Ranking-Bar + Liste mit 10 Zeilen; gleiche Abmessungen wie Leaderboard. */
export function LeaderboardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)} aria-busy="true">
      {/* Tabs: 3 Buttons wie im echten Leaderboard */}
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3].map((i) => (
          <SkeletonBox key={i} className="h-10 w-24 rounded-xl" />
        ))}
      </div>
      {/* Relativ-Ranking-Bar */}
      <SkeletonBox className="h-16 w-full rounded-xl" />
      {/* Liste: Midnight-Blue-Container + 10 Rows (exakt wie LeaderboardRow: px-4 py-3, Avatar 36px, etc.) */}
      <div
        className={cn(
          "rounded-2xl overflow-hidden border border-white/20 dark:border-white/10",
          "bg-[#0f172a]/80 dark:bg-[#0f172a]/90 backdrop-blur-xl"
        )}
      >
        <div className="divide-y divide-white/10">
          {Array.from({ length: TOP_LIST_SIZE }).map((_, i) => (
            <div key={i} className={cn("flex items-center gap-3 px-4", LEADERBOARD_ROW_HEIGHT)}>
              <SkeletonBox className="h-5 w-10 shrink-0 rounded" />
              <SkeletonBox className="h-9 w-9 shrink-0 rounded-full" />
              <div className="flex-1 min-w-0 space-y-1.5">
                <SkeletonBox className="h-4 w-28 rounded" />
                <div className="flex gap-2">
                  <SkeletonBox className="h-3 w-12 rounded" />
                  <SkeletonBox className="h-3 w-3 rounded" />
                  <SkeletonBox className="h-3 w-3 rounded" />
                  <SkeletonBox className="h-3 w-3 rounded" />
                </div>
              </div>
              <SkeletonBox className="h-4 w-14 shrink-0 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ Schwachstellen-/Analyse-Radar (Sechseck, pulsierend) ============
/** Sechseckiger Platzhalter für Radar-Chart; Höhe 350px wie Analysis ResponsiveContainer. */
export function RadarHexagonSkeleton({
  height = 350,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const cx = 50;
  const cy = 50;
  const r = 42;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <div
      className={cn("rounded-xl overflow-hidden bg-slate-900/50 skeleton-shimmer", className)}
      style={{ width: "100%", height }}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full block"
      >
        <polygon
          points={points}
          fill="rgba(15, 23, 42, 0.6)"
          stroke="rgba(51, 65, 85, 0.9)"
          strokeWidth="2"
        />
        {[0.33, 0.66].map((scale) => (
          <polygon
            key={scale}
            points={Array.from({ length: 6 }, (_, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              return `${cx + r * scale * Math.cos(angle)},${cy + r * scale * Math.sin(angle)}`;
            }).join(" ")}
            fill="none"
            stroke="rgba(51, 65, 85, 0.5)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}
