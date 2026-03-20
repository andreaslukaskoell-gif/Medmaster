import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Send,
  Clock,
  CheckCircle2,
  XCircle,
  Coffee,
  BookOpen,
  Brain,
  Heart,
  FileText,
  AlertTriangle,
  Eye,
  BarChart3,
  Timer,
  TrendingUp,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import {
  getAllBmsQuestions,
  getQuestionsBySubject as getBmsQuestionsBySubject,
} from "@/data/bms/index";
import { useAdaptiveStore, getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId } from "@/data/questions/index";
import { tvTexts } from "@/data/tvData";
import {
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
  generateWortflüssigkeitSet,
} from "@/data/kffGenerators";
import type { AllergyPass } from "@/data/kffGedaechtnisMedAT";
import { OFFICIAL_ZF_EXAMPLES, generateSequenceTaskSet } from "@/data/kffZahlenfolgenMedAT";
import { OFFICIAL_IMPLICATION_EXAMPLES, implikationenTasks } from "@/data/kffImplikationen";
import {
  generateFigurenTrainingTask,
  SOLUTION_SHAPES,
  polygonToPathScaledToViewBox,
  layoutPiecesCompact,
  isOptionE,
  FIGURE_SVG_ASPECT_PROPS,
  type FigureAssembleTask,
} from "@/data/kffFigurenZusammensetzenMedAT";
import { emotionQuestions } from "@/data/sekData";
import type { EmotionQuestion } from "@/data/sekData";
import type { TVText } from "@/data/tvData";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { usePageTitle } from "@/hooks/usePageTitle";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { SimulationHistory } from "@/components/simulation/SimulationHistory";

// ============================================================
// BMS QUESTION RESOLUTION
// ============================================================

const bmsQuestions = getAllBmsQuestions();

function getQuestionsBySubject(subject: string) {
  return getBmsQuestionsBySubject(subject);
}

// ============================================================
// SHUFFLE UTILITY
// ============================================================

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Seeded shuffle for deterministic simulation variants
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  const rng = seededRandom(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// TYPES
// ============================================================

type Mode = "select" | "playing" | "break" | "gedaechtnis-learn" | "result";

type SectionType =
  | "bms"
  | "tv"
  | "kff-zahlenfolgen"
  | "kff-gedaechtnis-learn"
  | "kff-gedaechtnis"
  | "kff-implikationen"
  | "kff-wortfluessigkeit"
  | "kff-figuren"
  | "sek-erkennen"
  | "sek-regulieren"
  | "sek-entscheiden";

interface SimSection {
  id: string;
  label: string;
  sectionType: SectionType;
  questionCount: number;
  timeLimitMinutes: number;
  breakAfterMinutes?: number;
  parentGroup?: string;
  learnPhaseMinutes?: number; // for gedaechtnis
}

// kff-gedaechtnis-learn: only learn phase (cards generated there, used in kff-gedaechtnis recall)

// A unified question interface that all section types normalize into
interface UnifiedQuestion {
  id: string;
  sectionId: string;
  sectionType: SectionType;
  // BMS / SEK MCQ
  text?: string;
  options?: { id: string; text: string }[];
  correctOptionId?: string;
  explanation?: string;
  subject?: string;
  // TV
  tvTextId?: string;
  statementText?: string;
  isDerivable?: boolean;
  tvExplanation?: string;
  // KFF Zahlenfolgen
  sequence?: number[];
  numOptions?: string[];
  correctOption?: number;
  correctPair?: [number, number];
  zfExplanation?: string;
  // KFF Gedaechtnis
  memText?: string;
  memOptions?: string[];
  memCorrect?: string;
  // KFF Implikationen (Syllogismen)
  premise1?: string;
  premise2?: string;
  sylOptions?: string[];
  sylCorrectOption?: number;
  impExplanation?: string;
  // KFF Wortfluessigkeit
  scrambled?: string;
  letterOptions?: string[];
  correctLetter?: string;
  correctWord?: string;
  // KFF Figuren
  figurenAufgabe?: FigureAssembleTask;
}

// Time tracking per section
interface SectionTimeData {
  sectionId: string;
  label: string;
  parentGroup?: string;
  allocated: number; // seconds allocated
  used: number; // seconds used
  score: number;
  total: number;
}

// ============================================================
// SECTION DEFINITIONS
// ============================================================

const BMS_FULL_SECTIONS: SimSection[] = [
  { id: "bio", label: "Biologie", sectionType: "bms", questionCount: 40, timeLimitMinutes: 30 },
  { id: "chem", label: "Chemie", sectionType: "bms", questionCount: 24, timeLimitMinutes: 18 },
  { id: "phys", label: "Physik", sectionType: "bms", questionCount: 18, timeLimitMinutes: 16 },
  { id: "math", label: "Mathematik", sectionType: "bms", questionCount: 12, timeLimitMinutes: 11 },
];

const TV_FULL_SECTIONS: SimSection[] = [
  {
    id: "tv",
    label: "Textverständnis",
    sectionType: "tv",
    questionCount: 12,
    timeLimitMinutes: 35,
  },
];

const KFF_FULL_SECTIONS: SimSection[] = [
  {
    id: "kff-zf",
    label: "Zahlenfolgen",
    sectionType: "kff-zahlenfolgen",
    questionCount: 10,
    timeLimitMinutes: 15,
    parentGroup: "KFF",
  },
  {
    id: "kff-ged-learn",
    label: "Gedächtnis & Merkfähigkeit — Lernphase",
    sectionType: "kff-gedaechtnis-learn",
    questionCount: 0,
    timeLimitMinutes: 8,
    parentGroup: "KFF",
    learnPhaseMinutes: 8,
  },
  {
    id: "kff-fig",
    label: "Figuren zusammensetzen",
    sectionType: "kff-figuren",
    questionCount: 15,
    timeLimitMinutes: 20,
    parentGroup: "KFF",
  },
  {
    id: "kff-ged",
    label: "Gedächtnis & Merkfähigkeit — Abfrage",
    sectionType: "kff-gedaechtnis",
    questionCount: 25,
    timeLimitMinutes: 15,
    parentGroup: "KFF",
  },
  {
    id: "kff-wf",
    label: "Wortflüssigkeit",
    sectionType: "kff-wortfluessigkeit",
    questionCount: 15,
    timeLimitMinutes: 20,
    parentGroup: "KFF",
  },
  {
    id: "kff-imp",
    label: "Implikationen",
    sectionType: "kff-implikationen",
    questionCount: 10,
    timeLimitMinutes: 10,
    parentGroup: "KFF",
  },
];

const SEK_FULL_SECTIONS: SimSection[] = [
  {
    id: "sek-erk",
    label: "Emotionen erkennen",
    sectionType: "sek-erkennen",
    questionCount: 14,
    timeLimitMinutes: 21,
    parentGroup: "SEK",
  },
  {
    id: "sek-reg",
    label: "Emotionen regulieren",
    sectionType: "sek-regulieren",
    questionCount: 12,
    timeLimitMinutes: 18,
    parentGroup: "SEK",
  },
  {
    id: "sek-ent",
    label: "Soziales Entscheiden",
    sectionType: "sek-entscheiden",
    questionCount: 14,
    timeLimitMinutes: 21,
    parentGroup: "SEK",
  },
];

// Vollsimulation: all sections sequentially with breaks between major groups
function buildFullSimulation(): SimSection[] {
  const bms = BMS_FULL_SECTIONS.map((s, i, arr) =>
    i === arr.length - 1
      ? { ...s, breakAfterMinutes: 5, parentGroup: "BMS" }
      : { ...s, parentGroup: "BMS" }
  );
  const tv = TV_FULL_SECTIONS.map((s) => ({ ...s, breakAfterMinutes: 5, parentGroup: "TV" }));
  const kff = KFF_FULL_SECTIONS.map((s, i, arr) =>
    i === arr.length - 1 ? { ...s, breakAfterMinutes: 5 } : s
  );
  const sek = SEK_FULL_SECTIONS;
  return [...bms, ...tv, ...kff, ...sek];
}

// BMS Kurztest options
const BMS_KURZTEST_OPTIONS = [
  {
    id: "bio-kurz",
    label: "Biologie",
    sectionType: "bms" as SectionType,
    questionCount: 10,
    timeLimitMinutes: 8,
  },
  {
    id: "chem-kurz",
    label: "Chemie",
    sectionType: "bms" as SectionType,
    questionCount: 10,
    timeLimitMinutes: 8,
  },
  {
    id: "phys-kurz",
    label: "Physik",
    sectionType: "bms" as SectionType,
    questionCount: 10,
    timeLimitMinutes: 8,
  },
  {
    id: "math-kurz",
    label: "Mathematik",
    sectionType: "bms" as SectionType,
    questionCount: 10,
    timeLimitMinutes: 8,
  },
  {
    id: "mix-kurz",
    label: "Gemischt",
    sectionType: "bms" as SectionType,
    questionCount: 20,
    timeLimitMinutes: 15,
  },
];

// ============================================================
// QUESTION GENERATORS
// ============================================================

function generateBmsQuestions(section: SimSection, variant?: number): UnifiedQuestion[] {
  const subjectMap: Record<string, string> = {
    bio: "biologie",
    chem: "chemie",
    phys: "physik",
    math: "mathematik",
    "bio-kurz": "biologie",
    "chem-kurz": "chemie",
    "phys-kurz": "physik",
    "math-kurz": "mathematik",
    "mix-kurz": "all",
  };
  const subject = subjectMap[section.id] || "all";
  const rawPool = subject === "all" ? bmsQuestions : getQuestionsBySubject(subject);
  const pool =
    variant != null
      ? seededShuffle(rawPool, variant * 10000 + section.questionCount + section.id.charCodeAt(0))
      : shuffle(rawPool);
  return pool.slice(0, section.questionCount).map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "bms" as SectionType,
    text: q.text,
    options: q.options,
    correctOptionId: q.correctOptionId,
    explanation: q.explanation,
    subject: q.subject,
  }));
}

