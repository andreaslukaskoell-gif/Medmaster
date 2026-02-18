import { Cloud } from "lucide-react";
import { useSyncStatus } from "@/stores/syncStatus";

const MEDICAL_BLUE = "#0055ff";

/**
 * Small, subtle indicator when a sync is in progress (e.g. corner of dashboard).
 */
export function SyncIndicator() {
  const isSyncing = useSyncStatus((s) => s.isSyncing);

  if (!isSyncing) return null;

  return (
    <div
      className="absolute top-0 right-0 z-10 flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm"
      title="Daten werden synchronisiert..."
      aria-hidden
    >
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: MEDICAL_BLUE }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: MEDICAL_BLUE }}
        />
      </span>
      <Cloud className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
    </div>
  );
}
