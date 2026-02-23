/**
 * Migration Script: Update bio-kap7 Unterkapitel Content
 *
 * Updates the `content` field for all 6 Unterkapitel in bio-kap7
 * with the newly generated markdown content.
 *
 * Usage:
 * npx tsx src/scripts/migrateKap7Content.ts
 */

import { supabase } from "../lib/supabase";
import { readFileSync } from "fs";
import { join } from "path";

interface UnterkapitelUpdate {
  title: string;
  contentFile: string;
}

const UNTERKAPITEL_MAPPING: UnterkapitelUpdate[] = [
  {
    title: "PCR (Polymerase-Kettenreaktion)",
    contentFile: ".planning/UK1_PCR_REWRITE.md",
  },
  {
    title: "DNA-Sequenzierung",
    contentFile: ".planning/UK2_DNA_Sequenzierung.md",
  },
  {
    title: "Genomanalyse",
    contentFile: ".planning/UK3_Genomanalyse.md",
  },
  {
    title: "Genetischer Fingerabdruck",
    contentFile: ".planning/UK4_Genetischer_Fingerabdruck.md",
  },
  {
    title: "Gentechnisch veränderte Organismen (GVO)",
    contentFile: ".planning/UK5_GVO.md",
  },
  {
    title: "Klonierung",
    contentFile: ".planning/UK6_Klonierung.md",
  },
];

async function migrateKap7Content() {
  console.log("🚀 Starting bio-kap7 content migration...\n");

  const client = supabase;
  if (!client) {
    console.error("❌ Supabase client not configured");
    process.exit(1);
  }

  let updatedCount = 0;
  const errors: string[] = [];

  // Get bio-kap7 chapter_id (should be 'bio-kap7')
  const CHAPTER_ID = "bio-kap7";

  for (const mapping of UNTERKAPITEL_MAPPING) {
    try {
      console.log(`📝 Processing: ${mapping.title}`);

      // Read markdown content from file
      const projectRoot = join(__dirname, "../..");
      const contentPath = join(projectRoot, mapping.contentFile);

      let markdownContent: string;
      try {
        markdownContent = readFileSync(contentPath, "utf-8");
      } catch (fileError) {
        const errorMsg = `Failed to read file ${mapping.contentFile}: ${fileError}`;
        console.error(`   ❌ ${errorMsg}`);
        errors.push(errorMsg);
        continue;
      }

      // Find the subchapter in Supabase by chapter_id and title
      const { data: subchapters, error: fetchError } = await client
        .from("bms_subchapters")
        .select("id, title")
        .eq("chapter_id", CHAPTER_ID)
        .eq("title", mapping.title);

      if (fetchError) {
        const errorMsg = `Failed to query subchapter "${mapping.title}": ${fetchError.message}`;
        console.error(`   ❌ ${errorMsg}`);
        errors.push(errorMsg);
        continue;
      }

      if (!subchapters || subchapters.length === 0) {
        const errorMsg = `Subchapter not found in database: "${mapping.title}"`;
        console.error(`   ⚠️  ${errorMsg}`);
        errors.push(errorMsg);
        continue;
      }

      if (subchapters.length > 1) {
        console.warn(
          `   ⚠️  Multiple subchapters found for "${mapping.title}", updating first one`
        );
      }

      const subchapterId = subchapters[0].id;

      // Update ONLY the content field
      const { error: updateError } = await client
        .from("bms_subchapters")
        .update({
          content: markdownContent,
          updated_at: new Date().toISOString(),
        })
        .eq("id", subchapterId);

      if (updateError) {
        const errorMsg = `Failed to update subchapter ${subchapterId}: ${updateError.message}`;
        console.error(`   ❌ ${errorMsg}`);
        errors.push(errorMsg);
        continue;
      }

      console.log(`   ✅ Updated subchapter ${subchapterId}`);
      updatedCount++;
    } catch (error) {
      const errorMsg = `Unexpected error processing "${mapping.title}": ${error}`;
      console.error(`   ❌ ${errorMsg}`);
      errors.push(errorMsg);
    }
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📊 MIGRATION SUMMARY");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(
    `✅ Successfully updated: ${updatedCount}/${UNTERKAPITEL_MAPPING.length} Unterkapitel`
  );

  if (errors.length > 0) {
    console.log(`❌ Errors encountered: ${errors.length}`);
    errors.forEach((err, idx) => {
      console.log(`   ${idx + 1}. ${err}`);
    });
  } else {
    console.log("🎉 All Unterkapitel updated successfully!");
  }
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  process.exit(errors.length > 0 ? 1 : 0);
}

// Run migration
migrateKap7Content().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
