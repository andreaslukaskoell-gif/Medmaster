/**
 * Leaderboard: Global, Wochen-Champions, Fachbereich-Profi.
 * Mock-Daten für Anzeige; aktueller User wird aus Store eingefügt.
 */

export type LeaderboardCategory = "global" | "weekly" | "fach";
export type FachFilter = "biologie" | "chemie" | "physik" | "mathematik" | "kff";

export interface LeaderboardEntry {
  id: string;
  nickname: string;
  /** Initialen oder Avatar-URL – für Anonymität */
  avatar: string;
  level: number;
  /** Bis zu 3 Badge-IDs (z. B. für Icons) */
  badgeIds: string[];
  xp: number;
  /** XP der letzten 7 Tage (für Wochen-Champions) */
  xpThisWeek: number;
  /** Fach-spezifischer Score 0–100 (für Fachbereich-Profi) */
  subjectScores: Partial<Record<FachFilter, number>>;
  /** Rangänderung: positive = Plätze gutgemacht */
  rankChange: number;
  isCurrentUser: boolean;
  /** Gesetzter Rang nach Sortierung (1-based) */
  rank?: number;
}

const MOCK_NICKNAMES = [
  "ZukunftsDoc88",
  "MedATler22",
  "Stethoskop99",
  "AnatomieFan",
  "BioGenie",
  "ChemieQueen",
  "PhysikPro",
  "MatheMed",
  "KFFMaster",
  "LernFuchs",
  "ZellenLover",
  "MolekülJäger",
  "KlinikTraum",
  "RezeptSchreiber",
  "PulsChecker",
  "NeuroNerd",
  "OrganeLover",
  "StudienPlaner",
  "Frühaufsteher",
  "NachtOwl",
];

const BADGE_IDS = ["fruehaufsteher", "bms-gigant", "praezisions-koenig", "fehler-fresser", "physik-profi"];

function pick<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

/** Erzeugt deterministische Mock-Einträge (ohne aktuellen User). */
export function generateMockLeaderboardEntries(count: number): Omit<LeaderboardEntry, "isCurrentUser">[] {
  const entries: Omit<LeaderboardEntry, "isCurrentUser">[] = [];
  const usedNicknames = new Set<string>();
  for (let i = 0; i < count; i++) {
    const nickname = MOCK_NICKNAMES[i % MOCK_NICKNAMES.length] + (i >= MOCK_NICKNAMES.length ? String(i) : "");
    const baseXp = 4000 - i * 150 + Math.floor(Math.random() * 100);
    const xpThisWeek = Math.floor(200 - i * 5 + Math.random() * 80);
    const level = Math.max(1, Math.floor(baseXp / 100) + 1);
    const subjectScores: LeaderboardEntry["subjectScores"] = {
      biologie: Math.min(100, 50 + Math.floor(Math.random() * 50)),
      chemie: Math.min(100, 45 + Math.floor(Math.random() * 55)),
      physik: Math.min(100, 40 + Math.floor(Math.random() * 60)),
      mathematik: Math.min(100, 45 + Math.floor(Math.random() * 55)),
      kff: Math.min(100, 55 + Math.floor(Math.random() * 45)),
    };
    entries.push({
      id: `mock-${i}`,
      nickname: usedNicknames.has(nickname) ? `${nickname}#${i}` : nickname,
      avatar: nickname.slice(0, 2).toUpperCase(),
      level,
      badgeIds: pick(BADGE_IDS, Math.min(3, Math.floor(i / 5) + 1)),
      xp: Math.max(0, baseXp),
      xpThisWeek: Math.max(0, xpThisWeek),
      subjectScores,
      rankChange: [0, 1, 2, -1, -2][i % 5],
    });
    usedNicknames.add(nickname);
  }
  return entries;
}

/** Sortiert nach Global-XP und weist Ränge zu. */
export function rankByGlobal(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const sorted = [...entries].sort((a, b) => b.xp - a.xp);
  sorted.forEach((e, i) => {
    e.rank = i + 1;
  });
  return sorted;
}

/** Sortiert nach XP dieser Woche. */
export function rankByWeekly(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const sorted = [...entries].sort((a, b) => b.xpThisWeek - a.xpThisWeek);
  sorted.forEach((e, i) => {
    e.rank = i + 1;
  });
  return sorted;
}

/** Sortiert nach Fach-Score. */
export function rankByFach(entries: LeaderboardEntry[], fach: FachFilter): LeaderboardEntry[] {
  const sorted = [...entries].sort((a, b) => (b.subjectScores[fach] ?? 0) - (a.subjectScores[fach] ?? 0));
  sorted.forEach((e, i) => {
    e.rank = i + 1;
  });
  return sorted;
}

/** Berechnet Relativ-Ranking: "Top X%" (Anteil der User, die du schlägst). */
export function getTopPercent(rank: number, total: number): number {
  if (total <= 0) return 100;
  const percentile = ((total - rank) / total) * 100;
  return Math.max(1, Math.min(100, Math.round(percentile)));
}
