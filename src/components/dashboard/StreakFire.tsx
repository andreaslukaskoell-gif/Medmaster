import { useEffect, useRef, useState } from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

/** Streak-Tage → visuelles Level (0 = aus/grau, 1–4 = zunehmendes Flickern/Glow) */
// eslint-disable-next-line react-refresh/only-export-components -- shared helper used by components below
export function getStreakLevel(streakDays: number, hasActivityToday: boolean): 0 | 1 | 2 | 3 | 4 {
  if (!hasActivityToday || streakDays <= 0) return 0;
  if (streakDays <= 3) return 1;
  if (streakDays <= 7) return 2;
  if (streakDays <= 14) return 3;
  return 4;
}

/** Farben pro Level (Navy-UI, Gold/Amber) */
const levelColors = {
  0: "text-[var(--muted)]",
  1: "text-orange-500 dark:text-orange-400",
  2: "text-orange-500 dark:text-orange-400",
  3: "text-amber-500 dark:text-amber-400",
  4: "text-amber-400 dark:text-amber-300",
} as const;

type StreakFlameIconProps = {
  streak: number;
  hasActivityToday: boolean;
  /** Nur die Flamme (für Kachel/TopBar), keine Zahl/Label */
  iconOnly?: boolean;
  className?: string;
  /** Größe: "sm" | "md" | "lg" oder beliebige Tailwind-Klassen (z. B. w-5 h-5) */
  size?: "sm" | "md" | "lg" | "inherit";
};

/**
 * Animierte Streak-Flamme (Inline-SVG). Flicker/Glow steigen mit streakDays.
 * Navy-UI, Gold/Amber-Akzente. Animation nur wenn sichtbar (IntersectionObserver).
 */
export function StreakFlameIcon({
  streak,
  hasActivityToday,
  className,
  size = "inherit",
}: StreakFlameIconProps) {
  const level = getStreakLevel(streak, hasActivityToday);
  const [ignite, setIgnite] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevStreakRef = useRef(streak);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (streak > prevStreakRef.current && level >= 1) {
      const t0 = setTimeout(() => setIgnite(true), 0);
      const t = setTimeout(() => setIgnite(false), 650);
      return () => {
        clearTimeout(t0);
        clearTimeout(t);
      };
    }
    prevStreakRef.current = streak;
  }, [streak, level]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), {
      threshold: 0.1,
      rootMargin: "20px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sizeClass =
    size === "sm" ? "w-5 h-5" : size === "md" ? "w-8 h-8" : size === "lg" ? "w-11 h-11" : "";

  /* Bei Streak > 0 immer Flackern (mind. L1), auch ohne Aktivität heute – gleicher Look wie Dashboard */
  const animationLevel = level >= 1 ? level : streak > 0 ? 1 : 0;
  const animateClass = isVisible && animationLevel >= 1 ? `streak-l${animationLevel}` : "streak-l0";
  const colorClass = levelColors[level];

  return (
    <span
      ref={wrapRef}
      className={cn(
        "streak-flame-wrap inline-flex items-center justify-center shrink-0 transition-colors duration-300",
        colorClass,
        animateClass,
        ignite && "streak-ignite",
        sizeClass,
        className
      )}
      aria-hidden
    >
      <span className="streak-flame-inner inline-flex items-center justify-center w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:block">
        <Flame
          className="streak-flame-main"
          strokeWidth={1.5}
          fill="currentColor"
          stroke="currentColor"
          aria-label={level === 0 ? "Kein Streak" : `${streak} Tage Streak`}
        />
      </span>
    </span>
  );
}

interface StreakFireProps {
  streak: number;
  hasActivityToday: boolean;
  className?: string;
}

/**
 * Prominentes Feuer-Icon für Daily Streak (Karte: Flamme + Zahl + Label).
 * Animierte Flamme mit level-abhängigem Flickern/Glow.
 */
export function StreakFire({ streak, hasActivityToday, className }: StreakFireProps) {
  const level = getStreakLevel(streak, hasActivityToday);
  const isGray = !hasActivityToday || level === 0;
  const colorClass = levelColors[level];

  return (
    <div className={cn("flex flex-col items-center justify-center gap-1", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-2xl transition-colors",
          isGray ? "bg-gray-200 dark:bg-gray-700" : "bg-orange-100/80 dark:bg-orange-900/30"
        )}
      >
        <StreakFlameIcon
          streak={streak}
          hasActivityToday={hasActivityToday}
          iconOnly
          size="md"
          className={colorClass}
        />
      </div>
      <span
        className={cn(
          "text-2xl font-bold tabular-nums",
          isGray ? "text-[var(--muted)]" : "text-orange-600 dark:text-orange-400"
        )}
      >
        {streak}
      </span>
      <span className="text-xs text-muted">
        {hasActivityToday ? "Tage-Streak" : "Heute noch nichts"}
      </span>
    </div>
  );
}
