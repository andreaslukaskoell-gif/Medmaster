import type { Kapitel } from "@/data/bmsKapitel/types";

/**
 * Merge static BMS chapters with Supabase chapters.
 * Supabase has precedence for non-sequenced chapters;
 * static content takes precedence for BMS learning-path (sequenced) chapters.
 */
export function mergeChaptersWithSupabase(
  staticChapters: Kapitel[],
  supabaseChapters: Kapitel[]
): Kapitel[] {
  const merged = [...staticChapters];
  for (const dynamicChapter of supabaseChapters) {
    if (!dynamicChapter?.id) continue;
    const index = merged.findIndex((c) => c?.id === dynamicChapter.id);
    if (index >= 0) {
      merged[index] = { ...merged[index], ...dynamicChapter };
    } else {
      merged.push(dynamicChapter);
    }
  }

  // BMS learning path chapters get their static content back
  const staticById = new Map(staticChapters.map((c) => [c.id, c]));
  return merged.map((chapter) => {
    const staticChap = staticById.get(chapter.id);
    if (staticChap?.sequence !== undefined) {
      return {
        ...chapter,
        title: staticChap.title,
        unterkapitel: staticChap.unterkapitel?.length
          ? staticChap.unterkapitel
          : chapter.unterkapitel,
        sequence: staticChap.sequence,
        sequenceTitle: staticChap.sequenceTitle,
        linkedChapters: staticChap.linkedChapters ?? [],
      };
    }
    return chapter;
  });
}

/** Filter to only BMS learning-path chapters (with sequence + content) */
export function filterBMSKapitel(chapters: Kapitel[]): Kapitel[] {
  return chapters.filter(
    (k) => k.sequence !== undefined && k.unterkapitel && k.unterkapitel.length > 0
  );
}

/** Count total and completed unterkapitel */
export function countUK(
  chapters: Kapitel[],
  completedChapters: string[]
): { total: number; completed: number } {
  let total = 0;
  let completed = 0;
  for (const k of chapters) {
    if (!k.unterkapitel || !Array.isArray(k.unterkapitel)) continue;
    total += k.unterkapitel.length;
    completed += k.unterkapitel.filter((u) => u && u.id && completedChapters.includes(u.id)).length;
  }
  return { total, completed };
}
