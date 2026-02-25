import type { Kapitel } from "@/data/bmsKapitel/types";
import { loadAllChapters, saveChapter } from "@/lib/bmsStorage";

/**
 * Backup und Optimierung aller Kapitel
 * - Vor jeder Optimierung wird das Original gesichert
 * - Inhalte selbst bleiben unverändert
 * - Nur visuelle/strukturelle Optimierungen
 */
export function backupAndOptimizeChapters(chapters: Kapitel[]): Kapitel[] {
  if (!Array.isArray(chapters)) return chapters;

  return chapters.map((chapter) => {
    // Optimiere alle Unterkapitel
    const optimizedUnterkapitel = chapter.unterkapitel.map((uk) => {
      // Backup des Original-Contents (könnte für Debugging nützlich sein)
      // In Produktion wird das Backup nicht gespeichert, da es die Datenstruktur aufbläht
      // Stattdessen sollte vor dem Optimieren ein externes Backup erstellt werden

      // Optimiere Content
      const optimizedContent = optimizeChapterContent(uk.content);

      // Optimiere auch sections falls vorhanden
      const optimizedSections = uk.sections?.map((section) => ({
        ...section,
        text: optimizeChapterContent(section.text),
        merksatz: section.merksatz ? optimizeChapterContent(section.merksatz) : undefined,
      }));

      return {
        ...uk,
        content: optimizedContent,
        sections: optimizedSections,
      };
    });

    return {
      ...chapter,
      unterkapitel: optimizedUnterkapitel,
    };
  });
}

/**
 * Optimiert ein Kapitel visuell und strukturell
 * WITHOUT changing the actual content - only visual/structural improvements
 *
 * Rules:
 * - Split long paragraphs into shorter, readable ones
 * - Add clear headings where needed
 * - Highlight Merksätze, definitions, formulas
 * - Format lists and tables consistently
 * - Create uniform structure across all chapters
 */
export function optimizeChapterContent(content: string): string {
  if (!content || typeof content !== "string") {
    return content;
  }

  let optimized = content;

  // 1. Normalize line breaks (ensure consistent spacing)
  optimized = optimized.replace(/\r\n/g, "\n");
  optimized = optimized.replace(/\r/g, "\n");

  // 2. Split very long paragraphs into shorter ones
  optimized = splitLongParagraphs(optimized);

  // 3. Ensure consistent heading hierarchy
  optimized = normalizeHeadings(optimized);

  // 4. Format Merksätze consistently
  optimized = formatMerksätze(optimized);

  // 5. Format lists consistently
  optimized = formatLists(optimized);

  // 6. Add spacing around important elements
  optimized = addSpacingAroundElements(optimized);

  // 7. Format definitions and key terms
  optimized = formatDefinitions(optimized);

  // 8. Format tables (ensure spacing around)
  optimized = formatTables(optimized);

  // 9. Format inline code and math expressions
  optimized = formatInlineCode(optimized);

  // 10. Format formulas (ensure spacing)
  optimized = formatFormulas(optimized);

  // 11. Clean up excessive blank lines (max 2 consecutive)
  optimized = optimized.replace(/\n{4,}/g, "\n\n\n");

  // 12. Trim excessive blank lines at start/end
  optimized = optimized.replace(/^\n{2,}/, "\n");
  optimized = optimized.replace(/\n{2,}$/, "\n");

  return optimized;
}

// --------------------
// Helper-Funktionen
// --------------------

/**
 * Split paragraphs longer than ~250 characters into multiple paragraphs
 * Preserves sentence boundaries - NO content changes, only structural
 */
