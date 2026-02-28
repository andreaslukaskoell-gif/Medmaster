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
      content: `## Epithelgewebe -- einfach erklaert

Stell dir Epithelgewebe wie die Tapete in deiner Wohnung vor: Es bedeckt alle Oberflaechen -- aussen die Haut, innen den Darm, die Blutgefaesse, die Harnblase und die Atemwege. Die Hauptaufgabe ist Schutz und Transport.

**In diesem Kapitel lernst du:**
- Warum alle Epithelien polar und gefaesslos sind
- Wie Zellkontakte die Zellen zusammenhalten
- Welches Epithel in welchem Organ sitzt
- Wie Druesen ihre Sekrete abgeben

---

{{DIAGRAM:cell-membrane}}

## Drei Grundeigenschaften aller Epithelien

Jede Epithelzelle hat eine **Oberseite** (apikal -- zur Koerperhoehle hin) und eine **Unterseite** (basolateral -- zum Bindegewebe hin). Stell dir das wie ein Spiegelei in der Pfanne vor: Oben und unten sind verschieden. Das nennt man **Polaritaet**. Dadurch koennen Stoffe gezielt in eine Richtung transportiert werden.

Alle Epithelien sitzen auf einer **Basalmembran** -- wie ein Teppich unter der Tapete. Sie verbindet das Epithel mit dem Bindegewebe darunter und besteht aus Kollagen IV und Laminin.

Epithelien haben **keine eigenen Blutgefaesse** (avaskular). Sie werden nur durch Naehrstoffe versorgt, die von unten durchsickern. Deshalb muessen sich Epithelzellen staendig erneuern -- im Duenndarm alle 3-5 Tage.

**Vier wichtige Zellkontakte:**
- **Tight Junctions**: Sitzen ganz oben (apikal) und dichten den Spalt zwischen den Zellen ab -- wie Silikon zwischen Fliesen. Sie trennen auch die obere von der unteren Membranhaelfte (Fence-Funktion)
- **Desmosomen**: Halten die Zellen mechanisch zusammen, wie Nieten in einer Jeans
- **Gap Junctions**: Kleine Kanaele, durch die Ionen direkt zwischen Nachbarzellen fliessen koennen -- wichtig im Herzmuskel, damit sich die Erregung ausbreitet
- **Hemidesmosomen**: Verankern die Zelle an der Basalmembran

> **Merke:** Tight Junctions = apikal, Barriere + Fence. Desmosomen = mechanisch. Gap Junctions = Ionenaustausch. Hemidesmosomen = Basalmembran-Verankerung.

---

## Welches Epithel sitzt wo?

Epithelien werden nach ihrer **Form** (flach, wuerfelfoermig, saeulenartig) und **Schichtung** (ein- oder mehrschichtig) eingeteilt:

| Epitheltyp | Vorkommen | Funktion |
|---|---|---|
| Einschichtiges **Plattenepithel** | Blutgefaesse, Alveolen | Schnelle Diffusion |
| Einschichtiges **kubisches** Epithel | Schilddruese, Nierentubuli | Sekretion, Resorption |
| Einschichtiges **Zylinderepithel** | Duenndarm (mit Mikrovilli!) | Resorption |
| **Mehrreihiges** Flimmerepithel | Trachea, Bronchien | Schleimtransport |
| Mehrschichtiges **verhorntes** Plattenepithel | Haut (Epidermis) | Mechanischer Schutz |
| Mehrschichtiges **unverhorntes** Plattenepithel | Speiseroehre, Vagina, Mund | Feuchter Schutz |
| **Urothel** (Uebergangsepithel) | Harnblase, Harnleiter | Dehnbarkeit |

Ein haeufiger Stolperstein: Das **mehrreihige** (pseudostratifizierte) Epithel in der Trachea **sieht** mehrschichtig aus, ist es aber nicht. Alle Zellen beruehren die Basalmembran -- die Kerne liegen nur auf verschiedenen Hoehen. Stell dir Menschen unterschiedlicher Groesse vor, die alle mit den Fuessen auf dem Boden stehen.

Das **Urothel** in der Harnblase hat spezielle Schirmzellen. Wenn die Blase sich fuellt, flachen sie sich ab -- wie ein Regenschirm, der sich oeffnet. So kann sich die Blase dehnen, ohne zu reissen.

> **Merke:** Pseudostratifiziert ≠ mehrschichtig -- alle Zellen beruehren die Basalmembran! Urothel = Schirmzellen. Trachea = mehrreihiges Flimmerepithel.

---

{{DIAGRAM:stem-cells}}

## Druesen und Sekretionsarten

Viele Epithelzellen bilden **Druesen**. Es gibt zwei Grundtypen: **Exokrine Druesen** haben einen Ausfuehrungsgang (wie ein Wasserhahn), **endokrine Druesen** geben ihr Sekret direkt ins Blut ab (wie Hormone).

Bei exokrinen Druesen unterscheidet man drei Sekretionsarten:

| Typ | Mechanismus | Beispiel |
|---|---|---|
| **Merokrin** | Zelle gibt Sekret per Exozytose ab, bleibt intakt | Schweissdruesen, Bauchspeicheldruese -- **haeufigste Form** |
| **Apokrin** | Die Zellspitze wird abgeschnuert | Milchdruese beim Stillen |
| **Holokrin** | Die ganze Zelle zerfaellt und wird zum Sekret | **Talgdruesen** -- die Zelle opfert sich sozusagen |

Stell dir das so vor: Merokrin ist wie Seife aus einem Spender (Spender bleibt heil). Holokrin ist wie eine Badebombe -- sie loest sich komplett auf und wird selbst zum Produkt.

**Kartagener-Syndrom:** Bei dieser Erbkrankheit funktionieren die Flimmerhaerchen (Zilien) in den Atemwegen nicht, weil das Motorprotein Dynein defekt ist. Die Folge: Der Schleim wird nicht abtransportiert, chronische Bronchitis entsteht. Bei der Haelfte der Betroffenen liegen die Organe spiegelverkehrt (Situs inversus).

> **Merke:** Merokrin = Exozytose (haeufig). Apokrin = Zellspitze ab. Holokrin = ganze Zelle wird Sekret (Talgdruese). Kartagener: Dynein-Defekt, Zilien bewegen sich nicht.

---

## MedAT-Fokus

**Haeufige Pruefungsfragen:**
- Trachea-Epithel? Mehrreihiges Flimmerepithel
- Harnblasen-Dehnung? Urothel mit Schirmzellen
- Holokrine Sekretion? Talgdruesen
- Tight Junctions? Apikale Barriere + Fence

**Typische Fallen:**
- Pseudostratifiziert ≠ mehrschichtig
- Verhorntes (Haut) vs. unverhorntes (Speiseroehre) Plattenepithel
- Tight Junctions (Barriere) vs. Gap Junctions (Ionenaustausch)
- Ca. 85 % aller Karzinome entstehen aus Epithelgewebe

---

## Zusammenfassung

- Epithel ist polar, avaskular und sitzt auf der Basalmembran
- Zellkontakte: Tight Junctions (Barriere), Desmosomen (Halt), Gap Junctions (Ionenaustausch), Hemidesmosomen (Verankerung)
- Pseudostratifiziert: Sieht mehrschichtig aus, ist es aber nicht
- Druesen: merokrin (Exozytose), apokrin (Zellspitze), holokrin (ganze Zelle)
- Kartagener-Syndrom: Dynein-Defekt, Zilien funktionieren nicht`,
      contentExtended: `## Einleitung

**Worum geht es?** **Epithelgewebe** bedeckt alle inneren und äußeren Oberflächen — Haut, Darm, Gefäße, Harnblase, Atemwege. **Hauptfunktion:** Barriere und gerichteter Transport (Resorption, Sekretion). **Warum für den MedAT relevant?** Die Zuordnung „welches Epithel in welchem Organ", Zellkontakte (Tight Junctions, Gap Junctions) und Sekretionsmechanismen (merokrin, apokrin, holokrin) werden regelmäßig abgefragt. **Welche Fragen werden beantwortet?** „Welches Epithel kleidet die Trachea aus?"; „Urothel — wo?"; „Merokrin vs. apokrin vs. holokrin?"; „Tight Junctions — Funktion?"; „Pseudostratifiziert — was bedeutet das?" Mit diesem Kapitel sind alle typischen BMS-Fragen zu Epithelgewebe abgedeckt.

**In diesem Kapitel lernst du:**
- die **Grundprinzipien** aller Epithelien (Polarität, Basalmembran, avaskulär) und **Zellkontakte** (Tight Junctions, Desmosomen, Gap Junctions, Hemidesmosomen)
- die **Klassifikation** nach Zellform und Schichtung sowie die **Organzuordnung** (z. B. Flimmerepithel → Trachea, Urothel → Harnblase)
- **Drüsenepithelien** und **Sekretionsarten** (merokrin, apokrin, holokrin) mit typischen Beispielen
- **Pseudostratifiziert** vs. mehrschichtig und **Kartagener-Syndrom** (Dynein-Defekt, Zilien)

---

{{DIAGRAM:cell-membrane}}

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

---

{{DIAGRAM:stem-cells}}

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

**Typische Prüfungsfragen:**
- Welches Epithel kleidet die Trachea aus? → Mehrreihiges (pseudostratifiziertes) Flimmerepithel
- Welches Epithel ermöglicht die Dehnung der Harnblase? → Urothel mit Schirmzellen
- Wo wird holokrin sezerniert? → Talgdrüsen (ganze Zelle = Sekret)
- Welche Funktion haben Tight Junctions? → Apikale Barriere und Fence

**Typische Prüfungsfallen:**
- Pseudostratifiziert ≠ mehrschichtig (alle Zellen berühren Basalmembran!)
- Plattenepithel verhornt (Epidermis) vs. unverhornt (Ösophagus, Vagina) — nicht verwechseln
- Tight Junctions (apikal, Barriere) vs. Gap Junctions (Ionenaustausch)
- Desmosomen (Zelle-Zelle) vs. Hemidesmosomen (Zelle-Basalmembran)
- Ca. 85 % aller Karzinome entstehen aus Epithelgewebe

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
      content: `## Binde- und Stuetzgewebe -- einfach erklaert

Stell dir dein Bindegewebe wie das Geruest eines Hauses vor: Es gibt Traeger (Knochen), flexible Polster (Knorpel), Seile (Sehnen) und Isolierung (Fettgewebe). Das Besondere: Hier bestimmt nicht die Zelle, sondern das Material dazwischen -- die **extrazellulaere Matrix** -- die Eigenschaften.

**In diesem Kapitel lernst du:**
- Was die extrazellulaere Matrix ist und woraus sie besteht
- Die vier Kollagentypen und wo du sie findest
- Wie Knochen staendig umgebaut wird
- Warum Knorpel so schlecht heilt
- Den Unterschied zwischen weissem und braunem Fett

---

{{DIAGRAM:stem-cells}}

## Die extrazellulaere Matrix -- das Material zwischen den Zellen

Im Bindegewebe gibt es viel mehr Zwischenmaterial als Zellen. Dieses Material heisst **extrazellulaere Matrix (EZM)** und besteht aus drei Hauptbestandteilen:

- **Kollagenfasern** geben Festigkeit -- wie die Stahlseile in einer Haengebruecke
- **Elastinfasern** sorgen fuer Elastizitaet -- wie ein Gummiband, das immer zurueckschnappt
- **Proteoglykane** binden Wasser und polstern gegen Druck ab -- wie ein nasser Schwamm

Die wichtigsten Zellen sind **Fibroblasten** (produzieren die Matrix), **Osteoblasten** (bauen Knochen auf), **Osteoklasten** (bauen Knochen ab) und **Chondrozyten** (Knorpelzellen).

> **Merke:** Bindegewebe = Matrix dominiert ueber Zellen. Kollagen gibt Festigkeit, Proteoglykane polstern gegen Druck.

---

## Kollagen -- das haeufigste Protein deines Koerpers

Kollagen macht etwa 30 % des gesamten Koerperproteins aus. Es besteht aus drei Ketten, die sich wie ein Seil umeinander winden -- die **Tripelhelix**. Fuer die Herstellung braucht dein Koerper **Vitamin C**. Ohne Vitamin C wird das Kollagen instabil, und es kommt zu **Skorbut** -- Zahnfleisch blutet, Wunden heilen schlecht.

Es gibt vier wichtige Typen -- stell dir das wie verschiedene Sorten Seil vor:

| Typ | Wo? | Eigenschaft |
|---|---|---|
| **I** | Knochen, Sehnen, Haut | Zugfest -- **haeufigster Typ** |
| **II** | Knorpel (Gelenke) | Druckresistent |
| **III** | Gefaesse, Wundheilung | Dehnbar |
| **IV** | Basalmembran | Netzartig |

> **Merke:** Kollagen I = Knochen/Sehnen. II = Knorpel. III = Gefaesse. IV = Basalmembran. Vitamin C ist fuer die Herstellung unverzichtbar.

---

## Knochen -- staendig im Umbau

Knochen bestehen aus Kollagen I (gibt Flexibilitaet, 30 %) und **Hydroxyapatit** (gibt Haerte, 70 %). Stell dir das vor wie Stahlbeton: Stahl (Kollagen) plus Beton (Mineral).

Dein Koerper baut jedes Jahr etwa 10 % der Knochenmasse um. Dabei arbeiten zwei Zelltypen zusammen:

- **Osteoblasten** bauen Knochen auf (Eselsbruecke: OsteoBlast = Baut)
- **Osteoklasten** bauen Knochen ab (Eselsbruecke: OsteoKlast = Klaut)

Die Balance wird durch das **RANKL/OPG-System** gesteuert: RANKL aktiviert die Osteoklasten, OPG hemmt sie. **Oestrogen** foerdert OPG und schuetzt so den Knochen. Nach der Menopause sinkt das Oestrogen, RANKL ueberwiegt, und es kann zu **Osteoporose** kommen.

> **Merke:** OsteoBlast = Baut. OsteoKlast = Klaut. Oestrogen schuetzt Knochen. Osteoporose = zu viel Abbau.

---

{{DIAGRAM:animal-cell}}

## Drei Knorpeltypen -- und warum Knorpel schlecht heilt

Alle Knorpeltypen haben etwas gemeinsam: Sie haben **keine Blutgefaesse** (avaskular). Naehrstoffe muessen durch das Gewebe sickern. Das bedeutet: Wenn Knorpel kaputt geht, heilt er kaum -- deshalb ist Arthrose so problematisch.

| Knorpeltyp | Wo? | Eigenschaft |
|---|---|---|
| **Hyalin** | Gelenkflaechen, Trachea | Druckfest und glatt |
| **Faser** | Bandscheiben, Menisken | Zugfest und druckfest |
| **Elastisch** | Ohrmuschel, Kehldeckel | Biegsam |

Stell dir hyalinen Knorpel wie eine glatte Eisflaeche vor, auf der Gelenke reibungslos gleiten. Faserknorpel ist wie ein stabiles Seil, und elastischer Knorpel wie eine biegsame Gummiplatte.

> **Merke:** Hyalin = Gelenk. Faser = Bandscheibe. Elastisch = Ohr. Alle avaskular = schlechte Heilung!

---

## Fettgewebe -- mehr als nur Energiespeicher

Es gibt zwei Arten von Fettgewebe:

**Weisses Fett** hat einen grossen Fetttropfen pro Zelle -- wie ein prall gefuellter Luftballon. Es speichert Energie und wirkt als Polster. Aber es ist auch ein Hormon-Produzent: **Leptin** meldet dem Gehirn “Ich bin satt”, und **Adiponektin** macht Zellen empfindlicher fuer Insulin.

**Braunes Fett** hat viele kleine Fetttroepfchen und viele Mitochondrien (daher die braune Farbe). Es erzeugt Waerme statt ATP -- dank dem Protein **UCP-1**, das die Atmungskette “kurzschliesst”. Stell dir das vor wie einen Ofen, der Fett verbrennt, um Waerme zu machen. Besonders wichtig bei Neugeborenen, die noch nicht zittern koennen.

> **Merke:** Weisses Fett = Energiespeicher + Leptin. Braunes Fett = Waerme durch UCP-1.

---

## MedAT-Fokus

**Haeufige Pruefungsfragen:**
- Kollagen I = Knochen und Sehnen (zugfest)
- Osteoklasten bauen ab (haematopoetischer Ursprung)
- Knorpel heilt schlecht weil avaskular
- UCP-1 entkoppelt die Atmungskette im braunen Fett

**Typische Fallen:**
- Kollagen I (Knochen) und Kollagen II (Knorpel) nicht verwechseln
- Osteoblasten (mesenchymal, bauen auf) vs. Osteoklasten (haematopoetisch, bauen ab)
- Weisses Fett (ein Tropfen, Leptin) vs. braunes Fett (viele Mitochondrien, UCP-1)

---

## Zusammenfassung

- EZM = Kollagen + Proteoglykane + Fibronektin, dominiert ueber Zellen
- Kollagen I (Knochen), II (Knorpel), III (Gefaesse), IV (Basalmembran)
- Vitamin C noetig fuer Kollagensynthese, Mangel = Skorbut
- OsteoBlast baut auf, OsteoKlast baut ab, Oestrogen schuetzt
- Knorpel ist avaskular und heilt deshalb kaum
- Braunes Fett erzeugt Waerme (UCP-1), weisses Fett speichert Energie (Leptin)`,
      contentExtended: `## Einleitung

**Worum geht es?** **Binde- und Stützgewebe** umfasst Gewebe, bei denen die **extrazelluläre Matrix (EZM)** die Eigenschaften bestimmt: Knochen, Sehnen, Knorpel, Fettgewebe. **Warum für den MedAT relevant?** Kollagentypen (I–IV), Knochenumbau (Osteoblasten/Osteoklasten, RANKL/OPG), Knorpeltypen (hyalin, Faser, elastisch) und Fettgewebe (weiß/braun, Leptin, UCP-1) werden regelmäßig geprüft; Osteoporose, Arthrose, Skorbut sind Bindegewebserkrankungen. **Welche Fragen werden beantwortet?** „Welcher Kollagentyp in der Basalmembran?"; „Osteoblast vs. Osteoklast?"; „Welche Knorpelart wo?"; „Skorbut — Ursache?"; „Braunes Fett — UCP-1?" Mit diesem Kapitel sind alle typischen BMS-Fragen zu Binde- und Stützgewebe abgedeckt.

**In diesem Kapitel lernst du:**
- die **extrazelluläre Matrix (EZM)** (Kollagen, Elastin, Proteoglykane) und die wichtigsten Zellen (Fibroblasten, Osteoblasten/Osteoklasten, Chondrozyten)
- **Kollagentypen I–IV** und ihre Zuordnung (I: Knochen/Sehne, II: Knorpel, III: Gefäße, IV: Basalmembran)
- **Knochenumbau** (Osteoblast vs. Osteoklast, RANKL/OPG, Östrogen) und **Knorpeltypen** (hyalin, Faser, elastisch; alle avaskulär)
- **Fettgewebe** (weiß: Leptin, Energiespeicher; braun: UCP-1, Thermogenese)

---

{{DIAGRAM:stem-cells}}

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

---

{{DIAGRAM:animal-cell}}

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

