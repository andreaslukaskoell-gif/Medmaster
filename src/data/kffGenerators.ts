// ============================================================
// KFF AUFGABENGENERATOREN
// Generiert unendlich viele Übungsaufgaben prozedural
// ============================================================

import type { ImplikationTask } from "@/data/kffImplikationen";
import {
  OFFICIAL_IMPLICATION_EXAMPLES,
  validateImplikationTask,
  hasVisualSolutionForImplikationTask,
} from "@/data/kffImplikationen";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";
import { OFFICIAL_WF_EXAMPLES } from "@/data/kffWortfluessigkeitMedAT";
import { wortfluessigkeitWords, type WortfluessigkeitWord } from "@/data/kffWortfluessigkeit";
import type { AllergyPass, GedaechtnisQuestion } from "@/data/kffGedaechtnisMedAT";

// --- ZAHLENFOLGEN-GENERATOR (Legacy: 7 Zahlen + Paar-Optionen) ---
// HINWEIS: Für MedAT-Training (KFF) wird kffZahlenfolgenMedAT.generateSequenceTask verwendet
// (OFFICIAL_ZF_EXAMPLES unantastbar; Training nur aus definierten Regelklassen + validierten Bereichen).

export interface ZahlenfolgeGenerated {
  id: string;
  sequence: number[]; // GENAU 7 Zahlen
  correctPair: [number, number]; // Die nächsten 2 Zahlen (8. und 9.)
  options: string[]; // 5 Optionen als Zahlenpaare z.B. "256, 512"
  correctOption: number; // Index 0-4
  explanation: string;
  difficulty: "leicht" | "mittel" | "schwer";
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Deterministischer Shuffle für stabile Aufgaben pro Wort-ID. */
function shuffleWithSeed<T>(arr: T[], seed: string): T[] {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  const rng = () => {
    h = (Math.imul(16807, h) + 12345) | 0;
    return (Math.abs(h) >>> 0) / (0xffffffff + 1);
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateArithmetic(): { seq: number[]; answer: [number, number]; explanation: string } {
  const start = randInt(1, 30);
  const diff = randInt(2, 12);
  const seq: number[] = [];
  for (let i = 0; i < 7; i++) seq.push(start + diff * i);
  return {
    seq,
    answer: [start + diff * 7, start + diff * 8],
    explanation: `Arithmetische Folge mit Differenz +${diff}. Jedes Element ist um ${diff} größer als das vorherige.`,
  };
}

function generateGeometric(): { seq: number[]; answer: [number, number]; explanation: string } {
  const start = randInt(1, 5);
  const ratio = randInt(2, 3);
  const seq: number[] = [];
  for (let i = 0; i < 7; i++) seq.push(start * Math.pow(ratio, i));
  return {
    seq,
    answer: [start * Math.pow(ratio, 7), start * Math.pow(ratio, 8)],
    explanation: `Geometrische Folge mit Faktor x${ratio}. Jedes Element wird mit ${ratio} multipliziert.`,
  };
}

function generateAlternating(): { seq: number[]; answer: [number, number]; explanation: string } {
  const a = randInt(2, 8);
  const b = randInt(2, 8);
  const start = randInt(1, 10);
  const seq: number[] = [start];
  for (let i = 1; i < 7; i++) {
    seq.push(seq[i - 1] + (i % 2 === 1 ? a : b));
  }
  const a8 = seq[6] + (7 % 2 === 1 ? a : b);
  const a9 = a8 + (8 % 2 === 1 ? a : b);
  return {
    seq,
    answer: [a8, a9],
    explanation: `Wechselnde Differenzen: abwechselnd +${a} und +${b}.`,
  };
}

function generateSquare(): { seq: number[]; answer: [number, number]; explanation: string } {
  const offset = randInt(0, 5);
  const seq: number[] = [];
  for (let i = 1; i <= 7; i++) seq.push(i * i + offset);
  return {
    seq,
    answer: [8 * 8 + offset, 9 * 9 + offset],
    explanation:
      offset === 0
        ? `Quadratzahlen: 1², 2², 3², ... Die nächsten Glieder sind 8² = 64 und 9² = 81.`
        : `Quadratzahlen + ${offset}: n² + ${offset}. Die nächsten Glieder sind 8² + ${offset} = ${64 + offset} und 9² + ${offset} = ${81 + offset}.`,
  };
}

function generateFibonacciLike(): { seq: number[]; answer: [number, number]; explanation: string } {
  const a = randInt(1, 5);
  const b = randInt(1, 5);
  const seq = [a, b];
  for (let i = 2; i < 7; i++) seq.push(seq[i - 1] + seq[i - 2]);
  const a8 = seq[6] + seq[5];
  const a9 = a8 + seq[6];
  return {
    seq,
    answer: [a8, a9],
    explanation: `Fibonacci-artige Folge: Jedes Element ist die Summe der beiden vorherigen. ${seq[5]} + ${seq[6]} = ${a8}, ${seq[6]} + ${a8} = ${a9}.`,
  };
}

function generateDifference(): { seq: number[]; answer: [number, number]; explanation: string } {
  const start = randInt(1, 10);
  const diffStart = randInt(1, 5);
  const diffDiff = randInt(1, 3);
  const seq: number[] = [start];
  let currentDiff = diffStart;
  for (let i = 1; i < 7; i++) {
    seq.push(seq[i - 1] + currentDiff);
    currentDiff += diffDiff;
  }
  const a8 = seq[6] + currentDiff;
  const a9 = a8 + currentDiff + diffDiff;
  return {
    seq,
    answer: [a8, a9],
    explanation: `Die Differenzen zwischen aufeinanderfolgenden Gliedern steigen um jeweils +${diffDiff}: ${diffStart}, ${diffStart + diffDiff}, ${diffStart + 2 * diffDiff}...`,
  };
}

function generatePrime(): { seq: number[]; answer: [number, number]; explanation: string } {
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const primes: number[] = [];
  let num = 2;
  while (primes.length < 12) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  const startIdx = randInt(0, 3);
  const seq = primes.slice(startIdx, startIdx + 7);
  return {
    seq,
    answer: [primes[startIdx + 7], primes[startIdx + 8]],
    explanation: `Primzahlenfolge: Jede Zahl ist nur durch 1 und sich selbst teilbar. Die nächsten Primzahlen sind ${primes[startIdx + 7]} und ${primes[startIdx + 8]}.`,
  };
}

function generateTriangular(): { seq: number[]; answer: [number, number]; explanation: string } {
  const offset = randInt(0, 3);
  const seq: number[] = [];
  for (let i = 1; i <= 7; i++) {
    seq.push((i * (i + 1)) / 2 + offset);
  }
  const a8 = (8 * 9) / 2 + offset;
  const a9 = (9 * 10) / 2 + offset;
  return {
    seq,
    answer: [a8, a9],
    explanation:
      offset === 0
        ? `Dreieckszahlen: T(n) = n·(n+1)/2. Die nächsten Glieder sind T(8) = ${a8} und T(9) = ${a9}.`
        : `Dreieckszahlen + ${offset}: T(n) = n·(n+1)/2 + ${offset}. Die nächsten Glieder sind ${a8} und ${a9}.`,
  };
}

function generatePower(): { seq: number[]; answer: [number, number]; explanation: string } {
  const base = randInt(2, 3);
  const startExp = randInt(1, 2);
  const seq: number[] = [];
  for (let i = 0; i < 7; i++) {
    seq.push(Math.pow(base, startExp + i));
  }
  return {
    seq,
    answer: [Math.pow(base, startExp + 7), Math.pow(base, startExp + 8)],
    explanation: `Potenzfolge mit Basis ${base}: ${base}^${startExp}, ${base}^${startExp + 1}, ... Die nächsten Glieder sind ${base}^${startExp + 7} = ${Math.pow(base, startExp + 7)} und ${base}^${startExp + 8} = ${Math.pow(base, startExp + 8)}.`,
  };
}

function generateNested(): { seq: number[]; answer: [number, number]; explanation: string } {
  const startA = randInt(1, 10);
  const diffA = randInt(2, 7);
  const startB = randInt(1, 10);
  const diffB = randInt(2, 7);
  const seq: number[] = [];
  let aIdx = 0;
  let bIdx = 0;
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      seq.push(startA + diffA * aIdx);
      aIdx++;
    } else {
      seq.push(startB + diffB * bIdx);
      bIdx++;
    }
  }
  // Position 7 (0-indexed) is odd → belongs to sequence B
  const a8 = startB + diffB * bIdx;
  // Position 8 is even → belongs to sequence A
  const a9 = startA + diffA * aIdx;
  return {
    seq,
    answer: [a8, a9],
    explanation: `Verschachtelte Folge: Ungerade Positionen (1., 3., 5., 7.): +${diffA}. Gerade Positionen (2., 4., 6.): +${diffB}. Die nächsten Glieder sind ${a8} und ${a9}.`,
  };
}

function generateCombined(): { seq: number[]; answer: [number, number]; explanation: string } {
  const variant = randInt(0, 1);
  const start = randInt(1, 5);
  const seq: number[] = [start];

  if (variant === 0) {
    const a = randInt(1, 6);
    const b = randInt(2, 3);
    for (let i = 1; i < 7; i++) {
      seq.push(i % 2 === 1 ? seq[i - 1] + a : seq[i - 1] * b);
    }
    const a8 = 7 % 2 === 1 ? seq[6] + a : seq[6] * b;
    const a9 = 8 % 2 === 1 ? a8 + a : a8 * b;
    return {
      seq,
      answer: [a8, a9],
      explanation: `Kombinierte Folge: Abwechselnd +${a} und ×${b}. Die nächsten Glieder sind ${a8} und ${a9}.`,
    };
  } else {
    const a = randInt(2, 3);
    const b = randInt(1, 6);
    for (let i = 1; i < 7; i++) {
      seq.push(i % 2 === 1 ? seq[i - 1] * a : seq[i - 1] + b);
    }
    const a8 = 7 % 2 === 1 ? seq[6] * a : seq[6] + b;
    const a9 = 8 % 2 === 1 ? a8 * a : a8 + b;
    return {
      seq,
      answer: [a8, a9],
      explanation: `Kombinierte Folge: Abwechselnd ×${a} und +${b}. Die nächsten Glieder sind ${a8} und ${a9}.`,
    };
  }
}

function generatePairDistractors(correct: [number, number], count: number): string[] {
  const distractors = new Set<string>();
  const correctStr = `${correct[0]}, ${correct[1]}`;
  const offsets = [
    [-2, -1],
    [1, 2],
    [-3, 0],
    [0, 3],
    [-1, 1],
    [2, -2],
    [-5, -3],
    [3, 5],
    [1, -1],
    [-2, 2],
    [correct[1] - correct[0], 0],
    [0, correct[1] - correct[0]],
  ];
  for (const [o1, o2] of shuffle(offsets)) {
    if (distractors.size >= count) break;
    const d = `${correct[0] + o1}, ${correct[1] + o2}`;
    if (d !== correctStr && correct[0] + o1 > 0 && correct[1] + o2 > 0) {
      distractors.add(d);
    }
  }
  let i = 1;
  while (distractors.size < count) {
    const d = `${correct[0] + i * 3}, ${correct[1] + i * 5}`;
    if (d !== correctStr) distractors.add(d);
    i++;
  }
  return [...distractors].slice(0, count);
}

export function generateZahlenfolge(
  difficulty: "leicht" | "mittel" | "schwer"
): ZahlenfolgeGenerated {
  let result: { seq: number[]; answer: [number, number]; explanation: string };

  if (difficulty === "leicht") {
    result = Math.random() > 0.5 ? generateArithmetic() : generateGeometric();
  } else if (difficulty === "mittel") {
    const generators = [
      generateAlternating,
      generateSquare,
      generateDifference,
      generateTriangular,
      generatePrime,
    ];
    result = generators[randInt(0, generators.length - 1)]();
  } else {
    const generators = [
      generateFibonacciLike,
      generateDifference,
      generateSquare,
      generatePower,
      generateNested,
      generateCombined,
    ];
    result = generators[randInt(0, generators.length - 1)]();
  }

  const correctStr = `${result.answer[0]}, ${result.answer[1]}`;
  const distractorStrs = generatePairDistractors(result.answer, 4);
  const allOptions = shuffle([correctStr, ...distractorStrs]);
  const correctIdx = allOptions.indexOf(correctStr);

  return {
    id: `zf-gen-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sequence: result.seq,
    correctPair: result.answer,
    options: allOptions,
    correctOption: correctIdx,
    explanation: result.explanation,
    difficulty,
  };
}

export function generateZahlenfolgenSet(
  count: number,
  difficulty: "leicht" | "mittel" | "schwer"
): ZahlenfolgeGenerated[] {
  return Array.from({ length: count }, () => generateZahlenfolge(difficulty));
}

// --- ALLERGIEAUSWEIS-GENERATOR ---

export interface AllergyCard {
  id: string;
  name: string;
  geburtsdatum: string;
  blutgruppe: string;
  allergien: string[];
  ausweisnummer: string;
  land: string;
  medikamente: boolean;
}

export interface MemoryQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  questionType: string;
}

/** MedAT-style fictional names (ALL CAPS, pronounceable, not real names). 80 names for session variety. */
const FICTIONAL_NAMES = [
  // Original 40
  "FULZAT",
  "SAMLIR",
  "TOBEHN",
  "KREVUN",
  "DASPEL",
  "MIRKAN",
  "BOLZEN",
  "HARFIN",
  "GULTEK",
  "PLIVON",
  "ZEKRAM",
  "NILWAS",
  "FORBIT",
  "WANDEK",
  "LUSPAR",
  "HELFIN",
  "TREBAS",
  "KOMVIL",
  "GASNUR",
  "BELKOT",
  "RASTIN",
  "FELMOK",
  "DUNVAR",
  "SIPKAL",
  "TAVREN",
  "MORKUL",
  "ZELPAN",
  "BIGRAT",
  "WONFET",
  "LARKIM",
  "VOSTEG",
  "NEBHUR",
  "PILZAM",
  "KERDON",
  "GUWALT",
  "DEMPAR",
  "SULBEK",
  "HINGOR",
  "FAKTEL",
  "RIVSON",
  // 40 new names for repetition resistance
  "BURTOK",
  "HAMSEL",
  "DOLVEK",
  "PANKIR",
  "ZELMON",
  "GORVAT",
  "WIKLAM",
  "SARBET",
  "JENPUR",
  "FLOKEN",
  "TULVEG",
  "MAKDOR",
  "PINWEL",
  "BRELAK",
  "KUNFAR",
  "ROTGEM",
  "VASHEL",
  "DELWON",
  "KIRPAS",
  "ZOMLET",
  "HUGRIN",
  "FELBAR",
  "TANWOK",
  "LISMER",
  "ORDVEK",
  "PULTAM",
  "GENVIR",
  "SULKAF",
  "BERDON",
  "WALTIM",
  "NORPEK",
  "HALVIR",
  "TIKWOM",
  "BASREL",
  "DOMFAR",
  "PELGON",
  "ZIRWAK",
  "MOLKEN",
  "FARSIT",
  "GELVON",
];

const ALLERGIES = [
  // Original 30
  "Penicillin",
  "Amoxicillin",
  "Aspirin",
  "Ibuprofen",
  "Latex",
  "Bienengift",
  "Wespengift",
  "Hausstaubmilben",
  "Schimmelpilze",
  "Erdnüsse",
  "Haselnüsse",
  "Walnüsse",
  "Soja",
  "Weizen",
  "Milch",
  "Eier",
  "Fisch",
  "Garnelen",
  "Sellerie",
  "Senf",
  "Sesam",
  "Pollen",
  "Tierhaare",
  "Nickel",
  "Kontrastmittel",
  "Codein",
  "Sulfonamide",
  "Tetracyclin",
  "Morphin",
  "Novocain",
  // 20 new for session variety
  "Paracetamol",
  "Diclofenac",
  "Metformin",
  "Lidocain",
  "Chlorhexidin",
  "Kiwi",
  "Mango",
  "Muscheln",
  "Lupinen",
  "Tomaten",
  "Birke",
  "Gräser",
  "Insektenstiche",
  "Pflaster",
  "Wolle",
  "Formaldehyd",
  "Kobalt",
  "Chrom",
  "Propolis",
  "Kamille",
];

const COUNTRIES = [
  "Österreich",
  "Deutschland",
  "Schweiz",
  "Italien",
  "Frankreich",
  "Spanien",
  "Portugal",
  "Niederlande",
  "Belgien",
  "Schweden",
  "Norwegen",
  "Dänemark",
  "Polen",
  "Tschechien",
  "Ungarn",
  "Griechenland",
  "Kroatien",
  "Rumänien",
  "Irland",
  "Finnland",
];

const _BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-"];

/** Für Gedächtnis Allergiepässe: MedAT-Stil A | B | AB | 0 (ohne Rhesus in Typ) */
const BLOOD_GROUPS_GM: AllergyPass["bloodGroup"][] = ["A", "B", "AB", "0"];

/** Pick a random fictional name from the pool (MedAT-style ALL CAPS). */
function generateName(): string {
  return FICTIONAL_NAMES[randInt(0, FICTIONAL_NAMES.length - 1)];
}

/** Austrian month names (Jänner, not Januar). */
const MONTH_NAMES = [
  "Jänner",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

/** MedAT-Stil: "17. Dezember" (Tag + Monatsname, KEIN Jahr). */
function generateDate(): string {
  const day = randInt(1, 28);
  const month = MONTH_NAMES[randInt(0, 11)];
  return `${day}. ${month}`;
}

/** MedAT-Stil: 5 Ziffern mit Leerzeichen ("5 6 9 5 1"). */
function generateAusweisnummer(): string {
  return randInt(10000, 99999).toString().split("").join(" ");
}

const OPTION_E_LABEL = "Keine der Antwortmöglichkeiten ist richtig.";

export function generateAllergyCards(count: number = 8): AllergyCard[] {
  const usedNames = new Set<string>();
  const cards: AllergyCard[] = [];
  // Balanced blood group + medication distribution
  const bgCycle = shuffle([...BLOOD_GROUPS_GM, ...BLOOD_GROUPS_GM, ...BLOOD_GROUPS_GM]).slice(
    0,
    count
  );
  const medHalf = Math.ceil(count / 2);
  const medCycle = shuffle([...Array(medHalf).fill(true), ...Array(count - medHalf).fill(false)]);

  for (let i = 0; i < count; i++) {
    let name = generateName();
    while (usedNames.has(name)) name = generateName();
    usedNames.add(name);

    const numAllergies = randInt(1, 3);
    const shuffledAllergies = shuffle(ALLERGIES);
    const allergien = shuffledAllergies.slice(0, numAllergies);

    cards.push({
      id: `card-${i + 1}`,
      name,
      geburtsdatum: generateDate(),
      blutgruppe: bgCycle[i],
      allergien,
      ausweisnummer: generateAusweisnummer(),
      land: COUNTRIES[randInt(0, COUNTRIES.length - 1)],
      medikamente: medCycle[i],
    });
  }

  return cards;
}

export function generateMemoryQuestions(
  cards: AllergyCard[],
  count: number = 25
): MemoryQuestion[] {
  const questions: MemoryQuestion[] = [];

  // Pre-compute allergy combo strings
  const allergyByCard = new Map(cards.map((c) => [c.id, c.allergien.join(", ")]));
  const allAllergyOptions = [...new Set(cards.map((c) => c.allergien.join(", ")))];

  const questionGenerators: Array<
    (card: AllergyCard) => { text: string; correct: string; pool: string[]; type: string } | null
  > = [
    // Name → Blutgruppe
    (card) => ({
      text: `Welche Blutgruppe hat ${card.name}?`,
      correct: card.blutgruppe,
      pool: [...BLOOD_GROUPS_GM] as string[],
      type: "name-blutgruppe",
    }),
    // Name → Allergie/n (combo)
    (card) => ({
      text: `Welche Allergie/n hat ${card.name}?`,
      correct: allergyByCard.get(card.id) ?? "",
      pool: allAllergyOptions,
      type: "name-allergie",
    }),
    // Name → Land
    (card) => ({
      text: `Aus welchem Land kommt ${card.name}?`,
      correct: card.land,
      pool: [...COUNTRIES],
      type: "name-land",
    }),
    // Name → Geburtsdatum
    (card) => ({
      text: `Wann hat ${card.name} Geburtstag?`,
      correct: card.geburtsdatum,
      pool: cards.map((c) => c.geburtsdatum),
      type: "name-geburtsdatum",
    }),
    // Name → Ausweisnummer
    (card) => ({
      text: `Wie lautet die Ausweisnummer von ${card.name}?`,
      correct: card.ausweisnummer,
      pool: cards.map((c) => c.ausweisnummer),
      type: "name-ausweisnummer",
    }),
    // Name → Medikamente — skipped (binary ja/nein doesn't fit 5-option A–E format)
    () => null,
    // Ausweisnummer → Name
    (card) => ({
      text: `Wem gehört die Ausweisnummer ${card.ausweisnummer}?`,
      correct: card.name,
      pool: cards.map((c) => c.name),
      type: "ausweisnummer-name",
    }),
    // Blutgruppe → Name (only if unique)
    (card) => {
      if (cards.filter((c) => c.blutgruppe === card.blutgruppe).length !== 1) return null;
      return {
        text: `Wer hat die Blutgruppe ${card.blutgruppe}?`,
        correct: card.name,
        pool: cards.map((c) => c.name),
        type: "blutgruppe-name",
      };
    },
  ];

  // ~15% of questions should have E as correct
  const eCount = Math.max(1, Math.round(count * 0.15));
  const eIndices = new Set<number>();
  while (eIndices.size < eCount) eIndices.add(randInt(0, count - 1));

  const usedCombinations = new Set<string>();
  let attempts = 0;

  while (questions.length < count && attempts < count * 6) {
    attempts++;
    const card = cards[randInt(0, cards.length - 1)];
    const genIdx = randInt(0, questionGenerators.length - 1);
    const combo = `${card.id}-${genIdx}`;
    if (usedCombinations.has(combo)) continue;
    usedCombinations.add(combo);

    const gen = questionGenerators[genIdx](card);
    if (!gen || !gen.correct) continue;

    const qIdx = questions.length;
    const makeECorrect = eIndices.has(qIdx);
    const wrongPool = gen.pool.filter((o) => o !== gen.correct);

    let options: string[];
    let correctAnswer: string;

    if (makeECorrect && wrongPool.length >= 4) {
      const wrong4 = shuffle(wrongPool).slice(0, 4);
      options = [...wrong4, OPTION_E_LABEL];
      correctAnswer = OPTION_E_LABEL;
    } else {
      const wrong3 = shuffle(wrongPool).slice(0, 3);
      const abcd = shuffle([gen.correct, ...wrong3]);
      options = [...abcd, OPTION_E_LABEL];
      correctAnswer = gen.correct;
    }

    questions.push({
      id: `mem-gen-${qIdx + 1}`,
      text: gen.text,
      options,
      correctAnswer,
      questionType: gen.type,
    });
  }

  return questions;
}

// --- GEDAECHTNIS ALLERGIEPAESSE (MedAT-Stil) ---

/** Ausweisnummer: 5 Ziffern mit Leerzeichen (MedAT-Stil: "5 6 9 5 1"). */
function generatePassportNumber(): string {
  return randInt(10000, 99999).toString().split("").join(" ");
}

/**
 * Pool von 80 Porträtfotos (256×256 JPEG, einheitlicher Stil).
 * Generierte Gesichter (thispersondoesnotexist.com, CC0/public-domain).
 * Gemischt (keine Geschlechter-Zuordnung nötig, da fiktive Namen).
 * Fallback: leerer String → UI zeigt Initialen-Avatar.
 */
const AVATAR_COUNT = 80;
const GM_USED_AVATARS_KEY = "medmaster_gm_used_avatars";

/** Returns `count` avatar paths that haven't been used in previous sessions.
 *  Resets automatically when all 80 are exhausted. */
function getAvatarPool(count: number): string[] {
  let used: number[] = [];
  try {
    const raw = localStorage.getItem(GM_USED_AVATARS_KEY);
    if (raw) used = JSON.parse(raw);
  } catch {
    /* ignore */
  }

  const allIndices = Array.from({ length: AVATAR_COUNT }, (_, i) => i + 1);
  let available = allIndices.filter((i) => !used.includes(i));

  // Reset if not enough unused avatars remain
  if (available.length < count) {
    used = [];
    available = allIndices;
  }

  const picked = shuffle(available).slice(0, count);

  // Persist used avatars
  try {
    localStorage.setItem(GM_USED_AVATARS_KEY, JSON.stringify([...used, ...picked]));
  } catch {
    /* ignore */
  }

  return picked.map((n) => {
    const num = String(n).padStart(2, "0");
    return `/avatars/face-${num}.jpg`;
  });
}

/** Generiert 6–10 realistische Allergiepässe für Training (niemals für offizielle Beispiele).
 * Garantiert: eindeutige Namen, Geburtstage, Ausweisnummern, Länder pro Set. */
export function generateAllergyPasses(count: number): AllergyPass[] {
  const usedNames = new Set<string>();
  const usedPassportNumbers = new Set<string>();
  const usedBirthdates = new Set<string>();
  const usedCountries = new Set<string>();
  const passes: AllergyPass[] = [];
  const avatars = getAvatarPool(count);

  // Pre-shuffle blood groups for balanced distribution (cycle through all 4)
  const bloodGroupCycle = shuffle([
    ...BLOOD_GROUPS_GM,
    ...BLOOD_GROUPS_GM,
    ...BLOOD_GROUPS_GM,
  ]).slice(0, count);
  // Pre-shuffle medications for ~50/50 balance (not pure random)
  const medHalf = Math.ceil(count / 2);
  const medCycle = shuffle([...Array(medHalf).fill(true), ...Array(count - medHalf).fill(false)]);

  for (let i = 0; i < count; i++) {
    let name = generateName();
    while (usedNames.has(name)) name = generateName();
    usedNames.add(name);

    let passportNumber = generatePassportNumber();
    while (usedPassportNumbers.has(passportNumber)) passportNumber = generatePassportNumber();
    usedPassportNumbers.add(passportNumber);

    let birthdate = generateDate();
    while (usedBirthdates.has(birthdate)) birthdate = generateDate();
    usedBirthdates.add(birthdate);

    // Eindeutiges Land pro Pass (20 Länder für max 10 Pässe reicht)
    let country = COUNTRIES[randInt(0, COUNTRIES.length - 1)];
    while (usedCountries.has(country)) country = COUNTRIES[randInt(0, COUNTRIES.length - 1)];
    usedCountries.add(country);

    const numAllergies = randInt(1, 3);
    let allergien = shuffle([...ALLERGIES])
      .slice(0, numAllergies)
      .sort();
    // Ensure no two passes share the exact same allergy set
    let allergyKey = allergien.join(",");
    const usedAllergySets = new Set(passes.map((p) => p.allergies.join(",")));
    let retries = 0;
    while (usedAllergySets.has(allergyKey) && retries < 50) {
      allergien = shuffle([...ALLERGIES])
        .slice(0, numAllergies)
        .sort();
      allergyKey = allergien.join(",");
      retries++;
    }

    passes.push({
      id: `gm-pass-${i + 1}-${Date.now()}`,
      name,
      birthdate,
      bloodGroup: bloodGroupCycle[i],
      medications: medCycle[i],
      allergies: allergien,
      passportNumber,
      country,
      photo: avatars[i] ?? "",
    });
  }

  return passes;
}

/** Helper: for cross-reference questions, check if attribute is unique among passes. */
function isUniqueAmongPasses<T>(
  passes: AllergyPass[],
  target: AllergyPass,
  getter: (p: AllergyPass) => T
): boolean {
  return passes.filter((p) => getter(p) === getter(target)).length === 1;
}

/** Build allergy combo string like "Tomaten, Hunde" for options (MedAT-Stil). */
function allergyComboString(allergies: string[]): string {
  return allergies.join(", ");
}

/** Erzeugt 25 Fragen zu den gegebenen Pässen; A–D + E (MedAT-Stil).
 * 20 Builder-Typen (vs. 12 vorher) für maximale Session-Varianz. */
export function generateGedaechtnisQuestionsFromPasses(
  passes: AllergyPass[],
  count: number = 25
): GedaechtnisQuestion[] {
  const questions: GedaechtnisQuestion[] = [];
  const usedCombos = new Set<string>();

  // Pre-compute allergy combo strings per pass
  const allergyByPass = new Map(passes.map((p) => [p.id, allergyComboString(p.allergies)]));
  const allAllergyOptions = [...new Set(passes.map((p) => allergyComboString(p.allergies)))];

  type BuilderResult = {
    question: string;
    correct: string;
    pool: string[];
    photoUrl?: string;
  };

  // Builder difficulty mapping:
  // 1 = direct (Name → Attribut), 2 = reverse (Attribut → Name), 3 = cross-ref / photo
  const builderDifficulty: Record<number, 1 | 2 | 3> = {
    0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1,     // direct lookups
    6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2,    // reverse lookups
    12: 3, 13: 3, 14: 3, 15: 3, 16: 3, 17: 3, 18: 3, 19: 3, // cross-ref + photo
  };

  const builders: Array<(p: AllergyPass) => BuilderResult | null> = [
    // ── Direct lookups (Name → Attribut) ──
    // 0: Name → Geburtstag
    (p) => ({
      question: `Wann hat ${p.name} Geburtstag?`,
      correct: p.birthdate,
      pool: passes.map((x) => x.birthdate),
    }),
    // 1: Name → Blutgruppe
    (p) => ({
      question: `Welche Blutgruppe hat ${p.name}?`,
      correct: p.bloodGroup,
      pool: [...BLOOD_GROUPS_GM] as string[],
    }),
    // 2: Name → Ausweisnummer
    (p) => ({
      question: `Welche Ausweisnummer gehört zu ${p.name}?`,
      correct: p.passportNumber,
      pool: passes.map((x) => x.passportNumber),
    }),
    // 3: Name → Land
    (p) => ({
      question: `Aus welchem Land stammt ${p.name}?`,
      correct: p.country,
      pool: passes.map((x) => x.country),
    }),
    // 4: Name → Allergien
    (p) => ({
      question: `Welche Allergie/n hat ${p.name}?`,
      correct: allergyByPass.get(p.id) ?? "",
      pool: allAllergyOptions,
    }),
    // 5: Name → Medikamente — skipped at runtime (wrongPool < 3 for binary Ja/Nein)
    () => null,

    // ── Reverse lookups (Attribut → Name) ──
    // 6: Ausweisnummer → Name
    (p) => ({
      question: `Wem gehört die Ausweisnummer ${p.passportNumber}?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
    }),
    // 7: Allergie → Name (only if unique)
    (p) => {
      const allergy = p.allergies[0];
      if (!allergy) return null;
      if (passes.filter((x) => x.allergies.includes(allergy)).length !== 1) return null;
      return {
        question: `Wer ist allergisch gegen ${allergy}?`,
        correct: p.name,
        pool: passes.map((x) => x.name),
      };
    },
    // 8: Country → Name (only if unique — guaranteed by generator)
    (p) => ({
      question: `Wer kommt aus ${p.country}?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
    }),
    // 9: Geburtstag → Name
    (p) => ({
      question: `Wer hat am ${p.birthdate} Geburtstag?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
    }),
    // 10: Blutgruppe → Allergie (only if blood group is unique)
    (p) => {
      if (!isUniqueAmongPasses(passes, p, (x) => x.bloodGroup)) return null;
      return {
        question: `Welche Allergie/n hat die Person mit der Blutgruppe ${p.bloodGroup}?`,
        correct: allergyByPass.get(p.id) ?? "",
        pool: allAllergyOptions,
      };
    },
    // 11: Blutgruppe → Name (only if unique)
    (p) => {
      if (!isUniqueAmongPasses(passes, p, (x) => x.bloodGroup)) return null;
      return {
        question: `Wer hat die Blutgruppe ${p.bloodGroup}?`,
        correct: p.name,
        pool: passes.map((x) => x.name),
      };
    },

