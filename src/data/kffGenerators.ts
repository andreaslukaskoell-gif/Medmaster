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

const FIRST_SYLLABLES = [
  "Ba",
  "Be",
  "Bi",
  "Bo",
  "Bu",
  "Da",
  "De",
  "Di",
  "Do",
  "Du",
  "Fa",
  "Fe",
  "Fi",
  "Fo",
  "Fu",
  "Ga",
  "Ge",
  "Gi",
  "Go",
  "Gu",
  "Ha",
  "He",
  "Hi",
  "Ho",
  "Hu",
  "Ka",
  "Ke",
  "Ki",
  "Ko",
  "Ku",
  "La",
  "Le",
  "Li",
  "Lo",
  "Lu",
  "Ma",
  "Me",
  "Mi",
  "Mo",
  "Mu",
  "Na",
  "Ne",
  "Ni",
  "No",
  "Nu",
  "Pa",
  "Pe",
  "Pi",
  "Po",
  "Pu",
  "Ra",
  "Re",
  "Ri",
  "Ro",
  "Ru",
  "Sa",
  "Se",
  "Si",
  "So",
  "Su",
  "Ta",
  "Te",
  "Ti",
  "To",
  "Tu",
  "Va",
  "Ve",
  "Vi",
  "Vo",
  "Vu",
  "Za",
  "Ze",
  "Zi",
  "Zo",
  "Zu",
];

const SECOND_SYLLABLES = [
  "ban",
  "ben",
  "bin",
  "bon",
  "bun",
  "dan",
  "den",
  "din",
  "don",
  "dun",
  "fan",
  "fen",
  "fin",
  "fon",
  "fun",
  "gan",
  "gen",
  "gin",
  "gon",
  "gun",
  "kan",
  "ken",
  "kin",
  "kon",
  "kun",
  "lan",
  "len",
  "lin",
  "lon",
  "lun",
  "man",
  "men",
  "min",
  "mon",
  "mun",
  "nan",
  "nen",
  "nin",
  "non",
  "nun",
  "pan",
  "pen",
  "pin",
  "pon",
  "pun",
  "ran",
  "ren",
  "rin",
  "ron",
  "run",
  "san",
  "sen",
  "sin",
  "son",
  "sun",
  "tan",
  "ten",
  "tin",
  "ton",
  "tun",
  "van",
  "ven",
  "vin",
  "von",
  "vun",
  "zan",
  "zen",
  "zin",
  "zon",
  "zun",
];

const ALLERGIES = [
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

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-"];

/** Für Gedächtnis Allergiepässe: MedAT-Stil A | B | AB | 0 (ohne Rhesus in Typ) */
const BLOOD_GROUPS_GM: AllergyPass["bloodGroup"][] = ["A", "B", "AB", "0"];

const MEDICATIONS = [
  "Metformin",
  "Levothyroxin",
  "Amlodipin",
  "Omeprazol",
  "Simvastatin",
  "Ibuprofen",
  "Pantoprazol",
  "Metoprolol",
  "Losartan",
  "Gabapentin",
  "Sertralin",
  "Montelukast",
  "Prednisolon",
  "Insulin",
  "ASS 100",
  "Bisoprolol",
  "Ramipril",
  "Allopurinol",
  "Diazepam",
  "L-Thyroxin",
];

function generateName(): string {
  const s1 = FIRST_SYLLABLES[randInt(0, FIRST_SYLLABLES.length - 1)];
  const s2 = SECOND_SYLLABLES[randInt(0, SECOND_SYLLABLES.length - 1)];
  return s1 + s2;
}

function generateDate(): string {
  const day = randInt(1, 28).toString().padStart(2, "0");
  const month = randInt(1, 12).toString().padStart(2, "0");
  const year = randInt(1960, 2005);
  return `${day}.${month}.${year}`;
}

function generateAusweisnummer(): string {
  return randInt(10000, 99999).toString();
}

export function generateAllergyCards(count: number = 8): AllergyCard[] {
  const usedNames = new Set<string>();
  const cards: AllergyCard[] = [];

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
      blutgruppe: BLOOD_GROUPS[randInt(0, BLOOD_GROUPS.length - 1)],
      allergien,
      ausweisnummer: generateAusweisnummer(),
      land: COUNTRIES[randInt(0, COUNTRIES.length - 1)],
      medikamente: Math.random() > 0.5,
    });
  }

  return cards;
}

