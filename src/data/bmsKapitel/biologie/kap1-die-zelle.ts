// @ts-nocheck
import type { Kapitel } from "../types";

export const bioKap1: Kapitel = {
  id: "bio-kap1",
  title: "Zellbiologie — Aufbau & Organellen",
  subject: "biologie",
  icon: "🔬",
  estimatedTime: "180 min",
  enhancedFormatting: true,
  unterkapitel: [
    // ─── UK1 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-01",
      title: "Kennzeichen des Lebens und Systembiologie",
      imageUrl: "/images/bms/bio-tierzelle.jpg",
      imageCaption: "Abb.: Aufbau einer tierischen Zelle mit Organellen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Kennzeichen des Lebens",
        "Stoffwechsel",
        "Reizbarkeit",
        "Fortpflanzung",
        "Wachstum",
        "Homöostase",
        "Evolution",
        "Zelltheorie",
        "Emergenz",
        "Systembiologie",
        "Negative Rückkopplung",
      ],
      content: `## Die sieben Kennzeichen des Lebens

Kein einzelnes Merkmal allein definiert Leben — erst ihr Zusammenspiel kennzeichnet ein lebendes System:

1. **Stoffwechsel** (Metabolismus): Chemische Reaktionen zum Aufbau (Anabolismus) und Abbau (Katabolismus) körpereigener Stoffe. Treibstoff ist **ATP** (Adenosintriphosphat, die universelle Energiewährung jeder Zelle) — ohne ATP keine Arbeit in der Zelle.

2. **Reizbarkeit**: Wahrnehmung von Umweltreizen und gezielte Reaktion — über Rezeptoren, Nervenleitungen und Signalkaskaden (mehrstufige Signalweiterleitungswege). Beispiel: Nervenzelle feuert bei Berührung; Immunzelle reagiert auf ein Pathogen (Krankheitserreger).

3. **Fortpflanzung**: Weitergabe genetischer Information — sexuell (mit Rekombination, erhöht Vielfalt) oder asexuell (genetisch identische Kopien). Einzigartig für Lebewesen.

4. **Wachstum und Entwicklung**: Zellvermehrung durch Zellteilung und differentielle Genexpression. Aus einer einzelnen befruchteten Eizelle entstehen mehr als 200 verschiedene Zelltypen.

5. **Evolution**: Anpassung an die Umwelt über Generationen durch Mutation, Rekombination und natürliche Selektion. Beispiel: Antibiotikaresistenz bei Bakterien entsteht genau so.

6. **Bewegung**: Aktive Ortsveränderung (Flagellen (Geißeln zur Fortbewegung), Muskelkontraktion) oder interne Bewegung (Vesikelransport, Chromosomenverteilung bei Zellteilung).

7. **Homöostase**: Aktive Aufrechterhaltung innerer Gleichgewichte (pH, Temperatur, Blutzucker, Osmolarität) trotz schwankender Außenbedingungen — über Regelkreise. Das für die Medizin wichtigste Kennzeichen.

> **Merke:** **StReForWaEvoBeHo**: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase

{{DIAGRAM:animal-cell}}

{{IMAGE}}

---

## Homöostase und Rückkopplung


Homöostase bedeutet: Der Körper hält Parameter wie Blutzucker, Körpertemperatur oder Blut-pH in engen Grenzen — aktiv und unabhängig von äußeren Schwankungen. Das Prinzip dahinter ist die **negative Rückkopplung** (Feedback-Regelung): Der Effekt **wirkt dem Auslöser entgegen** und stabilisiert so den Sollwert.

**Ablauf:**
1. **Sensor** misst den aktuellen Wert (z.B. Blutzucker = 8 mmol/L)
2. Messwert wird mit **Sollwert** verglichen (z.B. 4–6 mmol/L → zu hoch!)
3. **Korrekturreaktion** wird ausgelöst (Insulin wird ausgeschüttet)
4. **Effekt wirkt dem Auslöser entgegen** → Blutzucker sinkt zurück zum Sollwert

**Weitere Beispiele negativer Rückkopplung:**
- Körpertemperatur: Temp ↑ → Schwitzen + Vasodilatation (Gefäßerweiterung) → Temp ↓
- Schilddrüsenachse: T3/T4 (Schilddrüsenhormone) ↑ → TSH (Thyreoidea-stimulierendes Hormon) ↓ (hypothalamo-hypophysäre Hemmung)
- Blutdruck: Druck ↑ → Barorezeptoren (Drucksensoren in Gefäßwänden) → Parasympathikus (beruhigender Teil des Nervensystems) → Herzfrequenz ↓

**Positive Rückkopplung** bedeutet: Der Effekt **verstärkt** den ursprünglichen Reiz — sinnvoll für schnelle “Alles-oder-Nichts”-Reaktionen:
- **Blutgerinnung**: Thrombin bildet → aktiviert mehr Thrombin
- **Wehen**: Oxytocin → Kontraktion → mehr Oxytocin → stärkere Kontraktion
- **Aktionspotential**: Na⁺-Einstrom → Depolarisation → mehr Na⁺-Kanäle öffnen

**Klinisch — Homöostasestörung:** Diabetes mellitus Typ 2: Insulinresistenz → der Regelkreis versagt → chronische Hyperglykämie (dauerhaft erhöhter Blutzucker) → Proteinglykation (Zuckeranlagerung an Proteine; HbA1c als Laborparameter) → Gefäßschäden → Retinopathie (Netzhautschädigung), Nephropathie (Nierenschädigung), Neuropathie (Nervenschädigung).

> **Merke:** Negative Rückkopplung = stabilisiert (Homöostase). Positive Rückkopplung = verstärkt für Alles-oder-Nichts-Effekte (Blutgerinnung, Wehen, Aktionspotential).

---

## Viren — ein Grenzfall des Lebens


Viren zeigen nur einige Kennzeichen des Lebens, andere fehlen vollständig:

| Kennzeichen | Virus | Lebewesen |
|---|---|---|
| Stoffwechsel | ✗ (kein eigenständiger Metabolismus) | ✓ |
| Reizbarkeit | ✗ | ✓ |
| Fortpflanzung | ✓ (in Wirtszellen) | ✓ |
| Wachstum | ✗ | ✓ |
| Evolution | ✓ (Antigendrift (schrittweise Mutation der Oberflächenproteine), Antigenshifts (plötzlicher Austausch ganzer Gensegmente)) | ✓ |
| Bewegung | ✗ | ✓ |
| Zellstruktur | ✗ (keine Zelle, keine Ribosomen) | ✓ |

**Fazit:** Viren sind **obligat intrazelluläre Parasiten** — das heißt: Sie können nur **innerhalb** einer Wirtszelle existieren und vermehren; sie kapern deren Stoffwechsel. Außerhalb einer Wirtszelle sind sie metabolisch inaktiv.

**Klinische Konsequenz:** Da Viren keine Zellwand, keine eigenen Ribosomen und keinen eigenen Stoffwechsel haben, wirken klassische Antibiotika (die auf Bakterienstrukturen zielen) nicht. Antivirale Therapien müssen selektiv virale Strukturen angreifen (z.B. HIV-Reverse-Transkriptase (Enzym zur Umschreibung von RNA in DNA), Influenza-Neuraminidase (Enzym zur Virusfreisetzung)).

> **Merke:** Viren: Fortpflanzung ✓, Evolution ✓ — aber kein Stoffwechsel, keine Zellstruktur ✗ → Grenzfall; kein Ansprechen auf Antibiotika.

---

## Emergenz und hierarchische Organisation


{{DIAGRAM:plant-vs-animal-cell}}

Leben ist hierarchisch aufgebaut — auf jeder Ebene entstehen neue Eigenschaften, die die Ebene darunter nicht hat:

**Atom → Molekül → Organell → Zelle → Gewebe → Organ → Organsystem → Organismus**

Dieses Phänomen nennt sich **Emergenz** (von lat. *emergere* = hervorkommen): Das Ganze ist mehr als die Summe seiner Teile — die neuen Eigenschaften „kommen hervor”, wenn man die nächsthöhere Ebene betrachtet.
- Keine einzelne Nervenzelle denkt — aber das Gehirn (Milliarden vernetzte Neuronen) denkt
- Kein einzelner Herzmuskel pumpt Blut — aber das Herzorgan pumpt
- Keine einzelne Immunzelle schützt vollständig — aber das Immunsystem schützt

**Für die Medizin bedeutet das:** Krankheiten können auf verschiedenen Ebenen entstehen:

- Molekülebene: Genmutation (Sichelzellanämie, Krebs)
- Zellebene: Infektionen, Apoptosedefekte (Apoptose = programmierter Zelltod)
- Gewebeebene: Fibrose (krankhafte Bindegewebsvermehrung), Atherosklerose (Arterienverkalkung)
- Systemebene: Sepsis (Blutvergiftung), Herzversagen`,
      lernziele: [
        "Die sieben Kennzeichen des Lebens benennen, erläutern und mit klinischen Beispielen verknüpfen",
        "Den Begriff Emergenz im Kontext der Systembiologie präzise erklären und Beispiele nennen",
        "Homöostase und negative Rückkopplung am Beispiel des Blutzuckers und der Körpertemperatur beschreiben",
        "Den Unterschied zwischen Reduktionismus und systemischem Denken in der Biologie erläutern",
      ],
      sections: [],
      merksätze: [
        "StReForWaEvoBeHo: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase.",
        "Positive Rückkopplung verstärkt – Blutgerinnung, Wehen, Aktionspotential sind Beispiele physiologischer positiver Rückkopplung.",
        "Viren erfüllen nicht alle Kennzeichen des Lebens: kein eigenständiger Stoffwechsel, keine Zellstruktur.",
        "Diabetes mellitus = Homöostasestörung des Blutzuckerregelkreises (Typ 1: Insulinmangel, Typ 2: Insulinresistenz).",
        "ATP ist die universelle Energiewährung des Lebens – ein Mensch produziert täglich sein Körpergewicht daran.",
        "Systembiologie verbindet Genomik, Proteomik und Metabolomik zu einem integrativen Verständnis des Lebens.",
      ],
      klinischerBezug:
        "Diabetes mellitus Typ 2 ist die prototypische Homöostase-Störung: Der Blutzuckerregelkreis versagt durch Insulinresistenz und relative Insulininsuffizienz. Die Folge ist chronische Hyperglykämie mit Glykation von Proteinen (HbA1c als Laborparameter), Endothelschäden und Mikroangiopathie. Klinische Konsequenzen: diabetische Retinopathie (häufigste Erblindungsursache im Erwachsenenalter), Nephropathie (häufigste Ursache terminaler Niereninsuffizienz), Polyneuropathie und kardiovaskuläre Erkrankungen. Systembiologisches Denken hat hier zur Entwicklung personalisierter Therapieansätze (CGM, Insulinpumpen, SGLT2-Inhibitoren mit kardioprotektiver Wirkung) geführt.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Warum gelten Viren nicht als Lebewesen im klassischen Sinne?",
        answer:
          "Viren zeigen zwar Fortpflanzung und Evolution, besitzen aber keinen eigenständigen Stoffwechsel und keine Zellstruktur. Sie sind auf den Stoffwechsel einer Wirtszelle angewiesen, um sich zu replizieren. Da sie nicht alle Kennzeichen des Lebens erfüllen – insbesondere keinen autonomen Metabolismus – werden sie als Grenzfall zwischen belebter und unbelebter Welt betrachtet.",
      },
      selfTest: [
        {
          question: "Welches der folgenden Merkmale ist KEIN Kennzeichen des Lebens?",
          options: [
            "Stoffwechsel",
            "Kristallisation",
            "Reizbarkeit",
            "Fortpflanzung",
            "Homöostase",
          ],
          correctIndex: 1,
          explanation:
            "Kristallisation ist ein physikalisch-chemischer Prozess, der auch bei unbelebter Materie auftritt (z.B. Salzkristalle, Schneeflocken). Alle anderen Optionen – Stoffwechsel, Reizbarkeit, Fortpflanzung und Homöostase – sind echte Kennzeichen des Lebens. Die sieben Kennzeichen sind: Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung und Homöostase. Kristalle wachsen zwar, aber sie zeigen keinen Metabolismus, keine Reizbarkeit und keine Fortpflanzung im biologischen Sinne.",
          hints: [
            "Überlege: Kann auch unbelebte Materie diese Eigenschaft zeigen?",
            "Schnee und Salz können kristallisieren – aber sie leben nicht.",
          ],
          difficulty: 1,
          tags: ["kennzeichen des lebens", "stoffwechsel", "homöostase"],
        },
        {
          question: "Was versteht man unter Emergenz in der Systembiologie?",
          options: [
            "Den Abbau komplexer Strukturen in einfachere Bestandteile",
            "Die Entstehung neuer Eigenschaften auf höherer Organisationsebene",
            "Die Fähigkeit von Zellen, sich zu teilen",
            "Den Energietransfer zwischen Zellen",
            "Die Mutation von Genen durch Umwelteinflüsse",
          ],
          correctIndex: 1,
          explanation:
            "Emergenz bezeichnet die Entstehung neuer Eigenschaften auf höherer Organisationsebene, die aus den Eigenschaften der einzelnen Komponenten nicht direkt vorhersagbar sind. Bewusstsein ist eine emergente Eigenschaft des Gehirns – keine einzelne Nervenzelle denkt. Krebs ist emergent aus dysregulierten Signalnetzwerken. Emergenz ist das Gegenteil von Reduktionismus (Option A) und erklärt, warum biologische Systeme mehr sind als die Summe ihrer Teile.",
          hints: [
            "Das Ganze ist mehr als die Summe seiner Teile.",
            "Kann eine einzelne Nervenzelle denken?",
          ],
          difficulty: 2,
          tags: ["emergenz", "systembiologie", "organisationsebene"],
        },
        {
          question: "Welche Art der Rückkopplung hält die Homöostase aufrecht?",
          options: [
            "Positive Rückkopplung",
            "Nullrückkopplung",
            "Negative Rückkopplung",
            "Laterale Inhibition",
            "Vorwärtskopplung",
          ],
          correctIndex: 2,
          explanation:
            'Negative Rückkopplung ist der zentrale Mechanismus der Homöostase. Der Effekt wirkt dem auslösenden Reiz entgegen und führt das System zurück zum Sollwert. Beispiel: Hoher Blutzucker → Insulin → Blutzucker sinkt → weniger Insulin. Positive Rückkopplung (Option A) verstärkt dagegen den ursprünglichen Reiz – Beispiele: Wehen, Blutgerinnung, Aktionspotential. Positive Rückkopplung ist physiologisch sinnvoll, wenn ein schnelles "Alles-oder-Nichts"-Signal erwünscht ist.',
          hints: [
            "Negativ bedeutet: Der Effekt wirkt dem Auslöser entgegen.",
            "Thermostat-Prinzip: Zu warm → Kühlung einschalten.",
          ],
          difficulty: 1,
          tags: ["homöostase", "rückkopplung", "negative rückkopplung"],
        },
        {
          question: "Auf welcher Ebene der biologischen Hierarchie sind Gewebe angesiedelt?",
          options: [
            "Zwischen Molekülen und Organellen",
            "Zwischen Organellen und Zellen",
            "Zwischen Zellen und Organen",
            "Zwischen Organen und Organsystemen",
            "Zwischen Organsystemen und Organismen",
          ],
          correctIndex: 2,
          explanation:
            "Die hierarchische Organisation lautet: Atome → Moleküle → Organellen → Zellen → Gewebe → Organe → Organsysteme → Organismus. Gewebe bestehen aus gleichartigen Zellen mit gemeinsamer Funktion (z.B. Epithelgewebe, Muskelgewebe). Auf jeder Ebene entstehen emergente Eigenschaften: Einzelne Muskelzellen kontrahieren, aber erst das Muskelgewebe erzeugt koordinierte Kraftentwicklung.",
          hints: [
            "Denke an die Stufenleiter: Zellen schließen sich zu ... zusammen.",
            "Skelettmuskeln bestehen aus vielen Muskelfasern (= spezialisierten Zellen).",
          ],
          difficulty: 1,
          tags: ["biologische hierarchie", "gewebe", "organe"],
        },
        {
          question: "Warum erfüllen Viren nicht alle Kennzeichen des Lebens?",
          options: [
            "Weil Viren keine Nukleinsäuren besitzen",
            "Weil Viren keinen eigenen Stoffwechsel haben",
            "Weil Viren sich nicht fortpflanzen",
            "Weil Viren keine Evolution durchlaufen",
            "Weil Viren zu klein sind",
          ],
          correctIndex: 1,
          explanation:
            "Viren besitzen keine Ribosomen, keine Mitochondrien und keine Enzyme für den Energiestoffwechsel. Sie können sich nur vermehren, indem sie den Stoffwechsel einer Wirtszelle kapern. Ohne Wirt sind sie metabolisch inaktiv. Da ein eigenständiger Stoffwechsel zu den grundlegenden Kennzeichen des Lebens gehört, gelten Viren als Grenzfall. Sie besitzen Nukleinsäuren (Option A falsch), pflanzen sich fort (C falsch) und unterliegen Evolution – Antigendrift bei Influenza ist ein klassisches Beispiel (D falsch).",
          hints: [
            "Was braucht ein Virus, um sich zu vermehren?",
            "Kann ein Virus außerhalb einer Wirtszelle Energie gewinnen?",
          ],
          difficulty: 2,
          tags: ["viren", "stoffwechsel", "kennzeichen des lebens"],
        },
      ],
    },

    // ─── UK2 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-02",
      title: "Prokaryoten vs. Eukaryoten",
      imageUrl: "/images/bms/bio-zellmembran-phospholipid.jpg",
      imageCaption:
        "Abb.: Phospholipid-Doppelschicht — Grundbaustein aller Zellmembranen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Prokaryoten",
        "Eukaryoten",
        "Bakterien",
        "Archäen",
        "Drei-Domänen-Modell",
        "Endosymbiontentheorie",
        "Peptidoglykan",
        "Gram-Färbung",
        "70S vs 80S Ribosomen",
        "Kompartimentierung",
        "Antibiotika-Zielstrukturen",
      ],
      content: `## Grundstruktur im Vergleich

Das definierendste Merkmal: Prokaryoten haben **keinen membranumschlossenen Zellkern**. Ihre DNA liegt als zirkuläres Chromosom frei im **Nukleoid** (ein definierter Bereich im Zytoplasma ohne Kernhülle). Eukaryoten haben echte Kerne mit Doppelmembran, Kernporen und linear verpackter DNA an Histonen (Verpackungsproteinen).

| Merkmal | Prokaryoten | Eukaryoten |
|---|---|---|
| Zellkern | Kein Kern (Nukleoid) | Membranumschlossener Kern |
| DNA | Zirkulär, keine Histone | Linear, Histone |
| Ribosomen | **70S** (30S + 50S) | **80S** (40S + 60S) |
| Membranorganellen | Keine (kein Mito, ER, Golgi) | Mitochondrien, ER, Golgi |
| Zellwand | Peptidoglykan (Bakterien) | Keine (Tiere); Cellulose (Pflanzen) |
| Zellteilung | Binäre Fission (einfache Zweiteilung) | Mitose / Meiose |
| Größe | 0,5–5 µm | 10–100 µm |
| Plasmide | Häufig (extra-chromosomale DNA) | Selten |

**Warum ist Kompartimentierung (Eukaryoten) ein Vorteil?** Räumliche Trennung von Reaktionen — Transkription im Kern, Translation im Zytoplasma — ermöglicht umfangreiche mRNA-Prozessierung (Spleißen (Herausschneiden nicht-codierender Abschnitte), 5'-Kappe, Poly-A-Schwanz) und feinere Regulation. Prokaryoten haben das nicht → ihre Gene haben keine Introns, keine RNA-Prozessierung.

{{DIAGRAM:prokaryote-vs-eukaryote}}

{{IMAGE}}

> **Merke:** Pro = kein Kern: Prokaryoten = Nukleoid (keine Membran), 70S, binäre Fission. Eukaryoten = echter Kern, 80S, Mitose.

---

## Zellwand und Gram-Färbung: klinisch unverzichtbar


Die **Gram-Färbung** ist eine einfache Schnellfärbung zur Unterscheidung von Bakterien und hat direkte Konsequenzen für die Antibiotikawahl:

**Gram-positive Bakterien** (Ergebnis: **violett/lila**):
- **Dicke Peptidoglykanschicht** (20–80 nm) außen
- Kein LPS, keine äußere Membran
- Beispiele: *Staphylococcus aureus*, *Streptococcus pneumoniae*, *Enterococcus*
- Gut zugänglich für Penicillin (PBP-Bindung direkt möglich)

**Gram-negative Bakterien** (Ergebnis: **rosa/rot**):
- Dünne Peptidoglykanschicht (2–7 nm) + **äußere Membran mit LPS** (Lipopolysaccharid)
- LPS = Endotoxin (bakterielles Gift in der Zellwand) → bei Bakteriämie (Bakterien im Blut) → TLR4-Aktivierung (Immunrezeptor) → Zytokin-Sturm (überschießende Entzündungsreaktion) → **septischer Schock**
- Beispiele: *E. coli*, *Salmonella*, *Pseudomonas*, *Neisseria meningitidis*
- Penicillin muss erst äußere Membran überwinden → schlechterer Zugang → häufiger resistent

**Peptidoglykan (Murein):** Ein Netzwerk aus Zuckerketten (N-Acetylglucosamin + N-Acetylmuraminsäure), quervernetzt durch kurze Peptide — es gibt der Bakterienzelle mechanische Festigkeit gegen osmotischen Druck. **LPS** (Lipopolysaccharid) kommt nur bei **Gram-negativen** Bakterien vor (in der äußeren Membran) und wirkt als **Endotoxin** (kann bei Bakteriämie septischen Schock auslösen).

> **Merke:** Gram-positiv (violett) = dicke Peptidoglykanschicht. Gram-negativ (rosa) = dünn + LPS-Außenmembran. LPS → septischer Schock!

---

## Ribosomen 70S vs. 80S: Grundlage der Antibiotikatherapie


Prokaryotische Ribosomen haben den **Sedimentationskoeffizienten** (Maß der Sinkgeschwindigkeit) **70S** (30S + 50S), eukaryotische **80S** (40S + 60S) — die Zahl beschreibt, wie schnell die Partikel in der **Ultrazentrifuge** (Hochgeschwindigkeitszentrifuge zur Trennung) sedimentieren. Wegen dieser **strukturellen Unterschiede** binden bestimmte Antibiotika nur an 70S-Ribosomen und hemmen so gezielt die bakterielle Proteinbiosynthese:

| Antibiotikum | Zielstruktur | Wirkung |
|---|---|---|
| Aminoglykoside (Gentamicin) | 30S-Untereinheit | Fehllesen der mRNA, Proteinsynthese gestört |
| Tetracycline | 30S-Untereinheit | Blockiert tRNA-Bindung |
| Makrolide (Erythromycin) | 50S-Untereinheit | Blockiert Translokation |
| Chloramphenicol | 50S-Untereinheit | Hemmt Peptidyltransferase |
| Linezolid | 50S-Untereinheit | Verhindert 70S-Assemblierung |

**Wichtige Ausnahme:** Mitochondrien haben **70S-Ribosomen** (Beweis für Endosymbiontentheorie). Deshalb kann **Chloramphenicol** in hohen Dosen die mitochondriale Proteinsynthese hemmen → aplastische Anämie durch Schädigung hämatopoetischer Vorläuferzellen.

> **Merke:** 70S (Pro) vs. 80S (Eu) = Antibiotika-Selektivität. Cave: Mitochondrien sind 70S → Chloramphenicol-Toxizität möglich!

---

## Endosymbiontentheorie: Woher kommen Mitochondrien?


Die **Endosymbiontentheorie** besagt: Vor ~1,5–2 Milliarden Jahren wurde ein α-Proteobakterium (aerobes Bakterium) von einer Urzelle aufgenommen — nicht verdaut, sondern als Endosymbiont integriert. Daraus wurden die **Mitochondrien**.

**5 Beweise:**
1. **Zirkuläre DNA:** Mitochondrien haben eigene zirkuläre DNA (mtDNA), wie Bakterien
2. **70S-Ribosomen:** Mitochondriale Ribosomen sind 70S (bakteriell), nicht 80S
3. **Doppelmembran:** Äußere Membran = ehemalige Wirtszellmembran; innere = bakterielle Membran
4. **Binäre Fission:** Mitochondrien teilen sich durch binäre Teilung, nicht durch Mitose
5. **Antibiotika-Empfindlichkeit:** Chloramphenicol hemmt mitochondriale Proteinsynthese (wie bei Bakterien)

**Besonderheiten der mtDNA:** Kodiert nur ~13 Proteine der Atmungskette; maternale Vererbung (Mitochondrien kommen aus dem Eizellzytoplasma); häufige Mutationsstellen → mitochondriale Erkrankungen (MELAS (Schlaganfall-ähnliche Episoden mit Laktatazidose), Leber-Optikusneuropathie (erbliche Sehnervenerkrankung)).

> **Merke:** Endosymbiontentheorie: 5 Belege = zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit. mtDNA = maternale Vererbung.

---

## Archäen — die dritte Domäne des Lebens


Das **Drei-Domänen-Modell** (Carl Woese, 1977, basierend auf 16S rRNA-Sequenzvergleichen) teilt das Leben in:
- **Bacteria** (Bakterien)
- **Archaea** (Archäen)
- **Eukarya** (Eukaryoten)

**Archäen sind Prokaryoten** (kein membranumschlossener Kern), aber biochemisch eigenständig:
- **Keine Peptidoglykan-Zellwand** → **Penicillin-resistent** (wichtig!)
- **Ether-Lipide** (Lipide mit Etherbindung statt Esterbindung) statt Ester-Lipide in Zellmembran (stabiler in Extrembedingungen)
- Genexpressionsapparat ähnelt Eukaryoten (**TATA-Box** (Promotorsequenz für Transkriptionsstart), Transkriptionsfaktoren)

**Extremophile** (Organismen in Extremlebensräumen)**:** Thermophile (hitzeliebend, bis 121°C), Halophile (salzliebend, gesättigte Salzlösungen), Methanogene (methanbildend, produzieren CH₄ im Darm und Sumpf)

> **Merke:** Archäen: Prokaryoten-Bau, aber kein Peptidoglykan → Penicillin-resistent. Dritte Domäne neben Bakterien und Eukaryoten.`,
      lernziele: [
        "Prokaryoten und Eukaryoten anhand von mindestens sieben Merkmalen unterscheiden",
        "Die Bedeutung der Ribosomengröße (70S vs. 80S) für die Antibiotikatherapie mit konkreten Beispielen erklären",
        "Die Endosymbiontentheorie und ihre fünf Hauptbeweise beschreiben",
        "Gram-positive und Gram-negative Bakterien in Zellwandaufbau und klinischer Bedeutung unterscheiden",
      ],
      sections: [],
      merksätze: [
        "Pro = kein Kern: Prokaryoten haben kein membranumschlossenes Nukleoplasma, die DNA liegt frei im Nukleoid.",
        "Endosymbiontentheorie: 5 Belege – zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit.",
        "Gram-positiv: dicke Peptidoglykan-Schicht, violett (Staph, Strep). Gram-negativ: LPS-Außenmembran, rosa (E. coli, Salmonella).",
        "Peptidoglykan (Murein): N-Acetylglucosamin + N-Acetylmuraminsäure + Peptidbrücken. Penicillin hemmt Quervernetzung.",
        "Mitochondrien = α-Proteobakterium-Endosymbiont; Chloroplasten = Cyanobakterium-Endosymbiont.",
        "Cave: Mitochondrien haben 70S-Ribosomen → Chloramphenicol in hoher Dosis → aplastische Anämie.",
      ],
      klinischerBezug:
        "Penicillin hemmt die Synthese der bakteriellen Peptidoglykan-Zellwand (PBP-Hemmung) – menschliche Zellen besitzen keine solche Zellwand und sind daher unempfindlich. Bei Gram-negativen Bakterien muss Penicillin die äußere Membran überwinden (schlechterer Zugang → Resistenzproblem). MRSA (Methicillin-resistenter Staphylococcus aureus) hat ein verändertes PBP2a, an das Beta-Laktame nicht binden. Therapie: Vancomycin, Linezolid, Daptomycin. LPS gram-negativer Bakterien aktiviert TLR4 auf Immunzellen → Cytokinausschüttung → septischer Schock. Therapie: antibiotische Eradikation, hämodynamische Stabilisierung (Noradrenalin), Organschutz.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient erhält Chloramphenicol. Warum ist dieses Antibiotikum für Prokaryoten toxisch, nicht aber für menschliche Zellen?",
        answer:
          "Chloramphenicol bindet spezifisch an die 50S-Untereinheit des prokaryotischen 70S-Ribosoms und blockiert die Peptidyltransferase-Reaktion. Menschliche 80S-Ribosomen (Untereinheiten: 40S + 60S) werden nicht gebunden. Da menschliche Mitochondrien jedoch 70S-Ribosomen besitzen, kann Chloramphenicol in hohen Dosen mitochondriale Toxizität verursachen – besonders in hämatopoetischen Vorläuferzellen (aplastische Anämie als seltene, aber schwere Nebenwirkung).",
      },
      selfTest: [
        {
          question: "Welches Merkmal unterscheidet Prokaryoten von Eukaryoten am grundlegendsten?",
          options: [
            "Prokaryoten haben keine DNA",
            "Prokaryoten besitzen keinen membranumschlossenen Zellkern",
            "Prokaryoten sind immer größer als Eukaryoten",
            "Prokaryoten haben keine Ribosomen",
            "Prokaryoten können sich nicht fortpflanzen",
          ],
          correctIndex: 1,
          explanation:
            "Das definierende Merkmal ist das Fehlen eines membranumschlossenen Zellkerns bei Prokaryoten. Die DNA liegt als zirkuläres Chromosom frei im Nukleoid. Prokaryoten haben sehr wohl DNA (A falsch) und Ribosomen (D falsch), sind aber typischerweise kleiner als Eukaryoten (C falsch) und pflanzen sich durch binäre Teilung fort (E falsch).",
          hints: [
            'Der Name gibt es bereits an: "Pro" = vor, "karyon" = Kern.',
            "Haben Bakterien einen Zellkern mit Membran?",
          ],
          difficulty: 1,
          tags: ["prokaryoten", "eukaryoten", "zellkern"],
        },
        {
          question: "Welche Ribosomengröße haben Prokaryoten?",
          options: [
            "80S (40S + 60S)",
            "60S (30S + 30S)",
            "70S (30S + 50S)",
            "100S (50S + 50S)",
            "50S (20S + 30S)",
          ],
          correctIndex: 2,
          explanation:
            "Prokaryotische Ribosomen haben einen Sedimentationskoeffizient von 70S, zusammengesetzt aus einer kleinen 30S- und einer großen 50S-Untereinheit. Eukaryotische Ribosomen sind 80S (40S + 60S). Sedimentationskoeffizienten addieren sich nicht linear. Diese Unterschiede sind die Zielstruktur zahlreicher Antibiotika: Aminoglykoside binden an 30S, Makrolide und Chloramphenicol an 50S.",
          hints: [
            "Prokaryoten haben kleinere Ribosomen als Eukaryoten.",
            "70S = 30S + 50S (Sedimentationskoeffizienten addieren sich nicht linear).",
          ],
          difficulty: 2,
          tags: ["ribosomen", "70S", "antibiotika"],
        },
        {
          question: "Aus welchem Material besteht die bakterielle Zellwand?",
          options: ["Zellulose", "Chitin", "Peptidoglykan (Murein)", "Kollagen", "Phospholipid"],
          correctIndex: 2,
          explanation:
            "Bakterielle Zellwände bestehen aus Peptidoglykan (auch Murein genannt), einem Netz aus Zuckerketten (N-Acetylglucosamin und N-Acetylmuraminsäure), die durch kurze Peptide quervernetzt sind. Penicillin hemmt genau diese Quervernetzung (PBP-Hemmung). Zellulose (A) ist Pflanzenzellwand, Chitin (B) Pilzzellwand, Kollagen (D) ein tierisches Strukturprotein, Phospholipide (E) bilden Membranen.",
          hints: [
            "Penicillin greift die Zellwand an – aus welchem Stoff besteht sie?",
            "Murein ist ein anderer Name für dasselbe Material.",
          ],
          difficulty: 2,
          tags: ["zellwand", "peptidoglykan", "penicillin"],
        },
        {
          question:
            "Welche der folgenden Eigenschaften belegt die Endosymbiontentheorie für Mitochondrien?",
          options: [
            "Mitochondrien befinden sich im Zellkern",
            "Mitochondrien besitzen eigene zirkuläre DNA und 70S-Ribosomen",
            "Mitochondrien synthetisieren alle ihre eigenen Proteine selbst",
            "Mitochondrien können Photosynthese betreiben",
            "Mitochondrien teilen sich durch Mitose",
          ],
          correctIndex: 1,
          explanation:
            "Die Endosymbiontentheorie wird durch mehrere Befunde gestützt: Mitochondrien besitzen eigene zirkuläre DNA (wie Bakterien), haben 70S-Ribosomen (nicht die eukaryotischen 80S), vermehren sich durch binäre Fission (nicht durch Mitose), sind von einer Doppelmembran umhüllt und sind empfindlich gegen bakterielle Antibiotika. Die mtDNA kodiert allerdings nur ~13 Proteine – der Rest wird von nukleärer DNA kodiert und importiert (C falsch).",
          hints: [
            "Was haben Mitochondrien mit Bakterien gemeinsam?",
            "Welche Ribosomgröße haben Bakterien?",
          ],
          difficulty: 2,
          tags: ["endosymbiontentheorie", "mitochondrien", "zirkuläre dna"],
        },
        {
          question: "Zu welcher Domäne gehören Archäen?",
          options: [
            "Bakterien",
            "Eukaryoten",
            "Sie bilden eine eigene Domäne (Archaea)",
            "Protisten",
            "Pilze",
          ],
          correctIndex: 2,
          explanation:
            "Das Leben ist in drei Domänen eingeteilt: Bacteria, Archaea und Eukarya (Carl Woese, 1977). Archäen sind Prokaryoten (kein membranumschlossener Kern), bilden aber eine eigenständige Domäne, die sich biochemisch deutlich von Bakterien unterscheidet (Ether-Lipide, kein Peptidoglykan). Archäen zeigen in der Genregulation und DNA-Replikation mehr Ähnlichkeit mit Eukaryoten als mit Bakterien.",
          hints: [
            "Carl Woese entdeckte auf Basis der rRNA-Sequenzanalyse, dass Archäen eigenständig sind.",
            "Drei Domänen des Lebens: Bacteria, Archaea, Eukarya.",
          ],
          difficulty: 2,
          tags: ["archäen", "drei-domänen-modell", "carl woese"],
        },
      ],
    },

    // ─── UK3 ────────────────────────────────────────────────────────────────
    // Zellmembran — Aufbau, Barriere und Identität (Transport im nächsten UK)
    {
      id: "bio-1-03",
      title: "Zellmembran — Aufbau, Barriere und Identität",
      imageUrl: "/images/bms/bio-zellmembran-bilayer.jpg",
      imageCaption: "Abb.: Phospholipid-Doppelschicht der Zellmembran (OpenStax, CC BY 4.0)",
      stichworte: [
        "Flüssig-Mosaik-Modell",
        "Phospholipid-Doppelschicht",
        "Membranproteine",
        "Cholesterin",
        "Membranfluidität",
        "Glykokalix",
        "Lipid-Rafts",
        "CFTR",
      ],
      content: `## Grundprinzip: Phospholipid-Doppelschicht

**Warum ist die Membran überhaupt eine Barriere — und für wen durchlässig?** Das lässt sich nur beantworten, wenn man weiß, woraus sie besteht. Deshalb zuerst der Aufbau.

Die Bausteine der Membran heißen **Phospholipide** — Fettmoleküle mit einem wasserfreundlichen „Kopf” und zwei wasserabweisenden „Schwänzen”. **Amphiphil** (griech.: beide Seiten liebend) bedeutet genau das: ein Teil des Moleküls ist wasseranziehend, der andere wasserabweisend.
- **Hydrophiler Kopf**: Phosphatgruppe + Glycerin + polarer Rest (z. B. Cholin) → wasserlöslich
- **Hydrophobe Schwänze**: zwei **Fettsäureketten** — die hydrophoben Ketten der Phospholipide; längere Kohlenstoffketten, die Fett aufbauen und wasserabweisend wirken

In wässriger Umgebung ordnen sich Phospholipide spontan an: Köpfe zum Wasser, Schwänze nach innen. So entsteht eine **Doppelschicht (Bilayer)**. Das ist energetisch günstig (hydrophober Effekt) und erklärt, warum sich Membranen von selbst bilden.

Weil das Innere der Doppelschicht aus Fettschwänzen besteht, ist die Membran **semipermeabel** (latein.: halbdurchlässig): Sie ist für manche Stoffe durchlässig, für andere nicht. Übersicht:

| Durchlässigkeit | Stoffe | Mechanismus |
|-----------------|--------|-------------|
| **Frei (ohne Protein)** | O₂, CO₂, Ethanol, Steroide, fettlösliche Vitamine (A, D, E, K) | Einfache Diffusion durch die Lipidschicht (O₂ braucht **kein** Transportprotein!) |
| **Via Kanal/Transporter** | Wasser (AQP = Aquaporine, Wasserkanäle), Ionen (Na⁺, K⁺, Ca²⁺, Cl⁻), Glucose (GLUT), Aminosäuren | Membranproteine: passiv (Kanäle, Carrier) oder aktiv (ATP, Na⁺-Gradient) |
| **Blockiert** | Geladene Ionen ohne Kanal | Hydrophobes Membraninneres + Hydrathülle der Ionen = hohe Energiebarriere |

{{DIAGRAM:membrane-transport}}

{{IMAGE}}

**Steroide** (z. B. Cortisol, Vitamin D) sind fettähnliche Moleküle und können die Lipidschicht daher gut durchqueren. Ionen dagegen sind geladen und von einer Wasserschicht umhüllt — der Eintritt in die fettige Membran wäre energetisch sehr ungünstig; dafür braucht die Zelle spezielle **Proteine** (Funktionsmoleküle aus Aminosäuren; Kanäle, Transporter), die im nächsten Abschnitt vorkommen.

> **Merke:** Phospholipide = amphiphil → Bilayer durch Selbstorganisation. Kleine unpolare Moleküle frei; Ionen und große polare Moleküle brauchen Proteine.

**Lipid-Asymmetrie (vertiefend):** Die beiden Schichten sind unterschiedlich zusammengesetzt — außen u. a. Phosphatidylcholin, Sphingomyelin, Glykolipide; innen Phosphatidylserin (PS), Phosphatidylethanolamin (PE). **Bei Apoptose** flippt PS nach außen → „Eat me”-Signal für Makrophagen → Clearance. Prüfungsrelevant: PS normalerweise innen; Flip = Apoptose.

---

## Membranfluidität: Cholesterin und Fettsäuren


**1. Cholesterin** — **Cholesterin** ist ein **Steroidlipid** (fettähnliches Molekül mit typischer Ringstruktur; bekannt z. B. als „Cholesterinspiegel” im Blut). In der Membran lagert es sich **zwischen** die Phospholipide ein und wirkt wie ein Puffer:
- **Hohe Temperatur:** Es begrenzt die Beweglichkeit der Fettsäureketten → verhindert übermäßige Verflüssigung.
- **Niedrige Temperatur:** Es verhindert zu dichte Packung → verhindert Erstarrung.
→ **Bidirektionaler Fluiditätspuffer** (zentral prüfungsrelevant).

**Vertiefend:** Cholesterin reichert sich in **Lipid-Rafts** (geordnete Membranbereiche, zusammen mit Sphingolipiden (Lipide mit Sphingosin-Grundgerüst)) an → Mikrodomänen, in denen Signalproteine konzentriert sind (z. B. GPCRs (G-Protein-gekoppelte Rezeptoren), GPI-verankerte Proteine (über Lipidanker an Außenseite befestigt)).

**2. Fettsäurezusammensetzung** — Die „Schwänze” der Phospholipide sind **Fettsäuren**: Kohlenstoffketten, die entweder **gesättigt** (nur Einfachbindungen, gerade Kette) oder **ungesättigt** (mit Doppelbindungen, dadurch Knicke) vorkommen. Das beeinflusst, wie dicht die Lipide packen:

| Typ | Struktur | Wirkung auf Fluidität | Beispiel |
|-----|----------|------------------------|----------|
| **Ungesättigt** (cis-Doppelbindung = Knick) | Keine enge Packung | **↑ Fluidität** | Ölsäure, DHA (Nervenzellen) |
| **Gesättigt** (gerade Kette) | Enges Packen | **↓ Fluidität** | Palmitinsäure, Stearinsäure (Butter fest) |

{{DIAGRAM:cell-membrane}}

> **Merke:** Cholesterin = Fluiditätspuffer in beide Richtungen. Ungesättigte Fettsäuren → mehr Fluidität; gesättigte → weniger.

---

## Membranproteine: integral vs. peripher


**Integrale (Transmembran-)Proteine:**
- Durchspannen die Lipiddoppelschicht mit **hydrophoben α-Helices**
- Nicht ohne Detergenzien (Lösungsmittel für Membranproteine) ablösbar
- **Funktionen:** Ionenkanäle (schnell, selektiv), Carrier/Transporter (z. B. GLUT, SGLT), Rezeptoren (z. B. Insulinrezeptor, GPCRs), Pumpen (z. B. Na⁺/K⁺-ATPase)

**Periphere Proteine:**
- Nur an der Oberfläche (innen oder außen), nicht durch die Membran
- Leichter ablösbar (ionische Wechselwirkungen)
- Verankerung z. B. GPI-Anker (außen), Myristylierung (innen)

> **Merke:** Integral = durch die Membran (Kanäle, Transporter, Rezeptoren, Pumpen). Peripher = nur an der Oberfläche.

**Klinisches Beispiel — CFTR und Mukoviszidose (zentral prüfungsrelevant):** Ein integrales Protein mit großer klinischer Bedeutung ist **CFTR** (Cystic Fibrosis Transmembrane Conductance Regulator) — ein **Cl⁻-Kanal**. Bei **Mukoviszidose** (zystische Fibrose, häufigste autosomal-rezessive Erbkrankheit) führt die Mutation **ΔF508** dazu, dass das Protein fehlgefaltet wird und nicht in die apikale Membran von Atemwegs- und Darmepithelzellen eingebaut wird. Folge: kein Cl⁻-Export → zu wenig Wasser im Schleim → **visköser Schleim** → chronische Infektionen (z. B. *Pseudomonas*) → Lungenversagen. CFTR ist ein **Kanal**, kein Transporter.

---

## Glykokalix: Zellerkennung und Schutz


Die **Glykokalix** (von griech. *glykys* = süß, *kalyx* = Hülle) ist die **Zuckerschicht** auf der Außenseite der Zellmembran — Kohlenhydratketten, die an **Glykoproteine** (Proteine mit angehängten Zuckern) und **Glykolipide** (Lipide mit angehängten Zuckern) gebunden sind. Funktionen: **Zellerkennung** (z. B. MHC/HLA (Gewebeverträglichkeitsantigene)), **Schutz** der Zelloberfläche (besonders bei Epithelien).

Ein klinisch wichtiges Beispiel für Glykokalix-Strukturen sind die **ABO-Blutgruppenantigene** — das wird im Kapitel Blut/Immunologie ausführlich behandelt.`,
      lernziele: [
        "Das Flüssig-Mosaik-Modell mit allen Komponenten (Phospholipide, Cholesterin, Membranproteine, Glykokalix) erklären",
        "Die Rolle von Cholesterin und Fettsäurezusammensetzung für die Membranfluidität beschreiben",
        "Integrale und periphere Membranproteine sowie Lipid-Rafts in Struktur und Funktion unterscheiden",
        "Klinische Konsequenzen von Membrananomalien (Mukoviszidose, Atherosklerose) und die Funktion der Glykokalix erläutern",
      ],
      sections: [],
      merksätze: [
        "Flüssig-Mosaik-Modell: Die Membran ist eine fluide Phospholipid-Doppelschicht, in der Proteine lateral beweglich eingebettet sind (Singer & Nicolson, 1972).",
        "Amphiphil = hydrophiler Kopf + hydrophobe Schwänze → spontane Selbstorganisation zur Doppelschicht.",
        "Cholesterin reguliert Fluidität bidirektional: Bei Wärme versteift es, bei Kälte verflüssigt es die Membran.",
        "Ungesättigte Fettsäuren (Doppelbindungen → Knicke) erhöhen Fluidität; gesättigte Fettsäuren (gerade Ketten) senken sie.",
        "Glykokalix = Zuckerschicht auf Außenseite (Zellerkennung, Schutz); Blutgruppenantigene sind Kohlenhydratstrukturen der Glykokalix.",
        "Lipid-Rafts: Cholesterin + Sphingolipide → geordnete Mikrodomänen → Konzentration von Signalproteinen.",
        'Phosphatidylserin-Flip-Flop bei Apoptose = "Eat me"-Signal für Makrophagen → phagozytäre Clearance.',
      ],
      klinischerBezug:
        "Statine (z.B. Atorvastatin) hemmen die HMG-CoA-Reduktase und senken den Blutcholesterinspiegel. Überschüssiges LDL-Cholesterin oxidiert und wird von Makrophagen als Schaumzellen gespeichert → Atherosklerose → Myokardinfarkt und Schlaganfall. Die ABO-Blutgruppenantigene sind Glykokalix-Strukturen (Kapitel Blut/Immunologie). CFTR-Mutationen (deltaF508) → Mukoviszidose: keine funktionsfähigen Cl⁻-Kanäle in der apikalen Membran von Atemwegs- und Darmepithel → visköser Schleim → chronische Pseudomonas-Infektionen → Lungenversagen.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Warum können Ionen wie Na+ und K+ die Lipiddoppelschicht nicht frei passieren?",
        answer:
          "Das Innere der Lipiddoppelschicht ist stark hydrophob (Fettsäureketten). Ionen wie Na+ und K+ sind geladen und von einer Hydrathülle aus Wassermolekülen umgeben. Der Übertritt in die hydrophobe Phase würde die Hydrathülle entfernen, was eine hohe Energiebarriere (>40 kJ/mol) darstellt. Deshalb benötigen Ionen spezifische Membranproteine – Ionenkanäle (selektiv, schnell) oder aktive Transporter (gegen Gradienten, ATP-verbrauchend) – um die Membran zu überqueren.",
      },
      selfTest: [
        {
          question: "Was beschreibt das Flüssig-Mosaik-Modell der Zellmembran?",
          options: [
            "Eine starre Phospholipidschicht mit fest verankerten Proteinen",
            "Eine fluide Phospholipid-Doppelschicht mit lateral beweglichen Proteinen",
            "Eine einzelne Lipidschicht mit Kohlenhydraten",
            "Ein Netzwerk aus Proteinfilamenten",
            "Eine Doppelmembran wie bei Mitochondrien",
          ],
          correctIndex: 1,
          explanation:
            'Das Flüssig-Mosaik-Modell (Singer & Nicolson, 1972) beschreibt die Membran als fluide Phospholipid-Doppelschicht, in der Proteine und Lipide lateral beweglich sind. "Flüssig" bezieht sich auf die Mobilität der Membrankomponenten (lateral diffusion, gemessen durch FRAP), "Mosaik" auf die heterogene Verteilung der Proteine. Die Membran ist nicht starr (A falsch) und besteht aus zwei Lipidschichten (nicht einer, C falsch). Lipid-Rafts sind jedoch geordnete Mikrodomänen innerhalb dieser Fluidität.',
          hints: [
            "Flüssig = die Membrankomponenten können sich seitlich bewegen.",
            "Mosaik = die verschiedenen Proteine ergeben wie Mosaiksteine ein Gesamtbild.",
          ],
          difficulty: 1,
          tags: ["flüssig-mosaik-modell", "zellmembran", "phospholipide"],
        },
        {
          question: "Welche Funktion hat Cholesterin in der Zellmembran?",
          options: [
            "Es bildet den Hauptbestandteil der Lipiddoppelschicht",
            "Es transportiert Ionen durch die Membran",
            "Es reguliert die Membranfluidität als bidirektionaler Puffer",
            "Es ist ein Membranrezeptor für Steroidhormone",
            "Es verbindet die Membran kovalent mit dem Zytoskelett",
          ],
          correctIndex: 2,
          explanation:
            "Cholesterin ist zwischen den Phospholipiden eingelagert und reguliert die Membranfluidität bidirektional. Bei hohen Temperaturen begrenzt es die Beweglichkeit der Fettsäureketten (verhindert übermäßige Verflüssigung); bei tiefen Temperaturen verhindert es die dichte Packung (verhindert Erstarrung). Cholesterin ist nicht der Hauptbestandteil (das sind Phospholipide, A falsch) und transportiert keine Ionen direkt (B falsch). Steroidhormone binden an intrazelluläre Kernrezeptoren, nicht an Cholesterin (D falsch).",
          hints: [
            "Cholesterin wirkt wie ein Temperaturpuffer für die Membran.",
            "Was passiert mit Butter bei verschiedenen Temperaturen?",
          ],
          difficulty: 2,
          tags: ["cholesterin", "membranfluidität", "puffereffekt"],
        },
        {
          question: "Was sind integrale Membranproteine?",
          options: [
            "Proteine, die nur an der Außenseite der Membran sitzen",
            "Proteine, die die Membran vollständig mit hydrophoben Helices durchspannen",
            "Proteine im Zytosol ohne Membrankontakt",
            "Proteine, die Phospholipide synthetisieren",
            "Proteine, die ausschließlich für den Zellkern bestimmt sind",
          ],
          correctIndex: 1,
          explanation:
            "Integrale Membranproteine (Transmembranproteine) durchspannen die Lipiddoppelschicht vollständig mit hydrophoben alpha-Helices (oder als beta-Barrel bei Porinen) und sind nicht ohne Detergenzien von der Membran zu lösen. Zu ihnen gehören Ionenkanäle, Transporter (GLUT, SGLT) und Rezeptoren (GPCRs mit 7 Transmembranhelices, Rezeptortyrosinkinasen). Periphere Proteine (Option A) sitzen nur an der Oberfläche und sind leichter ablösbar.",
          hints: [
            "Integral = vollständig eingebettet in die Membran.",
            "Transmembranproteine haben hydrophobe Helices im Membrankern.",
          ],
          difficulty: 2,
          tags: ["membranproteine", "transmembranproteine", "ionenkanäle"],
        },
        {
          question: "Welche Eigenschaft der Fettsäuren erhöht die Membranfluidität?",
          options: [
            "Hoher Sättigungsgrad (viele Einfachbindungen)",
            "Lange Kettenlänge",
            "Ungesättigte Fettsäuren mit cis-Doppelbindungen",
            "Hohe Cholesterinkonzentration bei tiefen Temperaturen",
            "Gesättigte kurzkettige Fettsäuren senken Fluidität",
          ],
          correctIndex: 2,
          explanation:
            "Ungesättigte Fettsäuren haben cis-Doppelbindungen, die zu einem Knick in der Kohlenstoffkette führen. Dieser Knick verhindert die dichte Packung der Fettsäureketten und erhöht die Fluidität. Gesättigte Fettsäuren (gerade Ketten) packen sich dicht und reduzieren Fluidität. Cholesterin (Option D) wirkt als Puffer in beide Richtungen. Lange Ketten (B) erhöhen generell die Packungsdichte und reduzieren Fluidität.",
          hints: [
            "Doppelbindungen (cis) erzeugen Knicke in der Fettsäurekette.",
            "Flüssige Pflanzenöle (viel ungesättigt) vs. feste Butter (gesättigt) – was ist der Unterschied?",
          ],
          difficulty: 2,
          tags: ["fettsäuren", "membranfluidität", "ungesättigt"],
        },
        {
          question: "Was ist die Funktion der Glykokalix?",
          options: [
            "ATP-Synthese an der Membranoberfläche",
            "Zellerkennung, Blutgruppenantigene und Immunschutz",
            "Transport von Ionen in die Zelle",
            "Direkte Verbindung der Zellmembran mit dem Kern",
            "Photosynthese in Pflanzenzellen",
          ],
          correctIndex: 1,
          explanation:
            'Die Glykokalix besteht aus Kohlenhydratketten auf der äußeren Oberfläche der Zellmembran (gebunden an Glykoproteine und Glykolipide). Sie ermöglicht Zellerkennung (z.B. Immunzellen erkennen körpereigene Zellen via MHC), trägt Blutgruppenantigene (ABO-System: Glykolipide auf Erythrozyten) und schützt die Zelloberfläche. Bei Apoptose flippt Phosphatidylserin auf die Außenseite der Membran → "Eat me"-Signal.',
          hints: [
            "Glykos = Zucker. Die Glykokalix ist eine Zuckerschicht auf der Zelloberfläche.",
            "Blutgruppen A, B, AB, 0 – worauf beruht dieser Unterschied?",
          ],
          difficulty: 2,
          tags: ["glykokalix", "blutgruppenantigene", "zellerkennung"],
        },
      ],
    },

    // ─── UK4 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-04",
      title: "Membrantransport — passiv und aktiv",
      imageUrl: "/images/bms/bio-diffusion.jpg",
      imageCaption: "Abb.: Diffusion durch eine semipermeable Membran (OpenStax, CC BY 4.0)",
      stichworte: [
        "Passiver Transport",
        "Einfache Diffusion",
        "Erleichterte Diffusion",
        "Osmose",
        "Tonizität",
        "Na⁺/K⁺-ATPase",
        "Primär aktiver Transport",
        "Sekundär aktiver Transport",
        "SGLT",
        "Herzglykoside",
      ],
      content: `## Passiver Transport — entlang des Gradienten, ohne ATP


**1. Einfache Diffusion (ohne Protein)**
Kleine, unpolare (lipophile, fettlösliche) Moleküle lösen sich in der Lipiddoppelschicht und diffundieren entlang des Konzentrationsgradienten. Beispiele: O2, CO2, Ethanol, Steroide, fettlösliche Vitamine (A, D, E, K).

**2. Erleichterte Diffusion (mit Membranprotein)**
Polare oder geladene Moleküle nutzen Proteine — weiterhin **entlang** des Gradienten, ohne ATP:

| Typ | Eigenschaft | Beispiele |
|-----|-------------|-----------|
| **Ionenkanäle** | Sehr schnell, selektiv, schaltbar (spannungs- oder ligandengesteuert) | Na+-, K+-, Ca2+-, Cl⁻-Kanäle |
| **Carrier/Transporter** | Langsamer, sättigbar (Kapazitätsgrenze) | GLUT1–4 (Glucose) |
| **Aquaporine (AQP)** | Nur Wasser | AQP2 in Niere (ADH-reguliert → Wasserrückresorption) |

> **Merke:** Passiv = immer entlang des Gradienten, kein ATP. Ionenkanäle schnell; Carrier sättigbar.

{{IMAGE}}

---

## Osmose und Tonizität

**Osmose:** Wasser diffundiert durch eine semipermeable Membran von der Seite mit **niedrigerer** **Osmolalität** zur Seite mit **höherer** Osmolalität. **Osmolalität** (Einheit: mosmol/kg) ist die Anzahl gelöster Teilchen pro Kilogramm Wasser — je höher, desto "konzentrierter". Das Wasser strömt also dorthin, wo mehr gelöste Teilchen sind (Wasser "verdünnt" die konzentrierte Seite).

**Tonizität** beschreibt, wie eine Lösung **außerhalb** der Zelle im Vergleich zum Zellinnern das Zellvolumen beeinflusst:

| Tonizität | Osmolalität aussen | Wasserbewegung | Folge (z. B. Erythrozyt) |
|-----------|-------------------|----------------|--------------------------|
| **Isoton** (~290 mosmol/kg) | = Zytoplasma | keine Nettobewegung | Volumen konstant |
| **Hypoton** | < Zytoplasma | in die Zelle | Zelle schwillt → **Hämolyse** (Zerplatzung der Zelle) |
| **Hyperton** | > Zytoplasma | aus der Zelle | Zelle schrumpft → **Krenation** (Eindellung, Schrumpfung) |

**Hämolyse** = Zerfall der Zellmembran (z. B. Erythrozyt platzt); **Krenation** = Schrumpfung der Zelle durch Wasseraustritt. Isotone NaCl-Lösung: **0,9 %** (~290 mosmol/kg) = physiologische Kochsalzlösung (Infusion).

> **Merke:** Osmose = Wassertransport zur höheren Osmolalität. Hypoton → Hämolyse; hyperton → Krenation.

---

## Aktiver Transport — gegen den Gradienten


**Primär aktiver Transport (direkt ATP)**
Substanzen werden **gegen** ihren Gradienten gepumpt. Das zentrale Beispiel: **Na+/K+-ATPase**.

- Pro Zyklus: **1 ATP** → **3 Na+ nach außen**, **2 K+ nach innen**
- Folgen: Aufbau des **Ruhemembranpotenzials** (~-70 mV) — das ist die elektrische Spannung an der Membran einer ruhenden Zelle (innen negativ gegenüber außen); ferner niedrige intrazelluläre Na+-Konzentration (Grundlage für sekundären aktiven Transport und Aktionspotential) und hohe intrazelluläre K+-Konzentration

**Klinisch — Herzglykoside (vertiefend):** Digitalis, Ouabain hemmen die Na+/K+-ATPase → intrazelluläres Na+ erhöht → Na+/Ca2+-Austauscher (NCX) arbeitet weniger → Ca2+ akkumuliert → stärkere Herzkontraktion (**positiv inotrop**, d.h. die Kontraktionskraft steigernd). Einsatz bei Herzinsuffizienz (Herzschwäche), Vorhofflimmern.

**Sekundär aktiver Transport (ohne direktes ATP)**

| Typ | Richtung | Beispiel | Klinik |
|-----|----------|----------|--------|
| **Symport** | Na+ und Substrat in **dieselbe** Richtung | SGLT1/2: Na+-Glucose-Kotransport (Dünndarm, proximaler Tubulus) | SGLT2-Hemmer (Empagliflozin, Dapagliflozin) → Glucosurie (Zuckerausscheidung im Urin) → Blutzuckersenkung bei Typ-2-Diabetes |
| **Antiport** | Na+ ein, Substrat **heraus** | Na+/Ca2+-Austauscher (NCX) im Herzmuskel | Siehe Herzglykoside |

> **Merke:** Na+/K+-ATPase: 3 Na+ raus, 2 K+ rein (1 ATP). Sekundär aktiv = Na+-Gradient treibt Substrat (Symport/Antiport).`,
      lernziele: [
        "Passiven und aktiven Transport unterscheiden und je ein Beispiel nennen",
        "Osmose und Tonizität erklären sowie die Folgen hypotoner/hypertoner Lösungen (Hämolyse, Krenation)",
        "Die Na⁺/K⁺-ATPase (Stöchiometrie, Rolle für Ruhepotenzial und sekundären Transport) beschreiben",
        "Sekundär aktiven Transport (Symport/Antiport) am Beispiel SGLT und NCX erläutern",
      ],
      sections: [],
      merksätze: [
        "Passiv = entlang Gradient, kein ATP; aktiv = gegen Gradient, ATP oder Na⁺-Gradient.",
        "Osmose: Wasser folgt der Osmolalität (zur konzentrierteren Seite). Hypoton → Hämolyse, hyperton → Krenation.",
        "Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein pro 1 ATP — nicht umgekehrt.",
        "Sekundär aktiv: Na⁺-Gradient (von der ATPase aufgebaut) treibt Symport (z. B. SGLT) oder Antiport (z. B. NCX).",
      ],
      klinischerBezug:
        "Herzglykoside hemmen Na⁺/K⁺-ATPase → Ca²⁺ ↑ → positiv inotrop. SGLT2-Hemmer blockieren Glucoserückresorption in der Niere → Glucosurie → Blutzuckersenkung bei Typ-2-Diabetes. Isotone Infusion 0,9 % NaCl; hypotone Infusion kann Hämolyse begünstigen.",
      selfTest: [
        {
          question: "Was passiert mit Erythrozyten in einer hypotonen Lösung?",
          options: [
            "Sie schrumpfen (Krenation)",
            "Sie schwellen und können hämolysieren",
            "Ihr Volumen bleibt konstant",
            "Sie nehmen aktiv Na⁺ auf",
            "Sie verlieren Wasser durch Aquaporine",
          ],
          correctIndex: 1,
          explanation:
            "Hypoton bedeutet: Osmolalität außen < innen. Wasser strömt osmotisch in die Zelle → sie schwillt an → bei Erythrozyten kann die Membran zerplatzen (Hämolyse). Krenation tritt bei hypertoner Lösung auf.",
          hints: ["Hypoton = weniger Teilchen außen. Wohin strömt das Wasser?"],
          difficulty: 1,
          tags: ["tonizität", "osmose", "hämolyse"],
        },
        {
          question: "Wie viele Na⁺- und K⁺-Ionen werden pro ATP von der Na⁺/K⁺-ATPase bewegt?",
          options: [
            "2 Na⁺ raus, 3 K⁺ rein",
            "3 Na⁺ raus, 2 K⁺ rein",
            "1 Na⁺ raus, 1 K⁺ rein",
            "3 Na⁺ rein, 2 K⁺ raus",
            "Gleich viele Na⁺ und K⁺ in gleiche Richtung",
          ],
          correctIndex: 1,
          explanation:
            "Pro 1 ATP pumpt die Na⁺/K⁺-ATPase 3 Na⁺ aus der Zelle und 2 K⁺ in die Zelle. Das baut das Ruhemembranpotenzial (~−70 mV) auf und schafft den Na⁺-Gradienten für sekundär aktiven Transport.",
          hints: ["Merksatz: 3 raus, 2 rein — nicht umgekehrt."],
          difficulty: 1,
          tags: ["na-k-atpase", "primär-aktiv", "stöchiometrie"],
        },
        {
          question: "Was wird bei der Osmose durch die Membran transportiert?",
          options: [
            "Die gelösten Teilchen (z. B. Salze)",
            "Nur Wasser (zur Seite mit höherer Osmolalität)",
            "Wasser und Ionen gemeinsam",
            "ATP zur Energiebereitstellung",
            "Nur kleine lipophile Moleküle",
          ],
          correctIndex: 1,
          explanation:
            "Osmose ist der passive Transport von Wasser durch eine semipermeable Membran von der Seite mit niedrigerer Osmolalität zur Seite mit höherer Osmolalität. Die gelösten Teilchen diffundieren nicht bei reiner Osmose; nur das Wasser folgt dem Konzentrationsgradienten der gelösten Teilchen.",
          hints: ["Osmolalität = Teilchen pro kg Wasser. Wohin strömt das Wasser?"],
          difficulty: 1,
          tags: ["osmose", "wasser", "osmolalität"],
        },
        {
          question: "Was kennzeichnet sekundär aktiven Transport?",
          options: [
            "Direkter Verbrauch von ATP pro transportiertem Molekül",
            "Nur Ionenkanäle sind beteiligt",
            "Der Na⁺-Gradient (von der Na⁺/K⁺-ATPase aufgebaut) treibt den Transport",
            "Es findet nur bei Pflanzen statt",
            "Wasser wird gegen den Gradienten gepumpt",
          ],
          correctIndex: 2,
          explanation:
            "Sekundär aktiver Transport nutzt den Na⁺-Gradienten (außen hoch, innen niedrig) als Energiequelle. Beispiele: Symport (SGLT: Na⁺ + Glucose in dieselbe Richtung), Antiport (NCX: Na⁺ rein, Ca²⁺ raus). Die Na⁺/K⁺-ATPase baut den Gradienten primär aktiv mit ATP auf.",
          hints: ["Primär aktiv = direkt ATP. Sekundär = welcher Gradient wird genutzt?"],
          difficulty: 2,
          tags: ["sekundär-aktiv", "symport", "antiport", "sglt"],
        },
        {
          question:
            "Welche Konzentration hat eine isotone physiologische Kochsalzlösung zur Infusion?",
          options: [
            "0,09 % NaCl",
            "0,9 % NaCl (~290 mosmol/kg)",
            "9 % NaCl",
            "0,9 mol/L NaCl",
            "Isoton ist nur Glukoselösung 5 %",
          ],
          correctIndex: 1,
          explanation:
            "Isotone Kochsalzlösung entspricht etwa 0,9 % NaCl (ca. 290 mosmol/kg) und damit der Osmolalität des Zytoplasmas. So bleibt das Zellvolumen konstant; hypotone Infusion könnte Hämolyse begünstigen.",
          hints: ["Blutplasma ~290 mosmol/kg. Welcher NaCl-Gehalt führt dazu?"],
          difficulty: 1,
          tags: ["tonizität", "infusion", "0,9%"],
        },
      ],
    },

    // ─── UK5 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-05",
      title: "Zellorganellen — Funktion und medizinische Relevanz",
      imageUrl: "/images/bms/bio-golgi.jpg",
      imageCaption:
        "Abb.: Golgi-Apparat — Sortier- und Versandzentrale der Zelle (OpenStax, CC BY 4.0)",
      stichworte: [
        "Sekretorischer Weg",
        "rER",
        "Golgi",
        "M6P-Targeting",
        "Mitochondrien",
        "Cristae",
        "Lysosomen",
        "Speicherkrankheiten",
        "Peroxisomen",
        "Proteasomen",
        "Ubiquitin",
        "Kinozilien",
        "Geißeln",
        "Flagellen",
        "9+2-Anordnung",
        "Dynein",
        "Stereozilien",
        "Kartagener-Syndrom",
      ],
      content: `## Der sekretorische Weg: rER → Golgi → Ziel


Proteine, die für Membranen, Lysosomen oder die Sekretion (Hormone, Antikörper) bestimmt sind, durchlaufen den **sekretorischen Weg** in drei Stationen:

**1. Raues ER (rER) — Proteinfabrik:**
- Mit Ribosomen besetzt → Co-translationale Proteinsynthese
- **N-Glykosylierung**: Zuckerketten werden an Asparagin-Reste angehängt (Qualitätsmerkmal)
- **Qualitätskontrolle**: Chaperone (Faltungshelfer-Proteine; Calnexin, Calreticulin) überprüfen Faltung; fehlgefaltete Proteine → ERAD (ER-assoziierter Abbau durch Proteasomen)
- **ER-Stress**: Bei Überflutung mit fehlgefalteten Proteinen → Unfolded Protein Response (UPR, Stressantwort auf fehlgefaltete Proteine) → bei Überlastung → Apoptose (relevant bei Typ-2-Diabetes: ER-Stress in Beta-Zellen)

**2. Glattes ER (gER) — Lipidsynthese und Entgiftung:**
- Ohne Ribosomen
- **Lipidsynthese**: Phospholipide, Steroide, Cholesterin
- **Detoxifikation**: CYP450-Enzyme in Leberzellen oxidieren Pharmaka, Toxine, Steroide
- **Ca2+-Speicher**: IP3 → Ca2+-Freisetzung → intrazelluläre Signalkaskade (Muskelkontraktion, Sekretion)
- Sarkoplasmatisches Retikulum in Muskelzellen = spezialisiertes gER

**3. Golgi-Apparat — Sortierung und Modifikation:**
- Gestapelte Membransäcke: Cis-Seite (ER-nah) → medial → Trans-Seite (Membran-nah)
- **Proteinmodifikation**: O-Glykosylierung (an Serin/Threonin), weitere Zuckermodifikationen
- **Schlüssel für Lysosomales Targeting**: Mannose-6-Phosphat (M6P) wird angehängt → M6P-Rezeptor → Transport zu Lysosomen
- **Sekretion**: reguliert (auf Signal, z.B. Insulin aus Granula) vs. konstitutiv (immer)

**Klinisch — I-Zell-Krankheit (Mukolipidose II):** Defektes M6P-Tagging → lysosomale Enzyme landen im Blut statt im Lysosom → Substratakkumulation in Zellen.

> **Merke:** rER → Golgi → Lysosom: N-Glykosylierung im ER, M6P-Tag im Golgi als Adresse für Lysosomen. M6P fehlt → I-Zell-Krankheit.

{{DIAGRAM:endomembrane-system}}

{{IMAGE}}

---

## Mitochondrien — Kraftwerk und Endosymbiont


{{DIAGRAM:double-membrane-organelles}}

**Struktur:**
- **Äußere Membran**: glatt, permeabel für kleine Moleküle (Porin-Kanäle)
- **Innere Membran**: tief gefaltet zu **Cristae** (Einstülpungen der inneren Membran) → enorme Oberflächenvergrößerung für die Atmungskette
- **Intermembranraum**: zwischen beiden Membranen (H+ werden hierhin gepumpt)
- **Matrix**: innerster Bereich — hier läuft der Citratzyklus

**Funktion (ATP-Synthese):**
Glucose → Glykolyse (Zytoplasma) → Pyruvat → Acetyl-CoA → Citratzyklus (Matrix) → NADH/FADH2 → Atmungskette (innere Membran) → Protonengradient → ATP-Synthase → **~30–32 ATP pro Glucose** (aerob, vs. 2 ATP anaerob)

**Apoptose:** Bei Zellstress → Cytochrom c wird aus Mitochondrien ins Zytoplasma freigesetzt → Apoptosom → Caspase-9/3-Aktivierung → kontrollierter Zelltod

**Endosymbiontentheorie — 5 Belege** (ausführlich: UK "Prokaryoten vs. Eukaryoten"):
1. Eigene **zirkuläre mtDNA** (~16.500 bp, kodiert 13 Proteine)
2. **70S-Ribosomen** (bakteriell, nicht 80S)
3. **Doppelmembran** (innere = ehemalige Bakterienmembran)
4. **Binäre Fission** (nicht Mitose)
5. **Antibiotika-Empfindlichkeit** (Chloramphenicol → aplastische Anämie bei hoher Dosis)

**Maternale Vererbung:** mtDNA kommt ausschließlich aus dem Ei → mitochondriale Erkrankungen (MELAS, Leber-Optikusneuropathie) werden maternal vererbt.

> **Merke:** Cristae = gefaltete innere Membran = Ort der Atmungskette. Mitochondrien = 5 Bakterien-Belege. Cytochrom c frei → Apoptose.

---

## Lysosomen, Peroxisomen und Proteasomen: Abbau und Recycling


**Lysosomen — zellulärer Recyclinghof:**
- Entstehen aus dem Trans-Golgi-Netzwerk; pH 4,5–5 durch H+-ATPase in der Membran
- Enthalten >50 **saure Hydrolasen** (Proteasen, Lipasen, Glykosidasen — alle optimiert für pH ~5)
- **Autophagie**: eigene defekte Organellen werden in Autophagosomen verpackt → Fusion mit Lysosom → Abbau
- **Heterophagie**: aufgenommene Bakterien/Partikel (Phagolysosom), Rezeptor-Recycling

**Lysosomale Speicherkrankheiten** entstehen, wenn **ein lysosomales Enzym fehlt** → das zugehörige Substrat kann nicht abgebaut werden und **akkumuliert** in der Zelle (Speicherung), mit oft schweren Organ- und Nervenschäden:

| Krankheit | Defektes Enzym | Substrat | Symptome |
|---|---|---|---|
| Morbus Gaucher | Glukozerebrosidase | Glukozerebrosid | Hepatosplenomegalie, Knochenschmerzen |
| Morbus Tay-Sachs | Hexosaminidase A | GM2-Gangliosid | Neurodegeneration, kirschroter Fleck |
| Morbus Pompe | Alpha-Glukosidase | Glykogen | Myopathie, Herzinsuffizienz |
| Niemann-Pick C | NPC1-Protein | Cholesterin | Neurodegeneration |

**Peroxisomen:**
- Einmembranorganellen; entstehen durch Teilung oder de-novo aus ER
- Funktion: **Beta-Oxidation sehr langkettiger Fettsäuren (VLCFA >C22)**, H2O2-Abbau durch **Katalase** (2H2O2 → 2H2O + O2), Plasmalogen-Synthese (Myelinisierung)
- Klinisch: **Zellweger-Syndrom** (Peroxisom-Biogenese-Defekt) → VLCFA erhöht → schwere Neurodegeneration; **Adrenoleukodystrophie (ALD)** (X-chromosomal, ABCD1-Defekt) → VLCFA im ZNS

**Proteasomen — molekuläre Schredder:**
- Keine Membranorganellen; zytosolische Proteinkomplexe (26S = 20S-Kern + 2x19S-Kappen)
- Abbau von: fehlgefalteten Proteinen, regulatorischen Proteinen (Cycline!), Entzündungsmediatoren
- **Ubiquitin-System**: **Ubiquitin** ist ein kleines Protein, das als "Abbau-Markierung" an andere Proteine angehängt wird. Fehlgefaltete oder nicht mehr benötigte Proteine werden durch **Polyubiquitin-Ketten** (Lys48-Verknüpfung) markiert → das 26S-Proteasom erkennt Ubiquitin → entfaltet und zerlegt das Protein in kurze Peptide (~8 Aminosäuren)
- Klinisch:
  - **MHC-I-Antigenpräsentation**: Peptide aus dem Proteasom werden auf MHC-I geladen → Erkennung durch CD8+-T-Zellen
  - **Bortezomib** (Proteasom-Inhibitor) beim multiplen Myelom → fehlgefaltete Myelomproteine akkumulieren → Apoptose
  - **CFTR-DeltaF508** bei Mukoviszidose: fehlgefaltetes CFTR wird durch ERAD + Proteasom abgebaut → kein Cl⁻-Kanal in der Membran

> **Merke:** Lysosom = saures Milieu pH 4,5, saure Hydrolasen. Fehlendes Lysosom-Enzym → Speicherkrankheit. Proteasom + Ubiquitin = Zellmüllentsorgung; Bortezomib blockiert das beim Myelom.

---

## Kinozilien und Geißeln (Flagellen)


**Aufbau:** Kinozilien und Geißeln haben den gleichen Grundbauplan: **9+2-Anordnung** aus Mikrotubuli — 9 Außendoubletten bilden einen Ring, in der Mitte liegen 2 zentrale Einzeltubuli. Die gesamte Struktur heißt **Axonem** und ist von der Zellmembran umhüllt. Am Übergang zur Zelle sitzt das **Basalkörperchen** (9x3-Tripletts, wie ein Zentriol).

**Bewegungsmechanismus:** **Dynein-Motorproteine** (äußere und innere Dyneinarme) sitzen an den Außendoubletten und gleiten unter **ATP-Verbrauch** an benachbarten Doubletten entlang. Durch die Verankerung im Axonem wird das Gleiten in eine **Biegebewegung** umgewandelt.

**Kinozilien vs. Geißeln:**
- **Kinozilien**: kurz (~5–10 Mikrometer), **zahlreich** pro Zelle (hunderte), koordinierter Schlag in einer Richtung. Beispiel: **Flimmerepithel der Atemwege** → Schleimtransport (mukoziliäre Clearance); **Eileiter** → Eitransport
- **Geißeln (Flagellen)**: lang (~50–70 Mikrometer), meist **1–2 pro Zelle**, wellenförmige Bewegung. Beispiel: **Spermien** → Fortbewegung

**Achtung — Stereozilien:** **Stereozilien** sind KEINE echten Zilien! Sie bestehen aus **Aktin-Filamenten** (nicht Mikrotubuli), sind **unbeweglich** und haben **keine 9+2-Struktur**. Vorkommen: **Innenohr** (Haarzellen → mechanische Reizaufnahme) und **Nebenhoden** (Resorption). Der Name ist irreführend — sie sind eigentlich lange Mikrovilli.

**Klinisch — Primäre Ziliendyskinesie (PCD / Kartagener-Syndrom):**
Autosomal-rezessiver Defekt der **Dyneinarme** → Zilien sind unbeweglich oder dyskinetisch. Konsequenzen:
- **Chronische Bronchitis/Sinusitis**: fehlende mukoziliäre Clearance
- **Situs inversus** (~50 % der Fälle): Embryonale Nodal-Zilien steuern die Links-Rechts-Achse; bei Defekt → zufällige Anordnung
- **Männliche Infertilität**: Spermiengeißeln funktionslos

> **Merke:** Kinozilien + Geißeln = 9+2-Mikrotubuli + Dynein. Stereozilien = Aktin (keine echten Zilien!).

---

## Übersicht: Organellen auf einen Blick

**Organellen mit zwei (Doppel-)Membranen:** **Mitochondrien**, **Zellkern**. Peroxisom, Lysosom, ER, Golgi haben eine einfache Membran. **Peroxisom:** von eigener Membran umgeben, **Wasserstoffperoxid-Stoffwechsel** (Katalase). **Nukleosom** (Histon-DNA-Komplex) und **Ribosom** (Protein-rRNA-Komplex) haben **keine** eigene Membran.

| Organell | Membran | Hauptfunktion | Klinischer Bezug |
|---|---|---|---|
| Mitochondrien | Doppel | ATP (OXPHOS), Apoptose | MELAS, Cytochrom-c |
| Raues ER | Einfach | Proteinsynthese, N-Glykosylierung | ER-Stress → Diabetes |
| Glattes ER | Einfach | Lipidsynthese, Detox, Ca2+-Speicher | CYP450 (Leber) |
| Golgi-Apparat | Einfach | Sortierung (M6P), O-Glykosylierung | I-Zell-Krankheit |
| Lysosomen | Einfach | Abbau (pH 4,5), Autophagie | Gaucher, Tay-Sachs |
| Peroxisomen | Einfach | VLCFA-Abbau, H2O2-Abbau | Zellweger-Syndrom |
| Proteasomen | Keine | Ubiquitin-markierte Proteine abbauen | Bortezomib (Myelom) |
| Zentrosom | Keine | Spindelapparat bei Mitose | Ziliendyskinesie |`,
      lernziele: [
        "Die wichtigsten Zellorganellen (Mitochondrien, ER, Golgi, Lysosomen, Peroxisomen) mit Struktur und Funktion beschreiben",
        "Endosymbiontenhypothese für Mitochondrien und Chloroplasten erläutern",
        "Klinische Beispiele für Organell-Defekte (Mitochondriopathien, Speicherkrankheiten) nennen",
      ],
      merksätze: [
        "Mitochondrien = Doppelmembran, Cristae, eigene DNA (70S), maternale Vererbung",
        "rER = Ribosomen + Proteinsynthese + Glykosylierung; gER = Lipidbiosynthese + Detox + Ca²⁺",
        "Golgi: Cis→Medial→Trans. Mannose-6-Phosphat = Lysosom-Adresse",
        "Proteasom = 26S (20S-Kern + 19S-Kappen). Ubiquitin-Lys48-Kette → proteasomaler Abbau. Bortezomib = Proteasom-Inhibitor (Myelom-Therapie)",
        "Lysosomen: pH 4,5 durch H⁺-ATPase. Fehlende Hydrolase → Speicherkrankheit (Gaucher, Tay-Sachs)",
        "Peroxisomen: VLCFA-Abbau + Katalase. Zellweger = Peroxisom-Biogenese-Defekt",
        "Ribosomen 80S (Eukaryoten) vs. 70S (Prokaryoten + Mitochondrien) = Antibiotika-Target",
      ],
      klinischerBezug:
        "Mitochondriale Erkrankungen (Mitochondriopathien) betreffen v.a. energieintensive Organe: ZNS, Muskulatur, Herz. Beispiele: MELAS (Schlaganfall-ähnliche Episoden), LHON (Optikusneuropathie). Lysosomale Speicherkrankheiten (M. Gaucher, M. Fabry) werden durch Enzymersatztherapie behandelt. Peroxisomale Defekte: Zellweger-Syndrom (schwere neurologische Störung).",
      selfTest: [
        {
          question: "Welche Funktion hat das raue endoplasmatische Retikulum (rER)?",
          options: [
            "Lipidsynthese und Entgiftung",
            "Synthese sekretorischer und membranständiger Proteine",
            "ATP-Produktion durch oxidative Phosphorylierung",
            "Abbau defekter Proteine durch Proteasomen",
            "Sortierung und Glykosylierung im trans-Golgi-Netzwerk",
          ],
          correctIndex: 1,
          explanation:
            "Das raue ER ist mit Ribosomen besetzt und synthetisiert Proteine, die für den sekretorischen Weg (Export, Membran, Lysosomen) bestimmt sind. Lipidsynthese und Entgiftung sind Funktionen des glatten ER.",
          difficulty: 1 as const,
          tags: ["Organellen", "ER"],
        },
        {
          question: "Welches Targeting-Signal leitet Enzyme zum Lysosom?",
          options: [
            "Signalpeptid am N-Terminus",
            "KDEL-Sequenz für ER-Retention",
            "Mannose-6-Phosphat (M6P)",
            "GPI-Anker",
            "Kernlokalisierungssignal (NLS)",
          ],
          correctIndex: 2,
          explanation:
            "Im cis-Golgi werden lysosomale Enzyme mit Mannose-6-Phosphat markiert. M6P-Rezeptoren im trans-Golgi-Netzwerk erkennen dieses Signal und sortieren die Enzyme in Vesikel Richtung Lysosom.",
          difficulty: 2 as const,
          tags: ["Lysosomen", "Targeting"],
        },
        {
          question: "Wo findet die oxidative Phosphorylierung statt?",
          options: [
            "In der mitochondrialen Matrix",
            "An der äußeren Mitochondrienmembran",
            "An der inneren Mitochondrienmembran (Cristae)",
            "Im Intermembranraum",
            "Im Zytoplasma",
          ],
          correctIndex: 2,
          explanation:
            "Die Komplexe I–IV der Atmungskette und die ATP-Synthase (Komplex V) sitzen in der inneren Mitochondrienmembran. Die Cristae-Faltung vergrößert die Oberfläche enorm.",
          difficulty: 1 as const,
          tags: ["Mitochondrien", "Atmungskette"],
        },
        {
          question: "Welcher Befund stützt die Endosymbiontentheorie für Mitochondrien?",
          options: [
            "Mitochondrien besitzen eine einfache Membran",
            "Mitochondrien haben 80S-Ribosomen wie Eukaryoten",
            "Mitochondrien besitzen eigene zirkuläre DNA und 70S-Ribosomen",
            "Mitochondrien können sich nicht eigenständig teilen",
            "Mitochondrien haben keine eigene Proteinsynthese",
          ],
          correctIndex: 2,
          explanation:
            "Mitochondrien haben zirkuläre DNA (ohne Histone), 70S-Ribosomen und teilen sich durch Zweiteilung — alles Merkmale, die auf einen bakteriellen Ursprung (α-Proteobakterien) hinweisen.",
          difficulty: 2 as const,
          tags: ["Endosymbiontentheorie", "Evolution"],
        },
        {
          question: "Welche Erkrankung entsteht durch einen Defekt lysosomaler Enzyme?",
          options: [
            "Sichelzellanämie",
            "Morbus Gaucher (Glucocerebrosidase-Mangel)",
            "Mukoviszidose (CFTR-Defekt)",
            "Phenylketonurie (PAH-Mangel)",
            "Adrenogenitales Syndrom (21-Hydroxylase-Mangel)",
          ],
          correctIndex: 1,
          explanation:
            "Morbus Gaucher ist eine lysosomale Speicherkrankheit: durch Glucocerebrosidase-Mangel akkumuliert Glucocerebrosid in Makrophagen (Gaucher-Zellen). Weitere Beispiele: Tay-Sachs (Hexosaminidase A), Morbus Pompe (α-Glucosidase).",
          difficulty: 2 as const,
          tags: ["Lysosomen", "Speicherkrankheiten"],
        },
      ],
      altfrage: {
        question: "Wo findet die β-Oxidation langer Fettsäuren (>C22) statt?",
        answer:
          "Correct answer: Peroxisomen. Very Long Chain Fatty Acids (VLCFA >C22) werden ausschließlich in Peroxisomen durch β-Oxidation abgebaut. Mitochondrien können nur Fettsäuren bis C20 oxidieren. Ein Defekt des ABCD1-Transporters verhindert den VLCFA-Import in Peroxisomen → Adrenoleukodystrophie (ALD).",
      },
    },

    // ─── UK6 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-06",
      title: "Der Zellkern — Steuerzentrale der Zelle",
      imageUrl: "/images/bms/bio-zellkern.jpg",
      imageCaption: "Abb.: Zellkern mit Kernhülle, Poren und Nukleolus (OpenStax, CC BY 4.0)",
      stichworte: [
        "Kernporen",
        "Chromatin",
        "Chromosomen",
        "Nucleolus",
        "Kernhülle",
        "Kernlamina",
        "Euchromatin",
        "Heterochromatin",
        "Histon-Modifikationen",
        "Barr-Körper",
        "NLS/NES-Transport",
      ],
      content: `## Kernhülle und Kernporen: die selektive Schleuse

Rund 3000 Moleküle passieren jede Kernpore pro Sekunde — ohne diese Schleusen wäre keine Genregulation möglich. Der Zellkern ist von einer **Doppelmembran** (Kernhülle) umhüllt:
- **Äußere Kernmembran**: direkt verbunden mit dem rauen ER (trägt ebenfalls Ribosomen)
- **Innere Kernmembran**: innen ausgekleidet durch die **Kernlamina** (Netz aus Lamin-Intermediärfilamenten → mechanische Stütze + Heterochromatin-Verankerung)
- **Perinukleärer Spalt**: Raum zwischen beiden Membranen (kontinuierlich mit ER-Lumen)

**Kernporenkomplexe (NPC):**
- Einzige Kommunikationskanäle zwischen Kern und Zytoplasma
- Aufbau: ~30 verschiedene Nucleoporine, ~120 MDa
- **Freie Diffusion**: Moleküle <40 kDa (Ionen, kleine Proteine, Metabolite)
- **Aktiver Transport** (>40 kDa): braucht ein “Ticket”

**Kernimport und -export:**
- **NLS** (Nuclear Localization Signal): basische Aminosäuren (Lys, Arg) → wird von **Importin-α** erkannt → Importin-α/β-Komplex trägt Protein durch NPC → im Kern: RanGTP bindet Importin → Cargo-Dissoziation
- **NES** (Nuclear Export Signal): hydrophobe Sequenz → wird von Exportin (CRM1) gebunden → Export ins Zytoplasma
- **RanGTPase-Gradient**: RanGTP (Kern) ↔ RanGDP (Zytoplasma) treibt den gerichteten Transport; RanGAP im Zytoplasma hydrolysiert GTP → Zyklus

**Klinisch:** HIV nutzt das NLS seines Preintegrationskomplexes (PIC) + Importin-α/β → Kerntransport → Integration ins Wirtsgenom. HIV-Integrase-Inhibitoren (Dolutegravir) blockieren diesen Schritt.

> **Merke:** Kernporen: <40 kDa frei, >40 kDa nur mit NLS (Import) oder NES (Export). Äußere Kernmembran = Fortsatz des rauen ER. Kernlamina = Lamine (nicht Aktin!).

{{IMAGE}}

---

## Chromatin: 2 Meter DNA in 6 µm verpackt


Das menschliche Genom umfasst 3,2 Milliarden Basenpaare — ausgestreckt ca. **2 Meter**. Es muss in einen ~6 µm großen Zellkern passen: **~10.000-fache Kompaktierung**.

**Definitionen (prüfungssicher):**
- **Chromosom:** stark kondensierte, transportfähige Form der DNA (mit **Histonen** = basische Proteine); enthält die Erbinformation; sichtbar in Mitose/Meiose.
- **Centromer:** die Einschnürung des Chromosoms; Ansatzpunkt für Spindelfasern (Kinetochor); **wichtig für die richtige Aufteilung der Chromosomen bei Mitose und bei Meiose**.
- **Telomer:** die Endregionen der Chromosomen (repetitive DNA); **schützen die DNA vor Abbau** und verkürzen sich bei jeder Zellteilung (Alterung); Telomerase verlängert sie (Stammzellen, Keimzellen).
- **Histone:** basische Proteine (reich an Lysin, Arginin), um die die DNA gewickelt ist (Nukleosom); Chromosomen **enthalten basische Proteine** (Histone).

**Wichtig — typische Falschaussage:** „Chromosomen erlauben die freie Kombination der Gene” ist **falsch**. Die **freie Kombination der Gene** erfolgt durch **Crossing-over** und zufällige Verteilung der homologen Chromosomen in der **Meiose**, nicht durch die Chromosomenstruktur selbst. Chromosomen sind die Verpackungsform; die Neukombination ist ein Vorgang der Meiose.

{{DIAGRAM:dna-helix}}

**Hierarchische Verpackung:**
1. **Nukleosom** (~10 nm): 147 bp DNA um Histon-Oktamer (je 2× H2A, H2B, H3, H4) gewickelt — wie “Perlen auf einer Schnur”
2. **Chromatinfaser** (~30 nm): Nukleosomen kompaktieren durch Histon H1 und Protein-Protein-Wechselwirkungen
3. **Schleifen und Domänen**: regulatorische Einheiten (TADs — Topologically Associating Domains)
4. **Metaphasechromosom**: maximale Kompaktierung (sichtbar in Mitose)

**Epigenetische Regulation — Euchromatin vs. Heterochromatin:**

| | Euchromatin | Heterochromatin |
|---|---|---|
| Struktur | weniger kompakt | stark kompakt |
| Histone | acetyliert (HAT) | methyliert (HMT) |
| Transkription | aktiv | inaktiv |
| Lage | Kerninneres | an Kernhülle |
| Beispiel | aktive Gene | Barr-Körper, Satelliten-DNA |

**Histon-Modifikationen:**
- **Acetylierung** (durch HAT, Histon-Acetyltransferasen): neutralisiert positive Histon-Ladung → DNA-Histon-Wechselwirkung ↓ → Chromatin öffnet sich → Transkription möglich
- **Deacetylierung** (durch HDAC, Histon-Deacetylasen): Chromatin schließt sich → Gensilencing
- **HDAC-Inhibitoren** (Vorinostat, Romidepsin): epigenetische Krebstherapie — öffnen Heterochromatin → Tumorsuppressor-Gene reaktivieren

**Barr-Körper:** Inaktiviertes X-Chromosom bei XX-Individuen (Lyon-Hypothese: zufällige X-Inaktivierung in jeder somatischen Zelle) → erscheint als dunkles Heterochromatin-Klümpchen am Kernrand. Anzahl Barr-Körper = X-Chromosomenanzahl − 1.

> **Merke:** Nukleosom = 147 bp DNA um Histon-Oktamer (H2A,H2B,H3,H4 je 2×). Acetylierung → offen (aktiv). Methylierung → geschlossen (inaktiv). Barr-Körper = inaktives X.

---

## Nucleolus: Ribosomenfabrik


Der **Nucleolus** ist keine Membranstruktur, sondern ein **Phasenseparations-Kondensatstruktur** (organisiert um rRNA-Gene auf Chromosomen 13, 14, 15, 21, 22).

**Funktion:**
1. RNA-Polymerase I synthetisiert 45S-prä-rRNA → Prozessierung zu 28S, 18S, 5.8S rRNA
2. Ribosomale Proteine werden im Zytoplasma synthetisiert → Import in Nucleolus
3. Assemblierung zu 40S- und 60S-Vorläufer-Untereinheiten
4. Export durch Kernporen ins Zytoplasma → vollständige 80S-Ribosomen

**Klinisch:**
- **Großer Nucleolus** = hohe Proliferationsrate = histopathologisches **Malignitätsmerkmal** (Prostata-, Nierenzell-, Lymphomdiagnose)
- **Nukleolus-Stress**: rRNA-Synthesehemmung → NPM1-Freisetzung → p53-Aktivierung → Zellzyklus-Arrest (Tumorsuppressorweg)

> **Merke:** Nucleolus = Ribosomenfabrik, NICHT membranumschlossen. Groß = viel Proliferation = Malignitätsmerkmal.

---

## Klinisch: Progeria und epigenetische Therapie

**Progeria (Hutchinson-Gilford-Syndrom):**
- LMNA-Mutation (c.1824C>T) → Progerin (verkürztes Lamin A) → Kernlamina destabilisiert → Kerndeformation
- Klinisch: vorzeitige Atherosklerose, Lipodystrophie, Minderwuchs, Alopezie, Tod ~13 Jahre
- Therapie: Lonafarnib (Farnesyltransferase-Inhibitor) verhindert Progerin-Verankerung → verlängert Leben ~2,5 Jahre

**Epigenetische Krebstherapie:**
- HDAC-Inhibitoren (Vorinostat, Romidepsin): Tumorzellen haben oft hypermethylierte Tumorsuppressor-Gene → HDAC-Inhibitoren öffnen Chromatin → Tumorsuppressor-Reaktivierung → Apoptose
- Indikation: kutanes T-Zell-Lymphom, Myelom`,
      lernziele: [
        "Die Struktur des Zellkerns (Kernhülle, Kernporen, Kernlamina, Nucleolus) vollständig beschreiben",
        "Chromatin-Kompaktierung hierarchisch erklären und Euchromatin/Heterochromatin unterscheiden",
        "Den Import/Export durch Kernporen (NLS, NES, Importine, Ran-GTPase) beschreiben",
        "Die Funktion des Nucleolus und klinische Relevanz von Kernstrukturen (Progeria, HIV) erläutern",
      ],
      sections: [],
      merksätze: [
        "Zellkern = Ort der Transkription; Zytoplasma = Ort der Translation. Räumliche Trennung ermöglicht ausgedehnte mRNA-Prozessierung.",
        "Nucleolus = Fabrik für ribosomale RNA (RNA-Pol I) und Ribosomenuntereinheiten.",
        "NPC-Transport: NLS → Importin-alpha/beta → aktiver Import. NES → Exportin → aktiver Export. RanGTP-Gradient als Triebkraft.",
        "Euchromatin = acetylierte Histone, aktive Transkription, im Kerninneren. Heterochromatin = methylierte Histone, inaktiv, an Kernhülle (peripher).",
        "Barr-Körper = kondensiertes inaktives X-Chromosom (Lyon-Hypothese: zufällige X-Inaktivierung in somatischen Zellen).",
        "Progeria: LMNA-Mutation → Progerin (verkürztes Lamin A) → Kerndeformation → vorzeitige Alterung.",
        "HDAC-Inhibitoren (Vorinostat) = Epigenetische Krebstherapie: Histon-Azetylierung erhöhen → Chromatin öffnen → Tumorsuppressor-Gene reaktivieren.",
      ],
      klinischerBezug:
        "Progeria (Hutchinson-Gilford-Syndrom): LMNA-Mutation c.1824C>T erzeugt Progerin, das die Kernlamina destabilisiert. Klinisch: vorzeitige Arteriosklerose, Lipodystrophie, Minderwuchs, Alopezie, Tod mit ~13 Jahren. Lonafarnib (Farnesyltransferase-Hemmer) verhindert die Farnesylierung von Progerin und verlängert das Leben um ~2,5 Jahre. HIV nutzt Importin-alpha/beta für den Kerntransport des Preintegrationskomplexes – LEDGF/p75 als Kofaktor der Integration. HIV-Integrase-Hemmer (Dolutegravir) = Standardtherapie. Prominente Nucleoli in Tumorbiopsien = Hinweis auf hohe Proliferationsaktivität, wichtiges histopathologisches Kriterium bei Prostata-, Nierenzell- und Lymphomdiagnose.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Warum führt ein defekter Kernporenkomplex zur Katastrophe für die Zelle?",
        answer:
          "Der NPC reguliert alle Transportprozesse zwischen Kern und Zytoplasma. Ein defekter NPC würde den Import von Transkriptionsfaktoren, Histonen und DNA-Reparaturproteinen in den Kern blockieren und gleichzeitig den Export von mRNA und Ribosomenuntereinheiten verhindern. Konsequenz: keine Genregulation, keine mRNA-Ausleitung, keine Proteinsynthese, keine DNA-Reparatur. Viren (HIV, HSV) nutzen NPCs aktiv, Arzneistoff-Targets sind Importine.",
      },
      selfTest: [
        {
          question: "Welche Aussage zur Kernhülle ist korrekt?",
          options: [
            "Die Kernhülle besteht aus einer einzelnen Membranschicht",
            "Die äußere Kernmembran ist mit dem rauen ER verbunden",
            "Kernporen lassen alle Moleküle ohne Unterschied passieren",
            "Die Kernlamina besteht aus Aktin-Filamenten",
            "Die Kernhülle fehlt bei Eukaryoten",
          ],
          correctIndex: 1,
          explanation:
            "Die äußere Kernmembran ist direkt mit dem rauen ER verbunden (und trägt Ribosomen). Das Perinukleärraum ist mit dem ER-Lumen verbunden. Die Kernhülle besteht aus zwei Membranen (A falsch). Kernporen sind selektiv – kleine Moleküle diffundieren frei, große Moleküle werden aktiv und selektiv transportiert (C falsch). Die Kernlamina besteht aus Lamin-Intermediärfilamenten, nicht aus Aktin (D falsch). Eukaryoten haben eine Kernhülle, Prokaryoten nicht (E falsch).",
          hints: [
            "Die äußere Kernmembran gehört zum selben Membransystem wie das ER.",
            "Kernporen sind selektive Tore – nicht offen für alles.",
          ],
          difficulty: 2,
          tags: ["kernhülle", "kernporen", "endoplasmatisches retikulum"],
        },
        {
          question: "Was ist ein Nukleosom?",
          options: [
            "Der gesamte DNA-Strang ohne Proteine",
            "Eine DNA-Abschnitt (~147 bp) um einen Histon-Oktamer gewickelt",
            "Ein Ribonukleinsäure-Komplex im Nucleolus",
            "Eine Untereinheit des Kernporenkomplexes",
            "Ein Chromosom in der Metaphase",
          ],
          correctIndex: 1,
          explanation:
            "Das Nukleosom ist die Grundeinheit der Chromatinverpackung: ~147 Basenpaare DNA sind um einen Oktamer aus je 2 Kopien der Histone H2A, H2B, H3 und H4 gewickelt. Nukleosomen sind wie Perlen auf einer Schnur aufgereiht (Linker-DNA + Histon H1). Die hierarchische Verdichtung (Nukleosom → 30 nm-Faser → Schleifen) ermöglicht die extreme Kompaktierung des Genoms.",
          hints: [
            "Nukleosom = DNA-Perle auf der Histon-Schnur.",
            "Vier verschiedene Histone, jeweils doppelt = Oktamer.",
          ],
          difficulty: 2,
          tags: ["nukleosom", "histone", "chromatin"],
        },
        {
          question: "Welche Funktion hat der Nucleolus?",
          options: [
            "Speicherung der gesamten zellulären DNA",
            "Synthese ribosomaler RNA und Assemblierung von Ribosomenuntereinheiten",
            "Regulation des Zellzyklus durch Cycline",
            "Transport von mRNA ins Zytoplasma durch Kernporen",
            "Synthese von Transmembranproteinen",
          ],
          correctIndex: 1,
          explanation:
            "Der Nucleolus ist der Ort der rRNA-Synthese (28S, 18S, 5.8S rRNA durch RNA-Pol I) und der Assemblierung ribosomaler Untereinheiten. Die fertigen Untereinheiten (40S und 60S) werden durch Kernporen ins Zytoplasma exportiert. Der Nucleolus ist nicht membranumschlossen, sondern eine Phasenseparations-Kondensatstruktur (organized around NOR-Regionen auf Chromosomen 13, 14, 15, 21, 22).",
          hints: ["Nucleolus = Fabrik für Ribosomen.", "Was enthält ein Ribosom außer Proteinen?"],
          difficulty: 2,
          tags: ["nucleolus", "ribosomale rna", "ribosomensynthese"],
        },
        {
          question: "Was ist Heterochromatin?",
          options: [
            "Transkriptionell aktives, wenig verdichtetes Chromatin",
            "DNA ohne Histone",
            "Stark verdichtetes, transkriptionell inaktives Chromatin",
            "Chromatin nur in Mitosezellen",
            "Chromatin mit besonders vielen aktiven Genen",
          ],
          correctIndex: 2,
          explanation:
            "Heterochromatin ist stark kompaktiertes Chromatin, das transkriptionell inaktiv ist (methylierte Histone: H3K9me3, H3K27me3). Es erscheint im Mikroskop als dunkle Bereiche (Toluidinblau). Das Barr-Körperchen (inaktives X-Chromosom bei XX-Individuen) ist ein klassisches Beispiel. Euchromatin (Option A) ist weniger kompakt, acetylierte Histone, transkriptionell aktiv. HDAC-Inhibitoren wandeln Heterochromatin in Euchromatin um (epigenetische Therapie).",
          hints: [
            "Hetero = anders, dichter. Eu = gut, zugänglich.",
            "Barr-Körperchen in weiblichen Zellen – was ist das?",
          ],
          difficulty: 2,
          tags: ["heterochromatin", "euchromatin", "barr-körper"],
        },
        {
          question: "Warum benötigen Proteine ein Kernlokalisierungssignal (NLS)?",
          options: [
            "Weil der Kern keine Membran hat",
            "Weil der Kern unter Überdruck steht",
            "Weil große Proteine (>40 kDa) nicht frei durch Kernporen diffundieren können",
            "Weil alle Proteine im Kern synthetisiert werden",
            "Weil NLS Proteine vor proteasomalem Abbau schützt",
          ],
          correctIndex: 2,
          explanation:
            "Kernporen ermöglichen die freie Diffusion kleiner Moleküle (<40 kDa), aber große Proteine können den wässrigen Kanal nicht ohne Hilfe passieren. Das NLS (basische Aminosäuren: Lys, Arg) wird von Importin-alpha erkannt → Importin-alpha/beta-Komplex transportiert das Protein aktiv durch den NPC. Im Kern: RanGTP bindet Importin-beta → Dissoziation des Komplexes → Cargo-Freisetzung. Importin recycelt durch den NPC zurück (als Importin-RanGTP-Komplex). GTP-Hydrolyse durch Ran-GAP im Zytoplasma → RanGDP → Zyklus beginnt neu.",
          hints: [
            "Stell dir den Kernporen-Komplex wie eine Sicherheitsschleuse vor.",
            'Proteine brauchen ein "Ticket" (NLS) für den Einlass in den Kern.',
          ],
          difficulty: 3,
          tags: ["kernlokalisierungssignal", "nls", "kernimport"],
        },
      ],
    },

    // ─── UK7 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-07",
      title: "Zellteilung — Mitose und Meiose",
      imageUrl: "/images/bms/bio-mitose-phasen.jpg",
      imageCaption: "Abb.: Phasen der Mitose von Prophase bis Telophase (OpenStax, CC BY 4.0)",
      stichworte: [
        "Mitose",
        "Meiose",
        "Zellzyklus",
        "Crossing-over",
        "Diploid",
        "Haploid",
        "Non-disjunction",
        "Checkpoints",
        "Cycline",
        "Trisomie",
      ],
      content: `## Der Zellzyklus


**G1-Phase (Gap 1, erste Wachstumsphase):**
Proteinsynthese, Zellwachstum, Erfüllung der Voraussetzungen für DNA-Replikation. Zellen, die dauerhaft nicht teilen (differenzierte Zellen wie Neuronen, Muskelzellen), verlassen den Zyklus in die **G0-Phase** (Ruhephase). Der **G1/S-Checkpoint** (Restriktionspunkt) überwacht, ob die Zelle groß genug ist und ob die DNA intakt ist. Schlüsselmolekül: **Cyclin D / CDK4** → Phosphorylierung von Rb (Retinoblastom-Protein) → Freigabe von E2F → Transkription von S-Phase-Genen. Bei Krebszellen ist dieser Checkpoint oft defekt (Rb-Mutation, Cyclin-D-Überexpression).

**S-Phase (Synthese-Phase):**
DNA-Replikation: Der haploide DNA-Gehalt verdoppelt sich. Aus 2n-DNA-Menge wird 4n-DNA-Menge (die Chromosomenzahl bleibt 2n, aber jedes Chromosom besteht nun aus 2 Schwesterchromatiden). Histon-Synthese läuft parallel zur DNA-Replikation. Dauert 6–8 h beim Menschen.

**G2-Phase (Gap 2):**
Kontrolle der replizierten DNA, weitere Zellvergrößerung. **G2/M-Checkpoint**: Wird die DNA-Replikation vollständig abgeschlossen? Ist alles repariert? Schlüsselmolekül: **Cyclin B / CDK1** (MPF, Maturation Promoting Factor) → löst Mitose aus.

**M-Phase (Mitose + Zytokinese):**
Kernspaltung + Zellteilung. Kontrolliert durch den **Spindel-Checkpoint** (Kinetochor-Komplex prüft, ob alle Chromosomen an Spindelfasern angehängt sind → sonst kein Anaphase-Beginn).

> **Merke:** G0 = Ruhephase, G1/S = Tumor-Checkpoint (Rb/E2F), G2/M = CDK1/CyclinB. Tumorzellen überwinden Checkpoints durch Mutationen in p53, Rb, Cyclin-Genen.

{{DIAGRAM:cell-cycle}}

{{IMAGE}}

---

## Mitose — Somatische Zellteilung


{{DIAGRAM:mitosis}}

**Prophase:**
Chromosomen kondensieren (werden sichtbar durch Histon-H3-Phosphorylierung). Das **Zentrosom** dupliziert sich und wandert zu den Polen. Die **Kernhülle löst sich auf**. Der **Spindelapparat** (Mikrotubuli aus Zentrosomen) beginnt sich zu bilden.

**Prometaphase:**
Kernhülle vollständig aufgelöst. Spindelmikrotubuli heften sich an die **Kinetochore** der Chromosomen (Proteinstruktur am Zentromer). Chromosomen bewegen sich chaotisch.

**Metaphase:**
Alle Chromosomen sind an der **Metaphasenplatte** (Äquatorialplatte) ausgerichtet. **Spindel-Checkpoint** aktiv: Erst wenn alle Kinetochore besetzt sind → Signal für Anaphase.

**Anaphase:**
**Schwesterchromatiden trennen sich** (Protease Separase spaltet Cohesin, das die Chromatiden zusammenhält). Die Chromatiden werden zu entgegengesetzten Polen gezogen (Motorproteine: Kinesin, Dynein). Ergebnis: 46 Chromosomen pro Pol.

**Telophase:**
Chromosomen dekondensieren. **Kernhülle bildet sich neu** (aus ER-Membranen). Nukleolus taucht wieder auf.

**Zytokinese:**
Zellteilung durch **Kontraktilen Ring** (Aktin + Myosin II) → Einschnürung → 2 Tochterzellen. In Pflanzenzellen: Zellplatte (Phragmoplast aus Golgi-Vesikeln).

> **Merke:** Anaphase = Schwesterchromatiden trennen sich (Cohesin gespalten). NICHT die homologen Chromosomen! Das ist Meiose I.

---

## Meiose — Keimzellteilung


{{DIAGRAM:meiosis}}

**Meiose I — Reduktionsteilung:**
Reduziert den Chromosomensatz von diploid (2n) auf haploid (n).

*Prophase I (am längsten, Unterst.: Leptotän → Zygotän → Pachytän → Diplotän → Diakinese):*
- **Zygotän:** Homologe Chromosomen lagern sich zusammen (**synapsis**) und bilden **Bivalente** (Tetraden: 4 Chromatiden)
- **Pachytän:** **Crossing-over** findet statt! Am **Synaptonemalcomplex** tauschen homologe Chromosomen DNA-Segmente aus (Rekombination). Erzeugt neue Allel-Kombinationen → genetische Vielfalt!
- **Diplotän:** Homologe beginnen, sich zu trennen. Sichtbar werden **Chiasmata** (physische Kreuzungspunkte des Crossing-overs)

*Metaphase I:*
**Bivalente** (nicht einzelne Chromosomen wie in der Mitose) richten sich an der Metaphasenplatte aus. **Zufällige Ausrichtung der Bivalente** → weitere Quelle genetischer Variabilität (bei 23 Bivalenten: 2²³ = 8,4 Millionen verschiedene Kombinationen).

*Anaphase I:*
**Homologe Chromosomen trennen sich** (nicht die Schwesterchromatiden!). Jeder Pol erhält ein Chromosom pro homologem Paar (jeweils aus 2 Schwesterchromatiden bestehend). Das Cohesin an Zentromerregionen bleibt intakt (Schutzmechanismus durch Shugoshin).

*Telophase I + Zytokinese I:*
2 haploide Zellen mit je n Chromosomen (jedes Chromosom = 2 Schwesterchromatiden).

**Meiose II — Äquationsteilung (wie Mitose):**
Trennung der Schwesterchromatiden in jeder haploiden Zelle. Ergebnis: 4 haploide Zellen (n), genetisch verschieden.

> **Merke:** Meiose I = homologe Chromosomen trennen sich (Reduktion). Meiose II = Schwesterchromatiden trennen sich (wie Mitose). Crossing-over passiert NUR in Prophase I!

---

## Vergleichstabelle: Mitose vs. Meiose

| Merkmal | Mitose | Meiose |
|---------|--------|--------|
| Zelltyp | Somatische Zellen | Keimzellen (Gonaden) |
| Teilungen | 1 | 2 (I + II) |
| Tochterzellen | 2 | 4 |
| Chromosomensatz | Diploid (2n → 2n) | Haploid (2n → n) |
| Genetische Identität | Identisch | Genetisch verschieden |
| Crossing-over | Nein (praktisch nie) | Ja (Prophase I) |
| Bivalente | Nein | Ja (Meiose I) |
| Funktion | Wachstum, Reparatur | Gametenbildung |

---

## Non-disjunction und Chromosomenaberrationen

**Non-disjunction** = fehlerhafte Chromosomentrennung → eine Tochterzelle erhält ein Chromosom zu viel, die andere zu wenig.

**Kann in der Meiose I oder II auftreten:**
- **Meiose I:** Homologe Chromosomen trennen sich nicht → alle 4 Tochterzellen betroffen
- **Meiose II:** Schwesterchromatiden trennen sich nicht → 2 von 4 Tochterzellen betroffen (2 normal, 2 mit Aberration)

**Häufige Chromosomenaberrationen:**

| Chromosom | Aberration | Syndrom | Häufigkeit |
|---|---|---|---|
| Trisomie 21 | +21 | Down-Syndrom | 1:700, steigt mit Mutteralter |
| Trisomie 18 | +18 | Edwards-Syndrom | 1:5.000, meist letal |
| Trisomie 13 | +13 | Patau-Syndrom | 1:10.000, meist letal |
| 45,X0 | Monosomie X | Turner-Syndrom | 1:2.500 Frauen |
| 47,XXY | Trisomie X | Klinefelter-Syndrom | 1:1.000 Männer |

**Risikofaktoren:** Mütterliches Alter bei Trisomien (Oozyten werden in Prophase I arretiert und mit dem Alter schlechter kontrolliert). Pränatale Diagnostik: Amniozentese (15.–18. SSW), Chorionzottenbiopsie (10.–12. SSW), nichtinvasive Pränataldiagnostik (NIPD, cell-free fetal DNA ab 10. SSW).

> **Merke:** Trisomie 21 = häufigste Chromosomenaberration Lebendgeborener; Non-disjunction in Meiose I: alle 4 Keimzellen betroffen; in Meiose II: 2 von 4.`,
      merksätze: [
        "Mitose: 2n → 2 × 2n (identisch). Meiose: 2n → 4 × n (genetisch verschieden). Der Schlüssel: Meiose hat 2 Teilungen!",
        "Crossing-over: Austausch von DNA-Segmenten zwischen homologen Chromosomen in der Prophase I. Erzeugt genetische Vielfalt.",
        "Anaphase Mitose/Meiose II: Schwesterchromatiden trennen sich. Anaphase I (Meiose): Homologe Chromosomen trennen sich.",
        "Spindel-Checkpoint: Erst wenn ALLE Kinetochore besetzt sind, beginnt die Anaphase. Fehler → Non-disjunction.",
        "Non-disjunction → Trisomie (47 Chromosomen) oder Monosomie (45). Trisomie 21 = Down-Syndrom.",
        "G0-Phase: Ruhephase, aus der Zellen nicht mehr in den Zellzyklus zurückkehren (Neurone, Herzmuskelzellen).",
        "Cyclin D/CDK4 → G1/S-Checkpoint. Cyclin B/CDK1 → G2/M-Checkpoint. Cycline schwanken; CDKs sind konstant.",
      ],
      lernziele: [
        "Mitose-Phasen (Prophase, Metaphase, Anaphase, Telophase) beschreiben und Zytokinese erklären",
        "Meiose I und II unterscheiden und die Bedeutung von Crossing-over für genetische Vielfalt erklären",
        "Zellzyklus-Kontrollpunkte und deren Rolle bei der Krebsentstehung verstehen",
      ],
      selfTest: [
        {
          question: "Eine Zelle tritt in die S-Phase ein. Was passiert mit dem DNA-Gehalt?",
          options: [
            "Der DNA-Gehalt bleibt unverändert bei 2n",
            "Der DNA-Gehalt verdoppelt sich von 2n auf 4n (Chromosomenzahl bleibt 2n)",
            "Die Chromosomenzahl verdoppelt sich von 2n auf 4n",
            "Der DNA-Gehalt halbiert sich von 2n auf n",
            "Nur die mitochondriale DNA wird repliziert",
          ],
          correctIndex: 1,
          explanation:
            "In der S-Phase wird die gesamte DNA repliziert: Jedes Chromosom besteht danach aus 2 Schwesterchromatiden, die am Zentromer verbunden sind. Der DNA-Gehalt (Menge) steigt von 2n auf 4n, aber die Chromosomenzahl bleibt 2n — die Chromosomen sind nur verdoppelt (jedes = 2 Chromatiden). Erst die Anaphase trennt die Schwesterchromatiden.",
          hints: [
            "S-Phase = Synthese, also DNA-Synthese. Was passiert mit der DNA-Menge?",
            "Chromosomenzahl ≠ DNA-Gehalt. Ein Chromosom kann aus 1 oder 2 Chromatiden bestehen.",
          ],
          difficulty: 2,
          tags: ["s-phase", "dna-replikation", "zellzyklus"],
        },
        {
          question: "Was unterscheidet die Anaphase I der Meiose von der Anaphase der Mitose?",
          options: [
            "In der Anaphase I trennen sich Schwesterchromatiden; in der Mitose-Anaphase homologe Chromosomen",
            "In der Anaphase I trennen sich homologe Chromosomen; in der Mitose-Anaphase Schwesterchromatiden",
            "Beide Anaphasen sind identisch — es trennen sich immer Schwesterchromatiden",
            "In der Anaphase I entstehen neue Chromosomen durch Crossing-over",
            "Die Anaphase I findet im Zytoplasma statt, die Mitose-Anaphase im Kern",
          ],
          correctIndex: 1,
          explanation:
            "Dies ist der entscheidende Unterschied: In der Mitose-Anaphase (und Meiose II-Anaphase) trennen sich Schwesterchromatiden, nachdem Cohesin durch Separase gespalten wird. In der Meiose-I-Anaphase trennen sich die homologen Chromosomen voneinander — die Schwesterchromatiden bleiben am Zentromer verbunden (Shugoshin schützt das zentromere Cohesin). Das Crossing-over findet in der Prophase I statt, nicht in der Anaphase.",
          hints: [
            "Meiose I = Reduktionsteilung. Was wird reduziert? Der Chromosomensatz!",
            "Homologe Chromosomen = väterliches + mütterliches Chromosom des gleichen Paares.",
          ],
          difficulty: 2,
          tags: ["meiose", "mitose", "anaphase", "schwesterchromatiden"],
        },
        {
          question:
            "Beim Crossing-over in der Prophase I tauschen homologe Chromosomen DNA-Abschnitte aus. Was ist die genetische Konsequenz?",
          options: [
            "Es entstehen Chromosomen mit neuen Allelkombinationen (Rekombination)",
            "Es entstehen Chromosomen mit verdoppeltem DNA-Gehalt",
            "Crossing-over repariert Mutationen in der DNA",
            "Das Crossing-over verhindert Trisomien",
            "Es entstehen haploide Chromosomen direkt nach dem Crossing-over",
          ],
          correctIndex: 0,
          explanation:
            "Crossing-over ist der physische Austausch von DNA-Segmenten zwischen homologen Chromatiden am Synaptonemalcomplex (Pachytän der Prophase I). Dadurch entstehen Rekombinanten-Chromosomen mit neuen Allelkombinationen, die weder dem väterlichen noch dem mütterlichen Chromosom exakt entsprechen. Dies ist die wichtigste Quelle genetischer Variabilität (neben der zufälligen Ausrichtung der Bivalente). Pro Bivalent gibt es mindestens ein Chiasmata (physische Kreuzungsstelle).",
          hints: [
            "Crossing-over = Rekombination. Was ist das Ergebnis der Rekombination?",
            "Neue Kombination väterlicher + mütterlicher Allele = neue genetische Variante.",
          ],
          difficulty: 2,
          tags: ["crossing-over", "rekombination", "prophase-i", "meiose"],
        },
        {
          question:
            "Ein Spermium mit einem zusätzlichen Chromosom 21 (durch Non-disjunction) befruchtet eine normale Eizelle. Welchen Chromosomensatz hat die Zygote?",
          options: [
            "45,X0 (Turner-Syndrom)",
            "47,XXY (Klinefelter-Syndrom)",
            "47,+21 (Trisomie 21, Down-Syndrom)",
            "46,XX (normal)",
            "48,XXXX (Tetra-X-Syndrom)",
          ],
          correctIndex: 2,
          explanation:
            "Wenn sowohl Ei als auch Spermium durch Non-disjunction je ein zusätzliches Chromosom 21 erhalten haben, hat das Zygote 47 Chromosomen mit drei Kopien von Chromosom 21 → Trisomie 21 = Down-Syndrom. Non-disjunction kann in Meiose I (beide Gameten aus einer Keimzelle betroffen) oder Meiose II (nur 2 von 4 Gameten betroffen) auftreten. Das Risiko für Trisomie 21 steigt stark mit dem Alter der Mutter (v.a. >35 Jahre).",
          hints: [
            "2 Chromosomen 21 (normal) + 1 extra = 3 Chromosomen 21 = Trisomie 21.",
            "Trisomie = 47 Chromosomen. Welches Syndrom ist am häufigsten?",
          ],
          difficulty: 2,
          tags: ["trisomie-21", "non-disjunction", "down-syndrom"],
        },
        {
          question: "Der G1/S-Checkpoint wird hauptsächlich durch welches Molekül kontrolliert?",
          options: [
            "Cyclin B / CDK1 (MPF)",
            "Cyclin D / CDK4 → Rb-Phosphorylierung → E2F-Freigabe",
            "Separase / Securin",
            "Shugoshin / PP2A",
            "Importin-alpha / RanGTP",
          ],
          correctIndex: 1,
          explanation:
            "Am G1/S-Checkpoint: Wachstumssignale (Mitogene) induzieren Cyclin-D-Expression → Cyclin D bindet CDK4/6 → Komplex phosphoryliert Rb (Retinoblastom-Protein) → Rb lässt Transkriptionsfaktor E2F frei → E2F aktiviert Gene für S-Phase-Eintritt (Cyclin E, DNA-Polymerase). Rb ist ein Tumorsuppressor — bei Rb-Verlust (Retinoblastom-Mutation) kann die Zelle unkontrolliert in die S-Phase eintreten. Cyclin B/CDK1 kontrolliert den G2/M-Checkpoint. Separase spaltet Cohesin in der Anaphase.",
          hints: [
            "G1 → S: Zelle entscheidet, ob sie teilt. Welches Cyclin ist in G1 aktiv?",
            "Rb ist ein Tumorsuppressor — wenn er phosphoryliert wird, lässt er E2F frei.",
          ],
          difficulty: 3,
          tags: ["g1-s-checkpoint", "cyclin-d", "cdk4", "rb", "e2f"],
        },
      ],
      altfrage: {
        question:
          "Eine Zelle in der Metaphase I der Meiose unterscheidet sich von einer Zelle in der Metaphase der Mitose dadurch, dass...",
        answer:
          "Correct answer: ...in der Metaphase I Bivalente (Tetraden aus 4 Chromatiden) an der Äquatorialplatte ausgerichtet sind. In der Mitose-Metaphase richten sich Einzelchromosomen (mit 2 Schwesterchromatiden) an der Äquatorialplatte aus. In der Meiose-I-Metaphase richten sich Bivalente aus (= 2 homologe Chromosomen, je mit 2 Schwesterchromatiden = 4 Chromatiden pro Bivalent, auch 'Tetrade' genannt). Crossing-over fand bereits in der Prophase I statt — nicht in der Metaphase.",
      },
      klinischerBezug:
        "Trisomie 21 (Down-Syndrom): Non-disjunction in Meiose I (häufiger) oder II → Eizelle mit 2× Chromosom 21 → Trisomie 47,XX/XY,+21. Häufigste chromosomale Ursache geistiger Behinderung. Risiko bei Mutter >35 J.: ~1:350, bei >45 J.: ~1:20. Zusätzlich: Herzfehler (ASD/VSD, ~40%), Leukämierisiko erhöht, Alzheimer-Risiko (Chr. 21 trägt APP-Gen). Turner-Syndrom (45,X0): meist Non-disjunction im väterlichen Spermium. Klinefelter (47,XXY): Non-disjunction maternal oder paternal. Krebsentstehung durch Checkpoint-Defekte: TP53 (kodiert p53, 'Wächter des Genoms') ist in ~50% aller menschlichen Tumoren mutiert — ohne p53 kein Zellzyklus-Arrest nach DNA-Schäden → Tumorzellen akkumulieren weitere Mutationen.",
    },

    // ─── UK8 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-08",
      title: "Energiestoffwechsel — Glykolyse, Citratzyklus & Atmungskette",
      imageUrl: "/images/bms/bio-mitochondrium.jpg",
      imageCaption: "Abb.: Mitochondrium als Ort der Zellatmung (OpenStax, CC BY 4.0)",
      stichworte: [
        "Glykolyse",
        "Citratzyklus",
        "Atmungskette",
        "ATP",
        "NADH",
        "Pyruvat",
        "Acetyl-CoA",
        "Oxidative Phosphorylierung",
        "Chemiosmose",
        "Anaerober Stoffwechsel",
      ],
      content: `## Glykolyse — Der erste Schritt

Jede Zelle braucht ATP — und der erste Schritt zur Energiegewinnung ist die **Glykolyse**. Sie ist eine Sequenz von 10 enzymatischen Reaktionen im **Zytoplasma**, die Glucose (C₆) in 2 Pyruvat (C₃) spaltet. Sie ist sowohl aerob als auch anaerob möglich und liefert sofort verfügbares ATP.

**Die 10 Schritte in drei Phasen:**

*Phase 1 — Energieinvestitionsphase (Schritte 1–5):*
Glucose wird phosphoryliert (Verbrauch von 2 ATP) und aktiviert. Glucose (6C) → Fructose-1,6-bisphosphat → Spaltung in 2 Triosen (Glycerinaldehyd-3-Phosphat, G3P).

*Phase 2 — Energiekonversionsphase (Schritte 6–10):*
Aus 2 G3P entstehen 2 Pyruvat. Pro Triose: 2 ATP + 1 NADH. Für beide Triosen: 4 ATP + 2 NADH.

**Nettobilanz der Glykolyse:**
- 1 Glucose → 2 Pyruvat
- 2 ATP (netto: 4 gebildet − 2 investiert)
- 2 NADH (im Zytoplasma)

**Schlüsselenzyme der Glykolyse:**
- **Hexokinase** (Schritt 1): Glucose + ATP → Glucose-6-Phosphat + ADP. Fängt Glucose in der Zelle “ein” (Phosphorylierung verhindert Rücktransport durch GLUT-Transporter). Isoform in der Leber: Glukokinase (niedrigere Affinität, nicht durch G6P gehemmt → funktioniert als Glucosesensor).
- **Phosphofructokinase-1 (PFK-1)** (Schritt 3, Schlüsselenzym!): Fructose-6-Phosphat → Fructose-1,6-bisphosphat. **Wichtigstes Regulationsenzym der Glykolyse.** Gehemmt durch ATP (hohe Energie → Glykolyse bremsen) und Citrat (Citratzyklus läuft bereits). Aktiviert durch AMP/ADP (niedrige Energie → Glykolyse beschleunigen) und Fructose-2,6-bisphosphat (Insulin-Signal). Irreversible Reaktion!
- **Pyruvat-Kinase** (Schritt 10): Phosphoenolpyruvat → Pyruvat + ATP. Gehemmt durch ATP und Alanin (Glukoneogenese-Signal).

> **Merke:** PFK-1 = das wichtigste Regulationsenzym der Glykolyse. ATP hemmt, AMP aktiviert. Insulin aktiviert über Fructose-2,6-bisphosphat. Merke: “ATP bremst, wenn Energie da ist.”

{{IMAGE}}

---

## Pyruvat-Dehydrogenase — Der Brückenschritt


**Reaktion:** Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH

Pro Glucose (2 Pyruvat): 2 Acetyl-CoA + 2 CO₂ + 2 NADH

**Cofaktoren des PDH:** Thiaminpyrophosphat (TPP, aus Vitamin B1/Thiamin!), Liponsäure, CoA (aus Pantothensäure/B5), FAD (aus Riboflavin/B2), NAD⁺ (aus Niacin/B3).

**Regulation:** PDH-Kinase phosphoryliert und inaktiviert PDH (bei hohem ATP, NADH, Acetyl-CoA). PDH-Phosphatase aktiviert PDH (bei Calcium, Insulin). **Klinisch wichtig:** Thiamin (B1)-Mangel → PDH-Funktionsverlust → Pyruvat akkumuliert → Laktat ↑. Bei Alkoholismus: Wernicke-Enzephalopathie (Thiamin-Mangel → PDH-Defekt → Glukosestoffwechsel im Gehirn zusammengebrochen).

> **Merke:** Brückenschritt = Pyruvat → Acetyl-CoA. Findet in Mitochondrien statt. Thiamin-Mangel → PDH-Defekt → Wernicke-Enzephalopathie!

---

## Citratzyklus (Krebszyklus) — Vollständige Oxidation

Der Citratzyklus findet in der **Mitochondrienmatrix** statt und oxidiert Acetyl-CoA (C₂) schrittweise zu 2 CO₂, wobei die Energie in Reduktionsäquivalenten (NADH, FADH₂) und einem GTP gespeichert wird. Oxalacetat wird dabei regeneriert — daher ein **Zyklus**.

**Die 8 Schritte im Detail:**

| Nr. | Substrat → Produkt | Enzym | C-Atome | Energieprodukt | Besonderheit |
|-----|---|---|---|---|---|
| 1 | Acetyl-CoA (C₂) + Oxalacetat (C₄) → **Citrat** (C₆) | **Citrat-Synthase** | 4→6 | — | Kondensation; irreversibel; reguliert! |
| 2 | Citrat → **Isocitrat** | Aconitase | 6→6 | — | Isomerisierung über cis-Aconitat (Zwischenprodukt) |
| 3 | Isocitrat → **α-Ketoglutarat** + CO₂ | **Isocitrat-DH** | 6→5 | **1 NADH** | Oxidative Decarboxylierung; Schrittmacher! |
| 4 | α-Ketoglutarat → **Succinyl-CoA** + CO₂ | **α-Ketoglutarat-DH** | 5→4 | **1 NADH** | Thiamin (B₁)-abhängig; mechanistisch analog zu PDH |
| 5 | Succinyl-CoA → **Succinat** | Succinyl-CoA-Synthetase | 4→4 | **1 GTP** | Substratkettenphosphorylierung (GTP ≈ ATP) |
| 6 | Succinat → **Fumarat** | **Succinat-DH (Komplex II)** | 4→4 | **1 FADH₂** | Einziges Membranenzym des Zyklus; direkt in innerer Mitochondrienmembran verankert |
| 7 | Fumarat → **L-Malat** | Fumarase | 4→4 | — | Hydratisierung (H₂O-Addition) |
| 8 | L-Malat → **Oxalacetat** | Malat-DH | 4→4 | **1 NADH** | Gleichgewicht liegt auf Seite von Malat; wird durch raschen Oxalacetat-Verbrauch (Schritt 1) vorangetrieben |

> **Merke:** Merkhilfe für die Reihenfolge: **C**itrat — **I**socitrat — **A**lpha-Ketoglutarat — **S**uccinyl-CoA — **S**uccinat — **F**umarat — **M**alat — **O**xalacetat → Eselsbrücke: "**C**itrus **I**st **A**uch **S**auer, **S**o **F**risst **M**an **O**rangen"

---

### Energiebilanz des Citratzyklus

**Pro Acetyl-CoA (1 Durchgang):**

| Produkt | Anzahl | ATP-Äquivalent (via Atmungskette) |
|---|---|---|
| NADH | 3 | 3 × 2,5 = **7,5 ATP** |
| FADH₂ | 1 | 1 × 1,5 = **1,5 ATP** |
| GTP | 1 | **1 ATP** (direkt) |
| **Summe** | | **10 ATP-Äquivalente** |

**Pro Glucose (2 Acetyl-CoA → 2 Durchgänge):** 6 NADH + 2 FADH₂ + 2 GTP = **20 ATP-Äquivalente**

Die NADH- und FADH₂-Moleküle sind noch keine ATP — sie speichern Elektronen, die erst in der Atmungskette auf O₂ übertragen werden. **Ohne funktionsfähige Atmungskette** (z. B. bei Hypoxie oder Cyanidvergiftung) können NAD⁺ und FAD nicht regeneriert werden → Citratzyklus stoppt.

---

### Regulation des Citratzyklus

Drei Enzyme regulieren den Durchsatz — alle werden durch den **Energiestatus** der Zelle gesteuert:

| Enzym | Gehemmt durch | Aktiviert durch |
|---|---|---|
| **Citrat-Synthase** (Schritt 1) | NADH, Succinyl-CoA, ATP, Citrat | AMP, Oxalacetat (Substrat) |
| **Isocitrat-DH** (Schritt 3) | NADH, ATP | ADP, Ca²⁺ |
| **α-Ketoglutarat-DH** (Schritt 4) | NADH, Succinyl-CoA, ATP | Ca²⁺ |

**Logik der Regulation:** Hohe NADH/ATP-Spiegel signalisieren "genug Energie" → Zyklus bremst. Niedriges Energieniveau (hohes ADP/AMP) und Ca²⁺ (Muskelkontraktion!) → Zyklus beschleunigt. Calcium ist besonders im Muskel wichtig: Bei Kontraktion steigt Ca²⁺ → Citratzyklus und ATP-Produktion werden hochgefahren, genau wenn der Muskel Energie braucht.

> **Merke:** Drei Schrittmacher: Citrat-Synthase (1), Isocitrat-DH (3), α-Ketoglutarat-DH (4). Alle gehemmt durch NADH/ATP (Energie da → bremsen). Isocitrat-DH und α-Ketoglutarat-DH werden durch Ca²⁺ aktiviert (Muskelarbeit → mehr ATP nötig).

---

### Amphibolismus — Citratzyklus als Stoffwechselkreuzung

Der Citratzyklus ist nicht nur katabol (abbauend), sondern auch **anabol** (aufbauend) — daher **amphibol** (beides). Intermediärmetabolite werden für Biosynthesen abgezweigt:

- **α-Ketoglutarat** → Transaminierung → **Glutamat** (Aminosäure, Neurotransmitter-Vorstufe)
- **Oxalacetat** → Transaminierung → **Aspartat** (Aminosäure, Harnstoffzyklus-Vorstufe)
- **Oxalacetat** → Phosphoenolpyruvat-Carboxykinase (PEPCK) → **Gluconeogenese** (Glucose-Neusynthese in der Leber)
- **Succinyl-CoA** → **Häm-Synthese** (Porphyrin-Ring für Hämoglobin, Cytochrome)
- **Citrat** → Export ins Zytoplasma → ATP-Citrat-Lyase → **Acetyl-CoA** → **Fettsäure-Synthese**

**Anaplerotische Reaktionen** (auffüllend): Wenn Zwischenprodukte abgezweigt werden, muss Oxalacetat nachgeliefert werden, sonst stoppt der Zyklus. Die wichtigste anaplerotische Reaktion:
- **Pyruvat + CO₂ → Oxalacetat** [Pyruvat-Carboxylase, Biotin (Vitamin B₇)-abhängig, aktiviert durch Acetyl-CoA]

> **Merke:** Citratzyklus = Drehscheibe des Stoffwechsels. α-KG → Glutamat, OAA → Aspartat/Gluconeogenese, Succinyl-CoA → Häm, Citrat → Fettsäuren. Anaplerose (Auffüllung): Pyruvat-Carboxylase liefert Oxalacetat nach (Biotin-abhängig).

---

## Atmungskette und Oxidative Phosphorylierung


**Die 4 Komplexe:**
- **Komplex I (NADH-Dehydrogenase):** NADH → NAD⁺ + 2e⁻ → pumpt 4 H⁺ in Intermembranraum. Hemmer: Rotenon (Insektizid), Metformin (schwacher Komplex-I-Inhibitor).
- **Ubichinon (Coenzym Q10):** Mobiler Elektronenträger in der Membran. Verbindet Komplex I und II mit Komplex III.
- **Komplex II (Succinat-Dehydrogenase):** FADH₂ → FAD + 2e⁻ → Ubichinon. Pumpt **keine** H⁺ (deshalb weniger ATP als NADH).
- **Komplex III (Cytochrom-bc1-Komplex):** Überträgt Elektronen von Ubichinol auf Cytochrom c → pumpt 4 H⁺. Hemmer: Antimycin A.
- **Cytochrom c:** Kleines, mobiles Häm-Protein im Intermembranraum. Überträgt Elektronen von Komplex III zu Komplex IV. **Bei Apoptose: wird aus Mitochondrien ins Zytoplasma freigesetzt → Caspase-9-Aktivierung!**
- **Komplex IV (Cytochrom-c-Oxidase):** Überträgt Elektronen auf O₂ → H₂O. Pumpt 2 H⁺. **O₂ ist der finale Elektronenakzeptor!** Hemmer: Cyanid (CN⁻), Kohlenmonoxid (CO) blockieren Komplex IV → kein O₂-Verbrauch → Atmungskette stoppt.
- **ATP-Synthase (Komplex V):** H⁺ fließen zurück durch die ATP-Synthase in die Matrix (Protonenkanal + Motorprotein) → Konformationsänderung → ADP + Pᵢ → ATP. **Chemiosmose (Mitchell-Hypothese, Nobelpreis 1978).** Hemmer: Oligomycin (schließt H⁺-Kanal), Dinitrophenol (DNP, Entkoppler: H⁺ leaken durch Membran ohne ATP-Synthese → Energie als Wärme).

**P/O-Verhältnis (ATP pro Sauerstoffatom):**
- NADH: ~2,5 ATP pro NADH (frühere Angabe: 3 ATP)
- FADH₂: ~1,5 ATP pro FADH₂ (frühere Angabe: 2 ATP)

> **Merke:** NADH → Komplex I → Q → Komplex III → Cyt c → Komplex IV → O₂ → H₂O. FADH₂ → Komplex II → Q (kein H⁺-Pumpen → weniger ATP). O₂ = finale Elektronenakzeptor. Cyanid blockiert Komplex IV!

**Redox-Grundprinzip:** Der Elektronentransport in der Atmungskette beruht auf Oxidation (Elektronen abgeben, OIL) und Reduktion (Elektronen aufnehmen, RIG) — NADH und FADH₂ liefern Elektronen, O₂ ist der finale Akzeptor.

---

## Gesamtbilanz des aeroben Glucoseabbaus

| Phase | ATP (direkt) | NADH | FADH₂ | ATP aus OXPHOS |
|-------|-------------|------|-------|----------------|
| Glykolyse | 2 | 2 | 0 | ~5 |
| Pyruvat-DH | 0 | 2 | 0 | ~5 |
| Citratzyklus (×2) | 2 | 6 | 2 | ~19 |
| **Gesamt** | **4** | **10** | **2** | **~26** |
| **Gesamtnetto** | | | | **~30–32 ATP** |

*(Ältere Lehrbücher: 36–38 ATP; neuere Berechnungen: 30–32 ATP durch realistischere P/O-Verhältnisse)*

---

## Anaerober Stoffwechsel

Ohne Sauerstoff (Hypoxie) kann die Atmungskette nicht funktionieren. NADH muss regeneriert werden, damit die Glykolyse weiterlaufen kann.

**Laktatgärung (im Muskel, Erythrozyten):**
Pyruvat + NADH → Laktat + NAD⁺ [Laktat-Dehydrogenase (LDH)]
- Nur 2 ATP pro Glucose (keine Atmungskette!)
- Regeneriert NAD⁺ für weitere Glykolyse
- Laktat kann in der Leber zu Glucose rückumgewandelt werden (Cori-Zyklus)

**Klinisch:** Laktatazidose bei Hypoxie (Sepsis, Herzstillstand, Schock), Metformin-Überdosierung (Komplex-I-Hemmung → mehr Laktat), Thiamin-Mangel (PDH-Ausfall → Pyruvat → Laktat).

**Ethanolgärung** (nur Hefen, nicht im Menschen): Pyruvat → Acetaldehyd → Ethanol.`,
      merksätze: [
        "Glykolyse = Zytoplasma, 2 ATP netto, 2 NADH. PFK-1 = Schlüsselenzym, ATP hemmt, AMP aktiviert.",
        "Pyruvat-DH: Pyruvat → Acetyl-CoA + CO₂ + NADH. Brückenschritt! Thiamin (B1) nötig. Wernicke bei B1-Mangel.",
        "Citratzyklus pro Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂.",
        "Atmungskette: NADH → Komplex I, FADH₂ → Komplex II, Cytochrom c → Komplex IV → O₂ → H₂O. ATP-Synthase via Chemiosmose.",
        "Cyanid blockiert Komplex IV → keine Atmungskette → kein ATP → Zytotoxizität.",
        "Anaerob: Pyruvat → Laktat (LDH) + NAD⁺ regeneriert. Nur 2 ATP. Laktatazidose bei Hypoxie/Sepsis.",
        "Gesamt aerob: ~30–32 ATP pro Glucose. NADH = ~2,5 ATP, FADH₂ = ~1,5 ATP.",
      ],
      lernziele: [
        "Glykolyse, Citratzyklus und Atmungskette lokalisieren und die ATP-Bilanz benennen",
        "Anaerobe Glykolyse von aerobem Glukoseabbau unterscheiden",
        "Die Rolle von NAD+/NADH und FAD/FADH2 als Elektronencarrier erklären",
      ],
      selfTest: [
        {
          question: "Warum liefert FADH₂ weniger ATP als NADH in der Atmungskette?",
          options: [
            "FADH₂ enthält weniger Elektronen als NADH",
            "FADH₂ gibt Elektronen in Komplex II ein, der keine Protonen pumpt — damit geringerer Protonengradient → weniger ATP",
            "FADH₂ wird im Zytoplasma produziert und muss erst transportiert werden",
            "FADH₂ ist ein Hemmstoff der ATP-Synthase",
            "FADH₂ reagiert direkt mit O₂ ohne ATP-Synthase",
          ],
          correctIndex: 1,
          explanation:
            "NADH gibt Elektronen in Komplex I ein, der dabei 4 H⁺ in den Intermembranraum pumpt. FADH₂ gibt Elektronen in Komplex II (Succinat-Dehydrogenase) ein, der KEINE Protonen pumpt. Da weniger H⁺ in den Intermembranraum transportiert werden, fließen auch weniger H⁺ durch die ATP-Synthase zurück → weniger ATP. Deshalb: NADH ~2,5 ATP; FADH₂ ~1,5 ATP. Succinat-Dehydrogenase = Komplex II ist das einzige Enzym, das sowohl im Citratzyklus als auch als Teil der Atmungskette fungiert.",
          hints: [
            "Wo 'landen' die Elektronen von FADH₂ in der Atmungskette?",
            "Komplex II pumpt keine Protonen — was bedeutet das für den Gradienten?",
          ],
          difficulty: 3,
          tags: ["fadh2", "nadh", "atmungskette", "komplex-ii", "atp"],
        },
        {
          question:
            "Ein Patient mit Cyanidvergiftung kollabiert trotz normaler Sauerstoffsättigung. Warum?",
          options: [
            "Cyanid blockiert die Hämoglobin-Bindung an O₂",
            "Cyanid hemmt PFK-1 und stoppt die Glykolyse",
            "Cyanid blockiert Komplex IV (Cytochrom-c-Oxidase) → O₂ kann nicht als Elektronenakzeptor dienen → Atmungskette stoppt",
            "Cyanid aktiviert die Laktatdehydrogenase → Laktatazidose",
            "Cyanid löst die innere Mitochondrienmembran auf",
          ],
          correctIndex: 2,
          explanation:
            "Cyanid (CN⁻) bindet irreversibel an Fe³⁺ im Häm-Zentrum der Cytochrom-c-Oxidase (Komplex IV) und blockiert die Übertragung von Elektronen auf O₂. Die Atmungskette kommt zum Stillstand: kein Protonengradient → kein ATP. O₂ ist zwar im Blut vorhanden (normale Sättigung!), kann aber nicht verwertet werden. Venöses Blut erscheint kirschrot (hohe O₂-Sättigung). Behandlung: Hydroxocobalamin (bindet CN⁻), Natriumthiosulfat (CN⁻ → Thiocyanat), Amylnitrit (erzeugt Met-Hb, das CN⁻ bindet).",
          hints: [
            "Komplex IV = Cytochrom-c-Oxidase. Was ist seine Funktion?",
            "Cyanid bindet an Eisen. Welches Eisen ist in Komplex IV?",
          ],
          difficulty: 2,
          tags: ["cyanid", "komplex-iv", "atmungskette", "vergiftung"],
        },
        {
          question:
            "Im Citratzyklus werden pro Acetyl-CoA drei NADH, ein FADH₂ und ein GTP gebildet. An welchen Schritten entstehen die drei NADH?",
          options: [
            "Citrat-Synthase, Aconitase, Fumarase",
            "Isocitrat-DH, α-Ketoglutarat-DH, Malat-DH",
            "Succinyl-CoA-Synthetase, Succinat-DH, Malat-DH",
            "Pyruvat-DH, Isocitrat-DH, Succinat-DH",
            "Citrat-Synthase, Isocitrat-DH, Succinat-DH",
          ],
          correctIndex: 1,
          explanation:
            "Die drei NADH entstehen bei: (1) Isocitrat → α-Ketoglutarat (Isocitrat-DH, Schritt 3), (2) α-Ketoglutarat → Succinyl-CoA (α-Ketoglutarat-DH, Schritt 4), (3) Malat → Oxalacetat (Malat-DH, Schritt 8). FADH₂ entsteht nur bei Succinat → Fumarat (Succinat-DH, Schritt 6). GTP bei Succinyl-CoA → Succinat (Schritt 5). Pyruvat-DH gehört nicht zum Citratzyklus, sondern ist der Brückenschritt davor.",
          difficulty: 2,
          tags: ["citratzyklus", "nadh", "isocitrat-dh", "ketoglutarat-dh", "malat-dh"],
        },
        {
          question:
            "Succinyl-CoA aus dem Citratzyklus ist Ausgangsstoff für welche medizinisch wichtige Biosynthese?",
          options: [
            "Fettsäure-Synthese",
            "Gluconeogenese",
            "Häm-Synthese (Porphyrin-Ring für Hämoglobin und Cytochrome)",
            "Cholesterin-Synthese",
            "Harnstoff-Synthese",
          ],
          correctIndex: 2,
          explanation:
            "Succinyl-CoA + Glycin → δ-Aminolävulinsäure (erster Schritt der Häm-Synthese). Häm ist essentiell für Hämoglobin (O₂-Transport), Myoglobin (O₂-Speicher im Muskel) und Cytochrome (Atmungskette). Fettsäure-Synthese nutzt Citrat (nicht Succinyl-CoA). Gluconeogenese nutzt Oxalacetat. Cholesterin-Synthese startet mit Acetyl-CoA. Dies illustriert den amphibolen Charakter des Citratzyklus als Stoffwechselkreuzung.",
          difficulty: 2,
          tags: ["citratzyklus", "succinyl-coa", "häm-synthese", "amphibolismus"],
        },
        {
          question: "Welches Enzym ist das wichtigste Regulationsenzym der Glykolyse?",
          options: [
            "Hexokinase",
            "Glukokinase",
            "Phosphofructokinase-1 (PFK-1)",
            "Pyruvat-Kinase",
            "Aldolase",
          ],
          correctIndex: 2,
          explanation:
            "PFK-1 (Phosphofructokinase-1) ist das wichtigste Regulationsenzym der Glykolyse. Sie katalysiert eine irreversible Reaktion (Fructose-6-Phosphat → Fructose-1,6-bisphosphat) und ist der erste zyklus-spezifische Schritt der Glykolyse. Regulation: Gehemmt durch ATP (hohe Energie → Glykolyse bremsen), Citrat (Citratzyklus läuft → Energie vorhanden). Aktiviert durch AMP/ADP (Energiemangel → Glykolyse beschleunigen), Fructose-2,6-bisphosphat (Insulin-Signal → Glykolyse stimulieren). Hexokinase phosphoryliert Glucose (Schritt 1), ist aber durch G6P reguliert (Produkt-Hemmung), nicht das Hauptregulationsenzym.",
          hints: [
            "Das Schlüsselenzym reguliert den 'point of no return' der Glykolyse.",
            "ATP hemmt, AMP aktiviert — welches Enzym reagiert so auf den Energiestatus?",
          ],
          difficulty: 1,
          tags: ["pfk-1", "glykolyse", "regulation", "schlüsselenzym"],
        },
        {
          question:
            "Was geschieht mit Pyruvat in der Skelettmuskulatur bei intensiver Belastung ohne ausreichend Sauerstoff?",
          options: [
            "Pyruvat wird direkt in ATP umgewandelt",
            "Pyruvat wird zu Acetyl-CoA in der Mitochondrien-Matrix umgewandelt",
            "Pyruvat wird durch Laktat-Dehydrogenase (LDH) zu Laktat reduziert → NAD⁺ wird regeneriert",
            "Pyruvat verlässt die Zelle und wird in der Leber abgebaut",
            "Pyruvat wird zu Glucose rückumgewandelt (Glukoneogenese im Muskel)",
          ],
          correctIndex: 2,
          explanation:
            "Bei Sauerstoffmangel (intensiver Belastung) kann Pyruvat nicht in die Mitochondrien eingeschleust werden (Pyruvat-DH bremst). Die Glykolyse muss aber weiterlaufen, um auch anaerob ATP zu produzieren. Dafür muss NAD⁺ regeneriert werden: LDH reduziert Pyruvat zu Laktat und oxidiert NADH → NAD⁺ wieder verfügbar. Das Laktat wird ins Blut abgegeben und in der Leber (Cori-Zyklus) zu Glucose rückumgewandelt. Glukoneogenese im Muskel findet nicht statt — der Muskel besitzt nicht das nötige Enzym Glucose-6-Phosphatase.",
          hints: [
            "Ohne O₂: keine Atmungskette. Was blockiert? NADH kann nicht oxidiert werden.",
            "LDH = Laktat-Dehydrogenase. Was macht sie mit Pyruvat?",
          ],
          difficulty: 2,
          tags: ["pyruvat", "laktat", "ldh", "anaerob", "cori-zyklus"],
        },
        {
          question: "Welche Funktion hat die Mitchell-Chemiosmose-Hypothese erklärt?",
          options: [
            "Dass Glucose direkt zu ATP phosphoryliert wird",
            "Dass ein Protonengradient über der inneren Mitochondrienmembran die ATP-Synthase antreibt",
            "Dass Elektronen direkt von NADH auf ADP übertragen werden",
            "Dass die Atmungskette ausschließlich in der äußeren Mitochondrienmembran lokalisiert ist",
            "Dass Sauerstoff direkt mit NADH reagiert und dabei ATP freigesetzt wird",
          ],
          correctIndex: 1,
          explanation:
            "Peter Mitchell erhielt 1978 den Nobelpreis für die Chemiosmose-Hypothese: Die Komplexe I, III und IV pumpen H⁺ aus der Matrix in den Intermembranraum → elektrochemischer Protonengradient (ΔpH + ΔΨ = Protonenmotivkraft). H⁺ fließen energetisch abwärts durch die ATP-Synthase (F₀F₁-ATPase) zurück in die Matrix → Rotation der F₀-Untereinheit → Konformationsänderung der F₁-Untereinheit → ADP + Pᵢ → ATP. Entkoppler (Dinitrophenol, DNP) dissipieren den Protonengradient als Wärme ohne ATP-Synthese → Körperwärme steigt (historisch als 'Diätmittel' missbraucht, tödlich!).",
          hints: [
            "Mitchell = Chemiosmose. Was ist das Kernprinzip?",
            "H⁺-Gradient über eine Membran → Energie → was wird damit gemacht?",
          ],
          difficulty: 2,
          tags: ["chemiosmose", "mitchell", "atp-synthase", "protonengradient"],
        },
      ],
      altfrage: {
        question: "Welche Aussage zum Citratzyklus (Krebszyklus) ist korrekt?",
        answer:
          "Correct answer: Im Citratzyklus wird pro Acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP und 2 CO₂ produziert. Der Citratzyklus findet in der Mitochondrien-Matrix statt (A falsch — innere Membran = Atmungskette). Pro Acetyl-CoA-Durchgang werden 3 NADH, 1 FADH₂, 1 GTP (via Substratkettenphosphorylierung) und 2 CO₂ erzeugt (B korrekt). Die ATP-Synthese erfolgt in der Atmungskette (oxidative Phosphorylierung), nicht direkt im Citratzyklus (C falsch). Succinat-Dehydrogenase ist gleichzeitig Citratzyklus-Enzym und Komplex II der Atmungskette (D falsch). Ohne O₂ stoppt die Atmungskette → NAD⁺/FAD können nicht regeneriert werden → Citratzyklus kommt zum Stillstand (E falsch).",
      },
      klinischerBezug:
        "Laktatazidose: Anstieg des Blutlaktats >2 mmol/L bei Gewebehypoxie (Sepsis, kardiogener Schock, CO-Vergiftung) oder Medikamenten (Metformin → schwache Komplex-I-Hemmung → Laktat). Serum-Laktat ist ein Prognosemarker. Wernicke-Enzephalopathie: B1-Mangel (Alkoholismus, Hyperemesis gravidarum, parenterale Ernährung ohne B1) → PDH-Defekt → Gehirn kann Glucose nicht mehr aerob verwerten → Ophthalmoplegie, Ataxie, Bewusstseinsänderung. Sofort IV Thiamin! Cyanidvergiftung (Industrieunfall, Rauchgas): Blockade Komplex IV → keine ATP-Synthese → Gewebehypoxie trotz normaler O₂-Sättigung (Venenblut kirschrot!). Antidot: Hydroxocobalamin. MELAS-Syndrom: mitochondriale Myopathie, Laktatazidose, Schlaganfall-ähnliche Episoden — mtDNA-Mutation → Atmungskettendefekt → Laktatazidose + Neurodegeneration.",
    },
    // ─── UK9 ────────────────────────────────────────────────────────────────
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
      diagram: "plant-vs-animal-cell",
      altfrage: {
        question: "Woher stammt der bei der Photosynthese freigesetzte Sauerstoff (O₂)?",
        answer:
          "Der O₂ stammt aus der Photolyse des Wassers (H₂O) im Photosystem II (Thylakoidmembran). 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Dies wurde durch Isotopenexperimente mit ¹⁸O bewiesen: ¹⁸O im H₂O erscheint im O₂, ¹⁸O im CO₂ erscheint in der Glucose. Häufiger Irrtum: O₂ stammt aus CO₂ — das ist falsch.",
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
  ],
};
