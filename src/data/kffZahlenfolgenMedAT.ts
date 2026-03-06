/**
 * KFF Zahlenfolgen – MedAT-Logik (nur + − × ÷, zwei Lücken am Ende, 5 Optionen A–E).
 * Regel-Engine: periodische Muster, wechselnde Operationen, nur ganze Zahlen.
 */

export type OpType = "+" | "−" | "×" | "÷";
export type DifficultyLevel = "easy" | "medium" | "hard";

export type SequenceTask = {
  id: string;
  /** Folge mit zwei "?" am Ende (z. B. [11, 15, 30, 26, 30, 60, 56, "?", "?"]) */
  sequence: (number | "?")[];
  /** Die zwei richtigen Folgezahlen */
  correctNext: [number, number];
  /** A–E; E hat nur text, keine value */
  options: { key: "A" | "B" | "C" | "D" | "E"; value?: [number, number]; text?: string }[];
  /** Welche Option ist korrekt (A–D oder E) */
  correctOptionId: "A" | "B" | "C" | "D" | "E";
  /** z. B. "+4, ×2, −4 (wiederholend)" */
  rule: string;
  /** Schritt-für-Schritt-Erklärung */
  explanation: string;
  difficulty: DifficultyLevel;
  /** Operatorenfolge (für Validierung/Reproduktion); bei offiziellen Beispielen optional */
  ops?: { type: OpType; value: number }[];
  /** Nur bei offiziellen Beispielen: Quelle gemäß PDF, z. B. "IB_ZF_26.pdf – Beispielaufgabe 1" */
  source?: string;
};

/** Offizielle Instruktion aus IB ZF 26.pdf */
export const OFFICIAL_ZF_INSTRUCTION = `Bei den Aufgaben sehen Sie eine Folge von Zahlen, deren Abfolge nach bestimmten Regeln aufgebaut ist. Die Regeln beruhen ausschließlich auf den 4 Grundrechnungsarten Addition, Subtraktion, Multiplikation und Division (+, -, ×, /). Ihre Aufgabe besteht darin, die Regeln zu erkennen und die Zahlenfolge logisch zu ergänzen. Es müssen alle angeführten Zahlen in die Erstellung der Zahlenfolge miteinbezogen werden. Die Lösung muss sich zwingend logisch aus der Zahlenfolge ergeben (d.h. keine Teilzahlenfolgen). Die Zahlenfolgen sind in Leserichtung von links nach rechts zu lösen. Zur Lösung der Aufgaben werden nur ganze Zahlen benötigt, keine Kommazahlen.

Aufnahmeverfahren: 10 Aufgaben, 15 Minuten (Papier-Bleistift-Test).

Bei einigen Aufgaben kann es auch vorkommen, dass keine der Antwortmöglichkeiten A bis D richtig ist. In diesem Fall müssen Sie Antwortmöglichkeit E (Keine der Antwortmöglichkeiten ist richtig.) ankreuzen.`;

// =============================================================================
// SKRIPT: Mehr Zahlenfolgen-Aufgaben generieren
// =============================================================================
// Wenn wir mehr Übungsaufgaben wollen: Immer am Format der offiziellen Beispiele
// (OFFICIAL_ZF_EXAMPLES) orientieren. Neue Aufgaben nur über den Generator in
// kffGenerators.ts erzeugen; offizielle Beispiele nie verändern.
// Siehe auch CLAUDE.md Abschnitt „KFF: Mehr Aufgaben generieren“.
// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – exakt aus IB_ZF_26.pdf übernehmen (nicht generieren!)
// =============================================================================
// Pflicht: PDF IB_ZF_26.pdf öffnen, Zahlenfolgen-Beispiele 1:1 abtippen.
// Für jede Aufgabe: sequence (inkl. zwei "?"), options A–E, correctOptionId, explanation, source.
// Diese Liste ist FIX – niemals vom Generator verändern oder erweitern.
// Training ausschließlich über generateSequenceTask/generateSequenceTaskSet (unten).

/** @deprecated Official examples removed (copyright). Use generator-based training only. */
export const OFFICIAL_ZF_EXAMPLES: SequenceTask[] = [];

/** @deprecated No longer needed since official examples were removed. */
export function validateOfficialZahlenfolgenExamples(): boolean {
  return true;
}

const OP_LABELS: Record<OpType, string> = { "+": "+", "−": "−", "×": "×", "÷": "÷" };