**Typische Prüfungsfragen:**
- Welcher Kollagentyp in Sehnen und Knochen? → Typ I (zugfest, häufigster Typ)
- Welche Zellen bauen Knochen ab? → Osteoklasten (hämatopoetisch, Monozyten/Makrophagen)
- Warum heilt Knorpel schlecht? → Avaskulär, Ernährung nur durch Diffusion
- Was macht UCP-1 im braunen Fett? → Entkoppelt Atmungskette → Wärme statt ATP
- Vitamin C bei der Kollagensynthese? → Cofaktor der Prolyl-/Lysylhydroxylase

**Typische Prüfungsfallen:**
- Kollagen I (Zugfest, Sehnen/Knochen) vs. Kollagen II (Druckresistent, Knorpel) — nicht vertauschen
- Osteoblasten (mesenchymal, aufbauend) vs. Osteoklasten (hämatopoetisch, abbauend)
- Weißes Fett (ein Tropfen, Leptin) vs. braunes Fett (viele Mitochondrien, UCP-1)
- Kollagen ≈ 30 % des Körperproteins; Knochenumbau ≈ 10 %/Jahr

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
      content: `## Muskelgewebe -- einfach erklaert

Dein Koerper hat drei Arten von Muskeln: Skelettmuskeln (die du bewusst steuerst, z. B. beim Armheben), den Herzmuskel (pumpt automatisch) und glatte Muskulatur (z. B. im Darm -- arbeitet im Hintergrund). Alle nutzen dasselbe Grundprinzip: Zwei Eiweisse, Aktin und Myosin, gleiten aneinander vorbei wie zwei ineinandergreifende Buersten.

**In diesem Kapitel lernst du:**
- Die drei Muskeltypen und ihre Unterschiede
- Wie das Sarkomer aufgebaut ist und was sich bei Kontraktion verkuerzt
- Warum Calcium der “Startschuss” fuer die Kontraktion ist
- Warum ATP zum Loesen gebraucht wird (und was bei Rigor mortis passiert)

---

{{DIAGRAM:sarkomer}}

## Drei Muskeltypen im Vergleich

| Merkmal | Skelettmuskel | Herzmuskel | Glatte Muskulatur |
|---|---|---|---|
| Steuerung | Willkuerlich | Automatisch | Automatisch |
| Aussehen | Quergestreift | Quergestreift | Keine Streifen |
| Kerne | Viele (am Rand) | 1-2 (zentral) | Einer (zentral) |
| Verbindung | Nervensignal (NMJ) | Gap Junctions | Gap Junctions |
| Dauerkrampf (Tetanus) | Moeglich | Unmoeglich | Tonisch moeglich |

Der Herzmuskel ist besonders: Er sieht aus wie der Skelettmuskel (quergestreift), arbeitet aber automatisch. Die Zellen sind ueber **Gap Junctions** elektrisch verbunden -- wie Haueser in einer Lichterkette. Dadurch schlaegt das ganze Herz gleichzeitig. Ein Tetanus (Dauerkrampf) ist beim Herzen unmoeglich, weil es nach jedem Schlag eine lange Pause braucht (Refraktaerzeit).

> **Merke:** Herzmuskel = quergestreift + einkernig + Gap Junctions + kein Tetanus. Glatte Muskulatur hat kein Troponin, sondern Calmodulin.

---

## Das Sarkomer -- die kleinste Einheit der Kontraktion

Das Sarkomer reicht von einer Z-Scheibe zur naechsten. Stell dir das vor wie ein Ziehharmonika-Abschnitt:

- **I-Bande** (hell): Nur Aktin -- wird bei Kontraktion **kuerzer**
- **A-Bande** (dunkel): Myosin plus ueberlappende Aktinfilamente -- bleibt **immer gleich lang** (das ist die haeufigste Pruefungsfalle!)
- **H-Zone** (Mitte): Nur Myosin -- **verschwindet** bei voller Kontraktion

Die Filamente gleiten aneinander vorbei wie zwei ineinandergeschobene Kaemme. Sie werden dabei nicht kuerzer -- sie ueberlappen sich nur mehr.

> **Merke:** Bei Kontraktion: I-Bande kuerzer, H-Zone kuerzer, A-Bande bleibt konstant! Filamente gleiten, sie schrumpfen nicht.

---

{{DIAGRAM:action-potential}}

## Calcium als Startschuss

Im Ruhezustand blockiert **Tropomyosin** die Bindungsstellen auf Aktin -- wie ein Riegel vor einer Tuer. Wenn ein Signal kommt, passiert Folgendes:

1. Calcium stroemt aus dem Speicher (sarkoplasmatisches Retikulum) ins Zellinnere
2. Calcium bindet an **Troponin C** -- der Riegel wird zur Seite geschoben
3. Myosin kann jetzt an Aktin andocken und zieht daran -- das ist der **Kraftschlag**

Danach muss sich Myosin wieder loesen. Und genau dafuer braucht es **ATP**: ATP bindet an den Myosinkopf und loest ihn vom Aktin. Ohne ATP bleibt Myosin festgeklemmt -- das ist **Rigor mortis** (Totenstarre). Stell dir das vor wie einen Klettverschluss, den du nur mit Energie wieder oeffnen kannst.

Bei der **glatten Muskulatur** (z. B. Darm, Gefaesse) gibt es kein Troponin. Stattdessen bindet Calcium an **Calmodulin**, das dann die MLCK aktiviert -- ein anderer Schalter fuer dasselbe Ergebnis.

> **Merke:** Calcium -> Troponin C -> Tropomyosin weg -> Myosin bindet Aktin -> Kraftschlag. ATP loest Myosin. Kein ATP = Rigor mortis.

---

## Kraftdosierung

Dein Koerper dosiert die Muskelkraft auf zwei Wegen:
- **Rekrutierung**: Mehr motorische Einheiten (Nervenzelle + ihre Muskelfasern) werden aktiviert
- **Frequenz**: Schnellere Signale, sodass sich die Kontraktionen ueberlagern

Feine Muskeln (Finger, Augen) haben kleine Einheiten mit wenigen Fasern -- fuer praezise Bewegungen. Grobe Muskeln (Wade) haben grosse Einheiten mit tausenden Fasern -- fuer rohe Kraft.

---

## MedAT-Fokus

**Haeufige Pruefungsfragen:**
- Was wird bei Kontraktion kuerzer? I-Bande und H-Zone (A-Bande bleibt!)
- Wofuer braucht man ATP? Zum Loesen des Myosins von Aktin
- Warum kein Tetanus am Herzen? Lange Refraktaerzeit
- Glatte Muskulatur? Calmodulin statt Troponin

**Typische Fallen:**
- A-Bande bleibt konstant (= Myosinlaenge)
- ATP = Loesen, nicht Kraftschlag
- Herzmuskel ist quergestreift, aber einkernig und unwillkuerlich
- Troponin I/T steigt 3-6 h nach Herzinfarkt im Blut an

---

## Zusammenfassung

- Drei Muskeltypen: Skelett (willkuerlich), Herz (automatisch, Gap Junctions, kein Tetanus), glatt (Calmodulin)
- Sarkomer: I-Bande und H-Zone werden kuerzer, A-Bande bleibt gleich
- Calcium loest die Kontraktion aus, ATP loest den Myosinkopf
- Ohne ATP: Rigor mortis (Totenstarre)
- Troponin I/T im Blut = Herzinfarktmarker`,
      contentExtended: `## Einleitung

**Worum geht es?** **Muskelgewebe** ermöglicht Kontraktion; es gibt **drei Typen**: Skelettmuskel (willkürlich), Herzmuskel (unwillkürlich, Pumpe), glatte Muskulatur (unwillkürlich). **Warum für den MedAT relevant?** Sarkomeraufbau (I-Bande, A-Bande, H-Zone), Ca2+-Schalter (Troponin/Tropomyosin), Rolle von ATP, Unterschiede der drei Typen (Herzmuskel: Gap Junctions, kein Tetanus; glatt: Calmodulin/MLCK) und Troponin als Herzinfarkt-Marker werden geprüft. **Welche Fragen werden beantwortet?** "Sarkomer -- was wird bei Kontraktion kuerzer?"; "Herzmuskel -- warum kein Tetanus?"; "ATP -- wofuer bei Kontraktion?"; "Welcher Muskeltyp hat Gap Junctions?"; "Glatte Muskulatur -- Troponin oder Calmodulin?" Mit diesem Kapitel sind alle typischen BMS-Fragen zu Muskelgewebe abgedeckt.

**In diesem Kapitel lernst du:**
- die **drei Muskeltypen** (Skelett, Herz, glatt) und ihre Steuerung (willkuerlich/unwillkuerlich)
- **Sarkomeraufbau** (Z-Scheibe, A-Bande, I-Bande, H-Zone) und **Gleitfilamenttheorie** (bei Kontraktion: I und H kuerzer, A konstant)
- den **Ca2+-Schalter** (Troponin/Tropomyosin) und die Rolle von **ATP** (Loesen des Myosins nach dem Kraftschlag; Rigor mortis bei Fehlen)
- **Herzmuskel** (Gap Junctions, Glanzstreifen, kein Tetanus) und **glatte Muskulatur** (Calmodulin/MLCK statt Troponin)

---

{{DIAGRAM:sarkomer}}

## Grundprinzip: Die drei Muskeltypen

**Um die folgenden Abschnitte einzuordnen:** Zuerst der Ueberblick -- welche Muskeltypen gibt es und wie unterscheiden sie sich?

| Merkmal | Skelettmuskel | Herzmuskel | Glatte Muskulatur |
|---|---|---|---|
| Streifung | Quergestreift | Quergestreift | Keine Sarkomere |
| Steuerung | **Willkuerlich** | Unwillkuerlich | Unwillkuerlich |
| Kerne | Mehrkernig (peripher) | **1-2 (zentral)** | Einkernig (zentral) |
| Kopplung | NMJ (ACh, Nikotin-R.) | **Gap Junctions** (Glanzstreifen) | Gap Junctions |
| Ca2+-Schalter | **Troponin C** | **Troponin C** | **Calmodulin -> MLCK** |
| Tetanus | Moeglich | **Unmoeglich** (lange Refraktaerzeit) | Tonisch moeglich |
| Biomarker | CK-MM | **Troponin I/T**, CK-MB | -- |

> **Merke:** Herzmuskel = quergestreift (wie Skelett) + einkernig + Gap Junctions + kein Tetanus. Glatte Muskulatur = kein Troponin -> Calmodulin stattdessen.

---

## Sarkomerstruktur: Grundprinzip der Querstreifung

**Bisher haben wir gesehen:** Drei Muskeltypen, alle mit Aktin und Myosin. **Wo** genau gleiten die Filamente? Im **Sarkomer** -- der kleinsten kontraktilen Einheit. Das **Sarkomer** ist die kleinste kontraktile Einheit -- von **Z-Scheibe zu Z-Scheibe** (~2,2 um in Ruhe):

**Aufbau (von Z zu Z):**
- **I-Bande** (hell): Nur Aktin-Duennfilamente -> **wird bei Kontraktion kuerzer**
- **A-Bande** (dunkel): Myosin-Dickfilamente + ueberlappende Aktinfilamente -> **bleibt konstant** (Myosinlaenge aendert sich nicht!)
- **H-Zone** (in der Mitte der A-Bande): Nur Myosin, kein Aktin -> **verschwindet bei maximaler Kontraktion**
- **M-Linie**: Verankert Myosinfilamente in der Mitte
- **Z-Scheiben** ruecken zusammen -> Sarkomer wird kuerzer

**Strukturproteine:**
- **Titin**: "Molekulare Feder" von Z-Scheibe zu M-Linie (via Myosin) -> Ruhespannung + Schutz vor Ueberdehnung
- **Nebulin**: Parallel zu Aktin, legt Filamentlaenge fest

> **Merke:** Bei Kontraktion: **I-Bande kuerzer, H-Zone kuerzer, A-Bande = konstant**. Filamente gleiten, nicht schrumpfen!

---

{{DIAGRAM:action-potential}}

## Troponin-Tropomyosin-Schalter: Wie Ca2+ Kontraktion ausloest

**Bisher haben wir gesehen:** Die Struktur des Sarkomers. **Aber was loest die Kontraktion aus?** Der Schalter ist **Ca2+** -- es bindet an Troponin und gibt die Myosin-Bindungsstellen frei.

**Ruhezustand:** Tropomyosin liegt in der Furche des Aktinstrangs und **blockiert** die Myosin-Bindungsstellen.

**Aktivierung -- Schritt fuer Schritt:**
1. Aktionspotential erreicht das T-Tubulus-System
2. Spannungsgesteuerte Rezeptoren (DHPR) aktivieren **Ryanodin-Rezeptoren (RyR1)** im sarkoplasmatischen Retikulum (SR)
3. **Ca2+ stroemt aus SR** ins Zytosol (0,1 uM -> ~10 uM)
4. Ca2+ bindet **Troponin C** -> Konformationsaenderung des Troponin-Komplexes
5. **Tropomyosin verschiebt sich** -> Myosin-Bindungsstellen auf Aktin freigegeben
6. **Kreuzbrueckenbildung**: Myosinkopf bindet Aktin -> Kraftschlag (Power Stroke)

**Kreuzbrueckenzyklus -- ATP-Rolle:**
- Kraftschlag: ADP + Pi werden freigesetzt (gespeicherte Energie -> mechanische Arbeit)
- **ATP bindet Myosinkopf -> Loesen von Aktin** (Rigor mortis: kein ATP -> Myosin bleibt haften!)
- ATP-Hydrolyse -> Myosinkopf wiederaufgespannt -> neuer Zyklus

**Entspannung:** SERCA (SR-Ca2+-ATPase) pumpt Ca2+ zurueck ins SR -> Troponin/Tropomyosin blockiert wieder.

> **Merke:** Ca2+ -> Troponin C -> Tropomyosin weg -> Myosin bindet Aktin -> Kraftschlag. **ATP loest Myosin** (nicht fuer den Kraftschlag selbst!). Kein ATP = Rigor mortis.

---

## Motorische Einheit und Kraftregulation

**Bisher haben wir gesehen:** Wie eine einzelne Faser kontrahiert. **Wie dosiert der Koerper die Kraft?** Ueber **Rekrutierung** und **Frequenz**. **Motorische Einheit** = 1 Alpha-Motoneuron + alle seine Muskelfasern. Uebertragung am NMJ (neuromuskuaere Endplatte): ACh -> nikotinerge Rezeptoren -> Endplattenpotential -> AP.

**Kraftregulation durch zwei Mechanismen:**
1. **Rekrutierung** (Spatial Summation): Mehr motorische Einheiten aktivieren -> mehr Kraft
2. **Frequenzerhoehung** (Temporal Summation): Schnellere AP-Folge -> Summation -> Tetanus

**Einheitsgroesse und Funktion:**
- Klein (M. interossei, Augenmuskel: ~10 Fasern) -> feine Kraftdosierung (Schreiben, Blickbewegungen)
- Gross (M. gastrocnemius: bis 2000 Fasern) -> grobe Kraft

**Glatte Muskulatur -- anderer Ca2+-Schalter:**
Kein Troponin! Ca2+ bindet **Calmodulin** -> aktiviert **MLCK** (Myosin-Leichtketten-Kinase) -> phosphoryliert Myosin -> Kontraktion. Gesteuert durch ANS, Hormone, Dehnung.

---

## MedAT-Fokus

**Typische Pruefungsfragen:**
- Welche Sarkomerbanden werden bei Kontraktion kuerzer? -> I-Bande und H-Zone; A-Bande konstant
- Wofuer wird ATP im Kreuzbrueckenzyklus benoetigt? -> Zum Loesen des Myosins von Aktin (nicht fuer den Kraftschlag!)
- Warum kann der Herzmuskel keinen Tetanus entwickeln? -> Lange absolute Refraktaerzeit
- Was unterscheidet glatte von quergestreifter Muskulatur? -> Kein Troponin, Calmodulin/MLCK statt Troponin; keine Sarkomere

**Typische Pruefungsfallen:**
- A-Bande bleibt konstant (= Myosinlaenge) -- I-Bande und H-Zone werden kuerzer
- ATP = Loesen, nicht Kraftschlag; Rigor mortis = kein ATP
- Herzmuskel: quergestreift, aber einkernig + Gap Junctions + kein Tetanus
- Glatte Muskulatur: Calmodulin/MLCK, keine Sarkomere, kein Troponin
- Troponin I/T: 3-6 h nach Infarkt, bis ~14 Tage erhoeht; Rigor mortis nach 24-48 h

---

## Zusammenfassung (ultrakompakt)

- **Grundprinzip**: Gleitfilamenttheorie -- Aktin und Myosin gleiten aneinander, Sarkomer kuerzer; Filamente selbst bleiben gleich lang
- **Sarkomer**: Z-Z; **I-Bande** (Aktin, kuerzer) + **A-Bande** (Myosin, = konstant!) + **H-Zone** (Myosin, kuerzer bis weg)
- **Ca2+-Schalter**: Ca2+ -> Troponin C -> Tropomyosin verschiebt -> Myosin bindet Aktin -> Kraftschlag
- **ATP**: Loest Myosinkopf nach Kraftschlag (nicht fuer den Schlag selbst). Fehlt ATP -> **Rigor mortis**
- **Herzmuskel**: quergestreift, einkernig, Gap Junctions (Glanzstreifen), kein Tetanus (lange Refraktaerzeit)
- **Glatte Muskulatur**: kein Troponin -> Ca2+/Calmodulin -> MLCK -> Myosin-Phosphorylierung -> Kontraktion
- **Klinisch**: Kardiales Troponin I/T = sensitiver Herzinfarktmarker (3-6 h nach Infarkt)`,
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
        “Ranvier-Schnürringe”,
      ],
      content: `## Nervengewebe -- einfach erklaert

Dein Nervensystem besteht aus zwei Zelltypen: **Neuronen** (leiten Signale) und **Gliazellen** (unterstuetzen und schuetzen die Neuronen). Stell dir Neuronen wie elektrische Kabel vor und Gliazellen wie die Isolierung drumherum.

**In diesem Kapitel lernst du:**
- Warum Myelin-Isolierung Signale schneller macht
- Welche Gliazellen es gibt und was sie tun

---

{{DIAGRAM:action-potential}}

## Aufbau eines Neurons

Ein Neuron hat vier wichtige Teile -- stell dir einen Baum vor:

- **Dendriten** sind wie die Aeste: Sie empfangen Signale von anderen Zellen (Input)
- **Soma** (Zellkoerper) ist der Stamm: Hier sitzt der Zellkern
- **Axon** ist wie die Wurzel, die in die Tiefe geht: Es leitet das Signal **vom Koerper weg** (Output)
- **Axonhuegel**: Hier entscheidet sich, ob ein Signal stark genug ist, um weitergeleitet zu werden (Schwelle ca. -55 mV)

Am Ende des Axons sitzen kleine Knoepfchen mit Neurotransmitter-Blaeschen -- dort wird das Signal an die naechste Zelle uebergeben (Synapse).

---

## Myelin -- die Isolierung fuer schnelle Signale

Viele Axone sind mit einer Fettschicht umwickelt, dem **Myelin**. Stell dir das vor wie die Gummiisolierung um ein Stromkabel. Zwischen den Myelin-Abschnitten gibt es kleine nackte Stellen -- die **Ranvier-Schnuerringe**. Das Signal springt von Schnuerring zu Schnuerring, anstatt langsam durch das ganze Kabel zu kriechen. Das nennt man **saltatorische Leitung**.

| | **Schwann-Zelle** | **Oligodendrozyt** |
|---|---|---|
| Wo? | Peripheres NS (PNS) | Zentrales NS (ZNS) |
| Wie viele Segmente? | **1** Segment pro Zelle | Bis zu **50** Segmente |
| Heilung? | Gut (PNS regeneriert) | Schlecht (ZNS regeneriert kaum) |

Ohne Myelin: Signal kriecht mit 0,5-2 m/s (wie Schneckentempo). Mit Myelin: Signal springt mit 70-120 m/s (wie ein ICE). Ausserdem spart die saltatorische Leitung Energie, weil die Natrium-Kalium-Pumpe nur an den Schnuerringen arbeiten muss.

Bei **Multipler Sklerose** greift das Immunsystem die Oligodendrozyten im ZNS an. Die Myelin-Isolierung geht kaputt, und Signale werden langsamer oder brechen ganz ab.

> **Merke:** Schwann-Zelle (PNS) = 1 Segment. Oligodendrozyt (ZNS) = bis 50 Segmente. PNS heilt, ZNS kaum.

---

{{DIAGRAM:synapse}}

## Gliazellen -- die Helfer im Nervensystem

Neben den Neuronen gibt es vier Typen von Gliazellen:

| Gliazelle | Aufgabe |
|---|---|
| **Astrozyten** | Bilden die Blut-Hirn-Schranke (induzieren Tight Junctions), raumen Glutamat auf, puffern Kalium |
| **Oligodendrozyten** | Myelinisieren Axone im ZNS |
| **Mikroglia** | Immunzellen des Gehirns -- die einzigen Gliazellen, die aus dem **Mesoderm** stammen (alle anderen aus dem Neuroektoderm) |
| **Ependymzellen** | Produzieren Hirnwasser (Liquor, ca. 500 ml pro Tag) |

Ein haeufiger Pruefungsfehler: Astrozyten **induzieren** die Tight Junctions der Blut-Hirn-Schranke, aber sie **bilden** sie nicht selbst. Die Tight Junctions sitzen im Endothel der Blutgefaesse.

> **Merke:** Mikroglia = mesodermale Makrophagen des Gehirns (einzige nicht-neuroektodermale Gliazelle). Astrozyten induzieren die BHS.

---

## MedAT-Fokus

**Haeufige Pruefungsfragen:**
- Axon leitet vom Koerper weg (nicht Dendriten!)
- Schwann-Zelle: PNS, 1 Segment vs. Oligodendrozyt: ZNS, bis 50
- Mikroglia stammt aus dem Mesoderm
- Astrozyten induzieren die Blut-Hirn-Schranke

**Typische Fallen:**
- Schwann-Zelle und Oligodendrozyt nicht verwechseln
- Astrozyten induzieren Tight Junctions, bilden sie aber nicht
- Saltatorisch: 120 m/s vs. kontinuierlich: 2 m/s

---

## Zusammenfassung

- Neuron: Dendriten (Input), Soma, Axon (Output), Axonhuegel (Entscheidungsstelle)
- Myelin isoliert das Axon, Signal springt von Schnuerring zu Schnuerring (saltatorisch, bis 120 m/s)
- Schwann-Zelle = PNS (1 Segment), Oligodendrozyt = ZNS (bis 50)
- PNS regeneriert, ZNS kaum (Multiple Sklerose)
- Gliazellen: Astrozyten (BHS), Mikroglia (Immunzellen, mesoderm), Ependym (Liquor)`,
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
      content: `## Nervensystem -- einfach erklaert

Dein Nervensystem ist wie das Kommunikationsnetz deines Koerpers. Es hat zwei grosse Teile: Das **ZNS** (Gehirn + Rueckenmark) ist die Zentrale, das **PNS** sind die Leitungen zu den Organen. Innerhalb des PNS gibt es das **vegetative Nervensystem**, das automatisch arbeitet -- mit zwei Gegenspielern: **Sympathikus** (Stressmodus) und **Parasympathikus** (Ruhemodus).

**In diesem Kapitel lernst du:**
- Sympathikus vs. Parasympathikus und ihre Wirkung auf die Organe
- Wie eine Synapse funktioniert
- Was bei einem Aktionspotential passiert
- Reflexbogen: monosynaptisch vs. polysynaptisch

---

{{DIAGRAM:nervensystem-übersicht}}

## Sympathikus und Parasympathikus -- zwei Gegenspieler

Stell dir zwei Fernbedienungen vor: Eine fuer Vollgas (**Sympathikus** -- fight or flight), eine fuer Entspannung (**Parasympathikus** -- rest and digest). Beide steuern dieselben Organe, aber in gegensaetzliche Richtungen.

Der **Sympathikus** kommt aus dem Brustmark (T1-L2) und nutzt **Noradrenalin** als Botenstoff. Der **Parasympathikus** kommt aus Hirnnerven und Kreuzmark (S2-S4) und nutzt **Acetylcholin**.

| Organ | Sympathikus (Stress) | Parasympathikus (Ruhe) |
| --- | --- | --- |
| Herz | Schneller und kraeftiger (beta-1) | Langsamer (M2, Vagus) |
| Bronchien | Weiter (beta-2) | Enger (M3) |
| Pupille | Weit (Mydriasis, alpha-1) | Eng (Miosis, M3) |
| Darm | Peristaltik langsamer | Peristaltik schneller |
| Blase | Schliesst den Schliessmuskel | Entleert (Detrusor kontrahiert) |

Stell dir vor, du wirst von einem Hund gejagt (Sympathikus an): Dein Herz rast, die Bronchien weiten sich fuer mehr Luft, die Pupillen werden gross, die Verdauung wird heruntergefahren. Wenn du dann sicher auf dem Sofa sitzt (Parasympathikus an): Herz beruhigt sich, Verdauung laeuft, Pupillen verengen sich.

> **Merke:** Sympathikus = Stress, Noradrenalin. Parasympathikus = Ruhe, Acetylcholin. Herz: Sympathikus beschleunigt (beta-1), Parasympathikus bremst (M2, Vagus).

---

## Die Synapse -- Signaluebergabe zwischen Neuronen

An der **Synapse** wird das elektrische Signal in ein chemisches umgewandelt und wieder zurueck. Stell dir das wie einen Staffellauf vor: Der Laeufer (elektrisches Signal) gibt den Stab (Neurotransmitter) weiter, und der naechste Laeufer rennt los.

**So laeuft es ab:**
1. Das Signal kommt am Axon-Ende an, **Calcium-Kanaele** oeffnen sich
2. Calcium stroemt ein und loest die Verschmelzung von Neurotransmitter-Blaeschen mit der Membran aus (ueber den **SNARE-Komplex**)
3. Neurotransmitter werden in den Spalt freigesetzt
4. Sie binden an Rezeptoren auf der naechsten Zelle

Das Ergebnis ist entweder erregend (**EPSP** -- Glutamat macht die naechste Zelle aktiver) oder hemmend (**IPSP** -- GABA beruhigt die naechste Zelle).

Es gibt zwei Arten von Rezeptoren:
- **Ionotrope** Rezeptoren oeffnen direkt einen Kanal (schnell, Millisekunden)
- **Metabotrope** Rezeptoren loesen eine Signalkette aus (langsam, Sekunden)

**Botulinumtoxin** zerstoert den SNARE-Komplex -- keine Neurotransmitter-Freisetzung mehr, die Muskeln erschlaffen. **Tetanustoxin** blockiert die hemmenden Botenstoffe (GABA) -- die Muskeln verkrampfen.

> **Merke:** Signal kommt an, Calcium oeffnet die Blaeschen (SNARE), Neurotransmitter uebergibt die Botschaft. EPSP = erregend (Glutamat), IPSP = hemmend (GABA).

---

{{DIAGRAM:synapse}}

## Das Aktionspotential -- wie ein Signal ueber weite Strecken laeuft

Im Ruhezustand liegt die Spannung an der Nervenzelle bei etwa **-70 mV** (innen negativ). Das wird durch die Natrium-Kalium-Pumpe aufrechterhalten (3 Na+ raus, 2 K+ rein).

Wenn ein ausreichend starker Reiz kommt (Schwelle ca. -55 mV), passiert alles auf einmal -- wie ein Dominoeffekt:
1. **Natrium-Kanaele oeffnen sich** -- Na+ stroemt rein, die Spannung steigt auf +40 mV
2. Na+-Kanaele schliessen sich, **Kalium-Kanaele oeffnen sich** -- K+ stroemt raus, Spannung faellt zurueck
3. Kurzzeitig faellt die Spannung sogar unter -70 mV (**Hyperpolarisation**)

Das Ganze dauert nur 1-2 Millisekunden und folgt dem **Alles-oder-Nichts-Prinzip**: Entweder es feuert ganz oder gar nicht. Waehrend der **absoluten Refraktaerzeit** (Na+-Kanaele inaktiviert) kann kein zweites Signal kommen. Das verhindert, dass das Signal rueckwaerts laeuft.

> **Merke:** Ruhepotential -70 mV. Schwelle -55 mV. Na+ rein = Depolarisation (+40 mV). K+ raus = Repolarisation. Alles-oder-Nichts.

---

{{DIAGRAM:action-potential}}

## Reflexbogen

**Bisher haben wir gesehen:** Von der Synapse über das Aktionspotential bis zur saltatorischen Leitung. **Die einfachste verschaltete Antwort** des Nervensystems ist der **Reflex** — ohne bewusste Steuerung. Der Reflexbogen besteht aus Rezeptor, afferenter Faser, (Interneuron), efferenter Faser und Effektor. Der monosynaptische Eigenreflex (z.B. Patellarsehnenreflex) verbindet Ia-Faser direkt mit dem α-Motoneuron ohne Interneuron. Polysynaptische Fremdreflexe (z.B. Fluchtreflex) schalten mehrere Interneurone ein.

**Vergleich Reflextypen:**
- **Monosynaptisch** (Eigenreflex): 1 Synapse, sehr schnell. Rezeptor = Muskelspindel, Afferenz = Ia-Faser (~120 m/s), keine Interneurone. Gleichzeitig: reziproke Hemmung des Antagonisten (über Ia-Interneuron)
- **Polysynaptisch** (Fremdreflex): mehrere Synapsen + Interneurone. Beispiel Fluchtreflex: Nozizeptor → Aδ-Faser → Interneurone → Beuger aktiviert + Strecker gehemmt + gekreuzte Streckreaktion (kontralateral)

> **Merke:** **Monosynaptischer Eigenreflex** (Patellarsehne): Muskelspindel → Ia-Faser → **direkt** α-Motoneuron (1 Synapse, keine Interneurone). **Polysynaptischer Fremdreflex** (Fluchtreflex): Nozizeptor → mehrere Interneurone → komplexe motorische Antwort. Reflexe laufen spinal ab — **unabhängig vom Bewusstsein**!

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Sympathikus vs. Parasympathikus: Wirkung auf Herz, Bronchien, Pupille, GI-Trakt
- Ablauf des Aktionspotentials (Phasen, Ionenkanäle, Refraktärzeit)
- Synaptische Transmission: SNARE-Komplex, ionotrope vs. metabotrope Rezeptoren
- Wo liegen Atem- und Kreislaufzentrum? → Hirnstamm (Medulla oblongata + Pons)

**Typische Prüfungsfallen:**
- **„Verminderung der Schlagfrequenz des Herzens” ist KEINE Wirkung des Sympathikus** — das ist Parasympathikus (M2, Vagus). Sympathikus **erhöht** Herzfrequenz (β1).
- Sympathikus: Noradrenalin postganglionär, aber ACh präganglionär (im Ganglion nikotinisch!)
- EPSP (Glutamat, Depolarisation) vs. IPSP (GABA, Hyperpolarisation)
- Absolute Refraktärzeit (Na⁺-Kanäle inaktiviert, KEIN AP) vs. relative (überschwelliger Reiz nötig)
- Monosynaptischer Eigenreflex (1 Synapse, Ia-Faser direkt) vs. polysynaptischer Fremdreflex (Interneurone)
- NMDA-Rezeptor: Mg²⁺-Block bei Ruhepotential, Koinzidenzdetektor für Lernen
- Ruhepotential ca. -70 mV, Schwelle ca. -55 mV, Overshoot ca. +40 mV
- Saltatorische Leitung bis 120 m/s vs. unmyelinisiert ca. 1 m/s
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

**Worum geht es?** Sinnesorgane wandeln Reize (Licht, Schall, Druck, Temperatur) in elektrische Signale um — **Transduktion**. **Warum für den MedAT relevant?** Im Auge führt mehr Licht zur **Hyperpolarisation** der Photorezeptoren; Ohr: Impedanzanpassung, Tonotopie; Haut: Rezeptortypen. **Welche Fragen werden beantwortet?** „Fototransduktion — Hyperpolarisation oder Depolarisation?“; „Akkommodation — welche Struktur?“; „Tonotopie — wo?“; „Welcher Hautrezeptor für Druck?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Sinnesorganen abgedeckt.

**In diesem Kapitel lernst du:**
- **Transduktion** (Reiz → elektrisches Signal) und Fototransduktion (Licht → Hyperpolarisation)
- **Auge**: Stäbchen vs. Zapfen, Rhodopsin-Kaskade, Akkommodation (Ziliarmuskel, Zonulafasern)
- **Ohr**: Impedanzanpassung, Tonotopie, Haarzellen (Tip-Links, K⁺-reiche Endolymphe)
- **Haut**: Schichten (Epidermis/Dermis/Subcutis), Rezeptortypen (Meissner, Pacini, Merkel, Ruffini, freie Endigungen)

---

{{DIAGRAM:sinnesorgane}}

{{DIAGRAM:nervensystem-übersicht}}

## Grundprinzip: Transduktion — Reize als elektrische Signale

**Um die Sinnesorgane zu vergleichen,** betrachten wir zuerst das gemeinsame Prinzip: **Transduktion**. Alle Sinnesorgane folgen demselben Grundprinzip: Ein physikalischer oder chemischer Reiz wird in ein elektrisches Signal umgewandelt. Die Art der Transduktion unterscheidet sich je nach Sinn:

1. **Photorezeptoren** (Auge): Lichtquanten → Rhodopsin-Aktivierung → G-Protein-Kaskade → cGMP ↓ → Ionenkanäle schließen → **Hyperpolarisation** (atypisch — weil Photorezeptoren im Dunkeln depolarisiert sind!)
2. **Mechanorezeptoren** (Ohr, Haut): Mechanische Verformung → Mechanosensitive Ionenkanäle öffnen direkt → **Depolarisation**
3. **Chemorezeptoren** (Nase, Zunge): Moleküle binden G-Protein-gekoppelte Rezeptoren → Second Messenger → Rezeptorpotential

> **Merke:** Transduktion = Reiz → elektrisches Signal. Auge: Licht → Hyperpolarisation (paradox, weil Dunkelzustand = depolarisiert durch offene cGMP-Kanäle). Ohr/Haut: Mechanische Kraft → Kanalöffnung → Depolarisation.

---

## Auge — Aufbau und Fototransduktion

**Bisher haben wir gesehen:** Transduktion als gemeinsames Prinzip. **Das wichtigste Sinnesorgan für Licht** ist das **Auge** — Aufbau und Fototransduktion sind prüfungsrelevant. **Anatomie des Auges** (drei Schichten von außen nach innen):
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

---

## Ohr — Schallübertragung und Hörphysiologie

**Bisher haben wir gesehen:** Auge und Fototransduktion. **Beim Hören** muss Schall von Luft in Flüssigkeit übertragen werden — das löst das **Ohr** mit Impedanzanpassung. Das Ohr löst ein physikalisches Problem: Luftschwingungen müssen in Flüssigkeitsschwingungen umgewandelt werden. Ohne das Mittelohr gingen 99,9 % der Schallenergie an der Luft-Wasser-Grenze verloren — das Mittelohr gleicht diesen Impedanzunterschied aus.

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

**Bisher haben wir gesehen:** Auge (Licht) und Ohr (Schall). **Chemische Sinne** — Geruch und Geschmack — nutzen **Chemorezeptoren**. **Geruchssinn (Olfaktion):** ~10 Millionen olfaktorische Rezeptorneuronen im Riechepithel (Nasenschleimhaut). Jedes Neuron exprimiert einen von ~400 G-Protein-gekoppelten Rezeptortypen (größte Genfamilie beim Menschen!). Duftmoleküle → Rezeptor → Golf-Protein → Adenylatzyklase → cAMP ↑ → CNG-Kanäle → Depolarisation → Axone über N. olfactorius (I) direkt in Bulbus olfactorius → limbisches System (Amygdala, Hippocampus). Besonderheit: Der Geruchssinn wird als einziger Sinn **ohne Thalamus-Umschaltung** direkt ins limbische System geleitet — das erklärt starke emotionale Geruchserinnerungen.

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

{{DIAGRAM:nervensystem-übersicht}}

---

## Haut — Schichten und Rezeptortypen

**Bisher haben wir gesehen:** Auge, Ohr, Geruch und Geschmack. **Die Haut** ist das größte Sinnesorgan — Schichten und Rezeptortypen sind prüfungsrelevant. **Hautschichten von außen nach innen:**
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

**Typische Prüfungsfragen:**
- Fototransduktionskaskade: Rhodopsin → Transducin → PDE → cGMP ↓ → Hyperpolarisation
- Stäbchen vs. Zapfen: Lokalisation, Empfindlichkeit, Pigmente
- Schallübertragung und Impedanzanpassung im Mittelohr

**Typische Prüfungsfallen:**
- **Ohr:** Mittelohr/Gehörgang = **Trommelfell** als Grenze (richtig). **Bogengänge** sind im **Innenohr**, dienen dem **Gleichgewicht**, nicht der Schallweiterleitung. **Gehörknöchelchen** (3 Stück) = **Mittelohr**. **Ovales Fenster** = Mittelohr–**Innenohr** (nicht Mittelohr–Ohrtrompete). **Ohrtrompete** = Paukenhöhle–**Rachen** (nicht Gehörgang).
- Licht führt zur Hyperpolarisation (nicht Depolarisation!) der Photorezeptoren
- Stäbchen: peripher, hohe Empfindlichkeit, niedrige Auflösung vs. Zapfen: Fovea, hohe Auflösung, niedrige Empfindlichkeit
- Endolymphe ist K⁺-reich (+80 mV), Perilymphe ist Na⁺-reich (wie EZF)
- Basilarmembran-Tonotopie: Basis (steif, schmal) = hohe Frequenzen; Apex (flexibel, breit) = niedrige Frequenzen
- **Ziliarkörper** ist primär für die **Änderung der Linsenkrümmung** (Akkommodation) nötig — nicht Hornhaut, Glaskörper, Regenbogenhaut oder äußere Augenmuskeln.
- Akkommodation: Ziliarmuskel kontrahiert → Zonulafasern ENTSPANNEN → Linse wölbt sich (nicht umgekehrt!)
- Ca. 120 Mio. Stäbchen, ca. 6 Mio. Zapfen; Impedanzanpassung ca. 22-fach; Hörbereich 20 Hz -- 20 kHz
- TRPV1 >43 °C / Capsaicin; TRPM8 ca. 25 °C / Menthol; Presbyopie ab ca. 45 Jahren

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

Hormone sind chemische Botenstoffe, die ueber das Blut transportiert werden. In diesem Kapitel lernst du, wie dein Koerper Hormone steuert und welche Druesen welche Hormone produzieren.

**In diesem Kapitel lernst du:**
- Wie die Hypothalamus-Hypophyse-Achse funktioniert
- Den Unterschied zwischen Peptid- und Steroidhormonen
- Die Schilddruese und ihren Regelkreis
- Insulin, Glukagon und Blutzuckerregulation

---

{{DIAGRAM:hormonsystem}}

{{DIAGRAM:menstrual-cycle}}

## Zwei Hormonklassen -- Peptid vs. Steroid

Es gibt zwei grosse Gruppen von Hormonen. Der Unterschied liegt darin, ob sie wasserloeslich oder fettloeslich sind.

**Peptidhormone** (z. B. Insulin, ACTH, TSH) sind wasserloeslich. Sie koennen die Zellmembran nicht durchdringen und docken deshalb aussen an Membranrezeptoren an. Dort loesen sie Second Messenger aus (cAMP, Ca2+). Die Wirkung tritt schnell ein -- innerhalb von Minuten.

**Steroidhormone** (z. B. Cortisol, Testosteron, Oestrogen) und T3/T4 sind fettloeslich. Sie wandern durch die Membran und binden im Zellkern an Rezeptoren. Dort veraendern sie die Genexpression. Das dauert Stunden, wirkt aber laenger.

> **Merke:** Peptidhormone = wasserloeslich, Membranrezeptor, Second Messenger, schnell (Minuten). Steroidhormone + T3/T4 = fettloeslich, intrazellulaerer Rezeptor, Genexpression, langsam (Stunden).

---

## Schilddruese und Nebenniere

Die Schilddruese bildet T3 und T4. Das Enzym TPO jodiert Tyrosin-Reste in Thyreoglobulin: 2x DIT ergibt T4, MIT + DIT ergibt T3. T3 ist 3-5x potenter -- T4 ist nur das Prohormon.

Die Nebenniere hat eine Rinde (80 %) und ein Mark (20 %). Die Rinde hat drei Zonen:
- **Zona glomerulosa** -- Aldosteron (Na+ zurueckhalten, K+ ausscheiden, Blutdruck steigt)
- **Zona fasciculata** -- Cortisol (Stresshormon, Blutzucker steigt, Immunsuppression)
- **Zona reticularis** -- Androgene (DHEA)

Das Nebennierenmark produziert Adrenalin (80 %) und Noradrenalin (20 %) bei Stress (Fight-or-Flight).

Cortisol steigert die Glukoneogenese in der Leber, unterdrueckt das Immunsystem und hemmt langfristig Osteoblasten -- das ergibt ein Osteoporoserisiko.

> **Merke:** T3 (aktiv, 3 Jod) + T4 (Prohormon, 4 Jod). Hashimoto: T3/T4 sinken, TSH steigt. Nebennierenrinde: Aldosteron / Cortisol / Androgene. Mark: Adrenalin + Noradrenalin.

---

## Pankreas und Blutzucker

Die Langerhans-Inseln im Pankreas regulieren den Blutzucker mit zwei Gegenspielern:

- **Insulin** (beta-Zellen, 65-80 %): Wird nach dem Essen ausgeschuettet. Es sorgt dafuer, dass Muskel- und Fettzellen Glukose aufnehmen (GLUT4-Translokation), und foerdert die Glykogensynthese in der Leber. Blutzucker sinkt.
- **Glukagon** (alpha-Zellen, 15-20 %): Wird beim Fasten aktiv. Es foerdert Glykogenolyse und Glukoneogenese in der Leber. Blutzucker steigt.

Der Insulin-Sekretionsmechanismus: Glukose gelangt ueber GLUT2 in die beta-Zelle, ATP steigt, K-ATP-Kanaele schliessen, Depolarisation, Ca2+ stroemt ein, Exozytose von Insulin.

> **Merke:** Insulin (beta-Zellen) senkt Blutzucker durch GLUT4 und Glykogensynthese. Glukagon (alpha-Zellen) hebt Blutzucker durch Glykogenolyse und Glukoneogenese. Typ-1-DM: beta-Zell-Zerstoerung. Typ-2-DM: Insulinresistenz.

{{DIAGRAM:nervensystem-uebersicht}}

---

## Regelkreise und negative Rueckkopplung

Damit Hormonspiegel stabil bleiben, nutzt das endokrine System negative Rueckkopplung. Der Hypothalamus schickt Releasing-Hormone an die Hypophyse, die trophe Hormone an die periphere Druese sendet. Die Druesenhormone hemmen dann Hypothalamus und Hypophyse zurueck.

Beispiel Schilddruese: Hypothalamus (TRH) -- Hypophyse (TSH) -- Schilddruese (T3/T4) -- T3/T4 hemmen TRH + TSH zurueck.

Bei **primaerer Hypothyreose** ist die Schilddruese selbst kaputt: T3/T4 sinken, die Hemmung faellt weg, TSH steigt kompensatorisch an. Bei **sekundaerer Hypothyreose** ist die Hypophyse defekt: TSH sinkt, T3/T4 sinken.

> **Merke:** Hypothalamus -- Hypophyse -- periphere Druese -- negative Rueckkopplung hemmt zurueck. Primaere Insuffizienz: Druese sinkt, trophe Hormone steigen.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Peptidhormone vs. Steroidhormone: Rezeptortyp, Wirkgeschwindigkeit
- Primaere vs. sekundaere Hypothyreose: TSH hoch vs. TSH tief
- Insulin vs. Glukagon: Wirkung auf Blutzucker
- Cortisol: Glukoneogenese hoch, Immunsuppression, Osteoporose

**Typische Fallen:**
- T3 ist aktiver als T4 (T4 = Prohormon)
- Insulin senkt, Glukagon hebt Blutzucker
- Aldosteron (Zona glomerulosa, RAAS) vs. Cortisol (Zona fasciculata, CRH-ACTH)
- PTH erhoeht Ca2+, Calcitonin senkt Ca2+

---

## Zusammenfassung (ultrakompakt)

- **Peptidhormone**: wasserloeslich, Membranrezeptor, Second Messenger, schnell
- **Steroidhormone + T3/T4**: fettloeslich, intrazellulaerer Rezeptor, Genexpression, langsam
- **Regelkreis**: Hypothalamus -- Hypophyse -- Druese -- negative Rueckkopplung
- **Schilddruese**: T3 aktiv, T4 Prohormon. Primaere Hypothyreose: TSH hoch. Sekundaere: TSH tief
- **Blutzucker**: Insulin (beta-Zellen) senkt, Glukagon (alpha-Zellen) hebt
- **Cortisol**: Glukoneogenese hoch, Immunsuppression, Osteoporose-Risiko`,
      contentExtended: `## Einleitung

**Worum geht es?** **Hormone** sind chemische Botenstoffe über das Blut; die **Hypothalamus-Hypophyse-Achse** steuert periphere Drüsen mit negativer Rückkopplung. **Warum für den MedAT relevant?** Peptid- vs. Steroidhormone, Insulin/Glukagon, Schilddrüsen-Regelkreis (TRH → TSH → T₃/T₄), primäre vs. sekundäre Hypothyreose und Cortisol werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Peptid- vs. Steroidhormon — Rezeptor?“; „Wo wird Somatotropin/Glukagon gebildet?“; „Primäre Hypothyreose — TSH?“; „Insulin senkt oder hebt Blutzucker?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Hormonsystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Hypothalamus-Hypophyse-Achse** (Releasing-Hormone, Adenohypophyse, Neurohypophyse)
- **Peptid-** vs. **Steroidhormone** (Wirkmechanismus, Rezeptorlage)
- **Schilddrüse** (TRH → TSH → T3/T4, negatives Feedback)
- **Insulin/Glukagon**, **Cortisol**, **Nebenniere** (Mark vs. Rinde)

---

{{DIAGRAM:hormonsystem}}

{{DIAGRAM:menstrual-cycle}}

## Hormonklassen und Wirkungsmechanismen

**Um das endokrine System einzuordnen,** beginnen wir mit den **Hormonklassen** und wie sie wirken. Peptidhormone (Insulin, ACTH, TSH) sind hydrophil und wirken über Membranrezeptoren mit Second Messengern (cAMP, IP₃, Ca²⁺) – schnelle Wirkung in Minuten. Steroidhormone (Cortisol, Aldosteron, Testosteron) sind lipophil, passieren die Membran und binden intrazelluläre Rezeptoren im Zellkern, die die Genexpression regulieren – langsame Wirkung in Stunden. T₃/T₄ sind lipophile Aminosäurederivate und wirken ähnlich wie Steroidhormone.

> **Merke:** **Hormonklassen & Rezeptoren:** Peptidhormone (Insulin, GH, ACTH) = hydrophil → Membranrezeptoren (Tyrosinkinase, G-Protein) → Second Messenger (cAMP, IP₃, Ca²⁺) → schnelle Wirkung (Minuten). Steroidhormone (Cortisol, Testosteron, Östrogen) + T₃/T₄ = lipophil → intrazelluläre Rezeptoren → Genexpression → langsame Wirkung (Stunden).

---

## Schilddrüse und Nebenniere

**Bisher haben wir gesehen:** Peptid- vs. Steroidhormone. **Die wichtigsten peripheren Drüsen** für die Prüfung sind **Schilddrüse** und **Nebenniere**. Die Schilddrüse synthetisiert T₃ und T₄ durch TPO-katalysierte Jodierung von Tyrosin-Resten in Thyreoglobulin (2×DIT → T₄; MIT+DIT → T₃). T₃ ist 3–5× potenter als das Prohormon T₄.

Die **Nebenniere** gliedert sich in Rinde (Kortex, 80 %) und Mark (Medulla, 20 %). Die Rinde hat drei Zonen: Zona glomerulosa (Aldosteron), Zona fasciculata (Cortisol), Zona reticularis (DHEA/Androgene).

**Cortisol** (Zona fasciculata, Glukokortikoid): das zentrale Stresshormon, reguliert über die CRH–ACTH-Achse. Wirkt über intrazelluläre Glukokortikoid-Rezeptoren (GR) → Genexpression. Katabol: steigert Glukoneogenese in der Leber (Blutzucker ↑, diabetogene Wirkung), fördert Protein- und Fettkatabolismus in Muskel und Fettgewebe. Immunsuppressiv: hemmt Phospholipase A₂ → Arachidonsäure ↓ → Prostaglandine und Leukotriene ↓. Langfristig hemmt Cortisol Osteoblasten → Knochenaufbau ↓ → Osteoporoserisiko bei chronischer Therapie (Cushing-Syndrom).

**Aldosteron** (Zona glomerulosa, Mineralokortikoid): reguliert Na⁺/K⁺-Haushalt in der Niere über ENaC (epithelialer Na⁺-Kanal) → Na⁺-Retention + K⁺-Exkretion → Volumen ↑, Blutdruck ↑. Eingebunden in das RAAS: Renin (Niere bei Druckabfall) → Angiotensin II → Aldosteron ↑. Klinisch: Conn-Syndrom (primärer Hyperaldosteronismus) → Hypertonie + Hypokaliämie.

**Adrenalin/Noradrenalin** (Nebennierenmark): Chromaffine Zellen sezernieren Adrenalin (80 %) und Noradrenalin (20 %) bei sympathischer Stimulation (Fight-or-Flight). Adrenalin: β₁ (Herzfrequenz ↑), β₂ (Bronchodilatation, Glykogenolyse), α₁ (Vasokonstriktion).

> **Merke:** **Schilddrüsenhormone:** T₃ (aktiv, 3 Jod) + T₄ (Prohormon, 4 Jod, peripher → T₃). TPO jodiert Tyrosin in Thyreoglobulin: MIT + DIT → T₃, 2×DIT → T₄. Wirkung: Grundumsatz ↑, Herzfrequenz ↑ (β-Rezeptor-Upregulation), Genexpression ↑. TSH stimuliert (TRH-abhängig). Hashimoto → T₃/T₄ ↓, TSH ↑.

---

## Pankreas und Blutzuckerregulation

**Bisher haben wir gesehen:** Schilddrüse, Nebenniere, Cortisol und Aldosteron. **Für die Blutzucker-Homöostase** sind **Insulin** und **Glukagon** aus dem **Pankreas** zentral. Die Langerhans-Inseln des Pankreas enthalten β-Zellen (Insulin, 65–80%) und α-Zellen (Glukagon, 15–20%). Insulin senkt den Blutzucker durch GLUT4-Translokation in Muskel/Fett, Glykogensynthese und Lipogenese. Glukagon hebt den Blutzucker durch Glykogenolyse und Glukoneogenese in der Leber. Der Insulin-Sekretionsmechanismus läuft über GLUT2, ATP-sensitive K⁺-Kanäle und Ca²⁺-abhängige Exozytose.

> **Merke:** **Insulin vs. Glukagon:** Insulin (β-Zellen, nach Mahlzeit): GLUT4-Translokation ↑ (Muskel/Fett), Glykogensynthese ↑ (Leber), Lipolyse ↓, Proteinaufbau ↑ → Blutzucker ↓. Glukagon (α-Zellen, Fasten): Glykogenolyse ↑, Glukoneogenese ↑ → Blutzucker ↑. Typ-1-DM: β-Zell-Zerstörung. Typ-2-DM: Insulinresistenz + relativer Mangel.

{{DIAGRAM:nervensystem-übersicht}}

---

## Regelkreise und negative Rückkopplung

**Bisher haben wir gesehen:** Die einzelnen Drüsen und Hormone. **Damit Hormonspiegel stabil bleiben,** nutzt das endokrine System **negative Rückkopplung**. Das endokrine System nutzt negative Rückkopplung zur Homöostase: Effektor-Hormone hemmen Hypothalamus und Hypophyse, um ihre eigene Produktion zu drosseln. Bei primärer Drüseninsuffizienz (z.B. Schilddrüse zerstört) fehlt die Hemmung, und die trophen Hormone steigen kompensatorisch an (TSH ↑↑). Positive Rückkopplung ist selten und tritt z.B. beim LH-Surge zur Ovulation oder bei Geburts-Wehen (Oxytocin) auf.

> **Merke:** **Hypothalamus-Hypophyse-Regelkreis:** Hypothalamus (TRH, CRH, GnRH, GHRH) → Hypophyse (TSH, ACTH, LH/FSH, GH) → periphere Drüse (T₃/T₄, Cortisol, Östrogen/Testosteron) → **negative Rückkopplung** hemmt Hypothalamus + Hypophyse. Primäre Insuffizienz: periphere Drüse ↓ → trophe Hormone ↑.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Peptidhormone vs. Steroidhormone: Rezeptortyp, Wirkgeschwindigkeit, Beispiele
- Wo wird Somatotropin gebildet? → Hypophyse (nicht Schilddrüse, Nebenniere)
- Wo wird Pepsinogen gebildet? → Magenschleimhaut (Hauptzellen)
- Wohin wird Galle abgegeben? → Dünndarm (nicht Magen)
- Primäre vs. sekundäre Hypothyreose: TSH-Werte als Schlüssel zur Differenzierung
- Insulin-Sekretionsmechanismus: GLUT2 → ATP ↑ → K-ATP schließen → Ca²⁺ → Exozytose

**Typische Prüfungsfallen:**
- T₃ ist biologisch aktiver als T₄ (T₄ ist das Prohormon)
- Primäre Hypothyreose: TSH ↑ (Rückkopplung fällt weg) vs. sekundäre: TSH ↓ (Hypophyse defekt)
- Cortisol: Glukoneogenese ↑ (Blutzucker steigt, diabetogene Wirkung!)
- Insulin senkt Blutzucker, Glukagon hebt ihn -- nicht verwechseln!
- Aldosteron (Zona glomerulosa, RAAS) vs. Cortisol (Zona fasciculata, CRH-ACTH-Achse)
- Insulin: β-Zellen (65--80 %), Glukagon: α-Zellen (15--20 %); Adrenalin 80 % / Noradrenalin 20 % im NNM
- PTH erhöht Ca²⁺, Calcitonin senkt Ca²⁺; Hashimoto = häufigste Autoimmunerkrankung

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

Dein Herz pumpt Blut durch zwei Kreislaeufe: den grossen (Koerper) und den kleinen (Lunge). In diesem Kapitel lernst du, wie das Herz aufgebaut ist, wie die Erregung laeuft und wie der Blutdruck reguliert wird.

**In diesem Kapitel lernst du:**
- Herzaufbau (Kammern, Klappen, Systole/Diastole) und Erregungsleitung
- Grosser vs. kleiner Kreislauf und Blutdruckregulation

---

{{DIAGRAM:blutkreislauf}}

## Herzaufbau und Klappen

Das Herz hat 4 Kammern (RA, RV, LA, LV) und 3 Wandschichten: Endokard (innen), Myokard (Muskel), Epikard (aussen). Der linke Ventrikel hat die dickste Wand (~10-15 mm vs. ~3-5 mm rechts), weil er gegen den hohen Systemwiderstand pumpt.

Es gibt zwei Typen von Klappen:
- **AV-Klappen** haben Sehnenfaeden an Papillarmuskeln: Trikuspidal (3 Segel, rechts) und Mitral (2 Segel, links)
- **Taschenklappen** haben keine Sehnenfaeden und oeffnen passiv: Pulmonal und Aorta (je 3 Taschen)

In der **Systole** pumpen die Ventrikel Blut aus, in der **Diastole** fuellen sie sich. Die Auswurffraktion betraegt in Ruhe ~55-70 %.

> **Merke:** AV-Klappen haben Sehnenfaeden (Trikuspidal 3, Mitral 2), Taschenklappen nicht (Pulmonal, Aorta je 3). Beide stoppen Rueckfluss.

---

## Erregungsleitung

Der SA-Knoten im rechten Vorhof gibt den Takt vor (60-80/min). Die Erregung laeuft zum AV-Knoten, der sie ~100 ms verzoegert -- so haben die Vorhoefe Zeit, ihr Blut in die Kammern zu pumpen. Dann geht es ueber His-Buendel, Tawara-Schenkel und Purkinje-Fasern (schnellste Leitung, 2-4 m/s) zur Ventrikelmuskulatur.

> **Merke:** SA-Knoten startet (60-80/min), AV-Knoten verzoegert, His leitet, Tawara teilt, Purkinje sprintet von Spitze nach oben.

{{DIAGRAM:heart-anatomy}}

---

## Kreislauf und Blutgefaesse

Das Blut fliesst in zwei Kreislaeufen in Serie:
- **Kleiner Kreislauf**: RV -- Lungenarterien (O2-arm!) -- Lunge -- Lungenvenen (O2-reich!) -- LA
- **Grosser Kreislauf**: LV -- Aorta -- Koerper -- Venen -- RA

Wichtig: Lungenarterien fuehren O2-armes Blut, Lungenvenen O2-reiches. Arterie = vom Herzen weg, nicht = O2-reich!

Die Gefaesstypen: Arteriolen sind Widerstandsgefaesse (regulieren den peripheren Widerstand), Kapillaren ermoeglichen Stoffaustausch, Venen sind Kapazitaetsgefaesse (~70 % des Blutvolumens).

> **Merke:** Kleiner Kreislauf = Lunge (niedrig), grosser = Koerper (hoch). Lungenarterie hat O2-armes Blut!

---

{{DIAGRAM:cardiac-conduction}}

## Blutdruckregulation

Kurzfristig regeln Barorezeptoren (Aortenbogen, Karotis-Sinus) den Blutdruck: Druck steigt -- Parasympathikus steigt -- Herzfrequenz sinkt.

Langfristig wirkt das RAAS: Druck faellt -- Renin -- Angiotensin II -- Vasokonstriktion + Aldosteron steigt -- Na+/H2O-Retention -- Volumen steigt.

Formel: Blutdruck = HZV x TPR = (SV x HF) x TPR.

> **Merke:** Barorezeptoren messen kurzfristig, RAAS rettet langfristig Salz und Wasser. Angiotensin II macht eng, Aldosteron speichert.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Erregungsleitung: SA -- AV -- His -- Tawara -- Purkinje
- Kleiner vs. grosser Kreislauf: Verlauf und Druckverhaeltnisse
- Blutdruckregulation: Barorezeptorreflex vs. RAAS

**Typische Fallen:**
- Lungenarterien fuehren O2-armes Blut
- AV-Klappen haben Sehnenfaeden, Taschenklappen nicht
- LV-Wanddicke 10-15 mm (3x RV); Normaler Blutdruck ~120/80 mmHg

---

## Zusammenfassung (ultrakompakt)

- **Herzaufbau**: 4 Kammern; LV ~10-15 mm (3x dicker als RV)
- **Klappen**: AV-Klappen mit Sehnenfaeden; Taschenklappen ohne
- **Kreislaeufe**: Klein: RV -- Lunge -- LA. Gross: LV -- Koerper -- RA. In Serie!
- **Erregungsleitung**: SA (60-80) -- AV (Verzoegerung) -- His -- Tawara -- Purkinje
- **Blutdruck**: MAP = HZV x TPR. Kurzfristig: Barorezeptoren. Langfristig: RAAS`,
      contentExtended: `## Einleitung

**Worum geht es?** Das Herz pumpt in zwei Kreisläufen in Serie: **großer Kreislauf** (Körper) und **kleiner Kreislauf** (Lunge); Erregungsleitung SA-Knoten → AV-Knoten → His/Purkinje. **Warum für den MedAT relevant?** Erregungsleitung, Herzklappen (AV vs. Taschenklappen), Systole/Diastole, Blutdruckregulation (RAAS, Barorezeptoren) werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Erregungsleitung — Reihenfolge?“; „Welche Klappe zwischen Vorhof und Kammer links?“; „Großer vs. kleiner Kreislauf?“; „RAAS — was wird stimuliert?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Herz und Kreislauf abgedeckt.

**In diesem Kapitel lernst du:**
- **Herzaufbau** (Kammern, Klappen, Systole/Diastole) und **Erregungsleitung** (SA → AV → His/Purkinje)
- **Großer vs. kleiner Kreislauf** und **Blutdruckregulation** (RAAS, Barorezeptoren)
- **Herzzyklus** und typische Werte (Auswurffraktion, Druckverhältnisse)

---

{{DIAGRAM:blutkreislauf}}

## Herzaufbau und Klappen

**Um Herz und Kreislauf zu verstehen,** beginnen wir mit **Aufbau und Klappen**. Das Herz hat 4 Kammern (RA, RV, LA, LV) und 3 Wandschichten: Endokard (Endothel, innen), Myokard (Herzmuskel, Kontraktion), Epikard (Gleitfläche). Der linke Ventrikel hat die dickste Wand (~10–15 mm vs. ~3–5 mm rechts), da er gegen den hohen Systemwiderstand pumpt. AV-Klappen (Trikuspidal: 3 Segel, Mitral: 2 Segel) haben Sehnenfäden an Papillarmuskeln; Taschenklappen (Pulmonal, Aorta: je 3 Taschen) öffnen passiv. **Systole** (Kontraktionsphase: Ventrikel pumpen Blut aus) und **Diastole** (Relaxationsphase: Ventrikel füllen sich mit Blut). Die Auswurffraktion beträgt in Ruhe ~55–70 % des enddiastolischen Volumens.

> **Merke:** **Herzklappen:** AV-Klappen haben Sehnenfäden (Trikuspidal 3, Mitral 2), Taschenklappen haben Taschen (Pulmonal, Aorta je 3) – beide stoppen Rückfluss! (AV = Atrioventrikulär, Sehnenfäden verhindern Prolaps; Taschenklappen öffnen/schließen passiv)

---

## Erregungsleitung

**Bisher haben wir gesehen:** Herzaufbau und Klappen. **Damit das Herz koordiniert pumpt,** braucht es eine geordnete **Erregungsleitung**. Die Erregung entsteht im SA-Knoten (60–80/min, Taktgeber), verzögert sich im AV-Knoten (~120 ms, ermöglicht Vorhof-Kontraktion vor Ventrikel), läuft dann über His-Bündel, Tawara-Schenkel und Purkinje-Fasern (schnellste Leitung, 2–4 m/s). Diese Verzögerung gewährleistet, dass Vorhöfe zuerst das Blut in die Ventrikel pumpen.

> **Merke:** **Erregungsleitung:** SA-Knoten startet (60–80), AV-Knoten verzögert, His-Bündel leitet, Tawara teilt, Purkinje sprintet von Spitze nach oben! (SA → AV [Verzögerung] → His → Tawara [re/li] → Purkinje [Spitze → Basis])

{{DIAGRAM:heart-anatomy}}

---

## Kreislauf und Blutgefäße

**Bisher haben wir gesehen:** Erregungsleitung vom SA- zum AV-Knoten. **Das Blut** fließt in zwei **Kreisläufen** — Aufbau der Gefäße und ihre Rolle sind prüfungsrelevant. Arteriolen sind Widerstandsgefäße (regulieren TPR durch Sympathikus α₁); Kapillaren ermöglichen Stoffaustausch (Starling-Kräfte: Filtration arteriell, Reabsorption venös); Venen sind Kapazitätsgefäße (~70% des Blutvolumens) mit Klappen und Muskel-Venen-Pumpe. Die Windkesselfunktion der Aorta wandelt pulsatilen in kontinuierlichen Fluss um.

> **Merke:** **Kreisläufe:** Rechts = Lunge (klein, niedrig), Links = Körper (groß, hoch) – Lungenarterie hat O₂-armes Blut, Lungenvene hat O₂-reiches Blut! (Kleiner Kreislauf: RV → Lungenarterie → Lunge → Lungenvene → LA; Großer Kreislauf: LV → Aorta → Körper → Venen → RA)

---

{{DIAGRAM:cardiac-conduction}}

## Blutdruckregulation

**Bisher haben wir gesehen:** Kreislauf und Gefäßtypen. **Damit der Blutdruck konstant bleibt,** greifen **kurzfristige** und **langfristige** Regelmechanismen. Kurzfristig: Barorezeptor-Reflex (Aortenbogen, Karotis-Sinus) – Druck ↑ → Parasympathikus ↑ → HF ↓. Langfristig: RAAS – Druck ↓ → Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O-Retention → Volumen ↑. Formel: Blutdruck = HZV × TPR = (SV × HF) × TPR.

> **Merke:** **Blutdruckregulation:** Barorezeptoren messen Druck (kurzfristig), RAAS rettet Salz und Wasser (langfristig) – Angiotensin II macht eng und Aldosteron speichert! (Barorezeptor-Reflex: Blutdruck ↑ → Parasympathikus ↑ → HF ↓; RAAS: Renin → Angiotensin II → Vasokonstriktion + Aldosteron ↑ → Na⁺/H₂O ↑)

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Erregungsleitung: Reihenfolge SA → AV → His → Tawara → Purkinje und Bedeutung der AV-Verzögerung
- Kleiner vs. großer Kreislauf: Verlauf und Druckverhältnisse
- Blutdruckregulation: Barorezeptorreflex (kurzfristig) vs. RAAS (langfristig)

**Typische Prüfungsfallen:**
- Lungenarterien führen O₂-armes Blut (Arterie = vom Herzen weg, nicht O₂-reich!)
- AV-Klappen haben Sehnenfäden, Taschenklappen nicht
- SA-Knoten (primärer Schrittmacher, 60--80/min) vs. AV-Knoten (Backup, 40--60/min)
- Arteriolen = Widerstandsgefäße (TPR) vs. Venen = Kapazitätsgefäße (70 % des Blutvolumens)
- Windkesselfunktion: Aorta wandelt pulsatilen in kontinuierlichen Fluss um
- LV-Wanddicke 10--15 mm (3x RV); HZV Ruhe ca. 5 L/min; AV-Verzögerung ca. 100 ms
- Normaler Blutdruck ~120/80 mmHg; Lungenkreislauf 25/10 mmHg; Kapillaroberfläche ca. 600 m²

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

Blut besteht aus Plasma (~55 %) und zellulaeren Elementen (Erythrozyten, Leukozyten, Thrombozyten). In diesem Kapitel lernst du alles ueber Haemoglobin, den Bohr-Effekt, Blutgruppen und die Gerinnungskaskade.

**In diesem Kapitel lernst du:**
- Blutbestandteile (Plasma, Erythrozyten, Leukozyten, Thrombozyten) und Haemoglobin (Bohr-Effekt)
- AB0- und Rhesus-System (Antigene, Antikoerper, Transfusion)
- Gerinnungskaskade (intrinsisch/extrinsisch, Fibrin) und Bilirubin-Stoffwechsel

---

{{DIAGRAM:blutbestandteile}}

## Erythrozyten und Haemoglobin

Erythrozyten sind bikonkave Scheiben ohne Zellkern (reife menschliche Erythrozyten haben keinen Kern!) mit Haemoglobin (Tetramer 2alpha2beta, Fe2+). Ihr Durchmesser betraegt ~7,5 Mikrometer.

Der **Bohr-Effekt** beschreibt die Rechtsverschiebung der O2-Bindungskurve bei CO2 hoch / pH tief / Temperatur hoch. Das bedeutet: Im metabolisch aktiven Gewebe gibt Haemoglobin mehr O2 ab.

Erythrozyten leben ~120 Tage und werden in der Milz abgebaut: Haemoglobin -- Bilirubin (unkonjugiert) -- Leber -- konjugiertes Bilirubin -- Galle -- Stuhl (Sterkobilin) + Urin (Urobilin).

> **Merke:** Haematokrit: Maenner ~45 %, Frauen ~42 %. Bohr-Effekt: CO2 hoch / pH tief -- Rechtsverschiebung -- O2-Abgabe steigt.

---

## Leukozyten

Leukozyten sind die Immunzellen des Blutes. Die 5 Typen im Differentialblutbild:
- **Neutrophile** (~60 %): Erste Linie gegen Bakterien, Phagozytose
- **Lymphozyten** (~25 %): B-Zellen (Antikoerper), T-Zellen (zellulaer), NK-Zellen
- **Monozyten** (~5 %): Vorlaeufer von Makrophagen
- **Eosinophile** (~3 %): Parasitenabwehr, Allergie
- **Basophile** (~1 %): Histaminfreisetzung

Linksverschiebung (mehr stabkernige Neutrophile) = Zeichen akuter Bakterieninfektion.

---

## Gerinnung und Haemostase

Bei Gefaessverletzung laeuft die Gerinnung in zwei Phasen:

**Primaere Haemostase**: Vasokonstriktion -- Thrombozytenadhäsion (vWF-GPIb) -- Aggregation (Fibrinogen-GPIIb/IIIa) -- Plaettchenpfropf.

**Sekundaere Haemostase** (Koagulationskaskade): Extrinsisch (TF+VIIa, schnell) + Intrinsisch (XIIa, langsam) -- Gemeinsam: Xa+Va -- Thrombin -- Fibrinogen -- Fibrin. Vitamin K aktiviert Faktoren II, VII, IX, X.

> **Merke:** Extrinsisch = TF+VII (schnell, Sekunden), Intrinsisch = XII (langsam, Minuten), Endstrecke = Xa+Va -- Thrombin -- Fibrin!

{{DIAGRAM:immune-response}}

---

## Blutgruppen

AB0-System: Blutgruppe A (Antigen A, Anti-B), B (Antigen B, Anti-A), AB (A+B, keine Antikoerper = Universalempfaenger), 0 (keine Antigene, Anti-A+B = Universalspender). Die Antikoerper sind natuerliche IgM.

Rhesus-System: Rh+ (~85 %). Rh-Inkompatibilitaet: Rh-minus-Mutter + Rh-plus-Kind -- 1. Geburt: Sensibilisierung -- 2. Schwangerschaft: Anti-D (IgG) ueberquert Plazenta -- fetale Haemolyse. Prophylaxe: Anti-D-Immunglobulin.

> **Merke:** 0 = Universalspender (keine Antigene), AB = Universalempfaenger (keine Antikoerper). AB0 = natuerliche IgM, Rhesus = erst nach Sensibilisierung IgG.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Bohr-Effekt: Rechtsverschiebung bei CO2 hoch, pH tief, Temperatur hoch
- AB0-Blutgruppen: Antigene, Antikoerper, Universalspender/-empfaenger
- Gerinnungskaskade: Extrinsisch vs. intrinsisch

**Typische Fallen:**
- Serum vs. Plasma: Serum = Plasma ohne Gerinnungsfaktoren
- Haemophilie A = Faktor VIII-Mangel, Haemophilie B = Faktor IX
- Fe2+ in Haemoglobin (O2-bindend) vs. Fe3+ = Methaemoglobin (kein O2)
- Erythrozyten ~120 Tage; Vitamin K-Faktoren: II, VII, IX, X

---

## Zusammenfassung (ultrakompakt)

- **Blut**: Plasma (55 %) + zellulaere Elemente (45 %); Serum = Plasma ohne Fibrinogen
- **Erythrozyten**: kernlos, bikonkav, Haemoglobin (2alpha2beta, Fe2+); Bohr-Effekt: CO2 hoch / pH tief -- O2-Abgabe steigt
- **Haemostase**: primaer (Thrombozyten, vWF) -- sekundaer (Gerinnungskaskade -- Fibrin). Vitamin K: Faktoren II, VII, IX, X
- **AB0**: 0 = Universalspender, AB = Universalempfaenger. Natuerliche IgM
- **Rhesus**: Rh-minus-Mutter + Rh-plus-Kind -- Anti-D-Prophylaxe`,
      contentExtended: `## Einleitung

**Worum geht es?** **Blut** besteht aus **Plasma** (~55%) und **zellulären Elementen** (Erythrozyten, Leukozyten, Thrombozyten). **Warum für den MedAT relevant?** Bohr-Effekt, AB0/Rhesus-System, Gerinnungskaskade (extrinsisch/intrinsisch), Serum vs. Plasma und Blutgruppen werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Bohr-Effekt — Rechtsverschiebung bei?“; „Universalspender/Universalempfänger?“; „Extrinsisch vs. intrinsisch — welcher Faktor?“; „Serum vs. Plasma?“; „Vitamin K — welche Faktoren?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zu Blut abgedeckt.

**In diesem Kapitel lernst du:**
- **Blutbestandteile** (Plasma, Erythrozyten, Leukozyten, Thrombozyten) und **Hämoglobin** (Bohr-Effekt)
- **AB0- und Rhesus-System** (Antigene, Antikörper, Transfusion)
- **Gerinnungskaskade** (intrinsisch/extrinsisch, Fibrin) und **Bilirubin-Stoffwechsel**

---

{{DIAGRAM:blutbestandteile}}

## Erythrozyten und Hämoglobin

**Um die Bestandteile des Blutes einzuordnen,** beginnen wir mit den **Erythrozyten** — sie transportieren O₂. Erythrozyten sind bikonkave Scheiben **ohne Zellkern** (reife menschliche Erythrozyten haben keinen Zellkern!) mit Hämoglobin (Tetramer 2α2β, Fe²⁺). **Mittlerer Durchmesser ~7,5 µm** (= 7,5×10⁻⁶ m; nicht 7,5 nm, nicht 7,5 mm). Der Bohr-Effekt beschreibt die Rechtsverschiebung der O₂-Bindungskurve bei CO₂↑/pH↓/Temperatur↑ → O₂-Abgabe ↑ im Gewebe. Abbau nach ~120 Tagen in der Milz: Hämoglobin → Bilirubin (unkonjugiert) → Leber → konjugiertes Bilirubin → Galle → Stuhl (Sterkobilin) + Urin (Urobilin).

> **Merke:** **Hämatokrit:** Männer ~45%, Frauen ~42% – Erythrozyten-Volumen im Blut (Anämie ↓, Polyglobulie ↑). (Hämatokrit = Volumenanteil Erythrozyten, Männer höher wegen Testosteron)

---

## Leukozyten

**Bisher haben wir gesehen:** Erythrozyten und Hämoglobin. **Die Immunzellen des Blutes** sind die **Leukozyten**. Leukozyten sind die Immunzellen des Blutes. Die 5 Typen im Differentialblutbild:

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

**Bisher haben wir gesehen:** Erythrozyten und Leukozyten. **Bei Gefäßverletzung** muss das Blut gerinnen — **primäre** und **sekundäre Hämostase**. Primäre Hämostase: Vasokonstriktion → Thrombozytenadhäsion (vWF (von-Willebrand-Faktor)-GPIb) → -aggregation (ADP, Thromboxan A₂, Fibrinogen-GPIIb/IIIa) → Plättchenpfropf. Sekundäre Hämostase (Koagulationskaskade): Extrinsisch (TF+VIIa, schnell) + Intrinsisch (XIIa, langsam) → Gemeinsam: Xa+Va → Thrombin → Fibrinogen → Fibrin. Vitamin K aktiviert Faktoren II, VII, IX, X.

> **Merke:** **Gerinnungskaskade:** Extrinsisch = TF+VII (schnell, Sekunden), Intrinsisch = XII (langsam, Minuten), Endstrecke = Xa+Va → Thrombin → Fibrin! (Beide Wege aktivieren Faktor X → Prothrombinase-Komplex → Thrombin → Fibrinogen → Fibrin)

{{DIAGRAM:immune-response}}

---

## Blutgruppen

**Bisher haben wir gesehen:** Gerinnungskaskade. **Für Transfusionen** sind **Blutgruppen** (AB0 und Rhesus) entscheidend. AB0-System: Blutgruppe A (Antigen A, Anti-B IgM), B (Antigen B, Anti-A IgM), AB (A+B, keine AK, Universalempfänger), 0 (keine Antigene, Anti-A+B IgM, Universalspender). Rhesus-System: Rh+ (ca. 85% der Bevölkerung). Rh-Inkompatibilität: Rh−-Mutter + Rh+-Kind → 1. Geburt: Sensibilisierung → 2. Schwangerschaft: Anti-D (IgG) überquert Plazenta → fetale Hämolyse. Prophylaxe: Anti-D-Immunglobulin post partum.

> **Merke:** **AB0-Blutgruppen:** 0 = Universalspender (keine Antigene), AB = Universalempfänger (keine Antikörper) – natürliche IgM-Antikörper! (A hat Anti-B, B hat Anti-A, AB hat keine, 0 hat Anti-A+B)

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Bohr-Effekt: Welche Faktoren verschieben die O₂-Bindungskurve nach rechts?
- AB0-Blutgruppen: Antigene, Antikörper, Universalspender/-empfänger
- Gerinnungskaskade: Extrinsisch (TF+VII) vs. intrinsisch (XII), gemeinsame Endstrecke

**Typische Prüfungsfallen:**
- **Serum vs. Plasma:** Unterschied = **Gerinnungsfaktoren**. **Plasma** enthält Fibrinogen und andere Gerinnungsfaktoren (Blut + Antikoagulans). **Serum** = Plasma **ohne** Gerinnungsfaktoren (nach Gerinnung abgetrennt).
- AB0-Antikörper sind natürlich vorhanden (IgM), Rhesus-Antikörper erst nach Sensibilisierung (IgG)
- Hämophilie A = Faktor VIII-Mangel (nicht IX); Hämophilie B = Faktor IX
- Fe²⁺ in Hämoglobin (O₂-bindend) vs. Fe³⁺ = Methämoglobin (kann kein O₂ binden)
- Linksverschiebung im Blutbild = unreife Stabkernige ↑ (akute Infektion), nicht Linksverschiebung der O₂-Kurve
- Erythrozyten-Lebensdauer ca. 120 Tage; Neutrophile 50--70 % der Leukozyten; Vitamin K-Faktoren: II, VII, IX, X ("1972")
- Thrombozyten 150.000--400.000/µL (Spontanblutung <20.000/µL); Rh+ bei ca. 85 %

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
        “Impfung”,
        “Allergie”,
        “MHC”,
      ],
      content: `## Einleitung

