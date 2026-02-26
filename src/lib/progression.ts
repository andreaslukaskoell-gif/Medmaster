/**
 * MedPoints (XP) & Level – Karriereleiter vom Pflegepraktikant zum Primar.
 * Level-Gating: bestimmte Features sind ab einem Level freigeschaltet.
 *
 * XP skaliert pro Level: Level 1→2 = 100 XP, 2→3 = 150 XP, 3→4 = 200 XP, usw.
 * Formel: XP für Level L→L+1 = BASE_XP + (L - 1) * XP_STEP_INCREASE.
 */

/** XP für den ersten Level-Aufstieg (1 → 2). Wird auch für Anzeige "bis zu X XP" genutzt. */
export const XP_PER_LEVEL = 100;

/** Zusätzliche XP pro weiterem Level (100, 150, 200, 250, …). */
const XP_STEP_INCREASE = 50;

/**
 * Kumulative XP, die erreicht sein müssen, um ein Level zu haben.
 * Level 1 = 0, Level 2 = 100, Level 3 = 250, Level 4 = 450, Level 5 = 700, …
 */
export function getTotalXPForLevel(level: number): number {
  if (level <= 1) return 0;
  const L = level - 1; // Anzahl Level-Uploads
  return L * XP_PER_LEVEL + XP_STEP_INCREASE * ((L * (L - 1)) / 2);
}

export const LEVEL_NAMES: string[] = [
  "Pflegepraktikant",
  "Medizinstudent",
  "Praktikant",
  "Assistenzarzt",
  "Facharzt",
  "Oberarzt",
  "Primar",
  "Chefarzt",
  "Klinikdirektor",
  "Lehrstuhlinhaber",
];

/** Feature-Pfade und das Level, ab dem sie freigeschaltet sind */
export const FEATURE_REQUIRED_LEVEL: Record<string, number> = {
  "/ai-tutor": 0,
  "/schwachstellen": 0,
  "/simulation": 0,
};

export function getLevelFromXP(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  if (value <= 0) return 1;
  let level = 1;
  while (getTotalXPForLevel(level + 1) <= value) level += 1;
  return level;
}

export function getRequiredLevelForPath(path: string): number | null {
  if (FEATURE_REQUIRED_LEVEL[path] != null) return FEATURE_REQUIRED_LEVEL[path];
  return null;
}

export function getFeatureUnlockLabel(path: string): string | null {
  const level = getRequiredLevelForPath(path);
  if (level == null) return null;
  const labels: Record<string, string> = {
    "/ai-tutor": "AI-Tutor",
    "/schwachstellen": "Schwachstellen-Analyse",
    "/simulation": "Simulationen",
  };
  return labels[path] ?? null;
}

/** Welches Feature wird bei diesem Level freigeschaltet (für Level-Up-Overlay) */
export function getFeatureUnlockedAtLevel(level: number): string | null {
  const entries = Object.entries(FEATURE_REQUIRED_LEVEL);
  for (const [path, required] of entries) {
    if (required === level) return getFeatureUnlockLabel(path) ?? path;
  }
  return null;
}

/** XP im aktuellen Level (0 bis XP für dieses Level - 1). */
export function getXPInCurrentLevel(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  if (value <= 0) return 0;
  const level = getLevelFromXP(value);
  return value - getTotalXPForLevel(level);
}

/** XP, die für den Aufstieg von Level L zu L+1 nötig sind. */
export function getXPRequiredForNextLevel(xp: number | undefined | null): number {
  const level = getLevelFromXP(xp);
  return XP_PER_LEVEL + (level - 1) * XP_STEP_INCREASE;
}

/** Noch benötigte XP bis zum nächsten Level. */
export function getXPToNextLevel(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  const level = getLevelFromXP(value);
  const totalToNext = getTotalXPForLevel(level + 1);
  return Math.max(0, totalToNext - value);
}

/** Fortschritt zum nächsten Level 0 … 100 (%). */
export function getLevelProgressPercent(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  if (value <= 0) return 0;
  const required = getXPRequiredForNextLevel(value);
  if (required <= 0) return 100;
  const inLevel = getXPInCurrentLevel(value);
  return Math.min(100, (inLevel / required) * 100);
}

export function getLevelName(level: number | undefined | null): string {
  const l = Number.isFinite(level) ? Math.max(0, (level as number) - 1) : 0;
  if (l < LEVEL_NAMES.length) return LEVEL_NAMES[l] ?? "Pflegepraktikant";
  return `Primar +${l - LEVEL_NAMES.length + 1}`;
}
