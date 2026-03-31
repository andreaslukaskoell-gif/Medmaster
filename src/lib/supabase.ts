import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { isSchemaSkipActive, setSchemaSkip } from "./supabaseSchemaSkip";

// Vite: use import.meta.env.VITE_*; Node (e.g. seed scripts): fallback to process.env
const env =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env
    : (process.env as Record<string, string | undefined>);
const supabaseUrl = env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY ?? "";

const missing: string[] = [];
if (!supabaseUrl.trim()) missing.push("VITE_SUPABASE_URL");
if (!supabaseAnonKey.trim()) missing.push("VITE_SUPABASE_ANON_KEY");
if (missing.length > 0) {
  console.error(
    "[MedMaster] Supabase ist nicht konfiguriert. Bitte in .env setzen:",
    missing.join(", ")
  );
}

const rawClient: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

/** Noop query builder: alle Methoden liefern sich selbst, .then() liefert leeres Ergebnis (kein error). */
function createNoopFromBuilder(): PromiseLike<{ data: null; error: null }> {
  const empty = Object.freeze({
    data: null as null,
    error: null as null,
  });
  const builder: unknown = new Proxy(function () {}, {
    get(_target, prop) {
      if (prop === "then") {
        return (onfulfilled?: (v: unknown) => unknown, onrejected?: (e: unknown) => unknown) =>
          Promise.resolve(empty).then(onfulfilled, onrejected);
      }
      return builder;
    },
    apply() {
      return builder;
    },
  });
  return builder as PromiseLike<{ data: null; error: null }> & Record<string, unknown>;
}

/**
 * Auto-detecting schema probe: the first .from() call is allowed through.
 * If Supabase returns 400 (missing tables), schema-skip is activated for the session.
 * All subsequent .from() calls become no-ops (zero network requests).
 */
let probeState: "pending" | "probing" | "done" = "pending";

function wrapFromWithAutoProbe(realFrom: SupabaseClient["from"]): SupabaseClient["from"] {
  return ((table: string) => {
    // Already confirmed broken — noop
    if (isSchemaSkipActive()) return createNoopFromBuilder();

    // First call: do probe on "profiles" table
    if (probeState === "pending") {
      probeState = "probing";
      // Fire-and-forget probe — don't block the current call
      Promise.resolve().then(async () => {
        try {
          const { error } = await rawClient!.from("profiles").select("id").limit(1).maybeSingle();
          if (error && (error as { status?: number }).status === 400) {
            setSchemaSkip();
            console.warn("[MedMaster] Supabase-Schema fehlt (400) — alle DB-Calls deaktiviert.");
          }
        } catch {
          setSchemaSkip();
        } finally {
          probeState = "done";
        }
      });
    }

    // Allow real call through (the first few calls before probe completes go through)
    return realFrom(table);
  }) as SupabaseClient["from"];
}

/** Supabase-Client: bei aktivem Schema-Skip liefert .from() einen Noop-Builder (kein Netzwerk). */
export const supabase: SupabaseClient | null = rawClient
  ? new Proxy(rawClient, {
      get(target, prop, receiver) {
        if (prop === "from") {
          if (isSchemaSkipActive()) {
            return () => createNoopFromBuilder();
          }
          return wrapFromWithAutoProbe(target.from.bind(target));
        }
        return Reflect.get(target, prop, receiver);
      },
    })
  : null;

export function isSupabaseConfigured(): boolean {
  return supabase != null;
}
