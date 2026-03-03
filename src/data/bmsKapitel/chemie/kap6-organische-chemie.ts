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
      content: `## Alkane — gesättigte Kohlenwasserstoffe

Die organische Chemie beschäftigt sich mit Verbindungen des Kohlenstoffs, und die einfachsten unter ihnen sind die Alkane. Ihre allgemeine Formel lautet CₙH₂ₙ₊₂. In einem Alkan sind sämtliche Kohlenstoffatome über Einfachbindungen miteinander verknüpft — ausschließlich σ-Bindungen, die durch frontale Orbitalüberlappung entstehen. Da keine weiteren Bindungspartner mehr aufgenommen werden können, bezeichnet man Alkane als gesättigt. Jedes C-Atom ist sp³-hybridisiert, was eine tetraederförmige Geometrie mit einem Bindungswinkel von 109,5° zur Folge hat.

Weil Alkane ausschließlich unpolare C-H- und C-C-Bindungen enthalten, dominieren als zwischenmolekulare Kräfte die schwachen van-der-Waals-Wechselwirkungen (London-Dispersionskräfte). Mit wachsender Kettenlänge vergrößert sich die Moleküloberfläche, die Kontaktfläche zwischen Nachbarmolekülen nimmt zu, und die van-der-Waals-Kräfte werden stärker. Deshalb steigt der Siedepunkt in der homologen Reihe systematisch an: Methan ist bei Raumtemperatur ein Gas (Sdp. −162 °C), Pentan bereits eine Flüssigkeit (Sdp. 36 °C), und ab Heptan aufwärts begegnet man öligen Flüssigkeiten.

Die **IUPAC-Nomenklatur** benennt Alkane nach der längsten zusammenhängenden Kohlenstoffkette — dem Stammnamen (Methan, Ethan, Propan, Butan, Pentan, Hexan, Heptan, Octan, Nonan, Decan). Seitenketten werden als Präfixe vorangestellt (Methyl-, Ethyl-), und die Nummerierung erfolgt so, dass Substituenten die niedrigstmöglichen Positionsziffern erhalten. So heißt die verzweigte Variante von Butan korrekt 2-Methylpropan (Trivialname: Isobutan, C₄H₁₀).

Für das Verständnis organischer Reaktionen ist die **Klassifikation von Kohlenstoffatomen** entscheidend: Ein primäres C-Atom ist an genau ein weiteres C gebunden, ein sekundäres an zwei, ein tertiäres an drei. Diese Unterscheidung bestimmt die Reaktivität, denn tertiäre Radikale und Carbokationen sind stabiler als sekundäre, und diese wiederum stabiler als primäre.

Ab Butan (C₄H₁₀) treten **Konstitutionsisomere** auf — Verbindungen mit gleicher Summenformel, aber verschiedener Atomverknüpfung. n-Butan ist linear, 2-Methylpropan verzweigt. Die Zahl der Isomere wächst rasch: C₅ hat 3, C₆ hat 5, C₁₀ bereits 75 Isomere. Bildet die Kohlenstoffkette einen Ring, spricht man von **Cycloalkanen** (allgemeine Formel CₙH₂ₙ — identisch mit den Alkenen!). Cyclohexan nimmt bevorzugt die spannungsfreie Sesselkonformation ein, während Cyclopropan durch seinen erzwungenen 60°-Bindungswinkel erhebliche Ringspannung aufweist und daher reaktiver ist. Bei disubstituierten Cycloalkanen entsteht cis/trans-Isomerie, je nachdem ob die Substituenten auf gleicher oder gegenüberliegender Ringseite stehen.

Die **typische Reaktion der Alkane** ist die radikalische Substitution (SR). Da Alkane weder π-Elektronen noch freie Elektronenpaare besitzen, benötigen sie energiereiche Bedingungen — UV-Licht oder hohe Temperaturen — um mit Halogenen zu reagieren. Ein Wasserstoffatom wird dabei durch ein Halogenatom ersetzt: CH₄ + Cl₂ → CH₃Cl + HCl. Die Reaktion verläuft als Kettenreaktion in drei Phasen: Im **Kettenstart** spaltet UV-Licht das Cl₂-Molekül homolytisch in zwei hochreaktive Chlorradikale (Cl₂ →[hν] 2 Cl•). In der **Kettenfortpflanzung** abstrahiert ein Chlorradikal ein Wasserstoffatom vom Methan (Cl• + CH₄ → CH₃• + HCl), und das entstandene Methylradikal reagiert seinerseits mit einem weiteren Cl₂-Molekül (CH₃• + Cl₂ → CH₃Cl + Cl•) — so regeneriert sich das Chlorradikal, und die Kette setzt sich fort. Im **Kettenabbruch** rekombinieren zwei Radikale miteinander.

## Alkene — einfach ungesättigte Kohlenwasserstoffe

Entfernt man aus einem Alkan zwei benachbarte Wasserstoffatome, entsteht zwischen den betroffenen Kohlenstoffatomen eine Doppelbindung — ein Alken mit der allgemeinen Formel CₙH₂ₙ. Diese Doppelbindung besteht aus einer σ-Bindung und einer zusätzlichen π-Bindung, die durch seitliche Überlappung der unhybridisierten p-Orbitale zustande kommt. Die beteiligten C-Atome sind sp²-hybridisiert und bilden eine trigonal-planare Geometrie mit einem Bindungswinkel von 120°. Die π-Bindung ist energiereicher und zugleich reaktiver als die σ-Bindung, weil die Elektronendichte oberhalb und unterhalb der Molekülebene für Angriffe zugänglich ist.

Das elektronenreiche π-System macht Alkene zum idealen Angriffsziel für elektronenarme Teilchen (Elektrophile). Die **typische Reaktion** ist daher die elektrophile Addition: Brom addiert sich an die Doppelbindung (C₂H₄ + Br₂ → C₂H₄Br₂), und darauf beruht der klassische **Bromwasser-Nachweis** — orangefarbenes Bromwasser entfärbt sich bei Anwesenheit einer C=C- oder C≡C-Bindung.


Bei der Addition von Halogenwasserstoffen an asymmetrische Alkene bestimmt die **Markovnikov-Regel** die Regioselektivität: Das Proton addiert an das C-Atom mit den meisten Wasserstoffatomen, das Halogenid an das höher substituierte C. Grund ist die Stabilität des intermediären Carbokations — ein sekundäres oder tertiäres Carbokation wird bevorzugt gebildet.

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
          options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙHₙ"],
          correctIndex: 0,
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
            "Bromwasser wird zugegeben; bei Doppelbindung entfärbt sich die orange Lösung",
            "Bromwasser wird zugegeben; bei Doppelbindung färbt sich die Lösung blau",
            "Bromwasser wird zugegeben; bei Doppelbindung steigt die Temperatur messbar an",
            "Bromwasser wird zugegeben; bei Doppelbindung entsteht ein Gas",
          ],
          correctIndex: 1,
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
            "Radikalische Substitution",
            "Elektrophile aromatische Substitution",
          ],
          correctIndex: 3,
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
          options: ["sp³", "sp²", "sp", "sp³d", "d²sp³"],
          correctIndex: 1,
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
            "2-Methylpropan (Isobutan), weil es größere Oberfläche hat",
            "2-Methylpropan (Isobutan), weil es kugelförmiger und die Oberfläche kleiner ist",
            "Beide haben den gleichen Siedepunkt, da gleiche Summenformel",
            "n-Butan, weil es leichter ist",
          ],
          correctIndex: 2,
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
            "2-Brompropan (Br an C2)",
            "1,2-Dibrompropan",
            "Propan",
            "Propin",
          ],
          correctIndex: 1,
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

    // ─────────────────────────────────────────────────────────────────
    // UK 02 — Isomerie und Stereochemie
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-02",
      title: "Isomerie und Stereochemie",
      content: `## Konstitutionsisomere (Strukturisomere)

Zwei Verbindungen mit identischer Summenformel, aber unterschiedlichem Aufbau — das ist Isomerie, eines der zentralen Konzepte der organischen Chemie. Die grundlegendste Form ist die **Konstitutionsisomerie**: Die Atome sind zwar in gleicher Anzahl vorhanden, aber auf verschiedene Weise miteinander verknüpft. So haben n-Butan und Isobutan (2-Methylpropan) beide die Formel C₄H₁₀, unterscheiden sich jedoch in der Verzweigung des Kohlenstoffgerüsts — und damit in ihren physikalischen Eigenschaften (Sdp. −1 °C vs. −12 °C). Man unterteilt Konstitutionsisomere in **Skelettisomere** (verschiedene Kohlenstoffgerüste wie n-Butan vs. Isobutan), **Stellungsisomere** (gleiche funktionelle Gruppe an verschiedener Position, etwa 1-Propanol vs. 2-Propanol) und **Funktionsisomere** (verschiedene funktionelle Gruppen bei gleicher Summenformel, z. B. Ethanol CH₃CH₂OH vs. Dimethylether CH₃OCH₃ — beide C₂H₆O). Die Zahl der möglichen Konstitutionsisomere steigt mit der Molekülgröße dramatisch: C₄H₁₀ hat 2, C₅H₁₂ hat 3, C₆H₁₄ hat 5 und C₁₀H₂₂ bereits 75 Isomere.

## Konformationsisomere

Neben der Konnektivität kann auch die räumliche Anordnung variieren, ohne dass dabei Bindungen gebrochen werden. **Konformere** entstehen durch Rotation um C-C-Einfachbindungen und gehen ständig ineinander über. Beim Ethan beispielsweise wechseln die Substituenten zwischen der energiearmen gestaffelten Konformation (Substituenten „auf Lücke") und der energiereicheren ekliptischen Konformation (Substituenten „auf Deckung", sterische Abstoßung). Für die Medizin besonders relevant ist das Cyclohexan: Es nimmt bevorzugt die spannungsfreie **Sesselkonformation** ein, in der man axiale und äquatoriale Positionen unterscheidet. Große Substituenten wie die tert-Butylgruppe bevorzugen die äquatoriale Position, weil dort weniger 1,3-diaxiale Wechselwirkungen auftreten.

## Stereoisomere

Spannender für die Pharmakologie werden die Verhältnisse, wenn Verbindungen zwar identische Konnektivität besitzen, sich aber in der räumlichen Anordnung ihrer Atome unterscheiden. Solche **Stereoisomere** unterteilen sich in mehrere Kategorien.

### cis/trans-Isomerie (Z/E-Isomerie)

An C=C-Doppelbindungen und in Ringen kann die freie Drehbarkeit nicht stattfinden, weil die π-Bindung dies verhindert. Tragen beide doppelgebundenen Kohlenstoffatome jeweils zwei verschiedene Substituenten, existieren zwei räumlich verschiedene Anordnungen: Im **cis-Isomer** (Z, zusammen) stehen die gleichartigen Substituenten auf der gleichen Seite, im **trans-Isomer** (E, entgegengesetzt) auf gegenüberliegenden Seiten. cis-2-Buten und trans-2-Buten sind daher verschiedene Verbindungen mit unterschiedlichen Siedepunkten (3,7 °C vs. 0,9 °C). Für die exakte Benennung komplexerer Fälle verwendet man die E/Z-Nomenklatur, bei der die Substituenten nach den CIP-Prioritätsregeln (höhere Ordnungszahl = höhere Priorität) geordnet werden.

### Chiralität und R/S-Isomerie (Enantiomere)

Ein Kohlenstoffatom, das vier verschiedene Substituenten trägt, wird als **chirales Zentrum** (Stereozentrum) bezeichnet. Ein solches Molekül lässt sich nicht mit seinem Spiegelbild zur Deckung bringen — genauso wie die rechte Hand nicht deckungsgleich auf die linke gelegt werden kann. Die beiden nicht-superponierbaren Spiegelbildformen heißen **Enantiomere**.

Enantiomere sind in vielerlei Hinsicht identisch: Sie haben gleiche Siedepunkte, Schmelzpunkte, Löslichkeiten und identische chemische Reaktivität in achiraler Umgebung. Doch in zwei entscheidenden Punkten unterscheiden sie sich. Erstens drehen sie die Schwingungsebene von linear polarisiertem Licht um den gleichen Betrag, aber in entgegengesetzte Richtungen — das (+)-Enantiomer nach rechts (dextrogyr), das (−)-Enantiomer nach links (lävogyr). Gemessen wird dies mit dem **Polarimeter** über die spezifische Drehung [α] = α / (c · l). Zweitens — und das ist für die Medizin entscheidend — zeigen sie **verschiedene biologische Wirkung**, weil Enzyme, Rezeptoren und Transportproteine selbst chiral sind und ihre Substrate stereoselektiv erkennen.

Zur Benennung der Konfiguration am chiralen Zentrum dient das **R/S-System** nach CIP: Man ordnet die vier Substituenten nach absteigender Priorität (höhere Ordnungszahl = höhere Priorität), orientiert die niedrigste Priorität (4) vom Betrachter weg und verfolgt den Weg von Gruppe 1 über 2 nach 3. Verläuft dieser im Uhrzeigersinn, lautet die Konfiguration **R** (rectus, „rechts"), entgegen dem Uhrzeigersinn **S** (sinister, „links"). Wichtig: Die R/S-Bezeichnung sagt nichts über die Drehrichtung (+/−) polarisierten Lichts aus — diese muss experimentell bestimmt werden.

In der Biochemie nutzt man zusätzlich das **L-/D-System**: Proteinogene Aminosäuren liegen ausnahmslos in der L-Konfiguration vor, und Glucose im Stoffwechsel in der D-Form.

## Racemisch und meso-Verbindungen

Ein **racemisches Gemisch** (Racemat) enthält beide Enantiomere im Verhältnis 1:1. Da sich die optischen Drehungen gegenseitig aufheben, ist ein Racemat optisch inaktiv. Dies erklärt, warum chemisch synthetisierte chirale Verbindungen oft als Racemate anfallen, während biologische Systeme — dank stereoselektiver Enzyme — in der Regel nur ein Enantiomer produzieren.

Eine **meso-Verbindung** besitzt zwar Chiralitätszentren, enthält aber eine innere Spiegelebene, die das Molekül als Ganzes achiral macht. Die meso-Weinsäure hat beispielsweise zwei Stereozentren, ist aber dennoch optisch inaktiv. Ein verwandtes Konzept ist die **Prochiralität**: Ein sp³-C-Atom mit zwei gleichen Substituenten kann durch eine einzige Reaktion chiral werden — relevant für die enzymatische Stereospezifität, etwa beim Citrat im Citratzyklus.

## Diastereomere

Alle Stereoisomere, die keine Enantiomere sind, nennt man **Diastereomere**. Bei n Chiralitätszentren gibt es maximal 2ⁿ Stereoisomere (Ausnahme: meso-Verbindungen). Im Gegensatz zu Enantiomeren unterscheiden sich Diastereomere in ihren physikalischen Eigenschaften (Schmelzpunkt, Löslichkeit, chromatographisches Verhalten) und lassen sich daher durch konventionelle Trennmethoden separieren. Spezialfälle sind **Epimere**, die sich an genau einem Chiralitätszentrum unterscheiden (D-Glucose vs. D-Galactose sind C4-Epimere, D-Glucose vs. D-Mannose C2-Epimere), und **Anomere**, die sich am anomeren C-Atom der Ringform von Zuckern unterscheiden (α- und β-D-Glucose).

## Klinische Relevanz der Chiralität

Die biologische Bedeutung der Chiralität ist enorm, denn Enzyme, Rezeptoren und Transportproteine erkennen Enantiomere unterschiedlich. Das eindrücklichste Beispiel ist **Thalidomid (Contergan)**: Das R-Enantiomer wirkt als Sedativum, das S-Enantiomer ist teratogen und verursacht schwere Gliedmaßenfehlbildungen (Phokomelie). Tragischerweise findet im menschlichen Körper eine spontane Racemisierung statt, sodass auch die Gabe des reinen R-Enantiomers die Teratogenität nicht verhindert.