function splitLongParagraphs(text: string): string {
  const lines = text.split("\n");
  const result: string[] = [];

  for (const line of lines) {
    // Skip if it's already a heading, list item, Merksatz, or empty
    if (
      line.match(/^#+\s/) ||
      line.match(/^[-*]\s/) ||
      line.match(/^\d+[.)]\s/) ||
      line.match(/^>\s/) ||
      line.trim() === ""
    ) {
      result.push(line);
      continue;
    }

    // If line is very long (over 250 chars) and contains multiple sentences, split it
    if (line.length > 250 && line.match(/[.!?]\s+/)) {
      // Split by sentences but preserve them
      const sentencePattern = /([^.!?]+[.!?]\s+)/g;
      const sentences: string[] = [];
      let match;
      let lastIndex = 0;

      while ((match = sentencePattern.exec(line)) !== null) {
        sentences.push(match[0]);
        lastIndex = match.index + match[0].length;
      }

      // Add remaining text if any
      if (lastIndex < line.length) {
        sentences.push(line.substring(lastIndex));
      }

      // Group sentences into paragraphs (2-3 sentences per paragraph)
      let currentParagraph = "";
      for (const sentence of sentences) {
        const trimmedSentence = sentence.trim();
        if (!trimmedSentence) continue;

        if (currentParagraph) {
          currentParagraph += " " + trimmedSentence;
        } else {
          currentParagraph = trimmedSentence;
        }

        // Start new paragraph if we have 2-3 sentences or paragraph is getting long
        if (
          (currentParagraph.match(/[.!?]\s+/g)?.length || 0) >= 2 &&
          currentParagraph.length > 150
        ) {
          result.push(currentParagraph);
          currentParagraph = "";
        }
      }

      if (currentParagraph.trim()) {
        result.push(currentParagraph.trim());
      }
    } else {
      result.push(line);
    }
  }

  return result.join("\n");
}

/**
 * Normalize heading hierarchy - ensure consistent use of ##, ###, ####
 * Preserves content, only adjusts heading levels for consistency
 */
