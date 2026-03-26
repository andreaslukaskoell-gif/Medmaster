import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, Wifi } from "lucide-react";

/**
 * Zeigt ein Banner oben, wenn der Nutzer offline ist.
 * Shows a "back online" confirmation briefly after reconnecting.
 */
export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== "undefined" ? !navigator.onLine : false
  );
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 3000);
    };
    const handleOffline = () => {
      setShowReconnected(false);
      setIsOffline(true);
    };
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
          className="overflow-hidden"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 text-sm bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800/30 text-amber-700 dark:text-amber-400">
            <WifiOff className="w-4 h-4 shrink-0" />
            <span className="font-medium">Offline</span>
            <span className="text-amber-600 dark:text-amber-500">— Änderungen werden später synchronisiert</span>
          </div>
        </motion.div>
      )}
      {showReconnected && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 text-sm bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-200 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400">
            <Wifi className="w-4 h-4 shrink-0" />
            <span className="font-medium">Wieder online</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
