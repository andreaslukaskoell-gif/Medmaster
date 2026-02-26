import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { useSyncStatus } from "../../stores/syncStatus";
import { useAuth } from "../../hooks/useAuth";
import { pushStatsToSupabase } from "../../lib/syncService";
import { isSchemaSkipActive } from "../../lib/supabaseSchemaSkip";

/**
 * Zeigt in der Navbar den Sync-Status und eine "Sync jetzt"-Schaltfläche.
 * - Synchronisiert: grüner Punkt + Text
 * - Nur lokal: wenn Supabase-Schema fehlt (keine Console-Spam mehr)
 * - Synchronisiere...: gelbes Blinken
 */
export function SyncStatus() {
  const { user } = useAuth();
  const isSyncing = useSyncStatus((s) => s.isSyncing);
  const lastSyncedAt = useSyncStatus((s) => s.lastSyncedAt);
  const [manualSyncing, setManualSyncing] = useState(false);
  const [syncUnavailable, setSyncUnavailable] = useState(
    () => typeof window !== "undefined" && isSchemaSkipActive()
  );

  useEffect(() => {
    const onFocus = () => setSyncUnavailable(isSchemaSkipActive());
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const handleSyncNow = async () => {
    if (!user?.id || manualSyncing || isSyncing || syncUnavailable) return;
    setManualSyncing(true);
    await pushStatsToSupabase(user.id);
    setManualSyncing(false);
  };

  if (!user) return null;

  const syncing = isSyncing || manualSyncing;

  if (syncUnavailable) {
    return (
      <div
        className="flex items-center gap-1 px-1.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20"
        title="Sync dieser Session deaktiviert. Daten werden nur lokal gespeichert."
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
        <span className="text-[10px] text-amber-700 dark:text-amber-400 whitespace-nowrap">
          Lokal
        </span>
        <span className="sr-only">Synchronisation deaktiviert.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 px-1.5 py-1 rounded-lg border border-[var(--border)] bg-[var(--card)]/50">
      {syncing ? (
        <>
          <span
            className="relative flex h-1.5 w-1.5 shrink-0"
            title="Synchronisiere..."
            aria-hidden
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
          </span>
          <span className="text-[10px] text-amber-700 dark:text-amber-400 whitespace-nowrap">
            Sync…
          </span>
        </>
      ) : (
        <>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
            title={
              lastSyncedAt
                ? `Zuletzt: ${new Date(lastSyncedAt).toLocaleString()}`
                : "Synchronisiert"
            }
            aria-hidden
          />
          <span className="text-[10px] text-[var(--muted)] whitespace-nowrap">Sync</span>
        </>
      )}
      <button
        type="button"
        onClick={handleSyncNow}
        disabled={syncing}
        className="p-1 rounded-md hover:bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Jetzt synchronisieren"
        aria-label="Sync jetzt"
      >
        <RefreshCw className={`w-3 h-3 ${syncing ? "animate-spin" : ""}`} />
      </button>
    </div>
  );
}
