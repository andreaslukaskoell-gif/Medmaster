/**
 * Smart-Linking: Mapping von Begriffen (Keywords) zu Kapitel-IDs.
 * Beim Anzeigen von Content werden diese Begriffe automatisch verlinkt;
 * Hover zeigt eine Kurzbeschreibung, Klick navigiert zum Kapitel.
 *
 * Erweiterung: Einfach weitere Einträge hinzufügen – die App verlinkt sie automatisch.
 */

export type SubjectId = "biologie" | "chemie" | "physik" | "mathematik";

export interface GlossaryEntry {
  /** Begriff, der im Text ersetzt wird (exakte Schreibweise) */
  term: string;
  /** BMS-Kapitel-ID (z.B. "bio-kap1") */
  chapterId: string;
  subject: SubjectId;
  /** Kurzbeschreibung für Tooltip */
  description: string;
}

/** Glossar: Begriff → Kapitel + Beschreibung. Längere Begriffe zuerst, damit z.B. "Zellmembran" vor "Membran" matcht. */
export const glossaryEntries: GlossaryEntry[] = [
  // Biologie – Die Zelle (bio-kap1)
  { term: "Zellmembran", chapterId: "bio-kap1", subject: "biologie", description: "Äußere Hülle der Zelle; regelt den Stoffaustausch." },
  { term: "Zellkern", chapterId: "bio-kap1", subject: "biologie", description: "Steuerzentrale der Zelle; enthält die DNA." },
  { term: "Zytoplasma", chapterId: "bio-kap1", subject: "biologie", description: "Zellflüssigkeit zwischen Zellkern und Zellmembran." },
  { term: "Mitochondrium", chapterId: "bio-kap1", subject: "biologie", description: "Kraftwerk der Zelle; Ort der Zellatmung." },
  { term: "Mitochondrien", chapterId: "bio-kap1", subject: "biologie", description: "Kraftwerke der Zelle; Ort der Zellatmung." },
  { term: "Ribosom", chapterId: "bio-kap1", subject: "biologie", description: "Ort der Proteinbiosynthese." },
  { term: "Ribosomen", chapterId: "bio-kap1", subject: "biologie", description: "Orte der Proteinbiosynthese." },
  { term: "Endoplasmatisches Retikulum", chapterId: "bio-kap1", subject: "biologie", description: "Zellorganelle für Transport und Stoffwechsel." },
  { term: "Golgi-Apparat", chapterId: "bio-kap1", subject: "biologie", description: "Verpackung und Versand von Proteinen." },
  { term: "Lysosom", chapterId: "bio-kap1", subject: "biologie", description: "Verdauungsorganell der Zelle." },
  { term: "Lysosomen", chapterId: "bio-kap1", subject: "biologie", description: "Verdauungsorganelle der Zelle." },
  { term: "Zellorganelle", chapterId: "bio-kap1", subject: "biologie", description: "Funktionelle Einheiten innerhalb der Zelle." },
  { term: "Zellorganellen", chapterId: "bio-kap1", subject: "biologie", description: "Funktionelle Einheiten innerhalb der Zelle." },
  { term: "Zellstruktur", chapterId: "bio-kap1", subject: "biologie", description: "Aufbau der Zelle." },
  { term: "Zelle", chapterId: "bio-kap1", subject: "biologie", description: "Kleinste lebende Einheit." },
  { term: "Zellen", chapterId: "bio-kap1", subject: "biologie", description: "Kleinste lebende Einheiten." },
];

/** Escape für RegExp (Sonderzeichen) */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Sortierte Begriffe (längste zuerst) für eindeutiges Matching */
const sortedTerms = [...glossaryEntries].sort((a, b) => b.term.length - a.term.length);

/** RegExp zum Finden von Glossar-Begriffen (Wortgrenzen, case-sensitive wie im Eintrag) */
let cachedRegex: RegExp | null = null;

