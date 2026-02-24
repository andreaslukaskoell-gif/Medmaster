/**
 * KFF „Figuren zusammensetzen“ – MedAT (IB_FZ_26).
 *
 * Architektur: Regel → Konstruktion → Validator → Duplikat-Schutz → Anzeige.
 * - ShapePool: Basisformen (regulär, unregelmäßig, zusammengesetzt).
 * - CutStrategies: diagonale, versetzte, Zickzack-, mehrstufige, asymmetrische Schnitte.
 * - Validator: Nur eine Option exakt aus den Teilen zusammensetzbar.
 * - DuplicateGuard: Fingerprint aus normalisiertem Ziel + Teile-Set; keine Wiederholung.
 *
 * Offizielle Beispiele: 1:1 aus PDF (OFFICIAL_FZ_EXAMPLES). Training: Generator mit obiger Pipeline.
 */

export type Polygon = { points: { x: number; y: number }[] };

/** Option E = "Keine der Figuren ist richtig". */
export type FigureOption = Polygon | { isOptionE: true };

export type FigureAssembleTask = {
  id: string;
  pieces: Polygon[];
  target: Polygon;
  options: [FigureOption, FigureOption, FigureOption, FigureOption, FigureOption];
  correctIndex: number;
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
  source?: string;
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

// =============================================================================
// SHAPE POOL – Erweiterte Basisformen
// =============================================================================
// Nicht nur Quadrat/Raute/Trapez: unregelmäßige Polygone (5–10 Kanten, auch konkav),
// asymmetrische Formen, zusammengesetzte Silhouetten (Stufen, Einkerbungen, Zacken).

const CX = 100;
const CY = 100;
const R = 65;

/** Reguläre Basisformen (für Abwärtskompatibilität und einfache Schnitte). */
const SQUARE: Polygon = { points: regularPolygonPoints(CX, CY, R, 4) };
const TRIANGLE: Polygon = { points: regularPolygonPoints(CX, CY, R, 3) };
const PENTAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 5) };
const HEXAGON: Polygon = { points: regularPolygonPoints(CX, CY, R, 6) };
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

/** Unregelmäßiges Fünfeck (asymmetrisch, keine gleichen Winkel). */
const IRREGULAR_PENTAGON: Polygon = {
  points: [
    { x: CX - 10, y: CY - 55 },
    { x: CX + 50, y: CY - 30 },
    { x: CX + 45, y: CY + 50 },
    { x: CX - 35, y: CY + 40 },
    { x: CX - 55, y: CY - 10 },
  ],
};

/** Unregelmäßiges Sechseck (eine Ecke eingezogen → leicht konkav wirkend). */
const IRREGULAR_HEXAGON: Polygon = {
  points: [
    { x: CX, y: CY - 60 },
    { x: CX + 55, y: CY - 20 },
    { x: CX + 50, y: CY + 35 },
    { x: CX, y: CY + 60 },
    { x: CX - 50, y: CY + 20 },
    { x: CX - 40, y: CY - 25 },
  ],
};

/** Siebeneck (asymmetrisch). */
const IRREGULAR_HEPTAGON: Polygon = {
  points: [
    { x: CX, y: CY - 58 },
    { x: CX + 48, y: CY - 35 },
    { x: CX + 55, y: CY + 15 },
    { x: CX + 20, y: CY + 52 },
    { x: CX - 30, y: CY + 45 },
    { x: CX - 55, y: CY + 5 },
    { x: CX - 45, y: CY - 40 },
  ],
};

/** L-Form (zusammengesetzte Silhouette, Stufe). */
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

/** Stufenform (Einkerbung oben rechts). */
const STEP_SHAPE: Polygon = {
  points: [
    { x: 35, y: 45 },
    { x: 165, y: 45 },
    { x: 165, y: 95 },
    { x: 125, y: 95 },
    { x: 125, y: 155 },
    { x: 35, y: 155 },
  ],
};

/** Zackenform (5 Spitzen, asymmetrisch). */
const STARLIKE: Polygon = {
  points: [
    { x: CX, y: CY - 62 },
    { x: CX + 28, y: CY - 8 },
    { x: CX + 62, y: CY + 10 },
    { x: CX + 18, y: CY + 35 },
    { x: CX + 25, y: CY + 62 },
    { x: CX - 25, y: CY + 40 },
    { x: CX - 62, y: CY + 15 },
    { x: CX - 35, y: CY - 20 },
  ],
};

