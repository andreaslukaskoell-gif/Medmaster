/**
 * BMS Route / ID Mapping
 * 
 * Stellt sicher, dass Kapitel-IDs aus der DB mit den Routen übereinstimmen.
 * Routen: /bms, /bms/:fach, /bms/:fach/:kapitel
 * 
 * DB-IDs: z.B. "bio-kap1", "biologie" (subject), "bio-kap1-uk-123" (subchapter)
 * URL fach: "biologie" | "bio" | "chemie" | "physik" | "mathematik"
 * URL kapitel: "bio-kap1" oder "kap1" (wird mit fach zu chapter id ergänzt)
 */

export const SUBJECT_SLUG_TO_ID: Record<string, string> = {
  bio: 'biologie',
  biologie: 'biologie',
  chemie: 'chemie',
  chem: 'chemie',
  physik: 'physik',
  phys: 'physik',
  mathematik: 'mathematik',
  mathe: 'mathematik',
  math: 'mathematik',
};

export const SUBJECT_ID_TO_SLUG: Record<string, string> = {
  biologie: 'biologie',
  chemie: 'chemie',
  physik: 'physik',
  mathematik: 'mathematik',
};

/**
 * URL fach-Parameter (z.B. "bio" oder "biologie") → subject id für Filter
 */
export function subjectFromSlug(slug: string | undefined): string | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return SUBJECT_SLUG_TO_ID[normalized] ?? (subjectsHasId(normalized) ? normalized : null);
}

function subjectsHasId(id: string): boolean {
  return ['biologie', 'chemie', 'physik', 'mathematik'].includes(id);
}

/**
 * Findet die Chapter-ID aus URL :kapitel und :fach.
 * DB speichert z.B. "bio-kap1" – URL kann "bio-kap1" oder "kap1" sein.
 */
export function chapterIdFromParams(
  fach: string | undefined,
  kapitel: string | undefined,
  allChapterIds: string[]
): string | null {
  if (!kapitel) return null;
  const subjectId = subjectFromSlug(fach);
  const k = kapitel.trim().toLowerCase();

  // Exakte ID in der Liste?
  const exact = allChapterIds.find((id) => id.toLowerCase() === k);
  if (exact) return exact;

  // Kurzform "kap1" mit fach → "bio-kap1"
  const shortMatch = k.match(/^kap(\d+)$/i);
  if (shortMatch && subjectId) {
    const prefix = subjectId === 'biologie' ? 'bio' : subjectId.slice(0, 3);
    const candidate = `${prefix}-kap${shortMatch[1]}`;
    if (allChapterIds.includes(candidate)) return candidate;
    // Fallback: biologie -> bio
    if (subjectId === 'biologie' && allChapterIds.some((id) => id === `bio-kap${shortMatch[1]}`)) {
      return `bio-kap${shortMatch[1]}`;
    }
  }

  return null;
}

/**
 * Erzeugt die URL für ein Fach (für Links)
 */
export function pathForSubject(subjectId: string): string {
  const slug = SUBJECT_ID_TO_SLUG[subjectId] ?? subjectId;
  return `/bms/${slug}`;
}

/**
 * Erzeugt die URL für ein Kapitel (für Links, z.B. Direktlink zum Kapitel)
 */
export function pathForChapter(subjectId: string, chapterId: string): string {
  const slug = SUBJECT_ID_TO_SLUG[subjectId] ?? subjectId;
  return `/bms/${slug}/${chapterId}`;
}
