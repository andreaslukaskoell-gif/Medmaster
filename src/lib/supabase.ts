import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { isSchemaSkipActive } from "./supabaseSchemaSkip";

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

/** Noop query builder: alle Methoden liefern sich selbst, .then() liefert leeres Ergebnis. */
function createNoopFromBuilder(): PromiseLike<{ data: null; error: { message: string } }> {
  const empty = Object.freeze({
    data: null as null,
    error: Object.freeze({ message: "Schema unavailable (skip active)" }),
  });
  const chainable: PromiseLike<{ data: null; error: { message: string } }> = {
    then(onfulfilled?, onrejected?) {
      return Promise.resolve(empty).then(onfulfilled, onrejected);
    },
  };
  return new Proxy(chainable, {
    get() {
      return chainable;
    },
  }) as PromiseLike<{ data: null; error: { message: string } }> & Record<string, unknown>;
}

/** Supabase-Client: bei aktivem Schema-Skip liefert .from() einen Noop-Builder (kein Netzwerk). */
export const supabase: SupabaseClient | null = rawClient
  ? new Proxy(rawClient, {
      get(target, prop, receiver) {
        if (prop === "from" && isSchemaSkipActive()) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars -- .from(table) signature
          return (table: string) => createNoopFromBuilder();
        }
        return Reflect.get(target, prop, receiver);
      },
    })
  : null;

export function isSupabaseConfigured(): boolean {
  return supabase != null;
}
