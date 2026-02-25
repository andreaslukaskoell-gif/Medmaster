/**
 * KFF Implikationen – Logik-Engine (einzige Wahrheitsquelle).
 *
 * Regel: ZUERST formales Mengenmodell → DANN Ableitung aller zwingenden Wahrheiten → ERST DANN Rendering.
 * Keine grafikgetriebene Logik. Ein Diagramm wird NUR gezeichnet, wenn alle Constraints erfüllt sind.
 * Sonst: Aufgabe verwerfen (throw).
 */

// ─── Kanonisches Datenmodell (A) – erzwingt exakte Mengenbeziehungen ──────────

/** Exakte formale Mengenbeziehung zwischen zwei Mengen (für Prämissen). */
export type SetRelationName = "A_in_B" | "B_in_A" | "A_overlap_B" | "A_disjoint_B";

export type Premise = { left: string; right: string; relation: SetRelationName };

/** Alias wie in Spezifikation (A). */
export type SetRelation = SetRelationName;

/** Kanonische Implikations-Aufgabe: Mengen, Prämissen, Schlussfolgerungen, ein konkretes Modell. */
export type ImplicationTaskCanonical = {
  sets: [string, string, string];
  premises: Premise[];
  conclusions: [string, string, string, string, string];
  correctIndex: number;
  model: { A: Set<string>; B: Set<string>; C: Set<string> };
  /** Original-Prämissentexte für Relationmodell (Parsing „Einige X sind keine Y“ etc.). */
  premise1: string;
  premise2: string;
};

// ─── Formales Mengenmodell (einzige Quelle der Wahrheit) ────────────────────

export type SetRel =
  | { type: "ALL"; a: string; b: string } // A ⊆ B (A vollständig in B)
  | { type: "SOME"; a: string; b: string } // A ∩ B ≠ ∅ (echte Überschneidung)
  | { type: "NONE"; a: string; b: string }; // A ∩ B = ∅ (disjunkt)

export type ImplicationRelationModel = {
  sets: string[];
  relations: SetRel[];
};

/** Constraint-System: aus SetRel abgeleitet, für Konsistenz und Layout-Prüfung. */
export type ImplicationConstraints = {
  subset: [string, string][]; // ALL
  disjoint: [string, string][]; // NONE
  overlap: [string, string][]; // SOME
};

// Legacy-Aliase für bestehende Aufrufer (SetRelationType / Objektform mit a, b)
export type SetRelationType = "subset" | "disjoint" | "overlap";
export type SetRelationShape = { type: SetRelationType; a: string; b: string };

export type EulerLayoutKey =
  | "chain"
  | "all-overlap"
  | "ab-separated"
  | "bc-separated"
  | "a-in-b-overlap-c"
  | "a-in-b-separated-c"
  | "a-in-b-in-c"
  | "all-separated";

function normPair(a: string, b: string): [string, string] {
  return a < b ? [a, b] : [b, a];
}

function pairKey(a: string, b: string): string {
  const [x, y] = normPair(a, b);
  return `${x},${y}`;
}

function setRelToRelationType(r: SetRel): SetRelationType {
  if (r.type === "ALL") return "subset";
  if (r.type === "NONE") return "disjoint";
  return "overlap";
}

/** Konvertiert Relationsmodell (SetRel) in explizite Constraints. */
export function modelToConstraints(model: ImplicationRelationModel): ImplicationConstraints {
  const subset: [string, string][] = [];
  const disjoint: [string, string][] = [];
  const overlap: [string, string][] = [];
  for (const r of model.relations) {
    const p = normPair(r.a, r.b);
    if (r.type === "ALL") subset.push(p);
    else if (r.type === "NONE") disjoint.push(p);
    else overlap.push(p);
  }
  return { subset, disjoint, overlap };
}

/** Konsistenz-Checker: Kein Paar darf gleichzeitig NONE und (ALL oder SOME) sein. */
export function constraintsConsistent(c: ImplicationConstraints): boolean {
  const dis = new Set(c.disjoint.map(([a, b]) => pairKey(a, b)));
  for (const [a, b] of c.subset) {
    if (dis.has(pairKey(a, b))) return false;
  }
  for (const [a, b] of c.overlap) {
    if (dis.has(pairKey(a, b))) return false;
  }
  return true;
}

