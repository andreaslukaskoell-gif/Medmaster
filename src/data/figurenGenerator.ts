// Figuren zusammensetzen (KFF) – MedAT-Stil (IB_FZ_26)
//
// Zielfiguren werden strategisch zerschnitten (gerade Schnitte, klare Teile). STRATEGIC_SCHEMES;
// Flächenvalidierung: Summe Teile ≈ Zielfigur. 5 Optionen A–E, 1 korrekt, E = "Keine ist richtig".
// SVG: flaches Hellblau, klare Kontur. Lösungsansicht = dieselben Teile korrekt zusammengesetzt (assemblyPath).

// ─── Types ───────────────────────────────────────────────────────────

export interface FZPiece {
  path: string;
  fill: string;
  /** Pfad in Assembly-Koordinaten (gleiches viewBox wie andere Teile); alle assemblyPath zusammen ergeben die zusammengesetzte Figur. */
  assemblyPath?: string;
}

export interface FZOption {
  id: string;
  paths: string[];
  fill: string;
  text?: string;
}

/** Kanonische Schwierigkeit: easy (2–3 Teile, gerade Schnitte), medium (3–5, Rotation nötig), hard (5–7, komplex). */
export type FZDifficultyLevel = "easy" | "medium" | "hard";

/** Anzeige im UI: leicht / mittel / schwer. Akzeptiert auch deutsche Werte (für andere KFF-Module). */
export function difficultyLabel(
  level: FZDifficultyLevel | "leicht" | "mittel" | "schwer"
): "leicht" | "mittel" | "schwer" {
  if (level === "leicht" || level === "mittel" || level === "schwer") return level;
  return level === "easy" ? "leicht" : level === "medium" ? "mittel" : "schwer";
}

/** @deprecated Nutze FZDifficultyLevel + difficultyLabel für Anzeige. */
export type FZDifficulty = "leicht" | "mittel" | "schwer";

/** Exakte Position + Rotation eines Teils in der Lösungsfigur (Kantenbündig, keine Überlappung). */
export type FZSolutionLayoutItem = { rotation: number; translation: [number, number] };

export interface FZAufgabe {
  id: string;
  /** Zielfigur als SVG-Pfad (200×200); für Validierung und Referenz. */
  targetShapePath?: string;
  pieces: FZPiece[];
  /** Immer genau 5 Optionen (A–E). E = "Keine der Figuren ist richtig". */
  options: FZOption[];
  correctOptionId: "a" | "b" | "c" | "d" | "e";
  /** Echte Schwierigkeitsstufe (easy/medium/hard). */
  difficulty: FZDifficultyLevel;
  /** Lösung: Position + Rotation pro Teil; bei strategischen Schnitten rotation 0 (exakte Überdeckung). */
  solutionLayout?: FZSolutionLayoutItem[];
  explanation: string;
}

// ─── Math Helpers ────────────────────────────────────────────────────

const PI = Math.PI;
const TAU = 2 * PI;
/** Einheitliche Figurenfarbe (hellblau, MedAT-ähnlich). Export für UI. */
export const FILL = "#5eb8f0";
const STROKE = "#0e7490";

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

/** Fläche eines Polygons (Shoelace); für Validierung: Summe Teile ≈ Zielfigur. */
function polygonArea(pts: Pt[]): number {
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
  }
  return Math.abs(area) / 2;
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
  | "fünfeck"
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
  "fünfeck",
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
  fünfeck: pts2path(polygonPts(100, 105, 80, 5)),
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
  fünfeck: "ein regelmäßiges Fünfeck",
  sechseck: "ein regelmäßiges Sechseck",
  siebeneck: "ein regelmäßiges Siebeneck",
  achteck: "ein regelmäßiges Achteck",
  viertelkreis: "einen Viertelkreis",
  halbkreis: "einen Halbkreis",
  dreiviertelkreis: "einen Dreiviertelkreis",
  vollkreis: "einen Vollkreis",
};

/** Für Strategie-View: alle 13 Lösungsfiguren mit Pfad und Anzeigename (richtige Farbe wie beim Üben). */
export const FIGURE_STRATEGY_GALLERY: { key: string; path: string; name: string }[] = ALL_FK.map(
  (key) => ({ key, path: FIG[key], name: FIGNAME[key] })
);

/** Plausible Distraktoren pro Figur: gleiche Kategorie (z. B. gleiche Eckenzahl, andere Winkel/Silhouette).
 * So ist nur die richtige Option aus den Teilen exakt rekonstruierbar; keine triviale Lösung durch reines Kanten-Zählen. */
