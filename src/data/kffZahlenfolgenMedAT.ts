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

export const OFFICIAL_ZF_EXAMPLES: SequenceTask[] = [
  {
    id: "official-zf-1",
    sequence: [11, 15, 30, 26, 30, 60, 56, "?", "?"],
    correctNext: [60, 120],
    options: [
      { key: "A", value: [112, 116] },
      { key: "B", value: [60, 120] },
      { key: "C", value: [52, 104] },
      { key: "D", value: [112, 108] },
      { key: "E", text: "Keine der Antwortmöglichkeiten ist richtig" },
    ],
    correctOptionId: "B",
    rule: "+4, ×2, −4 (wiederholend)",
    explanation:
      "Zur ersten Zahl der Zahlenfolge wird 4 addiert, die resultierende Zahl wird mit 2 multipliziert, anschließend wird von der nächsten resultierenden Zahl wieder 4 subtrahiert, dieser Rechenvorgang wiederholt sich (+4; ×2; −4; +4; ×2; −4; +4; ×2). Das Ergebnis lautet daher folgerichtig B.",
    difficulty: "medium",
    source: "IB_ZF_26.pdf – Beispielaufgabe 1",
  },
  {
    id: "official-zf-2",
    sequence: [2, 4, 7, 5, 10, 13, 11, "?", "?"],
    correctNext: [22, 25],
    options: [
      { key: "A", value: [14, 12] },
      { key: "B", value: [9, 18] },
      { key: "C", value: [22, 20] },
      { key: "D", value: [22, 25] },
      { key: "E", text: "Keine der Antwortmöglichkeiten ist richtig" },
    ],
    correctOptionId: "D",
    rule: "×2, +3, −2 (wiederholend)",
    explanation:
      "Die erste Zahl der Zahlenfolge wird mit 2 multipliziert, zur resultierenden Zahl wird 3 addiert und von der nächsten resultierenden Zahl wieder 2 subtrahiert, dieser Rechenvorgang wiederholt sich (×2; +3; −2; ×2; +3; −2; ×2; +3). Das Ergebnis lautet daher folgerichtig D.",
    difficulty: "medium",
    source: "IB_ZF_26.pdf – Beispielaufgabe 2",
  },
];

/**
 * Dev-Check: Prüft, dass OFFICIAL_ZF_EXAMPLES vollständig und konsistent sind.
 * Aufruf beim Modul-Load (nur in Development). Bei Fehlern: Console Error.
 */
export function validateOfficialZahlenfolgenExamples(): boolean {
  const list = OFFICIAL_ZF_EXAMPLES;
  if (list.length === 0) {
    if (import.meta.env?.DEV) {
      console.error(
        "OFFICIAL_ZF_EXAMPLES fehlen oder sind unvollständig – PDF nicht korrekt übernommen. Bitte IB_ZF_26.pdf öffnen und Beispielaufgaben 1:1 eintragen."
      );
    }
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    const task = list[i];
    const numbers = task.sequence.filter((x): x is number => x !== "?");
    const gaps = task.sequence.filter((x) => x === "?");
    if (numbers.length < 6 || gaps.length !== 2) {
      if (import.meta.env?.DEV) {
        console.error(
          `OFFICIAL_ZF_EXAMPLES fehlen oder sind unvollständig – PDF nicht korrekt übernommen. Aufgabe ${i + 1}: mindestens 6 Zahlen und genau 2 "?" erforderlich.`
        );
      }
      return false;
    }
    if (!task.options || task.options.length !== 5) {
      if (import.meta.env?.DEV) {
        console.error(
          `OFFICIAL_ZF_EXAMPLES fehlen oder sind unvollständig – PDF nicht korrekt übernommen. Aufgabe ${i + 1}: genau 5 Optionen (A–E) erforderlich.`
        );
      }
      return false;
    }
    const correctKeys = task.options.filter((o) => o.key === task.correctOptionId);
    if (correctKeys.length !== 1) {
      if (import.meta.env?.DEV) {
        console.error(
          `OFFICIAL_ZF_EXAMPLES fehlen oder sind unvollständig – PDF nicht korrekt übernommen. Aufgabe ${i + 1}: genau 1 korrekte Lösung (correctOptionId) erforderlich.`
        );
      }
      return false;
    }
  }
  return true;
}

if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
  validateOfficialZahlenfolgenExamples();
}

const OP_LABELS: Record<OpType, string> = { "+": "+", "−": "−", "×": "×", "÷": "÷" };

