/**
 * Knowledge-Bridge: Verknüpfungen zwischen Themen über Schlagworte.
 * Ein Schlagwort (z.B. "Druck") verknüpft BMS Physik (Hydrostatischer Druck)
 * mit BMS Biologie (Blutdruck) – für vernetztes Lernen statt Silo-Wissen.
 */

import type { SubjectId } from "./glossary";

export interface BridgeTopic {
  subject: SubjectId;
  chapterId: string;
  chapterTitle: string;
  /** Kurzlabel für die Brücken-Ansicht (z.B. "Hydrostatischer Druck") */
  label: string;
}

/** Schlagwort (lowercase) → verwandte Themen in anderen Fächern/Kapiteln */
export const BRIDGE_BY_KEYWORD: Record<string, BridgeTopic[]> = {
  druck: [
    { subject: "physik", chapterId: "phys-kap1", chapterTitle: "Mechanik & Druck", label: "Hydrostatischer Druck" },
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Blutdruck & Kreislauf" },
  ],
  membran: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Zellmembran" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie Grundlagen", label: "Membranen & Diffusion" },
  ],
  zelle: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Zellaufbau" },
    { subject: "biologie", chapterId: "bio-kap2", chapterTitle: "Zellkern und Ribosomen", label: "Zellkern" },
  ],
  energie: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "ATP & Mitochondrien" },
    { subject: "physik", chapterId: "phys-kap1", chapterTitle: "Energie", label: "Energieerhaltung" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Chemische Energie" },
  ],
  diffusion: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Membrantransport" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Diffusion & Osmose" },
  ],
  protein: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Proteinbiosynthese" },
    { subject: "biologie", chapterId: "bio-kap2", chapterTitle: "Zellkern und Ribosomen", label: "Ribosomen" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Aminosäuren & Proteine" },
  ],
  sauerstoff: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Zellatmung" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Oxidation & Reduktion" },
  ],
  konzentration: [
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Osmose" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Konzentration & Lösungen" },
  ],
};

/**
 * Tiefere / anspruchsvollere Verknüpfungen – nur für Nutzer mit Badge „Physik-Profi“.
 * Erweiterte Schlagworte und fachübergreifende Konzepte.
 */
export const DEEP_BRIDGE_BY_KEYWORD: Record<string, BridgeTopic[]> = {
  druck: [
    { subject: "physik", chapterId: "phys-kap1", chapterTitle: "Mechanik & Druck", label: "Bernoulli-Gleichung & Strömungsdruck" },
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Osmotischer Druck in Zellen" },
  ],
  energie: [
    { subject: "physik", chapterId: "phys-kap1", chapterTitle: "Energie", label: "Entropie & thermodynamische Potenziale" },
    { subject: "chemie", chapterId: "chem-kap1", chapterTitle: "Chemie", label: "Aktivierungsenergie & Kinetik" },
  ],
  kraft: [
    { subject: "physik", chapterId: "phys-kap1", chapterTitle: "Mechanik", label: "Kraft und Drehmoment" },
    { subject: "biologie", chapterId: "bio-kap1", chapterTitle: "Die Zelle", label: "Motorproteine & Zytoskelett" },
  ],
};

/** Alle Schlagworte (für Abgleich mit Kapitel-Content) */
const ALL_KEYWORDS = Object.keys(BRIDGE_BY_KEYWORD);

/**
 * Findet Schlagworte, die im Text vorkommen (Wortgrenzen, case-insensitive).
 */
export function findKeywordsInText(text: string): string[] {
  if (!text || !text.trim()) return [];
  const lower = text.toLowerCase();
  const found: string[] = [];
  for (const kw of ALL_KEYWORDS) {
    const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (regex.test(lower)) found.push(kw);
  }
  return [...new Set(found)];
}

/**
 * Gibt verwandte Themen zurück, die über Schlagworte im aktuellen Kapitel verknüpft sind.
 * Filtert das aktuelle Kapitel heraus und dedupliziert nach chapterId.
 */
export function getRelatedTopics(
  content: string,
  currentChapterId: string,
  currentSubject: string
): { keyword: string; topic: BridgeTopic }[] {
  const keywords = findKeywordsInText(content);
  const seen = new Set<string>();
  const result: { keyword: string; topic: BridgeTopic }[] = [];
  for (const kw of keywords) {
    const topics = BRIDGE_BY_KEYWORD[kw] ?? [];
    for (const topic of topics) {
      if (topic.subject === currentSubject && topic.chapterId === currentChapterId) continue;
      const key = `${topic.subject}:${topic.chapterId}`;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push({ keyword: kw, topic });
    }
  }
  return result;
}

/**
 * Gibt tiefere Verknüpfungen zurück (für Nutzer mit Physik-Profi-Badge).
 * Nutzt erweiterte Schlagworte und anspruchsvollere Themen.
 */
export function getDeepRelatedTopics(
  content: string,
  currentChapterId: string,
  currentSubject: string
): { keyword: string; topic: BridgeTopic }[] {
  const lower = content.toLowerCase();
  const deepKeywords = Object.keys(DEEP_BRIDGE_BY_KEYWORD);
  const seen = new Set<string>();
  const result: { keyword: string; topic: BridgeTopic }[] = [];
  for (const kw of deepKeywords) {
    const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (!regex.test(lower)) continue;
    const topics = DEEP_BRIDGE_BY_KEYWORD[kw] ?? [];
    for (const topic of topics) {
      if (topic.subject === currentSubject && topic.chapterId === currentChapterId) continue;
      const key = `deep:${topic.subject}:${topic.chapterId}:${topic.label}`;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push({ keyword: kw, topic });
    }
  }
  return result;
}