function seedRng(seed: number): () => number {
  let s = Math.floor(seed % 2147483647) || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Einzelne Operation (nur ganze Zahlen). Gibt NaN zurück wenn Division nicht aufgeht. */
function applyOp(n: number, op: { type: OpType; value: number }): number {
  switch (op.type) {
    case "+":
      return n + op.value;
    case "−":
      return n - op.value;
    case "×":
      return n * op.value;
    case "÷":
      if (op.value === 0 || n % op.value !== 0) return NaN;
      return n / op.value;
    default:
      return n;
  }
}

/** Erzeugt eine Folge aus Startwert und periodischer Operatorliste. Alle Werte ganzzahlig. */
export function buildSequence(
  start: number,
  ops: { type: OpType; value: number }[],
  length: number
): number[] {
  const out: number[] = [start];
  let cur = start;
  for (let i = 0; i < length - 1; i++) {
    const op = ops[i % ops.length];
    cur = applyOp(cur, op);
    out.push(cur);
  }
  return out;
}

/** Prüft, ob die Regel die gegebene Folge exakt reproduziert. */
export function ruleReproducesSequence(
  start: number,
  ops: { type: OpType; value: number }[],
  expected: number[]
): boolean {
  const produced = buildSequence(start, ops, expected.length);
  return produced.length === expected.length && produced.every((v, i) => v === expected[i]);
}

/** Formatiert Operatoren für Anzeige (z. B. "+4, ×2, −4"). */
function formatOps(ops: { type: OpType; value: number }[]): string {
  return ops.map((o) => `${OP_LABELS[o.type]}${o.value}`).join(", ");
}

/** Erzeugt Erklärungstext: Regel + Beispielkette + nächste Zahlen. */
function buildExplanation(
  visible: number[],
  ops: { type: OpType; value: number }[],
  correctNext: [number, number]
): string {
  const steps: string[] = [];
  let cur = visible[0];
  for (let i = 0; i < visible.length - 1; i++) {
    const op = ops[i % ops.length];
    const next = applyOp(cur, op);
    steps.push(`${cur} ${OP_LABELS[op.type]} ${op.value} = ${next}`);
    cur = next;
  }
  const op1 = ops[(visible.length - 1) % ops.length];
  const op2 = ops[visible.length % ops.length];
  steps.push(`${cur} ${OP_LABELS[op1.type]} ${op1.value} = ${correctNext[0]}`);
  steps.push(`${correctNext[0]} ${OP_LABELS[op2.type]} ${op2.value} = ${correctNext[1]}`);
  return (
    `Die Folge entsteht durch wiederholtes Anwenden der Operationen: ${formatOps(ops)}.\n` +
    steps.slice(0, 5).join(" → ") +
    (steps.length > 5 ? " → … " : " ") +
    `\nDaher lauten die nächsten Zahlen: ${correctNext[0]} und ${correctNext[1]}.`
  );
}

/** Gibt nur ganze Zahlen zurück; bei Division prüfen wir Teilbarkeit beim Generieren. */
function ensureInteger(n: number): number {
  return Math.round(n);
}

// ─── Schwierigkeitsabhängige Operatoren-Pools ───

/** Leicht: 1–2 Operatoren, kleine Zahlen, single operation or simple alternating (+/−). */
function pickOpsEasy(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
    // Single operations — recognizable pattern
    [{ type: "+", value: 4 }],
    [{ type: "+", value: 6 }],
    [{ type: "+", value: 7 }],
    [{ type: "×", value: 2 }],
    [{ type: "×", value: 3 }],
    [{ type: "−", value: 3 }],
    // Two alternating operations — still straightforward
    [
      { type: "+", value: 3 },
      { type: "+", value: 5 },
    ],
    [
      { type: "+", value: 4 },
      { type: "−", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 1 },
    ],
    [
      { type: "+", value: 5 },
      { type: "−", value: 1 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 1 },
    ],
    [
      { type: "+", value: 2 },
      { type: "×", value: 2 },
    ],
    // Alternating +a, +b (velumed-Stil)
    [
      { type: "+", value: 8 },
      { type: "+", value: 4 },
    ],
    // Oscillating: +2, −2 repeating
    [
      { type: "+", value: 2 },
      { type: "−", value: 2 },
    ],
  ];
  return choices[Math.floor(rand() * choices.length)];
}

/** Mittel: 2–3 Operatoren mit ×/÷ combined, requires recognizing the cycle. */
function pickOpsMedium(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
    // 3-op cycles with multiply — classic MedAT pattern
    [
      { type: "+", value: 4 },
      { type: "×", value: 2 },
      { type: "−", value: 4 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 3 },
      { type: "−", value: 2 },
    ],
    [
      { type: "+", value: 5 },
      { type: "×", value: 2 },
      { type: "−", value: 6 },
    ],
    [
      { type: "−", value: 2 },
      { type: "×", value: 3 },
      { type: "+", value: 1 },
    ],
    // 2-op cycles with larger values or division
    [
      { type: "×", value: 3 },
      { type: "−", value: 4 },
    ],
    [
      { type: "+", value: 7 },
      { type: "÷", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 5 },
    ],
    // 3-op cycles with division
    [
      { type: "×", value: 2 },
      { type: "−", value: 3 },
      { type: "+", value: 2 },
    ],
    [
      { type: "+", value: 6 },
      { type: "÷", value: 2 },
      { type: "+", value: 3 },
    ],
    [
      { type: "−", value: 1 },
      { type: "×", value: 2 },
      { type: "+", value: 5 },
    ],
    // Alternating operations: +a, ×b, +a, ×b, ...
    [
      { type: "+", value: 3 },
      { type: "×", value: 2 },
    ],
    [
      { type: "+", value: 5 },
      { type: "×", value: 3 },
    ],
    // Fibonacci-like with offset: approximated as +prev_diff, +constant
    [
      { type: "+", value: 3 },
      { type: "+", value: 4 },
      { type: "+", value: 7 },
    ],
    [
      { type: "+", value: 2 },
      { type: "+", value: 5 },
      { type: "+", value: 7 },
    ],
    // Two interleaved sequences (odd/even positions follow different rules)
    [
      { type: "+", value: 10 },
      { type: "−", value: 3 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 8 },
    ],
    // Larger step values
    [
      { type: "+", value: 9 },
      { type: "÷", value: 3 },
      { type: "+", value: 4 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 7 },
      { type: "+", value: 4 },
    ],
    // Oscillating: +2, −2, −2, +2 (velumed-Stil)
    [
      { type: "+", value: 2 },
      { type: "−", value: 2 },
      { type: "−", value: 2 },
      { type: "+", value: 2 },
    ],
    // ×a, ÷a alternating (common MedAT: ×2 ÷2 cycle with offset)
    [
      { type: "×", value: 2 },
      { type: "÷", value: 2 },
    ],
    // ×(-1) style: multiply, subtract, add cycle (velumed)
    [
      { type: "×", value: 6 },
      { type: "−", value: 6 },
      { type: "+", value: 6 },
    ],
    // −5, ×5, +6 cycle (velumed)
    [
      { type: "−", value: 5 },
      { type: "×", value: 5 },
      { type: "+", value: 6 },
    ],
  ];
  return choices[Math.floor(rand() * choices.length)];
}

