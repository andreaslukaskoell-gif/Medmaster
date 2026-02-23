/**
 * Test file for BMS Storage - Subchapter Persistence
 *
 * Run this in browser console to verify subchapters don't overwrite each other
 */

import {
  saveChapter,
  saveSubchapter,
  loadAllChapters,
  loadChaptersBySubject,
  clearAllChapters,
} from "./bmsStorage";
import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";

export function testSubchapterPersistence() {
  console.log("🧪 Testing Subchapter Persistence...");
  console.log("=".repeat(60));

  // Clear existing data
  clearAllChapters();
  console.log("✅ Cleared existing chapters");

  // Test 1: Create chapter "Die Zelle"
  console.log('\n1️⃣ Test: Create chapter "Die Zelle"');
  const chapter1: Kapitel = {
    id: "bio-kap-test",
    title: "Die Zelle",
    subject: "biologie",
    icon: "🔬",
    estimatedTime: "",
    unterkapitel: [
      {
        id: "bio-kap-test-uk-1",
        title: "Zellmembran",
        content: "Die Zellmembran umschließt die Zelle...",
        lernziele: [],
        sections: [],
        merksätze: [],
        selfTest: [],
      },
    ],
  };

  saveChapter(chapter1);
  const loaded1 = loadChaptersBySubject("biologie");
  const testChapter1 = loaded1.find((c) => c.id === "bio-kap-test");
  if (!testChapter1 || testChapter1.unterkapitel.length !== 1) {
    console.error("❌ FAIL: Chapter not created correctly");
    return false;
  }
  console.log("✅ PASS: Chapter created with 1 subchapter");
  console.log("   Subchapter:", testChapter1.unterkapitel[0].title);

  // Test 2: Add second subchapter "Zellkern"
  console.log('\n2️⃣ Test: Add second subchapter "Zellkern"');
  const subchapter2: Unterkapitel = {
    id: "bio-kap-test-uk-2",
    title: "Zellkern",
    content: "Der Zellkern enthält die DNA...",
    lernziele: [],
    sections: [],
    merksätze: [],
    selfTest: [],
  };

  saveSubchapter("bio-kap-test", subchapter2);
  const loaded2 = loadChaptersBySubject("biologie");
  const testChapter2 = loaded2.find((c) => c.id === "bio-kap-test");
  if (!testChapter2 || testChapter2.unterkapitel.length !== 2) {
    console.error("❌ FAIL: Second subchapter not added");
    console.error("   Expected 2 subchapters, got", testChapter2?.unterkapitel.length || 0);
    return false;
  }
  console.log("✅ PASS: Second subchapter added");
  console.log("   Subchapters:", testChapter2.unterkapitel.map((uk) => uk.title).join(", "));

  // Test 3: Verify both subchapters exist
  console.log("\n3️⃣ Test: Verify both subchapters exist");
  const uk1 = testChapter2.unterkapitel.find((uk) => uk.title === "Zellmembran");
  const uk2 = testChapter2.unterkapitel.find((uk) => uk.title === "Zellkern");
  if (!uk1 || !uk2) {
    console.error("❌ FAIL: One or both subchapters missing");
    console.error("   Zellmembran:", uk1 ? "found" : "missing");
    console.error("   Zellkern:", uk2 ? "found" : "missing");
    return false;
  }
  console.log("✅ PASS: Both subchapters exist");
  console.log("   -", uk1.title, "(ID:", uk1.id + ")");
  console.log("   -", uk2.title, "(ID:", uk2.id + ")");

  // Test 4: Update "Zellmembran" without overwriting "Zellkern"
  console.log('\n4️⃣ Test: Update "Zellmembran" without overwriting "Zellkern"');
  const updatedUk1: Unterkapitel = {
    ...uk1,
    content: "Die Zellmembran umschließt die Zelle. Sie besteht aus einer Lipiddoppelschicht...",
  };
  saveSubchapter("bio-kap-test", updatedUk1);
  const loaded3 = loadChaptersBySubject("biologie");
  const testChapter3 = loaded3.find((c) => c.id === "bio-kap-test");
  if (!testChapter3 || testChapter3.unterkapitel.length !== 2) {
    console.error("❌ FAIL: Update overwrote other subchapter");
    return false;
  }
  const updatedUk1Check = testChapter3.unterkapitel.find((uk) => uk.id === uk1.id);
  const uk2Check = testChapter3.unterkapitel.find((uk) => uk.id === uk2.id);
  if (!updatedUk1Check || updatedUk1Check.content !== updatedUk1.content) {
    console.error("❌ FAIL: Subchapter not updated");
    return false;
  }
  if (!uk2Check || uk2Check.title !== "Zellkern") {
    console.error("❌ FAIL: Other subchapter was overwritten");
    return false;
  }
  console.log("✅ PASS: Update worked, other subchapter preserved");
  console.log("   Updated:", updatedUk1Check.title);
  console.log("   Preserved:", uk2Check.title);

  // Test 5: Reload and verify persistence
  console.log("\n5️⃣ Test: Reload and verify persistence");
  const reloaded = loadChaptersBySubject("biologie");
  const reloadedChapter = reloaded.find((c) => c.id === "bio-kap-test");
  if (!reloadedChapter || reloadedChapter.unterkapitel.length !== 2) {
    console.error("❌ FAIL: Data not persisted after reload");
    return false;
  }
  const reloadedUk1 = reloadedChapter.unterkapitel.find((uk) => uk.title === "Zellmembran");
  const reloadedUk2 = reloadedChapter.unterkapitel.find((uk) => uk.title === "Zellkern");
  if (!reloadedUk1 || !reloadedUk2) {
    console.error("❌ FAIL: Subchapters not persisted");
    return false;
  }
  console.log("✅ PASS: Data persisted after reload");
  console.log("   -", reloadedUk1.title, "(ID:", reloadedUk1.id + ")");
  console.log("   -", reloadedUk2.title, "(ID:", reloadedUk2.id + ")");

  // Test 6: Verify unique IDs
  console.log("\n6️⃣ Test: Verify unique IDs");
  const allIds = reloadedChapter.unterkapitel.map((uk) => uk.id);
  const uniqueIds = new Set(allIds);
  if (allIds.length !== uniqueIds.size) {
    console.error("❌ FAIL: Duplicate IDs found");
    return false;
  }
  console.log("✅ PASS: All subchapters have unique IDs");
  console.log("   IDs:", allIds.join(", "));

  console.log("\n" + "=".repeat(60));
  console.log("✅ ALL TESTS PASSED!");
  console.log("=".repeat(60));

  return true;
}

// Auto-run in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // @ts-ignore
  window.testSubchapterPersistence = testSubchapterPersistence;
  console.log("💡 Run testSubchapterPersistence() in the console to test subchapter persistence");
}
