// src/utils/normalizeChapterContent.ts
export function normalizeChapterContent(raw: string): string {
  let text = raw;

  // 1) Entferne -- oder --- Trennzeilen
  text = text
    .replace(/^\s*--+\s*$/gm, "")
    .replace(/^\s*---+\s*$/gm, "");

  // 2) "Merksatz:" automatisch in Blockquote umwandeln
  // z.B. "Merksatz: Bla bla" -> "> **Merksatz:** Bla bla"
  text = text.replace(
    /(^|\n)\s*Merksatz:\s*(.+)/g,
    "\n> **Merksatz:** $2"
  );

  // 3) Überschriften normalisieren (mehrere # aufräumen, Leerzeichen erzwingen)
  text = text.replace(/^(#+)([^\s#])/gm, "$1 $2");

  // 4) Doppelte Leerzeilen reduzieren
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}