function relationConflict(r1: SetRel, r2: SetRel): boolean {
  const p1 = pairKey(r1.a, r1.b);
  const p2 = pairKey(r2.a, r2.b);
  if (p1 !== p2) return false;
  if (r1.type === r2.type) return false;
  if (r1.type === "NONE" && (r2.type === "ALL" || r2.type === "SOME")) return true;
  if (r2.type === "NONE" && (r1.type === "ALL" || r1.type === "SOME")) return true;
  return false;
}

export function isRelationModelConsistent(model: ImplicationRelationModel): boolean {
  for (let i = 0; i < model.relations.length; i++) {
    for (let j = i + 1; j < model.relations.length; j++) {
      if (relationConflict(model.relations[i]!, model.relations[j]!)) return false;
    }
  }
  return true;
}

// ─── Parsing: Prämissen → SetRel ────────────────────────────────────────────

function parsePremiseToSetRels(p: string): SetRel[] | null {
  const s = p.trim().replace(/\.$/, "");
  const allIn = /^Alle (.+?) sind (.+?)$/i.exec(s);
  if (allIn) {
    const a = allIn[1]!.trim();
    const b = allIn[2]!.trim();
    if (a.toLowerCase() === "keine") return null;
    return [{ type: "ALL", a, b }];
  }
  const allNone = /^Alle (.+?) sind keine (.+?)$/i.exec(s);
  if (allNone) {
    const a = allNone[1]!.trim();
    const b = allNone[2]!.trim();
    return [{ type: "NONE", a, b }];
  }
  const someIn = /^Einige (.+?) sind (.+?)$/i.exec(s);
  if (someIn) {
    const a = someIn[1]!.trim();
    const b = someIn[2]!.trim();
    return [{ type: "SOME", a, b }];
  }
  const someNot = /^Einige (.+?) sind keine (.+?)$/i.exec(s);
  if (someNot) {
    const a = someNot[1]!.trim();
    const b = someNot[2]!.trim();
    return [{ type: "SOME", a, b }]; // A∩B kann nicht leer sein (einige A sind außerhalb B)
  }
  return null;
}

export function buildRelationModelFromPremises(
  premise1: string,
  premise2: string
): ImplicationRelationModel | null {
  const r1 = parsePremiseToSetRels(premise1);
  const r2 = parsePremiseToSetRels(premise2);
  if (!r1 || !r2) return null;
  const relations: SetRel[] = [...r1, ...r2];
  const sets = new Set<string>();
  relations.forEach((r) => {
    sets.add(r.a);
    sets.add(r.b);
  });
  const model: ImplicationRelationModel = {
    sets: Array.from(sets),
    relations,
  };
  if (!isRelationModelConsistent(model)) return null;
  return model;
}

// ─── Kanonisches Modell: Premise[] ↔ SetRel; konkretes Modell ─────────────────

/** SetRel zu Premise (linke/rechte Menge + Relation). */
function setRelToPremise(r: SetRel): Premise {
  if (r.type === "ALL") return { left: r.a, right: r.b, relation: "A_in_B" };
  if (r.type === "NONE") return { left: r.a, right: r.b, relation: "A_disjoint_B" };
  return { left: r.a, right: r.b, relation: "A_overlap_B" };
}

/** Prämissen aus zwei Text-Prämissen; sets = [A,B,C] in fester Reihenfolge. */
export function premisesFromText(
  premise1: string,
  premise2: string
): { sets: [string, string, string]; premises: Premise[] } | null {
  const model = buildRelationModelFromPremises(premise1, premise2);
  if (!model || model.sets.length < 3) return null;
  const sets: [string, string, string] = [model.sets[0]!, model.sets[1]!, model.sets[2]!];
  const premises: Premise[] = model.relations.map(setRelToPremise);
  return { sets, premises };
}

