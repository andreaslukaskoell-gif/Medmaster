import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, Sparkles } from "lucide-react";
import { getLevelName } from "@/lib/progression";

interface LevelUpOverlayProps {
  level: number | undefined;
  feature: string | null | undefined;
  onDismiss: () => void;
}

export function LevelUpOverlay({ level, feature, onDismiss }: LevelUpOverlayProps) {
  const visible = level != null && level >= 1;

  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-hidden"
          onClick={onDismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="level-up-title"
        >
          {/* Dezente Konfetti-/Sparkle-Partikel beim Level-Up */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                left: `${50 + (i % 5) * 15 - 30}%`,
                top: `${40 + Math.floor(i / 4) * 20 - 10}%`,
                background: ["#f59e0b", "#a855f7", "#fbbf24", "#c084fc"][i % 4],
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 1.2, 0], opacity: [1, 0.8, 0] }}
              transition={{ delay: i * 0.04, duration: 0.8, ease: "easeOut" }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-amber-400/60 dark:border-amber-300/50 bg-linear-to-b from-amber-50 to-violet-50 dark:from-slate-900 dark:to-violet-950/50 shadow-2xl shadow-amber-500/20 dark:shadow-violet-500/20"
          >
            <div className="absolute inset-0 bg-linear-to-br from-amber-200/20 via-transparent to-violet-300/20 dark:from-amber-500/10 dark:to-violet-500/20 pointer-events-none" />
            <div className="relative p-8 text-center">
              <button
                type="button"
                onClick={onDismiss}
                className="absolute top-3 right-3 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-4"
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-400 to-violet-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h2
                id="level-up-title"
                className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-1"
              >
                Level {level}!
              </h2>
              <p className="text-amber-800 dark:text-amber-200 font-medium mb-4">
                {getLevelName(level)}
              </p>
              {feature && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-violet-100/80 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700 px-4 py-3 text-violet-800 dark:text-violet-200"
                >
                  <Sparkles className="w-5 h-5 text-violet-500 dark:text-violet-400 shrink-0" />
                  <span className="font-semibold">{feature} freigeschaltet</span>
                </motion.div>
              )}
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Klicken oder Escape zum Schließen
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
