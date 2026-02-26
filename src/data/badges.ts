/**
 * Badge-System: Trophäen in Bronze, Silber, Gold (Strava-inspiriert).
 * Meilensteine, Streaks, Konsistenz, Fächer, erste Schritte.
 */

import type { Kapitel } from "@/data/bmsKapitel/types";

export type BadgeTier = "bronze" | "silver" | "gold";

/** Eindeutiges Icon pro Badge (Lucide-Name) – jedes Badge hat genau ein eigenes Icon. */
export type BadgeIconName =
  | "HelpCircle"
  | "BookOpen"
  | "Flame"
  | "FlameKindling"
  | "Sparkles"
  | "Crown"
  | "Hash"
  | "Route"
  | "Award"
  | "Medal"
  | "CalendarCheck"
  | "Target"
  | "CircleDot"
  | "CircleCheck"
  | "Sun"
  | "SunDim"
  | "Sunrise"
  | "Crosshair"
  | "RefreshCw"
  | "Leaf"
  | "FlaskConical"
  | "Atom"
  | "Calculator"
  | "Brain"
  | "Lightbulb"
  | "BookMarked"
  | "Bookmark"
  | "Scale"
  | "GraduationCap";

export interface BadgeDefinition {
  id: string;
  name: string;
  tier: BadgeTier;
  /** Eigenes Logo/Icon pro Badge (Lucide-Icon-Name). */
  icon: BadgeIconName;
  description: string;
  affectsContent?: boolean;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: "erstes-quiz",
    name: "Erstes Quiz",
    tier: "bronze",
    icon: "HelpCircle",
    description: "Löse dein erstes Quiz.",
  },
  {
    id: "erstes-kapitel",
    name: "Erstes Kapitel",
    tier: "bronze",
    icon: "BookOpen",
    description: "Schließe dein erstes BMS-Unterkapitel ab.",
  },
  {
    id: "streak-3",
    name: "Dranbleiben",
    tier: "bronze",
    icon: "Flame",
    description: "3 Tage in Folge gelernt.",
  },
  {
    id: "streak-7",
    name: "Wochen-Champion",
    tier: "silver",
    icon: "FlameKindling",
    description: "7 Tage in Folge gelernt.",
  },
  {
    id: "streak-14",
    name: "Zwei-Wochen-Feuer",
    tier: "gold",
    icon: "Sparkles",
    description: "14 Tage in Folge gelernt.",
  },
  {
    id: "streak-30",
    name: "Monats-Held",
    tier: "gold",
    icon: "Crown",
    description: "30 Tage in Folge gelernt.",
  },
  {
    id: "fragen-100",
    name: "Hunderter",
    tier: "bronze",
    icon: "Hash",
    description: "100 Quizfragen beantwortet.",
  },
  {
    id: "fragen-500",
    name: "Fragen-Marathon",
    tier: "silver",
    icon: "Route",
    description: "500 Quizfragen beantwortet.",
  },
  {
    id: "fragen-1000",
    name: "Tausendfragen-Club",
    tier: "gold",
    icon: "Award",
    description: "1.000 Quizfragen beantwortet.",
  },
  {
    id: "fragen-2500",
    name: "MedAT-Veteran",
    tier: "gold",
    icon: "Medal",
    description: "2.500 Quizfragen beantwortet.",
  },
  {
    id: "wochen-warrior",
    name: "Wochen-Warrior",
    tier: "silver",
    icon: "CalendarCheck",
    description: "7 Tage in einer Woche aktiv.",
  },
  {
    id: "tagesziel-5",
    name: "Ziel-Starter",
    tier: "bronze",
    icon: "Target",
    description: "5× das Tagesziel erreicht.",
  },
  {
    id: "tagesziel-14",
    name: "Ziel-Läufer",
    tier: "silver",
    icon: "CircleDot",
    description: "14× das Tagesziel erreicht.",
  },
  {
    id: "tagesziel-30",
    name: "Ziel-Marathon",
    tier: "gold",
    icon: "CircleCheck",
    description: "30× das Tagesziel erreicht.",
  },
  {
    id: "daily-5",
    name: "Daily-Streak 5",
    tier: "bronze",
    icon: "Sun",
    description: "BMS des Tages 5 Tage in Folge gelöst.",
  },
  {
    id: "daily-10",
    name: "Daily-Streak 10",
    tier: "silver",
    icon: "SunDim",
    description: "BMS des Tages 10 Tage in Folge gelöst.",
  },
  {
    id: "frühaufsteher",
    name: "Der Frühaufsteher",
    tier: "bronze",
    icon: "Sunrise",
    description: "Lerne 3 Tage in Folge vor 8 Uhr morgens.",
  },
  {
    id: "präzisions-könig",
    name: "Präzisions-König",
    tier: "gold",
    icon: "Crosshair",
    description: "20 Quizfragen in Folge richtig (ohne Fehler).",
  },
  {
    id: "fehler-fresser",
    name: "Fehler-Fresser",
    tier: "silver",
    icon: "RefreshCw",
    description: "Nutze 5× den Smart-Recovery-Modus.",
  },
  {
    id: "bms-gigant",
    name: "BMS-Gigant",
    tier: "gold",
    icon: "Leaf",
    description: "Schließe alle Biologie-Module ab.",
  },
  {
    id: "chemie-profi",
    name: "Chemie-Profi",
    tier: "gold",
    icon: "FlaskConical",
    description: "Schließe alle Chemie-Module ab.",
  },
  {
    id: "physik-profi",
    name: "Physik-Profi",
    tier: "gold",
    icon: "Atom",
    description: "Schließe alle Physik-Module ab.",
    affectsContent: true,
  },
  {
    id: "mathe-profi",
    name: "Mathe-Profi",
    tier: "gold",
    icon: "Calculator",
    description: "Schließe alle Mathematik-Module ab.",
  },
  {
    id: "erstes-kff",
    name: "Erstes KFF",
    tier: "bronze",
    icon: "Brain",
    description: "Erste KFF-Übung absolviert.",
  },
  {
    id: "erstes-tv",
    name: "Erstes TV",
    tier: "bronze",
    icon: "BookMarked",
    description: "Erstes Textverständnis absolviert.",
  },
  {
    id: "erstes-sek",
    name: "Erstes SEK",
    tier: "bronze",
    icon: "Scale",
    description: "Erste Sozialen Entscheiden-Übung absolviert.",
  },
  {
    id: "kff-10",
    name: "KFF-Routine",
    tier: "silver",
    icon: "Lightbulb",
    description: "10 KFF-Sessions absolviert.",
  },
  {
    id: "tv-5",
    name: "TV-Leser",
    tier: "silver",
    icon: "Bookmark",
    description: "5 Textverständnis-Texte bearbeitet.",
  },
  {
    id: "sek-5",
    name: "SEK-Entscheider",
    tier: "silver",
    icon: "GraduationCap",
    description: "5 SEK-Übungen absolviert.",
  },
];