const SIMILAR: Record<FK, FK[]> = {
  dreieck: ["fünfeck", "raute", "trapez"],
  quadrat: ["raute", "parallelogramm", "trapez"],
  raute: ["quadrat", "parallelogramm", "trapez"],
  parallelogramm: ["trapez", "quadrat", "raute"],
  trapez: ["parallelogramm", "raute", "quadrat"],
  fünfeck: ["sechseck", "siebeneck", "achteck"],
  sechseck: ["fünfeck", "achteck", "siebeneck"],
  siebeneck: ["sechseck", "achteck", "fünfeck"],
  achteck: ["siebeneck", "sechseck", "fünfeck"],
  viertelkreis: ["halbkreis", "dreiviertelkreis", "vollkreis"],
  halbkreis: ["viertelkreis", "dreiviertelkreis", "vollkreis"],
  dreiviertelkreis: ["halbkreis", "vollkreis", "viertelkreis"],
  vollkreis: ["dreiviertelkreis", "halbkreis", "viertelkreis"],
};

// ─── Zielfiguren & strategische Schnitte (MedAT IB_FZ_26-Stil) ───────
// Gerade Schnitte, wenige klare Teile, realistisch zusammensetzbar.

const CX = 100,
  CY = 100,
  R = 65;

/** Zielfigur als Polygon-Punkte (für Flächenvalidierung und strategische Schnitte). */
function getTargetVerts(fig: FK): Pt[] {
  if (POLY_SIDES[fig]) {
    return polygonPts(CX, CY, R, POLY_SIDES[fig]!);
  }
  if (fig === "raute" || fig === "parallelogramm" || fig === "trapez") {
    return quadVerts(fig);
  }
  const [tot, st] = CIRCLE_SPECS[fig]!;
  const steps = Math.max(12, Math.round((tot * 12) / PI));
  const pts: Pt[] = [[CX, CY]];
  for (let i = 0; i <= steps; i++) {
    const a = st + (tot * i) / steps;
    pts.push([rd(CX + R * Math.cos(a)), rd(CY + R * Math.sin(a))]);
  }
  return pts;
}

/** Strategischer Schnitt: Quadrat in 2 Teile (Diagonale). */
function cutQuadratDiagonal(): Pt[][] {
  const v = polygonPts(CX, CY, R, 4);
  return [
    [v[0], v[1], v[2]],
    [v[0], v[2], v[3]],
  ];
}

/** Strategischer Schnitt: Quadrat in 4 Teile (von Mittelpunkt zu Ecken). */
function cutQuadratCenter4(): Pt[][] {
  const v = polygonPts(CX, CY, R, 4);
  const c = centroid(v);
  return [
    [c, v[0], v[1]],
    [c, v[1], v[2]],
    [c, v[2], v[3]],
    [c, v[3], v[0]],
  ];
}

/** Strategischer Schnitt: Dreieck in 2 Teile (Median). */
function cutDreieckMedian(): Pt[][] {
  const v = polygonPts(CX, CY, R, 3);
  const m = midPt(v[1], v[2]);
  return [
    [v[0], v[1], m],
    [v[0], m, v[2]],
  ];
}

/** Strategischer Schnitt: Sechseck in 3 Teile (je 2 Kanten vom Zentrum). */
function cutSechseck3(): Pt[][] {
  const v = polygonPts(CX, CY, R, 6);
  const c = centroid(v);
  return [
    [c, v[0], v[1], v[2]],
    [c, v[2], v[3], v[4]],
    [c, v[4], v[5], v[0]],
  ];
}

/** Strategischer Schnitt: Sechseck in 2 Teile (durch gegenüberliegende Ecken). */
function cutSechseck2(): Pt[][] {
  const v = polygonPts(CX, CY, R, 6);
  return [
    [v[0], v[1], v[2], v[3]],
    [v[0], v[3], v[4], v[5]],
  ];
}

/** Strategischer Schnitt: Halbkreis in 2 Sektoren. */
function cutHalbkreis2(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["halbkreis"]!;
  const mid = st + tot / 2;
  return [arcToPts(CX, CY, R, st, mid), arcToPts(CX, CY, R, mid, st + tot)];
}