/** Schwer: 4–5 Operatoren, ÷ häufig, größere Werte, nested multiply+divide. */
function pickOpsHard(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
    // 4-op cycles with mixed operations
    [
      { type: "+", value: 6 },
      { type: "×", value: 2 },
      { type: "−", value: 8 },
      { type: "÷", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 4 },
      { type: "−", value: 2 },
      { type: "÷", value: 2 },
    ],
    [
      { type: "×", value: 3 },
      { type: "−", value: 5 },
      { type: "+", value: 2 },
      { type: "÷", value: 2 },
    ],
    [
      { type: "+", value: 8 },
      { type: "÷", value: 2 },
      { type: "×", value: 3 },
      { type: "−", value: 7 },
    ],
    // 5-op cycles — very challenging
    [
      { type: "+", value: 3 },
      { type: "×", value: 2 },
      { type: "−", value: 4 },
      { type: "+", value: 5 },
      { type: "÷", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 6 },
      { type: "÷", value: 2 },
      { type: "−", value: 3 },
      { type: "+", value: 7 },
    ],
    [
      { type: "+", value: 4 },
      { type: "×", value: 3 },
      { type: "−", value: 6 },
      { type: "÷", value: 3 },
      { type: "+", value: 2 },
    ],
    // 4-op cycles with larger values
    [
      { type: "−", value: 3 },
      { type: "×", value: 3 },
      { type: "+", value: 4 },
      { type: "−", value: 2 },
    ],
    [
      { type: "+", value: 5 },
      { type: "×", value: 2 },
      { type: "−", value: 6 },
      { type: "+", value: 3 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 5 },
      { type: "−", value: 3 },
      { type: "×", value: 2 },
    ],
    // Three-step cycles: ×2, +5, −3 repeating
    [
      { type: "×", value: 2 },
      { type: "+", value: 5 },
      { type: "−", value: 3 },
    ],
    [
      { type: "×", value: 3 },
      { type: "−", value: 7 },
      { type: "+", value: 4 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 11 },
      { type: "−", value: 5 },
    ],
    // Prime-difference inspired: differences are 2, 3, 5, 7, 11
    [
      { type: "+", value: 2 },
      { type: "+", value: 3 },
      { type: "+", value: 5 },
      { type: "+", value: 7 },
      { type: "+", value: 11 },
    ],
    [
      { type: "+", value: 3 },
      { type: "+", value: 5 },
      { type: "+", value: 7 },
      { type: "+", value: 11 },
      { type: "+", value: 13 },
    ],
    // Nested: outer rule (×) + inner modifier (+/−)
    [
      { type: "×", value: 2 },
      { type: "+", value: 3 },
      { type: "×", value: 2 },
      { type: "−", value: 5 },
    ],
    [
      { type: "×", value: 3 },
      { type: "−", value: 4 },
      { type: "×", value: 2 },
      { type: "+", value: 7 },
    ],
    // 5-op with ÷ and larger intermediate values
    [
      { type: "+", value: 7 },
      { type: "×", value: 3 },
      { type: "−", value: 8 },
      { type: "÷", value: 2 },
      { type: "+", value: 5 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 9 },
      { type: "÷", value: 3 },
      { type: "+", value: 4 },
      { type: "×", value: 2 },
    ],
    // 4-op with division and multiplication interleaved
    [
      { type: "×", value: 4 },
      { type: "÷", value: 2 },
      { type: "+", value: 6 },
      { type: "−", value: 3 },
    ],
  ];
  return choices[Math.floor(rand() * choices.length)];
}

function pickOps(
  difficulty: DifficultyLevel,
  rand: () => number
): { type: OpType; value: number }[] {
  if (difficulty === "easy") return pickOpsEasy(rand);
  if (difficulty === "medium") return pickOpsMedium(rand);
  return pickOpsHard(rand);
}