Weitere pharmazeutisch relevante Beispiele zeigen dasselbe Prinzip: Bei **Ibuprofen** ist das S(+)-Enantiomer der aktive Wirkstoff, das R(−)-Enantiomer deutlich schwächer wirksam. Bei der Parkinson-Therapie setzt man ausschließlich **L-Dopa** ein, weil D-Dopa keine Wirkung hat — die DOPA-Decarboxylase ist streng stereoselektiv. In der Pharmazie bezeichnet man das wirksamere Enantiomer als **Eutomer**, das weniger wirksame als **Distomer**. Die moderne Arzneimittelzulassung verlangt die separate Prüfung beider Enantiomere, und zunehmend werden Racemate durch reine Enantiomere ersetzt — etwa Omeprazol durch Esomeprazol (das S-Enantiomer mit stärkerer Wirkung).

> **Merke:** Thalidomid: R=Sedativum, S=teratogen; in vivo Racemisierung → Trennung klinisch unwirksam. Chirale Arzneimittel müssen auf jedes Enantiomer separat geprüft werden.

> **Prüfungstipp:** Im MedAT werden Isomerie-Typen gerne als Zuordnung abgefragt. Entscheidungsbaum: Gleiche Summenformel? Ja → Isomere. Gleiche Konnektivität? Nein → Konstitutionsisomere. Ja → Stereoisomere. Spiegelbilder? Ja → Enantiomere. Nein → Diastereomere. Merke auch: R/S sagt nichts über (+)/(−) aus!`,
      stichworte: [
        "Isomerie",
        "Konstitutionsisomere",
        "Stereoisomere",
        "Chiralität",
        "Enantiomere",
        "Diastereomere",
        "R/S-Konfiguration",
        "cis/trans-Isomerie",
        "Polarimetrie",
        "Thalidomid",
        "optische Aktivität",
        "Eutomer",
      ],
      lernziele: [
        "Den Unterschied zwischen Konstitutionsisomeren und Stereoisomeren erklären und Beispiele nennen.",
        "cis/trans-Isomerie (Z/E) an C=C-Doppelbindungen erkennen und benennen.",
        "Chiralität definieren und ein Chiralitätszentrum im Strukturbild identifizieren.",
        "Die R/S-Konfiguration nach CIP-Regeln bestimmen und die Begriffe Enantiomer, Diastereomer, Racemat erklären.",
        "Die klinische Bedeutung von Chiraliät anhand von Thalidomid und L-/D-Aminosäuren erläutern.",
      ],
      sections: [
        {
          heading: "Typen der Isomerie — Überblick",
          text: "Isomerie teilt sich auf in: (1) Konstitutionsisomerie (verschiedene Konnektivität, z.B. n-Butan vs. Isobutan) und (2) Stereoisomerie (gleiche Konnektivität, verschiedene Raumanordnung). Stereoisomerie umfasst: (2a) cis/trans-Isomerie an C=C-Doppelbindungen; (2b) Enantiomerie (Spiegelbildisomerie, R/S, optisch aktiv); (2c) Diastereomerie (alle anderen Stereoisomere, die keine Enantiomere sind). Racemat = 1:1-Gemisch von Enantiomeren, optisch inaktiv.",
          merksatz:
            "Gleiche Formel → Isomere. Verschiedene Konnektivität → Konstitutionsisomere. Gleiche Konnektivität, verschiedene Raumanordnung → Stereoisomere (cis/trans oder R/S).",
        },
        {
          heading: "Das chirale Kohlenstoffatom",
          text: "Ein Kohlenstoffatom ist chiral, wenn es vier verschiedene Substituenten trägt (sp³-hybridisiert). Dann gibt es zwei nicht-superponierbare Spiegelbildformen (Enantiomere). Jedes Chiralitätszentrum verdoppelt theoretisch die Zahl der Stereoisomere (2ⁿ-Regel). In der Biochemie sind fast alle wichtigen Moleküle chiral: Aminosäuren, Monosaccharide, Nucleoside, Steroide. Biologische Systeme (Enzyme, Rezeptoren) sind stereoselektiv — sie erkennen oft nur ein Enantiomer.",
          merksatz:
            "Vier verschiedene Gruppen am C → chirales Zentrum → Enantiomere möglich. Proteinogene Aminosäuren sind alle L-konfiguriert. Bei n Chiralitätszentren: maximal 2ⁿ Stereoisomere.",
        },
        {
          heading: "Klinischer Fall: Thalidomid — das Contergan-Desaster",
          text: "Thalidomid (Contergan) wurde in den 1950er-60er Jahren als Schlaf- und Beruhigungsmittel vermarktet. Es enthält ein Chiralitätszentrum. Das R-Enantiomer hat sedierende Wirkung. Das S-Enantiomer ist teratogen (löst Missbildungen aus — Phokomelie). Das tragische Problem: Im menschlichen Körper findet spontane Racemisierung statt — selbst reines R-Enantiomer wandelt sich in vivo ins S-Enantiomer um, sodass die teratogene Wirkung nicht durch Verabreichung nur des R-Isomers verhindert werden kann. Dieser Fall begründete die moderne Arzneimittelregulierung für chirale Wirkstoffe.",
          merksatz:
            "Thalidomid: R=Sedativum, S=teratogen. Racemisierung in vivo macht Trennung klinisch unwirksam. Lehre: Chirale Arzneimittel müssen auf jedes Enantiomer einzeln geprüft werden.",
        },
      ],

      merksätze: [
        "Isomere haben gleiche Summenformel, aber verschiedene Struktur oder Raumanordnung.",
        "Konstitutionsisomere (Strukturisomere): gleiche Formel, verschiedene Konnektivität der Atome.",
        "cis/trans-Isomerie: entsteht durch blockierte Rotation an C=C-Doppelbindungen.",
        "Chiralität: C mit vier verschiedenen Substituenten → nicht-superponierbare Spiegelbilder (Enantiomere).",
        "R/S-Nomenklatur: CIP-Priorität nach Ordnungszahl; R=Uhrzeigersinn, S=gegen Uhrzeigersinn (Gruppe 4 nach hinten).",
        "Enantiomere unterscheiden sich nur in der optischen Aktivität, nicht in Siedepunkt oder Löslichkeit.",
        "Diastereomere: Stereoisomere, die keine Enantiomere sind; unterschiedliche physikalische Eigenschaften.",
        "L-Aminosäuren sind in allen Proteinen; D-Aminosäuren kommen in Bakterienzellwänden vor.",
        "Thalidomid-Prinzip: R-aktiv, S-teratogen; in vivo Racemisierung möglich.",
        "Ibuprofen: nur S(+)-Form ist analgetisch aktiv; R(-)-Form wird in vivo teilweise umgewandelt.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was versteht man unter Enantiomeren, und welche klinische Bedeutung hat die Chiralität bei Arzneimitteln? Erläutern Sie das Beispiel Thalidomid.",
        answer:
          "Enantiomere sind zwei Stereoisomere, die sich wie Bild und nicht-superponiertes Spiegelbild verhalten. Sie entstehen an einem chiralen Kohlenstoffatom, das vier verschiedene Substituenten trägt. Enantiomere haben identische physikalische Eigenschaften (Schmelzpunkt, Siedepunkt, Löslichkeit) und identische Reaktivität in achiraler Umgebung. Sie unterscheiden sich ausschließlich in der optischen Aktivität (Drehung polarisierten Lichts in entgegengesetzte Richtungen: (+) rechtsdrehend, (−) linksdrehend) und in ihrem Verhalten gegenüber anderen chiralen Molekülen wie Enzymen und Rezeptoren. Die klinische Bedeutung der Chiralität liegt darin, dass biologische Zielmoleküle (Enzyme, Rezeptoren, Transporter) selbst chiral sind und zwei Enantiomere eines Arzneimittels komplett unterschiedliche biologische Wirkungen haben können. Das deutlichste Beispiel ist Thalidomid (Contergan), das in den späten 1950er Jahren als Racemat als Schlafmittel und Antiemetikum bei Schwangerschaftsübelkeit eingesetzt wurde. Das R-Enantiomer hat die therapeutisch gewünschte sedierende Wirkung. Das S-Enantiomer ist teratogen und verursachte schwere Gliedmaßenfehlbildungen (Phokomelie) bei Tausenden von Kindern. Besonders tragisch ist, dass selbst die Verabreichung des reinen R-Enantiomers die Teratogenität nicht verhindert hätte, da im menschlichen Körper spontane Racemisierung stattfindet (Interkonversion beider Formen). Dieser Fall war ein Wendepunkt in der Pharmakologie und führte zur Einführung strenger Zulassungsvorschriften, die heute die separate Prüfung jedes Enantiomers verlangen.",
      },
      klinischerBezug:
        "Chirale Arzneimittel (Enantiomere) können sehr unterschiedliche Wirkungen haben: Thalidomid (R=Sedativum, S=teratogen), L-Dopa (wirksam bei Parkinson, D-Dopa inaktiv), S-Ibuprofen (aktive Form).",
      selfTest: [
        {
          question: "Was ist die Grundbedingung für das Vorliegen eines chiralen Kohlenstoffatoms?",
          options: [
            "Das C-Atom trägt mindestens eine OH-Gruppe",
            "Das C-Atom ist sp²-hybridisiert",
            "Das C-Atom trägt vier verschiedene Substituenten",
            "Das C-Atom ist Teil eines Rings",
            "Das C-Atom trägt mindestens zwei gleiche Substituenten",
          ],
          correctIndex: 2,
          explanation:
            "Ein Kohlenstoffatom ist chiral (stereogen), wenn es vier verschiedene Substituenten trägt — das können Atome oder Atomgruppen sein. Dann gibt es zwei Möglichkeiten, diese vier Substituenten räumlich anzuordnen: die zwei Anordnungen sind Spiegelbilder voneinander und nicht superponierbar (Enantiomere). Wenn zwei oder mehr Substituenten gleich sind, gibt es nur eine Anordnung (kein chirales Zentrum). Ein sp²-hybridisiertes C (z.B. in einer Doppelbindung) kann kein Chiralitätszentrum sein, da es nur drei Bindungspartner hat.",
          hints: [
            "Denke an eine Hand: links und rechts sind Spiegelbilder. Was macht eine Hand chiral?",
            "Wenn zwei Substituenten gleich sind, kann man das Molekül durch Rotation in sein Spiegelbild überführen.",
          ],
          difficulty: 1,
          tags: ["chiralität", "chiralitätszentrum", "vier-verschiedene-substituenten"],
        },
        {
          question:
            "Zwei Verbindungen haben die Summenformel C₄H₈: But-1-en (CH₂=CH-CH₂-CH₃) und Cyclobutan (viergliedriger Ring). In welche Isomerieklasse fallen diese beiden?",
          options: [
            "Enantiomere",
            "Diastereomere",
            "Konstitutionsisomere",
            "cis/trans-Isomere",
            "Meso-Verbindungen",
          ],
          correctIndex: 2,
          explanation:
            "But-1-en und Cyclobutan haben beide die Summenformel C₄H₈, aber eine völlig unterschiedliche Konnektivität der Atome: But-1-en ist eine offenkettige Verbindung mit einer Doppelbindung, Cyclobutan ist ein gesättigter Ring. Verschiedene Konnektivität = Konstitutionsisomere (Strukturisomere). Enantiomere und Diastereomere sind Stereoisomere (gleiche Konnektivität, verschiedene Raumanordnung). cis/trans-Isomerie ist ein Spezialfall von Diastereomerie bei Doppelbindungen oder Ringen.",
          hints: [
            "Konstitutionsisomere unterscheiden sich in der Reihenfolge der verbundenen Atome — vergleiche die Bindungspartner.",
            "Stereoisomere haben gleiche Konnektivität. Haben But-1-en und Cyclobutan gleiche Bindungspartner?",
          ],
          difficulty: 2,
          tags: ["konstitutionsisomere", "strukturisomere", "konnektivität"],
        },
        {
          question: "Welches Stereoisomerieverhältnis besteht zwischen L-Alanin und D-Alanin?",
          options: [
            "Konstitutionsisomere",
            "Diastereomere",
            "Enantiomere",
            "cis/trans-Isomere",
            "Mesomere",
          ],
          correctIndex: 2,
          explanation:
            "L-Alanin und D-Alanin sind Enantiomere: Sie haben identische Summenformel (C₃H₇NO₂) und gleiche Konnektivität (je -NH₂, -COOH, -CH₃ und -H am α-C), unterscheiden sich aber in der räumlichen Anordnung (das α-C-Atom ist chiral). Sie verhalten sich wie Bild und Spiegelbild, sind nicht superponierbar. L-Alanin dreht polarisiertes Licht anders als D-Alanin. Im menschlichen Körper kommen ausschließlich L-Aminosäuren in Proteinen vor; D-Aminosäuren treten in Bakterienzellwänden auf.",
          hints: [
            "L- und D-Aminosäuren: was unterscheidet sie strukturell, wenn sie gleiche Summenformel haben?",
            "Spiegelbildisomere, die nicht deckbar sind, heißen...",
          ],
          difficulty: 2,
          tags: ["enantiomere", "l-aminosäuren", "optische-aktivität"],
        },
        {
          question: "Welche der folgenden Aussagen über ein racemisches Gemisch ist korrekt?",
          options: [
            "Ein Racemat besteht aus einem Konstitutionsisomeren-Gemisch",
            "Ein Racemat dreht polarisiertes Licht stark nach rechts",
            "Ein Racemat ist ein 1:1-Gemisch aus R- und S-Enantiomeren und ist optisch inaktiv",
            "Ein Racemat hat immer andere physikalische Eigenschaften als die reinen Enantiomere",
            "Ein Racemat enthält nur meso-Verbindungen",
          ],
          correctIndex: 2,
          explanation:
            "Ein racemisches Gemisch (Racemat) enthält gleiche Mengen (1:1) des R- und S-Enantiomers einer chiralen Verbindung. Da beide Enantiomere polarisiertes Licht in entgegengesetzte Richtungen und im gleichen Ausmaß drehen, heben sich die Drehungen gegenseitig auf — das Racemat ist optisch inaktiv (Drehwert = 0). Das erklärt, warum chemisch synthetisierte chirale Verbindungen oft als Racemate anfallen (keine bevorzugte Reaktionsrichtung), während biologische Systeme stereoselektiv nur ein Enantiomer produzieren.",
          hints: [
            "'Racemat' kommt von 'Traubensäure' (Racema = Traube), die als Gemisch gefunden wurde.",
            "Was passiert mit der optischen Drehung, wenn man gleiche Mengen (+) und (−) mischt?",
          ],
          difficulty: 2,
          tags: ["racemat", "optisch-inaktiv", "r-s-enantiomere"],
        },
        {
          question:
            "Warum können cis- und trans-2-Buten nicht ineinander umgewandelt werden, ohne Bindungen zu brechen?",
          options: [
            "Weil ihre Molekulargewichte unterschiedlich sind",
            "Weil die C=C-Doppelbindung eine π-Bindung enthält, die freie Rotation verhindert",
            "Weil cis-Isomere grundsätzlich stabiler als trans-Isomere sind",
            "Weil die σ-Bindung in der Doppelbindung zu stark ist",
            "Weil beide Moleküle verschiedene Summenformeln haben",
          ],
          correctIndex: 1,
          explanation:
            "Die C=C-Doppelbindung besteht aus einer σ-Bindung (Rotationsachse) und einer π-Bindung (seitliche Überlappung der p-Orbitale). Die π-Bindung kann nur bestehen, wenn die beiden p-Orbitale parallel ausgerichtet sind — eine freie Rotation um die C-C-Achse würde die p-Orbital-Überlappung und damit die π-Bindung zerstören. Das bedeutet: cis- und trans-Isomere sind durch eine Rotationsbarriere getrennt (Bindungsbruch nötig). Bei Einfachbindungen (σ) ist freie Rotation möglich → keine cis/trans-Isomerie.",
          hints: [
            "Die π-Bindung in der Doppelbindung ist eine seitliche p-Orbital-Überlappung. Was passiert bei Rotation?",
            "Vergleiche: σ-Bindung erlaubt Rotation, π-Bindung nicht — warum?",
          ],
          difficulty: 3,
          tags: ["cis-trans-isomerie", "pi-bindung", "rotationsbarriere"],
        },
        {
          question: "Ein Molekül mit zwei Chiralitätszentren hat wie viele maximale Stereoisomere?",
          options: ["2", "4", "6", "8", "1"],
          correctIndex: 1,
          explanation:
            "Die 2ⁿ-Regel gilt für die maximale Anzahl von Stereoisomeren, wobei n die Anzahl der Chiralitätszentren ist. Bei n=2: 2² = 4 maximale Stereoisomere. Bei zwei Chiralitätszentren gibt es die Konfigurationen (R,R), (S,S), (R,S) und (S,R). (R,R) und (S,S) sind Enantiomere; (R,S) und (S,R) sind Enantiomere; aber (R,R) und (R,S) sind Diastereomere. Sonderfall: Wenn die Verbindung eine innere Spiegelebene hat, ist (R,S) = (S,R) (meso-Form) → dann nur 3 Stereoisomere statt 4.",
          hints: [
            "Mit jedem neuen Chiralitätszentrum verdoppelt sich die mögliche Anzahl der Stereoisomere.",
            "2ⁿ: n = Anzahl der Chiralitätszentren.",
          ],
          difficulty: 3,
          tags: ["stereoisomere", "2-hoch-n-regel", "diastereomere"],
        },
        {
          question:
            "Welches Arzneimittel wurde als Racemat vermarktet, wobei ein Enantiomer sedierend und das andere teratogen wirkt?",
          options: ["Ibuprofen", "Aspirin", "Thalidomid", "L-Dopa", "Penicillin"],
          correctIndex: 2,
          explanation:
            "Thalidomid (Handelsname Contergan) wurde in den 1950er/60er Jahren als Racemat gegen Schlaflosigkeit und Schwangerschaftserbrechen eingesetzt. Das R-Enantiomer besitzt sedierende/hypnotische Wirkung. Das S-Enantiomer ist stark teratogen und verursacht bei der Embryonalentwicklung schwere Fehlbildungen der Gliedmaßen (Phokomelie). Das Desaster führte zu über 10.000 geschädigten Kindern und revolutionierte die Arzneimittelzulassung. Wichtig: Racemisierung im Körper macht selbst das 'sichere' R-Enantiomer allein nicht verwendbar.",
          hints: [
            "Dieses Mittel führte Ende der 1950er/Anfang 1960er zu einem der größten Arzneimittelskandale.",
            "Der Handelsname war Contergan. Welche Substanz verbirgt sich dahinter?",
          ],
          difficulty: 1,
          tags: ["thalidomid", "teratogenität", "racemat-klinik"],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 03 — Funktionelle Gruppen der Organik
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-03",
      title: "Funktionelle Gruppen der Organik",
      content: `## Alkohole (−OH, Hydroxylgruppe)

