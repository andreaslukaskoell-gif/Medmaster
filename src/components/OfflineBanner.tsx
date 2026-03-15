import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff } from "lucide-react";

/**
 * Zeigt ein Banner oben, wenn der Nutzer offline ist.
 * Hinweis: Änderungen werden später synchronisiert (Sync-Queue).
 */
export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== "undefined" ? !navigator.onLine : false
  );

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-[#1e1e1e]/80 border border-[var(--border)]/30 rounded-lg"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-[var(--text-secondary)]">
            <WifiOff className="w-4 h-4 shrink-0 text-[var(--muted)]" />
            <span>Du bist offline. Änderungen werden später synchronisiert.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
