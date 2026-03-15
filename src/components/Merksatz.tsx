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

const SUBJECT_STYLES: Record<Subject, { border: string; icon: string }> = {
  biologie: {
    border: "border-l-[var(--accent-bio)]",
    icon: "text-[var(--accent-bio)]",
  },
  chemie: {
    border: "border-l-[var(--accent-chem)]",
    icon: "text-[var(--accent-chem)]",
  },
  physik: {
    border: "border-l-[var(--accent-phys)]",
    icon: "text-[var(--accent-phys)]",
  },
  mathematik: {
    border: "border-l-[var(--accent-math)]",
    icon: "text-[var(--accent-math)]",
  },
  default: {
    border: "border-l-[var(--accent)]",
    icon: "text-[var(--accent)]",
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
        "flex gap-3 border-l-2 px-4 py-2 text-sm leading-relaxed",
        styles.border,
        className
      )}
    >
      <Bookmark className={cn("mt-0.5 shrink-0 h-4 w-4", styles.icon)} aria-hidden />
      <span className="text-[var(--foreground)]/90">{children}</span>
    </div>
  );
}
