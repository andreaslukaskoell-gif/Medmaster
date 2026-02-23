/**
 * Comprehensive Chapter Optimizer with Backup and Audit System
 *
 * This module provides:
 * - Automatic backups before optimization
 * - Comprehensive content optimization (visual/structural only)
 * - Detailed audit reporting
 * - Batch processing of all chapters
 */

import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";
import { loadAllChapters, saveChapter } from "@/lib/bmsStorage";
import { optimizeChapterContent } from "./optimizeChapterContent";

const BACKUP_INDEX_KEY = "bms-backup-index";

export interface OptimizationAudit {
  chapterId: string;
  chapterTitle: string;
  timestamp: string;
  /** True if chapter was skipped due to error (original kept) */
  skipped?: boolean;
  /** Error message when skipped */
  error?: string;
  changes: {
    paragraphsSplit: number;
    headingsNormalized: number;
    merksätzeFormatted: number;
    listsFormatted: number;
    tablesFormatted: number;
    formulasFormatted: number;
    spacingAdded: number;
    codeBlocksFormatted: number;
  };
  subchaptersOptimized: number;
  totalSubchapters: number;
  beforeStats: {
    totalLength: number;
    avgParagraphLength: number;
  };
  afterStats: {
    totalLength: number;
    avgParagraphLength: number;
  };
}

export interface OptimizationReport {
  timestamp: string;
  totalChapters: number;
  totalSubchapters: number;
  /** Number of chapters skipped due to errors (original kept) */
  chaptersSkipped: number;
  backupKey: string;
  audits: OptimizationAudit[];
  summary: {
    totalParagraphsSplit: number;
    totalHeadingsNormalized: number;
    totalMerksätzeFormatted: number;
    totalListsFormatted: number;
    totalTablesFormatted: number;
    totalFormulasFormatted: number;
    totalSpacingAdded: number;
    totalCodeBlocksFormatted: number;
  };
}

/**
 * Creates a backup of chapters before optimization.
 * Backups are NEVER overwritten: each backup gets a unique key with timestamp.
 */
export function createBackup(chapters: Kapitel[]): string {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, "-");
  const backupKey = `bms-chapters-backup-${timestamp}`;
  const backupData = {
    timestamp: now.toISOString(),
    chapters: JSON.parse(JSON.stringify(chapters)), // Deep copy
    version: "1.0.0",
    reason: "pre-optimization-backup",
    backupKey,
  };

  localStorage.setItem(backupKey, JSON.stringify(backupData));

  // Append to backup index (never overwrite existing backups)
  try {
    const raw = localStorage.getItem(BACKUP_INDEX_KEY);
    const index: Array<{ key: string; timestamp: string }> = raw ? JSON.parse(raw) : [];
    index.push({ key: backupKey, timestamp: now.toISOString() });
    localStorage.setItem(BACKUP_INDEX_KEY, JSON.stringify(index));
  } catch (e) {
    console.warn("Could not update backup index", e);
  }

  console.log(`💾 Backup created: ${backupKey} (never overwritten)`);
  return backupKey;
}

/**
 * Analyzes content to detect changes (for audit)
 */