/** Strategischer Schnitt: Vollkreis in 3 gleiche Sektoren. */
function cutVollkreis3(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["vollkreis"]!;
  const step = tot / 3;
  return [
    arcToPts(CX, CY, R, st, st + step),
    arcToPts(CX, CY, R, st + step, st + 2 * step),
    arcToPts(CX, CY, R, st + 2 * step, st + tot),
  ];
}

/** Strategischer Schnitt: Vollkreis in 4 gleiche Sektoren. */
function cutVollkreis4(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["vollkreis"]!;
  const step = tot / 4;
  return [
    arcToPts(CX, CY, R, st, st + step),
    arcToPts(CX, CY, R, st + step, st + 2 * step),
    arcToPts(CX, CY, R, st + 2 * step, st + 3 * step),
    arcToPts(CX, CY, R, st + 3 * step, st + tot),
  ];
}

/** Strategischer Schnitt: Fünfeck in 3 Teile (Zentrum zu Kanten). */
function cutFünfeck3(): Pt[][] {
  const v = polygonPts(CX, CY, R, 5);
  const c = centroid(v);
  return [
    [c, v[0], v[1], v[2]],
    [c, v[2], v[3]],
    [c, v[3], v[4], v[0]],
  ];
}

/** Strategischer Schnitt: Trapez in 2 Teile (parallel zur Grundlinie). */
function cutTrapez2(): Pt[][] {
  const v = quadVerts("trapez");
  const m1 = midPt(v[0], v[1]);
  const m2 = midPt(v[2], v[3]);
  return [
    [v[0], v[1], m2, m1],
    [m1, m2, v[3], v[2]],
  ];
}

/** Raute in 2 Teile (eine Diagonale). */
function cutRaute2(): Pt[][] {
  const v = quadVerts("raute");
  return [
    [v[0], v[1], v[2]],
    [v[0], v[2], v[3]],
  ];
}

/** Viertelkreis in 2 Teile (Winkelhalbierende). */
function cutViertelkreis2(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["viertelkreis"]!;
  const mid = st + tot / 2;
  return [arcToPts(CX, CY, R, st, mid), arcToPts(CX, CY, R, mid, st + tot)];
}

/** Sechseck in 6 Teile (Zentrum zu jeder Ecke) – schwer. */
function cutSechseck6(): Pt[][] {
  const v = polygonPts(CX, CY, R, 6);
  const c = centroid(v);
  return Array.from({ length: 6 }, (_, i) => [c, v[i], v[(i + 1) % 6]]);
}

/** Achteck in 4 Teile (je 2 gegenüberliegende Ecken) – schwer. */
function cutAchteck4(): Pt[][] {
  const v = polygonPts(CX, CY, R, 8);
  const c = centroid(v);
  return [
    [c, v[0], v[1], v[2]],
    [c, v[2], v[3], v[4]],
    [c, v[4], v[5], v[6]],
    [c, v[6], v[7], v[0]],
  ];
}

/** Fünfeck in 5 Teile (Zentrum zu jeder Ecke) – schwer. */
function cutFünfeck5(): Pt[][] {
  const v = polygonPts(CX, CY, R, 5);
  const c = centroid(v);
  return Array.from({ length: 5 }, (_, i) => [c, v[i], v[(i + 1) % 5]]);
}

/** Vollkreis in 6 gleiche Sektoren – schwer. */
function cutVollkreis6(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["vollkreis"]!;
  const step = tot / 6;
  return Array.from({ length: 6 }, (_, i) =>
    arcToPts(CX, CY, R, st + i * step, st + (i + 1) * step)
  );
}

/** Siebeneck in 7 Teile (Zentrum zu jeder Ecke) – schwer. */
function cutSiebeneck7(): Pt[][] {
  const v = polygonPts(CX, CY, R, 7);
  const c = centroid(v);
  return Array.from({ length: 7 }, (_, i) => [c, v[i], v[(i + 1) % 7]]);
}

/** Dreiviertelkreis in 3 Sektoren – mittel. */
function cutDreiviertelkreis3(): Pt[][] {
  const [tot, st] = CIRCLE_SPECS["dreiviertelkreis"]!;
  const step = tot / 3;
  return [
    arcToPts(CX, CY, R, st, st + step),
    arcToPts(CX, CY, R, st + step, st + 2 * step),
    arcToPts(CX, CY, R, st + 2 * step, st + tot),
  ];
}