export function generateMemoryQuestions(
  cards: AllergyCard[],
  count: number = 25
): MemoryQuestion[] {
  const questions: MemoryQuestion[] = [];
  const questionGenerators = [
    // Name → Blutgruppe
    (card: AllergyCard) => ({
      text: `Welche Blutgruppe hat ${card.name}?`,
      correct: card.blutgruppe,
      pool: BLOOD_GROUPS,
      type: "name-blutgruppe",
    }),
    // Name → Allergie
    (card: AllergyCard) => ({
      text: `Gegen was ist ${card.name} allergisch?`,
      correct: card.allergien[0],
      pool: ALLERGIES,
      type: "name-allergie",
    }),
    // Name → Land
    (card: AllergyCard) => ({
      text: `Aus welchem Land kommt ${card.name}?`,
      correct: card.land,
      pool: COUNTRIES,
      type: "name-land",
    }),
    // Name → Geburtsdatum
    (card: AllergyCard) => ({
      text: `Wann wurde ${card.name} geboren?`,
      correct: card.geburtsdatum,
      pool: cards.map((c) => c.geburtsdatum),
      type: "name-geburtsdatum",
    }),
    // Name → Ausweisnummer
    (card: AllergyCard) => ({
      text: `Wie lautet die Ausweisnummer von ${card.name}?`,
      correct: card.ausweisnummer,
      pool: cards.map((c) => c.ausweisnummer),
      type: "name-ausweisnummer",
    }),
    // Name → Medikamente
    (card: AllergyCard) => ({
      text: `Nimmt ${card.name} regelmäßig Medikamente ein?`,
      correct: card.medikamente ? "Ja" : "Nein",
      pool: ["Ja", "Nein"],
      type: "name-medikamente",
    }),
    // Ausweisnummer → Name
    (card: AllergyCard) => ({
      text: `Wem gehört die Ausweisnummer ${card.ausweisnummer}?`,
      correct: card.name,
      pool: cards.map((c) => c.name),
      type: "ausweisnummer-name",
    }),
    // Blutgruppe → Name (who has this blood type)
    (card: AllergyCard) => ({
      text: `Wer hat die Blutgruppe ${card.blutgruppe}?`,
      correct: card.name,
      pool: cards.map((c) => c.name),
      type: "blutgruppe-name",
    }),
  ];

  const usedCombinations = new Set<string>();

  while (questions.length < count) {
    const card = cards[randInt(0, cards.length - 1)];
    const genIdx = randInt(0, questionGenerators.length - 1);
    const combo = `${card.id}-${genIdx}`;

    if (usedCombinations.has(combo)) continue;
    usedCombinations.add(combo);

    const gen = questionGenerators[genIdx](card);
    const wrongOptions = shuffle(gen.pool.filter((o) => o !== gen.correct)).slice(0, 4);
    const options = shuffle([gen.correct, ...wrongOptions]).slice(0, 5);

    // Ensure correct answer is in options
    if (!options.includes(gen.correct)) {
      options[options.length - 1] = gen.correct;
    }

    questions.push({
      id: `mem-gen-${questions.length + 1}`,
      text: gen.text,
      options: shuffle(options),
      correctAnswer: gen.correct,
      questionType: gen.type,
    });
  }

  return questions;
}

// --- GEDAECHTNIS ALLERGIEPAESSE (MedAT-Stil) ---

const OPTION_E_LABEL = "Keine der Antwortmöglichkeiten ist richtig.";

/** Ausweisnummer: immer genau 5 Ziffern (MedAT-Stil). */
function generatePassportNumber(): string {
  return randInt(10000, 99999).toString();
}

/** Generiert 6–10 realistische Allergiepässe für Training (niemals für offizielle Beispiele). */
export function generateAllergyPasses(count: number): AllergyPass[] {
  const usedNames = new Set<string>();
  const usedPassportNumbers = new Set<string>();
  const passes: AllergyPass[] = [];

  for (let i = 0; i < count; i++) {
    let name = generateName();
    while (usedNames.has(name)) name = generateName();
    usedNames.add(name);

    let passportNumber = generatePassportNumber();
    while (usedPassportNumbers.has(passportNumber)) passportNumber = generatePassportNumber();
    usedPassportNumbers.add(passportNumber);

    const numAllergies = randInt(1, 3);
    const allergien = shuffle([...ALLERGIES]).slice(0, numAllergies);

    const numMeds = randInt(0, 2);
    const medications = numMeds === 0 ? [] : shuffle([...MEDICATIONS]).slice(0, numMeds);

    passes.push({
      id: `gm-pass-${i + 1}-${Date.now()}`,
      name,
      birthdate: generateDate(),
      bloodGroup: BLOOD_GROUPS_GM[randInt(0, BLOOD_GROUPS_GM.length - 1)],
      medications,
      allergies: allergien,
      passportNumber,
      country: COUNTRIES[randInt(0, COUNTRIES.length - 1)],
      photo: "", // Platzhalter – UI zeigt Silhouette
    });
  }

  return passes;
}

