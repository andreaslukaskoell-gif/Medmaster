import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** MedAT-Stichtag: Erster Freitag im Juli 2026 */
export function getMedATDate(): Date {
  const july = new Date(2026, 6, 1); // July 1, 2026
  let day = july.getDay(); // 0 = Sun, 5 = Fri
  const daysToFriday = day <= 5 ? 5 - day : 7 - day + 5;
  return new Date(2026, 6, 1 + daysToFriday);
}

export function daysUntilMedAT(): number {
  const medatDate = getMedATDate();
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  medatDate.setHours(0, 0, 0, 0);
  const diff = medatDate.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/** Für Fortschrittsbalken: Zeitraum von Start (1 Jahr vor MedAT) bis Stichtag. progress 0 = Start, 1 = Stichtag. */
export function getMedATProgress(): { daysLeft: number; totalDays: number; progress: number } {
  const medat = getMedATDate();
  const start = new Date(medat);
  start.setFullYear(start.getFullYear() - 1);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  medat.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const totalDays = Math.ceil((medat.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const elapsed = Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const daysLeft = Math.max(0, Math.ceil((medat.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  const progress = totalDays > 0 ? Math.min(1, Math.max(0, elapsed / totalDays)) : 0;
  return { daysLeft, totalDays, progress };
}

export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "gerade eben";
  if (diffMins < 60) return `vor ${diffMins} Min`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `vor ${diffHours} Std`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return "gestern";
  if (diffDays < 7) return `vor ${diffDays} Tagen`;
  const diffWeeks = Math.floor(diffDays / 7);
  return `vor ${diffWeeks} Woche${diffWeeks > 1 ? "n" : ""}`;
}

export function generateMockPercentile(userScore: number): number {
  const mean = 65;
  const sd = 12;
  const z = (userScore - mean) / sd;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.8212560 + t * 1.3302744))));
  return Math.round(z > 0 ? (1 - p) * 100 : p * 100);
}

/**
 * Aggregiert Stichwort-Aktivität pro Tag aus stichwort_stats (lastPracticed).
 * Ein Tag zählt, wenn mindestens ein Stichwort an diesem Tag aktualisiert wurde.
 * Intensität = Anzahl der bearbeiteten Stichworte an dem Tag.
 */
export function getActivityFromStichwortStats(
  stichwortStats: Record<string, { lastPracticed: string | null }>
): Record<string, { minutes: number; questions: number }> {
  const byDay: Record<string, number> = {};
  for (const stat of Object.values(stichwortStats)) {
    const dateStr = stat.lastPracticed;
    if (!dateStr || typeof dateStr !== "string") continue;
    const day = dateStr.split("T")[0];
    if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
      byDay[day] = (byDay[day] ?? 0) + 1;
    }
  }
  const out: Record<string, { minutes: number; questions: number }> = {};
  for (const [day, count] of Object.entries(byDay)) {
    out[day] = { minutes: 0, questions: count };
  }
  return out;
}

export function generateMockActivityData(): Record<string, { minutes: number; questions: number }> {
  const data: Record<string, { minutes: number; questions: number }> = {};
  const now = new Date();
  for (let i = 0; i < 90; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    const active = Math.random() > 0.3;
    if (active) {
      data[key] = {
        minutes: Math.floor(Math.random() * 80 + 10),
        questions: Math.floor(Math.random() * 40 + 5),
      };
    }
  }
  return data;
}

export function generateLeaderboard(): { rank: number; name: string; xp: number; isUser: boolean; trend: "up" | "down" | "same" }[] {
  const names = [
    "Alex M.", "Sophie K.", "Lukas R.", "Emma W.", "Felix B.", "Laura S.",
    "Jonas H.", "Mia T.", "David P.", "Anna L.", "Maximilian G.", "Lena F.",
    "Paul N.", "Hannah D.", "Tim V.", "Sarah C.", "Niklas E.", "Julia A.",
    "Moritz Z.", "Du",
  ];
  const trends: ("up" | "down" | "same")[] = ["up", "down", "same"];
  const entries = names.map((name, i) => ({
    rank: i + 1,
    name,
    xp: Math.floor(3500 - i * 120 + Math.random() * 80),
    isUser: name === "Du",
    trend: trends[i % 3],
  }));
  entries.sort((a, b) => b.xp - a.xp);
  entries.forEach((e, i) => { e.rank = i + 1; });
  return entries;
}
