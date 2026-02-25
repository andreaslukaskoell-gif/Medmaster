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
          className="overflow-hidden bg-amber-100 dark:bg-amber-900/40 border-b border-amber-200 dark:border-amber-800/50"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-amber-800 dark:text-amber-200">
            <WifiOff className="w-4 h-4 shrink-0" />
            <span>Du bist offline. Änderungen werden später synchronisiert.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
