import type { Kapitel } from "../types";

export const bioKapAnatomieGewebe: Kapitel = {
  id: "bio-kap2",
  title: "Humanbiologie & Organsysteme",
  subject: "biologie",
  icon: "🔬",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap2-gewebe ===
    {
      id: "bio-2-01",
      title: "Epithelgewebe — Formen, Schichtungen und Funktionen",
      imageUrl: "/images/bms/bio-epidermis-schichten.webp",
      imageCaption: "Abb.: Schichten der Epidermis mit Zelltypen (OpenStax, CC BY 4.0)",
      diagram: "epithelial-tissue",
      stichworte: [
        "Plattenepithel",
        "Zylinderepithel",
        "Übergangsepithel",
        "Drüsenepithel",
        "Basalmembran",
        "Oberflächenepithel",
        "Flimmerepithel",
        "Apikale Polarität",
      ],
      content: `Gewebe bilden die Bausteine aller Organe — ihre Kenntnis ist für den BMS-Teil unverzichtbar. Dieses Kapitel behandelt die vier Grundgewebearten (Epithel-, Binde-, Muskel- und Nervengewebe) sowie die wichtigsten Organsysteme des Menschen.

## Grundprinzip: Eigenschaften aller Epithelien

Epithelien kleiden jede Körperoberfläche und jedes Hohlorgan aus — trotz ihrer Vielfalt teilen **alle** Epithelien drei Grundeigenschaften:

1. **Polarität**: Die Zelle hat eine **apikale Seite** (zur Körperhöhle hin) und eine **basolaterale Seite** (zur Basalmembran hin). Transporter sind ungleichmäßig verteilt — das ermöglicht **gerichteten Transport** (z. B. SGLT1 apikal, GLUT2 basolateral im Dünndarm).

2. **Basalmembran**: Das Epithel sitzt auf der **Basalmembran**, die es mit dem darunterliegenden Bindegewebe verbindet. Hauptkomponenten: Kollagen IV, Laminin (Verankerungsprotein) und Proteoglykane. Sie verankert das Epithel und wirkt als selektive Barriere.

3. **Avaskulär**: Epithelien haben keine eigenen Blutgefäße — Versorgung erfolgt durch Diffusion aus darunter liegenden Kapillaren. → Hohe Zellerneuerungsrate nötig (Dünndarm alle 3–5 Tage, Haut alle ~2 Wochen)

**Zellkontakte in Epithelien:**
- **Tight Junctions** (Zonula occludens): Versiegeln apikalen Interzellularspalt; Barriere- und Fence-Funktion (trennen apikale und basolaterale Membranproteine). Aus Claudinen und Occludin (Transmembranproteine).
- **Desmosomen**: Mechanischer Zusammenhalt (Cadherine + Intermediärfilamente). Knotenförmig, gürtelartig.
- **Gap Junctions**: Direkter Ionenaustausch zwischen Zellen über Connexin-Kanäle. **Herzmuskelzellen sind über Gap Junctions elektrisch verbunden** — so breitet sich die Erregung koordiniert aus (nicht über Tight Junctions oder Desmosomen).
- **Hemidesmosomen**: Verankerung an Basalmembran (Integrine + Laminin).

> **Merke:** Tight Junctions = apikal, Barriere + Fence. Desmosomen = mechanisch. Gap Junctions = Ionenaustausch. Hemidesmosomen = Basalmembran-Verankerung.

{{DIAGRAM}}

---

## Klassifikation der Epithelien

| Epitheltyp | Vorkommen | Funktion |
|---|---|---|
| Einschichtiges **Plattenepithel** | Endothel (Blutgefäße), Mesothel (Serosa), Alveolen | Schnelle Diffusion |
| Einschichtiges **kubisches** Epithel | Schilddrüsenfollikel, Nierentubuli, Gallengänge | Sekretion, Resorption |
| Einschichtiges **Zylinderepithel** | Dünndarm (Mikrovilli!), Magen, Dickdarm | Resorption, Sekretion |
| **Mehrreihiges** (pseudo-) Flimmerepithel | Trachea, Bronchien, Eileiter | Mukoziliäre Clearance (Schleimtransport durch Flimmerhärchen) |
| Mehrschichtiges **verhorntes** Plattenepithel | Epidermis (Haut) | Mechanischer Schutz |
| Mehrschichtiges **unverhorntes** Plattenepithel | Ösophagus, Vagina, Mundhöhle | Schutz, bleibt feucht |
| **Urothel** (Übergangsepithel) | Harnblase, Ureter | Dehnbarkeit |

**Wichtige Details:**
- **Pseudostratifiziert** (mehrreihig): Alle Zellen berühren die Basalmembran, Kerne liegen auf verschiedenen Höhen → sieht mehrschichtig aus, ist es aber nicht! Kinozilien (9+2-Axonemstruktur, ~6 µm) transportieren Schleim rachenwärts.
- **Urothel**: Schirmzellen (Umbrella cells) bei leerer Blase gewölbt → bei Dehnung abgeflacht + Uroplakin-Membranen aus Vesikeln eingefaltet → Epithel kann sich verdoppeln ohne zu reißen
- **Verhorntes Plattenepithel**: 4 Schichten: Stratum basale (Mitose, Stammzellen) → spinosum (Desmosomen) → granulosum (Keratohyalin) → corneum (tote Korneozyten, Keratin)

> **Merke:** Pseudostratifiziert ≠ mehrschichtig — alle Zellen berühren Basalmembran! Urothel = Schirmzellen. Trachea = mehrreihiges Flimmerepithel.

---

## Drüsenepithelien und Sekretionsarten

**Exokrine Drüsen** (mit Ausführungsgang) vs. **endokrine Drüsen** (ohne Gang, direkt ins Blut).

Sekretionsmechanismen exokriner Drüsen:

| Typ | Mechanismus | Beispiele |
|---|---|---|
| **Merokrin** | Exozytose (kein Zellverlust) | Schweißdrüsen, Pankreas, Speicheldrüsen — **häufigste Form** |
| **Apokrin** | Abschnürung des apikalen Zellpols | Laktierende Brustdrüse, apokriner Schweiß (Axilla) |
| **Holokrin** | Gesamte Zelle zerfällt und wird zum Sekret | **Talgdrüsen** (Glandulae sebaceae) |

**Becherzellen:** Einzellige Schleimdrüsen im Darm- und Atemwegsepithel → sezernieren Muzin (Schleimprotein) (merokrin) → Schleimfilm als Schutz und für mukoziliäre Clearance.

**Klinisch — Kartagener-Syndrom (Primäre Ziliendyskinesie):** Defekte Dynein-Arme der Kinozilien → kein Zilienanschlag → kein Schleimtransport → chronische Bronchitis, Bronchiektasen (dauerhafte Erweiterung der Bronchien), Infertilität. Situs inversus (Organe spiegelverkehrt) in 50% der Fälle (Links-Rechts-Bestimmung in der Embryonalentwicklung durch Nodal-Zilien gestört).

> **Merke:** Merokrin = Exozytose (häufig); apokrin = Zellspitze abgeschnürt; holokrin = ganze Zelle = Sekret (Talgdrüse). Kartagener: Dynein-Defekt → Zilien bewegungslos.`,
      lernziele: [
        "Epitheltypen nach Form und Schichtung benennen und ihren Vorkommen zuordnen",
        "Polarität des Epithels, Basalmembran und wichtige Zellkontakte erklären",
        "Drüsentypen nach Sekretionsmechanismus unterscheiden und klinische Beispiele nennen",
      ],
      sections: [],
      merksätze: [
        "Epithelien sind polar, avaskulär und sitzen auf einer Basalmembran.",
        "Klassifikation nach Form (Platten, kubisch, zylindrisch) UND Schichtung (ein- vs. mehrschichtig).",
        "Tight Junctions versiegeln apikal; Desmosomen halten mechanisch zusammen.",
      ],
      altfrage: {
        text: "Welches Epithel kleidet die Trachea aus?",
        options: [
          { id: "a", text: "Einschichtiges Plattenepithel." },
          { id: "b", text: "Mehrschichtiges verhorntes Plattenepithel." },
          {
            id: "c",
            text: "Mehrreihiges (pseudostratifiziertes) Flimmerepithel mit Kinozilien und Becherzellen.",
          },
          { id: "d", text: "Übergangsepithel (Urothel)." },
          { id: "e", text: "Einschichtiges hochprismatisches Epithel ohne Zilien." },
        ],
        correctOptionId: "c",
        explanation:
          "Die Trachea ist von mehrreihigem Flimmerepithel (pseudostratifiziert) ausgekleidet. Kinozilien transportieren den Schleimfilm mit Fremdpartikeln rachenwärts (mukoziliäre Clearance). Becherzellen produzieren den schützenden Schleim.",
      },
      klinischerBezug:
        "Bei Kartagener-Syndrom (Primäre Ziliendyskinesie) sind die Dynein-Arme der Kinozilien defekt — Betroffene leiden unter chronischer Bronchitis, Bronchiektasen, Infertilität und häufig Situs inversus. Karzinome entstehen zu ca. 85 % aus entartetem Epithelgewebe.",
      selfTest: [
        {
          question: "Welche Aussage über Tight Junctions ist korrekt?",
          options: [
            "Sie verbinden Epithelzellen basal mit der Basalmembran.",
            "Sie ermöglichen direkten Ionenaustausch zwischen benachbarten Zellen.",
            "Sie versiegeln den apikalen Interzellularspalt und trennen apikale von basolateraler Membrandom­äne.",
            "Sie bestehen hauptsächlich aus Kollagen Typ IV.",
            "Sie sind nur in mehrschichtigen Epithelien zu finden.",
          ],
          correctIndex: 2,
          explanation:
            "Tight Junctions (Claudine, Occludin) schließen den Interzellularspalt apikal und wirken als Fence, der apikale und basolaterale Membranproteine voneinander trennt. Gap Junctions (nicht Tight Junctions) ermöglichen Ionenaustausch; Hemidesmosomen verankern Zellen an der Basalmembran.",
          hints: [
            "Denk an die Lage: Tight Junctions sitzen ganz oben, apikal — was sperren sie ab?",
            "Der Begriff 'Fence-Funktion' beschreibt, was sie zusätzlich zur Barriere leisten.",
          ],
          difficulty: 2,
          tags: ["tight junctions", "epithel", "barrierefunktion"],
        },
        {
          question: "Welches Epithel findet sich in der Harnblase und ermöglicht deren Dehnung?",
          options: [
            "Mehrschichtiges verhorntes Plattenepithel",
            "Einschichtiges Zylinderepithel mit Mikrovilli",
            "Mehrreihiges Flimmerepithel",
            "Übergangsepithel (Urothel) mit Schirmzellen",
            "Einschichtiges kubisches Epithel",
          ],
          correctIndex: 3,
          explanation:
            "Das Urothel besitzt Schirmzellen, die sich bei Blasenfüllung abflachen und deren Uroplakin-reiche Membran aus intrazellulären Vesikeln eingefaltet wird. So kann die Harnblase ihr Volumen stark vergrößern, ohne zu reißen.",
          hints: [
            "Welches Epithel hat seinen Namen von der Funktion 'Übergang' zwischen verschiedenen Dehnungszuständen?",
            "Die obersten Zellen dieses Epithels sind charakteristisch gewölbt und haben einen eigenen Namen.",
          ],
          difficulty: 1,
          tags: ["urothel", "harnblase", "schirmzellen"],
        },
        {
          question:
            "Ein Arzt untersucht ein Gewebe: Die Zellen sind säulenförmig, sitzen auf einer Basalmembran und tragen apikale Mikrovilli. In welchem Organ befindet man sich wahrscheinlich?",
          options: ["Trachea", "Harnblase", "Dünndarm", "Epidermis der Haut", "Ösophagus"],
          correctIndex: 2,
          explanation:
            "Einschichtiges Zylinderepithel mit apikalen Mikrovilli (Bürstensaum) ist typisch für den Dünndarm. Die Mikrovilli erhöhen die Resorptionsfläche massiv. Die Trachea hat Flimmerepithel; Harnblase hat Urothel; Haut hat verhorntes Plattenepithel; Ösophagus hat unverhorntes Plattenepithel.",
          hints: [
            "Mikrovilli = Bürstensaum — welches Organ ist für Resorption von Nährstoffen spezialisiert?",
            "Säulenförmige Zellen + Mikrovilli + einschichtig: Das ist das Paradebeispiel eines Resorptionsepithels.",
          ],
          difficulty: 1,
          tags: ["zylinderepithel", "dünndarm", "mikrovilli"],
        },
        {
          question:
            "Was kennzeichnet ein 'mehrreihiges' (pseudostratifiziertes) Epithel gegenüber einem echten mehrschichtigen Epithel?",
          options: [
            "Mehrere Zelllagen liegen übereinander, nur die unterste berührt die Basalmembran.",
            "Alle Zellen berühren die Basalmembran, aber die Kerne liegen auf verschiedenen Höhen.",
            "Es ist nur in Drüsen zu finden.",
            "Die Zellen sind immer verhornt.",
            "Es trägt ausschließlich Mikrovilli, keine Zilien.",
          ],
          correctIndex: 1,
          explanation:
            "Beim pseudostratifizierten Epithel berühren alle Zellen die Basalmembran (einschichtig!), aber da die Kerne auf unterschiedlichen Höhen liegen, sieht es unter dem Mikroskop mehrschichtig aus. Ein echtes mehrschichtiges Epithel hat mehrere Zelllagen, von denen nur die unterste die Basalmembran berührt.",
          hints: [
            "'Pseudo' bedeutet 'scheinbar' — was ist der scheinbare Eindruck, und was ist die Realität?",
            "Die entscheidende Frage ist: Welche Zellen berühren die Basalmembran?",
          ],
          difficulty: 2,
          tags: ["mehrreihiges epithel", "pseudostratifiziert", "basalmembran"],
        },
        {
          question: "Welcher Sekretionsmechanismus ist charakteristisch für Talgdrüsen?",
          options: [
            "Merokrin (Exozytose ohne Zellverlust)",
            "Apokrin (Abschnürung des apikalen Zytoplasmas)",
            "Holokrin (Zerfall der gesamten Sekretionszelle)",
            "Endokrin (Abgabe ins Blut)",
            "Parakrin (Abgabe in den Interzellularspalt)",
          ],
          correctIndex: 2,
          explanation:
            "Talgdrüsen sezernieren holokrin: Die gesamte Zelle füllt sich mit Lipiden und zerfällt dann — das Sekret (Talg/Sebum) ist der Zellinhalt selbst. Merokrine Sekretion (Exozytose) ist der häufigste Mechanismus (Speicheldrüsen, Pankreas). Apokrin (Membranabschnürung) findet sich z. B. in bestimmten Schweißdrüsen.",
          hints: [
            "'Holo-' bedeutet 'ganz' — was passiert mit der gesamten Zelle?",
            "Denke an den Talg: Er ist sehr öl-reich. Wie könnte eine Zelle so viel Lipid abgeben?",
          ],
          difficulty: 3,
          tags: ["holokrin", "talgdrüsen", "sekretionsmechanismus"],
        },
        {
          question:
            "Welche der folgenden Aussagen über Epithelgewebe sind richtig?\n\n1. Tight Junctions versiegeln den apikalen Interzellularspalt und haben eine Fence-Funktion\n2. Gap Junctions ermöglichen direkten Ionenaustausch zwischen Zellen über Connexin-Kanäle\n3. Das Urothel der Harnblase ist ein einschichtiges Zylinderepithel\n4. Epithelien sind avaskulär und werden durch Diffusion ernährt\n5. Mehrreihiges Flimmerepithel ist mehrschichtig — nicht alle Zellen berühren die Basalmembran",
          options: [
            "Nur 1, 2 und 4",
            "Nur 1 und 4",
            "Nur 2, 3 und 5",
            "Nur 1, 2 und 3",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 0,
          explanation:
            "Aussagen 1, 2 und 4 sind korrekt. Aussage 3 ist falsch — das Urothel (Übergangsepithel) mit Schirmzellen ist ein eigener Epitheltyp, kein Zylinderepithel. Aussage 5 ist falsch — mehrreihiges (pseudostratifiziertes) Epithel ist einschichtig: Alle Zellen berühren die Basalmembran, nur die Kerne liegen auf verschiedenen Höhen.",
          difficulty: 2,
          tags: ["typ-k", "epithelgewebe", "tight junctions", "urothel"],
        },
        {
          question: "Welche der folgenden Aussagen über Epithelgewebe ist FALSCH?",
          options: [
            "Epithelien sind avaskulär und werden durch Diffusion aus dem darunterliegenden Bindegewebe ernährt",
            "Tight Junctions bilden eine parazellulär dichte Barriere und haben eine Fence-Funktion zur Aufrechterhaltung der Zellpolarität",
            "Mehrreihiges Flimmerepithel ist mehrschichtig, da die Zellkerne auf verschiedenen Höhen liegen und nicht alle Zellen die Basalmembran berühren",
            "Gap Junctions bestehen aus Connexin-Proteinen und ermöglichen den direkten Austausch von Ionen und kleinen Molekülen zwischen Nachbarzellen",
            "Das Urothel (Übergangsepithel) der Harnblase kann sich bei Füllung dehnen, wobei die Schirmzellen an der Oberfläche abflachen",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist falsch. Mehrreihiges (pseudostratifiziertes) Flimmerepithel ist einschichtig — ALLE Zellen berühren die Basalmembran, nur die Kerne liegen auf unterschiedlichen Höhen, was den Eindruck von Mehrschichtigkeit erweckt. Echte Mehrschichtigkeit bedeutet, dass innere Zellen keinen Basalmembrankontakt haben. Dies ist eine klassische MedAT-Falle. Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "epithelgewebe", "mehrreihiges epithel"],
        },
      ],
    },
    {
      id: "bio-2-02",
      title: "Binde- und Stützgewebe — Kollagen, Knochen und Knorpel",
      imageUrl: "/images/wiki-bone-crosssection-de.svg",
      imageCaption:
        "Abb.: Knochenquerschnitt — Kompakta, Spongiosa, Periost, Markhöhle (Wikimedia Commons, CC BY-SA 4.0)",
      diagram: "bone-structure",
      stichworte: [
        "Knochen",
        "Knorpel",
        "Fettgewebe",
        "Kollagen",
        "Elastin",
        "Extrazelluläre Matrix",
        "Fibroblasten",
        "Straffes Bindegewebe",
      ],
      content: `Binde- und Stützgewebe geben dem Körper Form, Halt und mechanische Belastbarkeit — ihr gemeinsames Prinzip ist die Extrazelluläre Matrix.

{{DIAGRAM}}

## Grundprinzip: Die Extrazelluläre Matrix (EZM)

Sehne, Knorpel und Knochen sehen völlig verschieden aus, bestehen aber alle aus demselben Prinzip: Viel **mehr Matrix als Zellen**. Die **EZM** (der Raum zwischen den Zellen, gefüllt mit Fasern und Proteoglykanen) besteht aus:

1. **Kollagenfasern** (strukturelle Festigkeit — Zugfestigkeit und Druckresistenz)
2. **Elastinfasern** (Elastizität, Rückkehr in Ausgangsform)
3. **Proteoglykane** (Hyaluronsäure, Chondroitinsulfat (Zuckerprotein-Verbindungen), Heparansulfat): negativ geladen → binden Wasser → verleihen Druckresistenz. Beispiel: Aggrecan (Hauptproteoglykan des Knorpels) im Knorpel.
4. **Glykoproteine** (Fibronektin (Haftprotein der Matrix), Laminin): verknüpfen Zellen über **Integrine** (Adhäsionsrezeptoren) mit der Matrix → Zelladhäsion, Wundheilung, Migration

**Zellen des Bindegewebes:**
- **Fibroblasten**: Hauptproduzenten der EZM in lockerem/straffem Bindegewebe
- **Chondroblasten → Chondrozyten**: produzieren Knorpelmatrix
- **Osteoblasten → Osteozyten → Osteoklasten**: Knochenumbau
- **Mastzellen, Makrophagen**: Immunfunktionen

> **Merke:** Bindegewebe = Matrix dominiert über Zellen. EZM aus Kollagen (Festigkeit) + Proteoglykane (Wasser/Druck) + Fibronektin (Adhäsion).

---

## Kollagen — Struktur und Typen

**Synthese:** Vitamin C ist Cofaktor der **Prolyl- und Lysylhydroxylase** → hydroxyliert Prolin und Lysin → stabilisiert Tripelhelix. Ohne Vitamin C → instabile Fibrillen → **Skorbut** (Zahnfleischbluten, Wundheilungsstörungen, Gefäßbrüchigkeit).

**Wichtigste Kollagentypen:**

| Typ | Eigenschaften | Vorkommen |
|---|---|---|
| **I** | Zugfest, dicke Fibrillen | Knochen, Sehnen, Haut, Kornea — **häufigster Typ** |
| **II** | Druckresistent, dünne Fibrillen | Hyaliner Knorpel, Faserknorpel |
| **III** | Dehnbar, Retikulinfasern | Gefäßwände, frühe Wundheilung, Leber, Milz |
| **IV** | Netzartig, keine Fibrillen | **Basalmembran** (Nierenkörperchen, Alveolen) |

> **Merke:** Kollagen I = Knochen/Sehnen (zugfest). Kollagen II = Knorpel (druckresistent). Kollagen III = Gefäße/Wundheilung (dehnbar). Kollagen IV = Basalmembran (Netz).

---

## Knochen: Aufbau und dynamischer Umbau

**Knochenumbau (~10 % der Knochenmasse/Jahr):**

| Zelle | Herkunft | Funktion | Marker |
|---|---|---|---|
| **Osteoblast** | Mesenchym (Stroma) | Baut Osteoid (unmineralisierte Knochengrundsubstanz) auf, mineralisiert | ALP (alkalische Phosphatase) ↑, Osteocalcin |
| **Osteozyten** | Eingemauerter Osteoblast | Mechanorezeption, Signalgebung über Canaliculi | — |
| **Osteoklasten** | Hämatopoetisch (Monozyten/Makrophagen) | Resorbiert Knochen über HCl (pH ~4,5) + Kathepsin K (kollagenabbauendes Enzym) an Ruffled Border (spezialisierter Faltensaum) | TRAP (tartratresistente saure Phosphatase) ↑ |

**Regulation — RANKL/OPG-System:**
- Osteoblasten sezernieren **RANKL** → bindet an RANK auf Osteoklasten → aktiviert Resorption
- Osteoblasten sezernieren auch **OPG** (Osteoprotegerin) → fängt RANKL ab → hemmt Osteoklasten
- **Östrogen** ↑ OPG → weniger Resorption. Östrogenmangel (Menopause) → OPG ↓, RANKL dominiert → **Osteoporose**

**Therapeutisch:** Bisphosphonate (Knochenschwund-Hemmer, hemmen Osteoklasten direkt), Denosumab (RANKL-Antikörper).

> **Merke:** OsteoBlast = Baut. OsteoKlast = Klaut (resorbiert). RANKL aktiviert Osteoklasten. Östrogen schützt Knochen.

---

## Knorpeltypen im Vergleich

| Knorpeltyp | Zusammensetzung | Eigenschaften | Vorkommen |
|---|---|---|---|
| **Hyalin** | Kollagen II + viel Aggrecan | Druckresistent, glatt | Gelenkflächen, Trachealringe, fetales Skelett |
| **Faser** | Kollagen I dominiert | Zugfest UND druckresistent | Bandscheiben (Anulus fibrosus), Menisci (Gelenkzwischenscheiben), Symphysis pubica (Schambeinfuge) |
| **Elastisch** | Kollagen II + **Elastinfasern** | Biegsam, kehrt zurück | Ohrmuschel, Epiglottis, Auricula |

**Klinisch:** Arthrose (Gelenkverschleiß) = Degeneration des Hyalinknorpels der Gelenke → da avaskulär, kaum Selbstheilung → Gelenkersatz. Bandscheibenvorfall = Prolaps (Austritt) des Nucleus pulposus (gallertartiger Kern aus Proteoglykanen) durch den Faserknorpel-Anulus.

> **Merke:** Hyalin = Gelenk (Kollagen II). Faser = Bandscheibe/Meniskus (Kollagen I). Elastisch = Ohr/Epiglottis. Alle avaskulär = schlechte Heilung!

---

## Fettgewebe — Energiespeicher und mehr

**Weißes Fettgewebe** (univakuolär):
- Einzelner großer Lipidtropfen → Zellkern an Rand gedrängt (Siegelringform)
- Energiespeicher (~80 % des Körperfetts), Schutzpolster (perirenal, retroorbital), Isolation
- **Endokrines Organ**: sezerniert Adipokine (Fettgewebshormone):
  - **Leptin** → Sättigungssignal an Hypothalamus (Hunger hemmen)
  - **Adiponektin** (schützendes Fettzellhormon) → insulinsensibilisierend, antiinflammatorisch (↓ bei Adipositas!)
  - **TNF-α** → proinflammatorisch (↑ bei Adipositas → chronische Inflammation → Insulinresistenz)

**Braunes Fettgewebe** (multivakuolär):
- Viele kleine Lipidtropfen + viele Mitochondrien (daher braun)
- **UCP-1 (Thermogenin, Entkopplungsprotein)**: Entkoppelt oxidative Phosphorylierung → Protonen fließen zurück ohne ATP zu machen → Energie als **Wärme** (Thermogenese)
- Wichtig bei Neugeborenen (interscapulär (zwischen den Schulterblättern)) → nimmt mit Alter ab

> **Merke:** Weißes Fett = Energiespeicher + Leptin (endokrin). Braunes Fett = Thermogenese via UCP-1 (entkoppelt Atmungskette).`,
      lernziele: [
        "Kollagentypen I, II, III nach Vorkommen und Funktion unterscheiden",
        "Drei Knorpeltypen (Hyalin, Faser, elastisch) sowie Knochenumbau durch Osteoblasten und Osteoklasten erklären",
        "Binde- und Fettgewebetypen strukturell und funktionell einordnen",
      ],
      sections: [],
      merksätze: [
        "Kollagen I (Knochen, Sehnen), II (Knorpel), III (Retikulin, Gefäße) — Vitamin C für Hydroxylierung essentiell.",
        "Osteoblasten (aufbauend, mesenchymal) vs. Osteoklasten (abbauend, hämatopoetisch, RANKL).",
        "Knorpel ist avaskulär — daher schlechte Heilung; Knochen hat Blutgefäße und heilt gut.",
      ],
      altfrage: {
        text: "Welche Zellen sind für den Knochenabbau verantwortlich?",
        options: [
          { id: "a", text: "Osteoblasten — sie stammen aus mesenchymalen Stammzellen." },
          { id: "b", text: "Osteozyten — sie stammen aus eingemauerten Osteoblasten." },
          {
            id: "c",
            text: "Osteoklasten — sie stammen aus der hämatopoetischen Linie (Monozyten/Makrophagen-Vorläufer).",
          },
          { id: "d", text: "Chondroblasten — sie stammen aus dem Perichondrium." },
          { id: "e", text: "Fibroblasten — sie stammen aus dem Mesenchym." },
        ],
        correctOptionId: "c",
        explanation:
          "Osteoklasten bauen Knochen ab. Sie entstammen der hämatopoetischen Linie (Monozyten/Makrophagen-Vorläufer), sind mehrkernig und resorbieren Knochenmatrix durch HCl und Kathepsin K in der Howship-Lakune. Osteoblasten hingegen bauen Knochen auf.",
      },
      klinischerBezug:
        "Osteoporose entsteht durch Ungleichgewicht zugunsten der Osteoklasten, häufig durch Östrogenmangel nach der Menopause. Therapeutisch werden Bisphosphonate (hemmen Osteoklasten) oder RANKL-Antikörper (Denosumab) eingesetzt. Bei Skorbut (Vitamin-C-Mangel) ist die Kollagensynthese gestört — Knochen, Zahnfleisch und Gefäßwände werden brüchig.",
      selfTest: [
        {
          question: "Welcher Kollagentyp ist der häufigste in Sehnen und Knochen?",
          options: [
            "Kollagen Typ II",
            "Kollagen Typ III",
            "Kollagen Typ IV",
            "Kollagen Typ I",
            "Kollagen Typ V",
          ],
          correctIndex: 3,
          explanation:
            "Kollagen Typ I ist das häufigste Kollagen im Körper und dominiert in Knochen, Sehnen, Haut und Kornea. Es bildet dicke Fibrillen mit hoher Zugfestigkeit. Kollagen Typ II findet sich im Knorpel; Typ III in dehnbaren Strukturen wie Gefäßwänden.",
          hints: [
            "Das häufigste Kollagen hat die kleinste Zahl — welche Nummer ist das?",
            "Sehnen müssen extrem zugfest sein: Welcher Kollagentyp ist für Zugfestigkeit bekannt?",
          ],
          difficulty: 1,
          tags: ["kollagen", "kollagen typ i", "sehnen"],
        },
        {
          question: "Welches Merkmal unterscheidet Faserknorpel von Hyalinknorpel?",
          options: [
            "Faserknorpel enthält Elastinfasern statt Kollagen.",
            "Faserknorpel enthält reichlich Kollagen Typ I und ist besonders zugfest.",
            "Faserknorpel ist vaskularisiert, Hyalinknorpel nicht.",
            "Hyalinknorpel enthält Kollagen Typ I, Faserknorpel Kollagen Typ II.",
            "Faserknorpel findet sich ausschließlich in der Ohrmuschel.",
          ],
          correctIndex: 1,
          explanation:
            "Faserknorpel enthält hauptsächlich Kollagen Typ I (wie Sehnen) und ist daher besonders zugfest. Er findet sich in Bandscheiben (Anulus fibrosus), Menisci und der Symphysis pubica — Strukturen, die hohen Zug- und Druckkräften ausgesetzt sind. Hyalinknorpel enthält Kollagen Typ II und ist druckresistent.",
          hints: [
            "Faser-Knorpel: Der Name verrät es — was sind 'Fasern' im bindegewebigen Sinne?",
            "Bandscheiben müssen sowohl Druck als auch Zug widerstehen — welcher Knorpeltyp kann das?",
          ],
          difficulty: 2,
          tags: ["faserknorpel", "hyalinknorpel", "bandscheibe"],
        },
        {
          question: "Was ist die Funktion von UCP-1 (Thermogenin) im braunen Fettgewebe?",
          options: [
            "Es speichert Triglyzeride in großen Lipidtröpfchen.",
            "Es entkoppelt die mitochondriale Atmungskette, sodass Energie als Wärme freigesetzt wird.",
            "Es stimuliert Osteoblasten zur Knochenbildung.",
            "Es hemmt die Lipolyse bei Kälte.",
            "Es aktiviert Osteoklasten über das RANKL-System.",
          ],
          correctIndex: 1,
          explanation:
            "UCP-1 (Uncoupling Protein 1 / Thermogenin) ist ein Kanalprotein in der inneren Mitochondrienmembran des braunen Fettgewebes. Es ermöglicht den Rückfluss von Protonen (H⁺) in die Mitochondrienmatrix, ohne ATP zu synthetisieren — die Energie wird stattdessen als Wärme freigesetzt (Thermogenese). Dies ist besonders bei Neugeborenen und Winterschläfern wichtig.",
          hints: [
            "'Entkoppeln' bedeutet: Was wird von was getrennt?",
            "Braunes Fettgewebe erzeugt Wärme — wie kann ein Protein das bewerkstelligen?",
          ],
          difficulty: 3,
          tags: ["ucp-1", "braunes fettgewebe", "thermogenese"],
        },
        {
          question: "Vitamin C ist für die Kollagensynthese notwendig, weil es...",
          options: [
            "...die Glykosylierung von Prolin katalysiert.",
            "...für die Hydroxylierung von Prolin und Lysin in der Prokollagen-Tripelhelix benötigt wird.",
            "...Osteoklasten hemmt und damit Knochenstabilität fördert.",
            "...die Quervernetzung (Crosslinking) von Kollagenfibrillen extrazellulär ermöglicht.",
            "...als Cofaktor bei der Transkription des Kollagen-Gens dient.",
          ],
          correctIndex: 1,
          explanation:
            "Vitamin C (Ascorbinsäure) ist Cofaktor der Prolyl- und Lysylhydroxylase, die Prolin und Lysin in der Prokollagenkette hydroxylieren. Diese Hydroxylierungen sind essentiell für die Stabilität der Tripelhelix. Ohne Vitamin C entstehen instabile Kollagenfibrillen — klinisch resultiert Skorbut mit Zahnfleischbluten, Wundheilungsstörungen und brüchigen Gefäßen.",
          hints: [
            "Skorbut war eine Mangelkrankheit der Seefahrer — was fehlte ihnen, und was brach zusammen?",
            "Prolylhydroxylase braucht Vitamin C als Cofaktor — welcher Schritt der Kollagensynthese wird dadurch ermöglicht?",
          ],
          difficulty: 2,
          tags: ["vitamin c", "kollagensynthese", "hydroxylierung"],
        },
        {
          question: "Warum heilt Knorpel nach Verletzungen so schlecht?",
          options: [
            "Chondrozyten sind postmitotisch und können sich nicht teilen.",
            "Knorpel enthält keine Grundsubstanz.",
            "Knorpel ist avaskulär — ohne Blutgefäße können Reparaturzellen und Nährstoffe schlecht einwandern.",
            "Knorpel besitzt zu viele Osteoklasten, die neu gebildetes Gewebe sofort abbauen.",
            "Knorpel wird durch Immunzellen aktiv abgebaut.",
          ],
          correctIndex: 2,
          explanation:
            "Knorpel ist avaskulär (keine Blutgefäße) und aneural. Reparaturzellen (Fibroblasten, Stammzellen) und Nährstoffe können nicht über den Blutweg einwandern. Chondrozyten teilen sich zwar prinzipiell, aber langsam. Daher ist die Regenerationskapazität sehr gering, und Knorpelschäden (z. B. Gelenkknorpel bei Arthrose) heilen kaum spontan.",
          hints: [
            "Was ist die Voraussetzung für jeden Heilungsprozess — was muss zuerst an den Schadensort gelangen?",
            "Knorpel wird durch Diffusion ernährt — was bedeutet das für die Zufuhr von Reparaturzellen?",
          ],
          difficulty: 2,
          tags: ["knorpel", "avaskularität", "heilung"],
        },
        {
          question:
            "Welche der folgenden Aussagen über Binde- und Stützgewebe sind richtig?\n\n1. Kollagen Typ I ist der häufigste Kollagentyp und kommt in Knochen und Sehnen vor\n2. Osteoklasten stammen aus der mesenchymalen Zelllinie und bauen Knochenmatrix auf\n3. Vitamin C ist essentiell für die Hydroxylierung von Prolin und Lysin bei der Kollagensynthese\n4. Knorpel ist avaskulär, was seine schlechte Regeneration erklärt\n5. Osteoblasten bauen Knochen auf und stammen aus mesenchymalen Stammzellen",
          options: [
            "Nur 1, 3 und 5",
            "Nur 1, 2 und 4",
            "Nur 2, 3 und 4",
            "Nur 1, 3, 4 und 5",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 3,
          explanation:
            "Aussagen 1, 3, 4 und 5 sind korrekt. Aussage 2 ist falsch — Osteoklasten stammen aus der hämatopoetischen Zelllinie (Monozyten/Makrophagen-Vorläufer) und bauen Knochen ab (nicht auf). Osteoblasten (mesenchymal) bauen Knochen auf.",
          difficulty: 2,
          tags: ["typ-k", "bindegewebe", "knochen", "kollagen", "osteoklasten"],
        },
      ],
    },
    {
      id: "bio-2-03",
      title: "Muskelgewebe — Vom Sarkomer zur Kontraktion",
      imageUrl: "/images/wiki-sarcomere-de.svg",
      imageCaption:
        "Abb.: Sarkomer — Aufbau mit Aktin, Myosin, Z-Scheibe und M-Linie (Wikimedia Commons, CC BY-SA 3.0)",
      diagram: "sarcomere",
      stichworte: [
        "Glatte Muskulatur",
        "Skelettmuskulatur",
        "Herzmuskulatur",
        "Sarkomer",
        "Gleitfilamenttheorie",
        "Aktin",
        "Myosin",
        "Querstreifung",
      ],
      content: `## Grundprinzip: Die drei Muskeltypen

{{IMAGE}}

**Um die folgenden Abschnitte einzuordnen:** Zuerst der Überblick — welche Muskeltypen gibt es und wie unterscheiden sie sich?

| Merkmal | Skelettmuskel | Herzmuskel | Glatte Muskulatur |
|---|---|---|---|
| Streifung | Quergestreift | Quergestreift | Keine Sarkomere |
| Steuerung | **Willkürlich** | Unwillkürlich | Unwillkürlich |
| Kerne | Mehrkernig (peripher) | **1-2 (zentral)** | Einkernig (zentral) |
| Kopplung | NMJ (neuromuskuläre Junktion, ACh, Nikotin-R.) | **Gap Junctions** (Glanzstreifen) | Gap Junctions |
| Ca2+-Schalter | **Troponin C** | **Troponin C** | **Calmodulin -> MLCK** |
| Tetanus (Dauerkontraktion) | Möglich | **Unmöglich** (lange Refraktärzeit (Unerregbarkeitsphase)) | Tonisch möglich |
| Biomarker | CK-MM | **Troponin I/T**, CK-MB | — |

> **Merke:** Herzmuskel = quergestreift (wie Skelett) + einkernig + Gap Junctions + kein Tetanus. Glatte Muskulatur = kein Troponin -> Calmodulin stattdessen.

---

{{DIAGRAM}}

## Sarkomerstruktur: Grundprinzip der Querstreifung

**Aufbau (von Z zu Z):**
- **I-Bande** (hell): Nur Aktin-Dünnfilamente -> **wird bei Kontraktion kürzer**
- **A-Bande** (dunkel): Myosin-Dickfilamente + überlappende Aktinfilamente -> **bleibt konstant** (Myosinlänge ändert sich nicht!)
- **H-Zone** (in der Mitte der A-Bande): Nur Myosin, kein Aktin -> **verschwindet bei maximaler Kontraktion**
- **M-Linie**: Verankert Myosinfilamente in der Mitte
- **Z-Scheiben** rücken zusammen -> Sarkomer wird kürzer

**Strukturproteine:**
- **Titin**: "Molekulare Feder" von Z-Scheibe zu M-Linie (via Myosin) -> Ruhespannung + Schutz vor Überdehnung
- **Nebulin**: Parallel zu Aktin, legt Filamentlänge fest

> **Merke:** Bei Kontraktion: **I-Bande kürzer, H-Zone kürzer, A-Bande = konstant**. Filamente gleiten, nicht schrumpfen!

---

## Troponin-Tropomyosin-Schalter: Wie Ca2+ Kontraktion auslöst

**Ruhezustand:** Tropomyosin liegt in der Furche des Aktinstrangs und **blockiert** die Myosin-Bindungsstellen.

**Aktivierung — Schritt für Schritt:**
1. Aktionspotential erreicht das T-Tubulus-System
2. Spannungsgesteuerte Rezeptoren (DHPR (Dihydropyridin-Rezeptor)) aktivieren **Ryanodin-Rezeptoren (RyR1)** (Ca²⁺-Freisetzungskanäle) im sarkoplasmatischen Retikulum (SR (intrazellulärer Ca²⁺-Speicher))
3. **Ca2+ strömt aus SR** ins Zytosol (0,1 uM -> ~10 uM)
4. Ca2+ bindet **Troponin C** -> Konformationsänderung des Troponin-Komplexes
5. **Tropomyosin verschiebt sich** -> Myosin-Bindungsstellen auf Aktin freigegeben
6. **Kreuzbrückenbildung**: Myosinkopf bindet Aktin -> Kraftschlag (Power Stroke)

**Kreuzbrückenzyklus — ATP-Rolle:**
- Kraftschlag: ADP + Pi werden freigesetzt (gespeicherte Energie -> mechanische Arbeit)
- **ATP bindet Myosinkopf -> Lösen von Aktin** (Rigor mortis: kein ATP -> Myosin bleibt haften!)
- ATP-Hydrolyse -> Myosinkopf wiederaufgespannt -> neuer Zyklus

**Entspannung:** SERCA (SR-Ca2+-ATPase) pumpt Ca2+ zurück ins SR -> Troponin/Tropomyosin blockiert wieder.

> **Merke:** Ca2+ -> Troponin C -> Tropomyosin weg -> Myosin bindet Aktin -> Kraftschlag. **ATP löst Myosin** (nicht für den Kraftschlag selbst!). Kein ATP = Rigor mortis.

---

## Motorische Einheit und Kraftregulation

**Kraftregulation durch zwei Mechanismen:**
1. **Rekrutierung** (Spatial Summation): Mehr motorische Einheiten aktivieren -> mehr Kraft
2. **Frequenzerhöhung** (Temporal Summation): Schnellere AP-Folge -> Summation -> Tetanus

**Einheitsgröße und Funktion:**
- Klein (M. interossei, Augenmuskel: ~10 Fasern) -> feine Kraftdosierung (Schreiben, Blickbewegungen)
- Groß (M. gastrocnemius: bis 2000 Fasern) -> grobe Kraft

**Glatte Muskulatur — anderer Ca2+-Schalter:**
Kein Troponin! Ca2+ bindet **Calmodulin** -> aktiviert **MLCK** (Myosin-Leichtketten-Kinase) -> phosphoryliert Myosin -> Kontraktion. Gesteuert durch ANS, Hormone, Dehnung. Glatte Muskulatur ist spezialisiert auf **langsame, ausdauernde Kontraktionen** (Dauertonus): Sie ist **ermüdungsresistent** und hält Spannung über Stunden (z.B. Gefäßtonus, Sphinkteren, Darmmotilität) — möglich durch den sog. **Latch-Zustand** (dephosphoryliertes Myosin bleibt bei niedrigem ATP-Verbrauch an Aktin gebunden).`,
      lernziele: [
        "Sarkomerstruktur (Z-Scheibe, A-Bande, I-Bande, H-Zone) und Veränderungen bei Kontraktion beschreiben",
        "Gleitfilamenttheorie mit Rolle von Ca²⁺, Troponin und Tropomyosin erklären",
        "Die drei Muskeltypen strukturell und funktionell vergleichen",
      ],
      sections: [],

      merksätze: [
        "Sarkomer: Z-Z-Grenzen; bei Kontraktion kürzer werden I-Bande und H-Zone; A-Bande bleibt konstant.",
        "Ca²⁺ → Troponin C → Tropomyosin weg → Myosin bindet Aktin → Kraftschlag nach ATP-Hydrolyse.",
        "Herzmuskel: quergestreift, einkernig, Gap Junctions in Glanzstreifen, kein Tetanus möglich.",
      ],
      altfrage: {
        text: "Warum kann der Herzmuskel im Gegensatz zur Skelettmuskulatur keinen Tetanus entwickeln?",
        options: [
          {
            id: "a",
            text: "Weil der Herzmuskel keine Sarkomere besitzt.",
          },
          {
            id: "b",
            text: "Weil die absolute Refraktärzeit des Herzmuskels fast so lang wie die Kontraktion ist — ein neues AP kann erst nach Erschlaffung ausgelöst werden.",
          },
          {
            id: "c",
            text: "Weil der Herzmuskel glatte Muskulatur ist und nicht willkürlich stimuliert werden kann.",
          },
          {
            id: "d",
            text: "Weil Gap Junctions in Glanzstreifen die Erregungsausbreitung verlangsamen.",
          },
          {
            id: "e",
            text: "Weil der Herzmuskel kein Troponin-C enthält und daher nicht auf Ca²⁺ reagiert.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Das Herzmyokard hat eine sehr lange absolute Refraktärzeit (ca. 200–300 ms), die fast so lang ist wie die mechanische Kontraktion. Dadurch kann kein neues Aktionspotential ausgelöst werden, bevor der Herzmuskel erschlafft ist — Tetanus wäre für die Pumpfunktion fatal.",
      },
      klinischerBezug:
        "Kardiales Troponin I und T (herzspezifische Isoformen) werden bei Herzinfarkt (Myokardinfarkt) aus geschädigten Kardiomyozyten freigesetzt und sind die sensitivsten und spezifischsten Marker für myokardialen Schaden. Erhöhte Troponin-Spiegel sind innerhalb von 3–6 Stunden nach Infarkt nachweisbar.",
      selfTest: [
        {
          question: "Welche Banden des Sarkomers werden bei Muskelkontraktion kürzer?",
          options: [
            "A-Bande und I-Bande",
            "Nur die A-Bande",
            "I-Bande und H-Zone",
            "H-Zone und A-Bande",
            "Nur die Z-Scheiben-Abstände bleiben gleich",
          ],
          correctIndex: 2,
          explanation:
            "Bei der Kontraktion gleiten Aktin- und Myosinfilamente aneinander vorbei, ohne sich selbst zu verkürzen. Die I-Bande (nur Aktin) wird kürzer, weil Aktin tiefer in die A-Bande rutscht. Die H-Zone (nur Myosin) wird kürzer oder verschwindet, weil Aktin nun bis in die H-Zone reicht. Die A-Bande (Myosinlänge) bleibt konstant.",
          hints: [
            "Die A-Bande wird durch die Myosinfilamente definiert — verändert sich die Länge der Myosinfilamente?",
            "I-Bande = nur Aktin. Was passiert mit der I-Bande, wenn Aktin in Richtung Mitte gezogen wird?",
          ],
          difficulty: 2,
          tags: ["sarkomer", "a-bande", "i-bande"],
        },
        {
          question: "Welcher Schritt der Kreuzbrücken-Kontraktion erfordert ATP?",
          options: [
            "Bindung des Myosinkopfes an Aktin",
            "Der Kraftschlag (Power Stroke) selbst",
            "Die Freisetzung des Myosinkopfes von Aktin nach dem Kraftschlag",
            "Calciumfreisetzung aus dem sarkoplasmatischen Retikulum",
            "Die Bindung von Ca²⁺ an Troponin C",
          ],
          correctIndex: 2,
          explanation:
            "ATP bindet an den Myosinkopf, nachdem der Kraftschlag vollzogen wurde — dadurch löst sich der Kopf vom Aktin (Loslassen). ATP wird dann durch ATPase zu ADP + Pi hydrolysiert, was den Myosinkopf in den gespannten Zustand zurückversetzt (Wiederaufspannen). Ohne ATP (z. B. nach dem Tod) bleibt Myosin fest an Aktin gebunden → Totenstarre (Rigor mortis).",
          hints: [
            "Was passiert bei Rigor mortis — was fehlt nach dem Tod, und warum verkrampfen die Muskeln?",
            "ATP ist nicht für den Kraftschlag nötig, sondern für das ... was danach kommt.",
          ],
          difficulty: 3,
          tags: ["kreuzbrückenzyklus", "atp", "myosin"],
        },
        {
          question: "Was unterscheidet Herzmuskulatur von Skelettmuskulatur?",
          options: [
            "Herzmuskulatur ist glatt (keine Querstreifung) und unwillkürlich.",
            "Herzmuskulatur ist quergestreift, einkernig, und Zellen sind über Gap Junctions in Glanzstreifen verbunden.",
            "Herzmuskulatur verwendet Myosin, aber kein Aktin.",
            "Herzmuskulatur wird durch Troponin nicht reguliert.",
            "Herzmuskulatur kann tetanisch kontrahieren, Skelettmuskulatur nicht.",
          ],
          correctIndex: 1,
          explanation:
            "Herzmuskulatur ist quergestreift (wie Skelettmuskel) aber einkernig (im Gegensatz zu mehrkernigen Skelettmuskelfasern). Kardiomyozyten sind über Glanzstreifen (Intercalated Discs) mit Gap Junctions verbunden, die elektrische Kopplung ermöglichen — das Herz kontrahiert als funktionelles Synzytium. Tetanus ist durch die lange Refraktärzeit unmöglich.",
          hints: [
            "Was ist das besondere Merkmal der Glanzstreifen im Herzmuskel?",
            "Herzmuskel ist quergestreift — aber was unterscheidet ihn vom Skelettmuskel in Bezug auf Kerne und Kopplung?",
          ],
          difficulty: 2,
          tags: ["herzmuskel", "skelettmuskel", "glanzstreifen"],
        },
        {
          question: "Warum tritt Rigor mortis (Totenstarre) nach dem Tod ein?",
          options: [
            "Troponin C bindet kein Calcium mehr, sodass Kontraktion unmöglich wird.",
            "ATP fehlt, sodass Myosinköpfe nicht von Aktin gelöst werden können.",
            "Das sarkoplasmatische Retikulum setzt unbegrenzt Calcium frei.",
            "Myosin wird nach dem Tod enzymatisch abgebaut und kann nicht kontrahieren.",
            "Totenstarre entsteht durch Oxidation der Z-Scheibe.",
          ],
          correctIndex: 1,
          explanation:
            "Nach dem Tod fehlt ATP-Produktion (keine Mitochondrienfunktion). ATP wird für das Lösen des Myosinkopfes von Aktin benötigt. Ohne ATP bleiben alle Myosinköpfe dauerhaft an Aktin gebunden → Rigor mortis. Gleichzeitig steigt die zytosolische Ca²⁺-Konzentration an (SR-Pumpen fallen aus), was die Kontraktion begünstigt. Nach 24–48 h löst sich der Rigor durch Proteolyse.",
          hints: [
            "Denk an den Kreuzbrückenzyklus: Welcher Schritt braucht ATP — Binden oder Lösen?",
            "Nach dem Tod fällt der Energiestoffwechsel aus. Was geschieht mit aktiven Querbrücken ohne ATP?",
          ],
          difficulty: 2,
          tags: ["rigor mortis", "atp", "myosin aktin"],
        },
        {
          question: "Warum werden bei Herzinfarkt Troponin-Werte im Blut gemessen?",
          options: [
            "Troponin reguliert den Herzrhythmus und steigt bei Arrhythmien an.",
            "Herzspezifische Isoformen von Troponin I und T werden aus geschädigten Kardiomyozyten freigesetzt.",
            "Troponin ist ein Hormon, das bei Ischämie vermehrt sezerniert wird.",
            "Troponin stimuliert Osteoklasten, was zu Knochenschmerzen beim Infarkt führt.",
            "Troponin-Werte steigen bei allen Muskelschäden gleichmäßig an.",
          ],
          correctIndex: 1,
          explanation:
            "Troponin I und T haben herzspezifische Isoformen (cTnI, cTnT), die sich strukturell von skelettmuskulären Isoformen unterscheiden. Bei Myokardinfarkt werden Kardiomyozyten geschädigt und geben cTnI/cTnT ins Blut ab. Diese steigen 3–6 h nach Infarkt an und bleiben bis zu 14 Tage erhöht — sie sind hochsensitiv und hochspezifisch für myokardialen Schaden.",
          hints: [
            "Troponin ist intrazellulär in Myozyten — warum wäre es im Blut erhöht?",
            "Was passiert mit dem Zellinhalt, wenn Kardiomyozyten absterben (nekrotisch werden)?",
          ],
          difficulty: 1,
          tags: ["troponin", "herzinfarkt", "kardiomyozyten"],
        },
        {
          question:
            "Welche der folgenden Aussagen über Muskelgewebe sind richtig?\n\n1. Bei der Kontraktion werden I-Bande und H-Zone kürzer, die A-Bande bleibt konstant\n2. Herzmuskelzellen sind über Gap Junctions in Glanzstreifen elektrisch gekoppelt\n3. Skelettmuskulatur kann tetanisch kontrahieren, Herzmuskulatur nicht\n4. Ca²⁺ bindet an Myosin und löst dadurch den Kraftschlag aus\n5. ATP wird für das Lösen des Myosinkopfes von Aktin benötigt",
          options: [
            "Nur 1, 2 und 5",
            "Nur 1, 2, 3 und 5",
            "Nur 2, 3 und 4",
            "Nur 1, 3 und 4",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 1,
          explanation:
            "Aussagen 1, 2, 3 und 5 sind korrekt. Aussage 4 ist falsch — Ca²⁺ bindet an Troponin C (nicht Myosin), wodurch Tropomyosin die Bindungsstellen auf Aktin freigibt und der Myosinkopf an Aktin binden kann. Der Herzmuskel kann keinen Tetanus entwickeln, weil die absolute Refraktärzeit fast so lang ist wie die Kontraktion.",
          difficulty: 3,
          tags: ["typ-k", "muskelgewebe", "sarkomer", "herzmuskel", "kontraktion"],
        },
        {
          question: "Welche der folgenden Aussagen über Muskelgewebe ist FALSCH?",
          options: [
            "Skelettmuskulatur kann tetanisch kontrahieren, da die Refraktärzeit kürzer ist als die Kontraktionsdauer",
            "Die A-Bande im Sarkomer bleibt bei der Kontraktion konstant, während I-Bande und H-Zone kürzer werden",
            "Herzmuskelzellen sind über Gap Junctions in den Glanzstreifen (Disci intercalares) elektrisch gekoppelt",
            "Calcium bindet bei der Kontraktion direkt an den Myosinkopf und löst dadurch den Kraftschlag aus",
            "ATP wird benötigt, um den Myosinkopf nach dem Kraftschlag von Aktin zu lösen (Totenstarre = ATP-Mangel)",
          ],
          correctIndex: 3,
          explanation:
            "Aussage D ist falsch. Calcium bindet nicht an Myosin, sondern an Troponin C. Dadurch verschiebt sich Tropomyosin und gibt die Bindungsstellen auf Aktin frei, sodass der Myosinkopf an Aktin andocken kann. Der Kraftschlag wird durch die Konformationsänderung des Myosinkopfes ausgelöst (ADP + Pi-Freisetzung). Dies ist ein häufiger MedAT-Fehler — Ca2+ steuert die Kontraktion über Troponin, nicht über Myosin. Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "muskelgewebe", "kontraktion", "troponin"],
        },
      ],
    },
    {
      id: "bio-2-04",
      title: "Nervengewebe — Neuronen, Gliazellen und Myelinisierung",
      imageUrl: "/images/wiki-neuron-de.svg",
      imageCaption:
        "Abb.: Aufbau eines Neurons — Dendrit, Soma, Axon, Myelinscheide, Synapse (Wikimedia Commons, LadyofHats, Public Domain)",
      diagram: "neuron-structure",
      stichworte: [
        "Neuronen",
        "Gliazellen",
        "Schwann-Zellen",
        "Oligodendrozyten",
        "Myelinscheide",
        "Axon",
        "Dendrit",
        "Ranvier-Schnürringe",
      ],
      content: `Das Nervensystem besteht aus zwei grundlegenden Zelltypen: **Neuronen** übertragen elektrochemische Signale; **Gliazellen** übernehmen Stütz-, Schutz- und Versorgungsfunktionen. Beide sind für die normale Nervenfunktion unentbehrlich.

{{IMAGE}}

## Aufbau eines Neurons

Ein Neuron gliedert sich in vier funktionelle Kompartimente:

- **Dendriten**: Stark verzweigte Fortsätze, die afferente Signale von anderen Neuronen empfangen (Input). Die dendritische Dornfortsätze (Spines) sind die anatomischen Orte der exzitatorischen Synapsen.
- **Soma (Perikaryon)**: Enthält Zellkern, Ribosomen und Organellen. Hier findet die Proteinsynthese statt — Axone selbst besitzen keine Ribosomen und sind auf axonalen Transport angewiesen.
- **Axon**: Langer Einzelfortsatz, der das Aktionspotential vom Soma wegleitet (Output). Entspringt am **Axonhügel**, dem Integrationspunkt für alle afferenten Signale.
- **Axonhügel (Axon initial segment)**: Bereich mit der höchsten Dichte spannungsgesteuerter Na⁺-Kanäle. Hier entscheidet sich, ob ein Summationspotential die Schwelle (≈ −55 mV) überschreitet und ein Aktionspotential auslöst.

Am präsynaptischen Endknöpfchen werden Neurotransmitter (z. B. Glutamat, GABA, Acetylcholin) in synaptische Vesikel verpackt und durch Exozytose in den synaptischen Spalt freigesetzt.

> **Merke:** Dendriten = Input. Axon = Output. Axonhügel = Entscheidungsstelle (Schwelle ≈ −55 mV). Soma = Proteinsynthese.

---

{{DIAGRAM}}

## Myelinisierung und saltatorische Erregungsleitung

Die **Myelinscheide** ist eine mehrlagige Lipid-Protein-Hülle, die um Axone gewickelt ist und als elektrische Isolierung dient. Zwischen den Myelin-Internodien liegen die **Ranvier-Schnürringe** — kurze unmyelinisierte Stellen mit hoher Na⁺-Kanaldichte.

**Saltatorische (springende) Erregungsleitung:** Das Aktionspotential wird nicht kontinuierlich entlang des gesamten Axons depolarisiert, sondern springt von Schnürring zu Schnürring. Vorteile:
1. **Geschwindigkeit**: Myelinisiert 70–120 m/s vs. unmyelinisiert 0,5–2 m/s
2. **Energieeffizienz**: Na⁺/K⁺-ATPase muss nur an den Schnürringen arbeiten, nicht über die gesamte Axonlänge

### Myelinbildende Zellen: PNS vs. ZNS

| Merkmal | Schwann-Zelle (PNS) | Oligodendrozyt (ZNS) |
|---|---|---|
| Lokalisation | Peripheres Nervensystem | Zentrales Nervensystem |
| Segmente pro Zelle | **1** Myelinsegment eines Axons | Bis zu **50** Segmente verschiedener Axone |
| Herkunft | Neuralleiste | Neuroektoderm |
| Regeneration | Gut (Büngner-Bänder als Leitstruktur) | Sehr eingeschränkt |

**Klinisch:** Bei **Multipler Sklerose (MS)** greift das Immunsystem Oligodendrozyten und Myelinscheiden im ZNS an. Die Demyelinisierung verlangsamt oder blockiert die Signalleitung → wechselnde neurologische Symptome. Da ZNS-Regeneration minimal ist, akkumulieren Defizite.

> **Merke:** Schwann-Zelle (PNS) = 1 Segment, fördert Regeneration. Oligodendrozyt (ZNS) = bis 50 Segmente, kaum Regeneration. Saltatorisch = schnell + energieeffizient.

---

## Gliazellen — vier Typen mit spezifischen Aufgaben

Gliazellen überwiegen numerisch: ca. 10:1 gegenüber Neuronen im ZNS. Sie teilen sich und können bei Schädigung proliferieren (Neuronen i. d. R. nicht).

| Gliazelle | Lokalisation | Hauptaufgaben |
|---|---|---|
| **Astrozyten** | ZNS | Blut-Hirn-Schranke (induzieren Tight Junctions im Endothel), K⁺-Pufferung, Glutamat-Reuptake, metabolische Versorgung |
| **Oligodendrozyten** | ZNS | Myelinisierung von bis zu 50 Axonsegmenten |
| **Mikroglia** | ZNS | Phagozyten/Makrophagen des Gehirns; einzige Gliazellen **mesodermalen** Ursprungs (alle anderen: Neuroektoderm) |
| **Ependymzellen** | ZNS (Ventrikelwand) | Produktion von Liquor cerebrospinalis (ca. 500 ml/Tag); Flimmerhärchen treiben Liquorzirkulation an |
| **Schwann-Zellen** | PNS | Myelinisierung + Regenerationsunterstützung |

**Wichtige Präzisierung zur Blut-Hirn-Schranke:** Astrozyten **induzieren** die Tight Junctions zwischen den Endothelzellen der Hirngefäße, bilden sie aber nicht selbst. Die physische Barriere sitzt im Endothel. Astrozytenendfüße umhüllen die Blutgefäße und regulieren den molekularen Transport.

> **Merke:** Mikroglia = mesodermale Immunzellen des Gehirns (einzige nicht-neuroektodermale Gliazelle). Astrozyten induzieren die BHS, bauen sie aber nicht selbst auf.`,
      lernziele: [
        "Aufbau des Neurons (Soma, Axon, Dendriten, Axonhügel) und seine Funktion erklären",
        "Gliazellen des ZNS und PNS benennen und ihre Aufgaben (besonders Myelinisierung) beschreiben",
        "Saltatorische Erregungsleitung erklären und ihren Vorteil gegenüber kontinuierlicher Leitung benennen",
      ],
      sections: [],

      merksätze: [
        "Oligodendrozyten (ZNS) vs. Schwann-Zellen (PNS): Beide myelinisieren; Schwann-Zellen fördern PNS-Regeneration.",
        "Saltatorische Leitung: Aktionspotential springt von Ranvier-Schnürring zu Schnürring — 100× schneller als kontinuierlich.",
        "Astrozyten: Blut-Hirn-Schranke, K⁺-Puffer, Glutamat-Reuptake; Mikroglia = Makrophagen des ZNS.",
      ],
      altfrage: {
        text: "Welche Aussage über Schwann-Zellen und Oligodendrozyten ist korrekt?",
        options: [
          {
            id: "a",
            text: "Schwann-Zellen myelinisieren bis zu 50 Axonsegmente verschiedener Axone gleichzeitig.",
          },
          {
            id: "b",
            text: "Oligodendrozyten kommen ausschließlich im peripheren Nervensystem (PNS) vor.",
          },
          {
            id: "c",
            text: "Eine Schwann-Zelle myelinisiert genau ein Axonsegment eines einzigen Axons, während ein Oligodendrozyt bis zu 50 Axonsegmente verschiedener Axone gleichzeitig myelinisieren kann.",
          },
          {
            id: "d",
            text: "Schwann-Zellen und Oligodendrozyten myelinisieren jeweils identisch viele Axonsegmente.",
          },
          {
            id: "e",
            text: "Oligodendrozyten myelinisieren genau ein Axonsegment und kommen nur im PNS vor.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "Schwann-Zellen (PNS) myelinisieren genau ein Internodium (Segment zwischen zwei Ranvier-Schnürringen) eines einzigen Axons. Oligodendrozyten (ZNS) können hingegen bis zu 50 Axonsegmente verschiedener Axone gleichzeitig umhüllen. Bei MS werden Oligodendrozyten zerstört — ZNS-Regeneration ist limitiert, da Schwann-Zellen dort nicht vorkommen.",
      },
      klinischerBezug:
        "Bei Multipler Sklerose (MS) zerstören autoreaktive T-Zellen die Oligodendrozyten und Myelinscheiden im ZNS. Die resultierende Demyelinisierung verlangsamt oder blockiert die Impulsleitung und führt zu wechselnden neurologischen Ausfällen (Sehstörungen, Paresen, Sensibilitätsstörungen). Da ZNS-Regeneration limitiert ist, kommt es mit der Zeit zu dauerhaften Defiziten.",
      selfTest: [
        {
          question: "An welcher Stelle des Neurons wird ein Aktionspotential initiiert?",
          options: [
            "Am Dendritenstamm",
            "Im Soma (Zellkörper)",
            "Am Axonhügel (Axon Initial Segment)",
            "Am präsynaptischen Endknöpfchen",
            "An den Ranvier-Schnürringen",
          ],
          correctIndex: 2,
          explanation:
            "Der Axonhügel (Axon Initial Segment) besitzt die höchste Dichte an spannungsgesteuerten Na⁺-Kanälen und die niedrigste Reizschwelle — hier werden eintreffende Potentiale aus Dendriten und Soma summiert. Wenn der Schwellenwert (ca. -55 mV) überschritten wird, entsteht das Aktionspotential und breitet sich das Axon entlang aus.",
          hints: [
            "Welcher Teil des Neurons ist die 'Entscheidungsstelle', ob ein Aktionspotential ausgelöst wird?",
            "Am Axon beginnt die Weiterleitung — genau an seiner Basis gibt es eine spezialisierte Zone mit vielen Na⁺-Kanälen.",
          ],
          difficulty: 2,
          tags: ["axonhügel", "aktionspotential", "na-kanäle"],
        },
        {
          question: "Welche Gliazellen bilden die Myelinscheide im zentralen Nervensystem (ZNS)?",
          options: [
            "Astrozyten",
            "Schwann-Zellen",
            "Mikroglia",
            "Oligodendrozyten",
            "Ependymzellen",
          ],
          correctIndex: 3,
          explanation:
            "Im ZNS myelinisieren Oligodendrozyten die Axone. Ein einziger Oligodendrozyt kann bis zu 50 verschiedene Axonsegmente myelinisieren. Schwann-Zellen myelinisieren im peripheren Nervensystem (PNS). Mikroglia sind Immunzellen, Astrozyten stützen und bilden die BHS, Ependymzellen kleiden Hirnventrikel aus.",
          hints: [
            "Es gibt eine einfache Eselsbrücke: ZNS → die Zellen haben 'Dendro-' oder 'Oligo-' im Namen.",
            "Schwann-Zellen vs. Oligodendrozyten: Welche sind im peripheren, welche im zentralen NS?",
          ],
          difficulty: 1,
          tags: ["oligodendrozyten", "myelinscheide", "zns"],
        },
        {
          question: "Was ist der Hauptvorteil der saltatorischen Erregungsleitung?",
          options: [
            "Sie erhöht die Kapazität der Axonmembran.",
            "Sie ermöglicht bidirektionale Signalweiterleitung.",
            "Sie erhöht die Leitungsgeschwindigkeit und reduziert den Energiebedarf.",
            "Sie verhindert, dass das Aktionspotential sich zurückausbreitet.",
            "Sie ermöglicht chemische Signalweiterleitung ohne Synapsen.",
          ],
          correctIndex: 2,
          explanation:
            "Saltatorische Leitung (Springen von Schnürring zu Schnürring) ist erheblich schneller als kontinuierliche Leitung (bis 120 m/s vs. 0,5–2 m/s). Gleichzeitig ist sie energieeffizienter, da die Na⁺/K⁺-ATPase nur an den Ranvier-Schnürringen aktiv sein muss, um das Membranpotential wiederherzustellen — nicht entlang des gesamten Axons.",
          hints: [
            "Was bedeutet 'saltare' (lateinisch springen) für die Leitungsgeschwindigkeit?",
            "Wenn die ATPase nur an wenigen Stellen (Schnürringen) pumpen muss, was spart das?",
          ],
          difficulty: 1,
          tags: ["saltatorische leitung", "ranvier-schnürringe", "leitungsgeschwindigkeit"],
        },
        {
          question:
            "Bei Multipler Sklerose wird die Myelinscheide zerstört. Welche direkte Konsequenz hat das für die Erregungsleitung?",
          options: [
            "Neuronen können keine Aktionspotentiale mehr generieren.",
            "Die Erregungsleitung verlangsamt sich oder bricht ab, weil saltatorische Leitung nicht mehr möglich ist.",
            "Astrozyten übernehmen die Myelinisierung und kompensieren den Verlust.",
            "Die Synaptische Übertragung wird unterbrochen.",
            "Die Ranvier-Schnürringe verschwinden vollständig.",
          ],
          correctIndex: 1,
          explanation:
            "Ohne Myelinscheide kann das Aktionspotential nicht saltatorisch von Schnürring zu Schnürring springen. Stattdessen müsste es kontinuierlich geleitet werden — was extrem langsam ist. In vielen Fällen bricht die Leitung ganz ab (Leitungsblock), weil die Membrankapazität erhöht ist und die depolarisierende Strömung 'versickert' anstatt zum nächsten Schnürring zu springen. Das erklärt die neurologischen Defizite bei MS.",
          hints: [
            "Was ist die Funktion der Myelinscheide für die saltatorische Leitung? Was passiert, wenn diese fehlt?",
            "Denk an den elektrischen Widerstand: Ohne Myelin steigt die Kapazität der Membran — was geschieht mit dem Ionenstrom?",
          ],
          difficulty: 2,
          tags: ["multiple sklerose", "demyelinisierung", "erregungsleitung"],
        },
        {
          question: "Welche Funktion haben Astrozyten an der Blut-Hirn-Schranke?",
          options: [
            "Sie bilden die Tight Junctions direkt zwischen Blutgefäß-Endothelzellen.",
            "Sie myelinisieren die Axone nahe den Blutgefäßen.",
            "Sie induzieren mit ihren perivaskulären Endfüßen die BHS-Eigenschaften des Endothels.",
            "Sie phagozytieren Pathogene, die die BHS überwinden.",
            "Sie synthetisieren Myelin für die perivaskulären Nervenfasern.",
          ],
          correctIndex: 2,
          explanation:
            "Astrozyten umhüllen Hirnkapillaren mit perivaskulären Endfüßen und sezernieren Faktoren, die das Endothel zur Bildung dichter Tight Junctions induzieren. Ohne diese Induktion würden die Tight Junctions zwischen Endothelzellen nicht so dicht sein. Die Tight Junctions selbst befinden sich im Endothel, nicht in den Astrozyten — aber die Astrozyten sind entscheidend für ihre Ausbildung.",
          hints: [
            "Die BHS-Tight Junctions liegen im Endothel — welche Zellen 'flüstern' dem Endothel zu, diese zu bilden?",
            "Astrozyten haben spezialisierte Endfüße, die Blutgefäße umhüllen — was könnte das funktionell bedeuten?",
          ],
          difficulty: 3,
          tags: ["astrozyten", "blut-hirn-schranke", "tight junctions"],
        },
        {
          question:
            "Welche der folgenden Aussagen über Nervengewebe sind richtig?\n\n1. Oligodendrozyten myelinisieren Axone im ZNS, Schwann-Zellen im PNS\n2. Ein Oligodendrozyt kann bis zu 50 Axonsegmente verschiedener Axone myelinisieren\n3. Mikroglia sind die Makrophagen des ZNS und phagozytieren Pathogene\n4. Das Aktionspotential wird typischerweise am Dendritenstamm initiiert\n5. Bei Multipler Sklerose werden Schwann-Zellen im PNS zerstört",
          options: [
            "Nur 1, 2 und 3",
            "Nur 1 und 3",
            "Nur 2, 4 und 5",
            "Nur 1, 3 und 5",
            "Alle Aussagen sind richtig",
          ],
          correctIndex: 0,
          explanation:
            "Aussagen 1, 2 und 3 sind korrekt. Aussage 4 ist falsch — das Aktionspotential wird am Axonhügel (Axon Initial Segment) initiiert, nicht am Dendritenstamm. Aussage 5 ist falsch — bei Multipler Sklerose werden Oligodendrozyten im ZNS zerstört (nicht Schwann-Zellen im PNS).",
          difficulty: 2,
          tags: ["typ-k", "nervengewebe", "gliazellen", "myelinisierung", "multiple sklerose"],
        },
      ],
    },

    // === from kap3-anatomie-physiologie ===
    {
      id: "bio-3-01",
      title: "Nervensystem",
      imageUrl: "/images/wiki-nervous-system-de.svg",
      imageCaption:
        "Abb.: Querschnitt des Rückenmarks mit grauer und weißer Substanz (OpenStax, CC BY 4.0)",
      stichworte: [
        "ZNS",
        "PNS",
        "Sympathikus",
        "Parasympathikus",
        "Synapse",
        "Aktionspotential",
        "Neurotransmitter",
        "Reflexbogen",
      ],
      content: `## Nervensystem — Steuerung und Kommunikation

Ein Schlaganfall in der linken Großhirnhemisphäre kann Sprache und rechtsseitige Motorik gleichzeitig auslöschen — weil Gehirnareale hochspezialisiert und die Leitungsbahnen gekreuzt sind. Dieses Kapitel zeigt, wie das Nervensystem aufgebaut ist und warum solche Ausfälle lokalisierbar sind.

{{IMAGE}}

---

## Gliederung: ZNS und PNS

Das Nervensystem gliedert sich in zwei große Anteile:

- **ZNS (Zentralnervensystem):** Gehirn + Rückenmark — Verarbeitung und Integration
- **PNS (Peripheres Nervensystem):** Alle Nerven außerhalb des ZNS — Leitung zum und vom ZNS

Das PNS wird funktionell unterteilt:
- **Somatisches NS:** Willkürliche Motorik (Skelettmuskulatur) + bewusste Sensorik
- **Autonomes (vegetatives) NS:** Unwillkürliche Steuerung innerer Organe (Sympathikus, Parasympathikus, enterisches NS)

> **Merke:** ZNS = Gehirn + Rückenmark. PNS = somatisch (willkürlich) + autonom (unwillkürlich).

---

## Gehirn — Funktionelle Gliederung

| Struktur | Hauptfunktionen |
|---|---|
| **Großhirn (Cerebrum)** | Motorik, Sensorik, Sprache, Gedächtnis, Bewusstsein |
| **Kleinhirn (Cerebellum)** | Koordination, Gleichgewicht, Feinmotorik, motorisches Lernen |
| **Zwischenhirn (Diencephalon)** | **Thalamus** (sensorische Umschaltstation — außer Geruch!), **Hypothalamus** (Hormonsystem, Temperatur, Hunger, Durst, zirkadiane Rhythmik) |
| **Hirnstamm** (Mittelhirn, Pons, Medulla oblongata) | Vitalfunktionen (Atmung, Kreislauf, Schutzreflexe), Hirnnervenkerne, Formatio reticularis (Wachheit) |

Das **Großhirn** besitzt vier Lappen: Frontallappen (Motorik, Planung, Persönlichkeit), Parietallappen (Sensorik, räumliche Orientierung), Temporallappen (Hören, Sprachverständnis), Okzipitallappen (Sehen). Motorische und sensorische Bahnen kreuzen zur Gegenseite — eine Läsion links verursacht Ausfälle rechts.

> **Merke:** Thalamus = „Tor zum Bewusstsein" (alle Sinne außer Geruch). Hypothalamus = vegetative Schaltzentrale.

---

## Rückenmark — Graue und weiße Substanz

Im Querschnitt zeigt das Rückenmark eine charakteristische Schmetterlingsform:

- **Graue Substanz (innen):** Nervenzellkörper (Neurone). **Vorderhorn** = Motoneurone (Efferenz), **Hinterhorn** = sensorische Neurone (Afferenz), **Seitenhorn** (T1–L2) = vegetative Neurone (Sympathikus)
- **Weiße Substanz (außen):** Myelinisierte Axonbahnen (auf-/absteigende Leitungsbahnen). **Hinterstrang** = feine Berührung/Propriozeption, **Seitenstrang** = Pyramidenbahn (Motorik) + Tractus spinothalamicus (Schmerz/Temperatur)

> **Merke:** Vorderhorn = motorisch, Hinterhorn = sensorisch, Seitenhorn = vegetativ (nur T1–L2).

---

## Autonomes Nervensystem — Sympathikus vs. Parasympathikus

Beide Systeme innervieren dieselben Organe, wirken aber antagonistisch. Die Umschaltung erfolgt jeweils in einem Ganglion (Nervenzellknoten) — präganglionär immer mit **Acetylcholin (ACh)**, postganglionär unterschiedlich.

| Merkmal | Sympathikus | Parasympathikus |
|---|---|---|
| Funktion | **Fight or flight** (Leistung) | **Rest and digest** (Erholung) |
| Ursprung | Thorakolumbal (T1–L2) | Kraniosakral (Hirnnerven III, VII, IX, **X** + S2–S4) |
| Ganglien | Paravertebral (Grenzstrang), prävertebral | Organnah (in/an Organwand) |
| Postgangl. Transmitter | **Noradrenalin (NA)** | **Acetylcholin (ACh)** |
| Rezeptoren (Effektor) | α₁, α₂, β₁, β₂, β₃ | M₂, M₃ |

**Organwirkungen im Vergleich:**

| Organ | Sympathikus | Parasympathikus |
|---|---|---|
| Herz | Frequenz ↑, Kontraktilität ↑ (β₁) | Frequenz ↓ (M₂, N. vagus) |
| Bronchien | Dilatation (β₂) | Konstriktion (M₃) |
| Pupille | **Mydriasis** (weit, α₁) | **Miosis** (eng, M₃) |
| Magen-Darm | Peristaltik ↓, Sphinkter ↑ | Peristaltik ↑, Sekretion ↑ (M₃) |
| Blase | Sphinkter-Kontraktion (α₁) | Detrusor-Kontraktion → Miktion (M₃) |
| Gefäße | Vasokonstriktion (α₁) | — (kaum direkte Innervation) |

**Sonderfall Nebennierenmark:** Chromaffine Zellen werden direkt präganglionär innerviert (ACh, nikotinisch) und setzen **Adrenalin (80 %) und Noradrenalin (20 %)** ins Blut frei — hormonelle Verstärkung der Sympathikuswirkung.

> **Merke:** Sympathikus = Noradrenalin postganglionär. Parasympathikus = ACh prä- und postganglionär.

---

## Synapse — Signalübertragung zwischen Neuronen

An der chemischen Synapse wird das elektrische Signal in ein chemisches umgewandelt:

1. **Aktionspotential** erreicht das Axonterminal → spannungsgesteuerte **Ca²⁺-Kanäle** öffnen
2. Ca²⁺-Einstrom → **SNARE-Komplex** (Synaptobrevin + Syntaxin + SNAP-25) vermittelt Vesikelfusion
3. **Neurotransmitter** werden in den synaptischen Spalt (~20 nm) freigesetzt (Exozytose)
4. Bindung an **postsynaptische Rezeptoren** → Signalwirkung

**Rezeptortypen:**
- **Ionotrop** (ligandengesteuerter Ionenkanal): Schnell (ms). Beispiele: AMPA/NMDA (Glutamat), GABA_A, nikotinischer AChR
- **Metabotrop** (G-Protein-gekoppelt): Langsam (Sek.–Min.). Beispiele: Dopamin-R, Serotonin-R, muskarinischer AChR

**Postsynaptische Potentiale:**
- **EPSP** (exzitatorisch): Depolarisation — Glutamat (häufigster exzitatorischer NT im ZNS)
- **IPSP** (inhibitorisch): Hyperpolarisation — GABA (häufigster inhibitorischer NT im ZNS), Glycin (Rückenmark)

**Klinisch:** Botulinumtoxin spaltet SNARE → keine Transmitterfreisetzung → Muskelparalyse. Tetanustoxin hemmt GABA/Glycin-Freisetzung → Dauererregung → Krämpfe.

> **Merke:** Ca²⁺ → SNARE → Vesikelfusion → Transmitter. EPSP = Glutamat, IPSP = GABA.

---

## Aktionspotential — Signalweiterleitung am Axon

**Ruhepotential (~−70 mV):** Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein) + K⁺-Leckkanäle → Innenseite negativ.

**Ablauf des Aktionspotentials:**
1. Schwellenreiz (~−55 mV) → spannungsgesteuerte **Na⁺-Kanäle öffnen** → Na⁺ strömt ein → **Depolarisation** auf ~+40 mV
2. Na⁺-Kanäle **inaktivieren** (Inaktivierungstor) + **K⁺-Kanäle öffnen** (verzögert) → K⁺ strömt aus → **Repolarisation**
3. K⁺-Kanäle schließen verzögert → kurzzeitig unter −70 mV → **Hyperpolarisation**

**Alles-oder-Nichts-Prinzip:** Schwelle erreicht → volles AP; unterschwellig → kein AP.

**Refraktärzeiten:** Absolut (Na⁺-Kanäle inaktiviert, kein AP möglich) → verhindert Rückwärtsleitung. Relativ (überschwelliger Reiz nötig).

**Saltatorische Leitung:** An myelinisierten Axonen springt das AP von **Ranvier-Schnürring** zu Schnürring → ~120 m/s (vs. ~1 m/s unmyelinisiert).

> **Merke:** −70 mV → Schwelle −55 mV → Na⁺ rein (+40 mV) → K⁺ raus → Repolarisation. Alles-oder-Nichts.

{{DIAGRAM:action-potential}}

---

## Reflexbogen — Die 5 Glieder

Reflexe sind unwillkürliche, stereotype Antworten auf einen Reiz. Jeder Reflexbogen besteht aus fünf Gliedern:

1. **Rezeptor** — nimmt den Reiz auf (z. B. Muskelspindel, Nozizeptor)
2. **Afferente Nervenfaser** — leitet zum ZNS (sensorisch)
3. **Reflexzentrum** — Verarbeitung im Rückenmark (oder Hirnstamm)
4. **Efferente Nervenfaser** — leitet zum Effektor (motorisch)
5. **Effektor** — führt die Antwort aus (Muskel, Drüse)

**Eigenreflex (monosynaptisch):** Rezeptor und Effektor im selben Organ. **Beispiel Patellarsehnenreflex:** Muskelspindel (Dehnung) → Ia-Faser (~120 m/s) → **direkt** auf α-Motoneuron (1 Synapse, keine Interneurone) → M. quadriceps kontrahiert. Gleichzeitig: reziproke Hemmung des Antagonisten über Ia-Interneuron.

**Fremdreflex (polysynaptisch):** Rezeptor und Effektor in verschiedenen Organen, mehrere Interneurone. **Beispiel Fluchtreflex:** Nozizeptor → Aδ-Faser → Interneurone → Beuger aktiviert + Strecker gehemmt + gekreuzte Streckreaktion (kontralaterales Bein stützt).

| Merkmal | Eigenreflex | Fremdreflex |
|---|---|---|
| Synapsen | 1 (monosynaptisch) | Mehrere (polysynaptisch) |
| Latenz | Sehr kurz | Länger |
| Ermüdbarkeit | Keine | Ja (Habituation) |
| Beispiel | Patellarsehnenreflex | Fluchtreflex, Kornealreflex |

> **Merke:** 5 Glieder: Rezeptor → Afferenz → Zentrum → Efferenz → Effektor. Eigenreflex = 1 Synapse, keine Ermüdung.

---

## Hirnhäute und Liquor

Drei Hirnhäute (Meningen) schützen das ZNS (von außen nach innen):
- **Dura mater** (harte Hirnhaut): Derb, an Schädelknochen anliegend
- **Arachnoidea** (Spinnwebhaut): Zart, begrenzt den **Subarachnoidalraum** (enthält Liquor)
- **Pia mater** (weiche Hirnhaut): Liegt dem Gehirn direkt auf, gefäßführend

**Liquor cerebrospinalis:** Wird in den **Plexus choroidei** der Ventrikel gebildet (~500 ml/Tag, Gesamtvolumen ~150 ml). Funktion: mechanischer Schutz (Auftrieb), Nährstofftransport, Abfallentsorgung. Lumbalpunktion (zwischen L3/L4 oder L4/L5) zur Diagnostik möglich, da das Rückenmark auf Höhe L1/L2 endet (Conus medullaris).

> **Merke:** Liquor im Subarachnoidalraum (zwischen Arachnoidea und Pia). Lumbalpunktion ab L3/L4 gefahrlos.

---

## Dermatome — Segmentale Hautinnervation

Jedes Rückenmarkssegment versorgt über seinen Spinalnerv ein bestimmtes Hautareal — das **Dermatom**. Bei Rückenmarksverletzungen lässt sich anhand der Sensibilitätsgrenze das Läsionsniveau bestimmen.

**Klinisch wichtige Orientierungspunkte:**
- **C4:** Schulter
- **T4/T5:** Mamillenebene (Brustwarze)
- **T10:** Nabelhöhe
- **L1:** Leistenregion
- **S3–S5:** Perianalregion (Reithosenanästhesie bei Kaudasyndrom)

> **Merke:** T4 = Mamille, T10 = Nabel. Dermatome ermöglichen die Höhenlokalisation bei Querschnittslähmung.`,
      lernziele: [
        "Das Nervensystem in ZNS und PNS (somatisch und autonom) gliedern und die Funktion jedes Teils beschreiben.",
        "Die Wirkungen von Sympathikus und Parasympathikus auf Herz, Bronchien, Pupille, Magen-Darm und Blase vergleichen und die jeweiligen Neurotransmitter und Rezeptoren benennen.",
        "Den Ablauf der synaptischen Transmission an einer chemischen Synapse einschließlich SNARE-Komplex, Neurotransmitter-Freisetzung und postsynaptischer Potentiale (EPSP/IPSP) erklären.",
        "Das Aktionspotential mit seinen Phasen (Depolarisation, Repolarisation, Hyperpolarisation) und dem Alles-oder-Nichts-Prinzip erläutern.",
        "Den Unterschied zwischen monosynaptischem (Patellarsehnenreflex) und polysynaptischem Reflex (Fluchtreflex) anhand des Reflexbogens darstellen.",
      ],
      sections: [],

      merksätze: [
        "Sympathikus: Noradrenalin, T1–L2, Herz ↑ (β₁), Mydriasis (α₁). Parasympathikus: ACh, kraniosakral, Herz ↓ (M₂), Miosis (M₃).",
        "Synapse: Ca²⁺ → SNARE → Vesikelfusion → Transmitter. EPSP = Glutamat (erregend), IPSP = GABA (hemmend).",
        "Aktionspotential: −70 mV → Schwelle −55 mV → Na⁺ rein (+40 mV) → K⁺ raus → Repolarisation. Alles-oder-Nichts.",
        "Reflexbogen: Rezeptor → Afferenz → Reflexzentrum → Efferenz → Effektor. Eigenreflex = 1 Synapse, Fremdreflex = mehrere.",
      ],
      altfrage: {
        text: "Welche Aussage über das Ruhepotenzial einer Nervenzelle ist korrekt?",
        options: [
          {
            id: "a",
            text: "Das Ruhepotenzial beträgt ca. +70 mV, da die Innenseite der Membran positiv geladen ist.",
          },
          {
            id: "b",
            text: "Das Ruhepotenzial (~−70 mV) entsteht durch die Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein) und K⁺-Leckkanäle, die K⁺ nach außen diffundieren lassen — die Innenseite wird negativ.",
          },
          {
            id: "c",
            text: "Na⁺-Leckkanäle sind hauptverantwortlich für das Ruhepotenzial, da Na⁺ nach außen strömt.",
          },
          {
            id: "d",
            text: "Die Na⁺/K⁺-ATPase transportiert 2 Na⁺ nach außen und 3 K⁺ nach innen.",
          },
          { id: "e", text: "Das Ruhepotenzial ist in allen Zelltypen identisch bei genau −90 mV." },
        ],
        correctOptionId: "b",
        explanation:
          "Das Ruhepotenzial (~−70 mV) entsteht primär durch K⁺-Leckkanäle: K⁺ diffundiert entlang seines Konzentrationsgradienten nach außen → Innenseite wird negativ. Die Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein) hält die Ionengradienten aufrecht. Die Nernst-Gleichung beschreibt das Gleichgewichtspotenzial einzelner Ionen (E_K ≈ −90 mV, E_Na ≈ +60 mV).",
      },
      selfTest: [
        {
          question: "Was sind die Hauptunterschiede zwischen Sympathikus und Parasympathikus?",
          options: [
            "Beide Systeme sind funktionell identisch und nutzen denselben Neurotransmitter.",
            "Sympathikus (Noradrenalin, T1-L2) steigert Herz/Bronchien, Parasympathikus (Acetylcholin, kraniosakral) bremst Herz und fördert Verdauung.",
            "Nur der Sympathikus existiert als Teil des vegetativen Nervensystems.",
            "Der Parasympathikus nutzt Noradrenalin als postganglionären Transmitter.",
            "Beide Systeme steigern die Herzfrequenz über β1-Rezeptoren.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Sympathikus (fight-or-flight, T1–L2) nutzt **Noradrenalin** postganglionär und steigert Herzfrequenz (β₁), Bronchodilatation (β₂), Mydriasis (α₁). Parasympathikus (rest-and-digest, kraniosakral) nutzt **ACh** prä- und postganglionär und senkt Herzfrequenz (M₂), fördert Peristaltik und Miosis (M₃). Beide Systeme wirken antagonistisch auf dieselben Organe. A falsch (nicht identisch), C falsch (beide existieren), D falsch (Parasympathikus nutzt ACh, nicht NA), E falsch (β₁ = Sympathikus, nicht beide).",
          difficulty: 1,
          tags: ["sympathikus", "parasympathikus", "vegetatives nervensystem"],
        },
        {
          question: "Wie funktioniert die synaptische Transmission an einer chemischen Synapse?",
          options: [
            "Die Synapse funktioniert rein elektrisch ohne Neurotransmitter.",
            "Ca\u00B2\u207A strömt ein, der SNARE-Komplex vermittelt die Vesikelfusion, Neurotransmitter binden postsynaptisch an ionotrope oder metabotrope Rezeptoren und erzeugen EPSP oder IPSP.",
            "Synapsen kommen nur bei Bakterien vor.",
            "Die synaptische Transmission ist Ca\u00B2\u207A-unabhängig.",
            "Alle Synapsen im Körper sind elektrische Synapsen (Gap Junctions).",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: An der chemischen Synapse löst ein AP **Ca²⁺-Einstrom** aus → der **SNARE-Komplex** (Synaptobrevin, Syntaxin, SNAP-25) vermittelt Vesikelfusion → Neurotransmitter werden in den synaptischen Spalt freigesetzt. Postsynaptisch binden sie an **ionotrope Rezeptoren** (schnell, ms: AMPA, NMDA, GABA_A, nikotinisch) oder **metabotrope Rezeptoren** (langsam, G-Protein-gekoppelt). Ergebnis: EPSP (Glutamat, erregend) oder IPSP (GABA, hemmend). Botulinumtoxin spaltet SNARE → Paralyse. A falsch (chemisch, nicht elektrisch), C falsch (nicht nur Bakterien), D falsch (Ca²⁺-abhängig), E falsch (nicht alle elektrisch).",
          difficulty: 2,
          tags: ["synapse", "neurotransmitter", "synaptische transmission"],
        },
        {
          question: "Welche Neurotransmitter sind exzitatorisch und welche inhibitorisch im ZNS?",
          options: [
            "Alle Neurotransmitter im ZNS wirken exzitatorisch.",
            "Glutamat ist der wichtigste exzitatorische Transmitter (AMPA, NMDA); GABA (GABA_A: Cl\u207B) und Glycin sind inhibitorisch.",
            "Glutamat ist der einzige Neurotransmitter im ZNS.",
            "GABA wirkt exzitatorisch und öffnet Na\u207A-Kanäle.",
            "Glycin kommt nur bei Bakterien vor, nicht im menschlichen Nervensystem.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **Glutamat** ist der häufigste exzitatorische NT im ZNS (~90 % der exzitatorischen Synapsen). Rezeptoren: AMPA (Na⁺ rein → schnelle Depolarisation), NMDA (Na⁺/Ca²⁺, Mg²⁺-Block, LTP/Lernen). **GABA** ist der häufigste inhibitorische NT: GABA_A → Cl⁻ rein → Hyperpolarisation (IPSP); Benzodiazepine verstärken GABA-Wirkung. **Glycin** wirkt inhibitorisch v. a. im Rückenmark (Cl⁻-Kanal). A falsch (es gibt auch inhibitorische), C falsch (Glutamat ist nicht der einzige), D falsch (GABA ist inhibitorisch, öffnet Cl⁻-Kanäle), E falsch (Glycin kommt im menschlichen NS vor).",
          difficulty: 2,
          tags: ["neurotransmitter", "exzitatorisch", "inhibitorisch"],
        },
        {
          question: "Was passiert während eines Aktionspotentials auf molekularer Ebene?",
          options: [
            "Aktionspotentiale treten nur in Gliazellen auf.",
            "Ab der Schwelle (-55 mV) öffnen Na\u207A-Kanäle (Depolarisation auf +40 mV), dann inaktivieren sie; K\u207A-Kanäle repolarisieren die Membran. Es gilt das Alles-oder-Nichts-Prinzip.",
            "Das Aktionspotential ist Na\u207A-unabhängig und wird nur durch Cl\u207B vermittelt.",
            "Aktionspotentiale kommen nur bei Pflanzen vor.",
            "Das Aktionspotential ist ein graduiertes Signal, dessen Amplitude vom Reiz abhängt.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Ab der Schwelle (−55 mV) öffnen **spannungsgesteuerte Na⁺-Kanäle** → Na⁺ strömt ein → Depolarisation auf ~+40 mV. Dann **inaktivieren** die Na⁺-Kanäle und verzögerte **K⁺-Kanäle** öffnen → K⁺ strömt aus → Repolarisation. Kurze Hyperpolarisation unter −70 mV folgt. **Alles-oder-Nichts:** Schwelle erreicht → volles AP, unterschwellig → kein AP. Absolute Refraktärzeit (Na⁺-Kanäle inaktiviert) verhindert Rückwärtsleitung. A falsch (Neurone, nicht Glia), C falsch (Na⁺-abhängig), D falsch (nicht nur Pflanzen), E falsch (nicht graduiert, sondern alles-oder-nichts).",
          difficulty: 3,
          tags: ["aktionspotential", "na-kanäle", "k-kanäle"],
        },
        {
          question:
            "Was ist ein monosynaptischer Reflex und wie unterscheidet er sich von einem polysynaptischen Reflex?",
          options: [
            "Mono- und polysynaptische Reflexe sind funktionell identisch.",
            "Monosynaptisch (z. B. Patellarsehnenreflex): eine Synapse, Muskelspindel direkt auf \u03B1-Motoneuron. Polysynaptisch (z. B. Fluchtreflex): mehrere Interneurone, komplexe motorische Antwort.",
            "Im menschlichen Körper existieren nur monosynaptische Reflexe.",
            "Polysynaptische Reflexe enthalten keine Interneurone.",
            "Beide Reflextypen erfordern bewusste Steuerung durch das Großhirn.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **Monosynaptisch** (Eigenreflex): nur 1 Synapse, Rezeptor und Effektor im selben Organ. Beispiel Patellarsehnenreflex: Muskelspindel → Ia-Faser → direkt auf α-Motoneuron → M. quadriceps kontrahiert. Gleichzeitig reziproke Hemmung des Antagonisten. Keine Ermüdung. **Polysynaptisch** (Fremdreflex): mehrere Interneurone, Rezeptor und Effektor in verschiedenen Organen. Beispiel Fluchtreflex: Nozizeptor → Interneurone → Beuger aktiviert, Strecker gehemmt, gekreuzte Streckreaktion kontralateral. Ermüdbar (Habituation). A falsch (nicht identisch), C falsch (beide existieren), D falsch (polysynaptisch hat Interneurone), E falsch (Reflexe sind unwillkürlich).",
          difficulty: 3,
          tags: ["monosynaptischer reflex", "polysynaptischer reflex", "reflexbogen"],
        },
      ],
      klinischerBezug:
        "Das Nervensystem ist klinisch von zentraler Bedeutung: Multiple Sklerose (MS) zerstört Myelin (Oligodendrozyten) → saltatorische Leitung gestört → neurologische Ausfälle (Sehstörungen, Lähmungen, Sensibilitätsstörungen). Parkinson entsteht durch Dopamin-Mangel (Substantia nigra) → Tremor, Rigor, Akinese; Therapie: L-DOPA + Carbidopa. Alzheimer-Demenz zeigt Acetylcholin-Mangel + Amyloid-Plaques (β-Amyloid) + Tau-Fibrillen → Gedächtnisverlust; Therapie: Acetylcholinesterase-Hemmer (Donepezil). Epilepsie entsteht durch Glutamat/GABA-Ungleichgewicht → unkontrollierte neuronale Entladungen; Antiepileptika: Valproat (GABA ↑), Carbamazepin (Na⁺-Kanal-Blocker). Myasthenia gravis: Autoantikörper gegen nikotinische AChR → belastungsabhängige Muskelschwäche (Ptosis, Dysphagie); Therapie: Pyridostigmin. Lokalanästhetika (Lidocain) blockieren spannungsgesteuerte Na⁺-Kanäle → kein Aktionspotential → Analgesie ohne Bewusstlosigkeit.",
    },
    {
      id: "bio-3-02",
      title: "Sinnesorgane",
      imageUrl: "/images/wiki-eye-de.svg",
      imageCaption:
        "Abb.: Anatomie des menschlichen Auges (Wikimedia Commons, LadyofHats, Public Domain)",
      stichworte: [
        "Auge",
        "Ohr",
        "Geruch",
        "Geschmack",
        "Hautschichten",
        "Rezeptoren",
        "Epidermis",
        "Dermis",
      ],
      content: `Ob Licht, Schall oder Geruch — jeder Sinnesreiz muss in ein elektrisches Signal umgewandelt werden, bevor das Gehirn ihn verarbeiten kann.

## Grundprinzip: Transduktion — Reize als elektrische Signale

{{IMAGE}}

Ob Licht, Schall oder Geruch — jeder Reiz muss zunächst in ein elektrisches Signal umgewandelt werden. Dieser Vorgang heißt **Transduktion**. Der Mechanismus dahinter unterscheidet sich je nach Sinn:

1. **Photorezeptoren** (Auge): Lichtquanten → Rhodopsin-Aktivierung → G-Protein-Kaskade → cGMP ↓ → Ionenkanäle schließen → **Hyperpolarisation** (atypisch — weil Photorezeptoren im Dunkeln depolarisiert sind!)
2. **Mechanorezeptoren** (Ohr, Haut): Mechanische Verformung → Mechanosensitive Ionenkanäle öffnen direkt → **Depolarisation**
3. **Chemorezeptoren** (Nase, Zunge): Moleküle binden G-Protein-gekoppelte Rezeptoren → Second Messenger → Rezeptorpotential

> **Merke:** Transduktion = Reiz → elektrisches Signal. Auge: Licht → Hyperpolarisation (paradox — weil Photorezeptoren im Dunkeln depolarisiert sind, cGMP-Kanäle offen). Ohr/Haut: Mechanische Kraft → Kanalöffnung → Depolarisation.

---

## Auge — Aufbau und Fototransduktion

**Stäbchen vs. Zapfen im Vergleich:**

| Merkmal | Stäbchen | Zapfen |
|---|---|---|
| Anzahl | ~120 Mio. | ~6 Mio. |
| Lokalisation | Peripher (NICHT in Fovea!) | Fovea centralis |
| Funktion | Skotopisch (Dämmerung, Nachtsehen) | Photopisch (Tageslicht, Farbsehen) |
| Pigment | Rhodopsin (λ_max ~500 nm) | S ~420 nm, M ~530 nm, L ~560 nm |
| Empfindlichkeit | Hoch (1 Photon genügt) | Gering (viele Photonen nötig) |
| Auflösung | Niedrig (viele Stäbchen → 1 Ganglienzelle) | Hoch (1 Zapfen → 1 Ganglienzelle in Fovea) |

**Fototransduktionskaskade** — wie Licht ein Signal erzeugt (Schritt für Schritt):

1. **Dunkelzustand** (Ruhezustand!): cGMP hoch → cGMP-gesteuerte **Na⁺-Kanäle geöffnet** → Stäbchen **depolarisiert** (~-40 mV) → tonische Glutamat-Freisetzung
2. **Licht trifft Rhodopsin**: Photon → **11-cis-Retinal** isomerisiert zu **all-trans-Retinal** → Rhodopsin aktiviert → **Metarhodopsin II** (R*)
3. **Amplifikation Stufe 1**: R* aktiviert viele **Transducin**-Moleküle (G-Protein, Gt, α-Untereinheit)
4. **Amplifikation Stufe 2**: Transducin aktiviert **Phosphodiesterase (PDE)** → PDE hydrolysiert cGMP → GMP (cGMP ↓↓↓, ~1.000-fach in ms)
5. **Na⁺-Kanäle schließen** (kein cGMP mehr) → K⁺-Leckkanäle dominieren → Stäbchen **hyperpolarisiert** (~-70 mV)
6. **Signal**: Ca²⁺-Einstrom ↓ → **Glutamat-Freisetzung ↓** → "Signal durch Stille" → Bipolarzellen reagieren

**Merkhilfe:** Licht → cGMP ↓ → Kanalschluss → Hyperpolarisation → weniger Glutamat.

**Akkommodation (Naheinstellung):**
- **Ferneinstellung** (Ruhezustand): Ziliarmuskel relaxiert → Zonulafasern gespannt → Linse flach (~20 dpt)
- **Naheinstellung** (aktiver Prozess): Ziliarmuskel **kontrahiert** (Parasympathikus, M3, N. oculomotorius III) → Ziliarring verkleinert → Zonulafasern **entspannen** → Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt)
- **Nahakkommodationstrias**: Akkommodation + Konvergenz (beide Augen nach innen) + **Miosis** (Pupille verengt → Tiefenschärfe ↑)

> **Merke:** Licht → Rhodopsin → Transducin → PDE → cGMP ↓ → Na⁺-Kanäle schließen → **Hyperpolarisation** → Glutamat ↓. Akkommodation (Nah): Ziliarmuskel kontrahiert → Zonulafasern entspannen (nicht spannen!) → Linse wölbt sich.

---

## Ohr — Schallübertragung und Hörphysiologie

Das Ohr ist in drei funktionelle Abschnitte gegliedert — Außenohr, Mittelohr und Innenohr — die gemeinsam Schallwellen in neuronale Signale umwandeln.

![Anatomie des menschlichen Ohrs](/images/wiki-ear-de.svg)

**Anatomische Gliederung (prüfungssicher):**

- **Außenohr**: Ohrmuschel + **Gehörgang** → sammelt Schall → **Trommelfell** (Membrana tympani). **Das Mittelohr wird vom Gehörgang durch das Trommelfell abgegrenzt.**
- **Mittelohr** (luftgefüllt, **Paukenhöhle**): **Drei** miteinander verbundene **Gehörknöchelchen** (Hammer → Amboss → Steigbügel) → **Impedanzanpassung**. **Ohrtrompete (Tuba auditiva)** verbindet **Paukenhöhle mit dem Rachen** (Druckausgleich). **Ovales Fenster** verbindet **Mittelohr mit Innenohr** (Steigbügel-Fußplatte) — nicht mit der Ohrtrompete!
- **Innenohr** (flüssigkeitsgefüllt): **Cochlea** (Hören) + **Vestibularapparat** (Gleichgewicht: **Bogengänge**, Utriculus, Sacculus). **Bogengänge liegen im Innenohr** und dienen dem **Gleichgewicht** (Drehbeschleunigung), **nicht** der Schallweiterleitung — Schallweiterleitung erfolgt über Gehörknöchelchen im Mittelohr.

**Schallübertragung — Schritt für Schritt:**

1. Schallwellen → Trommelfell schwingt → Gehörknöchelchen leiten Vibration weiter (Impedanzanpassung!)
2. **Steigbügel-Fußplatte** drückt auf Oval-Fenster → erzeugt **Wanderwelle** in der Perilymphe der Cochlea
3. **Basilarmembran** schwingt: **Tonotopie** — Basis (eng, steif) = hohe Frequenzen (~20 kHz); Apex (breit, flexibel) = niedrige Frequenzen (~20 Hz)
4. Basilarmembran-Bewegung → **Stereozilien** der inneren Haarzellen biegen gegen Tektorialmembran → **Tip-Links** spannen
5. Mechanosensitive **K⁺-Kanäle öffnen** direkt (kein Second Messenger!) → K⁺ strömt aus Endolymphe ein
6. **K⁺-reiche Endolymphe** (+80 mV, von Stria vascularis produziert) → starke Treibkraft → Haarzelle **depolarisiert** → Ca²⁺ → **Glutamat** → N. cochlearis (Spiralganglion) → Gehirn

> **Merke:** Impedanzanpassung ~22-fach (ohne Mittelohr → 99,9 % Verlust). Tonotopie: Basis = hohe Frequenzen, Apex = niedrige Frequenzen. Haarzellen: Tip-Links öffnen K⁺-Kanäle → Depolarisation durch K⁺ aus K⁺-reicher Endolymphe (+80 mV).

---

## Geruchssinn (Olfaktion)

Das **Riechepithel** sitzt in der oberen Nasenmuschel (Regio olfactoria, ~5 cm²) und enthält ca. 10–30 Mio. Riechzellen (bipolare Neurone). Der Mensch besitzt ~400 verschiedene **olfaktorische Rezeptortypen** (OR, GPCR-Familie) — jede Riechzelle exprimiert nur **einen** Rezeptortyp (monoallelische Expression, One-Receptor-One-Neuron-Regel).

**Signaltransduktion:** Duftmolekül bindet OR (GPCR) → **Gα_olf** (spezielles G-Protein) → **Adenylatcyclase III** → **cAMP ↑** → **CNG-Kanäle** (cyclic-nucleotide-gated) öffnen → Na⁺/Ca²⁺-Einstrom → **Depolarisation** → Aktionspotential über **N. olfactorius (I)** → **Bulbus olfactorius** → primärer olfaktorischer Cortex (piriformer Cortex).

**Besonderheit:** Der Geruchssinn ist der **einzige Sinn ohne Thalamus-Umschaltung** — Signale gelangen direkt zum Bulbus olfactorius und von dort zum Cortex. Zudem besteht eine enge Verknüpfung mit dem **limbischen System** (Amygdala, Hippocampus), weshalb Gerüche besonders starke emotionale Erinnerungen auslösen können (Proust-Effekt).

> **Merke:** ~400 OR-Typen (GPCR), jede Riechzelle nur 1 Typ. Signalweg: Duftmolekül → Gα_olf → cAMP → CNG-Kanäle → Depolarisation. Einziger Sinn ohne Thalamus-Umschaltung → direkt limbisches System → starke Emotions-Erinnerungskopplung.

---

## Geruch und Geschmack

**Geschmack (Gustation):** 5 Grundqualitäten, jede mit eigenem Transduktionsmechanismus:

| Qualität | Transduktionsmechanismus | Biologische Bedeutung |
|---|---|---|
| Süß | GPCR (T1R2/T1R3) → Gs → cAMP → PKA | Kohlenhydrate (Energie) erkennen |
| Umami | GPCR (T1R1/T1R3) → ähnlich süß | Protein/Glutamat erkennen |
| Bitter | GPCR (T2R-Familie, >25 Rezeptoren) → Gαgust → PLC → IP3 | Gifterkennung (breite Spezifität) |
| Sauer | H⁺ blockiert K⁺-Kanäle direkt (+ OTOP1-Protonenkanal) | Säure/Verderb erkennen |
| Salzig | Na⁺ strömt durch ENaC (epithelialer Na⁺-Kanal) direkt ein | Elektrolytbedarf |

> **Merke:** Süß/Umami/Bitter = GPCR-vermittelt (Second Messenger). Sauer/Salzig = direkte Ionenkanalöffnung. Geruchssinn: einziger Sinn ohne Thalamus-Umschaltung → direkt ins limbische System.

---

## Haut — Schichten und Rezeptortypen

- **Epidermis** (Plattenepithel, **avaskulär** — keine Blutgefäße, Ernährung durch Diffusion aus Dermis): Keratozyten (Keratin), Melanozyten (Melanin), Langerhans-Zellen (Immunabwehr), Merkel-Zellen (Mechanorezeptoren)
- **Dermis** (Bindegewebe, **vaskularisiert**): enthält die meisten Hautrezeptoren (Meissner, Pacini, Ruffini), Haarfollikel, Schweißdrüsen, Talgdrüsen
- **Subcutis** (Fettgewebe): Energiespeicher, Wärmeisolation, mechanisches Polster; Pacini-Körperchen auch hier

**Die fünf Hautrezeptoren (prüfungsrelevant):**

| Rezeptor | Lokalisation | Modalität | Adaptationstyp | Merkmal |
|---|---|---|---|---|
| **Meissner-Körperchen** | Dermis, Papillen (Fingerkuppen!) | Leichte Berührung, Textur | Schnell adaptierend (RA1) | Lesen in Blindenschrift |
| **Pacini-Körperchen** | Tiefe Dermis/Subcutis | Vibration, Druck | Schnell adaptierend (RA2) | Werkzeug-Feedback |
| **Merkel-Scheiben** | Epidermis-Basis | Dauerdruck, Kontur, Form | Langsam adaptierend (SA1) | Druckintensität |
| **Ruffini-Körperchen** | Tiefe Dermis | Dehnung, Gelenkstellung | Langsam adaptierend (SA2) | Propriozeption |
| **Freie Nervenendigungen** | Epidermis | Schmerz (Nozizeption) + Temperatur | Keine echte Adaptation | Aδ (schnell) + C-Fasern (langsam) |

**Temperaturrezeptoren (TRP-Kanäle):**
- **TRPV1** (>43 °C und Capsaicin [Chili]): Depolarisation → Hitzeschmerz. Deshalb „brennt" scharfes Essen!
- **TRPM8** (<~25 °C und Menthol): Depolarisation → Kälteempfindung. Deshalb fühlt sich Pfefferminz kühl an.

> **Merke:** Schnell adaptierend (Meissner, Pacini): phasisch, reagieren auf Änderungen. Langsam adaptierend (Merkel, Ruffini): tonisch, melden Dauerzustände. Epidermis = **avaskulär** (kein Blut!), Dermis = **vaskularisiert**.

---

> **Merke:** Alle Sinnesorgane nutzen Transduktion: Reiz → Ionenkanäle öffnen oder schließen → elektrisches Signal. Auge: Licht → Hyperpolarisation. Ohr/Haut: Druck → Depolarisation. Nase/Zunge: Chemorezeptoren → G-Protein.`,
      lernziele: [
        "Den Aufbau des Auges beschreiben und die Fototransduktion in Stäbchen von der Lichtabsorption durch Rhodopsin bis zur Hyperpolarisation erklären.",
        "Stäbchen und Zapfen hinsichtlich Lokalisation, Funktion und Photopigment unterscheiden.",
        "Den Mechanismus der Akkommodation des Auges einschließlich der Nahakkommodationstrias darstellen.",
        "Die Schallübertragung vom Trommelfell über die Gehörknöchelchen bis zur Aktivierung der Haarzellen im Corti-Organ beschreiben.",
        "Die drei Schichten der Haut und die fünf Typen der Hautrezeptoren mit ihren Modalitäten und Adaptationsgeschwindigkeiten nennen.",
      ],
      sections: [],

      merksätze: [
        "**Photorezeptoren:** **Stäbchen** (skotopisch [Dämmerung], Rhodopsin [11-cis-Retinal + Opsin, λ_max ~500 nm], ~120 Mio., peripher, hohe Empfindlichkeit, niedrige Auflösung). **Zapfen** (photopisch [Tageslicht, Farben], 3 Opsine [S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm], ~6 Mio., Fovea centralis, niedrige Empfindlichkeit, hohe Auflösung [1:1 Ganglienzelle]).",
        "**Fototransduktion** (Stäbchen): Licht → **11-cis-Retinal → all-trans-Retinal** (Photoisomerisierung) → Rhodopsin → **Metarhodopsin II** → **Transducin** (G-Protein) → **Phosphodiesterase (PDE)** → **cGMP ↓** (Hydrolyse) → cGMP-gesteuerte **Na⁺-Kanäle SCHLIESSEN** → **HYPERPOLARISATION** (~-70 mV) → Ca²⁺-Kanäle schließen → **Glutamat ↓** (Signal).",
        "**Akkommodation** (Naheinstellung): **Ziliarmuskel kontrahiert** (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → **Zonulafasern entspannen** → Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal). **Nahakkommodationstrias:** Akkommodation + Konvergenz (M. rectus medialis) + **Miosis** (M. sphincter pupillae, M3, Tiefenschärfe ↑).",
        "**Corti-Organ** (Hören): Schallwellen → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Oval-Fenster → Perilymphe → **Basilarmembran** (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → **Haarzellen** (Stereozilien biegen, **Tip-Links** spannen) → **K⁺-Kanäle öffnen** (Endolymphe K⁺-reich, +80 mV) → Depolarisation → **Glutamat** → N. cochlearis.",
      ],
      altfrage: {
        text: "Welche Aussage über Stäbchen und Zapfen der Netzhaut ist korrekt?",
        options: [
          {
            id: "a",
            text: "Zapfen sind mit ~120 Mio. deutlich häufiger als Stäbchen und in der Peripherie der Retina konzentriert.",
          },
          {
            id: "b",
            text: "Stäbchen enthalten drei verschiedene Opsine (S, M, L) und ermöglichen das Farbsehen.",
          },
          {
            id: "c",
            text: "Stäbchen (~120 Mio., Rhodopsin, peripher) dienen dem skotopischen Sehen; Zapfen (~6 Mio., 3 Opsine S/M/L, Fovea) ermöglichen Farbsehen und hohe Sehschärfe.",
          },
          {
            id: "d",
            text: "Die Dunkeladaptation dauert nur wenige Sekunden, da Rhodopsin sofort regeneriert wird.",
          },
          {
            id: "e",
            text: "Stäbchen und Zapfen sind gleichmäßig über die gesamte Retina verteilt und funktionell identisch.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "Stäbchen (~120 Mio., peripher) enthalten Rhodopsin und dienen dem skotopischen (Dämmerungs-)Sehen mit hoher Empfindlichkeit. Zapfen (~6 Mio., Fovea centralis) besitzen drei Opsine (S ~420 nm, M ~530 nm, L ~560 nm) und ermöglichen photopisches Sehen (Farbe + Sehschärfe). Dunkeladaptation dauert ~30 min (Rhodopsin-Regeneration).",
      },
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen Stäbchen und Zapfen in der Retina?",
          options: [
            "Beide Photorezeptortypen nutzen dasselbe Photopigment (Rhodopsin) und sind gleichmäßig über die Retina verteilt.",
            "Stäbchen (skotopisch, Rhodopsin, ~120 Mio., peripher, hohe Empfindlichkeit, niedrige Auflösung) dienen dem Dämmerungssehen; Zapfen (photopisch, 3 Opsine S/M/L, ~6 Mio., Fovea centralis, hohe Auflösung 1:1) dem Farbsehen.",
            "Zapfen reagieren auf einzelne Photonen und ermöglichen das Nachtsehen; Stäbchen dienen ausschließlich dem Farbsehen.",
            "Stäbchen besitzen drei verschiedene Opsine für Rot, Grün und Blau und sind in der Fovea konzentriert.",
            "Zapfen und Stäbchen unterscheiden sich nur in ihrer Größe, nicht in Funktion oder Verteilung.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **Stäbchen** (~120 Mio., peripher, NICHT in Fovea): skotopisches Sehen (Dämmerung), Rhodopsin (λ_max ~500 nm), hohe Empfindlichkeit (1 Photon!), niedrige Auflösung (Konvergenz ~100:1). **Zapfen** (~6 Mio., Fovea centralis): photopisches Sehen + Farbsehen, 3 Opsine (S 420 nm, M 530 nm, L 560 nm), hohe Auflösung (1:1 in Fovea). Nachtblindheit = Stäbchen-Defekt (Vitamin-A-Mangel), Rot-Grün-Schwäche = Zapfen-Defekt (X-chromosomal). A falsch (verschiedene Pigmente), C falsch (vertauscht), D falsch (3 Opsine = Zapfen), E falsch (Funktion + Verteilung unterscheiden sich).",
          difficulty: 1,
          tags: ["stäbchen", "zapfen", "retina"],
        },
        {
          question: "Wie funktioniert die Fototransduktion in Stäbchen?",
          options: [
            "Licht öffnet Na⁺-Kanäle direkt in der Stäbchenmembran, was zur Depolarisation und erhöhter Glutamat-Freisetzung führt.",
            "Licht aktiviert Rhodopsin → Transducin (G-Protein) → Phosphodiesterase → cGMP ↓ → Na⁺-Kanäle schließen → Hyperpolarisation → Glutamat-Freisetzung ↓.",
            "Fototransduktion in Stäbchen verläuft über eine direkte Kopplung von Rhodopsin an spannungsgesteuerte Ca²⁺-Kanäle ohne G-Protein.",
            "11-cis-Retinal isomerisiert zu all-trans-Retinal, was cGMP-Synthese stimuliert und Na⁺-Kanäle öffnet — Stäbchen depolarisieren bei Licht.",
            "Transducin hemmt die Guanylatzyklase, cGMP steigt an und hält die Na⁺-Kanäle geöffnet, sodass Licht zur Depolarisation führt.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Paradox -- Stäbchen sind im **Dunkeln depolarisiert** (cGMP hoch → Na⁺-Kanäle offen → Glutamat-Freisetzung). Bei **Licht**: Rhodopsin aktiviert (11-cis → all-trans-Retinal) → Transducin (G-Protein) → PDE → **cGMP ↓** → Na⁺-Kanäle schließen → **Hyperpolarisation** → Glutamat ↓. Starke Amplifikation: 1 Photon → ~100.000 cGMP hydrolysiert. Erholung: Rhodopsin-Kinase + Arrestin inaktivieren R*; Vitamin-A-Zyklus regeneriert 11-cis-Retinal. A falsch (Licht schließt Kanäle), C falsch (G-Protein beteiligt), D falsch (cGMP sinkt bei Licht), E falsch (Transducin aktiviert PDE, nicht Guanylatzyklase).",
          difficulty: 2,
          tags: ["fototransduktion", "rhodopsin", "stäbchen"],
        },
        {
          question: "Wie funktioniert die Akkommodation des Auges?",
          options: [
            "Bei Nahsicht relaxiert der Ziliarmuskel, die Zonulafasern entspannen sich dadurch und die Linse wird flacher — Brechkraft nimmt ab.",
            "Naheinstellung: Ziliarmuskel kontrahiert (Parasympathikus, M3) → Zonulafasern entspannen → Linse wölbt sich → Brechkraft ↑. Fernsicht: Ziliarmuskel relaxiert → Zonulafasern gespannt → Linse flach. Nahakkommodationstrias: Akkommodation + Konvergenz + Miosis.",
            "Der Sympathikus kontrahiert den Ziliarmuskel für die Nahsicht; Parasympathikus entspannt ihn für Fernsicht — Noradrenalin vermittelt Akkommodation.",
            "Akkommodation erfolgt durch Veränderung des Hornhautkrümmungsradius via Ziliarmuskel; die Linsenform bleibt dabei konstant.",
            "Zonulafasern kontrahieren aktiv bei Nahsicht und wölben die Linse; bei Fernsicht entspannen sie und die Linse flacht ab.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **Naheinstellung**: Ziliarmuskel kontrahiert (Parasympathikus, M3, N. oculomotorius III) → Zonulafasern **entspannen** → Linse wölbt sich (elastische Rückstellkraft) → Brechkraft ↑. **Ferneinstellung** (Ruhe): Ziliarmuskel relaxiert → Zonulafasern gespannt → Linse flach. Haufiger MedAT-Stolperstein: Zonulafasern entspannen bei Nahsicht (nicht spannen!). **Nahakkommodationstrias**: Akkommodation + Konvergenz + Miosis (Tiefenscharfe ↑). Presbyopie: Linse verliert Elastizitat → Nahpunkt ↑. A falsch (bei Nahsicht kontrahiert der Ziliarmuskel), C falsch (Parasympathikus, nicht Sympathikus), D falsch (Linsenform andert sich), E falsch (Zonulafasern entspannen, nicht kontrahieren).",
          difficulty: 2,
          tags: ["akkommodation", "linse", "ziliarmuskeln"],
        },
        {
          question: "Wie funktioniert die Schallübertragung im Ohr?",
          options: [
            "Schallwellen gelangen direkt durch die Schädelknochen zur Cochlea; die Gehörknöchelchen dienen nur der Schalldämpfung, nicht der Weiterleitung.",
            "Schallwellen → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Oval-Fenster → Wanderwelle auf Basilarmembran (Tonotopie: Basis = hohe, Apex = niedrige Frequenzen) → Haarzellen-Depolarisation via K⁺-Einstrom aus K⁺-reicher Endolymphe → Glutamat → N. cochlearis.",
            "Das Trommelfell überträgt Schall direkt auf die Basilarmembran; die Gehörknöchelchen sind nur bei lauten Geräuschen aktiv und dämpfen die Schwingungen.",
            "Haarzellen im Corti-Organ depolarisieren durch Na⁺-Einstrom aus der Na⁺-reichen Endolymphe (+80 mV); Tonotopie bedeutet, dass hohe Frequenzen am Apex ankommen.",
            "Die Impedanzanpassung im Mittelohr reduziert den Schalldruck um Faktor 22, damit die Flüssigkeit im Innenohr nicht überstimuliert wird.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Schall → Trommelfell → **Gehörknöchelchen** (Hammer → Amboss → Steigbügel) mit **Impedanzanpassung ~22-fach** (Hebelwirkung + Flächenreduktion; ohne sie gingen 99,9 % verloren). Steigbügel → Oval-Fenster → Wanderwelle auf **Basilarmembran** mit **Tonotopie** (Basis = hohe, Apex = niedrige Frequenzen). Haarzellen im Corti-Organ: Stereozilien biegen → **Tip-Links** spannen → **K⁺-Kanäle** öffnen direkt (kein Second Messenger!). **K⁺** aus K⁺-reicher Endolymphe (+80 mV) → Depolarisation → Glutamat → N. cochlearis. A falsch (Gehörknöchelchen leiten weiter), C falsch (nicht direkt auf Basilarmembran), D falsch (K⁺, nicht Na⁺; Basis = hoch, nicht Apex), E falsch (Impedanzanpassung verstärkt, nicht dämpft).",
          difficulty: 3,
          tags: ["schallübertragung", "innenohr", "cochlea"],
        },
        {
          question: "Welche Hautrezeptoren gibt es und was ist ihre Funktion?",
          options: [
            "Alle Hautrezeptoren sind langsam adaptierend (SA) und reagieren ausschließlich auf Schmerzreize; Temperatursinn wird durch spezifische Zapfen in der Epidermis vermittelt.",
            "Meissner (Berührung, schnell adaptierend), Pacini (Vibration, schnell adaptierend), Merkel (Druck/Details, langsam adaptierend), Ruffini (Dehnung, langsam adaptierend), freie Nervenendigungen (Schmerz/Temperatur: TRPV1 >43 °C, TRPM8 <25 °C; Aδ = scharf, C-Fasern = brennend).",
            "Meissner-Körperchen sind für Vibration und Propriozeption zuständig und liegen tief in der Subcutis; Pacini-Körperchen registrieren feine Textur an der Hautoberfläche.",
            "Ruffini-Körperchen adaptieren schnell und detektieren leichte Berührung; Merkel-Scheiben liegen in der tiefen Dermis und messen Gelenkstellungen.",
            "Freie Nervenendigungen vermitteln ausschließlich Temperatur; Schmerzsignale werden über Aβ-Fasern (schnell myelinisiert) und Aa-Fasern (unmyelinisiert) weitergeleitet.",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **Schnell adaptierend** (phasisch, reagieren auf Anderungen): **Meissner** (Dermis-Papillen, Beruhrung/Textur) und **Pacini** (tiefe Dermis/Subcutis, Vibration). **Langsam adaptierend** (tonisch, Dauerzustande): **Merkel** (Epidermis, Druck/Details) und **Ruffini** (tiefe Dermis, Dehnung/Propriozeption). **Freie Nervenendigungen**: Schmerz (Nozizeption, Aδ = schnell/scharf, C = langsam/brennend) + Temperatur (TRPV1 >43 °C/Capsaicin, TRPM8 <25 °C/Menthol). A falsch (es gibt schnell und langsam adaptierende), C falsch (Meissner = oberflachlich/Beruhrung, Pacini = tief/Vibration), D falsch (Ruffini = langsam, Merkel = Epidermis), E falsch (freie Nervenendigungen = Schmerz + Temperatur; Schmerzfasern sind Aδ und C).",
          difficulty: 3,
          tags: ["hautrezeptoren", "meissner", "pacini"],
          hints: [
            "Überlege: Welche Rezeptoren reagieren auf Capsaicin (Chili) und welcher Kanal ist verantwortlich?",
            "TRPV1 (Transient Receptor Potential Vanilloid 1) wird sowohl durch Wärme (>43°C) als auch durch Capsaicin aktiviert – Schmerz und Wärme teilen sich denselben Rezeptor.",
          ],
        },
      ],
      klinischerBezug:
        "Glaukom (Grüner Star): erhöhter Augeninnendruck (>21 mmHg) durch gestörten Kammerwasser-Abfluss (Schlemm-Kanal) → Papillenexkavation (N. opticus) → Gesichtsfeldverlust. Therapie: Betablocker (Timolol, β₁-Hemmung → Kammerwasserproduktion ↓), Prostaglandinanaloga (Latanoprost → Abfluss ↑), Pilocarpin (M3-Agonist → Ziliarmuskel → Trabekelwerk öffnet). Katarakt (Grauer Star): Linsentrübung (UV, Diabetes, Kortison, Alter) → verschwommene Sicht; Therapie: OP (Phakoemulsifikation + IOL). Schalltrauma: chronische Lärm-Exposition → Cochlea-Haarzellen zerstört (Stereozilien, Apex der Basilarmembran bei 4 kHz besonders vulnerabel) → Lärmschwerhörigkeit (Hochton-Verlust, Tinnitus). Presbyakusis: Altersbedingte Hochtonschwerhörigkeit durch Haarzell-Verlust. Retinitis pigmentosa: genetische Stäbchen-Degeneration → Nachtblindheit → Tunnelblick. Makuladegeneration: Photorezeptoren in Fovea geschädigt → Verlust von feinem zentralem Sehen.",
    },
    {
      id: "bio-3-03",
      title: "Hormonsystem",
      imageUrl: "/images/wiki-endocrine-de.svg",
      imageCaption:
        "Abb.: Regulation des Blutzuckerspiegels durch Insulin und Glucagon (OpenStax, CC BY 4.0)",
      stichworte: [
        "Hypothalamus-Hypophyse",
        "Schilddrüse",
        "Nebenniere",
        "Pankreas",
        "Insulin",
        "Cortisol",
        "T3/T4",
        "Feedback-Regulation",
      ],
      content: `Eine junge Patientin klagt über Herzrasen, Gewichtsverlust und Hitzeunverträglichkeit — die Laborwerte zeigen TSH im Keller und freies T₄ massiv erhöht. Morbus Basedow. Ohne das Zusammenspiel von Hypothalamus, Hypophyse und Schilddrüse zu verstehen, bleibt diese Diagnose ein Rätsel. Das endokrine System steuert über chemische Botenstoffe nahezu jeden Stoffwechselprozess — von der Blutzuckerregulation bis zur Stressantwort.

{{IMAGE}}

---

## Hormonklassen und Signalwege

Hormone lassen sich nach ihrer **chemischen Struktur** in drei Hauptklassen einteilen, die sich fundamental in Löslichkeit, Rezeptorlokalisation und Wirkgeschwindigkeit unterscheiden:
| Hormonklasse | Beispiele | Löslichkeit | Rezeptor | Wirkweg | Geschwindigkeit |
|---|---|---|---|---|---|
| **Peptidhormone** | Insulin, ACTH, TSH, GH, Glukagon | hydrophil | Membranrezeptoren (Tyrosinkinase, G-Protein-gekoppelt) | Second Messenger (cAMP, IP₃, Ca²⁺) | Minuten |
| **Steroidhormone** | Cortisol, Aldosteron, Testosteron, Östrogen | lipophil | Intrazelluläre Rezeptoren (Zellkern) | Hormon-Rezeptor-Komplex → DNA-Bindung → Genexpression | Stunden |
| **Aminosäurederivate** | T₃/T₄ (lipophil), Adrenalin/Noradrenalin (hydrophil) | variabel | T₃/T₄: intrazellulär; Katecholamine: Membranrezeptoren | T₃/T₄: Genexpression; Adrenalin: cAMP/IP₃ | variabel |

**Peptidhormone** wie Insulin oder ACTH sind wasserlöslich und können die Lipid-Doppelschicht der Zellmembran nicht passieren. Sie binden an **Membranrezeptoren** — entweder Tyrosinkinasen (Insulin-Rezeptor: Autophosphorylierung → PI3K → GLUT4-Translokation) oder G-Protein-gekoppelte Rezeptoren (ACTH → Gs → Adenylatcyclase → cAMP ↑ → Proteinkinase A). Die Signalkaskade über **Second Messenger** (cAMP, IP₃, Ca²⁺, DAG) ermöglicht eine schnelle Wirkung innerhalb von Minuten, da keine neue Proteinbiosynthese nötig ist.

**Steroidhormone** werden aus Cholesterin synthetisiert (alle Nebennierenrinden- und Sexualhormone). Als lipophile Moleküle passieren sie die Zellmembran frei, binden im Zytoplasma oder Zellkern an **intrazelluläre Rezeptoren** und der Hormon-Rezeptor-Komplex wirkt als Transkriptionsfaktor direkt an der DNA. Dieser Weg über Genexpression dauert Stunden, hält aber länger an. Steroidhormone werden im Blut an Transportproteine gebunden (z. B. CBG für Cortisol, SHBG für Sexualhormone) — nur die freie Fraktion ist biologisch aktiv.

**Aminosäurederivate** sind eine heterogene Gruppe: T₃/T₄ (aus Tyrosin, lipophil, wirken wie Steroidhormone über intrazelluläre Rezeptoren) versus Katecholamine (Adrenalin, Noradrenalin — aus Tyrosin, aber hydrophil, wirken über Membranrezeptoren). Diese Zweiteilung ist ein klassischer MedAT-Stolperstein.

> **Merke:** Peptidhormone = hydrophil → Membranrezeptoren → Second Messenger → schnell (Minuten). Steroidhormone = lipophil → intrazelluläre Rezeptoren → Genexpression → langsam (Stunden). T₃/T₄ sind Aminosäurederivate, wirken aber wie Steroidhormone (intrazellulär). Adrenalin ist ebenfalls ein Aminosäurederivat, wirkt aber über Membranrezeptoren.

---

## Hypothalamus-Hypophysen-Achse

{{DIAGRAM:hpa-axis}}

Der **Hypothalamus** ist die zentrale Schaltstelle zwischen Nervensystem und endokrinem System. Als Teil des Zwischenhirns empfängt er neuronale Signale (Stress, Temperatur, zirkadiane Rhythmik) und übersetzt sie in hormonelle Befehle.

**Hypophysenvorderlappen (Adenohypophyse):** Der Hypothalamus sezerniert **Releasing-Hormone** (Liberine) und **Inhibiting-Hormone** (Statine) in das hypothalamisch-hypophysäre Pfortadersystem — ein spezielles venöses Gefäßsystem, das Hypothalamus und Hypophyse direkt verbindet:

| Hypothalamus (Releasing-/Inhibiting-Hormon) | Hypophysenvorderlappen (Trophes Hormon) | Periphere Drüse / Zielorgan |
|---|---|---|
| **TRH** (Thyreotropin-Releasing-Hormon) | **TSH** (Thyreoidea-stimulierendes Hormon) | Schilddrüse → T₃/T₄ |
| **CRH** (Corticotropin-Releasing-Hormon) | **ACTH** (Adrenocorticotropes Hormon) | Nebennierenrinde → Cortisol |
| **GnRH** (Gonadotropin-Releasing-Hormon, pulsatil!) | **LH + FSH** | Gonaden → Testosteron/Östrogen |
| **GHRH** / Somatostatin (hemmend) | **GH** (Growth Hormone, Somatotropin) | Leber → IGF-1 (Wachstum) |
| Dopamin (hemmend!) | **Prolaktin** | Brustdrüse (Laktation) |

**Hypophysenhinterlappen (Neurohypophyse):** Hier werden keine Hormone produziert, sondern im Hypothalamus gebildete Hormone **gespeichert und freigesetzt**: **ADH** (Vasopressin, Osmoregulation: AQP2-Einbau → Wasserrückresorption im Sammelrohr) und **Oxytocin** (Wehen, Milchejektion). Die Neurohypophyse ist also kein echtes endokrines Organ, sondern ein Speicher.

> **Merke:** Vorderlappen (Adenohypophyse) = produziert 6 Hormone (TSH, ACTH, LH, FSH, GH, Prolaktin), gesteuert durch Releasing-/Inhibiting-Hormone über das Pfortadersystem. Hinterlappen (Neurohypophyse) = speichert und sezerniert ADH + Oxytocin (im Hypothalamus produziert). Prolaktin ist das einzige Vorderlappenhormon, das vorwiegend gehemmt wird (durch Dopamin).

---

## Schilddrüse: T₃/T₄-Biosynthese und Regulation

Die Schilddrüse (Glandula thyroidea) liegt unterhalb des Kehlkopfs und besteht aus **Follikeln**: Hohlkugeln aus Thyreozyten (Epithelzellen), die **Kolloid** (Thyreoglobulin-haltiges Speichermaterial) umschließen. Zwischen den Follikeln liegen **C-Zellen** (parafollikuläre Zellen), die Calcitonin produzieren.

**Biosynthese der Schilddrüsenhormone — Schritt für Schritt:**

1. **Jodid-Aufnahme:** Der Natrium-Jodid-Symporter (**NIS**) an der basolateralen Membran der Thyreozyten transportiert Jodid (I⁻) aktiv gegen ein Konzentrationsgefälle aus dem Blut in die Zelle (sekundär aktiv, Na⁺-Gradient)
2. **Transport ins Kolloid:** Pendrin transportiert Jodid an der apikalen Membran in das Follikellumen
3. **Oxidation und Jodierung:** Die **Thyreoperoxidase (TPO)** an der apikalen Membran oxidiert Jodid zu elementarem Jod und jodiert Tyrosinreste im Thyreoglobulin (TG): → **MIT** (Monojodtyrosin, 1 Jod) und **DIT** (Dijodtyrosin, 2 Jod)
4. **Kopplung:** TPO katalysiert auch die Kopplung: **MIT + DIT → T₃** (Trijodthyronin, 3 Jod-Atome) und **DIT + DIT → T₄** (Thyroxin, 4 Jod-Atome). T₄ wird in deutlich größerer Menge gebildet (~90 %)
5. **Freisetzung:** TSH-Stimulus → Endozytose von Kolloid → lysosomale Proteolyse des Thyreoglobulins → T₃ und T₄ werden ins Blut freigesetzt
6. **Periphere Konversion:** T₄ ist ein **Prohormon** — erst die Dejodierung durch Dejodase in peripheren Geweben (Leber, Niere) erzeugt das 3–5× potentere **T₃** (biologisch aktive Form)

**Regulation:** TRH (Hypothalamus) → TSH (Hypophyse) → Schilddrüse → T₃/T₄ → negative Rückkopplung auf Hypothalamus und Hypophyse. Bei **Jodmangel**: T₃/T₄ ↓ → TSH ↑ (kompensatorisch) → Schilddrüsenhyperplasie → **Struma** (Kropf).

**Wirkungen von T₃/T₄:** Grundumsatz ↑ (O₂-Verbrauch, Wärmeproduktion), Herzfrequenz ↑ (β-Rezeptor-Upregulation am Herzen), Wachstum und ZNS-Entwicklung (Kretinismus bei kongenitalem Mangel), Glukose- und Lipidstoffwechsel ↑.

**Klinische Korrelation:**
- **Morbus Basedow** (häufigste Ursache der Hyperthyreose): TSH-Rezeptor-Autoantikörper (TRAK) stimulieren die Schilddrüse unkontrolliert → T₃/T₄ ↑, TSH ↓ (supprimiert). Merseburger Trias: Tachykardie, Struma, Exophthalmus
- **Hashimoto-Thyreoiditis** (häufigste Ursache der Hypothyreose): Autoimmune Zerstörung der Schilddrüse → T₃/T₄ ↓, TSH ↑ (kompensatorisch). Symptome: Müdigkeit, Kälteintoleranz, Gewichtszunahme, Bradykardie

> **Merke:** T₃ (3 Jod, aktiv) und T₄ (4 Jod, Prohormon). Biosynthese: NIS → Jodid in Thyreozyten → TPO jodiert Tyrosin in TG → MIT + DIT → T₃, 2×DIT → T₄ → TSH-abhängige Freisetzung → periphere Dejodierung T₄→T₃. TPO ist das Schlüsselenzym (Angriffspunkt von TPO-Antikörpern bei Hashimoto). Thyreostatika (Thiamazol) hemmen TPO.

---

## Nebenniere: Rinde und Mark

Die Nebenniere (Glandula suprarenalis) sitzt kappenförmig auf der Niere und gliedert sich funktionell in zwei Organe: **Rinde** (Kortex, ~80 %, mesodermalen Ursprungs) und **Mark** (Medulla, ~20 %, aus der Neuralleiste, also neuroektodermalen Ursprungs).

**Nebennierenrinde — Zonengliederung (Merkspruch: „Salz, Zucker, Sex"):**

| Zone | Hormon(e) | Klasse | Regulation | Klinische Störung |
|---|---|---|---|---|
| **Zona glomerulosa** (außen) | **Aldosteron** | Mineralokortikoid | RAAS (Angiotensin II), K⁺ | Conn-Syndrom (↑) |
| **Zona fasciculata** (Mitte, größte Zone) | **Cortisol** | Glukokortikoid | CRH → ACTH | Cushing-Syndrom (↑), Addison (↓) |
| **Zona reticularis** (innen) | **DHEA**, Androstendion | Androgene | ACTH | Adrenogenitales Syndrom (AGS) |

**Cortisol** (Zona fasciculata): das zentrale Stresshormon, reguliert über die CRH-ACTH-Achse mit deutlichem **zirkadianem Rhythmus** (Maximum morgens ~6–8 Uhr, Minimum um Mitternacht). Wirkt über intrazelluläre Glukokortikoid-Rezeptoren (GR) → Genexpression. Metabolisch: steigert Glukoneogenese in der Leber (Blutzucker ↑, diabetogene Wirkung), fördert Proteinkatabolismus in Muskel und Lipolyse im Fettgewebe. Immunsuppressiv: hemmt Phospholipase A₂ → Arachidonsäure ↓ → Prostaglandine und Leukotriene ↓ → Entzündungshemmung. Langfristig hemmt Cortisol Osteoblasten → Knochenaufbau ↓ → Osteoporoserisiko (Cushing). Klinisch: Cushing-Syndrom = Cortisol ↑ (exogen durch Therapie oder endogen durch ACTH-Adenom) → Stammfettsucht, Vollmondgesicht, Striae rubrae, Hyperglykämie, Osteoporose. Morbus Addison = NNR-Insuffizienz → Cortisol ↓, ACTH ↑ → Hyperpigmentierung (ACTH-Fragment = MSH-Wirkung).

**Aldosteron** (Zona glomerulosa): reguliert Na⁺/K⁺-Haushalt über ENaC (epithelialer Na⁺-Kanal) im distalen Tubulus und Sammelrohr → Na⁺-Retention + K⁺-Exkretion → Volumen ↑, Blutdruck ↑. Regulation über RAAS: Renin (juxtaglomeruläre Zellen bei Druckabfall) → Angiotensinogen → Angiotensin I → ACE → Angiotensin II → Aldosteron ↑. Klinisch: Conn-Syndrom (primärer Hyperaldosteronismus) → therapieresistente Hypertonie + Hypokaliämie + metabolische Alkalose.

**Nebennierenmark:** Chromaffine Zellen (modifizierte sympathische Neurone) sezernieren **Adrenalin** (~80 %) und **Noradrenalin** (~20 %) bei sympathischer Aktivierung (Acetylcholin → nikotinerge Rezeptoren). Adrenalin entsteht aus Noradrenalin durch PNMT (Phenylethanolamin-N-Methyltransferase, Cortisol-abhängig — daher liegt das Mark innen, umspült von cortisolreichem venösem Blut der Rinde). Rezeptorwirkungen: α₁ (Vasokonstriktion), β₁ (Herzfrequenz ↑, Kontraktilität ↑), β₂ (Bronchodilatation, Glykogenolyse in Leber, Vasodilatation Skelettmuskulatur). Klinisch: Phäochromozytom = Katecholamin-produzierender Tumor → episodische Hypertonie, Tachykardie, Kopfschmerzen, Schwitzen.

> **Merke:** NNR-Zonen von außen nach innen: glomerulosa (Aldosteron/Salz) → fasciculata (Cortisol/Zucker) → reticularis (DHEA/Sex). Cortisol = Glukoneogenese ↑, Immunsuppression, Osteoblasten ↓. Aldosteron = Na⁺ rein, K⁺ raus (RAAS-gesteuert). Nebennierenmark = Katecholamine (Fight-or-Flight), Adrenalin braucht PNMT (cortisolabhängig).

---

## Pankreas und Blutzuckerregulation

Die **Langerhans-Inseln** (1–2 % des Pankreasgewebes, ~1 Million Inseln) enthalten die endokrinen Zellen des Pankreas. Die exokrine Funktion (Verdauungsenzyme) wird hier nicht behandelt.

**Zelltypen der Langerhans-Inseln:**
- **β-Zellen** (~65–80 %): produzieren **Insulin** (blutzuckersenkend)
- **α-Zellen** (~15–20 %): produzieren **Glukagon** (blutzuckersteigernd)
- **δ-Zellen** (~5 %): produzieren **Somatostatin** (hemmt Insulin und Glukagon)
- **PP-Zellen**: pankreatisches Polypeptid (Verdauungsregulation)

**Insulin-Sekretionsmechanismus (β-Zelle):** Glukose → GLUT2-Transporter (insulinunabhängig) → Glykolyse → ATP ↑ → ATP-sensitive K⁺-Kanäle (K_ATP) schließen → Membrandepolarisation → spannungsabhängige Ca²⁺-Kanäle öffnen → Ca²⁺-Einstrom → Exozytose der Insulin-Vesikel. Dieser Mechanismus erklärt, warum **Sulfonylharnstoffe** (z. B. Glibenclamid) bei Typ-2-DM wirken: Sie blockieren K_ATP-Kanäle direkt → Insulin-Freisetzung ↑ (unabhängig von Glukose).

**Insulinwirkung (anabol, blutzuckersenkend):**
- **Muskel + Fettgewebe:** GLUT4-Translokation zur Zellmembran → Glukoseaufnahme ↑ (GLUT4 ist insulinabhängig — im Gegensatz zu GLUT2 in Leber und β-Zellen)
- **Leber:** Glykogensynthase ↑ → Glykogensynthese ↑, Glukoneogenese ↓
- **Fettgewebe:** Lipogenese ↑, Lipolyse ↓
- **Muskel:** Proteinsynthese ↑, Aminosäureaufnahme ↑

**Glukagonwirkung (katabol, blutzuckersteigernd):**
- **Leber (Hauptzielorgan):** Glykogenolyse ↑ (Glykogenphosphorylase ↑), Glukoneogenese ↑ (PEPCK ↑)
- Glukagon wirkt über Gs-Protein → cAMP ↑ → Proteinkinase A
- **Nicht** an Muskel/Fettgewebe (dort kein Glukagonrezeptor in relevantem Ausmaß)

**Diabetes mellitus:**
- **Typ 1:** Autoimmune β-Zell-Zerstörung (Autoantikörper: GAD, IA-2, IAA) → absoluter Insulinmangel → Ketoacidose-Gefahr (Lipolyse ↑↑ → Ketonkörper ↑↑). Therapie: lebenslange Insulinsubstitution
- **Typ 2:** Insulinresistenz (v. a. Muskel, Fettgewebe, Leber) + relative β-Zell-Erschöpfung → Hyperglykämie. Assoziation mit Adipositas, metabolischem Syndrom. Therapie: Lebensstil, Metformin, ggf. Sulfonylharnstoffe oder Insulin

> **Merke:** Insulin (β-Zellen, postprandial): GLUT4 ↑ (Muskel/Fett), Glykogensynthese ↑, Lipolyse ↓ → Blutzucker ↓. Glukagon (α-Zellen, Fasten): Glykogenolyse ↑, Glukoneogenese ↑ → Blutzucker ↑. Insulinsekretion ist ATP- und Ca²⁺-abhängig (K_ATP-Kanal-Mechanismus). Typ 1 = absoluter Mangel (autoimmun), Typ 2 = relativer Mangel + Resistenz.

---

## Kalziumregulation: PTH, Calcitonin und Vitamin D

Der Serum-Kalziumspiegel (~2,2–2,6 mmol/L) wird durch drei Hormone eng reguliert — Abweichungen führen zu Tetanie (↓) oder Herzrhythmusstörungen (↑):

**Parathormon (PTH)** — Nebenschilddrüsen (4 Epithelkörperchen, Glandulae parathyroideae): Wird bei **Ca²⁺ ↓** freigesetzt (Ca²⁺-sensing Receptor, CaSR). Wirkt auf drei Zielorgane:
- **Knochen:** Stimuliert Osteoklasten (indirekt über RANKL-Signalweg) → Ca²⁺-Freisetzung ↑
- **Niere:** Ca²⁺-Rückresorption ↑ im distalen Tubulus, PO₄³⁻-Ausscheidung ↑, Aktivierung der 1α-Hydroxylase → Vitamin-D-Aktivierung ↑
- **Darm (indirekt):** Über Calcitriol → Ca²⁺-Resorption ↑
- Nettoeffekt: **Serum-Ca²⁺ ↑**

**Calcitonin** — C-Zellen (parafollikuläre Zellen der Schilddrüse): Wird bei **Ca²⁺ ↑** freigesetzt. Hemmt Osteoklasten → Knochenresorption ↓ → Ca²⁺ ↓. Klinisch weniger bedeutsam als PTH, aber: erhöhtes Calcitonin = Tumormarker für medulläres Schilddrüsenkarzinom (C-Zell-Karzinom).

**Vitamin D (Calcitriol, 1,25-(OH)₂-Vitamin D₃):** Eigentlich ein Steroidhormon. Aktivierung in 3 Schritten: UV-B in Haut (7-Dehydrocholesterol → Cholecalciferol) → 25-Hydroxylierung in Leber → **1α-Hydroxylierung in Niere** (PTH-stimuliert!) → aktives Calcitriol. Steigert Ca²⁺- und Phosphat-Resorption im Darm (Calbindin-Expression ↑).

> **Merke:** PTH = Ca²⁺ ↑ (Knochenabbau, renale Rückresorption, Vitamin-D-Aktivierung). Calcitonin = Ca²⁺ ↓ (Osteoklasten ↓). Vitamin D = Ca²⁺ + PO₄³⁻ ↑ (Darmresorption). Hypoparathyreoidismus → Ca²⁺ ↓ → Tetanie (Chvostek-Zeichen, Pfötchenstellung). PTH und Vitamin D arbeiten synergistisch am Ca²⁺-Spiegel.

---

## Regelkreise und negative Rückkopplung

Das Grundprinzip des endokrinen Systems ist die **negative Rückkopplung** (negatives Feedback): Das Endprodukt einer Hormonachse hemmt die übergeordneten Zentren und drosselt so die eigene Produktion — ein Thermostat-Prinzip.

**Konkretes Beispiel — Schilddrüsenachse:**
1. Hypothalamus sezerniert **TRH** → stimuliert Hypophysenvorderlappen
2. Hypophyse sezerniert **TSH** → stimuliert Schilddrüse
3. Schilddrüse produziert **T₃/T₄** → Wirkung an Zielorganen
4. T₃/T₄ hemmen **TRH-Freisetzung** (Hypothalamus) und **TSH-Freisetzung** (Hypophyse) → Kreislauf geschlossen

**Diagnostische Konsequenz bei Störungen:**

| Störungsebene | Periphere Hormone | Trophes Hormon | Beispiel |
|---|---|---|---|
| **Primär** (periphere Drüse defekt) | ↓ | ↑ (kompensatorisch) | Hashimoto: T₃/T₄ ↓, TSH ↑ |
| **Sekundär** (Hypophyse defekt) | ↓ | ↓ | Hypophysenadenom: T₃/T₄ ↓, TSH ↓ |
| **Tertiär** (Hypothalamus defekt) | ↓ | ↓ | TRH-Mangel: TSH ↓, T₃/T₄ ↓ |

Dieses Schema ist auf **jede Hormonachse** übertragbar: CRH-ACTH-Cortisol, GnRH-LH/FSH-Sexualhormone, GHRH-GH-IGF-1. Die Unterscheidung primär/sekundär/tertiär durch Laborkonstellation ist ein Kernthema im MedAT.

**Positive Rückkopplung** (Ausnahme): Beim LH-Peak vor der Ovulation — hohe Östrogenspiegel in der späten Follikelphase stimulieren (statt hemmen) die LH-Freisetzung → LH-Surge → Eisprung. Danach kehrt das System zur negativen Rückkopplung zurück.

> **Merke:** Negative Rückkopplung = Endprodukt hemmt Hypothalamus + Hypophyse (Thermostat-Prinzip). Primäre Insuffizienz: periphere Drüse ↓ → trophes Hormon ↑ (z. B. Hashimoto: T₃/T₄ ↓, TSH ↑). Sekundäre Insuffizienz: Hypophyse ↓ → trophes Hormon ↓ → peripheres Hormon ↓. Positive Rückkopplung: LH-Surge vor Ovulation (Ausnahme).`,
      lernziele: [
        "Steroid- und Peptidhormone nach Löslichkeit, Rezeptorlokalisation und Wirkgeschwindigkeit unterscheiden und den Second-Messenger-Weg (cAMP) vs. Genexpressionsweg beschreiben.",
        "Die Hypothalamus-Hypophyse-Achse mit ihren Releasing-Hormonen (TRH, CRH, GnRH), trophen Hormonen (TSH, ACTH, LH/FSH) und peripheren Drüsenhormonen darstellen und das Prinzip der negativen Rückkopplung erklären.",
        "Die Schilddrüsenhormon-Biosynthese (Jodid-Aufnahme, Thyreoperoxidase, MIT/DIT-Kopplung zu T₃/T₄) beschreiben und die Unterschiede zwischen primärer und sekundärer Hypothyreose (TSH ↑ vs. TSH ↓) erklären.",
        "Die Wirkungen von Cortisol (Glukoneogenese ↑, Immunsuppression, Osteoporose-Risiko) und Adrenalin (Fight-or-Flight, α₁/β₁/β₂-Rezeptoren) auf ihre Zielgewebe beschreiben.",
        "Den Insulin-Sekretionsmechanismus (GLUT2, ATP-K⁺-Kanal, Ca²⁺, Exozytose) und die antagonistischen Wirkungen von Insulin (GLUT4, Glykogensynthese ↑) und Glukagon (Glykogenolyse ↑, Glukoneogenese ↑) auf den Blutzucker erklären.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über die Schilddrüsenhormone T₃ und T₄ ist korrekt?",
        options: [
          {
            id: "a",
            text: "T₄ (Thyroxin) ist biologisch aktiver als T₃ und wirkt direkt ohne periphere Konversion.",
          },
          {
            id: "b",
            text: "T₃ ist biologisch aktiver als T₄. Beide steigern den Grundumsatz und die Thermogenese. Die Regulation erfolgt über TRH → TSH → T₃/T₄ mit negativer Rückkopplung.",
          },
          {
            id: "c",
            text: "TSH wird im Hypothalamus gebildet und stimuliert direkt die Jodaufnahme in der Schilddrüse.",
          },
          { id: "d", text: "T₃ und T₄ hemmen den Grundumsatz und senken die Körpertemperatur." },
          {
            id: "e",
            text: "Die Schilddrüse produziert ausschließlich Calcitonin, nicht T₃ oder T₄.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "T₃ (Triiodthyronin) ist 3–5× potenter als T₄ (Thyroxin, Prohormon). T₄ wird peripher durch Dejodasen zu T₃ konvertiert. Wirkungen: Grundumsatz ↑, Thermogenese ↑, Wachstum/Entwicklung. Regulation: TRH (Hypothalamus) → TSH (Hypophyse) → T₃/T₄ → negative Rückkopplung auf TRH und TSH.",
      },
      selfTest: [
        {
          question: "Welche Aussage über die Klassifikation von Hormonen trifft zu?",
          options: [
            "Peptidhormone wie Insulin wirken über intrazelluläre Rezeptoren und regulieren die Genexpression direkt.",
            "Steroidhormone wie Cortisol sind hydrophil und benötigen Membranrezeptoren für ihre Wirkung.",
            "Peptidhormone wirken über Membranrezeptoren und Second Messenger wie cAMP, während Steroidhormone die Genexpression direkt beeinflussen.",
            "Alle Aminosäurederivate wie T₃/T₄ und Adrenalin wirken ausschließlich über G-Protein-gekoppelte Rezeptoren.",
            "Steroidhormone wirken schneller als Peptidhormone, da sie die Zellmembran direkt passieren können.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Peptidhormone (z. B. Insulin, Glukagon, ACTH) sind **hydrophil** und können die Zellmembran nicht passieren → wirken über **Membranrezeptoren** (G-Protein oder Tyrosinkinase) → **Second Messenger** (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (z. B. Cortisol, Östrogen, Testosteron) sind **lipophil** → passieren Membran → binden an **intrazelluläre Rezeptoren** im Zellkern → Hormon-Rezeptor-Komplex → DNA-Bindung → **Genexpression** ↑/↓ → langsame Wirkung (Stunden).\n\n**Falsch (A):** Insulin ist ein Peptidhormom und wirkt über **Membranrezeptoren** (Tyrosinkinase), nicht intrazellulär.\n\n**Falsch (B):** Cortisol ist **lipophil**, nicht hydrophil, und wirkt über **intrazelluläre Rezeptoren**, nicht Membranrezeptoren.\n\n**Falsch (D):** T₃/T₄ sind **lipophile** Aminosäurederivate und wirken über **intrazelluläre Rezeptoren** (wie Steroidhormone), nicht über G-Protein-gekoppelte Rezeptoren. Adrenalin ist hydrophil und wirkt über G-Protein-gekoppelte Rezeptoren.\n\n**Falsch (E):** Steroidhormone wirken **langsamer** (Stunden), da Genexpression Zeit benötigt. Peptidhormone wirken **schneller** (Minuten) über Second Messenger.",
          difficulty: 1,
          tags: ["hormone", "steroidhormone", "peptidhormone"],
        },
        {
          question:
            "Ein Patient mit Hypothyreose zeigt erhöhte TSH-Werte und erniedrigte T₃/T₄-Werte. Welche Aussage über die zugrundeliegende Störung trifft zu?",
          options: [
            "Es handelt sich um eine sekundäre Hypothyreose, da die Hypophyse überaktiv ist.",
            "Es liegt eine primäre Hypothyreose vor, bei der die Schilddrüse selbst geschädigt ist und die negative Rückkopplung wegfällt.",
            "Die erhöhten TSH-Werte zeigen eine Hyperthyreose an, die durch Morbus Basedow verursacht wird.",
            "Die negative Rückkopplung ist intakt, sodass T₃/T₄ TSH hemmen und die Werte im Normalbereich liegen.",
            "Die Ursache ist ein TRH-Mangel im Hypothalamus, der zu kompensatorisch erhöhtem TSH führt.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Bei **primärer Hypothyreose** ist die **Schilddrüse** selbst geschädigt (z. B. Hashimoto-Thyreoiditis, Jodmangel, chirurgische Entfernung) → T₃/T₄ ↓ → **negative Rückkopplung fällt weg** → Hypothalamus/Hypophyse produzieren kompensatorisch **TRH ↑, TSH ↑**. Typische Laborkonstellation: **TSH ↑, T₃/T₄ ↓**.\n\n**Falsch (A):** Bei **sekundärer Hypothyreose** ist die Hypophyse geschädigt (z. B. Tumor, Hypophysitis) → **TSH ↓** → T₃/T₄ ↓. Die Hypophyse ist **nicht** überaktiv, sondern **unteraktiv**. Konstellation: **TSH ↓, T₃/T₄ ↓**.\n\n**Falsch (C):** Erhöhte TSH-Werte und erniedrigte T₃/T₄-Werte sprechen für **Hypothyreose**, nicht Hyperthyreose. Bei Morbus Basedow (TSH-Rezeptor-Antikörper) → T₃/T₄ ↑, TSH ↓.\n\n**Falsch (D):** Die negative Rückkopplung ist **nicht** intakt, da T₃/T₄ ↓ sind und TSH ↑ ist (keine Hemmung).\n\n**Falsch (E):** TRH-Mangel (tertiäre Hypothyreose, Hypothalamus-Störung) führt zu **TSH ↓** (nicht ↑), da der Stimulus für die Hypophyse fehlt. Konstellation: **TRH ↓, TSH ↓, T₃/T₄ ↓**.",
          difficulty: 2,
          tags: ["hypothyreose", "tsh", "schilddrüse"],
        },
        {
          question:
            "Welche Aussage über die Biosynthese und Wirkung von Schilddrüsenhormonen ist korrekt?",
          options: [
            "T₄ ist biologisch aktiver als T₃ und wird direkt in den Thyreozyten aus Thyreoglobulin freigesetzt.",
            "Thyreoperoxidase (TPO) jodiert Tyrosin-Reste in Thyreoglobulin, wobei die Kopplung von 2×DIT zu T₄ führt.",
            "T₃ und T₄ wirken über G-Protein-gekoppelte Rezeptoren an der Zellmembran und aktivieren cAMP als Second Messenger.",
            "Bei Jodmangel sinkt TSH, da die Schilddrüse weniger T₃/T₄ produziert und die negative Rückkopplung verstärkt wird.",
            "Schilddrüsenhormone hemmen den Grundumsatz und senken die Herzfrequenz durch β-Rezeptor-Downregulation.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Die **Biosynthese** erfolgt in mehreren Schritten:\n1. Jodid-Aufnahme (NIS)\n2. **Thyreoperoxidase (TPO)** oxidiert Jodid → Jod → **jodiert Tyrosin-Reste** in Thyreoglobulin (TG) → **Monojodtyrosin (MIT)** und **Dijodtyrosin (DIT)**\n3. **Kopplung:** **2×DIT → T₄** (4 Jod-Atome), **MIT + DIT → T₃** (3 Jod-Atome)\n4. TG-Endozytose → Proteolyse → T₃/T₄-Freisetzung.\n\n**Falsch (A):** **T₃** ist 3–5× **potenter** (biologisch aktiver) als T₄. T₄ ist das **Prohormon** und wird peripher durch Dejodierung zu T₃ konvertiert.\n\n**Falsch (C):** T₃/T₄ sind **lipophile** Aminosäurederivate und wirken über **intrazelluläre Rezeptoren** im Zellkern (ähnlich Steroidhormonen) → Genexpression ↑. Sie wirken **nicht** über Membranrezeptoren/cAMP.\n\n**Falsch (D):** Bei **Jodmangel** → T₃/T₄ ↓ → **TSH ↑** (kompensatorisch, negative Rückkopplung fällt weg) → **Struma** (Kropf durch TSH-Stimulation).\n\n**Falsch (E):** Schilddrüsenhormone **steigern** den Grundumsatz (Stoffwechsel ↑, Sauerstoffverbrauch ↑, Wärmeproduktion ↑) und **erhöhen** die Herzfrequenz durch **β-Rezeptor-Upregulation** (nicht Downregulation).",
          difficulty: 2,
          tags: ["schilddrüsenhormone", "t3 t4", "jod"],
        },
        {
          question:
            "Ein Patient unter chronischer Corticosteroid-Therapie entwickelt ein Cushing-Syndrom. Welche der folgenden Aussagen über Cortisol trifft zu?",
          options: [
            "Cortisol hemmt die Glukoneogenese in der Leber und senkt den Blutzuckerspiegel.",
            "Cortisol steigert die Glukoneogenese, wirkt antiinflammatorisch durch Hemmung der Phospholipase A₂ und erhöht das Osteoporose-Risiko durch Hemmung der Osteoblasten.",
            "Cortisol wird im Nebennierenmark durch PNMT aus Noradrenalin synthetisiert.",
            "Die negative Rückkopplung von Cortisol führt zu erhöhten CRH- und ACTH-Werten bei chronischer Substitution.",
            "Cortisol stimuliert das Immunsystem und fördert Entzündungsreaktionen durch Prostaglandin-Synthese.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Cortisol hat vielfältige Wirkungen:\n\n**Metabolisch:**\n- **Leber:** **Glukoneogenese ↑** → Blutzucker ↑ (diabetogene Wirkung)\n- **Muskel/Fett:** Proteinkatabolismus ↑, Lipolyse ↑\n\n**Immunsuppressiv/antiinflammatorisch:**\n- **Phospholipase A₂ ↓** → Arachidonsäure ↓ → **Prostaglandine ↓, Leukotriene ↓** → Entzündung ↓\n- Lymphozyten ↓, Zytokine ↓\n\n**Knochen:**\n- **Osteoblasten ↓** → Knochenaufbau ↓ → **Osteoporose-Risiko ↑** (bei chronischer Therapie)\n\n**Klinisch (Cushing-Syndrom):** Stammfettsucht, Vollmondgesicht, Striae, Hyperglykämie, Osteoporose, Immunsuppression.\n\n**Falsch (A):** Cortisol **steigert** die Glukoneogenese (nicht hemmt) und **erhöht** den Blutzucker (diabetogene Wirkung).\n\n**Falsch (C):** Cortisol ist ein **Glukokortikoid** und wird in der **Nebennierenrinde (Zona fasciculata)** aus Cholesterin synthetisiert, **nicht** im Mark. **Adrenalin** (nicht Cortisol) wird im Nebennierenmark durch PNMT aus Noradrenalin synthetisiert.\n\n**Falsch (D):** Bei chronischer Cortisol-Substitution (exogen) → **CRH ↓, ACTH ↓** (negative Rückkopplung intakt). Langfristig kann dies zur **Nebennierenrinden-Atrophie** führen.\n\n**Falsch (E):** Cortisol ist **immunsuppressiv** und **antiinflammatorisch** (hemmt Prostaglandine, nicht fördert). Es wird therapeutisch bei Autoimmunerkrankungen, Allergien und Transplantationen eingesetzt.",
          difficulty: 2,
          tags: ["cortisol", "cushing-syndrom", "kortikosteroide"],
        },
        {
          question:
            "Welche Aussage über die Regulation des Blutzuckerspiegels durch Insulin und Glukagon ist korrekt?",
          options: [
            "Insulin wird von α-Zellen der Langerhans-Inseln freigesetzt und fördert die Glykogenolyse in der Leber.",
            "Glukagon stimuliert die GLUT4-Translokation in Muskel- und Fettzellen, um die Glukoseaufnahme zu erhöhen.",
            "Insulin fördert die Translokation von GLUT4-Transportern zur Zellmembran in Muskel- und Fettzellen und steigert die Glykogensynthese in der Leber.",
            "Glukagon senkt den Blutzucker durch Hemmung der Glukoneogenese und Aktivierung der Glykogensynthase.",
            "Die Insulin-Freisetzung erfolgt unabhängig von ATP-Spiegeln in β-Zellen durch direkte Ca²⁺-Aktivierung.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Insulin** (β-Zellen, 65–80% der Langerhans-Inseln) senkt den Blutzucker durch:\n\n**1. Glukoseaufnahme ↑:**\n- **Skelettmuskel + Fettgewebe:** Insulin → **GLUT4-Translokation** zur Zellmembran → Glukoseaufnahme ↑\n- (Leber hat GLUT2, insulinunabhängig)\n\n**2. Glykogensynthese ↑:**\n- **Leber:** Insulin → **Glykogensynthase ↑** → Glukose → Glykogen (Speicherung)\n- Glukoneogenese ↓\n\n**3. Anabole Wirkungen:**\n- Fettgewebe: Lipogenese ↑, Lipolyse ↓\n- Muskel: Proteinsynthese ↑\n\n**Falsch (A):** Insulin wird von **β-Zellen** (nicht α-Zellen) freigesetzt. α-Zellen produzieren **Glukagon**. Insulin **hemmt** die Glykogenolyse (nicht fördert), Glukagon fördert sie.\n\n**Falsch (B):** **Glukagon** (nicht Insulin) wirkt hauptsächlich auf die **Leber** (nicht Muskel/Fett) und fördert **Glykogenolyse + Glukoneogenese** (nicht GLUT4-Translokation). Glukagon **erhöht** den Blutzucker.\n\n**Falsch (D):** Glukagon **erhöht** den Blutzucker (nicht senkt) durch:\n- **Glykogenolyse ↑** (Glykogenphosphorylase ↑)\n- **Glukoneogenese ↑** (PEPCK ↑, F-1,6-BP ↑)\n- Glykogensynthase wird **gehemmt** (nicht aktiviert).\n\n**Falsch (E):** Insulin-Freisetzung ist **ATP-abhängig**:\n1. Glukose ↑ → GLUT2 → β-Zelle\n2. Glykolyse → **ATP ↑**\n3. **ATP-sensitive K⁺-Kanäle schließen** → Depolarisation\n4. Ca²⁺-Kanäle öffnen → Ca²⁺ ↑ → Exozytose.",
          difficulty: 2,
          tags: ["insulin", "glukagon", "blutzucker"],
        },
      ],

      merksätze: [
        "**Hormonklassen & Rezeptoren:** Peptidhormone (Insulin, GH, ACTH) = hydrophil → Membranrezeptoren (Tyrosinkinase, G-Protein) → Second Messenger (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (Cortisol, Testosteron, Östrogen) + T₃/T₄ = lipophil → intrazelluläre Rezeptoren → Genexpression → langsame Wirkung (Stunden).",
        "**Hypothalamus-Hypophysen-Regelkreis:** Hypothalamus (TRH, CRH, GnRH, GHRH) → Hypophyse (TSH, ACTH, LH/FSH, GH) → periphere Drüse (T₃/T₄, Cortisol, Östrogen/Testosteron) → **negative Rückkopplung** hemmt Hypothalamus + Hypophyse. Primäre Insuffizienz: periphere Drüse ↓ → trophe Hormone ↑.",
        "**Schilddrüsenhormone:** T₃ (aktiv, 3 Jod) + T₄ (Prohormon, 4 Jod, peripher → T₃). TPO jodiert Tyrosin in Thyreoglobulin: MIT + DIT → T₃, 2×DIT → T₄. Wirkung: Grundumsatz ↑, Herzfrequenz ↑ (β-Rezeptor-Upregulation), Genexpression ↑. TSH stimuliert (TRH-abhängig). Hashimoto → T₃/T₄ ↓, TSH ↑.",
        "**Cortisol (Zona fasciculata):** CRH (Hypothalamus) → ACTH (Hypophyse) → Cortisol (NNR). Wirkung: Glukoneogenese ↑, Immunsuppression (Phospholipase A₂ ↓ → PG ↓), Osteoblasten ↓ (Osteoporose). Cushing: Cortisol ↑ (exogen oder Adenom) → Stammfettsucht, Vollmondgesicht, Hyperglykämie. Addison: NNR-Insuffizienz → Cortisol ↓, ACTH ↑ → Hyperpigmentierung.",
        "**Insulin vs. Glukagon:** Insulin (β-Zellen, nach Mahlzeit): GLUT4-Translokation ↑ (Muskel/Fett), Glykogensynthese ↑ (Leber), Lipolyse ↓, Proteinaufbau ↑ → Blutzucker ↓. Glukagon (α-Zellen, Fasten): Glykogenolyse ↑, Glukoneogenese ↑ → Blutzucker ↑. Typ-1-DM: β-Zell-Zerstörung. Typ-2-DM: Insulinresistenz + relativer Mangel.",
        "**Aldosteron & ADH:** Aldosteron (Zona glomerulosa, RAAS): Na⁺ + H₂O ↑, K⁺ ↓ → Volumen ↑, Blutdruck ↑. Conn: Aldosteron ↑ → Hypertonie, Hypokaliämie. ADH/Vasopressin (Hypophyse, Osmoregulation): AQP2-Insertion → H₂O-Resorption ↑ (Sammelrohr). SIADH: ADH ↑ → Hyponatriämie. Diabetes insipidus: ADH ↓ → Polyurie.",
        "**Kalzium-Regulation:** PTH (Nebenschilddrüse): Ca²⁺ ↑ (Knochenresorption ↑, renale Ca²⁺-Rückresorption ↑, Vitamin-D-Aktivierung ↑). Calcitonin (C-Zellen, Schilddrüse): Ca²⁺ ↓ (Osteoklasten ↓). Vitamin D (1,25-OH₂-VD₃ Calcitriol): Ca²⁺ + PO₄³⁻ -Resorption ↑ (Darm). Hypoparathyreoidismus: Ca²⁺ ↓ → Tetanie, Chvostek-Zeichen.",
        "**Nebennierenmark:** Chromaffine Zellen → Adrenalin (80%) + Noradrenalin (20%) unter sympathischer Stimulation. Adrenalin: β₁ (Herz ↑), β₂ (Bronchodilatation, Vasodilatation Skelettmuskulatur, Glykogenolyse Leber), α₁ (Vasokonstriktion). Phäochromozytom: Katecholamin-produzierender Tumor → Hypertonie (episodisch), Tachykardie, Hyperglykämie.",
        "**Sexualhormone-Regelkreis:** GnRH (pulsatil) → LH + FSH (Hypophyse). LH: Testosteron (Leydig-Zellen) + Ovulation + Corpus luteum. FSH: Spermatogenese (Sertoli) + Follikelreifung. Östrogen + Testosteron → negative Rückkopplung. Menopause: Östrogen ↓ → FSH ↑, LH ↑ (fehlende Rückkopplung). Hypogonadismus: GnRH ↓ → LH/FSH ↓.",
        "**Insulin-Sekretionsmechanismus:** Glukose → GLUT2 (β-Zelle) → Glykolyse → ATP ↑ → ATP-sensitive K⁺-Kanäle (K_ATP) schließen → Depolarisation → Ca²⁺-Kanäle öffnen → Ca²⁺ ↑ → Exozytose von Insulin-Vesikeln. Sulfonylharnstoffe (Glibenclamid) blockieren K_ATP → Insulin ↑ (Typ-2-DM-Therapie).",
      ],
      klinischerBezug:
        "Diabetes mellitus ist die häufigste endokrine Erkrankung: Typ 1 (autoimmune β-Zell-Zerstörung, Insulinmangel absolut, Ketoacidose-Gefahr) vs. Typ 2 (Insulinresistenz + relativer Mangel, Adipositas, Metabolisches Syndrom). Hypothyreose (Hashimoto-Thyreoiditis, häufigste Autoimmunerkrankung): TSH ↑, T₃/T₄ ↓ → Müdigkeit, Kälteintoleranz, Gewichtszunahme, Bradykardie; Therapie: L-Thyroxin. Hyperthyreose (Morbus Basedow: TSH-Rezeptor-Antikörper): TSH ↓, T₃/T₄ ↑ → Tachykardie, Gewichtsabnahme, Exophthalmus; Therapie: Thionamide (Thiamazol). Cushing-Syndrom (Cortisol ↑): Stammfettsucht, Vollmondgesicht, Striae rubrae, Hyperglykämie, Osteoporose, Immunsuppression. Morbus Addison (NNR-Insuffizienz): Hypotonie, Hyponatriämie, Hyperkaliämie, Hyperpigmentierung (ACTH ↑ → MSH-Effekt). Conn-Syndrom (Aldosteron ↑): Hypertonie, Hypokaliämie, metabolische Alkalose.",
    },
    {
      id: "bio-3-04",
      title: "Herz-Kreislauf-System",
      imageUrl: "/images/wiki-heart-anatomy-de.svg",
      imageCaption:
        "Abb.: Herz-Kreislauf-System mit großem und kleinem Kreislauf (OpenStax, CC BY 4.0)",
      stichworte: [
        "Herzaufbau",
        "Erregungsleitung",
        "Blutkreislauf",
        "Blutdruck",
        "Herzklappen",
        "Sinusknoten",
        "Diastole",
        "Systole",
      ],
      content: `## Das Herz — Aufbau, Erregung und Kreislauf

{{IMAGE}}

Ein 70-jähriger Patient kollabiert beim Einkaufen. Das EKG zeigt eine ST-Hebung in den Ableitungen II, III und aVF — ein akuter Hinterwandinfarkt. Innerhalb von 60 Minuten muss die verschlossene rechte Koronararterie mittels PCI (perkutane Koronarintervention) eröffnet werden, sonst stirbt Herzmuskelgewebe unwiederbringlich ab. Um solche Notfälle zu verstehen, brauchen wir ein solides Fundament: den Aufbau des Herzens, seine elektrische Erregung und die Kreislaufphysiologie.

---

## Herzaufbau: 4 Kammern, 3 Wandschichten, 1 Beutel

Das Herz ist ein muskuläres Hohlorgan (~300 g, faustgroß) im Mediastinum (Mittelfellraum), leicht nach links verlagert. Es besteht aus:

- **Rechter Vorhof (RA)**: Empfängt O₂-armes Blut über obere und untere Hohlvene (V. cava superior/inferior)
- **Rechter Ventrikel (RV)**: Pumpt O₂-armes Blut in den Truncus pulmonalis → Lunge
- **Linker Vorhof (LA)**: Empfängt O₂-reiches Blut über 4 Lungenvenen (Vv. pulmonales)
- **Linker Ventrikel (LV)**: Pumpt O₂-reiches Blut in die Aorta → Körperkreislauf

**Wandschichten** (von innen nach außen):
1. **Endokard** — Endothel + subendotheliales Bindegewebe (glatte Innenfläche → Thromboseprophylaxe)
2. **Myokard** — Herzmuskulatur (quergestreifte Muskelzellen mit Gap Junctions = funktionelles Synzytium)
3. **Epikard** — viszerales Blatt des Perikards (seröse Gleitfläche)

Der **Herzbeutel (Perikard)** umgibt das Herz: Epikard (innen) + parietales Blatt (außen) mit der Perikardhöhle dazwischen (~20–50 mL seröse Flüssigkeit → reibungsarme Herzaktion). Bei einer **Herzbeuteltamponade** füllt sich die Perikardhöhle mit Blut/Flüssigkeit → Kompression → Herzstillstand.

**Wanddicke und Druckverhältnisse:**
Der LV hat eine ~3× dickere Wand (~10–15 mm) als der RV (~3–5 mm), weil er gegen den hohen Systemwiderstand pumpt (~120 mmHg systolisch vs. ~25 mmHg im Lungenkreislauf).

**Koronargefäße** versorgen den Herzmuskel selbst:
- **Linke Koronararterie (LCA)** → R. interventricularis anterior (RIVA/LAD, Vorderwand) + R. circumflexus (RCX, Seitenwand)
- **Rechte Koronararterie (RCA)** → Hinterwand + SA-Knoten (bei ~60% der Menschen)

> **Merke:** Wandschichten von innen nach außen: **E**ndokard – **M**yokard – **E**pikard (Eselsbrücke: **EME**). LV-Wand 3× dicker als RV, weil Systemdruck ~5× höher als Pulmonaldruck.

---

## Herzklappen: Ventile gegen Rückfluss

Vier Klappen sorgen für gerichteten Blutfluss. Sie öffnen und schließen rein passiv durch Druckgradienten:

| Klappe | Typ | Lage | Besonderheit |
|---|---|---|---|
| **Trikuspidalklappe** | AV-Klappe | RA → RV | 3 Segel, Sehnenfäden + Papillarmuskeln |
| **Mitralklappe** (Bikuspidal) | AV-Klappe | LA → LV | 2 Segel, Sehnenfäden + Papillarmuskeln |
| **Pulmonalklappe** | Taschenklappe | RV → Truncus pulmonalis | 3 Taschen, **keine** Sehnenfäden |
| **Aortenklappe** | Taschenklappe | LV → Aorta | 3 Taschen, **keine** Sehnenfäden |

**AV-Klappen** (Atrioventrikulärklappen) besitzen **Sehnenfäden (Chordae tendineae)**, die an **Papillarmuskeln** befestigt sind. Diese verhindern bei Ventrikelsystole, dass die Segel in den Vorhof zurückschlagen (Prolaps). **Taschenklappen** haben keine Sehnenfäden — sie schließen passiv, wenn der Druck in Aorta/Pulmonalarterie den Ventrikeldruck übersteigt.

**Herztöne:** Der 1. Herzton (systolisch) entsteht durch Schluss der AV-Klappen, der 2. Herzton (diastolisch) durch Schluss der Taschenklappen. Pathologische Geräusche (Herzgeräusche) deuten auf **Klappenstenosen** (verengt) oder **Klappeninsuffizienzen** (undicht) hin.

> **Merke:** AV-Klappen = Sehnenfäden (verhindern Prolaps): Trikuspidal **3** Segel, Mitral **2** Segel. Taschenklappen = **keine** Sehnenfäden, passiv: Pulmonal + Aorta je **3** Taschen.

---

## Herzzyklus: Systole und Diastole

Nachdem wir den Aufbau kennen, betrachten wir die mechanische Herzaktion. Ein Herzzyklus (~0,8 s bei 75/min) gliedert sich in:

**Systole** (Kontraktionsphase, ~0,3 s):
1. **Anspannungsphase** (isovolumetrisch): Alle Klappen geschlossen, Ventrikeldruck steigt steil an
2. **Austreibungsphase**: Ventrikeldruck übersteigt Aorten-/Pulmonaldruck → Taschenklappen öffnen → Blutauswurf

**Diastole** (Entspannungsphase, ~0,5 s):
1. **Entspannungsphase** (isovolumetrisch): Taschenklappen schließen (2. Herzton), alle Klappen zu, Ventrikeldruck fällt
2. **Füllungsphase**: Ventrikeldruck < Vorhofdruck → AV-Klappen öffnen → passive Füllung (~80%) + aktive Vorhofkontraktion (~20%, „Vorhof-Kick")

**Volumina:**
- Enddiastolisches Volumen (EDV): ~120–130 mL
- Endsystolisches Volumen (ESV): ~50–60 mL
- **Schlagvolumen (SV)** = EDV − ESV ≈ **70 mL**
- **Ejektionsfraktion (EF)** = SV/EDV ≈ **55–70%** (unter 40% = systolische Herzinsuffizienz)

> **Merke:** Systole = Anspannung + Austreibung. Diastole = Entspannung + Füllung. EF = SV/EDV ≈ 55–70%. Diastole dauert länger als Systole — deshalb wird der Herzmuskel hauptsächlich in der Diastole durchblutet (Koronarperfusion!).

---

## Erregungsleitungssystem: Vom Impuls zur Kontraktion

Das Herz schlägt **autonom** — auch ohne Nervenversorgung, weil spezialisierte Schrittmacherzellen spontan depolarisieren. Die Erregung breitet sich in festgelegter Reihenfolge aus:

1. **SA-Knoten** (Sinusknoten) — rechter Vorhof, nahe V. cava superior
   - **Primärer Schrittmacher**, Eigenfrequenz **60–80/min**
   - Spontane diastolische Depolarisation durch If-Kanäle (HCN-Kanäle, „funny current")

2. **Vorhofmuskulatur** — Erregungsausbreitung über Gap Junctions → Vorhofkontraktion (P-Welle im EKG)

3. **AV-Knoten** (Atrioventrikulärknoten) — am Boden des RA, nahe Koronarsinus
   - **Einzige elektrische Verbindung** zwischen Vorhöfen und Kammern (Herzskelett isoliert sonst!)
   - **Verzögerung ~100–120 ms** → Vorhöfe haben Zeit, sich vollständig zu entleeren, bevor Kammern kontrahieren
   - Sekundärer Schrittmacher, Eigenfrequenz **40–60/min** (Backup bei SA-Ausfall)

4. **His-Bündel** → **Tawara-Schenkel** (rechter + linker Schenkel entlang Kammerseptum)

5. **Purkinje-Fasern** — schnellste Leitung (~4 m/s), verteilen die Erregung von der **Herzspitze → Basis**
   - Tertiärer Schrittmacher, Eigenfrequenz **20–40/min**
   - Dadurch kontrahieren die Kammern von unten nach oben → effiziente Blutaustreibung Richtung Aorta/Truncus pulmonalis

**Klinisch — Herzrhythmusstörungen:**
- **AV-Block I°**: PQ-Zeit verlängert (>200 ms), jede Erregung wird übergeleitet
- **AV-Block III°** (komplett): Vorhöfe und Kammern schlagen unabhängig → Bradykardie → Schrittmacher-Indikation
- **Vorhofflimmern**: Unkoordinierte Vorhoferregung, unregelmäßiger QRS → Thromboembolie-Risiko → Antikoagulation

> **Merke:** SA-Knoten (60–80/min) → AV-Knoten (Verzögerung, 40–60/min) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern (20–40/min, Spitze → Basis). Frequenz-Hierarchie: Der schnellste Schrittmacher dominiert!

![Erregungsleitungssystem des Herzens](/images/wiki-cardiac-conduction-de.svg)

---

## EKG-Grundlagen: P-QRS-T

Das Elektrokardiogramm zeichnet die elektrische Aktivität des Herzens an der Körperoberfläche auf:

| Abschnitt | Entspricht | Normwert |
|---|---|---|
| **P-Welle** | Vorhofdepolarisation (SA → Vorhöfe) | <0,1 s, <0,25 mV |
| **PQ-Strecke** | AV-Überleitung (Verzögerung) | 0,12–0,20 s |
| **QRS-Komplex** | Ventrikeldepolarisation | <0,12 s |
| **ST-Strecke** | Plateau-Phase (alle Ventrikelmyozyten depolarisiert) | Isoelektrisch |
| **T-Welle** | Ventrikelrepolarisation | Konkordant zu QRS |

**ST-Hebung** → akuter Myokardinfarkt (STEMI): Transmuraler Schaden durch Koronarverschluss.
**QRS >0,12 s** → Schenkelblock (Rechts- oder Linksschenkelblock).
**Kammerflimmern** → chaotische Ventrikelerregung, kein Auswurf → Kreislaufstillstand → sofortige **Defibrillation**.

> **Merke:** PQ-Zeit = AV-Überleitung (normal <0,2 s; verlängert = AV-Block). QRS = Ventrikeldepolarisation (<0,12 s). ST-Hebung = Infarkt-Alarmzeichen!

---

## Großer und kleiner Kreislauf

Die beiden Kreisläufe sind **in Serie geschaltet** — das Blut muss zwingend durch beide:

**Kleiner Kreislauf (Lungenkreislauf):**
RV → Truncus pulmonalis → **Lungenarterien** (O₂-arm!) → Lungenkapillaren (Gasaustausch an Alveolen: CO₂ ab, O₂ auf) → **Lungenvenen** (O₂-reich!) → LA

**Großer Kreislauf (Körperkreislauf):**
LV → Aorta → Arterien → Arteriolen → Kapillaren (Stoffaustausch) → Venolen → Venen → V. cava superior/inferior → RA

**Achtung — häufige Prüfungsfalle:** „Arterie" bedeutet **vom Herzen weg**, „Vene" bedeutet **zum Herzen hin** — unabhängig vom O₂-Gehalt! Lungenarterien führen O₂-armes, Lungenvenen O₂-reiches Blut.

**Gefäßtypen und ihre Funktionen:**

| Gefäß | Funktion | Merkmal |
|---|---|---|
| **Aorta/große Arterien** | Windkesselfunktion | Elastische Wand → pulsatil → kontinuierlich |
| **Arteriolen** | Widerstandsgefäße | Glatte Muskulatur, TPR-Regulation (α₁ = Konstriktion) |
| **Kapillaren** | Stoffaustausch | Einschichtiges Endothel, ~600 m² Oberfläche |
| **Venen** | Kapazitätsgefäße | ~70% des Blutvolumens, Klappen in Beinvenen |

Die **Windkesselfunktion** der Aorta ist zentral: In der Systole dehnt sich die elastische Aortenwand → speichert kinetische Energie. In der Diastole zieht sie sich zurück → drückt Blut kontinuierlich in die Peripherie. Ergebnis: Der pulsatile Herzauswurf wird in einen gleichmäßigeren peripheren Fluss umgewandelt.

> **Merke:** Kleiner Kreislauf = RV → Lunge → LA (Gasaustausch, niedriger Druck ~25 mmHg). Großer Kreislauf = LV → Körper → RA (Stoffaustausch, hoher Druck ~120 mmHg). In Serie, nicht parallel!

---

## Herzzeitvolumen und Regulation

Das **Herzzeitvolumen (HZV, Cardiac Output)** beschreibt, wie viel Blut das Herz pro Minute pumpt:

**HZV = Schlagvolumen (SV) × Herzfrequenz (HF)**
- Ruhe: ~70 mL × 75/min = **~5 L/min**
- Belastung: bis **25 L/min** (SV ↑ + HF ↑)

**Regulation des Schlagvolumens:**

1. **Frank-Starling-Mechanismus** (intrinsisch, Preload-abhängig):
   - Vermehrter venöser Rückstrom → stärkere Ventrikelvordehnung (Preload ↑) → Sarkomere in optimaler Überlappung → Kontraktionskraft ↑ → SV ↑
   - Klinisch: Beide Ventrikel gleichen ihre Auswurfleistung automatisch an — sonst würde sich Blut in einem Kreislauf stauen

2. **Sympathikus** (extrinsisch): Noradrenalin an β₁-Rezeptoren → **positiv inotrop** (Kontraktionskraft ↑), **positiv chronotrop** (HF ↑), **positiv dromotrop** (Überleitungsgeschwindigkeit ↑)

3. **Parasympathikus** (N. vagus): Acetylcholin an M₂-Rezeptoren am SA-/AV-Knoten → **negativ chronotrop** (HF ↓), **negativ dromotrop** (AV-Überleitung ↓). **Kein relevanter Einfluss auf Kontraktionskraft der Ventrikel** (kaum parasympathische Innervation am Ventrikelmyokard).

**Afterload** (Nachlast): Widerstand, gegen den der Ventrikel pumpen muss. Bei Hypertonie → Afterload ↑ → LV muss mehr arbeiten → konzentrische Hypertrophie → langfristig Herzinsuffizienz.

> **Merke:** HZV = SV × HF (~5 L/min in Ruhe). Frank-Starling: Mehr Füllung → mehr Auswurf (intrinsisch). Sympathikus = β₁ = alles positiv (inotrop, chronotrop, dromotrop). Vagus = M₂ = HF ↓ (chronotrop negativ).

---

## Blutdruckregulation

Der **mittlere arterielle Blutdruck (MAP)** ergibt sich aus:

**MAP = HZV × TPR** (totaler peripherer Widerstand)

Normaler Blutdruck: **120/80 mmHg** (systolisch/diastolisch). Hypertonie: ≥140/90 mmHg.

**Kurzfristige Regulation (Sekunden–Minuten):**
- **Barorezeptor-Reflex**: Drucksensoren in Aortenbogen und Karotissinus messen Wanddehnung
  - RR ↑ → Barorezeptoren ↑ → Medulla oblongata → Parasympathikus ↑ (Vagus → HF ↓) + Sympathikus ↓ (Vasodilatation, HZV ↓) → RR ↓
  - RR ↓ → umgekehrt: Sympathikus ↑ → Vasokonstriktion + HF ↑ + Kontraktilität ↑ → RR ↑
- Anpassung bei Lagewechsel (Orthostase): Aufstehen → venöses Pooling in Beinen → Preload ↓ → HZV ↓ → Baroreflex kompensiert innerhalb von Sekunden

**Langfristige Regulation (Stunden–Tage):**
- **RAAS** (Renin-Angiotensin-Aldosteron-System):
  1. Niere erkennt Minderperfusion → **Renin** wird freigesetzt (juxtaglomeruläre Zellen)
  2. Renin spaltet Angiotensinogen (Leber) → **Angiotensin I**
  3. ACE (Angiotensin Converting Enzyme, v.a. Lunge) → **Angiotensin II**
  4. Angiotensin II: **Vasokonstriktion** (TPR ↑) + **Aldosteron-Freisetzung** (NNR) → Na⁺/H₂O-Retention → Volumen ↑ → RR ↑
  5. + ADH-Freisetzung (Hypothalamus/Neurohypophyse) → Wasserretention
- **ANP** (atriales natriuretisches Peptid): Bei Vorhofdehnung → Na⁺-Ausscheidung ↑ → Volumen ↓ → RR ↓ (Gegenspieler des RAAS)
- **ACE-Hemmer** (z. B. Ramipril) blockieren die Umwandlung Ang I → Ang II → Standardtherapie bei Hypertonie und Herzinsuffizienz

> **Merke:** Kurzfristig: Baroreflex (Sekunden). Langfristig: RAAS (Renin → Angiotensin II → Vasokonstriktion + Aldosteron → Na⁺/H₂O ↑). ANP = Gegenspieler. MAP = HZV × TPR.

---

## Prüfungsrelevante Zahlen

| Parameter | Wert |
|---|---|
| Herzgewicht | ~300 g |
| LV-Wanddicke | ~10–15 mm |
| RV-Wanddicke | ~3–5 mm |
| Schlagvolumen | ~70 mL |
| Ejektionsfraktion | 55–70% |
| HZV (Ruhe) | ~5 L/min |
| HZV (Belastung) | bis ~25 L/min |
| Systolischer RR | ~120 mmHg |
| Diastolischer RR | ~80 mmHg |
| Pulmonalarteriendruck | ~25/10 mmHg |
| SA-Knoten Frequenz | 60–80/min |
| AV-Knoten Frequenz | 40–60/min |
| AV-Verzögerung | ~100–120 ms |
| PQ-Zeit (EKG) | 0,12–0,20 s |
| QRS-Dauer (EKG) | <0,12 s |`,
      lernziele: [
        "Den Aufbau des Herzens (4 Kammern, 3 Wandschichten Endokard/Myokard/Epikard, Perikard) und den Unterschied zwischen linkem und rechtem Ventrikel in Wanddicke und Arbeitsdruck beschreiben.",
        "Die vier Herzklappen (AV-Klappen mit Sehnenfäden vs. Taschenklappen ohne Sehnenfäden) nach Lage, Typ und Funktion unterscheiden.",
        "Den Weg der Erregung vom SA-Knoten über AV-Knoten, His-Bündel, Tawara-Schenkel bis zu den Purkinje-Fasern beschreiben und die Bedeutung der AV-Verzögerung erklären.",
        "Die Blutwege durch kleinen Kreislauf (RV → Lunge → LA) und großen Kreislauf (LV → Körper → RA) sowie die Druckverhältnisse skizzieren.",
        "Die kurzfristige Blutdruckregulation (Barorezeptor-Reflex) und die langfristige Regulation (RAAS: Renin → Angiotensin II → Aldosteron) erklären und die Formel Blutdruck = HZV × TPR anwenden.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über die Erregungsleitung am Herzen ist korrekt?",
        options: [
          {
            id: "a",
            text: "Der AV-Knoten ist der primäre Schrittmacher des Herzens mit einer Eigenfrequenz von 60–80/min.",
          },
          {
            id: "b",
            text: "Die Erregung verläuft: Sinusknoten (60–80/min) → AV-Knoten (Verzögerung ~0,1 s) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern → Kammermuskulatur.",
          },
          {
            id: "c",
            text: "Die Purkinje-Fasern leiten die Erregung von den Kammern zurück zu den Vorhöfen.",
          },
          {
            id: "d",
            text: "Zwischen Vorhöfen und Kammern bestehen multiple elektrische Verbindungen neben dem AV-Knoten.",
          },
          {
            id: "e",
            text: "Die AV-Verzögerung ist klinisch irrelevant und dient keinem physiologischen Zweck.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Der Sinusknoten (SA-Knoten) ist der primäre Schrittmacher (60–80/min). Die Erregung wird am AV-Knoten um ~0,1 s verzögert, damit die Vorhöfe vor den Kammern kontrahieren. Dann geht es über His-Bündel → Tawara-Schenkel → Purkinje-Fasern zur Kammermuskulatur. Der AV-Knoten ist die einzige elektrische Verbindung zwischen Vorhöfen und Kammern (Herzskelett isoliert).",
      },
      selfTest: [
        {
          question: "Welche Aussage über den anatomischen Aufbau des Herzens ist korrekt?",
          options: [
            "Der rechte Ventrikel hat eine dickere Wand als der linke Ventrikel, da er gegen den hohen Systemwiderstand pumpen muss.",
            "Der linke Ventrikel hat eine ~3-mal dickere Wand als der rechte Ventrikel, um gegen den hohen Systemwiderstand (~120 mmHg) zu pumpen.",
            "Die Herzwand besteht von innen nach außen aus Myokard, Endokard und Epikard.",
            "Das Perikard ist die innerste Schicht des Herzens und sorgt für eine glatte Oberfläche zur Thromboseprophylaxe.",
            "Rechter und linker Ventrikel pumpen gegen denselben Widerstand und haben daher gleich dicke Wände.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Der **linke Ventrikel (LV)** hat eine ~**10–15 mm dicke Wand** (ca. **3× dicker** als der rechte Ventrikel mit ~3–5 mm), da er gegen den **hohen Systemwiderstand** des großen Kreislaufs (~120 mmHg systolisch) pumpen muss. Der rechte Ventrikel pumpt nur gegen den niedrigen Pulmonalwiderstand (~25 mmHg).\n\n**Falsch (A):** Der **linke** Ventrikel (nicht rechte) hat die dickere Wand, da er gegen den Systemwiderstand arbeitet.\n\n**Falsch (C):** Die korrekte Reihenfolge von **innen nach außen** ist: **Endokard** (Endothel, glatte Oberfläche) → **Myokard** (Herzmuskulatur, Kontraktion) → **Epikard** (viszerales Blatt des Perikards, Gleitfläche).\n\n**Falsch (D):** Das **Endokard** (nicht Perikard) ist die innerste Schicht. Das **Perikard** ist der Herzbeutel (Epikard + parietales Blatt mit Perikardhöhle dazwischen).\n\n**Falsch (E):** Die Ventrikel pumpen gegen **unterschiedliche Widerstände**: LV gegen Systemwiderstand (~120 mmHg, hoher Druck), RV gegen Pulmonalwiderstand (~25 mmHg, niedriger Druck) → unterschiedliche Wanddicke.",
          difficulty: 1,
          tags: ["herzanatomie", "vorhöfe", "ventrikel"],
        },
        {
          question: "Welche Aussage über die Herzklappen trifft zu?",
          options: [
            "Die Trikuspidalklappe ist eine Taschenklappe mit 3 Taschen und verhindert den Rückfluss von Blut aus der Pulmonalarterie in den rechten Ventrikel.",
            "Die Aortenklappe und Pulmonalklappe sind AV-Klappen und besitzen Sehnenfäden, die an Papillarmuskeln befestigt sind.",
            "Die Mitralklappe (Bikuspidalklappe) ist eine AV-Klappe mit 2 Segeln, die durch Sehnenfäden (Chordae tendineae) mit Papillarmuskeln verbunden ist und den Rückfluss bei LV-Systole verhindert.",
            "Die Pulmonalklappe öffnet sich durch aktive Kontraktion von Papillarmuskeln während der Ventrikel-Systole.",
            "Alle 4 Herzklappen besitzen Sehnenfäden, um einen Prolaps in die Vorhöfe zu verhindern.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Die **Mitralklappe** (Bikuspidalklappe) ist eine **AV-Klappe** (Atrioventrikularklappe) mit **2 Segeln**, die zwischen linkem Vorhof (LA) und linkem Ventrikel (LV) liegt. Sie besitzt **Sehnenfäden (Chordae tendineae)**, die an **Papillarmuskeln** befestigt sind und einen **Prolaps** (Umstülpung in den Vorhof) während der LV-Systole verhindern. Bei LV-Kontraktion schließt sich die Mitralklappe → verhindert Rückfluss in LA.\n\n**Falsch (A):** Die **Trikuspidalklappe** ist eine **AV-Klappe** (nicht Taschenklappe) mit **3 Segeln** (nicht Taschen) und liegt zwischen rechtem Vorhof und rechtem Ventrikel (nicht Pulmonalarterie). Die **Pulmonalklappe** (Taschenklappe) verhindert den Rückfluss aus der Pulmonalarterie.\n\n**Falsch (B):** **Aortenklappe** und **Pulmonalklappe** sind **Taschenklappen** (nicht AV-Klappen) und besitzen **keine Sehnenfäden**. Sie öffnen/schließen passiv durch Druckgradienten. **AV-Klappen** (Trikuspidal, Mitral) haben Sehnenfäden.\n\n**Falsch (D):** Die **Pulmonalklappe** öffnet sich **passiv** durch den Druckgradienten (RV-Druck > Pulmonalarterie-Druck) während der Systole. **Papillarmuskeln** sind nur bei AV-Klappen vorhanden (nicht bei Taschenklappen).\n\n**Falsch (E):** Nur die **AV-Klappen** (Trikuspidal, Mitral) besitzen Sehnenfäden. Die **Taschenklappen** (Pulmonal, Aorta) haben **keine** Sehnenfäden.",
          difficulty: 2,
          tags: ["herzklappen", "mitralklappe", "aortenklappe"],
        },
        {
          question: "Welche Aussage über die Erregungsleitung im Herzen ist korrekt?",
          options: [
            "Der AV-Knoten ist der primäre Schrittmacher mit einer Eigenfrequenz von 60–80/min und leitet die Erregung direkt zu den Purkinje-Fasern.",
            "Der SA-Knoten ist der primäre Schrittmacher (60–80/min), der AV-Knoten verzögert die Erregung (~100 ms), und die Purkinje-Fasern leiten die Erregung schnell von der Herzspitze zur Basis.",
            "Die Erregung wird durch Nervenfasern vom Gehirn zum Herzen übertragen, sodass das Herz ohne Nervenversorgung nicht schlagen kann.",
            "Die Tawara-Schenkel verzögern die Erregung, um eine synchrone Kontraktion von Vorhöfen und Kammern zu ermöglichen.",
            "Bei einem kompletten AV-Block (III°) übernimmt der SA-Knoten die Kammer-Erregung mit einer Frequenz von 60–80/min, sodass keine Symptome auftreten.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Die Erregungsleitung verläuft:\n\n1. **SA-Knoten** (Sinusknoten, rechter Vorhof) = **primärer Schrittmacher** mit Eigenfrequenz **60–80/min** → spontane Depolarisation\n2. Vorhöfe kontrahieren (P-Welle)\n3. **AV-Knoten** (atrioventrikulärer Knoten) = **Verzögerung ~100 ms** (einzige elektrische Verbindung zwischen Vorhöfen und Kammern), Eigenfrequenz 40–60/min (Backup)\n4. **His-Bündel** → **Tawara-Schenkel** (re/li) → **Purkinje-Fasern** (schnellste Leitung ~4 m/s) → Erregung von **Herzspitze → Basis** → synchrone Ventrikelkontraktion (QRS-Komplex)\n\nDie Verzögerung im AV-Knoten ermöglicht **vollständige Vorhof-Entleerung**, bevor die Kammern kontrahieren.\n\n**Falsch (A):** Der **SA-Knoten** (nicht AV-Knoten) ist der primäre Schrittmacher (60–80/min). Der AV-Knoten leitet nicht direkt zu Purkinje-Fasern, sondern über His-Bündel → Tawara-Schenkel.\n\n**Falsch (C):** Das Herz besitzt ein **autonomes Erregungssystem** (SA-/AV-Knoten, His, Tawara, Purkinje) und kann **ohne Nervenversorgung** schlagen (Autonomie). Das autonome Nervensystem (Sympathikus/Parasympathikus) **moduliert** nur die Frequenz, ist aber nicht essentiell.\n\n**Falsch (D):** Die **Tawara-Schenkel** leiten die Erregung **schnell** entlang des Septums zur Herzspitze (keine Verzögerung). Die **Verzögerung** erfolgt im **AV-Knoten**, um Vorhof-Entleerung vor Kammer-Kontraktion zu ermöglichen.\n\n**Falsch (E):** Bei **AV-Block III°** (kompletter Block) schlagen Vorhöfe (SA-Knoten, 60–80/min) und Kammern **unabhängig**. Die Kammern werden von einem **Ersatzrhythmus** (AV-Knoten ~40/min oder ventrikulär ~20–40/min) erregt → **Bradykardie**, Symptome (Schwindel, Synkope) → **Schrittmacher-Indikation**.",
          difficulty: 2,
          tags: ["erregungsleitung", "sinusknoten", "av-knoten"],
        },
        {
          question: "Welche Aussage über den kleinen und großen Kreislauf ist korrekt?",
          options: [
            "Im kleinen Kreislauf führen die Lungenarterien sauerstoffreiches Blut zur Lunge, während die Lungenvenen sauerstoffarmes Blut zum Herzen zurückführen.",
            "Der kleine Kreislauf (Lungenkreislauf) verläuft vom rechten Ventrikel über die Lungenarterien (O₂-arm) zur Lunge, wo Gasaustausch stattfindet, und zurück über die Lungenvenen (O₂-reich) zum linken Vorhof. Der Druck ist niedrig (~25/10 mmHg).",
            "Der große Kreislauf beginnt im rechten Ventrikel und pumpt sauerstoffreiches Blut über die Aorta in den Körper.",
            "Beide Kreisläufe sind parallel geschaltet, sodass das Blut entweder durch die Lunge oder durch den Körper fließt.",
            "Der große Kreislauf hat einen niedrigeren Druck als der kleine Kreislauf, da die Körpergefäße dünner und elastischer sind.",
          ],
          correctIndex: 1,
          explanation:
            '**Richtig (B):** Der **kleine Kreislauf** (Lungenkreislauf, Pulmonalkreislauf) dient dem **Gasaustausch**:\n\n**Verlauf:**\n- **Rechter Ventrikel** → **Truncus pulmonalis** → **Lungenarterien** (re/li, führen **O₂-armes Blut**!) → **Lungenkapillaren** (Gasaustausch in Alveolen: CO₂ ↓, O₂ ↑) → **Lungenvenen** (führen **O₂-reiches Blut**!) → **Linker Vorhof**\n\n⭐ **Wichtig:** "Arterie" = Gefäß vom Herzen **weg**, "Vene" = Gefäß zum Herzen **hin** (unabhängig von O₂-Gehalt!). **Lungenarterien** sind die einzigen Arterien mit **O₂-armem Blut**, **Lungenvenen** die einzigen Venen mit **O₂-reichem Blut**.\n\n**Druck:** ~25/10 mmHg (systolisch/diastolisch), niedriger Druck, da Lungenkapillaren dünnwandig (Diffusion).\n\n**Falsch (A):** **Umgekehrt!** Lungenarterien führen **O₂-armes** Blut (vom RV zur Lunge), Lungenvenen führen **O₂-reiches** Blut (von Lunge zum LA).\n\n**Falsch (C):** Der **große Kreislauf** beginnt im **linken Ventrikel** (nicht rechten). Der **rechte Ventrikel** pumpt in den kleinen Kreislauf. Verlauf: **LV** → Aorta → Körper → Venen → **RA**.\n\n**Falsch (D):** Die Kreisläufe sind **in Serie geschaltet** (nicht parallel). Blut fließt **zwingend** durch beide: RV → Lunge (klein) → LA → LV → Körper (groß) → RA → RV. Bei Parallelschaltung würde Blut entweder-oder fließen.\n\n**Falsch (E):** Der **große Kreislauf** hat einen **höheren Druck** (~120/80 mmHg) als der kleine Kreislauf (~25/10 mmHg), da der LV gegen hohen Systemwiderstand pumpt. Körpergefäße sind dickwandig (Aorta ~2 mm Wanddicke).',
          difficulty: 2,
          tags: ["lungenkreislauf", "körperkreislauf", "blutdruck"],
        },
        {
          question: "Welche Aussage über Blutgefäße und ihre Funktionen ist korrekt?",
          options: [
            "Arteriolen sind die Hauptorte des Stoffaustauschs zwischen Blut und Gewebe durch ihre einschichtige Endothelwand.",
            "Die Windkesselfunktion der Aorta bedeutet, dass die Aorta in der Systole Blut speichert (elastische Dehnung) und in der Diastole durch elastische Rückstellung Blut kontinuierlich in die Peripherie drückt.",
            "Venen haben dickere Wände als Arterien und transportieren sauerstoffreiches Blut zum Herzen zurück.",
            "Kapillaren haben drei Wandschichten (Intima, Media, Adventitia) wie Arterien, sind aber kleiner im Durchmesser.",
            "Venenklappen sind vor allem in den Armvenen wichtig und öffnen sich aktiv durch Muskelkontraktion.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Die **Windkesselfunktion der Aorta** nutzt die elastische Wand der Aorta:\n\n**Systole:**\n- Linker Ventrikel kontrahiert → Blut wird in Aorta gepumpt\n- Aorta **dehnt sich** (elastische Wand) → speichert Energie\n\n**Diastole:**\n- Aortenklappe schließt (Rückfluss verhindert)\n- Aorta zieht sich **elastisch zurück** → gespeicherte Energie wird freigesetzt\n- Blut wird **kontinuierlich** in die Peripherie gedrückt\n\n**Ergebnis:** Pulsatiler Fluss (intermittierend) aus dem Herzen wird in **kontinuierlichen Fluss** in der Peripherie umgewandelt.\n\n**Falsch (A):** **Kapillaren** (nicht Arteriolen) sind die Hauptorte des Stoffaustauschs. Kapillaren haben eine **einschichtige Endothelwand + Basalmembran** (Ø ~5–10 µm, dünnwandig, hohe Oberfläche ~600 m²). **Arteriolen** sind **Widerstandsgefäße** (glatte Muskulatur, regulieren peripheren Widerstand, Sympathikus α₁ → Vasokonstriktion).\n\n**Falsch (C):** Venen haben **dünnere Wände** als Arterien (Niederdrucksystem) und transportieren **überwiegend O₂-armes Blut** zum Herzen (Ausnahme: Lungenvenen → O₂-reich). Venen sind **Kapazitätsgefäße** (~70% des Blutvolumens).\n\n**Falsch (D):** Kapillaren haben nur **eine Schicht** (Endothel + Basalmembran), **keine** Media oder Adventitia. Die 3 Schichten (Intima, Media, Adventitia) sind typisch für **Arterien** und **Venen**.\n\n**Falsch (E):** Venenklappen sind besonders wichtig in **Beinvenen** (nicht Armen), da sie gegen die Schwerkraft arbeiten. Klappen öffnen/schließen **passiv** durch Druckunterschiede (nicht aktiv). Die **Muskel-Venen-Pumpe** (Skelettmuskel-Kontraktion komprimiert Venen → Blut nach oben, Klappen verhindern Rückfluss) unterstützt den venösen Rückfluss.",
          difficulty: 2,
          tags: ["arterien", "venen", "kapillaren"],
        },
        {
          question: "Welche der folgenden Aussagen über das Herz-Kreislauf-System ist FALSCH?",
          options: [
            "Der Sinusknoten liegt im rechten Vorhof und ist der primäre Schrittmacher des Herzens mit einer Frequenz von 60–80/min",
            "Der linke Ventrikel hat eine dickere Wand als der rechte, da er gegen den höheren Systemwiderstand pumpen muss",
            "Lungenarterien führen sauerstoffreiches Blut von der Lunge zum linken Vorhof",
            "Die AV-Klappen (Trikuspidal- und Mitralklappe) verhindern den Rückfluss von Blut aus den Ventrikeln in die Vorhöfe",
            "Der Frank-Starling-Mechanismus beschreibt, dass erhöhte Vordehnung zu stärkerer Kontraktion führt",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist falsch. Lungenarterien führen sauerstoffARMES Blut vom rechten Ventrikel zur Lunge — nicht sauerstoffreiches Blut. Sauerstoffreiches Blut fließt über die Lungenvenen von der Lunge zum linken Vorhof. Die Verwechslung von Lungenarterien (O2-arm) und Lungenvenen (O2-reich) ist eine der häufigsten MedAT-Fallen, da hier die Begriffe Arterie/Vene nicht dem O2-Gehalt entsprechen, sondern der Flussrichtung (Arterie = vom Herzen weg, Vene = zum Herzen hin). Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "herz-kreislauf", "lungenkreislauf"],
        },
      ],

      merksätze: [
        "**Herzaufbau:** 4 Kammern (RA, RV, LA, LV), 3 Wandschichten (Endokard, Myokard, Epikard). LV-Wand ~10–15 mm (3× dicker als RV ~3–5 mm) → Systemwiderstand (~120 mmHg). Perikard = Herzbeutel (Perikardhöhle, ~50 mL Flüssigkeit). Koronararterien versorgen Herzmuskel (LCA: R. interventricularis anterior/RIVA, R. circumflexus; RCA: R. nodi sinuatrialis, R. interventricularis posterior).",
        "**Herzklappen:** AV-Klappen (zwischen Vorhof-Kammer) mit Sehnenfäden + Papillarmuskeln: Trikuspidal (rechts, 3 Segel) + Mitral/Bikuspidal (links, 2 Segel) → verhindern Prolaps. Taschenklappen (keine Sehnenfäden, passive Öffnung/Schließung): Pulmonal (RV → Pulmonalarterie) + Aortal (LV → Aorta).",
        "**Erregungsleitungssystem:** SA-Knoten (Sinusknoten, primärer Schrittmacher, 60–80/min, rechter Vorhof) → AV-Knoten (Verzögerung ~100 ms, Eigenfrequenz 40–60/min) → His-Bündel → Tawara-Schenkel (re/li) → Purkinje-Fasern (schnell, 4 m/s) → Ventrikel (Herzspitze → Basis). Vagus hemmt SA-Knoten (M2, HF ↓). β₁ stimuliert SA-Knoten (HF ↑).",
        "**EKG:** P-Welle (Vorhof-Depolarisation, SA-Knoten), PQ-Zeit (AV-Knoten-Überleitung, normal <0,2 s), QRS-Komplex (Ventrikel-Depolarisation, normal <0,12 s), ST-Strecke (ventrikuläre Repolarisation, Erhöhung bei STEMI), T-Welle (Ventrikel-Repolarisation). Kammerflimmern = ungeordnete Ventrikel-Erregung → kein Auswurf → Kreislaufstillstand → Defibrillation.",
        "**Herzkreislauf-Physiologie:** Kleiner Kreislauf: RV → Lungenarterien (O₂-arm!) → Lunge (Gasaustausch) → Lungenvenen (O₂-reich!) → LA. Großer Kreislauf: LV → Aorta → Körper → Hohlvenen → RA. In Serie! MAP = HZV × TPR. Starling-Mechanismus: Preload ↑ → Vorhof-Dehnung → Kontraktilität ↑ → Schlagvolumen ↑.",
        "**Blutgefäße:** Arterien (Windkesselfunktion, elastisch, Intima/Media/Adventitia). Arteriolen (Widerstandsgefäße, α₁ → Vasokonstriktion). Kapillaren (Stoffaustausch, einschichtiges Endothel, ~600 m²). Venen (Kapazitätsgefäße, ~70% des Blutvolumens, Klappen in Beinvenen, Muskel-Venen-Pumpe). Varikosis: Klappeninsuffizienz → venöser Rückfluss ↓ → Varizen.",
        "**Blutdruckregulation:** Kurzfristig: Barorezeptor-Reflex (Aortenbogen, Karotis-Sinus → Medulla oblongata → Sympathikus/Parasympathikus). Langfristig: RAAS (Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O-Retention → Volumen ↑). ACE-Hemmer blockieren. ANP (Vorhof-Dehnung): Na⁺-Ausscheidung ↑ → Volumen ↓.",
        "**Herzinsuffizienz:** Linksherzinsuffizienz: CO ↓ → Lungenstauung → Dyspnoe (Orthopnoe, paroxysmale nächtliche Dyspnoe), feuchte Rasselgeräusche. Rechtsherzinsuffizienz: Venöse Stauung → periphere Ödeme, Halsvenenstauung, Hepatomegalie. Therapie: ACE-Hemmer, Betablocker, Diuretika (Furosemid, Spironolacton), Herzglykoside (Digoxin).",
        "**Akutes Koronarsyndrom (ACS):** STEMI (ST-Hebung, Totalverschluss, Troponin ↑) vs. NSTEMI (kein ST, Teilokkl., Troponin ↑) vs. instabile AP (kein Troponin ↑). Therapie: MONA (Morphin, O₂, Nitro, ASS) + Heparin + PCI (perkutane Koronarintervention, Stent). Thrombolyse wenn PCI nicht verfügbar.",
        "**Herzrhythmusstörungen:** Vorhofflimmern (unregelmäßige P-Wellen, absolute Arrhythmie, Thromboembolie-Risiko → CHA₂DS₂-VASc → Antikoagulation). AV-Block I° (PQ > 0,2 s), II° (Wenckebach: PR ↑ bis Ausfall; Mobitz II: plötzlicher Ausfall), III° (kompletter Block, Schrittmacher). Kammerflattern/-flimmern → Reanimation + Defibrillation.",
      ],
      klinischerBezug:
        "Herzinfarkt (STEMI/NSTEMI): koronare Plaqueruptur → Thrombus → Ischämie → Infarzierung (Troponin I/T als sensitiver Marker). EKG: ST-Hebung (STEMI), T-Negativierung, Q-Zacke (alter Infarkt). Therapie: sofortige PCI (Stent) innerhalb 90 min. Herzinsuffizienz betrifft >1 Mio. Menschen in Deutschland (systolisch EF <40% vs. diastolisch EF >50%); Therapie-Basis: ACE-Hemmer + Betablocker + Diuretika + Spironolacton. Hypertonie (>140/90 mmHg): primär (essenziell, 90%, multifaktoriell) vs. sekundär (NNR: Conn, Phäochromozytom; Niere: renovaskulär). Komplikationen: Schlaganfall, Herzinfarkt, Niereninsuffizienz, Retinopathie. Vorhofflimmern: häufigste Herzrhythmusstörung (1% der Bevölkerung), Schlaganfall-Risiko ↑ (Thromboembolie aus linkem Vorhofohr) → Antikoagulation (DOAKs).",
    },
    {
      id: "bio-3-05",
      title: "Blut",
      imageUrl: "/images/wiki-blood-composition-de.svg",
      imageCaption:
        "Abb.: Zusammensetzung des Blutes mit zellulären Bestandteilen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Erythrozyten",
        "Leukozyten",
        "Thrombozyten",
        "Gerinnung",
        "Blutgruppen AB0",
        "Rhesus",
        "Hämoglobin",
        "Blutplasma",
      ],
      content: `Ein 22-jähriger Medizinstudent spendet zum ersten Mal Blut. Beim Ausfüllen des Fragebogens erfährt er, dass seine Blutgruppe A Rh-positiv ist — doch was genau bedeutet das? Warum darf er sein Blut nicht an jeden Empfänger geben? Und warum gerinnt das Blut im Beutel nicht, wohl aber in einer Schnittwunde innerhalb von Minuten? Blut ist weit mehr als eine rote Flüssigkeit: Es ist ein flüssiges Organ mit exakt aufeinander abgestimmten Transport-, Abwehr- und Reparaturfunktionen.

---

## Blutbestandteile — Plasma und zelluläre Elemente

{{IMAGE}}

Ein Erwachsener besitzt etwa **4–6 Liter Blut** (ca. 7–8 % des Körpergewichts). Nach Zentrifugation trennt sich das Blut in zwei Phasen:

**Blutplasma (~55 %)** ist die zellfreie, gelbliche Flüssigkeit. Es besteht zu ~90 % aus Wasser und enthält gelöste Proteine, Elektrolyte, Glukose, Hormone und Stoffwechselprodukte. Die wichtigsten **Plasmaproteine** sind:
- **Albumin (~60 %)**: Aufrechterhaltung des kolloidosmotischen (onkotischen) Drucks (hält Wasser im Gefäß), Transport von Bilirubin, Fettsäuren, Medikamenten
- **Globuline (~35 %)**: α/β-Globuline (Transportproteine wie Transferrin, Ceruloplasmin) + γ-Globuline (Immunglobuline = Antikörper)
- **Fibrinogen (~4 %)**: Gerinnungsfaktor I, Vorstufe des Fibrins

**Zelluläre Bestandteile (~45 %)** bilden den **Hämatokrit** — den Volumenanteil der Erythrozyten am Gesamtblut. Normalwerte: **Männer ~45 %, Frauen ~42 %** (Männer höher wegen Testosteron → Erythropoese ↑). Hämatokrit ↓ = Anämie, Hämatokrit ↑ = Polyglobulie oder Dehydratation.

**Plasma vs. Serum:** Plasma enthält Fibrinogen (Blut + Antikoagulans → Zentrifugation). Serum ist Plasma *ohne* Fibrinogen (Blut gerinnen lassen → Überstand = Serum).

> **Merke:** Plasma = mit Fibrinogen, Serum = ohne Fibrinogen. Hämatokrit misst nur den Erythrozyten-Anteil (nicht alle Zellen). Albumin → onkotischer Druck, Globuline → Abwehr + Transport.

---

## Erythrozyten und Hämoglobin

Erythrozyten (rote Blutkörperchen) sind mit **~5 Millionen/µL** die zahlreichsten Blutzellen. Ihre besondere Form — **bikonkave Scheiben** mit einem Durchmesser von **~7,5 µm** — maximiert die Oberfläche für den Gasaustausch und ermöglicht die Passage durch enge Kapillaren (Durchmesser ~5 µm). Reife Erythrozyten haben **keinen Zellkern** und keine Mitochondrien — sie gewinnen Energie ausschließlich über anaerobe Glykolyse und haben eine Lebensdauer von **~120 Tagen**.

**Hämoglobin (Hb)** ist das O₂-transportierende Protein im Erythrozyten. Jedes Hb-Molekül ist ein **Tetramer aus 2α- und 2β-Untereinheiten**, wobei jede Untereinheit eine **Häm-Gruppe** mit einem zentralen **Fe²⁺-Ion** trägt — insgesamt also **4 O₂-Bindungsstellen** pro Hb. Fe²⁺ (Eisen-II) ist entscheidend: Wird es zu Fe³⁺ oxidiert, entsteht **Methämoglobin**, das keinen Sauerstoff binden kann.

Die O₂-Bindung an Hämoglobin folgt einer **sigmoidalen (S-förmigen) Kurve** — Ausdruck der **kooperativen Bindung**: Bindet ein O₂-Molekül an eine Untereinheit, erhöht sich die Affinität der übrigen Untereinheiten (T-Zustand → R-Zustand). Die Kurve wird durch mehrere Faktoren nach **rechts verschoben** (O₂-Affinität ↓, O₂-Abgabe ↑):

| Faktor | Richtung | Wirkung |
|---|---|---|
| CO₂ ↑ | Rechtsverschiebung | Mehr O₂-Abgabe im Gewebe |
| pH ↓ (H⁺ ↑) | Rechtsverschiebung | Bohr-Effekt |
| Temperatur ↑ | Rechtsverschiebung | Arbeitende Muskeln |
| 2,3-BPG ↑ | Rechtsverschiebung | Höhenadaptation, Anämie |

Dieser **Bohr-Effekt** ist physiologisch genial: In metabolisch aktivem Gewebe (Muskel, Gehirn) steigen CO₂ und Temperatur, der pH sinkt — genau dort wird mehr O₂ abgegeben. Umgekehrt wird in der Lunge O₂ effizient aufgenommen (hoher pO₂, niedriges CO₂, höherer pH → Linksverschiebung).

**CO-Vergiftung (Kohlenmonoxid):** CO bindet mit **200–300-facher Affinität** an Fe²⁺ im Vergleich zu O₂. Zusätzlich verschiebt CO die Bindungskurve nach **links** → verbleibendes O₂ wird im Gewebe nicht mehr abgegeben → inneres Ersticken bei normaler Atemfrequenz. Klinisch: kirschrote Hautfarbe, Kopfschmerz, Bewusstlosigkeit. Therapie: 100 % O₂.

**Erythrozyten-Abbau:** Nach ~120 Tagen werden alte Erythrozyten in der **Milz** (und Leber) durch Makrophagen des RES (retikuloendotheliales System) abgebaut: Hämoglobin → Globin (Aminosäuren) + Häm → **Biliverdin** → **unkonjugiertes Bilirubin** (wasserunlöslich, albumingebunden) → Leber (Konjugation mit Glucuronsäure) → **konjugiertes Bilirubin** → Galle → Darm → **Sterkobilin** (braune Stuhlfarbe) + teilweise Rückresorption → **Urobilin** (gelbe Urinfarbe).

> **Merke:** Hb = Tetramer (2α2β), 4 Häm-Gruppen mit Fe²⁺, kooperative Bindung (sigmoidal). Bohr-Effekt: CO₂↑/pH↓/Temp↑/2,3-BPG↑ → Rechtsverschiebung → O₂-Abgabe ↑. CO bindet 200× stärker als O₂ und verschiebt die Kurve nach links. Abbau: Milz → Bilirubin → Leber → Galle.

{{DIAGRAM:hemoglobin-curve}}

---

## Leukozyten — die Immunzellen im Blut

Vom Erythrozyten-Transport gehen wir nun zu den Abwehrzellen über. Leukozyten (weiße Blutkörperchen) sind mit **4.000–10.000/µL** deutlich seltener als Erythrozyten, aber essenziell für die Immunabwehr. Sie werden nach Morphologie und Funktion in drei Hauptgruppen eingeteilt:

### Granulozyten (enthalten Granula im Zytoplasma)

| Zelltyp | Anteil | Kernform | Hauptfunktion |
|---|---|---|---|
| **Neutrophile** | 50–70 % | Segmentkernig (3–5 Segmente) | Phagozytose von Bakterien, Respiratory Burst (NADPH-Oxidase → O₂⁻, MPO → HOCl) |
| **Eosinophile** | 1–5 % | Bilobulär | Parasitenabwehr (toxische Granula), allergische Reaktionen |
| **Basophile** | <1 % | S-förmig/unregelmäßig | Histaminfreisetzung, IgE-vermittelte Allergie |

### Agranulozyten

| Zelltyp | Anteil | Hauptfunktion |
|---|---|---|
| **Monozyten** | 3–8 % | Vorläufer von Gewebsmakrophagen und dendritischen Zellen; Phagozytose, Antigenpräsentation (MHC II) |
| **Lymphozyten** | 20–40 % | Adaptive Immunität: **B-Zellen** (Antikörperproduktion), **T-Zellen** (CD4⁺ Helfer, CD8⁺ zytotoxisch), **NK-Zellen** (angeboren, MHC-I-Missing-Self) |

**Klinische Blutbild-Interpretation:**
- **Linksverschiebung** = vermehrt **unreife** (stabkernige) Neutrophile → Zeichen einer **akuten bakteriellen Infektion** (das Knochenmark schüttet unreife Zellen vorzeitig aus)
- **Leukozytose** (>10.000/µL) → Infektion, Entzündung, Leukämie
- **Leukopenie** (<4.000/µL) → Chemotherapie, Autoimmunerkrankung, aplastische Anämie
- **Eosinophilie** → Parasiteninfektion oder allergische Erkrankung

> **Merke:** Neutrophile (50–70 %) = häufigste Leukozyten, erste Linie gegen Bakterien. Lymphozyten (20–40 %) = adaptive Immunität. Linksverschiebung = unreife Stabkernige ↑ → akute bakterielle Infektion. Merkhilfe Differentialblutbild: „Never Let Monkeys Eat Bananas" (Neutrophile > Lymphozyten > Monozyten > Eosinophile > Basophile).

---

## Thrombozyten — die Blutplättchen

Thrombozyten sind **kernlose Zellfragmente** aus Megakaryozyten (Knochenmark) mit einer Lebensdauer von **~10 Tagen** und einer Normalzahl von **150.000–400.000/µL**. Sie enthalten Granula mit Gerinnungsfaktoren (α-Granula: vWF, Fibrinogen, PDGF) und ADP/Serotonin/Ca²⁺ (dense Granula). Bei Gefäßverletzung werden sie sofort aktiviert und bilden den primären Thrombozytenpfropf.

**Thrombozytenhemmer** im klinischen Alltag:
- **ASS (Aspirin)**: hemmt COX-1 irreversibel → Thromboxan A₂ (TxA₂) ↓ → Aggregation ↓
- **Clopidogrel**: P2Y₁₂-Rezeptor-Antagonist → ADP-Hemmung
- **Abciximab**: GPIIb/IIIa-Antagonist → blockiert Fibrinogen-Brücken

**Thrombozytopenie** (<100.000/µL): Petechien (punktförmige Hautblutungen); <20.000/µL → Spontanblutungsgefahr.

> **Merke:** Thrombozyten = kernlose Fragmente aus Megakaryozyten, 150.000–400.000/µL, Lebensdauer ~10 Tage. ASS hemmt COX-1 → TxA₂ ↓. Thrombozytopenie → Petechien.

---

## Hämostase — primäre und sekundäre Blutstillung

Die Fähigkeit des Blutes zu gerinnen schützt vor Verbluten, muss aber streng reguliert werden, um Thrombosen zu verhindern. Die Hämostase läuft in zwei aufeinanderfolgenden Phasen ab:

### Primäre Hämostase (Thrombozytenpfropf, Minuten)

1. **Vasokonstriktion**: Reflexartige Gefäßverengung → Blutfluss ↓
2. **Thrombozytenadhäsion**: Kollagen im Subendothel wird freigelegt → **von-Willebrand-Faktor (vWF)** bindet an Kollagen *und* an **GPIb-Rezeptoren** auf Thrombozyten → Brückenmolekül
3. **Thrombozytenaktivierung**: Formveränderung (Scheibe → Kugel mit Pseudopodien), Freisetzung von ADP, TxA₂, Serotonin
4. **Thrombozytenaggregation**: Aktivierte Thrombozyten exprimieren **GPIIb/IIIa-Rezeptoren** → **Fibrinogen** vernetzt benachbarte Thrombozyten → weißer Thrombus

### Sekundäre Hämostase (Gerinnungskaskade, Minuten bis Stunden)

Die plasmatische Gerinnung stabilisiert den Thrombozytenpfropf durch ein Fibrinnetz. Zwei Aktivierungswege münden in eine **gemeinsame Endstrecke**:

**Extrinsischer Weg** (schnell, Sekunden): Verletztes Gewebe setzt **Tissue Factor (TF, Faktor III)** frei → TF aktiviert **Faktor VII** → Komplex TF/VIIa aktiviert **Faktor X**. Labormessung: **Quick/PT** (Prothrombinzeit).

**Intrinsischer Weg** (langsam, Minuten): Kontaktaktivierung durch negativ geladene Oberflächen (z. B. freiliegendes Kollagen) → **Faktor XII** → XI → IX → IX/VIIIa-Komplex aktiviert **Faktor X**. Labormessung: **PTT** (partielle Thromboplastinzeit).

**Gemeinsame Endstrecke:** Faktor **Xa + Va** (Prothrombinase-Komplex) → spaltet **Prothrombin (II)** zu **Thrombin (IIa)** → Thrombin spaltet **Fibrinogen (I)** zu **Fibrinmonomeren** → Polymerisation → **Faktor XIII** quervernetzt Fibrin kovalent → stabiler **roter Thrombus**.

| Labormessung | Prüft | Klinische Bedeutung |
|---|---|---|
| **PT/Quick** | Extrinsischer + gemeinsamer Weg | Marcumar-Steuerung, Leberfunktion |
| **PTT** | Intrinsischer + gemeinsamer Weg | Heparin-Steuerung, Hämophilie A/B |
| **Blutungszeit** | Primäre Hämostase | vWS, Thrombozytopathie |

**Vitamin K** ist essenzieller Kofaktor für die hepatische Synthese der Gerinnungsfaktoren **II, VII, IX, X** (Merkhilfe: „1972"). Vitamin-K-Antagonisten (Marcumar/Warfarin) hemmen diese Synthese → Antikoagulation. **Heparin** verstärkt die Wirkung von **Antithrombin III** (AT-III) → inaktiviert Thrombin und Faktor Xa.

### Fibrinolyse — Auflösung des Thrombus

Nach der Wundheilung wird der Thrombus wieder abgebaut: **Plasminogen** → **Plasmin** (durch tPA, tissue plasminogen activator) → spaltet Fibrin → **Fibrinspaltprodukte** (D-Dimere). D-Dimere im Labor ↑ = Hinweis auf Thrombose, Lungenembolie, DIC.

**Klinischer Bezug — DIC (Disseminierte intravasale Gerinnung):** Systemische Gerinnungsaktivierung (z. B. bei Sepsis, Trauma) → massiver Verbrauch von Gerinnungsfaktoren und Thrombozyten → paradoxerweise gleichzeitig Mikrothrombosen *und* Blutungsneigung (Verbrauchskoagulopathie). Labor: PT ↑, PTT ↑, Fibrinogen ↓, D-Dimere ↑↑, Thrombozyten ↓.

> **Merke:** Primäre Hämostase = Thrombozyten (vWF → GPIb, Fibrinogen → GPIIb/IIIa). Sekundäre = Gerinnungskaskade: Extrinsisch (TF+VII, Quick/PT), Intrinsisch (XII→IX→X, PTT), Endstrecke (Xa+Va → Thrombin → Fibrin). Vitamin K: Faktoren II, VII, IX, X („1972"). Fibrinolyse: Plasmin → D-Dimere.

{{DIAGRAM:coagulation-cascade}}

---

## Blutgruppen — AB0- und Rhesus-System

Von der Gerinnung wechseln wir nun zur Blutgruppen-Immunologie — einem Thema, das bei Transfusionen über Leben und Tod entscheidet. Blutgruppen werden durch **Antigene auf der Erythrozytenoberfläche** definiert, gegen die im Plasma **Antikörper** (Agglutinine) existieren können.

### AB0-System

Das AB0-System beruht auf Zucker-Antigenen (Agglutinogene) auf der Erythrozytenmembran und **natürlich vorkommenden IgM-Antikörpern** (Isoagglutinine) im Plasma, die ohne vorherige Sensibilisierung ab dem ~6. Lebensmonat gebildet werden (Kreuzreaktion mit Bakterienantigenen der Darmflora):

| Blutgruppe | Antigen (Erythrozyt) | Antikörper (Plasma) | Kann empfangen von | Kann spenden an |
|---|---|---|---|---|
| **A** | A | Anti-B | A, 0 | A, AB |
| **B** | B | Anti-A | B, 0 | B, AB |
| **AB** | A + B | Keine | A, B, AB, 0 | AB |
| **0** | Keine (nur H-Antigen) | Anti-A + Anti-B | nur 0 | A, B, AB, 0 |

**Universalspender** = Blutgruppe **0** (keine Antigene → keine Reaktion beim Empfänger). **Universalempfänger** = Blutgruppe **AB** (keine Antikörper → reagiert nicht auf Spenderantigene). In der Praxis wird dennoch **immer** eine Kreuzprobe (Verträglichkeitstest) durchgeführt.

**Transfusionsreaktion:** Bei inkompatibler Transfusion (z. B. B-Blut an A-Empfänger) binden die IgM-Antikörper (Anti-B) an die Spender-Erythrozyten → **Komplementaktivierung** → **intravasale Hämolyse** → freies Hämoglobin → Nierenversagen (Hb-Zylinder in den Tubuli), Schock, DIC. **Sofortiger Transfusionsstopp + Notfalltherapie!**

### Rhesus-System

Das Rhesus-System wird durch das **D-Antigen** definiert: **Rh+ (~85 %)** = D-Antigen vorhanden, **Rh− (~15 %)** = kein D-Antigen. Im Gegensatz zum AB0-System bilden sich Anti-D-Antikörper **erst nach Sensibilisierung** (Transfusion oder Schwangerschaft).

**Klinisch hochrelevant — Morbus haemolyticus neonatorum:** Eine **Rh-negative Mutter** trägt ein **Rh-positives Kind** (Vater Rh+). Bei der **1. Geburt** gelangen fetale Rh+ Erythrozyten in den mütterlichen Kreislauf → Sensibilisierung → Bildung von **Anti-D-IgG**. In der **2. Schwangerschaft** mit einem Rh+ Fetus passieren diese IgG-Antikörper die Plazenta → fetale Erythrozyten-Hämolyse → Anämie, Ikterus, Hydrops fetalis. **Prophylaxe:** Anti-D-Immunglobulin innerhalb von 72 h nach der Geburt (und in der 28. SSW) → verhindert mütterliche Sensibilisierung.

**Kreuzprobe** — vor jeder Transfusion: **Major-Test** (Spender-Erythrozyten + Empfänger-Serum) ist entscheidend; **Minor-Test** (Empfänger-Erythrozyten + Spender-Serum) ergänzend. Zusätzlich **Bedside-Test** (AB0-Schnelltest am Bett unmittelbar vor Transfusion).

> **Merke:** AB0: natürliche IgM-Antikörper (keine Sensibilisierung nötig). 0 = Universalspender, AB = Universalempfänger. Rhesus: Anti-D erst nach Sensibilisierung (IgG, plazentagängig). Rh− Mutter + Rh+ Kind → MHN-Risiko ab 2. Schwangerschaft → Anti-D-Prophylaxe. Immer Kreuzprobe + Bedside-Test vor Transfusion.

`,
      lernziele: [
        "Die Zusammensetzung des Blutes (Plasma vs. zelluläre Elemente, Hämatokrit, Plasma vs. Serum) und die Hauptfunktionen der Plasmaproteine (Albumin, Fibrinogen, Globuline) beschreiben.",
        "Den Aufbau und die Funktion des Hämoglobins erklären sowie den Bohr-Effekt und die O₂-Bindungskurve (Rechtsverschiebung bei CO₂↑/pH↓) interpretieren.",
        "Die primäre Hämostase (Vasokonstriktion, Thrombozytenaggregation, vWF) und die sekundäre Hämostase (extrinsischer/intrinsischer Weg, gemeinsame Endstrecke, Fibrin) beschreiben und die Rolle von Vitamin K nennen.",
        "Die AB0-Blutgruppen (Antigene auf Erythrozyten, natürliche IgM-Antikörper) und das Rhesus-System erklären sowie die klinischen Konsequenzen der Rhesus-Inkompatibilität (Morbus haemolyticus neonatorum, Anti-D-Prophylaxe) kennen.",
        "Den Erythrozyten-Abbauweg (Hämoglobin → Bilirubin → Leber → Galle) beschreiben und die häufigsten Anämieformen (Eisenmangel, B12/Folsäure, hämolytisch) nach Laborbefund unterscheiden.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über die Zusammensetzung des Blutes ist korrekt?",
        options: [
          {
            id: "a",
            text: "Plasma macht etwa 45 % des Blutvolumens aus, die zellulären Bestandteile etwa 55 %.",
          },
          {
            id: "b",
            text: "Plasma (~55 %) enthält Wasser, Proteine (Albumin, Globuline, Fibrinogen) und Elektrolyte. Zelluläre Bestandteile (~45 %): Erythrozyten, Leukozyten und Thrombozyten. Der Hämatokrit gibt den Anteil der Erythrozyten am Gesamtblutvolumen an.",
          },
          {
            id: "c",
            text: "Erythrozyten besitzen einen Zellkern und Mitochondrien, um Sauerstoff effizient zu transportieren.",
          },
          {
            id: "d",
            text: "Thrombozyten sind kernhaltige Zellen, die aus Lymphozyten im Thymus entstehen.",
          },
          {
            id: "e",
            text: "Der Hämatokrit beschreibt den prozentualen Anteil der Leukozyten am Blutvolumen.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Blut besteht aus Plasma (~55 %, Wasser + Proteine + Elektrolyte + Hormone) und zellulären Bestandteilen (~45 %): Erythrozyten (kernlos, O₂-Transport via Hämoglobin), Leukozyten (Immunabwehr) und Thrombozyten (kernlose Fragmente von Megakaryozyten, Hämostase). Der Hämatokrit (Hkt) gibt den Volumenanteil der Erythrozyten an (Männer ~45 %, Frauen ~42 %).",
      },
      selfTest: [
        {
          question:
            "Welche Aussage über die Zusammensetzung des Blutes und den Hämatokrit ist korrekt?",
          options: [
            "Der Hämatokrit beschreibt den Volumenanteil aller Blutzellen (Erythrozyten, Leukozyten, Thrombozyten) am Gesamtblutvolumen.",
            "Der Hämatokrit beträgt bei Männern ~45% und bei Frauen ~42% und gibt den Volumenanteil der Erythrozyten an. Serum ist Plasma ohne Fibrinogen.",
            "Plasma enthält kein Fibrinogen, während Serum Fibrinogen enthält, da es vor der Gerinnung gewonnen wird.",
            "Albumin macht ~90% der Plasmaproteine aus und ist hauptsächlich für die Immunabwehr verantwortlich.",
            "Ein erhöhter Hämatokrit (>50%) deutet immer auf eine Anämie hin, da zu viele Erythrozyten abgebaut werden.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Der **Hämatokrit (Hkt)** ist der **Volumenanteil der Erythrozyten** (nicht aller Blutzellen) am Gesamtblutvolumen:\n- **Männer:** ~45% (höher wegen Testosteron → Erythropoese ↑)\n- **Frauen:** ~42% (niedriger wegen Menstruation, weniger Testosteron)\n\n**Serum vs. Plasma:**\n- **Plasma:** Flüssiger Anteil des Blutes **mit Fibrinogen** (Gerinnungsfaktor I). Gewinnung: Blut + Antikoagulans (z. B. Heparin, EDTA) → Zentrifugation.\n- **Serum:** Plasma **ohne Fibrinogen** (und andere Gerinnungsfaktoren). Gewinnung: Blut gerinnen lassen → Zentrifugation → Überstand = Serum.\n\n**Falsch (A):** Hämatokrit misst nur **Erythrozyten**, nicht Leukozyten oder Thrombozyten (diese machen <1% des Volumens aus).\n\n**Falsch (C):** **Umgekehrt!** **Plasma** enthält Fibrinogen, **Serum** nicht (da Fibrinogen → Fibrin bei Gerinnung).\n\n**Falsch (D):** Albumin macht ~60% (nicht 90%) der Plasmaproteine aus. Funktion: **Onkotischer Druck** (hält Wasser im Gefäß), Transport (Hormone, Fettsäuren, Bilirubin). **Immunabwehr** ist Aufgabe der **Globuline** (Antikörper, Immunglobuline).\n\n**Falsch (E):** Hkt ↑ (>50%) deutet auf **Polyglobulie** (zu viele Erythrozyten) oder Dehydratation hin, **nicht** auf Anämie. **Anämie** = Hkt ↓, Hb ↓ (zu wenige Erythrozyten).",
          difficulty: 1,
          tags: ["blutbestandteile", "hämatokrit", "erythrozyten"],
        },
        {
          question: "Welche Aussage über Hämoglobin und den Sauerstofftransport trifft zu?",
          options: [
            "Hämoglobin ist ein Monomer mit einer Häm-Gruppe, die Eisen in der Fe³⁺-Form bindet, um Sauerstoff zu transportieren.",
            "Der Bohr-Effekt beschreibt, dass ein Anstieg von CO₂, ein Abfall des pH-Werts und eine Temperaturerhöhung die O₂-Bindungskurve nach rechts verschieben und die O₂-Abgabe in metabolisch aktivem Gewebe fördern.",
            "Beim Abbau von Hämoglobin entsteht Biliverdin, das direkt über die Niere ausgeschieden wird und dem Urin seine gelbe Farbe verleiht.",
            "2,3-BPG (Bisphosphoglycerat) verschiebt die O₂-Bindungskurve nach links und erhöht die Sauerstoffaffinität von Hämoglobin.",
            "Erythrozyten haben eine Lebensdauer von ~30 Tagen und werden hauptsächlich in der Leber abgebaut.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Der **Bohr-Effekt** beschreibt, wie metabolische Parameter die O₂-Affinität von Hämoglobin beeinflussen:\n\n**Rechtverschiebung der O₂-Bindungskurve** (O₂-Affinität ↓, O₂-Abgabe ↑):\n- **CO₂ ↑** (metabolisch aktives Gewebe produziert CO₂)\n- **pH ↓** (Azidose, H⁺ ↑)\n- **Temperatur ↑** (erhöhter Stoffwechsel, Muskelarbeit)\n- **2,3-BPG ↑** (bei chronischer Hypoxie, Höhenanpassung)\n\n**Physiologische Bedeutung:** In metabolisch aktivem Gewebe (Muskel, Hirn) wird mehr O₂ benötigt → lokale Bedingungen (CO₂ ↑, pH ↓, Temp ↑) → O₂-Abgabe ↑.\n\n**Falsch (A):** Hämoglobin ist ein **Tetramer** (nicht Monomer) mit **4 Untereinheiten** (2α, 2β), jede mit **einer Häm-Gruppe** (insgesamt 4 Häm-Gruppen). Eisen muss in der **Fe²⁺-Form** sein (nicht Fe³⁺), um O₂ zu binden. Fe³⁺ = Methämoglobin (kann kein O₂ binden).\n\n**Falsch (C):** Biliverdin entsteht aus Häm-Abbau (in Milz/Leber) → **Bilirubin** (gelb) → Leber (Konjugation) → Galle → Darm → **Sterkobilin** (Stuhlfarbe braun). Ein Teil wird zu **Urobilin** umgewandelt → Niere → **Urinfarbe gelb**. Biliverdin selbst wird **nicht** direkt ausgeschieden.\n\n**Falsch (D):** 2,3-BPG verschiebt die Kurve nach **rechts** (nicht links) → O₂-Affinität ↓ → **O₂-Abgabe ↑**. Linksverschiebung würde O₂-Affinität ↑ bedeuten (z. B. fetales Hb, CO-Vergiftung).\n\n**Falsch (E):** Erythrozyten haben eine Lebensdauer von **~120 Tagen** (nicht 30) und werden hauptsächlich in der **Milz** (nicht Leber) abgebaut (Retikuloendotheliales System, RES).",
          difficulty: 2,
          tags: ["hämoglobin", "sauerstofftransport", "sauerstoffbindungskurve"],
        },
        {
          question: "Welche Aussage über Leukozyten ist korrekt?",
          options: [
            "Neutrophile Granulozyten machen 20–40% der Leukozyten aus und sind hauptsächlich für die Produktion von Antikörpern verantwortlich.",
            "Lymphozyten machen 50–70% der Leukozyten aus und sind die erste Verteidigungslinie bei bakteriellen Infektionen durch Phagozytose.",
            "Neutrophile Granulozyten (50–70%) sind segmentkernige Phagozyten mit Granula, die lysosomale Enzyme und Myeloperoxidase enthalten, und bilden die erste Verteidigungslinie bei bakteriellen Infektionen.",
            "Eosinophile Granulozyten sind besonders wichtig bei viralen Infektionen und machen über 10% der Leukozyten aus.",
            "Eine Linksverschiebung im Differentialblutbild bedeutet einen Anstieg reifer segmentkerniger Neutrophiler und deutet auf eine chronische Infektion hin.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Neutrophile Granulozyten** sind die häufigsten Leukozyten:\n\n**Anteil:** 50–70% der Leukozyten\n\n**Morphologie:**\n- **Segmentkernig** (3–5 Segmente)\n- **Granula** enthalten lysosomale Enzyme (Proteasen, Elastase) und **Myeloperoxidase** (MPO)\n\n**Funktion:**\n- **Phagozytose** von Bakterien (erste Verteidigungslinie bei akuten bakteriellen Infektionen)\n- **Respiratory Burst:** NADPH-Oxidase → O₂⁻, H₂O₂ (mit MPO → HOCl, stark bakterizid)\n\n**Klinisch:**\n- **Neutropenie** (<1.500/µL) → erhöhtes Infektionsrisiko (Chemotherapie, aplastische Anämie)\n- **Neutrophilie** → bakterielle Infektion, Entzündung\n\n**Falsch (A):** **Lymphozyten** (nicht Neutrophile) machen 20–40% aus und produzieren Antikörper (B-Zellen). Neutrophile machen 50–70% aus und sind Phagozyten.\n\n**Falsch (B):** **Lymphozyten** machen 20–40% (nicht 50–70%) aus. **Neutrophile** (50–70%) sind die erste Verteidigungslinie bei bakteriellen Infektionen durch Phagozytose. Lymphozyten sind für **adaptive Immunität** zuständig (T-Zellen: zellulär, B-Zellen: Antikörper).\n\n**Falsch (D):** **Eosinophile** sind wichtig bei **Parasiten-Abwehr** und **allergischen Reaktionen** (nicht viralen Infektionen) und machen nur **1–5%** (nicht >10%) der Leukozyten aus.\n\n**Falsch (E):** **Linksverschiebung** bedeutet Anstieg **unreifer** Neutrophiler (**Stabkernige**, Metamyelozyten) → deutet auf **akute** (nicht chronische) bakterielle Infektion hin. Rechtsverschiebung = reife segmentkernige Neutrophile ↑.",
          difficulty: 2,
          tags: ["leukozyten", "granulozyten", "lymphozyten"],
        },
        {
          question: "Welche Aussage über die Blutgerinnung (Hämostase) ist korrekt?",
          options: [
            "Die primäre Hämostase erfolgt durch die Gerinnungskaskade, bei der Fibrinogen zu Fibrin umgewandelt wird.",
            "Der von-Willebrand-Faktor (vWF) ist entscheidend für die Thrombozytenadhäsion an Kollagen. Ein vWF-Mangel führt zur häufigsten hereditären Blutungsstörung.",
            "Vitamin K ist ein Kofaktor für die Synthese der Gerinnungsfaktoren I, V, VIII und XII in der Leber.",
            "Der extrinsische Weg der Gerinnungskaskade beginnt mit Faktor XII und ist langsamer als der intrinsische Weg.",
            "Hämophilie A ist durch einen Mangel an Faktor IX gekennzeichnet und führt zu einer Störung des extrinsischen Wegs.",
          ],
          correctIndex: 1,
          explanation:
            '**Richtig (B):** Der **von-Willebrand-Faktor (vWF)** ist essentiell für die **primäre Hämostase**:\n\n**Funktion:**\n1. **Thrombozytenadhäsion:** Bei Gefäßverletzung wird Kollagen (Subendothel) freigelegt → vWF bindet an Kollagen **und** an Thrombozyten (GPIb-Rezeptor) → Brückenmolekül → Adhäsion\n2. **Stabilisierung von Faktor VIII:** vWF schützt Faktor VIII vor Abbau\n\n**Von-Willebrand-Syndrom (vWS):**\n- **Häufigste hereditäre Blutungsstörung** (~1% der Bevölkerung)\n- vWF ↓ oder dysfunktional → Thrombozytenadhäsion ↓, Faktor VIII ↓\n- **Symptome:** Schleimhautblutungen (Epistaxis, Menorrhagie), verlängerte Blutungszeit\n\n**Falsch (A):** Die **primäre Hämostase** erfolgt durch **Thrombozyten** (Adhäsion → Aktivierung → Aggregation → Thrombozyten-Pfropf). Die **sekundäre Hämostase** ist die Gerinnungskaskade (Fibrinogen → Fibrin).\n\n**Falsch (C):** Vitamin K ist Kofaktor für die Synthese der Faktoren **II, VII, IX, X** (nicht I, V, VIII, XII). Merkhilfe: "1972" → II, VII, IX, X. Diese werden in der **Leber** synthetisiert. Vitamin-K-Mangel oder Antagonisten (Marcumar) → Faktoren ↓ → Blutungsneigung.\n\n**Falsch (D):** Der **extrinsische Weg** beginnt mit **Tissue Factor (TF) + Faktor VII** (nicht XII) und ist **schnell** (Sekunden). Der **intrinsische Weg** beginnt mit **Faktor XII** und ist **langsam** (Minuten).\n\n**Falsch (E):** **Hämophilie A** ist durch Mangel an **Faktor VIII** (nicht IX) gekennzeichnet. **Hämophilie B** = Faktor IX-Mangel. Beide stören den **intrinsischen Weg** (nicht extrinsischen). Beide sind X-chromosomal rezessiv.',
          difficulty: 2,
          tags: ["blutgerinnung", "thrombozyten", "hämostase"],
        },
        {
          question: "Welche Aussage über das AB0-Blutgruppensystem ist korrekt?",
          options: [
            "Blutgruppe A hat Antigen B auf den Erythrozyten und Anti-A-Antikörper im Plasma.",
            "Blutgruppe 0 ist der Universalempfänger, da keine Antikörper im Plasma vorhanden sind.",
            "Blutgruppe AB hat die Antigene A und B auf den Erythrozyten und keine Antikörper im Plasma, weshalb AB der Universalempfänger ist. Blutgruppe 0 hat keine Antigene und ist der Universalspender.",
            "AB0-Antikörper entstehen erst nach vorheriger Sensibilisierung durch Transfusion oder Schwangerschaft.",
            "Bei einer inkompatiblen Bluttransfusion (z. B. B-Blut an A-Empfänger) verläuft die Reaktion in der Regel asymptomatisch.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Das AB0-System basiert auf **Antigenen** (auf Erythrozyten) und **Antikörpern** (im Plasma):\n\n| Blutgruppe | Antigene | Antikörper | Transfusion möglich von |\n|------------|----------|------------|------------------------|\n| **A** | A | Anti-B | A, 0 |\n| **B** | B | Anti-A | B, 0 |\n| **AB** | A + B | Keine | A, B, AB, 0 (**Universalempfänger**) |\n| **0** | Keine | Anti-A + Anti-B | nur 0 (aber **Universalspender**) |\n\n⭐ **Wichtig:**\n- **AB** hat **keine Antikörper** → kann alle Blutgruppen empfangen (Universalempfänger)\n- **0** hat **keine Antigene** → kann an alle Blutgruppen gespendet werden (Universalspender)\n\n**Falsch (A):** Blutgruppe A hat **Antigen A** (nicht B) auf Erythrozyten und **Anti-B** (nicht Anti-A) im Plasma. (A gegen B, B gegen A).\n\n**Falsch (B):** Blutgruppe **AB** (nicht 0) ist der Universalempfänger (keine Antikörper). Blutgruppe 0 hat **Anti-A + Anti-B** im Plasma und ist der **Universalspender** (keine Antigene auf Erythrozyten).\n\n**Falsch (D):** AB0-Antikörper sind **natürlich vorhanden** (ohne vorherige Sensibilisierung) ab dem 6. Lebensmonat. Grund: Kreuzreaktivität mit ähnlichen Antigenen auf Bakterien (intestinale Flora). Im Gegensatz dazu entstehen **Rhesus-Antikörper** erst nach Sensibilisierung.\n\n**Falsch (E):** Bei inkompatiblen Transfusionen (z. B. B-Blut an A-Empfänger → Anti-B bindet B-Antigene) kommt es zu einer **akuten hämolytischen Transfusionsreaktion**:\n- Hämolyse (intravaskulär, IgM-vermittelt)\n- **Symptome:** Fieber, Schüttelfrost, Rückenschmerzen, Dyspnoe, Hypotonie, Schock\n- **Komplikationen:** Nierenversagen (Hb-Zylinder), DIC (Disseminierte intravasale Gerinnung)\n- **Notfall!**",
          difficulty: 2,
          tags: ["ab0-system", "blutgruppen", "antigene"],
        },
        {
          question: "Welche der folgenden Aussagen über das Blut ist FALSCH?",
          options: [
            "Erythrozyten sind kernlose, bikonkave Scheiben mit einer Lebensdauer von ca. 120 Tagen",
            "Die Linksverschiebung im Differentialblutbild zeigt vermehrt unreife stabkernige Neutrophile und deutet auf eine akute bakterielle Infektion hin",
            "AB0-Antikörper entstehen erst nach vorheriger Sensibilisierung durch Transfusion oder Kontakt mit Fremdblut",
            "Thrombozyten stammen von Megakaryozyten im Knochenmark ab und haben eine Lebensdauer von ca. 10 Tagen",
            "Der Bohr-Effekt beschreibt, dass erhöhtes CO₂ und erniedrigter pH die O₂-Abgabe des Hämoglobins im Gewebe fördern",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist falsch. AB0-Antikörper (Anti-A, Anti-B) sind natürlich vorhanden — sie entstehen OHNE vorherige Sensibilisierung ab dem 6. Lebensmonat durch Kreuzreaktivität mit bakteriellen Antigenen der Darmflora (sog. irreguläre Isoagglutinine). Im Gegensatz dazu entstehen Rhesus-Antikörper (Anti-D) erst NACH Sensibilisierung (Transfusion oder Schwangerschaft). Diese Unterscheidung ist prüfungsrelevant. Die übrigen Aussagen sind korrekt.",
          difficulty: 3,
          tags: ["falsch-aussage", "blut", "ab0-system", "antikörper"],
        },
      ],

      merksätze: [
        "**Hämatopoese:** Alle Blutzellen entstammen der pluripotenten hämatopoetischen Stammzelle (Knochenmark). Myeloische Linie: Erythrozyten, Thrombozyten, Granulozyten (Neutrophile, Eosinophile, Basophile), Monozyten/Makrophagen. Lymphoide Linie: T-Zellen (Thymus), B-Zellen (Knochenmark), NK-Zellen. EPO (Niere) → Erythropoese ↑. G-CSF → Neutrophilen-Produktion ↑.",
        "**Erythrozyten:** Bikonkave Scheibe, kernlos, ~7,5 μm, Lebensdauer ~120 Tage. Hämoglobin: Tetramer (2α, 2β), je 1 Häm-Gruppe (Fe²⁺), 4 O₂-Bindungsstellen. Bohr-Effekt: CO₂ ↑, pH ↓, Temp ↑ → Rechtverschiebung O₂-Kurve → O₂-Abgabe ↑. Abbau: Milz → Bilirubin. Anämie: Hb ↓ (Eisenmangel = häufigste).",
        "**Leukozyten-Differentialblutbild:** Neutrophile 50–70% (Phagozyten, Bakterien, Respiratory Burst), Lymphozyten 20–40% (T-Zellen, B-Zellen, NK-Zellen), Monozyten 3–8% (→ Makrophagen, Dendritische Zellen), Eosinophile 1–5% (Parasiten, Allergie), Basophile <1% (Histamin). Linksverschiebung: unreife Stabkernige ↑ → akute bakterielle Infektion.",
        "**Blutgerinnung:** Primäre Hämostase: Thrombozytenadhäsion (vWF, GPIb) + -aggregation (Fibrinogen, GPIIb/IIIa) → weißer Thrombus. Sekundäre Hämostase: Extrinsisch (TF + VII → Xa) + Intrinsisch (XII → XI → IX → X) → gemeinsam: Xa + Va → Thrombin → Fibrin → roter Thrombus. Vitamin K: Faktor II, VII, IX, X. Heparin (AT-III), Warfarin (Vit-K-Antagonist), DOAKs.",
        "**AB0-Blutgruppen:** A: Antigen A + Anti-B. B: Antigen B + Anti-A. AB: Antigene A+B, keine AK → Universalempfänger. 0: keine Antigene, Anti-A+B → Universalspender. Antikörper natürlich (IgM, kreuzreaktiv). Transfusionsreaktion (IgM-vermittelt): Hämolyse + Schock + Nierenversagen → Notfall.",
        "**Rhesus-System:** Rh+ (85%): D-Antigen vorhanden; Rh− (15%): kein D-Antigen. Anti-D entsteht nur durch Sensibilisierung. Rh− Mutter + Rh+ Fetus: 1. Schwangerschaft → Sensibilisierung bei Geburt → 2. Schwangerschaft: Anti-D (IgG, plazentagängig) → fetale Hämolyse = Morbus haemolyticus neonatorum. Prophylaxe: Anti-D-Immunglobulin post partum.",
        "**Anämien im Überblick:** Eisenmangel (häufigste): MCV ↓, MCH ↓, Ferritin ↓, Transferrinsättigung ↓. Vit-B₁₂/Folsäuremangel: MCV ↑ (megaloblastär), Hypersegmentierung Neutrophile. Hämolytische Anämie: LDH ↑, Bilirubin ↑ (indirekt), Retikulozyten ↑, Coombs-Test. Aplastische Anämie: Panzytopenie, Knochenmark leer. Sichelzellanämie: HbS-Mutation → Sichelform → Gefäßverschlüsse.",
        "**Leukämien:** AML (akute myeloische L.): Blasten ≥20% im KM, Auer-Stäbchen, ältere Patienten. ALL (akute lymphatische L.): häufigste Leukämie im Kindesalter, Philadelphia-Chromosom (bcr-abl, t(9;22)) bei CML. CLL: reife B-Zellen ↑, häufigste Leukämie bei Erwachsenen, langsamer Verlauf. Therapie: Chemotherapie, KMT, Imatinib (Tyrosinkinase-Inhibitor, CML).",
        "**DIC (Disseminierte intravasale Gerinnung):** Systemische Gerinnungsaktivierung → Verbrauchskoagulopathie: Gerinnungsfaktoren + Thrombozyten ↓ → gleichzeitig Mikrothrombosen + Blutungsneigung. Ursachen: Sepsis, Trauma, Fruchtwasserembolie, akute Leukämie. Labor: PT ↑, PTT ↑, Fibrinogen ↓, D-Dimere ↑, Thrombozyten ↓. Therapie: Grundkrankheit, FFP, Thrombozyten, Heparin (kontrovers).",
        "**Thrombozyten-Funktion und Hemmstoffe:** Thrombozyten (~150.000–400.000/μL, aus Megakaryozyten, Lebensdauer ~10 Tage). Aktivierung: ADP (P2Y₁₂), TxA₂ (COX-1), Thrombin (PAR-1). Clopidogrel: P2Y₁₂-Antagonist → ADP-Hemmung. ASS: COX-1-Hemmung → TxA₂ ↓. Abciximab: GPIIb/IIIa-Antagonist. Thrombozytopenie: <100.000/μL → Petechien; <20.000/μL → Spontanblutung.",
      ],
      klinischerBezug:
        "Eisenmangelanämie: häufigste Anämie weltweit (Frauen im gebärfähigen Alter, Malnutrition, Blutung). Symptome: Müdigkeit, Blässe, Tachykardie, Pica (Eis/Erde essen), Koilonychie (Hohlnägel). Labor: Hb ↓, MCV ↓, Ferritin ↓. Therapie: Eisensulfat/Eisengluconat p.o. Leukämien: AML (kuratives Ziel: intensive Chemotherapie + allogene KMT), ALL (Kinder: beste Prognose ~90% Heilung), CML (Imatinib revolutionierte Therapie). Gerinnungsstörungen: Hämophilie A (Faktor VIII ↓, X-chromosomal) + B (Faktor IX ↓): PTT ↑, PT normal → Substitution. Von-Willebrand-Syndrom (häufigste hereditäre Blutungsstörung): Schleimhautblutungen, verlängerte Blutungszeit. Sepsis-assoziierte DIC ist lebensbedrohlich: simultane Mikrothromben + Blutungen erfordern sofortige Intensivtherapie.",
    },
    {
      id: "bio-3-06",
      title: "Immunsystem",
      imageUrl: "/images/wiki-antibody-de.svg",
      imageCaption: "Abb.: Ablauf der Immunantwort mit T- und B-Zellen (OpenStax, CC BY 4.0)",
      stichworte: [
        "Angeborene Immunität",
        "Erworbene Immunität",
        "Antikörper",
        "T-Zellen",
        "B-Zellen",
        "Impfung",
        "Allergie",
        "MHC",
      ],
      content: `## Warum Immunologie lebensrettend ist

Ein Kind erhält seine erste MMR-Impfung — wenige Wochen später ist es gegen Masern, Mumps und Röteln geschützt. Ein Transplantationspatient nimmt lebenslang Immunsuppressiva, damit sein Körper das Spenderorgan nicht abstößt. Beide Szenarien zeigen: Das Immunsystem entscheidet über Gesundheit und Krankheit. Es unterscheidet „selbst" von „fremd", bekämpft Pathogene und bildet ein immunologisches Gedächtnis — doch es kann auch überreagieren (Allergie) oder sich gegen den eigenen Körper richten (Autoimmunität).

Die Immunabwehr gliedert sich in zwei eng verzahnte Systeme: die **angeborene (unspezifische)** und die **erworbene (adaptive, spezifische) Immunität**.

| Merkmal | Angeboren | Erworben |
|---|---|---|
| Reaktionszeit | Sekunden–Stunden | Tage (Erstantwort) |
| Spezifität | Unspezifisch (PAMPs) | Hochspezifisch (Antigene) |
| Gedächtnis | Keines | Ja (Gedächtniszellen) |
| Zelltypen | Neutrophile, Makrophagen, NK-Zellen, dendritische Zellen | T-Zellen, B-Zellen, Plasmazellen |
| Humorale Faktoren | Komplement, Interferone, Lysozym | Antikörper (Ig) |

> **Merke:** Angeboren = schnell, unspezifisch, kein Gedächtnis. Erworben = langsam (klonale Expansion braucht Tage), hochspezifisch, Gedächtnisbildung. Beide Systeme arbeiten zusammen — dendritische Zellen sind die Brücke.

---

## Angeborene Immunität — erste Verteidigungslinie

Die angeborene Immunität steht **sofort** zur Verfügung und erkennt Pathogene über konservierte Muster (PAMPs = Pathogen-Associated Molecular Patterns) mittels Pattern-Recognition-Rezeptoren (PRRs, z. B. Toll-like-Rezeptoren).

**Physikalische und chemische Barrieren:**
- **Haut**: Verhornte Epidermis, saurer pH (~5,5), antimikrobielle Peptide (Defensine)
- **Schleimhäute**: Muzin-Schicht, Lysozym (Tränen, Speichel), Magensäure (pH ~2), mukoziliäre Clearance (Atemwege)
- **Normalflora**: Konkurrenz mit Pathogenen, Produktion antimikrobieller Substanzen

**Zelluläre Komponenten:**
- **Neutrophile Granulozyten**: Häufigste Leukozyten (~60 %), erste am Infektionsort, Phagozytose + Respiratory Burst (ROS-Produktion zur Abtötung). Kurzlebig (Stunden–wenige Tage)
- **Makrophagen**: Phagozytose + **Antigenpräsentation** über MHC-II (Brücke zur erworbenen Immunität). Sekretion von IL-1, IL-6, TNF-α → Fieber, Akute-Phase-Reaktion
- **NK-Zellen (Natural Killer)**: Erkennen Zellen mit fehlendem MHC-I („Missing Self") → töten virusinfizierte Zellen und Tumorzellen durch Perforin/Granzyme → Apoptose. Keine vorherige Sensibilisierung nötig
- **Dendritische Zellen**: Professionelle APCs (antigenpräsentierende Zellen) — nehmen Antigene in der Peripherie auf, wandern in Lymphknoten und aktivieren naive T-Zellen via MHC-II

**Entzündungsreaktion (Inflammation):**
Gewebeschaden oder Infektion → Makrophagen sezernieren TNF-α, IL-1, IL-6 → **lokale Reaktion**: Vasodilatation (Rötung, Wärme), Permeabilität↑ (Schwellung), Schmerz (Prostaglandine). Chemokine locken Neutrophile an (Chemotaxis) → Diapedese (Durchtritt durch Gefäßwand) → Phagozytose am Infektionsort. **Systemisch**: Fieber (IL-1, IL-6 → Hypothalamus), Akute-Phase-Proteine (CRP, Fibrinogen aus Leber), Leukozytose.

**Komplementsystem — drei Aktivierungswege, ein Ziel:**

| Weg | Auslöser | Startmolekül |
|---|---|---|
| Klassisch | Antigen-Antikörper-Komplex | C1q |
| Lektin | Mannose auf Pathogenoberfläche | MBL (Mannose-bindendes Lektin) |
| Alternativ | Spontane C3-Hydrolyse auf Pathogenoberfläche | C3b (Verstärkungsschleife) |

Alle drei Wege münden in die **C3-Spaltung** → **C3a** (Anaphylatoxin, Entzündungsmediator) + **C3b** (Opsonin, markiert Pathogene für Phagozytose) → **C5a** (stärkste Chemotaxis) → **MAC (C5b–C9)** (Membran-Angriffs-Komplex → Lyse gramnegativer Bakterien).

**Interferone (IFN-α, IFN-β):** Von virusinfizierten Zellen sezerniert → Nachbarzellen in antiviralen Zustand versetzt (MHC-I↑, Proteinsyntheseblockade).

> **Merke:** Komplement-Effekte: **C3b** = Opsonierung, **C5a** = Chemotaxis + Entzündung, **MAC (C5b–C9)** = Lyse. NK-Zellen töten bei „Missing Self" (fehlendes MHC-I) — wichtig bei Tumoren und Viren, die MHC-I herunterregulieren.

{{DIAGRAM:immune-response}}

---

## Erworbene Immunität — T-Zell-Aktivierung und klonale Expansion

Nachdem die angeborene Immunität die erste Abwehr geleistet hat, übernimmt die erworbene Immunität mit **hochspezifischen** Antworten auf einzelne Antigene und bildet ein **immunologisches Gedächtnis**. Zentrale Akteure sind T-Zellen (zellulär) und B-Zellen (humoral). Die Aktivierung erfordert die **Antigenpräsentation** über MHC-Moleküle.

**MHC-System (Major Histocompatibility Complex):**

| | MHC-Klasse I | MHC-Klasse II |
|---|---|---|
| **Exprimiert auf** | Allen kernhaltigen Zellen | Nur APCs (dendritische Zellen, Makrophagen, B-Zellen) |
| **Präsentiert** | Intrazelluläre Antigene (Viren, Tumorproteine) | Extrazelluläre Antigene (phagozytierte Bakterien) |
| **Erkannt von** | CD8⁺ zytotoxische T-Zellen | CD4⁺ T-Helferzellen |
| **Folge** | Zielzelle wird getötet (Perforin/Granzyme → Apoptose) | Koordination der Immunantwort (Zytokine) |

**T-Zell-Aktivierung — Schritt für Schritt:**
1. **Antigenpräsentation**: Dendritische Zelle phagozytiert Pathogen → prozessiert Antigen → präsentiert Peptid auf **MHC-II** → wandert in Lymphknoten
2. **T-Zell-Erkennung**: Naive CD4⁺-T-Zelle erkennt MHC-II-Peptid-Komplex über ihren TCR (T-Zell-Rezeptor) + kostimulatorisches Signal (CD28–B7-Interaktion, „Signal 2")
3. **Klonale Expansion**: Aktivierte T-Zelle proliferiert massiv (Tage) → Tausende identischer Tochterzellen
4. **Differenzierung**: CD4⁺ → **Th1** (IFN-γ → Makrophagen-Aktivierung, zelluläre Abwehr) oder **Th2** (IL-4, IL-5, IL-13 → B-Zell-Hilfe, IgE-Produktion, Allergie) oder **Th17** (IL-17 → Neutrophilen-Rekrutierung) oder **Treg** (IL-10, TGF-β → Immunsuppression, Selbsttoleranz)
5. **Effektorphase**: CD8⁺ töten infizierte Zellen; CD4⁺ koordinieren Makrophagen und B-Zellen
6. **Gedächtnisbildung**: Nach Abklingen der Infektion überleben **Gedächtnis-T-Zellen** (langlebig) → bei Reinfektion schnellere, stärkere Antwort (Sekundärantwort)

**Klinisch — HIV/AIDS:** HIV infiziert CD4⁺-T-Zellen (Bindung über gp120 an CD4 + Korezeptor CCR5/CXCR4) → progressiver CD4⁺-Verlust → bei <200/µL = AIDS → opportunistische Infektionen (PCP, CMV, Toxoplasmose). Therapie: cART (kombinierte antiretrovirale Therapie).

**Klinisch — Transplantatabstoßung:** Spender-MHC wird als „fremd" erkannt → T-Zell-Aktivierung → Abstoßungsreaktion (hyperakut: Minuten [präformierte Antikörper]; akut: Tage–Wochen [T-Zellen]; chronisch: Monate–Jahre [Fibrose]). Immunsuppressiva (Ciclosporin, Tacrolimus) hemmen T-Zell-Aktivierung.

> **Merke:** MHC-I (alle kernhaltigen Zellen) → CD8⁺ → intrazelluläre Pathogene (Viren). MHC-II (nur APCs) → CD4⁺ → extrazelluläre Pathogene (Bakterien). Klonale Expansion = massiv Tochterzellen → Effektorzellen + Gedächtniszellen. Merkhilfe: **I** × **8** = **8**, **II** × **4** = **8**.

---

## Antikörper — Aufbau, Klassen und Funktionen

B-Zellen reifen im **Knochenmark** und werden in den Lymphknoten durch CD4⁺-T-Helferzellen (T-Zell-Hilfe via CD40L + IL-4) aktiviert → Differenzierung zu **Plasmazellen** (Antikörper-Fabriken) und **Gedächtnis-B-Zellen**.

**Antikörper-Struktur (Y-Form):**
- **2 schwere Ketten** (H-Ketten) + **2 leichte Ketten** (L-Ketten, κ oder λ), verbunden durch Disulfidbrücken
- **Fab-Region** (Fragment antigen-binding): Variable Domänen (VH + VL) → **Antigenbindungsstelle** (2 pro Antikörper). Bestimmt die Spezifität — jeder Antikörper erkennt ein spezifisches Epitop
- **Fc-Region** (Fragment crystallizable): Konstante Domänen der schweren Ketten → bestimmt die **biologische Funktion** (Komplementaktivierung, Bindung an Fc-Rezeptoren auf Phagozyten, Plazenta-Transfer). Die Fc-Region definiert die Immunglobulinklasse
- **Hinge-Region** (Gelenkregion): Flexible Verbindung zwischen Fab und Fc → ermöglicht gleichzeitige Bindung zweier Epitope

**Die fünf Immunglobulinklassen:**

| Ig-Klasse | Struktur | Vorkommen | Funktion | Klinische Relevanz |
|---|---|---|---|---|
| **IgG** | Monomer | Serum (~75 %) | Opsonierung, Komplement (klassisch), Neutralisation | Einziges **plazentagängiges** Ig → Nestschutz; Sekundärantwort, lang (HWZ ~21 Tage) |
| **IgM** | Pentamer | Serum | Komplement ↑↑↑ (10 Bindungsstellen), Agglutination | **Primärantwort** (akute Infektion); IgM↑ = frische Infektion |
| **IgA** | Dimer (sekretorisch) | Schleimhäute, Muttermilch, Speichel, Tränen | Neutralisation auf Schleimhäuten | Schleimhautschutz, Muttermilch-IgA → Säuglingsschutz |
| **IgE** | Monomer | Gewebe (Mastzellen) | Mastzell-Degranulation, Parasiten | **Allergie** Typ I, Parasiten-Abwehr; IgE↑ = Atopie |
| **IgD** | Monomer | B-Zell-Oberfläche | Ko-Rezeptor mit IgM auf naiven B-Zellen | Rolle bei B-Zell-Aktivierung, klinisch wenig relevant |

**Klassenwechsel (Isotype Switching):** Nach B-Zell-Aktivierung kann die schwere Kette gewechselt werden (IgM → IgG, IgA oder IgE), ohne die Antigenspezifität zu ändern. Gesteuert durch T-Helfer-Zytokine: IL-4 → IgE (Allergie), TGF-β → IgA (Schleimhaut), IFN-γ → IgG (Opsonierung). Der Klassenwechsel erfolgt durch DNA-Rekombination in der Switch-Region.

**Antikörper-Funktionen im Überblick:**
- **Neutralisation**: Blockiert Toxine/Viren an Zielzell-Bindung
- **Opsonierung**: Fc-Region markiert Pathogene → Phagozytose durch Makrophagen/Neutrophile ↑
- **Komplement-Aktivierung**: IgM und IgG aktivieren klassischen Weg (C1q bindet Fc)
- **ADCC** (Antibody-Dependent Cell-mediated Cytotoxicity): NK-Zellen binden über Fc-Rezeptor (CD16) an Antikörper-beladene Zielzellen → Lyse

> **Merke:** Y-Form: 2 Fab (Antigenbindung, Spezifität) + 1 Fc (Effektorfunktion, Klasse). IgM = Pentamer, Primärantwort, akut. IgG = Monomer, Sekundärantwort, plazentagängig, ~75 % im Serum. IgA = Dimer, Schleimhaut. IgE = Allergie + Parasiten. Klassenwechsel ändert Fc (Funktion), nicht Fab (Spezifität).

{{IMAGE}}

---

## Aktive vs. passive Immunisierung

Die Immunisierung nutzt das Prinzip der erworbenen Immunität gezielt aus — entweder durch Stimulation des eigenen Immunsystems oder durch Zufuhr fertiger Antikörper.

**Aktive Immunisierung** — Antigen-Gabe → Immunsystem bildet eigene Antikörper + Gedächtniszellen:
- **Lebendimpfstoffe** (attenuierte Erreger): MMR, Varizellen, Rotavirus — stärkste Immunantwort, aber kontraindiziert bei Immunsuppression
- **Totimpfstoffe**: Influenza (inaktiviert), Hepatitis A, Polio (Salk)
- **Toxoidimpfstoffe**: Tetanus, Diphtherie (inaktiviertes Toxin)
- **mRNA-Impfstoffe**: COVID-19 (Spike-Protein-kodierend)
- Wirkungseintritt: **Wochen** (klonale Expansion nötig), Schutz: **Jahre bis Jahrzehnte**

**Passive Immunisierung** — Zufuhr fertiger Antikörper (IgG):
- Tetanus-Immunglobulin (Postexpositionsprophylaxe)
- Anti-D-Immunglobulin (Rhesus-Inkompatibilität)
- Hepatitis-B-Immunglobulin (Nadelstichverletzung)
- Wirkungseintritt: **Stunden** (sofort), Schutz: **Wochen bis ~3 Monate** (Antikörper werden abgebaut), **kein Gedächtnis**

**Natürlicher Nestschutz:** Mütterliches IgG passiert die Plazenta → Schutz des Neugeborenen für ~6 Monate (passive Immunisierung). Zusätzlich: IgA über Muttermilch (Schleimhautschutz).

> **Merke:** Aktiv = Antigen → eigene Antikörper + Gedächtnis → Langzeitschutz (Wochen Anlaufzeit). Passiv = fertige Antikörper → Sofortschutz, kein Gedächtnis, kurz (~3 Monate). Lebendimpfstoffe kontraindiziert bei Immunsuppression!

---

## Allergie und Hypersensitivität — die vier Typen nach Coombs und Gell

Überreaktionen des Immunsystems werden nach Mechanismus in vier Typen eingeteilt. Nur **Typ I** ist IgE-vermittelt und eine Sofortreaktion.

**Typ-I-Allergie (IgE-vermittelt, Soforttyp) — Schritt für Schritt:**
1. **Sensibilisierung** (Erstkontakt): Allergen → dendritische Zelle → Th2-Aktivierung → IL-4 → B-Zelle → Klassenwechsel zu **IgE** → IgE bindet an Fc-Rezeptoren (FcεRI) auf **Mastzellen/Basophilen**
2. **Re-Exposition** (Zweitkontakt): Allergen **kreuzvernetzt** zwei IgE auf Mastzelle → **Degranulation** → Histamin, Leukotriene, Prostaglandine
3. **Symptome**: Histamin → Vasodilatation, Permeabilität↑, Bronchospasmus, Pruritus (Juckreiz). Lokale Manifestationen: Rhinitis, Urtikaria, Asthma. **Systemisch**: Anaphylaxie (Schock, Kreislaufversagen)
4. **Notfalltherapie Anaphylaxie**: **Adrenalin i.m.** (α₁ → Vasokonstriktion; β₂ → Bronchodilatation) — erste Maßnahme! + Volumen + Antihistaminika + Glukokortikoide

| Typ | Name | Mechanismus | Zeitverlauf | Klinische Beispiele |
|---|---|---|---|---|
| **I** | Soforttyp | IgE + Mastzell-Degranulation | Sekunden–Minuten | Anaphylaxie, Heuschnupfen, allergisches Asthma, Urtikaria |
| **II** | Zytotoxisch | IgG/IgM gegen Zelloberflächen-Antigene → Komplement/ADCC | Stunden | Autoimmunhämolyse, Morbus haemolyticus neonatorum, Myasthenia gravis (Anti-AChR), Goodpasture (Anti-GBM) |
| **III** | Immunkomplex | Ag-Ak-Komplexe → Komplementaktivierung → Gewebeschaden | Stunden–Tage | SLE (Anti-dsDNA), Post-Streptokokken-GN, Serumkrankheit |
| **IV** | Verzögert (T-Zell-vermittelt) | T-Zellen (CD4⁺/CD8⁺) → Zytokinfreisetzung → Entzündung | 48–72 Stunden | Tuberkulin-Test, Kontaktdermatitis (Nickel), Transplantatabstoßung (zellulär), Diabetes Typ 1 |

**Klinisch — Autoimmunerkrankungen:** Verlust der Selbsttoleranz → Immunsystem greift körpereigene Strukturen an. Beispiele: SLE (Anti-dsDNA, Schmetterlingserythem), Hashimoto-Thyreoiditis (Anti-TPO → Hypothyreose), Rheumatoide Arthritis (Anti-CCP, Synovitis), MS (Demyelinisierung im ZNS), Diabetes Typ 1 (Anti-GAD → β-Zell-Zerstörung).

> **Merke:** Typ I = IgE + Mastzellen (Sofort, Allergie). Typ II = IgG/IgM gegen Zellen (zytotoxisch). Typ III = Immunkomplexe (Komplement). Typ IV = T-Zellen (verzögert, 48–72 h). Anaphylaxie-Therapie: **Adrenalin i.m.** ist immer erste Maßnahme!`,
      lernziele: [
        "Die angeborene (unspezifische) und erworbene (adaptive, spezifische) Immunität nach Reaktionsgeschwindigkeit, Spezifität und Gedächtnisbildung unterscheiden und die wichtigsten Zelltypen jeder Linie benennen.",
        "Das Komplementsystem (klassischer, alternativer, Lektin-Weg) mit seinen Effekten (C3b Opsonierung, C5a Chemotaxis, MAC Lyse) beschreiben.",
        "Die Antikörperklassen (IgM: Primärantwort, Pentamer; IgG: Sekundärantwort, plazentagängig; IgA: Schleimhaut; IgE: Allergie/Mastzellen) nach Struktur und Funktion unterscheiden.",
        "Die MHC-Präsentation erklären: MHC I (alle kernhaltigen Zellen) → CD8⁺-T-Zellen (Viren, intrazellulär); MHC II (APCs) → CD4⁺-T-Zellen (Bakterien, extrazellulär).",
        "Aktive vs. passive Immunisierung sowie den IgE-vermittelten Allergietyp-I-Mechanismus (Sensibilisierung → Re-Exposition → Histaminfreisetzung → Anaphylaxie, Therapie: Adrenalin) erklären.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über CD8⁺- und CD4⁺-T-Zellen ist korrekt?",
        options: [
          {
            id: "a",
            text: "CD4⁺-T-Zellen erkennen Antigene über MHC I und töten infizierte Zellen direkt durch Perforin.",
          },
          {
            id: "b",
            text: "CD8⁺-T-Zellen (zytotoxisch) erkennen via MHC I virusbefallene/entartete Zellen und töten sie durch Perforin/Granzyme. CD4⁺-T-Helferzellen erkennen Antigene via MHC II auf APCs und koordinieren die Immunantwort (Th1: IFN-γ; Th2: IL-4/IL-5).",
          },
          {
            id: "c",
            text: "CD8⁺-T-Zellen erkennen ausschließlich extrazelluläre Bakterien und präsentieren diese über MHC II.",
          },
          { id: "d", text: "Th1- und Th2-Zellen sind Subtypen der CD8⁺-T-Zellen." },
          {
            id: "e",
            text: "CD4⁺-T-Zellen zerstören virusinfizierte Zellen durch Phagozytose ohne Antigen-Präsentation.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "CD8⁺-T-Zellen (zytotoxisch) erkennen intrazelluläre Antigene über MHC I (alle kernhaltigen Zellen) und induzieren Apoptose via Perforin/Granzyme. CD4⁺-T-Helferzellen erkennen extrazelluläre Antigene über MHC II (APCs) und koordinieren: Th1 (IFN-γ → Makrophagen) vs. Th2 (IL-4/IL-5 → B-Zell-Aktivierung, IgE).",
      },
      selfTest: [
        {
          question:
            "Welche Aussage über die Unterschiede zwischen angeborener und erworbener Immunität ist korrekt?",
          options: [
            "Die angeborene Immunität reagiert schnell (Minuten bis Stunden), ist unspezifisch und bildet kein immunologisches Gedächtnis, während die erworbene Immunität langsam reagiert (Tage), hochspezifisch ist und ein Gedächtnis entwickelt.",
            "Die erworbene Immunität umfasst physikalische Barrieren wie Haut und Schleimhäute, während die angeborene Immunität aus Antikörpern und T-Zellen besteht.",
            "Die angeborene Immunität bildet ein immunologisches Gedächtnis und reagiert bei erneutem Kontakt mit demselben Pathogen schneller.",
            "B-Zellen und T-Zellen gehören zur angeborenen Immunität, während Makrophagen und Neutrophile Teil der erworbenen Immunität sind.",
            'Die erworbene Immunität kann zwischen "selbst" und "fremd" nicht unterscheiden, während die angeborene Immunität Selbsttoleranz besitzt.',
          ],
          correctIndex: 0,
          explanation:
            '**Richtig (A):** Die beiden Immunsysteme unterscheiden sich fundamental:\n\n**Angeborene (unspezifische) Immunität:**\n- **Reaktionszeit:** Sofort (~Minuten bis Stunden)\n- **Spezifität:** Unspezifisch (erkennt allgemeine Pathogen-Muster, PAMPs)\n- **Gedächtnis:** **KEIN** Gedächtnis (gleiche Reaktion bei erneutem Kontakt)\n- **Komponenten:** Physikalische Barrieren (Haut, Schleimhäute), Phagozyten (Neutrophile, Makrophagen), NK-Zellen, Komplementsystem, Interferone\n\n**Erworbene (adaptive, spezifische) Immunität:**\n- **Reaktionszeit:** Langsam (~Tage, klonale Expansion benötigt Zeit)\n- **Spezifität:** Hochspezifisch (erkennt spezifische Antigene über TCR/BCR)\n- **Gedächtnis:** **Gedächtnisbildung** (Gedächtnis-T/B-Zellen → schnellere, stärkere Sekundärantwort)\n- **Komponenten:** B-Zellen (Antikörper, humoral), T-Zellen (CD4⁺, CD8⁺, zellulär)\n\n**Falsch (B):** Physikalische Barrieren (Haut, Schleimhäute) gehören zur **angeborenen** Immunität. Antikörper (B-Zellen) und T-Zellen gehören zur **erworbenen** Immunität.\n\n**Falsch (C):** Die **angeborene** Immunität bildet **kein Gedächtnis**. Nur die **erworbene** Immunität bildet Gedächtniszellen (B- und T-Gedächtniszellen) → schnellere Sekundärantwort.\n\n**Falsch (D):** **Umgekehrt!** B- und T-Zellen sind Teil der **erworbenen** Immunität. Makrophagen und Neutrophile (Phagozyten) sind Teil der **angeborenen** Immunität.\n\n**Falsch (E):** Die **erworbene** Immunität kann sehr wohl zwischen "selbst" und "fremd" unterscheiden (Selbsttoleranz durch zentrale [Thymus, Knochenmark] und periphere Toleranz [Treg]). Autoimmunerkrankungen entstehen, wenn diese Selbsttoleranz versagt.',
          difficulty: 1,
          tags: ["angeborene immunität", "erworbene immunität", "immunabwehr"],
        },
        {
          question:
            "Welche Aussage über NK-Zellen (Natural Killer) und das Komplementsystem ist korrekt?",
          options: [
            "NK-Zellen töten Zielzellen, die MHC-I-Moleküle exprimieren, während sie Zellen ohne MHC-I verschonen.",
            'NK-Zellen töten virusinfizierte Zellen und Tumorzellen, die kein oder reduziertes MHC-I exprimieren ("Missing Self"), durch Freisetzung von Perforin und Granzymen.',
            "Das Komplementsystem besteht aus drei Komponenten: C3b führt zur Lyse, C5a zur Opsonierung und C5b-C9 zur Chemotaxis.",
            "Der Membran-Angriffs-Komplex (MAC) des Komplementsystems wird aus C1-C3 gebildet und führt zur Phagozytose von Bakterien.",
            "NK-Zellen sind Teil der erworbenen Immunität und benötigen eine vorherige Sensibilisierung, um ihre Zielzellen anzugreifen.",
          ],
          correctIndex: 1,
          explanation:
            '**Richtig (B):** **NK-Zellen** (Natural Killer) sind Teil der **angeborenen Immunität** und töten Zielzellen ohne vorherige Sensibilisierung:\n\n**Erkennungsmechanismus ("Missing Self"):**\n- **Gesunde Zellen:** Exprimieren **MHC-I** → NK-Zellen erkennen "Selbst" → **keine Lyse**\n- **Virusinfizierte Zellen/Tumorzellen:** Unterdrücken oft MHC-I (Immunevasion) → NK-Zellen erkennen **fehlendes MHC-I** → **Aktivierung** → Lyse\n\n**Mechanismus:**\n- **Perforin:** Bildet Poren in Zielzell-Membran\n- **Granzyme:** Proteasen → diffundieren durch Poren → aktivieren Caspasen → **Apoptose**\n\n**Funktion:** Schutz vor Viren (v. a. Herpesviren, CMV), Tumor-Surveillance\n\n**Falsch (A):** **Umgekehrt!** NK-Zellen töten Zellen **ohne MHC-I** ("Missing Self") und verschonen Zellen **mit MHC-I**.\n\n**Falsch (C):** Die Funktionen sind **vertauscht**:\n- **C3b:** **Opsonierung** (markiert Pathogene → Phagozytose ↑)\n- **C5a:** **Chemotaxis** (lockt Neutrophile/Makrophagen an)\n- **C5b-C9 (MAC):** **Lyse** (Membran-Angriffs-Komplex → Zellmembran-Perforation → Bakterien-Lyse)\n\n**Falsch (D):** Der **MAC** besteht aus **C5b-C9** (nicht C1-C3) und führt zur **Lyse** (nicht Phagozytose). C3b führt zur Opsonierung → Phagozytose.\n\n**Falsch (E):** NK-Zellen sind Teil der **angeborenen** Immunität (nicht erworbenen) und benötigen **keine vorherige Sensibilisierung** (reagieren sofort).',
          difficulty: 2,
          tags: ["nk-zellen", "komplementsystem", "immunabwehr"],
        },
        {
          question: "Welche Aussage über Antikörper (Immunglobuline) ist korrekt?",
          options: [
            "IgG ist der erste Antikörper, der bei einer Primärinfektion gebildet wird, und hat eine kurze Halbwertszeit von etwa 3 Tagen.",
            "IgM ist ein Pentamer und wird hauptsächlich bei der Primärantwort gebildet. IgG dominiert die Sekundärantwort, hat eine lange Halbwertszeit (~21 Tage) und kann die Plazenta passieren.",
            "IgA wird hauptsächlich im Blutserum gefunden und ist für die Opsonierung von Bakterien verantwortlich.",
            "IgE ist der häufigste Antikörper im Serum und macht etwa 75% aller Immunglobuline aus.",
            "Alle Antikörper-Klassen können die Plazenta passieren und Nestschutz bieten.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **IgM** und **IgG** unterscheiden sich in Struktur, Zeitpunkt und Funktion:\n\n**IgM:**\n- **Struktur:** **Pentamer** (5 Monomere, größter Antikörper)\n- **Zeitpunkt:** **Primärantwort** (erste Infektion, akute Phase)\n- **Funktion:** Starke **Komplement-Aktivierung** (10 Bindungsstellen), Agglutination\n- **Diagnostik:** IgM ↑ → **akute Infektion**\n\n**IgG:**\n- **Struktur:** Monomer\n- **Zeitpunkt:** **Sekundärantwort** (nach IgM, Gedächtnis)\n- **Halbwertszeit:** ~21 Tage (**längste** unter allen Ig)\n- **Funktion:** Opsonierung, Komplement-Aktivierung, Neutralisation, **plazentagängig** (einziger Antikörper!) → **Nestschutz**\n- **Diagnostik:** IgG ↑ → abgelaufene Infektion, Impfung, Immunität\n\n**Falsch (A):** **IgM** (nicht IgG) ist der erste Antikörper bei Primärinfektion. IgG hat eine **lange** Halbwertszeit (~21 Tage, nicht 3 Tage).\n\n**Falsch (C):** **IgA** wird hauptsächlich in **Sekreten** gefunden (Speichel, Tränen, Muttermilch, Darm) als **Dimer** (nicht im Serum). Funktion: **Schleimhautschutz**, Neutralisation (nicht Opsonierung). **IgG** ist für Opsonierung verantwortlich.\n\n**Falsch (D):** **IgG** (nicht IgE) macht ~75% der Serum-Immunglobuline aus. **IgE** macht <1% aus und ist für **Allergie** (Typ-I-Hypersensitivität) und Parasiten-Abwehr zuständig (bindet an Mastzellen/Basophile).\n\n**Falsch (E):** Nur **IgG** kann die Plazenta passieren. IgM, IgA, IgE, IgD können **nicht** die Plazenta passieren. Nestschutz erfolgt durch mütterliches IgG (transplazentar) und IgA (Muttermilch, oral).",
          difficulty: 2,
          tags: ["antikörper", "immunglobuline", "igg"],
        },
        {
          question: "Welche Aussage über T-Zellen und MHC-Moleküle ist korrekt?",
          options: [
            "MHC-I-Moleküle werden nur auf Antigen-präsentierenden Zellen (APCs) exprimiert und präsentieren extrazelluläre Antigene an CD8⁺ T-Zellen.",
            "CD4⁺ T-Helfer-Zellen erkennen Antigene, die über MHC-I-Moleküle präsentiert werden, und töten anschließend die infizierten Zellen.",
            "MHC-I-Moleküle werden auf allen kernhaltigen Zellen exprimiert und präsentieren intrazelluläre Antigene (z. B. Viren) an CD8⁺ zytotoxische T-Zellen. MHC-II-Moleküle auf APCs präsentieren extrazelluläre Antigene an CD4⁺ T-Helfer-Zellen.",
            "CD8⁺ zytotoxische T-Zellen koordinieren die Immunantwort durch Freisetzung von Zytokinen wie IL-4 und IFN-γ.",
            "Regulatorische T-Zellen (Treg) fördern Autoimmunreaktionen durch Aktivierung autoreaktiver T-Zellen.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Die **MHC-Präsentation** ist zentral für die T-Zell-Aktivierung:\n\n**MHC-I:**\n- **Exprimiert auf:** **Alle kernhaltigen Zellen** (nicht nur APCs!)\n- **Präsentiert:** **Intrazelluläre Antigene** (Viren, Tumorantigene, eigene Proteine)\n- **Erkannt von:** **CD8⁺ T-Zellen** (zytotoxische T-Zellen, CTL)\n- **Folge:** CD8⁺ töten infizierte/Tumor-Zellen durch Perforin/Granzyme → Apoptose\n\n**MHC-II:**\n- **Exprimiert auf:** **Nur APCs** (Dendritische Zellen, Makrophagen, B-Zellen)\n- **Präsentiert:** **Extrazelluläre Antigene** (Bakterien, Parasiten, phagozytiert)\n- **Erkannt von:** **CD4⁺ T-Zellen** (T-Helfer-Zellen, Th)\n- **Folge:** CD4⁺ koordinieren Immunantwort (Th1 → Makrophagen-Aktivierung, Th2 → B-Zell-Aktivierung)\n\n⭐ **Merkhilfe:** MHC **I** → CD**8**⁺ (intrazellulär, Viren), MHC **II** → CD**4**⁺ (extrazellulär, Bakterien).\n\n**Falsch (A):** MHC-I wird auf **allen kernhaltigen Zellen** (nicht nur APCs) exprimiert und präsentiert **intrazelluläre** (nicht extrazelluläre) Antigene an CD8⁺.\n\n**Falsch (B):** **CD8⁺** (nicht CD4⁺) erkennen MHC-I und töten infizierte Zellen. **CD4⁺** erkennen **MHC-II** (nicht MHC-I) und **koordinieren** (töten nicht selbst).\n\n**Falsch (D):** **CD4⁺ T-Helfer-Zellen** (nicht CD8⁺) koordinieren durch Zytokine (Th1: IFN-γ, Th2: IL-4/IL-5). **CD8⁺** töten Zellen (Perforin/Granzyme).\n\n**Falsch (E):** **Treg** (regulatorische T-Zellen) **supprimieren** die Immunantwort (IL-10, TGF-β) und **verhindern** Autoimmunität (Selbsttoleranz). Sie **fördern keine** Autoimmunreaktionen.",
          difficulty: 2,
          tags: ["t-zellen", "mhc", "zytotoxische t-zellen"],
        },
        {
          question: "Welche Aussage über Impfungen ist korrekt?",
          options: [
            "Bei der aktiven Immunisierung werden fertige Antikörper verabreicht, die sofortigen Schutz bieten, aber kein immunologisches Gedächtnis erzeugen.",
            "Bei der passiven Immunisierung werden Antigene (z. B. abgeschwächte Erreger) verabreicht, die zur Bildung eigener Antikörper und eines immunologischen Gedächtnisses führen.",
            "Aktive Immunisierung (z. B. MMR, Tetanus-Toxoid) führt zur Bildung eigener Antikörper und eines immunologischen Gedächtnisses, während passive Immunisierung (z. B. Tetanus-Immunglobulin) sofortigen, aber kurzfristigen Schutz ohne Gedächtnis bietet.",
            "Lebendimpfstoffe (z. B. Masern, Mumps) sind besonders sicher für immunsupprimierte Patienten und werden bevorzugt eingesetzt.",
            "Die passive Immunisierung ist die Methode der Wahl für langfristigen Schutz und wird routinemäßig bei Kinderimpfungen eingesetzt.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Aktive** und **passive** Immunisierung unterscheiden sich fundamental:\n\n**Aktive Immunisierung:**\n- **Prinzip:** **Antigen-Gabe** (attenuiert, inaktiviert, Toxoid, mRNA) → Immunsystem bildet **eigene Antikörper + Gedächtniszellen**\n- **Beispiele:**\n  - Lebendimpfstoff: Masern, Mumps, Röteln (MMR), Varizellen\n  - Totimpfstoff: Influenza, Polio (Salk), Hepatitis A\n  - Toxoid: Tetanus, Diphtherie\n  - mRNA: COVID-19\n- **Vorteile:** **Langfristiger Schutz** (Jahre–Jahrzehnte), **Gedächtnis**\n- **Nachteile:** **Langsamer Wirkeintritt** (Wochen), Kontraindikation bei Immunsuppression (Lebendimpfstoff!)\n\n**Passive Immunisierung:**\n- **Prinzip:** Gabe von **fertigen Antikörpern** (Immunglobuline, meist IgG)\n- **Beispiele:**\n  - Tetanus-Immunglobulin (nach Verletzung, kein Impfschutz)\n  - Hepatitis-B-Immunglobulin (Nadelstich)\n  - Anti-D-Immunglobulin (Rhesus-Prophylaxe)\n- **Vorteile:** **Sofortiger Schutz** (Stunden)\n- **Nachteile:** **Kurze Wirkdauer** (~3 Monate, Antikörper werden abgebaut), **kein Gedächtnis**\n\n**Falsch (A):** **Passive** Immunisierung (nicht aktive) verwendet fertige Antikörper. **Aktive** Immunisierung verwendet Antigene.\n\n**Falsch (B):** **Aktive** Immunisierung (nicht passive) verwendet Antigene. **Passive** Immunisierung verwendet fertige Antikörper.\n\n**Falsch (D):** **Lebendimpfstoffe** sind **kontraindiziert** bei Immunsuppression (z. B. HIV, Chemotherapie, Kortikosteroide), da attenuierte Erreger sich vermehren können → Infektion-Risiko. Bei Immunsupprimierten: **Totimpfstoffe** bevorzugt.\n\n**Falsch (E):** **Aktive** Immunisierung (nicht passive) ist die Methode für **langfristigen Schutz** und wird bei Kinderimpfungen eingesetzt (z. B. MMR, DTaP). Passive Immunisierung ist **kurzfristig** und nur für spezielle Situationen (Postexpositionsprophylaxe).",
          difficulty: 2,
          tags: ["impfung", "immunisierung", "schutzimpfung"],
        },
      ],

      merksätze: [
        "**Angeboren vs. Erworben:** Angeborene Immunität: sofort (Minuten–Stunden), unspezifisch, kein Gedächtnis. Komponenten: Haut/Schleimhäute, Neutrophile (Phagozytose, Respiratory Burst), Makrophagen, NK-Zellen (Missing Self, MHC-I↓ → Lyse via Perforin/Granzyme), Komplement (C3b-Opsonierung, C5a-Chemotaxis, MAC-Lyse), Interferone. Erworbene Immunität: langsam (Tage), hochspezifisch, Gedächtnisbildung.",
        "**B-Zellen & Antikörper:** B-Zellen reifen im Knochenmark. Aktivierung (T-Zell-Hilfe, CD4⁺ → CD40L/IL-4) → Plasmazellen + Gedächtnis-B-Zellen. IgM (Pentamer, Primärantwort, akut), IgG (Monomer, Sekundärantwort, plazentagängig, ~75%, Opsonierung), IgA (Dimer, Schleimhaut), IgE (<1%, Allergie/Parasiten). Funktionen: Neutralisation, Opsonierung, Komplement, ADCC.",
        "**T-Zellen & MHC:** T-Zellen reifen im Thymus. CD4⁺ T-Helfer erkennen MHC-II (APCs: Makrophagen, dendritische Zellen, B-Zellen). CD8⁺ zytotoxische T-Zellen erkennen MHC-I (alle kernhaltigen Zellen) → Perforin/Granzyme → Apoptose. Treg (FOXP3) → Selbsttoleranz. Positive Selektion (Cortex, MHC-Erkennung), negative Selektion (Mark, Selbst-Antigen-Elimination), nur ~5% überleben.",
        "**Impfung aktiv vs. passiv:** Aktiv: Antigen-Gabe → eigene Antikörper + Gedächtnis → Langzeitschutz. Lebendimpfstoff (MMR, Varizellen) kontraindiziert bei Immunsuppression! Totimpfstoff/Toxoid/mRNA: sicherer. Passiv: fertige Antikörper (IgG) → Sofortschutz, kein Gedächtnis (~3 Monate). Beispiele: Tetanus-Ig, Anti-D, HBs-Ig.",
        "**Allergie Typ I (IgE-vermittelt, sofort):** Sensibilisierung: Allergen → Th2 → IL-4 → B-Zellen → IgE → Mastzellen/Basophile. Re-Exposition: Allergen vernetzt IgE → Degranulation → Histamin (Vasodilatation, Bronchospasmus, Pruritus), Leukotriene, Prostaglandine. Anaphylaxie: systemisch (Hypotonie, Schock, Bronchospasmus). Therapie: Adrenalin i.m. (erste Wahl!). Hyposensibilisierung = Langzeitprophylaxe.",
        "**Typ II–IV Hypersensitivität:** Typ II (Autoantikörper gegen Zelloberflächen): Myasthenia gravis (Anti-nAChR), Goodpasture (Anti-GBM), hämolytische Anämie. Typ III (Immunkomplexe, Komplementaktivierung): SLE (Anti-dsDNA), Post-Streptokokken-GN, Serumkrankheit. Typ IV (T-Zell-vermittelt, verzögert 48–72 h): Tuberkulin-Test, Kontaktdermatitis, Transplantatabstoßung (zellulär).",
        "**HIV/AIDS:** HIV-1 (Retrovirus) infiziert CD4⁺-T-Zellen (gp120 + CD4 + CCR5/CXCR4 als Korezeptor) + Makrophagen. Schritte: Reverse Transkriptase (RNA → DNA), Integrase (viral-DNA → Wirtsgenom), Protease (Virusreifung). CD4⁺ <200/μL = AIDS. Opportunistische Infektionen: PCP, CMV-Retinitis, Toxoplasma, Kryptokokken. cART: NRTI + NNRTI oder PI + Integrasehemmer. Prä-Expositionsprophylaxe (PrEP) möglich.",
        "**Autoimmunerkrankungen Überblick:** Rheumatoide Arthritis (Anti-CCP, RF, destruktive Synovitis; MTX, TNF-α-Blocker). SLE (Anti-dsDNA, Lupusnephritis, Schmetterlingserythem; Hydroxychloroquin, MMF). Hashimoto (Anti-TPO, Hypothyreose; Thyroxin). MS (Demyelinisierung ZNS; Interferon-β, Natalizumab). Diabetes Typ 1 (Anti-GAD, β-Zell-Zerstörung; Insulin).",
        "**Komplement & Immunevasion:** C3b (Opsonierung), C5a (Chemotaxis, Entzündung), MAC/C5b-C9 (Bakterienlyse). Drei Aktivierungswege: Klassisch (Antikörper→C1), Lektin (MBL), Alternativ (Pathogenoberfläche). C3-Mangel: rezidivierende Infektionen. Viren hemmen MHC-I → NK-Zellen erkennen Missing Self. Bekapselte Bakterien resistenter gegen Phagozytose (Pneumokokken, Meningokokken → Impfung wichtig nach Splenektomie).",
      ],
      klinischerBezug:
        "HIV/AIDS ist eine der bedeutendsten Infektionskrankheiten weltweit: cART (kombinierte antiretrovirale Therapie) ermöglicht heute normale Lebenserwartung. Autoimmunerkrankungen: SLE (Lupusnephritis als schwerwiegendste Komplikation, Anti-dsDNA diagnostisch; Therapie: Hydroxychloroquin, MMF, Glukokortikoide). Rheumatoide Arthritis: TNF-α-Blocker (Adalimumab, Infliximab) revolutionierten Therapie. Anaphylaxie: medizinischer Notfall, Adrenalin-Autoinjektoren (EpiPen) für gefährdete Patienten, Reanimation bei Herz-Kreislauf-Stillstand. Allergien (Heuschnupfen, Asthma, Nahrungsmittelallergien): steigende Prävalenz in Industrienationen (Hygiene-Hypothese). Impfungen: Masern-Eradikation möglich durch MMR-Impfung (Herdenimmunität ab ~95% Durchimpfungsrate); Impfskepsis gefährdet Herdenimmunität. Primäre Immundefekte: X-chromosomale Agammaglobulinämie (BTK-Mutation, keine B-Zellen → keine Antikörper → rekurrierende Infektionen ab 6. Lebensmonat).",
    },
    {
      id: "bio-3-07",
      title: "Lymphsystem",
      imageUrl: "/images/wiki-lymphatic-system-de.svg",
      imageCaption:
        "Abb.: Lymphatisches System — Lymphknoten, Milz, Thymus und Lymphgefäße (Wikimedia Commons, Public Domain)",
      stichworte: ["Lymphknoten", "Milz", "Thymus", "Lymphe", "Lymphgefäße", "Lymphozytenreifung"],
      content: `Neben dem Blutkreislauf durchzieht ein zweites Gefäßsystem den Körper: das lymphatische System. Es transportiert überschüssige Gewebsflüssigkeit zurück, spielt eine zentrale Rolle in der Immunabwehr und leitet resorbierte Fette aus dem Darm.

## Lymphgefäße — vom Kapillarnetz zum Ductus thoracicus

Das lymphatische Gefäßsystem beginnt blind im Gewebe und transportiert interstitielle Flüssigkeit zurück ins venöse Blut.

{{IMAGE}}

Die Hierarchie der Lymphgefäße:

- **Lymphkapillaren**: Blind endende, hochpermeable Gefäße ohne Basalmembran. Überlappende Endothelzellen wirken als Einlassventile — bei steigendem Gewebedruck öffnen sie sich, bei sinkendem Druck schließen sie. Aufnahme von Proteinen, Zelltrümmern und Krankheitserregern aus dem Interstitium
- **Präkollektoren**: Erste Klappen erscheinen, leiten Lymphe zu den Kollektoren
- **Lymphkollektoren**: Besitzen **Klappen** (Rückflussschutz) und eine Wand aus glatter Muskulatur. Der Abschnitt zwischen zwei Klappen heißt **Lymphangion** — er kontrahiert autonom (~5–10×/min) und pumpt die Lymphe vorwärts
- **Lymphstämme**: Große Sammelgefäße (Trunci lumbales, intestinales, bronchomediastinales, subclavii, jugulares)
- **Ductus thoracicus** (ca. 38–45 cm): Sammelt ~75 % der Körperlymphe (beide Beine, linker Arm, linke Thoraxhälfte, Abdomen). Entspringt aus der **Cisterna chyli** (Lendenzisterne, auf Höhe L1–L2) und mündet in den **linken Venenwinkel** (Confluens V. jugularis interna sinistra + V. subclavia sinistra)
- **Ductus lymphaticus dexter**: Drainiert ~25 % (rechter Arm, rechte Thoraxhälfte, rechte Kopfhälfte) → rechter Venenwinkel

> **Merke:** Lymphkapillaren (blind, keine Basalmembran) → Kollektoren (Klappen + glatte Muskulatur) → Lymphstämme → Ductus thoracicus (75 %, linker Venenwinkel) + Ductus lymphaticus dexter (25 %, rechts).

---

## Lymphbildung — Starling-Kräfte und Flüssigkeitsgleichgewicht

Die Lymphe entsteht als Ultrafiltrat des Blutplasmas in den Blutkapillaren. Ob Flüssigkeit filtriert oder reabsorbiert wird, bestimmen die **Starling-Kräfte**:

- **Hydrostatischer Kapillardruck** (Pc, ~32 mmHg arteriell, ~15 mmHg venös): Presst Flüssigkeit **aus** der Kapillare
- **Kolloidosmotischer Druck des Plasmas** (πc, ~25 mmHg): Zieht Flüssigkeit **in** die Kapillare zurück (Albumin!)
- **Netto**: Am arteriellen Ende überwiegt Filtration, am venösen Ende Reabsorption. ~10 % des Filtrats (~2–4 L/Tag) wird **nicht** reabsorbiert → **Lymphe**

Ohne funktionierendes Lymphsystem sammelt sich diese Flüssigkeit im Gewebe → **Ödem**. Aus dem Darm transportieren Chylomikronen-beladene Lymphgefäße (**Chylusgefäße**, Vasa lactea) resorbierte Lipide direkt ins Blut, unter Umgehung der Leber-Erstpassage.

> **Merke:** Starling-Kräfte: Hydrostatischer Druck (Filtration) vs. kolloidosmotischer Druck (Reabsorption). ~10 % des Kapillarfiltrats → Lymphe. Albumin-Mangel → πc ↓ → Ödem.

---

## Lymphknoten — Architektur, Immunfunktion und Stationen

Der Lymphknoten filtert Lymphe und initiiert Immunantworten. Seine zonale Architektur trennt B- und T-Zell-Areale präzise:

- **Cortex** (Rinde): **B-Zellen** in Follikeln (Primärfollikel: ruhend; Sekundärfollikel mit Keimzentrum: aktiv → Antikörper-Produktion). Hier entsteht die humorale Immunantwort
- **Paracortex**: **T-Zellen** (CD4⁺ und CD8⁺) + dendritische Zellen. Hier werden T-Zellen via MHC-Antigen-Präsentation aktiviert → zelluläre Immunantwort
- **Mark** (Medulla): **Plasmazellen** (sezernieren Antikörper) + Makrophagen. Markstränge + Marksinus

**Lymphfluss:** Lymphe tritt über **mehrere afferente Gefäße** ein (Randsinus → Cortex → Paracortex → Marksinus) und verlässt den Knoten über **ein efferentes Gefäß** am Hilus.

**Wichtige Lymphknotenstationen:**

| Station | Drainagegebiet | Klinische Relevanz |
|---|---|---|
| **Zervikal** (Hals) | Kopf, Hals, Schilddrüse | Geschwollen bei Tonsillitis, Lymphomen, Kopf-Hals-Tumoren |
| **Axillär** (Achsel) | Obere Extremität, Brust, Thoraxwand | **Sentinel-LK beim Mammakarzinom** — erster Lymphknoten im Abflussgebiet |
| **Inguinal** (Leiste) | Untere Extremität, äußeres Genitale, Gesäß | Geschwollen bei Infektionen der Beine, STIs |
| **Mediastinal** | Lunge, Ösophagus | Vergrößert bei Lungenkarzinom, Sarkoidose |
| **Mesenterial** | Darm | Morbus Crohn, Lymphome |

> **Merke:** Lymphknoten-Architektur: **Cortex** = B-Zellen (Follikel, Antikörper), **Paracortex** = T-Zellen + dendritische Zellen (zelluläre Immunität), **Mark** = Plasmazellen (Sekretion). Sentinel-LK = erster LK im Tumorabfluss → Biopsie für Staging.

---

## Milz und Thymus — Funktion und klinische Bedeutung

**Splenektomie-Risiko:** Milz filtert **bekapselte Bakterien** (Pneumokokken, Meningokokken, H. influenzae) besonders effektiv. Ohne Milz → **OPSI** (Overwhelming Post-Splenectomy Infection): perakute Sepsis mit hoher Letalität. Prophylaxe: Impfung + Penicillin-Prophylaxe.

**Thymus** (oberes Mediastinum): Reifungsort der T-Zellen aus dem Knochenmark. Größte Aktivität vor der Pubertät, dann Involution:

{{DIAGRAM:immune-response}}

1. **Positive Selektion** (Cortex): T-Zellen, die MHC-I oder MHC-II erkennen, überleben (~3–5 % aller Thymozyten)
2. **Negative Selektion** (Mark): T-Zellen, die Selbst-Antigene zu stark erkennen → Apoptose (zentrale Toleranz → verhindert Autoimmunität)

**B-Zell-Reifung** erfolgt im Knochenmark: Stammzelle → Pro-B → Prä-B → naive B-Zelle. Zentraltoleranzmechanismus: B-Zellen, deren BCR körpereigene Antigene zu stark binden, werden durch klonale Deletion (Apoptose) oder Rezeptorediting eliminiert, um Autoimmunität zu verhindern.

> **Merke:** **Milz**: rote Pulpa (Ery-Abbau + Thrombozytenspeicher) vs. weiße Pulpa (Immunabwehr). **Splenektomie** = OPSI-Risiko → Impfung + Penicillin! **Thymus**: positive Selektion (MHC-Erkennung) + negative Selektion (Selbsttoleranz) → nur ~5 % der Thymozyten überleben.

---

## Klinisch: Lymphödem und Sentinel-Lymphknoten

**Lymphödem** entsteht bei gestörtem Lymphabfluss — Flüssigkeit sammelt sich im Interstitium und ist typischerweise **nicht eindrückbar** (im Gegensatz zum kardialen Ödem). Zwei Formen:

- **Primäres Lymphödem**: Angeborene Fehlanlage der Lymphgefäße (z. B. Milroy-Syndrom, autosomal-dominant, Mutation im VEGFR-3-Gen)
- **Sekundäres Lymphödem**: Erworbene Abflussbehinderung — häufigste Ursachen: Tumorinfiltration, chirurgische Lymphknotenentfernung (z. B. axilläre Dissektion bei Mammakarzinom), Bestrahlung, Infektionen (Filariose durch Wuchereria bancrofti → Elephantiasis, tropisch)

**Sentinel-Lymphknoten-Biopsie:** Der Sentinel-LK (Wächter-Lymphknoten) ist der **erste** Lymphknoten im Abflussgebiet eines Tumors. Technik: Radioaktiver Tracer oder Farbstoff (Patentblau) wird peritumoral injiziert → erster angefärbter LK wird biopsiert. Ist er tumorfrei, sind nachgeschaltete LK mit hoher Wahrscheinlichkeit ebenfalls frei → ausgedehnte Lymphknotendissektion kann vermieden werden.

> **Merke:** Lymphödem: primär (angeboren) vs. sekundär (Tumor, OP, Bestrahlung). Sentinel-LK = erster LK im Abfluss → Biopsie entscheidet über Ausmaß der Operation.`,
      lernziele: [
        "Die drei Hauptfunktionen des lymphatischen Systems (Flüssigkeitsrücktransport, Immunabwehr, Fetttransport) beschreiben.",
        "Den Aufbau und die Filterleistung eines Lymphknotens (Cortex, Paracortex, Mark) erklären.",
        "Die Funktionen der Milz (weiße und rote Pulpa) unterscheiden und das OPSI-Risiko nach Splenektomie begründen.",
        "Die T-Zell-Reifung im Thymus mit positiver und negativer Selektion erläutern.",
        "Das Konzept der zentralen Toleranz und deren Bedeutung für die Autoimmunprävention darlegen.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über die T-Zell-Reifung im Thymus ist korrekt?",
        options: [
          {
            id: "a",
            text: "Im Thymus reifen B-Lymphozyten, die dann Antikörper gegen Pathogene produzieren.",
          },
          {
            id: "b",
            text: "Bei der negativen Selektion überleben T-Zellen, die körpereigene Antigene besonders stark erkennen.",
          },
          {
            id: "c",
            text: "Im Thymus durchlaufen T-Zellen positive Selektion (MHC-Erkennung) und negative Selektion (Elimination autoreaktiver Zellen). Nur ~2–5 % überleben. Bei DiGeorge-Syndrom (Thymusaplasie) resultiert ein schwerer T-Zell-Mangel.",
          },
          {
            id: "d",
            text: "Etwa 95 % aller T-Zellen überleben die Thymus-Selektion und gelangen in die Peripherie.",
          },
          {
            id: "e",
            text: "Die positive Selektion eliminiert T-Zellen, die MHC-Moleküle erkennen können.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "T-Lymphozyten-Vorläufer wandern vom Knochenmark in den Thymus. Positive Selektion (Kortex): Nur T-Zellen, die MHC erkennen, überleben. Negative Selektion (Medulla): T-Zellen mit zu starker Bindung an Selbst-Antigene werden durch Apoptose eliminiert (zentrale Toleranz). Nur ~2–5 % überleben beide Selektionsschritte. DiGeorge-Syndrom (22q11-Deletion) = Thymusaplasie → schwerer T-Zell-Immundefekt.",
      },
      selfTest: [
        {
          question: "Welche Aussage über das lymphatische System ist korrekt?",
          options: [
            "Die Lymphe ist proteinreicher als Plasma und enthält große Mengen an Erythrozyten.",
            "Das lymphatische System transportiert täglich etwa 2–4 Liter Flüssigkeit zurück ins Blut, die nicht von den Kapillaren reabsorbiert wurde, und mündet über den Ductus thoracicus in den linken Venenwinkel.",
            "Lymphkapillaren haben eine dicke Basalmembran und Klappen, die den Rückfluss verhindern.",
            "Der Lymphtransport erfolgt hauptsächlich durch aktive Herzpumpfunktion und arterielle Pulsation.",
            "Lymphgefäße sind in allen Geweben vorhanden, einschließlich ZNS, Knochen und Knorpel.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Das lymphatische System hat wichtige Funktionen:\n\n**Flüssigkeitsrücktransport:**\n- ~10% der Kapillarfiltrat-Flüssigkeit (~**2–4 L/Tag**) wird **nicht** von Kapillaren reabsorbiert (Starling-Kräfte)\n- Diese Flüssigkeit → **Lymphkapillaren** → **Lymphe** → **Ductus thoracicus** (größter Lymphstamm) → mündet in **linken Venenwinkel** (V. subclavia + V. jugularis interna) → zurück ins Blut\n- **Ductus lymphaticus dexter** (rechte obere Körperhälfte) → rechter Venenwinkel\n\nOhne Lymphsystem → Flüssigkeitsansammlung im Gewebe → **Ödem**.\n\n**Falsch (A):** Lymphe ist **proteinärmer** (nicht proteinreicher) als Plasma (~30–40 g/L vs. ~70 g/L im Plasma). Lymphe enthält hauptsächlich **Lymphozyten** (nicht Erythrozyten).\n\n**Falsch (C):** Lymphkapillaren haben **keine Basalmembran** (hohe Permeabilität, blind endend) und **keine Klappen** (Klappen sind erst in größeren Lymphkollektoren vorhanden). Stattdessen haben sie **überlappende Endothelzellen** (Einlassventile).\n\n**Falsch (D):** Lymphtransport erfolgt **nicht** durch Herzpumpfunktion (Lymphgefäße sind nicht direkt mit dem Herzen verbunden). Hauptmechanismen:\n1. **Muskel-Kontraktion** (Skelettmuskel-Pump-Mechanismus, wichtigster Faktor)\n2. Atmung (Thorax-Unterdruck)\n3. Arterielle Pulsation (unterstützend)\n4. Glatte Muskulatur (intrinsische Kontraktion)\n5. Klappen (Rückfluss-Schutz)\n\n**Falsch (E):** Lymphgefäße sind **nicht** in ZNS, Knochen und Knorpel vorhanden (avaskuläre/alymphatische Gewebe). Sie sind in den meisten anderen Geweben vorhanden.",
          difficulty: 1,
          tags: ["lymphknoten", "lymphsystem", "lymphfluss"],
        },
        {
          question: "Welche Aussage über die Struktur und Funktion von Lymphknoten ist korrekt?",
          options: [
            "Lymphknoten haben ein efferentes Lymphgefäß, durch das Lymphe einfließt, und mehrere afferente Lymphgefäße, durch die Lymphe abfließt.",
            "Die Rinde (Cortex) enthält hauptsächlich B-Zellen in Follikeln, die Paracortex-Region enthält T-Zellen und dendritische Zellen, und das Mark (Medulla) enthält Plasmazellen und Makrophagen.",
            "Lymphknoten filtern das Blut und entfernen alte Erythrozyten durch Makrophagen in der roten Pulpa.",
            "Der Sentinel-Lymphknoten ist der letzte Lymphknoten im Abflussgebiet eines Tumors und wird bei der Tumor-Staging-Biopsie ignoriert.",
            "Lymphknoten sind hauptsächlich für die Produktion von Erythrozyten und Thrombozyten zuständig.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Lymphknoten haben eine charakteristische **zonale Architektur**:\n\n**Struktur:**\n\n1. **Rinde (Cortex):**\n   - **B-Zellen** in **Follikeln** (Primärfollikel: ruhend, Sekundärfollikel: Keimzentrum mit aktivierten B-Zellen, Plasmazellen)\n   - **Humorale Immunität** (Antikörper-Produktion)\n\n2. **Paracortex:**\n   - **T-Zellen** (CD4⁺, CD8⁺)\n   - **Dendritische Zellen** (APCs, Antigen-Präsentation)\n   - **Zelluläre Immunität** (T-Zell-Aktivierung)\n\n3. **Mark (Medulla):**\n   - **Plasmazellen** (Antikörper-Sekretion)\n   - **Makrophagen** (Phagozytose)\n   - Markstränge + Marksinus\n\n**Funktion:** Filtration der **Lymphe** (nicht Blut!), Antigen-Präsentation, Aktivierung von T-/B-Zellen, Antikörper-Produktion.\n\n**Falsch (A):** **Umgekehrt!** Lymphknoten haben **mehrere afferente Lymphgefäße** (Lymphe fließt **ein**) und **ein efferentes Lymphgefäß** (Lymphe fließt **aus**). Lymphe → afferent → Randsinus → Cortex/Paracortex → Marksinus → efferent.\n\n**Falsch (C):** Lymphknoten filtern **Lymphe** (nicht Blut). Die **Milz** (nicht Lymphknoten) filtert **Blut** und entfernt alte Erythrozyten in der **roten Pulpa**.\n\n**Falsch (D):** Der **Sentinel-Lymphknoten** ist der **erste** (nicht letzte) Lymphknoten im Abflussgebiet eines Tumors → wird bei Biopsie **untersucht** (nicht ignoriert) für Tumor-Staging (z. B. Mammakarzinom, Melanom). Metastasen im Sentinel-Lymphknoten → weitere Lymphknoten betroffen.\n\n**Falsch (E):** **Knochenmark** (nicht Lymphknoten) ist für Hämatopoese (Erythrozyten, Thrombozyten, Leukozyten) zuständig. Lymphknoten sind für **Immunabwehr** (Filtration, Antigen-Präsentation, Lymphozyten-Aktivierung) zuständig.",
          difficulty: 2,
          tags: ["lymphknoten struktur", "b-zellen", "t-zellen"],
        },
        {
          question: "Welche Aussage über die Milz (Splen) ist korrekt?",
          options: [
            "Die weiße Pulpa macht etwa 80% der Milz aus und ist hauptsächlich für den Abbau alter Erythrozyten verantwortlich.",
            "Die Milz filtert Lymphe und ist das größte lymphatische Organ im Körper.",
            "Die rote Pulpa (ca. 80% der Milz) ist für den Erythrozyten-Abbau und die Thrombozytenspeicherung (ca. 30% aller Thrombozyten) verantwortlich, während die weiße Pulpa (ca. 20%) Immunfunktionen erfüllt.",
            "Nach Splenektomie ist das Risiko für virale Infektionen erhöht, insbesondere durch Influenza und Herpesviren.",
            "Howell-Jolly-Körperchen in Erythrozyten sind ein Zeichen für eine überaktive Milzfunktion.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Die Milz hat zwei funktionelle Kompartimente:\n\n**Rote Pulpa (~80%):**\n- **Farbe:** Rot (viele Erythrozyten)\n- **Funktionen:**\n  1. **Erythrozyten-Abbau:** Alte/defekte Erythrozyten (~120 Tage) → Makrophagen → Hämolyse → Hb → Häm (Fe²⁺ recycelt) + Bilirubin (→ Leber)\n  2. **Thrombozytenspeicherung:** ~**30% aller Thrombozyten** gespeichert (bei Bedarf freigegeben)\n  3. **Blut-Reservoir:** ~40 mL Blut\n\n**Weiße Pulpa (~20%):**\n- **Farbe:** Weiß (Lymphozyten)\n- **Funktion:** **Immunabwehr** (Filtration des **Blutes**, nicht Lymphe!)\n  - Lymphfollikel (B-Zellen)\n  - PALS (periarteriolar lymphoid sheaths, T-Zellen)\n  - Antigen-Präsentation, Aktivierung von B-/T-Zellen\n\n**Falsch (A):** Die **rote Pulpa** (nicht weiße) macht ~80% aus und ist für Erythrozyten-Abbau verantwortlich. Die **weiße Pulpa** (~20%) ist für Immunabwehr zuständig.\n\n**Falsch (B):** Die Milz filtert **Blut** (nicht Lymphe). Lymphknoten filtern Lymphe. Die Milz ist das größte **lymphatische Organ** (korrekt), aber filtert eben Blut.\n\n**Falsch (D):** Nach Splenektomie ist das Risiko für **bakterielle** Infektionen (nicht virale) erhöht, insbesondere durch **bekapselte Bakterien** (Pneumokokken, Meningokokken, H. influenzae) → **OPSI** (Overwhelming Post-Splenectomy Infection). Prophylaxe: Impfung + Antibiotika (Penicillin).\n\n**Falsch (E):** **Howell-Jolly-Körperchen** (DNA-Reste in Erythrozyten) sind ein Zeichen für **Asplenie** (fehlende/dysfunktionale Milz), **nicht** überaktive Milz. Normalerweise entfernt die Milz diese Reste. Nach Splenektomie → Howell-Jolly-Körperchen sichtbar.",
          difficulty: 2,
          tags: ["milz", "rote pulpa", "weiße pulpa"],
        },
        {
          question: "Welche Aussage über den Thymus ist korrekt?",
          options: [
            "Der Thymus erreicht seine maximale Größe im hohen Alter und ist hauptsächlich für die B-Zell-Reifung verantwortlich.",
            "Im Thymus findet die T-Zell-Reifung statt: Positive Selektion (Thymozyten, die MHC I/II erkennen, überleben) und negative Selektion (Thymozyten, die Selbst-Antigene stark binden, werden eliminiert), um zentrale Toleranz zu etablieren.",
            "Der Thymus befindet sich im Abdomen und vergrößert sich nach der Pubertät kontinuierlich.",
            "Etwa 95% der Thymozyten überleben die Selektion und werden zu reifen T-Zellen.",
            "Das DiGeorge-Syndrom ist durch eine Thymus-Hyperplasie gekennzeichnet, die zu überschießender T-Zell-Produktion führt.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Der **Thymus** ist das zentrale Organ der **T-Zell-Reifung** (zentrale Toleranz):\n\n**T-Zell-Reifung:**\n\n1. **Unreife Thymozyten** (Knochenmark) → Thymus-Rinde (Cortex)\n2. **Positive Selektion (Cortex):**\n   - Thymozyten, die **MHC I/II erkennen** können → **Überleben**\n   - Thymozyten, die MHC **nicht** erkennen → **Apoptose** (nutzlos)\n   - Differentierung: CD4⁺CD8⁺ (doppelt-positiv) → CD4⁺ **oder** CD8⁺ (einfach-positiv)\n3. **Negative Selektion (Mark/Medulla):**\n   - Thymozyten, die **Selbst-Antigene** (körpereigene Antigene) **stark binden** → **Apoptose** (verhindert Autoimmunität)\n   - Thymozyten, die Selbst-Antigene **nicht/schwach** binden → **Überleben**\n4. **Emigration:** Nur ~**5%** überleben → reifen zu **CD4⁺** (T-Helfer) oder **CD8⁺** (zytotoxisch) → periphere Lymphorgane (Lymphknoten, Milz)\n\n**Zentrale Toleranz:** Verhindert Autoimmunität durch Elimination autoreaktiver T-Zellen.\n\n**Falsch (A):** Der Thymus erreicht seine maximale Größe bei **Geburt bis Pubertät** (~35 g), danach **Involution** (Rückbildung, Fettgewebe-Ersatz, bei Erwachsenen ~10–15 g). Der Thymus ist für **T-Zell-Reifung** (nicht B-Zell) zuständig. B-Zellen reifen im **Knochenmark**.\n\n**Falsch (C):** Der Thymus befindet sich im **oberen Mediastinum** (hinter Sternum), **nicht** im Abdomen. Er **verkleinert sich** (Involution) nach der Pubertät, nicht vergrößert.\n\n**Falsch (D):** Nur ~**5%** (nicht 95%) der Thymozyten überleben die Selektion. ~95% sterben durch Apoptose (positive + negative Selektion).\n\n**Falsch (E):** **DiGeorge-Syndrom** (22q11-Deletion) ist durch **Thymus-Aplasie** (nicht Hyperplasie) gekennzeichnet → **T-Zell-Mangel** (nicht Überproduktion) → schwere Infektionen, Hypokalzämie (Nebenschilddrüsen-Aplasie), Herzfehler.",
          difficulty: 2,
          tags: ["thymus", "t-zell-reifung", "selektion"],
          hints: [
            "Wo reifen T-Zellen? Und welche zwei Selektionsschritte sichern, dass T-Zellen funktionsfähig aber nicht autoreaktiv sind?",
            "Positive Selektion (Cortex): T-Zellen müssen MHC erkennen können, sonst Apoptose. Negative Selektion (Mark): T-Zellen, die Selbst-Antigene stark erkennen → Apoptose → nur ~5% überleben.",
          ],
        },
      ],
      merksätze: [
        "**Lymphatisches System:** Transportiert täglich ~2–4 L interstitielle Flüssigkeit zurück ins Blut (Kapillarfiltrat, nicht reabsorbiert). Einmündung in linken Venenwinkel (Ductus thoracicus: Rumpf links + beide Beine) und rechten Venenwinkel (Ductus lymphaticus dexter: Kopf/Hals rechts + rechte Schulter/Arm). Lymphkapillaren: blind endend, hochpermeabel, keine Basalmembran.",
        "**Lymphknoten:** ~600–700 im Körper, bohnenförmig, Afferenzen (mehrere) → Efferenz (1). Rinde: B-Zellen (Follikel, Keimzentren → Antikörper-Produktion). Paracortex: T-Zellen, dendritische Zellen (Antigen-Präsentation). Mark: Plasmazellen, Makrophagen. Funktionen: Filtration, Immunantwort-Initiierung, Antikörper-Sekretion.",
        "**Milz:** Größtes lymphatisches Organ (~150 g). Rote Pulpa: Erythrozyten-Abbau (Sinus, Makrophagen), Blutspeicher. Weiße Pulpa: Immunabwehr (PALS [T-Zellen], Follikel [B-Zellen], Marginalzone). Filtert ~1 L Blut/min. Bekapselte Bakterien besonders gefährlich nach Splenektomie: OPSI (Pneumokokken, Meningokokken, H. influenzae) → Prophylaxe: Impfung + Penicillin.",
        "**Thymus:** Reifungsort für T-Zellen. Lage: oberes Mediastinum (Sternum). Max. Größe: Geburt bis Pubertät (~35 g) → Involution (Fettgewebe). Rinde: dichte unreife Thymozyten (positive Selektion: MHC-Erkennung → Überleben). Mark: negative Selektion (Selbstantigene → Apoptose autoreaktiver T-Zellen). ~95% sterben → ~5% reifen. DiGeorge: Thymus-Aplasie → T-Zell-Mangel.",
        "**Lymphödem:** Gestörter Lymphabfluss → interstitielle Flüssigkeitsansammlung, gewebeartig (nicht eindrückbar). Primär (kongenital, Milroy-Syndrom). Sekundär: Tumor (Kompression), Bestrahlung, Infektion (Filariose → Elephantiasis [Wuchereria bancrofti], tropisch). Therapie: manuelle Lymphdrainage, Kompressionsstrümpfe.",
        "**Lymphom:** Hodgkin-Lymphom: Reed-Sternberg-Zellen (Binukleäre B-Zellen, 'Eulenaugen'), bimodale Altersverteilung (junges Alter + >50 Jahre), Knötchensklerosierende Form häufig. Gute Prognose. Non-Hodgkin: heterogen, diffus großzelliges B-Zell-Lymphom (DLBCL, häufigste), Follikuläres Lymphom (bcl-2 [t(14;18)]). B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust >10%. Therapie: Chemotherapie (CHOP), Rituximab (Anti-CD20).",
        "**Splenomegalie:** Ursachen: Infektionen (EBV-Mononukleose, Malaria, viszerale Leishmaniose), Hämatologisch (Leukämien, Lymphome, Hämolytische Anämie, Sichelzellanämie), Portale Hypertension (Leberzirrhose → Splenomegalie + Hypersplenismus). Komplikationen: Hypersplenismus (Anämie, Thrombozytopenie, Leukopenie), Milzruptur-Risiko. Howell-Jolly-Körperchen nach Splenektomie (DNA-Reste in Erythrozyten).",
        "**Lymphtransport-Mechanismen:** Passiv: Gewebedruck, Atemexkursionen (Thoraxpumpe → Ductus thoracicus). Aktiv: Glatte Muskulatur in Lymphkollektoren (spontane Kontraktionen ~5–10/min). Skelettmuskelpumpe (Kontraktion → Lymphe vorwärts, Klappen verhindern Rückfluss). Zunahme bei körperlicher Aktivität (10× erhöhter Lymphfluss). Gestört bei Bettlägerigkeit → Ödemrisiko ↑.",
        "**MALT (Mucosa-Associated Lymphoid Tissue):** Schleimhaut-assoziiertes lymphatisches Gewebe. Beispiele: Tonsillen (Waldeyer-Rachenring: Gaumenmandeln, Rachenmandeln, Zungengrund), Peyer-Plaques (Ileum, Antigen-Sampling via M-Zellen), BALT (Bronchien), GALT (Darm). Erstlinienverteidigung an Schleimhäuten. MALT-Lymphom: Marginalzonen-B-Zell-Lymphom (oft H. pylori-assoziiert im Magen → Eradikation therapiert das Lymphom).",
      ],
      klinischerBezug:
        "Lymphome sind häufige hämatologische Malignome: Hodgkin-Lymphom (Reed-Sternberg-Zellen, bimodale Altersverteilung, gute Prognose mit ABVD-Chemotherapie ~80% 5-Jahres-Überleben). Non-Hodgkin-Lymphome: DLBCL (häufigste, R-CHOP: Rituximab + CHOP), Follikuläres Lymphom (t(14;18), bcl-2 translokation, indolent). B-Symptome (Fieber >38°C, Nachtschweiß, Gewichtsverlust >10% in 6 Monaten) als Alarmsymptome. Lymphödem nach Brustkrebsoperationen (axilläre Lymphknotenentfernung) sehr häufig: chronische Beschwerden, Therapie: physikalische Entstauungstherapie. OPSI (overwhelming post-splenectomy infection): lebensbedrohliche Sepsis durch bekapselte Bakterien nach Splenektomie → lebenslange Prophylaxe (Impfung + Penicillin) essenziell. Infektiöse Mononukleose (EBV, 'Kusskrankheit'): Lymphadenopathie, Splenomegalie, atypische Lymphozyten (Pfeiffer-Zellen), Amoxicillin kontraindiziert (Arzneimittelexanthem).",
    },
    {
      id: "bio-3-08",
      title: "Atmungssystem",
      imageUrl: "/images/wiki-respiratory-de.svg",
      imageCaption:
        "Abb.: Atmungssystem — Obere und untere Atemwege (Wikimedia Commons, LadyofHats, Public Domain)",
      diagram: "respiratory-system",
      stichworte: [
        "Gasaustausch",
        "Alveolen",
        "Surfactant",
        "Hämoglobin-O₂-Bindung",
        "Atemmechanik",
        "Zwerchfell",
        "Bronchien",
      ],
      content: `Jede Zelle benötigt Sauerstoff und muss CO₂ abgeben — das Atmungssystem stellt sicher, dass dieser Gasaustausch kontinuierlich abläuft.

{{IMAGE}}

## Der Bronchialbaum — von der Trachea zur Alveole

Die Atemluft durchläuft auf ihrem Weg zu den Alveolen eine zunehmend feinere Verzweigung. Die **Trachea** (Luftröhre, ~10–12 cm lang) wird von **16–20 hufeisenförmigen Knorpelspangen** (C-Knorpel, dorsal offen → Paries membranaceus mit glatter Muskulatur) offengehalten. Sie teilt sich an der **Bifurcatio tracheae** (Höhe Th4/5) in die beiden **Hauptbronchien**:

- **Rechter Hauptbronchus**: Steiler, kürzer, weiter → **Aspiration geht häufiger rechts** (besonders rechter Unterlappen)
- **Linker Hauptbronchus**: Flacher abgehend (Aortenbogen kreuzt darüber)

Die Bronchien verzweigen sich über ~23 Generationen:

| Generation | Struktur | Kennzeichen |
|---|---|---|
| 0–1 | Hauptbronchien | Knorpelspangen, Flimmerepithel |
| 2–4 | Lappen-/Segmentbronchien | Knorpelplatten, glatte Muskulatur |
| 5–16 | Bronchiolen | **Kein Knorpel** mehr, glatte Muskulatur (Asthma!), Clara-Zellen (Surfactant-ähnliches Sekret) |
| 17–19 | Respiratorische Bronchiolen | Erste Alveolen in der Wand → Gasaustausch beginnt |
| 20–23 | Ductus alveolares → Alveolen | ~300 Mio. Alveolen, ~80–140 m² Gasaustauschfläche |

> **Merke:** Trachea → Hauptbronchien → Lappen-/Segmentbronchien (Knorpel) → Bronchiolen (kein Knorpel, glatte Muskulatur) → Alveolen. Aspiration: rechter Unterlappen (steiler Bronchus). ~23 Generationen bis zur Alveole.

---

{{DIAGRAM}}

## Surfactant und Alveolarstruktur

**Gasaustausch findet in den Alveolen statt, nicht in den Bronchien.** Die Bronchien leiten die Luft; der eigentliche O₂/CO₂-Austausch erfolgt in den **Alveolen**. Die ~300 Millionen Alveolen sind die funktionellen Einheiten des Gasaustauschs. Ihre Wand besteht aus zwei Pneumozytentypen:
- **Typ-I-Pneumozyten** (~95 % der Oberfläche): Hauchfein (0,2 µm), ermöglichen den Gasaustausch
- **Typ-II-Pneumozyten** (~5 % der Oberfläche): Kubische Zellen, produzieren **Surfactant** (Dipalmitoylphosphatidylcholin/DPPC, ~90 % Phospholipide)

Zusätzlich befinden sich **Alveolarmakrophagen** (Staubzellen) im Alveolarraum — sie phagozytieren inhalierte Partikel und Erreger (erste Verteidigungslinie der Lunge).

Die **Blut-Luft-Schranke** ist nur ~0,5 µm dünn und besteht aus drei Schichten: Alveolarepithel (Typ-I-Pneumozyt) → fusionierte Basalmembran → Kapillarendothel. Diese extreme Dünnheit ermöglicht schnelle Diffusion.

**Surfactant-Funktion:** Senkt die Oberflächenspannung an der Luft-Flüssigkeits-Grenze. Nach dem **Laplace-Gesetz** (P = 2T/r) würden kleine Alveolen kollabieren, weil höherer Druck als in großen. Surfactant verhindert das durch Spannungsreduktion → Alveolen bleiben offen.

**Klinisch — RDS (Neonatales Atemnotsyndrom):** Frühgeborene (<28 SSW) haben unreife Typ-II-Pneumozyten → Surfactant-Mangel → Atelektase → Hypoxie. Prophylaxe: Betamethason/Dexamethason (Mutter antenatal → Lungenreifung ↑). Therapie: Surfactant-Instillation.

> **Merke:** **Surfactant**: Typ-II-Pneumozyten, DPPC (~90 % Phospholipide) → Oberflächenspannung ↓ → Alveolarkollaps (Atelektase) verhindert. **Blut-Luft-Schranke**: ~0,5 µm (Alveolarepithel + Basalmembran + Kapillarendothel).

---

## Gasaustausch — Fick'sches Diffusionsgesetz und Partialdrücke

Der Gasaustausch in der Lunge folgt dem **Fick'schen Diffusionsgesetz**: Die Diffusionsrate ist proportional zur **Austauschfläche** (A), zum **Partialdruckgradienten** (ΔP) und zur **Löslichkeit** des Gases, aber umgekehrt proportional zur **Diffusionsstrecke** (d):

**V̇ = D × A × ΔP / d** (D = Diffusionskoeffizient, abhängig von Löslichkeit und Molekülgröße)

**Partialdrücke und Gasaustausch:**
- **O₂**: Alveolär ~100 mmHg → venöses Blut ~40 mmHg → **Gradient 60 mmHg** → O₂ diffundiert ins Blut
- **CO₂**: Venöses Blut ~46 mmHg → Alveolen ~40 mmHg → **Gradient 6 mmHg** (klein!) → aber CO₂ diffundiert ~20× schneller (höhere Löslichkeit in Wasser/Membranen)

Die Äquilibrierung (Angleichung der Partialdrücke) ist normalerweise nach ~0,25 s abgeschlossen — das Blut passiert die Lungenkapillare in ~0,75 s, es bleibt also eine **Diffusionsreserve** (wichtig bei Belastung, wenn die Passagezeit sinkt).

> **Merke:** Fick: V̇ ∝ A × ΔP / d. O₂-Gradient: 60 mmHg (100 → 40). CO₂-Gradient: nur 6 mmHg, aber 20× diffusibler. Äquilibrierung nach ~0,25 s (Reserve: 0,5 s).

---

## O₂-Transport — Hämoglobin-Bindungskurve und Bohr-Effekt

Sauerstoff wird zu **98 %** an **Hämoglobin** (Hb) gebunden transportiert, nur ~2 % physikalisch gelöst. Hb ist ein **Tetramer** (2α + 2β-Ketten), jede Untereinheit trägt eine **Häm-Gruppe** mit Fe²⁺ → maximal **4 O₂ pro Hb**. Die O₂-Bindungskurve ist **sigmoidal** (S-förmig) — Folge der **kooperativen Bindung**: Bindung des ersten O₂ erleichtert die Bindung der weiteren.

**Bohr-Effekt — pH-abhängige O₂-Abgabe:**

| Bedingung | Kurvenverschiebung | O₂-Affinität | Physiologisch |
|---|---|---|---|
| pH ↓, pCO₂ ↑, Temp ↑, 2,3-BPG ↑ | **Rechts** | ↓ (O₂ wird leichter abgegeben) | Aktives Gewebe (Muskel) |
| pH ↑, pCO₂ ↓, Temp ↓, 2,3-BPG ↓ | **Links** | ↑ (O₂ wird fester gebunden) | Lunge, fetales Hb (HbF) |

**2,3-Bisphosphoglycerat (2,3-BPG):** Entsteht in Erythrozyten aus dem Glykolyse-Intermediat. Bindet in die Zentralhöhle des Desoxy-Hb → stabilisiert T-Form (tense, niedrige Affinität). Bei chronischer Hypoxie (Höhenadaptation, Anämie) steigt 2,3-BPG → mehr O₂ ans Gewebe.

> **Merke:** Hb bindet kooperativ 4× O₂ (sigmoidale Kurve). **Bohr-Effekt**: pH ↓ / CO₂ ↑ / Temp ↑ → Rechtsverschiebung → O₂-Abgabe ↑ im Gewebe. **Fetales HbF** hat höhere O₂-Affinität als HbA (Linksverschiebung) → entzieht mütterlichem Blut O₂.

---

## CO₂-Transport und Haldane-Effekt

**CO₂-Transport** im Blut erfolgt über drei Wege:
- **70 % Bikarbonat** (HCO₃⁻): Carboanhydrase in Erythrozyten: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. **Chlorid-Shift** (Hamburger-Shift): HCO₃⁻ verlässt den Erythrozyten über den Cl⁻/HCO₃⁻-Austauscher (Band-3-Protein) → Cl⁻ strömt im Gegenzug ein → Ladungsausgleich
- **23 % Carbaminohämoglobin**: CO₂ bindet an Aminogruppen der Globinketten (nicht an Häm!)
- **7 % gelöst** im Plasma (bestimmt pCO₂, gemessen in der BGA)

**Haldane-Effekt:** Desoxygeniertes Hb bindet **mehr CO₂** (und mehr H⁺) als oxygeniertes Hb. Im Gewebe: O₂ ab → Desoxy-Hb → CO₂-Aufnahme ↑. In der Lunge: O₂ an → Oxy-Hb → CO₂-Abgabe ↑. Bohr- und Haldane-Effekt sind physiologisch gekoppelt und optimieren den Gastransport.

> **Merke:** **CO₂-Transport**: 70 % Bikarbonat (Carboanhydrase, Chlorid-Shift), 23 % Carbamino-Hb, 7 % gelöst. **Haldane-Effekt**: Desoxy-Hb bindet mehr CO₂ (im Gewebe) → Oxy-Hb gibt CO₂ ab (in der Lunge).

---

## Atemmechanik — Inspiration und Exspiration

**Inspiration (aktiv):** Das **Zwerchfell (Diaphragma)** — wichtigster Atemmuskel — kontrahiert und flacht ab → Thoraxvolumen ↑ → **intrapleuraler Druck ↓** → Lunge dehnt sich passiv → Luft strömt ein. Auxiliäre Inspirationsmuskeln: **Mm. intercostales externi** (Rippenhebung), Mm. scaleni, M. sternocleidomastoideus (bei forcierter Atmung).

**Exspiration (passiv in Ruhe):** Zwerchfell und Interkostalmuskeln relaxieren → **elastische Rückstellkräfte** der Lunge und des Thorax → Thoraxvolumen ↓ → Luft wird ausgepresst. **Forcierte Exspiration** (Husten, Sport): Mm. intercostales interni + Bauchmuskeln (M. rectus abdominis, Mm. obliqui).

**Intrapleuraler Druck:** Normalerweise **negativ** (~−5 cmH₂O in Ruhe, ~−8 cmH₂O bei Inspiration) — hält die Lunge entfaltet. **Pneumothorax** = Luft im Pleuraspalt → Druckausgleich auf 0 → Lungenkollaps auf der betroffenen Seite.

**Lungenvolumina:**

| Volumen | Wert | Bedeutung |
|---|---|---|
| Tidalvolumen (V_T) | ~500 mL | Normaler Atemzug |
| Vitalkapazität (VC) | ~4,5–5 L | Maximale Ein- + Ausatmung |
| Residualvolumen (RV) | ~1,2 L | Nach max. Exspiration verbleibend |
| FEV₁/FVC (Tiffeneau) | >70 % | <70 % → obstruktiv (Asthma, COPD) |

**Compliance** (Dehnbarkeit der Lunge): Surfactant **erhöht** Compliance (Oberflächenspannung ↓ → Lunge leichter dehnbar). **Fibrose** = niedrige Compliance (steife Lunge, restriktiv). **Emphysem** = hohe Compliance (überdehnbare Lunge, Elastizitätsverlust).

> **Merke:** Inspiration = aktiv (Diaphragma + Interkostalmuskeln → Thorax ↑ → Druck ↓ → Luft ein). Exspiration in Ruhe = passiv (elastische Rückstellung). Intrapleuraler Druck immer negativ — Pneumothorax → Kollaps. Tiffeneau-Index <70 % = Obstruktion.

---

## Atemregulation — Atemzentrum und Chemorezeptoren

Das **Atemzentrum** liegt in der **Medulla oblongata** und im **Pons**. Es generiert den Atemrhythmus autonom (Prä-Bötzinger-Komplex) und wird durch Chemorezeptoren moduliert:

- **Zentrale Chemorezeptoren** (Medulla oblongata): Reagieren auf **H⁺-Ionen im Liquor** (CO₂ diffundiert über die Blut-Hirn-Schranke → Carboanhydrase → H⁺ ↑). **Wichtigster Atemantrieb!** Steigt pCO₂ → Ventilation ↑
- **Periphere Chemorezeptoren** (Glomus caroticum an Karotis-Bifurkation + Glomera aortica): Reagieren auf **pO₂ ↓** (erst bei pO₂ <60 mmHg relevant!), pH ↓ und pCO₂ ↑. Schnelle Antwort (~Sekunden)
- **Hering-Breuer-Reflex**: Dehnungsrezeptoren in der Lunge → bei Überdehnung → Inspiration wird reflektorisch beendet (Schutzmechanismus)

**COPD-Vorsicht:** Bei chronischer CO₂-Retention → zentrale Chemorezeptoren adaptieren (Sollwert verschoben) → **O₂-Mangel** wird zum Hauptantrieb (periphere Chemorezeptoren) → unkontrollierte O₂-Gabe kann den letzten Atemantrieb nehmen → **Apnoe!** Daher: O₂-Ziel bei COPD-Patienten: SpO₂ 88–92 %.

> **Merke:** **Hauptatemantrieb**: pCO₂/pH (zentral, Medulla). **Hypoxischer Antrieb**: pO₂ <60 mmHg (peripher, Glomus caroticum). Bei COPD: CO₂-Adaptation → O₂ wird Hauptantrieb → vorsichtige O₂-Gabe (Ziel SpO₂ 88–92 %).`,
      lernziele: [
        "Die Funktion von Surfactant (Typ-II-Pneumozyten, DPPC) und seine Bedeutung zur Verhinderung von Atelektase erklären.",
        "Die Mechanismen der aktiven Inspiration (Diaphragma, Mm. intercostales externi) und passiven Exspiration beschreiben.",
        "Den pulmonalen und peripheren Gasaustausch anhand von Partialdruckgradienten für O₂ und CO₂ erläutern.",
        "Den Bohr-Effekt und die drei Wege des CO₂-Transports im Blut (Bikarbonat, Carbaminohämoglobin, gelöst) benennen.",
        "Die wichtigsten Atemantriebe (zentraler CO₂/pH-Sensor, peripherer O₂-Sensor) und ihre klinische Relevanz bei COPD darstellen.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über den Bohr-Effekt ist korrekt?",
        options: [
          {
            id: "a",
            text: "Der Bohr-Effekt beschreibt die temperaturabhängige O₂-Bindung des Myoglobins.",
          },
          {
            id: "b",
            text: "Bei niedrigem pH verschiebt sich die O₂-Bindungskurve nach links und erleichtert die O₂-Aufnahme.",
          },
          {
            id: "c",
            text: "Der Bohr-Effekt beschreibt die pH-abhängige O₂-Affinität des Hämoglobins: Niedriger pH → Rechtsverschiebung → erleichterte O₂-Abgabe im Gewebe; hoher pH → Linksverschiebung → erleichterte O₂-Aufnahme in der Lunge.",
          },
          {
            id: "d",
            text: "Der Bohr-Effekt tritt nur bei fetalen Erythrozyten auf und ist beim Erwachsenen nicht relevant.",
          },
          {
            id: "e",
            text: "Hyperventilation verstärkt den Bohr-Effekt und fördert die O₂-Abgabe an das Gewebe.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "Der Bohr-Effekt: pH ↓ (CO₂ ↑, Laktat) → Hb-Konformationsänderung → O₂-Affinität ↓ → Rechtsverschiebung → erleichterte O₂-Abgabe im stoffwechselaktiven Gewebe. In der Lunge: pH ↑ → Linksverschiebung → erleichterte O₂-Aufnahme. Hyperventilation → pH ↑ → Linksverschiebung → O₂ wird schlechter abgegeben.",
      },
      selfTest: [
        {
          question: "Welche Aussage über Surfactant und seine Funktion ist korrekt?",
          options: [
            "Surfactant wird von Typ-I-Pneumozyten produziert und besteht hauptsächlich aus Proteinen.",
            "Surfactant wird von Typ-II-Pneumozyten produziert, besteht zu ~90% aus Phospholipiden (hauptsächlich DPPC) und senkt die Oberflächenspannung in den Alveolen, um einen Kollaps (Atelektase) zu verhindern.",
            "Surfactant erhöht die Oberflächenspannung in den Alveolen, um sie zu stabilisieren.",
            "Das Respiratory Distress Syndrome (RDS) bei Frühgeborenen wird durch Surfactant-Überschuss verursacht.",
            "Surfactant-Mangel führt zu einer erleichterten Inspiration, da die Alveolen leichter zu öffnen sind.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Surfactant** ist essentiell für die Lungenfunktion:\n\n**Produktion:**\n- **Typ-II-Pneumozyten** (~5% der Alveolaroberfläche) produzieren und sezernieren Surfactant\n\n**Zusammensetzung:**\n- ~**90% Phospholipide** (hauptsächlich **Dipalmitoylphosphatidylcholin, DPPC**)\n- ~10% Proteine (Surfactant-Proteine A, B, C, D)\n\n**Funktion:**\n1. **Senkung der Oberflächenspannung** an der Luft-Flüssigkeits-Grenze in Alveolen\n2. **Verhindert Alveolarkollaps (Atelektase):**\n   - Laplace-Gesetz: **P = 2T/r** (Druck = 2 × Oberflächenspannung / Radius)\n   - Ohne Surfactant: Kleine Alveolen (kleiner Radius r) → hoher Druck P → Kollaps\n   - Mit Surfactant: T ↓ → Druck gleicht sich an → Stabilisierung\n3. **Erleichtert Inspiration** (weniger Kraft nötig)\n\n**Klinisch:**\n- **Neonatales RDS (Frühgeborene <28 Wochen):** Surfactant-Mangel (Typ-II-Pneumozyten unreif) → Atelektase → Hypoxie\n- **Therapie:** Surfactant-Gabe (endotracheal), Beatmung\n- **Prophylaxe:** Betamethason/Dexamethason (Mutter antenatal → Lungenreifung ↑)\n\n**Falsch (A):** **Typ-II-Pneumozyten** (nicht Typ-I) produzieren Surfactant. Typ-I-Pneumozyten (~95% der Oberfläche) sind dünn und für **Gasaustausch** zuständig. Surfactant besteht zu ~90% aus **Phospholipiden** (nicht Proteinen).\n\n**Falsch (C):** Surfactant **senkt** (nicht erhöht) die Oberflächenspannung → verhindert Kollaps.\n\n**Falsch (D):** RDS wird durch **Surfactant-Mangel** (nicht Überschuss) verursacht.\n\n**Falsch (E):** Surfactant-Mangel → hohe Oberflächenspannung → **erschwerte Inspiration** (mehr Kraft nötig, Atelektase-Risiko ↑).",
          difficulty: 1,
          tags: ["surfactant", "alveolen", "atemnotsyndrom"],
        },
        {
          question: "Welche Aussage über die Atemmechanik ist korrekt?",
          options: [
            "Die Inspiration in Ruhe ist ein passiver Prozess, der durch elastische Rückstellung der Lunge erfolgt.",
            "Die Inspiration in Ruhe ist ein aktiver Prozess, bei dem das Diaphragma und die Mm. intercostales externi kontrahieren, um das Thoraxvolumen zu vergrößern und den intrapulmonalen Druck zu senken.",
            "Der intrapleurale Druck ist während der Atmung immer positiv (+5 mmHg in Ruhe).",
            "Bei einem Pneumothorax wird der intrapleurale Druck negativ, was die Lunge zur vollständigen Entfaltung bringt.",
            "Die Exspiration in Ruhe ist ein aktiver Prozess, der die Kontraktion der Bauchmuskeln erfordert.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Inspiration in Ruhe** ist **aktiv** (Muskelarbeit erforderlich):\n\n**Mechanismus:**\n1. **Diaphragma** (Zwerchfell, wichtigster Atemmuskel) kontrahiert → senkt sich (~10 cm) → Thoraxvolumen ↑ (vertikal)\n2. **Mm. intercostales externi** (äußere Interkostalmuskeln) kontrahieren → Rippen heben sich → Thoraxvolumen ↑ (anterior-posterior + lateral)\n3. **Lungenvolumen ↑** → **Intrapulmonaler Druck ↓** (~−1 mmHg, subatmosphärisch)\n4. **Druckgradient:** Atmosphärisch (0 mmHg) → Pulmonal (−1 mmHg) → Luft strömt ein\n\n**Exspiration in Ruhe** ist **passiv** (keine Muskelarbeit):\n- Diaphragma + Interkostalmuskeln entspannen → elastische Rückstellung → Thoraxvolumen ↓ → intrapulmonaler Druck ↑ (~+1 mmHg) → Luft strömt aus\n\n**Falsch (A):** Inspiration in Ruhe ist **aktiv** (nicht passiv). **Exspiration** in Ruhe ist passiv (elastische Rückstellung).\n\n**Falsch (C):** Der **intrapleurale Druck** ist **immer negativ** (~−5 mmHg in Ruhe, ~−8 mmHg bei Inspiration). Dies ist essentiell, um die Lunge entfaltet zu halten (negative Traktion). Positiver intrapleuraler Druck → Lungenkollaps.\n\n**Falsch (D):** Bei **Pneumothorax** (Luft im Pleuraspalt) wird der intrapleurale Druck **0 oder positiv** (nicht negativ) → Lunge verliert negative Traktion → **Kollaps** (nicht Entfaltung).\n\n**Falsch (E):** Exspiration in Ruhe ist **passiv**. **Forcierte Exspiration** (aktiv, z. B. bei Husten, Sport) erfordert Bauchmuskeln (M. rectus abdominis, M. obliquus) + Mm. intercostales interni.",
          difficulty: 2,
          tags: ["atemmechanik", "inspiration", "exspiration"],
        },
        {
          question: "Welche Aussage über den Gasaustausch in der Lunge ist korrekt?",
          options: [
            "Der O₂-Partialdruck in den Alveolen beträgt ~40 mmHg, während er im venösen Blut ~100 mmHg beträgt.",
            "CO₂ diffundiert langsamer als O₂, da es ein größeres Molekül ist.",
            "Der O₂-Gradient zwischen Alveolen (~100 mmHg) und venösem Blut (~40 mmHg) beträgt 60 mmHg. Der CO₂-Gradient beträgt 6 mmHg (46 → 40 mmHg), aber CO₂ diffundiert ~20× schneller als O₂ aufgrund höherer Löslichkeit.",
            "Die Blut-Luft-Schranke beträgt etwa 5 mm und begrenzt die Diffusionsgeschwindigkeit erheblich.",
            "O₂ und CO₂ werden gleich schnell ausgetauscht, da beide Gase dieselbe Diffusionsrate haben.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** Der **Gasaustausch** in der Lunge erfolgt durch **Diffusion** entlang von Partialdruckgradienten:\n\n**O₂-Diffusion:**\n- **Alveolen:** pO₂ ~**100 mmHg**\n- **Venöses Blut** (aus Gewebe): pO₂ ~**40 mmHg**\n- **Gradient:** 100 − 40 = **60 mmHg** → O₂ diffundiert ins Blut\n- **Arterielles Blut** (nach Gasaustausch): pO₂ ~100 mmHg\n\n**CO₂-Diffusion:**\n- **Venöses Blut:** pCO₂ ~**46 mmHg**\n- **Alveolen:** pCO₂ ~**40 mmHg**\n- **Gradient:** 46 − 40 = **6 mmHg** (viel kleiner als O₂-Gradient!)\n- **Aber:** CO₂ ist ~**20× diffusibler** als O₂ (höhere Löslichkeit in Membranen) → trotz kleinerem Gradienten effizient\n\n**Fick'sches Diffusionsgesetz:** Diffusionsrate ∝ Gradient × Löslichkeit × Oberfläche / Diffusionsstrecke\n\n**Falsch (A):** **Umgekehrt!** Alveolen: pO₂ ~100 mmHg, venöses Blut: pO₂ ~40 mmHg (nicht andersherum).\n\n**Falsch (B):** CO₂ diffundiert **schneller** (nicht langsamer) als O₂ (~20× schneller), obwohl es ein größeres Molekül ist. Grund: **höhere Löslichkeit** in Lipidmembranen.\n\n**Falsch (D):** Die **Blut-Luft-Schranke** beträgt ~**0,5 µm** (nicht 5 mm)! Sie ist extrem dünn:\n1. Alveoläres Epithel (Typ-I-Pneumozyten)\n2. Fusionierte Basalmembran\n3. Kapillar-Endothel\n\n**Falsch (E):** O₂ und CO₂ haben **unterschiedliche Diffusionsraten**. CO₂ diffundiert ~20× schneller (höhere Löslichkeit), kompensiert den kleineren Gradienten.",
          difficulty: 2,
          tags: ["gasaustausch", "sauerstoff", "co2"],
        },
        {
          question:
            "Welche Aussage über den Bohr-Effekt und die Hämoglobin-Sauerstoffbindung ist korrekt?",
          options: [
            "Der Bohr-Effekt beschreibt eine Linksverschiebung der O₂-Bindungskurve bei erhöhtem CO₂, niedrigem pH und erhöhter Temperatur.",
            "Der Bohr-Effekt führt dazu, dass in metabolisch aktivem Gewebe (CO₂ ↑, pH ↓, Temp ↑, 2,3-BPG ↑) die O₂-Bindungskurve nach rechts verschoben wird, was die O₂-Affinität von Hämoglobin senkt und die O₂-Abgabe ans Gewebe erhöht.",
            "Hämoglobin ist ein Monomer mit einer Häm-Gruppe, das Sauerstoff linear bindet.",
            "2,3-BPG verschiebt die O₂-Bindungskurve nach links und erhöht die O₂-Affinität von Hämoglobin.",
            "In der Lunge (CO₂ ↓, pH ↑) wird die O₂-Bindungskurve nach rechts verschoben, was die O₂-Aufnahme erschwert.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** Der **Bohr-Effekt** beschreibt, wie metabolische Parameter die O₂-Affinität von Hämoglobin beeinflussen:\n\n**Bedingungen in metabolisch aktivem Gewebe:**\n- **CO₂ ↑** (Stoffwechselprodukt)\n- **pH ↓** (Azidose, H⁺ ↑ aus CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻)\n- **Temperatur ↑** (Muskelarbeit, Entzündung)\n- **2,3-BPG ↑** (2,3-Bisphosphoglycerat, bei chronischer Hypoxie, Höhenanpassung)\n\n**Effekt:**\n- **Rechtverschiebung** der O₂-Bindungskurve\n- **O₂-Affinität ↓** (Hb bindet O₂ schwächer)\n- **O₂-Abgabe ↑** (mehr O₂ wird ans Gewebe abgegeben)\n\n**Physiologische Bedeutung:** Gewebe mit hohem Stoffwechsel (Muskel, Hirn) brauchen mehr O₂ → lokale Bedingungen (CO₂ ↑, pH ↓, Temp ↑) → Hb gibt mehr O₂ ab.\n\n**In der Lunge (umgekehrt):**\n- CO₂ ↓ (wird abgeatmet), pH ↑, Temp normal\n- **Linksverschiebung** → O₂-Affinität ↑ → **O₂-Aufnahme ↑**\n\n**Falsch (A):** **Rechtverschiebung** (nicht Links) bei CO₂ ↑, pH ↓, Temp ↑. Linksverschiebung wäre bei CO₂ ↓, pH ↑ (Lunge).\n\n**Falsch (C):** Hämoglobin ist ein **Tetramer** (4 Untereinheiten: 2α, 2β), jede mit einer Häm-Gruppe (insgesamt 4). Bindung ist **kooperativ** (sigmoid, nicht linear) → Bindung des 1. O₂ erleichtert Bindung des 2./3./4. O₂.\n\n**Falsch (D):** 2,3-BPG verschiebt die Kurve nach **rechts** (nicht links) → O₂-Affinität ↓ → O₂-Abgabe ↑. Entsteht bei Hypoxie (Höhenanpassung, Anämie) → kompensatorisch.\n\n**Falsch (E):** In der Lunge (CO₂ ↓, pH ↑) → **Linksverschiebung** (nicht rechts) → O₂-Affinität ↑ → **O₂-Aufnahme erleichtert** (nicht erschwert).",
          difficulty: 2,
          tags: ["bohr-effekt", "hämoglobin", "sauerstoffbindung"],
        },
        {
          question: "Welche Aussage über den CO₂-Transport im Blut ist korrekt?",
          options: [
            "Der größte Teil des CO₂ wird physikalisch gelöst im Plasma transportiert (ca. 70%).",
            "Ca. 70% des CO₂ werden als Bikarbonat (HCO₃⁻) transportiert, ca. 23% als Carbaminohämoglobin (CO₂ gebunden an Hämoglobin) und ca. 7% gelöst im Plasma.",
            "Carboanhydrase katalysiert die Reaktion CO₂ + H₂O → H₂CO₃ in den Alveolen, um CO₂ zu speichern.",
            "Der Chlorid-Shift beschreibt den Austausch von Na⁺ gegen Cl⁻ in Erythrozyten.",
            "Der Haldane-Effekt besagt, dass oxygeniertes Hämoglobin mehr CO₂ bindet als desoxygeniertes Hämoglobin.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** CO₂-Transport im Blut erfolgt über **3 Mechanismen**:\n\n**1. Bikarbonat (HCO₃⁻) — ~70% (wichtigster Mechanismus):**\n- In Erythrozyten: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (katalysiert durch **Carboanhydrase**)\n- **HCO₃⁻** diffundiert aus Erythrozyten ins Plasma\n- **Chlorid-Shift:** Cl⁻ diffundiert ins Erythrozyt (Cl⁻/HCO₃⁻-Austauscher), um Ladungsausgleich zu wahren\n\n**2. Carbaminohämoglobin — ~23%:**\n- CO₂ bindet direkt an **Aminogruppen der Globin-Ketten** (nicht an Häm-Gruppe!)\n- Formel: Hb-NH₂ + CO₂ ⇌ Hb-NH-COO⁻ + H⁺\n\n**3. Physikalisch gelöst — ~7%:**\n- CO₂ gelöst im Plasma (bestimmt pCO₂)\n\n**Falsch (A):** Nur ~7% (nicht 70%) des CO₂ werden physikalisch gelöst transportiert. ~70% werden als **HCO₃⁻** transportiert.\n\n**Falsch (C):** Carboanhydrase katalysiert die Reaktion **in Erythrozyten** (nicht Alveolen), um CO₂ → HCO₃⁻ umzuwandeln (Transport). In der Lunge läuft die Reaktion **rückwärts** (HCO₃⁻ → CO₂), um CO₂ abzuatmen.\n\n**Falsch (D):** Der **Chlorid-Shift** (Hamburger-Shift) beschreibt den Austausch von **Cl⁻** (ins Erythrozyt) gegen **HCO₃⁻** (aus Erythrozyt), **nicht** Na⁺ gegen Cl⁻. Zweck: Ladungsausgleich.\n\n**Falsch (E):** **Haldane-Effekt:** **Umgekehrt!** **Desoxygeniertes Hb** bindet **mehr CO₂** (und mehr H⁺) als oxygeniertes Hb.\n- **Gewebe:** O₂ ↓ → Hb desaturiert → CO₂-Bindung ↑ (fördert CO₂-Aufnahme)\n- **Lunge:** O₂ ↑ → Hb saturiert → CO₂-Abgabe ↑ (erleichtert CO₂-Elimination)",
          difficulty: 3,
          tags: ["co2-transport", "bikarbonat", "carboanhydrase"],
        },
        {
          question: "Welche der folgenden Aussagen über das Atmungssystem ist FALSCH?",
          options: [
            "Surfactant wird von Typ-II-Pneumozyten produziert und senkt die Oberflächenspannung in den Alveolen",
            "Der wichtigste Atemantrieb sind die zentralen Chemorezeptoren in der Medulla, die auf pCO₂-Erhöhung im Liquor reagieren",
            "Typ-I-Pneumozyten produzieren Surfactant und sind für den Gasaustausch verantwortlich",
            "Die Inspiration erfolgt aktiv durch Kontraktion von Diaphragma und äußeren Interkostalmuskeln",
            "Bei obstruktiven Lungenerkrankungen (COPD, Asthma) ist der Tiffeneau-Index (FEV1/FVC) erniedrigt (<70%)",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist falsch. Typ-I-Pneumozyten sind für den Gasaustausch zuständig (extrem flach, ~95% der Alveolaroberfläche), produzieren aber KEIN Surfactant. Surfactant wird ausschließlich von Typ-II-Pneumozyten produziert. Die Verwechslung der beiden Pneumozyten-Typen ist eine typische MedAT-Falle. Typ II sind kubisch, machen ~5% der Oberfläche aus und sind die Stammzellen der Alveolen. Die übrigen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "atmung", "pneumozyten", "surfactant"],
        },
      ],

      merksätze: [
        "**Atemwege-Anatomie:** Obere Atemwege: Nase (Filtration, Befeuchtung, Erwärmung), Nasennebenhöhlen, Pharynx. Untere Atemwege: Larynx (Stimmbildung, Epiglottis), Trachea (C-Knorpel, 16–20 Spangen), Bronchien (Knorpel + Flimmerepithel) → Bronchiolen (KEIN Knorpel, glatte Muskulatur) → Alveolen (~300 Mio., ~80–140 m², Typ-I [Gasaustausch] + Typ-II [Surfactant]).",
        "**Surfactant:** Produziert von Typ-II-Pneumozyten. Zusammensetzung: ~90% Phospholipide (DPPC). Funktion: Oberflächenspannung ↓ → Alveolarkollaps verhindert (Laplace: P = 2T/r → kleine Alveolen ohne Surfactant kollabieren). Neonatales RDS (Frühgeborene <28 SSW): Surfactant-Mangel → Atelektase → Hypoxie. Therapie: Surfactant endotracheal, antenatale Glukokortikoide (Lungenreifung).",
        "**Atemmechanik & Lungenvolumina:** Inspiration: Diaphragma + Mm. intercostales externi → Thoraxvolumen ↑ → Pleuradruck ↓ → Luft einströmt. Exspiration: passiv (Elastizität). AZV ~500 mL, TLC ~5800 mL. FEV1/FVC: Obstruktion (COPD/Asthma) <70%; Restriktion (Fibrose) FEV1/FVC normal aber TLC ↓.",
        "**Gasaustausch & CO₂-Transport:** Blut-Luft-Schranke ~0,5 μm. O₂: pO₂ Alveolar ~100 mmHg → Blut ~100 mmHg; Gewebe: ~40 mmHg. CO₂ diffundiert 20× schneller als O₂. CO₂-Transport: 70% als Bikarbonat (Carboanhydrase → Chlorid-Shift), 23% Carbamino-Hb, 7% gelöst. Haldane-Effekt: Desoxy-Hb bindet mehr CO₂.",
        "**Atemregulation:** Atemzentrum (Medulla + Pons). Zentrale Chemorezeptoren (Medulla): pCO₂ ↑ / pH ↓ im Liquor → Ventilation ↑ (WICHTIGSTER Atemantrieb). Periphere Chemorezeptoren (Karotis-Körper): pO₂ ↓ <60 mmHg → Ventilation ↑. Hering-Breuer-Reflex: Lungen-Überdehnung → Inspiration stoppt. COPD: CO₂-Adaptation → hypoxischer Antrieb wichtiger.",
        "**COPD:** Obstruktion (FEV1/FVC <70%). Emphysem (Alveolen-Destruktion → elastischer Rückzug ↓ → fassförmige Thorax, Air-Trapping) + Chronische Bronchitis (Mukus, Husten). Ursache: Rauchen (~80%). Gold-Klassifikation I–IV (nach FEV1). Therapie: SABA (Notfall) → LAMA oder LABA → LAMA+LABA+ICS. O₂-Langzeittherapie (>15 h/Tag) verbessert Überl eben.",
        "**Asthma bronchiale:** Chronische Entzündung → bronchiale Hyperreaktivität → reversible Obstruktion. Pathophysiologie: Th2/IgE → Mastzellen → Histamin, Leukotriene → Bronchokonstriktion + Mukus. Trigger: Allergene, Kälte, NSAR, Infekte. Therapie: SABA (Notfall), ICS (Basistherapie), LABA (add-on), Montelukast (Leukotrien-Antagonist), Biologika (Omalizumab, Dupilumab).",
        "**Pneumonie:** Lobärpneumonie: Streptococcus pneumoniae → Konsolidierung (Lappen). Atypisch: Mykoplasmen (junger Erwachsener, 'walking pneumonia'), Chlamydien, Legionellen. Therapie: Amoxicillin (typisch), Makrolid (atypisch). Komplikationen: Pleuraempyem, Sepsis. Prävention: Pneumokokken-Impfung. Aspirationspneumonie: Rechter Unterlappen (anatomisch).",
        "**Pleura & Pneumothorax:** Pleuritis (Reibegeräusch). Pleuraerguss: Transsudat (Herzinsuffizienz, Hypoalbuminämie, Serumkolloid ↓) vs. Exsudat (Entzündung, Malignom, Light-Kriterien). Pneumothorax: Luft in Pleurahöhle → Lunge kollabiert. Spontan (junger, schlanker Mann, bullöses Emphysem), traumatisch. Spannungspneumothorax: Ventilmechanismus → Mediastinalverschiebung → Notfall (Nadeldekompression 2. ICR MCL).",
      ],
      klinischerBezug:
        "COPD betrifft >250 Millionen Menschen weltweit (Hauptursache: Rauchen, auch Luftverschmutzung). Exazerbationen (AECOPD) durch Infekte → Systemglukokortikoide, Antibiotika, kontrollierte O₂-Gabe (Ziel-SpO₂ ~88–92%). Asthma bronchiale: 300 Millionen Betroffene; allergisches Asthma häufigste Form (IgE-vermittelt). Biologika (Omalizumab [Anti-IgE], Mepolizumab [Anti-IL-5], Dupilumab [Anti-IL-4/IL-13]) bei schwerem Asthma. Lungenkarzinom: häufigste krebsbedingte Todesursache weltweit. NSCLC (85%): Adenokarzinom (häufigste, EGFR-/ALK-Mutationen, targeted therapy), Plattenepithelkarzinom; SCLC (15%, paraneoplastisch, Cushing/SIADH). ARDS: diffuser alveolärer Schaden (Sepsis, Trauma, COVID-19) → lungenprotektive Beatmung (6 mL/kg, PEEP) reduziert Mortalität. Pulmonale Embolie: Thrombus aus tiefen Beinvenen → Pulmonalarterien → Atemnot, Tachykardie, pleuritischer Schmerz. Therapie: Antikoagulation (Heparin/DOAK), bei Massembolie Lyse/Embolektomie.",
    },
    {
      id: "bio-3-09",
      title: "Verdauungssystem",
      imageUrl: "/images/wiki-digestive-de.svg",
      imageCaption: "Abb.: Organe des Verdauungssystems im Überblick (OpenStax, CC BY 4.0)",
      diagram: "digestive-system",
      stichworte: [
        "Magen",
        "Dünndarm",
        "Dickdarm",
        "Leber",
        "Pankreas",
        "Enzyme",
        "Peristaltik",
        "Resorption",
      ],
      content: `Nahrung muss mechanisch zerkleinert, chemisch gespalten und als Nährstoff resorbiert werden — genau das leistet der Verdauungstrakt in einer koordinierten Abfolge von Organen.

{{IMAGE}}

## Verdauungstrakt Organ für Organ — Mund bis Kolon

Die Verdauung beginnt bereits in der **Mundhöhle**: Mechanische Zerkleinerung (Kauen) und Benetzung mit Speichel (~1–1,5 L/Tag). Die **Speichel-Amylase** (Ptyalin) spaltet Stärke zu Maltose und Dextrinen — die Kohlenhydratverdauung beginnt also im Mund. Der Bolus gelangt über den **Ösophagus** (Speiseröhre, ~25 cm) durch **Peristaltik** (koordinierte Kontraktion: Längsmuskulatur → Ringmuskulatur, gesteuert vom Plexus myentericus = Auerbach) in den Magen. Der untere Ösophagussphinkter (UÖS) verhindert Reflux.

**Magen-Abschnitte:** Kardia (Eingang) → Fundus (Kuppel, Gasblase) → Corpus (Hauptteil, Beleg- und Hauptzellen) → Antrum (G-Zellen, Gastrin) → Pylorus (Pförtner, reguliert Magenentleerung). Verweildauer: Kohlenhydrate ~1–2 h, Proteine ~3–4 h, Fette ~5–6 h (Fett hemmt Magenentleerung via CCK).

**Dünndarm** (~5–6 m, Hauptort der Verdauung und Resorption):
- **Duodenum** (~25 cm, C-förmig): Einmündung von Ductus choledochus (Galle) + Ductus pancreaticus (Pankreassaft) an der **Papilla Vateri**. Hier: Neutralisation des sauren Chymus (HCO₃⁻), Fettemulgierung (Gallensalze), Enzymaktivierung
- **Jejunum** (~2,5 m): Hauptresorptionsort — Kerckring-Falten (Plicae circulares) hier am ausgeprägtesten. Glukose, Aminosäuren, Fette, Eisen (Fe²⁺, DMT1), fettlösliche Vitamine
- **Ileum** (~3 m): Resorption von **Vitamin B₁₂** (nur hier, benötigt IF) und **Gallensalzen** (enterohepatischer Kreislauf, ~95 % der Gallensalze werden recycelt). Peyer-Plaques (GALT, Immunfunktion)

**Kolon** (~1,5 m): Wasserrückresorption (~1,5 L/Tag), Elektrolyte (Na⁺, Cl⁻), Eindickung des Stuhls. Bakterielle Fermentation unverdaulicher Kohlenhydrate → kurzkettige Fettsäuren (Butyrat = Energiequelle der Kolonozyten). Haustrierung (Einschnürungen), keine Zotten.

> **Merke:** Mund (Amylase, mechanisch) → Ösophagus (Peristaltik) → Magen (HCl, Pepsin) → Duodenum (Galle + Pankreas) → Jejunum (Hauptresorption) → Ileum (B₁₂, Gallensalze) → Kolon (Wasser, Bakterien). Fett bremst die Magenentleerung.

---

{{DIAGRAM}}

## Magen — Sekretion und Regulation

Der Magen produziert täglich bis zu 3 Liter Magensaft mit einem pH von 1–2 — stark genug, um Bakterien abzutöten und Proteine zu denaturieren. Die Magenschleimhaut enthält fünf spezialisierte Zelltypen mit klar definierten Aufgaben:

| Zelltyp | Sekret | Stimulus |
|---|---|---|
| **Belegzellen** (Parietalzellen) | HCl + **Intrinsic Factor** (IF) | Gastrin (G-Zellen), ACh (N. vagus), Histamin |
| **Hauptzellen** | **Pepsinogen** (→ Pepsin bei pH <3) | ACh, Gastrin |
| **Nebenzellen** (Schleimzellen) | Mukus (Schutzschicht) | Prostaglandine |
| **G-Zellen** (Antrum) | **Gastrin** | Peptide, Dehnung, ACh |
| **D-Zellen** | **Somatostatin** (hemmt Gastrin + HCl) | niedriger pH, Fette |

**HCl-Synthese** (Belegzellen): H⁺/K⁺-ATPase (Protonenpumpe) pumpt H⁺ gegen Gradient. Carboanhydrase liefert H⁺ aus CO₂ + H₂O. **Protonenpumpenhemmer** (PPI, z.B. Omeprazol) blockieren die H⁺/K⁺-ATPase irreversibel → HCl ↓ → Ulkustherapie.

> **Merke:** **Magenzellen**: Belegzellen = HCl + IF, Hauptzellen = Pepsinogen, Nebenzellen = Mukus, G-Zellen = Gastrin (↑HCl), D-Zellen = Somatostatin (↓HCl). PPI blockieren H⁺/K⁺-ATPase.

---

## Verdauungsenzyme — Kohlenhydrate, Proteine, Fette

| Substrat | Enzym | Herkunft | Produkt |
|---|---|---|---|
| Stärke | **Speichel-Amylase** (Ptyalin) | Mundhöhle | Maltose, Dextrine |
| Stärke | **Pankreas-Amylase** | Pankreas | Maltose, Dextrine |
| Maltose/Laktose/Saccharose | **Bürstensaumenzyme** (Maltase, Laktase, Sucrase) | Duodenum/Jejunum | Monosaccharide (Glukose, Galaktose, Fruktose) |
| Proteine | **Pepsin** (aus Pepsinogen) | Magen (pH <3) | Polypeptide |
| Proteine | **Trypsin**, Chymotrypsin, Elastase | Pankreas | Oligopeptide |
| Oligopeptide | Carboxypeptidase, Aminopeptidase | Pankreas / Bürstensaum | Aminosäuren, Di-/Tripeptide |
| Triglyzeride | **Pankreas-Lipase** (+ Colipase) | Pankreas | Fettsäuren + 2-Monoglyzeride |
| Fett-Emulgierung | **Gallensalze** | Leber/Gallenblase | Mizellen |

**Aktivierungskaskade im Pankreas:** Trypsinogen wird im Dünndarm durch **Enterokinase** (= Enteropeptidase, auf Bürstensaum-Enterozyten) → Trypsin aktiviert. Trypsin aktiviert dann alle anderen Pankreasenzyme (Chymotrypsinogen, Proelastase, Phospholipase A₂). Gefährlich: Trypsin-Aktivierung schon im Pankreas → **akute Pankreatitis** (Autodigestion). Schutz: **Trypsin-Inhibitor** (SPINK1) im Pankreassekret.

> **Merke:** Stärke: Amylase (Mund + Pankreas) → Maltase (Bürstensaum) → Glukose. Proteine: Pepsin (Magen) → Trypsin/Chymotrypsin (Pankreas). Fette: Lipase + Gallensalze → Fettsäuren. **Trypsinogen → Trypsin** via Enterokinase → Schlüsselenzym, aktiviert alle anderen.

---

## Resorption im Dünndarm — Mikrovilli und Transporter

Die enorme Resorptionsfläche des Dünndarms (~200 m²) entsteht durch drei Ebenen der Oberflächenvergrößerung: **Kerckring-Falten** (Plicae circulares, ~3×) → **Zotten** (Villi, ~10×) → **Mikrovilli** (Bürstensaum, ~20×). Jede Zotte enthält ein Blutkapillarnetz und ein zentrales **Lymphgefäß** (Chylusgefäß) für den Fetttransport.

| Nährstoff | Transporter | Besonderheit |
|---|---|---|
| Glukose/Galaktose | **SGLT1** (apikal, Na⁺-gekoppelt, sekundär-aktiv) | GLUT2 basolateral → Pfortader |
| Fruktose | GLUT5 (apikal) | Erleichterte Diffusion (passiv) |
| Aminosäuren | Na⁺-gekoppelte AA-Transporter, PepT1 (Di-/Tripeptide) | Pfortader |
| **Fette** | Mizellen → passive Diffusion → Enterozyt → **Chylomikronen** (Triglyzeride + ApoB-48) | **Lymphe** (Ductus thoracicus) → **nicht Pfortader**! |
| Eisen | **DMT1** (Fe²⁺, Duodenum) | Häm-Eisen besser resorbierbar als Nicht-Häm |
| Vitamin B₁₂ | **Cubam-Rezeptor** (IF-B₁₂-Komplex) | **Nur terminales Ileum** |

> **Merke:** Oberflächenvergrößerung: Falten × Zotten × Mikrovilli = ~200 m². Glukose: SGLT1 (aktiv). Fette: Mizellen → Chylomikronen → **Lymphe** (nicht Pfortader!). B₁₂: nur Ileum + IF. Eisen: DMT1, Duodenum.

---

## Leber, Galle und Pankreas — Drüsenfunktionen und Pfortaderkreislauf

Die **Leber** (größte Drüse, ~1,5 kg) hat eine einzigartige doppelte Blutversorgung: **A. hepatica** (~25 %, sauerstoffreich) und **V. portae** (~75 %, nährstoffreich). Die **Pfortader** (V. portae) sammelt venöses Blut aus Magen, Darm, Milz und Pankreas → Leber → Verarbeitung, bevor Nährstoffe in den systemischen Kreislauf gelangen (**First-Pass-Effekt**, auch für Medikamente!). Leberläppchen sind die funktionellen Einheiten: Hepatozyten radiär um eine Zentralvene angeordnet, dazwischen Sinusoide mit Kupffer-Zellen (Lebermakrophagen).

**Galleproduktion:** ~500–1000 mL/Tag. Gallensalze (aus Cholesterin) emulgieren Fette → Mizellenbildung → Fettresorption. **Enterohepatischer Kreislauf**: ~95 % der Gallensalze werden im terminalen Ileum rückresorbiert → Pfortader → Leber → erneute Sekretion. Speicherung und Konzentrierung in der **Gallenblase** (5–10×). Auslöser der Gallenblasenkontraktion: **CCK** (Cholezystokinin, freigesetzt bei Fett/Protein im Duodenum).

**Exokrines Pankreas:** ~1,5 L Pankreassaft/Tag (pH ~8, HCO₃⁻-reich → neutralisiert Magensäure). Reguliert durch **Sekretin** (HCO₃⁻-Sekretion ↑) und **CCK** (Enzymsekretion ↑).

**Bilirubin-Stoffwechsel** (wichtig für Ikterus-Typen):
- Hämoglobin → Häm → **Biliverdin → Bilirubin unkonjugiert** (lipophil, albumin-gebunden, toxisch)
- Leber: UDP-Glukuronosyltransferase (**UGT1A1**) konjugiert → **Bilirubin-Diglukuronid** (wasserlöslich)
- → Galle → Darm → bakteriell → **Sterkobilin** (Stuhl braun) + Urobilinogen → Urin: **Urobilin** (gelb)

> **Merke:** **Pfortader**: sammelt Blut aus GIT → Leber (First-Pass). **Galle**: Gallensalze emulgieren Fette, 95 % enterohepatisch recycelt. **Bilirubin-Weg**: Hb → unkonjugiert (albumin-gebunden) → Leber (UGT1A1) → konjugiert → Galle → Sterkobilin (Stuhl braun) + Urobilin (Urin gelb).`,
      lernziele: [
        "Die Funktion der Magenzellen (Beleg-, Haupt-, Nebenzellen, G-Zellen, D-Zellen) und deren Sekrete benennen und erklären.",
        "Die wichtigsten Pankreasenzyme und deren Aktivierungskaskade (Trypsinogen → Trypsin via Enterokinase) darstellen.",
        "Die Mechanismen der Nährstoffresorption im Dünndarm (SGLT1 für Glukose, Mizellen für Fette, IF für Vitamin B₁₂) erläutern.",
        "Den Bilirubin-Stoffwechsel (unkonjugiert → konjugiert → Sterkobilin/Urobilin) und die drei Ikterus-Typen unterscheiden.",
        "Die Hauptfunktionen der Leber (Entgiftung, Harnstoffzyklus, Gerinnungsfaktor-Synthese, Galleproduktion, Bilirubin-Konjugation) beschreiben.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über die Kohlenhydratverdauung ist korrekt?",
        options: [
          {
            id: "a",
            text: "Die Kohlenhydratverdauung beginnt erst im Magen durch die Wirkung von Pepsin auf Stärke.",
          },
          {
            id: "b",
            text: "Die Speichel-Amylase (Ptyalin) spaltet Stärke im Mund zu Maltose und Dextrinen. Im Duodenum setzt die Pankreas-Amylase fort. Bürstensaum-Enzyme (Maltase, Lactase, Sucrase) spalten Disaccharide zu resorbierbaren Monosacchariden.",
          },
          {
            id: "c",
            text: "Lactase spaltet Saccharose in Glukose und Fruktose, während Sucrase Laktose spaltet.",
          },
          {
            id: "d",
            text: "Die Pankreas-Amylase spaltet Stärke direkt zu Monosacchariden ohne Zwischenstufe.",
          },
          {
            id: "e",
            text: "Bürstensaum-Enzyme befinden sich ausschließlich im Magen und spalten Polysaccharide.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Die Kohlenhydratverdauung beginnt im Mund: Speichel-Amylase (Ptyalin) spaltet Stärke zu Maltose und Dextrinen (wird im sauren Magen-pH inaktiviert). Im Duodenum übernimmt die Pankreas-Amylase. Bürstensaum-Enzyme der Enterozyten: Maltase (Maltose → 2 Glukose), Lactase (Laktose → Glukose + Galaktose), Sucrase (Saccharose → Glukose + Fruktose). Resorption via SGLT1 (apikal, aktiv) und GLUT2 (basolateral).",
      },
      selfTest: [
        {
          question: "Welche Aussage über die Magensekretion ist korrekt?",
          options: [
            "Belegzellen produzieren Pepsinogen und Mukus.",
            "Hauptzellen produzieren HCl und Intrinsic Factor.",
            "Belegzellen produzieren HCl und Intrinsic Factor. HCl aktiviert Pepsinogen zu Pepsin (Protease).",
            "Gastrin hemmt die HCl-Sekretion durch negative Rückkopplung.",
            "PPI (Protonenpumpenhemmer) wie Omeprazol aktivieren die H⁺/K⁺-ATPase.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Belegzellen (Parietalzellen)** im Corpus/Fundus produzieren:\n- **HCl** (Magensäure, pH ~1–2) via H⁺/K⁺-ATPase (Protonenpumpe)\n- **Intrinsic Factor (IF)**: Bindet Vitamin B₁₂ → Resorption im Ileum\n\n**HCl-Funktionen:** Denaturierung von Proteinen, Aktivierung Pepsinogen → **Pepsin**, bakterizid.\n\n**Pepsin:** Protease, spaltet Proteine → Peptide.\n\n**Falsch (A):** **Hauptzellen** (nicht Belegzellen) produzieren **Pepsinogen**. **Nebenzellen** produzieren Mukus.\n\n**Falsch (B):** **Belegzellen** (nicht Hauptzellen) produzieren HCl + IF.\n\n**Falsch (D):** **Gastrin** (G-Zellen, Antrum) **stimuliert** HCl-Sekretion (nicht hemmt). **Somatostatin** (D-Zellen) hemmt HCl bei pH <3.\n\n**Falsch (E):** **PPI** (Omeprazol) **hemmen** (nicht aktivieren) die H⁺/K⁺-ATPase → HCl ↓.",
          difficulty: 1,
          tags: ["magensekretion", "salzsäure", "pepsinogen"],
        },
        {
          question: "Welche Aussage über Pankreasenzyme ist korrekt?",
          options: [
            "Pankreas-Lipase spaltet Proteine, während Trypsin Fette spaltet.",
            "Trypsinogen wird durch Enterokinase der Dünndarmmukosa zu Trypsin aktiviert. Trypsin spaltet Proteine und aktiviert weitere Enzyme wie Chymotrypsinogen.",
            "Pankreas-Amylase spaltet Proteine zu Aminosäuren.",
            "Bikarbonat im Pankreassekret senkt den pH im Duodenum.",
            "CCK (Cholezystokinin) hemmt die Enzym-Sekretion des Pankreas.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Pankreasenzyme** (exokrine Funktion):\n\n**Trypsinogen** (Proenzym) → **Enterokinase** (Dünndarmmukosa) → **Trypsin** (aktiv)\n- **Trypsin:** Protease, spaltet Proteine → Peptide\n- Trypsin aktiviert weitere Enzyme: Chymotrypsinogen → Chymotrypsin, Procarboxypeptidase → Carboxypeptidase\n\n**Andere Enzyme:**\n- **Pankreas-Amylase:** Stärke → Maltose\n- **Pankreas-Lipase:** Triglyzeride → Fettsäuren + Monoglyzeride (benötigt Gallensalze)\n\n**Falsch (A):** **Umgekehrt!** Lipase spaltet **Fette**, Trypsin spaltet **Proteine**.\n\n**Falsch (C):** Pankreas-Amylase spaltet **Kohlenhydrate** (Stärke → Maltose), nicht Proteine.\n\n**Falsch (D):** Bikarbonat **erhöht** (nicht senkt) den pH im Duodenum (pH ~8) → neutralisiert Magensäure (pH ~2).\n\n**Falsch (E):** **CCK** (I-Zellen, Duodenum) **stimuliert** (nicht hemmt) Enzym-Sekretion. Trigger: Fett/Protein.",
          difficulty: 2,
          tags: ["pankreasenzyme", "lipase", "amylase"],
        },
        {
          question: "Welche Aussage über die Nährstoffresorption im Dünndarm ist korrekt?",
          options: [
            "Glukose wird durch passive Diffusion resorbiert.",
            "Glukose wird durch SGLT1 (Na⁺-Glukose-Symport, sekundär-aktiv) resorbiert. Fette werden als Mizellen (mit Gallensalzen) aufgenommen, zu Chylomikronen verpackt und über die Lymphe transportiert.",
            "Fette werden direkt als Triglyzeride über die Pfortader zur Leber transportiert.",
            "Vitamin B₁₂ wird im Duodenum ohne Intrinsic Factor resorbiert.",
            "Laktase-Mangel führt zu verbesserter Laktose-Resorption.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Resorption im Dünndarm**:\n\n**Glukose:**\n- **SGLT1** (Na⁺-Glukose-Symport): **Sekundär-aktiv** (nutzt Na⁺-Gradient)\n- **GLUT2** (basolateral): Passive Diffusion ins Blut\n- **Fructose:** GLUT5 (passiv)\n\n**Fette:**\n1. Pankreas-Lipase + **Gallensalze** (Emulgierung) → Fettsäuren + Monoglyzeride\n2. **Mizellen** (mit Gallensalzen) → passive Diffusion ins Enterozyt\n3. Enterozyt: Re-Veresterung → **Chylomikronen** (Triglyzeride + Apolipoprotein B-48)\n4. **Lymphe** (Ductus thoracicus) → Blut (nicht Pfortader!)\n\n**Falsch (A):** Glukose wird **aktiv** (SGLT1, sekundär-aktiv), nicht passiv resorbiert.\n\n**Falsch (C):** Fette gehen über **Lymphe** (nicht Pfortader). Kohlenhydrate/Proteine gehen über Pfortader.\n\n**Falsch (D):** Vitamin B₁₂ wird im **Ileum** (nicht Duodenum) resorbiert und benötigt **Intrinsic Factor** (Magen) → IF-B₁₂-Komplex → Rezeptor-vermittelte Endozytose.\n\n**Falsch (E):** Laktase-Mangel → Laktose **nicht** resorbiert → Dickdarm → Bakterien fermentieren → Diarrhö, Blähungen.",
          difficulty: 2,
          tags: ["nährstoffresorption", "dünndarm", "mikrovilli"],
        },
        {
          question: "Welche Aussage über die Leberfunktion ist korrekt?",
          options: [
            "Die Leber wird nur durch die A. hepatica mit Blut versorgt.",
            "Die Leber hat eine doppelte Blutversorgung: A. hepatica (~25%, O₂-reich) und V. portae (~75%, nährstoffreich aus GIT). Sie produziert Gerinnungsfaktoren (II, VII, IX, X sind Vitamin-K-abhängig) und wandelt Ammoniak über den Harnstoffzyklus in Harnstoff um.",
            "Bilirubin wird in der Leber oxidiert und direkt über die Niere ausgeschieden.",
            "Gilbert-Syndrom ist eine schwere Lebererkrankung mit hoher Mortalität.",
            "Albumin wird im Pankreas produziert.",
          ],
          correctIndex: 1,
          explanation:
            '**Richtig (B):** **Leber-Funktionen**:\n\n**Blutversorgung (doppelt):**\n1. **A. hepatica** (~25%): O₂-reich\n2. **V. portae** (~75%): Nährstoffreich aus GIT (Dünndarm, Dickdarm, Milz, Pankreas, Magen)\n\n**Proteinsynthese:**\n- **Albumin** (wichtigstes Plasmaprotein, onkotischer Druck)\n- **Gerinnungsfaktoren:** I (Fibrinogen), II, V, VII, IX, X, XI, XII\n  - **Vitamin-K-abhängig:** **II, VII, IX, X** ("1972")\n\n**Harnstoffzyklus:**\n- **Ammoniak (NH₃)** (toxisch, aus Aminosäure-Abbau) → **Harnstoff** (weniger toxisch) → Niere → Urin\n- **Hepatische Enzephalopathie:** Leberzirrhose → NH₃ ↑ → ZNS-Symptome (Verwirrtheit, Asterixis)\n\n**Falsch (A):** Leber hat **doppelte** Blutversorgung (A. hepatica + V. portae).\n\n**Falsch (C):** Bilirubin wird **glukuronidiert** (nicht oxidiert) → konjugiert (wasserlöslich) → Galle → Darm → Urobilinogen → Sterkobilin (Stuhl) + Urobilin (Urin). **Nicht** direkt über Niere.\n\n**Falsch (D):** **Gilbert-Syndrom:** Milde UGT1A1-Mangel → unkonjugiertes Bilirubin ↑ → **harmlos** (keine Behandlung nötig, bei Stress/Fasten ↑).\n\n**Falsch (E):** **Albumin** wird in der **Leber** (nicht Pankreas) produziert.',
          difficulty: 2,
          tags: ["leber", "hepatozyten", "leberenzyme"],
        },
        {
          question: "Welche Aussage über den Bilirubin-Stoffwechsel ist korrekt?",
          options: [
            "Konjugiertes Bilirubin ist lipophil und wird an Albumin gebunden transportiert.",
            "Hämoglobin wird zu Biliverdin und dann zu unkonjugiertem Bilirubin (lipophil) abgebaut. In der Leber wird es durch Glukuronidierung zu konjugiertem Bilirubin (wasserlöslich). Im Darm wird es zu Urobilinogen umgewandelt, das als Sterkobilin (Stuhl) und Urobilin (Urin) ausgeschieden wird.",
            "Posthepatischer Ikterus (Cholestase) führt zu erhöhtem unkonjugierten Bilirubin und dunklem Stuhl.",
            "Prähepatischer Ikterus entsteht durch Gallensteine.",
            "Sterkobilin färbt den Urin gelb.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Bilirubin-Stoffwechsel**:\n\n1. **Hb-Abbau** (Milz, RES) → **Häm** → Biliverdin → **Bilirubin (unkonjugiert, lipophil)**\n2. Bilirubin + **Albumin** (Transport im Blut) → Leber\n3. **Glukuronidierung** (UGT1A1): Bilirubin + Glukuronsäure → **Bilirubin-Diglukuronid (konjugiert, wasserlöslich)**\n4. **Galle** → Darm → Bakterien → **Urobilinogen**\n5. **Sterkobilin** (Stuhl, braun) + **Urobilin** (Urin, gelb)\n\n**Ikterus-Typen:**\n- **Prähepatisch:** Hämolyse → **unkonjugiert ↑**\n- **Hepatisch:** Leberschaden → beide ↑\n- **Posthepatisch:** Cholestase (Gallensteine, Pankreaskopf-Ca) → **konjugiert ↑**, **heller Stuhl** (kein Sterkobilin), **dunkler Urin** (Bilirubin)\n\n**Falsch (A):** **Unkonjugiertes** Bilirubin (nicht konjugiertes) ist lipophil und wird an Albumin gebunden. **Konjugiertes** Bilirubin ist wasserlöslich.\n\n**Falsch (C):** Posthepatischer Ikterus → **konjugiertes** (nicht unkonjugiertes) Bilirubin ↑, **heller** (nicht dunkler) Stuhl (kein Sterkobilin).\n\n**Falsch (D):** Prähepatischer Ikterus = **Hämolyse** (nicht Gallensteine). Gallensteine = **posthepatisch**.\n\n**Falsch (E):** **Urobilin** (nicht Sterkobilin) färbt Urin gelb. **Sterkobilin** färbt Stuhl braun.",
          difficulty: 3,
          tags: ["bilirubin", "hämoglobinabbau", "ikterus"],
        },
      ],

      merksätze: [
        "**GI-Anatomie & Wandschichten:** GIT: Mund → Speiseröhre → Magen → Dünndarm (Duodenum, Jejunum, Ileum) → Dickdarm (Colon) → Rektum → Anus. Wandschichten: Mukosa (Epithel, Lamina propria, Muscularis mucosae) → Submukosa → Muscularis propria (Längs + Zirkular) → Serosa/Adventitia. Plexus myentericus (Auerbach, zwischen Muskelschichten) + Plexus submucosus (Meissner).",
        "**Magen-Sekretion:** Belegzellen (Parietalzellen): HCl (H⁺/K⁺-ATPase, Protonenpumpe) + Intrinsic Factor (Vit-B₁₂-Resorption im Ileum). Hauptzellen: Pepsinogen → Pepsin (Protease, durch HCl aktiviert). Nebenzellen: Mukus + HCO₃⁻ (Schutz). G-Zellen (Antrum): Gastrin → HCl ↑. D-Zellen: Somatostatin → HCl ↓ (neg. RK). PPI (Omeprazol): H⁺/K⁺-ATPase ↓.",
        "**Pankreas-Enzyme:** Exokrines Pankreas: Acinuszellen → Pankreassaft (CCK-stimuliert, ~1,5 L/Tag, pH ~8 [HCO₃⁻]). Enzyme: Amylase (Stärke → Dextrine → Maltose), Trypsinogen → Trypsin (Enterokinase/Enteropeptidase aktiviert), Chymotrypsinogen → Chymotrypsin, Elastase, Phospholipase A₂, Lipase (Fette → Fettsäuren + Glycerol, Gallensalze benötigt). Proteine nur als inaktive Proenzyme (Zymogene) gespeichert.",
        "**Galle & Gallensalze:** Leber produziert ~500–1000 mL Galle/Tag. Primäre Gallensalze: Cholat, Chenodesoxycholat (aus Cholesterin). Bakterien: Deoxycholat, Litocholat (sekundär). Gallensalze: Mizellen-Bildung → Fettemulgierung → Fett-Resorption. Enterohepatischer Kreislauf: Ileum → Resorption → Pfortader → Leber (~95% recycelt). Cholestase: Gallensalze ↑ im Blut → Pruritus.",
        "**Dünndarm-Resorption:** Oberflächenvergrößerung: Kerckring-Falten + Villi + Mikrovilli = ~200 m². Glukose: SGLT1 (Na⁺-gekoppelt, sekundär-aktiv). Fructose: GLUT5 (passiv). Aminosäuren: Di-/Tripeptid-Transporter + Aminosäure-Carrier. Fette: Mizellen → Diffusion → Chylomikronen → Lymphe (nicht Pfortader!). Vit. B₁₂ + IF → Ileum. Eisen (Fe²⁺, DMT1, Duodenum).",
        "**Leberfunktionen:** Doppelte Blutversorgung: A. hepatica (~25%, O₂) + V. portae (~75%, Nährstoffe aus GIT). Funktionen: Proteinsynthese (Albumin, Gerinnungsfaktoren [I, II, V, VII, IX, X, XI, XII], CRP). Biotransformation/Entgiftung (Phase I: CYP450-Oxidation; Phase II: Glukuronidierung, Sulfatierung). Harnstoffzyklus (NH₃ → Harnstoff). Galleproduktion. Glykogen-Speicher. Leberzirrhose → Albumin ↓, Gerinnungsfaktoren ↓, Portale Hypertension.",
        "**Bilirubin-Stoffwechsel:** Hb-Abbau (Milz) → Biliverdin → Bilirubin unkonjugiert (lipophil, albumin-gebunden) → Leber (UGT1A1: Glukuronidierung → konjugiert, wasserlöslich) → Galle → Darm → Urobilinogen → Sterkobilin (Stuhl braun) + Urobilin (Urin gelb). Ikterus: Prähepatisch (Hämolyse, unkj ↑), Hepatisch (Leberschaden, beide ↑), Posthepatisch (Cholestase, konj ↑, heller Stuhl, dunkler Urin).",
        "**IBD (Chronisch-entzündliche Darmerkrankungen):** Morbus Crohn: Alle GIT-Abschnitte (v. a. terminales Ileum), diskontinuierlich (Skip Lesions), transmural → Fisteln, Stenosen, Abszesse. Mesenteriale Lymphadenopathie, Pflastersteinrelief. Colitis ulcerosa: Nur Kolon, kontinuierlich von Rektum aufsteigend, nur Mukosa → Blut-Schleimabgang. Erhöhtes Kolorektal-Ca-Risiko. Therapie: Aminosalicylate (CU), Immunsuppressiva, Biologika (Anti-TNF, Anti-Integrin).",
        "**Pankreatitis:** Akut: Aktivierung von Pankreasenzymen im Pankreas selbst → Selbstverdauung → Entzündung (Lipase ↑ im Blut, Amylase ↑). Ursachen: Gallensteinen (häufigste) + Alkohol (2-häufigste). Ranson-Kriterien (Schwere). Therapie: Nulldiät, Flüssigkeit, Analgesie. Chronische Pankreatitis: Fibrose → exokrine Insuffizienz (Malabsorption, Steatorrhö) + endokrine Insuffizienz (Diabetes). Hauptursache: Alkohol.",
        "**Magen-Darm-Hormonsystem:** Gastrin (G-Zellen Antrum): HCl ↑. Sekretin (S-Zellen Duodenum, bei saurem Chymus): HCO₃⁻ aus Pankreas ↑, HCl ↓. CCK (I-Zellen Duodenum/Jejunum, bei Fett + Protein): Pankreasenzyme ↑, Gallenblase kontrahiert, Pylorus-Sphinkter ↑. GIP (Duodenum/Jejunum): Insulin-Sekretion ↑ (Inkretineffekt, fettabhängig). GLP-1 (L-Zellen Ileum/Colon): Insulin ↑ (Inkretineffekt, glucoseabhängig), Glukagon ↓, Magenentleerung ↓, Sättigung ↑. GLP-1-Analoga (Semaglutid): Diabetes + Adipositas-Therapie.",
      ],
      klinischerBezug:
        "Morbus Crohn und Colitis ulcerosa: chronische Erkrankungen mit erheblicher Morbidität. Morbus Crohn: Anti-TNF-α (Infliximab, Adalimumab) und Vedolizumab (Anti-Integrin) effektiv bei refraktären Fällen. Colitis ulcerosa: erhöhtes Kolorektalkarzinom-Risiko (Surveillanz-Koloskopie). Leberzirrhose: Endzustand vieler Lebererkrankungen (alkoholisch, viral [Hepatitis B/C], NASH). Komplikationen: Portale Hypertension (Ösophagusvarizen → Blutungsrisiko), Aszites, hepatische Enzephalopathie, hepatozelluläres Karzinom. MELD-Score für Transplantationsindikation. Pankreatitis: Schwere akute Form (nekrotisierende) → Intensivstation (Sepsis, MOV). Helicobacter pylori: Ulcus-Ursache (90% Ulcus duodeni, 70% Ulcus ventriculi); Eradikation mit Triple-Therapie (PPI + Clarithromycin + Amoxicillin). Kolorektales Karzinom: zweithäufigste krebsbedingte Todesursache; Prävention durch Vorsorge-Koloskopie ab 50 J.",
    },
    {
      id: "bio-3-10",
      title: "Harnsystem",
      imageUrl: "/images/wiki-nephron-de.svg",
      imageCaption: "Abb.: Aufbau der Niere mit Rinde, Mark und Nierenbecken (OpenStax, CC BY 4.0)",
      diagram: "nephron",
      stichworte: [
        "Niere",
        "Nephron",
        "Filtration",
        "Rückresorption",
        "ADH",
        "Aldosteron",
        "Gegenstromprinzip",
        "Harnleiter",
      ],
      content: `Die Niere ist weit mehr als ein Ausscheidungsorgan — sie reguliert Wasserhaushalt, Elektrolyte, Säure-Basen-Gleichgewicht und Blutdruck. Wer Nierenphysiologie versteht, versteht auch, warum Diuretika wirken, warum Diabetiker Proteinurie entwickeln und warum ACE-Hemmer Husten verursachen.

{{IMAGE}}

## Das Nephron — funktionelle Einheit der Niere

Jede Niere enthält ca. **1 Million Nephrone**. Ein einzelnes Nephron besteht aus:

1. **Nierenkörperchen (Glomerulus + Bowman-Kapsel)** — hier wird filtriert
2. **Proximaler Tubulus** — der Hauptrückresorber (~65 % des Filtrats)
3. **Henle-Schleife** (absteigend + aufsteigend) — erzeugt den osmotischen Gradienten
4. **Distaler Tubulus** — Feinregulation unter Hormonkontrolle
5. **Sammelrohr** — finale Harnkonzentrierung (ADH-abhängig)

**Zwei Nephrontypen:** Kortikale Nephrone (~85 %, kurze Henle-Schleife) und juxtamedulläre Nephrone (~15 %, lange Schleife bis tief ins Mark — entscheidend für die Harnkonzentrierung).

> **Merke:** Das Nephron ist die funktionelle Einheit. Jede Niere hat ~1 Mio. Nephrone. Nur juxtamedulläre Nephrone reichen tief genug ins Mark, um den vollen osmotischen Gradienten (bis 1200 mOsm/L) aufzubauen.

---

{{DIAGRAM}}

## Glomeruläre Filtration — der erste Schritt

Im Glomerulus wird Blutplasma durch eine dreischichtige **Filtrationsbarriere** gepresst:

1. **Fenestriertes Endothel** (Poren ~70 nm — hält Blutzellen zurück)
2. **Glomeruläre Basalmembran (GBM)** — negativ geladen, blockiert große und negativ geladene Proteine
3. **Podozyten** (Schlitzmembran zwischen Fußfortsätzen) — feinster Filter

**Was passiert wird filtriert?** Alles unter ~70 kDa: Wasser, Elektrolyte, Glukose, Aminosäuren, Harnstoff, Kreatinin. **Was bleibt zurück?** Albumin (66 kDa — gerade noch an der Grenze), größere Proteine, Blutzellen.

**GFR (glomeruläre Filtrationsrate):** ~120 mL/min = ~180 L Primärharn pro Tag. Davon werden **über 99 % rückresorbiert** — es entstehen nur ~1,5 L Endharn. Dieses Verhältnis ist zentral: Die Niere filtert massiv und resorbiert selektiv, statt gezielt auszuscheiden.

**Primärharn vs. Endharn:** Primärharn (Ultrafiltrat) ist praktisch protein- und zellfreies Plasma. Endharn ist das Endprodukt nach Rückresorption und Sekretion — konzentriert, mit Abfallstoffen angereichert.

> **Merke:** Filtriert wird alles unter ~70 kDa — Albumin (66 kDa) ist der Grenzgänger. Erscheint Albumin im Urin (Proteinurie), ist die Filtrationsbarriere beschädigt (z. B. Glomerulonephritis, diabetische Nephropathie).

---

## Tubuläre Rückresorption — Segment für Segment

Nach der Filtration durchläuft der Primärharn die Tubulusabschnitte. Jedes Segment hat spezialisierte Transporter:

| Segment | Resorption | Schlüsseltransporter | Besonderheit |
|---|---|---|---|
| **Proximaler Tubulus** | **~65 %** (Na⁺, H₂O, Glukose 100 %, AS 100 %, HCO₃⁻ ~80 %) | **SGLT2** (Glukose + Na⁺), NHE3 (Na⁺/H⁺), AQP1 | Größter Rückresorber, obligatorisch |
| **Henle absteigend** | H₂O raus | Aquaporin-1 | NaCl-impermeabel |
| **Henle aufsteigend** | NaCl raus | **NKCC2** (Na⁺/K⁺/2Cl⁻) | **Wasserundurchlässig** — Schlüssel zum Gradienten |
| **Distaler Tubulus** | ~5–10 % NaCl | NCC (Thiazid-sensitiv) | Ca²⁺-Resorption (PTH-abhängig) |
| **Sammelrohr** | ~1–4 % H₂O, Na⁺ | **AQP2** (ADH), **ENaC** (Aldosteron) | Hormonell regulierte Feinsteuerung |

**Wichtig — Filtration vs. Sekretion:** Filtration geschieht im Glomerulus (passiv, druckgetrieben). **Sekretion** ist das Gegenteil der Resorption: Substanzen werden aktiv aus dem Blut in den Tubulus transportiert (z. B. K⁺, H⁺, Medikamente, Kreatinin im proximalen Tubulus). Beide zusammen bestimmen die renale Ausscheidung.

**Glukose-Nierenschwelle (~180 mg/dL):** Normalerweise resorbiert SGLT2 im proximalen Tubulus 100 % der filtrierten Glukose. Steigt der Blutzucker über ~180 mg/dL, sind die Transporter gesättigt → **Glukosurie** (Glukose im Urin). **SGLT2-Hemmer** (Empagliflozin, Dapagliflozin) blockieren diesen Transporter gezielt → Glukose wird ausgeschieden → Blutzucker sinkt. Einsatz bei Diabetes Typ 2, aber auch kardio- und nephroprotektiv.

> **Merke:** Proximaler Tubulus = 65 % von allem (SGLT2 für Glukose). GFR ≠ Urinmenge! GFR misst, wie viel filtriert wird (120 mL/min). Die Urinmenge hängt davon ab, wie viel rückresorbiert wird (reguliert durch ADH/Aldosteron).

---

## Gegenstromprinzip — wie die Niere Urin konzentriert

Das Gegenstromprinzip der Henle-Schleife erzeugt einen osmotischen Gradienten im Nierenmark (300 mOsm/L in der Rinde → bis **1200 mOsm/L** im inneren Mark). Ohne diesen Gradienten könnte die Niere keinen konzentrierten Urin produzieren.

**So funktioniert es:**

- **Absteigender Schenkel:** Wasserdurchlässig (AQP1), aber NaCl-impermeabel. Wasser diffundiert osmotisch ins hyperosmolare Interstitium → Tubulusflüssigkeit wird **hyperton** (konzentriert, bis ~1200 mOsm/L an der Schleifenspitze).

- **Aufsteigender Schenkel:** **Wasserundurchlässig** (keine Aquaporine!), aber pumpt aktiv NaCl raus (NKCC2-Transporter). Die Tubulusflüssigkeit wird **hypoton** (~100 mOsm/L), während das Mark immer salziger wird.

**Ergebnis:** Das Mark ist hyperosmolar — ein Gradient, den das Sammelrohr nutzt: Wenn ADH Aquaporin-2 einbaut, folgt Wasser dem Gradienten → konzentrierter Urin.

**Schleifendiuretika (Furosemid)** hemmen NKCC2 im aufsteigenden Schenkel → der osmotische Gradient wird zerstört → die Niere kann nicht mehr konzentrieren → massive Diurese. Deshalb sind sie die stärksten Diuretika.

> **Merke:** Absteigend = Wasser raus (konzentriert). Aufsteigend = NaCl raus, kein Wasser (verdünnt). Zusammen: osmotischer Gradient im Mark. Furosemid zerstört diesen Gradienten → stärkste Diurese.

---

## ADH und Aldosteron — hormonelle Feinsteuerung

**ADH (Antidiuretisches Hormon, Vasopressin)** — Hypophysenhinterlappen:

- **Trigger:** Osmolalität ↑ (>295 mOsm/kg, Hypothalamus-Osmorezeptoren) oder Volumen ↓ (Barorezeptoren)
- **Wirkung:** V₂-Rezeptor (Sammelrohr, basolateral) → cAMP ↑ → **Aquaporin-2-Insertion** in die luminale Membran → Wasser folgt dem medullären Gradienten → **konzentrierter Urin** (bis 1200 mOsm/L)
- **Ohne ADH:** AQP2 bleibt im Zytoplasma → Sammelrohr wasserundurchlässig → **verdünnter Urin** (~50 mOsm/L), Polyurie

**Diabetes insipidus** — die Krankheit des fehlenden ADH-Effekts:
- **Zentral:** ADH-Mangel (Hypophysenschaden) → Polyurie (>3 L/Tag), Polydipsie. Therapie: Desmopressin (synthetisches ADH)
- **Nephrogen:** V₂-Rezeptor-Defekt oder AQP2-Mutation → ADH wirkt nicht. Desmopressin hilft **nicht**

**SIADH** (Syndrom der inadäquaten ADH-Sekretion): ADH ↑ ohne Trigger → zu viel Wasser zurück → Verdünnungs-**Hyponatriämie** (nicht Hypernatriämie — häufiger Denkfehler!).

**Aldosteron** — Nebennierenrinde (Zona glomerulosa):

- **Trigger:** Angiotensin II, Hyperkaliämie
- **Wirkung am distalen Tubulus/Sammelrohr:** ENaC ↑ (Na⁺ rein) + ROMK ↑ (K⁺ raus) + Na⁺/K⁺-ATPase ↑ → **Na⁺- und H₂O-Retention**, K⁺- und H⁺-Ausscheidung
- **Hyperaldosteronismus (Conn-Syndrom):** Na⁺ ↑, K⁺ ↓, Hypertonie
- **Antagonist:** Spironolacton (blockiert Mineralokortikoid-Rezeptor)

> **Merke:** ADH = Wasserregulation (AQP2 im Sammelrohr). Aldosteron = Na⁺/K⁺-Regulation (ENaC/ROMK im distalen Tubulus). Beide zusammen bestimmen Urinvolumen und -zusammensetzung.

---

## RAAS — Blutdruckregulation über die Niere

Die **Renin-Angiotensin-Aldosteron-System (RAAS)**-Kaskade ist der wichtigste langfristige Blutdruckregulator:

1. **Blutdruck ↓** / Na⁺ ↓ / Sympathikus ↑ → juxtaglomeruläre Zellen (afferente Arteriole) setzen **Renin** frei
2. Renin spaltet **Angiotensinogen** (aus der Leber) → **Angiotensin I**
3. **ACE** (Angiotensin-Converting Enzyme, v. a. Lungenendothel) → **Angiotensin II**
4. Angiotensin II wirkt vierfach:
   - **Vasokonstriktion** (AT₁-Rezeptor) → Blutdruck ↑ sofort
   - **Aldosteron ↑** (NNR) → Na⁺/H₂O-Retention → Volumen ↑
   - **ADH ↑** (Hypophyse) → Wasser-Rückresorption ↑
   - **Durst ↑** (Hypothalamus) → Flüssigkeitsaufnahme ↑

**Therapeutische Angriffspunkte** (Antihypertensiva):

| Wirkstoffgruppe | Mechanismus | Besonderheit |
|---|---|---|
| **ACE-Hemmer** (Ramipril, Enalapril) | ACE ↓ → Ang II ↓ | Bradykinin ↑ → **Husten** (häufigste NW!) |
| **AT₁-Blocker** (Losartan, Valsartan) | Blockiert Ang-II-Rezeptor | Kein Bradykinin-Effekt → kein Husten |
| **Spironolacton** | Aldosteron-Antagonist | K⁺-sparend, bei Herzinsuffizienz |
| **Aliskiren** | Renin-Inhibitor | Selten eingesetzt |

> **Merke:** RAAS-Kaskade: Renin (Niere) → Ang I → ACE (Lunge) → **Ang II** → Vasokonstriktion + Aldosteron + ADH → Blutdruck ↑. ACE-Hemmer: Bradykinin ↑ → Husten. AT₁-Blocker: gleiche Wirkung, kein Husten.

---

## Ableitende Harnwege

Der fertige Urin verlässt die Niere über: **Nierenbecken (Pelvis renalis) → Harnleiter (Ureter) → Harnblase (Vesica urinaria) → Harnröhre (Urethra)**.

- **Ureter:** Drei physiologische Engstellen (Nierenbeckenabgang, Kreuzung A. iliaca, Blasenmündung) — häufigste Stellen für **Harnleitersteine**
- **Harnblase:** Ausgekleidet mit **Urothel** (Übergangsepithel mit Schirmzellen, dehnbar), Fassungsvermögen ~300–500 mL
- **Miktion:** M. detrusor vesicae (glatte Muskulatur, Parasympathikus) kontrahiert, innerer Sphinkter (glatt, unwillkürlich) und äußerer Sphinkter (quergestreift, willkürlich) relaxieren

---

## Klinische Integration

**Proteinurie:** Albumin im Urin zeigt Filterbarriere-Schaden an (Frühzeichen diabetischer Nephropathie). Screening: Urin-Albumin-Kreatinin-Quotient (UACR).

**GFR-Abfall bei Niereninsuffizienz:** CKD-Stadien I–V nach GFR. Stadium V (GFR <15 mL/min) = terminale Niereninsuffizienz → Dialyse oder Transplantation. Häufigste Ursache: diabetische Nephropathie.

**Diuretika-Übersicht:**
- **Schleifendiuretika** (Furosemid): NKCC2-Hemmung → stärkste Wirkung
- **Thiazide** (HCT): NCC-Hemmung im distalen Tubulus → moderate Wirkung
- **K⁺-sparende** (Spironolacton, Amilorid): ENaC/Aldosteron-Blockade → schwach, aber K⁺-schonend

**Säure-Basen-Regulation:** Die Niere reguliert den pH über drei Mechanismen: HCO₃⁻-Rückresorption (PT, NHE3 + Carboanhydrase), H⁺-Sekretion (H⁺-ATPase) und Ammonium-Bildung (NH₄⁺ aus Glutamin im PT).

> **Merke:** Kreatinin wird filtriert und teilweise sezerniert, aber **nicht resorbiert** — deshalb eignet es sich als GFR-Marker (Kreatinin-Clearance ≈ GFR).`,
      lernziele: [
        "Die vier Funktionen der Niere (Wasser-/Elektrolythaushalt, Säure-Basen-Haushalt, Blutdruckregulation, Exkretion) benennen.",
        "Die Filtrations- und Rückresorptionsvorgänge der Nephron-Abschnitte (GFR ~120 mL/min, SGLT2 im proximalen Tubulus, Gegenstromprinzip der Henle-Schleife) erklären.",
        "Die Nierenschwelle für Glukose (~180 mg/dL) und die klinische Bedeutung der Glukosurie bei Diabetes mellitus darstellen.",
        "Den ADH-Mechanismus (V₂-Rezeptor → Aquaporin-2 → Harnkonzentrierung) und den Diabetes insipidus (zentral vs. nephrogen) unterscheiden.",
        "Die RAAS-Kaskade (Renin → Angiotensin II → Aldosteron/ADH) und die Angriffspunkte von ACE-Hemmern, AT₁-Blockern und Aldosteron-Antagonisten erläutern.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über das Gegenstromprinzip in der Henle-Schleife ist korrekt?",
        options: [
          {
            id: "a",
            text: "Der absteigende Schenkel ist wasserundurchlässig und resorbiert aktiv NaCl.",
          },
          {
            id: "b",
            text: "Der aufsteigende Schenkel ist wasserdurchlässig und gibt Wasser osmotisch ab.",
          },
          {
            id: "c",
            text: "Der absteigende Schenkel ist wasserdurchlässig (Wasser folgt osmotisch → Harn konzentriert), der aufsteigende ist wasserundurchlässig und resorbiert NaCl aktiv (NKCC2) → Harn verdünnt, Interstitium hyperosmolar → kortikopapillärer Gradient.",
          },
          {
            id: "d",
            text: "Beide Schenkel resorbieren gleichzeitig Wasser und NaCl in gleichen Mengen.",
          },
          { id: "e", text: "Das Gegenstromprinzip findet im proximalen Tubulus statt." },
        ],
        correctOptionId: "c",
        explanation:
          "Absteigender Schenkel: wasserdurchlässig (Aquaporin-1), NaCl-undurchlässig → Wasser folgt osmotischem Gradienten → Harn konzentriert. Aufsteigender Schenkel: wasserundurchlässig, NKCC2 resorbiert Na⁺/K⁺/2Cl⁻ aktiv → Harn verdünnt, Interstitium hyperosmolar. So entsteht der kortikopapilläre Gradient (300 → 1200 mOsm/kg). Schleifendiuretika (Furosemid) hemmen NKCC2.",
      },
      selfTest: [
        {
          question: "Welche Aussage über die glomeruläre Filtration ist korrekt?",
          options: [
            "Die GFR beträgt ~12 mL/min und produziert ~18 L Primärharn pro Tag.",
            "Die GFR beträgt ~120 mL/min und produziert ~180 L Primärharn pro Tag. Die Filtrationsbarriere besteht aus fenestriertem Endothel, glomerulärer Basalmembran und Podozyten.",
            "Proteine mit Molekulargewicht >69 kDa passieren die Filtrationsbarriere problemlos.",
            "Kreatinin wird filtriert und vollständig rückresorbiert.",
            "Bei Glomerulonephritis ist die Filtrationsbarriere intakt.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **GFR** (glomeruläre Filtrationsrate):\n- ~**120 mL/min** (~7,2 L/h, ~**180 L/Tag** Primärharn)\n- Davon ~1,5 L/Tag Urin (99% resorbiert!)\n\n**Filtrationsbarriere (3 Schichten):**\n1. **Fenestriertes Endothel** (Poren ~70 nm)\n2. **Glomeruläre Basalmembran** (negativ geladen, blockiert große/negative Proteine)\n3. **Podozyten** (Fußfortsätze, Schlitzmembran)\n\n**Filtrat:** Plasmaultrafiltrat (ohne Zellen, fast ohne Proteine <69 kDa).\n\n**Falsch (A):** GFR ~120 mL/min (nicht 12), ~180 L/Tag (nicht 18).\n\n**Falsch (C):** Proteine >69 kDa werden **nicht** filtriert (zu groß). Normalerweise <0,1 g/Tag Protein im Urin.\n\n**Falsch (D):** Kreatinin wird filtriert, aber **nicht resorbiert** (teilweise sezerniert) → GFR-Marker (Kreatinin-Clearance).\n\n**Falsch (E):** Bei Glomerulonephritis ist die Barriere **geschädigt** → Proteinurie, Hämaturie.",
          difficulty: 1,
          tags: ["glomeruläre filtration", "gfr", "glomerulus"],
        },
        {
          question: "Welche Aussage über den proximalen Tubulus ist korrekt?",
          options: [
            "Der proximale Tubulus resorbiert nur 10% des Filtrats.",
            "Im proximalen Tubulus werden ~65% des filtrierten Na⁺, Glukose (100% via SGLT2) und Aminosäuren (100%) resorbiert. Wasser folgt osmotisch über Aquaporin-1.",
            "Glukose wird im proximalen Tubulus aktiv sezerniert.",
            "Die Nierenschwelle für Glukose beträgt ~50 mg/dL.",
            "SGLT2-Hemmer fördern die Glukose-Rückresorption.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Proximaler Tubulus** (größter Rückresorber, ~65%):\n\n**Substanzen:**\n- **Na⁺:** Sekundär-aktiv (SGLT2 [mit Glukose], NHE3 [Na⁺/H⁺-Austauscher])\n- **Glukose:** **100% Rückresorption** (normal!) via **SGLT2** (luminal, mit Na⁺) → GLUT2 (basolateral) → Blut\n- **Aminosäuren:** **100% Rückresorption** (Na⁺-gekoppelt)\n- **H₂O:** Osmose (folgt Na⁺), **Aquaporin-1** (konstitutiv, immer offen)\n- **HCO₃⁻:** ~80–90% (pH-Regulation)\n\n**Falsch (A):** Proximaler Tubulus resorbiert ~**65%** (nicht 10%) des Filtrats.\n\n**Falsch (C):** Glukose wird **resorbiert** (100%, nicht sezerniert). Bei Blutzucker <180 mg/dL → 100% Rückresorption, >180 mg/dL → Glukosurie (Diabetes).\n\n**Falsch (D):** **Nierenschwelle** für Glukose: ~**180 mg/dL** (nicht 50). Darüber → SGLT2 gesättigt → Glukosurie.\n\n**Falsch (E):** **SGLT2-Hemmer** (Empagliflozin, Dapagliflozin) **blockieren** SGLT2 → Glukose-Rückresorption ↓ → Glukosurie → Blutzucker ↓ (Diabetes-Therapie).",
          difficulty: 2,
          tags: ["proximaler tubulus", "reabsorption", "natrium"],
        },
        {
          question: "Welche Aussage über das Gegenstromprinzip in der Henle-Schleife ist korrekt?",
          options: [
            "Der absteigende Schenkel ist wasserdicht und resorbiert NaCl.",
            "Der absteigende Schenkel ist wasserdurchlässig (Aquaporin-1), Wasser diffundiert raus → Filtrat wird hyperton (~1.200 mOsm/L). Der aufsteigende Schenkel resorbiert NaCl (NKCC2), ist wasserdicht → Filtrat wird hypoton (~100 mOsm/L). Dies erzeugt einen osmotischen Gradienten (Rinde 300 → Mark 1.200 mOsm/L).",
            "Der aufsteigende Schenkel ist wasserdurchlässig und resorbiert Wasser.",
            "Das Gegenstromprinzip ist für die Glukose-Rückresorption verantwortlich.",
            "Die Henle-Schleife resorbiert 80% des Filtrats.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Gegenstromprinzip** (Henle-Schleife, ~20% Rückresorption):\n\n**Absteigender Schenkel:**\n- **Wasserdurchlässig** (Aquaporin-1)\n- **NaCl-undurchlässig**\n- **Wasser** diffundiert raus (osmotischer Gradient) → Filtrat wird **hyperton** (konzentriert, bis ~1.200 mOsm/L im Mark)\n\n**Aufsteigender Schenkel:**\n- **Wasserundurchlässig** (keine Aquaporine!)\n- **NaCl-Rückresorption** (Na⁺/K⁺/2Cl⁻-Symporter, **NKCC2**)\n- **NaCl** diffundiert raus → Filtrat wird **hypoton** (verdünnt, ~100 mOsm/L)\n\n**Ergebnis:** Osmotischer Gradient (Rinde ~300 mOsm/L → Mark ~1.200 mOsm/L) → ermöglicht **Harnkonzentrierung** im Sammelrohr (ADH-abhängig).\n\n**Falsch (A):** Absteigend = **wasserdurchlässig** (nicht wasserdicht), resorbiert **kein NaCl**.\n\n**Falsch (C):** Aufsteigend = **wasserundurchlässig** (nicht wasserdurchlässig), resorbiert **NaCl** (nicht Wasser).\n\n**Falsch (D):** Gegenstromprinzip = **Harnkonzentrierung** (osmotischer Gradient), nicht Glukose-Rückresorption (proximaler Tubulus, SGLT2).\n\n**Falsch (E):** Henle-Schleife: ~20% (nicht 80%). **Proximaler Tubulus:** ~65%.",
          difficulty: 2,
          tags: ["henle-schleife", "gegenstromprinzip", "harnkonzentrierung"],
        },
        {
          question: "Welche Aussage über ADH (Antidiuretisches Hormon) ist korrekt?",
          options: [
            "ADH wird bei niedriger Osmolalität und hohem Blutvolumen freigesetzt.",
            "ADH bindet an V₂-Rezeptoren im Sammelrohr, führt zur Insertion von Aquaporin-2 in die Membran und erhöht die Wasserdurchlässigkeit → konzentrierter Harn (~1.200 mOsm/L). Bei Diabetes insipidus (ADH-Mangel) → Polyurie.",
            "ADH vermindert die Wasser-Rückresorption und führt zu konzentriertem Harn.",
            "Aquaporin-1 im proximalen Tubulus ist ADH-gesteuert.",
            "SIADH (Syndrom inadäquater ADH-Sekretion) führt zu Hypernatriämie.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **ADH** (Vasopressin, Hypophysenhinterlappen):\n\n**Trigger:**\n- **Osmolalität ↑** (>295 mOsm/kg, Hypothalamus-Osmorezeptoren)\n- **Volumen ↓** (Hypovolämie, Barorezeptoren)\n\n**Wirkung (Sammelrohr):**\n1. ADH → **V₂-Rezeptor** (basolateral)\n2. cAMP ↑ → **Aquaporin-2-Insertion** (luminal)\n3. **Wasserdurchlässigkeit ↑** → Wasser folgt osmotischem Gradienten (Mark ~1.200 mOsm/L)\n4. **Konzentrierter Harn** (~1.200 mOsm/L, Volumen ↓)\n\n**Ohne ADH:** Aquaporin-2 im Zytoplasma → wasserundurchlässig → **verdünnter Harn** (~50 mOsm/L, Polyurie).\n\n**Diabetes insipidus:**\n- **Zentral:** ADH-Mangel (Hypophyse) → Polyurie (>3 L/Tag), Polydipsie\n- **Nephrogen:** ADH-Resistenz (V₂-Rezeptor-Defekt) → Polyurie\n- **Therapie:** Desmopressin (synthetisches ADH, zentral)\n\n**Falsch (A):** ADH wird bei **hoher Osmolalität** (nicht niedriger) und **niedrigem Volumen** (nicht hohem) freigesetzt.\n\n**Falsch (C):** ADH **erhöht** (nicht vermindert) Wasser-Rückresorption.\n\n**Falsch (D):** **Aquaporin-1** (proximal, Henle absteigend) ist **konstitutiv** (immer offen, nicht ADH-gesteuert). **Aquaporin-2** (Sammelrohr) ist ADH-gesteuert.\n\n**Falsch (E):** **SIADH** → ADH ↑ → H₂O-Retention → **Hyponatriämie** (nicht Hypernatriämie, Verdünnungseffekt).",
          difficulty: 2,
          tags: ["adh", "antidiuretisches hormon", "sammelrohr"],
        },
        {
          question:
            "Welche Aussage über das Renin-Angiotensin-Aldosteron-System (RAAS) ist korrekt?",
          options: [
            "Renin wird in der Leber produziert und spaltet Angiotensinogen.",
            "Angiotensin II führt zu Vasodilatation und senkt den Blutdruck.",
            "Renin (juxtaglomeruläre Zellen, Niere) spaltet Angiotensinogen → Angiotensin I. ACE (Lunge) wandelt es zu Angiotensin II um, das Vasokonstriktion, Aldosteron-Freisetzung (Na⁺-Retention) und ADH-Freisetzung bewirkt → Blutdruck steigt.",
            "ACE-Hemmer (z. B. Ramipril) verstärken die Angiotensin-II-Bildung.",
            "Aldosteron fördert die K⁺-Rückresorption und Na⁺-Sekretion.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **RAAS-Kaskade**:\n\n**Trigger:** Blutdruck ↓, Na⁺ ↓, Sympathikus ↑\n\n**Ablauf:**\n1. **Renin** (juxtaglomeruläre Zellen, Niere) → Angiotensinogen (Leber) → **Angiotensin I**\n2. **ACE** (Angiotensin-Converting-Enzyme, Lunge) → **Angiotensin II**\n3. **Angiotensin II** (potentester Vasokonstriktor):\n   - **Vasokonstriktion** (v. a. Vas efferens) → TPR ↑ → Blutdruck ↑\n   - **Aldosteron ↑** (Nebenniere) → distaler Tubulus: Na⁺-Rückresorption ↑ (ENaC), K⁺-Sekretion ↑ → H₂O ↑ → Volumen ↑ → Blutdruck ↑\n   - **ADH ↑** (Hypophyse) → Sammelrohr: H₂O-Rückresorption ↑\n   - **Durst ↑** (Hypothalamus)\n\n**Therapeutisch:**\n- **ACE-Hemmer** (Ramipril, Enalapril) → Angiotensin II ↓ → Vasodilatation, Aldosteron ↓ → Blutdruck ↓\n- **AT₁-Blocker** (Losartan, Valsartan) → blockiert Angiotensin-II-Rezeptor → Blutdruck ↓\n\n**Falsch (A):** **Renin** wird in **juxtaglomerulären Zellen** (Niere, nicht Leber) produziert. **Angiotensinogen** wird in der Leber produziert.\n\n**Falsch (B):** Angiotensin II → **Vasokonstriktion** (nicht Vasodilatation) → Blutdruck **↑** (nicht ↓).\n\n**Falsch (D):** **ACE-Hemmer** **blockieren** ACE → Angiotensin II ↓ (nicht ↑).\n\n**Falsch (E):** Aldosteron → **Na⁺-Rückresorption** (nicht Sekretion), **K⁺-Sekretion** (nicht Rückresorption) → Hyperaldosteronismus: Hypertonie + **Hypokaliämie**.",
          difficulty: 3,
          tags: ["raas", "renin", "aldosteron"],
        },
      ],
      merksätze: [
        "**Nephron-Anatomie:** Glomerulus (Filtrationsapparat) → Bowman-Kapsel → proximaler Tubulus (PT) → Henle-Schleife (absteigende + aufsteigende Schenkel) → distaler Tubulus (DT) → Sammelrohr (SD). GFR ~120 mL/min → ~180 L Primärharn/Tag → ~1,5 L Urin (99% resorbiert!). Filtrationsbarriere: fenestriertes Endothel + GBM (negativ geladen) + Podozyten (Schlitzmembran).",
        "**Tubuläre Resorption & Sekretion:** PT: 65% Na⁺/H₂O, 100% Glukose (SGLT2), 100% Aminosäuren, HCO₃⁻-Resorption (NHE3). Henle-Schleife: absteigende (H₂O, AQP1), aufsteigende (NaCl, NKCC2, kein H₂O → Gegenstromprinzip). DT: NaCl (NCCT, Thiazid-sensitive), K⁺-Sekretion, Ca²⁺-Resorption (PTH). Sammelrohr: H₂O (ADH/AQP2), Na⁺ (ENaC, Aldosteron), K⁺-Sekretion (ROMK). Kreatinin: filtriert + sezerniert → GFR-Marker.",
        "**Harnkonzentrierung (Gegenstromprinzip):** Absteigende Henle-Schleife: H₂O-Resorption (AQP1, osmotischer Gradient ↑). Aufsteigende Schleife: NaCl aktiv raus (NKCC2), H₂O-impermeabel → osmotischer Gradient im Mark (300–1200 mOsm/L). Sammelrohr: ADH → AQP2-Insertion → H₂O folgt osmotischem Gradienten → Harnkonzentrierung (bis ~1200 mOsm/L). SIADH: ADH ↑ → H₂O-Retention → Hyponatriämie. Diabetes insipidus: ADH-Mangel/Resistenz → Polyurie, verdünnter Urin.",
        "**RAAS & Blutdruckregulation:** Trigger: Blutdruck ↓, Na⁺ ↓, Sympathikus ↑ → Renin (JG-Zellen) → Angiotensinogen (Leber) → Angiotensin I → ACE (Lunge) → Angiotensin II → Vasokonstriktion + Aldosteron ↑ + ADH ↑ → Na⁺/H₂O-Retention → Blutdruck ↑. ACE-Hemmer (Ramipril): Ang II ↓ (+ Bradykinin ↑ → Husten-NW). AT₁-Blocker (Losartan): kein Bradykinin → kein Husten.",
        "**Akutes Nierenversagen (AKI):** Prärenal: Hypovolämie, Hypotonie → GFR ↓ (reversibel bei Volumenersatz). Renal: Glomerulonephritis, akute Tubulusnekrose (Ischämie, Nephrotoxine: Aminoglykoside, Kontrastmittel, NSAR). Postrenal: Obstruktion (Prostata, Urolithiasis). Labor: Kreatinin ↑, GFR ↓, Harnstoff ↑, Oligurie/Anurie. Oligo-/nicht-oliguarisch. Therapie: Ursache beseitigen, Volumen, ggf. Nierenersatztherapie (Dialyse).",
        "**Chronisches Nierenversagen (CKD):** Stadien I–V (GFR-basiert): V = terminale Niereninsuffizienz (GFR <15 mL/min → Dialyse/Transplantation). Ursachen: Diabetische Nephropathie (häufigste), Hypertensive Nephropathie, Glomerulonephritis. Folgen: Anämie (EPO ↓), renale Hypertonie, metabolische Azidose, Hyperkalzämie, renale Osteodystrophie (Vitamin D-Aktivierung ↓ → Ca²⁺ ↓ → PTH ↑ → Knochenresorption).",
        "**Glomerulonephritis:** Nephritisches Syndrom: Hämaturie, Proteinurie <3,5 g/Tag, Hypertonie, Ödem, Oligurie. Ursache: IgA-Nephropathie (häufigste GN, Berger-Erkrankung, nach Infekten), Post-Streptokokken-GN (Typ-III-HS), Goodpasture (Anti-GBM). Nephrotisches Syndrom: Proteinurie >3,5 g/Tag → Hypoalbuminämie → Ödeme, Hyperlipidämie, Lipidurle. Ursachen: Minimal-Change (Kinder, häufigste), membranöse GN (Erwachsene, Malignom).",
        "**Harnwegsinfektion (HWI):** Unkomplizierte HWI (Frauen, nur Blase = Zystitis): Dysurie, Pollakisurie, Hämaturie. Häufigster Erreger: E. coli (80%). Therapie: Nitrofurantoin, Fosfomycin, Trimethoprim. Komplizierte HWI (Männer, Pyelonephritis, anatomische Anomalien): Therapie: Fluorchinolone, Cephalosporine. Urosepsis: Antibiotika i.v. + Urinstauung beseitigen. Prophylaxe bei rezidivierender HWI: Cranberry, niedrigdosierte Antibiotika.",
        "**Säure-Basen-Regulation der Niere:** Niere reguliert pH über 3 Mechanismen: (1) HCO₃⁻-Rückresorption (PT, NHE3, Carboanhydrase). (2) H⁺-Sekretion (PT, DT: H⁺-ATPase, K⁺/H⁺-ATPase). (3) Ammonium-Bildung (NH₄⁺, Glutamin-Metabolismus im PT). Metabolische Azidose: HCO₃⁻ ↓ (Diarrhö, AKI). Metabolische Alkalose: HCO₃⁻ ↑ (Erbrechen, Aldosteron ↑). Respiratorische Azidose: CO₂ ↑ (COPD). Respiratorische Alkalose: CO₂ ↓ (Hyperventilation).",
      ],
      klinischerBezug:
        "Chronische Nierenerkrankung (CKD): betrifft ~10% der Weltbevölkerung; häufigste Ursachen: diabetische Nephropathie (Kimmelstiel-Wilson-Läsion) und hypertensive Nephropathie. Frühdiagnostik durch Urin-Albumin-Kreatinin-Quotient (UACR) und eGFR entscheidend. Dialyse (Hämodialyse 3×/Woche, Peritonealdialyse, CRRT auf Intensivstation) bei terminaler Niereninsuffizienz. Nierentransplantation = beste Therapie (5-Jahres-Überleben ~80%). Akutes Nierenversagen (AKI) auf Intensivstation: häufig durch Sepsis und Nephrotoxine (Kontrastmittel → Kontrastmittel-NW; Aminoglykoside → proximale Tubulus-Schädigung). Urolithiasis: Kalziumoxalat (häufigste, 75%), Harnsäure (bei Gicht, Hyperurikämie), Struvit (Harnwegsinfekte). Kolikanfall: lösbarend (NSAIDs, α-Blocker zur Steinpassage).",
    },
    {
      id: "bio-3-11",
      title: "Skelettsystem",
      imageUrl: "/images/wiki-skeleton-de.svg",
      imageCaption:
        "Abb.: Menschliches Skelett — Vorderansicht mit Bezeichnung der wichtigsten Knochen (Wikimedia Commons, Public Domain)",
      stichworte: [
        "Knochen",
        "Knorpel",
        "Gelenke",
        "Osteoblasten",
        "Osteoklasten",
        "Periost",
        "Ossifikation",
      ],
      content: `## Klinischer Einstieg

Eine 68-jährige Patientin stürzt beim Einkaufen und erleidet eine Schenkelhalsfraktur — obwohl sie nur aus dem Stand gefallen ist. Die Diagnose: **Osteoporose** mit massiv reduzierter Knochendichte. Warum brechen manche Knochen bei Bagatelltrauma? Die Antwort liegt im Zusammenspiel von Skelettanatomie, Knochenumbau und hormoneller Regulation.

Die Grundlagen zu Knochengewebe (Osteoblasten, Osteoklasten, RANKL/OPG), Knorpeltypen und Kollagen sind in **bio-2-02 (Binde- und Stützgewebe)** behandelt. Hier liegt der Fokus auf dem **Skelett als Organsystem**: Gliederung, Gelenktypen, Ossifikation und Wirbelsäule.

{{IMAGE}}

---

## Gliederung des Skeletts — Axial- und Appendikulärskelett

Das erwachsene Skelett umfasst **206 Knochen**, eingeteilt in zwei funktionelle Gruppen:

**Axialskelett** (80 Knochen — Körperachse, Schutz):
- **Schädel** (22 Knochen): Hirnschädel (Frontal-, Parietal-, Temporal-, Okzipitalknochen) + Gesichtsschädel (Maxilla, Mandibula, Nasenbein, Jochbein). Schädelnähte (Suturen) = Synarthrosen (unbeweglich, fibrös verbunden)
- **Wirbelsäule** (24 freie Wirbel + Sakrum + Steißbein): **7 HWK – 12 BWK – 5 LWK – 5 SWK (verschmolzen zum Sakrum) – 3–5 Steißwirbel**. Eselsbrücke: „Beim Frühstück um **7** isst man ein **12**-Uhr-Mittagessen um **5**"
- **Thorax** (25 Knochen): Sternum (Manubrium, Corpus, Processus xiphoideus) + 12 Rippenpaare (7 echte [direkt am Sternum], 3 falsche [indirekt über Rippenbogen], 2 freie [flottierende Rippen])

**Appendikulärskelett** (126 Knochen — Extremitäten + Gürtel):
- **Schultergürtel**: Clavicula (Schlüsselbein) + Scapula (Schulterblatt) — einzige knöcherne Verbindung zum Rumpf: Sternoclaviculargelenk
- **Obere Extremität**: Humerus → Radius + Ulna → Carpalknochen (8) → Metacarpalia (5) → Phalangen (14)
- **Beckengürtel**: Os coxae (Darmbein + Sitzbein + Schambein, verschmolzen) — verbunden durch Symphysis pubica (Faserknorpel) und Iliosakralgelenk
- **Untere Extremität**: Femur (längster Knochen) → Patella + Tibia + Fibula → Tarsalknochen (7, inkl. Talus + Calcaneus) → Metatarsalia (5) → Phalangen (14)

> **Merke:** **Axialskelett** = Schädel + Wirbelsäule + Thorax (Schutz von Gehirn, Rückenmark, Herz/Lunge). **Appendikulärskelett** = Extremitäten + Gürtel (Bewegung). Wirbelsäulenformel: **7-12-5-5-(3–5)**.

![Knochen-Querschnitt — Kompakta, Spongiosa und Markhöhle](/images/wiki-bone-crosssection-de.svg)

---

## Gelenktypen — Freiheitsgrade und Beispiele

Gelenke verbinden Knochen und bestimmen das Bewegungsausmaß. Grundunterscheidung: **Synarthrosen** (unecht, kein Gelenkspalt — Schädelnähte, Symphyse) vs. **Diarthrosen** (echt, mit Gelenkspalt, Kapsel und Synovia).

Die wichtigsten Diarthrosen-Formen:

| Gelenktyp | Achsen | Bewegung | Beispiel |
|---|---|---|---|
| **Kugelgelenk** | 3 (sagittal, frontal, vertikal) | Flexion/Extension, Ab-/Adduktion, Rotation | **Schulter** (beweglichstes), **Hüfte** |
| **Scharniergelenk** | 1 (transversal) | Flexion/Extension | **Ellenbogen** (Humeroulnargelenk), Fingergelenke (PIP, DIP) |
| **Sattelgelenk** | 2 | Flexion/Extension, Ab-/Adduktion (+ Opposition) | **Daumensattelgelenk** (CMC I) — ermöglicht Greifbewegung |
| **Eigelenk** (Ellipsoidgelenk) | 2 | Flexion/Extension, Ab-/Adduktion | **Handgelenk** (Radiokarpalgelenk) |
| **Drehgelenk** (Rad-/Zapfengelenk) | 1 (Längsachse) | Rotation | **Atlas-Axis** (Kopfdrehung), proximales Radioulnargelenk (Pronation/Supination) |
| **Amphiarthrose** (straffes Gelenk) | minimal | Federung, kaum Bewegung | **Iliosakralgelenk**, Intertarsalgelenke |

**Gelenkaufbau einer Diarthrose:**
- **Gelenkknorpel** (hyalin) auf den Gelenkflächen — druckverteilend, reibungsarm
- **Gelenkkapsel**: äußere Membrana fibrosa (Stabilität) + innere **Membrana synovialis** (produziert Synovia)
- **Synovia** (Gelenkflüssigkeit): Hyaluronsäure + Gleitmittel → Schmierung + Ernährung des avaskulären Knorpels
- **Bänder** (Ligamente): Knochen-Knochen-Verbindung, Stabilisierung. Nicht verwechseln mit **Sehnen** (Muskel-Knochen)!

> **Merke:** Kugelgelenk = 3 Achsen (Schulter, Hüfte). Scharniergelenk = 1 Achse (Ellenbogen). Sattelgelenk = 2 Achsen (Daumen — Greifhand des Menschen!). **Synovia** ernährt den avaskulären Gelenkknorpel durch Diffusion.

---

## Ossifikation — zwei Wege zum Knochen

Knochen entsteht auf zwei grundverschiedenen Wegen, das Endprodukt ist aber identisch: **Lamellenknochen**.

**Desmale (direkte) Ossifikation:**
Mesenchymale Stammzellen differenzieren direkt zu Osteoblasten → Osteoid-Synthese → Mineralisation. Kein Knorpelzwischenstadium. Betrifft: **flache Knochen** — Schädelknochen (Frontal-, Parietalknochen), Clavicula, Teile der Mandibula. Beim Neugeborenen sind die Schädelnähte noch bindegewebig (Fontanellen) — sie schließen sich im 1.–2. Lebensjahr.

**Chondrale (indirekte, enchondrale) Ossifikation:**
Ein hyalines **Knorpelmodell** wird als Platzhalter gebildet und dann schrittweise durch Knochen ersetzt. Ablauf:
1. Chondrozyten hypertrophieren (vergrößern sich) im Zentrum des Knorpelmodells
2. Knorpelmatrix kalzifiziert → Chondrozyten sterben ab (Apoptose)
3. Blutgefäße wachsen ein → Osteoblasten wandern entlang der Gefäße ein
4. Knochen ersetzt den Knorpel von innen nach außen

Betrifft: **Röhrenknochen** (Femur, Tibia, Humerus), Rippen, Wirbelkörper — also den Großteil des Skeletts.

**Epiphysenfuge (Wachstumsfuge):**
Bei Kindern und Jugendlichen liegt zwischen Epi- und Diaphyse die **Epiphysenfuge** — eine Zone aus proliferierenden Chondrozyten, die für das **Längenwachstum** verantwortlich ist. Nach Abschluss des Wachstums verknöchert die Fuge (Epiphysenschluss, ~16–20 J.). Klinisch: Wachstumshormon (GH/STH) stimuliert die Epiphysenfuge → bei GH-Überschuss vor Schluss: **Gigantismus**; nach Schluss: **Akromegalie** (Vergrößerung von Akren, Kiefer, Zunge).

> **Merke:** **Desmal** = direkt, ohne Knorpel (Schädeldach, Clavicula). **Chondral** = über Knorpelmodell (Röhrenknochen, Rippen). Die **Epiphysenfuge** ermöglicht Längenwachstum bis zum Epiphysenschluss (~16–20 J.).

---

## Knochenumbau und Remodeling

Das Skelett wird lebenslang umgebaut — jährlich werden ~10 % der Knochenmasse erneuert. Für Zelltypen und RANKL/OPG-Regulation → siehe **bio-2-02**. Hier die klinisch wichtigsten Aspekte:

**Wolff'sches Gesetz:** Knochen passt seine Struktur an die mechanische Belastung an — Trabekel richten sich entlang der Hauptkraftlinien aus. Immobilisation → Knochenabbau ↑ (Astronauten verlieren ~1–2 % Knochenmasse/Monat in der Schwerelosigkeit).

**Ca²⁺-Regulation** (Normalwert: 2,2–2,6 mmol/L):
- **PTH** (Nebenschilddrüse, bei Ca²⁺ ↓): Osteoklasten ↑ → Ca²⁺-Freisetzung; Vitamin-D-Aktivierung (25-OH → 1,25-OH₂D₃ in der Niere); renale Ca²⁺-Rückresorption ↑
- **Calcitonin** (C-Zellen, bei Ca²⁺ ↑): Osteoklasten ↓ → Ca²⁺ ↓ (klinisch weniger relevant)
- **Vitamin D** (Calcitriol): Darm-Ca²⁺-Absorption ↑ (via Calbindin)

**Klinisch:** Rachitis (Kinder) / Osteomalazie (Erwachsene) = Vitamin-D-Mangel → gestörte Mineralisation → weiche Knochen. Osteogenesis imperfecta = Kollagen-I-Defekt → brüchige Knochen, blaue Skleren.

> **Merke:** **PTH ↑ Ca²⁺** (Knochenabbau ↑, Vitamin D ↑, renale Rückresorption ↑). **Calcitonin ↓ Ca²⁺**. Bewegung stärkt Knochen (Wolff'sches Gesetz), Immobilisation schwächt sie.

---

## Wirbelsäule — Krümmungen und Bandscheiben

Die Wirbelsäule ist keine gerade Säule, sondern zeigt im Sagittalprofil **vier physiologische Krümmungen**, die wie ein doppeltes S Stöße abfedern:

- **Halslordose** (HWS, konvex nach vorn) — ermöglicht aufrechte Kopfhaltung
- **Brustkyphose** (BWS, konvex nach hinten) — Raum für Herz und Lunge
- **Lendenlordose** (LWS, konvex nach vorn) — trägt das Körpergewicht
- **Sakralkyphose** (Sakrum, fixiert)

**Pathologische Abweichungen:**
- **Hyperkyphose** (verstärkte BWS-Kyphose): Rundrücken, häufig bei Osteoporose (Wirbelkörper-Sinterungsfrakturen → Größenverlust)
- **Hyperlordose** (verstärkte LWS-Lordose): Hohlkreuz, z. B. in Schwangerschaft
- **Skoliose**: seitliche Verkrümmung (>10° Cobb-Winkel) — häufigste Wirbelsäulendeformität bei Jugendlichen (idiopathisch, Mädchen häufiger)

**Bandscheibe (Discus intervertebralis):**
- **Nucleus pulposus** (gallertiger Kern): wasserreich, Proteoglykane → Druckverteilung
- **Anulus fibrosus** (Faserring): konzentrische Lamellen aus Faserknorpel (Kollagen I) → hält Nucleus in Position
- Häufigster **Bandscheibenvorfall** (Prolaps): L4/L5 und L5/S1 → Kompression des N. ischiadicus → **Ischialgie** (ausstrahlender Beinschmerz, Lasègue-Zeichen positiv)

> **Merke:** Lordose = nach vorn konvex (HWS, LWS). Kyphose = nach hinten konvex (BWS, Sakrum). **Skoliose** = seitlich. Bandscheibenvorfall am häufigsten lumbal (L4/L5, L5/S1) → Ischialgie.`,
      lernziele: [
        "Den Unterschied zwischen Osteoblasten (Knochenaufbau, Kollagen I, Mineralisierung) und Osteoklasten (Knochenabbau, H⁺, mehrkernig) erklären.",
        "Das RANKL/OPG-System und seine Bedeutung für die Osteoklastenaktivierung und Osteoporose-Therapie (Denosumab) darstellen.",
        "Die drei Knorpeltypen (hyalin, elastisch, Faser) mit ihren Kollagen-/Elastin-Zusammensetzungen und typischen Lokalisationen benennen.",
        "Die wichtigsten Gelenktypen (Diarthrose, Kugelgelenk, Scharniergelenk) und ihre Bewegungsachsen beschreiben.",
        "Die Pathophysiologie der Osteoporose (Östrogenmangel, Knochenumbau) und die wichtigsten Therapieoptionen (Bisphosphonate, Denosumab) erläutern.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über das Knochen-Remodeling und die Calciumregulation ist korrekt?",
        options: [
          {
            id: "a",
            text: "PTH (Parathormon) hemmt Osteoklasten und senkt den Blut-Calciumspiegel.",
          },
          {
            id: "b",
            text: "Calcitonin aktiviert Osteoklasten und steigert die Calciumfreisetzung aus dem Knochen.",
          },
          {
            id: "c",
            text: "Osteoblasten bauen Knochen auf (Kollagen I, Mineralisierung), Osteoklasten bauen ab (mehrkernig, H⁺/Proteasen). PTH aktiviert Osteoklasten → Ca²⁺ ↑. Calcitonin hemmt Osteoklasten → Ca²⁺ ↓. Vitamin D₃ fördert die intestinale Ca²⁺-Resorption.",
          },
          {
            id: "d",
            text: "Vitamin D₃ hemmt die Calciumresorption im Darm und fördert die renale Calciumausscheidung.",
          },
          {
            id: "e",
            text: "Osteoklasten synthetisieren Kollagen Typ I und sind für die Knochenmineralisierung verantwortlich.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "Knochen wird ständig umgebaut: Osteoblasten (mesenchymaler Ursprung) synthetisieren Kollagen I und mineralisieren (Ca²⁺/PO₄³⁻ → Hydroxylapatit). Osteoklasten (Monozyten-Ursprung, mehrkernig) resorbieren Knochen durch H⁺-Sekretion und Proteasen. PTH (bei Ca²⁺ ↓) → Osteoklasten-Aktivierung → Ca²⁺ ins Blut ↑. Calcitonin (C-Zellen, bei Ca²⁺ ↑) → Osteoklasten-Hemmung → Ca²⁺ ↓. Vitamin D₃ → intestinale Ca²⁺-Resorption ↑. Osteoporose: Abbau > Aufbau → Frakturrisiko ↑.",
      },
      selfTest: [
        {
          question: "Welche Aussage über Osteoblasten und Osteoklasten ist korrekt?",
          options: [
            "Osteoblasten sind mehrkernige Zellen, die durch Resorption Knochen abbauen.",
            "Osteoklasten synthetisieren Kollagen Typ I und mineralisieren die Knochenmatrix.",
            "Osteoblasten bauen Knochen auf durch Kollagen-I-Synthese und Mineralisierung (Ca²⁺, PO₄³⁻). Osteoklasten sind mehrkernige Zellen (Monozyten-Ursprung), die durch H⁺ und Proteasen Knochen abbauen.",
            "PTH (Parathormon) stimuliert Osteoblasten und hemmt Osteoklasten.",
            "Alkalische Phosphatase ist ein Marker für Knochenabbau durch Osteoklasten.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Osteoblasten** (Knochenaufbau):\n- **Synthese** von Kollagen Typ I (organische Matrix)\n- **Mineralisierung** mit Ca²⁺ und PO₄³⁻ (anorganische Matrix)\n- **Alkalische Phosphatase ↑** (Marker für Knochenaufbau)\n- **Regulation:** PTH ↓, Calcitonin ↑, Vitamin D, Östrogen\n\n**Osteoklasten** (Knochenabbau):\n- **Mehrkernig** (Fusion von Monozyten/Makrophagen)\n- **Resorption:** H⁺ (Ansäuerung → Mineralauflösung) + Proteasen (Kollagenabbau)\n- **Regulation:** RANKL (von Osteoblasten) → aktiviert Osteoklasten via RANK-Rezeptor\n\n**Falsch (A):** **Osteoklasten** (nicht Osteoblasten) sind mehrkernig und bauen Knochen ab.\n\n**Falsch (B):** **Osteoblasten** (nicht Osteoklasten) synthetisieren Kollagen I und mineralisieren.\n\n**Falsch (D):** PTH **stimuliert indirekt Osteoklasten** (über RANKL ↑ von Osteoblasten) → Knochenabbau → Ca²⁺ ↑ im Blut.\n\n**Falsch (E):** Alkalische Phosphatase ist Marker für **Knochenaufbau** (Osteoblasten), nicht Abbau.",
          difficulty: 1,
          tags: ["osteoblasten", "osteoklasten", "knochenumbau"],
        },
        {
          question: "Welche Aussage über das RANKL/OPG-System ist korrekt?",
          options: [
            "RANKL wird von Osteoklasten produziert und aktiviert Osteoblasten zum Knochenaufbau.",
            "RANKL (von Osteoblasten) bindet an RANK-Rezeptoren auf Osteoklasten und aktiviert diese zum Knochenabbau. OPG (Osteoprotegerin) ist ein löslicher Rezeptor, der RANKL bindet und hemmt, wodurch Knochenabbau reduziert wird.",
            "OPG (Osteoprotegerin) wird von Osteoklasten produziert und fördert RANKL.",
            "Denosumab ist ein Anti-OPG-Antikörper zur Osteoporose-Therapie.",
            "Die RANKL/OPG-Ratio hat keinen Einfluss auf den Knochenumbau.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **RANKL/OPG-System** reguliert Knochenabbau:\n\n**RANKL** (Receptor Activator of NF-κB Ligand):\n- **Produziert von Osteoblasten** (und Stromazellen)\n- Bindet an **RANK-Rezeptor** auf Osteoklasten\n- **Aktiviert Osteoklasten** → Knochenabbau ↑\n\n**OPG** (Osteoprotegerin):\n- **Löslicher Rezeptor**, produziert von Osteoblasten\n- **Bindet RANKL** → verhindert RANKL-RANK-Interaktion\n- **Hemmt Osteoklasten-Aktivierung** → Knochenabbau ↓\n\n**RANKL/OPG-Ratio** bestimmt Knochenumbau:\n- RANKL/OPG ↑ → Knochenabbau ↑ (z. B. Menopause: Östrogen ↓ → RANKL ↑, OPG ↓)\n- RANKL/OPG ↓ → Knochenaufbau ↑\n\n**Therapeutisch:** **Denosumab** = **Anti-RANKL-Antikörper** → blockiert RANKL → Osteoklasten ↓ → Osteoporose-Therapie\n\n**Falsch (A):** RANKL wird von **Osteoblasten** (nicht Osteoklasten) produziert und aktiviert **Osteoklasten** (nicht Osteoblasten).\n\n**Falsch (C):** OPG wird von **Osteoblasten** produziert und **hemmt** (nicht fördert) RANKL.\n\n**Falsch (D):** Denosumab ist **Anti-RANKL** (nicht Anti-OPG).\n\n**Falsch (E):** RANKL/OPG-Ratio ist **zentral** für Knochenumbau-Regulation.",
          difficulty: 2,
          tags: ["rankl", "opg", "osteoklasten"],
        },
        {
          question: "Welche Aussage über Osteoporose ist korrekt?",
          options: [
            "Osteoporose entsteht durch Vitamin D-Mangel bei Kindern und führt zu weichen Knochen.",
            "Postmenopausale Osteoporose entsteht durch Östrogen-Mangel, der zu erhöhter Osteoklasten-Aktivität führt. Typische Frakturlokalisationen sind Wirbelkörper, Femur und Radius. Therapie umfasst Bisphosphonate und Denosumab (Anti-RANKL-Antikörper).",
            "Bisphosphonate stimulieren Osteoklasten zur Verbesserung des Knochenabbaus.",
            "Morbus Paget ist eine Form der Osteoporose mit vermindertem Knochenumbau.",
            "Osteoporose betrifft primär junge Männer unter 30 Jahren.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Osteoporose** = Knochenmasse ↓ (Osteoblasten < Osteoklasten), Frakturrisiko ↑\n\n**Ursachen:**\n- **Postmenopausal:** Östrogen ↓ → RANKL ↑, OPG ↓ → **Osteoklasten ↑** → Knochenabbau > Aufbau\n- **Alter:** Knochenumbau ↓, Vitamin D/Ca²⁺-Absorption ↓\n- **Weitere:** Vitamin D/Ca²⁺-Mangel, Immobilisation, Kortikosteroide, Rauchen\n\n**Frakturlokalisationen:**\n- **Wirbelkörper** (Kompressionsfrakturen)\n- **Femur** (proximaler Femur, Schenkelhals)\n- **Radius** (distaler Radius, Colles-Fraktur)\n\n**Therapie:**\n- **Bisphosphonate** (z. B. Alendronat): Hemmen Osteoklasten → Knochenabbau ↓\n- **Denosumab:** Anti-RANKL-Antikörper → blockiert RANKL → Osteoklasten ↓\n- **Weitere:** Östrogen (postmenopausal), Vitamin D/Ca²⁺-Supplementation\n\n**Falsch (A):** Beschreibt **Rachitis** (Kinder) bzw. **Osteomalazie** (Erwachsene) = Vitamin D-Mangel → Mineralisierung ↓ → weiche Knochen (nicht Osteoporose).\n\n**Falsch (C):** Bisphosphonate **hemmen** (nicht stimulieren) Osteoklasten.\n\n**Falsch (D):** **Morbus Paget:** **Übermäßiger** (nicht verminderter) Knochenumbau → deformierte, vergrößerte Knochen.\n\n**Falsch (E):** Osteoporose betrifft v. a. **postmenopausale Frauen** und **ältere Erwachsene** (>50 Jahre).",
          difficulty: 2,
          tags: ["osteoporose", "knochendichte", "bisphosphonate"],
        },
        {
          question: "Welche Aussage über Knorpeltypen ist korrekt?",
          options: [
            "Hyaliner Knorpel enthält Kollagen Typ I und ist hauptsächlich in Bandscheiben zu finden.",
            "Elastischer Knorpel enthält Kollagen Typ II plus Elastin und ist in Ohrmuschel und Epiglottis lokalisiert. Er ist flexibel durch den Elastin-Anteil.",
            "Faserknorpel enthält Kollagen Typ II und ist der häufigste Knorpeltyp im Körper.",
            "Knorpelgewebe ist stark vaskularisiert und wird über Blutgefäße ernährt.",
            "Arthrose ist eine Entzündung des Gelenkknorpels durch Bakterien.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Knorpeltypen:**\n\n| Typ | Kollagen | Lokalisation | Eigenschaften |\n|-----|----------|--------------|---------------|\n| **Hyaliner Knorpel** | **Kollagen II** | Gelenkflächen, Rippen, Trachea, Nasenseptum | Glatt, glänzend, **häufigster Typ** |\n| **Elastischer Knorpel** | **Kollagen II + Elastin** | **Ohrmuschel, Epiglottis** | **Flexibel** (durch Elastin) |\n| **Faserknorpel** | **Kollagen I** | Bandscheiben, Meniskus, Symphyse | **Zugfest** (durch Kollagen I) |\n\n**Knorpel-Eigenschaften:**\n- **Gefäßfrei** (avaskulär) → Ernährung durch **Diffusion** (aus Perichondrium oder Synovia)\n- **Chondrozyten** (Knorpelzellen) in Lakunen\n- **Matrix:** Kollagen + Proteoglykane (Wasser-Bindung, Druckresistenz)\n\n**Klinisch:** **Arthrose** = Gelenkknorpel-**Abbau** (Verschleiß, nicht Entzündung) → Schmerz, Bewegungseinschränkung, Gelenkspaltverschmälerung (Röntgen), Osteophyten (Knochenanbauten)\n\n**Falsch (A):** Hyaliner Knorpel enthält **Kollagen II** (nicht I) und ist in **Gelenken** (nicht Bandscheiben). Bandscheiben = **Faserknorpel** (Kollagen I).\n\n**Falsch (C):** Faserknorpel enthält **Kollagen I** (nicht II). **Häufigster Typ** = **hyaliner Knorpel**.\n\n**Falsch (D):** Knorpel ist **gefäßfrei** (avaskulär) → Ernährung durch Diffusion (nicht Blutgefäße).\n\n**Falsch (E):** Arthrose = **Verschleiß** (degenerativ, nicht bakteriell). Bakterielle Gelenkentzündung = **septische Arthritis**.",
          difficulty: 2,
          tags: ["knorpeltypen", "hyalinknorpel", "faserknorpel"],
        },
        {
          question: "Welche Aussage über Gelenke ist korrekt?",
          options: [
            "Synarthrosen sind echte Gelenke mit Gelenkspalt und hoher Beweglichkeit.",
            "Diarthrosen (echte Gelenke) haben einen Gelenkspalt, Gelenkkapsel und Synovia (Gelenkflüssigkeit). Kugelgelenke (z. B. Schulter, Hüfte) erlauben Bewegung in 3 Achsen, Scharniergelenke (z. B. Knie, Ellenbogen) nur in 1 Achse (Flexion/Extension).",
            "Die Synovia (Gelenkflüssigkeit) wird von Chondrozyten produziert.",
            "Bänder verbinden Muskel mit Knochen und übertragen Muskelkraft.",
            "Das Kniegelenk ist ein Kugelgelenk mit 3 Bewegungsachsen.",
          ],
          correctIndex: 1,
          explanation:
            "**Richtig (B):** **Gelenktypen:**\n\n**Synarthrose (unecht):**\n- **Kein Gelenkspalt**\n- **Unbeweglich/wenig beweglich**\n- Beispiele: Schädelnähte (fibrös), Symphyse (Faserknorpel)\n\n**Diarthrose (echt):**\n- **Gelenkspalt**, **Gelenkkapsel**, **Synovia**\n- **Frei beweglich**\n- Komponenten: Gelenkknorpel (hyalin), Gelenkkapsel (Kapsel fibrosa + Membrana synovialis), Synovia (Schmierung, Ernährung), Bänder (Stabilität)\n\n**Gelenkformen:**\n- **Kugelgelenk** (Schulter, Hüfte): **3 Achsen**, größte Beweglichkeit\n- **Scharniergelenk** (Knie, Ellenbogen): **1 Achse** (Flexion/Extension)\n- **Sattelgelenk** (Daumen): 2 Achsen\n- **Drehgelenk** (Atlas-Axis): Rotation\n\n**Synovia:** Gelenkflüssigkeit, produziert von **Membrana synovialis** (nicht Chondrozyten), enthält Hyaluronsäure + Proteine → Schmierung + Ernährung des Knorpels\n\n**Falsch (A):** **Diarthrosen** (nicht Synarthrosen) sind echte Gelenke mit Gelenkspalt und hoher Beweglichkeit. Synarthrosen = unecht, kein Gelenkspalt, kaum beweglich.\n\n**Falsch (C):** Synovia wird von **Membrana synovialis** (Gelenkkapsel-Innenschicht) produziert, nicht von Chondrozyten.\n\n**Falsch (D):** **Sehnen** (nicht Bänder) verbinden Muskel mit Knochen. **Bänder** verbinden Knochen mit Knochen (Stabilität).\n\n**Falsch (E):** Knie = **Scharniergelenk** (1 Achse: Flexion/Extension), nicht Kugelgelenk.",
          difficulty: 1,
          tags: ["gelenke", "synovialflüssigkeit", "gelenkknorpel"],
          hints: [
            "Was ist der Unterschied zwischen Synarthrose und Diarthrose? Welche Gelenkform erlaubt Bewegung in 3 Ebenen?",
            "Synarthrose: kein Gelenkspalt, unbeweglich (Schädelnähte). Diarthrose: Gelenkspalt + Synovia + Kapsel = echt beweglich. Kugelgelenk (Schulter, Hüfte) = 3 Achsen; Scharniergelenk (Knie) = 1 Achse.",
          ],
        },
      ],
      merksätze: [
        "**Knochen-Aufbau & Funktion:** 206 Knochen im Erwachsenen. Kompakta (kortikaler Knochen, 80%, außen, Havers-Systeme/Osteone) + Spongiosa (20%, innen, trabekulär, rotes Knochenmark = Hämatopoese). Periost (Außenschicht, Gefäße + Nerven) + Endost (innen, Stammzellen). Knochen: Kollagen I (30%, organisch, Flexibilität) + Hydroxyapatit [Ca₅(PO₄)₃OH] (70%, anorganisch, Härte). Gesamtlänge: Epiphyse + Epiphysenfuge + Diaphyse.",
        "**Osteoblasten vs. Osteoklasten:** Osteoblasten (Knochenaufbau): Kollagen-I-Synthese, Mineralisierung (Ca²⁺, PO₄³⁻), Alkalische Phosphatase ↑ (Marker). Produzieren RANKL (aktiviert Osteoklasten) + OPG (hemmt RANKL → Osteoklasten ↓). Osteoklasten (Knochenabbau): mehrkernig (aus Monozyten/Makrophagen-Fusion), RANK (Rezeptor für RANKL), H⁺ + Proteasen (Resorption). Remodeling: 10%/Jahr erneuert.",
        "**Hormonelle Knochenregulation:** PTH (Nebenschilddrüse): Ca²⁺ ↑ (Knochenabbau ↑ via Osteoklasten, renale Ca²⁺-Rückresorption ↑, Vitamin-D-Aktivierung ↑). Calcitonin (Schilddrüsen-C-Zellen): Ca²⁺ ↓ (Osteoklasten ↓). Vitamin D (Calcitriol, 1,25-OH₂D₃, Niere aktiviert): Ca²⁺ + PO₄-Resorption Darm ↑. Östrogen (Menopause ↓ → Osteoklasten ↑ → Osteoporose).",
        "**Osteoporose & Frakturheilung:** Osteoporose: Knochenmasse ↓, Frakturrisiko ↑ (Wirbelfraktur, proximale Femurfraktur, distaler Radius). Primär: postmenopausal (Typ I) + senile (Typ II). Sekundär: Glukokortikoide, Immobilisation, Hypogonadismus. Diagnostik: DXA (T-Score < -2,5). Therapie: Bisphosphonate (Alendronat, Zoledronat; Osteoklasten-Apoptose), Denosumab (Anti-RANKL), Östrogen. Frakturheilung: Hämatom → Kallus → knöcherne Heilung (6–8 Wochen).",
        "**Knorpeltypen:** Hyalin (Kollagen II, Gelenkflächen, Rippen, Trachea, Nasenseptum; häufigste; avaskulär; Arthrose-anfällig). Elastisch (Kollagen II + Elastin, Ohrmuschel, Epiglottis; flexibel). Faserknorpel (Kollagen I, Bandscheiben, Meniskus, Symphyse; zugfest). Knorpel avaskulär → Ernährung durch Diffusion (aus Synovia oder Perichondrium).",
        "**Gelenke & Arthritis:** Synarthrose: kein Gelenkspalt (Schädelnähte, Symphyse). Diarthrose (echte Gelenke): Gelenkspalt + Kapsel + Synovia. Formen: Kugelgelenk (3 Achsen, Schulter/Hüfte), Scharniergelenk (1 Achse, Knie/Ellenbogen), Sattelgelenk (2 Achsen, Daumen), Drehgelenk (Rotation). Arthrose = degenerativer Knorpelabbau (Schmerz bei Belastung, Röntgen: Gelenkspaltverschmälerung, Osteophyten). Arthritis = Entzündung (RA: Schwellung, Morgensteifigkeit, Anti-CCP).",
        "**Rheumatoide Arthritis (RA) vs. Arthrose:** RA: Synovialitis (Pannusgewebe) → Gelenkzerstörung. Anti-CCP (hochspezifisch), RF (Rheumafaktor). Morgensteifigkeit >1 h. Befällt kleine Gelenke (MCP, PIP). Extraartikulär: Rheumaknoten, Vaskulitis, Lunge, Augen. Therapie: MTX (Basistherapeutikum), Biologika (Anti-TNF: Adalimumab; Anti-IL-6: Tocilizumab). Arthrose: Verschleiß, größere Gelenke (Hüfte, Knie), kein Entzündungsmarker, Schmerzfreiheit morgens, Therapie: Analgesie, Endoprothese.",
        "**Wirbelsäule & Bandscheibenvorfall:** Wirbelsäule: 7 HWK + 12 BWK + 5 LWK + 5 SWK (fused) + 4 SteißWK. Bandscheiben: Nucleus pulposus (Gallertkern, H₂O-reich, Faserknorpel) + Annulus fibrosus (Fasern). Lumbaler Bandscheibenvorfall (L4/L5, L5/S1 häufigste): N. ischiadicus-Kompression → Ischialgie (ausstrahlend ins Bein, Lasègue+), Parese, Reflexausfall. Therapie: konservativ (physio, NSAR, ggf. Kortisoninjektion), OP bei Neurologie-Ausfall.",
        "**Muskulatur & Skelettmuskelerkrankungen:** Duchenne-Muskeldystrophie (X-chromosomal, Dystrophin-Defekt): Jungen, Muskelschwäche ab 2–5 J., Gowers-Zeichen (Aufstehen über Boden), Pseudohypertrophie (Waden), CK ↑, Herz/Atemmuskelinsuffizienz. Becker-MD: milder. Myositis (DM, PM): entzündlich, CK ↑, proximale Schwäche. Gicht: Hyperurikämie → Harnsäurekristalle → Gelenkentzündung (v.a. Großzehengrundgelenk, Podagra).",
      ],
      klinischerBezug:
        "Osteoporose ist ein bedeutendes Public-Health-Problem: jährlich >200.000 osteoporotische Frakturen in Deutschland. Sinterungsfrakturen der Wirbelkörper (Rückenschmerzen, Größenabnahme, Kyphose) und Oberschenkelhalsfrakturen (Sterblichkeit im ersten Jahr ~20%) sind häufigste Folgen. DXA-Screening ab 65 Jahren (Frauen) empfohlen. Bisphosphonate (Alendronat, Zoledronat) sind Erstlinientherapie; Denosumab (subkutan halbjährlich) als Alternative. Rheumatoide Arthritis betrifft ~1% der Bevölkerung (Frauen 3× häufiger); frühzeitige Diagnose (Anti-CCP, Imaging) und Therapiebeginn (MTX ± Biologika) verhindern Gelenkzerstörung. Gicht (Hyperurikämie, Harnsäurekristalle): akuter Gichtanfall → Colchicin + NSAR + Kortison; Dauertherapie: Allopurinol (XO-Inhibitor, Harnsäure ↓). Bandscheibenvorfall: häufigste Ursache für Operationen an der Wirbelsäule; bei Kaudasyndrom (Blasen-/Mastdarm-Störung) → sofortiger Notfalleingriff.",
    },
    {
      id: "bio-3-12",
      title: "Fortpflanzungssystem",
      imageUrl: "/images/wiki-female-reproductive-de.svg",
      imageCaption:
        "Abb.: Weibliches Fortpflanzungssystem — Eileiter, Eierstöcke, Uterus, Cervix, Vagina (Wikimedia Commons, CC BY-SA 3.0)",
      stichworte: [
        "Spermatogenese",
        "Oogenese",
        "Menstruationszyklus",
        "FSH",
        "LH",
        "Östrogen",
        "Progesteron",
        "Befruchtung",
      ],
      content: `Das Fortpflanzungssystem verbindet Anatomie, Endokrinologie und Genetik — von der Keimzellbildung über den Menstruationszyklus bis zur Befruchtung.

## Spermatogenese und Oogenese — Gametogenese im Vergleich

{{IMAGE}}

Ein Mann produziert täglich rund 200 Millionen Spermien, eine Frau reift pro Zyklus nur eine einzige Eizelle — dieser Kontrast prägt die gesamte Fortpflanzungsbiologie. Beide Keimzellentwicklungen nutzen die Meiose, unterscheiden sich aber fundamental in Ergebnis und Zeitplanung:

| Merkmal | Spermatogenese | Oogenese |
|---|---|---|
| **Ergebnis** | **4 funktionsfähige Spermien** | **1 Eizelle + 3 Polkörperchen** |
| **Beginn** | Ab Pubertät, kontinuierlich | Pränatal (7. Monat) → Meiose I gestartet |
| **Dauer** | ~74 Tage | Monate bis Jahrzehnte |
| **Ort** | Tubuli seminiferi | Ovar |

{{DIAGRAM:meiosis}}

**Spermatogenese** (Tubuli seminiferi):
- Spermatogonium (2n) → Mitose → Primäre Spermatozyte (2n) → **Meiose I** → 2× Sekundäre Spermatozyten (n) → **Meiose II** → 4× Spermatiden (n) → Spermiogenese → **4 reife Spermien**
- **Sertoli-Zellen** (in Tubuli, FSH-abhängig): Ernährung, Blut-Hoden-Schranke, Inhibin (→ FSH ↓), ABP (hält Testosteron-Konzentration lokal hoch)
- **Leydig-Zellen** (Interstitium, LH-abhängig): Testosteron-Synthese

**Oogenese** (mit zwei Meiose-Arrests!):
1. **Arrest I** (Prophase I): Primäre Oozyte liegt pränatal still → bleibt so bis Pubertät (maximal ~50 Jahre!)
2. LH-Peak → **Meiose I abgeschlossen** → sekundäre Oozyte (n) + 1. Polkörperchen
3. **Arrest II** (Metaphase II): sekundäre Oozyte wartet auf Befruchtung
4. Spermium penetriert → **Meiose II abgeschlossen** → reife Eizelle (n) + 2. Polkörperchen (+ 1. teilt sich → 3 Polkörperchen gesamt)

> **Merke:** **Oogenese-Arrests**: primäre Oozyte = **Prophase I** (seit Embryonalzeit). sekundäre Oozyte = **Metaphase II** (seit Ovulation). Meiose II wird nur bei Befruchtung abgeschlossen. **Ergebnis: 1 Eizelle + 3 Polkörperchen**. **Sertoli** (FSH, Inhibin) vs. **Leydig** (LH, Testosteron).

**Befruchtung** findet typischerweise im ampullären Teil des Eileiters statt. Die **Akrosom-Reaktion**: Das Akrosom (Vesikel am Spermienkopf) schüttet Hydrolasen aus, die die Zona pellucida (Glykoproteinmatrix der Eizelle) durchdringen. Nach Spermien-Eizell-Fusion löst die **Kortikalreaktion** aus (Cortical Granules verschmelzen mit Oolemma → Zona-Verhärtung → **Polyspermie-Block**). Gleichzeitig wird die Meiose II abgeschlossen und der zweite Polkörper abgeschnürt.

---

## Menstruationszyklus und Hormonregulation

**Follikelphase (Tag 1–14):**
- FSH steigt → **Follikelreifung** → Granulosazellen produzieren **Östrogen ↑**
- Östrogen (niedrig/mittel): negative Rückkopplung → FSH/LH moderat ↓ (Primärfollikel überleben nicht alle)
- Östrogen steigt weiter → **dominanter Follikel** bildet sich (produziert am meisten Östrogen)

**LH-Peak (Tag ~14) — positiver Feedback-Mechanismus:**
- Östrogen > ~200 pg/mL über >2 Tage → **positive Rückkopplung** auf Hypophyse → GnRH ↑ → **massiver LH-Anstieg**
- LH-Peak → Ovulation (24–36 h später)

**Lutealphase (Tag 15–28):**
- Follikelreste → **Corpus luteum** → **Progesteron** (+ Östrogen) ↑
- Progesteron: Endometrium vorbereiten (sekretorisch), Cervixschleim eindicken, Basaltemperatur ↑ ~0,5 °C
- Keine Befruchtung → Corpus luteum degeneriert (Tag ~25) → Hormonabfall → **Menstruation**. **Blut und ausgeschiedene Gewebeteile stammen aus der Uterusschleimhaut** (Endometrium) — nicht aus Follikel, Gelbkörper, Tuben- oder Vaginalschleimhaut.
- Befruchtung: Trophoblast → **hCG** → erhält Corpus luteum → Progesteron hoch → Schwangerschaft

> **Merke:** **Menstruationszyklus**: FSH → Östrogen ↑ (Follikelphase) → Östrogen ↑↑ → **positive Rückkopplung → LH-Peak** (Tag 14) → Ovulation → Corpus luteum → Progesteron ↑ (Lutealphase). Keine Befruchtung → Corpus luteum degeneriert → Menstruation. **hCG** (Trophoblast ab Tag 6–7): erhält Corpus luteum → Basis des Schwangerschaftstests.

`,
      lernziele: [
        "Die Funktionen von Sertoli-Zellen (Spermatogenese-Unterstützung, Inhibin, Blut-Hoden-Schranke) und Leydig-Zellen (Testosteron unter LH) unterscheiden.",
        "Die Spermatogenese (Spermatogonien → 4 Spermien, ~74 Tage) mit Meiose I/II und Spermiogenese beschreiben.",
        "Die Oogenese (Arrest in Prophase I → Meiose I bei Ovulation → Meiose II nur bei Befruchtung, 1 Eizelle + 3 Polkörperchen) erklären.",
        "Den Menstruationszyklus (Follikelphase: FSH/Östrogen; Ovulation: LH-Peak Tag 14; Lutealphase: Corpus luteum/Progesteron) und den LH-Peak-Mechanismus (positive Rückkopplung) darstellen.",
        "Die Rolle von hCG bei der Schwangerschaftserhaltung (Corpus luteum → Progesteron) und die Funktion der Plazenta erläutern.",
      ],
      sections: [],
      altfrage: {
        text: "Welche Aussage über den Menstruationszyklus und die Ovulation ist korrekt?",
        options: [
          {
            id: "a",
            text: "Der LH-Peak wird durch sinkende Östrogenspiegel in der späten Follikelphase ausgelöst.",
          },
          {
            id: "b",
            text: "In der Follikelphase stimuliert FSH die Follikelreifung → Östrogen ↑. Hohe Östrogenspiegel lösen den LH-Surge aus (positive Rückkopplung) → Ovulation (Tag ~14). Das Corpus luteum produziert danach Progesteron.",
          },
          {
            id: "c",
            text: "Das Corpus luteum produziert in der Follikelphase FSH und löst die Menstruation aus.",
          },
          {
            id: "d",
            text: "Progesteron ist das dominante Hormon der Follikelphase, Östrogen das der Lutealphase.",
          },
          {
            id: "e",
            text: "hCG wird von der Hypophyse produziert und hemmt die Corpus-luteum-Funktion.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Follikelphase (Tag 1–14): FSH → Follikelreifung → Östrogen ↑. Hohe Östrogenspiegel → positive Rückkopplung → LH-Surge → Ovulation (Tag ~14). Lutealphase (Tag 15–28): Corpus luteum → Progesteron → Endometrium sekretorisch. Ohne Befruchtung: Corpus luteum degeneriert → Hormonabfall → Menstruation. Mit Befruchtung: Trophoblast → hCG → erhält Corpus luteum → Progesteron für Schwangerschaft.",
      },
      selfTest: [
        {
          question: "Welche Aussage über Sertoli-Zellen und Leydig-Zellen ist korrekt?",
          options: [
            "Sertoli-Zellen produzieren Testosteron und liegen im Interstitium des Hodens.",
            "Leydig-Zellen unterstützen die Spermatogenese und produzieren Inhibin.",
            "Sertoli-Zellen (in Tubuli seminiferi) unterstützen die Spermatogenese, bilden die Blut-Hoden-Schranke, produzieren Inhibin (hemmt FSH) und ABP (bindet Testosteron). Leydig-Zellen (im Interstitium) produzieren Testosteron unter LH-Stimulation.",
            "FSH stimuliert Leydig-Zellen zur Testosteron-Produktion.",
            "ABP (Androgen-Binding-Protein) wird von Leydig-Zellen produziert und hemmt die Spermatogenese.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Hodenzellen:**\n\n**Sertoli-Zellen** (Tubuli seminiferi, somatisch):\n- **Lokalisation:** In den Tubuli seminiferi (Keimepithel)\n- **Funktion:**\n  - **Spermatogenese-Unterstützung:** Ernährung, Phagozytose von degeneriertem Material\n  - **Blut-Hoden-Schranke:** Schützt Keimzellen vor Immunsystem\n  - **Inhibin:** Hemmt FSH (negative Rückkopplung)\n  - **ABP** (Androgen-Binding-Protein): Bindet Testosteron → hohe lokale Konzentration → Spermatogenese ↑\n- **Regulation:** **FSH** → Spermatogenese ↑\n\n**Leydig-Zellen** (Interstitium, endokrin):\n- **Lokalisation:** Im Interstitium (zwischen Tubuli)\n- **Funktion:** **Testosteron-Produktion** (aus Cholesterin)\n- **Regulation:** **LH** → Testosteron ↑\n\n**Testosteron-Wirkung:** Spermatogenese (lokal), sekundäre Geschlechtsmerkmale, negative Rückkopplung (→ GnRH ↓, LH ↓)\n\n**Falsch (A):** **Leydig-Zellen** (nicht Sertoli) produzieren Testosteron und liegen im Interstitium.\n\n**Falsch (B):** **Sertoli-Zellen** (nicht Leydig) unterstützen Spermatogenese und produzieren Inhibin.\n\n**Falsch (D):** **LH** (nicht FSH) stimuliert Leydig-Zellen. **FSH** stimuliert Sertoli-Zellen.\n\n**Falsch (E):** **ABP** wird von **Sertoli-Zellen** produziert und **fördert** (nicht hemmt) Spermatogenese durch Testosteron-Bindung.",
          difficulty: 1,
          tags: ["sertoli-zellen", "leydig-zellen", "hoden"],
        },
        {
          question: "Welche Aussage über die Spermatogenese ist korrekt?",
          options: [
            "Aus einem Spermatogonium (2n) entstehen durch Meiose 2 funktionsfähige Spermien (n).",
            "Die Spermatogenese dauert etwa 28 Tage und findet im Nebenhoden statt.",
            "Spermatogonien (2n) durchlaufen Mitose, dann Meiose I (→ sekundäre Spermatozyten, n) und Meiose II (→ 4 Spermatiden, n), die zu 4 funktionsfähigen Spermien reifen. Dauer: ~74 Tage. Lokalisation: Tubuli seminiferi.",
            "Spermien erhalten ihre Beweglichkeit erst nach der Befruchtung.",
            "Das Akrosom enthält Mitochondrien für die Energieversorgung des Spermiums.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Spermatogenese** (~74 Tage):\n\n1. **Spermatogonien** (2n, diploid, Stammzellen) → **Mitose** → primäre Spermatozyten (2n)\n2. **Meiose I:** Primäre Spermatozyten (2n) → 2 **sekundäre Spermatozyten** (n, haploid)\n3. **Meiose II:** Sekundäre Spermatozyten (n) → **4 Spermatiden** (n)\n4. **Spermiogenese:** Spermatiden → **Spermien** (reif):\n   - **Akrosom** (Kopf): Enzyme (Hyaluronidase, Akrosin) → durchdringt Zona pellucida\n   - **Flagellum** (Schwanz): Beweglichkeit\n   - **Mitochondrien** (Mittelstück): ATP für Bewegung\n\n**Lokalisation:**\n- **Tubuli seminiferi** (Hoden): Spermatogenese (Sertoli-Zellen)\n- **Nebenhoden:** Reifung (Motilität ↑), Speicherung\n\n**Ergebnis:** **4 funktionsfähige Spermien** (n) aus 1 Spermatogonium (2n) – im Gegensatz zu Oogenese (1 Eizelle + 3 Polkörperchen)\n\n**Falsch (A):** Aus 1 Spermatogonium entstehen **4** (nicht 2) funktionsfähige Spermien.\n\n**Falsch (B):** Dauer ~**74 Tage** (nicht 28), Lokalisation **Tubuli seminiferi** (nicht Nebenhoden). Nebenhoden = Reifung/Speicherung.\n\n**Falsch (D):** Spermien erhalten Beweglichkeit während **Reifung im Nebenhoden** (nicht nach Befruchtung).\n\n**Falsch (E):** **Akrosom** enthält **Enzyme** (nicht Mitochondrien). **Mitochondrien** sind im Mittelstück (Energieversorgung).",
          difficulty: 2,
          tags: ["spermatogenese", "spermien", "meiose"],
        },
        {
          question: "Welche Aussage über die Oogenese ist korrekt?",
          options: [
            "Aus einer primären Oozyte (2n) entstehen durch Meiose 4 funktionsfähige Eizellen (n).",
            "Die Meiose II wird bei jeder Ovulation abgeschlossen, unabhängig von einer Befruchtung.",
            "Primäre Oozyten (2n) werden während der Embryonalentwicklung gebildet und arretieren in Prophase I bis zur Pubertät. Bei Ovulation wird Meiose I abgeschlossen (→ sekundäre Oozyte, n + 1. Polkörperchen). Meiose II wird nur bei Befruchtung abgeschlossen (→ Eizelle, n + 2. Polkörperchen).",
            "Die Oogenese beginnt erst mit der Pubertät und endet mit etwa 40 Jahren.",
            "Bei Geburt hat ein weiblicher Säugling etwa 6–7 Millionen primordiale Follikel.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Oogenese:**\n\n**Pränatale Entwicklung:**\n1. **Primordiale Keimzellen** → Oogonien (2n) → Mitose\n2. **Primäre Oozyten** (2n): Meiose I **gestartet**, aber **Arrest in Prophase I** (bis Pubertät)\n3. **~400.000 primordiale Follikel** bei Geburt (vs. 6–7 Mio. im 5. Monat intrauterin, 99% degenerieren)\n\n**Ab Pubertät (jeden Zyklus):**\n1. **Meiose I abgeschlossen:** Primäre Oozyte (2n) → **sekundäre Oozyte** (n, haploid) + **1. Polkörperchen** (n, degeneriert)\n2. **Ovulation** (Tag 14): Sekundäre Oozyte (n) freigesetzt, **Arrest in Metaphase II**\n3. **Meiose II** (nur bei Befruchtung): Sekundäre Oozyte (n) → **Eizelle** (n) + **2. Polkörperchen** (n, degeneriert)\n\n**Ergebnis:** **1 funktionsfähige Eizelle** (n) + **3 Polkörperchen** (degenerieren) – im Gegensatz zu Spermatogenese (4 Spermien)\n\n**Falsch (A):** Aus 1 primären Oozyte entsteht **1** (nicht 4) funktionsfähige Eizelle + 3 Polkörperchen (degenerieren).\n\n**Falsch (B):** Meiose II wird **nur bei Befruchtung** abgeschlossen. Ohne Befruchtung bleibt sekundäre Oozyte in Metaphase II arretiert.\n\n**Falsch (D):** Primäre Oozyten werden **pränatal** (nicht ab Pubertät) gebildet. Menopause (Ende Oogenese) ~50 Jahre (nicht 40).\n\n**Falsch (E):** Bei Geburt ~**400.000** (nicht 6–7 Mio.) primordiale Follikel. 6–7 Mio. im **5. Monat intrauterin**, dann Degeneration.",
          difficulty: 3,
          tags: ["oogenese", "eizelle", "meiose"],
        },
        {
          question: "Welche Aussage über den Menstruationszyklus ist korrekt?",
          options: [
            "Die Follikelphase wird durch LH gesteuert und führt zu steigenden Progesteron-Spiegeln.",
            "Die Ovulation findet am letzten Tag der Menstruation statt.",
            "Die Follikelphase (Tag 6–14) wird durch FSH gesteuert, das Follikelwachstum und Östrogen-Produktion (Granulosa-Zellen) stimuliert. Am Tag 14 führt ein LH-Peak zur Ovulation. In der Lutealphase (Tag 15–28) produziert das Corpus luteum Progesteron, das das Endometrium sekretorisch umbaut.",
            "Progesteron ist in der Follikelphase am höchsten.",
            "Das Corpus luteum wird durch FSH aufrechterhalten.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **Menstruationszyklus** (~28 Tage):\n\n| Phase | Tage | Ovar | Endometrium | Hormone |\n|-------|------|------|-------------|----------|\n| **Menstruation** | 1–5 | Follikel-Degeneration | Abstoßung | Progesteron ↓, Östrogen ↓ |\n| **Follikelphase** | 6–14 | **FSH** → Follikelwachstum → **Östrogen ↑** (Granulosa) | Proliferation (Aufbau) | **FSH**, **Östrogen ↑** |\n| **Ovulation** | 14 | **LH-Peak** → Follikelruptur → Oozyte (n) freigesetzt | (Übergang) | **LH-Peak** |\n| **Lutealphase** | 15–28 | **Corpus luteum** (LH) → **Progesteron ↑** + Östrogen | Sekretion (Drüsen, Glykogen) | **Progesteron ↑** |\n\n**Hormonelle Regulation:**\n- **Follikelphase:** FSH → Follikel → **Östrogen ↑** (Granulosa-Zellen, via Aromatase aus Androgenen der Theka-Zellen)\n- **Ovulation:** Östrogen ↑↑ (hoch, >2 Tage) → **positive Rückkopplung** → **LH-Peak** → Ovulation (~24–36 h später)\n- **Lutealphase:** LH → **Corpus luteum** → **Progesteron ↑** (sekretorisches Endometrium, Vorbereitung auf Implantation)\n- **Ohne Befruchtung:** Corpus luteum degeneriert → Progesteron ↓ → Menstruation\n\n**Falsch (A):** Follikelphase wird durch **FSH** (nicht LH) gesteuert und führt zu **Östrogen ↑** (nicht Progesteron). **Progesteron ↑** in Lutealphase.\n\n**Falsch (B):** Ovulation findet am **Tag 14** (Zyklusmitte) statt, nicht am letzten Tag der Menstruation (Tag 5).\n\n**Falsch (D):** **Progesteron** ist in der **Lutealphase** (nicht Follikelphase) am höchsten.\n\n**Falsch (E):** Corpus luteum wird durch **LH** (nicht FSH) aufrechterhalten. Bei Befruchtung: **hCG** (Trophoblast) erhält Corpus luteum.",
          difficulty: 2,
          tags: ["menstruationszyklus", "fsh", "lh"],
        },
        {
          question: "Welche Aussage über den LH-Peak und die Ovulation ist korrekt?",
          options: [
            "Niedrige Östrogen-Spiegel führen über positive Rückkopplung zum LH-Peak.",
            "Der LH-Peak wird durch Progesteron ausgelöst.",
            "Hohe Östrogen-Spiegel (>2 Tage) führen über positive Rückkopplung zu einem LH-Peak (und FSH-Peak), der etwa 24–36 Stunden später die Ovulation auslöst. Nach der Ovulation wandelt sich der Follikel zum Corpus luteum um, das Progesteron produziert.",
            "Der LH-Peak hemmt die Ovulation und erhält den Follikel.",
            "Östrogen hat während des gesamten Zyklus eine positive Rückkopplung auf LH.",
          ],
          correctIndex: 2,
          explanation:
            "**Richtig (C):** **LH-Peak und Ovulation:**\n\n**Östrogen-Rückkopplung (biphasisch):**\n\n1. **Follikelphase (früh/mittel):** Östrogen **niedrig/mittel** → **negative Rückkopplung** → GnRH ↓, FSH ↓, LH ↓\n\n2. **Follikelphase (spät):** Östrogen **hoch** (>200 pg/mL, >2 Tage) → **positive Rückkopplung** → GnRH ↑ → **LH-Peak** + FSH-Peak (Hypophyse)\n\n3. **Ovulation:** **LH-Peak** (Tag 14) → Follikelruptur → Freisetzung der **sekundären Oozyte** (n, Arrest Metaphase II) → ~**24–36 h** nach LH-Peak\n\n4. **Nach Ovulation:** Follikel → **Corpus luteum** (Gelbkörper):\n   - **LH** → Corpus luteum → **Progesteron ↑** + Östrogen\n   - **Progesteron** → negative Rückkopplung → GnRH ↓, LH ↓, FSH ↓\n   - **Progesteron** → Endometrium sekretorisch (Implantations-Vorbereitung)\n\n**Mit Befruchtung:** **hCG** (humanes Choriongonadotropin, Trophoblast) → erhält Corpus luteum → Progesteron ↑ → Schwangerschaft\n\n**Ohne Befruchtung:** Corpus luteum degeneriert (Tag 28) → Progesteron ↓ → Menstruation (Tag 1)\n\n**Falsch (A):** **Hohe** (nicht niedrige) Östrogen-Spiegel führen zu positiver Rückkopplung → LH-Peak. Niedrige Östrogen-Spiegel → negative Rückkopplung.\n\n**Falsch (B):** **Östrogen** (nicht Progesteron) löst LH-Peak aus. Progesteron → negative Rückkopplung (Lutealphase).\n\n**Falsch (D):** LH-Peak **löst Ovulation aus** (nicht hemmt). Follikel rupturiert, wandelt sich zu Corpus luteum um.\n\n**Falsch (E):** Östrogen hat **biphasische** Rückkopplung: niedrig/mittel → negativ, hoch (>2 Tage) → positiv → LH-Peak.",
          difficulty: 3,
          tags: ["lh-peak", "ovulation", "eisprung"],
        },
      ],

      merksätze: [
        "**Spermatogenese:** Spermatogonien (2n) → Mitose → primäre Spermatozyten (2n) → Meiose I → sekundäre Spermatozyten (n) → Meiose II → 4 Spermatiden (n) → Spermiogenese → Spermien (Akrosom, Flagellum, Mitochondrien). Dauer: ~74 Tage. Kontinuierlich ab Pubertät. Sertoli-Zellen: Unterstützung + Inhibin (hemmt FSH) + ABP. Leydig-Zellen: Testosteron (LH-stimuliert).",
        "**Oogenese:** Oogonien (2n, fetal) → primäre Oozyte (2n, Meiose I beginnt, Arrest Prophase I bis Pubertät). Ovulation: primäre Oozyte beendet Meiose I → sekundäre Oozyte (n, Arrest Metaphase II). Meiose II nur bei Befruchtung komplett → reife Eizelle + Polkörper. Nur 1 Eizelle aus 1 Oogonie (nicht 4 Zellen). ~400 Ovulationen im Leben (7 Mio. Oozyte → bei Geburt ~1–2 Mio. → Pubertät ~300.000).",
        "**Menstruationszyklus (28 Tage):** Menstruation (Tag 1–5): Progesteron ↓ → Endometrium abstößt. Proliferationsphase (Tag 6–14): FSH → Östrogen ↑ → Endometrium proliferiert (Drüsen wachsen). Ovulation (Tag 14): Östrogen ↑↑ → positive RK → LH-Peak → Follikelruptur. Sekretionsphase (Tag 15–28): LH → Corpus luteum → Progesteron ↑ → Endometrium sekretorisch (Glykogen).",
        "**LH-Peak & Ovulation:** Östrogen niedrig/mittel → negative Rückkopplung (FSH ↓). Östrogen hoch (>200 pg/mL, >2 Tage) → positive Rückkopplung → GnRH ↑ → LH-Peak (+ FSH-Peak) → Ovulation 24–36 h später. Sekundäre Oozyte (n, Arrest Metaphase II) im Eileiter freigegeben. Basaltemperatur ↑ nach Ovulation (~0,5°C, Progesteron-Effekt).",
        "**Corpus luteum & hCG:** Nach Ovulation: Follikel → Corpus luteum (Gelbkörper, Granulosa + Theka-Zellen luteinisiert). LH → Corpus luteum → Progesteron ↑. Ohne Befruchtung: Corpus luteum degeneriert (Tag 28) → Progesteron ↓ → Menstruation. Mit Befruchtung: Trophoblast (Blastozyste) → hCG (ab Tag 6–7) → Corpus luteum erhalten → Progesteron ↑ → Schwangerschaft. Ab 12. SSW: Plazenta übernimmt.",
        "**Kontrazeption:** Kombinierte OCP (Östrogen + Gestagen): Ovulationshemmung (neg. RK auf GnRH/LH/FSH) + Schleim ↑ + Endometrium atrophisch. Progesteronpille: kein Östrogen, Schleim ↑. IUP (Kupfer: spermizid/Motilität ↓; Hormonspirale: Gestagen → Schleim ↑). Notfallkontrazeption: Ulipristalacetat (Progesteronrezeptor-Modulator, bis 120 h), Levonorgestrel (bis 72 h, OTC), Kupfer-IUP (bis 5 Tage, effektivste). Sterilisation: Tubenligatur (Frau), Vasektomie (Mann).",
        "**PCO-Syndrom (PCOS):** Häufigste endokrine Erkrankung bei Frauen (5–15%). Diagnose (Rotterdam-Kriterien, 2/3): Oligo-/Anovulation, klinische/biochemische Androgenisierung (Hirsutismus, Akne, Alopezie), polyzystische Ovarien (>12 Follikel im Ultraschall). LH/FSH-Ratio ↑ (>2), Androgene ↑, Insulin-Resistenz ↑. Therapie: Gewichtsreduktion, OCP (Anti-Androgen), Metformin (Insulinsensitizer), Clomifen (Ovulationsinduktion).",
        "**Endometriose:** Endometriumähnliches Gewebe außerhalb des Uterus (Ovar [Endometriom], Peritoneum, Rektum). Dysmenorrhö (schwere Periodenschmerzen), Dyspareunie, Infertilität. Diagnose: Laparoskopie (Goldstandard). Östrogenabhängig. Therapie: Gestagene, GnRH-Analoga (Östrogenentzug), Laparoskopie (Herdentfernung).",
        "**Fertilität & Infertilität:** Primäre Infertilität: Schwangerschaft nie erreicht. Sekundäre: nach bereits erfolgter Schwangerschaft. Ursachen: Weiblich (PCOS, Endometriose, Tubenverschluss [nach Chlamydien-Salpingitis], Uterusanomalien, POI). Männlich: Oligo-/Azoo-/Asthenozoospermie (Spermiogramm!), Varikozele, Kryptorchismus. Assisted Reproduction: IUI, IVF (In-vitro-Fertilisation), ICSI (Intrazytoplasmatische Spermieninjektion).",
      ],
      klinischerBezug:
        "PCOS (Polyzystisches Ovarsyndrom) betrifft 5–15% der Frauen im gebärfähigen Alter und ist häufigste Ursache für ovulatorische Infertilität. Diagnose nach Rotterdam-Kriterien (2 von 3: Anovulation, Androgenisierung, polyzystische Ovarien). Metabolisches Syndrom und Typ-2-Diabetes häufig assoziiert. Endometriose: chronische, oft spät diagnostizierte Erkrankung (Diagnose-Verzögerung 7–10 Jahre!); betrifft ~10% der Frauen; Endometriome (Schokoladenzysten) können Ovarialreserve schädigen. Hormonelle Kontrazeption: OCP erhöht geringfügig das VTE-Risiko (besonders dritte/vierte Generation Gestagene); absolute Kontraindikationen: Migräne mit Aura, VTE-Vorgeschichte, schwere Hypertonie. Schwangerschaft: hCG-Nachweis im Schwangerschaftstest ab Tag 10 nach Befruchtung möglich; hCG-Anstieg verdoppelt sich alle 48 h in früher SS. Eklampsie/Präeklampsie: Hypertonie + Proteinurie in SS → magnesiumsulfat + frühzeitige Entbindung. Mammakarzinom: häufigstes Karzinom der Frau (~70% ER+, Hormonrezeptor-positiv → Tamoxifen oder Aromatasehemmer als Therapie).",
    },
  ],
};
