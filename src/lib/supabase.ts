import { createClient, SupabaseClient } from "@supabase/supabase-js";

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

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export function isSupabaseConfigured(): boolean {
  return supabase != null;
}