const STRATEGIC_SCHEMES: Array<{ fig: FK; pieces: () => Pt[][]; diff: FZDifficultyLevel }> = [
  // ── Easy: 2–3 Teile, gerade Schnitte ──
  { fig: "quadrat", pieces: cutQuadratDiagonal, diff: "easy" },
  { fig: "dreieck", pieces: cutDreieckMedian, diff: "easy" },
  { fig: "raute", pieces: cutRaute2, diff: "easy" },
  { fig: "halbkreis", pieces: cutHalbkreis2, diff: "easy" },
  { fig: "viertelkreis", pieces: cutViertelkreis2, diff: "easy" },
  // ── Medium: 3–5 Teile, 1–2 Rotationen ──
  { fig: "quadrat", pieces: cutQuadratCenter4, diff: "medium" },
  { fig: "sechseck", pieces: cutSechseck2, diff: "medium" },
  { fig: "sechseck", pieces: cutSechseck3, diff: "medium" },
  { fig: "vollkreis", pieces: cutVollkreis3, diff: "medium" },
  { fig: "vollkreis", pieces: cutVollkreis4, diff: "medium" },
  { fig: "fünfeck", pieces: cutFünfeck3, diff: "medium" },
  { fig: "trapez", pieces: cutTrapez2, diff: "medium" },
  { fig: "dreiviertelkreis", pieces: cutDreiviertelkreis3, diff: "medium" },
  // ── Hard: 5–7 Teile, mehrere Rotationen ──
  { fig: "sechseck", pieces: cutSechseck6, diff: "hard" },
  { fig: "achteck", pieces: cutAchteck4, diff: "hard" },
  { fig: "fünfeck", pieces: cutFünfeck5, diff: "hard" },
  { fig: "vollkreis", pieces: cutVollkreis6, diff: "hard" },
  { fig: "siebeneck", pieces: cutSiebeneck7, diff: "hard" },
];

/** Flächenvalidierung: Polygone exakt (1e-6), Kreissegmente relativ (2 %), da arcToPts-Polygone nur Näherung. */
const AREA_TOLERANCE_POLY = 1e-6;

function isCircleFig(fig: FK): boolean {
  return !!CIRCLE_SPECS[fig];
}

/** Zielfläche: Polygone exakt über Shoelace, Kreissegmente analytisch (R²·θ/2). */
function getTargetArea(fig: FK): number {
  if (isCircleFig(fig)) {
    const [tot] = CIRCLE_SPECS[fig]!;
    return (R * R * tot) / 2;
  }
  return polygonArea(getTargetVerts(fig));
}

/** Toleranz für Kreissegmente: 2 % der Zielfläche (Diskretisierungsfehler von arcToPts). */
function getAreaTolerance(fig: FK): number {
  return isCircleFig(fig) ? Math.max(0.5, getTargetArea(fig) * 0.02) : AREA_TOLERANCE_POLY;
}

/** Skaliert/zentriert ein Polygon-Set in 200×200 (ein gemeinsamer Transform für exakte Überdeckung). */
function scaleToViewBox(pieces: Pt[][], pad: number): Pt[][] {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const pts of pieces) {
    for (const [x, y] of pts) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
  const midX = (minX + maxX) / 2,
    midY = (minY + maxY) / 2;
  const w = maxX - minX || 1,
    h = maxY - minY || 1;
  const scale = Math.min((200 - 2 * pad) / w, (200 - 2 * pad) / h);
  return pieces.map((pts) =>
    pts.map(([x, y]) => [rd(100 + (x - midX) * scale), rd(100 + (y - midY) * scale)] as Pt)
  );
}

/** Liefert Display-Pfade (rotiert, pro Teil zentriert) und exakte Assembly-Pfade (Roh-Teile, keine Rotation). */
function makePiecesFromRaw(
  rawPieces: Pt[][],
  diff: FZDifficultyLevel,
  seed: number
): { display: string[]; assembly: string[]; solutionLayout: FZSolutionLayoutItem[] } {
  const rand = createRng(seed);
  const angles = rawPieces.map(() => quantizedAngleForLevel(diff, rand));
  const displayPaths = rawPieces.map((pts, i) => pts2path(transformPiece(pts, angles[i])));
  // Lösung = exakt dieselben Teile ohne Rotation, gemeinsam skaliert → kantenbündig, keine Lücken/Überlappung
  const assemblyScaled = scaleToViewBox(rawPieces, 15);
  const assemblyPaths = assemblyScaled.map((pts) => pts2path(pts));
  const solutionLayout: FZSolutionLayoutItem[] = rawPieces.map(() => ({
    rotation: 0,
    translation: [100, 100],
  }));
  return { display: displayPaths, assembly: assemblyPaths, solutionLayout };
}

