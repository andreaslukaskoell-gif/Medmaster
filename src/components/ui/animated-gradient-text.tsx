/**
 * AnimatedGradientText — Text with an animated gradient shimmer.
 */

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
};

export function AnimatedGradientText({
  children,
  className,
  colors = ["#1b3ea7", "#2563eb", "#7c3aed", "#2563eb", "#1b3ea7"],
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent animate-[gradient-x_4s_ease_1_forwards] bg-[length:300%_100%]",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
      }}
    >
      {children}
    </span>
  );
}
