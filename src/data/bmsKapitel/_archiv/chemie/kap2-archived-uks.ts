import type { Kapitel } from "../../types";

/**
 * Archived UKs from kap2-materie-und-zustaende.ts
 * - ch-3-02: "Dalton's Partialdruck-Gesetz" — NOT in Chemie Stichwortliste
 * - ch-3-03: "Diffusion und Effusion (Graham'sches Gesetz)" — NOT in Chemie Stichwortliste
 */
export const archivedChemMaterieUKs: Kapitel["unterkapitel"] = [
  {
    id: "ch-3-02",
    title: "Dalton's Partialdruck-Gesetz",
    stichworte: [
      "Partialdruck",
      "Dalton",
      "Molenbruch",
      "Gasgemisch",
      "Alveolarer Gasaustausch",
      "Henry-Gesetz",
      "Gaslöslichkeit",
      "Wasserdampfdruck",
      "Sauerstofftherapie",
      "Tauchmedizin",
      "Heliox",
    ],
    content: `## Das Daltonsche Partialdruck-Gesetz

Das Daltonsche Gesetz (John Dalton, 1801) beschreibt das Druckverhalten von Gasgemischen:

**Der Gesamtdruck eines Gasgemisches ist gleich der Summe der Partialdrucke aller Komponenten:**

p_gesamt = p1 + p2 + p3 + ... = Summe pi

Dabei ist der **Partialdruck** pi derjenige Druck, den jede Gaskomponente allein ausüben würde, wenn sie das gesamte Volumen des Behälters ausfüllte:

pi = ni * R * T / V = xi * p_gesamt

**xi = Molenbruch** der Komponente i: xi = ni / n_gesamt (dimensionslos, zwischen 0 und 1, Summe = 1).


## Physikalische Begründung

Das Daltonsche Gesetz gilt exakt für ideale Gase, da ideale Gasteilchen keine Wechselwirkungen haben. Jede Gassorte bewegt sich völlig unabhängig von den anderen und trägt unabhängig zum Gesamtdruck bei. Für reale Gase gilt es nur näherungsweise.

**Wichtig:** Bei feuchter Luft muss der Wasserdampfdruck berücksichtigt werden! Bei 37 °C (Körpertemperatur) beträgt p(H2O) ungefähr 6,27 kPa (47 mmHg).


## Alveolarer Gasaustausch

In der Atemphysiologie sind Partialdrucke zentral. Die **Alveolarluft** (Luft in den Lungenbläschen) bei 37 °C und 101,325 kPa (nach Wasserdampfsättigung):

- p(O2)_alveolar ungefähr 13,3 kPa (100 mmHg)
- p(CO2)_alveolar ungefähr 5,3 kPa (40 mmHg)
- p(N2) ungefähr 76,4 kPa
- p(H2O) = 6,27 kPa (37 °C, gesättigt)

O2-Partialdruck im venösen Blut ungefähr 5,3 kPa (40 mmHg) -> O2 diffundiert Alveole -> Blut (Druckgradient). CO2 im venösen Blut ungefähr 6,1 kPa (46 mmHg) > 5,3 kPa alveolar -> CO2 diffundiert Blut -> Alveole.

## Berechnung mit Molenbrüchen

**Beispiel:** Gasgemisch: 2 mol N2, 1 mol O2, 0,5 mol CO2. Gesamtdruck 3 bar.
- n_gesamt = 3,5 mol
- x(N2) = 2/3,5 = 0,571 -> p(N2) = 0,571 * 3 = 1,714 bar
- x(O2) = 1/3,5 = 0,286 -> p(O2) = 0,286 * 3 = 0,857 bar
- x(CO2) = 0,5/3,5 = 0,143 -> p(CO2) = 0,143 * 3 = 0,429 bar
- Kontrolle: 1,714 + 0,857 + 0,429 = 3,000 bar

## Henry-Gesetz und Gaslöslichkeit

Das Henry-Gesetz ergänzt das Daltonsche Gesetz für Gaslöslichkeit in Flüssigkeiten:

**c = kH * p**

wobei kH die substanzspezifische Henry-Konstante ist. Bei erhöhtem O2-Partialdruck (Sauerstofftherapie) löst sich mehr O2 physikalisch im Plasma. Bei Kohlensäuregetränken wird CO2 unter Druck gelöst; beim Öffnen sinkt p -> CO2 perlt aus.

## Gasgemische in der Medizin

- **Raumluft:** O2 21 % -> p(O2) ungefähr 21 kPa
- **Sauerstofftherapie:** F_IO2 (inspiratorische O2-Fraktion) = 0,4-1,0 -> deutlich erhöhte p(O2) -> mehr physikalisch gelöstes O2
- **Lachgas/O2 (Entonox):** 50:50 N2O/O2 als Analgetikum
- **Heliox (He/O2):** Bei obstruktiver Atemwegserkrankung -- He (leichter als N2) senkt den Gasströmungswiderstand
- **Tauchgas:** Komprimierte Luft -> erhöhte Partialdrucke aller Gase -> N2-Narkose (Tiefenrausch) ab p(N2) > 3-4 bar

## Rechenbeispiel: Alveolärer O2-Partialdruck

**Aufgabe:** Ein Patient atmet Raumluft (21 % O2) bei Normaldruck (101,3 kPa). Wie hoch ist der alveoläre O2-Partialdruck unter Berücksichtigung des Wasserdampfdrucks (6,27 kPa bei 37 °C) und des CO2-Partialdrucks (5,3 kPa)?

**Lösung:** Vereinfachte Alveolargasgleichung:
- p(O2)_alv = F_IO2 * (p_atm - p_H2O) - p(CO2)/RQ
- Mit RQ (respiratorischer Quotient) ungefähr 0,8:
- p(O2)_alv = 0,21 * (101,3 - 6,27) - 5,3/0,8
- p(O2)_alv = 0,21 * 95,03 - 6,625 = 19,96 - 6,63 = **13,3 kPa** (ungefähr 100 mmHg)

> **Merke:** Die vollständige Alveolargasgleichung berücksichtigt Wasserdampf UND CO2-Produktion. Der alveoläre p(O2) von 13,3 kPa ist deutlich niedriger als der inspiratorische von 21 kPa -- das wird in der MedAT-Prüfung gerne abgefragt!

## Sauerstofftoxizität und Hyperoxie

Zu hohe O2-Partialdrucke sind schädlich! Bei F_IO2 > 0,6 über längere Zeit droht der **Lorrain-Smith-Effekt**: Pulmonale O2-Toxizität mit Entzündung der Alveolarepithelien und Surfactant-Schädigung (oberflächenaktive Substanz der Alveolen), die ein ARDS-ähnliches Bild verursachen kann. Auch zerebrale Toxizität (Krampfanfälle) und Netzhautschäden bei Frühgeborenen sind bekannt.

> **Merke:** Sauerstoff ist ein Medikament mit therapeutischer Breite! Zu wenig (Hypoxie) ist lebensbedrohlich, zu viel (Hyperoxie) schädigt vor allem die Lunge (Lorrain-Smith-Effekt). Zielwert: p(O2)_art = 8-13 kPa (60-100 mmHg).

## Umrechnung kPa und mmHg

In der Klinik werden Blutgaswerte oft in mmHg angegeben, in der Physiologie häufig in kPa:
- **1 kPa = 7,5 mmHg** (Faktor 7,5)
- **1 mmHg = 0,1333 kPa** (Faktor 0,133)
- Schnelle Umrechnung: kPa * 7,5 = mmHg; mmHg / 7,5 = kPa

> **Merke:** 1 kPa = 7,5 mmHg -- klinische Blutgaswerte kommen oft in mmHg (pO2 > 80 mmHg = > 10,7 kPa).`,

    lernziele: [
      "Das Daltonsche Partialdruck-Gesetz formulieren und Partialdrücke aus Molenbrüchen berechnen.",
      "Die atmosphärische Zusammensetzung (N₂, O₂, CO₂, H₂O) in Partialdrücken angeben und ihre Bedeutung in der Atemphysiologie erklären.",
      "Das Henry-Gesetz als Ergänzung des Daltonschen Gesetzes für Gaslöslichkeit beschreiben.",
      "Klinische Anwendungen (Sauerstofftherapie, Tauchen, Anästhesie) auf Basis von Partialdrücken erläutern.",
    ],
    sections: [
      {
        heading: "Partialdruck und Molenbruch",
        text: "Der Partialdruck pᵢ ist der Druck, den eine Gaskomponente allein im Gesamtvolumen ausüben würde. Er ist direkt proportional zum Molenbruch: pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt. Da alle Molenbrüche sich zu 1 addieren, addieren sich alle Partialdrücke zum Gesamtdruck. Diese Beziehung gilt exakt für ideale Gase (keine Kreuzwechselwirkungen) und näherungsweise für reale Gase bei moderatem Druck. Bei feuchter Luft muss der Sättigungsdampfdruck des Wassers berücksichtigt werden: p(trocken) = p_gesamt − p(H₂O).",
        merksatz:
          "p_gesamt = Σ pᵢ = Σ xᵢ · p_gesamt: Jede Gaskomponente trägt mit ihrem Molenbruch zum Gesamtdruck bei.",
      },
      {
        heading: "Alveolarer Gasaustausch und Diffusionsgradienten",
        text: "O₂ diffundiert aus der Alveole (p(O₂) ≈ 13,3 kPa) ins venöse Blut (p(O₂) ≈ 5,3 kPa) – immer von höherem zu niedrigerem Partialdruck (Fick'sches Diffusionsgesetz). CO₂ diffundiert in Gegenrichtung: venöses Blut (6,1 kPa) → Alveole (5,3 kPa). Diese Gradienten werden durch die alveolo-kapilläre Membran ermöglicht, die nur 0,3–0,5 μm dick ist. Bei Lungenödem oder Fibrose verdickt sich diese Membran – Gasaustausch gestört, O₂-Sättigung sinkt. Sauerstofftherapie (hohe F_IO₂) erhöht p(O₂) alveolär und treibt trotz verminderter Diffusionskapazität mehr O₂ ins Blut.",
        merksatz:
          "Gase diffundieren immer von hohem zu niedrigem Partialdruck – der Gradient ist die Triebkraft des Gasaustauschs.",
      },
      {
        heading: "Henry-Gesetz und medizinische Anwendungen",
        text: "Das Henry-Gesetz c = k_H · p beschreibt die physikalische Löslichkeit von Gasen in Flüssigkeiten: Bei höherem Partialdruck löst sich mehr Gas. Anwendungen: (1) Taucherkrankheit: Hoher N₂-Partialdruck unter Wasser → viel N₂ im Blut gelöst; bei schnellem Druckabfall perlt N₂ aus (wie Sekt beim Öffnen) → Gasblasen in Gefäßen und Gewebe. (2) Hyperbare Sauerstofftherapie: 100 % O₂ bei 2–3 bar → physikalisch gelöstes O₂ im Plasma stark erhöht → Behandlung von CO-Vergiftung, Gasbrand, Wundheilungsstörungen. (3) CO₂ in Sprudel: Unter Druck gelöst, entweicht beim Öffnen.",
        merksatz:
          "Henry: c = k_H · p. Mehr Druck → mehr Gas gelöst. Plötzlicher Druckabfall → Gasblasenbildung (Taucherunfall).",
      },
      {
        heading: "Partialdrücke in der Atmosphäre",
        text: "Trockene Luft (bei 1 atm = 101,325 kPa) enthält folgende Gase mit ihren Molenbrüchen und Partialdrücken.",
        merksatz:
          "Luft: 78 % N₂ (≈79 kPa), 21 % O₂ (≈21 kPa), 1 % Ar, 0,04 % CO₂ – bei 101,3 kPa Normaldruck.",
        table: {
          headers: ["Gas", "Molenbruch", "Partialdruck"],
          rows: [
            ["N₂", "0,7808", "79,12 kPa"],
            ["O₂", "0,2095", "21,22 kPa"],
            ["Ar", "0,0093", "0,94 kPa"],
            ["CO₂", "0,0004", "0,04 kPa"],
          ],
        },
      },
    ],
    merksätze: [
      "Daltonsches Gesetz: p_gesamt = p₁ + p₂ + ... = Σ pᵢ (Summe aller Partialdrücke).",
      "Partialdruck: pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt der Molenbruch ist.",
      "Alveolarer O₂-Partialdruck: ≈13,3 kPa (100 mmHg); venöses Blut: ≈5,3 kPa (40 mmHg).",
      "O₂ diffundiert Alveole → Blut; CO₂ diffundiert Blut → Alveole: immer von höherem zu niedrigerem Partialdruck.",
      "Wasserdampf bei 37 °C: p(H₂O) = 6,27 kPa (47 mmHg) – bei Körpertemperatur immer berücksichtigen!",
      "Henry-Gesetz: c = k_H · p. Gaslöslichkeit proportional zum Partialdruck über der Flüssigkeit.",
      "Taucherkrankheit: N₂ löst sich unter Druck im Blut; schneller Druckabfall → Blasenbildung (Henry + Boyle).",
      "Heliox (He/O₂): Helium (4 g/mol) senkt Gasdichte → weniger Strömungswiderstand bei Atemwegsobstruktion.",
      "mmHg ↔ kPa: 1 mmHg = 0,1333 kPa; 1 kPa = 7,5 mmHg. Klinisch oft mmHg, wissenschaftlich kPa.",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Erläutern Sie das Daltonsche Partialdruck-Gesetz und seine Bedeutung für den pulmonalen Gasaustausch. Welche Rolle spielt das Henry-Gesetz dabei?",
      answer: `Das Daltonsche Gesetz (1801) besagt: p_gesamt = Σ pᵢ. Der Partialdruck jeder Komponente ist pᵢ = xᵢ · p_gesamt, wobei xᵢ = nᵢ/n_gesamt. Jede Gaskomponente eines idealen Gemisches verhält sich unabhängig von den anderen.

In der Atemphysiologie ist dies fundamental: Atmosphärische Luft enthält bei 101,3 kPa ca. 21,2 kPa O₂ und 0,04 kPa CO₂. In der Alveole, gesättigt mit Wasserdampf bei 37 °C (p(H₂O) = 6,27 kPa), beträgt p(O₂) alveolär ≈ 13,3 kPa und p(CO₂) ≈ 5,3 kPa. Im venösen Blut ist p(O₂) ≈ 5,3 kPa und p(CO₂) ≈ 6,1 kPa. Diese Partialdruckgradienten treiben die Diffusion: O₂ diffundiert Alveole → Blut, CO₂ in entgegengesetzter Richtung.

Das Henry-Gesetz (c = k_H · p) beschreibt die physikalische Löslichkeit: Im Blut sind ca. 98,5 % des O₂ an Hämoglobin gebunden; nur 1,5 % physikalisch gelöst. Bei Sauerstofftherapie (hohe F_IO₂) steigt auch der physikalisch gelöste Anteil – entscheidend bei CO-Vergiftung (hyperbare O₂-Therapie verdrängt CO vom Hämoglobin). Die Taucherkrankheit illustriert beide Gesetze: Erhöhter Gesamtdruck → erhöhter N₂-Partialdruck → mehr N₂ gelöst (Henry). Schneller Druckabfall → N₂ perlt aus → Gasblasen in Gewebe (Boyle). Therapie: hyperbare Rekompression.`,
    },
    klinischerBezug:
      "In der Intensivmedizin wird die F_IO₂ (inspiratorische O₂-Fraktion) gezielt eingestellt: Bei F_IO₂ = 1,0 und 101,3 kPa beträgt p(O₂) alveolär nach H₂O-Abzug ca. 95 kPa – weit über den 13,3 kPa der Raumluft. Die hyperbare Oxygenierung (2–3 bar, 100 % O₂) nutzt das Henry-Gesetz: Physikalisch gelöstes O₂ im Plasma steigt auf > 6 ml/dl (normal: 0,3 ml/dl), sodass Gewebe auch ohne funktionstüchtiges Hämoglobin versorgt werden können – Therapieprinzip bei CO-Vergiftung und Gasbrand.",
    selfTest: [
      {
        question:
          "Ein Gasgemisch enthält 3 mol N₂, 1 mol O₂ und 1 mol CO₂. Der Gesamtdruck beträgt 5 bar. Wie groß ist der Partialdruck von O₂?",
        options: ["B) 0,5 bar", "A) 1,0 bar", "C) 2,0 bar", "D) 1,5 bar", "E) 0,2 bar"],
        correctIndex: 1,
        explanation:
          "n_gesamt = 3 + 1 + 1 = 5 mol. Molenbruch O₂: x(O₂) = 1/5 = 0,2. Partialdruck: p(O₂) = 0,2 × 5 bar = 1,0 bar. Kontrolle: p(N₂) = (3/5) × 5 = 3 bar; p(CO₂) = (1/5) × 5 = 1 bar. Summe: 3 + 1 + 1 = 5 bar ✓. Das Daltonsche Gesetz gilt für ideale Gase exakt: Jede Komponente trägt proportional zu ihrem Molenbruch zum Gesamtdruck bei, unabhängig von den anderen Gasen.",
        hints: [
          "x(O₂) = n(O₂)/n_gesamt = 1/5 = 0,2. Dann: p(O₂) = x(O₂) × p_gesamt.",
          "n_gesamt = Summe aller Molzahlen: 3 + 1 + 1 = 5 mol.",
        ],
        difficulty: 1,
        tags: ["partialdruck", "dalton", "molenbruch"],
      },
      {
        question:
          "Warum muss bei der Berechnung des alveolären O₂-Partialdrucks der Wasserdampfdruck berücksichtigt werden?",
        options: [
          "C) Weil Wasserdampf den N₂-Partialdruck erhöht.",
          "B) Weil Wasser O₂ chemisch bindet und so den Partialdruck senkt.",
          "A) Weil Wasserdampf bei 37 °C einen Partialdruck von ca. 6,27 kPa hat, der den verfügbaren Anteil für O₂ und CO₂ reduziert.",
          "D) Weil Wasserdampf bei 37 °C kondensiert und kein Gas mehr ist.",
          "E) Weil Wasser das Henry-Gesetz ungültig macht.",
        ],
        correctIndex: 2,
        explanation:
          "Bei 37 °C ist eingeatmete Luft in der Lunge vollständig mit Wasserdampf gesättigt. Der Sättigungsdampfdruck beträgt ca. 6,27 kPa (47 mmHg). Nach Dalton: p_gesamt = p(O₂) + p(CO₂) + p(N₂) + p(H₂O). Bei p_gesamt = 101,3 kPa verbleiben für O₂, CO₂ und N₂ zusammen nur 101,3 − 6,27 = 95,0 kPa. Der O₂-Anteil von 21 % trifft dann auf 95,0 kPa (minus CO₂-Anteil) → p(O₂)_alveolär ≈ 13,3 kPa statt der 21,2 kPa der trockenen Außenluft.",
        hints: [
          "Dalton: p_gesamt = Σ pᵢ. H₂O-Dampf belegt bei 37 °C schon 6,27 kPa des Gesamtdrucks.",
          "Sättigungsdampfdruck H₂O bei 37 °C = 6,27 kPa (47 mmHg) – diese Zahl im medizinischen Kontext wichtig.",
        ],
        difficulty: 2,
        tags: ["alveolarer-gasaustausch", "wasserdampfdruck", "partialdruck"],
      },
      {
        question:
          "Ein Taucher taucht auf 40 m Tiefe (Gesamtdruck 5 bar). Wie groß ist der N₂-Partialdruck in der Atemluft (Luft: 78 % N₂)?",
        options: ["D) 2,5 bar", "B) 0,78 bar", "C) 5,0 bar", "A) 3,9 bar", "E) 1,95 bar"],
        correctIndex: 3,
        explanation:
          "p(N₂) = x(N₂) × p_gesamt = 0,78 × 5 bar = 3,9 bar. An der Oberfläche (1 bar): p(N₂) = 0,78 bar. Unter Wasser steigt der N₂-Partialdruck auf das 5-fache! Nach Henry-Gesetz löst sich entsprechend 5× mehr N₂ im Blut. Ab p(N₂) ≈ 3 bar (≈ 30 m mit Luft) tritt Stickstoffnarkose (Tiefenrausch) auf: N₂ wirkt euphorisierend und sedierend, was unter Wasser lebensgefährlich werden kann. Je 10 m Wassertiefe erhöht sich der Druck um ca. 1 bar (Wasserdruck = ρgh ≈ 1000 × 9,81 × 10 = 98.100 Pa ≈ 1 bar).",
        hints: [
          "p(N₂) = 0,78 × p_gesamt. Bei 40 m Tiefe: Gesamtdruck = 1 bar Luft + 4 bar Wasser = 5 bar.",
          "Je 10 m Tiefe ≈ 1 bar Überdruck. Bei 40 m: 1 + 4 = 5 bar gesamt.",
        ],
        difficulty: 2,
        tags: ["partialdruck", "tauchmedizin", "stickstoffnarkose"],
      },
      {
        question: "Welche Aussage zum Henry-Gesetz ist korrekt?",
        options: [
          "E) Das Henry-Gesetz gilt nur für Edelgase.",
          "B) Bei höherer Temperatur löst sich mehr Gas in einer Flüssigkeit.",
          "C) Das Henry-Gesetz beschreibt die Druckverteilung in Gasgemischen.",
          "D) Alle Gase haben dieselbe Henry-Konstante in Wasser.",
          "A) Die Konzentration eines gelösten Gases ist proportional zu seinem Partialdruck über der Lösung.",
        ],
        correctIndex: 4,
        explanation:
          "Henry-Gesetz (William Henry, 1803): c = k_H · p. Die Gaslöslichkeit ist direkt proportional zum Partialdruck. Option B ist falsch: Bei höherer Temperatur sinkt die Gaslöslichkeit in Flüssigkeiten (thermische Bewegung überwindet Solvatation – deshalb entweicht CO₂ aus warmem Sprudel schneller als aus kaltem). Option C beschreibt das Daltonsche Gesetz. Option D ist falsch: k_H variiert stark – CO₂ ist ca. 25× löslicher als O₂ in Wasser (daher transportiert Blut CO₂ viel effizienter als O₂ auf dem physikalischen Weg). Option E ist falsch.",
        hints: [
          "Henry: c = k_H · p. Mehr Partialdruck → mehr gelöstes Gas.",
          "Gaslöslichkeit sinkt mit steigender Temperatur (anders als bei Feststoffen).",
        ],
        difficulty: 2,
        tags: ["henry-gesetz", "gaslöslichkeit", "temperatur"],
      },
      {
        question:
          "Ein Patient erhält F_IO₂ = 0,6 (60 % O₂) bei Atmosphärendruck (101,3 kPa). Wie groß ist p(O₂) näherungsweise (ohne Wasserdampfkorrektur)?",
        options: ["A) 60,8 kPa", "B) 21,0 kPa", "C) 40,0 kPa", "D) 101,3 kPa", "E) 13,3 kPa"],
        correctIndex: 0,
        explanation:
          "p(O₂) = F_IO₂ × p_gesamt = 0,6 × 101,3 kPa = 60,8 kPa. Das ist fast das Dreifache des normalen O₂-Partialdrucks von 21,2 kPa (Raumluft). Klinisch wird F_IO₂ (inspiratorische O₂-Fraktion) angepasst, um den alveolären p(O₂) zu steuern. Bei ARDS wird F_IO₂ auf 0,6–1,0 erhöht. Mit exakter Berechnung unter Berücksichtigung von Wasserdampf (6,27 kPa bei 37 °C): p(O₂) = 0,6 × (101,3 − 6,27) ≈ 57,0 kPa. Klinisches Ziel: arterieller p(O₂) > 10 kPa (> 75 mmHg).",
        hints: [
          "p(O₂) = F_IO₂ × p_gesamt. F_IO₂ = 0,6 bedeutet 60 % O₂-Anteil.",
          "Raumluft: F_IO₂ = 0,21 → p(O₂) ≈ 21 kPa. Bei 0,6 entsprechend knapp dreimal mehr.",
        ],
        difficulty: 2,
        tags: ["sauerstofftherapie", "partialdruck", "fio2"],
      },
      {
        question:
          "Was ist Heliox und welcher physikalische Vorteil macht es bei obstruktiven Atemwegserkrankungen nützlich?",
        options: [
          "B) H₂/O₂-Gemisch: Wasserstoff verbessert den O₂-Transport im Blut.",
          "A) He/O₂-Gemisch: Helium ist leichter als N₂ und reduziert die Gasdichte, was den Atemwiderstand senkt.",
          "C) N₂O/O₂-Gemisch (Lachgas): Wirkt analgetisch und erleichtert das Atmen.",
          "D) CO₂/O₂-Gemisch: CO₂ stimuliert das Atemzentrum und vertieft die Atmung.",
          "E) Ar/O₂-Gemisch: Argon schützt die Atemwege vor Entzündungen.",
        ],
        correctIndex: 1,
        explanation:
          "Heliox ist ein He/O₂-Gemisch (typisch 70:30 oder 80:20). Helium (M = 4 g/mol) ist viel leichter als Stickstoff (M = 28 g/mol) → Heliox hat deutlich geringere Gasdichte als Raumluft. Bei Atemwegsobstruktion dominiert turbulenter Gasfluss, dessen Widerstand mit der Gasdichte skaliert (∝ √ρ). Geringere Dichte → weniger turbulenter Widerstand → geringere Atemarbeit. Anwendung: Asthmaanfall, Krupp, obstruktive Tumoren. Nachteil: Begrenzte O₂-Konzentration (20–30 %). N₂O/O₂ (Entonox) ist ein Analgetikum ohne Dichtevorteil. Das Grahamsches Gesetz gilt für Effusion, aber auch hier ist die leichtere Masse von He ein Vorteil.",
        hints: [
          "He (4 g/mol) ist 7× leichter als N₂ (28 g/mol) → Heliox hat viel geringere Dichte als Luft.",
          "Bei Obstruktion (Asthma, Krupp) dominiert turbulenter Fluss – Heliox reduziert diesen durch geringere Dichte.",
        ],
        difficulty: 3,
        tags: ["heliox", "gasdichte", "atemwegsobstruktion"],
      },
      {
        question: "Was beschreibt der Molenbruch xᵢ einer Komponente in einem Gasgemisch?",
        options: [
          "C) Das Verhältnis des Volumens der Komponente zum Gesamtvolumen bei verschiedenen Drücken.",
          "B) Das Verhältnis der Masse der Komponente zur Gesamtmasse des Gemisches.",
          "A) Das Verhältnis der Molzahl der Komponente zur Gesamtmolzahl: xᵢ = nᵢ / n_gesamt.",
          "D) Die Anzahl der Mole pro Liter Lösung (molare Konzentration).",
          "E) Der Prozentsatz der Moleküle in Masseneinheiten.",
        ],
        correctIndex: 2,
        explanation:
          "Molenbruch xᵢ = nᵢ/n_gesamt ist dimensionslos (0 bis 1). Er gibt an, welcher Anteil aller Gasteilchen auf Komponente i entfällt. Σ xᵢ = 1 (alle Molenbrüche summieren sich zu 1). Für ideale Gase bei konstantem p und T ist Molenbruch = Volumenanteil. Luft: x(N₂) ≈ 0,78, x(O₂) ≈ 0,21, x(Ar) ≈ 0,01. Der Massenanteil ωᵢ = mᵢ/m_gesamt ist eine andere Größe – er berücksichtigt Molmassen und ist für Gase mit verschiedenen M ≠ xᵢ. Direkte Anwendung: pᵢ = xᵢ · p_gesamt (nur mit Molenbruch, nicht mit Massenanteil!).",
        hints: [
          "Molenbruch = nᵢ/n_gesamt (0 bis 1). Nicht mit Massenanteil (ω = mᵢ/m_gesamt) verwechseln!",
          "Σ xᵢ = 1 und Σ pᵢ = p_gesamt: Der Molenbruch verbindet Zusammensetzung direkt mit Partialdruck.",
        ],
        difficulty: 1,
        tags: ["molenbruch", "dalton", "gasgemisch"],
      },
    ],
  },
  {
    id: "ch-3-03",
    title: "Diffusion und Effusion (Graham'sches Gesetz)",
    stichworte: [
      "Diffusion",
      "Effusion",
      "Grahamsches Gesetz",
      "Ficksches Gesetz",
      "Konzentrationsgradient",
      "Mittlere freie Weglänge",
      "Diffusionskoeffizient",
      "Alveolarer Gasaustausch",
      "DLCO-Test",
      "Isotopentrennung",
    ],
    content: `## Grahamsches Gesetz der Diffusion und Effusion

Thomas Graham (1848) entdeckte: **Leichtere Gasmoleküle bewegen sich schneller als schwere.** Der Grund: Bei gleicher Temperatur haben alle Gasmoleküle dieselbe mittlere kinetische Energie (½Mv² = 3/2 k_BT). Wenn die Energie gleich ist, muss ein leichteres Molekül schneller fliegen, um denselben Energiewert zu erreichen. Daraus folgt die quantitative Beziehung:

**r₁/r₂ = √(M₂/M₁)**

Die Diffusionsrate (r) ist umgekehrt proportional zur Wurzel der molaren Masse. Gleiches gilt für **Effusion** (Ausströmen durch eine sehr kleine Öffnung ins Vakuum).

**Beispiele:**
- H₂ (M = 2) vs. O₂ (M = 32): r(H₂)/r(O₂) = √(32/2) = √16 = 4 → H₂ diffundiert 4-mal schneller!
- N₂ (M = 28) vs. CO₂ (M = 44): r(N₂)/r(CO₂) = √(44/28) ≈ 1,25 → N₂ 25 % schneller.

Technisch lässt sich die Effusion auch zur Isotopentrennung nutzen (z. B. ²³⁵UF₆ vs. ²³⁸UF₆), allerdings beträgt der Unterschied pro Stufe nur 0,43 %, weshalb tausende Kaskadenstufen nötig sind.

## Rechenbeispiel: Grahamsches Gesetz

**Aufgabe:** In einem Demonstrationsexperiment werden NH₃-Gas (M = 17 g/mol) und HCl-Gas (M = 36,5 g/mol) gleichzeitig an den gegenüberliegenden Enden eines 1 m langen Glasrohrs freigesetzt. Wo bildet sich der weiße NH₄Cl-Niederschlag?

**Lösung:**
- r(NH₃)/r(HCl) = √(36,5/17) = √2,147 ≈ **1,47**
- NH₃ diffundiert 1,47× schneller als HCl
- Entfernungsverhältnis: d(NH₃)/d(HCl) = 1,47
- d(NH₃) + d(HCl) = 100 cm → 1,47·d(HCl) + d(HCl) = 100 → d(HCl) = 40,5 cm
- Der weiße Ring bildet sich **59,5 cm von der NH₃-Quelle** (40,5 cm von der HCl-Quelle) – also näher an der HCl-Seite

> **Merke:** Das leichtere Gas legt den größeren Weg zurück. Der Treffpunkt liegt NICHT in der Mitte, sondern verschoben zur Seite des schwereren Gases. Dies ist ein klassisches Prüfungsbeispiel für Grahams Gesetz!

## Ficksches Diffusionsgesetz und klinische Anwendung

**Diffusion** ist der spontane Transport von Teilchen von Orten höherer zu Orten niedrigerer Konzentration. Der Diffusionsstrom ist proportional zum Konzentrationsgefälle und zur Fläche — steiles Gefälle = schnelle Diffusion. Mathematisch formuliert das **erste Ficksche Gesetz**:

**J = −D · (dc/dx)**

- J: Diffusionsstromdichte [mol/(m²·s)] – Stofffluss pro Fläche und Zeit
- D: Diffusionskoeffizient [m²/s] – substanz- und mediumspezifisch
- dc/dx: Konzentrationsgradient (negatives Vorzeichen: Fluss von hoher zu niedriger Konzentration)

Für den **pulmonalen Gasaustausch** wird Ficks Gesetz auf die Membrandiffusion angepasst:

**Fluss = (D × A × Δp) / d**

- A: Alveolarfläche (60–80 m² – entspricht einem Tennisplatz!)
- D: Diffusionskoeffizient (∝ Löslichkeit / √Molmasse)
- Δp: Partialdruckgradient über der Membran
- d: Diffusionsstrecke (alveolo-kapilläre Membran: 0,3–0,5 μm)

CO₂ diffundiert ca. 20-mal schneller als O₂ in der Lunge, obwohl es schwerer ist, weil CO₂ in wässrigen Medien viel löslicher ist (Löslichkeit geht linear in D ein, Masse nur als Wurzel).

## DLCO-Test: Klinische Messung der Diffusionskapazität

Der **DLCO-Test** (Transfer-Faktor für CO) nutzt Ficks Gesetz direkt:
- Patient atmet eine geringe CO-Konzentration (0,3 %) ein und hält 10 s die Luft an
- CO hat eine **210× höhere Hb-Affinität als O₂** → p_Blut(CO) ≈ 0 → maximaler Gradient ist immer gewährleistet
- Der gemessene CO-Uptake reflektiert ausschließlich die Membranparameter (A, d, D)

**Erniedrigter DLCO** bei: Lungenfibrose (d↑ → dickere Membran), Emphysem (A↓ → zerstörte Alveolarfläche), pulmonale Hypertonie (Gefäßverdickung), Anämie (weniger Hb).

**Erhöhter DLCO** bei: Alveolärer Hämorrhagie (Blut in Alveolen bindet CO), Polyzythämie (mehr Hb), Links-Rechts-Shunt (erhöhtes pulmonales Blutvolumen).

> **Merke:** DLCO ↓ bei Fibrose (d↑) und Emphysem (A↓) — beide Erkrankungen schädigen die Diffusionsstrecke durch verschiedene Mechanismen.

## Mittlere freie Weglänge

Obwohl Gasmoleküle bei Raumtemperatur mit Hunderten von Metern pro Sekunde fliegen, ist die Nettoausbreitung langsam, weil sie ständig kollidieren. Die **mittlere freie Weglänge** λ – also die Durchschnittsstrecke zwischen zwei Kollisionen – beträgt bei Atmosphärendruck und 25 °C nur ca. 60–70 nm für N₂ (Kollisionsfrequenz: ca. 5 Milliarden/s!).

Die biologische Konsequenz: Diffusion ist über kurze Strecken (Zellmembran: nm) extrem schnell, über große Distanzen (Organe: cm) viel zu langsam – deshalb brauchen höhere Organismen Kreislaufsysteme.

## Diffusionskoeffizienten: Vergleichswerte

| Medium | D (m²/s) | Beispiel |
|--------|----------|----------|
| Gas in Gas | ~10⁻⁵ | O₂ in Luft: 2,1 × 10⁻⁵ |
| Gas in Wasser | ~10⁻⁹ | O₂ in H₂O: 2,1 × 10⁻⁹ |
| Protein in Wasser | ~10⁻¹¹ | Hämoglobin: 6,9 × 10⁻¹¹ |

Der Diffusionskoeffizient in Wasser ist ca. **10.000× kleiner** als in Luft. Zellen müssen daher klein sein (typisch 10–50 μm), damit Nährstoffe per Diffusion alle Bereiche rechtzeitig erreichen.`,

    lernziele: [
      "Das Grahamsche Gesetz der Diffusion/Effusion formulieren und anwenden: r₁/r₂ = √(M₂/M₁).",
      "Das erste Ficksche Gesetz (J = −D·dc/dx) interpretieren und auf pulmonale Diffusion anwenden.",
      "Die Faktoren nennen, die die Diffusionskapazität der Lunge beeinflussen (Fläche, Gradient, Strecke, Löslichkeit).",
      "Den Begriff der mittleren freien Weglänge erklären und dessen Bedeutung für Gasdiffusion verstehen.",
    ],
    sections: [
      {
        heading: "Grahamsches Gesetz: Leichtere Gase diffundieren schneller",
        text: "Grahams Gesetz (1848) folgt aus der Gleichverteilung kinetischer Energie: ½M₁v₁² = ½M₂v₂² → v₁/v₂ = √(M₂/M₁). Leichtere Gase bewegen sich schneller und diffundieren rascher. Klassisches Experiment: NH₃ (M = 17) und HCl (M = 36,5) werden in ein Rohr eingebracht. NH₃ diffundiert schneller (r-Verhältnis = √(36,5/17) ≈ 1,47) – der weiße NH₄Cl-Niederschlag (NH₃ + HCl → NH₄Cl) bildet sich näher an der HCl-Quelle. Dies ist ein direkter experimenteller Nachweis des Grahamschen Gesetzes.",
        merksatz:
          "Graham: r ∝ 1/√M. Leichtes Gas diffundiert schnell – viermal leichteres Gas diffundiert doppelt so schnell.",
      },
      {
        heading: "Ficks Gesetz und pulmonale Diffusion",
        text: "In der Lunge diffundiert O₂ durch die alveolo-kapilläre Membran (0,3–0,5 μm dünn). Nach Fick: Fluss = D·A·Δp/d. Die riesige Alveolarfläche (60–80 m²!) und die hauchzarte Membran maximieren den Gasaustausch. CO₂ diffundiert 20× schneller als O₂ (trotz höherer Molmasse) wegen viel höherer Wasserlöslichkeit. Bei Erkrankungen: Lungenfibrose (d↑) und Emphysem (A↓) reduzieren den Fluss. Der DLCO-Test (CO-Diffusionskapazität) misst klinisch die Diffusionsfähigkeit: CO als Tracergas (extrem hohe Hb-Affinität → p_Blut ≈ 0 → maximaler Gradient).",
        merksatz:
          "Fick: Fluss = D·A·Δp/d. Große Fläche, hoher Gradient, kurze Strecke, hohe Löslichkeit → maximale Diffusion.",
      },
      {
        heading: "Mittlere freie Weglänge und Diffusionsgeschwindigkeit",
        text: "Obwohl N₂ bei Raumtemperatur mit v_rms ≈ 515 m/s rast, diffundiert es langsam durch ein Gasmedium, weil ständige Kollisionen (ca. 5 × 10⁹/s, freie Weglänge λ ≈ 66 nm) die Richtung ändern. Der Diffusionskoeffizient D ≈ (1/3)·v_mittl·λ ≈ 2 × 10⁻⁵ m²/s für Gase in Luft. In Wasser: D ≈ 10⁻⁹ m²/s (10.000× langsamer!). Biologisch optimierte Lösung: Alveolarmembran (nm-dünn), maximale Oberfläche (60 m²), und für große Distanzen ein Kreislaufsystem.",
        merksatz:
          "λ bei 1 bar ≈ 60–70 nm (N₂). Höherer Druck → kürzere λ → langsamere Diffusion im Gas. In Wasser ist D 10.000× kleiner als in Luft.",
      },
    ],
    merksätze: [
      "Graham: r₁/r₂ = √(M₂/M₁) – leichtere Moleküle bewegen sich schneller, weil bei gleicher Temperatur alle Gase dieselbe kinetische Energie haben.",
      "H₂ (2 g/mol) diffundiert 4× schneller als O₂ (32 g/mol): √(32/2) = √16 = 4.",
      "Fick: Steiles Konzentrationsgefälle + große Fläche + kurze Strecke = schnelle Diffusion. In der Lunge: Fluss = D·A·Δp/d.",
      "CO₂ diffundiert in der Lunge 20× schneller als O₂ – die viel höhere Wasserlöslichkeit schlägt den Molmassen-Nachteil.",
      "Diffusion über nm: Nanosekunden. Über 1 cm: Stunden! Deshalb brauchen große Organismen einen Kreislauf.",
      "DLCO ↓ bei Fibrose (dickere Membran) und Emphysem (weniger Alveolarfläche) – zwei verschiedene Mechanismen, ein Test.",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Formulieren Sie das Grahamsche Gesetz und erläutern Sie seine physikalische Grundlage. Wie wird das Ficksche Gesetz in der Lungendiffusion angewendet?",
      answer: `Das Grahamsche Gesetz (1848): r₁/r₂ = √(M₂/M₁). Es folgt aus der kinetischen Gastheorie: Bei gleicher Temperatur haben alle Gasmoleküle dieselbe mittlere kinetische Energie (½Mv² = 3/2 k_BT), woraus v ∝ 1/√M folgt. Leichtere Moleküle bewegen sich schneller und diffundieren/effundieren rascher. Beispiel: H₂ (M = 2) diffundiert √(32/2) = 4-mal schneller als O₂ (M = 32).

Das Ficksche Diffusionsgesetz (1. Gesetz): J = −D·dc/dx, wobei D der Diffusionskoeffizient und dc/dx der Konzentrationsgradient ist. In der Lunge: Fluss = (D × A × Δp)/d. Die riesige Alveolarfläche A (60–80 m²) und die hauchzarte alveolo-kapilläre Membran (d = 0,3–0,5 μm) maximieren den Gasaustausch. Der Druckgradient Δp(O₂) ≈ 8 kPa (Alveole 13,3 kPa – venöses Blut 5,3 kPa) treibt die Diffusion.

D ist proportional zur Gaslöslichkeit und umgekehrt proportional zu √M: D ∝ α/√M. Obwohl CO₂ (44 g/mol) schwerer als O₂ (32 g/mol) ist, diffundiert CO₂ ca. 20× schneller, weil seine Wasserlöslichkeit 24× höher ist (24/1,17 ≈ 20). Deshalb ist CO₂-Elimination kaum beeinträchtigt, wenn die Diffusionskapazität sinkt, während O₂-Aufnahme bereits früh leidet. Klinisch misst der DLCO-Test die Diffusionskapazität – reduziert bei Fibrose (d↑), Emphysem (A↓) und pulmonaler Hypertonie.`,
    },
    klinischerBezug:
      "Der DLCO-Test (Diffusionskapazität für CO) nutzt Ficks Gesetz direkt: CO hat extrem hohe Hb-Affinität (200× > O₂), sodass p_Blut(CO) ≈ 0 und der maximale Partialdruckgradient immer gewährleistet ist – nur die Membranparameter (A, d, D) limitieren. Reduzierter DLCO ist diagnostisch für Lungenfibrose (d↑), Emphysem (A↓) und pulmonale Hypertonie (Gefäßverdickung). Die Heliox-Therapie (He/O₂) bei obstruktiver Lungenerkrankung nutzt die geringere Gasdichte von He (M = 4 g/mol vs. N₂: 28 g/mol), die nach Grahamschen Prinzipien zu höherem Diffusionskoeffizienten und geringerem turbulentem Atemwiderstand führt.",
    selfTest: [
      {
        question:
          "Wie viel mal schneller diffundiert CH₄ (M = 16 g/mol) im Vergleich zu SO₂ (M = 64 g/mol)?",
        options: [
          "D) 8-mal schneller",
          "B) 4-mal schneller",
          "C) 0,5-mal (halb so schnell)",
          "A) 2-mal schneller",
          "E) 1,4-mal schneller",
        ],
        correctIndex: 3,
        explanation:
          "Graham: r(CH₄)/r(SO₂) = √(M(SO₂)/M(CH₄)) = √(64/16) = √4 = 2. CH₄ diffundiert genau 2× schneller als SO₂. Merke: Das Massenverhältnis (64/16 = 4) muss GEWURZELT werden → √4 = 2. Häufiger Fehler: Massenverhältnis nicht wurzeln → falsche Antwort 4. Oder falsch herum: √(16/64) = 0,5 → SO₂ wäre schneller, was falsch ist. Das schwerere Gas (SO₂, 64 g/mol) ist langsamer. Das Verhältnis der Molmassen 64:16 = 4:1 ergibt ein Geschwindigkeitsverhältnis von √4 = 2:1.",
        hints: [
          "Graham: r₁/r₂ = √(M₂/M₁). Das schwerere Gas kommt in den Zähler unter der Wurzel.",
          "√(64/16) = √4 = 2. Das Massenverhältnis 4:1 ergibt Geschwindigkeitsverhältnis 2:1 (nicht 4:1!).",
        ],
        difficulty: 1,
        tags: ["grahamsches-gesetz", "diffusion", "rechnen"],
      },
      {
        question:
          "Warum diffundiert CO₂ in der Lunge ca. 20-mal schneller als O₂, obwohl CO₂ schwerer ist?",
        options: [
          "E) Weil das Grahamsche Gesetz für CO₂ in Flüssigkeiten nicht gilt.",
          "B) Weil CO₂ kleiner ist als O₂.",
          "C) Weil CO₂ einen höheren Partialdruck hat als O₂ in der Alveole.",
          "D) Weil CO₂ chemisch mit Wasser reagiert und dadurch schneller transportiert wird.",
          "A) Weil CO₂ eine viel höhere Löslichkeit in wässrigen Medien hat als O₂ – Löslichkeit geht linear in D ein, Molmasse nur als Wurzel.",
        ],
        correctIndex: 4,
        explanation:
          "In biologischen Medien gilt: D ∝ α/√M, wobei α die Bunsensche Löslichkeit ist. CO₂ ist in Wasser ca. 24× löslicher als O₂ (α(CO₂) ≈ 0,592 vs. α(O₂) ≈ 0,024 ml/(ml·atm) bei 37 °C). Der Molmassen-Nachteil: √(44)/√(32) = 1,17-fach. Effektiv: 24/1,17 ≈ 20× schnellere Diffusion. Die chemische Reaktion von CO₂ mit Wasser (CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, katalysiert durch Carboanhydrase) erhöht zwar den Gesamttransport, ist aber vom physikalischen Diffusionskoeffizienten zu trennen.",
        hints: [
          "D ∝ Löslichkeit/√M. Löslichkeit (linear) schlägt Molmasse (als Wurzel) bei CO₂ deutlich.",
          "CO₂-Löslichkeit in Wasser ≈ 24× höher als O₂. Molmassen-Nachteil von CO₂ nur 1,17×. Netto: 20×.",
        ],
        difficulty: 3,
        tags: ["co2-diffusion", "lunge", "ficksches-gesetz"],
      },
      {
        question: "Was ist die mittlere freie Weglänge eines Gasmoleküls?",
        options: [
          "A) Die durchschnittliche Strecke zwischen zwei aufeinanderfolgenden Kollisionen.",
          "B) Die Gesamtstrecke, die ein Molekül pro Sekunde zurücklegt.",
          "C) Der Moleküldurchmesser.",
          "D) Die Strecke vom Molekül zur nächsten Behälterwand.",
          "E) Die Wellenlänge thermischer Strahlung des Moleküls.",
        ],
        correctIndex: 0,
        explanation:
          "Die mittlere freie Weglänge λ ist die Durchschnittsstrecke zwischen zwei Kollisionen: λ = k_BT/(√2·π·d²·p). Bei 1 bar und 25 °C beträgt λ für N₂ ca. 66 nm – winzig gegenüber v_rms ≈ 515 m/s. Das Molekül kollidiert ca. 5 Milliarden Mal pro Sekunde! Die Nettoausbreitung durch einen Konzentrationsgradienten ist trotzdem langsam, da jede Kollision die Richtung ändert (Random Walk). Bei niedrigem Druck (λ >> Behälterdurchmesser) spricht man vom Knudsen-Regime: Moleküle kollidieren eher mit Wänden als miteinander – Effusion dominiert.",
        hints: [
          "λ = k_BT/(√2·π·d²·p). Bei niedrigem p ist λ groß (weniger Partnermoleküle zum Kollidieren).",
          "Erklärt, warum Diffusion trotz hoher Molekülgeschwindigkeit makroskopisch langsam ist (ständige Richtungsänderungen).",
        ],
        difficulty: 2,
        tags: ["mittlere-freie-weglänge", "kollision", "diffusion"],
      },
      {
        question: "Welches der folgenden Gase effundiert am langsamsten durch eine kleine Öffnung?",
        options: [
          "B) H₂ (M = 2 g/mol)",
          "A) UF₆ (M = 352 g/mol)",
          "C) He (M = 4 g/mol)",
          "D) CH₄ (M = 16 g/mol)",
          "E) N₂ (M = 28 g/mol)",
        ],
        correctIndex: 1,
        explanation:
          "Nach Graham: r ∝ 1/√M. Das schwerste Gas effundiert am langsamsten. UF₆ (M = 352 g/mol) ist das schwerste: r(H₂)/r(UF₆) = √(352/2) = √176 ≈ 13,3 – H₂ ist 13,3× schneller! Technisch wichtig: Die geringfügig unterschiedliche Effusionsrate von ²³⁵UF₆ (M = 349) und ²³⁸UF₆ (M = 352) – Verhältnis: √(352/349) ≈ 1,0043 – wird in der Urananreicherung genutzt. Der Unterschied beträgt nur 0,43 % pro Stufe, weshalb tausende Effusionsstufen nötig sind (Gasdiffusionskaskade). M(UF₆) = 238 + 6 × 19 = 352 g/mol.",
        hints: [
          "Graham: r ∝ 1/√M. Das schwerste Gas effundiert am langsamsten.",
          "UF₆ = 1 U-Atom (238 g/mol) + 6 F-Atome (6×19 = 114 g/mol) = 352 g/mol – das Schwerste in der Liste.",
        ],
        difficulty: 1,
        tags: ["effusion", "grahamsches-gesetz", "uf6"],
      },
      {
        question: "Welche Aussage zu Ficks erstem Gesetz (J = −D·dc/dx) ist korrekt?",
        options: [
          "C) Bei höherer Temperatur ist D kleiner, weil Gase dann langsamer diffundieren.",
          "B) Der Diffusionsfluss ist proportional zum Quadrat des Konzentrationsgradienten.",
          "A) Der Diffusionsfluss ist proportional zum Konzentrationsgradienten und zeigt in Richtung abnehmender Konzentration (von hoch nach niedrig).",
          "D) Das Minuszeichen zeigt an, dass Diffusion ein reversibler Prozess ist.",
          "E) D ist für alle Gase in allen Medien gleich groß.",
        ],
        correctIndex: 2,
        explanation:
          "Ficks 1. Gesetz J = −D·dc/dx: Fluss J ist proportional zum Konzentrationsgradienten dc/dx. Das Minuszeichen besagt: Fluss fließt ENTGEGEN dem Gradienten (von hoher zu niedriger Konzentration). D ist substanz- und mediumspezifisch: O₂ in Luft D ≈ 2 × 10⁻⁵ m²/s; CO₂ in Wasser D ≈ 1,9 × 10⁻⁹ m²/s (10.000× kleiner!). Bei höherer Temperatur steigt D für Gase (D ∝ T^(3/2)/p nach kinetischer Gastheorie). Option B ist falsch (linear, nicht quadratisch). Option D ist falsch (Minuszeichen = Richtung des Flusses, nicht Reversibilität).",
        hints: [
          "Minuszeichen: dc/dx > 0 (Konzentration steigt in x-Richtung) → Fluss in −x-Richtung (von hoch nach niedrig).",
          "D ist groß in Gasen (~10⁻⁵ m²/s) und viel kleiner in Flüssigkeiten (~10⁻⁹ m²/s).",
        ],
        difficulty: 2,
        tags: ["ficksches-gesetz", "diffusionskoeffizient", "konzentrationsgradient"],
      },
      {
        question:
          "Ein Patient mit Lungenfibrose hat 40 % der normalen Alveolarfläche und eine doppelt so dicke alveolo-kapilläre Membran. Auf welchen Prozentsatz der Norm sinkt die Diffusionskapazität?",
        options: ["D) 50 %", "B) 40 %", "C) 80 %", "A) 20 %", "E) 60 %"],
        correctIndex: 3,
        explanation:
          "Diffusionskapazität ∝ A/d (nach Fick). Neue Kapazität = (0,4·A_norm)/(2·d_norm) = 0,2 × (A_norm/d_norm). Nur 20 % der Norm! Beide Faktoren wirken gleichzeitig: Fläche halbiert sich effektiv auf 40 % → das allein würde 40 % ergeben. Zusätzlich doppelte Membrandicke → durch 2 dividieren → 40 % / 2 = 20 %. Klinisch: Eine so schwere kombinierte Schädigung führt zu massiver Hypoxämie, die trotz hoher F_IO₂ schwer zu korrigieren ist. Der DLCO-Test würde ebenfalls nur ca. 20 % des Sollwerts ergeben.",
        hints: [
          "Diffusionskapazität ∝ A/d. Neue Kapazität = (0,4·A)/(2·d) = 0,2 × (A/d) → 20 % der Norm.",
          "A sinkt auf 40 %, d steigt auf 200 % → beide Effekte: 0,4 / 2 = 0,2 = 20 %.",
        ],
        difficulty: 3,
        tags: ["lungenfibrose", "diffusionskapazität", "rechnen"],
      },
      {
        question:
          "Welcher Faktor verdoppelt die Effusionsrate eines Gases nach dem Grahamschen Gesetz?",
        options: [
          "E) Die Öffnungsfläche verdoppeln",
          "B) Die Temperatur auf 200 % erhöhen",
          "C) Den Druck auf 200 % erhöhen",
          "D) Die molare Masse auf 1/2 reduzieren (von M auf M/2)",
          "A) Die molare Masse auf 1/4 reduzieren (von M auf M/4)",
        ],
        correctIndex: 4,
        explanation:
          "Graham: r ∝ 1/√M. Um r zu verdoppeln: 1/√M_neu = 2/√M_alt → √M_neu = √M_alt/2 → M_neu = M_alt/4. Masse auf ein VIERTEL reduzieren! Option D (M/2) würde r nur um √2 ≈ 1,41× erhöhen – nicht verdoppeln. Der Wurzel-Zusammenhang täuscht: Man denkt an Halbierung der Masse für doppelte Rate, aber es ist Viertelung nötig. Merke: Wegen der Wurzel in Grahams Gesetz braucht man das 4-fache Massenverhältnis für das 2-fache Geschwindigkeitsverhältnis. Analogie: v_rms ∝ 1/√M – genau dasselbe Prinzip.",
        hints: [
          "r ∝ 1/√M. Für doppelte r: √(M_neu) = √(M_alt)/2 → M_neu = M_alt/4.",
          "Achtung Wurzelfalle: Masse HALBIEREN gibt nur √2 ≈ 1,41× Rate, nicht 2×. Masse auf 1/4 für 2× Rate.",
        ],
        difficulty: 3,
        tags: ["effusion", "grahamsches-gesetz", "masse"],
      },
    ],
  },
];
