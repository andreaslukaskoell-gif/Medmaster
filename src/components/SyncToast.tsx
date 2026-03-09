import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudCheck } from "lucide-react";
import { useSyncStatus } from "@/stores/syncStatus";

/**
 * Zeigt eine kurze Toast-Meldung, wenn Daten im Hintergrund nachsynchronisiert wurden.
 */
export function SyncToast() {
  const message = useSyncStatus((s) => s.syncSuccessMessage);
  const setSyncSuccessMessage = useSyncStatus((s) => s.setSyncSuccessMessage);

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setSyncSuccessMessage(null), 3000);
    return () => clearTimeout(t);
  }, [message, setSyncSuccessMessage]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 flex items-center gap-2 rounded-xl border border-border bg-card shadow-lg px-4 py-2.5 text-sm text-foreground"
          role="status"
          aria-live="polite"
        >
          <CloudCheck className="w-4 h-4 text-primary-500 shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
