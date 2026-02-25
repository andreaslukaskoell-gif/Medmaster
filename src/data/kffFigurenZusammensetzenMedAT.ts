/**
 * KFF „Figuren zusammensetzen“ – MedAT.
 *
 * Nur 14 offizielle Zielformen: gleichseitiges Dreieck, Quadrat, Raute, Parallelogramm,
 * Trapez, regelmäßiges Fünfeck, Sechseck, Siebeneck, Achteck, Viertelkreis, Halbkreis,
 * Dreiviertelkreis, Vollkreis, L-Form.
 *
 * Pflicht: Generator wählt eine Zielform → zerlegt in 2–7 Teilpolygone (nur gerade Schnitte,
 * keine Verzerrung). Teile nur Rotation + Translation (keine Spiegelung). Optionen A–E nur
 * aus diesen 14 Formen. validateFigurenTask prüft: Union=Ziel, keine Überlappung/Lücken,
 * genau eine Option passt. Bei Fehlschlag: Aufgabe verwerfen.
 */

export type Polygon = { points: { x: number; y: number }[] };

/** Option E = "Keine der Figuren ist richtig". */
export type FigureOption = Polygon | { isOptionE: true };

/** Trennlinien für die visuelle Lösung (wie die Teile zusammengesetzt sind). */
export type SolutionOverlayLine = { from: { x: number; y: number }; to: { x: number; y: number } };

export type FigureAssembleTask = {
  id: string;
  pieces: Polygon[];
  target: Polygon;
  options: [FigureOption, FigureOption, FigureOption, FigureOption, FigureOption];
  correctIndex: number;
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
  source?: string;
  /** Eine der 14 Zielformen oder L-Form (z. B. "triangle", "square", "L-shape"). */
  targetShapeId?: string;
  /** Visuelle Lösung: Trennlinien zwischen den Teilen in Zielgeometrie. */
  solutionOverlay?: { lines: SolutionOverlayLine[] };
};

// ─── Kern-Hilfsfunktionen ─────────────────────────────────────────────────

const TAU = 2 * Math.PI;

function rd(n: number): number {
  return Math.round(n * 100) / 100;
}

export function regularPolygonPoints(
  cx: number,
  cy: number,
  r: number,
  n: number
): { x: number; y: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (TAU * i) / n;
    return { x: rd(cx + r * Math.cos(a)), y: rd(cy + r * Math.sin(a)) };
  });
}

export function polygonToPath(poly: Polygon): string {
  if (!poly.points.length) return "";
  return "M " + poly.points.map((p) => `${p.x} ${p.y}`).join(" L ") + " Z";
}

/** Alle Figuren-SVGs müssen dieses Attribut setzen, damit keine Verzerrung entsteht (nur uniforme Skalierung). */
export const FIGURE_SVG_ASPECT_PROPS = {
  preserveAspectRatio: "xMidYMid meet" as const,
} as const;

export function polygonArea(poly: Polygon): number {
  const pts = poly.points;
  if (pts.length < 3) return 0;
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
  }
  return Math.abs(area) / 2;
}

export function isOptionE(opt: FigureOption): opt is { isOptionE: true } {
  return typeof opt === "object" && "isOptionE" in opt && opt.isOptionE === true;
}

export function optionAsPolygon(opt: FigureOption): Polygon | null {
  if (isOptionE(opt)) return null;
  return opt;
}

function centroid(p: Polygon): { x: number; y: number } {
  const pts = p.points;
  return {
    x: pts.reduce((s, q) => s + q.x, 0) / pts.length,
    y: pts.reduce((s, q) => s + q.y, 0) / pts.length,
  };
}

function mid(a: { x: number; y: number }, b: { x: number; y: number }): { x: number; y: number } {
  return { x: rd((a.x + b.x) / 2), y: rd((a.y + b.y) / 2) };
}

/** Kreisbogen als Polygon (Zentrum + Bogenpunkte). Winkel in Radiant, von start bis end. */
function arcPolygon(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  steps: number
): { x: number; y: number }[] {
  const pts: { x: number; y: number }[] = [{ x: rd(cx), y: rd(cy) }];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = startAngle + t * (endAngle - startAngle);
    pts.push({ x: rd(cx + r * Math.cos(a)), y: rd(cy + r * Math.sin(a)) });
  }
  return pts;
}

// =============================================================================
// 14 OFFIZIELLE ZIELFORMEN – Einzige erlaubte Formen
// =============================================================================
// Gleichseitiges Dreieck, Quadrat, Raute, Parallelogramm, Trapez, regelmäßiges
// Fünfeck, Sechseck, Siebeneck, Achteck, Viertelkreis, Halbkreis, Dreiviertelkreis,
// Vollkreis, L-Form. Keine Verzerrung, keine Skalierung X≠Y.

const CX = 100;
const CY = 100;
const R = 65;
const ARC_STEPS = 24;

/** Reguläre Polygone. */
const SQUARE: Polygon = { points: regularPolygonPoints(CX, CY, R, 4) };
const TRIANGLE: Polygon = { points: regularPolygonPoints(CX, CY, R, 3) };
const PENTAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 5) };
const HEXAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 6) };
const HEPTAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 7) };
const OCTAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 8) };
const RHOMBUS: Polygon = {
  points: [
    { x: CX, y: CY - 45 },
    { x: CX + 35, y: CY },
    { x: CX, y: CY + 45 },
    { x: CX - 35, y: CY },
  ],
};
const TRAPEZ: Polygon = {
  points: [
    { x: 60, y: 55 },
    { x: 140, y: 55 },
    { x: 170, y: 145 },
    { x: 30, y: 145 },
  ],
};
const PARALLELOGRAM: Polygon = {
  points: [
    { x: 50, y: 55 },
    { x: 170, y: 55 },
    { x: 150, y: 145 },
    { x: 30, y: 145 },
  ],
};

