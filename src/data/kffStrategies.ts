/**
 * KFF Lösungsstrategien – fest codiert, nicht generiert.
 * Erklärt den Lösungsprozess, nicht die konkrete Lösung.
 */

export type KFFStrategyTestType =
  | "implications"
  | "figures"
  | "sequences"
  | "verbal-fluency"
  | "memory";

export type KFFStrategyContent = {
  title: string;
  steps: string[];
  pitfalls: string[];
};

export const KFF_STRATEGIES: Record<KFFStrategyTestType, KFFStrategyContent> = {
  implications: {
    title: "Implikationen erkennen – Mengen & Logik",
    steps: [
      "Übersetze Aussagen in Mengen (Kreise)",
      "Zeichne alle zwingenden Beziehungen",
      "Prüfe jede Antwort: immer wahr oder nur manchmal?",
      "Nur was in allen Fällen stimmt, ist korrekt",
    ],
    pitfalls: [
      "Alle A sind B ≠ Alle B sind A",
      "Einige heißt nicht: alle",
      "'Könnte sein' reicht nicht – muss zwingend sein",
    ],
  },
  figures: {
    title: "Figuren zusammensetzen – Kanten & Winkel",
    steps: [
      "Zähle Ecken und Winkel der Zielfigur",
      "Vergleiche Kantenlängen und Winkelarten",
      "Identifiziere Kanten, die nur außen liegen können",
      "Schließe unmögliche Optionen aus, bevor du zusammensetzt",
    ],
    pitfalls: [
      "Teile dürfen gedreht und gespiegelt werden",
      "Fläche kann stimmen, Kontur aber nicht",
      "Nicht nach 'Gefühl' gehen – Geometrie prüfen",
    ],
  },
  sequences: {
    title: "Zahlenfolgen – Systematisch prüfen",
    steps: [
      "Prüfe zuerst die Differenzen",
      "Dann Differenzen der Differenzen",
      "Dann Faktoren (× / ÷)",
      "Dann abwechselnde oder verschachtelte Muster",
      "Dann gerade/ungerade Positionen getrennt",
    ],
    pitfalls: [
      "Nicht nur eine Regel prüfen",
      "Zwei parallele Muster werden oft übersehen",
      "Nicht zu kompliziert denken – oft ist es simpel",
    ],
  },
  "verbal-fluency": {
    title: "Wortflüssigkeit – Wortenden zuerst",
    steps: [
      "Suche typische Endungen (-UNG, -ER, -EN, -HEIT, -ION, …)",
      "Dann mögliche Wortanfänge (BE-, VER-, GE-, …)",
      "Prüfe, ob alle Buchstaben exakt einmal verwendet werden",
      "Erst dann Anfangsbuchstaben A–D vergleichen",
    ],
    pitfalls: [
      "Keine Umlaute oder Eigennamen",
      "Jeder Buchstabe muss genau einmal vorkommen",
      "Nicht zu früh festlegen",
    ],
  },
  memory: {
    title: "Merkfähigkeit – Profile statt Einzeldaten",
    steps: [
      "Bilde pro Person ein mentales Profil",
      "Verbinde Name + Bild + 1 Merkmal + 1 Zahl",
      "Nutze Eselsbrücken (z. B. ‚Der Mann mit Penicillin aus Italien‘)",
      "Wiederhole in sinnvollen Clustern",
    ],
    pitfalls: [
      "Alles isoliert merken überfordert",
      "Zahlen ohne Kontext bleiben schlecht hängen",
      "Keine visuellen Anker verwenden",
    ],
  },
};
