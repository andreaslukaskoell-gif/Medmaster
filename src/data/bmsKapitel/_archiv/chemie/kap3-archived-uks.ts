import type { Kapitel } from "../../types";

/**
 * Archived UKs from kap3-stoechiometrie-loesungen.ts
 * - ch-3s-04: "Kolligative Eigenschaften & Osmose" — NOT in Chemie Stichwortliste
 */
export const archivedChemStoechUKs: Kapitel["unterkapitel"] = [
  // === UK 4: Kolligative Eigenschaften & Osmose ===
  {
    id: "ch-3s-04",
    title: "Kolligative Eigenschaften & Osmose",
    stichworte: [
      "Kolligative Eigenschaften",
      "Siedepunktserhöhung",
      "Gefrierpunktserniedrigung",
      "Osmotischer Druck",
      "Van't Hoff",
      "Osmolarität",
      "Osmolalität",
      "Isoton",
      "Hyperton",
      "Hypoton",
      "Hämolyse",
      "Dialyse",
    ],
    content: `## Kolligative Eigenschaften — Überblick

**Kolligative Eigenschaften** (lat. colligare = zusammenfassen) hängen nur von der **Anzahl gelöster Teilchen** ab, nicht von deren Art. Sie betreffen das Lösungsmittel:

1. **Dampfdruckerniedrigung** (Raoult'sches Gesetz): p_LM = x_LM × p°_LM — gelöste Teilchen besetzen Plätze an der Flüssigkeitsoberfläche, sodass weniger Lösungsmittelmoleküle verdampfen können und der Dampfdruck sinkt.
2. **Siedepunktserhöhung:** ΔT_b = K_b × b × i
3. **Gefrierpunktserniedrigung:** ΔT_f = K_f × b × i
4. **Osmotischer Druck:** π = i × c × R × T

Dabei ist **i = van't Hoff-Faktor**: Anzahl der Teilchen, in die ein Stoff in Lösung zerfällt.
- Glucose (Nichtelektrolyt): i = 1
- NaCl → Na⁺ + Cl⁻: i = 2
- CaCl₂ → Ca²⁺ + 2 Cl⁻: i = 3

> **Merke:** Kolligative Eigenschaften hängen NUR von der Teilchenzahl ab (nicht von Masse oder Art). Elektrolyte haben i > 1 (Dissoziation!). 1 mol NaCl liefert 2 mol Teilchen → doppelter Effekt wie 1 mol Glucose.

---

## Siedepunktserhöhung und Gefrierpunktserniedrigung

### Siedepunktserhöhung ΔT_b

Gelöste Teilchen senken den Dampfdruck des Lösungsmittels (Raoult). Daher muss stärker erhitzt werden, bis der Dampfdruck den Atmosphärendruck erreicht → **Siedepunkt steigt**.

**Raoult quantitativ:** p_LM = x_LM × p°_LM. Beispiel: Löst man 1 mol Glucose in 9 mol Wasser, ist x_Wasser = 9/10 = 0,9 → der Dampfdruck sinkt auf 90 % des reinen Wasserdampfdrucks. In der Praxis reicht für den MedAT die Faustregel: Mehr gelöste Teilchen → niedrigerer Dampfdruck → höherer Siedepunkt.

**ΔT_b = K_b × b × i**

- K_b = ebullioskopische Konstante (Siedepunkts-Konstante) [°C·kg/mol]; für Wasser: K_b = 0,512 °C·kg/mol
- b = Molalität [mol/kg Lösungsmittel]
- i = van't Hoff-Faktor

### Gefrierpunktserniedrigung ΔT_f

Gelöste Teilchen stören die Kristallbildung → **Gefrierpunkt sinkt**.

**ΔT_f = K_f × b × i**

- K_f = kryoskopische Konstante (Gefrierpunkts-Konstante); für Wasser: K_f = 1,86 °C·kg/mol

### Rechenbeispiel: Streusalz

**Aufgabe:** Wie stark senkt 1 mol NaCl in 1 kg Wasser den Gefrierpunkt?

**Lösung:** ΔT_f = K_f × b × i = 1,86 × 1 × 2 = **3,72 °C** → Gefrierpunkt sinkt auf −3,72 °C.

Deshalb wird NaCl als Streusalz verwendet! CaCl₂ (i = 3) ist noch wirksamer: ΔT_f = 1,86 × 1 × 3 = 5,58 °C.

> **Merke:** K_f(Wasser) = 1,86 °C·kg/mol (≈ 2); K_b(Wasser) = 0,512 °C·kg/mol (≈ 0,5). Gefrierpunktserniedrigung ist ca. 3,6× stärker als Siedepunktserhöhung — daher für Messzwecke bevorzugt (Kryoskopie, Gefrierpunktsmessung).


---

## Osmotischer Druck


### Osmose

**Osmose** = Nettobewegung von Lösungsmittelmolekülen durch eine **semipermeable Membran** (durchlässig für Wasser, undurchlässig für gelöste Stoffe) — von der **niedrig konzentrierten** zur **hoch konzentrierten** Seite.

### Van't Hoff-Gleichung

Der **osmotische Druck** π ist der Druck, der nötig ist, um die Osmose gerade zu verhindern:

**π = i × c × R × T**

- i = van't Hoff-Faktor
- c = Molarität [mol/L]
- R = 8,314 J/(mol·K) = 0,08314 L·bar/(mol·K)
- T = Temperatur [K]

### Rechenbeispiel: Osmotischer Druck von NaCl 0,9 %

**Aufgabe:** π für NaCl 0,9 % (c ≈ 0,154 mol/L) bei 37 °C (310 K)?

**Lösung:** π = i × c × R × T = 2 × 0,154 × 0,08314 × 310 = **7,94 bar ≈ 8 bar**

Das entspricht dem osmotischen Druck des Blutplasmas — deshalb ist NaCl 0,9 % **isoton**!

> **Merke:** π = i·c·R·T. Blutplasma: π ≈ 7,5–8 bar bei 37 °C. NaCl 0,9 % (i=2, c=0,154) und Glucose 5 % (i=1, c=0,278) erzeugen jeweils ≈ 7,5–8 bar → isoton.

---

## Osmolarität und Osmolalität

- **Osmolarität** = Summe aller osmotisch wirksamen Teilchen pro Liter Lösung [mosmol/L]
- **Osmolalität** = Summe aller osmotisch wirksamen Teilchen pro kg Lösungsmittel [mosmol/kg]

Plasma-Osmolalität: **285–295 mosmol/kg** (≈ 2 × [Na⁺] + [Glucose] + [Harnstoff])

Formel (klinisch): **Osmolalität ≈ 2 × Na⁺ [mmol/L] + Glucose [mmol/L] + Harnstoff [mmol/L]**

Der Faktor 2 vor Na⁺ berücksichtigt die begleitenden Anionen (Cl⁻, HCO₃⁻).

> **Merke:** Plasma-Osmolalität ≈ 290 mosmol/kg. Schnellformel: ≈ 2 × Na⁺ + Glucose + Harnstoff (alles in mmol/L). Eine Osmolal-Lücke > 10 mosmol/kg deutet auf ungezählte Osmolyte (Methanol, Ethanol, Ethylenglykol) hin — Vergiftung!

---

## Isoton, Hyperton, Hypoton

| Lösung | Tonus | Zellreaktion | Beispiel |
|--------|-------|-------------|----------|
| **Isoton** | = Plasma (≈ 290 mosmol/kg) | Zelle unverändert | NaCl 0,9 %, Glucose 5 % |
| **Hypoton** | < Plasma | Wasser strömt IN die Zelle → **Schwellung, Hämolyse** | Aqua dest., NaCl 0,45 % |
| **Hyperton** | > Plasma | Wasser strömt AUS der Zelle → **Schrumpfung (Krenation)** | NaCl 3 %, Mannitol 20 % |

**Hämolyse** = Platzen von Erythrozyten in hypotoner Lösung (zu viel Wasser strömt ein). Klinisch gefährlich bei falscher Infusion!

**Krenation** = Schrumpfung von Erythrozyten in hypertoner Lösung. Therapeutisch genutzt: Mannitol 20 % bei Hirnödem (entzieht dem Hirngewebe osmotisch Wasser).

---

## Klinische Anwendungen

### Dialyse

Bei der **Hämodialyse** wird Blut über eine semipermeable Membran mit Dialysat in Kontakt gebracht. Harnstoff und Kreatinin (Abbauprodukt des Muskelstoffwechsels, kleine Moleküle) diffundieren entlang ihres Konzentrationsgefälles ins Dialysat. Plasmaproteine (zu groß) bleiben im Blut. Die Dialysat-Osmolalität wird isoton eingestellt, um unkontrollierte Wasserverschiebungen zu vermeiden.

### Infusionstherapie

- **Volumenersatz:** isotone Lösungen (NaCl 0,9 %, Ringer-Laktat, eine elektrolythaltige Infusionslösung)
- **Hirndrucksenkung:** hypertone Lösungen (Mannitol 20 %, NaCl 3 %)
- **Hypoglykämie:** Glucose 40 % i.v. (stark hyperton → langsam applizieren!)`,
    merksätze: [
      "Kolligative Eigenschaften hängen NUR von der Teilchenzahl ab — nicht von Art oder Masse des gelösten Stoffes.",
      "Van't Hoff-Faktor i: Glucose i=1, NaCl i=2, CaCl₂ i=3. Immer die Dissoziation berücksichtigen!",
      "Osmotischer Druck: π = i·c·R·T. Blutplasma ≈ 7,5–8 bar; NaCl 0,9 % und Glucose 5 % sind isoton.",
      "Hypotone Lösung → Wasser strömt IN die Zelle → Hämolyse. Hypertone Lösung → Wasser strömt HERAUS → Krenation.",
      "Plasma-Osmolalität ≈ 290 mosmol/kg. Schnellformel: 2 × Na⁺ + Glucose + Harnstoff (mmol/L).",
    ],
    klinischerBezug:
      "Kolligative Eigenschaften sind in der klinischen Medizin von zentraler Bedeutung: Infusionstherapie (isotone vs. hypertone Lösungen), Dialyse (osmotischer Ausgleich), Mannitol-Therapie bei erhöhtem Hirndruck (osmotische Diurese), Kryoskopie zur Bestimmung der Urin-Osmolalität und Beurteilung der Nierenfunktion. Die osmolale Lücke (gemessen minus berechnet) ist ein Notfall-Screeningwert für Vergiftungen mit Methanol oder Ethylenglykol.",

    altfrage: {
      question:
        "Welche Aussage zu kolligativen Eigenschaften ist FALSCH?\n\nA) Der osmotische Druck ist proportional zur Teilchenkonzentration des gelösten Stoffes.\nB) NaCl hat in Wasser einen Van't-Hoff-Faktor von i = 2, weil es in Na⁺ und Cl⁻ dissoziiert.\nC) Kolligative Eigenschaften hängen von der Art der gelösten Teilchen ab, nicht von ihrer Anzahl.\nD) Durch Zugabe eines gelösten Stoffes wird der Gefrierpunkt des Lösungsmittels erniedrigt.\nE) Physiologische Kochsalzlösung (0,9 % NaCl) ist isoton zum Blutplasma (~290 mOsmol/L).",
      answer:
        "Richtige Antwort: C) — diese Aussage ist falsch.\n\nKolligative Eigenschaften (Siedepunktserhöhung, Gefrierpunktserniedrigung, osmotischer Druck, Dampfdruckerniedrigung) hängen ausschließlich von der Anzahl der gelösten Teilchen ab, NICHT von deren Art. Option C kehrt diesen Zusammenhang um und ist daher falsch. NaCl (i = 2) erzeugt doppelt so viele Teilchen wie Glucose (i = 1) bei gleicher molarer Konzentration, weshalb 0,9 % NaCl und 5 % Glucose annähernd die gleiche Osmolarität haben.",
    },
    selfTest: [
      {
        question: "Was passiert mit Erythrozyten, wenn sie in destilliertes Wasser gegeben werden?",
        options: [
          "A) Sie schrumpfen (Krenation)",
          "D) Sie aggregieren zu Rouleaux",
          "C) Sie bleiben unverändert",
          "B) Sie platzen (Hämolyse)",
          "E) Sie werden steifer, aber behalten ihre Form",
        ],
        correctIndex: 3,
        explanation:
          "Destilliertes Wasser ist stark hypoton (0 mosmol/L vs. ≈ 290 mosmol/L im Erythrozyten). Wasser strömt osmotisch IN die Zelle → Schwellung → Hämolyse (Platzen). Krenation (Schrumpfung) tritt nur in hypertonen Lösungen auf.",
        hints: [
          "Destilliertes Wasser hat 0 mosmol/L — ist es isoton, hypoton oder hyperton im Vergleich zur Zelle?",
          "Wasser bewegt sich von niedriger zu hoher Konzentration gelöster Teilchen → in die Zelle hinein.",
        ],
        difficulty: 1,
        tags: ["osmose", "hämolyse", "hypoton"],
      },
      {
        question:
          "Welchen van't Hoff-Faktor i hat CaCl₂ in wässriger Lösung (vollständige Dissoziation)?",
        options: ["A) i = 1", "B) i = 2", "E) i = 0,5", "D) i = 4", "C) i = 3"],
        correctIndex: 4,
        explanation:
          "CaCl₂ → Ca²⁺ + 2 Cl⁻: 1 Formeleinheit zerfällt in 3 Teilchen → i = 3. NaCl: i = 2 (Na⁺ + Cl⁻). Glucose: i = 1 (kein Zerfall). Der van't Hoff-Faktor i multipliziert den kolligativen Effekt.",
        hints: [
          "In wie viele Ionen zerfällt CaCl₂ vollständig?",
          "Ca²⁺ zählt als 1 Teilchen, jedes Cl⁻ als 1 Teilchen.",
        ],
        difficulty: 1,
        tags: ["vant-hoff-faktor", "dissoziation", "cacl2"],
      },
      {
        question:
          "Berechne die Gefrierpunktserniedrigung von 0,5 mol NaCl in 1 kg Wasser (K_f = 1,86 °C·kg/mol, i = 2).",
        options: ["B) 1,86 °C", "A) 0,93 °C", "C) 3,72 °C", "D) 0,512 °C", "E) 5,58 °C"],
        correctIndex: 0,
        explanation:
          "ΔT_f = K_f × b × i = 1,86 × 0,5 × 2 = 1,86 °C. Der Gefrierpunkt sinkt auf −1,86 °C. Ohne i (Glucose, i=1): ΔT_f wäre nur 0,93 °C — NaCl hat den doppelten Effekt wegen Dissoziation.",
        hints: [
          "ΔT_f = K_f × b × i. Setze alle Werte ein.",
          "Vergiss den van't Hoff-Faktor i = 2 für NaCl nicht!",
        ],
        difficulty: 2,
        tags: ["gefrierpunktserniedrigung", "rechnen", "nacl"],
      },
      {
        question:
          "Wie hoch ist der osmotische Druck einer 0,1 mol/L Glucose-Lösung bei 37 °C (310 K)? (R = 0,08314 L·bar/(mol·K))",
        options: ["B) 5,15 bar", "A) 2,58 bar", "C) 1,29 bar", "D) 0,258 bar", "E) 25,8 bar"],
        correctIndex: 1,
        explanation:
          "π = i·c·R·T = 1 × 0,1 × 0,08314 × 310 = 2,577 ≈ 2,58 bar. Glucose ist ein Nichtelektrolyt (i = 1). Wäre es NaCl (i = 2), wäre π doppelt so groß (5,15 bar).",
        hints: [
          "Glucose dissoziiert nicht → i = 1. Setze in π = i·c·R·T ein.",
          "π = 1 × 0,1 × 0,08314 × 310 = ?",
        ],
        difficulty: 2,
        tags: ["osmotischer-druck", "vant-hoff", "rechnen"],
      },
      {
        question: "Welche Aussage zu kolligativen Eigenschaften ist FALSCH?",
        options: [
          "A) Sie hängen nur von der Teilchenanzahl ab, nicht von der Art des gelösten Stoffes.",
          "B) 1 mol NaCl in Wasser erniedrigt den Gefrierpunkt stärker als 1 mol Glucose.",
          "C) Die Siedepunktserhöhung von Wasser durch gelöste Stoffe ist größer als die Gefrierpunktserniedrigung.",
          "D) Osmotischer Druck kann durch π = i·c·R·T berechnet werden.",
          "E) Mannitol wird klinisch als hyperosmolares Therapeutikum bei Hirnödem eingesetzt.",
        ],
        correctIndex: 2,
        explanation:
          "C ist FALSCH: Für Wasser ist K_f = 1,86 °C·kg/mol GRÖSSER als K_b = 0,512 °C·kg/mol. Die Gefrierpunktserniedrigung ist also ca. 3,6× stärker als die Siedepunktserhöhung — nicht umgekehrt! Alle anderen Aussagen sind korrekt.",
        hints: [
          "Vergleiche K_f und K_b für Wasser: Welche Konstante ist größer?",
          "K_f = 1,86 vs. K_b = 0,512. Welcher Effekt ist also stärker?",
        ],
        difficulty: 2,
        tags: ["kolligativ", "falsch-aussage", "siedepunkt-gefrierpunkt"],
      },
    ],
  },
];
