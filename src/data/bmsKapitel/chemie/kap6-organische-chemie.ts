import type { Kapitel } from "../types";

export const chemKapOrganisch: Kapitel = {
  id: "chem-kap6",
  title: "Organische Chemie & Naturstoffe",
  subject: "chemie",
  icon: "🌿",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap12-organische-chemie ===
    // ─────────────────────────────────────────────────────────────────
    // UK 01 — Kohlenwasserstoffe: Alkane, Alkene, Alkine
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-01",
      title: "Kohlenwasserstoffe — Alkane, Alkene, Alkine",
      imageUrl: "/images/bms/ch-kovalente-bindung.jpg",
      imageCaption: "Abb.: Kovalente Bindungen in organischen Molekülen (OpenStax, CC BY 4.0)",
      content: `Kohlenwasserstoffe sind die einfachsten organischen Verbindungen — sie bestehen ausschließlich aus Kohlenstoff und Wasserstoff. Ihre Struktur und Nomenklatur bilden das Fundament, auf dem die gesamte organische Chemie aufbaut.

## Alkane — gesättigte Kohlenwasserstoffe

Die organische Chemie beschäftigt sich mit Verbindungen des Kohlenstoffs, und die einfachsten unter ihnen sind die Alkane. Ihre allgemeine Formel lautet CₙH₂ₙ₊₂. In einem Alkan sind sämtliche Kohlenstoffatome über Einfachbindungen miteinander verknüpft — ausschließlich σ-Bindungen, die durch frontale Orbitalüberlappung entstehen. Da keine weiteren Bindungspartner mehr aufgenommen werden können, bezeichnet man Alkane als gesättigt. Jedes C-Atom ist sp³-hybridisiert, was eine tetraederförmige Geometrie mit einem Bindungswinkel von 109,5° zur Folge hat.

Weil Alkane ausschließlich unpolare C-H- und C-C-Bindungen enthalten, dominieren als zwischenmolekulare Kräfte die schwachen van-der-Waals-Wechselwirkungen (London-Dispersionskräfte). Mit wachsender Kettenlänge vergrößert sich die Moleküloberfläche, die Kontaktfläche zwischen Nachbarmolekülen nimmt zu, und die van-der-Waals-Kräfte werden stärker. Deshalb steigt der Siedepunkt in der homologen Reihe systematisch an: Methan ist bei Raumtemperatur ein Gas (Sdp. −162 °C), Pentan bereits eine Flüssigkeit (Sdp. 36 °C), und ab Heptan aufwärts begegnet man öligen Flüssigkeiten.

Die **IUPAC-Nomenklatur** benennt Alkane nach der längsten zusammenhängenden Kohlenstoffkette — dem Stammnamen (Methan, Ethan, Propan, Butan, Pentan, Hexan, Heptan, Octan, Nonan, Decan). Seitenketten werden als Präfixe vorangestellt (Methyl-, Ethyl-), und die Nummerierung erfolgt so, dass Substituenten die niedrigstmöglichen Positionsziffern erhalten. So heißt die verzweigte Variante von Butan korrekt 2-Methylpropan (Trivialname: Isobutan, C₄H₁₀).

Für das Verständnis organischer Reaktionen ist die **Klassifikation von Kohlenstoffatomen** entscheidend: Ein primäres C-Atom ist an genau ein weiteres C gebunden, ein sekundäres an zwei, ein tertiäres an drei. Diese Unterscheidung bestimmt die Reaktivität, denn tertiäre Radikale und Carbokationen sind stabiler als sekundäre, und diese wiederum stabiler als primäre.

Ab Butan (C₄H₁₀) treten **Konstitutionsisomere** auf — Verbindungen mit gleicher Summenformel, aber verschiedener Atomverknüpfung. n-Butan ist linear, 2-Methylpropan verzweigt. Die Zahl der Isomere wächst rasch: C₅ hat 3, C₆ hat 5, C₁₀ bereits 75 Isomere. Bildet die Kohlenstoffkette einen Ring, spricht man von **Cycloalkanen** (allgemeine Formel CₙH₂ₙ — identisch mit den Alkenen!). Cyclohexan nimmt bevorzugt die spannungsfreie Sesselkonformation ein, während Cyclopropan durch seinen erzwungenen 60°-Bindungswinkel erhebliche Ringspannung aufweist und daher reaktiver ist. Bei disubstituierten Cycloalkanen entsteht cis/trans-Isomerie, je nachdem ob die Substituenten auf gleicher oder gegenüberliegender Ringseite stehen.

Die **typische Reaktion der Alkane** ist die radikalische Substitution (SR). Da Alkane weder π-Elektronen noch freie Elektronenpaare besitzen, benötigen sie energiereiche Bedingungen — UV-Licht oder hohe Temperaturen — um mit Halogenen zu reagieren. Ein Wasserstoffatom wird dabei durch ein Halogenatom ersetzt: CH₄ + Cl₂ → CH₃Cl + HCl. Die Reaktion verläuft als Kettenreaktion in drei Phasen: Im **Kettenstart** spaltet UV-Licht das Cl₂-Molekül homolytisch in zwei hochreaktive Chlorradikale (Cl₂ →[hν] 2 Cl•). In der **Kettenfortpflanzung** abstrahiert ein Chlorradikal ein Wasserstoffatom vom Methan (Cl• + CH₄ → CH₃• + HCl), und das entstandene Methylradikal reagiert seinerseits mit einem weiteren Cl₂-Molekül (CH₃• + Cl₂ → CH₃Cl + Cl•) — so regeneriert sich das Chlorradikal, und die Kette setzt sich fort. Im **Kettenabbruch** rekombinieren zwei Radikale miteinander.

Die Struktur bestimmt die Reaktivität: Alkane mit ihren gesättigten C-C-Bindungen sind relativ reaktionsträge — erst Alkene und Alkine mit ihren π-Bindungen eröffnen ein reiches Reaktionsspektrum.

## Alkene — einfach ungesättigte Kohlenwasserstoffe

Entfernt man aus einem Alkan zwei benachbarte Wasserstoffatome, entsteht zwischen den betroffenen Kohlenstoffatomen eine Doppelbindung — ein Alken mit der allgemeinen Formel CₙH₂ₙ. Diese Doppelbindung besteht aus einer σ-Bindung und einer zusätzlichen π-Bindung, die durch seitliche Überlappung der unhybridisierten p-Orbitale zustande kommt. Die beteiligten C-Atome sind sp²-hybridisiert und bilden eine trigonal-planare Geometrie mit einem Bindungswinkel von 120°. Die π-Bindung ist energiereicher und zugleich reaktiver als die σ-Bindung, weil die Elektronendichte oberhalb und unterhalb der Molekülebene für Angriffe zugänglich ist.

Das elektronenreiche π-System macht Alkene zum idealen Angriffsziel für elektronenarme Teilchen (Elektrophile). Die **typische Reaktion** ist daher die elektrophile Addition: Brom addiert sich an die Doppelbindung (C₂H₄ + Br₂ → C₂H₄Br₂), und darauf beruht der klassische **Bromwasser-Nachweis** — orangefarbenes Bromwasser entfärbt sich bei Anwesenheit einer C=C- oder C≡C-Bindung.


Bei der Addition von Halogenwasserstoffen an asymmetrische Alkene bestimmt die **Markovnikov-Regel** die Regioselektivität: Das H geht an das C-Atom mit den meisten H-Atomen — weil das entstehende Carbokation dann stabiler (tertiär > sekundär > primär) ist. Das Halogenid addiert anschließend an das höher substituierte, positiv geladene C-Atom. In der Praxis: Bei Propen (CH₃−CH=CH₂) + HBr addiert H an das endständige CH₂ (wird zu CH₃), und Br⁻ an das mittlere C (tertiär stabilisiertes Carbokation) → 2-Brompropan (Markovnikov-Produkt).

Da die π-Bindung die freie Drehbarkeit um die C=C-Achse aufhebt, können Alkene **cis/trans-Isomerie** zeigen, sofern beide doppelgebundenen C-Atome jeweils zwei verschiedene Substituenten tragen. Bei cis-But-2-en stehen beide Methylgruppen auf derselben Seite (Sdp. 3,7 °C), bei trans-But-2-en auf gegenüberliegenden (Sdp. 0,9 °C). Für komplexere Fälle nutzt man die E/Z-Nomenklatur nach CIP-Prioritätsregeln (höhere Ordnungszahl = höhere Priorität).

## Alkine — zweifach ungesättigte Kohlenwasserstoffe

Geht man noch einen Schritt weiter und bildet eine Dreifachbindung, erhält man ein Alkin mit der Formel CₙH₂ₙ₋₂. Die C≡C-Dreifachbindung setzt sich aus einer σ- und zwei π-Bindungen zusammen. Die beteiligten C-Atome sind sp-hybridisiert und nehmen eine strikt lineare Geometrie mit 180° ein. Wie Alkene gehen auch Alkine elektrophile Additionen ein, können dabei jedoch zwei Äquivalente des Additionspartners aufnehmen.

Das wichtigste Alkin ist Ethin (Acetylen, C₂H₂), das mit reinem Sauerstoff Temperaturen von etwa 3100 °C erreicht und deshalb in der Autogenschweißtechnik eingesetzt wird.

**Vergleich der drei Kohlenwasserstoff-Klassen:**

| Eigenschaft | Alkan | Alken | Alkin |
|---|---|---|---|
| Hybridisierung | sp³ | sp² | sp |
| Bindungswinkel | 109,5° | 120° | 180° |
| Bindungstyp | nur σ | σ + 1π | σ + 2π |
| Allg. Formel | CₙH₂ₙ₊₂ | CₙH₂ₙ | CₙH₂ₙ₋₂ |
| Typische Reaktion | Radik. Substitution | Elektrophile Addition | Elektrophile Addition |

{{DIAGRAM:hydrocarbon-types}}

## Polymerisation

Die Doppelbindung der Alkene eröffnet eine weitere Reaktionsmöglichkeit: Durch radikalische oder koordinative **Polymerisation** lassen sich Tausende von Monomeren zu Makromolekülen verknüpfen. So entsteht aus Ethen das allgegenwärtige Polyethylen (PE): n CH₂=CH₂ → (−CH₂−CH₂−)ₙ. In der Medizin begegnen einem Polymere auf Schritt und Tritt — Polypropylen (PP) in chirurgischem Nahtmaterial, PVC in Infusionsbeuteln und Polystyrol (PS) in Einweg-Laborartikeln.

## Siedepunkte und intermolekulare Wechselwirkungen

Die physikalischen Eigenschaften der Kohlenwasserstoffe werden fast ausschließlich von den zwischenmolekularen Kräften bestimmt. In der homologen Reihe der Alkane steigt der Siedepunkt pro CH₂-Einheit um etwa 20–30 °C: Methan (−162 °C), Ethan (−89 °C), Propan (−42 °C), Butan (−1 °C), Pentan (36 °C), Hexan (69 °C), Heptan (98 °C), Octan (126 °C).

Doch nicht nur die Kettenlänge zählt — auch die **Molekülgestalt** spielt eine entscheidende Rolle. Vergleicht man n-Pentan (Sdp. 36 °C) mit dem kugelförmigen Neopentan (Sdp. 9,5 °C), so siedet das verzweigte Isomer trotz identischer Summenformel C₅H₁₂ deutlich niedriger, weil seine kompakte Form weniger Kontaktfläche bietet und damit schwächere van-der-Waals-Kräfte entstehen.

Besonders eindrücklich wird der Einfluss funktioneller Gruppen beim Vergleich von Ethanol und Dimethylether: Beide besitzen die Summenformel C₂H₆O, doch Ethanol (Sdp. 78 °C) siedet um über 100 Grad höher als Dimethylether (Sdp. −24 °C). Der Grund sind die Wasserstoffbrücken, die nur die OH-Gruppe des Ethanols ausbilden kann. Carbonsäuren gehen sogar noch stärkere Wechselwirkungen ein, weil sie über ihre COOH-Gruppen stabile Dimere bilden.

## IUPAC-Nomenklatur (systematische Benennung)

Um organische Verbindungen weltweit eindeutig zu bezeichnen, hat die IUPAC (International Union of Pure and Applied Chemistry) ein systematisches Regelwerk entwickelt. Der Name wird Schritt für Schritt aufgebaut.

Zunächst identifiziert man die **längste zusammenhängende Kohlenstoffkette** — sie liefert den Stammnamen: Methan (C1), Ethan (C2), Propan (C3), Butan (C4), Pentan (C5), Hexan (C6), Heptan (C7), Octan (C8), Nonan (C9), Decan (C10). Die **Endung** gibt den Bindungstyp an: **-an** bei ausschließlich Einfachbindungen, **-en** bei einer Doppelbindung (z. B. But-2-en), **-in** bei einer Dreifachbindung (z. B. Pent-1-in). Seitenketten werden als Präfixe benannt (Methyl-, Ethyl-, Propyl-), und die Nummerierung der Hauptkette erfolgt so, dass Substituenten die niedrigstmöglichen Positionsziffern erhalten. Mehrere gleiche Substituenten werden durch di-, tri- oder tetra- gekennzeichnet (z. B. 2,3-Dimethylbutan), verschiedene Substituenten alphabetisch angeordnet.

Die **funktionelle Gruppe** bestimmt das Suffix des Namens:

| Funktionelle Gruppe | Suffix | Beispiel |
|---|---|---|
| -OH (Hydroxyl) | -ol | Propan-2-ol |
| -CHO (Aldehyd) | -al | Propanal |
| >C=O (Keton) | -on | Propan-2-on (Aceton) |
| -COOH (Carbonsäure) | -säure | Propansäure |
| -NH₂ (Amin) | -amin | Propan-1-amin |

Ein konkretes Beispiel: CH₃-CH(OH)-CH₃ enthält drei Kohlenstoffatome (Propan) und eine Hydroxylgruppe an C2 — der Name lautet Propan-2-ol (Trivialname: Isopropanol). Ein weiteres: CH₃-CH₂-CH(CH₃)-CH₂-CH₃ hat fünf C-Atome als längste Kette (Pentan) und eine Methylgruppe an C3, also 3-Methylpentan.

> **Merke:** IUPAC-Nomenklatur: (1) Längste C-Kette = Stammname, (2) Endung nach Bindungstyp (-an/-en/-in), (3) Substituenten mit niedrigster Positionsnummer als Präfix, (4) funktionelle Gruppe bestimmt Suffix (-ol, -al, -on, -säure). Niedrigste Nummerierung hat Vorrang!

> **Prüfungstipp:** Im MedAT wird häufig die Verwechslung von Alkan/Alken/Alkin-Formeln abgefragt. Merke: Alkane haben die meisten H-Atome (CₙH₂ₙ₊₂), mit jeder Doppelbindung gehen zwei H verloren. Typische Falle: Cycloalkane (CₙH₂ₙ) haben die gleiche Formel wie Alkene — aber keine Doppelbindung!

## Klinischer Bezug

Kohlenwasserstoffe und ihre Derivate besitzen eine lange medizinische Geschichte. Chloroform (CHCl₃) und Diethylether gehörten zu den ersten Narkosemitteln — Diethylether wurde 1846 bei der historisch ersten öffentlichen Äthernarkose eingesetzt. In der Pharmakologie ist der Abbau von Ethanol ein Paradebeispiel für die Oxidationsreihe: Die Alkoholdehydrogenase (ADH) oxidiert Ethanol zum toxischen Acetaldehyd, der für den Kater verantwortlich ist. Anschließend überführt die Aldehyddehydrogenase (ALDH) den Acetaldehyd in Essigsäure (Acetat), die als Acetyl-CoA in den Citratzyklus eingespeist wird. In der Suchtmedizin nutzt man dieses Wissen: Disulfiram (Antabus) hemmt die ALDH, sodass sich Acetaldehyd anreichert und unangenehme Symptome auslöst — eine Form der Aversionstherapie.

In der Atemgasanalytik gelten Kohlenwasserstoffe wie Ethan und Pentan als Biomarker für Lipidperoxidation und oxidativen Stress. Klinisch bedeutsam ist auch die Unterscheidung zwischen Alkenen und Aromaten: **Benzol (Benzen)** besitzt zwar scheinbar drei Doppelbindungen, ist jedoch ein Aromat mit 6 delokalisierten π-Elektronen (Hückel-Regel) und gehört nicht zu den Alkenen — eine häufige MedAT-Falle. Bei chronischer Exposition wirkt Benzol karzinogen und kann eine akute myeloische Leukämie verursachen. **Methan (CH₄)** entsteht bei anaerober Zersetzung und besitzt einen 80-fach stärkeren Treibhauseffekt als CO₂ (auf 20 Jahre gerechnet). Unter den Halogenkohlenwasserstoffen ist Tetrachlorkohlenstoff (CCl₄) hepatotoxisch, weil er in der Leber radikalisch metabolisiert wird, und Fluorchlorkohlenwasserstoffe (FCKW) zerstören durch Freisetzung von Chlorradikalen die Ozonschicht (Montreal-Protokoll 1987).

> **Merke:** Ethanol →[ADH] Acetaldehyd (Kater!) →[ALDH] Acetat. Disulfiram hemmt ALDH. Benzol → AML. FCKW → Ozonabbau.

> **Prüfungstipp:** Die drei Phasen der radikalischen Substitution (Start, Fortpflanzung, Abbruch) werden im MedAT gerne als Zuordnungsaufgabe gefragt. Achte darauf: Im Kettenstart entstehen Radikale durch homolytische Spaltung, in der Fortpflanzung werden sie regeneriert, im Abbruch rekombinieren sie. Auch die Markovnikov-Regel ist ein Klassiker — „H geht zum H-reichen C".`,
      stichworte: [
        "Alkane",
        "Alkene",
        "Alkine",
        "Kohlenwasserstoffe",
        "sp³-Hybridisierung",
        "sp²-Hybridisierung",
        "sp-Hybridisierung",
        "Bromwassertest",
        "Markovnikov-Regel",
        "Siedepunkte",
        "van-der-Waals-Kräfte",
        "Polymerisation",
      ],
      lernziele: [
        "Die allgemeinen Formeln CₙH₂ₙ₊₂ (Alkane), CₙH₂ₙ (Alkene) und CₙH₂ₙ₋₂ (Alkine) kennen und anwenden.",
        "Die IUPAC-Namen der ersten 10 Alkane (Methan bis Decan) auswendig beherrschen.",
        "Den Zusammenhang zwischen Kettenlänge, van-der-Waals-Kräften und Siedepunkt erklären.",
        "Die radikalische Substitution (Alkane) und die elektrophile Addition (Alkene/Alkine) als typische Reaktionen benennen.",
        "Den Bromwasser-Test als Nachweis für Doppelbindungen erklären und die Markovnikov-Regel anwenden.",
      ],
      sections: [
        {
          heading: "Hybridisierung und Bindungswinkel",
          text: "Alkane: sp³-Hybridisierung, Tetraedergeometrie, Bindungswinkel 109,5°. Alkene: sp²-Hybridisierung, trigonal-planare Geometrie, Bindungswinkel 120°. Alkine: sp-Hybridisierung, lineare Geometrie, Bindungswinkel 180°. Die Hybridisierung bestimmt die Geometrie und die Reaktivität: mehr p-Charakter (sp > sp² > sp³) bedeutet kürzere, stärkere, aber reaktivere π-Bindungen.",
          merksatz:
            "sp³ = gesättigt (Alkan), sp² = eine Doppelbindung (Alken), sp = Dreifachbindung (Alkin). Mehr π-Bindungen = mehr Reaktivität.",
        },
        {
          heading: "Radikalische Substitution vs. elektrophile Addition",
          text: "Alkane gehen radikalische Substitutionen ein, weil ihre C-H-Bindungen homolytisch gespalten werden können. Alkene und Alkine bevorzugen elektrophile Additionen, weil ihre π-Elektronen nucleophil wirken und Elektrophile angreifen. Diese grundlegenden Reaktionsprinzipien sind für den MedAT-H essentiell.",
          merksatz:
            "Alkan + Halogen/UV → Substitution (ein H raus, Halogen rein). Alken + Br₂ → Addition (Bromwasser entfärbt sich). Merke: Gesättigte substituieren, ungesättigte addieren.",
        },
        {
          heading: "Homologe Reihe und Siedepunkte",
          text: "Eine homologe Reihe ist eine Gruppe organischer Verbindungen, die sich durch eine CH₂-Gruppe unterscheiden. In der Alkan-Reihe steigen die Siedepunkte pro CH₂-Einheit um ca. 20-30°C. Die Siedepunkte hängen von den van-der-Waals-Kräften ab: Methan (-162°C), Ethan (-89°C), Propan (-42°C), Butan (-1°C), Pentan (36°C), Hexan (69°C), Heptan (98°C), Octan (126°C).",
          merksatz:
            "Mehr C-Atome → größere Moleküloberfläche → stärkere van-der-Waals-Kräfte → höherer Siedepunkt. Verzweigung verkleinert die Oberfläche und senkt den Siedepunkt.",
        },
        {
          heading: "IUPAC-Namen der ersten 10 Alkane",
          text: "Die Homologe Reihe der Alkane (auswendig lernen!):",
          table: {
            headers: ["n", "Name", "Formel"],
            rows: [
              ["1", "Methan", "CH₄"],
              ["2", "Ethan", "C₂H₆"],
              ["3", "Propan", "C₃H₈"],
              ["4", "Butan", "C₄H₁₀"],
              ["5", "Pentan", "C₅H₁₂"],
              ["6", "Hexan", "C₆H₁₄"],
              ["7", "Heptan", "C₇H₁₆"],
              ["8", "Octan", "C₈H₁₈"],
              ["9", "Nonan", "C₉H₂₀"],
              ["10", "Decan", "C₁₀H₂₂"],
            ],
          },
        },
      ],

      merksätze: [
        "Alkane: CₙH₂ₙ₊₂ — gesättigt, nur Einfachbindungen, reagieren durch radikalische Substitution.",
        "Alkene: CₙH₂ₙ — eine Doppelbindung, reagieren durch elektrophile Addition.",
        "Alkine: CₙH₂ₙ₋₂ — Dreifachbindung, reaktiver als Alkene.",
        "Die ersten 10 Alkane: Met-Eth-Prop-But-Pent-Hex-Hept-Oct-Non-Dec.",
        "Bromwassertest: Entfärbung von Bromwasser zeigt eine C=C- oder C≡C-Bindung an.",
        "Siedepunkte in der homologen Reihe: mit steigender Kettenlänge steigen die van-der-Waals-Kräfte und damit der Siedepunkt.",
        "Markovnikov-Regel: H geht an das C-Atom mit mehr H-Atomen (H wandert zur H-reichen Seite).",
        "sp³ (Alkan) → Tetraeder (109,5°); sp² (Alken) → planar (120°); sp (Alkin) → linear (180°).",
        "Alkane sind unpolar und hydrophob — daher nicht mit Wasser mischbar (außer kleine Moleküle unter Druck).",
        "Ethin (Acetylen, C₂H₂) = einfachstes Alkin; sp-hybridisiert, lineares Molekül.",
        "IUPAC: Längste Kette → Stammname; Endung -an/-en/-in; Substituenten + Position; funktionelle Gruppe bestimmt Suffix.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie die radikalische Halogenierung von Methan und beschreiben Sie die drei Phasen der Kettenreaktion.",
        answer:
          "Die radikalische Halogenierung ist eine Substitutionsreaktion, bei der ein Wasserstoffatom eines Alkans durch ein Halogenatom ersetzt wird. Sie wird durch UV-Licht oder hohe Temperaturen initiiert und läuft als Kettenreaktion in drei Phasen ab. In der Startphase (Initiation) wird die Halogenmolekülbindung homolytisch gespalten: Cl₂ → 2 Cl•. Dabei entstehen hochreaktive Chlorradikale. In der Fortpflanzungsphase (Propagation) reagiert das Chlorradikal mit Methan: Cl• + CH₄ → •CH₃ + HCl (ein neues Methylradikal entsteht). Dann: •CH₃ + Cl₂ → CH₃Cl + Cl• (ein neues Chlorradikal regeneriert). Diese zwei Schritte wiederholen sich tausende Male, weshalb aus einem Cl•-Radikal viele Produktmoleküle entstehen. In der Abbruchphase (Termination) rekombinieren zwei Radikale miteinander: Cl• + Cl• → Cl₂; •CH₃ + Cl• → CH₃Cl; •CH₃ + •CH₃ → C₂H₆. Da Methan vier gleichwertige H-Atome hat, entsteht zunächst nur Chlormethan. Bei Überschuss an Cl₂ können auch Di-, Tri- und Tetrachlormethan entstehen (stufenweise Substitution). Die Reaktion ist für Alkane typisch, weil sie keine reaktiven π-Elektronen besitzen.",
      },
      klinischerBezug:
        "Ethan und Pentan im Ausatemluft gelten als Biomarker für oxidativen Stress (Lipidperoxidation). Ethanol wird hepatisch über Acetaldehyd zur Essigsäure (Acetat) abgebaut; der Acetaldehyd ist für den Kater-Effekt verantwortlich.",
      selfTest: [
        {
          question: "Was ist die allgemeine Summenformel der Alkane?",
          options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙHₙ"],
          correctIndex: 1,
          explanation:
            "Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich C-C-Einfachbindungen. Jedes C-Atom bildet vier Bindungen. An einem endständigen C sitzen 3 H-Atome, an einem Mittel-C je 2 H-Atome. Die Ableitung: CₙH₂ₙ₊₂. Prüfung: Methan CH₄ (n=1: 2·1+2=4 ✓), Ethan C₂H₆ (n=2: 2·2+2=6 ✓), Propan C₃H₈ (n=3: 2·3+2=8 ✓).",
          hints: [
            "Alkane sind gesättigt — denke an die maximale Anzahl H-Atome pro C.",
            "Methan CH₄ hat 1 C und 4 H: passt welche Formel?",
          ],
          difficulty: 1,
          tags: ["alkane", "allgemeine-formel", "cn-h2n2"],
        },
        {
          question: "Welcher Name bezeichnet das Alkan mit 7 Kohlenstoffatomen?",
          options: ["Hexan", "Octan", "Heptan", "Nonan", "Pentan"],
          correctIndex: 2,
          explanation:
            "Die IUPAC-Namen der Alkane: C1=Methan, C2=Ethan, C3=Propan, C4=Butan, C5=Pentan, C6=Hexan, C7=Heptan, C8=Octan, C9=Nonan, C10=Decan. Die griechischen Präfixe spiegeln die Kohlenstoffanzahl wider: Hepta- = 7. Heptan (C₇H₁₆) ist eine farblose Flüssigkeit (Siedepunkt 98°C) und Bestandteil von Benzin.",
          hints: [
            "Die Namen basieren auf griechischen Zahlwörtern: hexa=6, hepta=7, okta=8.",
            "Merkhilfe: Met-Eth-Prop-But-Pent-Hex-Hept-Oct-Non-Dec",
          ],
          difficulty: 1,
          tags: ["iupac", "alkan-namen", "heptan"],
        },
        {
          question:
            "Wie wird der Nachweis einer C=C-Doppelbindung mit Bromwasser durchgeführt, und was ist das Ergebnis?",
          options: [
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein weißer Niederschlag",
            "Bromwasser wird zugegeben; bei Doppelbindung steigt die Temperatur messbar an",
            "Bromwasser wird zugegeben; bei Doppelbindung färbt sich die Lösung blau",
            "Bromwasser wird zugegeben; bei Doppelbindung entfärbt sich die orange Lösung",
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein Gas",
          ],
          correctIndex: 3,
          explanation:
            "Der Bromwassertest ist der klassische Nachweis für ungesättigte Verbindungen (Alkene, Alkine). Bromwasser ist eine orange-braune Lösung von Br₂ in Wasser. Bei Kontakt mit einem Alken addiert Br₂ an die C=C-Doppelbindung (elektrophile Addition): R-CH=CH-R + Br₂ → R-CHBr-CHBr-R. Da das Br₂ verbraucht wird, verschwindet die orange Farbe (Entfärbung). Gesättigte Verbindungen (Alkane) reagieren unter diesen Bedingungen nicht mit Bromwasser — keine Entfärbung.",
          hints: [
            "Brom ist orange-braun. Was passiert, wenn es reagiert und verbraucht wird?",
            "Alkene reagieren durch Addition — das Br₂ wird in das Produkt eingebaut.",
          ],
          difficulty: 2,
          tags: ["bromwasser", "alken-nachweis", "elektrophile-addition"],
        },
        {
          question: "Welche Reaktion ist typisch für Alkane?",
          options: [
            "Elektrophile Addition",
            "Nucleophile Substitution",
            "Eliminierung",
            "Elektrophile aromatische Substitution",
            "Radikalische Substitution",
          ],
          correctIndex: 4,
          explanation:
            "Alkane haben keine reaktiven Funktionalitäten (keine π-Elektronen, keine freien Elektronenpaare). Sie reagieren daher kaum. Die wichtigste Reaktion ist die radikalische Halogenierung unter UV-Licht oder hohen Temperaturen, bei der ein H-Atom durch ein Halogenatom ersetzt wird. Die Reaktion läuft über Radikale (homolytische Bindungsspaltung) in drei Phasen: Start, Fortpflanzung, Abbruch. Elektrophile Addition ist typisch für Alkene (π-Elektronen), nicht für Alkane.",
          hints: [
            "Alkane haben nur σ-Bindungen — keine π-Elektronen. Was für eine Reaktion braucht keine Elektrophile?",
            "UV-Licht kann Bindungen homolytisch spalten und Radikale erzeugen.",
          ],
          difficulty: 2,
          tags: ["alkane", "radikalische-substitution", "uv-licht"],
        },
        {
          question: "Welche Hybridisierung haben die C-Atome in Ethen (C₂H₄)?",
          options: ["sp²", "sp³", "sp", "sp³d", "d²sp³"],
          correctIndex: 0,
          explanation:
            "In Ethen (H₂C=CH₂) sind die C-Atome sp²-hybridisiert. Drei sp²-Hybridorbitale bilden die σ-Gerüstbindungen (120° Winkel, trigonal-planar). Das verbleibende unhybridisierte p-Orbital steht senkrecht zur Molekülebene und bildet mit dem benachbarten p-Orbital die π-Bindung. Zum Vergleich: sp³ (Alkan, Tetraeder, 109,5°), sp (Alkin, linear, 180°). Die sp²-Hybridisierung erklärt die planare Struktur der Doppelbindung und die cis/trans-Isomerie.",
          hints: [
            "Zähle die σ-Bindungspartner + freie Elektronenpaare am C von Ethen: das gibt die Hybridisierung.",
            "sp³=4, sp²=3, sp=2 σ-Bindungsgruppen.",
          ],
          difficulty: 2,
          tags: ["hybridisierung", "sp2", "ethen"],
        },
        {
          question:
            "Das Alkan Butan (C₄H₁₀) hat zwei Konstitutionsisomere. Welches hat den niedrigeren Siedepunkt?",
          options: [
            "n-Butan (unverzweigt), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es kugelförmiger und die Oberfläche kleiner ist",
            "2-Methylpropan (Isobutan), weil es größere Oberfläche hat",
            "Beide haben den gleichen Siedepunkt, da gleiche Summenformel",
            "n-Butan, weil es leichter ist",
          ],
          correctIndex: 1,
          explanation:
            "Beide Isomere (n-Butan und 2-Methylpropan/Isobutan) haben C₄H₁₀ und das gleiche Molekulargewicht. Der Siedepunkt wird durch die Stärke der van-der-Waals-Kräfte bestimmt, die von der Moleküloberfläche abhängt. n-Butan ist gestreckt (größere Oberfläche, Sdp. -1°C), 2-Methylpropan ist kompakter/kugelförmiger (kleinere Oberfläche, Sdp. -12°C). Mehr Verzweigung → kleinere Oberfläche → schwächere van-der-Waals-Kräfte → niedrigerer Siedepunkt. Dieser Effekt ist prüfungsrelevant!",
          hints: [
            "Van-der-Waals-Kräfte sind oberflächenabhängig. Welches Molekül hat mehr Kontaktfläche?",
            "Streckt man ein Molekül aus, wird die Oberfläche größer — mehr Kontakt mit Nachbarmolekülen möglich.",
          ],
          difficulty: 3,
          tags: ["isomere", "van-der-waals", "siedepunkt"],
        },
        {
          question:
            "Was ist das Hauptprodukt bei der Addition von HBr an Propen (CH₃-CH=CH₂) nach der Markovnikov-Regel?",
          options: [
            "1-Brompropan (Br an C1)",
            "1,2-Dibrompropan",
            "2-Brompropan (Br an C2)",
            "Propan",
            "Propin",
          ],
          correctIndex: 2,
          explanation:
            "Die Markovnikov-Regel besagt: Bei der Addition von HX an ein asymmetrisches Alken addiert das H an das C-Atom mit den meisten H-Atomen (das elektronenreichere C), das X an das C-Atom mit weniger H-Atomen. Bei Propen (CH₃-CH=CH₂): C1 der Doppelbindung hat 2 H (=CH₂), C2 hat 1 H (-CH=). Nach Markovnikov: H an C1, Br an C2 → 2-Brompropan (CH₃-CHBr-CH₃). Mechanistisch entsteht das stabilere Carbokation (sekundär > primär) als Zwischenstufe.",
          hints: [
            "Markovnikov: 'Das Reiche wird reicher' — H geht zur H-reichen Seite.",
            "Das stabilere Carbokation (sekundär > primär) bestimmt das Hauptprodukt.",
          ],
          difficulty: 3,
          tags: ["markovnikov", "hbr-addition", "carbokation"],
        },
      ],
    },

    // ch-12-02 archiviert → _archiv/chemie/kap6-org-archived-uks.ts (NOT in MedAT Stichwortliste scope)

    // ─────────────────────────────────────────────────────────────────
    // UK 03 — Funktionelle Gruppen der Organik
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-03",
      title: "Funktionelle Gruppen der Organik",
      imageUrl: "/images/bms/ch-dehydratation-hydrolyse.jpg",
      imageCaption: "Abb.: Dehydratation und Hydrolyse organischer Moleküle (OpenStax, CC BY 4.0)",
      content: `Funktionelle Gruppen bestimmen die chemischen Eigenschaften organischer Moleküle. In diesem Unterkapitel lernst du die wichtigsten Gruppen kennen — von Alkoholen über Aldehyde und Ketone bis zu Carbonsäuren und Estern — und ihre Bedeutung für Biochemie und Pharmakologie.

## Alkohole (−OH, Hydroxylgruppe)

{{DIAGRAM:functional-groups}}

Sobald man in einem Kohlenwasserstoff ein Wasserstoffatom durch eine Hydroxylgruppe (−OH) ersetzt, entsteht ein Alkohol — und die Eigenschaften des Moleküls ändern sich grundlegend. Die polare OH-Gruppe ermöglicht Wasserstoffbrückenbindungen, erhöht die Löslichkeit in Wasser und steigert den Siedepunkt im Vergleich zum entsprechenden Alkan beträchtlich.

Alkohole werden nach der Anzahl der am Hydroxyl-C gebundenen weiteren Kohlenstoffatome eingeteilt: **Primäre Alkohole** (−CH₂−OH, ein C-Nachbar), **sekundäre Alkohole** (−CH(OH)−, zwei C-Nachbarn) und **tertiäre Alkohole** (−C(OH)<, drei C-Nachbarn). Diese Klassifikation ist für die Reaktivität entscheidend, denn sie bestimmt die **Oxidationsreihe** — eines der zentralsten Konzepte für den MedAT. Ein primärer Alkohol lässt sich zunächst zum **Aldehyd** (−CHO) und dann weiter zur **Carbonsäure** (−COOH) oxidieren. Ein sekundärer Alkohol wird dagegen zum **Keton** (C=O) oxidiert, das ohne Spaltung einer C-C-Bindung nicht weiter oxidiert werden kann. Tertiäre Alkohole sind unter Standardbedingungen gar nicht oxidierbar.

Dieses Prinzip findet sich unmittelbar in der Biochemie wieder: In der Leber wird Ethanol durch die Alkoholdehydrogenase (ADH) zum Acetaldehyd oxidiert (primärer Alkohol → Aldehyd), und die Aldehyddehydrogenase (ALDH) überführt diesen anschließend in Essigsäure (Acetat) — die klassische zweistufige Oxidationsreihe.

Unter den medizinisch relevanten Alkoholen verdient **Methanol** (CH₃OH) besondere Aufmerksamkeit: Es wird ebenfalls durch ADH und ALDH metabolisiert, aber die entstehenden Produkte — Formaldehyd und Ameisensäure — sind hochgiftig und können zur Erblindung (Retinaschädigung) und zum Tod führen. **Glycerin** (Propan-1,2,3-triol) ist ein dreiwertiger Alkohol und Rückgrat der Triglyceride.

Neben der Oxidation zeigen Alkohole weitere wichtige Reaktionen: Unter Einwirkung von konzentrierter Schwefelsäure und Wärme kommt es zur **Dehydratisierung** — entweder intramolekular zum Alken (Eliminierung) oder intermolekular zum Ether (Kondensation). Die **Veresterung** mit Carbonsäuren und die **nucleophile Substitution** zum Alkylhalogenid erweitern das Reaktionsspektrum.

{{IMAGE}}

## Ether (R−O−R')

Ether enthalten ein Sauerstoffatom zwischen zwei organischen Resten. Im Gegensatz zu Alkoholen können sie keine Wasserstoffbrücken als Donor bilden und sind daher relativ unreaktiv mit niedrigeren Siedepunkten. **Diethylether** (C₂H₅-O-C₂H₅) erlangte medizinhistorische Bedeutung als erstes inhalatives Narkosemittel — 1846 wurde die erste öffentliche Äthernarkose durchgeführt. Heute dient er vor allem als Lösungsmittel. Besonders reaktiv sind **Epoxide**, dreigliedrige cyclische Ether, deren Ringspannung eine nucleophile Ringöffnung ermöglicht. In der Toxikologie spielen Epoxid-Intermediate eine Schlüsselrolle: Benzo[a]pyren aus Tabakrauch wird über Epoxide metabolisiert, die DNA-Addukte bilden und krebserregend wirken.

## Aldehyde (−CHO, Aldehydgruppe)

Aldehyde tragen die Carbonylgruppe (C=O) am Ende der Kohlenstoffkette, gebunden an mindestens ein Wasserstoffatom. Die Carbonylgruppe ist stark polar — am Kohlenstoff herrscht eine partielle positive Ladung (δ⁺), am Sauerstoff eine negative (δ⁻) —, was nucleophile Angriffe am Kohlenstoff ermöglicht (nucleophile Addition).

**Formaldehyd** (HCHO, Methanal) ist als Konservierungsmittel und Desinfektionsmittel bekannt; seine wässrige Lösung Formalin (37 %) dient der Gewebefixierung in der Pathologie, denn Formaldehyd quervernetzt Proteine. Bei chronischer Inhalation wirkt er karzinogen. **Acetaldehyd** (CH₃CHO, Ethanal) ist das toxische Zwischenprodukt beim Ethanolabbau und verantwortlich für Kater-Symptome und das Flush-Syndrom, das bei etwa 30 % der ostasiatischen Bevölkerung auftritt (ALDH2-Polymorphismus). In der Biochemie begegnet man der Aldehydgruppe bei der offenkettigen Form der **Glucose** — diese Aldehydgruppe am C1 verleiht ihr reduzierende Eigenschaften und macht die Fehling-Probe (Kupfernachweis) positiv. Ein weiteres wichtiges Aldehyd ist **Retinal** (Vitamin-A-Aldehyd), das als Sehpigment in der Retina dient und dessen cis-trans-Isomerisierung durch Lichteinfall den Sehvorgang einleitet.

Charakteristisch für Aldehyde sind ihre Nachweisreaktionen: Die **Tollens-Probe** (Ag⁺ → Silberspiegel) und die **Fehling-Probe** (Cu²⁺ → Cu₂O-Niederschlag) sind spezifisch für Aldehyde und reagieren nicht mit Ketonen. Durch nucleophile Addition an Alkohole bilden Aldehyde **Halbacetale** — so entsteht auch die Ringform der Glucose.

## Ketone (C=O in der Kette)

Liegt die Carbonylgruppe dagegen innerhalb der Kohlenstoffkette, gebunden an zwei C-Atome, handelt es sich um ein Keton. Das bekannteste Keton ist **Aceton** (Propan-2-on, CH₃−CO−CH₃), das nicht nur als Lösungsmittel verwendet wird, sondern auch als Ketonkörper bei diabetischer Ketoazidose den charakteristischen süßlich-fruchtigen Acetongeruch des Atems verursacht. Neben Aceton gehören **β-Hydroxybutyrat** und **Acetoacetat** zu den Ketonkörpern, die bei Fasten oder unkontrolliertem Diabetes mellitus entstehen, wenn die Leber mangels ausreichender Glucose vermehrt Acetyl-CoA über die Ketogenese zu Ketonkörpern umwandelt. Diese dienen Muskel und Gehirn als alternativer Energieträger, doch bei Überproduktion sinkt der Blut-pH — es droht die lebensbedrohliche Ketoazidose.

## Carbonsäuren (−COOH, Carboxylgruppe)

Die Carboxylgruppe (−COOH) vereinigt Carbonyl- und Hydroxylgruppe in einer einzigen funktionellen Einheit und verleiht Carbonsäuren ihre Säureeigenschaft: Sie geben ein Proton ab (R-COOH ⇌ R-COO⁻ + H⁺) und sind damit Brønsted-Säuren, wenn auch mit typischen pKₐ-Werten von 4–5 deutlich schwächer als etwa Salzsäure.

In der Medizin und Biochemie begegnet man Carbonsäuren auf Schritt und Tritt: **Ameisensäure** (HCOOH, Methansäure) findet sich im Gift von Ameisen und Brennnesseln. **Essigsäure** (CH₃COOH, Ethansäure) ist nicht nur der Hauptbestandteil von Essig, sondern auch das Endprodukt des Ethanolabbaus. **Milchsäure** (Lactat) entsteht als Glykolyse-Endprodukt bei Sauerstoffmangel und ist für den Muskelschmerz nach intensiver Belastung mitverantwortlich. **Zitronensäure** (C₆H₈O₇) ist eine Tricarbonsäure mit drei COOH-Gruppen und das namensgebende Molekül des Citratzyklus. **Fettsäuren** schließlich sind langkettige Carbonsäuren (C16–C18), deren Sättigungsgrad die Eigenschaften von Fetten und Ölen bestimmt.

## Ester (−COO−, Estergruppe)

Wenn eine Carbonsäure mit einem Alkohol reagiert, entsteht unter Wasserabspaltung ein **Ester** — eine Kondensationsreaktion, die als Fischer-Veresterung bekannt ist und durch Säure katalysiert wird:
R-COOH + R'-OH ⇌ R-COO-R' + H₂O

Diese Gleichgewichtsreaktion lässt sich nach dem Prinzip von Le Chatelier zur Produktseite verschieben, indem man eine Komponente im Überschuss einsetzt oder das entstehende Wasser entfernt. Die biologisch wichtigsten Ester sind **Triglyceride** — Glycerin verestert mit drei Fettsäuren —, die als Neutralfette den Hauptenergiespeicher des Körpers bilden. In der Pharmazie ist **Aspirin** (Acetylsalicylsäure) ein prominentes Beispiel: Es ist ein Ester aus Salicylsäure und Essigsäure und hemmt irreversibel die Cyclooxygenase. Auch **Ethylacetat** (CH₃COO-C₂H₅), ein fruchtartig riechendes Lösungsmittel, gehört zu den Estern.

Die Rückreaktion — die **Hydrolyse** — spaltet den Ester durch Wasser in Carbonsäure und Alkohol. Basische Hydrolyse von Fetten heißt **Verseifung** und liefert Fettsäuresalze (Seifen) und Glycerin.

## Amine (−NH₂, Aminogruppe)

Amine lassen sich als organische Derivate des Ammoniaks auffassen, in dem ein oder mehrere Wasserstoffatome durch Kohlenstoffketten ersetzt sind: primäre Amine (R-NH₂), sekundäre (R₂-NH) und tertiäre Amine (R₃-N). Das freie Elektronenpaar am Stickstoff verleiht allen Aminen **basische** Eigenschaften — es kann Protonen aufnehmen: R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻. Die Basenstärke hängt von der Elektronendichte am Stickstoff ab: Aliphatische Amine sind basischer als Ammoniak, aromatische Amine wie Anilin dagegen schwächer, weil das freie Elektronenpaar in Konjugation mit dem aromatischen Ring steht und weniger verfügbar ist.

Eng verwandt mit den Aminen sind die **Amide** (R-CO-NH₂), die formal aus Carbonsäure und Amin entstehen. Das wichtigste biologische Amid ist die **Peptidbindung** (−CO−NH−), das zentrale Bindungsmotiv in Proteinen. Peptidbindungen sind planar, besitzen partiellen Doppelbindungscharakter durch Mesomerie und lassen sich nur enzymatisch (durch Proteasen) oder unter extremen pH-Bedingungen hydrolysieren.

**Thiole** (R-SH) sind die Schwefelanaloga der Alkohole. In der Biochemie ist Cystein mit seiner Thiolgruppe von besonderer Bedeutung: Die oxidative Kupplung zweier Cysteine bildet **Disulfidbrücken** (−S−S−), kovalente Bindungen, die maßgeblich zur Stabilisierung der Proteinstruktur beitragen. Glutathion (GSH), ein Tripeptid mit Thiolgruppe, ist das wichtigste intrazelluläre Antioxidans.

Amine sind als Neurotransmitter und Signalmoleküle von zentraler klinischer Bedeutung. **Aminosäuren** selbst sind amphotere Verbindungen, die sowohl −NH₂ als auch −COOH tragen und bei physiologischem pH als Zwitterion vorliegen. Aus der Aminosäure Tyrosin werden die **Catecholamine** (Dopamin → Noradrenalin → Adrenalin) synthetisiert. **Serotonin** (5-HT) entsteht aus Tryptophan und reguliert Stimmung und Darmperistaltik. **Histamin** (aus Histidin durch Decarboxylierung) wirkt als Entzündungsmediator, fördert die Magensäuresekretion und vermittelt allergische Reaktionen — Antihistaminika blockieren H₁- und H₂-Rezeptoren. **GABA** (γ-Aminobuttersäure) ist der wichtigste inhibitorische Neurotransmitter im ZNS; Benzodiazepine entfalten ihre sedierende Wirkung, indem sie die GABA-Wirkung am GABA_A-Rezeptor verstärken.

> **Merke:** Alkohole (–OH) werden nach der Anzahl der C-Atome am funktionellen C klassifiziert: primär, sekundär, tertiär. Primäre Alkohole können zu Aldehyden und weiter zu Carbonsäuren oxidiert werden, sekundäre zu Ketonen — tertiäre sind unter milden Bedingungen nicht oxidierbar.

> **Merke:** Ether (R–O–R) entstehen durch Kondensation zweier Alkohole. Diethylether war historisch eines der ersten Narkosemittel. Ether sind relativ reaktionsträge, aber leicht entzündlich und bilden explosive Peroxide.

> **Prüfungstipp:** Die Oxidationsreihe primärer Alkohol → Aldehyd → Carbonsäure ist ein MedAT-Dauerbrenner. Typische Falle: Sekundäre Alkohole enden beim Keton (Sackgasse!), tertiäre sind gar nicht oxidierbar. Auch die Veresterung (Carbonsäure + Alkohol ⇌ Ester + H₂O) kommt häufig vor — denke an Aspirin und Triglyceride als klinische Beispiele.`,
      stichworte: [
        "Alkohole",
        "Aldehyde",
        "Ketone",
        "Carbonsäuren",
        "Ester",
        "Amine",
        "Thiole",
        "Oxidationsstufen",
        "Veresterung",
        "Ketonkörper",
        "Neurotransmitter",
        "Disulfidbrücken",
      ],
      lernziele: [
        "Die wichtigsten funktionellen Gruppen (−OH, −CHO, C=O, −COOH, −COO−, −NH₂) benennen und deren Verbindungsklasse zuordnen.",
        "Die Oxidationsstufen: primärer Alkohol → Aldehyd → Carbonsäure erklären.",
        "Die Veresterungsreaktion als Gleichgewichtsreaktion formulieren und das Produkt benennen.",
        "Die Bedeutung der Ketonkörper (Aceton, Acetoacetat, β-Hydroxybutyrat) bei Diabetes und Fasten erläutern.",
        "Amine als basische Verbindungen identifizieren und klinisch relevante Amine (Neurotransmitter) nennen.",
      ],
      sections: [
        {
          heading: "Oxidationsstufen der Sauerstoff-Funktionen",
          text: "Die Oxidationsstufen im organischen C sind: Alkan (C-H, niedrig) → Alkohol (C-OH) → Aldehyd (C=O am Ende) → Carbonsäure (COOH, hoch) → CO₂ (max. oxidiert). Primäre Alkohole werden zu Aldehyden oxidiert, dann zu Carbonsäuren. Sekundäre Alkohole werden zu Ketonen oxidiert (keine weitere Oxidation ohne C-C-Spaltung). Tertiäre Alkohole werden unter normalen Bedingungen nicht oxidiert. Diese Stufenfolge ist für die Biochemie essentiell: z.B. Ethanolabbau (Ethanol → Acetaldehyd → Acetat).",
          merksatz:
            "Oxidation: primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (Sackgasse). Tertiärer Alkohol → keine Oxidation ohne C-C-Spaltung.",
        },
        {
          heading: "Veresterung und Hydrolyse — Gleichgewichtsreaktionen",
          text: "Die Veresterung (Carbonsäure + Alkohol → Ester + Wasser) ist eine reversible Gleichgewichtsreaktion. Das Gleichgewicht liegt oft auf Seite der Edukte, daher verwendet man Überschuss einer Komponente oder entfernt das Wasser (Le Chatelier). Katalysator: konz. Schwefelsäure (H⁺). Die Rückreaktion (Hydrolyse) kann sauer oder basisch katalysiert werden. Basische Hydrolyse (Verseifung): Ester + NaOH → Carboxylat (Seife) + Alkohol — irreversibel, weil das Carboxylat-Anion nicht zurück reagiert. Triglyceride (Fette) werden durch Lipasen hydrolysiert: Triglycerid + 3 H₂O → Glycerin + 3 Fettsäuren.",
          merksatz:
            "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser (Gleichgewicht). Triglyceride = Glycerin + 3 Fettsäuren (verbunden durch Esterbindungen). Aspirin = Ester der Salicylsäure.",
        },
        {
          heading: "Ketonkörper und klinische Relevanz",
          text: "Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen in der Leber aus Acetyl-CoA, wenn Glucose mangelt (Fasten, Diabetes mellitus Typ 1). Sie werden von Muskel und Gehirn als alternativer Brennstoff verwendet. Bei übermäßiger Ketonkörperproduktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Symptome: Acetongeruch im Atem (Fruchteruch), Hyperventilation (Kussmaul-Atmung als respiratorische Kompensation), Übelkeit, Bewusstseinseintrübung. Im Labor: erhöhte Ketonkörper im Urin (Ketonurie) und Blut. Nachweis: Nitroprussid-Test (Urin-Stix).",
          merksatz:
            "Ketonkörper bei Diabetes/Fasten: Aceton (Atemgeruch), Acetoacetat, β-Hydroxybutyrat. Ketoazidose: pH sinkt < 7,35. Kussmaul-Atmung = tiefe, schnelle Atemzüge als Kompensation.",
        },
      ],

      merksätze: [
        "Alkohole (-OH): polar, Wasserstoffbrücken, kleiner Siedepunkt-Boost. Primär → Aldehyd, sekundär → Keton bei Oxidation.",
        "Methanol ist giftig! Abbau zu Formaldehyd → Erblindung (Retinaschädigung) und Tod.",
        "Aldehyde (-CHO am Kettenende) können weiter zur Carbonsäure oxidiert werden; Ketone nicht ohne C-C-Spaltung.",
        "Carbonsäuren (-COOH): schwache Säuren (pKₐ 4-5), Protonendonoren, typische Veresterung mit Alkoholen.",
        "Ester (-COO-): Produkt der Veresterung; Triglyceride sind Glycerinester; Aspirin ist ein Ester.",
        "Amine (-NH₂): basisch durch freies Elektronenpaar am Stickstoff; Neurotransmitter-Grundbaustein.",
        "Ketonkörper (Aceton, Acetoacetat, β-Hydroxybutyrat) bei Hunger/Diabetes als Ersatzenergielieferanten.",
        "Ketoazidose: Blut-pH < 7,35, Acetongeruch, Kussmaul-Atmung.",
        "Verseifung = basische Esterspaltung: Fett + NaOH → Glycerin + Fettsäure-Natriumsalze (Seife).",
        "Amphotere Verbindungen tragen sowohl -NH₂ als auch -COOH: Aminosäuren sind amphoter.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie die Oxidationsreihe der Alkohole von der Alkanstufe bis zur Carbonsäure. Welche biochemische Reaktionskette entspricht dem Abbau von Ethanol im menschlichen Körper?",
        answer:
          "Die Oxidationsreihe organischer Sauerstoffverbindungen verläuft stufenweise. Ausgehend vom Alkan steigt der Oxidationsgrad: Alkan (C-H-Bindungen) → Alkohol (Zugabe einer OH-Gruppe, Oxidation des C-Atoms von -2 auf -1) → Aldehyd (primärer Alkohol verliert ein H, C-Oxidation von -1 auf 0, Produkt: R-CHO) → Carbonsäure (weiterer Oxidationsschritt, C-Oxidation von 0 auf +1, Produkt: R-COOH) → Kohlendioxid (maximale Oxidation +4). Für sekundäre Alkohole endet die Oxidation beim Keton (R-CO-R'), da kein weiteres H am Carbonyl-C vorhanden ist. Der biochemische Ethanolabbau folgt genau dieser Stufenfolge: Ethanol (CH₃-CH₂-OH, primärer Alkohol) wird durch das Enzym Alkohol-Dehydrogenase (ADH) mit NAD⁺ als Elektronenakzeptor zu Acetaldehyd (CH₃-CHO, Ethanal) oxidiert. Acetaldehyd ist das toxische Zwischenprodukt, das für viele Symptome des Katers verantwortlich ist. Im zweiten Schritt oxidiert die Aldehyd-Dehydrogenase (ALDH) den Acetaldehyd zu Essigsäure (Acetat, CH₃-COO⁻). Das Acetat kann in den Citratzyklus eingeschleust werden (als Acetyl-CoA) und vollständig zu CO₂ und Wasser verbrannt werden. Genetische Varianten der ALDH (besonders ALDH2*2 in Ostasien) führen zur Ansammlung von Acetaldehyd und verursachen die Flush-Reaktion (Rötung, Übelkeit).",
      },
      klinischerBezug:
        "Ketonkörper (β-Hydroxybutyrat, Acetoacetat, Aceton) bei Diabetes/Fasten: Acetongeruch, Ketoazidose. Methanol-Vergiftung: Formaldehyd-Metabolit schädigt Retina. Aspirin = Acetylsalicylsäure (Ester).",
      selfTest: [
        {
          question: "Welche funktionelle Gruppe ist charakteristisch für Alkohole?",
          options: [
            "Hydroxylgruppe (-OH) am C-Atom",
            "Carboxylgruppe (-COOH)",
            "Carbonylgruppe (C=O) am Kettenende",
            "Aminogruppe (-NH₂)",
            "Estergruppe (-COO-)",
          ],
          correctIndex: 0,
          explanation:
            "Alkohole sind definiert durch die Hydroxylgruppe (-OH), die an ein Kohlenstoffatom gebunden ist. Die -OH-Gruppe ist polar und ermöglicht Wasserstoffbrückenbindungen, was die Siedepunkte von Alkoholen im Vergleich zu entsprechenden Alkanen deutlich erhöht und die Wasserlöslichkeit kleiner Alkohole erklärt. Wichtig: Nicht alle -OH-Gruppen machen eine Verbindung zum Alkohol — in Carbonsäuren ist die -OH-Gruppe Teil der -COOH-Gruppe.",
          hints: [
            "'Alkohol' enthält '-ol' — was bedeutet die Endung '-ol' in der IUPAC-Nomenklatur?",
            "Ethanol (C₂H₅OH): Was ist die charakteristische Gruppe?",
          ],
          difficulty: 1,
          tags: ["alkohole", "hydroxylgruppe", "funktionelle-gruppe"],
        },
        {
          question:
            "Welches Zwischenprodukt entsteht beim Abbau von Ethanol zu Essigsäure (Acetat) im menschlichen Körper?",
          options: ["Propanol", "Acetaldehyd (Ethanal)", "Aceton", "Formaldehyd", "Milchsäure"],
          correctIndex: 1,
          explanation:
            "Der hepatische Ethanolabbau verläuft zweistufig: (1) Ethanol → Acetaldehyd (Ethanal): katalysiert durch Alkohol-Dehydrogenase (ADH), NAD⁺ → NADH. (2) Acetaldehyd → Acetat (Essigsäure): katalysiert durch Aldehyd-Dehydrogenase (ALDH2), NAD⁺ → NADH. Acetaldehyd ist das toxische Zwischenprodukt, das für Flush-Reaktion, Kater-Symptome (Kopfschmerz, Übelkeit) und langfristige Leberschäden verantwortlich ist. Menschen mit ALDH2*2-Mutation bauen Acetaldehyd langsamer ab → stärkere Reaktionen.",
          hints: [
            "Primärer Alkohol → bei Oxidation entsteht zuerst ein Aldehyd.",
            "ADH = Alkohol-Dehydrogenase; was oxidiert sie Ethanol zu?",
          ],
          difficulty: 2,
          tags: ["ethanolabbau", "acetaldehyd", "aldehyd-dehydrogenase"],
        },
        {
          question:
            "Welche Reaktion entsteht aus Essigsäure (CH₃COOH) und Ethanol (C₂H₅OH) unter Katalyse mit konz. H₂SO₄?",
          options: [
            "Acetaldehyd und Wasser",
            "Diethylether und Wasser",
            "Ethylacetat (Ester) und Wasser",
            "Aceton und Wasser",
            "Milchsäure und Wasser",
          ],
          correctIndex: 2,
          explanation:
            "Die Veresterungsreaktion: Carbonsäure + Alkohol ⇌ Ester + Wasser. CH₃COOH (Essigsäure) + C₂H₅OH (Ethanol) → CH₃-COO-C₂H₅ (Ethylacetat, Essigsäureethylester) + H₂O. Ethylacetat riecht fruchtig und wird als Lösungsmittel verwendet (z.B. in Nagellackentferner). Katalysator: konz. H₂SO₄ oder andere starke Säuren. Die Reaktion ist reversibel (Gleichgewicht); Wasserentfernung verschiebt das Gleichgewicht zur Esterseite.",
          hints: [
            "Veresterung = Carbonsäure + Alkohol. Welche Gruppe bleibt aus der Säure, welche aus dem Alkohol?",
            "Ester hat die Struktur R-COO-R'. Die Endung 'acetat' kommt von Essigsäure.",
          ],
          difficulty: 2,
          tags: ["veresterung", "ester", "ethylacetat"],
        },
        {
          question: "Warum sind Amine basisch?",
          options: [
            "Weil sie ein H⁺ abgeben können",
            "Weil sie in Wasser dissoziieren wie starke Basen",
            "Weil sie eine -OH-Gruppe enthalten",
            "Weil der Stickstoff ein freies Elektronenpaar hat, das Protonen aufnehmen kann",
            "Weil ihre Kohlenstoffkette unpolar ist",
          ],
          correctIndex: 3,
          explanation:
            "Amine sind organische Derivate des Ammoniaks (NH₃). Der Stickstoff in Aminen besitzt ein freies (nicht-bindendes) Elektronenpaar. Dieses Elektronenpaar kann ein Proton (H⁺) aufnehmen, was das Amin zur Base macht: R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻. Die Basenstärke von Aminen hängt von der Elektronendichte am N ab (aliphatische Amine sind basischer als aromatische Amine). Aminosäuren sind amphoter: die -NH₂-Gruppe ist basisch, die -COOH-Gruppe ist sauer.",
          hints: [
            "Basen nehmen Protonen auf (Brønsted). Was am N-Atom ermöglicht das?",
            "NH₃ (Ammoniak) ist eine Base. Was haben Amine mit Ammoniak gemeinsam?",
          ],
          difficulty: 2,
          tags: ["amine", "freies-elektronenpaar", "brønsted-base"],
        },
        {
          question: "Welche Verbindungsklasse enthält die Carboxylgruppe (-COOH)?",
          options: ["Ester", "Amine", "Ketone", "Aldehyde", "Carbonsäuren"],
          correctIndex: 4,
          explanation:
            "Carbonsäuren sind charakterisiert durch die Carboxylgruppe -COOH, die eine Kombination aus Carbonylgruppe (C=O) und Hydroxylgruppe (-OH) darstellt. Sie sind Brønsted-Säuren und können ein Proton abgeben: R-COOH ⇌ R-COO⁻ + H⁺. Typische pKₐ-Werte: 4-5 (schwache Säuren). Wichtige Vertreter: Ameisensäure (pKₐ 3,75), Essigsäure (pKₐ 4,75), Milchsäure (pKₐ 3,86), Zitronensäure (pKₐ1 3,13). Carbonsäuren bilden Ester durch Reaktion mit Alkoholen.",
          hints: [
            "Die Endsilbe '-säure' deutet auf welche Verbindungsklasse hin?",
            "-COOH = Carbonyl + Hydroxyl. Diese Kombination ist typisch für...",
          ],
          difficulty: 1,
          tags: ["carbonsäuren", "carboxylgruppe", "schwache-säure"],
        },
        {
          question:
            "Was sind Ketonkörper, und bei welcher Stoffwechsellage entstehen sie vermehrt?",
          options: [
            "Acetoacetat, β-Hydroxybutyrat und Aceton; entstehen bei Glucose-Mangel (Fasten, Diabetes)",
            "Glucose-Abkömmlinge; entstehen nach Mahlzeiten",
            "Aminosäuren; entstehen bei hohem Proteinkonsum",
            "Fettsäuren; entstehen bei Fettreicher Ernährung",
            "Triglyceride; entstehen bei hohem Insulinspiegel",
          ],
          correctIndex: 0,
          explanation:
            "Ketonkörper (Acetoacetat, β-Hydroxybutyrat und Aceton) werden in der Leber aus Acetyl-CoA gebildet, wenn die β-Oxidation die Kapazität des Citratzyklus übersteigt — d.h. bei Glucose-Mangel (Fasten, Hunger) oder wenn Glucose nicht genutzt werden kann (Diabetes mellitus Typ 1, Insulinmangel). Ketonkörper dienen als alternativer Energieträger für Gehirn und Muskel. Bei exzessiver Produktion sinkt der Blut-pH (Ketoazidose, pH < 7,35). Aceton (flüchtig) verleiht dem Atem einen charakteristischen süßlich-fruchtigen Geruch.",
          hints: [
            "Glucose-Mangel → Leber sucht Alternative. Was wird aus Acetyl-CoA wenn der Citratzyklus überlastet ist?",
            "Ketoazidose ist eine lebensbedrohliche Komplikation beim Typ-1-Diabetes. Welche Verbindungen verursachen den niedrigen pH?",
          ],
          difficulty: 2,
          tags: ["ketonkörper", "ketoazidose", "diabetes-fasten"],
        },
        {
          question: "Welches der folgenden Medikamente ist chemisch gesehen ein Ester?",
          options: [
            "Ibuprofen (Carbonsäure)",
            "Aspirin (Acetylsalicylsäure)",
            "Paracetamol (Amid)",
            "Penicillin (β-Lactam)",
            "Metformin (Guanidin-Derivat)",
          ],
          correctIndex: 1,
          explanation:
            "Aspirin (Acetylsalicylsäure) ist ein Ester: Es entsteht durch Reaktion der Hydroxylgruppe der Salicylsäure mit Essigsäureanhydrid (Veresterung). Die Estergruppe (-COO-) verbindet den Benzolring der Salicylsäure mit der Acetylgruppe. Im Körper wird Aspirin hydrolysiert (gespalten) zu Salicylsäure und Acetat. Aspirin hemmt irreversibel die Cyclooxygenase (COX-1 und COX-2) durch Acetylierung → Hemmung der Prostaglandinsynthese → analgetisch, antipyretisch, antiinflammatorisch, thrombozytenaggregationshemmend.",
          hints: [
            "Aspirin = Acetylsalicylsäure. 'Acetyl-' deutet auf welche Verbindungsklasse hin, wenn es an -OH gebunden ist?",
            "Ester enthalten die Gruppe -COO-. Welches Mittel hat eine solche Gruppe in seiner Struktur?",
          ],
          difficulty: 2,
          tags: ["aspirin", "ester", "cox-hemmung"],
        },
      ],
      diagram: "functional-groups",
    },

    // ch-12-04 archiviert → _archiv/chemie/kap6-org-archived-uks.ts (NOT explicitly in MedAT scope)
    // === from kap13-naturstoffe ===
    {
      id: "ch-13-01",
      title: "Aminosäuren und Proteine",
      imageUrl: "/images/bms/ch-aminosaeure.jpg",
      imageCaption:
        "Abb.: Grundstruktur einer Aminosäure mit funktionellen Gruppen (OpenStax, CC BY 4.0)",
      content: `## Amine — Stickstoffbasen der organischen Chemie

Aminosäuren sind die Bausteine aller Proteine — und damit die molekulare Grundlage des Lebens. Ihre Chemie zu verstehen ist Voraussetzung für Biochemie, Pharmakologie und klinische Medizin. Bevor wir die Aminosäuren selbst betrachten, lohnt ein kurzer Blick auf die funktionelle Gruppe, die ihnen den Namen gibt: die **Aminogruppe (–NH₂)**.

Amine entstehen formal durch schrittweisen Ersatz der Wasserstoffatome im Ammoniak (NH₃) durch organische Reste. Je nach Zahl der Substituenten am Stickstoff unterscheidet man:

- **Primäre Amine** (R–NH₂): ein organischer Rest, z. B. Methylamin (CH₃–NH₂)
- **Sekundäre Amine** (R₂NH): zwei Reste, z. B. Dimethylamin ((CH₃)₂NH)
- **Tertiäre Amine** (R₃N): drei Reste, z. B. Trimethylamin ((CH₃)₃N)

Das freie Elektronenpaar am Stickstoff macht alle Amine zu **Basen** — sie können ein Proton aufnehmen: R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻. Aliphatische Amine (nicht-aromatische, kettenförmige Amine; pKb ≈ 3–4) sind stärkere Basen als Ammoniak, weil der +I-Effekt (induktiver Elektronenschub durch Alkylgruppen) die Elektronendichte am N erhöht. Aromatische Amine wie Anilin (C₆H₅–NH₂) sind dagegen schwächere Basen (pKb ≈ 9,4), weil das Elektronenpaar ins aromatische π-System delokalisiert wird. Biogene Amine spielen eine zentrale Rolle als Neurotransmitter: Dopamin, Serotonin, Histamin und Adrenalin sind allesamt Amine.

{{DIAGRAM:amino-acid-structure}}

---

## Grundstruktur der Aminosäuren

Alle 20 proteinogenen Aminosäuren teilen einen einheitlichen Bauplan am zentralen **α-Kohlenstoffatom** — vier verschiedene Gruppen sind daran gebunden:

1. Eine **α-Aminogruppe** (–NH₂)
2. Eine **α-Carboxylgruppe** (–COOH)
3. Ein **Wasserstoffatom** (–H)
4. Eine variable **Seitenkette (R-Gruppe)** — sie bestimmt die Identität und Eigenschaften jeder Aminosäure

Da das α-C vier verschiedene Substituenten trägt, ist es ein **Chiralitätszentrum** (Stereozentrum). Alle proteinogenen Aminosäuren liegen im Körper ausschließlich als **L-Enantiomere** vor (die Fischer-Projektion zeigt die NH₂-Gruppe links). Einzige Ausnahme: **Glycin** (R = H) — mit zwei identischen Substituenten am α-C ist es achiral.

{{IMAGE}}

> **Merke:** Vier Gruppen am α-C: NH₂, COOH, H, R. Vier verschiedene Reste = Chiralität. Alle proteinogenen AS sind L-konfiguriert. Glycin (R = H) ist die einzige achirale Ausnahme.

---

## Zwitterion und isoelektrischer Punkt

Bei physiologischem pH (~7,4) liegt eine Aminosäure nicht als ungeladenes Molekül vor, sondern als **Zwitterion** (inneres Salz): Die Aminogruppe ist protoniert (–NH₃⁺), die Carboxylgruppe deprotoniert (–COO⁻). Das Molekül trägt also gleichzeitig eine positive und eine negative Ladung, ist aber nach außen neutral.

Der **isoelektrische Punkt (pI)** ist der pH-Wert, bei dem die Nettoladung einer Aminosäure exakt null beträgt. Am pI wandert die Aminosäure im elektrischen Feld nicht — sie bleibt stehen (Grundlage der **Elektrophorese**).

Für Aminosäuren ohne ionisierbare Seitenkette gilt: **pI = (pKs₁ + pKs₂) / 2** (Mittelwert der pKs-Werte von COOH und NH₃⁺). Für saure AS (Asp, Glu) verschiebt sich der pI nach unten (~2,8–3,2), für basische AS (Lys, Arg, His) nach oben (~7,6–10,8).

> **Merke:** Am isoelektrischen Punkt (pI) hat eine Aminosäure keine Nettoladung und wandert im elektrischen Feld nicht. pI = Mittelwert der beiden relevanten pKs-Werte.

---

## Klassifikation der Seitenketten

Die Seitenkette (R-Gruppe) bestimmt, ob eine Aminosäure hydrophob oder hydrophil, geladen oder ungeladen ist — und damit, wo sie sich im gefalteten Protein bevorzugt aufhält.

**Unpolar / hydrophob** — diese Reste verstecken sich im Proteininneren, weg vom Wasser:

| Aminosäure | Kürzel | Seitenkette |
|---|---|---|
| Glycin | Gly (G) | –H (kleinstes, flexibelstes) |
| Alanin | Ala (A) | –CH₃ |
| Valin | Val (V) | –CH(CH₃)₂ (verzweigt) |
| Leucin | Leu (L) | –CH₂CH(CH₃)₂ |
| Isoleucin | Ile (I) | –CH(CH₃)CH₂CH₃ |
| Prolin | Pro (P) | zyklische Seitenkette (Iminosäure!) |
| Phenylalanin | Phe (F) | –CH₂–C₆H₅ (Benzylrest) |
| Tryptophan | Trp (W) | Indolring (größte AS) |
| Methionin | Met (M) | –CH₂CH₂–S–CH₃ (schwefelhaltig) |

**Polar / ungeladen** — können Wasserstoffbrücken bilden:

| Aminosäure | Kürzel | Besonderheit |
|---|---|---|
| Serin | Ser (S) | –OH (phosphorylierbar!) |
| Threonin | Thr (T) | –OH (sekundär, phosphorylierbar) |
| Asparagin | Asn (N) | Amid von Asparaginsäure |
| Glutamin | Gln (Q) | Amid von Glutaminsäure |
| Cystein | Cys (C) | –SH → Disulfidbrücken (–S–S–) |
| Tyrosin | Tyr (Y) | phenolische –OH (phosphorylierbar) |

**Positiv geladen (basisch)** bei pH 7,4:

| Aminosäure | Kürzel | pKs Seitenkette |
|---|---|---|
| Lysin | Lys (K) | ~10,5 (ε-Aminogruppe) |
| Arginin | Arg (R) | ~12,5 (Guanidiniumgruppe) |
| Histidin | His (H) | ~6,0 (Imidazolring) |

**Negativ geladen (sauer)** bei pH 7,4:

| Aminosäure | Kürzel | pKs Seitenkette |
|---|---|---|
| Asparaginsäure | Asp (D) | ~3,9 |
| Glutaminsäure | Glu (E) | ~4,1 |

> **Merke:** Unpolar im Proteininneren, polar an der Oberfläche. Saure AS (Asp, Glu) tragen bei pH 7,4 eine negative Ladung (–COO⁻), basische AS (Lys, Arg, His) eine positive. Cystein bildet als einzige AS kovalente Disulfidbrücken.

---

## Besondere Aminosäuren — Prolin und Histidin

**Prolin** ist streng genommen eine **Iminosäure**, keine Aminosäure: Seine Seitenkette bildet einen Ring mit dem α-Stickstoff, sodass die Aminogruppe sekundär ist (–NH– statt –NH₂). Diese Ringstruktur schränkt die Rotationsfreiheit des Peptidrückgrats massiv ein und erzwingt einen Knick in der Peptidkette. Deshalb findet sich Prolin häufig in **Schleifen** (Turns) und stört α-Helices — man nennt es den „Helixbrecher".

**Histidin** verdient besondere Aufmerksamkeit: Sein **Imidazolring** hat einen pKs von ~6,0 — das liegt nahe am physiologischen pH von 7,4. Deshalb ist Histidin bei Körper-pH teilweise protoniert, teilweise unprotoniert. Diese Eigenschaft macht Histidin zum einzigen Aminosäurerest, der bei physiologischem pH als **Puffer** und als **Protonenüberträger** in Enzymaktivzentren fungieren kann (z. B. in der katalytischen Triade von Serinproteasen: Ser–His–Asp).

> **Merke:** Prolin = Iminosäure mit Ringstruktur → „Helixbrecher". Histidin (pKs ~6) = einzige AS, die bei pH 7,4 als Puffer und Protonendonor/-akzeptor fungiert.

---

## Essentielle Aminosäuren

Von den 20 proteinogenen Aminosäuren kann der menschliche Körper **8 nicht selbst synthetisieren** — sie müssen über die Nahrung zugeführt werden: **Val, Leu, Ile, Thr, Met, Phe, Trp, Lys**. Histidin ist zusätzlich essentiell im Säuglings- und Kindesalter (schnelles Wachstum).

Merkhilfe für die 8 essentiellen AS: **„Phänomenale Isolde Leuchtete Thronsaal Valiums Methode Lystig Tryptisch"** — oder kürzer nach Anfangsbuchstaben: **Phe, Ile, Leu, Thr, Val, Met, Lys, Trp**.

---

## Peptidbindung

Die Verknüpfung zweier Aminosäuren erfolgt über die **Peptidbindung** (eine Amidbindung, –CO–NH–). Sie entsteht durch **Kondensation** (Wasserabspaltung) zwischen der Carboxylgruppe der einen und der Aminogruppe der nächsten Aminosäure.

Die Peptidbindung hat drei bemerkenswerte Eigenschaften:

1. **Partieller Doppelbindungscharakter** — durch Mesomerie zwischen C=O und C–N ist die Bindungslänge (1,32 Å) kürzer als eine typische C–N-Einfachbindung (1,47 Å)
2. **Planarität** — die sechs Atome Cα–C(=O)–N(–H)–Cα liegen in einer Ebene
3. **Keine freie Rotation** um die C–N-Achse; fast immer in **trans-Konfiguration** (Ausnahme: X–Pro-Bindungen können cis sein)

Die Synthese am Ribosom verläuft stets vom **N-Terminus zum C-Terminus** (die mRNA wird 5'→3' abgelesen).

> **Merke:** Peptidbindung = Kondensation (–H₂O) zwischen –COOH und –NH₂. Planar durch Mesomerie, partieller Doppelbindungscharakter, trans-Konfiguration. Synthese: N→C.

![Peptidbindung zwischen zwei Aminosäuren](/images/bms/ch-peptidbindung.jpg)

---

## Proteinstruktur — vier hierarchische Ebenen

Die räumliche Organisation von Proteinen gliedert sich in vier Ebenen, die aufeinander aufbauen:

**Primärstruktur** — die lineare Aminosäuresequenz, festgelegt durch die mRNA. Sie enthält bereits die gesamte Information für die dreidimensionale Faltung (Anfinsen-Dogma).

**Sekundärstruktur** — lokale, regelmäßige Faltungsmuster, stabilisiert durch **H-Brücken im Peptidrückgrat** (nicht in den Seitenketten!):
- **α-Helix**: rechtsgängige Schraube, 3,6 AS pro Windung, H-Brücke zwischen C=O(i) und N–H(i+4)
- **β-Faltblatt**: gestreckte Ketten lagern sich parallel oder antiparallel nebeneinander, H-Brücken zwischen den Strängen

**Tertiärstruktur** — die gesamte 3D-Faltung einer Polypeptidkette, stabilisiert durch Kräfte der **Seitenketten**:
- Hydrophobe Wechselwirkungen (unpolare Reste im Proteininneren)
- Ionische Wechselwirkungen / Salzbrücken (z. B. Lys⁺···Glu⁻)
- Wasserstoffbrücken zwischen polaren Seitenketten
- **Disulfidbrücken** (Cys–S–S–Cys) — die einzigen kovalenten Bindungen in der Tertiärstruktur (außer Peptidbindungen selbst)

**Quartärstruktur** — Zusammenlagerung mehrerer Polypeptidketten (Untereinheiten) zu einem funktionellen Komplex. Bekanntestes Beispiel: **Hämoglobin** (α₂β₂-Tetramer).

> **Merke:** Primär = Sequenz. Sekundär = H-Brücken im Rückgrat (α-Helix, β-Faltblatt). Tertiär = Seitenketten-WW + Disulfidbrücken. Quartär = Untereinheiten.

![Die vier Ebenen der Proteinstruktur](/images/bms/ch-proteinstruktur.jpg)

---

## Disulfidbrücken und Denaturierung

**Disulfidbrücken** (–S–S–) entstehen durch Oxidation zweier Cystein-SH-Gruppen. Sie stabilisieren die Tertiär- und Quartärstruktur kovalent und sind besonders wichtig in **sekretierten Proteinen** (extrazellulär, z. B. Antikörper, Insulin). **Insulin** besteht aus zwei Peptidketten (A-Kette: 21 AS, B-Kette: 30 AS), die durch zwei Interchain-Disulfidbrücken zusammengehalten werden; die A-Kette hat zusätzlich eine Intrachain-Disulfidbrücke.

**Denaturierung** bezeichnet den Verlust der dreidimensionalen Struktur (Sekundär- bis Quartärstruktur), wobei die **Primärstruktur erhalten bleibt**. Auslöser:
- **Hitze** (>~60 °C) — zerstört H-Brücken und hydrophobe WW
- **Extreme pH-Werte** — verändern ionische WW und Protonierungszustände
- **Detergenzien** (z. B. SDS) — stören hydrophobe WW
- **Reduktionsmittel** (z. B. β-Mercaptoethanol) — spalten Disulfidbrücken
- **Schwermetalle** (Hg²⁺, Pb²⁺) — binden an SH-Gruppen

Ein alltägliches Beispiel: Beim Kochen eines Eis wird das transparente Eiklar (Albumin) irreversibel weiß und fest. Manche Proteine renaturieren unter milden Bedingungen spontan — Anfinsen zeigte dies an der Ribonuklease und bewies, dass die Aminosäuresequenz allein die 3D-Struktur festlegt.

---

## Enzymkinetik — Grundprinzipien

Enzyme sind biologische Katalysatoren: Sie senken die Aktivierungsenergie, ohne selbst verbraucht zu werden. Die **Michaelis-Menten-Kinetik** beschreibt das Grundprinzip: E + S ⇌ ES → E + P.

- **Vmax** = maximale Reaktionsgeschwindigkeit (alle Enzymzentren gesättigt)
- **Km** (Michaelis-Konstante) = Substratkonzentration bei v = Vmax/2. Niedriger Km = hohe Affinität

**Enzymhemmung** — ein zentrales Prinzip der Pharmakologie:
- **Kompetitiv**: Inhibitor konkurriert mit Substrat um aktives Zentrum → Km steigt, Vmax bleibt gleich (durch Substratüberschuss überwindbar)
- **Nicht-kompetitiv**: Inhibitor bindet an allosterische Stelle → Vmax sinkt, Km bleibt gleich

Beispiele: ACE-Hemmer (kompetitiv), Statine (kompetitiv an HMG-CoA-Reduktase), Proteaseinhibitoren (HIV-Therapie).

---

## Klinischer Bezug

**Phenylketonurie (PKU)**: Autosomal-rezessiver Defekt der Phenylalanin-Hydroxylase → Phe kann nicht zu Tyrosin hydroxyliert werden. Phe akkumuliert und wird zu neurotoxischen Metaboliten abgebaut (Phenylpyruvat, Phenylacetat). Unbehandelt: schwere Intelligenzminderung. Therapie: phenylalaninarme Diät ab Geburt. PKU wird im **Neugeborenenscreening** (Guthrie-Test) erfasst.

**Sichelzellanämie**: Ein einziger Aminosäureaustausch in der Primärstruktur — Glu→Val an Position 6 der β-Globinkette (HbS statt HbA) — verändert die gesamte Proteinfunktion. Die hydrophobe Val-Seitenkette passt in eine komplementäre Tasche des Nachbarmoleküls → Desoxy-HbS polymerisiert → sichelförmige Erythrozyten → Gefäßverschlüsse.

**Biomarker** — intrazelluläre Proteine treten bei Zellschäden ins Blut aus:
- **Troponin T/I** → Herzinfarkt (Goldstandard, steigt nach 3–6 h)
- **CK-MB** → frühzeitig bei Myokardschäden
- **GPT/ALT** → leberparenchymspezifisch (Hepatitis)
- **LDH** → unspezifisch, aber sensibel

> **Merke:** PKU = Phe-Hydroxylase-Defekt → Phe↑, Tyrosin↓ → Neugeborenenscreening! Sichelzellanämie = Glu6Val in β-Globin → HbS-Polymerisation. Troponin = Goldstandard Herzinfarkt.

> **Prüfungstipp:** MedAT-Klassiker: „Welche Bindung stabilisiert die Sekundärstruktur?" → H-Brücken im Peptidrückgrat (nicht Seitenketten!). „Welche Bindung ist kovalent in der Tertiärstruktur?" → Disulfidbrücken (Cys–Cys). Histidin als Puffer bei pH 7,4 und Prolin als Helixbrecher sind beliebte Fallenoptionen. Essentielle AS werden häufig abgefragt — Merkhilfe nutzen!`,
      stichworte: [
        "Amine",
        "Aminosäuren",
        "Zwitterion",
        "Isoelektrischer Punkt",
        "Proteine",
        "Peptidbindung",
        "Primärstruktur",
        "Sekundärstruktur",
        "Tertiärstruktur",
        "Quartärstruktur",
        "Disulfidbrücken",
        "α-Helix",
        "β-Faltblatt",
        "Denaturierung",
        "Histidin",
        "Prolin",
        "Troponin",
        "PKU",
      ],
      lernziele: [
        "Primäre, sekundäre und tertiäre Amine unterscheiden und ihre Basizität erklären",
        "Den Grundaufbau einer Aminosäure (α-C, Amino-, Carboxylgruppe, R-Gruppe) beschreiben und die Seitenketten nach Polarität und Ladung klassifizieren",
        "Das Zwitterion-Konzept und den isoelektrischen Punkt (pI) erklären und für die Elektrophorese anwenden",
        "Die Besonderheiten von Prolin (Iminosäure, Helixbrecher) und Histidin (Puffer bei pH 7,4) erläutern",
        "Die Bildung einer Peptidbindung als Kondensationsreaktion erklären und ihre strukturellen Besonderheiten (planar, partieller Doppelbindungscharakter) nennen",
        "Die vier Ebenen der Proteinstruktur und die jeweiligen stabilisierenden Wechselwirkungen beschreiben",
        "Denaturierung erklären und Beispiele für reversible und irreversible Denaturierung nennen",
        "Klinisch relevante Proteindefekte (Sichelzellanämie, PKU) und enzymatische Biomarker kennen",
      ],
      sections: [
        {
          heading: "Peptidbindung und Proteinstruktur im Überblick",
          text: "Die Peptidbindung ist das Rückgrat aller Proteine. Sie entsteht durch Kondensation (–H₂O) zwischen –COOH und –NH₂. Ihre Planarität durch Mesomerie schränkt die Rotation ein und zwingt das Polypeptid in definierte Konformationen. Auf der Primärstruktur (Sequenz) bauen Sekundärstruktur (α-Helix, β-Faltblatt durch H-Brücken im Rückgrat), Tertiärstruktur (globale 3D-Faltung durch Seitenketten-WW) und Quartärstruktur (Multimerbildung) auf.",
          merksatz:
            "Primär = Sequenz; Sekundär = H-Brücken im Rückgrat; Tertiär = Seitenketten-Wechselwirkungen; Quartär = Untereinheiten.",
        },
        {
          heading: "Essentielle Aminosäuren und ihre klinische Bedeutung",
          text: "Die acht essentiellen Aminosäuren des Erwachsenen (Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) können vom Körper nicht synthetisiert werden. PKU entsteht bei fehlendem Abbau von Phenylalanin (Enzymdefekt Phe-Hydroxylase → fehlendes Tyrosin, toxische Phe-Metabolite → Hirnschäden wenn unbehandelt). Die Sichelzellanämie zeigt, wie ein einziger Aminosäurenaustausch in der Primärstruktur die gesamte Proteinfunktion und klinische Manifestation verändert.",
          merksatz:
            "Essentielle AS: Ile-Leu-Lys-Met-Phe-Thr-Trp-Val — Merkhilfe: 'Ich Liebe Leckere Mahlzeiten, Phanta-stisch Toll Wirklich Verdient'.",
        },
        {
          heading: "Enzymatische Biomarker in der Klinik",
          text: "Intrazelluläre Enzyme treten bei Zellschäden ins Blut aus und dienen als diagnostische Marker. Troponin T und I sind herzmuskelspezifisch und hochsensitiv für den Myokardinfarkt. CK-MB (Kreatinkinase, Herzfraktion) steigt früh an. LDH (Laktatdehydrogenase) ist wenig spezifisch, aber sensibel. GPT/ALT ist leberparenchymspezifisch (Hepatitis), AST/GOT findet sich in Herz und Leber.",
          merksatz: "Troponin → Herzinfarkt; GPT/ALT → Leber; CK-MB → frühzeitig bei Herzschäden.",
        },
      ],

      merksätze: [
        "Amine: primär (R–NH₂), sekundär (R₂NH), tertiär (R₃N) — alle basisch dank freiem Elektronenpaar am N.",
        "Alle proteinogenen Aminosäuren (außer Glycin) sind L-konfiguriert und tragen am α-C: –NH₂, –COOH, –H, –R.",
        "Bei pH 7,4 liegen Aminosäuren als Zwitterionen vor: –NH₃⁺ und –COO⁻ gleichzeitig.",
        "Isoelektrischer Punkt (pI): pH, bei dem Nettoladung = 0 → keine Wanderung im E-Feld.",
        "Prolin = Iminosäure (sekundäres Amin im Ring) → Helixbrecher. Histidin (pKs ~6) → Puffer bei pH 7,4.",
        "Essentielle AS (8 Erwachsene): Ile, Leu, Lys, Met, Phe, Thr, Trp, Val — Histidin zusätzlich für Kinder.",
        "Peptidbindung = Amidbindung; entsteht durch Kondensation (–H₂O); planar, partieller Doppelbindungscharakter, trans.",
        "Synthese am Ribosom: N-Terminus → C-Terminus (5'→3' auf mRNA kodiert).",
        "Sekundärstruktur α-Helix: H-Brücken zwischen C=O(n) und N–H(n+4), rechtsgängig, 3,6 AS/Windung.",
        "Disulfidbrücken (Cys–Cys) sind die einzigen kovalenten Bindungen in der Tertiär-/Quartärstruktur (außer Peptidbindungen).",
        "Insulin: 2 Ketten (A: 21 AS, B: 30 AS) über 2 Interchain- + 1 Intrachain-Disulfidbrücke verknüpft.",
        "Denaturierung zerstört Sekundär- bis Quartärstruktur, nicht die Primärstruktur.",
        "Sichelzellanämie: Glu6Val in β-Globin → Hämoglobin-S aggregiert bei Desoxigenierung.",
        "PKU: Phenylalanin-Hydroxylase-Defekt → Phe akkumuliert, Tyrosin fehlt → Neugeborenenscreening.",
        "Biomarker: Troponin = Herzinfarkt; GPT/ALT = Leberschaden; LDH = unspezifisch.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Zusammenhang zwischen Primärstruktur und den höheren Strukturebenen eines Proteins am Beispiel der Sichelzellanämie.",
        answer:
          "Die Primärstruktur eines Proteins ist die lineare Abfolge der Aminosäuren, die durch Peptidbindungen verknüpft sind. Sie wird direkt durch die DNA-Sequenz kodiert und legt alle übergeordneten Strukturen fest, da sie die chemischen Eigenschaften der Seitenketten bestimmt, die für Faltung und Funktion verantwortlich sind. Bei der Sichelzellanämie ist dies exemplarisch zu sehen: Eine einzige Punktmutation im β-Globin-Gen führt zum Austausch der hydrophilen, negativ geladenen Glutaminsäure an Position 6 durch die hydrophobe, ungeladene Aminosäure Valin (Glu6Val). Dieser Austausch verändert die Tertiärstruktur geringfügig, hat aber dramatische Konsequenzen für die Quartärstruktur: Desoxy-HbS-Moleküle polymerisieren, da die hydrophobe Val-Seitenkette in eine komplementäre hydrophobe Tasche eines benachbarten Moleküls passt. Die langen HbS-Polymere verformen Erythrozyten zu sichelförmigen Zellen, die Kapillaren verstopfen und vorzeitig hämolysieren. Dieses Beispiel zeigt, dass die gesamte Funktion eines Proteins – von der atomaren Struktur bis zum klinischen Krankheitsbild – in der Primärstruktur kodiert ist und ein einziger Aminosäureaustausch diese gesamte Kaskade verändern kann.",
      },
      klinischerBezug:
        "Troponin, CK-MB und LDH als Serummarker bei Myokardinfarkt; PKU-Screening bei Neugeborenen; Sichelzellanämie als Modell für Struktur-Funktions-Beziehung.",
      selfTest: [
        {
          question:
            "Welche der folgenden Aminosäuren ist die einzige achirale proteinogene Aminosäure?",
          options: ["Alanin", "Valin", "Cystein", "Serin", "Glycin"],
          correctIndex: 4,
          explanation:
            "Glycin (H₂N–CH₂–COOH) ist die einzige proteinogene Aminosäure ohne Stereozentrum, da das α-Kohlenstoffatom zwei identische Wasserstoffatome trägt (R = H). Damit fehlt die Voraussetzung für Chiralität (vier verschiedene Substituenten am sp³-C). Alle anderen 19 proteinogenen Aminosäuren tragen vier unterschiedliche Gruppen am α-C und liegen ausschließlich in der L-Konfiguration vor. Alanin (R = –CH₃), Cystein (R = –CH₂–SH), Serin (R = –CH₂–OH) und Valin (R = –CH(CH₃)₂) sind alle chiral.",
          hints: [
            "Chiralität erfordert vier verschiedene Substituenten am zentralen Kohlenstoffatom.",
            "Betrachte, was die Seitenkette (R-Gruppe) dieser Aminosäure ist — sie ist die kleinste denkbare.",
          ],
          tags: ["aminosäuren", "chiralität", "glycin"],
          difficulty: 1,
        },
        {
          question:
            "Welche strukturelle Besonderheit der Peptidbindung verhindert die freie Rotation um die C–N-Achse?",
          options: [
            "Die Peptidbindung hat partiellen Doppelbindungscharakter durch Mesomerie",
            "Die Peptidbindung ist eine Einfachbindung mit großem Raumanspruch",
            "Die Peptidbindung ist eine Disulfidbrücke zwischen Cysteinen",
            "Die Peptidbindung enthält ein Metallatom als Rotationshemmung",
            "Die freie Rotation wird ausschließlich durch sterische Hinderung der R-Gruppen verhindert",
          ],
          correctIndex: 0,
          explanation:
            "Die Peptidbindung (–CO–NH–) besitzt partiellen Doppelbindungscharakter aufgrund von Mesomerie: Das freie Elektronenpaar des Stickstoffs ist in das π-System der benachbarten Carbonylgruppe delokalisiert. Dadurch liegt die C–N-Bindung energetisch zwischen Einfach- und Doppelbindung (Bindungslänge ~1,32 Å, kürzer als typische C–N-Einfachbindung mit ~1,47 Å). Diese Elektronendelokalisierung macht die Bindung planar und starr — alle vier Atome (Cα, C=O, N, H sowie der folgende Cα) liegen in einer Ebene. Dies schränkt die möglichen Konformationen eines Polypeptids erheblich ein und ist Grundlage für definierte Sekundärstrukturen.",
          hints: [
            "Erinnere dich an das Konzept der Mesomerie bei der Amid-Gruppe.",
            "Bei welchem Hybridisierungszustand ist keine freie Rotation möglich?",
          ],
          tags: ["peptidbindung", "mesomerie", "proteinstruktur"],
          difficulty: 2,
        },
        {
          question: "Welche Wechselwirkungen stabilisieren die α-Helix als Sekundärstruktur?",
          options: [
            "Kovalente Disulfidbrücken zwischen Cysteinen im gleichen Strang",
            "Intramolekulare Wasserstoffbrücken zwischen C=O(n) und N–H(n+4) im Peptidrückgrat",
            "Ionische Wechselwirkungen zwischen geladenen Seitenketten",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Seitenketten",
            "Phosphodiesterbindungen zwischen den Aminosäureresten",
          ],
          correctIndex: 1,
          explanation:
            "Die α-Helix wird durch intramolekulare Wasserstoffbrücken zwischen der Carbonylgruppe (C=O) der Aminosäure an Position n und der Amidgruppe (N–H) der Aminosäure an Position n+4 im selben Strang stabilisiert. Diese H-Brücken verlaufen parallel zur Helixachse. Eine vollständige Windung umfasst 3,6 Aminosäurereste. Disulfidbrücken und ionische Wechselwirkungen stabilisieren die Tertiärstruktur, hydrophobe Effekte tragen ebenfalls zur Tertiärstruktur bei. Phosphodiesterbindungen gehören zur DNA/RNA, nicht zu Proteinen.",
          hints: [
            "Sekundärstruktur wird durch H-Brücken im Peptidrückgrat (nicht in den Seitenketten) stabilisiert.",
            "Die Zahl 'n+4' ist der Schlüssel zur α-Helix-Definition.",
          ],
          tags: ["sekundärstruktur", "alpha-helix", "wasserstoffbrücken"],
          difficulty: 2,
        },
        {
          question:
            "Bei der Sichelzellanämie liegt die Ursache in welcher Strukturebene des Hämoglobins?",
          options: [
            "Tertiärstruktur: Fehlfaltung der β-Globinkette durch Disulfidbrückenbruch",
            "Sekundärstruktur: Zerstörung der α-Helix-Segmente",
            "Primärstruktur: Glu→Val-Austausch an Position 6 der β-Globinkette",
            "Quartärstruktur: α- und β-Ketten können sich nicht zusammenlagern",
            "Kovalente Modifikation der Häm-Gruppe durch Oxidation",
          ],
          correctIndex: 2,
          explanation:
            "Die Sichelzellanämie wird durch eine Punktmutation im β-Globin-Gen verursacht, die zu einem Aminosäureaustausch in der Primärstruktur führt: Glutaminsäure (hydrophil, negativ geladen) an Position 6 wird durch Valin (hydrophob, ungeladen) ersetzt. Die veränderte Primärstruktur (HbS statt HbA) führt dazu, dass desoxygenierte HbS-Moleküle polymerisieren, weil die hydrophobe Val6-Seitenkette in eine komplementäre hydrophobe Tasche des Nachbarmoleküls passt. Dieses Beispiel illustriert, wie die Primärstruktur alle übergeordneten Strukturen und die Funktion eines Proteins determiniert.",
          hints: [
            "Beginne bei der molekularen Ursache: eine DNA-Mutation führt zu einem einzigen Aminosäurenaustausch.",
            "Welche Strukturebene beschreibt die Aminosäuresequenz eines Proteins?",
          ],
          tags: ["sichelzellanämie", "primärstruktur", "hämoglobin", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welche der folgenden Bindungstypen trägt zur Stabilisierung der Tertiärstruktur bei, NICHT aber zur Sekundärstruktur?",
          options: [
            "Wasserstoffbrücken zwischen Peptidrückgrat-Gruppen",
            "Die planare Struktur der Peptidbindung",
            "Peptidbindungen zwischen Aminosäureresten",
            "Disulfidbrücken zwischen Cysteinen",
            "Van-der-Waals-Kräfte im Rückgrat",
          ],
          correctIndex: 3,
          explanation:
            "Disulfidbrücken (–S–S–) entstehen durch oxidative Kupplung zweier Cystein-Thiolgruppen (–SH) und sind kovalente Bindungen zwischen Seitenketten — ein charakteristisches Merkmal der Tertiär- (und Quartär-)struktur. Sekundärstrukturen (α-Helix, β-Faltblatt) werden hingegen durch nicht-kovalente Wasserstoffbrücken im Peptidrückgrat stabilisiert. Peptidbindungen definieren die Primärstruktur. Die Planarität der Peptidbindung begrenzt Konformationen, ist aber kein Stabilisierungsmechanismus für eine bestimmte Strukturebene.",
          hints: [
            "Sekundärstruktur = Wasserstoffbrücken im Rückgrat. Was ist dagegen eine kovalente Bindung zwischen Seitenketten?",
            "Cystein enthält eine –SH-Gruppe, die eine besondere kovalente Bindung eingehen kann.",
          ],
          tags: ["tertiärstruktur", "disulfidbrücken", "cystein"],
          difficulty: 3,
        },
        {
          question: "Welche Aussage zur Denaturierung von Proteinen ist korrekt?",
          options: [
            "Denaturierung spaltet alle Peptidbindungen und setzt Aminosäuren frei",
            "Denaturierung zerstört die Primärstruktur, lässt aber höhere Strukturen intakt",
            "Denaturierung betrifft nur die Quartärstruktur, nicht die Sekundärstruktur",
            "Denaturierung ist immer reversibel durch Wiederherstellung physiologischer Bedingungen",
            "Denaturierung hebt Sekundär- bis Quartärstruktur auf, die Primärstruktur bleibt erhalten",
          ],
          correctIndex: 4,
          explanation:
            "Denaturierung bezeichnet den Verlust der nativen räumlichen Struktur (Sekundär-, Tertiär- und Quartärstruktur), wobei die kovalenten Peptidbindungen (Primärstruktur) erhalten bleiben. Auslöser sind Hitze (> Optimum → Zerstörung von H-Brücken und hydrophoben WW), extremer pH (Veränderung ionischer WW), organische Lösungsmittel (Störung des hydrophoben Effekts) und Reduktionsmittel (β-Mercaptoethanol → Spaltung von Disulfidbrücken). Denaturierung kann reversibel sein (manche Enzyme renaturieren bei Normalbedingungen, Chaperone helfen), ist aber häufig irreversibel (gekochtes Eiweiß, Prionen).",
          hints: [
            "Welche Bindungen in einem Protein sind kovalent und welche nicht-kovalent?",
            "Denaturierung = 'Verlust der Natur(form)' — der chemische Rückgrat bleibt, nur die Faltung geht verloren.",
          ],
          tags: ["denaturierung", "proteinstruktur", "reversibel"],
          difficulty: 1,
        },
        {
          question:
            "Welche Aussage zum Zwitterion und isoelektrischen Punkt (pI) von Aminosäuren ist korrekt?",
          options: [
            "Am pI liegt die Aminosäure vollständig ungeladen vor (weder NH₃⁺ noch COO⁻)",
            "Am pI wandert die Aminosäure im elektrischen Feld zur Kathode",
            "Am pI trägt die Aminosäure gleichzeitig positive und negative Ladung, aber die Nettoladung ist null",
            "Der pI aller 20 Aminosäuren liegt einheitlich bei pH 7,0",
            "Am pI ist die Aminosäure maximal löslich in Wasser",
          ],
          correctIndex: 2,
          explanation:
            "Am isoelektrischen Punkt (pI) liegt eine Aminosäure als Zwitterion vor: Die Aminogruppe ist protoniert (–NH₃⁺) und die Carboxylgruppe deprotoniert (–COO⁻). Die Nettoladung ist null, aber das Molekül trägt durchaus Ladungen — daher ist es nicht ‚ungeladen'. Am pI wandert die AS im elektrischen Feld nicht (Nettoladung = 0). Der pI variiert je nach Seitenkette: neutrale AS ~5,5–6,3, saure AS (Asp, Glu) ~2,8–3,2, basische AS (Lys, Arg, His) ~7,6–10,8. Am pI ist die Löslichkeit sogar minimal (geringste elektrostatische Abstoßung).",
          hints: [
            "Ein Zwitterion trägt gleichzeitig + und − Ladung — ist es dann wirklich ‚ungeladen'?",
            "Was passiert mit einem Teilchen ohne Nettoladung im elektrischen Feld?",
          ],
          tags: ["zwitterion", "isoelektrischer-punkt", "elektrophorese"],
          difficulty: 2,
        },
        {
          question:
            "Welche Besonderheit unterscheidet Histidin von allen anderen proteinogenen Aminosäuren?",
          options: [
            "Histidin ist die einzige Aminosäure mit einer Thiolgruppe (–SH) in der Seitenkette",
            "Histidin kann bei physiologischem pH (~7,4) als Protonendonor und -akzeptor fungieren, weil sein pKs nahe 6 liegt",
            "Histidin ist die einzige achirale proteinogene Aminosäure",
            "Histidin bildet als einzige Aminosäure eine zyklische Seitenkette mit dem Rückgrat-Stickstoff",
            "Histidin ist die einzige Aminosäure, die nicht in Peptidbindungen eingebaut werden kann",
          ],
          correctIndex: 1,
          explanation:
            "Der Imidazolring des Histidins hat einen pKs von ~6,0. Da der physiologische pH (7,4) relativ nahe am pKs liegt, existiert Histidin bei Körper-pH in einem Gleichgewicht zwischen protonierter und unprotonierter Form. Damit ist es die einzige proteinogene Aminosäure, die bei physiologischem pH effektiv als Puffer und als Protonenüberträger in Enzymaktivzentren wirken kann (z. B. katalytische Triade der Serinproteasen). Die Thiolgruppe gehört zu Cystein (nicht Histidin). Achiral ist nur Glycin. Die zyklische Seitenkette mit dem Rückgrat-N beschreibt Prolin.",
          hints: [
            "Welcher pKs-Wert muss in der Nähe des physiologischen pH liegen, damit eine Gruppe als Puffer wirkt?",
            "Henderson-Hasselbalch: maximale Pufferkapazität bei pH = pKs ± 1.",
          ],
          tags: ["histidin", "puffer", "enzymkatalyse", "imidazol"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-02",
      title: "Kohlenhydrate — Mono-, Di- und Polysaccharide",
      imageUrl: "/images/bms/ch-kohlenhydrate.jpg",
      imageCaption: "Abb.: Mono-, Di- und Polysaccharide im Vergleich (OpenStax, CC BY 4.0)",
      content: `Kohlenhydrate liefern den Großteil der Energie für den menschlichen Stoffwechsel und sind zentrale Bausteine von Zellwänden, Glykoproteinen und Nukleinsäuren. Ihre Chemie reicht von einfachen Zuckern bis zu riesigen Polysacchariden.

## Monosaccharide — die einfachsten Zucker

Kohlenhydrate gehören neben Lipiden und Proteinen zu den drei Hauptgruppen der Biomoleküle. Ihre allgemeine Summenformel Cₙ(H₂O)ₙ erklärt den historischen Namen „Kohlen-Hydrate", obwohl es sich chemisch nicht um Hydrate des Kohlenstoffs handelt. Die einfachsten Vertreter sind die **Monosaccharide** — Polyhydroxyaldehyde (Aldosen) oder Polyhydroxyketone (Ketosen), die sich nicht weiter hydrolysieren lassen.

Die wichtigste Aldohexose ist **Glucose** (Traubenzucker, Dextrose), die mit einem Blutspiegel von 70–100 mg/dl der zentrale Energieträger des menschlichen Stoffwechsels ist. Jede Körperzelle kann Glucose über die Glykolyse verwerten, und das Gehirn ist im Normalzustand fast ausschließlich auf Glucose als Brennstoff angewiesen. Als Ketohexose spielt **Fructose** (Fruchtzucker) eine Rolle, die vor allem in Obst und Honig vorkommt und in der Leber metabolisiert wird. **Galactose** schließlich ist das C4-Epimer der Glucose und Bestandteil der Lactose (Milchzucker).

{{IMAGE}}

## Ringformen und Mutarotation

In wässriger Lösung liegt Glucose überwiegend nicht in der offenkettigen Form vor, sondern bildet durch eine **intramolekulare Halbacetal-Reaktion** eine sechsgliedrige Ringstruktur (Pyranose-Ring): Die Aldehydgruppe am C1 reagiert mit der OH-Gruppe am C5. Dabei entsteht am C1 ein neues Chiralitätszentrum — das **anomere Kohlenstoffatom** — mit zwei möglichen Konfigurationen: **α-D-Glucose** (OH am C1 axial, unterhalb der Ringebene in der Haworth-Projektion) und **β-D-Glucose** (OH am C1 äquatorial, oberhalb). In Lösung stellen sich beide Anomere über die offenkettige Form ineinander um — die **Mutarotation** — bis sich ein Gleichgewicht einstellt (ca. 36 % α, 64 % β, <1 % offenkettig).

Die offenkettige Aldehydform, obwohl nur in Spuren vorhanden, verleiht der Glucose ihre **reduzierende Eigenschaft**: Sie kann die Fehling-Probe (Cu²⁺ → Cu₂O-Niederschlag, Farbumschlag von blau nach ziegelrot) und den Benedikt-Test positiv ausfallen lassen. Diese Eigenschaft ist klinisch relevant — der sogenannte Clinitest basierte darauf, und moderne Glucosesensoren nutzen enzymatische Varianten desselben Prinzips.

## Disaccharide

Durch **glykosidische Bindung** — eine Acetalbildung zwischen dem anomeren C-Atom eines Monosaccharids und einer OH-Gruppe eines zweiten — entstehen Disaccharide unter Wasserabspaltung. Die Art der Bindung bestimmt die biologischen Eigenschaften grundlegend.

**Maltose** (Malzzucker) besteht aus zwei Glucose-Einheiten, verknüpft über eine α-1,4-glykosidische Bindung. Da das anomere C-Atom des zweiten Glucoserests frei bleibt, ist Maltose reduzierend. **Lactose** (Milchzucker) verbindet Galactose und Glucose über eine β-1,4-glykosidische Bindung — sie wird durch das Enzym Lactase gespalten, dessen Mangel zur **Lactoseintoleranz** führt, einer der häufigsten Enzymopathien weltweit. **Saccharose** (Haushaltszucker) verknüpft Glucose und Fructose über eine α-1,β-2-glykosidische Bindung, bei der beide anomeren C-Atome beteiligt sind — deshalb ist Saccharose nicht-reduzierend.

## Polysaccharide

Werden viele Monosaccharide zu langen Ketten verknüpft, entstehen **Polysaccharide** — Makromoleküle mit vielfältigen biologischen Funktionen.

**Stärke** ist das pflanzliche Speicher-Polysaccharid und besteht aus zwei Komponenten: **Amylose** (unverzweigte α-1,4-Glucose-Kette, bildet eine Helix) und **Amylopektin** (α-1,4-Kette mit α-1,6-Verzweigungen alle 24–30 Reste). Der Abbau beginnt im Mund durch die Speichelamylase (α-Amylase), die α-1,4-Bindungen spaltet. **Glykogen** ist das tierische Gegenstück — strukturell dem Amylopektin ähnlich, aber dichter verzweigt (α-1,6-Verzweigung alle 8–12 Reste). Die dichtere Verzweigung ermöglicht schnelleren Glucosezugang, was bei plötzlichem Energiebedarf entscheidend ist. Die Leber speichert etwa 150 g Glykogen (Blutglucoseregulation), die Skelettmuskulatur etwa 400 g (lokaler Energiebedarf).

{{DIAGRAM:carbohydrate-types}}

**Cellulose** besteht aus Glucose-Einheiten mit **β-1,4-Verknüpfung** und bildet lange, gestreckte Ketten, die über Wasserstoffbrücken zu stabilen Fibrillen aggregieren. Der menschliche Darm besitzt keine β-Glucosidase (Cellulase) und kann Cellulose nicht spalten — sie dient als unverdaulicher Ballaststoff, der die Darmperistaltik fördert. Wiederkäuer nutzen dafür symbiotische Bakterien im Pansen.

## Glykosaminoglykane und Blutgruppenantigene

Neben den klassischen Speicher- und Strukturpolysacchariden gibt es **Glykosaminoglykane** (GAGs) — lange, unverzweigte Polysaccharid-Ketten aus sich wiederholenden Disaccharid-Einheiten, die stark negativ geladen sind (Sulfat- und Carboxylgruppen). Die wichtigsten Vertreter sind **Hyaluronsäure** (Gelenkflüssigkeit, Glaskörper des Auges), **Chondroitinsulfat** (Knorpel), **Heparansulfat** und **Heparin** (potentes Antikoagulans — hemmt Thrombin und Faktor Xa durch Aktivierung von Antithrombin III).

Die **Blutgruppenantigene** des AB0-Systems sind Kohlenhydratstrukturen auf der Erythrozytenoberfläche: Alle basieren auf dem gleichen Grundgerüst (H-Antigen). Beim Typ A wird N-Acetylgalactosamin angehängt, beim Typ B Galactose, beim Typ AB beide, und beim Typ 0 bleibt das H-Antigen unverändert.

## Klinischer Bezug

**Diabetes mellitus** ist die klinisch bedeutsamste Störung des Kohlenhydratstoffwechsels. Beim Typ 1 zerstört eine Autoimmunreaktion die β-Zellen des Pankreas, was zu absolutem Insulinmangel und unkontrollierter Hyperglykämie führt. Beim Typ 2 liegt primär eine Insulinresistenz vor. Beide Formen führen langfristig zu Makro- und Mikroangiopathie (Retinopathie, Nephropathie, Neuropathie). Die **nicht-enzymatische Glykierung** von Proteinen (z. B. HbA1c, glykiertes Hämoglobin) nimmt bei chronisch erhöhtem Blutzucker zu und dient als Langzeitmarker der Diabeteseinstellung — ein HbA1c-Wert spiegelt die durchschnittliche Blutglucosekonzentration der letzten 2–3 Monate wider.

**Galactosämie** ist ein seltener, aber schwerwiegender Enzymdefekt (Galactose-1-Phosphat-Uridyltransferase-Mangel): Galactose kann nicht in Glucose umgewandelt werden, akkumuliert und schädigt Leber, Niere und Gehirn. Die Therapie besteht in lebenslanger galactosefreier Diät (keine Milchprodukte). Bei der **Glykogenspeicherkrankheit (GSD) Typ I** (von-Gierke-Krankheit) fehlt die Glucose-6-Phosphatase in der Leber, sodass Glykogen zwar aufgebaut, aber nicht abgebaut werden kann — die Folge sind massive Hepatomegalie und Hypoglykämie.

> **Merke:** α-1,4-Bindung = verdaulich (Stärke, Glykogen, Maltose), β-1,4-Bindung = unverdaulich (Cellulose). Stärke = pflanzlicher Speicher (Amylose + Amylopektin); Glykogen = tierischer Speicher (dichter verzweigt). Heparin = stark sulfatiertes GAG, klinisch wichtiges Antikoagulans.

> **Prüfungstipp:** Im MedAT wird oft nach dem Unterschied zwischen α- und β-glykosidischer Bindung gefragt. Merke: α = verdaulich (Stärke, Maltose), β = unverdaulich (Cellulose). Auch „reduzierend vs. nicht-reduzierend" ist ein Klassiker: Saccharose ist das einzige häufige nicht-reduzierende Disaccharid (beide anomere C gebunden). HbA1c als Langzeitmarker (8–12 Wochen) und die Blutgruppenantigene (Kohlenhydratstrukturen!) werden ebenfalls gerne geprüft.`,
      stichworte: [
        "Monosaccharide",
        "Disaccharide",
        "Polysaccharide",
        "Glucose",
        "Maltose",
        "Saccharose",
        "Laktose",
        "Stärke",
        "Glykogen",
        "Cellulose",
        "HbA1c",
        "Glykogenosen",
      ],
      lernziele: [
        "Monosaccharide nach Kettenlänge und funktioneller Gruppe klassifizieren sowie Aldosen und Ketosen unterscheiden",
        "Die Fischer- und Haworth-Projektion erklären und α- und β-Anomere von D-Glucose benennen",
        "Die wichtigsten Disaccharide (Maltose, Saccharose, Laktose) nach Bestandteilen und Bindungstyp unterscheiden sowie das Konzept 'reduzierend/nicht-reduzierend' erklären",
        "Die Polysaccharide Stärke, Glykogen und Cellulose in Struktur und Funktion vergleichen",
        "HbA1c als Langzeitmarker der Glukosekontrolle und Laktoseintoleranz biochemisch erklären",
      ],
      sections: [
        {
          heading: "α- und β-Anomere der Glucose",
          text: "Beim Ringschluss der offenkettigen D-Glucose zur Pyranoseform (Sechsring) greift das C5-OH nukleophil die Aldehydgruppe am C1 an. Dabei entsteht ein neues Chiralitätszentrum am C1 (anomeres Kohlenstoffatom). In der Haworth-Projektion zeigt die OH-Gruppe am C1 bei α-D-Glucose nach unten (gleiche Seite wie die Ringbildung), bei β-D-Glucose nach oben. In wässriger Lösung stellt sich ein Gleichgewicht ein: ~36% α, ~64% β, <1% offenkettige Form (Mutarotation). Der Unterschied ist biologisch bedeutsam: Stärke (α) ist verdaulich, Cellulose (β) ist es nicht.",
          merksatz:
            "α = OH unten in Haworth; β = OH oben. 'α steht axial' (in der Sesselkonformation von Pyranose).",
        },
        {
          heading: "Saccharose ist nicht reduzierend",
          text: "Reduzierende Zucker haben eine freie Halbacetalgruppe (anomere OH) und können Cu²⁺ in der Fehling-Probe reduzieren. Saccharose ist das einzige häufige Disaccharid, das nicht reduzierend ist, weil sowohl das anomere C1 der Glucose als auch das anomere C2 der Fructose an der glykosidischen Bindung (α-1→β-2) beteiligt sind — es gibt keine freie Halbacetalgruppe. Maltose und Laktose sind reduzierend (nur C1 der einen Komponente ist gebunden, C1' der anderen ist frei).",
          merksatz:
            "Saccharose = nicht reduzierend (beide anomere C gebunden). Maltose & Laktose = reduzierend.",
        },
        {
          heading: "HbA1c: Biochemie und klinische Bedeutung",
          text: "HbA1c entsteht durch nicht-enzymatische Glykierung (Maillard-Reaktion): Glucose reagiert spontan mit der freien Aminogruppe am N-terminalen Valin der β-Globinkette über eine Schiff-Base zur stabilen Amadori-Verbindung. Da Erythrozyten keine Membranproteine erneuern (kernlos, keine Proteinsynthese), spiegelt HbA1c die durchschnittliche Blutglukose der letzten ~8–12 Wochen wider. Therapieziel bei Typ-2-Diabetes meist HbA1c < 7% (53 mmol/mol). Beachte: Anämie oder Hämolysezustände verfälschen den HbA1c-Wert.",
          merksatz: "HbA1c = Glykiertes Hämoglobin = 8–12 Wochen Glukosegedächtnis.",
        },
        {
          heading: "Wichtige Disaccharide im Überblick",
          text: "Maltose, Saccharose und Laktose im Vergleich:",
          table: {
            headers: ["Disaccharid", "Bestandteile", "Bindungstyp", "Reduzierend?"],
            rows: [
              ["Maltose", "Glc + Glc", "α-1→4", "ja"],
              ["Saccharose", "Glc + Frc", "α-1→β-2", "nein"],
              ["Laktose", "Gal + Glc", "β-1→4", "ja"],
            ],
          },
        },
      ],
      merksätze: [
        "Aldosen haben die Aldehyd- (–CHO) am C1, Ketosen die Ketofunktion am C2 (z.B. Fructose).",
        "α-D-Glucose: OH an C1 nach unten (axial in Sesselkonformation); β-D-Glucose: OH an C1 nach oben (äquatorial).",
        "D-Galactose = C4-Epimer der D-Glucose (nur C4-OH-Konfiguration unterscheidet sich).",
        "Maltose: Glc-α1,4-Glc; Saccharose: Glc-α1-β2-Frc (nicht reduzierend!); Laktose: Gal-β1,4-Glc.",
        "Amylose: α-1,4-unverzweigt (Helix); Amylopektin: α-1,4 mit α-1,6-Verzweigungen alle 20–25 Reste.",
        "Glykogen = wie Amylopektin, aber α-1,6-Verzweigung alle 8–12 Reste (stärker verzweigt).",
        "Cellulose: β-1,4-Glc → unlöslich; Mensch hat keine Cellulase → Ballaststoff.",
        "HbA1c = nicht-enzymatische Glykierung, spiegelt Ø-Blutglukose der letzten 8–12 Wochen wider.",
        "Laktoseintoleranz: Laktasemangel → Gal+Glc werden nicht freigesetzt → Diarrhö, Blähungen.",
        "Ribose (RNA) = Pentose mit OH am C2; Desoxyribose (DNA) = Pentose ohne OH am C2.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Unterschied zwischen Amylose, Amylopektin und Glykogen in Bezug auf Struktur und physiologische Bedeutung.",
        answer:
          "Amylose, Amylopektin und Glykogen sind alle Glucosepolymere aus α-D-Glucose, unterscheiden sich aber erheblich in ihrer Verzweigungsstruktur und ihrer biologischen Funktion. Amylose ist ein lineares Polymer aus α-1,4-glykosidisch verknüpfter D-Glucose, das in wässriger Lösung eine Helixstruktur annimmt. In dieser Helix werden Jodmoleküle eingelagert, was zu der charakteristischen blau-violetten Färbung beim Stärke-Iod-Nachweis führt. Amylopektin dagegen ist ein verzweigtes Molekül: Es hat ebenfalls ein α-1,4-verknüpftes Grundgerüst, aber zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Beide zusammen bilden die Stärke in Pflanzen als Reservekohlenhydrat. Glykogen ist das funktionelle Analogon in Tier und Mensch und wird vor allem in der Leber (Regulierung des Blutglukosespiegels) und im Skelettmuskel (lokale Energiereserve) gespeichert. Es ähnelt dem Amylopektin strukturell, ist aber noch stärker verzweigt: Die α-1,6-Verzweigungen treten bereits alle 8–12 Glucosereste auf. Diese hohe Verzweigungsdichte hat eine entscheidende physiologische Bedeutung: Sie erzeugt viele nicht-reduzierende Enden, an denen Glykogen-Phosphorylase gleichzeitig Glucosereste abspalten kann, was eine sehr schnelle Mobilisierung von Glucose ermöglicht — wichtig für plötzlichen Energiebedarf (z.B. Flucht, intensive körperliche Belastung).",
      },
      klinischerBezug:
        "HbA1c als Therapiemonitor bei Diabetes mellitus; Laktoseintoleranz durch Laktasemangel; Glykogenspeicherkrankheiten bei Enzymdefekten des Glykogenabbaus.",
      selfTest: [
        {
          question: "Welche Aussage zur Saccharose ist korrekt?",
          options: [
            "Saccharose besteht aus zwei α-D-Glucosemolekülen",
            "Saccharose wird durch eine α-1→β-2-glykosidische Bindung zwischen Glucose und Fructose gebildet",
            "Saccharose ist ein reduzierendes Disaccharid",
            "Saccharose kann durch die Fehling-Probe nachgewiesen werden",
            "Saccharose enthält eine freie Halbacetalgruppe am anomeren Kohlenstoff",
          ],
          correctIndex: 1,
          explanation:
            "Saccharose (Haushaltszucker) besteht aus α-D-Glucose und β-D-Fructose, die durch eine α-1→β-2-glykosidische Bindung verknüpft sind. Diese Bindung involviert beide anomeren Kohlenstoffatome (C1 der Glucose und C2 der Fructose), sodass keine freie Halbacetalgruppe mehr vorliegt. Deshalb ist Saccharose das einzige unter den häufigen Disacchariden, das nicht reduzierend ist und die Fehling-Probe negativ reagiert. Maltose (α-1,4, Glc+Glc) und Laktose (β-1,4, Gal+Glc) sind reduzierend.",
          hints: [
            "Welches Disaccharid hat eine Bindung zwischen beiden anomeren Kohlenstoffatomen?",
            "Nicht-reduzierende Zucker haben keine freie Halbacetalgruppe — warum ist das bei Saccharose so?",
          ],
          tags: ["saccharose", "disaccharide", "reduzierend", "glykosidische-bindung"],
          difficulty: 2,
        },
        {
          question: "Was unterscheidet Amylopektin strukturell von Amylose?",
          options: [
            "Amylopektin besteht aus β-D-Glucose, Amylose aus α-D-Glucose",
            "Amylopektin ist unverzweigt, Amylose enthält α-1,6-Verzweigungen",
            "Amylopektin enthält α-1,6-Verzweigungen alle 20–25 Reste, Amylose ist unverzweigt",
            "Amylopektin kommt nur in Tieren vor, Amylose nur in Pflanzen",
            "Amylopektin hat eine kürzere Kettenlänge als Amylose",
          ],
          correctIndex: 2,
          explanation:
            "Amylose und Amylopektin sind beide Bestandteile der pflanzlichen Stärke und bestehen aus α-D-Glucose mit α-1,4-glykosidischen Hauptkettenbindungen. Amylose ist jedoch ein lineares, unverzweigtes Polymer (bildet Helixstruktur → Iod-Einlagerung → blau). Amylopektin hat dagegen zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Das tierische/humane Glykogen ist strukturell ähnlich wie Amylopektin, aber noch stärker verzweigt (alle 8–12 Reste). Cellulose (nicht Amylose) besteht aus β-D-Glucose.",
          hints: [
            "Denke an den Stärke-Iod-Test: Welcher Stärketyp bildet eine Helix für die Iod-Einlagerung?",
            "Das Präfix 'Pektin' kommt von 'pectus' und weist auf Verzweigung hin — welche Bindung ist für Verzweigungen verantwortlich?",
          ],
          tags: ["amylose", "amylopektin", "stärke", "glykogen"],
          difficulty: 2,
        },
        {
          question: "D-Galactose ist das C4-Epimer von D-Glucose. Was bedeutet 'Epimer'?",
          options: [
            "Zwei Verbindungen mit gleicher Summenformel aber unterschiedlicher Funktionsgruppe",
            "Zwei Verbindungen, die ineinander umgewandelt werden können ohne Bindungsbruch",
            "Zwei Enantiomere, die Spiegelbilder voneinander sind",
            "Zwei Stereoisomere, die sich an genau einem Chiralitätszentrum unterscheiden",
            "Zwei Anomere mit unterschiedlicher Konfiguration am anomeren Kohlenstoff",
          ],
          correctIndex: 3,
          explanation:
            "Epimere sind Diastereomere, die sich nur in der Konfiguration an einem einzigen Chiralitätszentrum unterscheiden. D-Galactose ist das C4-Epimer von D-Glucose: Beide sind Aldohexosen (C₆H₁₂O₆), unterscheiden sich aber ausschließlich in der Konfiguration der OH-Gruppe am C4-Atom (in Haworth: OH nach unten bei Glucose, nach oben bei Galactose). Enantiomere sind vollständige Spiegelbilder (alle Chiralitätszentren invertiert, z.B. D- und L-Glucose). Anomere sind spezielle Epimere am anomeren C (C1 bei Aldosen). Konformere entstehen durch Rotation ohne Bindungsbruch.",
          hints: [
            "Epimere sind eine Untergruppe der Diastereomere — wie viele Chiralitätszentren unterscheiden sich?",
            "Vergleiche die Haworth-Strukturen: An welchem Kohlenstoffatom zeigt die OH-Gruppe bei Galactose anders als bei Glucose?",
          ],
          tags: ["epimere", "galactose", "glucose", "stereoisomerie"],
          difficulty: 3,
        },
        {
          question: "Ein Patient hat HbA1c = 9,5% (80 mmol/mol). Was gibt dieser Wert an?",
          options: [
            "Die aktuelle Blutglukosekonzentration zum Zeitpunkt der Messung",
            "Den Anteil des Hämoglobins, der durch Oxidation denaturiert ist",
            "Den prozentualen Anteil des Hämoglobins, der durch enzymatische Reaktionen verändert wurde",
            "Die Konzentration von freier Glucose im Blutplasma",
            "Die durchschnittliche Blutglukosekonzentration der letzten 8–12 Wochen",
          ],
          correctIndex: 4,
          explanation:
            "HbA1c (Hämoglobin A1c) entsteht durch nicht-enzymatische Glykierung: Glucose reagiert spontan mit der freien α-Aminogruppe des N-terminalen Valins der β-Globinkette. Da Erythrozyten (kernlos, keine Proteinsynthese) ihre Proteine nicht erneuern, akkumuliert HbA1c proportional zur durchschnittlichen Blutglukose über die gesamte Lebensspanne des Erythrozyten (~120 Tage, relevanter Zeitraum 8–12 Wochen). Ein HbA1c von 9,5% entspricht einer durchschnittlichen Glukose von ~12–13 mmol/L und zeigt eine deutlich unzureichende Diabeteskontrolle an. Ein Zielwert < 7% (53 mmol/mol) wird oft angestrebt.",
          hints: [
            "Erythrozyten haben keine Zellkern — können sie ihre Proteine ersetzen?",
            "HbA1c ist das 'glykierte' Hämoglobin — über welchen Zeitraum sammelt sich diese Modifikation an?",
          ],
          tags: ["hba1c", "diabetes", "glykierung", "klinisch"],
          difficulty: 1,
        },
        {
          question: "Warum kann der Mensch Cellulose nicht als Energiequelle nutzen?",
          options: [
            "Der Mensch besitzt keine Enzyme zur Hydrolyse der β-1,4-glykosidischen Bindungen",
            "Cellulose besitzt keine glykosidischen Bindungen und kann daher nicht hydrolysiert werden",
            "Cellulose ist aus L-Glucose aufgebaut, die im Stoffwechsel nicht verwertbar ist",
            "Cellulose enthält kovalent gebundene Phosphatgruppen, die ihre Verdauung verhindern",
            "Cellulose ist zu wasserunlöslich, um überhaupt mit Enzymen in Kontakt zu kommen",
          ],
          correctIndex: 0,
          explanation:
            "Cellulose besteht aus β-1,4-glykosidisch verknüpfter D-Glucose. Der Mensch (und die meisten Säugetiere) besitzen keine β-1,4-Glucosidase (Cellulase), die diese spezifische Bindung hydrolysieren kann. Menschliche Amylasen (Speichel und Pankreas) können nur α-1,4-glykosidische Bindungen spalten (Stärke, Glykogen). Wiederkäuer haben im Pansen Bakterien, die Cellulasen produzieren. Cellulose wird deshalb als unverdaulicher Ballaststoff klassifiziert, obwohl sie aus demselben Monomer (Glucose) wie Stärke besteht. Die Ursache liegt also ausschließlich in der Anomerie (β statt α) der glykosidischen Bindung.",
          hints: [
            "Stärke (α-1,4) und Cellulose (β-1,4) bestehen beide aus Glucose — warum ist nur Stärke verdaulich?",
            "Welche Eigenschaft hat das für Cellulose spezifische Enzym, das Menschen fehlen?",
          ],
          tags: ["cellulose", "beta-1-4", "ballaststoff", "verdauung"],
          difficulty: 2,
        },
        {
          question:
            "Welches Monosaccharid ist der exklusive Energielieferant des Gehirns unter Normalbedingungen?",
          options: ["Fructose", "Glucose", "Galactose", "Ribose", "Mannose"],
          correctIndex: 1,
          explanation:
            "Das Gehirn ist auf eine kontinuierliche Zufuhr von D-Glucose angewiesen, da es keine nennenswerten eigenen Glykogenspeicher hat und unter Normalbedingungen keine freien Fettsäuren oxidieren kann (Blut-Hirn-Schranke limitiert den Transport langkettiger Fettsäuren). Sinkt der Blutglukosespiegel unter ~3 mmol/L (Hypoglykämie), kommt es zu Bewusstseinsstörungen bis zum Koma. Ausnahme: Bei längerem Fasten oder diabetischer Ketoazidose kann das Gehirn schrittweise auf Ketonkörper (Acetoacetat, β-Hydroxybutyrat) umstellen, die aus der hepatischen Fettsäureoxidation entstehen.",
          hints: [
            "Das Gehirn kann keine Fettsäuren direkt verbrennen — was ist dann sein Primärsubstrat?",
            "Hypoglykämie betrifft zuerst das Gehirn — welcher Zucker fehlt dabei?",
          ],
          tags: ["glucose", "gehirn", "hypoglykämie", "energieversorgung"],
          difficulty: 1,
        },
        {
          question:
            "Bei Laktoseintoleranz liegt ein Mangel an welchem Enzym vor, und welche biochemische Konsequenz hat dies direkt?",
          options: [
            "Amylase-Mangel → Stärke wird nicht verdaut → Hyperglykämie",
            "Saccharase-Mangel → Saccharose akkumuliert → Laktoseintoleranz",
            "Laktase-Mangel → Laktose wird nicht in Galactose und Glucose gespalten → osmotische Diarrhö",
            "Galactosidase-Mangel → Galactosämie mit Laktose im Blut",
            "Glucosidasemangel → Glykogenose Typ II (Pompe) mit Laktoseintoleranz",
          ],
          correctIndex: 2,
          explanation:
            "Laktase (Laktase-Phlorizin-Hydrolase) ist eine Disaccharidase im Bürstensaum des Dünndarmepithels, die Laktose (β-1,4-Gal-Glc) in D-Galactose und D-Glucose spaltet. Bei Laktasemangel (primär genetisch, mit zunehmendem Alter bei vielen Ethnien normal) gelangt unverdaute Laktose in den Dickdarm. Dort fermentieren Darmbakterien die Laktose zu kurzkettigen Fettsäuren, CO₂ und H₂ → Blähungen, Schmerzen. Außerdem wirkt unverdaute Laktose osmotisch → osmotische Diarrhö. Amylasemangel betrifft Stärke, Saccharasemangel betrifft Saccharose, Pompe betrifft Glykogen.",
          hints: [
            "Laktase = das Enzym, das Laktose spaltet. Welches Disaccharid ist das und welche Monosaccharide entstehen?",
            "Unverdaulicher Zucker im Dickdarm → Was machen Darmbakterien damit?",
          ],
          tags: ["laktoseintoleranz", "laktase", "disaccharidase", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-03",
      title: "Lipide — Fette, Phospholipide und Steroide",
      imageUrl: "/images/bms/ch-triglycerid.jpg",
      imageCaption: "Abb.: Aufbau eines Triglycerid-Moleküls (OpenStax, CC BY 4.0)",
      stichworte: [
        "Fettsäuren",
        "Triglyceride",
        "Verseifung",
        "Phospholipide",
        "Sphingolipide",
        "Cholesterin",
        "Steroide",
        "Eicosanoide",
        "Prostaglandine",
        "β-Oxidation",
        "Lipoproteine",
        "Statine",
        "Ketonkörper",
        "Membranbildung",
        "Essentielle Fettsäuren",
        "Trans-Fettsäuren",
        "Dyslipidemien",
      ],
      content: `## Was Lipide eigentlich sind

Fette machen krank, Cholesterin verstopft Arterien, Butter ist Gift — so klingt es in Schlagzeilen. Die biochemische Realität ist komplexer und faszinierender: Lipide bilden Zellmembranen, speichern Energie effizienter als jeder andere Makronährstoff, isolieren Nervenfasern, tragen Signale zwischen Zellen und sind Ausgangsstoff für Hormone. Ohne Lipide gäbe es kein Cortisol, kein Testosteron, kein Vitamin D. Wer Lipidchemie versteht, versteht Ernährung, Atherosklerose und Pharmakologie.

Chemisch sind Lipide **keine einheitliche Stoffklasse** wie Kohlenhydrate oder Proteine. Was sie verbindet, ist eine physikalische Eigenschaft: Sie lösen sich gut in organischen Lösungsmitteln (Chloroform, Ether, Benzol), aber schlecht in Wasser. Diese Hydrophobie entsteht durch ihre langen Kohlenwasserstoffketten oder kondensierten Ringsysteme mit wenigen polaren Gruppen.

---

## Fettsäuren — Bausteine der Lipide

Das Fundament der Lipidchemie bilden **Fettsäuren** (FA): unverzweigte Monocarbonsäuren mit typischerweise 12–24 C-Atomen, fast immer in gerader Anzahl (die Biosynthese fügt jeweils 2-C-Einheiten als Acetyl-CoA an). Die Carboxylgruppe (–COOH) am einen Ende ist polar, die lange Kohlenwasserstoffkette am anderen Ende ist unpolar.

### Gesättigte Fettsäuren

Keine C=C-Doppelbindungen. Die gestreckten Ketten lagern sich dicht aneinander → starke Van-der-Waals-Kräfte → **hoher Schmelzpunkt** → bei Raumtemperatur **fest** (Butter, Palmfett, Talg).

| Fettsäure | Kurzschreibweise | Vorkommen |
|---|---|---|
| Laurinsäure | C12:0 | Kokosfett |
| Myristinsäure | C14:0 | Muskatnuss, Milchfett |
| Palmitinsäure | C16:0 | Häufigste gesättigte FS überhaupt |
| Stearinsäure | C18:0 | Tierische Fette, Kakaobutter |

### Einfach ungesättigte Fettsäuren (MUFA)

Eine C=C-Doppelbindung, fast immer in **cis-Konfiguration**. Der cis-Knick (ca. 30°) stört die dichte Packung → schwächere Van-der-Waals-Kräfte → **niedriger Schmelzpunkt** → bei Raumtemperatur **flüssig** (Öle).

Wichtigster Vertreter: **Ölsäure** (C18:1Δ9, cis) — Hauptfettsäure in Olivenöl.

### Mehrfach ungesättigte Fettsäuren (PUFA)

Mindestens zwei C=C-Doppelbindungen. Unter ihnen die beiden **essentiellen Fettsäuren**, die der Mensch nicht synthetisieren kann:
- **Linolsäure** (C18:2, ω-6) → Vorläufer der Arachidonsäure (C20:4, ω-6)
- **α-Linolensäure** (C18:3, ω-3) → Vorläufer von EPA (C20:5) und DHA (C22:6)

> **Merke:** Essentiell = Linolsäure (ω-6) + α-Linolensäure (ω-3). Beides PUFA, beides muss über die Nahrung zugeführt werden. EPA und DHA (Fischöl) sind daraus ableitbar, aber die Konversionsrate ist gering.

### Nomenklatur: ω vs. Δ

Zwei Zählweisen existieren nebeneinander:
- **Δ-Nomenklatur**: Zählt vom Carboxylende (–COOH). Δ9 = Doppelbindung zwischen C9 und C10.
- **ω-Nomenklatur**: Zählt vom Methylende (–CH₃). ω-3 = erste Doppelbindung am C3 vom Ende.

Der Körper kann Doppelbindungen nur bis Δ9 einfügen (Δ9-Desaturase). Doppelbindungen jenseits von Δ9 (also ω-6 und ω-3 bei langen Ketten) sind deshalb essentiell — sie müssen aus der Nahrung kommen.

### Trans-Fettsäuren — die industrielle Falle

Natürliche ungesättigte FS liegen fast immer **cis** vor. **Trans-Fettsäuren** entstehen bei industrieller **Fetthärtung** (partielle Hydrierung): Dabei wird die cis-Doppelbindung in die trans-Konfiguration umgelagert. Trans-FS haben eine gestreckte Kette wie gesättigte FS → hoher Schmelzpunkt, gute Streichfähigkeit (Margarine). Gesundheitlich sind sie problematisch: Sie erhöhen LDL, senken HDL und wirken **atherogen**. Die EU begrenzt den Gehalt auf maximal 2 % der Gesamtfette.

> **Merke:** cis-Doppelbindung → Knick → flüssig (Öl). trans-Doppelbindung → gestreckt wie gesättigt → fest → atherogen.

### Warum Fett so viel Energie liefert

Lipide liefern **38 kJ/g (9 kcal/g)** — mehr als doppelt so viel wie Kohlenhydrate oder Proteine (je 17 kJ/g, 4 kcal/g). Der Grund: Fettsäuren sind stark **reduziert** (viel H, wenig O), während Kohlenhydrate als formale CH₂O-Einheiten bereits „partiell oxidiert" sind. Bei vollständiger Oxidation geben Fettsäuren deshalb mehr Elektronen an die Atmungskette ab. Zusätzlich bindet Fettgewebe kaum Wasser (Glykogen bindet ca. 2 g H₂O/g), was die effektive Energiedichte noch weiter steigert.

{{DIAGRAM:lipid-structure}}

---

## Triacylglyceride (TAG) — der Energiespeicher

**Triglyceride** entstehen durch Veresterung: Alle drei –OH-Gruppen des Glycerins werden mit je einer Fettsäure über eine **Esterbindung** verknüpft (3× Kondensation, 3× H₂O als Nebenprodukt). Ergebnis: ein vollständig hydrophobes Molekül ohne polare Kopfgruppe — ideal zur wasserfreien Energiespeicherung.

Ein 70-kg-Mensch speichert in seinen Adipozyten (Fettzellen) durchschnittlich 15 kg Fett ≈ 570.000 kJ — Energie für rund 40 Fastentage. Zum Vergleich: Die gesamte Glykogenreserve (ca. 400 g) reicht für weniger als einen Tag intensiver Aktivität.

### Fette vs. Öle — eine Frage der Fettsäuren

Ob ein TAG bei Raumtemperatur fest (Fett) oder flüssig (Öl) ist, hängt von seinen Fettsäuren ab:
- **Überwiegend gesättigte FS** → dichte Packung → fest (Butter, Schmalz, Kokosfett)
- **Überwiegend ungesättigte FS (cis)** → Knicke → lockere Packung → flüssig (Olivenöl, Sonnenblumenöl)

### Verseifung — die alkalische Hydrolyse

TAG reagieren mit starker Base (NaOH oder KOH) zu **Glycerin + 3 Seifen** (Natriumsalze der Fettsäuren):

TAG + 3 NaOH → Glycerin + 3 R–COO⁻Na⁺ (Seife)

Seifen sind amphipathisch: Die lange unpolare Kohlenwasserstoffkette dringt in Fettflecken ein, das geladene Carboxylat-Ende (–COO⁻) interagiert mit Wasser → Mizellenbildung → Fett wird emulgiert und abwaschbar. Die **Verseifungszahl** gibt an, wie viel mg KOH nötig sind, um 1 g Fett vollständig zu verseifen — ein Maß für die mittlere Kettenlänge der Fettsäuren.

> **Merke:** Verseifung = Fett + Lauge → Glycerin + Seife. Die entstehenden Fettsäure-Salze (Seifen) sind amphipathisch und können Fette emulgieren.

### Lipolyse und β-Oxidation

Die Mobilisierung der Fettreserven — **Lipolyse** — wird hormonell gesteuert: Adrenalin und Glucagon aktivieren über cAMP die **hormonsensitive Lipase (HSL)**, die TAG in Glycerin + 3 freie Fettsäuren spaltet. **Insulin hemmt** die HSL → Insulin = anaboles Signal, Lipolyse = kataboles Signal.

Freie Fettsäuren gelangen an **Albumin** gebunden ins Blut und werden in den Mitochondrien durch **β-Oxidation** abgebaut: In jedem Zyklus werden 2 C-Atome als Acetyl-CoA abgespalten, dazu je 1 FADH₂ und 1 NADH.

**Rechenbeispiel Palmitinsäure (C16:0):**
- 7 Zyklen β-Oxidation → **8 Acetyl-CoA** + 7 FADH₂ + 7 NADH
- 8 Acetyl-CoA im Citratzyklus → 8× (3 NADH + 1 FADH₂ + 1 GTP)
- Gesamtertrag Atmungskette: **ca. 106 ATP netto** (nach Abzug der 2 ATP für Aktivierung zu Palmitoyl-CoA)

Zum Vergleich: 1 Mol Glucose liefert über Glykolyse + Citratzyklus nur ca. 30–32 ATP.

---

## Phospholipide — Architekten der Zellmembran

Im Unterschied zu TAG tragen **Phospholipide** an der dritten Position (sn-3) des Glycerins keine Fettsäure, sondern eine **Phosphatgruppe mit einem polaren Kopf** (Alkohol-Rest). An sn-1 sitzt meist eine gesättigte FS, an sn-2 oft eine ungesättigte (häufig Arachidonsäure — das wird bei den Eicosanoiden wichtig).

| Phospholipid | Polarer Rest | Funktion |
|---|---|---|
| Phosphatidylcholin (Lecithin) | Cholin | Häufigstes Membran-PL, Lungensurfactant |
| Phosphatidylserin | Serin | Innenseite der Membran; bei Apoptose nach außen → „Eat me"-Signal |
| Phosphatidylethanolamin | Ethanolamin | Zweithäufigstes PL, v. a. innere Membranseite |
| Phosphatidylinositol (PI) | Inositol | Signaltransduktion: PIP₂ → IP₃ + DAG |

### Amphipathie → Bilayer → Membran

Der entscheidende Punkt: Phospholipide sind **amphipathisch** — polarer Kopf (hydrophil) + zwei unpolare Schwänze (hydrophob). In wässrigem Milieu organisieren sie sich **spontan** zu einer **Lipiddoppelschicht (Bilayer)**: Köpfe zeigen zum Wasser, Schwänze nach innen. Diese Selbstorganisation wird durch den **hydrophoben Effekt** angetrieben — das Wasser maximiert seine Entropie, indem es unpolare Bereiche ausschließt. Der Bilayer ist die Grundstruktur **aller** biologischen Membranen.

Warum bilden Phospholipide einen Bilayer und keine Mizellen? Phospholipide haben **zwei** Schwänze (zylindrische Geometrie) → Bilayer. Detergenzien/Seifen haben **einen** Schwanz (Kegelform) → Mizellen.

> **Merke:** Phospholipid = 2 Schwänze → Bilayer (Membran). Seife/Detergens = 1 Schwanz → Mizelle. Triglycerid = 3 Schwänze, kein polarer Kopf → Fetttröpfchen (kein Bilayer).

![Aufbau eines Phospholipids mit polarem Kopf und zwei Fettsäureschwänzen](/images/bms/ch-phospholipid.jpg)

---

## Sphingolipide — das andere Membranlipid

Sphingolipide basieren nicht auf Glycerin, sondern auf dem Aminoalkohol **Sphingosin** (18 C-Atome, trans-Doppelbindung, Amino- und Hydroxylgruppe):

- **Ceramid** = Sphingosin + 1 Fettsäure (über Amidbindung) → Grundbaustein aller Sphingolipide
- **Sphingomyelin** = Ceramid + Phosphocholin → häufigstes Sphingolipid, essenziell für **Myelinscheiden** (Nervenisolation)
- **Glykolipide** = Ceramid + Zuckerreste:
  - Cerebroside (1 Zucker) — Gehirn, Nervensystem
  - Ganglioside (Oligosaccharid mit Sialinsäure) — Zell-Zell-Erkennung, Blutgruppenantigene

Klinisch relevant: **Sphingolipidosen** — lysosomale Speicherkrankheiten durch Enzymmangel. Morbus Gaucher (häufigste): Glucocerebrosidase-Mangel → Glucocerebrosid-Akkumulation → Hepatosplenomegalie. Morbus Tay-Sachs: Hexosaminidase-A-Mangel → Gangliosid-Akkumulation im ZNS → letaler Verlauf im Kindesalter.

---

## Cholesterin — mehr als nur ein Risikofaktor

**Cholesterin** (C₂₇H₄₆O) besitzt das **Sterangerüst** (Cyclopentanoperhydrophenanthren) — drei kondensierte Sechsringe (A, B, C) + ein Fünfring (D), dazu eine 3β-OH-Gruppe, eine Δ5-Doppelbindung und eine aliphatische Seitenkette. Es wird in der **Leber** über den **Mevalonat-Weg** aus Acetyl-CoA synthetisiert. Schlüsselenzym: **HMG-CoA-Reduktase** — die geschwindigkeitsbestimmende Reaktion und Angriffspunkt der **Statine**.

### Funktionen des Cholesterins

1. **Membranbestandteil**: Lagert sich zwischen Phospholipid-Schwänze. Bei niedrigen Temperaturen verhindert es Erstarren, bei hohen Temperaturen übermäßige Fluidisierung → **Fluiditätspuffer**
2. **Ausgangsstoff für Gallensäuren**: Cholsäure, Chenodesoxycholsäure — Emulgatoren für Nahrungsfette im Darm (enterohepatischer Kreislauf: 95 % werden im Ileum rückresorbiert)
3. **Steroidhormone**: Alle lipophil, alle wirken über intrazelluläre Kernrezeptoren:

| Steroidgruppe | Beispiel | Hauptfunktion |
|---|---|---|
| Glucocorticoide | Cortisol | Stressreaktion, Gluconeogenese, Immunsuppression |
| Mineralocorticoide | Aldosteron | Na⁺-Rückresorption, K⁺-Sekretion (Niere) |
| Androgene | Testosteron | Virilisierung, Spermatogenese |
| Östrogene | Östradiol | Feminisierung, Menstruationszyklus |
| Gestagene | Progesteron | Schwangerschaftserhaltung |

4. **Vitamin D₃**: 7-Dehydrocholesterin → UV-B in Haut → Cholecalciferol → 25-OH-D₃ (Leber) → **1,25-(OH)₂-D₃ = Calcitriol** (Niere) → Ca²⁺/Phosphat-Homöostase

> **Merke:** Cholesterin = Membranfluidität + Gallensäuren + ALLE Steroidhormone + Vitamin D. Es ist kein „Gift", sondern ein lebenswichtiges Molekül — problematisch wird nur das Zuviel im Blut.

---

## Eicosanoide — Entzündung, Schmerz, Gerinnung

Eicosanoide sind lokale Signalmoleküle, die aus der **Arachidonsäure** (C20:4, ω-6) entstehen. Arachidonsäure wird durch das Enzym **Phospholipase A₂** aus der sn-2-Position von Membran-Phospholipiden freigesetzt. Dann teilt sich der Weg:

### COX-Weg (Cyclooxygenase)

Cyclooxygenase (COX-1 konstitutiv, COX-2 induzierbar bei Entzündung) katalysiert:
- **Prostaglandine** (z. B. PGE₂): Entzündung, Schmerz, Fieber, Magenschleimhautschutz (PGE₂ über COX-1)
- **Thromboxane** (TXA₂): Thrombozytenaggregation, Vasokonstriktion (in Plättchen)
- **Prostacyclin** (PGI₂): Gegenspieler von TXA₂ — hemmt Aggregation, Vasodilatation (im Endothel)

### LOX-Weg (Lipoxygenase)

5-Lipoxygenase (5-LOX) katalysiert:
- **Leukotriene** (LTB₄: Chemotaxis von Neutrophilen; LTC₄/D₄/E₄: Bronchokonstriktion bei Asthma)

### Pharmakologische Hemmung — warum Aspirin wirkt

- **Aspirin** (ASS): Hemmt COX **irreversibel** durch Acetylierung eines Serin-Rests. In Thrombozyten (kernlos, kein Nachschub an COX) hält die Hemmung **lebenslang** (7–10 Tage Plättchenlebensdauer) → niedrigdosiertes Aspirin (100 mg) als Thrombozytenaggregationshemmer
- **Ibuprofen, Diclofenac** (NSAIDs): Hemmen COX **reversibel** → Schmerzlinderung, Entzündungshemmung, Fiebersenkung
- **Paracetamol**: Schwacher COX-Hemmer, zentral wirksam (Hypothalamus) → Fiebersenkung + Analgesie, kaum antiinflammatorisch
- **Cortison** (Glucocorticoide): Hemmen **Phospholipase A₂** indirekt (über Lipocortin) → blockiert den gesamten Eicosanoid-Weg → starke Entzündungshemmung, aber Nebenwirkungen

> **Merke:** Arachidonsäure → COX → Prostaglandine + Thromboxane (Aspirin/Ibuprofen hemmen hier). Arachidonsäure → LOX → Leukotriene. Cortison hemmt bereits die Freisetzung der Arachidonsäure.

---

## Lipoproteine — Lipidtransport im Blut

Lipide sind wasserunlöslich, Blut ist wässrig — das Problem wird durch **Lipoproteine** gelöst: kugelförmige Partikel mit hydrophobem Kern (TAG, Cholesterinester) und amphipathischer Hülle (Phospholipid-Monolayer + Apolipoproteine).

| Lipoprotein | Herkunft | Hauptfracht | Klinische Bedeutung |
|---|---|---|---|
| Chylomikronen | Darm (exogen) | Nahrungs-TAG | Postprandiale Triglyceride |
| VLDL | Leber (endogen) | Hepatische TAG | Triglycerid-Transport |
| LDL | Aus VLDL nach TAG-Abbau | Cholesterin → Peripherie | **„Schlechtes" Cholesterin** — atherogen |
| HDL | Leber/Darm | Cholesterin ← Peripherie | **„Gutes" Cholesterin** — reverser Transport |

Der **LDL-Rezeptor** auf Hepatozyten erkennt Apolipoprotein B-100 auf LDL-Partikeln und nimmt LDL per rezeptorvermittelter Endozytose auf. Weniger intrazelluläres Cholesterin → Hochregulation der LDL-Rezeptoren (über SREBP-2) → mehr LDL-Aufnahme aus dem Blut → LDL↓.

---

## Statine — Wirkmechanismus Schritt für Schritt

1. **Statine** (Atorvastatin, Simvastatin, Rosuvastatin) hemmen kompetitiv die **HMG-CoA-Reduktase** (Schlüsselenzym des Mevalonat-Wegs)
2. → Weniger endogene Cholesterinsynthese in Hepatozyten
3. → Intrazellulärer Cholesterinspiegel sinkt
4. → SREBP-2 wird aktiviert → **LDL-Rezeptoren werden hochreguliert**
5. → Mehr LDL-Aufnahme aus dem Blut
6. → **Blut-LDL sinkt um 30–50 %**

Statine hemmen also **nicht** direkt den LDL-Rezeptor und „fischen" nicht selbst LDL aus dem Blut — sie zwingen die Leber indirekt dazu, mehr LDL-Rezeptoren zu exprimieren.

---

## Dyslipidemien — wenn der Lipidstoffwechsel entgleist

### Familiäre Hypercholesterinämie (FH)

Autosomal-dominant. Mutation im **LDL-Rezeptor-Gen** (häufigste Form) → defekte oder fehlende LDL-Rezeptoren → massiv erhöhtes Blut-LDL → frühe Atherosklerose. Heterozygote (1:250): LDL 200–400 mg/dL, KHK ab 40–50 J. Homozygote (1:1.000.000): LDL >500 mg/dL, Herzinfarkt im Kindesalter.

### Atherosklerose-Pathogenese

LDL dringt in die Intima ein → wird **oxidiert** (oxLDL) → Makrophagen nehmen oxLDL über **Scavenger-Rezeptoren** auf (keine Feedback-Hemmung!) → Schaumzellen → Fettstreifen → fibröse Plaques → Plaque-Ruptur → Thrombose → Myokardinfarkt / Schlaganfall.

> **Merke:** LDL = „Liefert Den Lipidüberschuss" (atherogen). HDL = „Holt Das Lipid" (protektiv, reverser Transport zur Leber).

---

## Ketonkörper — Brennstoff im Notfall

Bei prolongiertem Fasten oder unkontrolliertem Typ-1-Diabetes übersteigt die Acetyl-CoA-Produktion aus β-Oxidation die Kapazität des Citratzyklus (Oxalacetat wird zur Gluconeogenese abgezogen). Überschüssiges Acetyl-CoA wird in der Leber zu **Ketonkörpern** kondensiert:
- **Acetoacetat** (das erste Ketonkörper-Produkt)
- **β-Hydroxybutyrat** (Reduktion von Acetoacetat; eigentlich kein Keton, aber traditionell so benannt)
- **Aceton** (spontane Decarboxylierung von Acetoacetat; flüchtig → Atemluft)

Gehirn, Herzmuskel und Skelettmuskel können Ketonkörper als alternatives Substrat nutzen (Rückumwandlung zu Acetyl-CoA). Bei unkontrolliertem Typ-1-Diabetes fehlt Insulin → unkontrollierte Lipolyse → massive Ketonproduktion → **diabetische Ketoazidose** (pH < 7,3, Acetongeruch, Kußmaul-Atmung als respiratorische Kompensation).

---

## Häufige Missverständnisse

**„Fett ist schlecht"** — Falsch. Essentielle Fettsäuren (Linolsäure, α-Linolensäure) sind lebenswichtig. Fett ist der effizienteste Energiespeicher, bildet Membranen, isoliert Nerven, transportiert fettlösliche Vitamine (A, D, E, K). Problematisch sind Exzess und ungünstige Zusammensetzung (viel gesättigte + trans-FS, wenig ω-3).

**„Cholesterin ist immer schädlich"** — Falsch. Cholesterin ist essenziell für Membranen, Steroidhormone, Gallensäuren und Vitamin D. Jede Zelle synthetisiert Cholesterin. Nur **erhöhtes Blut-LDL** über lange Zeit führt zur Atherosklerose. HDL-Cholesterin wirkt sogar protektiv.

**„Statine senken LDL durch direkte Cholesterin-Bindung"** — Falsch. Statine hemmen die HMG-CoA-Reduktase → weniger endogene Synthese → LDL-Rezeptor-Hochregulation → die Leber nimmt aktiv mehr LDL auf.

---

## Prüfungsrelevante Zahlen

| Parameter | Wert |
|---|---|
| Energiedichte Fett | 38 kJ/g (9 kcal/g) |
| Energiedichte KH / Protein | je 17 kJ/g (4 kcal/g) |
| ATP aus Palmitinsäure (C16) | ca. 106 netto |
| LDL-Senkung durch Statine | 30–50 % |
| Trans-FS-Limit EU | max. 2 % der Gesamtfette |
| Aspirin-Plättchenhemmung | irreversibel, 7–10 Tage |
| Heterozygote FH Prävalenz | ca. 1:250 |

> **Prüfungstipp:** MedAT-Klassiker: (1) Energiedichte Fett vs. KH (38 vs. 17 kJ/g). (2) cis → Knick → flüssig; trans → gestreckt → fest → atherogen. (3) Statine hemmen HMG-CoA-Reduktase (NICHT den LDL-Rezeptor direkt!). (4) Essentielle FS = Linolsäure (ω-6) + α-Linolensäure (ω-3). (5) Aspirin hemmt COX irreversibel → TXA₂↓ → Thrombozytenaggregationshemmung. (6) Phospholipide = amphipathisch → Bilayer; TAG = hydrophob → Fetttröpfchen.`,
      lernziele: [
        "Fettsäuren nach Sättigungsgrad klassifizieren und den Zusammenhang zwischen cis/trans-Konfiguration, Packung und Schmelzpunkt erklären",
        "TAG-Aufbau, Verseifung, Lipolyse und β-Oxidation (inkl. ATP-Bilanz von Palmitinsäure) beschreiben",
        "Den amphipathischen Aufbau von Phospholipiden und die spontane Bilayer-Bildung erläutern",
        "Die Eicosanoid-Synthese (COX- und LOX-Weg) und den Wirkmechanismus von Aspirin/NSAIDs erklären",
        "Cholesterin-Funktionen, den Statin-Wirkmechanismus (HMG-CoA-Reduktase → LDL-Rezeptor-Hochregulation) und die Atherosklerose-Pathogenese beschreiben",
        "Sphingolipide (Ceramid, Sphingomyelin, Glykolipide) und Lipoproteine (Chylomikronen, VLDL, LDL, HDL) zuordnen",
      ],
      sections: [
        {
          heading: "Fettsäuren: Struktur und Eigenschaften",
          text: "Die Kettenlänge und der Sättigungsgrad bestimmen physikalische Eigenschaften und biologische Wirkung. Gesättigte FS (C16:0 Palmitinsäure, C18:0 Stearinsäure): gestreckte Ketten → dichte Packung → starke Van-der-Waals-Kräfte → fest bei RT. Einfach ungesättigte FS (C18:1Δ9 Ölsäure, cis): 30°-Knick → lockere Packung → flüssig. Mehrfach ungesättigte FS (Linolsäure ω-6, α-Linolensäure ω-3): essentiell, Eicosanoid-Vorläufer. Trans-FS (industrielle Fetthärtung): gestreckt wie gesättigt → atherogen. ω-Nomenklatur zählt vom Methylende, Δ-Nomenklatur vom Carboxylende.",
          merksatz:
            "Gesättigt = gestreckt = fest. cis-ungesättigt = Knick = flüssig. trans = gestreckt wie gesättigt = atherogen. Essentiell: Linolsäure (ω-6) + α-Linolensäure (ω-3).",
        },
        {
          heading: "TAG, Verseifung und β-Oxidation",
          text: "Triglyceride = Glycerin + 3 Fettsäuren (3 Esterbindungen). Fette vs. Öle: gesättigte FS → fest; ungesättigte FS → flüssig. Verseifung: TAG + 3 NaOH → Glycerin + 3 Seifen (Na-Salze der FS). Lipolyse: HSL spaltet TAG, aktiviert durch Adrenalin/Glucagon, gehemmt durch Insulin. β-Oxidation: je Zyklus 2 C als Acetyl-CoA + 1 FADH₂ + 1 NADH. Palmitinsäure (C16): 8 Acetyl-CoA → ca. 106 ATP netto. Energiedichte: 38 kJ/g (Fett) vs. 17 kJ/g (KH).",
          merksatz:
            "TAG + 3 NaOH → Glycerin + 3 Seifen. Fett liefert 38 kJ/g = 9 kcal/g. Palmitinsäure → 106 ATP netto.",
        },
        {
          heading: "Phospholipide, Sphingolipide und Membranbildung",
          text: "Glycerophospholipide: Glycerin + 2 FS + Phosphat-Kopfgruppe → amphipathisch → spontaner Bilayer in Wasser (hydrophober Effekt). Wichtigstes PL: Lecithin (Phosphatidylcholin). Sphingolipide basieren auf Sphingosin: Ceramid → Sphingomyelin (Myelinscheiden) oder Glykolipide (Zell-Erkennung). Cholesterin zwischen den Schwänzen: Fluiditätspuffer (verhindert Erstarren und Überfließen). 2 Schwänze → Bilayer; 1 Schwanz → Mizelle; 3 Schwänze (TAG) → Fetttröpfchen.",
          merksatz:
            "Phospholipid = amphipathisch (2 Schwänze + polarer Kopf) → Bilayer = Membran. Sphingomyelin = Myelinscheiden. Cholesterin = Fluiditätspuffer.",
        },
        {
          heading: "Eicosanoide und Pharmakologie",
          text: "Arachidonsäure (C20:4, ω-6) wird durch Phospholipase A₂ aus Membran-PL freigesetzt. COX-Weg: Prostaglandine (PGE₂ → Entzündung, Schmerz, Fieber) + Thromboxane (TXA₂ → Plättchenaggregation). LOX-Weg: Leukotriene (LTB₄ Chemotaxis, LTC₄/D₄ Bronchokonstriktion). Aspirin hemmt COX irreversibel (Acetylierung) → in kernlosen Thrombozyten lebenslang → Aggregationshemmung. NSAIDs (Ibuprofen) hemmen COX reversibel. Cortison hemmt Phospholipase A₂ indirekt → blockiert gesamten Eicosanoid-Weg.",
          merksatz:
            "Arachidonsäure → COX → Prostaglandine + Thromboxane (Aspirin hemmt irreversibel). → LOX → Leukotriene. Cortison hemmt Phospholipase A₂.",
        },
        {
          heading: "Cholesterin, Statine und Dyslipidemien",
          text: "Cholesterin: Sterangerüst (3 Sechsringe + 1 Fünfring), synthetisiert über Mevalonat-Weg (HMG-CoA-Reduktase). Funktionen: Membranfluidität, Gallensäuren, Steroidhormone, Vitamin D₃. Lipoproteine: LDL ('schlechtes' Cholesterin, atherogen), HDL ('gutes', reverser Transport). Statine → HMG-CoA-Reduktase↓ → weniger Cholesterin in Hepatozyten → LDL-Rezeptor↑ → mehr LDL-Aufnahme → Blut-LDL↓ 30–50%. Familiäre Hypercholesterinämie: LDLR-Mutation → massiv erhöhtes LDL → frühe Atherosklerose.",
          merksatz:
            "Statine hemmen HMG-CoA-Reduktase → LDL-Rezeptor-Hochregulation → LDL↓. LDL = 'Liefert Den Lipidüberschuss'. HDL = 'Holt Das Lipid'.",
        },
        {
          heading: "Wichtige Steroide und ihre Funktionen",
          text: "Alle Steroide leiten sich vom Cholesterin ab und wirken über intrazelluläre Kernrezeptoren (lipophil → membrangängig):",
          table: {
            headers: ["Steroid", "Funktion"],
            rows: [
              ["Cholesterin", "Membranfluidität, Ausgangsstoff für alle Steroide"],
              ["Cortisol", "Glucocorticoid; Stressreaktion, Gluconeogenese, Immunsuppression"],
              ["Aldosteron", "Mineralocorticoid; Na⁺-Rückresorption, K⁺-Sekretion (Niere)"],
              ["Testosteron", "Androgen; Virilisierung, Spermatogenese"],
              ["Östradiol", "Östrogen; Feminisierung, Menstruationszyklus"],
              ["Progesteron", "Gestagen; Schwangerschaftserhaltung"],
              ["Calcitriol (1,25-(OH)₂-D₃)", "Aktives Vitamin D; Ca²⁺/Phosphat-Homöostase"],
              ["Gallensäuren (Cholsäure)", "Fettemulgierung im Darm, enterohepatischer Kreislauf"],
            ],
          },
        },
      ],

      merksätze: [
        "Fettsäuren: gesättigt = keine C=C = gestreckt = fest; ungesättigt cis = Knick = flüssig; trans = gestreckt = atherogen.",
        "Essentielle Fettsäuren: Linolsäure (ω-6) + α-Linolensäure (ω-3) — Körper kann Doppelbindungen jenseits Δ9 nicht einfügen.",
        "Energiedichte: Lipide 38 kJ/g (9 kcal/g) vs. KH/Proteine je 17 kJ/g (4 kcal/g).",
        "TAG = Glycerin + 3 Fettsäuren via Esterbindung. Verseifung: TAG + NaOH → Glycerin + Seife.",
        "Phospholipide = amphipathisch (2 Schwänze + Phosphatkopf) → Bilayer = Membran.",
        "Sphingomyelin (Sphingosin-basiert) = Myelinscheiden. Sphingolipidosen: lysosomale Speicherkrankheiten.",
        "Cholesterin: Membranfluidität + Gallensäuren + Steroidhormone + Vitamin D. NICHT pauschal schädlich.",
        "Eicosanoide: Arachidonsäure → COX → PG/TX; → LOX → Leukotriene. Aspirin hemmt COX irreversibel.",
        "Statine hemmen HMG-CoA-Reduktase → LDL-Rezeptor↑ → LDL↓ 30–50%. Nicht direkt am Rezeptor!",
        "LDL = 'Liefert Den Lipidüberschuss' (atherogen). HDL = 'Holt Das Lipid' (protektiv).",
        "Ketonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton — bei Fasten/Typ-1-Diabetes aus überschüssigem Acetyl-CoA.",
      ],
      altfrage: {
        question: "Welche der folgenden Aussagen über Eicosanoide ist richtig?",
        answer:
          "Eicosanoide (Prostaglandine, Thromboxane, Leukotriene) werden aus Arachidonsäure (C20:4, ω-6) gebildet, die durch Phospholipase A₂ aus Membranphospholipiden freigesetzt wird. Der COX-Weg liefert Prostaglandine (PGE₂: Entzündung, Schmerz, Fieber) und Thromboxane (TXA₂: Thrombozytenaggregation); der LOX-Weg liefert Leukotriene (LTB₄: Chemotaxis, LTC₄/D₄: Bronchokonstriktion). Aspirin hemmt COX irreversibel durch Acetylierung eines Serin-Rests. Da Thrombozyten keinen Zellkern haben, können sie kein neues COX-Enzym nachsynthetisieren → die Hemmung hält für die gesamte Plättchenlebensdauer (7–10 Tage). Dies erklärt die Wirkung von niedrigdosiertem Aspirin (100 mg/Tag) als Thrombozytenaggregationshemmer in der Sekundärprävention kardiovaskulärer Ereignisse. Glucocorticoide (Cortison) hemmen dagegen die Phospholipase A₂ indirekt (über Lipocortin-Induktion) und blockieren damit den gesamten Eicosanoid-Weg — stärker antiinflammatorisch, aber auch mehr Nebenwirkungen.",
      },
      klinischerBezug:
        "Atherosklerose (oxLDL → Schaumzellen → Plaque). Familiäre Hypercholesterinämie (LDLR-Mutation). Statine (HMG-CoA-Reduktase-Hemmung → LDL↓). Aspirin (COX-Hemmung → Thrombozytenaggregation↓). Trans-Fettsäuren (atherogen). Ketoazidose bei Typ-1-Diabetes. Sphingolipidosen (M. Gaucher, M. Tay-Sachs). Omega-3-FS (antiinflammatorisch, Triglyceride↓).",
      selfTest: [
        {
          question:
            "Welche Aussage über die Energiedichte von Lipiden im Vergleich zu Kohlenhydraten ist korrekt?",
          options: [
            "Lipide und Kohlenhydrate haben die gleiche Energiedichte von ca. 17 kJ/g",
            "Kohlenhydrate liefern mit 38 kJ/g mehr Energie als Lipide mit 17 kJ/g",
            "Proteine liefern mehr Energie als Lipide",
            "Lipide liefern mit ca. 38 kJ/g mehr als doppelt so viel Energie wie Kohlenhydrate (ca. 17 kJ/g)",
            "Lipide liefern nur 4 kcal/g, Kohlenhydrate dagegen 9 kcal/g",
          ],
          correctIndex: 3,
          explanation:
            "Lipide liefern ca. 38 kJ/g (9 kcal/g), KH und Proteine je ca. 17 kJ/g (4 kcal/g). Der Grund: Fettsäuren sind stark reduziert (viel H, wenig O) und geben bei Oxidation mehr Elektronen an die Atmungskette ab. Zusätzlich bindet Fettgewebe kaum Wasser (Glykogen bindet ~2 g H₂O/g), was die effektive Energiedichte weiter steigert.",
          hints: [
            "Lipide enthalten viel Wasserstoff relativ zum Sauerstoff — welche Konsequenz hat das für die Oxidationsenergie?",
            "Merke: Fett = 9 kcal/g; KH und Protein = 4 kcal/g.",
          ],
          tags: ["energiedichte", "lipide", "kohlenhydrate", "stoffwechsel"],
          difficulty: 1,
        },
        {
          question: "Was macht Phospholipide zu idealen Membranbestandteilen?",
          options: [
            "Sie sind vollständig hydrophob und bilden dadurch wasserundurchlässige Schichten",
            "Sie sind vollständig hydrophil und können sich frei in wässriger Lösung lösen",
            "Sie können kovalente Bindungen mit Membranproteinen eingehen und die Membran fixieren",
            "Sie tragen drei Fettsäureketten wie Triglyceride und sind deshalb besonders stabil",
            "Sie sind amphipathisch (polarer Kopf + 2 apolare Schwänze) und bilden spontan Bilayer in Wasser",
          ],
          correctIndex: 4,
          explanation:
            "Phospholipide sind amphipathisch: hydrophiler Phosphatkopf + 2 hydrophobe Fettsäureschwänze. In Wasser ordnen sie sich durch den hydrophoben Effekt spontan zum Bilayer: Köpfe nach außen, Schwänze nach innen. Zwei Schwänze → zylindrische Geometrie → Bilayer. Detergenzien/Seifen (1 Schwanz, Kegelform) bilden dagegen Mizellen. TAG (3 Schwänze, kein polarer Kopf) bilden Fetttröpfchen.",
          hints: [
            "Was ist das Besondere an einer Substanz, die sowohl hydrophile als auch hydrophobe Bereiche hat?",
            "Zwei Schwänze → Bilayer. Ein Schwanz → Mizelle. Drei Schwänze, kein Kopf → Fetttröpfchen.",
          ],
          tags: ["phospholipide", "membran", "amphipathisch", "bilayer"],
          difficulty: 1,
        },
        {
          question:
            "Welcher der folgenden Faktoren erklärt den niedrigeren Schmelzpunkt von Olivenöl im Vergleich zu Palmfett?",
          options: [
            "Olivenöl enthält vorwiegend einfach ungesättigte (cis) Fettsäuren mit Knick in der Kette",
            "Palmfett hat eine kürzere Kohlenstoffkette als Olivenöl",
            "Olivenöl enthält Phospholipide, Palmfett dagegen nicht",
            "Olivenöl hat einen höheren Anteil an trans-Fettsäuren",
            "Palmfett enthält Steroide, die den Schmelzpunkt erhöhen",
          ],
          correctIndex: 0,
          explanation:
            "Olivenöl enthält hauptsächlich Ölsäure (C18:1Δ9, cis). Die cis-Doppelbindung erzeugt einen ca. 30°-Knick → verhindert enge parallele Packung → weniger Van-der-Waals-Kräfte → niedriger Schmelzpunkt → flüssig bei RT. Palmfett enthält hauptsächlich Palmitinsäure (C16:0, gesättigt) → gestreckte Kette → dichte Packung → fest. Trans-FS verhalten sich wie gesättigte (gerade Kette) → fest.",
          hints: [
            "Was bewirkt eine cis-Doppelbindung geometrisch für die Form der Fettsäurekette?",
            "Dichte Packung → stärkere Van-der-Waals-Kräfte → höherer Schmelzpunkt.",
          ],
          tags: ["fettsäuren", "schmelzpunkt", "cis", "gesättigt-ungesättigt"],
          difficulty: 1,
        },
        {
          question:
            "Welches Enzym wird durch Statine gehemmt und welche Konsequenz hat dies für den LDL-Spiegel?",
          options: [
            "Cholesterin-Oxidase → direkter LDL-Abbau im Blut",
            "HMG-CoA-Reduktase → weniger Cholesterinsynthese → LDL-Rezeptor-Hochregulation → LDL↓",
            "LDL-Rezeptor → weniger LDL-Aufnahme → LDL↑",
            "Lipoprotein-Lipase → weniger VLDL-Abbau → Triglyceridanstieg",
            "Phospholipase A₂ → weniger Eicosanoide → veränderte Lipidspiegel",
          ],
          correctIndex: 1,
          explanation:
            "Statine hemmen kompetitiv die HMG-CoA-Reduktase (Schlüsselenzym des Mevalonat-Wegs). Weniger endogene Cholesterinsynthese → intrahepatisches Cholesterin↓ → SREBP-2-Aktivierung → LDL-Rezeptoren werden hochreguliert → mehr LDL-Aufnahme aus dem Blut → LDL-Senkung um 30–50 %. Statine wirken also indirekt: Sie hemmen nicht den LDL-Rezeptor, sondern zwingen die Leber dazu, mehr davon zu exprimieren.",
          hints: [
            "HMG-CoA-Reduktase ist das Schrittmacherenzym der Cholesterinbiosynthese.",
            "Die Leber reagiert auf niedrigen intrazellulären Cholesterinspiegel mit Hochregulation welcher Rezeptoren?",
          ],
          tags: ["statine", "hmg-coa-reduktase", "cholesterin", "ldl", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welche Aussage über die Eicosanoid-Synthese und deren pharmakologische Hemmung ist richtig?",
          options: [
            "Eicosanoide werden aus Cholesterin durch die HMG-CoA-Reduktase gebildet",
            "Aspirin hemmt die Lipoxygenase (LOX) reversibel und reduziert so die Leukotrien-Synthese",
            "Arachidonsäure wird durch Phospholipase A₂ freigesetzt; COX bildet daraus Prostaglandine und Thromboxane, Aspirin hemmt COX irreversibel",
            "Prostaglandine werden durch die LOX gebildet und hemmen die Thrombozytenaggregation",
            "Glucocorticoide hemmen COX-2 direkt und steigern gleichzeitig die Leukotrien-Synthese",
          ],
          correctIndex: 2,
          explanation:
            "Arachidonsäure (C20:4, ω-6) wird durch Phospholipase A₂ aus Membranphospholipiden freigesetzt. Der COX-Weg liefert Prostaglandine (PGE₂: Entzündung, Schmerz, Fieber) und Thromboxane (TXA₂: Plättchenaggregation). Der LOX-Weg liefert Leukotriene. Aspirin hemmt COX irreversibel durch Acetylierung eines Serin-Rests — in kernlosen Thrombozyten hält die Hemmung für die gesamte Plättchenlebensdauer (7–10 Tage). Glucocorticoide hemmen Phospholipase A₂ indirekt (über Lipocortin), nicht COX direkt.",
          hints: [
            "Welches Enzym setzt Arachidonsäure aus der Membran frei?",
            "Aspirin acetyliert einen Serin-Rest im aktiven Zentrum von COX — ist das reversibel oder irreversibel?",
          ],
          tags: ["eicosanoide", "prostaglandine", "aspirin", "cox", "pharmakologie"],
          difficulty: 2,
        },
        {
          question:
            "Welches Steroid dient als gemeinsamer Ausgangsstoff für Cortisol, Testosteron, Gallensäuren und Vitamin D₃?",
          options: ["Östradiol", "Aldosteron", "Cholesterin", "Cortisol", "Progesteron"],
          correctIndex: 2,
          explanation:
            "Cholesterin ist der universelle Vorläufer aller Steroide. Aus seinem Sterangerüst (3 Sechsringe + 1 Fünfring) werden in den Nebennieren Glucocorticoide (Cortisol) und Mineralocorticoide (Aldosteron), in den Gonaden Androgene (Testosteron) und Östrogene (Östradiol), in der Leber Gallensäuren, und in Haut/Leber/Niere Vitamin D₃ synthetisiert. Progesteron ist selbst ein Steroid-Intermediat, nicht der Ausgangsstoff.",
          hints: [
            "Welches Molekül hat das Sterangerüst, eine 3β-OH-Gruppe und ist der häufigste Steroid-Bestandteil von Membranen?",
            "Alle genannten Produkte sind lipophil und haben ein Vierringsystem — was ist deren gemeinsamer Vorläufer?",
          ],
          tags: ["cholesterin", "steroide", "steroidhormone", "biosynthese"],
          difficulty: 1,
        },
        {
          question: "Bei der Verseifung eines Triglycerids mit NaOH entstehen:",
          options: [
            "3 Fettsäuren + Glycerin + 3 NaCl",
            "Glycerin + 3 Natriumsalze der Fettsäuren (Seifen)",
            "Cholesterin + 3 Natriumacetat",
            "Phospholipide + 3 NaOH",
            "3 freie Fettsäuren + Na₃-Glycerat",
          ],
          correctIndex: 1,
          explanation:
            "Verseifung = alkalische Hydrolyse der Esterbindungen: TAG + 3 NaOH → Glycerin + 3 R-COO⁻Na⁺ (Seifen). Die entstehenden Seifen sind Natriumsalze langkettiger Fettsäuren — amphipathische Moleküle, die Fette emulgieren können (langer unpolarer Schwanz + geladenes Carboxylat-Ende). Es entstehen keine freien Fettsäuren (die wären protoniert: R-COOH), sondern deprotonierte Carboxylate als Na-Salze.",
          hints: [
            "Was passiert chemisch, wenn eine Esterbindung mit NaOH gespalten wird?",
            "Das Natriumsalz einer Fettsäure hat eine geladene Kopfgruppe (COO⁻) — was macht das mit der Löslichkeit?",
          ],
          tags: ["verseifung", "triglyceride", "esterbindung", "seife"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage über Ketonkörper und die diabetische Ketoazidose ist korrekt?",
          options: [
            "Ketonkörper entstehen in der Niere aus Glucose bei Insulinüberschuss",
            "β-Hydroxybutyrat, Acetoacetat und Aceton entstehen in der Leber, wenn Acetyl-CoA die Citratzyklus-Kapazität übersteigt",
            "Ketonkörper können nur von der Leber selbst als Brennstoff genutzt werden",
            "Die Ketoazidose entsteht durch zu viel HDL-Cholesterin im Blut",
            "Aceton wird enzymatisch in der Niere produziert und über den Urin ausgeschieden",
          ],
          correctIndex: 1,
          explanation:
            "Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen in der Leber aus überschüssigem Acetyl-CoA, wenn die β-Oxidation viel Acetyl-CoA liefert, aber Oxalacetat für den Citratzyklus fehlt (z. B. bei Fasten, Typ-1-Diabetes). Gehirn, Herz und Skelettmuskel können Ketonkörper nutzen — die Leber selbst kann es nicht (fehlende Thiophorase). Bei unkontrolliertem Typ-1-Diabetes: Insulinmangel → unkontrollierte Lipolyse → massive Ketogenese → Ketoazidose (pH < 7,3, Acetongeruch, Kußmaul-Atmung).",
          hints: [
            "Bei Glucosemangel wird Oxalacetat zur Gluconeogenese abgezogen — was passiert dann mit dem Acetyl-CoA aus der β-Oxidation?",
            "Welches Organ produziert Ketonkörper, kann sie aber selbst nicht verwerten?",
          ],
          tags: ["ketonkörper", "ketoazidose", "diabetes", "fasten", "klinisch"],
          difficulty: 3,
        },
      ],
    },

    {
      id: "ch-13-04",
      title: "Nukleinsäuren — DNA und RNA",
      imageUrl: "/images/bms/ch-nukleotid.jpg",
      imageCaption:
        "Abb.: Aufbau eines Nukleotids mit Base, Zucker und Phosphat (OpenStax, CC BY 4.0)",
      stichworte: [
        "Nukleotide",
        "DNA-Doppelhelix",
        "Chargaff-Regeln",
        "Basenpaarung",
        "RNA-Typen",
        "Transkription",
        "Translation",
        "PCR",
        "DNA-Methylierung",
        "Nukleosid-Analoga",
        "DNA-Reparatur",
        "Phosphodiesterbindung",
      ],
      content: `DNA und RNA speichern und übermitteln die genetische Information aller Lebewesen. Ihre Chemie — vom Nukleotid-Baustein bis zur Doppelhelix — ist Voraussetzung für das Verständnis von Genetik, Molekularbiologie und moderner Diagnostik (z. B. PCR).

## Nukleotid-Aufbau

Die Erbinformation jedes Lebewesens ist in Nukleinsäuren gespeichert — langen Kettenmolekülen, deren Grundbausteine die **Nukleotide** sind. Jedes Nukleotid besteht aus drei Komponenten: einer **Stickstoffbase** (Purin oder Pyrimidin), einem **Pentosezucker** (Ribose bei RNA, 2'-Desoxyribose bei DNA — letzterer fehlt die OH-Gruppe an C2') und einer oder mehreren **Phosphatgruppen**. Ohne Phosphat spricht man von einem **Nukleosid** (Base + Zucker), mit Phosphat von einem **Nukleotid**. **ATP** (Adenosin-Triphosphat), das universelle Energietransportmolekül der Zelle, ist nichts anderes als ein Nukleotid mit drei Phosphatresten — die Hydrolyse der β-γ-Phosphorsäureanhydridbindung setzt ΔG°' ≈ −30,5 kJ/mol frei.

{{IMAGE}}

## Stickstoffbasen

Die Basen werden nach ihrer Ringstruktur in zwei Klassen eingeteilt. **Purinbasen** bestehen aus einem Doppelringsystem (9 Atome) und umfassen **Adenin (A)** und **Guanin (G)** — beide kommen sowohl in DNA als auch in RNA vor. **Pyrimidinbasen** besitzen einen einfachen Sechsring (6 Atome): **Cytosin (C)** findet sich in beiden Nukleinsäuren, **Thymin (T)** nur in der DNA (es trägt eine Methylgruppe am C5), und **Uracil (U)** nur in der RNA (ohne Methylgruppe). Eine bewährte Eselsbrücke lautet: „CUT the Pyrimidine" (Cytosin, Uracil, Thymin sind die Pyrimidine).

## Chargaff-Regeln

Erwin Chargaff entdeckte in den 1950er Jahren die quantitativen Gesetzmäßigkeiten der Basenzusammensetzung doppelsträngiger DNA, die sich später als direkte Konsequenz der Watson-Crick-Basenpaarung erwiesen: **A = T** (verbunden durch **2 Wasserstoffbrücken**), **G ≡ C** (verbunden durch **3 Wasserstoffbrücken**), und daraus folgt **A + G = C + T** (Purine = Pyrimidine). Der GC-Gehalt variiert zwischen verschiedenen Organismen und bestimmt die thermische Stabilität der DNA: Je höher der GC-Anteil, desto höher die Schmelztemperatur (Tm), weil G-C-Paare mit ihren drei Wasserstoffbrücken stabiler sind als A-T-Paare mit nur zwei.

## DNA-Doppelhelix

Das 1953 von Watson und Crick vorgeschlagene Strukturmodell der **B-DNA** beschreibt eine **rechtsgängige Doppelhelix** aus zwei **antiparallelen** Polynukleotidsträngen — der eine verläuft in 5'→3'-Richtung, der andere in 3'→5'-Richtung. Im Inneren der Helix liegen die komplementären Basenpaare, stabilisiert durch Wasserstoffbrücken und hydrophobe Stapelung (π-π-Stacking). Pro Windung enthält die Helix 10,5 Basenpaare bei einer Ganghöhe von 3,4 nm. Das Zucker-Phosphat-Rückgrat verläuft außen und ist bei physiologischem pH durch die Phosphatgruppen negativ geladen — dies erklärt die Assoziation der DNA mit basischen **Histonproteinen** zur Chromatinstruktur in Eukaryoten.

{{DIAGRAM:dna-structure}}

Die Antiparallelität hat eine wichtige biologische Konsequenz: Da DNA-Polymerasen ausschließlich in 5'→3'-Richtung synthetisieren können, wird an der Replikationsgabel ein Strang kontinuierlich als **Leitstrang** kopiert, während der andere diskontinuierlich als **Folgestrang** in Form kurzer **Okazaki-Fragmente** synthetisiert wird, die anschließend durch die DNA-Ligase verknüpft werden.

## RNA-Typen

Im Gegensatz zur DNA ist RNA meist einzelsträngig, enthält Ribose (OH an C2') und Uracil statt Thymin. Die wichtigsten RNA-Typen erfüllen grundverschiedene Funktionen im Informationsfluss der Zelle. Die **mRNA** (Messenger-RNA) überträgt die genetische Information vom Kern zum Ribosom und enthält ein 5'-Cap (7-Methylguanosin), die kodierende Sequenz aus Nukleotid-Tripletts (Codons) und einen 3'-Poly-A-Schwanz. Start-Codon ist AUG (kodiert Methionin), Stopp-Codons sind UAA, UAG und UGA. Die **tRNA** (Transfer-RNA) ist das Adaptormolekül der Translation — etwa 76 Nukleotide lang, mit kleeblattförmiger Sekundär- und L-förmiger Tertiärstruktur. Ihre Anticodon-Schleife erkennt komplementär das mRNA-Codon, am 3'-CCA-Ende wird die spezifische Aminosäure kovalent gebunden. Die **rRNA** (Ribosomale RNA) bildet das strukturelle und katalytische Gerüst des Ribosoms — sie katalysiert als Ribozym die Peptidbindungsbildung (Peptidyltransferase-Aktivität der 28S rRNA). **miRNA und siRNA** schließlich sind kleine regulatorische RNAs (~22 nt), die durch Bindung an komplementäre mRNA-Sequenzen den mRNA-Abbau oder die Translationshemmung auslösen (RNA-Interferenz, RNAi).

## Phosphodiesterbindung und Polymerisation

In der Nukleinsäure-Kette verbindet eine **Phosphodiesterbindung** das 3'-OH des einen Zuckers mit dem 5'-Phosphat des nächsten Nukleotids, sodass das Rückgrat in regelmäßiger Abfolge Zucker–Phosphat–Zucker–Phosphat aufgebaut ist. Die Phosphatgruppen sind bei physiologischem pH negativ geladen, was die DNA zum Polyanion macht und die Assoziation mit basischen **Histonproteinen** in Eukaryoten erklärt — 146 Basenpaare DNA wickeln sich um ein Histon-Oktamer zum Nukleosom, der Grundeinheit des Chromatins.

## Replikation, Transkription, Translation — Kurzüberblick

Der Informationsfluss in der Zelle folgt dem zentralen Dogma der Molekularbiologie. Bei der **DNA-Replikation** (semikonservativ) öffnet die Helicase den Doppelstrang, die Primase setzt einen RNA-Primer, und die DNA-Polymerase III synthetisiert den neuen Strang in 5'→3'-Richtung. Fehler werden durch Proofreading (3'→5'-Exonukleaseaktivität) und Mismatch-Repair korrigiert, sodass die Fehlerrate auf etwa 1:10⁹ sinkt.

Bei der **Transkription** liest die RNA-Polymerase II (in Eukaryoten) den Matrizenstrang (3'→5') und synthetisiert mRNA in 5'→3'-Richtung. Der Promotor (TATA-Box) und Enhancer-Elemente regulieren, wann und wie stark ein Gen abgelesen wird. Posttranskriptionell wird die Prä-mRNA durch 5'-Capping, 3'-Polyadenylierung und **Spleißen** (Entfernung der Introns, Verknüpfung der Exons durch das Spleißosom) zur reifen mRNA prozessiert.

Bei der **Translation** liest das Ribosom die mRNA in 5'→3'-Richtung ab. Die drei Phasen — Initiation (Start bei AUG), Elongation (Codon-Anticodon-Erkennung, Peptidbindung, Translokation) und Termination (Stopp-Codon → Release-Faktor) — produzieren eine Polypeptidkette. Der genetische Code umfasst 64 Codons für 20 Aminosäuren und ist degeneriert (mehrere Codons pro Aminosäure), aber universell in fast allen Organismen.

## Nukleosid-Analoga in der Therapie

Das Prinzip der Nukleosid-Analoga beruht auf ihrer strukturellen Ähnlichkeit zu natürlichen Nukleosiden: Nach Phosphorylierung werden sie von viralen Polymerasen als falsche Substrate eingebaut, terminieren aber die Kettenverlängerung, weil ihnen die 3'-Hydroxylgruppe fehlt. **Aciclovir** (Acycloguanosin) ist ein Guanosin-Analogon, das bevorzugt von der viralen Thymidinkinase phosphoryliert wird und selektiv die DNA-Polymerase von Herpesviren hemmt. **Tenofovir** hemmt als Adenosinmonophosphat-Analogon die HIV-Reverse Transkriptase, und **Remdesivir** blockiert als Adenosin-Analogon die RNA-abhängige RNA-Polymerase von SARS-CoV-2.

## DNA-Methylierung und Epigenetik

Die **DNA-Methylierung** — die Übertragung einer Methylgruppe auf Cytosin an CpG-Dinukleotiden durch DNA-Methyltransferasen (DNMT) — ist eine epigenetische Modifikation: Sie verändert nicht die Basensequenz, beeinflusst aber die Genexpression. Methylierung von CpG-Inseln im Promotorbereich rekrutiert Methyl-CpG-bindende Proteine, führt zur Chromatinkondensation und bewirkt **Gen-Silencing**. Dieses Prinzip ist fundamental für das **Genimprinting** (elternspezifische Genexpression, z. B. IGF2 nur vom väterlichen Allel), die **X-Inaktivierung** (eines der zwei X-Chromosomen bei Frauen wird inaktiviert → Barr-Körper) und die **Krebsentstehung** (Hypermethylierung von Tumorsuppressor-Promotoren wie p16 oder BRCA1 → Funktionsverlust; globale Hypomethylierung → genomische Instabilität).

## PCR — Polymerase-Kettenreaktion

Die PCR ermöglicht die exponentielle Vermehrung (Amplifikation) spezifischer DNA-Abschnitte in vitro und hat die molekulare Diagnostik revolutioniert. Jeder Zyklus besteht aus drei Temperaturschritten: Bei der **Denaturierung** (~95 °C) werden die Doppelstränge in Einzelstränge getrennt. Beim **Annealing** (~55–65 °C) hybridisieren kurze Oligonukleotid-Primer an ihre komplementären Zielsequenzen. Bei der **Elongation** (~72 °C) verlängert die hitzestabile **Taq-Polymerase** (aus dem Thermalbakterium Thermus aquaticus) die Primer in 5'→3'-Richtung. Nach n Zyklen liegen 2ⁿ Kopien vor — 30 Zyklen ergeben eine milliardenfache Vervielfältigung. **RT-PCR** (Reverse-Transkriptase-PCR) wandelt zunächst RNA in cDNA um und amplifiziert dann — Grundlage des COVID-19-Tests und der HIV-Viruslastbestimmung. **qPCR** (quantitative Real-Time-PCR) erlaubt die Echtzeitquantifizierung über Fluoreszenzsonden.

## DNA-Reparaturmechanismen

DNA wird ständig durch UV-Strahlung, reaktive Sauerstoffspezies (ROS) und Replikationsfehler geschädigt. Der Körper verfügt über mehrere Reparaturwege, deren Defekte zu schweren Erkrankungen führen. Der **Mismatch-Repair (MMR)** korrigiert Basenpaarungsfehler nach der Replikation — sein Ausfall verursacht das Lynch-Syndrom (hereditäres kolorektales Karzinom). Die **Nukleotid-Exzisionsreparatur (NER)** entfernt sperrige Läsionen wie UV-induzierte Thymin-Dimere — ein Defekt führt zu Xeroderma pigmentosum mit extremer UV-Empfindlichkeit und Hautkrebsneigung. Die **Basen-Exzisionsreparatur (BER)** beseitigt oxidierte oder desaminierte Basen durch DNA-Glykosylasen. **Doppelstrangbrüche** werden entweder durch homologe Rekombination (fehlerfrei, benötigt Schwesterchromatid) oder durch nicht-homologes Endjoining (NHEJ, fehleranfällig) repariert — Mutationen in BRCA1/BRCA2 stören die homologe Rekombination und erhöhen das Brust- und Ovarialkarzinomrisiko erheblich.

> **Merke:** Nucleinsäuren (DNA/RNA) bestehen aus Nukleotiden: Base + Zucker + Phosphat. DNA enthält Desoxyribose und Thymin, RNA enthält Ribose und Uracil. Die Doppelhelix wird durch Wasserstoffbrücken zwischen komplementären Basenpaaren (A–T: 2 H-Brücken, G–C: 3 H-Brücken) stabilisiert.

> **Merke:** ATP (Adenosintriphosphat) ist die universelle Energiewährung der Zelle. Die Hydrolyse der Phosphoanhydridbindung (ATP → ADP + Pᵢ) setzt ca. −30,5 kJ/mol frei und treibt endergone Reaktionen an.

> **Prüfungstipp:** Chargaff-Regeln werden im MedAT gerne als Rechenaufgabe gestellt: Wenn A = 20%, dann T = 20%, und G = C = 30%. GC-reiche DNA hat höhere Schmelztemperatur (3 H-Brücken vs. 2). Auch die Unterscheidung Nukleosid (Base + Zucker) vs. Nukleotid (+ Phosphat) und Purine (Doppelring: A, G) vs. Pyrimidine (Einzelring: C, T, U — Eselsbrücke: „CUT the Pyrimidine") sind Standardfragen.`,
      lernziele: [
        "Die drei Komponenten eines Nukleotids nennen und Nukleosid von Nukleotid unterscheiden",
        "Die Purin- und Pyrimidinbasen und ihre Paarungsregeln (Chargaff) mit Anzahl der Wasserstoffbrücken beschreiben",
        "Den Aufbau der DNA-Doppelhelix (antiparallel, rechtsgängig, 10,5 bp/Windung) erklären",
        "Die vier wichtigsten RNA-Typen (mRNA, tRNA, rRNA, miRNA) und ihre Funktionen benennen",
        "Das Wirkprinzip von Nukleosid-Analoga als Virostatika (Kettenabbruch) erklären",
      ],
      sections: [
        {
          heading: "Nukleotid-Aufbau und ATP",
          text: "Ein Nukleotid besteht aus einer Stickstoffbase (Purin oder Pyrimidin), einem Pentosezucker (Ribose oder Desoxyribose) und einer Phosphatgruppe. In der Nukleinsäure-Kette verbindet eine Phosphodiesterbindung das 3'-OH des einen Zuckers mit dem 5'-Phosphat des nächsten Nukleotids (3'→5'-Verknüpfung). ATP (Adenosin-Triphosphat) ist das universelle Energiewährungsmolekül: Die Hydrolyse von ATP zu ADP + Pᵢ liefert etwa 30,5 kJ/mol unter Standardbedingungen. Die Unterschiede zwischen DNA und RNA: Ribose (RNA) hat OH an C2', Desoxyribose (DNA) hat nur H an C2'. RNA enthält Uracil statt Thymin.",
          merksatz:
            "DNA = Desoxyribose + T; RNA = Ribose + U. Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat.",
        },
        {
          heading: "DNA-Doppelhelix und Chargaff-Regeln",
          text: "Die B-DNA (häufigste Form in vivo) ist eine rechtsgängige Doppelhelix: zwei antiparallele Stränge winden sich umeinander. Im Inneren befinden sich die Basenpaare (A=T mit 2 H-Brücken; G≡C mit 3 H-Brücken), das Zucker-Phosphat-Rückgrat liegt außen. 10,5 Basenpaare pro Windung, Steigung 3,4 nm. Die Chargaff-Regeln folgen aus der komplementären Basenpaarung: In jeder dsDNA gilt A=T und G=C. Der GC-Gehalt ist artspezifisch und korreliert positiv mit der Schmelztemperatur (Tm), da G-C-Paare (3 H-Brücken) stabiler sind als A-T-Paare (2 H-Brücken).",
          merksatz: "A=T (2 H-Brücken); G≡C (3 H-Brücken). GC-reich → höhere Schmelztemperatur.",
        },
        {
          heading: "RNA-Typen und Nukleosid-Analoga",
          text: "mRNA überträgt die genetische Information und enthält 5'-Cap, Poly-A-Schwanz und kodierenden Bereich (Codons = Tripletts). tRNA trägt die Aminosäuren und hat ein Anticodon, das komplementär zum mRNA-Codon ist. rRNA bildet das Ribosom und katalysiert als Ribozym die Peptidbindungsbildung. miRNA reguliert die Genexpression posttranskriptionell. Nukleosid-Analoga (Aciclovir, Tenofovir) nutzen die Ähnlichkeit zu natürlichen Nukleosiden: Nach Phosphorylierung durch virale Kinasen werden sie von viralen Polymerasen eingebaut, terminieren aber die Kettenverlängerung (Fehlen des 3'-OH → kein nächstes Nukleotid kann angehängt werden).",
          merksatz:
            "Aciclovir: kein 3'-OH → Kettenabbruch → hemmt virale DNA-Synthese. Wirksam gegen Herpes simplex.",
        },
        {
          heading: "RNA-Typen und ihre Funktionen",
          text: "Die vier wichtigsten RNA-Typen im Überblick:",
          table: {
            headers: ["RNA-Typ", "Funktion"],
            rows: [
              [
                "mRNA (messenger)",
                "Überträgt genetische Information vom Kern zum Ribosom; wird translatiert",
              ],
              [
                "tRNA (transfer)",
                "Transportiert Aminosäuren zum Ribosom; Anticodon paart mit mRNA-Codon",
              ],
              [
                "rRNA (ribosomale)",
                "Strukturkomponente des Ribosoms (28S, 18S, 5.8S, 5S beim Eukaryoten); katalytisch aktiv (Ribozym)",
              ],
              [
                "miRNA / siRNA",
                "Regulieren Genexpression durch mRNA-Abbau oder Translationshemmung (RNA-Interferenz)",
              ],
            ],
          },
        },
      ],
      merksätze: [
        "Purine (Doppelring): Adenin (A), Guanin (G) — in DNA und RNA. Pyrimidine (Einzelring): C, T (nur DNA), U (nur RNA).",
        "Chargaff: A=T (2 H-Brücken); G≡C (3 H-Brücken); A+G = C+T (Purine = Pyrimidine).",
        "DNA-Helix: antiparallel (5'→3' || 3'→5'), rechtsgängig, 10,5 bp/Windung, 3,4 nm Steigung.",
        "Desoxyribose (DNA): kein OH an C2'; Ribose (RNA): OH an C2'.",
        "Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat; ATP = Adenosin-Triphosphat.",
        "mRNA = Botschaft vom Kern zum Ribosom; tRNA = trägt Aminosäure + Anticodon; rRNA = Ribosom-Grundgerüst.",
        "Anticodon der tRNA ist komplementär und antiparallel zum Codon der mRNA.",
        "Kettenabbruch-Prinzip: Nukleosid-Analogon ohne 3'-OH → keine weiteren Nukleotide anknüpfbar.",
        "DNA-Methylierung an CpG: epigenetische Regulation ohne Sequenzänderung; Promotor-Methylierung → Gen-Silencing.",
        "GC-reiche DNA hat höhere Schmelztemperatur (3 H-Brücken pro GC vs. 2 bei AT).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Wirkprinzip von Aciclovir als Virostatikum und erklären Sie, warum es selektiv virusbefallene Zellen betrifft.",
        answer:
          "Aciclovir (Acycloguanosin) ist ein Guanosin-Analogon und eines der wichtigsten Virostatika zur Behandlung von Herpesvirus-Infektionen (HSV-1, HSV-2, VZV). Sein Wirkprinzip basiert auf einem mehrstufigen Aktivierungsprozess kombiniert mit dem Kettenabbruch-Mechanismus. Im ersten Schritt wird Aciclovir von der virusspezifischen Thymidinkinase (TK) phosphoryliert zu Aciclovir-Monophosphat. Dies ist der Schlüsselschritt für die Selektivität: Herpesviren codieren ihre eigene TK, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Thymidinkinase des Wirts. In nicht-infizierten Zellen findet diese erste Phosphorylierung kaum statt. In einem zweiten und dritten Schritt wird Aciclovir-Monophosphat durch zelluläre Kinasen zu Aciclovir-Triphosphat phosphoryliert. Dieses wird von der viralen DNA-Polymerase als falsches Substrat in den wachsenden DNA-Strang eingebaut. Da Aciclovir keine 3'-Hydroxylgruppe am Zuckeranalogon besitzt (der Zuckerring ist 'offen', es fehlt C3' und damit die 3'-OH-Gruppe), kann das nächste Nukleotid nicht an die 3'-Position angehängt werden — der DNA-Strang bricht ab. Die virale Replikation wird so effektiv unterbunden, während gesunde, nicht-infizierte Zellen kaum betroffen sind.",
      },
      klinischerBezug:
        "Aciclovir (Herpes), Tenofovir (HIV), Remdesivir (COVID-19) als Nukleosid-Analoga mit Kettenabbruchmechanismus; DNA-Methylierung in Krebsentstehung; Chargaff-Regeln für forensische DNA-Analyse.",
      selfTest: [
        {
          question: "Welche der folgenden Basen kommt ausschließlich in RNA vor?",
          options: ["Uracil", "Guanin", "Cytosin", "Thymin", "Adenin"],
          correctIndex: 0,
          explanation:
            "Uracil ist eine Pyrimidinbase, die ausschließlich in RNA vorkommt. Sie entspricht funktionell dem Thymin der DNA (paart mit Adenin), besitzt aber keine Methylgruppe am C5. Thymin kommt ausschließlich in DNA vor. Adenin, Guanin und Cytosin kommen in beiden Nukleinsäuren (DNA und RNA) vor. Die Pentose unterscheidet ebenfalls: RNA enthält Ribose (OH an C2'), DNA enthält Desoxyribose (H an C2').",
          hints: [
            "DNA: A, T, G, C; RNA: A, ?, G, C — welche Base ersetzt Thymin in der RNA?",
            "Der Name 'Ur-acil' enthält einen Hinweis: 'ur' = ursprünglich — RNA ist evolutionär älter als DNA.",
          ],
          tags: ["uracil", "thymin", "rna", "dna", "basen"],
          difficulty: 1,
        },
        {
          question:
            "Ein DNA-Doppelstrang hat einen GC-Gehalt von 60%. Wie viele Wasserstoffbrücken gibt es pro 100 Basenpaare?",
          options: [
            "200 Wasserstoffbrücken",
            "260 Wasserstoffbrücken",
            "240 Wasserstoffbrücken",
            "220 Wasserstoffbrücken",
            "300 Wasserstoffbrücken",
          ],
          correctIndex: 1,
          explanation:
            "Bei 100 Basenpaaren und 60 % GC-Gehalt: 60 G≡C-Paare × 3 H-Brücken = 180, plus 40 A=T-Paare × 2 H-Brücken = 80. Gesamt: 180 + 80 = 260 Wasserstoffbrücken.",
          hints: [
            "G≡C hat 3 H-Brücken, A=T hat 2 H-Brücken. Bei 100 bp und 60% GC: 60 GC-Paare + 40 AT-Paare.",
            "Rechne: 60×3 + 40×2 = ?",
          ],
          tags: ["chargaff", "wasserstoffbrücken", "gc-gehalt", "dna"],
          difficulty: 3,
        },
        {
          question: "Was bedeutet 'antiparallel' in Bezug auf die DNA-Doppelhelix?",
          options: [
            "Die beiden Stränge verlaufen parallel in derselben 5'→3'-Richtung",
            "Die Basensequenzen der beiden Stränge sind identisch",
            "Ein Strang verläuft in 5'→3'-Richtung, der komplementäre Strang in 3'→5'-Richtung",
            "Die Doppelhelix ist linksgängig (Z-DNA)",
            "Die Phosphatgruppen wechseln zwischen den Strängen ab",
          ],
          correctIndex: 2,
          explanation:
            "Antiparallel bedeutet, dass die beiden Stränge der DNA-Doppelhelix in entgegengesetzter Richtung verlaufen: Wenn ein Strang von 5'→3' verläuft, dann verläuft der komplementäre Partnerstrang in 3'→5'-Richtung (bezogen auf dieselbe räumliche Richtung). Diese Antiparallelität ist Konsequenz der komplementären Basenpaarung und der Geometrie der glykosidischen Bindungen. Biologisch bedeutsam: DNA-Polymerasen synthetisieren nur in 5'→3'-Richtung, weshalb an der Replikationsgabel ein Strang kontinuierlich (Leitstrang, 5'→3' in Syntheserichtung) und einer diskontinuierlich (Folgestrang, als Okazaki-Fragmente) repliziert wird.",
          hints: [
            "Schreibe zwei Zahlenreihen übereinander: 5'→3' und 3'←5'. Das ist antiparallel.",
            "DNA-Polymerase synthetisiert nur 5'→3'. Was bedeutet das für den anderen Strang an der Replikationsgabel?",
          ],
          tags: ["dna-helix", "antiparallel", "replikation"],
          difficulty: 2,
        },
        {
          question:
            "Welche RNA trägt eine Aminosäure zum Ribosom und erkennt das mRNA-Codon durch ihr Anticodon?",
          options: [
            "mRNA (messenger RNA)",
            "rRNA (ribosomale RNA)",
            "miRNA (micro RNA)",
            "tRNA (transfer RNA)",
            "siRNA (small interfering RNA)",
          ],
          correctIndex: 3,
          explanation:
            "Die tRNA (Transfer-RNA) ist das Adaptormolekül zwischen der Nukleinsäure-Welt (mRNA-Codon) und der Protein-Welt (Aminosäure). Sie hat eine charakteristische Kleeblattstruktur (sekundär) bzw. L-förmige 3D-Struktur. Am 3'-Ende (CCA-Trinukleotid) ist die spezifische Aminosäure kovalent gebunden (durch Aminoacyl-tRNA-Synthetasen, 'Aktivierung'). Das Anticodon-Loop enthält ein Trinukleotid (Anticodon), das komplementär und antiparallel zum spezifischen mRNA-Codon ist. mRNA enthält die Codons, rRNA ist Ribosombestandteil, miRNA/siRNA regulieren die Genexpression posttranskriptionell.",
          hints: [
            "Welche RNA hat ein 'Anticodon' — das Gegenstück zum Codon auf der mRNA?",
            "Transfer = Transport. Was wird von wo nach wo transportiert?",
          ],
          tags: ["trna", "anticodon", "translation", "rna-typen"],
          difficulty: 1,
        },
        {
          question:
            "Warum ist Aciclovir selektiv für virusinfizierte Zellen und kaum toxisch für gesunde Wirtszellen?",
          options: [
            "Aciclovir kann die Plasmamembran gesunder Zellen nicht passieren",
            "Die zelluläre DNA-Polymerase erkennt Aciclovir nicht als Substrat, die virale DNA-Polymerase hat eine absolut niedrigere Genauigkeit",
            "Gesunde Zellen können Aciclovir enzymatisch abbauen, infizierte Zellen nicht",
            "Aciclovir wird nur von Viruspartikeln, nicht von Zellen aufgenommen",
            "Die erste Phosphorylierung wird fast ausschließlich durch die viruseigene Thymidinkinase durchgeführt, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Kinase",
          ],
          correctIndex: 4,
          explanation:
            "Die Selektivität von Aciclovir beruht auf einem zweistufigen Mechanismus: Erstens wird Aciclovir hauptsächlich durch die viruseigene Thymidinkinase (TK) zu Aciclovir-Monophosphat phosphoryliert. Die HSV-TK hat eine deutlich höhere Affinität (niedrigerer Km) für Aciclovir als die zelluläre Thymidinkinase. In nicht-infizierten Zellen findet diese erste Aktivierung kaum statt. Zweitens: Aciclovir-Triphosphat hemmt präferentiell die virale DNA-Polymerase (Ki viral ≪ Ki zellulär). Dieser zweifache Selektivitätsmechanismus erklärt die geringe Toxizität von Aciclovir für den Wirt bei gleichzeitig effektiver antiviraler Wirkung.",
          hints: [
            "Welches Enzym führt die erste Aktivierungsphosphorylierung von Aciclovir durch, und wer kodiert es?",
            "Das Virus bringt sein eigenes Aktivierungsenzym mit — welcher Vorteil ergibt sich daraus für die Selektivität?",
          ],
          tags: ["aciclovir", "selektivität", "thymidinkinase", "virostatika"],
          difficulty: 3,
        },
        {
          question:
            "Ein dsDNA-Abschnitt hat auf einem Strang die Sequenz 5'-ATGCGT-3'. Wie lautet der komplementäre Gegenstrang?",
          options: ["5'-ACGCAT-3'", "5'-TACGCA-3'", "3'-ATGCGT-5'", "5'-ATGCGT-3'", "3'-UACGCA-5'"],
          correctIndex: 0,
          explanation:
            "Der komplementäre Strang folgt den Chargaff-Regeln (A paart mit T, G paart mit C) und verläuft antiparallel. Ausgangs-Strang: 5'-A-T-G-C-G-T-3'. Komplementär und antiparallel: 3'-T-A-C-G-C-A-5' = 5'-A-C-G-C-A-T-3'. Schritt für Schritt: A→T, T→A, G→C, C→G, G→C, T→A ergibt den Komplementärstrang (3'→5'): TACGCA. Umgekehrt in 5'→3'-Richtung: ACGCAT. Antwort D ist korrekt. RNA würde Uracil statt Thymin enthalten (Antwort E), ist hier aber nicht gemeint (es handelt sich um dsDNA).",
          hints: [
            "Komplementäre Basenpaare: A↔T, G↔C. Denk daran, dass der Gegenstrang antiparallel ist!",
            "Schreibe erst den Komplementärstrang 3'→5', dann drehe ihn um für die 5'→3'-Schreibweise.",
          ],
          tags: ["basenpaarung", "komplementärstrang", "antiparallel", "dna"],
          difficulty: 2,
        },
        {
          question:
            "Was ist der Unterschied zwischen DNA-Methylierung als epigenetischer Modifikation und einer Punktmutation?",
          options: [
            "Beide verändern die Basensequenz der DNA dauerhaft",
            "DNA-Methylierung verändert die Genexpression ohne Änderung der Basensequenz; Punktmutationen verändern die Basensequenz selbst",
            "DNA-Methylierung verändert die Basensequenz, Punktmutationen nicht",
            "Punktmutationen sind vererbbar, DNA-Methylierung nicht",
            "DNA-Methylierung betrifft nur Adenin; Punktmutationen betreffen Cytosin",
          ],
          correctIndex: 1,
          explanation:
            "DNA-Methylierung ist eine epigenetische Modifikation: Eine Methylgruppe (–CH₃) wird durch DNA-Methyltransferasen kovalent an das C5-Atom von Cytosin in CpG-Dinukleotiden angehängt. Die Basensequenz (A, T, G, C) bleibt dabei identisch — nur die chemische Modifikation am Cytosin ändert sich. Dennoch kann Promotor-Methylierung die Transkription eines Gens stillegen (Silencing). Bei Punktmutationen wird hingegen eine Base durch eine andere ausgetauscht, deletiert oder insertiert — die Sequenz selbst ändert sich. Epigenetische Markierungen (Methylierungen, Histonmodifikationen) können vererbt werden (transgenerationelle Epigenetik), sind aber prinzipiell reversibel.",
          hints: [
            "'Epi-genetik' bedeutet 'über der Genetik' — die Sequenz bleibt, die Regulation ändert sich.",
            "Was wird bei einer Mutation verändert: die Sequenz (A, T, G, C) oder eine chemische Gruppe daran?",
          ],
          tags: ["epigenetik", "dna-methylierung", "punktmutation", "genexpression"],
          difficulty: 2,
        },
      ],
    },
  ],
};
