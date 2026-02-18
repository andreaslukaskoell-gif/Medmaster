/**
 * Standardisierte ContentStructure für alle Kapitel/Markdown-Seiten.
 * - Metadaten (subject, topic, difficulty, keywords) am Anfang des Dokuments
 * - Quiz-Integration: Quizblock am Ende wird erkannt und in die Quiz-Komponente geladen
 * - Safe-Fallback: Fehlende Metadaten → Standard-XP, Thema "Allgemein"
 * - Keywords dienen der Knowledge-Bridge und dem Smart-Linker (Verlinkung in anderen Kapiteln)
 */

import type { SelfTestQuestion } from "@/data/bmsKapitel/types";
import { parseKontrollfragen } from "@/utils/parseKontrollfragen";

// ============ Types ============

export interface ContentMetadata {
  /** z.B. Biologie, Chemie, Allgemein */
  subject: string;
  /** z.B. Zellbiologie, Allgemein */
  topic: string;
  /** 1–5, Standard 3 */
  difficulty: number;
  /** Liste für Knowledge-Bridge und Smart-Linker */
  keywords: string[];
}

export interface StructuredContent {
  metadata: ContentMetadata;
  /** Haupttext ohne Frontmatter und ohne Quiz-Block */
  body: string;
  /** Roher Markdown des Quiz-Blocks (falls vorhanden) */
  quizMarkdown: string | null;
  /** Parsed Quiz-Fragen für die Quiz-Komponente */
  questions: SelfTestQuestion[];
}

/** Standard-Metadaten, wenn keine oder ungültige Angaben vorhanden sind */
export const DEFAULT_METADATA: ContentMetadata = {
  subject: "Allgemein",
  topic: "Allgemein",
  difficulty: 3,
  keywords: [],
};

/** XP-Basis pro Schwierigkeit (für Analyse/Reporting); Standard-XP bei Fehlern */
const XP_BY_DIFFICULTY: Record<number, number> = {
  1: 10,
  2: 15,
  3: 20,
  4: 25,
  5: 30,
};

// ============ Frontmatter-Parser ============

const FRONTMATTER_REGEX = /^\s*---\s*\n([\s\S]*?)\n\s*---\s*\n?([\s\S]*)$/;
const KEY_VALUE_LINE = /^\s*([a-zA-Z][a-zA-Z0-9_-]*)\s*:\s*(.+)$/;

function parseFrontmatterBlock(block: string): Partial<ContentMetadata> {
  const out: Partial<ContentMetadata> = {};
  const lines = block.split("\n");
  for (const line of lines) {
    const m = line.match(KEY_VALUE_LINE);
    if (!m) continue;
    const key = m[1].trim().toLowerCase();
    const raw = m[2].trim();
    if (key === "subject") out.subject = raw || DEFAULT_METADATA.subject;
    else if (key === "topic") out.topic = raw || DEFAULT_METADATA.topic;
    else if (key === "difficulty") {
      const n = parseInt(raw, 10);
      out.difficulty = Number.isFinite(n) && n >= 1 && n <= 5 ? n : DEFAULT_METADATA.difficulty;
    } else if (key === "keywords") {
      const list = raw
        .split(/[,;|]/)
        .map((s) => s.trim())
        .filter(Boolean);
      out.keywords = list.length ? list : DEFAULT_METADATA.keywords;
    }
  }
  return out;
}

// ============ Quiz-Block-Erkennung ============

const QUIZ_SECTION_REGEX = /#+\s*(Übungsfragen|Kontrollfragen|Selbsttest|Quiz)[\s\S]*$/i;

function splitBodyAndQuiz(text: string): { main: string; quizMarkdown: string | null } {
  const match = text.match(QUIZ_SECTION_REGEX);
  if (!match || match.index === undefined) {
    return { main: text.trim(), quizMarkdown: null };
  }
  const main = text.slice(0, match.index).trim();
  const quizMarkdown = match[0].trim();
  return { main, quizMarkdown };
}

// ============ Public API ============

/** Leeres, sicheres Ergebnis bei Fehlern oder fehlendem Input. */
function getEmptyStructuredContent(): StructuredContent {
  return {
    metadata: { ...DEFAULT_METADATA },
    body: "",
    quizMarkdown: null,
    questions: [],
  };
}

/**
 * Parst ein Markdown-Dokument mit optionalem YAML-Frontmatter (--- ... ---)
 * und optionalem Quiz-Block am Ende.
 * Error-Proof: Fehlende/ungültige Felder → Default-Werte; wirft nie (vermeidet 500er).
 */