function generateTvQuestions(section: SimSection): UnifiedQuestion[] {
  // Pick enough texts to get to questionCount statements
  const shuffledTexts = shuffle(tvTexts);
  const questions: UnifiedQuestion[] = [];
  for (const txt of shuffledTexts) {
    for (const stmt of txt.statements) {
      questions.push({
        id: stmt.id,
        sectionId: section.id,
        sectionType: "tv",
        tvTextId: txt.id,
        statementText: stmt.text,
        isDerivable: stmt.isDerivable,
        tvExplanation: stmt.explanation,
      });
    }
    if (questions.length >= section.questionCount) break;
  }
  return questions.slice(0, section.questionCount);
}

/** Difficulty distribution: 20% leicht, 40% mittel, 40% schwer. */
function mixDifficulties<T>(
  gen: (n: number, d: "leicht" | "mittel" | "schwer") => T[],
  count: number
): T[] {
  const nEasy = Math.max(1, Math.round(count * 0.2));
  const nMedium = Math.round(count * 0.4);
  const nHard = Math.max(1, count - nEasy - nMedium);
  const all = [...gen(nEasy, "leicht"), ...gen(nMedium, "mittel"), ...gen(nHard, "schwer")].slice(
    0,
    count
  );
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

function generateZahlenfolgenQuestions(section: SimSection, variant?: number): UnifiedQuestion[] {
  const need = section.questionCount;
  const official = [...OFFICIAL_ZF_EXAMPLES];
  const generated = generateSequenceTaskSet(
    Math.max(0, need - official.length),
    (variant ?? 0) * 7919 + 42
  );
  const pool = shuffle([...official, ...generated]).slice(0, need);
  return pool.map((task) => {
    const numbers = task.sequence.filter((x): x is number => x !== "?");
    const optStrings = task.options.map((o) =>
      o.value ? `${o.value[0]}, ${o.value[1]}` : (o.text ?? "E")
    );
    const correctIndex = task.options.findIndex((o) => o.key === task.correctOptionId);
    return {
      id: task.id,
      sectionId: section.id,
      sectionType: "kff-zahlenfolgen",
      sequence: numbers,
      numOptions: optStrings,
      correctOption: correctIndex >= 0 ? correctIndex : 0,
      correctPair: task.correctNext,
      zfExplanation: task.explanation,
    };
  });
}

/** Reserviert für künftige Gedächtnis-Sektion in der Simulation. */
function _generateGedaechtnisQuestions(section: SimSection): {
  cards: AllergyPass[];
  questions: UnifiedQuestion[];
} {
  const passes = generateAllergyPasses(8);
  const gmQ = generateGedaechtnisQuestionsFromPasses(passes, section.questionCount);
  const questions = gmQ.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-gedaechtnis" as SectionType,
    memText: q.question,
    memOptions: q.options,
    memCorrect: q.options[q.correctIndex],
  }));
  return { cards: passes, questions };
}

function generateImplikationenQuestions(section: SimSection): UnifiedQuestion[] {
  const pool = shuffle([
    ...OFFICIAL_IMPLICATION_EXAMPLES,
    ...implikationenTasks.filter((t) => !OFFICIAL_IMPLICATION_EXAMPLES.some((o) => o.id === t.id)),
  ]).slice(0, section.questionCount);
  return pool.map((t) => ({
    id: t.id,
    sectionId: section.id,
    sectionType: "kff-implikationen" as SectionType,
    premise1: t.premise1,
    premise2: t.premise2,
    sylOptions: [...t.options],
    sylCorrectOption: t.correctAnswer,
    impExplanation: t.explanation,
  }));
}

function generateWortflüssigkeitQuestions(section: SimSection): UnifiedQuestion[] {
  const set = mixDifficulties(generateWortflüssigkeitSet, section.questionCount);
  return set.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-wortfluessigkeit",
    scrambled: q.scrambled,
    letterOptions: q.options,
    correctLetter: q.options.includes(q.correctWord[0]) ? q.correctWord[0] : "-",
    correctWord: q.correctWord,
  }));
}

function generateFigurenQuestions(section: SimSection): UnifiedQuestion[] {
  const diffPattern: ("easy" | "medium" | "hard")[] = [
    "easy",
    "medium",
    "medium",
    "hard",
    "medium",
    "hard",
    "hard",
    "medium",
    "easy",
    "hard",
  ];
  const seed = Date.now();
  const pool: FigureAssembleTask[] = [];
  const numShapes = SOLUTION_SHAPES.length;
  for (let i = 0; i < section.questionCount; i++) {
    const diff = diffPattern[i % 10];
    try {
      const t = generateFigurenTrainingTask(diff, seed + i * 7919, i % numShapes);
      if (t) pool.push(t);
    } catch {
      /* skip failed generation */
    }
  }
  return pool.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-figuren",
    figurenAufgabe: q,
  }));
}

