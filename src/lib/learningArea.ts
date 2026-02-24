/**
 * Lernbereich für Interleaving: Pfad → Bereich.
 * Nur Bereiche mit "intensivem" Lernen zählen für den 45-Min-Timer.
 */

export type LearningArea =
  | "bms"
  | "kff"
  | "tv"
  | "sek"
  | "simulation"
  | "wissencheck"
  | "fortschritt"
  | "other";

const BMS_PREFIX = "/bms";
const KFF_PREFIX = "/kff";
const TV_PREFIX = "/tv";
const SEK_PREFIX = "/sek";
const SIMULATION_PREFIX = "/simulation";
const WISSENCHECK_PREFIX = "/wissencheck";
const FORTSCHRITT_PREFIX = "/fortschritt";
const SCHWACHSTELLEN_PREFIX = "/schwachstellen";
const STATISTIK_PREFIX = "/statistik";
const PROGNOSE_PREFIX = "/prognose";

export function pathnameToLearningArea(pathname: string): LearningArea {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p.startsWith(BMS_PREFIX)) return "bms";
  if (p.startsWith(KFF_PREFIX)) return "kff";
  if (p.startsWith(TV_PREFIX)) return "tv";
  if (p.startsWith(SEK_PREFIX)) return "sek";
  if (p.startsWith(SIMULATION_PREFIX)) return "simulation";
  if (p.startsWith(WISSENCHECK_PREFIX)) return "wissencheck";
  if (
    p.startsWith(FORTSCHRITT_PREFIX) ||
    p.startsWith(SCHWACHSTELLEN_PREFIX) ||
    p.startsWith(STATISTIK_PREFIX) ||
    p.startsWith(PROGNOSE_PREFIX)
  )
    return "fortschritt";
  return "other";
}

/** Bereiche, in denen wir die aktive Zeit tracken und nach 45 Min einen Wechsel vorschlagen. */
export const TRACKED_AREAS: LearningArea[] = [
  "bms",
  "kff",
  "tv",
  "sek",
  "simulation",
  "wissencheck",
  "fortschritt",
];

export function isTrackedArea(area: LearningArea): boolean {
  return area !== "other";
}

export function areaLabel(area: LearningArea): string {
  const labels: Record<LearningArea, string> = {
    bms: "BMS (Lernstoff)",
    kff: "KFF",
    tv: "TV",
    sek: "SEK",
    simulation: "Simulation",
    wissencheck: "Wissen-Check",
    fortschritt: "Fortschritt",
    other: "Sonstiges",
  };
  return labels[area];
}

/** Vorschlag für Kontextwechsel: wenn User in X ist, wohin wechseln? */
export function suggestedAlternateArea(
  current: LearningArea
): { area: LearningArea; path: string; label: string } | null {
  if (current === "bms") return { area: "kff", path: "/kff", label: "5 KFF-Aufgaben" };
  if (current === "kff") return { area: "bms", path: "/bms", label: "BMS-Kapitel" };
  if (current === "tv" || current === "sek" || current === "simulation")
    return { area: "kff", path: "/kff", label: "5 KFF-Aufgaben" };
  if (current === "wissencheck") return { area: "kff", path: "/kff", label: "5 KFF-Aufgaben" };
  if (current === "fortschritt") return { area: "bms", path: "/bms", label: "BMS-Kapitel" };
  return null;
}
