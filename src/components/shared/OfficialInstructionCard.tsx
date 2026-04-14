/**
 * Premium card showing the official MedAT instruction text for a subtest.
 * Designed to feel like a proper exam briefing — prominent, clean, trustworthy.
 */
import { useState } from "react";
import { FileText, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

type Props = {
  /** Title shown in header, e.g. "Offizielle Instruktion" */
  title?: string;
  /** The official instruction text (from IB PDF) */
  instruction: string;
  /** Start collapsed (default: true) */
  defaultCollapsed?: boolean;
  /** Visual variant */
  variant?: "default" | "inline";
  className?: string;
};

export function OfficialInstructionCard({
  title = "Offizielle Instruktion (MedAT 2026)",
  instruction,
  defaultCollapsed = true,
  variant = "default",
  className,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className={`group text-left w-full ${className ?? ""}`}
      >
        <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
          <FileText className="w-3.5 h-3.5" />
          <span>Offizielle Instruktion</span>
          {collapsed ? (
            <ChevronDown className="w-3 h-3 ml-auto" />
          ) : (
            <ChevronUp className="w-3 h-3 ml-auto" />
          )}
        </div>
        {!collapsed && (
          <div className="mt-3 pl-5.5 border-l-2 border-blue-200 dark:border-blue-800 ml-[7px]">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {instruction}
            </p>
          </div>
        )}
      </button>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-linear-to-br from-blue-50/80 via-white to-blue-50/40 dark:from-blue-950/30 dark:via-[var(--surface)] dark:to-blue-950/20 ${className ?? ""}`}
    >
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500" />

      <div className="pl-5 pr-5 py-4">
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="w-full text-left cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
              <GraduationCap className="w-[18px] h-[18px] text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">{title}</h3>
                <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-1.5 py-0.5 rounded">
                  IB 2026
                </span>
              </div>
              {collapsed && (
                <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-1">
                  {instruction.slice(0, 100)}...
                </p>
              )}
            </div>
            <div className="p-1.5 rounded-lg text-[var(--muted)] group-hover:bg-blue-100/60 dark:group-hover:bg-blue-900/30 transition-colors shrink-0">
              {collapsed ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </div>
          </div>
        </button>

        {!collapsed && (
          <div className="mt-4 ml-12">
            <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7] whitespace-pre-line">
              {instruction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
