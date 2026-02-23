// src/utils/normalizeChapterContent.ts

/** Normalisiert Kapitel-Markdown. Safe: null/undefined/non-string → leeres Ergebnis, kein Crash. */
export function normalizeChapterContent(raw: string | null | undefined): string {
  const text = raw == null ? "" : typeof raw === "string" ? raw : String(raw);
  let out = text;

  // 1) Entferne -- oder --- Trennzeilen
  out = out.replace(/^\s*--+\s*$/gm, "").replace(/^\s*---+\s*$/gm, "");

  // 2) "Merksatz:" automatisch in Blockquote umwandeln
  // z.B. "Merksatz: Bla bla" -> "> **Merksatz:** Bla bla"
  out = out.replace(/(^|\n)\s*Merksatz:\s*(.+)/g, "\n> **Merksatz:** $2");

  // 3) Überschriften normalisieren (mehrere # aufräumen, Leerzeichen erzwingen)
  out = out.replace(/^(#+)([^\s#])/gm, "$1 $2");

  // 4) Doppelte Leerzeilen reduzieren
  out = out.replace(/\n{3,}/g, "\n\n");

  return out.trim();
}
