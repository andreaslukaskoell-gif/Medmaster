import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SmartLinkProps {
  to: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Dezent unterstrichener Link; Hover zeigt Tooltip mit Kurzbeschreibung, Klick navigiert zum Kapitel.
 */
export function SmartLink({ to, description, children, className }: SmartLinkProps) {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!showTooltip || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 4,
    });
  }, [showTooltip]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(to);
          }
        }}
        onClick={handleClick}
        className={cn(
          "cursor-pointer border-b border-primary-500/60 dark:border-primary-400/60 text-primary-700 dark:text-primary-300 hover:border-primary-600 dark:hover:border-primary-300 hover:text-primary-800 dark:hover:text-primary-200 transition-colors",
          className
        )}
      >
        {children}
      </span>
      <AnimatePresence>
        {showTooltip && description && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 px-3 py-2 text-sm text-slate-100 bg-slate-800 dark:bg-slate-700 rounded-lg shadow-lg border border-white/10 max-w-[280px] pointer-events-none"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            {description}
            <span className="block text-xs text-slate-300 dark:text-slate-400 mt-1">
              Klicken zum Öffnen
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