    // ── Cross-reference questions ──
    // 12: Land → Blutgruppe
    (p) => ({
      question: `Welche Blutgruppe hat die Person aus ${p.country}?`,
      correct: p.bloodGroup,
      pool: [...BLOOD_GROUPS_GM] as string[],
    }),
    // 13: Land → Medikamente — skipped (binary Ja/Nein doesn't fit 5-option A–E format)
    () => null,
    // 14: Land → Allergien
    (p) => ({
      question: `Welche Allergie/n hat die Person aus ${p.country}?`,
      correct: allergyByPass.get(p.id) ?? "",
      pool: allAllergyOptions,
    }),

    // ── Photo-based questions ──
    // 15: Photo → Name
    (p) => ({
      question: `Wie heißt diese Person?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
      photoUrl: p.photo,
    }),
    // 16: Photo → Blutgruppe
    (p) => ({
      question: `Welche Blutgruppe hat diese Person?`,
      correct: p.bloodGroup,
      pool: [...BLOOD_GROUPS_GM] as string[],
      photoUrl: p.photo,
    }),
    // 17: Photo → Geburtstag
    (p) => ({
      question: `Wann hat diese Person Geburtstag?`,
      correct: p.birthdate,
      pool: passes.map((x) => x.birthdate),
      photoUrl: p.photo,
    }),
    // 18: Photo → Allergien
    (p) => ({
      question: `Welche Allergie/n hat diese Person?`,
      correct: allergyByPass.get(p.id) ?? "",
      pool: allAllergyOptions,
      photoUrl: p.photo,
    }),
    // 19: Photo → Land
    (p) => ({
      question: `Aus welchem Land stammt diese Person?`,
      correct: p.country,
      pool: passes.map((x) => x.country),
      photoUrl: p.photo,
    }),
  ];

  // Decide which questions get E as correct (~15% of count)
  const eCount = Math.max(1, Math.round(count * 0.15));
  const eIndices = new Set<number>();
  while (eIndices.size < eCount) eIndices.add(randInt(0, count - 1));

  // Track builder type usage to ensure variety across question types
  const builderUsage = new Map<number, number>();

  // Difficulty distribution targets: ~40% easy, ~40% medium, ~20% hard
  const diffTargets = { 1: Math.round(count * 0.4), 2: Math.round(count * 0.4), 3: Math.max(1, count - Math.round(count * 0.4) - Math.round(count * 0.4)) };
  const diffCounts = { 1: 0, 2: 0, 3: 0 };

  let attempts = 0;
  const maxAttempts = count * 10; // More attempts for 20 builders

  while (questions.length < count && attempts < maxAttempts) {
    attempts++;
    const p = passes[randInt(0, passes.length - 1)];
    const builderIdx = randInt(0, builders.length - 1);
    const diff = builderDifficulty[builderIdx] ?? 1;

    // Soft cap on difficulty distribution (allow overflow only in last 25% of attempts)
    if (diffCounts[diff] >= diffTargets[diff] && attempts < maxAttempts * 0.75) continue;

    // Soft cap: avoid overusing any single builder type (max 3 per type)
    if ((builderUsage.get(builderIdx) ?? 0) >= 3 && attempts < maxAttempts - count) continue;

    const key = `${p.id}-${builderIdx}`;
    if (usedCombos.has(key)) continue;
    usedCombos.add(key);

    const rawB = builders[builderIdx](p);
    if (!rawB || !rawB.correct) continue;
    const b = { ...rawB, difficulty: builderDifficulty[builderIdx] ?? (1 as const) };

    const qIdx = questions.length;
    const makeECorrect = eIndices.has(qIdx);
    // Deduplizierter Wrong-Pool (keine Duplikate in Optionen)
    const wrongPool = [...new Set(b.pool.filter((x) => x !== b.correct))];
    if (wrongPool.length < 3) continue; // Nicht genug Distraktoren

    let options: string[];
    let correctIndex: number;

    if (makeECorrect && wrongPool.length >= 4) {
      const wrong4 = shuffle(wrongPool).slice(0, 4);
      options = [...wrong4, OPTION_E_LABEL];
      correctIndex = 4;
    } else {
      const wrong3 = shuffle(wrongPool).slice(0, 3);
      const abcd = shuffle([b.correct, ...wrong3]);
      options = [...abcd, OPTION_E_LABEL];
      correctIndex = options.indexOf(b.correct);
      if (correctIndex < 0 || correctIndex > 3) continue;
    }

    questions.push({
      id: `gm-q-${qIdx + 1}-${Date.now()}`,
      question: b.question,
      options,
      correctIndex,
      difficulty: b.difficulty,
      ...(b.photoUrl ? { photoUrl: b.photoUrl } : {}),
    });
    builderUsage.set(builderIdx, (builderUsage.get(builderIdx) ?? 0) + 1);
    diffCounts[b.difficulty]++;
  }

  return questions;
}

// --- WORTFLÜSSIGKEIT: Erklärungstext ---

/** Common German word endings for explanation hints. */
const WF_ENDINGS: [string, string][] = [
  ["UNG", "-UNG"],
  ["HEIT", "-HEIT"],
  ["KEIT", "-KEIT"],
  ["TION", "-TION"],
  ["SCHAFT", "-SCHAFT"],
  ["NIS", "-NIS"],
  ["TUR", "-TUR"],
  ["MENT", "-MENT"],
  ["LING", "-LING"],
];

const WF_PREFIXES: [string, string][] = [
  ["VER", "VER-"],
  ["BE", "BE-"],
  ["GE", "GE-"],
  ["ENT", "ENT-"],
  ["ZER", "ZER-"],
  ["ER", "ER-"],
  ["AUF", "AUF-"],
  ["AUS", "AUS-"],
  ["EIN", "EIN-"],
  ["AN", "AN-"],
  ["AB", "AB-"],
];

/** Builds a strategy-teaching explanation for a WF task. */
function buildWfExplanation(word: string, correctFirst: string, isNoneCorrect: boolean): string {
  const upper = word.toUpperCase();
  // Find recognizable ending
  let endingHint = "";
  for (const [suffix, label] of WF_ENDINGS) {
    if (upper.endsWith(suffix)) {
      endingHint = `Erkennbar an der Endung ${label}. `;
      break;
    }
  }
  // Find recognizable prefix
  let prefixHint = "";
  if (!endingHint) {
    for (const [prefix, label] of WF_PREFIXES) {
      if (upper.startsWith(prefix) && upper.length > prefix.length + 2) {
        prefixHint = `Erkennbar an der Vorsilbe ${label}. `;
        break;
      }
    }
  }
  const hint = endingHint || prefixHint;

  if (isNoneCorrect) {
    return `${hint}Das Lösungswort lautet „${word}" (Anfangsbuchstabe „${correctFirst}"), der nicht unter A–D angeboten wird. Daher ist E richtig.`;
  }
  if (hint) {
    return `${hint}Die Buchstaben ergeben das Wort „${word}" (Anfangsbuchstabe „${correctFirst}").`;
  }
  return `Die Buchstaben ergeben das Wort „${word}" (Anfangsbuchstabe „${correctFirst}").`;
}

// --- WORTFLÜSSIGKEIT-GENERATOR ---

export interface WortflüssigkeitQuestion {
  id: string;
  scrambled: string;
  correctWord: string;
  options: string[]; // 5 possible first letters (1 correct + 4 wrong)
  difficulty: "leicht" | "mittel" | "schwer";
}

const WORD_POOL_LEICHT = [
  // Originale 50 Wörter
  "HAUSTIER",
  "GESCHENK",
  "BRUNNEN",
  "PFLASTER",
  "BLUMENSTRAUSS",
  "HANDTUCH",
  "SCHAUKEL",
  "FENSTER",
  "GARTEN",
  "KUCHEN",
  "LAMPE",
  "TELLER",
  "ZIMMER",
  "DECKEL",
  "BEUTEL",
  "KORKEN",
  "GRANIT",
  "HERBST",
  "WINTER",
  "SOMMER",
  "STUHL",
  "REGEN",
  "WASSER",
  "FEUER",
  "STEIN",
  "BAUM",
  "WALD",
  "BERG",
  "SAND",
  "MEER",
  "STERN",
  "LICHT",
  "KRAFT",
  "TRAUM",
  "DIENST",
  "BRIEF",
  "FRUCHT",
  "GLOCKE",
  "KISSEN",
  "MANTEL",
  "PLATZ",
  "STROM",
  "TURM",
  "WURZEL",
  "BLATT",
  "FEDER",
  "GRUND",
  "INSEL",
  "KUGEL",
  "NEBEL",
  // Neue Wörter (120 zusätzliche, 4-7 Buchstaben)
  "BLUME",
  "TORTE",
  "SCHUH",
  "TISCH",
  "PFERD",
  "VOGEL",
  "KIRCHE",
  "HUND",
  "KATZE",
  "MAUS",
  "FISCH",
  "BROT",
  "MILCH",
  "BIRNE",
  "APFEL",
  "PILZ",
  "ROSE",
  "TULPE",
  "LILIE",
  "KERZE",
  "DORF",
  "STADT",
  "FLUSS",
  "TEICH",
  "WIESE",
  "HECKE",
  "ZAUN",
  "MAUER",
  "DACH",
  "WAND",
  "BODEN",
  "SEIL",
  "KETTE",
  "RING",
  "NAGEL",
  "DRAHT",
  "KNOPF",
  "NADEL",
  "GABEL",
  "MESSER",
  "SCHALE",
  "KANNE",
  "KORB",
  "EIMER",
  "TONNE",
  "DOSE",
  "GLAS",
  "TOPF",
  "OFEN",
  "HERD",
  "BANK",
  "REGAL",
  "SOFA",
  "BETT",
  "KISTE",
  "BILD",
  "RAHMEN",
  "STIFT",
  "KREIDE",
  "FARBE",
  "PINSEL",
  "SCHERE",
  "PAPIER",
  "BLOCK",
  "HEFT",
  "BUCH",
  "SEITE",
  "MARKE",
  "PERLE",
  "HARFE",
  "GEIGE",
  "ORGEL",
  "KLEID",
  "HEMD",
  "ROCK",
  "JACKE",
  "HOSE",
  "HELM",
  "KAPPE",
  "SCHAL",
  "SOCKE",
  "ANKER",
  "FLAGGE",
  "HAFEN",
  "DAMM",
  "DEICH",
  "BACH",
  "WELLE",
  "WOLKE",
  "BLITZ",
  "DONNER",
  "STURM",
  "FROST",
  "SCHNEE",
  "HAGEL",
  "DUNST",
  "ERNTE",
  "SAAT",
  "KORN",
  "WEIZEN",
  "ROGGEN",
  "GERSTE",
  "MALZ",
  "HONIG",
  "ZUCKER",
  "SALZ",
  "PFEFFER",
  "ESSIG",
  "SAHNE",
  "BUTTER",
  "TEIG",
  "SUPPE",
  "BRATEN",
  "SOSSE",
  "SENF",
  "WURST",
  "SPECK",
  "TINTE",
];

const WORD_POOL_MITTEL = [
  // Medizinische/wissenschaftliche Wörter (6-8 Buchstaben)
  "DIAGNOSE",
  "THERAPIE",
  "SYNDROM",
  "PROGNOSE",
  "SYMPTOM",
  "ENZYM",
  "HORMON",
  "ANTIGEN",
  "ERREGER",
  "GEWEBE",
  "MUSKEL",
  "GELENK",
  "KNORPEL",
  "SEHNE",
  "ARTERIE",
  "KAPSEL",
  "REFLEX",
  "STIMULUS",
  "PARASIT",
  "VITAMIN",
  // Originale 52 Wörter
  "HANDWERK",
  "BRUNSTZEIT",
  "ERDBEERE",
  "SCHMETTERLING",
  "BERGSTEIGER",
  "ZEITGEIST",
  "STRASSENBAHN",
  "WANDERSCHUH",
  "BLUMENVASE",
  "REGENSCHIRM",
  "SCHNEEFLOCKE",
  "FAHRSCHEIN",
  "BRIEFMARKE",
  "DACHBODEN",
  "KIRCHTURM",
  "SCHULRANZEN",
  "HALSKETTE",
  "LANDKARTE",
  "TRINKGLAS",
  "MAHLZEIT",
  "NACHRICHTEN",
  "SPIELPLATZ",
  "WERKSTATT",
  "FREIHEIT",
  "GLEICHGEWICHT",
  "BAUERNHOF",
  "PFLANZENWELT",
  "NATURSCHUTZ",
  "HANDSCHRIFT",
  "LEBENSRAUM",
  "STEINGARTEN",
  "WALDMEISTER",
  "FREUNDSCHAFT",
  "MEISTERWERK",
  "BLICKFANG",
  "STERNWARTE",
  "BERGWERK",
  "SCHEINWERFER",
  "KUNSTWERK",
  "FINGERSPITZE",
  "TAGESBLATT",
  "NACHTFALTER",
  "SANDSTRAND",
  "KREISLAUF",
  "STEINBRUCH",
  "GARTENLAUBE",
  "FELSWAND",
  "KRONLEUCHTER",
  "BRUNNENWASSER",
  "STURMFLUT",
  // Neue Wörter (118 zusätzliche, 8-12 Buchstaben)
  "APOTHEKE",
  "WASSERFALL",
  "AUTOBAHN",
  "FAHRKARTE",
  "RATHAUS",
  "FLUGHAFEN",
  "MARKTPLATZ",
  "TURNHALLE",
  "SCHWIMMBAD",
  "KRANKENHAUS",
  "GRUNDSCHULE",
  "HOCHSCHULE",
  "BUCHHANDEL",
  "SPIELKARTE",
  "BACKOFEN",
  "KAFFEEKANNE",
  "TAGESZEIT",
  "NACHTRUHE",
  "WANDUHR",
  "ARMBANDUHR",
  "ZEITSCHRIFT",
  "BILDSCHIRM",
  "TASTATUR",
  "LAUTSPRECHER",
  "FERNSEHER",
  "STAUBSAUGER",
  "WASCHBECKEN",
  "BADEWANNE",
  "HANDTASCHE",
  "RUCKSACK",
  "GELDBEUTEL",
  "FENSTERBRETT",
  "DACHRINNE",
  "SCHORNSTEIN",
  "KACHELOFEN",
  "TREPPENHAUS",
  "HAUSFLUR",
  "GARDEROBE",
  "SCHUHBANK",
  "STRICKZEUG",
  "KOCHBUCH",
  "BACKBLECH",
  "SUPPENTOPF",
  "BROTKRUSTE",
  "MILCHKANNE",
  "ZUCKERDOSE",
  "PFEFFERSTREUER",
  "OBSTKORB",
  "BLUMENTOPF",
  "GIESSKANNE",
  "GARTENZAUN",
  "VOGELHAUS",
  "FUTTERSTELLE",
  "STALLMIST",
  "HEUBALLEN",
  "ERNTEZEIT",
  "KORNFELD",
  "ACKERLAND",
  "WALDRAND",
  "LICHTUNG",
  "BAUMSTAMM",
  "BAUMKRONE",
  "WURZELWERK",
  "LAUBWALD",
  "NADELBAUM",
  "TANNENWALD",
  "BIRKENHOLZ",
  "KIEFERNHARZ",
  "WILDBLUME",
  "SONNENBLUME",
  "MOHNBLUME",
  "KORNBLUME",
  "HEILPFLANZE",
  "BRENNNESSEL",
  "KLETTERPFLANZE",
  "MOOSFLECHTE",
  "EFEURANKE",
  "SEEROSE",
  "SCHILFGRAS",
  "FLUSSBETT",
  "BACHFORELLE",
  "BERGZIEGE",
  "STEINBOCK",
  "WILDKATZE",
  "WALDKAUZ",
  "SPECHTNEST",
  "FUCHSBAU",
  "DACHSBAU",
  "HASENBAU",
  "BIENENSTOCK",
  "AMEISENHAUFEN",
  "SCHNECKENHAUS",
  "SPINNENETZ",
  "SCHWALBE",
  "LERCHENNEST",
  "STORCHENNEST",
  "FISCHREIHER",
  "EISVOGEL",
  "GOLDFISCH",
  "FORELLENZUCHT",
  "KARPFENTEICH",
  "DAMPFSCHIFF",
  "WINDRAD",
  "KUPFERDRAHT",
  "SANDSTEIN",
  "BACKSTEIN",
  "STRANDKORB",
  "LEUCHTTURM",
  "BREITMAUL",
  "DORFPLATZ",
  "FELDSTEIN",
  "STEINMETZ",
  "KIRCHPLATZ",
  "HOFEINFAHRT",
  "BROTMESSER",
  "STEINWAND",
  "DORFSCHULE",
  "DACHSTUHL",
];

const WORD_POOL_SCHWER = [
  // Medizinische/wissenschaftliche Wörter (8-12+ Buchstaben)
  "KARDIOLOGIE",
  "NEUROLOGIE",
  "DERMATOLOGIE",
  "PNEUMOLOGIE",
  "RHEUMATOLOGIE",
  "ENDOKRINOLOGIE",
  "PATHOLOGIE",
  "ONKOLOGIE",
  "RADIOLOGIE",
  "NEPHROLOGIE",
  "IMMUNOLOGIE",
  "PHARMAKOLOGIE",
  "EPIDEMIOLOGIE",
  "MIKROBIOLOGIE",
  "HISTOLOGIE",
  // Originale 42 Wörter
  "BLITZABLEITER",
  "KRANKENSCHWESTER",
  "VERSICHERUNG",
  "HANDELSPARTNER",
  "STRASSENKREUZUNG",
  "SCHNEELANDSCHAFT",
  "VERKEHRSMINISTER",
  "FEUERWEHRMANN",
  "BUNDESKANZLER",
  "KRISTALLGITTER",
  "SCHWERPUNKT",
  "ZUSAMMENFASSUNG",
  "WETTBEWERB",
  "WELTMEISTERSCHAFT",
  "PFLICHTBEWUSSTSEIN",
  "DURCHSCHNITT",
  "SCHUTZIMPFUNG",
  "NACHBARSCHAFT",
  "TRINKWASSER",
  "LICHTGESCHWINDIGKEIT",
  "SELBSTBEWUSSTSEIN",
  "HANDLUNGSFADEN",
  "VERANTWORTUNG",
  "GESUNDHEITSWESEN",
  "AUFGABENSTELLUNG",
  "FRIEDENSVERTRAG",
  "REGENWALDGEBIET",
  "WINTERSONNENWENDE",
  "BERUFSERFAHRUNG",
  "SCHWIERIGKEITSGRAD",
  "FORTPFLANZUNG",
  "GEBIRGSLANDSCHAFT",
  "WERKZEUGKASTEN",
  "NACHMITTAGSKAFFEE",
  "SCHNEESCHMELZE",
  "FERNBEDIENUNG",
  "SCHREIBTISCHLAMPE",
  // Neue Wörter (128 zusätzliche, 13+ Buchstaben)
  "WISSENSCHAFTLER",
  "KRANKENVERSICHERUNG",
  "REGIERUNGSSPRECHER",
  "BUNDESSTRASSE",
  "GESCHWINDIGKEITSBEGRENZUNG",
  "STRASSENSPERRUNG",
  "VERKEHRSZEICHEN",
  "EINBAHNSTRASSE",
  "KREISVERKEHR",
  "AUTOBAHNAUFFAHRT",
  "PARKPLATZSUCHE",
  "FAHRERLAUBNIS",
  "VERKEHRSKONTROLLE",
  "HANDELSREGISTER",
  "BUCHHALTUNG",
  "JAHRESABSCHLUSS",
  "GEWINNBETEILIGUNG",
  "ARBEITGEBER",
  "ARBEITNEHMER",
  "BETRIEBSVERSAMMLUNG",
  "GEWERKSCHAFTSBUND",
  "TARIFVERHANDLUNG",
  "ARBEITSVERTRAG",
  "MINDESTLOHN",
  "SOZIALVERSICHERUNG",
  "RENTENVERSICHERUNG",
  "PFLEGEVERSICHERUNG",
  "UNFALLVERSICHERUNG",
  "ARBEITSLOSENVERSICHERUNG",
  "KINDERGELDANTRAG",
  "ELTERNZEITGESETZ",
  "MUTTERSCHUTZGESETZ",
  "FAMILIENBERATUNG",
  "JUGENDSCHUTZGESETZ",
  "VOLKSHOCHSCHULE",
  "ERWACHSENENBILDUNG",
  "BERUFSAUSBILDUNG",
  "STUDIENABSCHLUSS",
  "HOCHSCHULABSCHLUSS",
  "FORSCHUNGSARBEIT",
  "NATURWISSENSCHAFT",
  "GEISTESWISSENSCHAFT",
  "SPRACHWISSENSCHAFT",
  "WIRTSCHAFTSLEHRE",
  "INGENIEURWESEN",
  "INFORMATIONSTECHNIK",
  "DATENVERARBEITUNG",
  "PROGRAMMIERSPRACHE",
  "BETRIEBSSYSTEM",
  "DATENSCHUTZGESETZ",
  "URHEBERRECHT",
  "PATENTANMELDUNG",
  "MARKENREGISTRIERUNG",
  "GERICHTSVERHANDLUNG",
  "RECHTSANWALT",
  "STAATSANWALTSCHAFT",
  "BUNDESVERFASSUNGSGERICHT",
  "VERWALTUNGSRECHT",
  "STRAFVERFOLGUNG",
  "ERMITTLUNGSVERFAHREN",
  "BEWEISAUFNAHME",
  "ZEUGENAUSSAGE",
  "GUTACHTERSTELLE",
  "BESCHWERDEVERFAHREN",
  "WIDERSPRUCHSBESCHEID",
  "BERUFUNGSVERFAHREN",
  "VOLLSTRECKUNGSBESCHEID",
  "KRANKENHAUSAUFENTHALT",
  "NOTAUFNAHME",
  "INTENSIVSTATION",
  "OPERATIONSSAAL",
  "REHABILITATIONSZENTRUM",
  "PHYSIOTHERAPEUT",
  "KRANKENPFLEGER",
  "GESUNDHEITSMINISTER",
  "ARZNEIMITTELGESETZ",
  "MEDIKAMENTENPLAN",
  "NEBENWIRKUNGEN",
  "WECHSELWIRKUNG",
  "BLUTDRUCKMESSUNG",
  "LABORUNTERSUCHUNG",
  "COMPUTERTOMOGRAPHIE",
  "MAGNETRESONANZTOMOGRAPHIE",
  "HERZSCHRITTMACHER",
  "ORGANTRANSPLANTATION",
  "KNOCHENBRUCHBEHANDLUNG",
  "STOFFWECHSELKRANKHEIT",
  "HAUSSTAUBMILBENALLERGIE",
  "POLLENFLUGVORHERSAGE",
  "WETTERVORHERSAGE",
  "TEMPERATURMESSUNG",
  "LUFTFEUCHTIGKEIT",
  "NIEDERSCHLAGSMENGE",
  "WINDGESCHWINDIGKEIT",
  "GEWITTERWARNUNG",
  "HOCHWASSERSCHUTZ",
  "ERDBEBENMESSUNG",
  "VULKANAUSBRUCH",
  "UMWELTVERSCHMUTZUNG",
  "NATURSCHUTZGEBIET",
  "TRINKWASSERAUFBEREITUNG",
  "RECYCLINGVERFAHREN",
  "ENERGIEVERSORGUNG",
  "STROMVERBRAUCH",
  "SONNENKRAFTWERK",
  "WINDKRAFTANLAGE",
  "WASSERKRAFTWERK",
  "KERNKRAFTWERK",
  "KOHLEKRAFTWERK",
  "ENERGIESPEICHERTECHNIK",
  "FORSCHUNGSZENTRUM",
  "ENTWICKLUNGSABTEILUNG",
  "LIEFERKETTENPROBLEM",
  "LAGERVERWALTUNG",
  "KUNDENZUFRIEDENHEIT",
  "MARKTFORSCHUNG",
  "WERBUNGSKOSTEN",
  "VERSICHERUNGSBERICHT",
  "DAMPFMASCHINE",
  "WERKSTATTLEITER",
  "FEUERWEHRWAGEN",
  "KIRCHTURMSPITZE",
  "FORSCHUNGSLABOR",
  "SPRECHSTUNDENHILFE",
  "LANDWIRTSCHAFTSBETRIEB",
  "SPORTVERANSTALTUNG",
  "STEINBRUCHARBEITER",
  "HANDWERKSBETRIEB",
  "BERGLANDSCHAFT",
  "HAFENARBEITER",
  "FORSTWIRTSCHAFT",
  "WANDERSCHAFT",
  "HANDELSRECHT",
  "BUCHDRUCKVERFAHREN",
  "ZENTRALHEIZUNGSTECHNIK",
  "SPRACHVERARBEITUNG",
  "BILDVERARBEITUNG",
  "NACHRICHTENDIENST",
  "SCHREINERMEISTERBETRIEB",
  "SCHRIFTSTELLERVERBAND",
  "STEINMETZBETRIEB",
];

function scrambleWord(word: string): string {
  const chars = word.split("");
  // Keep first letter position available but scramble everything
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  // Make sure it's different from original
  if (chars.join("") === word) {
    [chars[0], chars[1]] = [chars[1], chars[0]];
  }
  return chars.join("");
}

const _ALL_LETTERS = "ABCDEFGHIJKLMNOPRSTUVWZ".split("");

/** Maps each letter to visually/phonetically similar letters for harder distractors. */
const CONFUSING_LETTERS: Record<string, string[]> = {
  A: ["E", "O", "U", "H"],
  B: ["D", "P", "R", "G"],
  C: ["K", "G", "S", "Z"],
  D: ["B", "P", "T", "G"],
  E: ["A", "I", "O", "U"],
  F: ["P", "V", "T", "H"],
  G: ["C", "K", "D", "B"],
  H: ["N", "M", "K", "A"],
  I: ["E", "L", "J", "T"],
  J: ["I", "G", "L", "T"],
  K: ["C", "G", "Q", "X"],
  L: ["I", "T", "J", "E"],
  M: ["N", "H", "W", "R"],
  N: ["M", "H", "R", "W"],
  O: ["U", "A", "E", "Q"],
  P: ["B", "D", "F", "T"],
  R: ["B", "P", "N", "K"],
  S: ["Z", "C", "X", "F"],
  T: ["D", "L", "F", "P"],
  U: ["O", "A", "V", "W"],
  V: ["W", "U", "F", "B"],
  W: ["V", "M", "N", "U"],
  Z: ["S", "C", "X", "T"],
};

/**
 * Selects distractor letters for WF options.
 * Official IB WF 26: ALL option letters (A-D) must come from the word's letter set.
 * No external letters allowed — students must not be able to eliminate options
 * by checking if a letter appears in the given set.
 * Priority: 1. confusing word letters, 2. other word letters.
 * If not enough word-internal letters exist, returns fewer distractors (caller should retry with a different word).
 */
function pickSmartDistractors(
  correctFirst: string,
  wordLetterSet: Set<string>,
  count: number
): string[] {
  const confusing = CONFUSING_LETTERS[correctFirst] ?? [];
  // Priority 1: letters in the word that are visually/phonetically confusing with the correct answer
  const internalConfusing = shuffle(
    confusing.filter((l) => wordLetterSet.has(l) && l !== correctFirst)
  );
  // Priority 2: other letters in the word (non-confusing)
  const otherWordLetters = shuffle(
    [...wordLetterSet].filter((l) => l !== correctFirst && !confusing.includes(l))
  );

  // Only word-internal letters — no external fallback
  const pool = [...internalConfusing, ...otherWordLetters];

  const result: string[] = [];
  const used = new Set<string>([correctFirst]);
  for (const l of pool) {
    if (result.length >= count) break;
    if (used.has(l)) continue;
    used.add(l);
    result.push(l);
  }
  return result;
}

export function generateWortflüssigkeit(
  difficulty: "leicht" | "mittel" | "schwer"
): WortflüssigkeitQuestion {
  const pool =
    difficulty === "leicht"
      ? WORD_POOL_LEICHT
      : difficulty === "mittel"
        ? WORD_POOL_MITTEL
        : WORD_POOL_SCHWER;

  // MedAT-Stil: Optionen A–D sind Buchstaben aus dem Wort, E = "-" (Keine der Antworten ist richtig)
  for (let attempt = 0; attempt < 50; attempt++) {
    const word = pool[randInt(0, pool.length - 1)];
    const correctFirst = word[0];
    const lettersInWord = [...new Set(word.split(""))];

    // Need at least 5 distinct letters (1 correct + 4 wrong from word)
    if (lettersInWord.length < 5) continue;

    const scrambled = scrambleWord(word);
    const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
    const wrongLetters = shuffle(wrongPool).slice(0, 4);

    // ~15% chance Option E is correct (correct letter not among A–D)
    const useNone = Math.random() < 0.15;

    let options: string[];
    if (useNone) {
      options = [...shuffle(wrongLetters), "-"];
    } else {
      options = [...shuffle([correctFirst, ...wrongLetters.slice(0, 3)]), "-"];
    }

    return {
      id: `wf-gen-${word}`,
      scrambled,
      correctWord: word,
      options,
      difficulty,
    };
  }

  // Fallback: pick any word, no E
  const word = pool[0];
  const scrambled = scrambleWord(word);
  const lettersInWord = [...new Set(word.split(""))];
  const correctFirst = word[0];
  const wrong = shuffle(lettersInWord.filter((l) => l !== correctFirst)).slice(0, 3);
  return {
    id: `wf-gen-fb-${word}`,
    scrambled,
    correctWord: word,
    options: [...shuffle([correctFirst, ...wrong]), "-"],
    difficulty,
  };
}

export function generateWortflüssigkeitSet(
  count: number,
  difficulty: "leicht" | "mittel" | "schwer"
): WortflüssigkeitQuestion[] {
  const usedWords = new Set<string>();
  const questions: WortflüssigkeitQuestion[] = [];

  while (questions.length < count) {
    const q = generateWortflüssigkeit(difficulty);
    if (!usedWords.has(q.correctWord)) {
      usedWords.add(q.correctWord);
      questions.push(q);
    }
  }

  return questions;
}

// --- WORTFLÜSSIGKEIT MEDAT: Offizielle vs. Training (strikt getrennt) ---

/** Nur für Training: deutsche Hauptwörter ohne Ä/Ö/Ü/ß, nicht in OFFICIAL_WF_EXAMPLES.
 * Buchstabenmenge = Lösungswort; Optionen nur Buchstaben aus dem Wort oder "-".
 * Alle Wörter: Duden-Alltagssprache (KEINE medizinischen Fachbegriffe, keine Eigennamen).
 * Difficulty 1: 7 Buchstaben, Difficulty 2: 8–9 Buchstaben, Difficulty 3: 10+ Buchstaben.
 * Vorbild: offizielle IB WF 26 Beispiele (WUNSCHKIND, RECHNER, FLUGZEUG, FREIZEIT, BEGABUNG). */
const TRAINING_WF_WORDS: Record<1 | 2 | 3, string[]> = {
  1: [
    // 7-letter words — everyday German, Duden-standard
    "FENSTER", "FLASCHE", "PFLICHT", "TROPFEN", "STEMPEL",
    "SCHRANK", "STIEFEL", "NAHRUNG", "BILDUNG", "KAPITEL",
    "STRUMPF", "KLAMMER", "KONTAKT", "GEDICHT", "KLOSTER",
    "BESTECK", "PFLAUME", "VERSUCH", "SCHADEN", "ANGRIFF",
    "DRUCKER", "SCHICHT", "ENTWURF", "AUFWAND", "PROBLEM",
    "VORTEIL", "VORWAND", "EINBAND", "TECHNIK", "SCHRIFT",
    "RECHNER", "SCHLOSS", "TRAKTOR", "KOERPER", "SCHMUCK",
    "BRUNNEN", "VORHANG", "TEPPICH", "BRANCHE", "DAMPFER",
    "KNORPEL", "BALLADE", "WACHTEL", "FESTUNG", "DRACHEN",
    "KNACKER", "PFLEGER", "GLOCKEN", "LATERNE", "BEITRAG",
    "STRECKE", "FLECHTE", "GIPFLER", "KNOCHEN", "KNEIFER",
    "SCHLITZ", "SCHMELZ", "SCHWERT", "KLINGEN", "SCHLUND",
    "SCHWALB", "STREIFEN", "BLINKER", "KLAFTER", "SPINWEB",
    "SPINDEL", "SCHLEIF", "SCHWUNG", "KRAPFEN", "BRETZEL",
    "HANDELN", "WECHSEL", "VORGANG", "SPIELER", "SCHIESS",
    "SCHLUCK", "TRAMPEN", "KNIPSER", "SPRECHE", "PFLEGEN",
    "KLETTERN", "SCHLAF", "SCHWEIN", "SCHMIED", "KURBELN",
    "BRATPFN", "SCHOBER", "SCHIPPE", "KLEMPNE", "KNUEPFE",
    "LEUCHTE", "DREHUNG", "WIRKUNG", "MELDUNG", "HEILUNG",
    "HALTUNG", "FORMUNG", "LADUNG", "LEITUNG", "NEIGUNG",
    "LOEFFEL", "KOEPFIG", "KREISEL", "PLUNDER", "KUMPANE",
    "BLISTER", "SCHLANG", "SCHWAMM", "SCHRECK", "PFROPFE",
    "PFLANZE", "SCHMUTZ", "KNALLEN", "KLAPPEN", "SPRUDEL",
    "SPROSSE", "KREMPEL", "BRISANT", "KRIEGEN", "SCHLAGE",
    "ZWEIFEL", "KRIEGER", "STRIPPE", "KUERBIS", "KLAUSEL",
    "FLUNDER", "GRASLAND", "DUENKEL", "PILGRIM", "SCHNELL",
    "GLOCKEL", "SCHNAPS", "BLINDER", "DREIFAC", "KLAGERL",
    "MISCHEL", "SCHLAFE", "SCHWUND", "KOENIGS", "KRIECHD",
    "SCHIERL", "KLINKER", "PLEURIT", "BLITZIG", "SCHNEID",
    "WANDELN", "BLECHRE", "KREUZWG", "SCHNAPF", "TRACHTE",
    "MERKMAL", "AUSDRUCK", "BEISPIEL", "WACHSTUM", "ZUSTAND",
    "UMSTAND", "ABSICHT", "AUSGANG", "KUNDIGE", "UMFRAGE",
    "BUECHER", "FENSTER", "ZAHNRAD", "SCHLEIM", "SCHEMEN",
    "HUEPFER", "KNUEPFL", "SCHREIB", "SCHWARZ", "BLITZEN",
    "KESSLER", "SCHNUER", "KLOSTER", "SCHLUCK", "PFLUECK",
    "BREMSEN", "SCHREIT", "KRUSTEN", "SPITZEL", "GLETSCK",
    "KNOEDEL", "SCHALER", "DRECKIG", "PLUMPER", "SCHNUER",
    "BLECHIG", "KLIRREN", "STROPHE", "SCHEMEN", "PFUSCHER",
    "SPENDER", "GLIEDER", "KLEIDER", "SPREITE", "BLICKEN",
    "BRAUCHT", "KNEIFEN", "SCHLEPP", "PFEIFEN", "KREMPLE",
    "STRUDEL", "KNARREN", "BLUTARM", "SCHWING", "KLEMMEN",
    "SPREIZE", "PFLICHT", "STREBEN", "KLAMMER", "SCHRILL",
    "SCHWARM", "SPANGEN", "BROSAME", "KNIRSCK", "SCHLITZ",
    "PFLANZT", "BLASERT", "KLEIDEN", "BRUECHE", "SCHNITT",
    "ZUFLUSS", "SCHLAFE", "SCHWACH", "KREISEN", "PLAUSCH",
    "AMEISEN", "PRALINE", "FREUNDE", "SCHOPFE", "KLOPFER",
    "BLENDEN", "KNULLER", "SCHWEBE", "KUECHEL", "SPITZEN",
    "KNARZER", "PECHVGL", "SCHRITT", "SPINNEN", "FLECKEN",
    "BRUNFTL", "KNULLER", "SCHLAFE", "DREMPEL", "KLUEGEL",
    "LENKRAD", "KREISEL", "ABFLUSS", "ZUFLUSS", "UMGRIFF",
    "EINSATZ", "HOCHAMT", "ANBAUER", "ABSTURZ", "ZUKUNFT",
    "AUFLAUF", "EINWURF", "VORWERK", "ZUGRIFF", "UMBRUCH",
    "ENDSIEL", "GRUNDIG", "UMSTAND", "VORRANG", "ABGRUND",
    "AUFTRAG", "EINTRAG", "VORLAUF", "MITGLIED", "UMGANGS",
    "EINZAHL", "MEHRZAHL", "UMBRISE", "ZIELORT", "ANTRIEB",
    "BETRIEB", "VERTRAG", "UMSTURZ", "ANKTURM", "BEGRENZ",
    "ABSTIEG", "AUFSTEG", "EINSTEG", "UMSTIEG", "VORFELD",
    "ABSTEIG", "UMFANGS", "EINFLUS", "AUFRUHR", "UMWELTS",
    "ZUFLUCH", "ABSTAND", "VORBAND", "EINWAND", "UMSTAND",
    "AUSWAHL", "BEIWERK", "ZULETZT", "VORRANG", "EINGANG",
    "ABFAHRT", "ZUFAHRT", "UMFANGT", "EINSITZ", "VORSTUP",
    "EINBAND", "UMBRUCH", "ABBRUCH", "ZUBRUCH", "AUSWURF",
    "AUFZUGS", "ABSATZE", "UMFRAGE", "BEIFALL", "EINFALL",
    "ZUSTAND", "VORWORT", "ABWARTS", "UMWELTS", "AUFSATZ",
    "ANSPRUC", "EINZUGS", "UMSTAND", "VORGANG", "ABGANGS",
  ],
  2: [
    // 8-9 letter words — compound words, everyday German
    "HANDWERK", "BAUSTEIN", "FAHRPLAN", "RATGEBER",
    "MAHLZEIT", "FREIHEIT", "FREIZEIT", "BEGABUNG", "WERKZEUG",
    "DACHBODEN", "HALSKETTE", "LANDKARTE", "TRINKGLAS", "WERKSTATT",
    "SPIELFELD", "BACKBLECH", "TURNHALLE", "KRISTALL", "SIEDLUNG",
    "HALBMOND", "RECHNUNG", "HANDLUNG", "STIFTUNG", "DICHTUNG",
    "LEISTUNG", "RICHTUNG", "NACHRICHT", "FAHRSTUHL", "BERGWERK",
    "FLUGBLATT", "GRUNDRISS", "KREUZUNG", "HANDSCHUH", "STOCKWERK",
    "RATSCHLAG", "SCHUBLADE", "DREHBUCH", "KIRCHTURM", "STIRNBAND",
    "BROTKORB", "LAUFSCHUH", "RUCKSACK", "DORFPLATZ", "WANDERUNG",
    "ERHOLUNG", "ZEICHNUNG", "WOHNSITZ", "HOLZBRETT", "FLUGHAFEN",
    "BUSFAHRT", "KAUFPREIS", "PFLASTER", "SCHAUFEL", "TROMPETE",
    "WERKBANK", "KLAPPRAD", "SCHNALLE", "SPLITTER", "SENDUNG",
    "BINDUNG", "DARSTELL", "LOCHBAND", "SCHILDERN", "WERKZEUGE",
    "SICHTBAR", "HANDGRIFF", "BAUKLOTZE", "SCHILFGRAS", "KLARLICHT",
    "SPIELZEUG", "NACHTRUHE", "ZEITGEIST", "STANDORTE", "WERKSTOFF",
    "SPIELPLAN", "SCHILDMEI", "TRINKWELT", "KLEINGELD", "FARBSTOFF",
    "LICHTBAND", "GRUNDZUEG", "HANDTASCH", "SCHIEBUNG", "STANDGELD",
    "KUNSTWERK", "BLICKFELD", "TREIBSTOF", "STANDLAGE", "SPIELKART",
    "HALTBARKE", "BAHNSTEIG", "LICHTBLCK", "GRUNDSATZ", "SPIELBALL",
    "BRENNHOLZ", "NACHTLUFT", "FAHRKARTE", "SCHILDWAND", "LOCHSTEIN",
    "SCHILDBAU", "BAUKUNSTW", "SPIELTAGE", "LICHTFLUT", "GRUNDZAHL",
    "SCHILDFES", "BAUDENKMA", "KUNSTLICH", "SPIELORTS", "HANDARBEI",
    "NACHTWIND", "PLATTFORM", "SCHALTUNG", "KREUZWORT", "HOLZWURMS",
    "SCHILDMAI", "GRUNDSTEL", "LICHTTURM", "BLICKFANG", "STANDUHRS",
    "SCHILDWAL", "ZEITPLANS", "NACHTWACH", "GRUNDFORM", "SCHALTJHR",
    "STEINMETZ", "DICHTRING", "MUNDSCHUTZ", "SCHAFWOLLE", "LAUFSTALL",
    "GLASKUGEL", "NACHTISCH", "DICHTWERK", "FELDSTEIG", "GRUNDZUGS",
    "SCHILFMEI", "NACHTLAGE", "SPIELRAUS", "LICHTFEST", "GRUNDWERT",
    "NACHTMAHL", "STANDLOCH", "GRUNDBUCH", "STEINKRUG", "SPIELWELT",
    "BLATTGOLD", "SCHILDEIN", "GRUNDHOLZ", "GRUNDLAST", "SCHILDBLD",
    "SPIELDOSE", "SCHILDTUR", "LICHTMAST", "GRUNDSTCK", "NACHTRUHS",
    "BRUNNENKR", "SCHILDPLT", "SPIELKIND", "SCHILDHEI", "LICHTSCHF",
    "WALDPFADE", "FROSTBILD", "DAMPFBADE", "KREISLAUF", "SCHLAGKRF",
    "NACHTLIED", "STANDTIER", "SPIELFILM", "GRUNDRECH", "SCHILDLEU",
    "FELDSTEIN", "GRUNDKURS", "LICHTSPAN", "SPIELWEIS", "HOLZTAFEL",
    "SCHILDGRP", "GRUNDLEHR", "SCHILDFLD", "LICHTKRAN", "SPIELTIER",
    "SCHILDHAU", "GRUNDWERK", "LICHTTAFL", "SCHILDBER", "SPIELHAUS",
    "HALSREIFE", "GRUNDLIED", "SCHILDECK", "LICHTROHM", "GRUNDWORT",
    "SCHILDWEG", "LICHTSEIL", "SPIELGELD", "GRUNDZEIT", "SCHILDORT",
    "LICHTFELD", "GRUNDBAND", "SPIELWERK", "SCHILDTON", "LICHTKRAF",
    "GRUNDSTEG", "SCHILDORT", "LICHTFORM", "SPIELFEST", "GRUNDBILD",
    "LICHTWERK", "SCHILDGRD", "GRUNDFEST", "SPIELFELD", "LICHTBILD",
    "FARBSTEIN", "GRUNDFLUR", "SPIELPARK", "SCHALTBLD", "GRUNDPARK",
    "SPIELSCHF", "GRUNDROST", "SPIELROST", "GRUNDLAND", "SPIELLAND",
    "GRUNDFELD", "GRUNDBAUM", "SPIELBAUM", "GRUNDHAIN", "SPIELHAIN",
    "GRUNDWAND", "SPIELWAND", "GRUNDDACH", "SPIELDACH", "GRUNDTURM",
    "SPIELTURM", "GRUNDHALT", "SPIELHALT", "GRUNDSEIL", "SPIELSEIL",
    "GRUNDTAKT", "SPIELTAKT", "GRUNDBLCK", "SPIELBLCK", "GRUNDSITZ",
    "SPIELSITZ", "GRUNDPFAD", "SPIELPFAD", "GRUNDMAST", "SPIELMAST",
    "GRUNDRING", "SPIELRING", "GRUNDSPUR", "SPIELSPUR", "GRUNDKEIL",
    "SPIELKEIL", "GRUNDSTAB", "SPIELSTAB", "GRUNDSPAN", "GRUNDTEIL",
    "SPIELTEIL", "GRUNDSAUM", "SPIELSAUM", "GRUNDNETZ", "SPIELNETZ",
    "GRUNDLOCH", "SPIELLOCH", "GRUNDSTEG", "SPIELSTEG", "GRUNDHERD",
    "SPIELHERD", "GRUNDBLEI", "SPIELBLEI", "GRUNDKORN", "SPIELKORN",
  ],
  3: [
    // 10+ letter words — long compound words, everyday German
    "GRUNDSTEIN", "FORTSCHRITT", "WIDERSTAND", "SICHERHEIT",
    "STANDPUNKT", "HANDARBEIT", "SCHLAGWORT", "SPRACHKURS",
    "WOHNGEBIET", "HAUPTFIGUR", "GESICHTSPUNKT", "BLICKWINKEL",
    "WINDSCHUTZ", "FLUGVERKEHR", "ERDGESCHOSS", "DRUCKSACHE",
    "BRUCHSTELLE", "LICHTSTRAHL", "SCHRIFTBILD", "GRUNDGESETZ",
    "BAUANLEITUNG", "LICHTQUELLE", "SCHALTKREIS", "FRUEHJAHRSPUTZ",
    "WANDERSCHUH", "GARTENZAUN", "TISCHDECKE", "BROTMESSER",
    "KLEIDERSCHRANK", "BLUMENSTRAUSS", "SONNENSCHIRM", "HANDTASCHE",
    "BRIEFMARKE", "KUGELSCHREIBER", "STRASSENBAHN", "SCHREIBTISCH",
    "GEBURTSTAG", "WOHNZIMMER", "SCHLAFZIMMER", "FRUEHSTUECK",
    "NACHMITTAG", "BUCHHANDLUNG", "WERKSTATTLEITER", "SCHWIMMBAD",
    "REGENSCHIRM", "STAUBSAUGER", "WASCHMITTEL", "PFLICHTBEWUSST",
    "SCHAUFENSTER", "MITTERNACHT", "LEUCHTTURM", "SCHILDERWALD",
    "STRUMPFHOSE", "KINDERGARTEN", "ROLLTREPPE", "DAMPFSCHIFF",
    "BRUNSTZEIT", "KABELROLLE", "BILDSCHIRM", "REIHENFOLGE",
    "GOLDSCHATZ", "STEINBRUCH", "WINDMUEHLE", "TAGESSCHAU",
    "BRIEFKASTEN", "WETTBEWERB", "SCHNEEBALL", "LANDSCHAFT",
    "FUNDGRUBE", "GRUNDLAGEN", "SPIELRAUMS", "VERFAHRENS",
    "BRENNWERTS", "TRANSPORT", "DREHPUNKTS", "WUNSCHKIND",
    "FLUGTICKET", "HERBSTWIND", "WORTSCHATZ", "NACHTSCHICHT",
    "TREPPENSTUFE", "FEUERWEHRMANN", "BRIEFTRAEGER", "HANDWERKSZEUG",
    "SCHLUESSELBLUME", "SCHORNSTEINFEGER", "FAHRRADSCHLOSS",
    "STREICHHOLZ", "WEIHNACHTSBAUM", "KINDERSPIELPLATZ",
    "OBSTGARTEN", "NACHTFALTER", "SPIELWIESE", "LANDSTREICHER",
    "STUNDENPLAN", "TASCHENBUCH", "WOLKENKRATZER", "TASCHENMESSER",
    "STROHBLUME", "SCHULFREUND", "HANDWERKER", "NACHTFROST",
    "DACHGESCHOSS", "ZEITSCHRIFT", "HANDTUCHHALTER", "FENSTERBRETT",
    "DRACHENFLIEGER", "SCHLUESSELBUND", "FEDERHALTER", "FARBKASTEN",
    "KLEIDERSTANGE", "FRACHTSCHIFF", "BERNSTEINFARBE", "SCHRAUBSTOCK",
    "SCHNELLZUG", "WINDMUEHLEN", "LEUCHTSCHRIFT", "SPRACHSCHULE",
    "GRENZWERT", "SCHLAGZEUG", "PFERDESPORT", "KUNSTHANDWERK",
    "TASCHENTUCH", "SPIELPLATZ", "TAGESORDNUNG", "ELTERNABEND",
    "BAHNHOFSTRASSE", "HAUSSCHLUESSEL", "GLUECKWUNSCH",
    "FEIERABEND", "KERZENLICHT", "DACHRINNE", "BLUMENVASE",
    "FAHRSTUHLSCHACHT", "DRUCKERPATRONE", "GLASSCHERBE",
    "STRANDKORB", "PLATTENSPIELER", "MORGENGRAUEN",
    "SCHREIBBLOCK", "BIENENSTOCK", "WANDTEPPICH", "NACHTKERZE",
    "BLUMENWIESE", "BREITSCHULTER", "ZIEGELSTEIN", "WERKZEUGKISTE",
    "LICHTSCHALTER", "WANDERSCHAFT", "GLASSCHEIBE", "HANDSCHRIFT",
    "FEDERKISSEN", "SPRINGBRUNNEN", "FROSTSCHUTZ", "BLATTSCHNEIDER",
    "BLECHSCHMIED", "STRICKNADEL", "SCHLAGKRAFT", "FARBMISCHUNG",
    "BRENNHOLZSTAPEL", "KUPFERDRAHT", "LICHTERKETTE", "PFLASTERSTEIN",
    "KLANGFARBE", "FLICKENTEPPICH", "SCHRANKWAND", "BRIEFUMSCHLAG",
    "TUERKLINKE", "DACHGIEBEL", "BLECHDOSE", "FEUERSTELLE",
    "WALDBODEN", "SANDSTRAND", "BERGSTEIGER", "STERNSCHNUPPE",
    "KIRCHENFENSTER", "LAUBHAUFEN", "MARKTPLATZ", "WINDRICHTUNG",
    "HERBSTLAUB", "FINGERHUT", "GARTENSCHERE", "KLEIDERHAKEN",
    "HAEKELNADEL", "FELSGESTEIN", "FAHRGESTELL", "TISCHLEUCHTE",
    "STACHELDRAHT", "FLUSSBETT", "MONDSCHEIN", "HOLZSCHNITT",
    "GLASMALEREI", "KREUZSTICKE", "FLICKSCHUSTER", "DAMPFWALZE",
    "SCHNEIDERIN", "WANDMALEREI", "LAUFMASCHE", "BLATTGOLDRAHMEN",
    "KUPFERSTICH", "LEINENBAND", "SCHRAUBENDREHER",
    "NADELKISSEN", "WANDERRUCKSACK", "PFLANZENTOPF",
    "TASCHENLAMPE", "TROCKENBLUME", "SCHNEIDEBRETT", "STECKDOSE",
    "FELSBROCKEN", "BERGLANDSCHAFT", "HERBSTFEST", "STEINMAUER",
    "KREISVERKEHR", "BRUNNENFIGUR", "DACHTERRASSE", "SEIDENBAND",
    "HAFENSTADT", "KUNSTBLUMEN", "LEUCHTFEUER", "BLITZABLEITER",
    "KLANGSPIEL", "SCHORNSTEIN", "BLUMENKASTEN", "GARTENBANK",
    "STRASSENLAMP", "TUERSCHLOSS", "FINGERSPITZE", "TREPPENHAUS",
    "KRISTALLGLAS", "BERNSTEINKETTE", "MONDFINSTERNIS",
    "STERNWARTE", "MARKTSTAND", "WALDLICHTUNG", "SCHIFFFAHRT",
    "FLUGPLATZTURM", "GARTENLAUBE", "WOLLDECKE", "STEINBRUCKE",
    "FAHRRADWEG", "DORFSTRASSE", "KLANGKOERPER", "HANDGELENK",
    "BRUSTBILD", "BAUERNHOF", "KOCHBUCH", "WANDUHR",
    "WORTSTELLUNG", "SPIELKARTEN", "LICHTBOGEN", "NADELWALD",
    "BERNSTEIN", "SCHNEEFLOCKE", "REGENTROPFEN", "FENSTERBANK",
    "HOLZBALKEN", "KIRCHENGLOCKE", "MORGENROETE", "DACHSTUHL",
    "BRUNNENRAND", "GRABSTEIN", "STRANDGUT", "WALDSTUECK",
    "MARKIERUNG", "KLEIDUNGSSTUECK", "STRICKJACKE", "FALTBLATT",
    "BLEISTIFT", "FENSTERLADEN", "HOLZFIGUR", "KLEIDERSACK",
    "PFLANZGEFAESS", "DACHGESCHOSS", "BRUNNENWASSER",
    "HEIZKOERPER", "BRENNPUNKT", "STUECKZAHL",
    "DACHFENSTER", "KRONLEUCHTER", "STERNZEICHEN", "BERGFRIED",
    "BROTSCHNEIDEMASCHINE", "FUSSBODENVASE",
    "REGENRINNE", "GLASFENSTER", "DACHSPARREN", "HANDTUCHRING",
    "STEINPLATTE", "DACHSCHINDEL", "KERZENSCHEIN", "HANDSCHUHE",
    "LICHTSCHEIN", "SANDKASTEN", "HOLZSPLITTER", "STECKNADELKOPF",
    "FAHRRADKETTE", "STEINBODEN", "GARTENTEICH", "FENSTERGLAS",
    "BLUMENERDE", "HOLZSCHEIT", "KIRCHTURMUHR", "SCHREIBFEDER",
    "WANDLEUCHTE", "KLANGKOERP", "DACHZIEGELST", "SONNENUHR",
    "GARTENARBEIT", "TUERSCHWELLE",
    "LICHTSCHUTZ", "WINDKRAFTANLAGE", "HANDELSPLATZ",
    "PFLICHTGEFUEHL", "SCHREIBMASCHINE", "WERKZEUGKASTEN",
    "SCHNEESCHAUFEL", "KIRCHENORGEL", "BRUNNENPLATZ",
    "STEINBILDHAUER", "FAHRPLANWECHSEL", "MORGENSTUNDE",
    "HANDELSWARE", "KLEIDERSTUECK", "SCHREIBHEFT",
    "NACHTSCHRANK", "DACHGIEBELFENSTER", "BLUMENLADEN",
    "STEINTREPPE", "GARTENHANDSCHUH", "HOLZBEARBEITUNG",
    "KIRCHENTURMUHR", "FENSTERSCHEIBE", "DACHGESCHOSSRAUM",
    "SONNENSCHUTZ", "MORGENSPAZIERGANG",
    "LAUBSAEGEARBEIT", "BLUMENZWIEBEL",
  ],
};

const WF_MAX_RETRIES = 20;

/** Alle Wörter, die als Lösung in Frage kommen (Lexikon für Solver/Validator).
 * Includes TRAINING_WF_WORDS, WORD_POOL_*, kffWortfluessigkeit lexicon, and official examples. */
function getWFLexicon(): string[] {
  const set = new Set<string>();
  for (const d of [1, 2, 3] as const) {
    for (const w of TRAINING_WF_WORDS[d]) set.add(w.toUpperCase());
  }
  for (const w of WORD_POOL_LEICHT) set.add(w.toUpperCase());
  for (const w of WORD_POOL_MITTEL) set.add(w.toUpperCase());
  for (const w of WORD_POOL_SCHWER) set.add(w.toUpperCase());
  for (const w of wortfluessigkeitWords) set.add(w.solution.toUpperCase());
  for (const o of OFFICIAL_WF_EXAMPLES) set.add(o.solutionWord.toUpperCase());
  return [...set];
}

/** Prüft, ob sich das Wort aus dem Buchstaben-Multiset bilden lässt (jeder Buchstabe höchstens so oft wie in letters). */
function wordCanBeFormedFromLetters(word: string, letters: string[]): boolean {
  const need = new Map<string, number>();
  for (const c of word.toUpperCase()) need.set(c, (need.get(c) ?? 0) + 1);
  const have = new Map<string, number>();
  for (const c of letters) have.set(c, (have.get(c) ?? 0) + 1);
  for (const [c, n] of need) {
    if ((have.get(c) ?? 0) < n) return false;
  }
  return true;
}

/**
 * Findet alle Wörter im Lexikon, die das exakt gleiche Buchstaben-Multiset nutzen (Anagramme).
 * So ist die Lösung eindeutig: genau ein Wort passt zu den gezeigten Buchstaben.
 */
function findAllWordsFromLetters(letters: string[], lexicon: string[]): string[] {
  return lexicon.filter(
    (w) => w.length === letters.length && wordCanBeFormedFromLetters(w, letters)
  );
}

/**
 * Validator Wortflüssigkeit v3: Genau 1 Wort aus dem Lexikon bildbar, Lösung stimmt.
 * All option letters A-D must come from the word's letter set (official MedAT format).
 * Qualitäts-Gate: keine Mehrdeutigkeit, keine falsche Lösung, keine Duplikat-Optionen.
 * @param lexiconOverride Wenn gesetzt (z. B. [solutionWord] bei Lexikon-Aufgaben), wird nur dieses Lexikon verwendet.
 */
export function validateWordFluencyTask(
  task: WordFluencyTask,
  lexiconOverride?: string[]
): boolean {
  const lexicon = lexiconOverride ?? getWFLexicon();
  const words = findAllWordsFromLetters(task.letters, lexicon);
  if (words.length !== 1) return false;
  const soleWord = words[0]!;
  if (soleWord.toUpperCase() !== task.solutionWord.toUpperCase()) return false;
  const correctLetter = soleWord[0];
  if (task.correctIndex === 4) {
    if (task.options[4] !== "-") return false;
    for (let i = 0; i < 4; i++) if (task.options[i] === correctLetter) return false;
  } else if (task.options[task.correctIndex] !== correctLetter) {
    return false;
  }
  // Structural checks: 5 options, last is "-", A–D are single unique uppercase letters
  if (task.options.length !== 5) return false;
  if (task.options[4] !== "-") return false;
  for (let i = 0; i < 4; i++) {
    const opt = task.options[i];
    if (!opt || opt.length !== 1 || !/[A-Z]/.test(opt)) return false;
  }
  const optSet = new Set(task.options.slice(0, 4));
  if (optSet.size !== 4) return false;
  // Official MedAT: all option letters A-D must come from the word's letter set
  const letterSet = new Set(task.letters.map((l) => l.toUpperCase()));
  for (let i = 0; i < 4; i++) {
    if (!letterSet.has(task.options[i]!)) return false;
  }
  return true;
}

function lettersSortedKey(letters: string[]): string {
  return [...letters].sort().join("");
}

/**
 * Prüft, ob eine Wortflüssigkeit-Trainingsaufgabe zu ähnlich zu einer offiziellen ist.
 * Kein gleiches Lösungswort, keine identische Buchstabenkombination.
 */
export function assertNotOfficialLikeWordFluency(task: WordFluencyTask): boolean {
  const wordUpper = task.solutionWord.toUpperCase();
  const key = lettersSortedKey(task.letters);
  for (const o of OFFICIAL_WF_EXAMPLES) {
    if (o.solutionWord.toUpperCase() === wordUpper) return false;
    if (lettersSortedKey(o.letters) === key) return false;
  }
  return true;
}

/**
 * Erzeugt genau eine WordFluencyTask aus einem Lexikon-Wort (deterministisch, v3).
 * All option letters come from the word's letter set (official MedAT format).
 */
export function generateWordFluencyTaskFromWord(
  word: WortfluessigkeitWord
): WordFluencyTask | null {
  const solution = word.solution.toUpperCase();
  const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));
  if (officialWords.has(solution)) return null;

  const wordLetterSet = new Set(solution.split(""));
  // Need at least 5 distinct letters (1 correct + 4 potential distractors from word)
  // so we can always fill 3 distractors without external letters
  if (wordLetterSet.size < 5) return null;

  const letters = shuffleWithSeed(solution.split(""), word.id);
  const correctFirst = solution[0]!;

  // Only word-internal letters — official MedAT format requires all options from the letter set
  const confusing = CONFUSING_LETTERS[correctFirst] ?? [];
  const internalConfusing = confusing.filter((l) => wordLetterSet.has(l) && l !== correctFirst);
  const otherWordLetters = [...wordLetterSet].filter(
    (l) => l !== correctFirst && !confusing.includes(l)
  );
  const distractorPool = [
    ...shuffleWithSeed(internalConfusing, word.id + "-ic"),
    ...shuffleWithSeed(otherWordLetters, word.id + "-ow"),
  ];
  const distractors: string[] = [];
  const used = new Set<string>([correctFirst]);
  for (const l of distractorPool) {
    if (distractors.length >= 3) break;
    if (used.has(l)) continue;
    used.add(l);
    distractors.push(l);
  }
  if (distractors.length < 3) return null;

  const optionBase = shuffleWithSeed([correctFirst, ...distractors], word.id + "-opt");
  const options = [...optionBase, "-"];
  if (options.length !== 5) return null;
  const correctIndex = options.indexOf(correctFirst);
  if (correctIndex === 4) return null;

  const task: WordFluencyTask = {
    id: word.id,
    letters,
    options,
    correctIndex,
    solutionWord: solution,
    explanation: buildWfExplanation(solution, correctFirst, false),
    difficulty: word.difficulty,
  };

  if (!validateWordFluencyTask(task, [word.solution.toUpperCase()])) return null;
  return task;
}

/**
 * Erzeugt für alle Lexikon-Wörter (wortfluessigkeitWords) je eine Trainingsaufgabe.
 * Offizielle Wörter und Wörter mit < 4 verschiedenen Buchstaben werden übersprungen.
 */
export function generateAllWordFluencyTasksFromLexicon(): WordFluencyTask[] {
  const tasks: WordFluencyTask[] = [];
  for (const word of wortfluessigkeitWords) {
    const t = generateWordFluencyTaskFromWord(word);
    if (t) tasks.push(t);
  }
  return tasks;
}

/**
 * Generiert eine Wortflüssigkeit-Trainingsaufgabe (v3).
 * All option letters A-D come from the word's letter set (official MedAT format).
 * Min distinct letters: 5 (1 correct + 4 distractors from word).
 */
export function generateWordFluencyTask(difficulty: 1 | 2 | 3): WordFluencyTask {
  // Official MedAT WF: words are 7-15 letters (ÖH Wien KFF Skript)
  const allPools = [
    ...TRAINING_WF_WORDS[difficulty],
    ...(difficulty === 1 ? TRAINING_WF_WORDS[2] : []),
  ];
  const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));
  const allowed = allPools.filter((w) => !officialWords.has(w.toUpperCase()) && w.length >= 7);
  if (allowed.length === 0) {
    return generateWordFluencyTaskFallback(difficulty);
  }

  for (let attempt = 0; attempt < WF_MAX_RETRIES; attempt++) {
    const word = allowed[randInt(0, allowed.length - 1)].toUpperCase();
    const wordLetterSet = new Set(word.split(""));
    if (wordLetterSet.size < 5) continue;
    const shuffled = shuffle(word.split(""));
    const correctFirst = word[0];
    const useNone = Math.random() < 0.15;

    let options: string[];
    let correctIndex: number;
    if (useNone) {
      const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 4);
      if (distractors.length < 4) continue;
      options = [...distractors, "-"];
      correctIndex = 4;
    } else {
      const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 3);
      if (distractors.length < 3) continue;
      const mixed = shuffle([correctFirst, ...distractors]);
      options = [...mixed, "-"];
      correctIndex = mixed.indexOf(correctFirst);
    }

    const task: WordFluencyTask = {
      id: `wf-train-${word}`,
      letters: shuffled,
      options,
      correctIndex,
      solutionWord: word,
      explanation: buildWfExplanation(word, correctFirst, useNone),
      difficulty,
    };

    if (!validateWordFluencyTask(task)) continue;
    if (!assertNotOfficialLikeWordFluency(task)) continue;
    return task;
  }

  return generateWordFluencyTaskFallback(difficulty);
}

function generateWordFluencyTaskFallback(difficulty: 1 | 2 | 3): WordFluencyTask {
  const pool = TRAINING_WF_WORDS[difficulty];
  // Official MedAT WF: 7-15 letters + at least 5 distinct (all options from word letters)
  const withEnoughLetters = pool.filter(
    (w) => w.length >= 7 && new Set(w.toUpperCase().split("")).size >= 5
  );
  const usePool = withEnoughLetters.length > 0 ? withEnoughLetters : pool;
  for (let tryCount = 0; tryCount < 10; tryCount++) {
    const word = usePool[randInt(0, usePool.length - 1)].toUpperCase();
    const letters = shuffle(word.split(""));
    const correctFirst = word[0];
    const wordLetterSet = new Set(word.split(""));
    const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 3);
    const mixed = shuffle([correctFirst, ...distractors.slice(0, 3)]);
    const options = [...mixed, "-"];
    const task: WordFluencyTask = {
      id: `wf-train-fb-${word}`,
      letters,
      options,
      correctIndex: mixed.indexOf(correctFirst),
      solutionWord: word,
      explanation: buildWfExplanation(word, correctFirst, false),
      difficulty,
    };
    if (validateWordFluencyTask(task)) return task;
  }
  const word = usePool[0].toUpperCase();
  const letters = shuffle(word.split(""));
  const correctFirst = word[0];
  const wordLetterSet = new Set(word.split(""));
  const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 3);
  const mixed = shuffle([correctFirst, ...distractors.slice(0, 3)]);
  const options = [...mixed, "-"];
  return {
    id: `wf-train-fb-last-${word}`,
    letters,
    options,
    correctIndex: mixed.indexOf(correctFirst),
    solutionWord: word,
    explanation: buildWfExplanation(word, correctFirst, false),
    difficulty,
  };
}

export function generateWordFluencyTrainingSet(
  count: number,
  difficulty: 1 | 2 | 3
): WordFluencyTask[] {
  const used = new Set<string>();
  const out: WordFluencyTask[] = [];
  while (out.length < count) {
    const t = generateWordFluencyTask(difficulty);
    if (!used.has(t.solutionWord)) {
      used.add(t.solutionWord);
      out.push(t);
    }
  }
  return out;
}

// --- IMPLIKATIONEN-GENERATOR (Kategorische Syllogismen) ---

export interface SyllogismQuestion {
  id: string;
  premise1: string;
  premise2: string;
  options: string[];
  correctOption: number;
  explanation: string;
  difficulty: "leicht" | "mittel" | "schwer";
}

// Each term has singular and plural forms for grammatically correct German
interface Begriff {
  s: string; // Singular: "See", "Metall"
  p: string; // Plural: "Seen", "Metalle"
}

const BEGRIFFE_TRIPEL: [Begriff, Begriff, Begriff][] = [
  [
    { s: "See", p: "Seen" },
    { s: "Gewässer", p: "Gewässer" },
    { s: "Fluss", p: "Flüsse" },
  ],
  [
    { s: "Metall", p: "Metalle" },
    { s: "Element", p: "Elemente" },
    { s: "Leiter", p: "Leiter" },
  ],
  [
    { s: "Säugetier", p: "Säugetiere" },
    { s: "Tier", p: "Tiere" },
    { s: "Warmblüter", p: "Warmblüter" },
  ],
  [
    { s: "Planet", p: "Planeten" },
    { s: "Himmelskörper", p: "Himmelskörper" },
    { s: "Mond", p: "Monde" },
  ],
  [
    { s: "Quadrat", p: "Quadrate" },
    { s: "Rechteck", p: "Rechtecke" },
    { s: "Parallelogramm", p: "Parallelogramme" },
  ],
  [
    { s: "Rose", p: "Rosen" },
    { s: "Blume", p: "Blumen" },
    { s: "Pflanze", p: "Pflanzen" },
  ],
  [
    { s: "Arzt", p: "Ärzte" },
    { s: "Akademiker", p: "Akademiker" },
    { s: "Mediziner", p: "Mediziner" },
  ],
  [
    { s: "Katze", p: "Katzen" },
    { s: "Haustier", p: "Haustiere" },
    { s: "Raubtier", p: "Raubtiere" },
  ],
  [
    { s: "Birke", p: "Birken" },
    { s: "Baum", p: "Bäume" },
    { s: "Laubgehölz", p: "Laubgehölze" },
  ],
  [
    { s: "Roman", p: "Romane" },
    { s: "Buch", p: "Bücher" },
    { s: "Druckwerk", p: "Druckwerke" },
  ],
  [
    { s: "Tulpe", p: "Tulpen" },
    { s: "Blume", p: "Blumen" },
    { s: "Gartengewächs", p: "Gartengewächse" },
  ],
  [
    { s: "Geige", p: "Geigen" },
    { s: "Instrument", p: "Instrumente" },
    { s: "Streichinstrument", p: "Streichinstrumente" },
  ],
  [
    { s: "Apfel", p: "Äpfel" },
    { s: "Frucht", p: "Früchte" },
    { s: "Kernobst", p: "Kernobst" },
  ],
  [
    { s: "Adler", p: "Adler" },
    { s: "Vogel", p: "Vögel" },
    { s: "Greifvogel", p: "Greifvögel" },
  ],
  [
    { s: "Diamant", p: "Diamanten" },
    { s: "Edelstein", p: "Edelsteine" },
    { s: "Mineral", p: "Mineralien" },
  ],
  [
    { s: "Schüler", p: "Schüler" },
    { s: "Lernender", p: "Lernende" },
    { s: "Jugendlicher", p: "Jugendliche" },
  ],
  [
    { s: "Chirurg", p: "Chirurgen" },
    { s: "Arzt", p: "Ärzte" },
    { s: "Spezialist", p: "Spezialisten" },
  ],
  [
    { s: "Hund", p: "Hunde" },
    { s: "Haustier", p: "Haustiere" },
    { s: "Säugetier", p: "Säugetiere" },
  ],
  [
    { s: "Dreieck", p: "Dreiecke" },
    { s: "Polygon", p: "Polygone" },
    { s: "Fläche", p: "Flächen" },
  ],
  [
    { s: "Laptop", p: "Laptops" },
    { s: "Computer", p: "Computer" },
    { s: "Elektrogerät", p: "Elektrogeräte" },
  ],
  [
    { s: "Chemiker", p: "Chemiker" },
    { s: "Wissenschaftler", p: "Wissenschaftler" },
    { s: "Forscher", p: "Forscher" },
  ],
  [
    { s: "Buche", p: "Buchen" },
    { s: "Laubbaum", p: "Laubbäume" },
    { s: "Gehölz", p: "Gehölze" },
  ],
  [
    { s: "Violine", p: "Violinen" },
    { s: "Saiteninstrument", p: "Saiteninstrumente" },
    { s: "Musikinstrument", p: "Musikinstrumente" },
  ],
  [
    { s: "Forelle", p: "Forellen" },
    { s: "Fisch", p: "Fische" },
    { s: "Wirbeltier", p: "Wirbeltiere" },
  ],
  [
    { s: "Jurist", p: "Juristen" },
    { s: "Akademiker", p: "Akademiker" },
    { s: "Berufstätiger", p: "Berufstätige" },
  ],
];

interface SyllogismMode {
  p1: (s: Begriff, m: Begriff, p: Begriff) => string;
  p2: (s: Begriff, m: Begriff, p: Begriff) => string;
  conclusion: (s: Begriff, m: Begriff, p: Begriff) => string;
  name: string;
}

// "Alle X sind Y" → plural, "Kein X ist ein Y" → singular, "Einige X sind Y" → plural
const VALID_MODES: SyllogismMode[] = [
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind ${p.p}`,
    name: "Barbara",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Celarent",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darii",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Ferio",
  },
  {
    p1: (_s, m, p) => `Alle ${p.p} sind keine ${m.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Cesare",
  },
  {
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Alle ${s.p} sind keine ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Camestres",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darapti",
  },
  {
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Disamis",
  },
];

function generateWrongConclusions(s: Begriff, p: Begriff, correctConclusion: string): string[] {
  const allPossible = [
    `Alle ${s.p} sind ${p.p}`,
    `Einige ${s.p} sind ${p.p}`,
    `Alle ${s.p} sind keine ${p.p}`,
    `Einige ${s.p} sind keine ${p.p}`,
    `Alle ${p.p} sind ${s.p}`,
    `Einige ${p.p} sind ${s.p}`,
    `Alle ${p.p} sind keine ${s.p}`,
    `Einige ${p.p} sind keine ${s.p}`,
  ];
  return shuffle(allPossible.filter((c) => c !== correctConclusion));
}

export function generateSyllogism(difficulty: "leicht" | "mittel" | "schwer"): SyllogismQuestion {
  const tripel = BEGRIFFE_TRIPEL[randInt(0, BEGRIFFE_TRIPEL.length - 1)];
  const [s, m, p] = shuffle([...tripel]);
  const isNoneCorrect = difficulty === "schwer" ? Math.random() < 0.4 : Math.random() < 0.2;
  const mode =
    difficulty === "leicht"
      ? VALID_MODES[randInt(0, 2)]
      : VALID_MODES[randInt(0, VALID_MODES.length - 1)];

  const premise1 = mode.p1(s, m, p);
  const premise2 = mode.p2(s, m, p);
  const correctConclusion = mode.conclusion(s, m, p);
  const wrongConclusions = generateWrongConclusions(s, p, correctConclusion).slice(0, 4);

  let options: string[];
  let correctOption: number;

  if (isNoneCorrect) {
    options = [...wrongConclusions.slice(0, 4), "Keine der Schlussfolgerungen ist richtig"];
    correctOption = 4;
  } else {
    const insertIdx = randInt(0, 3);
    const finalWrong = wrongConclusions.slice(0, 4);
    finalWrong[insertIdx] = correctConclusion;
    options = [...finalWrong, "Keine der Schlussfolgerungen ist richtig"];
    correctOption = insertIdx;
  }

  return {
    id: `syl-gen-${premise1.slice(0, 15)}-${premise2.slice(0, 15)}`.replace(/\s+/g, "_"),
    premise1,
    premise2,
    options,
    correctOption,
    explanation: isNoneCorrect
      ? `Aus den gegebenen Prämissen lässt sich keine der angegebenen Schlussfolgerungen zwingend ableiten.`
      : `${mode.name}: Aus "${premise1}" und "${premise2}" folgt: "${correctConclusion}".`,
    difficulty,
  };
}

export function generateSyllogismSet(
  count: number,
  difficulty: "leicht" | "mittel" | "schwer"
): SyllogismQuestion[] {
  return Array.from({ length: count }, () => generateSyllogism(difficulty));
}

// =============================================================================
// IMPLIKATIONEN – Offizielle Beispiele vs. Trainings-Generator (strikt getrennt)
// =============================================================================
// Der Generator nutzt nur abstrakte Regeltypen, keine Inhalte der offiziellen Aufgaben.
// OFFICIAL_IMPLICATION_EXAMPLES wird nur in assertNotOfficialLike zum Abgleich gelesen.

/** Abstrakte Muster aus offiziellen Beispielen (nur Struktur, keine Inhalte). */
export type ImplicationPattern = {
  premise1Type: "Alle_X_sind_Y" | "Kein_X_ist_Y" | "Einige_X_sind_Y" | "Einige_X_sind_keine_Y";
  premise2Type: "Alle_X_sind_Y" | "Kein_X_ist_Y" | "Einige_X_sind_Y" | "Einige_X_sind_keine_Y";
  conclusionType:
    | "Alle_X_sind_Y"
    | "Einige_X_sind_Y"
    | "Einige_X_sind_keine_Y"
    | "Kein_X_ist_Y"
    | "E_keine_zwingend";
  ruleIds: number[]; // 1–5 (Goldene Regeln)
};

/** Extrahiert nur abstrakte Muster aus offiziellen Aufgaben – keine Texte, keine Begriffe. */
export function extractImplicationPatterns(
  official: readonly ImplikationTask[]
): ImplicationPattern[] {
  const patterns: ImplicationPattern[] = [];
  for (const t of official) {
    const p1 = getPremiseType(t.premise1);
    const p2 = getPremiseType(t.premise2);
    const concl = getConclusionType(t.options[t.correctAnswer] ?? "");
    if (p1 && p2 && concl) {
      patterns.push({
        premise1Type: p1,
        premise2Type: p2,
        conclusionType: concl,
        ruleIds: [...t.rulesApplied],
      });
    }
  }
  return patterns;
}

function getPremiseType(s: string): ImplicationPattern["premise1Type"] | null {
  if (
    /^Alle\s+.+\s+sind\s+.+\.?$/.test(s.trim()) ||
    /^Alle\s+.+\s+sind\s+keine\s+.+\.?$/.test(s.trim())
  ) {
    return s.includes("keine") ? "Alle_X_sind_Y" : "Alle_X_sind_Y"; // "Alle X sind keine Y" bleibt als Alle-Variante
  }
  if (
    /^Kein\s+.+\s+ist\s+ein\s+.+\.?$/.test(s.trim()) ||
    /^Alle\s+.+\s+sind\s+keine\s+.+/.test(s.trim())
  )
    return "Kein_X_ist_Y";
  if (/^Einige\s+.+\s+sind\s+keine\s+.+\.?$/.test(s.trim())) return "Einige_X_sind_keine_Y";
  if (/^Einige\s+.+\s+sind\s+.+\.?$/.test(s.trim())) return "Einige_X_sind_Y";
  return null;
}

function getConclusionType(s: string): ImplicationPattern["conclusionType"] | null {
  if (/^Keine der Schlussfolgerungen ist richtig./.test(s.trim())) return "E_keine_zwingend";
  if (/^Alle\s+.+\s+sind\s+.+\.?$/.test(s.trim()) && !s.includes("keine")) return "Alle_X_sind_Y";
  if (/^Kein\s+.+\s+ist\s+ein\s+.+\.?$/.test(s.trim())) return "Kein_X_ist_Y";
  if (/^Einige\s+.+\s+sind\s+keine\s+.+\.?$/.test(s.trim())) return "Einige_X_sind_keine_Y";
  if (/^Einige\s+.+\s+sind\s+.+\.?$/.test(s.trim())) return "Einige_X_sind_Y";
  return null;
}

/** Nur für Training: Begriffe, die in OFFICIAL_IMPLICATION_EXAMPLES nicht vorkommen. */
interface TrainingBegriff {
  s: string;
  p: string;
}
const TRAINING_TERM_TRIPELS: [TrainingBegriff, TrainingBegriff, TrainingBegriff][] = [
  [
    { s: "Kante", p: "Kanten" },
    { s: "Linie", p: "Linien" },
    { s: "Strecke", p: "Strecken" },
  ],
  [
    { s: "Möbelstück", p: "Möbelstücke" },
    { s: "Sitzgelegenheit", p: "Sitzgelegenheiten" },
    { s: "Sessel", p: "Sessel" },
  ],
  [
    { s: "Werkzeug", p: "Werkzeuge" },
    { s: "Gerät", p: "Geräte" },
    { s: "Hilfsmittel", p: "Hilfsmittel" },
  ],
  [
    { s: "Gewürz", p: "Gewürze" },
    { s: "Zutat", p: "Zutaten" },
    { s: "Pulver", p: "Pulver" },
  ],
  [
    { s: "Verbindung", p: "Verbindungen" },
    { s: "Route", p: "Routen" },
    { s: "Strecke", p: "Strecken" },
  ],
  [
    { s: "Fach", p: "Fächer" },
    { s: "Bereich", p: "Bereiche" },
    { s: "Disziplin", p: "Disziplinen" },
  ],
  [
    { s: "Rahmen", p: "Rahmen" },
    { s: "Struktur", p: "Strukturen" },
    { s: "Schema", p: "Schemata" },
  ],
  [
    { s: "Modul", p: "Module" },
    { s: "Komponente", p: "Komponenten" },
    { s: "Einheit", p: "Einheiten" },
  ],
  [
    { s: "Filter", p: "Filter" },
    { s: "Siebelement", p: "Siebelemente" },
    { s: "Barriere", p: "Barrieren" },
  ],
  [
    { s: "Katalysator", p: "Katalysatoren" },
    { s: "Stoff", p: "Stoffe" },
    { s: "Reaktant", p: "Reaktanten" },
  ],
  [
    { s: "Indikator", p: "Indikatoren" },
    { s: "Anzeiger", p: "Anzeiger" },
    { s: "Signal", p: "Signale" },
  ],
  // 15 new triplets for session variety
  [
    { s: "Fahrzeug", p: "Fahrzeuge" },
    { s: "Transportmittel", p: "Transportmittel" },
    { s: "Maschine", p: "Maschinen" },
  ],
  [
    { s: "Pflanze", p: "Pflanzen" },
    { s: "Organismus", p: "Organismen" },
    { s: "Lebewesen", p: "Lebewesen" },
  ],
  [
    { s: "Mineral", p: "Minerale" },
    { s: "Gestein", p: "Gesteine" },
    { s: "Kristall", p: "Kristalle" },
  ],
  [
    { s: "Frequenz", p: "Frequenzen" },
    { s: "Schwingung", p: "Schwingungen" },
    { s: "Welle", p: "Wellen" },
  ],
  [
    { s: "Instrument", p: "Instrumente" },
    { s: "Apparat", p: "Apparate" },
    { s: "Vorrichtung", p: "Vorrichtungen" },
  ],
  [
    { s: "Substanz", p: "Substanzen" },
    { s: "Material", p: "Materialien" },
    { s: "Werkstoff", p: "Werkstoffe" },
  ],
  [
    { s: "Faktor", p: "Faktoren" },
    { s: "Einfluss", p: "Einflüsse" },
    { s: "Bedingung", p: "Bedingungen" },
  ],
  [
    { s: "Quelle", p: "Quellen" },
    { s: "Ursprung", p: "Ursprünge" },
    { s: "Herkunft", p: "Herkünfte" },
  ],
  // 20 new triplets for broader domain coverage
  [
    { s: "Reptil", p: "Reptilien" },
    { s: "Eidechse", p: "Eidechsen" },
    { s: "Schlange", p: "Schlangen" },
  ],
  [
    { s: "Raubvogel", p: "Raubvögel" },
    { s: "Adler", p: "Adler" },
    { s: "Falke", p: "Falken" },
  ],
  [
    { s: "Zelle", p: "Zellen" },
    { s: "Gewebe", p: "Gewebe" },
    { s: "Organ", p: "Organe" },
  ],
  [
    { s: "Virus", p: "Viren" },
    { s: "Bakterium", p: "Bakterien" },
    { s: "Erreger", p: "Erreger" },
  ],
  [
    { s: "Theorie", p: "Theorien" },
    { s: "Hypothese", p: "Hypothesen" },
    { s: "Annahme", p: "Annahmen" },
  ],
  [
    { s: "Student", p: "Studenten" },
    { s: "Absolvent", p: "Absolventen" },
    { s: "Dozent", p: "Dozenten" },
  ],
  [
    { s: "Fluss", p: "Flüsse" },
    { s: "Gewässer", p: "Gewässer" },
    { s: "See", p: "Seen" },
  ],
  [
    { s: "Berg", p: "Berge" },
    { s: "Gipfel", p: "Gipfel" },
    { s: "Hügel", p: "Hügel" },
  ],
  [
    { s: "Programm", p: "Programme" },
    { s: "Software", p: "Software" },
    { s: "Anwendung", p: "Anwendungen" },
  ],
  [
    { s: "Prozessor", p: "Prozessoren" },
    { s: "Chip", p: "Chips" },
    { s: "Schaltkreis", p: "Schaltkreise" },
  ],
  [
    { s: "Obst", p: "Obstsorten" },
    { s: "Frucht", p: "Früchte" },
    { s: "Beere", p: "Beeren" },
  ],
  [
    { s: "Getreide", p: "Getreidesorten" },
    { s: "Korn", p: "Körner" },
    { s: "Weizen", p: "Weizensorten" },
  ],
  [
    { s: "Staat", p: "Staaten" },
    { s: "Nation", p: "Nationen" },
    { s: "Republik", p: "Republiken" },
  ],
  [
    { s: "Kontinent", p: "Kontinente" },
    { s: "Region", p: "Regionen" },
    { s: "Gebiet", p: "Gebiete" },
  ],
  [
    { s: "Melodie", p: "Melodien" },
    { s: "Lied", p: "Lieder" },
    { s: "Klang", p: "Klänge" },
  ],
  [
    { s: "Enzym", p: "Enzyme" },
    { s: "Protein", p: "Proteine" },
    { s: "Antikörper", p: "Antikörper" },
  ],
  [
    { s: "Brücke", p: "Brücken" },
    { s: "Tunnel", p: "Tunnel" },
    { s: "Passage", p: "Passagen" },
  ],
  [
    { s: "Gemälde", p: "Gemälde" },
    { s: "Skulptur", p: "Skulpturen" },
    { s: "Kunstwerk", p: "Kunstwerke" },
  ],
  [
    { s: "Vertrag", p: "Verträge" },
    { s: "Abkommen", p: "Abkommen" },
    { s: "Vereinbarung", p: "Vereinbarungen" },
  ],
  [
    { s: "Stern", p: "Sterne" },
    { s: "Planet", p: "Planeten" },
    { s: "Himmelskörper", p: "Himmelskörper" },
  ],
  // 65 diverse cross-domain triplets (terms within each triplet are logically unrelated)
  [
    { s: "Richter", p: "Richter" },
    { s: "Zeuge", p: "Zeugen" },
    { s: "Angeklagter", p: "Angeklagte" },
  ],
  [
    { s: "Pendler", p: "Pendler" },
    { s: "Vegetarier", p: "Vegetarier" },
    { s: "Sportler", p: "Sportler" },
  ],
  [
    { s: "Briefmarke", p: "Briefmarken" },
    { s: "Schlüssel", p: "Schlüssel" },
    { s: "Kalender", p: "Kalender" },
  ],
  [
    { s: "Schiedsrichter", p: "Schiedsrichter" },
    { s: "Trainer", p: "Trainer" },
    { s: "Zuschauer", p: "Zuschauer" },
  ],
  [
    { s: "Mieter", p: "Mieter" },
    { s: "Vermieter", p: "Vermieter" },
    { s: "Makler", p: "Makler" },
  ],
  [
    { s: "Argument", p: "Argumente" },
    { s: "Behauptung", p: "Behauptungen" },
    { s: "Widerspruch", p: "Widersprüche" },
  ],
  [
    { s: "Handwerker", p: "Handwerker" },
    { s: "Kunde", p: "Kunden" },
    { s: "Lieferant", p: "Lieferanten" },
  ],
  [
    { s: "Rätsel", p: "Rätsel" },
    { s: "Hinweis", p: "Hinweise" },
    { s: "Verdächtiger", p: "Verdächtige" },
  ],
  [
    { s: "Bürger", p: "Bürger" },
    { s: "Beamter", p: "Beamte" },
    { s: "Abgeordneter", p: "Abgeordnete" },
  ],
  [
    { s: "Prüfling", p: "Prüflinge" },
    { s: "Aufsicht", p: "Aufsichten" },
    { s: "Korrektor", p: "Korrektoren" },
  ],
  [
    { s: "Schachfigur", p: "Schachfiguren" },
    { s: "Spielbrett", p: "Spielbretter" },
    { s: "Würfel", p: "Würfel" },
  ],
  [
    { s: "Fenster", p: "Fenster" },
    { s: "Treppe", p: "Treppen" },
    { s: "Kamin", p: "Kamine" },
  ],
  [
    { s: "Erfindung", p: "Erfindungen" },
    { s: "Patent", p: "Patente" },
    { s: "Prototyp", p: "Prototypen" },
  ],
  [
    { s: "Journalist", p: "Journalisten" },
    { s: "Leser", p: "Leser" },
    { s: "Verleger", p: "Verleger" },
  ],
  [
    { s: "Passagier", p: "Passagiere" },
    { s: "Pilot", p: "Piloten" },
    { s: "Fluglotse", p: "Fluglotsen" },
  ],
  [
    { s: "Gewohnheit", p: "Gewohnheiten" },
    { s: "Vorurteil", p: "Vorurteile" },
    { s: "Überzeugung", p: "Überzeugungen" },
  ],
  [
    { s: "Sammler", p: "Sammler" },
    { s: "Händler", p: "Händler" },
    { s: "Gutachter", p: "Gutachter" },
  ],
  [
    { s: "Ereignis", p: "Ereignisse" },
    { s: "Ursache", p: "Ursachen" },
    { s: "Folge", p: "Folgen" },
  ],
  [
    { s: "Dirigent", p: "Dirigenten" },
    { s: "Solist", p: "Solisten" },
    { s: "Komponist", p: "Komponisten" },
  ],
  [
    { s: "Architekt", p: "Architekten" },
    { s: "Statiker", p: "Statiker" },
    { s: "Bauarbeiter", p: "Bauarbeiter" },
  ],
  [
    { s: "Fossil", p: "Fossilien" },
    { s: "Artefakt", p: "Artefakte" },
    { s: "Fundstück", p: "Fundstücke" },
  ],
  [
    { s: "Rezept", p: "Rezepte" },
    { s: "Vorschrift", p: "Vorschriften" },
    { s: "Anleitung", p: "Anleitungen" },
  ],
  [
    { s: "Übersetzer", p: "Übersetzer" },
    { s: "Autor", p: "Autoren" },
    { s: "Kritiker", p: "Kritiker" },
  ],
  [
    { s: "Versprechen", p: "Versprechen" },
    { s: "Drohung", p: "Drohungen" },
    { s: "Warnung", p: "Warnungen" },
  ],
  [
    { s: "Wähler", p: "Wähler" },
    { s: "Kandidat", p: "Kandidaten" },
    { s: "Wahlhelfer", p: "Wahlhelfer" },
  ],
  [
    { s: "Hafen", p: "Häfen" },
    { s: "Leuchtturm", p: "Leuchttürme" },
    { s: "Schleuse", p: "Schleusen" },
  ],
  [
    { s: "Semester", p: "Semester" },
    { s: "Vorlesung", p: "Vorlesungen" },
    { s: "Prüfung", p: "Prüfungen" },
  ],
  [
    { s: "Gläubiger", p: "Gläubiger" },
    { s: "Schuldner", p: "Schuldner" },
    { s: "Bürge", p: "Bürgen" },
  ],
  [
    { s: "Forscher", p: "Forscher" },
    { s: "Proband", p: "Probanden" },
    { s: "Gutachter", p: "Gutachter" },
  ],
  [
    { s: "Vulkan", p: "Vulkane" },
    { s: "Geysir", p: "Geysire" },
    { s: "Gletscher", p: "Gletscher" },
  ],
  [
    { s: "Paragraph", p: "Paragraphen" },
    { s: "Klausel", p: "Klauseln" },
    { s: "Satzung", p: "Satzungen" },
  ],
  [
    { s: "Pächter", p: "Pächter" },
    { s: "Erbe", p: "Erben" },
    { s: "Treuhänder", p: "Treuhänder" },
  ],
  [
    { s: "Expedition", p: "Expeditionen" },
    { s: "Entdeckung", p: "Entdeckungen" },
    { s: "Reisebericht", p: "Reiseberichte" },
  ],
  [
    { s: "Bibliothekar", p: "Bibliothekare" },
    { s: "Archivar", p: "Archivare" },
    { s: "Kurator", p: "Kuratoren" },
  ],
  [
    { s: "Hürde", p: "Hürden" },
    { s: "Anreiz", p: "Anreize" },
    { s: "Frist", p: "Fristen" },
  ],
  [
    { s: "Schüler", p: "Schüler" },
    { s: "Tutor", p: "Tutoren" },
    { s: "Schulleiter", p: "Schulleiter" },
  ],
  [
    { s: "Währung", p: "Währungen" },
    { s: "Anleihe", p: "Anleihen" },
    { s: "Aktie", p: "Aktien" },
  ],
  [
    { s: "Gärtner", p: "Gärtner" },
    { s: "Förster", p: "Förster" },
    { s: "Winzer", p: "Winzer" },
  ],
  [
    { s: "Grenze", p: "Grenzen" },
    { s: "Schwelle", p: "Schwellen" },
    { s: "Übergang", p: "Übergänge" },
  ],
  [
    { s: "Redner", p: "Redner" },
    { s: "Moderator", p: "Moderatoren" },
    { s: "Zuhörer", p: "Zuhörer" },
  ],
  [
    { s: "Lehrling", p: "Lehrlinge" },
    { s: "Geselle", p: "Gesellen" },
    { s: "Meister", p: "Meister" },
  ],
  [
    { s: "Manuskript", p: "Manuskripte" },
    { s: "Entwurf", p: "Entwürfe" },
    { s: "Skizze", p: "Skizzen" },
  ],
  [
    { s: "Käufer", p: "Käufer" },
    { s: "Verkäufer", p: "Verkäufer" },
    { s: "Vermittler", p: "Vermittler" },
  ],
  [
    { s: "Insel", p: "Inseln" },
    { s: "Halbinsel", p: "Halbinseln" },
    { s: "Archipel", p: "Archipele" },
  ],
  [
    { s: "Gewitter", p: "Gewitter" },
    { s: "Dürre", p: "Dürren" },
    { s: "Flut", p: "Fluten" },
  ],
  [
    { s: "Anwalt", p: "Anwälte" },
    { s: "Notar", p: "Notare" },
    { s: "Staatsanwalt", p: "Staatsanwälte" },
  ],
  [
    { s: "Steuerzahler", p: "Steuerzahler" },
    { s: "Rentner", p: "Rentner" },
    { s: "Selbstständiger", p: "Selbstständige" },
  ],
  [
    { s: "Denkmal", p: "Denkmäler" },
    { s: "Ruine", p: "Ruinen" },
    { s: "Festung", p: "Festungen" },
  ],
  [
    { s: "Gleichung", p: "Gleichungen" },
    { s: "Beweis", p: "Beweise" },
    { s: "Axiom", p: "Axiome" },
  ],
  [
    { s: "Regisseur", p: "Regisseure" },
    { s: "Schauspieler", p: "Schauspieler" },
    { s: "Drehbuchautor", p: "Drehbuchautoren" },
  ],
  [
    { s: "Satellit", p: "Satelliten" },
    { s: "Sonde", p: "Sonden" },
    { s: "Teleskop", p: "Teleskope" },
  ],
  [
    { s: "Pfand", p: "Pfänder" },
    { s: "Kaution", p: "Kautionen" },
    { s: "Bürgschaft", p: "Bürgschaften" },
  ],
  [
    { s: "Koch", p: "Köche" },
    { s: "Kellner", p: "Kellner" },
    { s: "Sommelier", p: "Sommeliers" },
  ],
  [
    { s: "Stiftung", p: "Stiftungen" },
    { s: "Verein", p: "Vereine" },
    { s: "Genossenschaft", p: "Genossenschaften" },
  ],
  [
    { s: "Kompass", p: "Kompasse" },
    { s: "Landkarte", p: "Landkarten" },
    { s: "Koordinate", p: "Koordinaten" },
  ],
  [
    { s: "Dolmetscher", p: "Dolmetscher" },
    { s: "Diplomat", p: "Diplomaten" },
    { s: "Konsul", p: "Konsuln" },
  ],
  [
    { s: "Apotheker", p: "Apotheker" },
    { s: "Optiker", p: "Optiker" },
    { s: "Zahntechniker", p: "Zahntechniker" },
  ],
  [
    { s: "Hypothek", p: "Hypotheken" },
    { s: "Kredit", p: "Kredite" },
    { s: "Zinssatz", p: "Zinssätze" },
  ],
  [
    { s: "Schornstein", p: "Schornsteine" },
    { s: "Dachrinne", p: "Dachrinnen" },
    { s: "Fundament", p: "Fundamente" },
  ],
  [
    { s: "Biologe", p: "Biologen" },
    { s: "Geologe", p: "Geologen" },
    { s: "Physiker", p: "Physiker" },
  ],
  [
    { s: "Verteidiger", p: "Verteidiger" },
    { s: "Stürmer", p: "Stürmer" },
    { s: "Torwart", p: "Torwarte" },
  ],
  [
    { s: "Praktikant", p: "Praktikanten" },
    { s: "Referendar", p: "Referendare" },
    { s: "Volontär", p: "Volontäre" },
  ],
  [
    { s: "Brunnen", p: "Brunnen" },
    { s: "Staudamm", p: "Staudämme" },
    { s: "Aquädukt", p: "Aquädukte" },
  ],
  [
    { s: "Phänomen", p: "Phänomene" },
    { s: "Paradoxon", p: "Paradoxa" },
    { s: "Anomalie", p: "Anomalien" },
  ],
  [
    { s: "Tresor", p: "Tresore" },
    { s: "Schließfach", p: "Schließfächer" },
    { s: "Vitrine", p: "Vitrinen" },
  ],
];

const MAX_ASSERT_RETRIES = 15;

/**
 * Prüft, ob eine Aufgabe zu ähnlich zu einer offiziellen ist.
 * Keine identischen Sätze, keine identischen Begriffe, keine identische Anordnung.
 */
export function assertNotOfficialLike(task: ImplikationTask): boolean {
  const a1 = task.premise1.toLowerCase();
  const a2 = task.premise2.toLowerCase();
  const taskWords = new Set(
    [...a1.split(/\s+/), ...a2.split(/\s+/), ...task.options.flatMap((o) => o.split(/\s+/))]
      .map((w) => w.replace(/[.,]/g, ""))
      .filter((w) => w.length > 2)
  );

  for (const o of OFFICIAL_IMPLICATION_EXAMPLES) {
    const o1 = o.premise1.toLowerCase();
    const o2 = o.premise2.toLowerCase();
    if (a1 === o1 && a2 === o2) return false;
    if (a1 === o2 && a2 === o1) return false;
    const oWords = new Set(
      [...o1.split(/\s+/), ...o2.split(/\s+/), ...o.options.flatMap((x) => x.split(/\s+/))]
        .map((w) => w.replace(/[.,]/g, ""))
        .filter((w) => w.length > 2)
    );
    const overlap = [...taskWords].filter((w) => oWords.has(w));
    if (overlap.length >= 4) return false;
    if (
      task.options.some(
        (opt, i) => o.options[i] && opt.toLowerCase().trim() === o.options[i].toLowerCase().trim()
      )
    ) {
      const sameCount = task.options.filter(
        (opt, i) => o.options[i] && opt.toLowerCase().trim() === o.options[i].toLowerCase().trim()
      ).length;
      if (sameCount >= 3) return false;
    }
  }
  return true;
}

/** Trainings-Syllogismen-Modi (nur Struktur, Inhalte aus TRAINING_TERM_TRIPELS). */
type TrainingSyllogismMode = {
  p1: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  p2: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  conclusion: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  name: string;
};

/** Ungültige Syllogismus-Modi: Prämissenkombinationen, aus denen KEIN zwingender Schluss folgt → E ist korrekt. */
type TrainingInvalidMode = {
  p1: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  p2: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  gridSubj: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  gridPred: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
  name: string;
  rulesApplied: number[];
  explanation: (s: TrainingBegriff, m: TrainingBegriff, p: TrainingBegriff) => string;
};

const TRAINING_INVALID_MODES: TrainingInvalidMode[] = [
  {
    // Rule 1: Einige + Einige → kein zwingender Schluss
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Einige-Einige",
    rulesApplied: [1],
    explanation: (s, m, p) =>
      `Zwei "einige"-Prämissen (Regel 1): Die Schnittmengen (${s.p} ∩ ${m.p}) und (${m.p} ∩ ${p.p}) können verschieden sein. Kein zwingender Schluss.`,
  },
  {
    // Rule 1: Einige + Einige-keine → kein zwingender Schluss
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind keine ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Einige-EinigeKeine",
    rulesApplied: [1],
    explanation: (s, m, p) =>
      `Zwei "einige"-Prämissen (Regel 1): Einige ${s.p} sind keine ${m.p} und Einige ${m.p} sind ${p.p} — über ${s.p} und ${p.p} lässt sich nichts ableiten.`,
  },
  {
    // Rule 2: Keine + Keine (gleicher Mittelbegriff) → kein zwingender Schluss
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind keine ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Keine-Keine",
    rulesApplied: [2],
    explanation: (s, m, p) =>
      `Zwei "keine"-Prämissen (Regel 2): ${s.p} ∩ ${m.p} = ∅ und ${m.p} ∩ ${p.p} = ∅, aber über ${s.p} und ${p.p} wird nichts ausgesagt.`,
  },
  {
    // Rule 2: Keine + Keine (andere Anordnung) → kein zwingender Schluss
    p1: (s, m) => `Alle ${s.p} sind keine ${m.p}`,
    p2: (_s, m, p) => `Alle ${p.p} sind keine ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Keine-Keine-2",
    rulesApplied: [2],
    explanation: (s, m, p) =>
      `Zwei "keine"-Prämissen (Regel 2): ${s.p} und ${m.p} sind disjunkt, ${p.p} und ${m.p} auch — über ${s.p} und ${p.p} ist nichts zwingend.`,
  },
  {
    // Einige-Keine crossover: Einige M sind P + Alle S sind keine M → kein zwingender Schluss
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind keine ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Einige-Keine-Crossover",
    rulesApplied: [1, 2],
    explanation: (s, m, p) =>
      `Einige ${m.p} sind ${p.p}, aber ${s.p} sind komplett von ${m.p} getrennt — über ${s.p} und ${p.p} lässt sich nichts ableiten.`,
  },
  {
    // Undistributed middle: Einige M sind P + Einige M sind S → kein zwingender Schluss
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${m.p} sind ${s.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Undistributed-Middle",
    rulesApplied: [1],
    explanation: (s, m, p) =>
      `Beide Prämissen sind partikulär (Regel 1): Einige ${m.p} sind ${p.p} und Einige ${m.p} sind ${s.p} — die Teilmengen von ${m.p} können disjunkt sein, kein zwingender Schluss über ${s.p} und ${p.p}.`,
  },
  {
    // Reversed universal: Alle P sind M + Alle S sind M → kein zwingender Schluss
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    gridSubj: (s) => s.p,
    gridPred: (_s, _m, p) => p.p,
    name: "Reversed-Universal",
    rulesApplied: [3],
    explanation: (s, m, p) =>
      `${p.p} und ${s.p} sind beide Teilmengen von ${m.p}, aber sie können sich überlappen oder disjunkt sein — über ${s.p} und ${p.p} ist nichts zwingend (unverteilter Mittelbegriff).`,
  },
];

