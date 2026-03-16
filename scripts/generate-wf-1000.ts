/**
 * Standalone script to regenerate WF_TRAINING_POOL_1000 with ~1000 tasks.
 * Run: npx tsx scripts/generate-wf-1000.ts
 */
import {
  generateAllWordFluencyTasksFromLexicon,
  validateWordFluencyTask,
  assertNotOfficialLikeWordFluency,
  TRAINING_WF_WORDS,
  WORD_POOL_LEICHT,
  WORD_POOL_MITTEL,
  WORD_POOL_SCHWER,
} from "../src/data/kffGenerators";
import type { WordFluencyTask } from "../src/data/kffWortfluessigkeitMedAT";
import { OFFICIAL_WF_EXAMPLES } from "../src/data/kffWortfluessigkeitMedAT";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET = 1000;

// ---- Helpers (mirrored from kffGenerators for standalone use) ----

const ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CONFUSING_LETTERS: Record<string, string[]> = {
  A: ["E", "O", "U"],
  B: ["D", "P", "R"],
  C: ["G", "K", "S"],
  D: ["B", "T", "P"],
  E: ["A", "I", "O"],
  F: ["V", "P", "T"],
  G: ["C", "K", "J"],
  H: ["K", "N", "M"],
  I: ["E", "L", "J"],
  J: ["I", "G", "Y"],
  K: ["C", "G", "H"],
  L: ["I", "T", "R"],
  M: ["N", "W", "H"],
  N: ["M", "H", "R"],
  O: ["A", "U", "Q"],
  P: ["B", "D", "Q"],
  Q: ["O", "G", "P"],
  R: ["B", "N", "L"],
  S: ["Z", "C", "X"],
  T: ["D", "F", "L"],
  U: ["O", "V", "A"],
  V: ["U", "W", "F"],
  W: ["V", "M", "U"],
  X: ["S", "Z", "K"],
  Y: ["J", "I", "V"],
  Z: ["S", "X", "C"],
};

function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  return () => {
    h = (h * 1664525 + 1013904223) | 0;
    return (h >>> 0) / 4294967296;
  };
}

function shuffleDet<T>(arr: T[], seed: string): T[] {
  const result = [...arr];
  const rng = seededRandom(seed);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

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
  // Only word-internal letters — no external fallback (validator v3 requires it)
  const pool = [...internalConfusing, ...otherWordLetters];
  const used = new Set<string>([correctFirst]);
  const result: string[] = [];
  for (const l of pool) {
    if (result.length >= count) break;
    if (used.has(l)) continue;
    used.add(l);
    result.push(l);
  }
  return result;
}

function makeTaskFromWord(
  word: string,
  difficulty: 1 | 2 | 3,
  seed: string
): WordFluencyTask | null {
  const solution = word.toUpperCase();
  const wordLetterSet = new Set(solution.split(""));
  // Need at least 5 distinct letters: 1 correct + 3 distractors from word (+ "-" as 5th option)
  // With useNone=true we need 4 distractors, so 5 distinct minimum
  if (wordLetterSet.size < 5) return null;
  const letters = shuffleDet(solution.split(""), seed);
  const correctFirst = solution[0]!;

  // ~15% chance of dash answer
  const useNone = seededRandom(seed + "-none")() < 0.15;
  let options: string[];
  let correctIndex: number;

  if (useNone) {
    const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 4);
    if (distractors.length < 4) return null;
    options = [...shuffle([...distractors]), "-"];
    correctIndex = 4;
  } else {
    const distractors = pickSmartDistractors(correctFirst, wordLetterSet, 3);
    if (distractors.length < 3) return null;
    const mixed = shuffleDet([correctFirst, ...distractors], seed + "-opt");
    options = [...mixed, "-"];
    correctIndex = mixed.indexOf(correctFirst);
  }

  const explanation = useNone
    ? `Das Lösungswort lautet \u201E${solution}\u201C (Anfangsbuchstabe \u201E${correctFirst}\u201C), der nicht unter A\u2013D angeboten wird.`
    : `Das Wort lautet \u201E${solution}\u201C und beginnt mit \u201E${correctFirst}\u201C.`;

  return {
    id: seed,
    letters,
    options,
    correctIndex,
    solutionWord: solution,
    explanation,
    difficulty,
  };
}

