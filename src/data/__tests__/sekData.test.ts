import { describe, it, expect } from "vitest";
import {
  emotionenErkennenTasks,
  emotionenRegulierenTasks,
  sozialesEntscheidenTasks,
} from "@/data/sekDataNew";

describe("SEK Data", () => {
  describe("Emotionen Regulieren (ER)", () => {
    it("all tasks have exactly 4 strategies", () => {
      const bad = emotionenRegulierenTasks.filter((t) => t.strategien.length !== 4);
      expect(bad.map((t) => t.id)).toEqual([]);
    });

    it("all tasks have scores 0, 1, 2, 3", () => {
      const bad = emotionenRegulierenTasks.filter((t) => {
        const scores = t.strategien.map((s) => s.score).sort((a, b) => a - b);
        return scores.join(",") !== "0,1,2,3";
      });
      expect(bad.map((t) => `${t.id}: [${t.strategien.map((s) => s.score)}]`)).toEqual([]);
    });

    it("no duplicate IDs", () => {
      const seen = new Set<string>();
      const dupes: string[] = [];
      for (const t of emotionenRegulierenTasks) {
        if (seen.has(t.id)) dupes.push(t.id);
        seen.add(t.id);
      }
      expect(dupes).toEqual([]);
    });

    it("difficulty is 1, 2, or 3", () => {
      const bad = emotionenRegulierenTasks.filter(
        (t) => t.difficulty != null && ![1, 2, 3].includes(t.difficulty)
      );
      expect(bad.map((t) => `${t.id}: ${t.difficulty}`)).toEqual([]);
    });
  });

  describe("Emotionen Erkennen (EE)", () => {
    it("all tasks have exactly 5 emotions", () => {
      const bad = emotionenErkennenTasks.filter((t) => t.emotionen.length !== 5);
      expect(bad.map((t) => t.id)).toEqual([]);
    });

    it("each emotion is wahrscheinlich or unwahrscheinlich", () => {
      const valid = new Set(["wahrscheinlich", "unwahrscheinlich"]);
      const bad = emotionenErkennenTasks.filter((t) =>
        t.emotionen.some((e) => !valid.has(e.correct))
      );
      expect(bad.map((t) => t.id)).toEqual([]);
    });

    it("no duplicate IDs", () => {
      const seen = new Set<string>();
      const dupes: string[] = [];
      for (const t of emotionenErkennenTasks) {
        if (seen.has(t.id)) dupes.push(t.id);
        seen.add(t.id);
      }
      expect(dupes).toEqual([]);
    });

    it("difficulty is 1, 2, or 3", () => {
      const bad = emotionenErkennenTasks.filter(
        (t) => t.difficulty != null && ![1, 2, 3].includes(t.difficulty)
      );
      expect(bad.map((t) => `${t.id}: ${t.difficulty}`)).toEqual([]);
    });
  });

  describe("Soziales Entscheiden (SE)", () => {
    it("all tasks have exactly 5 statements", () => {
      const bad = sozialesEntscheidenTasks.filter((t) => t.aussagen.length !== 5);
      expect(bad.map((t) => t.id)).toEqual([]);
    });

    it("idealRank values are 1-5 without duplicates", () => {
      const bad = sozialesEntscheidenTasks.filter((t) => {
        const ranks = t.aussagen.map((a) => a.idealRank).sort((a, b) => a - b);
        return ranks.join(",") !== "1,2,3,4,5";
      });
      expect(bad.map((t) => `${t.id}: [${t.aussagen.map((a) => a.idealRank)}]`)).toEqual([]);
    });

    it("no duplicate IDs", () => {
      const seen = new Set<string>();
      const dupes: string[] = [];
      for (const t of sozialesEntscheidenTasks) {
        if (seen.has(t.id)) dupes.push(t.id);
        seen.add(t.id);
      }
      expect(dupes).toEqual([]);
    });

    it("difficulty is 1, 2, or 3", () => {
      const bad = sozialesEntscheidenTasks.filter(
        (t) => t.difficulty != null && ![1, 2, 3].includes(t.difficulty)
      );
      expect(bad.map((t) => `${t.id}: ${t.difficulty}`)).toEqual([]);
    });
  });
});
