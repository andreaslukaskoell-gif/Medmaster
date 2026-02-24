/**
 * Parses chapter content to extract MedAT-Fokus and Zusammenfassung blocks
 * so they can be rendered as dedicated cards instead of plain H2.
 */

const MEDAT_HEADER = "## MedAT-Fokus";
const SUMMARY_HEADER = "## Zusammenfassung (ultrakompakt)";

export type MedATSectionKey = "zentral" | "vertiefend" | "haeufigeFragen" | "fallen" | "zahlen";

const LABEL_TO_KEY: Record<string, MedATSectionKey> = {
  "Zentral prüfungsrelevant": "zentral",
  "Ergänzend vertiefend": "vertiefend",
  "Häufige Fragen": "haeufigeFragen",
  "Typische Prüfungsfallen / Verwechslungen": "fallen",
  "Typische Prüfungsfallen": "fallen",
  "Prüfungsrelevante Zahlen/Fakten": "zahlen",
  "Prüfungsrelevante Zahlen": "zahlen",
};

export type MedATSections = Partial<Record<MedATSectionKey, string>>;

function parseMedATBlock(block: string): MedATSections {
  const sections: MedATSections = {};
  const regex = /\*\*([^*]+?):\*\*\s*([\s\S]*?)(?=\n\s*\*\*|$)/g;
  const matches = [...block.matchAll(regex)];
  for (const m of matches) {
    const label = m[1].trim();
    const key = LABEL_TO_KEY[label];
    if (key) {
      const value = m[2].trim();
      if (value) sections[key] = value;
    }
  }
  return sections;
}

export type ContentSegment =
  | { type: "markdown"; content: string }
  | { type: "medat"; sections: MedATSections; rawIntro?: string }
  | { type: "summary"; content: string };

/**
 * Splits full chapter content into segments: markdown, medat card, summary card.
 * Preserves order so we can render: md → MedATFocusCard → md → SummaryCard → md …
 */
export function parseMedATAndSummary(fullContent: string): ContentSegment[] {
  if (!fullContent || !fullContent.trim()) return [{ type: "markdown", content: fullContent }];

  const segments: ContentSegment[] = [];
  type Marker = { index: number; type: "medat" | "summary" };
  const medatIdx = fullContent.indexOf(MEDAT_HEADER);
  const summaryIdx = fullContent.indexOf(SUMMARY_HEADER);
  const markers: Marker[] = [];
  if (medatIdx !== -1) markers.push({ index: medatIdx, type: "medat" });
  if (summaryIdx !== -1) markers.push({ index: summaryIdx, type: "summary" });
  markers.sort((a, b) => a.index - b.index);

  let lastEnd = 0;
  for (const marker of markers) {
    const header = marker.type === "medat" ? MEDAT_HEADER : SUMMARY_HEADER;
    const headerEnd = marker.index + header.length;
    const nextMarker = markers.find((m) => m.index > marker.index);
    const blockEnd = nextMarker ? nextMarker.index : fullContent.length;
    const blockContent = fullContent.slice(headerEnd, blockEnd).trim();

    if (marker.index > lastEnd) {
      const md = fullContent.slice(lastEnd, marker.index).trim();
      if (md) segments.push({ type: "markdown", content: md });
    }

    if (marker.type === "medat" && blockContent) {
      const sections = parseMedATBlock(blockContent);
      if (Object.keys(sections).length > 0) {
        const introMatch = blockContent.match(/^\*\*Zur gezielten[^*]*\*\*[^.\n]*/);
        segments.push({
          type: "medat",
          sections,
          rawIntro: introMatch ? introMatch[0].trim() : undefined,
        });
      }
    } else if (marker.type === "summary" && blockContent) {
      segments.push({ type: "summary", content: blockContent });
    }

    lastEnd = blockEnd;
  }

  if (lastEnd < fullContent.length) {
    const md = fullContent.slice(lastEnd).trim();
    if (md) segments.push({ type: "markdown", content: md });
  }

  if (segments.length === 0) return [{ type: "markdown", content: fullContent }];
  return segments;
}