/** Quantisierte Rotation je nach Level (für Display-Verschlüsselung). */
function quantizedAngleForLevel(level: FZDifficultyLevel, rand: () => number): number {
  if (level === "easy") return Math.floor(rand() * 4) * (PI / 2);
  if (level === "medium") return Math.floor(rand() * 8) * (PI / 4);
  return Math.floor(rand() * 24) * (PI / 12);
}

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
  fünfeck: 5,
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

/** Rotate piece in figure coords (no per-piece scale); for assembly view. */
function rotatePieceInPlace(pts: Pt[], angle: number): Pt[] {
  const c = centroid(pts);
  return rotatePts(pts, angle, c[0], c[1]);
}

/** Generate piece SVG paths: split → rotate (quantized) → center+scale. Plus assembly paths in shared coords. */
function makePieces(
  fig: FK,
  numPieces: number,
  diff: "leicht" | "mittel" | "schwer",
  seed: number
): { display: string[]; assembly: string[] } {
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

  const angles = rawPieces.map(() => quantizedAngle(diff, rand));
  const displayPaths = rawPieces.map((pts, i) => pts2path(transformPiece(pts, angles[i])));
  const rotatedInFigure = rawPieces.map((pts, i) => rotatePieceInPlace(pts, angles[i]));

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const pts of rotatedInFigure) {
    for (const [x, y] of pts) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
  const midX = (minX + maxX) / 2,
    midY = (minY + maxY) / 2;
  const pad = 15,
    w = maxX - minX || 1,
    h = maxY - minY || 1;
  const scale = Math.min((200 - 2 * pad) / w, (200 - 2 * pad) / h);
  const assemblyPaths = rotatedInFigure.map((pts) =>
    pts2path(
      pts.map(([x, y]) => [rd(100 + (x - midX) * scale), rd(100 + (y - midY) * scale)] as Pt)
    )
  );

  return { display: displayPaths, assembly: assemblyPaths };
}

// ─── Option Generation ───────────────────────────────────────────────

/** Normal task: correct figure at random position a–d + 3 similar distractors + e.
 * Distraktoren: gleiche Kategorie (SIMILAR), z. B. gleiche Eckenzahl/falsche Winkel oder ähnliche Silhouette.
 * Nur die richtige Option ist aus den gegebenen Teilen exakt rekonstruierbar (keine Spiegelung). */
function makeOptionsNormal(
  correct: FK,
  seed: number
): { options: FZOption[]; correctId: "a" | "b" | "c" | "d" } {
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
  return { options, correctId: String.fromCharCode(97 + pos) as "a" | "b" | "c" | "d" };
}

