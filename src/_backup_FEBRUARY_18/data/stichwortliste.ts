// ============================================================
// OFFIZIELLE BMS-STICHWORTLISTE 2025/2026 — Re-exports + Hilfsfunktionen
// Raw data lives in stichworteData.ts (no app imports) to avoid circular chunks.
// ============================================================

import {
  alleStichworteListe as dataListe,
  alleStichworteBio as dataBio,
  alleStichworteChemie as dataChemie,
  alleStichwortePhysik as dataPhysik,
  alleStichworteMathe as dataMathe,
  type Stichwort,
} from "./stichworteData";

export type { Stichwort };
export const alleStichworteListe = dataListe;
export const alleStichworteBio = dataBio;
export const alleStichworteChemie = dataChemie;
export const alleStichwortePhysik = dataPhysik;
export const alleStichworteMathe = dataMathe;

// Hilfsfunktionen
export function getStichwortById(id: string): Stichwort | undefined {
  return alleStichworteListe.find((s) => s.id === id);
}

export function getStichworteByFach(fach: Stichwort["fach"]): Stichwort[] {
  return alleStichworteListe.filter((s) => s.fach === fach);
}

export function getStichworteByKapitel(fach: string, kapitelNr: number): Stichwort[] {
  return alleStichworteListe.filter((s) => s.fach === fach && s.kapitelNr === kapitelNr);
}

export function getNeu2026Stichworte(): Stichwort[] {
  return alleStichworteListe.filter((s) => s.neu2026);
}

export function getAbdeckungsStatistik(fach?: Stichwort["fach"]) {
  const list = fach ? getStichworteByFach(fach) : alleStichworteListe;
  const total = list.length;
  const abgedeckt = list.filter((s) => s.abgedeckt).length;
  const hoch = list.filter((s) => s.priorität === "hoch").length;
  const hochAbgedeckt = list.filter((s) => s.priorität === "hoch" && s.abgedeckt).length;
  const neu2026 = list.filter((s) => s.neu2026).length;
  const neu2026Abgedeckt = list.filter((s) => s.neu2026 && s.abgedeckt).length;
  return {
    total,
    abgedeckt,
    prozent: total > 0 ? Math.round((abgedeckt / total) * 100) : 0,
    hoch,
    hochAbgedeckt,
    hochProzent: hoch > 0 ? Math.round((hochAbgedeckt / hoch) * 100) : 0,
    neu2026,
    neu2026Abgedeckt,
  };
}

// Fach-Metadaten
export const fachConfig = {
  biologie: { label: "Biologie", fragen: 40, minuten: 30, color: "emerald", icon: "BookOpen" },
  chemie: { label: "Chemie", fragen: 24, minuten: 18, color: "red", icon: "Flask" },
  physik: { label: "Physik", fragen: 18, minuten: 16, color: "blue", icon: "Atom" },
  mathematik: { label: "Mathematik", fragen: 12, minuten: 11, color: "violet", icon: "Calculator" },
} as const;
