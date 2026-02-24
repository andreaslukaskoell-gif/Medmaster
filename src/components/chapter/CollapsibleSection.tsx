import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Target, Bookmark, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export type SectionVariant = "default" | "medat" | "summary";

export type SectionProgressStatus = "unread" | "opened" | "completed";

export type CollapsibleSectionProps = {
  /** Unique id for anchor / deep link (e.g. slug from heading) */
  id: string;
  /** Section heading (always visible) */
  title: string;
  /** Section body (markdown-rendered content, SVGs, etc.) */
  children: ReactNode;
  /** Visual variant: default (neutral), medat (amber/gold), summary (teal/emerald) */
  variant?: SectionVariant;
  /** Progress: unread (○), opened (•), completed (✔) */
  progressStatus?: SectionProgressStatus;
  /** Called when section is first opened (for progress tracking) */
  onOpened?: () => void;
  /** Called when user scrolls to end of section (for completed) */
  onCompleted?: () => void;
  /** Uncontrolled: default open state */
  defaultOpen?: boolean;
  /** Controlled: current open state */
  open?: boolean;
  /** Controlled: called when user toggles */
  onOpenChange?: (open: boolean) => void;
  /** Extra class for the section wrapper */
  className?: string;
};

const VARIANT_STYLES: Record<
  SectionVariant,
  { border: string; icon: typeof Target; iconBg: string; iconColor: string; badge?: string }
> = {
  default: {
    border: "border-[var(--border)]",
    icon: ChevronRight,
    iconBg: "",
    iconColor: "text-[var(--muted)]",
  },
  medat: {
    border: "border-l-4 border-l-amber-500 dark:border-l-amber-400 border-[var(--border)]",
    icon: Target,
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    badge: "MedAT-Fokus",
  },
  summary: {
    border: "border-l-4 border-l-teal-500 dark:border-l-teal-400 border-[var(--border)]",
    icon: Bookmark,
    iconBg: "bg-teal-500/10 dark:bg-teal-500/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    badge: "Zusammenfassung",
  },
};

function ProgressIcon({ status }: { status: SectionProgressStatus }) {
  if (status === "completed") {
    return (
      <span
        className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
        aria-label="Abgeschlossen"
      >
        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (status === "opened") {
    return (
      <span
        className="shrink-0 w-5 h-5 rounded-full border-2 border-[var(--accent)] bg-[var(--accent)]/20 flex items-center justify-center"
        aria-label="Begonnen"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
      </span>
    );
  }
  return (
    <span
      className="shrink-0 w-5 h-5 rounded-full border-2 border-[var(--muted)] bg-transparent"
      aria-label="Ungelesen"
    />
  );
}

export function CollapsibleSection({
  id,
  title,
  children,
  variant = "default",
  progressStatus = "unread",
  onOpened,
  onCompleted,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className,
}: CollapsibleSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined && onOpenChange !== undefined;
  const open = isControlled ? (controlledOpen ?? false) : internalOpen;
  const contentRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const openedFiredRef = useRef(false);
  const completedFiredRef = useRef(false);
  const styles = VARIANT_STYLES[variant];
  const IconComponent = styles.icon;
  const showChevron = variant === "default";

  const handleOpenChange = (value: boolean) => {
    if (value && !openedFiredRef.current && onOpened) {
      openedFiredRef.current = true;
      onOpened();
    }
    if (isControlled && onOpenChange) onOpenChange(value);
    else setInternalOpen(value);
  };

  useEffect(() => {
    if (!open || !onCompleted || completedFiredRef.current) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !completedFiredRef.current) {
          completedFiredRef.current = true;
          onCompleted();
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [open, onCompleted]);

  return (
    <Collapsible
      open={open}
      onOpenChange={handleOpenChange}
      className={cn("rounded-lg border bg-[var(--card)] overflow-hidden", styles.border, className)}
    >
      <div id={id} className="scroll-mt-24" aria-hidden>
        {/* Scroll target for #hash */}
      </div>
      <CollapsibleTrigger
        asChild
        className={cn(
          "flex items-center gap-2 w-full text-left px-4 py-3",
          "hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
          "rounded-lg"
        )}
      >
        <button
          type="button"
          className="flex items-center gap-2 w-full min-w-0"
          aria-expanded={open}
          aria-controls={`${id}-content`}
          id={`${id}-trigger`}
        >
          <ProgressIcon status={progressStatus} />
          <span className="shrink-0 text-[var(--muted)]" aria-hidden>
            {showChevron ? (
              open ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )
            ) : (
              <span
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg",
                  styles.iconBg,
                  styles.iconColor
                )}
              >
                <IconComponent className="w-4 h-4" />
              </span>
            )}
          </span>
          <span className="flex-1 min-w-0 flex items-center gap-2">
            {styles.badge && (
              <span
                className={cn(
                  "shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
                  variant === "medat" &&
                    "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
                  variant === "summary" &&
                    "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                )}
              >
                {styles.badge}
              </span>
            )}
            <h2 className="text-base font-semibold text-[var(--text-primary)] truncate">{title}</h2>
          </span>
          {!showChevron && (
            <span className="shrink-0 text-[var(--muted)]">
              {open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </span>
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent
        id={`${id}-content`}
        aria-labelledby={`${id}-trigger`}
        forceMount
        className="overflow-hidden"
      >
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              ref={contentRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-0 border-t border-[var(--border)]/50">
                {children}
                {onCompleted && <div ref={sentinelRef} className="h-1 w-full" aria-hidden />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleContent>
    </Collapsible>
  );
}
