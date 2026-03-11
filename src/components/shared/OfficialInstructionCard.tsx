/**
 * Collapsible card showing the official MedAT instruction text for a subtest.
 * Uses the same visual pattern as UebungsbeschreibungCard.
 */
import { useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  /** Title shown in header, e.g. "Offizielle Instruktion" */
  title?: string;
  /** The official instruction text (from IB PDF) */
  instruction: string;
  /** Start collapsed (default: true) */
  defaultCollapsed?: boolean;
  className?: string;
};

export function OfficialInstructionCard({
  title = "Offizielle Instruktion (MedAT 2026)",
  instruction,
  defaultCollapsed = true,
  className,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <Card className={className}>
      <CardContent className="pt-5 pb-5">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setCollapsed((c) => !c)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setCollapsed((c) => !c);
            }
          }}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
            <button
              type="button"
              className="ml-auto p-1 rounded text-[var(--muted)] hover:bg-[var(--border)]/50 transition-colors cursor-pointer"
              aria-expanded={!collapsed}
              tabIndex={-1}
            >
              {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {!collapsed && (
          <div className="mt-4 pl-10">
            <p className="text-sm text-[var(--muted)] leading-relaxed whitespace-pre-line">
              {instruction}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