/** Startwert so wählen, dass alle Werte der Folge ganzzahlig sind (bei ÷ prüfen). */
function pickStart(
  ops: { type: OpType; value: number }[],
  length: number,
  rand: () => number,
  difficulty?: DifficultyLevel
): number {
  let start: number;
  if (ops.some((o) => o.type === "÷")) {
    // For hard: larger divisible starting values (50-500 range)
    const divPool =
      difficulty === "hard"
        ? [12, 18, 24, 30, 36, 48, 60, 72, 90, 120]
        : [2, 3, 4, 5, 6, 8, 10, 12];
    start = divPool[Math.floor(rand() * divPool.length)]!;
  } else if (difficulty === "hard") {
    // Hard: larger numbers (50-500 range)
    start = Math.floor(rand() * 150) + 50;
  } else {
    start = Math.floor(rand() * 20) + 5;
  }
  const seq = buildSequence(start, ops, length);
  const allInt = seq.every((n) => Number.isInteger(n));
  return allInt ? start : pickStart(ops, length, rand, difficulty);
}

/** Distraktor: erste Zahl richtig, zweite falsch (z. B. anderer Operator). */
function distractorFirstRight(
  correct: [number, number],
  ops: { type: OpType; value: number }[],
  rand: () => number
): [number, number] {
  const wrongSecond = correct[1] + (rand() > 0.5 ? 1 : -1) * (Math.floor(rand() * 5) + 1);
  return [correct[0], ensureInteger(wrongSecond)];
}

/** Distraktor: falscher Operator fortgesetzt (z. B. + statt ×). */
function distractorWrongOp(correct: [number, number], rand: () => number): [number, number] {
  const a = correct[0];
  const off = Math.floor(rand() * 4) + 1;
  return [a, a + (rand() > 0.5 ? off : -off)];
}

/** Distraktor: richtige Regel, falscher Startpunkt (Versatz um 1). */
function distractorOffset(
  visible: number[],
  ops: { type: OpType; value: number }[],
  rand: () => number
): [number, number] {
  const last = visible[visible.length - 1];
  const op1 = ops[(visible.length - 1) % ops.length];
  const next1 = applyOp(last, op1);
  const op2 = ops[visible.length % ops.length];
  const next2 = applyOp(next1, op2);
  const shift = (rand() > 0.5 ? 1 : -1) * (Math.floor(rand() * 3) + 1);
  return [ensureInteger(next1 + shift), ensureInteger(next2)];
}

/** Filtert auf eindeutige Paare, keins darf gleich correct sein. */
function distinctPairs(correct: [number, number], pairs: [number, number][]): [number, number][] {
  const correctStr = `${correct[0]},${correct[1]}`;
  const seen = new Set<string>([correctStr]);
  const result: [number, number][] = [];
  for (const p of pairs) {
    const s = `${p[0]},${p[1]}`;
    if (seen.has(s)) continue;
    seen.add(s);
    result.push(p);
  }
  return result;
}

// ─── Neue Pattern-Typen (zusätzlich zu periodischen Operatoren) ───

type PatternType = "periodic" | "interleaved" | "growing-diff" | "fibonacci";

/**
 * Verschachtelte Folge: Positionen 1,3,5,… folgen Regel A; Positionen 2,4,6,… folgen Regel B.
 * Beispiel: 2, 10, 4, 20, 8, 40 → ungerade ×2, gerade ×2 (zwei Teilfolgen)
 */
function buildInterleaved(
  startA: number,
  startB: number,
  opA: { type: OpType; value: number },
  opB: { type: OpType; value: number },
  length: number
): number[] | null {
  const out: number[] = [];
  let a = startA;
  let b = startB;
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      out.push(a);
      if (i + 2 < length) {
        const next = applyOp(a, opA);
        if (!Number.isInteger(next) || isNaN(next)) return null;
        a = next;
      }
    } else {
      out.push(b);
      if (i + 2 < length) {
        const next = applyOp(b, opB);
        if (!Number.isInteger(next) || isNaN(next)) return null;
        b = next;
      }
    }
  }
  // Generate two more
  const lastEvenIdx = out.length % 2 === 0 ? out.length : out.length - 1;
  const lastOddIdx = out.length % 2 === 1 ? out.length : out.length - 1;
  // Determine next two values
  const extra: number[] = [];
  for (let i = 0; i < 2; i++) {
    const pos = out.length + i;
    if (pos % 2 === 0) {
      const next = applyOp(a, opA);
      if (!Number.isInteger(next) || isNaN(next)) return null;
      extra.push(a);
      a = next;
    } else {
      const next = applyOp(b, opB);
      if (!Number.isInteger(next) || isNaN(next)) return null;
      extra.push(b);
      b = next;
    }
  }
  return [...out, ...extra];
}

/** Wachsende Differenzen: Differenz steigt um einen festen Wert.
 * z.B. +2, +4, +6, +8,… oder +1, +3, +5, +7,… (Differenz steigt um 2)
 * oder ×1, ×2, ×3, ×4,… (Multiplikator steigt um 1)
 */
function buildGrowingDiff(
  start: number,
  baseOp: OpType,
  initialValue: number,
  step: number,
  length: number
): number[] | null {
  const out: number[] = [start];
  let cur = start;
  let val = initialValue;
  for (let i = 1; i < length; i++) {
    const next = applyOp(cur, { type: baseOp, value: val });
    if (!Number.isInteger(next) || isNaN(next)) return null;
    out.push(next);
    cur = next;
    val += step;
  }
  return out;
}

/** Fibonacci-ähnlich: Nächste Zahl = f(vorletzte, letzte).
 * Standard: a_n = a_{n-1} + a_{n-2}
 * Variante: a_n = a_{n-1} + a_{n-2} + offset
 */