function generateSekQuestions(section: SimSection): UnifiedQuestion[] {
  // Split emotion questions: 'erkennen' type have question about "Welche Emotion" pattern
  // 'regulieren' have "Welche Reaktion" pattern
  // For soziales entscheiden, we reuse whatever is left
  const allSek = shuffle([...emotionQuestions]);
  const erkennen = allSek.filter(
    (q) => q.question.includes("Welche Emotion") || q.question.includes("emotion")
  );
  const regulieren = allSek.filter(
    (q) =>
      q.question.includes("Reaktion") ||
      q.question.includes("reagieren") ||
      q.question.includes("angemessen")
  );

  let pool: EmotionQuestion[];
  if (section.sectionType === "sek-erkennen") {
    pool =
      erkennen.length >= section.questionCount
        ? erkennen.slice(0, section.questionCount)
        : [...erkennen, ...shuffle(allSek.filter((q) => !erkennen.includes(q)))].slice(
            0,
            section.questionCount
          );
  } else if (section.sectionType === "sek-regulieren") {
    pool =
      regulieren.length >= section.questionCount
        ? regulieren.slice(0, section.questionCount)
        : [...regulieren, ...shuffle(allSek.filter((q) => !regulieren.includes(q)))].slice(
            0,
            section.questionCount
          );
  } else {
    // soziales entscheiden - use whatever remains or all mixed
    const used = new Set([
      ...erkennen.slice(0, 10).map((q) => q.id),
      ...regulieren.slice(0, 10).map((q) => q.id),
    ]);
    const remaining = allSek.filter((q) => !used.has(q.id));
    pool =
      remaining.length >= section.questionCount
        ? remaining.slice(0, section.questionCount)
        : [...remaining, ...shuffle(allSek)].slice(0, section.questionCount);
  }

  return pool.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: section.sectionType,
    text: q.situation + "\n\n" + q.question,
    options: q.options,
    correctOptionId: q.correctOptionId,
    explanation: q.explanation,
  }));
}

function generateQuestionsForSection(
  section: SimSection,
  variant?: number,
  existingGedaechtnisPasses?: AllergyPass[]
): { questions: UnifiedQuestion[]; cards?: AllergyPass[] } {
  switch (section.sectionType) {
    case "bms":
      return { questions: generateBmsQuestions(section, variant) };
    case "tv":
      return { questions: generateTvQuestions(section) };
    case "kff-zahlenfolgen":
      return { questions: generateZahlenfolgenQuestions(section, variant) };
    case "kff-gedaechtnis-learn": {
      const passes = generateAllergyPasses(8);
      return { questions: [], cards: passes };
    }
    case "kff-gedaechtnis": {
      const passes = existingGedaechtnisPasses ?? [];
      const gmQ = generateGedaechtnisQuestionsFromPasses(passes, section.questionCount);
      const questions = gmQ.map((q) => ({
        id: q.id,
        sectionId: section.id,
        sectionType: "kff-gedaechtnis" as SectionType,
        memText: q.question,
        memOptions: q.options,
        memCorrect: q.options[q.correctIndex],
      }));
      return { questions };
    }
    case "kff-implikationen":
      return { questions: generateImplikationenQuestions(section) };
    case "kff-wortfluessigkeit":
      return { questions: generateWortflüssigkeitQuestions(section) };
    case "kff-figuren":
      return { questions: generateFigurenQuestions(section) };
    case "sek-erkennen":
    case "sek-regulieren":
    case "sek-entscheiden":
      return { questions: generateSekQuestions(section) };
    default:
      return { questions: [] };
  }
}

// ============================================================
// SCORING HELPERS
// ============================================================

function isQuestionCorrect(q: UnifiedQuestion, answer: string): boolean {
  switch (q.sectionType) {
    case "bms":
    case "sek-erkennen":
    case "sek-regulieren":
    case "sek-entscheiden":
      return answer === q.correctOptionId;
    case "tv":
      return (answer === "ableitbar") === q.isDerivable;
    case "kff-zahlenfolgen":
      return answer === String(q.correctOption);
    case "kff-gedaechtnis":
      return answer === q.memCorrect;
    case "kff-implikationen":
      return answer === String(q.sylCorrectOption);
    case "kff-wortfluessigkeit":
      return answer === q.correctLetter;
    case "kff-figuren": {
      const FZ_LABELS = ["A", "B", "C", "D", "E"];
      return answer === FZ_LABELS[q.figurenAufgabe?.correctIndex ?? -1];
    }
    default:
      return false;
  }
}

function getCorrectAnswerDisplay(q: UnifiedQuestion): string {
  switch (q.sectionType) {
    case "bms":
    case "sek-erkennen":
    case "sek-regulieren":
    case "sek-entscheiden":
      return q.options?.find((o) => o.id === q.correctOptionId)?.text || "";
    case "tv":
      return q.isDerivable ? "Ableitbar" : "Nicht ableitbar";
    case "kff-zahlenfolgen":
      return q.correctPair ? `${q.correctPair[0]}, ${q.correctPair[1]}` : "";
    case "kff-gedaechtnis":
      return q.memCorrect || "";
    case "kff-implikationen":
      return q.sylOptions?.[q.sylCorrectOption ?? 0] || "";
    case "kff-wortfluessigkeit":
      return q.correctLetter === "-"
        ? `E – Keine der Antwortmöglichkeiten ist richtig. (${q.correctWord})`
        : `${q.correctLetter} (${q.correctWord})`;
    case "kff-figuren": {
      const FZ_LABELS2 = ["A", "B", "C", "D", "E"];
      return `Option ${FZ_LABELS2[q.figurenAufgabe?.correctIndex ?? 0]}`;
    }
    default:
      return "";
  }
}

function getUserAnswerDisplay(q: UnifiedQuestion, answer: string): string {
  if (!answer) return "Keine Antwort";
  switch (q.sectionType) {
    case "bms":
    case "sek-erkennen":
    case "sek-regulieren":
    case "sek-entscheiden":
      return q.options?.find((o) => o.id === answer)?.text || "Keine Antwort";
    case "tv":
      return answer === "ableitbar" ? "Ableitbar" : "Nicht ableitbar";
    case "kff-zahlenfolgen":
      return answer;
    case "kff-gedaechtnis":
      return answer;
    case "kff-implikationen":
      return answer === "gültig" ? "Gültig" : "Ungültig";
    case "kff-wortfluessigkeit":
      return answer;
    case "kff-figuren":
      return `Option ${answer.toUpperCase()}`;
    default:
      return answer;
  }
}

function getQuestionExplanation(q: UnifiedQuestion): string {
  return (
    q.explanation ||
    q.tvExplanation ||
    q.zfExplanation ||
    q.impExplanation ||
    q.figurenAufgabe?.explanation ||
    ""
  );
}

function getQuestionDisplayText(q: UnifiedQuestion): string {
  switch (q.sectionType) {
    case "bms":
    case "sek-erkennen":
    case "sek-regulieren":
    case "sek-entscheiden":
      return q.text || "";
    case "tv":
      return q.statementText || "";
    case "kff-zahlenfolgen":
      return `Welche Zahl folgt? ${q.sequence?.join(", ")}, ?`;
    case "kff-gedaechtnis":
      return q.memText || "";
    case "kff-implikationen":
      return `${q.premise1} / ${q.premise2}`;
    case "kff-wortfluessigkeit":
      return `Buchstabensalat: ${q.scrambled}`;
    case "kff-figuren":
      return "Figuren zusammensetzen";
    default:
      return "";
  }
}

// ============================================================
// SECTION GROUP LABELS
// ============================================================