/** 8 Venn-Regionen: Region r gehört zu Set mit Index i gdw. (r & (1<<i)) !== 0. */
const REGIONS_FOR_SET = [
  [1, 3, 5, 7], // A (index 0)
  [2, 3, 6, 7], // B (index 1)
  [4, 5, 6, 7], // C (index 2)
] as const;

function regionsInLeftNotRight(leftIdx: number, rightIdx: number): number[] {
  const out: number[] = [];
  for (let r = 0; r < 8; r++) {
    if (r & (1 << leftIdx) && !(r & (1 << rightIdx))) out.push(r);
  }
  return out;
}

function regionsInBoth(leftIdx: number, rightIdx: number): number[] {
  const out: number[] = [];
  for (let r = 0; r < 8; r++) {
    if (r & (1 << leftIdx) && r & (1 << rightIdx)) out.push(r);
  }
  return out;
}

/**
 * Baut ein konkretes Mengenmodell (A, B, C als Set<string>), das alle Prämissen erfüllt.
 * Gibt null zurück, wenn die Prämissen inkonsistent sind.
 */
export function buildConcreteModel(
  sets: [string, string, string],
  premises: Premise[]
): { A: Set<string>; B: Set<string>; C: Set<string> } | null {
  const nameToIdx = new Map<string, number>();
  sets.forEach((s, i) => nameToIdx.set(s, i));

  const mustBeEmpty = new Set<number>();
  const atLeastOneNonEmpty: number[][] = [];

  for (const p of premises) {
    const li = nameToIdx.get(p.left);
    const ri = nameToIdx.get(p.right);
    if (li === undefined || ri === undefined) return null;
    switch (p.relation) {
      case "A_in_B":
        for (const r of regionsInLeftNotRight(li, ri)) mustBeEmpty.add(r);
        break;
      case "B_in_A":
        for (const r of regionsInLeftNotRight(ri, li)) mustBeEmpty.add(r);
        break;
      case "A_disjoint_B":
        for (const r of regionsInBoth(li, ri)) mustBeEmpty.add(r);
        break;
      case "A_overlap_B":
        atLeastOneNonEmpty.push(regionsInBoth(li, ri));
        break;
    }
  }

  const nonEmpty: boolean[] = new Array(8).fill(false);
  for (const group of atLeastOneNonEmpty) {
    const allowed = group.filter((r) => !mustBeEmpty.has(r));
    if (allowed.length === 0) return null;
    nonEmpty[allowed[0]!] = true;
  }
  for (const r of mustBeEmpty) {
    if (nonEmpty[r]!) return null;
  }

  const el = (r: number) => `e${r}`;
  const A = new Set<string>();
  const B = new Set<string>();
  const C = new Set<string>();
  const setA = new Set<number>(REGIONS_FOR_SET[0] as readonly number[]);
  const setB = new Set<number>(REGIONS_FOR_SET[1] as readonly number[]);
  const setC = new Set<number>(REGIONS_FOR_SET[2] as readonly number[]);
  for (let r = 0; r < 8; r++) {
    if (!nonEmpty[r]) continue;
    const e = el(r);
    if (setA.has(r)) A.add(e);
    if (setB.has(r)) B.add(e);
    if (setC.has(r)) C.add(e);
  }
  return { A, B, C };
}

/**
 * Validiert eine kanonische Implikations-Aufgabe (D):
 * 1) Prämissen konsistent?
 * 2) Genau 1 Schlussfolgerung ist in ALLEN Modellen wahr (zwingend)?
 * 3) Alle falschen Antworten haben mindestens 1 Gegenmodell (sind nicht zwingend)?
 * Bei Fehlschlag: Aufgabe verwerfen (return false).
 */