/** E-correct task: 4 distractors (none is the correct figure) + e is correct */
function makeOptionsE(correct: FK, seed: number): { options: FZOption[]; correctId: "e" } {
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

// ─── Task Specifications (MedAT IB_FZ_26: strategische Schnitte, 5–10 Aufgaben) ─

type TaskSpec =
  | {
      id: string;
      schemeIndex: number; // Index in STRATEGIC_SCHEMES
      seed: number;
      eCorrect?: boolean;
    }
  | {
      id: string;
      fig: FK;
      pc: number;
      diff: FZDifficulty;
      seed: number;
      eCorrect?: boolean;
    };

/** 15 Aufgaben: 5× easy, 5× medium, 5× hard; 2× E korrekt. Nur geometrisch valide Aufgaben. */
const TASKS: TaskSpec[] = [
  { id: "fz-e1", schemeIndex: 0, seed: 1001 },
  { id: "fz-e2", schemeIndex: 1, seed: 1002 },
  { id: "fz-e3", schemeIndex: 2, seed: 1003 },
  { id: "fz-e4", schemeIndex: 3, seed: 1004 },
  { id: "fz-e5", schemeIndex: 4, seed: 1005, eCorrect: true },
  { id: "fz-m1", schemeIndex: 5, seed: 2001 },
  { id: "fz-m2", schemeIndex: 6, seed: 2002 },
  { id: "fz-m3", schemeIndex: 7, seed: 2003 },
  { id: "fz-m4", schemeIndex: 8, seed: 2004 },
  { id: "fz-m5", schemeIndex: 9, seed: 2005 },
  { id: "fz-h1", schemeIndex: 13, seed: 3001 },
  { id: "fz-h2", schemeIndex: 14, seed: 3002 },
  { id: "fz-h3", schemeIndex: 15, seed: 3003 },
  { id: "fz-h4", schemeIndex: 16, seed: 3004, eCorrect: true },
  { id: "fz-h5", schemeIndex: 17, seed: 3005 },
];

// ─── Build & Export ──────────────────────────────────────────────────

function buildStrategicAufgabe(spec: Extract<TaskSpec, { schemeIndex: number }>): FZAufgabe | null {
  const scheme = STRATEGIC_SCHEMES[spec.schemeIndex];
  if (!scheme) return null;
  const rawPieces = scheme.pieces();
  const targetArea = getTargetArea(scheme.fig);
  const piecesArea = rawPieces.reduce((s, p) => s + polygonArea(p), 0);
  const tolerance = getAreaTolerance(scheme.fig);
  if (Math.abs(piecesArea - targetArea) > tolerance) {
    console.warn(
      `Figuren ${spec.id}: ungültig – Flächenabweichung ${Math.abs(piecesArea - targetArea).toFixed(4)} (Toleranz ${tolerance})`
    );
    return null;
  }
  const { display, assembly, solutionLayout } = makePiecesFromRaw(
    rawPieces,
    scheme.diff,
    spec.seed
  );
  const optSeed = spec.seed * 3 + 7;
  const { options, correctId } = spec.eCorrect
    ? makeOptionsE(scheme.fig, optSeed)
    : makeOptionsNormal(scheme.fig, optSeed);
  if (options.length !== 5) return null;

  const explanation = spec.eCorrect
    ? `Keine der Figuren A\u2013D ist korrekt. Die ${rawPieces.length} Teile ergeben ${FIGNAME[scheme.fig]}.`
    : `Die ${rawPieces.length} Teile ergeben zusammengesetzt ${FIGNAME[scheme.fig]}.`;

  return {
    id: spec.id,
    targetShapePath: FIG[scheme.fig],
    pieces: display.map((path, i) => ({ path, fill: FILL, assemblyPath: assembly[i] })),
    options,
    correctOptionId: correctId,
    difficulty: scheme.diff,
    solutionLayout,
    explanation,
  };
}

function legacyDiffToLevel(d: "leicht" | "mittel" | "schwer"): FZDifficultyLevel {
  return d === "leicht" ? "easy" : d === "mittel" ? "medium" : "hard";
}

function buildLegacyAufgabe(spec: Extract<TaskSpec, { fig: FK }>): FZAufgabe {
  const { display, assembly } = makePieces(spec.fig, spec.pc, spec.diff, spec.seed);
  const optSeed = spec.seed * 3 + 7;
  const { options, correctId } = spec.eCorrect
    ? makeOptionsE(spec.fig, optSeed)
    : makeOptionsNormal(spec.fig, optSeed);
  if (options.length !== 5)
    throw new Error(`Figuren Aufgabe ${spec.id}: genau 5 Optionen erforderlich`);

  const explanation = spec.eCorrect
    ? `Keine der Figuren A\u2013D ist korrekt. Die ${spec.pc} Teile ergeben ${FIGNAME[spec.fig]}.`
    : `Die ${spec.pc} Teile ergeben zusammengesetzt ${FIGNAME[spec.fig]}.`;

  return {
    id: spec.id,
    targetShapePath: FIG[spec.fig],
    pieces: display.map((path, i) => ({ path, fill: FILL, assemblyPath: assembly[i] })),
    options,
    correctOptionId: correctId,
    difficulty: legacyDiffToLevel(spec.diff),
    explanation,
  };
}

function buildAufgabe(spec: TaskSpec): FZAufgabe | null {
  if ("schemeIndex" in spec) return buildStrategicAufgabe(spec);
  return buildLegacyAufgabe(spec);
}

/** Nur geometrisch valide Aufgaben (Fläche exakt, Lösung kantenbündig). */
export const figurenAufgaben: FZAufgabe[] = TASKS.map(buildAufgabe).filter(
  (a): a is FZAufgabe => a != null
);

/** MedAT-Beispielaufgaben (alle 10 mit strategischen Schnitten). */
export const figurenBeispielaufgaben: FZAufgabe[] = figurenAufgaben;

// QA: mind. 2 Aufgaben mit E korrekt; Flächenvalidierung bei strategischen Aufgaben
if (figurenAufgaben.filter((a) => a.correctOptionId === "e").length < 2) {
  console.warn("Figuren: QA erfordert mind. 2 Aufgaben mit korrekter Option E.");
}

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
