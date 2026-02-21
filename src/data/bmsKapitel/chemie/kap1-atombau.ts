import type { Kapitel } from '../types';

export const chemKap1: Kapitel = {
  id: 'chem-kap1',
  title: 'Atombau',
  subject: 'chemie',
  icon: '⚛️',
  estimatedTime: '45 min',
  unterkapitel: [
    {
      id: 'ch-1-01',
      title: 'Elementarteilchen und Atomaufbau',
      content: `## Elementarteilchen: die Bausteine der Materie

Atome bestehen aus drei grundlegenden Elementarteilchen: **Protonen**, **Neutronen** und **Elektronen**. Im Atomkern befinden sich Protonen (positive Ladung +1e) und Neutronen (elektrisch neutral). Die negativ geladenen Elektronen (-1e) umgeben den Kern in der Elektronenhülle.

## Ordnungszahl und Massenzahl

Die **Ordnungszahl Z** entspricht der Anzahl der Protonen im Kern und ist elementspezifisch — sie bestimmt die Identität des Elements. In einem neutralen Atom gilt stets: Protonenanzahl = Elektronenanzahl. Die **Massenzahl A** ergibt sich aus der Summe von Protonen und Neutronen: A = Z + N. Die Neutronenzahl N berechnet sich demnach als N = A − Z.

## Bohrsches Atommodell

Das Bohrsche Atommodell beschreibt Elektronen auf kreisförmigen Bahnen (Schalen) um den Kern. Die Schalen werden mit K, L, M, N bezeichnet und entsprechen den Hauptquantenzahlen n = 1, 2, 3, 4. Jede Schale fasst maximal 2n² Elektronen: K-Schale (n=1) → 2, L-Schale (n=2) → 8, M-Schale (n=3) → 18. Elektronen besetzen immer zuerst die energieärmste, kernnahe Schale.

## Isotope

Isotope sind Atome desselben Elements (gleiche Ordnungszahl Z), die sich in der Neutronenzahl und damit in der Massenzahl unterscheiden. Beispiel: Kohlenstoff hat die Isotope ¹²C (6p, 6n), ¹³C (6p, 7n) und ¹⁴C (6p, 8n). Alle drei sind Kohlenstoff (Z=6), aber mit unterschiedlichen physikalischen Eigenschaften. Manche Isotope sind stabil, andere radioaktiv.

## Praktische Bedeutung

Die Kenntnis des Atomaufbaus ist Grundlage für das Verständnis chemischer Bindungen, Reaktivität und physikalischer Eigenschaften. Die Ordnungszahl definiert die Position im Periodensystem und damit alle chemischen Eigenschaften eines Elements.`,
      lernziele: [
        "Protonen, Neutronen und Elektronen nach Ladung, Masse und Ort im Atom korrekt beschreiben",
        "Ordnungszahl und Massenzahl definieren und daraus Protonen-, Neutronen- und Elektronenanzahl berechnen",
        "Das Bohrsche Schalenmodell erklären und maximale Elektronenanzahl pro Schale berechnen",
      ],
      sections: [
        {
          heading: "Aufbau des Atomkerns",
          text: "Der Atomkern enthält Protonen und Neutronen, die gemeinsam als Nukleonen bezeichnet werden. Protonen tragen eine positive Elementarladung von +1,602×10⁻¹⁹ C und haben eine Masse von etwa 1,673×10⁻²⁷ kg. Neutronen sind ungeladen und haben eine vergleichbare Masse. Da der Kern positiv geladen ist, wirkt eine starke Coulomb-Abstoßung zwischen den Protonen; die Kernkraft überwindet diese Abstoßung auf sehr kurze Distanz. Der Kern ist extrem klein (10⁻¹⁵ m) verglichen mit dem gesamten Atom (10⁻¹⁰ m), enthält aber nahezu die gesamte Atommasse. Die Elektronen in der Hülle sind mit ~9,1×10⁻³¹ kg rund 1836-mal leichter als ein Proton.",
        },
        {
          heading: "Schalenmodell und Elektronenbesetzung",
          text: "Im Bohrschen Schalenmodell bewegen sich Elektronen auf diskreten, stationären Bahnen mit definierten Energieniveaus. Der Wechsel zwischen Schalen erfordert Energieaufnahme (Anregung) oder -abgabe (Emission von Licht). Die Besetzungsregel 2n² beschreibt die maximale Elektronenzahl: K(n=1)→2, L(n=2)→8, M(n=3)→18, N(n=4)→32. Natrium (Z=11) hat zum Beispiel die Verteilung 2-8-1, wobei das einzelne Elektron in der M-Schale das Valenzelektron ist, das für die chemischen Eigenschaften von Natrium verantwortlich ist. Das Bohrsche Modell ist vereinfacht, liefert aber für Wasserstoff exakte Spektrallinien-Vorhersagen.",
        },
      ],
      merksätze: [
        "Z = Protonenzahl = Elektronenzahl (im neutralen Atom); A = Z + N",
        "Schale n fasst maximal 2n² Elektronen: K=2, L=8, M=18",
        "Isotope: gleiche Z, verschiedene A (= verschiedene Neutronenzahl N)",
      ],
      klinischerBezug: "Die Kenntnis des Atomaufbaus ist Basis für die Nuklearmedizin: Radioaktive Isotope mit gleicher Ordnungszahl wie stabile Elemente werden vom Körper identisch verstoffwechselt und ermöglichen so gezielte Diagnostik und Therapie.",
      altfrage: {
        question: "Welche Aussage über Isotope ist korrekt?",
        answer: "Isotope sind Atome desselben Elements, haben also die gleiche Ordnungszahl (Protonenzahl), unterscheiden sich aber in ihrer Neutronenzahl und damit in ihrer Massenzahl. Ihre chemischen Eigenschaften sind nahezu identisch, da diese durch die Elektronenkonfiguration (= Protonenzahl) bestimmt werden.",
      },
      selfTest: [
        {
          question: "Ein Atom hat die Ordnungszahl Z=17 und die Massenzahl A=35. Wie viele Neutronen enthält sein Kern?",
          options: [
            "17",
            "18",
            "35",
            "52",
            "15",
          ],
          correctIndex: 1,
          explanation: "N = A − Z = 35 − 17 = 18 Neutronen. Dies ist das häufigste Chlorisotop ³⁵Cl.",
          hints: [
            "Verwende die Formel N = A − Z",
            "Z ist die Protonenzahl, A ist die Gesamtzahl der Nukleonen",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie viele Elektronen passen maximal in die M-Schale (n=3)?",
          options: [
            "2",
            "8",
            "10",
            "18",
            "32",
          ],
          correctIndex: 3,
          explanation: "Die maximale Elektronenzahl einer Schale berechnet sich mit 2n². Für n=3: 2×3²=2×9=18 Elektronen.",
          hints: [
            "Verwende die Formel 2n²",
            "Für n=3 ist n²=9",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches der folgenden Paare stellt Isotope voneinander dar?",
          options: [
            "¹H und ²He",
            "¹²C und ¹⁴N",
            "¹²C und ¹⁴C",
            "¹⁶O und ¹⁸F",
            "²³Na und ²⁴Mg",
          ],
          correctIndex: 2,
          explanation: "¹²C und ¹⁴C sind Isotope: Beide haben Z=6 (Kohlenstoff), aber verschiedene Massenzahlen (12 und 14) durch unterschiedliche Neutronenzahlen. Bei allen anderen Paaren unterscheidet sich auch die Ordnungszahl.",
          hints: [
            "Isotope haben gleiche Ordnungszahl, aber verschiedene Massenzahl",
            "Prüfe bei jedem Paar, ob beide Atome zum selben Element gehören",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein neutrales Atom hat 11 Protonen. Wie ist die Elektronenverteilung auf K-, L- und M-Schale?",
          options: [
            "2 – 9 – 0",
            "2 – 8 – 1",
            "3 – 8 – 0",
            "2 – 7 – 2",
            "1 – 8 – 2",
          ],
          correctIndex: 1,
          explanation: "Natrium (Z=11) hat 11 Elektronen. Die K-Schale fasst 2, die L-Schale 8, dann bleibt 1 Elektron für die M-Schale: Verteilung 2-8-1.",
          hints: [
            "Befülle die Schalen von innen nach außen",
            "K→2, L→8, M→Rest",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die korrekte Aussage über Neutronen im Atomkern?",
          options: [
            "Sie tragen eine negative Ladung und stabilisieren den Kern durch Anziehung der Protonen",
            "Sie tragen eine positive Ladung und verursachen die Coulomb-Abstoßung",
            "Sie sind elektrisch neutral und tragen zur Massenzahl, aber nicht zur Ordnungszahl bei",
            "Sie sind elektrisch neutral, aber ihre Anzahl bestimmt die chemischen Eigenschaften",
            "Sie befinden sich in der Elektronenhülle und interagieren mit Protonen",
          ],
          correctIndex: 2,
          explanation: "Neutronen sind elektrisch neutral. Sie tragen zur Massenzahl A bei (A = Z + N), aber nicht zur Ordnungszahl Z. Da die chemischen Eigenschaften durch die Elektronenkonfiguration (= Protonenzahl) bestimmt werden, haben Neutronen keinen direkten Einfluss darauf.",
          hints: [
            "Neutronen sind das einzige der drei Elementarteilchen ohne Ladung",
            "Ordnungszahl = nur Protonenzahl, Massenzahl = Protonen + Neutronen",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-1-02',
      title: 'Isotope, Nuklide und radioaktive Elemente',
      content: `## Isotopenschreibweise

Nuklide werden mit der Notation ᴬ_Z X dargestellt, wobei X das Elementsymbol, A die Massenzahl (oben links) und Z die Ordnungszahl (unten links) ist. Beispiel: ¹²₆C steht für Kohlenstoff-12 mit 6 Protonen und 6 Neutronen. Da das Elementsymbol die Ordnungszahl bereits impliziert, wird Z häufig weggelassen.

## Stabile und radioaktive Isotope

Nicht alle Isotope sind stabil. Die Stabilität hängt vom Verhältnis von Neutronen zu Protonen ab. Leichte Elemente sind stabil bei N/Z ≈ 1 (z.B. ¹²C), schwerere Elemente brauchen mehr Neutronen (N/Z bis ~1,5). Bei Instabilität zerfällt der Kern spontan durch radioaktiven Zerfall (α-, β-, γ-Strahlung).

## Radiokohlenstoffdatierung (C-14-Methode)

¹⁴C entsteht kontinuierlich in der Atmosphäre durch Neutronenbeschuss von Stickstoff. Lebende Organismen nehmen ¹⁴C proportional zur atmosphärischen Konzentration auf. Nach dem Tod hört die Aufnahme auf, und das ¹⁴C zerfällt mit einer Halbwertszeit von 5730 Jahren. Durch Messung der verbleibenden ¹⁴C-Aktivität lässt sich das Alter organischer Proben bestimmen (bis ~50.000 Jahre).

## Medizinische Isotope

In der Nuklearmedizin werden gezielt radioaktive Isotope eingesetzt. **¹³¹I** (Jod-131, Halbwertszeit 8 Tage) reichert sich in der Schilddrüse an und wird zur Schilddrüsenszintigraphie und Therapie (Radiojodtherapie) genutzt. **Tc-99m** (Technetium-99m, Halbwertszeit 6 Stunden) ist ein Gammastrahler und das am häufigsten verwendete Diagnostikum in der Szintigraphie — kurze Halbwertszeit minimiert Strahlenbelastung.

## Relative Atommasse

Da Elemente in der Natur als Isotopengemisch vorkommen, ist die im Periodensystem angegebene Atommasse ein **gewichteter Durchschnitt** der Isotopenmassen. Beispiel: Chlor hat ³⁵Cl (75,77%) und ³⁷Cl (24,23%), daher: M(Cl) = 0,7577×35 + 0,2423×37 ≈ 35,45 g/mol.`,
      lernziele: [
        "Die Isotopenschreibweise ᴬ_Z X erklären und korrekt anwenden",
        "Stabile von radioaktiven Isotopen unterscheiden und die Grundprinzipien der C-14-Datierung erläutern",
        "Die relative Atommasse als gewichteten Durchschnitt der Isotopenmassen berechnen",
      ],
      sections: [
        {
          heading: "Medizinische Isotope und ihre Anwendungen",
          text: "Radioaktive Isotope werden in der Medizin sowohl diagnostisch als auch therapeutisch eingesetzt. Für die Diagnostik sind kurzlebige Isotope mit Gammastrahlung ideal, da sie gut detektierbar sind und die Strahlenbelastung gering halten. Tc-99m (6h Halbwertszeit) ist der wichtigste diagnostische Tracer: Er wird an verschiedene Trägermoleküle gekoppelt und reichert sich organspezifisch an. PET (Positronen-Emissions-Tomographie) nutzt Positronenstrahler wie ¹⁸F-FDG zur Tumordiagnostik. Therapeutisch wird ¹³¹I bei Schilddrüsenüberfunktion und differenziertem Schilddrüsenkarzinom eingesetzt: Das Jod reichert sich selektiv in Schilddrüsenzellen an und zerstört diese durch β-Strahlung. Die Halbwertszeit von 8 Tagen erlaubt ambulante Behandlung.",
        },
        {
          heading: "Halbwertszeit und radioaktiver Zerfall",
          text: "Die Halbwertszeit T½ ist die Zeit, in der die Hälfte einer radioaktiven Probe zerfällt. Sie ist charakteristisch für jedes Nuklid und unabhängig von äußeren Bedingungen (Temperatur, Druck, chemischer Bindung). Nach n Halbwertszeiten ist noch 1/2ⁿ der ursprünglichen Menge vorhanden. Das Zerfallsgesetz lautet: N(t) = N₀ × e^(−λt), wobei λ = ln2/T½ die Zerfallskonstante ist. Für medizinische Anwendungen ist T½ ein Schlüsselparameter: zu kurz bedeutet, das Isotop zerfällt vor der Untersuchung; zu lang bedeutet unnötige Strahlenbelastung. Tc-99m mit T½=6h ist für Tagesuntersuchungen ideal.",
        },
      ],
      merksätze: [
        "ᴬ_Z X: A oben = Massenzahl, Z unten = Ordnungszahl, N = A−Z",
        "Tc-99m: kurzlebig (6h), Gammastrahler → ideal für Diagnostik",
        "Relative Atommasse = gewichteter Durchschnitt aller stabilen Isotope",
      ],
      klinischerBezug: "Tc-99m wird in über 80% aller nuklearmedizinischen Untersuchungen eingesetzt; seine kurze Halbwertszeit von 6 Stunden minimiert die Strahlenbelastung des Patienten, während die Gammaemission eine optimale Detektion mit der Gammakamera erlaubt.",
      altfrage: {
        question: "Warum ist Tc-99m besonders gut als diagnostisches Isotop geeignet?",
        answer: "Tc-99m ist ein reiner Gammastrahler (keine α- oder β-Strahlung, die nur lokale Gewebeschäden verursachen würde) und hat eine kurze Halbwertszeit von 6 Stunden, was rasche Diagnostik bei minimaler Strahlenbelastung ermöglicht. Zudem lässt es sich leicht an verschiedene Trägermoleküle koppeln.",
      },
      selfTest: [
        {
          question: "Welche Aussage zur Schreibweise ⁵⁶₂₆Fe ist korrekt?",
          options: [
            "Eisen mit 56 Neutronen und 26 Protonen",
            "Eisen mit 56 Protonen und 26 Neutronen",
            "Eisen mit 56 Nukleonen, davon 26 Protonen und 30 Neutronen",
            "Eisen mit 56 Elektronen und 26 Kernladungen",
            "Eisen mit der Massenzahl 26 und 56 Nukleonen insgesamt",
          ],
          correctIndex: 2,
          explanation: "A=56 ist die Massenzahl (Gesamtzahl der Nukleonen), Z=26 ist die Ordnungszahl (Protonenzahl). Die Neutronenzahl berechnet sich: N = A − Z = 56 − 26 = 30.",
          hints: [
            "Die obere Zahl ist die Massenzahl A, die untere ist Z",
            "N = A − Z",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Chlor besteht zu 75% aus ³⁵Cl und zu 25% aus ³⁷Cl. Was ist die relative Atommasse von Chlor?",
          options: [
            "35,0 g/mol",
            "35,5 g/mol",
            "36,0 g/mol",
            "36,5 g/mol",
            "37,0 g/mol",
          ],
          correctIndex: 1,
          explanation: "Gewichteter Durchschnitt: 0,75 × 35 + 0,25 × 37 = 26,25 + 9,25 = 35,5 g/mol.",
          hints: [
            "Gewichteter Durchschnitt: Σ(Anteil × Isotopenmasse)",
            "0,75 × 35 + 0,25 × 37 = ?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum wird ¹⁴C zur Altersbestimmung organischer Materialien genutzt?",
          options: [
            "Weil ¹⁴C stabil ist und sich nicht verändert",
            "Weil ¹⁴C nach dem Tod eines Organismus nicht mehr aufgenommen wird und mit bekannter Halbwertszeit zerfällt",
            "Weil ¹⁴C das häufigste Kohlenstoffisotop ist und leicht nachweisbar",
            "Weil ¹⁴C eine sehr kurze Halbwertszeit hat und daher präzise Messungen möglich sind",
            "Weil ¹⁴C sich nach dem Tod eines Organismus in ¹²C umwandelt",
          ],
          correctIndex: 1,
          explanation: "Lebende Organismen nehmen kontinuierlich ¹⁴C aus der Atmosphäre auf. Nach dem Tod hört dieser Austausch auf, und das ¹⁴C zerfällt mit T½=5730 Jahren. Durch Messung des verbleibenden ¹⁴C kann das Alter bestimmt werden.",
          hints: [
            "¹⁴C ist radioaktiv mit T½=5730 Jahre",
            "Überlege, was nach dem Tod des Organismus mit der ¹⁴C-Aufnahme passiert",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Nach 3 Halbwertszeiten sind noch wie viel Prozent eines Radioisotops vorhanden?",
          options: [
            "50%",
            "33%",
            "25%",
            "12,5%",
            "6,25%",
          ],
          correctIndex: 3,
          explanation: "Nach jeder Halbwertszeit halbiert sich die Menge: nach 1 T½: 50%, nach 2 T½: 25%, nach 3 T½: 12,5% (= 1/2³ = 1/8).",
          hints: [
            "Nach jeder Halbwertszeit halbiert sich die Menge",
            "Nach n Halbwertszeiten: (1/2)ⁿ der Ausgangsmenge",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Isotop wird zur Therapie (nicht nur Diagnostik) der Schilddrüse eingesetzt?",
          options: [
            "Tc-99m",
            "¹⁸F-FDG",
            "¹³¹I",
            "⁶⁷Ga",
            "¹¹¹In",
          ],
          correctIndex: 2,
          explanation: "¹³¹I (Jod-131) wird therapeutisch eingesetzt, weil Jod selektiv in Schilddrüsenzellen aufgenommen wird und die β-Strahlung des ¹³¹I diese Zellen lokal zerstört (Radiojodtherapie). Tc-99m ist ein reiner Gammastrahler und nur für Diagnostik geeignet.",
          hints: [
            "Die Therapie braucht Strahlung, die Gewebe lokal schädigt (β-Strahlung)",
            "Welches Element wird physiologisch in der Schilddrüse gespeichert?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-1-03',
      title: 'Elektronenhülle — Schalen, Orbitale und Besetzungsregeln',
      content: `## Quantenmechanisches Orbitalmodell

Das moderne Atommodell beschreibt Elektronen nicht auf festen Bahnen, sondern in **Orbitalen** — mathematischen Funktionen, die Aufenthaltswahrscheinlichkeiten beschreiben. Orbitale werden durch vier Quantenzahlen charakterisiert: Hauptquantenzahl n, Nebenquantenzahl l, magnetische Quantenzahl mₗ und Spinquantenzahl mₛ.

## Orbitaltypen

Je nach Nebenquantenzahl l entstehen verschiedene Orbitalformen: **s-Orbital** (l=0, kugelförmig, 1 pro Unterschale), **p-Orbitale** (l=1, hantelförmig, 3 Orbitale pₓ, pᵧ, p_z), **d-Orbitale** (l=2, komplexe Form, 5 Orbitale), **f-Orbitale** (l=3, 7 Orbitale). Jedes Orbital fasst maximal 2 Elektronen (Spin ↑↓).

## Drei Besetzungsregeln

1. **Aufbauprinzip:** Elektronen besetzen Orbitale in der Reihenfolge steigender Energie. Die Energiereihenfolge lautet: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p (Madelung-Regel).

2. **Pauli-Prinzip:** Kein Orbital kann zwei Elektronen mit gleichem Spin enthalten. Jedes Orbital fasst maximal 2 Elektronen mit entgegengesetztem Spin (↑↓).

3. **Hund'sche Regel:** Gleichwertige (entartete) Orbitale werden zuerst einzeln mit parallelem Spin besetzt, bevor eine Doppelbesetzung erfolgt. Das maximiert den Gesamtspin.

## Elektronenkonfiguration schreiben

Beispiel: Natrium (Z=11): 1s²2s²2p⁶3s¹. Das einzelne Elektron in 3s ist das **Valenzelektron**. Valenzelektronen bestimmen Reaktivität und Bindungsverhalten. In der Kurzschreibweise nutzt man Edelgaskerne: Na = [Ne] 3s¹. Weitere Beispiele: Sauerstoff (Z=8): 1s²2s²2p⁴; Eisen (Z=26): [Ar] 3d⁶4s².

## Bedeutung der Valenzelektronen

Die Anzahl der Valenzelektronen korreliert mit der Gruppenposition im Periodensystem (Hauptgruppen). Elemente mit gleicher Valenzelektronenzahl zeigen ähnliche chemische Eigenschaften (Periodizität). Das Streben nach stabiler Edelgaskonfiguration (8 Valenzelektronen, Oktettregel) treibt chemische Reaktionen an.`,
      lernziele: [
        "Die Orbitaltypen s, p, d, f und ihre räumlichen Formen unterscheiden",
        "Aufbauprinzip, Pauli-Prinzip und Hund'sche Regel korrekt anwenden",
        "Die Elektronenkonfiguration von Atomen der ersten 20 Elemente aufschreiben",
      ],
      sections: [
        {
          heading: "Die drei Besetzungsregeln im Detail",
          text: "Das Aufbauprinzip legt die Reihenfolge der Orbitalbesetzung fest. Wichtig ist, dass 4s vor 3d besetzt wird (niedrigere Energie), aber bei Ionenbildung verliert ein Übergangsmetall zuerst die 4s-Elektronen. Das Pauli-Prinzip (benannt nach Wolfgang Pauli, Nobelpreis 1945) besagt, dass keine zwei Elektronen im selben Atom identische Quantenzahlen haben dürfen — dies begrenzt jedes Orbital auf 2 Elektronen. Hund'sche Regel erklärt, warum Kohlenstoff (2p²) die Konfiguration mit zwei halbbesetzten p-Orbitalen (je ein ↑) hat und nicht ein vollbesetztes, denn parallele Spins minimieren die Abstoßungsenergie der Elektronen und senken so die Gesamtenergie.",
        },
        {
          heading: "Valenzelektronen und Periodizität",
          text: "Als Valenzelektronen bezeichnet man die Elektronen der äußersten Hauptschale. Sie sind für chemische Bindungen und die Reaktivität verantwortlich. Die Hauptgruppenzahl (1-8) entspricht der Zahl der Valenzelektronen: Natrium (Gruppe 1, [Ne]3s¹) hat 1 Valenzelektron und bildet leicht Na⁺. Chlor (Gruppe 17, [Ne]3s²3p⁵) hat 7 Valenzelektronen und nimmt leicht ein Elektron auf → Cl⁻. Edelgase (Gruppe 18) haben 8 Valenzelektronen (He: 2) und sind chemisch inert. Das Streben nach vollständiger Valenzschale (Oktett) ist die treibende Kraft für chemische Bindungen.",
        },
      ],
      merksätze: [
        "Hund: Erst alle Orbitale halb füllen, dann Paare bilden (Parallelspin zuerst)",
        "Pauli: Kein Orbital mehr als 2 Elektronen, Spin muss antiparallel sein",
        "Valenzelektronen = Elektronen der äußersten Schale = Hauptgruppennummer",
      ],
      klinischerBezug: "Das Verständnis von Elektronenkonfigurationen ist in der Pharmakologie relevant: Die Bindungseigenschaften von Metallen in Enzymen (Fe²⁺ im Hämoglobin, Zn²⁺ in der Carboanhydrase) werden durch ihre d-Orbital-Konfiguration bestimmt und erklären, warum Hemmstoffe gezielt an diese Metallzentren binden.",
      altfrage: {
        question: "Schreiben Sie die Elektronenkonfiguration von Schwefel (Z=16) und nennen Sie die Valenzelektronenzahl.",
        answer: "S (Z=16): 1s²2s²2p⁶3s²3p⁴. Die äußerste Schale ist n=3 mit 3s²3p⁴, also 6 Valenzelektronen. Schwefel steht in Hauptgruppe 6 des Periodensystems und kann 2 Elektronen aufnehmen, um die stabile Edelgaskonfiguration von Argon zu erreichen (S²⁻).",
      },
      selfTest: [
        {
          question: "Welche Elektronenkonfiguration hat Sauerstoff (Z=8)?",
          options: [
            "1s²2s²2p²",
            "1s²2s²2p⁴",
            "1s²2s⁴2p²",
            "1s²2p⁶",
            "1s²2s²2p⁶",
          ],
          correctIndex: 1,
          explanation: "Sauerstoff hat 8 Elektronen: 1s² (2) + 2s² (2) + 2p⁴ (4) = 8. Die 2p-Unterschale hat 4 Elektronen (von maximal 6).",
          hints: [
            "Fülle die Orbitale der Reihe nach: 1s, 2s, 2p",
            "Sauerstoff hat 8 Elektronen insgesamt",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was beschreibt die Hund'sche Regel?",
          options: [
            "Jedes Orbital kann maximal 2 Elektronen aufnehmen",
            "Elektronen besetzen Orbitale in der Reihenfolge steigender Energie",
            "Kein Atom kann zwei Elektronen mit identischen Quantenzahlen enthalten",
            "Entartete Orbitale werden zunächst einzeln mit parallelem Spin besetzt",
            "Die Anzahl der Elektronen in einer Schale beträgt maximal 2n²",
          ],
          correctIndex: 3,
          explanation: "Die Hund'sche Regel besagt, dass entartete (energiegleiche) Orbitale zuerst einzeln mit parallelem Spin besetzt werden, bevor eine Doppelbesetzung erfolgt. Das beschreibt z.B. die p-Orbital-Besetzung bei C, N, O.",
          hints: [
            "Die Hund'sche Regel betrifft gleichwertige (entartete) Orbitale",
            "Das Pauli-Prinzip ist eine andere Regel: max. 2 Elektronen pro Orbital",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Wie viele Valenzelektronen hat Calcium (Z=20)?",
          options: [
            "1",
            "2",
            "4",
            "8",
            "20",
          ],
          correctIndex: 1,
          explanation: "Ca (Z=20): [Ar] 4s². Calcium hat 2 Elektronen in der äußersten Schale (4s²), also 2 Valenzelektronen. Es steht in Hauptgruppe 2.",
          hints: [
            "Schreibe die Elektronenkonfiguration von Ca auf",
            "Valenzelektronen = Elektronen der äußersten Hauptschale",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zum Pauli-Prinzip ist korrekt?",
          options: [
            "Elektronen im selben Orbital müssen denselben Spin haben",
            "Kein Atom kann zwei Elektronen mit identischen Quantenzahlen haben",
            "Entartete Orbitale werden erst einzeln besetzt",
            "Elektronen besetzen zuerst die energiereichsten Orbitale",
            "Die maximale Elektronenzahl einer Schale ist n²",
          ],
          correctIndex: 1,
          explanation: "Das Pauli-Prinzip besagt, dass kein Atom zwei Elektronen mit identischen Sätzen aller vier Quantenzahlen (n, l, mₗ, mₛ) haben kann. Daher können in einem Orbital maximal 2 Elektronen mit entgegengesetztem Spin sitzen.",
          hints: [
            "Das Pauli-Prinzip bezieht sich auf alle vier Quantenzahlen",
            "Was unterscheidet zwei Elektronen im gleichen Orbital?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Elektronenkonfiguration gehört zu Eisen (Z=26)?",
          options: [
            "[Ar] 3d⁸",
            "[Ar] 4s² 3d⁶",
            "[Ar] 4s¹ 3d⁷",
            "[Ne] 3s² 3p⁶ 3d⁶",
            "[Ar] 4p⁶",
          ],
          correctIndex: 1,
          explanation: "Fe (Z=26): [Ar] hat 18 Elektronen. Die verbleibenden 8 Elektronen verteilen sich nach dem Aufbauprinzip: zuerst 4s² (2 Elektronen), dann 3d⁶ (6 Elektronen) → [Ar] 4s² 3d⁶.",
          hints: [
            "[Ar] steht für die Edelgaskonfiguration des Argons (18 Elektronen)",
            "Nach [Ar] kommt 4s vor 3d in der Besetzungsreihenfolge",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