export function validateImplicationTaskCanonical(task: ImplicationTaskCanonical): boolean {
  const { sets, premises, conclusions, correctIndex, premise1, premise2 } = task;
  if (correctIndex < 0 || correctIndex > 4) return false;
  if (conclusions.length !== 5) return false;

  const relationModel = buildRelationModelFromPremises(premise1, premise2);
  if (!relationModel || !isRelationModelConsistent(relationModel)) return false;
  const constraints = modelToConstraints(relationModel);
  if (!constraintsConsistent(constraints)) return false;

  const concrete = buildConcreteModel(sets, premises);
  if (!concrete) return false;

  const options: [string, string, string, string, string] = [
    conclusions[0]!,
    conclusions[1]!,
    conclusions[2]!,
    conclusions[3]!,
    conclusions[4]!,
  ];

  let entailedCount = 0;
  let correctIsEntailed = false;
  for (let i = 0; i < 5; i++) {
    const entailed = isCorrectOptionEntailed(relationModel, i, options);
    if (i === correctIndex) correctIsEntailed = entailed;
    if (entailed) entailedCount++;
  }
  if (entailedCount !== 1 || !correctIsEntailed) return false;

  for (let i = 0; i < 5; i++) {
    if (i === correctIndex) continue;
    if (isCorrectOptionEntailed(relationModel, i, options)) return false;
  }
  return true;
}

function getRelation(
  model: ImplicationRelationModel,
  a: string,
  b: string
): SetRelationType | null {
  const key = pairKey(a, b);
  for (const r of model.relations) {
    if (pairKey(r.a, r.b) === key) return setRelToRelationType(r);
  }
  return null;
}

// ─── Layout-Topologie: welche Relation pro Layout zwischen Indizes gilt ───────

type IndexRelation = { i: number; j: number; type: SetRelationType };

function getLayoutImpliedRelations(layout: EulerLayoutKey): IndexRelation[] {
  switch (layout) {
    case "a-in-b-in-c":
      return [
        { i: 0, j: 1, type: "subset" },
        { i: 1, j: 2, type: "subset" },
        { i: 0, j: 2, type: "subset" },
      ];
    case "a-in-b-separated-c":
      return [
        { i: 0, j: 1, type: "subset" },
        { i: 1, j: 2, type: "disjoint" },
        { i: 0, j: 2, type: "disjoint" },
      ];
    case "a-in-b-overlap-c":
      return [
        { i: 0, j: 1, type: "subset" },
        { i: 1, j: 2, type: "overlap" },
        { i: 0, j: 2, type: "overlap" },
      ];
    case "bc-separated":
      return [
        { i: 0, j: 1, type: "overlap" },
        { i: 1, j: 2, type: "disjoint" },
        { i: 0, j: 2, type: "disjoint" },
      ];
    case "all-overlap":
      return [
        { i: 0, j: 1, type: "overlap" },
        { i: 1, j: 2, type: "overlap" },
        { i: 0, j: 2, type: "overlap" },
      ];
    case "ab-separated":
      return [{ i: 0, j: 1, type: "disjoint" }];
    case "all-separated":
      return [
        { i: 0, j: 1, type: "disjoint" },
        { i: 1, j: 2, type: "disjoint" },
        { i: 0, j: 2, type: "disjoint" },
      ];
    case "chain":
      return [
        { i: 0, j: 1, type: "overlap" },
        { i: 1, j: 2, type: "overlap" },
      ];
    default:
      return [];
  }
}

/** Prüft: Erfüllt das Layout mit diesen Labels ALLE Constraints? (Nur so darf gezeichnet werden.) */
export function layoutSatisfiesConstraints(
  layout: EulerLayoutKey,
  labels: [string, string, string],
  constraints: ImplicationConstraints
): boolean {
  const implied = getLayoutImpliedRelations(layout);
  const impliedMap = new Map<string, SetRelationType>();
  for (const { i, j, type } of implied) {
    const key = pairKey(labels[i]!, labels[j]!);
    const existing = impliedMap.get(key);
    if (existing && existing !== type) return false;
    impliedMap.set(key, type);
  }
  for (const [a, b] of constraints.subset) {
    const key = pairKey(a, b);
    if (impliedMap.get(key) !== "subset") return false;
  }
  for (const [a, b] of constraints.disjoint) {
    const key = pairKey(a, b);
    if (impliedMap.get(key) !== "disjoint") return false;
  }
  for (const [a, b] of constraints.overlap) {
    const key = pairKey(a, b);
    const impl = impliedMap.get(key);
    if (impl !== "overlap" && impl !== "subset") return false;
  }
  return true;
}