Dein Immunsystem unterscheidet “selbst” von “fremd”. Es hat zwei Arme: die angeborene Immunitaet (sofort, unspezifisch) und die erworbene Immunitaet (spezifisch, mit Gedaechtnis). In diesem Kapitel lernst du die wichtigsten Zellen, Antikoerper und Allergietypen kennen.

**In diesem Kapitel lernst du:**
- Angeborene vs. erworbene Immunitaet und zentrale Zellen
- MHC I vs. MHC II (Praesentation, Zielzellen) und Komplementsystem
- Antikoerperklassen (IgG, IgM, IgA, IgE) und Allergie Typ I

---

{{DIAGRAM:immune-response}}

## Angeborene Immunitaet

Die angeborene Immunitaet reagiert sofort (Minuten bis Stunden), ist unspezifisch und hat kein Gedaechtnis. Ihre wichtigsten Zellen:
- **Neutrophile**: Phagozytose und Respiratory Burst gegen Bakterien
- **Makrophagen**: Phagozytose und Antigenpraesentation ueber MHC II
- **NK-Zellen**: Toeten Zellen ohne MHC-I (“Missing Self”) ueber Perforin/Granzyme
- **Dendritische Zellen**: Bruecke zur adaptiven Immunitaet

Das **Komplementsystem** kann ueber drei Wege aktiviert werden: klassisch (Antikoerper-Komplexe), Lektin-Weg (MBL) und alternativ (spontane C3-Hydrolyse). Alle fuehren zu: C3b (Opsonierung), C5a (Chemotaxis), MAC/C5b-C9 (Lyse).

