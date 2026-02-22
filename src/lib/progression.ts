/**
 * MedPoints (XP) & Level – Karriereleiter vom Pflegepraktikant zum Primar.
 * Level-Gating: bestimmte Features sind ab einem Level freigeschaltet.
 */

export const XP_PER_LEVEL = 100;

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
  return Math.floor(value / XP_PER_LEVEL) + 1;
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

/** XP im aktuellen Level (0 … XP_PER_LEVEL-1). Boundary-safe: 100 XP → Level 2, in-Level 0. */
export function getXPInCurrentLevel(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  if (value <= 0) return 0;
  return value % XP_PER_LEVEL;
}

/** Fortschritt zum nächsten Level 0 … 100 (%). Verhindert Division durch 0. */
export function getLevelProgressPercent(xp: number | undefined | null): number {
  const value = Number.isFinite(xp) ? (xp as number) : 0;
  if (value <= 0 || XP_PER_LEVEL <= 0) return 0;
  return Math.min(100, (getXPInCurrentLevel(value) / XP_PER_LEVEL) * 100);
}

export function getLevelName(level: number | undefined | null): string {
  const l = Number.isFinite(level) ? Math.max(0, (level as number) - 1) : 0;
  if (l < LEVEL_NAMES.length) return LEVEL_NAMES[l] ?? "Pflegepraktikant";
  return `Primar +${l - LEVEL_NAMES.length + 1}`;
}