export function parseContentStructure(rawMarkdown: string | null | undefined): StructuredContent {
  const safeMetadata: ContentMetadata = { ...DEFAULT_METADATA };
  const raw =
    rawMarkdown == null ? "" : typeof rawMarkdown === "string" ? rawMarkdown : String(rawMarkdown);

  try {
    let body = raw;

    // 1) Frontmatter (optional)
    const fmMatch = raw.match(FRONTMATTER_REGEX);
    if (fmMatch) {
      const block = fmMatch[1] ?? "";
      const rest = fmMatch[2] ?? raw;
      const parsed = parseFrontmatterBlock(block);
      if (parsed.subject != null) safeMetadata.subject = String(parsed.subject);
      if (parsed.topic != null) safeMetadata.topic = String(parsed.topic);
      if (parsed.difficulty != null) safeMetadata.difficulty = parsed.difficulty;
      if (parsed.keywords != null && Array.isArray(parsed.keywords))
        safeMetadata.keywords = parsed.keywords;
      body = rest;
    }

    // 2) Body vs Quiz
    const { main, quizMarkdown } = splitBodyAndQuiz(body);
    let questions: SelfTestQuestion[] = [];
    if (quizMarkdown) {
      try {
        questions = parseKontrollfragen(quizMarkdown);
      } catch {
        questions = [];
      }
    }

    return {
      metadata: safeMetadata,
      body: main,
      quizMarkdown: quizMarkdown ?? null,
      questions,
    };
  } catch {
    return getEmptyStructuredContent();
  }
}

/**
 * Gibt die XP-Menge für ein Kapitel basierend auf Metadaten zurück.
 * Safe: Bei fehlender/invalider difficulty wird Standard-XP (difficulty 3) vergeben.
 */
export function getXpForContent(metadata: ContentMetadata | null | undefined): number {
  if (!metadata) return XP_BY_DIFFICULTY[DEFAULT_METADATA.difficulty];
  const d = metadata.difficulty;
  return XP_BY_DIFFICULTY[Number(d)] ?? XP_BY_DIFFICULTY[DEFAULT_METADATA.difficulty];
}

/**
 * Normalisiert Metadaten für die Analyse: Garantiert immer gültige Werte.
 */
export function normalizeMetadata(meta: Partial<ContentMetadata> | null | undefined): ContentMetadata {
  if (!meta) return { ...DEFAULT_METADATA };
  return {
    subject: meta.subject && String(meta.subject).trim() ? String(meta.subject).trim() : DEFAULT_METADATA.subject,
    topic: meta.topic && String(meta.topic).trim() ? String(meta.topic).trim() : DEFAULT_METADATA.topic,
    difficulty:
      Number(meta.difficulty) >= 1 && Number(meta.difficulty) <= 5 ? Number(meta.difficulty) : DEFAULT_METADATA.difficulty,
    keywords: Array.isArray(meta.keywords) ? meta.keywords.filter((k) => typeof k === "string" && k.trim()) : DEFAULT_METADATA.keywords,
  };
}

/** Eingabe für den Aufbau der Knowledge-Bridge: Keywords anderer Kapitel. */
export interface ChapterMetaForKeywords {
  chapterId: string;
  subject: string;
  topic: string;
  keywords: string[];
}

/** Erstellt KeywordLinkEntry-Liste für den Smart-Linker (Begriffe → anderes Kapitel). excludeChapterId = aktuelles Kapitel, damit keine Self-Links entstehen. */
export function buildKeywordLinkEntries(
  chapters: ChapterMetaForKeywords[],
  excludeChapterId?: string
): { term: string; chapterId: string; subject: string; description: string }[] {
  const out: { term: string; chapterId: string; subject: string; description: string }[] = [];
  for (const ch of chapters) {
    if (excludeChapterId && ch.chapterId === excludeChapterId) continue;
    const desc = ch.topic || ch.chapterId;
    for (const kw of ch.keywords || []) {
      const t = typeof kw === "string" ? kw.trim() : "";
      if (!t) continue;
      out.push({ term: t, chapterId: ch.chapterId, subject: ch.subject, description: desc });
    }
  }
  return out;
}

/**
 * Typ für BMS-Kapitel mit Unterkapitel (minimal für Keyword-Extraktion).
 * Ermöglicht getKeywordLinkEntriesFromChapters ohne direkten Import von data/bmsKapitel.
 */
export interface ChapterWithContent {
  id: string;
  subject: string;
  unterkapitel?: { content?: string }[];
}

/**
 * Liest aus einer Liste von Kapiteln (z. B. BMS-Kapitel) die ContentStructure-Metadaten
 * aus dem ersten Unterkapitel mit content und baut daraus die Keyword-Link-Liste.
 * Safe: Fehlende oder fehlerhafte Inhalte führen zu leeren Keywords, kein Crash.
 */
export function getKeywordLinkEntriesFromChapters(
  chapters: ChapterWithContent[],
  excludeChapterId?: string
): { term: string; chapterId: string; subject: string; description: string }[] {
  const metaList: ChapterMetaForKeywords[] = [];
  for (const ch of chapters) {
    let topic = DEFAULT_METADATA.topic;
    let keywords = DEFAULT_METADATA.keywords;
    const firstWithContent = ch.unterkapitel?.find((uk) => uk.content?.trim());
    if (firstWithContent?.content) {
      try {
        const parsed = parseContentStructure(firstWithContent.content);
        topic = parsed.metadata.topic;
        keywords = parsed.metadata.keywords;
      } catch {
        // Safe-Fallback: Defaults beibehalten
      }
    }
    metaList.push({
      chapterId: ch.id,
      subject: ch.subject,
      topic,
      keywords,
    });
  }
  return buildKeywordLinkEntries(metaList, excludeChapterId);
}