> **Merke:** Angeboren = schnell, unspezifisch, kein Gedaechtnis (Makrophagen, Neutrophile, Komplement). Erworben = langsam, spezifisch, Gedaechtnis (T-/B-Zellen, Antikoerper).

---

## Erworbene Immunitaet und T-Zellen

Die spezifische Abwehr liefern T- und B-Zellen:
- **CD4+ T-Helferzellen** erkennen Antigene auf MHC II (APCs) und koordinieren die Immunantwort
- **CD8+ zytotoxische T-Zellen** erkennen Antigene auf MHC I (alle kernhaltigen Zellen) und toeten virusinfizierte Zellen
- **Treg** sorgen fuer Selbsttoleranz
- **B-Zellen** werden zu Plasmazellen (Antikoerper) und Gedaechtniszellen

> **Merke:** MHC I auf ALLEN kernhaltigen Zellen zeigt CD8+ intrazellulaere Pathogene (Viren). MHC II auf APCs zeigt CD4+ extrazellulaere Pathogene (Bakterien).

{{DIAGRAM:blutbestandteile}}

---

## Antikoerper und Impfung

Die wichtigsten Antikoerperklassen:
- **IgM**: Pentamer, Primaer-Antwort (akut), aktiviert Komplement
- **IgG**: Monomer, Sekundaer-Antwort (Gedaechtnis), plazentagaengig (~75 % der Serum-Ig)
- **IgA**: Dimer, Schleimhaut-Sekretion (Speichel, Muttermilch)
- **IgE**: Allergie, bindet an Mastzellen/Basophile

