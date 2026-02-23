#!/usr/bin/env node
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse .env file manually
const envPath = join(__dirname, "..", ".env");
const envContent = readFileSync(envPath, "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const [key, ...valueParts] = trimmed.split("=");
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join("=").trim();
    }
  }
}

const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseAnonKey = envVars.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function auditMerksatzBox() {
  console.log("Querying bms_subchapters table...\n");

  // First, let's get one row to see the schema
  const { data: sampleData, error: sampleError } = await supabase
    .from("bms_subchapters")
    .select("*")
    .limit(1);

  if (sampleError) {
    console.error("Sample query error:", sampleError);
    process.exit(1);
  }

  if (sampleData && sampleData.length > 0) {
    console.log("Available columns:", Object.keys(sampleData[0]));
    console.log("Sample row:", JSON.stringify(sampleData[0], null, 2));
    console.log("\n");
  }

  // Fetch all subchapters (use * to get all columns)
  const { data, error } = await supabase
    .from("bms_subchapters")
    .select("*")
    .order("chapter_id")
    .order("order_index");

  if (error) {
    console.error("Query error:", error);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.log("No data found in bms_subchapters table");
    return;
  }

  // Group by chapter and count MerksatzBox instances
  const chapterStats = {};

  for (const row of data) {
    const chapterId = row.chapter_id;

    if (!chapterStats[chapterId]) {
      chapterStats[chapterId] = {
        unterkapitel: [],
        totalBoxes: 0,
      };
    }

    // Count MerksatzBox instances by parsing markdown content
    const content = row.content || "";

    // Count different MerksatzBox types in markdown
    // Pattern: >>>> **Merke:** or >>>> **Altfrage:** or >>>> **Klinischer Bezug:** etc.
    const merkeMatches = (content.match(/>>>> \*\*Merke:\*\*/g) || []).length;
    const altfrageMatches = (content.match(/>>>> \*\*Altfrage:\*\*/g) || []).length;
    const klinischMatches = (content.match(/>>>> \*\*Klinischer Bezug:\*\*/g) || []).length;
    const achtungMatches = (content.match(/>>>> \*\*Achtung:\*\*/g) || []).length;
    const tippMatches = (content.match(/>>>> \*\*Tipp:\*\*/g) || []).length;

    const merksaetzeCount = merkeMatches;
    const klinischCount = klinischMatches;
    const altfrageCount = altfrageMatches;
    const achtungCount = achtungMatches;
    const tippCount = tippMatches;

    const totalBoxes = merksaetzeCount + klinischCount + altfrageCount + achtungCount + tippCount;

    chapterStats[chapterId].unterkapitel.push({
      id: row.id,
      title: row.title,
      merksaetzeCount,
      klinischCount,
      altfrageCount,
      achtungCount,
      tippCount,
      totalBoxes,
    });

    chapterStats[chapterId].totalBoxes += totalBoxes;
  }

  // Output results by subject
  const subjects = {
    bio: { name: "Biologie", chapters: [] },
    chem: { name: "Chemie", chapters: [] },
    phys: { name: "Physik", chapters: [] },
    math: { name: "Mathematik", chapters: [] },
  };

  for (const [chapterId, stats] of Object.entries(chapterStats)) {
    const prefix = chapterId.split("-")[0];
    const ukCount = stats.unterkapitel.length;
    const avgBoxes = (stats.totalBoxes / ukCount).toFixed(1);
    const status =
      stats.totalBoxes >= 2 ? "✅ Compliant" : stats.totalBoxes === 1 ? "⚠️ Deficit" : "❌ Missing";

    const chapterData = {
      chapterId,
      ukCount,
      totalBoxes: stats.totalBoxes,
      avgBoxes,
      status,
      unterkapitel: stats.unterkapitel,
    };

    if (subjects[prefix]) {
      subjects[prefix].chapters.push(chapterData);
    }
  }

  // Output formatted results
  console.log("═".repeat(80));
  console.log("MerksatzBox AUDIT RESULTS");
  console.log("═".repeat(80));
  console.log();

  let totalCompliant = 0;
  let totalDeficit = 0;
  let totalMissing = 0;
  let totalChapters = 0;

  for (const [key, subject] of Object.entries(subjects)) {
    if (subject.chapters.length === 0) continue;

    console.log(`### ${subject.name} (${subject.chapters.length} chapters)`);
    console.log();

    for (const chapter of subject.chapters) {
      totalChapters++;

      if (chapter.status.includes("Compliant")) totalCompliant++;
      else if (chapter.status.includes("Deficit")) totalDeficit++;
      else totalMissing++;

      console.log(`${chapter.status} ${chapter.chapterId}`);
      console.log(`  Unterkapitel: ${chapter.ukCount}`);
      console.log(`  Total MerksatzBox: ${chapter.totalBoxes} (avg ${chapter.avgBoxes} per UK)`);

      // Show detail for deficit/missing chapters
      if (!chapter.status.includes("Compliant")) {
        console.log(`  Detail by Unterkapitel:`);
        for (const uk of chapter.unterkapitel) {
          const types = [];
          if (uk.merksaetzeCount > 0) types.push(`merke:${uk.merksaetzeCount}`);
          if (uk.klinischCount > 0) types.push(`klinisch:${uk.klinischCount}`);
          if (uk.altfrageCount > 0) types.push(`altfrage:${uk.altfrageCount}`);
          if (uk.achtungCount > 0) types.push(`achtung:${uk.achtungCount}`);
          if (uk.tippCount > 0) types.push(`tipp:${uk.tippCount}`);
          const typeStr = types.length > 0 ? types.join(", ") : "none";
          console.log(`    - ${uk.title}: ${uk.totalBoxes} boxes (${typeStr})`);
        }
      }
      console.log();
    }
  }

  console.log("═".repeat(80));
  console.log("SUMMARY");
  console.log("═".repeat(80));
  console.log(`Total chapters analyzed: ${totalChapters}`);
  console.log(
    `✅ Compliant (2+ boxes): ${totalCompliant} (${((totalCompliant / totalChapters) * 100).toFixed(1)}%)`
  );
  console.log(
    `⚠️ Deficit (1 box): ${totalDeficit} (${((totalDeficit / totalChapters) * 100).toFixed(1)}%)`
  );
  console.log(
    `❌ Missing (0 boxes): ${totalMissing} (${((totalMissing / totalChapters) * 100).toFixed(1)}%)`
  );
  console.log();

  // Output JSON for programmatic processing
  console.log("═".repeat(80));
  console.log("JSON OUTPUT");
  console.log("═".repeat(80));
  console.log(JSON.stringify(subjects, null, 2));
}

auditMerksatzBox().catch(console.error);
