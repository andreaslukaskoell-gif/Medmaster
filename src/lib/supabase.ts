import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { isSchemaSkipActive, setSchemaSkip } from "./supabaseSchemaSkip";

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

/** Noop query builder: callable proxy, all methods chain to itself, .then() resolves empty. */
function createNoopFromBuilder(): PromiseLike<{ data: null; error: null }> {
  const empty = Object.freeze({ data: null as null, error: null as null });
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
 * Gate: exactly 1 probe request. All .from() calls that arrive while probing
 * return a deferred builder — if probe detects 400, they resolve as noops;
 * if schema is OK, they execute normally after the gate opens.
 */
let probePromise: Promise<boolean> | null = null;

function runProbe(): Promise<boolean> {
  if (probePromise) return probePromise;
  probePromise = (async () => {
    try {
      const { error } = await rawClient!.from("profiles").select("id").limit(1).maybeSingle();
      if (error) {
        const status = (error as { status?: number }).status ?? 0;
        if (status === 400 || status === 404) {
          setSchemaSkip();
          console.warn("[MedMaster] Supabase-Schema fehlt — DB-Calls deaktiviert.");
          return false;
        }
      }
      return true; // schema OK
    } catch {
      setSchemaSkip();
      return false;
    }
  })();
  return probePromise;
}

/**
 * Creates a deferred query builder that waits for the probe to complete.
 * If schema is OK → replays the real query. If schema is broken → returns noop.
 */
function createDeferredBuilder(
  realFrom: SupabaseClient["from"],
  table: string
): PromiseLike<{ data: null; error: null }> & Record<string, unknown> {
  // Collect chained method calls (.select(), .eq(), .insert() etc.)
  const chain: { method: string; args: unknown[] }[] = [];

  const builder: unknown = new Proxy(function () {}, {
    get(_target, prop) {
      if (prop === "then") {
        // Terminal: execute the deferred chain
        return (onfulfilled?: (v: unknown) => unknown, onrejected?: (e: unknown) => unknown) => {
          return runProbe().then((schemaOk) => {
            if (!schemaOk) {
              const empty = { data: null, error: null };
              return onfulfilled ? onfulfilled(empty) : empty;
            }
            // Replay chain on real client
            let q: unknown = realFrom(table);
            for (const { method, args } of chain) {
              q = (q as Record<string, (...a: unknown[]) => unknown>)[method](...args);
            }
            return (q as PromiseLike<unknown>).then(onfulfilled, onrejected);
          });
        };
      }
      // Record chain call
      return (...args: unknown[]) => {
        chain.push({ method: prop as string, args });
        return builder;
      };
    },
    apply(_target, _thisArg, args) {
      // Direct function call on builder (rare, but handle it)
      chain.push({ method: "call", args });
      return builder;
    },
  });
  return builder as PromiseLike<{ data: null; error: null }> & Record<string, unknown>;
}

/** Supabase-Client: schema-skip + auto-probe gate. */
export const supabase: SupabaseClient | null = rawClient
  ? new Proxy(rawClient, {
      get(target, prop, receiver) {
        if (prop === "from") {
          // Fast path: skip already confirmed
          if (isSchemaSkipActive()) {
            return () => createNoopFromBuilder();
          }
          // Probe already completed successfully — pass through directly
          if (probePromise !== null) {
            // Check synchronously if probe resolved to true
            let resolved = false;
            probePromise.then((ok) => { resolved = ok; });
            // If probe is done and schema is OK, no gate needed
          }
          return (table: string) => createDeferredBuilder(target.from.bind(target), table);
        }
        return Reflect.get(target, prop, receiver);
      },
    })
  : null;

export function isSupabaseConfigured(): boolean {
  return supabase != null;
}
