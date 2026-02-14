// Programmatischer Generator für "Figuren zusammensetzen"
// MedAT-authentisch: dunkelgrau gefüllt (#6b7280), 5 Optionen (a-e)

// ─── Types ───────────────────────────────────────────────────────────

export interface FZPiece { path: string; fill: string }

export interface FZOption {
  id: string;
  paths: string[];
  fill: string;
  text?: string; // option e: "Keine der Figuren ist richtig"
}

export interface FZAufgabe {
  id: string;
  pieces: FZPiece[];
  options: FZOption[];
  correctOptionId: string;
  difficulty: "leicht" | "mittel" | "schwer";
  explanation: string;
}

// ─── Constants & Math ────────────────────────────────────────────────

const PI = Math.PI;
const TAU = 2 * PI;
const FILL = "#6b7280";

function rd(n: number): number { return Math.round(n * 100) / 100; }

type Pt = [number, number];

/** Park-Miller LCG: (seed * 16807) % 2147483647 */
function createRng(seed: number): () => number {
  let s = ((seed % 2147483646) + 2147483646) % 2147483646 + 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function poly(cx: number, cy: number, r: number, n: number): Pt[] {
  return Array.from({ length: n }, (_, i) => {
    const a = -PI / 2 + (TAU * i) / n;
    return [rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))] as Pt;
  });
}

function pts2d(pts: Pt[]): string {
  return "M " + pts.map(p => `${p[0]} ${p[1]}`).join(" L ") + " Z";
}

function rotPts(pts: Pt[], angle: number, cx: number, cy: number): Pt[] {
  const c = Math.cos(angle), s = Math.sin(angle);
  return pts.map(([x, y]) => [
    rd(cx + (x - cx) * c - (y - cy) * s),
    rd(cy + (x - cx) * s + (y - cy) * c),
  ] as Pt);
}

function centroid(pts: Pt[]): Pt {
  const n = pts.length;
  return [
    rd(pts.reduce((s, p) => s + p[0], 0) / n),
    rd(pts.reduce((s, p) => s + p[1], 0) / n),
  ];
}

function midPt(a: Pt, b: Pt): Pt {
  return [rd((a[0] + b[0]) / 2), rd((a[1] + b[1]) / 2)];
}

function circPath(cx: number, cy: number, r: number): string {
  return `M ${rd(cx + r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx - r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx + r)} ${cy} Z`;
}

/** Approximate arc sector as polygon points (center + arc points) */
function arcToPts(cx: number, cy: number, r: number, a1: number, a2: number): Pt[] {
  const steps = 16;
  const pts: Pt[] = [[cx, cy]];
  for (let i = 0; i <= steps; i++) {
    const a = a1 + (a2 - a1) * i / steps;
    pts.push([rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))]);
  }
  return pts;
}

// ─── 13 Lösungsfiguren (Antwort-Outlines, 200×200) ──────────────────

type FK =
  | "dreieck" | "quadrat" | "raute" | "parallelogramm" | "trapez"
  | "fuenfeck" | "sechseck" | "siebeneck" | "achteck"
  | "viertelkreis" | "halbkreis" | "dreiviertelkreis" | "vollkreis";

