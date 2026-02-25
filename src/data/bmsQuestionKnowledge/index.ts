/**
 * Central registry for BMS question knowledge (all subjects).
 * Generator uses getKnowledgeByUkId(ukId) to resolve knowledge per Unterkapitel.
 */
import { getKnowledgeByUkId as getBio, getAllBiologieUkIds } from "./biologie";
import { getKnowledgeByUkId as getChem, getAllChemieUkIds } from "./chemie";
import { getKnowledgeByUkId as getPhys, getAllPhysikUkIds } from "./physik";
import { getKnowledgeByUkId as getMath, getAllMathematikUkIds } from "./mathematik";
import type { BMSKnowledge } from "./types";

export type {
  BMSKnowledge,
  BMSFact,
  BMSRelation,
  BMSNumber,
  BMSContrast,
  BMSSequence,
  BMSRechenfrage,
  GeneratedBMSQuestion,
  GeneratedTypKQuestion,
  BMSSubject,
  FactCategory,
} from "./types";

export function getKnowledgeByUkId(ukId: string): BMSKnowledge | undefined {
  return getBio(ukId) ?? getChem(ukId) ?? getPhys(ukId) ?? getMath(ukId);
}

export function getAllKnowledgeUkIds(): string[] {
  return [
    ...getAllBiologieUkIds(),
    ...getAllChemieUkIds(),
    ...getAllPhysikUkIds(),
    ...getAllMathematikUkIds(),
  ];
}

/** Chapters that have at least one UK with question knowledge (for UI when source is content). */
export function getChaptersWithContentKnowledge(): { chapterId: string; ukIds: string[] }[] {
  const ids = getAllKnowledgeUkIds();
  const byChapter: Record<string, string[]> = {};
  for (const ukId of ids) {
    const m = ukId.match(/^(bio|ch|ph|ma)-(\d+)-\d+$/);
    const chapterId = m ? `${m[1]}-kap${m[2]}` : ukId;
    if (!byChapter[chapterId]) byChapter[chapterId] = [];
    byChapter[chapterId].push(ukId);
  }
  return Object.entries(byChapter).map(([chapterId, ukIds]) => ({ chapterId, ukIds }));
}
