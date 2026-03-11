import type { Unterkapitel } from "../../types";

/**
 * Archived UK from kap4-reaktionen-gleichgewicht.ts
 * ch-7-03 "Stöchiometrie und Ausbeute" — Duplicate of ch-3s-02 + goes beyond Stichwortliste scope
 */
export const archivedChemReaktUKs: Unterkapitel[] = [
  {
    id: "ch-7-03",
    title: "Stöchiometrie und Ausbeute",
    imageUrl: "",
    imageCaption: "",
    stichworte: [
      "Stöchiometrie",
      "Mol-Verhältnis",
      "Mangelreagenz",
      "Limiting Reagent",
      "Prozentuale Ausbeute",
      "Haber-Bosch-Prozess",
      "Molmasse",
      "Reaktionsgleichung",
      "Massenerhaltung",
      "Respirationsquotient",
    ],
    content: `## Was ist Stöchiometrie?

Ob Infusionslösung, Medikamentendosis oder Blutgasanalyse — ohne Stöchiometrie geht in der Medizin nichts. Die **Stöchiometrie** (von griech. stoicheion = Element, metron = Maß) beschreibt die quantitativen Verhältnisse der an einer chemischen Reaktion beteiligten Stoffe. Basis ist die ausgeglichene Reaktionsgleichung, die Atome, Ladungen und Massen erhält.

> **Merke:** Stöchiometrische Koeffizienten geben Mol-Verhältnisse an, NICHT Massenverhältnisse! Die Grundformeln: n = m/M, m = n × M, c = n/V.

**Grundprinzip:** Die stöchiometrischen Koeffizienten geben die Mol-Verhältnisse an.

Beispiel: **2 H₂ + O₂ → 2 H₂O**
- 2 mol H₂ reagieren mit 1 mol O₂ zu 2 mol H₂O
- Massenerhaltung: 2 × 2 g + 32 g = 36 g → 4 g H₂ + 32 g O₂ → 36 g H₂O ✓
- Koeffizient 2:1:2 gilt für Mol, nicht für Gramm!
- Volumen bei Gasen (Normalbedingungen, 0 °C, 1 atm): V = n × 22,4 L/mol

**Wichtige Konstanten für Stöchiometrie:**
- Avogadro-Zahl: N_A = 6,022 × 10²³ mol⁻¹ (1 mol = 6,022 × 10²³ Teilchen)
- Molares Gasvolumen (Normalbedingungen): V_m = 22,4 L/mol
- Universelle Gaskonstante: R = 8,314 J·mol⁻¹·K⁻¹

{{IMAGE}}

## Reaktionsgleichung ausgleichen (Bilanzierung)

Eine Reaktionsgleichung ist ausgeglichen, wenn die Anzahl jeder Atomsorte auf Edukt- und Produktseite gleich ist. Systematische Vorgehensweise:
1. Formeln aufschreiben (Symbole der Stoffe, keine Summenformeln ändern!)
2. Koeffizienten so wählen, dass Atome auf beiden Seiten gleich sind (erst Metalle/Nichtmetalle, zuletzt H und O)
3. Ionen und Ladungen bei ionischen Gleichungen separat bilanzieren
4. Prüfen: Massenerhaltung; Ladungserhaltung bei Redoxgleichungen

**Rechenbeispiel — Bilanzierung einer Reaktionsgleichung:**
Fe₂O₃ + CO → Fe + CO₂ (unausgeglichen)
- Fe: links 2, rechts 1 → Koeffizient 2 vor Fe
- Versuch: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂
- Prüfung: Fe: 2=2 ✓, C: 3=3 ✓, O: 3+3=6 und 3×2=6 ✓ → ausgeglichen!


## Mol-zu-Mol-Umrechnungen und Stöchiometrische Berechnungen

**Schema für Stöchiometrie-Aufgaben:**
1. n (Edukt) aus m und M berechnen: n = m / M
2. Mit Koeffizientenverhältnis umrechnen: n(Produkt) = n(Edukt) × (Koeffizient Produkt / Koeffizient Edukt)
3. m (Produkt) berechnen: m = n × M

Beispiel: Wie viel Gramm H₂O entstehen aus 4 g H₂?
- n(H₂) = 4 g / 2 g/mol = 2 mol
- Verhältnis H₂ : H₂O = 2:2 = 1:1 → n(H₂O) = 2 mol
- m(H₂O) = 2 mol × 18 g/mol = 36 g

## Überschuss- und Mangelreagenz (Limiting Reagent)

In der Realität reagieren Edukte selten im exakten stöchiometrischen Verhältnis. Das **Mangelreagenz (limiting reagent)** ist der Reaktionspartner, der zuerst aufgebraucht wird — er begrenzt die Ausbeute. Das **Überschussreagenz** liegt nach der Reaktion noch vor.

**Systematisches Vorgehen:**
1. n beider Edukte berechnen: n = m / M
2. Quotienten bilden: n(vorhanden) / stöchiometrischer Koeffizient für jedes Edukt
3. Das Reagenz mit dem **kleineren Quotienten** ist das Mangelreagenz
4. Ausbeute ausschließlich auf Basis des Mangelreagenzes berechnen

**Rechenbeispiel — Mangelreagenz bestimmen:**
N₂ + 3 H₂ → 2 NH₃ mit 2 mol N₂ und 5 mol H₂.
- Quotienten: N₂: 2/1 = 2; H₂: 5/3 = 1,67
- H₂ hat den kleineren Quotienten → H₂ ist das Mangelreagenz
- n(NH₃) = 5 mol H₂ × (2/3) = 3,33 mol NH₃ (nicht 4 mol!)
- N₂-Rest: 2 − 5×(1/3) = 2 − 1,67 = 0,33 mol N₂ (Überschuss)

> **Prüfungstipp:** Stöchiometrie-Rechenaufgaben kommen im MedAT fast in jedem Durchlauf vor. Die drei Schritte (m→n→Verhältnis→m) müssen automatisiert sein. Häufigster Fehler: Die Ausbeute auf Basis des Überschussreagenzes statt des Mangelreagenzes berechnen.

## Prozentuale Ausbeute

In der Praxis wird die theoretische Ausbeute selten vollständig erreicht (Nebenreaktionen, unvollständige Umsätze, Verluste bei der Aufarbeitung).

**Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100**

Beispiel: 50 g theoretisch, 38 g tatsächlich → (38/50) × 100 = 76 %.

> **Merke:** Die theoretische Ausbeute ist immer die Obergrenze. In der Realität wird sie durch Nebenreaktionen, Gleichgewichtslage und Verluste bei der Isolierung unterschritten.

Klinisch/industriell: Der Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃) erreicht nur ~15 % Gleichgewichtsausbeute pro Durchlauf — durch Rückführung der Edukte wird die Gesamtausbeute jedoch auf >90 % gesteigert. Optimale Bedingungen: 400–500 °C, 150–300 bar, Fe-Katalysator. Fritz Haber und Carl Bosch erhielten für diesen Prozess jeweils den Nobelpreis — er versorgt heute ~40 % der Weltbevölkerung mit Nahrung (Düngemittel).

## Stöchiometrie in der Klinik und Pharmazie

- **Infusionszubereitung:** m = c × V × M (z. B. 500 mL einer 0,9 %-igen NaCl-Lösung: 4,5 g NaCl)
- **Molmasse und Dosierung:** Wirkstoffmenge in mol berechnen; bei Antibiotika ist die molare Dosis entscheidend, nicht nur die Masse
- **Blutgasanalyse:** Stöchiometrie des CO₂/HCO₃⁻-Puffersystems: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
- **Glucose-Oxidation:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; pro Mol Glucose 6 Mol CO₂ → Respirationsquotient = 1,0

Beispiel NaCl 0,9 %: 9 g NaCl pro 1 L → c = 9 / 58,5 = 0,154 mol/L ≈ 154 mmol/L (nahe dem Plasma-Na⁺ von ~140 mmol/L).

Die Stöchiometrie lässt sich direkt auf den Stoffwechsel übertragen — der Respiratorische Quotient (RQ) verrät, welcher Nährstoff gerade verbrannt wird:

**Respirationsquotienten verschiedener Nährstoffe:**

| Nährstoff | RQ (CO₂/O₂) | Brennwert |
|---|---|---|
| Kohlenhydrate | 1,0 | 4,1 kcal/g |
| Fette | ~0,7 | 9,3 kcal/g |
| Proteine | ~0,8 | 4,1 kcal/g |
| Ethanol | 0,67 | 7,1 kcal/g |

Klinisch: RQ > 1,0 deutet auf Lipogenese (Fettaufbau aus Kohlenhydraten) hin (Umwandlung von Kohlenhydraten in Fett, vermehrte CO₂-Produktion). Bei Beatmungspatienten kann dies die CO₂-Elimination erschweren — relevant für die Ernährungstherapie bei ARDS (akutes Lungenversagen).

> **Prüfungstipp:** RQ-Werte auswendig: Kohlenhydrate = 1,0; Fette ≈ 0,7; Proteine ≈ 0,8. Physiologische NaCl (0,9 % = 154 mmol/L) ist eine Standardfrage. Die Formeln n = m/M und c = n/V müssen im Schlaf sitzen.`,

    lernziele: [
      "Reaktionsgleichungen korrekt ausgleichen und stöchiometrische Koeffizienten als Mol-Verhältnisse interpretieren.",
      "Das Mangelreagenz (limiting reagent) in einer Reaktion identifizieren und die maximale Ausbeute berechnen.",
      "Die prozentuale Ausbeute berechnen und Ursachen für Ausbeuteverluste benennen.",
      "Stöchiometrische Berechnungen (n = m/M, Mol-Verhältnisse, m = n×M) sicher und fehlerfrei durchführen.",
      "Klinische Anwendungen der Stöchiometrie in Pharmazie und Physiologie erläutern (Infusionen, Dosierung, Puffersystem).",
    ],

    sections: [
      {
        heading: "Stöchiometrie-Schema: Drei Schritte",
        text: "Schritt 1: n(Edukt) = m / M berechnen. Schritt 2: Mit dem Koeffizientenverhältnis aus der ausgeglichenen Gleichung umrechnen: n(Produkt) = n(Edukt) × (Koeff. Produkt / Koeff. Edukt). Schritt 3: m(Produkt) = n × M berechnen. Dieses Schema funktioniert für alle Massen-, Volumen- und Molberechnungen in Reaktionsaufgaben. Bei Gasen: V = n × 22,4 L/mol (bei Normalbedingungen, 0 °C, 1 atm).",
        merksatz:
          "Drei Schritte: m → n (÷M) → n (×Verhältnis) → m (×M). Nie mol mit Gramm verwechseln!",
      },
      {
        heading: "Mangelreagenz (Limiting Reagent)",
        text: "Das Mangelreagenz begrenzt die Produktmenge. Vorgehen: (1) n beider Edukte bestimmen. (2) Stöchiometrisches Verhältnis prüfen: n(A)/a vs. n(B)/b (a, b = Koeffizienten). Der kleinere Quotient kennzeichnet das Mangelreagenz. Die Ausbeute wird ausschließlich auf Basis des Mangelreagenzes berechnet. In der Industrie minimiert man Ausbeute-Verluste durch Rückführung von Überschussreagenz.",
        merksatz:
          "Das Mangelreagenz ist der begrenzende Faktor — es ist für die Ausbeute entscheidend, nicht das Überschussreagenz.",
      },
      {
        heading: "Klinische Stöchiometrie: Infusionen und Dosierung",
        text: "Physiologische Kochsalzlösung (0,9 % NaCl w/v): 9 g NaCl pro Liter. Molare Konzentration: c = m/(M×V) = 9 g / (58,5 g/mol × 1 L) ≈ 0,154 mol/L ≈ 154 mmol/L. Für Pharmaka gilt: Wirkstoff in mmol/kg oder µmol/L — Molmasse ist entscheidend. Glucose-Infusion (5 %): 50 g/L; Molmasse 180 g/mol → 0,278 mol/L. Bei Überdosierung von Paracetamol (Acetaminophen) ist die Stöchiometrie des toxischen Metaboliten NAPQI klinisch relevant.",
        merksatz: "Physiologische NaCl: 0,9 % = 154 mmol/L Na⁺ + 154 mmol/L Cl⁻. Auswendig lernen!",
      },
    ],

    merksätze: [
      "Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Massenverhältnisse.",
      "Schema: m →(÷M)→ n →(×Koeffizientenverhältnis)→ n →(×M)→ m.",
      "Mangelreagenz = der zuerst aufgebrauchte Reaktionspartner, der die Ausbeute begrenzt.",
      "Ausbeute % = (tatsächliche / theoretische Ausbeute) × 100.",
      "RQ verrät den Brennstoff: Kohlenhydrate = 1,0; Fette ≈ 0,7; Proteine ≈ 0,8. RQ > 1 deutet auf Lipogenese.",
      "Physiologische NaCl = 0,9 % = ~154 mmol/L — Standardfrage im MedAT.",
      "Beim Ausgleichen von Gleichungen zuerst Metalle, dann Nichtmetalle, zuletzt H und O.",
    ],

    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Wie berechnet man die maximale Ausbeute eines Produkts, wenn zwei Edukte in nicht-stöchiometrischen Mengen vorliegen?",
      answer:
        "Wenn zwei Edukte in nicht-stöchiometrischen Mengen eingesetzt werden, muss zunächst das Mangelreagenz (limiting reagent) identifiziert werden, denn dieses bestimmt die maximale Ausbeute. Dazu berechnet man die Stoffmengen beider Edukte (n = m/M) und dividiert jede durch den entsprechenden stöchiometrischen Koeffizienten. Der kleinere Quotient kennzeichnet das Mangelreagenz. Anschließend berechnet man die theoretische Ausbeute des Produkts ausschließlich auf Basis des Mangelreagenzes: n(Produkt) = n(Mangelreagenz) × (Koeffizient Produkt / Koeffizient Mangelreagenz). Die Masse des Produkts ergibt sich aus m = n × M. Die tatsächlich erzielte Ausbeute ist in der Praxis immer kleiner als die theoretische (Nebenreaktionen, Verluste bei der Aufarbeitung, Gleichgewichtslagen). Die prozentuale Ausbeute berechnet sich als: Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100. Ein industriell relevantes Beispiel ist der Haber-Bosch-Prozess: N₂ + 3 H₂ ⇌ 2 NH₃. Pro Durchlauf wird nur ~15 % Ausbeute erzielt, aber durch Rückführung der unreagieren Edukte wird die Gesamtausbeute auf über 90 % gesteigert.",
    },

    klinischerBezug:
      "Infusionszubereitung (physiologische NaCl 0,9 % = 154 mmol/L; Glucose 5 %); Pharma-Dosierung in mmol/kg; Stöchiometrie des CO₂/HCO₃⁻-Puffersystems (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻) und der Glucose-Oxidation (RQ = 1,0) sind direkte klinische Anwendungen.",

    selfTest: [
      {
        question: "Welche Mol-Verhältnisse beschreibt die Gleichung: N₂ + 3 H₂ → 2 NH₃?",
        options: [
          "1 g N₂ + 3 g H₂ → 2 g NH₃",
          "1 mol N₂ + 3 mol H₂ → 2 g NH₃",
          "1 mol N₂ + 3 mol H₂ → 2 mol NH₃",
          "2 mol N₂ + 6 mol H₂ → 4 mol NH₃ (kleinstmögliche Variante)",
          "14 g N₂ + 6 g H₂ → 34 g NH₃",
        ],
        correctIndex: 2,
        explanation:
          "Die stöchiometrischen Koeffizienten in einer ausgeglichenen Reaktionsgleichung geben immer Mol-Verhältnisse an, keine Massenverhältnisse. 1 mol N₂ + 3 mol H₂ → 2 mol NH₃ ist die direkte Aussage der Koeffizienten 1:3:2. Die Massenangaben (28 g N₂ + 6 g H₂ → 34 g NH₃) wären zwar korrekt, entsprechen aber nicht den Koeffizienten direkt (1:3:2 ≠ 28:6:34). Option D zeigt das richtige Verhältnis, aber verdoppelt unnötig — es ist nicht die kleinstmögliche ganzzahlige Variante der Koeffizienten.",
        hints: [
          "Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Gramm.",
          "Lies die Koeffizienten 1, 3, 2 direkt aus der Gleichung ab.",
        ],
        tags: ["stoechiometrie", "mol-verhältnisse", "reaktionsgleichung"],
        difficulty: 1,
      },
      {
        question:
          "Man gibt 5 mol H₂ und 2 mol O₂ in eine Reaktion: 2 H₂ + O₂ → 2 H₂O. Welches ist das Mangelreagenz?",
        options: [
          "Keines — beide sind im exakten stöchiometrischen Verhältnis vorhanden.",
          "H₂, weil für 2 mol O₂ genau 4 mol H₂ benötigt werden, aber 5 mol vorhanden sind.",
          "H₂, weil es in der Gleichung mit dem Koeffizient 2 steht.",
          "O₂, weil es weniger Mol sind.",
          "O₂, weil es in der Luft immer im Überschuss vorliegt.",
        ],
        correctIndex: 3,
        explanation:
          "Stöchiometrisches Verhältnis: 2 mol H₂ benötigen 1 mol O₂. Quotienten: H₂: 5/2 = 2,5; O₂: 2/1 = 2. Der kleinere Quotient (2 < 2,5) kennzeichnet O₂ als Mangelreagenz — O₂ wird zuerst aufgebraucht. Für 2 mol O₂ werden 4 mol H₂ verbraucht; 1 mol H₂ bleibt übrig. Option A nennt O₂ korrekt als Mangelreagenz.",
        hints: [
          "Teile n(vorhanden) durch den stöchiometrischen Koeffizienten für jedes Edukt.",
          "Der kleinere Quotient zeigt das Mangelreagenz an.",
        ],
        tags: ["mangelreagenz", "stoechiometrie", "limiting-reagent"],
        difficulty: 2,
      },
      {
        question:
          "Wie viele Gramm CO₂ entstehen bei der vollständigen Verbrennung von 90 g Glucose (C₆H₁₂O₆, M = 180 g/mol)? (M CO₂ = 44 g/mol)",
        options: ["44 g", "88 g", "264 g", "176 g", "132 g"],
        correctIndex: 4,
        explanation:
          "Reaktionsgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Schritt 1: n(Glucose) = 90 g / 180 g/mol = 0,5 mol. Schritt 2: Mol-Verhältnis Glucose : CO₂ = 1:6 → n(CO₂) = 0,5 × 6 = 3 mol. Schritt 3: m(CO₂) = 3 mol × 44 g/mol = 132 g. Die Verbrennung von 90 g Glucose (ein halbes Mol) ergibt 3 Mol CO₂ und 3 Mol H₂O. Prüfung (Massenerhaltung): 90 g Glucose + 96 g O₂ = 132 g CO₂ + 54 g H₂O = 186 g = 186 g.",
        hints: [
          "Schritt 1: n = m/M für Glucose. Schritt 2: Koeffizientenverhältnis 1:6 anwenden. Schritt 3: m = n×M für CO₂.",
          "Aus 1 mol Glucose entstehen 6 mol CO₂. Wie viel Mol Glucose hast du?",
        ],
        tags: ["stoechiometrie", "berechnung", "glucose", "verbrennung"],
        difficulty: 2,
      },
      {
        question:
          "Eine Reaktion ergibt theoretisch 50 g Produkt; tatsächlich werden 38 g isoliert. Wie groß ist die prozentuale Ausbeute?",
        options: ["76 %", "72 %", "62 %", "82 %", "88 %"],
        correctIndex: 0,
        explanation:
          "Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100 = (38 g / 50 g) × 100 = 76 %. Ursachen für die Ausbeuteverluste (24 %): Nebenreaktionen, unvollständiger Umsatz (Gleichgewichtslage), Verluste bei der Isolierung und Aufarbeitung des Produkts. In der industriellen Chemie (z. B. Haber-Bosch-Prozess) ist die Optimierung der Ausbeute ein zentrales wirtschaftliches Ziel.",
        hints: [
          "Formel: Ausbeute % = (gemessen / theoretisch) × 100.",
          "38 von 50 — welcher Prozentsatz ist das?",
        ],
        tags: ["ausbeute", "stoechiometrie", "berechnung"],
        difficulty: 1,
      },
      {
        question:
          "Wie viel Gramm NaCl (M = 58,5 g/mol) sind in 500 mL physiologischer Kochsalzlösung (0,9 % w/v) enthalten?",
        options: ["0,9 g", "4,5 g", "2,25 g", "9,0 g", "18,0 g"],
        correctIndex: 1,
        explanation:
          "0,9 % (w/v) bedeutet 0,9 g NaCl pro 100 mL Lösung. In 500 mL sind daher: 0,9 g/100 mL × 500 mL = 4,5 g NaCl enthalten. Zur Kontrolle die molare Konzentration: c = 4,5 g / (58,5 g/mol × 0,5 L) = 4,5 / 29,25 ≈ 0,154 mol/L = 154 mmol/L. Das entspricht der physiologischen Na⁺/Cl⁻-Konzentration im Blut (~140/100 mmol/L). Diese Berechnung ist in der klinischen Pharmakologie und bei der Infusionszubereitung täglich relevant.",
        hints: [
          "0,9 % w/v = 0,9 g pro 100 mL. Berechne dann für 500 mL.",
          "Denke daran: % w/v ist immer auf 100 mL bezogen.",
        ],
        tags: ["klinische-stoechiometrie", "infusion", "nacl", "pharmazie"],
        difficulty: 2,
      },
      {
        question:
          "Beim Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃): Wie viel Mol H₂ werden benötigt, um 34 g NH₃ herzustellen? (M(NH₃) = 17 g/mol)",
        options: ["1 mol H₂", "2 mol H₂", "3 mol H₂", "4 mol H₂", "6 mol H₂"],
        correctIndex: 2,
        explanation:
          "Schritt 1: n(NH₃) = 34 g / 17 g/mol = 2 mol NH₃. Schritt 2: Mol-Verhältnis H₂ : NH₃ = 3:2. Für 2 mol NH₃ werden benötigt: n(H₂) = 2 mol × (3/2) = 3 mol H₂. Schritt 3 (Kontrolle N₂): n(N₂) = 2 mol × (1/2) = 1 mol N₂. Massenprüfung: 28 g N₂ + 6 g H₂ = 34 g NH₃. Der Haber-Bosch-Prozess (Fritz Haber, Carl Bosch, Anfang 20. Jh.) ist einer der wichtigsten industriellen Prozesse der Welt — die Ammoniak-Synthese ist Grundlage für Düngemittelproduktion und versorgt ~40 % der Weltbevölkerung mit Nahrung.",
        hints: [
          "Zuerst n(NH₃) = m/M berechnen. Dann Koeffizientenverhältnis H₂:NH₃ anwenden.",
          "H₂ : NH₃ = 3 : 2 in der Gleichung.",
        ],
        tags: ["haber-bosch", "stoechiometrie", "berechnung", "ammoniak"],
        difficulty: 2,
      },
      {
        question:
          "Was ist der Respirationsquotient (RQ) bei der vollständigen Verbrennung von Glucose (C₆H₁₂O₆)?",
        options: ["RQ = 0,7", "RQ = 0,8", "RQ = 1,5", "RQ = 1,0", "RQ = 2,0"],
        correctIndex: 3,
        explanation:
          "Die Verbrennung von Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Der Respirationsquotient RQ = produziertes CO₂ / verbrauchter O₂ = 6/6 = 1,0. Bei Fetten (z. B. Palmitinsäure) ist RQ ≈ 0,7, weil Fette verhältnismäßig weniger Sauerstoff im Molekül haben und mehr O₂ verbrauchen als CO₂ produzieren. Bei Proteinen liegt RQ ≈ 0,8. Ein RQ > 1 deutet auf Lipogenese (Kohlenhydrate → Fette) hin. Der RQ ist klinisch relevant bei Ernährungsmedizin und Beatmungstherapie (ARDS).",
        hints: [
          "RQ = produziertes CO₂ / verbrauchter O₂. Zähle die Mol aus der Gleichung.",
          "Glucose hat bereits Sauerstoff im Molekül — das hat Auswirkungen auf das CO₂/O₂-Verhältnis.",
        ],
        tags: ["respirationsquotient", "stoechiometrie", "glucose", "klinik"],
        difficulty: 3,
      },
    ],
  },
];