function buildFibonacci(
  a: number,
  b: number,
  length: number,
  offset = 0,
  multiplier = 1
): number[] | null {
  const out: number[] = [a, b];
  for (let i = 2; i < length; i++) {
    const next = out[i - 1] * multiplier + out[i - 2] + offset;
    if (!Number.isInteger(next) || isNaN(next)) return null;
    if (Math.abs(next) > 100000) return null;
    out.push(next);
  }
  return out;
}

// ─── Interleaved Operator-Pools ───

function pickInterleavedOps(
  difficulty: DifficultyLevel,
  rand: () => number
): {
  startA: number;
  startB: number;
  opA: { type: OpType; value: number };
  opB: { type: OpType; value: number };
  ruleLabel: string;
} {
  const configs =
    difficulty === "easy"
      ? [
          {
            sA: 1,
            sB: 2,
            oA: { type: "+" as OpType, value: 2 },
            oB: { type: "+" as OpType, value: 3 },
          },
          {
            sA: 3,
            sB: 5,
            oA: { type: "+" as OpType, value: 3 },
            oB: { type: "+" as OpType, value: 5 },
          },
          {
            sA: 2,
            sB: 10,
            oA: { type: "×" as OpType, value: 2 },
            oB: { type: "+" as OpType, value: 10 },
          },
          {
            sA: 1,
            sB: 100,
            oA: { type: "+" as OpType, value: 1 },
            oB: { type: "−" as OpType, value: 10 },
          },
        ]
      : difficulty === "medium"
        ? [
            {
              sA: 2,
              sB: 3,
              oA: { type: "×" as OpType, value: 2 },
              oB: { type: "×" as OpType, value: 3 },
            },
            {
              sA: 1,
              sB: 100,
              oA: { type: "×" as OpType, value: 3 },
              oB: { type: "−" as OpType, value: 15 },
            },
            {
              sA: 5,
              sB: 2,
              oA: { type: "+" as OpType, value: 5 },
              oB: { type: "×" as OpType, value: 2 },
            },
            {
              sA: 100,
              sB: 1,
              oA: { type: "÷" as OpType, value: 2 },
              oB: { type: "×" as OpType, value: 2 },
            },
            {
              sA: 3,
              sB: 7,
              oA: { type: "×" as OpType, value: 2 },
              oB: { type: "+" as OpType, value: 7 },
            },
            {
              sA: 10,
              sB: 5,
              oA: { type: "+" as OpType, value: 10 },
              oB: { type: "×" as OpType, value: 3 },
            },
          ]
        : [
            {
              sA: 2,
              sB: 1000,
              oA: { type: "×" as OpType, value: 3 },
              oB: { type: "÷" as OpType, value: 2 },
            },
            {
              sA: 1,
              sB: 2,
              oA: { type: "×" as OpType, value: 2 },
              oB: { type: "×" as OpType, value: 3 },
            },
            {
              sA: 100,
              sB: 3,
              oA: { type: "−" as OpType, value: 7 },
              oB: { type: "×" as OpType, value: 2 },
            },
            {
              sA: 5,
              sB: 500,
              oA: { type: "×" as OpType, value: 3 },
              oB: { type: "÷" as OpType, value: 5 },
            },
            {
              sA: 4,
              sB: 7,
              oA: { type: "×" as OpType, value: 2 },
              oB: { type: "+" as OpType, value: 11 },
            },
          ];

  const c = configs[Math.floor(rand() * configs.length)];
  const opALabel = `${OP_LABELS[c.oA.type]}${c.oA.value}`;
  const opBLabel = `${OP_LABELS[c.oB.type]}${c.oB.value}`;
  return {
    startA: c.sA,
    startB: c.sB,
    opA: c.oA,
    opB: c.oB,
    ruleLabel: `Verschachtelt: Pos 1,3,5,… ${opALabel}; Pos 2,4,6,… ${opBLabel}`,
  };
}

// ─── Growing-diff Operator-Pools ───

function pickGrowingDiff(
  difficulty: DifficultyLevel,
  rand: () => number
): { start: number; baseOp: OpType; initial: number; step: number; ruleLabel: string } {
  const configs =
    difficulty === "easy"
      ? [
          { start: 1, baseOp: "+" as OpType, initial: 1, step: 1 }, // +1,+2,+3,+4
          { start: 2, baseOp: "+" as OpType, initial: 2, step: 2 }, // +2,+4,+6,+8
          { start: 100, baseOp: "−" as OpType, initial: 1, step: 1 }, // -1,-2,-3,-4
        ]
      : difficulty === "medium"
        ? [
            { start: 1, baseOp: "+" as OpType, initial: 3, step: 2 }, // +3,+5,+7,+9
            { start: 2, baseOp: "×" as OpType, initial: 1, step: 1 }, // ×1,×2,×3,×4
            { start: 1, baseOp: "+" as OpType, initial: 1, step: 2 }, // +1,+3,+5,+7
            { start: 5, baseOp: "+" as OpType, initial: 2, step: 3 }, // +2,+5,+8,+11
            { start: 3, baseOp: "+" as OpType, initial: 4, step: 4 }, // +4,+8,+12,+16
          ]
        : [
            { start: 1, baseOp: "×" as OpType, initial: 2, step: 1 }, // ×2,×3,×4,×5
            { start: 2, baseOp: "+" as OpType, initial: 1, step: 3 }, // +1,+4,+7,+10
            { start: 1000, baseOp: "−" as OpType, initial: 10, step: 10 }, // -10,-20,-30
            { start: 3, baseOp: "+" as OpType, initial: 5, step: 5 }, // +5,+10,+15,+20
            // Schrumpfende Differenzen (velumed-Stil: -72,-66,-60,-54)
            { start: 500, baseOp: "−" as OpType, initial: 72, step: -6 }, // -72,-66,-60,-54
            { start: 400, baseOp: "−" as OpType, initial: 50, step: -5 }, // -50,-45,-40,-35
          ];

  const c = configs[Math.floor(rand() * configs.length)];
  const opLabel = OP_LABELS[c.baseOp];
  return {
    ...c,
    ruleLabel: `Wachsende Differenz: ${opLabel}${c.initial}, ${opLabel}${c.initial + c.step}, ${opLabel}${c.initial + 2 * c.step}, …`,
  };
}

