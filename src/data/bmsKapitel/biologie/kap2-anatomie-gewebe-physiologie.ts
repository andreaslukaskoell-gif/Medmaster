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
      content: `## Einleitung

Jede Oberfläche im Körper ist mit **Epithel** bedeckt — die Haut, die Darmschleimhaut, die Blutgefäßinnenwand, die Harnblase. **Epithel** ist die universelle Verkleidung und Barriere; es besteht aus dicht aneinandergrenzenden Zellen. Je nach Aufgabe unterscheidet sich der Typ radikal: Ein hauchdünnes Plattenepithel in der Lunge ermöglicht schnellen Gasaustausch, das Darmepithel saugt Nährstoffe auf, das Harnblasenepithel dehnt sich enorm. Grundprinzip: Alle Epithelien sind **polar** (Ober- vs. Unterseite), **avaskulär** (keine eigenen Blutgefäße) und sitzen auf einer **Basalmembran**. Für den MedAT ist die Zuordnung von Epitheltyp zu Organ prüfungsrelevant, ebenso Tight Junctions und Sekretionsmechanismen.

**In diesem Kapitel lernst du:**
- die **Grundprinzipien** aller Epithelien (Polarität, Basalmembran, avaskulär) und **Zellkontakte** (Tight Junctions, Desmosomen, Gap Junctions, Hemidesmosomen)
- die **Klassifikation** (einschichtig/mehrschichtig, Platten-/Kubisch-/Zylinderepithel) und typische **Organzuordnung**
- **Drüsenepithelien** und **Sekretionsarten** (merokrin, apokrin, holokrin) sowie Kartagener-Syndrom

---

## Grundprinzip: Eigenschaften aller Epithelien

**Um zu verstehen,** warum Epithelien so unterschiedlich aussehen können, schauen wir zuerst, was **alle** Epithelien gemeinsam haben. Alle Epithelien teilen drei Grundeigenschaften:

1. **Polarität**: Die Zelle hat eine **apikale Seite** (zur Körperhöhle/Oberfläche hin) und eine **basolaterale Seite** (zur Basalmembran/Interstitium). Transporter sind ungleichmäßig verteilt → **gerichteter Transport** (z.B. SGLT1 apikal, GLUT2 basolateral im Dünndarm)

2. **Basalmembran**: Das Epithelgewebe ist durch die **Basalmembran** mit dem darunterliegenden Bindegewebe verbunden (Kollagen IV, Laminin, Proteoglykane). Sie verankert das Epithel und stellt eine weitere selektive Barriere dar. **Prüfungssicher:** Die Verbindung Epithel–Bindegewebe ist die Basalmembran (nicht apikale Fortsätze, nicht Lipid-Doppelschicht, nicht Bürstensaum).

3. **Avaskulär**: Epithelien haben keine eigenen Blutgefäße — Versorgung erfolgt durch Diffusion aus darunter liegenden Kapillaren. → Hohe Zellerneuerungsrate nötig (Dünndarm alle 3–5 Tage, Haut alle ~2 Wochen)

**Zellkontakte in Epithelien:**
- **Tight Junctions** (Zonula occludens): Versiegeln apikalen Interzellularspalt; Barriere- und Fence-Funktion (trennen apikale und basolaterale Membranproteine). Aus Claudinen und Occludin.
- **Desmosomen**: Mechanischer Zusammenhalt (Cadherine + Intermediärfilamente). Knotenförmig, gürtelartig.
- **Gap Junctions**: Direkter Ionenaustausch zwischen Zellen (Connexine). **Die einzelnen Muskelzellen des Herzens sind elektrisch leitend durch Gap Junctions miteinander verbunden** (nicht durch Tight Junctions, Desmosomen oder Adhärens-Kontakte) — so breitet sich die Erregung koordiniert aus.
- **Hemidesmosomen**: Verankerung an Basalmembran (Integrine + Laminin).

> **Merke:** Tight Junctions = apikal, Barriere + Fence. Desmosomen = mechanisch. Gap Junctions = Ionenaustausch. Hemidesmosomen = Basalmembran-Verankerung.

![Zellkontakte und Polarität](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Epithelzellen mit apikaler und basolateraler Seite; Transporter und Kanäle sind polar verteilt — Grundlage für gerichteten Transport und Barrierefunktion.

---

## Klassifikation der Epithelien

**Bisher haben wir gesehen:** Polarität, Basalmembran, Zellkontakte. **Um Epithelien** einem Organ zuzuordnen, braucht man die **Klassifikation** nach **Zellform** und **Schichtung**. Epithelien werden nach zwei Kriterien klassifiziert: **Zellform** und **Schichtung**:

| Epitheltyp | Vorkommen | Funktion |
|---|---|---|
| Einschichtiges **Plattenepithel** | Endothel (Blutgefäße), Mesothel (Serosa), Alveolen | Schnelle Diffusion |
| Einschichtiges **kubisches** Epithel | Schilddrüsenfollikel, Nierentubuli, Gallengänge | Sekretion, Resorption |
| Einschichtiges **Zylinderepithel** | Dünndarm (Mikrovilli!), Magen, Dickdarm | Resorption, Sekretion |
| **Mehrreihiges** (pseudo-) Flimmerepithel | Trachea, Bronchien, Eileiter | Mukoziliäre Clearance |
| Mehrschichtiges **verhorntes** Plattenepithel | Epidermis (Haut) | Mechanischer Schutz |
| Mehrschichtiges **unverhorntes** Plattenepithel | Ösophagus, Vagina, Mundhöhle | Schutz, bleibt feucht |
| **Urothel** (Übergangsepithel) | Harnblase, Ureter | Dehnbarkeit |

**Wichtige Details:**
- **Pseudostratifiziert** (mehrreihig): Alle Zellen berühren die Basalmembran, Kerne liegen auf verschiedenen Höhen → sieht mehrschichtig aus, ist es aber nicht! Kinozilien (9+2-Axonemstruktur, ~6 µm) transportieren Schleim rachenwärts.
- **Urothel**: Schirmzellen (Umbrella cells) bei leerer Blase gewölbt → bei Dehnung abgeflacht + Uroplakin-Membranen aus Vesikeln eingefaltet → Epithel kann sich verdoppeln ohne zu reißen
- **Verhorntes Plattenepithel**: 4 Schichten: Stratum basale (Mitose, Stammzellen) → spinosum (Desmosomen) → granulosum (Keratohyalin) → corneum (tote Korneozyten, Keratin)

> **Merke:** Pseudostratifiziert ≠ mehrschichtig — alle Zellen berühren Basalmembran! Urothel = Schirmzellen. Trachea = mehrreihiges Flimmerepithel.

![Epitheltypen und Organe](/grafik-zellmembran-integral-peripher.svg)

**Erklärung zur Grafik:** Integrale und periphere Proteine in Epithelzellen; die Polarität (apikal/basolateral) bestimmt Resorption, Sekretion und Barriere — von Dünndarm bis Alveole.

---

## Drüsenepithelien und Sekretionsarten

**Bisher haben wir gesehen:** Oberflächenepithelien nach Form und Schichtung. **Viele Epithelien** bilden aber auch **Drüsen** — sie sezernieren Flüssigkeiten oder Schleim. **Um das einzuteilen,** unterscheidet man **exokrin** (mit Ausführungsgang) vs. **endokrin** (ohne Gang, direkt ins Blut) und die **Sekretionsmechanismen** exokriner Drüsen.

**Exokrine Drüsen** (mit Ausführungsgang) vs. **endokrine Drüsen** (ohne Gang, direkt ins Blut).

Sekretionsmechanismen exokriner Drüsen:

| Typ | Mechanismus | Beispiele |
|---|---|---|
| **Merokrin** | Exozytose (kein Zellverlust) | Schweißdrüsen, Pankreas, Speicheldrüsen — **häufigste Form** |
| **Apokrin** | Abschnürung des apikalen Zellpols | Laktierende Brustdrüse, apokriner Schweiß (Axilla) |
| **Holokrin** | Gesamte Zelle zerfällt und wird zum Sekret | **Talgdrüsen** (Glandulae sebaceae) |

**Becherzellen:** Einzellige Schleimdrüsen im Darm- und Atemwegsepithel → sezernieren Muzin (merokrin) → Schleimfilm als Schutz und für mukoziliäre Clearance.

**Klinisch — Kartagener-Syndrom (Primäre Ziliendyskinesie):** Defekte Dynein-Arme der Kinozilien → kein Zilienanschlag → kein Schlimtransport → chronische Bronchitis, Bronchiektasen, Infertilität. Situs inversus (Organe spiegelverkehrt) in 50% der Fälle (Links-Rechts-Bestimmung in der Embryonalentwicklung durch Nodal-Zilien gestört).

> **Merke:** Merokrin = Exozytose (häufig); apokrin = Zellspitze abgeschnürt; holokrin = ganze Zelle = Sekret (Talgdrüse). Kartagener: Dynein-Defekt → Zilien bewegungslos.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Epithel-Grundprinzipien (polar, avaskulär, Basalmembran), Zellkontakte (Tight Junctions apikal, Desmosomen, Gap Junctions, Hemidesmosomen), Klassifikation und Organzuordnung (Flimmerepithel → Trachea, Urothel → Harnblase, verhornt/unverhornt), Sekretionsarten (merokrin, apokrin, holokrin), Kartagener-Syndrom (Dynein-Defekt).

**Ergänzend vertiefend:** Becherzellen, Schichten der Epidermis, Urothel-Schirmzellen.

**Häufige Fragen:**
- Zuordnung von Epitheltyp zu Organ (z. B. Flimmerepithel → Trachea, Urothel → Harnblase)
- Unterschied pseudostratifiziert vs. echt mehrschichtig
- Sekretionsmechanismen (merokrin, apokrin, holokrin) mit Organbeispielen

**Typische Prüfungsfallen / Verwechslungen:**
- Pseudostratifiziert ≠ mehrschichtig (alle Zellen berühren Basalmembran!)
- Plattenepithel verhornt (Epidermis) vs. unverhornt (Ösophagus, Vagina)
- Tight Junctions (apikal, Barriere) vs. Gap Junctions (Ionenaustausch)
- Desmosomen (mechanische Haftung) vs. Hemidesmosomen (Verankerung an Basalmembran)

**Prüfungsrelevante Zahlen/Fakten:**
- Dünndarm-Mikrovilli: Resorptionsfläche ca. 200 m²
- Kinozilien: 9+2-Axonemstruktur, ca. 6 µm Länge
- Ca. 85 % aller Karzinome entstehen aus entartetem Epithelgewebe
- Kartagener-Syndrom: Dynein-Arm-Defekt → Situs inversus + Bronchiektasen + Infertilität

---

## Zusammenfassung (ultrakompakt)

- **Grundprinzip**: Epithel polar (apikal ↔ basolateral), avaskulär, auf Basalmembran
- **Zellkontakte**: Tight Junctions (apikal, Barriere+Fence), Desmosomen (mechanisch), Gap Junctions (Ionenaustausch), Hemidesmosomen (Basalmembran)
- **Typen**: einschichtig (Diffusion/Resorption) → mehrreihig pseudostratifiziert (Atemwege, alle auf BM!) → mehrschichtig (Schutz: Haut verhornt, Ösophagus unverhornt) → Urothel (Dehnbarkeit, Schirmzellen)
- **Pseudostratifiziert ≠ mehrschichtig**: Alle Zellen berühren Basalmembran, Kerne nur auf verschiedenen Höhen
- **Drüsen**: merokrin (Exozytose, häufig), apokrin (Zellspitze), holokrin (ganze Zelle = Talgdrüse)
- **Klinisch**: Kartagener-Syndrom (Dynein-Defekt → Zilien starr → Bronchiektasen, Infertilität, Situs inversus)`,
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
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Welches Epithel kleidet die Trachea aus und welche Funktion erfüllt es?",
        answer:
          "Mehrreihiges (pseudostratifiziertes) Flimmerepithel mit Kinozilien und Becherzellen. Die Kinozilien transportieren Schleimfilm mit eingeschlossenen Fremdpartikeln rachenwärts (mukoziliäre Clearance).",
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
      ],
    },
    {
      id: "bio-2-02",
      title: "Binde- und Stützgewebe — Kollagen, Knochen und Knorpel",
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
      content: `## Einleitung

Knochen, Sehnen, Knorpel, Fettgewebe — all das ist **Bindegewebe**. Was diese Strukturen verbindet: Die eigentliche Masse ist nicht in den Zellen, sondern **außerhalb** — in der **extrazellulären Matrix (EZM)**. **Kollagen** ist das häufigste Protein des Körpers und gibt dem Bindegewebe seine Festigkeit. Je nach Kollagentyp und Matrix entsteht zugfeste Sehne, druckresistenter Knorpel oder mineralisierter Knochen. Für die Medizin ist das täglich relevant: Osteoporose, Arthrose, Skorbut — alles Bindegewebserkrankungen. Im MedAT werden Kollagentypen, Knochenumbau und Knorpelarten regelmäßig abgefragt.

**In diesem Kapitel lernst du:**
- die **extrazelluläre Matrix (EZM)** (Kollagen, Elastin, Proteoglykane) und Zellen des Bindegewebes
- **Kollagentypen I–IV** und ihre Zuordnung (Knochen/Sehne, Knorpel, Gefäße, Basalmembran)
- **Knochenumbau** (Osteoblasten, Osteoklasten, RANKL/OPG) und **Knorpeltypen** (hyalin, Faser, elastisch)
- **Fettgewebe** (weiß vs. braun, Leptin, UCP-1)

---

## Grundprinzip: Die Extrazelluläre Matrix (EZM)

**Um zu verstehen,** warum Bindegewebe so unterschiedlich aussehen kann (Sehne vs. Knorpel vs. Knochen), schauen wir zuerst, was **alle** Bindegewebe gemeinsam haben: Viel **mehr Matrix als Zellen**. Die **EZM** (der Raum zwischen den Zellen, gefüllt mit Fasern und Proteoglykanen) besteht aus:

1. **Kollagenfasern** (strukturelle Festigkeit — Zugfestigkeit und Druckresistenz)
2. **Elastinfasern** (Elastizität, Rückkehr in Ausgangsform)
3. **Proteoglykane** (Hyaluronsäure, Chondroitinsulfat, Heparansulfat): negativ geladen → binden Wasser → verleihen Druckresistenz. Beispiel: Aggrecan im Knorpel.
4. **Glykoproteine** (Fibronektin, Laminin): verknüpfen Zellen über **Integrine** mit der Matrix → Zelladhäsion, Wundheilung, Migration

**Zellen des Bindegewebes:**
- **Fibroblasten**: Hauptproduzenten der EZM in lockerem/straffem Bindegewebe
- **Chondroblasten → Chondrozyten**: produzieren Knorpelmatrix
- **Osteoblasten → Osteozyten → Osteoklasten**: Knochenumbau
- **Mastzellen, Makrophagen**: Immunfunktionen

> **Merke:** Bindegewebe = Matrix dominiert über Zellen. EZM aus Kollagen (Festigkeit) + Proteoglykane (Wasser/Druck) + Fibronektin (Adhäsion).

![Extrazelluläre Matrix und Zellen](/grafik-zellmembran-fettsaeuren.svg)

**Erklärung zur Grafik:** Zellen und umgebende Matrix; die Grafik veranschaulicht die Grenzfläche zwischen Zelle und EZM (Integrine, Kollagen, Proteoglykane).

---

## Kollagen — Struktur und Typen

**Bisher haben wir gesehen:** Die EZM enthält Kollagen, Elastin und Proteoglykane. **Kollagen** ist der wichtigste Strukturbaustein. Kollagen ist das **häufigste Protein im Körper** (~30 % des Gesamtproteins). Aufbau: drei Polypeptidketten → **Tripelhelix** (drei umeinander gewundene Ketten). Sequenz: **Gly-X-Y** (Glycin an jeder dritten Stelle, da kleinste Aminosäure im Zentrum).

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

**Bisher haben wir gesehen:** Kollagen I bildet die Grundlage für Knochen und Sehnen. **Im Knochen** wird die Matrix zusätzlich **mineralisiert** — das macht ihn hart und belastbar. **Aufbau:** Knochen = Kollagen I (30 %, Flexibilität) + **Hydroxyapatit** Ca₅(PO₄)₃OH (70 %, Härte). Diese Kombination macht Knochen einzigartig: weder zu spröde (wie reines Mineral) noch zu biegsam (wie reines Kollagen).

**Knochenumbau (~10 % der Knochenmasse/Jahr):**

| Zelle | Herkunft | Funktion | Marker |
|---|---|---|---|
| **Osteoblast** | Mesenchym (Stroma) | Baut Osteoid auf, mineralisiert | ALP ↑, Osteocalcin |
| **Osteozyten** | Eingemauerter Osteoblast | Mechanorezeption, Signalgebung über Canaliculi | — |
| **Osteoklasten** | Hämatopoetisch (Monozyten/Makrophagen) | Resorbiert Knochen über HCl (pH ~4,5) + Kathepsin K an Ruffled Border | TRAP ↑ |

**Regulation — RANKL/OPG-System:**
- Osteoblasten sezernieren **RANKL** → bindet an RANK auf Osteoklasten → aktiviert Resorption
- Osteoblasten sezernieren auch **OPG** (Osteoprotegerin) → fängt RANKL ab → hemmt Osteoklasten
- **Östrogen** ↑ OPG → weniger Resorption. Östrogenmangel (Menopause) → OPG ↓, RANKL dominiert → **Osteoporose**

**Therapeutisch:** Bisphosphonate (hemmen Osteoklasten, direkt), Denosumab (RANKL-Antikörper).

> **Merke:** OsteoBlast = Baut. OsteoKlast = Klaut (resorbiert). RANKL aktiviert Osteoklasten. Östrogen schützt Knochen.

![Knochenumbau und Ossifikation](/grafik-12-ossifikation.svg)

**Erklärung zur Grafik:** Osteoblasten und Osteoklasten beim Knochenumbau; die Grafik zeigt Auf- und Abbau sowie die Rolle von RANKL/OPG.

---

## Knorpeltypen im Vergleich

**Bisher haben wir gesehen:** Knochen wird ständig umgebaut. **Knorpel** dagegen ist **avaskulär** und heilt kaum. **Alle drei Knorpeltypen sind avaskulär** (keine Blutgefäße) → Ernährung nur über Diffusion → minimale Regenerationskapazität.

| Knorpeltyp | Zusammensetzung | Eigenschaften | Vorkommen |
|---|---|---|---|
| **Hyalin** | Kollagen II + viel Aggrecan | Druckresistent, glatt | Gelenkflächen, Trachealringe, fetales Skelett |
| **Faser** | Kollagen I dominiert | Zugfest UND druckresistent | Bandscheiben (Anulus fibrosus), Menisci, Symphysis pubica |
| **Elastisch** | Kollagen II + **Elastinfasern** | Biegsam, kehrt zurück | Ohrmuschel, Epiglottis, Auricula |

**Klinisch:** Arthrose = Degeneration des Hyalinknorpels der Gelenke → da avaskulär, kaum Selbstheilung → Gelenkersatz. Bandscheibenvorfall = Prolaps des Nucleus pulposus (gallertartiger Kern aus Proteoglykanen) durch den Faserknorpel-Anulus.

> **Merke:** Hyalin = Gelenk (Kollagen II). Faser = Bandscheibe/Meniskus (Kollagen I). Elastisch = Ohr/Epiglottis. Alle avaskulär = schlechte Heilung!

---

## Fettgewebe — Energiespeicher und mehr

**Bisher haben wir gesehen:** Bindegewebe als Stütz- und Füllgewebe (EZM, Kollagen, Knochen, Knorpel). **Fettgewebe** ist spezialisiertes Bindegewebe — es speichert Energie und wirkt endokrin. Fettgewebe ist spezialisiertes Bindegewebe:

**Weißes Fettgewebe** (univakuolär):
- Einzelner großer Lipidtropfen → Zellkern an Rand gedrängt (Siegelringform)
- Energiespeicher (~80 % des Körperfetts), Schutzpolster (perirenal, retroorbital), Isolation
- **Endokrines Organ**: sezerniert Adipokine:
  - **Leptin** → Sättigungssignal an Hypothalamus (Hunger hemmen)
  - **Adiponektin** → insulinsensibilisierend, antiinflammatorisch (↓ bei Adipositas!)
  - **TNF-α** → proinflammatorisch (↑ bei Adipositas → chronische Inflammation → Insulinresistenz)

**Braunes Fettgewebe** (multivakuolär):
- Viele kleine Lipidtropfen + viele Mitochondrien (daher braun)
- **UCP-1 (Thermogenin)**: Entkoppelt oxidative Phosphorylierung → Protonen fließen zurück ohne ATP zu machen → Energie als **Wärme** (Thermogenese)
- Wichtig bei Neugeborenen (interscapulär) → nimmt mit Alter ab

> **Merke:** Weißes Fett = Energiespeicher + Leptin (endokrin). Braunes Fett = Thermogenese via UCP-1 (entkoppelt Atmungskette).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** EZM (Kollagen, Elastin, Proteoglykane), Kollagentypen I–IV und Vorkommen, Knochenumbau (Osteoblast/Osteoklast, RANKL/OPG), Knorpeltypen (hyalin, Faser, elastisch, avaskulär), Vitamin C/Skorbut, Fettgewebe (weiß/braun, Leptin, UCP-1).

**Ergänzend vertiefend:** Bisphosphonate, Denosumab, Arthrose, Bandscheibenvorfall.

**Häufige Fragen:**
- Zuordnung der Kollagentypen I, II, III zu Organen und Strukturen
- Unterschied Osteoblasten vs. Osteoklasten (Herkunft, Funktion, Regulation)
- Warum heilt Knorpel schlecht? (Avaskularität)

**Typische Prüfungsfallen / Verwechslungen:**
- Kollagen I (Zugfestigkeit, Sehnen/Knochen) vs. Kollagen II (Druckresistenz, Knorpel)
- Hyalinknorpel (Gelenk, Kollagen II) vs. Faserknorpel (Bandscheibe, Kollagen I)
- Osteoblasten (mesenchymal) vs. Osteoklasten (hämatopoetisch, Makrophagen-Linie)
- Weißes Fettgewebe (Energiespeicher, ein großer Lipidtropfen) vs. braunes Fettgewebe (Thermogenese, viele Mitochondrien)

**Prüfungsrelevante Zahlen/Fakten:**
- Kollagen = ca. 30 % des Gesamtproteins im Körper
- Ca. 10 % der Knochenmasse werden jährlich umgebaut
- Osteoklasten: Ruffled Border, HCl (pH ~4,5), Kathepsin K
- Vitamin-C-Mangel → Skorbut (instabile Kollagenfibrillen)
- RANKL aktiviert Osteoklasten; OPG hemmt RANKL (Denosumab-Wirkprinzip)

---

## Zusammenfassung (ultrakompakt)

- **EZM** = Kollagenfasern (Festigkeit) + Proteoglykane (Wasser/Druck) + Fibronektin (Adhäsion) — dominiert über Zellen im Bindegewebe
- **Kollagen I** (Sehnen/Knochen, zugfest) | **II** (Knorpel, druckresistent) | **III** (Gefäße/Wundheilung, dehnbar) | **IV** (Basalmembran)
- **Vitamin C** → Prolyl-/Lysylhydroxylase → Tripelhelix-Stabilität; Mangel = Skorbut
- **Knochenumbau**: Osteoblast (mesenchymal, baut auf) ↔ Osteoklast (hämatopoetisch, resorbiert via HCl + Kathepsin K); Gleichgewicht via RANKL/OPG
- **Osteoporose**: Östrogenmangel → OPG ↓, RANKL dominiert → Osteoklasten > Osteoblasten → Knochenmasse ↓
- **Knorpel avaskulär** → schlechte Heilung; 3 Typen: Hyalin (Gelenk), Faser (Bandscheibe, Kollagen I), Elastisch (Ohr, Elastin)
- **Braunes Fett**: UCP-1 entkoppelt Atmungskette → Wärme statt ATP; **weißes Fett**: Leptin (Sättigung), Adiponektin (Insulinsensitivität)`,
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
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Welche Zellen bauen Knochen ab, und aus welcher Zelllinie stammen sie?",
        answer:
          "Osteoklasten bauen Knochen ab. Sie entstammen der hämatopoetischen Linie (Monozyten/Makrophagen-Vorläufer). Sie sind mehrkernig und resorbieren Knochenmatrix durch Säure (HCl) und Kathepsin K in der Howship-Lakune.",
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
            "Chondrozyten sind posimitotisch und können sich nicht teilen.",
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
      ],
    },
    {
      id: "bio-2-03",
      title: "Muskelgewebe — Vom Sarkomer zur Kontraktion",
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
      content: `## Einleitung

Muskeln machen Bewegung möglich — aber das stimmt nur zu einem Drittel. Es gibt **drei Muskeltypen**: **Skelettmuskel** für willkürliche Bewegungen, **Herzmuskel** für den automatischen Blutpump, und **glatte Muskulatur** für alles im Inneren (Darm, Gefäße, Blase). Was alle verbindet: Kontraktion durch **Aktin-Myosin-Interaktion**, betrieben von ATP. Das Grundprinzip ist die **Gleitfilamenttheorie** — Filamente gleiten aneinander, das **Sarkomer** wird kürzer. Für den MedAT sind das Sarkomer, der Troponin/Ca²⁺-Schalter und die Unterschiede der drei Muskeltypen absolute Klassiker.

**In diesem Kapitel lernst du:**
- die **drei Muskeltypen** (Skelett, Herz, glatt) und ihre Steuerung (willkürlich/unwillkürlich)
- **Sarkomeraufbau** (Z-Scheibe, A-Bande, I-Bande, H-Zone) und was bei Kontraktion passiert
- den **Ca²⁺-Schalter** (Troponin/Tropomyosin) und die Rolle von **ATP** (Lösen, nicht Kraftschlag)
- **Herzmuskel** (Gap Junctions, kein Tetanus) und **glatte Muskulatur** (Calmodulin statt Troponin)

---

## Grundprinzip: Die drei Muskeltypen

**Um die folgenden Abschnitte einzuordnen:** Zuerst der Überblick — welche Muskeltypen gibt es und wie unterscheiden sie sich?

| Merkmal | Skelettmuskel | Herzmuskel | Glatte Muskulatur |
|---|---|---|---|
| Streifung | Quergestreift | Quergestreift | Keine Sarkomere |
| Steuerung | **Willkürlich** | Unwillkürlich | Unwillkürlich |
| Kerne | Mehrkernig (peripher) | **1–2 (zentral)** | Einkernig (zentral) |
| Kopplung | NMJ (ACh, Nikotin-R.) | **Gap Junctions** (Glanzstreifen) | Gap Junctions |
| Ca²⁺-Schalter | **Troponin C** | **Troponin C** | **Calmodulin → MLCK** |
| Tetanus | Möglich | **Unmöglich** (lange Refraktärzeit) | Tonisch möglich |
| Biomarker | CK-MM | **Troponin I/T**, CK-MB | — |

> **Merke:** Herzmuskel = quergestreift (wie Skelett) + einkernig + Gap Junctions + kein Tetanus. Glatte Muskulatur = kein Troponin → Calmodulin stattdessen.

![Herzzyklus und Kontraktion](/grafik-6-herzzyklus.svg)

**Erklärung zur Grafik:** Herzmuskelkontraktion im EKG-Kontext; die Grafik veranschaulicht die Koordination von Vorhof und Kammer (Gap Junctions, kein Tetanus).

---

## Sarkomerstruktur: Grundprinzip der Querstreifung

**Bisher haben wir gesehen:** Drei Muskeltypen, alle mit Aktin und Myosin. **Wo** genau gleiten die Filamente? Im **Sarkomer** — der kleinsten kontraktilen Einheit. Das **Sarkomer** ist die kleinste kontraktile Einheit — von **Z-Scheibe zu Z-Scheibe** (~2,2 µm in Ruhe):

**Aufbau (von Z zu Z):**
- **I-Bande** (hell): Nur Aktin-Dünnfilamente → **wird bei Kontraktion kürzer**
- **A-Bande** (dunkel): Myosin-Dickfilamente + überlappende Aktinfilamente → **bleibt konstant** (Myosinlänge ändert sich nicht!)
- **H-Zone** (in der Mitte der A-Bande): Nur Myosin, kein Aktin → **verschwindet bei maximaler Kontraktion**
- **M-Linie**: Verankert Myosinfilamente in der Mitte
- **Z-Scheiben** rücken zusammen → Sarkomer wird kürzer

**Strukturproteine:**
- **Titin**: "Molekulare Feder" von Z-Scheibe zu M-Linie (via Myosin) → Ruhespannung + Schutz vor Überdehnung
- **Nebulin**: Parallel zu Aktin, legt Filamentlänge fest

> **Merke:** Bei Kontraktion: **I-Bande ↓, H-Zone ↓, A-Bande = konstant**. Filamente gleiten, nicht schrumpfen!

![Aktin-Myosin und Sarkomer](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Ionenkanäle und Transport — Ca²⁺-Freisetzung aus dem SR und Rückpumpe (SERCA) steuern die Kontraktion; die Grafik ergänzt die elektromechanische Kopplung.

---

## Troponin-Tropomyosin-Schalter: Wie Ca²⁺ Kontraktion auslöst

**Bisher haben wir gesehen:** Die Struktur des Sarkomers. **Aber was löst die Kontraktion aus?** Der Schalter ist **Ca²⁺** — es bindet an Troponin und gibt die Myosin-Bindungsstellen frei.

**Ruhezustand:** Tropomyosin liegt in der Furche des Aktinstrangs und **blockiert** die Myosin-Bindungsstellen.

**Aktivierung — Schritt für Schritt:**
1. Aktionspotential erreicht das T-Tubulus-System
2. Spannungsgesteuerte Rezeptoren (DHPR) aktivieren **Ryanodin-Rezeptoren (RyR1)** im sarkoplasmatischen Retikulum (SR)
3. **Ca²⁺ strömt aus SR** ins Zytosol (0,1 µM → ~10 µM)
4. Ca²⁺ bindet **Troponin C** → Konformationsänderung des Troponin-Komplexes
5. **Tropomyosin verschiebt sich** → Myosin-Bindungsstellen auf Aktin freigegeben
6. **Kreuzbrückenbildung**: Myosinkopf bindet Aktin → Kraftschlag (Power Stroke)

**Kreuzbrückenzyklus — ATP-Rolle:**
- Kraftschlag: ADP + Pi werden freigesetzt (gespeicherte Energie → mechanische Arbeit)
- **ATP bindet Myosinkopf → Lösen von Aktin** (Rigor mortis: kein ATP → Myosin bleibt haften!)
- ATP-Hydrolyse → Myosinkopf wiederaufgespannt → neuer Zyklus

**Entspannung:** SERCA (SR-Ca²⁺-ATPase) pumpt Ca²⁺ zurück ins SR → Troponin/Tropomyosin blockiert wieder.

> **Merke:** Ca²⁺ → Troponin C → Tropomyosin weg → Myosin bindet Aktin → Kraftschlag. **ATP löst Myosin** (nicht für den Kraftschlag selbst!). Kein ATP = Rigor mortis.

---

## Motorische Einheit und Kraftregulation

**Bisher haben wir gesehen:** Wie eine einzelne Faser kontrahiert. **Wie dosiert der Körper die Kraft?** Über **Rekrutierung** und **Frequenz**. **Motorische Einheit** = 1 Alpha-Motoneuron + alle seine Muskelfasern. Übertragung am NMJ (neuromuskuläre Endplatte): ACh → nikotinerge Rezeptoren → Endplattenpotential → AP.

**Kraftregulation durch zwei Mechanismen:**
1. **Rekrutierung** (Spatial Summation): Mehr motorische Einheiten aktivieren → mehr Kraft
2. **Frequenzerhöhung** (Temporal Summation): Schnellere AP-Folge → Summation → Tetanus

**Einheitsgröße und Funktion:**
- Klein (M. interossei, Augenmuskel: ~10 Fasern) → feine Kraftdosierung (Schreiben, Blickbewegungen)
- Groß (M. gastrocnemius: bis 2000 Fasern) → grobe Kraft

**Glatte Muskulatur — anderer Ca²⁺-Schalter:**
Kein Troponin! Ca²⁺ bindet **Calmodulin** → aktiviert **MLCK** (Myosin-Leichtketten-Kinase) → phosphoryliert Myosin → Kontraktion. Gesteuert durch ANS, Hormone, Dehnung.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Sarkomer (Z-Scheibe, A-/I-Bande, H-Zone; I und H kürzer, A konstant), Gleitfilamenttheorie, Ca²⁺/Troponin/Tropomyosin, ATP löst Myosin (Rigor mortis), drei Muskeltypen (Skelett/Herz/glatt), Herzmuskel (Gap Junctions, kein Tetanus), glatt (Calmodulin/MLCK), Troponin I/T als Herzinfarkt-Marker. **Glatte Muskulatur** (z. B. Darm): typisch **ausdauernde Tätigkeit**, unwillkürlich — nicht schnelle Kontraktion, nicht willkürlich beeinflussbar, keine aktive Streckung.

**Ergänzend vertiefend:** Motorische Einheit, Rekrutierung, Titin/Nebulin.

**Häufige Fragen:**
- Welche Sarkomerbanden verändern sich bei Kontraktion? (I-Bande und H-Zone kürzer, A-Bande konstant)
- Rolle von Ca²⁺, Troponin und Tropomyosin im Kreuzbrückenzyklus
- Vergleich Skelettmuskel vs. Herzmuskel vs. glatte Muskulatur

**Typische Prüfungsfallen / Verwechslungen:**
- A-Bande (bleibt konstant, enthält Myosin) vs. I-Bande (wird kürzer, nur Aktin)
- ATP wird für das Lösen (nicht für den Kraftschlag) benötigt
- Herzmuskel: quergestreift aber einkernig (vs. Skelettmuskel: mehrkernig)
- Glatte Muskulatur: Calmodulin statt Troponin, keine Sarkomere
- Tetanus unmöglich im Herzmuskel (lange absolute Refraktärzeit)

**Prüfungsrelevante Zahlen/Fakten:**
- Sarkomerlänge in Ruhe: ca. 2,2 µm
- Troponin I und T: Herzinfarkt-Marker, nachweisbar 3–6 h nach Infarkt
- Motorische Einheit: 10 Fasern (Feinmotorik) bis 2000 Fasern (Grobmotorik)
- Rigor mortis löst sich nach 24–48 h durch Proteolyse

---

## Zusammenfassung (ultrakompakt)

- **Grundprinzip**: Gleitfilamenttheorie — Aktin und Myosin gleiten aneinander, Sarkomer kürzer; Filamente selbst bleiben gleich lang
- **Sarkomer**: Z–Z; **I-Bande** (Aktin, ↓) + **A-Bande** (Myosin, = konstant!) + **H-Zone** (Myosin, ↓ bis weg)
- **Ca²⁺-Schalter**: Ca²⁺ → Troponin C → Tropomyosin verschiebt → Myosin bindet Aktin → Kraftschlag
- **ATP**: Löst Myosinkopf nach Kraftschlag (nicht für den Schlag selbst). Fehlt ATP → **Rigor mortis**
- **Herzmuskel**: quergestreift, einkernig, Gap Junctions (Glanzstreifen), kein Tetanus (lange Refraktärzeit)
- **Glatte Muskulatur**: kein Troponin → Ca²⁺/Calmodulin → MLCK → Myosin-Phosphorylierung → Kontraktion
- **Klinisch**: Kardiales Troponin I/T = sensitiver Herzinfarktmarker (3–6 h nach Infarkt)`,
      lernziele: [
        "Sarkomerstruktur (Z-Scheibe, A-Bande, I-Bande, H-Zone) und Veränderungen bei Kontraktion beschreiben",
        "Gleitfilamenttheorie mit Rolle von Ca²⁺, Troponin und Tropomyosin erklären",
        "Die drei Muskeltypen strukturell und funktionell vergleichen",
      ],
      sections: [],
      diagram: "sarkomer",

      merksätze: [
        "Sarkomer: Z-Z-Grenzen; bei Kontraktion kürzer werden I-Bande und H-Zone; A-Bande bleibt konstant.",
        "Ca²⁺ → Troponin C → Tropomyosin weg → Myosin bindet Aktin → Kraftschlag nach ATP-Hydrolyse.",
        "Herzmuskel: quergestreift, einkernig, Gap Junctions in Glanzstreifen, kein Tetanus möglich.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Warum kann der Herzmuskel im Gegensatz zur Skelettmuskulatur keinen Tetanus entwickeln?",
        answer:
          "Das Herzmyokard hat eine sehr lange absolute Refraktärzeit (ca. 200–300 ms), die fast so lang ist wie die mechanische Kontraktion. Dadurch kann kein neues Aktionspotential ausgelöst werden, bevor sich der Herzmuskel nicht vollständig erschlafft hat — tetanische Dauerkontrak­tion wäre für die Pumpfunktion fatal.",
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
      ],
    },
    {
      id: "bio-2-04",
      title: "Nervengewebe — Neuronen, Gliazellen und Myelinisierung",
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
      content: `## Einleitung

Das Gehirn enthält ~86 Milliarden **Neuronen** — aber fast doppelt so viele **Gliazellen**. Gliazellen sind nicht bloß Stützzellen; sie bilden die **Blut-Hirn-Schranke**, isolieren Axone mit **Myelin**, räumen tote Zellen auf und regulieren Neurotransmitter. Das Nervensystem ist also ein Zusammenspiel aus **Neuronen** (Signalleitung) und **Gliazellen** (alles andere). Das wichtigste Prinzip: **Myelin** isoliert Axone → das Aktionspotential springt von **Schnürring** zu Schnürring (**saltatorisch**) → 100× schneller, 10× energiesparender. Für den MedAT sind der Vergleich Schwann-Zelle vs. Oligodendrozyt, saltatorische Leitung und Astrozyten/Mikroglia Prüfungsklassiker.

**In diesem Kapitel lernst du:**
- den **Aufbau des Neurons** (Soma, Dendriten, Axon, Axonhügel) und wo das Aktionspotential startet
- **Myelinisierung**: Schwann-Zelle (PNS, 1 Segment) vs. Oligodendrozyt (ZNS, bis 50 Segmente)
- **Saltatorische Leitung** und warum sie schneller und energiesparender ist
- **Gliazellen** (Astrozyten, Oligodendrozyten, Mikroglia) und ihre Funktionen

---

## Grundprinzip: Aufbau eines Neurons

**Um Nervenleitung zu verstehen,** brauchst du zuerst den Bauplan einer Nervenzelle. **Neuron = Grundbaustein der Nervenleitung:**
- **Soma** (Zellkörper): Zellkern, Synthese, Metabolismus
- **Dendriten**: Kurze, stark verzweigte Fortsätze → empfangen Signale (Input)
- **Axon**: Langer Fortsatz → leitet Erregungen **vom Zellkörper weg** (Output). **Dendriten** leiten zum Zellkörper hin (Input). Die Fortsätze, über die Erregungen **vom Zellkörper weg**geleitet werden, heißen **Axone** (nicht Dendriten, Synapsen, Aktionspotentiale oder Ranvier-Schnürringe).
- **Axonhügel** (Axon Initial Segment): Höchste Na⁺-Kanalddichte → hier wird das Aktionspotential initiiert (Schwellenwert ~-55 mV)
- **Präsynaptische Endknöpfchen**: Vesikel mit Neurotransmittern → Synapse zum nächsten Neuron

**Neurontypen:** sensorisch (Input), motorisch (Output), Interneuron (Verarbeitung)

![Membran und Ionenkanäle](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Axon und Dendriten mit Ionenkanälen und Transport; die Grafik veranschaulicht die Grundlage für Ruhepotenzial und Aktionspotential (Na⁺/K⁺-ATPase, Kanäle).

---

## Myelinisierung: Schwann-Zellen vs. Oligodendrozyten

**Bisher haben wir gesehen:** Wie ein Neuron aufgebaut ist. **Damit Signale schnell laufen,** werden viele Axone mit **Myelin** umhüllt. Die **Myelinscheide** ist eine Lipid-Protein-Isolationsschicht um das Axon. Zwischen Myelinsegmenten liegen die **Ranvier-Schnürringe** — unbedeckte Stellen mit hoher Na⁺-Kanaldichte (Nav1.6).

| Merkmal | **Schwann-Zelle** | **Oligodendrozyt** |
|---|---|---|
| Lokalisation | **PNS** | **ZNS** |
| Segmente/Zelle | **1** (ein Segment, ein Axon) | **Bis zu 50** (verschiedene Axone!) |
| Zellkern | Außerhalb der Myelinscheide | — |
| Regeneration | **Gut** (Büngner-Bänder + BDNF/NGF) | **Schlecht** (Nogo-A, MAG hemmen) |
| Klinisch | Guillain-Barré-Syndrom | **Multiple Sklerose** |

**Klinisch — Multiple Sklerose (MS):** Autoreaktive T-Zellen zerstören Oligodendrozyten → Demyelinisierung im ZNS → Leitungsverlangsamung/-block → wechselnde neurologische Ausfälle (Sehstörungen, Paresen, Sensibilitätsverlust). Plaques (Vernarbungen) typischerweise periventrikular, im Corpus callosum und im Rückenmark.

> **Merke:** Schwann-Zelle (PNS) = **1 Segment**. Oligodendrozyt (ZNS) = **bis 50 Segmente**. PNS regeneriert (Büngner-Bänder), ZNS nicht (Nogo-A).

![Myelin und Schnürringe](/grafik-zellmembran-integral-peripher.svg)

**Erklärung zur Grafik:** Myelinscheide als Isolationsschicht; die Grafik ergänzt die Vorstellung von Segmenten und Ranvier-Schnürringen für die saltatorische Leitung.

---

## Saltatorische Erregungsleitung

**Bisher haben wir gesehen:** Myelin umhüllt Axone. **Was bringt das für die Leitungsgeschwindigkeit?** Das AP springt von Schnürring zu Schnürring statt kontinuierlich zu laufen.

**Kontinuierlich** (unmyelinisierte C-Fasern): Jede Membranstelle muss depolarisiert werden → 0,5–2 m/s, energieintensiv.

**Saltatorisch** (myelinisiert): Aktionspotential springt von Schnürring zu Schnürring:
1. Zwischen Schnürringen: Myelin isoliert → kein Ionenstrom → Signal wird elektrotonisch (passiv) weitergegeben
2. An Ranvier-Schnürring: Na⁺-Kanäle regenerieren das AP
3. Na⁺/K⁺-ATPase muss nur an Schnürringen arbeiten → **energiesparend**

**Geschwindigkeit nach Fasertyp:**
- **Aα-Fasern** (motorisch, propriozeptiv, dick myelinisiert): **70–120 m/s**
- **Aβ-Fasern** (Berührung, Vibration): 30–70 m/s
- **Aδ-Fasern** (schneller Schmerz, Temperatur): 5–30 m/s
- **C-Fasern** (langsamer Schmerz, Temperatur, unmyelinisiert): **0,5–2 m/s**

> **Merke:** Saltatorisch = springt von Schnürring zu Schnürring: **120 m/s** vs. **2 m/s** kontinuierlich. Energiesparend, weil Na⁺/K⁺-ATPase nur an Schnürringen aktiv.

---

## Gliazellen im ZNS — Übersicht und Funktionen

**Bisher haben wir gesehen:** Neuronen und Myelinisierung. **Neben Oligodendrozyten** gibt es im ZNS weitere **Gliazellen** mit unterschiedlichen Aufgaben.

| Gliazelle | Herkunft | Hauptfunktion |
|---|---|---|
| **Astrozyten** | Neuroektoderm | BHS-Induktion, K⁺-Puffer, Glutamat-Reuptake, Glianarbe |
| **Oligodendrozyten** | Neuroektoderm | Myelinisierung (bis 50 Segmente) |
| **Mikroglia** | **Mesoderm** (Dottersack-Makrophagen!) | Immunabwehr, Phagozytose |
| **Ependymzellen** | Neuroektoderm | Liquorproduktion (Plexus choroideus, ~500 mL/Tag) |

**Astrozyten — Details:**
- Perivaskuläre Endfüße umhüllen Kapillaren → **induzieren Tight Junctions** im Endothel → Blut-Hirn-Schranke (BHS). Astrozyten bilden Tight Junctions nicht selbst!
- Puffern K⁺ nach Aktionspotentialen (verhindert Überexzitation)
- **Glutamat-Reuptake** (EAAT-Transporter) → zu Glutamin → zurück an Neuron → verhindert Exzitotoxizität
- Bei ZNS-Verletzung: reaktive Astrogliose → **Glianarbe** (behindert Axonregeneration)

**Mikroglia — Details:**
- Einzige Gliazelle **mesodermalen Ursprungs** (alle anderen neuroektodermal!)
- Ruhezustand: ramifiziert (verzweigt), überwacht Parenchym
- Aktiviert: amöboid → phagozytiert Trümmer, sezerniert IL-1β, TNF-α, IL-6
- Chronische Aktivierung → neurodegenerativ (Alzheimer, Parkinson)

> **Merke:** Mikroglia = **mesodermale Makrophagen** des ZNS — einzige nicht-neuroektodermale Gliazelle. Astrozyten: BHS-Induktion + Glutamat-Reuptake + K⁺-Puffer.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Neuron (Soma, Dendriten, Axon, Axonhügel), Schwann-Zelle (PNS, 1 Segment) vs. Oligodendrozyt (ZNS, bis 50 Segmente), saltatorische Leitung (Schnürringe, Geschwindigkeit), Astrozyten (BHS-Induktion, Glutamat-Reuptake, K⁺-Puffer), Mikroglia (mesodermale Makrophagen), PNS-Regeneration vs. ZNS (Nogo-A, Glianarbe), Multiple Sklerose.

**Ergänzend vertiefend:** Ependymzellen, Fasertypen Aα/C, Nav1.6.

**Häufige Fragen:**
- Schwann-Zelle vs. Oligodendrozyt: Anzahl myelinisierter Segmente und Lokalisation
- Warum ist saltatorische Leitung schneller und energiesparender?
- Funktion der Astrozyten an der Blut-Hirn-Schranke

**Typische Prüfungsfallen / Verwechslungen:**
- Schwann-Zelle (PNS, 1 Segment) vs. Oligodendrozyt (ZNS, bis 50 Segmente)
- Astrozyten induzieren die Tight Junctions, bilden sie aber nicht selbst
- Mikroglia (Immunzellen des ZNS) vs. Astrozyten (Stützfunktion, BHS)
- Axonhügel (Aktionspotential-Initiation) vs. Ranvier-Schnürringe (AP-Regeneration)
- Büngner-Bänder (PNS-Regeneration) vs. Nogo-A (ZNS-Regenerationshemmung)

**Prüfungsrelevante Zahlen/Fakten:**
- Myelinisierte Aα-Fasern: bis 120 m/s Leitungsgeschwindigkeit
- Unmyelinisierte C-Fasern: nur 0,5–2 m/s
- Ein Oligodendrozyt kann bis zu 50 Axonsegmente gleichzeitig myelinisieren
- Na⁺-Kanaldichte an Ranvier-Schnürringen besonders hoch (Nav1.6)

---

## Zusammenfassung (ultrakompakt)

- **Neuron**: Soma + Dendriten (Input) + Axon (Output); AP-Initiation am Axonhügel (höchste Na⁺-Kanaldichte)
- **Myelinisierung**: Schwann-Zelle (PNS, **1 Segment**) vs. Oligodendrozyt (ZNS, **bis 50 Segmente**)
- **Saltatorisch**: AP springt von Ranvier-Schnürring zu Schnürring → **70–120 m/s** vs. 0,5–2 m/s kontinuierlich; energiesparend
- **PNS regeneriert** (Büngner-Bänder + neurotrophe Faktoren); **ZNS nicht** (Nogo-A, Glianarbe)
- **Multiple Sklerose**: T-Zellen → Demyelinisierung von Oligodendrozyten → neurologische Ausfälle
- **Astrozyten**: BHS-Induktion (Tight Junctions induzieren), K⁺-Puffer, Glutamat-Reuptake, Glianarbe
- **Mikroglia**: Einzige mesodermale Gliazelle = Makrophagen des ZNS (ramifiziert → amöboid)`,
      lernziele: [
        "Aufbau des Neurons (Soma, Axon, Dendriten, Axonhügel) und seine Funktion erklären",
        "Gliazellen des ZNS und PNS benennen und ihre Aufgaben (besonders Myelinisierung) beschreiben",
        "Saltatorische Erregungsleitung erklären und ihren Vorteil gegenüber kontinuierlicher Leitung benennen",
      ],
      sections: [],
      diagram: "action-potential",

      merksätze: [
        "Oligodendrozyten (ZNS) vs. Schwann-Zellen (PNS): Beide myelinisieren; Schwann-Zellen fördern PNS-Regeneration.",
        "Saltatorische Leitung: Aktionspotential springt von Ranvier-Schnürring zu Schnürring — 100× schneller als kontinuierlich.",
        "Astrozyten: Blut-Hirn-Schranke, K⁺-Puffer, Glutamat-Reuptake; Mikroglia = Makrophagen des ZNS.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Worin unterscheiden sich Schwann-Zellen und Oligodendrozyten hinsichtlich Anzahl der myelinisierten Axonsegmente?",
        answer:
          "Eine Schwann-Zelle myelinisiert genau ein Axonsegment (zwischen zwei Ranvier-Schnürringen) eines einzigen Axons. Ein Oligodendrozyt kann hingegen bis zu 50 Axonsegmente verschiedener Axone gleichzeitig myelinisieren.",
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
      ],
    },

    // === from kap3-anatomie-physiologie ===
    {
      id: "bio-3-01",
      title: "Nervensystem",
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
      content: `## Einleitung

Das Nervensystem ist das schnellste Kommunikationssystem des Körpers — Signale können mit 120 m/s reisen. Es gliedert sich in **ZNS** (Gehirn + Rückenmark: Verarbeitung) und **PNS** (Spinal-/Hirnnerven: Weiterleitung). Das vegetative (autonome) Nervensystem steuert unwillkürlich innere Organe und ist in zwei Gegenspieler aufgeteilt: **Sympathikus** ("fight-or-flight") und **Parasympathikus** ("rest-and-digest"). Die Grundbausteine der Signalübertragung — Aktionspotential und Synapse — gehören zu den absoluten MedAT-Schwerpunktthemen dieses Kapitels.

**In diesem Kapitel lernst du:**
- **Sympathikus** und **Parasympathikus** (Ursprung, Neurotransmitter, Wirkung auf Herz, Bronchien, Pupille, GI)
- **Synaptische Transmission** (Ca²⁺, SNARE, ionotrop/metabotrop, EPSP/IPSP)
- **Aktionspotential** (Ruhepotential, Schwelle, Refraktärzeit, Alles-oder-Nichts)
- **Reflexbogen** (monosynaptisch vs. polysynaptisch)

---

## Autonomes Nervensystem — Sympathikus und Parasympathikus

Das vegetative Nervensystem (ANS) reguliert Herzfrequenz, Blutdruck, Atmung, Verdauung und Sekretion ohne bewusste Kontrolle. Beide Systeme besitzen eine **zweineuronalige Verschaltung**: präganglionäres Neuron → Ganglion → postganglionäres Neuron → Effektor. Der grundlegende Unterschied liegt in Ursprung, Ganglionlage, Neurotransmitter und Rezeptoren:

- **Sympathikus** (thorakolumbal, T1–L2): kurze präganglionäre Fasern → para- oder prävertebrale Ganglien → lange postganglionäre Fasern. Postganglionärer NT: **Noradrenalin** (Ausnahme: Schweißdrüsen → ACh). Rezeptoren: α₁ (Vasokonstriktion, Mydriasis), α₂ (Peristaltik ↓), β₁ (Herz ↑), β₂ (Bronchodilatation, Glykogenolyse), β₃ (Lipolyse)
- **Parasympathikus** (kraniosakral, CN III/VII/IX/X + S2–S4): lange präganglionäre Fasern → organnahe oder intramuralen Ganglien → kurze postganglionäre Fasern. NT: **Acetylcholin** (prä- und postganglionär). Rezeptoren: M₂ (Herz ↓ via K⁺-Kanäle), M₃ (Drüsen, glatte Muskulatur)

**Wichtig:** Präganglionäre Fasern beider Systeme verwenden ACh an nikotinischen Rezeptoren (Ganglion). Der Unterschied liegt im postganglionären NT!

> **Merke:** **Sympathikus** (fight-or-flight, thorakolumbal [T1-L2], Noradrenalin, α/β-Rezeptoren): Herz ↑ (β1, Frequenz/Kontraktilität), Bronchodilatation (β2), Mydriasis (α1, Pupille), Peristaltik ↓ (α2), Glykogenolyse ↑ (β2), Lipolyse ↑ (β3). **Parasympathikus** (rest-and-digest, kraniosakral [Hirnnerven III/VII/IX/X, S2-S4], Acetylcholin, M2/M3): Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3), Miktion (M3).

| Organ | Sympathikus | Parasympathikus |
| --- | --- | --- |
| Herz | Frequenz ↑, Kontraktilität ↑ (β1) | Frequenz ↓ (M2, Vagus) |
| Bronchien | Erweiterung (β2) | Konstriktion (M3) |
| Pupille | Mydriasis (α1) | Miosis (M3) |
| GI-Trakt | Peristaltik ↓ (α2) | Peristaltik ↑ (M3) |
| Blase | Sphinkter-Kontraktion (α1) | Detrusor-Kontraktion (M3) |
| Leber | Glykogenolyse ↑ (β2) | — |
| Neurotransmitter | Noradrenalin | Acetylcholin |

![Signalübertragung und Transporter](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Ionenkanäle und Transporter an der Synapse; die Grafik veranschaulicht die Grundlage für Neurotransmitter-Freisetzung (Ca²⁺) und Wiederaufnahme.

![Redox und Energie](/grafik-redox.svg)

**Erklärung zur Grafik:** Energiebereitstellung in Neuronen; die Grafik ergänzt den Zusammenhang zwischen Stoffwechsel und Na⁺/K⁺-ATPase für Ruhe- und Aktionspotenzial.

---

## Synaptische Transmission

An einer **chemischen Synapse** wird ein elektrisches Signal (Aktionspotential) in ein chemisches Signal (Neurotransmitter-Freisetzung) umgewandelt und postsynaptisch wieder in ein elektrisches Signal (EPSP oder IPSP). Jede Synapse besteht aus präsynaptischem Endknöpfchen, synaptischem Spalt (~20–40 nm) und postsynaptischer Membran.

**Ablauf der synaptischen Transmission:**
1. AP erreicht das Axonterminal → spannungsgesteuerte **Ca²⁺-Kanäle** (P/Q-Typ im ZNS) öffnen
2. Ca²⁺ strömt ein → bindet **Synaptotagmin** (Ca²⁺-Sensor an Vesikeln)
3. **SNARE-Komplex** (Synaptobrevin/VAMP [vesikulär] + Syntaxin + SNAP-25 [Membran]) zieht Membranen zusammen → **Exozytose** (Quantal Release: ~5.000 NT-Moleküle/Vesikel)
4. Neurotransmitter diffundiert durch Spalt → bindet postsynaptische **Rezeptoren**
5. Postsynaptisches Potential: **EPSP** (Depolarisation; Glutamat/ACh → Na⁺ rein) oder **IPSP** (Hyperpolarisation; GABA → Cl⁻ rein)

**Rezeptortypen:**
- **Ionotrop** (ligandengesteuerte Ionenkanäle, schnell ms): AMPA (Glutamat → Na⁺), NMDA (Glutamat → Na⁺/Ca²⁺, Mg²⁺-Block!), GABA_A (→ Cl⁻), nikotinisch (ACh → Na⁺)
- **Metabotrop** (G-Protein-gekoppelt, langsam Sek.–Min.): D1/D2 (Dopamin), mGluR, M1–M5 (ACh), α/β (Noradrenalin)

**Klinisch:** Botulinum-Toxin spaltet SNARE (Synaptobrevin) → keine Exozytose → **schlaffe Lähmung**. Tetanus-Toxin hemmt GABA/Glycin-Freisetzung → **spastische Krämpfe**.

> **Merke:** **Synapse:** Präsynaptisch (Ca²⁺-Kanäle, SNARE [Synaptobrevin + Syntaxin + SNAP-25], Synaptotagmin [Ca²⁺-Sensor]) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Quantal Release) → Postsynaptisch (ionotrop [AMPA, NMDA, GABA_A, nikotinisch], metabotrop [D1/D2, 5-HT, α/β, M1-M5]). **EPSP** (Depolarisation, Glutamat/Acetylcholin) vs. **IPSP** (Hyperpolarisation, GABA/Glycin).

---

## Aktionspotential

Das Ruhepotential beträgt ~-70 mV und wird durch Na⁺/K⁺-ATPase und K⁺-Leckkanäle aufrechterhalten. Bei Schwellenreizung (~-55 mV) öffnen spannungsgesteuerte Na⁺-Kanäle, Depolarisation auf +40 mV, dann Repolarisation durch K⁺-Kanäle und Inaktivierung der Na⁺-Kanäle.

> **Merke:** **Aktionspotential:** Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → **Na⁺-Kanäle öffnen** (Depolarisation +40 mV) → Na⁺-Kanäle **inaktivieren** (Inaktivierungstor) + **K⁺-Kanäle öffnen** (Repolarisation) → Hyperpolarisation. **Refraktärzeit:** Absolut (Na⁺-Kanäle inaktiviert, KEIN AP) + relativ (Na⁺-Kanäle erholen, K⁺-Kanäle offen, überschwellig). **Alles-oder-Nichts-Prinzip** (Schwelle überschritten → volles AP).

---

## Saltatorische Erregungsleitung

Myelinisierte Axone leiten Aktionspotentiale saltatorisch: Das Aktionspotential springt von Ranvier-Schnürring zu Ranvier-Schnürring, da die Internodien elektrisch isoliert sind. Dies ermöglicht Leitungsgeschwindigkeiten von ~120 m/s und ist energieeffizienter als kontinuierliche Leitung.

> **Merke:** **Saltatorische Erregungsleitung** (myelinisierte Axone): **Ranvier-Schnürringe** (unmyelinisiert, ~1 μm, Na⁺-Kanäle ↑↑↑ [Nav1.6]) → Aktionspotential regeneriert. **Internodien** (~1 mm, Myelin [80% Lipide], Isolation) → Depolarisation breitet sich passiv aus (elektrotonisch, kein Ionenverlust). Aktionspotential **springt** von Schnürring zu Schnürring → schnell (~120 m/s vs. ~1 m/s unmyelinisiert), energieeffizient (Na⁺/K⁺-ATPase nur an Schnürringen).

---

## Reflexbogen

Der Reflexbogen besteht aus Rezeptor, afferenter Faser, (Interneuron), efferenter Faser und Effektor. Der monosynaptische Eigenreflex (z.B. Patellarsehnenreflex) verbindet Ia-Faser direkt mit dem α-Motoneuron ohne Interneuron. Polysynaptische Fremdreflexe (z.B. Fluchtreflex) schalten mehrere Interneurone ein.

**Vergleich Reflextypen:**
- **Monosynaptisch** (Eigenreflex): 1 Synapse, sehr schnell. Rezeptor = Muskelspindel, Afferenz = Ia-Faser (~120 m/s), keine Interneurone. Gleichzeitig: reziproke Hemmung des Antagonisten (über Ia-Interneuron)
- **Polysynaptisch** (Fremdreflex): mehrere Synapsen + Interneurone. Beispiel Fluchtreflex: Nozizeptor → Aδ-Faser → Interneurone → Beuger aktiviert + Strecker gehemmt + gekreuzte Streckreaktion (kontralateral)

> **Merke:** **Monosynaptischer Eigenreflex** (Patellarsehne): Muskelspindel → Ia-Faser → **direkt** α-Motoneuron (1 Synapse, keine Interneurone). **Polysynaptischer Fremdreflex** (Fluchtreflex): Nozizeptor → mehrere Interneurone → komplexe motorische Antwort. Reflexe laufen spinal ab — **unabhängig vom Bewusstsein**!

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Vegetatives Nervensystem (Sympathikus vs. Parasympathikus), Wirkung auf Herz/Bronchien/Pupille/GI-Trakt, Acetylcholin vs. Noradrenalin, Rezeptoren (nikotinisch/muskarinisch, α/β). **Atem- und Kreislaufzentrum** befinden sich im **Hirnstamm** (Medulla oblongata + Pons) — nicht im Großhirn, Kleinhirn oder Rückenmark.

**Ergänzend vertiefend:** Enterisches NS; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Sympathikus vs. Parasympathikus: Wirkung auf Herz, Bronchien, Pupille, GI-Trakt
- Ablauf des Aktionspotentials (Phasen, Ionenkanäle, Refraktärzeit)
- Synaptische Transmission: SNARE-Komplex, ionotrope vs. metabotrope Rezeptoren

**Typische Prüfungsfallen / Verwechslungen:**
- **„Verminderung der Schlagfrequenz des Herzens“ ist KEINE Wirkung des Sympathikus** — das ist Parasympathikus (M2, Vagus). Sympathikus **erhöht** Herzfrequenz (β1).
- Sympathikus: Noradrenalin postganglionär, aber ACh präganglionär (im Ganglion nikotinisch!)
- EPSP (Glutamat, Depolarisation) vs. IPSP (GABA, Hyperpolarisation)
- Absolute Refraktärzeit (Na⁺-Kanäle inaktiviert, KEIN AP) vs. relative (überschwelliger Reiz nötig)
- Monosynaptischer Eigenreflex (1 Synapse, Ia-Faser direkt) vs. polysynaptischer Fremdreflex (Interneurone)
- NMDA-Rezeptor: Mg²⁺-Block bei Ruhepotential, Koinzidenzdetektor für Lernen

**Prüfungsrelevante Zahlen/Fakten:**
- Ruhepotential: ca. -70 mV; Schwelle: ca. -55 mV; Overshoot: ca. +40 mV
- Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein (elektrogen)
- Saltatorische Leitung: bis 120 m/s; unmyelinisiert: ca. 1 m/s
- N. vagus (X): wichtigster parasympathischer Nerv (Herz, Lunge, GI-Trakt bis linke Kolonflexur)

---

## Zusammenfassung (ultrakompakt)

- **Sympathikus** (fight-or-flight, T1-L2, Noradrenalin): Herz ↑ (β1), Bronchodilatation (β2), Mydriasis (α1), Peristaltik ↓
- **Parasympathikus** (rest-and-digest, kraniosakral, ACh): Herz ↓ (M2/Vagus), Bronchokonstriktion (M3), Miosis, Peristaltik ↑
- **Aktionspotential**: Ruhepotential -70 mV → Schwelle -55 mV → Na⁺ rein (+40 mV) → K⁺ raus → Repolarisation. Alles-oder-Nichts!
- **Refraktärzeit**: absolut (Na⁺-Kanäle inaktiviert, kein AP) + relativ (überschwelliger Reiz nötig)
- **Synapse**: AP → Ca²⁺ rein → Synaptotagmin → SNARE-Komplex → Vesikel-Fusion → Neurotransmitter → EPSP (Glutamat) oder IPSP (GABA/Glycin)
- **Saltatorisch**: AP springt von Ranvier-Schnürring zu Schnürring → 120 m/s (statt 1 m/s), energiesparend
- **Reflexbogen**: mono- (Patellarsehne: Ia-Faser direkt auf α-Motoneuron) vs. polysynaptisch (Fluchtreflex: Interneurone)
- **Klinisch**: MS (Demyelinisierung), Parkinson (Dopamin ↓, L-DOPA), Myasthenia gravis (AChR-Antikörper), Lidocain (Na⁺-Kanal-Blocker)`,
      lernziele: [
        "Das Nervensystem in ZNS und PNS (somatisch und autonom) gliedern und die Funktion jedes Teils beschreiben.",
        "Die Wirkungen von Sympathikus und Parasympathikus auf Herz, Bronchien, Pupille, Magen-Darm und Blase vergleichen und die jeweiligen Neurotransmitter und Rezeptoren benennen.",
        "Den Ablauf der synaptischen Transmission an einer chemischen Synapse einschließlich SNARE-Komplex, Neurotransmitter-Freisetzung und postsynaptischer Potentiale (EPSP/IPSP) erklären.",
        "Das Aktionspotential mit seinen Phasen (Depolarisation, Repolarisation, Hyperpolarisation) und dem Alles-oder-Nichts-Prinzip erläutern.",
        "Den Unterschied zwischen monosynaptischem (Patellarsehnenreflex) und polysynaptischem Reflex (Fluchtreflex) anhand des Reflexbogens darstellen.",
      ],
      sections: [],
      diagram: "nervensystem-übersicht",

      merksätze: [
        "**Sympathikus** (fight-or-flight, thorakolumbal [T1-L2], Noradrenalin, α/β-Rezeptoren): Herz ↑ (β1, Frequenz/Kontraktilität), Bronchodilatation (β2), Mydriasis (α1, Pupille), Peristaltik ↓ (α2), Glykogenolyse ↑ (β2), Lipolyse ↑ (β3). **Parasympathikus** (rest-and-digest, kraniosakral [Hirnnerven III/VII/IX/X, S2-S4], Acetylcholin, M2/M3): Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3), Miktion (M3).",
        "**Synapse:** Präsynaptisch (Ca²⁺-Kanäle, SNARE [Synaptobrevin + Syntaxin + SNAP-25], Synaptotagmin [Ca²⁺-Sensor]) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Quantal Release) → Postsynaptisch (ionotrop [AMPA, NMDA, GABA_A, nikotinisch], metabotrop [D1/D2, 5-HT, α/β, M1-M5]). **EPSP** (Depolarisation, Glutamat/Acetylcholin) vs. **IPSP** (Hyperpolarisation, GABA/Glycin).",
        "**Aktionspotential:** Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → **Na⁺-Kanäle öffnen** (Depolarisation +40 mV) → Na⁺-Kanäle **inaktivieren** (Inaktivierungstor) + **K⁺-Kanäle öffnen** (Repolarisation) → Hyperpolarisation. **Refraktärzeit:** Absolut (Na⁺-Kanäle inaktiviert, KEIN AP) + relativ (Na⁺-Kanäle erholen, K⁺-Kanäle offen, überschwellig). **Alles-oder-Nichts-Prinzip** (Schwelle überschritten → volles AP).",
        "**Saltatorische Erregungsleitung** (myelinisierte Axone): **Ranvier-Schnürringe** (unmyelinisiert, ~1 μm, Na⁺-Kanäle ↑↑↑ [Nav1.6]) → Aktionspotential regeneriert. **Internodien** (~1 mm, Myelin [80% Lipide], Isolation) → Depolarisation breitet sich passiv aus (elektrotonisch, kein Ionenverlust). Aktionspotential **springt** von Schnürring zu Schnürring → schnell (~120 m/s vs. ~1 m/s unmyelinisiert), energieeffizient (Na⁺/K⁺-ATPase nur an Schnürringen).",
      ],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Was versteht man unter dem Ruhepotenzial einer Nervenzelle?",
        answer:
          "Das Ruhepotenzial (~-70 mV) entsteht durch ungleiche Ionenverteilung und die Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein). K⁺-Leckkanäle → K⁺ diffundiert nach außen → Innenseite negativ. Die Nernst-Gleichung beschreibt das Gleichgewichtspotenzial für einzelne Ionen.",
      },
      selfTest: [
        {
          question: "Was sind die Hauptunterschiede zwischen Sympathikus und Parasympathikus?",
          options: [
            "Beide sind identisch",
            "Sympathikus (fight-or-flight): Thorakolumbal (T1-L2), Noradrenalin (postganglionär), α/β-Rezeptoren, Herz ↑ (β1), Bronchodilatation (β2), Mydriasis (α1), Peristaltik ↓ (α2). Parasympathikus (rest-and-digest): Kraniosakral (Hirnnerven III/VII/IX/X, S2-S4), Acetylcholin (prä+postganglionär), M2/M3-Rezeptoren, Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3), Peristaltik ↑ (M3)",
            "Nur Sympathikus existiert",
            "Parasympathikus nutzt Noradrenalin",
            "Beide steigern Herzfrequenz",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **SYMPATHIKUS** und **PARASYMPATHIKUS** sind antagonistische Systeme des autonomen Nervensystems (unwillkürlich, innere Organe). **SYMPATHIKUS (fight-or-flight):** (1) **URSPRUNG:** Thorakolumbal (Seitenhorn, T1-L2). (2) **GANGLIEN:** Grenzstrang (paravertebral, entlang Wirbelsäule) + prävertebral (Ganglion coeliacum, mesentericum superius/inferius). (3) **NEUROTRANSMITTER:** **Noradrenalin** (postganglionär, an Effektor), **Acetylcholin** (präganglionär, im Ganglion, nikotinische Rezeptoren). (4) **REZEPTOREN (Effektor):** **α1** (Gq, Vasokonstriktion, Mydriasis), **α2** (Gi, Peristaltik ↓), **β1** (Gs, Herz: Frequenz ↑, Kontraktilität ↑), **β2** (Gs, Bronchodilatation, Vasodilatation Skelettmuskulatur, Glykogenolyse Leber), **β3** (Gs, Lipolyse Fettgewebe). (5) **EFFEKTE:** Herz ↑ (β1, SA-Knoten), Bronchodilatation (β2, glatte Muskulatur relaxiert), Mydriasis (α1, M. dilatator pupillae), Peristaltik ↓ (α2, β2), Sphinkter-Kontraktion (α1, Blase/Darm), Vasokonstriktion (α1, Haut/Splanchnikus), Glykogenolyse ↑ (β2, Leber → Glukose), Lipolyse ↑ (β3, Fettgewebe → freie Fettsäuren), Adrenalin-Freisetzung (Nebennierenmark, chromaffine Zellen). **PARASYMPATHIKUS (rest-and-digest):** (1) **URSPRUNG:** Kraniosakral (Hirnnerven III [N. oculomotorius, Pupille], VII [N. facialis, Speichel-/Tränendrüsen], IX [N. glossopharyngeus, Parotis], **X [N. vagus, Herz/Lunge/Magen-Darm bis linke Kolonflexur]**, + S2-S4 [Blase, Rektum, Genitalien]). (2) **GANGLIEN:** Organnah oder in Organwand (z.B. Plexus myentericus [Meissner, Auerbach], Ganglion ciliare). (3) **NEUROTRANSMITTER:** **Acetylcholin** (prä- + postganglionär). (4) **REZEPTOREN (Effektor):** **M2** (Gi, Herz: Frequenz ↓, SA-Knoten, K⁺-Kanäle ↑, cAMP ↓), **M3** (Gq, Bronchien: Konstriktion, Speicheldrüsen: Sekretion ↑, Magen-Darm: Peristaltik ↑, Blase: Miktion [Detrusor kontrahiert], Pupille: Miosis [M. sphincter pupillae]). (5) **EFFEKTE:** Herz ↓ (M2, Vagus), Bronchokonstriktion (M3), Miosis (M3, Nahakkommodation), Speichelsekretion ↑ (M3, dünnflüssig), Peristaltik ↑ (M3), Miktion (M3), Insulinsekretion ↑ (M3, Pankreas-β-Zellen). A ist falsch. C, D, E sind falsch.",
          difficulty: 1,
          tags: ["sympathikus", "parasympathikus", "vegetatives nervensystem"],
        },
        {
          question: "Wie funktioniert die synaptische Transmission an einer chemischen Synapse?",
          options: [
            "Synapse funktioniert ohne Neurotransmitter",
            "Aktionspotential → Axonterminale → Ca²⁺-Kanäle öffnen (P/Q-Typ, N-Typ) → Ca²⁺ rein → Synaptotagmin (Ca²⁺-Sensor) bindet Ca²⁺ → SNARE-Komplex (Synaptobrevin + Syntaxin + SNAP-25) → Vesikel-Fusion → Neurotransmitter-Freisetzung (Exozytose, Quantal Release) → Rezeptoren (ionotrop [AMPA, NMDA, GABA_A, nikotinisch] oder metabotrop [D1/D2, 5-HT, α/β, M1-M5]) → EPSP (Depolarisation) oder IPSP (Hyperpolarisation)",
            "Synapse ist nur in Bakterien",
            "Synapse benötigt kein Ca²⁺",
            "Synapse ist elektrisch",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **CHEMISCHE SYNAPSE** überträgt Signale via Neurotransmitter (häufigster Typ, im Gegensatz zu elektrischer Synapse [Gap Junctions, selten, z.B. Herzmuskel]). **ABLAUF (synaptische Transmission):** (1) **AKTIONSPOTENTIAL** erreicht präsynaptisches **Axonterminale** (Depolarisation). (2) Spannungsgesteuerte **CA²⁺-KANÄLE öffnen** (P/Q-Typ [Ca_v2.1, häufigste in ZNS-Synapsen], N-Typ [Ca_v2.2, PNS], L-Typ [Ca_v1.x, Herz]). (3) **Ca²⁺ strömt ein** (von ~0.1 μM → ~10-100 μM, hochgradig lokalisiert an aktiven Zonen). (4) Ca²⁺ bindet **SYNAPTOTAGMIN** (Ca²⁺-Sensor, Protein in Vesikel-Membran, bindet 5 Ca²⁺). (5) **SNARE-KOMPLEX** (v-SNARE [Vesikel]: **Synaptobrevin/VAMP** + t-SNARE [Plasmamembran]: **Syntaxin** + **SNAP-25**) → Reißverschluss-Mechanismus → Membranen fusionieren. (6) **NEUROTRANSMITTER-FREISETZUNG** (Exozytose, **Quantal Release**: 1 Vesikel = 1 Quantum = ~5000 Moleküle). (7) Neurotransmitter diffundieren durch **synaptischen Spalt** (~20-40 nm, ~0.5 ms). (8) Binden **POSTSYNAPTISCHE REZEPTOREN:** (a) **IONOTROPE REZEPTOREN** (ligandengesteuerte Ionenkanäle, SCHNELL [ms]): **AMPA** (Glutamat → Na⁺/K⁺, Depolarisation), **NMDA** (Glutamat → Na⁺/Ca²⁺, Mg²⁺-Block bei -70 mV), **GABA_A** (GABA → Cl⁻, Hyperpolarisation), **nikotinisch** (Acetylcholin → Na⁺, neuromuskuläre Endplatte). (b) **METABOTROPE REZEPTOREN** (G-Protein-gekoppelt, LANGSAM [Sekunden-Minuten]): **D1/D2** (Dopamin), **5-HT1-7** (Serotonin), **α1/α2, β1/β2** (Noradrenalin), **M1-M5** (Acetylcholin). (9) **POSTSYNAPTISCHES POTENTIAL:** **EPSP** (Exzitatorisches PSP, Depolarisation, Schwelle näher) ODER **IPSP** (Inhibitorisches PSP, Hyperpolarisation, Schwelle ferner). Summation: Temporal (zeitlich) + Spatial (räumlich) → Schwelle (-55 mV) überschritten → Aktionspotential. (10) **NEUROTRANSMITTER-INAKTIVIERUNG:** Wiederaufnahme (SERT, DAT, NET, EAAT, GAT), enzymatischer Abbau (Acetylcholinesterase, MAO, COMT), Diffusion. **KLINISCH:** Botulinustoxin (spaltet SNARE → KEINE Vesikel-Fusion → Muskelparalyse), Tetanospasmin (hemmt GABA/Glycin-Freisetzung → Dauererregung → Krämpfe). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: ["synapse", "neurotransmitter", "synaptische transmission"],
        },
        {
          question: "Welche Neurotransmitter sind exzitatorisch und welche inhibitorisch im ZNS?",
          options: [
            "Alle Neurotransmitter sind exzitatorisch",
            "Exzitatorisch: Glutamat (AMPA [Na⁺], NMDA [Ca²⁺/Na⁺, Mg²⁺-Block], Kainate, ~90% exzitatorische Synapsen, Lernen/LTP). Inhibitorisch: GABA (GABA_A [Cl⁻], GABA_B [K⁺ ↑], ~20% inhibitorische Synapsen, Benzodiazepine verstärken), Glycin (Glycin-Rezeptor [Cl⁻], Rückenmark/Hirnstamm, Strychnin blockiert)",
            "Nur Glutamat existiert",
            "GABA ist exzitatorisch",
            "Glycin ist nur in Bakterien",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Neurotransmitter im ZNS sind entweder **EXZITATORISCH** (Depolarisation, EPSP, Aktionspotential-Wahrscheinlichkeit ↑) oder **INHIBITORISCH** (Hyperpolarisation, IPSP, Aktionspotential-Wahrscheinlichkeit ↓). **EXZITATORISCH: GLUTAMAT** (häufigster exzitatorischer Neurotransmitter, ~90% aller exzitatorischen Synapsen im ZNS). **Rezeptoren:** (1) **AMPA-Rezeptor** (ionotrop, ligandengesteuert): Glutamat → **Na⁺ rein, K⁺ raus** → Depolarisation (schnell, ms) → EPSP. (2) **NMDA-Rezeptor** (ionotrop): Glutamat + **Glycin** (Ko-Agonist, Glycin-Bindungsstelle) → **Na⁺/Ca²⁺ rein** → Depolarisation. **Mg²⁺-Block** (bei Ruhepotential -70 mV blockiert Mg²⁺ Kanal, wird bei Depolarisation [~-40 mV] entfernt) → Koinzidenzdetektor (erfordert Depolarisation [AMPA] + Glutamat [präsynaptisch]). Ca²⁺-Einstrom → **LTP** (Long-Term Potentiation, synaptische Plastizität, Lernen/Gedächtnis). (3) **Kainate-Rezeptor** (ionotrop, Na⁺). (4) **mGluR** (metabotrop, mGluR1-8, G-Protein-gekoppelt). **Wiederaufnahme:** **EAAT1/2** (Excitatory Amino Acid Transporter, Astrozyten) → Glutamin-Synthetase (Glutamat → Glutamin) → Glutamin zu Neuronen (Glutaminase → Glutamat) → Glutamat-Glutamin-Zyklus. **KLINISCH:** Exzitotoxizität (Schlaganfall, Ischämie → Glutamat ↑ → NMDA-Rezeptor-Überaktivierung → Ca²⁺-Überladung → Neuronen-Tod), Memantin (NMDA-Rezeptor-Antagonist, Alzheimer), Ketamin (NMDA-Antagonist, Anästhesie, Antidepressivum). **INHIBITORISCH: GABA (γ-Aminobuttersäure) + GLYCIN.** (1) **GABA** (~20% aller Synapsen im ZNS, Interneurone, Cortex, Basalganglien). **Rezeptoren:** **GABA_A** (ionotrop, ligandengesteuert): GABA → **Cl⁻ rein** → Hyperpolarisation (IPSP). **Benzodiazepine** (Diazepam, Lorazepam) binden allosterische Stelle → verstärken GABA-Wirkung (Anxiolytika, Sedierung, Antikonvulsiva). **Barbiturate** (Phenobarbital) = GABA_A-Agonisten (längere Kanalöffnung). **GABA_B** (metabotrop, Gi): K⁺-Kanäle ↑ → Hyperpolarisation. **Wiederaufnahme:** **GAT** (GABA-Transporter). **Synthese:** Glutamat + Glutamat-Decarboxylase (GAD, Vitamin B6-abhängig) → GABA. (2) **GLYCIN** (häufigster inhibitorischer Neurotransmitter in Rückenmark/Hirnstamm). **Rezeptor:** Glycin-Rezeptor (ionotrop, Cl⁻) → Hyperpolarisation. **STRYCHNIN** (Gift) blockiert Glycin-Rezeptor → KEINE Inhibition → Krämpfe (Tetanus-ähnlich). **KLINISCH:** Epilepsie (GABA ↓ → Exzitations-Inhibitions-Ungleichgewicht → Anfälle, Therapie: Valproat [GABA ↑], Benzodiazepine), Angststörungen (GABA ↓, Benzodiazepine), Tetanus/Strychnin (Glycin-Blockade → Dauererregung). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: ["neurotransmitter", "exzitatorisch", "inhibitorisch"],
        },
        {
          question: "Was passiert während eines Aktionspotentials auf molekularer Ebene?",
          options: [
            "Aktionspotential ist nur in Gliazellen",
            "Ruhepotential ~-70 mV (Na⁺/K⁺-ATPase [3 Na⁺ raus, 2 K⁺ rein], K⁺-Leckkanäle). Schwelle ~-55 mV → spannungsgesteuerte Na⁺-Kanäle öffnen (Nav1.x) → Na⁺ rein → Depolarisation (+40 mV, Overshoot) → Na⁺-Kanäle inaktivieren (Inaktivierungstor) + K⁺-Kanäle öffnen (Kv1.x, verzögert) → K⁺ raus → Repolarisation (-70 mV) → Hyperpolarisation (~-80 mV, K⁺-Kanäle offen) → Ruhepotential. Refraktärzeit (absolut [Na⁺ inaktiviert], relativ [Na⁺ erholen, K⁺ offen]). Alles-oder-Nichts-Prinzip",
            "Aktionspotential benötigt kein Na⁺",
            "Aktionspotential ist nur in Pflanzen",
            "Aktionspotential ist graduiert",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **AKTIONSPOTENTIAL** ist eine schnelle, vorübergehende Depolarisation der Membran (alles-oder-nichts-Prinzip), Grundlage der Informationsweiterleitung in Neuronen. **RUHEPOTENTIAL (~-70 mV):** (1) **Na⁺/K⁺-ATPase:** 3 Na⁺ raus, 2 K⁺ rein (ATP-abhängig, elektrogen ~-10 mV). (2) **K⁺-Leckkanäle** (Kir2.1, immer offen): K⁺ strömt aus (Konzentrationsgradient: innen 140 mM, außen 4 mM) → Membran negativ. (3) Nernst-Gleichung: E_K = -90 mV (K⁺-Gleichgewichtspotential), E_Na = +60 mV (Na⁺-Gleichgewichtspotential). (4) Goldman-Gleichung (berücksichtigt Permeabilität aller Ionen) → Ruhepotential ~-70 mV. **AKTIONSPOTENTIAL-ABLAUF:** (1) **SCHWELLENREIZUNG:** Membran depolarisiert (z.B. EPSP, synaptische Transmission) → **Schwellenpotential** (~-55 mV) erreicht. (2) **DEPOLARISATION (Aufstrich):** **Spannungsgesteuerte Na⁺-Kanäle** (Nav1.1-1.9, Aktivierungstor öffnet ab ~-55 mV) → Na⁺ strömt ein (Treibkraft: Konzentrationsgradient [außen 145 mM, innen 12 mM] + elektrischer Gradient [innen negativ]) → Membran depolarisiert SCHNELL (~1 ms) → **Overshoot** (~+40 mV, nahe E_Na = +60 mV). **Alles-oder-Nichts-Prinzip:** Schwelle überschritten → vollständiges AP (~100 mV Amplitude), unterschwellig → kein AP. (3) **REPOLARISATION (Abstrich):** (a) **Na⁺-Kanäle INAKTIVIEREN** (Inaktivierungstor schließt, spannungsabhängig, ~1-2 ms nach Öffnung). (b) **Spannungsgesteuerte K⁺-Kanäle** (Kv1.1-1.9) öffnen (verzögert, ~0.5-1 ms nach Depolarisation). (c) K⁺ strömt aus → Membran repolarisiert (Richtung -70 mV, ~2 ms). (4) **HYPERPOLARISATION (Undershoot):** K⁺-Kanäle bleiben kurz offen → Membran hyperpolarisiert (kurzzeitig < -70 mV, ~-80 mV, ~2-4 ms). (5) **RÜCKKEHR zu Ruhepotential:** K⁺-Kanäle schließen → Ruhepotential -70 mV (Na⁺/K⁺-ATPase restauriert Gradienten langsam, über viele APs). **REFRAKTÄRZEIT:** (1) **ABSOLUT** (~1-2 ms): Na⁺-Kanäle inaktiviert (Inaktivierungstor geschlossen) → KEIN AP auslösbar. (2) **RELATIV** (~3-4 ms): Na⁺-Kanäle erholen sich (einige offen) + K⁺-Kanäle noch offen (Hyperpolarisation) → AP nur bei überschwelligem Reiz auslösbar. **BEDEUTUNG:** Begrenzt AP-Frequenz (~1000 Hz maximal), verhindert Rückwärtspropagation (AP läuft nur vorwärts). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: ["aktionspotential", "na-kanäle", "k-kanäle"],
        },
        {
          question:
            "Was ist ein monosynaptischer Reflex und wie unterscheidet er sich von einem polysynaptischen Reflex?",
          options: [
            "Beide sind identisch",
            "Monosynaptischer Reflex (Eigenreflex, z.B. Patellarsehnenreflex): Rezeptor (Muskelspindel) → Ia-Faser → DIREKT α-Motoneuron (EINE Synapse) → Effektor (Quadriceps kontrahiert), reziproke Hemmung (Interneuron → Antagonist gehemmt). Polysynaptischer Reflex (Fremdreflex, z.B. Fluchtreflex): Rezeptor (Nozizeptor) → MEHRERE Synapsen (Interneurone [exzitatorisch + inhibitorisch]) → α-Motoneuron → Effektor (Beuger kontrahiert, Strecker gehemmt, gekreuzte Streckreaktion)",
            "Nur monosynaptische Reflexe existieren",
            "Polysynaptische Reflexe haben keine Interneurone",
            "Beide benötigen Bewusstsein",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: Reflexbogen-Typen unterscheiden sich in Anzahl der Synapsen (1 vs. mehrere) und Komplexität. **MONOSYNAPTISCHER REFLEX (Eigenreflex, Dehnungsreflex):** **EINE SYNAPSE** zwischen sensorischem Neuron und Motoneuron (einfachster Reflex). **Beispiel: PATELLARSEHNENREFLEX (Kniesehnenreflex):** (1) **STIMULUS:** Schlag auf Patellarsehne (unterhalb Kniescheibe). (2) **REZEPTOR:** **Muskelspindel** (Dehnungsrezeptor im M. quadriceps femoris, intrafusale Muskelfasern mit Ia-Faser-Innervation). Dehnung → Ia-Faser erregt. (3) **AFFERENZ:** **Ia-Faser** (große myelinisierte Faser, ~120 m/s, schnellste) → Hinterwurzel (Spinalganglion) → Rückenmark (L2-L4). (4) **SYNAPSE (EINE!):** Ia-Faser synapsiert **DIREKT** auf **α-Motoneuron** (im Vorderhorn, KEINE Interneurone dazwischen) → monosynaptisch. (5) **EFFERENZ:** α-Motoneuron → Vorderwurzel → N. femoralis → M. quadriceps. (6) **EFFEKTOR:** M. quadriceps **kontrahiert** → Beinstreckung (kick). (7) **GLEICHZEITIG (reziproke Hemmung):** Ia-Faser aktiviert **Interneuron (Ia-Interneuron, inhibitorisch)** → hemmt α-Motoneuron des **Antagonisten** (M. biceps femoris [Beuger]) → Antagonist relaxiert (verhindert Widerstand). **FUNKTION:** Haltungskontrolle (schnelle Korrektur bei Dehnung, propriozeptive Rückkopplung), Muskeltonus-Aufrechterhaltung. **KLINISCH:** Areflexie (fehlende Reflexe): Periphere Nervenschädigung (Ia-Faser, α-Motoneuron), Rückenmarkläsion (Hinterwurzel), Guillain-Barré. Hyperreflexie (gesteigerte Reflexe): Pyramidenbahnläsion (Schlaganfall, MS, obere Motoneurone geschädigt → keine Hemmung → α-Motoneurone überaktiv), Spastik. **POLYSYNAPTISCHER REFLEX (Fremdreflex, Schutzreflex):** **MEHRERE SYNAPSEN** (Interneurone eingeschaltet) → komplexer. **Beispiel: FLUCHTREFLEX (Beugereflex, Schmerzreflex):** (1) **STIMULUS:** Schmerz (Tritt auf Nagel). (2) **REZEPTOR:** **Nozizeptoren** (freie Nervenendigungen, Aδ-Fasern [schneller Schmerz, myelinisiert, ~20 m/s] + C-Fasern [langsamer Schmerz, unmyelinisiert, ~1 m/s]). (3) **AFFERENZ:** Aδ-/C-Faser → Hinterwurzel → Rückenmark (Hinterhorn). (4) **SYNAPSEN (MEHRERE!):** (a) Aδ-Faser → **Interneuron 1 (exzitatorisch)** → α-Motoneuron (Beugemuskulatur). (b) Aδ-Faser → **Interneuron 2 (inhibitorisch)** → α-Motoneuron (Streckmuskulatur) → reziproke Hemmung (Strecker relaxiert). (c) **Gekreuzte Streckreaktion:** Aδ-Faser → **Interneuron 3 (kontralaterales Bein, kommissural)** → α-Motoneuron (Strecker kontralateral) → Gegenbein streckt (stützt Körper, verhindert Umfallen). (5) **EFFEKTOR:** Beugemuskulatur kontrahiert (M. biceps femoris, M. semitendinosus, M. semimembranosus) → Bein wird **hochgezogen** (weg von Schmerzquelle). **FUNKTION:** Schutzreaktion (schnelle Flucht vor Schmerz/Verletzung). A, C, D, E sind falsch.",
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
      content: `## Einleitung

Ohne Sinnesorgane keine Wahrnehmung. Die verschiedenen Sinnesorgane lösen alle dasselbe grundlegende Problem: Wie wird ein physikalischer oder chemischer Reiz (Licht, Schall, Druck, Temperatur) in ein elektrisches Signal umgewandelt, das das Gehirn verarbeiten kann? Das nennt sich **Transduktion**. Bemerkenswert: Im Auge führt mehr Licht paradoxerweise zur **Hyperpolarisation** der Photorezeptoren — das ist MedAT-relevant. Im Ohr ermöglichen Gehörknöchelchen die Schallübertragung von Luft auf Flüssigkeit (Impedanzanpassung). In der Haut sind fünf verschiedene Rezeptortypen für Berührung, Vibration, Druck, Dehnung und Schmerz zuständig. MedAT-Schwerpunkte: Fototransduktion, Akkommodation, Tonotopie des Corti-Organs.

**In diesem Kapitel lernst du:**
- **Transduktion** (Reiz → elektrisches Signal) und Fototransduktion (Licht → Hyperpolarisation)
- **Auge**: Stäbchen vs. Zapfen, Rhodopsin-Kaskade, Akkommodation (Ziliarmuskel, Zonulafasern)
- **Ohr**: Impedanzanpassung, Tonotopie, Haarzellen (Tip-Links, K⁺-reiche Endolymphe)
- **Haut**: Schichten (Epidermis/Dermis/Subcutis), Rezeptortypen (Meissner, Pacini, Merkel, Ruffini, freie Endigungen)

---

## Grundprinzip: Transduktion — Reize als elektrische Signale

Alle Sinnesorgane folgen demselben Grundprinzip: Ein physikalischer oder chemischer Reiz wird in ein elektrisches Signal umgewandelt. Die Art der Transduktion unterscheidet sich je nach Sinn:

1. **Photorezeptoren** (Auge): Lichtquanten → Rhodopsin-Aktivierung → G-Protein-Kaskade → cGMP ↓ → Ionenkanäle schließen → **Hyperpolarisation** (atypisch — weil Photorezeptoren im Dunkeln depolarisiert sind!)
2. **Mechanorezeptoren** (Ohr, Haut): Mechanische Verformung → Mechanosensitive Ionenkanäle öffnen direkt → **Depolarisation**
3. **Chemorezeptoren** (Nase, Zunge): Moleküle binden G-Protein-gekoppelte Rezeptoren → Second Messenger → Rezeptorpotential

> **Merke:** Transduktion = Reiz → elektrisches Signal. Auge: Licht → Hyperpolarisation (paradox, weil Dunkelzustand = depolarisiert durch offene cGMP-Kanäle). Ohr/Haut: Mechanische Kraft → Kanalöffnung → Depolarisation.

---

## Auge — Aufbau und Fototransduktion

**Anatomie des Auges** (drei Schichten von außen nach innen):
- **Tunica fibrosa** (äußere Hülle): Sklera (weiß, mechanischer Schutz) + Kornea (transparent, Lichtbrechung ~40 dpt, avaskulär, durch Kammerwasser ernährt)
- **Uvea** (Gefäßhaut): Choroidea (Blutversorgung der Retina) + Ziliarkörper (Ziliarmuskel → Akkommodation; Kammerwasserproduktion) + Iris (regelt Pupillengröße)
- **Retina** (innere Nervenschicht): Photorezeptoren → Bipolarzellen → Ganglienzellen → N. opticus → Gehirn

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

![Fototransduktion und Sinnesorgane](/grafik-transduktion-sinne.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt die Fototransduktion (Licht → Rhodopsin → Transducin → PDE → cGMP ↓ → Hyperpolarisation) und die Zuordnung von Auge, Ohr und Geruch zur jeweiligen Transduktion.

![Auge und Akkommodation](/grafik-optik-lupe.svg)

**Erklärung zur Grafik:** Brechung und Scharfstellung; die Grafik veranschaulicht das Prinzip von Linse und Brennweite — Bezug zur Nahakkommodation (Ziliarmuskel, Linse).

---

## Ohr — Schallübertragung und Hörphysiologie

Das Ohr löst ein physikalisches Problem: Luftschwingungen müssen in Flüssigkeitsschwingungen umgewandelt werden. Ohne das Mittelohr gingen 99,9 % der Schallenergie an der Luft-Wasser-Grenze verloren — das Mittelohr gleicht diesen Impedanzunterschied aus.

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

## Geruch und Geschmack

**Geruchssinn (Olfaktion):** ~10 Millionen olfaktorische Rezeptorneuronen im Riechepithel (Nasenschleimhaut). Jedes Neuron exprimiert einen von ~400 G-Protein-gekoppelten Rezeptortypen (größte Genfamilie beim Menschen!). Duftmoleküle → Rezeptor → Golf-Protein → Adenylatzyklase → cAMP ↑ → CNG-Kanäle → Depolarisation → Axone über N. olfactorius (I) direkt in Bulbus olfactorius → limbisches System (Amygdala, Hippocampus). Besonderheit: Der Geruchssinn wird als einziger Sinn **ohne Thalamus-Umschaltung** direkt ins limbische System geleitet — das erklärt starke emotionale Geruchserinnerungen.

**Geschmackssinn:** Fünf Grundqualitäten in Geschmacksknospen auf der Zunge:

| Qualität | Rezeptor | Mechanismus | Biologische Bedeutung |
|---|---|---|---|
| **Süß** | T1R2/T1R3 (GPCR) | Gq → IP₃ → Ca²⁺ | Energiereiche Nahrung |
| **Umami** | T1R1/T1R3 (GPCR) | Gq → Ca²⁺ | Proteinreiche Nahrung |
| **Bitter** | T2R-Familie (~25 Typen, GPCR) | Gq → Ca²⁺ | Warnsignal (Gifte!) |
| **Sauer** | H⁺ → PKD2L1-Kanal | ionisch | Säurevierdacht |
| **Salzig** | Na⁺ → ENaC-Kanal | ionisch | Elektrolytbedarf |

**Innervation der Zunge:** N. facialis (VII) — vordere 2/3 Zunge; N. glossopharyngeus (IX) — hintere 1/3; N. vagus (X) — Epiglottis.

> **Merke:** Süß/Umami/Bitter via GPCR (Second Messenger cAMP/Ca²⁺). Sauer/Salzig direkt ionisch. Geruch: ~400 olfaktorische Rezeptortypen, N. olfactorius → Bulbus → limbisches System (OHNE Thalamus!).

---

## Haut — Schichten und Rezeptortypen

**Hautschichten von außen nach innen:**
- **Epidermis** (0,1–1,5 mm, avaskulär, verhorntes Plattenepithel): Stratum basale (Stammzellen, Mitose) → spinosum (Desmosomen) → granulosum (Keratohyalin) → corneum (tote Korneozyten). Zellen: Keratinozyten (80%), Melanozyten (UV-Schutz), Langerhans-Zellen (Immunabwehr), Merkel-Zellen (Mechanorezeptoren)
- **Dermis** (1–4 mm, vaskularisiert, Kollagen I + Elastin): Stratum papillare (Papillen mit Meissner-Körperchen, Kapillaren) + Stratum reticulare (tiefes Kollagen, Ruffini-Körperchen)
- **Subcutis** (Hypodermis, Fettgewebe): Thermoregulation, Energiespeicher, Polsterung; Pacini-Körperchen in der Tiefe

**Fünf Hautrezeptortypen im Vergleich:**

| Rezeptor | Lage | Modalität | Adaptation | Besonderheit |
|---|---|---|---|---|
| **Meissner-Körperchen** | Dermis-Papillen (Finger, Lippen) | Berührung, Textur | Schnell (phasisch) | Braille-Lesen, feine Textur |
| **Pacini-Körperchen** | Tiefe Dermis, Subcutis | Vibration (200–300 Hz) | Schnell | Zwiebelschalen-Struktur filtert |
| **Merkel-Zellen** | Stratum basale | Druck, Konturen | Langsam (tonisch) | Höchste räumliche Auflösung (~1 mm) |
| **Ruffini-Körperchen** | Tiefe Dermis, Gelenkkapseln | Dehnung, Gelenkstellung | Langsam | Propriozeption |
| **Freie Nervenendigungen** | Epidermis/Dermis | Schmerz, Temperatur | — | Aδ (schnell, scharf) + C (langsam, brennend) |

**Temperaturrezeptoren:**
- **TRPV1**: aktiviert >43 °C + **Capsaicin** (Chili) → erklärt warum Chili "brennt" (gleicher Kanal wie Hitzeschmerz)
- **TRPM8**: aktiviert <~25 °C + **Menthol** → erklärt "Kühle" von Pfefferminz

> **Merke:** Schnell adaptierende Rezeptoren (Meissner, Pacini): erkennen Reizänderungen. Langsam adaptierende (Merkel, Ruffini): melden konstante Zustände. Epidermis = avaskulär, Dermis = vaskularisiert. TRPV1 (>43 °C + Capsaicin) = Wärme/Schmerz — deshalb "brennt" Chili.

---

> **Merke:** Alle Sinnesorgane arbeiten nach dem Transduktionsprinzip: Der spezifische Reiz öffnet/schließt Ionenkanäle → Membranpotenzialänderung → Aktionspotenzial. Was sich unterscheidet ist der Rezeptortyp, nicht das Grundprinzip. Auge: Fotorezeptoren (Hyperpolarisation bei Licht). Ohr: Mechanorezeptoren (Depolarisation durch K⁺). Nase/Zunge: Chemorezeptoren (G-Protein → cAMP). Haut: Mechano-/Thermorezeptoren (direkte Kanalöffnung).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Fototransduktion (Rhodopsin → Transducin → PDE → cGMP↓ → Kanal schließt → Hyperpolarisation), Stäbchen vs. Zapfen, Dunkelstrom, Adaptation.

**Ergänzend vertiefend:** Farbsehen; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Fototransduktionskaskade: Rhodopsin → Transducin → PDE → cGMP ↓ → Hyperpolarisation
- Stäbchen vs. Zapfen: Lokalisation, Empfindlichkeit, Pigmente
- Schallübertragung und Impedanzanpassung im Mittelohr

**Typische Prüfungsfallen / Verwechslungen:**
- **Ohr:** Mittelohr/Gehörgang = **Trommelfell** als Grenze (richtig). **Bogengänge** sind im **Innenohr**, dienen dem **Gleichgewicht**, nicht der Schallweiterleitung. **Gehörknöchelchen** (3 Stück) = **Mittelohr**. **Ovales Fenster** = Mittelohr–**Innenohr** (nicht Mittelohr–Ohrtrompete). **Ohrtrompete** = Paukenhöhle–**Rachen** (nicht Gehörgang).
- Licht führt zur Hyperpolarisation (nicht Depolarisation!) der Photorezeptoren
- Stäbchen: peripher, hohe Empfindlichkeit, niedrige Auflösung vs. Zapfen: Fovea, hohe Auflösung, niedrige Empfindlichkeit
- Endolymphe ist K⁺-reich (+80 mV), Perilymphe ist Na⁺-reich (wie EZF)
- Basilarmembran-Tonotopie: Basis (steif, schmal) = hohe Frequenzen; Apex (flexibel, breit) = niedrige Frequenzen
- **Ziliarkörper** ist primär für die **Änderung der Linsenkrümmung** (Akkommodation) nötig — nicht Hornhaut, Glaskörper, Regenbogenhaut oder äußere Augenmuskeln.
- Akkommodation: Ziliarmuskel kontrahiert → Zonulafasern ENTSPANNEN → Linse wölbt sich (nicht umgekehrt!)

**Prüfungsrelevante Zahlen/Fakten:**
- Ca. 120 Mio. Stäbchen, ca. 6 Mio. Zapfen pro Retina
- Impedanzanpassung der Gehörknöchelchen: ca. 22-fach
- Hörbereich: 20 Hz -- 20 kHz
- TRPV1: aktiviert bei >43 °C und durch Capsaicin; TRPM8: aktiviert bei ca. 25 °C und durch Menthol
- Presbyopie ab ca. 45 Jahren: Linse verliert Elastizität

---

## Zusammenfassung (ultrakompakt)

- **Transduktion**: Reiz → elektrisches Signal. Photorezeptoren: paradoxe Hyperpolarisation bei Licht (Dunkelzustand = depolarisiert durch cGMP-Kanäle)
- **Stäbchen** (skotopisch, peripher, ~120 Mio., Rhodopsin) vs. **Zapfen** (photopisch, Fovea, ~6 Mio., 3 Opsine für Farbe)
- **Fototransduktion**: Licht → Rhodopsin → Transducin → PDE → cGMP ↓ → Na⁺-Kanäle schließen → **Hyperpolarisation** (paradox!)
- **Akkommodation (Nah)**: Ziliarmuskel kontrahiert → Zonulafasern entspannen → Linse wölbt sich. Trias: Akkommodation + Konvergenz + Miosis
- **Ohr**: Schall → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Basilarmembran-Tonotopie (Basis = hoch, Apex = niedrig) → Tip-Links → K⁺-Einstrom Haarzellen → Glutamat → N. cochlearis
- **Geruch**: N. olfactorius → Bulbus → limbisches System (ohne Thalamus!). Geschmack: 5 Qualitäten (süß/umami/bitter = GPCR; sauer/salzig = ionisch)
- **Hautschichten**: Epidermis (avaskulär) → Dermis (vaskularisiert) → Subcutis. 5 Rezeptoren: Meissner/Pacini (schnell) vs. Merkel/Ruffini (langsam) vs. freie Nervenendigungen (Schmerz/Temp)
- **Klinisch**: Glaukom (Augeninnendruck ↑), Katarakt (Linsentrübung), Schalltrauma (Haarzellverlust)`,
      lernziele: [
        "Den Aufbau des Auges beschreiben und die Fototransduktion in Stäbchen von der Lichtabsorption durch Rhodopsin bis zur Hyperpolarisation erklären.",
        "Stäbchen und Zapfen hinsichtlich Lokalisation, Funktion und Photopigment unterscheiden.",
        "Den Mechanismus der Akkommodation des Auges einschließlich der Nahakkommodationstrias darstellen.",
        "Die Schallübertragung vom Trommelfell über die Gehörknöchelchen bis zur Aktivierung der Haarzellen im Corti-Organ beschreiben.",
        "Die drei Schichten der Haut und die fünf Typen der Hautrezeptoren mit ihren Modalitäten und Adaptationsgeschwindigkeiten nennen.",
      ],
      sections: [],
      diagram: "sinnesorgane",

      merksätze: [
        "**Photorezeptoren:** **Stäbchen** (skotopisch [Dämmerung], Rhodopsin [11-cis-Retinal + Opsin, λ_max ~500 nm], ~120 Mio., peripher, hohe Empfindlichkeit, niedrige Auflösung). **Zapfen** (photopisch [Tageslicht, Farben], 3 Opsine [S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm], ~6 Mio., Fovea centralis, niedrige Empfindlichkeit, hohe Auflösung [1:1 Ganglienzelle]).",
        "**Fototransduktion** (Stäbchen): Licht → **11-cis-Retinal → all-trans-Retinal** (Photoisomerisierung) → Rhodopsin → **Metarhodopsin II** → **Transducin** (G-Protein) → **Phosphodiesterase (PDE)** → **cGMP ↓** (Hydrolyse) → cGMP-gesteuerte **Na⁺-Kanäle SCHLIESSEN** → **HYPERPOLARISATION** (~-70 mV) → Ca²⁺-Kanäle schließen → **Glutamat ↓** (Signal).",
        "**Akkommodation** (Naheinstellung): **Ziliarmuskel kontrahiert** (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → **Zonulafasern entspannen** → Linse **wölbt sich** (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal). **Nahakkommodationstrias:** Akkommodation + Konvergenz (M. rectus medialis) + **Miosis** (M. sphincter pupillae, M3, Tiefenschärfe ↑).",
        "**Corti-Organ** (Hören): Schallwellen → Trommelfell → Gehörknöchelchen (Impedanzanpassung ~22-fach) → Oval-Fenster → Perilymphe → **Basilarmembran** (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → **Haarzellen** (Stereozilien biegen, **Tip-Links** spannen) → **K⁺-Kanäle öffnen** (Endolymphe K⁺-reich, +80 mV) → Depolarisation → **Glutamat** → N. cochlearis.",
      ],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Was ist der Unterschied zwischen Stäbchen und Zapfen in der Netzhaut?",
        answer:
          "Stäbchen: ~120 Mio., hochsensitiv, Hell-/Dunkel-Sehen (skotopisches Sehen), 1 Pigment (Rhodopsin), in der Peripherie. Zapfen: ~6 Mio., 3 Typen (S/M/L für blau/grün/rot), Farbsehen und Sehschärfe, konzentriert in der Fovea (photopisches Sehen). Dunkeladaptation dauert ~30 min durch Rhodopsin-Regeneration.",
      },
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen Stäbchen und Zapfen in der Retina?",
          options: [
            "Beide sind identisch",
            "Stäbchen: Skotopisches Sehen (Dämmerung), Rhodopsin (λ_max ~500 nm), ~120 Mio., peripher, hohe Empfindlichkeit (1 Photon), niedrige Auflösung (Konvergenz). Zapfen: Photopisches Sehen (Tageslicht, Farben), 3 Opsine (S-blau ~420 nm, M-grün ~530 nm, L-rot ~560 nm), ~6 Mio., Fovea centralis (~200.000/mm²), niedrige Empfindlichkeit, hohe Auflösung (1:1 Ganglienzelle)",
            "Nur Stäbchen existieren",
            "Zapfen sind nur für Nachtsicht",
            "Stäbchen sind nur in Fovea",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **STÄBCHEN** (Rods) und **ZAPFEN** (Cones) sind die beiden Photorezeptor-Typen in der Retina, spezialisiert für unterschiedliche Lichtbedingungen und Funktionen. **STÄBCHEN:** (1) **ANZAHL:** ~120 Millionen pro Retina. (2) **VERTEILUNG:** **PERIPHER** (außerhalb Fovea centralis, Dichte ↑ ~20° von Fovea, KEINE Stäbchen in Fovea selbst). (3) **FUNKTION:** **SKOTOPISCHES SEHEN** (Dämmerung, Nachtsicht, schwaches Licht). (4) **PHOTOPIGMENT:** **Rhodopsin** (11-cis-Retinal + Opsin, Absorptionsmaximum λ_max ~500 nm [grün-blau]). (5) **EMPFINDLICHKEIT:** **HOCH** (1 Photon kann Reaktion auslösen, Amplifikation via Transducin/PDE-Kaskade). (6) **AUFLÖSUNG:** **NIEDRIG** (viele Stäbchen konvergieren auf 1 Ganglienzelle [Konvergenz ~100:1] → räumliche Summation → hohe Empfindlichkeit, aber geringe Schärfe). (7) **ADAPTATION:** Dunkeladaptation langsam (~30 Min, Rhodopsin-Regeneration). **ZAPFEN:** (1) **ANZAHL:** ~6 Millionen pro Retina. (2) **VERTEILUNG:** **FOVEA CENTRALIS** (Sehgrube, höchste Dichte ~200.000/mm², NUR Zapfen, KEINE Stäbchen), Dichte ↓ peripher. (3) **FUNKTION:** **PHOTOPISCHES SEHEN** (Tageslicht, helles Licht, **FARBENSEHEN**). (4) **PHOTOPIGMENTE (3 TYPEN):** **S-Zapfen** (short, blau, λ_max ~420 nm, ~10%), **M-Zapfen** (medium, grün, λ_max ~530 nm, ~50%), **L-Zapfen** (long, rot, λ_max ~560 nm, ~40%). Farbwahrnehmung via Vergleich der 3 Signale (trichromatische Theorie). (5) **EMPFINDLICHKEIT:** **NIEDRIG** (viele Photonen nötig). (6) **AUFLÖSUNG:** **HOCH** (besonders Fovea: 1 Zapfen → 1 Bipolare Zelle → 1 Ganglienzelle [1:1:1, KEINE Konvergenz] → höchste Sehschärfe). (7) **ADAPTATION:** Helladaptation schnell (~5 Min). **KLINISCH:** Nachtblindheit (Stäbchen-Dysfunktion, Vitamin A-Mangel [Rhodopsin-Synthese ↓], Retinitis pigmentosa [genetisch, Stäbchen sterben]). Farbblindheit (Zapfen-Dysfunktion: Rot-Grün-Schwäche [häufigste, X-chromosomal, M-/L-Opsin-Defekt], Blau-Gelb-Schwäche [selten, S-Opsin], Achromatopsie [keine Farben, alle Zapfen defekt]). A, C, D, E sind falsch.",
          difficulty: 1,
          tags: ["stäbchen", "zapfen", "retina"],
        },
        {
          question: "Wie funktioniert die Fototransduktion in Stäbchen?",
          options: [
            "Fototransduktion benötigt kein Licht",
            "Licht → Photon trifft Rhodopsin → 11-cis-Retinal → all-trans-Retinal (Photoisomerisierung) → Metarhodopsin II (aktiviert) → Transducin (G-Protein, Gt) → Phosphodiesterase (PDE, ~100 pro Transducin) → cGMP → GMP (cGMP ↓↓↓) → cGMP-gesteuerte Na⁺-Kanäle SCHLIESSEN → HYPERPOLARISATION (~-70 mV, von -40 mV) → Ca²⁺-Kanäle schließen → Glutamat-Freisetzung ↓",
            "Fototransduktion ist nur in Zapfen",
            "Fototransduktion führt zu Depolarisation",
            "Fototransduktion ist nur in Bakterien",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **FOTOTRANSDUKTION** ist der Prozess, durch den Photorezeptoren (Stäbchen/Zapfen) Licht in elektrisches Signal umwandeln (ungewöhnlich: Licht → HYPERPOLARISATION, nicht Depolarisation!). **DUNKELHEIT (Ruhezustand, DEPOLARISIERT):** (1) **cGMP hoch** (Guanylatzyklase aktiv, GTP → cGMP). (2) cGMP bindet **cGMP-gesteuerte Na⁺-Kanäle** (CNG-Kanäle, im Außensegment [Membranscheiben]) → Kanäle OFFEN → **Na⁺ strömt ein** → **DEPOLARISATION** (~-40 mV, ungewöhnlich für Rezeptor!). (3) Spannungsgesteuerte Ca²⁺-Kanäle (synaptische Terminale) offen → **Glutamat-Freisetzung** (tonisch, kontinuierlich) → Bipolare Zellen (ON-Bipolare hyperpolarisiert, OFF-Bipolare depolarisiert). **LICHT (Phototransduktion, HYPERPOLARISIERT):** (1) **PHOTON** trifft **Rhodopsin** (11-cis-Retinal + Opsin). (2) **PHOTOISOMERISIERUNG:** **11-cis-Retinal → all-trans-Retinal** (cis-trans-Konformationsänderung, einziger lichtabhängiger Schritt!). (3) Rhodopsin → **Metarhodopsin II** (R*, aktivierte Form, Konformationsänderung des Opsins). (4) Metarhodopsin II aktiviert **Transducin** (G-Protein, Gt, α-Untereinheit dissoziiert, bindet GTP) → **AMPLIFIKATION** (1 R* aktiviert ~100 Transducin). (5) Transducin-α-GTP aktiviert **Phosphodiesterase (PDE)** (cGMP-spezifische PDE, γ-Untereinheit dissoziiert) → **AMPLIFIKATION** (~100 PDE pro Transducin). (6) PDE hydrolysiert **cGMP → GMP** (cGMP-Konzentration ↓↓↓, ~1000-fach in ms). (7) cGMP-gesteuerte Na⁺-Kanäle **SCHLIESSEN** (cGMP löst sich von Kanal) → **Na⁺-Einstrom ↓**. (8) **HYPERPOLARISATION** (~-70 mV, von -40 mV) → K⁺-Kanäle (immer offen) dominieren. (9) Ca²⁺-Kanäle (synaptisch) schließen → **Glutamat-Freisetzung ↓** (Signal! ON-Bipolare depolarisieren, OFF-Bipolare hyperpolarisieren). **AMPLIFIKATION GESAMT:** 1 Photon → ~100.000 cGMP hydrolysiert → ~1 pA Stromänderung → detektierbar! **ADAPTATION/ERHOLUNG:** (1) **Rhodopsin-Kinase** phosphoryliert Metarhodopsin II → **Arrestin** bindet → inaktiviert. (2) All-trans-Retinal → all-trans-Retinol (Retinol-Dehydrogenase) → Pigmentepithel (RPE) → **11-cis-Retinal** (Retinal-Isomerase, Vitamin A-Zyklus) → zurück zu Photorezeptor → Rhodopsin regeneriert. (3) **Recoverin** (Ca²⁺-Sensor): Ca²⁺ ↓ (Hyperpolarisation) → Guanylatzyklase-aktivierendes Protein (GCAP) → Guanylatzyklase ↑ → cGMP-Synthese ↑ → Dunkelzustand wiederhergestellt. **KLINISCH:** Nachtblindheit (Vitamin A-Mangel → Rhodopsin-Synthese ↓, 11-cis-Retinal ↓), Retinitis pigmentosa (genetisch, Rhodopsin-Mutation → Stäbchen sterben → Nachtblindheit, Tunnelblick). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: ["fototransduktion", "rhodopsin", "stäbchen"],
        },
        {
          question: "Wie funktioniert die Akkommodation des Auges?",
          options: [
            "Akkommodation ist nur für Fernsicht",
            "Naheinstellung (Akkommodation): Ziliarmuskel kontrahiert (Parasympathikus, M3, N. oculomotorius [III]) → Ziliarmuskel-Ring verkleinert → Zonulafasern (Zinn-Fasern) entspannen → Linse wölbt sich (elastische Rückstellkraft) → Brechkraft ↑ (~24 dpt maximal, jung). Ferneinstellung: Ziliarmuskel relaxiert → Zonulafasern gespannt → Linse flach (~20 dpt). Nahakkommodationstrias: Akkommodation + Konvergenz + Miosis",
            "Akkommodation benötigt Sympathikus",
            "Akkommodation ist nur in Bakterien",
            "Linse wird flacher bei Nahsicht",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **AKKOMMODATION** ist die Anpassung der Linsen-Brechkraft für Nahsicht (junge Menschen: ~10 cm Nahpunkt, ältere: ~100 cm [Presbyopie]). **FERNEINSTELLUNG (Ruhe, KEINE Akkommodation):** (1) **Ziliarmuskel RELAXIERT** (ringförmiger glatter Muskel im Ziliarkörper, parasympathische Innervation [M3], aber in Ruhe entspannt). (2) **Zonulafasern (Zinn-Fasern) GESPANNT** (Kollagenfasern, Ziliarkörper → Linsenkapsel, radialer Zug). (3) Linse **FLACH** (geringste Brechkraft ~20 dpt, Linse wird gedehnt durch Zonulafasern-Spannung). (4) **Fernpunkt im Unendlichen scharf** (parallele Lichtstrahlen fokussiert auf Retina). **NAHEINSTELLUNG (Akkommodation, aktiver Prozess):** (1) **ZILIARMUSKEL KONTRAHIERT** (Parasympathikus, **M3-Rezeptoren**, **N. oculomotorius [III]**, Edinger-Westphal-Kern → Ganglion ciliare → postganglionäre Fasern → Ziliarmuskel). (2) Ziliarmuskel-Ring (kreisförmig) **VERKLEINERT** sich → Abstand Ziliarmuskel-Linse ↓. (3) **ZONULAFASERN ENTSPANNEN** (Spannung ↓, radialer Zug auf Linse ↓). (4) Linse **WÖLBT SICH** (elastische Rückstellkraft der Linsenkapsel, Linse ist natürlich konvex) → **Brechkraft ↑** (~24 dpt maximal bei Kindern/jungen Erwachsenen, ~22 dpt bei 30-Jährigen, ~20 dpt bei 60-Jährigen [Presbyopie, Altersweitsichtigkeit, Linse verliert Elastizität]). (5) **Nahpunkt scharf** (~10 cm bei Kindern, ~25 cm bei Erwachsenen, ~100 cm bei 60-Jährigen). **NAHAKKOMMODATIONSTRIAS** (3 simultane Reaktionen bei Nahsicht): (1) **AKKOMMODATION** (Ziliarmuskel kontrahiert, Linse wölbt). (2) **KONVERGENZ** (Augen nach innen, M. rectus medialis [N. oculomotorius III], beide Augen fixieren Nahpunkt). (3) **MIOSIS** (Pupille verengt, M. sphincter pupillae [Parasympathikus, M3, N. oculomotorius III] → Tiefenschärfe ↑ [kleinere Pupille → weniger chromatische Aberration]). **KLINISCH:** **Presbyopie** (Altersweitsichtigkeit, ~45 Jahre): Linse verliert Elastizität (Kristalline vernetzen, wasserarm) → Akkommodation ↓ → Nahpunkt ↑ (~100 cm) → Lesebrille nötig (Konvexlinse/Pluslinse, z.B. +2 dpt). **Myopie** (Kurzsichtigkeit): Bulbus zu lang → Fernpunkt vor Retina → Fernsicht unscharf → Korrektur: Konkavlinse (Minuslinse, z.B. -3 dpt). **Hyperopie** (Weitsichtigkeit): Bulbus zu kurz → Nahpunkt hinter Retina → Nahsicht unscharf (Akkommodation kompensiert teilweise) → Korrektur: Konvexlinse (Pluslinse). A, C, D, E sind falsch.",
          difficulty: 2,
          tags: ["akkommodation", "linse", "ziliarmuskeln"],
        },
        {
          question: "Wie funktioniert die Schallübertragung im Ohr?",
          options: [
            "Schallübertragung benötigt keine Gehörknöchelchen",
            "Schallwellen → Trommelfell schwingt → Gehörknöchelchen (Hammer → Amboss → Steigbügel, Impedanzanpassung ~22-fach [Hebelwirkung + Flächenreduktion: Trommelfell 55 mm² → Oval-Fenster 3.2 mm²]) → Oval-Fenster → Perilymphe (Scala vestibuli) → Wanderwelle auf Basilarmembran (Tonotopie: Basis = hohe Frequenz ~20 kHz, Apex = niedrige Frequenz ~20 Hz) → Stereozilien (Haarzellen) biegen → Tip-Links spannen → K⁺-Kanäle öffnen (Endolymphe K⁺-reich, +80 mV) → Depolarisation → Glutamat → N. cochlearis",
            "Schallwellen werden direkt zu elektrischen Signalen",
            "Basilarmembran ist überall gleich",
            "Endolymphe ist Na⁺-reich",
          ],
          correctIndex: 1,
          explanation:
            "B ist korrekt: **SCHALLÜBERTRAGUNG** im Ohr erfolgt in 3 Stufen (Außenohr, Mittelohr, Innenohr), mit **Impedanzanpassung** (Luft → Flüssigkeit) im Mittelohr. **ABLAUF:** (1) **SCHALLWELLEN** (Luftdruckschwankungen) → Ohrmuschel (Schallsammlung) → äußerer Gehörgang (~2.5 cm). (2) **TROMMELFELL** (Membrana tympani) schwingt (Auslenkung ~1 nm bei Hörschwelle!). (3) **GEHÖRKNÖCHELCHEN** (kleinste Knochen, Mittelohr, luftgefüllt): **Hammer** (Malleus, an Trommelfell) → **Amboss** (Incus) → **Steigbügel** (Stapes, Fußplatte an Oval-Fenster). **IMPEDANZANPASSUNG (~22-fach Druckverstärkung):** (a) **Hebelwirkung** (Hammer-Amboss, ~1.3-fach). (b) **Flächenreduktion** (Trommelfell 55 mm² → Oval-Fenster 3.2 mm², ~17-fach Druckerhöhung [Druck = Kraft/Fläche]). Ohne Impedanzanpassung: 99.9% Schallenergie würde reflektiert werden (Luft-Flüssigkeit-Grenze)! (4) **OVAL-FENSTER** (membranbedeckte Öffnung zu Innenohr) → Steigbügel-Fußplatte drückt → **Perilymphe** (Na⁺-reich, wie EZF) in **Scala vestibuli** (oberer Gang in Cochlea) bewegt sich. (5) **WANDERWELLE** auf **BASILARMEMBRAN** (trennt Scala media [Endolymphe, K⁺-reich] von Scala tympani [Perilymphe]). **TONOTOPIE** (Frequenz-Orts-Kodierung): Basilarmembran ist **NICHT uniform** → **Basis** (nahe Oval-Fenster): schmal (~0.1 mm), steif → **hohe Frequenzen** (~20.000 Hz) → **Apex** (Spitze): breit (~0.5 mm), flexibel → **niedrige Frequenzen** (~20 Hz). Wanderwelle erreicht Maximum bei Resonanzfrequenz. (6) **CORTI-ORGAN** (auf Basilarmembran): Basilarmembran bewegt sich → **Stereozilien** (Haarzellen) biegen gegen **Tektorialmembran** (gelartig, darüber). (7) **MECHANO-TRANSDUKTION:** **Tip-Links** (Cadherin 23, verbinden Stereozilien) spannen → **Mechano-sensitive K⁺-Kanäle** (TMC1/2, direkt mechanisch, KEIN Second Messenger!) **ÖFFNEN**. (8) **K⁺ strömt EIN** (Endolymphe ist K⁺-reich [~150 mM] + positiv [+80 mV, Endocochleäres Potential, via Stria vascularis], Treibkraft ~120 mV!) → **DEPOLARISATION** (Haarzelle, von -70 mV → -40 mV). (9) Spannungsgesteuerte **Ca²⁺-Kanäle** (Ca_v1.3) öffnen → Ca²⁺ rein → **Glutamat-Freisetzung** (Synapse, Ribbon-Synapse [spezielle Struktur für schnelle/tonische Freisetzung]). (10) **N. cochlearis** (Spiralganglion-Neuronen, bipolar) → Aktionspotential → Hirnstamm (Nucleus cochlearis) → auditorischer Kortex (Gyrus temporalis superior, Heschl-Querwindungen). (11) **RUNDES FENSTER** (membranbedeckte Öffnung, Scala tympani) wölbt sich aus (Druckausgleich, da Perilymphe inkompressibel). **KLINISCH:** Schwerhörigkeit (Schallleitungsschwerhörigkeit [Mittelohr: Otosklerose, Trommelfell-Perforation] vs. Schallempfindungsschwerhörigkeit [Innenohr: Haarzellen-Schädigung durch Lärm/Alter/Ototoxika: Aminoglykoside, Cisplatin, Furosemid]). A, C, D, E sind falsch.",
          difficulty: 3,
          tags: ["schallübertragung", "innenohr", "cochlea"],
        },
        {
          question: "Welche Hautrezeptoren gibt es und was ist ihre Funktion?",
          options: [
            "Alle Hautrezeptoren sind identisch",
            "Meissner-Körperchen (Dermis-Papillen, Berührung leicht, schnell adaptierend, 10-50 Hz). Pacini-Körperchen (tiefe Dermis, Vibration, schnell adaptierend, 200-300 Hz). Merkel-Zellen (Epidermis basale, Druck statisch, langsam adaptierend, feine Details). Ruffini-Körperchen (Dermis tief, Dehnung, langsam adaptierend). Freie Nervenendigungen (Epidermis/Dermis, Schmerz/Temperatur, Aδ [schnell, scharf], C-Fasern [langsam, brennend], TRPM8 [Kälte ~25°C], TRPV1 [Wärme ~43°C])",
            "Nur Meissner-Körperchen existieren",
            "Pacini-Körperchen sind für Schmerz",
            "Merkel-Zellen sind nur in Dermis",
          ],
          correctIndex: 1,
          explanation:
            'B ist korrekt: Die Haut enthält spezialisierte **MECHANOREZEPTOREN** (Berührung, Druck, Vibration, Dehnung), **THERMOREZEPTOREN** (Temperatur) und **NOZIZEPTOREN** (Schmerz), die verschiedene Reize codieren. **MECHANOREZEPTOREN:** (1) **MEISSNER-KÖRPERCHEN** (Corpuscula tactus): **Lokalisation:** Dermis-Papillen (oberflächlich), besonders Fingerbeeren, Lippen, Zunge (hohe Dichte). **Modalität:** **Berührung** (leicht, sanft), **Textur**. **Adaptation:** **SCHNELL** (phasisch, reagiert auf Änderung, nicht auf konstanten Reiz). **Frequenz:** Niedrig (10-50 Hz, dynamisch). **Funktion:** Feine Textur-Diskrimination (z.B. Braille-Lesen). (2) **PACINI-KÖRPERCHEN** (Corpuscula lamellosa): **Lokalisation:** Tiefe Dermis, Subcutis (Fettgewebe), Faszien, Gelenke. **Modalität:** **Vibration** (hochfrequent). **Adaptation:** **SCHNELL** (sehr schnell, phasisch). **Frequenz:** Hoch (200-300 Hz). **Struktur:** Zwiebelschalen-artig (Lamellen, filtern niederfrequente Reize). **Funktion:** Vibration (z.B. Werkzeug-Nutzung), Oberflächentextur bei Bewegung. (3) **MERKEL-ZELLEN** (Merkel-Tastscheiben): **Lokalisation:** **Epidermis** (Stratum basale), besonders Fingerbeeren, Lippen. **Modalität:** **Druck** (statisch, kontinuierlich). **Adaptation:** **LANGSAM** (tonisch, reagiert auf konstanten Reiz). **Frequenz:** Niedrig (0.3-3 Hz, statisch). **Funktion:** **Feine Details** (Kanten, Formen, Buchstaben-Erkennung), höchste räumliche Auflösung (~1 mm). **Neurotransmitter:** Merkel-Zellen setzen Serotonin/Substanz P frei (ungewöhnlich für Nicht-Neuron). (4) **RUFFINI-KÖRPERCHEN** (Corpuscula bulboidea): **Lokalisation:** Dermis (tief), Gelenkkapseln, Sehnen. **Modalität:** **Dehnung** (Hautdehnung, Gelenkstellung). **Adaptation:** **LANGSAM** (tonisch). **Frequenz:** Niedrig (15-400 Hz). **Funktion:** Propriozeption (Gelenkstellung), Hautdehnung (z.B. Greifen). **THERMOREZEPTOREN (freie Nervenendigungen):** (1) **KÄLTEREZEPTOREN:** **TRPM8** (Transient Receptor Potential Melastatin 8, aktiviert bei ~25°C, auch Menthol). **Fasern:** **Aδ-Fasern** (myelinisiert, schnell ~20 m/s, "kalt"). (2) **WÄRMEREZEPTOREN:** **TRPV1** (Vanilloid 1, aktiviert bei ~43°C, auch **Capsaicin** [Chili]). **TRPV3/4** (warmere Temperaturen 30-40°C). **Fasern:** **C-Fasern** (unmyelinisiert, langsam ~1 m/s, "warm/heiß"). **NOZIZEPTOREN (Schmerzrezeptoren, freie Nervenendigungen):** **KEINE spezialisierten Strukturen** (im Gegensatz zu Mechanorezeptoren). **Lokalisation:** Epidermis, Dermis, Periost, Meningen (überall, NICHT Gehirnparenchym). **Fasern:** (1) **Aδ-Fasern** (myelinisiert, ~20 m/s): **Schneller Schmerz** (scharf, lokalisierbar, "first pain"). (2) **C-Fasern** (unmyelinisiert, ~1 m/s): **Langsamer Schmerz** (brennend, dumpf, diffus, "second pain"). **Aktivierung:** Mechanisch (Verletzung, hoher Druck), thermisch (Hitze >43°C [TRPV1], Kälte <15°C), **chemisch** (Bradykinin [Entzündung], **Prostaglandine** [PGE₂, Entzündung, NSAID-Target], Substanz P, H⁺ [Azidose], ATP [Zellschädigung], Capsaicin [TRPV1]). A, C, D, E sind falsch.',
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
      content: `## Einleitung

Nervensystem = Blitz (Millisekunden). **Hormonsystem** = langsames Feuer (Minuten bis Tage). Beide kommunizieren, aber auf grundlegend verschiedene Weise. **Hormone** sind chemische Botenstoffe, die über das Blut zu Zielorganen gelangen. Die Schlüsselstruktur: die **Hypothalamus-Hypophyse-Achse** — ein hierarchischer Regelkreis, in dem Hypothalamus-Hormone die Hypophyse steuern, die wiederum periphere Drüsen steuert, die dann über negative Rückkopplung den Kreis schließen. Für die Medizin ist das enorm wichtig: Schilddrüsenerkrankungen, Diabetes, Cushing — fast alle endokrinen Diagnosen basieren auf diesem Prinzip. MedAT-Klassiker: Peptidhormone vs. Steroidhormone, Insulin/Glukagon, Schilddrüsen-Regelkreis.

**In diesem Kapitel lernst du:**
- **Hypothalamus-Hypophyse-Achse** (Releasing-Hormone, Adenohypophyse, Neurohypophyse)
- **Peptid-** vs. **Steroidhormone** (Wirkmechanismus, Rezeptorlage)
- **Schilddrüse** (TRH → TSH → T3/T4, negatives Feedback)
- **Insulin/Glukagon**, **Cortisol**, **Nebenniere** (Mark vs. Rinde)

---

## Hormonklassen und Wirkungsmechanismen

Peptidhormone (Insulin, ACTH, TSH) sind hydrophil und wirken über Membranrezeptoren mit Second Messengern (cAMP, IP₃, Ca²⁺) – schnelle Wirkung in Minuten. Steroidhormone (Cortisol, Aldosteron, Testosteron) sind lipophil, passieren die Membran und binden intrazelluläre Rezeptoren im Zellkern, die die Genexpression regulieren – langsame Wirkung in Stunden. T₃/T₄ sind lipophile Aminosäurederivate und wirken ähnlich wie Steroidhormone.

> **Merke:** **Hormonklassen & Rezeptoren:** Peptidhormone (Insulin, GH, ACTH) = hydrophil → Membranrezeptoren (Tyrosinkinase, G-Protein) → Second Messenger (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (Cortisol, Testosteron, Östrogen) + T₃/T₄ = lipophil → intrazelluläre Rezeptoren → Genexpression → langsame Wirkung (Stunden).

---

## Schilddrüse und Nebenniere

Die Schilddrüse synthetisiert T₃ und T₄ durch TPO-katalysierte Jodierung von Tyrosin-Resten in Thyreoglobulin (2×DIT → T₄; MIT+DIT → T₃). T₃ ist 3–5× potenter als das Prohormon T₄.

Die **Nebenniere** gliedert sich in Rinde (Kortex, 80 %) und Mark (Medulla, 20 %). Die Rinde hat drei Zonen: Zona glomerulosa (Aldosteron), Zona fasciculata (Cortisol), Zona reticularis (DHEA/Androgene).

**Cortisol** (Zona fasciculata, Glukokortikoid): das zentrale Stresshormon, reguliert über die CRH–ACTH-Achse. Wirkt über intrazelluläre Glukokortikoid-Rezeptoren (GR) → Genexpression. Katabol: steigert Glukoneogenese in der Leber (Blutzucker ↑, diabetogene Wirkung), fördert Protein- und Fettkatabolismus in Muskel und Fettgewebe. Immunsuppressiv: hemmt Phospholipase A₂ → Arachidonsäure ↓ → Prostaglandine und Leukotriene ↓. Langfristig hemmt Cortisol Osteoblasten → Knochenaufbau ↓ → Osteoporoserisiko bei chronischer Therapie (Cushing-Syndrom).

**Aldosteron** (Zona glomerulosa, Mineralokortikoid): reguliert Na⁺/K⁺-Haushalt in der Niere über ENaC (epithelialer Na⁺-Kanal) → Na⁺-Retention + K⁺-Exkretion → Volumen ↑, Blutdruck ↑. Eingebunden in das RAAS: Renin (Niere bei Druckabfall) → Angiotensin II → Aldosteron ↑. Klinisch: Conn-Syndrom (primärer Hyperaldosteronismus) → Hypertonie + Hypokaliämie.

**Adrenalin/Noradrenalin** (Nebennierenmark): Chromaffine Zellen sezernieren Adrenalin (80 %) und Noradrenalin (20 %) bei sympathischer Stimulation (Fight-or-Flight). Adrenalin: β₁ (Herzfrequenz ↑), β₂ (Bronchodilatation, Glykogenolyse), α₁ (Vasokonstriktion).

> **Merke:** **Schilddrüsenhormone:** T₃ (aktiv, 3 Jod) + T₄ (Prohormon, 4 Jod, peripher → T₃). TPO jodiert Tyrosin in Thyreoglobulin: MIT + DIT → T₃, 2×DIT → T₄. Wirkung: Grundumsatz ↑, Herzfrequenz ↑ (β-Rezeptor-Upregulation), Genexpression ↑. TSH stimuliert (TRH-abhängig). Hashimoto → T₃/T₄ ↓, TSH ↑.

---

## Pankreas und Blutzuckerregulation

Die Langerhans-Inseln des Pankreas enthalten β-Zellen (Insulin, 65–80%) und α-Zellen (Glukagon, 15–20%). Insulin senkt den Blutzucker durch GLUT4-Translokation in Muskel/Fett, Glykogensynthese und Lipogenese. Glukagon hebt den Blutzucker durch Glykogenolyse und Glukoneogenese in der Leber. Der Insulin-Sekretionsmechanismus läuft über GLUT2, ATP-sensitive K⁺-Kanäle und Ca²⁺-abhängige Exozytose.

> **Merke:** **Insulin vs. Glukagon:** Insulin (β-Zellen, nach Mahlzeit): GLUT4-Translokation ↑ (Muskel/Fett), Glykogensynthese ↑ (Leber), Lipolyse ↓, Proteinaufbau ↑ → Blutzucker ↓. Glukagon (α-Zellen, Fasten): Glykogenolyse ↑, Glukoneogenese ↑ → Blutzucker ↑. Typ-1-DM: β-Zell-Zerstörung. Typ-2-DM: Insulinresistenz + relativer Mangel.

---

## Regelkreise und negative Rückkopplung

Das endokrine System nutzt negative Rückkopplung zur Homöostase: Effektor-Hormone hemmen Hypothalamus und Hypophyse, um ihre eigene Produktion zu drosseln. Bei primärer Drüseninsuffizienz (z.B. Schilddrüse zerstört) fehlt die Hemmung, und die trophen Hormone steigen kompensatorisch an (TSH ↑↑). Positive Rückkopplung ist selten und tritt z.B. beim LH-Surge zur Ovulation oder bei Geburts-Wehen (Oxytocin) auf.

> **Merke:** **Hypothalamus-Hypophyse-Regelkreis:** Hypothalamus (TRH, CRH, GnRH, GHRH) → Hypophyse (TSH, ACTH, LH/FSH, GH) → periphere Drüse (T₃/T₄, Cortisol, Östrogen/Testosteron) → **negative Rückkopplung** hemmt Hypothalamus + Hypophyse. Primäre Insuffizienz: periphere Drüse ↓ → trophe Hormone ↑.

![Hypophysen-Achsen](/grafik-5-hypophysen-achsen.svg)

**Erklärung zur Grafik:** Die Grafik zeigt die hormonellen Achsen (Hypothalamus → Hypophyse → Schilddrüse/NNR/Gonaden) mit Releasing- und trophen Hormonen sowie die Rückkopplungspfeile (primäre vs. sekundäre Insuffizienz).

![Regelkreise und Homöostase](/grafik-puffer.svg)

**Erklärung zur Grafik:** Negative Rückkopplung stabilisiert Hormonspiegel; die Grafik veranschaulicht das Prinzip Soll-Ist-Vergleich und Korrektur (analog zu pH-Pufferung).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Peptidhormone (membranständiger Rezeptor, schnell) vs. Steroidhormone (Kernrezeptor, langsam, genexpression), Beispiele (Insulin, Cortisol, Schilddrüsenhormon), Hypophysenachsen. **Somatotropin (Wachstumshormon, GH)** wird in der **Hypophyse** gebildet (nicht Schilddrüse, Nebenniere, Nebenschilddrüse, Keimdrüsen); zu viel bei Kindern → Riesenwuchs, zu wenig → Zwergwuchs. **Glukagon** wird von **α-Zellen** der Langerhans-Inseln (Pankreas) gebildet — neben Insulin wichtig für Blutzucker (Glukagon ↑ bei Fasten). **Pepsinogen** (inaktive Vorstufe von Pepsin) wird in der **Magenschleimhaut** gebildet (Hauptzellen), nicht in Bauchspeicheldrüse, Leber oder Mundspeicheldrüsen. Die **Galle** (aus der Gallenblase) wird in den **Dünndarm** abgegeben (nicht in Magen, Leber, Pfortader oder Dickdarm).

**Ergänzend vertiefend:** Second Messenger; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Peptidhormone vs. Steroidhormone: Rezeptortyp, Wirkgeschwindigkeit, Beispiele
- Wo wird Somatotropin gebildet? (Hypophyse)
- Wo wird Pepsinogen gebildet? (Magenschleimhaut)
- Wohin wird Galle abgegeben? (Dünndarm)
- Primäre vs. sekundäre Hypothyreose: TSH-Werte als Schlüssel zur Differenzierung
- Insulin-Sekretionsmechanismus: GLUT2 → ATP ↑ → K-ATP schließen → Ca²⁺ → Exozytose

**Typische Prüfungsfallen / Verwechslungen:**
- T₃ ist biologisch aktiver als T₄ (T₄ ist das Prohormon)
- Primäre Hypothyreose: TSH ↑ (Rückkopplung fällt weg) vs. sekundäre: TSH ↓ (Hypophyse defekt)
- Cortisol: Glukoneogenese ↑ (Blutzucker steigt, diabetogene Wirkung!)
- Insulin senkt Blutzucker, Glukagon hebt ihn -- nicht verwechseln!
- Aldosteron (Zona glomerulosa, RAAS) vs. Cortisol (Zona fasciculata, CRH-ACTH-Achse)

**Prüfungsrelevante Zahlen/Fakten:**
- Schilddrüse: TPO jodiert Tyrosin; 2×DIT → T₄, MIT+DIT → T₃
- Insulin: β-Zellen (65--80 % der Langerhans-Inseln), Glukagon: α-Zellen (15--20 %)
- Adrenalin: 80 % der Nebennierenmark-Sekretion, Noradrenalin: 20 %
- PTH erhöht Ca²⁺, Calcitonin senkt Ca²⁺
- Hashimoto-Thyreoiditis: häufigste Autoimmunerkrankung

---

## Zusammenfassung (ultrakompakt)

- **Peptidhormone** (Insulin, TSH, ACTH): hydrophil → Membranrezeptoren → Second Messenger (cAMP, Ca²⁺) → schnelle Wirkung (Minuten)
- **Steroidhormone + T₃/T₄**: lipophil → intrazelluläre Rezeptoren → Genexpression → langsame Wirkung (Stunden)
- **Hypothalamus-Hypophyse-Achse**: Hypothalamus (TRH, CRH, GnRH) → Hypophyse (TSH, ACTH, LH/FSH) → periphere Drüse → **negative Rückkopplung** hemmt zurück
- **Primäre Hypothyreose**: Schilddrüse ↓ → TSH ↑ (Rückkopplung fällt weg). Sekundäre: Hypophyse ↓ → TSH ↓ + T₃/T₄ ↓
- **Blutzucker**: Insulin (β-Zellen, GLUT4-Translokation, Glykogensynthese) senkt; Glukagon (α-Zellen, Glykogenolyse) hebt
- **Cortisol**: Glukoneogenese ↑, Immunsuppression, Osteoporose-Risiko (Osteoblasten ↓)
- **Klinisch**: DM Typ 1 (β-Zell-Zerstörung), Typ 2 (Insulinresistenz), Hashimoto (TSH ↑), Morbus Basedow (TSH ↓, TSH-R-AK)`,
      lernziele: [
        "Steroid- und Peptidhormone nach Löslichkeit, Rezeptorlokalisation und Wirkgeschwindigkeit unterscheiden und den Second-Messenger-Weg (cAMP) vs. Genexpressionsweg beschreiben.",
        "Die Hypothalamus-Hypophyse-Achse mit ihren Releasing-Hormonen (TRH, CRH, GnRH), trophen Hormonen (TSH, ACTH, LH/FSH) und peripheren Drüsenhormonen darstellen und das Prinzip der negativen Rückkopplung erklären.",
        "Die Schilddrüsenhormon-Biosynthese (Jodid-Aufnahme, Thyreoperoxidase, MIT/DIT-Kopplung zu T₃/T₄) beschreiben und die Unterschiede zwischen primärer und sekundärer Hypothyreose (TSH ↑ vs. TSH ↓) erklären.",
        "Die Wirkungen von Cortisol (Glukoneogenese ↑, Immunsuppression, Osteoporose-Risiko) und Adrenalin (Fight-or-Flight, α₁/β₁/β₂-Rezeptoren) auf ihre Zielgewebe beschreiben.",
        "Den Insulin-Sekretionsmechanismus (GLUT2, ATP-K⁺-Kanal, Ca²⁺, Exozytose) und die antagonistischen Wirkungen von Insulin (GLUT4, Glykogensynthese ↑) und Glukagon (Glykogenolyse ↑, Glukoneogenese ↑) auf den Blutzucker erklären.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Welche Hormone produziert die Schilddrüse und was bewirken sie?",
        answer:
          "T3 (Triiodthyronin, biologisch aktiver) und T4 (Thyroxin, Prohormon). Wirkung: Grundumsatzsteigerung, Thermogenese, Wachstum/Entwicklung. Regulation: TRH (Hypothalamus) → TSH (Hypophyse) → T3/T4 → negative Rückkopplung auf TRH und TSH.",
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
      diagram: "hormonsystem",

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
      title: "Herz Kreislauf",
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
      content: `## Einleitung

Das Herz ist eine Pumpe — aber eine bemerkenswert effiziente. Es schlägt ~100.000-mal pro Tag, pumpt 5–25 L Blut pro Minute und wird dabei durch ein präzises elektrisches System (SA-Knoten → AV-Knoten → Purkinje-Fasern) gesteuert, das vollständig autonom arbeitet. Zwei Kreisläufe in Serie: **großer Kreislauf** (Körperversorgung, hoher Druck) und **kleiner Kreislauf** (Lungenkreislauf, niedriger Druck). Der linke Ventrikel pumpt gegen dreifach höheren Widerstand → dreifach dickere Wand. Für die Medizin sind Herzerkrankungen die häufigste Todesursache in der westlichen Welt. MedAT-Klassiker: Erregungsleitung, Herzklappenvergleich, Kreislaufwege, Blutdruckregulation (RAAS).

**In diesem Kapitel lernst du:**
- **Herzaufbau** (Kammern, Klappen, Systole/Diastole) und **Erregungsleitung** (SA → AV → His/Purkinje)
- **Großer vs. kleiner Kreislauf** und **Blutdruckregulation** (RAAS, Barorezeptoren)
- **Herzzyklus** und typische Werte (Auswurffraktion, Druckverhältnisse)

---

## Herzaufbau und Klappen

Das Herz hat 4 Kammern (RA, RV, LA, LV) und 3 Wandschichten: Endokard (Endothel, innen), Myokard (Herzmuskel, Kontraktion), Epikard (Gleitfläche). Der linke Ventrikel hat die dickste Wand (~10–15 mm vs. ~3–5 mm rechts), da er gegen den hohen Systemwiderstand pumpt. AV-Klappen (Trikuspidal: 3 Segel, Mitral: 2 Segel) haben Sehnenfäden an Papillarmuskeln; Taschenklappen (Pulmonal, Aorta: je 3 Taschen) öffnen passiv. **Systole** (Kontraktionsphase: Ventrikel pumpen Blut aus) und **Diastole** (Relaxationsphase: Ventrikel füllen sich mit Blut). Die Auswurffraktion beträgt in Ruhe ~55–70 % des enddiastolischen Volumens.

![Herzzyklus](/grafik-6-herzzyklus.svg)

**Erklärung zur Grafik:** Die Abbildung veranschaulicht die vier Phasen des Herzzyklus (Füllung, isovolumetrische Kontraktion, Auswurf, isovolumetrische Relaxation) und die Druckverläufe in Vorhof, Kammer und Aorta.

![Kreislauf und Druck](/grafik-11-gegenstrom-niere.svg)

**Erklärung zur Grafik:** Druck- und Volumenverhältnisse; die Grafik ergänzt das Verständnis von Vorlast, Nachlast und Füllung (analog zu Gradienten in Gefäßsystemen).

> **Merke:** **Herzklappen:** AV-Klappen haben Sehnenfäden (Trikuspidal 3, Mitral 2), Taschenklappen haben Taschen (Pulmonal, Aorta je 3) – beide stoppen Rückfluss! (AV = Atrioventrikulär, Sehnenfäden verhindern Prolaps; Taschenklappen öffnen/schließen passiv)

---

## Erregungsleitung

Die Erregung entsteht im SA-Knoten (60–80/min, Taktgeber), verzögert sich im AV-Knoten (~120 ms, ermöglicht Vorhof-Kontraktion vor Ventrikel), läuft dann über His-Bündel, Tawara-Schenkel und Purkinje-Fasern (schnellste Leitung, 2–4 m/s). Diese Verzögerung gewährleistet, dass Vorhöfe zuerst das Blut in die Ventrikel pumpen.

> **Merke:** **Erregungsleitung:** SA-Knoten startet (60–80), AV-Knoten verzögert, His-Bündel leitet, Tawara teilt, Purkinje sprintet von Spitze nach oben! (SA → AV [Verzögerung] → His → Tawara [re/li] → Purkinje [Spitze → Basis])

---

## Kreislauf und Blutgefäße

Arteriolen sind Widerstandsgefäße (regulieren TPR durch Sympathikus α₁); Kapillaren ermöglichen Stoffaustausch (Starling-Kräfte: Filtration arteriell, Reabsorption venös); Venen sind Kapazitätsgefäße (~70% des Blutvolumens) mit Klappen und Muskel-Venen-Pumpe. Die Windkesselfunktion der Aorta wandelt pulsatilen in kontinuierlichen Fluss um.

> **Merke:** **Kreisläufe:** Rechts = Lunge (klein, niedrig), Links = Körper (groß, hoch) – Lungenarterie hat O₂-armes Blut, Lungenvene hat O₂-reiches Blut! (Kleiner Kreislauf: RV → Lungenarterie → Lunge → Lungenvene → LA; Großer Kreislauf: LV → Aorta → Körper → Venen → RA)

---

## Blutdruckregulation

Kurzfristig: Barorezeptor-Reflex (Aortenbogen, Karotis-Sinus) – Druck ↑ → Parasympathikus ↑ → HF ↓. Langfristig: RAAS – Druck ↓ → Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O-Retention → Volumen ↑. Formel: Blutdruck = HZV × TPR = (SV × HF) × TPR.

> **Merke:** **Blutdruckregulation:** Barorezeptoren messen Druck (kurzfristig), RAAS rettet Salz und Wasser (langfristig) – Angiotensin II macht eng und Aldosteron speichert! (Barorezeptor-Reflex: Blutdruck ↑ → Parasympathikus ↑ → HF ↓; RAAS: Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O ↑)

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Erregungsleitung (SA-Knoten → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern), AV-Verzögerung (Vollständige Ventrikelfüllung), Schrittmacher, EKG (P, QRS, T).

**Ergänzend vertiefend:** Automatiezentren; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Erregungsleitung: Reihenfolge SA → AV → His → Tawara → Purkinje und Bedeutung der AV-Verzögerung
- Kleiner vs. großer Kreislauf: Verlauf und Druckverhältnisse
- Blutdruckregulation: Barorezeptorreflex (kurzfristig) vs. RAAS (langfristig)

**Typische Prüfungsfallen / Verwechslungen:**
- Lungenarterien führen O₂-armes Blut (Arterie = vom Herzen weg, nicht O₂-reich!)
- AV-Klappen haben Sehnenfäden, Taschenklappen nicht
- SA-Knoten (primärer Schrittmacher, 60--80/min) vs. AV-Knoten (Backup, 40--60/min)
- Arteriolen = Widerstandsgefäße (TPR) vs. Venen = Kapazitätsgefäße (70 % des Blutvolumens)
- Windkesselfunktion: Aorta wandelt pulsatilen in kontinuierlichen Fluss um

**Prüfungsrelevante Zahlen/Fakten:**
- LV-Wanddicke: 10--15 mm; RV: 3--5 mm
- HZV in Ruhe: ca. 5 L/min; Belastung: bis 25 L/min
- AV-Verzögerung: ca. 100 ms
- **Normaler Blutdruck** (junger Erwachsener, Ruhe): systolisch **~115 mmHg** (bzw. 120/80 mmHg); Lungenkreislauf: 25/10 mmHg
- Kapillaroberfläche: ca. 600 m² für Stoffaustausch

---

## Zusammenfassung (ultrakompakt)

- **Herzaufbau**: 4 Kammern; LV-Wand ~10–15 mm (3× dicker als RV), da gegen hohen Systemwiderstand (~120 mmHg)
- **Klappen**: AV-Klappen (Trikuspidal 3 Segel, Mitral 2) mit Sehnenfäden; Taschenklappen (Pulmonal, Aorta je 3) ohne
- **Kreisläufe**: Kleiner Kreislauf: RV → Lungenarterien (O₂-arm!) → Lunge → **Lungenvenen (O₂-reich!) → linker Vorhof (Vorkammer)** — nicht linke Kammer, nicht Aorta, nicht rechter Vorhof. Großer: LV → Aorta → Körper → RA
- **Erregungsleitung**: SA-Knoten (60–80/min) → AV-Knoten (Verzögerung ~100 ms) → His → Tawara → Purkinje (2–4 m/s)
- **Blutdruck**: MAP = HZV × TPR = (SV × HF) × TPR. Kurzfristig: Barorezeptor-Reflex. Langfristig: RAAS (Renin → AII → Vasokonstriktion + Aldosteron → Na⁺/H₂O-Retention)
- **Klinisch**: Herzinfarkt (Troponin!), Herzinsuffizienz (EF <40%), Hypertonie (>140/90 → Schlaganfall)`,
      lernziele: [
        "Den Aufbau des Herzens (4 Kammern, 3 Wandschichten Endokard/Myokard/Epikard, Perikard) und den Unterschied zwischen linkem und rechtem Ventrikel in Wanddicke und Arbeitsdruck beschreiben.",
        "Die vier Herzklappen (AV-Klappen mit Sehnenfäden vs. Taschenklappen ohne Sehnenfäden) nach Lage, Typ und Funktion unterscheiden.",
        "Den Weg der Erregung vom SA-Knoten über AV-Knoten, His-Bündel, Tawara-Schenkel bis zu den Purkinje-Fasern beschreiben und die Bedeutung der AV-Verzögerung erklären.",
        "Die Blutwege durch kleinen Kreislauf (RV → Lunge → LA) und großen Kreislauf (LV → Körper → RA) sowie die Druckverhältnisse skizzieren.",
        "Die kurzfristige Blutdruckregulation (Barorezeptor-Reflex) und die langfristige Regulation (RAAS: Renin → Angiotensin II → Aldosteron) erklären und die Formel Blutdruck = HZV × TPR anwenden.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question:
          "Beschreiben Sie den Ablauf der Erregungsleitung am Herzen vom Sinusknoten bis zur Kammerkontraktion.",
        answer:
          "Sinusknoten (60-80/min, primärer Schrittmacher) → AV-Knoten (Verzögerung ~0,1s → Vorhöfe haben Zeit zu kontrahieren) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern → Kammermuskulatur. Der AV-Knoten ist die einzige elektrische Verbindung zwischen Vorhöfen und Kammern.",
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
      ],
      diagram: "blutkreislauf",

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
      content: `## Einleitung

Blut ist das flüssige Transportmittel des Körpers — 5–6 Liter, die kontinuierlich durch alle Gewebe fließen. Es besteht aus **Plasma** (~55%) als flüssiger Phase und **zellulären Elementen** (~45%, Hämatokrit): Erythrozyten (O₂-Transport), Leukozyten (Immunabwehr) und Thrombozyten (Gerinnung). Alles wird im Knochenmark aus einer gemeinsamen hämatopoetischen Stammzelle gebildet. Für die Medizin ist Blut der direkte diagnostische Zugang: Hämoglobin (Anämie), Leukozytenzahl (Infektion), Thrombozytenzahl (Blutungsrisiko), Blutgruppe (Transfusion), Troponin (Herzinfarkt). MedAT-Schwerpunkte: Bohr-Effekt, AB0/Rhesus-System, Gerinnungskaskade.

**In diesem Kapitel lernst du:**
- **Blutbestandteile** (Plasma, Erythrozyten, Leukozyten, Thrombozyten) und **Hämoglobin** (Bohr-Effekt)
- **AB0- und Rhesus-System** (Antigene, Antikörper, Transfusion)
- **Gerinnungskaskade** (intrinsisch/extrinsisch, Fibrin) und **Bilirubin-Stoffwechsel**

---

## Erythrozyten und Hämoglobin

Erythrozyten sind bikonkave Scheiben **ohne Zellkern** (reife menschliche Erythrozyten haben keinen Zellkern!) mit Hämoglobin (Tetramer 2α2β, Fe²⁺). **Mittlerer Durchmesser ~7,5 µm** (= 7,5×10⁻⁶ m; nicht 7,5 nm, nicht 7,5 mm). Der Bohr-Effekt beschreibt die Rechtsverschiebung der O₂-Bindungskurve bei CO₂↑/pH↓/Temperatur↑ → O₂-Abgabe ↑ im Gewebe. Abbau nach ~120 Tagen in der Milz: Hämoglobin → Bilirubin (unkonjugiert) → Leber → konjugiertes Bilirubin → Galle → Stuhl (Sterkobilin) + Urin (Urobilin).

> **Merke:** **Hämatokrit:** Männer ~45%, Frauen ~42% – Erythrozyten-Volumen im Blut (Anämie ↓, Polyglobulie ↑). (Hämatokrit = Volumenanteil Erythrozyten, Männer höher wegen Testosteron)

---

## Leukozyten

Leukozyten sind die Immunzellen des Blutes. Die 5 Typen im Differentialblutbild:

| Zelltyp | Anteil | Hauptfunktion |
|---|---|---|
| **Neutrophile** | ~60% | Erste Linie gegen Bakterien; Phagozytose + Respiratory Burst |
| **Lymphozyten** | ~25% | Adaptive Immunität: B-Zellen (Antikörper), T-Zellen (zellulär), NK-Zellen |
| **Monozyten** | ~5% | Vorläufer von Makrophagen und dendritischen Zellen; Phagozytose |
| **Eosinophile** | ~3% | Parasitenabwehr; Allergiereaktionen (Typ I/III) |
| **Basophile** | ~1% | Histaminfreisetzung; Allergie und Entzündung |

**Linksverschiebung** (↑ stabkernige Neutrophile) = Zeichen akuter Bakterieninfektion. Leukozytose (>10.000/µL) deutet auf Infektion hin; Leukopenie kann Chemotherapie-Nebenwirkung sein.

---

## Gerinnung und Hämostase

Primäre Hämostase: Vasokonstriktion → Thrombozytenadhäsion (vWF (von-Willebrand-Faktor)-GPIb) → -aggregation (ADP, Thromboxan A₂, Fibrinogen-GPIIb/IIIa) → Plättchenpfropf. Sekundäre Hämostase (Koagulationskaskade): Extrinsisch (TF+VIIa, schnell) + Intrinsisch (XIIa, langsam) → Gemeinsam: Xa+Va → Thrombin → Fibrinogen → Fibrin. Vitamin K aktiviert Faktoren II, VII, IX, X.

> **Merke:** **Gerinnungskaskade:** Extrinsisch = TF+VII (schnell, Sekunden), Intrinsisch = XII (langsam, Minuten), Endstrecke = Xa+Va → Thrombin → Fibrin! (Beide Wege aktivieren Faktor X → Prothrombinase-Komplex → Thrombin → Fibrinogen → Fibrin)

![Blutgerinnung](/grafik-7-gerinnung.svg)

**Erklärung zur Grafik:** Die Grafik zeigt die primäre Hämostase (Thrombozytenpfropf), den extrinsischen und intrinsischen Weg sowie die gemeinsame Endstrecke (Thrombin → Fibrin) inkl. Vitamin-K-abhängiger Faktoren.

![Positive Rückkopplung und Kaskade](/grafik-19-komplement.svg)

**Erklärung zur Grafik:** Kaskaden und Verstärkung; die Grafik veranschaulicht das Prinzip der Gerinnung (positive Rückkopplung: Thrombin aktiviert weitere Thrombinbildung).

---

## Blutgruppen

AB0-System: Blutgruppe A (Antigen A, Anti-B IgM), B (Antigen B, Anti-A IgM), AB (A+B, keine AK, Universalempfänger), 0 (keine Antigene, Anti-A+B IgM, Universalspender). Rhesus-System: Rh+ (ca. 85% der Bevölkerung). Rh-Inkompatibilität: Rh−-Mutter + Rh+-Kind → 1. Geburt: Sensibilisierung → 2. Schwangerschaft: Anti-D (IgG) überquert Plazenta → fetale Hämolyse. Prophylaxe: Anti-D-Immunglobulin post partum.

> **Merke:** **AB0-Blutgruppen:** 0 = Universalspender (keine Antigene), AB = Universalempfänger (keine Antikörper) – natürliche IgM-Antikörper! (A hat Anti-B, B hat Anti-A, AB hat keine, 0 hat Anti-A+B)

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** O₂-Bindungskurve (S-Form), Bohr-Effekt (pH↓, CO₂↑, Temperatur↑ → Kurve rechts, O₂-Abgabe erleichtert), Hämoglobin, 2,3-BPG, Kooperativität.

**Ergänzend vertiefend:** Fetal-Hb; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Bohr-Effekt: Welche Faktoren verschieben die O₂-Bindungskurve nach rechts?
- AB0-Blutgruppen: Antigene, Antikörper, Universalspender/-empfänger
- Gerinnungskaskade: Extrinsisch (TF+VII) vs. intrinsisch (XII), gemeinsame Endstrecke

**Typische Prüfungsfallen / Verwechslungen:**
- **Serum vs. Plasma:** Unterschied = **Gerinnungsfaktoren**. **Plasma** enthält Fibrinogen und andere Gerinnungsfaktoren (Blut + Antikoagulans). **Serum** = Plasma **ohne** Gerinnungsfaktoren (nach Gerinnung abgetrennt). Serum ≠ Plasma wegen Fehlen der Gerinnungsfaktoren.
- AB0-Antikörper sind natürlich vorhanden (IgM), Rhesus-Antikörper erst nach Sensibilisierung (IgG)
- Hämophilie A = Faktor VIII-Mangel (nicht IX); Hämophilie B = Faktor IX
- Fe²⁺ in Hämoglobin (O₂-bindend) vs. Fe³⁺ = Methämoglobin (kann kein O₂ binden)
- Linksverschiebung im Blutbild = unreife Stabkernige ↑ (akute Infektion), nicht Linksverschiebung der O₂-Kurve

**Prüfungsrelevante Zahlen/Fakten:**
- Erythrozyten-Lebensdauer: ca. 120 Tage, Abbau in der Milz
- Neutrophile: 50--70 % der Leukozyten (erste Verteidigungslinie)
- Vitamin K: Faktoren II, VII, IX, X (Merkhilfe: "1972")
- Thrombozyten: 150.000--400.000/µL; Spontanblutung bei <20.000/µL
- Rh+ bei ca. 85 % der Bevölkerung

---

## Zusammenfassung (ultrakompakt)

- **Blut**: Plasma (55%, Albumin/Fibrinogen/Globuline) + zelluläre Elemente (45%); Serum = Plasma ohne Fibrinogen
- **Erythrozyten**: kernlos, bikonkav, Hämoglobin (2α2β, Fe²⁺); **Bohr-Effekt**: CO₂↑/pH↓ → Rechtsverschiebung → O₂-Abgabe ↑ im Gewebe
- **Hämostase**: primär (Vasokonstriktion + Thrombozytenadhäsion via vWF-GPIb) → sekundär (Gerinnungskaskade → Thrombin → Fibrin). Vitamin K aktiviert Faktoren II, VII, IX, X
- **AB0-System**: Antigene auf Erythrozyten; natürliche IgM-Antikörper. Blutgruppe 0 = Universalspender, AB = Universalempfänger
- **Rhesus**: Rh⁻-Mutter + Rh⁺-Kind → Sensibilisierung → 2. Schwangerschaft: IgG (plazentagängig!) → Morbus haemolyticus neonatorum → Anti-D-Prophylaxe
- **Klinisch**: Anämie (Hb ↓), Hämophilie A (Faktor VIII-Mangel), vWF-Mangel, Thrombozytopenie`,
      lernziele: [
        "Die Zusammensetzung des Blutes (Plasma vs. zelluläre Elemente, Hämatokrit, Plasma vs. Serum) und die Hauptfunktionen der Plasmaproteine (Albumin, Fibrinogen, Globuline) beschreiben.",
        "Den Aufbau und die Funktion des Hämoglobins erklären sowie den Bohr-Effekt und die O₂-Bindungskurve (Rechtsverschiebung bei CO₂↑/pH↓) interpretieren.",
        "Die primäre Hämostase (Vasokonstriktion, Thrombozytenaggregation, vWF) und die sekundäre Hämostase (extrinsischer/intrinsischer Weg, gemeinsame Endstrecke, Fibrin) beschreiben und die Rolle von Vitamin K nennen.",
        "Die AB0-Blutgruppen (Antigene auf Erythrozyten, natürliche IgM-Antikörper) und das Rhesus-System erklären sowie die klinischen Konsequenzen der Rhesus-Inkompatibilität (Morbus haemolyticus neonatorum, Anti-D-Prophylaxe) kennen.",
        "Den Erythrozyten-Abbauweg (Hämoglobin → Bilirubin → Leber → Galle) beschreiben und die häufigsten Anämieformen (Eisenmangel, B12/Folsäure, hämolytisch) nach Laborbefund unterscheiden.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Aus welchen Bestandteilen setzt sich Blut zusammen?",
        answer:
          "Plasma (~55%): Wasser, Proteine (Albumin, Globuline, Fibrinogen), Elektrolyte, Hormone. Zelluläre Bestandteile (~45%): Erythrozyten (O₂-Transport, kein Kern), Leukozyten (Immunabwehr) und Thrombozyten (Hämostase, Zellkernlos). Hämatokrit = Anteil zellulärer Bestandteile am Gesamtblutvolumen.",
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
      ],
      diagram: "blutbestandteile",

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
      content: `## Einleitung

Das Immunsystem löst eine fundamentale Aufgabe: es unterscheidet "selbst" von "fremd" — und zerstört das Fremde, ohne sich selbst anzugreifen. Es arbeitet auf zwei Ebenen: die **angeborene Immunität** (sofort, unspezifisch, kein Gedächtnis) mit Neutrophilen, Makrophagen, NK-Zellen und Komplement, und die **erworbene Immunität** (Tage, hochspezifisch, Gedächtnisbildung) mit T- und B-Zellen. Das Verbindungsglied: MHC-Moleküle präsentieren Antigene an T-Zellen und starten die zielgerichtete Immunantwort. Für die Medizin ist das Immunsystem allgegenwärtig: Infektionen, Impfungen, Allergien, Autoimmunerkrankungen, Transplantatabstoßung. MedAT-Klassiker: MHC I vs. II, Antikörperklassen, Allergie Typ I, aktiv vs. passiv.

**In diesem Kapitel lernst du:**
- **Angeborene vs. erworbene Immunität** und zentrale Zellen (Neutrophile, Makrophagen, NK, T/B)
- **MHC I vs. MHC II** (Präsentation, Zielzellen) und **Komplementsystem** (klassisch, alternativ, Lektin)
- **Antikörperklassen** (IgG, IgM, IgA, IgE) und **Allergie Typ I** (IgE, Mastzellen)

---

## Angeborene Immunität

Zelluläre Komponenten: Neutrophile (Phagozytose, Respiratory Burst), Makrophagen (Phagozytose, Antigenpräsentation MHC II, IL-1/TNF-α), NK-Zellen (töten Zellen ohne MHC-I über Perforin/Granzyme), dendritische Zellen (Brücke zur adaptiven Immunität). Das Komplementsystem kann über drei Wege aktiviert werden: **Klassischer Weg** (Antigen-Antikörper-Komplexe aktivieren C1q), **Lektin-Weg** (Mannose-bindendes Lektin/MBL erkennt Pathogenzucker), **Alternativer Weg** (spontane C3-Hydrolyse + Verstärkungsschleife auf Pathogenoberflächen). Alle drei Wege münden in C3-Spaltung → C3a (Anaphylatoxin) + C3b (Opsonin) → MAC-Bildung. Humorale Komponenten: Komplementsystem – C3b (Opsonierung), C5a (Chemotaxis), MAC/C5b-C9 (Lyse). Interferone hemmen Virusreplikation.

> **Merke:** **Angeborene vs. Erworbene:** Angeboren = schnell (Minuten), unspezifisch, kein Gedächtnis (Makrophagen, Neutrophile, Komplement). Erworben = langsam (Tage), spezifisch, Gedächtnis (T-/B-Zellen, Antikörper). (Angeborene Immunität reagiert sofort, erworbene braucht Zeit für klonale Expansion)

![Immunsystem](/grafik-8-immunitaet.svg)

**Erklärung zur Grafik:** Die Abbildung fasst angeborene (Barrieren, Phagozyten, Komplement) und erworbene Immunität (T-/B-Zellen) sowie MHC I/II und Antikörper zusammen.

![Komplement und Kaskaden](/grafik-19-komplement.svg)

**Erklärung zur Grafik:** Komplementsystem (klassisch, Lektin, alternativ) und Lyse/Opsonierung; die Grafik ergänzt die angeborene Immunität und die Verbindung zur Antikörper-Aktivierung.

---

## Erworbene Immunität und T-Zellen

CD4⁺ T-Helferzellen (MHC II, koordinieren B-Zellen und CTL), CD8⁺ zytotoxische T-Zellen (MHC I, töten virusinfizierte Zellen/Tumorzellen per Perforin/Granzyme), Treg (Selbsttoleranz). B-Zellen produzieren Antikörper (Plasmazellen) und bilden Gedächtniszellen. Klonale Selektion → klonale Expansion bei Antigenerstkontak.

> **Merke:** **MHC-Präsentation:** MHC I auf ALLEN Zellen zeigt CD8⁺ Viren (innen), MHC II auf APCs zeigt CD4⁺ Bakterien (außen)! (MHC I → CD8⁺ → intrazelluläre Pathogene; MHC II → CD4⁺ → extrazelluläre Pathogene)

---

## Antikörper und Impfung

IgM (Primärantwort, Pentamer, aktiviert Komplement); IgG (Sekundärantwort, monomer, plazentagängig, häufigste Klasse); IgA (Dimer, Schleimhaut-Sekretion, Schutz Atemwege/Darm); IgE (Allergie, bindet an Mastzellen/Basophile). Aktive Impfung: Antigen → eigene Antikörper + Gedächtnis (dauerhaft). Passive Immunisierung: fertige Antikörper → sofortiger Schutz, kein Gedächtnis, kurzfristig.

> **Merke:** **Antikörper-Klassen:** IgM = Erste (Pentamer, Primär), IgG = Gedächtnis (Sekundär, Plazenta), IgA = Schleimhaut (Dimer), IgE = Allergie (Mastzellen)! (IgM → akut, IgG → chronisch/Impfung, IgA → Sekrete, IgE → Anaphylaxie)

---

## Allergie und Autoimmunität

**Definition (prüfungssicher):** Eine **Autoimmunerkrankung** ist eine Erkrankung, die **durch eine Immunreaktion auf körpereigene Antigene** hervorgerufen wird — nicht durch allergische Reaktion auf körperfremde Antigene, nicht durch Injektion von Immunglobulinen, nicht durch gesteigerte NK-Zellen-Aktivität, nicht durch Transplantatabstoßung (die zwar immunologisch ist, aber gegen fremde Gewebeantigene).

Typ-I-Allergie (IgE-vermittelt): Sensibilisierung (Allergen → Th2 → IgE auf Mastzellen) → Re-Exposition (Allergen kreuzvernetzt IgE → Mastzell-Degranulation → Histamin, Leukotriene). Manifestationen: Rhinitis, Asthma, Urtikaria, Anaphylaxie. Notfalltherapie Anaphylaxie: Adrenalin i.m. (β₂ Bronchodilatation, α₁ Vasokonstriktion). Allergie-Typen II–IV: Typ II (zytotoxisch: Antikörper gegen Zelloberflächenantigene, z.B. Autoimmunhämolyse); Typ III (Immunkomplexe: z.B. Serumkrankheit, SLE-Nephritis); Typ IV (verzögert/zellulär: T-Zell-vermittelt, z.B. Tuberkulin-Test, Kontaktdermatitis). Nur Typ I ist IgE-vermittelt und soforttyp. Autoimmunerkrankungen entstehen durch Verlust der Selbsttoleranz.

> **Merke:** **Impfung:** Aktiv = Antigen → eigene Antikörper → Gedächtnis (Wochen, Jahre), Passiv = fertige Antikörper → sofort, kurz (Stunden, Monate, kein Gedächtnis)! (Aktiv: MMR, Tetanus; Passiv: Tetanus-Immunglobulin, Anti-D)

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Angeborene Immunität (schnell, unspezifisch, keine Gedächtnisbildung) vs. erworbene (spezifisch, Gedächtnis, B/T-Zellen), Barrieren, Phagozyten, Komplement, Antikörper.

**Ergänzend vertiefend:** Kreuzpräsentation; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Angeborene vs. erworbene Immunität: Geschwindigkeit, Spezifität, Gedächtnis
- MHC I vs. MHC II: Welche Zellen exprimieren sie, welche T-Zellen erkennen sie?
- Antikörperklassen: IgM, IgG, IgA, IgE -- Struktur, Funktion, Zeitpunkt

**Typische Prüfungsfallen / Verwechslungen:**
- MHC I auf ALLEN kernhaltigen Zellen (nicht nur APCs!) → CD8⁺
- IgM = Primärantwort (akut); IgG = Sekundärantwort (Gedächtnis, plazentagängig)
- NK-Zellen: angeborene Immunität, töten bei FEHLENDEM MHC I ("Missing Self")
- Aktive Impfung (Antigen, langsam, dauerhaft) vs. passive (Antikörper, sofort, kurzfristig)
- Lebendimpfstoffe kontraindiziert bei Immunsuppression!

**Prüfungsrelevante Zahlen/Fakten:**
- IgG macht ca. 75 % der Serum-Immunglobuline aus, Halbwertszeit ca. 21 Tage
- Nur IgG kann die Plazenta passieren (Nestschutz)
- Komplementeffekte: C3b (Opsonierung), C5a (Chemotaxis), C5b-C9/MAC (Lyse)
- Anaphylaxie-Therapie: Adrenalin i.m. (erste Wahl!)
- Herdenimmunität für Masern: ab ca. 95 % Durchimpfungsrate

---

## Zusammenfassung (ultrakompakt)

- **Angeboren** (sofort, unspezifisch, kein Gedächtnis): Neutrophile, Makrophagen, NK-Zellen, Komplement (C3b Opsonierung, C5a Chemotaxis, MAC Lyse)
- **Erworben** (Tage, spezifisch, Gedächtnis): T-Zellen (zelluläre Immunität), B-Zellen → Plasmazellen → Antikörper
- **MHC I** (alle kernhaltigen Zellen) → **CD8⁺**-T-Zellen (intrazelluläre Pathogene, Viren). **MHC II** (APCs: Makrophagen, DC, B-Zellen) → **CD4⁺**-T-Helferzellen (extrazelluläre Pathogene)
- **Antikörper**: IgM (Primärantwort, Pentamer, erstes AK), IgG (Sekundärantwort, plazentagängig, Nestschutz), IgA (Schleimhaut, Dimere), IgE (Allergie, Mastzellen)
- **Aktive Impfung**: Antigen → eigene Antikörper + Gedächtnis (langsam). Passive: fertige Antikörper → sofort, kein Gedächtnis (Tetanus-Immunglobulin)
- **Allergie Typ I**: IgE auf Mastzellen → Re-Exposition → IgE-Quervernetzung → Histaminfreisetzung → Anaphylaxie → **Adrenalin i.m.!**`,
      lernziele: [
        "Die angeborene (unspezifische) und erworbene (adaptive, spezifische) Immunität nach Reaktionsgeschwindigkeit, Spezifität und Gedächtnisbildung unterscheiden und die wichtigsten Zelltypen jeder Linie benennen.",
        "Das Komplementsystem (klassischer, alternativer, Lektin-Weg) mit seinen Effekten (C3b Opsonierung, C5a Chemotaxis, MAC Lyse) beschreiben.",
        "Die Antikörperklassen (IgM: Primärantwort, Pentamer; IgG: Sekundärantwort, plazentagängig; IgA: Schleimhaut; IgE: Allergie/Mastzellen) nach Struktur und Funktion unterscheiden.",
        "Die MHC-Präsentation erklären: MHC I (alle kernhaltigen Zellen) → CD8⁺-T-Zellen (Viren, intrazellulär); MHC II (APCs) → CD4⁺-T-Zellen (Bakterien, extrazellulär).",
        "Aktive vs. passive Immunisierung sowie den IgE-vermittelten Allergietyp-I-Mechanismus (Sensibilisierung → Re-Exposition → Histaminfreisetzung → Anaphylaxie, Therapie: Adrenalin) erklären.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen zytotoxischen T-Zellen (CD8⁺) und T-Helferzellen (CD4⁺)?",
        answer:
          "CD8⁺-T-Zellen (zytotoxisch) erkennen via MHC I körpereigene, virusbefallene oder entartete Zellen und töten sie durch Perforin/Granzyme. CD4⁺-T-Helferzellen erkennen extrazelluläre Antigene via MHC II auf APCs und koordinieren die Immunantwort: Th1 (IFN-γ → Makrophagen-Aktivierung) und Th2 (IL-4/-5 → IgE-Produktion, Allergien).",
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
      diagram: "immune-response",

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
      stichworte: ["Lymphknoten", "Milz", "Thymus", "Lymphe", "Lymphgefäße", "Lymphozytenreifung"],
      content: `## Einleitung

Das lymphatische System ist das unterschätzte dritte Kreislaufsystem. Es hat drei Hauptaufgaben: täglich ~2–4 L interstitielle Flüssigkeit zurück ins Blut transportieren (sonst Ödem), Immunabwehr durch Lymphknoten (filtern Lymphe, präsentieren Antigene) und Fettresorption (Chylomikronen aus dem Darm über die Lymphe, nicht über die Pfortader). Die zentralen lymphatischen Organe — Lymphknoten, Milz und Thymus — haben präzise Architekturen für unterschiedliche Aufgaben. MedAT-Relevanz: Lymphknoten-Zonierung, Milz-Kompartimente, T-Zell-Selektion im Thymus.

**In diesem Kapitel lernst du:**
- **Funktionen** des Lymphsystems (Flüssigkeitsrücktransport, Immunität, Fettresorption)
- **Lymphknoten** (Rinde/Mark, B- und T-Zell-Zonen) und **Milz** (weiße/rote Pulpa)
- **Thymus** (T-Zell-Reifung, positive/negative Selektion)

---

## Lymphknoten — Architektur und Immunfunktion

Der Lymphknoten filtert Lymphe und initiiert Immunantworten. Seine zonale Architektur trennt B- und T-Zell-Areale präzise:

- **Cortex** (Rinde): **B-Zellen** in Follikeln (Primärfollikel: ruhend; Sekundärfollikel mit Keimzentrum: aktiv → Antikörper-Produktion). Hier entsteht die humorale Immunantwort
- **Paracortex**: **T-Zellen** (CD4⁺ und CD8⁺) + dendritische Zellen. Hier werden T-Zellen via MHC-Antigen-Präsentation aktiviert → zelluläre Immunantwort
- **Mark** (Medulla): **Plasmazellen** (sezernieren Antikörper) + Makrophagen. Markstränge + Marksinus

**Lymphfluss:** Lymphe tritt über **mehrere afferente Gefäße** ein (Randsinus → Cortex → Paracortex → Marksinus) und verlässt den Knoten über **ein efferentes Gefäß** am Hilus.

> **Merke:** Lymphknoten-Architektur: **Cortex** = B-Zellen (Follikel, Antikörper), **Paracortex** = T-Zellen + dendritische Zellen (zelluläre Immunität), **Mark** = Plasmazellen (Sekretion). Afferenz: mehrere Gefäße. Efferenz: ein Gefäß.

---

## Milz und Thymus — Funktion und klinische Bedeutung

**Milz** (~150 g, filtert ~1 L Blut/min) hat zwei funktionelle Kompartimente:
- **Rote Pulpa** (~80 %): Filtert alte/defekte Erythrozyten (Makrophagen), speichert ~30 % aller Thrombozyten
- **Weiße Pulpa** (~20 %): Immunabwehr gegen Blutpathogene; PALS (T-Zellen, periarteriolär) + Follikel (B-Zellen, Marginalzone)

**Splenektomie-Risiko:** Milz filtert **bekapselte Bakterien** (Pneumokokken, Meningokokken, H. influenzae) besonders effektiv. Ohne Milz → **OPSI** (Overwhelming Post-Splenectomy Infection): perakute Sepsis mit hoher Letalität. Prophylaxe: Impfung + Penicillin-Prophylaxe.

**Thymus** (oberes Mediastinum): Reifungsort der T-Zellen aus dem Knochenmark. Größte Aktivität vor der Pubertät, dann Involution:
1. **Positive Selektion** (Cortex): T-Zellen, die MHC-I oder MHC-II erkennen, überleben (~3–5 % aller Thymozyten)
2. **Negative Selektion** (Mark): T-Zellen, die Selbst-Antigene zu stark erkennen → Apoptose (zentrale Toleranz → verhindert Autoimmunität)

**B-Zell-Reifung** erfolgt im Knochenmark: Stammzelle → Pro-B → Prä-B → naive B-Zelle. Zentraltoleranzmechanismus: B-Zellen, deren BCR körpereigene Antigene zu stark binden, werden durch klonale Deletion (Apoptose) oder Rezeptorediting eliminiert, um Autoimmunität zu verhindern.

> **Merke:** **Milz**: rote Pulpa (Ery-Abbau + Thrombozytenspeicher) vs. weiße Pulpa (Immunabwehr). **Splenektomie** = OPSI-Risiko → Impfung + Penicillin! **Thymus**: positive Selektion (MHC-Erkennung) + negative Selektion (Selbsttoleranz) → nur ~5 % der Thymozyten überleben.

---

## Lymphgefäße und Lymphtransport im Detail

Lymphkapillaren (blind endend, basalmembranfrei) → Lymphgefäße (mit Taschenklappen und Lymphangion-Pumpe aus glatter Muskulatur) → Ductus thoracicus / Ductus lymphaticus dexter → linke/rechte Vena subclavia. Die Skelettmuskelpumpe und Atembewegungen unterstützen den Lymphtransport zusätzlich.

Der **Ductus thoracicus** (ca. 38-45 cm lang) sammelt die Lymphe aus etwa 75 % des Körpers (beide Beine, linker Arm, linke Thoraxhälfte, Abdomen) und mündet in den linken Venenwinkel (Confluens der V. jugularis interna sinistra und V. subclavia sinistra). Der rechte **Ductus lymphaticus dexter** drainiert den rechten Arm, die rechte Thoraxhälfte und die rechte Kopfhälfte. Aus dem Darm transportieren Chylomikronen-beladene Lymphgefäße (Chylusgefäße, Vasa lactea) resorbierte Lipide direkt ins Blut, unter Umgehung der Leber-Erstpassage.

> **Merke:** Ductus thoracicus = 75 % der Körperlymphe → linker Venenwinkel. Lymphangion-Pumpe + Klappen + Muskelpumpe treiben den Lymphfluss an.

![Lymphabfluss](/grafik-9-lymphabfluss.svg)

**Erklärung zur Grafik:** Die Grafik zeigt den Lymphabfluss von den Kapillaren über Sammelgefäße zum Ductus thoracicus bzw. ductus dexter und den Eintritt in die Venenwinkel (~75 % links).

![Lymphknoten und Immunabwehr](/grafik-8-immunitaet.svg)

**Erklärung zur Grafik:** Lymphozyten und Immunzellen in Lymphknoten; die Grafik verknüpft Lymphabfluss mit Filterfunktion und Immunantwort (T-/B-Zellen).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Lymphsystem (Flüssigkeitsrücktransport, Immunabwehr, Fetttransport Chylomikronen), Lymphknoten, Milz, Ductus thoracicus, Lymphozyten-Rezirkulation.

**Ergänzend vertiefend:** MALT; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Drei Funktionen des Lymphsystems: Flüssigkeitsrücktransport, Immunabwehr, Fetttransport
- Lymphknoten-Architektur: Wo B-Zellen, wo T-Zellen, wo Plasmazellen?
- Milz: Weiße vs. rote Pulpa und Konsequenzen der Splenektomie

**Typische Prüfungsfallen / Verwechslungen:**
- Cortex (B-Zellen, Follikel) vs. Paracortex (T-Zellen) im Lymphknoten
- Weiße Pulpa (Immunfunktion) vs. rote Pulpa (Erythrozyten-Filterung) der Milz
- Positive Selektion (Thymus-Cortex: MHC-Erkennung) vs. negative Selektion (Thymus-Mark: Selbsttoleranz)
- Lymphe vs. Blutplasma: Lymphe enthält weniger Proteine, keine Erythrozyten

**Prüfungsrelevante Zahlen/Fakten:**
- Täglicher Lymphfluss: ca. 2--4 L interstitielle Flüssigkeit zurück ins Blut
- Nur ca. 5 % der Thymozyten überleben positive und negative Selektion
- OPSI-Risiko: bekapselte Bakterien (Pneumokokken, Meningokokken, H. influenzae)
- Milz speichert ca. 30 % der Thrombozyten
- Ductus thoracicus: größtes Lymphgefäß, mündet in V. subclavia sinistra

---

## Zusammenfassung (ultrakompakt)

- **3 Hauptfunktionen**: Flüssigkeitsrücktransport (2–4 L/Tag), Immunabwehr (Lymphknoten), Fetttransport (Chylomikronen → Ductus thoracicus, nicht Pfortader!)
- **Lymphknoten**: Cortex (B-Zellen, Follikel), Paracortex (T-Zellen), Mark (Makrophagen, Plasmazellen). Lymphe fließt von Cortex → Mark
- **Milz**: Weiße Pulpa (Immunabwehr, B/T-Zell-Areale) + Rote Pulpa (Erythrozyten-Abbau, Thrombozytenspeicher). Bei Splenektomie: **OPSI-Risiko** (bekapselte Bakterien: Pneumokokken, Meningokokken, H. influenzae) → Impfung + Penicillin-Prophylaxe
- **Thymus**: positive Selektion (T-Zellen die MHC erkennen, überleben) + negative Selektion (T-Zellen die zu stark an Selbst-Ag binden, sterben) → nur ~5% überleben → zentrale Toleranz
- **Klinisch**: Lymphödem (Abflussbehinderung), Lymphome: Hodgkin (Reed-Sternberg-Zellen, B-Symptome), Non-Hodgkin (DLBCL häufigste Form)`,
      lernziele: [
        "Die drei Hauptfunktionen des lymphatischen Systems (Flüssigkeitsrücktransport, Immunabwehr, Fetttransport) beschreiben.",
        "Den Aufbau und die Filterleistung eines Lymphknotens (Cortex, Paracortex, Mark) erklären.",
        "Die Funktionen der Milz (weiße und rote Pulpa) unterscheiden und das OPSI-Risiko nach Splenektomie begründen.",
        "Die T-Zell-Reifung im Thymus mit positiver und negativer Selektion erläutern.",
        "Das Konzept der zentralen Toleranz und deren Bedeutung für die Autoimmunprävention darlegen.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Welche Aufgaben hat der Thymus bei der T-Zell-Reifung?",
        answer:
          "Im Thymus reifen T-Lymphozyten aus dem Knochenmark. Positive Selektion: Nur T-Zellen, die MHC erkennen können, überleben. Negative Selektion: T-Zellen, die zu stark an körpereigene Antigene binden, werden durch Apoptose eliminiert (zentrale Toleranz). Nur ~2-5% überleben. Klinisch: DiGeorge-Syndrom = Thymusaplasie → schwerer T-Zell-Mangel.",
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
      stichworte: [
        "Gasaustausch",
        "Alveolen",
        "Surfactant",
        "Hämoglobin-O₂-Bindung",
        "Atemmechanik",
        "Zwerchfell",
        "Bronchien",
      ],
      content: `## Einleitung

Ohne Sauerstoff kein Leben — und ohne ein System, das O₂ aus der Luft ins Blut bringt und CO₂ zurückgibt, kein Sauerstoff. Das Atmungssystem löst dieses Problem elegant: ~300 Millionen Alveolen bieten 80–140 m² Austauschfläche, die Blut-Luft-Schranke ist nur 0,5 µm dünn. Surfactant verhindert, dass die winzigen Alveolen kollabieren. Die Atemansteuerung reagiert primär auf CO₂/pH (nicht auf O₂!) über zentrale Chemorezeptoren. Für die Medizin sind Atemwegserkrankungen (Asthma, COPD) die häufigsten Erkrankungen überhaupt. MedAT-Schwerpunkte: Surfactant, Atemmechanik, CO₂-Transport, Bohr-Effekt, Atemregulation.

**In diesem Kapitel lernst du:**
- **Alveolen**, **Surfactant** (Typ-II-Pneumozyten) und **Blut-Luft-Schranke**
- **Atemmechanik** (Inspiration/Exspiration, Compliance) und **Gasaustausch**
- **CO₂-Transport** (Bikarbonat, Bohr-Effekt) und **Atemregulation** (CO₂/pH, Chemorezeptoren)

---

## Surfactant und Alveolarstruktur

**Gasaustausch findet in den Alveolen statt, nicht in den Bronchien.** Die Bronchien leiten die Luft; der eigentliche O₂/CO₂-Austausch erfolgt in den **Alveolen**. Sauerstoff wird im Blut an **Hämoglobin der Erythrozyten** gebunden; ein Teil des CO₂ wird ebenfalls an Hämoglobin gebunden (als Carbaminohämoglobin). Mit jedem Atemzug wird **nicht** die gesamte Luftmenge erneuert (Totraum, Residualvolumen).

Die ~300 Millionen Alveolen sind die funktionellen Einheiten des Gasaustauschs. Ihre Wand besteht aus zwei Pneumozytentypen:
- **Typ-I-Pneumozyten** (~95 % der Oberfläche): Hauchfein (0,2 µm), ermöglichen den Gasaustausch
- **Typ-II-Pneumozyten** (~5 % der Oberfläche): Kubische Zellen, produzieren **Surfactant** (Dipalmitoylphosphatidylcholin/DPPC, ~90 % Phospholipide)

**Surfactant-Funktion:** Senkt die Oberflächenspannung an der Luft-Flüssigkeits-Grenze. Nach dem **Laplace-Gesetz** (P = 2T/r) würden kleine Alveolen kollabieren, weil höherer Druck als in großen. Surfactant verhindert das durch Spannungsreduktion → Alveolen bleiben offen.

**Klinisch — RDS (Neonatales Atemnotsyndrom):** Frühgeborene (<28 SSW) haben unreife Typ-II-Pneumozyten → Surfactant-Mangel → Atelektase → Hypoxie. Prophylaxe: Betamethason/Dexamethason (Mutter antenatal → Lungenreifung ↑). Therapie: Surfactant-Instillation.

> **Merke:** **Surfactant**: Typ-II-Pneumozyten, DPPC (~90 % Phospholipide) → Oberflächenspannung ↓ → Alveolarkollaps (Atelektase) verhindert. **RDS** bei Frühgeborenen: Surfactant-Mangel → Betamethason antenatal (Prophylaxe).

![Alveolen und Gasaustausch](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Membran und Diffusion; die Grafik veranschaulicht den Gasaustausch über die dünne Blut-Luft-Schranke (O₂ und CO₂ entlang Konzentrationsgradienten).

![Oberflächenspannung und Puffer](/grafik-puffer.svg)

**Erklärung zur Grafik:** Surfactant senkt die Oberflächenspannung; die Grafik ergänzt das Prinzip der Stabilität (analog zu Pufferung) — kleine Alveolen ohne Surfactant kollabieren.

---

## Atemmechanik, Gasaustausch und Atemregulation

**Atemmechanik:**
- **Inspiration** (aktiv): Diaphragma + Mm. intercostales externi kontrahieren → Thoraxvolumen ↑ → intrapulmonaler Druck ↓ (~−1 mmHg) → Luft strömt ein. Intrapleuraler Druck immer **negativ** (~−5 mmHg Ruhe)
- **Exspiration in Ruhe** (passiv): Muskelentspannung → elastische Rückstellung → Luft strömt aus. Nur bei forcierter Exspiration aktiv (Bauchmuskeln, Mm. intercostales interni)

**Gasaustausch durch Diffusion:**
- **O₂**: Alveolär ~100 mmHg → venöses Blut ~40 mmHg → **Gradient 60 mmHg** → O₂ diffundiert ins Blut
- **CO₂**: Venöses Blut ~46 mmHg → Alveolen ~40 mmHg → **Gradient 6 mmHg** (klein!) → aber CO₂ diffundiert ~20× schneller (höhere Löslichkeit)

**CO₂-Transport** im Blut:
- **70 % Bikarbonat** (HCO₃⁻): Carboanhydrase in Erythrozyten: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Chlorid-Shift (Cl⁻ rein, HCO₃⁻ raus). **Haldane-Effekt**: Desoxy-Hb bindet mehr CO₂
- **23 % Carbaminohämoglobin**: CO₂ an Globin-Aminogruppen
- **7 % gelöst** im Plasma (bestimmt pCO₂)

**Atemregulation:** Zentrale Chemorezeptoren (Medulla oblongata) reagieren auf CO₂/pH → **Hauptantrieb**. Periphere Chemorezeptoren (Karotiskörper) reagieren auf O₂ (erst bei pO₂ <60 mmHg relevant). **COPD-Vorsicht**: Bei chronischer CO₂-Retention → Anpassung der CO₂-Sensitivität → O₂ wird Hauptantrieb → unkontrollierte O₂-Gabe kann Apnoe auslösen!

> **Merke:** **CO₂-Transport**: 70 % Bikarbonat (Carboanhydrase, Chlorid-Shift), 23 % Carbamino-Hb, 7 % gelöst. **Haldane-Effekt**: Desoxy-Hb bindet mehr CO₂. **Atemantrieb**: primär CO₂/pH (zentral), O₂ erst bei pO₂ <60 mmHg (peripher).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Surfactant (Typ-II-Pneumozyten, 90 % Phospholipide/DPPC), Oberflächenspannung, IRDS bei Frühgeborenen, Alveolenaufbau, Gasaustausch (Fick), Compliance.

**Ergänzend vertiefend:** Atemmechanik; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Welche Zellen produzieren Surfactant und woraus besteht es? (Typ-II-Pneumozyten, 90 % Phospholipide/DPPC)
- Wie verläuft der CO₂-Transport im Blut? (70 % HCO₃⁻ via Carboanhydrase, 23 % Carbamino-Hb, 7 % gelöst)
- Was bewirkt der Bohr-Effekt im metabolisch aktiven Gewebe? (Rechtsverschiebung → O₂-Abgabe ↑)

**Typische Prüfungsfallen / Verwechslungen:**
- Typ-I-Pneumozyten (Gasaustausch, 95 % der Fläche) vs. Typ-II-Pneumozyten (Surfactant-Produktion, 5 % der Fläche)
- Aktive Inspiration (Muskelarbeit) vs. passive Exspiration in Ruhe (elastische Rückstellung)
- Bohr-Effekt (O₂-Abgabe im Gewebe, Hb-Kurve) vs. Haldane-Effekt (CO₂-Transport, Desoxy-Hb bindet mehr CO₂)
- Intrapleuraler Druck immer negativ (~−5 mmHg) vs. intrapulmonaler Druck schwankt um 0
- COPD (irreversible Obstruktion, FEV1/FVC < 70 %) vs. Asthma (reversible Obstruktion)

**Lungenvolumina und Spirometrie:**
Die Vitalkapazität (VC) umfasst das maximale Atemvolumen zwischen vollständiger Inspiration und Exspiration und setzt sich aus Atemzugvolumen (AZV ~500 mL), inspiratorischem Reservevolumen (IRV ~3.000 mL) und exspiratorischem Reservevolumen (ERV ~1.100 mL) zusammen. Das Residualvolumen (RV ~1.200 mL) verbleibt nach maximaler Exspiration in der Lunge und kann spirometrisch nicht gemessen werden. Die Totalkapazität (TLC = VC + RV ~5.800 mL) beschreibt das gesamte Lungenvolumen. Die Totraumventilation (anatomischer Totraum ~150 mL) bezeichnet das Volumen, das nicht am Gasaustausch teilnimmt.

**Prüfungsrelevante Zahlen/Fakten:**
- Alveolenzahl: ~300 Mio., Gesamtoberfläche ~80–140 m², Blut-Luft-Schranke ~0,5 µm
- AZV ~500 mL, TLC ~5.800 mL, GFR für Luft: ~12× /min
- pO₂ alveolär ~100 mmHg, venös ~40 mmHg (Gradient 60 mmHg)
- pCO₂ venös ~46 mmHg, alveolär ~40 mmHg (Gradient 6 mmHg)
- RDS bei Frühgeborenen < 28 SSW: Surfactant-Mangel → Betamethason antenatal

---

## Zusammenfassung (ultrakompakt)

- **Alveolen**: ~300 Mio., Oberfläche 80–140 m², Blut-Luft-Schranke 0,5 µm; Typ-I-Pneumozyten (Gasaustausch), Typ-II (Surfactant)
- **Surfactant** (DPPC, ~90%): Senkt Oberflächenspannung → verhindert Alveolarkollaps (Laplace-Gesetz). Mangel bei Frühgeborenen → neonatales Atemnotsyndrom
- **Atemmechanik**: Inspiration aktiv (Diaphragma + Mm. intercostales externi → Unterdruck). Ruhige Exspiration: passiv (elastische Rückstellung)
- **Gasaustausch**: O₂-Gradient 60 mmHg (Alveole → Blut). CO₂ diffundiert 20× schneller (höhere Löslichkeit) trotz nur 6 mmHg Gradient
- **CO₂-Transport**: 70% als Bikarbonat (HCO₃⁻), 23% Carbaminohämoglobin, 7% gelöst
- **Atemregulation**: zentrale Chemorezeptoren (Medulla, pCO₂/pH = **Hauptantrieb**). Periphere (Karotiskörper): O₂ nur bei pO₂ < 60 mmHg. COPD-Hypoxieatem: O₂-Gabe → Atemantrieb kann sinken!
- **Bohr-Effekt**: CO₂↑/pH↓/Temp↑ → Rechtsverschiebung → O₂-Abgabe ↑ im Gewebe`,
      lernziele: [
        "Die Funktion von Surfactant (Typ-II-Pneumozyten, DPPC) und seine Bedeutung zur Verhinderung von Atelektase erklären.",
        "Die Mechanismen der aktiven Inspiration (Diaphragma, Mm. intercostales externi) und passiven Exspiration beschreiben.",
        "Den pulmonalen und peripheren Gasaustausch anhand von Partialdruckgradienten für O₂ und CO₂ erläutern.",
        "Den Bohr-Effekt und die drei Wege des CO₂-Transports im Blut (Bikarbonat, Carbaminohämoglobin, gelöst) benennen.",
        "Die wichtigsten Atemantriebe (zentraler CO₂/pH-Sensor, peripherer O₂-Sensor) und ihre klinische Relevanz bei COPD darstellen.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Was beschreibt der Bohr-Effekt und welche klinische Bedeutung hat er?",
        answer:
          "Der Bohr-Effekt beschreibt die pH-abhängige O₂-Affinität des Hämoglobins: Niedriger pH (Azidose, im Gewebe) → O₂-Bindungskurve verschiebt nach rechts → erleichterte O₂-Abgabe. Hoher pH (Lunge) → Kurve nach links → erleichterte O₂-Aufnahme. Klinisch relevant bei Azidose (mehr O₂-Abgabe) und Hyperventilation.",
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
      ],
      diagram: "atmungssystem",

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
      content: `## Einleitung

Was wir essen, muss auf Molekülebene zerlegt werden, damit es ins Blut aufgenommen werden kann. Das Verdauungssystem zerlegt Nahrung (mechanisch + chemisch), resorbiert Nährstoffe, und scheidet den Rest aus. Der GI-Trakt ist ~9 m lang — vom Mund bis zum Anus. Besonderheit: Drei akzessorische Organe (Leber, Gallenblase, Pankreas) unterstützen die Verdauung durch Galle und Enzyme. Die Dünndarmschleimhaut (Kerckring-Falten + Zotten + Mikrovilli) hat ~200 m² Resorptionsfläche. Für die Medizin sind Erkrankungen des GI-Trakts (Gastritis, Ulkus, Pankreatitis, Ikterus) täglich relevant. MedAT-Schwerpunkte: Magenzelltypen, Trypsin-Aktivierungskaskade, Fett-/Glukoseresorption, Bilirubin-Weg.

**In diesem Kapitel lernst du:**
- **Magen** (Zelltypen, HCl, Pepsin, Regulation) und **Dünndarm** (Resorptionsfläche, Enzyme)
- **Pankreas** (Trypsin-Kaskade, Lipase, Amylase) und **Leber/Galle** (Bilirubin, Gallensäuren)
- **Resorption** (Glukose, Fette, Proteine) und **Bilirubin-Stoffwechsel**

---

## Magen — Sekretion und Regulation

Die Magenschleimhaut enthält fünf spezialisierte Zelltypen mit klar definierten Aufgaben:

| Zelltyp | Sekret | Stimulus |
|---|---|---|
| **Belegzellen** (Parietalzellen) | HCl + **Intrinsic Factor** (IF) | Gastrin (G-Zellen), ACh (N. vagus), Histamin |
| **Hauptzellen** | **Pepsinogen** (→ Pepsin bei pH <3) | ACh, Gastrin |
| **Nebenzellen** (Schleimzellen) | Mukus (Schutzschicht) | Prostaglandine |
| **G-Zellen** (Antrum) | **Gastrin** | Peptide, Dehnung, ACh |
| **D-Zellen** | **Somatostatin** (hemmt Gastrin + HCl) | niedriger pH, Fette |

**HCl-Synthese** (Belegzellen): H⁺/K⁺-ATPase (Protonenpumpe) pumpt H⁺ gegen Gradient. Carboanhydrase liefert H⁺ aus CO₂ + H₂O. **Protonenpumpenhemmer** (PPI, z.B. Omeprazol) blockieren die H⁺/K⁺-ATPase irreversibel → HCl ↓ → Ulkustherapie. **Peristaltik** bezeichnet die koordinierte Kontraktion der Längsmuskulatur gefolgt von Ringmuskulatur — so wird der Bolus oral → aboral transportiert. Gesteuert wird sie vom enterischen Nervensystem (Plexus myentericus = Auerbach, Plexus submucosus = Meissner).

**Aktivierungskaskade im Pankreas:** Trypsinogen wird im Dünndarm durch **Enterokinase** (= Enteropeptidase, auf Bürstensaum-Enterozyten) → Trypsin aktiviert. Trypsin aktiviert dann alle anderen Pankreasenzyme (Chymotrypsinogen, Proelastase, Phospholipase A₂). Gefährlich: Trypsin-Aktivierung schon im Pankreas → **akute Pankreatitis** (Autodigestion).

> **Merke:** **Magenzellen**: Belegzellen = HCl + IF, Hauptzellen = Pepsinogen, Nebenzellen = Mukus, G-Zellen = Gastrin (↑HCl), D-Zellen = Somatostatin (↓HCl). **Trypsinogen → Trypsin** via Enterokinase (Dünndarm) → aktiviert alle anderen Pankreas-Proenzyme.

![Resorption und Transporter](/grafik-1-membrantransport.svg)

**Erklärung zur Grafik:** Epithel mit apikalem und basolateralem Transport; SGLT1, GLUT2 und andere Transporter ermöglichen die Resorption von Glukose, Aminosäuren und Ionen im Dünndarm.

![pH und Verdauung](/grafik-20-ph-skala.svg)

**Erklärung zur Grafik:** Magen-pH ~1 (HCl), Dünndarm neutral bis leicht basisch; die Grafik ergänzt die Bedeutung des pH für Pepsin-Aktivierung und Pankreasenzyme.

---

## Dünndarm-Resorption und Leber-Funktionen

**Resorptionsfläche Dünndarm** (~200 m²): Kerckring-Falten × Zotten × Mikrovilli (Bürstensaum). Spezialisierte Transporter:

| Nährstoff | Transporter | Besonderheit |
|---|---|---|
| Glukose/Galaktose | **SGLT1** (apikal, Na⁺-gekoppelt) | GLUT2 basolateral → Pfortader |
| Fruktose | GLUT5 (apikal) | passiv |
| Aminosäuren | Na⁺-gekoppelte AA-Transporter | Pfortader |
| **Fette** | Mizellen → Enterozyt → **Chylomikronen** | **Lymphe** (Ductus thoracicus) → **nicht Pfortader**! |
| Vitamin B₁₂ | Cubam-Rezeptor (**IF notwendig**) | Nur Ileum (terminales) |

**Bilirubin-Stoffwechsel** (wichtig für Ikterus-Typen):
- Hämoglobin → Häm → **Biliverdin → Bilirubin unkonjugiert** (lipophil, albumin-gebunden, toxisch)
- Leber: UDP-Glukuronosyltransferase (**UGT1A1**) konjugiert → **Bilirubin-Diglukuronid** (wasserlöslich)
- → Galle → Darm → bakteriell → **Sterkobilin** (Stuhl braun) + Urobilinogen → Urin: **Urobilin** (gelb)

> **Merke:** **Bilirubin-Weg**: Hb → unkonjugiertes Bilirubin (Milz, albumin-gebunden) → Leber (UGT1A1, Glukuronidierung) → konjugiert (wasserlöslich) → Galle → Sterkobilin (Stuhl braun) + Urobilin (Urin gelb). **Fett-Transport**: Mizellen → Chylomikronen → **Lymphe** (nicht Pfortader!).

---

## Dickdarm

Der **Dickdarm** (Colon) ist ca. 1,5 m lang und besteht aus Caecum, Colon ascendens/transversum/descendens und Sigma. Hauptaufgabe: **Wasserrückresorption** (~1–1,5 L täglich) und Elektrolytabsorption. Die **Darmflora** (Mikrobiom, >1000 Spezies) fermentiert unverdauliche Ballaststoffe zu kurzkettigen Fettsäuren (Butyrat, Propionat) — wichtige Energiequelle der Colonozyten. Die Peristaltik im Dickdarm ist träger als im Dünndarm (Haustren-Segmentierung).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Magenschleimhaut (Belegzellen: HCl + Intrinsic Factor; Hauptzellen: Pepsinogen; Nebenzellen: Mukus; G-Zellen: Gastrin; D-Zellen: Somatostatin), Magensaft, Pepsin, pH.

**Ergänzend vertiefend:** Regulation der Magensäure; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Welche Zelltypen finden sich in der Magenschleimhaut und welche Sekrete produzieren sie? (Belegzellen: HCl + IF; Hauptzellen: Pepsinogen; Nebenzellen: Mukus; G-Zellen: Gastrin; D-Zellen: Somatostatin)
- Wie werden Pankreasenzyme aktiviert? (Trypsinogen → Trypsin via Enterokinase, dann Kaskade)
- Auf welchem Weg gelangen resorbierte Fette ins Blut? (Mizellen → Enterozyt → Chylomikronen → Lymphe → Ductus thoracicus → Blut)

**Typische Prüfungsfallen / Verwechslungen:**
- Belegzellen (HCl + IF) vs. Hauptzellen (Pepsinogen) – häufigster Verwechslungsfehler
- Fett-Transport über Lymphe (Chylomikronen) vs. Glukose/Aminosäuren über Pfortader
- Unkonjugiertes Bilirubin (lipophil, albumin-gebunden) vs. konjugiertes Bilirubin (wasserlöslich, Galle)
- Prähepatischer Ikterus (Hämolyse, unkonj. ↑) vs. posthepatischer Ikterus (Cholestase, konj. ↑, heller Stuhl)
- SGLT2 (Niere, Glukose-Rückresorption) vs. SGLT1 (Dünndarm, Glukose-Aufnahme)

**Prüfungsrelevante Zahlen/Fakten:**
- Galleproduktion: ~500–1.000 mL/Tag; enterohepatischer Kreislauf recycelt ~95 % der Gallensalze
- Dünndarm-Oberfläche: ~200 m² (Kerckring-Falten + Zotten + Mikrovilli)
- Vitamin-K-abhängige Gerinnungsfaktoren: II, VII, IX, X (Merkhilfe: „1972")
- Nierenschwelle für Glukose: ~180 mg/dL (SGLT2-Kapazitätsgrenze)
- E. coli verursacht ~80 % der unkomplizierten Harnwegsinfekte (Differenzialdiagnose bei GI-Symptomen)

---

## Zusammenfassung (ultrakompakt)

- **Magen**: Belegzellen (HCl + Intrinsic Factor), Hauptzellen (Pepsinogen), G-Zellen (Gastrin). H⁺/K⁺-ATPase = Ziel für PPI (Omeprazol)
- **Pankreas**: Trypsinogen → Trypsin via Enterokinase (im Duodenum). Trypsin aktiviert alle anderen Zymogene. Akute Pankreatitis = vorzeitige Aktivierung
- **Dünndarm-Resorption**: Glukose via SGLT1 (apikal, sekundär-aktiv) → GLUT2 (basolateral). Fette: Mizellen → Enterozyt → Chylomikronen → **Lymphe** (nicht Pfortader!). Vitamin B₁₂: Intrinsic Factor → Ileum
- **Bilirubin-Weg**: Hb → unkonjugiertes Bilirubin (lipophil, albumin-gebunden) → Leber (Glukuronidierung) → konjugiert → Galle → Sterkobilin (Stuhl) + Urobilin (Urin)
- **Leber**: doppelte Blutversorgung (A. hepatica 25% + V. portae 75%), Harnstoffzyklus, Gerinnungsfaktoren (Vit-K-abhängig: II, VII, IX, X), Cholesterin, Albumin
- **GI-Hormone**: Gastrin (HCl ↑), Sekretin (Bikarbonat ↑), CCK (Pankreasenzyme + Galleentleerung), GIP/GLP-1 (Inkretine)`,
      lernziele: [
        "Die Funktion der Magenzellen (Beleg-, Haupt-, Nebenzellen, G-Zellen, D-Zellen) und deren Sekrete benennen und erklären.",
        "Die wichtigsten Pankreasenzyme und deren Aktivierungskaskade (Trypsinogen → Trypsin via Enterokinase) darstellen.",
        "Die Mechanismen der Nährstoffresorption im Dünndarm (SGLT1 für Glukose, Mizellen für Fette, IF für Vitamin B₁₂) erläutern.",
        "Den Bilirubin-Stoffwechsel (unkonjugiert → konjugiert → Sterkobilin/Urobilin) und die drei Ikterus-Typen unterscheiden.",
        "Die Hauptfunktionen der Leber (Entgiftung, Harnstoffzyklus, Gerinnungsfaktor-Synthese, Galleproduktion, Bilirubin-Konjugation) beschreiben.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Welches Enzym spaltet Stärke und wo beginnt die Kohlenhydratverdauung?",
        answer:
          "Die Kohlenhydratverdauung beginnt im Mund durch die Speichel-Amylase (Ptyalin), die Stärke in Maltose und Dextrine spaltet. Im Duodenum setzt die Pankreas-Amylase fort. Bürstensaum-Enzyme (Maltase, Lactase, Sucrase) spalten Disaccharide zu Monosacchariden, die dann resorbiert werden.",
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
      diagram: "verdauungssystem",

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
      content: `## Einleitung

Die Niere ist weit mehr als ein Abfallfilter: Sie reguliert Blutvolumen, Blutdruck, pH-Wert und Elektrolyte — und produziert Hormone (Erythropoetin, Renin). Jede Niere hat ~1 Million Nephrone, die täglich 180 Liter Primärharn filtrieren — durch Rückresorption werden davon >99% zurückgewonnen, nur 1–2 Liter werden als Endurin ausgeschieden. Das RAAS (Renin-Angiotensin-Aldosteron-System) ist zentraler Blutdruckregulator. Für die Medizin: Niereninsuffizienz ist häufig (diabetische Nephropathie als Hauptursache), renale Anämie durch EPO-Mangel, ACE-Hemmer als RAAS-Blocker. MedAT-Schwerpunkte: GFR, Tubulustransporte, ADH/Aldosteron, RAAS-Kaskade.

Der **Harntrakt** besteht aus: Nieren (Urinbildung) → **rechter und linker Harnleiter** (Ureter) → **Harnblase** (Speicherung, 300–500 mL) → **Harnröhre** (Urethra, eine gemeinsame Ausleitung). **Prüfungssicher:** Die korrekte Reihenfolge ist **Harnleiter → Harnblase → Harnröhre** (nicht „rechte und linke Harnröhre“ — es gibt nur eine Harnröhre).

**In diesem Kapitel lernst du:**
- **Nephron** (Glomerulus, Tubuli, GFR ~180 L/Tag) und **Gegenstromprinzip** (Henle-Schleife)
- **Rückresorption** pro Segment (proximal 65 %, SGLT2, Henle, Sammelrohr ADH/AQP2)
- **ADH** (V₂, Aquaporin-2) und **RAAS** (Renin → Ang II → Aldosteron, ACE-Hemmer)

---

## Nephron-Segmente und Rückresorption

Das Nephron filtert täglich ~180 L Primärharn (GFR ~120 mL/min). Über 99 % werden rückresorbiert — nur ~1–2 L Endurin. Jedes Segment hat spezifische Transporter:

| Segment | Resorption | Wichtige Transporter |
|---|---|---|
| **Glomerulus** | Filtration (GFR ~120 mL/min) | Moleküle <70 kDa passieren |
| **Proximaler Tubulus** | **65 %** (Na⁺, H₂O, HCO₃⁻, Glukose 100%) | **SGLT2** (Glukose + Na⁺), NHE3 (Na⁺/H⁺) |
| **Henle-Schleife, absteigend** | H₂O raus (Aquaporin-1) | Für NaCl impermeabel |
| **Henle-Schleife, aufsteigend** | **NaCl raus** (NKCC2), **kein H₂O** | Baut osmotischen Gradienten auf |
| **Distaler Tubulus** | ~10 %, **Aldosteron-abhängig** | ENaC (Na⁺), ROMK (K⁺ raus) |
| **Sammelrohr** | ~4 %, **ADH-abhängig** | **Aquaporin-2** (ADH-reguliert) |

**Gegenstromprinzip (Henle-Schleife):** Die absteigende Schleife konzentriert den Tubulusharn (H₂O raus → NaCl konzentrierter). Die aufsteigende Schleife pumpt NaCl raus (wasserdicht) → schafft osmotischen Gradienten im Mark (bis ~1200 mOsm/L). Dieser Gradient wird dann von ADH genutzt: ADH → Aquaporin-2-Insertion im Sammelrohr → H₂O folgt dem Gradienten → konzentrierter Urin.

**Glukose-Nierenschwelle:** Bis ~180 mg/dL Blutglukose resorbiert SGLT2 alles. Darüber: Glukosurie. **SGLT2-Hemmer** (Gliflozine) blockieren SGLT2 → Glukose im Urin → Blutzucker ↓ (Diabetes Typ 2 Therapie).

> **Merke:** Nephron-Resorption: proximal **65 %** (alles, SGLT2), Henle **20 %** (NaCl), distal **10 %** (Aldosteron-ENaC), Sammelrohr **4 %** (ADH-AQP2). Gesamt: **99 %** zurück → ~1–2 L Urin.

![Nephron](/grafik-10-nephron.svg)

**Erklärung zur Grafik:** Die Abbildung zeigt den Aufbau des Nephrons (Glomerulus, proximaler Tubulus, Henle-Schleife, distaler Tubulus, Sammelrohr) und den osmotischen Gradienten im Gegenstromsystem.

![Gegenstrom und Konzentration](/grafik-11-gegenstrom-niere.svg)

**Erklärung zur Grafik:** Gegenstromprinzip in der Henle-Schleife; die Grafik veranschaulicht den Aufbau des osmotischen Gradienten und die ADH-abhängige Harnkonzentrierung.

---

## ADH, Aldosteron und RAAS-Regulation

**ADH (Vasopressin):** Synthetisiert in Hypothalamus, gespeichert in Neurohypophyse. Reiz: Osmolarität ↑ (>285 mOsm/L) oder Volumen ↓. Wirkung: V₂-Rezeptor (Sammelrohr) → cAMP → **Aquaporin-2** in apikale Membran eingebaut → H₂O-Resorption ↑ → verdünnter Urin → konzentrierter Urin (bis 1200 mOsm/L). **Diabetes insipidus**: ADH-Mangel (centralis) oder -Resistenz (renalis) → bis 15 L/Tag hypotoner Urin. Therapie centralis: Desmopressin (ADH-Analogon).

**Aldosteron** (Zona glomerulosa, NNR): Reiz: Angiotensin II, Hyperkaliämie. Wirkung: **ENaC** (Na⁺-Einstrom) + **ROMK** (K⁺-Ausschüttung) + Na⁺/K⁺-ATPase ↑ → Na⁺/H₂O-Retention, K⁺ und H⁺ -Ausscheidung.

**RAAS-Kaskade:**
1. Blutdruck ↓ → juxtaglomeruläre Zellen → **Renin** ↑
2. Renin spaltet Angiotensinogen → **Angiotensin I**
3. ACE (Angiotensin-Converting Enzyme, **Lunge** + Endothel) → **Angiotensin II**
4. Ang. II → a) direkte **Vasokonstriktion** (AT₁-Rezeptor) b) **Aldosteron**-Freisetzung (NNR) c) **ADH**-Freisetzung d) Durst

**Therapieangriffspunkte:** ACE-Hemmer (Bradykinin ↑ → Husten-NW!) | AT₁-Blocker (kein Bradykinin) | Spironolacton (Aldosteron-Antagonist) | Aliskiren (Renin-Inhibitor)

> **Merke:** **RAAS**: Renin (Niere, Druck ↓) → Ang. I → ACE (Lunge) → **Ang. II** → Vasokonstriktion + Aldosteron (Na⁺/H₂O ↑) + ADH ↑ → Blutdruck ↑. **ACE-Hemmer**: Bradykinin ↑ → Husten (häufigste NW).

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Henle-Schleife (Gegenstromprinzip), absteigend wasserdurchlässig (AQP1), aufsteigend wasserundurchlässig (NKCC2, NaCl-Rückresorption), osmotischer Gradient, Konzentrierung des Harns, ADH.

**Ergänzend vertiefend:** Vasa recta; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Wie funktioniert das Gegenstromprinzip in der Henle-Schleife? (Absteigend: H₂O raus [AQP1]; Aufsteigend: NaCl raus [NKCC2], wasserundurchlässig → osmotischer Gradient)
- Welche Rolle spielt ADH bei der Harnkonzentrierung? (V₂-Rezeptor → AQP2-Insertion → H₂O folgt Gradient → konzentrierter Harn bis 1.200 mOsm/L)
- Wie ist die RAAS-Kaskade aufgebaut und wo greifen Medikamente an? (Renin → Ang I → ACE → Ang II; ACE-Hemmer, AT₁-Blocker, Spironolacton)

**Typische Prüfungsfallen / Verwechslungen:**
- Proximaler Tubulus (65 % Rückresorption, SGLT2) vs. Sammelrohr (ADH-abhängige Feinregulation, AQP2)
- Aquaporin-1 (konstitutiv, proximal + absteigend) vs. Aquaporin-2 (ADH-reguliert, Sammelrohr)
- ACE-Hemmer (Bradykinin ↑ → Husten als NW) vs. AT₁-Blocker (kein Bradykinin → kein Husten)
- Diabetes insipidus zentralis (ADH-Mangel, Desmopressin wirkt) vs. nephrogen (ADH-Resistenz, Desmopressin unwirksam)
- Nephritisches Syndrom (Hämaturie, Proteinurie < 3,5 g/d) vs. nephrotisches Syndrom (Proteinurie > 3,5 g/d, Ödeme)

**Prüfungsrelevante Zahlen/Fakten:**
- GFR ~120 mL/min = ~180 L/Tag Primärharn → ~1,5 L Endharn (99 % Rückresorption)
- Nierenschwelle Glukose: ~180 mg/dL
- Osmotischer Gradient: Rinde 300 mOsm/L → Mark 1.200 mOsm/L
- Kreatinin: filtriert + sezerniert (nicht resorbiert) → GFR-Marker
- CKD-Stadium V: GFR < 15 mL/min → Dialyse/Transplantation

---

## Zusammenfassung (ultrakompakt)

- **GFR** ~120 mL/min = ~180 L/Tag Primärharn; Filtrationsbarriere: fenestriertes Endothel + GBM + Podozyten
- **Proximaler Tubulus**: 65% Rückresorption; Glukose 100% via SGLT2; Aminosäuren 100%; H₂O via AQP1 (konstitutiv)
- **Gegenstromprinzip**: absteigend H₂O raus (AQP1), aufsteigend NaCl raus (NKCC2) → Gradient 300–1200 mOsm/L
- **ADH** (Vasopressin): V₂-Rezeptor → Aquaporin-2-Insertion im Sammelrohr → Harnkonzentrierung ↑. Mangel → Diabetes insipidus (Polyurie)
- **RAAS-Kaskade**: Renin (Niere) → Angiotensin I → ACE (Lunge) → Angiotensin II → Vasokonstriktion + Aldosteron ↑ (Na⁺/K⁺ im Sammelrohr) + ADH ↑ → Blutdruck ↑
- **Nierenschwelle Glukose**: ~180 mg/dL; darüber Glukosurie. SGLT2-Hemmer (Empagliflozin) = therapeutische Nutzung
- **Niere produziert**: EPO (bei Hypoxie → Erythropoese ↑), Renin, Calcitriol (1α-Hydroxylase, Vitamin-D-Aktivierung)`,
      lernziele: [
        "Die vier Funktionen der Niere (Wasser-/Elektrolythaushalt, Säure-Basen-Haushalt, Blutdruckregulation, Exkretion) benennen.",
        "Die Filtrations- und Rückresorptionsvorgänge der Nephron-Abschnitte (GFR ~120 mL/min, SGLT2 im proximalen Tubulus, Gegenstromprinzip der Henle-Schleife) erklären.",
        "Die Nierenschwelle für Glukose (~180 mg/dL) und die klinische Bedeutung der Glukosurie bei Diabetes mellitus darstellen.",
        "Den ADH-Mechanismus (V₂-Rezeptor → Aquaporin-2 → Harnkonzentrierung) und den Diabetes insipidus (zentral vs. nephrogen) unterscheiden.",
        "Die RAAS-Kaskade (Renin → Angiotensin II → Aldosteron/ADH) und die Angriffspunkte von ACE-Hemmern, AT₁-Blockern und Aldosteron-Antagonisten erläutern.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Wie funktioniert das Gegenstromprinzip in der Henle-Schleife?",
        answer:
          "Absteigender Schenkel: wasserdurchlässig → Wasser wird osmotisch abgegeben → Harn konzentriert. Aufsteigender Schenkel: wasserundurchlässig, NaCl aktiv resorbiert → Harn verdünnt, Interstitium hyperosmolar. Erzeugt kortikomedullären Gradienten.",
      },
      selfTest: [
        {
          question: "Welche Aussage über die glomeruläre Filtration ist korrekt?",
          options: [
            "Die GFR beträgt ~12 mL/min und produziert ~18 L Primärharn pro Tag.",
            "Die GFR beträgt ~120 mL/min und produziert ~180 L Primärharn pro Tag. Die Filtrationsbarriere besteht aus fenestriertem Endothel, glomerulärer Basalmembran und Podozyten.",
            "Proteine mit Molekulargewicht >69 kDa passieren die Filtrationsbarriere problemlos.",
            "Kreatinin wird filtriert und vollständig rückresorbiort.",
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
      diagram: "nephron",
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
      stichworte: [
        "Knochen",
        "Knorpel",
        "Gelenke",
        "Osteoblasten",
        "Osteoklasten",
        "Periost",
        "Ossifikation",
      ],
      content: `## Einleitung

Das Skelett ist nicht statisch — es wird ständig umgebaut. 206 Knochen stützen, schützen und ermöglichen Bewegung. Das rote Knochenmark produziert täglich Milliarden Blutzellen (Hämatopoese). Die Mineralspeicherfunktion (Kalzium, Phosphat) macht den Knochen zum zentralen Partner des Ca²⁺-Haushalts. Knochenumbau ist ein Gleichgewicht zwischen Osteoblasten (Aufbau) und Osteoklasten (Abbau) — gesteuert durch RANKL/OPG, PTH, Calcitonin und Östrogen. MedAT-Schwerpunkte: Osteoblasten vs. Osteoklasten, RANKL/OPG-System, Knorpeltypen, Gelenktypen, Osteoporose-Pathophysiologie.

**In diesem Kapitel lernst du:**
- **Knochenumbau** (Osteoblasten, Osteoklasten, RANKL/OPG) und **Osteoporose** (Östrogenmangel)
- **Knorpeltypen** (hyalin, Faser, elastisch) und **Gelenktypen** (Diarthrose, Kugel-/Scharniergelenk)
- **Ca²⁺-Regulation** (PTH, Vitamin D, Calcitonin) und **Ossifikation** (enchondral vs. desmal)

---

## Knochen — Umbau durch Osteoblasten und Osteoklasten

Das Skelett ist kein statisches Gerüst — ~10 % der Knochenmasse werden jährlich umgebaut. Drei Zelltypen steuern diesen Prozess:

| Zelltyp | Herkunft | Funktion | Marker |
|---|---|---|---|
| **Osteoblasten** | Mesenchym (Stroma) | Osteoid (Kollagen I) aufbauen, mineralisieren, RANKL + OPG produzieren | ALP ↑, Osteocalcin |
| **Osteozyten** | eingemauerter Osteoblast | Mechanorezeption, Signalgebung über Canaliculi | — |
| **Osteoklasten** | hämatopoetisch (Monozyten/Makrophagen) | Knochen resorbieren (HCl pH ~4,5 + Kathepsin K, Ruffled Border) | TRAP ↑ |

**RANKL/OPG-System** (zentraler Regulationsschalter):
- Osteoblasten sezernieren **RANKL** → bindet RANK auf Osteoklasten → Resorption ↑
- Osteoblasten sezernieren auch **OPG** (Osteoprotegerin, Decoy-Rezeptor) → fängt RANKL ab → Resorption ↓
- **Östrogen** stimuliert OPG → Knochen geschützt. Östrogenmangel (Menopause) → OPG ↓, RANKL dominiert → **Osteoporose**

**Therapeutisch:** Bisphosphonate (hemmen Osteoklastenrekrutierung/Apoptose), Denosumab (monoklonaler Anti-RANKL-Antikörper = OPG-Mimikry).

> **Merke:** **OsteoBlast** = Baut auf (ALP ↑, mesenchymal). **OsteoKlast** = Klaut (TRAP ↑, hämatopoetisch). **RANKL** aktiviert Osteoklasten. **OPG** hemmt RANKL. **Östrogen ↓** → OPG ↓ → Knochenabbau ↑ → **Osteoporose**.

---

## Knorpeltypen, Gelenke und Kalziumregulation

**Knorpeltypen** (alle avaskulär → schlechte Heilung!):

| Typ | Zusammensetzung | Eigenschaften | Vorkommen |
|---|---|---|---|
| **Hyalin** | Kollagen II + Aggrecan | Glatt, druckresistent | Gelenkflächen, Trachealringe, fetales Skelett |
| **Faser** | Kollagen I dominiert | Zugfest + druckresistent | Bandscheiben (Anulus fibrosus), Menisci, Symphysis pubica |
| **Elastisch** | Kollagen II + Elastinfasern | Biegsam, kehrt zurück | Ohrmuschel, Epiglottis |

**Gelenktypen (Diarthrosen):**
- **Kugelgelenk** (3 Achsen, 6 Freiheitsgrade): Schulter, Hüfte
- **Scharniergelenk** (1 Achse): Ellenbogen, Knie (modifiziert), Fingergelenke
- Synovialmembran produziert Gelenkflüssigkeit (Hyaluronsäure, Schmierfunktion)

**Ca²⁺-Regulation** (Normalwert: 2,2–2,6 mmol/L):
- **PTH** (Nebenschilddrüse, bei Ca²⁺ ↓): Osteoklasten ↑ → Ca²⁺ ↑; Vitamin D-Aktivierung (25-OH → 1,25-OH); Niere: Ca²⁺-Rückresorption ↑, Phosphat-Ausscheidung ↑
- **Vitamin D** (1,25-OH, Calcitriol): Darm-Ca²⁺-Absorption ↑ (Calbindin), Niere-Ca²⁺-Retention ↑
- **Calcitonin** (C-Zellen der Schilddrüse, bei Ca²⁺ ↑): Osteoklasten ↓ → Ca²⁺ ↓ (physiologisch weniger relevant)

> **Merke:** **Knorpel avaskulär** → schlechte Heilung. Hyalin (Gelenk, Kollagen II) vs. Faser (Bandscheibe, Kollagen I) vs. Elastisch (Ohr, Elastin). **PTH** ↑ Ca²⁺ (Osteoklasten ↑, Vitamin D ↑, Niere ↑). **Calcitonin** ↓ Ca²⁺.

---

## Ossifikation — Knochenbildung

Knochen entstehen durch zwei Wege:

**Enchondrale Ossifikation** (indirekter Weg):
Ein Knorpelmodell (Chondrozyten) wird zunächst gebildet und dann schrittweise durch Knochen ersetzt. Ablauf: Chondrozyten hypertrophieren → Knorpelmatrix kalzifiziert → Osteoblasten wandern ein → Knochen ersetzt Knorpel. Betrifft: Röhrenknochen (Femur, Tibia, Humerus), Rippen, Wirbelkörper.

**Desmale Ossifikation** (direkter Weg):
Knochen entsteht direkt aus mesenchymalen Stammzellen ohne Knorpelvorlage. Betrifft: Schädelknochen (Frontal-, Parietalknochen), Schlüsselbein, Teile des Unterkiefers.

![Ossifikation](/grafik-12-ossifikation.svg)

**Erklärung zur Grafik:** Die Grafik vergleicht die enchondrale Ossifikation (Knorpelmodell → Kalzifizierung → Osteoblasten) mit der desmalen Ossifikation (direkter Knochenaufbau aus Mesenchym).

![Knochenumbau und Zellen](/grafik-12-ossifikation.svg)

**Erklärung zur Grafik:** Osteoblasten (Aufbau) und Osteoklasten (Abbau) im Gleichgewicht; RANKL/OPG-System und Kalziumhomöostase (PTH, Vitamin D, Calcitonin).

**Zelltypen der Knochenentwicklung:**
- **Osteoblasten**: knochenbildende Zellen, sezernieren Kollagen I + Osteoid, werden zu Osteozyten eingemauert
- **Osteozyten**: reife Knochenzellen im Lakunen-Kanälchen-System, mechanosensitiv
- **Osteoklasten**: knochenabbauende mehrkernige Riesenzellen (RANKL/OPG-System)

**Klinisch:** Rachitis (Vitamin-D-Mangel → gestörte Mineralisation), Osteogenesis imperfecta (Kollagen-I-Defekt).

> **Merke:** Enchondral = Knorpel zuerst (Extremitäten). Desmal = direkt (Schädel). Beide Wege produzieren identisch strukturierten Lamellenknochen — nur der Weg ist verschieden.

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Knochenumbau (Osteoblasten: Aufbau, ALP; Osteoklasten: Abbau, TRAP), RANKL/OPG, Kalziumhomöostase (PTH, Calcitriol, Calcitonin), Ossifikation.

**Ergänzend vertiefend:** Osteozyten; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Was ist der Unterschied zwischen Osteoblasten und Osteoklasten? (Aufbau vs. Abbau; ALP vs. TRAP als Marker)
- Wie reguliert das RANKL/OPG-System den Knochenumbau? (RANKL aktiviert Osteoklasten via RANK; OPG bindet RANKL als Decoy)
- Welche Knorpeltypen gibt es und wo kommen sie vor? (Hyalin: Gelenkflächen [Kollagen II]; Elastisch: Ohr [+ Elastin]; Faser: Bandscheibe [Kollagen I])

**Typische Prüfungsfallen / Verwechslungen:**
- Osteoblasten (einkernig, Aufbau, ALP ↑) vs. Osteoklasten (mehrkernig, Abbau, TRAP ↑)
- Hyaliner Knorpel (Kollagen II, Gelenke) vs. Faserknorpel (Kollagen I, Bandscheiben)
- Arthrose (degenerativ, Verschleiß, kein Entzündungsmarker) vs. Arthritis (entzündlich, RA: Anti-CCP, Morgensteifigkeit > 1 h)
- Sehnen (Muskel-Knochen-Verbindung) vs. Bänder (Knochen-Knochen-Verbindung)
- Rachitis/Osteomalazie (Vitamin-D-Mangel, Mineralisierung ↓) vs. Osteoporose (Knochenmasse ↓, Knochenstruktur ↓)

**Prüfungsrelevante Zahlen/Fakten:**
- 206 Knochen beim Erwachsenen; Knochenumbau: ~10 %/Jahr erneuert
- Knochen: 30 % organisch (Kollagen I, Flexibilität) + 70 % anorganisch (**Hydroxyapatit** [Ca₅(PO₄)₃OH] — das anorganische Calciumphosphat-Mineral, das Knochen Härte und Druckfestigkeit verleiht)
- Osteoporose-Diagnostik: DXA-Messung, T-Score ≤ −2,5
- Wirbelsäule: 7 HWK + 12 BWK + 5 LWK + 5 SWK (fusioniert) + 4 Steißbeinwirbel
- Kugelgelenk: 3 Achsen; Scharniergelenk: 1 Achse; Sattelgelenk: 2 Achsen

---

## Zusammenfassung (ultrakompakt)

- **Knochenstruktur**: Kompakta (80%, Havers-Systeme) + Spongiosa (20%, rotes Mark → Hämatopoese). **Periost** (äußere bindegewebige Knochenhaut, enthält Blutgefäße, Nerven und osteogene Vorläuferzellen — wichtig für Frakturheilung) + Endost (innen). Matrix: Kollagen I (30%, Flexibilität) + Hydroxyapatit [Ca₅(PO₄)₃OH] (70%, Härte, Druckfestigkeit)
- **Osteoblasten** (Aufbau): Kollagen-I-Synthese, Mineralisierung, ALP als Marker. Produzieren RANKL (Osteoklasten ↑) und OPG (Osteoklasten ↓)
- **Osteoklasten** (Abbau): mehrkernig (Monozyten-Fusion), H⁺ + Proteasen, TRAP als Marker. Aktivierung durch RANKL; Denosumab = Anti-RANKL-Antikörper
- **Ca²⁺-Regulation**: PTH (Osteoklasten ↑ → Ca²⁺ ↑), Calcitonin (Osteoklasten ↓ → Ca²⁺ ↓), Vitamin D (intestinale Ca²⁺-Resorption ↑)
- **Knorpeltypen**: hyalin (Kollagen II, Gelenkflächen), elastisch (Kollagen II + Elastin, Ohr/Epiglottis), Faser (Kollagen I, Bandscheibe). Alle avaskulär → Ernährung durch Diffusion
- **Osteoporose**: Östrogen ↓ (Menopause) → RANKL ↑ → Abbau > Aufbau → Schenkelhalsfraktur, Wirbelkörpersinterung. DXA T-Score ≤ −2,5. Therapie: Bisphosphonate, Denosumab`,
      lernziele: [
        "Den Unterschied zwischen Osteoblasten (Knochenaufbau, Kollagen I, Mineralisierung) und Osteoklasten (Knochenabbau, H⁺, mehrkernig) erklären.",
        "Das RANKL/OPG-System und seine Bedeutung für die Osteoklastenaktivierung und Osteoporose-Therapie (Denosumab) darstellen.",
        "Die drei Knorpeltypen (hyalin, elastisch, Faser) mit ihren Kollagen-/Elastin-Zusammensetzungen und typischen Lokalisationen benennen.",
        "Die wichtigsten Gelenktypen (Diarthrose, Kugelgelenk, Scharniergelenk) und ihre Bewegungsachsen beschreiben.",
        "Die Pathophysiologie der Osteoporose (Östrogenmangel, Knochenumbau) und die wichtigsten Therapieoptionen (Bisphosphonate, Denosumab) erläutern.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question:
          "Erklären Sie das Knochen-Remodeling und die Regulation durch Parathormon und Calcitonin.",
        answer:
          "Osteoblasten (Aufbau: Kollagen I, Mineralisierung mit Ca²⁺/PO₄³⁻) und Osteoklasten (Abbau: mehrkernig, H⁺ + Proteasen, Monozyten-Ursprung) bauen Knochen ständig um. PTH: aktiviert Osteoklasten → Ca²⁺ ins Blut ↑. Calcitonin: hemmt Osteoklasten → Ca²⁺ ins Blut ↓. Vitamin D3: fördert Ca²⁺-Resorption im Darm. Klinisch: Osteoporose = Abbau > Aufbau → Frakturrisiko ↑.",
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
      content: `## Einleitung

Fortpflanzung erfordert **Gameten** (Spermien + Eizellen), deren präzise hormonelle Steuerung und einen koordinierten Zyklus. **FSH** und **LH** (aus dem Hypophysenvorderlappen) steuern Gonadenentwicklung und Hormonsynthese. Die Besonderheit der **Oogenese**: Sie beginnt pränatal und ist erst bei Befruchtung abgeschlossen — dabei entstehen 1 Eizelle + 3 Polkörperchen aus einer Oozyte. Der **Menstruationszyklus** ist ein Paradebeispiel für positive und negative Rückkopplung. MedAT-Schwerpunkte: Sertoli vs. Leydig, 4 Spermien vs. 1 Eizelle, LH-Peak-Mechanismus, hCG-Funktion, Meiose-Arrests.

**In diesem Kapitel lernst du:**
- **Spermatogenese** (4 Spermien, Sertoli/Leydig) vs. **Oogenese** (1 Eizelle + 3 Polkörperchen, Meiose-Arrests)
- **Menstruationszyklus** (Follikelphase, LH-Peak, Lutealphase) und **Östrogen/Progesteron**
- **Befruchtung** (Akrosom-Reaktion, Kortikalreaktion, Polyspermie-Block) und **hCG**

![Hypophysen-Achsen und Gonaden](/grafik-5-hypophysen-achsen.svg)

**Erklärung zur Grafik:** FSH und LH aus der Hypophyse steuern Ovar und Hoden; die Grafik zeigt die Achse Hypothalamus → Hypophyse → Gonaden mit negativer Rückkopplung.

![Meiose und Keimzellen](/grafik-3-meiose.svg)

**Erklärung zur Grafik:** Meiose in Spermatogenese (4 Spermien) und Oogenese (1 Eizelle + 3 Polkörperchen); Reduktionsteilung und genetische Rekombination.

---

## Spermatogenese und Oogenese — Gametogenese im Vergleich

Beide Keimzellentwicklungen nutzen die Meiose, unterscheiden sich aber fundamental in Ergebnis und Zeitplanung:

| Merkmal | Spermatogenese | Oogenese |
|---|---|---|
| **Ergebnis** | **4 funktionsfähige Spermien** | **1 Eizelle + 3 Polkörperchen** |
| **Beginn** | Ab Pubertät, kontinuierlich | Pränatal (7. Monat) → Meiose I gestartet |
| **Dauer** | ~74 Tage | Monate bis Jahrzehnte |
| **Ort** | Tubuli seminiferi | Ovar |

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

Der 28-tägige Menstruationszyklus ist ein Musterbeispiel für negative und positive Rückkopplung:

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

---

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:** Sertoli-Zellen (FSH, Inhibin, ABP, Blut-Hoden-Schranke, Ernährung der Spermien) vs. Leydig-Zellen (LH → Testosteron), Spermatogenese, Hormonregulation Hoden. **Bis zur Ejakulation werden Spermien in den Nebenhodengängen (Nebenhoden) gespeichert** — nicht in Samenkanälchen, Samenbläschen, Samenleitern oder Prostata.

**Ergänzend vertiefend:** Spermatogonien; typische Verwechslungen siehe „Typische Prüfungsfallen“.

**Häufige Fragen:**
- Was ist der Unterschied zwischen Sertoli- und Leydig-Zellen? (Sertoli: FSH-abhängig, Inhibin, ABP, Blut-Hoden-Schranke; Leydig: LH → Testosteron)
- Wie unterscheiden sich Spermatogenese und Oogenese im Ergebnis? (4 Spermien vs. 1 Eizelle + 3 Polkörperchen)
- Wie kommt der LH-Peak zustande? (Hohes Östrogen > 200 pg/mL > 2 Tage → positive Rückkopplung → GnRH ↑ → LH-Peak)

**Typische Prüfungsfallen / Verwechslungen:**
- Sertoli-Zellen (FSH-reguliert, Inhibin) vs. Leydig-Zellen (LH-reguliert, Testosteron) – häufigster Prüfungsfehler
- Prophase-I-Arrest (primäre Oozyte, pränatal bis Pubertät) vs. Metaphase-II-Arrest (sekundäre Oozyte, bis Befruchtung)
- Positive Rückkopplung (hohes Östrogen → LH-Peak) vs. negative Rückkopplung (niedriges/mittleres Östrogen → FSH/LH ↓)
- hCG (Schwangerschaftserhaltung des Corpus luteum) vs. LH (Corpus-luteum-Stimulation im normalen Zyklus)
- Spermatogenese (kontinuierlich ab Pubertät, 4 Gameten) vs. Oogenese (zyklisch, 1 Gamet, endlicher Vorrat)

**Prüfungsrelevante Zahlen/Fakten:**
- Spermatogenese: ~74 Tage; Oozytenvorrat: ~7 Mio. (5. Monat intrauterin) → ~400.000 bei Geburt → ~400 Ovulationen
- LH-Peak: Tag 14; Ovulation: 24–36 h nach LH-Peak
- Basaltemperatur steigt nach Ovulation ~0,5 °C (Progesteron-Effekt)
- hCG nachweisbar ab Tag 6–7 post conceptionem; verdoppelt sich alle 48 h in Frühschwangerschaft
- PCOS: 5–15 % der Frauen, LH/FSH-Ratio > 2, Rotterdam-Kriterien (2 von 3)

---

## Zusammenfassung (ultrakompakt)

- **Spermatogenese**: Spermatogonium (2n) → Meiose I/II → **4 Spermien** (n), ~74 Tage, kontinuierlich ab Pubertät. Sertoli-Zellen (FSH-abhängig, Inhibin, Blut-Hoden-Schranke), Leydig-Zellen (LH → Testosteron)
- **Oogenese**: Arrest **Prophase I** (seit Embryonalzeit bis Pubertät) → Meiose I bei Ovulation → Arrest **Metaphase II** → Meiose II nur bei Befruchtung → **1 Eizelle + 3 Polkörperchen**
- **Menstruationszyklus**: FSH → Östrogen ↑ (Follikelphase) → Östrogen ↑↑ → **positive Rückkopplung → LH-Peak** (Tag 14) → Ovulation → Corpus luteum → Progesteron (Lutealphase)
- **LH-Peak-Trigger**: Östrogen > 200 pg/mL über > 2 Tage → **positives Feedback** auf GnRH/LH. (Niedrig/mittel: negatives Feedback)
- **hCG** (Trophoblast ab Tag 6–7): erhält Corpus luteum → Progesteron ↑ → Schwangerschaftserhalt. Basis des Schwangerschaftstests. Ab 12. SSW: Plazenta übernimmt
- **Klinisch**: PCOS (anovulatorische Infertilität, LH/FSH-Ratio > 2), Endometriose (Dysmenorrhö, Infertilität), Mammakarzinom (70% ER+ → Tamoxifen/Aromatasehemmer)`,
      lernziele: [
        "Die Funktionen von Sertoli-Zellen (Spermatogenese-Unterstützung, Inhibin, Blut-Hoden-Schranke) und Leydig-Zellen (Testosteron unter LH) unterscheiden.",
        "Die Spermatogenese (Spermatogonien → 4 Spermien, ~74 Tage) mit Meiose I/II und Spermiogenese beschreiben.",
        "Die Oogenese (Arrest in Prophase I → Meiose I bei Ovulation → Meiose II nur bei Befruchtung, 1 Eizelle + 3 Polkörperchen) erklären.",
        "Den Menstruationszyklus (Follikelphase: FSH/Östrogen; Ovulation: LH-Peak Tag 14; Lutealphase: Corpus luteum/Progesteron) und den LH-Peak-Mechanismus (positive Rückkopplung) darstellen.",
        "Die Rolle von hCG bei der Schwangerschaftserhaltung (Corpus luteum → Progesteron) und die Funktion der Plazenta erläutern.",
      ],
      sections: [],
      // TODO: echte MedAT-Altfrage prüfen - aktuell Uebungsformat
      altfrage: {
        question: "Beschreiben Sie den Menstruationszyklus und seinen Auslöser für die Ovulation.",
        answer:
          "Follikelphase (Tag 1-14): FSH → Follikelreifung → Östrogen ↑ → LH-Surge (positive Rückkopplung, Tag ~14) → Ovulation. Lutealphase (Tag 15-28): Corpus luteum → Progesteron + Östrogen. Ohne Befruchtung: Corpus luteum degeneriert → Hormonabfall → Menstruation. Mit Befruchtung: hCG erhält Corpus luteum → Progesteron für Schwangerschaftserhaltung.",
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
      diagram: "menstrual-cycle",

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
