/**
 * Badge-System: Trophäen in Bronze, Silber, Gold.
 * Jedes Badge hat eine id, Name, Stufe, Beschreibung und wird durch Store-Daten geprüft.
 */

import type { Kapitel } from "@/data/bmsKapitel/types";

export type BadgeTier = "bronze" | "silver" | "gold";

export interface BadgeDefinition {
  id: string;
  name: string;
  tier: BadgeTier;
  description: string;
  /** Für Knowledge-Bridge etc.: wenn true, werden tiefere/tiefgreifendere Inhalte angezeigt */
  affectsContent?: boolean;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: "frühaufsteher",
    name: "Der Frühaufsteher",
    tier: "bronze",
    description: "Lerne 3 Tage in Folge vor 8 Uhr morgens.",
  },
  {
    id: "bms-gigant",
    name: "BMS-Gigant",
    tier: "gold",
    description: "Schließe alle Biologie-Module ab.",
  },
  {
    id: "präzisions-könig",
    name: "Präzisions-König",
    tier: "gold",
    description: "20 Quizfragen in Folge richtig (ohne Fehler).",
  },
  {
    id: "fehler-fresser",
    name: "Fehler-Fresser",
    tier: "silver",
    description: "Nutze 5× den Smart-Recovery-Modus.",
  },
  {
    id: "physik-profi",
    name: "Physik-Profi",
    tier: "gold",
    description: "Schließe alle Physik-Module ab.",
    affectsContent: true,
  },
];

const EARLY_BIRD_HOUR = 8;
const EARLY_BIRD_DAYS = 3;
const PRECISION_TARGET = 20;
const FEHLER_FRESSER_COUNT = 5;

export function checkEarlyBird(firstActivityTimeByDay: Record<string, string>): boolean {
  const dates = Object.keys(firstActivityTimeByDay).sort();
  if (dates.length < EARLY_BIRD_DAYS) return false;
  for (let start = dates.length - EARLY_BIRD_DAYS; start >= 0; start--) {
    const slice = dates.slice(start, start + EARLY_BIRD_DAYS);
    let allBefore8 = true;
    let consecutive = true;
    for (let i = 0; i < slice.length; i++) {
      const d = slice[i];
      const t = firstActivityTimeByDay[d];
      if (!t) {
        allBefore8 = false;
        break;
      }
      if (new Date(t).getHours() >= EARLY_BIRD_HOUR) allBefore8 = false;
      if (i > 0) {
        const prevNext = new Date(slice[i - 1]);
        prevNext.setDate(prevNext.getDate() + 1);
        if (prevNext.toISOString().split("T")[0] !== d) consecutive = false;
      }
    }
    if (allBefore8 && consecutive) return true;
  }
  return false;
}

export function getAllBiologyUnterkapitelIds(kapitel: Kapitel[]): string[] {
  const ids: string[] = [];
  for (const k of kapitel) {
    if (k.subject !== "biologie") continue;
    for (const u of k.unterkapitel || []) {
      if (u?.id) ids.push(u.id);
    }
  }
  return ids;
}

export function getAllPhysikUnterkapitelIds(kapitel: Kapitel[]): string[] {
  const ids: string[] = [];
  for (const k of kapitel) {
    if (k.subject !== "physik") continue;
    for (const u of k.unterkapitel || []) {
      if (u?.id) ids.push(u.id);
    }
  }
  return ids;
}

export function getBadgeProgress(
  badgeId: string,
  state: {
    completedChapters: string[];
    maxConsecutiveCorrectEver: number;
    smartRecoveryCount: number;
    firstActivityTimeByDay: Record<string, string>;
  },
  kapitel: Kapitel[] = []
): { earned: boolean; progress?: string } {
  switch (badgeId) {
    case "frühaufsteher":
      return { earned: checkEarlyBird(state.firstActivityTimeByDay) };
    case "bms-gigant": {
      const bioIds = getAllBiologyUnterkapitelIds(kapitel);
      const completed = bioIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: bioIds.length > 0 && completed >= bioIds.length,
        progress: `${completed}/${bioIds.length} Biologie-Module`,
      };
    }
    case "präzisions-könig":
      return {
        earned: state.maxConsecutiveCorrectEver >= PRECISION_TARGET,
        progress: `Beste Serie: ${state.maxConsecutiveCorrectEver}/${PRECISION_TARGET}`,
      };
    case "fehler-fresser":
      return {
        earned: state.smartRecoveryCount >= FEHLER_FRESSER_COUNT,
        progress: `${state.smartRecoveryCount}/${FEHLER_FRESSER_COUNT} Smart-Recovery`,
      };
    case "physik-profi": {
      const physikIds = getAllPhysikUnterkapitelIds(kapitel);
      const completed = physikIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: physikIds.length > 0 && completed >= physikIds.length,
        progress: `${completed}/${physikIds.length} Physik-Module`,
      };
    }
    default:
      return { earned: false };
  }
}
