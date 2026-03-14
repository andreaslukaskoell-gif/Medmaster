import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Target, Bookmark } from "lucide-react";
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
  {
    accentBorder?: string;
    icon?: typeof Target;
    iconColor: string;
    badge?: string;
    badgeClass?: string;
  }
> = {
  default: {
    iconColor: "text-[var(--muted)]",
  },
  medat: {
    accentBorder: "border-l-2 border-l-amber-400 dark:border-l-amber-500",
    icon: Target,
    iconColor: "text-amber-600 dark:text-amber-400",
    badge: "MedAT-Fokus",
    badgeClass: "text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20",
  },
  summary: {
    accentBorder: "border-l-2 border-l-teal-400 dark:border-l-teal-500",
    icon: Bookmark,
    iconColor: "text-teal-600 dark:text-teal-400",
    badge: "Zusammenfassung",
    badgeClass: "text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20",
  },
};

export function CollapsibleSection({
  id,
  title,
  children,
  variant = "default",
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
      className={cn(
        "border-b border-[var(--border)]/60 last:border-b-0",
        styles.accentBorder,
        className
      )}
    >
      <div id={id} className="scroll-mt-24" aria-hidden>
        {/* Scroll target for #hash */}
      </div>
      <CollapsibleTrigger
        asChild
        className={cn(
          "flex items-center gap-2 w-full text-left py-3 px-1",
          "hover:bg-[var(--foreground)]/3 transition-colors cursor-pointer rounded-sm",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        )}
      >
        <button
          type="button"
          className="flex items-center gap-2 w-full min-w-0"
          aria-expanded={open}
          aria-controls={`${id}-content`}
          id={`${id}-trigger`}
        >
          <span className="shrink-0 text-[var(--muted)]" aria-hidden>
            {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
          <span className="flex-1 min-w-0 flex items-center gap-2">
            {styles.badge && (
              <span
                className={cn(
                  "shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
                  styles.badgeClass
                )}
              >
                {styles.badge}
              </span>
            )}
            <h2 className="text-sm font-semibold text-[var(--text-primary)] truncate">{title}</h2>
          </span>
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
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="pl-6 pb-6 pt-0">
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