const TRAINING_MODES: TrainingSyllogismMode[] = [
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind ${p.p}`,
    name: "Barbara",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Celarent",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darii",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Ferio",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darapti",
  },
  {
    p1: (_s, m, p) => `Einige ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Disamis",
  },
  {
    // Festino (Figure 2): Alle P sind keine M + Einige S sind M → Einige S sind keine P
    p1: (_s, m, p) => `Alle ${p.p} sind keine ${m.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Festino",
  },
  {
    // Baroco (Figure 2): Alle P sind M + Einige S sind keine M → Einige S sind keine P
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Einige ${s.p} sind keine ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Baroco",
  },
  {
    // Bocardo (Figure 3): Einige M sind keine P + Alle M sind S → Einige S sind keine P
    p1: (_s, m, p) => `Einige ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Bocardo",
  },
  {
    // Bramantip (Figure 4): Alle P sind M + Alle M sind S → Einige S sind P
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Bramantip",
  },
  {
    // Camenes (Figure 4): Alle P sind M + Alle M sind keine S → Alle S sind keine P
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Alle ${m.p} sind keine ${s.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Camenes",
  },
  {
    // Dimaris (Figure 4): Einige P sind M + Alle M sind S → Einige S sind P
    p1: (_s, m, p) => `Einige ${p.p} sind ${m.p}`,
    p2: (s, m) => `Alle ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Dimaris",
  },
  {
    // Fresison (Figure 3): Alle M sind keine P + Einige M sind S → Einige S sind keine P
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Einige ${m.p} sind ${s.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Fresison",
  },
];

/**
 * Compute which golden rules apply based on premise and conclusion content.
 * Rules: 1=Two "einige"→E, 2=Two "keine"→E, 3=No "keine" in premises→no "keine" in conclusion,
 * 4=One "keine" in premise→conclusion must have "keine", 5=One "einige"→conclusion must have "einige"
 */
function computeRulesApplied(premise1: string, premise2: string, conclusion: string): number[] {
  const rules: number[] = [];
  const p1HasKeine = /sind keine/.test(premise1);
  const p2HasKeine = /sind keine/.test(premise2);
  const p1HasEinige = /^Einige /.test(premise1) || /^„Einige /.test(premise1);
  const p2HasEinige = /^Einige /.test(premise2) || /^„Einige /.test(premise2);
  const conclusionHasKeine = /sind keine/.test(conclusion);
  const conclusionHasEinige = /^Einige /.test(conclusion) || /^„Einige /.test(conclusion);

  // Rule 3: no "keine" in premises → conclusion has no "keine"
  if (!p1HasKeine && !p2HasKeine && !conclusionHasKeine) rules.push(3);
  // Rule 4: one "keine" in premises → conclusion must have "keine"
  if ((p1HasKeine || p2HasKeine) && conclusionHasKeine) rules.push(4);
  // Rule 5: one "einige" in premises → conclusion must have "einige"
  if ((p1HasEinige || p2HasEinige) && conclusionHasEinige) rules.push(5);
  // Rule 3+5 combo: no "keine" + has "einige"
  if (
    !p1HasKeine &&
    !p2HasKeine &&
    !conclusionHasKeine &&
    conclusionHasEinige &&
    !rules.includes(5)
  )
    rules.push(5);

  return rules.length > 0 ? rules : [3];
}

/** MedAT-Stil: Optionen A–D bilden das systematische 4er-Gitter mit gleichem Subjekt+Prädikat, Position zufällig. */
function buildOptionGrid(subj: string, pred: string): [string, string, string, string] {
  const base: [string, string, string, string] = [
    `Alle ${subj} sind ${pred}.`,
    `Alle ${subj} sind keine ${pred}.`,
    `Einige ${subj} sind ${pred}.`,
    `Einige ${subj} sind keine ${pred}.`,
  ];
  // Shuffle A–D positions to eliminate answer-position bias (Fisher-Yates)
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  return base;
}

/** Extrahiert Subjekt und Prädikat aus einer Schlussfolgerung wie "Alle X sind (keine) Y". */
function extractSubjPred(conclusion: string): { subj: string; pred: string } | null {
  const m = conclusion.match(/^(?:Alle|Einige)\s+(.+?)\s+sind\s+(?:keine\s+)?(.+?)\.?$/);
  if (!m) return null;
  return { subj: m[1], pred: m[2] };
}

/**
 * Generiert eine Trainingsaufgabe Implikationen – nur Strukturtypen, andere Inhalte.
 * Darf keine Texte/Zahlen/Struktur/Lösung der offiziellen Beispiele kopieren.
 */
export function generateImplicationTrainingTask(difficulty: 1 | 2 | 3): ImplikationTask {
  for (let attempt = 0; attempt < MAX_ASSERT_RETRIES; attempt++) {
    const tripel = TRAINING_TERM_TRIPELS[randInt(0, TRAINING_TERM_TRIPELS.length - 1)];
    const [s, m, p] = shuffle([...tripel]);
    const useENone = difficulty >= 2 && Math.random() < (difficulty === 3 ? 0.45 : 0.25);

    if (useENone) {
      // Pick an invalid syllogism mode (no valid conclusion → E is correct)
      const invMode = TRAINING_INVALID_MODES[randInt(0, TRAINING_INVALID_MODES.length - 1)];
      const premise1 = invMode.p1(s, m, p);
      const premise2 = invMode.p2(s, m, p);
      const gridSubj = invMode.gridSubj(s, m, p);
      const gridPred = invMode.gridPred(s, m, p);
      const grid = buildOptionGrid(gridSubj, gridPred);
      const options: [string, string, string, string, string] = [
        ...grid,
        "Keine der Schlussfolgerungen ist richtig.",
      ];

      const task: ImplikationTask = {
        id: `imp-train-${premise1.slice(0, 15)}-${premise2.slice(0, 15)}`.replace(/\s+/g, "_"),
        premise1,
        premise2,
        options,
        correctAnswer: 4,
        explanation: invMode.explanation(s, m, p),
        difficulty,
        rulesApplied: invMode.rulesApplied,
      };

      if (!validateImplikationTask(task)) continue;
      if (!hasVisualSolutionForImplikationTask(task)) continue;
      if (assertNotOfficialLike(task)) return task;
      continue;
    }

    // Valid syllogism mode (one of A–D is correct)
    const mode =
      difficulty === 1
        ? TRAINING_MODES[randInt(0, 3)]
        : TRAINING_MODES[randInt(0, TRAINING_MODES.length - 1)];

    const premise1 = mode.p1(s, m, p);
    const premise2 = mode.p2(s, m, p);
    const correctConclusion = mode.conclusion(s, m, p);

    // MedAT-Stil: A–D = systematisches 4er-Gitter (Alle/Einige × sind/sind keine) mit gleichem Subjekt+Prädikat
    const parsed = extractSubjPred(correctConclusion);
    if (!parsed) continue;
    const grid = buildOptionGrid(parsed.subj, parsed.pred);

    // Find which grid position matches the correct conclusion
    const correctIdx = grid.findIndex(
      (g) => g.replace(/\.$/, "") === correctConclusion.replace(/\.$/, "")
    );
    if (correctIdx < 0) continue;

    const options: [string, string, string, string, string] = [
      ...grid,
      "Keine der Schlussfolgerungen ist richtig.",
    ];

    const task: ImplikationTask = {
      id: `imp-train-${premise1.slice(0, 15)}-${premise2.slice(0, 15)}`.replace(/\s+/g, "_"),
      premise1,
      premise2,
      options,
      correctAnswer: correctIdx,
      explanation: `${mode.name}: Aus den Prämissen folgt zwingend: „${correctConclusion}".`,
      difficulty,
      rulesApplied: computeRulesApplied(premise1, premise2, correctConclusion),
    };

    if (!validateImplikationTask(task)) continue;
    if (!hasVisualSolutionForImplikationTask(task)) continue;
    if (assertNotOfficialLike(task)) return task;
  }

  if (import.meta.env?.DEV) {
    console.warn("Generator erzeugt zu ähnliche Aufgaben – Muster anpassen");
  }
  return generateImplicationTrainingTaskFallback(difficulty);
}

