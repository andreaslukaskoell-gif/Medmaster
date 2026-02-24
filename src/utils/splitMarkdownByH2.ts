/**
 * Splits markdown content by H2 (##) headings for collapsible sections.
 * - Intro: content before the first ## (always shown open).
 * - Sections: each ## heading and its content until the next ##.
 */

export type MarkdownSection = {
  /** Slug for id/anchor (e.g. "einleitung", "si-basisgroessen") */
  id: string;
  /** Raw heading text (e.g. "Einleitung", "Das Internationale Einheitensystem") */
  title: string;
  /** Markdown content of this section (after the ## line) */
  content: string;
};

export type SplitMarkdownResult = {
  /** Content before the first ## (no heading); always open by default */
  intro: string;
  /** Sections headed by ## (each can be collapsed) */
  sections: MarkdownSection[];
};

/** Build a URL-safe slug from a heading for #anchor and element id */
export function slugifyHeading(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9-]/g, "");
}

const H2_REGEX = /^##\s+(.+)$/gm;

/**
 * Splits markdown by ## headings.
 * Intro = everything before first ##; sections = each ## + content until next ## or end.
 */
export function splitMarkdownByH2(markdown: string): SplitMarkdownResult {
  const raw = markdown.trim();
  if (!raw) {
    return { intro: "", sections: [] };
  }

  const matches = [...raw.matchAll(H2_REGEX)].map((m) => ({
    index: m.index as number,
    title: (m[1] as string).trim(),
    fullLength: (m[0] as string).length,
  }));

  if (matches.length === 0) {
    return { intro: raw, sections: [] };
  }

  const intro = raw.slice(0, matches[0].index).trim();
  const sections: MarkdownSection[] = [];

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index + matches[i].fullLength;
    const end = i + 1 < matches.length ? matches[i + 1].index : raw.length;
    const content = raw.slice(start, end).trim();
    const title = matches[i].title;
    sections.push({
      id: slugifyHeading(title),
      title,
      content,
    });
  }

  return { intro, sections };
}