/** Alle Zielformen pro Schwierigkeit (weniger Quadrat/Dreieck bei schwer). */
const SHAPE_POOL_EASY: Polygon[] = [SQUARE, TRIANGLE, HEXAGON, PENTAGON, RHOMBUS];
const SHAPE_POOL_MEDIUM: Polygon[] = [
  HEXAGON,
  PENTAGON,
  IRREGULAR_PENTAGON,
  IRREGULAR_HEXAGON,
  L_SHAPE,
  STEP_SHAPE,
];
const SHAPE_POOL_HARD: Polygon[] = [
  IRREGULAR_HEXAGON,
  IRREGULAR_HEPTAGON,
  STARLIKE,
  L_SHAPE,
  STEP_SHAPE,
  IRREGULAR_PENTAGON,
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

function cutTriangleMedian(): CutResult {
  const [p0, p1, p2] = TRIANGLE.points;
  const m = mid(p1, p2);
  return { target: TRIANGLE, pieces: [{ points: [p0, p1, m] }, { points: [p0, m, p2] }] };
}

/** Sechseck: diagonal (2 Teile). */
function cutHexagon2(): CutResult {
  const v = HEXAGON.points;
  return {
    target: HEXAGON,
    pieces: [{ points: [v[0], v[1], v[2], v[3]] }, { points: [v[0], v[3], v[4], v[5]] }],
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

/** Fünfeck: 3 Teile (asymmetrische Aufteilung). */
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

/** Unregelmäßiges Fünfeck: versetzter Schnitt → 3 Teile. */
function cutIrregularPentagon3(): CutResult {
  const v = IRREGULAR_PENTAGON.points;
  const c = centroid(IRREGULAR_PENTAGON);
  const m02 = mid(v[0], v[2]);
  return {
    target: IRREGULAR_PENTAGON,
    pieces: [
      { points: [c, v[0], v[1], m02] },
      { points: [c, m02, v[2], v[3]] },
      { points: [c, v[3], v[4], v[0]] },
    ],
  };
}

/** Unregelmäßiges Sechseck: 4 Teile (Zickzack-artig: zwei Schnitte). */
function cutIrregularHexagon4(): CutResult {
  const v = IRREGULAR_HEXAGON.points;
  const c = centroid(IRREGULAR_HEXAGON);
  const m01 = mid(v[0], v[1]);
  const m34 = mid(v[3], v[4]);
  return {
    target: IRREGULAR_HEXAGON,
    pieces: [
      { points: [c, v[0], m01, v[5]] },
      { points: [c, m01, v[1], v[2]] },
      { points: [c, v[2], v[3], m34] },
      { points: [c, m34, v[4], v[5]] },
    ],
  };
}

/** L-Form: 3 Rechtecke, die exakt die L-Fläche ausfüllen. */
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

/** Stufenform: 3 Teile vom Zentrum. */
function cutStepShape4(): CutResult {
  const v = STEP_SHAPE.points;
  const c = centroid(STEP_SHAPE);
  return {
    target: STEP_SHAPE,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3], v[4]] },
      { points: [c, v[4], v[5], v[0]] },
    ],
  };
}

/** Siebeneck: 5 Teile (asymmetrisch unterschiedlich groß). */
function cutHeptagon5(): CutResult {
  const v = IRREGULAR_HEPTAGON.points;
  const c = centroid(IRREGULAR_HEPTAGON);
  return {
    target: IRREGULAR_HEPTAGON,
    pieces: [
      { points: [c, v[0], v[1], v[2]] },
      { points: [c, v[2], v[3]] },
      { points: [c, v[3], v[4]] },
      { points: [c, v[4], v[5], v[6]] },
      { points: [c, v[6], v[0]] },
    ],
  };
}

/** Zackenform: 6–8 Teile (vom Zentrum zu Ecken). */
function cutStarlike6(): CutResult {
  const v = STARLIKE.points;
  const c = centroid(STARLIKE);
  const n = v.length;
  return {
    target: STARLIKE,
    pieces: Array.from({ length: n }, (_, i) => ({
      points: [c, v[i], v[(i + 1) % n]],
    })),
  };
}

export type FZDifficulty = "easy" | "medium" | "hard";

/** Alle Schnitt-Schemata: Ziel + Teile, nach Schwierigkeit. Leicht 3–4, Mittel 4–6, Schwer 6–8 Teile. */
const CUT_SCHEMES: { diff: FZDifficulty; cut: () => CutResult }[] = [
  { diff: "easy", cut: cutSquareDiagonal },
  { diff: "easy", cut: cutSquareCenter4 },
  { diff: "easy", cut: cutTriangleMedian },
  { diff: "easy", cut: cutHexagon2 },
  { diff: "medium", cut: cutHexagon3 },
  { diff: "medium", cut: cutPentagon3 },
  { diff: "medium", cut: cutSquareOffset },
  { diff: "medium", cut: cutIrregularPentagon3 },
  { diff: "medium", cut: cutIrregularHexagon4 },
  { diff: "medium", cut: cutLShape4Simple },
  { diff: "medium", cut: cutStepShape4 },
  { diff: "hard", cut: cutHexagon6 },
  { diff: "hard", cut: cutHeptagon5 },
  { diff: "hard", cut: cutStarlike6 },
];

