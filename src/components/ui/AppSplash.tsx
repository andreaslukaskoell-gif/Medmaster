import { motion } from "framer-motion";

/**
 * Premium branded splash screen shown during auth loading.
 * Logo + subtle shimmer bar — feels intentional, not broken.
 */
export function AppSplash() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-[var(--background)] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center gap-5"
      >
        <img
          src="/logo.svg"
          alt=""
          className="h-12 w-12"
          style={{ filter: "drop-shadow(0 0 20px color-mix(in srgb, var(--accent) 25%, transparent))" }}
        />
        <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
          MedMaster
        </span>
        {/* Shimmer bar */}
        <div className="w-32 h-1 rounded-full bg-[var(--border)] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[var(--accent)]"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "40%" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
