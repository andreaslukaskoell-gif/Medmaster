/**
 * KFF „Figuren zusammensetzen“ – MedAT.
 *
 * 15 offizielle Zielformen: gleichseitiges Dreieck, Quadrat, Rechteck, Raute, Parallelogramm,
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
  const first = pts[0] as { x: number; y: number };
  let minX = first.x;
  let minY = first.y;
  let maxX = first.x;
  let maxY = first.y;
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

/** Point at fraction t along edge from a to b (0=a, 1=b). */
function lerp(
  a: { x: number; y: number },
  b: { x: number; y: number },
  t: number
): { x: number; y: number } {
  return { x: rd(a.x + (b.x - a.x) * t), y: rd(a.y + (b.y - a.y) * t) };
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

/** Rechteck (Seitenverhältnis ~2:1, explizit in der offiziellen Instruktion erwähnt). */
const RECTANGLE: Polygon = {
  points: [
    { x: 40, y: 60 },
    { x: 160, y: 60 },
    { x: 160, y: 140 },
    { x: 40, y: 140 },
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
  "rectangle",
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
  RECTANGLE,
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

export function isExactStrategyShape(poly: Polygon): boolean {
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
      const pi = pts[i] as { x: number; y: number };
      const pj = pts[j] as { x: number; y: number };
      const key = segmentKey(pi, pj);
      if (targetEdges.has(key) || seen.has(key)) continue;
      seen.add(key);
      // Skip degenerate (zero-length) edges
      const dx = pj.x - pi.x;
      const dy = pj.y - pi.y;
      if (dx * dx + dy * dy < 1e-6) continue;
      lines.push({
        from: { x: rd(pi.x), y: rd(pi.y) },
        to: { x: rd(pj.x), y: rd(pj.y) },
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
function _cutSquareCenter4(): CutResult {
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

/** Rechteck: Diagonale (2 Dreiecke). */
function cutRectangleDiagonal(): CutResult {
  const [p0, p1, p2, p3] = RECTANGLE.points;
  return { target: RECTANGLE, pieces: [{ points: [p0, p1, p2] }, { points: [p0, p2, p3] }] };
}

/** Rechteck: 3 Teile (von einer Ecke zu zwei Kantenmitten). */
function cutRectangle3(): CutResult {
  const [p0, p1, p2, p3] = RECTANGLE.points;
  const m12 = mid(p1, p2);
  const m23 = mid(p2, p3);
  return {
    target: RECTANGLE,
    pieces: [{ points: [p0, p1, m12] }, { points: [p0, m12, p2, m23] }, { points: [p0, m23, p3] }],
  };
}

/** Rechteck: 4 Teile (zwei Diagonalen durch Zentrum). */
function cutRectangle4Hard(): CutResult {
  const [p0, p1, p2, p3] = RECTANGLE.points;
  const c = centroid(RECTANGLE);
  return {
    target: RECTANGLE,
    pieces: [
      { points: [p0, p1, c] },
      { points: [p1, p2, c] },
      { points: [p2, p3, c] },
      { points: [p3, p0, c] },
    ],
  };
}

// =============================================================================
// ASYMMETRIC CUT STRATEGIES – 1/3 and 2/3 positions via lerp()
// =============================================================================

/** Quadrat: 3 asymmetrische Teile (Schnitt von Ecke p0 zu 1/3 auf p1-p2 und 2/3 auf p2-p3). */
function cutSquareAsymmetric3(): CutResult {
  const [p0, p1, p2, p3] = SQUARE.points;
  const t12 = lerp(p1, p2, 1 / 3); // 1/3 along edge p1→p2
  const t23 = lerp(p2, p3, 2 / 3); // 2/3 along edge p2→p3
  return {
    target: SQUARE,
    pieces: [{ points: [p0, p1, t12] }, { points: [p0, t12, p2, t23] }, { points: [p0, t23, p3] }],
  };
}

/** Dreieck: 3 asymmetrische Teile (Basis bei 1/3 und 2/3 geteilt, Linien zur Spitze). */
function cutTriangleAsymmetric3(): CutResult {
  const [p0, p1, p2] = TRIANGLE.points;
  const t1 = lerp(p1, p2, 1 / 3); // 1/3 along base
  const t2 = lerp(p1, p2, 2 / 3); // 2/3 along base
  return {
    target: TRIANGLE,
    pieces: [{ points: [p0, p1, t1] }, { points: [p0, t1, t2] }, { points: [p0, t2, p2] }],
  };
}

/** Sechseck: 3 asymmetrische Teile (Diagonale v0→v3 + Linie von v0 zu 1/3 auf v3→v4). */
function cutHexagonAsymmetric3(): CutResult {
  const v = HEXAGON.points;
  const t34 = lerp(v[3], v[4], 1 / 3);
  return {
    target: HEXAGON,
    pieces: [
      { points: [v[0], v[1], v[2], v[3]] },
      { points: [v[0], v[3], t34] },
      { points: [v[0], t34, v[4], v[5]] },
    ],
  };
}

/** Parallelogramm: 3 asymmetrische Teile (horizontaler Schnitt bei 1/3 Höhe). */
function cutParallelogramAsymmetric3(): CutResult {
  const [p0, p1, p2, p3] = PARALLELOGRAM.points;
  const tL = lerp(p0, p3, 1 / 3);
  const tR = lerp(p1, p2, 1 / 3);
  return {
    target: PARALLELOGRAM,
    pieces: [{ points: [p0, p1, tR, tL] }, { points: [tL, tR, p2] }, { points: [tL, p2, p3] }],
  };
}

/** Trapez: 3 asymmetrische Teile (Diagonale von 1/3 Oberkante zu 2/3 Unterkante, then split right part). */
function cutTrapezAsymmetric3(): CutResult {
  const [p0, p1, p2, p3] = TRAPEZ.points;
  const tTop = lerp(p0, p1, 1 / 3);
  const tBot = lerp(p3, p2, 2 / 3);
  const tRight = lerp(p1, p2, 1 / 3);
  return {
    target: TRAPEZ,
    pieces: [
      { points: [p0, tTop, tBot, p3] },
      { points: [tTop, p1, tRight] },
      { points: [tTop, tRight, p2, tBot] },
    ],
  };
}

/** Rechteck: 4 asymmetrische Teile (senkrecht bei 1/3, waagerecht bei 2/3 — 4 ungleiche Rechtecke). */
function cutRectangleAsymmetric4(): CutResult {
  const [p0, p1, p2, p3] = RECTANGLE.points;
  const tTop = lerp(p0, p1, 1 / 3);
  const tBot = lerp(p3, p2, 1 / 3);
  const tLeft = lerp(p0, p3, 2 / 3);
  const tRight = lerp(p1, p2, 2 / 3);
  const cross = { x: rd(tTop.x), y: rd(tLeft.y) };
  return {
    target: RECTANGLE,
    pieces: [
      { points: [p0, tTop, cross, tLeft] }, // top-left (narrow, tall)
      { points: [tTop, p1, tRight, cross] }, // top-right (wide, tall)
      { points: [tLeft, cross, tBot, p3] }, // bottom-left (narrow, short)
      { points: [cross, tRight, p2, tBot] }, // bottom-right (wide, short)
    ],
  };
}

export type FZDifficulty = "easy" | "medium" | "hard";

/** Pro Schema: Schwierigkeit, Zielform (für gleiche Häufigkeit aller 14 Formen), Schnitt. */
type CutScheme = { diff: FZDifficulty; shapeId: SolutionShapeName; cut: () => CutResult };

/** Schnitt-Schemata. Nur die 14 offiziellen Zielformen, 2–7 Teile. shapeId für ausgeglichene Verteilung. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CUT_SCHEMES: CutScheme[] = [
  // --- EASY: all 15 shapes (incl. rectangle), 2-3 pieces ---
  { diff: "easy", shapeId: "square", cut: cutSquareDiagonal },
  { diff: "easy", shapeId: "square", cut: cutSquare3 },
  { diff: "easy", shapeId: "rectangle", cut: cutRectangleDiagonal },
  { diff: "easy", shapeId: "rectangle", cut: cutRectangle3 },
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
  // --- MEDIUM: all 15 shapes, 3-4 pieces ---
  { diff: "medium", shapeId: "rectangle", cut: cutRectangle3 },
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
  // --- HARD: all 15 shapes, 4-8 pieces ---
  { diff: "hard", shapeId: "rectangle", cut: cutRectangle4Hard },
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
  // --- ASYMMETRIC cuts (lerp 1/3, 2/3) ---
  { diff: "medium", shapeId: "square", cut: cutSquareAsymmetric3 },
  { diff: "medium", shapeId: "triangle", cut: cutTriangleAsymmetric3 },
  { diff: "medium", shapeId: "parallelogram", cut: cutParallelogramAsymmetric3 },
  { diff: "hard", shapeId: "hexagon", cut: cutHexagonAsymmetric3 },
  { diff: "hard", shapeId: "trapezoid", cut: cutTrapezAsymmetric3 },
  { diff: "hard", shapeId: "rectangle", cut: cutRectangleAsymmetric4 },
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
export function polygonFingerprint(poly: Polygon): string {
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

let seenFingerprints = new Set<string>();
const MAX_SEEN = 200; // Keep small — only prevents duplicates WITHIN a single session

/** Prüft, ob diese Ziel+Teile-Kombination schon vorkam. Wenn ja: verwerfen. */
export function duplicateGuardHas(fingerprint: string): boolean {
  return seenFingerprints.has(fingerprint);
}

/** Registriert eine verwendete Aufgabe (Fingerprint). */
export function duplicateGuardAdd(fingerprint: string): void {
  seenFingerprints.add(fingerprint);
  if (seenFingerprints.size > MAX_SEEN) {
    // Clear entirely — allows fresh generation each session
    seenFingerprints = new Set<string>();
  }
}

/** Leert den Duplicate-Guard (z. B. beim Start einer neuen Übungsrunde). */
export function duplicateGuardClear(): void {
  seenFingerprints = new Set<string>();
}

// =============================================================================
// VALIDATOR – Harte Prüfung: Fläche, keine Überlappung, Ziel in SOLUTION_SHAPES
// =============================================================================
// Bei Fehlschlag: Aufgabe VERWERFEN (nicht anzeigen).

/** Relative Flächentoleranz: 1% des Zielflächenwerts (fängt Rundungsfehler nach Rotation auf). */
const AREA_REL_TOL = 0.01;

/** Prüft: Sum(Fläche Teile) === Fläche Ziel (relative Toleranz, robust nach Rotation). */
export function validatePiecesMatchTarget(pieces: Polygon[], target: Polygon): boolean {
  const sum = pieces.reduce((s, p) => s + polygonArea(p), 0);
  const targetA = polygonArea(target);
  return Math.abs(sum - targetA) <= Math.max(AREA_REL_TOL * Math.abs(targetA), 1e-6);
}

/** Prüft: Keine zwei Teile überlappen (kein Vertex strikt im Inneren des anderen Polygons). */
function validatePiecesNoOverlap(pieces: Polygon[]): boolean {
  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++) {
      const a = (pieces[i] as Polygon).points;
      const b = (pieces[j] as Polygon).points;
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
    const vi = vertices[i] as { x: number; y: number };
    const vj = vertices[j] as { x: number; y: number };
    const xi = vi.x,
      yi = vi.y;
    const xj = vj.x,
      yj = vj.y;
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
  const correctOpt = task.options[task.correctIndex];
  // E-correct: no A-D option matches the target
  if (task.correctIndex === 4) return matchCount === 0 && isOptionE(correctOpt);
  // Normal: exactly one A-D option matches and it's the correct one
  if (matchCount !== 1) return false;
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

/**
 * Vollständige Validierung (hart): Fläche, keine Überlappung, Teile in Ziel, Ziel in 14 Formen, eindeutige Lösung.
 *
 * `skipGeometric`: set true for display-rotated tasks (pieces no longer inside target after rotation).
 * The generator validates pre-rotation; re-validation only checks structural integrity.
 */
export function validateFigurenTask(task: FigureAssembleTask, skipGeometric = false): boolean {
  if (task.pieces.length < 2 || task.pieces.length > 6 || task.options.length !== 5) return false;
  if (task.targetShapeId != null && !TARGET_SHAPE_IDS.includes(task.targetShapeId)) return false;
  if (!skipGeometric) {
    if (!validatePiecesMatchTarget(task.pieces, task.target)) return false;
    if (!validatePiecesNoOverlap(task.pieces)) return false;
    if (!validatePiecesInsideTarget(task.pieces, task.target)) return false;
  }
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
  quads: [SQUARE, RECTANGLE, RHOMBUS, PARALLELOGRAM, TRAPEZ, L_SHAPE],
  polygons: [PENTAGON, HEXAGON, HEPTAGON, OCTAGON, TRIANGLE],
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
    quads: ["polygons"],
    polygons: ["quads"],
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
  // Warm up: skip first 5 outputs to avoid LCG first-call bias.
  // Without this, seeds <16000 produce first values <0.12, breaking E-correct calibration.
  for (let i = 0; i < 5; i++) s = (s * 16807) % 2147483647;
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

    // Reject if line passes very close to centroid (slightly off-center cuts are fine)
    const c = centroid(poly);
    const lineLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    if (lineLen < 1) continue;
    const dist = Math.abs((p2.x - p1.x) * (p1.y - c.y) - (p1.x - c.x) * (p2.y - p1.y)) / lineLen;
    const bbox = polygonBBox(poly);
    const diagLen = Math.hypot(bbox.width, bbox.height);
    // Strong off-center: IB FZ 26 NEVER has center cuts. 20% for polygons, 8% for circles
    const threshold = n > 8 ? 0.08 : 0.2;
    if (dist < diagLen * threshold) continue;

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
 *  Viele Sample-Punkte (16-20) für eine visuell glatte, deutlich sichtbare Kurve
 *  wie in den offiziellen IB FZ 26 Beispielen. */
function curvedPath(p1: Pt2, p2: Pt2, rng: () => number): Pt2[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 10) return [p1, p2];

  // Normal vector
  const nx = -dy / len;
  const ny = dx / len;

  // Control point: midpoint offset perpendicular by 15-30% of cut length (more pronounced curve)
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const curveOffset = len * (0.15 + rng() * 0.15) * (rng() > 0.5 ? 1 : -1);
  const ctrlX = midX + curveOffset * nx;
  const ctrlY = midY + curveOffset * ny;

  // Sample quadratic Bezier: B(t) = (1-t)²·P1 + 2(1-t)t·Ctrl + t²·P2
  // 16-20 points for a visually smooth curve (not jagged polyline)
  const numSamples = 16 + Math.floor(rng() * 5);
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

/** Wählt einen Schnittstil basierend auf Schwierigkeit.
 *  IB FZ 26 zeigt gekrümmte Schnitte (Beispiel 1, 2, 5) und gerade Schnitte (Beispiel 3, 4).
 *  Easy: meist gerade, gelegentlich curved. Medium: Mix. Hard: komplex. */
function pickCutStyle(difficulty: FZDifficulty, rng: () => number): CutStyle {
  const r = rng();
  // IB FZ 26: even the intro has complex cuts (notches, L-shapes). No difficulty has
  // majority straight cuts — the puzzle-like interlocking is what makes it challenging.
  if (difficulty === "easy") {
    if (r < 0.2) return "straight";
    if (r < 0.45) return "curved";
    if (r < 0.65) return "step";
    if (r < 0.8) return "notch";
    return "lshaped";
  }
  if (difficulty === "medium") {
    if (r < 0.1) return "straight";
    if (r < 0.35) return "curved";
    if (r < 0.55) return "step";
    if (r < 0.75) return "notch";
    if (r < 0.88) return "lshaped";
    return "zigzag";
  }
  // hard
  if (r < 0.05) return "straight";
  if (r < 0.25) return "curved";
  if (r < 0.45) return "step";
  if (r < 0.65) return "notch";
  if (r < 0.82) return "lshaped";
  return "zigzag";
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
  const tolerance = 4.0; // Generous tolerance so complex cut styles don't fall back to straight

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

/**
 * Grid-based cutting: overlay randomized grid lines across the polygon.
 * Reliably produces 6-8 pieces for hard tasks (IB FZ 26 examples 3-4).
 * Lines span the full bounding box so they always intersect the polygon.
 */
function applyGridCuts(
  target: Polygon,
  targetPieceCount: number,
  rng: () => number,
  _difficulty: FZDifficulty
): Polygon[] | null {
  const bbox = polygonBBox(target);
  const targetArea = polygonArea(target);
  const minPieceArea = targetArea * 0.015; // allow small fragments like official examples

  // Rotate the grid slightly for visual variety (±15°)
  const gridAngle = (rng() * 30 - 15) * (Math.PI / 180);

  // Generate grid lines: we need ~sqrt(targetPieceCount) lines in each direction
  // For 6-8 pieces: 2-3 horizontal + 2-3 vertical lines
  const margin = Math.max(bbox.width, bbox.height) * 0.6; // extend lines beyond bbox
  const cx = bbox.minX + bbox.width / 2;
  const cy = bbox.minY + bbox.height / 2;

  // Grid line counts: (hCount+1)*(vCount+1) grid cells, polygon clips to ~60-75% → 6-8 pieces
  const hCount = 1 + Math.floor(rng() * 2); // 1-2 horizontal-ish lines
  const vCount = 2 + Math.floor(rng() * 2); // 2-3 vertical-ish lines

  const cutLines: [Pt2, Pt2][] = [];

  const cos = Math.cos(gridAngle);
  const sin = Math.sin(gridAngle);

  // Helper: rotate point (px, py) around (cx, cy) by gridAngle
  const rotPt = (px: number, py: number): Pt2 => ({
    x: rd(cx + (px - cx) * cos - (py - cy) * sin),
    y: rd(cy + (px - cx) * sin + (py - cy) * cos),
  });

  // Horizontal-ish lines
  for (let i = 0; i < hCount; i++) {
    const frac = (i + 0.5) / hCount;
    const jitter = rng() * 0.3 - 0.15;
    const t = Math.max(0.15, Math.min(0.85, frac + jitter));
    const ly = bbox.minY + t * bbox.height;
    cutLines.push([rotPt(cx - margin, ly), rotPt(cx + margin, ly)]);
  }

  // Vertical-ish lines
  for (let i = 0; i < vCount; i++) {
    const frac = (i + 0.5) / vCount;
    const jitter = rng() * 0.3 - 0.15;
    const t = Math.max(0.15, Math.min(0.85, frac + jitter));
    const lx = bbox.minX + t * bbox.width;
    cutLines.push([rotPt(lx, cy - margin), rotPt(lx, cy + margin)]);
  }

  // Optional diagonal line (50% chance) — adds asymmetry, helps triangles
  if (rng() < 0.5) {
    const dt = 0.2 + rng() * 0.6; // offset from corner
    cutLines.push([
      rotPt(bbox.minX + dt * bbox.width, bbox.minY - margin * 0.3),
      rotPt(bbox.minX + (1 - dt) * bbox.width, bbox.minY + bbox.height + margin * 0.3),
    ]);
  }

  // Shuffle cut order for variety
  for (let i = cutLines.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [cutLines[i], cutLines[j]] = [cutLines[j], cutLines[i]];
  }

  // Apply cuts sequentially — each line splits every existing piece it intersects
  let pieces: Polygon[] = [{ points: target.points.map((p) => ({ ...p })) }];

  for (const [lA, lB] of cutLines) {
    // Stop if we already have enough pieces (official IB max ~6)
    if (pieces.length >= 6) break;

    const nextPieces: Polygon[] = [];
    for (const piece of pieces) {
      // Grid cuts use straight lines — the grid intersection pattern provides complexity
      const result = splitPolygonByLine(piece, lA, lB);

      if (result) {
        const [a, b] = result;
        // Keep both halves if they have sufficient area
        if (polygonArea(a) >= minPieceArea && polygonArea(b) >= minPieceArea) {
          nextPieces.push(a, b);
        } else {
          nextPieces.push(piece); // line barely clips — keep original
        }
      } else {
        nextPieces.push(piece); // line doesn't intersect this piece
      }
    }
    pieces = nextPieces;
  }

  // Validate piece count and area conservation
  if (pieces.length < 3) return null; // grid approach should produce at least 3

  const totalArea = pieces.reduce((s, p) => s + polygonArea(p), 0);
  if (Math.abs(totalArea - targetArea) / targetArea > 0.02) return null; // >2% area loss

  return pieces;
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
  // Allow smaller pieces for higher cut counts (official examples have tiny fragments)
  const minPieceArea = targetArea * (numCuts >= 5 ? 0.01 : 0.03);

  let successfulCuts = 0;
  for (
    let totalAttempts = 0;
    totalAttempts < numCuts * 12 && successfulCuts < numCuts;
    totalAttempts++
  ) {
    // Pick which piece to cut: usually largest, but 25% of the time pick a random
    // eligible piece to break the "one big + several small" monotony
    let cutIdx = 0;
    if (pieces.length >= 3 && rng() < 0.25) {
      // Pick random piece that's at least 15% of total area
      const totalA = pieces.reduce((s, p) => s + polygonArea(p), 0);
      const eligible = pieces
        .map((p, i) => ({ i, a: polygonArea(p) }))
        .filter((e) => e.a > totalA * 0.15);
      if (eligible.length > 0) {
        cutIdx = eligible[Math.floor(rng() * eligible.length)].i;
      }
    } else {
      // Default: cut the largest piece
      let maxArea = 0;
      for (let i = 0; i < pieces.length; i++) {
        const a = polygonArea(pieces[i]);
        if (a > maxArea) {
          maxArea = a;
          cutIdx = i;
        }
      }
    }
    const largest = pieces[cutIdx];
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

    pieces.splice(cutIdx, 1, a, b);
    successfulCuts++;
  }

  // Validate: we need at least the expected number of pieces
  if (pieces.length < 2) return null;

  // Strict authenticity: official IB FZ 26 NEVER has uniform splits.
  // Every example shows pieces that are clearly different in size and shape.
  const areas = pieces.map((p) => polygonArea(p));
  const maxA = Math.max(...areas);
  const minA = Math.min(...areas);
  const areaRatio = minA > 0 ? maxA / minA : 999;

  // IB FZ 26: always clear size differences — no even splits
  if (pieces.length === 2 && areaRatio < 1.8) return null;
  if (pieces.length >= 3 && areaRatio < 1.5) return null;
  if (areaRatio > 10) return null;

  return pieces;
}

/** Anzahl Schnitte pro Schwierigkeitsstufe.
 *  IB FZ 26: Intro=2pc, Bsp1=4pc, Bsp2=2pc, Bsp3=6pc, Bsp4=6pc, Bsp5=4pc */
function numCutsForDifficulty(diff: FZDifficulty, rng: () => number): number {
  // Calibrated piece counts: easy=2-3, medium=3-5, hard=5-6
  // Medium needs 3+ cuts to reliably produce 4+ pieces (avoid collapsing to easy-like 3pc)
  if (diff === "easy") return 1 + Math.floor(rng() * 2); // 1-2 cuts → 2-3 pieces
  if (diff === "medium") return 3 + Math.floor(rng() * 2); // 3-4 cuts → 4-5 pieces
  return 4 + Math.floor(rng() * 2); // 4-5 cuts → 5-6 pieces
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

  // Try asymmetric cuts FIRST (authentic look with curved/complex cuts like IB FZ 26)
  const nCuts = numCutsForDifficulty(difficulty, rng);
  const asymPieces = applyAsymmetricCuts(target, nCuts, rng, difficulty);
  // Piece count bounds
  const minPieces = difficulty === "easy" ? 2 : 3;
  const maxPieces = difficulty === "easy" ? 3 : difficulty === "medium" ? 5 : 6;
  if (asymPieces && asymPieces.length >= minPieces && asymPieces.length <= maxPieces) {
    const totalArea = asymPieces.reduce((s, p) => s + polygonArea(p), 0);
    const targetArea = polygonArea(target);
    // Relaxed tolerance (2%) — curved cuts shift area slightly via polyline approximation
    if (Math.abs(totalArea - targetArea) / targetArea < 0.02) {
      return { target, pieces: asymPieces };
    }
  }

  // Grid-based fallback for all difficulties when asymmetric cuts fail
  {
    const gridSize = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5;
    const gridPieces = applyGridCuts(target, gridSize, rng, difficulty);
    if (gridPieces && gridPieces.length >= minPieces && gridPieces.length <= maxPieces) {
      const totalArea = gridPieces.reduce((s, p) => s + polygonArea(p), 0);
      const tgtArea = polygonArea(target);
      if (Math.abs(totalArea - tgtArea) / tgtArea < 0.02) {
        return { target, pieces: gridPieces };
      }
    }
  }

  // Fallback: retry with different seeds, require 3+ pieces
  for (let fa = 0; fa < 15; fa++) {
    const fbRng = createRng(seed + 77777 + fa * 9999);
    const fbPieces = applyAsymmetricCuts(
      { points: target.points.map((p) => ({ ...p })) },
      Math.max(nCuts, 2),
      fbRng,
      difficulty
    );
    if (fbPieces && fbPieces.length >= minPieces) {
      const ta = fbPieces.reduce((s, p) => s + polygonArea(p), 0);
      if (Math.abs(ta - polygonArea(target)) / polygonArea(target) < 0.05)
        return { target, pieces: fbPieces };
    }
  }
  // True last resort: 2 sequential cuts for 3 pieces minimum
  const lastRng = createRng(seed + 123456);
  const lastPieces = applyAsymmetricCuts(
    { points: target.points.map((p) => ({ ...p })) },
    2,
    lastRng,
    difficulty
  );
  if (lastPieces && lastPieces.length >= 3) return { target, pieces: lastPieces };
  // Accept 2 pieces only as absolute last resort
  if (lastPieces && lastPieces.length >= 2) return { target, pieces: lastPieces };
  return { target, pieces: [{ points: target.points.map((p) => ({ ...p })) }] };
}

/**
 * Generiert eine Trainingsaufgabe mit Validator und Duplikat-Schutz.
 * Bei „Schwer“: visuell unterschiedliche Formen, keine Dominanz von Quadrat/Raute/Trapez.
 */
export function generateFigurenTrainingTask(
  difficulty: FZDifficulty,
  seed: number,
  forcedShapeIdx?: number,
  forceECorrect?: boolean
): FigureAssembleTask {
  const rng = createRng(seed);
  // E-correct ~12% matches official IB FZ 26 benchmark (1 in ~6-7 tasks have E correct).
  // "Bei einigen Aufgaben kann es vorkommen, dass keine der Antwortmöglichkeiten A bis D richtig ist."
  const makeECorrect = forceECorrect ?? rng() < 0.12;
  const maxAttempts = 40; // More attempts for shapes that are harder to cut non-uniformly
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { target, pieces } = cutPolygonStrategically(
      difficulty,
      seed + attempt * 9973,
      forcedShapeIdx
    );
    if (!isAllowedTarget(target)) continue;
    // Piece count bounds per difficulty
    const minPcs = difficulty === "easy" ? 2 : 3;
    const maxPcs = difficulty === "easy" ? 3 : difficulty === "medium" ? 5 : 6;
    if (pieces.length < minPcs || pieces.length > maxPcs) continue;
    {
      const pa = pieces.map((p) => polygonArea(p));
      const paMax = Math.max(...pa),
        paMin = Math.min(...pa);
      const paRatio = paMin > 0 ? paMax / paMin : 999;
      if (pieces.length === 2 && paRatio < 1.8) continue;
      if (pieces.length >= 3 && paRatio < 1.5) continue;
      if (paRatio > 10) continue;
      // Reduce anchor dominance: reject if largest piece > 75% of total (too obvious)
      const totalA = pa.reduce((s, a) => s + a, 0);
      if (totalA > 0 && paMax / totalA > 0.75) continue;
    }
    const fp = taskFingerprint(target, pieces);
    if (duplicateGuardHas(fp)) continue;

    let options: [FigureOption, FigureOption, FigureOption, FigureOption, FigureOption];
    let correctIndex: number;

    if (makeECorrect) {
      // E-correct: fill A-D with 4 distractors (none is the target)
      const distractors = buildDistractors(target, 4, rng, fp);
      const four: Polygon[] = [distractors[0]!, distractors[1]!, distractors[2]!, distractors[3]!];
      const order = [0, 1, 2, 3];
      for (let i = 3; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      options = [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E];
      correctIndex = 4;
    } else {
      // Normal: target + 3 distractors in A-D
      const distractors = buildDistractors(target, 3, rng, fp);
      const four: Polygon[] = [target, distractors[0]!, distractors[1]!, distractors[2]!];
      const order = [0, 1, 2, 3];
      for (let i = 3; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      correctIndex = order.indexOf(0);
      options = [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E];
    }

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

    const shapeName = SHAPE_NAMES_AKK[validationTask.targetShapeId ?? ""] ?? "die Figur";
    const optionLetter = ["A", "B", "C", "D", "E"][correctIndex] ?? "?";
    // Build difficulty-aware explanation
    const pieceDesc =
      pieces.length <= 3
        ? `Die ${pieces.length} Teile lassen sich direkt zu ${shapeName} zusammenfügen.`
        : `Die ${pieces.length} Teile ergeben zusammengesetzt ${shapeName}. Orientiere dich am größten Teil und prüfe, wie die kleineren Teile die Lücken füllen.`;
    const task: FigureAssembleTask = {
      ...validationTask,
      pieces: displayPieces,
      explanation:
        correctIndex === 4
          ? `Keine der Figuren A–D ist korrekt. Die ${pieces.length} Teile ergeben ${shapeName}, aber diese Form ist nicht unter den Optionen A–D. Tipp: Schätze die Gesamtfläche der Teile ab — wenn kein Umriss A–D flächengleich ist, wähle E.`
          : `${pieceDesc} Achte auf markante Kanten und Winkel: nur bei Option ${optionLetter} passen alle Teile lückenlos zusammen.`,
    };
    duplicateGuardAdd(fp);
    return task;
  }

  return generateFigurenTrainingTaskFallback(
    difficulty,
    seed + maxAttempts,
    makeECorrect,
    forcedShapeIdx
  );
}

function generateFigurenTrainingTaskFallback(
  difficulty: FZDifficulty,
  seed: number,
  makeECorrect = false,
  forcedShapeIdx?: number
): FigureAssembleTask {
  const maxFallbackAttempts = 20;
  for (let fa = 0; fa < maxFallbackAttempts; fa++) {
    const rng = createRng(seed + fa * 31337);

    // Use asymmetric cuts on forced shape (NO CUT_SCHEMES)
    const fbShapeIdx =
      forcedShapeIdx != null
        ? forcedShapeIdx % SOLUTION_SHAPES.length
        : Math.floor(rng() * SOLUTION_SHAPES.length);
    const target = { points: OFFICIAL_TARGET_POLYGONS[fbShapeIdx].points.map((p) => ({ ...p })) };
    const nCuts = numCutsForDifficulty(difficulty, rng);
    const pieces = applyAsymmetricCuts(target, nCuts, rng, difficulty);
    const fbMaxPcs = difficulty === "easy" ? 3 : difficulty === "medium" ? 5 : 6;
    if (!pieces || pieces.length < 3 || pieces.length > fbMaxPcs) continue;
    const pa = pieces.map((p) => polygonArea(p));
    const paMax = Math.max(...pa),
      paMin = Math.min(...pa);
    const paRatio = paMin > 0 ? paMax / paMin : 999;
    if (paRatio < 2.5 || paRatio > 6) continue;
    if (pieces.every((p) => p.points.length === pieces[0].points.length)) continue;
    // Reject overly dominant anchor pieces
    const totalA = pa.reduce((s, a) => s + a, 0);
    if (totalA > 0 && paMax / totalA > 0.75) continue;

    let options: [FigureOption, FigureOption, FigureOption, FigureOption, FigureOption];
    let correctIndex: number;

    if (makeECorrect) {
      const distractors = buildDistractors(target, 4, rng, "");
      const four: Polygon[] = [distractors[0]!, distractors[1]!, distractors[2]!, distractors[3]!];
      const order = [0, 1, 2, 3];
      for (let i = 3; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      options = [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E];
      correctIndex = 4;
    } else {
      const distractors = buildDistractors(target, 3, rng, "");
      const four: Polygon[] = [target, distractors[0]!, distractors[1]!, distractors[2]!];
      const order = [0, 1, 2, 3];
      for (let i = 3; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      correctIndex = order.indexOf(0);
      options = [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E];
    }

    // Validate BEFORE rotation (same pattern as main generator)
    const validationTask: FigureAssembleTask = {
      id: `fz-train-fb-${difficulty}-${seed}-${fa}`,
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

    const displayPieces = rotatePiecesForDisplay(pieces, difficulty, rng);
    const fbShapeName = SHAPE_NAMES_AKK[validationTask.targetShapeId ?? ""] ?? "die Figur";
    return {
      ...validationTask,
      pieces: displayPieces,
      explanation:
        correctIndex === 4
          ? `Keine der Figuren A–D ist korrekt. Die ${pieces.length} Teile ergeben zusammengesetzt ${fbShapeName} — diese Form ist aber nicht unter den Optionen A–D.`
          : `Die ${pieces.length} Teile ergeben zusammengesetzt ${fbShapeName}. Vergleiche die Umrisse: nur diese Figur stimmt mit der Gesamtfläche und den Winkeln der Teile überein.`,
    };
  }

  // Ultimate fallback: use forced shape with 2+ cuts for 3+ pieces
  const fbShapeIdx2 =
    forcedShapeIdx != null
      ? forcedShapeIdx % SOLUTION_SHAPES.length
      : Math.floor(createRng(seed + 888)() * SOLUTION_SHAPES.length);
  const fbTarget = { points: OFFICIAL_TARGET_POLYGONS[fbShapeIdx2].points.map((p) => ({ ...p })) };
  // Try to get 3+ pieces
  let fbPieces: Polygon[] | null = null;
  for (let fba = 0; fba < 10; fba++) {
    const fbRngN = createRng(seed + 999999 + fba * 7777);
    const res = applyAsymmetricCuts(
      { points: fbTarget.points.map((p) => ({ ...p })) },
      2,
      fbRngN,
      difficulty
    );
    if (res && res.length >= 3) {
      fbPieces = res;
      break;
    }
  }
  // Accept 2 pieces as last resort
  if (!fbPieces) {
    const fbRng2 = createRng(seed + 999999);
    const fbCut = generateAsymmetricCut({ points: fbTarget.points.map((p) => ({ ...p })) }, fbRng2);
    if (fbCut) {
      const res2 = splitPolygonByLine(
        { points: fbTarget.points.map((p) => ({ ...p })) },
        fbCut[0],
        fbCut[1]
      );
      if (res2) fbPieces = res2;
    }
  }
  const { target, pieces } = fbPieces
    ? { target: fbTarget, pieces: fbPieces }
    : cutSquareDiagonal();
  const rng = createRng(seed + 999);
  const distractors = buildDistractors(target, 3, rng, "");
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
  return {
    id: `fz-train-fb-${difficulty}-${seed}-safe`,
    pieces: rotatePiecesForDisplay(pieces, difficulty, rng),
    target,
    options,
    correctIndex,
    difficulty,
    explanation: `Die ${pieces.length} Teile ergeben zusammengesetzt ein Quadrat. Vergleiche die Umrisse: nur diese Figur stimmt mit der Gesamtfläche und den Winkeln der Teile überein.`,
    targetShapeId: "square",
    solutionOverlay: computeSolutionOverlay(target, pieces),
  };
}

export function generateFigurenTrainingSet(
  count: number,
  difficulty: FZDifficulty,
  baseSeed: number = Date.now()
): FigureAssembleTask[] {
  const tasks: FigureAssembleTask[] = [];
  // Explicitly assign ~12% of slots as E-correct (matches official IB FZ 26: ~1 in 6-7 tasks)
  const eSlots = new Set<number>();
  const eTarget = Math.max(1, Math.floor(count * 0.12));
  const setRng = createRng(baseSeed + 77);
  while (eSlots.size < eTarget) {
    eSlots.add(Math.floor(setRng() * count));
  }
  // Ensure all 14 shapes appear: cycle through shapes round-robin
  for (let i = 0; i < count; i++) {
    const forcedShapeIdx = i % SOLUTION_SHAPES.length;
    const forceE = eSlots.has(i);
    const task = generateFigurenTrainingTask(
      difficulty,
      baseSeed + i * 7919,
      forcedShapeIdx,
      forceE
    );
    tasks.push(task);
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

/** Akkusativ-Formen der 14 Zielformen (für „ergeben ein Quadrat"). */
const SHAPE_NAMES_AKK: Record<string, string> = {
  triangle: "ein gleichseitiges Dreieck",
  square: "ein Quadrat",
  rectangle: "ein Rechteck",
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

/** Nominativ-Formen der 14 Zielformen (für „Die richtige Antwort ist ein Quadrat"). */
const SHAPE_NAMES_NOM: Record<string, string> = {
  triangle: "Dreieck",
  square: "Quadrat",
  rectangle: "Rechteck",
  rhombus: "Raute",
  parallelogram: "Parallelogramm",
  trapezoid: "Trapez",
  pentagon: "Fünfeck",
  hexagon: "Sechseck",
  heptagon: "Siebeneck",
  octagon: "Achteck",
  "quarter-circle": "Viertelkreis",
  "half-circle": "Halbkreis",
  "three-quarter-circle": "Dreiviertelkreis",
  "full-circle": "Vollkreis",
  "L-shape": "L-Form",
};

/** Gibt den deutschen Anzeigenamen einer Zielform zurück (Nominativ). */
export function getShapeDisplayName(shapeId: string | undefined): string {
  return shapeId ? (SHAPE_NAMES_NOM[shapeId] ?? shapeId) : "Figur";
}

/** Akkusativ-Form für Erklärungstexte („ergeben einen Vollkreis"). */
export function getShapeDisplayNameAkk(shapeId: string | undefined): string {
  return shapeId ? (SHAPE_NAMES_AKK[shapeId] ?? shapeId) : "eine Figur";
}

/** Für Strategie-View: alle 14 Lösungsfiguren mit SVG-Pfad und deutschem Anzeigename. */
export const FIGURE_STRATEGY_GALLERY: { key: string; path: string; name: string }[] = (() => {
  return SOLUTION_SHAPES.map((key, i) => ({
    key,
    path: polygonToPath(OFFICIAL_TARGET_POLYGONS[i]),
    name: SHAPE_NAMES_AKK[key] ?? key,
  }));
})();
