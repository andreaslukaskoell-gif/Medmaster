/**
 * Task-DB Storage: Alle Aufgaben in Supabase (tasks-Tabelle).
 * Wenn Supabase verfügbar ist, wird ausschließlich die Datenbank genutzt (kein localStorage).
 * Nur ohne Supabase (z. B. lokale Umgebung): Fallback auf localStorage.
 *
 * Resilience: If the `tasks` table doesn't exist in Supabase (404/42P01),
 * we log ONE warning and fall back to localStorage for the rest of the session.
 * This prevents 100+ console errors when the migration hasn't been run yet.
 */
import { supabase } from "@/lib/supabase";
import { isSchemaSkipActive, setSchemaSkip } from "@/lib/supabaseSchemaSkip";
import type { Task, TaskDomain, TaskFilters, TaskInsert } from "./types";

const TASKS_LOCAL_KEY = "medmaster_tasks_fallback";

/**
 * Once set to true, all Supabase calls are skipped for the rest of the session.
 * This prevents 100+ console errors when the `tasks` table hasn't been created yet.
 */
let supabaseTasksUnavailable = false;
let warnedOnce = false;

function markUnavailable(): void {
  supabaseTasksUnavailable = true;
  setSchemaSkip(); // propagate to global schema-skip so other systems also stop
  if (!warnedOnce) {
    warnedOnce = true;
    console.warn(
      "[TaskDB] Supabase `tasks` table unavailable — using local generation only. " +
        "To enable persistence, run the migration: supabase/migrations/20260225000000_tasks_table.sql"
    );
  }
}

function handleSupabaseError(
  error: { code?: string; message?: string; status?: number } | null
): boolean {
  if (!error) return false;
  const code = error.code ?? "";
  const msg = error.message ?? "";
  const status = (error as { status?: number }).status ?? 0;
  // 42P01 = relation does not exist, PGRST* = PostgREST errors for missing/inaccessible tables
  if (
    code === "42P01" ||
    code === "PGRST116" ||
    code === "PGRST204" ||
    code === "PGRST301" ||
    code === "404" ||
    status === 404 ||
    msg.includes("does not exist") ||
    msg.includes("relation") ||
    msg.includes("404")
  ) {
    markUnavailable();
    return true;
  }
  return false;
}

/** Check if we should attempt Supabase calls */
function useSupabase(): boolean {
  if (!supabase || supabaseTasksUnavailable) return false;
  // If the main sync already detected missing tables, skip without another 404
  if (isSchemaSkipActive()) {
    markUnavailable();
    return false;
  }
  return true;
}

function rowToTask(row: {
  id: string;
  domain: string;
  type: string;
  difficulty: number;
  data: unknown;
  correct_answer: unknown;
  explanation: string | null;
  source: string;
  validated: boolean;
  invalid_reason: string | null;
  created_at: string;
}): Task {
  return {
    id: row.id,
    domain: row.domain as TaskDomain,
    type: row.type as Task["type"],
    difficulty: row.difficulty,
    data: row.data,
    correctAnswer: row.correct_answer,
    explanation: row.explanation ?? undefined,
    source: row.source as Task["source"],
    validated: row.validated,
    invalidReason: row.invalid_reason ?? undefined,
    createdAt: row.created_at,
  };
}

function taskToRow(task: TaskInsert): Record<string, unknown> {
  return {
    id: task.id,
    domain: task.domain,
    type: task.type,
    difficulty: task.difficulty,
    data: task.data ?? {},
    correct_answer: task.correctAnswer,
    explanation: task.explanation ?? null,
    source: task.source,
    validated: task.validated ?? false,
    invalid_reason: task.invalidReason ?? null,
    created_at: task.createdAt ?? new Date().toISOString(),
  };
}

/** Nur Fallback wenn Supabase nicht konfiguriert ist */
const localStore = {
  get(): Task[] {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(TASKS_LOCAL_KEY);
      return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
      return [];
    }
  },
  set(tasks: Task[]) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(TASKS_LOCAL_KEY, JSON.stringify(tasks));
    } catch {
      // ignore
    }
  },
  add(task: Task) {
    const list = this.get();
    const idx = list.findIndex((t) => t.id === task.id);
    if (idx >= 0) list[idx] = task;
    else list.push(task);
    this.set(list);
  },
  remove(id: string) {
    this.set(this.get().filter((t) => t.id !== id));
  },
};

export async function getTaskById(id: string): Promise<Task | null> {
  if (useSupabase()) {
    const { data, error } = await supabase!.from("tasks").select("*").eq("id", id).single();
    if (handleSupabaseError(error)) {
      return localStore.get().find((t) => t.id === id) ?? null;
    }
    if (!error && data) return rowToTask(data as Parameters<typeof rowToTask>[0]);
    return null;
  }
  return localStore.get().find((t) => t.id === id) ?? null;
}

/** Mehrere Tasks nach IDs laden (nur gültige, validated). */
export async function getTasksByIds(ids: string[]): Promise<Task[]> {
  if (ids.length === 0) return [];
  const seen = new Set(ids);
  const unique = [...seen];
  if (useSupabase()) {
    const { data, error } = await supabase!
      .from("tasks")
      .select("*")
      .in("id", unique)
      .is("invalid_reason", null)
      .eq("validated", true);
    if (handleSupabaseError(error)) {
      return localStore
        .get()
        .filter((t) => unique.includes(t.id) && !t.invalidReason && t.validated);
    }
    if (!error && data) return (data as Parameters<typeof rowToTask>[0][]).map(rowToTask);
    return [];
  }
  return localStore.get().filter((t) => unique.includes(t.id) && !t.invalidReason && t.validated);
}

