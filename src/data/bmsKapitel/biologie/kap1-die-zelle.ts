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
      imageUrl: "/images/wiki-animal-cell.svg",
      imageCaption:
        "Abb.: Aufbau einer tierischen Zelle mit Organellen (Wikimedia Commons, Public Domain)",
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
      content: `Die Zelle ist die kleinste funktionelle Einheit des Lebens — und damit die Grundlage für fast jede BMS-Frage in Biologie. Dieses Kapitel behandelt den Aufbau eukaryotischer und prokaryotischer Zellen, ihre Organellen, den Membrantransport, die Zellteilung und den Energiestoffwechsel.

## Die sieben Kennzeichen des Lebens

{{IMAGE}}

Kein einzelnes Merkmal allein definiert Leben — erst ihr Zusammenspiel kennzeichnet ein lebendes System:

1. **Stoffwechsel** (Metabolismus): Chemische Reaktionen zum Aufbau (Anabolismus) und Abbau (Katabolismus) körpereigener Stoffe. **ATP** ist die universelle Energiewährung jeder Zelle — ohne ATP keine Arbeit.

2. **Reizbarkeit**: Wahrnehmung von Umweltreizen und gezielte Reaktion über Rezeptoren, Nervenleitungen und Signalkaskaden. Beispiel: Eine Nervenzelle feuert bei Berührung; eine Immunzelle reagiert auf einen Erreger.

3. **Fortpflanzung**: Weitergabe genetischer Information — sexuell (mit Rekombination) oder asexuell (identische Kopien).

4. **Wachstum und Entwicklung**: Zellvermehrung durch Zellteilung und differentielle Genexpression. Aus einer einzigen befruchteten Eizelle entstehen mehr als 200 verschiedene Zelltypen.

5. **Evolution**: Anpassung über Generationen durch Mutation, Rekombination und natürliche Selektion. Antibiotikaresistenz bei Bakterien ist ein aktuelles Beispiel.

6. **Bewegung**: Aktive Ortsveränderung (Flagellen, Muskelkontraktion) oder interne Bewegung (Vesikeltransport, Chromosomenverteilung bei Zellteilung).

7. **Homöostase**: Aktive Aufrechterhaltung innerer Gleichgewichte (pH, Temperatur, Blutzucker, Osmolarität) trotz schwankender Außenbedingungen. Das für die Medizin wichtigste Kennzeichen.

> **Merke:** **StReForWaEvoBeHo**: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase

{{DIAGRAM:animal-cell}}

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
| Evolution | ✓ (Antigendrift, Antigenshift) | ✓ |
| Bewegung | ✗ | ✓ |
| Zellstruktur | ✗ (keine Zelle, keine Ribosomen) | ✓ |

**Fazit:** Viren sind **obligat intrazelluläre Parasiten** — das heißt: Sie können nur **innerhalb** einer Wirtszelle existieren und vermehren; sie kapern deren Stoffwechsel. Außerhalb einer Wirtszelle sind sie metabolisch inaktiv.

**Klinische Konsequenz:** Da Viren keine Zellwand, keine eigenen Ribosomen und keinen eigenen Stoffwechsel haben, wirken klassische Antibiotika (die auf Bakterienstrukturen zielen) nicht. Antivirale Therapien müssen selektiv virale Strukturen angreifen (z.B. HIV-Reverse-Transkriptase (Enzym zur Umschreibung von RNA in DNA), Influenza-Neuraminidase (Enzym zur Virusfreisetzung)).

> **Merke:** Viren: Fortpflanzung ✓, Evolution ✓ — aber kein Stoffwechsel, keine Zellstruktur ✗ → Grenzfall; kein Ansprechen auf Antibiotika.

---

## Emergenz und hierarchische Organisation

Das Virus-Beispiel zeigt: Die Kennzeichen des Lebens sind kein beliebiges Beiwerk — sie definieren ein vollständiges System. Dieses System besitzt eine Eigenschaft, die seine Einzelteile nicht haben: **Emergenz**.

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
      altfrage: {
        text: "Viren gelten nicht als vollständige Lebewesen. Welche Eigenschaft fehlt ihnen im Vergleich zu echten Lebewesen?",
        options: [
          { id: "a", text: "Sie besitzen keine Nukleinsäuren (DNA oder RNA)." },
          { id: "b", text: "Sie sind nicht zur Fortpflanzung fähig." },
          { id: "c", text: "Sie haben keinen eigenständigen Stoffwechsel und keine Zellstruktur." },
          { id: "d", text: "Sie unterliegen keiner evolutionären Veränderung." },
          { id: "e", text: "Sie können nicht in lebende Wirtszellen eindringen." },
        ],
        correctOptionId: "c",
        explanation:
          "Viren fehlt der autonome Metabolismus sowie eine Zellstruktur – beides zentrale Kennzeichen des Lebens. Sie besitzen zwar Nukleinsäuren (A falsch) und sind sehr wohl zur Fortpflanzung fähig (B falsch, allerdings nur mit Wirtszelle). Viren evolvieren sogar besonders schnell (D falsch). Das Eindringen in Wirtszellen ist gerade der Mechanismus ihrer Vermehrung (E falsch).",
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
        {
          question:
            "Welche der folgenden Aussagen über die Kennzeichen des Lebens und Homöostase sind richtig?\n\n1. Negative Rückkopplung stabilisiert den Sollwert, indem der Effekt dem Auslöser entgegenwirkt\n2. Positive Rückkopplung ist der häufigste Mechanismus der Homöostase\n3. Viren besitzen Fortpflanzung und Evolution, aber keinen eigenständigen Stoffwechsel\n4. Emergenz bedeutet, dass auf höherer Organisationsebene neue Eigenschaften entstehen\n5. Die Blutgerinnung ist ein Beispiel für negative Rückkopplung",
          options: [
            "Nur 1 und 3",
            "Nur 1, 3 und 4",
            "Nur 2, 4 und 5",
            "Nur 1, 2 und 4",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 2 ist falsch — negative (nicht positive) Rückkopplung ist der häufigste Homöostase-Mechanismus. Aussage 5 ist falsch — Blutgerinnung ist ein klassisches Beispiel für positive Rückkopplung (Thrombin aktiviert weiteres Thrombin).",
          difficulty: 2,
          tags: ["typ-k", "kennzeichen des lebens", "homöostase", "rückkopplung"],
        },
        {
          question: "Welche der folgenden Aussagen über die Kennzeichen des Lebens ist FALSCH?",
          options: [
            "Alle Lebewesen besitzen einen Stoffwechsel, der Energie aus der Umgebung aufnimmt und umwandelt",
            "Fortpflanzung ist ein Kennzeichen des Lebens, das sowohl ungeschlechtlich als auch geschlechtlich erfolgen kann",
            "Homöostase bedeutet, dass lebende Systeme aktiv ein inneres Gleichgewicht aufrechterhalten",
            "Positive Rückkopplung ist der häufigste Mechanismus zur Aufrechterhaltung der Homöostase",
            "Evolution durch natürliche Selektion ermöglicht die Anpassung von Populationen an veränderte Umweltbedingungen",
          ],
          correctIndex: 3,
          explanation:
            "Aussage D ist falsch. Negative Rückkopplung (nicht positive) ist der häufigste Mechanismus der Homöostase — der Effekt wirkt dem Auslöser entgegen und stabilisiert den Sollwert (z. B. Thermoregulation, Blutzuckerregulation). Positive Rückkopplung verstärkt die Abweichung und kommt nur in Sonderfällen vor (z. B. Blutgerinnung, Geburtswehen). Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "kennzeichen des lebens", "homöostase"],
        },
      ],
    },

    // ─── UK2 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-02",
      title: "Prokaryoten vs. Eukaryoten",
      imageUrl: "/images/bms/bio-endosymbiose.svg",
      imageCaption:
        "Abb.: Endosymbiontentheorie — Ursprung von Mitochondrien und Chloroplasten aus Prokaryoten (CC BY 4.0)",
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
      content: `Alle Zellen lassen sich in zwei Grundtypen einteilen — Prokaryoten und Eukaryoten. Der zentrale Unterschied bestimmt, wie komplex eine Zelle organisiert sein kann.

## Grundstruktur im Vergleich

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

> **Merke:** Gram-positiv (violett) = dicke Peptidoglykanschicht. Gram-negativ (rosa) = dünn + LPS-Außenmembran. LPS → septischer Schock!

---

## Ribosomen 70S vs. 80S: Grundlage der Antibiotikatherapie

Der **Sedimentationskoeffizient** beschreibt, wie schnell ein Partikel in der Ultrazentrifuge sedimentiert. Prokaryotische Ribosomen haben den Wert **70S** (30S + 50S-Untereinheit), eukaryotische **80S** (40S + 60S). Wegen dieser strukturellen Unterschiede binden bestimmte Antibiotika selektiv an 70S-Ribosomen und hemmen so gezielt die bakterielle Proteinbiosynthese:

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

**Besonderheiten der mtDNA:** Kodiert nur ~13 Proteine der Atmungskette. Die Vererbung ist **maternal** — Mitochondrien stammen ausschließlich aus dem Eizellzytoplasma. Mutationen in der mtDNA führen zu mitochondrialen Erkrankungen wie MELAS (Schlaganfall-ähnliche Episoden mit Laktatazidose) oder LHON (hereditäre Optikusneuropathie).

> **Merke:** Endosymbiontentheorie: 5 Belege = zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit. mtDNA = maternale Vererbung.

---

## Archäen — die dritte Domäne des Lebens

Das **Drei-Domänen-Modell** (Carl Woese, 1977, basierend auf 16S rRNA-Sequenzvergleichen) teilt das Leben in:
- **Bacteria** (Bakterien)
- **Archaea** (Archäen)
- **Eukarya** (Eukaryoten)

