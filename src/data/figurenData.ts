// === Figuren zusammensetzen (FZ) - Puzzle Pieces Module ===

export interface FZPiece {
  path: string;
  fill: string;
}

export interface FZOption {
  id: string; // "a" through "e"
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

// ---- Helper: teal shades for puzzle pieces ----
const TEAL_SHADES = [
  "#0d9488", // teal-600
  "#14b8a6", // teal-500
  "#2dd4bf", // teal-400
  "#5eead4", // teal-300
  "#99f6e4", // teal-200
];

// ---- 30 Aufgaben: 10 leicht (2-3 Teile), 12 mittel (3-4 Teile), 8 schwer (4-5 Teile) ----

export const figurenAufgaben: FZAufgabe[] = [
  // ============ LEICHT (7 Aufgaben, 2-3 Teile) ============

  // 1 - Zwei Dreiecke bilden ein Quadrat
  {
    id: "fz-1",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 10 L 110 10 L 10 110 Z", fill: TEAL_SHADES[0] },
      { path: "M 20 20 L 120 120 L 120 20 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Zwei rechtwinklige Dreiecke gleicher Größe ergeben zusammengesetzt ein Quadrat (Option A).",
  },

  // 2 - Zwei Rechtecke bilden ein grosses Quadrat
  {
    id: "fz-2",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 10 L 110 10 L 110 60 L 10 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 20 20 L 120 20 L 120 70 L 20 70 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Zwei gleich große Rechtecke übereinander ergeben ein Quadrat (Option B).",
  },

  // 3 - Dreieck + Trapez = Rechteck
  {
    id: "fz-3",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 80 L 60 10 L 110 80 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 20 L 30 70 L 90 70 L 110 20 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 170 130 L 30 130 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Das Dreieck passt in die Aussparung des Trapezes und bildet zusammen ein Rechteck (Option C).",
  },

  // 4 - Zwei Hälften eines Kreises
  {
    id: "fz-4",
    difficulty: "leicht",
    pieces: [
      { path: "M 100 30 A 70 70 0 0 1 100 170 Z", fill: TEAL_SHADES[0] },
      { path: "M 100 30 A 70 70 0 0 0 100 170 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Zwei Halbkreise bilden zusammen einen vollständigen Kreis (Option D).",
  },

  // 5 - Drei Dreiecke bilden ein grosses Dreieck
  {
    id: "fz-5",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 80 L 50 10 L 90 80 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 80 L 90 10 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 80 L 50 10 L 90 80 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Drei kleine Dreiecke (zwei aufrecht, eines umgekehrt in der Mitte) bilden ein grosses Dreieck (Option B).",
  },

  // 6 - Zwei Dreiecke = Raute/Rhombus
  {
    id: "fz-6",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 50 L 60 10 L 110 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 60 50 L 110 10 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Zwei gleichschenklige Dreiecke mit gemeinsamer Basis ergeben eine Raute (Option C).",
  },

  // 7 - Drei Teile = Trapez
  {
    id: "fz-7",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 10 L 60 10 L 60 80 L 10 80 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 10 L 10 80 Z", fill: TEAL_SHADES[1] },
      { path: "M 50 10 L 90 10 L 90 80 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Das Rechteck bildet den Mittelteil, die beiden Dreiecke die schrägen Seiten. Zusammen ergibt sich ein Trapez (Option D).",
  },

  // ============ MITTEL (8 Aufgaben, 3-4 Teile) ============

  // 8 - Vier Dreiecke = Quadrat
  {
    id: "fz-8",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 60 10 L 10 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 60 10 L 110 10 L 110 60 Z", fill: TEAL_SHADES[1] },
      { path: "M 110 60 L 110 110 L 60 110 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 60 L 60 110 L 10 110 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Vier rechtwinklige Dreiecke, die an den Ecken ansetzen, füllen zusammen ein Quadrat (Option C).",
  },

  // 9 - Drei Stücke = Pfeil/Pentagon
  {
    id: "fz-9",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 60 L 60 10 L 110 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 30 10 L 70 10 L 70 70 L 30 70 Z", fill: TEAL_SHADES[1] },
      { path: "M 30 10 L 70 10 L 70 50 L 30 50 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 160 60 L 160 140 L 40 140 L 40 60 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Das Dreieck bildet die Pfeilspitze oben, die beiden Rechtecke den Schaft. Zusammen ergibt sich ein Pfeil/Pentagon (Option A).",
  },

  // 10 - Drei Teile = Haus (Fünfeck)
  {
    id: "fz-10",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 60 L 60 10 L 110 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 60 10 L 60 70 L 10 70 Z", fill: TEAL_SHADES[1] },
      { path: "M 60 10 L 110 10 L 110 70 L 60 70 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 170 80 L 170 170 L 30 170 L 30 80 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Dreieck (Dach) plus zwei Rechtecke (Wände) bilden eine Hausform / ein Fünfeck (Option B).",
  },

  // 11 - Vier Teile = Kreuz / Plus
  {
    id: "fz-11",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 50 10 L 50 40 L 10 40 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 10 L 50 40 L 10 40 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 40 50 L 10 50 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 10 L 40 50 L 10 50 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: [
        "M 70 30 L 130 30 L 130 70 L 170 70 L 170 130 L 130 130 L 130 170 L 70 170 L 70 130 L 30 130 L 30 70 L 70 70 Z"
      ], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Vier Rechtecke, die kreuzförmig angeordnet werden, ergeben ein Plus-/Kreuzzeichen (Option B).",
  },

  // 12 - Drei Teile = Sechseck (vereinfacht)
  {
    id: "fz-12",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 40 L 50 10 L 90 40 L 50 70 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 40 L 10 70 Z", fill: TEAL_SHADES[1] },
      { path: "M 50 10 L 90 40 L 50 70 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Die Raute in der Mitte und die beiden Dreiecke links und rechts bilden zusammen ein Sechseck (Option C).",
  },

  // 13 - Drei Teile = L-Form
  {
    id: "fz-13",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 50 10 L 50 90 L 10 90 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 60 10 L 60 40 L 10 40 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 40 40 L 10 40 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 90 30 L 90 100 L 170 100 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Das große Rechteck bildet den langen Schenkel, die beiden kleineren den kurzen Schenkel der L-Form (Option B).",
  },

  // 14 - Vier Dreiecke = grosser Rhombus
  {
    id: "fz-14",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 50 L 60 10 L 60 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 60 10 L 110 50 L 60 50 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 50 L 60 50 L 60 90 Z", fill: TEAL_SHADES[2] },
      { path: "M 60 50 L 110 50 L 60 90 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Vier kleine Dreiecke, die jeweils eine Ecke des Rhombus bilden, ergeben zusammen einen Rhombus / eine Raute (Option D).",
  },

  // 15 - Drei Teile = T-Form
  {
    id: "fz-15",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 110 10 L 110 40 L 10 40 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 40 10 L 40 60 L 10 60 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 40 60 L 10 60 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 70 L 120 70 L 120 170 L 80 170 L 80 70 L 30 70 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Das breite Rechteck bildet den Querbalken, die beiden schmalen Rechtecke den senkrechten Balken der T-Form (Option A).",
  },

  // ============ SCHWER (5 Aufgaben, 4-5 Teile) ============

  // 16 - Fünf Teile = Stern (vereinfacht als Pfeilstern)
  {
    id: "fz-16",
    difficulty: "schwer",
    pieces: [
      { path: "M 30 10 L 60 60 L 0 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 80 30 L 110 80 L 50 80 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 50 L 60 20 L 60 80 Z", fill: TEAL_SHADES[2] },
      { path: "M 60 20 L 110 50 L 60 80 Z", fill: TEAL_SHADES[3] },
      { path: "M 30 60 L 60 30 L 90 60 L 60 90 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: [
        "M 100 20 L 120 75 L 180 80 L 135 120 L 150 180 L 100 145 L 50 180 L 65 120 L 20 80 L 80 75 Z"
      ], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Die fünf Dreiecke und die Raute in der Mitte bilden zusammen einen fünfzackigen Stern (Option B).",
  },

  // 17 - Vier Teile = Pfeil nach rechts
  {
    id: "fz-17",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 70 10 L 70 40 L 10 40 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 70 10 L 70 40 L 10 40 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 50 L 50 10 L 90 50 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 50 50 L 10 90 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 30 70 L 120 70 L 120 30 L 180 100 L 120 170 L 120 130 L 30 130 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Zwei Rechtecke bilden den Schaft, das Dreieck die Spitze des nach rechts zeigenden Pfeils (Option A).",
  },

  // 18 - Fünf Stücke = Achteck (vereinfacht)
  {
    id: "fz-18",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 60 10 L 60 50 L 10 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 40 10 L 10 40 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 10 40 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 10 L 10 40 Z", fill: TEAL_SHADES[3] },
      { path: "M 10 10 L 40 10 L 10 40 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 70 30 L 130 30 L 170 70 L 170 130 L 130 170 L 70 170 L 30 130 L 30 70 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Das Rechteck bildet den Kern, die vier Dreiecke schneiden die Ecken ab und formen ein Achteck (Option C).",
  },

  // 19 - Vier Teile = Parallelogramm
  {
    id: "fz-19",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 70 10 L 70 60 L 10 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 60 L 50 10 L 50 60 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 50 10 L 10 60 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 50 10 L 50 60 L 10 60 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 60 30 L 180 30 L 140 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Das Rechteck, die beiden Dreiecke und das kleine Rechteck bilden zusammen ein Parallelogramm (Option B).",
  },

  // 20 - Fünf Stücke = Doppelpfeil / Sechseck-Pfeil
  {
    id: "fz-20",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 50 10 L 50 50 L 10 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 10 L 50 50 L 10 50 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 40 L 40 10 L 70 40 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 40 L 70 10 Z", fill: TEAL_SHADES[3] },
      { path: "M 10 10 L 30 10 L 30 50 L 10 50 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Zwei Rechtecke, zwei Dreiecke (Spitzen links und rechts) und das schmale Verbindungsstück bilden zusammen ein Sechseck (Option D).",
  },

  // ============ NEUE AUFGABEN (fz-21 bis fz-30) ============

  // ============ LEICHT - 3 neue (21-23) ============

  // 21 - Zwei Halbkreise bilden eine Ellipse
  {
    id: "fz-21",
    difficulty: "leicht",
    pieces: [
      { path: "M 100 30 A 70 50 0 0 1 100 170 Z", fill: TEAL_SHADES[0] },
      { path: "M 100 30 A 70 50 0 0 0 100 170 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 50 0 1 1 170 100 A 70 50 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Zwei Halbellipsen (links und rechts) ergeben zusammengesetzt eine vollständige Ellipse (Option D). Option C ist ein Kreis, keine Ellipse.",
  },

  // 22 - Rechteck + Dreieck = Hausform
  {
    id: "fz-22",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 10 L 90 10 L 90 70 L 10 70 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 70 L 50 10 L 90 70 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 170 80 L 170 170 L 30 170 L 30 80 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Das Rechteck bildet den unteren Teil (Wand) und das Dreieck das Dach. Zusammen ergibt sich eine Hausform / ein Fünfeck (Option A).",
  },

  // 23 - Zwei L-Formen bilden ein Rechteck
  {
    id: "fz-23",
    difficulty: "leicht",
    pieces: [
      { path: "M 10 10 L 60 10 L 60 30 L 30 30 L 30 60 L 10 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 30 10 L 30 40 L 60 40 L 60 60 L 10 60 Z", fill: TEAL_SHADES[1] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 40 L 170 40 L 170 160 L 30 160 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Zwei L-förmige Teile greifen ineinander und ergeben zusammen ein Rechteck (Option C).",
  },

  // ============ MITTEL - 4 neue (24-27) ============

  // 24 - Drei Teile bilden einen Pfeil nach oben
  {
    id: "fz-24",
    difficulty: "mittel",
    pieces: [
      { path: "M 50 10 L 100 60 L 0 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 40 10 L 40 70 L 10 70 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 40 70 L 10 70 Z", fill: TEAL_SHADES[2] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 160 80 L 130 80 L 130 180 L 70 180 L 70 80 L 40 80 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Das Dreieck bildet die Pfeilspitze, die beiden Rechtecke den Schaft. Zusammen ergibt sich ein nach oben zeigender Pfeil (Option B).",
  },

  // 25 - Vier Teile = unregelmässiges Sechseck
  {
    id: "fz-25",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 60 10 L 60 50 L 10 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 60 10 L 60 50 L 10 50 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 50 L 40 10 L 40 50 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 10 L 10 50 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Die beiden Rechtecke bilden den breiten Mittelteil, die Dreiecke die seitlichen Spitzen. Zusammen entsteht ein Sechseck (Option C).",
  },

  // 26 - Drei Dreiecke + Quadrat = grosses Dreieck
  {
    id: "fz-26",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 60 L 40 10 L 70 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 40 60 L 70 10 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 60 10 L 60 60 L 10 60 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 60 L 35 10 L 60 60 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 100 20 L 185 180 L 15 180 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 30 L 170 30 L 140 170 L 60 170 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Drei Dreiecke und ein Quadrat füllen zusammen ein grosses Dreieck aus (Option A).",
  },

  // 27 - Vier Teile = U-Form
  {
    id: "fz-27",
    difficulty: "mittel",
    pieces: [
      { path: "M 10 10 L 30 10 L 30 80 L 10 80 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 30 10 L 30 80 L 10 80 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 80 10 L 80 30 L 10 30 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 30 10 L 30 40 L 10 40 Z", fill: TEAL_SHADES[3] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 30 30 L 170 30 L 170 70 L 120 70 L 120 170 L 80 170 L 80 70 L 30 70 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 30 L 70 30 L 70 130 L 130 130 L 130 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "d",
    explanation: "Die zwei langen Rechtecke bilden die Seitenschenkel, das breite Rechteck den Boden und das kleine Rechteck verlängert einen Schenkel. Zusammen ergibt sich eine U-Form (Option D).",
  },

  // ============ SCHWER - 3 neue (28-30) ============

  // 28 - Fünf Teile = Stern / Fünfeck-Stern
  {
    id: "fz-28",
    difficulty: "schwer",
    pieces: [
      { path: "M 30 10 L 60 50 L 0 50 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 50 30 L 10 50 Z", fill: TEAL_SHADES[1] },
      { path: "M 50 10 L 90 30 L 50 50 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 30 L 40 70 L 0 60 Z", fill: TEAL_SHADES[3] },
      { path: "M 60 30 L 90 60 L 50 70 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "c", paths: [
        "M 100 15 L 118 72 L 178 72 L 130 110 L 148 168 L 100 135 L 52 168 L 70 110 L 22 72 L 82 72 Z"
      ], fill: "#64748b" },
      { id: "d", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "c",
    explanation: "Die fünf dreieckigen Teile bilden zusammen die fünf Zacken eines Sterns (Option C).",
  },

  // 29 - Vier Teile = unregelmässiges Achteck / abgerundetes Quadrat
  {
    id: "fz-29",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 70 10 L 70 60 L 10 60 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 70 10 L 70 60 L 10 60 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 10 L 40 10 L 10 30 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 10 L 10 30 Z", fill: TEAL_SHADES[3] },
      { path: "M 10 10 L 40 10 L 10 30 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 70 30 L 130 30 L 170 70 L 170 130 L 130 170 L 70 170 L 30 130 L 30 70 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 100 30 L 170 100 L 100 170 L 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "a",
    explanation: "Die beiden Rechtecke bilden den Kern, die drei kleinen Dreiecke schneiden Ecken ab und formen ein Achteck (Option A).",
  },

  // 30 - Fünf Teile = Pfeil-Doppelspitze (links und rechts)
  {
    id: "fz-30",
    difficulty: "schwer",
    pieces: [
      { path: "M 10 10 L 70 10 L 70 40 L 10 40 Z", fill: TEAL_SHADES[0] },
      { path: "M 10 10 L 70 10 L 70 40 L 10 40 Z", fill: TEAL_SHADES[1] },
      { path: "M 10 40 L 40 10 L 70 40 Z", fill: TEAL_SHADES[2] },
      { path: "M 10 10 L 40 40 L 70 10 Z", fill: TEAL_SHADES[3] },
      { path: "M 10 10 L 40 10 L 40 50 L 10 50 Z", fill: TEAL_SHADES[4] },
    ],
    options: [
      { id: "a", paths: ["M 30 30 L 170 30 L 170 170 L 30 170 Z"], fill: "#64748b" },
      { id: "b", paths: ["M 20 100 L 60 50 L 60 75 L 140 75 L 140 50 L 180 100 L 140 150 L 140 125 L 60 125 L 60 150 Z"], fill: "#64748b" },
      { id: "c", paths: ["M 100 20 L 180 170 L 20 170 Z"], fill: "#64748b" },
      { id: "d", paths: ["M 30 100 A 70 70 0 1 1 170 100 A 70 70 0 1 1 30 100 Z"], fill: "#64748b" },
      { id: "e", paths: ["M 60 30 L 140 30 L 175 100 L 140 170 L 60 170 L 25 100 Z"], fill: "#64748b" },
    ],
    correctOptionId: "b",
    explanation: "Die zwei Rechtecke bilden den Schaft, die zwei Dreiecke die Spitzen links und rechts, das kleine Rechteck verbindet die Mitte. Zusammen entsteht ein Doppelpfeil (Option B).",
  },
];

// ---- Strategie-Guide ----

export const figurenStrategyGuide = {
  title: "Strategie-Guide: Figuren zusammensetzen",
  sections: [
    {
      heading: "Was ist 'Figuren zusammensetzen'?",
      content:
        "Beim Untertest 'Figuren zusammensetzen' im MedAT werden dir mehrere Puzzleteile gezeigt. Deine Aufgabe ist es herauszufinden, welche der fünf vorgegebenen Figuren (A bis E) entsteht, wenn man alle Puzzleteile zusammensetzt. Dabei dürfen die Teile verschoben und gedreht, aber NICHT gespiegelt werden. Dieser Untertest prüft dein räumliches Vorstellungsvermögen und ist Teil der kognitiven Fähigkeiten (KFF). Du hast insgesamt 20 Aufgaben in 30 Minuten, also etwa 1:30 Minuten pro Aufgabe.",
    },
    {
      heading: "Tipps & Strategien",
      content: `1. Umrisse vergleichen: Schaue dir zuerst die äußeren Konturen der Puzzleteile an. Gibt es gerade Kanten, Bögen oder spitze Ecken? Vergleiche diese mit den Umrissen der Antwortmöglichkeiten.

2. Fläche abschätzen: Schätze die Gesamtfläche aller Puzzleteile ab. Die richtige Antwortfigur muss ungefähr die gleiche Fläche haben. Damit kannst du oft schon 1-2 Optionen ausschliessen.

3. Markante Ecken und Kanten suchen: Suche nach auffälligen Merkmalen wie spitzen Winkeln, langen geraden Kanten oder Rundungen. Diese müssen sich in der Lösungsfigur wiederfinden.

4. Ausschlussmethode: Oft ist es schneller, falsche Antworten auszuschließen als die richtige direkt zu finden. Wenn ein Puzzleteil nicht in eine Figur passt, kann diese Figur nicht die Lösung sein.

5. Zeitmanagement: Du hast ca. 1:30 pro Aufgabe. Wenn du nach 60 Sekunden keine Lösung findest, triff eine begründete Vermutung und gehe weiter. Leichtere Aufgaben zuerst lösen!

6. Systematisch vorgehen: Beginne immer mit dem größten oder auffälligsten Puzzleteil. Überlege, wo es in jeder Antwortoption platziert werden könnte.

7. Innere Kanten beachten: Die Kanten, an denen Puzzleteile aneinanderstoßen, verschwinden in der fertigen Figur. Nur die äußeren Kanten bleiben sichtbar.`,
    },
    {
      heading: "Häufige Fehler",
      content: `- Spiegelung übersehen: Puzzleteile dürfen NICHT gespiegelt werden! Eine gespiegelte Version eines Teils passt nicht. Achte genau darauf, ob ein Teil gedreht oder gespiegelt wurde.

- Flächenverhältnis ignorieren: Wenn die Puzzleteile zusammen deutlich mehr oder weniger Fläche haben als eine Antwortoption, kann diese nicht stimmen.

- Zu lange an einer Aufgabe hängenbleiben: Bei 1:30 pro Aufgabe darfst du dich nicht festbeißen. Nutze die Ausschlussmethode und rate begründet, wenn nötig.

- Nur auf die Form achten, nicht auf die Größe: Achte darauf, dass die Größenverhältnisse stimmen. Ein kleines Dreieck kann nicht plötzlich einen grossen Teil der Figur ausfüllen.

- Lücken übersehen: Alle Teile müssen lückenlos zusammenpassen. Wenn bei einer Option Lücken bleiben würden, ist sie falsch.`,
    },
  ],
};