const EARLY_BIRD_HOUR = 8;
const EARLY_BIRD_DAYS = 3;
const PRECISION_TARGET = 20;
const FEHLER_FRESSER_COUNT = 5;
const STREAK_3 = 3;
const STREAK_7 = 7;
const STREAK_14 = 14;
const STREAK_30 = 30;
const FRAGEN_100 = 100;
const FRAGEN_500 = 500;
const FRAGEN_1000 = 1000;
const FRAGEN_2500 = 2500;
const TAGESZIEL_5 = 5;
const TAGESZIEL_14 = 14;
const TAGESZIEL_30 = 30;
const DAILY_STREAK_5 = 5;
const DAILY_STREAK_10 = 10;
const KFF_SESSIONS_10 = 10;
const TV_SESSIONS_5 = 5;
const SEK_SESSIONS_5 = 5;

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

export function getAllChemieUnterkapitelIds(kapitel: Kapitel[]): string[] {
  const ids: string[] = [];
  for (const k of kapitel) {
    if (k.subject !== "chemie") continue;
    for (const u of k.unterkapitel || []) {
      if (u?.id) ids.push(u.id);
    }
  }
  return ids;
}

export function getAllMatheUnterkapitelIds(kapitel: Kapitel[]): string[] {
  const ids: string[] = [];
  for (const k of kapitel) {
    if (k.subject !== "mathematik") continue;
    for (const u of k.unterkapitel || []) {
      if (u?.id) ids.push(u.id);
    }
  }
  return ids;
}

/** Erweiterter State für Badge-Prüfung (optional für neue Badges). */
export type BadgeState = {
  completedChapters: string[];
  maxConsecutiveCorrectEver: number;
  smartRecoveryCount: number;
  firstActivityTimeByDay: Record<string, string>;
  streak?: number;
  totalQuestions?: number;
  goalAchievedCount?: number;
  dailyChallengeStreak?: number;
  quizResultsByType?: { bms: number; kff: number; tv: number; sek: number };
};