// ---- Main ----

const officialWords = new Set(OFFICIAL_WF_EXAMPLES.map((o) => o.solutionWord.toUpperCase()));
const seen = new Set<string>();
const allTasks: WordFluencyTask[] = [];

function tryAdd(task: WordFluencyTask | null, isExtraWord = false): boolean {
  if (!task) return false;
  const key = task.solutionWord.toUpperCase();
  if (seen.has(key)) return false;
  if (officialWords.has(key)) return false;
  // For extra words not in any lexicon, validate with lexicon override (just the solution word)
  const valid = isExtraWord
    ? validateWordFluencyTask(task, [task.solutionWord.toUpperCase()])
    : validateWordFluencyTask(task);
  if (!valid) return false;
  if (!assertNotOfficialLikeWordFluency(task)) return false;
  seen.add(key);
  allTasks.push(task);
  return true;
}

// Step 1: Deterministic tasks from wortfluessigkeitWords lexicon
const lexiconTasks = generateAllWordFluencyTasksFromLexicon();
for (const t of lexiconTasks) tryAdd(t);
console.log(`After lexicon: ${allTasks.length}`);

// Step 2: All TRAINING_WF_WORDS (375 words)
for (const [diffStr, words] of Object.entries(TRAINING_WF_WORDS)) {
  const diff = Number(diffStr) as 1 | 2 | 3;
  for (const w of words) {
    if (seen.has(w.toUpperCase())) continue;
    const task = makeTaskFromWord(w, diff, `wf-tw-${w}`);
    tryAdd(task);
  }
}
console.log(`After TRAINING_WF_WORDS: ${allTasks.length}`);

// Step 3: All WORD_POOL words
const wordPoolEntries: [string, 1 | 2 | 3][] = [
  ...WORD_POOL_LEICHT.map((w) => [w, 1 as const] as [string, 1]),
  ...WORD_POOL_MITTEL.map((w) => [w, 2 as const] as [string, 2]),
  ...WORD_POOL_SCHWER.map((w) => [w, 3 as const] as [string, 3]),
];
for (const [w, diff] of wordPoolEntries) {
  if (seen.has(w.toUpperCase())) continue;
  const task = makeTaskFromWord(w, diff, `wf-wp-${w}`);
  tryAdd(task);
}
console.log(`After WORD_POOLs: ${allTasks.length}`);