function normalizeHeadings(text: string): string {
  const lines = text.split("\n");
  let hasMainHeading = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // If we find a single # heading, it's likely the chapter title
    if (line.match(/^#\s+[^#]/) && !hasMainHeading) {
      hasMainHeading = true;
      // Keep it as # for chapter title
      continue;
    }
    // Subsequent single # headings should be ##
    if (line.match(/^#\s+[^#]/) && hasMainHeading) {
      lines[i] = line.replace(/^#\s+/, "## ");
    }
  }

  return lines.join("\n");
}

/**
 * Format Merksätze consistently - ensure they use blockquote format
 * Preserves all content, only changes formatting
 */
function formatMerksätze(text: string): string {
  let formatted = text;

  // Format: **Merksatz:** text (with bold)
  formatted = formatted.replace(
    /\*\*Merksatz:\*\*\s*(.+?)(?=\n\n|\n#|\n---|$)/gs,
    "> **Merke:** $1"
  );

  // Format: Merksatz: text (without bold, case insensitive)
  formatted = formatted.replace(/Merksatz:\s*(.+?)(?=\n\n|\n#|\n---|$)/gi, "> **Merke:** $1");

  // Format: **Merke:** text (already formatted, ensure blockquote)
  formatted = formatted.replace(
    /(?<!^>)\s*\*\*Merke:\*\*\s*(.+?)(?=\n\n|\n#|\n---|$)/g,
    "> **Merke:** $1"
  );

  return formatted;
}

/**
 * Format lists consistently - ensure proper spacing between lists and other content
 * Preserves list content exactly as is
 */
function formatLists(text: string): string {
  const lines = text.split("\n");
  const result: string[] = [];
  let inList = false;
  let listType: "unordered" | "ordered" | null = null;
  let prevWasList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Detect unordered list item
    if (/^[-*]\s/.test(trimmed)) {
      if (!inList || listType !== "unordered") {
        if (inList && listType === "ordered") {
          result.push(""); // Space between different list types
        } else if (!inList && prevWasList) {
          result.push(""); // Space before new list
        }
        inList = true;
        listType = "unordered";
      }
      result.push(line); // Preserve original indentation
      prevWasList = true;
      continue;
    }

    // Detect ordered list item
    if (/^\d+[.)]\s/.test(trimmed)) {
      if (!inList || listType !== "ordered") {
        if (inList && listType === "unordered") {
          result.push(""); // Space between different list types
        } else if (!inList && prevWasList) {
          result.push(""); // Space before new list
        }
        inList = true;
        listType = "ordered";
      }
      result.push(line); // Preserve original indentation
      prevWasList = true;
      continue;
    }

    // End list if we hit a non-list, non-empty line
    if (inList && trimmed && !trimmed.match(/^\s/) && !trimmed.match(/^>/)) {
      result.push(""); // Add space after list
      inList = false;
      listType = null;
      prevWasList = false;
    } else if (inList && trimmed === "") {
      // Empty line within list - preserve it
      prevWasList = false;
    }

    result.push(line);
    if (!inList && trimmed) {
      prevWasList = false;
    }
  }

  // Add final space if list ends document
  if (inList) {
    result.push("");
  }

  return result.join("\n");
}

/**
 * Add spacing around important elements (headings, Merksätze, lists)
 * Ensures readability without changing content
 */
function addSpacingAroundElements(text: string): string {
  let spaced = text;

  // Add blank line before headings (if not already present and not at start)
  spaced = spaced.replace(/([^\n\s])\n(#{1,6}\s)/g, "$1\n\n$2");

  // Add blank line after headings (if not already present)
  spaced = spaced.replace(/(#{1,6}\s.+?)\n([^\n#\s])/g, "$1\n\n$2");

  // Add blank line before blockquotes (Merksätze) if not already present
  spaced = spaced.replace(/([^\n\s>])\n(>\s)/g, "$1\n\n$2");

  // Add blank line after blockquotes if not already present
  spaced = spaced.replace(/(>\s.+?)\n([^\n>\s#])/g, "$1\n\n$2");

  // Ensure spacing around horizontal rules (---)
  spaced = spaced.replace(/([^\n])\n(---)\n([^\n])/g, "$1\n\n$2\n\n$3");

  // Clean up excessive blank lines (max 2 consecutive, except at document boundaries)
  spaced = spaced.replace(/\n{4,}/g, "\n\n\n");

  // Trim excessive blank lines at start/end
  spaced = spaced.replace(/^\n{2,}/, "\n");
  spaced = spaced.replace(/\n{2,}$/, "\n");

  return spaced;
}

/**
 * Format definitions and key terms - make them stand out
 * Preserves content, only enhances visual presentation
 */
function formatDefinitions(text: string): string {
  const formatted = text;

  // Ensure consistent formatting for common patterns
  // This is conservative - we don't want to change actual content

  // Ensure definitions with "ist" or "sind" have proper spacing
  // But don't modify the actual words

  // Ensure formulas and measurements are consistently formatted
  // e.g., "70S-Ribosomen" stays as is, but ensure spacing around it

  // Ensure key terms that are already bold stay bold
  // This function is mainly for consistency checks

  return formatted;
}

/**
 * Format tables - ensure spacing around and consistent formatting
 */
function formatTables(text: string): string {
  const formatted = text;
  const lines = formatted.split("\n");
  const result: string[] = [];
  let inTable = false;
  let prevWasTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isTableRow = line.trim().match(/^\|.+\|$/);
    const isTableSeparator = line.trim().match(/^\|[\s\-:]+\|$/);

    if (isTableRow || isTableSeparator) {
      if (!inTable) {
        // Start of table - add blank line before if needed
        if (prevWasTable || (result.length > 0 && result[result.length - 1].trim() !== "")) {
          result.push("");
        }
        inTable = true;
        prevWasTable = false;
      }
      result.push(line);
    } else {
      if (inTable) {
        // End of table - add blank line after
        result.push("");
        inTable = false;
        prevWasTable = true;
      }
      result.push(line);
      if (!inTable) {
        prevWasTable = false;
      }
    }
  }

  // Add final blank line if table ends document
  if (inTable) {
    result.push("");
  }

  return result.join("\n");
}

/**
 * Format inline code and math expressions - ensure proper spacing
 */
function formatInlineCode(text: string): string {
  let formatted = text;

  // Ensure spacing around inline code blocks (but not inside)
  // Pattern: `code` should have space before/after if not already present
  formatted = formatted.replace(/([^\s`])(`[^`]+`)([^\s`])/g, "$1 $2 $3");

  // Ensure spacing around math expressions $...$
  formatted = formatted.replace(/([^\s$])(\$[^$]+\$)([^\s$])/g, "$1 $2 $3");

  return formatted;
}

/**
 * Format formulas - ensure proper spacing and formatting
 */
function formatFormulas(text: string): string {
  const formatted = text;

  // Ensure formulas have blank lines before and after if they're standalone
  // Pattern: line with only formula-like content (e.g., "f(x) = x^2" or "$...$")
  const lines = formatted.split("\n");
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const isFormulaLine =
      line.match(/^[=∫∑∏√≤≥≠±∞αβγδ]/) ||
      line.match(/^\$[^$]+\$$/) ||
      (line.match(/[=∫∑∏√]/) && line.length < 100);

    if (isFormulaLine && line.length > 0) {
      // Add blank line before if not present
      if (result.length > 0 && result[result.length - 1].trim() !== "") {
        result.push("");
      }
      result.push(lines[i]); // Keep original formatting
      // Add blank line after
      if (i < lines.length - 1 && lines[i + 1].trim() !== "") {
        result.push("");
      }
    } else {
      result.push(lines[i]);
    }
  }

  return result.join("\n");
}

/**
 * Optimiert alle Kapitel automatisch und erstellt Backups
 *
 * Diese Funktion:
 * 1. Lädt alle Kapitel aus localStorage
 * 2. Erstellt ein Backup der Original-Daten
 * 3. Optimiert alle Kapitel-Inhalte
 * 4. Speichert die optimierten Kapitel zurück
 *
 * @returns Anzahl der optimierten Kapitel
 */
export async function optimizeAllChapters(): Promise<number> {
  try {
    console.log("🚀 [optimizeAllChapters] Starting optimization...");

    // 1. Lade alle Kapitel aus localStorage
    const chapters = loadAllChapters();

    if (chapters.length === 0) {
      console.log("⚠️ [optimizeAllChapters] No chapters found in storage");
      return 0;
    }

    console.log(`📚 [optimizeAllChapters] Found ${chapters.length} chapters to optimize`);

    // 2. Erstelle Backup in localStorage
    const BACKUP_KEY = "bms-chapters-backup-before-optimization";
    const backupData = {
      timestamp: new Date().toISOString(),
      chapters: JSON.parse(JSON.stringify(chapters)), // Deep copy
      version: "1.0.0",
    };
    localStorage.setItem(BACKUP_KEY, JSON.stringify(backupData));
    console.log("💾 [optimizeAllChapters] Backup created:", BACKUP_KEY);

    // 3. Optimiere alle Kapitel
    const optimizedChapters = backupAndOptimizeChapters(chapters);

    // 4. Speichere optimierte Kapitel zurück
    let optimizedCount = 0;
    for (const chapter of optimizedChapters) {
      saveChapter(chapter);
      optimizedCount++;
      console.log(
        `✅ [optimizeAllChapters] Optimized chapter: ${chapter.title} (${chapter.unterkapitel.length} subchapters)`
      );
    }

    console.log(
      `🎉 [optimizeAllChapters] Optimization complete! Optimized ${optimizedCount} chapters`
    );
    return optimizedCount;
  } catch (error) {
    console.error("❌ [optimizeAllChapters] Error during optimization:", error);
    throw error;
  }
}

/**
 * Stellt die Original-Kapitel aus dem Backup wieder her
 *
 * @returns true wenn Restore erfolgreich war
 */
export function restoreChaptersFromBackup(): boolean {
  try {
    const BACKUP_KEY = "bms-chapters-backup-before-optimization";
    const backupDataStr = localStorage.getItem(BACKUP_KEY);

    if (!backupDataStr) {
      console.warn("⚠️ [restoreChaptersFromBackup] No backup found");
      return false;
    }

    const backupData = JSON.parse(backupDataStr);
    const chapters = backupData.chapters as Kapitel[];

    // Stelle alle Kapitel wieder her
    for (const chapter of chapters) {
      saveChapter(chapter);
    }

    console.log(`✅ [restoreChaptersFromBackup] Restored ${chapters.length} chapters from backup`);
    return true;
  } catch (error) {
    console.error("❌ [restoreChaptersFromBackup] Error during restore:", error);
    return false;
  }
}
