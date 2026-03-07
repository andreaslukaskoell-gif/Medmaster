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

/** Offizielle Instruktion aus IB FZ 26.pdf */
export const OFFICIAL_FZ_INSTRUCTION = `Diese Aufgaben zeigen einfache geometrische Figuren (Kreis, Viertelkreis, Vieleck, Rechteck, Quadrat, Parallelogramm etc.), die in mehrere Teile zerschnitten wurden. Sie sollen herausfinden, welche der angeführten Figuren sich aus den jeweiligen Teilen zusammensetzen lässt. Dabei spielt das Größenverhältnis zwischen den Teilen und den Antwortfiguren keine Rolle. Die Teile müssen für den Vorgang des Zusammenfügens nicht gespiegelt werden.

Bitte beachten Sie, dass Sie für diese Aufgaben weder Hilfslinien oder -punkte einzeichnen, noch Zeichnungen oder Notizen anfertigen dürfen. Ihre Aufgabe besteht darin, die Figuren gedanklich zusammenzufügen.

Aufnahmeverfahren: 15 Aufgaben, 20 Minuten (Papier-Bleistift-Test).

Bei einigen Aufgaben kann es auch vorkommen, dass keine der Antwortmöglichkeiten A bis D richtig ist. In diesem Fall müssen Sie Antwortmöglichkeit E (Keine der Antwortmöglichkeiten ist richtig.) ankreuzen.`;

// ─── Kern-Hilfsfunktionen ─────────────────────────────────────────────────

const TAU = 2 * Math.PI;

function rd(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Rotate a polygon around its centroid by `angle` radians. */
function rotatePiece(poly: Polygon, angle: number): Polygon {
  if (Math.abs(angle) < 0.001) return poly;
  const cx = poly.points.reduce((s, p) => s + p.x, 0) / poly.points.length;
  const cy = poly.points.reduce((s, p) => s + p.y, 0) / poly.points.length;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    points: poly.points.map((p) => ({
      x: rd(cx + (p.x - cx) * cos - (p.y - cy) * sin),
      y: rd(cy + (p.x - cx) * sin + (p.y - cy) * cos),
    })),
  };
}

/** Pick a quantized rotation angle based on difficulty. */
function quantizedAngle(difficulty: FZDifficulty, rng: () => number): number {
  // Official examples show pieces rotated at various angles even in simple tasks
  const steps =
    difficulty === "easy"
      ? [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]
      : difficulty === "medium"
        ? [
            0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270,
            285, 300, 315, 330, 345,
          ]
        : Array.from({ length: 72 }, (_, i) => i * 5); // every 5 degrees
  return (steps[Math.floor(rng() * steps.length)] ?? 0) * (Math.PI / 180);
}

