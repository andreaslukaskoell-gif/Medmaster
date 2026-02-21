import type { Kapitel } from '../types';

export const chemKap6: Kapitel = {
  id: 'chem-kap6',
  title: 'Chemische Bindung',
  subject: 'chemie',
  icon: '🔗',
  estimatedTime: '55 min',
  unterkapitel: [
    {
      id: 'ch-6-01',
      title: 'Ionenbindung — Entstehung und Eigenschaften',
      content: `## Entstehung der Ionenbindung

Ionenbindungen entstehen durch vollständige **Elektronenübertragung** von einem Metall (niedrige Ionisierungsenergie, gibt Elektronen ab) auf ein Nichtmetall (hohe Elektronenaffinität, nimmt Elektronen auf). Beide Atome erreichen dabei die stabile Edelgaskonfiguration.

Beispiel: Na (2-8-1) + Cl (2-8-7) → Na⁺ (2-8) + Cl⁻ (2-8-8) → NaCl

Die Triebkraft ist die **Gitterenergie** — die Energie, die bei der Bildung des Ionengitters freigesetzt wird (stark exotherm, da Coulomb-Anziehung zwischen entgegengesetzt geladenen Ionen stabil ist).

## Ionengitter (NaCl-Struktur)

In einem Ionenkristall ist jedes Ion von mehreren entgegengesetzt geladenen Ionen umgeben. Im NaCl-Gitter ist jedes Na⁺ von 6 Cl⁻ umgeben (und umgekehrt) — eine kubisch-flächenzentrierte Packung. Die **Gitterenergie** von NaCl beträgt −786 kJ/mol (Born-Haber-Kreisprozess).

## Eigenschaften ionischer Verbindungen

- **Hoher Schmelzpunkt**: Große Gitterenergie → viel Energie zum Aufbrechen des Gitters nötig. NaCl schmilzt bei 801°C.
- **Sprödigkeit**: Verschiebung der Ionen führt zur Abstoßung gleich geladener Ionen → Bruch statt Verformung.
- **Löslichkeit in Wasser**: Polare Wassermoleküle solvieren die Ionen (Hydratation). NaCl löst sich gut, MgO kaum (höhere Gitterenergie durch höhere Ladungen).
- **Elektrische Leitfähigkeit**: Ionenverbindungen leiten Strom nur im **geschmolzenen** oder **gelösten** Zustand (freie Ionen), nicht im festen Zustand (Ionen fixiert im Gitter).

## Weitere Beispiele

CaCO₃ (Kalkstein/Knochen), MgO (Magnesiumoxid, Antazidum), KCl (Elektrolytlösung), CaF₂ (Flussspat, Zahnschmelz).`,
      lernziele: [
        "Die Entstehung der Ionenbindung durch Elektronenübertragung erklären",
        "Die charakteristischen Eigenschaften ionischer Verbindungen (Schmelzpunkt, Löslichkeit, Leitfähigkeit) begründen",
        "Wichtige Ionenverbindungen und ihre medizinischen Bedeutungen nennen",
      ],
      sections: [
        {
          heading: "Gitterenergie und Born-Haber-Kreisprozess",
          text: "Die Gitterenergie ist die Energie, die benötigt wird, um ein Mol eines Ionengitters in seine gasförmigen Ionen zu zerlegen (endotherm). Sie hängt von den Ladungen der Ionen und dem Ionenabstand ab: E ∝ (z⁺ × z⁻) / r. Daher hat MgO (z=+2 und -2) mit ~3850 kJ/mol eine fast fünfmal höhere Gitterenergie als NaCl (786 kJ/mol) und einen entsprechend höheren Schmelzpunkt (2852°C). Der Born-Haber-Kreisprozess verknüpft Gitterenergie mit messbaren Größen (Ionisierungsenergie, Elektronenaffinität, Sublimationsenthalpie) über den Hess'schen Wärmesatz.",
        },
        {
          heading: "Medizinische Bedeutung von Ionenverbindungen",
          text: "Ionenverbindungen spielen im menschlichen Körper zentrale Rollen. Elektrolyte (Na⁺, K⁺, Cl⁻, Ca²⁺, Mg²⁺, HPO₄²⁻) regeln Osmose, Nervenimpulse und Enzymaktivitäten. Störungen des Elektrolythaushalts (Hyponatriämie, Hyperkaliämie, Hypokalzämie) sind lebensbedrohlich. Hydroxyapatit Ca₅(PO₄)₃OH ist der anorganische Hauptbestandteil von Knochen und Zähnen. Calciumcarbonat CaCO₃ ist Antazidum (neutralisiert Magensäure). Natriumchlorid NaCl in 0,9%iger Lösung (physiologische Kochsalzlösung) ist der isotone Standard für Infusionen.",
        },
      ],
      merksätze: [
        "Ionenbindung: Metall gibt Elektronen ab, Nichtmetall nimmt auf → Ionen + Gitter",
        "Ionenkristall: hoher Schmelzpunkt, spröde, leitet nur in Lösung/Schmelze",
        "Gitterenergie ∝ z⁺×z⁻/r — MgO stabiler als NaCl wegen höherer Ladungen",
      ],
      klinischerBezug: "Die Ionenzusammensetzung des Extrazellulärraums (Na⁺ ~140 mmol/L, Cl⁻ ~103 mmol/L) und des Intrazellulärraums (K⁺ ~140 mmol/L) erzeugt das Membranpotential von Nervenzellen (−70 mV), das die Grundlage aller neuronalen Signalübertragung ist.",
      altfrage: {
        question: "Warum leitet festes NaCl keinen elektrischen Strom, wässrige NaCl-Lösung aber schon?",
        answer: "Im festen NaCl-Gitter sind die Na⁺- und Cl⁻-Ionen in festen Gitterpositionen fixiert und können sich nicht bewegen. Elektrischer Strom erfordert bewegliche Ladungsträger. In wässriger Lösung werden die Ionen durch Hydrathüllen umgeben und können sich frei bewegen → Ladungstransport → elektrische Leitfähigkeit.",
      },
      selfTest: [
        {
          question: "Wie entsteht eine Ionenbindung?",
          options: [
            "Durch gemeinsame Nutzung von Elektronenpaaren zwischen zwei Nichtmetallen",
            "Durch vollständige Übertragung eines Elektrons vom Metall auf das Nichtmetall",
            "Durch Anziehung zwischen induzierten Dipolen",
            "Durch Delokalisierung von Elektronen in einem Metallgitter",
            "Durch Austausch von Protonen zwischen Säure und Base",
          ],
          correctIndex: 1,
          explanation: "Bei der Ionenbindung überträgt ein Metall (niedrige IE) ein oder mehrere Elektronen auf ein Nichtmetall (hohe EA). Es entstehen positiv geladene Metall-Kationen und negativ geladene Nichtmetall-Anionen, die durch elektrostatische Anziehung im Ionengitter zusammengehalten werden.",
          hints: [
            "Ionenbindung entsteht zwischen Metall und Nichtmetall",
            "Was passiert mit den Elektronen bei der Ionenbindung?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum hat MgO einen höheren Schmelzpunkt als NaCl?",
          options: [
            "Weil Magnesium eine größere Atomzahl als Natrium hat",
            "Weil MgO eine ionische Bindung hat und NaCl eine kovalente",
            "Weil Mg²⁺ und O²⁻ höhere Ladungen (±2) als Na⁺ und Cl⁻ (±1) haben → größere Gitterenergie",
            "Weil Sauerstoff eine höhere Elektronegativität als Chlor hat",
            "Weil MgO kovalente Bindungsanteile hat, die stabiler sind",
          ],
          correctIndex: 2,
          explanation: "Die Gitterenergie ist proportional zu den Ionenladungen: E ∝ (z⁺ × z⁻)/r. MgO hat Ionen mit Ladung ±2, NaCl mit Ladung ±1. MgO-Gitterenergie (~3850 kJ/mol) >> NaCl-Gitterenergie (~786 kJ/mol) → viel mehr Energie zum Schmelzen nötig.",
          hints: [
            "Gitterenergie hängt von den Ionenladungen ab: E ∝ z⁺×z⁻",
            "Mg²⁺ und O²⁻ haben doppelte Ladungen verglichen mit Na⁺ und Cl⁻",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Eigenschaft haben ionische Verbindungen im festen Zustand?",
          options: [
            "Sie leiten elektrischen Strom",
            "Sie sind weich und verformbar",
            "Sie haben einen niedrigen Schmelzpunkt",
            "Sie sind spröde und haben einen hohen Schmelzpunkt",
            "Sie lösen sich nicht in Wasser",
          ],
          correctIndex: 3,
          explanation: "Ionische Verbindungen sind im festen Zustand spröde (Verschiebung gleichnamiger Ionen führt zur Abstoßung → Bruch) und haben hohe Schmelzpunkte (große Gitterenergie muss überwunden werden). Sie leiten Strom nur in Lösung oder als Schmelze.",
          hints: [
            "Ionen im Gitter sind fest fixiert → keine Bewegung → kein Stromfluss",
            "Zum Schmelzen muss das stabile Gitter aufgebrochen werden",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Verbindung ist eine ionische Verbindung?",
          options: [
            "CO₂",
            "H₂O",
            "CH₄",
            "NaCl",
            "NH₃",
          ],
          correctIndex: 3,
          explanation: "NaCl (Kochsalz) ist eine typische Ionenverbindung: Na (Metall, Gr.1) gibt sein Valenzelektron an Cl (Nichtmetall, Gr.17) ab → Na⁺ und Cl⁻. CO₂, H₂O, CH₄ und NH₃ sind alle aus Nichtmetallen aufgebaut und bilden kovalente Verbindungen.",
          hints: [
            "Ionenverbindungen entstehen zwischen Metall und Nichtmetall",
            "Metalle stehen links im PSE, Nichtmetalle rechts",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei der Elektrolyse von NaCl-Schmelze wird elektrischer Strom durchgeleitet. Was passiert an der Kathode (negativer Pol)?",
          options: [
            "Cl⁻ wird oxidiert und bildet Cl₂",
            "Na⁺ wird reduziert und bildet Na-Metall",
            "H₂O wird reduziert und bildet H₂",
            "Na⁺ wird oxidiert und bildet Na²⁺",
            "Cl⁻ wird oxidiert und bildet Cl²⁻",
          ],
          correctIndex: 1,
          explanation: "An der Kathode (negativer Pol) findet Reduktion statt: Na⁺ + e⁻ → Na. An der Anode (positiver Pol) wird Cl⁻ oxidiert: 2Cl⁻ → Cl₂ + 2e⁻. So werden aus der NaCl-Schmelze Natrium-Metall und Chlorgas gewonnen (Downs-Zelle).",
          hints: [
            "Kathode = negativ = Reduktion = Elektronenaufnahme",
            "Welches Ion nimmt Elektronen auf: Na⁺ oder Cl⁻?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-6-02',
      title: 'Kovalente Bindung — Polarität und Hybridisierung',
      content: `## Kovalente Bindung

Bei der **kovalenten Bindung** (Elektronenpaarbindung) teilen zwei Atome ein oder mehrere Elektronenpaare. Sie entsteht typischerweise zwischen Nichtmetallen. Ein **bindendes Elektronenpaar** gehört beiden Atomen gemeinsam und senkt die Energie des Systems. Nicht-bindende Elektronenpaare (freie Elektronenpaare) bleiben einem Atom zugeordnet.

Beispiele: H₂ (H-H, 1 bindendes EP), O₂ (O=O, 2 bindende EP/Doppelbindung), N₂ (N≡N, 3 bindende EP/Dreifachbindung).

## Polare und unpolare Atombindung

Bei **gleicher Elektronegativität** (ΔEN = 0) wird das Elektronenpaar gleichmäßig geteilt: **unpolare Atombindung** (z.B. H₂, Cl₂, CH₄ mit ΔEN<0,4). Bei **ungleicher EN** (ΔEN > 0,4) zieht das elektronegativere Atom das Elektronenpaar stärker zu sich → **polare Atombindung** mit partiellen Ladungen δ+ und δ-. Ab ΔEN > 1,7 spricht man von überwiegend ionischem Charakter.

**Dipolmoment** μ = q × d (Ladungstrennung × Bindungsabstand, Einheit Debye D). H₂O hat μ = 1,85 D.

## VSEPR-Modell

Das VSEPR-Modell (Valence Shell Electron Pair Repulsion) sagt Molekülgeometrien voraus: Elektronen­paare (bindende und nicht-bindende) stoßen sich ab und ordnen sich so an, dass die Abstoßung minimal ist.

## Hybridisierung

**sp³**: 4 bindende Positionen, Tetraedergeometrie (109,5°). CH₄, NH₃, H₂O. In H₂O mit 2 freien EP: Winkel 104,5° (freie EP stoßen stärker ab).

**sp²**: 3 bindende Positionen + 1 p-Orbital für π-Bindung, trigonal-planar (120°). C₂H₄, Benzol, Peptidbindung.

**sp¹**: 2 bindende Positionen, linear (180°). C₂H₂ (Ethin), CO₂.`,
      lernziele: [
        "Polare von unpolaren kovalenten Bindungen anhand von ΔEN unterscheiden",
        "Das VSEPR-Modell zur Vorhersage der Molekülgeometrie anwenden",
        "sp³-, sp²- und sp¹-Hybridisierung mit ihren Geometrien erklären",
      ],
      sections: [
        {
          heading: "VSEPR: Geometrie aus Elektronenpaar-Abstoßung",
          text: "Das VSEPR-Modell (Valence Shell Electron Pair Repulsion) erklärt Molekülgeometrien aus der gegenseitigen Abstoßung aller Elektronenpaare (bindend und nicht-bindend) in der Valenzschale des Zentralatoms. Die Reihenfolge der Abstoßungsstärke: freies EP > bindendes EP (da freie EP näher am Kern). Daher ist der Winkel in H₂O (2 freie EP, 2 bindende EP) mit 104,5° kleiner als der Tetraederwinkel (109,5°), und in NH₃ (1 freies EP, 3 bindende EP) beträgt er 107°. Lineare Moleküle (2 bindende EP, keine freien): 180°. Trigonal-planar (3 bindende EP, keine freien): 120°. Tetraeder (4 bindende EP, keine freien): 109,5°.",
        },
        {
          heading: "Hybridisierung und chemische Reaktivität",
          text: "Die Hybridisierung erklärt, wie Atomorbitale sich mischen, um äquivalente Bindungsorbitale zu bilden. sp³-Hybridisierung des Kohlenstoffs erklärt die Tetraedergeometrie des Methans und aller gesättigten Kohlenwasserstoffe (Alkane). sp²-Hybridisierung erklärt Doppelbindungen (eine σ-Bindung aus sp²-Orbital + eine π-Bindung aus nicht-hybridisierten p-Orbitalen) und die planare Geometrie von Ethen oder der Peptidbindung. sp¹-Hybridisierung erklärt Dreifachbindungen (eine σ + zwei π) in Ethin und Nitrilen. Die π-Bindungen sind reaktiver als σ-Bindungen (weniger stabile Überlappung) → Alkene und Alkine reagieren leichter als Alkane.",
        },
      ],
      merksätze: [
        "ΔEN < 0,4: unpolar kovalent; 0,4–1,7: polar kovalent; > 1,7: ionisch",
        "sp³: Tetraeder 109,5°; sp²: trigonal planar 120°; sp¹: linear 180°",
        "VSEPR: freie EP stoßen stärker ab → Winkel kleiner als ideal (H₂O: 104,5°)",
      ],
      klinischerBezug: "Die sp²-Hybridisierung der Peptidbindung (C-N-Bindung im Protein) verleiht ihr partiellen Doppelbindungscharakter (C=N-Resonanz): Sie ist planar und starr, was die Sekundärstruktur von Proteinen (α-Helix, β-Faltblatt) bestimmt — entscheidend für Enzymfunktion und Proteinstruktur.",
      altfrage: {
        question: "Warum ist der Bindungswinkel im Wassermolekül (104,5°) kleiner als der ideale Tetraederwinkel (109,5°)?",
        answer: "In H₂O hat das Sauerstoffatom 4 Elektronenpaar-Domänen (sp³-hybridisiert): 2 bindende Elektronenpaare (O-H) und 2 freie Elektronenpaare. Freie Elektronenpaare sind näher am Kern und nehmen mehr Raum ein als bindende Elektronenpaare. Sie stoßen die O-H-Bindungen stärker zusammen → der H-O-H-Winkel verkleinert sich von 109,5° auf 104,5°.",
      },
      selfTest: [
        {
          question: "Welche Bindung entsteht zwischen zwei Chloratomen in Cl₂?",
          options: [
            "Ionenbindung",
            "Polare kovalente Bindung (ΔEN > 0)",
            "Unpolare kovalente Bindung (ΔEN = 0)",
            "Wasserstoffbrücke",
            "Metallbindung",
          ],
          correctIndex: 2,
          explanation: "Cl₂ besteht aus zwei identischen Chloratomen (gleiche EN). Das Elektronenpaar wird vollkommen gleichmäßig geteilt → ΔEN = 0 → unpolare kovalente Bindung.",
          hints: [
            "Beide Atome sind identisch → gleiche Elektronegativität",
            "ΔEN = 0 → keine Ladungstrennung → unpolar",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Geometrie hat das CO₂-Molekül?",
          options: [
            "Gewinkelt (wie H₂O)",
            "Trigonal-planar",
            "Tetraeder",
            "Linear",
            "Trigonal-pyramidal",
          ],
          correctIndex: 3,
          explanation: "Kohlenstoff in CO₂ ist sp¹-hybridisiert (2 Doppelbindungen, keine freien Elektronenpaare). Zwei bindende Gruppen → lineare Geometrie (180°). CO₂ hat trotz polarer C=O-Bindungen kein Dipolmoment (Dipole heben sich durch Symmetrie auf).",
          hints: [
            "CO₂ hat 2 Doppelbindungen und keine freien EP am C",
            "sp¹-Hybridisierung → linear",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Hybridisierung des Kohlenstoffs in CH₄?",
          options: [
            "sp",
            "sp²",
            "sp³",
            "sp³d",
            "p³",
          ],
          correctIndex: 2,
          explanation: "In CH₄ hat Kohlenstoff 4 Bindungspartner (4 C-H-Bindungen) und keine freien Elektronenpaare → sp³-Hybridisierung → Tetraedergeometrie mit Winkeln von 109,5°.",
          hints: [
            "4 Bindungspartner, keine freien EP → welche Hybridisierung?",
            "sp³ → Tetraeder → 109,5°",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welchen Bindungswinkel hat das NH₃-Molekül?",
          options: [
            "180°",
            "120°",
            "109,5°",
            "107°",
            "90°",
          ],
          correctIndex: 3,
          explanation: "N in NH₃ ist sp³-hybridisiert (3 N-H-Bindungen + 1 freies Elektronenpaar). Das freie EP ist räumlich anspruchsvoller → komprimiert die H-N-H-Winkel von idealem Tetraederwinkel (109,5°) auf ~107°.",
          hints: [
            "NH₃: sp³, aber ein freies Elektronenpaar",
            "Freie EP drücken die Bindungen zusammen → kleiner als 109,5°",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Bindungspolarität einer O-H-Bindung? (EN(O)=3,44, EN(H)=2,20)",
          options: [
            "Unpolar (ΔEN=0)",
            "Unpolar kovalent (ΔEN<0,4)",
            "Polar kovalent (ΔEN=1,24)",
            "Ionisch (ΔEN>1,7)",
            "Metallisch",
          ],
          correctIndex: 2,
          explanation: "ΔEN(O-H) = 3,44 − 2,20 = 1,24. Da 0,4 < 1,24 < 1,7, handelt es sich um eine polar kovalente Bindung. Sauerstoff trägt die partielle Negativladung (δ⁻), Wasserstoff die partielle Positivladung (δ⁺).",
          hints: [
            "Berechne ΔEN = EN(O) − EN(H)",
            "Grenzwerte: < 0,4 unpolar; 0,4-1,7 polar kovalent; > 1,7 ionisch",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-6-03',
      title: 'Van-der-Waals, Wasserstoffbrücken und Metallbindung',
      content: `## Van-der-Waals-Kräfte

Van-der-Waals-Kräfte sind schwache intermolekulare Kräfte zwischen Atomen und Molekülen:

**1. London-Dispersionskräfte** (London-Kräfte): Entstehen durch temporäre Dipolmomente (Fluktuation der Elektronenverteilung) → Induktion eines Dipols im Nachbarmolekül. Wirken zwischen allen Molekülen (auch unpolaren). Stärke nimmt mit Molmasse und Polarisierbarkeit zu. Erklären, warum F₂ (M=38) gasförmig, I₂ (M=254) fest ist.

**2. Dipol-Dipol-Kräfte**: Zwischen permanenten Dipolen. Polare Moleküle richten sich so aus, dass δ⁺ und δ⁻ benachbarter Moleküle aneinander liegen. Stärker als Dispersionskräfte bei kleinen Molekülen.

## Wasserstoffbrückenbindungen

**Wasserstoffbrücken** (H-Brücken) sind eine besondere Form der Dipol-Dipol-Wechselwirkung, die entsteht, wenn ein Wasserstoffatom, das kovalent an ein sehr elektronegatives Atom gebunden ist (N, O oder F als **Donor**), mit einem freien Elektronenpaar eines weiteren elektronegativen Atoms (N, O oder F als **Akzeptor**) wechselwirkt.

Stärke: ~10-40 kJ/mol (ca. 5-10× stärker als typische Van-der-Waals-Kräfte, aber 10-40× schwächer als kovalente Bindungen).

**Biologische Bedeutung**: H-Brücken erklären die hohen Siedepunkte von H₂O (100°C), HF (19°C) und NH₃ (−33°C) im Vergleich zu analogen Verbindungen. DNA-Basenpaarung: A-T durch 2 H-Brücken, G-C durch 3 H-Brücken. Proteinsekundärstruktur (α-Helix: 3,6 AS pro Windung, je 1 H-Brücke).

## Metallbindung

**Metallbindung**: Metall-Kationen sind in einem "Elektronengas" (Meer delokalierter Valenzelektronen) eingebettet. Eigenschaften: Elektrische Leitfähigkeit (mobile Elektronen), Wärmeleitfähigkeit, metallischer Glanz (Reflexion aller Wellenlängen), **Duktilität** und **Verformbarkeit** (Kationen können aneinander vorbeigleiten, Elektronengas passt sich an — kein Bruch wie bei Ionenverbindungen).

## Stärke-Vergleich

Kovalente Bindung (~150-800 kJ/mol) > Ionenbindung > Wasserstoffbrücken (10-40 kJ/mol) > Dipol-Dipol (1-10 kJ/mol) > London-Dispersion (0,1-5 kJ/mol)`,
      lernziele: [
        "London-Dispersionskräfte, Dipol-Dipol-Kräfte und Wasserstoffbrücken erklären und unterscheiden",
        "Die Bedingungen für Wasserstoffbrückenbildung (F/O/N als Donor und Akzeptor) nennen",
        "Die Metallbindung und ihre Eigenschaften beschreiben",
      ],
      sections: [
        {
          heading: "Wasserstoffbrücken im Detail",
          text: "Wasserstoffbrücken entstehen ausschließlich, wenn H kovalent an N, O oder F gebunden ist (starke polare Bindung → H trägt δ⁺) und ein freies Elektronenpaar eines weiteren N, O oder F als Akzeptor wirkt. Die Stärke der H-Brücken hängt von der Elektronegativität des Donors ab: F-H---F > O-H---O > N-H---N. Wasser bildet ein Netzwerk von durchschnittlich 3,6 H-Brücken pro Molekül (tetraedrisch). Der ungewöhnlich hohe Siedepunkt von Wasser (100°C) erklärt sich durch dieses starke Netzwerk: Zum Verdampfen müssen diese Brücken gebrochen werden. Im Vergleich: H₂S (kein H an O/N/F) siedet bei −60°C.",
        },
        {
          heading: "Van-der-Waals-Kräfte und Molmasse",
          text: "London-Dispersionskräfte nehmen mit der Molmasse zu, weil größere Moleküle mehr Elektronen haben, die leichter fluktuieren (höhere Polarisierbarkeit). Das erklärt, warum Edelgase mit steigender Atommasse höhere Siedepunkte haben: He (−269°C) < Ne (−246°C) < Ar (−186°C) < Kr (−152°C) < Xe (−108°C). Auch bei Halogenen: F₂ (−188°C, gas) < Cl₂ (−34°C, gas) < Br₂ (+59°C, flüssig) < I₂ (+184°C, fest). Für lineare Moleküle sind London-Kräfte stärker als für kompakte (mehr Kontaktfläche): n-Pentan (Sdp. 36°C) vs. Neopentan (Sdp. 9°C), trotz gleicher Formel C₅H₁₂.",
        },
      ],
      merksätze: [
        "H-Brücken: H kovalent an N/O/F → Wechselwirkung mit freiem EP von N/O/F",
        "Stärken: kovalent >> ionisch > H-Brücken > Dipol-Dipol > London",
        "Metallbindung: Elektronengas → leitfähig, duktil, glänzend",
      ],
      klinischerBezug: "Die DNA-Doppelhelix wird ausschließlich durch Wasserstoffbrücken und Stacking-Wechselwirkungen stabilisiert (keine kovalenten Bindungen zwischen den Strängen). Diese schwachen Bindungen ermöglichen das reversible Aufschmelzen der DNA für Replikation und Transkription — ein fundamentales Prinzip der molekularen Biologie.",
      altfrage: {
        question: "Warum hat Wasser (M=18 g/mol) einen höheren Siedepunkt als Schwefelwasserstoff H₂S (M=34 g/mol)?",
        answer: "Trotz niedrigerer Molmasse (weniger London-Dispersionskräfte) siedet Wasser bei 100°C, H₂S bei nur −60°C. Der Grund: Wasser bildet starke Wasserstoffbrücken (O-H---O), da H an Sauerstoff gebunden ist (hochelektronegativ). H₂S bildet keine H-Brücken (S ist zu wenig elektronegativ). Zum Verdampfen von Wasser müssen ~4 H-Brücken pro Molekül gebrochen werden.",
      },
      selfTest: [
        {
          question: "Welche der folgenden Verbindungen kann Wasserstoffbrücken bilden?",
          options: [
            "CH₄",
            "CCl₄",
            "H₂S",
            "NH₃",
            "SiH₄",
          ],
          correctIndex: 3,
          explanation: "Wasserstoffbrücken erfordern H, das an N, O oder F gebunden ist. In NH₃ ist H an Stickstoff (N) gebunden → NH₃ kann H-Brücken bilden. CH₄ (H an C), CCl₄ (kein H), H₂S (H an S, nicht N/O/F), SiH₄ (H an Si) können keine typischen H-Brücken bilden.",
          hints: [
            "Bedingung: H muss an N, O oder F gebunden sein",
            "Prüfe jede Verbindung: Ist H an N, O oder F gebunden?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum ist Iod (I₂) bei Raumtemperatur fest, obwohl es eine nichtpolare Verbindung ist?",
          options: [
            "Weil I₂ ionische Bindungen bildet",
            "Weil I₂ Wasserstoffbrücken bilden kann",
            "Weil London-Dispersionskräfte bei I₂ durch die hohe Molmasse (254 g/mol) stark genug sind",
            "Weil I₂ ein polares Molekül ist",
            "Weil I₂ metallische Bindungen aufweist",
          ],
          correctIndex: 2,
          explanation: "I₂ ist zwar unpolar (ΔEN=0), hat aber starke London-Dispersionskräfte durch die hohe Molmasse von 254 g/mol (viele, leicht polarisierbare Elektronen). Diese Kräfte sind stark genug, um I₂ bei Raumtemperatur in festem Zustand zu halten (Sdp. 184°C).",
          hints: [
            "London-Kräfte nehmen mit der Molmasse zu",
            "Vergleiche F₂ (M=38, gas) mit I₂ (M=254)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was erklärt die elektrische Leitfähigkeit von Metallen?",
          options: [
            "Metalle enthalten bewegliche Ionen im Gitter",
            "Metalle haben freie, delokalisierte Valenzelektronen (Elektronengas)",
            "Metalle bilden polare kovalente Bindungen, die Ladungen transportieren",
            "Metalle haben eine hohe Elektronegativität",
            "Metalle sind ionische Verbindungen mit beweglichen Kationen",
          ],
          correctIndex: 1,
          explanation: "Im Metallgitter sind Metallatome als Kationen fixiert, während ihre Valenzelektronen frei im Kristall delokalisiert sind (Elektronengas). Unter elektrischem Potential bewegen sich diese Elektronen gerichtet → elektrischer Strom.",
          hints: [
            "Was ist das besondere an der Metallbindung?",
            "Leitfähigkeit erfordert bewegliche Ladungsträger",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie viele Wasserstoffbrücken verbinden die Basen A und T in der DNA?",
          options: [
            "1",
            "2",
            "3",
            "4",
            "5",
          ],
          correctIndex: 1,
          explanation: "Das Basenpaar Adenin-Thymin (A-T) ist durch 2 Wasserstoffbrücken verbunden. Das Basenpaar Guanin-Cytosin (G-C) ist durch 3 Wasserstoffbrücken verbunden und damit stabiler. Dies erklärt, warum GC-reiche DNA-Abschnitte eine höhere Schmelztemperatur haben.",
          hints: [
            "A-T: 2 H-Brücken; G-C: 3 H-Brücken — merken!",
            "G-C ist stabiler, weil es mehr H-Brücken bildet",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Eigenschaft erklärt die Verformbarkeit (Duktilität) von Metallen im Gegensatz zur Sprödigkeit von Ionenkristallen?",
          options: [
            "Metalle haben kovalente Bindungen, die in alle Richtungen gleich stark sind",
            "Im Elektronengas-Modell können Metallkationen aneinander vorbeigleiten, ohne die Bindungsstruktur zu zerstören",
            "Metalle haben keine Bindungskräfte und fließen deshalb leicht",
            "Ionenkristalle sind gasförmig und daher nicht formbar",
            "Metallbindungen sind stärker als ionische Bindungen",
          ],
          correctIndex: 1,
          explanation: "Im Metallgitter sind Kationen im Elektronengas eingebettet. Wenn eine Schicht an der anderen vorbeigleitet, passt sich das Elektronengas an → keine Abstoßung. In Ionenkristallen würden beim Gleiten gleich geladene Ionen benachbart werden → Abstoßung → Bruch.",
          hints: [
            "Warum brechen Ionenkristalle bei Druck statt sich zu verbiegen?",
            "Das Elektronengas ist flexibel und passt sich an",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-6-04',
      title: 'Chemische Bindungen in biologischen Molekülen',
      content: `## Die Peptidbindung

Die **Peptidbindung** (C-N-Bindung) verbindet Aminosäuren zum Polypeptid durch Kondensation (Abspaltung von H₂O). Die Peptidbindung ist **planar** (eben), weil das freie Elektronenpaar des Stickstoffs in das π-System der C=O-Bindung delokalisiert wird → partieller Doppelbindungscharakter (C-N ist kürzer und stabiler als eine normale C-N-Einfachbindung). Diese Starrheit der Peptidbindung (Rotationsbarriere ~80 kJ/mol) ist Voraussetzung für definierte Sekundärstrukturen (α-Helix, β-Faltblatt).

## Disulfidbrücken

Zwei Cysteinreste bilden eine **Disulfidbrücke** (-S-S-) durch Oxidation der Thiol-Gruppen (-SH). Disulfidbrücken sind kovalent und daher wesentlich stabiler als nichtkovalente Wechselwirkungen. Sie stabilisieren die Tertiärstruktur extrazellulärer Proteine (z.B. Antikörper, Insulin: 2 Disulfidbrücken verbinden A- und B-Kette, 1 innerhalb der A-Kette).

## DNA-Basenpaarung

Die beiden Stränge der DNA-Doppelhelix werden durch **Wasserstoffbrücken** zwischen komplementären Basen zusammengehalten: Adenin-Thymin (2 H-Brücken), Guanin-Cytosin (3 H-Brücken). Die Stapelwechselwirkungen (π-π-Stacking, ~1-4 kJ/mol/Basenpaar) zwischen benachbarten Basenpaaren tragen ebenfalls zur Stabilität bei. Die schwachen, reversiblen H-Brücken ermöglichen das Entfalten der DNA für Replikation und Transkription.

## Enzym-Substrat-Bindung

Die Bindung eines Substrats im aktiven Zentrum eines Enzyms beruht auf **nicht-kovalenten Wechselwirkungen**: Wasserstoffbrücken, ionische Wechselwirkungen, hydrophobe Wechselwirkungen (Van-der-Waals) und selten koordinative Bindungen (Metalloenzyme). Kovalente Bindungen entstehen nur als intermediäre Zustände (kovalente Katalyse, z.B. Serin-Proteasen: Acyl-Enzym-Intermediat). Die hochspezifische, reversible Bindung erklärt die Enzymspezifität (Schlüssel-Schloss-Prinzip, Induced-Fit-Modell).

## Membranlipide und hydrophobe Wechselwirkungen

In biologischen Membranen ordnen sich amphiphile Phospholipide zur **Lipiddoppelschicht**: Hydrophile Köpfe (Phosphat, Glycerin) nach außen (Kontakt mit Wasser), hydrophobe Schwänze (Fettsäureketten) nach innen. Die **hydrophobe Wechselwirkung** ist keine direkte Anziehungskraft, sondern ein Entropie-getriebener Prozess: Unpolare Gruppen stören die Wasserstruktur und werden aus dem Wasser verdrängt.`,
      lernziele: [
        "Die Peptidbindung in Bezug auf Planarität und partiellen Doppelbindungscharakter erklären",
        "Disulfidbrücken und ihre Bedeutung für die Proteinstruktur beschreiben",
        "Die nicht-kovalenten Wechselwirkungen in biologischen Makromolekülen (DNA, Enzyme, Membranen) zuordnen",
      ],
      sections: [
        {
          heading: "Kovalente vs. nicht-kovalente Bindungen in Proteinen",
          text: "Proteine haben eine vierstufige Strukturhierarchie. Die Primärstruktur (Aminosäuresequenz) wird durch kovalente Peptidbindungen (und Disulfidbrücken bei Tertiärstruktur) stabilisiert. Sekundärstrukturen (α-Helix, β-Faltblatt) werden durch Wasserstoffbrücken zwischen N-H und C=O-Gruppen der Peptidbindungen stabilisiert (im α-Helix: jede AS bildet eine H-Brücke mit der 4. AS aufwärts). Die Tertiärstruktur wird durch eine Kombination aus Disulfidbrücken, ionischen Wechselwirkungen (Salzbrücken), Wasserstoffbrücken und hydrophoben Wechselwirkungen stabilisiert. Die Quartärstruktur (Zusammenlagerung mehrerer Untereinheiten) wird meist durch hydrophobe Wechselwirkungen und H-Brücken an der Kontaktfläche stabilisiert.",
        },
        {
          heading: "Insulin: ein Modell für Bindungstypen in Proteinen",
          text: "Insulin ist ein kompaktes Beispiel für alle Bindungstypen in Proteinen. Die Primärstruktur: 51 Aminosäuren in zwei Ketten (A: 21 AS, B: 30 AS), verbunden durch 2 intermolekulare Disulfidbrücken (A7-B7 und A20-B19) sowie 1 intramolekulare Disulfidbrücke in der A-Kette (A6-A11). Die Tertiärstruktur wird durch α-Helices (H-Brücken), hydrophobe Kern (Leu, Val, Ile) und die Disulfidbrücken stabilisiert. Insulin liegt physiologisch als Hexamer vor: 6 Insulin-Monomere + 2 Zn²⁺ (koordinative Bindungen an His-Reste der B-Kette). Die Zn²⁺-Koordination ist wichtig für die Speicherung in Sekretgranula des Pankreas.",
        },
      ],
      merksätze: [
        "Peptidbindung: planar, partieller Doppelbindungscharakter, durch Resonanz stabilisiert",
        "Disulfidbrücken: kovalent (-S-S-), stabilisieren Tertiärstruktur extrazellulärer Proteine",
        "DNA-Stränge: durch H-Brücken verbunden (A-T: 2, G-C: 3) — reversibel!",
      ],
      klinischerBezug: "Reduzierende Mittel (Dithiothreitol, β-Mercaptoethanol) spalten Disulfidbrücken in Proteinen und werden in der Biochemie zur Denaturierung und in der Medizin therapeutisch genutzt (N-Acetylcystein spaltet Disulfidbrücken in Mucinen → schleimlösend bei Mukoviszidose).",
      altfrage: {
        question: "Warum ist die Peptidbindung planar?",
        answer: "Das freie Elektronenpaar des Stickstoffs in der Peptidbindung (-CO-NH-) kann mit dem π-System der Carbonylgruppe (C=O) in Resonanz treten. Dadurch hat die C-N-Bindung partiellen Doppelbindungscharakter, und alle vier Atome (C, O, N, H) liegen in einer Ebene. Die Rotationsbarriere um die C-N-Bindung beträgt ~80 kJ/mol. Diese Starrheit ist Voraussetzung für definierte Proteinsekundärstrukturen.",
      },
      selfTest: [
        {
          question: "Was ist die biochemische Reaktion, durch die eine Peptidbindung geknüpft wird?",
          options: [
            "Oxidation zweier Aminogruppen",
            "Kondensationsreaktion zwischen Carboxylgruppe und Aminogruppe mit Wasserabspaltung",
            "Additionsreaktion zwischen zwei Doppelbindungen",
            "Disulfidbildung zwischen zwei Cysteinen",
            "Phosphorylierung der Aminogruppe durch ATP",
          ],
          correctIndex: 1,
          explanation: "Die Peptidbindung entsteht durch Kondensation: Die Carboxylgruppe (-COOH) einer Aminosäure reagiert mit der Aminogruppe (-NH₂) der nächsten unter Abspaltung von Wasser (H₂O) → -CO-NH- (Peptidbindung) + H₂O.",
          hints: [
            "Kondensation = Reaktion unter Wasserabspaltung",
            "Welche funktionellen Gruppen der Aminosäuren reagieren miteinander?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Durch welche Art von Wechselwirkung werden die komplementären DNA-Stränge in der Doppelhelix zusammengehalten?",
          options: [
            "Kovalente Bindungen zwischen den Basen",
            "Ionische Wechselwirkungen zwischen Phosphatgruppen",
            "Wasserstoffbrücken zwischen komplementären Basenpaaren",
            "Disulfidbrücken zwischen Cytosin und Guanin",
            "Metallbindungen über Mg²⁺-Ionen",
          ],
          correctIndex: 2,
          explanation: "Die beiden DNA-Stränge werden durch Wasserstoffbrücken zwischen komplementären Basen zusammengehalten: A-T durch 2 H-Brücken, G-C durch 3 H-Brücken. Diese nicht-kovalenten, reversiblen Bindungen ermöglichen das Aufschmelzen der DNA für Replikation und Transkription.",
          hints: [
            "DNA-Stränge können für Replikation getrennt werden — welche Bindung erlaubt das?",
            "A-T: 2 H-Brücken; G-C: 3 H-Brücken",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist eine Disulfidbrücke und welche Aminosäure ist daran beteiligt?",
          options: [
            "Eine H-Brücke zwischen zwei Serin-Resten",
            "Eine kovalente S-S-Bindung zwischen zwei Cystein-Resten (nach Oxidation der SH-Gruppen)",
            "Eine ionische Bindung zwischen positiv und negativ geladenem Aminosäurerest",
            "Eine Van-der-Waals-Wechselwirkung zwischen zwei hydrophoben Aminosäuren",
            "Eine kovalente N-N-Bindung zwischen zwei Lysin-Resten",
          ],
          correctIndex: 1,
          explanation: "Disulfidbrücken (-S-S-) entstehen durch Oxidation zweier Thiol-Gruppen (-SH) von Cystein-Resten: 2 Cys-SH + [O] → Cys-S-S-Cys + H₂O. Die dabei entstehende kovalente S-S-Bindung ist deutlich stabiler als H-Brücken und stabilisiert die Tertiär- und Quartärstruktur von Proteinen.",
          hints: [
            "Welche Aminosäure hat eine Thiol-Gruppe (-SH)?",
            "Zwei -SH-Gruppen können zu -S-S- oxidiert werden",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist das Prinzip der reversiblen Enzym-Substrat-Bindung für die Katalyse wichtig?",
          options: [
            "Weil kovalente Bindungen die schnellste Katalyse ermöglichen",
            "Weil nicht-kovalente Bindungen das Substrat binden, aber die Produkte leicht freisetzen können",
            "Weil Enzyme mit jedem Substrat eine kovalente Bindung eingehen und diese dann gespalten wird",
            "Weil reversible Bindungen die Substratspezifität verringern und Enzyme vielseitiger machen",
            "Weil reversible Bindungen verhindern, dass das Substrat überhaupt gebunden wird",
          ],
          correctIndex: 1,
          explanation: "Enzyme binden Substrate durch nicht-kovalente Wechselwirkungen (H-Brücken, ionische Wechselwirkungen, hydrophobe Kräfte). Diese sind stark genug zur Bindung und Aktivierung des Substrats, aber schwach genug, um die Produkte nach der Reaktion freizusetzen → Enzym kann erneut binden und ist ein echter Katalysator (nicht verbraucht).",
          hints: [
            "Ein Katalysator wird nach der Reaktion regeneriert",
            "Kovalente Bindungen wären zu stabil → Produkt könnte nicht freigesetzt werden",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was erklärt die Bildung der Lipiddoppelschicht in biologischen Membranen?",
          options: [
            "Kovalente Bindungen zwischen den Fettsäureketten benachbarter Lipide",
            "Der hydrophobe Effekt: Entropie-getriebene Aggregation unpolarer Bereiche im wässrigen Milieu",
            "Ionische Wechselwirkungen zwischen den negativ geladenen Phosphatköpfen",
            "Disulfidbrücken zwischen den Lipidfettsäuren",
            "Wasserstoffbrücken zwischen den Fettsäureketten und Wasser",
          ],
          correctIndex: 1,
          explanation: "Der hydrophobe Effekt ist entropie-getrieben: Unpolare Fettsäureketten stören die Struktur des umgebenden Wassers (zwingen Wassermoleküle in geordnete Käfigstrukturen → Entropieverringerung). Wenn sich die unpolaren Bereiche zusammenlagern, werden Wassermoleküle freigesetzt → Entropiegewinn → spontane Doppelschichtbildung.",
          hints: [
            "Hydrophob = wasserabweisend; Membranlipide sind amphiphil",
            "Der hydrophobe Effekt ist ein Entropieeffekt, keine direkte Anziehungskraft",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
