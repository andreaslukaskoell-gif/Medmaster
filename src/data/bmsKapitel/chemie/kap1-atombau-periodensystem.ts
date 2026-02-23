import type { Kapitel } from "../types";

export const chemKapAtom: Kapitel = {
  id: "chem-kap1",
  title: "Atombau & Periodensystem",
  subject: "chemie",
  icon: "⚛️",
  estimatedTime: "150 min",
  unterkapitel: [
    // === from kap1-atombau (ch-1-01 bis ch-1-04) ===

    // ─────────────────────────────────────────────────────────────────
    // UK ch-1-01: Atommodelle und Atomaufbau
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-1-01",
      title: "Atommodelle und Atomaufbau",
      stichworte: [
        "Atommodell",
        "Thomson",
        "Rutherford",
        "Bohr",
        "Orbital",
        "Quantenmechanik",
        "Proton",
        "Neutron",
        "Isotop",
        "Massenzahl",
        "Ordnungszahl",
      ],
      content: `## Einleitung

Alles, was uns umgibt — Luft, Wasser, unser Körper — besteht aus winzigen Teilchen: den **Atomen**. Sie sind so klein, dass auf einem Millimeter zehn Millionen nebeneinander passen würden. Doch was steckt im Inneren eines Atoms? Diese Frage beschäftigte Wissenschaftler über Jahrhunderte. Jede neue Entdeckung veränderte das Bild vom Atom grundlegend: vom unzerteilbaren Kugelmodell über den Rosinen-Kuchen bis hin zum modernen Orbitalmodell. Für den MedAT sind die wichtigsten Atommodelle, ihre Schlüsselexperimente, sowie die Begriffe Ordnungszahl, Massenzahl und Isotop prüfungsrelevant.

## Demokrit und Dalton — die Anfänge

Bereits ca. 400 v. Chr. postulierte der griechische Philosoph **Demokrit** unteilbare Teilchen ("átomos"). Wissenschaftlich wurde die Atomtheorie erst durch **John Dalton** (1808): Elemente bestehen aus identischen, unteilbaren Atomen; verschiedene Elemente haben verschiedene Atommassen; chemische Reaktionen = Umlagerung von Atomen.

## Thomson-Modell (Rosinenmodell, 1904)

J. J. Thomson, der 1897 das Elektron entdeckte (Kathodenstrahlröhre, e/m-Verhältnis), stellte sich das Atom als eine gleichmäßig positiv geladene Kugel vor, in die negativ geladene Elektronen — wie Rosinen in einem Kuchen — eingebettet sind. Das Modell erklärt Ionisation und elektrische Neutralität, scheitert jedoch an den Ergebnissen des Rutherford-Streuversuchs.

> **Merke:** Thomson wies nach, dass Elektronen negativ geladene Teilchen mit definierter Masse sind. Seine Entdeckung widerlegte die Vorstellung vom unteilbaren Atom.

## Rutherford-Streuversuch (1911) → Kern-Modell

Ernest Rutherford beschoss eine hauchdünne Goldfolie (ca. 100 Atomlagen) mit positiv geladenen Alphateilchen (⁴He²⁺). Der Befund: Die meisten Teilchen passierten die Folie ungelenkt, wenige wurden stark abgelenkt, manche sogar fast direkt zurückgeworfen (ca. 1 von 8000).

Schlussfolgerung: Die positive Ladung und fast die gesamte Masse sind in einem winzigen, dichten **Atomkern** konzentriert. Die Elektronenhülle macht fast das gesamte Volumen aus (Kerndurchmesser ≈ 10⁻¹⁵ m, Atomdurchmesser ≈ 10⁻¹⁰ m — Verhältnis 1:100 000). Das Atom besteht zu 99,9 % aus leerem Raum.

> **Merke:** Wenn der Atomkern so groß wäre wie eine Murmel (1 cm), hätte das gesamte Atom einen Durchmesser von ca. 100 m (Fußballstadion).

**Grenzen des Rutherford-Modells:** Es erklärt nicht, warum Elektronen nicht spiralförmig in den Kern stürzen (beschleunigte Ladungen strahlen klassisch Energie ab), und liefert keine Erklärung für diskrete Spektrallinien.

## Bohrsches Atommodell (1913)

Niels Bohr postulierte, dass Elektronen auf **festen Kreisbahnen (Schalen)** um den Kern kreisen, ohne Energie abzustrahlen. Schalen werden als K, L, M, N, ... oder mit der Hauptquantenzahl n = 1, 2, 3, 4, ... bezeichnet. Maximale Elektronenzahl pro Schale: **2n²**.

| Schale | n | Max. Elektronen (2n²) |
|--------|---|----------------------|
| K | 1 | 2 |
| L | 2 | 8 |
| M | 3 | 18 |
| N | 4 | 32 |

Beim Übergang von einer höheren auf eine niedrigere Schale (Emission) gibt das Elektron ein Photon mit genau definierter Energie ab: **ΔE = h·f** (h = Planck-Konstante 6,626 × 10⁻³⁴ J·s). Dies erklärt die Spektrallinien des Wasserstoffs (Lyman-Serie: n→1, UV; Balmer-Serie: n→2, sichtbar; Paschen-Serie: n→3, IR). Beim Übergang auf höhere Schalen (Absorption) wird ein Photon absorbiert.

Das Bohr-Modell versagt für Mehrelektronenatome und erklärt keine Feinstruktur der Spektren.

## Quantenmechanisches Modell (Orbital-Modell, ab 1925)

Heisenberg (Unschärfeprinzip: Ort und Impuls eines Elektrons nicht gleichzeitig exakt bestimmbar), Schrödinger (Wellengleichung) und Dirac entwickelten das moderne Modell: Elektronen sind keine Teilchen auf festen Bahnen, sondern werden durch **Wellenfunktionen (Orbitale)** beschrieben. Ein Orbital ist ein Raumbereich, in dem ein Elektron mit 90 % Wahrscheinlichkeit anzutreffen ist.

Orbitaltypen und Kapazitäten:
- **s-Orbitale**: kugelförmig, 1 Orbital pro Unterschale → max. 2 e⁻
- **p-Orbitale**: hantelförmig, 3 Orbitale (pₓ, p_y, p_z) pro Unterschale → max. 6 e⁻
- **d-Orbitale**: kleeblattförmig (4) + ringförmig (1), 5 Orbitale pro Unterschale → max. 10 e⁻
- **f-Orbitale**: komplex, 7 Orbitale pro Unterschale → max. 14 e⁻

> **Merke:** Die Gesamtkapazität pro Schale ergibt sich aus: Schale n hat n Unterschalen (l = 0 bis n−1) → Summe = 2n² Elektronen.

## Atomkern: Protonen, Neutronen, Isotope

- **Protonen**: positiv geladen (+1e), Masse ≈ 1,00728 u; Anzahl = **Ordnungszahl Z** → definiert das Element eindeutig
- **Neutronen**: elektrisch neutral, Masse ≈ 1,00867 u; Anzahl = **Neutronenzahl N**
- **Elektronen**: negativ geladen (−1e), Masse ≈ 0,000549 u (vernachlässigbar gegenüber Nukleonen)
- **Massenzahl**: A = Z + N (Summe aller Nukleonen)
- Schreibweise: ᴬ_Z X, z. B. ²³⁸₉₂U (Uran-238: 92 Protonen, 146 Neutronen)

**Kernkraft und Massendefekt:** Protonen und Neutronen werden durch die **starke Kernkraft** (Reichweite ≈ 10⁻¹⁵ m) zusammengehalten. Der **Massendefekt** (Δm) — die Differenz zwischen Summe der freien Nukleonenmassen und tatsächlicher Kernmasse — wird nach E = mc² als **Kernbindungsenergie** freigesetzt. Diese ist bei Fe-56 pro Nukleon am höchsten (8,8 MeV/Nukleon) → stabilster Kern.

**Isotope** besitzen dieselbe Ordnungszahl (gleiches Element), aber unterschiedliche Neutronenzahl → verschiedene Massenzahlen. Chemische Eigenschaften sind (nahezu) identisch, physikalische Eigenschaften (Masse, Kernstabilität) unterscheiden sich.

Beispiele: ¹H (Protium, 99,98 %), ²H (Deuterium, D, 0,02 %), ³H (Tritium, T, radioaktiv); ¹²C (98,9 %), ¹³C (1,1 %), ¹⁴C (Spuren, radioaktiv, T½ = 5730 a).

**Stabile Isotope** haben ein günstiges N/Z-Verhältnis (bei leichten Elementen N ≈ Z; bei schwereren Elementen überwiegen Neutronen: bei Z = 82 ist N ≈ 1,5 × Z). Instabile Nuklide sind radioaktiv. Alle Elemente mit Z > 83 (Bismut) sind ausschließlich radioaktiv.

## MedAT-Fokus

**Häufige Fragen:**
- "Welcher Schluss folgt aus dem Rutherford-Streuversuch?" → Positive Ladung und Masse im winzigen Kern konzentriert; Atom = fast vollständig leerer Raum
- "Was ist ein Isotop?" → Gleiches Element (gleiche Z), unterschiedliche Neutronenzahl N → verschiedene Massenzahl A, (fast) gleiche chemische Eigenschaften
- "Wie viele Elektronen fasst die dritte Schale (n=3)?" → 2n² = 18

**Achtung — typische Verwechslungen:**
- Ordnungszahl Z ≠ Massenzahl A: Z = Protonenzahl (definiert Element), A = Z + N (Nukleonen gesamt)
- Thomson-Modell (Rosinen-Kuchen, gleichmäßig positive Kugel) ≠ Rutherford-Modell (winziger Kern, fast leerer Raum)
- Isotope sind chemisch (fast) identisch, physikalisch verschieden (Masse, Kernstabilität)

**Prüfungsrelevante Zahlen/Fakten:**
- Kerndurchmesser ≈ 10⁻¹⁵ m; Atomdurchmesser ≈ 10⁻¹⁰ m; Verhältnis 1 : 100 000 (Murmel : Fußballstadion)
- Schalen-Kapazität: 2n² (K=2, L=8, M=18, N=32)
- Radioisotope: ⁹⁹ᵐTc (T½ 6 h, Szintigraphie), ¹⁸F (110 min, PET), ¹³¹I (8 d, Schilddrüsentherapie), ¹⁴C (5730 a, Datierung)
- Alle Elemente mit Z > 83 (Bismut) ausschließlich radioaktiv

---
## Zusammenfassung

- Atom: **Kern** (Protonen + Neutronen, winzig: ~10⁻¹⁵ m) + **Hülle** (Elektronen, ~10⁻¹⁰ m); 99 % leerer Raum
- **Ordnungszahl Z** = Protonenzahl = definiert das Element; **Massenzahl A** = Z + N; Neutronenzahl N = A − Z
- **Thomson** (1904): Rosinenmodell — positive Kugel mit eingebetteten Elektronen
- **Rutherford** (1911): Streuversuch an Goldfolie → dichten, positiven Kern entdeckt; Vergleich: Kern = Murmel, Atom = Fußballstadion
- **Bohr** (1913): Elektronen auf festen Schalen (K, L, M...); max. 2n² e⁻ pro Schale; Übergänge erklären Spektrallinien
- **Quantenmechanik**: Orbitale (s, p, d, f) = Aufenthaltswahrscheinlichkeitsräume; s:1, p:3, d:5, f:7 Orbitale; max. 2 e⁻ pro Orbital
- **Isotope**: gleiche Z (gleiches Element), verschiedene N → verschiedene Massenzahl; chemisch identisch, physikalisch verschieden
- **Nuklid-Notation**: ᴬ_Z X, z. B. ²³⁸₉₂U (92 Protonen, 146 Neutronen)
- Alle Elemente mit Z > 83 (Bismut) sind radioaktiv`,

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
      stichworte: [
        "Quantenzahlen",
        "Hauptquantenzahl",
        "Nebenquantenzahl",
        "Pauliprinzip",
        "Hundsche Regel",
        "Aufbauprinzip",
        "Madelung-Regel",
        "Valenzelektron",
        "Elektronenkonfiguration",
        "Übergangsmetalle",
      ],
      content: `## Einleitung

Warum reagiert Natrium heftig mit Wasser, während Edelgase nahezu inert sind? Die Antwort liegt in der **Elektronenkonfiguration** — also darin, wie Elektronen um den Atomkern angeordnet sind. Vier Quantenzahlen beschreiben jeden Elektronen-"Wohnort" eindeutig: Etage (Schale), Zimmertyp (Orbital), Ausrichtung und Spin. Die Regeln, nach denen sich Elektronen anordnen (Aufbauprinzip, Pauliprinzip, Hundsche Regel), sind das Fundament für das Verständnis der Periodizität, der Bindungen und der biologischen Bedeutung von Spurenelementen — alles klassische MedAT-Themen.

## Die vier Quantenzahlen

| Quantenzahl | Symbol | Werte | Bestimmt |
|-------------|--------|-------|----------|
| Hauptquantenzahl | n | 1, 2, 3, ... | Schale, Energieniveau |
| Nebenquantenzahl | l | 0, 1, ..., n−1 | Orbitalform (s, p, d, f) |
| Magnetische QZ | mₗ | −l, ..., 0, ..., +l | Raumausrichtung |
| Spinquantenzahl | mₛ | +½ oder −½ | Eigendrehimpuls |

**1. Hauptquantenzahl n** (n = 1, 2, 3, ...):
Bestimmt die Hauptschale (Energieniveau) und die mittlere Entfernung des Elektrons vom Kern. Bei n = 1 ist die Energie am niedrigsten (innerste Schale). Entspricht den Bohrschen Schalen K (n=1), L (n=2), M (n=3), N (n=4). Maximale Elektronenzahl pro Schale: 2n².

**2. Nebenquantenzahl l** (l = 0, 1, 2, ..., n−1):
Bestimmt die Unterschale (Subschale) und die Form des Orbitals:
- l = 0 → s-Orbital (kugelig), 1 Orbital → max. 2 e⁻
- l = 1 → p-Orbital (hantelförmig), 3 Orbitale → max. 6 e⁻
- l = 2 → d-Orbital (kleeblattförmig), 5 Orbitale → max. 10 e⁻
- l = 3 → f-Orbital (komplex), 7 Orbitale → max. 14 e⁻

**3. Magnetische Quantenzahl mₗ** (mₗ = −l, ..., 0, ..., +l):
Bestimmt die Raumausrichtung des Orbitals. Für l = 1 (p) gibt es mₗ = −1, 0, +1 → drei p-Orbitale (pₓ, p_y, p_z). Anzahl der Orbitale pro Unterschale: 2l + 1.

**4. Spinquantenzahl mₛ** (mₛ = +½ oder −½):
Beschreibt den Eigendrehimpuls (Spin) des Elektrons. Zwei Elektronen im selben Orbital haben entgegengesetzte Spins (↑↓). Der Stern-Gerlach-Versuch (1922) wies den Elektronenspin experimentell nach.

> **Merke:** Vier Quantenzahlen beschreiben jedes Elektron eindeutig: n = Schale, l = Form, mₗ = Richtung, mₛ = Spin. Kein Quantenzahlen-Quartett darf doppelt vorkommen (Pauli).

## Fundamentale Prinzipien der Elektronenkonfiguration

**Pauliprinzip (Ausschlussprinzip, 1925):** Kein Atom kann zwei Elektronen mit identischen vier Quantenzahlen besitzen. Folge: Jedes Orbital kann maximal 2 Elektronen aufnehmen, und diese müssen entgegengesetzte Spins haben (↑↓).

**Aufbauprinzip (Energieminimumprinzip):** Elektronen besetzen zunächst die Orbitale mit der niedrigsten Energie. Die Energiereihenfolge richtet sich nach n + l (Madelung-Regel, auch Klechkowski-Regel):
1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d ...

Bei gleichem n + l wird das kleinere n zuerst besetzt. Achtung: 4s liegt energetisch vor 3d (n+l: 4s→4+0=4; 3d→3+2=5). Bei Übergangselementen werden bei der Ionenbildung die 4s-Elektronen zuerst entfernt (4s ist im Ion energetisch höher als 3d).

> **Merke:** Aufbau: 4s vor 3d füllen. Ionisierung: 4s vor 3d entfernen. Fe → Fe²⁺: [Ar]3d⁶4s² → [Ar]3d⁶ (beide 4s-Elektronen weg).

**Hundsche Regel (1925):** Orbitale einer Unterschale werden zunächst einfach (mit parallelem Spin ↑↑↑) besetzt, bevor eine Doppelbesetzung stattfindet. Das Ergebnis ist die maximal mögliche Spinmultiplizität → paramagnetisch. Beispiel: Stickstoff (Z=7) hat 3 ungepaarte Elektronen in den 2p-Orbitalen: ↑|↑|↑. Kohlenstoff (Z=6) hat 2 ungepaarte p-Elektronen: ↑|↑|_.

## Elektronenkonfigurationen schreiben

**Schreibweise:** [Edelgas-Rumpf] + Valenzelektronen. Edelgase bilden eine besonders stabile, vollständig gefüllte Konfiguration.

Beispiele (mit Z und Elektronenzahl):
- Wasserstoff H (Z=1): 1s¹
- Helium He (Z=2): 1s² → Edelgas, 1. Periode
- Lithium Li (Z=3): 1s²2s¹ = [He]2s¹
- Kohlenstoff C (Z=6): [He]2s²2p² → 2 ungepaarte e⁻
- Natrium Na (Z=11): [Ne]3s¹ → 1 Valenzelektron, Gruppe 1
- Schwefel S (Z=16): [Ne]3s²3p⁴ → 2 ungepaarte e⁻
- Eisen Fe (Z=26): [Ar]3d⁶4s² (Achtung: 4s wird vor 3d aufgebaut, aber Ionen → 4s zuerst weg)
- Kupfer Cu (Z=29): [Ar]3d¹⁰4s¹ (Ausnahme: volle 3d-Schale stabilisiert)
- Chrom Cr (Z=24): [Ar]3d⁵4s¹ (Ausnahme: halb-gefüllte 3d-Schale stabilisiert)

## Valenz- und Rumpfelektronen

**Valenzelektronen** sind die Elektronen in der äußersten besetzten Schale (und ggf. unvollständigen d-Schalen bei Übergangselementen). Sie bestimmen die Reaktivität und Bindungsfähigkeit eines Elements.

**Rumpfelektronen** sind alle inneren, vollständig abgeschlossenen Elektronen (im Edelgas-Rumpf). Sie schirmen die Kernladung ab und nehmen an chemischen Reaktionen normalerweise nicht teil.

Für Hauptgruppenelemente gilt: Valenzelektronen = Zahl der äußersten s- und p-Elektronen = Gruppennummer im PSE. Beispiel: Chlor (Gruppe 17) hat 7 Valenzelektronen (3s²3p⁵); nimmt 1 Elektron auf → Cl⁻ mit Edelgaskonfiguration [Ar].

## Dia- und Paramagnetismus

Atome oder Ionen mit **ungepaarten Elektronen** sind **paramagnetisch** (werden von Magnetfeldern angezogen). Beispiel: Fe³⁺ ([Ar]3d⁵) hat 5 ungepaarte e⁻ → stark paramagnetisch. Atome ohne ungepaarte Elektronen sind **diamagnetisch** (werden schwach abgestoßen). Beispiel: Zn²⁺ ([Ar]3d¹⁰) → alle gepaart → diamagnetisch. MRT-Kontrastmittel (Gadolinium, Gd³⁺, [Xe]4f⁷) nutzen starken Paramagnetismus (7 ungepaarte f-Elektronen).

## Klinische Relevanz — Übergangsmetalle als Spurenelemente

Übergangsmetalle nutzen ihre unvollständigen d-Orbitale für katalytische und koordinative Funktionen:
- **Fe** ([Ar]3d⁶4s²): Hämoglobin (O₂-Transport), Zytochrome (Elektronentransportkette), Katalase
- **Cu** ([Ar]3d¹⁰4s¹): Zytochrom-c-Oxidase, Ceruloplasmin, Superoxid-Dismutase
- **Zn** ([Ar]3d¹⁰4s²): >300 Enzyme (Carboanhydrase, Alkohol-Dehydrogenase), Zinkfinger-Proteine (Transkriptionsfaktoren)
- **Co** ([Ar]3d⁷4s²): Kern von Vitamin B12 (Cobalamin), essenziell für Methylierungsreaktionen
- **Mn** ([Ar]3d⁵4s²): Mn-SOD (mitochondriale Superoxid-Dismutase), Arginase (Harnstoffzyklus)

## MedAT-Fokus

**Häufige Fragen:**
- "Welche Aussage zum Pauliprinzip ist korrekt?" → Kein Atom hat zwei Elektronen mit identischen vier Quantenzahlen → max. 2 e⁻ pro Orbital, entgegengesetzter Spin
- "Was ist die Elektronenkonfiguration von Fe³⁺?" → [Ar]3d⁵ (zuerst beide 4s-, dann ein 3d-Elektron entfernt)
- "Warum ist Fe³⁺ stark paramagnetisch?" → [Ar]3d⁵ — 5 ungepaarte Elektronen mit parallelem Spin

**Achtung — typische Verwechslungen:**
- Aufbau: 4s vor 3d füllen; Ionisierung: 4s vor 3d entfernen (Fe²⁺: [Ar]3d⁶; Fe³⁺: [Ar]3d⁵)
- Hundsche Regel ≠ Pauliprinzip: Hund → entartete Orbitale erst einfach besetzen (↑↑); Pauli → keine identischen 4 Quantenzahlen
- Ausnahmen merken: Cr ([Ar]3d⁵4s¹) und Cu ([Ar]3d¹⁰4s¹) — halbgefüllte/vollgefüllte d-Schalen stabilisiert

**Prüfungsrelevante Zahlen/Fakten:**
- 4 Quantenzahlen: n (1,2,3…), l (0 bis n−1), mₗ (−l bis +l), mₛ (±½)
- Fe²⁺: [Ar]3d⁶ — 4 ungepaarte e⁻; Fe³⁺: [Ar]3d⁵ — 5 ungepaarte e⁻ (stark paramagnetisch)
- MRT-Kontrastmittel Gadolinium Gd³⁺: [Xe]4f⁷ — 7 ungepaarte f-Elektronen → sehr stark paramagnetisch
- Energiereihenfolge: 1s < 2s < 2p < 3s < 3p < **4s < 3d** < 4p (Madelung-Regel)

---
## Zusammenfassung

- **4 Quantenzahlen**: n (Schale), l (Orbitalform: 0=s, 1=p, 2=d, 3=f), mₗ (Raumausrichtung), mₛ (Spin ±½)
- **Pauliprinzip**: kein Atom hat zwei Elektronen mit identischen vier Quantenzahlen → max. 2 e⁻ pro Orbital (entgegengesetzter Spin)
- **Aufbauprinzip** (Madelung-Regel): 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p ... (kleineres n+l zuerst)
- **Hundsche Regel**: entartete Orbitale zuerst einfach besetzen (paralleler Spin ↑↑), dann paaren
- Ausnahmen: Cu [Ar]3d¹⁰4s¹ (volle d-Schale stabil) und Cr [Ar]3d⁵4s¹ (halbvolle d-Schale stabil)
- **Valenzelektronen** = äußerste s- und p-Elektronen → bestimmen Reaktivität und Gruppennummer im PSE
- **Paramagnetismus**: ungepaarte Elektronen → Fe³⁺ ([Ar]3d⁵) hat 5 ungepaarte e⁻; **Diamagnetismus**: alle Elektronen gepaart
- Biologisch wichtige Übergangsmetalle: **Fe** (Hämoglobin), **Cu** (Zytochrom-c-Oxidase), **Zn** (>300 Enzyme), **Co** (Vitamin B12), **Mn** (SOD)`,

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
      stichworte: [
        "Radioaktivität",
        "Alpha-Zerfall",
        "Beta-Zerfall",
        "Gamma-Strahlung",
        "Halbwertszeit",
        "Zerfallsgesetz",
        "PET",
        "Strahlenschutz",
        "Sievert",
        "Nuklearmedizin",
        "Radon",
      ],
      content: `## Einleitung

Manche Atomkerne sind instabil und wandeln sich spontan um — dabei geben sie **Strahlung** ab. Dieses Phänomen heißt **Radioaktivität**. Es gibt drei Haupttypen dieser Strahlung: Alpha (Heliumkerne), Beta (Elektronen oder Positronen) und Gamma (elektromagnetische Wellen). Sie unterscheiden sich in Durchdringungsvermögen und biologischer Wirkung erheblich. Medizinisch ist Radioaktivität unverzichtbar: Von der Tumordiagnostik mit PET über die Radiojodtherapie der Schilddrüse bis zum Strahlenschutz bei Kernunfällen — diese Themen sind klassischer MedAT-Stoff.

Die Entdeckung erfolgte 1896 durch Antoine Henri Becquerel (Uransalze), wenig später durch Marie und Pierre Curie (Polonium, Radium).

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

> **Merke:** Nach n Halbwertszeiten verbleibt noch N₀/2ⁿ. Nach 1 HWZ: 50 %; nach 2: 25 %; nach 3: 12,5 %; nach 10: ca. 0,1 %.

**Aktivität A** = λ × N(t) [Einheit: Becquerel, Bq = 1 Zerfall/s; älter: Curie, Ci = 3,7 × 10¹⁰ Bq]

Medizinisch relevante Halbwertszeiten:

| Nuklid | T½ | Anwendung |
|--------|-----|-----------|
| ⁹⁹ᵐTc | 6 h | Szintigraphie (Knochen, Schilddrüse) |
| ¹⁸F | 110 min | PET (FDG, Onkologie) |
| ¹³¹I | 8 d | Radiojodtherapie (Schilddrüse) |
| ⁶⁰Co | 5,27 a | Gamma Knife (Strahlentherapie) |
| ¹⁴C | 5730 a | Radiokohlenstoffdatierung |
| ²³⁸U | 4,5 × 10⁹ a | Geologische Datierung |

**Beispielrechnung:** Ein Patient erhält ⁹⁹ᵐTc (T½ = 6 h). Wie viel Aktivität verbleibt nach 24 h? n = 24/6 = 4 Halbwertszeiten → Restaktivität = 1/2⁴ = 1/16 = 6,25 % der Ausgangsdosis.

## Kernspaltung und Kernfusion

**Kernspaltung:** Schwere Kerne (z. B. ²³⁵U) werden durch Neutronenbeschuss in zwei leichtere Kerne gespalten → Freisetzung von 2–3 Neutronen + ca. 200 MeV Energie pro Spaltung. Kettenreaktion möglich → Kernreaktor (kontrolliert) oder Atombombe (unkontrolliert). Medizinisch relevant: Spaltprodukte wie ¹³¹I und ⁹⁰Sr bei Reaktorunfällen.

**Kernfusion:** Leichte Kerne (z. B. ²H + ³H → ⁴He + n) verschmelzen unter extremen Bedingungen (>10⁷ K) → Energiequelle der Sonne. Noch nicht als kontrollierte Energiequelle realisiert.

## Strahlenschutz

Die drei Grundprinzipien des Strahlenschutzes:
1. **Abstand**: Intensität nimmt mit 1/r² ab (Abstandsgesetz) — doppelter Abstand → 1/4 der Dosis
2. **Zeit**: Exposition so kurz wie möglich halten (ALARA-Prinzip: As Low As Reasonably Achievable)
3. **Abschirmung**: Material je nach Strahlungsart (Papier → α; Al → β; Pb/Beton → γ/n)

Internationale Einheiten:
- **Gray (Gy)**: absorbierte Energiedosis = J/kg (physikalische Dosis)
- **Sievert (Sv)**: effektive Dosis = Gy × Strahlungs-Wichtungsfaktor (biologische Dosis; für α: 20; für β/γ: 1)

Natürliche Strahlenbelastung in Österreich: ca. 2,5 mSv/Jahr (Radon, kosmische Strahlung, Nahrung). Ein Thorax-Röntgen: ca. 0,02 mSv; CT-Abdomen: ca. 10 mSv.

## Klinische Anwendungen und Gefahren

- **Diagnostisch**: Szintigraphie (⁹⁹ᵐTc), PET (¹⁸F-FDG), SPECT, Röntgen/CT (X-Strahlen, kein Kernzerfall)
- **Therapeutisch**: ¹³¹I-Therapie (Schilddrüsenkarzinom, M. Basedow), ⁹⁰Y-Mikrosphären (hepatozelluläres Karzinom), ²²³Ra-Dichlorid (Xofigo, Knochenmetastasen), externe Strahlentherapie (Linearbeschleuniger, Gamma Knife)
- **Gefahren**: Radon-222 (Alphazerfall, Inhalation → zweitgrößte Ursache von Lungenkrebs nach Rauchen in Europa); ionisierende Strahlung → DNA-Doppelstrangbrüche → Krebsrisiko (stochastisch, kein Schwellenwert nach LNT-Modell)
- **Schutzmaßnahme nach Atomunfall**: Kaliumiodid (KI) sättigt die Schilddrüse mit stabilem Iod → verhindert Einbau von radioaktivem ¹³¹I. Besonders wichtig für Kinder (höherer Jodumsatz, längere Restlebenserwartung)

## Zusammenfassung

- **α-Zerfall**: Z−2, A−4; Teilchen = ⁴He; Reichweite nur cm in Luft → stoppt bei Papier; gefährlich bei Inhalation
- **β⁻-Zerfall**: n → p + e⁻ + ν̄ₑ; Z+1, A gleich; Reichweite mm–cm; stoppt bei Aluminiumfolie
- **β⁺-Zerfall**: p → n + e⁺ + νₑ; Z−1, A gleich; Positron + Elektron → 2×γ (511 keV, 180°) = **Basis der PET**
- **γ-Strahlung**: elektromagnetisch (kein Teilchen), Z und A unverändert; sehr hohe Reichweite → Abschirmung: Blei/Beton
- **Halbwertszeit T½**: N(t) = N₀ × (½)^(t/T½); nach n HWZ verbleiben N₀/2ⁿ
- Wichtige Nuklide: **⁹⁹ᵐTc** (T½ 6 h, Szintigraphie), **¹⁸F** (110 min, PET), **¹³¹I** (8 d, Schilddrüsentherapie), **¹⁴C** (5730 a, Datierung)
- Strahlenschutz: Abstand (Intensität ∝ 1/r²), Zeit minimieren, Material abschirmen
- Einheiten: **Gray (Gy)** = absorbierte Dosis; **Sievert (Sv)** = biologisch gewichtete Dosis (α-Faktor: 20!)
- Bei Kernatomunfall: **Kaliumiodid (KI)** sättigt Schilddrüse → verhindert ¹³¹I-Aufnahme

## MedAT-Fokus

**Häufige Fragen:**
- "Was verändert sich beim α-Zerfall?" → Z sinkt um 2, A sinkt um 4 (Emission von ⁴He)
- "Was bleibt beim γ-Zerfall gleich?" → Z und A bleiben unverändert — nur Energieabgabe, kein Kernwandel
- "Was ist das Prinzip der PET?" → β⁺-Zerfall → Positron annihiliert mit Elektron → 2 Gammaquanten (511 keV, 180°) → Koinzidenzdetektion

**Achtung — typische Verwechslungen:**
- β⁻ (n→p, Z+1, A gleich) ≠ β⁺ (p→n, Z−1, A gleich) — Z-Änderung ist umgekehrt!
- Gray (Gy) = absorbierte Energiedosis (physikalisch); Sievert (Sv) = biologisch gewichtete Dosis; α-Wichtungsfaktor = 20!
- Gammastrahlung: kein Kernteilchen, kein Zerfall → Z und A unverändert (≠ α- und β-Zerfall)

**Prüfungsrelevante Zahlen/Fakten:**
- Nuklid-Tabelle: ⁹⁹ᵐTc (T½ = 6 h, Szintigraphie); ¹⁸F (110 min, PET); ¹³¹I (8 d, Schilddrüsentherapie); ¹⁴C (5730 a, Datierung)
- Nach n Halbwertszeiten: Restmenge = N₀/2ⁿ (nach 4 HWZ: 1/16 = 6,25 %)
- Abschirmung: α → Papier; β → Aluminium (mm); γ/n → Blei/Beton
- 1 Gy α-Strahlung = 20 Sv biologischer Wirkung (Wichtungsfaktor 20)

---`,

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
      stichworte: [
        "Atommasse",
        "Mol",
        "Avogadro-Konstante",
        "Molare Masse",
        "Molarität",
        "Osmolarität",
        "Stöchiometrie",
        "Dalton",
        "Infusionslösung",
        "Laborwerte",
      ],
      content: `## Einleitung

Einzelne Atome sind so winzig, dass man sie nicht wiegen kann. Trotzdem müssen Chemiker und Mediziner präzise mit Mengen rechnen — zum Beispiel: Wie viel Gramm Kochsalz braucht man für eine isotone Infusion? Dafür gibt es das **Mol-Konzept**: Ein Mol ist eine riesige, aber definierte Anzahl von Teilchen (6,022 × 10²³), die man tatsächlich abwiegen kann. Das Mol verbindet die winzige atomare Welt mit der wägbaren Laborwelt. Für den MedAT sind Berechnungen mit Molarität, Osmolarität und Stöchiometrie besonders häufig prüfungsrelevant.

## Atomare Masseneinheit u

Die **atomare Masseneinheit** (u, unified atomic mass unit; IUPAC: Da, Dalton) ist definiert als **1/12 der Masse eines ¹²C-Atoms**:
1 u = 1,66054 × 10⁻²⁷ kg

Massen der subatomaren Teilchen:
- Proton: 1,00728 u ≈ 1 u (positiv geladen)
- Neutron: 1,00867 u ≈ 1 u (neutral)
- Elektron: 0,000549 u (vernachlässigbar! → Faktor 1836 leichter als Proton)

> **Merke:** Die Elektronenmasse ist ~1/2000 der Protonenmasse → sie trägt praktisch nichts zur Atommasse bei. Deshalb gilt: **Atommasse in u ≈ Massenzahl A** (Nukleonenanzahl).

Die **relative Atommasse Aᵣ** ist das gewichtete Mittel aller Isotopenmengen im natürlichen Vorkommen (daher oft keine ganze Zahl):

| Element | Aᵣ [u] | Häufigste Isotope |
|---------|---------|-------------------|
| H | 1,008 | ¹H (99,98 %), ²H (0,02 %) |
| C | 12,011 | ¹²C (98,9 %), ¹³C (1,1 %) |
| N | 14,007 | ¹⁴N (99,6 %), ¹⁵N (0,4 %) |
| O | 15,999 | ¹⁶O (99,8 %), ¹⁸O (0,2 %) |
| Cl | 35,453 | ³⁵Cl (75,8 %), ³⁷Cl (24,2 %) |

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

## Verdünnungsformel

Bei der Verdünnung einer Lösung bleibt die Stoffmenge n konstant:
**c₁ × V₁ = c₂ × V₂**

Beispiel: 50 mL einer 2 mol/L HCl-Lösung sollen auf 0,1 mol/L verdünnt werden. V₂ = (c₁ × V₁)/c₂ = (2 × 50)/0,1 = 1000 mL. Also mit Wasser auf 1000 mL auffüllen.

> **Merke:** Die Verdünnungsformel c₁V₁ = c₂V₂ gilt für alle Konzentrationsberechnungen bei Verdünnung — klinisch wichtig bei Medikamentenherstellung und Infusionsansatz.

## Stöchiometrie — Mol-Verhältnisse in Reaktionsgleichungen

Die Koeffizienten in einer Reaktionsgleichung geben direkt die Mol-Verhältnisse an:
2 H₂ + O₂ → 2 H₂O bedeutet: 2 mol H₂ + 1 mol O₂ → 2 mol H₂O

**Schrittweises Vorgehen bei stöchiometrischen Berechnungen:**
1. Reaktionsgleichung ausgleichen (Massenerhaltung)
2. Gegebene Masse in mol umrechnen: n = m/M
3. Mol-Verhältnis aus Koeffizienten ablesen
4. Gesuchte mol in Masse umrechnen: m = n × M

Beispiel in der Medizin:
C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (vollständige Oxidation von Glukose, ΔG° = −2870 kJ/mol)
1 mol Glukose (180 g) reagiert mit 6 mol O₂ (192 g) und liefert 6 mol CO₂ + 6 mol H₂O.

**Limitierender Reaktand:** Liegt ein Edukt im Unterschuss vor, bestimmt es die maximale Produktmenge. Die übrigen Edukte verbleiben als Überschuss.

## Zusammenfassung

- **1 u** (atomare Masseneinheit) = 1/12 der Masse von ¹²C; Proton ≈ Neutron ≈ 1 u; Elektron vernachlässigbar (~1/2000 Protonmasse)
- **Molare Masse M** [g/mol]: numerisch gleich der relativen Atommasse; M(H₂O) = 18 g/mol, M(NaCl) = 58,4 g/mol, M(Glukose) = 180 g/mol
- **Avogadro-Konstante**: Nₐ = 6,022 × 10²³ mol⁻¹ — so viele Teilchen enthält 1 Mol
- Formeln: **n = m/M** (mol = g ÷ g/mol); **n = N/Nₐ**; **c = n/V** (Molarität in mol/L)
- **Osmolarität** [mosmol/L] = Summe aller Teilchenkonzentrationen; Ionen einzeln zählen (NaCl: i = 2)
- Blutplasma-Osmolarität ≈ **290 mosmol/L**; 0,9 % NaCl ≈ 308 mosmol/L (klinisch als isoton verwendet)
- **Verdünnungsformel**: c₁ × V₁ = c₂ × V₂ (Stoffmenge bleibt konstant)
- **Stöchiometrie**: Koeffizienten in Reaktionsgleichungen = Mol-Verhältnisse; limitierender Reaktand bestimmt max. Ausbeute

## MedAT-Fokus

**Häufige Fragen:**
- "Wie viele mol sind in 90 g H₂O?" → n = 90/18 = 5 mol
- "Osmolarität einer 1 mol/L NaCl-Lösung?" → 1 × 2 × 1000 = 2000 mosmol/L (i = 2)
- "Was ist die Blutplasma-Osmolarität?" → ≈ 290 mosmol/L (durch ADH geregelt)

**Achtung — typische Verwechslungen:**
- Molarität [mol/L] ≠ Osmolarität [mosmol/L]: Osmolarität = c × i × 1000 (van't-Hoff-Faktor beachten!)
- Van't-Hoff-Faktor: NaCl → i = 2; CaCl₂ → i = 3; Glukose → i = 1 (dissoziiert nicht)
- Formel: n = m/M (mol = g ÷ g/mol) — nicht m = M/n!

**Prüfungsrelevante Zahlen/Fakten:**
- Nₐ = 6,022 × 10²³ mol⁻¹; 1 u = 1/12 der Masse von ¹²C = 1,66 × 10⁻²⁷ kg
- M(H₂O) = 18 g/mol; M(NaCl) = 58,44 g/mol; M(Glukose) = 180 g/mol; M(Aspirin) = 180 g/mol
- Blutplasma: ≈ 290 mosmol/L; 0,9 % NaCl ≈ 308 mosmol/L (klinisch als isoton verwendet)
- Verdünnungsformel: c₁ × V₁ = c₂ × V₂ (Stoffmenge bleibt konstant)

---`,

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

    // === from kap2-mikrokosmos (ch-2-01 bis ch-2-03) ===

    // ─────────────────────────────────────────────────────────────
    // UK 1 — Intermolekulare Wechselwirkungen
    // ─────────────────────────────────────────────────────────────
    {
      id: "ch-2-01",
      title: "Intermolekulare Wechselwirkungen",
      stichworte: [
        "Van-der-Waals-Kräfte",
        "London-Dispersion",
        "Dipol-Dipol",
        "Wasserstoffbrücke",
        "H-Brücke",
        "Siedepunkt",
        "DNA-Basenpaarung",
        "Proteinfaltung",
        "Denaturierung",
        "Polarisierbarkeit",
      ],
      content: `## Einleitung

Warum siedet Wasser bei 100 °C, obwohl Schwefelwasserstoff (H₂S) mit viel höherer Molmasse schon bei −60 °C siedet? Und warum löst sich Kochsalz in Wasser, aber nicht in Benzin? Die Antwort liegt in den **Kräften zwischen Molekülen** — den sogenannten intermolekularen Wechselwirkungen. Sie sind viel schwächer als kovalente Bindungen, aber sie bestimmen Siedepunkte, Löslichkeit und biologische Strukturen wie Proteinfaltung und die DNA-Doppelhelix. Für den MedAT sind das Stärkeranking und die biologische Bedeutung dieser Kräfte prüfungsrelevant.

## Van-der-Waals-Kräfte

**London-Dispersionskräfte** (induziert-Dipol–induziert-Dipol):
Entstehen durch kurzzeitige Unsymmetrien in der Elektronenverteilung, die in Nachbarmolekülen einen **induzierten Dipol** erzeugen. Sie existieren in *allen* Molekülen (polar wie unpolar). Ihre Stärke steigt mit zunehmender **Molmasse** (mehr Elektronen → größere Polarisierbarkeit) und mit größerer Moleküloberfläche.

> **Merke:** London-Kräfte sind die einzige Wechselwirkung bei völlig unpolaren Molekülen (Edelgase, O₂, N₂, CH₄). Bei großen Molekülen können sie erstaunlich stark werden.

Beispiel: n-Pentan (Siedepunkt 36 °C) siedet höher als Neopentan (9,5 °C) trotz gleicher Summenformel C₅H₁₂, weil n-Pentan (linear) mehr Kontaktfläche besitzt als Neopentan (kugelförmig).

**Keesom-Wechselwirkungen** (Dipol–Dipol):
Wirken zwischen Molekülen mit permanentem Dipolmoment. Die positiven Enden zweier Dipole ordnen sich zu den negativen Enden benachbarter Moleküle aus. Stärke ∝ μ²/r⁶ (μ = Dipolmoment, r = Abstand). Beispiele: HCl (μ = 1,08 D), Aceton (μ = 2,88 D). Aceton siedet bei 56 °C, obwohl seine Molmasse nur 58 g/mol beträgt — deutlich höher als bei unpolarem Butan (M = 58, Sdp. −1 °C).

**Debye-Wechselwirkungen** (Dipol–induzierter Dipol):
Ein permanenter Dipol polarisiert ein benachbartes unpolares Molekül. Geringer als London- und Keesom-Kräfte, aber stets vorhanden, wenn polare und unpolare Moleküle benachbart sind. Klinisch relevant bei der Löslichkeit von O₂ in Wasser (polares Wasser induziert Dipol in O₂).

## Stärkeranking der Wechselwirkungen

| Wechselwirkung | Energie (kJ/mol) | Beispiel |
|----------------|-------------------|----------|
| Ionenbindung (Gitter) | 400–4000 | NaCl (786) |
| Kovalente Bindung | 150–800 | C–C (348), C=O (745) |
| Wasserstoffbrücke | 10–40 | H₂O···H₂O (~20) |
| Dipol–Dipol (Keesom) | 3–10 | HCl···HCl |
| London-Dispersion | 0,05–40 | CH₄···CH₄ (~1) |

## Wasserstoffbrückenbindungen

Wasserstoffbrücken (H-Brücken) entstehen, wenn ein **elektropositives H-Atom**, das kovalent an ein stark elektronegatives Atom X gebunden ist (X = N, O oder F), mit dem freien Elektronenpaar eines weiteren elektronegativen Atoms Y (Y = N, O, F) wechselwirkt:

**X–H ··· Y** (Bindungslänge ≈ 170–200 pm, Energie 10–40 kJ/mol)

H-Brücken sind **nicht kovalent**, aber deutlich stärker als gewöhnliche van-der-Waals-Kräfte. Sie sind **gerichtet** (optimaler Winkel ≈ 180°) und **kooperativ** (mehrere H-Brücken stabilisieren sich gegenseitig).

> **Merke:** H-Brücken-Donor = X–H (gibt H an Brücke); Akzeptor = freies Elektronenpaar von Y. Nur N, O, F sind elektronegativ genug. C–H bildet keine signifikanten H-Brücken.

**Biologische Beispiele:**
- *Wasser*: jedes Molekül kann bis zu 4 H-Brücken ausbilden (2 Donoren über O–H, 2 Akzeptoren über freie e⁻-Paare) → hohe Siedetemperatur (100 °C statt der nach Molmasse erwarteten ca. −80 °C), hohe Verdampfungswärme (2257 J/g → Thermoregulation durch Schwitzen), Anomalie des Wassers (Dichtemaximum bei 4 °C)
- *DNA-Doppelhelix*: A–T bildet 2 H-Brücken, G–C bildet 3 → G-C-reiche DNA ist thermisch stabiler (Schmelztemperatur Tm ≈ 69,3 + 0,41 × %GC). Relevant für PCR-Primer-Design
- *Proteine*: α-Helix (i–i+4 H-Brücken entlang der Helix, C=O···H–N) und β-Faltblatt (intermolekulare H-Brücken zwischen Strängen) werden durch H-Brücken stabilisiert
- *Enzym-Substrat-Bindung*: H-Brücken vermitteln Substratspezifität im aktiven Zentrum

## Hydrophober Effekt

Unpolare Moleküle in Wasser erzwingen eine geordnete Wasserstruktur um sich herum ("Eisberg-Modell"), was entropisch ungünstig ist. Die Zusammenlagerung unpolarer Bereiche (hydrophobe Wechselwirkung) setzt geordnetes Wasser frei → Entropiegewinn → treibende Kraft der Proteinfaltung und Membranbildung. Obwohl der hydrophobe Effekt auf London-Kräften basiert, ist er entropisch getrieben, nicht enthalpisch.

## Klinische Relevanz

Die Wasserlöslichkeit von Pharmaka hängt direkt von intermolekularen Wechselwirkungen ab: **polare, H-Brücken-bildende Moleküle** (Paracetamol, viele Antibiotika) sind wasserlöslich und renal eliminierbar; **unpolare Moleküle** (Anästhetika, Steroide) akkumulieren in Lipidphasen und werden hepatisch metabolisiert. Lipinski-Regel (Rule of Five): Gute orale Bioverfügbarkeit, wenn ≤5 H-Brücken-Donoren, ≤10 Akzeptoren, M ≤500 g/mol, logP ≤5.

Proteinfaltung und -funktion basieren auf einem Netzwerk aus H-Brücken, hydrophoben Wechselwirkungen und ionischen Kontakten — **Denaturierung** durch Hitze, Harnstoff oder pH-Änderung bricht dieses Netzwerk auf. Bei der **PCR** wird die DNA durch Erhitzen auf 94–98 °C (Denaturierungsschritt) vollständig aufgebrochen, weil alle H-Brücken zwischen den Basenpaaren überwunden werden, während die kovalenten Phosphodiesterbindungen intakt bleiben.

## Zusammenfassung

- **Van-der-Waals-Kräfte** (3 Typen): London (alle Moleküle, ∝ Molmasse), Keesom (Dipol–Dipol), Debye (Dipol–induzierter Dipol)
- Stärkeranking: Ionenbindung > kovalent > **Wasserstoffbrücke** (10–40 kJ/mol) > Dipol–Dipol > London
- **Wasserstoffbrücken**: X–H···Y mit X, Y ∈ {N, O, F}; Energie 10–40 kJ/mol; gerichtet, kooperativ
- Wasser: 4 H-Brücken pro Molekül → hoher Siedepunkt (100 °C), hohe Verdampfungswärme (Thermoregulation)
- **DNA**: A–T bildet 2 H-Brücken, G–C bildet 3 → GC-reiche DNA stabiler (höhere Schmelztemperatur)
- Proteine: α-Helix und β-Faltblatt durch H-Brücken stabilisiert; Denaturierung bricht diese auf
- **Hydrophober Effekt**: unpolare Gruppen lagern sich zusammen → Entropiegewinn; treibt Proteinfaltung und Membranbildung
- Pharmaka: polar = wasserlöslich (renal eliminiert); unpolar = lipophil (hepatisch metabolisiert); Lipinski-Regel

## MedAT-Fokus

**Häufige Fragen:**
- "Welche Voraussetzung hat ein H-Brücken-Donor?" → X–H mit X = N, O oder F (Donor gibt H); Akzeptor = freies e⁻-Paar von Y ∈ {N, O, F}
- "Warum siedet H₂O bei 100 °C, H₂S bei −60 °C?" → H₂O bildet H-Brücken (O elektronegativer), H₂S nicht (S zu wenig elektronegativ)
- "Wie viele H-Brücken bildet das Basenpaar G–C?" → 3 (A–T bildet 2)

**Achtung — typische Verwechslungen:**
- London-Kräfte existieren in ALLEN Molekülen (auch in polaren), nicht nur in unpolaren
- Denaturierung durch Hitze zerstört nicht-kovalente Wechselwirkungen (H-Brücken, hydrophob, ionisch) — kovalente Peptidbindungen bleiben intakt!
- H-Brücken-Donor (gibt H) ≠ Akzeptor (nimmt H auf mit freiem e⁻-Paar)

**Prüfungsrelevante Zahlen/Fakten:**
- Stärkeranking: Ionenbindung (400–4000) > kovalent (150–800) > H-Brücken (10–40) > Dipol–Dipol (3–10) > London (0,05–40) [alle kJ/mol]
- DNA: A=T (2 H-Brücken); G≡C (3 H-Brücken) → GC-reiche DNA thermisch stabiler (höhere Schmelztemperatur Tm)
- PCR-Denaturierung: 94–98 °C bricht H-Brücken in DNA auf; kovalente Phosphodiesterbindungen bleiben intakt

---`,

      lernziele: [
        "Die drei Klassen der van-der-Waals-Kräfte (London, Keesom, Debye) und ihre Entstehungsmechanismen erklären können.",
        "Wasserstoffbrückenbindungen (X–H···Y, X/Y = N, O, F) in ihrer Stärke, Geometrie und biologischen Bedeutung beschreiben können.",
        "Das Stärkeranking intermolekularer Wechselwirkungen kennen und auf Siedepunkte und Löslichkeit anwenden können.",
        "Den Einfluss intermolekularer Kräfte auf Proteinfaltung, DNA-Stabilität und Pharmakologie erläutern können.",
        "Wasserstoffbrücken in konkreten Biomolekülen (Wasser, DNA, α-Helix, β-Faltblatt) identifizieren können.",
      ],

      sections: [
        {
          heading: "London-Dispersionskräfte — überall, aber unsichtbar",
          text: "London-Kräfte basieren auf spontanen Dipolen, die durch Quantenfluktuationen in der Elektronenverteilung entstehen. Obwohl jede einzelne Wechselwirkung sehr schwach ist, summieren sie sich über viele Atome zu beachtlicher Stärke. Große, polarisierbare Moleküle (lange Kohlenwasserstoffketten, halogenierte Verbindungen) haben starke London-Kräfte und hohe Siedepunkte. Im menschlichen Körper halten London-Kräfte unpolare Lipidschwänze in Membranen zusammen und verankern hydrophobe Aminosäurereste im Proteininneren.",
          merksatz:
            "Mehr Elektronen = mehr Polarisierbarkeit = stärkere London-Kräfte = höherer Siedepunkt.",
        },
        {
          heading: "Wasserstoffbrücken — die Architekten des Lebens",
          text: "Wasserstoffbrücken sind die wichtigsten nicht-kovalenten Wechselwirkungen in der Biologie. Sie verleihen Wasser seine einzigartigen Eigenschaften (Kohäsion, Kapillarität, hohe Wärmekapazität), stabilisieren die Sekundärstruktur von Proteinen und sichern die Komplementarität der DNA-Stränge. Die Regel X = N, O, F (und Y = N, O, F) ist essenziell: C–H-Bindungen bilden normalerweise keine nennenswerten H-Brücken (H zu wenig elektropositiv). Atome der zweiten Periode mit hoher Elektronegativität sind die klassischen Partner.",
          merksatz:
            "H-Brücke = X–H···Y mit X, Y ∈ {N, O, F}; Energie 10–40 kJ/mol; gerichtet und kooperativ.",
        },
        {
          heading: "Stärkeranking und physikalische Konsequenzen",
          text: "Das Stärkeranking bestimmt Siedepunkte: HF (H-Brücken) siedet bei 19 °C, HCl (nur Dipol-Dipol + London) bei −85 °C, obwohl Cl viel schwerer als F ist. Wasser siedet wegen seines dichten H-Brücken-Netzwerks erst bei 100 °C. Für Pharmaka gilt: je mehr H-Brücken-fähige Gruppen (OH, NH, C=O), desto wasserlöslicher und desto schlechter lipidlöslich → beeinflusst Resorption und Verteilung im Körper (Lipinski-Regel).",
          merksatz:
            "Anomale Siedepunkte von H₂O, HF, NH₃ gegenüber Homologen → Beweis für H-Brücken.",
        },
        {
          heading: "Stärkeranking der Bindungen und Wechselwirkungen",
          text: "Ionenbindung > Kovalente Bindung > Wasserstoffbrücken > Dipol–Dipol (Keesom) > London-Dispersion",
          merksatz: "Stärkeranking: Ionenbindung > kovalent > H-Brücken > Dipol–Dipol > London.",
          table: {
            headers: ["Wechselwirkung", "Energie"],
            rows: [
              ["Kovalente Bindung (C–C)", "~350 kJ/mol"],
              ["Ionenbindung (NaCl)", "~786 kJ/mol (Gitterenergie)"],
              ["Wasserstoffbrücke", "10–40 kJ/mol"],
              ["Dipol–Dipol", "3–10 kJ/mol"],
              ["London-Dispersion", "0,05–40 kJ/mol"],
            ],
          },
        },
      ],

      merksätze: [
        "London-Dispersion: temporäre Dipole in allen Molekülen; wächst mit Molmasse und Elektronenzahl.",
        "Keesom-Wechselwirkung: permanente Dipol–Dipol-Kräfte; nur bei polaren Molekülen.",
        "Debye-Wechselwirkung: permanenter Dipol polarisiert Nachbarmolekül; stets begleitend.",
        "Wasserstoffbrücke: X–H···Y (X, Y = N, O, F); 10–40 kJ/mol; viel stärker als übliche van-der-Waals.",
        "Wasser kann 4 H-Brücken bilden → außergewöhnlich hoher Siedepunkt (100 °C).",
        "DNA: A–T = 2 H-Brücken; G–C = 3 H-Brücken → GC-reich = höhere Schmelztemperatur.",
        "α-Helix und β-Faltblatt in Proteinen werden durch H-Brücken stabilisiert.",
        "Denaturierung = Zerstörung nicht-kovalenter Wechselwirkungen (H-Brücken, hydrophob) → Entfaltung.",
        "PCR-Denaturierungsschritt (94 °C) bricht H-Brücken zwischen DNA-Strängen auf.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Wasserstoffbrückenbindung am Beispiel des Wassers und der DNA. Erklären Sie dabei die strukturellen Voraussetzungen, typische Energiewerte und klinisch relevante Konsequenzen.",
        answer: `Eine Wasserstoffbrückenbindung entsteht, wenn ein Wasserstoffatom, das an ein stark elektronegatives Atom X (N, O oder F) gebunden ist, mit dem freien Elektronenpaar eines weiteren elektronegativen Atoms Y (ebenfalls N, O oder F) wechselwirkt. Das H-Atom ist durch die Elektronegativität von X elektropositiv polarisiert und wird daher elektrostatisch von Y angezogen. Die Bindungsenergie liegt bei 10–40 kJ/mol, also deutlich geringer als kovalente Bindungen (~350 kJ/mol für C–C), aber erheblich stärker als gewöhnliche van-der-Waals-Kräfte.

Im **Wasser** kann jedes Molekül bis zu vier H-Brücken ausbilden: zwei als Donor (über die zwei O–H-Bindungen) und zwei als Akzeptor (über die zwei freien Elektronenpaare des Sauerstoffs). Dieses dichte Netzwerk erklärt die anomal hohe Siedetemperatur (100 °C statt der nach Molmasse erwarteten ca. −80 °C), die hohe Verdampfungswärme, die Oberflächenspannung sowie die Anomalie des Wassers (Dichtemaximum bei 4 °C wegen H-Brücken-Geometrie im Eis).

In der **DNA-Doppelhelix** halten H-Brücken die beiden antiparallelen Stränge zusammen: Adenin–Thymin bildet 2 H-Brücken, Guanin–Cytosin bildet 3 H-Brücken. GC-reiche DNA-Abschnitte sind daher thermisch stabiler. Diese Eigenschaft wird bei der **PCR (Polymerase-Kettenreaktion)** ausgenutzt: Im Denaturierungsschritt (94–98 °C) werden alle H-Brücken zwischen den Basenpaaren aufgebrochen, die kovalenten Phosphodiesterbindungen der Stränge bleiben intakt. Beim Abkühlen lagern sich komplementäre Primer spezifisch an (Annealing).

In **Proteinen** stabilisieren H-Brücken die Sekundärstruktur: In der α-Helix verbindet jede NH-Gruppe einer Aminosäure mit der C=O-Gruppe der viertfolgenden Aminosäure (i → i+4). Im β-Faltblatt bilden parallele oder antiparallele Stränge H-Brücken untereinander. Denaturierung (Hitze, Harnstoff, pH-Extreme) zerstört dieses Netzwerk irreversibel oder reversibel, was den Funktionsverlust von Enzymen erklärt.`,
      },

      klinischerBezug:
        "Wasserstoffbrücken bestimmen Proteinfaltung, DNA-Stabilität und Pharmaka-Löslichkeit; PCR nutzt gezielt die thermische Aufhebung von H-Brücken zur DNA-Denaturierung bei 94–98 °C.",

      selfTest: [
        {
          question: "Welche der folgenden Aussagen zu London-Dispersionskräften ist korrekt?",
          options: [
            "Sie existieren nur in unpolaren Molekülen.",
            "Sie beruhen auf permanenten Dipolen.",
            "Sie entstehen durch spontane Elektronenfluktuationen und nehmen mit der Molmasse zu.",
            "Sie sind stärker als Wasserstoffbrücken.",
            "Sie sind unabhängig von der Molekülgröße.",
          ],
          correctIndex: 2,
          explanation:
            "London-Dispersionskräfte entstehen durch kurzfristige Unsymmetrien in der Elektronenverteilung (spontane Dipole), die in Nachbarmolekülen induzierte Dipole erzeugen. Sie existieren in *allen* Molekülen (polar und unpolar). Mit steigender Molmasse (mehr Elektronen, größere Polarisierbarkeit) nehmen sie zu. Sie sind deutlich schwächer als Wasserstoffbrücken, nicht stärker. Die Aussage, sie seien nur in unpolaren Molekülen vorhanden, ist falsch: Auch polare Moleküle haben zusätzlich London-Kräfte.",
          hints: [
            'Denken Sie daran, in welchen Molekülen "keine" anderen Wechselwirkungen auftreten können.',
            "Was passiert mit der Polarisierbarkeit, wenn mehr Elektronen vorhanden sind?",
          ],
          tags: ["london-kräfte", "van-der-waals", "polarisierbarkeit"],
          difficulty: 2,
        },
        {
          question:
            "In der DNA-Doppelhelix bildet das Basenpaar Guanin–Cytosin (G–C) wie viele Wasserstoffbrücken?",
          options: ["1", "2", "3", "4", "5"],
          correctIndex: 2,
          explanation:
            "Guanin–Cytosin bildet 3 Wasserstoffbrücken, Adenin–Thymin dagegen nur 2. Dies hat direkte Konsequenzen: GC-reiche DNA-Abschnitte weisen eine höhere Schmelztemperatur auf, weil mehr H-Brücken pro Basenpaar aufgebrochen werden müssen. Bei der PCR beeinflusst der GC-Gehalt die erforderliche Denaturierungstemperatur und -dauer. G-C-Paare sind um 50 % stärker verknüpft als A-T-Paare.",
          hints: [
            "Erinnern Sie sich: A–T hat 2, G–C hat ... eine mehr.",
            'Die Regel heißt: „A=T mit 2, G≡C mit 3 Balken".',
          ],
          tags: ["wasserstoffbrücken", "dna", "basenpaare"],
          difficulty: 1,
        },
        {
          question:
            "Welche strukturellen Voraussetzungen muss ein Molekül erfüllen, um als Wasserstoffbrücken-Donor zu wirken?",
          options: [
            "Es muss ein freies Elektronenpaar besitzen.",
            "Es muss ein H-Atom tragen, das an N, O oder F gebunden ist.",
            "Es muss unpolar sein.",
            "Es muss ein positiv geladenes Ion sein.",
            "Es muss ein aromatisches System besitzen.",
          ],
          correctIndex: 1,
          explanation:
            "Ein Wasserstoffbrücken-Donor benötigt ein H-Atom, das kovalent an ein stark elektronegatives Atom (N, O oder F) gebunden ist. Durch die hohe Elektronegativität wird das H-Atom δ+ polarisiert und kann elektrostatisch mit einem freien Elektronenpaar des Akzeptors (ebenfalls N, O oder F) wechselwirken. Ein freies Elektronenpaar allein macht ein Molekül zum Akzeptor, nicht zum Donor. Unpolarität, Ladung und Aromatizität sind keine Voraussetzungen.",
          hints: [
            'Donor bedeutet: Das Molekül "gibt" das H an die Brücke ab.',
            "Welche Atome sind elektronegativ genug, um H stark zu polarisieren?",
          ],
          tags: ["wasserstoffbrücken", "donor", "elektronegativität"],
          difficulty: 2,
        },
        {
          question:
            "Warum siedet Wasser (H₂O, M = 18 g/mol) bei 100 °C, Schwefelwasserstoff (H₂S, M = 34 g/mol) aber nur bei −60 °C?",
          options: [
            "H₂O hat eine höhere Molmasse als H₂S.",
            "H₂S ist giftiger als H₂O.",
            "H₂O bildet ein ausgedehntes Wasserstoffbrücken-Netzwerk; H₂S nicht, weil S zu wenig elektronegativ ist.",
            "H₂S hat stärkere London-Kräfte als H₂O.",
            "H₂O hat einen größeren Dipolmoment-Unterschied durch London-Dispersion.",
          ],
          correctIndex: 2,
          explanation:
            "Wasser bildet pro Molekül bis zu 4 Wasserstoffbrücken (2 Donor-OH, 2 Akzeptor-Elektronenpaare am O), da Sauerstoff hochelektronegativ ist (χ = 3,44). Für eine H-Brücke ist X = N, O oder F erforderlich. Schwefel (χ = 2,58) ist zu wenig elektronegativ und zu groß, um nennenswerte H-Brücken auszubilden. H₂S wird daher nur durch van-der-Waals-Kräfte zusammengehalten, die aufgrund der niedrigen Molmasse schwach sind — daher der viel niedrigere Siedepunkt trotz höherer Molmasse.",
          hints: [
            "Welche Elemente können H-Brücken eingehen?",
            "Schwefel steht unter Sauerstoff im PSE — was bedeutet das für die Elektronegativität?",
          ],
          tags: ["siedepunkt", "wasserstoffbrücken", "elektronegativität"],
          difficulty: 2,
        },
        {
          question:
            "Ein Anästhetikum ist ein sehr unpolares Molekül ohne H-Brücken-fähige Gruppen. Welche Aussage über seine intermolekularen Wechselwirkungen und Löslichkeit ist korrekt?",
          options: [
            "Es ist gut wasserlöslich aufgrund starker Keesom-Wechselwirkungen.",
            "Es weist nur London-Dispersionskräfte auf und ist gut lipidlöslich.",
            "Es bildet H-Brücken mit Wassermolekülen und ist daher renal eliminierbar.",
            "Es hat keine intermolekularen Wechselwirkungen und ist ein ideales Gas.",
            "Es ist ionisch und daher gut in Körperflüssigkeiten verteilt.",
          ],
          correctIndex: 1,
          explanation:
            'Ein unpolares Molekül ohne H-Brücken-fähige Gruppen (keine N–H, O–H oder F–H-Bindungen und keine permanenten Dipole) besitzt ausschließlich London-Dispersionskräfte. Diese begünstigen die Löslichkeit in unpolaren Phasen (Lipide, Membranen) gemäß dem Prinzip "Gleiches löst sich in Gleichem". Lipidlösliche Anästhetika (z. B. Halothan) penetrieren leicht Lipiddoppelschichten und wirken direkt auf Membranproteine. Sie sind schlecht wasserlöslich und werden hauptsächlich hepatisch metabolisiert, nicht renal unverändert ausgeschieden.',
          hints: [
            "Welches Wechselwirkungsprinzip gilt immer, unabhängig von Polarität?",
            '"Similia similibus solvuntur" — was bedeutet das?',
          ],
          tags: ["löslichkeit", "london-kräfte", "anästhesie"],
          difficulty: 2,
        },
        {
          question:
            "Welche Wechselwirkung ist die stärkste der folgenden nicht-kovalenten Wechselwirkungen?",
          options: [
            "London-Dispersionskräfte zwischen Edelgasatomen",
            "Keesom-Wechselwirkung zwischen HCl-Molekülen",
            "Debye-Wechselwirkung zwischen Wasser und Hexan",
            "Wasserstoffbrücke zwischen zwei Wassermolekülen",
            "London-Dispersionskräfte zwischen zwei Methanmolekülen",
          ],
          correctIndex: 3,
          explanation:
            "Das Stärkeranking nicht-kovalenter Wechselwirkungen lautet: H-Brücken (10–40 kJ/mol) > Dipol–Dipol/Keesom (3–10 kJ/mol) > Debye (~1–5 kJ/mol) > London-Dispersion (sehr variabel, bei kleinen Molekülen wie Edelgasen und Methan sehr gering). Die Wasserstoffbrücke zwischen zwei Wassermolekülen (~20 kJ/mol) übertrifft alle anderen aufgeführten Optionen. London-Kräfte zwischen Edelgasatomen (monatomisch, geringe Elektronenzahl) und zwischen Methanmolekülen sind besonders schwach.",
          hints: [
            "Ordnen Sie: Was braucht X–H···Y?",
            "Vergleichen Sie die Energien: 10–40 kJ/mol vs. unter 10 kJ/mol.",
          ],
          tags: ["wechselwirkungen", "wasserstoffbrücken", "stärkeranking"],
          difficulty: 1,
        },
        {
          question:
            "Denaturierung von Proteinen durch Erhitzen zerstört primär welche Art von Bindungen/Wechselwirkungen?",
          options: [
            "Primär kovalente Peptidbindungen in der Primärstruktur.",
            "Primär nicht-kovalente Wechselwirkungen wie H-Brücken, hydrophobe Kontakte und ionische Wechselwirkungen der Sekundär- und Tertiärstruktur.",
            "Primär kovalente Disulfidbrücken in der Tertiärstruktur.",
            "Nur Van-der-Waals-Kräfte, nicht aber Wasserstoffbrücken.",
            "Ausschließlich elektrostatische Wechselwirkungen zwischen geladenen Aminosäuren.",
          ],
          correctIndex: 1,
          explanation:
            "Proteindenaturierung durch Hitze (oder Harnstoff, pH-Extrema) zerstört die nicht-kovalenten Wechselwirkungen, die Sekundär-, Tertiär- und Quartärstruktur stabilisieren: Wasserstoffbrücken (α-Helix, β-Faltblatt), hydrophobe Wechselwirkungen (London-Kräfte im unpolaren Proteinkern) sowie ionische Wechselwirkungen zwischen geladenen Seitenketten. Die kovalenten Peptidbindungen der Primärstruktur bleiben beim Erhitzen intakt (dazu bräuchte man Säure-/Base-Hydrolyse). Kovalente Disulfidbrücken werden durch Hitze allein nicht gespalten — dafür braucht man Reduktionsmittel.",
          hints: [
            "Denken Sie an die Energieunterschiede: nicht-kovalent vs. kovalent.",
            "Welche Bindungen halten α-Helix und β-Faltblatt zusammen?",
          ],
          tags: ["denaturierung", "proteinstruktur", "wechselwirkungen"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // UK 2 — Löslichkeit, Konzentration und Osmose
    // ─────────────────────────────────────────────────────────────
    {
      id: "ch-2-02",
      title: "Löslichkeit, Konzentration und Osmose",
      stichworte: [
        "Löslichkeit",
        "Osmose",
        "Osmolarität",
        "Isotonisch",
        "Hypotonisch",
        "Hypertonisch",
        "Onkotischer Druck",
        "Albumin",
        "Van-t-Hoff-Faktor",
        "Hämolyse",
        "Infusion",
      ],
      content: `## Einleitung

Warum löst sich Zucker in Wasser, aber Öl nicht? Und warum schieben sich Erythrozyten zusammen, wenn man sie in zu konzentrierte Kochsalzlösung gibt? Die Antworten liegen in zwei zentralen Prinzipien: **Löslichkeit** (welche Stoffe sich gegenseitig lösen) und **Osmose** (wie Wasser durch Membranen fließt). Beide Konzepte sind medizinisch fundamental — von der Berechnung von Infusionslösungen bis zur Erklärung von Ödemen bei Hypoalbuminämie. Im MedAT kommen Osmolaritätsberechnungen und Löslichkeitsprodukte regelmäßig vor.

## Löslichkeit und das Prinzip "Similia similibus solvuntur"

**Polare Lösungsmittel** (z. B. Wasser, ε = 80) lösen **polare und ionische** Substanzen: Wasser hydratisiert Ionen durch Ausbildung von Hydrathüllen (Ion-Dipol-Wechselwirkung) und bildet H-Brücken mit polaren Molekülen (OH, NH, C=O). Die Hydratationsenthalpie kompensiert die Gitterenergie.

> **Merke:** Ein Salz löst sich in Wasser, wenn die Hydratationsenthalpie (Energie beim Umhüllen der Ionen mit Wasser) die Gitterenergie (Energie zum Aufbrechen des Ionengitters) übersteigt oder annähernd erreicht.

**Unpolare Lösungsmittel** (Hexan, Dichlormethan) lösen **unpolare** Substanzen (Lipide, Steroide, Wachse) über London-Wechselwirkungen. Die Dielektrizitätskonstante ε ist niedrig (Hexan: ε = 1,9), was die Abschwächung von Coulomb-Kräften zwischen Ionen verhindert — ionische Verbindungen bleiben unlöslich.

**Amphiphile Moleküle** (Detergenzien, Phospholipide, Gallensäuren) besitzen einen polaren Kopf und einen unpolaren Schwanz → Mizellenbildung in Wasser: Schwänze innen, Köpfe außen. Kritische Mizellkonzentration (CMC): Mindestkonzentration für Mizellenbildung. Gallensäuren im Darm bilden Mizellen, die Fettverdauungsprodukte (Monoglyzeride, Fettsäuren) solubilisieren und zur Resorption an die Enterozytenmembran transportieren.

## Löslichkeitsprodukt Ksp

Für schwerlösliche Salze gilt: Ksp = [Kation]^n × [Anion]^m (bei Sättigung).
- BaSO₄: Ksp ≈ 1,1 × 10⁻¹⁰ → extrem schwerlöslich → sicheres GI-Kontrastmittel
- CaSO₄: Ksp ≈ 4,9 × 10⁻⁵ → leicht löslich
- Ca-Oxalat: Ksp ≈ 2,3 × 10⁻⁹ → Nierensteinbildung bei Hyperoxalurie

Wenn das Ionenprodukt Q > Ksp → Ausfällung (Kristallisation). Wenn Q < Ksp → Lösung noch nicht gesättigt.

**Umrechnung Molarität ↔ g/L:** c [mol/L] × M [g/mol] = β [g/L]
Beispiel: 0,9 % NaCl (m/v) = 9 g NaCl / L; M(NaCl) = 58,44 g/mol → c = 9/58,44 ≈ 0,154 mol/L

## Osmose und osmotischer Druck

**Osmose** ist die Bewegung von Lösungsmittelmolekülen (Wasser) durch eine **semipermeable Membran** (durchlässig für Wasser, nicht für gelöste Teilchen) vom Bereich **niedrigerer** in den Bereich **höherer** Teilchenkonzentration (= vom niedrigen osmotischen Druck zum hohen osmotischen Druck).

**Osmotischer Druck (π):** Nach van't Hoff: π = i · c · R · T
- i = van't-Hoff-Faktor (Anzahl der Teilchen nach Dissoziation; NaCl: i = 2; Glukose: i = 1)
- c = Molarität [mol/L]
- R = 8,314 J/(mol·K), T = Temperatur in Kelvin

**Osmolarität** [mOsmol/L] = Summe aller osmotisch aktiven Teilchen pro Liter.

Blutplasma-Osmolarität: **285–295 mOsmol/L** (Normbereich, geregelt durch ADH und Durst)

Beispielrechnung für 0,154 mol/L NaCl: Osmolarität = 0,154 × 2 × 1000 = 308 mOsmol/L (≈ isoosmolar mit Blut)
Für 5 % Glukose: 50 g/L ÷ 180 g/mol = 0,278 mol/L × 1 = 278 mOsmol/L (≈ isoosmolar)

## Klinisch: Isoton, hypoton, hyperton

- **Isotonische Lösung** (≈ 285–295 mOsmol/L): Gleichgewicht → keine Volumenänderung der Erythrozyten. Beispiele: 0,9 % NaCl, 5 % Glukose
- **Hypotone Lösung** (<270 mOsmol/L): Wasser strömt in Zellen → **Hämolyse** (Erythrozyten platzen bei starker Hypotonie)
- **Hypertone Lösung** (>310 mOsmol/L): Wasser strömt aus Zellen → **Hämaggregation/Crenation** (Erythrozyten schrumpfen)

**Kolloidosmotischer (onkotischer) Druck:** Plasmaproteine (v. a. **Albumin**) können die Kapillarmembran nicht passieren → halten Wasser im Gefäßsystem. Albumin (35–50 g/L) generiert ca. 25 mmHg onkotischen Druck. Bei **Hypoalbuminämie** (Leberzirrhose, nephrotisches Syndrom, Malnutrition) sinkt der onkotische Druck → Wasseraustritt ins Interstitium → **Ödembildung**.

## Kolligative Eigenschaften

Eigenschaften, die nur von der **Teilchenzahl**, nicht von der Art des Gelösten abhängen:
1. **Siedepunktserhöhung:** ΔTb = Kb · m · i (Kb für Wasser = 0,512 K·kg/mol)
2. **Gefrierpunktserniedrigung:** ΔTf = Kf · m · i (Kf für Wasser = 1,853 K·kg/mol; Grundlage für Osmolalitätsmessung)
3. **Dampfdruckerniedrigung** (Raoult)
4. **Osmose**

Klinisch wird die **Serum-Osmolalität** aus dem Gefrierpunkt gemessen; berechnete Osmolalität: 2×[Na⁺] + [Glukose]/18 + [Harnstoff]/6 (Einheiten in mg/dL) bzw. vereinfacht 2×[Na] + [Glukose] + [Harnstoff] (Einheiten in mmol/L).

## Zusammenfassung

- **"Similia similibus solvuntur"**: Polar löst polar (Wasser → Ionen, OH-Gruppen); unpolar löst unpolar (Hexan → Fette, Steroide)
- **Amphiphile Moleküle** (Phospholipide, Detergenzien, Gallensäuren): polarer Kopf + unpolarer Schwanz → Mizellen in Wasser
- **Löslichkeitsprodukt Ksp**: BaSO₄ (Ksp ~10⁻¹⁰, sicheres Röntgenkontrastmittel), Ca-Oxalat (Nierensteine)
- **Osmose**: Wasserbewegung durch semipermeable Membran von niedriger zu hoher Teilchenkonzentration
- Osmotischer Druck π = i · c · R · T; van't-Hoff-Faktor i: Glukose = 1, NaCl = 2
- **Blutplasma-Osmolarität**: 285–295 mOsmol/L → hypoton (<270): Hämolyse; hyperton (>310): Erythrozyten schrumpfen
- **Onkotischer Druck**: Albumin (~25 mmHg) hält Wasser im Gefäß; Hypoalbuminämie → Ödeme
- Kolligative Eigenschaften (abhängig nur von Teilchenzahl): Siedepunktserhöhung, Gefrierpunktserniedrigung, Osmose

## MedAT-Fokus

**Häufige Fragen:**
- "Was passiert, wenn Erythrozyten in destilliertes Wasser gegeben werden?" → Hämolyse (hypotone Lösung → Wasser strömt ins Zellinnere → Zelle platzt)
- "Osmolarität von 0,5 mol/L CaCl₂?" → 0,5 × 3 × 1000 = 1500 mosmol/L (CaCl₂ → Ca²⁺ + 2 Cl⁻, i = 3)
- "Warum bilden sich Ödeme bei Hypoalbuminämie?" → Sinkt onkotischer Druck → hydrostatischer Druck überwiegt → Wasser aus Kapillaren ins Interstitium

**Achtung — typische Verwechslungen:**
- Osmose: Wasser wandert von niedrigerer zu höherer Teilchenkonzentration (= von niedrigem zu hohem osmotischem Druck) — NICHT umgekehrt!
- Hypoton (<270 mosmol/L) → Hämolyse; Hyperton (>310 mosmol/L) → Crenation (Schrumpfen)
- Onkotischer Druck ≠ osmotischer Druck: onkotisch = durch Makromoleküle (Albumin), die Membran nicht passieren können

**Prüfungsrelevante Zahlen/Fakten:**
- Blutplasma-Osmolarität: 285–295 mosmol/L (normaler Bereich)
- 0,9 % NaCl = 154 mmol/L → 308 mosmol/L (klinisch als isoton verwendet); 5 % Glukose ≈ 278 mosmol/L
- Van't-Hoff-Faktor i: NaCl = 2; CaCl₂ = 3; AlCl₃ = 4; Glukose = 1
- Albumin: ≈ 25 mmHg onkotischer Druck; Hypoalbuminämie → Ödeme (nephrotisches Syndrom, Leberzirrhose)

---`,

      lernziele: [
        'Das Löslichkeitsprinzip "Similia similibus solvuntur" auf polare, unpolare und amphiphile Substanzen anwenden können.',
        "Die verschiedenen Konzentrationsangaben (Molarität, Massenkonzentration, %) definieren und ineinander umrechnen können.",
        "Osmose, osmotischen Druck und Osmolarität erklären und mit dem van't-Hoff-Faktor berechnen können.",
        "Isotonische, hypotone und hypertone Lösungen unterscheiden und ihre Wirkung auf Erythrozyten beschreiben können.",
        "Den kolloidosmotischen Druck und die klinische Bedeutung von Albumin bei der Ödembildung erklären können.",
      ],

      sections: [
        {
          heading: "Löslichkeit — polar löst polar",
          text: 'Der Grundsatz "Similia similibus solvuntur" erklärt, warum Wasser Salze und Zucker löst, aber keine Fette: Polare Substanzen wechselwirken über H-Brücken und elektrostatische Kräfte mit Wasser; unpolare Substanzen können diese Wechselwirkungen nicht eingehen und werden daher aus dem Wasser "ausgeschlossen" (hydrophober Effekt). Amphiphile Moleküle wie Phospholipide nutzen beide Eigenschaften: Der polare Kopf zeigt ins Wasser, der unpolare Schwanz organisiert sich weg vom Wasser — Grundlage der Biomembran.',
          merksatz: '"Gleiches löst sich in Gleichem" — polar in polar, unpolar in unpolar.',
        },
        {
          heading: "Osmose und klinische Konsequenzen",
          text: "Die Osmoregulation ist lebensnotwendig: Das Blutplasma wird bei 285–295 mOsmol/L gehalten (Hypothalamus/ADH-Achse). Jede Abweichung gefährdet die Zellintegrität. Hypotone Lösungen (z. B. reines Wasser i.v.) würden Erythrozyten durch Wassereinstrom zum Platzen bringen (Hämolyse). Hypertone Lösungen (z. B. Meerwasser trinken) entziehen Zellen Wasser. Albumin als wichtigstes Plasmaprotein generiert den onkotischen Druck und hält Wasser im Gefäß; sein Abfall führt zu Ödemen.",
          merksatz:
            'Osmose: Wasser wandert vom geringen zum hohen osmotischen Druck — immer von "verdünnt" nach "konzentriert".',
        },
        {
          heading: "Konzentrationsrechnung im klinischen Alltag",
          text: 'Die häufigste Infusionslösung "NaCl 0,9 %" bedeutet 0,9 g NaCl pro 100 mL = 9 g/L. Mit M(NaCl) = 58,44 g/mol ergibt sich c = 0,154 mol/L. Da NaCl vollständig in Na⁺ und Cl⁻ dissoziiert (i = 2), beträgt die Osmolarität 2 × 154 = 308 mOsmol/L — knapp isotonisch. "5 % Glukose" = 50 g/L; M(Glukose) = 180 g/mol → c = 0,278 mol/L; i = 1 → 278 mOsmol/L. Diese Rechnungen sind prüfungsrelevant.',
          merksatz: "Osmolarität [mOsmol/L] = Molarität × i × 1000; NaCl: i = 2, Glukose: i = 1.",
        },
        {
          heading: "Konzentrationsbegriffe",
          text: "Übersicht der wichtigsten Konzentrationsmaße und ihrer klinischen Anwendung.",
          merksatz: "Molarität c [mol/L] = n/V; Massenkonzentration β [g/L] = c × M.",
          table: {
            headers: ["Begriff", "Formel", "Einheit", "Anwendung"],
            rows: [
              ["Molarität (c)", "n / V", "mol/L (M)", "Standardkonzentration im Labor"],
              ["Molalität (b)", "n / m(Lösungsmittel)", "mol/kg", "Kolligative Eigenschaften"],
              ["Massenkonzentration (β)", "m / V", "g/L", "Klinische Laborbefunde"],
              ["Massenanteil (w)", "m(Stoff) / m(Lösung)", "% (m/m)", "Lösungsansatz"],
              [
                "Volumenanteil (φ)",
                "V(Stoff) / V(Lösung)",
                "% (v/v)",
                "Alkohol, Sauerstoffkonzentration",
              ],
              [
                "Massenvolumenkonzentration",
                "m(Stoff) / V(Lösung)",
                "% (m/v)",
                "Infusionslösungen (z. B. 0,9 % NaCl)",
              ],
            ],
          },
        },
      ],

      merksätze: [
        '"Similia similibus solvuntur" — polar löst polar, unpolar löst unpolar.',
        "0,9 % NaCl = 154 mmol/L NaCl = 308 mOsmol/L ≈ isotonisch.",
        "5 % Glukose = 278 mOsmol/L ≈ isotonisch; nach Metabolisierung wirkt es wie hypotones Wasser.",
        "Osmose: Wasser wandert immer vom geringen zum hohen osmotischen Druck (semipermeable Membran).",
        "Van't-Hoff-Faktor i: NaCl → i = 2; CaCl₂ → i = 3; Glukose → i = 1.",
        "Blutplasma-Osmolarität normal: 285–295 mOsmol/L; geregelt durch ADH und Niere.",
        "Hypotone Lösung → Hämolyse der Erythrozyten; hypertone Lösung → Crenation (Schrumpfen).",
        "Albumin erzeugt onkotischen Druck (~25 mmHg) → hält Wasser im Gefäß.",
        "Hypoalbuminämie (Leberzirrhose, nephrotisches Syndrom) → Ödeme durch verminderten onkotischen Druck.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient mit nephrotischem Syndrom (starker Proteinverlust im Urin) entwickelt ausgeprägte periphere Ödeme trotz normalem Blutdruck. Erläutern Sie den pathophysiologischen Mechanismus und die zugrundeliegenden physikalisch-chemischen Prinzipien.",
        answer: `Das nephrotische Syndrom ist durch eine massive Proteinurie (>3,5 g/Tag) gekennzeichnet, die zur Hypoalbuminämie führt (Serumalbumin < 30 g/L, normal 35–50 g/L). Albumin ist das mengenmäßig wichtigste Plasmaprotein und mit einem Molekulargewicht von ca. 66 kDa zu groß, um unter normalen Bedingungen die Kapillarmembran zu passieren.

Der **kolloidosmotische (onkotische) Druck** bezeichnet den osmotischen Druck, den Makromoleküle (vor allem Albumin) aufbauen, die nicht durch Membranen diffundieren können. Er beträgt beim Gesunden ca. 25–28 mmHg und hält Wasser im Gefäßlumen, indem er dem hydrostatischen Filtrationsdruck (ca. 35 mmHg arteriell, 15 mmHg venös) entgegenwirkt. Das Gleichgewicht zwischen Filtration und Reabsorption beschreibt die Starling-Gleichung.

Bei Hypoalbuminämie sinkt der onkotische Druck erheblich (z. B. auf < 15 mmHg). Das hydrostatische Druckgefälle überwiegt nun an beiden Seiten des Kapillarbetts → Nettofiltration von Flüssigkeit ins Interstitium → **Ödembildung**. Da das Blutvolumen sinkt (Volumenmangel im Gefäß), aktiviert die Niere das RAAS (Renin-Angiotensin-Aldosteron-System) und schüttet ADH aus → Na⁺- und Wasserretention → paradoxe Verstärkung der Ödeme, obwohl bereits zu viel Wasser im Interstitium ist.

Das osmotische Grundprinzip lautet: Wasser folgt stets dem osmotischen Gefälle — in diesem Fall dem Druckgefälle von Gefäß zum Interstitium. Da die Plasmaproteine fehlen, fehlt der Gegendruck. Die Therapie zielt auf Albuminsubstitution (kurzzeitig), Diuretika zur Natriumausscheidung und Behandlung der Grunderkrankung.`,
      },

      klinischerBezug:
        "Isotonische Infusionslösungen (0,9 % NaCl, 5 % Glukose) schützen Erythrozyten; Hypoalbuminämie (nephrotisches Syndrom, Leberzirrhose) senkt onkotischen Druck und verursacht Ödeme.",

      selfTest: [
        {
          question:
            "Wie groß ist die Osmolarität einer 0,5 mol/L CaCl₂-Lösung? (CaCl₂ → Ca²⁺ + 2 Cl⁻)",
          options: [
            "500 mOsmol/L",
            "750 mOsmol/L",
            "1000 mOsmol/L",
            "1500 mOsmol/L",
            "250 mOsmol/L",
          ],
          correctIndex: 3,
          explanation:
            "CaCl₂ dissoziiert vollständig in 1 Ca²⁺ und 2 Cl⁻, also 3 Teilchen pro Formeleinheit → van't-Hoff-Faktor i = 3. Osmolarität = c × i × 1000 = 0,5 mol/L × 3 × 1000 = 1500 mOsmol/L. Diese Lösung ist stark hypertonisch (Blut: ~290 mOsmol/L). Starke Hypertonizität würde Erythrozyten schrumpfen lassen (Crenation) und darf nicht als Infusion gegeben werden.",
          hints: [
            "Zählen Sie die Ionen: CaCl₂ → Ca²⁺ + 2 Cl⁻ = wie viele Teilchen?",
            "Osmolarität = Molarität × Anzahl Teilchen (i) × 1000.",
          ],
          tags: ["osmolarität", "dissoziation", "vant-hoff-faktor"],
          difficulty: 2,
        },
        {
          question:
            "Ein Patient erhält versehentlich reines Wasser (destilliert) als intravenöse Infusion. Was passiert mit seinen Erythrozyten?",
          options: [
            "Sie schrumpfen (Crenation), weil Wasser hypotonisch ist.",
            "Nichts, weil Erythrozyten keine semipermeable Membran haben.",
            "Sie schwellen an und platzen (Hämolyse), weil Wasser ins Zellinnere strömt.",
            "Sie werden agglutiniert durch den osmotischen Druck.",
            "Ihre Hämoglobinkonzentration steigt durch Wasserentzug.",
          ],
          correctIndex: 2,
          explanation:
            "Reines Wasser hat eine Osmolarität von 0 mOsmol/L — extrem hypototonisch gegenüber dem Zellinneren (Erythrozyt: ~300 mOsmol/L). Wasser strömt per Osmose durch die semipermeable Erythrozytenmembran in die Zelle, bis der osmotische Druck ausgeglichen ist oder die Membran reißt. Die Folge ist Hämolyse (Platzen der Erythrozyten) mit Freisetzung von Hämoglobin — klinisch: Hämoglobinurie, Nierenversagen möglich. Deswegen müssen alle i.v.-Lösungen isotonisch formuliert sein.",
          hints: [
            "Wohin wandert Wasser bei der Osmose — zur höheren oder niedrigeren Konzentration?",
            "Der Erythrozyt hat eine höhere Innenkonzentration als das Außenmedium.",
          ],
          tags: ["osmose", "hämolyse", "erythrozyten"],
          difficulty: 1,
        },
        {
          question:
            "Welche Konzentration hat eine 5 % (m/v) Glukoselösung in mol/L? (M Glukose = 180 g/mol)",
          options: ["0,028 mol/L", "0,278 mol/L", "0,500 mol/L", "2,78 mol/L", "5,00 mol/L"],
          correctIndex: 1,
          explanation:
            "5 % (m/v) bedeutet 5 g Glukose pro 100 mL = 50 g/L. Mit der Molmasse M = 180 g/mol gilt: c = 50 g/L ÷ 180 g/mol ≈ 0,278 mol/L. Die Osmolarität beträgt 0,278 mol/L × 1 (Glukose dissoziiert nicht, i = 1) × 1000 ≈ 278 mOsmol/L — damit ist die Lösung annähernd isotonisch mit Blutplasma (285–295 mOsmol/L).",
          hints: [
            "5 % (m/v) = 5 g pro 100 mL = wie viele g pro Liter?",
            "c = Masse pro Liter ÷ Molmasse.",
          ],
          tags: ["molarität", "glukose", "konzentration"],
          difficulty: 2,
        },
        {
          question:
            "Warum entwickelt ein Patient mit schwerer Hypoalbuminämie (Albumin 15 g/L statt 40 g/L) periphere Ödeme?",
          options: [
            "Weil Albumin Wasser aktiv in die Zellen pumpt.",
            "Weil der onkotische Druck im Plasma sinkt und Wasser aus den Kapillaren ins Interstitium austritt.",
            "Weil Albumin die Nierenfunktion hemmt und Wasser retiniert wird.",
            "Weil fehlende Albumine die Blut-Hirn-Schranke destabilisieren.",
            "Weil Albumin normalerweise Wasser aus dem Darm resorbiert.",
          ],
          correctIndex: 1,
          explanation:
            "Albumin ist zu groß, um die Kapillarmembran normal zu passieren, und erzeugt dadurch den onkotischen (kolloidosmotischen) Druck von ~25 mmHg, der Wasser im Gefäßlumen hält. Bei Hypoalbuminämie (z. B. nephrotisches Syndrom, Leberzirrhose, Malnutrition) sinkt dieser Gegendruck. Der hydrostatische Druck der Kapillaren überwiegt nun an beiden Seiten, Wasser filtiert verstärkt ins Interstitium: Ödeme entstehen. Dies ist reines Osmose-Prinzip: Wasser folgt dem osmotischen Gradienten — von höherer zu niedrigerer Albuminkonzentration (Gefäß → Interstitium).",
          hints: [
            "Was erzeugt der kolloidosmotische Druck — Wasser halten oder herausdrücken?",
            "Starling-Gleichung: hydrostatischer Druck filtert aus, onkotischer Druck hält zurück.",
          ],
          tags: ["onkotischer-druck", "albumin", "ödeme", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Jod (I₂) ist nahezu wasserunlöslich, löst sich aber gut in Tetrachlorkohlenstoff (CCl₄). Welches Prinzip erklärt das am besten?",
          options: [
            "Jod bildet H-Brücken mit CCl₄.",
            "CCl₄ ist polar und bildet Dipol-Dipol-Wechselwirkungen mit I₂.",
            '"Similia similibus solvuntur" — beide sind unpolarer Natur und wechselwirken über London-Kräfte.',
            "Jod ist ionisch und CCl₄ ist ein starkes Ionensolvatans.",
            "CCl₄ hat eine höhere Dielektrizitätskonstante als Wasser.",
          ],
          correctIndex: 2,
          explanation:
            'Jod (I₂) ist ein unpolares, symmetrisches Molekül ohne permanentes Dipolmoment. CCl₄ ist ebenfalls unpolar (symmetrisches Tetraeder, Dipolmomente heben sich auf). Beide wechselwirken über London-Dispersionskräfte, die für unpolare Moleküle die einzigen intermolekularen Kräfte sind. Da "Gleiches sich in Gleichem löst", ist I₂ gut in CCl₄ löslich. In Wasser (hochpolar, H-Brücken-Netzwerk) ist I₂ dagegen nahezu unlöslich, weil I₂ dieses Netzwerk nicht aufrechterhalten kann. CCl₄ hat eine niedrigere Dielektrizitätskonstante als Wasser, kein Dipolmoment und keine H-Brücken.',
          hints: [
            "Welche Symmetrie hat I₂? Hat es ein Dipolmoment?",
            "CCl₄ hat vier gleiche C-Cl-Bindungen in Tetraederanordnung — was bedeutet das für das Gesamtdipolmoment?",
          ],
          tags: ["löslichkeit", "polarität", "london-kräfte"],
          difficulty: 2,
        },
        {
          question:
            "Welche Lösung ist die richtige intravenöse Flüssigkeit für einen Patienten mit Hypovolämie (Blutdruckabfall durch Volumenmangel) ohne bekannte Elektrolytstörungen?",
          options: [
            "Destilliertes Wasser, weil es keine zusätzlichen Elektrolyte enthält.",
            "10 % NaCl-Lösung, um den Blutdruck schnell zu erhöhen.",
            "Isotonische 0,9 % NaCl-Lösung (154 mmol/L, ~308 mOsmol/L).",
            "Hypotone 0,45 % NaCl-Lösung, um mehr Volumen in die Zellen zu bringen.",
            "70 % Ethanol, weil Alkohol gefäßerweiternd wirkt.",
          ],
          correctIndex: 2,
          explanation:
            "Bei Hypovolämie muss das intravasale Volumen aufgefüllt werden ohne Hämolyse oder Crenation zu riskieren. Die isotonische 0,9 % NaCl-Lösung (154 mmol/L NaCl, Osmolarität ~308 mOsmol/L) entspricht annähernd dem osmotischen Druck des Blutplasmas (285–295 mOsmol/L) und verursacht keine Volumenverschiebungen über Erythrozytenmembranen. Destilliertes Wasser (0 mOsmol/L) würde akute Hämolyse verursachen. 10 % NaCl ist stark hypertonisch und würde Zellen schrumpfen lassen sowie hypernatriämische Schäden verursachen. Hypotone Lösungen würden Zellen aufschwellen lassen.",
          hints: [
            "Welche Osmolarität entspricht der des Blutes (~290 mOsmol/L)?",
            "Was passiert bei zu niedriger oder zu hoher Osmolarität mit Erythrozyten?",
          ],
          tags: ["infusion", "isotonisch", "hypovolämie", "klinisch"],
          difficulty: 1,
        },
        {
          question:
            "Was ist der Van't-Hoff-Faktor (i) für Calciumchlorid CaCl₂, das vollständig dissoziiert?",
          options: ["1", "2", "3", "4", "6"],
          correctIndex: 2,
          explanation:
            "CaCl₂ dissoziiert in wässriger Lösung vollständig: CaCl₂ → Ca²⁺ + 2 Cl⁻. Pro Formeleinheit entstehen 3 Ionen. Der van't-Hoff-Faktor i gibt die Anzahl der Partikel an, in die eine Formeleinheit dissoziiert. Für CaCl₂ gilt daher i = 3. Dies ist wichtig für die Berechnung der Osmolarität (= c × i × 1000) und kolligativer Eigenschaften. Vergleich: NaCl: i = 2 (Na⁺ + Cl⁻); Glukose: i = 1 (kein Zerfall); MgCl₂: i = 3; AlCl₃: i = 4.",
          hints: [
            "Schreiben Sie die Dissoziationsgleichung auf: CaCl₂ → ?",
            "Zählen Sie die Produkt-Ionen.",
          ],
          tags: ["vant-hoff-faktor", "dissoziation", "osmolarität"],
          difficulty: 1,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // UK 3 — Aggregatzustände, Phasenübergänge und Kolloidchemie
    // ─────────────────────────────────────────────────────────────
    {
      id: "ch-2-03",
      title: "Aggregatzustände, Phasenübergänge und Kolloidchemie",
      stichworte: [
        "Aggregatzustand",
        "Phasenübergang",
        "Sublimation",
        "Siedepunkt",
        "Dampfdruck",
        "Kolloid",
        "Tyndall-Effekt",
        "Brownsche Bewegung",
        "Surfactant",
        "Emulsion",
        "HAES",
      ],
      content: `## Einleitung

Warum siedet Wasser im Gebirge schneller? Warum fühlen sich Dampfverbrennungen schlimmer an als Verbrennungen mit gleichtemperiertem Wasser? Und was hat Blut mit einer Milch-Emulsion gemeinsam? Hinter all diesen Fragen steckt die Physik der **Aggregatzustände** und der **Kolloide**. Der Zustand eines Stoffs (fest, flüssig, gasförmig) bestimmt seine Eigenschaften — und Phasenübergänge sind immer mit Energieumsatz verbunden. Kolloide sind Mischsysteme auf der Grenze zwischen echter Lösung und Suspension — klinisch wichtig bei Infusionslösungen, Lungenembolien und Surfactant. Für den MedAT sind besonders Phasenübergänge (endo/exotherm), Siedepunktänderungen und kolloidale Systeme relevant.

## Die drei Aggregatzustände

Materie existiert in drei klassischen Aggregatzuständen, deren Unterschiede auf Teilchenbewegung und intermolekularen Kräften beruhen:

- **Fest:** Teilchen in geordneter Struktur (Kristallgitter), nur Schwingung um Gitterplätze. Definiertes Volumen und Form. Geringe Kompressibilität.
- **Flüssig:** Teilchen dicht gepackt, aber ohne Fernordnung (nur Nahordnung). Definiertes Volumen, aber passt sich der Behälterform an. Fließfähig.
- **Gasförmig:** Teilchen weit voneinander entfernt, schnelle Bewegung (mittlere Geschwindigkeit O₂ bei 25 °C: ~480 m/s). Kein definiertes Volumen oder Form. Hohe Kompressibilität. Ideales Gasgesetz: pV = nRT.

> **Merke:** Plasma (ionisiertes Gas) gilt als 4. Aggregatzustand — klinisch relevant bei der Argon-Plasma-Koagulation (APC), einer endoskopischen Blutstillungsmethode.

## Phasenübergänge und Wärmetönung

Die Phasenübergänge und ihre thermodynamischen Vorzeichen:

- **Schmelzen** (fest → flüssig): endotherm (Schmelzenthalpie ΔH > 0). Wasser: ΔHfus = 334 J/g
- **Erstarren** (flüssig → fest): exotherm (ΔH < 0)
- **Verdampfen/Sieden** (flüssig → gasförmig): endotherm (Verdampfungsenthalpie ΔHvap > 0). Wasser: ΔHvap = 2257 J/g → Thermoregulation durch Schweiß
- **Kondensieren** (gasförmig → flüssig): exotherm → Dampfverbrennungen schlimmer als Wasserverbrennungen gleicher Temperatur
- **Sublimation** (fest → gasförmig, direkt): endotherm; Beispiel: trockenes Eis (CO₂), Iod, Naphthalin. Technisch: Gefriertrocknung (Lyophilisation) konserviert Impfstoffe und Lebensmittel
- **Desublimation/Resublimation** (gasförmig → fest, direkt): exotherm; Beispiel: Reifbildung

> **Merke:** Beim Übergang zu "ungeordneter/freier" Phase wird Energie aufgenommen (endo); beim Übergang zu "geordneter" Phase wird Energie abgegeben (exo). Während eines Phasenübergangs bleibt die Temperatur konstant (Haltepunkte in Heiz-/Kühlkurven).

## Dampfdruck und Siedepunkt

Der **Dampfdruck** ist der Partialdruck des Dampfes über einer Flüssigkeit im Gleichgewicht bei gegebener Temperatur. Er steigt mit der Temperatur (Clausius-Clapeyron-Gleichung).

**Siedepunkt:** Temperatur, bei der der Dampfdruck dem **äußeren Druck** entspricht.
- Normalsiedepunkt: Dampfdruck = 1 atm (101,325 kPa)
- Im Gebirge (Luftdruck < 1 atm): niedrigerer Siedepunkt (Wasser kocht bei weniger als 100 °C → längere Garzeit)
- Im Druckkochtopf (Druck > 1 atm): höherer Siedepunkt → schnelleres Garen

**Siedepunktserhöhung** durch gelöste Substanzen (kolligative Eigenschaft):
ΔTb = Kb · m · i
- Kb(Wasser) = 0,512 K·kg/mol
- m = Molalität [mol/kg]
- i = van't-Hoff-Faktor

## Kolloidchemie

**Kolloide** sind Systeme, in denen Partikel mit einem Durchmesser von **1 nm bis 1 μm** in einem Dispersionsmedium verteilt sind. Sie liegen zwischen echten Lösungen (<1 nm, molekulardispers) und Suspensionen (>1 μm, sedimentieren).


**Kolloidale Eigenschaften:**

- **Brownsche Bewegung**: unregelmäßige Zitterbewegung kolloidaler Teilchen durch thermische Stöße der Lösungsmittelmoleküle; verhindert Sedimentation
- **Tyndall-Effekt**: kolloidale Teilchen (1–1000 nm) streuen sichtbares Licht → der Lichtstrahl wird sichtbar (echte Lösungen streuen kaum; Suspensionen trüben vollständig)
- **Elektrische Doppelschicht (Zeta-Potential)**: kolloidale Partikel tragen oft eine Oberflächenladung (negativ bei Kolloiden wie Albumin bei Blut-pH), die andere gleichnamig geladene Partikel abstoßt → Stabilisierung des Kolloids (Koagulation verhindert)
- **Koagulation**: Zusammenballung kolloidaler Partikel bei Ladungsneutralisierung (Salzzugabe, pH-Änderung, Erhitzen)

## Klinische Kolloidchemie

**Blut als Kolloid:** Erythrozyten (Durchmesser ~7 μm: eigentlich Suspension) und **Plasmaproteine** (Albumin ~7 nm, Fibrinogen ~50 nm: echte Kolloide) verleihen Blut kolloidale Eigenschaften. Plasma zeigt den Tyndall-Effekt.

**Kolloidale Infusionslösungen** werden als Volumenersatz bei Schock eingesetzt:
- **HAES (Hydroxyethylstärke):** synthetisches Polysaccharid-Kolloid; verbleibt länger im Gefäßsystem als kristalloide Lösungen (NaCl, Ringer); Risiko: Nierenschäden bei Sepsis (heute eingeschränkt)
- **Gelatinepräparate** (modifizierte Gelatine): tierisches Kollagen-Derivat; kürzere Wirkdauer als HAES
- **Humanalbumin:** natürliches Kolloid; bei Hypoalbuminämie und Leberzirrhose mit hepatorenalem Syndrom indiziert

**Emulsionen in der Medizin:**
- **Parenterale Ernährung:** Fettemulsionen (Sojaöl/Wasser mit Phospholipid-Emulgator) liefern Energie ohne enterale Resorption
- **Lungenembolie durch Fettembolie:** Fetttröpfchen aus Knochenmarkschädigung (Fraktur) bilden Emulsion im Blut und können Lungenarterien verlegen
- **Surfactant der Lunge:** Phospholipid-Gemisch (Dipalmitoylphosphatidylcholin, DPPC), das die Alveolen-Wasser-Grenzfläche stabilisiert und die Oberflächenspannung senkt → verhindert Alveolarkollaps; bei Frühgeborenen noch nicht ausgereift → **Atemnotsyndrom (RDS)**

## Zusammenfassung

- **3 Aggregatzustände**: fest (Gitter, definiertes Volumen), flüssig (Nahordnung, fließfähig), gasförmig (keine Ordnung, kompressibel)
- Übergänge zu "freierem" Zustand sind **endotherm** (Energie nötig); zu "geordnetem" Zustand sind **exotherm** (Energie frei)
- **Sublimation** (fest→gas, z.B. CO₂): endotherm; Gefriertrocknung (Impfstoffkonservierung) nutzt dieses Prinzip
- Dampfverbrennungen = schlimmer als Wasserverbrennungen gleicher Temp. → Kondensation gibt zusätzlich Verdampfungswärme ab (exotherm)
- **Siedepunkt** = wenn Dampfdruck = äußerer Druck; im Gebirge (↓ Luftdruck) → niedrigerer Siedepunkt
- **Kolloide**: Partikel 1–1000 nm; zwischen echter Lösung und Suspension; zeigen Brownsche Bewegung und Tyndall-Effekt
- Kolloide: Typen — Sol, Emulsion, Gel, Aerosol; medizinisch: HAES, Albumin als Volumenersatz
- **Surfactant** (Dipalmitoylphosphatidylcholin): senkt Alveolen-Oberflächenspannung; Frühgeborene: fehlend → Atemnotsyndrom (RDS)

## MedAT-Fokus

**Häufige Fragen:**
- "Welcher Phasenübergang ist exotherm?" → Kondensation, Erstarren, Desublimation (Übergänge zu geordneterem Zustand geben Energie ab)
- "Warum siedet Wasser im Gebirge bei 90 °C statt 100 °C?" → Niedrigerer Luftdruck → Dampfdruck erreicht Außendruck bei niedrigerer Temperatur
- "Woran erkennt man ein Kolloid?" → Tyndall-Effekt: Kolloid streut Licht sichtbar; echte Lösung tut das nicht

**Achtung — typische Verwechslungen:**
- Sublimation (fest→gas) ist ENDOtherm; Desublimation (gas→fest) ist EXOtherm
- Kolloid (1 nm–1 μm) ≠ echte Lösung (<1 nm, kein Tyndall) ≠ Suspension (>1 μm, sedimentiert)
- Dampfverbrennung ist schlimmer als Wasserverbrennung gleicher Temperatur, weil Kondensation zusätzlich Verdampfungswärme freisetzt (exotherm)

**Prüfungsrelevante Zahlen/Fakten:**
- Verdampfungswärme Wasser: 2257 J/g → Thermoregulation durch Schwitzen
- Siedepunkt = Temperatur, bei der Dampfdruck = äußerer Luftdruck; Druckkochtopf: ↑Druck → ↑Siedepunkt
- Kolloide: 1 nm–1 μm; zeigen Tyndall-Effekt; Brownsche Bewegung verhindert Sedimentation
- Surfactant (DPPC): fehlt bei Frühgeborenen (<34 SSW) → Alveolarkollaps → Atemnotsyndrom (RDS)

---`,

      lernziele: [
        "Die drei Aggregatzustände und ihre Eigenschaften kennen sowie alle Phasenübergänge mit Wärmetönung (endo-/exotherm) benennen können.",
        "Den Zusammenhang zwischen Dampfdruck, Siedepunkt und äußerem Druck erklären und die Siedepunktserhöhung berechnen können.",
        "Kolloide von echten Lösungen und Suspensionen abgrenzen und die Eigenschaften (Brownsche Bewegung, Tyndall-Effekt) erklären können.",
        "Die verschiedenen Kolloidtypen (Sol, Emulsion, Aerosol, Gel) unterscheiden und medizinische Beispiele nennen können.",
        "Kolloidale Infusionslösungen und den Surfactant der Lunge in ihrer physikalisch-chemischen Grundlage erklären können.",
      ],

      sections: [
        {
          heading: "Phasenübergänge — Energiebilanz merken",
          text: "Alle Übergänge zu einem ungeordneteren Zustand (fest→flüssig→gasförmig) sind endotherm: Energie muss zugeführt werden, um Ordnung aufzubrechen. Umgekehrt sind Übergänge zu geordneteren Phasen exotherm. Die Sublimation (fest→gasförmig) überspringt die flüssige Phase und ist stark endotherm — flüssiges Wasser unter 0,006 atm sublimiert (technisch: Gefriertrocknung). Im Körper ist die Verdampfungswärme des Wassers (2257 J/g) entscheidend für die Thermoregulation: Schwitzen kühlt durch Verdampfung.",
          merksatz:
            "Endo = Energie zuführen = Ordnung aufbrechen (fest→flüssig→gasförmig); Exo = Energie abgeben = Ordnung aufbauen.",
        },
        {
          heading: "Kolloide — zwischen Lösung und Suspension",
          text: "Die Partikelgröße ist das entscheidende Kriterium: echte Lösungen (<1 nm, unsichtbar), Kolloide (1 nm–1 μm, opaleszent, Tyndall-Effekt), Suspensionen (>1 μm, trüb, sedimentieren). Der Tyndall-Effekt — sichtbares Streulicht durch kolloidale Partikel — wird klinisch genutzt: Plasma ist opaleszent (kolloidale Proteine), aber nach Entfernung der Proteine klar. Brownsche Bewegung hält kolloidale Partikel in Schwebe; bei großen Partikeln (Suspensionen) überwiegt die Gravitation.",
          merksatz: "Tyndall-Effekt: Kolloid streut Licht sichtbar; echte Lösung tut das nicht.",
        },
        {
          heading: "Klinische Kolloidchemie",
          text: 'Blut ist kein "kolloidales System" im strengen Sinne, aber Plasma verhält sich kolloidartig durch die Plasmaproteine (Albumin, Globuline, Fibrinogen). Kolloidale Infusionslösungen (HAES, Gelatine, Albumin) bleiben länger im Gefäßsystem als kristalloide (NaCl, Ringer), weil die großen Makromoleküle die Kapillarwand nicht passieren können und so den onkotischen Druck aufrechterhalten. Surfactant der Lunge (ein Phospholipid-Protein-Gemisch) ist eine biologische Emulsion, die die Grenzflächenspannung der Alveolen-Luft-Fläche senkt und Kollaps verhindert.',
          merksatz:
            "Kolloidale Infusionslösungen erhalten onkotischen Druck → länger im Gefäß als NaCl-Lösung.",
        },
        {
          heading: "Aggregatzustände im Vergleich",
          text: "Vergleich der drei Aggregatzustände nach ihren charakteristischen Eigenschaften.",
          merksatz:
            "Schmelzen und Verdampfen sind endotherm; Erstarren und Kondensieren sind exotherm.",
          table: {
            headers: ["Eigenschaft", "Fest", "Flüssig", "Gasförmig"],
            rows: [
              ["Teilchenanordnung", "Geordnet, dicht", "Ungeordnet, dicht", "Ungeordnet, weit"],
              ["Volumen", "Bestimmt", "Bestimmt", "Nicht bestimmt"],
              ["Form", "Bestimmt", "Angepasst", "Angepasst"],
              ["Kompressibilität", "Gering", "Gering", "Hoch"],
              ["Beweglichkeit", "Nur Schwingung", "Gleiten", "Frei"],
            ],
          },
        },
        {
          heading: "Klassifikation nach Dispersionsmedium und -phase",
          text: "Kolloidtypen nach dem Aggregatzustand der dispersen Phase und des Dispersionsmediums.",
          merksatz:
            "Emulsion = Flüssig-in-Flüssig-Kolloid; Emulgator stabilisiert (z. B. Lecithin in Milch).",
          table: {
            headers: ["Typ", "Disperse Phase", "Dispersionsmedium", "Beispiel"],
            rows: [
              ["Sol (Lyosol)", "Fest", "Flüssig", "Gold-Sol, Stärkelösung"],
              ["Emulsion", "Flüssig", "Flüssig", "Milch, Mayonnaise"],
              ["Schaum", "Gas", "Flüssig", "Seifenschaum, Schlagsahne"],
              ["Aerosol (flüssig)", "Flüssig", "Gas", "Nebel, Spraydosen"],
              ["Aerosol (fest)", "Fest", "Gas", "Rauch, Staub"],
              ["Gel", "Flüssig", "Fest", "Gelatine, Agar-Agar"],
            ],
          },
        },
      ],

      merksätze: [
        "Sublimation: fest → gasförmig (direkt); Desublimation: gasförmig → fest. Beide überspringen die Flüssigphase.",
        "Siedepunkt = Temperatur, bei der Dampfdruck = äußerer Druck; im Gebirge niedriger als bei Normaldruck.",
        "Siedepunktserhöhung: ΔTb = Kb × m × i; kolligative Eigenschaft abhängig von Teilchenzahl.",
        "Kolloide: Partikelgröße 1 nm – 1 μm; Tyndall-Effekt; Brownsche Bewegung; keine Sedimentation.",
        "Echte Lösungen: <1 nm; kein Tyndall-Effekt. Suspensionen: >1 μm; sedimentieren.",
        "Blutplasma enthält kolloidale Proteine (Albumin ~7 nm) → onkotischer Druck.",
        "HAES und Gelatine als kolloidale Volumenersatzmittel bleiben länger intravaskulär als kristalloide.",
        "Surfactant (DPPC) senkt Alveolären-Oberflächenspannung; Mangel → Atemnotsyndrom (RDS) bei Frühgeborenen.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Tyndall-Effekt und die Brownsche Bewegung in kolloidalen Systemen. Erläutern Sie dann die klinische Bedeutung der kolloidalen Eigenschaften des Blutes am Beispiel des onkotischen Drucks und kolloidaler Infusionslösungen.",
        answer: `Der **Tyndall-Effekt** bezeichnet die Streuung von Licht durch kolloidale Partikel (Durchmesser 1 nm–1 μm). Wenn ein Lichtstrahl ein kolloidales System passiert, wird er an den Partikeloberflächen nach allen Seiten gestreut (Rayleigh-Streuung für Partikel < λ; Mie-Streuung für größere). Der Lichtstrahl wird dadurch seitlich sichtbar, obwohl das Kolloid optisch klar oder leicht opaleszent erscheint. In echten Lösungen (Partikel <1 nm, z. B. NaCl, Glukose) ist der Effekt nicht sichtbar, weil die gelösten Teilchen viel kleiner als die Lichtwellenlänge sind. Suspensionen (>1 μm) trüben das Licht diffus. Der Tyndall-Effekt ist damit ein einfaches diagnostisches Kriterium zur Unterscheidung echter Lösungen von Kolloiden.

Die **Brownsche Bewegung** ist die stochastische Zitterbewegung kolloidaler Partikel infolge der unregelmäßigen thermischen Stöße der Lösungsmittelmoleküle (Wärmeenergie ~kBT ≈ 0,026 eV bei Raumtemperatur). Da kolloidale Partikel klein genug sind, um durch diese Stöße signifikant aus ihrer Position bewegt zu werden, sedimentieren sie nicht unter dem Einfluss der Schwerkraft. Diese Eigenschaft ist entscheidend für die Stabilität kolloidaler Systeme. Große Teilchen (>1 μm, Suspensionen) haben genug Masse, um trotz Brownscher Bewegung zu sedimentieren.

**Klinische Bedeutung kolloidaler Blut-Eigenschaften:** Plasma enthält kolloidale Proteine — vor allem Albumin (Molmasse ~66 kDa, Durchmesser ~7 nm), aber auch Fibrinogen, Globuline und Gerinnungsfaktoren. Diese Proteine können die Kapillarmembran (Porendurchmesser <2 nm effektiv für Proteine) nicht passieren und erzeugen dadurch den **onkotischen (kolloidosmotischen) Druck** von ca. 25–28 mmHg. Dieser Druck hält Wasser im Gefäßlumen, indem er dem nach außen filtrierenden hydrostatischen Druck entgegenwirkt (Starling-Gleichgewicht).

**Kolloidale Infusionslösungen** (HAES, Gelatine, Humanalbumin) nutzen dasselbe Prinzip: Die großen Makromoleküle (Hydroxyethylstärke: >100 kDa; Gelatine: ~30 kDa; Albumin: 66 kDa) bleiben nach intravenöser Gabe im Gefäßlumen und erhöhen den onkotischen Druck, was das intravasale Volumen länger aufrechterhält als kristalloide Lösungen (NaCl, Ringer). Bei hypoosmolarem Schock (z. B. nach schwerem Blutverlust) ist dies klinisch vorteilhaft. HAES ist seit 2013 bei kritisch kranken und Sepsis-Patienten aufgrund von Nierenschäden eingeschränkt; Humanalbumin wird bei Leberzirrhose mit spontaner bakterieller Peritonitis und hepatorenalem Syndrom eingesetzt.`,
      },

      klinischerBezug:
        "Kolloidale Infusionslösungen (HAES, Albumin) nutzen die onkotische Wirkung großer Makromoleküle; Surfactant-Mangel bei Frühgeborenen führt durch fehlende Emulsifiziereigenschaften zum Atemnotsyndrom RDS.",

      selfTest: [
        {
          question: "Welcher Phasenübergang ist exotherm?",
          options: [
            "Schmelzen (fest → flüssig)",
            "Verdampfen (flüssig → gasförmig)",
            "Sublimation (fest → gasförmig)",
            "Kondensation (gasförmig → flüssig)",
            "Endotherm sind alle Phasenübergänge.",
          ],
          correctIndex: 3,
          explanation:
            "Kondensation (gasförmig → flüssig) ist exotherm: Beim Übergang in den geordneteren, dichteren Zustand wird die beim Verdampfen aufgenommene Wärme (Verdampfungswärme) wieder freigesetzt. Dieses Prinzip erklärt, warum Dampfverbrennungen schlimmer sind als Wasserverbrennungen gleicher Temperatur — Dampf gibt beim Kondensieren auf der Haut zusätzlich Verdampfungswärme (2257 J/g) ab. Alle Übergänge zu weniger geordneten Phasen (Schmelzen, Verdampfen, Sublimation) sind endotherm.",
          hints: [
            "Merkrege: Unordnung schaffen = Energie aufnehmen; Ordnung aufbauen = Energie abgeben.",
            "Kondensation ist das Gegenteil von Verdampfen — gleich exotherm wie Verdampfen endotherm ist.",
          ],
          tags: ["phasenübergang", "kondensation", "exotherm"],
          difficulty: 1,
        },
        {
          question:
            "Wasser siedet in einer Gebirgsküche bei 3000 m Höhe (Luftdruck ~70 kPa statt 101 kPa) bei ca. 90 °C. Warum?",
          options: [
            "Weil Wasser in großer Höhe eine niedrigere Molmasse hat.",
            "Weil der Dampfdruck mit steigender Höhe zunimmt.",
            "Weil der Siedepunkt dort liegt, wo Dampfdruck = äußerer Luftdruck; niedrigerer Luftdruck → niedrigerer Siedepunkt.",
            "Weil die Schwerkraft den Siedepunkt beeinflusst.",
            "Weil Wasser in der Höhe stärker ionisiert ist.",
          ],
          correctIndex: 2,
          explanation:
            "Der Siedepunkt einer Flüssigkeit ist definiert als die Temperatur, bei der ihr Dampfdruck dem äußeren Druck entspricht. In großer Höhe ist der Luftdruck niedriger (3000 m: ~70 kPa statt 101,3 kPa). Wasser muss daher auf eine geringere Temperatur erhitzt werden, damit sein Dampfdruck den verminderten Luftdruck erreicht. Bei 70 kPa beträgt der Siedepunkt ca. 90 °C. Folge: Lebensmittel müssen länger gekocht werden, weil die Kochtemperatur niedriger ist. Im Druckkochtopf (>1 atm) steigt der Siedepunkt entsprechend an, was die Garzeit verkürzt.",
          hints: [
            "Definition Siedepunkt: Dampfdruck = ?",
            "Was passiert mit dem Luftdruck in großer Höhe?",
          ],
          tags: ["siedepunkt", "dampfdruck", "luftdruck"],
          difficulty: 2,
        },
        {
          question: "Woran ist ein kolloidales System von einer echten Lösung zu unterscheiden?",
          options: [
            "Das Kolloid ist immer trüb und sedimentiert.",
            "Echte Lösungen zeigen den Tyndall-Effekt, Kolloide nicht.",
            "Kolloide zeigen den Tyndall-Effekt; echte Lösungen nicht.",
            "Kolloide bestehen nur aus anorganischen Substanzen.",
            "Echte Lösungen haben größere Partikel als Kolloide.",
          ],
          correctIndex: 2,
          explanation:
            "Der Tyndall-Effekt — die seitliche Sichtbarkeit eines Lichtstrahls durch Lichtstreuung an Partikeln — ist das klassische Unterscheidungsmerkmal. Kolloidale Partikel (1 nm–1 μm) haben die richtige Größe, um Licht effizient zu streuen. Partikel echter Lösungen (<1 nm) sind viel kleiner als die Lichtwellenlänge und streuen kaum. Kolloide sedimentieren aufgrund der Brownschen Bewegung nicht spontan (im Gegensatz zu Suspensionen mit >1 μm-Partikeln). Kolloide können sowohl organische als auch anorganische Substanzen sein.",
          hints: [
            "Tyndall-Effekt: Ein Lichtstrahl wird in einem bestimmten Medium seitlich sichtbar — in welchem?",
            "Partikelgröße: Lösung <1 nm, Kolloid 1–1000 nm, Suspension >1000 nm.",
          ],
          tags: ["kolloid", "tyndall-effekt", "lösung"],
          difficulty: 1,
        },
        {
          question:
            "Bei einem Frühgeborenen der 28. Schwangerschaftswoche wird ein Atemnotsyndrom (RDS) diagnostiziert. Welcher physikalisch-chemische Mechanismus liegt diesem Syndrom zugrunde?",
          options: [
            "Fehlendes Hämoglobin führt zu unzureichender O₂-Bindung.",
            "Fehlender Surfactant erhöht die Oberflächenspannung der Alveolen → Kollaps beim Ausatmen.",
            "Zu niedrige Temperatur in den Lungen verhindert Gaseintausch.",
            "Fehlende Osmolarität der Lungenflüssigkeit verursacht Ödem.",
            "Überschuss an Surfactant lässt die Alveolen überdehnen.",
          ],
          correctIndex: 1,
          explanation:
            "Surfactant (surface-active agent) ist ein Phospholipid-Protein-Gemisch, das von Typ-II-Pneumozyten produziert wird und ab ca. 34.–36. SSW in ausreichender Menge vorhanden ist. Sein Hauptbestandteil DPPC (Dipalmitoylphosphatidylcholin) lagert sich als monomolekularer Film an die Alveolen-Luft-Grenzfläche. Er senkt die Oberflächenspannung des Wasserfilms von ~70 mN/m auf < 5 mN/m bei kleinen Alveolen. Ohne Surfactant würde die Laplace-Druckformel (ΔP = 2γ/r) bewirken, dass kleine Alveolen bei niedrigem Radius hohen Innendruck haben und beim Ausatmen kollabieren. RDS-Therapie: exogene Surfactant-Instillation (Beractant, Poractant alfa) und CPAP-Beatmung.",
          hints: [
            "Laplace-Gleichung: ΔP = 2γ/r — was passiert bei hoher Oberflächenspannung γ und kleinem Radius r?",
            "Surfactant ist ein grenzflächenaktiver Stoff — er setzt die Oberflächenspannung herab.",
          ],
          tags: ["surfactant", "atemnotsyndrom", "oberflächenspannung", "klinisch"],
          difficulty: 3,
        },
        {
          question: "Was unterscheidet eine Emulsion von einem Sol?",
          options: [
            "Eine Emulsion hat Partikel kleiner als 1 nm.",
            "In einem Sol ist die disperse Phase flüssig; in einer Emulsion ist sie fest.",
            "In einer Emulsion ist die disperse Phase flüssig (Flüssig-in-Flüssig); in einem Sol ist sie fest (Fest-in-Flüssig).",
            "Eine Emulsion sedimentiert, ein Sol nicht.",
            "Emulsionen existieren nur in biologischen Systemen.",
          ],
          correctIndex: 2,
          explanation:
            "Der Unterschied liegt in der Aggregatzustand der dispersen Phase: Ein Sol (Lyosol) ist ein Kolloid mit fester disperser Phase in flüssigem Dispersionsmedium (z. B. Goldkolloid, Stärkelösung). Eine Emulsion ist ein Kolloid mit flüssiger disperser Phase in flüssigem Dispersionsmedium (Flüssig-in-Flüssig, z. B. Milch = Fett in Wasser, Mayonnaise). Emulsionen werden durch Emulgatoren (amphiphile Moleküle wie Lecithin, Gallensäuren) stabilisiert, die sich an der Phasengrenze anlagern. Parenterale Fettemulsionen für die künstliche Ernährung sind medizinisch relevante Beispiele.",
          hints: [
            'Sol: Was ist "Sol" — von lat. "solutio" für Lösung; disperse Phase ist fest.',
            "Emulsion: Denken Sie an Milch — Fett in Wasser: welcher Aggregatzustand ist die disperse Phase?",
          ],
          tags: ["kolloid", "emulsion", "sol"],
          difficulty: 2,
        },
        {
          question:
            "Welche der folgenden Substanzen zeigt bei gleicher Molalität (m = 0,1 mol/kg) die stärkste Siedepunktserhöhung in Wasser?",
          options: [
            "Glukose (i = 1)",
            "NaCl (i = 2)",
            "CaCl₂ (i = 3)",
            "AlCl₃ (i = 4)",
            "Alle gleich, weil gleiche Molalität.",
          ],
          correctIndex: 3,
          explanation:
            "Die Siedepunktserhöhung ΔTb = Kb × m × i ist eine kolligative Eigenschaft, die von der Gesamtzahl der gelösten Teilchen (nicht ihrer Art) abhängt. Bei gleicher Molalität m = 0,1 mol/kg gilt: Glukose (i = 1): ΔTb = 0,512 × 0,1 × 1 = 0,0512 K; NaCl (i = 2): 0,1024 K; CaCl₂ (i = 3): 0,1536 K; AlCl₃ (i = 4: Al³⁺ + 3 Cl⁻ = 4 Teilchen): 0,2048 K. AlCl₃ erzeugt die meisten Teilchen und hat damit die größte Siedepunktserhöhung.",
          hints: [
            "Schreiben Sie die Dissoziationsgleichung für AlCl₃ auf: AlCl₃ → Al³⁺ + 3 Cl⁻ = ? Teilchen.",
            "Formel: ΔTb = Kb × m × i; welches i ist am größten?",
          ],
          tags: ["siedepunktserhöhung", "kolligative-eigenschaften", "vant-hoff-faktor"],
          difficulty: 3,
        },
        {
          question:
            "Brownsche Bewegung schützt kolloidale Partikel vor Sedimentation. Was ist die physikalische Grundlage dieser Bewegung?",
          options: [
            "Elektrostatische Abstoßung zwischen gleichnamig geladenen Kolloidpartikeln.",
            "Thermische Energie der Lösungsmittelmoleküle, die Kolloidpartikel durch zufällige Stöße ständig in Bewegung halten.",
            "Magnetische Wechselwirkungen zwischen Kolloidpartikeln und dem Lösungsmittel.",
            "Gravitation, die auf Kolloidpartikel gleichmäßig wirkt.",
            "Chemische Reaktionen an der Kolloidpartikeloberfläche.",
          ],
          correctIndex: 1,
          explanation:
            "Brownsche Bewegung (entdeckt von Robert Brown, 1827; erklärt von Einstein, 1905) basiert auf den thermischen Stößen der Lösungsmittelmoleküle gegen die kolloidalen Partikel. Die mittlere thermische Energie jedes Freiheitsgrades beträgt kBT/2 (kB = Boltzmann-Konstante, T = Temperatur). Kolloidale Partikel (1–1000 nm) sind zwar größer als Atome, aber klein genug, dass die summierte Stoßkraft aus ungleichmäßigen Richtungen eine zufällige, unkontrollierte Bewegung erzeugt. Diese überlagert die langsame Sedimentation durch Gravitation. Suspensionen (>1 μm) haben zu viel Masse — Gravitation dominiert, sie sedimentieren.",
          hints: [
            "Einstein erklärte die Brownsche Bewegung 1905 über die kinetische Gastheorie.",
            "Bei welcher Temperatur würde Brownsche Bewegung aufhören? Bei 0 K (absoluter Nullpunkt).",
          ],
          tags: ["brownsche-bewegung", "kolloid", "thermische-energie"],
          difficulty: 2,
        },
      ],
    },

    // === from kap5-periodensystem (ch-5-01 bis ch-5-03) ===

    {
      id: "ch-5-01",
      title: "Aufbau und Ordnungsprinzip des PSE",
      stichworte: [
        "Periodensystem",
        "Mendelejew",
        "Ordnungszahl",
        "Periode",
        "Gruppe",
        "s-Block",
        "p-Block",
        "d-Block",
        "Halbmetalle",
        "Metallcharakter",
        "Valenzelektron",
      ],
      content: `## Einleitung

Das **Periodensystem der Elemente (PSE)** ist der "Stadtplan der Chemie": Mit einem Blick sieht man, wie reaktiv ein Element ist, wie viele Bindungspartner es eingehen kann und ob es Metall, Nichtmetall oder Halbmetall ist. Die Elemente sind nach ihrer **Ordnungszahl** (Protonenzahl) angeordnet und wiederholen dabei ihre Eigenschaften in regelmäßigen Abständen — deshalb heißen die horizontalen Zeilen "Perioden". Elemente in derselben Spalte (Gruppe) haben die gleiche Anzahl an Valenzelektronen und daher ähnliche chemische Eigenschaften. Für den MedAT sind PSE-Trends, Gruppen-Merkmale und der Zusammenhang zwischen Position und Elektronenkonfiguration prüfungsrelevant.

## Geschichte und Entwicklung des Periodensystems

Das Periodensystem der Elemente (PSE) ist eines der fundamentalsten Ordnungssysteme der Naturwissenschaften. Im Jahr 1869 veröffentlichten **Dmitri Iwanowitsch Mendelejew** (Russland) und **Lothar Meyer** (Deutschland) unabhaengig Tabellen, die Elemente nach Atommasse anordneten und Periodizitaeten der Eigenschaften zeigten. Mendelejews geniale Leistung lag darin, Luecken fuer noch unentdeckte Elemente vorherzusagen: Eka-Aluminium (Gallium, 1875), Eka-Bor (Scandium, 1879), Eka-Silicium (Germanium, 1886) stimmten fast exakt mit seinen Vorhersagen ueberein.

Das moderne PSE basiert auf der **Kernladungszahl (Ordnungszahl Z)**, also der Protonenzahl. Henry Moseley klaerte dies 1913 durch Roentgenspektroskopie: Charakteristische Roentgenfrequenzen haengen von Z ab, nicht von der Atommasse. Seither werden Elemente von Wasserstoff (Z=1) bis Oganesson (Z=118) geordnet. Die Umstellung loeste alle scheinbaren Anomalien: Ar (Atommasse 39,9, Z=18) steht korrekt vor K (39,1, Z=19).

## Perioden: Horizontale Zeilen

Das PSE besitzt **7 Perioden** (horizontale Zeilen). Die Periodennummer entspricht der hoechsten Hauptquantenzahl n der Valenzelektronen:

- **Periode 1** (n=1): H, He - nur 1s-Orbitale, 2 Elemente
- **Periode 2** (n=2): Li bis Ne - 2s und 2p-Orbitale, 8 Elemente
- **Periode 3** (n=3): Na bis Ar - 3s und 3p-Orbitale, 8 Elemente
- **Periode 4** (n=4): K bis Kr - 4s, 3d und 4p-Orbitale, 18 Elemente (erstmals d-Block)
- **Periode 5** (n=5): Rb bis Xe - 5s, 4d und 5p-Orbitale, 18 Elemente
- **Periode 6** (n=6): Cs bis Rn - 6s, 4f, 5d und 6p-Orbitale, 32 Elemente (Lanthanoide)
- **Periode 7** (n=7): Fr bis Og - 7s, 5f, 6d und 7p-Orbitale, 32 Elemente (Actinoide)

Merkreihe Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32 (aus Kapazitat der Unterschalen: s=2, p=6, d=10, f=14).

## Gruppen: Vertikale Spalten

Das PSE hat **18 Gruppen** (IUPAC-Nummerierung 1-18). Elemente derselben Gruppe haben identische Valenzelektronenzahl und aehnliche chemische Eigenschaften:

- **Gruppe 1** (Alkalimetalle): 1 Valenzelektron (ns¹), bilden +1-Ionen
- **Gruppe 2** (Erdalkalimetalle): 2 Valenzelektronen (ns²), bilden +2-Ionen
- **Gruppen 3-12** (Uebergangsmetalle / d-Block): variable Oxidationsstufen
- **Gruppe 13**: 3 Valenzelektronen (s²p¹), z.B. Al, B
- **Gruppe 14**: 4 Valenzelektronen (s²p²), z.B. C, Si
- **Gruppe 15**: 5 Valenzelektronen (s²p³), z.B. N, P
- **Gruppe 16** (Chalkogene): 6 Valenzelektronen (s²p⁴), z.B. O, S
- **Gruppe 17** (Halogene): 7 Valenzelektronen (s²p⁵), bilden -1-Ionen
- **Gruppe 18** (Edelgase): 8 Valenzelektronen (s²p⁶; He: 1s²), chemisch inert

Im p-Block gilt: Gruppenummer = 10 + Anzahl der Valenzelektronen.

## Bloecke: Orbital-Besetzung und Position

Die PSE-Position spiegelt direkt wider, welches Orbital zuletzt besetzt wird (Aufbauprinzip):

- **s-Block** (Gruppen 1-2): Letzte Elektronen in s-Orbitalen (Na: [Ne] 3s¹; Ca: [Ar] 4s²)
- **p-Block** (Gruppen 13-18): Letzte Elektronen in p-Orbitalen (Al: [Ne] 3s²3p¹ bis Ar: [Ne] 3s²3p⁶)
- **d-Block** (Gruppen 3-12): Letzte Elektronen in d-Orbitalen der vorletzten Schale (Fe: [Ar] 3d⁶ 4s²)
- **f-Block** (Lanthanoide, Actinoide): Letzte Elektronen in f-Orbitalen; aus Platzgruenden unten ausgelagert

## Metallcharakter und Trennlinie

Eine Treppenlinie (B -> Si -> Ge -> As -> Sb -> Te -> At) trennt **Metalle** (links/unten) von **Nichtmetallen** (rechts/oben). Entlang dieser Linie stehen die **Halbmetalle (Metalloide)**: B, Si, Ge, As, Sb, Te, At. Silicium ist die Basis der Mikroelektronik (Transistoren, integrierte Schaltkreise durch p- und n-Dotierung). As₂O₃ (Trisenox) ist ein zugelassenes Therapeutikum bei akuter Promyelozyten-Leukaemie (APL).

Der **Metallcharakter** nimmt zu: in einer Periode von rechts nach links und in einer Gruppe von oben nach unten.

## Ausnahmen beim Aufbauprinzip: Chrom und Kupfer

- **Chrom (Z=24)**: Erwartet [Ar] 3d⁴ 4s², tatsaechlich **[Ar] 3d⁵ 4s¹** - halbgefuelltes d⁵ (maximale Austauschenergie nach Hund)
- **Kupfer (Z=29)**: Erwartet [Ar] 3d⁹ 4s², tatsaechlich **[Ar] 3d¹⁰ 4s¹** - vollgefuelltes d¹⁰ ist besonders stabil

Chrom(III): essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung). Chrom(VI): stark karzinogen.

## Zusammenfassung

- **PSE**: 7 Perioden (Zeilen, Hauptquantenzahl n), 18 Gruppen (Spalten, Valenzelektronen), 4 Blöcke (s, p, d, f)
- Perioden-Längen: 2 – 8 – 8 – 18 – 18 – 32 – 32 (Kapazität der Unterschalen)
- **s-Block** (Gr. 1–2): Alkali- und Erdalkalimetalle; **p-Block** (Gr. 13–18): Nichtmetalle + Halbmetalle + Edelgase
- **d-Block** (Gr. 3–12): Übergangsmetalle; **f-Block**: Lanthanoide/Actinoide (ausgelagert)
- Gruppenposition im p-Block: Gruppennummer = 10 + Valenzelektronenzahl (z.B. Gr. 17 = 7 VE = Halogene)
- **Metallcharakter**: in Periode von links→rechts abnehmend; in Gruppe von oben→unten zunehmend
- Halbmetalle (Metalloide) entlang der Treppe: B, Si, Ge, As, Sb, Te, At
- **Mendelejew** (1869): ordnete nach Atommasse, sagte Eigenschaften unbekannter Elemente vorher; **Moseley** (1913): Ordnung nach Kernladungszahl Z

## MedAT-Fokus

**Häufige Fragen:**
- "In welchem Block steht Calcium (Z=20)?" → s-Block, Gruppe 2 ([Ar]4s²)
- "Warum hat das PSE 18 Gruppen, aber nur 7 Perioden?" → Gruppen = Valenzelektronentyp (18 Möglichkeiten); Perioden = höchste Hauptquantenzahl n (7 Schalen)
- "Welche Elektronenkonfiguration hat Schwefel (Gruppe 16, Periode 3)?" → [Ne]3s²3p⁴

**Achtung — typische Verwechslungen:**
- Perioden (horizontal, 7 Stück) ≠ Gruppen (vertikal, 18 Stück) — häufige Verwechslung!
- p-Block: Gruppenummer = 10 + Valenzelektronen (Gr.17 = 7 VE); s-Block: Gruppenummer = Valenzelektronen (Gr.2 = 2 VE)
- Cr ([Ar]3d⁵4s¹) und Cu ([Ar]3d¹⁰4s¹) — Ausnahmen vom Aufbauprinzip, regelmäßig geprüft

**Prüfungsrelevante Zahlen/Fakten:**
- Periodenlängen: 2 – 8 – 8 – 18 – 18 – 32 – 32 (aus Kapazität der Unterschalen s, p, d, f)
- Halbmetalle (Treppenlinie): B, Si, Ge, As, Sb, Te, At — Halbleitereigenschaften
- Mendelejew (1869): nach Atommasse, Vorhersage unentdeckter Elemente; Moseley (1913): nach Kernladungszahl Z (löst alle Anomalien)

---`,

      lernziele: [
        "Den Aufbau des PSE mit Perioden, Gruppen und Bloecken erklaeren und den Zusammenhang zur Quantenzahlsystematik herstellen",
        "Die Entwicklung des PSE von Mendelejew (Atommasse) zum modernen System nach Kernladungszahl historisch einordnen",
        "Den Zusammenhang zwischen PSE-Position und Elektronenkonfiguration fuer Haupt- und Nebengruppenelemente ableiten",
        "Den Trend des Metallcharakters und die Lage der Halbmetalle (Metalloide) im PSE beschreiben",
        "Aus einer Elektronenkonfiguration Periode, Gruppe und Block direkt bestimmen",
      ],

      sections: [
        {
          heading: "Perioden: Schalenzahl und Elementanzahl",
          text: "Die Laenge jeder Periode richtet sich nach der Kapazitaet der besetzten Unterschalen. Periode 1: nur 1s, max. 2e- => 2 Elemente (H, He). Perioden 2 und 3: s und p-Unterschalen, max. 8e- => je 8 Elemente. Perioden 4 und 5: s, d und p, max. 18e- => je 18 Elemente. Perioden 6 und 7: s, f, d und p, max. 32e- => je 32 Elemente (f-Block = Lanthanoide/Actinoide). Lanthanoide (Ce-Lu) und Actinoide (Th-Lr) werden aus Platzgruenden unten ausgelagert, gehoeren aber formal zu Perioden 6 und 7. Alle Actinoide ab Uran (Z=92) sind radioaktiv. Merkregel: 2 - 8 - 8 - 18 - 18 - 32 - 32.",
          merksatz:
            "Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32 (entspricht Kapazitaet der Unterschalen)",
        },
        {
          heading: "Gruppen: gleiche Valenzelektronen = gleiche Chemie",
          text: "Elemente der gleichen Gruppe haben gleich viele Valenzelektronen und nahezu identische chemische Eigenschaften. Beispiel Gruppe 1: Li, Na, K, Rb, Cs bilden alle +1-Ionen, reagieren mit Wasser zu Lauge + H2, bilden weisse, gut loesliche Salze. Im p-Block: Gruppenummer = 10 + Valenzelektronen (Gr.13 = 3 VE; Gr.17 = 7 VE). Im s-Block: Gruppenummer = Valenzelektronen (Gr.1 = 1 VE; Gr.2 = 2 VE). Die IUPAC-Nummerierung 1-18 ist international verbindlich; aeltere Systeme (IA-VIIIA) finden sich noch in vielen Pruefungsunterlagen.",
          merksatz:
            "p-Block Gruppenummer = 10 + Valenzelektronen (Gr.13: 3 VE = Al, B; Gr.17: 7 VE = Halogene)",
        },
        {
          heading: "Halbmetalle: Grenzelemente mit Halbleitereigenschaften",
          text: "Halbmetalle (Metalloide: B, Si, Ge, As, Sb, Te, At) liegen entlang der Treppenlinie. Ihre elektrische Leitfaehigkeit liegt zwischen Metallen und Nichtmetallen und steigt mit Temperatur (Halbleiterverhalten). Silicium (Si) ist Basis der Mikroelektronik: Dotierung mit Gruppe-13-Atomen (p-Typ, z.B. Bor: erzeugt Loechriger) oder Gruppe-15-Atomen (n-Typ, z.B. Phosphor: erzeugt ueberschuessige Elektronen) erzeugt pn-Uebergaenge fuer Transistoren. Germanium (Ge): erstes Halbleitermaterial (Bell Labs 1947). As2O3 (Trisenox): Therapeutikum bei akuter Promyelozyten-Leukaemie (APL) - induziert Differenzierung und Apoptose von Leukaemiezellen.",
          merksatz:
            "Halbmetalle: B, Si, Ge, As, Sb, Te, At - Halbleiter entlang der Treppenlinie; Si = Grundlage der Mikroelektronik",
        },
        {
          heading: "Ausnahmen beim Aufbauprinzip: Cr und Cu",
          text: "Chrom (Z=24): Statt [Ar] 3d4 4s2 => tatsaechlich [Ar] 3d5 4s1, weil halbgefuelltes 3d5 (alle 5 d-Orbitale einfach besetzt, paralleler Spin) durch maximale Austauschenergie (Hund) besonders stabil ist. Kupfer (Z=29): Statt [Ar] 3d9 4s2 => tatsaechlich [Ar] 3d10 4s1, weil vollgefuelltes d10 besonders stabil. Diese Ausnahmen werden im MedAT regelmaessig geprueft. Klinisch: Chrom(III) ist essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung am Rezeptor). Chrom(VI) ist stark karzinogen (oxidiert DNA-Basen => Mutationen => Lungenkrebs bei Industriearbeitern).",
          merksatz:
            "Cr: [Ar] 3d5 4s1 (halbgefuellt); Cu: [Ar] 3d10 4s1 (vollgefuellt) - Ausnahmen durch Stabilitaetsgewinn",
        },
      ],

      diagram: "periodic-table",
      merksätze: [
        "PSE: 7 Perioden (horizontal, = Schalenanzahl n), 18 Gruppen (vertikal, = Valenzelektronen)",
        "Mendelejew ordnete nach Atommasse; modernes PSE ordnet nach Kernladungszahl Z (Moseley, 1913)",
        "s-Block: Gr.1-2; p-Block: Gr.13-18; d-Block: Gr.3-12; f-Block: Lanthanoide/Actinoide",
        "Metallcharakter: in Periode von links nach rechts ab; in Gruppe von oben nach unten zu",
        "Halbmetalle (Metalloide): B, Si, Ge, As, Sb, Te, At - Halbleiter entlang der Treppenlinie",
        "Periodenlangen: 2 - 8 - 8 - 18 - 18 - 32 - 32",
        "Cr: [Ar] 3d5 4s1 und Cu: [Ar] 3d10 4s1 - Ausnahmen vom Aufbauprinzip",
        "p-Block Gruppenummer = 10 + Valenzelektronen (Gr.15 = N, P = 5 VE)",
        "Lanthanoide: f-Block, Periode 6, Ce-Lu; Actinoide: Periode 7, Th-Lr (alle radioaktiv ab U)",
      ],

      klinischerBezug:
        "Die Position im PSE bestimmt die biologische Rolle: Gruppe 1 (Na+, K+) sind die dominanten Elektrolyte fuer Membranpotenzial und Erregungsleitung; Gruppe 2 (Ca2+, Mg2+) sind Cofaktoren und Strukturelemente des Knochens; Halbmetalle (Si, Ge) ermoeglichen moderne Medizintechnik (MRT-Elektronik); As (Halbmetall) ist als Trisenox (As2O3) ein zugelassenes Therapeutikum bei akuter Promyelozyten-Leukaemie, wo es das Onkoprotein PML-RARalpha degradiert und Apoptose in Leukaemiezellen induziert.",

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklaeren Sie, warum Mendelejews Periodensystem trotz Orientierung an der Atommasse so erfolgreich war, und wo es Schwaechen zeigte. Welches moderne Prinzip loeste das Problem?",
        answer:
          "Mendelejews Erfolg beruhte auf der empirischen Beobachtung, dass chemische Eigenschaften sich periodisch mit steigender Atommasse wiederholen. Da Atommasse und Kernladungszahl fuer die meisten Elemente in derselben Reihenfolge wachsen, funktionierte sein System fuer den Grossteil des PSE korrekt. Schwaechen zeigten sich bei Elementpaaren, bei denen die Reihenfolge nach Atommasse der Reihenfolge nach Eigenschaften widersprach: Argon (Atommasse 39,9) muesste nach Atommasse nach Kalium (39,1) stehen - nach Eigenschaften gehoert Ar aber zu den Edelgasen (Gruppe 18) und K zu den Alkalimetallen (Gruppe 1). Ebenso problematisch: Tellur/Jod und Cobalt/Nickel. Mendelejew vermutete Messfehler. Henry Moseley klaerte 1913 durch Roentgenspektroskopie, dass die charakteristischen Roentgenfrequenzen der Elemente von der Protonenzahl Z (Kernladungszahl) abhaengen. Z ist das korrekte Ordnungsprinzip: Ar hat Z=18, K hat Z=19 - die richtige Reihenfolge, ohne Anomalie. Das moderne PSE nach Kernladungszahl ist quantenmechanisch begruendet: Z bestimmt die Elektronenkonfiguration (Aufbauprinzip), diese bestimmt die chemischen Eigenschaften. Damit wurden alle scheinbaren Anomalien aufgeloest, und Mendelejews Luecken erwiesen sich als korrekte Vorhersagen unentdeckter Elemente (Gallium, Scandium, Germanium).",
      },

      selfTest: [
        {
          question: "Welche Kernladungszahl hat das Element in Periode 3, Gruppe 16?",
          options: [
            "Z = 14 (Silicium)",
            "Z = 15 (Phosphor)",
            "Z = 16 (Schwefel)",
            "Z = 17 (Chlor)",
            "Z = 18 (Argon)",
          ],
          correctIndex: 2,
          explanation:
            "Periode 3 bedeutet aeusserste Schale n=3. Gruppe 16 entspricht 6 Valenzelektronen (s2p4). Die Konfiguration ist [Ne] 3s2 3p4 => 10 (Ne) + 2 (3s) + 4 (3p) = Z=16 = Schwefel (S). In Periode 3 gilt: Z = 10 + Gruppenummer fuer Gruppen 13-18 (z.B. Gruppe 16: Z = 10 + 6 = 16). Schwefel ist ein Mengenelement im menschlichen Koerper - Bestandteil der Aminosaeure Cystein und Methionin, Disulfidbindungen in Proteinen (Keratin, Insulin), Coenzym A, Glutathion (wichtigstes zellulares Antioxidans).",
          hints: [
            "Periode 3 beginnt mit Na (Z=11) in Gruppe 1 und endet mit Ar (Z=18) in Gruppe 18",
            "Fuer Gruppen 13-18 in Periode 3: Z = 10 + Gruppenummer",
          ],
          difficulty: 2,
          tags: ["periodensystem", "kernladungszahl", "periode-gruppe"],
        },
        {
          question: "Wie viele Perioden hat das Periodensystem?",
          options: ["4", "6", "7", "8", "18"],
          correctIndex: 2,
          explanation:
            "Das PSE hat 7 Perioden (horizontale Zeilen), entsprechend den Hauptquantenzahlen n=1 bis n=7. Die 7. Periode ist vollstaendig (bis Oganesson, Z=118, alle Elemente darin sind radioaktiv). Es gibt 18 Gruppen (vertikale Spalten). Haeufige Verwechslung: 18 sind die Gruppen, 7 die Perioden. Die Periodennummer entspricht der Hauptquantenzahl der Valenzelektronen (Periode 4 => K: 4s1, n=4).",
          hints: [
            "Perioden = waagerechte Zeilen; Gruppen = senkrechte Spalten",
            "Die Periodennummer entspricht der hoechsten Hauptquantenzahl der Valenzelektronen",
          ],
          difficulty: 1,
          tags: ["periodensystem", "perioden", "gruppen"],
        },
        {
          question: "Welche Aussage ueber Halbmetalle (Metalloide) ist korrekt?",
          options: [
            "Halbmetalle leiten elektrischen Strom ebenso gut wie Kupfer oder Aluminium",
            "Halbmetalle befinden sich ausschliesslich in der 4. Periode des PSE",
            "Halbmetalle wie Silicium haben temperaturabhaengige Leitfaehigkeit und werden als Halbleiter eingesetzt",
            "Halbmetalle bilden ausschliesslich negative Ionen wie Nichtmetalle",
            "Halbmetalle sind alle radioaktiv und kommen in der Natur nicht vor",
          ],
          correctIndex: 2,
          explanation:
            "Halbmetalle (B, Si, Ge, As, Sb, Te, At) haben eine elektrische Leitfaehigkeit zwischen Metallen und Nichtmetallen. Charakteristisch ist die Temperaturabhaengigkeit: Bei steigender Temperatur nimmt die Leitfaehigkeit zu (Halbleiterverhalten, umgekehrt zu Metallen). Silicium ist Basis der Mikroelektronik - Dotierung mit Gruppe-13-Atomen (p-Typ) oder Gruppe-15-Atomen (n-Typ) erzeugt pn-Uebergaenge fuer Transistoren. Halbmetalle erstrecken sich von Periode 2 (Bor) bis Periode 6 (Astat).",
          hints: [
            "Halbmetalle liegen entlang der Treppenlinie zwischen Metallen und Nichtmetallen",
            "Der wichtigste Halbleiter in der Elektronik (Chips) ist ein Halbmetall der 3. Periode",
          ],
          difficulty: 2,
          tags: ["halbmetalle", "halbleiter", "silicium"],
        },
        {
          question:
            "Ein Element hat die Elektronenkonfiguration [Ne] 3s2 3p1. In welcher Gruppe und Periode steht es?",
          options: [
            "Gruppe 2, Periode 3",
            "Gruppe 13, Periode 3",
            "Gruppe 1, Periode 2",
            "Gruppe 3, Periode 3",
            "Gruppe 13, Periode 2",
          ],
          correctIndex: 1,
          explanation:
            "[Ne] entspricht Z=10. Dann 3s2 3p1 = 3 weitere Elektronen => Z=13 = Aluminium. Aeusserste Schale n=3 => Periode 3. Valenzelektronen: 3s2 3p1 = 3 VE => Gruppe 13 (p-Block: Gruppenummer = 10 + 3 VE). Aluminium ist das haeufigste Metall in der Erdkruste. Al-Salze werden als Antazida (Al(OH)3: puffert Magensaeure) und Antiperspirantien eingesetzt; bei Niereninsuffizienz kann Al akkumulieren und zur Aluminiumenzephalopathie fuehren.",
          hints: [
            "Periodennummer = Hauptquantenzahl der aeussersten Schale (hier n=3)",
            "Gruppenummer im p-Block = 10 + Valenzelektronen (hier 3)",
          ],
          difficulty: 3,
          tags: ["elektronenkonfiguration", "periode-gruppe", "aluminium"],
        },
        {
          question:
            "Welches Element hat die Elektronenkonfiguration [Ar] 3d5 4s1 (abweichend vom Aufbauprinzip)?",
          options: [
            "Eisen (Fe, Z=26)",
            "Mangan (Mn, Z=25)",
            "Chrom (Cr, Z=24)",
            "Vanadium (V, Z=23)",
            "Nickel (Ni, Z=28)",
          ],
          correctIndex: 2,
          explanation:
            "Chrom (Cr, Z=24) weicht vom Aufbauprinzip ab. Die erwartete Konfiguration waere [Ar] 3d4 4s2, die tatsaechliche ist [Ar] 3d5 4s1, weil die halbgefuellte d5-Konfiguration (alle 5 d-Orbitale einfach besetzt, paralleler Spin) durch maximale Austauschenergie nach Hund besonders stabil ist. Analoges Beispiel: Cu (Z=29) => [Ar] 3d10 4s1 statt [Ar] 3d9 4s2. Chrom(III) ist essentielles Spurenelement (Glukosetoleranzfaktor, potenziert Insulinwirkung). Chrom(VI) ist stark karzinogen (oxidiert DNA-Basen => Mutationen, Lungenkrebs).",
          hints: [
            "Zwei Uebergangsmetalle weichen vom Aufbauprinzip ab: Z=24 (Cr) und Z=29 (Cu)",
            "Halbgefuellte (d5) und vollgefuellte (d10) d-Unterschalen sind energetisch besonders stabil",
          ],
          difficulty: 3,
          tags: ["chrom", "kupfer", "aufbauprinzip-ausnahmen"],
        },
        {
          question: "Warum wurden bei Mendelejews urspruenglichem PSE Luecken gelassen?",
          options: [
            "Weil er die Elemente alphabetisch ordnete und bestimmte Buchstaben fehlten",
            "Weil Elemente mit unbekannter Atommasse nicht eingeordnet werden konnten",
            "Weil er erkannte, dass bei strenger Periodizitaet noch unentdeckte Elemente existieren muessen, und er deren Eigenschaften voraussagte",
            "Weil radioaktive Elemente damals noch nicht bekannt waren",
            "Weil die Luecken die Lanthanoide und Actinoide repraesentieren",
          ],
          correctIndex: 2,
          explanation:
            "Mendelejews brillante Leistung war die Erkenntnis, dass die Periodizitaet wichtiger ist als eine lueckenlose Reihenfolge. Wenn ein Element nicht an die Stelle passte, die seine Eigenschaften erforderten, liess er eine Luecke und sagte Eigenschaften des fehlenden Elements vorher: Eka-Aluminium (=> Gallium, 1875), Eka-Bor (=> Scandium, 1879), Eka-Silicium (=> Germanium, 1886). Alle drei stimmten fast exakt mit seinen Vorhersagen ueberein (Schmelzpunkt, Dichte, Valenz, Oxide) - der entscheidende Beweis fuer die Gueltigkeit seines Systems.",
          hints: [
            "Mendelejew nutzte Luecken als Vorhersage-Werkzeug, nicht als Eingestaendnis von Unwissen",
            "Eka-Aluminium und Eka-Silicium wurden als Gallium und Germanium entdeckt",
          ],
          difficulty: 2,
          tags: ["mendelejew", "periodizität", "vorhersage"],
        },
        {
          question: "In welchem Block des PSE steht Calcium (Z=20)?",
          options: [
            "p-Block, weil es in Periode 4 steht",
            "s-Block, Gruppe 2, weil seine Valenzelektronen im 4s-Orbital sitzen",
            "d-Block, weil es ein Metall ist",
            "f-Block, weil es zur 4. Periode gehoert",
            "s-Block, Gruppe 1, weil Calcium ein reaktives Metall ist",
          ],
          correctIndex: 1,
          explanation:
            "Calcium (Z=20) hat die Elektronenkonfiguration [Ar] 4s2. Die beiden Valenzelektronen befinden sich im 4s-Orbital => s-Block, Gruppe 2 (Erdalkalimetalle), Periode 4. Calcium ist das haeufigste Metall im menschlichen Koerper (~1 kg, 99% als Hydroxyapatit Ca10(PO4)6(OH)2 in Knochen und Zaehnen). Als Ca2+-Ion (Plasma: 2,2-2,6 mmol/L) ist es unverzichtbar fuer Muskelkontraktion (Troponin-C), Blutgerinnung (Faktor IV), Neurotransmitterfreisetzung und als Second Messenger (Ca2+-Calmodulin-System).",
          hints: [
            "Der Block ergibt sich aus dem Orbital, in das das letzte Elektron aufgenommen wird",
            "Gruppe 2 = Erdalkalimetalle = s-Block (Konfiguration ns2)",
          ],
          difficulty: 2,
          tags: ["calcium", "s-block", "elektronenkonfiguration"],
        },
        {
          question: "Welches der folgenden Elemente ist ein Halbmetall (Metalloid)?",
          options: [
            "Phosphor (P)",
            "Aluminium (Al)",
            "Schwefel (S)",
            "Germanium (Ge)",
            "Calcium (Ca)",
          ],
          correctIndex: 3,
          explanation:
            "Germanium (Ge, Z=32) ist ein klassisches Halbmetall. Es steht in Periode 4, Gruppe 14, an der Grenzlinie zwischen Metallen und Nichtmetallen. Ge war das erste kommerzielle Halbleitermaterial (Transistor, Bell Labs 1947) und wird heute in Glasfasern und Infrarot-Optik eingesetzt. Phosphor und Schwefel sind Nichtmetalle; Aluminium ist ein typisches Metall; Calcium ist ein Erdalkalimetall (s-Block, Gruppe 2). Die klassischen Halbmetalle: B, Si, Ge, As, Sb, Te (manchmal At hinzugezaehlt).",
          hints: [
            "Die Halbmetalle liegen entlang der Treppenlinie: B, Si, Ge, As, Sb, Te, At",
            "Halbmetalle sind Halbleiter mit temperaturabhaengiger Leitfaehigkeit",
          ],
          difficulty: 2,
          tags: ["halbmetalle", "germanium", "treppenlinie"],
        },
      ],
    },
    {
      id: "ch-5-02",
      title: "Periodische Trends — Eigenschaften im PSE",
      stichworte: [
        "Effektive Kernladung",
        "Atomradius",
        "Ionisierungsenergie",
        "Elektronenaffinität",
        "Elektronegativität",
        "Pauling",
        "Ionenradius",
        "Bindungscharakter",
        "Pairing Penalty",
        "Fluorierte Arzneistoffe",
      ],
      content: `## Einleitung

Warum ist Fluor so viel reaktiver als Iod? Warum werden Metallatome zu Kationen und Nichtmetallatome zu Anionen? All diese Trends im PSE haben eine gemeinsame Ursache: die **effektive Kernladung** — also wie stark der Kern die Valenzelektronen tatsächlich anzieht, abzüglich der Abschirmung durch innere Elektronen. Je größer die effektive Kernladung, desto kleiner der Atomradius, desto höher die Ionisierungsenergie und Elektronegativität. Diese Trends bestimmen die gesamte Chemie eines Elements. Für den MedAT sind IE-Ausnahmen, EN-Werte, Atomradien und Bindungscharakter häufige Themen.

## Effektive Kernladung: die treibende Kraft aller Trends

Alle periodischen Trends lassen sich auf die **effektive Kernladung** (Z_eff) zurückführen. Ein Valenzelektron spürt nicht die volle Kernladung Z, weil innere Elektronen die Kernladung teilweise abschirmen:

**Z_eff = Z − σ** (σ nach Slater: gleiche Schale ≈0,35; nächstinnere ≈0,85; alle weiter innen ≈1,0)

**In einer Periode** (links→rechts): Z steigt, σ bleibt nahezu konstant → Z_eff steigt → Elektronen stärker gebunden → Radius↓, IE↑, EN↑.

**In einer Gruppe** (oben→unten): Z steigt, aber neue vollständige Schalen schirmen effektiv ab (σ≈1,0) → Z_eff bleibt ähnlich, aber räumlicher Abstand der Valenzelektronen wächst mit n² → Radius↑, IE↓, EN↓.

## Atomradius

**Trend in der Periode** (links→rechts): Atomradius nimmt ab. Z_eff steigt → stärkere Coulomb-Anziehung.
Periode 3: Na (186 pm) > Mg (160 pm) > Al (143 pm) > Si (111 pm) > P (107 pm) > S (105 pm) > Cl (99 pm)

**Trend in der Gruppe** (oben→unten): Atomradius nimmt zu. Neue Schalen → Valenzelektronen weiter entfernt.
Gruppe 1: Li (152 pm) < Na (186 pm) < K (227 pm) < Rb (248 pm) < Cs (265 pm)

**Ionenradien**: Kationen kleiner als Neutralatom; Anionen größer.
Na⁺ (102 pm) < Na (186 pm); Cl⁻ (181 pm) > Cl (99 pm).
Isoelektronische Reihe ([Ne]-Konfiguration): O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺ > Al³⁺

## Ionisierungsenergie (IE₁)

**M(g) → M⁺(g) + e⁻; ΔH = IE₁ > 0**

Trends: In der Periode↑ (Z_eff steigt); in der Gruppe↓ (Valenzelektronen weiter vom Kern).

**IE-Ausnahmen Periode 2**:
- IE₁(B) < IE₁(Be): Bors 5. Elektron im energiereicheren 2p-Orbital → leichter zu entfernen trotz höherem Z
- IE₁(O) < IE₁(N): Stickstoff hat halbgefülltes 2p³ (maximale Austauschenergie, stabil nach Hund). Sauerstoffs 4. 2p-Elektron muss ein besetztes Orbital teilen → Pairing Penalty (Coulomb-Abstoßung) → leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol

Analoge Ausnahmen Periode 3: IE(Al) < IE(Mg) und IE(S) < IE(P).

**Successive IE**: Großer Sprung zwischen IE_n und IE_{n+1} wenn letztes Valenzelektron entfernt → n Valenzelektronen → Gruppe n.
Beispiel: IE₁=590, IE₂=1145, IE₃=4912 kJ/mol → Sprung bei IE₂/IE₃ → 2 VE → Gruppe 2 (Calcium).

## Elektronenaffinität (EA)

**M(g) + e⁻ → M⁻(g); ΔH = −EA**

Höchste EA: **Chlor** (349 kJ/mol) > Fluor (328 kJ/mol), weil Fluors kompakte 2p-Orbitale starke Elektron-Elektron-Abstoßung verursachen. Chlors 3p-Orbitale sind räumlich ausgedehnter → bessere Elektronenaufnahme. Muster: EA(O)<EA(S), EA(N)<EA(P). Edelgase, Erdalkalimetalle: negative EA.

## Elektronegativität (EN) nach Pauling

Dimensionslos, normiert auf F=4,0. Wichtige Werte: F(4,0) > O(3,44) > Cl(3,16) > N(3,04) > Br(2,96) > S(2,58) > C(2,55) > H(2,20) > P(2,19) > Si(1,90) > Mg(1,31) > Ca(1,00) > Na(0,93).

Trend: In der Periode↑; in der Gruppe↓. Höchste EN: Fluor (oben rechts im PSE, max. Z_eff bei kleinstem Radius aller Nichtmetalle).

**ΔEN und Bindungscharakter**:
- ΔEN < 0,4: unpolare kovalente Bindung (H₂, Cl₂, C-C)
- 0,4 ≤ ΔEN < 1,7: polare kovalente Bindung (H₂O: ΔEN=1,24; HCl: ΔEN=0,96)
- ΔEN ≥ 1,7: überwiegend ionisch (NaCl: ΔEN=2,23; MgO: ΔEN=2,13)

## MedAT-Fokus

**Häufige Fragen:**
- "Welches Element hat die höchste Elektronegativität?" → Fluor (F, EN = 4,0 nach Pauling)
- "Welchen Bindungscharakter hat O–H (EN(O)=3,44; EN(H)=2,20)?" → ΔEN = 1,24 → polar kovalent (0,4–1,7)
- "Warum ist IE₁(O) < IE₁(N)?" → Pairing Penalty: O muss 4. 2p-Elektron in besetztes Orbital → Coulomb-Abstoßung → leichter entfernbar

**Achtung — typische Verwechslungen:**
- Höchste EA ≠ höchste EN: Höchste EA = Chlor (349 kJ/mol), nicht Fluor! (Fluors 2p-Orbitale zu beengt → Abstoßung)
- Atomradius: in Periode ↓ (Z_eff steigt); in Gruppe ↑ (neue Schalen) — NICHT umgekehrt!
- ΔEN-Grenzen: <0,4 unpolar kovalent; 0,4–1,7 polar kovalent; ≥1,7 ionisch

**Prüfungsrelevante Zahlen/Fakten:**
- EN-Werte (Pauling): F(4,0) > O(3,44) > Cl(3,16) > N(3,04) > Br(2,96) > S(2,58) > C(2,55) > H(2,20)
- IE-Ausnahmen Periode 2: IE₁(B) < IE₁(Be) [2p energiereicher als 2s] und IE₁(O) < IE₁(N) [Pairing Penalty]; analog Periode 3: IE(Al)<IE(Mg) und IE(S)<IE(P)
- Successive IE: großer Sprung (Faktor >3) nach n Ionisierungen → n Valenzelektronen → Gruppe n
- C–F-Bindung: ΔEN = 1,45; stabil (~485 kJ/mol), metabolisch resistent → fluorierte Arzneistoffe (Ciprofloxacin, 5-FU, Fluoxetin) haben lange HWZ

---
## Zusammenfassung

- **Effektive Kernladung Z_eff** = Z − σ; steigt in Periode (links→rechts), bleibt in Gruppe ähnlich
- **Atomradius**: in Periode ↓ (Z_eff steigt); in Gruppe ↑ (neue Schalen); Kationen < Neutralatom < Anionen
- **Ionisierungsenergie IE₁**: in Periode ↑; in Gruppe ↓; Ausnahmen: IE(B) < IE(Be) (2p höher als 2s); IE(O) < IE(N) (Pairing Penalty)
- **Elektronegativität (EN)** nach Pauling: F(4,0) > O(3,44) > Cl(3,16) > N(3,04) > Br(2,96) > S(2,58) > C(2,55)
- **ΔEN → Bindungscharakter**: <0,4 unpolar; 0,4–1,7 polar kovalent; ≥1,7 ionisch
- **C–F-Bindung** (ΔEN=1,45): stark polar, metabolisch stabil → fluorierte Arzneistoffe (Ciprofloxacin, 5-FU, Fluoxetin) haben längere Halbwertszeiten
- Successive IE: großer Sprung nach n IE → n Valenzelektronen → Gruppen-Nummer bestimmen`,

      lernziele: [
        "Das Konzept der effektiven Kernladung (Z_eff) als gemeinsame Ursache aller periodischen Trends erklären",
        "Die Trends von Atomradius, Ionenradius, IE, EA und EN in Periode und Gruppe beschreiben und begründen",
        "Aus EN-Differenzen (ΔEN) den Bindungscharakter ableiten",
        "Successive IE zur Bestimmung der Hauptgruppenzugehörigkeit nutzen",
        "IE-Ausnahmen (B/Be, O/N) mit Pairing Penalty und Orbitalmodell erklären",
      ],

      sections: [
        {
          heading: "Effektive Kernladung: Ursache aller Trends",
          text: "Z_eff = Z − σ. In einer Periode steigt Z, σ bleibt nahezu konstant (neue Elektronen der gleichen Schale schirmen kaum ab, σ≈0,35) → Z_eff steigt → Elektronen fester gebunden → Radius sinkt, IE steigt, EN steigt. In einer Gruppe steigt Z, aber vollständige neue Schalen schirmen mit σ≈0,85–1,0 effektiv ab → Z_eff ähnlich; aber räumlicher Abstand der Valenzelektronen wächst mit n² → Radius wächst, IE sinkt, EN sinkt. Konkret: Z_eff(Li)≈1,28; Z_eff(Na)≈2,51; Z_eff(K)≈3,50 — trotz wachsendem Z steigt Z_eff langsam, aber der Schalenabstand wächst viel schneller.",
          merksatz:
            "Z_eff = Z − σ: In Periode steigt Z_eff → IE, EN↑, Radius↓. In Gruppe: Z_eff ähnlich, Abstand wächst → IE, EN↓, Radius↑",
        },
        {
          heading: "IE-Ausnahmen Periode 2: Pairing Penalty und halbgefüllte Orbitale",
          text: "Zwei klassische Ausnahmen: (1) IE₁(B) < IE₁(Be): Be hat volles 2s² (besonders stabil). Bs 5. Elektron sitzt im energiereicheren 2p → leichter entfernbar trotz höherem Z. (2) IE₁(O) < IE₁(N): N hat halbgefülltes 2p³ — alle drei 2p-Orbitale je einfach besetzt, paralleler Spin, maximale Austauschenergie nach Hund, besonders stabil. O muss das 4. 2p-Elektron in ein besetztes Orbital packen → Pairing Penalty: Coulomb-Abstoßung zwischen antiparallelen Elektronen → dieses Elektron leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol. Analoge Ausnahmen Periode 3: IE(Al)<IE(Mg) und IE(S)<IE(P).",
          merksatz:
            "IE-Ausnahmen: IE₁(B)<IE₁(Be) [2p energiereicher als 2s] und IE₁(O)<IE₁(N) [Pairing Penalty im 2p-Orbital]",
        },
        {
          heading: "EN-Differenz und Bindungscharakter in der Pharmakologie",
          text: "ΔEN bestimmt Bindungscharakter und pharmakologische Eigenschaften. Polare Bindungen → Hydrophilie → bessere Wasserlöslichkeit. Unpolare Bindungen → Lipophilie → bessere Membranpermeation. C-F-Bindung (ΔEN=1,45): stark polar, sehr stark (~485 kJ/mol), metabolisch stabil — CYP450 kann C-F kaum hydroxylieren. Fluorierte Arzneistoffe haben verlängerte Halbwertszeiten: Fluorochinolone (Ciprofloxacin, hemmt Topoisomerase), 5-Fluoruracil (hemmt Thymidylatsynthase → kein dTTP → Tumorzell-Apoptose), Fluoxetin (SSRI), Isofluran (Narkotikum), Fluticason (Steroid). O-H-Bindung (ΔEN=1,24): polar kovalent → Wasserstoffbrücken → einzigartiges Lösungsmittel Wasser.",
          merksatz:
            "C-F-Bindung: ΔEN=1,45, stark polar, sehr stabil (~485 kJ/mol), metabolisch resistent → fluorierte Arzneistoffe haben lange HWZ",
        },
        {
          heading: "Successive IE: Hauptgruppe aus IE-Daten bestimmen",
          text: "Successive Ionisierungsenergien (IE₁ < IE₂ < IE₃ < ...) steigen kontinuierlich an. Beim Übergang vom letzten Valenzelektron zum ersten Rumpfelektron: großer Sprung (Faktor 3–10). Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n. Beispiel: IE₁=590, IE₂=1145, IE₃=4912, IE₄=6474 kJ/mol → Sprung zwischen IE₂/IE₃ → 2 VE → Gruppe 2 = Calcium (Z=20). Mg hätte IE₁=738 kJ/mol. Prinzip: Die enorm hohe IE₃ des Mg erklärt, warum Mg ausschließlich als Mg²⁺ vorkommt — IE₃ entspricht Rumpfelektron der stabilen [Ne]-Konfiguration.",
          merksatz: "Großer IE-Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n im PSE",
        },
      ],

      diagram: "periodic-table",

      merksätze: [
        "Atomradius: in Periode↓; in Gruppe↑ — Ursache: Z_eff und Schalenabstand",
        "IE und EN: in Periode↑; in Gruppe↓ — gleiche Ursache: Z_eff",
        'Höchste EN: Fluor (4,0) — "F ist am gierigsten auf Elektronen"',
        "Kationen kleiner als Neutralatom; Anionen größer (Na⁺ < Na; Cl⁻ > Cl)",
        "IE-Ausnahmen Periode 2: IE(B)<IE(Be) und IE(O)<IE(N) — Pairing Penalty",
        "ΔEN < 0,4: unpolar; 0,4–1,7: polar kovalent; >1,7: ionisch",
        "Höchste EA: Chlor (349 kJ/mol), nicht Fluor — 2p-Orbitale von F zu beengt",
        "Successive IE: großer Sprung nach n Schritten → n Valenzelektronen → Gruppe n",
        "C-F-Bindung: stark polar, metabolisch stabil → fluorierte Arzneistoffe haben lange HWZ",
        "O-H-Bindung in Wasser: ΔEN=1,24 (polar kovalent) → Wasserstoffbrücken ermöglicht",
      ],

      klinischerBezug:
        "Die EN-Theorie erklärt, warum Fluor so häufig in Arzneistoffen eingesetzt wird: C-F-Bindungen (ΔEN=1,45) sind stark polar aber metabolisch stabil, weil CYP450 C-F-Bindungen (~485 kJ/mol) kaum angreift → verlängerte Halbwertszeit und verbesserte Bioverfügbarkeit. Fluorierte Arzneistoffe: Fluorochinolone (Antibiotika), 5-Fluoruracil (Zytostatikum), Fluticason (Kortikosteroid), Fluoxetin (SSRI). Die O-H-Bindung im Wasser (ΔEN=1,24, polar kovalent) begründet die Wasserstoffbrückenbildung — die physikalische Grundlage des einzigartigen biologischen Lösungsmittels Wasser.",

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie alle vier periodischen Haupttrends anhand der effektiven Kernladung Z_eff, und erläutern Sie die IE-Ausnahmen IE₁(B)<IE₁(Be) und IE₁(O)<IE₁(N).",
        answer:
          "Alle Trends lassen sich auf Z_eff = Z − σ zurückführen. In einer Periode: Z steigt um 1, σ bleibt nahezu konstant (Elektronen gleicher Schale schirmen mit σ≈0,35 kaum ab) → Z_eff steigt → (1) Atomradius sinkt (stärkere Coulomb-Anziehung), (2) IE steigt (Elektronen schwerer zu entfernen), (3) EA steigt (weiteres Elektron stärker angezogen), (4) EN steigt (Bindungselektronen stärker angezogen). In einer Gruppe: Z steigt, aber vollständige neue Schalen schirmen mit σ≈1,0 ab → Z_eff bleibt ähnlich, aber räumlicher Abstand der Valenzelektronen wächst mit n² → (1) Radius steigt, (2) IE sinkt, (3) EA sinkt, (4) EN sinkt. IE-Ausnahmen: (1) IE₁(B)<IE₁(Be): Beryllium hat volles 2s² (besonders stabil). Bors 5. Elektron befindet sich im energiereicheren 2p-Orbital, das trotz höherem Z leichter ionisiert wird. (2) IE₁(O)<IE₁(N): N hat halbgefülltes 2p³ — alle drei p-Orbitale einfach besetzt mit parallelem Spin → maximale Austauschenergie (Hund), besonders stabil. O hat 2p⁴ — das 4. Elektron muss in ein bereits besetztes Orbital (Pairing Penalty: Coulomb-Abstoßung antiparalleler Elektronen im selben Orbital) → dieses Elektron leichter zu entfernen. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol trotz Z(O)>Z(N). Analoge Ausnahmen in Periode 3: IE(Al)<IE(Mg) und IE(S)<IE(P).",
      },

      selfTest: [
        {
          question: "Wie verändert sich der Atomradius innerhalb einer Gruppe von oben nach unten?",
          options: [
            "Er nimmt ab, weil die Kernladungszahl steigt",
            "Er bleibt konstant, weil die Valenzelektronenzahl gleich bleibt",
            "Er nimmt zu, weil neue Elektronenschalen hinzukommen",
            "Er zeigt kein regelmäßiges Muster",
            "Er nimmt zuerst zu, dann ab (Minimum in der 4. Periode)",
          ],
          correctIndex: 2,
          explanation:
            "In einer Gruppe kommen von oben nach unten neue vollständige Elektronenschalen hinzu. Die Valenzelektronen befinden sich auf immer höheren Hauptquantenzahlen n, deren Abstand zum Kern mit n² wächst. Obwohl auch Z steigt, wird die steigende Kernladung durch innere Schalen abgeschirmt (Z_eff bleibt ähnlich), aber der räumliche Abstand der Valenzelektronen steigt → Atomradius wächst. Beispiel Gruppe 17: F (64 pm) < Cl (99 pm) < Br (114 pm) < I (133 pm). Klinisch relevant: Größere Ionen (I⁻, Br⁻) passieren enge Ionenkanäle schlechter als kleinere (F⁻, Cl⁻).",
          hints: [
            "In einer Gruppe nimmt die Hauptquantenzahl n der Valenzelektronen von oben nach unten zu",
            "Mehr Schalen = weiter vom Kern entfernte Valenzelektronen = größerer Radius",
          ],
          difficulty: 1,
          tags: ["atomradius", "periode-gruppe", "trends"],
        },
        {
          question: "Welches Element hat die höchste Elektronegativität?",
          options: [
            "Sauerstoff (O, EN=3,44)",
            "Stickstoff (N, EN=3,04)",
            "Chlor (Cl, EN=3,16)",
            "Fluor (F, EN=4,0)",
            "Wasserstoff (H, EN=2,20)",
          ],
          correctIndex: 3,
          explanation:
            "Fluor hat mit EN=4,0 (nach Pauling) die höchste Elektronegativität aller Elemente. Fluor steht in der 2. Periode, Gruppe 17 — maximale Z_eff bei kleinstem Radius aller Nichtmetalle. Keine andere Kombination übertrifft diese Anziehungskraft. Sauerstoff (EN=3,44) ist das zweitelectronegativste Element. Merkhilfe: Das elektronegativste Element steht oben rechts im PSE (Edelgase haben keine EN-Werte). C-F-Bindung durch hohe EN des F ist Grundlage fluorierter Arzneistoffe.",
          hints: [
            "Das elektronegativste Element steht oben rechts im PSE (ohne Edelgase)",
            "Halogene haben sehr hohe EN — welches Halogen steht am weitesten oben?",
          ],
          difficulty: 1,
          tags: ["elektronegativität", "fluor", "höchste-en"],
        },
        {
          question:
            "Welche der folgenden Reihen zeigt Elemente mit korrekt abnehmender Ionisierungsenergie?",
          options: [
            "Na < Mg < Al (Periode 3, von links nach rechts: zunehmend)",
            "F > Cl > Br > I (Halogene, Gruppe 17, von oben nach unten: abnehmend)",
            "Li < Na < K (Alkalimetalle, Gruppe 1, von oben nach unten: zunehmend)",
            "He > H (nur 2 Elemente)",
            "Ne > F > O (Edelgas höchste IE einer Periode — stimmt, aber keine Gruppe)",
          ],
          correctIndex: 1,
          explanation:
            "In einer Gruppe nimmt die IE von oben nach unten ab. F, Cl, Br, I sind Halogene (Gruppe 17) → IE nimmt korrekt ab: F (1681 kJ/mol) > Cl (1251) > Br (1140) > I (1008 kJ/mol). Option A ist falsch wegen IE-Ausnahme: IE(Al)<IE(Mg). Option C zeigt eine zunehmende Reihe (Radien, nicht IE). Die IE in der Gruppe ist: Li (520) > Na (496) > K (419) kJ/mol — abnehmend in der Gruppe.",
          hints: [
            "IE nimmt in einer Gruppe von oben nach unten ab",
            "F, Cl, Br, I sind alle in Gruppe 17 — vergleiche von oben nach unten",
          ],
          difficulty: 2,
          tags: ["ionisierungsenergie", "gruppe-trend", "halogene"],
        },
        {
          question: "Welche Bindung bildet sich zwischen Na (EN=0,93) und Cl (EN=3,16)?",
          options: [
            "Unpolare kovalente Bindung (ΔEN < 0,4)",
            "Polare kovalente Bindung (ΔEN 0,4–1,7)",
            "Ionenbindung (ΔEN > 1,7)",
            "Metallbindung",
            "Wasserstoffbrückenbindung",
          ],
          correctIndex: 2,
          explanation:
            "ΔEN = 3,16 − 0,93 = 2,23 > 1,7 → Ionenbindung. Natrium gibt Valenzelektron vollständig ab: Na→Na⁺+e⁻ (IE₁=496 kJ/mol) und Cl+e⁻→Cl⁻ (EA=349 kJ/mol). Im Kristallgitter von NaCl sind Na⁺ und Cl⁻ durch elektrostatische Coulomb-Kräfte in kubisch-flächenzentriertem Ionengitter gebunden (Gitterenergie=787 kJ/mol). NaCl ist das wichtigste Elektrolyt im extrazellulären Raum: Plasma ~140 mmol/L Na⁺ und ~100 mmol/L Cl⁻ → osmotischer Druck, Blutvolumen, Membranpotenzial.",
          hints: ["Berechne ΔEN = EN(Cl) − EN(Na)", "Grenzwert für Ionenbindung: ΔEN > 1,7"],
          difficulty: 2,
          tags: ["elektronegativität", "delta-en", "ionenbindung"],
        },
        {
          question:
            "Warum ist IE₁(O) kleiner als IE₁(N), obwohl Sauerstoff die höhere Kernladungszahl hat?",
          options: [
            "Weil Sauerstoff einen größeren Atomradius als Stickstoff hat",
            "Weil beim Sauerstoff das 4. 2p-Elektron ein bereits besetztes Orbital besetzen muss und durch Elektron-Elektron-Abstoßung leichter zu entfernen ist (Pairing Penalty)",
            "Weil Stickstoff weiter oben in der Gruppe steht und daher eine höhere IE hat",
            "Weil Sauerstoff im p-Block steht und alle p-Block-Elemente niedrigere IE haben",
            "Weil Sauerstoff eine höhere EN als Stickstoff hat, was die IE erniedrigt",
          ],
          correctIndex: 1,
          explanation:
            "Stickstoff hat Konfiguration 2p³ — jedes der drei 2p-Orbitale einfach besetzt (Hund: maximale Spinmultiplizität, paralleler Spin → maximale Austauschenergie → besonders stabil). Sauerstoffs 4. 2p-Elektron muss in ein besetztes 2p-Orbital (Pairing Penalty: Coulomb-Abstoßung antiparalleler Elektronen im gleichen Orbital) → leichter zu entfernen trotz höherem Z. IE₁(O)=1314 < IE₁(N)=1402 kJ/mol. Analoge Ausnahme Periode 3: IE(S)<IE(P).",
          hints: [
            "N hat 2p³ (halbgefüllt, maximale Austauschenergie stabil); O hat 2p⁴ (Pairing Penalty)",
            "Zwei Elektronen im selben Orbital stoßen sich ab → das gepaarte Elektron leichter entfernbar",
          ],
          difficulty: 3,
          tags: ["ie-ausnahmen", "pairing-penalty", "stickstoff-sauerstoff"],
        },
        {
          question:
            "Ein Element hat IE₁=590, IE₂=1145, IE₃=4912, IE₄=6474 kJ/mol. Welcher Hauptgruppe gehört es an?",
          options: [
            "Gruppe 1 (1 Valenzelektron)",
            "Gruppe 2 (2 Valenzelektronen)",
            "Gruppe 13 (3 Valenzelektronen)",
            "Gruppe 14 (4 Valenzelektronen)",
            "Gruppe 3 (Nebengruppe)",
          ],
          correctIndex: 1,
          explanation:
            "Der große Sprung liegt zwischen IE₂ (1145 kJ/mol) und IE₃ (4912 kJ/mol) — Faktor ~4,3. Die ersten zwei Elektronen sind Valenzelektronen, das dritte ist ein Rumpfelektron → 2 Valenzelektronen → Gruppe 2 (Erdalkalimetalle). Mit IE₁≈590 kJ/mol: Calcium (Z=20, Gruppe 2, Periode 4). Mg hätte IE₁=738 kJ/mol. Prinzip allgemein: Sprung nach n Ionisierungen → n Valenzelektronen → Gruppe n.",
          hints: [
            "Suche den großen Sprung (Faktor >3) zwischen aufeinanderfolgenden IE-Werten",
            "Der Sprung: letztes VE → erstes Rumpfelektron → n Valenzelektronen → Gruppe n",
          ],
          difficulty: 3,
          tags: ["successive-ie", "valenzelektronen", "hauptgruppe"],
        },
        {
          question:
            "Welchen Bindungscharakter hat die O-H-Bindung in Wasser (EN(O)=3,44; EN(H)=2,20)?",
          options: [
            "Ionisch, weil Sauerstoff viel elektronegativer ist als Wasserstoff",
            "Unpolar kovalent, weil beide Elemente Nichtmetalle sind",
            "Polar kovalent, weil ΔEN=1,24 im Bereich 0,4–1,7 liegt",
            "Metallisch, weil Wasser elektrisch leitet",
            "Koordinativ, weil Sauerstoff freie Elektronenpaare besitzt",
          ],
          correctIndex: 2,
          explanation:
            "ΔEN = 3,44 − 2,20 = 1,24. Im Bereich 0,4 ≤ ΔEN < 1,7 → polare kovalente Bindung. O zieht Bindungselektronen zu sich → O erhält δ−, H erhält δ+. Diese Polarität ermöglicht Wasserstoffbrücken zwischen Wassermolekülen (~20 kJ/mol). Folgen: hoher Siedepunkt (100°C statt −80°C), hohe Wärmekapazität. H-Brücken sind auch Grundlage der DNA-Basenpaarung (A-T: 2, G-C: 3) und Proteinsekundärstruktur (α-Helix, β-Faltblatt).",
          hints: [
            "Berechne ΔEN = EN(O) − EN(H) = 3,44 − 2,20",
            "Grenzwerte: <0,4 unpolar; 0,4–1,7 polar kovalent; >1,7 ionisch",
          ],
          difficulty: 2,
          tags: ["o-h-bindung", "delta-en", "polar-kovalent"],
        },
        {
          question:
            "Warum hat Chlor eine höhere Elektronenaffinität als Fluor, obwohl Fluor elektronegativer ist?",
          options: [
            "Weil Chlor in der 3. Periode steht und mehr Elektronen aufnehmen kann",
            "Weil Fluors 2p-Orbitale sehr kompakt sind, sodass ein zusätzliches Elektron starke Abstoßung erfährt, während Chlors 3p-Orbitale räumlich ausgedehnter sind",
            "Weil Chlor eine geringere Kernladung hat und das Elektron weniger abgestoßen wird",
            "Weil EA und EN völlig unabhängige Eigenschaften ohne Zusammenhang sind",
            "Weil Fluor eine zu hohe IE hat, die die Elektronenaufnahme verhindert",
          ],
          correctIndex: 1,
          explanation:
            "Obwohl Fluor EN=4,0 hat, ist EA(F)=328 kJ/mol < EA(Cl)=349 kJ/mol. Ursache: Fluors 2p-Orbitale sind sehr kompakt — ein zusätzliches Elektron im kleinen 2p-Orbital erfährt starke Coulomb-Abstoßung durch die schon vorhandenen 2p-Elektronen (F hat 7 → wird 8 im F⁻). Chlors 3p-Orbitale sind räumlich ausgedehnter → bessere Aufnahme → höhere EA. Muster: EA(O)<EA(S), EA(N)<EA(P) — Elemente der 2. Periode haben oft niedrigere EA als schwerere Homologe.",
          hints: [
            "EA (isoliertes Atom) und EN (Atom in Bindung) sind verwandt, aber nicht identisch",
            "Sehr kleine Atome der 2. Periode haben manchmal niedrigere EA durch räumliche Enge der 2p-Orbitale",
          ],
          difficulty: 3,
          tags: ["elektronenaffinität", "fluor-chlor", "2p-orbitale"],
        },
      ],
    },
    {
      id: "ch-5-03",
      title: "Wichtige Elementgruppen",
      stichworte: [
        "Alkalimetalle",
        "Erdalkalimetalle",
        "Halogene",
        "Edelgase",
        "Übergangsmetalle",
        "Na⁺/K⁺-ATPase",
        "Calcium",
        "Jod",
        "Eisen",
        "Hämoglobin",
        "Schilddrüse",
      ],
      content: `## Einleitung

Das Periodensystem wäre nur eine Tabelle mit Zahlen, wenn die Elemente nicht in charakteristischen Gruppen aufträten. Alkalimetalle (z.B. Na, K) reagieren heftig mit Wasser und sind im Körper unverzichtbare Elektrolyte. Halogene (F, Cl, I) sind aggressive Oxidationsmittel — und trotzdem essenziell für Schilddrüsenhormone und Desinfektion. Edelgase (He, Ar, Xe) sind inert — und doch in der Medizin nützlich. Übergangsmetalle wie Eisen, Zink und Kupfer sind mit ihren variablen Oxidationsstufen die "Motoren" der Biochemie. Für den MedAT sind die klinischen Folgen von Elektrolytstörungen und Spurenelementmängeln besonders wichtig.

## Alkalimetalle (Gruppe 1): Die reaktivsten Metalle

**Elemente**: Li (Z=3), Na (Z=11), K (Z=19), Rb (Z=37), Cs (Z=55), Fr (Z=87).

**Eigenschaften**: Weiche, silbrig glänzende Metalle; niedrige Schmelzpunkte (Li: 180°C → Cs: 28,5°C). Geringe Dichte: Li (0,53 g/cm³), Na (0,97 g/cm³), K (0,86 g/cm³) — alle drei schwimmen auf Wasser. 1 Valenzelektron (ns¹), niedrigste IE aller Metalle, bilden immer +1-Ionen. Reaktivität steigt von Li nach Cs:
- Li + H₂O → LiOH + ½H₂ (ruhig zischt)
- Na + H₂O → NaOH + ½H₂ (heftig, gelbe Flamme)
- K + H₂O → KOH + ½H₂ (violette Flamme, sofortige H₂-Entzündung)
- Rb, Cs + H₂O → explosionsartig

**Biologisch-medizinisch**:
- **Na⁺**: Hauptkation des Extrazellularraums (Plasma: ~140 mmol/L). Na⁺/K⁺-ATPase pumpt 3 Na⁺ raus, 2 K⁺ rein pro ATP → Ruhemembranpotenzial (~−70 mV). Hyponatriämie (<135 mmol/L) → Hirnödem, Krampfanfälle; Hypernatriämie → Dehydratation, Bewusstseinsstörungen.
- **K⁺**: Hauptkation des Intrazellularraums (~150 mmol/L intrazellulär vs. ~4,5 mmol/L extrazellulär). Hypokaliämie (<3,5 mmol/L) → Herzrhythmusstörungen (verlängertes QT, Torsades de pointes), Muskelschwäche. Hyperkaliämie (>5,5 mmol/L) → lebensbedrohliche Herzarrhythmie.
- **Li⁺**: Therapeutisch bei bipolaren Störungen (Li₂CO₃, therapeutischer Bereich 0,6–1,2 mmol/L). Hemmt Inositolmonophosphatase und GSK-3β. Enger therapeutischer Index.

## Erdalkalimetalle (Gruppe 2): Strukturbildner und Cofaktoren

**Elemente**: Be (Z=4), Mg (Z=12), Ca (Z=20), Sr (Z=38), Ba (Z=56), Ra (Z=88; radioaktiv).

**Eigenschaften**: Härter als Alkalimetalle; 2 Valenzelektronen (ns²), bilden +2-Ionen. Be ist amphoter; lösliche Ba²⁺-Salze sind hochgiftig.

**Biologisch-medizinisch**:
- **Ca²⁺**: Häufigstes Metall im Körper (~1 kg, 99% als Hydroxyapatit Ca₁₀(PO₄)₆(OH)₂ in Knochen/Zähnen). Plasma: 2,2–2,6 mmol/L. Essentiell für Muskelkontraktion (Troponin-C), Blutgerinnung (Faktor IV), Neurotransmitterfreisetzung, Second Messenger (Ca²⁺-Calmodulin). Reguliert durch PTH (↑), Calcitonin (↓), Calcitriol (↑ intestinale Resorption). Hypokalzämie (<2,0 mmol/L): Tetanie, Chvostek-Zeichen, Trousseau-Zeichen, verlängertes QT. Hyperkalzämie (>2,75 mmol/L): "Stones, Bones, Groans, Psychic Moans" — Nierensteine, Knochenschmerzen, Obstipation, psychische Symptome.
- **Mg²⁺**: Cofaktor von >300 Enzymen; alle ATP-abhängigen Reaktionen benötigen Mg-ATP-Komplex. Hypomagnesämie → Tetanie, Herzrhythmusstörungen, begleitende Hypokaliämie. MgSO₄ i.v.: Therapie der Präeklampsie und Torsades de pointes.
- **BaSO₄**: Ksp ≈ 1,1×10⁻¹⁰ → unlöslich → nicht resorbiert → sicheres Röntgenkontrastmittel für GI-Trakt. Lösliche Ba²⁺-Salze: blockieren K⁺-Kanäle → hochgiftig.
- **²²³Ra-Dichlorid** (Xofigo): Zytostatikum bei Prostatakarzinom-Knochenmetastasen — wie Ca²⁺ in Knochen eingebaut, α-Strahler.

## Halogene (Gruppe 17): Salzbildner mit hoher Reaktivität

**Elemente**: F (Z=9), Cl (Z=17), Br (Z=35), I (Z=53), At (Z=85; radioaktiv).

**Eigenschaften**: 7 Valenzelektronen (s²p⁵), bilden −1-Ionen, starke Oxidationsmittel. Aggregatzustand bei RT: F₂ und Cl₂ sind Gase, Br₂ ist die einzige nicht-metallische Flüssigkeit (braun), I₂ ist ein violett glänzender Feststoff (sublimiert zu violettem Gas). Reaktivität: F₂ > Cl₂ > Br₂ > I₂.

**Medizinisch**:
- **F⁻**: Fluorid → Fluorapatit Ca₁₀(PO₄)₆F₂ (säureresistenter als Hydroxyapatit) → Kariesschutz. Hemmt Enolase in Kariesbakterien (S. mutans). Fluorose bei Überdosis (>3 mg/Tag): Zahnflecken, Knochenschäden.
- **Cl⁻**: Hauptanion extrazellulär (~100 mmol/L). HCl im Magensaft (pH~1,5). Desinfektionsmittel: Cl₂, NaOCl (Hypochlorit), HOCl (eigentliches Wirkprinzip — oxidiert Bakterienzellwandproteine).
- **I**: Essentiell für T3 (Triiodthyronin, 3 I-Atome) und T4 (Thyroxin, 4 I-Atome). Jodaufnahme durch NIS-Symporter → Jodierung von Thyreoglobulin durch TPO → T3/T4. Jodmangel → Hypothyreose, Struma, Kretinismus (irreversible geistige Behinderung, häufigste vermeidbare Ursache weltweit). ¹³¹I: Beta-Emitter, Therapie von Schilddrüsenkarzinomen und Hyperthyreose.
- **Fluorierte Arzneistoffe**: Fluorochinolone (Ciprofloxacin, hemmt Topoisomerase II/IV), 5-Fluoruracil (hemmt Thymidylatsynthase → kein dTTP → Tumorzell-Apoptose), Fluticason, Fluoxetin (SSRI), Isofluran (Narkotikum).

## Edelgase (Gruppe 18): Inertheit als Leitprinzip

**Elemente**: He (Z=2), Ne (Z=10), Ar (Z=18), Kr (Z=36), Xe (Z=54), Rn (Z=86; radioaktiv).

**Eigenschaften**: He: 1s² (Dublett); alle anderen: ns²np⁶ (Oktett) → chemisch inert. Keine normalen chemischen Verbindungen (Ausnahme: XeF₂, XeF₄ unter extremen Bedingungen, 1962 erstmals synthetisiert). He hat den tiefsten Siedepunkt aller Stoffe (−269°C, 4 K).

**Medizinisch**:
- **He**: MRT-Kühlung (supraleitende Magnete bei 4 K). Heliox (He/O₂): niedrigere Viskosität als Luft → bei Atemwegsobstruktion (Asthma, Larynxödem) weniger Atemwegswiderstand. Tauchen: verhindert Stickstoffnarkose.
- **Ar**: Schutzgas beim Schweißen. Argon-Plasma-Koagulation (APC): endoskopische Blutstillung durch ionisiertes Ar-Plasma.
- **Xe**: Als Vollnarkotikum zugelassen (Europa). NMDA-Rezeptor-Antagonist → Narkosewirkung. Kein Metabolismus (vollständig abgeatmet), exzellente kardiovaskuläre Stabilität, schnelle Aufwachphase. Hyperpolarisiertes ¹²⁹Xe: Lungen-MRT (Ventilationsbildgebung ohne ionisierende Strahlung).
- **Rn**: α-Strahler, natürliches Zerfallsprodukt von Ra. Akkumulation in Häusern → zweithäufigste Ursache für Lungenkrebs (nach Rauchen).

## Übergangsmetalle (Gruppen 3–12): Redox-Akteure in der Biologie

Unvollständig gefüllte d-Orbitale → variable Oxidationsstufen, Komplexbildung (Lewis-Säuren), Katalyse, Paramagnetismus.

**Medizinisch essentiell**:
- **Fe**: Fe²⁺/Fe³⁺-Wechsel. Hämoglobin: 4 Fe²⁺ in Häm, je 1 O₂. Cytochrome: Elektronentransport. Eisenmangelanämie: mikrozytär hypochrom (MCV↓, Hb↓, Ferritin↓). Hämochromatose (HFE-Mutation): Fe-Überladung → Leber, Herz, Pankreas.
- **Cu**: Cu⁺/Cu²⁺. Cytochromoxidase (Komplex IV: O₂→H₂O), Coeruloplasmin (Fe-Oxidation), Cu/Zn-SOD. Wilson-Krankheit (ATP7B-Mutation): Cu-Akkumulation → Leberzirrhose, Hirnschäden, Kayser-Fleischer-Ring. Menkes-Krankheit: Cu-Resorptionsstörung → Neurodegeneration.
- **Zn**: Kofaktor in >300 Metalloproteasen und Zinkfinger-Transkriptionsfaktoren. Carboanhydrase, Alkoholdehydrogenase, Matrix-Metalloproteasen. Insulin: Zn-Komplex in β-Zellen. Zinkmangel → Wachstumsstörungen, Wundheilungsstörungen, Immunschwäche.
- **Co**: Zentralatom in Vitamin B12 (Co³⁺ im Corrin-Ring). Methylcobalamin (Methionin-Synthase: Homocystein → Methionin), Adenosylcobalamin (Methylmalonyl-CoA-Mutase). Mangel → megaloblastäre Anämie + funikuläre Myelose.
- **Mn**: Mn-SOD (mitochondriale Superoxiddismutase, SOD2). Arginase (Harnstoffzyklus). Manganismus (Mn-Toxizität) → Parkinson-ähnliches Syndrom.
- **Mo**: Xanthinoxidase (Hypoxanthin → Xanthin → Harnsäure). Gicht-Therapie: Allopurinol hemmt Xanthinoxidase.
- **Pt**: Cisplatin, Carboplatin (Pt(II)-Komplexe) quervernetzen DNA (Guanin-Guanin intrastrand crosslinks) → Apoptose. Wichtige Zytostatika bei Hoden-, Ovarial-, Lungen-, Blasenkarzinomen.

## MedAT-Fokus

**Häufige Fragen:**
- "Welches Halogen ist essenziell für T3/T4?" → Jod (I, Z=53): T3 = 3 I-Atome, T4 = 4 I-Atome; Aufnahme über NIS-Symporter
- "Welches Übergangsmetall ist Zentralatom in Hämoglobin?" → Eisen (Fe²⁺) — Fe³⁺ (Methämoglobin) bindet kein O₂!
- "Warum bilden Erdalkalimetalle +2-Ionen?" → 2 Valenzelektronen (ns²) → Abgabe → stabile Edelgaskonfiguration; IE₃ enorm hoch → kein +3-Ion

**Achtung — typische Verwechslungen:**
- Fe²⁺ bindet O₂ in Hämoglobin ≠ Fe³⁺ (Methämoglobin = bindet kein O₂)
- Alkalimetalle: Reaktivität steigt von Li→Cs (IE sinkt); Halogene: Reaktivität sinkt von F₂→I₂ (IE sinkt in der Gruppe)
- Na⁺ (extrazellulär, ~140 mmol/L) ≠ K⁺ (intrazellulär, ~150 mmol/L) — Verwechslung gefährlich für Klinik-Fragen!

**Prüfungsrelevante Zahlen/Fakten:**
- Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein, 1 ATP → Ruhemembranpotenzial ≈ −70 mV
- Ca²⁺: 99 % als Hydroxyapatit; Plasma 2,2–2,6 mmol/L; Hypokalzämie → Tetanie, Chvostek-Zeichen
- Jodmangel → Kretinismus (häufigste vermeidbare Ursache geistiger Behinderung weltweit)
- Cisplatin (Pt(II)): Guanin-Guanin-DNA-Quervernetzung → Apoptose; Hoden-/Ovarialkarzinom

---
## Zusammenfassung

- **Alkalimetalle** (Gr. 1): 1 VE, bilden +1-Ionen; **Na⁺** Hauptkation extrazellulär (140 mmol/L), **K⁺** intrazellulär (~150 mmol/L); Hypo-/Hyperkaliämie → Herzrhythmusstörungen
- **Erdalkalimetalle** (Gr. 2): 2 VE, bilden +2-Ionen; **Ca²⁺** für Muskelkontraktion, Blutgerinnung, Knochen (99 % als Hydroxyapatit); **Mg²⁺** Kofaktor von >300 Enzymen
- **Halogene** (Gr. 17): 7 VE, bilden −1-Ionen; hohe Elektronegativität und Oxidationskraft; Reaktivität F₂ > Cl₂ > Br₂ > I₂
- **Jod (I)**: essenziell für Schilddrüsenhormone T3/T4; ¹³¹I für Schilddrüsentherapie; Jod-Kontrastmittel; Iodmangel → Struma
- **Fluor (F)**: Fluorapatit (Karieschutz); fluorierte Arzneistoffe metabolisch stabil (C–F-Bindung stabil gegenüber CYP450)
- **Edelgase** (Gr. 18): chemisch inert (vollständiges Oktett); Xe als Narkotikum; Rn → Lungenkrebs-Risiko
- **Übergangsmetalle**: variable Oxidationsstufen → Katalyse; Fe (Hämoglobin, Zytochrome), Cu (Komplex IV), Zn (>300 Enzyme), Co (Vitamin B12), Pt (Cisplatin)
- Haupt-Mengenelemente: **CHNOPS** (C, H, N, O, P, S — Grundbausteine des Lebens)`,

      lernziele: [
        "Die wichtigen Elementgruppen (Alkalimetalle, Erdalkalimetalle, Halogene, Edelgase, Übergangsmetalle) mit charakteristischen Eigenschaften beschreiben",
        "Medizinisch relevante Elemente den Gruppen zuordnen und biologische Funktionen erklären (Na, K, Ca, Mg, F, Cl, I, Fe, Cu, Zn, Co)",
        "Ionenladungen der Hauptgruppen aus der Valenzelektronenzahl ableiten",
        "Klinische Syndrome bei Elektrolytstörungen und Spurenelementmangel den betroffenen Elementen zuordnen",
        "Reaktivitätstrends innerhalb Alkalimetallen und Halogenen mit dem Periodizitätsprinzip erklären",
      ],

      sections: [
        {
          heading: "Biologisch essentielle Elemente: Mengen- und Spurenelemente",
          text: "Biologisch essentielle Elemente verteilen sich über das gesamte PSE. Hauptelemente (>1%): O (65%), C (18%), H (10%), N (3%) — Grundbausteine aller Biomoleküle. Mengenelemente (0,01–1%): Ca (1,5%, Knochen), P (1,0%, DNA, ATP, Phospholipide), K (0,35%, intrazellulär), S (0,25%, Cystein, Methionin, Disulfidbrücken), Na (0,15%, extrazellulär), Cl (0,15%, HCl, osmotisch), Mg (0,05%, Enzymkofaktor). Spurenelemente (<0,01%): Fe, Zn, Cu, Mn, I, Se, Mo, Co, Cr, F. Merkhilfe Hauptelemente: CHNOPS (Kohlenstoff, Wasserstoff, Stickstoff, Sauerstoff, Phosphor, Schwefel). Jeder Mangel eines essentiellen Spurenelements führt zu spezifischen Krankheitsbildern: Fe → Anämie; I → Struma/Kretinismus; Zn → Wundheilungsstörungen; Co (B12) → perniziöse Anämie; Se → Keshan-Krankheit (Kardiomyopathie).",
          merksatz:
            "Haupt-Mengenelemente: CHNOPS — Kohlenstoff, Wasserstoff, Stickstoff, Sauerstoff, Phosphor, Schwefel",
        },
        {
          heading: "Halogene in der Medizin: Desinfektion, Schilddrüse, Pharmakologie",
          text: "Halogene sind aufgrund ihrer hohen EN und Oxidationskraft in der Medizin allgegenwärtig. Desinfektion: Cl₂ (Trinkwasserchlorierung, 0,1–0,3 mg/L), NaOCl (Dakin-Lösung, Wunddesinfektion), PVP-Iod (Betaisodona: langsame I₂-Freisetzung für breites Antiseptikum). Kariesprävention: NaF in Zahnpasta (1000–1500 ppm). Jod-Kontrastmittel: ionische (Urographin) und nichtionische (Iohexol, Iomeprol) jodhaltige Verbindungen — hohes Atomgewicht des Jods (Z=53) absorbiert Röntgenstrahlen stark. ¹³¹I (Beta-Emitter, HWZ 8 Tage): selektive Aufnahme in Schilddrüsengewebe → Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Fluorierte Arzneistoffe: Fluorochinolone (hemmen bakterielle Topoisomerase II/IV), 5-Fluoruracil (hemmt Thymidylatsynthase → Tumorzellen ohne dTTP → Apoptose), Fluticason, Fluoxetin.",
          merksatz:
            "Jod: T3/T4-Synthese (Schilddrüse), Antiseptikum (PVP-Iod), ¹³¹I-Therapie; Chlor: Desinfektion, Hauptanion extrazellulär; Fluor: Zahnschutz, fluorierte Arzneistoffe",
        },
        {
          heading: "Übergangsmetalle als Redox-Katalysatoren: Elektronen übertragen ist Leben",
          text: "Übergangsmetalle sind in der Enzymkatalyse unverzichtbar, weil variable Oxidationsstufen Elektronenübertragung ermöglichen. Fe²⁺/Fe³⁺ in Cytochrom c der Atmungskette: nimmt Elektronen von NADH (Fe³⁺→Fe²⁺), gibt sie an O₂ (Fe²⁺→Fe³⁺). Cu⁺/Cu²⁺ in Cytochromoxidase (Komplex IV): O₂→H₂O (letzter Schritt der Atmungskette). Mn⁴⁺ im Oxygen-Evolving-Complex des Photosystem II: H₂O→O₂+H⁺+e⁻ (Quelle des atmosphärischen O₂). Mo in Nitrogenase: N₂-Fixierung (N₂+8H⁺+8e⁻→2NH₃). Platinkomplexe: Cisplatin (Pt(II)) quervernetzt DNA (Guanin-Guanin-intrastrand crosslinks) → Apoptose — erstes metallhaltiges Zytostatikum (entdeckt durch Zufall 1965, Barnett Rosenberg).",
          merksatz:
            "Fe²⁺/Fe³⁺ in Hämoglobin und Cytochromen; Cu⁺/Cu²⁺ in Cytochromoxidase; Zn²⁺ in >300 Metalloenzymen; Co³⁺ in Vitamin B12",
        },
        {
          heading: "Na⁺/K⁺-Homöostase: Alkalimetalle als Grundlage der Zellphysiologie",
          text: "Die Na⁺/K⁺-ATPase transportiert aktiv 3 Na⁺ nach außen und 2 K⁺ nach innen pro ATP → elektrochemischer Gradient: intrazellulär [K⁺]≈150, [Na⁺]≈15 mmol/L; extrazellulär [K⁺]≈4,5, [Na⁺]≈140 mmol/L → Ruhemembranpotenzial (~−70 mV). Aktionspotenzial: spannungsgesteuerte Na⁺-Kanäle öffnen (Depolarisation bis +30 mV), dann K⁺-Kanäle (Repolarisation). Pharmakologische Angriffspunkte: Herzglykoside (Digoxin): hemmt Na⁺/K⁺-ATPase → Na⁺ intrazellulär↑ → Na⁺/Ca²⁺-Austauscher reduziert → Ca²⁺↑ → positiv inotrop. Schleifendiuretika (Furosemid): blockiert NKCC2 (Na⁺/K⁺/2Cl⁻-Cotransporter) in Henlescher Schleife → Na⁺, K⁺, Cl⁻, Wasser ausgeschieden. Lokalanästhetika (Lidocain): blockiert spannungsgesteuerte Na⁺-Kanäle → kein Aktionspotenzial → Schmerzunterdrückung.",
          merksatz:
            "Na⁺/K⁺-ATPase: 3Na⁺ raus, 2K⁺ rein, 1 ATP → RMP −70 mV; Digoxin hemmt diese Pumpe → positiv inotrop",
        },
      ],

      merksätze: [
        "Alkalimetalle (Gr.1): ns¹, +1-Ion — Na⁺ extrazellulär (~140 mmol/L), K⁺ intrazellulär (~150 mmol/L)",
        "Erdalkalimetalle (Gr.2): ns², +2-Ion — Ca²⁺ Knochen/Signaling, Mg²⁺ Enzymkofaktor",
        "Halogene (Gr.17): ns²np⁵, −1-Ion, starke Oxidationsmittel — I essentiell für Schilddrüse",
        "Edelgase (Gr.18): vollständige Valenzschale, inert — He für MRT-Kühlung, Xe als Narkosemittel",
        "Reaktivität Alkalimetalle: Li < Na < K < Rb < Cs (steigt von oben nach unten)",
        "Reaktivität Halogene: F₂ > Cl₂ > Br₂ > I₂ (sinkt von oben nach unten)",
        "Fe²⁺ in Hämoglobin (O₂-Transport) und Cytochromen (Elektronentransport)",
        "Zn²⁺: >300 Metalloenzyme, Zinkfinger-Proteine, Insulinspeicherung",
        "Co³⁺ in Vitamin B12 — Mangel: perniziöse Anämie + funikuläre Myelose",
        "BaSO₄: unlöslich (Ksp≈10⁻¹⁰) → sicheres GI-Kontrastmittel; lösliche Ba-Salze: hochgiftig",
      ],

      klinischerBezug:
        'Calcium (Gruppe 2) hat drei kritische Rollen: strukturelle Funktion als Hydroxyapatit (99% des Körper-Ca), Second-Messenger-Rolle (Ca²⁺-Calmodulin aktiviert u.a. Myosin-Leichtketten-Kinase → glatte Muskelkontraktion, eNOS → NO-Synthese), und Auslöser der Skelettmuskelkontraktion (Ca²⁺ bindet Troponin-C → Aktomyosin-Querbrückenzyklus). Hypokalzämie → Tetanie, Chvostek-Zeichen, Trousseau-Zeichen, verlängertes QT. Hyperkalzämie → "Stones, Bones, Groans, Psychic Moans". Jod (Gruppe 17) ist für T3/T4 essentiell; Jodmangel betrifft weltweit über 2 Milliarden Menschen und ist die häufigste vermeidbare Ursache geistiger Behinderung (Kretinismus).',

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie die medizinische Bedeutung von Jod (Gruppe 17) und Calcium (Gruppe 2) und zeigen Sie auf, welche klinischen Syndrome bei Mangel oder Überschuss auftreten.",
        answer:
          'Jod (I, Z=53, Gruppe 17) ist ein essentielles Spurenelement für die Schilddrüsenfunktion. Es wird über den Natrium-Jodid-Symporter (NIS) aktiv in Thyreozyten aufgenommen (gegen einen 20–40-fachen Konzentrationsgradienten, sekundär aktiv über Na⁺-Gradient). Thyreoperoxidase (TPO) oxidiert Jodid und jodiert Tyrosinreste des Thyreoglobulins → Monoiodtyrosin (MIT) und Diiodtyrosin (DIT). Kopplung: MIT+DIT→T3 (Triiodthyronin, 3 I-Atome, biologisch aktiv); DIT+DIT→T4 (Thyroxin, 4 I-Atome, Prohormon). T4 wird peripher durch Deiodinasen zu T3 konvertiert. Jodmangel → Hypothyreose mit kompensatorischer TSH-Erhöhung → Schilddrüsenhyperplasie (Struma). Bei kongenitaler Hypothyreose (Jodmangel pränatal und im ersten Lebensjahr) → Kretinismus: schwere irreversible geistige Behinderung (IQ-Verlust 10–15 Punkte im Durchschnitt), Kleinwuchs, Taubstummheit, spastische Diplegie. Kretinismus ist die häufigste vermeidbare Ursache geistiger Behinderung weltweit — Prävention durch Jodierung von Speisesalz. ¹³¹I (Beta-Emitter, HWZ 8 Tage): selektive Aufnahme in Schilddrüsengewebe → Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Calcium (Ca, Z=20, Gruppe 2) ist das häufigste Metall im Körper (~1 kg). 99% als Hydroxyapatit in Knochen und Zähnen (Strukturfunktion + Ca-Reservoir). Extraossäres Ca: Plasma 2,2–2,6 mmol/L (50% ionisiert Ca²⁺ biologisch aktiv; 40% an Albumin gebunden; 10% komplexiert). PTH (Parathyreoidhormon) erhöht Ca²⁺ durch Knochenresorption (Osteoklasten), renale Rückresorption und Aktivierung von Calcitriol (1,25-(OH)₂-Vitamin-D → steigert intestinale Ca-Absorption). Calcitonin senkt Ca²⁺ (hemmt Osteoklasten). Hypokalzämie (<2,0 mmol/L): erhöhte neuromuskuläre Erregbarkeit → Tetanie (Pfötchenstellung), Chvostek-Zeichen (Fazialisschlag → Gesichtsmuskelzucken), Trousseau-Zeichen (Blutdruckmanschette 3 min → Karpopedalspasmen), Laryngospasmus (lebensbedrohlich!), verlängertes QT-Intervall im EKG. Ursachen: Hypoparathyreoidismus (postoperativ), Vitamin-D-Mangel, Hypomagnesämie. Hyperkalzämie (>2,75 mmol/L): "Stones, Bones, Groans, Psychic Moans" — Nierensteine (Ca-Oxalat, Ca-Phosphat), Osteolyse/Knochenschmerzen, Nausea, Obstipation, Polyurie/Polydipsie (Ca²⁺ hemmt ADH-Wirkung), Bewusstseinstrübung, Depression. Häufigste Ursachen: primärer Hyperparathyreoidismus (Nebenschilddrüsenadenom) und maligne Erkrankungen (osteolytische Metastasen, ektope PTHrP-Sekretion).',
      },

      selfTest: [
        {
          question: "Welche Ionenladung bilden Erdalkalimetalle typischerweise und warum?",
          options: [
            "+1, weil sie ein Valenzelektron im s-Orbital haben",
            "+2, weil sie zwei Valenzelektronen (ns²) abgeben und dabei die stabile Edelgaskonfiguration erreichen",
            "+3, weil sie drei Elektronen in s- und p-Orbitalen tragen",
            "−2, weil sie zwei Elektronen aufnehmen, um das Oktett zu vervollständigen",
            "+2 oder +3, variabel wie Übergangsmetalle",
          ],
          correctIndex: 1,
          explanation:
            "Erdalkalimetalle (Gruppe 2) haben 2 Valenzelektronen in der ns²-Konfiguration. Durch Abgabe beider Elektronen erreichen sie die stabile Edelgaskonfiguration. Mg→Mg²⁺+2e⁻: [Ne]-Konfiguration; Ca→Ca²⁺+2e⁻: [Ar]-Konfiguration. Die dritte Ionisierungsenergie (erstes Rumpfelektron) ist enorm hoch (Mg: IE₃>4000 kJ/mol) → +3-Ionen bilden Erdalkalimetalle nicht. Wichtige +2-Ionen: Ca²⁺ (Knochen, Second Messenger), Mg²⁺ (>300 Enzymreaktionen, ATP-Kofaktor), Ba²⁺ (als unlösliches BaSO₄: Röntgenkontrastmittel).",
          hints: [
            "Erdalkalimetalle haben 2 Valenzelektronen in der Konfiguration ns²",
            "Sie geben beide ab und erreichen die stabile Edelgaskonfiguration (leere Valenzschale)",
          ],
          difficulty: 1,
          tags: ["erdalkalimetalle", "+2-ion", "edelgaskonfiguration"],
        },
        {
          question: "Welches Halogen ist für die Schilddrüsenhormone T3 und T4 essentiell?",
          options: [
            "Fluor (F) — wegen seiner hohen Reaktivität und Oxidationskraft",
            "Chlor (Cl) — weil es das häufigste Halogen im menschlichen Körper ist",
            "Brom (Br) — als Bestandteil bromierter Tyrosinderivate",
            "Jod (I) — als Baustein von Thyroxin (T4) und Triiodthyronin (T3)",
            "Astat (At) — als schwerstes natürliches Halogen",
          ],
          correctIndex: 3,
          explanation:
            "Jod (I, Z=53) ist das einzige biologisch essentielle Halogen für die Schilddrüsenfunktion. T4 (Thyroxin) enthält 4 Jodatome, T3 (Triiodthyronin) 3 Jodatome — beide an Tyrosinreste des Thyreoglobulins gebunden durch Thyreoperoxidase (TPO). Jodaufnahme: aktiv durch Natrium-Jodid-Symporter (NIS). Täglicher Jodbedarf: 150 µg (Erwachsene), 200 µg (Schwangerschaft). Jodmangel → Hypothyreose, Struma, Kretinismus. ¹³¹Jod (Beta-Emitter): Therapie von Schilddrüsenkarzinomen und Hyperthyreose. Chlor (Cl⁻) ist häufigstes Halogenanion im Körper, hat aber keine Funktion in der Hormonsynthese.",
          hints: [
            "Die Schilddrüsenhormone T4 (Thyroxin) und T3 (Triiodthyronin) — die Zahlen verraten die Anzahl von Jodatomen",
            "Das biologisch essentielle Halogen für die Schilddrüse hat Z=53 und steht in Periode 5",
          ],
          difficulty: 1,
          tags: ["jod", "schilddrüse", "t3-t4"],
        },
        {
          question:
            "Warum sind Edelgase chemisch inert, und welches Edelgas ist in der modernen Anästhesiologie als Narkosemittel zugelassen?",
          options: [
            "Edelgase sind inert, weil sie radioaktiv sind; Helium wird als Narkosemittel verwendet",
            "Edelgase sind inert, weil ihre Valenzschale vollständig besetzt ist (Oktett); Xenon ist als Narkosemittel zugelassen",
            "Edelgase sind inert, weil sie zu schwer für chemische Reaktionen sind; Argon wird als Narkosemittel verwendet",
            "Edelgase sind inert wegen ihrer hohen EN; Krypton ist als Narkosemittel zugelassen",
            "Edelgase sind inert, weil sie keine Elektronen besitzen; Radon wird therapeutisch verwendet",
          ],
          correctIndex: 1,
          explanation:
            "Edelgase (Gruppe 18) haben vollständig besetzte Valenzschalen: He: 1s² (Dublett), alle anderen: ns²np⁶ (Oktett). Diese Konfiguration ist energetisch maximal stabil — kein Trieb zur Elektronenabgabe, -aufnahme oder -teilung → chemisch inert. Xenon (Xe, Z=54, Periode 5) ist als Vollnarkotikum zugelassen (Europa). Wirkmechanismus: NMDA-Rezeptor-Antagonismus (wie Ketamin). Vorteile: kein Metabolismus (vollständig abgeatmet), exzellente kardiovaskuläre Stabilität, schnelle An- und Abflutung, analgetische Wirkung. Nachteil: hoher Preis, Closed-Circuit-System zur Rückgewinnung erforderlich.",
          hints: [
            "Edelgasinertheit: vollständig besetzte Valenzschale — kein Bedarf zur Bindungsbildung",
            "Das schwerste stabile, nicht-radioaktive Edelgas (Periode 5) ist als Narkotikum bekannt",
          ],
          difficulty: 2,
          tags: ["edelgase", "xenon", "narkosemittel"],
        },
        {
          question:
            "Welches Übergangsmetall ist das Zentralatom im Hämoglobin und ermöglicht den reversiblen O₂-Transport?",
          options: [
            "Kupfer (Cu²⁺) — wegen der Fähigkeit zur Komplexbildung",
            "Zink (Zn²⁺) — weil Zink das häufigste Übergangsmetall im Körper ist",
            "Eisen (Fe²⁺) — in der Häm-Gruppe bindet Fe²⁺ reversibel O₂",
            "Mangan (Mn²⁺) — als Zentralatom der mitochondrialen SOD",
            "Cobalt (Co³⁺) — als Zentralatom in Vitamin B12",
          ],
          correctIndex: 2,
          explanation:
            "Eisen (Fe²⁺) ist das Zentralatom der Häm-Gruppe in Hämoglobin (Hb). Jedes Hb-Tetramer (2α+2β) enthält 4 Häm-Gruppen, jede mit Fe²⁺ im Zentrum des Protoporphyrin-IX-Rings. Fe²⁺ bindet reversibel O₂ in der Lunge (hoher pO₂, Oxy-Hb: hellrot) und gibt es im Gewebe ab (niedriger pO₂, Desoxy-Hb: dunkelrot). Fe³⁺ (Methämoglobin) bindet kein O₂. Eisenmangelanämie: mikrozytär (MCV↓), hypochrom (MCH↓), Ferritin↓ — häufigste Mangelkrankheit weltweit. Hämochromatose (HFE-Mutation): Fe-Überladung → Leber, Herz, Pankreas, Gonaden.",
          hints: [
            "Das Hämoglobin ist rot — das Zentralatom bildet mit O₂ einen farbigen Komplex",
            "Fe-Mangel führt zur häufigsten Anämieform weltweit",
          ],
          difficulty: 2,
          tags: ["eisen", "hämoglobin", "sauerstofftransport"],
        },
        {
          question: "Welche Reaktivitätsreihenfolge gilt für Alkalimetalle (Gruppe 1)?",
          options: [
            "Li > Na > K > Rb > Cs (reaktivstes ist Lithium)",
            "Cs < Rb < K < Na < Li (Caesium am wenigsten reaktiv)",
            "Na > K > Li > Rb > Cs (Natrium am reaktivsten)",
            "Li < Na < K < Rb < Cs (Reaktivität steigt von Li nach Cs)",
            "Alle Alkalimetalle sind gleichmäßig reaktiv",
          ],
          correctIndex: 3,
          explanation:
            "Reaktivität der Alkalimetalle steigt von Li nach Cs (Li < Na < K < Rb < Cs), weil das Valenzelektron mit zunehmender Schalenzahl leichter abgegeben wird. IE₁-Werte: Li=520, Na=496, K=419, Rb=403, Cs=376 kJ/mol. Reaktion mit Wasser: Li zischt ruhig (rote Flamme); Na gleitet und brennt (gelbe Flamme); K entzündet H₂ sofort (violette Flamme); Rb und Cs explodieren. Caesium ist das reaktivste der stabilen Alkalimetalle. Francium (Fr) ist radioaktiv und existiert nur in Spuren.",
          hints: [
            "Reaktivität der Alkalimetalle steigt in der Gruppe von oben nach unten — gleicher Trend wie sinkende IE",
            "Cs hat die niedrigste IE der stabilen Alkalimetalle → leichteste Elektronenabgabe → reaktivst",
          ],
          difficulty: 2,
          tags: ["alkalimetalle", "reaktivität", "gruppe-trend"],
        },
        {
          question:
            "Welches klinische Syndrom entsteht bei schwerem Jodmangel während der Embryonalentwicklung?",
          options: [
            "Rachitis (Vitamin-D-Mangel mit Knochendeformitäten)",
            "Perniziöse Anämie (Vitamin-B12-Mangel mit megaloblastärer Anämie)",
            "Kretinismus (schwere geistige Behinderung, Kleinwuchs, Taubstummheit durch kongenitale Hypothyreose)",
            "Hämochromatose (Eisenüberladung mit Organschäden)",
            "Wilson-Krankheit (Kupferspeichererkrankung mit Leber- und Hirnschäden)",
          ],
          correctIndex: 2,
          explanation:
            "Schwerer Jodmangel während der Embryonalentwicklung und frühen Kindheit führt zum Kretinismus: schwere irreversible geistige Behinderung (IQ-Verlust 10–15 Punkte im Durchschnitt bei moderatem Jodmangel), Kleinwuchs, Taubstummheit, spastische Diplegie, myxödematöse Hypothyreose mit Struma. Ursache: Schilddrüsenhormone T3/T4 sind essentiell für Gehirnentwicklung (Myelinisierung, Synapsenbildung, Neuroproliferation) in der frühen Kindheit und pränatal. Jodmangel ist die häufigste vermeidbare Ursache geistiger Behinderung weltweit. Prävention: Jodierung von Speisesalz (20–40 µg/g), Jodsubstitution in Schwangerschaft (200 µg/Tag). Neugeborenen-TSH-Screening ermöglicht frühzeitige Therapie.",
          hints: [
            "Schilddrüsenhormone T3/T4 enthalten Jod und sind essentiell für Gehirnentwicklung",
            "Das Syndrom bei kongenitaler Hypothyreose durch Jodmangel führt zu irreversibler Hirnschädigung wenn unbehandelt",
          ],
          difficulty: 2,
          tags: ["jodmangel", "kretinismus", "hypothyreose"],
        },
        {
          question:
            "Welche Verbindung enthält Cobalt (Co) als Zentralatom und ist für die Hämatopoese essentiell?",
          options: [
            "Hämoglobin (Fe²⁺ als Zentralatom)",
            "Vitamin B12 (Cobalamin, Co³⁺ als Zentralatom im Corrin-Ring)",
            "Vitamin D (keine Metallkomponente)",
            "Coeruloplasmin (Cu²⁺ als Zentralatom)",
            "Glutathionperoxidase (Selenocystein als katalytisches Zentrum)",
          ],
          correctIndex: 1,
          explanation:
            "Vitamin B12 (Cobalamin) enthält Co³⁺ als Zentralatom in einem Corrin-Ring-System. Biologisch aktive Formen: Methylcobalamin (Cofaktor der Methionin-Synthase: Homocystein→Methionin + Methylierung von Tetrahydrofolat) und Adenosylcobalamin (Cofaktor der Methylmalonyl-CoA-Mutase: Methylmalonyl-CoA→Succinyl-CoA→Citratzyklus). Cobalaminmangel (durch Mangel an Intrinsic Factor bei perniziöser Anämie, Magenresektion, vegane Ernährung ohne Supplementation) → megaloblastäre Anämie (MCV↑, Riesenerythrozyten, hypersegmentierte Neutrophile) + funikuläre Myelose (Demyelinisierung von Hinter- und Seitensträngen → Ataxie, Spastik, Parästhesien).",
          hints: [
            'Co ist Zentralatom eines Vitamins — der Name "Cobalamin" enthält "Cobalt"',
            "Das Vitamin mit Co-Zentralatom ist essentiell für Hämatopoese und Nervenmyelinisierung",
          ],
          difficulty: 2,
          tags: ["cobalt", "vitamin-b12", "cobalamin"],
        },
        {
          question:
            "Barium (Ba, Gruppe 2) wird als Kontrastmittel eingesetzt, obwohl lösliche Ba-Salze giftig sind. Warum ist BaSO₄ sicher?",
          options: [
            "Weil BaSO₄ im Magen zu ungiftigem Ba(OH)₂ umgewandelt wird",
            "Weil BaSO₄ nahezu unlöslich ist (Ksp ≈ 10⁻¹⁰) und nicht resorbiert wird, sondern den GI-Trakt unverdaut passiert",
            "Weil Ba in Gruppe 2 steht und alle Erdalkalimetalle biologisch harmlos sind",
            "Weil BaSO₄ im Körper durch Leberenzyme entgiftet wird",
            "Weil BaSO₄ die Röntgenstrahlen reflektiert statt absorbiert",
          ],
          correctIndex: 1,
          explanation:
            "BaSO₄ (Bariumsulfat) hat Ksp ≈ 1,1×10⁻¹⁰ mol²/L² → praktisch unlöslich in Wasser und Körperflüssigkeiten. Da unlöslich, werden keine Ba²⁺-Ionen ins Blut aufgenommen → kein Toxizitätspotenzial. BaSO₄ passiert den GI-Trakt als inertes Pulver (weiße Suspension) und wird im Stuhl ausgeschieden. Röntgenkontrastwirkung: Ba hat hohe Ordnungszahl (Z=56) → starke Röntgenstrahlungsabsorption → hoher Kontrast. Lösliche Ba-Salze (BaCl₂) blockieren K⁺-Kanäle → Hypokaliämie-ähnliches Bild, Herzarrhythmie, Atemlähmung. Antidot: Na₂SO₄ → fällt Ba²⁺ als unlösliches BaSO₄ aus.",
          hints: [
            "Die Sicherheit liegt nicht in der chemischen Natur des Bariums, sondern in der Unlöslichkeit der Verbindung",
            "Unlösliche Salze können nicht durch den GI-Trakt resorbiert werden und sind biologisch inert",
          ],
          difficulty: 3,
          tags: ["barium", "löslichkeit", "kontrastmittel"],
        },
      ],
    },
  ],
};
