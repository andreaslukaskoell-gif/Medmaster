/**
 * ShimmerButton — Premium CTA button with animated shimmer sweep.
 */

import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  background?: string;
  borderRadius?: string;
  className?: string;
};

export function ShimmerButton({
  children,
  shimmerColor = "rgba(255,255,255,0.15)",
  shimmerSize = "0.1em",
  background = "linear-gradient(135deg, #1b3ea7 0%, #2563eb 100%)",
  borderRadius = "1rem",
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]",
        className,
      )}
      style={{ background, borderRadius }}
      {...props}
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 -translate-x-full animate-[shimmer-sweep_3s_ease-in-out_1_0.5s_forwards]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
          }}
        />
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          borderRadius,
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)`,
        }}
      />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
