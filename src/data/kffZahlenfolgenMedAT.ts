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
  // MedAT-konform: mindestens 2 verschiedene Operatoren, typisch 2-3er Zyklen.
  // Keine Single-Op-Folgen (+1, +1, +1...) — die sind zu trivial.
  // Orientiert an offiziellen IB ZF 26 Beispielen.
  const choices: { type: OpType; value: number }[][] = [
    // 2-op cycles: Addition + Subtraktion
    [
      { type: "+", value: 4 },
      { type: "−", value: 2 },
    ],
    [
      { type: "+", value: 5 },
      { type: "−", value: 1 },
    ],
    [
      { type: "+", value: 3 },
      { type: "+", value: 5 },
    ],
    [
      { type: "+", value: 8 },
      { type: "−", value: 4 },
    ],
    // 2-op cycles: Multiplikation + Addition/Subtraktion
    [
      { type: "×", value: 2 },
      { type: "+", value: 1 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 1 },
    ],
    [
      { type: "+", value: 2 },
      { type: "×", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 3 },
    ],
    // 3-op cycles: wie offizielle Beispiele (+a, ×b, -c)
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
      { type: "+", value: 3 },
      { type: "×", value: 2 },
      { type: "−", value: 3 },
    ],
    [
      { type: "+", value: 2 },
      { type: "+", value: 3 },
      { type: "−", value: 1 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 2 },
      { type: "+", value: 4 },
    ],
    [
      { type: "+", value: 5 },
      { type: "−", value: 3 },
      { type: "+", value: 2 },
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
    // ×2, +3 alternating (net progression)
    [
      { type: "×", value: 2 },
      { type: "+", value: 3 },
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
    // Reverse-operation: do then undo (+a, ×b, ÷b, −a palindrome)
    [
      { type: "+", value: 4 },
      { type: "×", value: 3 },
      { type: "÷", value: 3 },
      { type: "−", value: 4 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 6 },
      { type: "−", value: 6 },
      { type: "÷", value: 2 },
    ],
    // Near-inverse: operations almost cancel but not quite
    [
      { type: "+", value: 5 },
      { type: "×", value: 2 },
      { type: "−", value: 3 },
    ],
    [
      { type: "×", value: 3 },
      { type: "−", value: 2 },
      { type: "÷", value: 3 },
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
    // Reverse-operation palindromes (hard to spot)
    [
      { type: "+", value: 3 },
      { type: "×", value: 2 },
      { type: "−", value: 5 },
      { type: "÷", value: 2 },
      { type: "−", value: 3 },
    ],
    [
      { type: "×", value: 3 },
      { type: "+", value: 7 },
      { type: "÷", value: 3 },
      { type: "−", value: 7 },
    ],
    // Near-cancelling cycles that drift slowly
    [
      { type: "×", value: 2 },
      { type: "+", value: 3 },
      { type: "÷", value: 2 },
      { type: "−", value: 1 },
    ],
    [
      { type: "+", value: 8 },
      { type: "×", value: 2 },
      { type: "−", value: 10 },
      { type: "÷", value: 2 },
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
  difficulty?: DifficultyLevel,
  _retries = 0
): number {
  const MAX_RETRIES = 50;
  let start: number;
  if (ops.some((o) => o.type === "÷")) {
    // Compute LCM of all divisors to find valid multiples
    const divisors = ops.filter((o) => o.type === "÷").map((o) => o.value);
    const lcm = divisors.reduce((a, b) => (a * b) / gcd(a, b), 1);
    if (difficulty === "hard") {
      // Random multiple of LCM in range [lcm, 30*lcm], then add random multiple offset
      const maxMult = Math.max(1, Math.floor(100 / lcm));
      start = lcm * (1 + Math.floor(rand() * maxMult));
    } else {
      const maxMult = Math.max(1, Math.floor(60 / lcm));
      start = lcm * (1 + Math.floor(rand() * maxMult));
    }
  } else if (difficulty === "hard") {
    start = Math.floor(rand() * 80) + 10;
  } else if (difficulty === "medium") {
    start = Math.floor(rand() * 30) + 5;
  } else {
    start = Math.floor(rand() * 20) + 5;
  }
  const seq = buildSequence(start, ops, length);
  const allInt = seq.every((n) => Number.isInteger(n));
  if (allInt) return start;
  if (_retries >= MAX_RETRIES) return start;
  return pickStart(ops, length, rand, difficulty, _retries + 1);
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
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
function _distractorWrongOp(correct: [number, number], rand: () => number): [number, number] {
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

// ─── Smart Distractor Generators (pattern-aware) ───

/** Mistake: assume the last first-difference continues unchanged. */
function distractorLastDiff(
  visible: number[],
  correctNext: [number, number]
): [number, number] | null {
  const n = visible.length;
  if (n < 2) return null;
  const d = visible[n - 1] - visible[n - 2];
  const r: [number, number] = [visible[n - 1] + d, visible[n - 1] + 2 * d];
  if (r[0] === correctNext[0] && r[1] === correctNext[1]) return null;
  return r;
}

/** Mistake: assume second-order differences are constant (when they're not). */
function distractorSecondDiff(
  visible: number[],
  correctNext: [number, number]
): [number, number] | null {
  const n = visible.length;
  if (n < 3) return null;
  const d1 = visible[n - 1] - visible[n - 2];
  const d0 = visible[n - 2] - visible[n - 3];
  const dd = d1 - d0;
  const nextD = d1 + dd;
  const v1 = visible[n - 1] + nextD;
  const v2 = v1 + nextD + dd;
  const r: [number, number] = [v1, v2];
  if (r[0] === correctNext[0] && r[1] === correctNext[1]) return null;
  if (!Number.isInteger(v1) || !Number.isInteger(v2)) return null;
  return r;
}

/** Mistake: assume the last ratio continues unchanged. */
function distractorLastRatio(
  visible: number[],
  correctNext: [number, number]
): [number, number] | null {
  const n = visible.length;
  if (n < 2 || visible[n - 2] === 0) return null;
  const ratio = visible[n - 1] / visible[n - 2];
  if (!Number.isInteger(ratio) || ratio === 0) return null;
  const v1 = visible[n - 1] * ratio;
  const v2 = v1 * ratio;
  if (!Number.isInteger(v1) || !Number.isInteger(v2) || Math.abs(v2) > 5000) return null;
  const r: [number, number] = [v1, v2];
  if (r[0] === correctNext[0] && r[1] === correctNext[1]) return null;
  return r;
}

/** Mistake: correct first value, wrong second using a previous step's difference. */
function distractorFirstRightSmart(
  visible: number[],
  correctNext: [number, number],
  rand: () => number
): [number, number] | null {
  const n = visible.length;
  if (n < 3) return null;
  const prevDiffs: number[] = [];
  for (let i = 1; i < Math.min(n, 6); i++) {
    prevDiffs.push(visible[i] - visible[i - 1]);
  }
  const wrongDiff = prevDiffs[Math.floor(rand() * prevDiffs.length)];
  const v2 = correctNext[0] + wrongDiff;
  if (v2 === correctNext[1]) return null;
  return [correctNext[0], v2];
}

/** Periodic: apply ops starting from wrong position in cycle. */
function distractorWrongPhase(
  visible: number[],
  ops: { type: OpType; value: number }[],
  correctNext: [number, number]
): [number, number][] {
  const results: [number, number][] = [];
  const last = visible[visible.length - 1];
  const correctPhase = (visible.length - 1) % ops.length;

  for (let phase = 0; phase < ops.length; phase++) {
    if (phase === correctPhase) continue;
    const op1 = ops[phase];
    const v1 = applyOp(last, op1);
    const op2 = ops[(phase + 1) % ops.length];
    const v2 = applyOp(v1, op2);
    if (Number.isInteger(v1) && Number.isInteger(v2) && !isNaN(v1) && !isNaN(v2)) {
      if (v1 !== correctNext[0] || v2 !== correctNext[1]) {
        results.push([v1, v2]);
      }
    }
  }
  return results;
}

/** Periodic: swap one operation with its inverse (+↔−, ×↔÷). */
function distractorInverseOp(
  visible: number[],
  ops: { type: OpType; value: number }[],
  correctNext: [number, number],
  rand: () => number
): [number, number] | null {
  const inverseMap: Record<OpType, OpType> = { "+": "−", "−": "+", "×": "÷", "÷": "×" };
  const modOps = ops.map((o) => ({ ...o }));
  const swapIdx = Math.floor(rand() * modOps.length);
  modOps[swapIdx] = { type: inverseMap[modOps[swapIdx].type], value: modOps[swapIdx].value };

  const last = visible[visible.length - 1];
  const phase = (visible.length - 1) % modOps.length;
  const v1 = applyOp(last, modOps[phase]);
  const v2 = applyOp(v1, modOps[(phase + 1) % modOps.length]);
  if (!Number.isInteger(v1) || !Number.isInteger(v2) || isNaN(v1) || isNaN(v2)) return null;
  if (Math.abs(v1) > 5000 || Math.abs(v2) > 5000) return null;
  if (v1 === correctNext[0] && v2 === correctNext[1]) return null;
  return [v1, v2];
}

/** Periodic: apply same operation twice instead of cycling to next. */
function distractorRepeatedOp(
  visible: number[],
  ops: { type: OpType; value: number }[],
  correctNext: [number, number]
): [number, number] | null {
  if (ops.length < 2) return null;
  const last = visible[visible.length - 1];
  const phase = (visible.length - 1) % ops.length;
  const op = ops[phase];
  const v1 = applyOp(last, op);
  const v2 = applyOp(v1, op); // same op again
  if (!Number.isInteger(v1) || !Number.isInteger(v2) || isNaN(v1) || isNaN(v2)) return null;
  if (Math.abs(v2) > 5000) return null;
  if (v1 === correctNext[0] && v2 === correctNext[1]) return null;
  return [v1, v2];
}

// ─── Quadratic Pattern (second-order constant differences) ───

function buildQuadratic(
  start: number,
  firstDiff: number,
  secondDiff: number,
  length: number
): number[] {
  const out: number[] = [start];
  let diff = firstDiff;
  let cur = start;
  for (let i = 1; i < length; i++) {
    cur += diff;
    out.push(cur);
    diff += secondDiff;
  }
  return out;
}

function pickQuadratic(
  difficulty: DifficultyLevel,
  rand: () => number
): { start: number; firstDiff: number; secondDiff: number; ruleLabel: string } {
  const configs =
    difficulty === "easy"
      ? [
          { firstDiff: 3, secondDiff: 2 },
          { firstDiff: 1, secondDiff: 1 },
          { firstDiff: 1, secondDiff: 2 },
          { firstDiff: 2, secondDiff: 2 },
          { firstDiff: 2, secondDiff: 1 },
          { firstDiff: 4, secondDiff: 1 },
        ]
      : difficulty === "medium"
        ? [
            { firstDiff: 5, secondDiff: 2 },
            { firstDiff: 2, secondDiff: 3 },
            { firstDiff: -5, secondDiff: -2 },
            { firstDiff: 3, secondDiff: 4 },
            { firstDiff: -3, secondDiff: -1 },
            { firstDiff: 4, secondDiff: 3 },
            { firstDiff: 6, secondDiff: 2 },
            { firstDiff: -4, secondDiff: -3 },
            { firstDiff: 1, secondDiff: 5 },
          ]
        : [
            { firstDiff: 7, secondDiff: 3 },
            { firstDiff: 4, secondDiff: 5 },
            { firstDiff: -10, secondDiff: -3 },
            { firstDiff: 1, secondDiff: 6 },
            { firstDiff: -20, secondDiff: 2 },
            { firstDiff: 6, secondDiff: 4 },
            { firstDiff: -8, secondDiff: -4 },
            { firstDiff: 3, secondDiff: 7 },
            { firstDiff: -15, secondDiff: 3 },
            { firstDiff: 5, secondDiff: 6 },
          ];
  const c = configs[Math.floor(rand() * configs.length)];
  // Randomize start value to prevent identical sequences from same config
  const startRange =
    c.firstDiff < 0
      ? { min: 50, max: 500 } // Decreasing: start high
      : { min: 0, max: 20 }; // Increasing: start low
  const start = startRange.min + Math.floor(rand() * (startRange.max - startRange.min + 1));
  return {
    start,
    firstDiff: c.firstDiff,
    secondDiff: c.secondDiff,
    ruleLabel: `Zweite Differenz konstant: ${c.secondDiff > 0 ? "+" : ""}${c.secondDiff}`,
  };
}

function generateQuadraticTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  // Official MedAT: always 7 visible + 2 to find = 9 total
  const totalLen = 9;
  // Try multiple configs to find one that produces reasonable values
  for (let attempt = 0; attempt < 5; attempt++) {
    const cfg = pickQuadratic(difficulty, rand);
    const fullSeq = buildQuadratic(cfg.start, cfg.firstDiff, cfg.secondDiff, totalLen);
    if (isReasonableSequence(fullSeq)) {
      return buildQuadraticTaskFromSeq(fullSeq, cfg, totalLen, difficulty, rand);
    }
  }
  // Safe fallback: simple quadratic that always works (n²)
  const safeStart = Math.floor(rand() * 10) + 1;
  const safeCfg = {
    start: safeStart,
    firstDiff: 3,
    secondDiff: 2,
    ruleLabel: "Zweite Differenz konstant: +2",
  };
  const safeSeq = buildQuadratic(safeStart, 3, 2, totalLen);
  return buildQuadraticTaskFromSeq(safeSeq, safeCfg, totalLen, difficulty, rand);
}

function buildQuadraticTaskFromSeq(
  fullSeq: number[],
  cfg: { start: number; firstDiff: number; secondDiff: number; ruleLabel: string },
  totalLen: number,
  difficulty: DifficultyLevel,
  rand: () => number
): SequenceTask {
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  // Smart distractors for quadratic
  const custom: [number, number][] = [];
  const lastD = visible[visLen - 1] - visible[visLen - 2];
  // Wrong: constant first-difference (ignore acceleration)
  custom.push([visible[visLen - 1] + lastD, visible[visLen - 1] + 2 * lastD]);
  // Wrong: second-difference off by ±1
  for (const ddOff of [1, -1]) {
    const wrongDD = cfg.secondDiff + ddOff;
    const wrongD = lastD + wrongDD;
    const w1 = visible[visLen - 1] + wrongD;
    const w2 = w1 + wrongD + wrongDD;
    if (w1 !== correctNext[0] || w2 !== correctNext[1]) {
      custom.push([w1, w2]);
    }
  }
  // Wrong: confuse with ratio pattern
  if (visible[visLen - 2] !== 0) {
    const fakeRatio = Math.round(visible[visLen - 1] / visible[visLen - 2]);
    if (fakeRatio !== 0 && fakeRatio !== 1) {
      const r1 = visible[visLen - 1] * fakeRatio;
      const r2 = r1 * fakeRatio;
      if (Math.abs(r2) <= 5000 && (r1 !== correctNext[0] || r2 !== correctNext[1])) {
        custom.push([r1, r2]);
      }
    }
  }

  const diffs: number[] = [];
  for (let i = 1; i < Math.min(5, visLen); i++) {
    diffs.push(visible[i] - visible[i - 1]);
  }

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `Differenzen: ${diffs.join(", ")}, \u2026 (jeweils ${cfg.secondDiff > 0 ? "+" : ""}${cfg.secondDiff} mehr)\n` +
      `N\u00e4chste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`,
    custom
  );
}

// ─── Neue Pattern-Typen (zusätzlich zu periodischen Operatoren) ───

type PatternType = "periodic" | "interleaved" | "growing-diff" | "fibonacci" | "quadratic";

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
  const _lastEvenIdx = out.length % 2 === 0 ? out.length : out.length - 1;
  const _lastOddIdx = out.length % 2 === 1 ? out.length : out.length - 1;
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
    if (Math.abs(next) > 5000) return null;
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
  type ILConfig = {
    oA: { type: OpType; value: number };
    oB: { type: OpType; value: number };
    startARange: [number, number]; // [min, max] for randomization
    startBRange: [number, number];
  };
  const configs: ILConfig[] =
    difficulty === "easy"
      ? [
          {
            oA: { type: "+", value: 2 },
            oB: { type: "+", value: 3 },
            startARange: [1, 10],
            startBRange: [1, 10],
          },
          {
            oA: { type: "+", value: 3 },
            oB: { type: "+", value: 5 },
            startARange: [1, 12],
            startBRange: [2, 12],
          },
          {
            oA: { type: "×", value: 2 },
            oB: { type: "+", value: 10 },
            startARange: [2, 6],
            startBRange: [5, 20],
          },
          {
            oA: { type: "+", value: 1 },
            oB: { type: "−", value: 10 },
            startARange: [1, 8],
            startBRange: [80, 120],
          },
          {
            oA: { type: "+", value: 4 },
            oB: { type: "+", value: 2 },
            startARange: [1, 10],
            startBRange: [1, 10],
          },
          {
            oA: { type: "+", value: 5 },
            oB: { type: "−", value: 3 },
            startARange: [1, 10],
            startBRange: [40, 60],
          },
        ]
      : difficulty === "medium"
        ? [
            {
              oA: { type: "×", value: 2 },
              oB: { type: "×", value: 3 },
              startARange: [2, 5],
              startBRange: [2, 5],
            },
            {
              oA: { type: "×", value: 3 },
              oB: { type: "−", value: 15 },
              startARange: [1, 4],
              startBRange: [80, 150],
            },
            {
              oA: { type: "+", value: 5 },
              oB: { type: "×", value: 2 },
              startARange: [3, 15],
              startBRange: [2, 8],
            },
            {
              oA: { type: "÷", value: 2 },
              oB: { type: "×", value: 2 },
              startARange: [64, 128],
              startBRange: [1, 5],
            },
            {
              oA: { type: "×", value: 2 },
              oB: { type: "+", value: 7 },
              startARange: [2, 8],
              startBRange: [3, 15],
            },
            {
              oA: { type: "+", value: 10 },
              oB: { type: "×", value: 3 },
              startARange: [5, 20],
              startBRange: [2, 6],
            },
            {
              oA: { type: "+", value: 8 },
              oB: { type: "−", value: 5 },
              startARange: [3, 12],
              startBRange: [50, 80],
            },
            {
              oA: { type: "×", value: 2 },
              oB: { type: "+", value: 4 },
              startARange: [3, 7],
              startBRange: [5, 15],
            },
          ]
        : [
            {
              oA: { type: "×", value: 3 },
              oB: { type: "÷", value: 2 },
              startARange: [2, 5],
              startBRange: [512, 1024],
            },
            {
              oA: { type: "×", value: 2 },
              oB: { type: "×", value: 3 },
              startARange: [1, 4],
              startBRange: [1, 4],
            },
            {
              oA: { type: "−", value: 7 },
              oB: { type: "×", value: 2 },
              startARange: [80, 120],
              startBRange: [2, 6],
            },
            {
              oA: { type: "×", value: 3 },
              oB: { type: "÷", value: 5 },
              startARange: [3, 8],
              startBRange: [250, 625],
            },
            {
              oA: { type: "×", value: 2 },
              oB: { type: "+", value: 11 },
              startARange: [3, 8],
              startBRange: [5, 15],
            },
            {
              oA: { type: "−", value: 9 },
              oB: { type: "×", value: 3 },
              startARange: [100, 150],
              startBRange: [2, 5],
            },
            {
              oA: { type: "+", value: 13 },
              oB: { type: "÷", value: 3 },
              startARange: [5, 20],
              startBRange: [243, 729],
            },
            {
              oA: { type: "×", value: 4 },
              oB: { type: "−", value: 8 },
              startARange: [2, 5],
              startBRange: [80, 120],
            },
          ];

  const c = configs[Math.floor(rand() * configs.length)];
  const startA = c.startARange[0] + Math.floor(rand() * (c.startARange[1] - c.startARange[0] + 1));
  const startB = c.startBRange[0] + Math.floor(rand() * (c.startBRange[1] - c.startBRange[0] + 1));
  // For ÷ ops, ensure start is divisible
  const sA =
    c.oA.type === "÷" ? Math.floor(startA / c.oA.value) * c.oA.value || c.oA.value : startA;
  const sB =
    c.oB.type === "÷" ? Math.floor(startB / c.oB.value) * c.oB.value || c.oB.value : startB;
  const opALabel = `${OP_LABELS[c.oA.type]}${c.oA.value}`;
  const opBLabel = `${OP_LABELS[c.oB.type]}${c.oB.value}`;
  return {
    startA: sA,
    startB: sB,
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
          { baseOp: "+" as OpType, initial: 1, step: 1 }, // +1,+2,+3,+4
          { baseOp: "+" as OpType, initial: 2, step: 2 }, // +2,+4,+6,+8
          { baseOp: "−" as OpType, initial: 1, step: 1 }, // -1,-2,-3,-4
          { baseOp: "+" as OpType, initial: 3, step: 1 }, // +3,+4,+5,+6
          { baseOp: "+" as OpType, initial: 1, step: 3 }, // +1,+4,+7,+10
        ]
      : difficulty === "medium"
        ? [
            { baseOp: "+" as OpType, initial: 3, step: 2 }, // +3,+5,+7,+9
            { baseOp: "×" as OpType, initial: 1, step: 1 }, // ×1,×2,×3,×4
            { baseOp: "+" as OpType, initial: 1, step: 2 }, // +1,+3,+5,+7
            { baseOp: "+" as OpType, initial: 2, step: 3 }, // +2,+5,+8,+11
            { baseOp: "+" as OpType, initial: 4, step: 4 }, // +4,+8,+12,+16
            { baseOp: "−" as OpType, initial: 2, step: 2 }, // -2,-4,-6,-8
            { baseOp: "+" as OpType, initial: 5, step: 3 }, // +5,+8,+11,+14
            { baseOp: "−" as OpType, initial: 3, step: 3 }, // -3,-6,-9,-12
          ]
        : [
            { baseOp: "×" as OpType, initial: 2, step: 1 }, // ×2,×3,×4,×5
            { baseOp: "+" as OpType, initial: 1, step: 3 }, // +1,+4,+7,+10
            { baseOp: "−" as OpType, initial: 10, step: 10 }, // -10,-20,-30
            { baseOp: "+" as OpType, initial: 5, step: 5 }, // +5,+10,+15,+20
            // Schrumpfende Differenzen (velumed-Stil)
            { baseOp: "−" as OpType, initial: 72, step: -6 }, // -72,-66,-60,-54
            { baseOp: "−" as OpType, initial: 50, step: -5 }, // -50,-45,-40,-35
            { baseOp: "+" as OpType, initial: 3, step: 4 }, // +3,+7,+11,+15
            { baseOp: "−" as OpType, initial: 8, step: 8 }, // -8,-16,-24,-32
            { baseOp: "+" as OpType, initial: 7, step: 6 }, // +7,+13,+19,+25
          ];

  const c = configs[Math.floor(rand() * configs.length)];
  // Randomize start to prevent identical sequences from same config
  let start: number;
  if (c.baseOp === "−") {
    // Decreasing: start high enough to stay positive
    start = 100 + Math.floor(rand() * 900);
  } else if (c.baseOp === "×") {
    // Multiplicative: small start (avoid overflow)
    start = 1 + Math.floor(rand() * 5);
  } else {
    start = 1 + Math.floor(rand() * 20);
  }
  const opLabel = OP_LABELS[c.baseOp];
  return {
    start,
    baseOp: c.baseOp,
    initial: c.initial,
    step: c.step,
    ruleLabel:
      c.step < 0
        ? `Schrumpfende Differenz: ${opLabel}${c.initial}, ${opLabel}${c.initial + c.step}, ${opLabel}${c.initial + 2 * c.step}, …`
        : `Wachsende Differenz: ${opLabel}${c.initial}, ${opLabel}${c.initial + c.step}, ${opLabel}${c.initial + 2 * c.step}, …`,
  };
}

// ─── Fibonacci Pools ───

function pickFibonacci(
  difficulty: DifficultyLevel,
  rand: () => number
): { a: number; b: number; offset: number; multiplier: number; ruleLabel: string } {
  // Template configs without fixed starting pairs
  type FibConfig = { offset: number; multiplier: number; ruleLabel: string };
  const templates: FibConfig[] =
    difficulty === "easy"
      ? [{ offset: 0, multiplier: 1, ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige" }]
      : difficulty === "medium"
        ? [
            {
              offset: 1,
              multiplier: 1,
              ruleLabel: "Fibonacci + 1: nächste = vorherige + vorvorherige + 1",
            },
            {
              offset: 0,
              multiplier: 1,
              ruleLabel: "Fibonacci: nächste = vorherige + vorvorherige",
            },
            {
              offset: 0,
              multiplier: 2,
              ruleLabel: "Fibonacci ×2: nächste = 2 × vorherige + vorvorherige",
            },
            {
              offset: -1,
              multiplier: 1,
              ruleLabel: "Fibonacci − 1: nächste = vorherige + vorvorherige − 1",
            },
            {
              offset: 2,
              multiplier: 1,
              ruleLabel: "Fibonacci + 2: nächste = vorherige + vorvorherige + 2",
            },
          ]
        : [
            {
              offset: 0,
              multiplier: 2,
              ruleLabel: "Fibonacci ×2: nächste = 2 × vorherige + vorvorherige",
            },
            {
              offset: 2,
              multiplier: 1,
              ruleLabel: "Fibonacci + 2: nächste = vorherige + vorvorherige + 2",
            },
            { offset: -1, multiplier: 2, ruleLabel: "nächste = 2 × vorherige + vorvorherige − 1" },
            {
              offset: 3,
              multiplier: 1,
              ruleLabel: "Fibonacci + 3: nächste = vorherige + vorvorherige + 3",
            },
            {
              offset: 0,
              multiplier: 3,
              ruleLabel: "Fibonacci ×3: nächste = 3 × vorherige + vorvorherige",
            },
            { offset: -2, multiplier: 2, ruleLabel: "nächste = 2 × vorherige + vorvorherige − 2" },
          ];

  const t = templates[Math.floor(rand() * templates.length)];
  // Randomize starting pair to prevent identical sequences
  const aRange = difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8;
  const a = 1 + Math.floor(rand() * aRange);
  const b = a + Math.floor(rand() * aRange);
  return { a, b, ...t };
}

// ─── Welchen Pattern-Typ wählen? ───

function pickPatternType(difficulty: DifficultyLevel, rand: () => number): PatternType {
  const r = rand();
  if (difficulty === "easy") {
    // 35% periodic, 20% growing-diff, 15% interleaved, 15% fibonacci, 15% quadratic
    if (r < 0.35) return "periodic";
    if (r < 0.55) return "growing-diff";
    if (r < 0.7) return "interleaved";
    if (r < 0.85) return "fibonacci";
    return "quadratic";
  }
  if (difficulty === "medium") {
    // 30% periodic, 20% growing-diff, 20% interleaved, 15% fibonacci, 15% quadratic
    if (r < 0.3) return "periodic";
    if (r < 0.5) return "growing-diff";
    if (r < 0.7) return "interleaved";
    if (r < 0.85) return "fibonacci";
    return "quadratic";
  }
  // hard: 25% periodic, 20% growing-diff, 20% interleaved, 20% fibonacci, 15% quadratic
  if (r < 0.25) return "periodic";
  if (r < 0.45) return "growing-diff";
  if (r < 0.65) return "interleaved";
  if (r < 0.85) return "fibonacci";
  return "quadratic";
}

/** Prüft ob eine Folge sinnvolle Werte hat (keine zu großen Zahlen, alle ganzzahlig). */
function isReasonableSequence(seq: number[]): boolean {
  return seq.every((n) => Number.isInteger(n) && !isNaN(n) && n >= 0 && n <= 5000);
}

/** Convert a valid task to have E as the correct answer by replacing the correct option with a distractor. */
function makeTaskECorrect(task: SequenceTask, rand: () => number): SequenceTask | null {
  if (task.correctOptionId === "E") return task;

  const correctOpt = task.options.find((o) => o.key === task.correctOptionId);
  if (!correctOpt || !correctOpt.value) return null;
  const correctVal = correctOpt.value;

  const existingValues = task.options
    .filter((o): o is typeof o & { value: [number, number] } => !!o.value)
    .map((o) => o.value);

  // Extract visible numbers from the sequence (everything before the "?" entries)
  const visible = task.sequence.filter((v): v is number => typeof v === "number");

  // --- Pattern-derived distractor candidates ---
  const patternCandidates: [number, number][] = [];

  // Strategy 1: Wrong last-difference (assume constant first-difference)
  const ld = distractorLastDiff(visible, correctVal);
  if (ld) patternCandidates.push(ld);

  // Strategy 2: Wrong second-difference extrapolation
  const sd = distractorSecondDiff(visible, correctVal);
  if (sd) patternCandidates.push(sd);

  // Strategy 3: Wrong last-ratio extrapolation
  const lr = distractorLastRatio(visible, correctVal);
  if (lr) patternCandidates.push(lr);

  // Strategy 4: Correct first value, wrong second using a previous step's difference
  const frs = distractorFirstRightSmart(visible, correctVal, rand);
  if (frs) patternCandidates.push(frs);

  // Strategy 5–7: Ops-based distractors (if ops are available)
  if (task.ops && task.ops.length > 0) {
    // Wrong phase in the cycle
    const wpCandidates = distractorWrongPhase(visible, task.ops, correctVal);
    patternCandidates.push(...wpCandidates);

    // Inverse operation swap
    const inv = distractorInverseOp(visible, task.ops, correctVal, rand);
    if (inv) patternCandidates.push(inv);

    // Repeated same operation instead of cycling
    const rep = distractorRepeatedOp(visible, task.ops, correctVal);
    if (rep) patternCandidates.push(rep);
  }

  // Strategy 8: Off-by-one on the operation value (e.g., +4 becomes +3 or +5)
  if (task.ops && task.ops.length > 0) {
    const last = visible[visible.length - 1];
    const phase = (visible.length - 1) % task.ops.length;
    for (const delta of [-1, 1]) {
      const modOps = task.ops.map((o) => ({ ...o }));
      modOps[phase] = { ...modOps[phase], value: modOps[phase].value + delta };
      const v1 = applyOp(last, modOps[phase]);
      const nextPhase = (phase + 1) % modOps.length;
      const v2 = applyOp(v1, modOps[nextPhase]);
      if (
        Number.isInteger(v1) &&
        Number.isInteger(v2) &&
        !isNaN(v1) &&
        !isNaN(v2) &&
        Math.abs(v1) <= 5000 &&
        Math.abs(v2) <= 5000 &&
        (v1 !== correctVal[0] || v2 !== correctVal[1])
      ) {
        patternCandidates.push([v1, v2]);
      }
    }

    // Strategy 9: Apply rule to wrong starting number (use second-to-last instead of last)
    if (visible.length >= 2) {
      const wrongStart = visible[visible.length - 2];
      const v1 = applyOp(wrongStart, task.ops[phase]);
      const nextPhase = (phase + 1) % task.ops.length;
      const v2 = applyOp(v1, task.ops[nextPhase]);
      if (
        Number.isInteger(v1) &&
        Number.isInteger(v2) &&
        !isNaN(v1) &&
        !isNaN(v2) &&
        Math.abs(v1) <= 5000 &&
        Math.abs(v2) <= 5000 &&
        (v1 !== correctVal[0] || v2 !== correctVal[1])
      ) {
        patternCandidates.push([v1, v2]);
      }
    }
  }

  // Filter: must be integers, in range, and differ from correct answer
  const validCandidates = patternCandidates.filter(
    (p) =>
      Number.isInteger(p[0]) &&
      Number.isInteger(p[1]) &&
      !isNaN(p[0]) &&
      !isNaN(p[1]) &&
      Math.abs(p[0]) <= 5000 &&
      Math.abs(p[1]) <= 5000 &&
      (p[0] !== correctVal[0] || p[1] !== correctVal[1])
  );

  // Shuffle for variety
  for (let i = validCandidates.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [validCandidates[i], validCandidates[j]] = [validCandidates[j], validCandidates[i]];
  }

  // Try pattern-derived candidates first, then fall back to random offsets
  for (let i = 0; i < 20; i++) {
    let replacement: [number, number];

    if (i < validCandidates.length) {
      // Use pattern-derived candidate
      replacement = validCandidates[i];
    } else {
      // Fallback: random offsets (original approach)
      const offset1 = (Math.floor(rand() * 7) + 3) * (rand() < 0.5 ? 1 : -1);
      const offset2 = (Math.floor(rand() * 7) + 3) * (rand() < 0.5 ? 1 : -1);
      replacement = [correctVal[0] + offset1, correctVal[1] + offset2];
    }

    const isDuplicate = existingValues.some(
      (v) => v[0] === replacement[0] && v[1] === replacement[1]
    );
    const isCorrect = replacement[0] === correctVal[0] && replacement[1] === correctVal[1];
    if (!isDuplicate && !isCorrect) {
      const newOptions = task.options.map((o) => {
        if (o.key === task.correctOptionId && o.value) {
          return { ...o, value: replacement as [number, number] };
        }
        return o;
      });

      return {
        ...task,
        options: newOptions as SequenceTask["options"],
        correctOptionId: "E",
      };
    }
  }
  return null;
}

/** Generiert eine MedAT-Zahlenfolgen-Aufgabe. Validiert vor Return; bei Fehlschlag Retry mit anderem Seed. */
const MAX_SEQUENCE_VALIDATE_RETRIES = 10;

export function generateSequenceTask(difficulty: DifficultyLevel, seed: number): SequenceTask {
  // ~8% chance of E being correct (medium/hard only)
  const eRand = seedRng(seed * 31 + 7);
  const shouldMakeE = eRand() < 0.15;

  for (let retry = 0; retry < MAX_SEQUENCE_VALIDATE_RETRIES; retry++) {
    const result = generateSequenceTaskInner(difficulty, seed + retry);
    if (!validateSequenceTask(result)) continue;

    if (shouldMakeE) {
      const eTask = makeTaskECorrect(result, seedRng(seed * 53 + retry));
      if (eTask && validateSequenceTask(eTask)) return eTask;
    }
    return result;
  }
  // Last resort: generate with different seed and ONLY return if valid.
  // If still invalid, fall back to a simple guaranteed-correct periodic task.
  const lastResort = generateSequenceTaskInner(difficulty, seed + MAX_SEQUENCE_VALIDATE_RETRIES);
  if (validateSequenceTask(lastResort)) return lastResort;
  // Guaranteed fallback: simple periodic task that can't fail validation
  return generatePeriodicTask(difficulty === "hard" ? "medium" : difficulty, seedRng(seed + 999));
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
  if (patternType === "quadratic") {
    return generateQuadraticTask(difficulty, rand);
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
  explanation: string,
  customDistractors?: [number, number][]
): SequenceTask {
  // Collect smart distractors: pattern-specific first, then generic reasoning mistakes
  const candidates: [number, number][] = [];
  if (customDistractors) {
    candidates.push(...customDistractors);
  }
  // Generic reasoning mistakes
  const ld = distractorLastDiff(visible, correctNext);
  if (ld) candidates.push(ld);
  const sd = distractorSecondDiff(visible, correctNext);
  if (sd) candidates.push(sd);
  const lr = distractorLastRatio(visible, correctNext);
  if (lr) candidates.push(lr);
  const frs = distractorFirstRightSmart(visible, correctNext, rand);
  if (frs) candidates.push(frs);

  // Filter valid candidates: integers, in range, and not too close to correct answer
  const minDist = Math.max(
    3,
    Math.floor(Math.max(Math.abs(correctNext[0]), Math.abs(correctNext[1])) * 0.03)
  );
  const valid = candidates.filter(
    (p) =>
      Number.isInteger(p[0]) &&
      Number.isInteger(p[1]) &&
      !isNaN(p[0]) &&
      !isNaN(p[1]) &&
      Math.abs(p[0]) <= 5000 &&
      Math.abs(p[1]) <= 5000 &&
      // Reject distractors that are nearly indistinguishable from correct
      Math.abs(p[0] - correctNext[0]) + Math.abs(p[1] - correctNext[1]) >= minDist
  );

  let unique = distinctPairs(correctNext, valid);

  // Shuffle smart distractors for variety
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }

  // Fallback: proportional offsets (not simple ±1) if not enough smart distractors
  if (unique.length < 3) {
    const mag = Math.max(
      1,
      Math.floor(Math.abs(correctNext[0] - visible[visible.length - 1]) * 0.3)
    );
    const fallbacks: [number, number][] = [
      [correctNext[0] + mag, correctNext[1] - mag],
      [correctNext[0] - mag, correctNext[1] + mag],
      [correctNext[0] + mag * 2, correctNext[1]],
      [correctNext[0], correctNext[1] - mag * 2],
    ];
    unique = distinctPairs(correctNext, [...unique, ...fallbacks]);
  }

  const three = unique.slice(0, 3);
  // Pad if still needed
  while (three.length < 3) {
    const off = Math.floor(rand() * 8) + 2;
    three.push([correctNext[0] + off, correctNext[1] - off]);
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
  };
}

function generateInterleavedTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickInterleavedOps(difficulty, rand);
  // Official MedAT: always 7 visible + 2 to find = 9 total
  const totalLen = 9;
  const fullSeq = buildInterleaved(cfg.startA, cfg.startB, cfg.opA, cfg.opB, totalLen);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  // Smart distractors: swap which sub-rule applies, treat as single sequence
  const custom: [number, number][] = [];
  // Swap sub-rules: apply opB where opA should go and vice versa
  const lastEven = visible.filter((_, i) => i % 2 === 0).pop()!;
  const lastOdd = visible.filter((_, i) => i % 2 === 1).pop()!;
  const swapV1 = visLen % 2 === 0 ? applyOp(lastEven, cfg.opB) : applyOp(lastOdd, cfg.opA);
  const swapV2 = visLen % 2 === 0 ? applyOp(lastOdd, cfg.opA) : applyOp(lastEven, cfg.opB);
  if (Number.isInteger(swapV1) && Number.isInteger(swapV2) && !isNaN(swapV1) && !isNaN(swapV2)) {
    if (swapV1 !== correctNext[0] || swapV2 !== correctNext[1]) {
      custom.push([swapV1, swapV2]);
    }
  }
  // Apply same sub-rule to both positions
  const sameA1 = visLen % 2 === 0 ? applyOp(lastEven, cfg.opA) : applyOp(lastOdd, cfg.opA);
  const sameA2 = visLen % 2 === 0 ? applyOp(lastOdd, cfg.opA) : applyOp(sameA1, cfg.opA);
  if (Number.isInteger(sameA1) && Number.isInteger(sameA2) && !isNaN(sameA1) && !isNaN(sameA2)) {
    if (sameA1 !== correctNext[0] || sameA2 !== correctNext[1]) {
      custom.push([sameA1, sameA2]);
    }
  }

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `Verschachtelte Folge: Ungerade Positionen (${visible.filter((_, i) => i % 2 === 0).join(", ")}) folgen der Regel ${OP_LABELS[cfg.opA.type]}${cfg.opA.value}. ` +
      `Gerade Positionen (${visible.filter((_, i) => i % 2 === 1).join(", ")}) folgen der Regel ${OP_LABELS[cfg.opB.type]}${cfg.opB.value}.\n` +
      `N\u00e4chste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`,
    custom
  );
}

function generateGrowingDiffTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickGrowingDiff(difficulty, rand);
  const totalLen = 9; // always 7 visible + 2 to find (official MedAT format)
  const fullSeq = buildGrowingDiff(cfg.start, cfg.baseOp, cfg.initial, cfg.step, totalLen);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  // Smart distractors for growing-diff
  const custom: [number, number][] = [];
  const last = visible[visLen - 1];
  // Wrong step: step ± 1 or step ± 2
  for (const stepOff of [1, -1, 2]) {
    const wrongStep = cfg.step + stepOff;
    const val1 = cfg.initial + (visLen - 1) * wrongStep;
    const w1 = applyOp(last, { type: cfg.baseOp, value: val1 });
    const val2 = cfg.initial + visLen * wrongStep;
    const w2 = applyOp(w1, { type: cfg.baseOp, value: val2 });
    if (Number.isInteger(w1) && Number.isInteger(w2) && !isNaN(w1) && !isNaN(w2)) {
      if (w1 !== correctNext[0] || w2 !== correctNext[1]) {
        custom.push([w1, w2]);
      }
    }
  }
  // Swapped operation (+ ↔ −)
  const inverseOp: OpType =
    cfg.baseOp === "+" ? "\u2212" : cfg.baseOp === "\u2212" ? "+" : cfg.baseOp;
  if (inverseOp !== cfg.baseOp) {
    const val1 = cfg.initial + (visLen - 1) * cfg.step;
    const w1 = applyOp(last, { type: inverseOp, value: val1 });
    const val2 = cfg.initial + visLen * cfg.step;
    const w2 = applyOp(w1, { type: inverseOp, value: val2 });
    if (Number.isInteger(w1) && Number.isInteger(w2) && !isNaN(w1) && !isNaN(w2)) {
      custom.push([w1, w2]);
    }
  }

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
    `Differenzen wachsen: ${diffs.join(", ")}, \u2026\n` +
      `N\u00e4chste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`,
    custom
  );
}

function generateFibonacciTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  const cfg = pickFibonacci(difficulty, rand);
  // Official MedAT: always 7 visible + 2 to find = 9 total
  const totalLen = 9;
  const fullSeq = buildFibonacci(cfg.a, cfg.b, totalLen, cfg.offset, cfg.multiplier);
  if (!fullSeq || !isReasonableSequence(fullSeq)) {
    return generatePeriodicTask(difficulty, rand);
  }
  const visLen = totalLen - 2;
  const visible = fullSeq.slice(0, visLen);
  const correctNext: [number, number] = [fullSeq[visLen], fullSeq[visLen + 1]];

  // Smart distractors for fibonacci
  const custom: [number, number][] = [];
  const a = visible[visLen - 2],
    b = visible[visLen - 1];
  // Wrong: subtract instead of add
  const sub1 = cfg.multiplier * b - a + cfg.offset;
  const sub2 = cfg.multiplier * sub1 - b + cfg.offset;
  if (
    Number.isInteger(sub1) &&
    Number.isInteger(sub2) &&
    (sub1 !== correctNext[0] || sub2 !== correctNext[1])
  ) {
    custom.push([sub1, sub2]);
  }
  // Wrong: forget offset
  if (cfg.offset !== 0) {
    const no1 = cfg.multiplier * b + a;
    const no2 = cfg.multiplier * no1 + b;
    if (no1 !== correctNext[0] || no2 !== correctNext[1]) {
      custom.push([no1, no2]);
    }
  }
  // Wrong: forget multiplier
  if (cfg.multiplier !== 1) {
    const nm1 = b + a + cfg.offset;
    const nm2 = nm1 + b + cfg.offset;
    if (nm1 !== correctNext[0] || nm2 !== correctNext[1]) {
      custom.push([nm1, nm2]);
    }
  }
  // Wrong: swap a_{n-1} and a_{n-2} in formula
  const sw1 = cfg.multiplier * a + b + cfg.offset;
  const sw2 = cfg.multiplier * b + sw1 + cfg.offset;
  if ((sw1 !== correctNext[0] || sw2 !== correctNext[1]) && Math.abs(sw2) <= 5000) {
    custom.push([sw1, sw2]);
  }

  return buildTaskFromSequence(
    visible,
    correctNext,
    cfg.ruleLabel,
    difficulty,
    rand,
    `${cfg.ruleLabel}.\n` +
      `Beispiel: ${visible[visible.length - 2]} und ${visible[visible.length - 1]} \u2192 ` +
      `${cfg.multiplier !== 1 ? `${cfg.multiplier} \u00d7 ${visible[visible.length - 1]} + ` : `${visible[visible.length - 1]} + `}` +
      `${visible[visible.length - 2]}${cfg.offset !== 0 ? ` ${cfg.offset > 0 ? "+" : ""}${cfg.offset}` : ""} = ${correctNext[0]}.\n` +
      `N\u00e4chste Zahlen: ${correctNext[0]} und ${correctNext[1]}.`,
    custom
  );
}