export async function getTasksByDomain(filters: TaskFilters): Promise<Task[]> {
  const {
    domain,
    type,
    source,
    validated,
    minDifficulty,
    maxDifficulty,
    limit = 50,
    offset = 0,
  } = filters;

  if (useSupabase()) {
    let q = supabase!
      .from("tasks")
      .select("*")
      .eq("domain", domain)
      .is("invalid_reason", null)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);
    if (type != null) q = q.eq("type", type);
    if (source != null) q = q.eq("source", source);
    if (validated != null) q = q.eq("validated", validated);
    if (minDifficulty != null) q = q.gte("difficulty", minDifficulty);
    if (maxDifficulty != null) q = q.lte("difficulty", maxDifficulty);
    const { data, error } = await q;
    if (handleSupabaseError(error)) {
      // Fall through to localStore below
    } else {
      if (!error && data) return (data as Parameters<typeof rowToTask>[0][]).map(rowToTask);
      return [];
    }
  }

  let list = localStore.get().filter((t) => t.domain === domain && !t.invalidReason);
  if (type != null) list = list.filter((t) => t.type === type);
  if (source != null) list = list.filter((t) => t.source === source);
  if (validated != null) list = list.filter((t) => t.validated === validated);
  if (minDifficulty != null) list = list.filter((t) => t.difficulty >= minDifficulty);
  if (maxDifficulty != null) list = list.filter((t) => t.difficulty <= maxDifficulty);
  list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return list.slice(offset, offset + limit);
}

export async function getTasksByDifficulty(
  domain: TaskDomain,
  minDiff: number,
  maxDiff: number,
  limit: number,
  offset: number = 0
): Promise<Task[]> {
  return getTasksByDomain({
    domain,
    minDifficulty: minDiff,
    maxDifficulty: maxDiff,
    validated: true,
    limit,
    offset,
  });
}

export async function saveTask(task: TaskInsert): Promise<void> {
  const t: Task = {
    ...task,
    createdAt: task.createdAt ?? new Date().toISOString(),
  };
  if (useSupabase()) {
    const { error } = await supabase!
      .from("tasks")
      .upsert(taskToRow(t) as never, { onConflict: "id" });
    if (handleSupabaseError(error)) {
      localStore.add(t);
      return;
    }
    return;
  }
  localStore.add(t);
}

export async function markTaskInvalid(id: string, reason: string): Promise<void> {
  if (useSupabase()) {
    const { error } = await supabase!
      .from("tasks")
      .update({ invalid_reason: reason, validated: false })
      .eq("id", id);
    if (handleSupabaseError(error)) {
      // Fall through to localStore
    } else {
      return;
    }
  }
  const list = localStore.get();
  const task = list.find((t) => t.id === id);
  if (task) {
    task.invalidReason = reason;
    task.validated = false;
    localStore.add(task);
  }
}

export async function getTaskCountByDomain(
  domain: TaskDomain,
  validatedOnly = true
): Promise<number> {
  if (useSupabase()) {
    let q = supabase!
      .from("tasks")
      .select("id", { count: "exact", head: true })
      .eq("domain", domain)
      .is("invalid_reason", null);
    if (validatedOnly) q = q.eq("validated", true);
    const { count, error } = await q;
    if (handleSupabaseError(error)) {
      // Fall through to localStore
    } else {
      return count ?? 0;
    }
  }
  let list = localStore.get().filter((t) => t.domain === domain && !t.invalidReason);
  if (validatedOnly) list = list.filter((t) => t.validated);
  return list.length;
}

/** Anzahl validierter Tasks in einer Domain innerhalb eines Difficulty-Bands (für Zufalls-Offset). */
export async function getTaskCountInBand(
  domain: TaskDomain,
  minDiff: number,
  maxDiff: number
): Promise<number> {
  if (useSupabase()) {
    const { count, error } = await supabase!
      .from("tasks")
      .select("id", { count: "exact", head: true })
      .eq("domain", domain)
      .eq("validated", true)
      .is("invalid_reason", null)
      .gte("difficulty", minDiff)
      .lte("difficulty", maxDiff);
    if (handleSupabaseError(error)) {
      // Fall through to localStore
    } else {
      return count ?? 0;
    }
  }
  const list = localStore
    .get()
    .filter(
      (t) =>
        t.domain === domain &&
        !t.invalidReason &&
        t.validated &&
        t.difficulty >= minDiff &&
        t.difficulty <= maxDiff
    );
  return list.length;
}

/** Lädt alle Tasks eines Merkfähigkeit-Sets (gleiche setId in data). */
export async function getTasksBySetId(setId: string): Promise<Task[]> {
  if (useSupabase()) {
    const { data, error } = await supabase!
      .from("tasks")
      .select("*")
      .eq("domain", "kff-merkfähigkeit")
      .is("invalid_reason", null)
      .eq("validated", true)
      .contains("data", { setId })
      .order("id");
    if (handleSupabaseError(error)) {
      // Fall through to localStore
    } else if (!error && data) {
      return (data as Parameters<typeof rowToTask>[0][]).map(rowToTask);
    }
  }
  const list = localStore.get().filter((t) => {
    if (t.domain !== "kff-merkfähigkeit" || t.invalidReason || !t.validated) return false;
    const d = t.data as { setId?: string };
    return d?.setId === setId;
  });
  list.sort((a, b) => a.id.localeCompare(b.id));
  return list;
}