**Aktive Impfung**: Antigen wird gegeben -- eigene Antikoerper + Gedaechtnis (dauerhaft, aber Wochen bis Wirkung).
**Passive Immunisierung**: Fertige Antikoerper -- sofortiger Schutz, kein Gedaechtnis, kurzfristig.

> **Merke:** IgM = Erste (Pentamer, Primaer), IgG = Gedaechtnis (Sekundaer, Plazenta), IgA = Schleimhaut (Dimer), IgE = Allergie (Mastzellen).

---

{{DIAGRAM:blood-groups}}

## Allergie und Autoimmunitaet

Eine **Autoimmunerkrankung** entsteht durch eine Immunreaktion auf koerpereigene Antigene.

**Typ-I-Allergie** (IgE-vermittelt): Bei Erstkontakt bilden sich IgE-Antikoerper, die an Mastzellen binden. Bei erneutem Kontakt vernetzt das Allergen die IgE -- Mastzell-Degranulation -- Histamin, Leukotriene. Folgen: Rhinitis, Asthma, Urtikaria, Anaphylaxie. Notfalltherapie: Adrenalin i.m.

Weitere Typen: Typ II (zytotoxisch), Typ III (Immunkomplexe), Typ IV (verzoegert, T-Zell-vermittelt). Nur Typ I ist IgE-vermittelt.

