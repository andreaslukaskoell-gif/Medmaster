/**
 * Hinterfrag-Modus: Markdown-Marker für Active Recall.
 *
 * Format im Text: [? Frage | Antwort ]
 * - Frage: wird im Hinterfrag-Modus angezeigt (z.B. "Was verbraucht die Na-K-Pumpe?")
 * - Antwort: wird enthüllt bei Klick/Hover (z.B. "ATP")
 *
 * Beim Schreiben einfach einfügen, z.B.:
 *   Die Na-K-Pumpe ist aktiv. [? Was verbraucht die Na-K-Pumpe hier? | Sie verbraucht ATP. ]
 */

const MARKER_REGEX = /\[\?\s*([^|]+?)\s*\|\s*([^\]]+?)\s*\]/g;
const PLACEHOLDER_PREFIX = "\u0000HINTERFRAG_";
const PLACEHOLDER_SUFFIX = "\u0000";

export interface HinterfragBlock {
  question: string;
  answer: string;
}

export interface ParseHinterfragResult {
  /** Text mit Platzhaltern \u0000HINTERFRAG_0\u0000 etc. */
  contentWithPlaceholders: string;
  blocks: HinterfragBlock[];
}

/**
 * Findet alle [? Frage | Antwort ]-Marker, ersetzt sie durch Platzhalter
 * und gibt die Block-Liste zurück.
 */
export function parseHinterfragMarkers(content: string): ParseHinterfragResult {
  const blocks: HinterfragBlock[] = [];
  let index = 0;
  const contentWithPlaceholders = content.replace(MARKER_REGEX, (_, question, answer) => {
    blocks.push({ question: question.trim(), answer: answer.trim() });
    const placeholder = `${PLACEHOLDER_PREFIX}${index}${PLACEHOLDER_SUFFIX}`;
    index += 1;
    return placeholder;
  });
  return { contentWithPlaceholders, blocks };
}

/** Platzhalter-Regex zum Aufteilen des Inhalts (für Rendering). */
export const PLACEHOLDER_REGEX = new RegExp(
  `${escapeRegex(PLACEHOLDER_PREFIX)}(\\d+)${escapeRegex(PLACEHOLDER_SUFFIX)}`,
  "g"
);

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Prüft, ob im Text überhaupt Hinterfrag-Marker vorkommen.
 */
export function hasHinterfragMarkers(content: string): boolean {
  return new RegExp(MARKER_REGEX.source).test(content);
}
