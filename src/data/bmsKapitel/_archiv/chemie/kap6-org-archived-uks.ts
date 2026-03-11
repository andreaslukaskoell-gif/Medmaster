import type { Unterkapitel } from "../../types";

/**
 * Archived UKs from kap6-organische-chemie.ts
 * ch-12-02 "Isomerie und Stereochemie" — NOT in MedAT Stichwortliste scope
 * ch-12-04 "Aromate und biologisch relevante organische Verbindungen" — NOT explicitly in scope
 */
export const archivedChemOrgUKs: Unterkapitel[] = [
  {
    id: "ch-12-02",
    title: "Isomerie und Stereochemie",
    content: `## Warum dieselbe Formel verschiedene Stoffe ergibt

Ethanol und Dimethylether haben exakt dieselbe Summenformel: C₂H₆O. Trotzdem ist das eine ein trinkbarer Alkohol (Sdp. 78 °C), das andere ein gasförmiger Ether (Sdp. −24 °C). Der Grund: Gleiche Atome, aber unterschiedliche Verknüpfung. Dieses Phänomen — **Isomerie** — erklärt, warum ein einziges Kohlenstoffatom an der falschen Stelle über Heilwirkung oder Missbildung entscheiden kann.

Die zentrale Unterscheidung: Sind die Atome **anders verknüpft** (verschiedene Bindungspartner)? Dann liegt **Konstitutionsisomerie** vor. Sind sie **gleich verknüpft**, aber **räumlich anders angeordnet**? Dann spricht man von **Stereoisomerie**.

---

## Konstitutionsisomerie — verschiedene Verknüpfung

Bei Konstitutionsisomeren (Strukturisomeren) stimmt die Summenformel überein, aber die Atome sind auf unterschiedliche Weise miteinander verbunden. Drei Untertypen:

- **Skelettisomere** — verschiedene Kohlenstoffgerüste: n-Butan (unverzweigt) vs. Isobutan/2-Methylpropan (verzweigt), beide C₄H₁₀, aber mit unterschiedlichen Siedepunkten (−1 °C vs. −12 °C)
- **Stellungsisomere** (Positionsisomere) — gleiche funktionelle Gruppe, andere Position: 1-Propanol (OH am C1) vs. 2-Propanol (OH am C2)
- **Funktionsisomere** — verschiedene funktionelle Gruppen bei gleicher Formel: Ethanol (CH₃CH₂OH, Alkohol) vs. Dimethylether (CH₃OCH₃, Ether), beide C₂H₆O

Die Zahl möglicher Konstitutionsisomere explodiert mit wachsender Kettenlänge: C₄H₁₀ hat 2, C₆H₁₄ hat 5, C₁₀H₂₂ bereits 75 Isomere.

> **Merke:** Konstitutionsisomere = gleiche Summenformel, verschiedene Konnektivität (Bindungspartner). Sie unterscheiden sich in allen physikalischen Eigenschaften.

---

## Konformationsisomere — Rotation ohne Bindungsbruch

**Konformere** entstehen durch Drehung um C-C-Einfachbindungen und wandeln sich bei Raumtemperatur ständig ineinander um — es werden keine Bindungen gebrochen. Beim Ethan unterscheidet man die energiearme **gestaffelte** Konformation (Substituenten „auf Lücke") von der energiereicheren **ekliptischen** (Substituenten „auf Deckung", sterische Spannung).

Klinisch relevant ist das **Cyclohexan**: Es nimmt die spannungsfreie **Sesselkonformation** ein, mit axialen (senkrechten) und äquatorialen (seitlichen) Positionen. Große Substituenten bevorzugen die äquatoriale Position, weil dort weniger sterische 1,3-diaxiale Wechselwirkungen auftreten.

---

## cis/trans-Isomerie (E/Z-Isomerie) — blockierte Rotation

An C=C-Doppelbindungen ist freie Rotation unmöglich, weil die π-Bindung (seitliche p-Orbital-Überlappung) bei Drehung zerstört würde. Tragen beide doppelgebundenen C-Atome jeweils zwei verschiedene Substituenten, entstehen zwei räumlich verschiedene, nicht ineinander überführbare Anordnungen:

- **cis-Isomer** (Z = zusammen): gleichartige Substituenten auf derselben Seite
- **trans-Isomer** (E = entgegengesetzt): gleichartige Substituenten auf gegenüberliegenden Seiten

Beispiel: cis-2-Buten (Sdp. 3,7 °C) vs. trans-2-Buten (Sdp. 0,9 °C) — verschiedene Verbindungen mit verschiedenen Eigenschaften.

Für komplexere Moleküle mit mehr als zwei verschiedenen Substituenten reicht cis/trans nicht aus. Hier verwendet man die **E/Z-Nomenklatur**: Die Substituenten an jedem C der Doppelbindung werden nach den CIP-Prioritätsregeln (siehe unten) geordnet. Stehen die beiden höherprioren Gruppen auf derselben Seite → **Z** (zusammen); auf gegenüberliegenden Seiten → **E** (entgegen).

> **Merke:** cis/trans-Isomerie tritt nur auf, wenn die Rotation blockiert ist (Doppelbindung oder Ring) UND beide C-Atome jeweils zwei verschiedene Substituenten tragen. E/Z ist die exakte Nomenklatur; cis/trans ist die vereinfachte Bezeichnung für einfache Fälle.

**Häufiger Fehler:** E/Z und cis/trans sind nicht immer identisch! Bei einfachen Molekülen wie 2-Buten stimmen sie überein (cis = Z, trans = E). Sobald aber die CIP-Prioritäten nicht den „gleichartigen" Gruppen entsprechen, kann ein Z-Isomer die trans-Geometrie haben. Im Zweifel gilt immer E/Z.

---

## Chiralität — wenn Spiegelbilder nicht deckungsgleich sind

Deine Hände sind der perfekte Einstieg: Linke und rechte Hand haben dieselbe Struktur, sind Spiegelbilder — aber ein linker Handschuh passt nicht auf die rechte Hand. Genau das passiert auf molekularer Ebene, wenn ein Kohlenstoffatom **vier verschiedene Substituenten** trägt.

Ein solches C-Atom heißt **chirales Zentrum** (Stereozentrum, asymmetrisches C-Atom). Das Molekül lässt sich nicht mit seinem Spiegelbild zur Deckung bringen. Die beiden nicht-superponierbaren Spiegelbildformen heißen **Enantiomere**.

> **Merke:** Vier verschiedene Substituenten am C-Atom = chirales Zentrum = zwei Enantiomere. Fehlt diese Bedingung (z. B. zwei gleiche Substituenten), ist das Molekül achiral.

### Eigenschaften von Enantiomeren

Enantiomere sind in fast jeder Hinsicht identisch: gleicher Schmelzpunkt, gleicher Siedepunkt, gleiche Löslichkeit, gleiche Reaktivität in achiraler Umgebung. Sie unterscheiden sich in genau zwei Punkten:

1. **Optische Aktivität**: Sie drehen die Schwingungsebene von linear polarisiertem Licht um den gleichen Betrag, aber in entgegengesetzte Richtungen. Das **(+)-Enantiomer** (dextrogyr, d) dreht nach rechts, das **(−)-Enantiomer** (lävogyr, l) nach links. Gemessen mit dem **Polarimeter**: spezifische Drehung [α] = α / (c · l).

2. **Verschiedene biologische Wirkung**: Enzyme, Rezeptoren und Transportproteine sind selbst chiral. Sie erkennen ihre Substrate stereoselektiv — wie ein Handschuh, der nur auf eine Hand passt. Ein Enantiomer kann therapeutisch wirken, das andere wirkungslos oder sogar toxisch sein.

---

## R/S-Konfiguration — die CIP-Regeln Schritt für Schritt

Um Enantiomere eindeutig zu benennen, verwendet man das **R/S-System** nach Cahn, Ingold und Prelog (CIP):

**Schritt 1 — Prioritäten zuordnen:** Die vier Substituenten am chiralen C werden nach der Ordnungszahl des direkt gebundenen Atoms geordnet. Höhere Ordnungszahl = höhere Priorität. Bei Gleichstand geht man zur nächsten Bindungsebene weiter (erste Unterscheidungsstelle entscheidet). Doppelbindungen werden als zwei Einfachbindungen zum selben Atom gezählt.

**Schritt 2 — Niedrigste Priorität nach hinten:** Das Molekül wird so orientiert, dass die Gruppe mit der niedrigsten Priorität (Nr. 4) vom Betrachter weg zeigt.

**Schritt 3 — Drehsinn ablesen:** Man verfolgt den Weg von Gruppe 1 → 2 → 3.
- Im Uhrzeigersinn → **R** (rectus, „rechts")
- Gegen den Uhrzeigersinn → **S** (sinister, „links")

**Konkretes Beispiel — L-Alanin:**
Am α-C-Atom sitzen: −NH₂ (N, OZ 7), −COOH (C→O, effektiv hohe Priorität durch O), −CH₃ (C→H) und −H (OZ 1).
Prioritäten: 1. NH₂ (N=7) → 2. COOH (C mit O,O,O) → 3. CH₃ (C mit H,H,H) → 4. H (OZ 1).
H nach hinten orientieren, Weg 1→2→3 verfolgen → L-Alanin ist **S**-konfiguriert.

> **Merke:** R/S beschreibt die räumliche Konfiguration, (+)/(−) beschreibt die experimentell gemessene Drehrichtung polarisierten Lichts. Beides ist voneinander unabhängig! Ein R-Enantiomer kann (+) oder (−) drehen — das lässt sich nicht vorhersagen.

### L/D-System in der Biochemie

Neben R/S existiert das ältere **L-/D-System** (Fischer-Konvention), das in der Biochemie nach wie vor Standard ist:
- **Proteinogene Aminosäuren** liegen ausnahmslos in der **L-Konfiguration** vor (D-Aminosäuren findet man in Bakterienzellwänden)
- **Glucose** im Stoffwechsel liegt in der **D-Form** vor

L/D bezieht sich auf die Stellung der funktionellen Gruppe in der Fischer-Projektion und ist nicht mit R/S oder (+)/(−) gleichzusetzen.

---

## Racemate und meso-Verbindungen

Ein **racemisches Gemisch** (Racemat, gekennzeichnet mit ±) enthält beide Enantiomere im Verhältnis 1:1. Die optischen Drehungen heben sich exakt auf → ein Racemat ist **optisch inaktiv** (Drehwert = 0). Chemische Synthesen liefern oft Racemate, weil ohne chiralen Katalysator beide Enantiomere gleich wahrscheinlich entstehen. Biologische Systeme dagegen produzieren dank stereoselektiver Enzyme in der Regel nur ein Enantiomer.

Eine **meso-Verbindung** besitzt zwar Chiralitätszentren, enthält aber eine **innere Spiegelebene**, die das Molekül insgesamt achiral macht. Beispiel: meso-Weinsäure hat zwei Stereozentren, ist aber optisch inaktiv, weil sich die Drehungen der beiden Zentren intramolekular aufheben.

> **Merke:** Racemat = 1:1-Gemisch zweier Enantiomere, optisch inaktiv (externe Kompensation). Meso-Verbindung = ein Molekül mit Chiralitätszentren, aber innerer Spiegelebene, optisch inaktiv (interne Kompensation).

---

## Diastereomere — Stereoisomere, die keine Spiegelbilder sind

Alle Stereoisomere, die **nicht** im Enantiomerverhältnis stehen, heißen **Diastereomere**. Der entscheidende Unterschied zu Enantiomeren: Diastereomere haben **verschiedene physikalische Eigenschaften** (Schmelzpunkt, Löslichkeit, chromatographisches Verhalten) und lassen sich daher durch konventionelle Methoden trennen.

Bei n Chiralitätszentren gibt es maximal **2ⁿ Stereoisomere** (Ausnahme: meso-Verbindungen reduzieren die Zahl). Beispiel: 2 Chiralitätszentren → maximal 2² = 4 Stereoisomere: (R,R), (S,S), (R,S), (S,R). Dabei sind (R,R)/(S,S) ein Enantiomerpaar und (R,S)/(S,R) ein zweites — aber (R,R) und (R,S) sind Diastereomere zueinander.

Wichtige Spezialfälle:
- **Epimere**: Diastereomere, die sich an genau einem Chiralitätszentrum unterscheiden. D-Glucose vs. D-Galactose sind C4-Epimere, D-Glucose vs. D-Mannose C2-Epimere.
- **Anomere**: Epimere am anomeren C-Atom (C1) der Ringform von Zuckern. α-D-Glucose (OH am C1 axial) und β-D-Glucose (OH am C1 äquatorial) sind Anomere — sie wandeln sich in wässriger Lösung über die offenkettige Form ineinander um (**Mutarotation**).

---

## Pharmazeutische Relevanz — warum Chiralität Leben rettet oder zerstört

Enzyme, Rezeptoren und Transporter sind selbst chiral. Sie erkennen Enantiomere so unterschiedlich wie eine rechte Hand einen rechten vs. einen linken Handschuh.

### Thalidomid (Contergan) — das eindrücklichste Beispiel

In den 1950er/60er Jahren als Schlaf- und Beruhigungsmittel vermarktet, enthält Thalidomid ein chirales Zentrum:
- **R-Enantiomer** → sedierende, schlafanstoßende Wirkung
- **S-Enantiomer** → **teratogen** (verursacht schwere Gliedmaßenfehlbildungen, Phokomelie)

Das Medikament wurde als Racemat verabreicht. Tragischerweise hätte auch die Gabe des reinen R-Enantiomers nichts genützt: Im menschlichen Körper findet spontane **Racemisierung** statt — das „sichere" R-Enantiomer wandelt sich in vivo teilweise ins toxische S-Enantiomer um. Über 10.000 Kinder wurden geschädigt. Dieser Skandal revolutionierte die Arzneimittelzulassung weltweit.

### Weitere klinische Beispiele

| Wirkstoff | Eutomer (wirksam) | Distomer (schwächer/unwirksam) |
|---|---|---|
| **Ibuprofen** | S(+) — analgetisch aktiv | R(−) — schwach, wird in vivo teils zu S umgewandelt |
| **L-Dopa** | L-Form — Parkinson-Therapie | D-Dopa — wirkungslos (DOPA-Decarboxylase ist stereoselektiv) |
| **Omeprazol** | S-Enantiomer (Esomeprazol) — stärker | R-Enantiomer — schwächer wirksam |

In der Pharmazie heißt das wirksamere Enantiomer **Eutomer**, das weniger wirksame **Distomer**. Die moderne Arzneimittelzulassung verlangt die separate Prüfung beider Enantiomere. Zunehmend werden Racemate durch reine Enantiomere ersetzt (Chiral Switch).

> **Merke:** Thalidomid: R = Sedativum, S = teratogen. In-vivo-Racemisierung macht die Trennung klinisch unwirksam. Lehre: Jedes Enantiomer muss einzeln auf Wirksamkeit und Toxizität geprüft werden.

---

## Entscheidungsbaum — Isomerie-Typ bestimmen

Dieses Schema ist im MedAT Gold wert:

1. **Gleiche Summenformel?** — Nein → keine Isomere. Ja → weiter.
2. **Gleiche Konnektivität** (gleiche Bindungspartner)? — Nein → **Konstitutionsisomere**. Ja → weiter.
3. **Spiegelbilder, nicht superponierbar?** — Ja → **Enantiomere**. Nein → weiter.
4. → **Diastereomere** (einschließlich cis/trans, Epimere, Anomere).

> **Prüfungstipp:** Im MedAT kommen Isomerie-Zuordnungen häufig vor. Lerne den Entscheidungsbaum auswendig. Typische Fallen: (1) R/S sagt nichts über (+)/(−) — das muss experimentell bestimmt werden. (2) E/Z ist nicht immer identisch mit cis/trans. (3) Meso-Verbindungen haben Chiralitätszentren, sind aber insgesamt achiral. (4) Diastereomere haben verschiedene physikalische Eigenschaften, Enantiomere nicht (außer optische Drehung).`,
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
          "Das C-Atom ist Teil eines Rings",
          "Das C-Atom trägt vier verschiedene Substituenten",
          "Das C-Atom trägt mindestens zwei gleiche Substituenten",
        ],
        correctIndex: 3,
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
          "Meso-Verbindungen",
          "cis/trans-Isomere",
          "Konstitutionsisomere",
        ],
        correctIndex: 4,
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
          "Enantiomere",
          "Diastereomere",
          "Konstitutionsisomere",
          "cis/trans-Isomere",
          "Mesomere",
        ],
        correctIndex: 0,
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
          "Ein Racemat ist ein 1:1-Gemisch aus R- und S-Enantiomeren und ist optisch inaktiv",
          "Ein Racemat dreht polarisiertes Licht stark nach rechts",
          "Ein Racemat hat immer andere physikalische Eigenschaften als die reinen Enantiomere",
          "Ein Racemat enthält nur meso-Verbindungen",
        ],
        correctIndex: 1,
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
          "Weil cis-Isomere grundsätzlich stabiler als trans-Isomere sind",
          "Weil die C=C-Doppelbindung eine π-Bindung enthält, die freie Rotation verhindert",
          "Weil die σ-Bindung in der Doppelbindung zu stark ist",
          "Weil beide Moleküle verschiedene Summenformeln haben",
        ],
        correctIndex: 2,
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
        options: ["2", "8", "6", "4", "1"],
        correctIndex: 3,
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
        options: ["Ibuprofen", "Aspirin", "Penicillin", "L-Dopa", "Thalidomid"],
        correctIndex: 4,
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

  {
    id: "ch-12-04",
    title: "Aromate und biologisch relevante organische Verbindungen",
    content: `## Benzol und Aromatizität

Aromaten sind eine besondere Klasse von Kohlenwasserstoffen: Ihr delokalisiertes π-Elektronensystem verleiht ihnen außergewöhnliche Stabilität. Statt Additionsreaktionen (wie bei Alkenen) bevorzugen sie Substitution — um die Aromatizität zu bewahren.

Der Prototyp ist **Benzol** (C₆H₆), eine ringförmige, vollständig planare Verbindung, in der sechs π-Elektronen über den gesamten Ring delokalisiert sind. Diese Delokalisierung verleiht Benzol eine außergewöhnliche thermodynamische Stabilität — die sogenannte Mesomerie- oder Resonanzenergie beträgt etwa 150 kJ/mol.

Ob eine cyclische Verbindung aromatisch ist, beantwortet die **Hückel-Regel**: Voraussetzung sind ein planarer Ring, vollständige Konjugation und genau 4n+2 π-Elektronen (mit n = 0, 1, 2, ...). Für Benzol ergibt sich mit n = 1 die Zahl 6 — die sechs p-Orbitale der sp²-hybridisierten Kohlenstoffatome überlappen seitlich zu einem durchgehenden π-System oberhalb und unterhalb der Ringebene. Alle C-C-Bindungen sind mit 139 pm gleich lang, was zwischen einer reinen Einfach- (154 pm) und einer Doppelbindung (134 pm) liegt. Verbindungen mit 4n π-Elektronen (z. B. Cyclooctatetraen mit 8) sind **antiaromatisch** und daher besonders instabil — COT weicht in eine nicht-planare Wannenform aus.

## Elektrophile aromatische Substitution (EAS)

Bei der elektrophilen aromatischen Substitution greift ein Elektrophil (z. B. NO₂⁺, Br⁺) den elektronenreichen Ring an. Der Ring gibt ein H⁺ ab, um sein π-System zurückzugewinnen — Substitution statt Addition.

Im Detail: Das Elektrophil (E⁺) attackiert das π-System und bildet ein **Areniumion** (Wheland-Komplex). In diesem kationischen Übergangszustand ist die Aromatizität vorübergehend aufgehoben — ein C-Atom wird sp³-hybridisiert. Durch Abspaltung eines Protons wird der aromatische Zustand wiederhergestellt. Die wichtigsten EAS-Reaktionen:

- **Nitrierung**: E⁺ = NO₂⁺ (Nitroniumion, aus HNO₃/H₂SO₄) → Nitrobenzol (Ausgangsstoff für Anilin und Arzneimittel)
- **Sulfonierung**: E⁺ = SO₃ → Benzolsulfonsäure
- **Halogenierung**: E⁺ = Br⁺ oder Cl⁺ (benötigt Lewis-Säure-Katalysator wie FeBr₃ oder AlCl₃)
- **Friedel-Crafts-Alkylierung**: R⁺ (aus R-Cl + AlCl₃) → Alkylbenzol

## Dirigierende Effekte — +M/−M und +I/−I

Substituenten am Benzolring beeinflussen bei der EAS sowohl die Reaktionsgeschwindigkeit als auch die Position der nächsten Substitution. Das Zusammenspiel von **mesomeren** (+M/−M) und **induktiven** (+I/−I) Effekten bestimmt das Ergebnis:

**Aktivierende Substituenten** (elektronenschiebend) erhöhen die Elektronendichte im Ring und dirigieren in die **ortho/para**-Position: −OH (+M, stark aktivierend), −NH₂ (+M, stark aktivierend), −Alkyl (+I, schwach aktivierend). Diese Gruppen schieben Elektronendichte in den Ring und stabilisieren den Wheland-Komplex besonders in ortho- und para-Position.

**Desaktivierend Substituenten** (elektronenziehend) verringern die Elektronendichte und dirigieren in die **meta**-Position: −NO₂ (−M, −I), −COOH (−M), −SO₃H (−M). Sie destabilisieren den Wheland-Komplex in ortho/para stärker als in meta.

**Halogene** sind ein Sonderfall: Sie **desaktivieren** den Ring (starker −I-Effekt durch hohe Elektronegativität), dirigieren aber trotzdem **ortho/para** (schwacher +M-Effekt durch freie Elektronenpaare überwiegt bei der Richtungslenkung, nicht aber bei der Aktivierung).

> **Merke:** +M/+I → aktivierend, ortho/para-dirigierend. −M/−I → desaktivierend, meta-dirigierend. Halogene: desaktivierend, aber ortho/para (Sonderfall!).

## Heteroaromaten — Stickstoffhaltige Ringsysteme

Enthält der aromatische Ring neben Kohlenstoff auch Heteroatome wie Stickstoff, Sauerstoff oder Schwefel, spricht man von **Heteroaromaten**. Sie sind in der Biochemie allgegenwärtig.

**Pyridin** (6-Ring mit einem N) ist das Stickstoff-Analogon des Benzols und findet sich als Grundgerüst in NAD⁺/NADH und Vitamin B₃ (Niacin). Das freie Elektronenpaar des Pyridin-Stickstoffs steht senkrecht zum π-System und verleiht dem Molekül basische Eigenschaften (pKₐ ≈ 5,2).

Im Gegensatz dazu ist **Pyrrol** (5-Ring mit einem N) nicht basisch, weil sein Stickstoff-Elektronenpaar in das π-System einbezogen ist und so die für Aromatizität nötigen 6 π-Elektronen vervollständigt (4 C-Atome liefern je 1 π-Elektron, das N-Atom steuert sein Elektronenpaar bei: 4 + 2 = 6). Vier Pyrrolringe bilden das Grundgerüst des **Porphyrins**, das als Häm in Hämoglobin und als Chlorophyll in Pflanzen zentrale biologische Funktionen erfüllt.

**Imidazol** (5-Ring mit zwei N) vereint beide Typen: einen pyridin-artigen (basischen) und einen pyrrol-artigen Stickstoff. Es bildet die Seitenkette der Aminosäure Histidin, deren pKₐ von etwa 6 eine Pufferfunktion bei physiologischem pH ermöglicht.

Die beiden Nukleinsäure-Basenklassen leiten sich ebenfalls von Heteroaromaten ab: **Purine** (Adenin, Guanin) bestehen aus einem kondensierten Imidazol-Pyrimidin-Ringsystem (Doppelring, 9 Atome), **Pyrimidine** (Cytosin, Thymin, Uracil) aus einem Sechsring mit zwei Stickstoffatomen. Purine und Pyrimidine als Basen der Nukleinsäuren werden ausführlich in UK ch-13-04 behandelt.

## Polyzyklische aromatische Kohlenwasserstoffe (PAK)

Kondensierte aromatische Ringsysteme — also Aromaten, die zwei oder mehr Ringe über gemeinsame Kanten teilen — bilden die Klasse der **PAK**. Naphthalin (2 Ringe, 10 π-Elektronen, n = 2) ist das einfachste Beispiel. Unter den PAK ist **Benzo[a]pyren** (5 kondensierte Ringe, im Tabakrauch und gegrilltem Fleisch) ein potentes **Karzinogen**: Es wird durch CYP450-Enzyme (Phase-I-Metabolismus) zu einem Diolepoxid aktiviert, das kovalent an die DNA bindet und Mutationen auslöst — ein klassisches Beispiel für metabolische Aktivierung eines Prokanzerogens.

> **Merke:** Hückel-Regel: 4n+2 π-Elektronen → aromatisch (2, 6, 10, 14 ...). Benzol: 6 (n=1). Aromaten bevorzugen Substitution (EAS), nicht Addition — um die Resonanzenergie zu erhalten.

> **Prüfungstipp:** Die Hückel-Regel (4n+2 π-Elektronen) ist eine beliebte Rechenaufgabe im MedAT. Cyclooctatetraen hat 8 π-Elektronen → nicht aromatisch (4n+2 = 8 hat keine ganzzahlige Lösung)! Dirigierende Effekte: −OH ortho/para, −NO₂ meta, Halogene ortho/para (aber desaktivierend). Die Chemie der Aminosäuren wird in UK ch-13-01 ausführlich behandelt.`,
    stichworte: [
      "Benzol",
      "Aromatizität",
      "Hückel-Regel",
      "elektrophile aromatische Substitution",
      "Heteroaromaten",
      "Pyridin",
      "Pyrrol",
      "Imidazol",
      "dirigierende Effekte",
      "+M/-M-Effekt",
      "Benzo[a]pyren",
      "PAK",
    ],
    lernziele: [
      "Die Hückel-Regel (4n+2 π-Elektronen) erklären und Benzol als aromatische Verbindung identifizieren.",
      "Die elektrophile aromatische Substitution (Nitrierung, Halogenierung) im Mechanismus beschreiben.",
      "Dirigierende Effekte (+M/−M, +I/−I) auf ortho/para- vs. meta-Stellung anwenden.",
      "Die wichtigsten Heteroaromaten (Pyridin, Pyrrol, Imidazol) und ihre biologische Relevanz erklären.",
      "Benzo[a]pyren als Karzinogen und das Prinzip der metabolischen Aktivierung beschreiben.",
    ],
    sections: [
      {
        heading: "Hückel-Regel und Benzol-Struktur",
        text: "Benzol (C₆H₆) erfüllt alle Bedingungen der Aromatizität: (1) planarer Ring, (2) vollständige Konjugation, (3) 6 π-Elektronen (n=1, 4·1+2=6). Die sechs p-Orbitale der sp²-hybridisierten C-Atome überlappen seitlich zu einem durchgehenden π-System oberhalb und unterhalb der Ringebene. Alle C-C-Bindungen sind gleichlang (139 pm). Die Resonanzenergie (Mesomerie-Energie) von ca. 150 kJ/mol erklärt, warum Benzol Additionsreaktionen meidet — Addition würde das aromatische System zerstören.",
        merksatz:
          "Hückel: 4n+2 π-Elektronen → aromatisch. Benzol: 6 π-Elektronen (n=1). Aromatisch = planar, konjugiert, stabil. EAS bevorzugt (nicht Addition!), um Aromatizität zu erhalten.",
      },
      {
        heading: "EAS-Mechanismus und dirigierende Effekte",
        text: "Bei der EAS greift ein Elektrophil (E⁺) das π-System an → Areniumion (Wheland-Komplex, sp³ am angegriffenen C) → H⁺-Abspaltung stellt Aromatizität wieder her. Wichtigste EAS: Nitrierung (NO₂⁺), Halogenierung (Br⁺/Cl⁺ mit Lewis-Säure), Sulfonierung (SO₃), Friedel-Crafts (R⁺ mit AlCl₃). Dirigierende Effekte: +M/+I-Gruppen (−OH, −NH₂, Alkyl) aktivieren und dirigieren ortho/para; −M/−I-Gruppen (−NO₂, −COOH) desaktivieren und dirigieren meta. Halogene: desaktivierend (−I), aber ortho/para-dirigierend (+M überwiegt bei Richtungslenkung).",
        merksatz:
          "EAS: E⁺ greift π-System an → Wheland-Komplex → H⁺ ab → Aromatizität erhalten. +M → ortho/para; −M → meta. Halogene: Sonderfall (desaktivierend, aber ortho/para).",
      },
      {
        heading: "Heteroaromaten und PAK",
        text: "Pyridin (6-Ring, 1 N): basisch (freies Elektronenpaar senkrecht zum π-System), Grundgerüst von NAD⁺ und Vitamin B₃. Pyrrol (5-Ring, 1 N): nicht basisch (Elektronenpaar im π-System, liefert die 6. und 7. π-Elektronen für Aromatizität). Imidazol (5-Ring, 2 N): vereint pyridin- und pyrrol-artigen N; Seitenkette von Histidin. Porphyrine (4 Pyrrolringe) = Häm/Chlorophyll. PAK: Benzo[a]pyren (5 Ringe, Tabakrauch) → CYP450-Aktivierung → Diolepoxid bindet kovalent an DNA → Karzinogen.",
        merksatz:
          "Pyridin = basisch (N-Elektronenpaar ⊥ zum Ring). Pyrrol = nicht basisch (Elektronenpaar im π-System). Imidazol = beides. Benzo[a]pyren → DNA-Addukt → Krebs.",
      },
    ],

    merksätze: [
      "Hückel-Regel: 4n+2 π-Elektronen → aromatisch. Benzol: n=1, 6 π-Elektronen. Erlaubte Zahlen: 2, 6, 10, 14.",
      "Aromate: bevorzugen elektrophile aromatische Substitution (EAS), nicht Addition — Resonanzenergie bleibt erhalten.",
      "EAS-Mechanismus: E⁺ greift π-System an → Areniumion (Wheland-Komplex) → H⁺ ab → Aromatizität wiederhergestellt.",
      "Nitrierung: Benzol + NO₂⁺ (aus HNO₃/H₂SO₄) → Nitrobenzol. Halogenierung: Benzol + Br₂/FeBr₃ → Brombenzol.",
      "+M/+I-Gruppen (−OH, −NH₂, Alkyl): aktivierend, ortho/para-dirigierend.",
      "−M/−I-Gruppen (−NO₂, −COOH, −SO₃H): desaktivierend, meta-dirigierend.",
      "Halogene: desaktivierend (−I), aber ortho/para-dirigierend (+M überwiegt bei Richtungslenkung).",
      "Pyridin: basisch (freies e⁻-Paar ⊥ π-System). Pyrrol: nicht basisch (e⁻-Paar im π-System). Imidazol: beides.",
      "Porphyrin = 4 Pyrrolringe → Häm (Hämoglobin) und Chlorophyll.",
      "Benzo[a]pyren (PAK, 5 Ringe): Prokarzinogen → CYP450-Aktivierung → DNA-Addukt → Mutationen.",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Was versteht man unter elektrophiler aromatischer Substitution? Erklären Sie den Mechanismus am Beispiel der Nitrierung von Benzol und begründen Sie, warum Aromate bevorzugt Substitution statt Addition eingehen.",
      answer:
        "Die elektrophile aromatische Substitution (EAS) ist die charakteristische Reaktion aromatischer Verbindungen. Bei dieser Reaktion wird ein Wasserstoffatom des Aromaten durch ein Elektrophil (elektronenarme Spezies) ersetzt, wobei das aromatische π-System erhalten bleibt. Der Mechanismus der Nitrierung von Benzol verläuft in zwei Schritten: Im ersten Schritt wird durch Reaktion von konzentrierter Salpetersäure (HNO₃) mit konzentrierter Schwefelsäure (H₂SO₄) das Nitroniumion (NO₂⁺) als reaktives Elektrophil gebildet: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Im zweiten Schritt greift das Nitroniumion (NO₂⁺) das π-Elektronensystem des Benzols nucleophil an. Dabei entsteht ein kationischer Übergangszustand (Wheland-Intermediat oder Areniumion), in dem die aromatische Stabilität kurzzeitig verloren geht — der betroffene Kohlenstoff ist sp³-hybridisiert. Im dritten Schritt wird ein Proton (H⁺) abgespalten; die Aromatizität wird wiederhergestellt, das Proton wird von HSO₄⁻ aufgenommen. Produkt: Nitrobenzol. Aromate bevorzugen Substitution statt Addition aus thermodynamischen Gründen: Die Mesomerie-Energie (Resonanzenergie) des aromatischen Systems beträgt ca. 150 kJ/mol. Eine Additionsreaktion würde diese Resonanzenergie zerstören und ein nicht-aromatisches, energetisch ungünstigeres Produkt liefern. Die Substitution hingegen erhält das aromatische π-System — die 'Treibkraft' ist die Wiederherstellung der Aromatizität durch Protonenabspaltung. Dieses Prinzip erklärt auch die biologische Inertheit von aromatischen Ringen in Biomolekülen.",
    },
    klinischerBezug:
      "Benzol bei chronischer Exposition karzinogen (AML). Benzo[a]pyren (Tabakrauch) → metabolische Aktivierung → DNA-Mutationen → Lungenkrebs. Heteroaromaten in Arzneimitteln: Imidazol-Derivate (Antimykotika), Pyridin-Derivate (Niacin/B₃). Nitrobenzol als Ausgangsstoff für Anilin und Sulfonamide.",
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
          "Benzol (C₆H₆) ist die klassische aromatische Verbindung. Die sechs sp²-hybridisierten C-Atome bilden einen planaren hexagonalen Ring. Jedes C-Atom hat ein p-Orbital senkrecht zur Ringebene; diese sechs p-Orbitale überlappen zu einem delokalisierten π-System mit 6 π-Elektronen. Die Hückel-Regel (4n+2 mit n=1 → 6 π-Elektronen) ist erfüllt. Alle C-C-Bindungen sind gleichlang (139 pm). Benzol reagiert bevorzugt durch EAS (Substitution), nicht durch Addition — um die Aromatizität und die damit verbundene Resonanzenergie (~150 kJ/mol) zu erhalten.",
        hints: [
          "Hückel-Regel: 4n+2 π-Elektronen. Für n=1: wie viele π-Elektronen?",
          "Aromatisch = planar, konjugiert, 4n+2 π-Elektronen. Was ist charakteristisch?",
        ],
        difficulty: 1,
        tags: ["benzol", "hückel-regel", "aromatizität"],
      },
      {
        question:
          "Welchen Effekt hat eine −NH₂-Gruppe als Substituent am Benzolring bei einer EAS?",
        options: [
          "Desaktivierend und meta-dirigierend",
          "Aktivierend und meta-dirigierend",
          "Aktivierend und ortho/para-dirigierend",
          "Desaktivierend und ortho/para-dirigierend",
          "Kein Effekt auf die Zweitsubstitution",
        ],
        correctIndex: 2,
        explanation:
          "Die −NH₂-Gruppe hat einen starken +M-Effekt: Das freie Elektronenpaar des Stickstoffs wird durch Mesomerie in den Ring geschoben und erhöht die Elektronendichte besonders in ortho- und para-Position. Dadurch ist der Ring aktiviert (reagiert schneller als Benzol) und das Elektrophil wird bevorzugt in ortho- und para-Stellung dirigiert. Andere aktivierende, ortho/para-dirigierende Gruppen sind −OH und Alkylgruppen (+I-Effekt).",
        hints: [
          "−NH₂ hat ein freies Elektronenpaar, das in den Ring geschoben werden kann (+M-Effekt).",
          "Elektronenschiebende Gruppen erhöhen die Dichte in ortho und para.",
        ],
        difficulty: 2,
        tags: ["eas", "dirigierende-effekte", "aminogruppe"],
      },
      {
        question: "Warum ist Pyrrol (5-Ring mit einem N) im Gegensatz zu Pyridin NICHT basisch?",
        options: [
          "Pyrrol hat keine Stickstoffatome",
          "Das Elektronenpaar des Pyrrol-N ist Teil des aromatischen π-Systems und steht nicht für Protonierung zur Verfügung",
          "Pyrrol ist antiaromatisch und daher unreaktiv",
          "Pyridin hat zwei N-Atome, Pyrrol nur eines",
          "Pyrrol ist zu klein für eine Protonenaufnahme",
        ],
        correctIndex: 1,
        explanation:
          "In Pyrrol ist das freie Elektronenpaar des Stickstoffs in das aromatische π-System einbezogen — es liefert 2 der insgesamt 6 π-Elektronen (4 von den C-Atomen + 2 vom N). Eine Protonierung des N würde dieses Elektronenpaar aus dem π-System entfernen und die Aromatizität zerstören. Bei Pyridin steht das freie Elektronenpaar senkrecht zum π-System in der Ringebene (es ist nicht an der Aromatizität beteiligt) und kann daher Protonen aufnehmen.",
        hints: [
          "Pyrrol braucht das N-Elektronenpaar für die 4n+2-Regel. Was passiert bei Protonierung?",
          "Bei Pyridin liegt das Elektronenpaar in der Ringebene, bei Pyrrol senkrecht dazu im π-System.",
        ],
        difficulty: 2,
        tags: ["pyrrol", "pyridin", "heteroaromaten", "basizität"],
      },
      {
        question:
          "Warum ist Benzo[a]pyren karzinogen, obwohl es selbst nicht direkt mit DNA reagiert?",
        options: [
          "Es zerstört die Zellmembran durch seine Hydrophobizität",
          "Es hemmt die DNA-Polymerase kompetitiv",
          "Es wird durch CYP450-Enzyme zu einem reaktiven Diolepoxid aktiviert, das kovalent an DNA bindet",
          "Es interkaliert zwischen die Basenpaare und verhindert die Replikation",
          "Es methyliert Cytosin-Basen und verursacht Gensilencing",
        ],
        correctIndex: 2,
        explanation:
          "Benzo[a]pyren ist ein Prokarzinogen — es ist selbst nicht direkt reaktiv, wird aber durch CYP450-Enzyme (Phase-I-Metabolismus) zu einem Diolepoxid bioaktiviert. Dieses hochreaktive Zwischenprodukt bindet kovalent an die DNA (bildet DNA-Addukte, bevorzugt an Guanin) und verursacht Mutationen. Dies ist ein klassisches Beispiel für metabolische Aktivierung: Der Körper versucht, die lipophile Substanz durch Oxidation wasserlöslicher zu machen, erzeugt dabei aber ein reaktiveres, karzinogenes Intermediat.",
        hints: [
          "Pro-Karzinogen = wird erst im Körper zum Karzinogen aktiviert. Durch welches Enzymsystem?",
          "CYP450 oxidiert lipophile Substanzen — manchmal entstehen dabei reaktivere Metabolite.",
        ],
        difficulty: 3,
        tags: ["benzopyren", "karzinogen", "cyp450", "metabolische-aktivierung"],
      },
      {
        question:
          "Bei der Nitrierung von Benzol entsteht das Elektrophil NO₂⁺. Wie wird es gebildet?",
        options: [
          "Durch Reduktion von NO₃⁻ mit Zink",
          "Durch Reaktion von HNO₃ mit H₂SO₄ (Nitriersäure)",
          "Durch thermische Zersetzung von NaNO₂",
          "Durch Oxidation von NH₃ mit O₂",
          "Durch Elektrolyse von Salpetersäure",
        ],
        correctIndex: 1,
        explanation:
          "Das Nitroniumion (NO₂⁺) wird durch Reaktion von konzentrierter Salpetersäure mit konzentrierter Schwefelsäure gebildet: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O. Die Schwefelsäure wirkt als starke Brønsted-Säure und protoniert die Salpetersäure, wodurch Wasser abgespalten und das Elektrophil NO₂⁺ freigesetzt wird. Dieses Gemisch wird als Nitriersäure bezeichnet und ist das klassische Reagenz für die Nitrierung aromatischer Verbindungen.",
        hints: [
          "Nitriersäure = HNO₃ + H₂SO₄. Welche Rolle spielt die Schwefelsäure?",
          "H₂SO₄ protoniert HNO₃ → Wasser wird abgespalten → was bleibt?",
        ],
        difficulty: 2,
        tags: ["nitrierung", "nitroniumion", "eas"],
      },
      {
        question:
          "Welche Verbindung ist nach der Hückel-Regel (4n+2 π-Elektronen) NICHT aromatisch?",
        options: [
          "Benzol (C₆H₆, 6 π-Elektronen)",
          "Pyrrol (C₄H₄NH, 6 π-Elektronen)",
          "Naphthalin (C₁₀H₈, 10 π-Elektronen)",
          "Cyclooctatetraen (C₈H₈, 8 π-Elektronen)",
          "Pyridin (C₅H₅N, 6 π-Elektronen)",
        ],
        correctIndex: 3,
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
];