/** Rotate each piece by a random quantized angle for display (harder to visually match). */
function rotatePiecesForDisplay(
  pieces: Polygon[],
  difficulty: FZDifficulty,
  rng: () => number
): Polygon[] {
  return pieces.map((p) => rotatePiece(p, quantizedAngle(difficulty, rng)));
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

/** Bounding-Box eines Polygons (minX, minY, maxX, maxY, Breite, Höhe). */
export function polygonBBox(poly: Polygon): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
} {
  const pts = poly.points;
  if (pts.length === 0) return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
  let minX = pts[0]!.x;
  let minY = pts[0]!.y;
  let maxX = pts[0]!.x;
  let maxY = pts[0]!.y;
  for (const p of pts) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

/** Puzzleteile kompakt anordnen: eine ViewBox, Teile nebeneinander mit wenig Abstand (nicht weit verstreut). */
export function layoutPiecesCompact(pieces: Polygon[]): {
  viewBox: string;
  paths: { d: string; transform: string }[];
} {
  const gap = 10;
  const bboxes = pieces.map((p) => ({ poly: p, bbox: polygonBBox(p) }));
  let x = 0;
  const paths: { d: string; transform: string }[] = [];
  for (const { poly, bbox } of bboxes) {
    const tx = x - bbox.minX;
    const ty = -bbox.minY;
    paths.push({ d: polygonToPath(poly), transform: `translate(${tx},${ty})` });
    x += bbox.width + gap;
  }
  const totalWidth = x - gap;
  const maxHeight = Math.max(...bboxes.map((b) => b.bbox.height), 1);
  const padding = 8;
  return {
    viewBox: `0 0 ${totalWidth + padding * 2} ${maxHeight + padding * 2}`,
    paths: paths.map((p) => ({
      ...p,
      transform: `${p.transform} translate(${padding},${padding})`,
    })),
  };
}

/** Option einheitlich groß: Polygon in ViewBox (z. B. 200) zentrieren und einheitlich skalieren. */
export function polygonToPathScaledToViewBox(poly: Polygon, viewBoxSize: number = 200): string {
  const bbox = polygonBBox(poly);
  const w = bbox.width || 1;
  const h = bbox.height || 1;
  const cx = (bbox.minX + bbox.maxX) / 2;
  const cy = (bbox.minY + bbox.maxY) / 2;
  const margin = viewBoxSize * 0.1;
  const scale = (viewBoxSize - margin * 2) / Math.max(w, h);
  const tx = viewBoxSize / 2 - cx * scale;
  const ty = viewBoxSize / 2 - cy * scale;
  const pts = poly.points.map((p) => ({
    x: rd(p.x * scale + tx),
    y: rd(p.y * scale + ty),
  }));
  return "M " + pts.map((p) => `${p.x} ${p.y}`).join(" L ") + " Z";
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

/** Zielformen pro Schwierigkeit (nur die 14). Pools sind in CUT_SCHEMES pro difficulty hinterlegt. */

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

/** Quadrat: 5 Teile (Zentrum + 4 Kantenmitten → 4 Dreiecke + 1 Raute). */
function cutSquare5Hard(): CutResult {
  const [p0, p1, p2, p3] = SQUARE.points;
  const m01 = mid(p0, p1);
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  const m30 = mid(p3, p0);
  return {
    target: SQUARE,
    pieces: [
      { points: [p0, m01, m30] },
      { points: [m01, p1, m12] },
      { points: [m12, p2, m23] },
      { points: [m23, p3, m30] },
      { points: [m01, m12, m23, m30] },
    ],
  };
}

/** Dreieck: 4 Teile (Kantenmitten bilden inneres Dreieck + 3 äußere). */
function cutTriangle4Hard(): CutResult {
  const [p0, p1, p2] = TRIANGLE.points;
  const m01 = mid(p0, p1);
  const m12 = mid(p1, p2);
  const m20 = mid(p2, p0);
  return {
    target: TRIANGLE,
    pieces: [
      { points: [p0, m01, m20] },
      { points: [m01, p1, m12] },
      { points: [m20, m12, p2] },
      { points: [m01, m12, m20] },
    ],
  };
}

/** Parallelogramm: 4 Teile (zwei Diagonalschnitte durch Zentrum). */
function cutParallelogram4Hard(): CutResult {
  const [p0, p1, p2, p3] = PARALLELOGRAM.points;
  const c = centroid(PARALLELOGRAM);
  return {
    target: PARALLELOGRAM,
    pieces: [
      { points: [p0, p1, c] },
      { points: [p1, p2, c] },
      { points: [p2, p3, c] },
      { points: [p3, p0, c] },
    ],
  };
}

/** Raute: 4 Teile (vom Zentrum zu jeder Ecke). */
function cutRhombus4Hard(): CutResult {
  const [p0, p1, p2, p3] = RHOMBUS.points;
  const c = centroid(RHOMBUS);
  return {
    target: RHOMBUS,
    pieces: [
      { points: [c, p0, p1] },
      { points: [c, p1, p2] },
      { points: [c, p2, p3] },
      { points: [c, p3, p0] },
    ],
  };
}

/** Trapez: 4 Teile (zwei Diagonalen). */
function cutTrapez4Hard(): CutResult {
  const [p0, p1, p2, p3] = TRAPEZ.points;
  const c = centroid(TRAPEZ);
  return {
    target: TRAPEZ,
    pieces: [
      { points: [p0, p1, c] },
      { points: [p1, p2, c] },
      { points: [p2, p3, c] },
      { points: [p3, p0, c] },
    ],
  };
}

/** Achteck: 8 Teile (Zentrum zu jeder Ecke) – sehr schwer. */
function cutOctagon8Hard(): CutResult {
  const v = OCTAGON.points;
  const c = centroid(OCTAGON);
  return {
    target: OCTAGON,
    pieces: Array.from({ length: 8 }, (_, i) => ({
      points: [c, v[i], v[(i + 1) % 8]],
    })),
  };
}

/** L-Form: 5 Teile (Quadrate und Dreiecke). */
function cutLShape5Hard(): CutResult {
  return {
    target: L_SHAPE,
    pieces: [
      {
        points: [
          { x: 40, y: 50 },
          { x: 70, y: 50 },
          { x: 70, y: 75 },
          { x: 40, y: 75 },
        ],
      },
      {
        points: [
          { x: 70, y: 50 },
          { x: 100, y: 50 },
          { x: 100, y: 75 },
          { x: 70, y: 75 },
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
          { x: 40, y: 75 },
          { x: 100, y: 75 },
          { x: 100, y: 100 },
          { x: 40, y: 100 },
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

/** Pro Schema: Schwierigkeit, Zielform (für gleiche Häufigkeit aller 14 Formen), Schnitt. */
type CutScheme = { diff: FZDifficulty; shapeId: SolutionShapeName; cut: () => CutResult };

/** Schnitt-Schemata. Nur die 14 offiziellen Zielformen, 2–7 Teile. shapeId für ausgeglichene Verteilung. */
const CUT_SCHEMES: CutScheme[] = [
  // --- EASY: all 14 shapes, 2-3 pieces ---
  { diff: "easy", shapeId: "square", cut: cutSquareDiagonal },
  { diff: "easy", shapeId: "square", cut: cutSquareCenter4 },
  { diff: "easy", shapeId: "square", cut: cutSquare3 },
  { diff: "easy", shapeId: "triangle", cut: cutTriangleMedian },
  { diff: "easy", shapeId: "triangle", cut: cutTriangle3 },
  { diff: "easy", shapeId: "hexagon", cut: cutHexagon2 },
  { diff: "easy", shapeId: "rhombus", cut: cutRhombus2 },
  { diff: "easy", shapeId: "rhombus", cut: cutRhombus3 },
  { diff: "easy", shapeId: "parallelogram", cut: cutParallelogram2 },
  { diff: "easy", shapeId: "parallelogram", cut: cutParallelogram3 },
  { diff: "easy", shapeId: "trapezoid", cut: cutTrapez2 },
  { diff: "easy", shapeId: "trapezoid", cut: cutTrapez3 },
  { diff: "easy", shapeId: "pentagon", cut: cutPentagon3 },
  { diff: "easy", shapeId: "heptagon", cut: cutHeptagon4 },
  { diff: "easy", shapeId: "octagon", cut: cutOctagon4 },
  { diff: "easy", shapeId: "quarter-circle", cut: cutQuarterCircle2 },
  { diff: "easy", shapeId: "half-circle", cut: cutHalfCircle3 },
  { diff: "easy", shapeId: "three-quarter-circle", cut: cutThreeQuarterCircle3 },
  { diff: "easy", shapeId: "full-circle", cut: cutFullCircle4 },
  { diff: "easy", shapeId: "L-shape", cut: cutLShape4Simple },
  // --- MEDIUM: all 14 shapes, 3-4 pieces ---
  { diff: "medium", shapeId: "hexagon", cut: cutHexagon3 },
  { diff: "medium", shapeId: "pentagon", cut: cutPentagon3 },
  { diff: "medium", shapeId: "pentagon", cut: cutPentagon4 },
  { diff: "medium", shapeId: "square", cut: cutSquareOffset },
  { diff: "medium", shapeId: "square", cut: cutSquare3 },
  { diff: "medium", shapeId: "trapezoid", cut: cutTrapez2 },
  { diff: "medium", shapeId: "trapezoid", cut: cutTrapez3 },
  { diff: "medium", shapeId: "L-shape", cut: cutLShape4Simple },
  { diff: "medium", shapeId: "octagon", cut: cutOctagon4 },
  { diff: "medium", shapeId: "heptagon", cut: cutHeptagon4 },
  { diff: "medium", shapeId: "quarter-circle", cut: cutQuarterCircle2 },
  { diff: "medium", shapeId: "quarter-circle", cut: cutQuarterCircle3 },
  { diff: "medium", shapeId: "half-circle", cut: cutHalfCircle3 },
  { diff: "medium", shapeId: "half-circle", cut: cutHalfCircle4 },
  { diff: "medium", shapeId: "three-quarter-circle", cut: cutThreeQuarterCircle3 },
  { diff: "medium", shapeId: "three-quarter-circle", cut: cutThreeQuarterCircle4 },
  { diff: "medium", shapeId: "triangle", cut: cutTriangle3 },
  { diff: "medium", shapeId: "rhombus", cut: cutRhombus3 },
  { diff: "medium", shapeId: "parallelogram", cut: cutParallelogram3 },
  { diff: "medium", shapeId: "full-circle", cut: cutFullCircle4 },
  // --- HARD: all 14 shapes, 4-8 pieces ---
  { diff: "hard", shapeId: "hexagon", cut: cutHexagon6 },
  { diff: "hard", shapeId: "heptagon", cut: cutHeptagon7 },
  { diff: "hard", shapeId: "pentagon", cut: cutPentagon5 },
  { diff: "hard", shapeId: "full-circle", cut: cutFullCircle4 },
  { diff: "hard", shapeId: "full-circle", cut: cutFullCircle5 },
  { diff: "hard", shapeId: "full-circle", cut: cutFullCircle6 },
  { diff: "hard", shapeId: "square", cut: cutSquare5Hard },
  { diff: "hard", shapeId: "triangle", cut: cutTriangle4Hard },
  { diff: "hard", shapeId: "parallelogram", cut: cutParallelogram4Hard },
  { diff: "hard", shapeId: "rhombus", cut: cutRhombus4Hard },
  { diff: "hard", shapeId: "trapezoid", cut: cutTrapez4Hard },
  { diff: "hard", shapeId: "octagon", cut: cutOctagon8Hard },
  { diff: "hard", shapeId: "L-shape", cut: cutLShape5Hard },
  { diff: "hard", shapeId: "quarter-circle", cut: cutQuarterCircle3 },
  { diff: "hard", shapeId: "half-circle", cut: cutHalfCircle4 },
  { diff: "hard", shapeId: "three-quarter-circle", cut: cutThreeQuarterCircle4 },
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
// DISTRACTORS – ähnliche Formen wie offiziell (gleiche Formfamilie bevorzugt)
// =============================================================================
// Offizielles Prinzip: Distraktoren sind der richtigen Antwort ÄHNLICH.
// Halbkreis → Viertelkreis, Dreiviertelkreis, Vollkreis (nicht Siebeneck).
// Quadrat → Raute, Parallelogramm, Trapez (nicht L-Form).

/** Formfamilien: Distraktoren kommen bevorzugt aus derselben Familie. */
const SHAPE_FAMILIES: Record<string, Polygon[]> = {
  circles: [QUARTER_CIRCLE, HALF_CIRCLE, THREE_QUARTER_CIRCLE, FULL_CIRCLE],
  quads: [SQUARE, RHOMBUS, PARALLELOGRAM, TRAPEZ],
  polygons: [PENTAGON, HEXAGON, HEPTAGON, OCTAGON],
  triangle: [TRIANGLE],
  lshape: [L_SHAPE],
};

/** Findet die Familie einer Form. */
function getShapeFamily(poly: Polygon): string {
  const fp = polygonFingerprint(poly);
  for (const [family, shapes] of Object.entries(SHAPE_FAMILIES)) {
    if (shapes.some((s) => polygonFingerprint(s) === fp)) return family;
  }
  return "unknown";
}

/** Kopie eines Polygons (exakte Geometrie, keine Änderung). */
function copyPolygon(poly: Polygon): Polygon {
  return { points: poly.points.map((p) => ({ x: p.x, y: p.y })) };
}

/** Fisher-Yates shuffle (in-place). */
function shuffleArray<T>(arr: T[], rng: () => number): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

/**
 * Erzeugt 3 Distraktoren: bevorzugt aus derselben Formfamilie, dann auffüllen.
 * Offizielles Prinzip: Wenn Antwort = Halbkreis → Distraktoren = Viertelkreis, 3/4-Kreis, Vollkreis.
 * Wenn Antwort = Quadrat → Distraktoren = Raute, Parallelogramm, Trapez.
 */
function buildDistractors(
  target: Polygon,
  count: number,
  rng: () => number,
  _excludeFingerprint: string
): Polygon[] {
  void _excludeFingerprint;
  const targetFp = polygonFingerprint(target);
  const family = getShapeFamily(target);

  // 1. Formen aus gleicher Familie (ohne die richtige Antwort)
  const sameFamily = (SHAPE_FAMILIES[family] ?? []).filter(
    (s) => polygonFingerprint(s) !== targetFp
  );
  shuffleArray(sameFamily, rng);

  // 2. Formen aus benachbarter Familie (quads↔polygons, circles↔lshape)
  // Rund bleibt bei rund, eckig bei eckig — kein Mischen.
  const neighborMap: Record<string, string[]> = {
    circles: [],
    quads: ["polygons", "triangle", "lshape"],
    polygons: ["quads", "triangle", "lshape"],
    triangle: ["quads", "polygons", "lshape"],
    lshape: ["quads", "polygons", "triangle"],
  };
  const neighborFamilies = neighborMap[family] ?? [];
  const neighbors: Polygon[] = [];
  for (const nf of neighborFamilies) {
    for (const s of SHAPE_FAMILIES[nf] ?? []) {
      if (polygonFingerprint(s) !== targetFp) neighbors.push(s);
    }
  }
  shuffleArray(neighbors, rng);

  // 3. Rest (alle anderen)
  const rest = ALLOWED_SOLUTION_SHAPES.filter(
    (s) =>
      polygonFingerprint(s) !== targetFp &&
      !sameFamily.some((f) => polygonFingerprint(f) === polygonFingerprint(s)) &&
      !neighbors.some((f) => polygonFingerprint(f) === polygonFingerprint(s))
  );
  shuffleArray(rest, rng);

  // Priorität: gleiche Familie → Nachbarn → Rest
  const pool = [...sameFamily, ...neighbors, ...rest];
  return pool.slice(0, count).map((s) => copyPolygon(s));
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

// =============================================================================
// ASYMMETRIC CUT SYSTEM – authentisch aussehende Schnitte (wie IB_FZ_26.pdf)
// =============================================================================

type Pt2 = { x: number; y: number };

/** Schnittpunkt einer Kante (p1→p2) mit einer unendlichen Linie (lA→lB). Gibt t ∈ [0,1] zurück oder null. */
function lineSegmentIntersection(
  p1: Pt2,
  p2: Pt2,
  lA: Pt2,
  lB: Pt2
): { point: Pt2; t: number } | null {
  const dx = p2.x - p1.x,
    dy = p2.y - p1.y;
  const lx = lB.x - lA.x,
    ly = lB.y - lA.y;
  const denom = dx * ly - dy * lx;
  if (Math.abs(denom) < 1e-10) return null; // parallel
  const t = ((lA.x - p1.x) * ly - (lA.y - p1.y) * lx) / denom;
  if (t < -1e-8 || t > 1 + 1e-8) return null; // outside segment
  const tClamped = Math.max(0, Math.min(1, t));
  return {
    point: { x: rd(p1.x + tClamped * dx), y: rd(p1.y + tClamped * dy) },
    t: tClamped,
  };
}

/** Teilt ein Polygon entlang einer Linie (lA→lB) in zwei Hälften. Gibt null zurück bei ungültiger Geometrie. */
function splitPolygonByLine(poly: Polygon, lA: Pt2, lB: Pt2): [Polygon, Polygon] | null {
  const pts = poly.points;
  const n = pts.length;
  // Find exactly 2 intersection points with polygon edges
  const hits: { edgeIdx: number; point: Pt2; t: number }[] = [];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const hit = lineSegmentIntersection(pts[i], pts[j], lA, lB);
    if (hit) {
      // Avoid duplicate hits at shared vertices (t≈0 means start of next edge)
      if (hits.length > 0) {
        const last = hits[hits.length - 1]!;
        const dx = hit.point.x - last.point.x;
        const dy = hit.point.y - last.point.y;
        if (Math.hypot(dx, dy) < 0.5) continue;
      }
      hits.push({ edgeIdx: i, point: hit.point, t: hit.t });
    }
  }
  if (hits.length !== 2) return null; // concave or tangent → reject

  const [h0, h1] = [hits[0]!, hits[1]!];
  // Build two sub-polygons by walking the edges
  const sideA: Pt2[] = [h0.point];
  const sideB: Pt2[] = [h1.point];

  // Walk from h0 to h1 (forward)
  let i = (h0.edgeIdx + 1) % n;
  const endA = (h1.edgeIdx + 1) % n;
  while (i !== endA) {
    sideA.push({ ...pts[i] });
    i = (i + 1) % n;
  }
  sideA.push(h1.point);

  // Walk from h1 to h0 (forward)
  i = (h1.edgeIdx + 1) % n;
  const endB = (h0.edgeIdx + 1) % n;
  while (i !== endB) {
    sideB.push({ ...pts[i] });
    i = (i + 1) % n;
  }
  sideB.push(h0.point);

  if (sideA.length < 3 || sideB.length < 3) return null;
  return [{ points: sideA }, { points: sideB }];
}

/** Erzeugt eine asymmetrische Schnittlinie durch das Polygon: 2 nicht-benachbarte Kanten, off-center t-Werte. */
function generateAsymmetricCut(poly: Polygon, rng: () => number): [Pt2, Pt2] | null {
  const n = poly.points.length;
  if (n < 3) return null;

  for (let attempt = 0; attempt < 30; attempt++) {
    // Pick two different, non-adjacent edges
    const e1 = Math.floor(rng() * n);
    let e2: number;
    if (n <= 4) {
      // For triangles/quads: just pick any other non-adjacent edge
      e2 = (e1 + 2) % n;
      if (n === 3) e2 = (e1 + 1 + Math.floor(rng() * 2)) % n; // any other edge for triangle
    } else {
      const minGap = 2;
      e2 = (e1 + minGap + Math.floor(rng() * (n - 2 * minGap + 1))) % n;
    }
    if (e2 === e1 || e2 === (e1 + 1) % n || (n > 3 && e1 === (e2 + 1) % n)) continue;

    // t-values: wide range [0.1, 0.9], only avoid exact midpoint 0.5
    const pickT = () => {
      const t = 0.1 + rng() * 0.8;
      return Math.abs(t - 0.5) < 0.04 ? t + 0.06 : t;
    };
    const t1 = pickT();
    const t2 = pickT();

    const pts = poly.points;
    const p1: Pt2 = {
      x: rd(pts[e1].x + t1 * (pts[(e1 + 1) % n].x - pts[e1].x)),
      y: rd(pts[e1].y + t1 * (pts[(e1 + 1) % n].y - pts[e1].y)),
    };
    const p2: Pt2 = {
      x: rd(pts[e2].x + t2 * (pts[(e2 + 1) % n].x - pts[e2].x)),
      y: rd(pts[e2].y + t2 * (pts[(e2 + 1) % n].y - pts[e2].y)),
    };

    // Reject if line passes through centroid (>15% distance from center)
    const c = centroid(poly);
    const lineLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    if (lineLen < 1) continue;
    const dist = Math.abs((p2.x - p1.x) * (p1.y - c.y) - (p1.x - c.x) * (p2.y - p1.y)) / lineLen;
    const bbox = polygonBBox(poly);
    const diagLen = Math.hypot(bbox.width, bbox.height);
    if (dist < diagLen * 0.06) continue; // only reject if cutting right through center

    return [p1, p2];
  }
  return null;
}

// =============================================================================
// COMPLEX CUT SYSTEM – Zickzack, Stufen, Kerben (wie im echten MedAT IB FZ 26)
// =============================================================================
// Im offiziellen IB sind Schnitte oft NICHT gerade: Zickzack, Treppenformen,
// Einbuchtungen/Kerben erzeugen konkave Stücke – ein Kernaspekt der Schwierigkeit.

type CutStyle = "straight" | "zigzag" | "step" | "notch" | "lshaped" | "curved";

/** Erzeugt Zwischenpunkte entlang einer geraden Schnittlinie als Zickzack. */
function zigzagPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  // Normal vector (perpendicular to cut direction)
  const nx = -dy / len;
  const ny = dx / len;

  const numZigs = 2 + Math.floor(rng() * 2); // 2-3 zigzags
  const amplitude = len * (0.06 + rng() * 0.08); // 6-14% of cut length
  const points: Pt2[] = [p1];

  for (let i = 1; i <= numZigs * 2; i++) {
    const t = i / (numZigs * 2 + 1);
    const side = i % 2 === 1 ? 1 : -1;
    points.push({
      x: rd(p1.x + t * dx + side * amplitude * nx),
      y: rd(p1.y + t * dy + side * amplitude * ny),
    });
  }
  points.push(p2);
  return points;
}

/** Erzeugt Zwischenpunkte als Treppenform (rechtwinklige Stufen). */
function stepPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  const nx = -dy / len;
  const ny = dx / len;

  const numSteps = 1 + Math.floor(rng() * 2); // 1-2 steps
  const stepDepth = len * (0.08 + rng() * 0.1); // 8-18% of cut length
  const points: Pt2[] = [p1];

  for (let i = 0; i < numSteps; i++) {
    const t1 = (i + 0.3 + rng() * 0.15) / (numSteps + 1);
    const t2 = (i + 0.55 + rng() * 0.15) / (numSteps + 1);
    const side = i % 2 === 0 ? 1 : -1;
    // Step out perpendicular
    points.push({
      x: rd(p1.x + t1 * dx),
      y: rd(p1.y + t1 * dy),
    });
    points.push({
      x: rd(p1.x + t1 * dx + side * stepDepth * nx),
      y: rd(p1.y + t1 * dy + side * stepDepth * ny),
    });
    points.push({
      x: rd(p1.x + t2 * dx + side * stepDepth * nx),
      y: rd(p1.y + t2 * dy + side * stepDepth * ny),
    });
    points.push({
      x: rd(p1.x + t2 * dx),
      y: rd(p1.y + t2 * dy),
    });
  }
  points.push(p2);
  return points;
}

/** Erzeugt eine Kerbe (Notch) – eine einzelne Einbuchtung in der Schnittlinie. */
function notchPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  const nx = -dy / len;
  const ny = dx / len;

  const notchPos = 0.3 + rng() * 0.4; // 30-70% along the cut
  const notchWidth = 0.08 + rng() * 0.06; // 8-14% of cut length (as fraction)
  const notchDepth = len * (0.1 + rng() * 0.1); // 10-20% of cut length
  const side = rng() > 0.5 ? 1 : -1;

  const t1 = notchPos - notchWidth;
  const t2 = notchPos + notchWidth;

  return [
    p1,
    { x: rd(p1.x + t1 * dx), y: rd(p1.y + t1 * dy) },
    {
      x: rd(p1.x + t1 * dx + side * notchDepth * nx),
      y: rd(p1.y + t1 * dy + side * notchDepth * ny),
    },
    {
      x: rd(p1.x + t2 * dx + side * notchDepth * nx),
      y: rd(p1.y + t2 * dy + side * notchDepth * ny),
    },
    { x: rd(p1.x + t2 * dx), y: rd(p1.y + t2 * dy) },
    p2,
  ];
}

/** Erzeugt einen L-förmigen / gestuften Schnitt: Statt einer geraden Linie geht der Schnitt
 *  erst senkrecht zur Hauptrichtung, dann parallel, dann zurück – wie eine Treppenstufe.
 *  Unterscheidet sich von stepPath dadurch, dass der gesamte Pfad eine L-Form bildet,
 *  statt Bumps auf einer geraden Linie zu setzen. */
function lshapedPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  // Unit direction and normal vectors
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;

  const numSteps = 1 + Math.floor(rng() * 3); // 1-3 L-shaped steps
  const points: Pt2[] = [p1];

  // Divide the path into numSteps+1 segments and insert L-shaped detours
  for (let s = 0; s < numSteps; s++) {
    // Position along the main line where the step occurs
    const tStart = (s + 0.25 + rng() * 0.2) / (numSteps + 1);
    const tEnd = (s + 0.55 + rng() * 0.2) / (numSteps + 1);
    // Perpendicular offset (alternating sides, 8-16% of cut length)
    const offset = len * (0.08 + rng() * 0.08) * (s % 2 === 0 ? 1 : -1);

    // Point on the main line at tStart
    const ax = p1.x + tStart * dx;
    const ay = p1.y + tStart * dy;
    // Step perpendicular
    const bx = ax + offset * nx;
    const by = ay + offset * ny;
    // Move along direction while staying offset
    const cx = p1.x + tEnd * dx + offset * nx;
    const cy = p1.y + tEnd * dy + offset * ny;
    // Step back to main line
    const ex = p1.x + tEnd * dx;
    const ey = p1.y + tEnd * dy;

    points.push({ x: rd(ax), y: rd(ay) });
    points.push({ x: rd(bx), y: rd(by) });
    points.push({ x: rd(cx), y: rd(cy) });
    points.push({ x: rd(ex), y: rd(ey) });
  }
  points.push(p2);
  return points;
}

/** Erzeugt eine sanft geschwungene Schnittlinie (quadratische Bézier-Approximation).
 *  Sampelt 5-7 Punkte entlang der Kurve für eine glatte Polyline. */
function curvedPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  // Normal vector
  const nx = -dy / len;
  const ny = dx / len;

  // Control point: midpoint offset perpendicular by 10-25% of cut length
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const curveOffset = len * (0.1 + rng() * 0.15) * (rng() > 0.5 ? 1 : -1);
  const ctrlX = midX + curveOffset * nx;
  const ctrlY = midY + curveOffset * ny;

  // Sample quadratic Bezier: B(t) = (1-t)²·P1 + 2(1-t)t·Ctrl + t²·P2
  const numSamples = 5 + Math.floor(rng() * 3); // 5-7 interior points
  const points: Pt2[] = [p1];

  for (let i = 1; i <= numSamples; i++) {
    const t = i / (numSamples + 1);
    const mt = 1 - t;
    points.push({
      x: rd(mt * mt * p1.x + 2 * mt * t * ctrlX + t * t * p2.x),
      y: rd(mt * mt * p1.y + 2 * mt * t * ctrlY + t * t * p2.y),
    });
  }
  points.push(p2);
  return points;
}

/** Wählt einen Schnittstil basierend auf Schwierigkeit. Easy = gerade, Medium/Hard = komplex. */
function pickCutStyle(difficulty: FZDifficulty, rng: () => number): CutStyle {
  if (difficulty === "easy") return "straight";
  const r = rng();
  if (difficulty === "medium") {
    // 30% straight, 15% zigzag, 15% step, 10% notch, 15% lshaped, 15% curved
    if (r < 0.3) return "straight";
    if (r < 0.45) return "zigzag";
    if (r < 0.6) return "step";
    if (r < 0.7) return "notch";
    if (r < 0.85) return "lshaped";
    return "curved";
  }
  // hard: 10% straight, 20% zigzag, 20% step, 15% notch, 20% lshaped, 15% curved
  if (r < 0.1) return "straight";
  if (r < 0.3) return "zigzag";
  if (r < 0.5) return "step";
  if (r < 0.65) return "notch";
  if (r < 0.85) return "lshaped";
  return "curved";
}

/** Erzeugt eine Polyline zwischen zwei Punkten basierend auf dem Schnittstil. */
function complexCutPath(p1: Pt2, p2: Pt2, style: CutStyle, rng: () => number): Pt2[] {
  switch (style) {
    case "zigzag":
      return zigzagPath(p1, p2, rng);
    case "step":
      return stepPath(p1, p2, rng);
    case "notch":
      return notchPath(p1, p2, rng);
    case "lshaped":
      return lshapedPath(p1, p2, rng);
    case "curved":
      return curvedPath(p1, p2, rng);
    default:
      return [p1, p2];
  }
}

/**
 * Teilt ein Polygon entlang einer Polyline (mehrere Punkte).
 * Die Polyline muss von einer Kante zu einer anderen gehen (Start/Ende auf Kanten).
 * Erzeugt zwei Sub-Polygone, eines auf jeder Seite.
 */
function splitPolygonByPolyline(poly: Polygon, cutPoints: Pt2[]): [Polygon, Polygon] | null {
  if (cutPoints.length < 2) return null;
  // For just 2 points, use the existing straight-line splitter
  if (cutPoints.length === 2) {
    return splitPolygonByLine(poly, cutPoints[0], cutPoints[1]);
  }

  const pts = poly.points;
  const n = pts.length;
  const startPt = cutPoints[0];
  const endPt = cutPoints[cutPoints.length - 1];

  // Find which edges the start and end points lie on
  let startEdge = -1;
  let endEdge = -1;
  const tolerance = 1.0;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    if (pointOnSegment(startPt, pts[i], pts[j], tolerance) && startEdge < 0) startEdge = i;
    if (pointOnSegment(endPt, pts[i], pts[j], tolerance) && endEdge < 0) endEdge = i;
  }

  if (startEdge < 0 || endEdge < 0 || startEdge === endEdge) return null;

  // Build side A: walk from startPt along polygon edges to endPt, then back via cut polyline (reversed)
  const sideA: Pt2[] = [startPt];
  let i = (startEdge + 1) % n;
  const endNext = (endEdge + 1) % n;
  let safety = 0;
  while (i !== endNext && safety++ < n + 2) {
    sideA.push({ ...pts[i] });
    i = (i + 1) % n;
  }
  sideA.push(endPt);
  // Add reversed cut polyline (without first and last which are already added)
  for (let k = cutPoints.length - 2; k >= 1; k--) {
    sideA.push(cutPoints[k]);
  }

  // Build side B: walk from endPt along polygon edges to startPt, then forward via cut polyline
  const sideB: Pt2[] = [endPt];
  i = (endEdge + 1) % n;
  const startNext = (startEdge + 1) % n;
  safety = 0;
  while (i !== startNext && safety++ < n + 2) {
    sideB.push({ ...pts[i] });
    i = (i + 1) % n;
  }
  sideB.push(startPt);
  // Add forward cut polyline (without first and last)
  for (let k = 1; k < cutPoints.length - 1; k++) {
    sideB.push(cutPoints[k]);
  }

  if (sideA.length < 3 || sideB.length < 3) return null;
  return [{ points: sideA }, { points: sideB }];
}

/** Mehrere asymmetrische Schnitte nacheinander: Immer das größte Stück schneiden. */
function applyAsymmetricCuts(
  target: Polygon,
  numCuts: number,
  rng: () => number,
  difficulty: FZDifficulty = "easy"
): Polygon[] | null {
  const pieces: Polygon[] = [{ points: target.points.map((p) => ({ ...p })) }];
  const targetArea = polygonArea(target);
  const minPieceArea = targetArea * 0.05; // min 5% per piece

  let successfulCuts = 0;
  for (
    let totalAttempts = 0;
    totalAttempts < numCuts * 4 && successfulCuts < numCuts;
    totalAttempts++
  ) {
    // Find largest piece
    let maxIdx = 0,
      maxArea = 0;
    for (let i = 0; i < pieces.length; i++) {
      const a = polygonArea(pieces[i]);
      if (a > maxArea) {
        maxArea = a;
        maxIdx = i;
      }
    }
    const largest = pieces[maxIdx];
    const cutLine = generateAsymmetricCut(largest, rng);
    if (!cutLine) continue;

    // Choose cut style based on difficulty (medium/hard → zigzag/step/notch cuts)
    const style = pickCutStyle(difficulty, rng);
    const cutPath = complexCutPath(cutLine[0], cutLine[1], style, rng);

    // Try complex polyline split first, fallback to straight line
    let result: [Polygon, Polygon] | null = null;
    if (cutPath.length > 2) {
      result = splitPolygonByPolyline(largest, cutPath);
    }
    if (!result) {
      result = splitPolygonByLine(largest, cutLine[0], cutLine[1]);
    }
    if (!result) continue;

    const [a, b] = result;
    if (polygonArea(a) < minPieceArea || polygonArea(b) < minPieceArea) continue;

    pieces.splice(maxIdx, 1, a, b);
    successfulCuts++;
  }

  // Validate: we need at least the expected number of pieces
  if (pieces.length < 2) return null;

  // Authenticity check: reject if pieces are too equally sized (45-55% split for 2 pieces)
  if (pieces.length === 2) {
    const a1 = polygonArea(pieces[0]);
    const a2 = polygonArea(pieces[1]);
    const ratio = Math.min(a1, a2) / Math.max(a1, a2);
    if (ratio > 0.95) return null; // only reject near-identical halves
  }

  // For medium/hard: largest piece should be >= 1.5× smallest
  if (pieces.length >= 3) {
    const areas = pieces.map((p) => polygonArea(p));
    const maxA = Math.max(...areas);
    const minA = Math.min(...areas);
    if (minA > 0 && maxA / minA < 1.5) return null; // too uniform
  }

  return pieces;
}

/** Anzahl Schnitte pro Schwierigkeitsstufe. */
function numCutsForDifficulty(diff: FZDifficulty, rng: () => number): number {
  if (diff === "easy") return 1 + Math.floor(rng() * 2); // 1-2 cuts → 2-3 pieces
  if (diff === "medium") return 2 + Math.floor(rng() * 2); // 2-3 cuts → 3-4 pieces
  return 4 + Math.floor(rng() * 3); // 4-6 cuts → 5-7 pieces
}

/**
 * Schneidet die Zielform strategisch (vom Ziel aus).
 * Primär: asymmetrische Schnitte (authentisch). Fallback: alte CUT_SCHEMES.
 */
export function cutPolygonStrategically(
  difficulty: FZDifficulty,
  seed: number,
  forcedShapeIdx?: number
): { target: Polygon; pieces: Polygon[] } {
  const rng = createRng(seed);
  const shapeIndex =
    forcedShapeIdx != null
      ? forcedShapeIdx % SOLUTION_SHAPES.length
      : Math.floor(rng() * SOLUTION_SHAPES.length);
  const target = { points: OFFICIAL_TARGET_POLYGONS[shapeIndex].points.map((p) => ({ ...p })) };

  // Try asymmetric cuts first (authentic look, with complex cuts for medium/hard)
  const nCuts = numCutsForDifficulty(difficulty, rng);
  const asymPieces = applyAsymmetricCuts(target, nCuts, rng, difficulty);
  if (asymPieces && asymPieces.length >= 2) {
    const totalArea = asymPieces.reduce((s, p) => s + polygonArea(p), 0);
    const targetArea = polygonArea(target);
    if (Math.abs(totalArea - targetArea) < 1e-4) {
      return { target, pieces: asymPieces };
    }
  }

  // Fallback: CUT_SCHEMES — always keep the SAME shape, search across difficulties if needed
  const shapeId = SOLUTION_SHAPES[shapeIndex]!;
  const sameShapeSameDiff = CUT_SCHEMES.filter(
    (s) => s.diff === difficulty && s.shapeId === shapeId
  );
  const sameShapeAnyDiff = CUT_SCHEMES.filter((s) => s.shapeId === shapeId);
  const list = sameShapeSameDiff.length > 0 ? sameShapeSameDiff : sameShapeAnyDiff;
  if (list.length === 0) {
    // No CUT_SCHEME for this shape at all — simple straight cut through the selected target
    const fallbackRng = createRng(seed + 77777);
    const cutLine = generateAsymmetricCut(
      { points: target.points.map((p) => ({ ...p })) },
      fallbackRng
    );
    if (cutLine) {
      const result = splitPolygonByLine(
        { points: target.points.map((p) => ({ ...p })) },
        cutLine[0],
        cutLine[1]
      );
      if (result) return { target, pieces: result };
    }
    return cutSquareDiagonal();
  }
  const rawIdx = Math.floor(rng() * list.length);
  const entry = list[rawIdx];
  if (!entry?.cut) return cutSquareDiagonal();
  const { target: t, pieces: p } = entry.cut();
  return {
    target: { points: [...t.points] },
    pieces: p.map((pp) => ({ points: [...pp.points] })),
  };
}

/**
 * Generiert eine Trainingsaufgabe mit Validator und Duplikat-Schutz.
 * Bei „Schwer“: visuell unterschiedliche Formen, keine Dominanz von Quadrat/Raute/Trapez.
 */
export function generateFigurenTrainingTask(
  difficulty: FZDifficulty,
  seed: number,
  forcedShapeIdx?: number
): FigureAssembleTask {
  const rng = createRng(seed);
  const maxAttempts = 20;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { target, pieces } = cutPolygonStrategically(
      difficulty,
      seed + attempt * 9973,
      forcedShapeIdx
    );
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

    // Validate with ORIGINAL (unrotated) pieces — rotation changes coordinates
    const validationTask: FigureAssembleTask = {
      id: `fz-train-${difficulty}-${seed}-${attempt}`,
      pieces,
      target,
      options,
      correctIndex,
      difficulty,
      explanation: "",
      targetShapeId: getTargetShapeIdForPolygon(target),
      solutionOverlay: computeSolutionOverlay(target, pieces),
    };

    if (!validateFigurenTask(validationTask)) continue;

    // Rotate pieces AFTER validation for display
    const displayPieces = rotatePiecesForDisplay(pieces, difficulty, rng);

    const task: FigureAssembleTask = {
      ...validationTask,
      pieces: displayPieces,
      explanation:
        correctIndex === 4
          ? `Keine der Figuren A–D ist korrekt. Die ${pieces.length} Teile ergeben eine andere Form.`
          : `Die ${pieces.length} Teile setzen sich exakt zur gewählten Figur zusammen.`,
    };
    duplicateGuardAdd(fp);
    return task;
  }

  return generateFigurenTrainingTaskFallback(difficulty, seed + maxAttempts);
}

function generateFigurenTrainingTaskFallback(
  difficulty: FZDifficulty,
  seed: number
): FigureAssembleTask {
  const rng = createRng(seed);

  // Pick a RANDOM CUT_SCHEME — prefer same difficulty, fall back to any
  const sameDiff = CUT_SCHEMES.filter((s) => s.diff === difficulty);
  const pool = sameDiff.length > 0 ? sameDiff : CUT_SCHEMES;
  const scheme = pool[Math.floor(rng() * pool.length)]!;
  const { target, pieces } = scheme.cut();

  const distractors = buildDistractors(target, 3, rng, "");
  const four: Polygon[] = [target, distractors[0]!, distractors[1]!, distractors[2]!];
  const order = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const correctIndex = order.indexOf(0);
  const displayPieces = rotatePiecesForDisplay(pieces, difficulty, rng);
  const task: FigureAssembleTask = {
    id: `fz-train-fb-${difficulty}-${seed}`,
    pieces: displayPieces,
    target,
    options: [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E],
    correctIndex,
    difficulty,
    explanation: `Die ${pieces.length} Teile setzen sich exakt zur gewählten Figur zusammen.`,
    targetShapeId: getTargetShapeIdForPolygon(target),
    solutionOverlay: computeSolutionOverlay(target, pieces),
  };
  return task;
}

export function generateFigurenTrainingSet(
  count: number,
  difficulty: FZDifficulty,
  baseSeed: number = Date.now()
): FigureAssembleTask[] {
  const tasks: FigureAssembleTask[] = [];
  // Ensure all 14 shapes appear: cycle through shapes round-robin
  for (let i = 0; i < count; i++) {
    const forcedShapeIdx = i % SOLUTION_SHAPES.length;
    tasks.push(generateFigurenTrainingTask(difficulty, baseSeed + i * 7919, forcedShapeIdx));
  }
  // Shuffle so shapes don't appear in predictable order
  const rng = createRng(baseSeed);
  for (let i = tasks.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [tasks[i], tasks[j]] = [tasks[j]!, tasks[i]!];
  }
  return tasks;
}

// =============================================================================
// OFFIZIELLE BEISPIELAUFGABEN – 1:1 aus IB_FZ_26.pdf
// =============================================================================

// Offizielle Beispiele – Strukturen nach IB_FZ_26.pdf
// Geometrie approximiert, Distraktoren nach offiziellem Muster (ähnliche Formen).

/* eslint-disable @typescript-eslint/no-unused-vars */
const PENTAGON_PIECES_2: Polygon[] = (() => {
  const pts = PENTAGON.points;
  // Diagonale von Ecke 0 zu Ecke 2
  return [{ points: [pts[0], pts[1], pts[2]] }, { points: [pts[0], pts[2], pts[3], pts[4]] }];
})();

const HEXAGON_PIECES_3: Polygon[] = (() => {
  const pts = HEXAGON.points;
  const c = centroid(HEXAGON);
  return [
    { points: [{ ...c }, pts[0], pts[1], pts[2]] },
    { points: [{ ...c }, pts[2], pts[3], pts[4]] },
    { points: [{ ...c }, pts[4], pts[5], pts[0]] },
  ];
})();

const SQUARE_PIECES_DIAGONAL: Polygon[] = (() => {
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

const TRIANGLE_PIECES_3: Polygon[] = (() => {
  const pts = TRIANGLE.points;
  const m01 = mid(pts[0], pts[1]);
  const m12 = mid(pts[1], pts[2]);
  const m20 = mid(pts[2], pts[0]);
  return [
    { points: [pts[0], m01, m20] },
    { points: [m01, pts[1], m12] },
    { points: [m20, m12, pts[2]] },
  ];
})();

/** @deprecated Official examples removed (copyright). Use generator-based training only. */
export const OFFICIAL_FZ_EXAMPLES: readonly FigureAssembleTask[] = [];

/** @deprecated No longer needed since official examples were removed. */
export function validateOfficialFZExamples(): string[] {
  return [];
}

// ─── Compat exports (migrated from figurenGenerator.ts) ──────────────

/** Offizielles MedAT-Hellblau (IB FZ 26): einheitlich cyan, kein Rand. */
export const FILL = "#7EC8E3";

/** Deutsche Schwierigkeitsbezeichnung. Akzeptiert auch englische Level-Werte. */
export function difficultyLabel(
  level: FZDifficulty | "leicht" | "mittel" | "schwer"
): "leicht" | "mittel" | "schwer" {
  if (level === "leicht" || level === "mittel" || level === "schwer") return level;
  return level === "easy" ? "leicht" : level === "medium" ? "mittel" : "schwer";
}

/** Für Strategie-View: alle 14 Lösungsfiguren mit SVG-Pfad und deutschem Anzeigename. */
export const FIGURE_STRATEGY_GALLERY: { key: string; path: string; name: string }[] = (() => {
  const names: Record<string, string> = {
    triangle: "ein gleichseitiges Dreieck",
    square: "ein Quadrat",
    rhombus: "eine Raute",
    parallelogram: "ein Parallelogramm",
    trapezoid: "ein Trapez",
    pentagon: "ein regelmäßiges Fünfeck",
    hexagon: "ein regelmäßiges Sechseck",
    heptagon: "ein regelmäßiges Siebeneck",
    octagon: "ein regelmäßiges Achteck",
    "quarter-circle": "einen Viertelkreis",
    "half-circle": "einen Halbkreis",
    "three-quarter-circle": "einen Dreiviertelkreis",
    "full-circle": "einen Vollkreis",
    "L-shape": "eine L-Form",
  };
  return SOLUTION_SHAPES.map((key, i) => ({
    key,
    path: polygonToPath(OFFICIAL_TARGET_POLYGONS[i]),
    name: names[key] ?? key,
  }));
})();