// ─── Fibonacci Pools ───

function pickFibonacci(
  difficulty: DifficultyLevel,
  rand: () => number
): { a: number; b: number; offset: number; multiplier: number; ruleLabel: string } {
  const configs =
    difficulty === "easy"
      ? [
          {
            a: 1,
            b: 1,
            offset: 0,
            multiplier: 1,
            ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige",
          },
          {
            a: 2,
            b: 2,
            offset: 0,
            multiplier: 1,
            ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige",
          },
          {
            a: 1,
            b: 3,
            offset: 0,
            multiplier: 1,
            ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige",
          },
        ]
      : difficulty === "medium"
        ? [
            {
              a: 1,
              b: 1,
              offset: 1,
              multiplier: 1,
              ruleLabel: "Fibonacci + 1: nächste = vorherige + vorvorherige + 1",
            },
            {
              a: 2,
              b: 3,
              offset: 0,
              multiplier: 1,
              ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige",
            },
            {
              a: 1,
              b: 2,
              offset: 0,
              multiplier: 2,
              ruleLabel: "Fibonacci ×2: nächste = 2 × vorherige + vorvorherige",
            },
          ]
        : [
            {
              a: 1,
              b: 1,
              offset: 0,
              multiplier: 2,
              ruleLabel: "Fibonacci ×2: nächste = 2 × vorherige + vorvorherige",
            },
            {
              a: 2,
              b: 3,
              offset: 2,
              multiplier: 1,
              ruleLabel: "Fibonacci + 2: nächste = vorherige + vorvorherige + 2",
            },
            {
              a: 1,
              b: 2,
              offset: -1,
              multiplier: 2,
              ruleLabel: "nächste = 2 × vorherige + vorvorherige − 1",
            },
          ];

  return configs[Math.floor(rand() * configs.length)];
}

// ─── Welchen Pattern-Typ wählen? ───

function pickPatternType(difficulty: DifficultyLevel, rand: () => number): PatternType {
  const r = rand();
  if (difficulty === "easy") {
    // 60% periodic, 20% growing-diff, 10% interleaved, 10% fibonacci
    if (r < 0.6) return "periodic";
    if (r < 0.8) return "growing-diff";
    if (r < 0.9) return "interleaved";
    return "fibonacci";
  }
  if (difficulty === "medium") {
    // 40% periodic, 20% interleaved, 20% growing-diff, 20% fibonacci
    if (r < 0.4) return "periodic";
    if (r < 0.6) return "interleaved";
    if (r < 0.8) return "growing-diff";
    return "fibonacci";
  }
  // hard: 30% periodic, 25% interleaved, 25% growing-diff, 20% fibonacci
  if (r < 0.3) return "periodic";
  if (r < 0.55) return "interleaved";
  if (r < 0.8) return "growing-diff";
  return "fibonacci";
}

/** Prüft ob eine Folge sinnvolle Werte hat (keine zu großen Zahlen, alle ganzzahlig). */
function isReasonableSequence(seq: number[]): boolean {
  return seq.every((n) => Number.isInteger(n) && !isNaN(n) && Math.abs(n) <= 100000);
}

/** Generiert eine MedAT-Zahlenfolgen-Aufgabe. Validiert vor Return; bei Fehlschlag Retry mit anderem Seed. */
const MAX_SEQUENCE_VALIDATE_RETRIES = 10;

export function generateSequenceTask(difficulty: DifficultyLevel, seed: number): SequenceTask {
  for (let retry = 0; retry < MAX_SEQUENCE_VALIDATE_RETRIES; retry++) {
    const result = generateSequenceTaskInner(difficulty, seed + retry);
    if (validateSequenceTask(result)) return result;
  }
  return generateSequenceTaskInner(difficulty, seed + MAX_SEQUENCE_VALIDATE_RETRIES);
}

function generateSequenceTaskInner(difficulty: DifficultyLevel, seed: number): SequenceTask {
  const rand = seedRng(seed);
  const patternType = pickPatternType(difficulty, rand);

  if (patternType === "interleaved") {
    return generateInterleavedTask(difficulty, rand);
  }
  if (patternType === "growing-diff") {
    return generateGrowingDiffTask(difficulty, rand);
  }
  if (patternType === "fibonacci") {
    return generateFibonacciTask(difficulty, rand);
  }
  return generatePeriodicTask(difficulty, rand);
}