/** L-Form. */
const L_SHAPE: Polygon = {
  points: [
    { x: 40, y: 50 },
    { x: 160, y: 50 },
    { x: 160, y: 100 },
    { x: 100, y: 100 },
    { x: 100, y: 150 },
    { x: 40, y: 150 },
  ],
};

/** Viertelkreis (rechter oberer Quadrant). */
const QUARTER_CIRCLE: Polygon = {
  points: arcPolygon(CX, CY, R, 0, -Math.PI / 2, ARC_STEPS),
};

/** Halbkreis (obere Hälfte). */
const HALF_CIRCLE: Polygon = {
  points: arcPolygon(CX, CY, R, Math.PI, 0, ARC_STEPS),
};

/** Dreiviertelkreis (drei Viertel, von links oben im Uhrzeigersinn). */
const THREE_QUARTER_CIRCLE: Polygon = {
  points: arcPolygon(CX, CY, R, Math.PI / 2, -Math.PI, ARC_STEPS),
};

/** Vollkreis (Polygon-Approximation, 32 Ecken). */
const FULL_CIRCLE: Polygon = { points: regularPolygonPoints(CX, CY, R, 32) };

// =============================================================================
// SOLUTION_SHAPES – Exakt 14 offizielle Formen
// =============================================================================

export const SOLUTION_SHAPES = [
  "triangle",
  "square",
  "rhombus",
  "parallelogram",
  "trapezoid",
  "pentagon",
  "hexagon",
  "heptagon",
  "octagon",
  "quarter-circle",
  "half-circle",
  "three-quarter-circle",
  "full-circle",
  "L-shape",
] as const;

/** IDs der 14 offiziellen Zielformen (+ L-Form). Für Validierung und Speicherung. */
export const TARGET_SHAPE_IDS: readonly string[] = SOLUTION_SHAPES;

export type SolutionShapeName = (typeof SOLUTION_SHAPES)[number];

const OFFICIAL_TARGET_POLYGONS: Polygon[] = [
  TRIANGLE,
  SQUARE,
  RHOMBUS,
  PARALLELOGRAM,
  TRAPEZ,
  PENTAGON,
  HEXAGON,
  HEPTAGON,
  OCTAGON,
  QUARTER_CIRCLE,
  HALF_CIRCLE,
  THREE_QUARTER_CIRCLE,
  FULL_CIRCLE,
  L_SHAPE,
];

const ALLOWED_SOLUTION_SHAPES: Polygon[] = OFFICIAL_TARGET_POLYGONS;

/** Fingerprints der 14 offiziellen Formen. */
const ALLOWED_FINGERPRINTS: Set<string> = new Set(
  ALLOWED_SOLUTION_SHAPES.map((s) => polygonFingerprint(s))
);

function isAllowedTarget(poly: Polygon): boolean {
  return ALLOWED_FINGERPRINTS.has(polygonFingerprint(poly));
}

function isExactStrategyShape(poly: Polygon): boolean {
  return ALLOWED_FINGERPRINTS.has(polygonFingerprint(poly));
}

export function getAllowedSolutionShapes(): Polygon[] {
  return ALLOWED_SOLUTION_SHAPES.map((s) => ({ points: s.points.map((p) => ({ ...p })) }));
}

/** Gibt die targetShapeId für ein Polygon zurück, wenn es eine der 14 offiziellen Formen ist. */
export function getTargetShapeIdForPolygon(target: Polygon): string | undefined {
  const fp = polygonFingerprint(target);
  const idx = OFFICIAL_TARGET_POLYGONS.findIndex((p) => polygonFingerprint(p) === fp);
  return idx >= 0 ? SOLUTION_SHAPES[idx] : undefined;
}

const SEG_TOL = 0.02;
function segmentKey(a: { x: number; y: number }, b: { x: number; y: number }): string {
  const ax = rd(a.x);
  const ay = rd(a.y);
  const bx = rd(b.x);
  const by = rd(b.y);
  return ax < bx || (ax === bx && ay <= by) ? `${ax},${ay},${bx},${by}` : `${bx},${by},${ax},${ay}`;
}

/** Erzeugt die Trennlinien zwischen Teilen (Kanten, die nicht auf dem Zielrand liegen). */
export function computeSolutionOverlay(
  target: Polygon,
  pieces: Polygon[]
): { lines: SolutionOverlayLine[] } {
  const targetEdges = new Set<string>();
  const t = target.points;
  for (let i = 0; i < t.length; i++) {
    const j = (i + 1) % t.length;
    targetEdges.add(segmentKey(t[i]!, t[j]!));
  }
  const seen = new Set<string>();
  const lines: SolutionOverlayLine[] = [];
  for (const piece of pieces) {
    const pts = piece.points;
    for (let i = 0; i < pts.length; i++) {
      const j = (i + 1) % pts.length;
      const key = segmentKey(pts[i]!, pts[j]!);
      if (targetEdges.has(key) || seen.has(key)) continue;
      seen.add(key);
      lines.push({
        from: { x: rd(pts[i]!.x), y: rd(pts[i]!.y) },
        to: { x: rd(pts[j]!.x), y: rd(pts[j]!.y) },
      });
    }
  }
  return { lines };
}

/** Zielformen pro Schwierigkeit (nur die 14). */
const SHAPE_POOL_EASY: Polygon[] = [SQUARE, TRIANGLE, HEXAGON, PENTAGON, RHOMBUS];
const SHAPE_POOL_MEDIUM: Polygon[] = [
  HEXAGON,
  PENTAGON,
  TRAPEZ,
  PARALLELOGRAM,
  L_SHAPE,
  OCTAGON,
  HALF_CIRCLE,
];
const SHAPE_POOL_HARD: Polygon[] = [
  HEPTAGON,
  QUARTER_CIRCLE,
  THREE_QUARTER_CIRCLE,
  FULL_CIRCLE,
  L_SHAPE,
  TRAPEZ,
];

