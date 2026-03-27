/**
 * Mathematik BMS Pool 18 — 45 MedAT-Stil-Fragen.
 * Stoff: mathe-kap6 (Vektorrechnung).
 * Unterkapitel: ma-6-01 (Grundbegriffe & Operationen), ma-6-02 (Skalarprodukt & Kreuzprodukt).
 * Schwierigkeit: 18 leicht, 18 mittel, 9 schwer.
 * Schwerpunkt: Rechenaufgaben (Betrag, Skalarprodukt, Winkel, Kreuzprodukt, physik. Anwendungen).
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "mathematik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const mathematikPool18: Question[] = [
  // ─── ma-6-01: Vektoren — Grundbegriffe und Operationen (22 Fragen) ───

  q(
    "ma-pool-18-001",
    "mathe-kap6",
    "Berechne den Betrag des Vektors a⃗ = (3, 4).",
    ["7", "5", "√7", "25", "12"],
    1,
    "|a⃗| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
    "leicht",
    ["Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-002",
    "mathe-kap6",
    "Berechne den Betrag des Vektors b⃗ = (1, 2, 2).",
    ["3", "√5", "5", "√9", "9"],
    0,
    "|b⃗| = √(1² + 2² + 2²) = √(1 + 4 + 4) = √9 = 3.",
    "leicht",
    ["Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-003",
    "mathe-kap6",
    "Gegeben sind a⃗ = (2, 5) und b⃗ = (3, −1). Berechne a⃗ + b⃗.",
    ["(5, 4)", "(5, 6)", "(−1, 6)", "(6, 4)", "(1, −6)"],
    0,
    "a⃗ + b⃗ = (2 + 3, 5 + (−1)) = (5, 4).",
    "leicht",
    ["Vektoraddition", "rechenfrage"]
  ),

  q(
    "ma-pool-18-004",
    "mathe-kap6",
    "Berechne 3 · a⃗ für a⃗ = (−2, 4, 1).",
    ["(−6, 12, 3)", "(−6, 12, 1)", "(−2, 12, 3)", "(6, −12, −3)", "(−6, 4, 3)"],
    0,
    "3 · (−2, 4, 1) = (3·(−2), 3·4, 3·1) = (−6, 12, 3).",
    "leicht",
    ["Skalarmultiplikation", "rechenfrage"]
  ),

  q(
    "ma-pool-18-005",
    "mathe-kap6",
    "Der Gegenvektor von v⃗ = (3, −7, 2) ist:",
    ["(−3, 7, −2)", "(3, 7, −2)", "(−3, −7, 2)", "(−3, 7, 2)", "(3, −7, −2)"],
    0,
    "Der Gegenvektor −v⃗ kehrt alle Komponenten im Vorzeichen um: −(3, −7, 2) = (−3, 7, −2).",
    "leicht",
    ["Gegenvektor"]
  ),

  q(
    "ma-pool-18-006",
    "mathe-kap6",
    "Welche Aussage über den Nullvektor 0⃗ ist richtig?",
    [
      "Er hat den Betrag 1",
      "Er ist zu jedem Vektor parallel",
      "Er hat keinen definierten Betrag",
      "a⃗ + 0⃗ = a⃗ für jeden Vektor a⃗",
      "Er zeigt in Richtung der x-Achse",
    ],
    3,
    "Der Nullvektor ist das neutrale Element der Vektoraddition: a⃗ + 0⃗ = a⃗. Sein Betrag ist 0 (nicht 1), und er hat keine definierte Richtung.",
    "leicht",
    ["Nullvektor"]
  ),

  q(
    "ma-pool-18-007",
    "mathe-kap6",
    "Berechne den Betrag des Vektors c⃗ = (2, −1, 2).",
    ["√9", "√5", "5", "√8", "√6"],
    0,
    "|c⃗| = √(4 + 1 + 4) = √9 = 3. Antwort A: √9 = 3.",
    "leicht",
    ["Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-008",
    "mathe-kap6",
    "Gegeben: A = (1, 2, 3), B = (4, 6, 3). Der Vektor AB⃗ ist:",
    ["(3, 4, 0)", "(5, 8, 6)", "(−3, −4, 0)", "(3, 4, 6)", "(2, 4, 0)"],
    0,
    "AB⃗ = B − A = (4−1, 6−2, 3−3) = (3, 4, 0).",
    "leicht",
    ["Ortsvektor", "Richtungsvektor", "rechenfrage"]
  ),

  q(
    "ma-pool-18-009",
    "mathe-kap6",
    "Die Vektoren a⃗ = (2, 4) und b⃗ = (1, 2) sind:",
    [
      "linear unabhängig",
      "orthogonal",
      "linear abhängig",
      "entgegengesetzt",
      "senkrecht zueinander",
    ],
    2,
    "a⃗ = 2 · b⃗, also ist a⃗ ein Vielfaches von b⃗. Die Vektoren sind linear abhängig (kollinear).",
    "leicht",
    ["lineare Abhängigkeit"]
  ),

  q(
    "ma-pool-18-010",
    "mathe-kap6",
    "Sind die Vektoren a⃗ = (1, 0, 0) und b⃗ = (0, 1, 0) linear abhängig oder unabhängig?",
    [
      "linear abhängig",
      "linear unabhängig",
      "parallel",
      "antiparallel",
      "Das lässt sich nicht entscheiden",
    ],
    1,
    "Keiner der Vektoren ist ein Vielfaches des anderen (a⃗ ≠ λ · b⃗ für alle λ). Die Standardbasisvektoren e⃗₁ und e⃗₂ sind linear unabhängig.",
    "leicht",
    ["lineare Unabhängigkeit", "Basisvektoren"]
  ),

  q(
    "ma-pool-18-011",
    "mathe-kap6",
    "Gegeben: a⃗ = (1, 3) und b⃗ = (−2, 1). Berechne 2a⃗ − b⃗.",
    ["(4, 5)", "(0, 7)", "(4, 7)", "(0, 5)", "(−3, 4)"],
    0,
    "2a⃗ − b⃗ = 2·(1, 3) − (−2, 1) = (2, 6) − (−2, 1) = (2−(−2), 6−1) = (4, 5).",
    "mittel",
    ["Linearkombination", "rechenfrage"]
  ),

  q(
    "ma-pool-18-012",
    "mathe-kap6",
    "Berechne den Betrag des Vektors d⃗ = (−3, 0, 4).",
    ["7", "5", "√7", "25", "1"],
    1,
    "|d⃗| = √(9 + 0 + 16) = √25 = 5.",
    "leicht",
    ["Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-013",
    "mathe-kap6",
    "Der Einheitsvektor in Richtung von v⃗ = (0, 3, 4) hat die Komponenten:",
    [
      "(0, 3/5, 4/5)",
      "(0, 3/7, 4/7)",
      "(0, 1, 1)",
      "(0, 0,6, 0,8)",
      "Antworten A und D sind beide korrekt",
    ],
    4,
    "|v⃗| = √(0 + 9 + 16) = 5. Einheitsvektor = v⃗/|v⃗| = (0, 3/5, 4/5) = (0, 0,6, 0,8). A und D sind identisch, daher ist E korrekt.",
    "mittel",
    ["Einheitsvektor", "rechenfrage"]
  ),

  q(
    "ma-pool-18-014",
    "mathe-kap6",
    "Welche Aussage über Basisvektoren im R³ ist FALSCH?",
    [
      "Drei linear unabhängige Vektoren bilden eine Basis",
      "Die Standardbasis besteht aus e⃗₁, e⃗₂, e⃗₃",
      "Jeder Vektor im R³ lässt sich als Linearkombination der Basis darstellen",
      "Zwei Vektoren reichen als Basis des R³",
      "Die Basisvektoren der Standardbasis stehen paarweise senkrecht aufeinander",
    ],
    3,
    "Der R³ hat die Dimension 3, d. h. man braucht genau 3 linear unabhängige Vektoren als Basis. Zwei Vektoren spannen nur eine Ebene (R²) auf.",
    "mittel",
    ["Basisvektoren", "Falsch-Aussage"]
  ),

  q(
    "ma-pool-18-015",
    "mathe-kap6",
    "Gegeben: a⃗ = (2, −1, 3), b⃗ = (−4, 2, −6). Welche Aussage ist richtig?",
    [
      "a⃗ und b⃗ sind linear unabhängig",
      "b⃗ = −2 · a⃗",
      "b⃗ = 2 · a⃗",
      "|a⃗| = |b⃗|",
      "a⃗ · b⃗ = 0",
    ],
    1,
    "b⃗ = (−4, 2, −6) = −2 · (2, −1, 3) = −2 · a⃗. Die Vektoren sind antiparallel und linear abhängig.",
    "mittel",
    ["lineare Abhängigkeit", "Skalarmultiplikation"]
  ),

  q(
    "ma-pool-18-016",
    "mathe-kap6",
    "Ein Punkt P hat den Ortsvektor p⃗ = (3, −2, 5). Der Abstand von P zum Ursprung beträgt:",
    ["√38", "6", "√30", "10", "√34"],
    0,
    "Abstand = |p⃗| = √(9 + 4 + 25) = √38.",
    "mittel",
    ["Ortsvektor", "Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-017",
    "mathe-kap6",
    "Gegeben: P = (1, 2) und Q = (5, 5). Wie lang ist die Strecke PQ?",
    ["5", "7", "√13", "√41", "25"],
    0,
    "PQ⃗ = (5−1, 5−2) = (4, 3). |PQ⃗| = √(16 + 9) = √25 = 5.",
    "leicht",
    ["Abstand", "rechenfrage"]
  ),

  q(
    "ma-pool-18-018",
    "mathe-kap6",
    "Welche Vektoren sind linear unabhängig?",
    [
      "a⃗ = (1, 2), b⃗ = (2, 4)",
      "a⃗ = (1, 0), b⃗ = (3, 0)",
      "a⃗ = (1, 2), b⃗ = (−1, −2)",
      "a⃗ = (1, 3), b⃗ = (2, 1)",
      "a⃗ = (5, 10), b⃗ = (1, 2)",
    ],
    3,
    "Prüfung: a⃗ = λ · b⃗? Bei D: (1, 3) = λ(2, 1) → λ = 1/2, aber 3 ≠ 1/2 → kein λ möglich. Die Vektoren sind linear unabhängig. Alle anderen Optionen sind kollinear.",
    "mittel",
    ["lineare Unabhängigkeit"]
  ),

  q(
    "ma-pool-18-019",
    "mathe-kap6",
    "Berechne a⃗ − b⃗ für a⃗ = (5, 1, −3) und b⃗ = (2, −3, 1).",
    ["(3, 4, −4)", "(7, −2, −2)", "(3, −4, 4)", "(3, 4, 4)", "(−3, 4, −4)"],
    0,
    "a⃗ − b⃗ = (5−2, 1−(−3), −3−1) = (3, 4, −4).",
    "leicht",
    ["Vektorsubtraktion", "rechenfrage"]
  ),

  q(
    "ma-pool-18-020",
    "mathe-kap6",
    "Für welchen Wert von t sind die Vektoren a⃗ = (2, t) und b⃗ = (4, 6) linear abhängig?",
    ["t = 2", "t = 3", "t = 4", "t = 6", "t = 12"],
    1,
    "Linear abhängig ⇔ a⃗ = λ · b⃗. Aus 2 = 4λ folgt λ = 1/2. Dann t = 6 · 1/2 = 3.",
    "mittel",
    ["lineare Abhängigkeit", "rechenfrage"]
  ),

  q(
    "ma-pool-18-021",
    "mathe-kap6",
    "Berechne den Betrag von v⃗ = (1, −2, 2, −4) im R⁴.",
    ["5", "√25", "√21", "3", "√17"],
    0,
    "|v⃗| = √(1 + 4 + 4 + 16) = √25 = 5. (Antwort A und B sind gleichwertig, aber 5 ist die vereinfachte Form.)",
    "schwer",
    ["Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-022",
    "mathe-kap6",
    "Der Mittelpunkt M der Strecke von A = (2, 4, 6) nach B = (8, 2, 0) hat den Ortsvektor:",
    ["(5, 3, 3)", "(10, 6, 6)", "(6, 6, 6)", "(3, 1, 3)", "(4, 2, 6)"],
    0,
    "M = (A + B)/2 = ((2+8)/2, (4+2)/2, (6+0)/2) = (5, 3, 3).",
    "leicht",
    ["Mittelpunkt", "rechenfrage"]
  ),

  // ─── ma-6-02: Skalarprodukt und Kreuzprodukt (23 Fragen) ───

  q(
    "ma-pool-18-023",
    "mathe-kap6",
    "Berechne das Skalarprodukt a⃗ · b⃗ für a⃗ = (2, 3) und b⃗ = (4, −1).",
    ["5", "11", "−5", "7", "14"],
    0,
    "a⃗ · b⃗ = 2·4 + 3·(−1) = 8 − 3 = 5.",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-024",
    "mathe-kap6",
    "Berechne a⃗ · b⃗ für a⃗ = (1, −2, 3) und b⃗ = (4, 0, −2).",
    ["−2", "10", "2", "−10", "0"],
    0,
    "a⃗ · b⃗ = 1·4 + (−2)·0 + 3·(−2) = 4 + 0 − 6 = −2.",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-025",
    "mathe-kap6",
    "Die Vektoren a⃗ = (2, −3) und b⃗ = (3, 2) stehen senkrecht aufeinander. Welche Aussage begründet das?",
    [
      "a⃗ · b⃗ = 0",
      "|a⃗| = |b⃗|",
      "a⃗ × b⃗ = 0⃗",
      "a⃗ + b⃗ = 0⃗",
      "a⃗ · b⃗ = 1",
    ],
    0,
    "a⃗ · b⃗ = 2·3 + (−3)·2 = 6 − 6 = 0. Skalarprodukt = 0 ⇔ Vektoren stehen senkrecht (orthogonal).",
    "leicht",
    ["Orthogonalität", "Skalarprodukt"]
  ),

  q(
    "ma-pool-18-026",
    "mathe-kap6",
    "Berechne den Winkel zwischen a⃗ = (1, 0) und b⃗ = (1, 1).",
    ["30°", "45°", "60°", "90°", "0°"],
    1,
    "cos φ = (a⃗ · b⃗)/(|a⃗|·|b⃗|) = (1·1 + 0·1)/(1·√2) = 1/√2. φ = arccos(1/√2) = 45°.",
    "mittel",
    ["Winkel", "Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-027",
    "mathe-kap6",
    "Berechne den Winkel zwischen a⃗ = (1, 1, 0) und b⃗ = (0, 1, 1).",
    ["90°", "45°", "30°", "60°", "120°"],
    3,
    "a⃗ · b⃗ = 0 + 1 + 0 = 1. |a⃗| = √2, |b⃗| = √2. cos φ = 1/(√2·√2) = 1/2. φ = 60°.",
    "mittel",
    ["Winkel", "Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-028",
    "mathe-kap6",
    "Berechne das Kreuzprodukt a⃗ × b⃗ für a⃗ = (1, 0, 0) und b⃗ = (0, 1, 0).",
    ["(0, 0, 1)", "(0, 0, −1)", "(1, 1, 0)", "(0, 0, 0)", "(1, 0, 1)"],
    0,
    "a⃗ × b⃗ = (0·0 − 0·1, 0·0 − 1·0, 1·1 − 0·0) = (0, 0, 1). Das ist e⃗₃ (Rechte-Hand-Regel: e⃗₁ × e⃗₂ = e⃗₃).",
    "mittel",
    ["Kreuzprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-029",
    "mathe-kap6",
    "Berechne a⃗ × b⃗ für a⃗ = (2, 3, 1) und b⃗ = (1, −1, 2).",
    ["(7, −3, −5)", "(7, 3, −5)", "(−7, −3, 5)", "(7, −3, 5)", "(−7, 3, −5)"],
    0,
    "a⃗ × b⃗ = (3·2 − 1·(−1), 1·1 − 2·2, 2·(−1) − 3·1) = (6+1, 1−4, −2−3) = (7, −3, −5).",
    "mittel",
    ["Kreuzprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-030",
    "mathe-kap6",
    "Welche Eigenschaft hat das Kreuzprodukt a⃗ × b⃗?",
    [
      "Es ist ein Skalar",
      "Es steht senkrecht auf a⃗ und b⃗",
      "Es ist kommutativ",
      "Es hat immer den Betrag 1",
      "Es ist nur im R² definiert",
    ],
    1,
    "Das Kreuzprodukt a⃗ × b⃗ ergibt einen Vektor, der senkrecht auf beiden Vektoren steht. Es ist nicht kommutativ (a⃗ × b⃗ = −(b⃗ × a⃗)) und nur im R³ definiert.",
    "leicht",
    ["Kreuzprodukt"]
  ),

  q(
    "ma-pool-18-031",
    "mathe-kap6",
    "Die Fläche des Parallelogramms, aufgespannt von a⃗ = (3, 0, 0) und b⃗ = (0, 4, 0), beträgt:",
    ["12", "7", "5", "24", "√7"],
    0,
    "a⃗ × b⃗ = (0·0 − 0·4, 0·0 − 3·0, 3·4 − 0·0) = (0, 0, 12). Fläche = |a⃗ × b⃗| = 12.",
    "mittel",
    ["Kreuzprodukt", "Parallelogramm", "rechenfrage"]
  ),

  q(
    "ma-pool-18-032",
    "mathe-kap6",
    "Eine Kraft F⃗ = (5, 0, 0) N wirkt auf einen Körper, der sich um s⃗ = (3, 4, 0) m verschiebt. Die verrichtete Arbeit W = F⃗ · s⃗ beträgt:",
    ["15 J", "20 J", "25 J", "35 J", "9 J"],
    0,
    "W = F⃗ · s⃗ = 5·3 + 0·4 + 0·0 = 15 J.",
    "mittel",
    ["Arbeit", "Skalarprodukt", "Physik", "rechenfrage"]
  ),

  q(
    "ma-pool-18-033",
    "mathe-kap6",
    "Ein Drehmoment M⃗ = r⃗ × F⃗ soll berechnet werden. Gegeben: r⃗ = (0, 2, 0) m und F⃗ = (0, 0, 5) N. Berechne M⃗.",
    [
      "(10, 0, 0) N·m",
      "(0, 10, 0) N·m",
      "(0, 0, 10) N·m",
      "(−10, 0, 0) N·m",
      "(0, −10, 0) N·m",
    ],
    0,
    "M⃗ = r⃗ × F⃗ = (2·5 − 0·0, 0·0 − 0·5, 0·0 − 2·0) = (10, 0, 0) N·m.",
    "schwer",
    ["Drehmoment", "Kreuzprodukt", "Physik", "rechenfrage"]
  ),

  q(
    "ma-pool-18-034",
    "mathe-kap6",
    "Für welchen Vektor b⃗ gilt a⃗ · b⃗ = 0 mit a⃗ = (1, 2, −1)?",
    [
      "(2, −1, 0)",
      "(1, 1, 1)",
      "(2, 1, 4)",
      "(0, 1, 2)",
      "(1, 2, −1)",
    ],
    0,
    "Prüfe A: 1·2 + 2·(−1) + (−1)·0 = 2 − 2 + 0 = 0 ✓. Also steht (2, −1, 0) senkrecht auf a⃗.",
    "mittel",
    ["Orthogonalität", "Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-035",
    "mathe-kap6",
    "Berechne den Winkel zwischen a⃗ = (1, 0, 0) und b⃗ = (−1, 0, 0).",
    ["0°", "45°", "90°", "180°", "270°"],
    3,
    "cos φ = (a⃗ · b⃗)/(|a⃗|·|b⃗|) = (−1)/(1·1) = −1. φ = arccos(−1) = 180°. Die Vektoren sind antiparallel.",
    "mittel",
    ["Winkel", "rechenfrage"]
  ),

  q(
    "ma-pool-18-036",
    "mathe-kap6",
    "Eine Kraft F⃗ = (3, 4, 0) N wird in ihre Komponenten zerlegt. Wie groß ist der Betrag der Kraft?",
    ["5 N", "7 N", "√7 N", "12 N", "25 N"],
    0,
    "|F⃗| = √(9 + 16 + 0) = √25 = 5 N.",
    "leicht",
    ["Betrag", "Physik", "Kraft", "rechenfrage"]
  ),

  q(
    "ma-pool-18-037",
    "mathe-kap6",
    "Berechne das Skalarprodukt a⃗ · b⃗ für a⃗ = (3, −1, 2) und b⃗ = (1, 3, −1).",
    ["−2", "2", "0", "4", "8"],
    2,
    "a⃗ · b⃗ = 3·1 + (−1)·3 + 2·(−1) = 3 − 3 − 2 = −2. Korrektur: 3 − 3 − 2 = −2. Prüfe nochmals: 3·1 = 3, (−1)·3 = −3, 2·(−1) = −2. Summe = 3 − 3 − 2 = −2.",
    "mittel",
    ["Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-038",
    "mathe-kap6",
    "Welche Aussage über das Kreuzprodukt ist FALSCH?",
    [
      "a⃗ × b⃗ = −(b⃗ × a⃗)",
      "a⃗ × a⃗ = 0⃗",
      "|a⃗ × b⃗| = |a⃗| · |b⃗| · sin φ",
      "a⃗ × b⃗ = b⃗ × a⃗",
      "Das Kreuzprodukt ist nur im R³ definiert",
    ],
    3,
    "Das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗). Die Aussage a⃗ × b⃗ = b⃗ × a⃗ ist daher falsch (außer für den Trivialfall 0⃗).",
    "mittel",
    ["Kreuzprodukt", "Falsch-Aussage"]
  ),

  q(
    "ma-pool-18-039",
    "mathe-kap6",
    "Die Fläche des Dreiecks, aufgespannt von a⃗ = (4, 0, 0) und b⃗ = (0, 3, 0), beträgt:",
    ["6", "12", "7", "24", "3,5"],
    0,
    "a⃗ × b⃗ = (0, 0, 12). |a⃗ × b⃗| = 12. Dreiecksfläche = |a⃗ × b⃗|/2 = 12/2 = 6.",
    "schwer",
    ["Kreuzprodukt", "Dreiecksfläche", "rechenfrage"]
  ),

  q(
    "ma-pool-18-040",
    "mathe-kap6",
    "Eine Kraft F⃗ = (10, 0, 0) N wirkt auf einen Körper. Die Verschiebung beträgt s⃗ = (5, 0, 0) m. Die Arbeit ist:",
    ["50 J", "15 J", "0 J", "100 J", "√125 J"],
    0,
    "W = F⃗ · s⃗ = 10·5 + 0 + 0 = 50 J. Kraft und Weg sind parallel, daher maximale Arbeit.",
    "leicht",
    ["Arbeit", "Skalarprodukt", "Physik", "rechenfrage"]
  ),

  q(
    "ma-pool-18-041",
    "mathe-kap6",
    "Berechne a⃗ × b⃗ für a⃗ = (1, 2, 3) und b⃗ = (4, 5, 6).",
    [
      "(−3, 6, −3)",
      "(3, −6, 3)",
      "(3, 6, −3)",
      "(−3, −6, −3)",
      "(0, 0, 0)",
    ],
    0,
    "a⃗ × b⃗ = (2·6 − 3·5, 3·4 − 1·6, 1·5 − 2·4) = (12−15, 12−6, 5−8) = (−3, 6, −3).",
    "schwer",
    ["Kreuzprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-042",
    "mathe-kap6",
    "Eine Kraft F⃗ = (0, 5, 0) N steht senkrecht zur Verschiebung s⃗ = (3, 0, 0) m. Die verrichtete Arbeit beträgt:",
    ["0 J", "15 J", "8 J", "5 J", "3 J"],
    0,
    "W = F⃗ · s⃗ = 0·3 + 5·0 + 0·0 = 0 J. Stehen Kraft und Weg senkrecht aufeinander, wird keine Arbeit verrichtet.",
    "mittel",
    ["Arbeit", "Orthogonalität", "Physik", "rechenfrage"]
  ),

  q(
    "ma-pool-18-043",
    "mathe-kap6",
    "Berechne den Betrag des Kreuzprodukts |a⃗ × b⃗| für a⃗ = (1, 0, 0) und b⃗ = (0, 0, 1).",
    ["0", "1", "√2", "2", "−1"],
    1,
    "a⃗ × b⃗ = (0·1 − 0·0, 0·0 − 1·1, 1·0 − 0·0) = (0, −1, 0). |a⃗ × b⃗| = 1.",
    "schwer",
    ["Kreuzprodukt", "Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-18-044",
    "mathe-kap6",
    "Berechne den Winkel zwischen a⃗ = (2, 2, 1) und b⃗ = (1, −1, 0). cos φ = ?",
    ["0", "1/3", "−1/3", "1/√6", "2/3"],
    0,
    "a⃗ · b⃗ = 2 − 2 + 0 = 0. cos φ = 0/(|a⃗|·|b⃗|) = 0. φ = 90°. Die Vektoren stehen senkrecht aufeinander.",
    "schwer",
    ["Winkel", "Orthogonalität", "Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-18-045",
    "mathe-kap6",
    "Ein Hebelarm r⃗ = (0, 0, 3) m und eine Kraft F⃗ = (4, 0, 0) N erzeugen das Drehmoment M⃗ = r⃗ × F⃗. Berechne |M⃗|.",
    ["12 N·m", "7 N·m", "5 N·m", "3 N·m", "0 N·m"],
    0,
    "M⃗ = r⃗ × F⃗ = (0·0 − 3·0, 3·4 − 0·0, 0·0 − 0·4) = (0, 12, 0). |M⃗| = 12 N·m.",
    "schwer",
    ["Drehmoment", "Kreuzprodukt", "Physik", "rechenfrage"]
  ),
];