> **Merke:** Aktiv = Antigen, eigene Antikoerper, Gedaechtnis (Wochen, Jahre). Passiv = fertige Antikoerper, sofort, kurz (kein Gedaechtnis).

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Angeboren vs. erworben: Geschwindigkeit, Spezifitaet, Gedaechtnis
- MHC I (alle Zellen, CD8+) vs. MHC II (APCs, CD4+)
- Antikoerperklassen: IgM, IgG, IgA, IgE

**Typische Fallen:**
- NK-Zellen: angeboren, toeten bei fehlendem MHC I
- IgM = akut, IgG = chronisch/Impfung, plazentagaengig
- Lebendimpfstoffe kontraindiziert bei Immunsuppression
- Anaphylaxie-Therapie: Adrenalin i.m. (erste Wahl!)

---

## Zusammenfassung (ultrakompakt)

- **Angeboren**: sofort, unspezifisch, kein Gedaechtnis -- Neutrophile, Makrophagen, NK-Zellen, Komplement
- **Erworben**: Tage, spezifisch, Gedaechtnis -- T-Zellen, B-Zellen, Antikoerper
- **MHC I** (alle Zellen) -- CD8+ (Viren). **MHC II** (APCs) -- CD4+ (Bakterien)
- **Antikoerper**: IgM (Pentamer, akut), IgG (plazentagaengig), IgA (Schleimhaut), IgE (Allergie)
- **Allergie Typ I**: IgE auf Mastzellen -- Histamin -- Anaphylaxie -- Adrenalin i.m.!`,
      contentExtended: `## Einleitung

**Worum geht es?** Das Immunsystem unterscheidet „selbst” von „fremd”: **angeborene Immunität** (sofort, unspezifisch) und **erworbene Immunität** (spezifisch, Gedächtnis). **Warum für den MedAT relevant?** MHC I vs. II, Antikörperklassen (IgG, IgM, IgA, IgE), Allergie Typ I, Komplementsystem und angeborene vs. erworbene Abwehr werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „MHC I vs. MHC II — wer präsentiert?“; „Welche Antikörperklasse bei Allergie Typ I?“; „Angeborene vs. erworbene — Gedächtnis?“; „Komplement — klassischer Weg?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Immunsystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Angeborene vs. erworbene Immunität** und zentrale Zellen (Neutrophile, Makrophagen, NK, T/B)
- **MHC I vs. MHC II** (Präsentation, Zielzellen) und **Komplementsystem** (klassisch, alternativ, Lektin)
- **Antikörperklassen** (IgG, IgM, IgA, IgE) und **Allergie Typ I** (IgE, Mastzellen)

---

{{DIAGRAM:immune-response}}

## Angeborene Immunität

**Um das Immunsystem zu verstehen,** unterscheidet man **angeborene** (schnell, unspezifisch) und **erworbene** (spezifisch, Gedächtnis) Immunität. Zelluläre Komponenten: Neutrophile (Phagozytose, Respiratory Burst), Makrophagen (Phagozytose, Antigenpräsentation MHC II, IL-1/TNF-α), NK-Zellen (töten Zellen ohne MHC-I über Perforin/Granzyme), dendritische Zellen (Brücke zur adaptiven Immunität). Das Komplementsystem kann über drei Wege aktiviert werden: **Klassischer Weg** (Antigen-Antikörper-Komplexe aktivieren C1q), **Lektin-Weg** (Mannose-bindendes Lektin/MBL erkennt Pathogenzucker), **Alternativer Weg** (spontane C3-Hydrolyse + Verstärkungsschleife auf Pathogenoberflächen). Alle drei Wege münden in C3-Spaltung → C3a (Anaphylatoxin) + C3b (Opsonin) → MAC-Bildung. Humorale Komponenten: Komplementsystem – C3b (Opsonierung), C5a (Chemotaxis), MAC/C5b-C9 (Lyse). Interferone hemmen Virusreplikation.

> **Merke:** **Angeborene vs. Erworbene:** Angeboren = schnell (Minuten), unspezifisch, kein Gedächtnis (Makrophagen, Neutrophile, Komplement). Erworben = langsam (Tage), spezifisch, Gedächtnis (T-/B-Zellen, Antikörper). (Angeborene Immunität reagiert sofort, erworbene braucht Zeit für klonale Expansion)

---

## Erworbene Immunität und T-Zellen

**Bisher haben wir gesehen:** Angeborene Immunität und Komplement. **Die spezifische Abwehr** liefern **T- und B-Zellen**. CD4⁺ T-Helferzellen (MHC II, koordinieren B-Zellen und CTL), CD8⁺ zytotoxische T-Zellen (MHC I, töten virusinfizierte Zellen/Tumorzellen per Perforin/Granzyme), Treg (Selbsttoleranz). B-Zellen produzieren Antikörper (Plasmazellen) und bilden Gedächtniszellen. Klonale Selektion → klonale Expansion bei Antigenerstkontak.

> **Merke:** **MHC-Präsentation:** MHC I auf ALLEN Zellen zeigt CD8⁺ Viren (innen), MHC II auf APCs zeigt CD4⁺ Bakterien (außen)! (MHC I → CD8⁺ → intrazelluläre Pathogene; MHC II → CD4⁺ → extrazelluläre Pathogene)

{{DIAGRAM:blutbestandteile}}

---

## Antikörper und Impfung

**Bisher haben wir gesehen:** T-Zellen und MHC-Präsentation. **Die humorale Abwehr** beruht auf **Antikörpern** — Klassen und Impfung sind prüfungsrelevant. IgM (Primärantwort, Pentamer, aktiviert Komplement); IgG (Sekundärantwort, monomer, plazentagängig, häufigste Klasse); IgA (Dimer, Schleimhaut-Sekretion, Schutz Atemwege/Darm); IgE (Allergie, bindet an Mastzellen/Basophile). Aktive Impfung: Antigen → eigene Antikörper + Gedächtnis (dauerhaft). Passive Immunisierung: fertige Antikörper → sofortiger Schutz, kein Gedächtnis, kurzfristig.

> **Merke:** **Antikörper-Klassen:** IgM = Erste (Pentamer, Primär), IgG = Gedächtnis (Sekundär, Plazenta), IgA = Schleimhaut (Dimer), IgE = Allergie (Mastzellen)! (IgM → akut, IgG → chronisch/Impfung, IgA → Sekrete, IgE → Anaphylaxie)

---

{{DIAGRAM:blood-groups}}

## Allergie und Autoimmunität

**Bisher haben wir gesehen:** Antikörperklassen und Impfung. **Wenn die Immunantwort fehlgeleitet ist,** entstehen **Allergie** (gegen Fremdes) oder **Autoimmunität** (gegen Eigenes). **Definition (prüfungssicher):** Eine **Autoimmunerkrankung** ist eine Erkrankung, die **durch eine Immunreaktion auf körpereigene Antigene** hervorgerufen wird — nicht durch allergische Reaktion auf körperfremde Antigene, nicht durch Injektion von Immunglobulinen, nicht durch gesteigerte NK-Zellen-Aktivität, nicht durch Transplantatabstoßung (die zwar immunologisch ist, aber gegen fremde Gewebeantigene).

Typ-I-Allergie (IgE-vermittelt): Sensibilisierung (Allergen → Th2 → IgE auf Mastzellen) → Re-Exposition (Allergen kreuzvernetzt IgE → Mastzell-Degranulation → Histamin, Leukotriene). Manifestationen: Rhinitis, Asthma, Urtikaria, Anaphylaxie. Notfalltherapie Anaphylaxie: Adrenalin i.m. (β₂ Bronchodilatation, α₁ Vasokonstriktion). Allergie-Typen II–IV: Typ II (zytotoxisch: Antikörper gegen Zelloberflächenantigene, z.B. Autoimmunhämolyse); Typ III (Immunkomplexe: z.B. Serumkrankheit, SLE-Nephritis); Typ IV (verzögert/zellulär: T-Zell-vermittelt, z.B. Tuberkulin-Test, Kontaktdermatitis). Nur Typ I ist IgE-vermittelt und soforttyp. Autoimmunerkrankungen entstehen durch Verlust der Selbsttoleranz.

> **Merke:** **Impfung:** Aktiv = Antigen → eigene Antikörper → Gedächtnis (Wochen, Jahre), Passiv = fertige Antikörper → sofort, kurz (Stunden, Monate, kein Gedächtnis)! (Aktiv: MMR, Tetanus; Passiv: Tetanus-Immunglobulin, Anti-D)

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Angeborene vs. erworbene Immunität: Geschwindigkeit, Spezifität, Gedächtnis
- MHC I vs. MHC II: Welche Zellen exprimieren sie, welche T-Zellen erkennen sie?
- Antikörperklassen: IgM, IgG, IgA, IgE -- Struktur, Funktion, Zeitpunkt

**Typische Prüfungsfallen:**
- MHC I auf ALLEN kernhaltigen Zellen (nicht nur APCs!) → CD8⁺
- IgM = Primärantwort (akut); IgG = Sekundärantwort (Gedächtnis, plazentagängig, ca. 75 % der Serum-Ig)
- NK-Zellen: angeborene Immunität, töten bei FEHLENDEM MHC I ("Missing Self")
- Aktive Impfung (Antigen, langsam, dauerhaft) vs. passive (Antikörper, sofort, kurzfristig)
- Lebendimpfstoffe kontraindiziert bei Immunsuppression!
- Komplement: C3b (Opsonierung), C5a (Chemotaxis), C5b-C9/MAC (Lyse)
- Anaphylaxie-Therapie: Adrenalin i.m. (erste Wahl!); Herdenimmunität Masern ab ca. 95 %

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

Das Lymphsystem hat drei Hauptfunktionen: Es transportiert taeglich ~2-4 L Fluessigkeit zurueck ins Blut, es dient der Immunabwehr (Lymphknoten, Milz, Thymus) und es transportiert Fette (Chylomikronen ueber die Lymphe). In diesem Kapitel lernst du den Aufbau von Lymphknoten, Milz und Thymus kennen.

**In diesem Kapitel lernst du:**
- Funktionen des Lymphsystems (Fluessigkeitsruecktransport, Immunitaet, Fettresorption)
- Lymphknoten (Rinde/Mark, B- und T-Zell-Zonen) und Milz (weisse/rote Pulpa)
- Thymus (T-Zell-Reifung, positive/negative Selektion)

---

{{DIAGRAM:immune-response}}

## Lymphknoten -- Aufbau

Der Lymphknoten filtert Lymphe und initiiert Immunantworten. Er hat drei Zonen:
- **Cortex** (Rinde): Hier sitzen **B-Zellen** in Follikeln. Primaerfollikel sind ruhend, Sekundaerfollikel mit Keimzentrum sind aktiv und produzieren Antikoerper.
- **Paracortex**: Hier sitzen **T-Zellen** (CD4+ und CD8+) und dendritische Zellen. Hier werden T-Zellen aktiviert.
- **Mark** (Medulla): Hier sitzen **Plasmazellen** (sezernieren Antikoerper) und Makrophagen.

Lymphe tritt ueber mehrere afferente Gefaesse ein und verlaesst den Knoten ueber ein efferentes Gefaess am Hilus.

> **Merke:** Cortex = B-Zellen (Follikel, Antikoerper), Paracortex = T-Zellen + dendritische Zellen, Mark = Plasmazellen. Afferenz: mehrere Gefaesse. Efferenz: ein Gefaess.

---

## Milz und Thymus

Die **Milz** (~150 g) filtert ~1 L Blut/min und hat zwei Kompartimente:
- **Rote Pulpa** (~80 %): Filtert alte/defekte Erythrozyten (Makrophagen), speichert ~30 % aller Thrombozyten
- **Weisse Pulpa** (~20 %): Immunabwehr gegen Blutpathogene; PALS (T-Zellen) + Follikel (B-Zellen)

Ohne Milz (Splenektomie) droht **OPSI** -- eine lebensbedrohliche Sepsis durch bekapselte Bakterien (Pneumokokken, Meningokokken, H. influenzae). Prophylaxe: Impfung + Penicillin.

Der **Thymus** liegt im oberen Mediastinum und ist der Reifungsort der T-Zellen. Er ist vor der Pubertaet am groessten und bildet sich danach zurueck.
1. **Positive Selektion** (Cortex): T-Zellen, die MHC erkennen, ueberleben (~5 %)
2. **Negative Selektion** (Mark): T-Zellen, die Selbst-Antigene zu stark erkennen, sterben (zentrale Toleranz)

B-Zellen reifen dagegen im Knochenmark.

> **Merke:** Milz: rote Pulpa (Ery-Abbau + Thrombozyten) vs. weisse Pulpa (Immunabwehr). Splenektomie = OPSI-Risiko! Thymus: positive Selektion (MHC) + negative Selektion (Selbsttoleranz), nur ~5 % ueberleben.

---

{{DIAGRAM:blutkreislauf}}

## Lymphgefaesse und Lymphtransport