// =============================================================================
// CUT STRATEGIES – Schnitt-Strategien
// =============================================================================
// Diagonale, versetzte, Zickzack-, mehrstufige und asymmetrische Schnitte.
// Jede Funktion liefert Teile mit exakt gleicher Flächensumme wie das Ziel.

type CutResult = { target: Polygon; pieces: Polygon[] };

/** Diagonal: Quadrat in zwei Dreiecke. */
function cutSquareDiagonal(): CutResult {
  const [p0, p1, p2, p3] = SQUARE.points;
  return { target: SQUARE, pieces: [{ points: [p0, p1, p2] }, { points: [p0, p2, p3] }] };
}

/** Mittig von Zentrum zu Ecken (symmetrisch). */
function cutSquareCenter4(): CutResult {
  const pts = SQUARE.points;
  const c = centroid(SQUARE);
  return {
    target: SQUARE,
    pieces: [
      { points: [c, pts[0], pts[1]] },
      { points: [c, pts[1], pts[2]] },
      { points: [c, pts[2], pts[3]] },
      { points: [c, pts[3], pts[0]] },
    ],
  };
}

/** Versetzter Schnitt: nicht durch Mitte, unterschiedlich große Teile (Quadrat). */
function cutSquareOffset(): CutResult {
  const [p0, p1, p2, p3] = SQUARE.points;
  const m01 = mid(p0, p1);
  const m23 = mid(p2, p3);
  const c = centroid(SQUARE);
  return {
    target: SQUARE,
    pieces: [{ points: [p0, m01, c, p3] }, { points: [m01, p1, p2, m23, c] }],
  };
}

/** Quadrat: 3 Teile (von einer Ecke zu zwei Kantenmitten). */
function cutSquare3(): CutResult {
  const [p0, p1, p2, p3] = SQUARE.points;
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  return {
    target: SQUARE,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, p2, m23] }, { points: [p0, m23, p3] }],
  };
}

function cutTriangleMedian(): CutResult {
  const [p0, p1, p2] = TRIANGLE.points;
  const m = mid(p1, p2);
  return { target: TRIANGLE, pieces: [{ points: [p0, p1, m] }, { points: [p0, m, p2] }] };
}

/** Dreieck: 3 Teile (von einer Ecke zu den Mitten der gegenüberliegenden Seiten). */
function cutTriangle3(): CutResult {
  const [p0, p1, p2] = TRIANGLE.points;
  const m12 = mid(p1, p2);
  const m20 = mid(p2, p0);
  return {
    target: TRIANGLE,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, m20] }, { points: [p0, m20, p2] }],
  };
}

/** Sechseck: diagonal (2 Teile). */
function cutHexagon2(): CutResult {
  const v = HEXAGON.points;
  return {
    target: HEXAGON,
    pieces: [{ points: [v[0], v[1], v[2], v[3]] }, { points: [v[0], v[3], v[4], v[5]] }],
  };
}

/** Raute: 2 Teile (Diagonale). */
function cutRhombus2(): CutResult {
  const [p0, p1, p2, p3] = RHOMBUS.points;
  return { target: RHOMBUS, pieces: [{ points: [p0, p1, p2] }, { points: [p0, p2, p3] }] };
}

/** Raute: 3 Teile (von einer Ecke zu zwei Kantenmitten). */
function cutRhombus3(): CutResult {
  const [p0, p1, p2, p3] = RHOMBUS.points;
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  return {
    target: RHOMBUS,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, m23] }, { points: [p0, m23, p3] }],
  };
}

/** Parallelogramm: 2 Teile (Diagonale). */
function cutParallelogram2(): CutResult {
  const [p0, p1, p2, p3] = PARALLELOGRAM.points;
  return { target: PARALLELOGRAM, pieces: [{ points: [p0, p1, p2] }, { points: [p0, p2, p3] }] };
}

/** Parallelogramm: 3 Teile (von einer Ecke zu zwei Kantenmitten). */
function cutParallelogram3(): CutResult {
  const [p0, p1, p2, p3] = PARALLELOGRAM.points;
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  return {
    target: PARALLELOGRAM,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, p2, m23] }, { points: [p0, m23, p3] }],
  };
}

/** Trapez: 2 Teile (Mitten Grundlinien + Schwerpunkt). */
function cutTrapez2(): CutResult {
  const [p0, p1, p2, p3] = TRAPEZ.points;
  const m01 = mid(p0, p1);
  const m23 = mid(p2, p3);
  const c = centroid(TRAPEZ);
  return {
    target: TRAPEZ,
    pieces: [{ points: [p0, p1, m01, c, p3, m23] }, { points: [m01, p1, p2, m23, c] }],
  };
}

/** Trapez: 3 Teile (von einer Ecke zu zwei Kantenmitten). */
function cutTrapez3(): CutResult {
  const [p0, p1, p2, p3] = TRAPEZ.points;
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  return {
    target: TRAPEZ,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, p2, m23] }, { points: [p0, m23, p3] }],
  };
}

/** Sechseck: 3 Teile vom Zentrum (je 2 Kanten). */
function cutHexagon3(): CutResult {
  const v = HEXAGON.points;
  const c = centroid(HEXAGON);
  return {
    target: HEXAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3], v[4]] },
      { points: [c, v[4], v[5], v[0]] },
    ],
  };
}

/** Sechseck: 6 Teile (Zentrum zu jeder Ecke) – schwer. */
function cutHexagon6(): CutResult {
  const v = HEXAGON.points;
  const c = centroid(HEXAGON);
  return {
    target: HEXAGON,
    pieces: Array.from({ length: 6 }, (_, i) => ({ points: [c, v[i], v[(i + 1) % 6]] })),
  };
}

