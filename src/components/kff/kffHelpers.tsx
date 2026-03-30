/* eslint-disable react-refresh/only-export-components */
import type { TaskDomain } from "@/lib/taskDb/types";
import { getTaskCountByDomain } from "@/lib/taskDb";
import { useState, useEffect } from "react";

/**
 * Hard count enforcement: ensures exactly `target` tasks are delivered.
 * If pool has more → slices. If pool has fewer → duplicates from start of pool
 * (better to show a repeated task than deliver the wrong count).
 */
export function enforceExactCount<T>(pool: T[], target: number): T[] {
  if (pool.length === target) return pool;
  if (pool.length > target) return pool.slice(0, target);
  // Undergeneration: pad by cycling from the start of the pool
  if (pool.length === 0) return pool; // truly empty — caller must handle
  const result = [...pool];
  while (result.length < target) {
    result.push(pool[result.length % pool.length]);
  }
  return result.slice(0, target);
}

/**
 * Difficulty distribution: 20% leicht, 40% mittel, 40% schwer.
 * Returns the difficulty for task index i in a deterministic repeating pattern.
 */
export function difficultyForIndex<T>(i: number, levels: [T, T, T]): T {
  // Pattern of 10: 2× easy, 6× medium, 2× hard → 20/60/20
  const pattern = [0, 1, 1, 1, 2, 1, 1, 1, 0, 2] as const;
  return levels[pattern[i % 10]!]!;
}

const KFF_LAST_COUNT_KEY = "kff-last-count";

export function getLastCount(domain: string): number {
  try {
    const stored = JSON.parse(localStorage.getItem(KFF_LAST_COUNT_KEY) || "{}");
    return stored[domain] ?? 25;
  } catch {
    return 25;
  }
}

export function saveLastCount(domain: string, count: number) {
  try {
    const stored = JSON.parse(localStorage.getItem(KFF_LAST_COUNT_KEY) || "{}");
    stored[domain] = count;
    localStorage.setItem(KFF_LAST_COUNT_KEY, JSON.stringify(stored));
  } catch {
    /* ignore */
  }
}

/** Mischt ein Array und gibt bis zu limit Elemente zurück (Fallback wenn Task-DB leer). */
export function shuffleSlice<T>(arr: T[], limit: number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out.slice(0, limit);
}

/**
 * Builds a session with controlled difficulty mix (~1/3 each).
 * Buckets tasks by getDifficulty, picks proportionally, then interleaves
 * with a light progressive bias (easy-leaning start, hard-leaning end)
 * without strict sorting — feels natural, not forced.
 */
export function balancedDifficultySession<T>(
  pool: T[],
  target: number,
  getDifficulty: (t: T) => "easy" | "medium" | "hard"
): T[] {
  const buckets: Record<"easy" | "medium" | "hard", T[]> = {
    easy: [],
    medium: [],
    hard: [],
  };
  for (const t of pool) buckets[getDifficulty(t)].push(t);
  // Shuffle within each bucket
  for (const key of ["easy", "medium", "hard"] as const) {
    const b = buckets[key];
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j]!, b[i]!];
    }
  }
  // Target per bucket: 20% easy, 60% medium, 20% hard
  const easyQ = Math.round(target * 0.2);
  const hardQ = Math.round(target * 0.2);
  const medQ = target - easyQ - hardQ;
  const quotas = { easy: easyQ, medium: medQ, hard: hardQ };
  // Pick from each bucket up to quota; track surplus for redistribution
  const picked: Record<"easy" | "medium" | "hard", T[]> = { easy: [], medium: [], hard: [] };
  let deficit = 0;
  for (const key of ["easy", "medium", "hard"] as const) {
    const take = Math.min(quotas[key], buckets[key].length);
    picked[key] = buckets[key].slice(0, take);
    deficit += quotas[key] - take;
  }
  // Fill deficit from whichever bucket has surplus
  if (deficit > 0) {
    for (const key of ["medium", "hard", "easy"] as const) {
      const surplus = buckets[key].slice(picked[key].length);
      const take = Math.min(deficit, surplus.length);
      picked[key].push(...surplus.slice(0, take));
      deficit -= take;
      if (deficit <= 0) break;
    }
  }
  // Interleave: mildly progressive (chunks of 3, each chunk has one of each when possible)
  const result: T[] = [];
  const queues = { easy: [...picked.easy], medium: [...picked.medium], hard: [...picked.hard] };
  const order: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];
  while (result.length < target) {
    let added = false;
    for (const key of order) {
      if (queues[key].length > 0) {
        result.push(queues[key].shift()!);
        added = true;
        if (result.length >= target) break;
      }
    }
    if (!added) break;
  }
  return result;
}

/**
 * Returns only unseen tasks from the pool (strict no-repeat).
 * Returns `{ fresh, gap }` where `gap` is the number of tasks the caller
 * must fill via generator. This replaces the old preferUnseen() which
 * recycled already-seen tasks.
 */
export function strictUnseen<T extends { id: string }>(
  pool: T[],
  target: number,
  seenIds: string[]
): { fresh: T[]; gap: number } {
  const seenSet = new Set(seenIds);
  const fresh = pool.filter((t) => !seenSet.has(t.id)).slice(0, target);
  return { fresh, gap: Math.max(0, target - fresh.length) };
}

/**
 * @deprecated Use strictUnseen + generator fallback instead.
 * Kept temporarily for callers that haven't migrated yet.
 */
export function preferUnseen<T extends { id: string }>(
  pool: T[],
  target: number,
  seenIds: string[]
): T[] {
  const { fresh, gap } = strictUnseen(pool, target, seenIds);
  if (gap === 0) return fresh;
  // Legacy fallback: fill with least-recently-seen
  const seenSet = new Set(seenIds);
  const seenInPool = pool.filter((t) => seenSet.has(t.id));
  const recencyMap = new Map(seenIds.map((id, i) => [id, i]));
  seenInPool.sort((a, b) => (recencyMap.get(b.id) ?? 0) - (recencyMap.get(a.id) ?? 0));
  return [...fresh, ...seenInPool].slice(0, target);
}

/** Zeigt die Anzahl validierter Aufgaben in der Task-DB für eine Domain. */
export function TaskDbCountHint({ domain }: { domain: TaskDomain }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    getTaskCountByDomain(domain, true).then((n) => {
      if (!cancelled) setCount(n);
    });
    return () => {
      cancelled = true;
    };
  }, [domain]);
  if (count === null) return <span className="text-[var(--muted)] text-sm">Lade Anzahl…</span>;
  return (
    <span className="text-[var(--muted)] text-sm">
      Aktuell {count} Aufgabe{count !== 1 ? "n" : ""} in der Datenbank.
    </span>
  );
}