Lymphkapillaren (blind endend, ohne Basalmembran) sammeln ueberschuessige Fluessigkeit aus dem Gewebe. Ueber Lymphgefaesse (mit Klappen) fliesst die Lymphe zum Ductus thoracicus oder Ductus lymphaticus dexter und muendet in die Venae subclaviae.

Der **Ductus thoracicus** sammelt ~75 % der Koerperlymphe und muendet in den linken Venenwinkel. Aus dem Darm transportieren Chylusgefaesse resorbierte Fette (Chylomikronen) direkt ins Blut, unter Umgehung der Leber.

> **Merke:** Ductus thoracicus = 75 % der Koerperlymphe -- linker Venenwinkel. Lymphangion-Pumpe + Klappen + Muskelpumpe treiben den Fluss an.

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- 3 Funktionen: Fluessigkeitsruecktransport, Immunabwehr, Fetttransport
- Lymphknoten-Architektur: Cortex (B), Paracortex (T), Mark (Plasmazellen)
- Milz: weisse vs. rote Pulpa und OPSI nach Splenektomie

**Typische Fallen:**
- Cortex (B-Zellen) vs. Paracortex (T-Zellen) im Lymphknoten
- Positive Selektion (Thymus-Cortex) vs. negative Selektion (Thymus-Mark)
- Nur ~5 % der Thymozyten ueberleben
- OPSI: bekapselte Bakterien (Pneumokokken, Meningokokken, H. influenzae)

---

## Zusammenfassung (ultrakompakt)

- **3 Funktionen**: Fluessigkeitsruecktransport (2-4 L/Tag), Immunabwehr, Fetttransport (Chylomikronen)
- **Lymphknoten**: Cortex (B-Zellen), Paracortex (T-Zellen), Mark (Plasmazellen)
- **Milz**: Weisse Pulpa (Immunabwehr) + Rote Pulpa (Ery-Abbau). OPSI-Risiko nach Splenektomie
- **Thymus**: Positive + negative Selektion, nur ~5 % ueberleben, zentrale Toleranz`,
      contentExtended: `## Einleitung

**Worum geht es?** Das **Lymphsystem** transportiert täglich ~2–4 L Flüssigkeit zurück ins Blut, dient der Immunabwehr (Lymphknoten, Milz, Thymus) und dem Fetttransport (Chylomikronen über Lymphe). **Warum für den MedAT relevant?** Lymphknoten-Zonierung (Cortex/Paracortex/Mark), Milz (weiße vs. rote Pulpa), Thymus (positive/negative Selektion) und OPSI-Risiko werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Drei Funktionen des Lymphsystems?“; „Wo B-Zellen, wo T-Zellen im Lymphknoten?“; „Weiße vs. rote Pulpa der Milz?“; „Positive vs. negative Selektion im Thymus?“; „OPSI nach Splenektomie — welche Bakterien?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Lymphsystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Funktionen** des Lymphsystems (Flüssigkeitsrücktransport, Immunität, Fettresorption)
- **Lymphknoten** (Rinde/Mark, B- und T-Zell-Zonen) und **Milz** (weiße/rote Pulpa)
- **Thymus** (T-Zell-Reifung, positive/negative Selektion)

---

{{DIAGRAM:immune-response}}

## Lymphknoten — Architektur und Immunfunktion

**Um das lymphatische System einzuordnen,** beginnen wir mit dem **Lymphknoten** — Filter und Ort der Immunantwort. Der Lymphknoten filtert Lymphe und initiiert Immunantworten. Seine zonale Architektur trennt B- und T-Zell-Areale präzise:

- **Cortex** (Rinde): **B-Zellen** in Follikeln (Primärfollikel: ruhend; Sekundärfollikel mit Keimzentrum: aktiv → Antikörper-Produktion). Hier entsteht die humorale Immunantwort
- **Paracortex**: **T-Zellen** (CD4⁺ und CD8⁺) + dendritische Zellen. Hier werden T-Zellen via MHC-Antigen-Präsentation aktiviert → zelluläre Immunantwort
- **Mark** (Medulla): **Plasmazellen** (sezernieren Antikörper) + Makrophagen. Markstränge + Marksinus

**Lymphfluss:** Lymphe tritt über **mehrere afferente Gefäße** ein (Randsinus → Cortex → Paracortex → Marksinus) und verlässt den Knoten über **ein efferentes Gefäß** am Hilus.

> **Merke:** Lymphknoten-Architektur: **Cortex** = B-Zellen (Follikel, Antikörper), **Paracortex** = T-Zellen + dendritische Zellen (zelluläre Immunität), **Mark** = Plasmazellen (Sekretion). Afferenz: mehrere Gefäße. Efferenz: ein Gefäß.

---

## Milz und Thymus — Funktion und klinische Bedeutung

**Bisher haben wir gesehen:** Lymphknoten-Architektur. **Neben Lymphknoten** sind **Milz** (Filter, Immunabwehr) und **Thymus** (T-Zell-Reifung) zentral. **Milz** (~150 g, filtert ~1 L Blut/min) hat zwei funktionelle Kompartimente:
- **Rote Pulpa** (~80 %): Filtert alte/defekte Erythrozyten (Makrophagen), speichert ~30 % aller Thrombozyten
- **Weiße Pulpa** (~20 %): Immunabwehr gegen Blutpathogene; PALS (T-Zellen, periarteriolär) + Follikel (B-Zellen, Marginalzone)

**Splenektomie-Risiko:** Milz filtert **bekapselte Bakterien** (Pneumokokken, Meningokokken, H. influenzae) besonders effektiv. Ohne Milz → **OPSI** (Overwhelming Post-Splenectomy Infection): perakute Sepsis mit hoher Letalität. Prophylaxe: Impfung + Penicillin-Prophylaxe.

**Thymus** (oberes Mediastinum): Reifungsort der T-Zellen aus dem Knochenmark. Größte Aktivität vor der Pubertät, dann Involution:
1. **Positive Selektion** (Cortex): T-Zellen, die MHC-I oder MHC-II erkennen, überleben (~3–5 % aller Thymozyten)
2. **Negative Selektion** (Mark): T-Zellen, die Selbst-Antigene zu stark erkennen → Apoptose (zentrale Toleranz → verhindert Autoimmunität)

**B-Zell-Reifung** erfolgt im Knochenmark: Stammzelle → Pro-B → Prä-B → naive B-Zelle. Zentraltoleranzmechanismus: B-Zellen, deren BCR körpereigene Antigene zu stark binden, werden durch klonale Deletion (Apoptose) oder Rezeptorediting eliminiert, um Autoimmunität zu verhindern.

> **Merke:** **Milz**: rote Pulpa (Ery-Abbau + Thrombozytenspeicher) vs. weiße Pulpa (Immunabwehr). **Splenektomie** = OPSI-Risiko → Impfung + Penicillin! **Thymus**: positive Selektion (MHC-Erkennung) + negative Selektion (Selbsttoleranz) → nur ~5 % der Thymozyten überleben.

---

{{DIAGRAM:blutkreislauf}}

## Lymphgefäße und Lymphtransport im Detail

**Bisher haben wir gesehen:** Lymphknoten, Milz und Thymus. **Damit Lymphe zurück ins Blut gelangt,** braucht es **Lymphgefäße** und einen geordneten Abfluss. Lymphkapillaren (blind endend, basalmembranfrei) → Lymphgefäße (mit Taschenklappen und Lymphangion-Pumpe aus glatter Muskulatur) → Ductus thoracicus / Ductus lymphaticus dexter → linke/rechte Vena subclavia. Die Skelettmuskelpumpe und Atembewegungen unterstützen den Lymphtransport zusätzlich.

Der **Ductus thoracicus** (ca. 38-45 cm lang) sammelt die Lymphe aus etwa 75 % des Körpers (beide Beine, linker Arm, linke Thoraxhälfte, Abdomen) und mündet in den linken Venenwinkel (Confluens der V. jugularis interna sinistra und V. subclavia sinistra). Der rechte **Ductus lymphaticus dexter** drainiert den rechten Arm, die rechte Thoraxhälfte und die rechte Kopfhälfte. Aus dem Darm transportieren Chylomikronen-beladene Lymphgefäße (Chylusgefäße, Vasa lactea) resorbierte Lipide direkt ins Blut, unter Umgehung der Leber-Erstpassage.

> **Merke:** Ductus thoracicus = 75 % der Körperlymphe → linker Venenwinkel. Lymphangion-Pumpe + Klappen + Muskelpumpe treiben den Lymphfluss an.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Drei Funktionen des Lymphsystems: Flüssigkeitsrücktransport, Immunabwehr, Fetttransport
- Lymphknoten-Architektur: Wo B-Zellen, wo T-Zellen, wo Plasmazellen?
- Milz: Weiße vs. rote Pulpa und Konsequenzen der Splenektomie

**Typische Prüfungsfallen:**
- Cortex (B-Zellen, Follikel) vs. Paracortex (T-Zellen) im Lymphknoten
- Weiße Pulpa (Immunfunktion) vs. rote Pulpa (Erythrozyten-Filterung) der Milz
- Positive Selektion (Thymus-Cortex: MHC-Erkennung) vs. negative Selektion (Thymus-Mark: Selbsttoleranz)
- Lymphe vs. Blutplasma: Lymphe enthält weniger Proteine, keine Erythrozyten
- Nur ca. 5 % der Thymozyten überleben; Lymphfluss ca. 2--4 L/Tag; Milz speichert ca. 30 % der Thrombozyten
- OPSI-Risiko nach Splenektomie: bekapselte Bakterien (Pneumokokken, Meningokokken, H. influenzae)

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

Das Atmungssystem ermoeglicht den Gasaustausch (O2/CO2) in den Alveolen. Surfactant haelt die Alveolen offen, und die Atemregulation erfolgt primaer ueber CO2/pH. In diesem Kapitel lernst du alles ueber Alveolen, Atemmechanik und CO2-Transport.

**In diesem Kapitel lernst du:**
- Alveolen, Surfactant (Typ-II-Pneumozyten) und Blut-Luft-Schranke
- Atemmechanik (Inspiration/Exspiration) und Gasaustausch
- CO2-Transport (Bikarbonat, Bohr-Effekt) und Atemregulation

---

{{DIAGRAM:atmungssystem}}

## Surfactant und Alveolarstruktur

Der Gasaustausch findet in den Alveolen statt, nicht in den Bronchien. Die ~300 Millionen Alveolen haben zwei Zelltypen:
- **Typ-I-Pneumozyten** (~95 % der Oberflaeche): Hauchduenn (0,2 Mikrometer), ermoeglichen den Gasaustausch
- **Typ-II-Pneumozyten** (~5 % der Oberflaeche): Produzieren **Surfactant** (hauptsaechlich DPPC, ~90 % Phospholipide)

Surfactant senkt die Oberflaechenspannung an der Luft-Fluessigkeits-Grenze. Ohne Surfactant wuerden kleine Alveolen nach dem Laplace-Gesetz (P = 2T/r) kollabieren.

Bei Fruehgeborenen (<28 SSW) sind die Typ-II-Pneumozyten unreif -- Surfactant-Mangel fuehrt zu Atelektase und Hypoxie (neonatales Atemnotsyndrom, RDS). Prophylaxe: Betamethason antenatal.

> **Merke:** Surfactant: Typ-II-Pneumozyten, DPPC (~90 % Phospholipide), Oberflaechenspannung sinkt, Atelektase verhindert. RDS bei Fruehgeborenen: Surfactant-Mangel.

---

## Atemmechanik, Gasaustausch und Atemregulation

**Atemmechanik:**
- **Inspiration** (aktiv): Diaphragma + aeussere Interkostalmuskeln kontrahieren, Thoraxvolumen steigt, Unterdruck entsteht, Luft stroemt ein. Der intrapleurale Druck ist immer negativ (~-5 mmHg in Ruhe).
- **Exspiration in Ruhe** (passiv): Muskelentspannung, elastische Rueckstellung, Luft stroemt aus. Nur bei forcierter Exspiration aktiv (Bauchmuskeln).

**Gasaustausch durch Diffusion:**
- O2: Alveolen ~100 mmHg, venoeses Blut ~40 mmHg -- Gradient 60 mmHg, O2 diffundiert ins Blut
- CO2: Venoeses Blut ~46 mmHg, Alveolen ~40 mmHg -- Gradient nur 6 mmHg, aber CO2 diffundiert ~20x schneller (hoehere Loeslichkeit)

**CO2-Transport** im Blut:
- 70 % als Bikarbonat (HCO3-): Carboanhydrase in Erythrozyten wandelt CO2 + H2O um. Chlorid-Shift. Haldane-Effekt: Desoxy-Hb bindet mehr CO2.
- 23 % als Carbaminohaemoglobin (CO2 an Globin)
- 7 % geloest im Plasma

**Atemregulation:** Zentrale Chemorezeptoren (Medulla) reagieren auf CO2/pH = Hauptantrieb. Periphere Chemorezeptoren (Karotiskoerper) reagieren auf O2, aber erst bei pO2 <60 mmHg relevant. Bei COPD: Anpassung an hohes CO2, O2 wird Hauptantrieb -- unkontrollierte O2-Gabe kann Apnoe ausloesen!

> **Merke:** CO2-Transport: 70 % Bikarbonat, 23 % Carbamino-Hb, 7 % geloest. Atemantrieb: primaer CO2/pH (zentral), O2 erst bei pO2 <60 mmHg (peripher).

{{DIAGRAM:blutkreislauf}}

---

## MedAT-Fokus

**Zentral pruefungsrelevant:**
- Surfactant: Typ-II-Pneumozyten, DPPC, Oberflaechenspannung
- CO2-Transport: 70 % Bikarbonat, 23 % Carbamino-Hb, 7 % geloest
- Bohr-Effekt: CO2 hoch / pH tief -- Rechtsverschiebung -- O2-Abgabe steigt

**Typische Fallen:**
- Typ-I (Gasaustausch, 95 %) vs. Typ-II (Surfactant, 5 %)
- Aktive Inspiration vs. passive Exspiration in Ruhe
- Bohr-Effekt (O2-Abgabe) vs. Haldane-Effekt (CO2-Transport)
- Intrapleuraler Druck immer negativ

---

## Zusammenfassung (ultrakompakt)

- **Alveolen**: ~300 Mio., Typ-I (Gasaustausch), Typ-II (Surfactant)
- **Surfactant** (DPPC, ~90 %): Oberflaechenspannung sinkt, Alveolarkollaps verhindert. Mangel bei Fruehgeborenen -- RDS
- **Atemmechanik**: Inspiration aktiv (Diaphragma). Exspiration in Ruhe passiv
- **CO2-Transport**: 70 % Bikarbonat, 23 % Carbamino-Hb, 7 % geloest
- **Atemregulation**: Hauptantrieb CO2/pH (zentral). O2 erst bei pO2 <60 mmHg
- **Bohr-Effekt**: CO2 hoch / pH tief / Temp hoch -- Rechtsverschiebung -- O2-Abgabe steigt`,
      contentExtended: `## Einleitung

**Worum geht es?** Das **Atmungssystem** ermöglicht Gasaustausch (O₂/CO₂) in den Alveolen; Surfactant stabilisiert die Alveolen, die Atemregulation erfolgt primär über CO₂/pH. **Warum für den MedAT relevant?** Surfactant (Typ-II-Pneumozyten, DPPC), CO₂-Transport (Bikarbonat, Haldane-Effekt), Bohr-Effekt und Atemmechanik (aktiv/passiv) werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Wer produziert Surfactant?“; „CO₂-Transport — Anteile?“; „Bohr-Effekt — Rechtsverschiebung bei?“; „Inspiration aktiv oder passiv?“; „Hauptantrieb der Atmung?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Atmungssystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Alveolen**, **Surfactant** (Typ-II-Pneumozyten) und **Blut-Luft-Schranke**
- **Atemmechanik** (Inspiration/Exspiration, Compliance) und **Gasaustausch**
- **CO₂-Transport** (Bikarbonat, Bohr-Effekt) und **Atemregulation** (CO₂/pH, Chemorezeptoren)

---

{{DIAGRAM:atmungssystem}}

## Surfactant und Alveolarstruktur

**Um die Atmung zu verstehen,** beginnen wir mit dem **Gasaustauschort** — den Alveolen — und dem Surfactant. **Gasaustausch findet in den Alveolen statt, nicht in den Bronchien.** Die Bronchien leiten die Luft; der eigentliche O₂/CO₂-Austausch erfolgt in den **Alveolen**. Sauerstoff wird im Blut an **Hämoglobin der Erythrozyten** gebunden; ein Teil des CO₂ wird ebenfalls an Hämoglobin gebunden (als Carbaminohämoglobin). Mit jedem Atemzug wird **nicht** die gesamte Luftmenge erneuert (Totraum, Residualvolumen).

Die ~300 Millionen Alveolen sind die funktionellen Einheiten des Gasaustauschs. Ihre Wand besteht aus zwei Pneumozytentypen:
- **Typ-I-Pneumozyten** (~95 % der Oberfläche): Hauchfein (0,2 µm), ermöglichen den Gasaustausch
- **Typ-II-Pneumozyten** (~5 % der Oberfläche): Kubische Zellen, produzieren **Surfactant** (Dipalmitoylphosphatidylcholin/DPPC, ~90 % Phospholipide)

**Surfactant-Funktion:** Senkt die Oberflächenspannung an der Luft-Flüssigkeits-Grenze. Nach dem **Laplace-Gesetz** (P = 2T/r) würden kleine Alveolen kollabieren, weil höherer Druck als in großen. Surfactant verhindert das durch Spannungsreduktion → Alveolen bleiben offen.

**Klinisch — RDS (Neonatales Atemnotsyndrom):** Frühgeborene (<28 SSW) haben unreife Typ-II-Pneumozyten → Surfactant-Mangel → Atelektase → Hypoxie. Prophylaxe: Betamethason/Dexamethason (Mutter antenatal → Lungenreifung ↑). Therapie: Surfactant-Instillation.

> **Merke:** **Surfactant**: Typ-II-Pneumozyten, DPPC (~90 % Phospholipide) → Oberflächenspannung ↓ → Alveolarkollaps (Atelektase) verhindert. **RDS** bei Frühgeborenen: Surfactant-Mangel → Betamethason antenatal (Prophylaxe).

---

## Atemmechanik, Gasaustausch und Atemregulation

**Bisher haben wir gesehen:** Alveolen und Surfactant. **Damit Luft ein- und ausströmt,** braucht es **Atemmechanik** — und **Atemregulation** hält pO₂/pCO₂ konstant. **Atemmechanik:**
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

{{DIAGRAM:blutkreislauf}}

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Welche Zellen produzieren Surfactant und woraus besteht es? (Typ-II-Pneumozyten, 90 % Phospholipide/DPPC)
- Wie verläuft der CO₂-Transport im Blut? (70 % HCO₃⁻ via Carboanhydrase, 23 % Carbamino-Hb, 7 % gelöst)
- Was bewirkt der Bohr-Effekt im metabolisch aktiven Gewebe? (Rechtsverschiebung → O₂-Abgabe ↑)

