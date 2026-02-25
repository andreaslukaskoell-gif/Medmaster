import {
  bioKap1Uk01Knowledge,
  bioKap1Uk02Knowledge,
  bioKap1Uk03Knowledge,
  bioKap1Uk04Knowledge,
} from "./kap1-uk01";
import type { BMSKnowledge } from "../types";

const byUkId: Record<string, BMSKnowledge> = {
  [bioKap1Uk01Knowledge.ukId]: bioKap1Uk01Knowledge,
  [bioKap1Uk02Knowledge.ukId]: bioKap1Uk02Knowledge,
  [bioKap1Uk03Knowledge.ukId]: bioKap1Uk03Knowledge,
  [bioKap1Uk04Knowledge.ukId]: bioKap1Uk04Knowledge,
};

export function getKnowledgeByUkId(ukId: string): BMSKnowledge | undefined {
  return byUkId[ukId];
}

export function getAllBiologieUkIds(): string[] {
  return Object.keys(byUkId);
}

export { bioKap1Uk01Knowledge, bioKap1Uk02Knowledge, bioKap1Uk03Knowledge, bioKap1Uk04Knowledge };