function generatePeriodicTask(difficulty: DifficultyLevel, rand: () => number): SequenceTask {
  // Official MedAT: always exactly 7 visible numbers, find the next 2
  const lengthVisible = 7;

  // Try up to 5 different op-sets before falling back to a different pattern type
  for (let attempt = 0; attempt < 5; attempt++) {
    const ops = pickOps(difficulty, rand);
    const start = pickStart(ops, lengthVisible + 2, rand, difficulty);
    const fullSeq = buildSequence(start, ops, lengthVisible + 2);
    if (isReasonableSequence(fullSeq)) {
      return buildPeriodicTaskFromSeq(fullSeq, ops, lengthVisible, difficulty, rand);
    }
  }
  // All periodic attempts failed — fall back to quadratic (always produces valid integers)
  return generateQuadraticTask(difficulty, rand);
}

function buildPeriodicTaskFromSeq(
  fullSeq: number[],
  ops: { type: OpType; value: number }[],
  lengthVisible: number,
  difficulty: DifficultyLevel,
  rand: () => number
): SequenceTask {
  const visible = fullSeq.slice(0, lengthVisible);
  const correctNext: [number, number] = [fullSeq[lengthVisible], fullSeq[lengthVisible + 1]];
  const ruleLabel =
    ops.length === 1 ? `${formatOps(ops)} (durchgehend)` : `${formatOps(ops)} (wiederholend)`;
  const explanation = buildExplanation(visible, ops, correctNext);

  // Smart distractors for periodic tasks
  const distractors: [number, number][] = [];
  // Wrong phase in cycle (most realistic mistake)
  distractors.push(...distractorWrongPhase(visible, ops, correctNext));
  // Swapped operation (+↔−, ×↔÷)
  const inv = distractorInverseOp(visible, ops, correctNext, rand);
  if (inv) distractors.push(inv);
  // Repeated same operation instead of cycling
  const rep = distractorRepeatedOp(visible, ops, correctNext);
  if (rep) distractors.push(rep);
  // Assume constant last-difference
  const cld = distractorLastDiff(visible, correctNext);
  if (cld) distractors.push(cld);
  // Correct first, wrong second using previous diff
  const frs = distractorFirstRightSmart(visible, correctNext, rand);
  if (frs) distractors.push(frs);
  // Legacy fallbacks
  distractors.push(distractorFirstRight(correctNext, ops, rand));
  distractors.push(distractorOffset(visible, ops, rand));

  // Filter out near-identical distractors (too close to correct for large values)
  const minDist = Math.max(
    3,
    Math.floor(Math.max(Math.abs(correctNext[0]), Math.abs(correctNext[1])) * 0.03)
  );
  const filtered = distractors.filter(
    (p) =>
      Number.isInteger(p[0]) &&
      Number.isInteger(p[1]) &&
      !isNaN(p[0]) &&
      !isNaN(p[1]) &&
      Math.abs(p[0] - correctNext[0]) + Math.abs(p[1] - correctNext[1]) >= minDist
  );

  // Shuffle for variety, then pick 3
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  const unique = distinctPairs(correctNext, filtered);
  const three = unique.slice(0, 3);
  while (three.length < 3) {
    const off = Math.max(minDist, Math.floor(rand() * 8) + 2);
    three.push([correctNext[0] + off, correctNext[1] - off]);
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

/** Difficulty distribution: 20% leicht, 40% mittel, 40% schwer. */
function zfDifficultyForIndex(i: number): DifficultyLevel {
  // 30% easy / 40% medium / 30% hard — gives beginners enough introductory
  // tasks while keeping medium as the core training band.
  const pattern: DifficultyLevel[] = [
    "easy",
    "medium",
    "hard",
    "easy",
    "medium",
    "medium",
    "hard",
    "easy",
    "medium",
    "hard",
  ];
  return pattern[i % 10]!;
}

/** Generiert mehrere Aufgaben (gemischt nach Schwierigkeit, 30/40/30). */
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