/** Generiert Distraktoren und baut SequenceTask aus visible + correctNext. */
function buildTaskFromSequence(
  visible: number[],
  correctNext: [number, number],
  ruleLabel: string,
  difficulty: DifficultyLevel,
  rand: () => number,
  explanation: string
): SequenceTask {
  // Generate 3 unique distractors
  const distractors: [number, number][] = [];
  const offsets = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
  for (const off of offsets) {
    distractors.push([correctNext[0] + off, correctNext[1]]);
    distractors.push([correctNext[0], correctNext[1] + off]);
    distractors.push([correctNext[0] + off, correctNext[1] - off]);
    if (distractors.length >= 12) break;
  }
  const unique = distinctPairs(correctNext, distractors).slice(0, 3);
  // Pad if needed
  while (unique.length < 3) {
    const off = Math.floor(rand() * 10) + 1;
    unique.push([correctNext[0] + off, correctNext[1] - off]);
  }

  const optionKeys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
  const correctPos = Math.floor(rand() * 4);
  const correctKey = optionKeys[correctPos];
  const optionsArr: { key: "A" | "B" | "C" | "D"; value: [number, number] }[] = [];
  let idx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctPos) {
      optionsArr.push({ key: optionKeys[i], value: correctNext });
    } else {
      optionsArr.push({ key: optionKeys[i], value: unique[idx++] ?? correctNext });
    }
  }
  const options: SequenceTask["options"] = [
    ...optionsArr.map((o) => ({ key: o.key, value: o.value })),
    { key: "E", text: "Keine der Antwortmöglichkeiten ist richtig" },
  ];

  return {
    id: `zf-medat-${Math.floor(rand() * 1e9)}-${Date.now()}`,
    sequence: [...visible, "?", "?"],
    correctNext,
    options,
    correctOptionId: correctKey,
    rule: ruleLabel,
    explanation,
    difficulty,
  };
}

function generateInterleavedTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickInterleavedOps(difficulty, rand);
  const totalLen = difficulty === "easy" ? 8 : difficulty === "medium" ? 9 : 10;
  const fullSeq = buildInterleaved(cfg.startA, cfg.startB, cfg.opA, cfg.opB, totalLen);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    // Fallback to periodic
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `Verschachtelte Folge: Ungerade Positionen (${visible.filter((_, i) => i % 2 === 0).join(", ")}) folgen der Regel ${OP_LABELS[cfg.opA.type]}${cfg.opA.value}. ` +
      `Gerade Positionen (${visible.filter((_, i) => i % 2 === 1).join(", ")}) folgen der Regel ${OP_LABELS[cfg.opB.type]}${cfg.opB.value}.\n` +
      `Nächste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`
  );
}

function generateGrowingDiffTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickGrowingDiff(difficulty, rand);
  const totalLen = difficulty === "easy" ? 8 : difficulty === "medium" ? 9 : 10;
  const fullSeq = buildGrowingDiff(cfg.start, cfg.baseOp, cfg.initial, cfg.step, totalLen);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  const diffs: string[] = [];
  for (let i = 0; i < Math.min(4, visLen - 1); i++) {
    const val = cfg.initial + i * cfg.step;
    diffs.push(`${OP_LABELS[cfg.baseOp]}${val}`);
  }

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `Differenzen wachsen: ${diffs.join(", ")}, …\n` +
      `Nächste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`
  );
}

function generateFibonacciTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickFibonacci(difficulty, rand);
  const totalLen = difficulty === "easy" ? 8 : difficulty === "medium" ? 9 : 10;
  const fullSeq = buildFibonacci(cfg.a, cfg.b, totalLen, cfg.offset, cfg.multiplier);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `${cfg.ruleLabel}.\n` +
      `Beispiel: ${visible[visible.length - 2]} und ${visible[visible.length - 1]} → ` +
      `${cfg.multiplier !== 1 ? `${cfg.multiplier} × ${visible[visible.length - 1]} + ` : `${visible[visible.length - 1]} + `}` +
      `${visible[visible.length - 2]}${cfg.offset !== 0 ? ` ${cfg.offset > 0 ? "+" : ""}${cfg.offset}` : ""} = ${correctNext[0]}.\n` +
      `Nächste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`
  );
}

function generatePeriodicTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const ops = pickOps(difficulty, rand);
  const lengthVisible =
    difficulty === "easy"
      ? 6 + Math.floor(rand() * 2)
      : difficulty === "medium"
        ? 7 + Math.floor(rand() * 2)
        : 8 + Math.floor(rand() * 2);
  const start = pickStart(ops, lengthVisible + 2, rand, difficulty);
  const fullSeq = buildSequence(start, ops, lengthVisible + 2);

  // Validate all values are integers (NaN from division = invalid)
  if (!isReasonableSequence(fullSeq)) {
    // Retry with different ops
    const fallbackOps = [{ type: "+" as OpType, value: Math.floor(rand() * 10) + 2 }];
    const fallbackStart = Math.floor(rand() * 20) + 3;
    const fallbackSeq = buildSequence(fallbackStart, fallbackOps, lengthVisible + 2);
    const vis = fallbackSeq.slice(0, lengthVisible);
    const cn: [number, number] = [fallbackSeq[lengthVisible], fallbackSeq[lengthVisible + 1]];
    const ruleLabel = `${formatOps(fallbackOps)} (durchgehend)`;
    const task = buildTaskFromSequence(
      vis,
      cn,
      ruleLabel,
      difficulty,
      rand,
      buildExplanation(vis, fallbackOps, cn)
    );
    task.ops = fallbackOps;
    return task;
  }

  const visible = fullSeq.slice(0, lengthVisible);
  const correctNext: [number, number] = [fullSeq[lengthVisible], fullSeq[lengthVisible + 1]];
  const ruleLabel =
    ops.length === 1 ? `${formatOps(ops)} (durchgehend)` : `${formatOps(ops)} (wiederholend)`;
  const explanation = buildExplanation(visible, ops, correctNext);

  // Use specialized distractors for periodic tasks
  const distractors: [number, number][] = [];
  distractors.push(distractorFirstRight(correctNext, ops, rand));
  distractors.push(distractorWrongOp(correctNext, rand));
  distractors.push(distractorOffset(visible, ops, rand));
  let unique = distinctPairs(correctNext, distractors);
  while (unique.length < 3) {
    distractors.push(distractorFirstRight(correctNext, ops, rand));
    distractors.push(distractorWrongOp(correctNext, rand));
    unique = distinctPairs(correctNext, distractors);
  }
  const three = unique.slice(0, 3);

  const optionKeys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
  const correctPos = Math.floor(rand() * 4);
  const correctKey = optionKeys[correctPos];
  const optionsArr: { key: "A" | "B" | "C" | "D"; value: [number, number] }[] = [];
  let idx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctPos) {
      optionsArr.push({ key: optionKeys[i], value: correctNext });
    } else {
      optionsArr.push({ key: optionKeys[i], value: three[idx++] ?? correctNext });
    }
  }
  const options: SequenceTask["options"] = [
    ...optionsArr.map((o) => ({ key: o.key, value: o.value })),
    { key: "E", text: "Keine der Antwortmöglichkeiten ist richtig" },
  ];

  return {
    id: `zf-medat-${Math.floor(rand() * 1e9)}-${Date.now()}`,
    sequence: [...visible, "?", "?"],
    correctNext,
    options,
    correctOptionId: correctKey,
    rule: ruleLabel,
    explanation,
    difficulty,
    ops,
  };
}

/** MedAT difficulty distribution: 40% leicht, 40% mittel, 20% schwer. */
function zfDifficultyForIndex(i: number): DifficultyLevel {
  const pattern: DifficultyLevel[] = [
    "easy",
    "easy",
    "medium",
    "medium",
    "easy",
    "medium",
    "easy",
    "hard",
    "medium",
    "hard",
  ];
  return pattern[i % 10]!;
}

/** Generiert mehrere Aufgaben (gemischt nach Schwierigkeit, 40/40/20). */
export function generateSequenceTaskSet(count: number, baseSeed: number): SequenceTask[] {
  const out: SequenceTask[] = [];
  for (let i = 0; i < count; i++) {
    out.push(generateSequenceTask(zfDifficultyForIndex(i), baseSeed + i * 7919));
  }
  return out;
}

// =============================================================================
// VALIDATOR – Genau 1 korrekte Antwort, Regel konsistent, lösbar
// =============================================================================

/**
 * Prüft eine Zahlenfolgen-Aufgabe:
 * - Genau 5 Optionen (A–E), correctOptionId referenziert eine davon.
 * - Wenn ops vorhanden: Regel angewendet auf die sichtbare Folge liefert genau ein
 *   korrektes Paar; genau diese Option ist als korrekt markiert; alle anderen sind falsch.
 * - Wenn keine ops (offizielle Beispiele): Struktur konsistent (correctNext = Wert der
 *   als korrekt markierten Option).
 */
export function validateSequenceTask(task: SequenceTask): boolean {
  const numbers = task.sequence.filter((x): x is number => x !== "?");
  const gaps = task.sequence.filter((x) => x === "?");
  if (numbers.length < 6 || gaps.length !== 2) return false;
  if (!task.options || task.options.length !== 5) return false;
  if (!["A", "B", "C", "D", "E"].includes(task.correctOptionId)) return false;

  let expectedNext: [number, number];
  if (task.ops && task.ops.length > 0) {
    const full = buildSequence(numbers[0]!, task.ops, numbers.length + 2);
    if (full.length < numbers.length + 2) return false;
    const reproduced = full.slice(0, numbers.length).every((v, i) => v === numbers[i]);
    if (!reproduced) return false;
    expectedNext = [full[numbers.length]!, full[numbers.length + 1]!];
    if (task.correctNext[0] !== expectedNext[0] || task.correctNext[1] !== expectedNext[1])
      return false;
  } else {
    expectedNext = [task.correctNext[0], task.correctNext[1]];
  }

  let matchCount = 0;
  let correctOptionMatches = false;
  for (let i = 0; i < 5; i++) {
    const opt = task.options[i];
    if (!opt) continue;
    if (opt.key === "E") continue;
    const val = opt.value;
    if (val && val[0] === expectedNext[0] && val[1] === expectedNext[1]) {
      matchCount++;
      if (opt.key === task.correctOptionId) correctOptionMatches = true;
    }
  }

  if (task.correctOptionId === "E") {
    return matchCount === 0 && task.options[4]?.key === "E";
  }
  return matchCount === 1 && correctOptionMatches;
}
