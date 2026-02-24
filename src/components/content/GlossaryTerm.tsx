import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { glossary } from "@/data/glossary";

interface GlossaryTermProps {
  term: string;
  className?: string;
}

/**
 * Inline-Fachbegriff mit Tooltip (nur Erklärung, kein Link).
 * Hover (Desktop) / Tap (Mobile) zeigt die Glossar-Erklärung.
 */
export function GlossaryTerm({ term, className }: GlossaryTermProps) {
  const definition = glossary[term];
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!open || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 6,
    });
  }, [open]);

  if (definition == null) {
    return <span className={className}>{term}</span>;
  }

  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className={cn(
          "cursor-help border-b border-dotted border-[var(--accent)]/60 text-[var(--accent)] dark:border-[var(--accent)]/70 dark:text-[var(--accent)]",
          "hover:border-[var(--accent)] hover:text-[var(--accent)]",
          className
        )}
      >
        {term}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[130] px-3 py-2 text-sm text-[var(--text-primary)] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg max-w-[300px] pointer-events-none"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            {definition}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
