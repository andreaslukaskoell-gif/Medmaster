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
      content: `## Einleitung

Was unterscheidet eine lebende Zelle von einem Stein? Was macht einen Virus zum Grenzfall zwischen belebt und unbelebt? Die Biologie beantwortet diese Fragen mit sieben definierten Kennzeichen des Lebens. Für die Medizin ist das nicht nur Theorie: Wann gilt ein Organ als "tot"? Warum wirken Antibiotika nicht gegen Viren? Warum entstehen manche Krankheiten wie Krebs erst auf Systemebene, nicht in einzelnen Zellen? All das baut auf dem Grundverständnis von Leben auf. Das Herzstück ist die **Homöostase** — die Fähigkeit, innere Gleichgewichte aktiv aufrechtzuerhalten. Für den MedAT sind die sieben Kennzeichen (StReForWaEvoBeHo), Viren als Grenzfall und negative vs. positive Rückkopplung prüfungsrelevant.

---

## Die sieben Kennzeichen des Lebens

Kein einzelnes Merkmal allein definiert Leben — erst ihr Zusammenspiel kennzeichnet ein lebendes System:

1. **Stoffwechsel** (Metabolismus): Chemische Reaktionen zum Aufbau (Anabolismus) und Abbau (Katabolismus) körpereigener Stoffe. Treibstoff ist ATP (Adenosintriphosphat) — die universelle Energiewährung jeder Zelle.

2. **Reizbarkeit**: Wahrnehmung von Umweltreizen und gezielte Reaktion darauf — über Rezeptoren, Nervenleitungen und Signalkaskaden. Beispiel: Nervenzelle feuert bei Berührung; Immunzelle reagiert auf Pathogen.

3. **Fortpflanzung**: Weitergabe genetischer Information — sexuell (mit Rekombination, erhöht Vielfalt) oder asexuell (genetisch identische Kopien). Einzigartig für Lebewesen.

4. **Wachstum und Entwicklung**: Zellvermehrung durch Zellteilung und differentielle Genexpression. Aus einer einzelnen befruchteten Eizelle entstehen mehr als 200 verschiedene Zelltypen.

5. **Evolution**: Anpassung an die Umwelt über Generationen durch Mutation, Rekombination und natürliche Selektion. Beispiel: Antibiotikaresistenz bei Bakterien entsteht genau so.

6. **Bewegung**: Aktive Ortsveränderung (Flagellen, Muskelkontraktion) oder interne Bewegung (Vesikelransport, Chromosomenverteilung bei Zellteilung).

7. **Homöostase**: Aktive Aufrechterhaltung innerer Gleichgewichte (pH, Temperatur, Blutzucker, Osmolarität) trotz schwankender Außenbedingungen — über Regelkreise. Das für die Medizin wichtigste Kennzeichen.

> **Merke:** **StReForWaEvoBeHo**: Stoffwechsel – Reizbarkeit – Fortpflanzung – Wachstum – Evolution – Bewegung – Homöostase

---

## Homöostase und Rückkopplung

Homöostase bedeutet: Der Körper hält Parameter wie Blutzucker, Körpertemperatur oder Blut-pH in engen Grenzen — aktiv und unabhängig von äußeren Schwankungen. Das Prinzip dahinter ist die **negative Rückkopplung (Feedback-Regelung)**:

**Ablauf:**
1. **Sensor** misst den aktuellen Wert (z.B. Blutzucker = 8 mmol/L)
2. Messwert wird mit **Sollwert** verglichen (z.B. 4–6 mmol/L → zu hoch!)
3. **Korrekturreaktion** wird ausgelöst (Insulin wird ausgeschüttet)
4. **Effekt wirkt dem Auslöser entgegen** → Blutzucker sinkt zurück zum Sollwert

**Weitere Beispiele negativer Rückkopplung:**
- Körpertemperatur: Temp ↑ → Schwitzen + Vasodilatation → Temp ↓
- Schilddrüsenachse: T3/T4 ↑ → TSH ↓ (hypothalamo-hypophysäre Hemmung)
- Blutdruck: Druck ↑ → Barorezeptoren → Parasympathikus → Herzfrequenz ↓

**Positive Rückkopplung** verstärkt den ursprünglichen Reiz — sinnvoll für schnelle "Alles-oder-Nichts"-Reaktionen:
- **Blutgerinnung**: Thrombin bildet → aktiviert mehr Thrombin
- **Wehen**: Oxytocin → Kontraktion → mehr Oxytocin → stärkere Kontraktion
- **Aktionspotential**: Na⁺-Einstrom → Depolarisation → mehr Na⁺-Kanäle öffnen

**Klinisch — Homöostasestörung:** Diabetes mellitus Typ 2: Insulinresistenz → der Regelkreis versagt → chronische Hyperglykämie → Proteinglykation (HbA1c als Laborparameter) → Gefäßschäden → Retinopathie, Nephropathie, Neuropathie.

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
| Evolution | ✓ (Antigendrift, Antigenshifts) | ✓ |
| Bewegung | ✗ | ✓ |
| Zellstruktur | ✗ (keine Zelle, keine Ribosomen) | ✓ |

**Fazit:** Viren sind **obligat intrazelluläre Parasiten** — sie kapern den Stoffwechsel einer Wirtszelle, um sich zu replizieren. Außerhalb einer Wirtszelle sind sie metabolisch inaktiv.

**Klinische Konsequenz:** Da Viren keine Zellwand, keine eigenen Ribosomen und keinen eigenen Stoffwechsel haben, wirken klassische Antibiotika (die auf Bakterienstrukturen zielen) nicht. Antivirale Therapien müssen selektiv virale Strukturen angreifen (z.B. HIV-Reverse-Transkriptase, Influenza-Neuraminidase).

> **Merke:** Viren: Fortpflanzung ✓, Evolution ✓ — aber kein Stoffwechsel, keine Zellstruktur ✗ → Grenzfall; kein Ansprechen auf Antibiotika.

---

## Emergenz und hierarchische Organisation

Leben ist hierarchisch aufgebaut — auf jeder Ebene entstehen neue Eigenschaften, die die Ebene darunter nicht hat:

**Atom → Molekül → Organell → Zelle → Gewebe → Organ → Organsystem → Organismus**

Dieses Phänomen nennt sich **Emergenz**: Das Ganze ist mehr als die Summe seiner Teile.
- Keine einzelne Nervenzelle denkt — aber das Gehirn (Milliarden vernetzte Neuronen) denkt
- Kein einzelner Herzmuskel pumpt Blut — aber das Herzorgan pumpt
- Keine einzelne Immunzelle schützt vollständig — aber das Immunsystem schützt

**Für die Medizin bedeutet das:** Krankheiten können auf verschiedenen Ebenen entstehen:
- Molekülebene: Genmutation (Sichelzellanämie, Krebs)
- Zellebene: Infektionen, Apoptosedefekte
- Gewebeebene: Fibrose, Atherosklerose
- Systemebene: Sepsis, Herzversagen

> **Merke:** Emergenz = neue Eigenschaften auf höherer Ebene, nicht vorhersagbar aus den Teilen. Bewusstsein, Immunschutz, Herzpumpleistung sind emergente Eigenschaften.

---

## MedAT-Fokus

**Häufige Fragen:**
- "Welche Kennzeichen des Lebens gibt es?" → Sieben: Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung, Homöostase
- "Warum sind Viren keine Lebewesen?" → Kein eigenständiger Stoffwechsel, keine Zellstruktur, keine eigenen Ribosomen
- "Was ist der Unterschied zwischen positiver und negativer Rückkopplung?" → Negativ stabilisiert (Homöostase), positiv verstärkt (Blutgerinnung, Wehen)

**Achtung — typische Verwechslungen:**
- Negative Rückkopplung ≠ "schlecht": Sie ist der Normalfall der Homöostase und stabilisiert das System
- Positive Rückkopplung ≠ "gut": Sie ist ein Verstärkungsmechanismus (z. B. Blutgerinnung, Aktionspotential)
- Viren zeigen Fortpflanzung UND Evolution — aber keinen eigenständigen Stoffwechsel
- Kristallisation ≠ Wachstum im biologischen Sinne (häufiger Distraktor!)

**Prüfungsrelevante Zahlen/Fakten:**
- 7 Kennzeichen des Lebens (Eselsbrücke: StReForWaEvoBeHo)
- ATP: universelle Energiewährung, ~40 kg Umsatz/Tag beim Menschen
- Hierarchie des Lebens: Atom → Biosphäre

---

## Zusammenfassung

- **Sieben Kennzeichen** (StReForWaEvoBeHo): Erst ihre Kombination definiert ein lebendes System — kein einzelnes Merkmal allein reicht
- **Homöostase** = aktive Aufrechterhaltung innerer Gleichgewichte durch **negative Rückkopplung** (Effekt wirkt dem Auslöser entgegen; Beispiel: Blutzucker-Insulin-Regelkreis)
- **Positive Rückkopplung** verstärkt: Blutgerinnung, Wehen, Aktionspotential — sinnvoll für schnelle Alles-oder-Nichts-Reaktionen
- **Viren = Grenzfall**: Fortpflanzung + Evolution ✓, aber kein Stoffwechsel + keine Zellstruktur ✗ → keine Antibiotika wirksam
- **Emergenz**: Auf jeder Hierarchieebene entstehen neue Eigenschaften, die aus den Einzelkomponenten nicht vorhersagbar sind (Bewusstsein, Immunschutz)
- **Klinisch**: Diabetes mellitus Typ 2 = Homöostasestörung des Blutzuckerregelkreises`,
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
      // TODO: echte MedAT-Altfrage prüfen – aktüll Übungsformat
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
      content: `## Einleitung

Penicillin tötet Bakterien, aber schadet unserem Körper nicht. Chloramphenicol hemmt Ribosomen in Bakterien, nicht in unseren Zellen. Wie ist das möglich? Die Antwort liegt in einem der fundamentalsten Unterschiede der Biologie: Prokaryoten (Bakterien, Archäen) und Eukaryoten (unsere Zellen) sind grundlegend unterschiedlich aufgebaut. Genau diese Unterschiede machen Antibiotika möglich — und erklären, warum falsch gewählte Antibiotika gefährlich sein können. Für den MedAT sind die Merkmalsunterschiede, Gram-Färbung, 70S vs. 80S Ribosomen und die Endosymbiontentheorie prüfungsrelevant.

---

## Grundstruktur im Vergleich

Das definierendste Merkmal: Prokaryoten haben keinen membranumschlossenen Zellkern — ihre DNA liegt als zirkuläres Chromosom frei im **Nukleoid**-Bereich. Eukaryoten haben echte Kerne mit Doppelmembran, Kernporen und linear verpackter DNA an Histonen.

| Merkmal | Prokaryoten | Eukaryoten |
|---|---|---|
| Zellkern | Kein Kern (Nukleoid) | Membranumschlossener Kern |
| DNA | Zirkulär, keine Histone | Linear, Histone |
| Ribosomen | **70S** (30S + 50S) | **80S** (40S + 60S) |
| Membranorganellen | Keine (kein Mito, ER, Golgi) | Mitochondrien, ER, Golgi |
| Zellwand | Peptidoglykan (Bakterien) | Keine (Tiere); Cellulose (Pflanzen) |
| Zellteilung | Binäre Fission | Mitose / Meiose |
| Größe | 0,5–5 µm | 10–100 µm |
| Plasmide | Häufig (extra-chromosomale DNA) | Selten |

**Warum ist Kompartimentierung (Eukaryoten) ein Vorteil?** Räumliche Trennung von Reaktionen — Transkription im Kern, Translation im Zytoplasma — ermöglicht umfangreiche mRNA-Prozessierung (Spleißen, 5'-Kappe, Poly-A-Schwanz) und feinere Regulation. Prokaryoten haben das nicht → ihre Gene haben keine Introns, keine RNA-Prozessierung.

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
- LPS = Endotoxin → bei Bakteriämie → TLR4-Aktivierung → Zytokin-Sturm → **septischer Schock**
- Beispiele: *E. coli*, *Salmonella*, *Pseudomonas*, *Neisseria meningitidis*
- Penicillin muss erst äußere Membran überwinden → schlechterer Zugang → häufiger resistent

**Peptidoglykan (Murein):** Netzwerk aus Zuckerketten (N-Acetylglucosamin + N-Acetylmuraminsäure), quervernetzt durch kurze Peptide. Gibt der Bakterienzelle mechanische Festigkeit gegen osmotischen Druck.

> **Merke:** Gram-positiv (violett) = dicke Peptidoglykanschicht. Gram-negativ (rosa) = dünn + LPS-Außenmembran. LPS → septischer Schock!

---

## Ribosomen 70S vs. 80S: Grundlage der Antibiotikatherapie

Prokaryotische Ribosomen (70S = 30S + 50S) unterscheiden sich strukturell von eukaryotischen (80S = 40S + 60S). Diese Unterschiede erlauben eine **selektive Hemmung** bakterieller Proteinbiosynthese:

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

Die **Endosymbiontentheorie** (Lynn Margulis) erklärt, wie Eukaryoten entstanden: Vor ~1,5–2 Milliarden Jahren wurde ein α-Proteobakterium von einer Urzelle aufgenommen — nicht verdaut, sondern als Endosymbiont integriert. Daraus wurden die **Mitochondrien**.

**5 Beweise:**
1. **Zirkuläre DNA:** Mitochondrien haben eigene zirkuläre DNA (mtDNA), wie Bakterien
2. **70S-Ribosomen:** Mitochondriale Ribosomen sind 70S (bakteriell), nicht 80S
3. **Doppelmembran:** Äußere Membran = ehemalige Wirtszellmembran; innere = bakterielle Membran
4. **Binäre Fission:** Mitochondrien teilen sich durch binäre Teilung, nicht durch Mitose
5. **Antibiotika-Empfindlichkeit:** Chloramphenicol hemmt mitochondriale Proteinsynthese (wie bei Bakterien)

**Besonderheiten der mtDNA:** Kodiert nur ~13 Proteine der Atmungskette; maternale Vererbung (Mitochondrien kommen aus dem Eizellzytoplasma); häufige Mutationsstellen → mitochondriale Erkrankungen (MELAS, Leber-Optikusneuropathie).

> **Merke:** Endosymbiontentheorie: 5 Belege = zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit. mtDNA = maternale Vererbung.

---

## Archäen — die dritte Domäne des Lebens

Das **Drei-Domänen-Modell** (Carl Woese, 1977, basierend auf 16S rRNA-Sequenzvergleichen) teilt das Leben in:
- **Bacteria** (Bakterien)
- **Archaea** (Archäen)
- **Eukarya** (Eukaryoten)

**Archäen sind Prokaryoten** (kein membranumschlossener Kern), aber biochemisch eigenständig:
- **Keine Peptidoglykan-Zellwand** → **Penicillin-resistent** (wichtig!)
- **Ether-Lipide** statt Ester-Lipide in Zellmembran (stabiler in Extrembedingungen)
- Genexpressionsapparat ähnelt Eukaryoten (TATA-Box, Transkriptionsfaktoren)

**Extremophile:** Thermophile (bis 121°C), Halophile (gesättigte Salzlösungen), Methanogene (produzieren CH₄ im Darm und Sumpf)

> **Merke:** Archäen: Prokaryoten-Bau, aber kein Peptidoglykan → Penicillin-resistent. Dritte Domäne neben Bakterien und Eukaryoten.

---

## MedAT-Fokus

**Häufige Fragen:**
- "Was ist der grundlegendste Unterschied zwischen Prokaryoten und Eukaryoten?" → Fehlender membranumschlossener Zellkern bei Prokaryoten
- "Warum wirkt Penicillin nicht gegen menschliche Zellen?" → Menschliche Zellen haben keine Peptidoglykan-Zellwand
- "Welche Belege stützen die Endosymbiontentheorie?" → Zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit

**Achtung — typische Verwechslungen:**
- Prokaryoten haben durchaus Ribosomen (70S) — nur keinen Zellkern!
- Archäen sind Prokaryoten, bilden aber eine EIGENE Domäne (nicht: Bakterien)
- Archäen haben KEIN Peptidoglykan → Penicillin-resistent
- Mitochondrien haben 70S-Ribosomen (wie Bakterien!) → Chloramphenicol-Toxizität möglich
- Gram-negativ ≠ "keine Zellwand": Sie haben eine dünne Peptidoglykanschicht PLUS eine äußere LPS-Membran

**Prüfungsrelevante Zahlen/Fakten:**
- 70S = 30S + 50S (Prokaryoten); 80S = 40S + 60S (Eukaryoten)
- Drei Domänen: Bacteria, Archaea, Eukarya
- 5 Belege der Endosymbiontentheorie
- Gram-positiv: violett (Staphylokokken, Streptokokken); Gram-negativ: rosa (E. coli, Salmonella)
- mtDNA kodiert ~13 Proteine (maternale Vererbung)

---

## Zusammenfassung

- **Grundunterschied**: Prokaryoten = kein Kern (Nukleoid), 70S-Ribosomen, binäre Fission; Eukaryoten = Kern + 80S-Ribosomen + Mitose
- **Gram-Färbung**: positiv (violett) = dicke Peptidoglykanschicht; negativ (rosa) = dünne Schicht + LPS-Außenmembran → septischer Schock-Risiko
- **Antibiotika**: 70S-Ribosomen als Ziel (Aminoglykoside, Makrolide, Tetracycline, Chloramphenicol) — 80S-Ribosomen der Eukaryoten werden nicht gebunden
- **Cave Mitochondrien**: haben 70S-Ribosomen (Endosymbiontentheorie!) → Chloramphenicol kann mitochondriale Proteinsynthese hemmen → aplastische Anämie
- **Endosymbiontentheorie**: 5 Belege (zirkuläre DNA, 70S, Doppelmembran, binäre Fission, Antibiotika-Empfindlichkeit); mtDNA = maternal vererbt
- **Archäen**: dritte Domäne, kein Peptidoglykan → Penicillin-resistent; Extremophile`,
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
      // TODO: echte MedAT-Altfrage prüfen – aktüll Übungsformat
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
          tags: ["archäen", "drei-domänen-modell", "carl wöse"],
        },
      ],
      diagram: "prokaryote-vs-eukaryote",
    },

    // ─── UK3 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-03",
      title: "Zellmembran und Zytoplasma",
      stichworte: [
        "Flüssig-Mosaik-Modell",
        "Phospholipid-Doppelschicht",
        "Membranproteine",
        "Cholesterin",
        "Membranfluidität",
        "Glykokalix",
        "Lipid-Rafts",
        "Zytosol",
        "Diffusion",
        "Osmose",
        "Aktiver Transport",
        "Na⁺/K⁺-ATPase",
      ],
      content: `## Einleitung

Jede Zelle ist von ihrer Umgebung durch die Zellmembran getrennt — aber diese Trennung ist keine Mauer, sondern eine hochdynamische, selektive Grenze. Die Membran entscheidet, was rein- und rauskommt, empfängt Signale von außen und bestimmt die Identität der Zelle (z.B. Blutgruppe). Wenn die Membran defekt ist, entstehen Krankheiten: Mukoviszidose (defekter Chlorid-Kanal), Hämolyse bei Blutgruppeninkompatibilität, Atherosklerose durch Cholesterin-Ablagerungen. Das Grundprinzip der Membran ist das **Flüssig-Mosaik-Modell** (Singer & Nicolson, 1972). Für den MedAT sind amphiphile Phospholipide, Cholesterin als Fluiditätspuffer, integrale vs. periphere Proteine, Transportmechanismen und Glykokalix prüfungsrelevant.

---

## Grundstruktur: Phospholipid-Doppelschicht

Das Gerüst der Zellmembran sind **Phospholipide** — amphiphile (griech.: beide Seiten liebend) Moleküle mit:
- **Hydrophilem Kopf** (wasserlöslich): Phosphatgruppe + Glycerin + polarer Rest (z.B. Cholin)
- **Hydrophoben Schwänzen** (wasserabweisend): zwei Fettsäureketten

**Selbstorganisation:** In wässriger Umgebung drehen sich die Köpfe zum Wasser (außen), die Schwänze zeigen ins Innere → spontane **Doppelschicht** (Bilayer). Diese Selbstorganisation ist thermodynamisch günstig (hydrophober Effekt).

**Semipermeable Barriere — was kann die Membran passieren?**
- **Frei**: kleine unpolare Moleküle (O₂, CO₂, Steroide, Ethanol, fettlösliche Vitamine)
- **Via Aquaporine (AQP)**: Wasser (schnell, gerichtet)
- **Via Ionenkanäle**: Na⁺, K⁺, Ca²⁺, Cl⁻ (schnell, selektiv)
- **Via Transporter**: Glucose (GLUT), Aminosäuren, große polare Moleküle (langsam, sättigbar)
- **Blockiert**: geladene Ionen ohne Kanal (Hydrathülle = hohe Energiebarriere)

**Lipid-Asymmetrie:** Die beiden Schichten sind nicht gleich:
- Außen: Phosphatidylcholin, Sphingomyelin, Glykolipide (Blutgruppenantigene!)
- Innen: Phosphatidylserin (PS), Phosphatidylethanolamin (PE)
- **Bei Apoptose:** PS flippt nach außen → "Eat me"-Signal für Makrophagen → phagozytäre Clearance apoptotischer Zellen

> **Merke:** Phospholipide = amphiphil → Bilayer durch Selbstorganisation. Innen PS/PE, außen Glykolipide. PS-Flip = Apoptosesignal.

---

## Membranfluidität: Cholesterin und Fettsäurezusammensetzung

Die Membran muss fließfähig bleiben, ohne zu verflüssigen. Zwei Faktoren steuern die **Membranfluidität**:

**1. Cholesterin** (Steroidmolekül, eingelagert zwischen Phospholipiden):
- Bei **hoher Temperatur**: begrenzt die Beweglichkeit der Fettsäureketten → verhindert übermäßige Verflüssigung
- Bei **niedriger Temperatur**: verhindert dichte Packung der Fettsäuren → verhindert Erstarrung
- **Bidirektionaler Puffer** — stabilisiert Membranfluidität in beiden Richtungen
- Konzentriert sich in **Lipid-Rafts** zusammen mit Sphingolipiden → geordnete Mikrodomänen → konzentrieren Signalproteine (z.B. GPI-verankerte Proteine, GPCRs)

**2. Fettsäurezusammensetzung:**
- **Ungesättigte Fettsäuren** (cis-Doppelbindungen = Knicke in der Kette): verhindern enge Packung → **erhöhen Fluidität** (z.B. Ölsäure, DHA in Nervenzellmembranen)
- **Gesättigte Fettsäuren** (gerade Ketten, können sich eng zusammenlagern): **senken Fluidität** (z.B. Palmitinsäure, Stearinsäure → Butter ist fest)

> **Merke:** Cholesterin = Fluiditätspuffer (weder zu fest noch zu flüssig). Ungesättigte Fettsäuren → mehr Fluidität; gesättigte → weniger.

---

## Membranproteine: Funktion und Typen

Membranproteine übernehmen alle aktiven Funktionen der Membran. Es gibt zwei Grundtypen:

**Integrale (Transmembran-)Proteine:**
- Durchspannen die Lipiddoppelschicht vollständig mit **hydrophoben α-Helices**
- Nicht ablösbar ohne Detergenzien (sie sind "eingebaut")
- Funktionen:
  - **Ionenkanäle** (Na⁺, K⁺, Ca²⁺, Cl⁻): schnell, selektiv, kanalbildend
  - **Carrier/Transporter** (GLUT1–4 für Glucose, SGLT für Na⁺-Glucose-Kotransport): langsamer, sättigbar
  - **Rezeptoren** (Insulinrezeptor, EGFR, GPCRs mit 7 Helices): Signalübertragung
  - **Pumpen** (Na⁺/K⁺-ATPase): aktiver Transport gegen Gradienten (ATP-verbrauchend)

**Periphere Proteine:**
- Sitzen an der Membranoberfl äche (innen oder außen), nicht durch die Membran
- Leichter ablösbar (ionische Wechselwirkungen)
- Verankerung z.B. durch GPI-Anker (außen) oder Myristylierung (innen)

**Klinisches Beispiel CFTR:**
CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) ist ein **integrales Membranprotein** (Cl⁻-Kanal). Die häufigste Mutation ΔF508 führt zur **Fehlfaltung** → kein Einbau in die apikale Membran der Atemwegs- und Darmepithelzellen → kein Cl⁻-Transport → zu wenig Wasser im Schleim → **visköser Schleim** → Stauung → chronische *Pseudomonas aeruginosa*-Infektion → Lungenversagen → Mukoviszidose.

> **Merke:** Integral = durch die Membran (hydrophobe Helices). Peripher = nur an Oberfläche. CFTR = integraler Cl⁻-Kanal; ΔF508 → Fehlfaltung → Mukoviszidose.

---

## Glykokalix: Identität und Zellerkennung

Die **Glykokalix** ist eine Schicht aus Kohlenhydratketten auf der Außenseite der Membran (gebunden an Glykoproteine und Glykolipide). Sie hat drei Hauptfunktionen:

1. **Zellerkennung:** Immunzellen erkennen körpereigene Zellen über MHC-Moleküle (HLA-System); falsche Erkennung → Autoimmunreaktion
2. **Blutgruppenantigene (ABO-System):** Glykolipide auf Erythrozytenoberfläche definieren Blutgruppe
   - Blutgruppe A: A-Antigen + Anti-B-Antikörper
   - Blutgruppe B: B-Antigen + Anti-A-Antikörper
   - Blutgruppe AB: A+B-Antigene, keine Antikörper (Universalempfänger)
   - Blutgruppe 0: keine Antigene, Anti-A+Anti-B (Universalspender)
   - Falsche Blutgruppe bei Transfusion → Komplementaktivierung → **hämolytische Transfusionsreaktion**
3. **Schutz:** Schutzschicht der Epithelzellen gegen Verdauungsenzyme, mechanische Kräfte, Pathogene

> **Merke:** ABO-System = Glykolipide auf Erythrozyten. 0 = keine Antigene (Universalspender), AB = keine Antikörper (Universalempfänger). Falsche Blutgruppe → Hämolyse!

---

## MedAT-Fokus

**Häufige Fragen:**
- "Was beschreibt das Flüssig-Mosaik-Modell?" → Fluide Phospholipid-Doppelschicht mit lateral beweglichen Proteinen
- "Warum können Ionen die Membran nicht frei passieren?" → Hydrophobes Membraninneres blockiert geladene Teilchen → Ionenkanäle/Transporter nötig
- "Welche Funktion hat Cholesterin in der Membran?" → Bidirektionaler Fluiditätspuffer

**Achtung — typische Verwechslungen:**
- Cholesterin ist NICHT der Hauptbestandteil der Membran (das sind Phospholipide!)
- Ungesättigte Fettsäuren ERHÖHEN die Fluidität (Knicke durch cis-Doppelbindungen), gesättigte SENKEN sie
- Integrale Proteine durchspannen die Membran; periphere Proteine sitzen nur an der Oberfläche
- Phosphatidylserin ist normalerweise INNEN — Flip nach außen = Apoptose-Signal
- CFTR ist ein Chloridkanal (nicht ein Transporter!) — deltaF508-Mutation → Fehlfaltung → kein Membraneinbau

**Prüfungsrelevante Zahlen/Fakten:**
- CFTR-Mutation ΔF508: häufigste Mukoviszidose-Mutation (~70% in Europa)
- ABO-Blutgruppen: basieren auf Glykolipiden/Glykoproteinen der Erythrozytenoberfläche
- Ionenkanäle: schnell, selektiv; Carrier/Transporter: langsamer, sättigbar

---

## Zusammenfassung

- **Phospholipid-Doppelschicht**: amphiphile Moleküle (hydrophiler Kopf + hydrophobe Schwänze) → spontane Selbstorganisation; semipermeabel — O₂/CO₂ frei, Ionen brauchen Kanäle
- **Fluidität**: Cholesterin = bidirektionaler Puffer (verhindert Erstarren UND Verflüssigen); ungesättigte Fettsäuren ↑ Fluidität, gesättigte ↓
- **Integrale Proteine**: durchspannen die Membran (Kanäle, Transporter, Rezeptoren, Pumpen); nicht ablösbar ohne Detergenzien
- **Periphere Proteine**: nur an Oberfläche, leichter ablösbar (GPI-Anker, Myristylierung)
- **Glykokalix**: Kohlenhydratschicht außen — ABO-Blutgruppenantigene (Glykolipide), Zellerkennung, Immunschutz
- **Klinisch**: CFTR ΔF508 → Mukoviszidose (Fehlfaltung → kein Cl⁻-Kanal); ABO-Inkompatibilität → hämolytische Transfusionsreaktion; LDL → Atherosklerose`,
      lernziele: [
        "Das Flüssig-Mosaik-Modell mit allen Komponenten (Phospholipide, Cholesterin, Membranproteine, Glykokalix) erklären",
        "Die Rolle von Cholesterin und Fettsäurezusammensetzung für die Membranfluidität beschreiben",
        "Integrale und periphere Membranproteine sowie Lipid-Rafts in Struktur und Funktion unterscheiden",
        "Klinische Konsequenzen von Membrananomalien (Mukoviszidose, ABO-Inkompatibilität, Atherosklerose) erläutern",
      ],
      sections: [],
      merksätze: [
        "Flüssig-Mosaik-Modell: Die Membran ist eine fluide Phospholipid-Doppelschicht, in der Proteine lateral beweglich eingebettet sind (Singer & Nicolson, 1972).",
        "Amphiphil = hydrophiler Kopf + hydrophobe Schwänze → spontane Selbstorganisation zur Doppelschicht.",
        "Cholesterin reguliert Fluidität bidirektional: Bei Wärme versteift es, bei Kälte verflüssigt es die Membran.",
        "Ungesättigte Fettsäuren (Doppelbindungen → Knicke) erhöhen Fluidität; gesättigte Fettsäuren (gerade Ketten) senken sie.",
        "Glykokalix = Zuckerschicht auf Außenseite; ABO-Blutgruppenantigene sind Glykolipide/Glykoproteine der Erythrozyten.",
        "Lipid-Rafts: Cholesterin + Sphingolipide → geordnete Mikrodomänen → Konzentration von Signalproteinen.",
        'Phosphatidylserin-Flip-Flop bei Apoptose = "Eat me"-Signal für Makrophagen → phagozytäre Clearance.',
      ],
      klinischerBezug:
        "Statine (z.B. Atorvastatin) hemmen die HMG-CoA-Reduktase und senken den Blutcholesterinspiegel. Überschüssiges LDL-Cholesterin oxidiert und wird von Makrophagen als Schaumzellen gespeichert → Atherosklerose → Myokardinfarkt und Schlaganfall. Das ABO-Blutgruppensystem basiert auf Glykoproteinen und Glykolipiden der Erythrozytenoberfläche: falsche Blutgruppe → Hämolyse durch präformierte Antikörper → hämolytische Transfusionsreaktion (ABO-Inkompatibilität). CFTR-Mutationen (deltaF508) → Mukoviszidose: keine funktionsfähigen Cl--Kanäle in der apikalen Membran von Atemwegs- und Darmepithel → visköser Schleim → chronische Pseudomonas-Infektionen → Lungenversagen.",
      // TODO: echte MedAT-Altfrage prüfen – aktüll Übungsformat
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
      diagram: "cell-membrane",
    },

    // ─── UK4 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-04",
      title: "Zellorganellen — Funktion und medizinische Relevanz",
      content: `## Einleitung

Stell dir eine Fabrik vor: Sie hat Produktionshallen (ER), eine Poststelle (Golgi), ein Kraftwerk (Mitochondrien), einen Recyclinghof (Lysosomen) und eine Qualitätskontrolle (Proteasomen). Genau so funktioniert eine eukaryotische Zelle — durch **Kompartimentierung** in spezialisierte Organellen. Jedes Organell hat eine definierte Aufgabe, eigene Enzyme und ein eigenes Milieu. Ohne diese Arbeitsteilung wären die Komplexität des Lebens und damit die Medizin undenkbar. Für den MedAT sind der sekretorische Weg (rER → Golgi → Lysosom), Mitochondrien (Endosymbiontentheorie, ATP-Synthese), lysosomale Speicherkrankheiten und das Ubiquitin-Proteasom-System prüfungsrelevant.

---

## Übersicht: Organellen auf einen Blick

| Organell | Membran | Hauptfunktion | Klinischer Bezug |
|---|---|---|---|
| Mitochondrien | Doppel | ATP (OXPHOS), Apoptose | MELAS, Cytochrom-c |
| Raues ER | Einfach | Proteinsynthese, N-Glykosylierung | ER-Stress → Diabetes |
| Glattes ER | Einfach | Lipidsynthese, Detox, Ca²⁺-Speicher | CYP450 (Leber) |
| Golgi-Apparat | Einfach | Sortierung (M6P), O-Glykosylierung | I-Zell-Krankheit |
| Lysosomen | Einfach | Abbau (pH 4,5), Autophagie | Gaucher, Tay-Sachs |
| Peroxisomen | Einfach | VLCFA-Abbau, H₂O₂-Abbau | Zellweger-Syndrom |
| Proteasomen | Keine | Ubiquitin-markierte Proteine abbauen | Bortezomib (Myelom) |
| Zentrosom | Keine | Spindelapparat bei Mitose | Ziliendyskinesie |

---

## Der sekretorische Weg: rER → Golgi → Ziel

Proteine, die für Membranen, Lysosomen oder die Sekretion (Hormone, Antikörper) bestimmt sind, durchlaufen den **sekretorischen Weg** in drei Stationen:

**1. Raues ER (rER) — Proteinfabrik:**
- Mit Ribosomen besetzt → Co-translationale Proteinsynthese
- **N-Glykosylierung**: Zuckerketten werden an Asparagin-Reste angehängt (Qualitätsmerkmal)
- **Qualitätskontrolle**: Chaperone (Calnexin, Calreticulin) überprüfen Faltung; fehlgefaltete Proteine → ERAD (ER-assoziierter Abbau durch Proteasomen)
- **ER-Stress**: Bei Überflutung mit fehlgefalteten Proteinen → Unfolded Protein Response (UPR) → bei Überlastung → Apoptose (relevant bei Typ-2-Diabetes: ER-Stress in β-Zellen)

**2. Glattes ER (gER) — Lipidsynthese und Entgiftung:**
- Ohne Ribosomen
- **Lipidsynthese**: Phospholipide, Steroide, Cholesterin
- **Detoxifikation**: CYP450-Enzyme in Leberzellen oxidieren Pharmaka, Toxine, Steroide
- **Ca²⁺-Speicher**: IP3 → Ca²⁺-Freisetzung → intrazelluläre Signalkaskade (Muskelkontraktion, Sekretion)
- Sarkoplasmatisches Retikulum in Muskelzellen = spezialisiertes gER

**3. Golgi-Apparat — Sortierung und Modifikation:**
- Gestapelte Membransäcke: Cis-Seite (ER-nah) → medial → Trans-Seite (Membran-nah)
- **Proteinmodifikation**: O-Glykosylierung (an Serin/Threonin), weitere Zuckermodifikationen
- **Schlüssel für Lysosomales Targeting**: Mannose-6-Phosphat (M6P) wird angehängt → M6P-Rezeptor → Transport zu Lysosomen
- **Sekretion**: reguliert (auf Signal, z.B. Insulin aus Granula) vs. konstitutiv (immer)

**Klinisch — I-Zell-Krankheit (Mukolipidose II):** Defektes M6P-Tagging → lysosomale Enzyme landen im Blut statt im Lysosom → Substratakkumulation in Zellen.

> **Merke:** rER → Golgi → Lysosom: N-Glykosylierung im ER, M6P-Tag im Golgi als Adresse für Lysosomen. M6P fehlt → I-Zell-Krankheit.

---

## Mitochondrien — Kraftwerk und Endosymbiont

**Struktur:**
- **Äußere Membran**: glatt, permeabel für kleine Moleküle (Porin-Kanäle)
- **Innere Membran**: tief gefaltet zu **Cristae** → enorme Oberflächenvergrößerung für die Atmungskette
- **Intermembranraum**: zwischen beiden Membranen (H⁺ werden hierhin gepumpt)
- **Matrix**: innerster Bereich — hier läuft der Citratzyklus

**Funktion (ATP-Synthese):**
Glucose → Glykolyse (Zytoplasma) → Pyruvat → Acetyl-CoA → Citratzyklus (Matrix) → NADH/FADH₂ → Atmungskette (innere Membran) → Protonengradient → ATP-Synthase → **~30–32 ATP pro Glucose** (aerob, vs. 2 ATP anaerob)

**Apoptose:** Bei Zellstress → Cytochrom c wird aus Mitochondrien ins Zytoplasma freigesetzt → Apoptosom → Caspase-9/3-Aktivierung → kontrollierter Zelltod

**Endosymbiontentheorie — 5 Belege:**
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
- Entstehen aus dem Trans-Golgi-Netzwerk; pH 4,5–5 durch H⁺-ATPase in der Membran
- Enthalten >50 **saure Hydrolasen** (Proteasen, Lipasen, Glykosidasen — alle optimiert für pH ~5)
- **Autophagie**: eigene defekte Organellen werden in Autophagosomen verpackt → Fusion mit Lysosom → Abbau
- **Heterophagie**: aufgenommene Bakterien/Partikel (Phagolysosom), Rezeptor-Recycling

**Lysosomale Speicherkrankheiten** (fehlendes Enzym → Substrat akkumuliert):

| Krankheit | Defektes Enzym | Substrat | Symptome |
|---|---|---|---|
| Morbus Gaucher | Glukozerebrosidase | Glukozerebrosid | Hepatosplenomegalie, Knochenschmerzen |
| Morbus Tay-Sachs | Hexosaminidase A | GM2-Gangliosid | Neurodegeneration, kirschroter Fleck |
| Morbus Pompe | α-Glukosidase | Glykogen | Myopathie, Herzinsuffizienz |
| Niemann-Pick C | NPC1-Protein | Cholesterin | Neurodegeneration |

**Peroxisomen:**
- Einmembranorganellen; entstehen durch Teilung oder de-novo aus ER
- Funktion: **β-Oxidation sehr langkettiger Fettsäuren (VLCFA >C22)**, H₂O₂-Abbau durch **Katalase** (2H₂O₂ → 2H₂O + O₂), Plasmalogen-Synthese (Myelinisierung)
- Klinisch: **Zellweger-Syndrom** (Peroxisom-Biogenese-Defekt) → VLCFA ↑ → schwere Neurodegeneration; **Adrenoleukodystrophie (ALD)** (X-chromosomal, ABCD1-Defekt) → VLCFA im ZNS

**Proteasomen — molekulare Schredder:**
- Keine Membranorganellen; zytosolische Proteinkomplexe (26S = 20S-Kern + 2×19S-Kappen)
- Abbau von: fehlgefalteten Proteinen, regulatorischen Proteinen (Cycline!), Entzündungsmediatoren
- **Ubiquitin-System**: fehlgefaltete Proteine werden durch Polyubiquitin-Ketten (Lys48) markiert → 26S-Proteasom erkennt Ubiquitin → entfaltet und zerlegt Protein in ~8 AS-Peptide
- Klinisch:
  - **MHC-I-Antigenpräsentation**: Peptide aus dem Proteasom werden auf MHC-I geladen → Erkennung durch CD8⁺-T-Zellen
  - **Bortezomib** (Proteasom-Inhibitor) beim multiplen Myelom → fehlgefaltete Myelomproteine akkumulieren → Apoptose
  - **CFTR-ΔF508** bei Mukoviszidose: fehlgefaltetes CFTR wird durch ERAD + Proteasom abgebaut → kein Cl⁻-Kanal in der Membran

> **Merke:** Lysosom = saures Milieu pH 4,5, saure Hydrolasen. Fehlendes Lysosom-Enzym → Speicherkrankheit. Proteasom + Ubiquitin = Zellmüllentsorgung; Bortezomib blockiert das beim Myelom.

---

## MedAT-Fokus

**Häufige Fragen:**
- "Wo findet die oxidative Phosphorylierung statt?" → An der inneren Mitochondrienmembran (Cristae)
- "Was ist Mannose-6-Phosphat?" → Targeting-Signal für lysosomale Enzyme (im Golgi angehängt)
- "Was ist der Unterschied zwischen rauem und glattem ER?" → rER: Ribosomen, Proteinsynthese; gER: Lipidsynthese, Detox, Ca²⁺

**Achtung — typische Verwechslungen:**
- Glykolyse findet im Zytoplasma statt, NICHT in Mitochondrien!
- Ribosomen sind KEINE Membranorganellen — sie sind Ribonukleoprotein-Komplexe
- Proteasomen sind KEINE Membranorganellen — sie sind zytosolische Proteinkomplexe
- Mitochondrien vermehren sich durch binäre Fission (wie Bakterien), NICHT durch Mitose
- I-Zell-Krankheit: lysosomale Enzyme fehlen nicht, sie werden nur falsch sortiert (kein M6P-Tag)

**Prüfungsrelevante Zahlen/Fakten:**
- Pro Glucose aerob: ~30–32 ATP; anaerob: 2 ATP
- Lysosomaler pH: 4,5–5,0 (H⁺-ATPase)
- mtDNA: ~16.500 bp, kodiert ~13 Proteine, maternale Vererbung
- Ribosomen: 80S (Eukaryoten) vs. 70S (Prokaryoten + Mitochondrien)
- Peroxisomen: β-Oxidation von VLCFA >C22

---

## Zusammenfassung

- **Sekretorischer Weg**: rER (Proteinsynthese + N-Glykosylierung) → Golgi (M6P-Tag + O-Glykosylierung) → Lysosom; I-Zell-Krankheit: M6P fehlt → Enzyme extrazellulär
- **Mitochondrien**: Doppelmembran, Cristae (innere Membran = Ort der Atmungskette), ~30–32 ATP/Glucose; Endosymbiontenbeweis: zirkuläre DNA + 70S + Doppelmembran + binäre Fission + Antibiotika-Empfindlichkeit
- **Lysosomale Speicherkrankheiten**: fehlendes Lysosom-Enzym → Substrat akkumuliert (Gaucher: Glukozerebrosidase; Tay-Sachs: Hexosaminidase A; Pompe: α-Glukosidase)
- **Peroxisomen**: VLCFA-Abbau + Katalase; Defekt → Zellweger-Syndrom / ALD
- **Proteasomen**: Ubiquitin-markierte Proteine → 26S-Abbau → Peptide für MHC-I; Bortezomib hemmt → Myelom-Therapie
- **Cave Glykolyse**: findet im Zytoplasma statt (nicht in Mitochondrien!)`,
      stichworte: [
        "Mitochondrien",
        "Endoplasmatisches Retikulum",
        "Golgi-Apparat",
        "Lysosomen",
        "Peroxisomen",
        "Ribosomen",
        "Proteasomen",
        "Endosymbiontentheorie",
        "Lysosomale Speicherkrankheiten",
        "ER-Stress",
        "Autophagie",
        "Ubiquitin-Proteasom-System",
      ],
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
      diagram: "animal-cell",
    },

    // ─── UK5 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-05",
      title: "Der Zellkern — Steuerzentrale der Zelle",
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
      content: `## Einleitung

Warum können Körperzellen nur im Körper existieren, nicht aber eigenständig überleben? Weil der Zellkern sämtliche Informationen enthält, aber diese Information nur innerhalb des komplexen zellulären Systems umgesetzt werden kann. Der Kern ist das Informationszentrum der Zelle: Er bewahrt das Erbgut, kontrolliert, welche Gene wann aktiv sind, und reguliert über Kernporen, welche Moleküle in die Zelle gelangen oder aus ihr heraus. Das Grundprinzip: **räumliche Trennung** von Transkription (Kern) und Translation (Zytoplasma) ermöglicht die umfangreiche Prozessierung der RNA — ein eukaryotisches Alleinstellungsmerkmal. Für den MedAT sind Kernhülle, Kernporen (NLS/NES), Chromatinverpackung (Nukleosom, Euchromatin/Heterochromatin), Nucleolus und Progeria prüfungsrelevant.

---

## Kernhülle und Kernporen: die selektive Schleuse

Der Zellkern ist von einer **Doppelmembran** (Kernhülle) umhüllt:
- **Äußere Kernmembran**: direkt verbunden mit dem rauen ER (trägt ebenfalls Ribosomen)
- **Innere Kernmembran**: innen ausgekleidet durch die **Kernlamina** (Netz aus Lamin-Intermediärfilamenten → mechanische Stütze + Heterochromatin-Verankerung)
- **Perinukleärer Spalt**: Raum zwischen beiden Membranen (kontinuierlich mit ER-Lumen)

**Kernporenkomplexe (NPC):**
- Einzige Kommunikationskanäle zwischen Kern und Zytoplasma
- Aufbau: ~30 verschiedene Nucleoporine, ~120 MDa
- **Freie Diffusion**: Moleküle <40 kDa (Ionen, kleine Proteine, Metabolite)
- **Aktiver Transport** (>40 kDa): braucht ein "Ticket"

**Kernimport und -export:**
- **NLS** (Nuclear Localization Signal): basische Aminosäuren (Lys, Arg) → wird von **Importin-α** erkannt → Importin-α/β-Komplex trägt Protein durch NPC → im Kern: RanGTP bindet Importin → Cargo-Dissoziation
- **NES** (Nuclear Export Signal): hydrophobe Sequenz → wird von Exportin (CRM1) gebunden → Export ins Zytoplasma
- **RanGTPase-Gradient**: RanGTP (Kern) ↔ RanGDP (Zytoplasma) treibt den gerichteten Transport; RanGAP im Zytoplasma hydrolysiert GTP → Zyklus

**Klinisch:** HIV nutzt das NLS seines Preintegrationskomplexes (PIC) + Importin-α/β → Kerntransport → Integration ins Wirtsgenom. HIV-Integrase-Inhibitoren (Dolutegravir) blockieren diesen Schritt.

> **Merke:** Kernporen: <40 kDa frei, >40 kDa nur mit NLS (Import) oder NES (Export). Äußere Kernmembran = Fortsatz des rauen ER. Kernlamina = Lamine (nicht Aktin!).

---

## Chromatin: 2 Meter DNA in 6 µm verpackt

Das menschliche Genom umfasst 3,2 Milliarden Basenpaare — ausgestreckt ca. **2 Meter**. Es muss in einen ~6 µm großen Zellkern passen: **~10.000-fache Kompaktierung**.

**Hierarchische Verpackung:**
1. **Nukleosom** (~10 nm): 147 bp DNA um Histon-Oktamer (je 2× H2A, H2B, H3, H4) gewickelt — wie "Perlen auf einer Schnur"
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
- Indikation: kutanes T-Zell-Lymphom, Myelom

---

## MedAT-Fokus

**Häufige Fragen:**
- "Was ist ein Nukleosom?" → 147 bp DNA um einen Histon-Oktamer (H2A, H2B, H3, H4, je 2×) — Grundeinheit der Chromatinverpackung
- "Was ist der Unterschied zwischen Euchromatin und Heterochromatin?" → Euchromatin: acetyliert, aktiv; Heterochromatin: methyliert, inaktiv
- "Was ist der Barr-Körper?" → Inaktiviertes X-Chromosom (Lyon-Hypothese), sichtbar als kondensiertes Heterochromatin

**Achtung — typische Verwechslungen:**
- Transkription im Kern, Translation im Zytoplasma — NICHT umgekehrt!
- Die äußere Kernmembran ist mit dem rauen ER verbunden (Kontinuum), NICHT die innere
- Kernlamina besteht aus Lamin-Intermediärfilamenten, NICHT aus Aktin
- NLS = Kernimport (basische Aminosäuren Lys/Arg), NES = Kernexport — nicht verwechseln!
- Nucleolus ist NICHT membranumschlossen — er ist eine Phasenseparationsstruktur

**Prüfungsrelevante Zahlen/Fakten:**
- Menschliches Genom: 3,2 Milliarden bp pro haploidem Satz, ~2 m ausgestreckt in ~6 µm Kern (~10.000-fache Kompaktierung)
- Kernporen: <40 kDa freie Diffusion, >40 kDa aktiver Transport (NLS/NES)
- Nukleosom: 147 bp DNA, Histon-Oktamer (H2A, H2B, H3, H4 je 2×)
- Progeria: LMNA-Mutation, Tod mit ~13 Jahren, Lonafarnib verlängert Leben ~2,5 Jahre

---

## Zusammenfassung

- **Kernhülle**: Doppelmembran; äußere = rER-Kontinuum; innere = Kernlamina (Lamine, nicht Aktin)
- **Kernporen**: <40 kDa frei; >40 kDa mit NLS (Import via Importin) oder NES (Export via CRM1); RanGTP-Gradient treibt Richtung
- **Nukleosom**: 147 bp DNA + Histon-Oktamer (H2A,H2B,H3,H4 je ×2) = Grundeinheit der Chromatinverpackung
- **Euchromatin** (acetyliert, HAT) = offen, aktiv; **Heterochromatin** (methyliert, HDAC) = geschlossen, inaktiv; Barr-Körper = inaktives X
- **Nucleolus**: Ribosomenfabrik (rRNA + Assemblierung), nicht membranumschlossen; groß = Malignitätsmerkmal
- **Klinisch**: Progeria (LMNA-Mutation → Kerndeformation); HDAC-Inhibitoren (Vorinostat) reaktivieren Tumorsuppressor-Gene`,
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
        "Euchromatin = acetylierte Histone, aktive Transkription, peripher. Heterochromatin = methylierte Histone, inaktiv, an Kernhülle.",
        "Barr-Körper = kondensiertes inaktives X-Chromosom (Lyon-Hypothese: zufällige X-Inaktivierung in somatischen Zellen).",
        "Progeria: LMNA-Mutation → Progerin (verkürztes Lamin A) → Kerndeformation → vorzeitige Alterung.",
        "HDAC-Inhibitoren (Vorinostat) = Epigenetische Krebstherapie: Histon-Azetylierung erhöhen → Chromatin öffnen → Tumorsuppressor-Gene reaktivieren.",
      ],
      klinischerBezug:
        "Progeria (Hutchinson-Gilford-Syndrom): LMNA-Mutation c.1824C>T erzeugt Progerin, das die Kernlamina destabilisiert. Klinisch: vorzeitige Arteriosklerose, Lipodystrophie, Minderwuchs, Alopezie, Tod mit ~13 Jahren. Lonafarnib (Farnesyltransferase-Hemmer) verhindert die Farnesylierung von Progerin und verlängert das Leben um ~2,5 Jahre. HIV nutzt Importin-alpha/beta für den Kerntransport des Preintegrationskomplexes – LEDGF/p75 als Kofaktor der Integration. HIV-Integrase-Hemmer (Dolutegravir) = Standardtherapie. Prominente Nucleoli in Tumorbiopsien = Hinweis auf hohe Proliferationsaktivität, wichtiges histopathologisches Kriterium bei Prostata-, Nierenzell- und Lymphomdiagnose.",
      // TODO: echte MedAT-Altfrage prüfen – aktüll Übungsformat
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
      diagram: "animal-cell",
    },

    // ─── UK6 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-06",
      title: "Zellteilung — Mitose und Meiose",
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
      content: `## Einleitung

Jede Sekunde teilt sich im menschlichen Körper die Zelle 3,8 Millionen Mal. Wachstum, Gewebeheilung, Blutbildung — all das erfordert präzise Zellteilung. Zwei Typen existieren: die **Mitose** (identische Kopien für Körperzellen) und die **Meiose** (genetisch verschiedene Keimzellen für die Fortpflanzung). Wenn diese Prozesse fehler gehen, entstehen Chromosomenaberrationen (Down-Syndrom) oder Krebs (Kontrollpunktverlust). Das Grundprinzip: Der Zellzyklus ist ein streng kontrollierter Ablauf mit eingebauten Checkpoints — Sicherheitsschleusen, die Fehler erkennen und korrigieren. Für den MedAT sind Zellzyklus-Phasen, Checkpoints, Mitose- und Meiose-Phasen, Crossing-over und Non-disjunction prüfungsrelevant.

---

## Der Zellzyklus

Der Zellzyklus beschreibt den gesamten Lebenszyklus einer sich teilenden Zelle. Er gliedert sich in die **Interphase** (G1, S, G2) und die **M-Phase** (Mitose + Zytokinese).

**G1-Phase (Gap 1, erste Wachstumsphase):**
Proteinsynthese, Zellwachstum, Erfüllung der Voraussetzungen für DNA-Replikation. Zellen, die dauerhaft nicht teilen (differenzierte Zellen wie Neuronen, Muskelzellen), verlassen den Zyklus in die **G0-Phase** (Ruhephase). Der **G1/S-Checkpoint** (Restriktionspunkt) überwacht, ob die Zelle groß genug ist und ob die DNA intakt ist. Schlüsselmolekül: **Cyclin D / CDK4** → Phosphorylierung von Rb (Retinoblastom-Protein) → Freigabe von E2F → Transkription von S-Phase-Genen. Bei Krebszellen ist dieser Checkpoint oft defekt (Rb-Mutation, Cyclin-D-Überexpression).

**S-Phase (Synthese-Phase):**
DNA-Replikation: Der haploide DNA-Gehalt verdoppelt sich. Aus 2n-DNA-Menge wird 4n-DNA-Menge (die Chromosomenzahl bleibt 2n, aber jedes Chromosom besteht nun aus 2 Schwesterchromatiden). Histon-Synthese läuft parallel zur DNA-Replikation. Dauert 6–8 h beim Menschen.

**G2-Phase (Gap 2):**
Kontrolle der replizierten DNA, weitere Zellvergrößerung. **G2/M-Checkpoint**: Wird die DNA-Replikation vollständig abgeschlossen? Ist alles repariert? Schlüsselmolekül: **Cyclin B / CDK1** (MPF, Maturation Promoting Factor) → löst Mitose aus.

**M-Phase (Mitose + Zytokinese):**
Kernspaltung + Zellteilung. Kontrolliert durch den **Spindel-Checkpoint** (Kinetochor-Komplex prüft, ob alle Chromosomen an Spindelfasern angehängt sind → sonst kein Anaphase-Beginn).

> **Merke:** G0 = Ruhephase, G1/S = Tumor-Checkpoint (Rb/E2F), G2/M = CDK1/CyclinB. Tumorzellen überwinden Checkpoints durch Mutationen in p53, Rb, Cyclin-Genen.

---

## Mitose — Somatische Zellteilung

Die Mitose ist die Standardform der Zellteilung für Körperzellen. Sie erzeugt zwei genetisch identische Tochterzellen.

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

Die Meiose ist eine spezialisierte Teilungsform zur Bildung von Keimzellen (Spermatozoen, Oozyten). Sie besteht aus zwei aufeinanderfolgenden Teilungen (Meiose I + Meiose II).

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

## MedAT-Fokus

**Häufige Fragen:**
- "Wann trennen sich Schwesterchromatiden?" → Anaphase (Mitose) und Anaphase II (Meiose)
- "Wann trennen sich homologe Chromosomen?" → Anaphase I (nur Meiose)
- "Was ist ein Bivalent?" → 2 homologe Chromosomen (mit je 2 Schwesterchromatiden = 4 Chromatiden)
- "Was passiert beim Crossing-over?" → DNA-Austausch zwischen homologen Chromosomen in Prophase I → neue Allelkombinationen

**Achtung — typische Verwechslungen:**
- Mitose Anaphase: Schwesterchromatiden trennen sich (NICHT homologe Chromosomen!)
- Meiose I Anaphase: Homologe Chromosomen trennen sich (Schwesterchromatiden bleiben verbunden!)
- "Haploid" vs. "1 Chromatide": Nach Meiose I haben die Zellen n Chromosomen, aber jedes besteht noch aus 2 Schwesterchromatiden (technisch: haploid aber mit verdoppelter DNA)
- G0 ≠ G1: G0 ist eine Ruhephase außerhalb des aktiven Zellzyklus

**Prüfungsrelevante Zahlen/Fakten:**
- Mensch: 46 Chromosomen (2n=46), 23 Chromosomenpaare
- Mitose-Ergebnis: 2 Zellen mit je 46 Chromosomen (2n)
- Meiose-Ergebnis: 4 Zellen mit je 23 Chromosomen (n)
- G0: Neuronen, Herzmuskelzellen (postmitotisch, kein Zellzyklus mehr)
- S-Phase: DNA-Gehalt steigt von 2n auf 4n (Chromatidenzahl steigt, nicht Chromosomenzahl!)
- Non-disjunction in Meiose I → alle 4 Tochterzellen betroffen; in Meiose II → 2 von 4 betroffen

**Klinische Relevanz:**
- **Non-disjunction** (Fehltrennung): Trisomie 21 (Down-Syndrom, Risiko mit Alter der Mutter steigt), Trisomie 18 (Edwards), Trisomie 13 (Patau)
- Monosomie X: Turner-Syndrom (45,X0)
- XXY: Klinefelter-Syndrom (47,XXY)
- Kontrollpunktverlust → Onkogenese: p53-Mutation (häufigste Krebsmutation, ~50% aller Tumoren), Rb-Verlust (Retinoblastom)

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

> **Merke:** Trisomie 21 = häufigste Chromosomenaberration Lebendgeborener; Non-disjunction in Meiose I: alle 4 Keimzellen betroffen; in Meiose II: 2 von 4.

---

## Zusammenfassung

- **Zellzyklus**: G1 (Wachstum) → S (DNA-Replikation, 2n→4n DNA) → G2 (Kontrolle) → M (Mitose + Zytokinese)
- **Checkpoints**: G1/S (Cyclin D/CDK4, Rb-Phosphorylierung → E2F) und G2/M (Cyclin B/CDK1); Verlust → Krebs (p53, Rb)
- **Mitose** (2n → 2×2n): PMATS — Prophase (Kondensation), Metaphase (Metaphasenplatte), Anaphase (Schwesterchromatiden trennen), Telophase (neue Kernhülle), Zytokinese
- **Meiose** (2n → 4×n): 2 Teilungen; Meiose I = Homologe trennen sich (Reduktion); Meiose II = Schwesterchromatiden trennen
- **Crossing-over**: Prophase I; DNA-Austausch zwischen homologen Chromosomen → genetische Vielfalt
- **Non-disjunction**: Trisomie 21 (Down), Trisomie 18 (Edwards); Meiose I = alle 4 Keimzellen betroffen`,
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
            "Ein Ei und ein Spermium mit je einem zusätzlichen Chromosom 21 vereinigen sich. Welcher Chromosomensatz hat das Zygote?",
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
      diagram: "cell-cycle",
      klinischerBezug:
        "Trisomie 21 (Down-Syndrom): Non-disjunction in Meiose I (häufiger) oder II → Eizelle mit 2× Chromosom 21 → Trisomie 47,XX/XY,+21. Häufigste chromosomale Ursache geistiger Behinderung. Risiko bei Mutter >35 J.: ~1:350, bei >45 J.: ~1:20. Zusätzlich: Herzfehler (ASD/VSD, ~40%), Leukämierisiko erhöht, Alzheimer-Risiko (Chr. 21 trägt APP-Gen). Turner-Syndrom (45,X0): meist Non-disjunction im väterlichen Spermium. Klinefelter (47,XXY): Non-disjunction maternal oder paternal. Krebsentstehung durch Checkpoint-Defekte: TP53 (kodiert p53, 'Wächter des Genoms') ist in ~50% aller menschlichen Tumoren mutiert — ohne p53 kein Zellzyklus-Arrest nach DNA-Schäden → Tumorzellen akkumulieren weitere Mutationen.",
    },

    // ─── UK7 ────────────────────────────────────────────────────────────────
    {
      id: "bio-1-07",
      title: "Energiestoffwechsel — Glykolyse, Citratzyklus & Atmungskette",
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
      content: `## Einleitung

Jede Muskelkontraktion, jeder Gedanke, jeder Herzschlag braucht Energie in Form von ATP (Adenosintriphosphat). Woher kommt dieses ATP? Aus Nährstoffen — vor allem Glucose. Der Energiestoffwechsel zerlegt Glucose in drei aufeinanderfolgenden Schritten vollständig ab und gewinnt dabei ~30–32 ATP pro Molekül. Das Grundprinzip: Je mehr Sauerstoff verfügbar ist, desto mehr ATP entsteht. Ohne Sauerstoff gibt es nur 2 ATP und Laktat. Für die Medizin ist das täglich relevant: Cyanidvergiftung blockiert die Atmungskette, Thiaminmangel lähmt den Brückenschritt, Laktatazidose bei Schock zeigt Sauerstoffmangel an. Für den MedAT sind Glykolyse (PFK-1!), Citratzyklus (Bilanz), Atmungskette (Komplexe, Cyanid), Chemiosmose und anaerober Stoffwechsel (Laktat) prüfungsrelevant.

---

## Glykolyse — Der erste Schritt

Die Glykolyse ist eine Sequenz von 10 enzymatischen Reaktionen im **Zytoplasma**, die Glucose (C₆) in 2 Pyruvat (C₃) spaltet. Sie ist sowohl aerob als auch anaerob möglich und liefert sofort verfügbares ATP.

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
- **Hexokinase** (Schritt 1): Glucose + ATP → Glucose-6-Phosphat + ADP. Fängt Glucose in der Zelle "ein" (Phosphorylierung verhindert Rücktransport durch GLUT-Transporter). Isoform in der Leber: Glukokinase (niedrigere Affinität, nicht durch G6P gehemmt → funktioniert als Glucosesensor).
- **Phosphofructokinase-1 (PFK-1)** (Schritt 3, Schlüsselenzym!): Fructose-6-Phosphat → Fructose-1,6-bisphosphat. **Wichtigstes Regulationsenzym der Glykolyse.** Gehemmt durch ATP (hohe Energie → Glykolyse bremsen) und Citrat (Citratzyklus läuft bereits). Aktiviert durch AMP/ADP (niedrige Energie → Glykolyse beschleunigen) und Fructose-2,6-bisphosphat (Insulin-Signal). Irreversible Reaktion!
- **Pyruvat-Kinase** (Schritt 10): Phosphoenolpyruvat → Pyruvat + ATP. Gehemmt durch ATP und Alanin (Glukoneogenese-Signal).

> **Merke:** PFK-1 = das wichtigste Regulationsenzym der Glykolyse. ATP hemmt, AMP aktiviert. Insulin aktiviert über Fructose-2,6-bisphosphat. Merke: "ATP bremst, wenn Energie da ist."

---

## Pyruvat-Dehydrogenase — Der Brückenschritt

Der **Pyruvat-Dehydrogenase-Komplex (PDH)** ist ein riesiger Multi-Enzymkomplex (3 Enzyme, 5 Cofaktoren) in der **Mitochondrien-Matrix**. Er katalysiert die oxidative Decarboxylierung von Pyruvat:

**Reaktion:** Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH

Pro Glucose (2 Pyruvat): 2 Acetyl-CoA + 2 CO₂ + 2 NADH

**Cofaktoren des PDH:** Thiaminpyrophosphat (TPP, aus Vitamin B1/Thiamin!), Liponsäure, CoA (aus Pantothensäure/B5), FAD (aus Riboflavin/B2), NAD⁺ (aus Niacin/B3).

**Regulation:** PDH-Kinase phosphoryliert und inaktiviert PDH (bei hohem ATP, NADH, Acetyl-CoA). PDH-Phosphatase aktiviert PDH (bei Calcium, Insulin). **Klinisch wichtig:** Thiamin (B1)-Mangel → PDH-Funktionsverlust → Pyruvat akkumuliert → Laktat ↑. Bei Alkoholismus: Wernicke-Enzephalopathie (Thiamin-Mangel → PDH-Defekt → Glukosestoffwechsel im Gehirn zusammengebrochen).

> **Merke:** Brückenschritt = Pyruvat → Acetyl-CoA. Findet in Mitochondrien statt. Thiamin-Mangel → PDH-Defekt → Wernicke-Enzephalopathie!

---

## Citratzyklus (Krebszyklus) — Vollständige Oxidation

Der Citratzyklus (auch Krebszyklus nach Hans Krebs, Nobelpreis 1953) findet in der **Mitochondrien-Matrix** statt. In jedem Zyklus werden 2 Kohlenstoffatome (als Acetyl-CoA) vollständig zu CO₂ oxidiert.

**Die 8 Schritte (vereinfacht):**
1. Acetyl-CoA (C2) + Oxalacetat (C4) → **Citrat** (C6) [Citrat-Synthase]
2. Citrat → Isocitrat (Umstrukturierung)
3. Isocitrat → α-Ketoglutarat + CO₂ + **NADH** [Isocitrat-Dehydrogenase, reguliert!]
4. α-Ketoglutarat → Succinyl-CoA + CO₂ + **NADH** [α-Ketoglutarat-DH, Thiamin-abhängig!]
5. Succinyl-CoA → Succinat + **GTP** [Succinyl-CoA-Synthetase — Substratkettenphosphorylierung]
6. Succinat → Fumarat + **FADH₂** [Succinat-Dehydrogenase — einziges Membranenzym, Komplex II!]
7. Fumarat → Malat (Hydratisierung)
8. Malat → Oxalacetat + **NADH** [Malat-Dehydrogenase → Oxalacetat regeneriert]

**Bilanz pro Acetyl-CoA (1 Durchgang):**
3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂

**Bilanz pro Glucose (2 Durchgänge):**
6 NADH + 2 FADH₂ + 2 GTP + 4 CO₂

**Regulationsenzyme:** Citrat-Synthase (gehemmt durch NADH, Succinyl-CoA, ATP; aktiviert durch AMP), Isocitrat-DH (gehemmt durch NADH, ATP; aktiviert durch ADP, Ca²⁺), α-Ketoglutarat-DH (gehemmt durch NADH, Succinyl-CoA).

**Amphibolismus:** Der Citratzyklus liefert auch Vorläufer für Biosynthesen: α-Ketoglutarat → Glutamat (Aminosäure), Oxalacetat → Aspartat, Succinyl-CoA → Häm-Synthese, Citrat (im Zytoplasma) → Fettsäure-Synthese.

> **Merke:** Pro Acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP. Citrat-Synthase + Isocitrat-DH = Hauptregulationspunkte. Succinat-DH = Komplex II der Atmungskette.

---

## Atmungskette und Oxidative Phosphorylierung

Die Atmungskette überträgt die in NADH und FADH₂ gespeicherte Energie auf ATP. Sie befindet sich in der **inneren Mitochondrienmembran**.

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

**Ethanolgärung** (nur Hefen, nicht im Menschen): Pyruvat → Acetaldehyd → Ethanol.

---

## MedAT-Fokus

**Häufige Fragen:**
- "Wo findet Glykolyse statt?" → Zytoplasma (nicht Mitochondrien!)
- "Was ist der finale Elektronenakzeptor der Atmungskette?" → O₂ (Wasser entsteht)
- "Warum stirbt man an Cyanidvergiftung?" → Komplex IV blockiert → keine Atmungskette → kein ATP → Zelluntergang
- "Was ist der Unterschied zwischen Substratkettenphosphorylierung und oxidativer Phosphorylierung?" → Substrat (direkt, ATP aus Glykolyse/Citratzyklus); oxidativ (indirekt, via Protonengradient, ATP-Synthase)

**Achtung — typische Verwechslungen:**
- Glykolyse findet im Zytoplasma statt (nicht im Mitochondrium!)
- Citratzyklus und Atmungskette sind in Mitochondrien, aber in verschiedenen Kompartimenten: Citratzyklus = Matrix, Atmungskette = innere Membran
- FADH₂ liefert weniger ATP als NADH (weil es Komplex II eingibt, der keine H⁺ pumpt)
- "30–32 ATP" ist die moderne Zahl (alte Bücher: 36–38 ATP)
- Succinat-Dehydrogenase = Komplex II der Atmungskette UND Citratzyklus-Enzym (Verbindung!)

**Prüfungsrelevante Zahlen/Fakten:**
- Glykolyse: 2 ATP netto, 2 NADH, 2 Pyruvat
- Pyruvat-DH: 1 CO₂, 1 NADH, 1 Acetyl-CoA pro Pyruvat (×2 pro Glucose)
- Citratzyklus pro Acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂
- Gesamt aerob: ~30–32 ATP
- Gesamt anaerob: 2 ATP (Laktatgärung)
- NADH → ~2,5 ATP; FADH₂ → ~1,5 ATP
- PFK-1: aktiviert durch AMP/ADP; gehemmt durch ATP/Citrat

---

## Zusammenfassung

- **Glykolyse** (Zytoplasma): Glucose → 2 Pyruvat, **2 ATP netto**, 2 NADH; **PFK-1** = Schlüsselenzym (ATP hemmt, AMP aktiviert)
- **Pyruvat-Dehydrogenase** (Matrix): Brückenschritt Pyruvat → Acetyl-CoA + CO₂ + NADH; **Thiamin (B1)** nötig; B1-Mangel → Wernicke-Enzephalopathie
- **Citratzyklus** (Matrix): pro Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂; pro Glucose (×2): 6 NADH + 2 FADH₂ + 2 GTP
- **Atmungskette** (innere Membran): Komplex I (NADH) → Ubichinon → Komplex III → Cytochrom c → **Komplex IV** → O₂ → H₂O; Protonengradient → ATP-Synthase (Chemiosmose)
- **ATP-Bilanz**: aerob ~30–32 ATP; anaerob (Laktat) nur 2 ATP; NADH ≈ 2,5 ATP, FADH₂ ≈ 1,5 ATP
- **Klinisch**: Cyanid → Komplex IV blockiert → keine Atmungskette; Laktatazidose bei Hypoxie (Sepsis, Schock); Metformin schwach Komplex I`,
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
  ],
};
