/**
 * MedAT-Statistiken pro Universität und Jahr.
 * Eine zentrale Datei – Werte hier aktualisieren, dann sind sie überall aktuell.
 */

export type MedATStats = {
  university: string;
  year: number;
  applicants: number;
  places: number;
  /** Grenzpunktzahl (falls bekannt) */
  cutoffScore?: number;
  /** Plätze Quote Österreich */
  quotaAT?: number;
  /** Plätze Quote EU */
  quotaEU?: number;
  /** Grenze in % (z.B. untere Grenze für Zulassung) */
  cutoffPercent?: number;
};

/** Humanmedizin – Werte schwanken jährlich; zur Einordnung, nicht als Garantie. */
export const MEDAT_STATS: MedATStats[] = [
  {
    university: "MedUni Wien",
    year: 2024,
    applicants: 12_400,
    places: 740,
    quotaAT: 660,
    quotaEU: 80,
    cutoffPercent: 91,
  },
  {
    university: "MedUni Wien",
    year: 2023,
    applicants: 11_900,
    places: 720,
    quotaAT: 640,
    quotaEU: 80,
  },
  {
    university: "MedUni Graz",
    year: 2024,
    applicants: 4_200,
    places: 360,
    quotaAT: 320,
    quotaEU: 40,
  },
  {
    university: "MedUni Graz",
    year: 2023,
    applicants: 4_100,
    places: 360,
    quotaAT: 320,
    quotaEU: 40,
  },
  {
    university: "MedUni Innsbruck",
    year: 2024,
    applicants: 3_800,
    places: 400,
    quotaAT: 355,
    quotaEU: 45,
  },
  {
    university: "MedUni Innsbruck",
    year: 2023,
    applicants: 3_600,
    places: 400,
    quotaAT: 355,
    quotaEU: 45,
  },
  {
    university: "MedUni Linz (JKU)",
    year: 2024,
    applicants: 3_200,
    places: 300,
    quotaAT: 270,
    quotaEU: 30,
  },
  {
    university: "MedUni Linz (JKU)",
    year: 2023,
    applicants: 3_000,
    places: 300,
    quotaAT: 270,
    quotaEU: 30,
  },
];

/** Gruppiert nach Uni (neuestes Jahr zuerst). */
export function getMedATStatsByUniversity(): { university: string; stats: MedATStats[] }[] {
  const byUni = new Map<string, MedATStats[]>();
  const sorted = [...MEDAT_STATS].sort((a, b) => b.year - a.year);
  for (const s of sorted) {
    const list = byUni.get(s.university) ?? [];
    list.push(s);
    byUni.set(s.university, list);
  }
  return Array.from(byUni.entries()).map(([university, stats]) => ({ university, stats }));
}

/** Aufnahmequote (Plätze / Bewerber) in Prozent – grobe Einordnung. */
export function admissionRatePercent(applicants: number, places: number): number {
  if (applicants <= 0) return 0;
  return Math.round((places / applicants) * 1000) / 10;
}