/** Erzeugt 25 Fragen zu den gegebenen Pässen; A–E, E manchmal korrekt. */
export function generateGedaechtnisQuestionsFromPasses(
  passes: AllergyPass[],
  count: number = 25
): GedaechtnisQuestion[] {
  const questions: GedaechtnisQuestion[] = [];
  const usedCombos = new Set<string>();
  const allMeds = new Set(passes.flatMap((x) => x.medications));
  const medsNotUsed = MEDICATIONS.filter((m) => !allMeds.has(m));

  const builders: Array<
    (p: AllergyPass) => { question: string; correct: string; pool: string[]; allowE?: boolean }
  > = [
    (p) => ({
      question: `Wann hat ${p.name} Geburtstag?`,
      correct: p.birthdate,
      pool: passes.map((x) => x.birthdate),
    }),
    (p) => ({
      question: `Welche Blutgruppe hat ${p.name}?`,
      correct: p.bloodGroup,
      pool: BLOOD_GROUPS_GM as unknown as string[],
    }),
    (p) => ({
      question: `Welche Allergie hat die Person mit Blutgruppe ${p.bloodGroup}?`,
      correct: p.allergies[0] ?? "",
      pool: [...new Set(passes.flatMap((x) => x.allergies))],
    }),
    (p) => ({
      question: `Welche Person nimmt das Medikament ${p.medications[0] ?? "Unbekannt"}?`,
      correct: p.medications.length > 0 ? p.name : "",
      pool: passes.map((x) => x.name),
      allowE: true,
    }),
    (p) => ({
      question: `Welche Ausweisnummer gehört zu ${p.name}?`,
      correct: p.passportNumber,
      pool: passes.map((x) => x.passportNumber),
    }),
    (p) => ({
      question: `Aus welchem Land stammt ${p.name}?`,
      correct: p.country,
      pool: [...COUNTRIES],
    }),
    (p) => ({
      question: `Wem gehört die Ausweisnummer ${p.passportNumber}?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
    }),
    (p) => ({
      question: `Wer ist allergisch gegen ${p.allergies[0]}?`,
      correct: p.name,
      pool: passes.map((x) => x.name),
    }),
    (p) => ({
      question: `Welche Medikamente nimmt ${p.name}?`,
      correct: p.medications.length > 0 ? p.medications.join(", ") : "Keine",
      pool: ["Keine", ...passes.flatMap((x) => x.medications).filter((m) => m)].filter(Boolean),
      allowE: true,
    }),
  ];

  let attempts = 0;
  const maxAttempts = count * 4;

  while (questions.length < count && attempts < maxAttempts) {
    attempts++;
    const p = passes[randInt(0, passes.length - 1)];
    const builderIdx = randInt(0, builders.length - 1);
    const key = `${p.id}-${builderIdx}-${questions.length}`;
    if (usedCombos.has(key)) continue;
    usedCombos.add(key);

    const b = builders[builderIdx](p);
    const wrongPool = b.pool.filter((x) => x !== b.correct);
    const useE =
      b.allowE &&
      Math.random() < 0.15 &&
      (builderIdx === 3 ? medsNotUsed.length > 0 : wrongPool.length >= 4);

    let questionText = b.question;
    const correctVal = b.correct;
    let options: string[];
    let correctIndex: number;

    if (useE && builderIdx === 3 && medsNotUsed.length > 0) {
      const fakeMed = medsNotUsed[randInt(0, medsNotUsed.length - 1)];
      questionText = `Welche Person nimmt das Medikament ${fakeMed}?`;
      const fourNames = shuffle(passes.map((x) => x.name)).slice(0, 4);
      options = shuffle([...fourNames, OPTION_E_LABEL]);
      correctIndex = 4;
    } else if (useE && wrongPool.length >= 4) {
      const wrong = shuffle(wrongPool).slice(0, 4);
      options = shuffle([...wrong, OPTION_E_LABEL]);
      correctIndex = 4;
    } else {
      if (!correctVal && correctVal !== "Keine") continue;
      const wrong = shuffle(wrongPool).slice(0, 4);
      options = shuffle([b.correct, ...wrong].slice(0, 5));
      if (!options.includes(b.correct)) options[4] = b.correct;
      correctIndex = options.indexOf(b.correct);
      if (correctIndex < 0) continue;
    }

    questions.push({
      id: `gm-q-${questions.length + 1}-${Date.now()}`,
      question: questionText,
      options,
      correctIndex,
    });
  }

  return questions;
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
  "WOLKEN",
  "STEINE",
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
  "MÜNZE",
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
  "HAFER",
  "GERSTE",
  "MALZ",
  "HONIG",
  "ZUCKER",
  "SALZ",
  "PFEFFER",
  "ESSIG",
  "SAHNE",
  "BUTTER",
  "MEHL",
  "TEIG",
  "SUPPE",
  "BRATEN",
  "SOSSE",
  "SENF",
  "WURST",
  "SPECK",
];

const WORD_POOL_MITTEL = [
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
  "WINDMÜHLE",
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
  "FLUSSTIER",
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
  "KOPFHÖRER",
  "FERNSEHER",
  "STAUBSAUGER",
  "KÜHLSCHRANK",
  "WASCHBECKEN",
  "BADEWANNE",
  "HANDTASCHE",
  "RUCKSACK",
  "GELDBEUTEL",
  "SCHLÜSSEL",
  "TÜRKLINKE",
  "FENSTERBRETT",
  "DACHRINNE",
  "SCHORNSTEIN",
  "KACHELOFEN",
  "TREPPENHAUS",
  "HAUSFLUR",
  "GARDEROBE",
  "SCHUHBANK",
  "KLEIDERBÜGEL",
  "WÄSCHEKORB",
  "BÜGELEISEN",
  "NÄHNADEL",
  "STRICKZEUG",
  "KOCHBUCH",
  "BACKBLECH",
  "SALATSCHÜSSEL",
  "SUPPENTOPF",
  "BROTKRUSTE",
  "MILCHKANNE",
  "ZUCKERDOSE",
  "PFEFFERSTREUER",
  "OBSTKORB",
  "GEMÜSEBEET",
  "BLUMENTOPF",
  "GIESSKANNE",
  "RASENMÄHER",
  "GARTENZAUN",
  "VOGELHAUS",
  "FUTTERSTELLE",
  "HUNDEHÜTTE",
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
  "GÄNSEBLÜMCHEN",
  "KRÄUTERBEET",
  "HEILPFLANZE",
  "BRENNNESSEL",
  "LÖWENZAHN",
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
  "KRÄHENNEST",
  "STORCHENNEST",
  "FISCHREIHER",
  "EISVOGEL",
  "ZAUNKÖNIG",
  "GOLDFISCH",
  "FORELLENZUCHT",
  "KARPFENTEICH",
];

const WORD_POOL_SCHWER = [
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
  "GRUNDSTÜCK",
  "WELTMEISTERSCHAFT",
  "PFLICHTBEWUSST",
  "STREITGESPRÄCH",
  "ZWISCHENPRÜFUNG",
  "DURCHSCHNITT",
  "SCHUTZIMPFUNG",
  "GRENZÜBERGANG",
  "NACHBARSCHAFT",
  "TRINKWASSER",
  "LICHTGESCHWINDIGKEIT",
  "SELBSTBEWUSSTSEIN",
  "HANDLUNGSFADEN",
  "VERANTWORTUNG",
  "GESUNDHEITSWESEN",
  "AUFGABENSTELLUNG",
  "FRIEDENSVERTRAG",
  "REGENWALDFLASCHE",
  "WINTERSONNENWENDE",
  "BERUFSERFAHRUNG",
  "SCHWIERIGKEITSGRAD",
  "FORTPFLANZUNG",
  "GEBIRGSLANDSCHAFT",
  "WERKZEUGKASTEN",
  "NACHMITTAGSKAFFEE",
  "FRÜHLINGSBEGINN",
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
  "FUSSGÄNGERZONE",
  "KREISVERKEHR",
  "AUTOBAHNAUFFAHRT",
  "PARKPLATZSUCHE",
  "FÜHRERSCHEINPRÜFUNG",
  "FAHRERLAUBNIS",
  "VERKEHRSKONTROLLE",
  "GESCHÄFTSFÜHRER",
  "HANDELSREGISTER",
  "STEUERERKLÄRUNG",
  "BUCHHALTUNG",
  "JAHRESABSCHLUSS",
  "GEWINNBETEILIGUNG",
  "ARBEITGEBER",
  "ARBEITNEHMER",
  "BETRIEBSVERSAMMLUNG",
  "GEWERKSCHAFTSBUND",
  "TARIFVERHANDLUNG",
  "KÜNDIGUNGSSCHUTZ",
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
  "PRÜFUNGSORDNUNG",
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
  "SICHERHEITSLÜCKE",
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
  "SACHVERSTÄNDIGER",
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
  "RÖNTGENAUFNAHME",
  "COMPUTERTOMOGRAPHIE",
  "MAGNETRESONANZTOMOGRAPHIE",
  "ULTRASCHALLGERÄT",
  "HERZSCHRITTMACHER",
  "ORGANTRANSPLANTATION",
  "KNOCHENBRUCHBEHANDLUNG",
  "ZAHNFLEISCHENTZÜNDUNG",
  "BINDEHAUTENTZÜNDUNG",
  "MITTELOHRENTZÜNDUNG",
  "LUNGENENTZÜNDUNG",
  "BLINDDARMENTZÜNDUNG",
  "BAUCHSPEICHELDRÜSE",
  "SCHILDDRÜSENUNTERSUCHUNG",
  "BLUTGERINNUNGSSTÖRUNG",
  "STOFFWECHSELKRANKHEIT",
  "NAHRUNGSMITTELUNVERTRÄGLICHKEIT",
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
  "KLIMAERWÄRMUNG",
  "UMWELTVERSCHMUTZUNG",
  "NATURSCHUTZGEBIET",
  "TRINKWASSERAUFBEREITUNG",
  "MÜLLVERBRENNUNGSANLAGE",
  "RECYCLINGVERFAHREN",
  "ENERGIEVERSORGUNG",
  "STROMVERBRAUCH",
  "WÄRMEPUMPENHEIZUNG",
  "SONNENKRAFTWERK",
  "WINDKRAFTANLAGE",
  "WASSERKRAFTWERK",
  "KERNKRAFTWERK",
  "KOHLEKRAFTWERK",
  "ENERGIESPEICHERTECHNIK",
  "FORSCHUNGSZENTRUM",
  "ENTWICKLUNGSABTEILUNG",
  "QUALITÄTSKONTROLLE",
  "PRODUKTIONSSTÄTTE",
  "LIEFERKETTENPROBLEM",
  "LAGERVERWALTUNG",
  "KUNDENZUFRIEDENHEIT",
  "MARKTFORSCHUNG",
  "WERBUNGSKOSTEN",
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

const ALL_LETTERS = "ABCDEFGHIJKLMNOPRSTUVWZ".split("");

export function generateWortflüssigkeit(
  difficulty: "leicht" | "mittel" | "schwer"
): WortflüssigkeitQuestion {
  const pool =
    difficulty === "leicht"
      ? WORD_POOL_LEICHT
      : difficulty === "mittel"
        ? WORD_POOL_MITTEL
        : WORD_POOL_SCHWER;

  const word = pool[randInt(0, pool.length - 1)];
  const scrambled = scrambleWord(word);
  const correctFirst = word[0];

  // Generate 4 wrong first letters
  const wrongLetters = shuffle(ALL_LETTERS.filter((l) => l !== correctFirst)).slice(0, 4);
  const options = shuffle([correctFirst, ...wrongLetters]);

  return {
    id: `wf-gen-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    scrambled,
    correctWord: word,
    options,
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
 * Buchstabenmenge = Lösungswort; Optionen nur Buchstaben aus dem Wort oder "-". */
const TRAINING_WF_WORDS: Record<1 | 2 | 3, string[]> = {
  1: [
    "HAUS",
    "BAUM",
    "HUND",
    "TIER",
    "ARZT",
    "BLUT",
    "HERZ",
    "MOND",
    "BILD",
    "WAND",
    "DACH",
    "GELD",
    "RING",
    "BERG",
    "TUCH",
    "WORT",
    "SEIL",
    "HAND",
    "GOLD",
    "BALL",
    "MAUS",
    "REIS",
    "SALZ",
    "HAUT",
    "NASE",
    "OFEN",
    "TOPF",
    "BROT",
    "MILCH",
    "LAMPE",
    "STUHL",
    "TISCH",
    "STERN",
    "KRAFT",
    "BRIEF",
    "STEIN",
    "GABEL",
    "NADEL",
    "KERZE",
    "BIRNE",
    "WOLKE",
    "BLUME",
    "FARBE",
    "KARTE",
    "ORGAN",
    "LEBER",
    "LUNGE",
    "NIERE",
    "ZELLE",
    "GEIST",
    "SONNE",
    "REGEN",
    "FEDER",
    "DRAHT",
    "KOHLE",
    "SUPPE",
    "SAHNE",
    "KNOPF",
    "GRUND",
    "PFERD",
    "KATZE",
    "FLORA",
    "STURM",
    "VOGEL",
    "PILZ",
    "ROSE",
  ],
  2: [
    "GARTEN",
    "SCHULE",
    "KIRCHE",
    "WASSER",
    "BRILLE",
    "PFLEGE",
    "FENSTER",
    "MESSER",
    "KISSEN",
    "BALKON",
    "KAFFEE",
    "ZUCKER",
    "FORMEN",
    "FLIEGE",
    "SOMMER",
    "WINTER",
    "FRUCHT",
    "KELLER",
    "FINGER",
    "MUTTER",
    "BRUDER",
    "STANGE",
    "MAGNET",
    "PLATTE",
    "FELSEN",
    "MANTEL",
    "TELLER",
    "DECKEL",
    "BREMSE",
    "BECHER",
    "SYMPTOM",
    "FIEBER",
    "RISIKO",
    "CHANCE",
    "FLASCHE",
    "PFLICHT",
    "KNOCHEN",
    "SKELETT",
    "TROPFEN",
    "SCHMERZ",
    "PATIENT",
    "THEORIE",
    "WIRKUNG",
    "URSACHE",
    "HEILUNG",
    "STEMPEL",
    "SCHRANK",
    "STIEFEL",
    "PROTEIN",
    "NAHRUNG",
    "RAHMEN",
    "BILDUNG",
    "AMPERE",
  ],
  3: [
    "DIAGNOSE",
    "OPERATION",
    "KRANKHEIT",
    "THERAPIE",
    "ANATOMIE",
    "MATHEMATIK",
    "VERDAUUNG",
    "KREISLAUF",
    "CHROMOSOM",
    "BLUTDRUCK",
    "SAUERSTOFF",
    "STICKSTOFF",
    "KOHLENSTOFF",
    "MAGNETFELD",
    "SCHWERKRAFT",
    "EVOLUTION",
    "MUTATION",
    "INFEKTION",
    "MEDIKAMENT",
    "ANTIBIOTIKA",
    "CHIRURGIE",
    "NEUROLOGIE",
    "KARDIOLOGIE",
    "BIOCHEMIE",
    "ORGANISMUS",
    "PATHOLOGIE",
    "PHARMAZIE",
    "ZELLKERN",
    "REAKTION",
    "GLEICHUNG",
    "SEHKRAFT",
    "BLUTZUCKER",
    "CHOLESTERIN",
    "THROMBOSE",
    "HYPOTHESE",
    "STATISTIK",
    "PARAMETER",
    "INSTRUMENT",
    "DIMENSION",
    "FREQUENZ",
    "AMPLITUDE",
    "FORSCHUNG",
    "BIBLIOTHEK",
    "UNIVERSUM",
    "TEMPERATUR",
    "EXPERIMENT",
    "BEHANDLUNG",
    "SPANNUNG",
    "KRANKENHAUS",
    "WISSENSCHAFT",
    "PHILOSOPHIE",
    "NERVENSYSTEM",
    "GLEICHGEWICHT",
  ],
};

const WF_MAX_RETRIES = 5;

/** Alle Wörter, die als Lösung in Frage kommen (Lexikon für Solver/Validator). */
function getWFLexicon(): string[] {
  const set = new Set<string>();
  for (const d of [1, 2, 3] as const) {
    for (const w of TRAINING_WF_WORDS[d]) set.add(w.toUpperCase());
  }
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
 * Validator Wortflüssigkeit: Genau 1 Wort aus dem Lexikon bildbar, Lösung stimmt, Optionen nur Buchstaben aus dem Wort.
 * Qualitäts-Gate: keine Mehrdeutigkeit, keine falsche Lösung.
 * @param lexiconOverride Wenn gesetzt (z. B. [solutionWord] bei Lexikon-Aufgaben), wird nur dieses Lexikon verwendet – erlaubt alle Lexikon-Wörter auch bei Anagrammen im Gesamtlexikon.
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
  const letterSet = new Set(task.letters.map((c) => c.toUpperCase()));
  for (let i = 0; i < 5; i++) {
    const opt = task.options[i];
    if (opt === "-") continue;
    if (!letterSet.has(opt.toUpperCase())) return false;
  }
  if (task.options.length !== 5) return false;
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
 * Erzeugt genau eine WordFluencyTask aus einem Lexikon-Wort (deterministisch).
 * Liefert null, wenn das Wort zu wenige verschiedene Buchstaben hat (< 2) oder offiziell ist.
 */
export function generateWordFluencyTaskFromWord(
  word: WortfluessigkeitWord
): WordFluencyTask | null {
  const solution = word.solution.toUpperCase();
  const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));
  if (officialWords.has(solution)) return null;

  const lettersInWord = [...new Set(solution.split(""))];
  if (lettersInWord.length < 2) return null; // mind. 2: 1 korrekt + 1 falsch (+ "-" und ggf. Wiederholungen für 5 Optionen)

  const letters = shuffleWithSeed(solution.split(""), word.id);
  const correctFirst = solution[0]!;
  const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
  const wrongLetters = shuffleWithSeed(wrongPool, word.id + "-wrong").slice(0, 3);
  // Immer 5 Optionen: 4 Buchstaben (1 korrekt + 3 falsch, ggf. wiederholt) + "-" am Ende. correctIndex nur 0–3.
  const optionBase =
    wrongLetters.length >= 3
      ? [correctFirst, ...wrongLetters]
      : wrongLetters.length === 2
        ? [correctFirst, ...wrongLetters, wrongLetters[0]!]
        : [correctFirst, ...wrongLetters, wrongLetters[0]!, wrongLetters[0]!];
  const options = [...shuffleWithSeed(optionBase, word.id + "-opt"), "-"];
  if (options.length !== 5) return null;
  const correctIndex = options.indexOf(correctFirst);
  if (correctIndex === 4) return null; // Korrekter Buchstabe darf nicht auf "-"-Position (E) landen

  const task: WordFluencyTask = {
    id: word.id,
    letters,
    options,
    correctIndex,
    solutionWord: solution,
    explanation: `Das Wort lautet „${solution}" und beginnt mit „${correctFirst}".`,
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
 * Generiert eine Wortflüssigkeit-Trainingsaufgabe.
 * Nutzt nur TRAINING_WF_WORDS; kein Wort aus OFFICIAL_WF_EXAMPLES.
 */
export function generateWordFluencyTask(difficulty: 1 | 2 | 3): WordFluencyTask {
  const pool = TRAINING_WF_WORDS[difficulty];
  const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));
  const allowed = pool.filter((w) => !officialWords.has(w.toUpperCase()));
  if (allowed.length === 0) {
    if (import.meta.env?.DEV) {
      console.warn("WF-Generator: Keine Wörter mehr verfügbar – Wortliste prüfen");
    }
    return generateWordFluencyTaskFallback(difficulty);
  }

  for (let attempt = 0; attempt < WF_MAX_RETRIES; attempt++) {
    const word = allowed[randInt(0, allowed.length - 1)].toUpperCase();
    const letters = word.split("");
    const lettersInWord = [...new Set(letters)];
    if (lettersInWord.length < 5) continue; // mind. 5 verschiedene Buchstaben: 1 korrekt + 4 Optionen (oder 4 Falsche + "-")
    const shuffled = shuffle([...letters]);
    const correctFirst = word[0];
    const useNone = difficulty === 3 && Math.random() < 0.25;

    // Nur Buchstaben, die im Wort vorkommen, als Antwortoptionen – sonst macht die Aufgabe keinen Sinn
    const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
    const wrongLetters = shuffle(wrongPool).slice(0, 4);

    let options: string[];
    let correctIndex: number;
    if (useNone) {
      options = [...wrongLetters, "-"];
      correctIndex = 4;
    } else {
      const mixed = shuffle([correctFirst, ...wrongLetters]);
      options = [...mixed, "-"];
      correctIndex = mixed.indexOf(correctFirst);
    }

    const task: WordFluencyTask = {
      id: `wf-train-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      letters: shuffled,
      options,
      correctIndex,
      solutionWord: word,
      explanation: useNone
        ? "Keines der angegebenen Buchstaben ist der korrekte Anfangsbuchstabe des Lösungswortes."
        : `Das Wort lautet „${word}" und beginnt mit „${correctFirst}".`,
      difficulty,
    };

    if (!validateWordFluencyTask(task)) continue;
    if (!assertNotOfficialLikeWordFluency(task)) continue;
    return task;
  }

  if (import.meta.env?.DEV) {
    console.warn("WF-Generator erzeugt zu ähnliche Aufgaben – Wortliste/Logik prüfen");
  }
  return generateWordFluencyTaskFallback(difficulty);
}

function generateWordFluencyTaskFallback(difficulty: 1 | 2 | 3): WordFluencyTask {
  const pool = TRAINING_WF_WORDS[difficulty];
  const withEnoughLetters = pool.filter((w) => new Set(w.toUpperCase().split("")).size >= 4);
  const usePool = withEnoughLetters.length > 0 ? withEnoughLetters : pool;
  for (let tryCount = 0; tryCount < 10; tryCount++) {
    const word = usePool[randInt(0, usePool.length - 1)].toUpperCase();
    const letters = shuffle(word.split(""));
    const correctFirst = word[0];
    const lettersInWord = [...new Set(word.split(""))];
    const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
    const wrong = shuffle(wrongPool).slice(0, 4);
    const options = [...shuffle([correctFirst, ...wrong]), "-"];
    const task: WordFluencyTask = {
      id: `wf-train-fb-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      letters,
      options,
      correctIndex: options.indexOf(correctFirst),
      solutionWord: word,
      explanation: `Das Wort lautet „${word}" und beginnt mit „${correctFirst}".`,
      difficulty,
    };
    if (validateWordFluencyTask(task)) return task;
  }
  const word = usePool[0].toUpperCase();
  const letters = shuffle(word.split(""));
  const correctFirst = word[0];
  const lettersInWord = [...new Set(word.split(""))];
  const wrongPool = lettersInWord.filter((l) => l !== correctFirst);
  const wrong = shuffle(wrongPool).slice(0, 4);
  const options = [...shuffle([correctFirst, ...wrong]), "-"];
  return {
    id: `wf-train-fb-last-${Date.now()}`,
    letters,
    options,
    correctIndex: options.indexOf(correctFirst),
    solutionWord: word,
    explanation: `Das Wort lautet „${word}" und beginnt mit „${correctFirst}".`,
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
    p1: (_s, m, p) => `Kein ${m.s} ist ein ${p.s}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Kein ${s.s} ist ein ${p.s}`,
    name: "Celarent",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darii",
  },
  {
    p1: (_s, m, p) => `Kein ${m.s} ist ein ${p.s}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Ferio",
  },
  {
    p1: (_s, m, p) => `Kein ${p.s} ist ein ${m.s}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Kein ${s.s} ist ein ${p.s}`,
    name: "Cesare",
  },
  {
    p1: (_s, m, p) => `Alle ${p.p} sind ${m.p}`,
    p2: (s, m) => `Kein ${s.s} ist ein ${m.s}`,
    conclusion: (s, _m, p) => `Kein ${s.s} ist ein ${p.s}`,
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
    `Kein ${s.s} ist ein ${p.s}`,
    `Einige ${s.p} sind keine ${p.p}`,
    `Alle ${p.p} sind ${s.p}`,
    `Einige ${p.p} sind ${s.p}`,
    `Kein ${p.s} ist ein ${s.s}`,
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
    id: `syl-gen-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
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
  if (/^Keine der Schlussfolgerungen ist zwingend/.test(s.trim())) return "E_keine_zwingend";
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
    { s: "Symbol", p: "Symbole" },
    { s: "Zeichen", p: "Zeichen" },
    { s: "Markierung", p: "Markierungen" },
  ],
  [
    { s: "Behälter", p: "Behälter" },
    { s: "Gefäß", p: "Gefäße" },
    { s: "Kontainer", p: "Kontainer" },
  ],
  [
    { s: "Verfahren", p: "Verfahren" },
    { s: "Methode", p: "Methoden" },
    { s: "Technik", p: "Techniken" },
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
  [
    { s: "Variante", p: "Varianten" },
    { s: "Ausführung", p: "Ausführungen" },
    { s: "Version", p: "Versionen" },
  ],
];

const MAX_ASSERT_RETRIES = 5;

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

const TRAINING_MODES: TrainingSyllogismMode[] = [
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind ${p.p}`,
    name: "Barbara",
  },
  {
    p1: (_s, m, p) => `Kein ${m.s} ist ein ${p.s}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Kein ${s.s} ist ein ${p.s}`,
    name: "Celarent",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind ${p.p}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind ${p.p}`,
    name: "Darii",
  },
  {
    p1: (_s, m, p) => `Kein ${m.s} ist ein ${p.s}`,
    p2: (s, m) => `Einige ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Einige ${s.p} sind keine ${p.p}`,
    name: "Ferio",
  },
  {
    p1: (_s, m, p) => `Alle ${m.p} sind keine ${p.p}`,
    p2: (s, m) => `Alle ${s.p} sind ${m.p}`,
    conclusion: (s, _m, p) => `Alle ${s.p} sind keine ${p.p}`,
    name: "Alle-keine-Kette",
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

function trainingWrongOptions(s: TrainingBegriff, p: TrainingBegriff, correct: string): string[] {
  const candidates = [
    `Alle ${s.p} sind ${p.p}`,
    `Einige ${s.p} sind ${p.p}`,
    `Kein ${s.s} ist ein ${p.s}`,
    `Einige ${s.p} sind keine ${p.p}`,
    `Alle ${p.p} sind ${s.p}`,
    `Einige ${p.p} sind ${s.p}`,
    `Kein ${p.s} ist ein ${s.s}`,
    `Einige ${p.p} sind keine ${s.p}`,
  ];
  return shuffle(candidates.filter((c) => c !== correct));
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
    const mode =
      difficulty === 1
        ? TRAINING_MODES[randInt(0, 2)]
        : TRAINING_MODES[randInt(0, TRAINING_MODES.length - 1)];

    const premise1 = mode.p1(s, m, p);
    const premise2 = mode.p2(s, m, p);
    const correctConclusion = mode.conclusion(s, m, p);
    const wrongOptions = trainingWrongOptions(s, p, correctConclusion).slice(0, 4);

    let options: [string, string, string, string, string];
    let correctAnswer: number;

    if (useENone) {
      options = [
        wrongOptions[0] ?? correctConclusion,
        wrongOptions[1] ?? correctConclusion,
        wrongOptions[2] ?? correctConclusion,
        wrongOptions[3] ?? correctConclusion,
        "Keine der Schlussfolgerungen ist zwingend",
      ];
      correctAnswer = 4;
    } else {
      const insertIdx = randInt(0, 3);
      const four: string[] = [...wrongOptions];
      four[insertIdx] = correctConclusion;
      options = [
        four[0] ?? "",
        four[1] ?? "",
        four[2] ?? "",
        four[3] ?? "",
        "Keine der Schlussfolgerungen ist zwingend",
      ];
      correctAnswer = insertIdx;
    }

    const task: ImplikationTask = {
      id: `imp-train-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      premise1,
      premise2,
      options,
      correctAnswer,
      explanation: useENone
        ? "Aus den gegebenen Prämissen lässt sich keine der angegebenen Schlussfolgerungen zwingend ableiten."
        : `${mode.name}: Aus den Prämissen folgt zwingend: „${correctConclusion}".`,
      difficulty,
      rulesApplied: useENone ? [1] : [3],
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
    const wrongOptions = trainingWrongOptions(s, p, correctConclusion).slice(0, 4);
    const insertIdx = randInt(0, 3);
    const four: string[] = [...wrongOptions];
    four[insertIdx] = correctConclusion;
    const task: ImplikationTask = {
      id: `imp-train-fb-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      premise1,
      premise2,
      options: [
        four[0] ?? "",
        four[1] ?? "",
        four[2] ?? "",
        four[3] ?? "",
        "Keine der Schlussfolgerungen ist zwingend",
      ],
      correctAnswer: insertIdx,
      explanation: `Aus den Prämissen folgt: „${correctConclusion}".`,
      difficulty,
      rulesApplied: [3],
    };
    if (validateImplikationTask(task) && hasVisualSolutionForImplikationTask(task)) return task;
  }
  const tripel = TRAINING_TERM_TRIPELS[0];
  const [s, m, p] = tripel;
  const mode = TRAINING_MODES[0];
  const premise1 = mode.p1(s, m, p);
  const premise2 = mode.p2(s, m, p);
  const correctConclusion = mode.conclusion(s, m, p);
  const wrongOptions = trainingWrongOptions(s, p, correctConclusion).slice(0, 4);
  const four: string[] = [...wrongOptions];
  four[0] = correctConclusion;
  return {
    id: `imp-train-fb-last-${Date.now()}`,
    premise1,
    premise2,
    options: [
      four[0] ?? "",
      four[1] ?? "",
      four[2] ?? "",
      four[3] ?? "",
      "Keine der Schlussfolgerungen ist zwingend",
    ],
    correctAnswer: 0,
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