Sobald man in einem Kohlenwasserstoff ein Wasserstoffatom durch eine Hydroxylgruppe (−OH) ersetzt, entsteht ein Alkohol — und die Eigenschaften des Moleküls ändern sich grundlegend. Die polare OH-Gruppe ermöglicht Wasserstoffbrückenbindungen, erhöht die Löslichkeit in Wasser und steigert den Siedepunkt im Vergleich zum entsprechenden Alkan beträchtlich.

Alkohole werden nach der Anzahl der am Hydroxyl-C gebundenen weiteren Kohlenstoffatome eingeteilt: **Primäre Alkohole** (−CH₂−OH, ein C-Nachbar), **sekundäre Alkohole** (−CH(OH)−, zwei C-Nachbarn) und **tertiäre Alkohole** (−C(OH)<, drei C-Nachbarn). Diese Klassifikation ist für die Reaktivität entscheidend, denn sie bestimmt die **Oxidationsreihe** — eines der zentralsten Konzepte für den MedAT. Ein primärer Alkohol lässt sich zunächst zum **Aldehyd** (−CHO) und dann weiter zur **Carbonsäure** (−COOH) oxidieren. Ein sekundärer Alkohol wird dagegen zum **Keton** (C=O) oxidiert, das ohne Spaltung einer C-C-Bindung nicht weiter oxidiert werden kann. Tertiäre Alkohole sind unter Standardbedingungen gar nicht oxidierbar.

Dieses Prinzip findet sich unmittelbar in der Biochemie wieder: In der Leber wird Ethanol durch die Alkoholdehydrogenase (ADH) zum Acetaldehyd oxidiert (primärer Alkohol → Aldehyd), und die Aldehyddehydrogenase (ALDH) überführt diesen anschließend in Essigsäure (Acetat) — die klassische zweistufige Oxidationsreihe.

Unter den medizinisch relevanten Alkoholen verdient **Methanol** (CH₃OH) besondere Aufmerksamkeit: Es wird ebenfalls durch ADH und ALDH metabolisiert, aber die entstehenden Produkte — Formaldehyd und Ameisensäure — sind hochgiftig und können zur Erblindung (Retinaschädigung) und zum Tod führen. **Glycerin** (Propan-1,2,3-triol) ist ein dreiwertiger Alkohol und Rückgrat der Triglyceride.

