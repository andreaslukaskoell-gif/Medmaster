// Programmatischer Generator für "Figuren zusammensetzen"
// Erzeugt mathematisch korrekte SVG-Pfade für 13 MedAT-Lösungsfiguren
// Zerschneidet Figuren algorithmisch, rotiert Teile mit seeded random

// ─── Types ───────────────────────────────────────────────────────────

export interface FZPiece {
  path: string;
  fill: string;
}

export interface FZOption {
  id: string;
  paths: string[];
  fill: string;
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

function rd(n: number): number {
  return Math.round(n * 100) / 100;
}

type Pt = [number, number];

/** Seeded pseudo-random (LCG) */
function seededRandom(seed: number): () => number {
  let s = seed & 0x7fffffff;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

/** Regular polygon vertices, first vertex at top (-PI/2) */
function regularPolygon(cx: number, cy: number, r: number, sides: number): Pt[] {
  return Array.from({ length: sides }, (_, i) => {
    const a = -PI / 2 + (TAU * i) / sides;
    return [rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))];
  });
}

/** Centroid of a point array */
function centroid(pts: Pt[]): Pt {
  const n = pts.length;
  const sx = pts.reduce((s, p) => s + p[0], 0);
  const sy = pts.reduce((s, p) => s + p[1], 0);
  return [rd(sx / n), rd(sy / n)];
}

/** Rotate points around (cx,cy) by angle in radians */
function rotatePoints(pts: Pt[], angle: number, cx: number, cy: number): Pt[] {
  const c = Math.cos(angle), s = Math.sin(angle);
  return pts.map(([x, y]) => [
    rd(cx + (x - cx) * c - (y - cy) * s),
    rd(cy + (x - cx) * s + (y - cy) * c),
  ]);
}

/** Convert point array to SVG path "M x y L x y ... Z" */
function pointsToPath(pts: Pt[]): string {
  return "M " + pts.map(p => `${p[0]} ${p[1]}`).join(" L ") + " Z";
}