**Archäen sind Prokaryoten** — kein membranumschlossener Kern — aber biochemisch eigenständig:
- **Keine Peptidoglykan-Zellwand** → Penicillin wirkt nicht (wichtig für die Klinik!)
- **Ether-Lipide** statt Ester-Lipide in der Zellmembran — stabiler unter Extrembedingungen
- Genexpressionsapparat ähnelt Eukaryoten (TATA-Box, Transkriptionsfaktoren)

Viele Archäen sind **Extremophile**: Thermophile (bis 121°C), Halophile (gesättigte Salzlösungen), Methanogene (produzieren CH₄ im Darm und Sumpf).

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
      altfrage: {
        text: "Chloramphenicol hemmt die Proteinsynthese von Bakterien, nicht aber von menschlichen Körperzellen. Womit ist diese Selektivität zu erklären?",
        options: [
          {
            id: "a",
            text: "Chloramphenicol kann die Plasmamembran menschlicher Zellen nicht durchdringen.",
          },
          {
            id: "b",
            text: "Chloramphenicol bindet spezifisch an die 50S-Untereinheit des prokaryotischen 70S-Ribosoms, nicht an das eukaryotische 80S-Ribosom.",
          },
          {
            id: "c",
            text: "Menschliche Zellen besitzen Enzyme, die Chloramphenicol sofort inaktivieren.",
          },
          {
            id: "d",
            text: "Bakterien haben keine Mitochondrien, weshalb das Antibiotikum nur auf sie wirkt.",
          },
          {
            id: "e",
            text: "Chloramphenicol hemmt die Peptidoglykan-Zellwandsynthese, die nur bei Prokaryoten vorkommt.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Chloramphenicol bindet an die 50S-Untereinheit des bakteriellen 70S-Ribosoms und blockiert die Peptidyltransferase-Reaktion. Das eukaryotische 80S-Ribosom (Untereinheiten 40S + 60S) wird nicht gebunden – daher sind menschliche Körperzellen unempfindlich. Achtung: Mitochondrien besitzen ebenfalls 70S-Ribosomen, weshalb hohe Dosen mitochondriale Toxizität (aplastische Anämie) verursachen können. A und C beschreiben nicht den tatsächlichen Mechanismus. D ist biologisch falsch (Mitochondrien-Fehlen erklärt die Selektivität nicht). E beschreibt den Mechanismus von Beta-Laktam-Antibiotika.",
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
        {
          question:
            "Welche der folgenden Aussagen über Prokaryoten und Eukaryoten sind richtig?\n\n1. Prokaryoten besitzen 70S-Ribosomen, Eukaryoten 80S-Ribosomen\n2. Archäen haben Ether-Lipide in ihrer Zellmembran statt Ester-Lipide\n3. Bakterien besitzen einen membranumschlossenen Zellkern\n4. Die Endosymbiontentheorie erklärt den Ursprung von Mitochondrien und Chloroplasten\n5. Prokaryoten haben eine lineare DNA wie Eukaryoten",
          options: [
            "Nur 1 und 4",
            "Nur 1, 2 und 4",
            "Nur 2, 3 und 5",
            "Nur 1, 2 und 3",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 2 und 4 sind korrekt. Aussage 3 ist falsch — Prokaryoten besitzen per Definition keinen membranumschlossenen Zellkern (das unterscheidet sie von Eukaryoten). Aussage 5 ist falsch — Prokaryoten haben typischerweise eine zirkuläre DNA (Bakterienchromosom), nicht linear wie Eukaryoten.",
          difficulty: 2,
          tags: ["typ-k", "prokaryoten", "eukaryoten", "endosymbiontentheorie"],
        },
      ],
    },

    // ─── UK3 ────────────────────────────────────────────────────────────────
    // Zellmembran — Aufbau, Barriere und Identität (Transport im nächsten UK)
    {
      id: "bio-1-03",
      title: "Zellmembran — Aufbau, Barriere und Identität",
      imageUrl: "/images/wiki-membrane-de.svg",
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
      content: `Die Zellmembran entscheidet, was in die Zelle gelangt und was sie verlässt — ihr Aufbau ist die Grundlage für Transportprozesse, Signalübertragung und Zellidentität.

## Grundprinzip: Phospholipid-Doppelschicht

{{IMAGE}}

Die Zellmembran ist die Grenze zwischen Zelle und Außenwelt — nicht als starre Wand, sondern als selektive, dynamische Schranke. Ihr Aufbau erklärt direkt, was sie durchlässt und was nicht.

Die Bausteine heißen **Phospholipide** — Moleküle mit einem wasserfreundlichen „Kopf” (Phosphatgruppe + Glycerin + polarer Rest) und zwei wasserabweisenden „Schwänzen” (Fettsäureketten). Dieses Doppelgesicht nennt man **amphiphil** (griech.: beide Seiten liebend).
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

Steroide (z. B. Cortisol, Vitamin D) sind lipophil und passieren die Membran ungehindert. Ionen sind geladen und von einer Wasserhülle umgeben — ihr Durchtritt durch die hydrophobe Zone wäre energetisch viel zu teuer. Dafür braucht die Zelle spezialisierte Membranproteine: Kanäle und Transporter.

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

**Lipidbewegung — das Wesentliche:** Phospholipide bewegen sich **lateral** sehr schnell (10⁷-mal/Sekunde Platztausch mit dem Nachbarn — messbar durch FRAP (Fluorescence Recovery After Photobleaching, eine Methode zur Messung der Membranfluidität)). Den Wechsel von einer Schicht zur anderen (**Flip-Flop**) schaffen sie dagegen kaum allein — der hydrophile Kopf müsste das hydrophobe Innere passieren. Halbwertszeit: Stunden bis Tage. Enzyme beschleunigen das: **Flippasen** (PS nach innen, ATP-abhängig), **Floppasen** (nach außen, ATP-abhängig), **Scramblasen** (bidirektional, ATP-unabhängig → PS-Flip bei Apoptose).

> **Merke:** Cholesterin = Fluiditätspuffer in beide Richtungen. Ungesättigte Fettsäuren → mehr Fluidität; gesättigte → weniger. Laterale Diffusion ist extrem schnell; Flip-Flop ist extrem langsam und benötigt Enzyme.

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
      altfrage: {
        text: "Welche Aussage zum Membrantransport ist richtig?",
        options: [
          {
            id: "a",
            text: "Die Na⁺/K⁺-ATPase transportiert 2 Na⁺ nach außen und 3 K⁺ nach innen pro ATP.",
          },
          {
            id: "b",
            text: "Osmose ist der aktive Transport von Wasser gegen den Konzentrationsgradienten.",
          },
          {
            id: "c",
            text: "SGLT1 ist ein Beispiel für sekundär aktiven Symport: Na⁺ strömt entlang seines Gradienten in die Zelle und nimmt Glucose gegen deren Gradienten mit.",
          },
          {
            id: "d",
            text: "Erleichterte Diffusion benötigt ATP, da Membranproteine beteiligt sind.",
          },
          {
            id: "e",
            text: "Ionenkanäle transportieren Substanzen gegen den Konzentrationsgradienten.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "SGLT1 im Dünndarm ist ein klassisches Beispiel für sekundär aktiven Symport: Der Na⁺-Gradient (aufgebaut durch die Na⁺/K⁺-ATPase) treibt Na⁺ in die Zelle und nimmt gleichzeitig Glucose gegen deren Gradienten mit. A ist falsch (3 Na⁺ raus, 2 K⁺ rein). B ist falsch (Osmose ist passiv). D ist falsch (erleichterte Diffusion ist passiv, kein ATP). E ist falsch (Ionenkanäle transportieren entlang des Gradienten).",
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
        {
          question: "Welche Aussage zu den Bewegungstypen der Membranlipide ist richtig?",
          options: [
            "Flip-Flop ist die häufigste Lipidbewegung in der Membran",
            "Laterale Diffusion erfordert ATP und Flippasen",
            "Flip-Flop ist extrem selten, weil der hydrophile Kopf das hydrophobe Membraninnere passieren muss",
            "Rotation findet nur bei ungesättigten Fettsäuren statt",
            "Flexion der Fettsäureketten nimmt zur Membranoberfläche hin zu",
          ],
          correctIndex: 2,
          explanation:
            "Flip-Flop (transversale Diffusion) ist die seltenste Lipidbewegung (Halbwertszeit: Stunden bis Tage), weil der polare Kopf die hydrophobe Zone durchqueren muss — eine hohe Energiebarriere. Enzyme wie Flippasen, Floppasen und Scramblasen katalysieren diesen Prozess. Laterale Diffusion (A/B falsch) ist die häufigste Bewegung und braucht kein ATP. Rotation (D falsch) betrifft alle Lipide. Flexion (E falsch) nimmt zum Membraninneren hin zu, nicht zur Oberfläche.",
          hints: [
            "Flip-Flop = Wechsel zwischen den Schichten. Was muss dabei durch das hydrophobe Innere?",
            "Laterale Diffusion ist ca. 10⁷-mal pro Sekunde — extrem häufig.",
          ],
          difficulty: 2,
          tags: ["lipidbewegung", "flip-flop", "laterale-diffusion", "membranfluidität"],
        },
        {
          question:
            "Welche der folgenden Aussagen über die Zellmembran sind richtig?\n\n1. Cholesterin puffert die Membranfluidität — bei hohen Temperaturen versteift es, bei niedrigen verhindert es Erstarren\n2. Glykoproteine und Glykolipide der Glykokalyx befinden sich auf der zytosolischen Seite der Membran\n3. Integrale Membranproteine durchspannen die Lipiddoppelschicht mit hydrophoben Transmembrandomänen\n4. Flip-Flop ist die häufigste Bewegungsform von Membranlipiden\n5. Das Flüssig-Mosaik-Modell beschreibt die Membran als fluide Lipiddoppelschicht mit lateral beweglichen Proteinen",
          options: [
            "Nur 1 und 5",
            "Nur 1, 3 und 5",
            "Nur 2, 3 und 4",
            "Nur 3 und 5",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 3 und 5 sind korrekt. Aussage 2 ist falsch — die Glykokalyx befindet sich auf der extrazellulären Seite der Membran (nicht zytosolisch). Aussage 4 ist falsch — Flip-Flop (transversale Diffusion) ist die seltenste Lipidbewegung; laterale Diffusion ist die häufigste.",
          difficulty: 3,
          tags: ["typ-k", "zellmembran", "flüssig-mosaik-modell", "cholesterin"],
        },
        {
          question: "Welche der folgenden Aussagen über die Zellmembran ist FALSCH?",
          options: [
            "Cholesterin erhöht die Membranfluidität bei niedrigen Temperaturen, indem es die Kristallisation der Fettsäureketten verhindert",
            "Integrale Membranproteine können die Lipiddoppelschicht vollständig durchspannen (Transmembranproteine)",
            "Die Glykokalyx befindet sich auf der extrazellulären Seite der Membran und dient der Zellerkennung",
            "Ungesättigte Fettsäuren in den Phospholipiden verringern die Membranfluidität, weil ihre Knicke die Packung verdichten",
            "Laterale Diffusion ist die häufigste Bewegungsform der Membranlipide",
          ],
          correctIndex: 3,
          explanation:
            "Aussage D ist falsch. Ungesättigte Fettsäuren erhöhen die Membranfluidität (nicht verringern), weil ihre cis-Doppelbindungen Knicke erzeugen, die eine dichte Packung verhindern. Dadurch entsteht mehr Raum zwischen den Lipiden und die Membran wird fluider. Gesättigte Fettsäuren dagegen packen dicht und machen die Membran starrer. Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "zellmembran", "membranfluidität"],
        },
      ],
    },

    // ─── UK4 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-04",
      title: "Membrantransport — passiv und aktiv",
      imageUrl: "/images/bms/bio-membrantransport.svg",
      imageCaption:
        "Abb.: Passiver und aktiver Membrantransport im Vergleich (Wikimedia Commons, CC BY-SA 4.0)",
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
      content: `Nachdem der Membranaufbau klar ist, stellt sich die zentrale Frage: Wie gelangen Stoffe durch diese Barriere? Passiver und aktiver Transport sind die beiden Grundprinzipien.

## Überblick — Passiv vs. Aktiv

Jeder Transport durch die Zellmembran lässt sich in zwei Kategorien einteilen:

| | **Passiv (ohne ATP)** | **Aktiv (mit Energiequelle)** |
|---|---|---|
| Richtung | Entlang des Gradienten (bergab) | Gegen den Gradienten (bergauf) |
| Energie | Keine — der Gradient selbst treibt | ATP (primär) oder Na⁺-Gradient (sekundär) |
| Beispiele | Diffusion, Osmose, Ionenkanäle, GLUT-Carrier | Na⁺/K⁺-ATPase, SGLT, NCX |

---

## Passiver Transport — entlang des Gradienten, ohne ATP

**1. Einfache Diffusion (ohne Protein)**
Kleine, unpolare (lipophile, fettlösliche) Moleküle lösen sich in der Lipiddoppelschicht und diffundieren entlang des Konzentrationsgradienten. Beispiele: O₂, CO₂, Ethanol, Steroide, fettlösliche Vitamine (A, D, E, K).

**2. Erleichterte Diffusion (mit Membranprotein)**
Polare oder geladene Moleküle nutzen Proteine — weiterhin **entlang** des Gradienten, ohne ATP:

| Typ | Eigenschaft | Beispiele |
|-----|-------------|-----------|
| **Ionenkanäle** | Sehr schnell, selektiv, schaltbar (spannungs- oder ligandengesteuert) | Na⁺-, K⁺-, Ca²⁺-, Cl⁻-Kanäle |
| **Carrier/Transporter** | Langsamer, sättigbar (Kapazitätsgrenze) | GLUT1–4 (Glucose) |
| **Aquaporine (AQP)** | Nur Wasser | AQP2 in Niere (ADH-reguliert → Wasserrückresorption) |

> **Merke:** Passiv = immer entlang des Gradienten, kein ATP. Ionenkanäle sind schnell, aber nicht sättigbar; Carrier sind langsamer und sättigbar.

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

### Primär aktiver Transport (direkt ATP)

Substanzen werden **gegen** ihren Gradienten gepumpt. Das zentrale Beispiel: die **Na⁺/K⁺-ATPase**.

- Pro Zyklus: **1 ATP** → **3 Na⁺ nach außen**, **2 K⁺ nach innen**
- Ergebnis: hohe Na⁺-Konzentration **außen**, hohe K⁺-Konzentration **innen**
- Aufbau des **Ruhemembranpotenzials** (~−70 mV, innen negativ gegenüber außen)
- Niedrige intrazelluläre Na⁺-Konzentration = Grundlage für sekundär aktiven Transport und Aktionspotenzial

{{DIAGRAM:membrane-transport}}

> **Merke:** Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein pro 1 ATP — nicht umgekehrt! Sie ist die wichtigste Pumpe der Zelle.

---

### Sekundär aktiver Transport (ohne direktes ATP)

Die Na⁺/K⁺-ATPase baut einen steilen Na⁺-Gradienten auf (außen viel Na⁺, innen wenig). Andere Transporter nutzen diesen Gradienten als Energiequelle — wie ein Wasserrad, das von der Strömung angetrieben wird. Na⁺ strömt "bergab" in die Zelle und zieht dabei ein zweites Substrat mit (oder schiebt eines heraus).

**Symport — gleiche Richtung:**
Na⁺ und ein zweites Substrat werden in **dieselbe** Richtung transportiert (beide in die Zelle). Beispiel: **SGLT1** im Dünndarm und **SGLT2** im proximalen Tubulus der Niere. Na⁺ strömt entlang seines Gradienten in die Zelle und nimmt Glucose **gegen** deren Gradienten mit. So kann Glucose aus dem Darmlumen bzw. dem Primärharn resorbiert werden, obwohl die Glucose-Konzentration in der Zelle bereits höher ist.

**Antiport — entgegengesetzte Richtung:**
Na⁺ strömt in die Zelle, während ein anderes Ion **heraus** transportiert wird. Beispiel: **Na⁺/Ca²⁺-Austauscher (NCX)** im Herzmuskel — 3 Na⁺ rein, 1 Ca²⁺ raus. Weiteres Beispiel: **Na⁺/H⁺-Austauscher (NHE)** — Na⁺ rein, H⁺ raus (pH-Regulation).

| Typ | Richtung | Beispiel | Was wird transportiert? |
|-----|----------|----------|------------------------|
| **Symport** | Na⁺ + Substrat in **dieselbe** Richtung | SGLT1/2 | Na⁺ + Glucose beide in die Zelle |
| **Antiport** | Na⁺ rein, Substrat **heraus** | NCX, NHE | Na⁺ rein ↔ Ca²⁺ oder H⁺ raus |

> **Merke:** Sekundär aktiv = Na⁺-Gradient (von der ATPase aufgebaut) treibt den Transport. Symport = gleiche Richtung; Antiport = entgegengesetzt.

---

## Klinische Vertiefung

**SGLT2-Hemmer (Gliflozine):** Empagliflozin, Dapagliflozin blockieren SGLT2 in der Niere → Glucose wird nicht rückresorbiert → **Glucosurie** (Zuckerausscheidung im Urin) → Blutzuckersenkung bei **Typ-2-Diabetes**. Wichtige Medikamentengruppe in der modernen Diabetestherapie.

**Herzglykoside:** Digitalis, Ouabain hemmen die Na⁺/K⁺-ATPase → intrazelluläres Na⁺ steigt → der Na⁺/Ca²⁺-Austauscher (NCX) kann weniger Ca²⁺ herausschleusen (weil der Na⁺-Gradient schwächer ist) → Ca²⁺ akkumuliert in der Zelle → stärkere Herzkontraktion (**positiv inotrop**, d. h. die Kontraktionskraft steigernd). Einsatz bei Herzinsuffizienz (Herzschwäche) und Vorhofflimmern.

> **Merke:** Herzglykoside hemmen Na⁺/K⁺-ATPase → Na⁺ ↑ innen → NCX arbeitet weniger → Ca²⁺ ↑ → stärkere Kontraktion.`,
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
      altfrage: {
        text: "Herzglykoside (z. B. Digitalis) hemmen die Na⁺/K⁺-ATPase. Über welchen Mechanismus führt das zu einer verstärkten Herzkontraktion?",
        options: [
          {
            id: "a",
            text: "Direkte Aktivierung spannungsabhängiger Ca²⁺-Kanäle in der Zellmembran.",
          },
          {
            id: "b",
            text: "Hemmung der Na⁺/K⁺-ATPase → intrazelluläres Na⁺ ↑ → Na⁺/Ca²⁺-Austauscher (NCX) arbeitet weniger effizient → Ca²⁺ akkumuliert intrazellulär → stärkere Kontraktion.",
          },
          { id: "c", text: "Vermehrte Freisetzung von Adrenalin aus den Nebennieren." },
          {
            id: "d",
            text: "Blockade von K⁺-Kanälen mit verlängertem Aktionspotential und erhöhtem Ca²⁺-Einstrom.",
          },
          {
            id: "e",
            text: "Steigerung der ATP-Produktion in den Mitochondrien der Kardiomyozyten.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Durch Hemmung der Na⁺/K⁺-ATPase steigt die intrazelluläre Na⁺-Konzentration. Der Na⁺/Ca²⁺-Austauscher (NCX) kann weniger effizient arbeiten, da der Na⁺-Gradient als Antrieb abgeschwächt ist. Ca²⁺ akkumuliert intrazellulär → mehr Ca²⁺ für die Aktin-Myosin-Interaktion → positiv inotrop.",
      },
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
        {
          question:
            "Welche der folgenden Aussagen über Membrantransport sind richtig?\n\n1. Die Na⁺/K⁺-ATPase transportiert 3 Na⁺ nach außen und 2 K⁺ nach innen pro ATP\n2. Osmose ist ein aktiver Transportprozess, der ATP benötigt\n3. Erythrozyten in hypotoner Lösung schwellen und können hämolysieren\n4. SGLT1 im Dünndarm ist ein Beispiel für sekundär aktiven Symport\n5. Aquaporine transportieren Glucose passiv durch die Membran",
          options: [
            "Nur 1 und 3",
            "Nur 1, 3 und 4",
            "Nur 2, 4 und 5",
            "Nur 1, 2 und 3",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 2 ist falsch — Osmose ist ein passiver Prozess (Wasser folgt dem osmotischen Gradienten ohne Energieaufwand). Aussage 5 ist falsch — Aquaporine sind spezifische Wasserkanäle, nicht Glucosetransporter (GLUT-Transporter transportieren Glucose).",
          difficulty: 2,
          tags: ["typ-k", "membrantransport", "osmose", "na-k-atpase"],
        },
        {
          question:
            "Eine Lösung enthält 0,1 mol/L NaCl. NaCl dissoziiert vollständig in Na⁺ und Cl⁻. Welche Osmolarität hat die Lösung?",
          options: ["50 mosmol/L", "100 mosmol/L", "200 mosmol/L", "400 mosmol/L", "150 mosmol/L"],
          correctIndex: 2,
          explanation:
            "Rechnung: NaCl dissoziiert in 2 Teilchen (Na⁺ + Cl⁻). Osmolarität = Molarität × Anzahl Teilchen = 0,1 mol/L × 2 = 0,2 osmol/L = 200 mosmol/L. Typische Fehler: 100 mosmol/L (Dissoziation vergessen), 400 mosmol/L (×4 statt ×2), 50 mosmol/L (÷2 statt ×2).",
          difficulty: 2,
          tags: ["typ-m", "rechenfrage", "osmolarität", "membrantransport"],
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
        "gER",
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
        "Flagellen",
        "9+2-Anordnung",
        "Dynein",
        "Kartagener-Syndrom",
      ],
      content: `Innerhalb der Zellmembran arbeiten spezialisierte Organellen zusammen — ihre Funktionen und Fehlfunktionen sind BMS-Dauerbrenner.

## Rundgang durch die Zelle

Eine eukaryotische Zelle funktioniert wie eine Fabrik mit spezialisierten Abteilungen. Jedes Organell hat eine klar definierte Aufgabe — von der Proteinherstellung über Energiegewinnung bis zur Müllentsorgung. Die meisten Krankheiten lassen sich auf Fehlfunktionen einzelner Organellen zurückführen. Wer versteht, **wer was macht**, versteht Zellbiologie.

{{DIAGRAM:endomembrane-system}}

---

## 1. Die Proteinfabrik: rER → Golgi → Zielort

Proteine für Membranen, Lysosomen oder den Export (Hormone, Antikörper) durchlaufen eine Fertigungsstraße aus drei Stationen:

**Raues ER (rER)** — Herstellung und Qualitätskontrolle:

- Ribosomen auf der ER-Membran → **co-translationale Insertion** (Protein wird während der Synthese ins ER geschleust)
- **Signalpeptid** am Proteinanfang dirigiert das Ribosom zum ER
- **N-Glykosylierung**: Zuckerketten an Asparagin-Reste → dient als Qualitätsmerkmal
- Chaperone (Faltungshelfer wie Calnexin) prüfen die Faltung; fehlgefaltete Proteine → Abbau durch Proteasomen

**Golgi-Apparat** — Veredelung und Versand:
- Gestapelte Membransäcke: **Cis** (ER-nah) → **Medial** → **Trans** (Membran-nah)
- O-Glykosylierung, weitere Zuckermodifikationen
- Entscheidender Schritt: **Mannose-6-Phosphat (M6P)** wird an lysosomale Enzyme angehängt → M6P-Rezeptoren sortieren sie in Vesikel Richtung Lysosom
- Sekretion: **reguliert** (auf Signal, z. B. Insulin) vs. **konstitutiv** (dauerhaft)

**Klinisch:** Bei der **I-Zell-Krankheit** (Mukolipidose II) fehlt das M6P-Tag → lysosomale Enzyme landen im Blut statt im Lysosom → Substratakkumulation. Bei **Mukoviszidose** (ΔF508) erkennt die ER-Qualitätskontrolle das fehlgefaltete CFTR-Protein und baut es ab → kein Chloridkanal in der Membran.

> **Merke:** rER baut Proteine, Golgi sortiert sie. M6P = Adressetikett für Lysosomen. Fehlt M6P → I-Zell-Krankheit.

---

## 2. Recycling und Müllentsorgung: Lysosomen, Proteasomen, Peroxisomen

Proteine sind hergestellt und versandt — doch was passiert mit beschädigten Bauteilen? Drei Systeme kümmern sich um Abbau und Recycling:

**Lysosomen — der Recyclinghof:**
- Entstehen aus dem Trans-Golgi-Netzwerk; **pH 4,5** durch H⁺-ATPase
- Enthalten >50 **saure Hydrolasen** (Proteasen, Lipasen, Glykosidasen)
- **Autophagie**: defekte Organellen → Autophagosomen → Fusion mit Lysosom → Abbau
- **Heterophagie**: aufgenommene Bakterien (Phagolysosom)
- Klinisch: Fehlt **ein** Enzym → Substrat akkumuliert → **lysosomale Speicherkrankheit**

| Krankheit | Fehlendes Enzym | Akkumuliertes Substrat |
|---|---|---|
| M. Gaucher | Glukozerebrosidase | Glukozerebrosid |
| M. Tay-Sachs | Hexosaminidase A | GM2-Gangliosid |
| M. Pompe | Alpha-Glukosidase | Glykogen |

**Proteasomen — der Schredder:**
- Zytosolische Proteinkomplexe (26S), **keine Membran**
- Zielproteine werden mit **Ubiquitin** markiert (Polyubiquitin-Kette) → Proteasom erkennt, entfaltet und zerlegt sie
- Klinisch: Peptide aus dem Proteasom werden auf **MHC-I** geladen → CD8⁺-T-Zell-Erkennung

**Peroxisomen — Spezialabbau:**
- Einmembranorganellen; **β-Oxidation sehr langkettiger Fettsäuren (VLCFA >C22)**
- **Katalase** baut H₂O₂ ab (2H₂O₂ → 2H₂O + O₂)
- Klinisch: **Zellweger-Syndrom** (Peroxisom-Biogenese-Defekt) → VLCFA erhöht → schwere Neurodegeneration

> **Merke:** Lysosom = pH 4,5 + saure Hydrolasen (fehlt eins → Speicherkrankheit). Proteasom = Ubiquitin-markierte Proteine. Peroxisom = VLCFA + Katalase.

---

## 3. Das Kraftwerk: Mitochondrien

{{DIAGRAM:double-membrane-organelles}}

Mitochondrien liefern den Großteil des ATP — sind aber gleichzeitig der Todesschalter der Zelle.

**Struktur (vier Kompartimente):**
- **Äußere Membran**: durchlässig für kleine Moleküle (Porine)
- **Innere Membran**: stark gefaltet zu **Cristae** → riesige Oberfläche für die Atmungskette
- **Intermembranraum**: H⁺ werden hierhin gepumpt (Protonengradient)
- **Matrix**: Ort des Citratzyklus, eigene DNA

**Funktion:** Glucose → Pyruvat (Zytoplasma) → Acetyl-CoA → Citratzyklus (Matrix) → NADH/FADH₂ → Atmungskette (innere Membran) → **~30–32 ATP/Glucose** (aerob) vs. nur 2 ATP (anaerob)

**Apoptose:** Zellstress → **Cytochrom c** wird freigesetzt → Caspase-Kaskade → kontrollierter Zelltod

**Endosymbiontentheorie — 3 Kernbelege:**
1. Eigene **zirkuläre mtDNA** (~16.500 bp) + **70S-Ribosomen** (bakteriell)
2. **Doppelmembran** (innere = ehemalige Bakterienmembran)
3. Vermehrung durch **Zweiteilung** (wie Bakterien, nicht Mitose)

**Maternale Vererbung:** mtDNA stammt ausschließlich aus der Eizelle → mitochondriale Erkrankungen (MELAS, LHON) werden mütterlicherseits vererbt. Betroffen sind v. a. energiehungrige Organe: ZNS, Muskulatur, Herz.

> **Merke:** Cristae = innere Membran = Atmungskette. Eigene DNA + 70S-Ribosomen + Doppelmembran = Endosymbiont. Cytochrom c frei → Apoptose.

---

## 4. Lipidsynthese und Entgiftung: Glattes ER

Das **glatte ER (gER)** hat keine Ribosomen und übernimmt andere Aufgaben als das rER:
- **Lipidsynthese**: Phospholipide, Steroide, Cholesterin
- **Detoxifikation**: **CYP450-Enzyme** in Leberzellen oxidieren Medikamente und Toxine
- **Ca²⁺-Speicher**: IP₃-Signal → Ca²⁺-Freisetzung → Muskelkontraktion, Sekretion
- In Muskelzellen heißt das gER **Sarkoplasmatisches Retikulum** (spezialisiert auf Ca²⁺-Speicherung)

---

## 5. Zellbewegung: Kinozilien und Geißeln

**Aufbau:** Beide nutzen das gleiche **Axonem** — die **9+2-Anordnung** aus Mikrotubuli (9 Außendoubletten + 2 zentrale Tubuli). **Dynein-Motorproteine** gleiten unter ATP-Verbrauch an Nachbardoubletten entlang → Biegebewegung.

- **Kinozilien**: kurz (5–10 µm), hunderte pro Zelle, koordinierter Schlag → **Flimmerepithel der Atemwege** (Schleimtransport), **Eileiter** (Eitransport)
- **Geißeln (Flagellen)**: lang (50–70 µm), 1–2 pro Zelle, wellenförmig → **Spermien**
- **Achtung — Stereozilien** sind KEINE Zilien! Sie bestehen aus **Aktin** (nicht Mikrotubuli), sind unbeweglich und haben keine 9+2-Struktur. Vorkommen: Innenohr (Haarzellen), Nebenhoden.

**Klinisch — Kartagener-Syndrom (Primäre Ziliendyskinesie):** Autosomal-rezessiver **Dynein-Defekt** → unbewegliche Zilien → chronische Bronchitis/Sinusitis (fehlende mukoziliäre Clearance) + **Situs inversus** (~50 %, weil embryonale Nodal-Zilien die Links-Rechts-Achse bestimmen) + männliche Infertilität.

> **Merke:** Kinozilien + Geißeln = 9+2-Mikrotubuli + Dynein. Stereozilien = Aktin (keine echten Zilien!). Dynein defekt → Kartagener.

---

## Übersicht: Alle Organellen auf einen Blick

| Organell | Membran | Hauptfunktion | Klinischer Bezug |
|---|---|---|---|
| Raues ER | Einfach | Proteinsynthese, N-Glykosylierung | Mukoviszidose (ER-Qualitätskontrolle) |
| Golgi-Apparat | Einfach | Sortierung (M6P), O-Glykosylierung | I-Zell-Krankheit |
| Lysosomen | Einfach | Abbau (pH 4,5), Autophagie | Gaucher, Tay-Sachs, Pompe |
| Proteasomen | Keine | Ubiquitin-markierten Proteinabbau | MHC-I-Antigenpräsentation |
| Peroxisomen | Einfach | VLCFA-Abbau, H₂O₂-Abbau | Zellweger-Syndrom |
| Mitochondrien | Doppel | ATP (OXPHOS), Apoptose | MELAS, LHON |
| Glattes ER | Einfach | Lipidsynthese, Detox, Ca²⁺ | CYP450 (Leber) |
| Kinozilien | — | Schleimtransport, Eitransport | Kartagener-Syndrom |`,
      lernziele: [
        "Den sekretorischen Weg (rER → Golgi → Zielort) als zusammenhängende Fertigungsstraße beschreiben",
        "Lysosomale Speicherkrankheiten als Prinzip erklären (fehlendes Enzym → Substratakkumulation)",
        "Mitochondrien: Struktur, ATP-Synthese und Endosymbiontentheorie (3 Belege) zusammenfassen",
        "Klinische Beispiele für Organell-Defekte nennen (I-Zell-Krankheit, Gaucher, MELAS, Kartagener)",
      ],
      merksätze: [
        "rER baut Proteine → Golgi sortiert mit M6P → Lysosom empfängt. Fehlt M6P → I-Zell-Krankheit",
        "Lysosom: pH 4,5 + saure Hydrolasen. Fehlt ein Enzym → Speicherkrankheit (Gaucher, Tay-Sachs, Pompe)",
        "Mitochondrien = Doppelmembran + Cristae + eigene zirkuläre DNA + 70S-Ribosomen → Endosymbiont",
        "Proteasom baut Ubiquitin-markierte Proteine ab → Peptide auf MHC-I → CD8⁺-T-Zell-Erkennung",
        "Kinozilien + Geißeln = 9+2 + Dynein. Stereozilien = Aktin (keine Zilien!). Dynein defekt → Kartagener",
      ],
      klinischerBezug:
        "Mitochondriopathien (MELAS, LHON) betreffen energiehungrige Organe (ZNS, Muskel, Herz) und werden maternal vererbt. Lysosomale Speicherkrankheiten (Gaucher, Tay-Sachs) entstehen durch fehlende Hydrolasen — teils behandelbar durch Enzymersatztherapie. Zellweger-Syndrom (Peroxisomen-Defekt) und Kartagener-Syndrom (Dynein-Defekt) zeigen, wie spezifisch Organell-Defekte zu Krankheitsbildern führen.",
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
            "Das raue ER ist mit Ribosomen besetzt und synthetisiert Proteine für den sekretorischen Weg (Export, Membran, Lysosomen). Lipidsynthese und Entgiftung sind Funktionen des glatten ER.",
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
            "Im Golgi werden lysosomale Enzyme mit Mannose-6-Phosphat markiert. M6P-Rezeptoren im trans-Golgi-Netzwerk sortieren die Enzyme in Vesikel Richtung Lysosom. Fehlt das M6P-Tag → I-Zell-Krankheit.",
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
            "Die Komplexe I–IV der Atmungskette und die ATP-Synthase sitzen in der inneren Mitochondrienmembran. Die Cristae-Faltung vergrößert die Oberfläche enorm.",
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
            "Mitochondrien haben zirkuläre DNA (ohne Histone), 70S-Ribosomen und teilen sich durch Zweiteilung — alles Merkmale, die auf einen bakteriellen Ursprung hinweisen.",
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
            "Morbus Gaucher ist eine lysosomale Speicherkrankheit: Glucocerebrosidase-Mangel → Glucocerebrosid akkumuliert in Makrophagen (Gaucher-Zellen). Weitere Beispiele: Tay-Sachs, Pompe.",
          difficulty: 2 as const,
          tags: ["Lysosomen", "Speicherkrankheiten"],
        },
        {
          question: "Welche Aussage zu Stereozilien ist richtig?",
          options: [
            "Sie besitzen eine 9+2-Mikrotubuli-Anordnung",
            "Sie werden durch Dynein-Motorproteine bewegt",
            "Sie bestehen aus Aktin und sind unbeweglich",
            "Sie kommen im Flimmerepithel der Atemwege vor",
            "Ihr Defekt verursacht das Kartagener-Syndrom",
          ],
          correctIndex: 2,
          explanation:
            "Stereozilien sind KEINE echten Zilien — sie bestehen aus Aktin-Filamenten, sind unbeweglich und haben keine 9+2-Struktur. Sie kommen im Innenohr (Haarzellen) und Nebenhoden vor. Das Kartagener-Syndrom betrifft echte Kinozilien/Geißeln (Dynein-Defekt).",
          difficulty: 2 as const,
          tags: ["Zilien", "Zytoskelett"],
        },
        {
          question:
            "Welche der folgenden Aussagen über Zellorganellen sind richtig?\n\n1. Das raue ER synthetisiert sekretorische Proteine mithilfe membrangebundener Ribosomen\n2. Lysosomen haben einen pH von ca. 7,4 (neutral) für optimale Enzymaktivität\n3. Mitochondrien besitzen eigene zirkuläre DNA und 70S-Ribosomen\n4. Der Golgi-Apparat sortiert Proteine mithilfe von Mannose-6-Phosphat (M6P) zum Lysosom\n5. Peroxisomen sind von einer Doppelmembran umgeben",
          options: [
            "Nur 1, 2 und 4",
            "Nur 1, 3 und 4",
            "Nur 2, 3 und 5",
            "Nur 1 und 3",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 2 ist falsch — Lysosomen haben einen sauren pH von ca. 4,5 (nicht neutral), der für die sauren Hydrolasen optimal ist. Aussage 5 ist falsch — Peroxisomen sind von einer einfachen Membran umgeben (Doppelmembran haben Mitochondrien und der Zellkern).",
          difficulty: 2,
          tags: ["typ-k", "organellen", "lysosomen", "mitochondrien", "golgi"],
        },
        {
          question: "Welche der folgenden Aussagen über Zellorganellen ist FALSCH?",
          options: [
            "Mitochondrien besitzen eine Doppelmembran und eigene ringförmige DNA",
            "Das raue ER ist mit Ribosomen besetzt und synthetisiert sekretorische Proteine",
            "Lysosomen enthalten saure Hydrolasen und haben einen pH-Wert von ca. 4,5",
            "Peroxisomen bauen Fettsäuren durch β-Oxidation ab und sind von einer Doppelmembran umgeben",
            "Der Golgi-Apparat modifiziert und sortiert Proteine, die vom ER kommen",
          ],
          correctIndex: 3,
          explanation:
            "Aussage D ist falsch. Peroxisomen sind von einer einfachen (Einzel-)Membran umgeben, nicht von einer Doppelmembran. Doppelmembranen besitzen nur Mitochondrien, Chloroplasten und der Zellkern. Peroxisomen bauen zwar tatsächlich sehr langkettige Fettsäuren (>C22) durch β-Oxidation ab, aber die Aussage über die Doppelmembran ist der typische MedAT-Fehler. Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "organellen", "peroxisomen", "doppelmembran"],
        },
      ],
      altfrage: {
        text: "Wo findet die β-Oxidation sehr langkettiger Fettsäuren (>C22, VLCFA) statt?",
        options: [
          { id: "a", text: "In der mitochondrialen Matrix nach Carnitin-Shuttle." },
          { id: "b", text: "Im glatten endoplasmatischen Retikulum (sER)." },
          { id: "c", text: "In den Peroxisomen." },
          { id: "d", text: "Im Zytoplasma durch zytosolische Lipasen." },
          { id: "e", text: "In den Lysosomen durch saure Lipasen." },
        ],
        correctOptionId: "c",
        explanation:
          "VLCFA (>C22) werden ausschließlich in Peroxisomen durch β-Oxidation abgebaut. Mitochondrien können nur Fettsäuren bis ~C20 oxidieren. Ein Defekt des ABCD1-Transporters verhindert den VLCFA-Import in Peroxisomen → Adrenoleukodystrophie (ALD).",
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
      content: `Der Zellkern schützt die DNA und steuert die Genexpression — sein Aufbau erklärt, wie Information zwischen Kern und Zytoplasma fließt.

## Kernhülle und Kernporen: die selektive Schleuse

Rund 3000 Moleküle passieren jede Kernpore pro Sekunde — ohne diese Schleusen wäre keine Genregulation möglich. Der Zellkern ist von einer **Doppelmembran** (Kernhülle) umhüllt:
- **Äußere Kernmembran**: direkt verbunden mit dem rauen ER (trägt ebenfalls Ribosomen)
- **Innere Kernmembran**: innen ausgekleidet durch die **Kernlamina** (Netz aus Lamin-Intermediärfilamenten → mechanische Stütze + Heterochromatin-Verankerung)
- **Perinukleärer Spalt**: Raum zwischen beiden Membranen (kontinuierlich mit ER-Lumen)

**Kernporenkomplexe (NPC):**
- Einzige Kommunikationskanäle zwischen Kern und Zytoplasma
- Aufbau: ~30 verschiedene Nucleoporine, ~120 MDa
- **Freie Diffusion**: Moleküle <40 kDa (Ionen, kleine Proteine, Metabolite)
- **Aktiver Transport** (>40 kDa): braucht ein “Ticket”

**Kernimport und -export:** Jeder Stoff, der den Kern betritt oder verlässt, wird kontrolliert — Transkriptionsfaktoren müssen rein, fertige mRNA muss raus, fehlgefaltete Proteine werden nicht eingelassen. Der Transportmechanismus:
- **NLS** (Nuclear Localization Signal): basische Aminosäuren (Lys, Arg) → wird von **Importin-α** erkannt → Importin-α/β-Komplex trägt Protein durch NPC → im Kern: RanGTP bindet Importin → Cargo-Dissoziation
- **NES** (Nuclear Export Signal): hydrophobe Sequenz → wird von Exportin (CRM1) gebunden → Export ins Zytoplasma
- **RanGTPase-Gradient**: RanGTP (Kern) ↔ RanGDP (Zytoplasma) treibt den gerichteten Transport; RanGAP im Zytoplasma hydrolysiert GTP → Zyklus

**Klinisch:** HIV nutzt das NLS seines Preintegrationskomplexes (PIC) + Importin-α/β → Kerntransport → Integration ins Wirtsgenom. HIV-Integrase-Inhibitoren (Dolutegravir) blockieren diesen Schritt.

> **Merke:** Kernporen: <40 kDa frei, >40 kDa nur mit NLS (Import) oder NES (Export). Äußere Kernmembran = Fortsatz des rauen ER. Kernlamina = Lamine (nicht Aktin!).

---

## Chromatin: 2 Meter DNA in 6 µm verpackt

Das menschliche Genom umfasst 3,2 Milliarden Basenpaare — ausgestreckt ca. **2 Meter**. Es muss in einen ~6 µm großen Zellkern passen: **~10.000-fache Kompaktierung**.

**Definitionen (prüfungssicher):**
- **Chromosom:** stark kondensierte, transportfähige Form der DNA (mit **Histonen** = basische Proteine); enthält die Erbinformation; sichtbar in Mitose/Meiose.
- **Centromer:** die Einschnürung des Chromosoms; Ansatzpunkt für Spindelfasern (Kinetochor); **wichtig für die richtige Aufteilung der Chromosomen bei Mitose und bei Meiose**.
- **Telomer:** die Endregionen der Chromosomen (repetitive DNA); **schützen die DNA vor Abbau** und verkürzen sich bei jeder Zellteilung (Alterung); Telomerase verlängert sie (Stammzellen, Keimzellen).
- **Histone:** basische Proteine (reich an Lysin, Arginin), um die die DNA gewickelt ist (Nukleosom); Chromosomen **enthalten basische Proteine** (Histone).

Die Neukombination der Gene erfolgt durch **Crossing-over** und die zufällige Verteilung homologer Chromosomen während der **Meiose** — nicht durch die Chromosomenstruktur selbst. Chromosomen sind die Verpackungsform der DNA; die genetische Rekombination ist ein aktiver Vorgang der Keimzellbildung.

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

Der **Nucleolus** ist der Ort der Ribosomenfabrikation — keine Membranstruktur, sondern ein funktioneller Kondensationspunkt um die ribosomalen RNA-Gene der Chromosomen 13, 14, 15, 21 und 22.

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
      altfrage: {
        text: "Welcher der folgenden Stoffe kann den Kernporenkomplex (NPC) durch passive Diffusion passieren, ohne einen aktiven Transportmechanismus zu benötigen?",
        options: [
          { id: "a", text: "Ein Protein mit 60 kDa und einem Kernlokalisierungssignal (NLS)." },
          { id: "b", text: "Eine fertig prozessierte mRNA (ca. 1000 Nukleotide)." },
          { id: "c", text: "Ein kleines Ionen wie Na⁺ oder ein kleines Molekül unter ~40 kDa." },
          { id: "d", text: "Eine große ribosomale Untereinheit (60S)." },
          { id: "e", text: "Histon-Oktamere für die Chromatin-Assemblierung." },
        ],
        correctOptionId: "c",
        explanation:
          "Kleine Moleküle und Ionen unter ca. 40 kDa können den NPC durch passive Diffusion passieren. Größere Moleküle – darunter Proteine mit NLS (A), mRNAs (B), ribosomale Untereinheiten (D) und Histone (E) – benötigen den aktiven, energieabhängigen Ran-GTPase-Importin/Exportin-Mechanismus. Der NPC ist selektiv: nicht alles, was hineinpasst, darf auch unkontrolliert hindurch.",
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
        {
          question:
            "Welche der folgenden Aussagen über den Zellkern sind richtig?\n\n1. Der Nucleolus ist der Ort der rRNA-Synthese und Ribosomen-Assemblierung\n2. Euchromatin ist stark verdichtet und transkriptionell inaktiv\n3. Die äußere Kernmembran ist mit dem rauen ER verbunden\n4. Kleine Moleküle unter ~40 kDa können frei durch Kernporen diffundieren\n5. Das Barr-Körperchen ist ein Beispiel für Euchromatin",
          options: [
            "Nur 1, 3 und 4",
            "Nur 1, 2 und 5",
            "Nur 2 und 3",
            "Nur 1 und 4",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 0,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 2 ist falsch — Euchromatin ist wenig verdichtet und transkriptionell aktiv; Heterochromatin ist stark verdichtet und inaktiv. Aussage 5 ist falsch — das Barr-Körperchen (inaktives X-Chromosom) ist ein Beispiel für Heterochromatin, nicht Euchromatin.",
          difficulty: 2,
          tags: ["typ-k", "zellkern", "chromatin", "nucleolus", "kernporen"],
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
      content: `Zellteilung ist die Grundlage für Wachstum, Erneuerung und Fortpflanzung — Mitose für Körperzellen, Meiose für Keimzellen. Die Unterschiede zwischen beiden sind MedAT-Klassiker.

## Der Zellzyklus — Überblick

Bevor sich eine Zelle teilen kann, muss sie sich vorbereiten: wachsen, ihre DNA verdoppeln und alles auf Fehler prüfen. Dieser Ablauf heißt **Zellzyklus** und besteht aus der **Interphase** (G1 → S → G2) und der **M-Phase** (Mitose + Zytokinese).

| Phase | Was passiert? | Dauer (Mensch) |
|-------|--------------|----------------|
| **G1** (Gap 1) | Zellwachstum, Proteinsynthese | variabel (Stunden bis Jahre) |
| **S** (Synthese) | DNA-Replikation: 2n → 4n DNA-Gehalt | 6–8 h |
| **G2** (Gap 2) | Kontrolle, weitere Vorbereitung | 2–4 h |
| **M** (Mitose) | Kernteilung + Zytokinese | ~1 h |

Zellen, die sich dauerhaft nicht teilen (z. B. Neuronen, Herzmuskelzellen), verlassen den Zyklus in die **G0-Phase** (Ruhephase).

**Checkpoints — die Qualitätskontrolle:**
**Cyclin-CDK-Komplexe** treiben den Zellzyklus an. An drei Checkpoints wird geprüft, ob alles in Ordnung ist:

- **G1/S-Checkpoint** (Restriktionspunkt): DNA intakt? Zelle groß genug? → Cyclin D / CDK4 phosphoryliert Rb → E2F wird frei → S-Phase-Gene werden aktiviert
- **G2/M-Checkpoint:** DNA vollständig repliziert? Alles repariert? → Cyclin B / CDK1 (MPF) löst Mitose aus
- **Spindel-Checkpoint** (M-Phase): Alle Chromosomen an Spindelfasern angeheftet? → Erst dann Anaphase

Bei Krebszellen sind diese Checkpoints oft defekt (Mutationen in **p53**, **Rb**, Cyclin-Genen) → unkontrollierte Teilung.

> **Merke:** Cyclin-CDK-Komplexe treiben den Zellzyklus. G1/S = Cyclin D/CDK4, G2/M = Cyclin B/CDK1. Checkpoints prüfen: DNA intakt? Repliziert? Spindel korrekt?

{{DIAGRAM:cell-cycle}}

---

## Mitose — identische Kopien für Wachstum und Reparatur

Die Mitose erzeugt aus einer Mutterzelle **2 genetisch identische Tochterzellen** (2n → 2×2n). Sie dient dem Wachstum, der Gewebeerneuerung und der Wundheilung.

{{DIAGRAM:mitosis}}

**Prophase:** Chromosomen kondensieren und werden sichtbar. Zentrosomen wandern zu den Polen. Der Spindelapparat (Mikrotubuli) beginnt sich zu bilden. Die Kernhülle löst sich auf.

**Prometaphase:** Spindelmikrotubuli heften sich an die **Kinetochore** (Proteinstrukturen am Zentromer der Chromosomen). Chromosomen bewegen sich chaotisch.

**Metaphase:** Alle Chromosomen reihen sich an der **Metaphasenplatte** (Äquatorialplatte) auf. Der Spindel-Checkpoint prüft: Sind alle Kinetochore besetzt? Erst dann → Anaphase.

**Anaphase:** Die **Schwesterchromatiden trennen sich** — Separase spaltet das Cohesin, das sie zusammenhielt. Die Chromatiden werden zu entgegengesetzten Polen gezogen. Ergebnis: 46 Chromosomen pro Pol.

**Telophase:** Chromosomen dekondensieren. Die Kernhülle bildet sich neu. Der Nukleolus taucht wieder auf.

**Zytokinese:** Ein kontraktiler Ring (Aktin + Myosin II) schnürt die Zelle ein → 2 Tochterzellen. Bei Pflanzenzellen: Zellplatte statt Einschnürung.

> **Merke:** Mitose-Anaphase: **Schwesterchromatiden** trennen sich (2n → 2n). Eselsbrücke: **S**chwestern trennen sich bei der **S**omatischen Teilung.

---

## Meiose — genetische Vielfalt für die Fortpflanzung

Die Meiose erzeugt aus einer Keimzelle **4 genetisch verschiedene haploide Zellen** (2n → 4×n). Sie findet nur in den Gonaden (Eierstöcke, Hoden) statt.

{{DIAGRAM:meiosis}}

### Meiose I — Reduktionsteilung (das Besondere!)

**Prophase I** (die längste Phase — hier passiert das Entscheidende):
- Homologe Chromosomen (eines vom Vater, eines von der Mutter) lagern sich zusammen und bilden **Bivalente** (= Tetraden: 4 Chromatiden insgesamt)
- Im **Pachytän**-Stadium der Prophase I lagern sich die homologen Chromosomen eng aneinander. Der **Synaptonemalcomplex** (ein leiterartiger Proteinkomplex) hält sie über die gesamte Länge zusammen und ermöglicht präzises Crossing-over. Nach dem Austausch löst sich der Komplex auf.
- **Crossing-over:** Homologe Chromosomen tauschen Stücke untereinander aus → neue Allel-Kombinationen entstehen. **Deshalb sind Geschwister verschieden**, obwohl sie dieselben Eltern haben!
- Sichtbar werden die Austauschstellen als **Chiasmata** (physische Kreuzungspunkte, dort wo der Synaptonemalcomplex Crossing-over ermöglicht hat)

**Metaphase I:** Die **Bivalente** (nicht einzelne Chromosomen wie bei der Mitose!) richten sich an der Metaphasenplatte aus. Welches Chromosom nach welchem Pol wandert, ist **zufällig** → bei 23 Chromosomenpaaren: 2²³ = **8,4 Millionen** verschiedene Kombinationen (zusätzlich zum Crossing-over).

**Anaphase I — DER entscheidende Unterschied zur Mitose:**

| | Mitose-Anaphase | Meiose-I-Anaphase |
|---|---|---|
| **Was trennt sich?** | Schwesterchromatiden | **Homologe Chromosomen** |
| **Ergebnis** | 2n → 2n (identisch) | **2n → n (Reduktion!)** |
| **Chromosomen am Pol** | 46 Einzelchromatiden | 23 Chromosomen (je 2 Schwesterchromatiden) |

Die homologen Chromosomen werden zu entgegengesetzten Polen gezogen. Jeder Pol erhält **ein** Chromosom pro Paar. Die Schwesterchromatiden bleiben noch verbunden!

**Telophase I + Zytokinese I:** 2 haploide Zellen mit je n Chromosomen (jedes noch aus 2 Schwesterchromatiden bestehend).

### Meiose II — Äquationsteilung (läuft wie die Mitose)

Die Schwesterchromatiden trennen sich in jeder haploiden Zelle. Ergebnis: **4 haploide Zellen (n)**, genetisch verschieden.

> **Merke:** Meiose I = **homologe Chromosomen** trennen sich (Reduktion 2n→n). Meiose II = **Schwesterchromatiden** trennen sich (wie Mitose). Crossing-over passiert NUR in Prophase I!

---

## Vergleichstabelle: Mitose vs. Meiose

| Merkmal | Mitose | Meiose |
|---------|--------|--------|
| Zelltyp | Somatische Zellen | Keimzellen (Gonaden) |
| Teilungen | 1 | 2 (I + II) |
| Tochterzellen | 2 (identisch) | 4 (genetisch verschieden) |
| Chromosomensatz | 2n → 2n | 2n → n |
| Crossing-over | Nein | Ja (Prophase I) |
| Bivalente | Nein | Ja (Meiose I) |
| Was trennt sich in Anaphase? | Schwesterchromatiden | I: Homologe; II: Schwesterchromatiden |
| Funktion | Wachstum, Reparatur | Gametenbildung |

> **Merke:** Mitose = 1 Teilung → 2 identische Zellen. Meiose = 2 Teilungen → 4 verschiedene Zellen. Der Schlüssel: Meiose I trennt Homologe!

![Mitose vs. Meiose — Vergleich der Zellteilungstypen mit Chromosomenverteilung](/images/bms/bio-mitose-meiose-de.svg)

---

## Non-disjunction und Chromosomenaberrationen

**Non-disjunction** (Nicht-Trennung) = Chromosomen werden bei der Meiose fehlerhaft verteilt → eine Tochterzelle bekommt ein Chromosom zu viel (Trisomie), die andere zu wenig (Monosomie).

**Wann kann es passieren?**
- **In Meiose I:** Homologe trennen sich nicht → **alle 4** Keimzellen betroffen
- **In Meiose II:** Schwesterchromatiden trennen sich nicht → **2 von 4** betroffen (die anderen 2 sind normal)

**Häufige Chromosomenaberrationen:**

| Aberration | Syndrom | Häufigkeit |
|---|---|---|
| Trisomie 21 (+21) | **Down-Syndrom** | 1:700, steigt mit Mutteralter |
| Trisomie 18 (+18) | Edwards-Syndrom | 1:5.000, meist letal |
| Trisomie 13 (+13) | Patau-Syndrom | 1:10.000, meist letal |
| 45,X0 (Monosomie X) | Turner-Syndrom | 1:2.500 Frauen |
| 47,XXY | Klinefelter-Syndrom | 1:1.000 Männer |

**Warum steigt das Risiko mit dem Alter der Mutter?** Oozyten (Eizellen) werden bereits vor der Geburt in der Prophase I arretiert und verharren dort jahrzehntelang. Je älter die Frau, desto länger war die Eizelle arretiert → die Kontrollmechanismen werden fehleranfälliger.

**Pränatale Diagnostik:** Amniozentese (15.–18. SSW), Chorionzottenbiopsie (10.–12. SSW), nichtinvasive Pränataldiagnostik (NIPD, cell-free fetal DNA ab 10. SSW).

> **Merke:** Trisomie 21 = häufigste Chromosomenaberration Lebendgeborener. Non-disjunction in Meiose I → alle 4 Keimzellen betroffen; in Meiose II → 2 von 4.`,
      merksätze: [
        "Mitose: 2n → 2 × 2n (identisch). Meiose: 2n → 4 × n (genetisch verschieden). Meiose hat 2 Teilungen!",
        "DER Unterschied: Mitose-Anaphase trennt Schwesterchromatiden. Meiose-I-Anaphase trennt HOMOLOGE Chromosomen (2n → n).",
        "Crossing-over: Homologe tauschen DNA-Stücke in der Prophase I → neue Kombinationen. Deshalb sind Geschwister verschieden.",
        "Checkpoints: G1/S (Cyclin D/CDK4), G2/M (Cyclin B/CDK1), Spindel. Bei Defekt → Krebs oder Non-disjunction.",
        "Non-disjunction → Trisomie (47) oder Monosomie (45). Trisomie 21 = Down-Syndrom, häufigste bei Lebendgeborenen.",
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
        {
          question:
            "Welche der folgenden Aussagen über Zellteilung sind richtig?\n\n1. In der Anaphase I der Meiose trennen sich homologe Chromosomen, nicht Schwesterchromatiden\n2. Crossing-over findet in der Prophase I statt und erzeugt neue Allelkombinationen\n3. Nach der Mitose entstehen 4 genetisch verschiedene Tochterzellen\n4. Non-disjunction in Meiose I betrifft alle 4 resultierenden Keimzellen\n5. Cyclin B/CDK1 kontrolliert den G1/S-Checkpoint des Zellzyklus",
          options: [
            "Nur 1 und 2",
            "Nur 1, 2 und 4",
            "Nur 2, 3 und 5",
            "Nur 1, 4 und 5",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 2 und 4 sind korrekt. Aussage 3 ist falsch — nach der Mitose entstehen 2 genetisch identische Tochterzellen (4 genetisch verschiedene Zellen entstehen nach der Meiose). Aussage 5 ist falsch — Cyclin B/CDK1 kontrolliert den G2/M-Checkpoint; der G1/S-Checkpoint wird durch Cyclin D/CDK4 kontrolliert.",
          difficulty: 3,
          tags: ["typ-k", "zellteilung", "meiose", "mitose", "non-disjunction"],
        },
        {
          question: "Welche der folgenden Aussagen über die Zellteilung ist FALSCH?",
          options: [
            "Crossing-over in der Prophase I der Meiose erhöht die genetische Variabilität",
            "In der Anaphase der Mitose werden Schwesterchromatiden getrennt",
            "Nach der Meiose II entstehen haploide Zellen mit Ein-Chromatid-Chromosomen",
            "Non-disjunction in der Meiose I führt dazu, dass nur 2 der 4 resultierenden Keimzellen betroffen sind",
            "Der Spindelapparat besteht aus Mikrotubuli und ist für die Chromosomentrennung verantwortlich",
          ],
          correctIndex: 3,
          explanation:
            "Aussage D ist falsch. Non-disjunction in der Meiose I betrifft alle 4 resultierenden Keimzellen — 2 Zellen erhalten ein Chromosom zu viel, 2 Zellen eines zu wenig. Nur bei Non-disjunction in der Meiose II sind lediglich 2 der 4 Keimzellen betroffen (die anderen 2 sind normal). Diese Unterscheidung ist eine klassische MedAT-Falle. Die übrigen Aussagen sind korrekt.",
          difficulty: 3,
          tags: ["falsch-aussage", "zellteilung", "non-disjunction", "meiose"],
        },
      ],
      altfrage: {
        text: "Eine Zelle in der Metaphase I der Meiose unterscheidet sich von einer Zelle in der Metaphase der Mitose dadurch, dass...",
        options: [
          {
            id: "a",
            text: "...in der Metaphase I Schwesterchromatiden einzeln an der Äquatorialplatte ausgerichtet sind.",
          },
          {
            id: "b",
            text: "...in der Metaphase I Bivalente (Tetraden aus je 4 Chromatiden) an der Äquatorialplatte ausgerichtet sind.",
          },
          {
            id: "c",
            text: "...in der Metaphase I das Crossing-over stattfindet.",
          },
          {
            id: "d",
            text: "...in der Metaphase I nur haploide Chromosomensätze vorliegen.",
          },
          {
            id: "e",
            text: "...in der Metaphase I die Kernhülle bereits vollständig aufgelöst ist, in der Mitose jedoch nicht.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "In der Meiose-I-Metaphase richten sich Bivalente (= 2 homologe Chromosomen, je mit 2 Schwesterchromatiden = 4 Chromatiden, auch 'Tetrade') an der Äquatorialplatte aus. In der Mitose-Metaphase sind es Einzelchromosomen mit 2 Schwesterchromatiden. Crossing-over fand bereits in der Prophase I statt.",
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
      content: `Wie gewinnt die Zelle Energie aus Nährstoffen? Glykolyse, Citratzyklus und Atmungskette bilden zusammen den zentralen Stoffwechselweg — von Glucose bis ATP.

## Glykolyse — Der erste Schritt

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

---

## Pyruvat-Dehydrogenase — Der Brückenschritt

**Reaktion:** Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH

Pro Glucose (2 Pyruvat): 2 Acetyl-CoA + 2 CO₂ + 2 NADH

**Cofaktoren des PDH:** Thiaminpyrophosphat (TPP, aus Vitamin B1/Thiamin!), Liponsäure, CoA (aus Pantothensäure/B5), FAD (aus Riboflavin/B2), NAD⁺ (aus Niacin/B3).

**Regulation:** PDH-Kinase phosphoryliert und inaktiviert PDH (bei hohem ATP, NADH, Acetyl-CoA). PDH-Phosphatase aktiviert PDH (bei Calcium, Insulin). **Klinisch wichtig:** Thiamin (B1)-Mangel → PDH-Funktionsverlust → Pyruvat akkumuliert → Laktat ↑. Bei Alkoholismus: Wernicke-Enzephalopathie (Thiamin-Mangel → PDH-Defekt → Glukosestoffwechsel im Gehirn zusammengebrochen).

> **Merke:** Brückenschritt = Pyruvat → Acetyl-CoA. Findet in Mitochondrien statt. Thiamin-Mangel → PDH-Defekt → Wernicke-Enzephalopathie!

{{DIAGRAM:double-membrane-organelles}}

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
| 5 | Succinyl-CoA → **Succinat** | Succinyl-CoA-Synthetase | 4→4 | **1 GTP** | Substratkettenphosphorylierung (direkte ATP/GTP-Bildung durch Übertragung einer Phosphatgruppe vom Substrat, ohne Atmungskette; GTP ≈ ATP) |
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

![Energiestoffwechsel — Glykolyse, Citratzyklus und Atmungskette im Überblick](/images/bms/bio-energiestoffwechsel-de.svg)

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

> **Prüfungstipp:** Im MedAT werden oft **36–38 ATP** als richtige Antwort gewertet (klassische Lehrbuchzahl). Wenn in einer Prüfungsfrage nur „ca. 36 ATP" oder „ca. 38 ATP" als Option steht (nicht 30–32), ist das die erwartete Antwort. Merke dir beide Werte — und wähle den, der als Option angeboten wird.

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
        {
          question:
            "Welche der folgenden Aussagen über den Energiestoffwechsel sind richtig?\n\n1. Die Glykolyse findet im Zytoplasma statt und liefert netto 2 ATP pro Glucose\n2. FADH₂ speist Elektronen in Komplex I der Atmungskette ein\n3. PFK-1 ist das wichtigste Regulationsenzym der Glykolyse und wird durch ATP gehemmt\n4. Cyanid blockiert Komplex IV und verhindert die Nutzung von O₂ als Elektronenakzeptor\n5. Im Citratzyklus entstehen pro Acetyl-CoA insgesamt 4 NADH",
          options: [
            "Nur 1 und 3",
            "Nur 1, 3 und 4",
            "Nur 2, 4 und 5",
            "Nur 1, 2 und 4",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 3 und 4 sind korrekt. Aussage 2 ist falsch — FADH₂ speist Elektronen in Komplex II (nicht Komplex I) ein; NADH speist in Komplex I ein. Aussage 5 ist falsch — im Citratzyklus entstehen pro Acetyl-CoA 3 NADH (nicht 4), dazu 1 FADH₂ und 1 GTP.",
          difficulty: 3,
          tags: ["typ-k", "energiestoffwechsel", "glykolyse", "atmungskette", "citratzyklus"],
        },
        {
          question:
            "Wie viele ATP-Moleküle werden bei der vollständigen aeroben Oxidation von 1 Mol Glucose maximal gewonnen? (Moderne Bilanz mit P/O-Verhältnissen: NADH ≈ 2,5 ATP, FADH₂ ≈ 1,5 ATP)",
          options: ["2 ATP", "12 ATP", "30–32 ATP", "36–38 ATP", "40 ATP"],
          correctIndex: 2,
          explanation:
            "Rechnung: Glykolyse: 2 ATP (netto) + 2 NADH (× 2,5 = 5 ATP). Pyruvat-DH: 2 NADH (× 2,5 = 5 ATP). Citratzyklus (×2): 2 GTP (≈ 2 ATP) + 6 NADH (× 2,5 = 15 ATP) + 2 FADH₂ (× 1,5 = 3 ATP). Summe: 2 + 5 + 5 + 2 + 15 + 3 = 32 ATP (maximal). Je nach Shuttle-System für zytosolisches NADH: 30–32 ATP. Ältere Lehrbücher nennen 36–38 ATP (mit alten P/O-Werten 3 bzw. 2). 2 ATP = nur Glykolyse (anaerob). 12 ATP = zu niedrig.",
          difficulty: 2,
          tags: ["typ-m", "rechenfrage", "atp-bilanz", "energiestoffwechsel"],
        },
        {
          question: "Welche der folgenden Aussagen über den Energiestoffwechsel ist FALSCH?",
          options: [
            "Die Glykolyse findet im Zytoplasma statt und benötigt keinen Sauerstoff",
            "NADH aus der Glykolyse speist seine Elektronen direkt in Komplex I der Atmungskette ein",
            "Der Citratzyklus findet in der mitochondrialen Matrix statt",
            "Die ATP-Synthase wird durch den Protonengradienten über der inneren Mitochondrienmembran angetrieben",
            "Cyanid blockiert Komplex IV der Atmungskette und verhindert so die Elektronenübertragung auf O₂",
          ],
          correctIndex: 1,
          explanation:
            "Aussage B ist falsch. NADH aus der Glykolyse entsteht im Zytoplasma und kann die innere Mitochondrienmembran nicht direkt passieren. Es muss über Shuttle-Systeme (Malat-Aspartat-Shuttle → NADH → Komplex I, oder Glycerin-3-Phosphat-Shuttle → FADH₂ → Komplex II) in die Mitochondrien übertragen werden. Nur mitochondriales NADH speist direkt in Komplex I ein. Die übrigen Aussagen sind korrekt.",
          difficulty: 3,
          tags: ["falsch-aussage", "energiestoffwechsel", "atmungskette", "shuttle-systeme"],
        },
      ],
      altfrage: {
        text: "Welche Aussage zum Citratzyklus (Krebszyklus) ist korrekt?",
        options: [
          {
            id: "a",
            text: "Der Citratzyklus findet an der inneren Mitochondrienmembran statt.",
          },
          {
            id: "b",
            text: "Pro Acetyl-CoA-Durchgang werden 3 NADH, 1 FADH₂, 1 GTP und 2 CO₂ produziert.",
          },
          {
            id: "c",
            text: "Der Citratzyklus produziert direkt den Großteil des zellulären ATP.",
          },
          {
            id: "d",
            text: "Succinat-Dehydrogenase ist ausschließlich ein Enzym der Atmungskette, nicht des Citratzyklus.",
          },
          {
            id: "e",
            text: "Der Citratzyklus kann auch ohne Sauerstoff unverändert weiterlaufen.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Der Citratzyklus findet in der Mitochondrien-Matrix statt (nicht an der inneren Membran). Pro Acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP (Substratkettenphosphorylierung) und 2 CO₂. Succinat-Dehydrogenase ist gleichzeitig Citratzyklus-Enzym und Komplex II. Ohne O₂ stoppt die Atmungskette → NAD⁺/FAD nicht regenerierbar → Citratzyklus stoppt.",
      },
      klinischerBezug:
        "Laktatazidose: Anstieg des Blutlaktats >2 mmol/L bei Gewebehypoxie (Sepsis, kardiogener Schock, CO-Vergiftung) oder Medikamenten (Metformin → schwache Komplex-I-Hemmung → Laktat). Serum-Laktat ist ein Prognosemarker. Wernicke-Enzephalopathie: B1-Mangel (Alkoholismus, Hyperemesis gravidarum, parenterale Ernährung ohne B1) → PDH-Defekt → Gehirn kann Glucose nicht mehr aerob verwerten → Ophthalmoplegie, Ataxie, Bewusstseinsänderung. Sofort IV Thiamin! Cyanidvergiftung (Industrieunfall, Rauchgas): Blockade Komplex IV → keine ATP-Synthese → Gewebehypoxie trotz normaler O₂-Sättigung (Venenblut kirschrot!). Antidot: Hydroxocobalamin. MELAS-Syndrom: mitochondriale Myopathie, Laktatazidose, Schlaganfall-ähnliche Episoden — mtDNA-Mutation → Atmungskettendefekt → Laktatazidose + Neurodegeneration.",
    },
  ],
};
