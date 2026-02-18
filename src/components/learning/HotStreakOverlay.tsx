import { motion, AnimatePresence } from "framer-motion";

interface HotStreakOverlayProps {
  active: boolean;
}

export function HotStreakOverlay({ active }: HotStreakOverlayProps) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-90 pointer-events-none"
          aria-hidden
        >
          {/* Goldener Schimmer – Rand-Glow */}
          <div className="absolute inset-0 border-[3px] border-amber-400/60 dark:border-amber-300/50 rounded-none animate-hot-streak-glow" />
          {/* Leichter Vollflächen-Shimmer (Puls) */}
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-amber-200/5 via-transparent to-amber-300/5 dark:from-amber-400/10 dark:via-transparent dark:to-amber-500/10"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.2, repeat: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
