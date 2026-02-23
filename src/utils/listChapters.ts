import { loadAllChapters } from "@/lib/bmsStorage";
import type { Kapitel } from "@/data/bmsKapitel/types";

/**
 * Zeigt eine Übersicht aller vorhandenen Kapitel
 */
export function listAllChapters(): {
  chapters: Kapitel[];
  summary: {
    totalChapters: number;
    totalSubchapters: number;
    bySubject: Record<string, { count: number; subchapters: number }>;
    details: Array<{
      id: string;
      title: string;
      subject: string;
      subchapterCount: number;
      subchapterTitles: string[];
      hasContent: boolean;
      contentLength: number;
    }>;
  };
} {
  const chapters = loadAllChapters();

  const bySubject: Record<string, { count: number; subchapters: number }> = {};
  const details: Array<{
    id: string;
    title: string;
    subject: string;
    subchapterCount: number;
    subchapterTitles: string[];
    hasContent: boolean;
    contentLength: number;
  }> = [];

  let totalSubchapters = 0;

  for (const chapter of chapters) {
    const subchapterCount = chapter.unterkapitel?.length || 0;
    totalSubchapters += subchapterCount;

    // Group by subject
    if (!bySubject[chapter.subject]) {
      bySubject[chapter.subject] = { count: 0, subchapters: 0 };
    }
    bySubject[chapter.subject].count++;
    bySubject[chapter.subject].subchapters += subchapterCount;

    // Calculate content info
    let totalContentLength = 0;
    let hasContent = false;
    for (const uk of chapter.unterkapitel || []) {
      if (uk.content && uk.content.trim().length > 0) {
        hasContent = true;
        totalContentLength += uk.content.length;
      }
      if (uk.sections) {
        for (const section of uk.sections) {
          if (section.text && section.text.trim().length > 0) {
            hasContent = true;
            totalContentLength += section.text.length;
          }
        }
      }
    }

    // Add details
    details.push({
      id: chapter.id,
      title: chapter.title,
      subject: chapter.subject,
      subchapterCount,
      subchapterTitles: chapter.unterkapitel?.map((uk) => uk.title) || [],
      hasContent,
      contentLength: totalContentLength,
    });
  }

  return {
    chapters,
    summary: {
      totalChapters: chapters.length,
      totalSubchapters,
      bySubject,
      details,
    },
  };
}

/**
 * Zeigt eine formatierte Übersicht in der Konsole
 */
export function printChapterOverview(): void {
  const { summary, chapters } = listAllChapters();

  console.log("\n📚 === KAPITEL-ÜBERSICHT ===\n");
  console.log(
    `Gesamt: ${summary.totalChapters} Kapitel mit ${summary.totalSubchapters} Unterkapiteln\n`
  );

  // Nach Fächern gruppiert
  console.log("📖 Nach Fächern:");
  for (const [subject, data] of Object.entries(summary.bySubject)) {
    console.log(`  ${subject}: ${data.count} Kapitel, ${data.subchapters} Unterkapitel`);
  }

  console.log("\n📋 Details:\n");
  for (const detail of summary.details) {
    console.log(`  ${detail.subject.toUpperCase()}: ${detail.title}`);
    console.log(`    ID: ${detail.id}`);
    console.log(`    Unterkapitel: ${detail.subchapterCount}`);
    console.log(
      `    Content: ${detail.hasContent ? "✅" : "❌"} (${detail.contentLength} Zeichen)`
    );
    if (detail.subchapterTitles.length > 0) {
      console.log(`    Liste:`);
      detail.subchapterTitles.forEach((title, idx) => {
        console.log(`      ${idx + 1}. ${title}`);
      });
    }
    console.log("");
  }

  console.log("=== ENDE ÜBERSICHT ===\n");

  return;
}

/**
 * Macht die Funktionen global verfügbar für Browser-Konsole
 * Nutzung: window.showChapters() oder window.listChapters()
 */
if (typeof window !== "undefined") {
  (window as any).showChapters = printChapterOverview;
  (window as any).listChapters = listAllChapters;
}