// Step 4: If still under target, add more German words
// These are common German words not likely in the pools already
const EXTRA_WORDS: [string, 1 | 2 | 3][] = [
  // Difficulty 1 (4-6 letters)
  ...(
    [
      "AUGE",
      "BANK",
      "BERG",
      "BETT",
      "BILD",
      "BLAU",
      "BLUT",
      "BOOT",
      "BROT",
      "BUCH",
      "DACH",
      "DARM",
      "DORF",
      "DREI",
      "EINS",
      "ERDE",
      "FALL",
      "FELD",
      "FELS",
      "FILM",
      "FORM",
      "FREI",
      "GANZ",
      "GAST",
      "GELD",
      "GELB",
      "GLAS",
      "GOLD",
      "GRAB",
      "GRAU",
      "GRUN",
      "GURT",
      "HAFEN",
      "HAGEL",
      "HAKEN",
      "HALBE",
      "HALDE",
      "HANDY",
      "HARFE",
      "HAUPT",
      "HEIDE",
      "HELGA",
      "HILFE",
      "HONIG",
      "HOTEL",
      "JUBEL",
      "JUNGE",
      "KABEL",
      "KAMEL",
      "KERZE",
      "KLANG",
      "KNABE",
      "KNALL",
      "KOHLE",
      "KRAFT",
      "KREIS",
      "KUNST",
      "LADEN",
      "LAMPE",
      "LAUNE",
      "LAWINE",
      "LEBER",
      "LEISE",
      "LICHT",
      "LIEBE",
      "LIMIT",
      "LOGIK",
      "LOTUS",
      "MACHT",
      "MAGEN",
      "MARKT",
      "MASKE",
      "MATTE",
      "MEILE",
      "MILCH",
      "MITTE",
      "MORAL",
      "MULDE",
      "NABEL",
      "NADEL",
      "NAGEL",
      "NEBEL",
      "NEFFE",
      "NUDEL",
      "OCKER",
      "OLIVE",
      "ORGAN",
      "PAKET",
      "PFEIL",
      "PILOT",
      "PLATZ",
      "PREIS",
      "PUNKT",
      "PUPPE",
      "RATTE",
      "REGAL",
      "REIHE",
      "RENTE",
      "ROMAN",
      "RUBIN",
      "SACHE",
      "SALAT",
      "SCHAR",
      "SOCKE",
      "SPIEL",
      "SPORT",
      "STAHL",
      "STERN",
      "TAFEL",
      "TREND",
      "TRUHE",
      "TURBO",
      "UMZUG",
      "UNTEN",
      "UNTER",
      "VAPOR",
      "VOGEL",
      "WAAGE",
      "WACHE",
      "WANGE",
      "WIESE",
      "WOCHE",
      "WOLKE",
      "ZEILE",
      "ZIPFEL",
      "ZUNGE",
      "HELM",
      "IGEL",
      "KALB",
      "KEIL",
      "KELCH",
      "KERN",
      "KIES",
      "KITT",
      "KNIE",
      "KOHL",
      "KOPF",
      "KORB",
      "KORN",
      "KRUG",
      "LACHS",
      "LAIB",
      "LAUS",
      "LEIM",
      "LOEB",
      "LOHN",
      "LUPE",
      "MAIS",
      "MAST",
      "MAUS",
      "MEER",
      "MOOS",
      "MORD",
      "NEST",
      "NETZ",
      "NOTE",
      "OBST",
      "PECH",
      "PELZ",
      "PEST",
      "PFAD",
      "PILS",
      "PORE",
      "PULS",
      "RAND",
      "RAUB",
      "RECK",
      "REDE",
      "REIF",
      "REIS",
      "ROHR",
      "ROST",
      "RUHM",
      "SAND",
      "SEIL",
      "SENF",
      "SITZ",
      "SLIM",
      "SOFA",
      "SOHN",
      "SOJA",
      "SPUR",
      "STEG",
      "STEIN",
      "STIFT",
      "SUCHT",
      "TAKT",
      "TANK",
      "TEER",
      "TIER",
      "TORF",
      "TURM",
      "WADE",
      "WALD",
      "WAND",
      "WEIN",
      "WELT",
      "WERK",
      "WIRT",
      "WOLF",
      "WURM",
      "ZAUN",
      "ZELT",
      "ZINK",
      "ZOLL",
      "ZONE",
    ] as string[]
  ).map((w) => [w, 1 as const] as [string, 1]),
  // Difficulty 2 (6-8 letters)
  ...(
    [
      "ANTWORT",
      "AUFGABE",
      "AUSGANG",
      "AUSREDE",
      "AUSWAHL",
      "BEISPIEL",
      "BEREICH",
      "BETRIEB",
      "BIEGUNG",
      "BILDHAUER",
      "BINDUNG",
      "BLEICHE",
      "BRANCHE",
      "CHEMIKER",
      "CHRONIK",
      "DAMPFER",
      "DENKMAL",
      "DICHTER",
      "DROHUNG",
      "EINBAND",
      "EINWAND",
      "EISBERG",
      "ELEKTRO",
      "ENDLAGER",
      "ENTWURF",
      "ERDBODEN",
      "ERDKUNDE",
      "ERHOLUNG",
      "ERKENNUNG",
      "ERLEBEN",
      "FAHRKARTE",
      "FALTUNG",
      "FASCHING",
      "FENSTER",
      "FESTUNG",
      "FLECHTE",
      "FLUGLINIE",
      "FORELLE",
      "FORSCHER",
      "FREIHEIT",
      "FREMDWORT",
      "FRIEDHOF",
      "GARTENBAU",
      "GEBIRGE",
      "GEDANKE",
      "GELENK",
      "GELTUNG",
      "GENEHMIGUNG",
      "GEWITTER",
      "GIPFEL",
      "GONDEL",
      "GRABEN",
      "GRAFIK",
      "GUMMI",
      "HALTUNG",
      "HANDLUNG",
      "HARMONIE",
      "HEIZKRAFT",
      "HERBST",
      "HERZBLUT",
      "HINWEIS",
      "HORIZONT",
      "HUNDERT",
      "INDUSTRIE",
      "INHABER",
      "INSEKT",
      "KAPITAL",
      "KASTANIE",
      "KERAMIK",
      "KLAMMER",
      "KLINIK",
      "KOMPLEX",
      "KONFLIKT",
      "KONSOLE",
      "KONTRAST",
      "KONZEPT",
      "KORALLE",
      "KOSTEN",
      "KRANKHEIT",
      "KREUZER",
      "KRISTALL",
      "KUPPLUNG",
      "LANDKARTE",
      "LATERNE",
      "LEISTUNG",
      "LENKRAD",
      "LEXIKON",
      "LICHTUNG",
      "LIEDGUT",
      "LOKOMOTIVE",
      "MACHWERK",
      "MELDUNG",
      "MERKBLATT",
      "MISCHUNG",
      "MITGLIED",
      "NACHWEIS",
      "NAHRUNG",
      "NETZWERK",
      "NEULING",
      "ORDNUNG",
      "PACKUNG",
      "PFLASTER",
      "POSTFACH",
      "PRAXIS",
      "PROBLEM",
      "REAKTION",
      "REIBUNG",
      "RESTWERT",
      "RHYTHMUS",
      "RICHTUNG",
      "ROSETTE",
      "SCHACHTEL",
      "SCHALTER",
      "SCHEITEL",
      "SCHLACHT",
      "SCHMELZE",
      "SCHNABEL",
      "SPANNUNG",
      "SPIEGEL",
      "STEINBRUCH",
      "STELLUNG",
      "STEMPEL",
      "STRECKE",
      "SUBSTANZ",
      "TAKTIK",
      "TECHNIK",
      "TEILUNG",
      "TEMPEL",
      "TONBAND",
      "TRUPPE",
      "TURMFALKE",
      "UNRECHT",
      "URLAUB",
      "VERBUND",
      "VERTRAG",
      "WACHSTUM",
      "WARNUNG",
      "WERKSTATT",
      "WERTUNG",
      "WETTLAUF",
      "WINDKRAFT",
      "WIRKSTOFF",
      "ZAHLUNG",
      "ZEICHEN",
      "ZEITUNG",
      "ZIRKUS",
      "ZULEITUNG",
      "ZUSTAND",
    ] as string[]
  ).map((w) => [w, 2 as const] as [string, 2]),
  // Difficulty 3 (8+ letters)
  ...(
    [
      "ABENDESSEN",
      "ABENTEUER",
      "ABFLUGHALLE",
      "ABLAGERUNG",
      "ABRECHNUNG",
      "ABSTIMMUNG",
      "ALTERSHEIM",
      "AMEISENHAUFEN",
      "ANGEHOERIGE",
      "ANKERPUNKT",
      "ANSCHAUUNG",
      "ARBEITSPLATZ",
      "ARZTPRAXIS",
      "AUFERSTEHUNG",
      "AUFSTELLUNG",
      "AUSBILDUNG",
      "AUSDEHNUNG",
      "AUSSTELLUNG",
      "BACKPULVER",
      "BAHNSTEIG",
      "BEARBEITUNG",
      "BEFRAGUNG",
      "BEHANDLUNG",
      "BEKLEIDUNG",
      "BELASTUNG",
      "BELEUCHTUNG",
      "BERGSTEIGER",
      "BESCHREIBUNG",
      "BESICHTIGUNG",
      "BESTANDTEIL",
      "BEWUNDERUNG",
      "BIBLIOTHEK",
      "BLUTKREISLAUF",
      "BREMSKLOTZ",
      "BRIEFKASTEN",
      "BUCHHANDLUNG",
      "CHEMIELABOR",
      "DACHGESCHOSS",
      "DARSTELLUNG",
      "DATENBANK",
      "DIENSTLEISTUNG",
      "DRUCKLUFT",
      "DURCHBRUCH",
      "EINRICHTUNG",
      "EINZELHANDEL",
      "ELEKTROTECHNIK",
      "EMPFINDUNG",
      "ENTDECKUNG",
      "ENTSPANNUNG",
      "ENTSORGUNG",
      "ENTWICKLUNG",
      "ERFRISCHUNG",
      "ERGEBNISSE",
      "ERKRANKUNG",
      "ERSCHEINUNG",
      "FAHRERLAUBNIS",
      "FARBMISCHUNG",
      "FEINSTAUBFILTER",
      "FELDBEGRENZUNG",
      "FERNSPRECHER",
      "FESTSTELLUNG",
      "FLUGHAFEN",
      "FORSCHUNGSLABOR",
      "GARTENHAUS",
      "GASTFREUNDSCHAFT",
      "GEBURTSTAG",
      "GESAMTSCHULE",
      "GESCHWINDIGKEIT",
      "GLEICHSTROM",
      "GRUNDWASSER",
      "HANDELSPARTNER",
      "HAUPTBAHNHOF",
      "HAUSHALTSGELD",
      "HEILPRAKTIKER",
      "HERAUSFORDERUNG",
      "HERZFREQUENZ",
      "INDUSTRIEGEBIET",
      "JAHRESZAHL",
      "JUGENDHERBERGE",
      "KALENDERBLATT",
      "KERNSPALTUNG",
      "KINDERSPIELPLATZ",
      "KLEIDERSCHRANK",
      "KOHLENSTOFF",
      "KRANKENHAUS",
      "LANDWIRTSCHAFT",
      "LAUFRICHTUNG",
      "LEBENSMITTEL",
      "LEHRVERANSTALTUNG",
      "LEITFAEHIGKEIT",
      "LERNMETHODE",
      "LICHTGESCHWINDIGKEIT",
      "MARKTFORSCHUNG",
      "MEDIENWISSENSCHAFT",
      "NATURSCHUTZGEBIET",
      "NIEDERSCHLAG",
      "NOTAUFNAHME",
      "OBERFLAECHE",
      "PARKPLATZMANGEL",
      "PFLICHTBEWUSSTSEIN",
      "REGENWURM",
      "REISEVERANSTALTER",
      "RESTPOSTEN",
      "RINDERSTEAK",
      "SCHLAFZIMMER",
      "SCHMETTERLING",
      "SCHNELLZUG",
      "SCHULGEBAEUDE",
      "SCHWERKRAFT",
      "SICHERHEITSGURT",
      "SONNENSTRAHLUNG",
      "SPRACHKENNTNISSE",
      "SPURENSUCHE",
      "STADTPLANUNG",
      "STEUERERKLARUNG",
      "STRASSENBAHN",
      "STUDENTENWOHNHEIM",
      "TANKSTELLE",
      "TASCHENBUCH",
      "TELEFONBUCH",
      "THERMOMETER",
      "TIEFKUEHLUNG",
      "TRINKWASSER",
      "UEBERNACHTUNG",
      "UMWELTSCHUTZ",
      "UNFALLVERSICHERUNG",
      "UNTERHALTUNG",
      "VERANSTALTUNG",
      "VERKEHRSPOLIZEI",
      "VERSICHERUNG",
      "VOLKSHOCHSCHULE",
      "VOLLKORNBROT",
      "WANDERAUSSTELLUNG",
      "WASCHMASCHINE",
      "WASSERLEITUNG",
      "WERKZEUGKASTEN",
      "WETTERBERICHT",
      "WISSENSCHAFTLER",
      "WOHNGEMEINSCHAFT",
      "ZAHNPFLEGE",
      "ZUSAMMENSETZUNG",
      "ZWISCHENPRUEFUNG",
      "DAMPFMASCHINE",
      "EISENBAHNLINIE",
      "FAHRRADSCHLOSS",
      "GARDINENSTANGE",
      "HANDSCHRIFT",
      "JAHRESABSCHLUSS",
      "KALTSCHWEISS",
      "LUFTSCHICHT",
      "MILCHSTRASSE",
      "PARKVERBOT",
      "QUERFLOEITE",
      "RAUCHWOLKE",
      "SCHIEFERTAFEL",
      "TORSCHLUSS",
      "UNFALLSTELLE",
      "VERSUCHSLABOR",
      "WANDTEPPICH",
      "ZUKUNFTSANGST",
      "OBSTGARTEN",
      "PFERDESPORT",
      "QUELLENANGABE",
      "REGENSCHAUER",
      "SANDSTRAND",
      "TAGESABLAUF",
      "URLAUBSREISE",
      "VOLKSFEST",
      "WINDMUEHLE",
      "ZEITARBEIT",
      "BLUMENSTRAUSS",
      "DAMPFSCHIFF",
      "EISENWERK",
      "FRUEHSTUECK",
      "GERICHTSURTEIL",
      "HANDELSWARE",
      "KAPELLMEISTER",
      "LAGERBESTAND",
      "NACHTSCHICHT",
      "PFLANZENSCHUTZ",
      "SCHIFFSKAPITAEN",
      "TREPPENSTUFE",
      "VORDERSEITE",
      "WUNDVERBAND",
      "ZEITSCHRIFT",
      "ABFALLKORB",
      "BAUMSCHULE",
      "DACHSTUHL",
      "EINKAUFSLISTE",
      "FEUERWACHE",
      "GEGENVERKEHR",
      "HOLZFAELLER",
      "INNENSTADT",
      "KURZSTRECKE",
      "LEBENSLAUF",
      "MITTERNACHT",
      "NACHTFALTER",
      "PALMENBLATT",
      "RADFAHRWEG",
      "SCHIFFSWERFT",
      "TANKWAGEN",
      "UHRMACHER",
      "VIEHWIRTSCHAFT",
      "WALDLICHTUNG",
      "ZUGVERBINDUNG",
      "ALTPAPIER",
      "BERUFSWAHL",
      "DAMPFWALZE",
      "EHRENAMT",
      "FRACHTGUT",
      "GASTSTAETTE",
      "HEILQUELLE",
      "KLETTERPARK",
      "LASTSCHRIFT",
      "MUNDSCHUTZ",
      "NACHTWACHE",
      "PFINGSTROSE",
      "RAUBVOGEL",
      "STAUDAMM",
      "TREIBSTOFF",
      "UMGEHUNGSSTRASSE",
      "VOGELHAUS",
      "WACHSMALSTIFT",
      "ZELTPLATZ",
      "ARTENSCHUTZ",
      "BRENNHOLZ",
      "DACHRINNE",
      "ENDSTATION",
      "FELDSALAT",
      "GASTGEBER",
      "HINTERGRUND",
      "JAGDSCHEIN",
      "KALTFRONT",
      "LANDSCHAFT",
      "MAUERWERK",
      "NUSSBAUM",
      "ORTSCHAFT",
      "PARKANLAGE",
      "RANGIERBAHNHOF",
      "SCHALLDICHT",
      "TAUCHSCHEIN",
      "UMSTANDSKLEID",
      "VEILCHENSTRAUSS",
      "WASCHANLAGE",
      "ZUGBRUECKE",
      "BACHFORELLE",
      "DAMPFNUDEL",
      "ERDGESCHOSS",
      "FEINSTAUB",
      "GRUNDSTEIN",
      "HANDGELENK",
      "KIESGRUBE",
      "LAMPENSCHIRM",
      "MONDSCHEIN",
      "POSTLEITZAHL",
      "REISSVERSCHLUSS",
      "SCHRAUBSTOCK",
      "TASCHENMESSER",
      "VERKEHRSSCHILD",
      "WACHSFIGUR",
      "ZOLLBEAMTER",
    ] as string[]
  ).map((w) => [w, 3 as const] as [string, 3]),

  // More difficulty 1 extras
  ...(
    [
      "ALGE",
      "BIRNE",
      "BUCHT",
      "DOLCH",
      "EIBE",
      "FARN",
      "GANS",
      "HANF",
      "ILTIS",
      "JADE",
      "KAHN",
      "LACK",
      "MALZ",
      "NARBE",
      "PALME",
      "QUARZ",
      "RAMPE",
      "SALBE",
      "TINTE",
      "ULME",
      "VASE",
      "WALZE",
      "ZANGE",
      "ACHSE",
      "BORKE",
      "DAMM",
      "ELCH",
      "FUGE",
      "GURT",
      "HARZ",
      "JOCH",
      "KLUFT",
      "LAUB",
      "MAST",
      "NERZ",
      "PIER",
      "QUALM",
      "RIFF",
      "STAB",
      "TALG",
      "URNE",
      "VLIES",
      "WAMS",
      "ZUNFT",
      "AMPEL",
      "BELAG",
      "DEICH",
      "FALKE",
      "GERSTE",
      "HALM",
      "KANAL",
      "LACHS",
      "MULCH",
      "NELKE",
      "PELIKAN",
      "RANKE",
      "SENSE",
      "TEICH",
      "UMBRA",
      "BINSE",
      "DRAHT",
      "FLECK",
      "GRUBE",
      "HALTE",
      "KANTE",
      "LEHM",
      "MINZE",
      "PACHT",
      "SALBEI",
      "TRAGE",
      "WALME",
      "ZINKE",
      "BALKEN",
      "DECKE",
      "ERNTE",
      "FLINTE",
      "GROTTE",
      "HARKE",
      "KALTE",
      "LEITER",
      "MARSCH",
      "NISCHE",
    ] as string[]
  ).map((w) => [w, 1 as const] as [string, 1]),

  // More difficulty 2 extras
  ...(
    [
      "ANBIETERIN",
      "BLICKFELD",
      "DREHMOMENT",
      "EINBRUCH",
      "FLUTWELLE",
      "GRENZWERT",
      "HALBJAHR",
      "INHALTLICH",
      "JAHRGANG",
      "KLAUSUR",
      "LEITMOTIV",
      "MESSWERT",
      "NACHTEIL",
      "OELGEMALDE",
      "PLANWERT",
      "ROHSTOFF",
      "SATZGLIED",
      "TEXTBLOCK",
      "UMLAUFBAHN",
      "VORSCHLAG",
      "WALDRAND",
      "ZEITPLAN",
      "ABLENKUNG",
      "BERGLAUF",
      "DAMPFBAD",
      "EIGENTUM",
      "FISCHTEICH",
      "GEWERBE",
      "HALBMOND",
      "KALTLUFT",
      "LAUBWALD",
      "NORDPOL",
      "OBHUT",
      "PRACHTBAU",
      "REIBWERT",
      "STURZBACH",
      "TIEFSTAND",
      "UMGEBUNG",
      "VERSAND",
      "WORTSCHATZ",
      "ABGRUND",
      "BLUTDRUCK",
      "DAUERLUFT",
      "EISSCHILD",
      "FELDWEG",
      "GIPSBEIN",
      "HAFTPFLICHT",
      "KALTBLUT",
      "LEHRAMT",
      "MISTKAEFER",
      "NACHRICHT",
      "ORTSKERN",
      "PLATZREGEN",
      "RATSCHLAG",
      "SCHUTZDACH",
      "TINTENFASS",
      "UMKEHRPUNKT",
      "VIERTELNOTE",
      "WACHTMEISTER",
      "ARMLEUCHTER",
      "BEISTAND",
      "DECKBLATT",
      "EINSCHLAG",
      "FLUSSBETT",
      "GRUNDSATZ",
      "HAUSHALT",
      "KALTSTART",
      "LAUBFROSCH",
      "MARKSTEIN",
    ] as string[]
  ).map((w) => [w, 2 as const] as [string, 2]),
];

