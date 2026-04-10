import { describe, it, expect } from "vitest";
import { validateKFFTask, filterValidSequenceTasks } from "@/data/kffValidation";
import { OFFICIAL_ZF_EXAMPLES, generateSequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { OFFICIAL_FZ_EXAMPLES, generateFigurenTrainingTask } from "@/data/kffFigurenZusammensetzenMedAT";
import { OFFICIAL_WF_EXAMPLES } from "@/data/kffWortfluessigkeitMedAT";
import { generateWordFluencyTask, generateImplicationTrainingTask } from "@/data/kffGenerators";
import { OFFICIAL_IMPLICATION_EXAMPLES } from "@/data/kffImplikationen";
import { OFFICIAL_GM_EXAMPLES } from "@/data/kffGedaechtnisMedAT";
import { generateAllergyPasses, generateGedaechtnisQuestionsFromPasses } from "@/data/kffGenerators";

describe("KFF Validation", () => {
  describe("Zahlenfolgen", () => {
    it("all official examples are valid", () => {
      for (const task of OFFICIAL_ZF_EXAMPLES) {
        const r = validateKFFTask(task, "zahlenfolgen");
        expect(r.ok, `OFFICIAL ${task.id}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });

    it("generated medium tasks are valid", () => {
      for (let i = 0; i < 5; i++) {
        const task = generateSequenceTask("medium", 1000 + i);
        const r = validateKFFTask(task, "zahlenfolgen");
        expect(r.ok, `generated medium ${i}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });
  });

  describe("Figuren zusammensetzen", () => {
    it("all official examples are valid", () => {
      for (const task of OFFICIAL_FZ_EXAMPLES) {
        const r = validateKFFTask(task, "figuren");
        expect(r.ok, `OFFICIAL ${task.id}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });

    it("generated medium tasks are valid", () => {
      for (let i = 0; i < 5; i++) {
        const task = generateFigurenTrainingTask("medium", 2000 + i);
        const r = validateKFFTask(task, "figuren");
        expect(r.ok, `generated medium ${i}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });
  });

  describe("Wortfluessigkeit", () => {
    it("all official examples are valid", () => {
      for (const task of OFFICIAL_WF_EXAMPLES) {
        const r = validateKFFTask(task, "wortflüssigkeit");
        expect(r.ok, `OFFICIAL ${task.id ?? "wf"}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });

    it("generated tasks are valid (with retries)", () => {
      for (let i = 0; i < 5; i++) {
        let task = generateWordFluencyTask(2);
        let r = task ? validateKFFTask(task, "wortflüssigkeit") : { ok: false, reason: "null" };
        let attempts = 0;
        while (!r.ok && attempts < 10) {
          task = generateWordFluencyTask(2);
          if (!task) { attempts++; continue; }
          r = validateKFFTask(task, "wortflüssigkeit");
          attempts++;
        }
        expect(r.ok, `generated diff 2 #${i}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });
  });

  describe("Implikationen", () => {
    it("all official examples are valid", () => {
      for (const task of OFFICIAL_IMPLICATION_EXAMPLES) {
        const r = validateKFFTask(task, "implikationen");
        expect(r.ok, `OFFICIAL ${task.id}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });

    it("generated tasks are valid", () => {
      for (let i = 0; i < 5; i++) {
        const task = generateImplicationTrainingTask(2);
        const r = validateKFFTask(task, "implikationen");
        expect(r.ok, `generated diff 2 #${i}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });
  });

  describe("Merkfaehigkeit", () => {
    it("official examples are valid (if present)", () => {
      if (OFFICIAL_GM_EXAMPLES.passes.length > 0 && OFFICIAL_GM_EXAMPLES.questions.length > 0) {
        for (const q of OFFICIAL_GM_EXAMPLES.questions) {
          const r = validateKFFTask(q, "gedaechtnis");
          expect(r.ok, `OFFICIAL ${q.id}: ${("reason" in r ? r.reason : "")}`).toBe(true);
        }
      }
    });

    it("generated tasks are valid", () => {
      const passes = generateAllergyPasses(6);
      const questions = generateGedaechtnisQuestionsFromPasses(passes, 10);
      for (let i = 0; i < Math.min(5, questions.length); i++) {
        const q = questions[i]!;
        const r = validateKFFTask(q, "gedaechtnis");
        expect(r.ok, `generated #${i}: ${("reason" in r ? r.reason : "")}`).toBe(true);
      }
    });
  });

  describe("filterValidSequenceTasks", () => {
    it("filters correctly and keeps valid tasks", () => {
      const mixed = [...OFFICIAL_ZF_EXAMPLES, generateSequenceTask("easy", 999)];
      const valid = filterValidSequenceTasks(mixed);
      expect(valid.length).toBeGreaterThanOrEqual(OFFICIAL_ZF_EXAMPLES.length);
    });
  });
});
