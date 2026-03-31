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

// ── Noop builder ────────────────────────────────────────────────
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

// ── Early probe: run immediately on import ──────────────────────
// This fires a single probe request. Until it resolves, all .from()
// calls are deferred. After it resolves, they either noop or pass through.
let probeResult: boolean | null = null; // null = pending, true = OK, false = skip
let probeResolvers: Array<(ok: boolean) => void> = [];

function waitForProbe(): Promise<boolean> {
  if (probeResult !== null) return Promise.resolve(probeResult);
  return new Promise((resolve) => probeResolvers.push(resolve));
}

function completeProbe(ok: boolean) {
  probeResult = ok;
  for (const r of probeResolvers) r(ok);
  probeResolvers = [];
}

// Skip already set from previous session navigation
if (isSchemaSkipActive()) {
  probeResult = false;
} else if (rawClient) {
  // Fire probe immediately
  rawClient
    .from("profiles")
    .select("id")
    .limit(1)
    .maybeSingle()
    .then(({ error }) => {
      if (error) {
        setSchemaSkip();
        completeProbe(false);
      } else {
        completeProbe(true);
      }
    })
    .catch(() => {
      setSchemaSkip();
      completeProbe(false);
    });
} else {
  probeResult = false;
}

// ── Deferred builder: collects chain, replays after probe ───────
function createDeferredBuilder(
  realFrom: SupabaseClient["from"],
  table: string
): PromiseLike<{ data: null; error: null }> & Record<string, unknown> {
  const chain: { method: string; args: unknown[] }[] = [];
  const builder: unknown = new Proxy(function () {}, {
    get(_target, prop) {
      if (prop === "then") {
        return (onfulfilled?: (v: unknown) => unknown, onrejected?: (e: unknown) => unknown) => {
          return waitForProbe().then((ok) => {
            if (!ok) {
              const empty = { data: null, error: null };
              return onfulfilled ? onfulfilled(empty) : empty;
            }
            let q: unknown = realFrom(table);
            for (const { method, args } of chain) {
              q = (q as Record<string, (...a: unknown[]) => unknown>)[method](...args);
            }
            return (q as PromiseLike<unknown>).then(onfulfilled, onrejected);
          });
        };
      }
      return (...args: unknown[]) => {
        chain.push({ method: prop as string, args });
        return builder;
      };
    },
    apply(_target, _thisArg, args) {
      chain.push({ method: "call", args });
      return builder;
    },
  });
  return builder as PromiseLike<{ data: null; error: null }> & Record<string, unknown>;
}

// ── Exported client with gate ───────────────────────────────────
export const supabase: SupabaseClient | null = rawClient
  ? new Proxy(rawClient, {
      get(target, prop, receiver) {
        if (prop === "from") {
          if (probeResult === false) return () => createNoopFromBuilder();
          if (probeResult === true) return target.from.bind(target);
          // Probe pending — defer
          return (table: string) => createDeferredBuilder(target.from.bind(target), table);
        }
        return Reflect.get(target, prop, receiver);
      },
    })
  : null;

export function isSupabaseConfigured(): boolean {
  return supabase != null;
}