// Step 4: Add extra words (use lexicon override since they may not be in the lexicon)
for (const [w, diff] of EXTRA_WORDS) {
  if (seen.has(w.toUpperCase())) continue;
  const task = makeTaskFromWord(w, diff, `wf-ex-${w}`);
  tryAdd(task, true);
}
console.log(`After extra words: ${allTasks.length}`);

// Step 5: Random generation to fill remaining gaps
let retryCount = 0;
const maxRetries = 100000;
while (allTasks.length < TARGET && retryCount < maxRetries) {
  retryCount++;
  // Balance difficulties
  const diffCounts = { 1: 0, 2: 0, 3: 0 };
  for (const t of allTasks) diffCounts[t.difficulty as 1 | 2 | 3]++;
  let targetDiff: 1 | 2 | 3 = 1;
  if (diffCounts[2] <= diffCounts[1] && diffCounts[2] <= diffCounts[3]) targetDiff = 2;
  else if (diffCounts[3] <= diffCounts[1] && diffCounts[3] <= diffCounts[2]) targetDiff = 3;

  // Pick random word from all pools combined for that difficulty
  const pool = [
    ...(targetDiff === 1 ? [...WORD_POOL_LEICHT, ...TRAINING_WF_WORDS[1]] : []),
    ...(targetDiff === 2 ? [...WORD_POOL_MITTEL, ...TRAINING_WF_WORDS[2]] : []),
    ...(targetDiff === 3 ? [...WORD_POOL_SCHWER, ...TRAINING_WF_WORDS[3]] : []),
  ];
  const w = pool[Math.floor(Math.random() * pool.length)];
  if (!w || seen.has(w.toUpperCase())) continue;
  const task = makeTaskFromWord(w, targetDiff, `wf-rng-${w}-${retryCount}`);
  tryAdd(task);
}
console.log(`After random fill: ${allTasks.length} (retries: ${retryCount})`);

