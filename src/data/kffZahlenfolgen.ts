export type ZahlenfolgenPattern = "simple" | "zweiersprung" | "dreiersprung" | "vierersprung" | "rekursiv" | "komplex";

export interface ZahlenfolgenTask {
  id: string;
  sequence: number[];
  missingIndices: number[];
  options: string[];
  correctAnswer: number;
  pattern: ZahlenfolgenPattern;
  explanation: string;
  difficulty: 1 | 2 | 3;
  hints: string[];
}

export const zahlenfolgenTasks: ZahlenfolgenTask[] = [
  // ============================================================
  // SIMPLE PATTERNS (zf-001 to zf-010) — Difficulty 1
  // ============================================================

  // zf-001: Constant difference +4
  // Sequence: 3, 7, 11, 15, 19, 23, 27, 31
  {
    id: "zf-001",
    sequence: [3, 7, 11, 15, 19, 23, 27, 31],
    missingIndices: [2, 5],
    options: ["11, 23", "12, 24", "10, 22", "11, 22", "12, 23"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz +4: 3, 7, 11, 15, 19, 23, 27, 31. Jede Zahl ist um 4 größer als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: +4",
      "Die Folge lautet 3, 7, ?, 15, 19, ?, 27, 31 → 7+4=11 und 19+4=23"
    ]
  },

  // zf-002: Constant difference +6
  // Sequence: 2, 8, 14, 20, 26, 32, 38, 44
  {
    id: "zf-002",
    sequence: [2, 8, 14, 20, 26, 32, 38, 44],
    missingIndices: [3, 6],
    options: ["20, 38", "18, 36", "22, 40", "20, 36", "18, 38"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz +6: 2, 8, 14, 20, 26, 32, 38, 44. Jede Zahl ist um 6 größer als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: +6",
      "Die Folge lautet 2, 8, 14, ?, 26, 32, ?, 44 → 14+6=20 und 32+6=38"
    ]
  },

  // zf-003: Constant difference -5
  // Sequence: 50, 45, 40, 35, 30, 25, 20, 15
  {
    id: "zf-003",
    sequence: [50, 45, 40, 35, 30, 25, 20, 15],
    missingIndices: [1, 4],
    options: ["45, 30", "44, 29", "46, 31", "45, 31", "44, 30"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz -5: 50, 45, 40, 35, 30, 25, 20, 15. Jede Zahl ist um 5 kleiner als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge (absteigend)",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: -5",
      "Die Folge lautet 50, ?, 40, 35, ?, 25, 20, 15 → 50-5=45 und 35-5=30"
    ]
  },

  // zf-004: Increasing difference +1, +2, +3, +4, +5, +6, +7
  // Sequence: 1, 2, 4, 7, 11, 16, 22, 29
  {
    id: "zf-004",
    sequence: [1, 2, 4, 7, 11, 16, 22, 29],
    missingIndices: [3, 5],
    options: ["7, 16", "8, 17", "6, 15", "7, 15", "8, 16"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Steigende Differenz +1, +2, +3, +4, +5, +6, +7: Die Differenz wächst bei jedem Schritt um 1.",
    difficulty: 1,
    hints: [
      "Mustertyp: Steigende Differenz",
      "Die Differenzen zwischen den Zahlen steigen: +1, +2, +3, +4, +5, +6, +7",
      "Die Folge lautet 1, 2, 4, ?, 11, ?, 22, 29 → 4+3=7 und 11+5=16"
    ]
  },

  // zf-005: Geometric ×2
  // Sequence: 3, 6, 12, 24, 48, 96, 192, 384
  {
    id: "zf-005",
    sequence: [3, 6, 12, 24, 48, 96, 192, 384],
    missingIndices: [2, 5],
    options: ["12, 96", "14, 98", "10, 94", "12, 94", "14, 96"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Geometrische Folge ×2: 3, 6, 12, 24, 48, 96, 192, 384. Jede Zahl ist das Doppelte der vorherigen.",
    difficulty: 1,
    hints: [
      "Mustertyp: Geometrische Folge",
      "Jede Zahl wird mit dem gleichen Faktor multipliziert: ×2",
      "Die Folge lautet 3, 6, ?, 24, 48, ?, 192, 384 → 6×2=12 und 48×2=96"
    ]
  },

  // zf-006: Constant difference +7
  // Sequence: 5, 12, 19, 26, 33, 40, 47, 54
  {
    id: "zf-006",
    sequence: [5, 12, 19, 26, 33, 40, 47, 54],
    missingIndices: [1, 6],
    options: ["12, 47", "13, 48", "11, 46", "12, 46", "13, 47"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz +7: 5, 12, 19, 26, 33, 40, 47, 54. Jede Zahl ist um 7 größer als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: +7",
      "Die Folge lautet 5, ?, 19, 26, 33, 40, ?, 54 → 5+7=12 und 40+7=47"
    ]
  },

  // zf-007: Geometric ×3
  // Sequence: 2, 6, 18, 54, 162, 486, 1458, 4374
  {
    id: "zf-007",
    sequence: [2, 6, 18, 54, 162, 486, 1458, 4374],
    missingIndices: [3, 5],
    options: ["54, 486", "52, 484", "56, 488", "54, 488", "52, 486"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Geometrische Folge ×3: 2, 6, 18, 54, 162, 486, 1458, 4374. Jede Zahl ist das Dreifache der vorherigen.",
    difficulty: 1,
    hints: [
      "Mustertyp: Geometrische Folge",
      "Jede Zahl wird mit dem gleichen Faktor multipliziert: ×3",
      "Die Folge lautet 2, 6, 18, ?, 162, ?, 1458, 4374 → 18×3=54 und 162×3=486"
    ]
  },

  // zf-008: Increasing difference +2, +4, +6, +8, +10, +12, +14
  // Sequence: 1, 3, 7, 13, 21, 31, 43, 57
  {
    id: "zf-008",
    sequence: [1, 3, 7, 13, 21, 31, 43, 57],
    missingIndices: [2, 4],
    options: ["7, 21", "8, 22", "6, 20", "7, 20", "8, 21"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Steigende Differenz +2, +4, +6, +8, +10, +12, +14: Die Differenz steigt jeweils um 2.",
    difficulty: 1,
    hints: [
      "Mustertyp: Steigende Differenz",
      "Die Differenzen zwischen den Zahlen steigen um jeweils 2: +2, +4, +6, +8, +10, +12, +14",
      "Die Folge lautet 1, 3, ?, 13, ?, 31, 43, 57 → 3+4=7 und 13+8=21"
    ]
  },

  // zf-009: Constant difference -3
  // Sequence: 40, 37, 34, 31, 28, 25, 22, 19
  {
    id: "zf-009",
    sequence: [40, 37, 34, 31, 28, 25, 22, 19],
    missingIndices: [3, 6],
    options: ["31, 22", "30, 21", "32, 23", "31, 23", "30, 22"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz -3: 40, 37, 34, 31, 28, 25, 22, 19. Jede Zahl ist um 3 kleiner als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge (absteigend)",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: -3",
      "Die Folge lautet 40, 37, 34, ?, 28, 25, ?, 19 → 34-3=31 und 25-3=22"
    ]
  },

  // zf-010: Constant difference +9
  // Sequence: 4, 13, 22, 31, 40, 49, 58, 67
  {
    id: "zf-010",
    sequence: [4, 13, 22, 31, 40, 49, 58, 67],
    missingIndices: [2, 5],
    options: ["22, 49", "23, 50", "21, 48", "22, 48", "23, 49"],
    correctAnswer: 0,
    pattern: "simple",
    explanation: "Konstante Differenz +9: 4, 13, 22, 31, 40, 49, 58, 67. Jede Zahl ist um 9 größer als die vorherige.",
    difficulty: 1,
    hints: [
      "Mustertyp: Einfache arithmetische Folge",
      "Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant: +9",
      "Die Folge lautet 4, 13, ?, 31, 40, ?, 58, 67 → 13+9=22 und 40+9=49"
    ]
  },

  // ============================================================
  // ZWEIERSPRUNG PATTERNS (zf-011 to zf-025) — Difficulty 1-2
  // ============================================================

  // zf-011: Even positions +3, Odd positions +5
  // Pos:  0   1   2   3   4   5   6   7
  //       2   5   5  10   8  15  11  20
  // Even (0,2,4,6): 2, 5, 8, 11 (+3)
  // Odd  (1,3,5,7): 5, 10, 15, 20 (+5)
  {
    id: "zf-011",
    sequence: [2, 5, 5, 10, 8, 15, 11, 20],
    missingIndices: [2, 5],
    options: ["5, 15", "6, 16", "4, 14", "5, 14", "6, 15"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (2, 5, 8, 11) steigen um +3. Ungerade Positionen (5, 10, 15, 20) steigen um +5.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +3, die andere um +5",
      "Gerade Positionen: 2, ?, 8, 11 → +3, also ?=5. Ungerade Positionen: 5, 10, ?, 20 → +5, also ?=15"
    ]
  },

  // zf-012: Even positions +4, Odd positions +10
  // Pos:  0   1   2   3   4   5   6   7
  //       1  10   5  20   9  30  13  40
  // Even (0,2,4,6): 1, 5, 9, 13 (+4)
  // Odd  (1,3,5,7): 10, 20, 30, 40 (+10)
  {
    id: "zf-012",
    sequence: [1, 10, 5, 20, 9, 30, 13, 40],
    missingIndices: [3, 4],
    options: ["20, 9", "19, 8", "21, 10", "20, 10", "19, 9"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (1, 5, 9, 13) steigen um +4. Ungerade Positionen (10, 20, 30, 40) steigen um +10.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +4, die andere um +10",
      "Gerade Positionen: 1, 5, ?, 13 → +4, also ?=9. Ungerade Positionen: 10, ?, 30, 40 → +10, also ?=20"
    ]
  },

  // zf-013: Even positions +6, Odd positions ×2
  // Pos:  0   1   2   3   4   5   6   7
  //       3   2   9   4  15   8  21  16
  // Even (0,2,4,6): 3, 9, 15, 21 (+6)
  // Odd  (1,3,5,7): 2, 4, 8, 16 (×2)
  {
    id: "zf-013",
    sequence: [3, 2, 9, 4, 15, 8, 21, 16],
    missingIndices: [2, 7],
    options: ["9, 16", "10, 18", "8, 14", "9, 14", "10, 16"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (3, 9, 15, 21) steigen um +6. Ungerade Positionen (2, 4, 8, 16) verdoppeln sich (×2).",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge hat +6, die andere ×2",
      "Gerade Positionen: 3, ?, 15, 21 → +6, also ?=9. Ungerade Positionen: 2, 4, 8, ? → ×2, also ?=16"
    ]
  },

  // zf-014: Even positions +5, Odd positions -3
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //      10  30  15  27  20  24  25  21  30  18
  // Even (0,2,4,6,8): 10, 15, 20, 25, 30 (+5)
  // Odd  (1,3,5,7,9): 30, 27, 24, 21, 18 (-3)
  {
    id: "zf-014",
    sequence: [10, 30, 15, 27, 20, 24, 25, 21, 30, 18],
    missingIndices: [4, 7],
    options: ["20, 21", "19, 20", "21, 22", "20, 22", "19, 21"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (10, 15, 20, 25, 30) steigen um +5. Ungerade Positionen (30, 27, 24, 21, 18) sinken um -3.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +5, die andere sinkt um -3",
      "Gerade Positionen: 10, 15, ?, 25, 30 → +5, also ?=20. Ungerade Positionen: 30, 27, 24, ?, 18 → -3, also ?=21"
    ]
  },

  // zf-015: Even positions +8, Odd positions +2
  // Pos:  0   1   2   3   4   5   6   7
  //       4   1  12   3  20   5  28   7
  // Even (0,2,4,6): 4, 12, 20, 28 (+8)
  // Odd  (1,3,5,7): 1, 3, 5, 7 (+2)
  {
    id: "zf-015",
    sequence: [4, 1, 12, 3, 20, 5, 28, 7],
    missingIndices: [2, 5],
    options: ["12, 5", "14, 6", "10, 4", "12, 4", "14, 5"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (4, 12, 20, 28) steigen um +8. Ungerade Positionen (1, 3, 5, 7) steigen um +2.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +8, die andere um +2",
      "Gerade Positionen: 4, ?, 20, 28 → +8, also ?=12. Ungerade Positionen: 1, 3, ?, 7 → +2, also ?=5"
    ]
  },

  // zf-016: Even positions ×2, Odd positions +7
  // Pos:  0   1   2   3   4   5   6   7
  //       3   4   6  11  12  18  24  25
  // Even (0,2,4,6): 3, 6, 12, 24 (×2)
  // Odd  (1,3,5,7): 4, 11, 18, 25 (+7)
  {
    id: "zf-016",
    sequence: [3, 4, 6, 11, 12, 18, 24, 25],
    missingIndices: [4, 7],
    options: ["12, 25", "14, 27", "10, 23", "12, 23", "14, 25"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (3, 6, 12, 24) verdoppeln sich (×2). Ungerade Positionen (4, 11, 18, 25) steigen um +7.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge verdoppelt sich (×2), die andere steigt um +7",
      "Gerade Positionen: 3, 6, ?, 24 → ×2, also ?=12. Ungerade Positionen: 4, 11, 18, ? → +7, also ?=25"
    ]
  },

  // zf-017: Even positions +3, Odd positions +6
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //       5   2   8   8  11  14  14  20  17  26
  // Even (0,2,4,6,8): 5, 8, 11, 14, 17 (+3)
  // Odd  (1,3,5,7,9): 2, 8, 14, 20, 26 (+6)
  {
    id: "zf-017",
    sequence: [5, 2, 8, 8, 11, 14, 14, 20, 17, 26],
    missingIndices: [3, 6],
    options: ["8, 14", "9, 15", "7, 13", "8, 13", "9, 14"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (5, 8, 11, 14, 17) steigen um +3. Ungerade Positionen (2, 8, 14, 20, 26) steigen um +6.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +3, die andere um +6",
      "Ungerade Positionen: 2, ?, 14, 20, 26 → +6, also ?=8. Gerade Positionen: 5, 8, 11, ?, 17 → +3, also ?=14"
    ]
  },

  // zf-018: Even positions -4, Odd positions +9
  // Pos:  0   1   2   3   4   5   6   7
  //      36   3  32  12  28  21  24  30
  // Even (0,2,4,6): 36, 32, 28, 24 (-4)
  // Odd  (1,3,5,7): 3, 12, 21, 30 (+9)
  {
    id: "zf-018",
    sequence: [36, 3, 32, 12, 28, 21, 24, 30],
    missingIndices: [1, 4],
    options: ["3, 28", "4, 29", "2, 27", "3, 27", "4, 28"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (36, 32, 28, 24) sinken um -4. Ungerade Positionen (3, 12, 21, 30) steigen um +9.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge sinkt um -4, die andere steigt um +9",
      "Gerade Positionen: 36, 32, ?, 24 → -4, also ?=28. Ungerade Positionen: ?, 12, 21, 30 → +9, also ?=3"
    ]
  },

  // zf-019: Even positions +11, Odd positions +4
  // Pos:  0   1   2   3   4   5   6   7
  //       2   5  13   9  24  13  35  17
  // Even (0,2,4,6): 2, 13, 24, 35 (+11)
  // Odd  (1,3,5,7): 5, 9, 13, 17 (+4)
  {
    id: "zf-019",
    sequence: [2, 5, 13, 9, 24, 13, 35, 17],
    missingIndices: [3, 6],
    options: ["9, 35", "10, 36", "8, 34", "9, 34", "10, 35"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (2, 13, 24, 35) steigen um +11. Ungerade Positionen (5, 9, 13, 17) steigen um +4.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +11, die andere um +4",
      "Ungerade Positionen: 5, ?, 13, 17 → +4, also ?=9. Gerade Positionen: 2, 13, 24, ? → +11, also ?=35"
    ]
  },

  // zf-020: Even positions +10, Odd positions -2
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //       5  20  15  18  25  16  35  14  45  12
  // Even (0,2,4,6,8): 5, 15, 25, 35, 45 (+10)
  // Odd  (1,3,5,7,9): 20, 18, 16, 14, 12 (-2)
  {
    id: "zf-020",
    sequence: [5, 20, 15, 18, 25, 16, 35, 14, 45, 12],
    missingIndices: [2, 7],
    options: ["15, 14", "16, 15", "14, 13", "15, 13", "16, 14"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (5, 15, 25, 35, 45) steigen um +10. Ungerade Positionen (20, 18, 16, 14, 12) sinken um -2.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +10, die andere sinkt um -2",
      "Gerade Positionen: 5, ?, 25, 35, 45 → +10, also ?=15. Ungerade Positionen: 20, 18, 16, ?, 12 → -2, also ?=14"
    ]
  },

  // zf-021: Even positions: squares 1,4,9,16,25 / Odd positions +3
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //       1   6   4   9   9  12  16  15  25  18
  // Even (0,2,4,6,8): 1, 4, 9, 16, 25 (Quadratzahlen)
  // Odd  (1,3,5,7,9): 6, 9, 12, 15, 18 (+3)
  {
    id: "zf-021",
    sequence: [1, 6, 4, 9, 9, 12, 16, 15, 25, 18],
    missingIndices: [4, 7],
    options: ["9, 15", "10, 16", "8, 14", "9, 14", "10, 15"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (1, 4, 9, 16, 25) sind Quadratzahlen (1², 2², 3², 4², 5²). Ungerade Positionen (6, 9, 12, 15, 18) steigen um +3.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge sind Quadratzahlen, die andere steigt um +3",
      "Gerade Positionen: 1, 4, ?, 16, 25 → Quadratzahlen, also ?=9 (3²). Ungerade Positionen: 6, 9, 12, ?, 18 → +3, also ?=15"
    ]
  },

  // zf-022: Even positions +7, Odd positions ×3
  // Pos:  0   1   2   3   4   5   6   7
  //       2   1   9   3  16   9  23  27
  // Even (0,2,4,6): 2, 9, 16, 23 (+7)
  // Odd  (1,3,5,7): 1, 3, 9, 27 (×3)
  {
    id: "zf-022",
    sequence: [2, 1, 9, 3, 16, 9, 23, 27],
    missingIndices: [2, 5],
    options: ["9, 9", "10, 10", "8, 8", "9, 8", "10, 9"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (2, 9, 16, 23) steigen um +7. Ungerade Positionen (1, 3, 9, 27) verdreifachen sich (×3).",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +7, die andere verdreifacht sich (×3)",
      "Gerade Positionen: 2, ?, 16, 23 → +7, also ?=9. Ungerade Positionen: 1, 3, ?, 27 → ×3, also ?=9"
    ]
  },

  // zf-023: Even positions -6, Odd positions +8
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //      50   1  44   9  38  17  32  25  26  33
  // Even (0,2,4,6,8): 50, 44, 38, 32, 26 (-6)
  // Odd  (1,3,5,7,9): 1, 9, 17, 25, 33 (+8)
  {
    id: "zf-023",
    sequence: [50, 1, 44, 9, 38, 17, 32, 25, 26, 33],
    missingIndices: [3, 6],
    options: ["9, 32", "10, 33", "8, 31", "9, 31", "10, 32"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (50, 44, 38, 32, 26) sinken um -6. Ungerade Positionen (1, 9, 17, 25, 33) steigen um +8.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge sinkt um -6, die andere steigt um +8",
      "Ungerade Positionen: 1, ?, 17, 25, 33 → +8, also ?=9. Gerade Positionen: 50, 44, 38, ?, 26 → -6, also ?=32"
    ]
  },

  // zf-024: Even positions +12, Odd positions -5
  // Pos:  0   1   2   3   4   5   6   7
  //       6  40  18  35  30  30  42  25
  // Even (0,2,4,6): 6, 18, 30, 42 (+12)
  // Odd  (1,3,5,7): 40, 35, 30, 25 (-5)
  {
    id: "zf-024",
    sequence: [6, 40, 18, 35, 30, 30, 42, 25],
    missingIndices: [2, 5],
    options: ["18, 30", "19, 31", "17, 29", "18, 29", "19, 30"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (6, 18, 30, 42) steigen um +12. Ungerade Positionen (40, 35, 30, 25) sinken um -5.",
    difficulty: 2,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +12, die andere sinkt um -5",
      "Gerade Positionen: 6, ?, 30, 42 → +12, also ?=18. Ungerade Positionen: 40, 35, ?, 25 → -5, also ?=30"
    ]
  },

  // zf-025: Even positions: +5, Odd positions: +15
  // Pos:  0   1   2   3   4   5   6   7   8   9
  //       3  10   8  25  13  40  18  55  23  70
  // Even (0,2,4,6,8): 3, 8, 13, 18, 23 (+5)
  // Odd  (1,3,5,7,9): 10, 25, 40, 55, 70 (+15)
  {
    id: "zf-025",
    sequence: [3, 10, 8, 25, 13, 40, 18, 55, 23, 70],
    missingIndices: [4, 7],
    options: ["13, 55", "14, 56", "12, 54", "13, 54", "14, 55"],
    correctAnswer: 0,
    pattern: "zweiersprung",
    explanation: "Zweiersprung: Gerade Positionen (3, 8, 13, 18, 23) steigen um +5. Ungerade Positionen (10, 25, 40, 55, 70) steigen um +15.",
    difficulty: 1,
    hints: [
      "Mustertyp: Zweiersprung (zwei verschränkte Teilfolgen)",
      "Betrachte jede 2. Zahl getrennt: eine Teilfolge steigt um +5, die andere um +15",
      "Gerade Positionen: 3, 8, ?, 18, 23 → +5, also ?=13. Ungerade Positionen: 10, 25, 40, ?, 70 → +15, also ?=55"
    ]
  },

  // ============================================================
  // DREIERSPRUNG PATTERNS (zf-026 to zf-030) — Difficulty 2
  // ============================================================

  // zf-026: Three interleaved: pos%3==0: +4, pos%3==1: +3, pos%3==2: +5
  // Pos:  0   1   2   3   4   5   6   7   8
  //       2   5  10   6   8  15  10  11  20
  // pos%3==0 (0,3,6): 2, 6, 10 (+4)
  // pos%3==1 (1,4,7): 5, 8, 11 (+3)
  // pos%3==2 (2,5,8): 10, 15, 20 (+5)
  {
    id: "zf-026",
    sequence: [2, 5, 10, 6, 8, 15, 10, 11, 20],
    missingIndices: [3, 7],
    options: ["6, 11", "7, 12", "5, 10", "6, 10", "7, 11"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung mit drei Teilfolgen: Positionen 0,3,6 (2, 6, 10) steigen um +4. Positionen 1,4,7 (5, 8, 11) steigen um +3. Positionen 2,5,8 (10, 15, 20) steigen um +5.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: eine Teilfolge steigt um +4, eine um +3, eine um +5",
      "Pos 0,3,6: 2, ?, 10 → +4, also ?=6. Pos 1,4,7: 5, 8, ? → +3, also ?=11"
    ]
  },

  // zf-027: Three interleaved: pos%3==0: +6, pos%3==1: +10, pos%3==2: -2
  // Pos:  0   1   2   3   4   5   6   7   8
  //       3  10  20   9  20  18  15  30  16
  // pos%3==0 (0,3,6): 3, 9, 15 (+6)
  // pos%3==1 (1,4,7): 10, 20, 30 (+10)
  // pos%3==2 (2,5,8): 20, 18, 16 (-2)
  {
    id: "zf-027",
    sequence: [3, 10, 20, 9, 20, 18, 15, 30, 16],
    missingIndices: [4, 6],
    options: ["20, 15", "21, 16", "19, 14", "20, 14", "21, 15"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung mit drei Teilfolgen: Positionen 0,3,6 (3, 9, 15) steigen um +6. Positionen 1,4,7 (10, 20, 30) steigen um +10. Positionen 2,5,8 (20, 18, 16) sinken um -2.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: eine Teilfolge steigt um +6, eine um +10, eine sinkt um -2",
      "Pos 1,4,7: 10, ?, 30 → +10, also ?=20. Pos 0,3,6: 3, 9, ? → +6, also ?=15"
    ]
  },

  // zf-028: Three interleaved: pos%3==0: +5, pos%3==1: ×2, pos%3==2: +7
  // Pos:  0   1   2   3   4   5   6   7   8
  //       4   3   1   9   6   8  14  12  15
  // pos%3==0 (0,3,6): 4, 9, 14 (+5)
  // pos%3==1 (1,4,7): 3, 6, 12 (×2)
  // pos%3==2 (2,5,8): 1, 8, 15 (+7)
  {
    id: "zf-028",
    sequence: [4, 3, 1, 9, 6, 8, 14, 12, 15],
    missingIndices: [3, 5],
    options: ["9, 8", "10, 9", "8, 7", "9, 7", "10, 8"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung mit drei Teilfolgen: Positionen 0,3,6 (4, 9, 14) steigen um +5. Positionen 1,4,7 (3, 6, 12) verdoppeln sich (×2). Positionen 2,5,8 (1, 8, 15) steigen um +7.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: eine Teilfolge hat +5, eine ×2, eine +7",
      "Pos 0,3,6: 4, ?, 14 → +5, also ?=9. Pos 2,5,8: 1, ?, 15 → +7, also ?=8"
    ]
  },

  // zf-029: Three interleaved: pos%3==0: +8, pos%3==1: -4, pos%3==2: +3
  // Pos:  0   1   2   3   4   5   6   7   8
  //       1  30   5   9  26   8  17  22  11
  // pos%3==0 (0,3,6): 1, 9, 17 (+8)
  // pos%3==1 (1,4,7): 30, 26, 22 (-4)
  // pos%3==2 (2,5,8): 5, 8, 11 (+3)
  {
    id: "zf-029",
    sequence: [1, 30, 5, 9, 26, 8, 17, 22, 11],
    missingIndices: [4, 5],
    options: ["26, 8", "25, 7", "27, 9", "26, 9", "25, 8"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung mit drei Teilfolgen: Positionen 0,3,6 (1, 9, 17) steigen um +8. Positionen 1,4,7 (30, 26, 22) sinken um -4. Positionen 2,5,8 (5, 8, 11) steigen um +3.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: eine Teilfolge steigt um +8, eine sinkt um -4, eine steigt um +3",
      "Pos 1,4,7: 30, ?, 22 → -4, also ?=26. Pos 2,5,8: 5, ?, 11 → +3, also ?=8"
    ]
  },

  // zf-030: Three interleaved: pos%3==0: +9, pos%3==1: +6, pos%3==2: -5
  // Pos:  0   1   2   3   4   5   6   7   8
  //       2   4  35  11  10  30  20  16  25
  // pos%3==0 (0,3,6): 2, 11, 20 (+9)
  // pos%3==1 (1,4,7): 4, 10, 16 (+6)
  // pos%3==2 (2,5,8): 35, 30, 25 (-5)
  {
    id: "zf-030",
    sequence: [2, 4, 35, 11, 10, 30, 20, 16, 25],
    missingIndices: [3, 7],
    options: ["11, 16", "12, 17", "10, 15", "11, 15", "12, 16"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung mit drei Teilfolgen: Positionen 0,3,6 (2, 11, 20) steigen um +9. Positionen 1,4,7 (4, 10, 16) steigen um +6. Positionen 2,5,8 (35, 30, 25) sinken um -5.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: eine Teilfolge steigt um +9, eine um +6, eine sinkt um -5",
      "Pos 0,3,6: 2, ?, 20 → +9, also ?=11. Pos 1,4,7: 4, 10, ? → +6, also ?=16"
    ]
  },

  // ============================================================
  // DREIERSPRUNG continued (zf-031 to zf-035) — Difficulty 2
  // ============================================================

  // zf-031: pos%3==0: ×2, pos%3==1: +4, pos%3==2: -3
  // Pos: 0  1  2  3  4  5  6  7  8
  //      2  3  18  4  7  15  8  11  12
  // pos%3==0: 2, 4, 8 (×2)
  // pos%3==1: 3, 7, 11 (+4)
  // pos%3==2: 18, 15, 12 (-3)
  {
    id: "zf-031",
    sequence: [2, 3, 18, 4, 7, 15, 8, 11, 12],
    missingIndices: [3, 5],
    options: ["4, 15", "5, 16", "3, 14", "4, 14", "5, 15"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung: Pos 0,3,6 (2, 4, 8) verdoppeln sich (×2). Pos 1,4,7 (3, 7, 11) steigen um +4. Pos 2,5,8 (18, 15, 12) sinken um -3.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: Pos 0,3,6 verdoppeln sich, Pos 2,5,8 sinken um -3",
      "Pos 0,3,6: 2, ?, 8 → ×2, also ?=4. Pos 2,5,8: 18, ?, 12 → -3, also ?=15"
    ]
  },

  // zf-032: pos%3==0: +7, pos%3==1: -5, pos%3==2: +2
  // Pos: 0  1  2  3  4  5  6  7  8
  //      5  25  3  12  20  5  19  15  7
  // pos%3==0: 5, 12, 19 (+7)
  // pos%3==1: 25, 20, 15 (-5)
  // pos%3==2: 3, 5, 7 (+2)
  {
    id: "zf-032",
    sequence: [5, 25, 3, 12, 20, 5, 19, 15, 7],
    missingIndices: [1, 8],
    options: ["25, 7", "26, 8", "24, 6", "25, 6", "26, 7"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung: Pos 0,3,6 (5, 12, 19) steigen um +7. Pos 1,4,7 (25, 20, 15) sinken um -5. Pos 2,5,8 (3, 5, 7) steigen um +2.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: Pos 1,4,7 sinken um -5, Pos 2,5,8 steigen um +2",
      "Pos 1,4,7: ?, 20, 15 → -5, also ?=25. Pos 2,5,8: 3, 5, ? → +2, also ?=7"
    ]
  },

  // zf-033: pos%3==0: +3, pos%3==1: +6, pos%3==2: +9
  // Pos: 0  1  2  3  4  5  6  7  8
  //      1  2  4  4  8  13  7  14  22
  // pos%3==0: 1, 4, 7 (+3)
  // pos%3==1: 2, 8, 14 (+6)
  // pos%3==2: 4, 13, 22 (+9)
  {
    id: "zf-033",
    sequence: [1, 2, 4, 4, 8, 13, 7, 14, 22],
    missingIndices: [4, 6],
    options: ["8, 7", "9, 8", "7, 6", "8, 6", "9, 7"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung: Pos 0,3,6 (1, 4, 7) steigen um +3. Pos 1,4,7 (2, 8, 14) steigen um +6. Pos 2,5,8 (4, 13, 22) steigen um +9.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: die Differenzen der drei Teilfolgen sind +3, +6 und +9",
      "Pos 1,4,7: 2, ?, 14 → +6, also ?=8. Pos 0,3,6: 1, 4, ? → +3, also ?=7"
    ]
  },

  // zf-034: pos%3==0: +10, pos%3==1: ×2, pos%3==2: -4
  // Pos: 0  1  2  3  4  5  6  7  8
  //      3  2  24  13  4  20  23  8  16
  // pos%3==0: 3, 13, 23 (+10)
  // pos%3==1: 2, 4, 8 (×2)
  // pos%3==2: 24, 20, 16 (-4)
  {
    id: "zf-034",
    sequence: [3, 2, 24, 13, 4, 20, 23, 8, 16],
    missingIndices: [3, 7],
    options: ["13, 8", "14, 9", "12, 7", "13, 7", "14, 8"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung: Pos 0,3,6 (3, 13, 23) steigen um +10. Pos 1,4,7 (2, 4, 8) verdoppeln sich (×2). Pos 2,5,8 (24, 20, 16) sinken um -4.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: Pos 0,3,6 steigen um +10, Pos 1,4,7 verdoppeln sich",
      "Pos 0,3,6: 3, ?, 23 → +10, also ?=13. Pos 1,4,7: 2, 4, ? → ×2, also ?=8"
    ]
  },

  // zf-035: pos%3==0: -2, pos%3==1: +8, pos%3==2: +5
  // Pos: 0  1  2  3  4  5  6  7  8
  //      20  1  10  18  9  15  16  17  20
  // pos%3==0: 20, 18, 16 (-2)
  // pos%3==1: 1, 9, 17 (+8)
  // pos%3==2: 10, 15, 20 (+5)
  {
    id: "zf-035",
    sequence: [20, 1, 10, 18, 9, 15, 16, 17, 20],
    missingIndices: [4, 8],
    options: ["9, 20", "10, 21", "8, 19", "9, 19", "10, 20"],
    correctAnswer: 0,
    pattern: "dreiersprung",
    explanation: "Dreiersprung: Pos 0,3,6 (20, 18, 16) sinken um -2. Pos 1,4,7 (1, 9, 17) steigen um +8. Pos 2,5,8 (10, 15, 20) steigen um +5.",
    difficulty: 2,
    hints: [
      "Mustertyp: Dreiersprung (drei verschränkte Teilfolgen)",
      "Betrachte jede 3. Zahl: Pos 1,4,7 steigen um +8, Pos 2,5,8 steigen um +5",
      "Pos 1,4,7: 1, ?, 17 → +8, also ?=9. Pos 2,5,8: 10, 15, ? → +5, also ?=20"
    ]
  },

  // ============================================================
  // VIERERSPRUNG PATTERNS (zf-036 to zf-040) — Difficulty 2-3
  // ============================================================

  // zf-036: pos%4==0: +3, pos%4==1: +5, pos%4==2: +2, pos%4==3: +10
  // Pos: 0  1  2  3  4  5  6  7
  //      1  4  6  10  4  9  8  20
  // pos%4==0: 1, 4 (+3) | pos%4==1: 4, 9 (+5) | pos%4==2: 6, 8 (+2) | pos%4==3: 10, 20 (+10)
  {
    id: "zf-036",
    sequence: [1, 4, 6, 10, 4, 9, 8, 20],
    missingIndices: [4, 5],
    options: ["4, 9", "5, 10", "3, 8", "4, 8", "5, 9"],
    correctAnswer: 0,
    pattern: "vierersprung",
    explanation: "Vierersprung mit 4 Teilfolgen: Pos 0,4 (1, 4) +3. Pos 1,5 (4, 9) +5. Pos 2,6 (6, 8) +2. Pos 3,7 (10, 20) +10.",
    difficulty: 2,
    hints: [
      "Mustertyp: Vierersprung (vier verschränkte Teilfolgen)",
      "Betrachte jede 4. Zahl: Pos 0→4 steigt um +3, Pos 1→5 steigt um +5",
      "Pos 0,4: 1, ? → +3, also ?=4. Pos 1,5: 4, ? → +5, also ?=9"
    ]
  },

  // zf-037: pos%4==0: +5, pos%4==1: -3, pos%4==2: ×2, pos%4==3: +4
  // Pos: 0  1  2  3  4  5  6  7  8  9  10  11
  //      2  20  3  1  7  17  6  5  12  14  12  9
  // pos%4==0: 2, 7, 12 (+5) | pos%4==1: 20, 17, 14 (-3) | pos%4==2: 3, 6, 12 (×2) | pos%4==3: 1, 5, 9 (+4)
  {
    id: "zf-037",
    sequence: [2, 20, 3, 1, 7, 17, 6, 5, 12, 14, 12, 9],
    missingIndices: [5, 10],
    options: ["17, 12", "18, 13", "16, 11", "17, 11", "18, 12"],
    correctAnswer: 0,
    pattern: "vierersprung",
    explanation: "Vierersprung: Pos 0,4,8 (2, 7, 12) +5. Pos 1,5,9 (20, 17, 14) -3. Pos 2,6,10 (3, 6, 12) ×2. Pos 3,7,11 (1, 5, 9) +4.",
    difficulty: 3,
    hints: [
      "Mustertyp: Vierersprung (vier verschränkte Teilfolgen)",
      "Betrachte jede 4. Zahl: die Teilfolgen haben unterschiedliche Operationen (+5, -3, ×2, +4)",
      "Pos 1,5,9: 20, ?, 14 → -3, also ?=17. Pos 2,6,10: 3, 6, ? → ×2, also ?=12"
    ]
  },

  // zf-038: pos%4==0: +6, pos%4==1: +2, pos%4==2: -4, pos%4==3: +8
  // Pos: 0  1  2  3  4  5  6  7
  //      5  3  24  2  11  5  20  10
  // pos%4==0: 5, 11 (+6) | pos%4==1: 3, 5 (+2) | pos%4==2: 24, 20 (-4) | pos%4==3: 2, 10 (+8)
  {
    id: "zf-038",
    sequence: [5, 3, 24, 2, 11, 5, 20, 10],
    missingIndices: [1, 6],
    options: ["3, 20", "4, 21", "2, 19", "3, 19", "4, 20"],
    correctAnswer: 0,
    pattern: "vierersprung",
    explanation: "Vierersprung: Pos 0,4 (5, 11) +6. Pos 1,5 (3, 5) +2. Pos 2,6 (24, 20) -4. Pos 3,7 (2, 10) +8.",
    difficulty: 2,
    hints: [
      "Mustertyp: Vierersprung (vier verschränkte Teilfolgen)",
      "Betrachte jede 4. Zahl: Pos 1→5 steigt um +2, Pos 2→6 sinkt um -4",
      "Pos 1,5: ?, 5 → +2, also ?=3. Pos 2,6: 24, ? → -4, also ?=20"
    ]
  },

  // zf-039: pos%4==0: +4, pos%4==1: ×3, pos%4==2: +7, pos%4==3: -2
  // Pos: 0  1  2  3  4  5  6  7  8  9  10  11
  //      3  1  5  18  7  3  12  16  11  9  19  14
  // pos%4==0: 3, 7, 11 (+4) | pos%4==1: 1, 3, 9 (×3) | pos%4==2: 5, 12, 19 (+7) | pos%4==3: 18, 16, 14 (-2)
  {
    id: "zf-039",
    sequence: [3, 1, 5, 18, 7, 3, 12, 16, 11, 9, 19, 14],
    missingIndices: [5, 8],
    options: ["3, 11", "4, 12", "2, 10", "3, 10", "4, 11"],
    correctAnswer: 0,
    pattern: "vierersprung",
    explanation: "Vierersprung: Pos 0,4,8 (3, 7, 11) +4. Pos 1,5,9 (1, 3, 9) ×3. Pos 2,6,10 (5, 12, 19) +7. Pos 3,7,11 (18, 16, 14) -2.",
    difficulty: 3,
    hints: [
      "Mustertyp: Vierersprung (vier verschränkte Teilfolgen)",
      "Betrachte jede 4. Zahl: Pos 1,5,9 verdreifachen sich (×3), Pos 0,4,8 steigen um +4",
      "Pos 1,5,9: 1, ?, 9 → ×3, also ?=3. Pos 0,4,8: 3, 7, ? → +4, also ?=11"
    ]
  },

  // zf-040: pos%4==0: ×2, pos%4==1: +6, pos%4==2: -1, pos%4==3: +3
  // Pos: 0  1  2  3  4  5  6  7
  //      3  2  10  5  6  8  9  8
  // pos%4==0: 3, 6 (×2) | pos%4==1: 2, 8 (+6) | pos%4==2: 10, 9 (-1) | pos%4==3: 5, 8 (+3)
  {
    id: "zf-040",
    sequence: [3, 2, 10, 5, 6, 8, 9, 8],
    missingIndices: [4, 7],
    options: ["6, 8", "7, 9", "5, 7", "6, 7", "7, 8"],
    correctAnswer: 0,
    pattern: "vierersprung",
    explanation: "Vierersprung: Pos 0,4 (3, 6) ×2. Pos 1,5 (2, 8) +6. Pos 2,6 (10, 9) -1. Pos 3,7 (5, 8) +3.",
    difficulty: 2,
    hints: [
      "Mustertyp: Vierersprung (vier verschränkte Teilfolgen)",
      "Betrachte jede 4. Zahl: Pos 0→4 verdoppelt sich, Pos 3→7 steigt um +3",
      "Pos 0,4: 3, ? → ×2, also ?=6. Pos 3,7: 5, ? → +3, also ?=8"
    ]
  },

  // ============================================================
  // REKURSIV PATTERNS (zf-041 to zf-050) — Difficulty 2-3
  // ============================================================

  // zf-041: a + b = c (Fibonacci-artig)
  // 2, 3, 5, 8, 13, 21, 34, 55
  {
    id: "zf-041",
    sequence: [2, 3, 5, 8, 13, 21, 34, 55],
    missingIndices: [3, 6],
    options: ["8, 34", "9, 35", "7, 33", "8, 33", "9, 34"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Fibonacci-artig: Jede Zahl ist die Summe der beiden vorherigen. 2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34, 21+34=55.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge (Fibonacci-artig)",
      "Jede Zahl ist die Summe der beiden vorherigen: a + b = c",
      "5+? muss 13 ergeben → ?=8. 13+21=34, also die andere Lücke ist 34"
    ]
  },

  // zf-042: a + b = c (starting with 1, 4)
  // 1, 4, 5, 9, 14, 23, 37, 60
  {
    id: "zf-042",
    sequence: [1, 4, 5, 9, 14, 23, 37, 60],
    missingIndices: [2, 5],
    options: ["5, 23", "6, 24", "4, 22", "5, 22", "6, 23"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Fibonacci-artig: 1+4=5, 4+5=9, 5+9=14, 9+14=23, 14+23=37, 23+37=60. Jede Zahl = Summe der beiden vorherigen.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge (Fibonacci-artig)",
      "Prüfe a + b = c für aufeinanderfolgende Zahlen",
      "1+4=?, also ?=5. 9+14=?, also ?=23"
    ]
  },

  // zf-043: a + b + 1 = c
  // 2, 3, 6, 10, 17, 28, 46, 75
  {
    id: "zf-043",
    sequence: [2, 3, 6, 10, 17, 28, 46, 75],
    missingIndices: [3, 6],
    options: ["10, 46", "11, 47", "9, 45", "10, 45", "11, 46"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Modifizierte Fibonacci-Folge: a + b + 1 = c. 2+3+1=6, 3+6+1=10, 6+10+1=17, 10+17+1=28, 17+28+1=46, 28+46+1=75.",
    difficulty: 3,
    hints: [
      "Mustertyp: Rekursive Folge (modifiziert)",
      "Prüfe a + b + 1 = c: Die Summe der vorherigen zwei Zahlen plus 1 ergibt die nächste",
      "3+6+1=?, also ?=10. 17+28+1=?, also ?=46"
    ]
  },

  // zf-044: a × b = c (products)
  // 1, 2, 2, 4, 8, 32, 256
  {
    id: "zf-044",
    sequence: [1, 2, 2, 4, 8, 32, 256],
    missingIndices: [2, 4],
    options: ["2, 8", "3, 9", "2, 9", "3, 8", "4, 8"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Produkt-Rekursion: Jede Zahl ist das Produkt der beiden vorherigen. 1×2=2, 2×2=4, 2×4=8, 4×8=32, 8×32=256.",
    difficulty: 3,
    hints: [
      "Mustertyp: Rekursive Folge (Produkt)",
      "Prüfe a × b = c: Das Produkt der vorherigen zwei Zahlen ergibt die nächste",
      "1×2=?, also ?=2. 2×4=?, also ?=8"
    ]
  },

  // zf-045: 2a - b = c
  // 10, 8, 12, 16, 20, 24, 28, 32
  {
    id: "zf-045",
    sequence: [10, 8, 12, 16, 20, 24, 28, 32],
    missingIndices: [2, 5],
    options: ["12, 24", "11, 23", "13, 25", "12, 25", "11, 24"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Rekursion 2b - a = c: 2×8-10=6... Tatsächlich: Differenzen +(-2), +4, +4, +4, +4, +4, +4. Oder besser: ab Position 2 konstante Differenz +4: 12, 16, 20, 24, 28, 32.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge",
      "Ab der dritten Zahl ist die Differenz konstant +4",
      "8+4=?, also ?=12. 20+4=?, also ?=24"
    ]
  },

  // zf-046: a + b = c (with different start)
  // 3, 7, 10, 17, 27, 44, 71, 115
  {
    id: "zf-046",
    sequence: [3, 7, 10, 17, 27, 44, 71, 115],
    missingIndices: [4, 7],
    options: ["27, 115", "28, 116", "26, 114", "27, 114", "28, 115"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Fibonacci-artig: 3+7=10, 7+10=17, 10+17=27, 17+27=44, 27+44=71, 44+71=115. Summe der vorherigen zwei.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge (Fibonacci-artig)",
      "Jede Zahl ist die Summe der beiden vorherigen: a + b = c",
      "10+17=?, also ?=27. 44+71=?, also ?=115"
    ]
  },

  // zf-047: a + b = c (tribonacci-like: a+b+c=d, but simplified)
  // 1, 1, 2, 4, 7, 13, 24, 44
  // Rule: a + b + c = d (tribonacci)
  {
    id: "zf-047",
    sequence: [1, 1, 2, 4, 7, 13, 24, 44],
    missingIndices: [3, 6],
    options: ["4, 24", "5, 25", "3, 23", "4, 23", "5, 24"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Tribonacci: Jede Zahl ist die Summe der DREI vorherigen. 1+1+2=4, 1+2+4=7, 2+4+7=13, 4+7+13=24, 7+13+24=44.",
    difficulty: 3,
    hints: [
      "Mustertyp: Rekursive Folge (Tribonacci)",
      "Prüfe a + b + c = d: Die Summe der DREI vorherigen Zahlen ergibt die nächste",
      "1+1+2=?, also ?=4. 4+7+13=?, also ?=24"
    ]
  },

  // zf-048: c = b + (b - a), d.h. Differenz steigt: diff of diff = constant
  // 2, 3, 5, 8, 12, 17, 23, 30
  // Diff: 1, 2, 3, 4, 5, 6, 7
  {
    id: "zf-048",
    sequence: [2, 3, 5, 8, 12, 17, 23, 30],
    missingIndices: [3, 5],
    options: ["8, 17", "9, 18", "7, 16", "8, 16", "9, 17"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Die Differenzen steigen um 1: +1, +2, +3, +4, +5, +6, +7. Jede Differenz ist um 1 größer als die vorherige.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge (steigende Differenzen)",
      "Bilde die Differenzen: sie steigen jeweils um 1 (+1, +2, +3, +4, ...)",
      "5+3=?, also ?=8. 12+5=?, also ?=17"
    ]
  },

  // zf-049: (a + b) / 2 = not applicable, use: b - a = c (each element is the difference of the two before)
  // Actually: a + b = c with 5, 3, 8, 11, 19, 30, 49, 79
  {
    id: "zf-049",
    sequence: [5, 3, 8, 11, 19, 30, 49, 79],
    missingIndices: [2, 5],
    options: ["8, 30", "9, 31", "7, 29", "8, 29", "9, 30"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Fibonacci-artig: 5+3=8, 3+8=11, 8+11=19, 11+19=30, 19+30=49, 30+49=79.",
    difficulty: 2,
    hints: [
      "Mustertyp: Rekursive Folge (Fibonacci-artig)",
      "Jede Zahl ist die Summe der beiden vorherigen",
      "5+3=?, also ?=8. 11+19=?, also ?=30"
    ]
  },

  // zf-050: |b - a| pattern: differences are 5, 3, 8, 11, 19 (itself fibonacci-like diffs)
  // Actually: 2×a - b = c → 2, 5, -1, 11, -13... too complex. Use simpler:
  // c = 2b - a (linear extrapolation)
  // 1, 3, 5, 7, 9, 11, 13, 15
  // Too simple. Better: c = a + 2b
  // 1, 2, 5, 12, 29, 70
  // 1+2×2=5, 2+2×5=12, 5+2×12=29, 12+2×29=70
  {
    id: "zf-050",
    sequence: [1, 2, 5, 12, 29, 70],
    missingIndices: [2, 4],
    options: ["5, 29", "6, 30", "4, 28", "5, 28", "6, 29"],
    correctAnswer: 0,
    pattern: "rekursiv",
    explanation: "Rekursion a + 2b = c: 1+2×2=5, 2+2×5=12, 5+2×12=29, 12+2×29=70. Die nächste Zahl = vorvorherige + 2 × vorherige.",
    difficulty: 3,
    hints: [
      "Mustertyp: Rekursive Folge (gewichtet)",
      "Prüfe a + 2b = c: Die nächste Zahl ist die vorvorherige plus doppelt die vorherige",
      "1+2×2=?, also ?=5. 5+2×12=?, also ?=29"
    ]
  },

  // ============================================================
  // KOMPLEX PATTERNS (zf-051 to zf-060) — Difficulty 3
  // ============================================================

  // zf-051: Alternating operations: ×2, -1, ×2, -1, ...
  // 3, 6, 5, 10, 9, 18, 17, 34
  {
    id: "zf-051",
    sequence: [3, 6, 5, 10, 9, 18, 17, 34],
    missingIndices: [3, 6],
    options: ["10, 17", "11, 18", "9, 16", "10, 16", "11, 17"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Wechselnde Operationen: ×2, -1, ×2, -1, ... → 3×2=6, 6-1=5, 5×2=10, 10-1=9, 9×2=18, 18-1=17, 17×2=34.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (wechselnde Operationen)",
      "Abwechselnd wird multipliziert und subtrahiert: ×2 dann -1",
      "5×2=?, also ?=10. 18-1=?, also ?=17"
    ]
  },

  // zf-052: Alternating operations: +1, ×2, +1, ×2
  // 2, 3, 6, 7, 14, 15, 30, 31
  {
    id: "zf-052",
    sequence: [2, 3, 6, 7, 14, 15, 30, 31],
    missingIndices: [2, 5],
    options: ["6, 15", "7, 16", "5, 14", "6, 14", "7, 15"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Wechselnde Operationen: +1, ×2, +1, ×2, ... → 2+1=3, 3×2=6, 6+1=7, 7×2=14, 14+1=15, 15×2=30, 30+1=31.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (wechselnde Operationen)",
      "Abwechselnd +1 und ×2: +1, ×2, +1, ×2, ...",
      "3×2=?, also ?=6. 14+1=?, also ?=15"
    ]
  },

  // zf-053: Square numbers: 1, 4, 9, 16, 25, 36, 49, 64
  {
    id: "zf-053",
    sequence: [1, 4, 9, 16, 25, 36, 49, 64],
    missingIndices: [3, 6],
    options: ["16, 49", "17, 50", "15, 48", "16, 48", "17, 49"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Quadratzahlen: 1², 2², 3², 4², 5², 6², 7², 8² = 1, 4, 9, 16, 25, 36, 49, 64.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (Quadratzahlen)",
      "Bilde die Differenzen: +3, +5, +7, +9, +11, +13, +15 — ungerade Zahlen! Das deutet auf Quadratzahlen hin",
      "Die 4. Zahl ist 4²=16, die 7. Zahl ist 7²=49"
    ]
  },

  // zf-054: Differences form their own sequence: +2, +3, +5, +8, +13 (Fibonacci diffs)
  // 1, 3, 6, 11, 19, 32, 51
  // Diff: 2, 3, 5, 8, 13, 19
  {
    id: "zf-054",
    sequence: [1, 3, 6, 11, 19, 32, 51],
    missingIndices: [2, 5],
    options: ["6, 32", "7, 33", "5, 31", "6, 31", "7, 32"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Die Differenzen bilden eine Fibonacci-Folge: +2, +3, +5, +8, +13, +19 (jede Diff. = Summe der zwei vorherigen Diff.). 3+3=6, 19+13=32.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (Fibonacci-Differenzen)",
      "Bilde die Differenzen: 2, 3, 5, 8, 13 — die Differenzen selbst folgen dem Fibonacci-Muster!",
      "Diff nach 3: +3 → 3+3=6. Diff nach 19: +13 → 19+13=32"
    ]
  },

  // zf-055: ×2 then +3: 1, 2, 5, 10, 13, 26, 29, 58
  // ×2, +3, ×2, +3, ×2, +3, ×2
  {
    id: "zf-055",
    sequence: [1, 2, 5, 10, 13, 26, 29, 58],
    missingIndices: [1, 4],
    options: ["2, 13", "3, 14", "2, 14", "3, 13", "4, 15"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Wechselnde Operationen: ×2, +3, ×2, +3, ... → 1×2=2, 2+3=5, 5×2=10, 10+3=13, 13×2=26, 26+3=29, 29×2=58.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (wechselnde Operationen)",
      "Abwechselnd ×2 und +3: ×2, +3, ×2, +3, ...",
      "1×2=?, also ?=2. 10+3=?, also ?=13"
    ]
  },

  // zf-056: n² + 1: 2, 5, 10, 17, 26, 37, 50, 65
  // 1²+1, 2²+1, 3²+1, 4²+1, 5²+1, 6²+1, 7²+1, 8²+1
  {
    id: "zf-056",
    sequence: [2, 5, 10, 17, 26, 37, 50, 65],
    missingIndices: [3, 5],
    options: ["17, 37", "18, 38", "16, 36", "17, 36", "18, 37"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37, 7²+1=50, 8²+1=65. Quadratzahlen plus 1.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (Quadratzahlen + Konstante)",
      "Differenzen: +3, +5, +7, +9, +11, +13, +15 — steigende ungerade Zahlen deuten auf Quadratzahlen hin",
      "4²+1=17, 6²+1=37"
    ]
  },

  // zf-057: Powers of 2 minus 1: 1, 3, 7, 15, 31, 63, 127, 255
  // 2¹-1, 2²-1, 2³-1, 2⁴-1, ...
  {
    id: "zf-057",
    sequence: [1, 3, 7, 15, 31, 63, 127, 255],
    missingIndices: [2, 5],
    options: ["7, 63", "8, 64", "6, 62", "7, 62", "8, 63"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Zweierpotenzen minus 1: 2¹-1=1, 2²-1=3, 2³-1=7, 2⁴-1=15, 2⁵-1=31, 2⁶-1=63, 2⁷-1=127, 2⁸-1=255. Oder: jede Zahl = vorherige × 2 + 1.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (Zweierpotenzen)",
      "Jede Zahl ist doppelt so groß wie die vorherige plus 1: a×2+1=b",
      "3×2+1=7, 31×2+1=63"
    ]
  },

  // zf-058: Alternating ×3, -5: 2, 6, 1, 3, -2, -6... too negative.
  // Better: +2, +4, +8, +16 (doubling diffs)
  // 1, 3, 7, 15, 31, 63
  // Diffs: 2, 4, 8, 16, 32 (×2)
  {
    id: "zf-058",
    sequence: [1, 3, 7, 15, 31, 63],
    missingIndices: [2, 4],
    options: ["7, 31", "8, 32", "6, 30", "7, 30", "8, 31"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Die Differenzen verdoppeln sich: +2, +4, +8, +16, +32. Oder: 2ⁿ - 1. 1+2=3, 3+4=7, 7+8=15, 15+16=31, 31+32=63.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (verdoppelte Differenzen)",
      "Bilde die Differenzen: 2, 4, 8, 16, 32 — sie verdoppeln sich jeweils!",
      "3+4=?, also ?=7. 15+16=?, also ?=31"
    ]
  },

  // zf-059: Triangular numbers: 1, 3, 6, 10, 15, 21, 28, 36
  // Diffs: +2, +3, +4, +5, +6, +7, +8
  {
    id: "zf-059",
    sequence: [1, 3, 6, 10, 15, 21, 28, 36],
    missingIndices: [3, 6],
    options: ["10, 28", "11, 29", "9, 27", "10, 27", "11, 28"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Dreieckszahlen: Differenzen +2, +3, +4, +5, +6, +7, +8. Jede Differenz steigt um 1. Die n-te Dreieckszahl = n(n+1)/2.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (Dreieckszahlen)",
      "Differenzen: +2, +3, +4, +5, +6, +7, +8 — sie steigen jeweils um 1",
      "6+4=?, also ?=10. 21+7=?, also ?=28"
    ]
  },

  // zf-060: ×2, +1 combined: 1, 3, 7, 15, 31, 63 already done.
  // Use: alternating +5, -2: 3, 8, 6, 11, 9, 14, 12, 17
  {
    id: "zf-060",
    sequence: [3, 8, 6, 11, 9, 14, 12, 17],
    missingIndices: [1, 4],
    options: ["8, 9", "7, 8", "9, 10", "8, 10", "7, 9"],
    correctAnswer: 0,
    pattern: "komplex",
    explanation: "Wechselnde Operationen: +5, -2, +5, -2, ... → 3+5=8, 8-2=6, 6+5=11, 11-2=9, 9+5=14, 14-2=12, 12+5=17.",
    difficulty: 3,
    hints: [
      "Mustertyp: Komplexe Folge (wechselnde Operationen)",
      "Abwechselnd +5 und -2: die Zahl steigt um 5, dann fällt um 2, dann steigt um 5, ...",
      "3+5=?, also ?=8. 11-2=?, also ?=9"
    ]
  }
];
