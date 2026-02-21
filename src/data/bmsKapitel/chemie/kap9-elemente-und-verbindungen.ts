import type { Kapitel } from '../types';

export const chemKap9: Kapitel = {
  id: "chem-kap9",
  title: "Elemente und Verbindungen",
  subject: "chemie",
  icon: "🧪",
  estimatedTime: "45 min",
  unterkapitel: [
    {
      id: "ch-9-01",
      title: "Wasser — Eigenschaften und biologische Bedeutung",
      content: `## Struktur des Wassermoleküls

Wasser (H₂O) ist ein Dipolmolekül mit einem Bindungswinkel von **104,5°**. Die Sauerstoff-Wasserstoff-Bindungen sind stark polar (Elektronegativitätsdifferenz ΔEN = 1,4), und die gewinkelte Geometrie führt zu einem permanenten Dipolmoment von **μ = 1,85 D** (Debye). Diese Asymmetrie ist die Grundlage für alle außergewöhnlichen Eigenschaften des Wassers.

## Wasserstoffbrückenbindungen — Netzwerk mit Konsequenzen

Jedes Wassermolekül kann vier Wasserstoffbrücken ausbilden (zwei als Donor über H-Atome, zwei als Akzeptor über die freien Elektronenpaare des O). Dieses dreidimensionale Netzwerk erklärt:

- **Hoher Siedepunkt** (100 °C bei 1 atm): Im Vergleich zu H₂S (−60 °C) oder H₂Se (−41 °C) mit gleicher Masse, aber ohne H-Brücken
- **Hohe spezifische Wärmekapazität** (4182 J/kg·K): Wasser kann viel Wärme aufnehmen, ohne die Temperatur stark zu ändern — wichtig für Körpertemperaturregulation
- **Hohe Oberflächenspannung** (72 mN/m bei 20 °C): Ermöglicht Kapillarkräfte im Xylem und Wasserläufern das Laufen auf der Oberfläche

## Dichteanomalie des Wassers

Wasser hat seine **maximale Dichte bei 4 °C** (1,000 kg/L). Beim Gefrieren entsteht Eis mit geordneter hexagonaler Gitterstruktur (weniger dicht als flüssiges Wasser). Eis schwimmt auf Wasser — biologisch entscheidend: Seen frieren von oben, das Wasser darunter bleibt flüssig und ermöglicht das Überleben von Organismen.

## Wasser als Lösungsmittel

Wasser ist ein **universales Lösungsmittel** für polare und ionische Substanzen (hydrophil). Ionen werden von Hydratationshüllen umgeben. Unpolare Substanzen sind wasserunlöslich (hydrophob) — der hydrophobe Effekt treibt Micellbildung und Membranaufbau voran.

## Autoprotolyse und Amphoterizität

Wasser reagiert mit sich selbst:
**2 H₂O ⇌ H₃O⁺ + OH⁻**
Ionenprodukt: **K_w = [H₃O⁺]·[OH⁻] = 10⁻¹⁴** (bei 25 °C)
Im reinen Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7.

Wasser ist **amphiprot/amphoter**: Es kann als Säure (H⁺-Donor) oder als Base (H⁺-Akzeptor) reagieren, je nach Reaktionspartner.`,
      lernziele: [
        "Die molekulare Struktur des Wassers und die Entstehung des Dipolcharakters erklären",
        "Die außergewöhnlichen Eigenschaften des Wassers auf das H-Brückennetzwerk zurückführen",
        "Autoprotolyse, K_w und die amphotere Natur des Wassers beschreiben",
      ],
      sections: [
        {
          heading: "H-Brücken und biologische Relevanz",
          text: "Wasserstoffbrückenbindungen (H-Brücken) entstehen zwischen dem teilweise positiv geladenen H-Atom eines Donors (O-H, N-H, F-H) und dem freien Elektronenpaar eines Akzeptors (O, N, F). In Wasser sind alle Moleküle gleichzeitig Donor und Akzeptor, was ein dreidimensionales Netzwerk ergibt. Die Bindungsenergie einer einzelnen H-Brücke beträgt ca. 20 kJ/mol — deutlich schwächer als kovalente Bindungen mit ca. 400 kJ/mol, aber durch die hohe Anzahl sehr bedeutsam. In Proteinen und DNA stabilisieren H-Brücken Sekundärstrukturen (α-Helix, β-Faltblatt, Doppelhelix). In der Physiologie ermöglicht das H-Brückennetzwerk des Wassers den Wasserhaushalt des Körpers und die thermoregulatorische Verdunstungskühlung durch Schweiß.",
          merksatz: "H-Brücken: ca. 20 kJ/mol — schwach einzeln, stark als Netzwerk",
        },
        {
          heading: "Dichteanomalie und K_w",
          text: "Die Dichteanomalie des Wassers (Maximum bei 4 °C, Eis weniger dicht als Wasser) entsteht durch die hexagonale Eisstruktur mit großen Hohlräumen. Biologisch bedeutsam: Seen frieren von oben und isolieren das darunterliegende Wasser. Das Ionenprodukt K_w = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ (25 °C) gilt für alle wässrigen Lösungen. Mit K_w kann man aus dem pH den pOH berechnen: pOH = 14 − pH. K_w ist temperaturabhängig — bei 37 °C (Körpertemperatur) gilt K_w ≈ 2,4 × 10⁻¹⁴, also ist neutrales Wasser bei 37 °C pH ≈ 6,8, nicht 7,0.",
          merksatz: "K_w = 10⁻¹⁴ bei 25 °C; pH + pOH = 14",
        },
      ],
      merksätze: [
        "Wasser: Dipolmolekül, 104,5°, μ=1,85 D → H-Brücken",
        "Dichteanomalie: Eis schwimmt — Maximum bei 4 °C",
        "K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ → pH 7 = neutral (25 °C)",
      ],
      klinischerBezug: "Die hohe Wärmekapazität des Wassers ist entscheidend für die Körpertemperaturregulation. Der Körper besteht zu ca. 60 % aus Wasser, das als Wärmepuffer dient. Verdunstung von 1 L Schweiß entzieht dem Körper ca. 2430 kJ (Verdampfungsenthalpie) — effiziente Kühlung bei Sport und Fieber.",
      altfrage: {
        question: "Warum hat Wasser einen so viel höheren Siedepunkt als Schwefelwasserstoff H₂S?",
        answer: "Wasser bildet durch seinen Dipolcharakter ein ausgeprägtes Netzwerk von Wasserstoffbrückenbindungen zwischen den Molekülen. H₂S ist zwar größer (schwerere Molekülmasse), kann aber kaum H-Brücken ausbilden (S ist zu wenig elektronegativ). Die H-Brücken in Wasser erfordern deutlich mehr Energie zum Überwinden → viel höherer Siedepunkt (100 °C vs. −60 °C).",
      },
      selfTest: [
        {
          question: "Welche molekulare Eigenschaft des Wassers erklärt seinen hohen Siedepunkt von 100 °C?",
          options: [
            "Hohe Molmasse des Wassermoleküls",
            "Kovalente O-H-Bindungen mit hoher Bindungsenergie",
            "Ausgeprägtes Netzwerk von Wasserstoffbrückenbindungen",
            "Ionische Wechselwirkungen zwischen H⁺ und OH⁻",
            "Van-der-Waals-Kräfte zwischen H₂O-Molekülen",
          ],
          correctIndex: 2,
          explanation: "Wasser hat einen ungewöhnlich hohen Siedepunkt für seine Molmasse (18 g/mol), weil jedes Wassermolekül bis zu vier Wasserstoffbrückenbindungen ausbilden kann. Dieses ausgedehnte H-Brückennetzwerk muss beim Verdampfen aufgebrochen werden, was viel Energie erfordert. H₂S hat trotz höherer Molmasse nur Sdp. −60 °C (keine H-Brücken).",
          hints: [
            "Vergleiche Wasser mit H₂S trotz ähnlicher Struktur",
            "Was unterscheidet O und S bei der H-Brückenbildung?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wasser hat bei 4 °C seine höchste Dichte. Was bedeutet das für Seen im Winter?",
          options: [
            "Seen frieren von unten, weil Eis die höchste Dichte hat",
            "Seen frieren von oben; das 4-°C-Wasser sinkt auf den Grund",
            "Das ganze Wasser gefriert gleichzeitig",
            "Die Dichteanomalie hat keinen Einfluss auf Seen",
            "Eis ist dichter als Wasser und sinkt",
          ],
          correctIndex: 1,
          explanation: "Wasser bei 4 °C ist am dichtesten und sinkt auf den Seegrund. Wasser an der Oberfläche kühlt weiter ab (unter 4 °C, wieder weniger dicht) und bildet schließlich Eis, das mit ca. 0,917 g/cm³ weniger dicht ist als Wasser und an der Oberfläche schwimmt. So frieren Seen von oben — das Eis isoliert das darunter liegende flüssige Wasser.",
          hints: [
            "Welches Wasser ist am schwersten und sinkt?",
            "Schwimmt Eis oder sinkt es?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Das Ionenprodukt des Wassers K_w = 10⁻¹⁴ gilt bei 25 °C. Was bedeutet das für reines Wasser?",
          options: [
            "[H₃O⁺] = 10⁻¹⁴ mol/L und [OH⁻] = 1 mol/L",
            "[H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7",
            "[H₃O⁺] = 10⁻⁷ mol/L und [OH⁻] = 10⁻¹⁴ mol/L",
            "Wasser enthält keine H₃O⁺-Ionen",
            "[H₃O⁺] = 10⁻¹⁴ mol/L → pH = 14",
          ],
          correctIndex: 1,
          explanation: "In reinem Wasser entstehen durch Autoprotolyse gleiche Mengen H₃O⁺ und OH⁻. Da K_w = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ und [H₃O⁺] = [OH⁻] = x, folgt x² = 10⁻¹⁴ → x = 10⁻⁷ mol/L. pH = −log(10⁻⁷) = 7. Daher ist pH 7 der neutrale Punkt bei 25 °C.",
          hints: [
            "In reinem Wasser: [H₃O⁺] = [OH⁻]",
            "K_w = x² → x = √(10⁻¹⁴)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist Wasser ein universales Lösungsmittel für Salze wie NaCl?",
          options: [
            "Wasser reagiert chemisch mit NaCl",
            "Wasser-Dipolmoleküle umgeben Ionen durch Hydratation und stabilisieren die Lösung",
            "NaCl ist kovalent und passt in H-Brücken",
            "Wasser hat eine hohe Dichte und kann Ionen mechanisch einschließen",
            "Salze sind gasförmig und lösen sich in jedem Lösungsmittel",
          ],
          correctIndex: 1,
          explanation: "Wasser ist ein Dipol: das δ⁻-Ende (O) wird von Kationen (Na⁺) angezogen, das δ⁺-Ende (H) von Anionen (Cl⁻). Diese Hydratationshüllen umgeben die Ionen und kompensieren die Gitterenergie des Salzes. Nur polare und ionische Verbindungen lösen sich gut in Wasser (like dissolves like).",
          hints: [
            "Wasser ist ein Dipol — welches Ende zieht Kationen an?",
            "Hydratation stabilisiert Ionen in Lösung",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wasser ist amphiprot. Was bedeutet das?",
          options: [
            "Wasser reagiert nur als Säure (H⁺-Donor)",
            "Wasser reagiert nur als Base (H⁺-Akzeptor)",
            "Wasser kann je nach Reaktionspartner als Säure oder Base reagieren",
            "Wasser kann weder Säure noch Base sein",
            "Wasser bildet amphotere Salze",
          ],
          correctIndex: 2,
          explanation: "Amphoter/amphiprot bedeutet, dass eine Substanz sowohl als Protonendonor (Säure) als auch als Protonenakzeptor (Base) reagieren kann. Wasser gibt H⁺ an starke Basen ab (verhält sich als Säure) oder nimmt H⁺ von Säuren auf (verhält sich als Base). Die Autoprotolyse 2H₂O ⇌ H₃O⁺ + OH⁻ zeigt beide Rollen gleichzeitig.",
          hints: [
            "Amphoter = kann beides: Säure und Base",
            "Wie reagiert Wasser mit HCl vs. NH₃?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-9-02",
      title: "Kohlenstoff und seine Verbindungen",
      content: `## Allotrope des Kohlenstoffs

Kohlenstoff ist einzigartig in seiner Fähigkeit, mehrere stabile Modifikationen (Allotrope) mit unterschiedlichen Eigenschaften zu bilden:

- **Diamant (sp³-Hybridisierung):** Jedes C-Atom ist tetraedrisch von vier anderen C-Atomen umgeben. Härtestes natürliches Material, Isolator, transparent. Alle vier Valenzelektronen in σ-Bindungen gebunden.
- **Graphit (sp²-Hybridisierung):** Schichtstruktur aus hexagonalen Ringen. Das nicht hybridisierte p-Elektron delokalisiert über die gesamte Schicht → elektrische Leitfähigkeit, Schmiermittel (Schichten gleiten leicht). Weiches Material.
- **Fulleren (C₆₀):** Käfigmoleküle aus 60 C-Atomen (Buckminster-Fulleren). Potenzial als Wirkstoffträger.
- **Graphen:** Einzelne Graphitschicht, 2D-Material, extrem hohe Leitfähigkeit und Festigkeit. Nobelpreis 2010.

## Kohlendioxid (CO₂)

CO₂ ist ein lineares Molekül (O=C=O, sp-Hybridisierung). Trotz polarer C=O-Doppelbindungen ist CO₂ **nicht polar** (Dipolmomente heben sich auf). CO₂ ist in Wasser leicht löslich (Kohlensäure):

**CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**

pK_s1 = 6,4 (erste Dissoziation), pK_s2 = 10,3. CO₂ ist der häufigste Stoff im Blut neben O₂ — als HCO₃⁻ transportiert (Chlorid-Shift in Erythrozyten).

## Kohlenmonoxid (CO)

CO ist ein farb- und geruchloses, hochgiftiges Gas. Es bindet Hämoglobin mit ca. 250-fach höherer Affinität als O₂ (Carboxyhämoglobin, COHb) und blockiert den O₂-Transport. Zudem hemmt CO die Cytochrom-c-Oxidase in der Atmungskette.

## Kohlensäure und Bicarbonat-Puffer

H₂CO₃ (pK_s1 = 6,4) und HCO₃⁻ bilden den wichtigsten Puffer im Blut (pH 7,35–7,45). Überschuss-CO₂ wird als HCO₃⁻ transportiert und in der Lunge wieder als CO₂ abgeatmet.

## Calciumcarbonat (Kalkstein, CaCO₃) und Hartwasser

CaCO₃ ist schwerlöslich (K_L = 3,3 × 10⁻⁹). Lösung in CO₂-haltigem Wasser:

**CaCO₃ + CO₂ + H₂O ⇌ Ca²⁺ + 2 HCO₃⁻**

Dies erklärt Karsthöhlen, Hartwasser (Ca²⁺ + Mg²⁺) und Kalkablagerungen in Rohren.`,
      lernziele: [
        "Die Allotrope des Kohlenstoffs (Diamant, Graphit, Fulleren, Graphen) nach Hybridisierung und Eigenschaften unterscheiden",
        "Die Eigenschaften von CO₂ und CO und deren biologische Bedeutung erläutern",
        "Das Bicarbonat-Puffersystem als CO₂/HCO₃⁻-Gleichgewicht verstehen",
      ],
      sections: [
        {
          heading: "sp³ vs. sp²-Hybridisierung bei Kohlenstoff",
          text: "Die Hybridisierung bestimmt die Geometrie und Eigenschaften von Kohlenstoffverbindungen. sp³-Hybridisierung: Vier gleichwertige sp³-Orbitale in tetraedrischer Anordnung (109,5°). In Diamant führt dies zu einem extrem stabilen 3D-Netzwerk. sp²-Hybridisierung: Drei sp²-Orbitale in einer Ebene (120°), ein p-Orbital senkrecht dazu. In Graphit bilden diese p-Orbitale das delokalisierte π-System, das Elektrizität leitet. sp-Hybridisierung: Lineare Anordnung (180°), zwei p-Orbitale für π-Bindungen, wie in Alkinen oder CO₂. Die Hybridisierung erklärt, warum Diamant hart und isolierend, Graphit weich und leitend ist — beide aus reinem Kohlenstoff.",
          merksatz: "Diamant: sp³ (hart, Isolator); Graphit: sp² (weich, Leiter)",
        },
        {
          heading: "CO-Vergiftung und klinische Relevanz",
          text: "Kohlenmonoxid entsteht bei unvollständiger Verbrennung (Kohleöfen, Abgase, Rauchen). Die Affinität von CO zu Hämoglobin ist ca. 250-mal höher als die von O₂. Das entstehende Carboxyhämoglobin (COHb) kann keinen O₂ mehr transportieren. Zusätzlich verschiebt CO die O₂-Bindungskurve des Hb nach links (erhöhte O₂-Affinität des Rest-Hb, schlechtere Abgabe). Therapie: 100 % O₂ (verdrängt CO), Hyperbar-O₂-Therapie bei schwerer Vergiftung. Klinisch: COHb-Spiegel über 50 % ist lebensbedrohlich; kirschrote Verfärbung der Haut (CO-Hb ist hellrot).",
          merksatz: "CO: 250× höhere Hb-Affinität als O₂ → Asphyxie",
        },
      ],
      merksätze: [
        "Diamant sp³ (hart), Graphit sp² (leitend), Graphen: 2D-Einzelschicht",
        "CO₂: linear, unpolar; CO: giftig, 250× Hb-Affinität",
        "Bicarbonat-Puffer: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻",
      ],
      klinischerBezug: "CO-Vergiftung ist ein medizinischer Notfall: Symptome (Kopfschmerz, Schwindel, Bewusstlosigkeit) durch O₂-Mangel trotz normaler Sauerstoffsättigung im Pulsoximeter (misst nicht COHb). Diagnose: Blutgasanalyse mit COHb-Bestimmung.",
      altfrage: {
        question: "Warum ist Graphit elektrisch leitend, Diamant aber nicht?",
        answer: "In Graphit liegen sp²-hybridisierte C-Atome vor. Das nicht hybridisierte p-Elektron jedes C-Atoms delokalisiert über das gesamte π-System der Graphitschicht und kann sich frei bewegen → elektrische Leitfähigkeit. In Diamant sind alle vier Valenzelektronen in sp³-σ-Bindungen gebunden und können sich nicht frei bewegen → Isolator.",
      },
      selfTest: [
        {
          question: "Welche Hybridisierung hat Kohlenstoff in Diamant?",
          options: [
            "sp-Hybridisierung (linear)",
            "sp²-Hybridisierung (trigonal planar)",
            "sp³-Hybridisierung (tetraedrisch)",
            "d²sp³-Hybridisierung (oktaedrisch)",
            "Keine Hybridisierung (reines p-Orbital)",
          ],
          correctIndex: 2,
          explanation: "In Diamant ist jedes Kohlenstoffatom sp³-hybridisiert: vier sp³-Orbitale zeigen tetraedrisch auf vier benachbarte C-Atome (Bindungswinkel 109,5°). Alle vier Valenzelektronen sind in σ-Bindungen gebunden, es gibt keine freien Elektronen → Diamant ist hart und isolierend.",
          hints: [
            "Tetraedrische Geometrie entspricht welcher Hybridisierung?",
            "Wie viele Bindungspartner hat ein C-Atom in Diamant?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "CO₂ ist trotz polarer C=O-Bindungen als Molekül unpolar. Warum?",
          options: [
            "Die C=O-Bindungen sind kovalent, nicht ionisch",
            "CO₂ ist ein lineares Molekül und die Dipolmomente der C=O-Bindungen heben sich auf",
            "O ist weniger elektronegativ als C",
            "CO₂ hat keine freien Elektronenpaare",
            "Alle dreiatomigen Moleküle sind unpolar",
          ],
          correctIndex: 1,
          explanation: "CO₂ hat die lineare Struktur O=C=O. Beide C=O-Bindungen sind polar (δ⁻ auf O, δ⁺ auf C), aber die Dipolmomente zeigen in entgegengesetzte Richtungen und heben sich vektoriell auf → Gesamtdipolmoment = 0 (unpolar). Dagegen ist H₂O gewinkelt (104,5°) → Dipolmomente addieren sich → polar.",
          hints: [
            "Lineare Moleküle mit zwei gleichen Bindungspartnern sind meist unpolar",
            "Addiere die Dipolmomente vektoriell",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist Kohlenmonoxid (CO) für den Menschen gefährlich?",
          options: [
            "CO ist stark sauer und schädigt die Atemwege",
            "CO oxidiert Hämoglobin irreversibel zu Methämoglobin",
            "CO bindet Hämoglobin mit ca. 250-fach höherer Affinität als O₂ und blockiert O₂-Transport",
            "CO denaturiert Lungenproteine",
            "CO reagiert mit O₂ im Blut zu CO₂",
          ],
          correctIndex: 2,
          explanation: "CO bindet an das Eisen(II) im Hämoglobin mit einer ca. 250-fach höheren Affinität als O₂ und bildet stabiles Carboxyhämoglobin (COHb). Dieses kann keinen O₂ mehr transportieren. Zusätzlich hemmt CO die Cytochrom-c-Oxidase in der Atmungskette. Das Ergebnis ist eine schwere Gewebehypoxie trotz ausreichendem Hämoglobin.",
          hints: [
            "Wie stark bindet CO im Vergleich zu O₂?",
            "Was ist Carboxyhämoglobin?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Reihe beschreibt Diamant, Graphen und Fulleren korrekt?",
          options: [
            "sp³ → sp² (Einzelschicht) → sp²-Käfig (C₆₀)",
            "sp² → sp³ → sp",
            "sp → sp² → sp³",
            "sp³ → sp → sp²",
            "Alle haben sp²-Hybridisierung",
          ],
          correctIndex: 0,
          explanation: "Diamant: sp³-Hybridisierung, 3D-Netzwerk. Graphen: sp²-Hybridisierung, 2D-Einzelschicht hexagonaler Ringe (kleinste Einheit von Graphit). Fulleren (C₆₀): sp²-Hybridisierung, sphärisches Käfigmolekül mit Penta- und Hexagonringen. Alle drei sind Allotrope reinen Kohlenstoffs.",
          hints: [
            "Diamant ist tetraedrisch — welche Hybridisierung?",
            "Graphen und Graphit haben dieselbe Hybridisierung",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Kalkstein löst sich in CO₂-reichem Wasser auf. Welcher Prozess erklärt das?",
          options: [
            "CaCO₃ wird durch CO₂ direkt reduziert",
            "CO₂ bildet Kohlensäure, die CaCO₃ zu Ca²⁺ + 2 HCO₃⁻ löst",
            "CaCO₃ reagiert mit CO₂ zu CaO + 2 CO₂",
            "CO₂ erhöht den pH und löst CaCO₃ basisch",
            "CaCO₃ ist frei löslich in Wasser",
          ],
          correctIndex: 1,
          explanation: "CO₂ reagiert mit Wasser zu Kohlensäure H₂CO₃, die mit schwerlöslichem CaCO₃ reagiert: CaCO₃ + CO₂ + H₂O ⇌ Ca²⁺ + 2 HCO₃⁻. Das Carbonat wird als lösliches Bicarbonat aufgelöst. Dieser Prozess erklärt Karsthöhlen, Stalaktiten/Stalagmiten und Hartwasser mit hohem Ca²⁺-Gehalt.",
          hints: [
            "CO₂ macht Wasser sauer — was macht Säure mit Kalkstein?",
            "CaCO₃ + Säure → Ca²⁺ + ?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-9-03",
      title: "Stickstoff, Schwefel und Halogene",
      content: `## Stickstoff (N)

Molekularer Stickstoff N₂ enthält eine **Dreifachbindung** (σ + 2π, Bindungsenergie 945 kJ/mol) — extrem stabil und reaktionsträge. N₂ ist das häufigste Gas der Atmosphäre (78 %). Trotz Inertheit ist Stickstoff biologisch essenziell (Proteine, Nukleinsäuren).

**Ammoniak (NH₃):** Pyramidale Geometrie (sp³, Bindungswinkel 107°, freies Elektronenpaar). Basisch: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (pK_b = 4,75). Wichtig für Stickstoffkreislauf (Haber-Bosch, Protein-Biosynthese).

**Salpetersäure (HNO₃):** Starke Säure (vollständig dissoziiert), oxidierend. In konzentrierter Form passiviert Eisenoberflächen. Biologisch: NO₃⁻ ist Pflanzennahrung; NO (Stickstoffmonoxid) ist Signalmolekül (Vasodilatation, cGMP).

## Schwefel (S)

Schwefel tritt in verschiedenen Oxidationsstufen auf (−2 bis +6).

**Schwefelsäure (H₂SO₄):** Starke, diprotische Säure. Beide Dissoziationsschritte: pK_s1 ≈ −3 (vollständig), pK_s2 ≈ 1,9. Konzentriert: stark wasseranziehend (hygroskopisch) und oxidierend. Technisch wichtigste Industriechemikalie (Kontaktverfahren).

**Schwefelwasserstoff (H₂S):** Charakteristischer Geruch (faule Eier), giftig. Schwache Säure: pK_s1 = 7,0. Biologisch: H₂S als gasförmiger Botenstoff (Vasodilatation). In Zellen entsteht H₂S aus Cystein.

## Halogene (Gruppe 17)

Fluor, Chlor, Brom, Iod — alle zweiatomige Moleküle (F₂, Cl₂, Br₂, I₂). Reaktivität nimmt ab: **F₂ > Cl₂ > Br₂ > I₂** (abnehmende Elektronegativität und steigende Atommasse → schwächere Bindungen, leichter gespalten, aber weniger oxidierend).

**Halogenwasserstoffe (HX):** Säurestärke nimmt zu: HF (schwach, pK_s = 3,2) < HCl < HBr < HI (alle stark). HF bildet H-Brücken, daher Sonderstellung.

**Biologische Halogene:** I⁻ in Schilddrüsenhormonen (T₃, T₄). Cl⁻ wichtigstes Anion im Extrazellulärraum. Br⁻ in Algen-Metaboliten. F⁻ stabilisiert Zahnschmelz (Fluorapatit). Cl₂ und Hypochlorit (ClO⁻) als Desinfektionsmittel.`,
      lernziele: [
        "Die Eigenschaften und Reaktionen von N₂, NH₃, HNO₃, H₂SO₄ und H₂S beschreiben",
        "Die Reaktivitätsreihe der Halogene und die Säurestärke der Halogenwasserstoffe erklären",
        "Biologische und klinische Bedeutung von Stickstoff-, Schwefel- und Halogenverbindungen nennen",
      ],
      sections: [
        {
          heading: "Stickstoffverbindungen im Körper",
          text: "Stickstoff ist in Aminosäuren, Nukleotiden, Häm und Neurotransmittern enthalten. Der Stickstoffkreislauf im Körper umfasst: Proteinaufnahme → Aminosäuren → Transaminierung/Desaminierung → Harnstoffzyklus (NH₄⁺ → Harnstoff). Stickstoffmonoxid (NO) wird enzymatisch aus L-Arginin (NO-Synthase) gebildet und wirkt als Vasodilatator (aktiviert Guanylatzyklase → cGMP). Sildenafil hemmt die cGMP-Phosphodiesterase und verstärkt die NO-Wirkung. Salpetersäure-Derivate (z.B. Nitroglycerin, Isosorbiddinitrat) setzen im Körper NO frei und werden als Vasodilatatoren bei Angina pectoris eingesetzt.",
          merksatz: "NO = Vasodilatator (aus L-Arginin durch NO-Synthase)",
        },
        {
          heading: "Halogen-Reaktivität und biologische Funktion",
          text: "Die abnehmende Reaktivität der Halogene von F₂ zu I₂ lässt sich mit der zunehmenden Bindungslänge und abnehmenden Bindungsstärke der X-X-Bindung erklären. Fluor ist so reaktiv, dass es sogar Edelgase angreift. Die Säurestärke der Halogenwasserstoffe HX nimmt in der Reihe HF < HCl < HBr < HI zu, da die H-X-Bindungsstärke abnimmt (leichtere Protonenabgabe). HF ist die Ausnahme: schwache Säure wegen ausgeprägter H-Brücken und starker H-F-Bindung. Biologisch essenziell: Jod für Schilddrüsenhormone (T₃: 3 Jod, T₄: 4 Jod). Jodmangel führt zu Struma (Schilddrüsenvergrößerung) und Kretinismus bei Neugeborenen.",
          merksatz: "Halogen-Reaktivität: F > Cl > Br > I; Säurestärke HX: HI > HBr > HCl > HF",
        },
      ],
      merksätze: [
        "N₂: Dreifachbindung (945 kJ/mol) → sehr träge; NH₃: pyramidal, basisch",
        "H₂SO₄: stark, diprotisch, hygroskopisch; H₂S: schwach, fauler Geruch",
        "Halogene: F₂ > Cl₂ > Br₂ > I₂ (Reaktivität); HF = schwächste Halogensäure",
      ],
      klinischerBezug: "Schwefelsäure-Verätzungen sind medizinisch relevant: H₂SO₄ entzieht Gewebe Wasser (hygroskopisch) und verursacht chemische Verbrennungen. Schwefelwasserstoff-Vergiftung (Güllegrube, Kanalisation) hemmt wie Cyanid die Cytochrom-c-Oxidase → histotoxische Hypoxie.",
      altfrage: {
        question: "Warum nimmt die Säurestärke in der Reihe HF < HCl < HBr < HI zu?",
        answer: "Die Säurestärke steigt, weil die H-X-Bindungsenergie in der Reihe von HF zu HI abnimmt: Je schwächer die H-X-Bindung, desto leichter wird das Proton abgegeben. HF hat die stärkste H-X-Bindung (kurze Bindung, hohe Elektronegativität von F) und ist daher trotz hoher EN des F eine schwache Säure.",
      },
      selfTest: [
        {
          question: "Warum ist molekularer Stickstoff N₂ so reaktionsträge?",
          options: [
            "N₂ hat eine Einfachbindung mit geringer Bindungsenergie",
            "N₂ ist ein Edelgas und daher inert",
            "N₂ hat eine Dreifachbindung mit Bindungsenergie 945 kJ/mol",
            "N₂ ist gasförmig und Gase reagieren langsam",
            "N₂ ist positiv geladen und abstoßend",
          ],
          correctIndex: 2,
          explanation: "N₂ enthält eine sehr stabile Dreifachbindung (1 σ + 2 π, Bindungsenergie 945 kJ/mol) — eine der stärksten Bindungen in der Chemie. Diese hohe Bindungsenergie macht N₂ extrem reaktionsträge. Dennoch kann N₂ unter hohem Druck und Temperatur mit H₂ zu NH₃ reagieren (Haber-Bosch) oder durch Blitze zu NO fixiert werden.",
          hints: [
            "Welche Art von Bindung hat N₂?",
            "Hohe Bindungsenergie = leicht oder schwer zu spalten?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Schwefelsäure H₂SO₄ ist korrekt?",
          options: [
            "H₂SO₄ ist eine einprotonige (monoprotonische) schwache Säure",
            "H₂SO₄ ist diprotisch und stark (erste Dissoziation vollständig)",
            "H₂SO₄ hat einen pK_s von 7",
            "H₂SO₄ ist eine Base in wässriger Lösung",
            "Konzentrierte H₂SO₄ ist gut wasserlöslich aber nicht hygroskopisch",
          ],
          correctIndex: 1,
          explanation: "H₂SO₄ ist diprotisch (gibt zwei Protonen ab): Erste Dissoziation vollständig (pK_s1 ≈ −3, starke Säure), zweite Dissoziation pK_s2 ≈ 1,9 (schwächer). Konzentrierte H₂SO₄ ist stark hygroskopisch (wasseranziehend) und kann organisches Gewebe verkohlen. Sie ist die bedeutendste Industriechemikalie weltweit.",
          hints: [
            "Diprotisch = gibt wie viele Protonen ab?",
            "Ist die erste oder zweite Dissoziation von H₂SO₄ vollständig?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Halogen ist das stärkste Oxidationsmittel?",
          options: [
            "I₂ (Iod)",
            "Br₂ (Brom)",
            "Cl₂ (Chlor)",
            "F₂ (Fluor)",
            "Alle Halogene sind gleich stark oxidierend",
          ],
          correctIndex: 3,
          explanation: "Fluor F₂ ist das stärkste Oxidationsmittel aller Elemente (Standardpotenzial E° = +2,87 V). Die Oxidationsstärke nimmt in der Reihe F₂ > Cl₂ > Br₂ > I₂ ab, was mit der abnehmenden Elektronegativität und zunehmenden Atomgröße zusammenhängt. F₂ kann sogar Edelgase wie Xenon oxidieren.",
          hints: [
            "Elektronegativer = stärkeres Oxidationsmittel",
            "Reaktivität der Halogene: F > Cl > Br > I",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche biologische Rolle spielt Stickstoffmonoxid (NO) im menschlichen Körper?",
          options: [
            "NO transportiert Sauerstoff im Blut",
            "NO ist ein Vasodilatator (bewirkt Gefäßerweiterung)",
            "NO ist ein Baustein von Aminosäuren",
            "NO hemmt die Immunantwort",
            "NO ist ein Cofaktor der Atmungskette",
          ],
          correctIndex: 1,
          explanation: "NO ist ein wichtiges gasförmiges Signalmolekül. Es wird von der NO-Synthase aus L-Arginin gebildet und aktiviert in glatten Muskelzellen die Guanylatzyklase → cGMP → Vasodilatation. Dies ist der Wirkmechanismus von Nitroglycerin (NO-Freisetzung). Sildenafil hemmt den cGMP-Abbau und potenziert so den NO-Effekt.",
          hints: [
            "NO → Guanylatzyklase → cGMP → ?",
            "Nitroglycerin setzt NO frei — was bewirkt es bei Angina pectoris?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ammoniak NH₃ ist eine Base. Welche Reaktion zeigt das?",
          options: [
            "NH₃ + H₂O → N₂ + 3H₂",
            "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",
            "NH₃ → NH₄⁺ + e⁻",
            "NH₃ + O₂ → N₂O + H₂O",
            "NH₃ gibt H⁺ an Wasser ab",
          ],
          correctIndex: 1,
          explanation: "NH₃ ist eine Base nach Brønsted-Lowry: Es nimmt ein Proton (H⁺) von Wasser auf und bildet NH₄⁺ und OH⁻. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (pK_b = 4,75, relativ schwache Base). Das freie Elektronenpaar am Stickstoff macht NH₃ zum H⁺-Akzeptor. Im Körper spielt der NH₃/NH₄⁺-Puffer eine Rolle bei der renalen Säureausscheidung.",
          hints: [
            "Basen nehmen H⁺ auf oder geben H⁺ ab?",
            "Was bildet sich, wenn NH₃ ein H⁺ aufnimmt?",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
