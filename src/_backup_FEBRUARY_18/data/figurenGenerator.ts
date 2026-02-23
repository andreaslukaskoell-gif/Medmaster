// Programmatischer Generator für "Figuren zusammensetzen"
// MedAT-authentisch: fill="#6b7280", kein stroke, 5 Optionen (a–e)
// Seeded PRNG, difficulty-based rotation, ~20% "e ist korrekt"

// ─── Types ───────────────────────────────────────────────────────────

export interface FZPiece {
  path: string;
  fill: string;
}

export interface FZOption {
  id: string;
  paths: string[];
  fill: string;
  text?: string;
}

export interface FZAufgabe {
  id: string;
  pieces: FZPiece[];
  options: FZOption[];
  correctOptionId: string;
  difficulty: "leicht" | "mittel" | "schwer";
  explanation: string;
}

// ─── Math Helpers ────────────────────────────────────────────────────

const PI = Math.PI;
const TAU = 2 * PI;
const FILL = "#6b7280";

function rd(n: number): number {
  return Math.round(n * 100) / 100;
}

type Pt = [number, number];

/** Park-Miller PRNG: s = (s * 16807) % 2147483647 */
function createRng(seed: number): () => number {
  let s = (((seed % 2147483646) + 2147483646) % 2147483646) + 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Regular polygon vertices, first vertex at top (-PI/2) */
function polygonPts(cx: number, cy: number, r: number, n: number): Pt[] {
  return Array.from({ length: n }, (_, i) => {
    const a = -PI / 2 + (TAU * i) / n;
    return [rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))] as Pt;
  });
}

function pts2path(pts: Pt[]): string {
  return "M " + pts.map((p) => `${p[0]} ${p[1]}`).join(" L ") + " Z";
}

function rotatePts(pts: Pt[], angle: number, cx: number, cy: number): Pt[] {
  const co = Math.cos(angle),
    si = Math.sin(angle);
  return pts.map(
    ([x, y]) =>
      [rd(cx + (x - cx) * co - (y - cy) * si), rd(cy + (x - cx) * si + (y - cy) * co)] as Pt
  );
}

function centroid(pts: Pt[]): Pt {
  const n = pts.length;
  return [rd(pts.reduce((s, p) => s + p[0], 0) / n), rd(pts.reduce((s, p) => s + p[1], 0) / n)];
}

function midPt(a: Pt, b: Pt): Pt {
  return [rd((a[0] + b[0]) / 2), rd((a[1] + b[1]) / 2)];
}

function circPath(cx: number, cy: number, r: number): string {
  return `M ${rd(cx + r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx - r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx + r)} ${cy} Z`;
}

/** Arc sector as polygon points (center + arc points), step count proportional to angle */
function arcToPts(cx: number, cy: number, r: number, a1: number, a2: number): Pt[] {
  const span = Math.abs(a2 - a1);
  const steps = Math.max(8, Math.round((span * 12) / PI));
  const pts: Pt[] = [[cx, cy]];
  for (let i = 0; i <= steps; i++) {
    const a = a1 + ((a2 - a1) * i) / steps;
    pts.push([rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))]);
  }
  return pts;
}

/** Pick a quantized rotation angle based on difficulty */
function quantizedAngle(diff: "leicht" | "mittel" | "schwer", rand: () => number): number {
  if (diff === "leicht") return Math.floor(rand() * 4) * (PI / 2); // 90° steps
  if (diff === "mittel") return Math.floor(rand() * 8) * (PI / 4); // 45° steps
  return Math.floor(rand() * 24) * (PI / 12); // 15° steps
}

/**
 * Rotate piece around its own centroid, then scale+center in 200×200 viewBox.
 * Each piece fills ~80% of its display area for clear visibility.
 */
function transformPiece(pts: Pt[], angle: number): Pt[] {
  const c = centroid(pts);
  let result = rotatePts(pts, angle, c[0], c[1]);

  // Bounding box
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const [x, y] of result) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  const maxDim = Math.max(maxX - minX, maxY - minY);
  const scale = maxDim > 0 ? Math.min(160 / maxDim, 2.8) : 1;
  const bcx = (minX + maxX) / 2,
    bcy = (minY + maxY) / 2;

  return result.map(([x, y]) => [rd(100 + (x - bcx) * scale), rd(100 + (y - bcy) * scale)] as Pt);
}

// ─── 13 Lösungsfiguren (Antwort-Outlines, 200×200) ──────────────────