export function getBadgeProgress(
  badgeId: string,
  state: BadgeState,
  kapitel: Kapitel[] = []
): { earned: boolean; progress?: string } {
  const streak = state.streak ?? 0;
  const totalQuestions = state.totalQuestions ?? 0;
  const goalAchievedCount = state.goalAchievedCount ?? 0;
  const dailyChallengeStreak = state.dailyChallengeStreak ?? 0;
  const byType = state.quizResultsByType ?? { bms: 0, kff: 0, tv: 0, sek: 0 };

  switch (badgeId) {
    case "erstes-quiz":
      return {
        earned: byType.bms + byType.kff + byType.tv + byType.sek >= 1,
        progress: totalQuestions > 0 ? `${totalQuestions} Fragen gesamt` : undefined,
      };
    case "erstes-kapitel": {
      const completed = state.completedChapters.length;
      return {
        earned: completed >= 1,
        progress: `${completed} Kapitel abgeschlossen`,
      };
    }
    case "streak-3":
      return { earned: streak >= STREAK_3, progress: `Aktuell: ${streak} Tage` };
    case "streak-7":
      return { earned: streak >= STREAK_7, progress: `Aktuell: ${streak} Tage` };
    case "streak-14":
      return { earned: streak >= STREAK_14, progress: `Aktuell: ${streak} Tage` };
    case "streak-30":
      return { earned: streak >= STREAK_30, progress: `Aktuell: ${streak} Tage` };
    case "fragen-100":
      return {
        earned: totalQuestions >= FRAGEN_100,
        progress: `${totalQuestions}/${FRAGEN_100} Fragen`,
      };
    case "fragen-500":
      return {
        earned: totalQuestions >= FRAGEN_500,
        progress: `${totalQuestions}/${FRAGEN_500} Fragen`,
      };
    case "fragen-1000":
      return {
        earned: totalQuestions >= FRAGEN_1000,
        progress: `${totalQuestions}/${FRAGEN_1000} Fragen`,
      };
    case "fragen-2500":
      return {
        earned: totalQuestions >= FRAGEN_2500,
        progress: `${totalQuestions}/${FRAGEN_2500} Fragen`,
      };
    case "wochen-warrior": {
      const dates = Object.keys(state.firstActivityTimeByDay ?? {}).sort();
      if (dates.length < 7) return { earned: false, progress: `${dates.length}/7 Tagen aktiv` };
      const last7 = dates.slice(-7);
      let consecutive = true;
      for (let i = 1; i < last7.length; i++) {
        const prev = new Date(last7[i - 1]);
        prev.setDate(prev.getDate() + 1);
        if (prev.toISOString().split("T")[0] !== last7[i]) {
          consecutive = false;
          break;
        }
      }
      return {
        earned: consecutive,
        progress: consecutive ? "7 Tage in Folge" : `${dates.length} Tage gesamt`,
      };
    }
    case "tagesziel-5":
      return {
        earned: goalAchievedCount >= TAGESZIEL_5,
        progress: `${goalAchievedCount}/${TAGESZIEL_5} Tagesziele`,
      };
    case "tagesziel-14":
      return {
        earned: goalAchievedCount >= TAGESZIEL_14,
        progress: `${goalAchievedCount}/${TAGESZIEL_14} Tagesziele`,
      };
    case "tagesziel-30":
      return {
        earned: goalAchievedCount >= TAGESZIEL_30,
        progress: `${goalAchievedCount}/${TAGESZIEL_30} Tagesziele`,
      };
    case "daily-5":
      return {
        earned: dailyChallengeStreak >= DAILY_STREAK_5,
        progress: `BMS des Tages: ${dailyChallengeStreak}/${DAILY_STREAK_5} Streak`,
      };
    case "daily-10":
      return {
        earned: dailyChallengeStreak >= DAILY_STREAK_10,
        progress: `BMS des Tages: ${dailyChallengeStreak}/${DAILY_STREAK_10} Streak`,
      };
    case "frühaufsteher":
      return { earned: checkEarlyBird(state.firstActivityTimeByDay) };
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
    case "bms-gigant": {
      const bioIds = getAllBiologyUnterkapitelIds(kapitel);
      const completed = bioIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: bioIds.length > 0 && completed >= bioIds.length,
        progress: `${completed}/${bioIds.length} Biologie-Module`,
      };
    }
    case "chemie-profi": {
      const chemieIds = getAllChemieUnterkapitelIds(kapitel);
      const completed = chemieIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: chemieIds.length > 0 && completed >= chemieIds.length,
        progress: `${completed}/${chemieIds.length} Chemie-Module`,
      };
    }
    case "physik-profi": {
      const physikIds = getAllPhysikUnterkapitelIds(kapitel);
      const completed = physikIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: physikIds.length > 0 && completed >= physikIds.length,
        progress: `${completed}/${physikIds.length} Physik-Module`,
      };
    }
    case "mathe-profi": {
      const matheIds = getAllMatheUnterkapitelIds(kapitel);
      const completed = matheIds.filter((id) => state.completedChapters.includes(id)).length;
      return {
        earned: matheIds.length > 0 && completed >= matheIds.length,
        progress: `${completed}/${matheIds.length} Mathe-Module`,
      };
    }
    case "erstes-kff":
      return {
        earned: byType.kff >= 1,
        progress: byType.kff > 0 ? `${byType.kff} KFF-Sessions` : undefined,
      };
    case "erstes-tv":
      return {
        earned: byType.tv >= 1,
        progress: byType.tv > 0 ? `${byType.tv} TV-Texte` : undefined,
      };
    case "erstes-sek":
      return {
        earned: byType.sek >= 1,
        progress: byType.sek > 0 ? `${byType.sek} SEK-Übungen` : undefined,
      };
    case "kff-10":
      return {
        earned: byType.kff >= KFF_SESSIONS_10,
        progress: `${byType.kff}/${KFF_SESSIONS_10} KFF-Sessions`,
      };
    case "tv-5":
      return {
        earned: byType.tv >= TV_SESSIONS_5,
        progress: `${byType.tv}/${TV_SESSIONS_5} TV-Texte`,
      };
    case "sek-5":
      return {
        earned: byType.sek >= SEK_SESSIONS_5,
        progress: `${byType.sek}/${SEK_SESSIONS_5} SEK-Übungen`,
      };
    default:
      return { earned: false };
  }
}