const FIG: Record<FK, string> = {
  dreieck: pts2d(poly(100, 118, 85, 3)),
  quadrat: pts2d(poly(100, 100, 82, 4)),
  fuenfeck: pts2d(poly(100, 105, 80, 5)),
  sechseck: pts2d(poly(100, 100, 80, 6)),
  siebeneck: pts2d(poly(100, 100, 80, 7)),
  achteck: pts2d(poly(100, 100, 78, 8)),
  raute: "M 100 20 L 175 100 L 100 180 L 25 100 Z",
  parallelogramm: "M 50 55 L 170 55 L 150 145 L 30 145 Z",
  trapez: "M 65 55 L 135 55 L 175 145 L 25 145 Z",
  viertelkreis: `M 50 155 L 50 ${rd(155 - 120)} A 120 120 0 0 1 ${rd(50 + 120)} 155 Z`,
  halbkreis: `M ${rd(100 - 80)} 130 A 80 80 0 0 1 ${rd(100 + 80)} 130 Z`,
  dreiviertelkreis: (() => {
    const cx = 100, cy = 100, r = 80, g1 = -PI / 4, g2 = PI / 4;
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

/** Similar figures for distractors (always 3 per figure) */
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

// ─── Piece Generation (200×200 viewBox) ──────────────────────────────

const CX = 100, CY = 100, R = 65;

/** Split any polygon from centroid to vertices into pieces */
function splitPoly(verts: Pt[], numPieces: number, rand: () => number): Pt[][] {
  const sides = verts.length;
  const c = centroid(verts);

  if (numPieces <= sides) {
    // Pick numPieces vertex indices as cut points
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

  // More pieces than vertices: start with base triangles, split largest
  const pcs: Pt[][] = [];
  for (let i = 0; i < sides; i++) pcs.push([c, verts[i], verts[(i + 1) % sides]]);
  while (pcs.length < numPieces) {
    let mx = 0, ma = 0;
    for (let i = 0; i < pcs.length; i++) {
      const [a, b, cc] = pcs[i];
      const ar = Math.abs((b[0] - a[0]) * (cc[1] - a[1]) - (cc[0] - a[0]) * (b[1] - a[1]));
      if (ar > ma) { ma = ar; mx = i; }
    }
    const [cc, a, b] = pcs[mx];
    const m = midPt(a, b);
    pcs.splice(mx, 1, [cc, a, m], [cc, m, b]);
  }
  return pcs;
}

/** Split circle into uneven arc sectors (polyline approximation) */
function splitCirc(totalAngle: number, startAngle: number, n: number, rand: () => number): Pt[][] {
  const raw = Array.from({ length: n }, () => 0.5 + rand());
  const sum = raw.reduce((a, b) => a + b, 0);
  const slices = raw.map(v => totalAngle * v / sum);
  const pcs: Pt[][] = [];
  let a = startAngle;
  for (const sl of slices) {
    pcs.push(arcToPts(CX, CY, R, a, a + sl));
    a += sl;
  }
  return pcs;
}

/** Quad vertices at piece scale */
function quadV(key: "raute" | "parallelogramm" | "trapez"): Pt[] {
  if (key === "raute") return [[CX, CY - 40], [CX + 30, CY], [CX, CY + 40], [CX - 30, CY]];
  if (key === "parallelogramm") return [[CX - 15, CY - 28], [CX + 35, CY - 28], [CX + 15, CY + 28], [CX - 35, CY + 28]];
  return [[CX - 18, CY - 28], [CX + 18, CY - 28], [CX + 38, CY + 28], [CX - 38, CY + 28]]; // trapez
}

/** Generate piece SVG paths for a figure type */
function makePieces(fig: FK, numPieces: number, seed: number): string[] {
  const rand = createRng(seed);
  const polySides: Partial<Record<FK, number>> = {
    dreieck: 3, quadrat: 4, fuenfeck: 5, sechseck: 6, siebeneck: 7, achteck: 8,
  };

  let pieces: Pt[][];

  if (polySides[fig]) {
    pieces = splitPoly(poly(CX, CY, R, polySides[fig]!), numPieces, rand);
  } else if (fig === "raute" || fig === "parallelogramm" || fig === "trapez") {
    pieces = splitPoly(quadV(fig), numPieces, rand);
  } else {
    // Circle types
    const specs: Record<string, [number, number]> = {
      vollkreis: [TAU, -PI / 2],
      halbkreis: [PI, PI],
      dreiviertelkreis: [1.5 * PI, PI / 4],
      viertelkreis: [PI / 2, -PI / 2],
    };
    const [tot, st] = specs[fig];
    pieces = splitCirc(tot, st, numPieces, rand);
  }

  // Rotate each piece by random angle
  return pieces.map(pts => {
    const angle = rand() * TAU;
    return pts2d(rotPts(pts, angle, CX, CY));
  });
}

// ─── Option Generation ───────────────────────────────────────────────

function makeOptions(correct: FK, seed: number): { options: FZOption[]; correctId: string } {
  const rand = createRng(seed);
  const distractors = SIMILAR[correct];
  const pos = Math.floor(rand() * 4); // 0-3 for a-d
  const keys: FK[] = [...distractors];
  keys.splice(pos, 0, correct);

  const options: FZOption[] = keys.map((k, i) => ({
    id: String.fromCharCode(97 + i), // a-d
    paths: [FIG[k]],
    fill: FILL,
  }));
  options.push({ id: "e", paths: [], fill: "none", text: "Keine der Figuren ist richtig" });

  return { options, correctId: String.fromCharCode(97 + pos) };
}

// ─── 30 Task Specs ───────────────────────────────────────────────────

interface Spec {
  id: string; fig: FK; pc: number;
  diff: "leicht" | "mittel" | "schwer"; seed: number;
}

const SPECS: Spec[] = [
  // Leicht (3 Teile)
  { id: "fz-1",  fig: "vollkreis",        pc: 3, diff: "leicht", seed: 1001 },
  { id: "fz-2",  fig: "quadrat",          pc: 3, diff: "leicht", seed: 1002 },
  { id: "fz-3",  fig: "dreieck",          pc: 3, diff: "leicht", seed: 1003 },
  { id: "fz-4",  fig: "halbkreis",        pc: 3, diff: "leicht", seed: 1004 },
  { id: "fz-5",  fig: "sechseck",         pc: 3, diff: "leicht", seed: 1005 },
  { id: "fz-6",  fig: "raute",            pc: 3, diff: "leicht", seed: 1006 },
  { id: "fz-7",  fig: "dreiviertelkreis", pc: 3, diff: "leicht", seed: 1007 },
  { id: "fz-8",  fig: "fuenfeck",         pc: 3, diff: "leicht", seed: 1008 },
  { id: "fz-9",  fig: "trapez",           pc: 3, diff: "leicht", seed: 1009 },
  { id: "fz-10", fig: "achteck",          pc: 3, diff: "leicht", seed: 1010 },
  // Mittel (4 Teile)
  { id: "fz-11", fig: "siebeneck",        pc: 4, diff: "mittel", seed: 2001 },
  { id: "fz-12", fig: "parallelogramm",   pc: 4, diff: "mittel", seed: 2002 },
  { id: "fz-13", fig: "viertelkreis",     pc: 4, diff: "mittel", seed: 2003 },
  { id: "fz-14", fig: "vollkreis",        pc: 4, diff: "mittel", seed: 2004 },
  { id: "fz-15", fig: "quadrat",          pc: 4, diff: "mittel", seed: 2005 },
  { id: "fz-16", fig: "sechseck",         pc: 4, diff: "mittel", seed: 2006 },
  { id: "fz-17", fig: "halbkreis",        pc: 4, diff: "mittel", seed: 2007 },
  { id: "fz-18", fig: "dreieck",          pc: 4, diff: "mittel", seed: 2008 },
  { id: "fz-19", fig: "raute",            pc: 4, diff: "mittel", seed: 2009 },
  { id: "fz-20", fig: "trapez",           pc: 4, diff: "mittel", seed: 2010 },
  // Schwer (5-7 Teile)
  { id: "fz-21", fig: "achteck",          pc: 5, diff: "schwer", seed: 3001 },
  { id: "fz-22", fig: "fuenfeck",         pc: 5, diff: "schwer", seed: 3002 },
  { id: "fz-23", fig: "dreiviertelkreis", pc: 5, diff: "schwer", seed: 3003 },
  { id: "fz-24", fig: "parallelogramm",   pc: 5, diff: "schwer", seed: 3004 },
  { id: "fz-25", fig: "siebeneck",        pc: 7, diff: "schwer", seed: 3005 },
  { id: "fz-26", fig: "vollkreis",        pc: 6, diff: "schwer", seed: 3006 },
  { id: "fz-27", fig: "trapez",           pc: 5, diff: "schwer", seed: 3007 },
  { id: "fz-28", fig: "quadrat",          pc: 5, diff: "schwer", seed: 3008 },
  { id: "fz-29", fig: "halbkreis",        pc: 5, diff: "schwer", seed: 3009 },
  { id: "fz-30", fig: "raute",            pc: 6, diff: "schwer", seed: 3010 },
];

// ─── Build & Export ──────────────────────────────────────────────────

function buildAufgabe(sp: Spec): FZAufgabe {
  const pieces = makePieces(sp.fig, sp.pc, sp.seed);
  const { options, correctId } = makeOptions(sp.fig, sp.seed * 3 + 7);
  return {
    id: sp.id,
    pieces: pieces.map(p => ({ path: p, fill: FILL })),
    options,
    correctOptionId: correctId,
    difficulty: sp.diff,
    explanation: `Die ${sp.pc} Teile ergeben zusammengesetzt ${FIGNAME[sp.fig]}.`,
  };
}

export const figurenAufgaben: FZAufgabe[] = SPECS.map(buildAufgabe);

// ─── Strategy Guide ──────────────────────────────────────────────────

export const figurenStrategyGuide = {
  title: "Figuren zusammensetzen \u2013 Strategie",
  sections: [
    {
      heading: "Grundprinzip",
      content:
        "Dir werden dunkelgraue Puzzleteile gezeigt. Du musst erkennen, welche der 4 vorgegebenen Figuren (A\u2013D) entsteht, wenn man alle Teile richtig zusammensetzt. Option E ist immer \u201eKeine der Figuren ist richtig\u201c.\n\nWICHTIG: Teile nur drehen, nie spiegeln oder skalieren!",
    },
    {
      heading: "13 offizielle L\u00f6sungsfiguren",
      content:
        "8 Polygone: Dreieck, Quadrat, Parallelogramm, Trapez, F\u00fcnfeck, Sechseck, Siebeneck, Achteck\n4 Kreisformen: Viertelkreis, Halbkreis, Dreiviertelkreis, Vollkreis\nSonderform: Raute\n\nDie 3 falschen Antworten sind immer \u00e4hnliche Figuren aus derselben Kategorie!",
    },
    {
      heading: "Schritt-f\u00fcr-Schritt",
      content:
        "Schritt 1: RUNDUNGEN PR\u00dcFEN \u2014 Gekr\u00fcmmte Kanten? \u2192 Kreisform. Nur gerade? \u2192 Polygon/Raute.\n\nSchritt 2: WINKEL ANALYSIEREN \u2014 90\u00b0=Quadrat, 120\u00b0=Sechseck, 60\u00b0=Dreieck, stumpf=F\u00fcnf-/Sieben-/Achteck\n\nSchritt 3: GR\u00d6SSTES TEIL ALS BASIS \u2014 Rest mental anlegen, Au\u00dfenkanten pr\u00fcfen.",
    },
    {
      heading: "Typische Fallen",
      content:
        "\u2022 Raute vs. Quadrat: Raute hat KEINE rechten Winkel\n\u2022 Parallelogramm vs. Trapez: Parallelogramm hat 2 parallele Seitenpaare, Trapez nur 1\n\u2022 Sechseck vs. Achteck: Ecken genau z\u00e4hlen!\n\u2022 Dreiviertelkreis vs. Vollkreis: Fehlenden Sektor suchen\n\u2022 Die \u00e4hnlichen Distraktoren sind absichtlich verwirrend \u2014 genau hinschauen!",
    },
    {
      heading: "Zeitmanagement",
      content:
        "80 Sekunden pro Aufgabe:\n0\u201310s: Kategorie erkennen (Kreis oder Polygon?)\n10\u201330s: Winkel/Kanten analysieren, 2\u20133 Optionen ausschlie\u00dfen\n30\u201360s: Gr\u00f6\u00dfstes Teil als Basis, Rest anlegen\n60\u201380s: Beste Option w\u00e4hlen oder E bei Unsicherheit",
    },
  ],
};