type FK =
  | "dreieck"
  | "quadrat"
  | "raute"
  | "parallelogramm"
  | "trapez"
  | "fuenfeck"
  | "sechseck"
  | "siebeneck"
  | "achteck"
  | "viertelkreis"
  | "halbkreis"
  | "dreiviertelkreis"
  | "vollkreis";

const ALL_FK: FK[] = [
  "dreieck",
  "quadrat",
  "raute",
  "parallelogramm",
  "trapez",
  "fuenfeck",
  "sechseck",
  "siebeneck",
  "achteck",
  "viertelkreis",
  "halbkreis",
  "dreiviertelkreis",
  "vollkreis",
];

const FIG: Record<FK, string> = {
  dreieck: pts2path(polygonPts(100, 118, 85, 3)),
  quadrat: pts2path(polygonPts(100, 100, 82, 4)),
  fuenfeck: pts2path(polygonPts(100, 105, 80, 5)),
  sechseck: pts2path(polygonPts(100, 100, 80, 6)),
  siebeneck: pts2path(polygonPts(100, 100, 80, 7)),
  achteck: pts2path(polygonPts(100, 100, 78, 8)),
  raute: "M 100 20 L 175 100 L 100 180 L 25 100 Z",
  parallelogramm: "M 50 55 L 170 55 L 150 145 L 30 145 Z",
  trapez: "M 65 55 L 135 55 L 175 145 L 25 145 Z",
  viertelkreis: `M 50 155 L 50 35 A 120 120 0 0 1 170 155 Z`,
  halbkreis: `M 20 130 A 80 80 0 0 1 180 130 Z`,
  dreiviertelkreis: (() => {
    const cx = 100,
      cy = 100,
      r = 80;
    const g1 = -PI / 4,
      g2 = PI / 4;
    return `M ${cx} ${cy} L ${rd(cx + r * Math.cos(g2))} ${rd(cy + r * Math.sin(g2))} A ${r} ${r} 0 1 1 ${rd(cx + r * Math.cos(g1))} ${rd(cy + r * Math.sin(g1))} Z`;
  })(),
  vollkreis: circPath(100, 100, 80),
};

const FIGNAME: Record<FK, string> = {
  dreieck: "ein gleichseitiges Dreieck",
  quadrat: "ein Quadrat",
  raute: "eine Raute",
  parallelogramm: "ein Parallelogramm",
  trapez: "ein Trapez",
  fuenfeck: "ein regelmäßiges Fünfeck",
  sechseck: "ein regelmäßiges Sechseck",
  siebeneck: "ein regelmäßiges Siebeneck",
  achteck: "ein regelmäßiges Achteck",
  viertelkreis: "einen Viertelkreis",
  halbkreis: "einen Halbkreis",
  dreiviertelkreis: "einen Dreiviertelkreis",
  vollkreis: "einen Vollkreis",
};

/** 3 similar distractors per figure (same visual category) */
const SIMILAR: Record<FK, FK[]> = {
  dreieck: ["fuenfeck", "raute", "trapez"],
  quadrat: ["raute", "parallelogramm", "trapez"],
  raute: ["quadrat", "parallelogramm", "trapez"],
  parallelogramm: ["trapez", "quadrat", "raute"],
  trapez: ["parallelogramm", "raute", "quadrat"],
  fuenfeck: ["sechseck", "siebeneck", "achteck"],
  sechseck: ["fuenfeck", "achteck", "siebeneck"],
  siebeneck: ["sechseck", "achteck", "fuenfeck"],
  achteck: ["siebeneck", "sechseck", "fuenfeck"],
  viertelkreis: ["halbkreis", "dreiviertelkreis", "vollkreis"],
  halbkreis: ["viertelkreis", "dreiviertelkreis", "vollkreis"],
  dreiviertelkreis: ["halbkreis", "vollkreis", "viertelkreis"],
  vollkreis: ["dreiviertelkreis", "halbkreis", "viertelkreis"],
};

// ─── Piece Splitting (generated at CX=100, CY=100, R=65) ────────────

const CX = 100,
  CY = 100,
  R = 65;