Neben der Oxidation zeigen Alkohole weitere wichtige Reaktionen: Unter Einwirkung von konzentrierter Schwefelsäure und Wärme kommt es zur **Dehydratisierung** — entweder intramolekular zum Alken (Eliminierung) oder intermolekular zum Ether (Kondensation). Die **Veresterung** mit Carbonsäuren und die **nucleophile Substitution** zum Alkylhalogenid erweitern das Reaktionsspektrum.

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
            "Carbonylgruppe (C=O) am Kettenende",
            "Carboxylgruppe (-COOH)",
            "Hydroxylgruppe (-OH) am C-Atom",
            "Aminogruppe (-NH₂)",
            "Estergruppe (-COO-)",
          ],
          correctIndex: 2,
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
          options: ["Propanol", "Aceton", "Acetaldehyd (Ethanal)", "Formaldehyd", "Milchsäure"],
          correctIndex: 2,
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
            "Weil der Stickstoff ein freies Elektronenpaar hat, das Protonen aufnehmen kann",
            "Weil sie eine -OH-Gruppe enthalten",
            "Weil sie in Wasser dissoziieren wie starke Basen",
            "Weil ihre Kohlenstoffkette unpolar ist",
          ],
          correctIndex: 1,
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
          options: ["Ester", "Amine", "Ketone", "Carbonsäuren", "Aldehyde"],
          correctIndex: 3,
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
            "Aminosäuren; entstehen bei hohem Proteinkonsum",
            "Glucose-Abkömmlinge; entstehen nach Mahlzeiten",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; entstehen bei Glucose-Mangel (Fasten, Diabetes)",
            "Fettsäuren; entstehen bei Fettreicher Ernährung",
            "Triglyceride; entstehen bei hohem Insulinspiegel",
          ],
          correctIndex: 2,
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
            "Paracetamol (Amid)",
            "Aspirin (Acetylsalicylsäure)",
            "Penicillin (β-Lactam)",
            "Metformin (Guanidin-Derivat)",
          ],
          correctIndex: 2,
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
    },

    // ─────────────────────────────────────────────────────────────────
    // UK 04 — Aromate und biologisch relevante organische Verbindungen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ch-12-04",
      title: "Aromate und biologisch relevante organische Verbindungen",
      content: `## Benzol und Aromatizität

Nach den gesättigten und ungesättigten Kohlenwasserstoffen bilden die Aromaten eine dritte, ganz eigene Substanzklasse. Ihr Prototyp ist **Benzol** (C₆H₆), eine ringförmige, vollständig planare Verbindung, in der sechs π-Elektronen über den gesamten Ring delokalisiert sind. Diese Delokalisierung verleiht Benzol eine außergewöhnliche thermodynamische Stabilität — die sogenannte Mesomerie- oder Resonanzenergie beträgt etwa 150 kJ/mol.

Ob eine cyclische Verbindung aromatisch ist, beantwortet die **Hückel-Regel**: Voraussetzung sind ein planarer Ring, vollständige Konjugation und genau 4n+2 π-Elektronen (mit n = 0, 1, 2, ...). Für Benzol ergibt sich mit n = 1 die Zahl 6 — die sechs p-Orbitale der sp²-hybridisierten Kohlenstoffatome überlappen seitlich zu einem durchgehenden π-System oberhalb und unterhalb der Ringebene. Alle C-C-Bindungen sind mit 139 pm gleich lang, was zwischen einer reinen Einfach- (154 pm) und einer Doppelbindung (134 pm) liegt.

## Reaktionen der Aromate: Elektrophile aromatische Substitution (EAS)

Die besondere Stabilität des aromatischen π-Systems hat eine weitreichende Konsequenz für die Reaktivität: Aromaten bevorzugen **Substitutionsreaktionen**, nicht Additionsreaktionen, weil eine Addition das aromatische System zerstören und die wertvolle Resonanzenergie aufheben würde.

Im Mechanismus der elektrophilen aromatischen Substitution (EAS) greift zunächst ein Elektrophil (E⁺) das elektronenreiche π-System an und bildet ein Areniumion (Wheland-Komplex, Meisenheimer-Komplex). In diesem Übergangszustand ist die Aromatizität vorübergehend aufgehoben. Durch Abspaltung eines Protons wird der aromatische Zustand wiederhergestellt — ein H-Atom ist durch das Elektrophil ersetzt worden, ohne dass die Gesamtstabilität verloren geht. Die wichtigsten EAS-Reaktionen sind die **Nitrierung** (E⁺ = NO₂⁺, Nitroniumion, aus HNO₃/H₂SO₄), die **Sulfonierung** (E⁺ = SO₃), die **Halogenierung** (benötigt eine Lewis-Säure als Katalysator wie FeCl₃) und die **Friedel-Crafts-Alkylierung** (R-Cl mit AlCl₃).

## Heteroaromaten — Stickstoffhaltige Ringsysteme

Enthält der aromatische Ring neben Kohlenstoff auch Heteroatome wie Stickstoff, Sauerstoff oder Schwefel, spricht man von **Heteroaromaten**. Sie sind in der Biochemie allgegenwärtig. **Pyridin** (6-Ring mit einem N) ist das Stickstoff-Analogon des Benzols und findet sich als Grundgerüst in NAD⁺/NADH und Vitamin B₃ (Niacin). Das freie Elektronenpaar des Pyridin-Stickstoffs steht senkrecht zum π-System und verleiht dem Molekül basische Eigenschaften. Im Gegensatz dazu ist **Pyrrol** (5-Ring mit einem N) nicht basisch, weil sein Stickstoff-Elektronenpaar in das π-System einbezogen ist und so die für Aromatizität nötigen 6 π-Elektronen vervollständigt. Vier Pyrrolringe bilden das Grundgerüst des **Porphyrins**, das als Häm in Hämoglobin und als Chlorophyll in Pflanzen zentrale biologische Funktionen erfüllt.

**Imidazol** (5-Ring mit zwei N) vereint beide Typen: einen pyridin-artigen (basischen) und einen pyrrol-artigen Stickstoff. Es bildet die Seitenkette der Aminosäure Histidin, deren pKₐ von etwa 6 eine Pufferfunktion bei physiologischem pH ermöglicht. Die beiden Nukleinsäure-Basenklassen leiten sich ebenfalls von Heteroaromaten ab: **Purine** (Adenin, Guanin) bestehen aus einem kondensierten Imidazol-Pyrimidin-Ringsystem, **Pyrimidine** (Cytosin, Thymin, Uracil) aus einem Sechsring mit zwei Stickstoffatomen.

Substituenten am Benzolring beeinflussen bei der EAS die Position der nächsten Substitution: Elektronenschiebende Gruppen (−OH, −NH₂, −Alkyl) aktivieren den Ring und dirigieren in die **ortho/para**-Position, elektronenziehende Gruppen (−NO₂, −COOH, −SO₃H) desaktivieren und dirigieren in die **meta**-Position. Halogene stellen einen Sonderfall dar: Sie desaktivieren den Ring (−I-Effekt), dirigieren aber ortho/para (+M-Effekt überwiegt bei der Richtungslenkung). Unter den polycyclischen aromatischen Kohlenwasserstoffen (PAK) ist **Benzo[a]pyren** (5 kondensierte Ringe, im Tabakrauch) ein potentes Karzinogen — es wird durch CYP450-Enzyme zu einem Diolepoxid aktiviert, das kovalent an die DNA bindet und Mutationen auslöst.

## Aminosäuren — Struktur und Eigenschaften

Die Aminosäuren sind die Brücke zwischen organischer Chemie und Biochemie. Alle 20 proteinogenen Aminosäuren teilen einen gemeinsamen Grundbauplan: Am α-Kohlenstoffatom hängen eine Aminogruppe (−NH₂), eine Carboxylgruppe (−COOH), ein Wasserstoffatom und eine variable Seitenkette (R-Gruppe). **Proteine bestehen aus Aminosäure-Bausteinen** — nicht aus Nucleotiden, Zuckern oder Fettsäuren. Das α-C-Atom ist bei allen Aminosäuren chiral, mit Ausnahme von Glycin (R = H).

Die 20 proteinogenen Aminosäuren werden nach der Polarität ihrer Seitenkette klassifiziert: unpolare aliphatische (Glycin, Alanin, Valin, Leucin, Isoleucin, Prolin, Methionin), unpolare aromatische (Phenylalanin, Tyrosin, Tryptophan), polare ungeladene (Serin, Threonin, Cystein, Asparagin, Glutamin), positiv geladene basische (Lysin, Arginin, Histidin) und negativ geladene saure (Aspartat, Glutamat). Neun dieser Aminosäuren sind **essentiell** und müssen mit der Nahrung aufgenommen werden: Phe, Val, Thr, Trp, Ile, Met, His, Leu, Lys (Eselsbrücke: **PVT TIM HaLL**).

Bei physiologischem pH liegt jede Aminosäure als **Zwitterion** vor — die Aminogruppe ist protoniert (−NH₃⁺), die Carboxylgruppe deprotoniert (−COO⁻). Am isoelektrischen Punkt (pI) beträgt die Nettoladung null.

## Nukleotide und Nukleinsäuren

Nukleotide sind die Monomere der DNA und RNA. Jedes besteht aus einer Stickstoffbase, einem Pentosezucker (Desoxyribose in DNA, Ribose in RNA) und einer Phosphatgruppe. Die Purinbasen Adenin (A) und Guanin (G) besitzen einen Doppelring, die Pyrimidinbasen Cytosin (C), Thymin (T, nur DNA) und Uracil (U, nur RNA) einen Einzelring. Die **Chargaff-Regeln** beschreiben die quantitativen Verhältnisse in doppelsträngiger DNA: A = T (verbunden durch 2 Wasserstoffbrücken), G ≡ C (3 Wasserstoffbrücken), und daraus folgt A + G = C + T. **ATP** (Adenosintriphosphat) dient als universeller Energieträger — die Spaltung der Phosphoanhydridbindung (ATP → ADP + Pᵢ) setzt etwa 30 kJ/mol frei.

## Purinstoffwechsel und Gicht

Der Abbau der Purinbasen Adenin und Guanin führt über Hypoxanthin und Xanthin schließlich zur **Harnsäure** (Urat), dem Endprodukt des Purinstoffwechsels beim Menschen. Anders als die meisten Säugetiere besitzt der Mensch keine Uricase und kann Harnsäure nicht weiter abbauen. Liegt die Harnsäurekonzentration im Blut über 6,8 mg/dl (Hyperurikämie), können Natriumurat-Kristalle in Gelenken und Nieren ausfallen. Die bevorzugte Erstmanifestation ist das Großzehengrundgelenk (**Podagra**) — eine akute, äußerst schmerzhafte Arthritis. In der Therapie hemmt **Allopurinol** als Substratanalogon die Xanthinoxidase und reduziert so die Harnsäureproduktion; **Colchicin** wirkt beim akuten Gichtanfall, indem es die Neutrophilen-Migration hemmt.

## Aromatische Aminosäuren als Neurotransmitter-Vorläufer

Die aromatischen Aminosäuren Phenylalanin, Tyrosin und Tryptophan sind nicht nur Proteinbausteine, sondern dienen als Ausgangsstoffe für lebenswichtige Signalmoleküle. Phenylalanin wird durch die Phenylalanin-Hydroxylase zu **Tyrosin** hydroxyliert — ein Enzymdefekt führt zur Phenylketonurie (PKU). Aus Tyrosin entsteht über mehrere enzymatische Schritte die **Catecholamin-Kaskade**: Dopa → Dopamin → Noradrenalin → Adrenalin. Tryptophan ist der Vorläufer von **Serotonin** (Stimmungsregulation, Darmperistaltik) und **Melatonin** (Schlaf-Wach-Rhythmus, Zirbeldrüse). Auch die Schilddrüsenhormone T3 und T4 leiten sich von Tyrosin ab und benötigen Iod für ihre Synthese — bei Iodmangel entsteht eine Struma (Kropf). **Histamin** schließlich entsteht durch Decarboxylierung aus Histidin und wirkt als Entzündungsmediator, Magensäuresekretionsförderer und allergischer Botenstoff.

## Peptidbindung und Proteinaufbau

Die **Peptidbindung** (−CO−NH−) verknüpft Aminosäuren zu Ketten. Sie entsteht durch Kondensation zwischen der α-Carboxylgruppe einer Aminosäure und der α-Aminogruppe der nächsten unter Wasserabspaltung. Durch Mesomerie (C=O ↔ C−O⁻/N⁺) besitzt die Peptidbindung partiellen Doppelbindungscharakter, ist **planar** und nicht frei drehbar. Nur die Winkel Φ (um N−Cα) und Ψ (um Cα−C) können variieren und bestimmen damit die dreidimensionale Faltung des Proteins.

Die Strukturhierarchie der Proteine gliedert sich in vier Ebenen: Die **Primärstruktur** ist die lineare Aminosäuresequenz. **Sekundärstrukturelemente** wie α-Helix und β-Faltblatt entstehen durch Wasserstoffbrücken im Rückgrat. Die **Tertiärstruktur** ergibt sich aus der dreidimensionalen Faltung durch hydrophobe Wechselwirkungen, ionische Bindungen, Disulfidbrücken und H-Brücken der Seitenketten. Bei Proteinen aus mehreren Untereinheiten — wie Hämoglobin (α₂β₂) — kommt die **Quartärstruktur** hinzu.

> **Merke:** Aldehyde (–CHO) und Ketone (–CO–) enthalten die Carbonylgruppe C=O. Aldehyde sind leichter oxidierbar als Ketone — sie reagieren positiv mit Fehling- und Tollens-Reagenz (Silberspiegelprobe).

> **Merke:** Die Carbonylgruppe ist polar (δ⁺ am C, δ⁻ am O) und ermöglicht nucleophile Additionen. Glucose liegt in wässriger Lösung als Halbacetal (Ringform) vor — ein Gleichgewicht aus offenkettiger Aldehydform und cyclischer Form.

> **Prüfungstipp:** Die Hückel-Regel (4n+2 π-Elektronen) ist eine beliebte Rechenaufgabe im MedAT. Erlaubte Zahlen: 2, 6, 10, 14 π-Elektronen. Benzol hat 6 (n=1). Cyclooctatetraen hat 8 → nicht aromatisch! Auch die essentiellen Aminosäuren (Eselsbrücke: PVT TIM HaLL) und die Catecholamin-Kaskade (Tyr → DOPA → Dopamin → Noradrenalin → Adrenalin) werden regelmäßig geprüft.`,
      stichworte: [
        "Benzol",
        "Aromatizität",
        "Hückel-Regel",
        "elektrophile Substitution",
        "Heteroaromaten",
        "Pyridin",
        "Purin",
        "Pyrimidin",
        "Aminosäuren",
        "Peptidbindung",
        "Neurotransmitter",
        "Proteinstruktur",
      ],
      lernziele: [
        "Die Hückel-Regel (4n+2 π-Elektronen) erklären und Benzol als aromatische Verbindung identifizieren.",
        "Die elektrophile aromatische Substitution (Nitrierung, Halogenierung) im Mechanismus erklären.",
        "Den Aufbau der 20 proteinogenen Aminosäuren (α-C, -NH₂, -COOH, -R) und das Zwitterion-Konzept beschreiben.",
        "Die Bausteine eines Nukleotids (Base, Zucker, Phosphat) benennen und Purine von Pyrimidinen unterscheiden.",
        "Den Purinstoffwechsel und die Entstehung von Gicht (Harnsäureablagerungen) erläutern.",
      ],
      sections: [
        {
          heading: "Hückel-Regel und Benzol-Struktur",
          text: "Benzol (C₆H₆) erfüllt alle Bedingungen der Aromatizität: (1) planarer Ring, (2) vollständige Konjugation, (3) 6 π-Elektronen (n=1, 4·1+2=6). Die sechs p-Orbitale der sp²-hybridisierten C-Atome überlappen seitlich zu einem durchgehenden π-System oberhalb und unterhalb der Ringebene. Alle C-C-Bindungen sind gleichlang (139 pm). Die Resonanzenergie (Mesomerie-Energie) von ca. 150 kJ/mol erklärt, warum Benzol Additionsreaktionen meidet — Addition würde das aromatische System zerstören. Benzol reagiert daher bevorzugt durch elektrophile Substitution (EAS), bei der das π-System erhalten bleibt.",
          merksatz:
            "Hückel: 4n+2 π-Elektronen → aromatisch. Benzol: 6 π-Elektronen (n=1). Aromatisch = planar, konjugiert, stabil. EAS bevorzugt (nicht Addition!), um Aromatizität zu erhalten.",
        },
        {
          heading: "Aminosäuren — Struktur und Zwitterion",
          text: "Alle 20 proteinogenen Aminosäuren haben dasselbe Grundgerüst am α-C: -NH₂, -COOH, -H und eine variable R-Gruppe (Seitenkette). Das α-C ist sp³-hybridisiert und bei allen Aminosäuren (außer Glycin) chiral. Im physiologischen pH-Bereich liegt die Aminosäure als Zwitterion vor: die Aminogruppe ist protoniert (-NH₃⁺, positiv) und die Carboxylgruppe deprotoniert (-COO⁻, negativ) → Nettoladung 0 am isoelektrischen Punkt (pI). Die Seitenkette R bestimmt die besonderen Eigenschaften: hydrophob/polar/geladen. Essentielle Aminosäuren (9 beim Menschen) müssen mit der Nahrung zugeführt werden, da der Körper sie nicht selbst synthetisieren kann.",
          merksatz:
            "Aminosäure = α-C mit -NH₂, -COOH, -H, -R. Alle L-konfiguriert in Proteinen. Zwitterion bei pH=pI: -NH₃⁺ und -COO⁻. Essenziell: 9 AA müssen über Nahrung aufgenommen werden.",
        },
        {
          heading: "Purinstoffwechsel — Harnsäure und Gicht",
          text: "Purinbasen (Adenin, Guanin) aus dem Nukleotidabbau werden zu Hypoxanthin und Xanthin abgebaut. Das Enzym Xanthinoxidase oxidiert Xanthin zu Harnsäure (Urat). Beim Menschen ist Harnsäure das Endprodukt (fehlende Uricase). Harnsäure hat geringe Wasserlöslichkeit; bei Hyperurikämie (> 6,8 mg/dl) präzipitieren Natriumurat-Kristalle in Gelenken (Gicht, Podagra) und Nieren (Urolithiasis). Allopurinol (Xanthinoxidase-Hemmer) verhindert die Harnsäureproduktion. Der Xanthin-Inhibitor Febuxostat ist eine neuere Alternative. Diät: purinreiche Nahrung meiden (Fleisch, Innereien, Bier).",
          merksatz:
            "Purine → Xanthin → Harnsäure (Xanthinoxidase). Hyperurikämie → Gicht (Urat-Kristalle in Gelenken). Allopurinol hemmt Xanthinoxidase. Podagra = Gicht im Großzehengrundgelenk.",
        },
      ],

      merksätze: [
        "Hückel-Regel: 4n+2 π-Elektronen → aromatisch. Benzol: n=1, 6 π-Elektronen.",
        "Aromate: bevorzugen elektrophile aromatische Substitution (EAS), nicht Addition.",
        "EAS: Elektrophil greift π-System an, H⁺ wird abgespalten → Aromatizität bleibt erhalten.",
        "Nitrierung: Benzol + NO₂⁺ (aus HNO₃/H₂SO₄) → Nitrobenzol; Ausgangsstoff für Anilin/Arzneimittel.",
        "Aminosäure-Grundbaustein: α-C mit -NH₂, -COOH, -H, -R. Außer Glycin alle chiral.",
        "Proteinogene AA: alle L-Konfiguration. 9 essenzielle AA müssen mit der Nahrung zugeführt werden.",
        "Nukleotide = Base + Pentose + Phosphat. Purine: Adenin, Guanin (Doppelring). Pyrimidine: Cytosin, Thymin, Uracil.",
        "Chargaff: A=T (2 H-Brücken), G≡C (3 H-Brücken) in der DNA.",
        "Purinstoffwechsel → Harnsäure → Gicht bei Hyperurikämie. Allopurinol: Xanthinoxidase-Hemmer.",
        "Aromatische AA (Phe, Tyr, Trp) als Vorläufer von Catecholaminen, Serotonin, Melatonin, Schilddrüsenhormonen.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was versteht man unter elektrophiler aromatischer Substitution? Erklären Sie den Mechanismus am Beispiel der Nitrierung von Benzol und begründen Sie, warum Aromate bevorzugt Substitution statt Addition eingehen.",
        answer:
          "Die elektrophile aromatische Substitution (EAS) ist die charakteristische Reaktion aromatischer Verbindungen. Bei dieser Reaktion wird ein Wasserstoffatom des Aromaten durch ein Elektrophil (elektronenarme Spezies) ersetzt, wobei das aromatische π-System erhalten bleibt. Der Mechanismus der Nitrierung von Benzol verläuft in zwei Schritten: Im ersten Schritt wird durch Reaktion von konzentrierter Salpetersäure (HNO₃) mit konzentrierter Schwefelsäure (H₂SO₄) das Nitroniumion (NO₂⁺) als reaktives Elektrophil gebildet: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Im zweiten Schritt greift das Nitroniumion (NO₂⁺) das π-Elektronensystem des Benzols nucleophil an. Dabei entsteht ein kationischer Übergangszustand (Wheland-Intermediat oder Areniumion), in dem die aromatische Stabilität kurzzeitig verloren geht — der betroffene Kohlenstoff ist sp³-hybridisiert. Im dritten Schritt wird ein Proton (H⁺) abgespalten; die Aromatizität wird wiederhergestellt, das Proton wird von HSO₄⁻ aufgenommen. Produkt: Nitrobenzol. Aromate bevorzugen Substitution statt Addition aus thermodynamischen Gründen: Die Mesomerie-Energie (Resonanzenergie) des aromatischen Systems beträgt ca. 150 kJ/mol. Eine Additionsreaktion würde diese Resonanzenergie zerstören und ein nicht-aromatisches, energetisch ungünstigeres Produkt liefern. Die Substitution hingegen erhält das aromatische π-System — die 'Treibkraft' ist die Wiederherstellung der Aromatizität durch Protonenabspaltung. Dieses Prinzip erklärt auch die biologische Inertheit von aromatischen Ringen in Biomolekülen.",
      },
      klinischerBezug:
        "Purinstoffwechsel: Harnsäure (Gicht, Hyperurikämie). Aromatische AA: Phe→PKU bei Enzymdefekt; Tyr→Catecholamine (Dopamin, Adrenalin); Trp→Serotonin/Melatonin. Allopurinol hemmt Xanthinoxidase.",
      selfTest: [
        {
          question: "Welche Aussage über Benzol ist korrekt?",
          options: [
            "Benzol reagiert bevorzugt durch Additionsreaktionen wie Alkene",
            "Benzol hat drei lokalisierte Doppelbindungen und drei Einfachbindungen alternierend",
            "Benzol hat 6 delokalisierte π-Elektronen und ist nach der Hückel-Regel aromatisch",
            "Benzol ist nicht planar und daher nicht aromatisch",
            "Benzol hat eine Formel C₆H₈",
          ],
          correctIndex: 2,
          explanation:
            "Benzol (C₆H₆) ist die klassische aromatische Verbindung. Die sechs sp²-hybridisierten C-Atome bilden einen planaren hexagonalen Ring. Jedes C-Atom hat ein p-Orbital senkrecht zur Ringmembran; diese sechs p-Orbitale überlappen zu einem delokalisierten π-System mit 6 π-Elektronen. Die Hückel-Regel (4n+2 mit n=1 → 6 π-Elektronen) ist erfüllt. Alle C-C-Bindungen sind gleichlang (139 pm). Benzol reagiert bevorzugt durch EAS (Substitution), nicht durch Addition — um die Aromatizität und die damit verbundene Resonanzenergie zu erhalten.",
          hints: [
            "Hückel-Regel: 4n+2 π-Elektronen. Für n=1: wie viele π-Elektronen?",
            "Aromatisch = planar, konjugiert, 4n+2 π-Elektronen. Was ist charakteristisch?",
          ],
          difficulty: 1,
          tags: ["benzol", "hückel-regel", "aromatizität"],
        },
        {
          question: "Was unterscheidet Purinbasen von Pyrimidinbasen?",
          options: [
            "Purine haben eine OH-Gruppe, Pyrimidine nicht",
            "Purine sind zweiringaromatische Basen, Pyrimidine sind einringaromatisch",
            "Purine kommen nur in RNA vor, Pyrimidine nur in DNA",
            "Purine sind positiv geladen, Pyrimidine negativ",
            "Purine haben 4n+2 π-Elektronen, Pyrimidine nicht",
          ],
          correctIndex: 1,
          explanation:
            "Stickstoffbasen der Nukleinsäuren werden nach ihrer Ringstruktur unterschieden: Purine bestehen aus einem Pyrimidin-Ring und einem Imidazol-Ring (Doppelring = Bicyclus, 9 Atome). Purine: Adenin (A) und Guanin (G) — kommen in DNA und RNA vor. Pyrimidine haben nur einen Sechsring (6 Atome, Monocyclus). Pyrimidine: Cytosin (C, in DNA und RNA), Thymin (T, nur DNA), Uracil (U, nur RNA). Eselsbrücke: 'CUT the Pyrimidine' (Cytosin, Uracil, Thymin sind Pyrimidine).",
          hints: [
            "'Pyr-' kommt von Pyrexis/Pyrimidin (ein Ring). 'Pur-' (Purin) — wie viele Ringe?",
            "Denke an die Größe: Purine sind größer (zwei Ringe), Pyrimidine kleiner (ein Ring).",
          ],
          difficulty: 2,
          tags: ["purine", "pyrimidine", "nukleinsäuren"],
        },
        {
          question: "Welche Aussage zur Chargaff-Regel ist korrekt?",
          options: [
            "In der DNA ist A = G und C = T (gleiche Mengen gleicher Ringtypen)",
            "In der DNA ist A = T und G = C (komplementäre Basenpaarung)",
            "In der RNA ist A = T, weil RNA einzelsträngig ist",
            "Purine und Pyrimidine kommen in der DNA im Verhältnis 2:1 vor",
            "Chargaff-Regel gilt nur für RNA, nicht für DNA",
          ],
          correctIndex: 1,
          explanation:
            "Chargaff stellte fest, dass in doppelsträngiger DNA die Menge von Adenin immer gleich der Menge von Thymin ist (A = T), und die Menge von Guanin gleich der von Cytosin (G = C). Dies ergibt sich aus der Watson-Crick-Basenpaarung: A-T-Paar (2 Wasserstoffbrücken), G-C-Paar (3 Wasserstoffbrücken). Folgerung: Purine (A+G) = Pyrimidine (C+T). Diese Regel gilt für doppelsträngige DNA; für einzelsträngige RNA oder Einzelstrang-DNA nicht.",
          hints: [
            "Chargaff: denke an komplementäre Basenpaarung in der Doppelhelix.",
            "A paart mit T (2 H-Brücken), G paart mit C (3 H-Brücken). Was folgt daraus quantitativ?",
          ],
          difficulty: 2,
          tags: ["chargaff-regel", "basenpaarung", "dna-doppelhelix"],
        },
        {
          question:
            "Welche Erkrankung entsteht durch Ablagerung von Natriumurat-Kristallen in Gelenken?",
          options: [
            "Diabetes mellitus",
            "Phenylketonurie",
            "Gicht (Arthritis urica)",
            "Alkaptonurie",
            "Homocystinurie",
          ],
          correctIndex: 2,
          explanation:
            "Gicht (Arthritis urica, Hyperurikämie) ist eine Stoffwechselerkrankung des Purinstoffwechsels. Purine werden im Menschen zu Harnsäure abgebaut (letzter Schritt: Xanthinoxidase). Bei Überproduktion oder verminderter renaler Ausscheidung akkumuliert Harnsäure im Blut. Ab einer Konzentration von ca. 6,8 mg/dl ist die Löslichkeitsgrenze überschritten, Natriumurat kristallisiert aus und lagert sich in Gelenken (bevorzugt Großzehengrundgelenk = Podagra, aber auch Finger, Knie) und in der Niere (Nierensteine) ab. Die Kristalle lösen eine Entzündungsreaktion aus (akuter Gichtanfall mit starken Schmerzen). Therapie: Allopurinol (Xanthinoxidase-Hemmer).",
          hints: [
            "Harnsäure ist das Endprodukt des Purinstoffwechsels. Was passiert, wenn sie zu hoch konzentriert ist?",
            "Natriumurat-Kristalle fallen aus und lagern sich ab. Wo verursacht das Schmerzen?",
          ],
          difficulty: 1,
          tags: ["gicht", "harnsäure", "natriumurat"],
        },
        {
          question:
            "Welche Aminosäure dient als Vorläufer für Dopamin, Adrenalin und Noradrenalin (Catecholamine)?",
          options: ["Tryptophan", "Histidin", "Tyrosin", "Glycin", "Phenylalanin (direkt)"],
          correctIndex: 2,
          explanation:
            "Die Catecholaminbiosynthese beginnt mit Tyrosin (einer aromatischen Aminosäure). Der Weg: Tyrosin → L-DOPA (durch Tyrosinhydroxylase, dem geschwindigkeitsbestimmenden Schritt) → Dopamin (durch DOPA-Decarboxylase) → Noradrenalin (durch Dopamin-β-Hydroxylase) → Adrenalin (durch PNMT). Phenylalanin ist der Vorläufer von Tyrosin (Phenylalanin-Hydroxylase); bei Phenylketonurie (PKU) ist diese Hydroxylase defekt. Tryptophan ist Vorläufer von Serotonin und Melatonin. Histidin ist Vorläufer von Histamin.",
          hints: [
            "Catecholamine haben einen Catechol-Ring (Benzol mit zwei benachbarten OH-Gruppen). Welche AA hat bereits den Benzolring?",
            "L-DOPA (bei Parkinson eingesetzt) kommt von welcher Aminosäure?",
          ],
          difficulty: 2,
          tags: ["tyrosin", "catecholamine", "dopamin-biosynthese"],
        },
        {
          question:
            "Ein Patient hat erhöhte Harnsäurewerte (Hyperurikämie). Welcher Mechanismus liegt bei der Therapie mit Allopurinol zugrunde?",
          options: [
            "Allopurinol erhöht die renale Ausscheidung von Harnsäure",
            "Allopurinol hemmt die Xanthinoxidase und reduziert so die Harnsäureproduktion",
            "Allopurinol löst Urat-Kristalle in den Gelenken auf",
            "Allopurinol blockiert die Purinaufnahme im Darm",
            "Allopurinol aktiviert die Uricase, die Harnsäure abbaut",
          ],
          correctIndex: 1,
          explanation:
            "Allopurinol ist ein Strukturanalog des Hypoxanthins. Es hemmt kompetitiv die Xanthinoxidase, das Enzym, das Hypoxanthin → Xanthin → Harnsäure katalysiert. Durch Hemmung der Xanthinoxidase wird weniger Harnsäure gebildet; stattdessen akkumulieren Hypoxanthin und Xanthin (die löslicher als Harnsäure sind und leichter renal ausgeschieden werden). Die Harnsäurekonzentration im Blut sinkt. Allopurinol selbst wird durch die Xanthinoxidase zu Oxipurinol metabolisiert, das ebenfalls ein wirksamer Xanthinoxidase-Inhibitor ist. Menschen haben keine Uricase (anders als die meisten anderen Säugetiere), daher ist Harnsäure unser Endprodukt.",
          hints: [
            "Allopurinol ist ein Strukturanalog des Hypoxanthin-Substrats der Xanthinoxidase — was macht ein Substratanalog?",
            "Harnsäure entsteht durch Xanthinoxidase. Wenn man dieses Enzym hemmt...",
          ],
          difficulty: 3,
          tags: ["allopurinol", "xanthinoxidase", "gicht-therapie"],
        },
        {
          question:
            "Welche Verbindung ist nach der Hückel-Regel (4n+2 π-Elektronen) NICHT aromatisch?",
          options: [
            "Benzol (C₆H₆, 6 π-Elektronen)",
            "Cyclooctatetraen (C₈H₈, 8 π-Elektronen)",
            "Naphthalin (C₁₀H₈, 10 π-Elektronen)",
            "Pyrrol (C₄H₄NH, 6 π-Elektronen)",
            "Pyridin (C₅H₅N, 6 π-Elektronen)",
          ],
          correctIndex: 1,
          explanation:
            "Cyclooctatetraen (COT, C₈H₈) hat 8 π-Elektronen. Nach der Hückel-Regel sind 4n+2 π-Elektronen für Aromatizität nötig. Prüfung: 4n+2 = 8 → 4n = 6 → n = 1,5 (kein ganzzahliges n!). Daher ist COT NICHT aromatisch — es ist antiaromatisch (4n π-Elektronen wären sogar destabilisierend). COT ist tatsächlich nicht planar, sondern wannenförmig, um die Antiaromatizität zu vermeiden. Im Gegensatz: Benzol (6, n=1 ✓), Naphthalin (10, n=2 ✓), Pyrrol und Pyridin (beide 6, n=1 ✓).",
          hints: [
            "4n+2 für n=0,1,2,3 gibt: 2, 6, 10, 14 π-Elektronen. Welche Zahl ist nicht dabei?",
            "8 π-Elektronen: ist 8 = 4n+2 für ganzzahliges n lösbar?",
          ],
          difficulty: 3,
          tags: ["hückel-regel", "antiaromatisch", "cyclooctatetraen"],
        },
      ],
    },
    // === from kap13-naturstoffe ===
    {
      id: "ch-13-01",
      title: "Aminosäuren und Proteine",
      content: `## Grundstruktur der Aminosäuren

Aminosäuren sind die molekularen Bausteine, aus denen der Körper sämtliche Proteine zusammensetzt — von Enzymen über Antikörper bis hin zu Strukturproteinen wie Kollagen. Alle 20 proteinogenen Aminosäuren teilen einen einheitlichen Grundbauplan am α-Kohlenstoff: eine **α-Aminogruppe** (–NH₂), eine **α-Carboxylgruppe** (–COOH), ein Wasserstoffatom und eine variable **Seitenkette (R-Gruppe)**, die jeder Aminosäure ihre individuellen Eigenschaften verleiht. Glycin ist die einzige Ausnahme ohne Stereozentrum (R = H), alle anderen 19 liegen im menschlichen Körper ausschließlich als L-Enantiomere vor.

## Klassifikation der Aminosäuren

Die Seitenkette bestimmt, ob eine Aminosäure hydrophob oder hydrophil, geladen oder ungeladen ist — und damit, wo sie sich in einem gefalteten Protein bevorzugt aufhält. **Unpolare hydrophobe Seitenketten** (Alanin, Valin, Leucin, Isoleucin, Phenylalanin, Tryptophan, Methionin, Prolin) finden sich typischerweise im Proteininneren, abgeschirmt vom Wasser. **Polare ungeladene Seitenketten** (Serin, Threonin, Cystein, Tyrosin, Asparagin, Glutamin) können Wasserstoffbrücken ausbilden. Die **sauren Aminosäuren** Asparaginsäure und Glutaminsäure tragen bei physiologischem pH eine negative Ladung, die **basischen** Lysin, Arginin und Histidin eine positive. Besondere Aufmerksamkeit verdienen die **schwefelhaltigen** Aminosäuren Cystein (–SH, kann Disulfidbrücken bilden) und Methionin (–S–CH₃), sowie die drei **aromatischen** Vertreter Phenylalanin, Tyrosin und Tryptophan, die als Vorläufer von Neurotransmittern dienen.

Von den 20 proteinogenen Aminosäuren sind 8 beim Erwachsenen **essentiell** — der Körper kann sie nicht selbst synthetisieren und ist auf die Zufuhr über die Nahrung angewiesen: Isoleucin, Leucin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan und Valin. Histidin ist im Kindesalter zusätzlich essentiell.

## Peptidbindung

Die Verknüpfung zweier Aminosäuren erfolgt über die **Peptidbindung**, eine Amidbindung (–CO–NH–), die durch **Kondensationsreaktion** zwischen der Carboxylgruppe der einen und der Aminogruppe der nächsten Aminosäure unter Abspaltung eines Wassermoleküls entsteht. Die resultierende Bindung hat bemerkenswerte Eigenschaften: Durch Mesomerie zwischen der C=O- und der C–N-Bindung besitzt sie **partiellen Doppelbindungscharakter**, ist daher **planar** (die sechs Atome Cα–C–O–N–H–Cα liegen in einer Ebene) und erlaubt **keine freie Rotation** um die C–N-Achse. Die Synthese im Ribosom erfolgt stets in einer Richtung — vom N-Terminus zum C-Terminus.

## Proteinstruktur

Die räumliche Organisation von Proteinen wird in vier hierarchische Ebenen gegliedert, die aufeinander aufbauen. Die **Primärstruktur** ist die lineare Abfolge der Aminosäuren, festgelegt durch die mRNA-Sequenz. Bereits auf dieser Ebene ist die gesamte Information für die dreidimensionale Faltung enthalten. Die **Sekundärstruktur** beschreibt lokale, regelmäßige Faltungsmuster, die durch Wasserstoffbrücken zwischen den C=O- und N–H-Gruppen des Peptidrückgrats stabilisiert werden: In der **α-Helix** windet sich die Kette schraubenförmig (3,6 Aminosäuren pro Windung, H-Brücke zwischen Aminosäure i und i+4), im **β-Faltblatt** lagern sich gestreckte Peptidketten parallel oder antiparallel nebeneinander.

Die **Tertiärstruktur** ergibt sich aus der gesamten dreidimensionalen Faltung einer Polypeptidkette. Hier wirken vielfältige Kräfte der Seitenketten zusammen: **hydrophobe Wechselwirkungen** (unpolare Reste fliehen ins Proteininnere), **ionische Wechselwirkungen** (Salzbrücken zwischen geladenen Seitenketten), **Wasserstoffbrücken** und **kovalente Disulfidbrücken** zwischen zwei Cysteinen. Die **Quartärstruktur** beschreibt schließlich die räumliche Anordnung mehrerer Polypeptidketten (Untereinheiten) zu einem funktionellen Komplex — das bekannteste Beispiel ist **Hämoglobin** mit seinen vier Untereinheiten (α₂β₂).

## Denaturierung

Wird ein Protein Hitze, extremen pH-Werten, organischen Lösungsmitteln oder Schwermetallionen ausgesetzt, verliert es seine dreidimensionale Struktur — man spricht von **Denaturierung**. Die Primärstruktur (Aminosäuresequenz) bleibt erhalten, aber die Sekundär-, Tertiär- und Quartärstruktur werden zerstört, und damit geht die biologische Funktion verloren. Ein alltägliches Beispiel ist das Kochen eines Eis: Das transparente Eiklar (Albumin) wird irreversibel weiß und fest. In der Medizin nutzt man Denaturierung gezielt zur Sterilisation (Autoklavieren bei 121 °C). Manche Proteine können sich unter geeigneten Bedingungen spontan zurückfalten (**Renaturierung**) — dies zeigte Christian Anfinsen am Beispiel der Ribonuklease und bewies, dass die Aminosäuresequenz allein die dreidimensionale Struktur festlegt.

## Enzymkinetik — Grundprinzipien

Enzyme sind biologische Katalysatoren, die die Aktivierungsenergie einer Reaktion herabsetzen, ohne selbst verbraucht zu werden. Die einfachste Beschreibung liefert die **Michaelis-Menten-Kinetik**: Das Enzym (E) bildet mit dem Substrat (S) einen Enzym-Substrat-Komplex (ES), der zum Produkt (P) umgesetzt wird. Die Reaktionsgeschwindigkeit v nähert sich mit steigender Substratkonzentration einem Maximalwert **Vmax** — dann sind alle Enzymaktiven Zentren besetzt (Sättigung). Die **Michaelis-Konstante Km** ist die Substratkonzentration, bei der v = Vmax/2 gilt, und dient als Maß für die Affinität des Enzyms zum Substrat: Ein niedriger Km bedeutet hohe Affinität.

Enzymhemmung ist ein zentrales pharmakologisches Prinzip: **Kompetitive Inhibitoren** konkurrieren mit dem Substrat um das aktive Zentrum (Km steigt, Vmax bleibt gleich). **Nicht-kompetitive Inhibitoren** binden an einer anderen Stelle (Vmax sinkt, Km bleibt gleich). Viele Arzneimittel — von ACE-Hemmern über Statine bis hin zu Proteaseinhibitoren — wirken als Enzyminhibitoren.

> **Merke:** Proteine bestehen aus Aminosäuren, verbunden durch planare Peptidbindungen. Vier Strukturebenen (Primär bis Quartär) bestimmen die dreidimensionale Form und damit die Funktion. Denaturierung zerstört die Raumstruktur, nicht die Aminosäuresequenz.

> **Prüfungstipp:** MedAT-Klassiker: „Welche Bindung stabilisiert die Sekundärstruktur?" → Wasserstoffbrücken im Peptidrückgrat (nicht Seitenketten!). „Welche Bindung ist kovalent in der Tertiärstruktur?" → Disulfidbrücken (Cys-Cys). Auch die Sichelzellanämie (Glu→Val, Position 6, β-Globin) wird als Paradebeispiel für Primärstruktur-Defekte gefragt.`,
      stichworte: [
        "Aminosäuren",
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
        "Troponin",
      ],
      lernziele: [
        "Den Grundaufbau einer Aminosäure (α-C, Amino-, Carboxylgruppe, R-Gruppe) beschreiben und Aminosäuren nach Polarität und Ladung klassifizieren",
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
        "Alle proteinogenen Aminosäuren (außer Glycin) sind L-konfiguriert und tragen am α-C: –NH₂, –COOH, –H, –R.",
        "Essentielle AS (8 Erwachsene): Ile, Leu, Lys, Met, Phe, Thr, Trp, Val — Histidin zusätzlich für Kinder.",
        "Peptidbindung = Amidbindung; entsteht durch Kondensation (–H₂O); ist planar wegen Mesomerie.",
        "Synthese am Ribosom: N-Terminus → C-Terminus (5'→3' auf mRNA kodiert).",
        "Sekundärstruktur α-Helix: H-Brücken zwischen C=O(n) und N–H(n+4), rechtsgängig.",
        "Disulfidbrücken (Cys–Cys) sind die einzigen kovalenten Bindungen in der Tertiär-/Quartärstruktur (außer Peptidbindungen).",
        "Denaturierung zerstört Sekundär- bis Quartärstruktur, nicht die Primärstruktur.",
        "Sichelzellanämie: Glu6Val in β-Globin → Hämoglobin-S aggregiert bei Desoxigenierung.",
        "PKU: Phenylalanin-Hydroxylase-Defekt → Phe akkumuliert, Tyrosin wird nicht gebildet.",
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
          options: ["Alanin", "Glycin", "Cystein", "Serin", "Valin"],
          correctIndex: 1,
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
            "Die Peptidbindung ist eine Einfachbindung mit großem Raumanspruch",
            "Die Peptidbindung hat partiellen Doppelbindungscharakter durch Mesomerie",
            "Die Peptidbindung ist eine Disulfidbrücke zwischen Cysteinen",
            "Die Peptidbindung enthält ein Metallatom als Rotationshemmung",
            "Die freie Rotation wird ausschließlich durch sterische Hinderung der R-Gruppen verhindert",
          ],
          correctIndex: 1,
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
            "Ionische Wechselwirkungen zwischen geladenen Seitenketten",
            "Intramolekulare Wasserstoffbrücken zwischen C=O(n) und N–H(n+4) im Peptidrückgrat",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Seitenketten",
            "Phosphodiesterbindungen zwischen den Aminosäureresten",
          ],
          correctIndex: 2,
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
            "Primärstruktur: Glu→Val-Austausch an Position 6 der β-Globinkette",
            "Sekundärstruktur: Zerstörung der α-Helix-Segmente",
            "Quartärstruktur: α- und β-Ketten können sich nicht zusammenlagern",
            "Kovalente Modifikation der Häm-Gruppe durch Oxidation",
          ],
          correctIndex: 1,
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
            "Disulfidbrücken zwischen Cysteinen",
            "Peptidbindungen zwischen Aminosäureresten",
            "Die planare Struktur der Peptidbindung",
            "Van-der-Waals-Kräfte im Rückgrat",
          ],
          correctIndex: 1,
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
            "Denaturierung hebt Sekundär- bis Quartärstruktur auf, die Primärstruktur bleibt erhalten",
            "Denaturierung ist immer reversibel durch Wiederherstellung physiologischer Bedingungen",
            "Denaturierung betrifft nur die Quartärstruktur, nicht die Sekundärstruktur",
          ],
          correctIndex: 2,
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
            "Ein 45-jähriger Patient kommt mit typischen Brustschmerzen in die Notaufnahme. Welcher der folgenden Labormarker ist am spezifischsten für einen akuten Myokardinfarkt und steigt frühzeitig an?",
          options: [
            "LDH (Laktatdehydrogenase)",
            "GPT/ALT (Alaninaminotransferase)",
            "Amylase",
            "Troponin T oder Troponin I",
            "Gesamtprotein im Serum",
          ],
          correctIndex: 3,
          explanation:
            "Troponin T und Troponin I sind kardiale Proteine des kontraktilen Apparats der Herzmuskelzellen und sind bei gesunden Personen im Blut kaum nachweisbar. Bei Myokardnekrose werden sie frühzeitig (3–6 h nach Ereignis) freigesetzt und sind für mehrere Tage erhöht. Sie gelten heute als Goldstandard für die Infarktdiagnostik (hohe Sensitivität und Spezifität). LDH ist wenig spezifisch (kommt in vielen Geweben vor). GPT/ALT ist ein Leberwert (hepatozellulärer Schaden). Amylase weist auf Pankreatitis hin.",
          hints: [
            "Welches Protein ist ausschließlich im Herzmuskel in dieser Form vorhanden?",
            "Der gesuchte Marker ist seit den 1990ern der Standard für Herzinfarktdiagnostik und hat CK-MB weitgehend ersetzt.",
          ],
          tags: ["biomarker", "troponin", "herzinfarkt", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-02",
      title: "Kohlenhydrate — Mono-, Di- und Polysaccharide",
      content: `## Monosaccharide — die einfachsten Zucker

Kohlenhydrate gehören neben Lipiden und Proteinen zu den drei Hauptgruppen der Biomoleküle. Ihre allgemeine Summenformel Cₙ(H₂O)ₙ erklärt den historischen Namen „Kohlen-Hydrate", obwohl es sich chemisch nicht um Hydrate des Kohlenstoffs handelt. Die einfachsten Vertreter sind die **Monosaccharide** — Polyhydroxyaldehyde (Aldosen) oder Polyhydroxyketone (Ketosen), die sich nicht weiter hydrolysieren lassen.

Die wichtigste Aldohexose ist **Glucose** (Traubenzucker, Dextrose), die mit einem Blutspiegel von 70–100 mg/dl der zentrale Energieträger des menschlichen Stoffwechsels ist. Jede Körperzelle kann Glucose über die Glykolyse verwerten, und das Gehirn ist im Normalzustand fast ausschließlich auf Glucose als Brennstoff angewiesen. Als Ketohexose spielt **Fructose** (Fruchtzucker) eine Rolle, die vor allem in Obst und Honig vorkommt und in der Leber metabolisiert wird. **Galactose** schließlich ist das C4-Epimer der Glucose und Bestandteil der Lactose (Milchzucker).

## Ringformen und Mutarotation

In wässriger Lösung liegt Glucose überwiegend nicht in der offenkettigen Form vor, sondern bildet durch eine **intramolekulare Halbacetal-Reaktion** eine sechsgliedrige Ringstruktur (Pyranose-Ring): Die Aldehydgruppe am C1 reagiert mit der OH-Gruppe am C5. Dabei entsteht am C1 ein neues Chiralitätszentrum — das **anomere Kohlenstoffatom** — mit zwei möglichen Konfigurationen: **α-D-Glucose** (OH am C1 axial, unterhalb der Ringebene in der Haworth-Projektion) und **β-D-Glucose** (OH am C1 äquatorial, oberhalb). In Lösung stellen sich beide Anomere über die offenkettige Form ineinander um — die **Mutarotation** — bis sich ein Gleichgewicht einstellt (ca. 36 % α, 64 % β, <1 % offenkettig).

Die offenkettige Aldehydform, obwohl nur in Spuren vorhanden, verleiht der Glucose ihre **reduzierende Eigenschaft**: Sie kann die Fehling-Probe (Cu²⁺ → Cu₂O-Niederschlag, Farbumschlag von blau nach ziegelrot) und den Benedikt-Test positiv ausfallen lassen. Diese Eigenschaft ist klinisch relevant — der sogenannte Clinitest basierte darauf, und moderne Glucosesensoren nutzen enzymatische Varianten desselben Prinzips.

## Disaccharide

Durch **glykosidische Bindung** — eine Acetalbildung zwischen dem anomeren C-Atom eines Monosaccharids und einer OH-Gruppe eines zweiten — entstehen Disaccharide unter Wasserabspaltung. Die Art der Bindung bestimmt die biologischen Eigenschaften grundlegend.

**Maltose** (Malzzucker) besteht aus zwei Glucose-Einheiten, verknüpft über eine α-1,4-glykosidische Bindung. Da das anomere C-Atom des zweiten Glucoserests frei bleibt, ist Maltose reduzierend. **Lactose** (Milchzucker) verbindet Galactose und Glucose über eine β-1,4-glykosidische Bindung — sie wird durch das Enzym Lactase gespalten, dessen Mangel zur **Lactoseintoleranz** führt, einer der häufigsten Enzymopathien weltweit. **Saccharose** (Haushaltszucker) verknüpft Glucose und Fructose über eine α-1,β-2-glykosidische Bindung, bei der beide anomeren C-Atome beteiligt sind — deshalb ist Saccharose nicht-reduzierend.

## Polysaccharide

Werden viele Monosaccharide zu langen Ketten verknüpft, entstehen **Polysaccharide** — Makromoleküle mit vielfältigen biologischen Funktionen.

**Stärke** ist das pflanzliche Speicher-Polysaccharid und besteht aus zwei Komponenten: **Amylose** (unverzweigte α-1,4-Glucose-Kette, bildet eine Helix) und **Amylopektin** (α-1,4-Kette mit α-1,6-Verzweigungen alle 24–30 Reste). Der Abbau beginnt im Mund durch die Speichelamylase (α-Amylase), die α-1,4-Bindungen spaltet. **Glykogen** ist das tierische Gegenstück — strukturell dem Amylopektin ähnlich, aber dichter verzweigt (α-1,6-Verzweigung alle 8–12 Reste). Die dichtere Verzweigung ermöglicht schnelleren Glucosezugang, was bei plötzlichem Energiebedarf entscheidend ist. Die Leber speichert etwa 150 g Glykogen (Blutglucoseregulation), die Skelettmuskulatur etwa 400 g (lokaler Energiebedarf).

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
            "Saccharose ist ein reduzierendes Disaccharid",
            "Saccharose wird durch eine α-1→β-2-glykosidische Bindung zwischen Glucose und Fructose gebildet",
            "Saccharose kann durch die Fehling-Probe nachgewiesen werden",
            "Saccharose enthält eine freie Halbacetalgruppe am anomeren Kohlenstoff",
          ],
          correctIndex: 2,
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
            "Zwei Stereoisomere, die sich an genau einem Chiralitätszentrum unterscheiden",
            "Zwei Enantiomere, die Spiegelbilder voneinander sind",
            "Zwei Verbindungen, die ineinander umgewandelt werden können ohne Bindungsbruch",
            "Zwei Anomere mit unterschiedlicher Konfiguration am anomeren Kohlenstoff",
          ],
          correctIndex: 1,
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
            "Die durchschnittliche Blutglukosekonzentration der letzten 8–12 Wochen",
            "Den prozentualen Anteil des Hämoglobins, der durch enzymatische Reaktionen verändert wurde",
            "Die Konzentration von freier Glucose im Blutplasma",
            "Den Anteil des Hämoglobins, der durch Oxidation denaturiert ist",
          ],
          correctIndex: 1,
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
            "Cellulose ist aus L-Glucose aufgebaut, die im Stoffwechsel nicht verwertbar ist",
            "Cellulose besitzt keine glykosidischen Bindungen und kann daher nicht hydrolysiert werden",
            "Der Mensch besitzt keine Enzyme zur Hydrolyse der β-1,4-glykosidischen Bindungen",
            "Cellulose enthält kovalent gebundene Phosphatgruppen, die ihre Verdauung verhindern",
            "Cellulose ist zu wasserunlöslich, um überhaupt mit Enzymen in Kontakt zu kommen",
          ],
          correctIndex: 2,
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
          options: ["Fructose", "Galactose", "Glucose", "Ribose", "Mannose"],
          correctIndex: 2,
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
            "Laktase-Mangel → Laktose wird nicht in Galactose und Glucose gespalten → osmotische Diarrhö",
            "Saccharase-Mangel → Saccharose akkumuliert → Laktoseintoleranz",
            "Galactosidase-Mangel → Galactosämie mit Laktose im Blut",
            "Glucosidasemangel → Glykogenose Typ II (Pompe) mit Laktoseintoleranz",
          ],
          correctIndex: 1,
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
      stichworte: [
        "Fettsäuren",
        "Triglyceride",
        "Phospholipide",
        "Cholesterin",
        "Steroide",
        "β-Oxidation",
        "Lipoproteine",
        "Statine",
        "Ketonkörper",
        "Membranbildung",
        "Essentielle Fettsäuren",
        "Trans-Fettsäuren",
      ],
      content: `## Fettsäuren

Lipide bilden eine chemisch heterogene Gruppe von Biomolekülen, die eines gemeinsam haben: Sie sind in Wasser schlecht, in organischen Lösungsmitteln gut löslich. Ihre biologischen Funktionen reichen von der Energiespeicherung über den Membranaufbau bis zur Signalübertragung.

Das Fundament der Lipidchemie bilden die **Fettsäuren** — unverzweigte Carbonsäuren mit typischerweise 12–24 Kohlenstoffatomen, fast immer in gerader Anzahl (weil die Biosynthese jeweils 2 C-Atome als Acetyl-CoA anfügt). Nach ihrem Sättigungsgrad unterscheidet man drei Gruppen: **Gesättigte Fettsäuren** enthalten keine Doppelbindungen. Ihre gestreckten Ketten können sich dicht aneinanderlagern, was starke van-der-Waals-Kräfte und damit hohe Schmelzpunkte zur Folge hat — gesättigte Fette sind bei Raumtemperatur fest. Die wichtigsten Vertreter sind Palmitinsäure (C16:0, häufigste gesättigte FS) und Stearinsäure (C18:0). **Einfach ungesättigte Fettsäuren** (MUFA) enthalten eine C=C-Doppelbindung — allen voran Ölsäure (C18:1Δ9, cis), die Hauptfettsäure in Olivenöl. Die cis-Konfiguration erzeugt einen Knick von etwa 30° in der Kette, der die dichte Packung stört und den Schmelzpunkt senkt — ungesättigte Fette sind bei Raumtemperatur flüssig (Öle). **Mehrfach ungesättigte Fettsäuren** (PUFA) besitzen mindestens zwei Doppelbindungen. Unter ihnen befinden sich die beiden **essentiellen Fettsäuren**, die der Mensch nicht selbst synthetisieren kann: Linolsäure (C18:2, ω-6) und α-Linolensäure (C18:3, ω-3). Aus Linolsäure wird Arachidonsäure (C20:4, ω-6) gebildet, der Vorläufer der **Eicosanoide** — Prostaglandine, Thromboxane und Leukotriene, die als lokale Entzündungs- und Schmerzmediatoren wirken.

Die **ω-Nomenklatur** zählt die Position der ersten Doppelbindung vom Methylende (ω-Ende): ω-3 bedeutet Doppelbindung am C3 vom Ende, ω-6 am C6. Die Δ-Nomenklatur zählt dagegen vom Carboxylende (Δ9 = Doppelbindung zwischen C9 und C10).

Natürlich vorkommende ungesättigte Fettsäuren liegen fast ausschließlich in **cis-Konfiguration** vor. **Trans-Fettsäuren** entstehen durch industrielle Fetthärtung (partielle Hydrierung) und haben gestreckte Ketten ähnlich wie gesättigte Fettsäuren — sie erhöhen das LDL-Cholesterin, senken das HDL und wirken **atherogen**. Die EU begrenzt den Trans-Fettsäure-Gehalt in Lebensmitteln auf maximal 2 %.

Der Grund für die hohe **Energiedichte** der Lipide (38 kJ/g bzw. 9 kcal/g gegenüber 17 kJ/g bzw. 4 kcal/g bei Kohlenhydraten und Proteinen) liegt in ihrem stark reduzierten Zustand: Fettsäuren enthalten sehr viel Wasserstoff und wenig Sauerstoff, während Kohlenhydrate formal CH₂O-Einheiten darstellen und somit bereits „partiell oxidiert" sind. Zudem bindet Fettgewebe kaum Wasser, wohingegen Glykogen etwa 2 g Wasser pro Gramm speichert.

## Triglyceride (Triacylglycerine)

**Triglyceride** (TAG) entstehen, wenn alle drei Hydroxylgruppen des Glycerins mit Fettsäuren verestert werden — drei Esterbindungen, drei Wassermoleküle als Nebenprodukt. Als vollständig hydrophobe Moleküle ohne polare Kopfgruppe bilden sie den wichtigsten Energiespeicher des Körpers. Ein 70 kg schwerer Mensch speichert in seinen Fettzellen (Adipozyten) durchschnittlich 15 kg Fett, was einer Energiereserve von etwa 570.000 kJ entspricht — genug für rund 40 Fastentage.

Die Mobilisierung dieser Reserven — die **Lipolyse** — wird hormonell reguliert: Adrenalin und Glucagon aktivieren über cAMP die hormonsensitive Lipase (HSL), die TAG in Glycerin und drei freie Fettsäuren spaltet; Insulin hemmt diesen Prozess. Die freigesetzten Fettsäuren werden im Blut an Albumin gebunden transportiert und in den Mitochondrien durch **β-Oxidation** schrittweise um je 2 C-Atome verkürzt. Jeder Zyklus liefert ein Acetyl-CoA, ein FADH₂ und ein NADH. Palmitinsäure (C16) ergibt nach vollständiger β-Oxidation 8 Acetyl-CoA, die im Citratzyklus und der Atmungskette insgesamt etwa 106 ATP netto liefern.

## Phospholipide

Im Unterschied zu Triglyceriden tragen **Phospholipide** an der dritten Position des Glycerins keine Fettsäure, sondern eine **Phosphatgruppe mit einem polaren Kopf**. Bei den **Glycerophospholipiden** sitzt an sn-1 meist eine gesättigte, an sn-2 meist eine ungesättigte Fettsäure (häufig Arachidonsäure), und an sn-3 die Phosphatgruppe mit einem variablen Alkohol-Rest.

| Phospholipid | Polarer Rest | Funktion |
|---|---|---|
| Phosphatidylcholin (Lecithin) | Cholin | Häufigstes Membranphospholipid, Lungensurfactant |
| Phosphatidylserin | Serin | Innere Membranseite; Apoptosesignal bei Exposition auf Außenseite |
| Phosphatidylethanolamin | Ethanolamin | Zweithäufigstes PL, v.a. innere Membranseite |
| Phosphatidylinositol (PI) | Inositol | Signaltransduktion: PIP₂ → IP₃ + DAG (Second Messenger) |

Die zweite große Lipidklasse der Membranen sind die **Sphingolipide**, die auf dem Aminoalkohol Sphingosin basieren: Ceramid (Sphingosin + Fettsäure), Sphingomyelin (Ceramid + Phosphocholin, Myelinscheiden) und Glykolipide (Cerebroside, Ganglioside — tragen Zuckerreste und sind für Zell-Zell-Erkennung und Blutgruppenantigene wichtig).

Der **amphipathische Charakter** der Phospholipide — ein polarer Phosphatkopf (hydrophil) kombiniert mit zwei unpolaren Fettsäureschwänzen (hydrophob) — ist die physikalische Grundlage aller biologischen Membranen. In wässrigem Milieu organisieren sich Phospholipide spontan zu einer **Lipiddoppelschicht (Bilayer)**: Die polaren Köpfe weisen zum Wasser, die unpolaren Schwänze zeigen nach innen. Diese Selbstorganisation wird durch den hydrophoben Effekt angetrieben. Das Enzym **Phospholipase A₂** spaltet die Fettsäure an sn-2 (oft Arachidonsäure) ab und leitet damit die Eicosanoid-Synthese ein — COX-Enzyme bilden Prostaglandine und Thromboxane, LOX-Enzyme Leukotriene. NSAIDs wie Ibuprofen und Aspirin hemmen die COX.

## Steroide

Alle Steroide teilen das **Sterangerüst** (Cyclopentanoperhydrophenanthren) — drei kondensierte Sechsringe (A, B, C) und ein Fünfring (D). Der Ausgangsstoff aller Steroide ist **Cholesterin** (27 C-Atome, 3β-OH-Gruppe, Δ5-Doppelbindung), das in der Leber über den Mevalonat-Weg aus Acetyl-CoA synthetisiert wird. Das Schlüsselenzym ist die **HMG-CoA-Reduktase** — Zielstruktur der Statine. Cholesterin dient nicht nur als Membranbestandteil (reguliert die Fluidität), sondern ist Ausgangsstoff für **Gallensäuren** (Cholsäure, Chenodesoxycholsäure — Emulgatoren für Nahrungsfette im Darm mit enterohepatischem Kreislauf), sämtliche **Steroidhormone** (Glucocorticoide, Mineralocorticoide, Androgene, Östrogene, Gestagene — alle lipophil, wirken über intrazelluläre Kernrezeptoren) und **Vitamin D₃** (Cholecalciferol → 25-OH-D₃ in der Leber → 1,25-(OH)₂-D₃ = Calcitriol in der Niere → Calcium/Phosphat-Homöostase).

Im Blut werden Lipide als **Lipoproteine** transportiert — Partikel mit einem hydrophoben Kern (TAG, Cholesterinester) und einer amphipathischen Hülle (Phospholipid-Monolayer, Apolipoproteine). Die wichtigsten Klassen sind **Chylomikronen** (exogene Lipide vom Darm), **VLDL** (endogene Lipide von der Leber), **LDL** („schlechtes" Cholesterin, transportiert Cholesterin zu peripheren Geweben, atherogen bei Exzess) und **HDL** („gutes" Cholesterin, reverser Cholesterintransport zurück zur Leber).

## Klinischer Bezug

Bei **Hypercholesterinämie** (LDL > 160 mg/dL) steigt das Atheroskleroserisiko erheblich. LDL dringt in die Intimaschicht der Arterien ein, wird dort oxidiert und von Makrophagen über Scavenger-Rezeptoren aufgenommen — es entstehen **Schaumzellen**, die den Anfang eines atherosklerotischen Plaques markieren. Plaque-Ruptur führt zur Thrombose und damit zum Myokardinfarkt oder Schlaganfall. **Statine** hemmen die HMG-CoA-Reduktase, reduzieren die endogene Cholesterinsynthese und bewirken eine kompensatorische Hochregulation der LDL-Rezeptoren in Hepatozyten, was das Blut-LDL um 30–50 % senkt.

**Omega-3-Fettsäuren** (EPA, DHA aus Fischöl) wirken antiinflammatorisch, senken Triglyceride und werden bei Hypertriglyceridämie empfohlen. **Ketonkörper** (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen in den Lebermitochondrien aus überschüssigem Acetyl-CoA, wenn die β-Oxidation die Kapazität des Citratzyklus übersteigt — typischerweise bei Fasten oder unkontrolliertem Typ-1-Diabetes. Bei massiver Ketonkörperproduktion droht die **diabetische Ketoazidose** (pH < 7,3, Acetongeruch, Kußmaul-Atmung). **Morbus Gaucher**, die häufigste Sphingolipidose, entsteht durch Mangel an Glucocerebrosidase und führt zu Hepatosplenomegalie und Knochenbefall — eine Enzymersatztherapie ist verfügbar.

> **Merke:** Statine hemmen HMG-CoA-Reduktase → LDL-Rezeptor-Hochregulation → LDL↓ 30–50%. LDL atherogen, HDL protektiv. Ketoazidose (Typ-1-Diabetes): Acetongeruch, pH <7,3, Kußmaul-Atmung.

> **Prüfungstipp:** Im MedAT kommen Lipide in mehreren Varianten vor: (1) Energiedichte — Fette liefern 38 kJ/g, doppelt so viel wie KH/Proteine (17 kJ/g). (2) cis vs. trans — cis-Doppelbindung erzeugt Knick und senkt Schmelzpunkt, trans verhält sich wie gesättigt. (3) Statine hemmen HMG-CoA-Reduktase (nicht direkt LDL-Rezeptoren!). (4) Essentielle FS: Linolsäure (ω-6) und α-Linolensäure (ω-3) — beides PUFA, die der Körper nicht synthetisieren kann.`,
      lernziele: [
        "Fettsäuren nach Sättigungsgrad klassifizieren, den Unterschied zwischen cis/trans-Konfiguration und seine physiologische Bedeutung erklären",
        "Die Struktur von Triglyceriden und ihre Bildung durch Veresterung beschreiben sowie die Lipolyse erklären",
        "Den amphipathischen Aufbau von Phospholipiden und die Konsequenz für die Membranbildung erläutern",
        "Das Sterangerüst und die wichtigsten Steroide (Cholesterin, Steroidhormone, Vitamin D, Gallensäuren) benennen",
        "Hypercholesterinämie, Atherosklerose und das Wirkprinzip von Statinen (HMG-CoA-Reduktase-Hemmung) erklären",
      ],
      sections: [
        {
          heading: "Fettsäuren: Struktur und Eigenschaften",
          text: "Die Länge der Kohlenwasserstoffkette und der Sättigungsgrad bestimmen physikalische Eigenschaften und biologische Wirkung von Fettsäuren. Gesättigte Fettsäuren (keine Doppelbindungen, Palmitinsäure C16:0, Stearinsäure C18:0) können sich gestreckt eng aneinanderlagern → hohe Van-der-Waals-Kräfte → festes Fett bei Raumtemperatur. Ungesättigte Fettsäuren (Ölsäure C18:1Δ9, cis) haben einen Knick an der Doppelbindung → schlechtere Packung → niedriger Schmelzpunkt → flüssiges Öl. Trans-Fettsäuren aus industrieller Fetthärtung sind atherogen. Essentielle Fettsäuren (Linolsäure ω-6, α-Linolensäure ω-3) dienen als Vorläufer für Eicosanoide (Prostaglandine, Leukotriene).",
          merksatz:
            "Gesättigte Fettsäuren = fest, arteriogen; ungesättigte cis = flüssig, protektiv; trans = fest, arteriogen.",
        },
        {
          heading: "Phospholipide und Membranbildung",
          text: "Glycerophospholipide (z.B. Phosphatidylcholin = Lecithin) bestehen aus Glycerin, zwei Fettsäuren (sn-1 meist gesättigt, sn-2 meist ungesättigt), einer Phosphatgruppe und einem polaren Alkohol-Rest (Cholin, Serin etc.). Sie sind amphipathisch: Der polare Phosphokopf interagiert mit Wasser (hydrophil), die unpolaren Fettsäureschwänze meiden Wasser (hydrophob). In wässrigem Milieu organisieren sich Phospholipide spontan zu einem Bilayer — die Grundstruktur aller biologischen Membranen. Cholesterin lagert sich zwischen die Fettsäureschwänze und moduliert die Membranfluidität (bei tiefen Temperaturen verhindernd Erstarren; bei hohen Temperaturen verhindernd Überfließen).",
          merksatz:
            "Phospholipid = Amphiphil; polarer Kopf außen, apolare Schwänze innen → Bilayer = Membran.",
        },
        {
          heading: "Cholesterin und Statine",
          text: "Cholesterin wird in der Leber aus Acetyl-CoA über den Mevalonat-Weg synthetisiert; das Schlüsselenzym ist HMG-CoA-Reduktase. Im Blut wird Cholesterin in Lipoproteinen transportiert: LDL transportiert Cholesterin zu peripheren Geweben (hohes LDL = 'schlechtes' Cholesterin → Atherosklerose), HDL holt Cholesterin aus Geweben zurück zur Leber. Statine (Atorvastatin, Simvastatin) hemmen kompetitiv HMG-CoA-Reduktase → weniger endogene Cholesterinsynthese → Hochregulation der LDL-Rezeptoren in Hepatozyten → mehr LDL-Aufnahme aus Blut → LDL-Senkung um 30–50%.",
          merksatz:
            "Statine hemmen HMG-CoA-Reduktase → weniger Cholesterinsynthese → LDL-Rezeptor-Hochregulation → LDL-Senkung.",
        },
        {
          heading: "Wichtige Steroide und ihre Funktionen",
          text: "Alle Steroide leiten sich vom Cholesterin ab:",
          table: {
            headers: ["Steroid", "Funktion"],
            rows: [
              [
                "Cholesterin",
                "Membrankomponente (reguliert Fluidität), Ausgangsstoff für alle Steroide",
              ],
              ["Cortisol", "Glucocorticoid; Stressreaktion, Gluconeogenese, Antiinflammation"],
              ["Aldosteron", "Mineralocorticoid; Na⁺/K⁺-Regulation in Niere"],
              ["Testosteron", "Androgen; Virilisierung, Spermatogenese"],
              ["Östradiol", "Östrogen; Feminisierung, Menstruationszyklus"],
              ["Progesteron", "Gelbkörperhormon; Schwangerschaft"],
              ["Vitamin D₃", "Calcitriol (aktiv); Calcium- und Phosphathomöostase"],
              ["Gallensäuren", "Cholsäure etc.; Fettemulgierung im Darm"],
            ],
          },
        },
      ],

      merksätze: [
        "Fettsäuren: gesättigt = keine C=C; einfach ungesättigt = eine C=C; mehrfach ungesättigt = ≥2 C=C.",
        "Essentielle Fettsäuren: Linolsäure (ω-6) und α-Linolensäure (ω-3) — müssen mit Nahrung zugeführt werden.",
        "cis-Doppelbindung → Knick → niedriger Schmelzpunkt; trans-Doppelbindung → gerade → höherer Schmelzpunkt.",
        "Energiedichte: Lipide 38 kJ/g vs. Kohlenhydrate/Proteine je 17 kJ/g.",
        "Triglycerid = Glycerin + 3 Fettsäuren, verknüpft durch 3 Esterbindungen (Kondensation).",
        "Phospholipide = amphipathisch (polarer Phosphatkopf + 2 apolare Fettsäureschwänze) → Bilayer.",
        "Lecithin (Phosphatidylcholin) = häufigstes Membranphospholipid.",
        "Sterangerüst = 4 kondensierte Ringe (3× Sechsring + 1× Fünfring); Cholesterin ist Grundgerüst.",
        "Statine hemmen HMG-CoA-Reduktase (Schlüsselenzym der Cholesterinbiosynthese).",
        "Ketonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton — entstehen bei exzessiver Lipolyse (Fasten, Typ-1-Diabetes).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie, weshalb Phospholipide spontan Lipiddoppelschichten bilden und welche Rolle Cholesterin in biologischen Membranen spielt.",
        answer:
          "Phospholipide sind amphipathische Moleküle: Sie besitzen einen hydrophilen (wasserfreundlichen) polaren Kopf (Phosphatgruppe mit Cholin oder einem anderen polaren Alkohol) und zwei hydrophobe (wasserfeindliche) unpolare Fettsäureschwänze. Wenn Phospholipide in wässriges Milieu gebracht werden, führt der hydrophobe Effekt zur spontanen Selbstorganisation: Die Fettsäureschwänze meiden den Kontakt mit Wasser und lagern sich zusammen (hydrophobe Wechselwirkungen), während die polaren Köpfe zur wässrigen Phase weisen. Das thermodynamisch günstigste Arrangement ist dabei nicht die Mizelle (wie bei Detergenzien mit nur einem Schwanz), sondern eine **Phospholipid-Doppelschicht (Bilayer)**: Zwei Lagen Phospholipide ordnen sich so an, dass ihre Fettsäureschwänze nach innen zeigen und ihre polaren Köpfe nach außen zur wässrigen Phase. Dies führt zu einem selbstdichtenden, flexiblen flüssigkristallinen Membransystem — der Grundstruktur aller biologischen Membranen. Cholesterin fügt sich mit seiner kleinen OH-Gruppe in Richtung der Phosphatkopfgruppen und seinem unpolaren Sterangerüst zwischen den Fettsäureketten ein. Es erfüllt dabei eine duale temperaturabhängige Funktion: Bei niedrigen Temperaturen verhindert es das Erstarren der Membran (Fluiditätspuffer), bei hohen Temperaturen die übermäßige Fluidisierung. Darüber hinaus dient Cholesterin als Ausgangsstoff für Steroidhormone, Gallensäuren und Vitamin D₃.",
      },
      klinischerBezug:
        "Hypercholesterinämie und Atherosklerose; Statine als HMG-CoA-Reduktase-Hemmer; Ketoazidose bei Typ-1-Diabetes; Trans-Fettsäuren als kardiovaskulärer Risikofaktor.",
      selfTest: [
        {
          question:
            "Welche Aussage über die Energiedichte von Lipiden im Vergleich zu Kohlenhydraten ist korrekt?",
          options: [
            "Lipide und Kohlenhydrate haben die gleiche Energiedichte von ca. 17 kJ/g",
            "Kohlenhydrate liefern mit 38 kJ/g mehr Energie als Lipide mit 17 kJ/g",
            "Lipide liefern mit ca. 38 kJ/g mehr als doppelt so viel Energie wie Kohlenhydrate (ca. 17 kJ/g)",
            "Proteine liefern mehr Energie als Lipide",
            "Lipide liefern nur 4 kcal/g, Kohlenhydrate dagegen 9 kcal/g",
          ],
          correctIndex: 2,
          explanation:
            "Lipide (Fette) liefern ca. 38 kJ/g (≈ 9 kcal/g), während Kohlenhydrate und Proteine je ca. 17 kJ/g (≈ 4 kcal/g) liefern. Die höhere Energiedichte der Lipide erklärt sich durch den stärker reduzierten (höherer Wasserstoffgehalt, weniger Sauerstoff) Zustand der Fettsäuren im Vergleich zu Kohlenhydraten (die formal CH₂O-Einheiten enthalten und somit 'schon partiell oxidiert' sind). Deshalb sind Triglyceride als Energiespeicher effizienter als Glykogen (zudem nimmt Glykogen gebundenes Wasser mit → effektive Energiedichte von Glykogen noch geringer).",
          hints: [
            "Lipide enthalten viel mehr Wasserstoff relativ zum Sauerstoff als Kohlenhydrate — welche Konsequenz hat das für die Oxidationsenergie?",
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
            "Sie sind amphipathisch (polarer Kopf + apolare Schwänze) und bilden spontan Bilayer in Wasser",
            "Sie tragen drei Fettsäureketten wie Triglyceride und sind deshalb besonders stabil",
            "Sie können kovalente Bindungen mit Membranproteinen eingehen und die Membran fixieren",
          ],
          correctIndex: 2,
          explanation:
            "Phospholipide sind amphipathische Moleküle: Der hydrophile polare Kopf (Phosphat + Cholin oder anderer polarer Rest) ist wasserfreundlich, die zwei hydrophoben Fettsäureschwänze sind wasserfeindlich. In wässrigem Milieu ordnen sie sich durch den hydrophoben Effekt spontan zu einer Doppelschicht (Bilayer) an: Köpfe nach außen zur wässrigen Phase, Schwänze nach innen. Diese Selbstorganisation liefert die Grundstruktur aller biologischen Membranen. Triglyceride (drei Fettsäuren, kein polarer Kopf) sind vollständig hydrophob und bilden keine Membranen, sondern Fetttröpfchen.",
          hints: [
            "Was ist das Besondere an einer Substanz, die sowohl hydrophile als auch hydrophobe Bereiche hat?",
            "Denke an den hydrophoben Effekt: Was geschieht mit unpolaren Bereichen in Wasser?",
          ],
          tags: ["phospholipide", "membran", "amphipathisch", "bilayer"],
          difficulty: 1,
        },
        {
          question:
            "Welcher der folgenden Faktoren erklärt den niedrigeren Schmelzpunkt von Olivenöl im Vergleich zu Palmfett?",
          options: [
            "Olivenöl enthält Phospholipide, Palmfett dagegen nicht",
            "Palmfett hat eine kürzere Kohlenstoffkette als Olivenöl",
            "Olivenöl enthält vorwiegend einfach ungesättigte (cis) Fettsäuren mit Knick in der Kette",
            "Olivenöl hat einen höheren Anteil an trans-Fettsäuren",
            "Palmfett enthält Steroide, die den Schmelzpunkt erhöhen",
          ],
          correctIndex: 2,
          explanation:
            "Olivenöl enthält hauptsächlich Ölsäure (C18:1Δ9, cis-Konfiguration, einfach ungesättigt). Die cis-Doppelbindung erzeugt einen Knick von ca. 30° in der Fettsäurekette. Dieser Knick verhindert die enge parallele Packung der Fettsäuremoleküle und reduziert die Van-der-Waals-Wechselwirkungen → niedriger Schmelzpunkt → bei Raumtemperatur flüssig. Palmfett enthält hauptsächlich Palmitinsäure (C16:0, gesättigt, gestreckte Kette) → dichte Packung → stärkere Van-der-Waals-Kräfte → höherer Schmelzpunkt → fest bei Raumtemperatur. Trans-Fettsäuren verhalten sich ähnlich wie gesättigte (gerade Kette) und wären ebenfalls fest.",
          hints: [
            "Was bewirkt eine cis-Doppelbindung geometrisch für die Form der Fettsäurekette?",
            "Dichte Packung → mehr Van-der-Waals-Kräfte → höherer Schmelzpunkt. Welche Fettsäureart erlaubt dichteste Packung?",
          ],
          tags: ["fettsäuren", "schmelzpunkt", "cis", "gesättigt-ungesättigt"],
          difficulty: 2,
        },
        {
          question:
            "Welches Enzym wird durch Statine gehemmt und welche Konsequenz hat dies für den Cholesterinstoffwechsel?",
          options: [
            "Cholesterin-Oxidase → Cholesterin wird direkt abgebaut → LDL sinkt",
            "LDL-Rezeptor → weniger LDL-Aufnahme in Hepatozyten → LDL-Anstieg im Blut",
            "HMG-CoA-Reduktase → weniger Cholesterinsynthese → Hochregulation der LDL-Rezeptoren → LDL-Senkung",
            "Lipoprotein-Lipase → weniger VLDL-Abbau → Triglyceridanstieg",
            "Phospholipase A₂ → Membranabbau in Hepatozyten → diffuse Lipidstörung",
          ],
          correctIndex: 2,
          explanation:
            "Statine (z.B. Atorvastatin, Simvastatin, Rosuvastatin) hemmen kompetitiv die HMG-CoA-Reduktase, das Schlüsselenzym der Cholesterinbiosynthese im Mevalonat-Weg. Durch weniger endogene Cholesterinsynthese in der Leber sinkt der intrahepatische Cholesteringehalt. Als Reaktion darauf reguliert die Leberzelle die LDL-Rezeptoren auf ihrer Oberfläche hoch (mehr SREBP-2-Aktivierung). Diese erhöhte LDL-Rezeptor-Dichte führt zu verstärkter Aufnahme von LDL-Cholesterin aus dem Blut → LDL-Senkung um 30–50%. HDL-Cholesterin steigt leicht an. Statine sind die wirksamsten Medikamente zur LDL-Senkung und zur Reduktion kardiovaskulärer Ereignisse.",
          hints: [
            "HMG-CoA-Reduktase ist das Schrittmacherenzym der Cholesterinbiosynthese — was passiert, wenn es gehemmt wird?",
            "Die Leber reagiert auf niedrigen intrazellulären Cholesterinspiegel mit Hochregulation von Rezeptoren — welchen?",
          ],
          tags: ["statine", "hmg-coa-reduktase", "cholesterin", "ldl", "klinisch"],
          difficulty: 2,
        },
        {
          question:
            "Welches Steroid dient als gemeinsamer Ausgangsstoff für Cortisol, Testosteron und Vitamin D₃?",
          options: ["Östradiol", "Cholesterin", "Aldosteron", "Cortisol", "Progesteron"],
          correctIndex: 1,
          explanation:
            "Cholesterin ist der universelle Vorläufer aller Steroide im menschlichen Körper. Es besitzt das Sterangerüst (vier kondensierte Ringe: drei Sechsringe + ein Fünfring) und eine –OH-Gruppe an C3 sowie eine aliphatische Seitenkette. Aus Cholesterin werden in den Nebennieren Glucocorticoide (Cortisol) und Mineralocorticoide (Aldosteron) synthetisiert, in den Gonaden Androgene (Testosteron) und Östrogene (Östradiol), in der Leber Gallensäuren, und in Haut/Leber/Niere Vitamin D₃ (Cholecalciferol → Calcidiol → Calcitriol). Progesteron ist selbst ein Steroid-Intermediat, kein Ausgangsstoff für alle genannten.",
          hints: [
            "Was haben Cortisol, Testosteron, Aldosteron und Vitamin D strukturell gemeinsam?",
            "Der Ausgangsstoff ist das häufigste Steroid in Säugetierzellmembranen.",
          ],
          tags: ["cholesterin", "steroide", "steroidhormone", "biosynthese"],
          difficulty: 1,
        },
        {
          question:
            "Ketonkörper entstehen bei längerem Fasten oder unkontrolliertem Typ-1-Diabetes. Welche Metabolite sind das und in welchem Organ werden sie hauptsächlich gebildet?",
          options: [
            "Glucose und Fructose; gebildet in der Niere durch Gluconeogenese",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; gebildet in der Leber aus überschüssigem Acetyl-CoA",
            "Pyruvat und Lactat; gebildet in der Muskulatur bei anaerober Glykolyse",
            "Cholesterin und Gallensäuren; gebildet in der Leber bei erhöhtem Fettkonsum",
            "Harnsäure und Ammoniak; gebildet in der Leber beim Proteinabbau",
          ],
          correctIndex: 1,
          explanation:
            "Ketonkörper sind Acetoacetat, β-Hydroxybutyrat und Aceton. Sie entstehen in der Leber (Mitochondrien) aus überschüssigem Acetyl-CoA, das bei gesteigerter Fettsäureoxidation (β-Oxidation) anfällt, wenn der Oxalacetat-Pool für den Citratzyklus nicht ausreicht (z.B. bei Glukosemangel). In der Ketogenese kondensieren zwei Acetyl-CoA-Moleküle zu Acetoacetyl-CoA, das zu Acetoacetat umgewandelt wird; durch Reduktion entsteht β-Hydroxybutyrat, durch spontane Decarboxylierung flüchtiges Aceton. Bei unkontrolliertem Typ-1-Diabetes führt absoluter Insulinmangel zu unkontrollierter Lipolyse und Ketogenese → Ketoazidose (Blut-pH fällt, Acetongeruch der Atemluft).",
          hints: [
            "In welchem Organ läuft die β-Oxidation der Fettsäuren ab und was ist das Endprodukt?",
            "Bei Glukosemangel fehlt Oxalacetat für den Citratzyklus — wohin geht dann das Acetyl-CoA?",
          ],
          tags: ["ketonkörper", "ketoazidose", "diabetes", "fasten", "klinisch"],
          difficulty: 3,
        },
        {
          question:
            "Welche Funktion haben Gallensäuren und von welchem Molekül werden sie synthetisiert?",
          options: [
            "Gallensäuren sind Verdauungsenzyme für Fette; sie werden aus Aminosäuren gebildet",
            "Gallensäuren sind Emulgatoren für Fette im Darm; sie werden aus Cholesterin gebildet",
            "Gallensäuren sind Hormone mit Steroidstruktur; sie werden in der Bauchspeicheldrüse gebildet",
            "Gallensäuren sind Transportproteine für Lipide im Blut; sie werden aus Triglyceriden gebildet",
            "Gallensäuren sind Cofaktoren der Lipasen und werden aus Fettsäuren gebildet",
          ],
          correctIndex: 1,
          explanation:
            "Gallensäuren (z.B. Cholsäure, Chenodesoxycholsäure) werden in der Leber aus Cholesterin synthetisiert und als Gallensalze (konjugiert mit Glycin oder Taurin) in der Gallenblase gespeichert. Im Dünndarm wirken sie als biologische Detergenzien (Emulgatoren): Durch ihren amphipathischen Charakter (Sterangerüst + polare OH-Gruppen) emulgieren sie Nahrungsfette in kleine Mizellen → vergrößerte Angriffsfläche für pankre­atische Lipasen. Gallensäuren werden im terminalen Ileum resorbiert und zur Leber zurücktransportiert (enterohepatischer Kreislauf). Sie sind keine Enzyme selbst, sondern ermöglichen die effiziente enzymatische Fettspaltung.",
          hints: [
            "Gallensäuren haben ein Sterangerüst — von welchem häufigen Steroid werden sie abgeleitet?",
            "Was bedeutet 'emulgieren' und warum ist das für die Fettverdauung wichtig?",
          ],
          tags: ["gallensäuren", "cholesterin", "fettverdauung", "emulgierung"],
          difficulty: 2,
        },
      ],
    },

    {
      id: "ch-13-04",
      title: "Nukleinsäuren — DNA und RNA",
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
      content: `## Nukleotid-Aufbau

Die Erbinformation jedes Lebewesens ist in Nukleinsäuren gespeichert — langen Kettenmolekülen, deren Grundbausteine die **Nukleotide** sind. Jedes Nukleotid besteht aus drei Komponenten: einer **Stickstoffbase** (Purin oder Pyrimidin), einem **Pentosezucker** (Ribose bei RNA, 2'-Desoxyribose bei DNA — letzterer fehlt die OH-Gruppe an C2') und einer oder mehreren **Phosphatgruppen**. Ohne Phosphat spricht man von einem **Nukleosid** (Base + Zucker), mit Phosphat von einem **Nukleotid**. **ATP** (Adenosin-Triphosphat), das universelle Energietransportmolekül der Zelle, ist nichts anderes als ein Nukleotid mit drei Phosphatresten — die Hydrolyse der β-γ-Phosphorsäureanhydridbindung setzt ΔG°' ≈ −30,5 kJ/mol frei.

## Stickstoffbasen

Die Basen werden nach ihrer Ringstruktur in zwei Klassen eingeteilt. **Purinbasen** bestehen aus einem Doppelringsystem (9 Atome) und umfassen **Adenin (A)** und **Guanin (G)** — beide kommen sowohl in DNA als auch in RNA vor. **Pyrimidinbasen** besitzen einen einfachen Sechsring (6 Atome): **Cytosin (C)** findet sich in beiden Nukleinsäuren, **Thymin (T)** nur in der DNA (es trägt eine Methylgruppe am C5), und **Uracil (U)** nur in der RNA (ohne Methylgruppe). Eine bewährte Eselsbrücke lautet: „CUT the Pyrimidine" (Cytosin, Uracil, Thymin sind die Pyrimidine).

## Chargaff-Regeln

Erwin Chargaff entdeckte in den 1950er Jahren die quantitativen Gesetzmäßigkeiten der Basenzusammensetzung doppelsträngiger DNA, die sich später als direkte Konsequenz der Watson-Crick-Basenpaarung erwiesen: **A = T** (verbunden durch **2 Wasserstoffbrücken**), **G ≡ C** (verbunden durch **3 Wasserstoffbrücken**), und daraus folgt **A + G = C + T** (Purine = Pyrimidine). Der GC-Gehalt variiert zwischen verschiedenen Organismen und bestimmt die thermische Stabilität der DNA: Je höher der GC-Anteil, desto höher die Schmelztemperatur (Tm), weil G-C-Paare mit ihren drei Wasserstoffbrücken stabiler sind als A-T-Paare mit nur zwei.

## DNA-Doppelhelix

Das 1953 von Watson und Crick vorgeschlagene Strukturmodell der **B-DNA** beschreibt eine **rechtsgängige Doppelhelix** aus zwei **antiparallelen** Polynukleotidsträngen — der eine verläuft in 5'→3'-Richtung, der andere in 3'→5'-Richtung. Im Inneren der Helix liegen die komplementären Basenpaare, stabilisiert durch Wasserstoffbrücken und hydrophobe Stapelung (π-π-Stacking). Pro Windung enthält die Helix 10,5 Basenpaare bei einer Ganghöhe von 3,4 nm. Das Zucker-Phosphat-Rückgrat verläuft außen und ist bei physiologischem pH durch die Phosphatgruppen negativ geladen — dies erklärt die Assoziation der DNA mit basischen **Histonproteinen** zur Chromatinstruktur in Eukaryoten.

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
          options: ["Adenin", "Guanin", "Cytosin", "Thymin", "Uracil"],
          correctIndex: 4,
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
            "220 Wasserstoffbrücken",
            "240 Wasserstoffbrücken",
            "260 Wasserstoffbrücken",
            "300 Wasserstoffbrücken",
          ],
          correctIndex: 3,
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
            "tRNA (transfer RNA)",
            "miRNA (micro RNA)",
            "siRNA (small interfering RNA)",
          ],
          correctIndex: 2,
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
            "Die erste Phosphorylierung wird fast ausschließlich durch die viruseigene Thymidinkinase durchgeführt, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Kinase",
            "Gesunde Zellen können Aciclovir enzymatisch abbauen, infizierte Zellen nicht",
            "Aciclovir wird nur von Viruspartikeln, nicht von Zellen aufgenommen",
            "Die zelluläre DNA-Polymerase erkennt Aciclovir nicht als Substrat, die virale DNA-Polymerase hat eine absolut niedrigere Genauigkeit",
          ],
          correctIndex: 1,
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
          options: ["5'-ATGCGT-3'", "5'-TACGCA-3'", "3'-ATGCGT-5'", "5'-ACGCAT-3'", "3'-UACGCA-5'"],
          correctIndex: 3,
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
            "DNA-Methylierung verändert die Basensequenz, Punktmutationen nicht",
            "DNA-Methylierung verändert die Genexpression ohne Änderung der Basensequenz; Punktmutationen verändern die Basensequenz selbst",
            "Punktmutationen sind vererbbar, DNA-Methylierung nicht",
            "DNA-Methylierung betrifft nur Adenin; Punktmutationen betreffen Cytosin",
          ],
          correctIndex: 2,
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