/** Achteck: 4 Teile vom Zentrum (je 2 gegenüberliegende Ecken) – mittel/schwer. */
function cutOctagon4(): CutResult {
  const v = OCTAGON.points;
  const c = centroid(OCTAGON);
  return {
    target: OCTAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3], v[4]] },
      { points: [c, v[4], v[5], v[6]] },
      { points: [c, v[6], v[7], v[0]] },
    ],
  };
}

/** Fünfeck: 3 Teile vom Zentrum. */
function cutPentagon3(): CutResult {
  const v = PENTAGON.points;
  const c = centroid(PENTAGON);
  return {
    target: PENTAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3]] },
      { points: [c, v[3], v[4], v[0]] },
    ],
  };
}

/** Fünfeck: 4 Teile vom Zentrum. */
function cutPentagon4(): CutResult {
  const v = PENTAGON.points;
  const c = centroid(PENTAGON);
  return {
    target: PENTAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3]] },
      { points: [c, v[3], v[4]] },
      { points: [c, v[4], v[0]] },
    ],
  };
}

/** Fünfeck: 5 Teile (Zentrum zu jeder Ecke). */
function cutPentagon5(): CutResult {
  const v = PENTAGON.points;
  const c = centroid(PENTAGON);
  return {
    target: PENTAGON,
    pieces: Array.from({ length: 5 }, (_, i) => ({
      points: [c, v[i], v[(i + 1) % 5]],
    })),
  };
}

/** Siebeneck (regulär): 4 Teile vom Zentrum. */
function cutHeptagon4(): CutResult {
  const v = HEPTAGON.points;
  const c = centroid(HEPTAGON);
  return {
    target: HEPTAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3], v[4]] },
      { points: [c, v[4], v[5], v[6]] },
      { points: [c, v[6], v[0]] },
    ],
  };
}

/** Siebeneck: 7 Teile (Zentrum zu jeder Ecke). */
function cutHeptagon7(): CutResult {
  const v = HEPTAGON.points;
  const c = centroid(HEPTAGON);
  return {
    target: HEPTAGON,
    pieces: Array.from({ length: 7 }, (_, i) => ({
      points: [c, v[i], v[(i + 1) % 7]],
    })),
  };
}

/** Viertelkreis: 2 Teile (gerader Schnitt von Mitte zum Bogen). */
function cutQuarterCircle2(): CutResult {
  const pts = QUARTER_CIRCLE.points;
  const c = pts[0]!;
  const k = Math.floor((pts.length - 1) / 2) + 1;
  return {
    target: QUARTER_CIRCLE,
    pieces: [{ points: [c, ...pts.slice(1, k)] }, { points: [c, ...pts.slice(k - 1)] }],
  };
}

/** Viertelkreis: 3 Teile (zwei radiale Schnitte). */
function cutQuarterCircle3(): CutResult {
  const pts = QUARTER_CIRCLE.points;
  const c = pts[0]!;
  const n = pts.length - 1;
  const i1 = Math.floor(n / 3);
  const i2 = Math.floor((2 * n) / 3);
  return {
    target: QUARTER_CIRCLE,
    pieces: [
      { points: [c, pts[1]!, pts[i1]!].concat(pts.slice(2, i1 + 1)) },
      { points: [c, pts[i1]!, pts[i2]!].concat(pts.slice(i1 + 1, i2 + 1)) },
      { points: [c, pts[i2]!].concat(pts.slice(i2 + 1)) },
    ],
  };
}

/** Halbkreis: 3 Teile (zwei radiale Schnitte vom Zentrum). */
function cutHalfCircle3(): CutResult {
  const pts = HALF_CIRCLE.points;
  const c = pts[0]!;
  const n = pts.length - 1;
  const i1 = Math.floor(n / 3);
  const i2 = Math.floor((2 * n) / 3);
  return {
    target: HALF_CIRCLE,
    pieces: [
      { points: [c, pts[1]!, pts[i1]!].concat(pts.slice(2, i1 + 1)) },
      { points: [c, pts[i1]!, pts[i2]!].concat(pts.slice(i1 + 1, i2 + 1)) },
      { points: [c, pts[i2]!].concat(pts.slice(i2 + 1)) },
    ],
  };
}

/** Halbkreis: 4 Teile (vier radiale Schnitte). */
function cutHalfCircle4(): CutResult {
  const pts = HALF_CIRCLE.points;
  const c = pts[0]!;
  const n = pts.length - 1;
  const step = Math.floor(n / 4);
  return {
    target: HALF_CIRCLE,
    pieces: Array.from({ length: 4 }, (_, i) => {
      const start = i === 0 ? 1 : 1 + i * step;
      const end = i === 3 ? pts.length : 1 + (i + 1) * step;
      return { points: [c, ...pts.slice(start, end)] };
    }),
  };
}

/** Dreiviertelkreis: 3 Teile (zwei radiale Schnitte vom Zentrum). */
function cutThreeQuarterCircle3(): CutResult {
  const pts = THREE_QUARTER_CIRCLE.points;
  const c = pts[0]!;
  const n = pts.length - 1;
  const i1 = Math.floor(n / 3);
  const i2 = Math.floor((2 * n) / 3);
  return {
    target: THREE_QUARTER_CIRCLE,
    pieces: [
      { points: [c, pts[1]!, pts[i1]!].concat(pts.slice(2, i1 + 1)) },
      { points: [c, pts[i1]!, pts[i2]!].concat(pts.slice(i1 + 1, i2 + 1)) },
      { points: [c, pts[i2]!].concat(pts.slice(i2 + 1)) },
    ],
  };
}

/** Dreiviertelkreis: 4 Teile (vier radiale Schnitte). */
function cutThreeQuarterCircle4(): CutResult {
  const pts = THREE_QUARTER_CIRCLE.points;
  const c = pts[0]!;
  const n = pts.length - 1;
  const step = Math.floor(n / 4);
  return {
    target: THREE_QUARTER_CIRCLE,
    pieces: Array.from({ length: 4 }, (_, i) => {
      const start = i === 0 ? 1 : 1 + i * step;
      const end = i === 3 ? pts.length : 1 + (i + 1) * step;
      return { points: [c, ...pts.slice(start, end)] };
    }),
  };
}

