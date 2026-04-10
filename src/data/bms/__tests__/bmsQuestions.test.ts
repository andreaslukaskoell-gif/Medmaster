import { describe, it, expect } from "vitest";
import { getAllBmsQuestions } from "@/data/bms/index";
import { alleStichworteListe } from "@/data/stichworteData";
import { alleStichwortFragen } from "@/data/questions/index";

const questions = getAllBmsQuestions();

describe("BMS Questions", () => {
  it("should have more than 5000 questions total", () => {
    expect(questions.length).toBeGreaterThanOrEqual(5000);
  });

  it("every question has exactly 5 options (A-E)", () => {
    const bad = questions.filter((q) => q.options.length !== 5);
    expect(bad.map((q) => q.id)).toEqual([]);
  });

  it("correctOptionId is always a-e", () => {
    const validIds = new Set(["a", "b", "c", "d", "e"]);
    const bad = questions.filter((q) => !validIds.has(q.correctOptionId));
    expect(bad.map((q) => `${q.id}: ${q.correctOptionId}`)).toEqual([]);
  });

  it("no duplicate IDs", () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const q of questions) {
      if (seen.has(q.id)) dupes.push(q.id);
      seen.add(q.id);
    }
    expect(dupes).toEqual([]);
  });

  it("difficulty is leicht, mittel, or schwer", () => {
    const validDiff = new Set(["leicht", "mittel", "schwer"]);
    const bad = questions.filter((q) => !validDiff.has(q.difficulty));
    expect(bad.map((q) => `${q.id}: ${q.difficulty}`)).toEqual([]);
  });

  it("every position (a-e) has at least 3% of answers", () => {
    const counts: Record<string, number> = { a: 0, b: 0, c: 0, d: 0, e: 0 };
    for (const q of questions) {
      counts[q.correctOptionId]++;
    }
    const total = questions.length;
    for (const pos of ["a", "b", "c", "d", "e"]) {
      const pct = (counts[pos] / total) * 100;
      expect(
        pct,
        `Position ${pos}: ${pct.toFixed(1)}% (${counts[pos]}/${total}) — should be at least 3%`
      ).toBeGreaterThanOrEqual(3);
    }
  });

  it("Stichwort-Liste has 218 entries", () => {
    expect(alleStichworteListe.length).toBe(218);
  });

  it("at least 30% of Stichwort entries have dedicated questions", () => {
    const coveredIds = new Set(alleStichwortFragen.map((f) => f.stichwortId));
    const covered = alleStichworteListe.filter((sw) => coveredIds.has(sw.id)).length;
    const coveragePct = (covered / alleStichworteListe.length) * 100;
    expect(
      coveragePct,
      `Only ${coveragePct.toFixed(1)}% Stichwort coverage (${covered}/${alleStichworteListe.length})`
    ).toBeGreaterThanOrEqual(30);
  });
});