function getSectionGroupLabel(sectionType: SectionType): string {
  if (sectionType === "bms") return "BMS";
  if (sectionType === "tv") return "TV";
  if (sectionType.startsWith("kff")) return "KFF";
  if (sectionType.startsWith("sek")) return "SEK";
  return "";
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Simulation() {
  usePageTitle("MedAT Simulation");
  const [mode, setMode] = useState<Mode>("select");
  const [activeTab, setActiveTab] = useState<"start" | "verlauf">("start");
  const currentResultIdRef = useRef<string>("");
  const [simType, setSimType] = useState<"full" | "bms" | "tv" | "kff" | "sek" | "kurz">("full");
  const [sections, setSections] = useState<SimSection[]>([]);
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [sectionQuestions, setSectionQuestions] = useState<UnifiedQuestion[]>([]);
  const [allSectionQuestions, setAllSectionQuestions] = useState<Map<string, UnifiedQuestion[]>>(
    new Map()
  );
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [breakTimeLeft, setBreakTimeLeft] = useState(0);
  const [allergyCards, setAllergyCards] = useState<AllergyPass[]>([]);
  const [learnTimeLeft, setLearnTimeLeft] = useState(0);
  const [sectionTimeData, setSectionTimeData] = useState<SectionTimeData[]>([]);
  const [sectionStartTime, setSectionStartTime] = useState(0);
  void sectionStartTime;
  const [simVariant, setSimVariant] = useState<number | undefined>(undefined);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { addXP, checkStreak, saveQuizResult, logActivity, quizResults } = useStore();
  const getMinutes = useSessionTimer();
  const { recordAnswer: recordAdaptive } = useAdaptiveStore();

  // Track which TV text content to show
  const tvTextMap = useMemo(() => {
    const map = new Map<string, TVText>();
    for (const t of tvTexts) map.set(t.id, t);
    return map;
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  // ============================================================
  // SIMULATION START
  // ============================================================

  const startSimulation = useCallback(
    (
      type: "full" | "bms" | "tv" | "kff" | "sek" | "kurz",
      sectionId?: string,
      variant?: number
    ) => {
      setSimType(type);
      setSimVariant(variant);

      let secs: SimSection[];

      switch (type) {
        case "full":
          secs = buildFullSimulation();
          break;
        case "bms":
          secs = BMS_FULL_SECTIONS.map((s) => ({ ...s, parentGroup: "BMS" }));
          break;
        case "tv":
          secs = TV_FULL_SECTIONS.map((s) => ({ ...s, parentGroup: "TV" }));
          break;
        case "kff":
          secs = KFF_FULL_SECTIONS;
          break;
        case "sek":
          secs = SEK_FULL_SECTIONS;
          break;
        case "kurz": {
          const opt =
            BMS_KURZTEST_OPTIONS.find((o) => o.id === sectionId) || BMS_KURZTEST_OPTIONS[4];
          secs = [{ ...opt, parentGroup: "BMS" }];
          break;
        }
        default:
          secs = [];
      }

      setSections(secs);

      // Pre-generate questions for all sections
      const questionMap = new Map<string, UnifiedQuestion[]>();
      let cardsForGedaechtnis: AllergyPass[] = [];

      for (const sec of secs) {
        const result = generateQuestionsForSection(
          sec,
          variant,
          cardsForGedaechtnis.length > 0 ? cardsForGedaechtnis : undefined
        );
        questionMap.set(sec.id, result.questions);
        if (result.cards) cardsForGedaechtnis = result.cards;
      }

      setAllSectionQuestions(questionMap);
      setAllergyCards(cardsForGedaechtnis);
      setSectionTimeData([]);

      // Load first section
      const firstSec = secs[0];
      const firstQ = questionMap.get(firstSec.id) || [];
      setSectionQuestions(firstQ);
      setCurrentSectionIdx(0);
      setIndex(0);
      setAnswers({});
      setSectionStartTime(Date.now());

      // If first section is gedaechtnis learn phase (or ged with learn), go to learn mode
      if (
        firstSec.sectionType === "kff-gedaechtnis-learn" ||
        (firstSec.sectionType === "kff-gedaechtnis" && firstSec.learnPhaseMinutes)
      ) {
        setLearnTimeLeft((firstSec.learnPhaseMinutes ?? firstSec.timeLimitMinutes) * 60);
        setMode("gedaechtnis-learn");
      } else {
        setTimeLeft(firstSec.timeLimitMinutes * 60);
        setMode("playing");
      }
    },
    []
  );

  // ============================================================
  // SECTION ADVANCEMENT
  // ============================================================

  const recordSectionTime = useCallback(
    (sectionIdx: number, secs: SimSection[], timeRemaining: number) => {
      const sec = secs[sectionIdx];
      if (!sec) return;
      const allocated = sec.timeLimitMinutes * 60;
      const used = allocated - timeRemaining;
      const questions = allSectionQuestions.get(sec.id) || [];
      const score = questions.filter((q) => isQuestionCorrect(q, answers[q.id] || "")).length;

      setSectionTimeData((prev) => [
        ...prev,
        {
          sectionId: sec.id,
          label: sec.label,
          parentGroup: sec.parentGroup,
          allocated,
          used: Math.max(0, used),
          score,
          total: questions.length,
        },
      ]);
    },
    [allSectionQuestions, answers]
  );

  const finishSimulation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Record last section time
    recordSectionTime(currentSectionIdx, sections, timeLeft);

    // Calculate total score
    let totalScore = 0;
    let totalQuestions = 0;
    const allAnswerEntries: { questionId: string; selectedAnswer: string; correct: boolean }[] = [];

    for (const [, questions] of allSectionQuestions) {
      for (const q of questions) {
        const ans = answers[q.id] || "";
        const correct = isQuestionCorrect(q, ans);
        if (correct) totalScore++;
        totalQuestions++;
        allAnswerEntries.push({ questionId: q.id, selectedAnswer: ans, correct });
      }
    }

    const subjectLabel =
      simType === "full"
        ? "MedAT-H Vollsimulation"
        : simType === "bms"
          ? "BMS Simulation"
          : simType === "tv"
            ? "TV Simulation"
            : simType === "kff"
              ? "KFF Simulation"
              : simType === "sek"
                ? "SEK Simulation"
                : sections[0]?.label || "Kurztest";

    const resultId = `sim-${Date.now()}`;
    currentResultIdRef.current = resultId;
    saveQuizResult({
      id: resultId,
      type: "simulation",
      subject: subjectLabel,
      score: totalScore,
      total: totalQuestions,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
      durationMinutes: getMinutes(),
      answers: allAnswerEntries,
    });

    // Record BMS answers in adaptive store
    allAnswerEntries.forEach((entry) => {
      const swId =
        getDirectStichwortId(entry.questionId) || getStichwortForQuestion(entry.questionId);
      if (swId) recordAdaptive(swId, entry.correct, 30);
    });

    addXP(totalScore * 15);
    checkStreak();
    logActivity(totalQuestions, getMinutes());

    // Sync detailed simulation result to backend
    import("@/lib/backendSync").then(({ syncSimulationResult }) =>
      syncSimulationResult({
        bms_score: totalScore,
        bms_total: totalQuestions,
        total_score: totalQuestions > 0 ? (totalScore / totalQuestions) * 100 : 0,
        duration_minutes: getMinutes(),
        details: { sections: sections.map((s) => s.label), subjectLabel },
      })
    );

    setMode("result");
    setIndex(0);
  }, [
    answers,
    allSectionQuestions,
    sections,
    currentSectionIdx,
    timeLeft,
    simType,
    recordSectionTime,
    saveQuizResult,
    addXP,
    checkStreak,
    logActivity,
    getMinutes,
    recordAdaptive,
  ]);

  const loadNextSectionAt = useCallback(
    (idx: number) => {
      if (idx >= sections.length) {
        finishSimulation();
        return;
      }

      const sec = sections[idx];
      const q = allSectionQuestions.get(sec.id) || [];
      setSectionQuestions(q);
      setCurrentSectionIdx(idx);
      setIndex(0);
      setSectionStartTime(Date.now());

      // If gedaechtnis with learn phase, or gedaechtnis-learn section
      if (
        sec.sectionType === "kff-gedaechtnis-learn" ||
        (sec.sectionType === "kff-gedaechtnis" && sec.learnPhaseMinutes)
      ) {
        setLearnTimeLeft((sec.learnPhaseMinutes ?? sec.timeLimitMinutes) * 60);
        setMode("gedaechtnis-learn");
      } else {
        setTimeLeft(sec.timeLimitMinutes * 60);
        setMode("playing");
      }
    },
    [sections, allSectionQuestions, finishSimulation]
  );

  const loadNextSection = useCallback(() => {
    loadNextSectionAt(currentSectionIdx + 1);
  }, [currentSectionIdx, loadNextSectionAt]);

  const advanceSection = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    const currentSec = sections[currentSectionIdx];
    const remaining = currentSec?.sectionType === "kff-gedaechtnis-learn" ? 0 : timeLeft;
    recordSectionTime(currentSectionIdx, sections, remaining);

    const nextIdx = currentSectionIdx + 1;
    if (nextIdx >= sections.length) {
      // Don't call finishSimulation directly because recordSectionTime updates are async
      // Instead, we call finishSimulation which will also record
      finishSimulation();
      return;
    }

    if (currentSec.breakAfterMinutes) {
      setBreakTimeLeft(currentSec.breakAfterMinutes * 60);
      setMode("break");
    } else {
      loadNextSectionAt(nextIdx);
    }
  }, [
    currentSectionIdx,
    sections,
    timeLeft,
    recordSectionTime,
    finishSimulation,
    loadNextSectionAt,
  ]);

  const startGedaechtnisQuiz = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const sec = sections[currentSectionIdx];
    setTimeLeft(sec.timeLimitMinutes * 60);
    setSectionStartTime(Date.now());
    setMode("playing");
  }, [sections, currentSectionIdx]);

  // ============================================================
  // TIMERS
  // ============================================================

  const hasTimeLeft = timeLeft > 0;
  const hasBreakTimeLeft = breakTimeLeft > 0;
  const hasLearnTimeLeft = learnTimeLeft > 0;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (mode === "playing" && hasTimeLeft) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            advanceSection();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }

    if (mode === "break" && hasBreakTimeLeft) {
      timerRef.current = setInterval(() => {
        setBreakTimeLeft((t) => {
          if (t <= 1) {
            loadNextSection();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }

    if (mode === "gedaechtnis-learn" && hasLearnTimeLeft) {
      timerRef.current = setInterval(() => {
        setLearnTimeLeft((t) => {
          if (t <= 1) {
            const sec = sections[currentSectionIdx];
            if (sec?.sectionType === "kff-gedaechtnis-learn") {
              advanceSection();
            } else {
              startGedaechtnisQuiz();
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [
    mode,
    hasTimeLeft,
    hasBreakTimeLeft,
    hasLearnTimeLeft,
    sections,
    currentSectionIdx,
    advanceSection,
    startGedaechtnisQuiz,
    loadNextSection,
  ]);

  // ============================================================
  // SELECT MODE
  // ============================================================

  if (mode === "select") {
    const fullSections = buildFullSimulation();
    const totalFullQuestions = fullSections.reduce((s, x) => s + x.questionCount, 0);
    const totalFullMinutes = fullSections.reduce(
      (s, x) => s + x.timeLimitMinutes + (x.breakAfterMinutes || 0) + (x.learnPhaseMinutes || 0),
      0
    );

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="hero-orbs text-center py-6">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Testsimulation</h1>
          <p className="text-[var(--muted)] mt-1">
            Simuliere den MedAT-H unter realistischen Bedingungen.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-6 border-b border-[var(--border)]">
          <button
            onClick={() => setActiveTab("start")}
            className={`pb-2.5 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "start"
                ? "border-b-2 border-[var(--accent)] text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Simulation starten
          </button>
          <button
            onClick={() => setActiveTab("verlauf")}
            className={`pb-2.5 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "verlauf"
                ? "border-b-2 border-[var(--accent)] text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Verlauf
          </button>
        </div>

        {activeTab === "verlauf" ? (
          <SimulationHistory />
        ) : (
          <>
            {/* Full MedAT-H Simulation */}
            <div className="card-glass p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">
                    MedAT-H Vollsimulation
                  </h2>
                  <p className="text-sm text-[var(--muted)]">
                    Alle 4 Testteile mit exaktem Timing und Pausen
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* BMS */}
                <div className="bg-[var(--border)]/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span className="font-semibold text-sm text-[var(--text-primary)]">BMS</span>
                    <span className="text-xs text-[var(--muted)]">94 Fragen, 75 Min</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {BMS_FULL_SECTIONS.map((sec) => (
                      <div key={sec.id} className="text-center text-xs text-[var(--muted)]">
                        {sec.label}: {sec.questionCount}F / {sec.timeLimitMinutes}Min
                      </div>
                    ))}
                  </div>
                </div>
                {/* TV */}
                <div className="bg-[var(--border)]/30 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-sm text-[var(--text-primary)]">
                      Textverständnis
                    </span>
                    <span className="text-xs text-[var(--muted)]">12 Aussagen, 35 Min</span>
                  </div>
                </div>
                {/* KFF */}
                <div className="bg-[var(--border)]/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-sm text-[var(--text-primary)]">KFF</span>
                    <span className="text-xs text-[var(--muted)]">5 Untertests, ~93 Min</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-[var(--muted)]">
                    <div>Zahlenfolgen: 10 / 25Min</div>
                    <div>Gedächtnis: 8Min + 25F / 15Min</div>
                    <div>Implikationen: 10 / 10Min</div>
                    <div>Wortflüssigkeit: 20 / 20Min</div>
                    <div>Figuren: 10 / 15Min</div>
                  </div>
                </div>
                {/* SEK */}
                <div className="bg-[var(--border)]/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span className="font-semibold text-sm text-[var(--text-primary)]">SEK</span>
                    <span className="text-xs text-[var(--muted)]">3 Untertests, 45 Min</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-[var(--muted)]">
                    <div>Erkennen: 10 / 15Min</div>
                    <div>Regulieren: 10 / 15Min</div>
                    <div>Entscheiden: 10 / 15Min</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-300">
                      Gesamt: {totalFullQuestions} Fragen
                    </p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">
                      ~{totalFullMinutes} Minuten inkl. Pausen
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Button
                      key={v}
                      variant={v === 1 ? "primary" : "outline"}
                      onClick={() => startSimulation("full", undefined, v)}
                    >
                      <Play className="w-4 h-4 mr-1" /> Simulation {v}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Section Tests */}
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Einzelne Testteile</h2>
            <div className="grid grid-cols-4 gap-4 stagger-children">
              {/* BMS */}
              <div className="card-glass p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">BMS</h3>
                    <p className="text-xs text-[var(--muted)]">94 Fragen, 75 Min</p>
                  </div>
                </div>
                <Button variant="premium" className="w-full" onClick={() => startSimulation("bms")}>
                  <Play className="w-4 h-4 mr-1" /> BMS starten
                </Button>
              </div>

              {/* TV */}
              <div className="card-glass p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">Textverständnis</h3>
                    <p className="text-xs text-[var(--muted)]">12 Aussagen, 35 Min</p>
                  </div>
                </div>
                <Button variant="premium" className="w-full" onClick={() => startSimulation("tv")}>
                  <Play className="w-4 h-4 mr-1" /> TV starten
                </Button>
              </div>

              {/* KFF */}
              <div className="card-glass p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">KFF</h3>
                    <p className="text-xs text-[var(--muted)]">5 Untertests, ~93 Min</p>
                  </div>
                </div>
                <Button variant="premium" className="w-full" onClick={() => startSimulation("kff")}>
                  <Play className="w-4 h-4 mr-1" /> KFF starten
                </Button>
              </div>

              {/* SEK */}
              <div className="card-glass p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">SEK</h3>
                    <p className="text-xs text-[var(--muted)]">3 Untertests, 45 Min</p>
                  </div>
                </div>
                <Button variant="premium" className="w-full" onClick={() => startSimulation("sek")}>
                  <Play className="w-4 h-4 mr-1" /> SEK starten
                </Button>
              </div>
            </div>

            {/* BMS Kurztest */}
            <div className="card-glass p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <Timer className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">Kurztest (BMS)</h2>
                  <p className="text-sm text-[var(--muted)]">
                    Schnelles Üben eines einzelnen Fachs
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 stagger-children">
                {BMS_KURZTEST_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => startSimulation("kurz", opt.id)}
                    className="bg-[var(--border)]/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-4 text-left transition-colors cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    <p className="font-semibold text-[var(--text-primary)]">{opt.label}</p>
                    <p className="text-xs text-[var(--muted)]">
                      {opt.questionCount} Fragen / {opt.timeLimitMinutes} Min
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // ============================================================
  // BREAK MODE
  // ============================================================

  if (mode === "break") {
    const nextSec = sections[currentSectionIdx + 1];
    const currentSec = sections[currentSectionIdx];
    const currentGroup = getSectionGroupLabel(currentSec.sectionType);
    const nextGroup = nextSec ? getSectionGroupLabel(nextSec.sectionType) : "";

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="card-glass p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <Coffee className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Pause</h2>
          <p className="text-[var(--muted)]">
            {currentGroup}: {currentSec.label} abgeschlossen!
            {nextSec && (
              <span>
                {" "}
                Nächster Teil: {nextGroup !== currentGroup ? `${nextGroup} - ` : ""}
                {nextSec.label} ({nextSec.questionCount} Fragen, {nextSec.timeLimitMinutes} Min)
              </span>
            )}
          </p>
          <div className="text-4xl font-mono font-bold text-yellow-600 dark:text-yellow-400">
            {formatTime(breakTimeLeft)}
          </div>
          <Button variant="premium" onClick={loadNextSection}>
            <Play className="w-4 h-4 mr-1" /> Pause überspringen
          </Button>
        </div>
      </div>
    );
  }

  // ============================================================
  // GEDAECHTNIS LEARN MODE
  // ============================================================

  if (mode === "gedaechtnis-learn") {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="info">Gedächtnis & Merkfähigkeit</Badge>
            <span className="text-sm text-[var(--muted)] ml-2">
              Lernphase - Präge dir die Ausweise ein!
            </span>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${learnTimeLeft < 120 ? "bg-red-50 dark:bg-red-900/20" : "bg-[var(--border)]/50"}`}
          >
            <Eye className="w-4 h-4 text-[var(--muted)]" />
            <span
              className={`text-sm font-mono font-bold ${learnTimeLeft < 120 ? "text-red-600 dark:text-red-400" : "text-[var(--text-primary)]"}`}
            >
              {formatTime(learnTimeLeft)}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-sm text-blue-800 dark:text-blue-300">
          <strong>Aufgabe:</strong> Präge dir die folgenden 8 Allergieausweise ein. Du wirst
          anschließend Fragen zu den Personen, Blutgruppen, Allergien und weiteren Details
          beantworten müssen.
        </div>

        <div className="grid grid-cols-2 gap-4">
          {allergyCards.map((pass) => {
            const initials = pass.name
              .split(/\s+/)
              .map((p) => p[0])
              .join("")
              .toUpperCase()
              .slice(0, 2);
            return (
              <div
                key={pass.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--border)]/50 shadow-md overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2 border-b-2 border-red-500 bg-[var(--card)]">
                  <span className="text-base font-bold tracking-wide text-[var(--text-secondary)]">
                    ALLERGIEAUSWEIS
                  </span>
                  <span className="text-red-500 text-xl font-bold">+</span>
                </div>
                <div className="flex p-3 gap-3 bg-[var(--card)]">
                  <div className="w-24 h-28 shrink-0 rounded border border-[var(--border)] overflow-hidden bg-[var(--border)]">
                    {pass.photo ? (
                      <img
                        src={pass.photo}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-xl font-bold">
                        {initials}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-sm space-y-0.5">
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">Name:</span>{" "}
                      <span className="text-[var(--text-primary)]">{pass.name.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Geburtstag:
                      </span>{" "}
                      <span className="text-[var(--text-primary)]">{pass.birthdate}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Medikamenteneinnahme:
                      </span>{" "}
                      <span className="text-[var(--text-primary)]">
                        {pass.medications ? "Ja" : "Nein"}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Blutgruppe:
                      </span>{" "}
                      <span className="text-[var(--text-primary)]">{pass.bloodGroup}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Bekannte Allergien:
                      </span>{" "}
                      <span className="text-[var(--text-primary)]">
                        {pass.allergies.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Ausweisnummer:
                      </span>{" "}
                      <span className="font-mono text-[var(--text-primary)]">
                        {pass.passportNumber}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Ausstellungsland:
                      </span>{" "}
                      <span className="text-[var(--text-primary)]">{pass.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button variant="premium" onClick={startGedaechtnisQuiz}>
            <Play className="w-4 h-4 mr-1" /> Lernphase beenden & Abfrage starten
          </Button>
        </div>
      </div>
    );
  }

  // ============================================================
  // RESULT MODE
  // ============================================================

  if (mode === "result") {
    // Gather all questions across sections
    const allQuestions: UnifiedQuestion[] = [];
    for (const sec of sections) {
      const q = allSectionQuestions.get(sec.id) || [];
      allQuestions.push(...q);
    }

    const totalScore = allQuestions.filter((q) => isQuestionCorrect(q, answers[q.id] || "")).length;
    const totalPct =
      allQuestions.length > 0 ? Math.round((totalScore / allQuestions.length) * 100) : 0;

    // Group scores by parent group
    const groupScores = new Map<string, { score: number; total: number; label: string }>();
    for (const sec of sections) {
      const group = sec.parentGroup || sec.label;
      const q = allSectionQuestions.get(sec.id) || [];
      const score = q.filter((qq) => isQuestionCorrect(qq, answers[qq.id] || "")).length;
      const existing = groupScores.get(group) || { score: 0, total: 0, label: group };
      groupScores.set(group, {
        score: existing.score + score,
        total: existing.total + q.length,
        label: group,
      });
    }

    // Per-section scores
    const sectionScores = sections.map((sec) => {
      const q = allSectionQuestions.get(sec.id) || [];
      const score = q.filter((qq) => isQuestionCorrect(qq, answers[qq.id] || "")).length;
      return {
        sec,
        score,
        total: q.length,
        pct: q.length > 0 ? Math.round((score / q.length) * 100) : 0,
      };
    });

    // Find weakest areas (lowest percentage, min 3 questions)
    const weakAreas = sectionScores
      .filter((s) => s.total >= 3)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);

    // Time data from sectionTimeData
    const timeEntries = sectionTimeData;

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="hero-orbs text-center py-4">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Simulationsergebnis</h1>
        </div>

        {/* Overall score */}
        <div className="card-glass p-6 text-center">
          <div className="text-5xl font-bold text-[var(--accent)]/60">{totalPct}%</div>
          <p className="text-lg text-[var(--muted)] mt-1">
            {totalScore} von {allQuestions.length} richtig
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
            +{totalScore * 15} XP erhalten
          </p>
        </div>

        {/* Group breakdown */}
        {groupScores.size > 1 && (
          <div className="grid grid-cols-4 gap-3 stagger-children">
            {[...groupScores.entries()].map(([key, data]) => {
              const pct = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
              return (
                <div key={key} className="card-glass p-4 text-center">
                  <p className="text-2xl font-bold text-[var(--accent)]/60">{pct}%</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{data.label}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {data.score}/{data.total}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Per-section breakdown */}
        <div className="card-glass p-5 space-y-3">
          <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Detaillierte Aufschlüsselung
          </h3>
          {sectionScores.map((s) => (
            <div
              key={s.sec.id}
              className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-b-0"
            >
              <div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {s.sec.label}
                </span>
                {s.sec.parentGroup && (
                  <span className="text-xs text-[var(--muted)] ml-2">({s.sec.parentGroup})</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[var(--muted)]">
                  {s.score}/{s.total}
                </span>
                <div className="w-24 bg-[var(--border)] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${s.pct >= 70 ? "bg-green-500" : s.pct >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
                <span
                  className={`text-sm font-bold ${s.pct >= 70 ? "text-green-600 dark:text-green-400" : s.pct >= 50 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {s.pct}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Time usage */}
        {timeEntries.length > 0 && (
          <div className="card-glass p-5 space-y-3">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Clock className="w-4 h-4" /> Zeitnutzung
            </h3>
            {timeEntries.map((entry) => {
              const usedPct =
                entry.allocated > 0 ? Math.round((entry.used / entry.allocated) * 100) : 0;
              return (
                <div
                  key={entry.sectionId}
                  className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-b-0"
                >
                  <span className="text-sm text-[var(--text-primary)]">{entry.label}</span>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span>
                      {formatTime(entry.used)} / {formatTime(entry.allocated)}
                    </span>
                    <span
                      className={`font-medium ${usedPct > 90 ? "text-red-600 dark:text-red-400" : "text-[var(--muted)]"}`}
                    >
                      ({usedPct}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Weakness analysis */}
        {weakAreas.length > 0 && weakAreas[0].pct < 70 && (
          <div className="card-glass p-5 space-y-3 border-l-4 border-l-amber-500">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Schwächen-Analyse
            </h3>
            <p className="text-sm text-[var(--muted)]">
              Die folgenden Bereiche haben die niedrigsten Ergebnisse. Wir empfehlen, diese Themen
              gezielt zu wiederholen:
            </p>
            <div className="space-y-2">
              {weakAreas
                .filter((a) => a.pct < 70)
                .map((area) => (
                  <div
                    key={area.sec.id}
                    className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg p-3"
                  >
                    <XCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {area.sec.label}
                      </span>
                      <span className="text-xs text-[var(--muted)] ml-2">
                        {area.pct}% ({area.score}/{area.total})
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Previous attempts comparison */}
        {(() => {
          const prevSimulations = (quizResults ?? [])
            .filter((r) => r.type === "simulation" && r.id !== currentResultIdRef.current)
            .sort((a, b) => (b.timestamp ?? b.date).localeCompare(a.timestamp ?? a.date))
            .slice(0, 5);
          if (prevSimulations.length === 0) return null;
          const lastPct =
            prevSimulations[0] && prevSimulations[0].total > 0
              ? Math.round((prevSimulations[0].score / prevSimulations[0].total) * 100)
              : 0;
          const diff = totalPct - lastPct;
          return (
            <div className="card-glass p-5 space-y-3">
              <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Vergleich mit früheren Versuchen
              </h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--accent)]/60">{totalPct}%</p>
                  <p className="text-xs text-[var(--muted)]">Jetzt</p>
                </div>
                <div
                  className={`text-center px-3 py-1 rounded-lg ${diff > 0 ? "bg-green-50 dark:bg-green-900/20" : diff < 0 ? "bg-red-50 dark:bg-red-900/20" : "bg-[var(--border)]/30"}`}
                >
                  <p
                    className={`text-lg font-bold ${diff > 0 ? "text-green-600 dark:text-green-400" : diff < 0 ? "text-red-600 dark:text-red-400" : "text-[var(--muted)]"}`}
                  >
                    {diff > 0 ? "+" : ""}
                    {diff}%
                  </p>
                  <p className="text-xs text-[var(--muted)]">vs. letztes Mal</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--muted)]">{lastPct}%</p>
                  <p className="text-xs text-[var(--muted)]">Letztes Mal</p>
                </div>
              </div>
              {prevSimulations.length > 1 && (
                <div className="flex items-end gap-1 h-16">
                  {[...prevSimulations].reverse().map((r) => {
                    const pct = r.total > 0 ? Math.round((r.score / r.total) * 100) : 0;
                    return (
                      <div key={r.id} className="flex-1 flex flex-col items-center gap-0.5">
                        <div
                          className="w-full bg-[var(--accent)]/20 dark:bg-[var(--accent)]/80 rounded-t"
                          style={{ height: `${Math.max(4, (pct / 100) * 48)}px` }}
                        />
                        <span className="text-[10px] text-[var(--muted)]">{pct}%</span>
                      </div>
                    );
                  })}
                  <div className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full bg-[var(--accent)]/60 rounded-t"
                      style={{ height: `${Math.max(4, (totalPct / 100) * 48)}px` }}
                    />
                    <span className="text-[10px] font-bold text-[var(--accent)]/30">
                      {totalPct}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* Train weak areas link */}
        {weakAreas.length > 0 && weakAreas[0].pct < 70 && (
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link
                to={`/fragen-trainer?subjects=${weakAreas
                  .filter((a) => a.pct < 70)
                  .map((a) => a.sec.parentGroup || a.sec.label)
                  .filter(Boolean)
                  .join(",")}`}
              >
                <Target className="w-4 h-4" /> Schwachstellen gezielt trainieren
              </Link>
            </Button>
          </div>
        )}

        {/* Detailed per-question results */}
        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-[var(--accent)]/60 hover:underline">
            Alle {allQuestions.length} Fragen im Detail anzeigen
          </summary>
          <div className="space-y-3 mt-4">
            {allQuestions.map((q, i) => {
              const ans = answers[q.id] || "";
              const correct = isQuestionCorrect(q, ans);
              const explanation = getQuestionExplanation(q);
              return (
                <Card
                  key={q.id}
                  className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      {correct ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-[var(--text-primary)]">
                            {i + 1}. {getQuestionDisplayText(q).slice(0, 120)}
                            {getQuestionDisplayText(q).length > 120 ? "..." : ""}
                          </span>
                          <Badge variant="info" className="shrink-0">
                            {getSectionGroupLabel(q.sectionType)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {!correct && (
                      <div className="ml-6 space-y-1 text-sm">
                        <p className="text-red-600 dark:text-red-400">
                          Deine Antwort: {getUserAnswerDisplay(q, ans)}
                        </p>
                        <p className="text-green-700 dark:text-green-400">
                          Richtig: {getCorrectAnswerDisplay(q)}
                        </p>
                      </div>
                    )}
                    {explanation && (
                      <div className="ml-6 mt-2 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                        <p className="text-xs text-blue-700 dark:text-blue-400">
                          {stripMarkdownAsterisks(explanation)}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </details>

        <div className="flex justify-center gap-3 pb-8">
          <Button variant="glass" onClick={() => setMode("select")}>
            Zurück zur Auswahl
          </Button>
          <Button variant="premium" onClick={() => startSimulation(simType, undefined, simVariant)}>
            Neue Simulation
          </Button>
        </div>
      </div>
    );
  }

  // ============================================================
  // PLAYING MODE
  // ============================================================

  const currentSec = sections[currentSectionIdx];
  const q = sectionQuestions[index];

  if (!q || !currentSec) return null;

  // ---- Render helpers per question type ----

  const renderBmsMcq = () => (
    <Card>
      <CardContent className="p-6">
        <p className="text-base font-medium text-[var(--text-primary)] mb-6">{q.text}</p>
        <div className="space-y-3">
          {q.options?.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[q.id] === opt.id
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                  : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
              }`}
            >
              <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
              {opt.text}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderTvQuestion = () => {
    const tvText = q.tvTextId ? tvTextMap.get(q.tvTextId) : undefined;
    return (
      <div className="space-y-4">
        {tvText && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-3">{tvText.title}</h3>
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto">
                {tvText.content}
              </div>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[var(--muted)] mb-2">
              Ist folgende Aussage aus dem Text ableitbar?
            </p>
            <p className="text-base font-medium text-[var(--text-primary)] mb-6">
              "{q.statementText}"
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: "ableitbar" }))}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  answers[q.id] === "ableitbar"
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 inline mr-2" />
                Ableitbar
              </button>
              <button
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: "nicht-ableitbar" }))}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  answers[q.id] === "nicht-ableitbar"
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                    : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
                }`}
              >
                <XCircle className="w-4 h-4 inline mr-2" />
                Nicht ableitbar
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderZahlenfolgen = () => (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-[var(--muted)] mb-2">Welche Zahl setzt die Folge fort?</p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {q.sequence?.map((n, i) => (
            <span key={i} className="text-2xl font-mono font-bold text-[var(--text-primary)]">
              {n}
              {i < (q.sequence?.length || 0) - 1 ? "," : ""}
            </span>
          ))}
          <span className="text-2xl font-mono font-bold text-[var(--accent)]/60">?, ?</span>
        </div>
        <p className="text-sm text-[var(--muted)] mb-4">Welche zwei Zahlen folgen als nächstes?</p>
        <div className="grid grid-cols-2 gap-3">
          {q.numOptions?.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: String(oi) }))}
              className={`px-4 py-3 rounded-lg border text-sm font-mono font-bold transition-colors cursor-pointer text-left ${
                answers[q.id] === String(oi)
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                  : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
              }`}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + oi)})</span>
              {opt}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderGedaechtnisQuiz = () => (
    <Card>
      <CardContent className="p-6">
        <p className="text-base font-medium text-[var(--text-primary)] mb-6">{q.memText}</p>
        <div className="space-y-3">
          {q.memOptions?.map((opt, i) => (
            <button
              key={i}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[q.id] === opt
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                  : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderImplikationen = () => (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Prämisse 1</p>
            <p className="text-base font-medium text-[var(--text-primary)] border-l-4 border-purple-400 pl-3">
              {q.premise1}
            </p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Prämisse 2</p>
            <p className="text-base font-medium text-[var(--text-primary)] border-l-4 border-purple-400 pl-3">
              {q.premise2}
            </p>
          </div>
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">Welche Schlussfolgerung ist korrekt?</p>
        <div className="space-y-2">
          {q.sylOptions?.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: String(oi) }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                answers[q.id] === String(oi)
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                  : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
              }`}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + oi)})</span>
              {opt}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderWortfluessigkeit = () => (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-[var(--muted)] mb-2">Mit welchem Buchstaben beginnt das Wort?</p>
        <div className="text-center mb-6">
          <span className="text-3xl font-mono font-bold tracking-widest text-[var(--text-primary)]">
            {q.scrambled}
          </span>
        </div>
        <div className="space-y-2">
          {q.letterOptions?.map((letter, li) => (
            <button
              key={`${letter}-${li}`}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: letter }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-semibold transition-colors cursor-pointer ${
                answers[q.id] === letter
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                  : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
              }`}
            >
              ({String.fromCharCode(65 + li)}){" "}
              {letter === "-"
                ? "Keine der Antwortmöglichkeiten ist richtig"
                : `Anfangsbuchstabe: ${letter}`}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderFiguren = () => {
    const aufgabe = q.figurenAufgabe;
    if (!aufgabe) return null;
    const FZ_FILL = "#7EC8E3";
    const FZ_OPT_LABELS = ["A", "B", "C", "D", "E"];
    const { viewBox: piecesVB, paths: piecePaths } = layoutPiecesCompact(aufgabe.pieces);
    return (
      <Card className="border-[var(--border)]">
        <CardContent className="p-6">
          <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-3">
            Puzzleteile
          </p>
          <div className="flex justify-center py-4 bg-[var(--border)]/20 rounded-lg mb-6">
            <svg viewBox={piecesVB} {...FIGURE_SVG_ASPECT_PROPS} className="w-full max-w-md h-28">
              {piecePaths.map((p, i) => (
                <path key={i} d={p.d} fill={FZ_FILL} stroke="none" transform={p.transform} />
              ))}
            </svg>
          </div>
          <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
            Welche Figur entsteht aus den Teilen?
          </p>
          <div className="grid grid-cols-5 gap-3">
            {aufgabe.options.map((opt, oi) => {
              const label = FZ_OPT_LABELS[oi];
              const selected = answers[q.id] === label;
              const optE = isOptionE(opt);
              return (
                <button
                  key={oi}
                  onClick={() => setAnswers((p) => ({ ...p, [q.id]: label }))}
                  className={`flex flex-col items-center justify-center min-h-[100px] p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                    selected
                      ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10"
                      : "border-[var(--border)] bg-[var(--card)]/50 hover:border-[var(--border)]"
                  }`}
                >
                  <span className="text-sm font-bold text-[var(--muted)] mb-2">{label}</span>
                  {optE ? (
                    <span className="text-xs text-center text-[var(--muted)] leading-tight">
                      Keine der Figuren ist richtig
                    </span>
                  ) : (
                    <svg
                      viewBox="0 0 200 200"
                      {...FIGURE_SVG_ASPECT_PROPS}
                      className="w-full max-w-[72px] max-h-[72px] flex-1"
                    >
                      <path
                        d={polygonToPathScaledToViewBox(
                          opt as { points: { x: number; y: number }[] }
                        )}
                        fill={FZ_FILL}
                        stroke="none"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderSekMcq = () => {
    // Split situation and question from q.text
    const parts = (q.text || "").split("\n\n");
    const situation = parts[0] || "";
    const question = parts[1] || "";

    return (
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Situation</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{situation}</p>
          </div>
          <p className="text-base font-medium text-[var(--text-primary)] mb-6">{question}</p>
          <div className="space-y-3">
            {q.options?.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[q.id] === opt.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                    : "border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
                }`}
              >
                <span className="font-semibold mr-2">{opt.id.toUpperCase()})</span>
                {opt.text}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderQuestionContent = () => {
    switch (q.sectionType) {
      case "bms":
        return renderBmsMcq();
      case "tv":
        return renderTvQuestion();
      case "kff-zahlenfolgen":
        return renderZahlenfolgen();
      case "kff-gedaechtnis":
        return renderGedaechtnisQuiz();
      case "kff-implikationen":
        return renderImplikationen();
      case "kff-wortfluessigkeit":
        return renderWortfluessigkeit();
      case "kff-figuren":
        return renderFiguren();
      case "sek-erkennen":
      case "sek-regulieren":
      case "sek-entscheiden":
        return renderSekMcq();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="info">{currentSec.label}</Badge>
          {currentSec.parentGroup && (
            <span className="text-xs text-[var(--muted)] ml-1">({currentSec.parentGroup})</span>
          )}
          <span className="text-sm text-[var(--muted)] ml-2">
            Teil {currentSectionIdx + 1}/{sections.length} / Frage {index + 1}/
            {sectionQuestions.length}
          </span>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${timeLeft < 300 ? "bg-red-50 dark:bg-red-900/20" : "bg-[var(--border)]/50"}`}
        >
          <Clock className={`w-4 h-4 ${timeLeft < 300 ? "text-red-500" : "text-[var(--muted)]"}`} />
          <span
            className={`text-sm font-mono font-bold ${timeLeft < 300 ? "text-red-600 dark:text-red-400" : "text-[var(--text-primary)]"}`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-premium">
        <div
          className="progress-fill"
          style={{ width: `${((index + 1) / sectionQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question content */}
      {renderQuestionContent()}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < sectionQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : currentSectionIdx < sections.length - 1 ? (
          <Button onClick={advanceSection}>
            <Send className="w-4 h-4 mr-1" /> Nächster Teil
          </Button>
        ) : (
          <Button
            onClick={() => {
              // Record current section time before finishing
              recordSectionTime(currentSectionIdx, sections, timeLeft);
              finishSimulation();
            }}
          >
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>

      {/* Question dots */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {sectionQuestions.map((sq, i) => (
          <button
            key={sq.id}
            onClick={() => setIndex(i)}
            className={`w-7 h-7 rounded text-xs font-medium transition-colors cursor-pointer ${
              i === index
                ? "bg-[var(--accent)] text-white"
                : answers[sq.id]
                  ? "bg-[var(--accent)]/20 dark:bg-[var(--accent)]/80 text-[var(--accent)]/20"
                  : "bg-[var(--border)] text-[var(--muted)]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <FloatingQuestionCounter current={index + 1} total={sectionQuestions.length} />
    </div>
  );
}