/** Split polygon from centroid → vertices into numPieces sectors */
function splitPoly(verts: Pt[], numPieces: number, rand: () => number): Pt[][] {
  const sides = verts.length;
  const c = centroid(verts);

  if (numPieces <= sides) {
    // Pick numPieces vertex indices as cut points via Fisher-Yates
    const idx = Array.from({ length: sides }, (_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    const cuts = idx.slice(0, numPieces).sort((a, b) => a - b);
    return cuts.map((_, ci) => {
      const start = cuts[ci];
      const end = cuts[(ci + 1) % numPieces];
      const span = end > start ? end - start : end + sides - start;
      const p: Pt[] = [c];
      for (let j = 0; j <= span; j++) p.push(verts[(start + j) % sides]);
      return p;
    });
  }

  // More pieces than vertices: base triangles, then bisect largest
  const pcs: Pt[][] = [];
  for (let i = 0; i < sides; i++) pcs.push([c, verts[i], verts[(i + 1) % sides]]);
  while (pcs.length < numPieces) {
    let mx = 0,
      ma = 0;
    for (let i = 0; i < pcs.length; i++) {
      const [a, b, cc] = pcs[i];
      const ar = Math.abs((b[0] - a[0]) * (cc[1] - a[1]) - (cc[0] - a[0]) * (b[1] - a[1]));
      if (ar > ma) {
        ma = ar;
        mx = i;
      }
    }
    const [cc, a, b] = pcs[mx];
    const m = midPt(a, b);
    pcs.splice(mx, 1, [cc, a, m], [cc, m, b]);
  }
  return pcs;
}

/** Split circle into uneven arc sectors (polyline approx for rotation) */
function splitCirc(totalAngle: number, startAngle: number, n: number, rand: () => number): Pt[][] {
  // Slightly uneven slices for authentic look
  const raw = Array.from({ length: n }, () => 0.5 + rand());
  const sum = raw.reduce((a, b) => a + b, 0);
  const slices = raw.map((v) => (totalAngle * v) / sum);
  const pcs: Pt[][] = [];
  let a = startAngle;
  for (const sl of slices) {
    pcs.push(arcToPts(CX, CY, R, a, a + sl));
    a += sl;
  }
  return pcs;
}

/** Quad-type figure vertices at piece scale */
function quadVerts(key: "raute" | "parallelogramm" | "trapez"): Pt[] {
  if (key === "raute")
    return [
      [CX, CY - 40],
      [CX + 30, CY],
      [CX, CY + 40],
      [CX - 30, CY],
    ];
  if (key === "parallelogramm")
    return [
      [CX - 15, CY - 28],
      [CX + 35, CY - 28],
      [CX + 15, CY + 28],
      [CX - 35, CY + 28],
    ];
  return [
    [CX - 18, CY - 28],
    [CX + 18, CY - 28],
    [CX + 38, CY + 28],
    [CX - 38, CY + 28],
  ];
}

const POLY_SIDES: Partial<Record<FK, number>> = {
  dreieck: 3,
  quadrat: 4,
  fuenfeck: 5,
  sechseck: 6,
  siebeneck: 7,
  achteck: 8,
};

const CIRCLE_SPECS: Partial<Record<FK, [number, number]>> = {
  vollkreis: [TAU, -PI / 2],
  halbkreis: [PI, PI],
  dreiviertelkreis: [1.5 * PI, PI / 4],
  viertelkreis: [PI / 2, -PI / 2],
};

/** Generate piece SVG paths: split → rotate (quantized) → center+scale */
function makePieces(
  fig: FK,
  numPieces: number,
  diff: "leicht" | "mittel" | "schwer",
  seed: number
): string[] {
  const rand = createRng(seed);

  let rawPieces: Pt[][];
  if (POLY_SIDES[fig]) {
    rawPieces = splitPoly(polygonPts(CX, CY, R, POLY_SIDES[fig]!), numPieces, rand);
  } else if (fig === "raute" || fig === "parallelogramm" || fig === "trapez") {
    rawPieces = splitPoly(quadVerts(fig), numPieces, rand);
  } else {
    const [tot, st] = CIRCLE_SPECS[fig]!;
    rawPieces = splitCirc(tot, st, numPieces, rand);
  }

  return rawPieces.map((pts) => {
    const angle = quantizedAngle(diff, rand);
    return pts2path(transformPiece(pts, angle));
  });
}

// ─── Option Generation ───────────────────────────────────────────────

/** Normal task: correct figure at random position a–d + 3 similar distractors + e */
function makeOptionsNormal(correct: FK, seed: number): { options: FZOption[]; correctId: string } {
  const rand = createRng(seed);
  const distractors = [...SIMILAR[correct]];
  const pos = Math.floor(rand() * 4);
  const keys: FK[] = [...distractors];
  keys.splice(pos, 0, correct);

  const options: FZOption[] = keys.map((k, i) => ({
    id: String.fromCharCode(97 + i),
    paths: [FIG[k]],
    fill: FILL,
  }));
  options.push({ id: "e", paths: [], fill: "none", text: "Keine der Figuren ist richtig" });
  return { options, correctId: String.fromCharCode(97 + pos) };
}

/** E-correct task: 4 distractors (none is the correct figure) + e is correct */
function makeOptionsE(correct: FK, seed: number): { options: FZOption[]; correctId: string } {
  const rand = createRng(seed);
  const sim = [...SIMILAR[correct]];
  // 4th distractor from a different category
  const extras = ALL_FK.filter((k) => k !== correct && !sim.includes(k));
  sim.push(extras[Math.floor(rand() * extras.length)]);
  // Shuffle
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [sim[i], sim[j]] = [sim[j], sim[i]];
  }

  const options: FZOption[] = sim.map((k, i) => ({
    id: String.fromCharCode(97 + i),
    paths: [FIG[k]],
    fill: FILL,
  }));
  options.push({ id: "e", paths: [], fill: "none", text: "Keine der Figuren ist richtig" });
  return { options, correctId: "e" };
}

// ─── 30 Task Specifications ──────────────────────────────────────────

interface TaskSpec {
  id: string;
  fig: FK;
  pc: number;
  diff: "leicht" | "mittel" | "schwer";
  seed: number;
  eCorrect?: boolean; // ~20% of tasks
}

const TASKS: TaskSpec[] = [
  // ── Leicht: 10 tasks, 3–4 pieces, 90° rotation ──
  { id: "fz-1", fig: "vollkreis", pc: 3, diff: "leicht", seed: 1001 },
  { id: "fz-2", fig: "quadrat", pc: 3, diff: "leicht", seed: 1002 },
  { id: "fz-3", fig: "dreieck", pc: 3, diff: "leicht", seed: 1003 },
  { id: "fz-4", fig: "halbkreis", pc: 3, diff: "leicht", seed: 1004 },
  { id: "fz-5", fig: "raute", pc: 3, diff: "leicht", seed: 1005, eCorrect: true },
  { id: "fz-6", fig: "sechseck", pc: 4, diff: "leicht", seed: 1006 },
  { id: "fz-7", fig: "dreiviertelkreis", pc: 3, diff: "leicht", seed: 1007 },
  { id: "fz-8", fig: "quadrat", pc: 4, diff: "leicht", seed: 1008, eCorrect: true },
  { id: "fz-9", fig: "vollkreis", pc: 4, diff: "leicht", seed: 1009 },
  { id: "fz-10", fig: "dreieck", pc: 4, diff: "leicht", seed: 1010 },

  // ── Mittel: 12 tasks, 4–5 pieces, 45° rotation ──
  { id: "fz-11", fig: "fuenfeck", pc: 5, diff: "mittel", seed: 2001 },
  { id: "fz-12", fig: "parallelogramm", pc: 4, diff: "mittel", seed: 2002 },
  { id: "fz-13", fig: "trapez", pc: 4, diff: "mittel", seed: 2003 },
  { id: "fz-14", fig: "sechseck", pc: 5, diff: "mittel", seed: 2004 },
  { id: "fz-15", fig: "halbkreis", pc: 4, diff: "mittel", seed: 2005, eCorrect: true },
  { id: "fz-16", fig: "raute", pc: 4, diff: "mittel", seed: 2006 },
  { id: "fz-17", fig: "viertelkreis", pc: 4, diff: "mittel", seed: 2007 },
  { id: "fz-18", fig: "siebeneck", pc: 5, diff: "mittel", seed: 2008 },
  { id: "fz-19", fig: "quadrat", pc: 5, diff: "mittel", seed: 2009, eCorrect: true },
  { id: "fz-20", fig: "vollkreis", pc: 5, diff: "mittel", seed: 2010 },
  { id: "fz-21", fig: "trapez", pc: 5, diff: "mittel", seed: 2011 },
  { id: "fz-22", fig: "parallelogramm", pc: 5, diff: "mittel", seed: 2012 },

  // ── Schwer: 8 tasks, 5–7 pieces, 15° rotation ──
  { id: "fz-23", fig: "achteck", pc: 6, diff: "schwer", seed: 3001 },
  { id: "fz-24", fig: "siebeneck", pc: 7, diff: "schwer", seed: 3002 },
  { id: "fz-25", fig: "dreiviertelkreis", pc: 5, diff: "schwer", seed: 3003, eCorrect: true },
  { id: "fz-26", fig: "fuenfeck", pc: 6, diff: "schwer", seed: 3004 },
  { id: "fz-27", fig: "vollkreis", pc: 6, diff: "schwer", seed: 3005 },
  { id: "fz-28", fig: "achteck", pc: 7, diff: "schwer", seed: 3006, eCorrect: true },
  { id: "fz-29", fig: "halbkreis", pc: 5, diff: "schwer", seed: 3007 },
  { id: "fz-30", fig: "sechseck", pc: 6, diff: "schwer", seed: 3008 },
];

// ─── Build & Export ──────────────────────────────────────────────────

function buildAufgabe(spec: TaskSpec): FZAufgabe {
  const pieces = makePieces(spec.fig, spec.pc, spec.diff, spec.seed);
  const optSeed = spec.seed * 3 + 7;
  const { options, correctId } = spec.eCorrect
    ? makeOptionsE(spec.fig, optSeed)
    : makeOptionsNormal(spec.fig, optSeed);

  const explanation = spec.eCorrect
    ? `Keine der Figuren A\u2013D ist korrekt. Die ${spec.pc} Teile ergeben ${FIGNAME[spec.fig]}.`
    : `Die ${spec.pc} Teile ergeben zusammengesetzt ${FIGNAME[spec.fig]}.`;

  return {
    id: spec.id,
    pieces: pieces.map((p) => ({ path: p, fill: FILL })),
    options,
    correctOptionId: correctId,
    difficulty: spec.diff,
    explanation,
  };
}

export const figurenAufgaben: FZAufgabe[] = TASKS.map(buildAufgabe);

// ─── Strategy Guide ──────────────────────────────────────────────────

export const figurenStrategyGuide = {
  title: "Figuren zusammensetzen \u2013 Strategie",
  sections: [
    {
      heading: "Grundprinzip",
      content:
        "Dir werden dunkelgraue Puzzleteile gezeigt. Du musst erkennen, welche der 4 vorgegebenen Figuren (A\u2013D) entsteht, wenn man alle Teile richtig zusammensetzt. Option E ist immer \u201eKeine der Figuren ist richtig\u201c.\n\nWICHTIG: Teile nur drehen, nie spiegeln oder skalieren! Bei ca. 20% der Aufgaben ist E die richtige Antwort.",
    },
    {
      heading: "13 offizielle L\u00f6sungsfiguren",
      content:
        "8 Polygone: Dreieck (60\u00b0), Quadrat (90\u00b0), Parallelogramm, Trapez, F\u00fcnfeck (108\u00b0), Sechseck (120\u00b0), Siebeneck (~128\u00b0), Achteck (135\u00b0)\n4 Kreisformen: Viertelkreis, Halbkreis, Dreiviertelkreis, Vollkreis\nSonderform: Raute (4 gleiche Seiten, keine 90\u00b0)\n\nDie Distraktoren sind immer \u00e4hnliche Figuren aus derselben Kategorie!",
    },
    {
      heading: "Schritt-f\u00fcr-Schritt",
      content:
        "Schritt 1: RUNDUNGEN PR\u00dcFEN \u2014 Gekr\u00fcmmte Kanten? \u2192 Kreisform. Nur gerade Kanten? \u2192 Polygon oder Raute.\n\nSchritt 2: WINKEL ANALYSIEREN \u2014 90\u00b0 \u2192 Quadrat/Trapez, 120\u00b0 \u2192 Sechseck, 60\u00b0 \u2192 Dreieck, stumpfe Winkel \u2192 F\u00fcnf-/Sieben-/Achteck\n\nSchritt 3: GR\u00d6SSTES TEIL ALS BASIS \u2014 Rest mental anlegen, Au\u00dfenkanten pr\u00fcfen.",
    },
    {
      heading: "Typische Fallen",
      content:
        "\u2022 Raute vs. Quadrat: Raute hat KEINE rechten Winkel\n\u2022 Parallelogramm vs. Trapez: Parallelogramm hat 2 parallele Seitenpaare, Trapez nur 1\n\u2022 Sechseck vs. Achteck: Ecken genau z\u00e4hlen!\n\u2022 Dreiviertelkreis vs. Vollkreis: Fehlenden Sektor suchen\n\u2022 Manchmal passt keine Figur A\u2013D \u2192 dann ist E richtig!",
    },
    {
      heading: "Zeitmanagement",
      content:
        "80 Sekunden pro Aufgabe:\n0\u201310s: Kategorie erkennen (Kreis oder Polygon?)\n10\u201330s: Winkel/Kanten analysieren, 2\u20133 Optionen ausschlie\u00dfen\n30\u201360s: Gr\u00f6\u00dfstes Teil als Basis, Rest mental anlegen\n60\u201380s: Beste Option w\u00e4hlen oder E wenn nichts passt",
    },
  ],
};
