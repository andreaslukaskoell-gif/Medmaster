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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import {
  allBmsQuestions as newBmsQuestions,
  getQuestionsBySubject as getNewQuestions,
} from "@/data/bms/index";
import { useAdaptiveStore, getStichwortForQuestion } from "@/store/adaptiveLearning";
import { getDirectStichwortId } from "@/data/questions/index";
import {
  bmsQuestions as legacyQuestions,
  getQuestionsBySubject as getLegacyQuestions,
} from "@/data/bmsQuestions";
import { tvTexts } from "@/data/tvData";
import {
  generateZahlenfolgenSet,
  generateAllergyCards,
  generateMemoryQuestions,
  generateWortflüssigkeitSet,
  generateSyllogismSet,
} from "@/data/kffGenerators";
import type {
  AllergyCard,
  MemoryQuestion,
  ZahlenfolgeGenerated,
  WortflüssigkeitQuestion,
} from "@/data/kffGenerators";
import { figurenAufgaben } from "@/data/figurenGenerator";
import type { FZAufgabe } from "@/data/figurenGenerator";
import { FIGURE_SVG_ASPECT_PROPS } from "@/data/kffFigurenZusammensetzenMedAT";
import { emotionQuestions } from "@/data/sekData";
import type { EmotionQuestion } from "@/data/sekData";
import type { TVText } from "@/data/tvData";
import type { ImplikationQuestion } from "@/data/kffData";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";

// ============================================================
// BMS QUESTION RESOLUTION
// ============================================================

const bmsQuestions =
  newBmsQuestions.length > 0
    ? newBmsQuestions
    : legacyQuestions.map((q) => ({ ...q, difficulty: "mittel" as const, tags: [] }));

function getQuestionsBySubject(subject: string) {
  const newQ = getNewQuestions(subject);
  if (newQ.length > 0) return newQ;
  return getLegacyQuestions(subject).map((q) => ({
    ...q,
    difficulty: "mittel" as const,
    tags: [],
  }));
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
  figurenAufgabe?: FZAufgabe;
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
    timeLimitMinutes: 25,
    parentGroup: "KFF",
  },
  {
    id: "kff-ged",
    label: "Gedächtnis & Merkfähigkeit",
    sectionType: "kff-gedaechtnis",
    questionCount: 25,
    timeLimitMinutes: 15,
    parentGroup: "KFF",
    learnPhaseMinutes: 8,
  },
  {
    id: "kff-imp",
    label: "Implikationen",
    sectionType: "kff-implikationen",
    questionCount: 10,
    timeLimitMinutes: 10,
    parentGroup: "KFF",
  },
  {
    id: "kff-wf",
    label: "Wortflüssigkeit",
    sectionType: "kff-wortfluessigkeit",
    questionCount: 20,
    timeLimitMinutes: 20,
    parentGroup: "KFF",
  },
  {
    id: "kff-fig",
    label: "Figuren zusammensetzen",
    sectionType: "kff-figuren",
    questionCount: 10,
    timeLimitMinutes: 15,
    parentGroup: "KFF",
  },
];

const SEK_FULL_SECTIONS: SimSection[] = [
  {
    id: "sek-erk",
    label: "Emotionen erkennen",
    sectionType: "sek-erkennen",
    questionCount: 10,
    timeLimitMinutes: 15,
    parentGroup: "SEK",
  },
  {
    id: "sek-reg",
    label: "Emotionen regulieren",
    sectionType: "sek-regulieren",
    questionCount: 10,
    timeLimitMinutes: 15,
    parentGroup: "SEK",
  },
  {
    id: "sek-ent",
    label: "Soziales Entscheiden",
    sectionType: "sek-entscheiden",
    questionCount: 10,
    timeLimitMinutes: 15,
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

function mixDifficulties<T>(
  gen: (n: number, d: "leicht" | "mittel" | "schwer") => T[],
  count: number
): T[] {
  const p = Math.ceil(count / 3);
  const all = [...gen(p, "leicht"), ...gen(p, "mittel"), ...gen(p, "schwer")].slice(0, count);
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

function generateZahlenfolgenQuestions(section: SimSection): UnifiedQuestion[] {
  const set = mixDifficulties(generateZahlenfolgenSet, section.questionCount);
  return set.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-zahlenfolgen",
    sequence: q.sequence,
    numOptions: q.options,
    correctOption: q.correctOption,
    correctPair: q.correctPair,
    zfExplanation: q.explanation,
  }));
}