/** Vollkreis: 4 Teile (4 radiale Schnitte vom Zentrum). */
function cutFullCircle4(): CutResult {
  const v = FULL_CIRCLE.points;
  const c = centroid(FULL_CIRCLE);
  const n = v.length;
  const step = n / 4;
  return {
    target: FULL_CIRCLE,
    pieces: Array.from({ length: 4 }, (_, i) => ({
      points: [c, ...v.slice(Math.floor(i * step), Math.floor((i + 1) * step))],
    })),
  };
}

/** Vollkreis: 6 Teile (6 radiale Schnitte). */
function cutFullCircle6(): CutResult {
  const v = FULL_CIRCLE.points;
  const c = centroid(FULL_CIRCLE);
  const n = v.length;
  const step = Math.floor(n / 6);
  return {
    target: FULL_CIRCLE,
    pieces: Array.from({ length: 6 }, (_, i) => {
      const start = i * step;
      const end = i === 5 ? n : (i + 1) * step;
      return { points: [c, ...v.slice(start, end)] };
    }),
  };
}

/** Vollkreis: 5 Teile (5 radiale Schnitte). */
function cutFullCircle5(): CutResult {
  const v = FULL_CIRCLE.points;
  const c = centroid(FULL_CIRCLE);
  const n = v.length;
  const step = Math.floor(n / 5);
  return {
    target: FULL_CIRCLE,
    pieces: Array.from({ length: 5 }, (_, i) => {
      const start = i * step;
      const end = i === 4 ? n : (i + 1) * step;
      return { points: [c, ...v.slice(start, end)] };
    }),
  };
}

/** L-Form: 3 Rechtecke. */
function cutLShape4Simple(): CutResult {
  return {
    target: L_SHAPE,
    pieces: [
      {
        points: [
          { x: 40, y: 50 },
          { x: 100, y: 50 },
          { x: 100, y: 100 },
          { x: 40, y: 100 },
        ],
      },
      {
        points: [
          { x: 100, y: 50 },
          { x: 160, y: 50 },
          { x: 160, y: 100 },
          { x: 100, y: 100 },
        ],
      },
      {
        points: [
          { x: 40, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 150 },
          { x: 40, y: 150 },
        ],
      },
    ],
  };
}

export type FZDifficulty = "easy" | "medium" | "hard";

/** Schnitt-Schemata. Nur die 14 offiziellen Zielformen, 2–7 Teile, nur gerade Schnitte. */
const CUT_SCHEMES: { diff: FZDifficulty; cut: () => CutResult }[] = [
  { diff: "easy", cut: cutSquareDiagonal },
  { diff: "easy", cut: cutSquareCenter4 },
  { diff: "easy", cut: cutSquare3 },
  { diff: "easy", cut: cutTriangleMedian },
  { diff: "easy", cut: cutTriangle3 },
  { diff: "easy", cut: cutHexagon2 },
  { diff: "easy", cut: cutRhombus2 },
  { diff: "easy", cut: cutRhombus3 },
  { diff: "easy", cut: cutParallelogram2 },
  { diff: "easy", cut: cutParallelogram3 },
  { diff: "medium", cut: cutHexagon3 },
  { diff: "medium", cut: cutPentagon3 },
  { diff: "medium", cut: cutPentagon4 },
  { diff: "medium", cut: cutSquareOffset },
  { diff: "medium", cut: cutTrapez2 },
  { diff: "medium", cut: cutTrapez3 },
  { diff: "medium", cut: cutLShape4Simple },
  { diff: "medium", cut: cutOctagon4 },
  { diff: "medium", cut: cutHeptagon4 },
  { diff: "medium", cut: cutQuarterCircle2 },
  { diff: "medium", cut: cutQuarterCircle3 },
  { diff: "medium", cut: cutHalfCircle3 },
  { diff: "medium", cut: cutHalfCircle4 },
  { diff: "medium", cut: cutThreeQuarterCircle3 },
  { diff: "medium", cut: cutThreeQuarterCircle4 },
  { diff: "hard", cut: cutHexagon6 },
  { diff: "hard", cut: cutHeptagon7 },
  { diff: "hard", cut: cutPentagon5 },
  { diff: "hard", cut: cutFullCircle4 },
  { diff: "hard", cut: cutFullCircle5 },
  { diff: "hard", cut: cutFullCircle6 },
];

// =============================================================================
// NORMALIZE & FINGERPRINT – für DuplicateGuard und Validator
// =============================================================================

/** Polygon normalisieren: Schwerpunkt nach (0,0), uniform skaliert auf Fläche 1 (ein Faktor), dann Ecken nach Winkel sortiert. */
function normalizePolygon(poly: Polygon): { x: number; y: number }[] {
  const pts = poly.points;
  if (pts.length < 3) return [];
  const c = centroid(poly);
  const area = polygonArea(poly);
  const scale = area > 1e-6 ? 1 / Math.sqrt(area) : 1;
  const translated = pts.map((p) => ({
    x: rd((p.x - c.x) * scale),
    y: rd((p.y - c.y) * scale),
  }));
  const angle = (p: { x: number; y: number }) => Math.atan2(p.y, p.x);
  translated.sort((a, b) => angle(a) - angle(b));
  return translated;
}

/** Fingerprint: String-Darstellung des normalisierten Polygons (für Duplikat- und Eindeutigkeitsprüfung). */
function polygonFingerprint(poly: Polygon): string {
  const n = normalizePolygon(poly);
  return n.map((p) => `${p.x},${p.y}`).join("|");
}