function seedRng(seed: number): () => number {
  let s = Math.floor(seed % 2147483647) || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Einzelne Operation (nur ganze Zahlen). */
function applyOp(n: number, op: { type: OpType; value: number }): number {
  switch (op.type) {
    case "+":
      return n + op.value;
    case "−":
      return n - op.value;
    case "×":
      return n * op.value;
    case "÷":
      if (op.value === 0 || n % op.value !== 0) return Math.round(n / op.value);
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

/** Leicht: 1–2 Operatoren, kleine Zahlen (z. B. +k oder +a, ×b abwechselnd). */
function pickOpsEasy(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
    [{ type: "+", value: 3 }],
    [{ type: "+", value: 5 }],
    [{ type: "−", value: 2 }],
    [{ type: "×", value: 2 }],
    [
      { type: "+", value: 4 },
      { type: "×", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "−", value: 1 },
    ],
  ];
  return choices[Math.floor(rand() * choices.length)];
}

/** Mittel: 3-Operator-Zyklen (z. B. +4, ×2, −4). */
function pickOpsMedium(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
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
  ];
  return choices[Math.floor(rand() * choices.length)];
}

/** Schwer: längere Zyklen oder größere Werte. */
function pickOpsHard(rand: () => number): { type: OpType; value: number }[] {
  const choices: { type: OpType; value: number }[][] = [
    [
      { type: "+", value: 4 },
      { type: "×", value: 2 },
      { type: "−", value: 4 },
      { type: "+", value: 2 },
    ],
    [
      { type: "×", value: 2 },
      { type: "+", value: 5 },
      { type: "−", value: 3 },
      { type: "×", value: 2 },
    ],
    [
      { type: "+", value: 6 },
      { type: "×", value: 2 },
      { type: "−", value: 8 },
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
  rand: () => number
): number {
  let start: number;
  if (ops.some((o) => o.type === "÷")) {
    start = [2, 3, 4, 5, 6, 8, 10, 12][Math.floor(rand() * 8)];
  } else {
    start = Math.floor(rand() * 20) + 5;
  }
  const seq = buildSequence(start, ops, length);
  const allInt = seq.every((n) => Number.isInteger(n));
  return allInt ? start : pickStart(ops, length, rand);
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

/** Generiert eine MedAT-Zahlenfolgen-Aufgabe. Validiert vor Return; bei Fehlschlag Retry mit anderem Seed. */
const MAX_SEQUENCE_VALIDATE_RETRIES = 5;

export function generateSequenceTask(difficulty: DifficultyLevel, seed: number): SequenceTask {
  for (let retry = 0; retry < MAX_SEQUENCE_VALIDATE_RETRIES; retry++) {
    const result = generateSequenceTaskInner(difficulty, seed + retry);
    if (validateSequenceTask(result)) return result;
  }
  return generateSequenceTaskInner(difficulty, seed + MAX_SEQUENCE_VALIDATE_RETRIES);
}

function generateSequenceTaskInner(difficulty: DifficultyLevel, seed: number): SequenceTask {
  const rand = seedRng(seed);
  const ops = pickOps(difficulty, rand);
  const lengthVisible =
    difficulty === "easy" ? 6 + Math.floor(rand() * 2) : 7 + Math.floor(rand() * 2);
  const start = pickStart(ops, lengthVisible + 2, rand);
  const fullSeq = buildSequence(start, ops, lengthVisible + 2);
  const visible = fullSeq.slice(0, lengthVisible);
  const correctNext: [number, number] = [fullSeq[lengthVisible], fullSeq[lengthVisible + 1]];

  let distractors: [number, number][] = [];
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
  const optionsWithCorrect: { key: "A" | "B" | "C" | "D"; value: [number, number] }[] = [];
  let idx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctPos) {
      optionsWithCorrect.push({ key: optionKeys[i], value: correctNext });
    } else {
      optionsWithCorrect.push({ key: optionKeys[i], value: three[idx++] ?? correctNext });
    }
  }
  const options: SequenceTask["options"] = [
    ...optionsWithCorrect.map((o) => ({ key: o.key, value: o.value })),
    { key: "E", text: "Keine der Antwortmöglichkeiten ist richtig" },
  ];

  const ruleLabel =
    ops.length === 1 ? `${formatOps(ops)} (durchgehend)` : `${formatOps(ops)} (wiederholend)`;

  const sequenceDisplay: (number | "?")[] = [...visible, "?", "?"];
  const explanation = buildExplanation(visible, ops, correctNext);

  return {
    id: `zf-medat-${seed}-${Date.now()}`,
    sequence: sequenceDisplay,
    correctNext,
    options,
    correctOptionId: correctKey,
    rule: ruleLabel,
    explanation,
    difficulty,
    ops,
  };
}

/** Generiert mehrere Aufgaben (gemischt nach Schwierigkeit). */
export function generateSequenceTaskSet(count: number, baseSeed: number): SequenceTask[] {
  const out: SequenceTask[] = [];
  const levels: DifficultyLevel[] = ["easy", "medium", "hard"];
  for (let i = 0; i < count; i++) {
    const diff = levels[i % 3];
    out.push(generateSequenceTask(diff, baseSeed + i * 7919));
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
