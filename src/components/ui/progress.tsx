import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
}

export function Progress({ value, max = 100, className, barClassName }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div
        className={cn(
          "bg-primary-600 h-2.5 rounded-full transition-all duration-500",
          barClassName
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