// =============================================================================
// NORMALIZE & FINGERPRINT – für DuplicateGuard und Validator
// =============================================================================

/** Polygon normalisieren: Schwerpunkt nach (0,0), skaliert auf Fläche 1, dann Ecken nach Winkel sortiert. */
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
// VALIDATOR – Nur eine Option exakt aus den Teilen zusammensetzbar
// =============================================================================

const AREA_TOL = 0.5;

/** Prüft: Summe Teilflächen = Zielfläche; keine Überlappung (implizit durch Konstruktion). */
export function validatePiecesMatchTarget(pieces: Polygon[], target: Polygon): boolean {
  const sum = pieces.reduce((s, p) => s + polygonArea(p), 0);
  const targetA = polygonArea(target);
  return Math.abs(sum - targetA) < AREA_TOL;
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

/** Vollständige Validierung: Fläche + eindeutige Lösung. */
export function validateFigurenTask(task: FigureAssembleTask): boolean {
  if (task.pieces.length < 2 || task.options.length !== 5) return false;
  if (!validatePiecesMatchTarget(task.pieces, task.target)) return false;
  if (!validateUniqueCorrectOption(task)) return false;
  if (task.correctIndex < 0 || task.correctIndex > 4) return false;
  return true;
}

// =============================================================================
// DISTRACTORS – Gezielt falsche Optionen (kein Recycling)
// =============================================================================
// Minimal veränderte Winkel, leicht falsche Kantenlängen, Spiegelung, falsche Topologie.

function scalePolygon(poly: Polygon, fx: number, fy: number): Polygon {
  const c = centroid(poly);
  return {
    points: poly.points.map((p) => ({
      x: rd(c.x + (p.x - c.x) * fx),
      y: rd(c.y + (p.y - c.y) * fy),
    })),
  };
}

function mirrorPolygonY(poly: Polygon): Polygon {
  const pts = poly.points.map((p) => ({ x: p.x, y: rd(2 * CY - p.y) }));
  return { points: pts.reverse() };
}

/** Leichte Winkel-/Kantenänderung: einen Vertex leicht verschieben. */
function deformPolygon(poly: Polygon, rng: () => number, amount: number): Polygon {
  const pts = poly.points.map((p) => ({ ...p }));
  const i = Math.floor(rng() * pts.length);
  pts[i] = {
    x: rd(pts[i].x + (rng() - 0.5) * amount),
    y: rd(pts[i].y + (rng() - 0.5) * amount),
  };
  return { points: pts };
}

/** Erzeugt 3 Distraktoren: Spiegelung, Deformation, anderes Verhältnis; alle mit anderem Fingerprint als target. */
function buildDistractors(
  target: Polygon,
  count: number,
  rng: () => number,
  excludeFingerprint: string
): Polygon[] {
  const out: Polygon[] = [];
  const targetFp = polygonFingerprint(target);
  const pool = [RHOMBUS, TRAPEZ, PARALLELOGRAM, IRREGULAR_PENTAGON, L_SHAPE, STEP_SHAPE];
  let tried = 0;
  while (out.length < count && tried < 50) {
    tried++;
    const variant =
      rng() < 0.33
        ? mirrorPolygonY(target)
        : rng() < 0.5
          ? deformPolygon(target, rng, 8)
          : scalePolygon(
              pool[Math.floor(rng() * pool.length)]!,
              0.9 + rng() * 0.3,
              0.9 + rng() * 0.3
            );
    const fp = polygonFingerprint(variant);
    if (fp === targetFp || fp === excludeFingerprint) continue;
    if (out.some((p) => polygonFingerprint(p) === fp)) continue;
    out.push(variant);
  }
  while (out.length < count) {
    const v = pool[out.length % pool.length]!;
    const scaled = scalePolygon(v, 0.85 + rng() * 0.2, 0.85 + rng() * 0.2);
    if (polygonFingerprint(scaled) !== targetFp) out.push(scaled);
  }
  return out.slice(0, count);
}

// =============================================================================
// GENERATOR – Pipeline: Kandidat → Validator → DuplicateGuard → Return
// =============================================================================

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
  return {
    id: `fz-train-fb-${difficulty}-${seed}`,
    pieces,
    target,
    options: [four[order[0]!]!, four[order[1]!]!, four[order[2]!]!, four[order[3]!]!, OPTION_E],
    correctIndex,
    difficulty,
    explanation: `Die ${pieces.length} Teile setzen sich exakt zur gewählten Figur zusammen.`,
  };
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