**Typische Prüfungsfallen:**
- Typ-I-Pneumozyten (Gasaustausch, 95 % der Fläche) vs. Typ-II-Pneumozyten (Surfactant-Produktion, 5 % der Fläche)
- Aktive Inspiration (Muskelarbeit) vs. passive Exspiration in Ruhe (elastische Rückstellung)
- Bohr-Effekt (O₂-Abgabe im Gewebe, Hb-Kurve) vs. Haldane-Effekt (CO₂-Transport, Desoxy-Hb bindet mehr CO₂)
- Intrapleuraler Druck immer negativ (~-5 mmHg) vs. intrapulmonaler Druck schwankt um 0
- COPD (irreversible Obstruktion, FEV1/FVC < 70 %) vs. Asthma (reversible Obstruktion)
- Alveolen: ~300 Mio., Oberfläche 80--140 m², Blut-Luft-Schranke ~0,5 µm
- AZV ~500 mL, TLC ~5.800 mL; pO₂ alveolär ~100 mmHg, venös ~40 mmHg
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

**Worum geht es?** Das **Verdauungssystem** zerlegt Nahrung (Magen, Dünndarm, Pankreas, Leber/Galle) und resorbiert Nährstoffe; Bilirubin wird in der Leber konjugiert und über Galle ausgeschieden. **Warum für den MedAT relevant?** Magenzelltypen (Beleg-/Hauptzellen), Trypsin-Aktivierung (Enterokinase), Fettweg (Chylomikronen → Lymphe), Bilirubin-Stoffwechsel und Ikterus-Typen werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Belegzellen vs. Hauptzellen — was sezernieren sie?“; „Trypsinogen → Trypsin — welches Enzym?“; „Fette — Pfortader oder Lymphe?“; „Unkonjugiert vs. konjugiertes Bilirubin?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Verdauungssystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Magen** (Zelltypen, HCl, Pepsin, Regulation) und **Dünndarm** (Resorptionsfläche, Enzyme)
- **Pankreas** (Trypsin-Kaskade, Lipase, Amylase) und **Leber/Galle** (Bilirubin, Gallensäuren)
- **Resorption** (Glukose, Fette, Proteine) und **Bilirubin-Stoffwechsel**

---

{{DIAGRAM:verdauungssystem}}

## Magen — Sekretion und Regulation

**Um die Verdauung einzuordnen,** beginnen wir mit dem **Magen** — HCl, Pepsinogen und Regulation sind prüfungsrelevant. Die Magenschleimhaut enthält fünf spezialisierte Zelltypen mit klar definierten Aufgaben:

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

---

## Dünndarm-Resorption und Leber-Funktionen

**Bisher haben wir gesehen:** Magensekretion und Trypsin-Kaskade. **Im Dünndarm** werden Nährstoffe **resorbiert** — Transporter und Bilirubin-Stoffwechsel sind prüfungsrelevant. **Resorptionsfläche Dünndarm** (~200 m²): Kerckring-Falten × Zotten × Mikrovilli (Bürstensaum). Spezialisierte Transporter:

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

{{DIAGRAM:cell-membrane}}

---

## Dickdarm

**Bisher haben wir gesehen:** Dünndarm-Resorption und Bilirubin. **Der letzte Abschnitt** des Darms ist der **Dickdarm** — Wasserrückresorption und Mikrobiom. Der **Dickdarm** (Colon) ist ca. 1,5 m lang und besteht aus Caecum, Colon ascendens/transversum/descendens und Sigma. Hauptaufgabe: **Wasserrückresorption** (~1–1,5 L täglich) und Elektrolytabsorption. Die **Darmflora** (Mikrobiom, >1000 Spezies) fermentiert unverdauliche Ballaststoffe zu kurzkettigen Fettsäuren (Butyrat, Propionat) — wichtige Energiequelle der Colonozyten. Die Peristaltik im Dickdarm ist träger als im Dünndarm (Haustren-Segmentierung).

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Welche Zelltypen finden sich in der Magenschleimhaut und welche Sekrete produzieren sie?
- Wie werden Pankreasenzyme aktiviert? (Trypsinogen → Trypsin via Enterokinase, dann Kaskade)
- Auf welchem Weg gelangen resorbierte Fette ins Blut? (Mizellen → Chylomikronen → Lymphe → Blut)

**Typische Prüfungsfallen:**
- Belegzellen (HCl + IF) vs. Hauptzellen (Pepsinogen) -- häufigster Verwechslungsfehler
- Fett-Transport über Lymphe (Chylomikronen) vs. Glukose/Aminosäuren über Pfortader
- Unkonjugiertes Bilirubin (lipophil, albumin-gebunden) vs. konjugiertes Bilirubin (wasserlöslich, Galle)
- Prähepatischer Ikterus (Hämolyse, unkonj. ↑) vs. posthepatischer Ikterus (Cholestase, konj. ↑, heller Stuhl)
- SGLT2 (Niere, Glukose-Rückresorption) vs. SGLT1 (Dünndarm, Glukose-Aufnahme)
- Galleproduktion ~500--1.000 mL/Tag; enterohepatischer Kreislauf recycelt ~95 % der Gallensalze
- Dünndarm-Oberfläche ~200 m²; Nierenschwelle Glukose ~180 mg/dL

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

**Worum geht es?** Die **Niere** filtert (GFR ~180 L/Tag), resorbiert und sekretiert; sie reguliert Volumen, Elektrolyte und pH und produziert EPO und Renin. **Harntrakt:** Nieren → Harnleiter (rechts + links) → Harnblase → Harnröhre (nur eine). **Warum für den MedAT relevant?** GFR, Tubulusabschnitte (proximal, Henle, distaler Tubulus, Sammelrohr), ADH/Aldosteron und RAAS werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Wo wird Glukose rückresorbiert (SGLT2)?“; „ADH — Wirkung auf Sammelrohr?“; „RAAS — Auslöser und Effekt?“; „Gegenstromprinzip — wo?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Harnsystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Nephron** (Glomerulus, Tubuli, GFR ~180 L/Tag) und **Gegenstromprinzip** (Henle-Schleife)
- **Rückresorption** pro Segment (proximal 65 %, SGLT2, Henle, Sammelrohr ADH/AQP2)
- **ADH** (V₂, Aquaporin-2) und **RAAS** (Renin → Ang II → Aldosteron, ACE-Hemmer)

---

{{DIAGRAM:nephron}}

## Nephron-Segmente und Rückresorption

**Um die Niere zu verstehen,** betrachten wir das **Nephron** — Filtration und segmentale Rückresorption. Das Nephron filtert täglich ~180 L Primärharn (GFR ~120 mL/min). Über 99 % werden rückresorbiert — nur ~1–2 L Endurin. Jedes Segment hat spezifische Transporter:

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

---

## ADH, Aldosteron und RAAS-Regulation

**Bisher haben wir gesehen:** Nephron-Segmente und Gegenstromprinzip. **Die Feinregulation** von Harnkonzentration und Blutdruck erfolgt über **ADH** und **RAAS**. **ADH (Vasopressin):** Synthetisiert in Hypothalamus, gespeichert in Neurohypophyse. Reiz: Osmolarität ↑ (>285 mOsm/L) oder Volumen ↓. Wirkung: V₂-Rezeptor (Sammelrohr) → cAMP → **Aquaporin-2** in apikale Membran eingebaut → H₂O-Resorption ↑ → verdünnter Urin → konzentrierter Urin (bis 1200 mOsm/L). **Diabetes insipidus**: ADH-Mangel (centralis) oder -Resistenz (renalis) → bis 15 L/Tag hypotoner Urin. Therapie centralis: Desmopressin (ADH-Analogon).

**Aldosteron** (Zona glomerulosa, NNR): Reiz: Angiotensin II, Hyperkaliämie. Wirkung: **ENaC** (Na⁺-Einstrom) + **ROMK** (K⁺-Ausschüttung) + Na⁺/K⁺-ATPase ↑ → Na⁺/H₂O-Retention, K⁺ und H⁺ -Ausscheidung.

**RAAS-Kaskade:**
1. Blutdruck ↓ → juxtaglomeruläre Zellen → **Renin** ↑
2. Renin spaltet Angiotensinogen → **Angiotensin I**
3. ACE (Angiotensin-Converting Enzyme, **Lunge** + Endothel) → **Angiotensin II**
4. Ang. II → a) direkte **Vasokonstriktion** (AT₁-Rezeptor) b) **Aldosteron**-Freisetzung (NNR) c) **ADH**-Freisetzung d) Durst

**Therapieangriffspunkte:** ACE-Hemmer (Bradykinin ↑ → Husten-NW!) | AT₁-Blocker (kein Bradykinin) | Spironolacton (Aldosteron-Antagonist) | Aliskiren (Renin-Inhibitor)

> **Merke:** **RAAS**: Renin (Niere, Druck ↓) → Ang. I → ACE (Lunge) → **Ang. II** → Vasokonstriktion + Aldosteron (Na⁺/H₂O ↑) + ADH ↑ → Blutdruck ↑. **ACE-Hemmer**: Bradykinin ↑ → Husten (häufigste NW).

{{DIAGRAM:blutkreislauf}}

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Wie funktioniert das Gegenstromprinzip in der Henle-Schleife?
- Welche Rolle spielt ADH bei der Harnkonzentrierung? (V₂-Rezeptor → AQP2-Insertion)
- Wie ist die RAAS-Kaskade aufgebaut und wo greifen Medikamente an?

**Typische Prüfungsfallen:**
- Proximaler Tubulus (65 % Rückresorption, SGLT2) vs. Sammelrohr (ADH-abhängige Feinregulation, AQP2)
- Aquaporin-1 (konstitutiv, proximal + absteigend) vs. Aquaporin-2 (ADH-reguliert, Sammelrohr)
- ACE-Hemmer (Bradykinin ↑ → Husten als NW) vs. AT₁-Blocker (kein Bradykinin → kein Husten)
- Diabetes insipidus zentralis (ADH-Mangel, Desmopressin wirkt) vs. nephrogen (ADH-Resistenz, Desmopressin unwirksam)
- Nephritisches Syndrom (Hämaturie, Proteinurie < 3,5 g/d) vs. nephrotisches Syndrom (Proteinurie > 3,5 g/d, Ödeme)
- GFR ~120 mL/min = ~180 L/Tag → ~1,5 L Endharn (99 % Rückresorption); Gradient 300--1.200 mOsm/L
- Kreatinin = GFR-Marker (filtriert, nicht resorbiert); CKD V: GFR < 15 mL/min → Dialyse

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

**Worum geht es?** Das **Skelett** (206 Knochen) wird ständig umgebaut; Osteoblasten (Aufbau) und Osteoklasten (Abbau) stehen im Gleichgewicht (RANKL/OPG). **Warum für den MedAT relevant?** Osteoblasten vs. Osteoklasten (ALP vs. TRAP), RANKL/OPG, Knorpeltypen (hyalin/Faser/elastisch), Ca²⁺-Regulation (PTH, Calcitonin, Vitamin D) und Osteoporose werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Osteoblast vs. Osteoklast — wer baut auf?“; „RANKL — aktiviert oder hemmt Osteoklasten?“; „Hyaliner vs. Faserknorpel — Kollagen?“; „PTH — Ca²⁺ hoch oder runter?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Skelettsystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Knochenumbau** (Osteoblasten, Osteoklasten, RANKL/OPG) und **Osteoporose** (Östrogenmangel)
- **Knorpeltypen** (hyalin, Faser, elastisch) und **Gelenktypen** (Diarthrose, Kugel-/Scharniergelenk)
- **Ca²⁺-Regulation** (PTH, Vitamin D, Calcitonin) und **Ossifikation** (enchondral vs. desmal)

---

{{DIAGRAM:sarkomer}}

## Knochen — Umbau durch Osteoblasten und Osteoklasten

**Um den Bewegungsapparat einzuordnen,** beginnen wir mit **Knochenumbau** — Osteoblasten vs. Osteoklasten und RANKL/OPG. Das Skelett ist kein statisches Gerüst — ~10 % der Knochenmasse werden jährlich umgebaut. Drei Zelltypen steuern diesen Prozess:

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

**Bisher haben wir gesehen:** Knochenumbau und RANKL/OPG. **Neben Knochen** sind **Knorpel**, **Gelenke** und **Kalziumregulation** prüfungsrelevant. **Knorpeltypen** (alle avaskulär → schlechte Heilung!):

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

{{DIAGRAM:animal-cell}}

## Ossifikation — Knochenbildung

**Bisher haben wir gesehen:** Knochenumbau und Knorpeltypen. **Wie Knochen entstehen,** beschreiben **enchondrale** und **desmale Ossifikation**. Knochen entstehen durch zwei Wege:

**Enchondrale Ossifikation** (indirekter Weg):
Ein Knorpelmodell (Chondrozyten) wird zunächst gebildet und dann schrittweise durch Knochen ersetzt. Ablauf: Chondrozyten hypertrophieren → Knorpelmatrix kalzifiziert → Osteoblasten wandern ein → Knochen ersetzt Knorpel. Betrifft: Röhrenknochen (Femur, Tibia, Humerus), Rippen, Wirbelkörper.

**Desmale Ossifikation** (direkter Weg):
Knochen entsteht direkt aus mesenchymalen Stammzellen ohne Knorpelvorlage. Betrifft: Schädelknochen (Frontal-, Parietalknochen), Schlüsselbein, Teile des Unterkiefers.

**Zelltypen der Knochenentwicklung:**
- **Osteoblasten**: knochenbildende Zellen, sezernieren Kollagen I + Osteoid, werden zu Osteozyten eingemauert
- **Osteozyten**: reife Knochenzellen im Lakunen-Kanälchen-System, mechanosensitiv
- **Osteoklasten**: knochenabbauende mehrkernige Riesenzellen (RANKL/OPG-System)

**Klinisch:** Rachitis (Vitamin-D-Mangel → gestörte Mineralisation), Osteogenesis imperfecta (Kollagen-I-Defekt).

> **Merke:** Enchondral = Knorpel zuerst (Extremitäten). Desmal = direkt (Schädel). Beide Wege produzieren identisch strukturierten Lamellenknochen — nur der Weg ist verschieden.

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was ist der Unterschied zwischen Osteoblasten und Osteoklasten? (Aufbau vs. Abbau; ALP vs. TRAP als Marker)
- Wie reguliert das RANKL/OPG-System den Knochenumbau?
- Welche Knorpeltypen gibt es und wo kommen sie vor?

**Typische Prüfungsfallen:**
- Osteoblasten (einkernig, Aufbau, ALP ↑) vs. Osteoklasten (mehrkernig, Abbau, TRAP ↑)
- Hyaliner Knorpel (Kollagen II, Gelenke) vs. Faserknorpel (Kollagen I, Bandscheiben)
- Arthrose (degenerativ, Verschleiß, kein Entzündungsmarker) vs. Arthritis (entzündlich, RA: Anti-CCP, Morgensteifigkeit > 1 h)
- Sehnen (Muskel-Knochen-Verbindung) vs. Bänder (Knochen-Knochen-Verbindung)
- Rachitis/Osteomalazie (Vitamin-D-Mangel, Mineralisierung ↓) vs. Osteoporose (Knochenmasse ↓, T-Score ≤ -2,5)
- 206 Knochen; ~10 %/Jahr erneuert; Matrix: 30 % Kollagen I + 70 % Hydroxyapatit
- Wirbelsäule: 7 HWK + 12 BWK + 5 LWK + 5 SWK + 4 Steißbeinwirbel

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

**Worum geht es?** **Fortpflanzung** erfordert Gameten (Spermatogenese: 4 Spermien; Oogenese: 1 Eizelle + 3 Polkörperchen), gesteuert durch FSH/LH; Menstruationszyklus mit LH-Peak und hCG bei Schwangerschaft. **Warum für den MedAT relevant?** Sertoli vs. Leydig, Spermatogenese vs. Oogenese (Ergebnis), LH-Peak (positive Rückkopplung), hCG-Funktion und Meiose-Arrests werden regelmäßig geprüft. **Welche Fragen werden beantwortet?** „Sertoli vs. Leydig — wer produziert Testosteron?“; „4 Spermien vs. 1 Eizelle — Meiose-Ergebnis?“; „LH-Peak — was löst ihn aus?“; „hCG — was erhält es?“ Mit diesem Kapitel sind alle typischen BMS-Fragen zum Fortpflanzungssystem abgedeckt.

**In diesem Kapitel lernst du:**
- **Spermatogenese** (4 Spermien, Sertoli/Leydig) vs. **Oogenese** (1 Eizelle + 3 Polkörperchen, Meiose-Arrests)
- **Menstruationszyklus** (Follikelphase, LH-Peak, Lutealphase) und **Östrogen/Progesteron**
- **Befruchtung** (Akrosom-Reaktion, Kortikalreaktion, Polyspermie-Block) und **hCG**

---

{{DIAGRAM:menstrual-cycle}}

## Spermatogenese und Oogenese — Gametogenese im Vergleich

**Um die Reproduktion zu verstehen,** vergleichen wir **Spermatogenese** und **Oogenese** — beide nutzen Meiose, das Ergebnis unterscheidet sich. Beide Keimzellentwicklungen nutzen die Meiose, unterscheiden sich aber fundamental in Ergebnis und Zeitplanung:

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

{{DIAGRAM:meiosis}}

## Menstruationszyklus und Hormonregulation

**Bisher haben wir gesehen:** Gametogenese und Befruchtung. **Der weibliche Zyklus** wird durch **FSH, LH, Östrogen und Progesteron** gesteuert — negative und positive Rückkopplung. Der 28-tägige Menstruationszyklus ist ein Musterbeispiel für negative und positive Rückkopplung:

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

{{DIAGRAM:hormonsystem}}

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Was ist der Unterschied zwischen Sertoli- und Leydig-Zellen?
- Wie unterscheiden sich Spermatogenese und Oogenese im Ergebnis? (4 Spermien vs. 1 Eizelle + 3 Polkörperchen)
- Wie kommt der LH-Peak zustande? (Hohes Östrogen > 200 pg/mL > 2 Tage → positive Rückkopplung)
- Wo werden Spermien gespeichert? → Nebenhoden (nicht Samenkanälchen, Samenbläschen oder Prostata)

**Typische Prüfungsfallen:**
- Sertoli-Zellen (FSH-reguliert, Inhibin) vs. Leydig-Zellen (LH-reguliert, Testosteron) -- häufigster Prüfungsfehler
- Prophase-I-Arrest (primäre Oozyte, pränatal bis Pubertät) vs. Metaphase-II-Arrest (sekundäre Oozyte, bis Befruchtung)
- Positive Rückkopplung (hohes Östrogen → LH-Peak) vs. negative Rückkopplung (niedriges/mittleres Östrogen → FSH/LH ↓)
- hCG (Schwangerschaftserhaltung des Corpus luteum) vs. LH (Corpus-luteum-Stimulation im normalen Zyklus)
- Spermatogenese (kontinuierlich ab Pubertät, 4 Gameten, ~74 Tage) vs. Oogenese (zyklisch, 1 Gamet, endlicher Vorrat)
- LH-Peak Tag 14; Ovulation 24--36 h danach; Basaltemperatur +0,5 °C (Progesteron)
- hCG ab Tag 6--7, verdoppelt alle 48 h; PCOS 5--15 % der Frauen, LH/FSH > 2

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
