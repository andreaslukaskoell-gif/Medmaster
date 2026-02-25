/**
 * BMS Chapter Storage
 *
 * Persists chapters to localStorage and provides loading functions.
 * This allows chapters created in the editor to appear immediately
 * without requiring a rebuild or page reload.
 */

import type { Kapitel } from "@/data/bmsKapitel/types";

const STORAGE_KEY = "bms-chapters";
const STORAGE_VERSION = "1.1.0"; // Updated to handle subchapters properly

interface StoredChapters {
  version: string;
  chapters: Kapitel[];
  lastUpdated: string;
}

/**
 * Generate a unique ID for a subchapter
 * Format: {chapterId}-uk-{timestamp}-{random}
 */
function generateSubchapterId(chapterId: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${chapterId}-uk-${timestamp}-${random}`;
}

/**
 * Migrate old chapters: ensure all subchapters have unique IDs
 */
function migrateSubchapterIds(chapters: Kapitel[]): Kapitel[] {
  return chapters.map((chapter) => {
    if (!chapter.unterkapitel || chapter.unterkapitel.length === 0) {
      return chapter;
    }

    // Check if any subchapter has a non-unique ID (like "bio-kap1-uk01")
    const needsMigration = chapter.unterkapitel.some(
      (uk) => uk.id.match(/^[^-]+-kap\d+-uk\d+$/) // Pattern like "bio-kap1-uk01"
    );

    if (!needsMigration) {
      return chapter; // Already migrated
    }

    // Migrate: generate unique IDs for all subchapters
    const migratedSubchapters = chapter.unterkapitel.map((uk) => {
      // If ID is in old format, generate new unique ID
      if (uk.id.match(/^[^-]+-kap\d+-uk\d+$/)) {
        return {
          ...uk,
          id: generateSubchapterId(chapter.id),
        };
      }
      return uk; // Keep existing unique ID
    });

    return {
      ...chapter,
      unterkapitel: migratedSubchapters,
    };
  });
}

/**
 * Save a chapter to localStorage
 * If chapter exists, merges subchapters instead of overwriting
 */
export function saveChapter(chapter: Kapitel): void {
  try {
    const existing = loadAllChapters();
    const index = existing.findIndex((c) => c.id === chapter.id);

    if (index >= 0) {
      // Chapter exists - merge subchapters instead of overwriting
      const existingChapter = existing[index];
      const existingSubchapters = existingChapter.unterkapitel || [];
      const newSubchapters = chapter.unterkapitel || [];

      // Merge subchapters: update existing ones, add new ones
      const mergedSubchapters = [...existingSubchapters];

      for (const newSubchapter of newSubchapters) {
        const existingIndex = mergedSubchapters.findIndex((uk) => uk.id === newSubchapter.id);

        if (existingIndex >= 0) {
          // Update existing subchapter
          mergedSubchapters[existingIndex] = newSubchapter;
          console.log("📝 Updated subchapter:", newSubchapter.id, newSubchapter.title);
        } else {
          // Add new subchapter (ensure it has a unique ID)
          const subchapterWithId = {
            ...newSubchapter,
            id: newSubchapter.id || generateSubchapterId(chapter.id),
          };
          mergedSubchapters.push(subchapterWithId);
          console.log("➕ Added new subchapter:", subchapterWithId.id, subchapterWithId.title);
        }
      }

      // Update chapter with merged subchapters
      existing[index] = {
        ...existingChapter,
        ...chapter,
        unterkapitel: mergedSubchapters,
      };
    } else {
      // New chapter - ensure all subchapters have unique IDs
      const chapterWithUniqueIds = {
        ...chapter,
        unterkapitel: (chapter.unterkapitel || []).map((uk) => ({
          ...uk,
          id: uk.id || generateSubchapterId(chapter.id),
        })),
      };
      existing.push(chapterWithUniqueIds);
      console.log("➕ Added new chapter:", chapter.id, chapter.title);
    }

    // Migrate old data format
    const migrated = migrateSubchapterIds(existing);

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: migrated,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log(
      "✅ Chapter saved to localStorage:",
      chapter.id,
      chapter.title,
      `(${(migrated.find((c) => c.id === chapter.id)?.unterkapitel || []).length} subchapters)`
    );
  } catch (error) {
    console.error("❌ Error saving chapter to localStorage:", error);
    throw error;
  }
}

/**
 * Add or update a single subchapter
 * If chapter doesn't exist in localStorage, it will be created
 */
export function saveSubchapter(
  chapterId: string,
  subchapter: import("@/data/bmsKapitel/types").Unterkapitel,
  chapterData?: Partial<Kapitel>
): void {
  try {
    const existing = loadAllChapters();
    let chapterIndex = existing.findIndex((c) => c.id === chapterId);

    // If chapter doesn't exist in localStorage, create it
    if (chapterIndex < 0) {
      if (!chapterData) {
        throw new Error(`Chapter ${chapterId} not found and no chapterData provided to create it`);
      }

      // Create new chapter with the subchapter
      const newChapter: Kapitel = {
        id: chapterId,
        title: chapterData.title || "Untitled Chapter",
        subject: chapterData.subject || "biologie",
        icon: chapterData.icon || "📚",
        estimatedTime: chapterData.estimatedTime || "",
        unterkapitel: [subchapter],
      };

      existing.push(newChapter);
      chapterIndex = existing.length - 1;
      console.log("➕ Created new chapter in localStorage:", chapterId, newChapter.title);
    }

    const chapter = existing[chapterIndex];
    const subchapters = [...(chapter.unterkapitel || [])]; // Create a copy to avoid mutation issues

    // Ensure subchapter has unique ID
    const subchapterWithId = {
      ...subchapter,
      id: subchapter.id || generateSubchapterId(chapterId),
    };

    // Find existing subchapter by ID
    const existingIndexById = subchapters.findIndex((uk) => uk.id === subchapterWithId.id);

    if (existingIndexById >= 0) {
      // Update existing subchapter (replace it)
      subchapters[existingIndexById] = subchapterWithId;
      console.log("📝 Updated subchapter:", subchapterWithId.id, subchapterWithId.title);
    } else {
      // Guard: Check for duplicate by title (case-insensitive, trimmed)
      const normalizedTitle = subchapterWithId.title?.trim().toLowerCase();
      if (normalizedTitle) {
        const existingIndexByTitle = subchapters.findIndex(
          (uk) =>
            uk.title &&
            uk.title.trim().toLowerCase() === normalizedTitle &&
            uk.id !== subchapterWithId.id
        );

        if (existingIndexByTitle >= 0) {
          // Duplicate title found - update existing instead of adding new
          console.warn(
            `⚠️ Duplicate subchapter title "${subchapterWithId.title}" found. Updating existing subchapter instead of creating duplicate.`
          );
          subchapters[existingIndexByTitle] = subchapterWithId;
          console.log(
            "📝 Updated subchapter (duplicate title resolved):",
            subchapterWithId.id,
            subchapterWithId.title
          );
        } else {
          // Add new subchapter (append to array)
          subchapters.push(subchapterWithId);
          console.log("➕ Added new subchapter:", subchapterWithId.id, subchapterWithId.title);
        }
      } else {
        // No title - add anyway (shouldn't happen, but handle gracefully)
        subchapters.push(subchapterWithId);
        console.log("➕ Added new subchapter (no title):", subchapterWithId.id);
      }
    }

    // Update chapter with merged subchapters array
    existing[chapterIndex] = {
      ...chapter,
      ...chapterData, // Allow updating chapter metadata if provided
      unterkapitel: subchapters, // Set the FULL array with all subchapters
    };

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: existing,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log("✅ [saveSubchapter] Saved:", {
      chapterId,
      subchapterId: subchapterWithId.id,
      subchapterTitle: subchapterWithId.title,
      totalSubchapters: subchapters.length,
      allSubchapterIds: subchapters.map((uk) => uk.id),
    });
    console.log(
      "💾 [saveSubchapter] Full chapter data:",
      JSON.stringify(existing[chapterIndex], null, 2)
    );
  } catch (error) {
    console.error("❌ Error saving subchapter:", error);
    throw error;
  }
}

/**
 * Load all chapters from localStorage
 * Automatically migrates old data format
 * Automatically removes duplicates on first load after update
 * ALWAYS returns an array (never throws, never returns undefined/null)
 */
export function loadAllChapters(): Kapitel[] {
  try {
    console.log("📖 [loadAllChapters] Starting load...");
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      console.log("📖 [loadAllChapters] No data in localStorage, returning empty array");
      return [];
    }

    const parsed: StoredChapters = JSON.parse(stored);
    console.log("📖 [loadAllChapters] Parsed data:", {
      version: parsed.version,
      chaptersCount: parsed.chapters?.length || 0,
      lastUpdated: parsed.lastUpdated,
    });

    // Ensure chapters is an array
    if (!parsed.chapters || !Array.isArray(parsed.chapters)) {
      console.warn("⚠️ Invalid chapters data in localStorage, returning empty array");
      return [];
    }

    // Migrate if version is old
    if (parsed.version !== STORAGE_VERSION) {
      console.log("🔄 Migrating chapters from version", parsed.version, "to", STORAGE_VERSION);
      try {
        const migrated = migrateSubchapterIds(parsed.chapters || []);

        // Save migrated version
        const migratedStored: StoredChapters = {
          version: STORAGE_VERSION,
          chapters: migrated,
          lastUpdated: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedStored));

        console.log(
          "✅ [loadAllChapters] Migration complete, returning",
          migrated.length,
          "chapters"
        );
        return migrated || [];
      } catch (migrationError) {
        console.error("❌ Error during migration:", migrationError);
        return parsed.chapters || [];
      }
    }

    // Validate and filter invalid chapters
    let validChapters = (parsed.chapters || []).filter((ch): ch is Kapitel => {
      return !!(ch && typeof ch === "object" && ch.id && ch.title && ch.subject);
    });

    // Check if duplicate removal has been performed (one-time cleanup for chapters)
    const DUPLICATE_CLEANUP_FLAG = "bms-duplicate-cleanup-done";
    const cleanupDone = localStorage.getItem(DUPLICATE_CLEANUP_FLAG);

    if (!cleanupDone) {
      console.log("🧹 [loadAllChapters] Performing one-time duplicate cleanup...");
      // Set flag first to prevent recursion
      localStorage.setItem(DUPLICATE_CLEANUP_FLAG, "true");
      try {
        // Remove duplicate chapters
        const deletedChapterIds = removeDuplicateChapters();
        if (deletedChapterIds.length > 0) {
          // Reload after cleanup
          const cleanedStored = localStorage.getItem(STORAGE_KEY);
          if (cleanedStored) {
            const cleanedParsed: StoredChapters = JSON.parse(cleanedStored);
            validChapters = (cleanedParsed.chapters || []).filter((ch): ch is Kapitel => {
              return !!(ch && typeof ch === "object" && ch.id && ch.title && ch.subject);
            });
          }
        }

        console.log("✅ [loadAllChapters] Duplicate chapter cleanup complete");
      } catch (cleanupError) {
        console.error("❌ Error during duplicate cleanup:", cleanupError);
        // Continue with original chapters if cleanup fails
      }
    }

    // Always check and clean duplicate subchapters in "Die Zelle" (runs every time)
    // Check raw data first to avoid issues with already-filtered chapters
    const rawChapters = loadChaptersRaw();
    const dieZelleRaw = rawChapters.find((ch) => ch.id === "bio-kap1" && ch.title === "Die Zelle");
    if (dieZelleRaw) {
      const subchapters = dieZelleRaw.unterkapitel || [];
      // Check if there are duplicates by title (normalized)
      const titleMap = new Map<string, number>();
      for (const uk of subchapters) {
        if (uk.title) {
          const normalizedTitle = uk.title.trim().toLowerCase();
          titleMap.set(normalizedTitle, (titleMap.get(normalizedTitle) || 0) + 1);
        }
      }

      const hasDuplicates = Array.from(titleMap.values()).some((count) => count > 1);

      if (hasDuplicates) {
        console.log('🧹 [loadAllChapters] Found duplicate subchapters in "Die Zelle", cleaning...');
        console.log(
          "📊 Duplicate titles:",
          Array.from(titleMap.entries())
            .filter(([, count]) => count > 1)
            .map(([title, count]) => `"${title}" (${count}x)`)
            .join(", ")
        );
        try {
          const deletedSubchapterIds = removeDuplicateSubchapters("bio-kap1");
          if (deletedSubchapterIds.length > 0) {
            // Reload after subchapter cleanup
            const finalStored = localStorage.getItem(STORAGE_KEY);
            if (finalStored) {
              const finalParsed: StoredChapters = JSON.parse(finalStored);
              validChapters = (finalParsed.chapters || []).filter((ch): ch is Kapitel => {
                return !!(ch && typeof ch === "object" && ch.id && ch.title && ch.subject);
              });
              console.log("✅ [loadAllChapters] Duplicate subchapter cleanup complete");
            }
          } else {
            console.log("⚠️ [loadAllChapters] No duplicates removed - check function logic");
          }
        } catch (subchapterCleanupError) {
          console.error("❌ Error during subchapter cleanup:", subchapterCleanupError);
        }
      }
    }

    console.log("✅ [loadAllChapters] Loaded", validChapters.length, "valid chapters");
    return validChapters;
  } catch (error) {
    console.error("❌ Error loading chapters from localStorage:", error);
    // Never throw - always return empty array
    return [];
  }
}

/**
 * Load chapters by subject
 */
export function loadChaptersBySubject(subject: string): Kapitel[] {
  const all = loadAllChapters();
  return all.filter((k) => k.subject === subject);
}

/**
 * Load a specific chapter by ID
 */
export function loadChapterById(id: string): Kapitel | undefined {
  const all = loadAllChapters();
  return all.find((k) => k.id === id);
}

/**
 * Delete a chapter
 */
export function deleteChapter(chapterId: string): void {
  try {
    const existing = loadAllChapters();
    const filtered = existing.filter((c) => c.id !== chapterId);

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: filtered,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log("✅ Chapter deleted from localStorage:", chapterId);
  } catch (error) {
    console.error("❌ Error deleting chapter from localStorage:", error);
    throw error;
  }
}

/**
 * Internal function to load chapters directly from localStorage without cleanup
 * Used to avoid recursion in removeDuplicateChapters
 */
function loadChaptersRaw(): Kapitel[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed: StoredChapters = JSON.parse(stored);
    if (!parsed.chapters || !Array.isArray(parsed.chapters)) return [];

    // Validate chapters
    return parsed.chapters.filter((ch): ch is Kapitel => {
      return !!(ch && typeof ch === "object" && ch.id && ch.title && ch.subject);
    });
  } catch (error) {
    console.error("❌ Error loading raw chapters:", error);
    return [];
  }
}

/**
 * Remove duplicate chapters from localStorage based on title and subject
 * For chapters with the same title and subject, keeps the one with the most subchapters
 * Also removes specific unwanted chapters like "Zellkern und Ribosomen"
 */
export function removeDuplicateChapters(): string[] {
  try {
    // Use raw load to avoid recursion
    const all = loadChaptersRaw();
    const deletedIds: string[] = [];
    const seen = new Map<string, Kapitel>(); // key: `${subject}:${title}`

    // First pass: identify duplicates and keep the one with most subchapters
    for (const chapter of all) {
      if (!chapter.title || !chapter.subject) continue;

      const key = `${chapter.subject}:${chapter.title}`;
      const existing = seen.get(key);

      if (!existing) {
        seen.set(key, chapter);
      } else {
        // Compare subchapter counts
        const existingCount = (existing.unterkapitel || []).length;
        const currentCount = (chapter.unterkapitel || []).length;

        if (currentCount > existingCount) {
          // Current chapter has more subchapters, replace
          deletedIds.push(existing.id);
          seen.set(key, chapter);
        } else {
          // Existing chapter has more or equal subchapters, delete current
          deletedIds.push(chapter.id);
        }
      }
    }

    // Second pass: remove specific unwanted chapters
    const unwantedTitles = ["Zellkern und Ribosomen"];
    for (const chapter of all) {
      if (unwantedTitles.includes(chapter.title) && chapter.subject === "biologie") {
        if (!deletedIds.includes(chapter.id)) {
          deletedIds.push(chapter.id);
        }
      }
    }

    if (deletedIds.length === 0) {
      console.log("ℹ️ No duplicate chapters found");
      return [];
    }

    // Remove deleted chapters
    const remaining = all.filter((ch) => !deletedIds.includes(ch.id));

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: remaining,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log(`✅ Removed ${deletedIds.length} duplicate/unwanted chapter(s):`, deletedIds);
    console.log(
      "📋 Removed chapters:",
      all
        .filter((ch) => deletedIds.includes(ch.id))
        .map((ch) => `${ch.title} (${ch.id}, ${(ch.unterkapitel || []).length} UKs)`)
        .join(", ")
    );

    return deletedIds;
  } catch (error) {
    console.error("❌ Error removing duplicate chapters:", error);
    throw error;
  }
}

/**
 * Merge static chapters (from imports) with dynamic chapters (from localStorage)
 * Dynamic chapters override static ones with the same ID
 * Includes guard logic to prevent duplicates by title+subject
 * FIXED: Now also removes duplicate subchapters within chapters (e.g., "Mitochondrien" duplicates)
 * This ensures clean data structure without losing content - only true duplicates are removed
 */
export function mergeChapters(staticChapters: Kapitel[]): Kapitel[] {
  const dynamicChapters = loadAllChapters();
  const merged: Kapitel[] = [];
  const seenByTitle = new Map<string, Kapitel>(); // key: `${subject}:${title}`

  // First, add static chapters
  for (const staticChapter of staticChapters) {
    if (!staticChapter.title || !staticChapter.subject) continue;
    const key = `${staticChapter.subject}:${staticChapter.title}`;
    seenByTitle.set(key, staticChapter);
    merged.push(staticChapter);
  }

  // Then, add or update with dynamic chapters
  for (const dynamicChapter of dynamicChapters) {
    if (!dynamicChapter.title || !dynamicChapter.subject) continue;

    const key = `${dynamicChapter.subject}:${dynamicChapter.title}`;
    const existingByTitle = seenByTitle.get(key);
    const existingById = merged.findIndex((c) => c.id === dynamicChapter.id);

    if (existingById >= 0) {
      // Same ID: override (but deduplicate subchapters first)
      const deduplicatedChapter = deduplicateSubchapters(dynamicChapter);
      merged[existingById] = deduplicatedChapter;
      seenByTitle.set(key, deduplicatedChapter);
    } else if (existingByTitle) {
      // Same title+subject but different ID: keep the one with more subchapters
      const existingCount = (existingByTitle.unterkapitel || []).length;
      const dynamicCount = (dynamicChapter.unterkapitel || []).length;

      if (dynamicCount > existingCount) {
        // Replace with dynamic chapter (deduplicated)
        const deduplicatedChapter = deduplicateSubchapters(dynamicChapter);
        const index = merged.findIndex((c) => c.id === existingByTitle.id);
        if (index >= 0) {
          merged[index] = deduplicatedChapter;
          seenByTitle.set(key, deduplicatedChapter);
        }
      }
      // Otherwise, ignore the dynamic chapter (keep existing)
    } else {
      // New chapter: add it (deduplicated)
      const deduplicatedChapter = deduplicateSubchapters(dynamicChapter);
      merged.push(deduplicatedChapter);
      seenByTitle.set(key, deduplicatedChapter);
    }
  }

  // Final pass: ensure no duplicate subchapters in any chapter
  return merged.map((chapter) => deduplicateSubchapters(chapter));
}

/**
 * Helper: Remove duplicate subchapters within a chapter by title (case-insensitive)
 * Keeps the first occurrence (or the one with more content if we can determine it)
 */
function deduplicateSubchapters(chapter: Kapitel): Kapitel {
  if (!chapter.unterkapitel || chapter.unterkapitel.length === 0) {
    return chapter;
  }

  const seen = new Map<string, (typeof chapter.unterkapitel)[0]>();
  const unique: typeof chapter.unterkapitel = [];

  for (const subchapter of chapter.unterkapitel) {
    if (!subchapter.title) {
      // Keep subchapters without title (shouldn't happen, but handle gracefully)
      unique.push(subchapter);
      continue;
    }

    const normalizedTitle = subchapter.title.trim().toLowerCase();
    const existing = seen.get(normalizedTitle);

    if (!existing) {
      seen.set(normalizedTitle, subchapter);
      unique.push(subchapter);
    } else {
      // Duplicate found - keep the one with more content
      const existingScore =
        (existing.content || "").length + (existing.sections || []).length * 1000;
      const currentScore =
        (subchapter.content || "").length + (subchapter.sections || []).length * 1000;

      if (currentScore > existingScore) {
        // Replace existing with current (more complete)
        const index = unique.findIndex((uk) => uk.id === existing.id);
        if (index >= 0) {
          unique[index] = subchapter;
          seen.set(normalizedTitle, subchapter);
        }
      }
      // Otherwise, keep existing (ignore current duplicate)
    }
  }

  return {
    ...chapter,
    unterkapitel: unique,
  };
}

/**
 * Clear all stored chapters (for testing/debugging)
 */
export function clearAllChapters(): void {
  localStorage.removeItem(STORAGE_KEY);
  console.log("✅ All chapters cleared from localStorage");
}

/**
 * Manually trigger cleanup of duplicate subchapters in "Die Zelle"
 * Can be called from browser console: removeDuplicateSubchapters('bio-kap1')
 * Or use: cleanupDieZelleDuplicates()
 */
export function cleanupDieZelleDuplicates(): string[] {
  console.log('🧹 Manually cleaning duplicate subchapters in "Die Zelle"...');
  try {
    const deletedIds = removeDuplicateSubchapters("bio-kap1");
    if (deletedIds.length > 0) {
      console.log("✅ Cleanup complete. Please refresh the page to see changes.");
    } else {
      console.log("ℹ️ No duplicates found.");
    }
    return deletedIds;
  } catch (error) {
    console.error("❌ Error during manual cleanup:", error);
    throw error;
  }
}

/**
 * Remove duplicate subchapters within a specific chapter
 * For subchapters with the same title, keeps the one with more complete content
 * (more sections, more content length, or more fields filled)
 */
export function removeDuplicateSubchapters(chapterId: string): string[] {
  try {
    const all = loadChaptersRaw();
    const chapterIndex = all.findIndex((ch) => ch.id === chapterId);

    if (chapterIndex < 0) {
      console.log(`ℹ️ Chapter ${chapterId} not found`);
      return [];
    }

    const chapter = all[chapterIndex];
    const subchapters = chapter.unterkapitel || [];

    if (subchapters.length === 0) {
      console.log(`ℹ️ Chapter ${chapterId} has no subchapters`);
      return [];
    }

    const deletedIds: string[] = [];
    const seen = new Map<string, (typeof subchapters)[0]>(); // key: title (normalized)

    // Helper to calculate "completeness" score of a subchapter
    const getCompletenessScore = (uk: (typeof subchapters)[0]): number => {
      let score = 0;
      score += (uk.content || "").length; // Content length
      score += (uk.sections || []).length * 1000; // Sections count (weighted)
      score += (uk.lernziele || []).length * 100; // Lernziele count
      score += (uk.merksätze || []).length * 100; // Merksätze count
      score += (uk.selfTest || []).length * 100; // SelfTest count
      if (uk.altfrage) score += 50;
      if (uk.klinischerBezug) score += 50;
      if (uk.diagram) score += 25;
      return score;
    };

    // First pass: identify duplicates by title (case-insensitive, trimmed)
    console.log(
      `🔍 [removeDuplicateSubchapters] Checking ${subchapters.length} subchapters in chapter ${chapterId}`
    );
    for (const subchapter of subchapters) {
      if (!subchapter.title) {
        console.warn(`⚠️ Subchapter without title found (ID: ${subchapter.id})`);
        continue;
      }

      const normalizedTitle = subchapter.title.trim().toLowerCase();
      const existing = seen.get(normalizedTitle);

      if (!existing) {
        seen.set(normalizedTitle, subchapter);
        console.log(`✓ Keeping subchapter: "${subchapter.title}" (ID: ${subchapter.id})`);
      } else {
        // Compare completeness scores
        const existingScore = getCompletenessScore(existing);
        const currentScore = getCompletenessScore(subchapter);

        console.log(`🔍 Duplicate found: "${subchapter.title}"`);
        console.log(`   Existing: ID ${existing.id}, Score: ${existingScore}`);
        console.log(`   Current: ID ${subchapter.id}, Score: ${currentScore}`);

        if (currentScore > existingScore) {
          // Current subchapter is more complete, replace
          deletedIds.push(existing.id);
          seen.set(normalizedTitle, subchapter);
          console.log(`   → Keeping current (higher score), deleting existing`);
        } else {
          // Existing subchapter is more complete or equal, delete current
          deletedIds.push(subchapter.id);
          console.log(`   → Keeping existing (higher or equal score), deleting current`);
        }
      }
    }

    if (deletedIds.length === 0) {
      console.log(`ℹ️ No duplicate subchapters found in chapter ${chapterId}`);
      return [];
    }

    // Remove deleted subchapters
    const remainingSubchapters = subchapters.filter((uk) => !deletedIds.includes(uk.id));

    // Update chapter with deduplicated subchapters
    all[chapterIndex] = {
      ...chapter,
      unterkapitel: remainingSubchapters,
    };

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: all,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log(
      `✅ Removed ${deletedIds.length} duplicate subchapter(s) from chapter ${chapterId}:`,
      deletedIds
    );
    console.log(
      "📋 Removed subchapters:",
      subchapters
        .filter((uk) => deletedIds.includes(uk.id))
        .map((uk) => `${uk.title} (${uk.id})`)
        .join(", ")
    );

    return deletedIds;
  } catch (error) {
    console.error("❌ Error removing duplicate subchapters:", error);
    throw error;
  }
}

/**
 * Delete chapters that have only one subchapter
 */
export function deleteChaptersWithSingleSubchapter(): string[] {
  try {
    const all = loadAllChapters();
    const chaptersToDelete = all.filter((chapter) => {
      const subchapterCount = (chapter.unterkapitel || []).length;
      return subchapterCount === 1;
    });

    if (chaptersToDelete.length === 0) {
      console.log("ℹ️ No chapters with only one subchapter found");
      return [];
    }

    const deletedIds = chaptersToDelete.map((ch) => ch.id);
    const remaining = all.filter((chapter) => {
      const subchapterCount = (chapter.unterkapitel || []).length;
      return subchapterCount !== 1;
    });

    const stored: StoredChapters = {
      version: STORAGE_VERSION,
      chapters: remaining,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    console.log(`✅ Deleted ${deletedIds.length} chapter(s) with only one subchapter:`, deletedIds);
    console.log(
      "📋 Deleted chapters:",
      chaptersToDelete.map((ch) => `${ch.title} (${ch.id})`).join(", ")
    );

    return deletedIds;
  } catch (error) {
    console.error("❌ Error deleting chapters with single subchapter:", error);
    throw error;
  }
}
