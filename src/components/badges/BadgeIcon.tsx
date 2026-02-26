import {
  Trophy,
  HelpCircle,
  BookOpen,
  Flame,
  FlameKindling,
  Sparkles,
  Crown,
  Hash,
  Route,
  Award,
  Medal,
  CalendarCheck,
  Target,
  CircleDot,
  CircleCheck,
  Sun,
  SunDim,
  Sunrise,
  Crosshair,
  RefreshCw,
  Leaf,
  FlaskConical,
  Atom,
  Calculator,
  Brain,
  Lightbulb,
  BookMarked,
  Bookmark,
  Scale,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { BadgeTier, BadgeIconName } from "@/data/badges";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<BadgeIconName, LucideIcon> = {
  HelpCircle,
  BookOpen,
  Flame,
  FlameKindling,
  Sparkles,
  Crown,
  Hash,
  Route,
  Award,
  Medal,
  CalendarCheck,
  Target,
  CircleDot,
  CircleCheck,
  Sun,
  SunDim,
  Sunrise,
  Crosshair,
  RefreshCw,
  Leaf,
  FlaskConical,
  Atom,
  Calculator,
  Brain,
  Lightbulb,
  BookMarked,
  Bookmark,
  Scale,
  GraduationCap,
};

/** Jedes Badge hat ein einzigartiges Farbschema (per ID); keine zwei sehen gleich aus. */
const BADGE_EARNED_STYLES_BY_ID: Record<string, string> = {
  "erstes-quiz":
    "bg-sky-500 text-white border-sky-600 shadow-lg shadow-sky-900/25 dark:bg-sky-600 dark:border-sky-500",
  "erstes-kapitel":
    "bg-indigo-500 text-white border-indigo-600 shadow-lg shadow-indigo-900/25 dark:bg-indigo-600 dark:border-indigo-500",
  "streak-3":
    "bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-900/30 dark:bg-orange-600 dark:border-orange-500",
  "streak-7":
    "bg-rose-500 text-white border-rose-600 shadow-lg shadow-rose-900/25 dark:bg-rose-600 dark:border-rose-500",
  "streak-14":
    "bg-red-500 text-white border-red-600 shadow-lg shadow-red-900/30 dark:bg-red-600 dark:border-red-500",
  "streak-30":
    "bg-amber-400 text-amber-950 border-amber-500 shadow-lg shadow-amber-600/40 dark:bg-amber-500 dark:text-amber-50 dark:border-amber-400",
  "fragen-100":
    "bg-slate-600 text-slate-100 border-slate-700 shadow-lg shadow-slate-900/30 dark:bg-slate-500 dark:border-slate-400",
  "fragen-500":
    "bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-900/25 dark:bg-emerald-600 dark:border-emerald-500",
  "fragen-1000":
    "bg-amber-600 text-amber-50 border-amber-700 shadow-lg shadow-amber-900/30 dark:bg-amber-500 dark:border-amber-600",
  "fragen-2500":
    "bg-yellow-400 text-yellow-950 border-yellow-500 shadow-lg shadow-yellow-600/35 dark:bg-yellow-500 dark:text-yellow-50 dark:border-yellow-400",
  "wochen-warrior":
    "bg-teal-500 text-white border-teal-600 shadow-lg shadow-teal-900/25 dark:bg-teal-600 dark:border-teal-500",
  "tagesziel-5":
    "bg-green-500 text-white border-green-600 shadow-lg shadow-green-900/25 dark:bg-green-600 dark:border-green-500",
  "tagesziel-14":
    "bg-lime-500 text-white border-lime-600 shadow-lg shadow-lime-900/25 dark:bg-lime-600 dark:border-lime-500",
  "tagesziel-30":
    "bg-emerald-600 text-white border-emerald-700 shadow-lg shadow-emerald-900/30 dark:bg-emerald-500 dark:border-emerald-400",
  "daily-5":
    "bg-yellow-300 text-yellow-950 border-yellow-400 shadow-lg shadow-yellow-500/30 dark:bg-yellow-400 dark:text-yellow-50 dark:border-yellow-300",
  "daily-10":
    "bg-amber-300 text-amber-950 border-amber-400 shadow-lg shadow-amber-500/30 dark:bg-amber-400 dark:text-amber-50 dark:border-amber-300",
  frühaufsteher:
    "bg-orange-400 text-orange-950 border-orange-500 shadow-lg shadow-orange-600/30 dark:bg-orange-500 dark:text-orange-50 dark:border-orange-400",
  "präzisions-könig":
    "bg-violet-500 text-white border-violet-600 shadow-lg shadow-violet-900/25 dark:bg-violet-600 dark:border-violet-500",
  "fehler-fresser":
    "bg-cyan-500 text-white border-cyan-600 shadow-lg shadow-cyan-900/25 dark:bg-cyan-600 dark:border-cyan-500",
  "bms-gigant":
    "bg-green-700 text-green-50 border-green-800 shadow-lg shadow-green-900/35 dark:bg-green-600 dark:border-green-500 ring-2 ring-green-400/40",
  "chemie-profi":
    "bg-orange-600 text-white border-orange-700 shadow-lg shadow-orange-900/30 dark:bg-orange-500 dark:border-orange-400",
  "physik-profi":
    "bg-blue-500 text-white border-blue-600 shadow-lg shadow-blue-900/25 dark:bg-blue-600 dark:border-blue-500",
  "mathe-profi":
    "bg-purple-600 text-white border-purple-700 shadow-lg shadow-purple-900/30 dark:bg-purple-500 dark:border-purple-400",
  "erstes-kff":
    "bg-fuchsia-500 text-white border-fuchsia-600 shadow-lg shadow-fuchsia-900/25 dark:bg-fuchsia-600 dark:border-fuchsia-500",
  "erstes-tv":
    "bg-sky-400 text-white border-sky-500 shadow-lg shadow-sky-800/25 dark:bg-sky-500 dark:border-sky-400 ring-2 ring-sky-300/50",
  "erstes-sek":
    "bg-teal-600 text-teal-50 border-teal-700 shadow-lg shadow-teal-900/30 dark:bg-teal-500 dark:border-teal-400",
  "kff-10":
    "bg-pink-500 text-white border-pink-600 shadow-lg shadow-pink-900/25 dark:bg-pink-600 dark:border-pink-500",
  "tv-5":
    "bg-blue-400 text-white border-blue-500 shadow-lg shadow-blue-800/25 dark:bg-blue-500 dark:border-blue-400 ring-2 ring-blue-300/40",
  "sek-5":
    "bg-slate-500 text-slate-100 border-slate-600 shadow-lg shadow-slate-800/30 dark:bg-slate-600 dark:border-slate-500 ring-2 ring-slate-400/40",
};

/** Fallback-Farben pro Icon, wenn keine badgeId übergeben wird. */
const ICON_EARNED_STYLES: Record<BadgeIconName, string> = {
  HelpCircle:
    "bg-sky-500 text-white border-sky-600 shadow-lg shadow-sky-900/25 dark:bg-sky-600 dark:border-sky-500",
  BookOpen:
    "bg-indigo-500 text-white border-indigo-600 shadow-lg shadow-indigo-900/25 dark:bg-indigo-600 dark:border-indigo-500",
  Flame:
    "bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-900/30 dark:bg-orange-600 dark:border-orange-500",
  Crown:
    "bg-amber-400 text-amber-950 border-amber-500 shadow-lg shadow-amber-600/40 dark:bg-amber-500 dark:text-amber-50 dark:border-amber-400",
  Hash: "bg-slate-600 text-slate-100 border-slate-700 shadow-lg shadow-slate-900/30 dark:bg-slate-500 dark:border-slate-400",
  Route:
    "bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-900/25 dark:bg-emerald-600 dark:border-emerald-500",
  Award:
    "bg-amber-500 text-amber-50 border-amber-600 shadow-lg shadow-amber-800/30 dark:bg-amber-600 dark:border-amber-500",
  Medal:
    "bg-yellow-400 text-yellow-950 border-yellow-500 shadow-lg shadow-yellow-600/35 dark:bg-yellow-500 dark:text-yellow-50 dark:border-yellow-400",
  CalendarCheck:
    "bg-teal-500 text-white border-teal-600 shadow-lg shadow-teal-900/25 dark:bg-teal-600 dark:border-teal-500",
  Target:
    "bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-900/25 dark:bg-emerald-600 dark:border-emerald-500",
  Sun: "bg-yellow-400 text-yellow-950 border-yellow-500 shadow-lg shadow-yellow-600/30 dark:bg-yellow-500 dark:text-yellow-50 dark:border-yellow-400",
  Sunrise:
    "bg-orange-400 text-orange-950 border-orange-500 shadow-lg shadow-orange-600/30 dark:bg-orange-500 dark:text-orange-50 dark:border-orange-400",
  Crosshair:
    "bg-violet-500 text-white border-violet-600 shadow-lg shadow-violet-900/25 dark:bg-violet-600 dark:border-violet-500",
  RefreshCw:
    "bg-cyan-500 text-white border-cyan-600 shadow-lg shadow-cyan-900/25 dark:bg-cyan-600 dark:border-cyan-500",
  Leaf: "bg-emerald-600 text-white border-emerald-700 shadow-lg shadow-emerald-900/30 dark:bg-emerald-500 dark:border-emerald-400",
  FlaskConical:
    "bg-orange-600 text-white border-orange-700 shadow-lg shadow-orange-900/30 dark:bg-orange-500 dark:border-orange-400",
  Atom: "bg-blue-500 text-white border-blue-600 shadow-lg shadow-blue-900/25 dark:bg-blue-600 dark:border-blue-500",
  Calculator:
    "bg-violet-600 text-white border-violet-700 shadow-lg shadow-violet-900/30 dark:bg-violet-500 dark:border-violet-400",
  Brain:
    "bg-fuchsia-500 text-white border-fuchsia-600 shadow-lg shadow-fuchsia-900/25 dark:bg-fuchsia-600 dark:border-fuchsia-500",
  BookMarked:
    "bg-sky-500 text-white border-sky-600 shadow-lg shadow-sky-900/25 dark:bg-sky-600 dark:border-sky-500",
  Scale:
    "bg-teal-600 text-teal-50 border-teal-700 shadow-lg shadow-teal-900/30 dark:bg-teal-500 dark:border-teal-400",
  FlameKindling:
    "bg-orange-600 text-white border-orange-700 shadow-lg shadow-orange-900/30 dark:bg-orange-500 dark:border-orange-400",
  Sparkles:
    "bg-amber-300 text-amber-950 border-amber-400 shadow-lg shadow-amber-500/30 dark:bg-amber-400 dark:text-amber-50 dark:border-amber-300",
  CircleDot:
    "bg-green-500 text-white border-green-600 shadow-lg shadow-green-900/25 dark:bg-green-600 dark:border-green-500",
  CircleCheck:
    "bg-emerald-600 text-white border-emerald-700 shadow-lg shadow-emerald-900/30 dark:bg-emerald-500 dark:border-emerald-400",
  SunDim:
    "bg-yellow-500 text-yellow-950 border-yellow-600 shadow-lg shadow-yellow-700/30 dark:bg-yellow-600 dark:text-yellow-50 dark:border-yellow-500",
  Lightbulb:
    "bg-pink-500 text-white border-pink-600 shadow-lg shadow-pink-900/25 dark:bg-pink-600 dark:border-pink-500",
  Bookmark:
    "bg-blue-400 text-white border-blue-500 shadow-lg shadow-blue-800/25 dark:bg-blue-500 dark:border-blue-400",
  GraduationCap:
    "bg-slate-500 text-slate-100 border-slate-600 shadow-lg shadow-slate-800/30 dark:bg-slate-600 dark:border-slate-500",
};

const TIER_STYLES: Record<BadgeTier, string> = {
  bronze: "bg-amber-700/90 text-amber-100 border-amber-600 shadow-amber-900/40",
  silver: "bg-slate-400/90 text-slate-100 border-slate-500 shadow-slate-600/40",
  gold: "bg-amber-400/95 text-amber-950 border-amber-500 shadow-amber-600/50",
};

const STYLE_LOCKED =
  "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-500 border-slate-300 dark:border-slate-600";

interface BadgeIconProps {
  /** Badge-ID für eindeutiges Farbschema (kein Badge sieht gleich aus). */
  badgeId?: string;
  icon?: BadgeIconName;
  tier?: BadgeTier;
  earned: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const iconSizeClasses = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
  lg: "w-10 h-10",
};

export function BadgeIcon({
  badgeId,
  icon,
  tier = "bronze",
  earned,
  size = "md",
  className,
}: BadgeIconProps) {
  const IconComponent = icon ? ICON_MAP[icon] : Trophy;
  const style = earned
    ? badgeId && BADGE_EARNED_STYLES_BY_ID[badgeId]
      ? BADGE_EARNED_STYLES_BY_ID[badgeId]
      : icon
        ? ICON_EARNED_STYLES[icon]
        : TIER_STYLES[tier]
    : STYLE_LOCKED;

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center border-2 transition-all",
        sizeClasses[size],
        style,
        className
      )}
    >
      <IconComponent className={iconSizeClasses[size]} />
    </div>
  );
}