// Step 6: Cap at TARGET with balanced difficulty (~333 each), redistributing shortfalls
const byDiff: Record<number, WordFluencyTask[]> = { 1: [], 2: [], 3: [] };
for (const t of allTasks) byDiff[t.difficulty].push(t);
for (const d of [1, 2, 3]) {
  byDiff[d].sort((a, b) => a.solutionWord.localeCompare(b.solutionWord));
}
// First pass: each difficulty gets at most floor(TARGET/3)
const baseCap = Math.floor(TARGET / 3);
let remaining = TARGET;
for (const d of [1, 2, 3]) {
  const take = Math.min(byDiff[d].length, baseCap);
  byDiff[d] = byDiff[d].slice(0, take);
  remaining -= take;
}
// Second pass: distribute remaining slots to difficulties that have surplus
if (remaining > 0) {
  // Reload full pools sorted
  const byDiffFull: Record<number, WordFluencyTask[]> = { 1: [], 2: [], 3: [] };
  for (const t of allTasks) byDiffFull[t.difficulty].push(t);
  for (const d of [1, 2, 3]) {
    byDiffFull[d].sort((a, b) => a.solutionWord.localeCompare(b.solutionWord));
  }
  for (const d of [2, 3, 1]) {
    if (remaining <= 0) break;
    const extra = Math.min(remaining, byDiffFull[d].length - byDiff[d].length);
    if (extra > 0) {
      byDiff[d] = byDiffFull[d].slice(0, byDiff[d].length + extra);
      remaining -= extra;
    }
  }
}
const capped = [...byDiff[1], ...byDiff[2], ...byDiff[3]];
allTasks.length = 0;
allTasks.push(...capped);

