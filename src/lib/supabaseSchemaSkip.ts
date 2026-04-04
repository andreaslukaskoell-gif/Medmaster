/**
 * Zentraler Schema-Skip für Supabase.
 * Wenn das Backend-Schema fehlt (404/PGRST301), setzen sync.ts und syncService
 * diesen Key; alle supabase.from()-Calls werden dann im Client abgefangen und
 * liefern leere Ergebnisse ohne Netzwerk-Request.
 *
 * Auto-recovers after 5 minutes to prevent permanent session-wide data loss
 * from a single transient network error.
 */
export const SUPABASE_SCHEMA_SKIP_KEY = "medmaster-supabase-schema-skip";
const SCHEMA_SKIP_TTL_MS = 5 * 60 * 1000; // 5 minutes

export function isSchemaSkipActive(): boolean {
  if (typeof sessionStorage === "undefined") return false;
  const raw = sessionStorage.getItem(SUPABASE_SCHEMA_SKIP_KEY);
  if (!raw) return false;
  // Auto-recover: if skip was set more than TTL ago, clear it
  const setAt = parseInt(raw, 10);
  if (!isNaN(setAt) && Date.now() - setAt > SCHEMA_SKIP_TTL_MS) {
    sessionStorage.removeItem(SUPABASE_SCHEMA_SKIP_KEY);
    return false;
  }
  return true;
}

export function setSchemaSkip(): void {
  try {
    // Store timestamp instead of "1" so we can auto-recover
    sessionStorage.setItem(SUPABASE_SCHEMA_SKIP_KEY, Date.now().toString());
  } catch {
    // ignore
  }
}

/** Nach erfolgreichem Sync aufrufen, damit bei erneutem Schema-Fehler wieder erkannt wird. */
export function clearSchemaSkip(): void {
  try {
    sessionStorage.removeItem(SUPABASE_SCHEMA_SKIP_KEY);
  } catch {
    // ignore
  }
}
