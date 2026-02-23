import { Trophy } from "lucide-react";
import type { BadgeTier } from "@/data/badges";
import { cn } from "@/lib/utils";

const TIER_STYLES: Record<BadgeTier, string> = {
  bronze: "bg-amber-700/90 text-amber-100 border-amber-600 shadow-amber-900/40",
  silver: "bg-slate-400/90 text-slate-100 border-slate-500 shadow-slate-600/40",
  gold: "bg-amber-400/95 text-amber-950 border-amber-500 shadow-amber-600/50",
};

const TIER_STYLES_LOCKED: Record<BadgeTier, string> = {
  bronze:
    "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-500 border-slate-300 dark:border-slate-600",
  silver:
    "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-500 border-slate-300 dark:border-slate-600",
  gold: "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-500 border-slate-300 dark:border-slate-600",
};

interface BadgeIconProps {
  tier: BadgeTier;
  earned: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

export function BadgeIcon({ tier, earned, size = "md", className }: BadgeIconProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center border-2 shadow-lg transition-all",
        sizeClasses[size],
        earned ? TIER_STYLES[tier] : TIER_STYLES_LOCKED[tier],
        className
      )}
    >
      <Trophy className={size === "sm" ? "w-5 h-5" : size === "md" ? "w-7 h-7" : "w-10 h-10"} />
    </div>
  );
}