const LAYOUT_ORDER: EulerLayoutKey[] = [
  "a-in-b-in-c",
  "a-in-b-separated-c",
  "a-in-b-overlap-c",
  "bc-separated",
  "all-overlap",
  "ab-separated",
  "all-separated",
  "chain",
];

function permute3<T>(arr: [T, T, T]): [T, T, T][] {
  const [a, b, c] = arr;
  return [
    [a, b, c],
    [a, c, b],
    [b, a, c],
    [b, c, a],
    [c, a, b],
    [c, b, a],
  ] as [T, T, T][];
}

/**
 * Leitet das Euler-Layout ausschließlich aus dem Modell ab.
 * Regel: Ein Diagramm darf NUR gezeichnet werden, wenn ALLE Constraints gleichzeitig erfüllt sind.
 * Es werden alle Layouts und alle Label-Permutationen durchprobiert.
 * Wenn kein gültiges Layout existiert → throw (Aufgabe verwerfen). Kein Fallback.
 */
export function deriveEulerLayoutFromModel(model: ImplicationRelationModel): {
  labels: [string, string, string];
  layout: EulerLayoutKey;
} {
  const constraints = modelToConstraints(model);
  if (!constraintsConsistent(constraints)) {
    throw new Error(
      "[KFF Implikationen] Inkonsistente Constraints – Invalid implication task – rejected."
    );
  }

  const sets = model.sets;
  if (sets.length < 3) {
    throw new Error(
      `[KFF Implikationen] Nur 2 Mengen (${sets[0] ?? "A"}, ${sets[1] ?? "B"}) – kein 3-Kreis-Layout definiert. Invalid implication task – rejected.`
    );
  }

  const [A, B, C] = [sets[0]!, sets[1]!, sets[2]!];
  const labelPerms = permute3([A, B, C]);

  for (const layout of LAYOUT_ORDER) {
    for (const labels of labelPerms) {
      if (layoutSatisfiesConstraints(layout, labels, constraints)) {
        return { labels, layout };
      }
    }
  }

  throw new Error(
    "[KFF Implikationen] Kein Layout erfüllt alle Constraints. Invalid implication task – rejected."
  );
}

// ─── Wahrheits-Checker für Antwortoptionen (zwingend = in allen zulässigen Modellen wahr) ───

export type ConclusionType = "all" | "some" | "some-not" | "none";

/**
 * Prüft, ob die Schlussfolgerung aus den Constraints zwingend folgt.
 * Eine Antwort ist nur richtig, wenn sie in allen zulässigen Modellen wahr ist.
 * „Möglich“ reicht nicht.
 */
export function isConclusionEntailed(
  model: ImplicationRelationModel,
  conclusionType: ConclusionType,
  subject: string,
  object: string
): boolean {
  const sub = subject.trim();
  const obj = object.trim();
  const rel = (a: string, b: string) => getRelation(model, a, b);
  const subset = (a: string, b: string) => rel(a, b) === "subset";
  const disjoint = (a: string, b: string) => rel(a, b) === "disjoint";
  const overlap = (a: string, b: string) => {
    const r = rel(a, b);
    return r === "overlap" || r === "subset";
  };

  if (conclusionType === "none") return false;

  if (conclusionType === "all") {
    if (sub === obj) return true;
    if (subset(sub, obj)) return true;
    for (const set of model.sets) {
      if (subset(sub, set) && subset(set, obj)) return true;
    }
    return false;
  }

  if (conclusionType === "some") {
    if (overlap(sub, obj)) return true;
    for (const set of model.sets) {
      if (overlap(sub, set) && subset(set, obj)) return true;
      if (subset(sub, set) && overlap(set, obj)) return true;
    }
    return false;
  }

  if (conclusionType === "some-not") {
    if (disjoint(sub, obj)) return true;
    if (subset(sub, obj)) return false;
    if (overlap(sub, obj)) return true;
    for (const set of model.sets) {
      if (set === sub || set === obj) continue;
      if (overlap(sub, set) && disjoint(set, obj)) return true;
    }
    return false;
  }

  return false;
}

