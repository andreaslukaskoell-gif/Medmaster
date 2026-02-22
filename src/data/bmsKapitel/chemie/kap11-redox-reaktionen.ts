import type { Kapitel } from "../types";

export const chemKap11: Kapitel = {
  id: "chem-kap11",
  title: "Redox-Reaktionen",
  subject: "chemie",
  icon: "⚡",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ch-11-01",
      title: "Oxidation und Reduktion — Grundlagen",
      content: `## Definitionen: OIL RIG

Oxidation und Reduktion sind die grundlegendsten Elektronenübertragungsreaktionen der Chemie. Die Eselsbrücke **OIL RIG** fasst beide Prozesse zusammen: **O**xidation **I**s **L**oss (Oxidation = Elektronenverlust), **R**eduction **I**s **G**ain (Reduktion = Elektronengewinn). Beide Prozesse laufen stets gleichzeitig und gekoppelt ab — es kann keine Oxidation ohne gleichzeitige Reduktion geben.

Das Teilchen, das Elektronen **abgibt** und dabei oxidiert wird, heißt **Reduktionsmittel** (RM), weil es das andere Teilchen reduziert. Das Teilchen, das Elektronen **aufnimmt** und dabei reduziert wird, heißt **Oxidationsmittel** (OM), weil es das andere Teilchen oxidiert. Im klassischen Beispiel Zn + Cu²⁺ → Zn²⁺ + Cu ist Zink das Reduktionsmittel (gibt 2e⁻ ab) und Cu²⁺ das Oxidationsmittel (nimmt 2e⁻ auf).

## Oxidationszahlen (Oxidationsstufen)

Oxidationszahlen (OZ) sind formale, hypothetische Ladungen, die einem Atom zugewiesen werden, als wären alle Bindungen vollständig ionisch. Sie erlauben es, Elektronenverschiebungen in kovalenten Molekülen zu verfolgen, ohne tatsächliche Ladungen zu berechnen.

**Regeln zur Bestimmung der OZ (Prioritätsreihenfolge):**
1. Reine Elemente: OZ = 0 (z. B. Fe, Cl₂, O₃ — jedes Atom hat OZ = 0)
2. Einatomige Ionen: OZ = Ionenladung (Fe²⁺ → OZ = +2; Cl⁻ → OZ = −1)
3. Fluor: immer OZ = −1 (elektronegativste Element aller)
4. Sauerstoff: OZ = −2 (Ausnahmen: Peroxide wie H₂O₂ → OZ = −1; Superoxide O₂⁻ → OZ = −1/2; OF₂ → OZ = +2)
5. Wasserstoff: OZ = +1 in Verbindungen mit Nichtmetallen; OZ = −1 in Metallhydriden (NaH, CaH₂)
6. Summenregel: Summe aller OZ × Atomanzahl = Gesamtladung des Teilchens (0 bei Neutralmolekül)

**Praxisbeispiele:**
- H₂SO₄: 2(+1) + OZ(S) + 4(−2) = 0 → OZ(S) = **+6**
- HNO₃: (+1) + OZ(N) + 3(−2) = 0 → OZ(N) = **+5**
- KMnO₄: (+1) + OZ(Mn) + 4(−2) = 0 → OZ(Mn) = **+7**
- K₂Cr₂O₇: 2(+1) + 2·OZ(Cr) + 7(−2) = 0 → OZ(Cr) = **+6**
- Na₂S₂O₃: 2(+1) + 2·OZ(S) + 3(−2) = 0 → OZ(S) = **+2** (Thiosulfat)

## Aufstellen von Redox-Gleichungen (Halbreaktion-Methode)

**Schritte (saures Medium):**
1. Oxidations- und Reduktions-Halbreaktionen separat aufschreiben
2. Atome (außer H und O) ausgleichen
3. O-Atome mit H₂O ausgleichen
4. H-Atome mit H⁺ ausgleichen
5. Elektronen ergänzen, um Ladungsbalance herzustellen
6. Elektronen durch Multiplikation der Halbreaktionen angleichen
7. Halbreaktionen addieren und kürzen

**Beispiel (sauer): MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺**
- Reduktion: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
- Oxidation: Fe²⁺ → Fe³⁺ + 1e⁻ (×5)
- Gesamt: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O

**Basisches Medium:** H⁺ durch H₂O/OH⁻ ersetzen — für jedes H⁺ auf einer Seite wird auf der anderen OH⁻ addiert, und H₂O auf der H⁺-Seite.

## Disproportionierung und Komproportionierung

Bei der **Disproportionierung** reagiert ein Element gleichzeitig als Oxidans und Reduktans: Das gleiche Element wird teils oxidiert, teils reduziert. Beispiel: 2H₂O₂ → 2H₂O + O₂. O hat in H₂O₂ OZ = −1; im Produkt H₂O hat O OZ = −2 (Reduktion) und in O₂ hat O OZ = 0 (Oxidation). Auch Chlor disproportioniert in Lauge: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O.

Bei der **Komproportionierung** (Synproportionierung) reagieren zwei verschiedene Oxidationsstufen desselben Elements zur einheitlichen Mittelstufe: Cu⁰ + Cu²⁺ → 2Cu⁺ oder 5HNO₂ + 2KMnO₄ → ... (N: +3 geht teilweise zu +5).`,
      lernziele: [
        "Oxidation und Reduktion mithilfe des Elektronen-Konzepts (OIL RIG) definieren und anwenden",
        "Oxidationszahlen für beliebige Verbindungen nach den Prioritätsregeln systematisch bestimmen",
        "Redox-Gleichungen mit der Halbreaktion-Methode in saurer und basischer Lösung aufstellen und ausgleichen",
        "Starke Oxidations- und Reduktionsmittel benennen und ihre Bedeutung in Biologie und Medizin erläutern",
        "Disproportionierungs- und Komproportionierungsreaktionen erkennen und beschreiben",
      ],
      sections: [
        {
          heading: "OIL RIG — Die Grundregel",
          text: "Oxidation ist Elektronenabgabe (OIL = Oxidation Is Loss), Reduktion ist Elektronenaufnahme (RIG = Reduction Is Gain). Reduktionsmittel wird oxidiert; Oxidationsmittel wird reduziert. Beide Prozesse sind stets gekoppelt: Kein Elektron kann abgegeben werden, ohne dass ein anderes Teilchen es aufnimmt. Die OZ-Änderung zeigt, wer was tut: steigende OZ = Oxidation, sinkende OZ = Reduktion.",
          merksatz:
            "OIL RIG: Oxidation Is Loss — Reduction Is Gain. Das Reduktionsmittel wird selbst oxidiert.",
        },
        {
          heading: "Oxidationszahlen systematisch bestimmen",
          text: "Die sechs Prioritätsregeln erlauben es, OZ auch in komplexen Molekülen zu berechnen. Fluorid hat immer −1, Sauerstoff fast immer −2 (Ausnahmen: Peroxide −1, OF₂ +2). Die Summe aller OZ × Atomanzahl ergibt die Gesamtladung. Beispiel: In Cr₂O₇²⁻ gilt 2·OZ(Cr) + 7·(−2) = −2, also OZ(Cr) = +6.",
          merksatz: "Summenregel: Σ(OZ × n) = Gesamtladung. Bei Neutralmolekülen = 0.",
        },
        {
          heading: "Halbreaktion-Methode",
          text: "Redox-Gleichungen werden in zwei Halbreaktionen zerlegt und separat ausgeglichen: Atome → O mit H₂O → H mit H⁺ → Ladung mit e⁻. Dann werden die Elektronen durch Multiplikation angeglichen und die Halbreaktionen addiert. Im basischen Medium wird H⁺ durch H₂O/OH⁻ ersetzt.",
          merksatz:
            "Halbreaktionen-Reihenfolge: erst Atome, dann O (H₂O), dann H (H⁺), dann Ladung (e⁻) ausgleichen.",
        },
        {
          heading: "Disproportionierung vs. Komproportionierung",
          text: "Disproportionierung: Ein Element wird gleichzeitig oxidiert und reduziert → zwei Produkte mit verschiedenen OZ (z. B. 2H₂O₂ → H₂O + O₂). Komproportionierung: Zwei verschiedene OZ desselben Elements reagieren zur Mittelstufe (z. B. Cu⁰ + Cu²⁺ → 2Cu⁺). Klinisch: Superoxiddismutase (SOD) katalysiert die Disproportionierung von O₂·⁻ zu H₂O₂ und O₂.",
          merksatz:
            "Disproportionierung: gleiches Element → zwei verschiedene OZ-Produkte. Komproportionierung: Umkehrung davon.",
        },
      ],
      merksätze: [
        "OIL RIG: Oxidation Is Loss (e⁻), Reduction Is Gain (e⁻)",
        "Reduktionsmittel wird oxidiert; Oxidationsmittel wird reduziert",
        "OZ-Regel: F immer −1; O meist −2 (Peroxide: −1; OF₂: +2); H meist +1 (Hydride: −1)",
        "Summe der OZ × Atomanzahl = Gesamtladung des Teilchens",
        "Halbreaktion-Reihenfolge: Atome → O (H₂O) → H (H⁺) → e⁻",
        "KMnO₄: Mn +7 → +2 (sauer, 5e⁻) oder → +4 (neutral, 3e⁻) oder → +6 (basisch, 1e⁻)",
        "K₂Cr₂O₇: Cr +6 → +3 (3e⁻ pro Cr-Atom, 6e⁻ pro Formeleinheit)",
        "Disproportionierung: dasselbe Element wird gleichzeitig oxidiert UND reduziert",
        "NADH und FADH₂ sind die wichtigsten biologischen Reduktionsmittel (Atmungskette)",
        "Stärkstes Oxidationsmittel: F₂; stärkstes Reduktionsmittel: Li (nach elektrochemischer Spannungsreihe)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Konzept der Oxidationszahlen: Wie werden sie bestimmt, und welche Bedeutung haben sie für das Erkennen von Redox-Reaktionen? Geben Sie zwei Beispiele aus der anorganischen Chemie.",
        answer:
          "Oxidationszahlen (OZ) sind formale Ladungen, die Atomen in Verbindungen zugewiesen werden, als wären alle Bindungen vollständig ionisch — auch in kovalenten Molekülen. Sie sind ein Buchführungsinstrument, um Elektronenverschiebungen zu verfolgen, aber keine echten Ladungen. Die Bestimmung folgt einer Prioritätsreihenfolge: (1) Reine Elemente haben OZ = 0; (2) einatomige Ionen haben OZ = Ionenladung; (3) F ist immer −1; (4) O ist meist −2 (Ausnahmen: Peroxide −1, OF₂ +2); (5) H ist meist +1 (Ausnahme: Metallhydride −1); (6) die Summe aller OZ × Atomanzahl ergibt die Gesamtladung. Für das Erkennen von Redox-Reaktionen gilt: Erhöht sich die OZ eines Atoms von Edukt zu Produkt, wurde es oxidiert; sinkt sie, wurde es reduziert. Beispiel 1: In der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu steigt OZ(Zn) von 0 auf +2 (Oxidation) und sinkt OZ(Cu) von +2 auf 0 (Reduktion) — eine klassische Galvanische Reaktion. Beispiel 2: In KMnO₄ hat Mn OZ = +7; in MnSO₄ (saures Medium) hat Mn OZ = +2 — eine Reduktion um 5 Einheiten, also 5 Elektronen pro Mn aufgenommen. Anhand der OZ-Änderungen lässt sich sofort ablesen, welches Teilchen oxidiert und welches reduziert wird, und wie viele Elektronen übertragen werden — Grundlage für die stöchiometrische Auswertung von Redox-Titrationen.",
      },
      klinischerBezug:
        "Redox-Reaktionen sind die Grundlage der zellulären Energiegewinnung: In der mitochondrialen Atmungskette werden Elektronen von NADH und FADH₂ schrittweise auf O₂ übertragen, wobei ein Protonengradient für die ATP-Synthese aufgebaut wird. Die unkontrollierte Oxidation körpereigener Moleküle durch reaktive Sauerstoffspezies (ROS) führt zu oxidativem Stress, der mit Arteriosklerose, Krebs und Neurodegeneration assoziiert ist. Antioxidantien wie Vitamin C (Ascorbinsäure) und Vitamin E wirken als Reduktionsmittel und neutralisieren ROS durch Elektronenabgabe.",
      selfTest: [
        {
          question: "Welche Aussage zur Oxidation ist korrekt?",
          options: [
            "Oxidation ist die Aufnahme von Elektronen",
            "Oxidation ist die Abgabe von Elektronen",
            "Oxidation erniedrigt die Oxidationszahl eines Atoms",
            "Oxidation und Reduktion können unabhängig voneinander ablaufen",
            "Das Oxidationsmittel wird bei der Reaktion oxidiert",
          ],
          correctIndex: 1,
          explanation:
            "Oxidation bedeutet Elektronenabgabe (OIL = Oxidation Is Loss). Ein Atom, das Elektronen abgibt, wird oxidiert — seine Oxidationszahl steigt. Das Teilchen, das Elektronen abgibt, heißt Reduktionsmittel (da es das andere Teilchen reduziert). Oxidation und Reduktion laufen stets gleichzeitig ab — Elektronen können nicht frei existieren, sie müssen sofort von einem anderen Teilchen aufgenommen werden. Das Oxidationsmittel nimmt Elektronen auf und wird dabei selbst reduziert, nicht oxidiert.",
          hints: [
            "OIL RIG: Oxidation Is Loss, Reduction Is Gain — welcher Buchstabe steht für Elektronenabgabe?",
            "Wenn OZ steigt → Oxidation; wenn OZ sinkt → Reduktion",
          ],
          difficulty: 1,
          tags: ["oxidation", "oil-rig", "elektronen-abgabe"],
        },
        {
          question: "Welche Oxidationszahl hat Schwefel in H₂SO₄?",
          options: ["+2", "+4", "+6", "−2", "0"],
          correctIndex: 2,
          explanation:
            "In H₂SO₄ gilt die Summenregel: Gesamtladung = 0. H hat OZ = +1 (×2 = +2), O hat OZ = −2 (×4 = −8). Also: +2 + OZ(S) + (−8) = 0 → OZ(S) = +6. Schwefel erreicht hier seine höchste Oxidationsstufe (+6), weshalb konzentrierte H₂SO₄ ein starkes Oxidationsmittel ist. Zum Vergleich: In H₂S hat S OZ = −2 (starkes Reduktionsmittel); in SO₂ hat S OZ = +4; in S₈ hat S OZ = 0.",
          hints: [
            "Summenregel: Σ(OZ × n) = 0 für Neutralmolekül",
            "H hat OZ +1, O hat OZ −2 — berechne dann S aus der Gleichung",
          ],
          difficulty: 1,
          tags: ["oxidationszahl", "h2so4", "summenregel"],
        },
        {
          question:
            "Bei der Reaktion: 2KMnO₄ + 5H₂O₂ + 3H₂SO₄ → 2MnSO₄ + 5O₂ + K₂SO₄ + 8H₂O — welche Teilchen werden oxidiert?",
          options: [
            "Mn in KMnO₄ (von +7 auf +2)",
            "O in H₂O₂ (von −1 auf 0 in O₂)",
            "S in H₂SO₄ (von +6 auf +4)",
            "H in H₂SO₄ (von +1 auf 0)",
            "K in KMnO₄ (von +1 auf 0)",
          ],
          correctIndex: 1,
          explanation:
            "In H₂O₂ hat O die Oxidationszahl −1 (Peroxid-Ausnahme!). Im Produkt O₂ haben die O-Atome OZ = 0. Da die OZ von −1 auf 0 steigt, wurden diese O-Atome oxidiert. H₂O₂ wirkt hier als Reduktionsmittel. Gleichzeitig wird Mn in KMnO₄ von +7 auf +2 reduziert (OZ sinkt = Reduktion). S und K ändern ihre OZ nicht. Diese Reaktion ist Grundlage der Permanganat-Rücktitration in der Analytik.",
          hints: [
            "Steigende OZ = Oxidation; sinkende OZ = Reduktion",
            "In H₂O₂ hat O die OZ −1 (Peroxid!), in O₂ hat O OZ = 0 — steigt oder sinkt die OZ?",
          ],
          difficulty: 2,
          tags: ["kmno4", "h2o2", "peroxid-oxidation"],
        },
        {
          question: "Welches der folgenden Teilchen ist das stärkste Oxidationsmittel?",
          options: ["Na⁺", "Zn²⁺", "F₂", "H₂", "NADH"],
          correctIndex: 2,
          explanation:
            "Fluor (F₂) ist das stärkste chemische Oxidationsmittel überhaupt, da Fluor die höchste Elektronegativität aller Elemente besitzt (EN = 3,98 nach Pauling). F₂ oxidiert praktisch alle anderen Substanzen. Na⁺ und Zn²⁺ sind bereits reduzierte Formen (Kationen) — sie sind schwächere Oxidationsmittel. H₂ und NADH sind Reduktionsmittel (sie geben Elektronen ab). Ein starkes Oxidationsmittel hat ein hohes Standardredoxpotenzial E° (F₂/F⁻: E° = +2,87 V).",
          hints: [
            "Oxidationsmittel nimmt Elektronen auf — welches Element zieht Elektronen am stärksten an?",
            "F ist das elektronegativste Element im Periodensystem",
          ],
          difficulty: 1,
          tags: ["oxidationsmittel", "fluor", "elektronegativität"],
        },
        {
          question: "Was versteht man unter Disproportionierung?",
          options: [
            "Ein Stoff reagiert mit einem anderen Stoff gleicher OZ",
            "Zwei verschiedene OZ eines Elements reagieren zur selben mittleren OZ",
            "Dasselbe Element wird im selben Reaktionsschritt gleichzeitig oxidiert und reduziert",
            "Ein starkes Oxidationsmittel reagiert mit einem starken Reduktionsmittel",
            "Eine Redox-Reaktion, bei der keine Elektronen übertragen werden",
          ],
          correctIndex: 2,
          explanation:
            "Disproportionierung bedeutet, dass ein Element in derselben Verbindung gleichzeitig als Oxidans und Reduktans fungiert: Es entstehen zwei Produkte mit höherer und niedrigerer OZ als im Ausgangsstoff. Klassisches Beispiel: 2H₂O₂ → 2H₂O + O₂. O hat in H₂O₂ OZ = −1; in H₂O hat O OZ = −2 (Reduktion) und in O₂ hat O OZ = 0 (Oxidation). Das Gegenteil — zwei verschiedene OZ reagieren zur Mittelstufe — heißt Komproportionierung (z. B. Cu⁰ + Cu²⁺ → 2Cu⁺).",
          hints: [
            "'Dis-' = Aufspaltung: das Element spaltet sich in zwei OZ-Produkte auf",
            "Beispiel: H₂O₂ → H₂O (O: −2) UND O₂ (O: 0) — zwei verschiedene OZ entstehen aus OZ −1",
          ],
          difficulty: 2,
          tags: ["disproportionierung", "h2o2", "selbstredox"],
        },
        {
          question: "Welche Oxidationszahl hat Stickstoff in HNO₂ (salpetrige Säure)?",
          options: ["+1", "+2", "+3", "+5", "−3"],
          correctIndex: 2,
          explanation:
            "In HNO₂ gilt: H hat +1, O hat −2 (×2 = −4). Summenregel: (+1) + OZ(N) + (−4) = 0 → OZ(N) = +3. Zum Vergleich: In HNO₃ hat N OZ = +5; in NH₃ hat N OZ = −3; in N₂ hat N OZ = 0; in NO hat N OZ = +2; in NO₂ hat N OZ = +4. Stickstoff zeigt damit eine Spanne von −3 bis +5. NO ist klinisch bedeutsam als Signalmolekül (endotheliale Vasodilatation, Neurotransmitter).",
          hints: [
            "H = +1, O = −2 in dieser Verbindung; Summe muss 0 ergeben",
            "N kann OZ von −3 bis +5 annehmen — HNO₂ liegt zwischen HNO₃ (+5) und NO (+2)",
          ],
          difficulty: 2,
          tags: ["oxidationszahl", "stickstoff", "hno2"],
        },
        {
          question: "Welche biologische Funktion erfüllen NADH und FADH₂ in der Zelle?",
          options: [
            "Sie liefern Phosphatgruppen für die DNA-Replikation",
            "Sie übertragen Elektronen in der Atmungskette auf O₂ und ermöglichen so ATP-Synthese",
            "Sie spalten Peptidbrücken durch Oxidation von Schwefelatomen",
            "Sie aktivieren Kinasen durch Phosphorylierung von Serin-Resten",
            "Sie transportieren CO₂ vom Gewebe zur Lunge",
          ],
          correctIndex: 1,
          explanation:
            "NADH und FADH₂ sind die zentralen Elektronenüberträger der Zellatmung. Sie werden im Citratzyklus und bei der Glykolyse durch Oxidation von Substraten gebildet und geben ihre Elektronen an die mitochondriale Atmungskette ab: NADH an Komplex I, FADH₂ an Komplex II. Die Elektronen fließen über Ubichinon, Komplex III, Cytochrom c und Komplex IV schließlich auf O₂, wobei H₂O entsteht. Der dabei aufgebaute Protonengradient treibt die ATP-Synthase an (Chemiosmose nach Mitchell). Pro Mol NADH entstehen ~2,5 Mol ATP, pro FADH₂ ~1,5 Mol ATP.",
          hints: [
            "NADH ist ein Reduktionsmittel — in welchem Kompartiment und an welchen Komplex gibt es Elektronen ab?",
            "Stichwort: Atmungskette, Chemiosmose, Protonengradient",
          ],
          difficulty: 2,
          tags: ["nadh", "fadh2", "atmungskette"],
        },
        {
          question: "In welchem der folgenden Fälle wirkt H₂O₂ als Oxidationsmittel?",
          options: [
            "H₂O₂ + KMnO₄ → O₂ + Mn²⁺ + ...",
            "H₂O₂ + 2KI → I₂ + 2KOH",
            "H₂O₂ + Cl₂ → O₂ + 2HCl",
            "2H₂O₂ → 2H₂O + O₂ (Disproportionierung)",
            "H₂O₂ + H₂S → S + 2H₂O (H₂O₂ nimmt Elektronen auf)",
          ],
          correctIndex: 1,
          explanation:
            "In der Reaktion H₂O₂ + 2KI → I₂ + 2KOH wird I⁻ (OZ = −1) zu I₂ (OZ = 0) oxidiert — die OZ steigt, also Oxidation. H₂O₂ nimmt die Elektronen auf, O geht von −1 zu −2, also Reduktion. H₂O₂ ist hier das Oxidationsmittel. Im Gegensatz dazu wirkt H₂O₂ gegenüber KMnO₄ (Antwort A) als Reduktionsmittel (Mn +7 oxidiert H₂O₂). Antwort E ist falsch formuliert — tatsächlich ist H₂O₂ dort das Oxidationsmittel, aber die Formulierung widerspricht sich. Diese Doppelrolle von H₂O₂ macht es biochemisch interessant: Es entsteht beim oxidativen Metabolismus und wird von Katalase abgebaut.",
          hints: [
            "H₂O₂ als OM: es nimmt Elektronen auf, O geht von −1 auf −2",
            "H₂O₂ als RM: es gibt Elektronen ab an ein stärkeres OM wie KMnO₄",
          ],
          difficulty: 3,
          tags: ["h2o2", "oxidationsmittel", "iodid-oxidation"],
        },
      ],
    },
    {
      id: "ch-11-02",
      title: "Elektrochemie — Galvanische Zellen und Elektrolyse",
      content: `## Galvanische Zellen (Voltasche Elemente)

Eine galvanische Zelle wandelt chemische Energie spontan in elektrische Energie um. Sie besteht aus zwei **Halbzellen** (Elektroden), die durch eine Salzbrücke oder ein Diaphragma verbunden sind. An der **Anode** findet Oxidation statt (das Metall löst sich auf oder Anionen werden oxidiert), an der **Kathode** findet Reduktion statt (Kationen werden abgeschieden).

**Aufbau eines Daniell-Elements (Zn/Cu-Zelle):**
- Anode (negativ): Zn → Zn²⁺ + 2e⁻ (Oxidation)
- Kathode (positiv): Cu²⁺ + 2e⁻ → Cu (Reduktion)
- Gesamt: Zn + Cu²⁺ → Zn²⁺ + Cu
- Zellspannung: E°Zelle = E°Kathode − E°Anode = +0,34 V − (−0,76 V) = **+1,10 V**

Die **Salzbrücke** (z. B. mit gesättigter KCl-Lösung) sorgt für Ladungsausgleich zwischen den Halbzellen, ohne die Elektroden-Lösungen zu vermischen. Ohne Salzbrücke würde schnell eine Ladungstrennung entstehen, die den Elektronenfluss stoppt.

## Standardelektrodenpotenziale (Standardreduktionspotenziale)

Das Standardelektrodenpotenzial E° beschreibt die Tendenz eines Redox-Paares, Elektronen aufzunehmen (Reduktion), gemessen gegen die Standard-Wasserstoff-Elektrode (SHE, E° = 0,00 V per Definition) bei 25 °C, 1 atm, allen Ionen in 1 mol/L Konzentration.

**Regeln zur Verwendung:**
- Höheres E° = stärkeres Oxidationsmittel (nimmt lieber Elektronen auf)
- Niedrigeres E° = stärkeres Reduktionsmittel (gibt lieber Elektronen ab)
- Eine spontane Redox-Reaktion läuft ab, wenn E°Zelle = E°Kathode − E°Anode > 0
- ΔG° = −n·F·E°Zelle (Faraday-Gleichung, n = Elektronenanzahl, F = 96485 C/mol)

## Elektrolyse (erzwungene Redox-Reaktionen)

Bei der Elektrolyse wird eine nicht-spontane Redox-Reaktion durch externe elektrische Energie erzwungen. Die Polarität wird umgekehrt: Anode ist jetzt positiv (angeschlossen an den Plus-Pol), Kathode ist negativ.

**Faradaysche Gesetze:**
1. Die abgeschiedene Stoffmenge ist proportional zur geflossenen Ladungsmenge (Q = I · t)
2. Für gleiche Ladung werden äquivalente Stoffmengen verschiedener Elemente abgeschieden

**m = (M · I · t) / (n · F)**
- m = abgeschiedene Masse (g)
- M = Molmasse (g/mol)
- I = Stromstärke (A)
- t = Zeit (s)
- n = Anzahl übertragener Elektronen
- F = Faraday-Konstante = 96485 C/mol

**Beispiel: Elektrolyse von CuSO₄-Lösung**
- Kathode: Cu²⁺ + 2e⁻ → Cu (Kupfer scheidet sich ab)
- Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻ (Wasser wird oxidiert, wenn Elektrode inert)
- Anwendung: Galvanik, Kupferraffination, Chlor-Alkali-Elektrolyse

## Batterien und Akkumulatoren

**Primärzellen** (nicht wiederaufladbar): Leclanché-Element (Zinkkohlenstoff), Alkaline-Batterie (Zn/MnO₂), Lithium-Primärzellen. Die chemischen Reaktionen sind irreversibel.

**Sekundärzellen/Akkumulatoren** (wiederaufladbar): Blei-Akkumulator, Lithium-Ionen-Akku, Nickel-Metallhydrid (NiMH). Beim Laden werden die Redox-Reaktionen durch externe Energie umgekehrt.

**Blei-Akkumulator (Kfz-Batterie):**
- Entladen (Anode): Pb → Pb²⁺ + 2e⁻ (Pb wird zu PbSO₄)
- Entladen (Kathode): PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O
- Laden: Reaktionen umgekehrt, PbSO₄ → Pb und PbO₂

**Brennstoffzellen:** H₂ + ½O₂ → H₂O mit direkter elektrischer Energiegewinnung (Wirkungsgrad bis 60%), ideal für CO₂-freie Energieerzeugung.`,
      lernziele: [
        "Aufbau und Funktionsweise galvanischer Zellen erläutern und Anode/Kathode zuordnen",
        "Standardelektrodenpotenziale lesen, interpretieren und zur Vorhersage spontaner Redox-Reaktionen nutzen",
        "Die Zellspannung einer galvanischen Zelle berechnen und mit ΔG° verknüpfen",
        "Prinzip der Elektrolyse und die Faradayschen Gesetze zur Massenberechnung anwenden",
        "Verschiedene Batterietypen und deren elektrochemische Grundlagen beschreiben",
      ],
      sections: [
        {
          heading: "Galvanische Zelle: Anode und Kathode",
          text: "In einer galvanischen Zelle findet an der Anode Oxidation (Elektronenabgabe), an der Kathode Reduktion (Elektronenaufnahme) statt. Die Elektronen fließen im äußeren Stromkreis von Anode zu Kathode. Die Salzbrücke gewährleistet den Ionenaustausch für Ladungsbalance. Merkhilfe: AnOx (Anode = Oxidation), RedKat (Reduktion = Kathode).",
          merksatz:
            "AnOx RedKat: Anode = Oxidation, Kathode = Reduktion. Elektronen fließen von Anode (−) zu Kathode (+).",
        },
        {
          heading: "Standardpotenziale und Spontanität",
          text: "Das Standardelektrodenpotenzial E° beschreibt die Reduktionsneigung eines Redox-Paares relativ zur SHE. E°Zelle = E°Kathode − E°Anode. Wenn E°Zelle > 0, ist die Reaktion spontan (ΔG° < 0). Je größer der Unterschied der E°-Werte, desto mehr Energie wird freigesetzt. ΔG° = −n·F·E°Zelle verknüpft Elektrochemie mit Thermodynamik.",
          merksatz:
            "E°Zelle = E°Kathode − E°Anode. Positiv = spontan. ΔG° = −nFE° (n = Elektronen, F = 96485 C/mol).",
        },
        {
          heading: "Elektrolyse und Faradaysche Gesetze",
          text: "Elektrolyse erzwingt nicht-spontane Redox-Reaktionen durch externe Spannung. Die abgeschiedene Masse folgt m = M·I·t / (n·F). Anwendungen: Metallgewinnung (Al aus Al₂O₃), Galvanik (Vergolden, Verchromung), Chlor-Alkali-Elektrolyse (NaOH + Cl₂). Die Anode ist jetzt positiv (an Plus-Pol), die Kathode negativ (an Minus-Pol).",
          merksatz:
            "Faraday: m = M·I·t / (n·F). Pro 96485 C wird 1 Äquivalent (M/n Gramm) Substanz abgeschieden.",
        },
        {
          heading: "Akkumulatoren in der Medizin",
          text: "Medizinische Geräte (Herzschrittmacher, implantierbare Defibrillatoren, Insulinpumpen) verwenden Lithium-Primär- oder Lithium-Ionen-Akkus wegen hoher Energiedichte, langer Lebensdauer und stabiler Spannungsabgabe. Der Blei-Akkumulator liefert hohe Ströme für Startermotoren. Die Grundprinzipien aller Batterien sind identisch: Spontane Redox-Reaktionen erzeugen elektrischen Strom.",
          merksatz:
            "Primärzelle = nicht aufladbar (irreversibel); Sekundärzelle/Akku = aufladbar (reversibel).",
        },
        {
          heading: "Ausgewählte Standardelektrodenpotenziale (Reduktionspotenziale)",
          text: "Die elektrochemische Spannungsreihe geordnet nach absteigendem E°:",
          table: {
            headers: ["Redox-Paar", "E° (V)"],
            rows: [
              ["F₂ + 2e⁻ → 2F⁻", "+2,87"],
              ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "+1,51"],
              ["Cl₂ + 2e⁻ → 2Cl⁻", "+1,36"],
              ["O₂ + 4H⁺ + 4e⁻ → 2H₂O", "+1,23"],
              ["Cu²⁺ + 2e⁻ → Cu", "+0,34"],
              ["2H⁺ + 2e⁻ → H₂", "0,00 (Referenz)"],
              ["Fe²⁺ + 2e⁻ → Fe", "−0,44"],
              ["Zn²⁺ + 2e⁻ → Zn", "−0,76"],
              ["Na⁺ + e⁻ → Na", "−2,71"],
              ["Li⁺ + e⁻ → Li", "−3,04"],
            ],
          },
        },
      ],
      merksätze: [
        "AnOx RedKat: Anode = Oxidation, Kathode = Reduktion (in galvanischer Zelle UND Elektrolyse)",
        "E°Zelle = E°Kathode − E°Anode; positiv = spontane Reaktion",
        "ΔG° = −n · F · E°Zelle (n = Elektronen, F = 96485 C/mol)",
        "SHE (Standard-Wasserstoff-Elektrode): E° = 0,00 V per Definition (Referenz)",
        "Höheres E° = stärkeres Oxidationsmittel (steht weiter rechts/oben in der Spannungsreihe)",
        "Daniell-Element: Zn/Cu, E°Zelle = +1,10 V (Zn Anode: −0,76 V; Cu Kathode: +0,34 V)",
        "Faraday-Gesetz: m = M · I · t / (n · F) für Elektrolyse-Massenberechnung",
        "Elektrolyse: Anode ist POSITIV (umgekehrte Polarität zur galvanischen Zelle)",
        "Brennstoffzelle: H₂ + ½O₂ → H₂O, direkter Energiegewinn ohne Verbrennung",
        "Blei-Akkumulator: Pb/PbO₂ in H₂SO₄, E°Zelle ≈ 2 V pro Zelle (6 V = 3 Zellen in Serie)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie Aufbau und Funktionsweise eines Daniell-Elements. Wie wird die Zellspannung berechnet, und wie hängt sie mit der freien Enthalpie zusammen?",
        answer:
          "Das Daniell-Element ist eine galvanische Zelle bestehend aus zwei Halbzellen: einer Zinkelektrode in ZnSO₄-Lösung (Anode) und einer Kupferelektrode in CuSO₄-Lösung (Kathode), verbunden durch eine Salzbrücke (z. B. KCl-Lösung in Agar-Gel). An der Anode wird Zink oxidiert: Zn → Zn²⁺ + 2e⁻ (E° = −0,76 V). An der Kathode wird Kupfer reduziert: Cu²⁺ + 2e⁻ → Cu (E° = +0,34 V). Elektronen fließen im äußeren Stromkreis von der Zink-Anode zur Kupfer-Kathode. Die Salzbrücke gleicht die entstehenden Ladungsunterschiede aus: Anionen wandern zur Anode, Kationen zur Kathode. Die Standardzellspannung berechnet sich als E°Zelle = E°Kathode − E°Anode = 0,34 − (−0,76) = +1,10 V. Der positive Wert bestätigt die Spontanität. Der Zusammenhang zur freien Enthalpie lautet: ΔG° = −n · F · E°Zelle. Mit n = 2 (zwei Elektronen) und F = 96485 C/mol ergibt sich ΔG° = −2 × 96485 × 1,10 = −212268 J/mol ≈ −212 kJ/mol. Der negative ΔG°-Wert bestätigt, dass die Reaktion spontan und exergon ist. Je größer E°Zelle, desto mehr elektrische Arbeit kann gewonnen werden.",
      },
      klinischerBezug:
        "Herzschrittmacher und implantierbare Defibrillatoren nutzen Lithium-Iodid-Primärbatterien (Lebensdauer 5–10 Jahre) oder Lithium-Ionen-Akkus, deren elektrochemische Stabilität und hohe Energiedichte lebenserhaltend sind. Die elektrochemische Grundlage von Membranpotenzialem in Nervenzellen (Na⁺/K⁺-Gradient) folgt denselben thermodynamischen Prinzipien wie galvanische Zellen — die Nernst-Gleichung beschreibt beide. In der klinischen Diagnostik wird die Blutgas-Analyse mit potentiometrischen pH- und pO₂-Elektroden durchgeführt, die auf Standardelektrodenpotenzial-Prinzipien basieren.",
      selfTest: [
        {
          question: "In einer galvanischen Zelle: An welcher Elektrode findet Oxidation statt?",
          options: [
            "Kathode (positiv)",
            "Kathode (negativ)",
            "Anode (negativ)",
            "Anode (positiv)",
            "An beiden Elektroden gleichzeitig",
          ],
          correctIndex: 2,
          explanation:
            "In einer galvanischen Zelle findet an der Anode Oxidation statt — Elektronen werden abgegeben und fließen durch den äußeren Stromkreis zur Kathode. Die Anode ist negativ geladen (Elektronenüberschuss durch Oxidation). Die Merkhilfe AnOx RedKat: Anode = Oxidation, Kathode = Reduktion. In der Elektrolyse ist die Anode dagegen positiv (an den Plus-Pol der Spannungsquelle angeschlossen), aber Oxidation findet auch dort statt.",
          hints: [
            "AnOx RedKat: AN-ode = OX-idation; KAT-hode = RED-uktion",
            "In der galvanischen Zelle ist die Anode negativ (Elektronenabgabe = Elektronenüberschuss)",
          ],
          difficulty: 1,
          tags: ["galvanische-zelle", "anode-kathode", "anox-redkat"],
        },
        {
          question: "Die Standardzellspannung des Daniell-Elements (Zn/Cu) beträgt:",
          options: ["0,34 V", "0,76 V", "1,10 V", "1,52 V", "2,00 V"],
          correctIndex: 2,
          explanation:
            "E°Zelle = E°Kathode − E°Anode = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 V − (−0,76 V) = +1,10 V. Die positive Zellspannung zeigt an, dass die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu spontan abläuft. Zink mit niedrigerem E° ist die Anode (wird oxidiert), Kupfer mit höherem E° ist die Kathode (wird reduziert). Diese Reaktion war historisch das erste galvanische Element, konstruiert von Luigi Galvani und Alessandro Volta.",
          hints: [
            "E°Zelle = E°Kathode − E°Anode; Kathode hat höheres E°",
            "E°(Cu²⁺/Cu) = +0,34 V; E°(Zn²⁺/Zn) = −0,76 V",
          ],
          difficulty: 1,
          tags: ["daniell-element", "zellspannung", "e0-berechnung"],
        },
        {
          question: "Welche Aussage zur Elektrolyse ist korrekt?",
          options: [
            "Elektrolyse ist eine spontane Redox-Reaktion",
            "An der Kathode der Elektrolysezelle findet Oxidation statt",
            "Die Anode der Elektrolysezelle ist an den Minuspol angeschlossen",
            "Elektrolyse erzwingt nicht-spontane Redox-Reaktionen durch externe elektrische Energie",
            "Die abgeschiedene Masse ist unabhängig von der Stromstärke",
          ],
          correctIndex: 3,
          explanation:
            "Elektrolyse ist das elektrochemische Erzwingen nicht-spontaner Redox-Reaktionen durch Anlegen einer externen Spannung. Die ΔG°-Werte sind positiv (endergon). An der Kathode (negativ, an Minuspol) findet Reduktion statt (Metallabscheidung), an der Anode (positiv, an Pluspol) findet Oxidation statt. Die abgeschiedene Masse folgt dem Faradayschen Gesetz: m = M·I·t/(n·F) — sie ist proportional zur Stromstärke und zur Zeit.",
          hints: [
            "Elektrolyse = erzwungene, NICHT-spontane Reaktion (braucht externe Spannung)",
            "Die Grundregel AnOx RedKat gilt auch bei Elektrolyse — aber die Vorzeichen der Elektroden sind anders",
          ],
          difficulty: 2,
          tags: ["elektrolyse", "nicht-spontan", "externe-spannung"],
        },
        {
          question:
            "Bei der Elektrolyse von CuSO₄-Lösung mit einer Stromstärke von 2 A über 965 s und n = 2 Elektronen: Welche Masse Kupfer (M = 63,5 g/mol) scheidet sich an der Kathode ab?",
          options: ["0,318 g", "0,635 g", "1,27 g", "2,54 g", "6,35 g"],
          correctIndex: 1,
          explanation:
            "Faradaysches Gesetz: m = M · I · t / (n · F) = 63,5 · 2 · 965 / (2 · 96485) = 63,5 · 1930 / 192970 = 122555 / 192970 ≈ 0,635 g. Die geflossene Ladung beträgt Q = I · t = 2 A · 965 s = 1930 C. 1 Mol Elektronen entspricht 96485 C (Faraday-Konstante). Für Cu²⁺ + 2e⁻ → Cu braucht man 2 × 96485 = 192970 C pro Mol Cu = 63,5 g. Mit 1930 C scheidet man 1930/192970 × 63,5 ≈ 0,635 g ab.",
          hints: [
            "Faraday: m = M · I · t / (n · F) mit F = 96485 C/mol",
            "Schritt 1: Q = I × t = 2 × 965 = 1930 C; dann m = 63,5 × 1930 / (2 × 96485)",
          ],
          difficulty: 3,
          tags: ["faraday-gesetz", "elektrolyse", "kupfer-abscheidung"],
        },
        {
          question: "Was beschreibt das Standardelektrodenpotenzial E°?",
          options: [
            "Die Spannung einer Zelle unter beliebigen Bedingungen",
            "Die Tendenz eines Redox-Paares, Elektronen aufzunehmen, gemessen gegen die SHE bei Standardbedingungen",
            "Die Energie, die zur Elektrolyse benötigt wird",
            "Die Gleichgewichtskonstante der Oxidationsreaktion",
            "Die Leitfähigkeit der Elektrolytlösung",
          ],
          correctIndex: 1,
          explanation:
            "Das Standardelektrodenpotenzial E° (auch Standardreduktionspotenzial) beschreibt die Neigung eines Redox-Paares, Elektronen aufzunehmen (Reduktion), gemessen gegen die Standard-Wasserstoff-Elektrode (SHE, E° = 0,00 V) unter Standardbedingungen (25 °C, 1 atm, alle gelösten Ionen in 1 mol/L Konzentration). Höheres E° bedeutet stärkeres Oxidationsmittel. Damit lässt sich vorhersagen, welche Redox-Reaktionen spontan ablaufen: Die Reaktion mit positivem E°Zelle ist spontan.",
          hints: [
            "Standard = Standardbedingungen (25 °C, 1 mol/L, 1 atm), gemessen gegen SHE",
            "E° beschreibt die Reduktions-Neigung: hohes E° = nimmt gerne Elektronen auf",
          ],
          difficulty: 2,
          tags: ["standardelektrodenpotenzial", "she", "reduktionspotenzial"],
        },
        {
          question: "Welche Aussage zur freien Enthalpie ΔG° und Zellspannung E° ist korrekt?",
          options: [
            "ΔG° = +n · F · E°Zelle (positiv für spontane Reaktionen)",
            "ΔG° = −n · F · E°Zelle (negativ für spontane Reaktionen)",
            "ΔG° = n · R · T · ln(E°Zelle)",
            "ΔG° und E° sind voneinander unabhängig",
            "ΔG° = −F / (n · E°Zelle)",
          ],
          correctIndex: 1,
          explanation:
            "Die fundamentale Verknüpfung lautet ΔG° = −n · F · E°Zelle. Für eine spontane Reaktion gilt E°Zelle > 0 und entsprechend ΔG° < 0 (exergon). n ist die Anzahl der übertragenen Elektronen, F die Faraday-Konstante (96485 C/mol). Beispiel Daniell-Element: ΔG° = −2 × 96485 × 1,10 = −212 kJ/mol. Diese Gleichung verknüpft Elektrochemie mit Thermodynamik und ermöglicht die Berechnung von Gleichgewichtskonstanten: ΔG° = −RT·ln(K), also ln(K) = n·F·E°/(R·T).",
          hints: [
            "Spontane Reaktion: ΔG° < 0 und E°Zelle > 0 — welches Vorzeichen passt?",
            "ΔG° = −n · F · E°: Minus-Zeichen ist entscheidend",
          ],
          difficulty: 2,
          tags: ["delta-g", "e0-zelle", "spontanität"],
        },
        {
          question: "Warum ist eine Salzbrücke in einer galvanischen Zelle notwendig?",
          options: [
            "Sie leitet Elektronen von der Anode zur Kathode",
            "Sie verhindert, dass die Elektroden sich auflösen",
            "Sie gleicht Ladungsunterschiede zwischen den Halbzellen aus und ermöglicht so dauerhaften Stromfluss",
            "Sie erhöht die Standardzellspannung",
            "Sie katalysiert die Elektrodenreaktionen",
          ],
          correctIndex: 2,
          explanation:
            "Die Salzbrücke (z. B. KCl in Agar-Gel) ist für den Ionentransport zwischen den Halbzellen zuständig. Ohne sie würde in der Anodenhalbzelle ein Ladungsüberschuss entstehen (Zn²⁺-Ionen treten aus, Elektronen fließen ab → negative Überschussladung in Lösung bleibt), während in der Kathodenhalbzelle Kationen verbraucht werden (positive Ladung fehlt). Diese Ladungstrennung würde den Elektronenfluss sofort stoppen. Die Salzbrücke lässt Ionen wandern (Anionen zur Anode, Kationen zur Kathode), hält aber die Lösungen getrennt.",
          hints: [
            "Was passiert mit der Ladungsbilanz, wenn Zn²⁺ in die Lösung geht, aber Elektronen nach außen fließen?",
            "Die Salzbrücke führt Ionen durch, keine Elektronen — sie schließt den Stromkreis ionisch",
          ],
          difficulty: 2,
          tags: ["salzbrücke", "ladungsausgleich", "galvanische-zelle"],
        },
      ],
    },
    {
      id: "ch-11-03",
      title: "Nernst-Gleichung und Elektrochemisches Gleichgewicht",
      content: `## Die Nernst-Gleichung

Das Standardelektrodenpotenzial E° gilt nur unter Standardbedingungen (25 °C, alle Konzentrationen 1 mol/L, Gasdruck 1 atm). Unter realen Bedingungen wird das tatsächliche Elektrodenpotenzial E durch die **Nernst-Gleichung** beschrieben:

**E = E° − (R·T)/(n·F) · ln(Q)**

oder bei 25 °C vereinfacht:

**E = E° − (0,05916 V)/n · log₁₀(Q)**

- R = 8,314 J/(mol·K) — allgemeine Gaskonstante
- T = absolute Temperatur in Kelvin
- n = Anzahl übertragener Elektronen
- F = 96485 C/mol — Faraday-Konstante
- Q = Reaktionsquotient (Konzentrationen der Produkte/Edukte)

**Für eine allgemeine Halbreaktion: Ox + ne⁻ → Red**
- Q = [Red] / [Ox]
- Hohe [Ox]-Konzentration → kleiner Q → E wird größer als E° (stärkeres Oxidationsmittel)
- Hohe [Red]-Konzentration → großer Q → E wird kleiner als E° (schwächeres Oxidationsmittel)

## Anwendungen der Nernst-Gleichung

**Beispiel: Cu²⁺/Cu-Elektrode bei [Cu²⁺] = 0,01 mol/L**
- E° = +0,34 V; n = 2
- E = 0,34 − (0,05916/2) · log(1/0,01) = 0,34 − 0,02958 · 2 = 0,34 − 0,059 = **+0,281 V**
- Verdünnung der Cu²⁺-Lösung senkt das Elektrodenpotenzial

**Beispiel: Zn²⁺/Zn-Elektrode bei [Zn²⁺] = 0,001 mol/L**
- E° = −0,76 V; n = 2
- E = −0,76 − (0,05916/2) · log(1/0,001) = −0,76 − 0,02958 · 3 = −0,76 − 0,089 = **−0,849 V**

**Zellpotenzial der Konzentrationszelle:**
Zwei identische Elektroden, aber verschiedene Ionenkonzentrationen → E°Zelle = 0, aber E_Zelle ≠ 0 durch die Nernst-Gleichung. Diese Konzentrationszellen spielen eine wichtige Rolle bei biologischen Membranpotenziale.

## pH-Messung und Glaselektrode

Die wichtigste praktische Anwendung der Nernst-Gleichung ist die potentiometrische **pH-Messung**. Eine Glaselektrode enthält eine Glasmembran, die selektiv H⁺-Ionen durchlässt. Das Membranpotenzial folgt der Nernst-Gleichung:

**E_Membran = const − 0,05916 · pH (bei 25 °C)**

Pro pH-Einheit ändert sich das Potential um 59,16 mV (bei 25 °C) — dieser Wert heißt Nernst-Faktor oder Nernst-Steigung. Mit steigendem pH wird das Potential negativer (weniger H⁺ = reduziertere Bedingungen). Die Glaselektrode wird mit bekannten Pufferlösungen kalibriert (2-Punkt-Kalibrierung).

## Gleichgewichtskonstante aus E°

Im elektrochemischen Gleichgewicht gilt E = 0 (keine treibende Kraft mehr), was ΔG = 0 entspricht. Daraus folgt:

**K = 10^(n · E° / 0,05916)** (bei 25 °C)

Beispiel Daniell-Element: K = 10^(2 × 1,10 / 0,05916) = 10^37,2 ≈ 10³⁷ (extrem weit auf der Produktseite, praktisch vollständig).

## Biologische Membranpotenziale

Das **Ruhemembranpotenzial** einer Nervenzelle (ca. −70 mV) entsteht durch unterschiedliche Ionenkonzentrationen auf beiden Seiten der Zellmembran (K⁺ höher intrazellulär, Na⁺ und Cl⁻ höher extrazellulär) und durch selektive Membranpermeabilität. Das **Nernst-Potenzial** für ein einzelnes Ion berechnet sich als:

**E_Ion = (RT)/(z·F) · ln([Ion]_außen / [Ion]_innen)**

- E_K (bei 37 °C): E_K = (0,02585 × 1,037)/(1) · ln(4/140) = −0,09 V ≈ −90 mV
- E_Na (bei 37 °C): E_Na = 0,02680 · ln(145/15) = +0,062 V ≈ +62 mV

Das **Goldman-Hodgkin-Katz-Gleichung** berechnet das tatsächliche Membranpotenzial unter Berücksichtigung der Permeabilitäten mehrerer Ionen.

## Henderson-Hasselbalch und Elektrochemie

Die Henderson-Hasselbalch-Gleichung pH = pKa + log([A⁻]/[HA]) lässt sich direkt aus der Nernst-Gleichung ableiten. In biologischen Systemen beeinflusst der pH-Wert direkt die Redoxpotenziale biochemischer Reaktionen — z. B. sinkt E für O₂/H₂O mit steigendem pH (0,059 V pro pH-Einheit), was die Reaktivität von Sauerstoff bei physiologischem pH (7,4) moduliert.`,
      lernziele: [
        "Die Nernst-Gleichung formulieren und auf konkrete Elektroden- und Zellpotenziale anwenden",
        "Den Einfluss von Konzentration und Temperatur auf Elektrodenpotenziale berechnen und interpretieren",
        "Das Prinzip der potentiometrischen pH-Messung mit der Glaselektrode erläutern",
        "Gleichgewichtskonstanten aus Standardelektropotenzialen berechnen",
        "Biologische Membranpotenziale als elektrochemische Phänomene (Nernst-Potenzial) beschreiben",
      ],
      sections: [
        {
          heading: "Die Nernst-Gleichung — Formel und Bedeutung",
          text: "E = E° − (0,05916 V)/n · log(Q) bei 25 °C. Q ist der Reaktionsquotient: [Produkte]/[Edukte]. Ist Q < 1 (Oxidans-Überschuss), ist E > E°. Ist Q > 1 (Reduktans-Überschuss), ist E < E°. Die Nernst-Gleichung verknüpft Thermodynamik (ΔG = −nFE) mit realen Konzentrationen und erklärt, warum sich Zellspannungen mit Entladung ändern.",
          merksatz:
            "Nernst: E = E° − (0,05916/n) · log(Q). Bei 25 °C: pro Zehnerpotenz in Q ändert sich E um 59,16/n mV.",
        },
        {
          heading: "pH-Messung mit der Glaselektrode",
          text: "Die Glaselektrode nutzt die Nernst-Gleichung zur pH-Bestimmung: E_Membran = const − 0,05916 · pH. Pro pH-Einheit ändert sich die Spannung um 59,16 mV (Nernst-Faktor). Zwei Referenzpunkte (Kalibrierung mit pH 4 und pH 7 oder 7 und 10) legen die Geraden fest. Klinisch wird pH-Messung im Blutgas-Gerät eingesetzt (Normwert arteriell: pH 7,35–7,45).",
          merksatz:
            "Glaselektrode: −59,16 mV pro pH-Einheit (Nernst-Steigung bei 25 °C). Kalibrierung mit 2 Puffern.",
        },
        {
          heading: "Gleichgewichtskonstante aus E°",
          text: "Im Gleichgewicht gilt E = 0 und ΔG = 0. Daraus folgt K = 10^(n · E° / 0,05916). Großes positives E° = große K = Reaktion läuft fast vollständig ab. Kleines E° = kleines K = nur partieller Umsatz. Daniell-Element: K ≈ 10³⁷ (praktisch vollständiger Umsatz). Diese Verknüpfung verbindet Elektrochemie mit Gleichgewichtsthermodynamik.",
          merksatz: "K = 10^(n·E°/0,05916). Positives E° → K > 1 → spontan und produktbegünstigt.",
        },
        {
          heading: "Nernst-Potenzial und biologische Membranen",
          text: "Das Nernst-Potenzial eines Ions beschreibt das Gleichgewichtspotenzial, bei dem die elektrische Kraft den Konzentrationsgradienten gerade kompensiert. E_Ion = (RT/zF) · ln([außen]/[innen]). Für K⁺ ergibt sich ca. −90 mV, für Na⁺ ca. +62 mV. Das tatsächliche Ruhemembranpotenzial (−70 mV) liegt zwischen diesen Werten und wird durch die Goldman-Gleichung beschrieben, die Permeabilitäten berücksichtigt.",
          merksatz:
            "Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen]). K⁺: ca. −90 mV; Na⁺: ca. +62 mV.",
        },
      ],
      merksätze: [
        "Nernst-Gleichung: E = E° − (RT/nF)·ln(Q) = E° − (0,05916/n)·log(Q) bei 25 °C",
        "Nernst-Faktor: 59,16 mV pro Dekade in Q (bei 25 °C, n = 1)",
        "Hohe [Ox]-Konzentration → kleines Q → E größer als E° (stärkeres Oxidationsmittel)",
        "Gleichgewicht: E = 0 → K = 10^(n·E°/0,05916) bei 25 °C",
        "Glaselektrode: −59,16 mV pro pH-Einheit bei 25 °C (Nernst-Steigung)",
        "Biologisches Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen])",
        "K⁺-Nernst-Potenzial ≈ −90 mV; Na⁺-Nernst-Potenzial ≈ +62 mV (physiolog.)",
        "Ruhemembranpotenzial ≈ −70 mV (zwischen K⁺ und Na⁺ Nernst-Potenzial)",
        "Konzentrationszelle: E° = 0, aber E ≠ 0 wegen Konzentrationsunterschied (Nernst)",
        "ΔG = −nFE; im Gleichgewicht E = 0 und ΔG = 0 → K aus E° berechenbar",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Nernst-Gleichung: Was besagt sie, wie wird sie angewendet, und welche biologische Bedeutung hat sie? Berechnen Sie das Nernst-Potenzial für K⁺ bei physiologischen Konzentrationen.",
        answer:
          "Die Nernst-Gleichung beschreibt das tatsächliche Elektrodenpotenzial E unter realen (nicht-Standard-)Bedingungen: E = E° − (RT/nF)·ln(Q), bei 25 °C vereinfacht zu E = E° − (0,05916/n)·log(Q). Dabei ist E° das Standardpotenzial, R die Gaskonstante (8,314 J/mol·K), T die Temperatur in Kelvin, n die Anzahl übertragener Elektronen, F die Faraday-Konstante (96485 C/mol) und Q der Reaktionsquotient. Die Gleichung zeigt: Erhöht man die Konzentration des Oxidationsmittels (Ox), sinkt Q, und E wird größer als E° — das Redoxpaar wird reaktiver. Umgekehrt bei Überschuss des Reduktionsmittels. Anwendung: pH-Messung mit der Glaselektrode basiert auf der Nernst-Gleichung; pro pH-Einheit ändert sich die Spannung um 59,16 mV. In der Biologie beschreibt das Nernst-Potenzial das Gleichgewichtspotenzial eines Ions über eine selektive Membran. Für K⁺ mit typischen physiologischen Konzentrationen ([K⁺]_innen = 140 mmol/L, [K⁺]_außen = 4 mmol/L) bei 37 °C (T = 310 K): E_K = (RT/zF)·ln([außen]/[innen]) = (8,314 × 310)/(1 × 96485)·ln(4/140) = 0,02677 · ln(0,02857) = 0,02677 × (−3,555) ≈ −0,095 V ≈ −95 mV. Dieses Potenzial bedeutet: Wenn die Membran nur für K⁺ permeabel wäre, würde sich ein Gleichgewichtspotenzial von −95 mV einstellen. Das reale Ruhemembranpotenzial (−70 mV) liegt zwischen K⁺ (−95 mV) und Na⁺ (+62 mV), da die Membran für beide Ionen teilweise permeabel ist (Goldman-Gleichung).",
      },
      klinischerBezug:
        "Die Nernst-Gleichung ist direkt relevant für die Blutgasanalyse: pH-Elektroden in Blutgasgeräten messen das Membranpotenzial der Glaselektrode und berechnen daraus den pH-Wert (Normbereich arteriell: 7,35–7,45). pO₂- und pCO₂-Elektroden (Clark- und Severinghaus-Elektroden) basieren ebenfalls auf elektrochemischen Prinzipien. Die Nernst-Gleichung erklärt auch, warum Hypokaliämie (erniedrigtes extrazelluläres K⁺) das Ruhemembranpotenzial hyperpolarisiert und Herzrhythmusstörungen verursacht — das K⁺-Nernst-Potenzial verschiebt sich in negativere Richtung.",
      selfTest: [
        {
          question: "Die Nernst-Gleichung lautet bei 25 °C (vereinfacht):",
          options: [
            "E = E° + (0,05916/n) · log(Q)",
            "E = E° − (0,05916/n) · log(Q)",
            "E = E° · n · 0,05916 · log(Q)",
            "E = E° / (n · 0,05916 · log(Q))",
            "E = −E° + (0,05916/n) · log(Q)",
          ],
          correctIndex: 1,
          explanation:
            "Die Nernst-Gleichung bei 25 °C lautet: E = E° − (0,05916 V / n) · log₁₀(Q). Der Faktor 0,05916 V entsteht aus RT/F bei 25 °C multipliziert mit ln(10) für die Umrechnung von natürlichem auf dekadischen Logarithmus: (8,314 × 298 / 96485) × 2,303 = 0,05916 V. Das Minuszeichen ist entscheidend: Erhöht man Q (mehr Produkte), sinkt E. Diese Gleichung ermöglicht die Berechnung von Elektrodenpotenzialen unter beliebigen Konzentrationsbedingungen.",
          hints: [
            "Merke: E = E° MINUS (0,05916/n) · log(Q) — Minuszeichen!",
            "0,05916 V = RT·ln(10)/F bei 25 °C (= 2,303 × 8,314 × 298 / 96485)",
          ],
          difficulty: 1,
          tags: ["nernst-gleichung", "reaktionsquotient", "konzentration"],
        },
        {
          question:
            "Das Elektrodenpotenzial einer Zn²⁺/Zn-Elektrode (E° = −0,76 V, n = 2) bei [Zn²⁺] = 0,01 mol/L beträgt:",
          options: ["−0,819 V", "−0,760 V", "−0,701 V", "−0,642 V", "−0,900 V"],
          correctIndex: 0,
          explanation:
            "Nernst: E = −0,76 − (0,05916/2) · log([Zn]/[Zn²⁺]). Für Metallabscheidung Zn²⁺ + 2e⁻ → Zn gilt Q = 1/[Zn²⁺] = 1/0,01 = 100. Also: E = −0,76 − (0,02958) · log(100) = −0,76 − 0,02958 · 2 = −0,76 − 0,0592 = −0,819 V. Eine niedrigere Zn²⁺-Konzentration macht die Elektrode negativer (Reduktion ist weniger begünstigt), was die Le-Chatelier-Regel bestätigt.",
          hints: [
            "Q = 1/[Zn²⁺] für die Reduktionshalbreaktion Zn²⁺ + 2e⁻ → Zn",
            "E = −0,76 − (0,05916/2) · log(1/0,01) = −0,76 − 0,02958 · log(100)",
          ],
          difficulty: 3,
          tags: ["nernst", "zn-elektrode", "konzentration-spannung"],
        },
        {
          question:
            "Die Glaselektrode zeigt eine Spannung von −59,16 mV pro pH-Einheit. Was beschreibt dieser Wert?",
          options: [
            "Die maximale Spannung der Elektrode",
            "Den Nernst-Faktor: die Potenzialänderung pro Einheit im Reaktionsquotienten bei n = 1 und 25 °C",
            "Die Aktivierungsenergie der Elektrodenreaktion",
            "Den pKa-Wert der Glasmembran",
            "Die Faraday-Konstante in mV",
          ],
          correctIndex: 1,
          explanation:
            "Der Nernst-Faktor (59,16 mV bei 25 °C für n = 1) beschreibt die Potenzialänderung pro Dekade im Reaktionsquotienten Q. Da pH = −log[H⁺], entspricht eine pH-Änderung um 1 einer zehnfachen Änderung von [H⁺] (eine Dekade). Die Glaselektrode misst H⁺-Aktivität, und nach der Nernst-Gleichung ändert sich das Potential um 59,16 mV pro pH-Einheit (bei 25 °C). Bei Körpertemperatur (37 °C) beträgt der Nernst-Faktor ca. 61,5 mV/pH.",
          hints: [
            "59,16 mV = RT·ln(10)/F bei 25 °C für n = 1 Elektron",
            "pH = −log[H⁺] — eine pH-Einheit entspricht einer Zehnerpotenz in [H⁺]",
          ],
          difficulty: 2,
          tags: ["glaselektrode", "nernst-faktor", "ph-messung"],
        },
        {
          question:
            "Das Nernst-Gleichgewichtspotenzial für Na⁺ liegt bei ca. +62 mV. Was bedeutet dies für eine Nervenzelle?",
          options: [
            "Na⁺ strömt bei diesem Potenzial aus der Zelle aus",
            "Bei −62 mV sind elektrischer und chemischer Gradient für Na⁺ im Gleichgewicht",
            "Bei +62 mV halten sich elektrischer Antrieb und chemischer Konzentrationsgradient für Na⁺ die Waage",
            "Na⁺ hat ein negatives Ruhepotenzial",
            "Das Aktionspotenzial erreicht genau +62 mV",
          ],
          correctIndex: 2,
          explanation:
            "Das Nernst-Potenzial +62 mV für Na⁺ bedeutet: Wenn das Membranpotenzial genau +62 mV betrüge, wären elektrischer Gradient (innen positiv = treibt Na⁺ raus) und chemischer Gradient ([Na⁺]_außen >> innen = treibt Na⁺ rein) im Gleichgewicht, es gäbe keinen Nettostrom. Da das Ruhemembranpotenzial ca. −70 mV ist, besteht ein großer treibender Druck für Na⁺-Einstrom. Beim Aktionspotenzial öffnen Na⁺-Kanäle, Na⁺ strömt ein und das Potential nähert sich (aber erreicht meist nicht ganz) +62 mV.",
          hints: [
            "Nernst-Potenzial = das Membranpotenzial, bei dem Nettostrom = 0 (elektrisch und chemisch im Gleichgewicht)",
            "Bei Ruhepotenzial −70 mV: Wie wirken elektrischer und chemischer Gradient für Na⁺?",
          ],
          difficulty: 2,
          tags: ["nernst-potenzial", "na-kanal", "membranpotenzial"],
        },
        {
          question:
            "Wie wird die Gleichgewichtskonstante K aus dem Standardpotenzial E° berechnet?",
          options: [
            "K = n · E° / 0,05916",
            "K = E° / (n · 0,05916)",
            "K = 10^(n · E° / 0,05916)",
            "K = e^(n · E° / 0,05916)",
            "K = 10^(E° / 0,05916)",
          ],
          correctIndex: 2,
          explanation:
            "Im Gleichgewicht gilt E = 0, also Q = K. Einsetzen in die Nernst-Gleichung: 0 = E° − (0,05916/n) · log(K) → log(K) = n · E° / 0,05916 → K = 10^(n·E°/0,05916). Alternativ über ΔG°: ΔG° = −nFE° = −RT·ln(K) → ln(K) = nFE°/(RT) → K = e^(nFE°/RT). Für Daniell-Element: K = 10^(2 × 1,10 / 0,05916) = 10^37,2 ≈ 10³⁷ — die Reaktion läuft praktisch vollständig ab.",
          hints: [
            "Im Gleichgewicht E = 0, daher Q = K — setze in Nernst-Gleichung ein und löse nach K auf",
            "log(K) = n·E°/0,05916 → K = 10^(n·E°/0,05916)",
          ],
          difficulty: 2,
          tags: ["gleichgewichtskonstante", "e0", "k-berechnung"],
        },
        {
          question:
            "Eine Konzentrationszelle besteht aus zwei Cu/Cu²⁺-Halbzellen mit [Cu²⁺] = 1,0 mol/L (Kathode) und [Cu²⁺] = 0,01 mol/L (Anode). Welche Zellspannung ergibt sich näherungsweise?",
          options: ["0,00 V", "+0,029 V", "+0,059 V", "+0,118 V", "+0,34 V"],
          correctIndex: 2,
          explanation:
            "Bei einer Konzentrationszelle gilt E°Zelle = 0 (beide Elektroden sind Cu²⁺/Cu mit E° = +0,34 V). Die Spannung kommt ausschließlich aus dem Konzentrationsunterschied: E_Zelle = −(0,05916/2) · log([Cu²⁺]_Anode / [Cu²⁺]_Kathode) = −(0,02958) · log(0,01/1,0) = −0,02958 · (−2) = +0,0592 ≈ +0,059 V. Konzentrationszellen erzeugen also auch ohne unterschiedliche Elektrodenmaterialien eine Spannung — allein durch den Konzentrationsgradienten. Dies ist direkt analog zum chemiosmotischen Prinzip in Mitochondrien.",
          hints: [
            "Konzentrationszelle: E° = 0, Spannung kommt nur vom Konzentrationsunterschied (Nernst)",
            "E_Zelle = (0,05916/n) · log([Ox]_hoch / [Ox]_niedrig) — höhere [Ox] an der Kathode treibt die Reaktion",
          ],
          difficulty: 3,
          tags: ["konzentrationszelle", "nernst", "konzentrationsunterschied"],
        },
        {
          question:
            "Welchen Einfluss hat ein Anstieg der Temperatur von 25 °C auf 37 °C auf den Nernst-Faktor?",
          options: [
            "Der Nernst-Faktor bleibt konstant bei 59,16 mV",
            "Der Nernst-Faktor sinkt auf ca. 50 mV",
            "Der Nernst-Faktor steigt auf ca. 61,5 mV",
            "Der Nernst-Faktor wird negativ",
            "Der Nernst-Faktor halbiert sich auf ca. 30 mV",
          ],
          correctIndex: 2,
          explanation:
            "Der Nernst-Faktor bei 25 °C (298 K) beträgt RT·ln(10)/F = 8,314 × 298 × 2,303 / 96485 = 0,05916 V = 59,16 mV. Bei 37 °C (310 K): 8,314 × 310 × 2,303 / 96485 = 0,06148 V ≈ 61,5 mV. Der Nernst-Faktor ist direkt proportional zur absoluten Temperatur T. Das ist relevant für pH-Messungen und biologische Membranpotenziale: Ein auf 25 °C kalibriertes pH-Gerät zeigt bei 37 °C (Körpertemperatur) leicht abweichende Werte, deshalb haben klinische Blutgasgeräte eine Temperaturkompensation.",
          hints: [
            "Nernst-Faktor = RT·ln(10)/F — er ist proportional zu T (Kelvin)",
            "T wächst von 298 K auf 310 K — um welchen Faktor wächst der Nernst-Faktor?",
          ],
          difficulty: 3,
          tags: ["nernst-faktor", "temperatur", "ph-kalibrierung"],
        },
      ],
    },
    {
      id: "ch-11-04",
      title: "Oxidativer Stress, ROS und biologische Redox-Systeme",
      content: `## Reaktive Sauerstoffspezies (ROS)

Reaktive Sauerstoffspezies (ROS, englisch: Reactive Oxygen Species) sind hochreaktive, sauerstoffhaltige Moleküle, die in der Lage sind, zelluläre Biomoleküle zu oxidieren und zu schädigen. Sie entstehen als unvermeidliche Nebenprodukte des aeroben Stoffwechsels, aber auch gezielt durch Immunzellen zur Pathogenabwehr.

**Wichtige ROS und ihre Bildung:**
- **Superoxid-Radikalanion (O₂·⁻):** Entsteht durch unvollständige Reduktion von O₂ (1-Elektronen-Übertragung), besonders an Komplex I und III der Atmungskette. O₂ + e⁻ → O₂·⁻
- **Wasserstoffperoxid (H₂O₂):** Entsteht aus O₂·⁻ durch Superoxiddismutase (SOD): 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. Weniger reaktiv als O₂·⁻, aber membrangängig.
- **Hydroxyl-Radikal (·OH):** Das reaktivste ROS. Entsteht aus H₂O₂ durch die **Fenton-Reaktion**: H₂O₂ + Fe²⁺ → ·OH + OH⁻ + Fe³⁺. Auch durch Haber-Weiss-Reaktion: O₂·⁻ + H₂O₂ → ·OH + OH⁻ + O₂.
- **Singlett-Sauerstoff (¹O₂):** Angeregter, besonders reaktiver Zustand des O₂, entsteht bei Photooxidation.
- **Peroxynitrit (ONOO⁻):** Reaktion von O₂·⁻ mit NO: O₂·⁻ + NO· → ONOO⁻ (sehr reaktiv, nitrosiert Proteine).

## Oxidativer Stress

**Oxidativer Stress** entsteht, wenn die Produktion von ROS die antioxidative Kapazität der Zelle übersteigt. Dies führt zu:
- **Lipidperoxidation:** ROS attackieren mehrfach ungesättigte Fettsäuren in Membranen → Kettenreaktion → Membranschädigung
- **Protein-Oxidation:** Oxidation von Cystein-SH-Gruppen zu Disulfiden (-S-S-), Sulfensäuren (-SOH), oder Sulfonyl-Gruppen; Carbonylierung; Fragmentierung
- **DNA-Oxidation:** ·OH greift Basen und Desoxyribose an → 8-Oxo-Guanin (häufigste oxidative DNA-Läsion) → Mutationen, Strangbrüche
- **Enzyme-Inaktivierung:** Oxidation aktiver Zentren (Fe-S-Cluster, Häm-Gruppen)

**Krankheiten bei chronischem oxidativem Stress:** Arteriosklerose (LDL-Oxidation), Krebs, Morbus Alzheimer, Parkinson, Diabetes mellitus Typ 2, rheumatoide Arthritis, chronisch-entzündliche Darmerkrankungen.

## Antioxidatives Schutzsystem

Die Zelle verfügt über enzymatische und nicht-enzymatische Antioxidantien:

**Enzymatische Antioxidantien:**
- **Superoxiddismutase (SOD):** Disproportioniert O₂·⁻ → H₂O₂ + O₂. Drei Isoformen: SOD1 (Cu/Zn, zytoplasmatisch), SOD2 (Mn, mitochondrial), SOD3 (Cu/Zn, extrazellulär)
- **Katalase:** H₂O₂ → H₂O + ½O₂. Peroxisomales Enzym. Höchste Umsatzzahl aller bekannten Enzyme (~10⁷ /s)
- **Glutathion-Peroxidase (GPx):** H₂O₂ + 2GSH → 2H₂O + GSSG. Verwendet reduziertes Glutathion (GSH) als Reduktionsmittel. Selenocystein im aktiven Zentrum.
- **Glutathion-Reduktase (GR):** GSSG + NADPH → 2GSH. Regeneriert GSH auf Kosten von NADPH (aus Pentosephosphatweg).
- **Thioredoxin-System:** Thioredoxin (Trx) + Thioredoxin-Reduktase (TrxR) + NADPH: reduziert oxidierte Proteine

**Nicht-enzymatische Antioxidantien:**
- **Glutathion (GSH):** Tripeptid (γ-Glu-Cys-Gly), zentrales intrazelluläres Antioxidans. Konzentration 1–10 mmol/L intrazellulär.
- **Vitamin C (Ascorbinsäure):** Wasserlöslich, direkte Radikalfänger-Funktion, regeneriert Vitamin E
- **Vitamin E (α-Tocopherol):** Fettlöslich, schützt Membranen vor Lipidperoxidation durch Abfangen von Peroxy-Radikalen (LOO·)
- **β-Carotin und andere Carotinoide:** Quencher von Singlett-Sauerstoff
- **Harnsäure:** Wichtiges Antioxidans im Plasma
- **Coenzym Q₁₀ (Ubichinol):** Membrangebundener Elektronenträger, auch antioxidativ

## NADPH und der Pentosephosphatweg

NADPH (Nicotinamid-Adenin-Dinukleotid-Phosphat, reduziert) ist das zentrale Reduktionsmittel für die Regeneration des Antioxidans-Systems. Der **Pentosephosphatweg (PPW)** ist die Hauptquelle für NADPH in der Zelle:
- G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der erste, geschwindigkeitsbestimmende Schritt
- G6PD-Mangel (häufigste Enzymopathie weltweit, X-chromosomal) → reduzierter NADPH-Spiegel → Erythrozyten anfällig für oxidativen Stress → hämolytische Anämie bei Exposition zu Oxidantien (Primaquin, Favabohnen, Infektionen)

## ROS als Signalmoleküle

ROS haben nicht ausschließlich schädliche Funktionen. In physiologischen Konzentrationen wirken sie als **Redox-Signalmoleküle** (Konzept des Eustress vs. Distress):
- H₂O₂ oxidiert Cystein-SH-Gruppen von Signalproteinen → Konformationsänderung → Signalübertragung
- Aktivierung von NF-κB, HIF-1α, Nrf2 (antioxidativer Transkriptionsfaktor)
- NADPH-Oxidase (NOX) in Phagozyten produziert O₂·⁻ gezielt zur Pathogenabwehr (oxidativer Burst)
- Mitochondriale ROS regulieren Apoptose und Autophagie`,
      lernziele: [
        "Die wichtigsten reaktiven Sauerstoffspezies (ROS), ihre Bildungsmechanismen und Reaktivität benennen",
        "Oxidativen Stress definieren und seine Folgen auf Lipide, Proteine und DNA beschreiben",
        "Das enzymatische und nicht-enzymatische antioxidative Schutzsystem der Zelle erläutern",
        "Die Rolle von NADPH und dem Pentosephosphatweg für die antioxidative Kapazität erklären",
        "ROS als Signalmoleküle einordnen und den Unterschied zwischen physiologischer und pathologischer ROS-Produktion beschreiben",
      ],
      sections: [
        {
          heading: "Bildung und Klassifikation von ROS",
          text: "Superoxid (O₂·⁻) ist das primäre ROS der Atmungskette. SOD wandelt es zu H₂O₂ um (Disproportionierung). H₂O₂ ist membrangängig und modulerat reaktiv. Das Hydroxyl-Radikal (·OH), gebildet durch die Fenton-Reaktion (Fe²⁺ + H₂O₂), ist das reaktivste ROS und kann jedes biologische Molekül in diffusionslimitierter Geschwindigkeit oxidieren. Peroxynitrit (ONOO⁻, aus O₂·⁻ + NO) schädigt Proteine durch Nitrosierung.",
          merksatz:
            "ROS-Kaskade: O₂ → O₂·⁻ (1e⁻) → H₂O₂ (SOD) → ·OH (Fenton: Fe²⁺). Hydroxyl-Radikal ist das reaktivste.",
        },
        {
          heading: "Enzymatisches Antioxidans-System",
          text: "SOD (Superoxiddismutase) → Katalase → Glutathion-Peroxidase (GPx) bilden eine Kaskade: SOD entgiftet O₂·⁻ zu H₂O₂, Katalase und GPx bauen H₂O₂ ab. GPx benötigt GSH (Glutathion), das durch Glutathion-Reduktase auf Kosten von NADPH regeneriert wird. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (G6PD). G6PD-Mangel unterbricht diese Kette.",
          merksatz:
            "SOD → H₂O₂ → Katalase/GPx → H₂O. GPx braucht GSH; GSH-Reduktase regeneriert GSH mit NADPH.",
        },
        {
          heading: "Nicht-enzymatische Antioxidantien",
          text: "Vitamin E (α-Tocopherol, fettlöslich) schützt Membranen vor Lipidperoxidation; Vitamin C (Ascorbat, wasserlöslich) regeneriert Vitamin E. Glutathion (GSH) ist das wichtigste intrazelluläre Antioxidans und Co-Substrat von GPx. Harnsäure ist wichtig im Plasma. β-Carotin quencht Singlett-Sauerstoff. Coenzym Q₁₀ (Ubichinol) hat membrangebundene antioxidative Funktion.",
          merksatz:
            "Vitamin E (Membran) + Vitamin C (Zytosol, regeneriert Vit. E) + GSH + Harnsäure (Plasma) = Antioxidans-Team.",
        },
        {
          heading: "ROS als Signalmoleküle — Redox-Signaling",
          text: "Physiologische H₂O₂-Konzentrationen (nanomolar) wirken als Signalmoleküle: Sie oxidieren reaktive Cysteine in Phosphatasen und Kinasen, ändern deren Aktivität und modulieren Signalwege (NF-κB, Nrf2, HIF-1α). NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom (oxidativer Burst). Mitochondriale ROS triggern Apoptose. Zu viel ROS = Distress; kontrollierte ROS = Eustress.",
          merksatz:
            "Redox-Signaling: H₂O₂ oxidiert Cystein-SH → Konformationsänderung → Signalwirkung (physiologisch bei niedrigen Konz.).",
        },
      ],
      merksätze: [
        "ROS-Kaskade: O₂ →(1e⁻)→ O₂·⁻ →(SOD)→ H₂O₂ →(Fenton/Fe²⁺)→ ·OH",
        "Hydroxyl-Radikal (·OH) ist das reaktivste ROS — keine spezifische Entgiftung möglich",
        "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺ (Eisenkatalyse!)",
        "SOD: O₂·⁻ → H₂O₂ + O₂ (Disproportionierung; 3 Isoformen: Cu/Zn, Mn, extrazellulär)",
        "Katalase: H₂O₂ → H₂O + ½O₂ (peroxisomal; höchste Umsatzzahl aller Enzyme)",
        "GPx: H₂O₂ + 2GSH → 2H₂O + GSSG (Selen im aktiven Zentrum)",
        "NADPH aus Pentosephosphatweg regeneriert GSH über Glutathion-Reduktase",
        "G6PD-Mangel → NADPH-Mangel → GSH-Mangel → oxidative Hämolyse (X-chromosomal)",
        "Vitamin E (fettlöslich, Membranschutz) + Vitamin C (wasserlöslich, regeneriert Vit. E)",
        "Oxidativer Stress: ROS > antioxidative Kapazität → Lipidperoxidation, DNA-Schäden, Proteincarbonylierung",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie das antioxidative Schutzsystem der Zelle. Wie arbeiten enzymatische und nicht-enzymatische Antioxidantien zusammen, und welche klinische Relevanz hat ein G6PD-Mangel?",
        answer:
          "Das antioxidative Schutzsystem der Zelle besteht aus zwei Ebenen: enzymatische und nicht-enzymatische Antioxidantien, die koordiniert gegen reaktive Sauerstoffspezies (ROS) vorgehen. Das primäre ROS, Superoxid (O₂·⁻), wird von der Superoxiddismutase (SOD) durch Disproportionierung in Wasserstoffperoxid (H₂O₂) und O₂ umgewandelt: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. H₂O₂ ist weniger reaktiv, aber noch gefährlich, da es durch die Fenton-Reaktion (Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺) zum extrem reaktiven Hydroxyl-Radikal (·OH) führen kann. Zwei Enzyme bauen H₂O₂ ab: (1) Katalase (peroxisomal): H₂O₂ → H₂O + ½O₂, sehr schnell. (2) Glutathion-Peroxidase (GPx): H₂O₂ + 2GSH → 2H₂O + GSSG, verbraucht dabei reduziertes Glutathion (GSH). Das oxidierte Glutathion (GSSG) wird durch Glutathion-Reduktase auf Kosten von NADPH regeneriert: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (PPW), dessen erster Schritt von Glucose-6-Phosphat-Dehydrogenase (G6PD) katalysiert wird. Nicht-enzymatische Antioxidantien ergänzen dieses System: Glutathion (GSH, direkter Radikalfänger), Vitamin E (α-Tocopherol, Membranschutz durch Abfangen von Lipidperoxyl-Radikalen), Vitamin C (Ascorbat, wasserlöslich, regeneriert Vitamin E, direkte Radikalabfangung), Harnsäure (wichtig im Plasma) und β-Carotin (Singlett-Sauerstoff-Quencher). Klinische Relevanz G6PD-Mangel: G6PD-Mangel ist die häufigste Enzymopathie weltweit (ca. 400 Millionen Betroffene), X-chromosomal vererbt. Erythrozyten haben keinen Zellkern und können Enzyme nicht neu synthetisieren — mit G6PD-Mangel können sie kein NADPH produzieren, weshalb GSH nicht regeneriert werden kann. Bei Exposition zu Oxidantien (Malaria-Medikament Primaquin, Favabohnen, Infektionen) kommt es zu unkontrolliertem oxidativem Stress im Erythrozyten, Hämolyse der Membran und hämolytischer Anämie.",
      },
      klinischerBezug:
        "Reaktive Sauerstoffspezies (ROS) spielen eine zentrale Rolle in der Pathogenese häufiger Erkrankungen: Oxidierte LDL-Partikel (durch ROS-Angriff) werden von Makrophagen in der Gefäßwand aufgenommen und bilden Schaumzellen — Ausgangspunkt der Arteriosklerose. Bei ischämischer Reperfusion (z. B. nach Myokardinfarkt) entsteht ein ROS-Burst, der zusätzlichen Gewebeschaden verursacht (Reperfusionsschaden). Pharmakologische Antioxidantien (N-Acetylcystein als GSH-Vorläufer, Allopurinol, Vitamin E) werden klinisch eingesetzt, um oxidativen Stress bei Paracetamol-Vergiftung, Nierenprotektoin und kardiovaskulären Erkrankungen zu reduzieren.",
      selfTest: [
        {
          question: "Welches ROS entsteht durch die Fenton-Reaktion?",
          options: [
            "Superoxid (O₂·⁻)",
            "Wasserstoffperoxid (H₂O₂)",
            "Hydroxyl-Radikal (·OH)",
            "Singlett-Sauerstoff (¹O₂)",
            "Peroxynitrit (ONOO⁻)",
          ],
          correctIndex: 2,
          explanation:
            "Die Fenton-Reaktion lautet: Fe²⁺ + H₂O₂ → Fe³⁺ + OH⁻ + ·OH. Das Hydroxyl-Radikal (·OH) ist das Produkt und gleichzeitig das reaktivste bekannte ROS. Es kann ohne Enzymkatalyse praktisch jedes biologische Molekül oxidieren — Lipide, Proteine, DNA — in diffusionslimitierter Geschwindigkeit (k ≈ 10⁹–10¹⁰ L·mol⁻¹·s⁻¹). Da es keine spezifische Entgiftungsmöglichkeit gibt, ist die Vorbeugung seiner Bildung durch H₂O₂-Abbau (Katalase, GPx) und Eisenbindung (Ferritin, Transferrin) essenziell.",
          hints: [
            "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ? — das Produkt ist das reaktivste ROS",
            "·OH = Hydroxyl-Radikal; nicht zu verwechseln mit OH⁻ (Hydroxid-Ion)",
          ],
          difficulty: 1,
          tags: ["fenton-reaktion", "hydroxyl-radikal", "ros"],
        },
        {
          question: "Welches Enzym katalysiert die Disproportionierung von Superoxid (O₂·⁻)?",
          options: [
            "Katalase",
            "Glutathion-Peroxidase",
            "Superoxiddismutase (SOD)",
            "Glutathion-Reduktase",
            "NADPH-Oxidase",
          ],
          correctIndex: 2,
          explanation:
            "Die Superoxiddismutase (SOD) katalysiert: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. Es handelt sich um eine Disproportionierung (Comproportionierung) — ein Teil des Superoxids wird zu H₂O₂ reduziert (OZ von −1/2 auf −1), ein anderer Teil zu O₂ oxidiert (OZ von −1/2 auf 0). Drei SOD-Isoformen existieren beim Menschen: SOD1 (Cu/Zn, zytosolisch, dominant im ZNS), SOD2 (Mn, mitochondrial, besonders wichtig bei hohem O₂·⁻-Fluss), SOD3 (Cu/Zn, sekretiert). SOD1-Mutationen sind mit familiärer ALS assoziiert.",
          hints: [
            "Das Enzym heißt nach seinem Substrat: Superoxid-Dis-mutase",
            "Disproportionierung: O₂·⁻ wird gleichzeitig oxidiert (→O₂) und reduziert (→H₂O₂)",
          ],
          difficulty: 1,
          tags: ["sod", "superoxid-dismutase", "superoxid"],
        },
        {
          question: "Welche Aussage zu Glutathion (GSH) ist korrekt?",
          options: [
            "GSH ist ein fettlösliches Antioxidans, das Membranen schützt",
            "GSH ist ein Tripeptid (γ-Glu-Cys-Gly), das als Co-Substrat der Glutathion-Peroxidase dient",
            "GSH wird durch Katalase regeneriert",
            "GSH enthält Selen im aktiven Zentrum",
            "Oxidiertes GSSG wird durch NADH regeneriert",
          ],
          correctIndex: 1,
          explanation:
            "Glutathion (GSH) ist ein Tripeptid aus γ-Glutaminsäure, Cystein und Glycin (γ-Glu-Cys-Gly). Die ungewöhnliche γ-Peptidbindung schützt es vor normalen Peptidasen. Die freie SH-Gruppe des Cysteins ist der antioxidativ wirksame Teil. Als Co-Substrat der Glutathion-Peroxidase (GPx) wird GSH zu GSSG oxidiert: H₂O₂ + 2GSH → 2H₂O + GSSG. Regeneriert wird GSH durch die Glutathion-Reduktase auf Kosten von NADPH: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. Das Selen befindet sich im aktiven Zentrum der GPx (als Selenocystein), nicht im Glutathion selbst.",
          hints: [
            "GSH ist ein Tripeptid (3 Aminosäuren) mit einer reaktiven SH-Gruppe",
            "GPx braucht GSH als Reduktionsmittel; was entsteht dabei?",
          ],
          difficulty: 2,
          tags: ["glutathion", "gsh", "gsx-peroxidase"],
        },
        {
          question: "Warum führt G6PD-Mangel zu hämolytischer Anämie bei Exposition zu Oxidantien?",
          options: [
            "G6PD produziert direkt Hämoglobin, dessen Mangel zur Hämolyse führt",
            "G6PD ist für die Synthese von Häm erforderlich",
            "G6PD-Mangel → weniger NADPH → kein GSH-Regeneration → oxidativer Stress → Erythrozytenmembran-Hämolyse",
            "G6PD baut Oxidantien direkt ab; ohne G6PD akkumulieren sie",
            "G6PD aktiviert Katalase; ohne G6PD fehlt die H₂O₂-Entgiftung",
          ],
          correctIndex: 2,
          explanation:
            "G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der geschwindigkeitsbestimmende Schritt des Pentosephosphatwegs und die Hauptquelle für NADPH in Erythrozyten. NADPH wird benötigt, um GSSG zu GSH zu regenerieren (durch Glutathion-Reduktase). Ohne ausreichend NADPH sinkt der GSH-Spiegel. GSH ist der wichtigste antioxidative Schutz im Erythrozyten. Bei oxidativem Stress (Primaquin, Favabohnen, Infektionen) können Erythrozyten mit G6PD-Mangel ROS nicht ausreichend neutralisieren → Oxidation von Hämoglobin zu Methämoglobin und Heinz-Körper-Bildung → Hämolyse. G6PD-Mangel ist X-chromosomal und schützt heterozygote Frauen partiell vor schwerer Malaria.",
          hints: [
            "G6PD → NADPH → Glutathion-Reduktase → GSH. Wo ist die Kette unterbrochen?",
            "Erythrozyten haben keinen Kern und können Enzyme nicht neu synthetisieren — was passiert, wenn GSH aufgebraucht ist?",
          ],
          difficulty: 2,
          tags: ["g6pd-mangel", "nadph", "hämolytische-anämie"],
        },
        {
          question: "Welche Aussage zu Vitamin E (α-Tocopherol) ist korrekt?",
          options: [
            "Vitamin E ist wasserlöslich und schützt zytosolische Proteine vor Oxidation",
            "Vitamin E wirkt als Prooxidans bei hohen Dosen",
            "Vitamin E fängt Lipidperoxyl-Radikale in Membranen ab und wird dabei selbst zum Tocopherol-Radikal, das durch Vitamin C regeneriert wird",
            "Vitamin E aktiviert die Katalase und erhöht deren Umsatzrate",
            "Vitamin E wird durch GSH direkt regeneriert ohne Beteiligung von Vitamin C",
          ],
          correctIndex: 2,
          explanation:
            "Vitamin E (α-Tocopherol) ist fettlöslich und lokalisiert in Zellmembranen. Es fängt Lipidperoxyl-Radikale (LOO·) ab, die bei Lipidperoxidation entstehen: LOO· + Vit-E-OH → LOOH + Vit-E-O· (Tocopherol-Radikal). Das resultierende Tocopherol-Radikal ist stabil und wenig reaktiv. Es wird durch Vitamin C (Ascorbat) im wässrigen Milieu regeneriert: Vit-E-O· + Ascorbat → Vit-E-OH + Ascorbyl-Radikal. Das Ascorbyl-Radikal wird durch Glutathion oder NADPH-abhängige Reduktasen regeneriert. Diese Kaskade Vitamin E → Vitamin C → GSH/NADPH verbindet die membrangebundene mit der zytosolischen Antioxidans-Ebene.",
          hints: [
            "Vitamin E = fettlöslich = Membranschutz; es fängt Radikale ab und wird selbst zum Radikal",
            "Wer regeneriert das Tocopherol-Radikal — ein anderes Antioxidans?",
          ],
          difficulty: 2,
          tags: ["vitamin-e", "tocopherol", "fettlösliches-antioxidans"],
        },
        {
          question: "Welche pathologische Folge entsteht primär durch Lipidperoxidation?",
          options: [
            "8-Oxo-Guanin-Bildung in der DNA",
            "Proteincarbonylierung und Enzyminaktivierung",
            "Membranschädigung durch Kettenreaktion an ungesättigten Fettsäuren",
            "Mitochondriale DNA-Deletionen durch direkte ·OH-Angriffe",
            "Histon-Acetylierung und epigenetische Veränderungen",
          ],
          correctIndex: 2,
          explanation:
            "Lipidperoxidation ist eine Kettenreaktion (Initiierung → Propagation → Termination), die bevorzugt mehrfach ungesättigte Fettsäuren (PUFA) in Membranen befällt. Initiierung: ·OH entzieht einer PUFA ein H-Atom → Lipidradikal L·. Propagation: L· + O₂ → LOO· (Peroxyl-Radikal); LOO· + LH → LOOH + L· (Kettenreaktion). Termination: zwei Radikale reagieren. Produkte sind Malondialdehyd (MDA), 4-Hydroxynonenal (4-HNE) und Isoprostane — Biomarker für oxidativen Stress. Die Konsequenz ist strukturelle Membranschädigung, veränderte Permeabilität und Rezeptorfunktion sowie Aktivierung von Apoptose.",
          hints: [
            "Lipidperoxidation = Membranen; welcher Membranbestandteil wird primär angegriffen?",
            "Es handelt sich um eine Kettenreaktion (Radikal → erzeugt neues Radikal)",
          ],
          difficulty: 2,
          tags: ["lipidperoxidation", "membranschaden", "ros-kettenreaktion"],
        },
        {
          question:
            "Welche ROS wirkt als physiologisches Signalmolekül bei nanomolaren Konzentrationen?",
          options: [
            "Hydroxyl-Radikal (·OH)",
            "Superoxid (O₂·⁻)",
            "Wasserstoffperoxid (H₂O₂)",
            "Peroxynitrit (ONOO⁻)",
            "Singlett-Sauerstoff (¹O₂)",
          ],
          correctIndex: 2,
          explanation:
            "H₂O₂ ist das wichtigste ROS-Signalmolekül bei niedrigen (nanomolaren) Konzentrationen. Es ist ausreichend stabil (Halbwertszeit Millisekunden bis Sekunden), membrangängig über Aquaporine, und reagiert selektiv mit hochreaktiven Cysteinresten in Enzymen und Transkriptionsfaktoren. Durch Oxidation von Cys-SH zu Cys-SOH (Sulfensäure) werden Phosphatasen gehemmt (z. B. PTP1B) oder Kinasen aktiviert — Redox-Signaling. Aktivierte Transkriptionsfaktoren: Nrf2 (antioxidative Gene), NF-κB (Inflammation), HIF-1α (Hypoxieantwort). Das Hydroxyl-Radikal ist zu reaktiv für selektives Signaling; O₂·⁻ ist geladen und schlecht membrangängig.",
          hints: [
            "Welches ROS ist stabil genug für Signalwege (nicht zu reaktiv), aber reaktiv genug für Proteinmodifikation?",
            "H₂O₂ ist membrangängig und oxidiert selektiv reaktive Cysteine in Signalproteinen",
          ],
          difficulty: 3,
          tags: ["h2o2-signaling", "redox-signaling", "nrf2"],
        },
        {
          question: "Welche Aussage zum oxidativen Burst von Makrophagen ist korrekt?",
          options: [
            "Makrophagen produzieren ROS versehentlich als Nebenprodukt der Phagozytose",
            "NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom zur Pathogenabwehr",
            "Makrophagen nutzen Katalase, um H₂O₂ zur Abtötung von Bakterien einzusetzen",
            "Der oxidative Burst produziert NO als einziges antimikrobielles ROS",
            "Der oxidative Burst aktiviert SOD, um die ROS-Produktion zu verstärken",
          ],
          correctIndex: 1,
          explanation:
            "Die NADPH-Oxidase (NOX2, auch Phagozyt-Oxidase) ist ein Multiprotein-Enzymkomplex, der bei Aktivierung von Makrophagen und Neutrophilen gezielt O₂·⁻ ins Phagosom produziert: 2O₂ + NADPH → 2O₂·⁻ + NADP⁺ + H⁺. Dieses O₂·⁻ wird zu H₂O₂ dismutiert, aus dem Myeloperoxidase (MPO) Hypochlorit (HOCl, 'Bleiche') bildet: H₂O₂ + Cl⁻ → HOCl + OH⁻. HOCl ist hochwirksam gegen Bakterien. Chronische Granulomatose (CGD) ist eine seltene Erkrankung mit NOX2-Defekt — Patienten leiden an schweren, rezidivierenden Infektionen mit katalasepositiven Bakterien (die ihr eigenes H₂O₂ abbauen).",
          hints: [
            "NADPH-Oxidase = NOX2, produziert gezielt Superoxid (O₂·⁻) zur Pathogenabwehr",
            "Der oxidative Burst ist eine GEWOLLTE, kontrollierte ROS-Produktion — kein Versehen",
          ],
          difficulty: 2,
          tags: ["oxidativer-burst", "nadph-oxidase", "makrophagen"],
        },
      ],
    },
  ],
};
