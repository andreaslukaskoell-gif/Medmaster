import type { TaskDomain } from "@/lib/taskDb/types";
import { getTaskCountByDomain } from "@/lib/taskDb";
import { useState, useEffect } from "react";

/**
 * Difficulty distribution: 20% leicht, 40% mittel, 40% schwer.
 * Returns the difficulty for task index i in a deterministic repeating pattern.
 */
export function difficultyForIndex<T>(i: number, levels: [T, T, T]): T {
  // Pattern of 10: 2× easy, 4× medium, 4× hard → 20/40/40
  const pattern = [0, 1, 1, 2, 1, 2, 2, 1, 0, 2] as const;
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
  if (count === null) return <span className="text-muted text-sm">Lade Anzahl…</span>;
  return (
    <span className="text-muted text-sm">
      Aktuell {count} Aufgabe{count !== 1 ? "n" : ""} in der Datenbank.
    </span>
  );
}
