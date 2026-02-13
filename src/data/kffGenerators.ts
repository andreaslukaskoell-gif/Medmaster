// ============================================================
// KFF AUFGABENGENERATOREN
// Generiert unendlich viele Übungsaufgaben prozedural
// ============================================================

// --- ZAHLENFOLGEN-GENERATOR ---

export interface ZahlenfolgeGenerated {
  id: string;
  sequence: number[];          // GENAU 7 Zahlen
  correctPair: [number, number]; // Die nächsten 2 Zahlen (8. und 9.)
  options: string[];           // 5 Optionen als Zahlenpaare z.B. "256, 512"
  correctOption: number;       // Index 0-4
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
    explanation: offset === 0
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
    explanation: offset === 0
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
    [-2, -1], [1, 2], [-3, 0], [0, 3], [-1, 1], [2, -2], [-5, -3], [3, 5], [1, -1], [-2, 2],
    [correct[1] - correct[0], 0], [0, correct[1] - correct[0]],
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

export function generateZahlenfolge(difficulty: "leicht" | "mittel" | "schwer"): ZahlenfolgeGenerated {
  let result: { seq: number[]; answer: [number, number]; explanation: string };

  if (difficulty === "leicht") {
    result = Math.random() > 0.5 ? generateArithmetic() : generateGeometric();
  } else if (difficulty === "mittel") {
    const generators = [generateAlternating, generateSquare, generateDifference, generateTriangular, generatePrime];
    result = generators[randInt(0, generators.length - 1)]();
  } else {
    const generators = [generateFibonacciLike, generateDifference, generateSquare, generatePower, generateNested, generateCombined];
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

export function generateZahlenfolgenSet(count: number, difficulty: "leicht" | "mittel" | "schwer"): ZahlenfolgeGenerated[] {
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
  "Ba", "Be", "Bi", "Bo", "Bu", "Da", "De", "Di", "Do", "Du",
  "Fa", "Fe", "Fi", "Fo", "Fu", "Ga", "Ge", "Gi", "Go", "Gu",
  "Ha", "He", "Hi", "Ho", "Hu", "Ka", "Ke", "Ki", "Ko", "Ku",
  "La", "Le", "Li", "Lo", "Lu", "Ma", "Me", "Mi", "Mo", "Mu",
  "Na", "Ne", "Ni", "No", "Nu", "Pa", "Pe", "Pi", "Po", "Pu",
  "Ra", "Re", "Ri", "Ro", "Ru", "Sa", "Se", "Si", "So", "Su",
  "Ta", "Te", "Ti", "To", "Tu", "Va", "Ve", "Vi", "Vo", "Vu",
  "Za", "Ze", "Zi", "Zo", "Zu",
];

const SECOND_SYLLABLES = [
  "ban", "ben", "bin", "bon", "bun", "dan", "den", "din", "don", "dun",
  "fan", "fen", "fin", "fon", "fun", "gan", "gen", "gin", "gon", "gun",
  "kan", "ken", "kin", "kon", "kun", "lan", "len", "lin", "lon", "lun",
  "man", "men", "min", "mon", "mun", "nan", "nen", "nin", "non", "nun",
  "pan", "pen", "pin", "pon", "pun", "ran", "ren", "rin", "ron", "run",
  "san", "sen", "sin", "son", "sun", "tan", "ten", "tin", "ton", "tun",
  "van", "ven", "vin", "von", "vun", "zan", "zen", "zin", "zon", "zun",
];

const ALLERGIES = [
  "Penicillin", "Amoxicillin", "Aspirin", "Ibuprofen", "Latex",
  "Bienengift", "Wespengift", "Hausstaubmilben", "Schimmelpilze",
  "Erdnüsse", "Haselnüsse", "Walnüsse", "Soja", "Weizen", "Milch",
  "Eier", "Fisch", "Garnelen", "Sellerie", "Senf", "Sesam",
  "Pollen", "Tierhaare", "Nickel", "Kontrastmittel", "Codein",
  "Sulfonamide", "Tetracyclin", "Morphin", "Novocain",
];

const COUNTRIES = [
  "Österreich", "Deutschland", "Schweiz", "Italien", "Frankreich",
  "Spanien", "Portugal", "Niederlande", "Belgien", "Schweden",
  "Norwegen", "Dänemark", "Polen", "Tschechien", "Ungarn",
  "Griechenland", "Kroatien", "Rumänien", "Irland", "Finnland",
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-"];

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

export function generateMemoryQuestions(cards: AllergyCard[], count: number = 25): MemoryQuestion[] {
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

// --- WORTFLÜSSIGKEIT-GENERATOR ---

export interface WortflüssigkeitQuestion {
  id: string;
  scrambled: string;
  correctWord: string;
  options: string[];  // 5 possible first letters (1 correct + 4 wrong)
  difficulty: "leicht" | "mittel" | "schwer";
}

const WORD_POOL_LEICHT = [
  // Originale 50 Wörter
  "HAUSTIER", "GESCHENK", "BRUNNEN", "PFLASTER", "BLUMENSTRAUSS",
  "HANDTUCH", "SCHAUKEL", "FENSTER", "GARTEN", "KUCHEN",
  "LAMPE", "TELLER", "ZIMMER", "DECKEL", "BEUTEL",
  "WOLKEN", "STEINE", "HERBST", "WINTER", "SOMMER",
  "STUHL", "REGEN", "WASSER", "FEUER", "STEIN",
  "BAUM", "WALD", "BERG", "SAND", "MEER",
  "STERN", "LICHT", "KRAFT", "TRAUM", "DIENST",
  "BRIEF", "FRUCHT", "GLOCKE", "KISSEN", "MANTEL",
  "PLATZ", "STROM", "TURM", "WURZEL", "BLATT",
  "FEDER", "GRUND", "INSEL", "KUGEL", "NEBEL",
  // Neue Wörter (120 zusätzliche, 4-7 Buchstaben)
  "BLUME", "TORTE", "SCHUH", "TISCH", "PFERD",
  "VOGEL", "KIRCHE", "HUND", "KATZE", "MAUS",
  "FISCH", "BROT", "MILCH", "BIRNE", "APFEL",
  "PILZ", "ROSE", "TULPE", "LILIE", "KERZE",
  "DORF", "STADT", "FLUSS", "TEICH", "WIESE",
  "HECKE", "ZAUN", "MAUER", "DACH", "WAND",
  "BODEN", "SEIL", "KETTE", "RING", "NAGEL",
  "DRAHT", "KNOPF", "NADEL", "GABEL", "MESSER",
  "SCHALE", "KANNE", "KORB", "EIMER", "TONNE",
  "DOSE", "GLAS", "TOPF", "OFEN", "HERD",
  "BANK", "REGAL", "SOFA", "BETT", "KISTE",
  "BILD", "RAHMEN", "STIFT", "KREIDE", "FARBE",
  "PINSEL", "SCHERE", "PAPIER", "BLOCK", "HEFT",
  "BUCH", "SEITE", "MARKE", "MÜNZE", "PERLE",
  "HARFE", "GEIGE", "ORGEL", "KLEID", "HEMD",
  "ROCK", "JACKE", "HOSE", "HELM", "KAPPE",
  "SCHAL", "SOCKE", "ANKER", "FLAGGE", "HAFEN",
  "DAMM", "DEICH", "BACH", "WELLE", "WOLKE",
  "BLITZ", "DONNER", "STURM", "FROST", "SCHNEE",
  "HAGEL", "DUNST", "ERNTE", "SAAT", "KORN",
  "WEIZEN", "ROGGEN", "HAFER", "GERSTE", "MALZ",
  "HONIG", "ZUCKER", "SALZ", "PFEFFER", "ESSIG",
  "SAHNE", "BUTTER", "MEHL", "TEIG", "SUPPE",
  "BRATEN", "SOSSE", "SENF", "WURST", "SPECK",
];

const WORD_POOL_MITTEL = [
  // Originale 52 Wörter
  "HANDWERK", "BRUNSTZEIT", "ERDBEERE", "SCHMETTERLING",
  "BERGSTEIGER", "ZEITGEIST", "STRASSENBAHN", "WANDERSCHUH",
  "BLUMENVASE", "REGENSCHIRM", "WINDMÜHLE", "SCHNEEFLOCKE",
  "FAHRSCHEIN", "BRIEFMARKE", "DACHBODEN", "KIRCHTURM",
  "SCHULRANZEN", "HALSKETTE", "LANDKARTE", "TRINKGLAS",
  "MAHLZEIT", "NACHRICHTEN", "SPIELPLATZ", "WERKSTATT",
  "FREIHEIT", "GLEICHGEWICHT", "BAUERNHOF", "PFLANZENWELT",
  "NATURSCHUTZ", "HANDSCHRIFT", "LEBENSRAUM", "STEINGARTEN",
  "WALDMEISTER", "FREUNDSCHAFT", "MEISTERWERK", "BLICKFANG",
  "STERNWARTE", "FLUSSTIER", "BERGWERK", "SCHEINWERFER",
  "KUNSTWERK", "FINGERSPITZE", "TAGESBLATT", "NACHTFALTER",
  "SANDSTRAND", "KREISLAUF", "STEINBRUCH", "GARTENLAUBE",
  "FELSWAND", "KRONLEUCHTER", "BRUNNENWASSER", "STURMFLUT",
  // Neue Wörter (118 zusätzliche, 8-12 Buchstaben)
  "APOTHEKE", "WASSERFALL", "AUTOBAHN", "FAHRKARTE",
  "RATHAUS", "FLUGHAFEN", "MARKTPLATZ", "TURNHALLE",
  "SCHWIMMBAD", "KRANKENHAUS", "GRUNDSCHULE", "HOCHSCHULE",
  "BUCHHANDEL", "SPIELKARTE", "BACKOFEN", "KAFFEEKANNE",
  "TAGESZEIT", "NACHTRUHE", "WANDUHR", "ARMBANDUHR",
  "ZEITSCHRIFT", "BILDSCHIRM", "TASTATUR", "LAUTSPRECHER",
  "KOPFHÖRER", "FERNSEHER", "STAUBSAUGER", "KÜHLSCHRANK",
  "WASCHBECKEN", "BADEWANNE", "HANDTASCHE", "RUCKSACK",
  "GELDBEUTEL", "SCHLÜSSEL", "TÜRKLINKE", "FENSTERBRETT",
  "DACHRINNE", "SCHORNSTEIN", "KACHELOFEN", "TREPPENHAUS",
  "HAUSFLUR", "GARDEROBE", "SCHUHBANK", "KLEIDERBÜGEL",
  "WÄSCHEKORB", "BÜGELEISEN", "NÄHNADEL", "STRICKZEUG",
  "KOCHBUCH", "BACKBLECH", "SALATSCHÜSSEL", "SUPPENTOPF",
  "BROTKRUSTE", "MILCHKANNE", "ZUCKERDOSE", "PFEFFERSTREUER",
  "OBSTKORB", "GEMÜSEBEET", "BLUMENTOPF", "GIESSKANNE",
  "RASENMÄHER", "GARTENZAUN", "VOGELHAUS", "FUTTERSTELLE",
  "HUNDEHÜTTE", "STALLMIST", "HEUBALLEN", "ERNTEZEIT",
  "KORNFELD", "ACKERLAND", "WALDRAND", "LICHTUNG",
  "BAUMSTAMM", "BAUMKRONE", "WURZELWERK", "LAUBWALD",
  "NADELBAUM", "TANNENWALD", "BIRKENHOLZ", "KIEFERNHARZ",
  "WILDBLUME", "SONNENBLUME", "MOHNBLUME", "KORNBLUME",
  "GÄNSEBLÜMCHEN", "KRÄUTERBEET", "HEILPFLANZE", "BRENNNESSEL",
  "LÖWENZAHN", "KLETTERPFLANZE", "MOOSFLECHTE", "EFEURANKE",
  "SEEROSE", "SCHILFGRAS", "FLUSSBETT", "BACHFORELLE",
  "BERGZIEGE", "STEINBOCK", "WILDKATZE", "WALDKAUZ",
  "SPECHTNEST", "FUCHSBAU", "DACHSBAU", "HASENBAU",
  "BIENENSTOCK", "AMEISENHAUFEN", "SCHNECKENHAUS", "SPINNENETZ",
  "SCHWALBE", "LERCHENNEST", "KRÄHENNEST", "STORCHENNEST",
  "FISCHREIHER", "EISVOGEL", "ZAUNKÖNIG", "GOLDFISCH",
  "FORELLENZUCHT", "KARPFENTEICH",
];

const WORD_POOL_SCHWER = [
  // Originale 42 Wörter
  "BLITZABLEITER", "KRANKENSCHWESTER", "VERSICHERUNG",
  "HANDELSPARTNER", "STRASSENKREUZUNG", "SCHNEELANDSCHAFT",
  "VERKEHRSMINISTER", "FEUERWEHRMANN", "BUNDESKANZLER",
  "KRISTALLGITTER", "SCHWERPUNKT", "ZUSAMMENFASSUNG",
  "WETTBEWERB", "GRUNDSTÜCK", "WELTMEISTERSCHAFT",
  "PFLICHTBEWUSST", "STREITGESPRÄCH", "ZWISCHENPRÜFUNG",
  "DURCHSCHNITT", "SCHUTZIMPFUNG", "GRENZÜBERGANG",
  "NACHBARSCHAFT", "TRINKWASSER", "LICHTGESCHWINDIGKEIT",
  "SELBSTBEWUSSTSEIN", "HANDLUNGSFADEN", "VERANTWORTUNG",
  "GESUNDHEITSWESEN", "AUFGABENSTELLUNG", "FRIEDENSVERTRAG",
  "REGENWALDFLASCHE", "WINTERSONNENWENDE", "BERUFSERFAHRUNG",
  "SCHWIERIGKEITSGRAD", "FORTPFLANZUNG", "GEBIRGSLANDSCHAFT",
  "WERKZEUGKASTEN", "NACHMITTAGSKAFFEE", "FRÜHLINGSBEGINN",
  "SCHNEESCHMELZE", "FERNBEDIENUNG", "SCHREIBTISCHLAMPE",
  // Neue Wörter (128 zusätzliche, 13+ Buchstaben)
  "WISSENSCHAFTLER", "KRANKENVERSICHERUNG", "REGIERUNGSSPRECHER",
  "BUNDESSTRASSE", "GESCHWINDIGKEITSBEGRENZUNG", "STRASSENSPERRUNG",
  "VERKEHRSZEICHEN", "EINBAHNSTRASSE", "FUSSGÄNGERZONE",
  "KREISVERKEHR", "AUTOBAHNAUFFAHRT", "PARKPLATZSUCHE",
  "FÜHRERSCHEINPRÜFUNG", "FAHRERLAUBNIS", "VERKEHRSKONTROLLE",
  "GESCHÄFTSFÜHRER", "HANDELSREGISTER", "STEUERERKLÄRUNG",
  "BUCHHALTUNG", "JAHRESABSCHLUSS", "GEWINNBETEILIGUNG",
  "ARBEITGEBER", "ARBEITNEHMER", "BETRIEBSVERSAMMLUNG",
  "GEWERKSCHAFTSBUND", "TARIFVERHANDLUNG", "KÜNDIGUNGSSCHUTZ",
  "ARBEITSVERTRAG", "MINDESTLOHN", "SOZIALVERSICHERUNG",
  "RENTENVERSICHERUNG", "PFLEGEVERSICHERUNG", "UNFALLVERSICHERUNG",
  "ARBEITSLOSENVERSICHERUNG", "KINDERGELDANTRAG", "ELTERNZEITGESETZ",
  "MUTTERSCHUTZGESETZ", "FAMILIENBERATUNG", "JUGENDSCHUTZGESETZ",
  "VOLKSHOCHSCHULE", "ERWACHSENENBILDUNG", "BERUFSAUSBILDUNG",
  "STUDIENABSCHLUSS", "HOCHSCHULABSCHLUSS", "PRÜFUNGSORDNUNG",
  "FORSCHUNGSARBEIT", "NATURWISSENSCHAFT", "GEISTESWISSENSCHAFT",
  "SPRACHWISSENSCHAFT", "WIRTSCHAFTSLEHRE", "INGENIEURWESEN",
  "INFORMATIONSTECHNIK", "DATENVERARBEITUNG", "PROGRAMMIERSPRACHE",
  "BETRIEBSSYSTEM", "SICHERHEITSLÜCKE", "DATENSCHUTZGESETZ",
  "URHEBERRECHT", "PATENTANMELDUNG", "MARKENREGISTRIERUNG",
  "GERICHTSVERHANDLUNG", "RECHTSANWALT", "STAATSANWALTSCHAFT",
  "BUNDESVERFASSUNGSGERICHT", "VERWALTUNGSRECHT", "STRAFVERFOLGUNG",
  "ERMITTLUNGSVERFAHREN", "BEWEISAUFNAHME", "ZEUGENAUSSAGE",
  "SACHVERSTÄNDIGER", "GUTACHTERSTELLE", "BESCHWERDEVERFAHREN",
  "WIDERSPRUCHSBESCHEID", "BERUFUNGSVERFAHREN", "VOLLSTRECKUNGSBESCHEID",
  "KRANKENHAUSAUFENTHALT", "NOTAUFNAHME", "INTENSIVSTATION",
  "OPERATIONSSAAL", "REHABILITATIONSZENTRUM", "PHYSIOTHERAPEUT",
  "KRANKENPFLEGER", "GESUNDHEITSMINISTER", "ARZNEIMITTELGESETZ",
  "MEDIKAMENTENPLAN", "NEBENWIRKUNGEN", "WECHSELWIRKUNG",
  "BLUTDRUCKMESSUNG", "LABORUNTERSUCHUNG", "RÖNTGENAUFNAHME",
  "COMPUTERTOMOGRAPHIE", "MAGNETRESONANZTOMOGRAPHIE", "ULTRASCHALLGERÄT",
  "HERZSCHRITTMACHER", "ORGANTRANSPLANTATION", "KNOCHENBRUCHBEHANDLUNG",
  "ZAHNFLEISCHENTZÜNDUNG", "BINDEHAUTENTZÜNDUNG", "MITTELOHRENTZÜNDUNG",
  "LUNGENENTZÜNDUNG", "BLINDDARMENTZÜNDUNG", "BAUCHSPEICHELDRÜSE",
  "SCHILDDRÜSENUNTERSUCHUNG", "BLUTGERINNUNGSSTÖRUNG", "STOFFWECHSELKRANKHEIT",
  "NAHRUNGSMITTELUNVERTRÄGLICHKEIT", "HAUSSTAUBMILBENALLERGIE", "POLLENFLUGVORHERSAGE",
  "WETTERVORHERSAGE", "TEMPERATURMESSUNG", "LUFTFEUCHTIGKEIT",
  "NIEDERSCHLAGSMENGE", "WINDGESCHWINDIGKEIT", "GEWITTERWARNUNG",
  "HOCHWASSERSCHUTZ", "ERDBEBENMESSUNG", "VULKANAUSBRUCH",
  "KLIMAERWÄRMUNG", "UMWELTVERSCHMUTZUNG", "NATURSCHUTZGEBIET",
  "TRINKWASSERAUFBEREITUNG", "MÜLLVERBRENNUNGSANLAGE", "RECYCLINGVERFAHREN",
  "ENERGIEVERSORGUNG", "STROMVERBRAUCH", "WÄRMEPUMPENHEIZUNG",
  "SONNENKRAFTWERK", "WINDKRAFTANLAGE", "WASSERKRAFTWERK",
  "KERNKRAFTWERK", "KOHLEKRAFTWERK", "ENERGIESPEICHERTECHNIK",
  "FORSCHUNGSZENTRUM", "ENTWICKLUNGSABTEILUNG", "QUALITÄTSKONTROLLE",
  "PRODUKTIONSSTÄTTE", "LIEFERKETTENPROBLEM", "LAGERVERWALTUNG",
  "KUNDENZUFRIEDENHEIT", "MARKTFORSCHUNG", "WERBUNGSKOSTEN",
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

export function generateWortflüssigkeit(difficulty: "leicht" | "mittel" | "schwer"): WortflüssigkeitQuestion {
  const pool = difficulty === "leicht" ? WORD_POOL_LEICHT
    : difficulty === "mittel" ? WORD_POOL_MITTEL
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

export function generateWortflüssigkeitSet(count: number, difficulty: "leicht" | "mittel" | "schwer"): WortflüssigkeitQuestion[] {
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
