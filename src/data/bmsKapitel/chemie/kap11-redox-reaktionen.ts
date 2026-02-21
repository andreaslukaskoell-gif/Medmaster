import type { Kapitel } from '../types';

export const chemKap11: Kapitel = {
  id: "chem-kap11",
  title: "Redox-Reaktionen",
  subject: "chemie",
  icon: "⚡",
  estimatedTime: "50 min",
  unterkapitel: [
    {
      id: "ch-11-01",
      title: "Oxidation und Reduktion — Grundlagen",
      content: `## Definitionen: OIL und RIG

Oxidation und Reduktion sind Elektronenübertragungsreaktionen:

- **Oxidation:** Abgabe von Elektronen (OIL — Oxidation Is Loss)
- **Reduktion:** Aufnahme von Elektronen (RIG — Reduction Is Gain)

Beide Prozesse laufen immer gleichzeitig ab — daher "Redox-Reaktion". Das Teilchen, das Elektronen abgibt (oxidiert wird), ist das **Reduktionsmittel**. Das Teilchen, das Elektronen aufnimmt (reduziert wird), ist das **Oxidationsmittel**.

## Oxidationszahlen (Oxidationsstufen)

Oxidationszahlen (OZ) sind formale Ladungen, die Elektronen "zuweisen". Regeln:
1. Elemente in reiner Form: OZ = 0 (z. B. Fe⁰, O₂: jedes O hat OZ = 0)
2. Einatomige Ionen: OZ = Ionenladung (Fe²⁺: OZ = +2)
3. O in Verbindungen: OZ = −2 (Ausnahme: Peroxide −1, OF₂ = +2)
4. H in Verbindungen: OZ = +1 (Ausnahme: Metallhydride −1)
5. Summe der OZ = Gesamtladung

**Beispiel:** H₂SO₄: 2(+1) + OZ(S) + 4(−2) = 0 → OZ(S) = +6

## Aufstellen von Redox-Gleichungen

Methode der Halbreaktion:
1. Halb-Reaktionen aufstellen (Oxidation und Reduktion getrennt)
2. Elektronen ausgleichen
3. Ladungen mit H⁺ (sauer) oder OH⁻ (basisch) ausgleichen
4. H mit H₂O ausgleichen
5. Halbgleichungen addieren, Elektronen kürzen

**Beispiel:** Zn + Cu²⁺ → Zn²⁺ + Cu
- Oxidation: Zn → Zn²⁺ + 2e⁻
- Reduktion: Cu²⁺ + 2e⁻ → Cu

## Oxidationsmittel und Reduktionsmittel

**Starke Oxidationsmittel** (nehmen gerne Elektronen): F₂, Cl₂, O₂, KMnO₄, K₂Cr₂O₇, H₂O₂, konzentrierte H₂SO₄ und HNO₃.

**Starke Reduktionsmittel** (geben gerne Elektronen): Na, K, Li, Zn, Al, H₂, NADH/FADH₂ (biologisch).`,
      lernziele: [
        "Oxidation und Reduktion anhand der Elektronenübertragung definieren (OIL-RIG) und Oxidationszahlen berechnen",
        "Reduktionsmittel und Oxidationsmittel in einer Redox-Reaktion identifizieren",
        "Einfache Redox-Gleichungen mit der Halbreaktion-Methode aufstellen",
      ],
      sections: [
        {
          heading: "Oxidationszahlen berechnen",
          text: "Die Oxidationszahl ist eine hypothetische Ladung, die ein Atom hätte, wenn alle Bindungselektronen dem elektronegativeren Partner zugewiesen würden. Wichtige Regeln: Sauerstoff hat fast immer OZ = −2 (Ausnahme: H₂O₂ hat OZ = −1 für O; OF₂ hat OZ = +2 für O). Wasserstoff hat OZ = +1 in Säuren und Verbindungen (Ausnahme: NaH, CaH₂ → OZ(H) = −1). Die Summe der OZ muss der Gesamtladung entsprechen. Beispiel: MnO₄⁻: OZ(Mn) + 4×(−2) = −1 → OZ(Mn) = +7. In der Biologie: Glucose (C₆H₁₂O₆) hat OZ(C) = 0 im Durchschnitt; CO₂ hat OZ(C) = +4. Verbrennung von Glucose = Oxidation des C von 0 auf +4.",
          merksatz: "O = −2, H = +1, Ionen = Ladung, Elemente = 0",
        },
        {
          heading: "Erkennen von Redox-Reaktionen",
          text: "Eine Reaktion ist eine Redox-Reaktion, wenn sich bei mindestens einem Element die Oxidationszahl ändert. Nicht-Redox-Reaktionen (z.B. Säure-Base, Fällung) zeigen keine OZ-Änderungen. Disproportionierung: Ein Element wird gleichzeitig oxidiert und reduziert (z.B. H₂O₂ → H₂O + O₂: O wechselt von −1 zu −2 und 0). Komproportionierung: Zwei verschiedene Oxidationsstufen desselben Elements reagieren zu einer mittleren Stufe. In biologischen Systemen sind die wichtigsten Redox-Paare: NAD⁺/NADH (Übertragung von 2H⁺ + 2e⁻), FAD/FADH₂, Ubichinon/Ubichinol, Cytochrome (Fe³⁺/Fe²⁺), O₂/H₂O.",
          merksatz: "Redox = OZ-Änderung; kein OZ-Wechsel = kein Redox",
        },
      ],
      merksätze: [
        "OIL RIG: Oxidation Is Loss, Reduction Is Gain (von Elektronen)",
        "OZ: O=−2, H=+1, Summe=Gesamtladung",
        "Oxidationsmittel wird selbst reduziert; Reduktionsmittel wird selbst oxidiert",
      ],
      klinischerBezug: "Methämoglobinämie: Fe²⁺ in Hämoglobin wird zu Fe³⁺ oxidiert (Methämoglobin, MetHb) → kann keinen O₂ mehr binden. Ursachen: Nitrite, Dapson, Prilocain. Therapie: Methylenblau (reduziert MetHb zurück zu Hb über NADPH-Methämoglobin-Reduktase).",
      altfrage: {
        question: "Was bedeutet 'Oxidation' im Sinne der Elektronenübertragung?",
        answer: "Oxidation ist die Abgabe von Elektronen durch ein Atom oder Ion. Die Oxidationszahl des oxidierten Teilchens steigt. Das Teilchen, das Elektronen abgibt, wird als Reduktionsmittel bezeichnet, da es das andere Reaktionspartner reduziert. Merkregel: OIL — Oxidation Is Loss (of electrons).",
      },
      selfTest: [
        {
          question: "Was ist die Oxidationszahl von Mangan in KMnO₄?",
          options: [
            "+2",
            "+4",
            "+6",
            "+7",
            "+3",
          ],
          correctIndex: 3,
          explanation: "KMnO₄ ist elektrisch neutral. OZ(K) = +1, OZ(O) = −2. Summe: (+1) + OZ(Mn) + 4×(−2) = 0 → OZ(Mn) = 0 − 1 + 8 = +7. Mangan hat OZ = +7 in Permanganat (MnO₄⁻). KMnO₄ ist ein starkes Oxidationsmittel.",
          hints: [
            "Summe aller OZ = Gesamtladung (hier 0 für KMnO₄)",
            "OZ(K) = +1, OZ(O) = −2",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu — welche Aussage ist korrekt?",
          options: [
            "Zn wird reduziert (OZ steigt von 0 auf +2)",
            "Cu²⁺ wird oxidiert (OZ steigt von +2 auf 0)",
            "Zn wird oxidiert (gibt 2 e⁻ ab) und Cu²⁺ wird reduziert",
            "SO₄²⁻ ändert die Oxidationszahl",
            "Es handelt sich um keine Redox-Reaktion",
          ],
          correctIndex: 2,
          explanation: "Zn: OZ ändert sich von 0 (Zn) zu +2 (Zn²⁺) → Zn gibt 2 Elektronen ab → Zn wird oxidiert (ist Reduktionsmittel). Cu²⁺: OZ ändert sich von +2 zu 0 (Cu) → Cu²⁺ nimmt 2 Elektronen auf → Cu²⁺ wird reduziert (ist Oxidationsmittel). Oxidation(Zn)→Abgabe; Reduktion(Cu²⁺)→Aufnahme. OIL RIG.",
          hints: [
            "OIL RIG: Wer gibt Elektronen ab (Oxidation)?",
            "Welche OZ ändert sich: Zn oder Cu?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Oxidationszahl von Kohlenstoff in CO₂?",
          options: [
            "0",
            "+2",
            "+4",
            "−4",
            "−2",
          ],
          correctIndex: 2,
          explanation: "CO₂: Summe der OZ = 0. OZ(O) = −2, zwei Sauerstoffatome: 2×(−2) = −4. Also: OZ(C) + (−4) = 0 → OZ(C) = +4. Zum Vergleich: Im Methan CH₄ hat C die OZ −4. Bei der Verbrennung von Methan steigt OZ(C) von −4 auf +4 → Oxidation.",
          hints: [
            "OZ(O) = −2; zwei O-Atome in CO₂",
            "Summe muss 0 ergeben (neutrales Molekül)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Teilchen ist in der Reaktion 2H₂ + O₂ → 2H₂O das Oxidationsmittel?",
          options: [
            "H₂ (gibt Elektronen ab)",
            "O₂ (nimmt Elektronen auf, wird reduziert)",
            "H₂O (wird gebildet)",
            "Beide H₂ und O₂ werden oxidiert",
            "Keines — keine Redox-Reaktion",
          ],
          correctIndex: 1,
          explanation: "In 2H₂ + O₂ → 2H₂O: H₂ (OZ H = 0) → H₂O (OZ H = +1): Wasserstoff wird oxidiert (OZ steigt). O₂ (OZ O = 0) → H₂O (OZ O = −2): Sauerstoff wird reduziert (OZ sinkt, nimmt Elektronen auf). O₂ ist das Oxidationsmittel (wird selbst reduziert); H₂ ist das Reduktionsmittel (wird selbst oxidiert).",
          hints: [
            "Das Oxidationsmittel wird selbst reduziert",
            "Welche OZ hat O in O₂ vs. H₂O?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was versteht man unter einer Disproportionierung?",
          options: [
            "Zwei verschiedene Elemente werden beide oxidiert",
            "Dasselbe Element wird gleichzeitig oxidiert und reduziert",
            "Ein Element wechselt von hoher zu niedrigerer OZ",
            "Zwei Reduktionsmittel reagieren miteinander",
            "Ein Katalysator wird oxidiert",
          ],
          correctIndex: 1,
          explanation: "Bei einer Disproportionierung wird ein Element in derselben Reaktion gleichzeitig oxidiert (OZ steigt) und reduziert (OZ sinkt). Beispiel: H₂O₂ → H₂O + ½O₂: O hat in H₂O₂ OZ = −1, in H₂O OZ = −2 (reduziert) und in O₂ OZ = 0 (oxidiert). Weitere Beispiele: Cl₂ in Lauge: Cl₂ → Cl⁻ + ClO⁻.",
          hints: [
            "Dis-proportionierung = dasselbe Element in zwei Richtungen",
            "Was passiert mit dem O in H₂O₂ → H₂O + O₂?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: "ch-11-02",
      title: "Elektrochemische Spannungsreihe und galvanische Elemente",
      content: `## Standardwasserstoffelektrode und Normalpotenzial

Das Normalpotenzial (Standardreduktionspotenzial) E° misst die Tendenz eines Redox-Paares, Elektronen aufzunehmen, relativ zur **Standardwasserstoffelektrode** (SHE, E° = 0 V):
H⁺/H₂: 2H⁺ + 2e⁻ ⇌ H₂, E° = 0,00 V (definierter Referenzwert)

Bedingungen: 25 °C, Aktivität aller Beteiligten = 1 (1 mol/L für gelöste, 1 atm für Gase).

## Elektrochemische Spannungsreihe (Auswahl)

| Halbreaktion | E° (V) |
|---|---|
| Li⁺ + e⁻ → Li | −3,04 |
| Zn²⁺ + 2e⁻ → Zn | −0,76 |
| Fe²⁺ + 2e⁻ → Fe | −0,44 |
| 2H⁺ + 2e⁻ → H₂ | 0,00 |
| Cu²⁺ + 2e⁻ → Cu | +0,34 |
| Fe³⁺ + e⁻ → Fe²⁺ | +0,77 |
| Ag⁺ + e⁻ → Ag | +0,80 |
| O₂ + 4H⁺ + 4e⁻ → 2H₂O | +1,23 |
| F₂ + 2e⁻ → 2F⁻ | +2,87 |

Kleines E° (negativ) → gutes Reduktionsmittel; großes E° (positiv) → gutes Oxidationsmittel.

## Das Daniel-Element

Das Daniel-Element ist ein galvanisches Element aus zwei Halbzellen:
**Zn | ZnSO₄ (1M) || CuSO₄ (1M) | Cu**

- **Anode (negativ, Oxidation):** Zn → Zn²⁺ + 2e⁻ (E° = −0,76 V)
- **Kathode (positiv, Reduktion):** Cu²⁺ + 2e⁻ → Cu (E° = +0,34 V)
- **Zellspannung:** E°_Zelle = E°_Kathode − E°_Anode = +0,34 − (−0,76) = **+1,10 V**

Elektronen fließen extern von Anode (−) zu Kathode (+). Das Salzbrücke gewährleistet Ladungsausgleich.

## Berechnung der Zellspannung

**E°_Zelle = E°_Kathode − E°_Anode**

oder: E°_Zelle = E°(Oxidationsmittel) − E°(Reduktionsmittel)

Positive E°_Zelle → spontane Reaktion (galvanisches Element).
Negative E°_Zelle → nicht spontan (Elektrolyse nötig).`,
      lernziele: [
        "Das Konzept des Normalpotenzials und der Standardwasserstoffelektrode erklären",
        "Aus der Spannungsreihe die Stärke von Oxidations- und Reduktionsmitteln ableiten",
        "Die Zellspannung eines galvanischen Elements berechnen und Anode/Kathode identifizieren",
      ],
      sections: [
        {
          heading: "Spannungsreihe und Vorhersage von Redox-Reaktionen",
          text: "Die elektrochemische Spannungsreihe ermöglicht Vorhersagen, welche Redox-Reaktionen spontan ablaufen. Grundregel: Ein stärkeres Oxidationsmittel (höheres E°) reagiert spontan mit einem stärkeren Reduktionsmittel (niedrigeres E°). Beispiel: Wird Eisen in CuSO₄-Lösung getaucht? Fe (E° = −0,44 V) hat niedrigeres E° als Cu²⁺ (E° = +0,34 V) → Fe wird oxidiert, Cu²⁺ wird reduziert → Kupfer schlägt sich auf Eisen nieder. Praktisch: Metalle mit negativem E° (Zn, Al, Fe) korrodieren in wässrigen Lösungen. Galvanische Korrosion tritt auf, wenn zwei Metalle unterschiedlicher E° in Kontakt kommen und als galvanisches Element wirken.",
          merksatz: "Hohes E° = starkes Oxidationsmittel; niedriges E° = starkes Reduktionsmittel",
        },
        {
          heading: "Galvanisches Element vs. Elektrolysezelle",
          text: "In einem galvanischen Element wird chemische Energie in elektrische Energie umgewandelt (spontane Redox-Reaktion, positive E°_Zelle). Alltagsbeispiele: Batterie, Akkumulator, Brennstoffzelle. In einer Elektrolysezelle wird elektrische Energie genutzt, um eine nicht spontane Redox-Reaktion anzutreiben (negative E°_Zelle, externe Spannung nötig). Beispiele: Elektrolyse von Wasser, Chlor-Alkali-Verfahren, Galvanik. Wichtig: Anode = Oxidation und Kathode = Reduktion gelten für beide Typen. Aber: Im galvanischen Element ist die Anode der Minuspol (−), in der Elektrolysezelle ist die Anode der Pluspol (+).",
          merksatz: "Galvanisch: chem. → elektr. Energie; Elektrolyse: elektr. → chem. Energie",
        },
      ],
      merksätze: [
        "SHE = 0 V als Referenz; E°_Zelle = E°_Kathode − E°_Anode",
        "Daniel-Element: Zn|Zn²⁺||Cu²⁺|Cu, E° = 1,10 V",
        "Anode = Oxidation (−), Kathode = Reduktion (+)",
      ],
      klinischerBezug: "Herzschrittmacher-Batterien nutzen galvanische Elemente (Lithium-Iod-Zellen, E° ≈ 2,8 V). Korrosion von Implantaten (Hüftprothesen aus verschiedenen Metallen) ist ein elektrochemisches Problem: galvanische Korrosion durch unterschiedliche Normalpotenziale der verwendeten Legierungen.",
      altfrage: {
        question: "Wie berechnet man die Zellspannung E°_Zelle eines galvanischen Elements?",
        answer: "E°_Zelle = E°_Kathode − E°_Anode. Die Kathode ist die Elektrode mit dem höheren Normalpotenzial (Reduktion findet statt), die Anode hat das niedrigere Normalpotenzial (Oxidation findet statt). Für das Daniel-Element: E°_Zelle = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 − (−0,76) = +1,10 V.",
      },
      selfTest: [
        {
          question: "Welche Reaktion läuft am Daniel-Element an der Anode ab?",
          options: [
            "Cu²⁺ + 2e⁻ → Cu (Reduktion von Kupfer)",
            "Zn → Zn²⁺ + 2e⁻ (Oxidation von Zink)",
            "Zn²⁺ + 2e⁻ → Zn (Reduktion von Zink)",
            "Cu → Cu²⁺ + 2e⁻ (Oxidation von Kupfer)",
            "2H⁺ + 2e⁻ → H₂ (Wasserstoffentwicklung)",
          ],
          correctIndex: 1,
          explanation: "Im Daniel-Element ist Zink die Anode (Oxidation, Minuspol): Zn → Zn²⁺ + 2e⁻. Zink hat E° = −0,76 V (niedrigeres Potenzial) und gibt Elektronen leichter ab. An der Kathode (Cu, E° = +0,34 V) findet Reduktion statt: Cu²⁺ + 2e⁻ → Cu. Elektronen fließen von Anode (Zn) zu Kathode (Cu) durch den externen Leiter.",
          hints: [
            "Anode = Oxidation; niedrigeres E° = Anode",
            "Zink hat E° = −0,76 V, Kupfer +0,34 V",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welchen Wert hat E°_Zelle für das Daniel-Element (Zn/Cu)?",
          options: [
            "0,34 V",
            "0,76 V",
            "1,10 V",
            "−1,10 V",
            "0,42 V",
          ],
          correctIndex: 2,
          explanation: "E°_Zelle = E°_Kathode − E°_Anode = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 V − (−0,76 V) = +0,34 + 0,76 = +1,10 V. Die positive Zellspannung zeigt an, dass die Reaktion spontan abläuft. Das Daniel-Element war eine der ersten galvanischen Zellen (John Daniell, 1836).",
          hints: [
            "E°_Zelle = E°_Kathode − E°_Anode",
            "E°(Cu²⁺/Cu) = +0,34 V; E°(Zn²⁺/Zn) = −0,76 V",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Reagiert Zink spontan mit einer 1M Cu²⁺-Lösung? (E°Zn²⁺/Zn = −0,76 V, E°Cu²⁺/Cu = +0,34 V)",
          options: [
            "Nein, weil Zink ein schlechteres Reduktionsmittel als Cu ist",
            "Ja, weil E°_Zelle = +1,10 V > 0 (spontan)",
            "Nein, weil E°_Zelle < 0",
            "Ja, weil Cu²⁺ ein Reduktionsmittel ist",
            "Nur bei erhöhter Temperatur",
          ],
          correctIndex: 1,
          explanation: "Für die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu: E°_Zelle = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 − (−0,76) = +1,10 V > 0 → spontane Reaktion. Zink (niedrigeres E°, stärkeres Reduktionsmittel) reduziert Cu²⁺ (höheres E°, stärkeres Oxidationsmittel). Man sieht dies auch an der Metallreihe: Zink steht links von Kupfer.",
          hints: [
            "Positive E°_Zelle = spontan",
            "E°_Zelle = E°_Kathode − E°_Anode; Kathode = höheres E°",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Standardwasserstoffelektrode (SHE)?",
          options: [
            "Eine Elektrode mit E° = +1 V als Referenz",
            "Eine Platinelektrode in 1M H⁺-Lösung bei 1 atm H₂, E° = 0 V",
            "Eine Elektrode aus reinem Wasserstoffgas",
            "Die Elektrode mit dem negativsten E° in der Spannungsreihe",
            "Eine biologische Elektrode basierend auf NAD⁺/NADH",
          ],
          correctIndex: 1,
          explanation: "Die SHE besteht aus einem Platindraht (Katalysator), der in 1M H⁺ eingetaucht ist, und wird von H₂-Gas bei 1 atm Druck umspült. Das Normalpotenzial ist definitionsgemäß E° = 0,00 V bei 25 °C. Alle anderen Normalpotenziale werden relativ zur SHE gemessen. Die SHE ist der universelle Referenzpunkt der Elektrochemie.",
          hints: [
            "SHE = Standard Hydrogen Electrode",
            "E° = 0 V ist ein definierter Referenzwert",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Metall aus der Spannungsreihe ist das stärkste Reduktionsmittel?",
          options: [
            "Gold (Au, E° = +1,50 V)",
            "Kupfer (Cu, E° = +0,34 V)",
            "Eisen (Fe, E° = −0,44 V)",
            "Lithium (Li, E° = −3,04 V)",
            "Zink (Zn, E° = −0,76 V)",
          ],
          correctIndex: 3,
          explanation: "Stärkste Reduktionsmittel haben das niedrigste (negativste) Normalpotenzial — sie geben Elektronen am leichtesten ab. Lithium (Li, E° = −3,04 V) hat das negativste Standardpotenzial aller Metalle und ist damit das stärkste metallische Reduktionsmittel. Gold (Au) mit hohem positivem E° ist ein schlechtes Reduktionsmittel (sehr edles Metall).",
          hints: [
            "Niedriges E° = gutes Reduktionsmittel (gibt Elektronen leicht ab)",
            "Welches Metall hat den negativsten E°-Wert?",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: "ch-11-03",
      title: "Elektrolyse und Nernst-Gleichung",
      content: `## Elektrolyse — Grundprinzip

Bei der Elektrolyse wird eine **nicht spontane** Redox-Reaktion durch Anlegen einer externen elektrischen Spannung erzwungen. Eine externe Gleichspannungsquelle "pumpt" Elektronen gegen das natürliche Potenzial.

- **Anode** (mit Plusspannungsquelle verbunden): Oxidation
- **Kathode** (mit Minuspannungsquelle verbunden): Reduktion

Die mindestens nötige Spannung (Zersetzungsspannung) muss gleich oder größer als |E°_Zelle| der Gesamtreaktion sein. In der Praxis ist etwas mehr Spannung nötig (Überspannung).

## Faraday-Gesetze

Das **1. Faraday-Gesetz:** Die abgeschiedene Masse m ist proportional zur geflossenen Ladungsmenge Q:
**m = M · Q / (z · F)**

mit:
- M = Molare Masse (g/mol)
- Q = I · t = Ladung (Coulomb)
- z = Anzahl übertragener Elektronen
- F = Faraday-Konstante = 96485 C/mol ≈ 96500 C/mol

**Beispiel:** Abscheidung von Cu bei Elektrolyse: Cu²⁺ + 2e⁻ → Cu (z=2). Mit Q = 1930 C wird m = 64 g/mol × 1930 / (2 × 96500) = 0,64 g Cu abgeschieden.

## Nernst-Gleichung

Das Normalpotenzial E° gilt nur unter Standardbedingungen. Unter realen Bedingungen gilt die **Nernst-Gleichung:**

**E = E° − (RT / z·F) · ln(c_Red / c_Ox)**

Bei 25 °C vereinfacht: E = E° − (0,059 V / z) · log(c_Red / c_Ox)

Qualitativ: Erhöhte Konzentration des oxidierten Zustands → E steigt; erhöhte Konzentration des reduzierten Zustands → E sinkt.

## Praktische Anwendungen der Elektrolyse

- **Chlor-Alkali-Verfahren:** Elektrolyse von NaCl-Lösung → Cl₂ (Anode), NaOH + H₂ (Kathode)
- **Aluminium-Herstellung:** Schmelzflusselektrolyse von Al₂O₃ (Hall-Héroult-Verfahren)
- **Galvanik:** Elektrolytische Beschichtung (Verchromung, Vergoldung)
- **Wasserelektrolyse:** 2H₂O → 2H₂ + O₂ (Grüner Wasserstoff)`,
      lernziele: [
        "Das Prinzip der Elektrolyse und die Rolle von Anode und Kathode erläutern",
        "Die Faraday-Gesetze für die Berechnung abgeschiedener Massen anwenden",
        "Die Nernst-Gleichung qualitativ interpretieren können",
      ],
      sections: [
        {
          heading: "Faraday-Gesetze — Berechnung und Bedeutung",
          text: "Die Faraday-Gesetze verbinden elektrische Ladung mit der Stoffmenge bei elektrolytischen Prozessen. Die Faraday-Konstante F = 96485 C/mol entspricht der Ladung eines Mols Elektronen (F = e × N_A, wobei e = 1,602 × 10⁻¹⁹ C und N_A = 6,022 × 10²³ mol⁻¹). Für die Abscheidung von 1 mol eines zweiwertigen Metalls (z.B. Cu²⁺) werden 2 × F = 193000 C benötigt. Praktisch: Aus der gemessenen Stromstärke I (Ampere) und Elektrolysedauer t (Sekunden) berechnet man Q = I·t und dann die abgeschiedene Masse. Diese Beziehung gilt exakt und wird für präzise elektrochemische Messungen (z.B. Coulometrie) genutzt.",
          merksatz: "m = M·Q/(z·F); F = 96500 C/mol; Q = I·t",
        },
        {
          heading: "Nernst-Gleichung und biologische Membranpotenziale",
          text: "Die Nernst-Gleichung beschreibt, wie das Gleichgewichtspotenzial einer Elektrode von der Konzentration der beteiligten Ionen abhängt. Biologisch direkt relevant: Das Membranpotenzial einer Nervenzelle kann mit der Nernst-Gleichung für K⁺ berechnet werden. Für K⁺ (z = 1): E_K = −(RT/F) · ln([K⁺]_innen / [K⁺]_außen) ≈ −0,059 · log(150/5) ≈ −90 mV. Das Ruhemembranpotenzial von ca. −70 mV liegt nahe dem Kalium-Gleichgewichtspotenzial (−90 mV). Die Goldman-Gleichung erweitert das Konzept auf mehrere Ionen gleichzeitig.",
          merksatz: "Nernst qualitativ: hohe [Ox] → E↑; hohe [Red] → E↓",
        },
      ],
      merksätze: [
        "Elektrolyse: erzwungene Redox, externe Spannung nötig",
        "Faraday: m = M·Q/(z·F); Q = I·t",
        "Nernst: E = E° − (0,059/z) · log([Red]/[Ox])",
      ],
      klinischerBezug: "Blutglucosemessgeräte nutzen elektrochemische Prinzipien: Glucose-Oxidase oxidiert Glucose → H₂O₂ → elektrochemisch messbarer Strom proportional zur Glucosekonzentration. pH-Elektroden (Glaselektrode) in Blutgasanalysegeräten messen das Membranpotenzial und berechnen daraus [H⁺] = pH.",
      altfrage: {
        question: "Welche Masse Kupfer wird bei einer Elektrolyse mit Q = 9650 C abgeschieden? (M(Cu)=64 g/mol, z=2, F=96500 C/mol)",
        answer: "m = M·Q/(z·F) = 64 g/mol × 9650 C / (2 × 96500 C/mol) = 617600 / 193000 = 3,2 g. Es werden also 3,2 g Kupfer abgeschieden.",
      },
      selfTest: [
        {
          question: "Was ist bei der Elektrolyse an der Kathode?",
          options: [
            "Oxidation findet statt; Kathode ist mit Plusspannungsquelle verbunden",
            "Reduktion findet statt; Kathode ist mit Minuspannungsquelle verbunden",
            "Anode und Kathode wechseln bei Elektrolyse die Rollen",
            "An der Kathode entsteht immer Sauerstoff",
            "Die Kathode löst sich auf",
          ],
          correctIndex: 1,
          explanation: "Bei der Elektrolyse findet an der Kathode (mit Minus der Spannungsquelle verbunden) Reduktion statt — Elektronen werden zu positiv geladenen Ionen geliefert. An der Anode (Plusspannungsquelle) findet Oxidation statt. Merksatz: Kathode = Reduktion (gilt für galvanische und Elektrolysezelle). An der Kathode entsteht H₂ (bei Wasserelektrolyse) oder Metall wird abgeschieden.",
          hints: [
            "Kathode = Reduktion (immer, in beiden Zelltypen)",
            "Die Minus-Elektrode liefert Elektronen",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Mit welchem Strom I und welcher Dauer t muss man Silber (Ag, M=108 g/mol, z=1) elektrolytisch abscheiden, um 5,4 g zu erhalten? (F=96500 C/mol, I=1A)",
          options: [
            "t = 4825 s",
            "t = 9650 s",
            "t = 19300 s",
            "t = 1000 s",
            "t = 48250 s",
          ],
          correctIndex: 0,
          explanation: "Faraday: m = M·Q/(z·F) → Q = m·z·F/M = 5,4 g × 1 × 96500 C/mol / 108 g/mol = 521100 / 108 = 4825 C. Bei I = 1 A gilt Q = I·t → t = Q/I = 4825 C / 1 A = 4825 s ≈ 80 min.",
          hints: [
            "Aus m = M·Q/(z·F) folgt Q = m·z·F/M",
            "t = Q/I",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Die Nernst-Gleichung lautet E = E° − (0,059/z) · log([Red]/[Ox]). Was passiert mit E, wenn [Ox] steigt?",
          options: [
            "E sinkt",
            "E steigt",
            "E bleibt gleich",
            "E wird negativ",
            "z muss auch steigen",
          ],
          correctIndex: 1,
          explanation: "In der Nernst-Gleichung steht [Red]/[Ox] im Logarithmus. Wenn [Ox] steigt (bei konstantem [Red]), sinkt der Quotient [Red]/[Ox] → log([Red]/[Ox]) wird negativer → der subtrahierte Term wird weniger positiv (oder negativer) → E steigt. Anschaulich: Mehr Oxidationsmittel = höheres Oxidationspotenzial = höheres E.",
          hints: [
            "Quotient [Red]/[Ox]: wenn [Ox] steigt, wird der Quotient kleiner",
            "E = E° minus etwas: wenn etwas kleiner wird, steigt E",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Produkt entsteht bei der Elektrolyse von NaCl-Lösung an der Anode?",
          options: [
            "Na (Natrium-Metall)",
            "H₂ (Wasserstoff)",
            "Cl₂ (Chlorgas)",
            "NaOH (Natronlauge)",
            "O₂ (Sauerstoff)",
          ],
          correctIndex: 2,
          explanation: "Im Chlor-Alkali-Verfahren: An der Anode (Oxidation) werden Cl⁻-Ionen oxidiert: 2Cl⁻ → Cl₂ + 2e⁻. An der Kathode (Reduktion) entsteht H₂ und OH⁻: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Das NaOH (aus Na⁺ + OH⁻) reichert sich in der Kathoden-Kammer an. Chlor ist ein wichtiges Industrieprodukt (Kunststoffe, Desinfektionsmittel).",
          hints: [
            "Anode = Oxidation; welches Anion ist in NaCl-Lösung?",
            "Cl⁻ wird bei der Elektrolyse oxidiert zu Cl₂",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was besagt das 1. Faraday-Gesetz?",
          options: [
            "Bei gleicher Spannung werden gleiche Massen abgeschieden",
            "Die abgeschiedene Masse ist proportional zur geflossenen Ladung",
            "Alle Stoffe werden bei F = 96500 C in gleicher Menge abgeschieden",
            "Elektrolyse funktioniert nur mit Gleichstrom",
            "Die Reaktion ist proportional zur Temperatur",
          ],
          correctIndex: 1,
          explanation: "Das 1. Faraday-Gesetz: Die bei der Elektrolyse abgeschiedene (oder aufgelöste) Masse m ist proportional zur geflossenen elektrischen Ladung Q (= I·t). m = M·Q/(z·F). Bei doppelter Ladung wird doppelte Masse abgeschieden. Das 2. Faraday-Gesetz: Bei gleicher Ladung werden äquivalente Stoffmengen abgeschieden.",
          hints: [
            "Mehr Ladung = mehr abgeschiedene Masse",
            "m = M·Q/(z·F) — Q ist proportional zu m",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: "ch-11-04",
      title: "Redox-Reaktionen in der Biologie",
      content: `## Biologische Redox-Systeme: Überblick

Biologische Redox-Reaktionen sind die Grundlage der Energiegewinnung in lebenden Zellen. Die wichtigsten biologischen Redox-Paare und ihre Normalpotenziale:

| Redox-Paar | E° (V) |
|---|---|
| NAD⁺/NADH | −0,32 |
| FADH₂/FAD | −0,18 |
| Ubichinon (Q/QH₂) | +0,04 |
| Cytochrom c (Fe³⁺/Fe²⁺) | +0,25 |
| O₂/H₂O | +0,82 |

## Atmungskette und ATP-Synthese

Die Atmungskette transportiert Elektronen von NADH (E° = −0,32 V) auf O₂ (E° = +0,82 V):

**ΔE° = +0,82 − (−0,32) = +1,14 V**

Die freie Energie: ΔG° = −n·F·ΔE° = −2 × 96485 × 1,14 = −220 kJ/mol

Diese Energie wird genutzt, um über die ATP-Synthase ATP zu erzeugen. Pro NADH entstehen ca. 2,5 ATP (früher: 3 ATP), pro FADH₂ ca. 1,5 ATP.

## Lichtreaktion der Photosynthese

In der Photosynthese laufen ebenfalls Redox-Reaktionen ab: Licht regt Chlorophyll an → Elektronen werden aus H₂O herausgelöst (Oxidation: 2H₂O → O₂ + 4H⁺ + 4e⁻). Die Elektronen reduzieren NADP⁺ zu NADPH. Die freigesetzten Elektronen werden über Plastochinon, Cytochrom b6f, Plastocyanin transportiert.

## Reaktive Sauerstoffspezies (ROS)

Bei der unvollständigen Reduktion von O₂ entstehen **reaktive Sauerstoffspezies (ROS):**
- Superoxid: O₂·⁻ (1 e⁻ auf O₂)
- Wasserstoffperoxid: H₂O₂ (2 e⁻)
- Hydroxylradikal: ·OH (3 e⁻, aggressivste ROS)

ROS schädigen DNA, Proteine und Lipide (oxidativer Stress). **Antioxidantien** neutralisieren ROS:
- Vitamin C (Ascorbinsäure, wasserlöslich, reagiert direkt mit ROS)
- Vitamin E (fettlöslich, schützt Membranen)
- Enzymatisch: Superoxiddismutase (SOD), Katalase, Glutathionperoxidase

## Cytochrom P450

Die Cytochrom-P450-Familie sind Hämenzyme, die NADPH und O₂ für Hydroxylierungen nutzen (Monooxygenase-Reaktion). Wichtig für Fremdstoffmetabolismus (Phase-I-Metabolismus) in der Leber.`,
      lernziele: [
        "Die Atmungskette als Redox-Reaktionskette von NADH auf O₂ beschreiben und ΔE° berechnen",
        "Reaktive Sauerstoffspezies (ROS) benennen und den Schutzmechanismus durch Antioxidantien erklären",
        "Die Rolle von NAD⁺/NADH als biologisches Redox-Coenzym verstehen",
      ],
      sections: [
        {
          heading: "NADH/NAD⁺ als zentrales Redox-Coenzym",
          text: "Nicotinamidadenindinukleotid (NAD) ist das wichtigste lösliche Redox-Coenzym des Zellstoffwechsels. NAD⁺ nimmt 2 Elektronen und 1 Proton auf: NAD⁺ + 2H⁺ + 2e⁻ → NADH + H⁺. E° = −0,32 V (gutes Reduktionsmittel). In der Glycolyse und im Citratzyklus wird NADH gebildet. In der Atmungskette wird NADH reoxidiert (gibt Elektronen an Komplex I = NADH-Dehydrogenase). Das entstehende NAD⁺ steht für weitere katabole Reaktionen zur Verfügung. NADPH (Phosphatform) ist hauptsächlich in anabolen Reaktionen aktiv (Fettsäure-Synthese, Glutathion-Reduktion, P450-Reaktionen).",
          merksatz: "NAD⁺ nimmt 2e⁻ + H⁺ auf → NADH; E° = −0,32 V",
        },
        {
          heading: "Antioxidantive Abwehr",
          text: "Der Körper verfügt über enzymatische und nicht-enzymatische Antioxidantien. Enzymatisch: Superoxiddismutase (SOD, Cu/Zn-haltig) wandelt O₂·⁻ in H₂O₂ um; Katalase (Fe-haltig, in Peroxisomen) zersetzt H₂O₂ in H₂O + O₂; Glutathionperoxidase (Se-haltig) reduziert H₂O₂ und Lipidperoxide. Nicht-enzymatisch: Vitamin C (reagiert direkt mit ROS), Vitamin E (in Membranlipiden, fängt Lipidperoxylradikale), β-Carotin, Glutathion (GSH). Oxidativer Stress (ROS > Antioxidantien) ist an Arteriosklerose, Neurodegeneration und Krebs beteiligt. Paradoxerweise sind ROS in niedrigen Konzentrationen physiologische Signalmoleküle (z.B. bei Entzündung).",
          merksatz: "SOD → Katalase → Glutathionperoxidase: enzymatische ROS-Abwehr",
        },
      ],
      merksätze: [
        "Atmungskette: NADH (−0,32V) → O₂ (+0,82V), ΔE°=1,14V → ~2,5 ATP",
        "ROS: O₂·⁻ → H₂O₂ → ·OH; Antioxidantien: Vit. C/E, SOD, Katalase",
        "NADH = gutes Reduktionsmittel (E°=−0,32V); O₂ = gutes Oxidationsmittel",
      ],
      klinischerBezug: "Acetaminophen (Paracetamol)-Überdosierung erschöpft Glutathion (GSH) in der Leber → reaktiver Metabolit NAPQI akkumuliert → hepatozelluläre Nekrose. Therapie: N-Acetylcystein (NAC) als GSH-Vorstufe. ROS-Beteiligung bei Ischämie-Reperfusion: Wiederdurchblutung nach Herzinfarkt erzeugt massiven oxidativen Stress (Reperfusionsschaden).",
      altfrage: {
        question: "Warum ist die Atmungskette eine Redox-Reaktionskette?",
        answer: "In der Atmungskette werden Elektronen aus NADH (E° = −0,32 V) über mehrere Elektronenüberträger (Ubichinon, Cytochrome) schrittweise auf O₂ (E° = +0,82 V) übertragen. Jede Übertragung ist eine Redox-Reaktion (Elektronendonor wird oxidiert, Elektronenakzeptor reduziert). Die Gesamtspannung ΔE° = 1,14 V wird zur ATP-Synthese genutzt.",
      },
      selfTest: [
        {
          question: "Welches Normalpotenzial hat das Redox-Paar NAD⁺/NADH?",
          options: [
            "E° = +0,82 V",
            "E° = +0,25 V",
            "E° = −0,32 V",
            "E° = 0,00 V",
            "E° = −3,04 V",
          ],
          correctIndex: 2,
          explanation: "Das Redox-Paar NAD⁺/NADH hat E° = −0,32 V. Das negative Potenzial zeigt, dass NADH ein gutes Reduktionsmittel ist (gibt Elektronen leicht ab). Im Vergleich: O₂/H₂O hat E° = +0,82 V (gutes Oxidationsmittel). Die Differenz ΔE° = 0,82 − (−0,32) = 1,14 V treibt die Elektronenübertragung in der Atmungskette an.",
          hints: [
            "Niedriges E° = gutes Reduktionsmittel",
            "NADH überträgt Elektronen auf O₂ — welches hat höheres E°?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche ROS ist die reaktivste (aggressivste)?",
          options: [
            "Superoxid O₂·⁻",
            "Singulett-Sauerstoff ¹O₂",
            "Hydroxylradikal ·OH",
            "Wasserstoffperoxid H₂O₂",
            "Peroxynitrit ONOO⁻",
          ],
          correctIndex: 2,
          explanation: "Das Hydroxylradikal (·OH) ist die reaktivste ROS. Es entsteht aus H₂O₂ + Fe²⁺ (Fenton-Reaktion) und reagiert sofort mit jeder biologischen Molekülklasse (DNA, Proteine, Lipide) in unmittelbarer Nähe. Im Gegensatz zu H₂O₂ oder O₂·⁻ kann ·OH nicht durch spezifische Enzyme entgiftet werden und muss durch nicht-enzymatische Antioxidantien (Vit. C, E) abgefangen werden.",
          hints: [
            "Mehr Elektronen = mehr Reaktivität? (O₂·⁻ = 1e⁻, H₂O₂ = 2e⁻, ·OH = 3e⁻)",
            "Welche ROS kann nicht enzymatisch entgiftet werden?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was berechnet sich als ΔE° der Atmungskette (NADH zu O₂)?",
          options: [
            "ΔE° = +0,50 V",
            "ΔE° = +1,14 V",
            "ΔE° = −1,14 V",
            "ΔE° = +0,32 V",
            "ΔE° = +0,82 V",
          ],
          correctIndex: 1,
          explanation: "ΔE° = E°(Oxidationsmittel) − E°(Reduktionsmittel) = E°(O₂/H₂O) − E°(NAD⁺/NADH) = +0,82 V − (−0,32 V) = +1,14 V. Positives ΔE° bedeutet spontane Reaktion (Elektronen fließen von NADH zu O₂). Die Energie ΔG° = −n·F·ΔE° ≈ −220 kJ pro mol NADH wird zur ATP-Synthese genutzt.",
          hints: [
            "ΔE° = E°_Kathode − E°_Anode = E°(O₂/H₂O) − E°(NAD⁺/NADH)",
            "E°(O₂) = +0,82 V; E°(NAD⁺/NADH) = −0,32 V",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Enzym entgiftet H₂O₂ in Peroxisomen?",
          options: [
            "Superoxiddismutase (SOD)",
            "Glutathionperoxidase",
            "Katalase",
            "Cytochrom-c-Oxidase",
            "NADPH-Oxidase",
          ],
          correctIndex: 2,
          explanation: "Katalase (mit Fe im aktiven Zentrum) baut H₂O₂ in Peroxisomen ab: 2H₂O₂ → 2H₂O + O₂. Sie ist eines der effizientesten Enzyme (k_cat ≈ 10⁷ /s). SOD wandelt O₂·⁻ → H₂O₂ um (das dann Katalase oder Glutathionperoxidase weiterverarbeitet). Glutathionperoxidase reduziert H₂O₂ im Zytoplasma unter Verbrauch von GSH.",
          hints: [
            "Katalase baut H₂O₂ in Peroxisomen ab",
            "SOD, Katalase, Glutathionperoxidase — sequentielle ROS-Abwehr",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist NADPH besonders wichtig für den Schutz vor oxidativem Stress?",
          options: [
            "NADPH überträgt Elektronen direkt auf ROS",
            "NADPH regeneriert reduziertes Glutathion (GSH) über Glutathionreduktase",
            "NADPH ist ein stärkeres Antioxidans als Vitamin C",
            "NADPH bildet H₂O₂ aus O₂",
            "NADPH inhibiert die Atmungskette",
          ],
          correctIndex: 1,
          explanation: "Glutathionreduktase nutzt NADPH, um oxidiertes Glutathion (GSSG) wieder in reduziertes Glutathion (GSH) umzuwandeln: GSSG + NADPH → 2GSH + NADP⁺. GSH ist ein wichtiges Antioxidans. Bei G6PD-Mangel (glucose-6-phosphate dehydrogenase) fehlt NADPH aus dem Pentosephosphatweg → weniger GSH → Erythrozyten anfällig für oxidativen Stress → hämolytische Anämie.",
          hints: [
            "NADPH → GSH (Glutathionreduktase)",
            "G6PD-Mangel führt zu NADPH-Mangel und hämolytischer Anämie",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
