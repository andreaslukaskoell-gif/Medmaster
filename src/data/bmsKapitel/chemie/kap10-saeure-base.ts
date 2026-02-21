import type { Kapitel } from '../types';

export const chemKap10: Kapitel = {
  id: "chem-kap10",
  title: "Säure-Base",
  subject: "chemie",
  icon: "🧫",
  estimatedTime: "55 min",
  unterkapitel: [
    {
      id: "ch-10-01",
      title: "Säuren und Basen nach Brønsted-Lowry",
      content: `## Das Brønsted-Lowry-Konzept

Das Brønsted-Lowry-Konzept (1923) definiert:
- **Säure:** Protonendonor — gibt H⁺ (Proton) an eine Base ab
- **Base:** Protonenakzeptor — nimmt H⁺ von einer Säure auf

Dies erweitert die ältere Arrhenius-Definition (Säure = H⁺-Lieferant in Wasser, Base = OH⁻-Lieferant) auf alle Lösungsmittel.

## Konjugierte Säure-Base-Paare

Bei jeder Protonenübertragung entstehen konjugierte Paare:
**HA + B ⇌ A⁻ + BH⁺**

- HA / A⁻ bilden ein konjugiertes Säure-Base-Paar (HA ist Säure, A⁻ die konjugierte Base)
- B / BH⁺ bilden ein konjugiertes Säure-Base-Paar (B ist Base, BH⁺ die konjugierte Säure)

**Merksatz:** Die konjugierte Base einer starken Säure ist schwach (und umgekehrt).

## Säurestärke und K_s

Die Stärke einer Säure wird durch die Gleichgewichtskonstante K_s (oder K_a) quantifiziert:

**K_s = [H₃O⁺] · [A⁻] / [HA]**

**pK_s = −log(K_s):** Kleines pK_s = starke Säure (großes K_s); großes pK_s = schwache Säure.

## Starke vs. schwache Säuren

**Starke Säuren** (vollständige Dissoziation, K_s >> 1, pK_s < 0):
- HCl (Salzsäure), HBr, HI
- H₂SO₄ (Schwefelsäure, erste Dissoziation)
- HNO₃ (Salpetersäure)

**Schwache Säuren** (partielle Dissoziation, K_s << 1, pK_s > 0):
- CH₃COOH (Essigsäure, pK_s = 4,75)
- H₂CO₃ (Kohlensäure, pK_s1 = 6,4)
- H₃PO₄ (Phosphorsäure, pK_s1 = 2,1)
- NH₄⁺ (konjugierte Säure des Ammoniaks, pK_s = 9,25)

## Lewis-Säure-Base-Konzept (Erweiterung)

Lewis (1923) definiert noch allgemeiner: Säure = Elektronenpaarakzeptor, Base = Elektronenpaardonor. Dies erklärt auch Reaktionen ohne Protonentransfer (z. B. BF₃ + NH₃ → F₃B-NH₃).`,
      lernziele: [
        "Das Brønsted-Lowry-Konzept erklären und konjugierte Säure-Base-Paare identifizieren",
        "K_s und pK_s definieren und für die Klassifizierung starker und schwacher Säuren nutzen",
        "Den Unterschied zwischen Brønsted-Lowry und Lewis-Konzept beschreiben",
      ],
      sections: [
        {
          heading: "Konjugierte Paare und Reaktionsrichtung",
          text: "In einer Säure-Base-Reaktion überträgt die stärkere Säure ein Proton an die stärkere Base. Das Gleichgewicht liegt auf der Seite der schwächeren Säure und schwächeren Base. Beispiel: HCl + NH₃ → NH₄⁺ + Cl⁻. HCl (starke Säure, konjugierte Base Cl⁻ sehr schwach) gibt H⁺ an NH₃ (mittelstarke Base, konjugierte Säure NH₄⁺ schwach). Das Gleichgewicht liegt rechts (fast vollständig). Diese Überlegung erlaubt es vorherzusagen, ob eine Reaktion in der angegebenen Richtung abläuft, ohne K_s zu berechnen.",
          merksatz: "Starke Säure → schwache konjugierte Base; GGW auf Seite der schwächeren Säure",
        },
        {
          heading: "Säurestärke und Molekülstruktur",
          text: "Die Säurestärke hängt von der Stabilität der konjugierten Base (A⁻) ab: Je stabiler A⁻, desto leichter gibt HA das Proton ab (stärkere Säure). Stabilitätsfaktoren: Elektronegativität (F > O > N > C — O-H-Säuren stärker als N-H-Säuren), Bindungslänge/Bindungsstärke (H-X schwächer bei größerem X → HI stärker als HCl), Induktive Effekte (elektronenziehende Gruppen erhöhen Säurestärke — Trichloressigsäure pK_s = 0,5 vs. Essigsäure pK_s = 4,75), Resonanzstabilisierung (Carboxylat-Ion stabilisiert durch zwei gleiche C-O-Bindungen).",
          merksatz: "Stabile konjugierte Base A⁻ = starke Säure HA",
        },
      ],
      merksätze: [
        "Brønsted: Säure = H⁺-Donor, Base = H⁺-Akzeptor",
        "pK_s klein = starke Säure; pK_s groß = schwache Säure",
        "Konjugiert: stark ↔ schwach — starke Säure, schwache konj. Base",
      ],
      klinischerBezug: "Magensäure (HCl, pH 1–2) aktiviert Pepsinogen zu Pepsin und tötet Bakterien. Bei Gastritis/Ulkus überschüssige H⁺-Produktion: Behandlung mit Protonenpumpenhemmern (PPIs, z.B. Omeprazol hemmt irreversibel H⁺/K⁺-ATPase) oder H2-Antagonisten.",
      altfrage: {
        question: "Was ist eine konjugierte Säure-Base-Paar nach Brønsted-Lowry?",
        answer: "Ein konjugiertes Säure-Base-Paar besteht aus einer Säure (HA) und der nach Protonenabgabe entstehenden Base (A⁻). Sie unterscheiden sich um genau ein Proton H⁺. Beispiel: CH₃COOH / CH₃COO⁻ (Essigsäure / Acetat). Die konjugierte Base einer starken Säure ist immer eine schwache Base.",
      },
      selfTest: [
        {
          question: "Welches Paar ist ein konjugiertes Säure-Base-Paar nach Brønsted-Lowry?",
          options: [
            "HCl / NaCl",
            "H₂SO₄ / SO₄²⁻",
            "CH₃COOH / CH₃COO⁻",
            "NaOH / H₂O",
            "NH₃ / N₂",
          ],
          correctIndex: 2,
          explanation: "CH₃COOH (Essigsäure) und CH₃COO⁻ (Acetat) unterscheiden sich um genau ein Proton H⁺ — das definiert ein konjugiertes Säure-Base-Paar nach Brønsted-Lowry. H₂SO₄/SO₄²⁻ unterscheiden sich um zwei Protonen (kein konjugiertes Paar). NaOH/H₂O sind kein konjugiertes Paar.",
          hints: [
            "Konjugiertes Paar = unterschied von einem Proton H⁺",
            "HA und A⁻ sind immer ein konjugiertes Paar",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Säure ist die stärkste (kleinster pK_s)?",
          options: [
            "Essigsäure (pK_s = 4,75)",
            "Kohlensäure (pK_s1 = 6,4)",
            "Ammoniumion NH₄⁺ (pK_s = 9,25)",
            "Salzsäure HCl (pK_s ≈ −7)",
            "Phosphorsäure H₃PO₄ (pK_s1 = 2,1)",
          ],
          correctIndex: 3,
          explanation: "Kleinster pK_s bedeutet größtes K_s, also stärkste Säure. HCl hat pK_s ≈ −7 (vollständig dissoziiert, starke Säure). Im Vergleich: Phosphorsäure pK_s = 2,1, Essigsäure 4,75, Kohlensäure 6,4, NH₄⁺ 9,25 — alle schwächer als HCl.",
          hints: [
            "Kleinerer pK_s = stärkere Säure",
            "Welche Säuren sind stark (vollständig dissoziiert)?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Nach Brønsted-Lowry ist Wasser in der Reaktion H₂O + NH₃ ⇌ OH⁻ + NH₄⁺:",
          options: [
            "Eine Base (H⁺-Akzeptor)",
            "Eine Säure (H⁺-Donor)",
            "Weder Säure noch Base",
            "Ein Oxidationsmittel",
            "Ein Lösungsmittel ohne Säure-Base-Funktion",
          ],
          correctIndex: 1,
          explanation: "In H₂O + NH₃ ⇌ OH⁻ + NH₄⁺ gibt Wasser ein Proton H⁺ an NH₃ ab. Wasser ist der Protonendonor (Säure), NH₃ ist der Protonenakzeptor (Base). Die konjugierte Base von H₂O ist OH⁻, die konjugierte Säure von NH₃ ist NH₄⁺. Wasser ist amphiprot — kann je nach Partner Säure oder Base sein.",
          hints: [
            "Was gibt hier H⁺ ab?",
            "Wasser ist amphiprot — schau, an wen H⁺ übertragen wird",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist Trichloressigsäure (CCl₃COOH, pK_s = 0,5) viel stärker als Essigsäure (CH₃COOH, pK_s = 4,75)?",
          options: [
            "Weil Cl größer als H ist",
            "Weil drei Cl-Atome elektronenziehend das Carboxylat-Ion stabilisieren",
            "Weil CCl₃COOH mehr Protonen hat",
            "Weil Cl basischer als H ist",
            "Weil CCl₃COOH eine stärkere C-Cl-Bindung hat",
          ],
          correctIndex: 1,
          explanation: "Die drei Chloratome sind stark elektronegativ und ziehen Elektronen (induktiver Effekt, -I) vom Carboxylat-Ion weg. Dies stabilisiert die negative Ladung im Anion (CCl₃COO⁻) stärker als im CH₃COO⁻. Je stabiler die konjugierte Base, desto leichter gibt die Säure H⁺ ab → stärkere Säure. pK_s-Differenz von ~4 entspricht einer Säurestärkeratio von 10⁴.",
          hints: [
            "Elektronenziehende Gruppen (Cl) stabilisieren A⁻",
            "Stabile konjugierte Base = stärkere Säure",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen dem Brønsted-Lowry- und Lewis-Konzept?",
          options: [
            "Lewis-Säuren geben H⁺ ab, Brønsted-Säuren akzeptieren Elektronen",
            "Brønsted-Lowry: H⁺-Übertragung; Lewis: Elektronenpaar-Übertragung (ohne H⁺)",
            "Beide Konzepte sind identisch",
            "Lewis gilt nur für Basen, Brønsted nur für Säuren",
            "Lewis-Konzept gilt nur in organischen Lösungsmitteln",
          ],
          correctIndex: 1,
          explanation: "Das Brønsted-Lowry-Konzept basiert auf Protonenübertragung (H⁺). Das Lewis-Konzept ist allgemeiner: Lewis-Säure = Elektronenpaarakzeptor, Lewis-Base = Elektronenpaardonor. Jede Brønsted-Säure ist auch eine Lewis-Säure (H⁺ ist ein Elektronenpaarakzeptor), aber nicht umgekehrt. BF₃ ist eine Lewis-Säure ohne Proton.",
          hints: [
            "Lewis-Konzept braucht kein H⁺",
            "Was ist ein Elektronenpaarakzeptor?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-10-02",
      title: "pH-Wert — Definition, Berechnung und klinische Bedeutung",
      content: `## Definition des pH-Werts

Der pH-Wert (Potentia Hydrogenii) wurde 1909 von Søren Sørensen eingeführt:

**pH = −log[H₃O⁺]**

bzw. pOH = −log[OH⁻], und es gilt:

**pH + pOH = 14** (bei 25 °C, da pK_w = 14)

Die pH-Skala läuft von 0 bis 14 (in wässriger Lösung bei 25 °C):
- pH < 7: sauer ([H₃O⁺] > [OH⁻])
- pH = 7: neutral ([H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L)
- pH > 7: basisch ([H₃O⁺] < [OH⁻])

## pH-Berechnung: Starke Säuren

Starke Säuren dissoziieren vollständig. Für c mol/L HCl:
**[H₃O⁺] = c → pH = −log(c)**

Beispiel: c(HCl) = 0,01 mol/L → [H₃O⁺] = 10⁻² mol/L → **pH = 2**

## pH-Berechnung: Schwache Säuren

Schwache Säure HA mit Konzentration c und K_s:
Näherungsformel (wenn c >> [H₃O⁺]):

**[H₃O⁺] ≈ √(K_s · c)**

**pH = ½(pK_s − log c)**

Beispiel: c(CH₃COOH) = 0,1 mol/L, pK_s = 4,75:
pH = ½(4,75 + 1) = ½ · 5,75 = 2,875 ≈ 2,9

## pH in Körperflüssigkeiten

| Körperflüssigkeit | pH-Bereich |
|---|---|
| Arterielles Blut | 7,35–7,45 |
| Magensaft | 1–2 |
| Urin | 4,5–8 |
| Speichel | 6,5–7,5 |
| Liquor cerebrospinalis | 7,3–7,4 |

Das arterielle Blut wird durch Puffer (Bicarbonat, Proteine, Phosphat) und Regulation (Lunge, Niere) streng auf pH 7,35–7,45 gehalten. Abweichungen über 0,4 pH-Einheiten sind lebensbedrohlich.`,
      lernziele: [
        "Den pH-Wert definieren und einfache pH-Berechnungen für starke und schwache Säuren durchführen",
        "Die Beziehung pH + pOH = 14 anwenden können",
        "Den physiologischen pH-Bereich des Blutes und wichtiger Körperflüssigkeiten nennen",
      ],
      sections: [
        {
          heading: "pH-Berechnung für starke und schwache Säuren im Vergleich",
          text: "Bei starken Säuren ist die Berechnung direkt: pH = −log c. Bei 0,1 mol/L HCl → pH = 1. Bei schwachen Säuren muss die Dissoziationskonstante K_s berücksichtigt werden. Die Näherungsformel pH = ½(pK_s − log c) gilt, wenn der Dissoziationsgrad α < 5 % ist (d.h. c >> K_s). Für Essigsäure (pK_s = 4,75, c = 0,1 mol/L): pH = ½(4,75 + 1) = 2,9. Im Vergleich: 0,1 mol/L HCl (starke Säure) → pH = 1 — also ist 0,1 mol/L Essigsäure ca. 10-mal schwächer sauer. Diese Unterschiede sind biologisch relevant: Magensäure (HCl, pH 1–2) vs. Blut (pH 7,4).",
          merksatz: "Starke Säure: pH = −log c; schwache Säure: pH = ½(pK_s − log c)",
        },
        {
          heading: "Klinische Bedeutung des pH",
          text: "Der pH des Blutes (7,35–7,45) wird durch drei Systeme reguliert: Puffersysteme (sofortige Wirkung, Sekunden), Atemregulation (Minuten, CO₂-Abatmung) und renale Regulation (Stunden bis Tage, H⁺/HCO₃⁻-Ausscheidung). Azidose (pH < 7,35) und Alkalose (pH > 7,45) stören Enzymfunktionen, Ionenkanäle und Proteinfaltung. Bei pH < 6,8 oder > 7,8 ist die Prognose ohne Therapie infaust. Die Henderson-Hasselbalch-Gleichung ermöglicht die klinische Beurteilung von Säure-Base-Störungen aus Blutgaswerten (pH, pCO₂, HCO₃⁻).",
          merksatz: "Blut-pH: 7,35–7,45; < 7,35 = Azidose, > 7,45 = Alkalose",
        },
      ],
      merksätze: [
        "pH = −log[H₃O⁺]; pH + pOH = 14",
        "Starke Säure c=0,01 M → pH=2; schwach: pH=½(pKs−log c)",
        "Blut pH 7,35–7,45; Magen 1–2; Urin 4,5–8",
      ],
      klinischerBezug: "Blutgasanalyse (BGA) misst pH, pO₂, pCO₂ und HCO₃⁻ direkt. Bei metabolischer Azidose (z.B. Laktatazidose bei Schock, Ketoazidose bei Diabetes mellitus Typ 1) fällt pH und HCO₃⁻. Respiratorische Kompensation: Hyperventilation senkt pCO₂ → pH steigt teilweise.",
      altfrage: {
        question: "Wie berechnet man den pH einer 0,1 mol/L Salzsäure-Lösung?",
        answer: "HCl ist eine starke Säure und dissoziiert vollständig. [H₃O⁺] = 0,1 mol/L = 10⁻¹ mol/L. pH = −log[H₃O⁺] = −log(10⁻¹) = 1. Also pH = 1.",
      },
      selfTest: [
        {
          question: "Welchen pH hat eine 0,001 mol/L HCl-Lösung?",
          options: [
            "pH = 1",
            "pH = 2",
            "pH = 3",
            "pH = 11",
            "pH = 7",
          ],
          correctIndex: 2,
          explanation: "HCl ist eine starke Säure (vollständige Dissoziation). [H₃O⁺] = 0,001 mol/L = 10⁻³ mol/L. pH = −log(10⁻³) = 3. Merkregel: c = 10⁻ⁿ mol/L → pH = n für starke Säuren.",
          hints: [
            "HCl dissoziiert vollständig: [H₃O⁺] = c(HCl)",
            "pH = −log[H₃O⁺] = −log(0,001) = ?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Lösung hat pH = 9. Welchen pOH hat sie?",
          options: [
            "pOH = 9",
            "pOH = 7",
            "pOH = 5",
            "pOH = 4",
            "pOH = 14",
          ],
          correctIndex: 2,
          explanation: "Es gilt pH + pOH = 14 (bei 25 °C). Also pOH = 14 − pH = 14 − 9 = 5. Diese Lösung ist basisch (pH > 7). [OH⁻] = 10⁻⁵ mol/L, [H₃O⁺] = 10⁻⁹ mol/L.",
          hints: [
            "pH + pOH = 14 bei 25 °C",
            "pOH = 14 − pH",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welcher pH-Bereich gilt für arterielles Blut?",
          options: [
            "pH 6,8–7,0",
            "pH 7,0–7,2",
            "pH 7,35–7,45",
            "pH 7,5–8,0",
            "pH 1–2",
          ],
          correctIndex: 2,
          explanation: "Arterielles Blut hat einen streng regulierten pH von 7,35–7,45 (leicht basisch). Dieser Bereich ist für optimale Enzymfunktion und Hämoglobin-O₂-Bindung notwendig. pH < 7,35 = Azidose, pH > 7,45 = Alkalose. Abweichungen über 0,4 Einheiten sind lebensbedrohlich.",
          hints: [
            "Blut ist leicht basisch — pH > 7",
            "Die Schwankungsbreite ist eng: ca. 0,1 pH-Einheiten",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine schwache Säure HA hat pK_s = 4,75 und c = 0,1 mol/L. Welchen näherungsweisen pH hat die Lösung?",
          options: [
            "pH ≈ 1,0",
            "pH ≈ 2,9",
            "pH ≈ 4,75",
            "pH ≈ 7,0",
            "pH ≈ 5,9",
          ],
          correctIndex: 1,
          explanation: "Für schwache Säuren gilt: pH = ½(pK_s − log c). log(0,1) = −1, also −log c = +1. pH = ½(4,75 + 1) = ½ × 5,75 = 2,875 ≈ 2,9. Dies ist der pH von 0,1 mol/L Essigsäure (pK_s = 4,75).",
          hints: [
            "Formel für schwache Säure: pH = ½(pK_s − log c)",
            "log(0,1) = −1, also −log(0,1) = +1",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "pH sinkt von 7 auf 5. Um welchen Faktor steigt [H₃O⁺]?",
          options: [
            "2-fach",
            "10-fach",
            "100-fach",
            "1000-fach",
            "0,5-fach",
          ],
          correctIndex: 2,
          explanation: "pH = −log[H₃O⁺]. Bei pH 7: [H₃O⁺] = 10⁻⁷ mol/L. Bei pH 5: [H₃O⁺] = 10⁻⁵ mol/L. Das Verhältnis: 10⁻⁵/10⁻⁷ = 10² = 100. Die pH-Skala ist logarithmisch: pro Einheit Abfall steigt [H₃O⁺] um Faktor 10, bei 2 Einheiten Abfall um Faktor 100.",
          hints: [
            "pH-Skala ist logarithmisch (Basis 10)",
            "Pro 1 pH-Einheit ändert sich [H₃O⁺] um Faktor 10",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-10-03",
      title: "Puffer — Henderson-Hasselbalch und biologische Puffersysteme",
      content: `## Was ist ein Puffer?

Ein Puffer ist ein System, das den pH-Wert bei Zugabe kleiner Mengen Säure oder Base nahezu konstant hält. Ein Puffer besteht aus:
- Einer **schwachen Säure** (HA) und ihrer **konjugierten Base** (A⁻)
- In annähernd gleichen Konzentrationen

**Wirkprinzip:**
- Zugabe von Säure (H⁺): H⁺ + A⁻ → HA (Base "fängt" H⁺)
- Zugabe von Base (OH⁻): OH⁻ + HA → A⁻ + H₂O (Säure "neutralisiert" OH⁻)

## Henderson-Hasselbalch-Gleichung

Die Henderson-Hasselbalch-Gleichung beschreibt den pH eines Puffers:

**pH = pK_s + log([A⁻]/[HA])**

- Bei [A⁻] = [HA]: pH = pK_s (optimale Pufferwirkung)
- Pufferbereich: pK_s ± 1 (zwischen 1:10 und 10:1 Verhältnis)
- Außerhalb dieses Bereichs ist die Pufferkapazität gering

## Bicarbonat-Puffer im Blut

Das wichtigste extrazelluläre Puffersystem:

**H₂CO₃ ⇌ H⁺ + HCO₃⁻** (pK_s1 = 6,4)

Henderson-Hasselbalch: pH = 6,4 + log([HCO₃⁻]/[H₂CO₃])

Im arteriellen Blut: [HCO₃⁻] ≈ 24 mEq/L, [H₂CO₃] ≈ 1,2 mEq/L
pH = 6,4 + log(24/1,2) = 6,4 + log(20) = 6,4 + 1,3 = **7,4**

## Phosphat-Puffer (intrazellulär)

H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻ (pK_s = 6,8)
Optimal bei pH ≈ 6,8 — wichtiger Puffer im intrazellulären Milieu und in Urin.

## Protein-Puffer

Hämoglobin (Hb) und Plasmaproteine puffern durch Histidin-Seitenketten (pK_s ≈ 6,5). Hb ist der wichtigste intraerythrozytäre Puffer. Deoxyhämoglobin (DeoxyHb) ist eine stärkere Base als OxyHb (Bohr-Effekt).

## Pufferkapazität

Die Pufferkapazität β ist die Menge Säure/Base in mol/L, die pro pH-Einheit Änderung aufgenommen werden kann. Sie ist maximal bei pH = pK_s und hängt von der Gesamtkonzentration der Pufferkomponenten ab.`,
      lernziele: [
        "Das Pufferprinzip erklären und die Henderson-Hasselbalch-Gleichung anwenden",
        "Den Bicarbonat-Puffer im Blut quantitativ verstehen",
        "Phosphat-, Protein- und Bicarbonat-Puffer nach Lokalisation und Bedeutung unterscheiden",
      ],
      sections: [
        {
          heading: "Henderson-Hasselbalch im klinischen Kontext",
          text: "Die Henderson-Hasselbalch-Gleichung pH = pK_s + log([A⁻]/[HA]) ist das Werkzeug zur Interpretation von Blutgaswerten. Für den Bicarbonat-Puffer gilt: pH = 6,4 + log([HCO₃⁻]/[CO₂]). Da [CO₂] = 0,03 × pCO₂ (kPa) oder 0,23 × pCO₂ (mmHg), kann man aus gemessenem pH und pCO₂ das [HCO₃⁻] berechnen und umgekehrt. Klinisch wichtig: Bei respiratorischer Azidose (↑pCO₂) sinkt pH → renale Kompensation erhöht [HCO₃⁻]. Bei metabolischer Azidose (↓HCO₃⁻) sinkt pH → respiratorische Kompensation erniedrigt pCO₂ (Hyperventilation, Kussmaul-Atmung).",
          merksatz: "pH = pK_s + log([Base]/[Säure]); max. Pufferung bei [A⁻]=[HA]",
        },
        {
          heading: "Bicarbonat-Puffer — Besonderheit des offenen Systems",
          text: "Der Bicarbonat-Puffer ist im Körper ein offenes System: CO₂ wird kontinuierlich durch die Atmung abgegeben und durch Stoffwechsel produziert. Dadurch kann der Körper [H₂CO₃] über die Atemfrequenz regulieren (pCO₂ steuerbar). Bei pH = 7,4 liegt das Verhältnis [HCO₃⁻]/[H₂CO₃] = 20:1, weit außerhalb des optimalen Pufferbereichs (pK_s ± 1). Trotzdem ist der Bicarbonat-Puffer der effektivste Blutpuffer, weil seine Komponenten (pCO₂ durch Lunge, HCO₃⁻ durch Niere) unabhängig reguliert werden können — ein Vorteil gegenüber geschlossenen Puffersystemen.",
          merksatz: "Bicarbonat-Puffer: offenes System — CO₂ durch Lunge regulierbar",
        },
      ],
      merksätze: [
        "Puffer = schwache Säure + konj. Base; pH = pK_s + log([A⁻]/[HA])",
        "Bicarbonat-Blut: [HCO₃⁻]/[H₂CO₃] = 20:1 → pH 7,4",
        "Max. Pufferkapazität bei pH = pK_s",
      ],
      klinischerBezug: "Aus der Henderson-Hasselbalch-Gleichung erklärt sich die Kussmaul-Atmung bei diabetischer Ketoazidose: Durch Tiefatemstoßen wird CO₂ (= H₂CO₃-Äquivalent) abgeatmet → [HCO₃⁻]/[CO₂]-Quotient steigt → pH steigt (respiratorische Kompensation einer metabolischen Azidose).",
      altfrage: {
        question: "Bei welchem pH wird ein Essigsäure-Acetat-Puffer (pK_s = 4,75) optimal gepuffert?",
        answer: "Der Puffer ist bei pH = pK_s optimal, also bei pH 4,75. An diesem Punkt sind [CH₃COOH] = [CH₃COO⁻] (gleiches Verhältnis = 1, log(1) = 0). Die Pufferkapazität ist hier maximal, und kleine Mengen Säure oder Base verursachen die geringste pH-Änderung.",
      },
      selfTest: [
        {
          question: "Ein Essigsäure/Acetat-Puffer hat [CH₃COOH] = 0,1 mol/L und [CH₃COO⁻] = 0,1 mol/L (pK_s = 4,75). Welchen pH hat der Puffer?",
          options: [
            "pH = 2,9",
            "pH = 4,0",
            "pH = 4,75",
            "pH = 7,0",
            "pH = 5,75",
          ],
          correctIndex: 2,
          explanation: "Henderson-Hasselbalch: pH = pK_s + log([A⁻]/[HA]) = 4,75 + log(0,1/0,1) = 4,75 + log(1) = 4,75 + 0 = 4,75. Wenn [Säure] = [Base], ist der pH gleich pK_s. Dies ist auch der Punkt maximaler Pufferkapazität.",
          hints: [
            "Henderson-Hasselbalch: pH = pK_s + log([Base]/[Säure])",
            "Was ist log(1)?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was passiert mit dem pH eines Puffers, wenn man [A⁻]/[HA] von 1 auf 10 erhöht?",
          options: [
            "pH sinkt um 1 Einheit",
            "pH steigt um 1 Einheit",
            "pH bleibt konstant",
            "pH verdoppelt sich",
            "pH sinkt um 2 Einheiten",
          ],
          correctIndex: 1,
          explanation: "Nach Henderson-Hasselbalch: Δ(pH) = log(10/1) − log(1/1) = log(10) − log(1) = 1 − 0 = 1. Bei einer Zehnfacherhöhung des [A⁻]/[HA]-Verhältnisses steigt der pH um genau 1 pH-Einheit. Die logarithmische Natur der pH-Skala erklärt dies.",
          hints: [
            "Henderson-Hasselbalch: pH = pK_s + log([A⁻]/[HA])",
            "log(10) = 1",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Im Blut gilt [HCO₃⁻] = 24 mmol/L und [H₂CO₃] = 1,2 mmol/L (pK_s = 6,4). Was ergibt Henderson-Hasselbalch?",
          options: [
            "pH = 6,4",
            "pH = 6,7",
            "pH = 7,4",
            "pH = 7,8",
            "pH = 5,1",
          ],
          correctIndex: 2,
          explanation: "pH = 6,4 + log(24/1,2) = 6,4 + log(20) = 6,4 + 1,301 ≈ 7,4. Das physiologische Verhältnis HCO₃⁻/H₂CO₃ = 20:1 ergibt exakt den normalen Blut-pH von 7,4. Jede Änderung dieses Verhältnisses verändert den Blut-pH entsprechend.",
          hints: [
            "Henderson-Hasselbalch anwenden: pH = pK_s + log([HCO₃⁻]/[H₂CO₃])",
            "log(20) ≈ 1,3",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Puffer ist hauptsächlich intrazellulär aktiv?",
          options: [
            "Bicarbonat-Puffer (H₂CO₃/HCO₃⁻)",
            "Phosphat-Puffer (H₂PO₄⁻/HPO₄²⁻, pK_s = 6,8)",
            "Hämoglobin-Puffer",
            "Albumin-Puffer",
            "Citrat-Puffer",
          ],
          correctIndex: 1,
          explanation: "Der Phosphat-Puffer (H₂PO₄⁻/HPO₄²⁻, pK_s = 6,8) ist hauptsächlich intrazellulär aktiv, da Phosphat intrazellulär in höherer Konzentration vorliegt. Er ist auch im Urin wichtig. Der Bicarbonat-Puffer ist extrazellulär dominierend, Hämoglobin puffert intrazellulär in Erythrozyten.",
          hints: [
            "Welche Puffersubstanzen kommen intrazellulär vor?",
            "Phosphat ist reichlich im Zellinneren vorhanden",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist der Bicarbonat-Puffer trotz pH = 7,4 (weit von pK_s = 6,4) so effektiv?",
          options: [
            "Weil er bei pH 7,4 maximale Kapazität hat",
            "Weil CO₂ durch die Atmung und HCO₃⁻ durch die Niere unabhängig reguliert werden können",
            "Weil HCO₃⁻ sehr hohe Konzentration im Blut hat",
            "Weil die Lunge den pH direkt misst",
            "Weil CO₂ unlöslich in Blut ist",
          ],
          correctIndex: 1,
          explanation: "Obwohl der optimale Pufferbereich bei pK_s ± 1 = 5,4–7,4 liegt, ist der Bicarbonat-Puffer so effektiv, weil er ein offenes System ist: Die Lunge kann pCO₂ (= [H₂CO₃]) und die Niere [HCO₃⁻] unabhängig regulieren. Jede Komponente ist separat steuerbar, was eine präzise pH-Regulation ermöglicht, die keine anderen Puffersysteme erreichen.",
          hints: [
            "Geschlossenes vs. offenes Puffersystem — was ist der Vorteil?",
            "Welche Organe regulieren CO₂ und HCO₃⁻?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: "ch-10-04",
      title: "Säure-Base-Haushalt im Körper",
      content: `## Übersicht der Säure-Base-Störungen

Der Säure-Base-Haushalt des Körpers kann in vier grundlegende Störungen unterteilt werden, je nachdem ob die Ursache metabolisch (Bicarbonat) oder respiratorisch (CO₂) ist.

## Metabolische Azidose

**Definition:** pH < 7,35 + primär ↓[HCO₃⁻]
**Ursachen:**
- Diabetische Ketoazidose (↑β-Hydroxybutyrat, Acetoacetat)
- Laktatazidose (Hypoxie, Sepsis, Metformin)
- Urämische Azidose (Nierenversagen)
- Diarrhö (Verlust von HCO₃⁻)

**Respiratorische Kompensation:** Hyperventilation → ↓pCO₂ → pH steigt (Kussmaul-Atmung)

## Metabolische Alkalose

**Definition:** pH > 7,45 + primär ↑[HCO₃⁻]
**Ursachen:**
- Erbrechen (Verlust von HCl → HCO₃⁻ steigt relativ)
- Diuretika (Furosemid → H⁺ und K⁺ Verlust)
- Primärer Hyperaldosteronismus (↑H⁺-Ausscheidung in Niere)

**Respiratorische Kompensation:** Hypoventilation → ↑pCO₂ → pH sinkt

## Respiratorische Azidose

**Definition:** pH < 7,35 + primär ↑pCO₂
**Ursachen:**
- Hypoventilation (COPD, Opioid-Vergiftung, Schlaf-Apnoe, neuromuskuläre Erkrankungen)
- Akut: pCO₂ ↑, HCO₃⁻ noch normal
- Chronisch: renale Kompensation ↑HCO₃⁻

## Respiratorische Alkalose

**Definition:** pH > 7,45 + primär ↓pCO₂
**Ursachen:**
- Hyperventilation (Angst, Fieber, Höhenaufenthalt, Lungenembolie)
- Akut: Tetanie möglich (↓[Ca²⁺] ionisiert durch pH-Anstieg)

**Renale Kompensation:** ↓HCO₃⁻-Reabsorption → pH sinkt

## Kompensationsmechanismen

| Störung | Primäre Änderung | Kompensation |
|---|---|---|
| Met. Azidose | ↓HCO₃⁻ | ↓pCO₂ (Hyperventilation) |
| Met. Alkalose | ↑HCO₃⁻ | ↑pCO₂ (Hypoventilation) |
| Resp. Azidose | ↑pCO₂ | ↑HCO₃⁻ (Niere) |
| Resp. Alkalose | ↓pCO₂ | ↓HCO₃⁻ (Niere) |`,
      lernziele: [
        "Die vier Säure-Base-Störungen (metabolische/respiratorische Azidose/Alkalose) definieren und häufige Ursachen nennen",
        "Primäre Störung und Kompensationsmechanismus für jede Störung beschreiben",
        "Blutgaswerte (pH, pCO₂, HCO₃⁻) zur Identifikation von Säure-Base-Störungen interpretieren",
      ],
      sections: [
        {
          heading: "Diabetische Ketoazidose als Fallbeispiel",
          text: "Bei absolutem Insulinmangel (Diabetes mellitus Typ 1) kommt es zu unkontrolliertem Fettabbau und Ketonkörperbildung (Acetoacetat, β-Hydroxybutyrat — beide Säuren). Die Akkumulation dieser Ketonkörper verbraucht HCO₃⁻ (Pufferung) → [HCO₃⁻] sinkt → pH sinkt (metabolische Azidose). Typische BGA: pH < 7,3, [HCO₃⁻] < 15 mEq/L, pCO₂ erniedrigt (respiratorische Kompensation durch Kussmaul-Atmung). Der Anionenlücken-Wert (AG = [Na⁺] − ([Cl⁻] + [HCO₃⁻])) ist erhöht (AG > 12 mEq/L = Anionenlücken-Azidose). Therapie: Insulin, Flüssigkeit, Elektrolyte.",
          merksatz: "DKA: ↑Ketone → ↓HCO₃⁻ → met. Azidose + Kussmaul-Atmung",
        },
        {
          heading: "Respiratorische Alkalose durch Hyperventilation",
          text: "Bei Hyperventilation (Angst, Schmerz, Fieber, Höhenaufenthalt) wird mehr CO₂ abgeatmet als produziert wird → pCO₂ sinkt → H₂CO₃ sinkt → HCO₃⁻/H₂CO₃-Quotient steigt → pH steigt (respiratorische Alkalose). Klinisch: Parästhesien, Tetanie (↓ionisiertes Ca²⁺ durch pH-Anstieg: Ca²⁺-Proteinbindung steigt → freies Ca²⁺ sinkt). Therapie akut: In eine Tüte atmen (rückatmen von CO₂). Renale Kompensation (bei längerem Verlauf): ↓HCO₃⁻-Reabsorption → pH normalisiert sich. Wichtig: Bei Höhenkrankheit führt chronische Hyperventilation zu teilweise kompensierter respiratorischer Alkalose.",
          merksatz: "Hyperventilation → ↓pCO₂ → resp. Alkalose → Tetanie",
        },
      ],
      merksätze: [
        "Met. Azidose: ↓HCO₃⁻ (Ketoazidose, Laktatazidose, Diarrhö)",
        "Resp. Azidose: ↑pCO₂ (Hypoventilation, COPD)",
        "Kompensation immer entgegengesetzt zur primären Störung",
      ],
      klinischerBezug: "Blutgasanalyse-Interpretation (4-Schritte): 1. pH: Azidose oder Alkalose? 2. pCO₂: respiratorische Ursache? 3. HCO₃⁻: metabolische Ursache? 4. Kompensation vorhanden? Beispiel: pH 7,28, pCO₂ normal, HCO₃⁻ 14 → metabolische Azidose ohne respiratorische Kompensation (akut oder Atemversagen).",
      altfrage: {
        question: "Was ist die respiratorische Kompensation bei metabolischer Azidose?",
        answer: "Bei metabolischer Azidose (↓pH, ↓HCO₃⁻) wird die Atmung durch Chemorezeptoren stimuliert → Hyperventilation → mehr CO₂ wird abgeatmet → pCO₂ sinkt → H₂CO₃ sinkt → pH steigt (partielle Kompensation). Klinisch sichtbar als Kussmaul-Atmung (tiefe, schnelle Atemzüge). Eine vollständige Kompensation durch die Atmung allein ist nicht möglich.",
      },
      selfTest: [
        {
          question: "Ein Patient hat pH 7,28, pCO₂ 65 mmHg (erhöht), HCO₃⁻ 26 mEq/L (normal). Was liegt vor?",
          options: [
            "Metabolische Azidose",
            "Metabolische Alkalose",
            "Respiratorische Azidose (akut)",
            "Respiratorische Alkalose",
            "Gemischte Störung",
          ],
          correctIndex: 2,
          explanation: "pH < 7,35 = Azidose. pCO₂ erhöht = respiratorische Ursache. HCO₃⁻ noch normal (noch keine renale Kompensation) → akute respiratorische Azidose (z.B. akutes Atemversagen, Opioid-Überdosis). Bei chronischer respiratorischer Azidose wäre HCO₃⁻ kompensatorisch erhöht.",
          hints: [
            "Schritt 1: pH sauer oder basisch?",
            "Schritt 2: pCO₂ oder HCO₃⁻ primär verändert?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum entsteht Tetanie bei Hyperventilation?",
          options: [
            "Weil CO₂ neurotoxisch ist",
            "Weil pH-Anstieg die Proteinbindung von Ca²⁺ erhöht und ionisiertes Ca²⁺ sinkt",
            "Weil O₂-Überversorgung Muskeln stimuliert",
            "Weil K⁺ aus Zellen austritt",
            "Weil Hyperventilation Hypoxie verursacht",
          ],
          correctIndex: 1,
          explanation: "Hyperventilation → ↓pCO₂ → ↑pH (respiratorische Alkalose). Bei höherem pH bindet mehr Ca²⁺ an Plasmaproteine (Albumin) → [Ca²⁺] ionisiert sinkt (Hypokalzämie). Ionisiertes Ca²⁺ ist für die Stabilisierung von Nervenmembranen notwendig; Mangel → erhöhte neuronale Erregbarkeit → Tetanie (Muskelkrämpfe, Kribbeln, Pfötchenstellung).",
          hints: [
            "Respiratorische Alkalose erhöht den pH",
            "Wie verändert pH-Anstieg die Calcium-Proteinbindung?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Störung entsteht bei anhaltendem Erbrechen?",
          options: [
            "Metabolische Azidose (Verlust von HCO₃⁻)",
            "Respiratorische Azidose (Hypoventilation)",
            "Metabolische Alkalose (Verlust von HCl)",
            "Respiratorische Alkalose (Hyperventilation)",
            "Keine Säure-Base-Störung",
          ],
          correctIndex: 2,
          explanation: "Beim Erbrechen geht Magensäure (HCl) verloren. Der Magen produziert laufend HCl aus CO₂ + H₂O → H₂CO₃ → H⁺ (in Magen) + HCO₃⁻ (ins Blut). Wenn HCl durch Erbrechen verloren geht, akkumuliert HCO₃⁻ im Blut → [HCO₃⁻] steigt → pH steigt = metabolische Alkalose. Kompensation: Hypoventilation → ↑pCO₂.",
          hints: [
            "Was enthält Magensaft hauptsächlich?",
            "Verlust von HCl → was passiert mit HCO₃⁻ im Blut?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Kompensation tritt bei chronischer respiratorischer Azidose auf?",
          options: [
            "Hyperventilation (↓pCO₂)",
            "Niere erhöht HCO₃⁻-Reabsorption (↑HCO₃⁻)",
            "Niere scheidet HCO₃⁻ aus (↓HCO₃⁻)",
            "Leber produziert mehr Pufferproteine",
            "Milz gibt Erythrozyten frei",
          ],
          correctIndex: 1,
          explanation: "Bei chronischer respiratorischer Azidose (z.B. COPD) ist pCO₂ dauerhaft erhöht → pH dauerhaft erniedrigt. Die Niere kompensiert durch erhöhte H⁺-Ausscheidung (als NH₄⁺ und titrierbare Säure) und vermehrte HCO₃⁻-Reabsorption → [HCO₃⁻] steigt → pH-Normalisierung (partielle Kompensation). BGA bei kompensierter COPD: pH fast normal, pCO₂ ↑, HCO₃⁻ ↑.",
          hints: [
            "Renale Kompensation bei Azidose: Mehr oder weniger HCO₃⁻?",
            "Niere reguliert HCO₃⁻ über Tage bis Wochen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Kussmaul-Atmung und bei welchem Zustand tritt sie auf?",
          options: [
            "Flache, schnelle Atmung bei Herzversagen",
            "Tiefe, schnelle Atemzüge zur Kompensation einer metabolischen Azidose",
            "Langsame Atmung bei Opioid-Vergiftung",
            "Periodische Atemunterbrechungen bei Schlaf-Apnoe",
            "Schnappatmung bei Hirntod",
          ],
          correctIndex: 1,
          explanation: "Kussmaul-Atmung ist eine tiefe, regelmäßige, schnelle Atmung als respiratorische Kompensation einer metabolischen Azidose. Sie tritt klassisch bei diabetischer Ketoazidose auf: Durch tiefes Ausatmen wird mehr CO₂ abgeatmet → pCO₂ sinkt → pH steigt (partiell). Benannt nach Adolf Kussmaul (1874). Der süßliche Acetongeruch der Atemluft ist ein weiteres Kennzeichen der Ketoazidose.",
          hints: [
            "Metabolische Azidose wird respiratorisch kompensiert",
            "Durch tiefes Atmen wird mehr CO₂ abgeatmet",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