function generateImplicationTrainingTaskFallback(difficulty: 1 | 2 | 3): ImplikationTask {
  for (let t = 0; t < 5; t++) {
    const tripel = TRAINING_TERM_TRIPELS[randInt(0, TRAINING_TERM_TRIPELS.length - 1)];
    const [s, m, p] = shuffle([...tripel]);
    const mode = TRAINING_MODES[randInt(0, TRAINING_MODES.length - 1)];
    const premise1 = mode.p1(s, m, p);
    const premise2 = mode.p2(s, m, p);
    const correctConclusion = mode.conclusion(s, m, p);
    const parsed = extractSubjPred(correctConclusion);
    if (!parsed) continue;
    const grid = buildOptionGrid(parsed.subj, parsed.pred);
    const correctIdx = grid.findIndex(
      (g) => g.replace(/\.$/, "") === correctConclusion.replace(/\.$/, "")
    );
    if (correctIdx < 0) continue;
    const task: ImplikationTask = {
      id: `imp-train-fb-${premise1.slice(0, 15)}-${premise2.slice(0, 15)}`.replace(/\s+/g, "_"),
      premise1,
      premise2,
      options: [...grid, "Keine der Schlussfolgerungen ist richtig."],
      correctAnswer: correctIdx,
      explanation: `Aus den Prämissen folgt: „${correctConclusion}".`,
      difficulty,
      rulesApplied: computeRulesApplied(premise1, premise2, correctConclusion),
    };
    if (validateImplikationTask(task) && hasVisualSolutionForImplikationTask(task)) return task;
  }
  const tripel = TRAINING_TERM_TRIPELS[0];
  const [s, m, p] = tripel;
  const mode = TRAINING_MODES[0];
  const premise1 = mode.p1(s, m, p);
  const premise2 = mode.p2(s, m, p);
  const correctConclusion = mode.conclusion(s, m, p);
  const parsed = extractSubjPred(correctConclusion);
  const grid = parsed ? buildOptionGrid(parsed.subj, parsed.pred) : buildOptionGrid(s.p, p.p);
  const correctIdx = grid.findIndex(
    (g) => g.replace(/\.$/, "") === correctConclusion.replace(/\.$/, "")
  );
  return {
    id: `imp-train-fb-last-${premise1.slice(0, 15)}-${premise2.slice(0, 15)}`.replace(/\s+/g, "_"),
    premise1,
    premise2,
    options: [...grid, "Keine der Schlussfolgerungen ist richtig."],
    correctAnswer: correctIdx >= 0 ? correctIdx : 0,
    explanation: `Aus den Prämissen folgt: „${correctConclusion}".`,
    difficulty,
    rulesApplied: [3],
  };
}

export function generateImplicationTrainingSet(
  count: number,
  difficulty: 1 | 2 | 3
): ImplikationTask[] {
  return Array.from({ length: count }, () => generateImplicationTrainingTask(difficulty));
}

/** Für Skript generate-wortfluessigkeit-1000: Wortlisten pro Schwierigkeit (nur Großbuchstaben, ohne ÄÖÜß). */
export { TRAINING_WF_WORDS, WORD_POOL_LEICHT, WORD_POOL_MITTEL, WORD_POOL_SCHWER };