let _allergyCards: AllergyCard[] = [];

function generateGedaechtnisQuestions(section: SimSection): {
  cards: AllergyCard[];
  questions: UnifiedQuestion[];
} {
  const cards = generateAllergyCards(8);
  _allergyCards = cards;
  const memQ = generateMemoryQuestions(cards, section.questionCount);
  const questions = memQ.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-gedaechtnis" as SectionType,
    memText: q.text,
    memOptions: q.options,
    memCorrect: q.correctAnswer,
  }));
  return { cards, questions };
}

function generateImplikationenQuestions(section: SimSection): UnifiedQuestion[] {
  const set = mixDifficulties(generateSyllogismSet, section.questionCount);
  return set.map((q) => ({
    id: q.id,
    sectionId: section.id,
    sectionType: "kff-implikationen" as SectionType,
    premise1: q.premise1,
    premise2: q.premise2,
    sylOptions: q.options,
    sylCorrectOption: q.correctOption,
    impExplanation: q.explanation,
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
    correctLetter: q.correctWord[0],
    correctWord: q.correctWord,
  }));
}

function generateFigurenQuestions(section: SimSection): UnifiedQuestion[] {
  const pool = shuffle([...figurenAufgaben]).slice(0, section.questionCount);
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
  variant?: number
): { questions: UnifiedQuestion[]; cards?: AllergyCard[] } {
  switch (section.sectionType) {
    case "bms":
      return { questions: generateBmsQuestions(section, variant) };
    case "tv":
      return { questions: generateTvQuestions(section) };
    case "kff-zahlenfolgen":
      return { questions: generateZahlenfolgenQuestions(section) };
    case "kff-gedaechtnis": {
      const { cards, questions } = generateGedaechtnisQuestions(section);
      return { questions, cards };
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
    case "kff-figuren":
      return answer === q.figurenAufgabe?.correctOptionId;
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
      return `${q.correctLetter} (${q.correctWord})`;
    case "kff-figuren":
      return `Option ${q.figurenAufgabe?.correctOptionId?.toUpperCase()}`;
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
  const [allergyCards, setAllergyCards] = useState<AllergyCard[]>([]);
  const [learnTimeLeft, setLearnTimeLeft] = useState(0);
  const [sectionTimeData, setSectionTimeData] = useState<SectionTimeData[]>([]);
  const [sectionStartTime, setSectionStartTime] = useState(0);
  const [simVariant, setSimVariant] = useState<number | undefined>(undefined);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
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
      let cardsForGedaechtnis: AllergyCard[] = [];

      for (const sec of secs) {
        const result = generateQuestionsForSection(sec, variant);
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

      // If first section is gedaechtnis, go to learn mode
      if (firstSec.sectionType === "kff-gedaechtnis" && firstSec.learnPhaseMinutes) {
        setLearnTimeLeft(firstSec.learnPhaseMinutes * 60);
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

    saveQuizResult({
      id: `sim-${Date.now()}`,
      type: "simulation",
      subject: subjectLabel,
      score: totalScore,
      total: totalQuestions,
      date: new Date().toLocaleDateString("de-AT"),
      timestamp: new Date().toISOString(),
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
    logActivity(totalQuestions);
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

      // If gedaechtnis with learn phase
      if (sec.sectionType === "kff-gedaechtnis" && sec.learnPhaseMinutes) {
        setLearnTimeLeft(sec.learnPhaseMinutes * 60);
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

    // Record time for current section
    recordSectionTime(currentSectionIdx, sections, timeLeft);

    const nextIdx = currentSectionIdx + 1;
    if (nextIdx >= sections.length) {
      // Don't call finishSimulation directly because recordSectionTime updates are async
      // Instead, we call finishSimulation which will also record
      finishSimulation();
      return;
    }

    const currentSec = sections[currentSectionIdx];
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

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (mode === "playing" && timeLeft > 0) {
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

    if (mode === "break" && breakTimeLeft > 0) {
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

    if (mode === "gedaechtnis-learn" && learnTimeLeft > 0) {
      timerRef.current = setInterval(() => {
        setLearnTimeLeft((t) => {
          if (t <= 1) {
            startGedaechtnisQuiz();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [mode, timeLeft > 0, breakTimeLeft > 0, learnTimeLeft > 0]);

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
      <div className="max-w-4xl mx-auto space-y-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "Simulation" }]} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Testsimulation</h1>
          <p className="text-muted mt-1">Simuliere den MedAT-H unter realistischen Bedingungen.</p>
        </div>

        {/* Full MedAT-H Simulation */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  MedAT-H Vollsimulation
                </h2>
                <p className="text-sm text-muted">Alle 4 Testteile mit exaktem Timing und Pausen</p>
              </div>
            </div>

            <div className="space-y-3">
              {/* BMS */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    BMS
                  </span>
                  <span className="text-xs text-muted">94 Fragen, 75 Min</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {BMS_FULL_SECTIONS.map((sec) => (
                    <div key={sec.id} className="text-center text-xs text-muted">
                      {sec.label}: {sec.questionCount}F / {sec.timeLimitMinutes}Min
                    </div>
                  ))}
                </div>
              </div>
              {/* TV */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    Textverständnis
                  </span>
                  <span className="text-xs text-muted">12 Aussagen, 35 Min</span>
                </div>
              </div>
              {/* KFF */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    KFF
                  </span>
                  <span className="text-xs text-muted">5 Untertests, ~93 Min</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-muted">
                  <div>Zahlenfolgen: 10 / 25Min</div>
                  <div>Gedächtnis: 8Min + 25F / 15Min</div>
                  <div>Implikationen: 10 / 10Min</div>
                  <div>Wortflüssigkeit: 20 / 20Min</div>
                  <div>Figuren: 10 / 15Min</div>
                </div>
              </div>
              {/* SEK */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    SEK
                  </span>
                  <span className="text-xs text-muted">3 Untertests, 45 Min</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted">
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
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
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
          </CardContent>
        </Card>

        {/* Individual Section Tests */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Einzelne Testteile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* BMS */}
          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">BMS</h3>
                  <p className="text-xs text-muted">94 Fragen, 75 Min</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => startSimulation("bms")}>
                <Play className="w-4 h-4 mr-1" /> BMS starten
              </Button>
            </CardContent>
          </Card>

          {/* TV */}
          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">Textverständnis</h3>
                  <p className="text-xs text-muted">12 Aussagen, 35 Min</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => startSimulation("tv")}>
                <Play className="w-4 h-4 mr-1" /> TV starten
              </Button>
            </CardContent>
          </Card>

          {/* KFF */}
          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">KFF</h3>
                  <p className="text-xs text-muted">5 Untertests, ~93 Min</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => startSimulation("kff")}>
                <Play className="w-4 h-4 mr-1" /> KFF starten
              </Button>
            </CardContent>
          </Card>

          {/* SEK */}
          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">SEK</h3>
                  <p className="text-xs text-muted">3 Untertests, 45 Min</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => startSimulation("sek")}>
                <Play className="w-4 h-4 mr-1" /> SEK starten
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* BMS Kurztest */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <Timer className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Kurztest (BMS)
                </h2>
                <p className="text-sm text-muted">Schnelles Ueben eines einzelnen Fachs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {BMS_KURZTEST_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => startSimulation("kurz", opt.id)}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-4 text-left transition-colors cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{opt.label}</p>
                  <p className="text-xs text-muted">
                    {opt.questionCount} Fragen / {opt.timeLimitMinutes} Min
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
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
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto">
              <Coffee className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Pause</h2>
            <p className="text-muted">
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
            <Button onClick={loadNextSection}>
              <Play className="w-4 h-4 mr-1" /> Pause ueberspringen
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ============================================================
  // GEDAECHTNIS LEARN MODE
  // ============================================================

  if (mode === "gedaechtnis-learn") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="info">Gedächtnis & Merkfähigkeit</Badge>
            <span className="text-sm text-muted ml-2">Lernphase - Präge dir die Ausweise ein!</span>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${learnTimeLeft < 120 ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-100 dark:bg-gray-800"}`}
          >
            <Eye className="w-4 h-4 text-muted" />
            <span
              className={`text-sm font-mono font-bold ${learnTimeLeft < 120 ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allergyCards.map((card, i) => (
            <Card key={card.id}>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">{card.name}</h3>
                  <Badge variant="default">#{i + 1}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <div>
                    <span className="text-muted">Geburtsdatum:</span>
                  </div>
                  <div className="text-gray-900 dark:text-gray-100">{card.geburtsdatum}</div>
                  <div>
                    <span className="text-muted">Blutgruppe:</span>
                  </div>
                  <div className="font-semibold text-red-600 dark:text-red-400">
                    {card.blutgruppe}
                  </div>
                  <div>
                    <span className="text-muted">Ausweisnr.:</span>
                  </div>
                  <div className="text-gray-900 dark:text-gray-100">{card.ausweisnummer}</div>
                  <div>
                    <span className="text-muted">Land:</span>
                  </div>
                  <div className="text-gray-900 dark:text-gray-100">{card.land}</div>
                  <div>
                    <span className="text-muted">Medikamente:</span>
                  </div>
                  <div className="text-gray-900 dark:text-gray-100">
                    {card.medikamente ? "Ja" : "Nein"}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-muted">Allergien: </span>
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-400">
                    {card.allergien.join(", ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={startGedaechtnisQuiz}>
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
      <div className="max-w-3xl mx-auto space-y-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Simulation", href: "/simulation" },
            { label: "Ergebnis" },
          ]}
        />

        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Simulationsergebnis</h1>

        {/* Overall score */}
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-bold text-primary-700 dark:text-primary-400">
              {totalPct}%
            </div>
            <p className="text-lg text-muted mt-1">
              {totalScore} von {allQuestions.length} richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
              +{totalScore * 15} XP erhalten
            </p>
          </CardContent>
        </Card>

        {/* Group breakdown */}
        {groupScores.size > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...groupScores.entries()].map(([key, data]) => {
              const pct = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
              return (
                <Card key={key}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">
                      {pct}%
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {data.label}
                    </p>
                    <p className="text-xs text-muted">
                      {data.score}/{data.total}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Per-section breakdown */}
        <Card>
          <CardContent className="p-5 space-y-3">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Detaillierte Aufschlüsselung
            </h3>
            {sectionScores.map((s) => (
              <div
                key={s.sec.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
              >
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {s.sec.label}
                  </span>
                  {s.sec.parentGroup && (
                    <span className="text-xs text-muted ml-2">({s.sec.parentGroup})</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted">
                    {s.score}/{s.total}
                  </span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
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
          </CardContent>
        </Card>

        {/* Time usage */}
        {timeEntries.length > 0 && (
          <Card>
            <CardContent className="p-5 space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Zeitnutzung
              </h3>
              {timeEntries.map((entry) => {
                const usedPct =
                  entry.allocated > 0 ? Math.round((entry.used / entry.allocated) * 100) : 0;
                return (
                  <div
                    key={entry.sectionId}
                    className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                  >
                    <span className="text-sm text-gray-900 dark:text-gray-100">{entry.label}</span>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <span>
                        {formatTime(entry.used)} / {formatTime(entry.allocated)}
                      </span>
                      <span
                        className={`font-medium ${usedPct > 90 ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}`}
                      >
                        ({usedPct}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Weakness analysis */}
        {weakAreas.length > 0 && weakAreas[0].pct < 70 && (
          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="p-5 space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Schwächen-Analyse
              </h3>
              <p className="text-sm text-muted">
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
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {area.sec.label}
                        </span>
                        <span className="text-xs text-muted ml-2">
                          {area.pct}% ({area.score}/{area.total})
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Detailed per-question results */}
        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">
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
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
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
                        <p className="text-xs text-blue-700 dark:text-blue-400">{explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </details>

        <div className="flex justify-center gap-3 pb-8">
          <Button variant="outline" onClick={() => setMode("select")}>
            Zurück zur Auswahl
          </Button>
          <Button onClick={() => startSimulation(simType, undefined, simVariant)}>
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
        <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.text}</p>
        <div className="space-y-3">
          {q.options?.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[q.id] === opt.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">{tvText.title}</h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto">
                {tvText.content}
              </div>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted mb-2">Ist folgende Aussage aus dem Text ableitbar?</p>
            <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
              "{q.statementText}"
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: "ableitbar" }))}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  answers[q.id] === "ableitbar"
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
        <p className="text-sm text-muted mb-2">Welche Zahl setzt die Folge fort?</p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {q.sequence?.map((n, i) => (
            <span key={i} className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100">
              {n}
              {i < (q.sequence?.length || 0) - 1 ? "," : ""}
            </span>
          ))}
          <span className="text-2xl font-mono font-bold text-primary-600 dark:text-primary-400">
            ?, ?
          </span>
        </div>
        <p className="text-sm text-muted mb-4">Welche zwei Zahlen folgen als nächstes?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.numOptions?.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: String(oi) }))}
              className={`px-4 py-3 rounded-lg border text-sm font-mono font-bold transition-colors cursor-pointer text-left ${
                answers[q.id] === String(oi)
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
        <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{q.memText}</p>
        <div className="space-y-3">
          {q.memOptions?.map((opt, i) => (
            <button
              key={i}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                answers[q.id] === opt
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Prämisse 1</p>
            <p className="text-base font-medium text-gray-900 dark:text-gray-100 border-l-4 border-purple-400 pl-3">
              {q.premise1}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Prämisse 2</p>
            <p className="text-base font-medium text-gray-900 dark:text-gray-100 border-l-4 border-purple-400 pl-3">
              {q.premise2}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted mb-3">Welche Schlussfolgerung ist korrekt?</p>
        <div className="space-y-2">
          {q.sylOptions?.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: String(oi) }))}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                answers[q.id] === String(oi)
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
        <p className="text-sm text-muted mb-2">Mit welchem Buchstaben beginnt das Wort?</p>
        <div className="text-center mb-6">
          <span className="text-3xl font-mono font-bold tracking-widest text-gray-900 dark:text-gray-100">
            {q.scrambled}
          </span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {q.letterOptions?.map((letter) => (
            <button
              key={letter}
              onClick={() => setAnswers((p) => ({ ...p, [q.id]: letter }))}
              className={`px-4 py-3 rounded-lg border text-lg font-bold transition-colors cursor-pointer text-center ${
                answers[q.id] === letter
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderFiguren = () => {
    const aufgabe = q.figurenAufgabe;
    if (!aufgabe) return null;
    return (
      <Card className="border-gray-200 dark:border-gray-700">
        <CardContent className="p-6">
          <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
            Puzzleteile
          </p>
          <div className="flex flex-wrap gap-4 justify-center py-4 bg-gray-50/50 dark:bg-gray-900/30 rounded-lg mb-6">
            {aufgabe.pieces.map((piece, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 shrink-0"
              >
                <svg viewBox="0 0 200 200" {...FIGURE_SVG_ASPECT_PROPS} className="w-full h-full">
                  <path d={piece.path} fill={piece.fill} stroke="#374151" strokeWidth="1.2" />
                </svg>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
            Welche Figur entsteht aus den Teilen?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {aufgabe.options.map((opt) => {
              const selected = answers[q.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                  className={`flex flex-col items-center justify-center min-h-[100px] p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                    selected
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                    {opt.id.toUpperCase()}
                  </span>
                  {opt.text ? (
                    <span className="text-xs text-center text-muted leading-tight">{opt.text}</span>
                  ) : (
                    <svg
                      viewBox="0 0 200 200"
                      {...FIGURE_SVG_ASPECT_PROPS}
                      className="w-full max-w-[72px] max-h-[72px] flex-1"
                    >
                      {opt.paths.map((p, pi) => (
                        <path key={pi} d={p} fill={opt.fill} stroke="#374151" strokeWidth="1.2" />
                      ))}
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
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Situation</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{situation}</p>
          </div>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">{question}</p>
          <div className="space-y-3">
            {q.options?.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer ${
                  answers[q.id] === opt.id
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="info">{currentSec.label}</Badge>
          {currentSec.parentGroup && (
            <span className="text-xs text-muted ml-1">({currentSec.parentGroup})</span>
          )}
          <span className="text-sm text-muted ml-2">
            Teil {currentSectionIdx + 1}/{sections.length} / Frage {index + 1}/
            {sectionQuestions.length}
          </span>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${timeLeft < 300 ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-100 dark:bg-gray-800"}`}
        >
          <Clock className={`w-4 h-4 ${timeLeft < 300 ? "text-red-500" : "text-muted"}`} />
          <span
            className={`text-sm font-mono font-bold ${timeLeft < 300 ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
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
                ? "bg-primary-700 text-white"
                : answers[sq.id]
                  ? "bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
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