/** Fingerprint eines Teile-Sets: sortierte Flächen + sortierte Fingerprints der Teile. */
function piecesFingerprint(pieces: Polygon[]): string {
  const areas = pieces
    .map(polygonArea)
    .sort((a, b) => a - b)
    .map((a) => rd(a).toString())
    .join(",");
  const fps = pieces.map(polygonFingerprint).sort();
  return areas + ";" + fps.join(";");
}

/** Task-Fingerprint: nur eine Option ist die Zielform. */
function taskFingerprint(target: Polygon, pieces: Polygon[]): string {
  return polygonFingerprint(target) + "::" + piecesFingerprint(pieces);
}

/** Dev-Validation: Erzwingt uniforme Skalierung (scaleX === scaleY). Bei Verzerrung → throw. */
export function assertUniformScale(scaleX: number, scaleY: number, context?: string): void {
  if (typeof window !== "undefined" && import.meta.env?.DEV) {
    const tol = 1e-10;
    if (Math.abs(scaleX - scaleY) > tol) {
      throw new Error(
        `[Figuren] Non-uniform scale verboten: scaleX=${scaleX}, scaleY=${scaleY}. ${context ?? ""}`
      );
    }
  }
}

// =============================================================================
// DUPLICATE GUARD – Hash/Fingerprint, bei Kollision verwerfen
// =============================================================================

const seenFingerprints = new Set<string>();
const MAX_SEEN = 5000;

/** Prüft, ob diese Ziel+Teile-Kombination schon vorkam. Wenn ja: verwerfen. */
export function duplicateGuardHas(fingerprint: string): boolean {
  return seenFingerprints.has(fingerprint);
}

/** Registriert eine verwendete Aufgabe (Fingerprint). */
export function duplicateGuardAdd(fingerprint: string): void {
  seenFingerprints.add(fingerprint);
  if (seenFingerprints.size > MAX_SEEN) {
    const arr = [...seenFingerprints];
    arr.splice(0, Math.floor(MAX_SEEN / 2));
    seenFingerprints.clear();
    arr.forEach((s) => seenFingerprints.add(s));
  }
}

// =============================================================================
// VALIDATOR – Harte Prüfung: Fläche, keine Überlappung, Ziel in SOLUTION_SHAPES
// =============================================================================
// Bei Fehlschlag: Aufgabe VERWERFEN (nicht anzeigen).

const AREA_TOL = 1e-6;

/** Prüft: Sum(Fläche Teile) === Fläche Ziel (exakt, keine Lücken/Überlappung durch Fläche). */
export function validatePiecesMatchTarget(pieces: Polygon[], target: Polygon): boolean {
  const sum = pieces.reduce((s, p) => s + polygonArea(p), 0);
  const targetA = polygonArea(target);
  return Math.abs(sum - targetA) <= AREA_TOL;
}

/** Prüft: Keine zwei Teile überlappen (kein Vertex strikt im Inneren des anderen Polygons). */
function validatePiecesNoOverlap(pieces: Polygon[]): boolean {
  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++) {
      const a = pieces[i]!.points;
      const b = pieces[j]!.points;
      for (const p of a) {
        if (pointStrictlyInsidePolygon(p, b)) return false;
      }
      for (const p of b) {
        if (pointStrictlyInsidePolygon(p, a)) return false;
      }
    }
  }
  return true;
}

/** Prüft: Jeder Eckpunkt jedes Teils liegt innerhalb oder auf dem Rand der Zielform (Union = Ziel, keine Lücken). */
function validatePiecesInsideTarget(pieces: Polygon[], target: Polygon): boolean {
  const targetV = target.points;
  for (const piece of pieces) {
    for (const p of piece.points) {
      if (!pointInsideOrOnPolygon(p, targetV)) return false;
    }
  }
  return true;
}

/** Liegt der Punkt auf der Strecke von a nach b (inkl. Endpunkte, mit Toleranz)? */
function pointOnSegment(
  p: { x: number; y: number },
  a: { x: number; y: number },
  b: { x: number; y: number },
  eps: number = 1e-4
): boolean {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len < eps) return Math.hypot(p.x - a.x, p.y - a.y) <= eps;
  const t = Math.abs(dx) >= Math.abs(dy) ? (p.x - a.x) / dx : (p.y - a.y) / dy;
  if (t < -eps || t > 1 + eps) return false;
  const qx = a.x + t * dx;
  const qy = a.y + t * dy;
  return Math.abs(p.x - qx) <= eps && Math.abs(p.y - qy) <= eps;
}

/** Punkt liegt innerhalb oder auf dem Rand des Polygons (Randpunkte zählen als gültig). */
function pointInsideOrOnPolygon(
  point: { x: number; y: number },
  vertices: { x: number; y: number }[]
): boolean {
  const n = vertices.length;
  if (n < 3) return false;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    if (pointOnSegment(point, vertices[j]!, vertices[i]!)) return true;
  }
  return pointInPolygon(point, vertices);
}
function pointStrictlyInsidePolygon(
  point: { x: number; y: number },
  vertices: { x: number; y: number }[]
): boolean {
  const n = vertices.length;
  if (n < 3) return false;
  const eps = 1e-4;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const vi = vertices[i]!;
    const vj = vertices[j]!;
    const dx = vj.x - vi.x;
    const dy = vj.y - vi.y;
    const t = Math.abs(dx) > Math.abs(dy) ? (point.x - vi.x) / dx : (point.y - vi.y) / dy;
    const onEdge = t >= -eps && t <= 1 + eps;
    if (onEdge) {
      const px = vi.x + t * dx;
      const py = vi.y + t * dy;
      if (Math.abs(point.x - px) < eps && Math.abs(point.y - py) < eps) return false;
    }
  }
  return pointInPolygon(point, vertices);
}

