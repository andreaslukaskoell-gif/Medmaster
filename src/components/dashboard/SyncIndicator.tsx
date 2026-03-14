import { Cloud } from "lucide-react";
import { useSyncStatus } from "@/store/syncStatus";

/**
 * Small, subtle indicator when a sync is in progress (e.g. corner of dashboard).
 */
export function SyncIndicator() {
  const isSyncing = useSyncStatus((s) => s.isSyncing);

  if (!isSyncing) return null;

  return (
    <div
      className="absolute top-0 right-0 z-10 flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)]/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm"
      title="Daten werden synchronisiert..."
      aria-hidden
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
      </span>
      <Cloud className="w-3.5 h-3.5 text-[var(--muted)]" />
    </div>
  );
}
