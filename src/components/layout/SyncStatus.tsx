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
  const [syncUnavailable, setSyncUnavailable] = useState(false);

  useEffect(() => {
    setSyncUnavailable(typeof window !== "undefined" && isSchemaSkipActive());
  }, []);

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
        className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20"
        title="Sync dieser Session deaktiviert (Backend-Tabellen nicht verfügbar). Daten werden nur lokal gespeichert. Beim nächsten Login mit funktionierendem Backend wird wieder synchronisiert."
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
        <span className="text-xs text-amber-700 dark:text-amber-400 whitespace-nowrap">
          Nur lokal
        </span>
        <span className="sr-only">
          Synchronisation deaktiviert. Fortschritt wird nur auf diesem Gerät gespeichert.
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      {syncing ? (
        <>
          <span className="relative flex h-2 w-2 shrink-0" title="Synchronisiere..." aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-xs text-amber-700 dark:text-amber-400 font-medium whitespace-nowrap">
            Synchronisiere...
          </span>
        </>
      ) : (
        <>
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-green-500"
            title={
              lastSyncedAt
                ? `Zuletzt: ${new Date(lastSyncedAt).toLocaleString()}`
                : "Synchronisiert"
            }
            aria-hidden
          />
          <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
            Synchronisiert
          </span>
        </>
      )}
      <button
        type="button"
        onClick={handleSyncNow}
        disabled={syncing}
        className="p-1.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Jetzt mit Supabase synchronisieren"
        aria-label="Sync jetzt"
      >
        <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
      </button>
    </div>
  );
}
