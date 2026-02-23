/**
 * Merksatz — Minimales Highlight-Element für wichtige Lernaussagen.
 *
 * Farbe richtet sich nach dem übergebenen subject:
 *   biologie → Grün, chemie → Rot, physik → Blau, mathematik → Lila
 *
 * Usage:
 *   <Merksatz subject="biologie">
 *     Die Zelle ist die kleinste Einheit des Lebens.
 *   </Merksatz>
 */

import type { ReactNode } from "react";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

type Subject = "biologie" | "chemie" | "physik" | "mathematik" | "default";

const SUBJECT_STYLES: Record<Subject, { border: string; bg: string; icon: string }> = {
  biologie: {
    border: "border-l-[var(--accent-bio)]",
    bg: "bg-[#22c55e]/5  dark:bg-[#22c55e]/8",
    icon: "text-[var(--accent-bio)]",
  },
  chemie: {
    border: "border-l-[var(--accent-chem)]",
    bg: "bg-[#ef4444]/5  dark:bg-[#ef4444]/8",
    icon: "text-[var(--accent-chem)]",
  },
  physik: {
    border: "border-l-[var(--accent-phys)]",
    bg: "bg-[#3b82f6]/5  dark:bg-[#3b82f6]/8",
    icon: "text-[var(--accent-phys)]",
  },
  mathematik: {
    border: "border-l-[var(--accent-math)]",
    bg: "bg-[#a855f7]/5  dark:bg-[#a855f7]/8",
    icon: "text-[var(--accent-math)]",
  },
  default: {
    border: "border-l-[var(--color-primary-500)]",
    bg: "bg-[#007AFF]/5 dark:bg-[#007AFF]/8",
    icon: "text-[var(--color-primary-500)]",
  },
};

interface MerksatzProps {
  children: ReactNode;
  subject?: Subject;
  className?: string;
}

export function Merksatz({ children, subject = "default", className }: MerksatzProps) {
  const styles = SUBJECT_STYLES[subject] ?? SUBJECT_STYLES.default;

  return (
    <div
      className={cn(
        "flex gap-3 border-l-[3px] rounded-r-lg px-4 py-3 text-sm leading-relaxed",
        styles.border,
        styles.bg,
        className
      )}
    >
      <Bookmark className={cn("mt-0.5 shrink-0 h-4 w-4", styles.icon)} aria-hidden />
      <span className="text-[var(--foreground)]/90">{children}</span>
    </div>
  );
}