/** SVG arc sector path (pie slice) from center */
function sectorPath(cx: number, cy: number, r: number, a1: number, a2: number): string {
  const x1 = rd(cx + r * Math.cos(a1)), y1 = rd(cy + r * Math.sin(a1));
  const x2 = rd(cx + r * Math.cos(a2)), y2 = rd(cy + r * Math.sin(a2));
  const largeArc = (a2 - a1) > PI ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

/** Full circle path */
function circlePath(cx: number, cy: number, r: number): string {
  return `M ${rd(cx + r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx - r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx + r)} ${cy} Z`;
}

/** Midpoint between two points */
function mid(a: Pt, b: Pt): Pt {
  return [rd((a[0] + b[0]) / 2), rd((a[1] + b[1]) / 2)];
}

/** Point along an edge at fraction t */
function lerp(a: Pt, b: Pt, t: number): Pt {
  return [rd(a[0] + (b[0] - a[0]) * t), rd(a[1] + (b[1] - a[1]) * t)];
}

// ─── 13 Official Solution Figures (200×200 viewBox) ──────────────────

type FigurKey =
  | "dreieck" | "quadrat" | "raute" | "parallelogramm" | "trapez"
  | "fuenfeck" | "sechseck" | "siebeneck" | "achteck"
  | "viertelkreis" | "halbkreis" | "dreiviertelkreis" | "vollkreis";

const FIGUR_OUTLINES: Record<FigurKey, () => string> = {
  dreieck: () => pointsToPath(regularPolygon(100, 115, 85, 3)),
  quadrat: () => pointsToPath(regularPolygon(100, 100, 85, 4)),
  raute: () => "M 100 20 L 175 100 L 100 180 L 25 100 Z",
  parallelogramm: () => "M 55 50 L 175 50 L 145 150 L 25 150 Z",
  trapez: () => "M 65 50 L 135 50 L 175 150 L 25 150 Z",
  fuenfeck: () => pointsToPath(regularPolygon(100, 105, 82, 5)),
  sechseck: () => pointsToPath(regularPolygon(100, 100, 82, 6)),
  siebeneck: () => pointsToPath(regularPolygon(100, 100, 82, 7)),
  achteck: () => pointsToPath(regularPolygon(100, 100, 80, 8)),
  viertelkreis: () => "M 40 160 L 40 30 A 130 130 0 0 1 170 160 Z",
  halbkreis: () => `M ${rd(100 - 80)} 130 A 80 80 0 0 0 ${rd(100 + 80)} 130 Z`,
  dreiviertelkreis: () => {
    const cx = 100, cy = 100, r = 80;
    const a1 = PI / 4, a2 = -PI / 4;
    return `M ${cx} ${cy} L ${rd(cx + r * Math.cos(a1))} ${rd(cy + r * Math.sin(a1))} A ${r} ${r} 0 1 0 ${rd(cx + r * Math.cos(a2))} ${rd(cy + r * Math.sin(a2))} Z`;
  },
  vollkreis: () => circlePath(100, 100, 80),
};

const ALL_FIGUR_KEYS: FigurKey[] = Object.keys(FIGUR_OUTLINES) as FigurKey[];

const FIGUR_NAMES: Record<FigurKey, string> = {
  dreieck: "ein gleichseitiges Dreieck",
  quadrat: "ein Quadrat",
  raute: "eine Raute",
  parallelogramm: "ein Parallelogramm",
  trapez: "ein Trapez",
  fuenfeck: "ein regelmäßiges Fünfeck (Pentagon)",
  sechseck: "ein regelmäßiges Sechseck (Hexagon)",
  siebeneck: "ein regelmäßiges Siebeneck (Heptagon)",
  achteck: "ein regelmäßiges Achteck (Oktagon)",
  viertelkreis: "einen Viertelkreis",
  halbkreis: "einen Halbkreis",
  dreiviertelkreis: "einen Dreiviertelkreis",
  vollkreis: "einen Vollkreis",
};

// ─── Piece Splitting ─────────────────────────────────────────────────

// Small piece viewBox: 120×110 (pieces displayed individually)
const PCX = 60, PCY = 55, PR = 40;

/**
 * Split regular polygon into triangular sectors from center to vertices.
 * numPieces <= sides: merge adjacent sectors to get fewer pieces.
 */
function splitPolygon(sides: number, numPieces: number, rng: () => number): string[] {
  const verts = regularPolygon(PCX, PCY, PR, sides);
  const center: Pt = [PCX, PCY];

  if (numPieces <= sides) {
    // Distribute vertices among pieces
    const perGroup = Math.floor(sides / numPieces);
    const extra = sides % numPieces;
    const pieces: Pt[][] = [];
    let idx = 0;
    for (let g = 0; g < numPieces; g++) {
      const cnt = perGroup + (g < extra ? 1 : 0);
      const pts: Pt[] = [center];
      for (let j = 0; j <= cnt; j++) {
        pts.push(verts[(idx + j) % sides]);
      }
      pieces.push(pts);
      idx += cnt;
    }
    // Rotate each piece randomly
    return pieces.map(pts => {
      const angle = rng() * TAU;
      return pointsToPath(rotatePoints(pts, angle, PCX, PCY));
    });
  }

  // More pieces than vertices: split some edges at midpoints
  const allSectors: Pt[][] = [];
  for (let i = 0; i < sides; i++) {
    allSectors.push([center, verts[i], verts[(i + 1) % sides]]);
  }
  // Split additional sectors by bisecting
  while (allSectors.length < numPieces) {
    // Find the largest sector and split it
    let maxIdx = 0, maxArea = 0;
    for (let i = 0; i < allSectors.length; i++) {
      const pts = allSectors[i];
      const area = Math.abs((pts[1][0] - pts[0][0]) * (pts[2][1] - pts[0][1]) -
        (pts[2][0] - pts[0][0]) * (pts[1][1] - pts[0][1]));
      if (area > maxArea) { maxArea = area; maxIdx = i; }
    }
    const [c, a, b] = allSectors[maxIdx];
    const m = mid(a, b);
    allSectors.splice(maxIdx, 1, [c, a, m], [c, m, b]);
  }
  return allSectors.map(pts => {
    const angle = rng() * TAU;
    return pointsToPath(rotatePoints(pts, angle, PCX, PCY));
  });
}

/**
 * Split a quadrilateral (parallelogram, trapez, raute) from center into triangles.
 */
function splitQuad(v4: Pt[], numPieces: number, rng: () => number): string[] {
  const center = centroid(v4);

  // Base triangles from center to each edge
  const baseTris: Pt[][] = [];
  for (let i = 0; i < 4; i++) {
    baseTris.push([center, v4[i], v4[(i + 1) % 4]]);
  }

  if (numPieces <= 4) {
    // Merge: for 3, merge last two; for 4, keep as-is
    if (numPieces === 3) {
      const pieces = [
        baseTris[0],
        baseTris[1],
        [center, v4[2], v4[3], v4[0]], // merge last two
      ];
      return pieces.map(pts => {
        const angle = rng() * TAU;
        return pointsToPath(rotatePoints(pts, angle, PCX, PCY));
      });
    }
    return baseTris.map(pts => {
      const angle = rng() * TAU;
      return pointsToPath(rotatePoints(pts, angle, PCX, PCY));
    });
  }

  // For 5-7 pieces: split edges at midpoints
  const allPieces: Pt[][] = [...baseTris];
  let splitIdx = 0;
  while (allPieces.length < numPieces) {
    const idx = splitIdx % allPieces.length;
    const [c, a, b] = allPieces[idx];
    const m = mid(a, b);
    allPieces.splice(idx, 1, [c, a, m], [c, m, b]);
    splitIdx++;
  }
  return allPieces.map(pts => {
    const angle = rng() * TAU;
    return pointsToPath(rotatePoints(pts, angle, PCX, PCY));
  });
}

/**
 * Split circle into arc sectors.
 */
function splitCircle(totalAngle: number, startAngle: number, numPieces: number, rng: () => number): string[] {
  const sliceAngle = totalAngle / numPieces;
  return Array.from({ length: numPieces }, (_, i) => {
    const a1 = startAngle + i * sliceAngle;
    const a2 = a1 + sliceAngle;
    const rot = rng() * TAU;
    // Rotate the sector by offsetting angles
    return sectorPath(PCX, PCY, PR, a1 + rot, a2 + rot);
  });
}

/**
 * Split a figure into pieces based on its type.
 */
function splitFigure(figurType: FigurKey, numPieces: number, seed: number): string[] {
  const rng = seededRandom(seed);

  switch (figurType) {
    case "dreieck":
      return splitPolygon(3, numPieces, rng);
    case "quadrat":
      return splitPolygon(4, numPieces, rng);
    case "fuenfeck":
      return splitPolygon(5, numPieces, rng);
    case "sechseck":
      return splitPolygon(6, numPieces, rng);
    case "siebeneck":
      return splitPolygon(7, numPieces, rng);
    case "achteck":
      return splitPolygon(8, numPieces, rng);
    case "raute": {
      const v: Pt[] = [[PCX, PCY - PR], [PCX + PR * 0.75, PCY], [PCX, PCY + PR], [PCX - PR * 0.75, PCY]];
      return splitQuad(v, numPieces, rng);
    }
    case "parallelogramm": {
      const v: Pt[] = [[PCX - 10, PCY - 25], [PCX + 35, PCY - 25], [PCX + 10, PCY + 25], [PCX - 35, PCY + 25]];
      return splitQuad(v, numPieces, rng);
    }
    case "trapez": {
      const v: Pt[] = [[PCX - 18, PCY - 28], [PCX + 18, PCY - 28], [PCX + 38, PCY + 28], [PCX - 38, PCY + 28]];
      return splitQuad(v, numPieces, rng);
    }
    case "vollkreis":
      return splitCircle(TAU, -PI / 2, numPieces, rng);
    case "halbkreis":
      return splitCircle(PI, PI, numPieces, rng);
    case "dreiviertelkreis":
      return splitCircle(1.5 * PI, PI / 4, numPieces, rng);
    case "viertelkreis":
      return splitCircle(PI / 2, -PI / 2, numPieces, rng);
  }
}

// ─── Option Generation ───────────────────────────────────────────────

function generateOptions(correctKey: FigurKey, seed: number): { options: FZOption[]; correctId: string } {
  const others = ALL_FIGUR_KEYS.filter(k => k !== correctKey);
  // Seeded shuffle
  const rng = seededRandom(seed);
  const shuffled = [...others];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const distractors = shuffled.slice(0, 7);
  // Place correct at random position
  const pos = Math.floor(rng() * 8);
  const keys = [...distractors];
  keys.splice(pos, 0, correctKey);

  return {
    options: keys.map((k, i) => ({
      id: String.fromCharCode(97 + i),
      paths: [FIGUR_OUTLINES[k]()],
      fill: "none",
    })),
    correctId: String.fromCharCode(97 + pos),
  };
}

// ─── Task Definitions ────────────────────────────────────────────────

interface TaskSpec {
  id: string;
  figur: FigurKey;
  pieces: number;
  difficulty: "leicht" | "mittel" | "schwer";
  seed: number;
}

const TASK_SPECS: TaskSpec[] = [
  // fz-1 to fz-10: leicht (3 Teile)
  { id: "fz-1",  figur: "vollkreis",         pieces: 3, difficulty: "leicht", seed: 101 },
  { id: "fz-2",  figur: "halbkreis",         pieces: 3, difficulty: "leicht", seed: 202 },
  { id: "fz-3",  figur: "quadrat",           pieces: 3, difficulty: "leicht", seed: 303 },
  { id: "fz-4",  figur: "dreieck",           pieces: 3, difficulty: "leicht", seed: 404 },
  { id: "fz-5",  figur: "viertelkreis",      pieces: 3, difficulty: "leicht", seed: 505 },
  { id: "fz-6",  figur: "raute",             pieces: 3, difficulty: "leicht", seed: 606 },
  { id: "fz-7",  figur: "dreiviertelkreis",  pieces: 3, difficulty: "leicht", seed: 707 },
  { id: "fz-8",  figur: "sechseck",          pieces: 3, difficulty: "leicht", seed: 808 },
  { id: "fz-9",  figur: "parallelogramm",    pieces: 3, difficulty: "leicht", seed: 909 },
  { id: "fz-10", figur: "trapez",            pieces: 3, difficulty: "leicht", seed: 1010 },

  // fz-11 to fz-20: mittel (4-5 Teile)
  { id: "fz-11", figur: "achteck",           pieces: 4, difficulty: "mittel", seed: 1111 },
  { id: "fz-12", figur: "fuenfeck",          pieces: 5, difficulty: "mittel", seed: 1212 },
  { id: "fz-13", figur: "vollkreis",         pieces: 5, difficulty: "mittel", seed: 1313 },
  { id: "fz-14", figur: "sechseck",          pieces: 4, difficulty: "mittel", seed: 1414 },
  { id: "fz-15", figur: "dreiviertelkreis",  pieces: 4, difficulty: "mittel", seed: 1515 },
  { id: "fz-16", figur: "trapez",            pieces: 4, difficulty: "mittel", seed: 1616 },
  { id: "fz-17", figur: "halbkreis",         pieces: 4, difficulty: "mittel", seed: 1717 },
  { id: "fz-18", figur: "raute",             pieces: 4, difficulty: "mittel", seed: 1818 },
  { id: "fz-19", figur: "quadrat",           pieces: 4, difficulty: "mittel", seed: 1919 },
  { id: "fz-20", figur: "dreieck",           pieces: 5, difficulty: "mittel", seed: 2020 },

  // fz-21 to fz-30: schwer (5-7 Teile)
  { id: "fz-21", figur: "siebeneck",         pieces: 7, difficulty: "schwer", seed: 2121 },
  { id: "fz-22", figur: "achteck",           pieces: 7, difficulty: "schwer", seed: 2222 },
  { id: "fz-23", figur: "fuenfeck",          pieces: 5, difficulty: "schwer", seed: 2323 },
  { id: "fz-24", figur: "vollkreis",         pieces: 6, difficulty: "schwer", seed: 2424 },
  { id: "fz-25", figur: "sechseck",          pieces: 6, difficulty: "schwer", seed: 2525 },
  { id: "fz-26", figur: "dreiviertelkreis",  pieces: 6, difficulty: "schwer", seed: 2626 },
  { id: "fz-27", figur: "parallelogramm",    pieces: 6, difficulty: "schwer", seed: 2727 },
  { id: "fz-28", figur: "trapez",            pieces: 5, difficulty: "schwer", seed: 2828 },
  { id: "fz-29", figur: "halbkreis",         pieces: 5, difficulty: "schwer", seed: 2929 },
  { id: "fz-30", figur: "raute",             pieces: 6, difficulty: "schwer", seed: 3030 },
];

// ─── Generate All Tasks ──────────────────────────────────────────────

function generateAufgabe(spec: TaskSpec): FZAufgabe {
  const piecePaths = splitFigure(spec.figur, spec.pieces, spec.seed);
  const { options, correctId } = generateOptions(spec.figur, spec.seed * 7 + 31);

  return {
    id: spec.id,
    pieces: piecePaths.map(p => ({ path: p, fill: "#ffffff" })),
    options,
    correctOptionId: correctId,
    difficulty: spec.difficulty,
    explanation: `Die ${spec.pieces} Teile ergeben zusammengesetzt ${FIGUR_NAMES[spec.figur]}.`,
  };
}

export const figurenAufgaben: FZAufgabe[] = TASK_SPECS.map(generateAufgabe);

// ─── Strategy Guide ──────────────────────────────────────────────────

export const figurenStrategyGuide = {
  title: "Figuren zusammensetzen \u2013 Strategie",
  sections: [
    {
      heading: "Grundprinzip",
      content:
        "Dir werden schwarze Puzzleteile gezeigt. Du musst erkennen, welche der 8 vorgegebenen Figuren (A\u2013H) entsteht, wenn man alle Teile richtig zusammensetzt.\n\nWICHTIG: Teile nur drehen, nie spiegeln oder skalieren! Jedes Teil beh\u00e4lt seine Gr\u00f6\u00dfe und Orientierung (nur Rotation erlaubt).",
    },
    {
      heading: "13 offizielle L\u00f6sungsfiguren",
      content:
        "13 offizielle L\u00f6sungsfiguren: 8 Polygone + 4 Kreisformen + Raute\n\n8 Polygone:\n\u2022 Dreieck (3 Ecken, 60\u00b0)\n\u2022 Quadrat (4 Ecken, 90\u00b0)\n\u2022 Parallelogramm (4 Ecken, Seiten paarweise parallel)\n\u2022 Trapez (4 Ecken, ein Paar parallele Seiten)\n\u2022 F\u00fcnfeck (5 Ecken, 108\u00b0)\n\u2022 Sechseck (6 Ecken, 120\u00b0)\n\u2022 Siebeneck (7 Ecken, ~128.6\u00b0)\n\u2022 Achteck (8 Ecken, 135\u00b0)\n\n4 Kreisformen:\n\u2022 Viertelkreis (90\u00b0-Kreisausschnitt)\n\u2022 Halbkreis (180\u00b0-Kreisausschnitt)\n\u2022 Dreiviertelkreis (270\u00b0-Kreisausschnitt)\n\u2022 Vollkreis (360\u00b0)\n\nSonderform:\n\u2022 Raute (4 gleich lange Seiten, keine 90\u00b0)",
    },
    {
      heading: "Schritt-f\u00fcr-Schritt-Strategie",
      content:
        "Schritt 1: RUNDUNGEN PR\u00dcFEN\nHaben die Teile gekr\u00fcmmte Kanten? \u2192 Kreisform (Viertel-/Halb-/Dreiviertel-/Vollkreis).\nNur gerade Kanten? \u2192 Polygon oder Raute.\n\nSchritt 2: WINKEL ANALYSIEREN\n90\u00b0-Winkel \u2192 Quadrat, Trapez oder Viertelkreis\n120\u00b0-Winkel \u2192 Sechseck\n60\u00b0-Winkel \u2192 Dreieck\nStumpfe Winkel ohne 90\u00b0 \u2192 F\u00fcnfeck, Siebeneck, Achteck, Parallelogramm, Raute\n\nSchritt 3: GR\u00d6SSTES TEIL ALS BASIS\nNimm das gr\u00f6\u00dfte Puzzleteil als Ausgangspunkt. Lege die kleineren Teile mental daran an. Pr\u00fcfe, ob die Au\u00dfenkanten zusammenpassen.",
    },
    {
      heading: "Typische Fallen",
      content:
        "\u2022 Raute vs. Quadrat: Beide haben 4 gleich lange Seiten, aber die Raute hat KEINE rechten Winkel.\n\u2022 Parallelogramm vs. Trapez: Beim Parallelogramm sind BEIDE Seitenpaare parallel, beim Trapez nur EINES.\n\u2022 Sechseck vs. Achteck: Genau z\u00e4hlen! Regelm\u00e4\u00dfige Polygone sehen sich \u00e4hnlich.\n\u2022 Dreiviertelkreis vs. Vollkreis: Achte auf den fehlenden Sektor.\n\u2022 F\u00fcnfeck vs. Sechseck: 5 vs. 6 Ecken \u2014 die Innenwinkel unterscheiden sich deutlich (108\u00b0 vs. 120\u00b0).",
    },
    {
      heading: "Zeitmanagement",
      content:
        "80 Sekunden pro Aufgabe \u2014 schnell Kategorie erkennen!\n\n0\u201310 Sek: Rundungen? \u2192 Kreisform oder Polygon?\n10\u201325 Sek: Winkel und Kanten analysieren, 3\u20134 Optionen ausschlie\u00dfen\n25\u201360 Sek: Gr\u00f6\u00dfstes Teil als Basis, Rest mental anlegen\n60\u201380 Sek: Beste Option w\u00e4hlen, bei Unsicherheit markieren und weitergehen\n\nNicht zu lange gr\u00fcbeln! Lieber z\u00fcgig die beste Vermutung abgeben und zur n\u00e4chsten Aufgabe.",
    },
  ],
};
