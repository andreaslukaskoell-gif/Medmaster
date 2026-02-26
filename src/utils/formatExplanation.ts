/**
 * Entfernt Markdown-Sternchen (** und *) aus Erklärungs- und Lösungstexten,
 * damit sie in der UI als normaler Fließtext erscheinen (keine rohen ***).
 */
export function stripMarkdownAsterisks(text: string | null | undefined): string {
  if (text == null || typeof text !== "string") return "";
  return text
    .replace(/\*\*\*/g, "") // *** (bold+italic)
    .replace(/\*\*/g, "") // ** (bold)
    .replace(/\*/g, "") // * (italic)
    .trim();
}
