/**
 * Zentraler Schema-Skip für Supabase.
 * Wenn das Backend-Schema fehlt (404/PGRST301), setzen sync.ts und syncService
 * diesen Key; alle supabase.from()-Calls werden dann im Client abgefangen und
 * liefern leere Ergebnisse ohne Netzwerk-Request.
 */
export const SUPABASE_SCHEMA_SKIP_KEY = "medmaster-supabase-schema-skip";

export function isSchemaSkipActive(): boolean {
  if (typeof sessionStorage === "undefined") return false;
  return sessionStorage.getItem(SUPABASE_SCHEMA_SKIP_KEY) === "1";
}

export function setSchemaSkip(): void {
  try {
    sessionStorage.setItem(SUPABASE_SCHEMA_SKIP_KEY, "1");
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
