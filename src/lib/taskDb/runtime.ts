/**
 * Runtime: Erst DB abfragen, bei Bedarf Pool nachfüllen.
 * User bekommt nur geprüfte Aufgaben aus der DB.
 */
import { getTasksByDifficulty, getTaskCountByDomain } from "./storage";
import { fillPool } from "./fillPool";
import type { Task, TaskDomain } from "./types";

/** Benötigtes Minimum an validierten Aufgaben pro Domain, bevor Nachfüllen getriggert wird */
const MIN_POOL_SIZE = 50;

/**
 * Holt eine oder mehrere Aufgaben für den User aus der DB.
 * Wenn zu wenige Aufgaben im Pool: triggert asynchrones Nachfüllen (im Hintergrund).
 * @param domain Domain (z. B. kff-figuren)
 * @param userSkill Geschätzter Skill 0–1000 (wird als difficulty-Band genutzt)
 * @param count Anzahl gewünschter Aufgaben
 * @param bandWidth ± um userSkill (z. B. 100 → userSkill-100 bis userSkill+100)
 */
export async function getTasksForUser(
  domain: TaskDomain,
  userSkill: number,
  count: number = 1,
  bandWidth: number = 100
): Promise<Task[]> {
  const minDiff = Math.max(0, userSkill - bandWidth);
  const maxDiff = Math.min(1000, userSkill + bandWidth);
  const tasks = await getTasksByDifficulty(domain, minDiff, maxDiff, count);
  if (tasks.length >= count) return tasks;

  // Zu wenig im Pool: Hintergrund-Nachfüllen (nicht warten)
  const total = await getTaskCountByDomain(domain, true);
  if (total < MIN_POOL_SIZE) {
    fillPool(domain, Math.min(30, MIN_POOL_SIZE - total)).then((r) => {
      if (
        typeof console !== "undefined" &&
        import.meta.env?.DEV &&
        (r.saved > 0 || r.discarded > 0)
      ) {
        console.log(`[TaskDB] Filled ${domain}: saved=${r.saved}, discarded=${r.discarded}`);
      }
    });
  }

  // Trotzdem zurückgeben, was vorhanden ist (evtl. weniger als count)
  return tasks;
}

/**
 * Wie getTasksForUser, aber wartet auf Nachfüllen wenn aktuell 0 Aufgaben,
 * und versucht danach erneut aus der DB zu lesen (eine Runde).
 */
export async function getTasksForUserOrFill(
  domain: TaskDomain,
  userSkill: number,
  count: number = 1,
  bandWidth: number = 100
): Promise<Task[]> {
  const tasks = await getTasksForUser(domain, userSkill, count, bandWidth);
  if (tasks.length > 0) return tasks;

  const total = await getTaskCountByDomain(domain, true);
  if (total < MIN_POOL_SIZE) {
    await fillPool(domain, Math.min(50, Math.max(count, MIN_POOL_SIZE - total)));
    return getTasksByDifficulty(
      domain,
      Math.max(0, userSkill - bandWidth),
      Math.min(1000, userSkill + bandWidth),
      count
    );
  }
  return [];
}
