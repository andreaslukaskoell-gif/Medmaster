// @ts-nocheck
import type { Kapitel } from "../../types";

// Archived UKs from biologie/kap1-die-zelle.ts
// Reason: Not in MedAT 2026 Stichwortliste for Biology

export const archivedBioKap1UKs: Kapitel["unterkapitel"] = [
  {
    id: "bio-1-09",
    title: "Photosynthese — Lichtreaktion & Calvin-Zyklus",
    stichworte: [
      "Photosynthese",
      "Chloroplast",
      "Thylakoid",
      "Stroma",
      "Lichtreaktion",
      "Dunkelreaktion",
      "Calvin-Zyklus",
      "Photosystem I",
      "Photosystem II",
      "RuBisCO",
      "Photolyse",
      "C3-Pflanze",
      "C4-Pflanze",
      "CAM-Pflanze",
    ],
    content: `## Chloroplasten — Aufbau und Endosymbiontentheorie

Ohne Photosynthese gäbe es keinen freien Sauerstoff auf der Erde — und der Ort dieses Prozesses ist der Chloroplast. Chloroplasten sind linsenförmige Organellen mit einer **Doppelmembran** — ein starkes Indiz für die **Endosymbiontentheorie** (Lynn Margulis, 1967): Chloroplasten waren ursprünglich freie **Cyanobakterien**, die von einer eukaryotischen Zelle aufgenommen (Endozytose) und als Symbionten beibehalten wurden. Beweise: eigene ringförmige DNA (wie Bakterien), 70S-Ribosomen (bakterientypisch), Doppelmembran (äußere = Phagosomenmembran, innere = ursprüngliche Bakterienmembran).

**Innerer Aufbau:**
- **Äußere Membran**: durchlässig für kleine Moleküle (Porine)
- **Innere Membran**: selektiv permeabel, Transportproteine
- **Thylakoidmembran**: Membranscheiben, die zu **Grana** (Stapel) angeordnet sind. Verbindungen zwischen Grana = **Stroma-Thylakoide**. Hier sitzen die Photosysteme und die Elektronentransportkette — der Ort der **Lichtreaktion**.
- **Stroma**: wässrige Matrix, enthält Enzyme des **Calvin-Zyklus**, eigene DNA, Ribosomen, Stärkekörnchen.
- **Thylakoidlumen**: Innenraum der Thylakoide. Hier sammeln sich H⁺ (Protonengradient für ATP-Synthese — analog zum Intermembranraum der Mitochondrien).

> **Merke:** Lichtreaktion = Thylakoidmembran (analog: Atmungskette = innere Mitochondrienmembran). Calvin-Zyklus = Stroma (analog: Citratzyklus = Mitochondrien-Matrix). Chloroplasten haben eigene DNA → Endosymbiontentheorie.

---

## Lichtreaktion — Energie aus Sonnenlicht


{{DIAGRAM:photosynthesis-z-scheme}}

Die Lichtreaktion findet in der **Thylakoidmembran** statt und läuft in vier Schritten ab:

**Schritt 1 — Photosystem II (PS II, P680):**
Chlorophyll a absorbiert Licht (Wellenlänge ~680 nm) → Elektron wird auf ein höheres Energieniveau angehoben. Das „Loch" wird durch **Photolyse des Wassers** gefüllt: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. **Der Sauerstoff, den wir atmen, stammt aus dem Wasser — nicht aus CO₂!** (nachgewiesen durch Isotopen-Experimente mit ¹⁸O, Hill-Reaktion).

**Schritt 2 — Elektronentransportkette:**
Elektronen wandern von PS II über: Plastochinon (PQ, mobiler Carrier in der Membran, analog zu Ubichinon) → **Cytochrom-b6f-Komplex** (pumpt H⁺ in das Thylakoidlumen → Protonengradient!) → **Plastocyanin** (PC, kupferhaltiges Protein, analog zu Cytochrom c) → PS I.

**Schritt 3 — Photosystem I (PS I, P700):**
Erneute Lichtanregung (Wellenlänge ~700 nm). Elektronen werden über Ferredoxin auf **NADP⁺-Reduktase** übertragen → **NADPH** entsteht (Reduktionsäquivalent für den Calvin-Zyklus). Dies ist der **nicht-zyklische Elektronentransport** (linearer Elektronenfluss: H₂O → PS II → ETC → PS I → NADPH).

**Schritt 4 — Chemiosmose (ATP-Synthase):**
H⁺ (aus Photolyse + Protonenpumpen) akkumulieren im Thylakoidlumen → Protonengradient → H⁺ fließen durch **ATP-Synthase** (CF₀CF₁-Komplex) zurück ins Stroma → **ATP** entsteht. Gleiche Chemiosmose wie in Mitochondrien!

**Zyklischer Elektronentransport:** Elektronen können von PS I zurück auf den Cytochrom-b6f-Komplex fließen → nur ATP, kein NADPH, kein O₂. Nutzen: Feinabstimmung des ATP/NADPH-Verhältnisses.

**Bilanz der Lichtreaktion:** H₂O + Licht → ½ O₂ + ATP + NADPH + H⁺

> **Merke:** PS II (P680): spaltet Wasser → O₂ frei! PS I (P700): liefert NADPH. Nummerierung: II vor I im linearen Elektronenfluss (historisch: PS I wurde zuerst entdeckt). Chemiosmose: H⁺-Gradient im Thylakoidlumen → ATP-Synthase → ATP.

---

## Calvin-Zyklus (Dunkelreaktion) — CO₂ wird zu Zucker


**Die 3 Phasen (Melvin Calvin, Nobelpreis 1961):**

**Phase 1 — CO₂-Fixierung:**
**RuBisCO** (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase) fixiert CO₂ an Ribulose-1,5-bisphosphat (RuBP, C5). Es entsteht ein instabiles C6-Zwischenprodukt, das sofort in 2 Moleküle **3-Phosphoglycerat** (3-PGA, C3) zerfällt. Daher heißen diese Pflanzen **C3-Pflanzen** (erstes stabiles Produkt = C3).

RuBisCO ist das **häufigste Protein der Erde** (~50 % des Blattproteins) — aber leider langsam (~3 Reaktionen/Sekunde) und nicht besonders spezifisch: Es kann auch O₂ statt CO₂ fixieren → **Photorespiration** (Energieverlust, kein Zucker produziert).

**Phase 2 — Reduktion:**
3-PGA wird durch ATP und NADPH zu **Glycerinaldehyd-3-phosphat** (G3P) reduziert. Pro 3 CO₂: 6 ATP + 6 NADPH verbraucht.

**Phase 3 — Regeneration:**
5 von 6 G3P-Molekülen regenerieren RuBP (verbraucht 3 ATP). 1 G3P = Nettogewinn → 2 G3P → 1 Glucose (6 Calvin-Zyklen für 1 Glucose).

**Gesamtbilanz für 1 Glucose:**
6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆ + 18 ADP + 12 NADP⁺ + 6 H₂O

> **Merke:** RuBisCO = häufigstes Enzym. Fixiert CO₂ an RuBP (C5) → 2 × C3. Calvin-Zyklus = 3 Phasen: Fixierung → Reduktion → Regeneration. 6 CO₂ → 1 Glucose.

---

## Bruttogleichung und Vergleich mit Zellatmung

**Bruttogleichung der Photosynthese:**

**6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂** (lichtabhängig)

**Bruttogleichung der Zellatmung:**

**C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O** (exergon, ATP-Synthese)

Die beiden Gleichungen sind **exakt invers** — sie bilden zusammen den **Kohlenstoffkreislauf**: Pflanzen binden CO₂ und setzen O₂ frei; Tiere (und Pflanzen in der Nacht) verbrauchen O₂ und setzen CO₂ frei.

| Merkmal | Photosynthese | Zellatmung |
|---|---|---|
| Ort | Chloroplast | Mitochondrium |
| Reaktion | 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ | C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O |
| Energieform | Licht → chemisch | Chemisch → ATP |
| O₂ | wird freigesetzt | wird verbraucht |
| CO₂ | wird fixiert | wird freigesetzt |
| NADPH/NADH | NADPH produziert | NADH produziert |

---

## C3-, C4- und CAM-Pflanzen

**C3-Pflanzen** (ca. 85 % aller Pflanzen: Weizen, Reis, Kartoffel, Sojabohne):
Normaler Calvin-Zyklus. Erstes stabiles Produkt = 3-PGA (C3). Problem bei Hitze/Trockenheit: Stomata schließen → CO₂ sinkt, O₂ steigt → **Photorespiration** (RuBisCO fixiert O₂ → 2-Phosphoglykolat → energieaufwendiger Recycling-Weg). Bis zu 30 % Effizienzverlust!

**C4-Pflanzen** (Mais, Zuckerrohr, Hirse, tropische Gräser):
**Räumliche Trennung**: CO₂ wird in Mesophyllzellen zunächst durch **PEP-Carboxylase** (bindet nur CO₂, nicht O₂!) an PEP fixiert → Oxalacetat (C4) → Malat. Malat wird in **Bündelscheidenzellen** transportiert → dort CO₂ freigesetzt → Calvin-Zyklus mit hoher CO₂-Konzentration → kaum Photorespiration. Vorteil bei Hitze und hoher Lichtintensität.

**CAM-Pflanzen** (Crassulaceen-Säurestoffwechsel: Kakteen, Ananas, Agave):
**Zeitliche Trennung**: Stomata öffnen nur **nachts** (weniger Wasserverlust!) → CO₂ wird als Malat in der Vakuole gespeichert. **Tagsüber**: Stomata geschlossen, Malat wird decarboxyliert → CO₂ für Calvin-Zyklus. Extreme Anpassung an Trockenheit.

> **Merke:** C3 = Standard (RuBisCO direkt). C4 = räumlich getrennt (Mais: Mesophyll → Bündelscheide). CAM = zeitlich getrennt (Kakteen: CO₂ nachts fixiert, tagsüber Calvin). Alle nutzen letztlich den Calvin-Zyklus!

---

## Rechenbeispiele

**Beispiel 1 — Bruttogleichung balancieren:** 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Überprüfen: C: 6 = 6 ✓; H: 12 = 12 ✓; O: 6×2 + 6×1 = 18 links; 6×2 + 6×1 = 18 rechts? Nein: rechts 6+12 = 18 ✓. Die Gleichung ist ausgeglichen.

**Beispiel 2 — O₂-Herkunft:** Markierungsexperiment mit ¹⁸O. Wenn man H₂¹⁸O verwendet → der freigesetzte O₂ ist ¹⁸O₂. Wenn man C¹⁸O₂ verwendet → ¹⁸O erscheint in der Glucose, nicht im O₂. **Beweis: O₂ stammt aus Wasser.**`,
    merksätze: [
      "Chloroplast: Doppelmembran, Thylakoidmembran (Lichtreaktion), Stroma (Calvin-Zyklus). Endosymbiontentheorie!",
      "PS II spaltet Wasser → O₂ frei! PS I liefert NADPH. II vor I im Elektronenfluss (historische Nummerierung).",
      "Calvin-Zyklus: RuBisCO fixiert CO₂ an RuBP (C5) → 2 × C3. 6 CO₂ → 1 Glucose. RuBisCO = häufigstes Protein der Erde.",
      "Bruttogleichung: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Umkehrung der Zellatmung!",
      "O₂ stammt aus der Photolyse von H₂O — NICHT aus CO₂.",
      "C3 = Standard; C4 = räumlich getrennt (Mais, Hirse); CAM = zeitlich getrennt (Kakteen, Ananas).",
      "Dunkelreaktion ist lichtunabhängig, aber braucht ATP + NADPH aus der Lichtreaktion.",
    ],
    lernziele: [
      "Den Aufbau des Chloroplasten beschreiben und die Endosymbiontentheorie begründen.",
      "Lichtreaktion und Calvin-Zyklus lokalisieren und ihre Produkte benennen.",
      "Die Bruttogleichung der Photosynthese aufstellen und mit der Zellatmung vergleichen.",
      "Erklären, warum der freigesetzte O₂ aus Wasser und nicht aus CO₂ stammt.",
      "C3-, C4- und CAM-Pflanzen unterscheiden und die jeweiligen Vorteile benennen.",
    ],
    sections: [
      {
        heading: "Chloroplasten und Lichtreaktion",
        text: "Chloroplasten besitzen eine Doppelmembran und enthalten Thylakoide (gestapelt zu Grana) sowie Stroma. Die Lichtreaktion findet in der Thylakoidmembran statt: PS II spaltet Wasser (Photolyse → O₂), Elektronen durchlaufen die Transportkette, PS I bildet NADPH, ATP entsteht durch Chemiosmose. Die Parallele zu Mitochondrien ist frappierend: Thylakoidmembran ≙ innere Mitochondrienmembran, Stroma ≙ Matrix.",
        merksatz:
          "PS II: H₂O → O₂ + H⁺ + e⁻. PS I: NADP⁺ + H⁺ + e⁻ → NADPH. ATP-Synthase: Chemiosmose wie in Mitochondrien.",
      },
      {
        heading: "Calvin-Zyklus und CO₂-Fixierung",
        text: "Im Stroma fixiert RuBisCO CO₂ an RuBP (C5) → 2 × 3-PGA (C3). ATP und NADPH aus der Lichtreaktion reduzieren C3 zu G3P. 5 von 6 G3P regenerieren RuBP, 1 G3P ist Nettogewinn. Für 1 Glucose: 6 Calvin-Zyklen, 18 ATP, 12 NADPH. RuBisCO ist langsam und kann auch O₂ fixieren (Photorespiration).",
        merksatz:
          "RuBisCO: CO₂ + RuBP → 2 × C3. 6 CO₂ → 1 Glucose. Calvin = Fixierung + Reduktion + Regeneration.",
      },
      {
        heading: "C3/C4/CAM und Photorespiration",
        text: "C3-Pflanzen nutzen RuBisCO direkt, verlieren bei Hitze durch Photorespiration. C4-Pflanzen (Mais) trennen räumlich: PEP-Carboxylase in Mesophyllzellen, Calvin-Zyklus in Bündelscheidenzellen. CAM-Pflanzen (Kakteen) trennen zeitlich: CO₂ nachts als Malat gespeichert, tagsüber für Calvin-Zyklus freigesetzt.",
        merksatz:
          "C3: RuBisCO direkt → Photorespiration. C4: PEP-Carboxylase + räumliche Trennung. CAM: zeitliche Trennung (nachts CO₂, tags Calvin).",
      },
    ],
    diagram: "photosynthesis-z-scheme",
    altfrage: {
      text: "Welche Aussage zur Photosynthese ist richtig?",
      options: [
        { id: "a", text: "Der freigesetzte O₂ stammt aus der Spaltung von CO₂." },
        { id: "b", text: "Die Lichtreaktion findet im Stroma des Chloroplasten statt." },
        {
          id: "c",
          text: "RuBisCO fixiert CO₂ im Calvin-Zyklus und ist das häufigste Protein der Erde.",
        },
        { id: "d", text: "C4-Pflanzen öffnen ihre Stomata ausschließlich nachts." },
        { id: "e", text: "Photosystem I (P700) spaltet Wasser und setzt Sauerstoff frei." },
      ],
      correctOptionId: "c",
      explanation:
        "**RuBisCO** (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase) katalysiert die CO₂-Fixierung im Calvin-Zyklus und macht ca. 50 % des Blattproteins aus — es ist das häufigste Protein der Erde. A ist falsch: O₂ stammt aus der Photolyse von H₂O (PS II). B ist falsch: Lichtreaktion = Thylakoidmembran. D beschreibt CAM-Pflanzen, nicht C4. E ist falsch: PS II (P680) spaltet Wasser, nicht PS I.",
    },
    klinischerBezug:
      "Die Photosynthese ist die Grundlage allen aeroben Lebens: Sie produziert den Sauerstoff, den unsere Atmungskette als finalen Elektronenakzeptor benötigt, und fixiert den Kohlenstoff, der über die Nahrungskette zum Menschen gelangt. In der Umweltmedizin ist der Rückgang der Photosynthese-Kapazität (Entwaldung, Algensterben) mit dem Anstieg atmosphärischen CO₂ und dem Klimawandel verknüpft. Cyanobakterien-Toxine (Microcystine) können bei Wasserblüten zu Leberversagen führen — ein direkter medizinischer Bezug zu photosynthetischen Organismen.",
    selfTest: [
      {
        question: "Wo findet die Lichtreaktion der Photosynthese statt?",
        options: [
          "Im Stroma des Chloroplasten",
          "In der Thylakoidmembran des Chloroplasten",
          "In der äußeren Chloroplastenmembran",
          "Im Zytoplasma der Pflanzenzelle",
          "In der Mitochondrien-Matrix",
        ],
        correctIndex: 1,
        explanation:
          "Die Lichtreaktion findet in der Thylakoidmembran statt. Dort sitzen die Photosysteme I und II, die Elektronentransportkette und die ATP-Synthase. Das Stroma ist der Ort des Calvin-Zyklus (Dunkelreaktion). Die Parallele zu Mitochondrien: Lichtreaktion = Thylakoidmembran ≙ Atmungskette = innere Mitochondrienmembran.",
        hints: [
          "Die Photosysteme sitzen in einer Membran — welcher?",
          "Stroma = Calvin-Zyklus, Thylakoid = Lichtreaktion",
        ],
        difficulty: 1,
        tags: ["photosynthese", "lichtreaktion", "thylakoid", "chloroplast"],
      },
      {
        question: "Woher stammt der bei der Photosynthese freigesetzte Sauerstoff (O₂)?",
        options: [
          "Aus der Spaltung von CO₂",
          "Aus der Spaltung von H₂O (Photolyse) im Photosystem II",
          "Aus der ATP-Synthase",
          "Aus der Reduktion von NADP⁺",
          "Aus dem Calvin-Zyklus im Stroma",
        ],
        correctIndex: 1,
        explanation:
          "Der freigesetzte O₂ stammt aus der Photolyse des Wassers im PS II: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Dies wurde durch Isotopenexperimente mit ¹⁸O-markiertem Wasser bewiesen. Das CO₂ liefert den Kohlenstoff für die Glucose, nicht den Sauerstoff. Häufiger Irrtum: O₂ komme aus CO₂.",
        hints: [
          "Isotopen-Markierung: ¹⁸O im Wasser → ¹⁸O₂",
          "PS II spaltet Wasser — was entsteht?",
        ],
        difficulty: 1,
        tags: ["photolyse", "sauerstoff", "photosystem-ii", "wasser"],
      },
      {
        question:
          "Welches Enzym fixiert CO₂ im Calvin-Zyklus und gilt als das häufigste Protein der Erde?",
        options: [
          "PEP-Carboxylase",
          "ATP-Synthase",
          "RuBisCO (Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase)",
          "NADP⁺-Reduktase",
          "Phosphofructokinase-1",
        ],
        correctIndex: 2,
        explanation:
          "RuBisCO katalysiert die CO₂-Fixierung im Calvin-Zyklus: CO₂ + Ribulose-1,5-bisphosphat (C5) → 2 × 3-Phosphoglycerat (C3). Es macht ca. 50 % des Blattproteins aus und ist das häufigste Protein der Erde. PEP-Carboxylase fixiert CO₂ bei C4-Pflanzen (nicht im Calvin-Zyklus direkt). RuBisCO kann auch O₂ fixieren → Photorespiration (unerwünscht).",
        hints: [
          "Das Enzym heißt auch 'Carboxylase' — was sagt das über seine Funktion?",
          "Calvin-Zyklus: CO₂ wird an ein C5-Molekül fixiert",
        ],
        difficulty: 2,
        tags: ["rubisco", "calvin-zyklus", "co2-fixierung", "enzym"],
      },
      {
        question: "Welche Aussage zu C4-Pflanzen ist korrekt?",
        options: [
          "C4-Pflanzen nutzen keinen Calvin-Zyklus",
          "C4-Pflanzen fixieren CO₂ zunächst in Mesophyllzellen durch PEP-Carboxylase, dann läuft der Calvin-Zyklus in Bündelscheidenzellen",
          "C4-Pflanzen öffnen ihre Stomata nur nachts",
          "C4-Pflanzen sind typisch für kalte Klimazonen",
          "C4-Pflanzen haben keine Photorespiration, weil sie kein RuBisCO besitzen",
        ],
        correctIndex: 1,
        explanation:
          "C4-Pflanzen (Mais, Zuckerrohr, Hirse) nutzen eine räumliche Trennung: PEP-Carboxylase fixiert CO₂ in Mesophyllzellen als Oxalacetat (C4). Dieses wird als Malat in Bündelscheidenzellen transportiert, dort wird CO₂ freigesetzt → Calvin-Zyklus mit hoher CO₂-Konzentration → kaum Photorespiration. C4-Pflanzen besitzen sehr wohl RuBisCO (in den Bündelscheidenzellen). Nachts-Öffnung der Stomata = CAM, nicht C4.",
        hints: [
          "C4 = räumliche Trennung zwischen zwei Zelltypen",
          "PEP-Carboxylase fixiert CO₂ → C4-Säure → Transport → Calvin-Zyklus",
        ],
        difficulty: 2,
        tags: ["c4-pflanze", "pep-carboxylase", "photorespiration", "mais"],
      },
      {
        question: "Wie lautet die Bruttogleichung der Photosynthese?",
        options: [
          "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
          "6 CO₂ + 12 H₂O → C₆H₁₂O₆ + 6 O₂ + 6 H₂O",
          "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
          "CO₂ + H₂O → CH₂O + O₂",
          "6 CO₂ + 6 O₂ → C₆H₁₂O₆ + 6 H₂O",
        ],
        correctIndex: 2,
        explanation:
          "Die Bruttogleichung lautet: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Option A ist die Zellatmung (Umkehrung!). Option B ist zwar korrekt balanciert (die 'ausführliche' Gleichung), aber die vereinfachte Bruttogleichung (Option C) ist Standard. Option D ist die vereinfachte Formel für 1 CO₂ (nicht falsch, aber nicht die Standardform). Option E hat O₂ auf der falschen Seite.",
        hints: [
          "Photosynthese verbraucht CO₂ und H₂O, produziert Glucose und O₂",
          "6 Kohlenstoff für 1 Glucose (C₆H₁₂O₆)",
        ],
        difficulty: 1,
        tags: ["bruttogleichung", "photosynthese", "glucose", "sauerstoff"],
      },
      {
        question:
          "Welche Gemeinsamkeit haben Chloroplasten und Mitochondrien, die die Endosymbiontentheorie stützt?",
        options: [
          "Beide besitzen eine einfache Membran",
          "Beide haben eigene ringförmige DNA und 70S-Ribosomen",
          "Beide kommen nur in Pflanzenzellen vor",
          "Beide nutzen FADH₂ als primären Elektronendonor",
          "Beide haben Thylakoide",
        ],
        correctIndex: 1,
        explanation:
          "Sowohl Chloroplasten als auch Mitochondrien besitzen eigene ringförmige DNA (wie Bakterien), 70S-Ribosomen (bakterientypisch, nicht 80S wie eukaryotische Ribosomen) und eine Doppelmembran. Dies stützt die Endosymbiontentheorie: Beide waren ursprünglich freie Prokaryoten (Cyanobakterium bzw. aerobes Bakterium), die von einer Wirtszelle aufgenommen wurden. Mitochondrien kommen in fast allen Eukaryoten vor (nicht nur Pflanzen). Thylakoide haben nur Chloroplasten.",
        hints: [
          "Beide Organellen haben Merkmale von Bakterien — welche?",
          "70S-Ribosomen sind bakterientypisch, 80S sind eukaryotisch",
        ],
        difficulty: 2,
        tags: ["endosymbiontentheorie", "chloroplast", "mitochondrium", "dna"],
      },
    ],
  },
];
