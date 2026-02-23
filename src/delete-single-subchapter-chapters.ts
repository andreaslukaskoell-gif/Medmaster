/**
 * Script to delete chapters with only one subchapter
 *
 * Run this in browser console:
 * import { deleteChaptersWithSingleSubchapter } from './lib/bmsStorage';
 * deleteChaptersWithSingleSubchapter();
 */

import { deleteChaptersWithSingleSubchapter, loadAllChapters } from "./lib/bmsStorage";

// Auto-run if in browser
if (typeof window !== "undefined") {
  console.log("🔍 Checking for chapters with only one subchapter...");
  const allChapters = loadAllChapters();
  const singleSubchapterChapters = allChapters.filter((ch) => (ch.unterkapitel || []).length === 1);

  console.log(`Found ${singleSubchapterChapters.length} chapter(s) with only one subchapter:`);
  singleSubchapterChapters.forEach((ch) => {
    console.log(`  - ${ch.title} (${ch.id}): ${(ch.unterkapitel || [])[0]?.title || "Untitled"}`);
  });

  if (singleSubchapterChapters.length > 0) {
    const deleted = deleteChaptersWithSingleSubchapter();
    console.log(`✅ Deleted ${deleted.length} chapter(s)`);
  } else {
    console.log("ℹ️ No chapters to delete");
  }
}

export { deleteChaptersWithSingleSubchapter };
