import { Crown } from "lucide-react";

/**
 * Premium content indicator badge.
 *
 * Usage:
 * - inline: Next to chapter titles, question numbers
 * - overlay: Top-right corner of cards/boxes
 *
 * Phase 3: Visual indicator only
 * Phase 8: Will be paired with actual content gating logic
 *
 * @example
 * <PremiumBadge size="sm" variant="inline" />
 * <div className="relative">
 *   <PremiumBadge variant="overlay" />
 *   <ContentCard />
 * </div>
 */

interface PremiumBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "inline" | "overlay";
}

export function PremiumBadge({ size = "sm", variant = "inline" }: PremiumBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  if (variant === "overlay") {
    return (
      <div className="absolute top-2 right-2 bg-linear-to-r from-amber-500 to-yellow-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
        <Crown className="w-3 h-3" />
        PRO
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center ${sizeClasses[size]} bg-linear-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold`}
    >
      <Crown className={iconSizes[size]} />
      PRO
    </span>
  );
}
