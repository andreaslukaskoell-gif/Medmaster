import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lightbulb } from "lucide-react";

const AUTO_DISMISS_MS = 5000;

interface RandomRewardToastProps {
  message: string | null;
  type: "motivation" | "funfact" | null;
  onDismiss: () => void;
}

export function RandomRewardToast({ message, type, onDismiss }: RandomRewardToastProps) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(t);
  }, [message, onDismiss]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 max-w-md w-[calc(100%-2rem)]"
        >
          <div
            className={`rounded-xl shadow-lg border-2 p-4 flex items-start gap-3 ${
              type === "funfact"
                ? "bg-amber-50 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100"
                : "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100"
            }`}
          >
            {type === "funfact" ? (
              <Lightbulb className="w-6 h-6 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            ) : (
              <Sparkles className="w-6 h-6 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            )}
            <p className="text-sm font-medium leading-relaxed flex-1">{message}</p>
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity p-1 rounded"
              aria-label="Schließen"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