function getGlossaryRegex(): RegExp {
  if (cachedRegex) return cachedRegex;
  const pattern = sortedTerms
    .map((e) => `(${escapeRegex(e.term)})`)
    .join("|");
  cachedRegex = new RegExp(`\\b(${pattern})\\b`, "g");
  return cachedRegex;
}

/** Eintrag anhand des exakten Begriffs finden */
export function getGlossaryEntryByTerm(term: string): GlossaryEntry | undefined {
  return glossaryEntries.find((e) => e.term === term);
}

/**
 * Eintrag aus der ContentStructure-Keyword-Liste anderer Kapitel (Knowledge-Bridge).
 * Wird mit dem Glossar zusammengeführt; Links aus Keywords erhalten im Titel das Präfix "[Keyword] "
 * für dezente Darstellung (z. B. punktierte Unterstreichung) in der Markdown-Komponente.
 */
export interface KeywordLinkEntry {
  term: string;
  chapterId: string;
  subject: string;
  description: string;
}

const KEYWORD_TITLE_PREFIX = "[Keyword] ";

/** Erstellt ein RegExp aus Glossar + optionalen Keyword-Einträgen (längste Begriffe zuerst). Glossar hat Vorrang bei Duplikaten. */
function buildMergedRegex(extraEntries: KeywordLinkEntry[]): RegExp | null {
  const seen = new Set<string>();
  const terms: { term: string; fromGlossary: boolean }[] = [];
  for (const e of glossaryEntries) {
    if (!seen.has(e.term)) {
      seen.add(e.term);
      terms.push({ term: e.term, fromGlossary: true });
    }
  }
  for (const e of extraEntries) {
    const t = e.term?.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    terms.push({ term: t, fromGlossary: false });
  }
  if (terms.length === 0) return null;
  terms.sort((a, b) => b.term.length - a.term.length);
  const pattern = terms.map(({ term }) => `(${escapeRegex(term)})`).join("|");
  return new RegExp(`\\b(?:${pattern})\\b`, "g");
}

/**
 * Ersetzt im Text alle Glossar-Begriffe durch Markdown-Links.
 * Optional: keywordEntries aus den keywords anderer Kapitel (ContentStructure) hinzufügen;
 * diese werden dezent verlinkt (Titel mit "[Keyword] "-Präfix für Styling im Renderer).
 */
export function processTextForSmartLinks(
  text: string,
  pathForChapter: (subject: string, chapterId: string) => string,
  keywordEntries?: KeywordLinkEntry[]
): string {
  if (!text?.length) return text;
  const regex = keywordEntries?.length
    ? buildMergedRegex(keywordEntries)
    : getGlossaryRegex();
  if (!regex) return text;
  return text.replace(regex, (match) => {
    const glossaryEntry = getGlossaryEntryByTerm(match);
    if (glossaryEntry) {
      const url = pathForChapter(glossaryEntry.subject, glossaryEntry.chapterId);
      const title = glossaryEntry.description.replace(/"/g, '\\"');
      return `[${match}](${url} "${title}")`;
    }
    const kw = keywordEntries?.find((e) => e.term === match);
    if (kw) {
      const url = pathForChapter(kw.subject, kw.chapterId);
      const title = (KEYWORD_TITLE_PREFIX + kw.description).replace(/"/g, '\\"');
      return `[${match}](${url} "${title}")`;
    }
    return match;
  });
}

/** Prüft, ob der Link-Titel von einem Keyword-Eintrag stammt (für dezente Darstellung). */
export function isKeywordLinkTitle(title: string | undefined): boolean {
  return Boolean(title?.startsWith(KEYWORD_TITLE_PREFIX));
}

/** Entfernt das [Keyword]-Präfix für die Tooltip-Anzeige. */
export function getKeywordLinkDescription(title: string | undefined): string {
  if (!title) return "";
  return isKeywordLinkTitle(title) ? title.slice(KEYWORD_TITLE_PREFIX.length) : title;
}