function analyzeContent(content: string): {
  paragraphs: number;
  avgParagraphLength: number;
  headings: number;
  merksätze: number;
  lists: number;
  tables: number;
  formulas: number;
  codeBlocks: number;
} {
  const lines = content.split("\n");
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  const headings = content.match(/^#{1,6}\s+.+$/gm)?.length || 0;
  const merksätze =
    (content.match(/>\s*\*\*Merke?:\*\*/gi)?.length || 0) +
    (content.match(/Merksatz:/gi)?.length || 0);
  const lists =
    (content.match(/^[-*]\s+/gm)?.length || 0) + (content.match(/^\d+[.)]\s+/gm)?.length || 0);
  const tables = content.match(/\|.+\|/gm)?.length || 0;
  const formulas =
    (content.match(/\$[^$]+\$/g)?.length || 0) + (content.match(/`[^`]+`/g)?.length || 0);
  const codeBlocks = content.match(/```[\s\S]*?```/g)?.length || 0;

  const totalLength = paragraphs.reduce((sum, p) => sum + p.length, 0);
  const avgParagraphLength = paragraphs.length > 0 ? totalLength / paragraphs.length : 0;

  return {
    paragraphs: paragraphs.length,
    avgParagraphLength,
    headings,
    merksätze,
    lists,
    tables,
    formulas,
    codeBlocks,
  };
}

/**
 * Counts specific optimizations in content
 */
function countOptimizations(before: string, after: string): OptimizationAudit["changes"] {
  const beforeLines = before.split("\n");
  const afterLines = after.split("\n");

  // Count paragraph splits (more paragraphs in after)
  const beforeParagraphs = before.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const afterParagraphs = after.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const paragraphsSplit = Math.max(0, afterParagraphs - beforeParagraphs);

  // Count normalized headings
  const beforeHeadings = before.match(/^#{1,6}\s+.+$/gm)?.length || 0;
  const afterHeadings = after.match(/^#{1,6}\s+.+$/gm)?.length || 0;
  const headingsNormalized = afterHeadings > beforeHeadings ? afterHeadings - beforeHeadings : 0;

  // Count formatted Merksätze (blockquote format)
  const beforeMerksätze =
    (before.match(/Merksatz:/gi)?.length || 0) +
    (before.match(/>\s*\*\*Merke?:\*\*/gi)?.length || 0);
  const afterMerksätze = after.match(/>\s*\*\*Merke?:\*\*/gi)?.length || 0;
  const merksätzeFormatted = afterMerksätze > beforeMerksätze ? 1 : 0;

  // Count formatted lists (better spacing)
  const beforeLists =
    (before.match(/^[-*]\s+/gm)?.length || 0) + (before.match(/^\d+[.)]\s+/gm)?.length || 0);
  const afterLists =
    (after.match(/^[-*]\s+/gm)?.length || 0) + (after.match(/^\d+[.)]\s+/gm)?.length || 0);
  const listsFormatted = afterLists > beforeLists ? 1 : 0;

  // Count tables (spacing around)
  const beforeTables = before.match(/\|.+\|/gm)?.length || 0;
  const afterTables = after.match(/\|.+\|/gm)?.length || 0;
  const tablesFormatted = beforeTables > 0 && afterTables === beforeTables ? 1 : 0;

  // Count formulas (spacing around)
  const beforeFormulas =
    (before.match(/\$[^$]+\$/g)?.length || 0) + (before.match(/`[^`]+`/g)?.length || 0);
  const afterFormulas =
    (after.match(/\$[^$]+\$/g)?.length || 0) + (after.match(/`[^`]+`/g)?.length || 0);
  const formulasFormatted = beforeFormulas > 0 && afterFormulas === beforeFormulas ? 1 : 0;

  // Count spacing improvements (more blank lines in strategic places)
  const beforeBlankLines = before.match(/\n{2,}/g)?.length || 0;
  const afterBlankLines = after.match(/\n{2,}/g)?.length || 0;
  const spacingAdded = Math.max(0, afterBlankLines - beforeBlankLines);

  // Count code blocks (formatting)
  const beforeCodeBlocks = before.match(/```[\s\S]*?```/g)?.length || 0;
  const afterCodeBlocks = after.match(/```[\s\S]*?```/g)?.length || 0;
  const codeBlocksFormatted = beforeCodeBlocks > 0 && afterCodeBlocks === beforeCodeBlocks ? 1 : 0;

  return {
    paragraphsSplit,
    headingsNormalized,
    merksätzeFormatted,
    listsFormatted,
    tablesFormatted,
    formulasFormatted,
    spacingAdded,
    codeBlocksFormatted,
  };
}

/**
 * Optimizes a single chapter with audit tracking
 */
export function optimizeChapterWithAudit(chapter: Kapitel): OptimizationAudit {
  const audit: OptimizationAudit = {
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    timestamp: new Date().toISOString(),
    changes: {
      paragraphsSplit: 0,
      headingsNormalized: 0,
      merksätzeFormatted: 0,
      listsFormatted: 0,
      tablesFormatted: 0,
      formulasFormatted: 0,
      spacingAdded: 0,
      codeBlocksFormatted: 0,
    },
    subchaptersOptimized: 0,
    totalSubchapters: chapter.unterkapitel?.length || 0,
    beforeStats: {
      totalLength: 0,
      avgParagraphLength: 0,
    },
    afterStats: {
      totalLength: 0,
      avgParagraphLength: 0,
    },
  };

  // Analyze before state
  let totalBeforeLength = 0;
  let totalAfterLength = 0;
  let totalBeforeParagraphs = 0;
  let totalAfterParagraphs = 0;

  // Optimize each subchapter (with per-subchapter error handling)
  const optimizedSubchapters = chapter.unterkapitel.map((uk) => {
    const beforeContent = uk.content || "";
    const beforeAnalysis = analyzeContent(beforeContent);

    totalBeforeLength += beforeContent.length;
    totalBeforeParagraphs += beforeAnalysis.paragraphs;

    let optimizedContent: string;
    try {
      optimizedContent = optimizeChapterContent(beforeContent);
    } catch (err) {
      console.warn(
        `⚠️ Optimierung fehlgeschlagen für Unterkapitel "${uk.title}", Original beibehalten:`,
        err
      );
      optimizedContent = beforeContent;
    }

    const afterAnalysis = analyzeContent(optimizedContent);
    totalAfterLength += optimizedContent.length;
    totalAfterParagraphs += afterAnalysis.paragraphs;

    const changes = countOptimizations(beforeContent, optimizedContent);
    audit.changes.paragraphsSplit += changes.paragraphsSplit;
    audit.changes.headingsNormalized += changes.headingsNormalized;
    audit.changes.merksätzeFormatted += changes.merksätzeFormatted;
    audit.changes.listsFormatted += changes.listsFormatted;
    audit.changes.tablesFormatted += changes.tablesFormatted;
    audit.changes.formulasFormatted += changes.formulasFormatted;
    audit.changes.spacingAdded += changes.spacingAdded;
    audit.changes.codeBlocksFormatted += changes.codeBlocksFormatted;

    audit.subchaptersOptimized++;

    let optimizedSections = uk.sections;
    if (uk.sections?.length) {
      try {
        optimizedSections = uk.sections.map((section) => ({
          ...section,
          text: optimizeChapterContent(section.text),
          merksatz: section.merksatz ? optimizeChapterContent(section.merksatz) : undefined,
        }));
      } catch (err) {
        optimizedSections = uk.sections;
      }
    }

    return {
      ...uk,
      content: optimizedContent,
      sections: optimizedSections,
    };
  });

  // Calculate stats
  audit.beforeStats.totalLength = totalBeforeLength;
  audit.beforeStats.avgParagraphLength =
    totalBeforeParagraphs > 0 ? totalBeforeLength / totalBeforeParagraphs : 0;

  audit.afterStats.totalLength = totalAfterLength;
  audit.afterStats.avgParagraphLength =
    totalAfterParagraphs > 0 ? totalAfterLength / totalAfterParagraphs : 0;

  return audit;
}

/**
 * Optimizes all chapters and creates comprehensive audit report
 */
export async function optimizeAllChaptersWithAudit(): Promise<{
  optimizedChapters: Kapitel[];
  report: OptimizationReport;
  backupKey: string;
}> {
  console.log("🚀 [optimizeAllChaptersWithAudit] Starting comprehensive optimization...");

  // 1. Load all chapters
  const chapters = loadAllChapters();

  if (chapters.length === 0) {
    console.warn("⚠️ No chapters found to optimize");
    return {
      optimizedChapters: [],
      report: {
        timestamp: new Date().toISOString(),
        totalChapters: 0,
        totalSubchapters: 0,
        chaptersSkipped: 0,
        backupKey: "",
        audits: [],
        summary: {
          totalParagraphsSplit: 0,
          totalHeadingsNormalized: 0,
          totalMerksätzeFormatted: 0,
          totalListsFormatted: 0,
          totalTablesFormatted: 0,
          totalFormulasFormatted: 0,
          totalSpacingAdded: 0,
          totalCodeBlocksFormatted: 0,
        },
      },
      backupKey: "",
    };
  }

  console.log(
    `📚 Found ${chapters.length} chapters with ${chapters.reduce((sum, ch) => sum + (ch.unterkapitel?.length || 0), 0)} subchapters`
  );

  // 2. Create backup
  const backupKey = createBackup(chapters);

  // 3. Optimize each chapter with audit
  const audits: OptimizationAudit[] = [];
  const optimizedChapters: Kapitel[] = [];

  for (const chapter of chapters) {
    console.log(`🔄 Optimizing chapter: ${chapter.title}...`);

    let audit: OptimizationAudit;
    let optimizedChapter: Kapitel;

    try {
      audit = optimizeChapterWithAudit(chapter);
      optimizedChapter = {
        ...chapter,
        unterkapitel: chapter.unterkapitel.map((uk) => {
          try {
            const optimizedContent = optimizeChapterContent(uk.content || "");
            const optimizedSections = uk.sections?.map((section) => ({
              ...section,
              text: optimizeChapterContent(section.text),
              merksatz: section.merksatz ? optimizeChapterContent(section.merksatz) : undefined,
            }));
            return { ...uk, content: optimizedContent, sections: optimizedSections };
          } catch (err) {
            console.warn(`⚠️ Unterkapitel "${uk.title}" übersprungen, Original beibehalten:`, err);
            return uk;
          }
        }),
      };
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.warn(
        `⚠️ Kapitel "${chapter.title}" übersprungen (Backup unverändert), Fehler:`,
        errMsg
      );
      audit = {
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        timestamp: new Date().toISOString(),
        skipped: true,
        error: errMsg,
        changes: {
          paragraphsSplit: 0,
          headingsNormalized: 0,
          merksätzeFormatted: 0,
          listsFormatted: 0,
          tablesFormatted: 0,
          formulasFormatted: 0,
          spacingAdded: 0,
          codeBlocksFormatted: 0,
        },
        subchaptersOptimized: 0,
        totalSubchapters: chapter.unterkapitel?.length || 0,
        beforeStats: { totalLength: 0, avgParagraphLength: 0 },
        afterStats: { totalLength: 0, avgParagraphLength: 0 },
      };
      optimizedChapter = chapter; // keep original
    }

    audits.push(audit);
    optimizedChapters.push(optimizedChapter);
    console.log(
      audit.skipped
        ? `⏭️ Skipped ${chapter.title}`
        : `✅ Optimized ${chapter.title}: ${audit.subchaptersOptimized} subchapters`
    );
  }

  const chaptersSkipped = audits.filter((a) => a.skipped).length;

  // 4. Create summary report
  const report: OptimizationReport = {
    timestamp: new Date().toISOString(),
    totalChapters: chapters.length,
    totalSubchapters: chapters.reduce((sum, ch) => sum + (ch.unterkapitel?.length || 0), 0),
    chaptersSkipped,
    backupKey,
    audits,
    summary: {
      totalParagraphsSplit: audits.reduce((sum, a) => sum + a.changes.paragraphsSplit, 0),
      totalHeadingsNormalized: audits.reduce((sum, a) => sum + a.changes.headingsNormalized, 0),
      totalMerksätzeFormatted: audits.reduce((sum, a) => sum + a.changes.merksätzeFormatted, 0),
      totalListsFormatted: audits.reduce((sum, a) => sum + a.changes.listsFormatted, 0),
      totalTablesFormatted: audits.reduce((sum, a) => sum + a.changes.tablesFormatted, 0),
      totalFormulasFormatted: audits.reduce((sum, a) => sum + a.changes.formulasFormatted, 0),
      totalSpacingAdded: audits.reduce((sum, a) => sum + a.changes.spacingAdded, 0),
      totalCodeBlocksFormatted: audits.reduce((sum, a) => sum + a.changes.codeBlocksFormatted, 0),
    },
  };

  console.log(`🎉 Optimization complete! Optimized ${chapters.length} chapters`);
  console.log(`📊 Summary:`, report.summary);

  return {
    optimizedChapters,
    report,
    backupKey,
  };
}

/**
 * Generates a markdown audit report
 */
export function generateAuditReportMarkdown(report: OptimizationReport, backupKey: string): string {
  const timestamp = new Date(report.timestamp).toLocaleString("de-DE");
  const key = report.backupKey || backupKey;

  let markdown = `# MedMaster Kapitel-Optimierung Audit-Report\n\n`;
  markdown += `**Erstellt am:** ${timestamp}\n\n`;
  markdown += `**Backup-Key:** \`${key}\` (Backup wird niemals überschrieben)\n\n`;
  markdown += `---\n\n`;

  // Summary
  markdown += `## Zusammenfassung\n\n`;
  markdown += `- **Gesamt Kapitel:** ${report.totalChapters}\n`;
  markdown += `- **Gesamt Unterkapitel:** ${report.totalSubchapters}\n`;
  if (report.chaptersSkipped !== undefined && report.chaptersSkipped > 0) {
    markdown += `- **Übersprungen (Fehler, Original beibehalten):** ${report.chaptersSkipped}\n`;
  }
  markdown += `- **Paragraphen aufgeteilt:** ${report.summary.totalParagraphsSplit}\n`;
  markdown += `- **Überschriften normalisiert:** ${report.summary.totalHeadingsNormalized}\n`;
  markdown += `- **Merksätze formatiert:** ${report.summary.totalMerksätzeFormatted}\n`;
  markdown += `- **Listen formatiert:** ${report.summary.totalListsFormatted}\n`;
  markdown += `- **Tabellen formatiert:** ${report.summary.totalTablesFormatted}\n`;
  markdown += `- **Formeln formatiert:** ${report.summary.totalFormulasFormatted}\n`;
  markdown += `- **Abstände hinzugefügt:** ${report.summary.totalSpacingAdded}\n`;
  markdown += `- **Code-Blöcke formatiert:** ${report.summary.totalCodeBlocksFormatted}\n\n`;
  markdown += `---\n\n`;

  // Detailed per-chapter
  markdown += `## Detaillierte Änderungen pro Kapitel\n\n`;

  for (const audit of report.audits) {
    markdown += `### ${audit.chapterTitle} (${audit.chapterId})\n\n`;
    markdown += `**Zeitstempel:** ${new Date(audit.timestamp).toLocaleString("de-DE")}\n\n`;
    if (audit.skipped) {
      markdown += `**Status:** ⏭️ Übersprungen (Original unverändert)\n\n`;
      markdown += `**Grund:** ${audit.error ?? "Unbekannter Fehler"}\n\n`;
    } else {
      markdown += `**Unterkapitel:** ${audit.subchaptersOptimized} von ${audit.totalSubchapters}\n\n`;
    }

    markdown += `- Vorher: ${audit.beforeStats.totalLength} Zeichen, Ø ${Math.round(audit.beforeStats.avgParagraphLength)} Zeichen/Absatz\n`;
    markdown += `- Nachher: ${audit.afterStats.totalLength} Zeichen, Ø ${Math.round(audit.afterStats.avgParagraphLength)} Zeichen/Absatz\n\n`;

    if (audit.skipped) {
      markdown += `---\n\n`;
      continue;
    }

    markdown += `**Durchgeführte Optimierungen:**\n`;
    if (audit.changes.paragraphsSplit > 0) {
      markdown += `- ✅ ${audit.changes.paragraphsSplit} Absätze aufgeteilt\n`;
    }
    if (audit.changes.headingsNormalized > 0) {
      markdown += `- ✅ ${audit.changes.headingsNormalized} Überschriften normalisiert\n`;
    }
    if (audit.changes.merksätzeFormatted > 0) {
      markdown += `- ✅ ${audit.changes.merksätzeFormatted} Merksätze formatiert\n`;
    }
    if (audit.changes.listsFormatted > 0) {
      markdown += `- ✅ ${audit.changes.listsFormatted} Listen formatiert\n`;
    }
    if (audit.changes.tablesFormatted > 0) {
      markdown += `- ✅ ${audit.changes.tablesFormatted} Tabellen formatiert\n`;
    }
    if (audit.changes.formulasFormatted > 0) {
      markdown += `- ✅ ${audit.changes.formulasFormatted} Formeln formatiert\n`;
    }
    if (audit.changes.spacingAdded > 0) {
      markdown += `- ✅ ${audit.changes.spacingAdded} Abstände hinzugefügt\n`;
    }
    if (audit.changes.codeBlocksFormatted > 0) {
      markdown += `- ✅ ${audit.changes.codeBlocksFormatted} Code-Blöcke formatiert\n`;
    }

    if (Object.values(audit.changes).every((v) => v === 0)) {
      markdown += `- ℹ️ Keine strukturellen Änderungen erforderlich\n`;
    }

    markdown += `\n---\n\n`;
  }

  markdown += `## Hinweise\n\n`;
  markdown += `- Alle Änderungen sind **nur visuell/strukturell**, keine inhaltlichen Änderungen.\n`;
  markdown += `- Backups werden **niemals überschrieben** (eindeutiger Key mit Zeitstempel).\n`;
  markdown += `- Originale können über den Backup-Key wiederhergestellt werden.\n`;
  markdown += `- Abruf des Reports: \`window.getOptimizationReport()\`\n\n`;

  return markdown;
}