allTasks.sort(
  (a, b) => a.difficulty - b.difficulty || a.solutionWord.localeCompare(b.solutionWord)
);

// Re-assign sequential IDs
const finalTasks = allTasks.map((t, i) => ({
  ...t,
  id: `wf-${String(i + 1).padStart(4, "0")}`,
}));

const d1 = finalTasks.filter((t) => t.difficulty === 1).length;
const d2 = finalTasks.filter((t) => t.difficulty === 2).length;
const d3 = finalTasks.filter((t) => t.difficulty === 3).length;
console.log(`Final: ${finalTasks.length} tasks (easy=${d1}, medium=${d2}, hard=${d3})`);

// Step 7: Write output
function escapeStr(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function taskToString(t: WordFluencyTask): string {
  const letters = t.letters.map((l: string) => `"${l}"`).join(", ");
  const options = t.options.map((o: string) => `"${o}"`).join(", ");
  return `  {
    id: "${t.id}",
    letters: [${letters}],
    options: [${options}],
    correctIndex: ${t.correctIndex},
    solutionWord: "${escapeStr(t.solutionWord)}",
    explanation: "${escapeStr(t.explanation)}",
    difficulty: ${t.difficulty},
  }`;
}

const header = `// Auto-generated by WF v2 generator — ${finalTasks.length} tasks with smart distractors.
// MedAT-Format: letters = exact anagram, options mix word-internal and external confusing letters.

import type { WordFluencyTask } from "./kffWortfluessigkeitMedAT";

export const WF_TRAINING_POOL_1000: WordFluencyTask[] = [
`;

const body = finalTasks.map(taskToString).join(",\n");
const footer = `\n];\n`;

const outPath = path.resolve(__dirname, "../src/data/kffWortfluessigkeit1000.ts");
fs.writeFileSync(outPath, header + body + footer, "utf-8");
console.log(`Written to ${outPath}`);
