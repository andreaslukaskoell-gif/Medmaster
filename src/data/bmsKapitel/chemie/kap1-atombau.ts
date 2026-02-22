import type { Kapitel } from "../types";

export const chemKap1: Kapitel = {
  id: "chem-kap1",
  title: "Atombau",
  subject: "chemie",
  icon: "⚛️",
  estimatedTime: "75 min",
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────
    // UK ch-1-01: Atommodelle und Atomaufbau
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-1-01",
      title: "Atommodelle und Atomaufbau",
      content: `# Atommodelle und Atomaufbau

Die Geschichte der Atommodelle zeigt, wie wissenschaftliche Erkenntnisse schrittweise verfeinert wurden. Jedes Modell war ein Fortschritt gegenüber seinem Vorgänger, wurde aber durch neue Experimente ergänzt oder korrigiert.

## Thomson-Modell (Rosinenmodell, 1904)

J. J. Thomson, der 1897 das Elektron entdeckte, stellte sich das Atom als eine gleichmäßig positiv geladene Kugel vor, in die negativ geladene Elektronen – wie Rosinen in einem Kuchen – eingebettet sind. Das Modell erklärt Ionisation und elektrische Neutralität, scheitert jedoch an den Ergebnissen des Rutherford-Streuversuchs.

## Rutherford-Streuversuch (1911) → Kern-Modell

Ernest Rutherford beschoss eine hauchdünne Goldfolie mit positiv geladenen Alphateilchen (⁴He²⁺). Der Befund: Die meisten Teilchen passierten die Folie ungelenkt, wenige wurden stark abgelenkt, manche sogar fast direkt zurückgeworfen.

Schlussfolgerung: Die positive Ladung und fast die gesamte Masse sind in einem winzigen, dichten **Atomkern** konzentriert. Die Elektronenhülle macht fast das gesamte Volumen aus (Kerndurchmesser ≈ 10⁻¹⁵ m, Atomdurchmesser ≈ 10⁻¹⁰ m). Das Atom besteht zu 99,9 % aus leerem Raum.

## Bohrsches Atommodell (1913)

Niels Bohr postulierte, dass Elektronen auf **festen Kreisbahnen (Schalen)** um den Kern kreisen, ohne Energie abzustrahlen. Schalen werden als K, L, M, N, ... oder mit der Hauptquantenzahl n = 1, 2, 3, 4, ... bezeichnet. Maximale Elektronenzahl pro Schale: **2n²**.

Beim Übergang von einer höheren auf eine niedrigere Schale (Emission) gibt das Elektron ein Photon mit genau definierter Energie ab. Dies erklärt die Spektrallinien des Wasserstoffs (Lyman-, Balmer-, Paschen-Serie). Beim Übergang auf höhere Schalen (Absorption) wird ein Photon absorbiert.

Das Bohr-Modell versagt für Mehrelektronenatome und erklärt keine Feinstruktur der Spektren.

## Quantenmechanisches Modell (Orbital-Modell, ab 1925)

Heisenberg (Unschärfeprinzip), Schrödinger (Wellengleichung) und Dirac entwickelten das moderne Modell: Elektronen sind keine Teilchen auf festen Bahnen, sondern werden durch **Wellenfunktionen (Orbitale)** beschrieben. Ein Orbital ist ein Raumbereich, in dem ein Elektron mit 90 % Wahrscheinlichkeit anzutreffen ist.

Orbitaltypen:
- **s-Orbitale**: kugelförmig, 1 Orbital pro Unterschale
- **p-Orbitale**: hantelförmig, 3 Orbitale (pₓ, p_y, p_z) pro Unterschale
- **d-Orbitale**: kleeblattförmig (4) + ringförmig (1), 5 Orbitale pro Unterschale
- **f-Orbitale**: komplex, 7 Orbitale pro Unterschale

## Atomkern: Protonen, Neutronen, Isotope

- **Protonen**: positiv geladen (+1e), Masse ≈ 1 u; Anzahl = **Ordnungszahl Z** → definiert das Element eindeutig
- **Neutronen**: elektrisch neutral, Masse ≈ 1 u; Anzahl = **Neutronenzahl N**
- **Massenzahl**: A = Z + N (Summe aller Nukleonen)
- Schreibweise: ᴬ_Z X, z. B. ²³⁸₉₂U (Uran-238: 92 Protonen, 146 Neutronen)

**Isotope** besitzen dieselbe Ordnungszahl (gleiches Element), aber unterschiedliche Neutronenzahl → verschiedene Massenzahlen. Chemische Eigenschaften sind (nahezu) identisch, physikalische Eigenschaften (Masse, Kernstabilität) unterscheiden sich.

Beispiele: ¹H (Protium), ²H (Deuterium, D), ³H (Tritium, T); ¹²C, ¹³C, ¹⁴C.

**Stabile Isotope** haben ein günstiges N/Z-Verhältnis (bei leichten Elementen N ≈ Z; bei schwereren Z wird größer: bei Z = 82 ist N ≈ 1,5 × Z). Instabile Nuklide sind radioaktiv.`,

      lernziele: [
        "Die historische Entwicklung der Atommodelle (Thomson → Rutherford → Bohr → Quantenmechanik) erklären und die entscheidenden Experimente benennen.",
        "Protonen, Neutronen und Elektronen hinsichtlich Ladung, Masse und Ort im Atom unterscheiden; Ordnungszahl, Massenzahl und Neutronenzahl berechnen.",
        "Den Begriff Isotop definieren und an Beispielen (¹²C / ¹³C / ¹⁴C) erläutern; stabile von radioaktiven Isotopen unterscheiden.",
        "Die Nuklid-Schreibweise ᴬ_Z X lesen und anwenden.",
        "Den Unterschied zwischen Bohrschen Schalen und quantenmechanischen Orbitalen (s, p, d, f) erklären.",
      ],

      sections: [
        {
          heading: "Von Thomson zu Rutherford – die Entdeckung des Kerns",
          text: "Das Thomson-Modell (1904) beschrieb das Atom als gleichmäßig positive Kugel mit eingebetteten Elektronen. Rutherfords Streuversuch (1911) widerlegte dieses Bild: Die starke Ablenkung und Rückstreuung von Alphateilchen an Goldfolie bewies die Existenz eines winzigen, positiv geladenen Kerns. Das Atom besteht größtenteils aus leerem Raum – der Kern hat nur 1/100 000 des Atomdurchmessers, enthält aber >99,9 % der Masse.",
          merksatz:
            "Rutherford-Experiment: Meiste Teilchen durch – wenige stark abgelenkt → Kern ist winzig, schwer und positiv geladen.",
        },
        {
          heading: "Bohrsches Modell und Quantenmechanisches Orbital-Modell",
          text: "Bohr (1913) postulierte diskrete Elektronenschalen (K, L, M..., max. 2n² Elektronen). Übergänge zwischen Schalen erklären Spektrallinien. Das modernere quantenmechanische Modell ersetzt feste Bahnen durch Orbitale (Aufenthaltswahrscheinlichkeitsräume): s (kugelig), p (hantelförmig, 3 Richtungen), d (5 Orbitale), f (7 Orbitale). Jedes Orbital fasst maximal 2 Elektronen mit entgegengesetztem Spin.",
          merksatz:
            "Orbital ≠ Bahn. Ein Orbital ist ein Raumbereich mit 90 % Aufenthaltswahrscheinlichkeit des Elektrons.",
        },
        {
          heading: "Isotope und Nuklidnotation",
          text: 'Isotope sind Atome desselben Elements (gleiche Z) mit unterschiedlicher Neutronenzahl N. Sie werden durch die Massenzahl A = Z + N unterschieden. Notation: oben links A, unten links Z, z. B. ¹⁴₆C. Die relative Atommasse im Periodensystem ist das gewichtete Mittel aller natürlich vorkommenden Isotope (z. B. Cl ≈ 35,5 u wegen ³⁵Cl / ³⁷Cl). Stabile Isotope liegen im "Stabilitätsgürtel"; außerhalb sind Kerne radioaktiv.',
          merksatz:
            "Isotope: gleiche Z (gleiches Element), verschiedene N → verschiedene A. Chemisch fast identisch, physikalisch unterschiedlich.",
        },
      ],

      diagram: "atomic-orbitals",

      merksätze: [
        "Z = Protonenzahl = Ordnungszahl; A = Z + N (Massenzahl); N = A − Z.",
        "Thomson: Rosinenmodell (positive Kugel + eingebettete Elektronen).",
        "Rutherford: Streuversuch → Kernmodell; Kern winzig, positiv, sehr dicht.",
        "Bohr: Elektronen auf Schalen (K, L, M...); max. 2n² pro Schale; Übergänge → Spektrallinien.",
        "Quantenmechanik: Orbitale (s, p, d, f) = Aufenthaltswahrscheinlichkeitsräume; max. 2 e⁻ pro Orbital.",
        "Isotope: gleiche Z, verschiedene N → verschiedene Massenzahl A.",
        "Stabile Isotope: günstiges N/Z-Verhältnis; instabile → radioaktiv.",
        "Nuklidnotation: ᴬ_Z X, z. B. ²³⁸₉₂U = Uran, 92 Protonen, 146 Neutronen.",
        "Relative Atommasse = gewichtetes Mittel der Isotopenverteilung → oft keine ganze Zahl im PSE.",
        "Rutherford-Schluss: Wenn der Kern die Größe einer Murmel hätte, wäre das Atom so groß wie ein Fußballstadion.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie den Rutherford-Streuversuch und erläutern Sie, welche Schlussfolgerungen daraus über den Atombau gezogen wurden. Gehen Sie auch auf die Grenzen des Rutherford-Modells ein.",
        answer:
          "Ernest Rutherford beschoss 1911 eine extrem dünne Goldfolie (ca. 100 Atomlagen) mit einem gebündelten Strom von Alphateilchen (⁴He²⁺-Ionen, doppelt positiv geladen). Um die Folie herum waren Szintillationsdetektoren angebracht, um den Auftreffpunkt der Teilchen zu registrieren. Das überraschende Ergebnis war dreiteilig: (1) Die überwiegende Mehrheit der Teilchen (>99 %) durchquerte die Folie nahezu unabgelenkt. (2) Ein kleiner Anteil wurde unter großen Winkeln abgelenkt. (3) Einzelne Teilchen wurden fast direkt zurückgeworfen. Aus diesem Befund schloss Rutherford, dass die positive Ladung und fast die gesamte Masse des Atoms in einem äußerst kleinen, dichten Bereich – dem Atomkern – konzentriert sein müssen. Der Rest des Atoms ist nahezu leerer Raum, der nur von der Elektronenhülle ausgefüllt wird. Der Kerndurchmesser beträgt etwa 10⁻¹⁵ m, der Atomdurchmesser etwa 10⁻¹⁰ m – ein Verhältnis von 1 : 100 000. Grenzen des Rutherford-Modells: Das Modell konnte nicht erklären, warum die Elektronen nicht spiralförmig in den Kern stürzen (beschleunigte Ladungen strahlen klassisch elektromagnetisch Energie ab) und lieferte keine Erklärung für diskrete Spektrallinien. Diese Probleme wurden erst durch das Bohrsche Atommodell und schließlich das quantenmechanische Modell gelöst.",
      },

      klinischerBezug:
        "Radioisotope wie ⁹⁹ᵐTc (Knochenszintigraphie), ¹⁸F-FDG (PET), ¹³¹I (Schilddrüsentherapie) und ⁹⁰Y (Tumorbehandlung) basieren auf dem Konzept instabiler Nuklide.",

      selfTest: [
        {
          question: "Welchen entscheidenden Schluss zog Rutherford aus seinem Streuversuch?",
          options: [
            "Elektronen sind auf festen Kreisbahnen um den Kern angeordnet.",
            "Die positive Ladung ist gleichmäßig über das gesamte Atom verteilt.",
            "Die positive Ladung und fast die gesamte Masse sind in einem winzigen Atomkern konzentriert.",
            "Atome lassen sich durch Alphabestrahlung in Isotope aufteilen.",
            "Elektronen kreisen ohne Energieabgabe auf stabilen Bahnen.",
          ],
          correctIndex: 2,
          explanation:
            "Das Ergebnis des Streuversuchs – die meisten Alphateilchen passierten die Folie ungehindert, wenige wurden stark abgelenkt oder zurückgeworfen – war nur erklärbar, wenn die positive Ladung und die Masse in einem extrem kleinen, dichten Kern konzentriert sind. Das widerlegte Thomsons Rosinenmodell, bei dem Ablenkungen viel geringer ausgefallen wären. Elektronen auf Kreisbahnen (Antwort A) ist Bohrs spätere Ergänzung. Gleichmäßige Ladungsverteilung (B) ist das Thomson-Modell, das Rutherfords Versuch gerade widerlegte.",
          hints: [
            "Was würde passieren, wenn die positive Ladung gleichmäßig verteilt wäre? Wären dann starke Ablenkungen möglich?",
            'Die "fast rückwärts gestreuten" Teilchen sind der Schlüssel: Nur ein extrem dichtes, positives Objekt kann ein positives Teilchen so stark abstoßen.',
          ],
          tags: ["rutherford", "atombau", "atomkern"],
          difficulty: 1,
        },
        {
          question:
            "Welches Ion ist korrekt beschrieben: ²³Na⁺ hat 11 Protonen, 12 Neutronen und 10 Elektronen.",
          options: [
            "Falsch – Na⁺ hat 11 Elektronen, da die Ladung durch Protonen entsteht.",
            "Falsch – die Massenzahl 23 bedeutet 23 Neutronen.",
            "Falsch – Natrium hat die Ordnungszahl 12.",
            "Richtig – Z = 11, N = 23 − 11 = 12, Ladung +1 bedeutet 1 Elektron weniger: 10.",
            "Falsch – Na⁺ hat 12 Protonen und 11 Neutronen.",
          ],
          correctIndex: 3,
          explanation:
            "Natrium hat die Ordnungszahl Z = 11, also stets 11 Protonen. Die Massenzahl A = 23 ergibt N = A − Z = 23 − 11 = 12 Neutronen. Das einwertig positive Ion (Na⁺) entsteht durch Verlust eines Elektrons: 11 − 1 = 10 Elektronen. Diese Aufgabe prüft, ob man Z, A, N und Ionenladung korrekt zuordnen kann. Wichtig: Die Ionenladung verändert nur die Elektronenzahl, niemals die Protonenzahl.",
          hints: [
            "Protonenzahl = Ordnungszahl Z, die im Periodensystem zu finden ist. Für Na ist Z = 11.",
            "Positive Ladung (+1) bedeutet, dass das Atom 1 Elektron weniger hat als Protonen besitzt.",
          ],
          tags: ["ordnungszahl", "massenzahl", "ionenladung"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage über Isotope ist korrekt?",
          options: [
            "Isotope haben verschiedene Ordnungszahlen, aber gleiche Massenzahlen.",
            "Isotope sind verschiedene Elemente mit ähnlichen chemischen Eigenschaften.",
            "Isotope haben gleiche Protonenzahlen, aber verschiedene Neutronenzahlen.",
            "Isotope unterscheiden sich im Grundzustand in ihrer Elektronenkonfiguration.",
            "Es gibt für jedes Element genau zwei Isotope.",
          ],
          correctIndex: 2,
          explanation:
            "Isotope sind per Definition Atome desselben Elements (gleiche Protonenzahl Z, also gleiche Ordnungszahl), die sich in der Neutronenzahl N – und damit in der Massenzahl A = Z + N – unterscheiden. Da die chemischen Eigenschaften durch die Elektronenkonfiguration bestimmt werden und diese von der Protonenzahl abhängt, sind chemische Eigenschaften von Isotopen (nahezu) identisch. Die Anzahl stabiler Isotope variiert stark: Zinn (Sn) hat 10 stabile Isotope, Fluor (F) nur eines.",
          hints: [
            'Das Wort "Iso" kommt vom griechischen isos = gleich. Was ist bei Isotopen gleich?',
            "Die Ordnungszahl (Protonenzahl) ist das einzige Merkmal, das ein chemisches Element definiert.",
          ],
          tags: ["isotope", "protonenzahl", "neutronenzahl"],
          difficulty: 1,
        },
        {
          question:
            "Chlor besteht natürlicherweise aus ³⁵Cl (75 %) und ³⁷Cl (25 %). Welche relative Atommasse hat Chlor?",
          options: ["35,0 u", "36,0 u", "35,5 u", "36,5 u", "37,0 u"],
          correctIndex: 2,
          explanation:
            "Die relative Atommasse ist das gewichtete Mittel der vorkommenden Isotope: (0,75 × 35) + (0,25 × 37) = 26,25 + 9,25 = 35,5 u. Deshalb findet man im Periodensystem für Chlor den Wert 35,5 und keine ganze Zahl. Das Konzept ist medizinisch relevant, da Molmassen für Dosisberechnungen verwendet werden. Viele Elemente zeigen keine ganzzahligen Molmassen, weil sie natürliche Isotopengemische sind.",
          hints: [
            "Gewichtetes Mittel: Jeder Anteil multipliziert mit seiner Häufigkeit, dann addieren.",
            "75 % von 35 ist 26,25; 25 % von 37 ist 9,25.",
          ],
          tags: ["atommasse", "isotope", "gewichtetes-mittel"],
          difficulty: 2,
        },
        {
          question:
            "Welches Orbital hat die Form einer Hantel (Dumbbell) mit zwei Keulen entlang einer Achse?",
          options: ["s-Orbital", "p-Orbital", "d-Orbital", "f-Orbital", "sp-Hybridorbital"],
          correctIndex: 1,
          explanation:
            "Das p-Orbital hat eine charakteristische Hantelform mit zwei Keulen (Lobes), die entlang einer der drei Raumachsen (x, y oder z) orientiert sind. Es gibt drei entartete (gleichwertige) p-Orbitale pro Schale: pₓ, p_y, p_z. Sie existieren ab der zweiten Schale (n = 2). Das s-Orbital ist kugelsymmetrisch. d-Orbitale haben klee- oder ringförmige Gestalt, f-Orbitale sind noch komplexer. Die hantelartige p-Form ist für die gerichteten kovalenten Bindungen (z. B. in Wasser, Ammoniak) grundlegend wichtig.",
          hints: [
            "Denken Sie an die Buchstaben: s = sphere (Kugel). Was könnte p bedeuten?",
            "p-Orbitale bestimmen die Winkel in Molekülen wie H₂O (104,5°) und NH₃ (107°).",
          ],
          tags: ["orbitale", "p-orbital", "quantenmechanik"],
          difficulty: 2,
        },
        {
          question:
            "Welches Nuklid wird in der Positronen-Emissions-Tomographie (PET) als Tracer verwendet und warum?",
          options: [
            "¹³¹I – weil es gamma-Strahlung aussendet und den Schilddrüsenstoffwechsel markiert.",
            "⁹⁹ᵐTc – weil es eine sehr lange Halbwertszeit hat und damit stabil im Körper bleibt.",
            "¹⁸F (als FDG) – weil es bei β⁺-Zerfall Positronen emittiert, die mit Elektronen zu zwei Gammaquanten annihilieren.",
            "²³⁸U – weil es als schweres Element besonders gut detektierbar ist.",
            "¹⁴C – weil es als Kohlenstoff-Isotop in alle organischen Moleküle eingebaut werden kann.",
          ],
          correctIndex: 2,
          explanation:
            "¹⁸F-FDG (Fluordesoxyglukose) ist der am häufigsten verwendete PET-Tracer. ¹⁸F ist ein Positronenstrahler (β⁺-Zerfall): p → n + e⁺ + νₑ. Das emittierte Positron trifft sofort auf ein Elektron → Annihilation → zwei Gammaquanten mit je 511 keV, die in genau entgegengesetzte Richtungen (180°) abgestrahlt werden. PET-Scanner registrieren beide Quanten zeitgleich und berechnen so den genauen Entstehungsort. FDG wird wie Glukose in Zellen aufgenommen, aber nicht weiter metabolisiert → Anreicherung in metabolisch aktiven Regionen (Tumor, Hirn). ¹⁸F hat T½ = 110 min, was für Diagnostik geeignet und die Strahlenexposition begrenzt hält.",
          hints: [
            "PET = Positronen-Emissions-Tomographie. Welche Art von Zerfall erzeugt Positronen?",
            "Was passiert, wenn ein Positron (Antiteilchen des Elektrons) auf ein Elektron trifft? (Annihilation)",
          ],
          tags: ["pet", "radioaktivität", "positronenemission", "klinisch"],
          difficulty: 3,
        },
        {
          question:
            "Ein Atom besitzt 17 Protonen und die Massenzahl 35. Als welches Element und Ion wurde es beschrieben, wenn es 18 Elektronen hat?",
          options: [
            "Schwefel-Anion S²⁻",
            "Argon-Atom Ar",
            "Chlorid-Ion Cl⁻",
            "Chlor-Kation Cl⁺",
            "Brom-Anion Br⁻",
          ],
          correctIndex: 2,
          explanation:
            "Z = 17 identifiziert das Element eindeutig als Chlor (Cl). Die Massenzahl A = 35 ergibt N = 35 − 17 = 18 Neutronen → es handelt sich um das Isotop ³⁵Cl. Das Atom hat 18 Elektronen, also 1 mehr als Protonen: Ladung = 17 − 18 = −1. Das ergibt das Chlorid-Ion Cl⁻. Chlorid ist im Körper ein zentrales Anion (Blutplasma, Magenbildung von HCl), und das Gleichgewicht Cl⁻ / Na⁺ ist für die Osmolarität und Nervenfunktion entscheidend. Argon (Z = 18) wäre ein neutrales Edelgasatom, kein Ion.",
          hints: [
            "Das Element wird ausschließlich durch Z (Protonenzahl) bestimmt. Z = 17 → welches Element im PSE?",
            "Mehr Elektronen als Protonen → negative Ladung → Anion.",
          ],
          tags: ["ordnungszahl", "ionenladung", "anion"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ch-1-02: Elektronenkonfiguration und Quantenzahlen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-1-02",
      title: "Elektronenkonfiguration und Quantenzahlen",
      content: `# Elektronenkonfiguration und Quantenzahlen

Die genaue Beschreibung der Elektronen in einem Atom erfolgt über vier Quantenzahlen. Sie legen fest, auf welchem Energieniveau sich jedes Elektron befindet und welchen Spin es trägt.

## Die vier Quantenzahlen

**1. Hauptquantenzahl n** (n = 1, 2, 3, ...):
Bestimmt die Hauptschale (Energieniveau) und die mittlere Entfernung des Elektrons vom Kern. Bei n = 1 ist die Energie am niedrigsten (innerste Schale). Entspricht den Bohrschen Schalen K (n=1), L (n=2), M (n=3), N (n=4).

**2. Nebenquantenzahl l** (l = 0, 1, 2, ..., n−1):
Bestimmt die Unterschale (Subschale) und die Form des Orbitals:
- l = 0 → s-Orbital (kugelig)
- l = 1 → p-Orbital (hantelförmig)
- l = 2 → d-Orbital (kleeblattförmig)
- l = 3 → f-Orbital (komplex)

**3. Magnetische Quantenzahl mₗ** (mₗ = −l, ..., 0, ..., +l):
Bestimmt die Raumausrichtung des Orbitals. Für l = 1 (p) gibt es mₗ = −1, 0, +1 → drei p-Orbitale (pₓ, p_y, p_z).

**4. Spinquantenzahl mₛ** (mₛ = +½ oder −½):
Beschreibt den Eigendrehimpuls (Spin) des Elektrons. Zwei Elektronen im selben Orbital haben entgegengesetzte Spins (↑↓).

## Fundamentale Prinzipien der Elektronenkonfiguration

**Pauliprinzip (Ausschlussprinzip):** Kein Atom kann zwei Elektronen mit identischen Quantenzahlen besitzen. Folge: Jedes Orbital kann maximal 2 Elektronen aufnehmen, und diese müssen entgegengesetzte Spins haben (↑↓).

**Aufbauprinzip (Energieminimumprinzip):** Elektronen besetzen zunächst die Orbitale mit der niedrigsten Energie. Die Energiereihenfolge richtet sich nach n + l (Madelung-Regel):
1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d ...

Achtung: 4s liegt vor 3d (n+l: 4s→4+0=4; 3d→3+2=5). Bei Übergangselementen werden nach der 3d-Füllung die 4s-Elektronen zuerst entfernt, wenn Ionen gebildet werden.

**Hundsche Regel:** Orbitale einer Unterschale werden zunächst einfach (mit parallelem Spin ↑↑) besetzt, bevor eine Doppelbesetzung stattfindet. Das Ergebnis ist die maximal mögliche Spinmultiplizität (paramagnetisch). Beispiel: Kohlenstoff hat 2 ungepaarte Elektronen in den 2p-Orbitalen.

## Elektronenkonfigurationen schreiben

**Schreibweise:** [Edelgas-Rumpf] + Valenzelektronen. Edelgase bilden eine besonders stabile, vollständig gefüllte Konfiguration.

Beispiele:
- Wasserstoff H (Z=1): 1s¹
- Helium He (Z=2): 1s²
- Lithium Li (Z=3): 1s²2s¹ = [He]2s¹
- Natrium Na (Z=11): 1s²2s²2p⁶3s¹ = [Ne]3s¹
- Schwefel S (Z=16): [Ne]3s²3p⁴
- Eisen Fe (Z=26): [Ar]3d⁶4s² (Achtung: 4s wird vor 3d aufgebaut, aber Ionen → 4s zuerst weg)
- Kupfer Cu (Z=29): [Ar]3d¹⁰4s¹ (Ausnahme: volle 3d-Schale stabilisiert)
- Chrom Cr (Z=24): [Ar]3d⁵4s¹ (Ausnahme: halb-gefüllte 3d-Schale stabilisiert)

## Valenz- und Rumpfelektronen

**Valenzelektronen** sind die Elektronen in der äußersten besetzten Schale (und ggf. unvollständigen d-Schalen bei Übergangselementen). Sie bestimmen die Reaktivität und Bindungsfähigkeit eines Elements.

**Rumpfelektronen** sind alle inneren, vollständig abgeschlossenen Elektronen (im Edelgas-Rumpf). Sie schirmen die Kernladung ab und nehmen an chemischen Reaktionen normalerweise nicht teil.

Für Hauptgruppenelemente gilt: Valenzelektronen = Zahl der äußersten s- und p-Elektronen = Gruppennummer im PSE.

## Klinische Relevanz – Übergangsmetalle als Spurenelemente

Übergangsmetalle nutzen ihre unvollständigen d-Orbitale für katalytische und koordinative Funktionen:
- **Fe** ([Ar]3d⁶4s²): Hämoglobin (O₂-Transport), Zytochrome (Elektronentransportkette), Katalase
- **Cu** ([Ar]3d¹⁰4s¹): Zytochrom-c-Oxidase, Ceruloplasmin, Superoxid-Dismutase
- **Zn** ([Ar]3d¹⁰4s²): >300 Enzyme (Carboanhydrase, Alkohol-Dehydrogenase), Zinkfinger-Proteine (Transkriptionsfaktoren)
- **Co** ([Ar]3d⁷4s²): Kern von Vitamin B12 (Cobalamin), essenziell für Methylierungsreaktionen
- **Mn** ([Ar]3d⁵4s²): Mn-SOD (mitochondriale Superoxid-Dismutase), Arginase (Harnstoffzyklus)`,

      lernziele: [
        "Die vier Quantenzahlen (n, l, mₗ, mₛ) und ihre möglichen Werte nennen und die damit beschriebene Eigenschaft des Elektrons erklären.",
        "Das Pauliprinzip, das Aufbauprinzip und die Hundsche Regel korrekt anwenden, um Elektronenkonfigurationen zu schreiben.",
        "Die Energiereihenfolge der Orbitale (Madelung-Regel) kennen und für die Konfiguration von Haupt- und Nebengruppenelementen nutzen.",
        "Valenz- und Rumpfelektronen identifizieren und ihre Bedeutung für chemische Reaktivität erläutern.",
        "Biologically important Übergangsmetalle (Fe, Cu, Zn, Co, Mn) und ihre Funktionen als Spurenelemente kennen.",
      ],

      sections: [
        {
          heading: "Die vier Quantenzahlen im Überblick",
          text: "n (Hauptquantenzahl): Schale, Energieniveau (1, 2, 3 …). l (Nebenquantenzahl): Orbitalform – 0 = s, 1 = p, 2 = d, 3 = f; Werte: 0 bis n−1. mₗ (magnetische QZ): Orientierung im Raum; Werte: −l bis +l (2l+1 Orbitale). mₛ (Spin): +½ (↑) oder −½ (↓). Das Pauliprinzip besagt: Kein Elektron darf mit einem anderen alle vier Quantenzahlen teilen → max. 2 Elektronen pro Orbital (entgegengesetzter Spin).",
          merksatz:
            "n bestimmt Schale, l bestimmt Form, mₗ bestimmt Richtung, mₛ bestimmt Spin. Pauli: kein doppeltes Quartett.",
        },
        {
          heading: "Aufbauprinzip, Hundsche Regel und Konfigurationsschreibweise",
          text: "Aufbauprinzip: Elektronen besetzen Orbitale in aufsteigender Energiereihenfolge (1s < 2s < 2p < 3s < 3p < 4s < 3d …). Hundsche Regel: Innerhalb einer Unterschale zuerst alle Orbitale einfach besetzen (gleicher Spin), dann paaren. Konfigurationsschreibweise: z. B. Na [Ne]3s¹. Ausnahmen bei Cr ([Ar]3d⁵4s¹) und Cu ([Ar]3d¹⁰4s¹) durch Stabilisierung halbgefüllter bzw. vollgefüllter d-Schalen.",
          merksatz:
            "Aufbau: energetisch günstigste Orbitale zuerst. Hund: erst alle einfach besetzen, dann paaren. Ausnahmen: Cr und Cu.",
        },
        {
          heading: "Übergangsmetalle als essentielle Spurenelemente",
          text: "Fe, Cu, Zn, Co und Mn sind essentielle Spurenelemente, deren biologische Funktion direkt mit ihren Elektronenkonfigurationen zusammenhängt. Unvollständige d-Orbitale ermöglichen variable Oxidationsstufen (z. B. Fe²⁺/Fe³⁺) und die Koordination von Liganden in Enzymen und Transportproteinen. Fe in Hämoglobin, Cu in Zytochrom-c-Oxidase, Zn in >300 Enzymen, Co in Vitamin B12, Mn in Superoxid-Dismutase.",
          merksatz:
            "Übergangsmetalle: variable Oxidationsstufen durch d-Elektronen → ideal für Enzymkatalyse und Redoxreaktionen in der Biologie.",
        },
      ],

      diagram: "atomic-orbitals",

      merksätze: [
        "n = Hauptquantenzahl (Schale): 1, 2, 3, 4 …",
        "l = Nebenquantenzahl (Form): 0=s, 1=p, 2=d, 3=f; Werte 0 bis n−1.",
        "mₗ = magnetische QZ (Orientierung): −l bis +l → (2l+1) Orbitale pro Unterschale.",
        "mₛ = Spin: +½ oder −½; Pauli: max. 2 e⁻ pro Orbital, entgegengesetzter Spin.",
        "Aufbauprinzip: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p … (Madelung-Regel: kleineres n+l zuerst).",
        "Hundsche Regel: Erst einfach besetzen (↑↑), dann paaren (↑↓) – maximale Multiplizität.",
        "Na: [Ne]3s¹ | Fe: [Ar]3d⁶4s² | Cu: [Ar]3d¹⁰4s¹ (Ausnahme!) | Cr: [Ar]3d⁵4s¹ (Ausnahme!).",
        "Valenzelektronen = äußerste s- und p-Elektronen → bestimmen Reaktivität.",
        "Fe²⁺/Fe³⁺-Wechsel im Hämoglobin: O₂-Bindung und -Abgabe; möglich durch unvollständige 3d-Schale.",
        "Zinkfinger-Proteine: Zn koordiniert 4 Cysteine/Histidine → DNA-bindende Domäne von Transkriptionsfaktoren.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Pauliprinzip und die Hundsche Regel. Schreiben Sie die Elektronenkonfiguration für Eisen (Fe, Z = 26) und erläutern Sie, warum Eisen als Spurenelement für den Sauerstofftransport im Blut essenziell ist.",
        answer:
          "Das Pauliprinzip (Wolfgang Pauli, 1925) besagt, dass in einem Atom keine zwei Elektronen in allen vier Quantenzahlen (n, l, mₗ, mₛ) übereinstimmen dürfen. Praktisch bedeutet dies, dass jedes Orbital maximal zwei Elektronen aufnehmen kann, die dann entgegengesetzte Spins (+½ und −½) haben müssen. Die Hundsche Regel regelt die Besetzung entarteter (gleichenergetischer) Orbitale einer Unterschale: Diese werden zunächst einzeln mit parallelem Spin besetzt, bevor eine Doppelbesetzung beginnt. Dadurch wird die elektrostatische Abstoßung zwischen Elektronen minimiert und die Gesamtenergie gesenkt. Die Elektronenkonfiguration von Eisen (Z = 26) ergibt sich nach dem Aufbauprinzip: [Ar]3d⁶4s². Das bedeutet, nach dem Argon-Rumpf ([Ar] = [Ne]3s²3p⁶3d⁰) werden die Orbitale in der Reihenfolge 4s (zuerst, wegen niedrigerer n+l-Summe) und dann 3d gefüllt. Die sechs 3d-Elektronen verteilen sich nach der Hundschen Regel auf die fünf 3d-Orbitale: zunächst fünf einfach besetzt (↑), das sechste beginnt die Paarung. Biologisch ist Eisen essenziell für Hämoglobin: Das Fe²⁺-Ion im Zentrum des Häm-Rings koordiniert O₂ reversibel. Nur Fe²⁺ (nicht Fe³⁺) kann O₂ binden. Die variablen Oxidationsstufen (Fe²⁺/Fe³⁺) sind durch die unvollständige 3d-Schale möglich, was Eisen auch für die Elektronentransportkette (Zytochrome) und antioxidative Enzyme (Katalase, Peroxidasen) unverzichtbar macht.",
      },

      klinischerBezug:
        "Fe, Cu, Zn, Co, Mn nutzen ihre d-Elektronen für variable Oxidationsstufen – Basis für Hämoglobin, Zytochrome, Vitamin B12 und über 300 Enzyme im menschlichen Körper.",

      selfTest: [
        {
          question:
            "Welche maximale Anzahl von Elektronen kann die dritte Hauptschale (n = 3) aufnehmen?",
          options: ["6", "8", "10", "18", "32"],
          correctIndex: 3,
          explanation:
            "Die maximale Elektronenzahl pro Schale berechnet sich mit 2n². Für n = 3: 2 × 3² = 2 × 9 = 18. Die dritte Schale enthält die Unterschalen 3s (1 Orbital, max. 2e⁻), 3p (3 Orbitale, max. 6e⁻) und 3d (5 Orbitale, max. 10e⁻), zusammen 9 Orbitale × 2 = 18 Elektronen. Zum Vergleich: n=1→2, n=2→8, n=3→18, n=4→32. Die vollständige M-Schale spielt z. B. bei Chlor (Z=17: [Ne]3s²3p⁵) eine zentrale Rolle.",
          hints: [
            "Formel für maximale Elektronen pro Schale: 2n².",
            "n = 3 bedeutet: 2 × (3²) = 2 × 9 = ?",
          ],
          tags: ["elektronenkonfiguration", "hauptschale", "quantenzahlen"],
          difficulty: 1,
        },
        {
          question: "Was beschreibt die Nebenquantenzahl l?",
          options: [
            "Die Hauptschale und den mittleren Kernabstand des Elektrons.",
            "Den Spin des Elektrons (Eigendrehimpuls).",
            "Die räumliche Orientierung des Orbitals.",
            "Die Form und den Typ des Orbitals (s, p, d, f).",
            "Die elektrische Ladung des Elektrons.",
          ],
          correctIndex: 3,
          explanation:
            "Die Nebenquantenzahl l (auch Bahndrehimpulsquantenzahl) bestimmt die Unterschale und damit die Form des Orbitals: l = 0 → kugelförmiges s-Orbital; l = 1 → hantelförmiges p-Orbital; l = 2 → kleeblattförmiges d-Orbital; l = 3 → f-Orbital. Die Hauptschale n beschreibt Antwort A, den Spin beschreibt mₛ (Antwort B), die Raumausrichtung beschreibt mₗ (Antwort C). Die Ladung (Antwort E) ist eine feste Eigenschaft aller Elektronen (−1e) und keine Quantenzahl.",
          hints: [
            "Es gibt vier Quantenzahlen: n, l, mₗ, mₛ. Ordnen Sie jede Eigenschaft der richtigen Quantenzahl zu.",
            "l = 0, 1, 2, 3 entspricht den Buchstaben s, p, d, f – die Orbitaltypen.",
          ],
          tags: ["quantenzahlen", "nebenquantenzahl", "orbitale"],
          difficulty: 1,
        },
        {
          question: "Welche Elektronenkonfiguration ist für das Eisen-Ion Fe³⁺ korrekt?",
          options: ["[Ar]3d⁶4s²", "[Ar]3d⁵4s²", "[Ar]3d⁵", "[Ar]3d⁶4s¹", "[Ar]3d⁴4s¹"],
          correctIndex: 2,
          explanation:
            "Neutrales Eisen Fe (Z = 26) hat die Konfiguration [Ar]3d⁶4s². Bei der Ionenbildung werden zuerst die 4s-Elektronen entfernt (obwohl 4s vor 3d aufgebaut wird, werden bei der Ionisierung 4s-Elektronen energetisch leichter abgegeben). Fe³⁺ hat 3 Elektronen weniger: Zuerst beide 4s-Elektronen (→ Fe²⁺: [Ar]3d⁶), dann ein 3d-Elektron (→ Fe³⁺: [Ar]3d⁵). Die Konfiguration 3d⁵ ist besonders stabil (halbgefüllte Schale, alle Spins parallel nach Hund), was die Stabilität von Fe³⁺ erklärt.",
          hints: [
            "Bei Übergangsmetall-Ionen werden zuerst die 4s-Elektronen entfernt, nicht die 3d-Elektronen.",
            "Fe²⁺ entsteht durch Entfernung beider 4s-Elektronen; Fe³⁺ entsteht durch zusätzliche Entfernung eines 3d-Elektrons.",
          ],
          tags: ["elektronenkonfiguration", "übergangsmetalle", "eisen"],
          difficulty: 3,
        },
        {
          question: "Die Hundsche Regel besagt:",
          options: [
            "Elektronen mit gleichem Spin können dasselbe Orbital belegen.",
            "Orbitale werden in absteigender Energiereihenfolge aufgefüllt.",
            "Entartete Orbitale werden zuerst einfach mit parallelem Spin besetzt, bevor Paare gebildet werden.",
            "Kein Elektron kann dieselben vier Quantenzahlen wie ein anderes besitzen.",
            "Die Spinquantenzahl kann nur die Werte +1 und −1 annehmen.",
          ],
          correctIndex: 2,
          explanation:
            "Die Hundsche Regel (Friedrich Hund, 1925) gilt für energiegleiche (entartete) Orbitale derselben Unterschale. Sie werden zunächst mit je einem Elektron (paralleler Spin ↑) besetzt, bevor ein zweites Elektron mit antiparallelem Spin (↓) hinzukommt. Dies minimiert die elektrostatische Abstoßung zwischen Elektronen. Beispiel: Im Kohlenstoff-Atom (1s²2s²2p²) besetzen die zwei 2p-Elektronen zwei verschiedene p-Orbitale mit parallelem Spin. Antwort A ist falsch (widerspricht Pauli), B beschreibt das Aufbauprinzip, D ist das Pauliprinzip, E ist falsch (mₛ = ±½).",
          hints: [
            "Stellen Sie sich Orbitale als Stühle in einer Reihe vor: Man setzt sich erst auf jeden Stuhl einmal, bevor jemand einen zweiten Platz nimmt.",
            "Hund → parallel = hohe Multiplizität. Das reduziert die gegenseitige Abstoßung der Elektronen.",
          ],
          tags: ["hundsche-regel", "aufbauprinzip", "elektronenkonfiguration"],
          difficulty: 2,
        },
        {
          question: "Welche Elektronenkonfiguration hat Natrium (Na, Z = 11)?",
          options: ["1s²2s²2p⁵", "1s²2s²2p⁶3s¹", "1s²2s²2p⁶3p¹", "[Ne]3p¹", "1s²2s²2p⁶3s²"],
          correctIndex: 1,
          explanation:
            "Natrium hat Z = 11, also 11 Elektronen. Aufbauprinzip: 1s² (2e⁻) + 2s² (2e⁻) + 2p⁶ (6e⁻) = 10e⁻ → das ist der Neon-Rumpf [Ne]. Das 11. Elektron geht in das 3s-Orbital: 3s¹. Konfiguration: 1s²2s²2p⁶3s¹, Kurzform [Ne]3s¹. Das einzelne 3s-Valenzelektron erklärt die hohe Reaktivität von Natrium (leichte Abgabe → Na⁺) und seine Stellung in Gruppe 1 des PSE. Antwort A wäre Fluor (Z=9), E wäre Magnesium (Z=12).",
          hints: [
            "Zählen Sie die Elektronen auf: 1s² = 2, 2s² = 4, 2p⁶ = 10. Das 11. Elektron kommt in welche Unterschale?",
            "Na steht in Gruppe 1 → 1 Valenzelektron → endet auf ...s¹.",
          ],
          tags: ["elektronenkonfiguration", "natrium", "valenzelektronen"],
          difficulty: 1,
        },
        {
          question:
            "Warum hat Kupfer (Cu, Z = 29) die Konfiguration [Ar]3d¹⁰4s¹ und nicht die erwartete [Ar]3d⁹4s²?",
          options: [
            "Weil das Aufbauprinzip für Übergangsmetalle nicht gilt.",
            "Weil eine vollständig gefüllte 3d¹⁰-Schale besonders stabil ist und die Energie gegenüber 3d⁹4s² absenkt.",
            "Weil 4s-Orbitale immer nach 3d aufgebaut werden.",
            "Weil Kupfer zu den Edelmetallen gehört und andere Regeln gelten.",
            "Weil es für Kupfer keine d-Elektronen gibt.",
          ],
          correctIndex: 1,
          explanation:
            "Nach dem normalen Aufbauprinzip würde man für Cu (Z=29) die Konfiguration [Ar]3d⁹4s² erwarten. Tatsächlich ist aber [Ar]3d¹⁰4s¹ die reale Konfiguration. Der Grund: Eine vollständig gefüllte 3d-Schale (3d¹⁰) besitzt eine besondere Symmetrie und Stabilität, die die Gesamtenergie des Atoms senkt. Dieser Energiegewinn überwiegt den Verlust, ein 4s-Elektron weniger zu haben. Analoges gilt für Chrom: [Ar]3d⁵4s¹ statt 3d⁴4s², da eine halbgefüllte 3d⁵-Schale (alle Spins parallel) ebenfalls besonders stabil ist. Diese Ausnahmen sind prüfungsrelevant.",
          hints: [
            "Es gibt zwei Ausnahmen im 3d-Block: Cr (3d⁵) und Cu (3d¹⁰). Was haben vollständig halbgefüllte und vollständig gefüllte Schalen gemeinsam?",
            "Symmetrie und volle/halbvolle Schalen senken die Energie durch verringerte Elektronenabstoßung.",
          ],
          tags: ["kupfer", "ausnahmen-aufbauprinzip", "übergangsmetalle"],
          difficulty: 3,
        },
        {
          question: "Welche der folgenden Aussagen zum Pauliprinzip ist korrekt?",
          options: [
            "Elektronen in entarteten Orbitalen bevorzugen parallelen Spin.",
            "Jedes Orbital kann maximal 3 Elektronen aufnehmen.",
            "Zwei Elektronen im selben Orbital müssen entgegengesetzte Spins besitzen.",
            "Die Hauptquantenzahl darf für zwei Elektronen nicht gleich sein.",
            "Elektronen füllen Orbitale in Reihenfolge aufsteigender Energie.",
          ],
          correctIndex: 2,
          explanation:
            "Das Paulische Ausschlussprinzip besagt: Kein Atom kann zwei Elektronen mit identischen Werten aller vier Quantenzahlen (n, l, mₗ, mₛ) haben. Befinden sich zwei Elektronen im selben Orbital, stimmen n, l und mₗ überein – also muss mₛ verschieden sein: eines hat +½, das andere −½. Max. 2 Elektronen pro Orbital, entgegengesetzte Spins (↑↓). Antwort A beschreibt die Hundsche Regel; Antwort B ist falsch (max. 2, nicht 3); Antwort D ist zu restriktiv (gleiche Hauptquantenzahl ist erlaubt, solange andere QZ verschieden); Antwort E ist das Aufbauprinzip.",
          hints: [
            "Pauli sagt: kein Elektron-Duplikat aller vier Quantenzahlen. Im selben Orbital sind n, l, mₗ identisch – was muss dann verschieden sein?",
            "Mₛ kann nur +½ oder −½ sein. Daher maximal 2 Elektronen pro Orbital.",
          ],
          tags: ["pauliprinzip", "spin", "quantenzahlen"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ch-1-03: Radioaktivität und Kernreaktionen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-1-03",
      title: "Radioaktivität und Kernreaktionen",
      content: `# Radioaktivität und Kernreaktionen

Radioaktivität bezeichnet die Eigenschaft instabiler Atomkerne, spontan Energie in Form von Strahlung abzugeben und dabei in stabilere Kerne umzuwandeln (Kernzerfall). Die Entdeckung erfolgte 1896 durch Antoine Henri Becquerel (Uransalze), wenig später durch Marie und Pierre Curie (Polonium, Radium).

## Arten der Strahlung

### Alpha-Strahlung (α)
- Emission eines **Alphateilchens** (⁴₂He-Kern: 2 Protonen + 2 Neutronen)
- Umwandlung: Z sinkt um 2, A sinkt um 4
- Beispiel: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He
- Eigenschaften: geringe Reichweite (wenige cm in Luft), stoppt bereits durch ein Blatt Papier oder die Haut; hohes Ionisierungsvermögen
- Biologisch: gefährlich bei Inkorporation (Inhalation von Radon → Lungenkrebs)

### Beta-minus-Strahlung (β⁻)
- Emission eines **Elektrons** und eines **Antineutrinos** (ν̄ₑ) durch Umwandlung eines Neutrons in ein Proton im Kern
- Kernreaktion: n → p + e⁻ + ν̄ₑ → Z erhöht sich um 1, A bleibt gleich
- Beispiel: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ (Basis der Radiokohlenstoffdatierung)
- Reichweite: einige Meter in Luft, stoppt durch Aluminium (mm-Bereich)

### Beta-plus-Strahlung (β⁺, Positronenemission)
- Emission eines **Positrons** (e⁺, Antiteilchen des Elektrons) und eines **Neutrinos** (νₑ)
- Kernreaktion: p → n + e⁺ + νₑ → Z sinkt um 1, A bleibt gleich
- Positron annihiliert sofort mit einem Elektron → **zwei Gammaquanten** (je 511 keV, 180° entgegengesetzt)
- Medizinisch: **PET** (Positronen-Emissionstomographie) nutzt diese Annihilationsstrahlung zur Bildgebung
- Beispiel: ¹⁸F → ¹⁸O + e⁺ + νₑ (¹⁸F-FDG-PET in der Onkologie und Neurologie)

### Gamma-Strahlung (γ)
- Hochenergetische **elektromagnetische Strahlung** (kein Teilchen!)
- Entsteht nach α- oder β-Zerfall, wenn der Tochterkern noch in einem angeregten Zustand ist
- Z und A bleiben unverändert (kein Kernzerfall, nur Energieabgabe)
- Sehr hohe Reichweite (viele Meter in Luft), braucht Blei oder mehrere cm Beton zur Abschirmung
- Metastabile Kerne: ⁹⁹ᵐTc → ⁹⁹Tc + γ (Knochenszintigraphie, Schilddrüsenszintigraphie)

## Halbwertszeit T½ und Zerfallsgesetz

Die **Halbwertszeit T½** ist die Zeit, nach der genau die Hälfte aller ursprünglich vorhandenen Kerne zerfallen ist. Sie ist charakteristisch für jedes Nuklid und temperaturunabhängig (kein chemischer Prozess!).

**Zerfallsgesetz:**
N(t) = N₀ × (½)^(t / T½) = N₀ × e^(−λt)

Dabei ist λ = ln2 / T½ ≈ 0,693 / T½ die **Zerfallskonstante** (s⁻¹).

**Aktivität A** = λ × N(t) [Einheit: Becquerel, Bq = 1 Zerfall/s; älter: Curie, Ci = 3,7 × 10¹⁰ Bq]

Medizinisch relevante Halbwertszeiten:
- ⁹⁹ᵐTc: T½ = 6 h (ideal für Diagnostik: kurz genug für geringe Dosis, lang genug für Aufnahme)
- ¹⁸F: T½ = 110 min (PET)
- ¹³¹I: T½ = 8 d (Schilddrüsentherapie)
- ¹⁴C: T½ = 5730 a (Archäologie und Geochronologie)
- ²³⁸U: T½ = 4,5 × 10⁹ a (Geologische Datierung)

## Strahlenschutz

Die drei Grundprinzipien des Strahlenschutzes:
1. **Abstand**: Intensität nimmt mit 1/r² ab (Abstandsgesetz)
2. **Zeit**: Exposition so kurz wie möglich halten
3. **Abschirmung**: Material je nach Strahlungsart (Papier → α; Al → β; Pb/Beton → γ/n)

Internationale Einheiten:
- **Gray (Gy)**: absorbierte Energiedosis = J/kg
- **Sievert (Sv)**: effektive Dosis = Gy × Strahlungs-Wichtungsfaktor (für α: 20; für β/γ: 1)

## Klinische Anwendungen und Gefahren

- **Diagnostisch**: Szintigraphie (⁹⁹ᵐTc), PET (¹⁸F-FDG), Röntgen/CT (X-Strahlen, kein Kernzerfall)
- **Therapeutisch**: ¹³¹I-Therapie (Schilddrüsenkarzinom, M. Basedow), ⁹⁰Y-Mikrosphären (hepatozelluläres Karzinom), externe Strahlentherapie (linac, Gamma Knife)
- **Gefahren**: Radon-222 (Alphazerfall, Inhalation → Lungenkrebsrisiko); ionisierende Strahlung → DNA-Doppelstrangbrüche, Krebsrisiko
- **Schutzmaßnahme nach Atomunfall**: Kaliumiodid (KI) sättigt die Schilddrüse mit stabilem Iod → verhindert Einbau von radioaktivem ¹³¹I`,

      lernziele: [
        "Die drei Hauptarten der radioaktiven Strahlung (α, β, γ) hinsichtlich Natur, Reichweite, Abschirmung und Veränderung von Z und A beschreiben.",
        "Das Zerfallsgesetz N(t) = N₀ × (½)^(t/T½) anwenden und Halbwertszeit-Berechnungen durchführen.",
        "Den Unterschied zwischen β⁻- und β⁺-Zerfall erläutern und das Prinzip der PET erklären.",
        "Medizinisch relevante Radionuklide (⁹⁹ᵐTc, ¹⁸F, ¹³¹I, ¹⁴C) und ihre Anwendungen benennen.",
        "Die drei Strahlenschutzprinzipien (Abstand, Zeit, Abschirmung) und die Einheiten Gray/Sievert kennen.",
      ],

      sections: [
        {
          heading: "Alpha-, Beta- und Gammastrahlung – Natur und Eigenschaften",
          text: "α-Strahlung: Heliumkerne (Z−2, A−4), sehr kurze Reichweite, stoppt bei Papier, hohe Ionisierung – gefährlich nur bei Inkorporation. β⁻-Strahlung: Elektronen durch n→p-Umwandlung (Z+1, A gleich), mittlere Reichweite, stoppt bei Al-Folie. β⁺-Strahlung: Positronen durch p→n (Z−1, A gleich) → Annihilation mit e⁻ → 2×511-keV-Quanten → Basis der PET. γ-Strahlung: elektromagnetisch, kein Kernteilchen, sehr hohe Reichweite, braucht Pb-Abschirmung; Z und A unverändert.",
          merksatz:
            "α: Papier stoppt es. β: Aluminium stoppt es. γ: Blei/Beton stoppt es. PET = β⁺ + Annihilation → 2×γ (511 keV).",
        },
        {
          heading: "Halbwertszeit und Zerfallsgesetz",
          text: "N(t) = N₀ × (½)^(t/T½). Nach 1 Halbwertszeit: 50 % übrig; nach 2: 25 %; nach 10: ≈0,1 %. Aktivität A = λN; λ = ln2/T½. Für Diagnostik: kurze T½ (Minuten bis Tage), für Therapie: T½ passend zur Tumorbehandlung. ⁹⁹ᵐTc (6 h) ideal für Szintigraphie; ¹³¹I (8 d) für Schilddrüsentherapie; ¹⁴C (5730 a) für Archäologie.",
          merksatz:
            "Nach n Halbwertszeiten: Restmenge = N₀/2ⁿ. Nach 10 HWZ: < 0,1 % des Ausgangswerts.",
        },
        {
          heading: "Klinische Nuklearmedizin und Strahlenschutz",
          text: "PET mit ¹⁸F-FDG: Positronenemitter → Annihilationsstrahlung → 3D-Bild des Glukosestoffwechsels (Tumordetektion, Hirnfunktion). ¹³¹I-Therapie: β⁻-Strahler wird von Schilddrüse aufgenommen → lokale Zerstörung überaktiven Gewebes oder Karzinomzellen. Strahlenschutz: Abstand (1/r²), kurze Expositionszeit, geeignete Abschirmung (materialabhängig). Bei Atomunfall Kaliumiodid zur Blockierung der Schilddrüse gegen ¹³¹I.",
          merksatz:
            "KI-Prophylaxe nach Atomunfall: Schilddrüse mit stabilem Iod sättigen → kein radioaktives ¹³¹I eingebaut.",
        },
      ],

      merksätze: [
        "α-Zerfall: Z−2, A−4; Teilchen = ⁴He; Reichweite = cm in Luft / Papier.",
        "β⁻-Zerfall: n → p + e⁻ + ν̄ₑ; Z+1, A gleich; Reichweite = Al-Folie (mm).",
        "β⁺-Zerfall: p → n + e⁺ + νₑ; Z−1, A gleich; Positron + Elektron → 2×γ (511 keV, 180°) = PET.",
        "γ-Strahlung: elektromagnetisch, kein Teilchen; Z und A gleich; Reichweite = Meter; Abschirmung: Pb.",
        "Halbwertszeit T½: Zeit bis 50 % der Kerne zerfallen; N(t) = N₀ × (½)^(t/T½).",
        "⁹⁹ᵐTc (6 h): Szintigraphie | ¹⁸F (110 min): PET | ¹³¹I (8 d): Schilddrüsentherapie | ¹⁴C (5730 a): Datierung.",
        "Strahlenschutz: Abstand² (Intensität ∝ 1/r²) + Zeit minimieren + Material abschirmen.",
        "Einheiten: Gy (Gray) = absorbierte Dosis [J/kg]; Sv (Sievert) = biologisch gewichtete Dosis.",
        "α-Strahlung: Wichtungsfaktor 20 → 1 Gy α entspricht 20 Sv biologischer Wirkung.",
        "Radon-222: α-Strahler, natürlich in Böden, zweitgrößte Ursache von Lungenkrebs in Europa.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Unterschied zwischen β⁻-Zerfall und β⁺-Zerfall. Erklären Sie, wie das Prinzip des β⁺-Zerfalls in der Positronen-Emissions-Tomographie (PET) medizinisch genutzt wird.",
        answer:
          "Beim β⁻-Zerfall wandelt sich im Kern ein Neutron in ein Proton um: n → p + e⁻ + ν̄ₑ. Es wird ein Elektron (β⁻-Teilchen) und ein Antineutrino emittiert. Die Ordnungszahl Z steigt um 1, die Massenzahl A bleibt unverändert. Der Tochterkern ist ein Element mit Z+1. Beispiel: ¹⁴C → ¹⁴N. Beim β⁺-Zerfall (Positronenemission) wandelt sich ein Proton in ein Neutron um: p → n + e⁺ + νₑ. Es wird ein Positron (e⁺, Antiteilchen des Elektrons) und ein Neutrino emittiert. Z sinkt um 1, A bleibt gleich. Beispiel: ¹⁸F → ¹⁸O. Das Positron ist in Materie extrem kurzlebig: Es annihiliert sofort mit einem Elektron aus der Umgebung. Bei dieser Annihilation werden zwei Gammaquanten mit je 511 keV und exakt 180° Winkelabstand emittiert. Genau dieses Prinzip nutzt die PET: Der Patient erhält einen β⁺-Emitter (meistens ¹⁸F-markierte Fluordesoxyglukose, FDG). FDG wird wie normale Glukose von metabolisch aktiven Zellen aufgenommen, aber nicht weiter abgebaut → Anreicherung in Tumoren, Entzündungsherden, aktivem Hirngewebe. Die Koinzidenz-Detektion der beiden 511-keV-Quanten durch gegenüberliegende Detektoren erlaubt eine präzise dreidimensionale Rekonstruktion des Metabolismus. ¹⁸F hat eine Halbwertszeit von 110 Minuten – lang genug für Produktion und Injektion, kurz genug für akzeptable Strahlenexposition.",
      },

      klinischerBezug:
        "PET (¹⁸F-FDG), Szintigraphie (⁹⁹ᵐTc), Radiojodtherapie (¹³¹I) und Radon-Prävention sind klinische Kernthemen der Radioaktivität.",

      selfTest: [
        {
          question: "Was verändert sich beim Alpha-Zerfall eines Atomkerns?",
          options: [
            "Z sinkt um 1, A bleibt gleich.",
            "Z bleibt gleich, A sinkt um 4.",
            "Z sinkt um 2, A sinkt um 4.",
            "Z steigt um 2, A steigt um 4.",
            "Z bleibt gleich, A steigt um 2.",
          ],
          correctIndex: 2,
          explanation:
            "Beim Alpha-Zerfall wird ein Alphateilchen (⁴₂He) emittiert, das aus 2 Protonen und 2 Neutronen besteht. Daher sinkt Z um 2 und A um 4. Beispiel: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Das Alphateilchen ist identisch mit einem Helium-4-Kern. Die Gleichung muss bezüglich Z (Ladungserhaltung) und A (Massenerhaltung) auf beiden Seiten ausgeglichen sein.",
          hints: [
            "Alphateilchen = ⁴He = 2 Protonen + 2 Neutronen. Was verliert der Mutterkern?",
            "Ladungs- und Massenerhaltung: Prüfen Sie, ob Ihre Antwort beide Seiten der Gleichung ausgleicht.",
          ],
          tags: ["alpha-zerfall", "radioaktivität", "kernreaktion"],
          difficulty: 1,
        },
        {
          question:
            "Nach 3 Halbwertszeiten ist noch welcher Bruchteil der ursprünglichen Aktivität vorhanden?",
          options: ["1/3", "1/4", "1/6", "1/8", "1/9"],
          correctIndex: 3,
          explanation:
            "Nach jeder Halbwertszeit halbiert sich die Restmenge: N(t) = N₀ × (½)ⁿ, wobei n = Anzahl der Halbwertszeiten. Nach 1 HWZ: ½; nach 2 HWZ: ¼; nach 3 HWZ: ⅛ = 12,5 %. Allgemein: nach n HWZ bleibt 1/2ⁿ übrig. Dies ist wichtig für die Abschätzung der Strahlenbelastung in der Nuklearmedizin. Nach 10 HWZ verbleiben nur noch ca. 0,1 % der ursprünglichen Aktivität.",
          hints: [
            "Jede Halbwertszeit halbiert den Restbestand. Wenden Sie das dreimal an.",
            "½ × ½ × ½ = ?",
          ],
          tags: ["halbwertszeit", "zerfallsgesetz", "radioaktivität"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage zur Annihilation bei der PET ist korrekt?",
          options: [
            "Ein Positron und ein Neutron bilden zwei Alphastrahlen.",
            "Zwei Elektronen vernichten sich gegenseitig und bilden ein Gammaquant.",
            "Ein Positron und ein Elektron annihilieren und erzeugen zwei 511-keV-Gammaquanten im 180°-Winkel.",
            "Das Positron wird direkt vom PET-Scanner detektiert.",
            "Annihilation erzeugt ein einzelnes hochenergetisches Betaquant.",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Positronen-Elektron-Annihilation treffen ein Positron (e⁺) und ein Elektron (e⁻) aufeinander. Ihre Gesamtmasse (2 × 0,511 MeV/c²) wird vollständig in elektromagnetische Energie umgewandelt: 2 Gammaquanten mit je 511 keV. Aufgrund der Impulserhaltung fliegen die Photonen exakt in entgegengesetzter Richtung (180°) auseinander. PET-Scanner nutzen Koinzidenzdetektion: Beide Quanten werden zeitgleich von gegenüberliegenden Detektoren registriert → exakte Lokalisierung des Annihilationsereignisses im 3D-Raum. Ohne die 180°-Koinzidenz wäre keine präzise Bildgebung möglich.",
          hints: [
            "Anti-Teilchen trifft auf Teilchen → vollständige Umwandlung in Energie (E = mc²).",
            "Impulserhaltung + zwei identische Photonen → 180°-Winkel zwischen den beiden Gammaquanten.",
          ],
          tags: ["annihilation", "pet", "gammastrahlung"],
          difficulty: 2,
        },
        {
          question: "Welches Material ist zur Abschirmung von Gammastrahlung geeignet?",
          options: [
            "Ein Blatt Papier",
            "Eine Aluminiumfolie (wenige mm)",
            "Kleidung aus Baumwolle",
            "Dickes Blei oder Betonwände",
            "Wasser in Glasflaschen",
          ],
          correctIndex: 3,
          explanation:
            "Gammastrahlung ist hochenergetische elektromagnetische Strahlung mit sehr hoher Durchdringungskraft. Zur effektiven Abschirmung werden dichte, schwere Materialien benötigt, vor allem Blei (Pb, hohe Ordnungszahl → viele Elektronen für Photoeffekt/Comptonstreuung) oder dicke Betonwände. Papier stoppt nur α-Strahlung. Aluminium (mm-Bereich) stoppt β-Strahlung. Kleidung bietet keinen Schutz gegen γ. Wasser kann in großen Mengen Gammastrahlung abschwächen (Schwimmbecken in Kernkraftwerken), aber Glasflaschen sind ungeeignet.",
          hints: [
            "Merkreihe: α → Papier; β → Aluminium; γ → Blei/Beton.",
            "Gamma ist elektromagnetisch und sehr durchdringend – welches Material ist am dichtesten?",
          ],
          tags: ["gammastrahlung", "strahlenschutz", "abschirmung"],
          difficulty: 1,
        },
        {
          question:
            "¹³¹I wird zur Therapie von Schilddrüsenerkrankungen eingesetzt. Welche Eigenschaft macht es dafür geeignet?",
          options: [
            "Es ist ein Alphastrahler mit langer Halbwertszeit und hoher Reichweite.",
            "Es hat eine Halbwertszeit von 8 Tagen, ist ein β⁻-Strahler und wird von der Schilddrüse spezifisch aufgenommen.",
            "Es ist ein γ-Strahler, der von außen durch die Haut wirkt.",
            "Es hat eine Halbwertszeit von 6 Stunden und ist damit ideal für Therapie.",
            "Es ist chemisch inert und wird gleichmäßig im ganzen Körper verteilt.",
          ],
          correctIndex: 1,
          explanation:
            "¹³¹I vereint mehrere ideale Eigenschaften für die Radiojodtherapie: (1) Organspezifische Aufnahme: Die Schilddrüse ist das einzige Organ, das Iod aktiv aufnimmt (für die Schilddrüsenhormonsynthese T₃/T₄). ¹³¹I wird wie normales Iod aufgenommen → gezielter Transport zum Zielgewebe. (2) β⁻-Strahlung: Die emittierten Elektronen haben eine sehr kurze Reichweite (mm) im Gewebe → lokale Strahlenwirkung nur in der Schilddrüse, wenig systemische Belastung. (3) T½ = 8 Tage: Genug für therapeutische Wirkung, danach rasche Elimination. Anwendung: M. Basedow, Schilddrüsenkarzinom-Ablation nach Thyreoidektomie.",
          hints: [
            "Warum nicht ein Alpha-Strahler? Alphastrahlen sind sehr kurz, würden aber trotzdem lokal stark schädigen – und der β-Strahler hat denselben lokalen Effekt mit kontrollierbarer Reichweite.",
            "Was nimmt die Schilddrüse als einziges Organ spezifisch auf? (Denkansatz Thyroxin-Synthese)",
          ],
          tags: ["radiojodtherapie", "schilddrüse", "beta-zerfall", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welche Maßnahme schützt die Schilddrüse nach einem Kernkraftwerksunfall am wirksamsten vor radioaktivem Iod?",
          options: [
            "Evakuierung allein reicht aus; Jodpillen sind unwirksam.",
            "Gabe von Kaliumiodid (KI), um die Schilddrüse mit stabilem Iod zu sättigen.",
            "Einnahme von Natriumchlorid in großen Mengen.",
            "Externe Abschirmung mit Bleiwesten.",
            "Trinken von großen Mengen Wasser zur Verdünnung.",
          ],
          correctIndex: 1,
          explanation:
            "Nach einem Kernkraftwerksunfall (z. B. Tschernobyl 1986, Fukushima 2011) kann radioaktives ¹³¹I freigesetzt werden. Die Schilddrüse nimmt es genauso auf wie stabiles Iod. Präventionsmaßnahme: Einnahme von Kaliumiodid (KI) in ausreichender Dosierung sättigt die Schilddrüse mit stabilem (nicht-radioaktivem) ¹²⁷I → kein Platz mehr für ¹³¹I-Aufnahme → drastische Reduktion der Schilddrüsenstrahlenbelastung. Diese Maßnahme muss zeitnah (vor oder kurz nach Exposition) erfolgen. Sie schützt nur die Schilddrüse, nicht den restlichen Körper. Besonders wichtig für Kinder (höhere Jodumsatz-Rate und längere Restlebenserwartung = höheres Krebsrisiko).",
          hints: [
            'Was passiert, wenn die Schilddrüse bereits mit stabilem Iod "voll" ist? Kann sie dann noch radioaktives Iod aufnehmen?',
            "Kompetitive Hemmung: Stabiles Iod konkurriert mit ¹³¹I um die gleichen Transporter in der Schilddrüse.",
          ],
          tags: ["strahlenschutz", "kaliumiodid", "schilddrüse", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welcher Strahlungstyp hat das höchste biologische Schädigungspotenzial pro absorbierter Energiedosis (Gray)?",
          options: [
            "Gammastrahlung (γ)",
            "Betastrahlung (β)",
            "Röntgenstrahlung",
            "Alphastrahlung (α)",
            "Alle Strahlungstypen haben dasselbe biologische Schädigungspotenzial.",
          ],
          correctIndex: 3,
          explanation:
            "Die biologische Wirksamkeit einer Strahlung wird durch den Strahlungs-Wichtungsfaktor (früher: relative biologische Wirksamkeit, RBW) beschrieben. Für α-Strahlung beträgt er 20, für β- und γ-Strahlung jeweils 1. Das bedeutet: 1 Gray α-Strahlung entspricht 20 Sievert biologischer Dosis – 20-fach höhere Schädigung als dieselbe Energiemenge als γ-Strahlung. Der Grund: Alphateilchen sind schwer und langsam → hohe lineare Energieübertragung (LET) → dichte Ionisierung entlang kurzer Bahnen → schwer zu reparierende DNA-Doppelstrangbrüche. Obwohl Alpha-Strahlung von außen harmlos ist (stoppt an der Haut), ist sie intern (Inhalation, Ingestion) besonders gefährlich.",
          hints: [
            "Einheit Sievert (Sv) = Gray (Gy) × Wichtungsfaktor. Welche Strahlung hat den höchsten Wichtungsfaktor?",
            "Alpha-Teilchen sind groß und schwer → viele Kollisionen auf kurzer Strecke → hohe Energiedichte → maximale DNA-Schädigung.",
          ],
          tags: ["biologische-wirksamkeit", "sievert", "alpha-strahlung"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ch-1-04: Massenzahl, Atommasse und Mol-Konzept
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-1-04",
      title: "Massenzahl, Atommasse und Mol-Konzept",
      content: `# Massenzahl, Atommasse und Mol-Konzept

Um mit Atomen und Molekülen rechnen zu können, braucht die Chemie eine Einheit für atomare Massen und ein Konzept, das die winzigen atomaren Teilchen mit wiegbaren, handhabbaren Substanzmengen verbindet: das **Mol-Konzept**.

## Atomare Masseneinheit u

Die **atomare Masseneinheit** (u, unified atomic mass unit; IUPAC: Da, Dalton) ist definiert als **1/12 der Masse eines ¹²C-Atoms**:
1 u = 1,66054 × 10⁻²⁷ kg

Massen der Nukleonen:
- Proton: 1,00728 u ≈ 1 u
- Neutron: 1,00867 u ≈ 1 u
- Elektron: 0,000549 u (vernachlässigbar!)

Deshalb gilt näherungsweise: **Atommasse in u ≈ Massenzahl A** (Nukleonenanzahl).

Die **relative Atommasse Aᵣ** ist das gewichtete Mittel aller Isotopenmengen im natürlichen Vorkommen (daher oft keine ganze Zahl):
- H: 1,008 u | C: 12,011 u | N: 14,007 u | O: 15,999 u | Na: 22,990 u | Cl: 35,453 u

## Molare Masse M

Die **molare Masse M** [Einheit: g/mol] eines Elements ist numerisch gleich der relativen Atommasse in u:
- M(C) = 12,011 g/mol | M(O) = 15,999 g/mol | M(Na) = 22,990 g/mol

Für Moleküle: M(Molekül) = Summe der molaren Massen aller Atome.
- M(H₂O) = 2 × 1,008 + 15,999 = 18,015 g/mol
- M(NaCl) = 22,990 + 35,453 = 58,443 g/mol
- M(Glukose C₆H₁₂O₆) = 6×12,011 + 12×1,008 + 6×15,999 = 180,159 g/mol
- M(NaOH) = 22,990 + 15,999 + 1,008 = 39,997 g/mol

## Avogadro-Konstante und Mol

Die **Avogadro-Konstante** Nₐ = 6,022 × 10²³ mol⁻¹ gibt die Anzahl der Teilchen (Atome, Moleküle, Ionen) in einem Mol an.

**Definition Mol:** 1 Mol ist die Stoffmenge, die genauso viele Formeleinheiten enthält wie Atome in 12 g ¹²C enthalten sind (= Nₐ Teilchen).

## Das Mol-Konzept – zentrale Formeln

Die drei grundlegenden Beziehungen:

**1.** n = m / M
(Stoffmenge n [mol] = Masse m [g] ÷ molare Masse M [g/mol])

**2.** n = N / Nₐ
(Stoffmenge n [mol] = Teilchenzahl N ÷ Avogadro-Konstante Nₐ)

**3.** Für ideale Gase bei Standardbedingungen (STP: 0 °C, 1 atm): V = n × 22,4 L/mol (molares Volumen)

Beispielrechnung: Wie viele Mol NaCl sind in 11,7 g?
n = 11,7 g ÷ 58,44 g/mol = 0,200 mol = 200 mmol

## Molkonzentration (Molarität) und klinische Relevanz

**Molarität c [mol/L = M]:** c = n / V

Physiologische Kochsalzlösung: 0,9 % NaCl ≈ 154 mmol/L Na⁺ + 154 mmol/L Cl⁻ ≈ 308 mosmol/L → isoton zum Blutplasma (≈ 290 mosmol/L).

**Osmolarität** [mosmol/L] = Summe aller gelösten Teilchenkonzentrationen (Ionen zählen einzeln).
Beispiel: 1 mol/L NaCl → 2 mosmol/L (Na⁺ + Cl⁻ getrennt).

## Klinische Anwendungen in der Pharmakologie

**Dosisberechnung:** Arzneimittel werden in mg oder µg pro kg KG angegeben. Die molare Masse ermöglicht die Umrechnung zwischen Massenangabe und Mol-Menge:
- Aspirin (Acetylsalicylsäure, C₉H₈O₄): M = 180,16 g/mol; 500 mg = 500/180,16 = 2,78 mmol
- Insulin (Peptid, M ≈ 5808 g/mol): 1 IE ≈ 34,7 µg ≈ 6 nmol

**Infusionsberechnungen:** Elektrolytlösungen und Infusionsgeschwindigkeiten basieren auf Mol-Konzentration (mmol/L).

**Serumchemie:** Laborwerte oft in mmol/L: Na⁺ 135–145 mmol/L, K⁺ 3,5–5,0 mmol/L, Glukose 3,9–6,1 mmol/L, Kreatinin 62–115 µmol/L.

## Stöchiometrie – Mol-Verhältnisse in Reaktionsgleichungen

Die Koeffizienten in einer Reaktionsgleichung geben direkt die Mol-Verhältnisse an:
2 H₂ + O₂ → 2 H₂O bedeutet: 2 mol H₂ + 1 mol O₂ → 2 mol H₂O

Beispiel in der Medizin (Haber-Bosch-Analogie zur Aminosäuresynthese):
C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (vollständige Oxidation von Glukose, ΔG° = −2870 kJ/mol)
1 mol Glukose (180 g) reagiert mit 6 mol O₂ (192 g) und liefert 6 mol CO₂ + 6 mol H₂O.`,

      lernziele: [
        "Die atomare Masseneinheit u definieren und die Massen von Proton, Neutron und Elektron in u angeben.",
        "Die molare Masse M aus dem Periodensystem ablesen und für Verbindungen berechnen.",
        "Die Avogadro-Konstante und das Mol-Konzept erklären; die Formeln n = m/M und n = N/Nₐ anwenden.",
        "Molarität (Molkonzentration) und Osmolarität berechnen und klinisch interpretieren.",
        "Stöchiometrische Berechnungen anhand von Reaktionsgleichungen durchführen.",
      ],

      sections: [
        {
          heading: "Atomare Masseneinheit u und molare Masse",
          text: "1 u = 1/12 der Masse von ¹²C = 1,660 × 10⁻²⁷ kg. Proton ≈ Neutron ≈ 1 u; Elektron ≈ 0,0005 u (vernachlässigbar). Relative Atommasse Aᵣ = gewichtetes Isotopengemisch → oft keine ganze Zahl. Molare Masse M [g/mol] ist numerisch gleich Aᵣ in u. M(H₂O) = 18,015 g/mol; M(NaCl) = 58,44 g/mol; M(Glukose) = 180,16 g/mol.",
          merksatz:
            "1 u ≈ 1 g/mol (numerisch gleich). Elektronen haben vernachlässigbare Masse. Molare Masse = Atommasse in g/mol.",
        },
        {
          heading: "Avogadro-Konstante, Mol und Stoffmengenrechnung",
          text: "Nₐ = 6,022 × 10²³ mol⁻¹. 1 Mol = Nₐ Teilchen. Formeln: n = m/M; n = N/Nₐ; c = n/V. Beispiel: 18 g Wasser = 18/18,015 = 0,999 ≈ 1 mol = 6,022 × 10²³ Moleküle. Klinisch: Serumwerte in mmol/L; Infusionen nach Molmasse berechnet; 0,9 % NaCl ≈ 154 mmol/L Na⁺ (isoton).",
          merksatz:
            "n = m/M. 1 Mol = 6,022 × 10²³ Teilchen = M Gramm. Klinisch: Na⁺ normal 135–145 mmol/L.",
        },
        {
          heading: "Osmolarität und klinische Relevanz",
          text: "Osmolarität = Gesamtkonzentration osmotisch aktiver Teilchen [mosmol/L]. Ionen zählen einzeln: 1 mol/L NaCl → 2 mosmol/L. Physiologische Osmolarität Blut ≈ 290 mosmol/L. Hyperosmolare Lösung: zieht Wasser aus Zellen (Dehydrierung). Hypoosmolare Lösung: Wasser strömt in Zellen (Lyse). Isotone Kochsalzlösung (0,9 %) und Ringerlaktat-Lösung werden für intravenöse Infusionen verwendet, da sie isosmolar zum Plasma sind.",
          merksatz:
            "Osmolarität Plasma ≈ 290 mosmol/L. 0,9 % NaCl ≈ 308 mosmol/L (leicht hyperton, klinisch als isoton bezeichnet).",
        },
      ],

      merksätze: [
        "1 u = 1/12 von ¹²C-Atom = 1,66 × 10⁻²⁷ kg; Proton ≈ Neutron ≈ 1 u; Elektron vernachlässigbar.",
        "Molare Masse M [g/mol] = numerisch gleich der relativen Atommasse Aᵣ [u].",
        "Nₐ = 6,022 × 10²³ mol⁻¹ (Avogadro-Konstante): Anzahl Teilchen pro Mol.",
        "n = m / M (Stoffmenge in mol = Masse in g ÷ molare Masse in g/mol).",
        "n = N / Nₐ (Teilchenzahl ÷ Avogadro = Mol).",
        "c = n / V (Molarität in mol/L = Mol ÷ Liter).",
        "Osmolarität = Summe aller Teilchenkonzentrationen; Ionen einzeln zählen.",
        "Physiologische Osmolarität Blutplasma: ≈ 290 mosmol/L.",
        "M(H₂O) = 18,015 | M(NaCl) = 58,44 | M(Glukose) = 180,16 | M(Aspirin) = 180,16 g/mol.",
        "Stöchiometrie: Koeffizienten in Reaktionsgleichungen = Mol-Verhältnisse der Stoffe.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Mol-Konzept und die Bedeutung der Avogadro-Konstante. Berechnen Sie, wie viele Mol Glukose (C₆H₁₂O₆, M = 180 g/mol) in einem Liter Blutserum enthalten sind, wenn die Glukosekonzentration 5 mmol/L beträgt, und geben Sie die Masse in mg an.",
        answer:
          "Das Mol ist die SI-Einheit der Stoffmenge. 1 Mol einer Substanz enthält genau Nₐ = 6,022 × 10²³ Formeleinheiten (Atome, Moleküle, Ionen). Die Avogadro-Konstante Nₐ = 6,022 × 10²³ mol⁻¹ gibt an, wie viele Teilchen in einem Mol enthalten sind. Der Wert wurde historisch so gewählt, dass die molare Masse M [g/mol] numerisch gleich der relativen Atommasse Aᵣ [u] ist. Das hat den praktischen Vorteil: 1 Mol ¹²C hat die Masse 12 g; 1 Mol H₂O = 18,015 g; 1 Mol NaCl = 58,44 g. Das Mol verbindet die submikroskopische Welt der Atome (in u gemessen) mit der wägbaren Welt der Chemiker (in Gramm). Die zentrale Formel lautet: n = m/M, wobei n die Stoffmenge in mol, m die Masse in g und M die molare Masse in g/mol ist. Für die Glukose-Berechnung: Gegeben: c = 5 mmol/L = 0,005 mol/L; V = 1 L. n = c × V = 0,005 mol/L × 1 L = 0,005 mol = 5 mmol. Masse: m = n × M = 0,005 mol × 180 g/mol = 0,9 g = 900 mg. Im klinischen Labor werden Glukosewerte routinemäßig in mmol/L angegeben (Normalbereich: 3,9–6,1 mmol/L nüchtern). Ein Wert von 5 mmol/L entspricht also ca. 900 mg Glukose pro Liter Serum, was dem umgerechneten Wert von 90 mg/dL in der älteren Einheit entspricht.",
      },

      klinischerBezug:
        "Laborwerte (Na⁺, K⁺, Glukose, Kreatinin) in mmol/L, Infusionsberechnungen, Dosierungen und Osmolaritätsbestimmung basieren alle auf dem Mol-Konzept.",

      selfTest: [
        {
          question: "Wie viel Mol sind in 90 g Wasser (M(H₂O) = 18 g/mol)?",
          options: ["0,2 mol", "1 mol", "5 mol", "18 mol", "90 mol"],
          correctIndex: 2,
          explanation:
            "Formel: n = m / M. Einsetzen: n = 90 g ÷ 18 g/mol = 5 mol. Das entspricht 5 × 6,022 × 10²³ = 3,011 × 10²⁴ Wassermolekülen. Zur Kontrolle: 1 mol Wasser = 18 g, also 90 g = 5 mol. Diese einfache Umrechnung ist die Basis aller stöchiometrischen Berechnungen. Klinisch wichtig: Infusionslösungen werden in mol oder mmol pro Liter angegeben, und die Berechnung erfolgt nach derselben Formel.",
          hints: [
            "Formel: n = m / M. Einheit: mol = g ÷ (g/mol).",
            "18 g = 1 mol Wasser. Wie viele 18-g-Portionen sind in 90 g?",
          ],
          tags: ["mol-konzept", "molare-masse", "rechnen"],
          difficulty: 1,
        },
        {
          question:
            "Ein Patient erhält eine Infusion mit 500 mL 0,9 % NaCl-Lösung. M(NaCl) = 58,5 g/mol. Wie viele mmol Na⁺ werden zugeführt?",
          options: ["9 mmol", "15,4 mmol", "77 mmol", "154 mmol", "308 mmol"],
          correctIndex: 2,
          explanation:
            "0,9 % NaCl bedeutet 0,9 g NaCl pro 100 mL = 9 g pro 1000 mL. In 500 mL: 4,5 g NaCl. n(NaCl) = 4,5 g ÷ 58,5 g/mol = 0,0769 mol = 76,9 mmol ≈ 77 mmol. Da NaCl vollständig dissoziiert (NaCl → Na⁺ + Cl⁻), sind auch 77 mmol Na⁺ und 77 mmol Cl⁻ enthalten. Zum Vergleich: 1 Liter 0,9 % NaCl enthält 154 mmol Na⁺; 500 mL = 77 mmol. Die physiologische Natriumkonzentration im Serum beträgt 135–145 mmol/L.",
          hints: [
            "0,9 % = 0,9 g/100 mL = 9 g/L. In 500 mL: 4,5 g NaCl.",
            "n = m/M = 4,5 g ÷ 58,5 g/mol = ? mol. Dann in mmol umrechnen.",
          ],
          tags: ["infusion", "nacl", "mol-konzept", "klinisch"],
          difficulty: 3,
        },
        {
          question: "Was gibt die Avogadro-Konstante Nₐ = 6,022 × 10²³ mol⁻¹ an?",
          options: [
            "Die Anzahl der Elektronen in einem Mol Elektronen.",
            "Die Masse von einem Mol einer beliebigen Substanz in Gramm.",
            "Die Anzahl der Teilchen (Atome, Moleküle, Ionen) in einem Mol einer Substanz.",
            "Den Druck eines idealen Gases bei Standardbedingungen.",
            "Die Energie, die bei der Verbrennung eines Mols Wasserstoff freigesetzt wird.",
          ],
          correctIndex: 2,
          explanation:
            'Die Avogadro-Konstante Nₐ gibt die Anzahl der Teilchen (Atome, Moleküle, Ionen, Elektronen – je nach Substanz) in genau einem Mol an. Sie verbindet die atomare Welt (Masse in u) mit der makroskopischen Welt (Masse in g): 1 Mol ¹²C (12 u pro Atom) hat genau 12 g Masse. Der numerische Wert Nₐ ≈ 6,022 × 10²³ wurde so definiert. Beispiel: 1 mol NaCl enthält Nₐ Na⁺-Ionen und Nₐ Cl⁻-Ionen, insgesamt 2Nₐ Ionen. Die Einheit mol⁻¹ bedeutet "pro Mol".',
          hints: [
            "Avogadro verbindet Anzahl mit Mol: Nₐ Teilchen = 1 Mol.",
            'Denken Sie an "1 Dutzend = 12 Stück". 1 Mol = 6,022 × 10²³ Stück.',
          ],
          tags: ["avogadro", "mol-konzept", "teilchenzahl"],
          difficulty: 1,
        },
        {
          question:
            "Die molare Masse von Aspirin (Acetylsalicylsäure, C₉H₈O₄) beträgt ca. 180 g/mol. Wie viele Millimol enthält eine Tablette mit 500 mg Aspirin?",
          options: ["0,278 mmol", "2,78 mmol", "27,8 mmol", "278 mmol", "0,0278 mmol"],
          correctIndex: 1,
          explanation:
            "n = m / M = 0,500 g ÷ 180 g/mol = 0,00278 mol = 2,78 mmol. Zur Überprüfung: 1 mol Aspirin = 180 g; 0,5 g ist 0,5/180 des molaren Gewichts = 0,00278 mol = 2,78 mmol. Solche Berechnungen sind in der klinischen Pharmakologie notwendig: z. B. für Interaktionsberechnungen, Vergleich von Wirkstoffen verschiedener Molmassen oder die Berechnung von Infusionskonzentrationen. 2,78 mmol Aspirin in 500 mL Lösung ergäben eine Konzentration von 5,56 µmol/mL.",
          hints: [
            "Formel: n = m/M. Masse in Gramm umrechnen: 500 mg = 0,500 g.",
            "0,500 g ÷ 180 g/mol = ? mol; dann × 1000 = mmol.",
          ],
          tags: ["mol-berechnung", "aspirin", "pharmazie"],
          difficulty: 2,
        },
        {
          question: "Eine Lösung enthält 1 mol/L NaCl. Was ist die Osmolarität dieser Lösung?",
          options: ["0,5 mosmol/L", "1 mosmol/L", "2 mosmol/L", "58,5 mosmol/L", "1000 mosmol/L"],
          correctIndex: 2,
          explanation:
            "NaCl ist ein starkes Elektrolyt und dissoziiert in wässriger Lösung vollständig: NaCl → Na⁺ + Cl⁻. Aus 1 mol/L NaCl entstehen 1 mol/L Na⁺ und 1 mol/L Cl⁻ = 2 mol/L osmotisch aktive Teilchen = 2 osmol/L = 2000 mosmol/L. Klinisch relevant: Physiologische Kochsalzlösung (0,9 % NaCl) enthält ca. 0,154 mol/L NaCl → 0,308 osmol/L ≈ 308 mosmol/L. Das Blutplasma hat eine Osmolarität von etwa 290 mosmol/L. Für Osmolaritätsberechnungen gilt: vollständige Dissoziation annehmen, jedes Ion einzeln zählen.",
          hints: [
            "NaCl → Na⁺ + Cl⁻ (vollständige Dissoziation). Aus 1 Teilchen werden 2 osmotisch wirksame Teilchen.",
            "Osmolarität = Summe aller Ionenkonzentrationen. Zählen Sie jeden Ionentyp einzeln.",
          ],
          tags: ["osmolarität", "dissoziation", "nacl"],
          difficulty: 2,
        },
        {
          question:
            "Bei der vollständigen Verbrennung von Glukose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Wie viel Gramm O₂ (M = 32 g/mol) werden für 18 g Glukose (M = 180 g/mol) benötigt?",
          options: ["3,2 g", "6,4 g", "19,2 g", "32,0 g", "192 g"],
          correctIndex: 2,
          explanation:
            "Zunächst n(Glukose) = 18 g ÷ 180 g/mol = 0,1 mol. Laut Reaktionsgleichung reagieren 1 mol Glukose mit 6 mol O₂ (stöchiometrisches Verhältnis 1:6). Für 0,1 mol Glukose: n(O₂) = 0,1 × 6 = 0,6 mol. m(O₂) = 0,6 mol × 32 g/mol = 19,2 g. Stöchiometrische Berechnungen folgen immer dem Schema: (1) mol des Ausgangsstoffs berechnen, (2) Koeffizientenverhältnis anwenden, (3) mol des Zielprodukts in Gramm umrechnen. Diese Oxidation liefert 0,1 × 2870 = 287 kJ Energie.",
          hints: [
            "Schritt 1: n(Glukose) = 18 g ÷ 180 g/mol = ? mol.",
            "Schritt 2: Koeffizient O₂ = 6 → n(O₂) = 6 × n(Glukose). Dann Masse berechnen.",
          ],
          tags: ["stöchiometrie", "verbrennung", "glukose"],
          difficulty: 3,
        },
        {
          question: "Welche Aussage zur relativen Atommasse von Chlor (ca. 35,5 u) ist korrekt?",
          options: [
            "Chlor hat nur ein Isotop, nämlich ³⁵Cl.",
            "Die Atommasse 35,5 u entsteht durch den Durchschnitt aus ³⁵Cl und ³⁷Cl, gewichtet nach ihrer natürlichen Häufigkeit.",
            "Alle Chloratome haben genau 35,5 Neutronen.",
            "Die Atommasse 35,5 bedeutet, dass jedes Chloratom 35,5 Protonen hat.",
            "Chlor hat keine stabilen Isotope.",
          ],
          correctIndex: 1,
          explanation:
            "Chlor kommt in der Natur als Gemisch aus zwei stabilen Isotopen vor: ³⁵Cl (ca. 75,77 %, 17 Protonen + 18 Neutronen) und ³⁷Cl (ca. 24,23 %, 17 Protonen + 20 Neutronen). Die relative Atommasse ist das gewichtete Mittel: (0,7577 × 35) + (0,2423 × 37) = 26,52 + 8,97 = 35,49 ≈ 35,5 u. Deshalb findet man im Periodensystem keine ganze Zahl für Chlor. Einzelne Chloratome haben stets ganzzahlige Neutronenzahlen (18 oder 20); 35,5 ist nur ein statistischer Mittelwert des natürlichen Isotopengemisches.",
          hints: [
            "Warum steht im PSE keine ganze Zahl? Weil Elemente als natürliche Isotopengemische vorkommen.",
            "35,5 ist ein Mittelwert – einzelne Atome haben 35 oder 37 als Massenzahl, nie 35,5.",
          ],
          tags: ["atommasse", "isotope", "periodensystem"],
          difficulty: 2,
        },
      ],
    },
  ],
};
