/**
 * Main entry point for comprehensive chapter optimization
 *
 * This function:
 * 1. Loads all chapters from localStorage
 * 2. Creates backups
 * 3. Optimizes all chapters
 * 4. Saves optimized chapters
 * 5. Generates and saves audit report
 */

import { optimizeAllChaptersWithAudit, generateAuditReportMarkdown } from "./chapterOptimizer";
import { saveChapter } from "@/lib/bmsStorage";

/**
 * Runs the complete optimization process
 */
export async function runComprehensiveOptimization(): Promise<{
  success: boolean;
  chaptersOptimized: number;
  reportMarkdown: string;
  backupKey: string;
  error?: string;
}> {
  try {
    console.log("🚀 [runComprehensiveOptimization] Starting comprehensive optimization...");

    // Optimize all chapters with audit
    const { optimizedChapters, report, backupKey } = await optimizeAllChaptersWithAudit();

    if (optimizedChapters.length === 0) {
      return {
        success: false,
        chaptersOptimized: 0,
        reportMarkdown: "",
        backupKey: "",
        error: "No chapters found to optimize",
      };
    }

    // Save all optimized chapters
    console.log(`💾 Saving ${optimizedChapters.length} optimized chapters...`);
    for (const chapter of optimizedChapters) {
      saveChapter(chapter);
    }

    // Generate audit report markdown
    const reportMarkdown = generateAuditReportMarkdown(report, backupKey);

    // Save audit report to localStorage (can be exported later)
    const reportKey = `bms-optimization-report-${new Date().toISOString().replace(/[:.]/g, "-")}`;
    localStorage.setItem(
      reportKey,
      JSON.stringify({
        timestamp: new Date().toISOString(),
        report,
        markdown: reportMarkdown,
        backupKey,
      })
    );

    console.log(`✅ Optimization complete!`);
    console.log(`📊 Optimized ${optimizedChapters.length} chapters`);
    console.log(`💾 Backup key: ${backupKey}`);
    console.log(`📄 Report key: ${reportKey}`);

    return {
      success: true,
      chaptersOptimized: optimizedChapters.length,
      reportMarkdown,
      backupKey,
    };
  } catch (error) {
    console.error("❌ [runComprehensiveOptimization] Error:", error);
    return {
      success: false,
      chaptersOptimized: 0,
      reportMarkdown: "",
      backupKey: "",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Gets the latest optimization report from localStorage.
 * Call from console: window.getOptimizationReport()
 */
export function getLatestOptimizationReport(): {
  timestamp: string;
  report: Record<string, unknown>;
  markdown: string;
  backupKey: string;
} | null {
  try {
    const reportKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("bms-optimization-report-")) {
        reportKeys.push(key);
      }
    }
    if (reportKeys.length === 0) return null;
    reportKeys.sort().reverse();
    const reportData = localStorage.getItem(reportKeys[0]);
    if (!reportData) return null;
    return JSON.parse(reportData);
  } catch (error) {
    console.error("❌ Error getting optimization report:", error);
    return null;
  }
}

/**
 * Restore chapters from a specific backup key (from audit report).
 * Backup is never overwritten, so this key remains valid.
 */
export function restoreFromBackupKey(backupKey: string): boolean {
  try {
    const raw = localStorage.getItem(backupKey);
    if (!raw) {
      console.warn("⚠️ Backup nicht gefunden:", backupKey);
      return false;
    }
    const data = JSON.parse(raw);
    const chapters = data?.chapters;
    if (!Array.isArray(chapters)) {
      console.warn("⚠️ Ungültiges Backup-Format");
      return false;
    }
    for (const chapter of chapters) {
      saveChapter(chapter);
    }
    console.log(`✅ ${chapters.length} Kapitel aus Backup wiederhergestellt: ${backupKey}`);
    return true;
  } catch (error) {
    console.error("❌ Fehler beim Wiederherstellen:", error);
    return false;
  }
}