export function parseConclusion(
  option: string
): { type: ConclusionType; subject: string; object: string } | null {
  const s = option.trim().replace(/\.$/, "");
  if (/^Keine der Schlussfolgerungen/i.test(s)) {
    return { type: "none", subject: "", object: "" };
  }
  const allIn = /^Alle (.+?) sind (.+?)$/i.exec(s);
  if (allIn) {
    return {
      type: "all",
      subject: allIn[1]!.trim(),
      object: allIn[2]!.trim(),
    };
  }
  const someIn = /^Einige (.+?) sind (.+?)$/i.exec(s);
  if (someIn) {
    return {
      type: "some",
      subject: someIn[1]!.trim(),
      object: someIn[2]!.trim(),
    };
  }
  const someNot = /^Einige (.+?) sind keine (.+?)$/i.exec(s);
  if (someNot) {
    return {
      type: "some-not",
      subject: someNot[1]!.trim(),
      object: someNot[2]!.trim(),
    };
  }
  return null;
}

/**
 * Prüft, ob die als richtig markierte Option zwingend aus dem Modell folgt.
 * Für E („Keine der Schlussfolgerungen“): keine der Optionen A–D darf zwingend sein.
 */
export function isCorrectOptionEntailed(
  model: ImplicationRelationModel,
  correctOptionIndex: number,
  options: [string, string, string, string, string]
): boolean {
  if (correctOptionIndex < 0 || correctOptionIndex > 4) return false;
  const opt = options[correctOptionIndex]!;
  const parsed = parseConclusion(opt);
  if (!parsed) return false;
  if (parsed.type === "none") {
    for (let i = 0; i < 4; i++) {
      const p = parseConclusion(options[i]!);
      if (p && p.type !== "none" && isConclusionEntailed(model, p.type, p.subject, p.object))
        return false;
    }
    return true;
  }
  return isConclusionEntailed(model, parsed.type, parsed.subject, parsed.object);
}

// ─── Debug-Zwang: Dev-Assert nach Generierung/Validierung ────────────────────

/**
 * Prüft nach Generierung/Belegung:
 * 1) Diagramm erfüllt ALLE Constraints?
 * 2) Richtige Antwort ist logisch zwingend?
 * Wenn nein → throw Error("Invalid implication task – rejected")
 */
export function assertImplikationTaskValid(
  premise1: string,
  premise2: string,
  options: [string, string, string, string, string],
  correctAnswer: number
): void {
  const model = buildRelationModelFromPremises(premise1, premise2);
  if (!model) {
    throw new Error("Invalid implication task – rejected: no relation model from premises.");
  }
  if (!isRelationModelConsistent(model)) {
    throw new Error("Invalid implication task – rejected: relation model inconsistent.");
  }
  const constraints = modelToConstraints(model);
  if (!constraintsConsistent(constraints)) {
    throw new Error("Invalid implication task – rejected: constraints inconsistent.");
  }
  let layout: EulerLayoutKey;
  let labels: [string, string, string];
  try {
    const result = deriveEulerLayoutFromModel(model);
    layout = result.layout;
    labels = result.labels;
  } catch {
    throw new Error("Invalid implication task – rejected: no layout satisfies all constraints.");
  }
  if (!layoutSatisfiesConstraints(layout, labels, constraints)) {
    throw new Error(
      "Invalid implication task – rejected: diagram does not satisfy all constraints."
    );
  }
  if (!isCorrectOptionEntailed(model, correctAnswer, options)) {
    throw new Error(
      "Invalid implication task – rejected: correct answer is not logically necessary."
    );
  }
}

/** Alias für Aufrufer, die den alten Namen erwarten. */
export const assertImplikationLogic = assertImplikationTaskValid;
