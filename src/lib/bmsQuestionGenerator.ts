/**
 * BMS Content Question Generator & Validator.
 *
 * Rules:
 * - Only uses defined BMSKnowledge (terms, facts, relations, numbers, contrasts).
 * - No free-text generation, no hallucination.
 * - Every question: exactly 5 options (A–E), exactly 1 correct.
 * - Validator: reject if not unique, not solvable, or invalid; then retry (max attempts).
 */
import { getKnowledgeByUkId } from "@/data/bmsQuestionKnowledge";
import { BMS_QUESTION_TEMPLATES } from "@/data/bmsQuestionTemplates/templates";
import type {
  BMSKnowledge,
  BMSContrast,
  BMSNumber,
  BMSRelation,
  GeneratedBMSQuestion,
  GeneratedTypKQuestion,
} from "@/data/bmsQuestionKnowledge/types";
import type { BMSQuestionTemplate } from "@/data/bmsQuestionTemplates/types";
import type { BMSFrage } from "./supabaseBMSFragen";

const OPTION_IDS = ["a", "b", "c", "d", "e"] as const;
const MAX_GENERATION_ATTEMPTS = 10;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickRandom<T>(arr: T[], n: number, exclude?: T): T[] {
  const pool = exclude ? arr.filter((x) => x !== exclude) : arr;
  const shuffled = shuffle(pool);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

/** Check if a generated question is valid: exactly 1 correct, no duplicates, all from knowledge. */
export function validateGeneratedQuestion(q: GeneratedBMSQuestion): boolean {
  if (q.options.length !== 5) return false;
  const ids = new Set(q.options.map((o) => o.id));
  if (ids.size !== 5) return false;
  if (!OPTION_IDS.includes(q.correctOptionId as (typeof OPTION_IDS)[number])) return false;
  const correctOption = q.options.find((o) => o.id === q.correctOptionId);
  if (!correctOption) return false;
  const texts = q.options.map((o) => o.text.trim().toLowerCase());
  const uniqueTexts = new Set(texts);
  if (uniqueTexts.size !== 5) return false;
  if (!q.explanation || q.explanation.length < 10) return false;
  return true;
}

/** Build one "Aussage richtig" question from facts: 1 correct + 4 distractors. */
function buildAussageRichtig(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const facts = knowledge.facts.filter((f) => !usedIds.has(f.id));
  if (facts.length < 5) return null;

  const correct = facts[Math.floor(Math.random() * facts.length)];
  const distractors = pickRandom(
    facts.filter((f) => f.id !== correct.id),
    4
  );
  const allOptions = shuffle([correct, ...distractors]);
  const correctIndex = allOptions.indexOf(correct);
  const correctOptionId = OPTION_IDS[correctIndex];

  const options = allOptions.map((f, i) => ({
    id: OPTION_IDS[i],
    text: f.text,
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem,
    options,
    correctOptionId,
    explanation: correct.explanationHint ?? correct.text,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build "Welche Aussage ist falsch?" (Negativ-Frage): 1 korrekt = plausibleFalse, 4 Distraktoren = wahre Fakten. */
function buildAussageFalsch(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const falsePool = knowledge.plausibleFalse?.filter((f) => !usedIds.has(f.id)) ?? [];
  const facts = knowledge.facts.filter((f) => !usedIds.has(f.id));
  if (falsePool.length < 1 || facts.length < 4) return null;

  const correct = falsePool[Math.floor(Math.random() * falsePool.length)];
  const distractors = pickRandom(facts, 4);
  const allOptions = shuffle([correct, ...distractors]);
  const correctIndex = allOptions.indexOf(correct);
  const correctOptionId = OPTION_IDS[correctIndex];

  const options = allOptions.map((o, i) => ({
    id: OPTION_IDS[i],
    text: o.text,
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem,
    options,
    correctOptionId,
    explanation:
      "Richtig ist die falsche Aussage – sie ist sachlich nicht zutreffend. " +
      (correct.text.length > 80 ? correct.text.slice(0, 80) + "…" : correct.text),
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build "Gegenüberstellung" question: one contrast as correct, others as distractors (wrong pairings). */
function buildGegenueberstellung(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const contrasts = knowledge.contrasts.filter((c) => !usedIds.has(c.id));
  if (contrasts.length < 3) return null;

  const correct = contrasts[Math.floor(Math.random() * contrasts.length)];
  const distractors = pickRandom(
    contrasts.filter((c) => c.id !== correct.id),
    4
  );
  const allOptions = shuffle([correct, ...distractors]);
  const correctIndex = allOptions.indexOf(correct);
  const correctOptionId = OPTION_IDS[correctIndex];

  const formatContrast = (c: BMSContrast) => `${c.optionA} – ${c.optionB}`;

  const options = allOptions.map((c, i) => ({
    id: OPTION_IDS[i],
    text: formatContrast(c),
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem,
    options,
    correctOptionId,
    explanation: `Korrekt: ${formatContrast(correct)}. Die anderen Optionen sind sachlich falsch oder vertauscht.`,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build "Größenordnung/Zahlen" question from numbers pool. */
function buildGroessenordnung(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const numbers = knowledge.numbers.filter((n) => !usedIds.has(n.id));
  if (numbers.length < 3) return null;

  const correct = numbers[Math.floor(Math.random() * numbers.length)];
  const distractors = pickRandom(
    numbers.filter((n) => n.id !== correct.id),
    4
  );
  const allOptions = shuffle([correct, ...distractors]);
  const correctIndex = allOptions.indexOf(correct);
  const correctOptionId = OPTION_IDS[correctIndex];

  const formatNumber = (n: BMSNumber) =>
    n.unit ? `${n.label}: ${n.value} ${n.unit}` : `${n.label}: ${n.value}`;

  const options = allOptions.map((n, i) => ({
    id: OPTION_IDS[i],
    text: formatNumber(n),
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem,
    options,
    correctOptionId,
    explanation: correct.context ?? correct.value,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build "Struktur/Funktion" or "Wo spielt X eine Rolle" from relations. */
function buildRelationQuestion(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const relations = knowledge.relations.filter((r) => !usedIds.has(r.id));
  if (relations.length < 5) return null;

  const correct = relations[Math.floor(Math.random() * relations.length)];
  const distractors = pickRandom(
    relations.filter((r) => r.id !== correct.id),
    4
  );
  const allOptions = shuffle([correct, ...distractors]);
  const correctIndex = allOptions.indexOf(correct);
  const correctOptionId = OPTION_IDS[correctIndex];

  const formatRelation = (r: BMSRelation) => `${r.a} – ${r.relation} – ${r.b}`;

  const options = allOptions.map((r, i) => ({
    id: OPTION_IDS[i],
    text: formatRelation(r),
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem,
    options,
    correctOptionId,
    explanation: `${correct.a} ${correct.relation} ${correct.b}.`,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build "Reihenfolge"-Frage: eine Sequence, korrekte Option = orderedItems →, 4 falsche = andere Anordnungen. */
function buildReihenfolge(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const sequences = knowledge.sequences?.filter((s) => !usedIds.has(s.id)) ?? [];
  if (sequences.length < 1) return null;

  const seq = sequences[Math.floor(Math.random() * sequences.length)];
  const correctStr = seq.orderedItems.join(" → ");
  const wrongStrs = new Set<string>();
  while (wrongStrs.size < 4) {
    const shuffled = shuffle([...seq.orderedItems]);
    const s = shuffled.join(" → ");
    if (s !== correctStr) wrongStrs.add(s);
  }
  const allOptions = shuffle([correctStr, ...wrongStrs]);
  const correctIndex = allOptions.indexOf(correctStr);
  const correctOptionId = OPTION_IDS[correctIndex];

  const options = allOptions.map((text, i) => ({
    id: OPTION_IDS[i],
    text,
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: template.stem.replace("die folgenden Schritte bzw. Phasen", seq.label),
    options,
    correctOptionId,
    explanation: seq.context ?? `Korrekte Reihenfolge: ${correctStr}.`,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

/** Build Rechenfrage: 1 korrekter Wert + 4 wrongValues, alle A–E. */
function buildRechenfrage(
  knowledge: BMSKnowledge,
  template: BMSQuestionTemplate,
  usedIds: Set<string>
): GeneratedBMSQuestion | null {
  const pool = knowledge.rechenfragen?.filter((r) => !usedIds.has(r.id)) ?? [];
  if (pool.length < 1) return null;

  const rechen = pool[Math.floor(Math.random() * pool.length)];
  if (rechen.wrongValues.length !== 4) return null;

  const correctDisplay = rechen.unit
    ? `${rechen.correctValue} ${rechen.unit}`
    : rechen.correctValue;
  const wrongDisplays = rechen.wrongValues.map((v) => (rechen.unit ? `${v} ${rechen.unit}` : v));
  const allOptions = shuffle([correctDisplay, ...wrongDisplays]);
  const correctIndex = allOptions.indexOf(correctDisplay);
  const correctOptionId = OPTION_IDS[correctIndex];

  const options = allOptions.map((text, i) => ({
    id: OPTION_IDS[i],
    text,
  }));

  const difficulty =
    template.difficultyHint === 1 ? "easy" : template.difficultyHint === 2 ? "medium" : "hard";
  const learningObjective = knowledge.learningObjectives?.[0] ?? "Stoff des Unterkapitels anwenden";

  const q: GeneratedBMSQuestion = {
    id: `gen-${knowledge.ukId}-${template.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective,
    text: rechen.text,
    options,
    correctOptionId,
    explanation: rechen.explanationHint,
    difficulty,
    templateType: template.type,
  };

  return validateGeneratedQuestion(q) ? q : null;
}

const TYP_K_STEMS = [
  "Welche der folgenden Aussagen sind richtig?",
  "Welche Aussagen treffen zu?",
  "Bei welchen der folgenden Aussagen handelt es sich um zutreffende Beschreibungen?",
];

/** Build Typ K (Aussage-Kombination): 4 Aussagen (3 richtig, 1 falsch aus plausibleFalse), 5 Kombinationsoptionen A–E. */
function buildTypKCombination(
  knowledge: BMSKnowledge,
  usedIds: Set<string>
): GeneratedTypKQuestion | null {
  const facts = knowledge.facts.filter((f) => !usedIds.has(f.id));
  const falsePool = knowledge.plausibleFalse?.filter((f) => !usedIds.has(f.id)) ?? [];
  if (facts.length < 3 || falsePool.length < 1) return null;

  const numTrue = 2 + Math.floor(Math.random() * 2);
  const numFalse = 4 - numTrue;
  const trueFacts = pickRandom(facts, numTrue);
  const falseStatements = pickRandom(falsePool, numFalse);
  const allStatements: { text: string; korrekt: boolean }[] = [];
  trueFacts.forEach((f) => allStatements.push({ text: f.text, korrekt: true }));
  falseStatements.forEach((f) => allStatements.push({ text: f.text, korrekt: false }));
  shuffle(allStatements);

  const aussagen = allStatements.map((s, i) => ({
    nr: i + 1,
    text: s.text,
    korrekt: s.korrekt,
  }));
  const correctSet = aussagen
    .map((a, i) => (a.korrekt ? i + 1 : 0))
    .filter((n) => n > 0)
    .sort((a, b) => a - b);

  const buildSubsets = (): number[][] => {
    const out: number[][] = [correctSet];
    if (!out.some((s) => s.length === 0)) out.push([]);
    if (!out.some((s) => s.length === 4)) out.push([1, 2, 3, 4]);
    for (let i = 1; i <= 4; i++) {
      if (!out.some((s) => s.length === 1 && s[0] === i)) out.push([i]);
    }
    if (
      correctSet.length >= 2 &&
      !out.some((s) => s.length === 2 && s[0] === correctSet[0] && s[1] === correctSet[1])
    ) {
      out.push([correctSet[0], correctSet[1]]);
    }
    while (out.length < 5) {
      const n = 1 + Math.floor(Math.random() * 4);
      if (!out.some((s) => s.length === 1 && s[0] === n)) out.push([n]);
    }
    return out.slice(0, 5);
  };
  const subsets = buildSubsets();
  const shuffled = shuffle([...subsets]);
  const correctIndex = shuffled.findIndex(
    (s) => s.length === correctSet.length && s.every((n, i) => n === correctSet[i])
  );
  if (correctIndex < 0) return null;

  const kombinationen = shuffled.map((nummern, i) => ({
    key: (["A", "B", "C", "D", "E"] as const)[i],
    nummern,
  }));
  const korrekteOption = kombinationen[correctIndex].key;

  const stem = TYP_K_STEMS[Math.floor(Math.random() * TYP_K_STEMS.length)];
  const explanation =
    trueFacts[0]?.explanationHint ?? `Richtig sind Aussagen ${correctSet.join(", ")}.`;

  return {
    id: `gen-${knowledge.ukId}-kombi-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceChapter: knowledge.chapterId,
    sourceUk: knowledge.ukId,
    learningObjective: knowledge.learningObjectives?.[0] ?? "Aussagen bewerten",
    text: stem,
    aussagen,
    kombinationen,
    correctOptionId: korrekteOption.toLowerCase(),
    explanation,
    difficulty: "medium",
    templateType: "kombination",
  };
}

function getTemplatesForKnowledge(knowledge: BMSKnowledge): BMSQuestionTemplate[] {
  return BMS_QUESTION_TEMPLATES.filter((t) => {
    if (t.type === "aussage_falsch") {
      return knowledge.facts.length >= 4 && (knowledge.plausibleFalse?.length ?? 0) >= 1;
    }
    const pool =
      t.requiredPool === "facts"
        ? knowledge.facts.length
        : t.requiredPool === "contrasts"
          ? knowledge.contrasts.length
          : t.requiredPool === "numbers"
            ? knowledge.numbers.length
            : t.requiredPool === "relations"
              ? knowledge.relations.length
              : t.requiredPool === "sequences"
                ? (knowledge.sequences?.length ?? 0)
                : t.requiredPool === "rechenfragen"
                  ? (knowledge.rechenfragen?.length ?? 0)
                  : knowledge.terms.length;
    return pool >= t.minPoolSize;
  });
}

function canBuildTypK(knowledge: BMSKnowledge): boolean {
  return knowledge.facts.length >= 3 && (knowledge.plausibleFalse?.length ?? 0) >= 1;
}

/**
 * Generate a single question for the given UK. Uses only defined knowledge; validates; retries on failure.
 * Returns Typ A single-choice or Typ K Aussage-Kombination when plausibleFalse is available.
 */
export function generateOneQuestion(
  ukId: string,
  usedQuestionIds?: Set<string>
): GeneratedBMSQuestion | GeneratedTypKQuestion | null {
  const knowledge = getKnowledgeByUkId(ukId);
  if (!knowledge) return null;

  const usedIds = new Set<string>(usedQuestionIds ?? []);

  if (canBuildTypK(knowledge) && Math.random() < 0.35) {
    const typK = buildTypKCombination(knowledge, usedIds);
    if (typK) return typK;
  }

  const templates = getTemplatesForKnowledge(knowledge);
  if (!templates.length) return null;

  for (let attempt = 0; attempt < MAX_GENERATION_ATTEMPTS; attempt++) {
    const template = templates[Math.floor(Math.random() * templates.length)];
    let q: GeneratedBMSQuestion | null = null;

    if (template.type === "aussage_richtig" || template.type === "definition") {
      q = buildAussageRichtig(knowledge, template, usedIds);
    } else if (template.type === "aussage_falsch") {
      q = buildAussageFalsch(knowledge, template, usedIds);
    } else if (template.type === "gegenueberstellung") {
      q = buildGegenueberstellung(knowledge, template, usedIds);
    } else if (template.type === "groessenordnung") {
      q = buildGroessenordnung(knowledge, template, usedIds);
    } else if (template.type === "struktur_funktion" || template.type === "wo_statt") {
      q = buildRelationQuestion(knowledge, template, usedIds);
    } else if (template.type === "reihenfolge") {
      q = buildReihenfolge(knowledge, template, usedIds);
    } else if (template.type === "rechenfrage") {
      q = buildRechenfrage(knowledge, template, usedIds);
    }

    if (q && validateGeneratedQuestion(q)) return q;
  }

  return null;
}

/**
 * Generate N questions for the given UKs (or one UK). Spreads across UKs; each question is validated.
 * Includes Typ A (Single-Choice) and Typ K (Aussage-Kombination) when knowledge has plausibleFalse.
 */
export function generateContentQuestions(
  ukIds: string[],
  count: number
): (GeneratedBMSQuestion | GeneratedTypKQuestion)[] {
  const result: (GeneratedBMSQuestion | GeneratedTypKQuestion)[] = [];
  const usedIds = new Set<string>();
  const ukPool = [...ukIds];
  let attempts = 0;
  const maxTotalAttempts = count * MAX_GENERATION_ATTEMPTS * 2;

  while (result.length < count && attempts < maxTotalAttempts) {
    if (ukPool.length === 0) break;
    const ukId = ukPool[Math.floor(Math.random() * ukPool.length)];
    const q = generateOneQuestion(ukId, usedIds);
    if (q) {
      result.push(q);
      usedIds.add(q.id);
    }
    attempts++;
  }

  return result;
}

function isTypKQuestion(
  g: GeneratedBMSQuestion | GeneratedTypKQuestion
): g is GeneratedTypKQuestion {
  return (
    "aussagen" in g && "kombinationen" in g && Array.isArray((g as GeneratedTypKQuestion).aussagen)
  );
}

/** Map generated question (Typ A or Typ K) to BMSFrage for use in the existing FragenTrainer UI. */
export function toBMSFrage(g: GeneratedBMSQuestion | GeneratedTypKQuestion): BMSFrage {
  const subject = g.sourceChapter.startsWith("bio")
    ? "biologie"
    : g.sourceChapter.startsWith("ch")
      ? "chemie"
      : g.sourceChapter.startsWith("ph")
        ? "physik"
        : "mathematik";
  const schwierigkeit = g.difficulty === "easy" ? 1 : g.difficulty === "medium" ? 2 : 3;

  if (isTypKQuestion(g)) {
    return {
      id: g.id,
      typ: "K",
      fach: subject,
      uk_id: g.sourceUk,
      stamm: g.text,
      aussagen: g.aussagen.map((a) => ({ nr: a.nr, text: a.text, korrekt: a.korrekt })),
      kombinationen: g.kombinationen.map((k) => ({ key: k.key, nummern: k.nummern })),
      korrekte_option: g.correctOptionId.toUpperCase(),
      erklaerung: g.explanation,
      schwierigkeit,
    };
  }

  return {
    id: g.id,
    typ: "A",
    fach: subject,
    uk_id: g.sourceUk,
    stamm: g.text,
    optionen: g.options.map((o) => ({
      key: o.id.toUpperCase() as "A" | "B" | "C" | "D" | "E",
      text: o.text,
    })),
    korrekte_option: g.correctOptionId.toUpperCase(),
    erklaerung: g.explanation,
    schwierigkeit,
  };
}
