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

/**
 * Strips LaTeX dollar-sign delimiters so $x^2$ renders as x^2.
 * Handles both inline $...$ and display $$...$$.
 * Also converts common LaTeX commands to readable text:
 *   \vec{v} → v⃗, \frac{a}{b} → a/b, \cdot → ·, \times → ×
 */
export function stripLatex(text: string): string {
  return text
    .replace(/\$\$(.*?)\$\$/g, "$1") // display math $$...$$
    .replace(/\$(.*?)\$/g, "$1") // inline math $...$
    .replace(/\\vec\{([^}]+)\}/g, "$1\u20D7") // \vec{v} → v⃗
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2") // \frac{a}{b} → a/b
    .replace(/\\cdot/g, "·")
    .replace(/\\times/g, "×")
    .replace(/\\pm/g, "±")
    .replace(/\\sqrt\{([^}]+)\}/g, "√$1") // \sqrt{x} → √x
    .replace(/\\(?:left|right)[()[\]|]/g, "") // \left( \right) etc.
    .replace(/\\\\/g, ""); // trailing backslashes
}