/** Punkt-in-Polygon (Strahl-Test). */
function pointInPolygon(
  point: { x: number; y: number },
  vertices: { x: number; y: number }[]
): boolean {
  const n = vertices.length;
  if (n < 3) return false;
  let inside = false;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = vertices[i]!.x,
      yi = vertices[i]!.y;
    const xj = vertices[j]!.x,
      yj = vertices[j]!.y;
    if (yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/** Prüft: Genau eine Option (A–D) hat denselben Fingerprint wie das Ziel; E ist Option 4. */
export function validateUniqueCorrectOption(task: FigureAssembleTask): boolean {
  const targetFp = polygonFingerprint(task.target);
  let matchCount = 0;
  for (let i = 0; i < 4; i++) {
    const opt = task.options[i];
    if (isOptionE(opt)) continue;
    if (polygonFingerprint(opt) === targetFp) matchCount++;
  }
  if (matchCount !== 1) return false;
  const correctOpt = task.options[task.correctIndex];
  if (task.correctIndex === 4) return isOptionE(correctOpt);
  return !isOptionE(correctOpt) && polygonFingerprint(correctOpt) === targetFp;
}

/** Prüft: Ziel und alle Polygon-Optionen (A–D) sind exakt die 14 SOLUTION_SHAPES. Keine Verzerrung. */
export function validateTaskUsesOnlyStrategyShapes(task: FigureAssembleTask): boolean {
  if (!isExactStrategyShape(task.target)) return false;
  for (let i = 0; i < 4; i++) {
    const opt = task.options[i];
    if (isOptionE(opt)) continue;
    if (!isExactStrategyShape(opt)) return false;
  }
  return true;
}

/** Vollständige Validierung (hart): Fläche, keine Überlappung, Teile in Ziel, Ziel in 14 Formen, eindeutige Lösung. */
export function validateFigurenTask(task: FigureAssembleTask): boolean {
  if (task.pieces.length < 2 || task.pieces.length > 7 || task.options.length !== 5) return false;
  if (task.targetShapeId != null && !TARGET_SHAPE_IDS.includes(task.targetShapeId)) return false;
  if (!validatePiecesMatchTarget(task.pieces, task.target)) return false;
  if (!validatePiecesNoOverlap(task.pieces)) return false;
  if (!validatePiecesInsideTarget(task.pieces, task.target)) return false;
  if (!validateUniqueCorrectOption(task)) return false;
  if (!validateTaskUsesOnlyStrategyShapes(task)) return false;
  if (task.correctIndex < 0 || task.correctIndex > 4) return false;
  return true;
}

// =============================================================================
// DISTRACTORS – nur exakte Formen aus den 14 Strategie-Formen
// =============================================================================
// Keine Skalierung, keine Verzerrung: Falsche Optionen = andere Formen aus der Liste.
// Korrekte Antwort = exakt die ursprüngliche Lösungsform (gleicher Fingerprint).

/** Kopie eines Polygons (exakte Geometrie, keine Änderung). */
function copyPolygon(poly: Polygon): Polygon {
  return { points: poly.points.map((p) => ({ x: p.x, y: p.y })) };
}

/** Erzeugt 3 Distraktoren: exakt 3 andere Formen aus ALLOWED_SOLUTION_SHAPES. */
function buildDistractors(
  target: Polygon,
  count: number,
  rng: () => number,
  _excludeFingerprint: string
): Polygon[] {
  const targetFp = polygonFingerprint(target);
  const others = ALLOWED_SOLUTION_SHAPES.filter((s) => polygonFingerprint(s) !== targetFp);
  const shuffled = [...others];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count).map((s) => copyPolygon(s));
}

// =============================================================================
// GENERATOR – Solution-first: Form wählen → exakt schneiden → exakt rekonstruieren
// =============================================================================
// Pipeline: Kandidat aus CUT_SCHEMES (nur 14 Strategie-Formen) → Validator → DuplicateGuard.
// Ziel und Optionen A–D sind ausschließlich exakte Geometrie aus den 14 Formen.

const OPTION_E = { isOptionE: true as const } as const;

function createRng(seed: number): () => number {
  let s = (((seed % 2147483646) + 2147483646) % 2147483646) + 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Schneidet die Zielform strategisch (vom Ziel aus). Nutzt erweiterte CutStrategies.
 */
export function cutPolygonStrategically(
  difficulty: FZDifficulty,
  seed: number
): { target: Polygon; pieces: Polygon[] } {
  const schemes = CUT_SCHEMES.filter((s) => s.diff === difficulty);
  if (schemes.length === 0) return cutSquareDiagonal();
  const idx = Math.floor(Math.abs(seed) % schemes.length);
  const { target, pieces } = schemes[idx]!.cut();
  return {
    target: { points: [...target.points] },
    pieces: pieces.map((p) => ({ points: [...p.points] })),
  };
}

/**
 * Generiert eine Trainingsaufgabe mit Validator und Duplikat-Schutz.
 * Bei „Schwer“: visuell unterschiedliche Formen, keine Dominanz von Quadrat/Raute/Trapez.
 */
export function generateFigurenTrainingTask(
  difficulty: FZDifficulty,
  seed: number
): FigureAssembleTask {
  const rng = createRng(seed);
  const maxAttempts = 20;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { target, pieces } = cutPolygonStrategically(difficulty, seed + attempt * 9973);
    if (!isAllowedTarget(target)) continue;
    const fp = taskFingerprint(target, pieces);
    if (duplicateGuardHas(fp)) continue;

    const distractors = buildDistractors(target, 3, rng, fp);
    const four: Polygon[] = [target, distractors[0]!, distractors[1]!, distractors[2]!];
    const order = [0, 1, 2, 3];
    for (let i = 3; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const correctIndex = order.indexOf(0);

    const options: [FigureOption, FigureOption, FigureOption, FigureOption, FigureOption] = [
      four[order[0]!]!,
      four[order[1]!]!,
      four[order[2]!]!,
      four[order[3]!]!,
      OPTION_E,
    ];

    const task: FigureAssembleTask = {
      id: `fz-train-${difficulty}-${seed}-${attempt}`,
      pieces,
      target,
      options,
      correctIndex,
      difficulty,
      explanation:
        correctIndex === 4
          ? `Keine der Figuren A–D ist korrekt. Die ${pieces.length} Teile ergeben eine andere Form.`
          : `Die ${pieces.length} Teile setzen sich exakt zur gewählten Figur zusammen.`,
      targetShapeId: getTargetShapeIdForPolygon(target),
      solutionOverlay: computeSolutionOverlay(target, pieces),
    };

    if (!validateFigurenTask(task)) continue;
    duplicateGuardAdd(fp);
    return task;
  }

  return generateFigurenTrainingTaskFallback(difficulty, seed + maxAttempts);
}

function generateFigurenTrainingTaskFallback(
  difficulty: FZDifficulty,
  seed: number
): FigureAssembleTask {
  const { target, pieces } = cutSquareDiagonal();
  const rng = createRng(seed);
  const similar = [RHOMBUS, TRAPEZ, PARALLELOGRAM];
  const four: Polygon[] = [target, similar[0]!, similar[1]!, similar[2]!];
  const order = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const correctIndex = order.indexOf(0);
  const task: FigureAssembleTask = {
    id: `fz-train-fb-${difficulty}-${seed}`,
    pieces,
    target,
    options: [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E],
    correctIndex,
    difficulty,
    explanation: `Die ${pieces.length} Teile setzen sich exakt zur gewählten Figur zusammen.`,
    targetShapeId: getTargetShapeIdForPolygon(target),
    solutionOverlay: computeSolutionOverlay(target, pieces),
  };
  if (validateFigurenTask(task)) return task;
  if (OFFICIAL_FZ_EXAMPLES.length > 0) {
    const first = OFFICIAL_FZ_EXAMPLES[0];
    if (first && validateFigurenTask(first))
      return { ...first, id: `fz-train-fb-official-${seed}` };
  }
  return task;
}

export function generateFigurenTrainingSet(
  count: number,
  difficulty: FZDifficulty,
  baseSeed: number = Date.now()
): FigureAssembleTask[] {
  const tasks: FigureAssembleTask[] = [];
  for (let i = 0; i < count; i++) {
    tasks.push(generateFigurenTrainingTask(difficulty, baseSeed + i * 7919));
  }
  return tasks;
}

// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – 1:1 aus IB_FZ_26.pdf
// =============================================================================

const SQUARE_PIECES_2: Polygon[] = (() => {
  const [p0, p1, p2, p3] = SQUARE.points;
  return [{ points: [p0, p1, p2] }, { points: [p0, p2, p3] }];
})();

const SQUARE_PIECES_4: Polygon[] = (() => {
  const pts = SQUARE.points;
  const c = centroid(SQUARE);
  return [
    { points: [{ ...c }, pts[0], pts[1]] },
    { points: [{ ...c }, pts[1], pts[2]] },
    { points: [{ ...c }, pts[2], pts[3]] },
    { points: [{ ...c }, pts[3], pts[0]] },
  ];
})();

export const OFFICIAL_FZ_EXAMPLES: readonly FigureAssembleTask[] = [
  {
    id: "fz-off-1",
    pieces: SQUARE_PIECES_2,
    target: SQUARE,
    options: [SQUARE, RHOMBUS, TRAPEZ, PARALLELOGRAM, OPTION_E],
    correctIndex: 0,
    difficulty: "easy",
    explanation:
      "Die zwei Dreiecke ergeben zusammengesetzt ein Quadrat. Die Diagonale verläuft von einer Ecke zur gegenüberliegenden.",
    source: "IB_FZ_26.pdf – Beispielaufgabe 1 (Platzhalter; aus PDF 1:1 übernehmen)",
  },
  {
    id: "fz-off-2",
    pieces: SQUARE_PIECES_4,
    target: SQUARE,
    options: [RHOMBUS, SQUARE, TRAPEZ, PARALLELOGRAM, OPTION_E],
    correctIndex: 1,
    difficulty: "easy",
    explanation:
      "Die vier Teile sind gleich große Dreiecke und setzen sich zu einem Quadrat zusammen.",
    source: "IB_FZ_26.pdf – Beispielaufgabe 2 (Platzhalter; aus PDF 1:1 übernehmen)",
  },
];

export function validateOfficialFZExamples(): string[] {
  const errors: string[] = [];
  if (OFFICIAL_FZ_EXAMPLES.length === 0) {
    errors.push("OFFICIAL_FZ_EXAMPLES fehlen – PDF-Beispiele nicht übernommen.");
  }
  OFFICIAL_FZ_EXAMPLES.forEach((task, i) => {
    if (task.pieces.length < 2) {
      errors.push(`Aufgabe ${i + 1} (${task.id}): pieces.length >= 2 erforderlich.`);
    }
    if (task.options.length !== 5) {
      errors.push(`Aufgabe ${i + 1} (${task.id}): options.length === 5 erforderlich.`);
    }
    if (task.correctIndex < 0 || task.correctIndex > 4) {
      errors.push(`Aufgabe ${i + 1} (${task.id}): correctIndex muss 0–4 sein.`);
    }
    const targetArea = polygonArea(task.target);
    const piecesArea = task.pieces.reduce((s, p) => s + polygonArea(p), 0);
    const tol = 1e-4;
    if (Math.abs(piecesArea - targetArea) > tol) {
      errors.push(
        `Aufgabe ${i + 1} (${task.id}): Fläche Teile (${piecesArea.toFixed(4)}) ≠ Ziel (${targetArea.toFixed(4)}).`
      );
    }
  });
  return errors;
}

if (typeof window !== "undefined" && import.meta.env?.DEV) {
  validateOfficialFZExamples().forEach((e) => console.warn("Figuren FZ:", e));
}
