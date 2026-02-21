import type { Kapitel } from '../types';

export const chemKap2: Kapitel = {
  id: 'chem-kap2',
  title: 'Mikrokosmos — Moleküle und Wechselwirkungen',
  subject: 'chemie',
  icon: '🌀',
  estimatedTime: '90 min',
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────
    // UK 1 — Intermolekulare Wechselwirkungen
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch-2-01',
      title: 'Intermolekulare Wechselwirkungen',
      content: `## Überblick

Zwischen Molekülen und Ionen wirken **nicht-kovalente Wechselwirkungen**, die zwar schwächer als kovalente Bindungen sind, aber gemeinsam physikalische Eigenschaften (Siedepunkte, Löslichkeit) und biologische Strukturen (Proteinfaltung, DNA-Doppelhelix) bestimmen. Man unterscheidet drei Hauptklassen van-der-Waals-Kräfte sowie die besonders starken **Wasserstoffbrückenbindungen**.

## Van-der-Waals-Kräfte

**London-Dispersionskräfte** (induziert-Dipol–induziert-Dipol):
Entstehen durch kurzzeitige Unsymmetrien in der Elektronenverteilung, die in Nachbarmolekülen einen **induzierten Dipol** erzeugen. Sie existieren in *allen* Molekülen (polar wie unpolar). Ihre Stärke steigt mit zunehmender **Molmasse** (mehr Elektronen → größere Polarisierbarkeit) und mit größerer Moleküloberfläche. Beispiel: n-Pentan (Siedepunkt 36 °C) siedet höher als Neopentan (9,5 °C) trotz gleicher Summenformel, weil n-Pentan mehr Kontaktfläche besitzt.

**Keesom-Wechselwirkungen** (Dipol–Dipol):
Wirken zwischen Molekülen mit permanentem Dipolmoment. Die positiven Enden zweier Dipole ordnen sich zu den negativen Enden benachbarter Moleküle aus. Stärke ∝ μ²/r⁶ (μ = Dipolmoment, r = Abstand). Beispiele: HCl, Aceton.

**Debye-Wechselwirkungen** (Dipol–induzierter Dipol):
Ein permanenter Dipol polarisiert ein benachbartes unpolares Molekül. Geringer als London- und Keesom-Kräfte, aber stets vorhanden, wenn polare und unpolare Moleküle benachbart sind.

## Wasserstoffbrückenbindungen

Wasserstoffbrücken (H-Brücken) entstehen, wenn ein **elektropositives H-Atom**, das kovalent an ein stark elektronegatives Atom X gebunden ist (X = N, O oder F), mit dem freien Elektronenpaar eines weiteren elektronegativen Atoms Y (Y = N, O, F) wechselwirkt:

**X–H ··· Y** (Bindungslänge ≈ 170–200 pm, Energie 10–40 kJ/mol)

H-Brücken sind **nicht kovalent**, aber deutlich stärker als gewöhnliche van-der-Waals-Kräfte. Sie sind **gerichtet** (optimaler Winkel ≈ 180°) und **kooperativ** (mehrere H-Brücken stabilisieren sich gegenseitig).

**Biologische Beispiele:**
- *Wasser*: jedes Molekül kann bis zu 4 H-Brücken ausbilden (2 Donoren, 2 Akzeptoren) → hohe Siedetemperatur (100 °C), hohe Verdampfungswärme, Anomalie des Wassers
- *DNA-Doppelhelix*: A–T bildet 2 H-Brücken, G–C bildet 3 → G-C-reiche DNA ist thermisch stabiler (relevant für PCR-Denaturierungstemperatur)
- *Proteine*: α-Helix (i–i+4 H-Brücken entlang der Helix) und β-Faltblatt (intermolekulare H-Brücken zwischen Strängen) werden durch H-Brücken stabilisiert

## Stärkeranking der Bindungen und Wechselwirkungen

**Ionenbindung > Kovalente Bindung > Wasserstoffbrücken > Dipol–Dipol (Keesom) > London-Dispersion**

Typische Energien im Vergleich:
| Wechselwirkung | Energie |
|---|---|
| Kovalente Bindung (C–C) | ~350 kJ/mol |
| Ionenbindung (NaCl) | ~786 kJ/mol (Gitterenergie) |
| Wasserstoffbrücke | 10–40 kJ/mol |
| Dipol–Dipol | 3–10 kJ/mol |
| London-Dispersion | 0,05–40 kJ/mol |

## Klinische Relevanz

Die Wasserlöslichkeit von Pharmaka hängt direkt von intermolekularen Wechselwirkungen ab: **polare, H-Brücken-bildende Moleküle** (Paracetamol, viele Antibiotika) sind wasserlöslich und renal eliminierbar; **unpolare Moleküle** (Anästhetika, Steroide) akkumulieren in Lipidphasen. Proteinfaltung und -funktion basieren auf einem Netzwerk aus H-Brücken, hydrophoben Wechselwirkungen (London-Kräften) und ionischen Kontakten — **Denaturierung** durch Hitze, Harnstoff oder pH-Änderung bricht dieses Netzwerk auf. Bei der **PCR** wird die DNA durch Erhitzen auf 94–98 °C (Denaturierungsschritt) vollständig aufgebrochen, weil alle H-Brücken zwischen den Basenpaaren überwunden werden.`,

      lernziele: [
        'Die drei Klassen der van-der-Waals-Kräfte (London, Keesom, Debye) und ihre Entstehungsmechanismen erklären können.',
        'Wasserstoffbrückenbindungen (X–H···Y, X/Y = N, O, F) in ihrer Stärke, Geometrie und biologischen Bedeutung beschreiben können.',
        'Das Stärkeranking intermolekularer Wechselwirkungen kennen und auf Siedepunkte und Löslichkeit anwenden können.',
        'Den Einfluss intermolekularer Kräfte auf Proteinfaltung, DNA-Stabilität und Pharmakologie erläutern können.',
        'Wasserstoffbrücken in konkreten Biomolekülen (Wasser, DNA, α-Helix, β-Faltblatt) identifizieren können.',
      ],

      sections: [
        {
          heading: 'London-Dispersionskräfte — überall, aber unsichtbar',
          text: 'London-Kräfte basieren auf spontanen Dipolen, die durch Quantenfluktuationen in der Elektronenverteilung entstehen. Obwohl jede einzelne Wechselwirkung sehr schwach ist, summieren sie sich über viele Atome zu beachtlicher Stärke. Große, polarisierbare Moleküle (lange Kohlenwasserstoffketten, halogenierte Verbindungen) haben starke London-Kräfte und hohe Siedepunkte. Im menschlichen Körper halten London-Kräfte unpolare Lipidschwänze in Membranen zusammen und verankern hydrophobe Aminosäurereste im Proteininneren.',
          merksatz: 'Mehr Elektronen = mehr Polarisierbarkeit = stärkere London-Kräfte = höherer Siedepunkt.',
        },
        {
          heading: 'Wasserstoffbrücken — die Architekten des Lebens',
          text: 'Wasserstoffbrücken sind die wichtigsten nicht-kovalenten Wechselwirkungen in der Biologie. Sie verleihen Wasser seine einzigartigen Eigenschaften (Kohäsion, Kapillarität, hohe Wärmekapazität), stabilisieren die Sekundärstruktur von Proteinen und sichern die Komplementarität der DNA-Stränge. Die Regel X = N, O, F (und Y = N, O, F) ist essenziell: C–H-Bindungen bilden normalerweise keine nennenswerten H-Brücken (H zu wenig elektropositiv). Atome der zweiten Periode mit hoher Elektronegativität sind die klassischen Partner.',
          merksatz: 'H-Brücke = X–H···Y mit X, Y ∈ {N, O, F}; Energie 10–40 kJ/mol; gerichtet und kooperativ.',
        },
        {
          heading: 'Stärkeranking und physikalische Konsequenzen',
          text: 'Das Stärkeranking bestimmt Siedepunkte: HF (H-Brücken) siedet bei 19 °C, HCl (nur Dipol-Dipol + London) bei −85 °C, obwohl Cl viel schwerer als F ist. Wasser siedet wegen seines dichten H-Brücken-Netzwerks erst bei 100 °C. Für Pharmaka gilt: je mehr H-Brücken-fähige Gruppen (OH, NH, C=O), desto wasserlöslicher und desto schlechter lipidlöslich → beeinflusst Resorption und Verteilung im Körper (Lipinski-Regel).',
          merksatz: 'Anomale Siedepunkte von H₂O, HF, NH₃ gegenüber Homologen → Beweis für H-Brücken.',
        },
      ],

      merksätze: [
        'London-Dispersion: temporäre Dipole in allen Molekülen; wächst mit Molmasse und Elektronenzahl.',
        'Keesom-Wechselwirkung: permanente Dipol–Dipol-Kräfte; nur bei polaren Molekülen.',
        'Debye-Wechselwirkung: permanenter Dipol polarisiert Nachbarmolekül; stets begleitend.',
        'Wasserstoffbrücke: X–H···Y (X, Y = N, O, F); 10–40 kJ/mol; viel stärker als übliche van-der-Waals.',
        'Wasser kann 4 H-Brücken bilden → außergewöhnlich hoher Siedepunkt (100 °C).',
        'DNA: A–T = 2 H-Brücken; G–C = 3 H-Brücken → GC-reich = höhere Schmelztemperatur.',
        'α-Helix und β-Faltblatt in Proteinen werden durch H-Brücken stabilisiert.',
        'Stärkeranking: Ionenbindung > kovalent > H-Brücken > Dipol–Dipol > London.',
        'Denaturierung = Zerstörung nicht-kovalenter Wechselwirkungen (H-Brücken, hydrophob) → Entfaltung.',
        'PCR-Denaturierungsschritt (94 °C) bricht H-Brücken zwischen DNA-Strängen auf.',
      ],

      altfrage: {
        question: 'Erläutern Sie die Wasserstoffbrückenbindung am Beispiel des Wassers und der DNA. Erklären Sie dabei die strukturellen Voraussetzungen, typische Energiewerte und klinisch relevante Konsequenzen.',
        answer: `Eine Wasserstoffbrückenbindung entsteht, wenn ein Wasserstoffatom, das an ein stark elektronegatives Atom X (N, O oder F) gebunden ist, mit dem freien Elektronenpaar eines weiteren elektronegativen Atoms Y (ebenfalls N, O oder F) wechselwirkt. Das H-Atom ist durch die Elektronegativität von X elektropositiv polarisiert und wird daher elektrostatisch von Y angezogen. Die Bindungsenergie liegt bei 10–40 kJ/mol, also deutlich geringer als kovalente Bindungen (~350 kJ/mol für C–C), aber erheblich stärker als gewöhnliche van-der-Waals-Kräfte.

Im **Wasser** kann jedes Molekül bis zu vier H-Brücken ausbilden: zwei als Donor (über die zwei O–H-Bindungen) und zwei als Akzeptor (über die zwei freien Elektronenpaare des Sauerstoffs). Dieses dichte Netzwerk erklärt die anomal hohe Siedetemperatur (100 °C statt der nach Molmasse erwarteten ca. −80 °C), die hohe Verdampfungswärme, die Oberflächenspannung sowie die Anomalie des Wassers (Dichtemaximum bei 4 °C wegen H-Brücken-Geometrie im Eis).

In der **DNA-Doppelhelix** halten H-Brücken die beiden antiparallelen Stränge zusammen: Adenin–Thymin bildet 2 H-Brücken, Guanin–Cytosin bildet 3 H-Brücken. GC-reiche DNA-Abschnitte sind daher thermisch stabiler. Diese Eigenschaft wird bei der **PCR (Polymerase-Kettenreaktion)** ausgenutzt: Im Denaturierungsschritt (94–98 °C) werden alle H-Brücken zwischen den Basenpaaren aufgebrochen, die kovalenten Phosphodiesterbindungen der Stränge bleiben intakt. Beim Abkühlen lagern sich komplementäre Primer spezifisch an (Annealing).

In **Proteinen** stabilisieren H-Brücken die Sekundärstruktur: In der α-Helix verbindet jede NH-Gruppe einer Aminosäure mit der C=O-Gruppe der viertfolgenden Aminosäure (i → i+4). Im β-Faltblatt bilden parallele oder antiparallele Stränge H-Brücken untereinander. Denaturierung (Hitze, Harnstoff, pH-Extreme) zerstört dieses Netzwerk irreversibel oder reversibel, was den Funktionsverlust von Enzymen erklärt.`,
      },

      klinischerBezug: 'Wasserstoffbrücken bestimmen Proteinfaltung, DNA-Stabilität und Pharmaka-Löslichkeit; PCR nutzt gezielt die thermische Aufhebung von H-Brücken zur DNA-Denaturierung bei 94–98 °C.',

      selfTest: [
        {
          question: 'Welche der folgenden Aussagen zu London-Dispersionskräften ist korrekt?',
          options: [
            'Sie existieren nur in unpolaren Molekülen.',
            'Sie beruhen auf permanenten Dipolen.',
            'Sie entstehen durch spontane Elektronenfluktuationen und nehmen mit der Molmasse zu.',
            'Sie sind stärker als Wasserstoffbrücken.',
            'Sie sind unabhängig von der Molekülgröße.',
          ],
          correctIndex: 2,
          explanation: 'London-Dispersionskräfte entstehen durch kurzfristige Unsymmetrien in der Elektronenverteilung (spontane Dipole), die in Nachbarmolekülen induzierte Dipole erzeugen. Sie existieren in *allen* Molekülen (polar und unpolar). Mit steigender Molmasse (mehr Elektronen, größere Polarisierbarkeit) nehmen sie zu. Sie sind deutlich schwächer als Wasserstoffbrücken, nicht stärker. Die Aussage, sie seien nur in unpolaren Molekülen vorhanden, ist falsch: Auch polare Moleküle haben zusätzlich London-Kräfte.',
          hints: [
            'Denken Sie daran, in welchen Molekülen "keine" anderen Wechselwirkungen auftreten können.',
            'Was passiert mit der Polarisierbarkeit, wenn mehr Elektronen vorhanden sind?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'In der DNA-Doppelhelix bildet das Basenpaar Guanin–Cytosin (G–C) wie viele Wasserstoffbrücken?',
          options: [
            '1',
            '2',
            '3',
            '4',
            '5',
          ],
          correctIndex: 2,
          explanation: 'Guanin–Cytosin bildet 3 Wasserstoffbrücken, Adenin–Thymin dagegen nur 2. Dies hat direkte Konsequenzen: GC-reiche DNA-Abschnitte weisen eine höhere Schmelztemperatur auf, weil mehr H-Brücken pro Basenpaar aufgebrochen werden müssen. Bei der PCR beeinflusst der GC-Gehalt die erforderliche Denaturierungstemperatur und -dauer. G-C-Paare sind um 50 % stärker verknüpft als A-T-Paare.',
          hints: [
            'Erinnern Sie sich: A–T hat 2, G–C hat ... eine mehr.',
            'Die Regel heißt: „A=T mit 2, G≡C mit 3 Balken".',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Welche strukturellen Voraussetzungen muss ein Molekül erfüllen, um als Wasserstoffbrücken-Donor zu wirken?',
          options: [
            'Es muss ein freies Elektronenpaar besitzen.',
            'Es muss ein H-Atom tragen, das an N, O oder F gebunden ist.',
            'Es muss unpolar sein.',
            'Es muss ein positiv geladenes Ion sein.',
            'Es muss ein aromatisches System besitzen.',
          ],
          correctIndex: 1,
          explanation: 'Ein Wasserstoffbrücken-Donor benötigt ein H-Atom, das kovalent an ein stark elektronegatives Atom (N, O oder F) gebunden ist. Durch die hohe Elektronegativität wird das H-Atom δ+ polarisiert und kann elektrostatisch mit einem freien Elektronenpaar des Akzeptors (ebenfalls N, O oder F) wechselwirken. Ein freies Elektronenpaar allein macht ein Molekül zum Akzeptor, nicht zum Donor. Unpolarität, Ladung und Aromatizität sind keine Voraussetzungen.',
          hints: [
            'Donor bedeutet: Das Molekül "gibt" das H an die Brücke ab.',
            'Welche Atome sind elektronegativ genug, um H stark zu polarisieren?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Warum siedet Wasser (H₂O, M = 18 g/mol) bei 100 °C, Schwefelwasserstoff (H₂S, M = 34 g/mol) aber nur bei −60 °C?',
          options: [
            'H₂O hat eine höhere Molmasse als H₂S.',
            'H₂S ist giftiger als H₂O.',
            'H₂O bildet ein ausgedehntes Wasserstoffbrücken-Netzwerk; H₂S nicht, weil S zu wenig elektronegativ ist.',
            'H₂S hat stärkere London-Kräfte als H₂O.',
            'H₂O hat einen größeren Dipolmoment-Unterschied durch London-Dispersion.',
          ],
          correctIndex: 2,
          explanation: 'Wasser bildet pro Molekül bis zu 4 Wasserstoffbrücken (2 Donor-OH, 2 Akzeptor-Elektronenpaare am O), da Sauerstoff hochelektronegativ ist (χ = 3,44). Für eine H-Brücke ist X = N, O oder F erforderlich. Schwefel (χ = 2,58) ist zu wenig elektronegativ und zu groß, um nennenswerte H-Brücken auszubilden. H₂S wird daher nur durch van-der-Waals-Kräfte zusammengehalten, die aufgrund der niedrigen Molmasse schwach sind — daher der viel niedrigere Siedepunkt trotz höherer Molmasse.',
          hints: [
            'Welche Elemente können H-Brücken eingehen?',
            'Schwefel steht unter Sauerstoff im PSE — was bedeutet das für die Elektronegativität?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Anästhetikum ist ein sehr unpolares Molekül ohne H-Brücken-fähige Gruppen. Welche Aussage über seine intermolekularen Wechselwirkungen und Löslichkeit ist korrekt?',
          options: [
            'Es ist gut wasserlöslich aufgrund starker Keesom-Wechselwirkungen.',
            'Es weist nur London-Dispersionskräfte auf und ist gut lipidlöslich.',
            'Es bildet H-Brücken mit Wassermolekülen und ist daher renal eliminierbar.',
            'Es hat keine intermolekularen Wechselwirkungen und ist ein ideales Gas.',
            'Es ist ionisch und daher gut in Körperflüssigkeiten verteilt.',
          ],
          correctIndex: 1,
          explanation: 'Ein unpolares Molekül ohne H-Brücken-fähige Gruppen (keine N–H, O–H oder F–H-Bindungen und keine permanenten Dipole) besitzt ausschließlich London-Dispersionskräfte. Diese begünstigen die Löslichkeit in unpolaren Phasen (Lipide, Membranen) gemäß dem Prinzip "Gleiches löst sich in Gleichem". Lipidlösliche Anästhetika (z. B. Halothan) penetrieren leicht Lipiddoppelschichten und wirken direkt auf Membranproteine. Sie sind schlecht wasserlöslich und werden hauptsächlich hepatisch metabolisiert, nicht renal unverändert ausgeschieden.',
          hints: [
            'Welches Wechselwirkungsprinzip gilt immer, unabhängig von Polarität?',
            '"Similia similibus solvuntur" — was bedeutet das?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welche Wechselwirkung ist die stärkste der folgenden nicht-kovalenten Wechselwirkungen?',
          options: [
            'London-Dispersionskräfte zwischen Edelgasatomen',
            'Keesom-Wechselwirkung zwischen HCl-Molekülen',
            'Debye-Wechselwirkung zwischen Wasser und Hexan',
            'Wasserstoffbrücke zwischen zwei Wassermolekülen',
            'London-Dispersionskräfte zwischen zwei Methanmolekülen',
          ],
          correctIndex: 3,
          explanation: 'Das Stärkeranking nicht-kovalenter Wechselwirkungen lautet: H-Brücken (10–40 kJ/mol) > Dipol–Dipol/Keesom (3–10 kJ/mol) > Debye (~1–5 kJ/mol) > London-Dispersion (sehr variabel, bei kleinen Molekülen wie Edelgasen und Methan sehr gering). Die Wasserstoffbrücke zwischen zwei Wassermolekülen (~20 kJ/mol) übertrifft alle anderen aufgeführten Optionen. London-Kräfte zwischen Edelgasatomen (monatomisch, geringe Elektronenzahl) und zwischen Methanmolekülen sind besonders schwach.',
          hints: [
            'Ordnen Sie: Was braucht X–H···Y?',
            'Vergleichen Sie die Energien: 10–40 kJ/mol vs. unter 10 kJ/mol.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Denaturierung von Proteinen durch Erhitzen zerstört primär welche Art von Bindungen/Wechselwirkungen?',
          options: [
            'Primär kovalente Peptidbindungen in der Primärstruktur.',
            'Primär nicht-kovalente Wechselwirkungen wie H-Brücken, hydrophobe Kontakte und ionische Wechselwirkungen der Sekundär- und Tertiärstruktur.',
            'Primär kovalente Disulfidbrücken in der Tertiärstruktur.',
            'Nur Van-der-Waals-Kräfte, nicht aber Wasserstoffbrücken.',
            'Ausschließlich elektrostatische Wechselwirkungen zwischen geladenen Aminosäuren.',
          ],
          correctIndex: 1,
          explanation: 'Proteindenaturierung durch Hitze (oder Harnstoff, pH-Extrema) zerstört die nicht-kovalenten Wechselwirkungen, die Sekundär-, Tertiär- und Quartärstruktur stabilisieren: Wasserstoffbrücken (α-Helix, β-Faltblatt), hydrophobe Wechselwirkungen (London-Kräfte im unpolaren Proteinkern) sowie ionische Wechselwirkungen zwischen geladenen Seitenketten. Die kovalenten Peptidbindungen der Primärstruktur bleiben beim Erhitzen intakt (dazu bräuchte man Säure-/Base-Hydrolyse). Kovalente Disulfidbrücken werden durch Hitze allein nicht gespalten — dafür braucht man Reduktionsmittel.',
          hints: [
            'Denken Sie an die Energieunterschiede: nicht-kovalent vs. kovalent.',
            'Welche Bindungen halten α-Helix und β-Faltblatt zusammen?',
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // UK 2 — Löslichkeit, Konzentration und Osmose
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch-2-02',
      title: 'Löslichkeit, Konzentration und Osmose',
      content: `## Löslichkeit und das Prinzip "Similia similibus solvuntur"

**Polare Lösungsmittel** (z. B. Wasser) lösen **polare und ionische** Substanzen: Wasser hydratisiert Ionen und bildet H-Brücken mit polaren Molekülen (OH, NH, C=O). Die Hydratationsenthalpie kompensiert die Gitterenergie.

**Unpolare Lösungsmittel** (Hexan, Dichlormethan) lösen **unpolare** Substanzen (Lipide, Steroide, Wachse) über London-Wechselwirkungen.

**Amphiphile Moleküle** (Detergenzien, Phospholipide) besitzen einen polaren Kopf und einen unpolaren Schwanz → Mizellenbildung in Wasser: Schwänze innen, Köpfe außen.

## Konzentrationsbegriffe

| Begriff | Formel | Einheit | Anwendung |
|---|---|---|---|
| Molarität (c) | n / V | mol/L (M) | Standardkonzentration im Labor |
| Molalität (b) | n / m(Lösungsmittel) | mol/kg | Kolligative Eigenschaften |
| Massenkonzentration (β) | m / V | g/L | Klinische Laborbefunde |
| Massenanteil (w) | m(Stoff) / m(Lösung) | % (m/m) | Lösungsansatz |
| Volumenanteil (φ) | V(Stoff) / V(Lösung) | % (v/v) | Alkohol, Sauerstoffkonzentration |
| Massenvolumenkonzentration | m(Stoff) / V(Lösung) | % (m/v) | Infusionslösungen (z. B. 0,9 % NaCl) |

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

Klinisch wird die **Serum-Osmolalität** aus dem Gefrierpunkt gemessen; berechnete Osmolalität: 2×[Na⁺] + [Glukose]/18 + [Harnstoff]/6 (Einheiten in mg/dL) bzw. vereinfacht 2×[Na] + [Glukose] + [Harnstoff] (Einheiten in mmol/L).`,

      lernziele: [
        'Das Löslichkeitsprinzip "Similia similibus solvuntur" auf polare, unpolare und amphiphile Substanzen anwenden können.',
        'Die verschiedenen Konzentrationsangaben (Molarität, Massenkonzentration, %) definieren und ineinander umrechnen können.',
        'Osmose, osmotischen Druck und Osmolarität erklären und mit dem van\'t-Hoff-Faktor berechnen können.',
        'Isotonische, hypotone und hypertone Lösungen unterscheiden und ihre Wirkung auf Erythrozyten beschreiben können.',
        'Den kolloidosmotischen Druck und die klinische Bedeutung von Albumin bei der Ödembildung erklären können.',
      ],

      sections: [
        {
          heading: 'Löslichkeit — polar löst polar',
          text: 'Der Grundsatz "Similia similibus solvuntur" erklärt, warum Wasser Salze und Zucker löst, aber keine Fette: Polare Substanzen wechselwirken über H-Brücken und elektrostatische Kräfte mit Wasser; unpolare Substanzen können diese Wechselwirkungen nicht eingehen und werden daher aus dem Wasser "ausgeschlossen" (hydrophober Effekt). Amphiphile Moleküle wie Phospholipide nutzen beide Eigenschaften: Der polare Kopf zeigt ins Wasser, der unpolare Schwanz organisiert sich weg vom Wasser — Grundlage der Biomembran.',
          merksatz: '"Gleiches löst sich in Gleichem" — polar in polar, unpolar in unpolar.',
        },
        {
          heading: 'Osmose und klinische Konsequenzen',
          text: 'Die Osmoregulation ist lebensnotwendig: Das Blutplasma wird bei 285–295 mOsmol/L gehalten (Hypothalamus/ADH-Achse). Jede Abweichung gefährdet die Zellintegrität. Hypotone Lösungen (z. B. reines Wasser i.v.) würden Erythrozyten durch Wassereinstrom zum Platzen bringen (Hämolyse). Hypertone Lösungen (z. B. Meerwasser trinken) entziehen Zellen Wasser. Albumin als wichtigstes Plasmaprotein generiert den onkotischen Druck und hält Wasser im Gefäß; sein Abfall führt zu Ödemen.',
          merksatz: 'Osmose: Wasser wandert vom geringen zum hohen osmotischen Druck — immer von "verdünnt" nach "konzentriert".',
        },
        {
          heading: 'Konzentrationsrechnung im klinischen Alltag',
          text: 'Die häufigste Infusionslösung "NaCl 0,9 %" bedeutet 0,9 g NaCl pro 100 mL = 9 g/L. Mit M(NaCl) = 58,44 g/mol ergibt sich c = 0,154 mol/L. Da NaCl vollständig in Na⁺ und Cl⁻ dissoziiert (i = 2), beträgt die Osmolarität 2 × 154 = 308 mOsmol/L — knapp isotonisch. "5 % Glukose" = 50 g/L; M(Glukose) = 180 g/mol → c = 0,278 mol/L; i = 1 → 278 mOsmol/L. Diese Rechnungen sind prüfungsrelevant.',
          merksatz: 'Osmolarität [mOsmol/L] = Molarität × i × 1000; NaCl: i = 2, Glukose: i = 1.',
        },
      ],

      merksätze: [
        '"Similia similibus solvuntur" — polar löst polar, unpolar löst unpolar.',
        'Molarität c [mol/L] = n/V; Massenkonzentration β [g/L] = c × M.',
        '0,9 % NaCl = 154 mmol/L NaCl = 308 mOsmol/L ≈ isotonisch.',
        '5 % Glukose = 278 mOsmol/L ≈ isotonisch; nach Metabolisierung wirkt es wie hypotones Wasser.',
        'Osmose: Wasser wandert immer vom geringen zum hohen osmotischen Druck (semipermeable Membran).',
        'Van\'t-Hoff-Faktor i: NaCl → i = 2; CaCl₂ → i = 3; Glukose → i = 1.',
        'Blutplasma-Osmolarität normal: 285–295 mOsmol/L; geregelt durch ADH und Niere.',
        'Hypotone Lösung → Hämolyse der Erythrozyten; hypertone Lösung → Crenation (Schrumpfen).',
        'Albumin erzeugt onkotischen Druck (~25 mmHg) → hält Wasser im Gefäß.',
        'Hypoalbuminämie (Leberzirrhose, nephrotisches Syndrom) → Ödeme durch verminderten onkotischen Druck.',
      ],

      altfrage: {
        question: 'Ein Patient mit nephrotischem Syndrom (starker Proteinverlust im Urin) entwickelt ausgeprägte periphere Ödeme trotz normalem Blutdruck. Erläutern Sie den pathophysiologischen Mechanismus und die zugrundeliegenden physikalisch-chemischen Prinzipien.',
        answer: `Das nephrotische Syndrom ist durch eine massive Proteinurie (>3,5 g/Tag) gekennzeichnet, die zur Hypoalbuminämie führt (Serumalbumin < 30 g/L, normal 35–50 g/L). Albumin ist das mengenmäßig wichtigste Plasmaprotein und mit einem Molekulargewicht von ca. 66 kDa zu groß, um unter normalen Bedingungen die Kapillarmembran zu passieren.

Der **kolloidosmotische (onkotische) Druck** bezeichnet den osmotischen Druck, den Makromoleküle (vor allem Albumin) aufbauen, die nicht durch Membranen diffundieren können. Er beträgt beim Gesunden ca. 25–28 mmHg und hält Wasser im Gefäßlumen, indem er dem hydrostatischen Filtrationsdruck (ca. 35 mmHg arteriell, 15 mmHg venös) entgegenwirkt. Das Gleichgewicht zwischen Filtration und Reabsorption beschreibt die Starling-Gleichung.

Bei Hypoalbuminämie sinkt der onkotische Druck erheblich (z. B. auf < 15 mmHg). Das hydrostatische Druckgefälle überwiegt nun an beiden Seiten des Kapillarbetts → Nettofiltration von Flüssigkeit ins Interstitium → **Ödembildung**. Da das Blutvolumen sinkt (Volumenmangel im Gefäß), aktiviert die Niere das RAAS (Renin-Angiotensin-Aldosteron-System) und schüttet ADH aus → Na⁺- und Wasserretention → paradoxe Verstärkung der Ödeme, obwohl bereits zu viel Wasser im Interstitium ist.

Das osmotische Grundprinzip lautet: Wasser folgt stets dem osmotischen Gefälle — in diesem Fall dem Druckgefälle von Gefäß zum Interstitium. Da die Plasmaproteine fehlen, fehlt der Gegendruck. Die Therapie zielt auf Albuminsubstitution (kurzzeitig), Diuretika zur Natriumausscheidung und Behandlung der Grunderkrankung.`,
      },

      klinischerBezug: 'Isotonische Infusionslösungen (0,9 % NaCl, 5 % Glukose) schützen Erythrozyten; Hypoalbuminämie (nephrotisches Syndrom, Leberzirrhose) senkt onkotischen Druck und verursacht Ödeme.',

      selfTest: [
        {
          question: 'Wie groß ist die Osmolarität einer 0,5 mol/L CaCl₂-Lösung? (CaCl₂ → Ca²⁺ + 2 Cl⁻)',
          options: [
            '500 mOsmol/L',
            '750 mOsmol/L',
            '1000 mOsmol/L',
            '1500 mOsmol/L',
            '250 mOsmol/L',
          ],
          correctIndex: 3,
          explanation: 'CaCl₂ dissoziiert vollständig in 1 Ca²⁺ und 2 Cl⁻, also 3 Teilchen pro Formeleinheit → van\'t-Hoff-Faktor i = 3. Osmolarität = c × i × 1000 = 0,5 mol/L × 3 × 1000 = 1500 mOsmol/L. Diese Lösung ist stark hypertonisch (Blut: ~290 mOsmol/L). Starke Hypertonizität würde Erythrozyten schrumpfen lassen (Crenation) und darf nicht als Infusion gegeben werden.',
          hints: [
            'Zählen Sie die Ionen: CaCl₂ → Ca²⁺ + 2 Cl⁻ = wie viele Teilchen?',
            'Osmolarität = Molarität × Anzahl Teilchen (i) × 1000.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Ein Patient erhält versehentlich reines Wasser (destilliert) als intravenöse Infusion. Was passiert mit seinen Erythrozyten?',
          options: [
            'Sie schrumpfen (Crenation), weil Wasser hypotonisch ist.',
            'Nichts, weil Erythrozyten keine semipermeable Membran haben.',
            'Sie schwellen an und platzen (Hämolyse), weil Wasser ins Zellinnere strömt.',
            'Sie werden agglutiniert durch den osmotischen Druck.',
            'Ihre Hämoglobinkonzentration steigt durch Wasserentzug.',
          ],
          correctIndex: 2,
          explanation: 'Reines Wasser hat eine Osmolarität von 0 mOsmol/L — extrem hypototonisch gegenüber dem Zellinneren (Erythrozyt: ~300 mOsmol/L). Wasser strömt per Osmose durch die semipermeable Erythrozytenmembran in die Zelle, bis der osmotische Druck ausgeglichen ist oder die Membran reißt. Die Folge ist Hämolyse (Platzen der Erythrozyten) mit Freisetzung von Hämoglobin — klinisch: Hämoglobinurie, Nierenversagen möglich. Deswegen müssen alle i.v.-Lösungen isotonisch formuliert sein.',
          hints: [
            'Wohin wandert Wasser bei der Osmose — zur höheren oder niedrigeren Konzentration?',
            'Der Erythrozyt hat eine höhere Innenkonzentration als das Außenmedium.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Welche Konzentration hat eine 5 % (m/v) Glukoselösung in mol/L? (M Glukose = 180 g/mol)',
          options: [
            '0,028 mol/L',
            '0,278 mol/L',
            '0,500 mol/L',
            '2,78 mol/L',
            '5,00 mol/L',
          ],
          correctIndex: 1,
          explanation: '5 % (m/v) bedeutet 5 g Glukose pro 100 mL = 50 g/L. Mit der Molmasse M = 180 g/mol gilt: c = 50 g/L ÷ 180 g/mol ≈ 0,278 mol/L. Die Osmolarität beträgt 0,278 mol/L × 1 (Glukose dissoziiert nicht, i = 1) × 1000 ≈ 278 mOsmol/L — damit ist die Lösung annähernd isotonisch mit Blutplasma (285–295 mOsmol/L).',
          hints: [
            '5 % (m/v) = 5 g pro 100 mL = wie viele g pro Liter?',
            'c = Masse pro Liter ÷ Molmasse.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Warum entwickelt ein Patient mit schwerer Hypoalbuminämie (Albumin 15 g/L statt 40 g/L) periphere Ödeme?',
          options: [
            'Weil Albumin Wasser aktiv in die Zellen pumpt.',
            'Weil der onkotische Druck im Plasma sinkt und Wasser aus den Kapillaren ins Interstitium austritt.',
            'Weil Albumin die Nierenfunktion hemmt und Wasser retiniert wird.',
            'Weil fehlende Albumine die Blut-Hirn-Schranke destabilisieren.',
            'Weil Albumin normalerweise Wasser aus dem Darm resorbiert.',
          ],
          correctIndex: 1,
          explanation: 'Albumin ist zu groß, um die Kapillarmembran normal zu passieren, und erzeugt dadurch den onkotischen (kolloidosmotischen) Druck von ~25 mmHg, der Wasser im Gefäßlumen hält. Bei Hypoalbuminämie (z. B. nephrotisches Syndrom, Leberzirrhose, Malnutrition) sinkt dieser Gegendruck. Der hydrostatische Druck der Kapillaren überwiegt nun an beiden Seiten, Wasser filtiert verstärkt ins Interstitium: Ödeme entstehen. Dies ist reines Osmose-Prinzip: Wasser folgt dem osmotischen Gradienten — von höherer zu niedrigerer Albuminkonzentration (Gefäß → Interstitium).',
          hints: [
            'Was erzeugt der kolloidosmotische Druck — Wasser halten oder herausdrücken?',
            'Starling-Gleichung: hydrostatischer Druck filtert aus, onkotischer Druck hält zurück.',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Jod (I₂) ist nahezu wasserunlöslich, löst sich aber gut in Tetrachlorkohlenstoff (CCl₄). Welches Prinzip erklärt das am besten?',
          options: [
            'Jod bildet H-Brücken mit CCl₄.',
            'CCl₄ ist polar und bildet Dipol-Dipol-Wechselwirkungen mit I₂.',
            '"Similia similibus solvuntur" — beide sind unpolarer Natur und wechselwirken über London-Kräfte.',
            'Jod ist ionisch und CCl₄ ist ein starkes Ionensolvatans.',
            'CCl₄ hat eine höhere Dielektrizitätskonstante als Wasser.',
          ],
          correctIndex: 2,
          explanation: 'Jod (I₂) ist ein unpolares, symmetrisches Molekül ohne permanentes Dipolmoment. CCl₄ ist ebenfalls unpolar (symmetrisches Tetraeder, Dipolmomente heben sich auf). Beide wechselwirken über London-Dispersionskräfte, die für unpolare Moleküle die einzigen intermolekularen Kräfte sind. Da "Gleiches sich in Gleichem löst", ist I₂ gut in CCl₄ löslich. In Wasser (hochpolar, H-Brücken-Netzwerk) ist I₂ dagegen nahezu unlöslich, weil I₂ dieses Netzwerk nicht aufrechterhalten kann. CCl₄ hat eine niedrigere Dielektrizitätskonstante als Wasser, kein Dipolmoment und keine H-Brücken.',
          hints: [
            'Welche Symmetrie hat I₂? Hat es ein Dipolmoment?',
            'CCl₄ hat vier gleiche C-Cl-Bindungen in Tetraederanordnung — was bedeutet das für das Gesamtdipolmoment?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welche Lösung ist die richtige intravenöse Flüssigkeit für einen Patienten mit Hypovolämie (Blutdruckabfall durch Volumenmangel) ohne bekannte Elektrolytstörungen?',
          options: [
            'Destilliertes Wasser, weil es keine zusätzlichen Elektrolyte enthält.',
            '10 % NaCl-Lösung, um den Blutdruck schnell zu erhöhen.',
            'Isotonische 0,9 % NaCl-Lösung (154 mmol/L, ~308 mOsmol/L).',
            'Hypotone 0,45 % NaCl-Lösung, um mehr Volumen in die Zellen zu bringen.',
            '70 % Ethanol, weil Alkohol gefäßerweiternd wirkt.',
          ],
          correctIndex: 2,
          explanation: 'Bei Hypovolämie muss das intravasale Volumen aufgefüllt werden ohne Hämolyse oder Crenation zu riskieren. Die isotonische 0,9 % NaCl-Lösung (154 mmol/L NaCl, Osmolarität ~308 mOsmol/L) entspricht annähernd dem osmotischen Druck des Blutplasmas (285–295 mOsmol/L) und verursacht keine Volumenverschiebungen über Erythrozytenmembranen. Destilliertes Wasser (0 mOsmol/L) würde akute Hämolyse verursachen. 10 % NaCl ist stark hypertonisch und würde Zellen schrumpfen lassen sowie hypernatriämische Schäden verursachen. Hypotone Lösungen würden Zellen aufschwellen lassen.',
          hints: [
            'Welche Osmolarität entspricht der des Blutes (~290 mOsmol/L)?',
            'Was passiert bei zu niedriger oder zu hoher Osmolarität mit Erythrozyten?',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Was ist der Van\'t-Hoff-Faktor (i) für Calciumchlorid CaCl₂, das vollständig dissoziiert?',
          options: [
            '1',
            '2',
            '3',
            '4',
            '6',
          ],
          correctIndex: 2,
          explanation: 'CaCl₂ dissoziiert in wässriger Lösung vollständig: CaCl₂ → Ca²⁺ + 2 Cl⁻. Pro Formeleinheit entstehen 3 Ionen. Der van\'t-Hoff-Faktor i gibt die Anzahl der Partikel an, in die eine Formeleinheit dissoziiert. Für CaCl₂ gilt daher i = 3. Dies ist wichtig für die Berechnung der Osmolarität (= c × i × 1000) und kolligativer Eigenschaften. Vergleich: NaCl: i = 2 (Na⁺ + Cl⁻); Glukose: i = 1 (kein Zerfall); MgCl₂: i = 3; AlCl₃: i = 4.',
          hints: [
            'Schreiben Sie die Dissoziationsgleichung auf: CaCl₂ → ?',
            'Zählen Sie die Produkt-Ionen.',
          ],
          tags: [],
          difficulty: 1,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // UK 3 — Aggregatzustände, Phasenübergänge und Kolloidchemie
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch-2-03',
      title: 'Aggregatzustände, Phasenübergänge und Kolloidchemie',
      content: `## Aggregatzustände im Vergleich

| Eigenschaft | Fest | Flüssig | Gasförmig |
|---|---|---|---|
| Teilchenanordnung | Geordnet, dicht | Ungeordnet, dicht | Ungeordnet, weit |
| Volumen | Bestimmt | Bestimmt | Nicht bestimmt |
| Form | Bestimmt | Angepasst | Angepasst |
| Kompressibilität | Gering | Gering | Hoch |
| Beweglichkeit | Nur Schwingung | Gleiten | Frei |

## Phasenübergänge und Wärmetönung

Die Phasenübergänge und ihre thermodynamischen Vorzeichen:

- **Schmelzen** (fest → flüssig): endotherm (Schmelzenthalpie ΔH > 0)
- **Erstarren** (flüssig → fest): exotherm (ΔH < 0)
- **Verdampfen/Sieden** (flüssig → gasförmig): endotherm (Verdampfungsenthalpie ΔHvap > 0)
- **Kondensieren** (gasförmig → flüssig): exotherm
- **Sublimation** (fest → gasförmig, direkt): endotherm; Beispiel: trockenes Eis (CO₂), Iod, Naphthalin
- **Desublimation/Resublimation** (gasförmig → fest, direkt): exotherm; Beispiel: Reifbildung

**Eselsbrücke:** Beim Übergang zu "ungeordneter/freier" Phase wird Energie aufgenommen (endo); beim Übergang zu "geordneter" Phase wird Energie abgegeben (exo).

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

**Klassifikation nach Dispersionsmedium und -phase:**

| Typ | Disperse Phase | Dispersionsmedium | Beispiel |
|---|---|---|---|
| Sol (Lyosol) | Fest | Flüssig | Gold-Sol, Stärkelösung |
| Emulsion | Flüssig | Flüssig | Milch, Mayonnaise |
| Schaum | Gas | Flüssig | Seifenschaum, Schlagsahne |
| Aerosol (flüssig) | Flüssig | Gas | Nebel, Spraydosen |
| Aerosol (fest) | Fest | Gas | Rauch, Staub |
| Gel | Flüssig | Fest | Gelatine, Agar-Agar |

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
- **Surfactant der Lunge:** Phospholipid-Gemisch (Dipalmitoylphosphatidylcholin, DPPC), das die Alveolen-Wasser-Grenzfläche stabilisiert und die Oberflächenspannung senkt → verhindert Alveolarkollaps; bei Frühgeborenen noch nicht ausgereift → **Atemnotsyndrom (RDS)**`,

      lernziele: [
        'Die drei Aggregatzustände und ihre Eigenschaften kennen sowie alle Phasenübergänge mit Wärmetönung (endo-/exotherm) benennen können.',
        'Den Zusammenhang zwischen Dampfdruck, Siedepunkt und äußerem Druck erklären und die Siedepunktserhöhung berechnen können.',
        'Kolloide von echten Lösungen und Suspensionen abgrenzen und die Eigenschaften (Brownsche Bewegung, Tyndall-Effekt) erklären können.',
        'Die verschiedenen Kolloidtypen (Sol, Emulsion, Aerosol, Gel) unterscheiden und medizinische Beispiele nennen können.',
        'Kolloidale Infusionslösungen und den Surfactant der Lunge in ihrer physikalisch-chemischen Grundlage erklären können.',
      ],

      sections: [
        {
          heading: 'Phasenübergänge — Energiebilanz merken',
          text: 'Alle Übergänge zu einem ungeordneteren Zustand (fest→flüssig→gasförmig) sind endotherm: Energie muss zugeführt werden, um Ordnung aufzubrechen. Umgekehrt sind Übergänge zu geordneteren Phasen exotherm. Die Sublimation (fest→gasförmig) überspringt die flüssige Phase und ist stark endotherm — flüssiges Wasser unter 0,006 atm sublimiert (technisch: Gefriertrocknung). Im Körper ist die Verdampfungswärme des Wassers (2257 J/g) entscheidend für die Thermoregulation: Schwitzen kühlt durch Verdampfung.',
          merksatz: 'Endo = Energie zuführen = Ordnung aufbrechen (fest→flüssig→gasförmig); Exo = Energie abgeben = Ordnung aufbauen.',
        },
        {
          heading: 'Kolloide — zwischen Lösung und Suspension',
          text: 'Die Partikelgröße ist das entscheidende Kriterium: echte Lösungen (<1 nm, unsichtbar), Kolloide (1 nm–1 μm, opaleszent, Tyndall-Effekt), Suspensionen (>1 μm, trüb, sedimentieren). Der Tyndall-Effekt — sichtbares Streulicht durch kolloidale Partikel — wird klinisch genutzt: Plasma ist opaleszent (kolloidale Proteine), aber nach Entfernung der Proteine klar. Brownsche Bewegung hält kolloidale Partikel in Schwebe; bei großen Partikeln (Suspensionen) überwiegt die Gravitation.',
          merksatz: 'Tyndall-Effekt: Kolloid streut Licht sichtbar; echte Lösung tut das nicht.',
        },
        {
          heading: 'Klinische Kolloidchemie',
          text: 'Blut ist kein "kolloidales System" im strengen Sinne, aber Plasma verhält sich kolloidartig durch die Plasmaproteine (Albumin, Globuline, Fibrinogen). Kolloidale Infusionslösungen (HAES, Gelatine, Albumin) bleiben länger im Gefäßsystem als kristalloide (NaCl, Ringer), weil die großen Makromoleküle die Kapillarwand nicht passieren können und so den onkotischen Druck aufrechterhalten. Surfactant der Lunge (ein Phospholipid-Protein-Gemisch) ist eine biologische Emulsion, die die Grenzflächenspannung der Alveolen-Luft-Fläche senkt und Kollaps verhindert.',
          merksatz: 'Kolloidale Infusionslösungen erhalten onkotischen Druck → länger im Gefäß als NaCl-Lösung.',
        },
      ],

      merksätze: [
        'Schmelzen und Verdampfen sind endotherm; Erstarren und Kondensieren sind exotherm.',
        'Sublimation: fest → gasförmig (direkt); Desublimation: gasförmig → fest. Beide überspringen die Flüssigphase.',
        'Siedepunkt = Temperatur, bei der Dampfdruck = äußerer Druck; im Gebirge niedriger als bei Normaldruck.',
        'Siedepunktserhöhung: ΔTb = Kb × m × i; kolligative Eigenschaft abhängig von Teilchenzahl.',
        'Kolloide: Partikelgröße 1 nm – 1 μm; Tyndall-Effekt; Brownsche Bewegung; keine Sedimentation.',
        'Echte Lösungen: <1 nm; kein Tyndall-Effekt. Suspensionen: >1 μm; sedimentieren.',
        'Emulsion = Flüssig-in-Flüssig-Kolloid; Emulgator stabilisiert (z. B. Lecithin in Milch).',
        'Blutplasma enthält kolloidale Proteine (Albumin ~7 nm) → onkotischer Druck.',
        'HAES und Gelatine als kolloidale Volumenersatzmittel bleiben länger intravaskulär als kristalloide.',
        'Surfactant (DPPC) senkt Alveolären-Oberflächenspannung; Mangel → Atemnotsyndrom (RDS) bei Frühgeborenen.',
      ],

      altfrage: {
        question: 'Erklären Sie den Tyndall-Effekt und die Brownsche Bewegung in kolloidalen Systemen. Erläutern Sie dann die klinische Bedeutung der kolloidalen Eigenschaften des Blutes am Beispiel des onkotischen Drucks und kolloidaler Infusionslösungen.',
        answer: `Der **Tyndall-Effekt** bezeichnet die Streuung von Licht durch kolloidale Partikel (Durchmesser 1 nm–1 μm). Wenn ein Lichtstrahl ein kolloidales System passiert, wird er an den Partikeloberflächen nach allen Seiten gestreut (Rayleigh-Streuung für Partikel < λ; Mie-Streuung für größere). Der Lichtstrahl wird dadurch seitlich sichtbar, obwohl das Kolloid optisch klar oder leicht opaleszent erscheint. In echten Lösungen (Partikel <1 nm, z. B. NaCl, Glukose) ist der Effekt nicht sichtbar, weil die gelösten Teilchen viel kleiner als die Lichtwellenlänge sind. Suspensionen (>1 μm) trüben das Licht diffus. Der Tyndall-Effekt ist damit ein einfaches diagnostisches Kriterium zur Unterscheidung echter Lösungen von Kolloiden.

Die **Brownsche Bewegung** ist die stochastische Zitterbewegung kolloidaler Partikel infolge der unregelmäßigen thermischen Stöße der Lösungsmittelmoleküle (Wärmeenergie ~kBT ≈ 0,026 eV bei Raumtemperatur). Da kolloidale Partikel klein genug sind, um durch diese Stöße signifikant aus ihrer Position bewegt zu werden, sedimentieren sie nicht unter dem Einfluss der Schwerkraft. Diese Eigenschaft ist entscheidend für die Stabilität kolloidaler Systeme. Große Teilchen (>1 μm, Suspensionen) haben genug Masse, um trotz Brownscher Bewegung zu sedimentieren.

**Klinische Bedeutung kolloidaler Blut-Eigenschaften:** Plasma enthält kolloidale Proteine — vor allem Albumin (Molmasse ~66 kDa, Durchmesser ~7 nm), aber auch Fibrinogen, Globuline und Gerinnungsfaktoren. Diese Proteine können die Kapillarmembran (Porendurchmesser <2 nm effektiv für Proteine) nicht passieren und erzeugen dadurch den **onkotischen (kolloidosmotischen) Druck** von ca. 25–28 mmHg. Dieser Druck hält Wasser im Gefäßlumen, indem er dem nach außen filtrierenden hydrostatischen Druck entgegenwirkt (Starling-Gleichgewicht).

**Kolloidale Infusionslösungen** (HAES, Gelatine, Humanalbumin) nutzen dasselbe Prinzip: Die großen Makromoleküle (Hydroxyethylstärke: >100 kDa; Gelatine: ~30 kDa; Albumin: 66 kDa) bleiben nach intravenöser Gabe im Gefäßlumen und erhöhen den onkotischen Druck, was das intravasale Volumen länger aufrechterhält als kristalloide Lösungen (NaCl, Ringer). Bei hypoosmolarem Schock (z. B. nach schwerem Blutverlust) ist dies klinisch vorteilhaft. HAES ist seit 2013 bei kritisch kranken und Sepsis-Patienten aufgrund von Nierenschäden eingeschränkt; Humanalbumin wird bei Leberzirrhose mit spontaner bakterieller Peritonitis und hepatorenalem Syndrom eingesetzt.`,
      },

      klinischerBezug: 'Kolloidale Infusionslösungen (HAES, Albumin) nutzen die onkotische Wirkung großer Makromoleküle; Surfactant-Mangel bei Frühgeborenen führt durch fehlende Emulsifiziereigenschaften zum Atemnotsyndrom RDS.',

      selfTest: [
        {
          question: 'Welcher Phasenübergang ist exotherm?',
          options: [
            'Schmelzen (fest → flüssig)',
            'Verdampfen (flüssig → gasförmig)',
            'Sublimation (fest → gasförmig)',
            'Kondensation (gasförmig → flüssig)',
            'Endotherm sind alle Phasenübergänge.',
          ],
          correctIndex: 3,
          explanation: 'Kondensation (gasförmig → flüssig) ist exotherm: Beim Übergang in den geordneteren, dichteren Zustand wird die beim Verdampfen aufgenommene Wärme (Verdampfungswärme) wieder freigesetzt. Dieses Prinzip erklärt, warum Dampfverbrennungen schlimmer sind als Wasserverbrennungen gleicher Temperatur — Dampf gibt beim Kondensieren auf der Haut zusätzlich Verdampfungswärme (2257 J/g) ab. Alle Übergänge zu weniger geordneten Phasen (Schmelzen, Verdampfen, Sublimation) sind endotherm.',
          hints: [
            'Merkrege: Unordnung schaffen = Energie aufnehmen; Ordnung aufbauen = Energie abgeben.',
            'Kondensation ist das Gegenteil von Verdampfen — gleich exotherm wie Verdampfen endotherm ist.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Wasser siedet in einer Gebirgsküche bei 3000 m Höhe (Luftdruck ~70 kPa statt 101 kPa) bei ca. 90 °C. Warum?',
          options: [
            'Weil Wasser in großer Höhe eine niedrigere Molmasse hat.',
            'Weil der Dampfdruck mit steigender Höhe zunimmt.',
            'Weil der Siedepunkt dort liegt, wo Dampfdruck = äußerer Luftdruck; niedrigerer Luftdruck → niedrigerer Siedepunkt.',
            'Weil die Schwerkraft den Siedepunkt beeinflusst.',
            'Weil Wasser in der Höhe stärker ionisiert ist.',
          ],
          correctIndex: 2,
          explanation: 'Der Siedepunkt einer Flüssigkeit ist definiert als die Temperatur, bei der ihr Dampfdruck dem äußeren Druck entspricht. In großer Höhe ist der Luftdruck niedriger (3000 m: ~70 kPa statt 101,3 kPa). Wasser muss daher auf eine geringere Temperatur erhitzt werden, damit sein Dampfdruck den verminderten Luftdruck erreicht. Bei 70 kPa beträgt der Siedepunkt ca. 90 °C. Folge: Lebensmittel müssen länger gekocht werden, weil die Kochtemperatur niedriger ist. Im Druckkochtopf (>1 atm) steigt der Siedepunkt entsprechend an, was die Garzeit verkürzt.',
          hints: [
            'Definition Siedepunkt: Dampfdruck = ?',
            'Was passiert mit dem Luftdruck in großer Höhe?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Woran ist ein kolloidales System von einer echten Lösung zu unterscheiden?',
          options: [
            'Das Kolloid ist immer trüb und sedimentiert.',
            'Echte Lösungen zeigen den Tyndall-Effekt, Kolloide nicht.',
            'Kolloide zeigen den Tyndall-Effekt; echte Lösungen nicht.',
            'Kolloide bestehen nur aus anorganischen Substanzen.',
            'Echte Lösungen haben größere Partikel als Kolloide.',
          ],
          correctIndex: 2,
          explanation: 'Der Tyndall-Effekt — die seitliche Sichtbarkeit eines Lichtstrahls durch Lichtstreuung an Partikeln — ist das klassische Unterscheidungsmerkmal. Kolloidale Partikel (1 nm–1 μm) haben die richtige Größe, um Licht effizient zu streuen. Partikel echter Lösungen (<1 nm) sind viel kleiner als die Lichtwellenlänge und streuen kaum. Kolloide sedimentieren aufgrund der Brownschen Bewegung nicht spontan (im Gegensatz zu Suspensionen mit >1 μm-Partikeln). Kolloide können sowohl organische als auch anorganische Substanzen sein.',
          hints: [
            'Tyndall-Effekt: Ein Lichtstrahl wird in einem bestimmten Medium seitlich sichtbar — in welchem?',
            'Partikelgröße: Lösung <1 nm, Kolloid 1–1000 nm, Suspension >1000 nm.',
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: 'Bei einem Frühgeborenen der 28. Schwangerschaftswoche wird ein Atemnotsyndrom (RDS) diagnostiziert. Welcher physikalisch-chemische Mechanismus liegt diesem Syndrom zugrunde?',
          options: [
            'Fehlendes Hämoglobin führt zu unzureichender O₂-Bindung.',
            'Fehlender Surfactant erhöht die Oberflächenspannung der Alveolen → Kollaps beim Ausatmen.',
            'Zu niedrige Temperatur in den Lungen verhindert Gaseintausch.',
            'Fehlende Osmolarität der Lungenflüssigkeit verursacht Ödem.',
            'Überschuss an Surfactant lässt die Alveolen überdehnen.',
          ],
          correctIndex: 1,
          explanation: 'Surfactant (surface-active agent) ist ein Phospholipid-Protein-Gemisch, das von Typ-II-Pneumozyten produziert wird und ab ca. 34.–36. SSW in ausreichender Menge vorhanden ist. Sein Hauptbestandteil DPPC (Dipalmitoylphosphatidylcholin) lagert sich als monomolekularer Film an die Alveolen-Luft-Grenzfläche. Er senkt die Oberflächenspannung des Wasserfilms von ~70 mN/m auf < 5 mN/m bei kleinen Alveolen. Ohne Surfactant würde die Laplace-Druckformel (ΔP = 2γ/r) bewirken, dass kleine Alveolen bei niedrigem Radius hohen Innendruck haben und beim Ausatmen kollabieren. RDS-Therapie: exogene Surfactant-Instillation (Beractant, Poractant alfa) und CPAP-Beatmung.',
          hints: [
            'Laplace-Gleichung: ΔP = 2γ/r — was passiert bei hoher Oberflächenspannung γ und kleinem Radius r?',
            'Surfactant ist ein grenzflächenaktiver Stoff — er setzt die Oberflächenspannung herab.',
          ],
          tags: [],
          difficulty: 3,
        },
        {
          question: 'Was unterscheidet eine Emulsion von einem Sol?',
          options: [
            'Eine Emulsion hat Partikel kleiner als 1 nm.',
            'In einem Sol ist die disperse Phase flüssig; in einer Emulsion ist sie fest.',
            'In einer Emulsion ist die disperse Phase flüssig (Flüssig-in-Flüssig); in einem Sol ist sie fest (Fest-in-Flüssig).',
            'Eine Emulsion sedimentiert, ein Sol nicht.',
            'Emulsionen existieren nur in biologischen Systemen.',
          ],
          correctIndex: 2,
          explanation: 'Der Unterschied liegt in der Aggregatzustand der dispersen Phase: Ein Sol (Lyosol) ist ein Kolloid mit fester disperser Phase in flüssigem Dispersionsmedium (z. B. Goldkolloid, Stärkelösung). Eine Emulsion ist ein Kolloid mit flüssiger disperser Phase in flüssigem Dispersionsmedium (Flüssig-in-Flüssig, z. B. Milch = Fett in Wasser, Mayonnaise). Emulsionen werden durch Emulgatoren (amphiphile Moleküle wie Lecithin, Gallensäuren) stabilisiert, die sich an der Phasengrenze anlagern. Parenterale Fettemulsionen für die künstliche Ernährung sind medizinisch relevante Beispiele.',
          hints: [
            'Sol: Was ist "Sol" — von lat. "solutio" für Lösung; disperse Phase ist fest.',
            'Emulsion: Denken Sie an Milch — Fett in Wasser: welcher Aggregatzustand ist die disperse Phase?',
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: 'Welche der folgenden Substanzen zeigt bei gleicher Molalität (m = 0,1 mol/kg) die stärkste Siedepunktserhöhung in Wasser?',
          options: [
            'Glukose (i = 1)',
            'NaCl (i = 2)',
            'CaCl₂ (i = 3)',
            'AlCl₃ (i = 4)',
            'Alle gleich, weil gleiche Molalität.',
          ],
          correctIndex: 3,
          explanation: 'Die Siedepunktserhöhung ΔTb = Kb × m × i ist eine kolligative Eigenschaft, die von der Gesamtzahl der gelösten Teilchen (nicht ihrer Art) abhängt. Bei gleicher Molalität m = 0,1 mol/kg gilt: Glukose (i = 1): ΔTb = 0,512 × 0,1 × 1 = 0,0512 K; NaCl (i = 2): 0,1024 K; CaCl₂ (i = 3): 0,1536 K; AlCl₃ (i = 4: Al³⁺ + 3 Cl⁻ = 4 Teilchen): 0,2048 K. AlCl₃ erzeugt die meisten Teilchen und hat damit die größte Siedepunktserhöhung.',
          hints: [
            'Schreiben Sie die Dissoziationsgleichung für AlCl₃ auf: AlCl₃ → Al³⁺ + 3 Cl⁻ = ? Teilchen.',
            'Formel: ΔTb = Kb × m × i; welches i ist am größten?',
          ],
          tags: [],
          difficulty: 3,
        },
        {
          question: 'Brownsche Bewegung schützt kolloidale Partikel vor Sedimentation. Was ist die physikalische Grundlage dieser Bewegung?',
          options: [
            'Elektrostatische Abstoßung zwischen gleichnamig geladenen Kolloidpartikeln.',
            'Thermische Energie der Lösungsmittelmoleküle, die Kolloidpartikel durch zufällige Stöße ständig in Bewegung halten.',
            'Magnetische Wechselwirkungen zwischen Kolloidpartikeln und dem Lösungsmittel.',
            'Gravitation, die auf Kolloidpartikel gleichmäßig wirkt.',
            'Chemische Reaktionen an der Kolloidpartikeloberfläche.',
          ],
          correctIndex: 1,
          explanation: 'Brownsche Bewegung (entdeckt von Robert Brown, 1827; erklärt von Einstein, 1905) basiert auf den thermischen Stößen der Lösungsmittelmoleküle gegen die kolloidalen Partikel. Die mittlere thermische Energie jedes Freiheitsgrades beträgt kBT/2 (kB = Boltzmann-Konstante, T = Temperatur). Kolloidale Partikel (1–1000 nm) sind zwar größer als Atome, aber klein genug, dass die summierte Stoßkraft aus ungleichmäßigen Richtungen eine zufällige, unkontrollierte Bewegung erzeugt. Diese überlagert die langsame Sedimentation durch Gravitation. Suspensionen (>1 μm) haben zu viel Masse — Gravitation dominiert, sie sedimentieren.',
          hints: [
            'Einstein erklärte die Brownsche Bewegung 1905 über die kinetische Gastheorie.',
            'Bei welcher Temperatur würde Brownsche Bewegung aufhören? Bei 0 K (absoluter Nullpunkt).',
          ],
          tags: [],
          difficulty: 2,
        },
      ],
    },
  ],
};
