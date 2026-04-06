import type { Unterkapitel } from "../../types";

/**
 * Archived UK from kap6-chemische-bindung.ts
 * ch-6-04 "Chemische Bindungen in biologischen Molekülen" — NOT explicitly in MedAT scope
 */
export const archivedChemBindungUKs: Unterkapitel[] = [
  {
    id: "ch-6-04",
    title: "Chemische Bindungen in biologischen Molekülen",
    imageUrl: "/images/bms/ch-peptidbindung.webp",
    imageCaption: "Abb.: Peptidbindung zwischen zwei Aminosäuren (OpenStax, CC BY 4.0)",
    stichworte: [
      "Glycosidische Bindung",
      "Peptidbindung",
      "Phosphodiesterbindung",
      "Disulfidbrücke",
      "Hydrophober Effekt",
      "Proteinstruktur",
      "Denaturierung",
      "Lipid-Bilayer",
      "Enzymkatalyse",
      "Lipinski-Regel",
      "Salzbrücke",
      "Trans-Fettsäuren",
    ],
    content: `## Bindungstypen in Biomolekülen — Überblick

Proteine, Kohlenhydrate, Lipide und Nukleinsäuren bestehen aus denselben Atomsorten (C, H, O, N, S, P), unterscheiden sich aber grundlegend in ihren **Bindungsmustern**. Sechs kovalente Bindungstypen dominieren die Biochemie: Peptidbindung (Proteine), glykosidische Bindung (Kohlenhydrate), Esterbindung (Fette, DNA/RNA), Disulfidbrücke (Proteine), Phosphodiesterbindung (Nukleinsäuren) und Amidbindung (verschiedene Biomoleküle). Jede dieser Bindungen entsteht durch eine **Kondensationsreaktion** (Abspaltung von H₂O) und wird durch **Hydrolyse** (Anlagerung von H₂O) wieder gespalten — ein universelles Prinzip der Biochemie.

Parallel dazu formen **nichtkovalente Wechselwirkungen** (H-Brücken, hydrophober Effekt, van-der-Waals-Kräfte, ionische Wechselwirkungen) die dreidimensionale Gestalt und damit die Funktion jedes Biomoleküls. Das Zusammenspiel beider Klassen — kovalentes Gerüst plus nichtkovalente Feinstruktur — ist der Schlüssel zum Verständnis biologischer Moleküle.

**Der hydrophobe Effekt** ist die treibende Kraft der Proteinfaltung und Membranbildung: Unpolare Seitenketten werden ins Innere des Proteins gedrängt — nicht weil sie sich anziehen, sondern weil das Wasser sie „ausschließt". Die geordnete Wasserhülle (Hydratationsschale) um unpolare Gruppen hat niedrige Entropie; beim Zusammenlagern der unpolaren Gruppen wird dieses geordnete Wasser freigesetzt → **Entropiegewinn** → spontaner Prozess (ΔG < 0). Derselbe Effekt treibt die Selbstorganisation von Phospholipiden zur Doppelschicht.

**Lipinski's Rule of Five** beschreibt Faustregeln für orale Bioverfügbarkeit von Arzneistoffen: MW ≤ 500 Da, logP ≤ 5, ≤ 5 H-Brücken-Donoren (NH, OH), ≤ 10 H-Brücken-Akzeptoren (N, O). Zu viele polare Gruppen → schlechte Membranpermeabilität; zu unpolar → schlechte Wasserlöslichkeit. Der optimale Arzneistoff balanciert Lipophilie und Hydrophilie.

> **Merke:** Alle biopolymeren Bindungen (Peptid-, Glykosid-, Ester-, Phosphodiester-) entstehen durch Kondensation (−H₂O) und werden durch Hydrolyse (+H₂O) gespalten. Kovalente Bindungen = Gerüst; nichtkovalente Wechselwirkungen = Feineinstellung.

---

{{IMAGE}}

## 1. Peptidbindung — das Rückgrat der Proteine

### Entstehung durch Kondensation

Die Peptidbindung (–CO–NH–) verknüpft die α-Carboxylgruppe (–COOH) einer Aminosäure mit der α-Aminogruppe (–NH₂) der nächsten Aminosäure. Dabei wird ein Molekül Wasser abgespalten (Kondensationsreaktion). In der Zelle katalysieren **Ribosomen** diese Reaktion unter Energieverbrauch (GTP-Hydrolyse), wobei die Aminosäuren als Aminoacyl-tRNAs aktiviert angeliefert werden. Die Umkehrreaktion — die hydrolytische Spaltung der Peptidbindung — wird durch **Proteasen** (proteolytische Enzyme) katalysiert. Trypsin etwa spaltet spezifisch nach basischen Aminosäuren (Lysin, Arginin), Pepsin nach hydrophoben Resten — diese Spezifität beruht auf der Komplementarität des aktiven Zentrums zur jeweiligen Seitenkette.

### Partielle Doppelbindung und Resonanz

Die Peptidbindung ist keine gewöhnliche Einfachbindung. Das freie Elektronenpaar des Stickstoffs delokalisiert in das π-System der benachbarten Carbonylgruppe (C=O). Es entstehen zwei Resonanzstrukturen:

- **Struktur 1:** C=O und C–N (Einfachbindung am Stickstoff)
- **Struktur 2:** C–O⁻ und C=N⁺ (Doppelbindung am Stickstoff)

Die reale Bindung liegt als Hybrid zwischen beiden Grenzstrukturen: Die C–N-Bindung hat eine **Bindungsordnung von etwa 1,4** (kürzer als eine reine Einfachbindung mit 147 pm, länger als eine Doppelbindung mit 127 pm — gemessen: 133 pm). Gleichzeitig verlängert sich die C=O-Bindung leicht. Diese Resonanz hat dramatische Konsequenzen für die Proteinstruktur.

### Planarität und eingeschränkte Rotation

Weil die C–N-Bindung partiellen Doppelbindungscharakter besitzt, ist die Rotation um diese Bindung **stark eingeschränkt** (Rotationsbarriere ca. 80 kJ/mol). Alle sechs Atome der Peptideinheit (Cα₁, C, O, N, H, Cα₂) liegen in einer **Ebene** — man spricht von der Peptidebene. Die Peptidbindung liegt dabei fast ausschließlich in der **trans-Konfiguration** vor (>99,5 % aller Peptidbindungen): Die beiden Cα-Atome stehen auf gegenüberliegenden Seiten der C–N-Bindung. Die cis-Konfiguration ist energetisch ungünstiger wegen sterischer Abstoßung der Seitenketten — Ausnahme: Bindungen vor **Prolin**, wo der Energieunterschied zwischen cis und trans geringer ist (ca. 10 % cis).

### φ/ψ-Winkel und Ramachandran-Diagramm

Die Rotationsfreiheit im Proteinrückgrat beschränkt sich auf zwei Winkel um jedes Cα-Atom:

- **φ (Phi):** Drehung um die N–Cα-Bindung
- **ψ (Psi):** Drehung um die Cα–C-Bindung

Das **Ramachandran-Diagramm** (nach G. N. Ramachandran, 1963) trägt φ gegen ψ auf und zeigt, welche Winkelkombinationen sterisch erlaubt sind. Nur etwa **30 %** der theoretisch möglichen φ/ψ-Kombinationen sind tatsächlich zugänglich — der Rest ist durch sterische Kollisionen der Atome im Rückgrat und der Seitenketten verboten. Die erlaubten Bereiche entsprechen genau den beobachteten Sekundärstrukturen:

- **α-Helix:** φ ≈ −57°, ψ ≈ −47° (großer, zusammenhängender erlaubter Bereich)
- **β-Faltblatt:** φ ≈ −120°, ψ ≈ +120° (zweiter großer erlaubter Bereich)
- **Glycin** hat keine Seitenkette (R = H) und zeigt daher einen deutlich größeren erlaubten Bereich — es ist konformationell flexibler als alle anderen Aminosäuren.

> **Merke:** Die Peptidbindung ist planar (partieller Doppelbindungscharakter durch Resonanz), fast immer trans-konfiguriert, und die Proteinrückgrat-Konformation wird allein durch die φ/ψ-Winkel bestimmt. Das Ramachandran-Diagramm zeigt die erlaubten Bereiche — sie entsprechen α-Helix und β-Faltblatt.

---

## 2. Sekundärstruktur — α-Helix und β-Faltblatt

### α-Helix

Die α-Helix ist die häufigste helikale Sekundärstruktur in Proteinen. Ihre Stabilisierung beruht auf einem regelmäßigen Muster intramolekularer **Wasserstoffbrücken**: Die Carbonylgruppe (C=O) der Aminosäure an Position **i** bildet eine H-Brücke mit der Aminogruppe (N–H) der Aminosäure an Position **i+4**. Pro Windung der Helix umfasst die Struktur **3,6 Aminosäuren**, die Ganghöhe (Steigung pro Windung) beträgt **5,4 Å** (0,54 nm). Die Seitenketten ragen nach außen, das Rückgrat bildet den inneren Kern der Helix.

Typische α-Helix-Brecher:
- **Prolin:** Sein Pyrrolidinring fixiert den φ-Winkel bei ca. −60° und eliminiert das N–H (kein H-Brücken-Donor) — Prolin unterbricht die Helix oder erzeugt einen Knick.
- **Glycin:** Zu flexibel (kein sterischer Anspruch), destabilisiert die rigide Helixgeometrie.
- **Geladene Cluster:** Mehrere gleichnamig geladene Aminosäuren hintereinander (z. B. Glu-Glu-Glu) stoßen sich ab und destabilisieren die Helix.

Klinisch sind α-Helices allgegenwärtig: Die sieben Transmembranhelices von **G-Protein-gekoppelten Rezeptoren** (GPCRs) durchspannen die Lipidmembran; **Keratin** (Haare, Nägel) besteht aus einer Coiled-Coil-Struktur zweier umeinander gewundener α-Helices.

### β-Faltblatt

Im β-Faltblatt liegen die Polypeptidketten in gestreckter Konformation nahezu nebeneinander. H-Brücken bilden sich hier **zwischen benachbarten Strängen** (nicht innerhalb eines Strangs wie bei der Helix):

- **Antiparalleles β-Faltblatt:** Benachbarte Stränge laufen in entgegengesetzter Richtung (N→C neben C→N). Die H-Brücken stehen senkrecht zu den Strängen — optimal linear, daher besonders stabil.
- **Paralleles β-Faltblatt:** Benachbarte Stränge laufen in gleicher Richtung. Die H-Brücken stehen leicht schräg — etwas schwächer als im antiparallelen Fall.

β-Faltblätter sind typisch für **Seidenfibroin** (Spinnenseide: antiparallel, hohe Zugfestigkeit) und **Immunglobuline** (Antikörper: Immunglobulin-Faltung mit antiparallelen β-Faltblättern).

> **Merke:** α-Helix: H-Brücken i→i+4 (innerhalb eines Strangs), 3,6 AS/Windung, Prolin als Helixbrecher. β-Faltblatt: H-Brücken zwischen benachbarten Strängen, antiparallel stabiler als parallel.

---

## 3. Disulfidbindung — kovalente Quervernetzung

### Entstehung durch Oxidation

Die Disulfidbindung (Disulfidbrücke, –S–S–) entsteht durch **oxidative Verknüpfung** zweier Cystein-Seitenketten. Jedes Cystein trägt eine Thiolgruppe (Sulfhydrylgruppe, –SH). Wenn zwei Thiolgruppen oxidiert werden, verbinden sie sich unter Abgabe von zwei Wasserstoffatomen (bzw. zwei Elektronen + zwei Protonen) zu einer kovalenten S–S-Bindung:

**R–SH + HS–R' → R–S–S–R' + 2 [H]**

Das Produkt — zwei über eine Disulfidbrücke verknüpfte Cysteine — heißt **Cystin**. Die Rückreaktion (Reduktion, Spaltung der S–S-Bindung) erfolgt durch Reduktionsmittel wie **Glutathion** (GSH), **Thioredoxin**, oder im Labor durch **β-Mercaptoethanol** und **DTT** (Dithiothreitol).

### Biologische Bedeutung

Disulfidbrücken stabilisieren vor allem **extrazelluläre Proteine** und Proteine im **endoplasmatischen Retikulum** (ER), wo ein oxidatives Milieu herrscht. Im reduzierenden Zytoplasma (hohe Glutathion-Konzentration) bleiben Cysteine dagegen überwiegend in der reduzierten –SH-Form.

Wichtige Beispiele:
- **Insulin:** Zwei Polypeptidketten (A-Kette: 21 AS, B-Kette: 30 AS) werden durch **zwei Interchain-Disulfidbrücken** (A7–B7, A20–B19) zusammengehalten; eine dritte Disulfidbrücke liegt **intramolekular** innerhalb der A-Kette (A6–A11). Ohne diese Brücken zerfällt das aktive Hormon.
- **Antikörper (Immunglobuline):** Schwere und leichte Ketten werden durch Disulfidbrücken verbunden; die Scharnierregion (Hinge Region) enthält zusätzliche S–S-Brücken, die für die Flexibilität des Y-förmigen Moleküls sorgen.
- **Keratin:** α-helikale Polypeptide werden durch zahlreiche Disulfidbrücken quervernetzt — je mehr S–S-Brücken, desto härter das Keratin (Fingernägel > Haare > Haut). Dauerwellen funktionieren durch Reduktion der S–S-Brücken (Thiol-Lösung), mechanische Umformung und anschließende Reoxidation (Fixierlösung mit H₂O₂).

### Klinischer Bezug: N-Acetylcystein (NAC)

**N-Acetylcystein** (ACC, Fluimucil) wird als Mukolytikum (schleimlösendes Mittel) eingesetzt. Es wirkt, indem seine freie Thiolgruppe (–SH) die **Disulfidbrücken im Mucin** (Glykoprotein des Bronchialschleims) reduktiv spaltet. Dadurch werden die hochmolekularen Mucin-Polymere in kleinere Fragmente zerlegt — der Schleim wird dünnflüssiger und kann leichter abgehustet werden. Zusätzlich dient NAC als Vorläufer von Glutathion und wird bei Paracetamol-Vergiftung als Antidot eingesetzt.

> **Merke:** Disulfidbrücken (Cys–S–S–Cys) sind die einzigen kovalenten Quervernetzungen in der Proteinstruktur (neben der Rückgrat-Peptidbindung). Sie stabilisieren extrazelluläre Proteine (Insulin, Antikörper, Keratin) und werden durch Reduktionsmittel gespalten (NAC, DTT, β-Mercaptoethanol).

---

## 4. Glykosidische Bindung — Verknüpfung von Zuckern

### α- und β-Anomere

Monosaccharide wie Glucose liegen in wässriger Lösung überwiegend in **Ringform** vor (Pyranoseform für 6-Ring, Furanoseform für 5-Ring). Bei der Ringbildung entsteht am **anomeren Kohlenstoff** (C1 bei Aldosen, C2 bei Ketosen) ein neues Stereozentrum mit zwei möglichen Konfigurationen:

- **α-Anomer:** Die OH-Gruppe am anomeren C steht **axial** (in der Haworth-Projektion: nach unten, auf der gleichen Seite wie der Ringschluss-Sauerstoff bei D-Zuckern)
- **β-Anomer:** Die OH-Gruppe am anomeren C steht **äquatorial** (in der Haworth-Projektion: nach oben)

In Lösung stellt sich ein **Gleichgewicht** zwischen α- und β-Form ein (Mutarotation): Bei Glucose ca. 36 % α und 64 % β (die äquatoriale β-Form ist thermodynamisch stabiler). Entscheidend: Beim Knüpfen einer glykosidischen Bindung wird die Konfiguration am anomeren C **fixiert** — es entsteht entweder eine α- oder β-glykosidische Bindung, und die biologischen Konsequenzen sind dramatisch unterschiedlich.

### α-glykosidische Bindungen: Stärke und Glykogen

Die **α-1,4-glykosidische Bindung** verknüpft das C1 des einen Glucosemoleküls (in α-Konfiguration) mit dem C4 des nächsten unter Wasserabspaltung. Durch den α-Bindungswinkel entsteht eine **gewundene, helikale Struktur**, die gut wasserlöslich und für Enzyme leicht zugänglich ist.

- **Amylose** (unverzweigt, α-1,4): spiralförmige Helix, bildet mit Iod den charakteristischen blauen Iod-Stärke-Komplex
- **Amylopektin** (verzweigt, α-1,4 + α-1,6 alle 24–30 Einheiten): Pflanzlicher Energiespeicher
- **Glykogen** (stark verzweigt, α-1,4 + α-1,6 alle 8–12 Einheiten): Tierischer Energiespeicher in Leber und Muskel. Die starke Verzweigung erhöht die Zahl der nicht-reduzierenden Enden und ermöglicht **schnelle Mobilisierung** durch gleichzeitigen Angriff vieler Glykogen-Phosphorylase-Moleküle.

### β-glykosidische Bindungen: Cellulose und Lactose

Die **β-1,4-glykosidische Bindung** erzeugt eine **gestreckte, lineare Kettenstruktur**. Benachbarte Glucoseeinheiten sind um 180° gegeneinander gedreht. Zwischen den Ketten bilden sich starke **inter- und intramolekulare H-Brücken** → Mikrofibrillen → hohe mechanische Festigkeit.

**Cellulose** (β-1,4-verknüpfte Glucose) ist das häufigste organische Molekül der Erde. Menschen können Cellulose **nicht** verdauen, weil unsere Verdauungsenzyme (α-Amylase, Maltase) spezifisch für α-glykosidische Bindungen sind — wir besitzen keine **Cellulase** (β-Glucosidase). Wiederkäuer umgehen dieses Problem durch symbiotische Mikroorganismen im Pansen, die Cellulasen produzieren.

**Lactose** (Milchzucker) ist ein Disaccharid aus **β-1,4-verknüpfter Galactose und Glucose**. Die Spaltung erfolgt durch das Enzym **β-Galactosidase** (Lactase) im Bürstensaum des Dünndarms.

**Saccharose** (Haushaltszucker) besteht aus Glucose (α-1) und Fructose (β-2) — hier sind beide anomeren C-Atome an der Bindung beteiligt (α-1,β-2-glykosidisch), weshalb Saccharose kein reduzierender Zucker ist (kein freies anomeres C für die Fehling-Reaktion).

| Disaccharid | Bausteine | Bindung | Enzym | Reduzierend? |
|---|---|---|---|---|
| Maltose | 2× Glucose | α-1,4 | Maltase | Ja |
| Lactose | Galactose + Glucose | β-1,4 | β-Galactosidase (Lactase) | Ja |
| Saccharose | Glucose + Fructose | α-1,β-2 | Saccharase (Invertase) | Nein |
| Cellobiose | 2× Glucose | β-1,4 | Cellulase | Ja |

### Klinischer Bezug: Laktoseintoleranz

Bei **Laktoseintoleranz** ist die Expression der β-Galactosidase (Lactase) im Erwachsenenalter vermindert oder fehlt (primärer Lactasemangel, betrifft ca. 75 % der Weltbevölkerung — in Mitteleuropa ca. 15–20 %). Unverdaute Lactose gelangt in den Dickdarm, wo Darmbakterien sie fermentieren: es entstehen kurzkettige Fettsäuren, CO₂ und H₂ → Blähungen, Bauchkrämpfe, osmotische Diarrhoe. Der **H₂-Atemtest** nutzt das bakteriell produzierte H₂ zur Diagnostik.

> **Merke:** α-glykosidische Bindung → gewundene Struktur → verdaulich (Stärke, Glykogen, Maltose). β-glykosidische Bindung → gestreckte Struktur → unverdaulich für den Menschen (Cellulose) oder nur mit spezifischem Enzym spaltbar (Lactose → Lactase). Die Stereochemie am anomeren C1 entscheidet über Verdaulichkeit!

---

## 5. Esterbindung — Fette, Phospholipide und Nukleinsäuren

### Triglyceride (Fette und Öle)

Triglyceride entstehen durch **Veresterung** von **Glycerin** (ein dreiwertiger Alkohol mit drei OH-Gruppen) mit **drei Fettsäuren** (langkettige Carbonsäuren). Jede der drei Hydroxylgruppen des Glycerins reagiert mit der Carboxylgruppe einer Fettsäure unter Abspaltung von H₂O — es bilden sich drei **Esterbindungen** (–COO–):

**Glycerin + 3 Fettsäuren → Triglycerid + 3 H₂O**

Die hydrolytische Spaltung erfolgt durch **Lipasen**: Pankreaslipase spaltet Triglyceride im Dünndarm an den Positionen sn-1 und sn-3 zu 2-Monoacylglycerol und zwei freien Fettsäuren. Die Fettsäuren werden dann über Gallensalz-Micellen zur Darmwand transportiert und resorbiert. Lipoproteinlipase (LPL) an der Kapillarwand spaltet Triglyceride aus Lipoproteinen (VLDL, Chylomikronen) für die Aufnahme in Gewebe.

**Verseifung** ist die alkalische Hydrolyse von Estern: Triglycerid + 3 NaOH → Glycerin + 3 Natriumsalze der Fettsäuren (= Seifen). Die Fettsäureanionen sind amphiphil (polarer Kopf, unpolarer Schwanz) und wirken als Tenside — sie emulgieren Fette in Wasser.

### Phosphodiesterbindung — das Rückgrat der DNA und RNA

Die **Phosphodiesterbindung** ist ein spezieller Typ der Esterbindung: Eine Phosphatgruppe bildet zwei Esterbindungen — eine zum 3'-OH des einen Zuckers (Desoxyribose in DNA, Ribose in RNA) und eine zum 5'-OH des nächsten Zuckers. Das Rückgrat der Nukleinsäuren ist somit eine alternierende Kette aus Zucker-Phosphat-Zucker-Phosphat, wobei jede Phosphatgruppe bei physiologischem pH negativ geladen ist (pKₐ ~1).

Diese negative Ladung hat wichtige Konsequenzen:
- DNA ist ein **Polyanion** → wandert im elektrischen Feld zur Anode (Grundlage der Gelelektrophorese)
- DNA bindet **Histone** (basische Proteine, reich an Lysin und Arginin) durch elektrostatische Wechselwirkungen
- **Nukleasen** (DNasen, RNasen) spalten Phosphodiesterbindungen hydrolytisch — Endonukleasen schneiden innerhalb des Strangs, Exonukleasen bauen vom Ende her ab
- **Restriktionsenzyme** sind bakterielle Endonukleasen, die spezifische Sequenzen erkennen und spalten — Grundlage der Gentechnik

### Klinischer Bezug: Lipase und Orlistat

Das Medikament **Orlistat** (Xenical) hemmt die Pankreaslipase irreversibel durch kovalente Bindung an den Serin-Rest im aktiven Zentrum. Dadurch werden ca. 30 % der Nahrungsfette nicht gespalten und unverdaut ausgeschieden — ein Wirkprinzip zur Gewichtsreduktion bei Adipositas.

> **Merke:** Esterbindungen verknüpfen Glycerin mit Fettsäuren (Triglyceride) und Zucker mit Phosphat (Phosphodiesterbindung im DNA/RNA-Rückgrat). Lipasen spalten Ester in Fetten, Nukleasen spalten Phosphodiester in Nukleinsäuren. Verseifung = alkalische Esterhydrolyse → Seifen.

---

## 6. Klinische Bezüge und Prüfungsrelevantes

### Proteasen und Peptidbindungsspaltung

Proteasen spalten Peptidbindungen hydrolytisch und spielen zentrale Rollen in Verdauung, Blutgerinnung und Apoptose (programmierter Zelltod). **Trypsin** (Pankreas) spaltet nach Lysin und Arginin, **Chymotrypsin** nach aromatischen Aminosäuren (Phe, Trp, Tyr), **Pepsin** (Magen, pH-Optimum 1,5–2,5) nach hydrophoben Resten. Alle drei sind **Endopeptidasen** — sie schneiden innerhalb der Polypeptidkette, nicht vom Ende her. Klinisch relevant: **ACE-Hemmer** (Captopril, Enalapril) blockieren das Angiotensin-Converting-Enzyme, eine Protease, die Angiotensin I in das vasokonstriktorische Angiotensin II spaltet — Standardtherapie bei Hypertonie.

### Zusammenfassung: Bindungstypen im Vergleich

| Bindungstyp | Vorkommen | Entstehung | Spaltung | Klinisches Beispiel |
|---|---|---|---|---|
| Peptidbindung | Proteine | Kondensation (Ribosom) | Proteasen (Trypsin, Pepsin) | ACE-Hemmer |
| Disulfidbrücke | Extrazelluläre Proteine | Oxidation (–SH + HS–) | Reduktion (NAC, DTT) | NAC als Mukolytikum |
| α-Glykosidisch | Stärke, Glykogen, Maltose | Kondensation | α-Amylase, Maltase | Acarbose hemmt α-Glucosidase (Diabetes) |
| β-Glykosidisch | Cellulose, Lactose | Kondensation | Cellulase, Lactase | Laktoseintoleranz |
| Esterbindung | Triglyceride | Veresterung | Lipasen | Orlistat hemmt Pankreaslipase |
| Phosphodiester | DNA/RNA-Rückgrat | Kondensation (Polymerase) | Nukleasen | Restriktionsenzyme (Gentechnik) |

> **Merke:** Jeder Bindungstyp hat sein spezifisches Spaltenzym — Proteasen für Peptidbindungen, Lipasen für Esterbindungen, Amylasen/Glucosidasen für glykosidische Bindungen, Nukleasen für Phosphodiester. Die Enzymspezifität beruht auf der komplementären Geometrie des aktiven Zentrums zur jeweiligen Bindung.

> **Prüfungstipp:** Bei MedAT-Fragen zu biologischen Bindungen drei Dinge systematisch durchgehen: (1) Welche Monomere werden verknüpft? (2) Welcher Reaktionstyp (Kondensation/Oxidation)? (3) Welches Enzym spaltet die Bindung? Damit lassen sich praktisch alle Fragen zu diesem Thema beantworten.`,

    lernziele: [
      "Die Rolle kovalenter und nichtkovalenter Bindungen in biologischen Makromolekülen (Proteine, Nukleinsäuren, Lipide, Kohlenhydrate) erklären.",
      "Den hydrophoben Effekt als entropische Triebkraft der Membranbildung und Proteinfaltung verstehen.",
      "Die vier Ebenen der Proteinstruktur und die jeweils verantwortlichen Bindungstypen beschreiben.",
      "Die Bedeutung der Bindungschemie für Pharmakadesign (reversible vs. irreversible Bindung, Lipinski) erläutern.",
      "Den Unterschied zwischen α- und β-glycosidischen Bindungen und ihre biologischen Konsequenzen (Stärke vs. Cellulose) kennen.",
    ],

    sections: [
      {
        heading: "Glycosidische Bindungen in Kohlenhydraten",
        text: "Monosaccharide werden durch glycosidische Bindungen zu Di- und Polysacchariden verknüpft. Die Stereochemie der Bindung (α oder β) am anomeren Kohlenstoff (C1) bestimmt die Gesamtstruktur und biologische Funktion des Polysaccharids. α-1,4-Bindungen in Stärke ergeben eine spiralförmige Helix, leicht verdaulich. β-1,4-Bindungen in Cellulose ergeben gestreckte Ketten mit starken intra- und intermolekularen H-Brücken, unverdaulich für Menschen.",
        merksatz:
          "α-glycosidisch = verdaulich (Stärke/Glykogen); β-glycosidisch = unverdaulich (Cellulose).",
      },
      {
        heading: "Hydrophober Effekt und Membranstruktur",
        text: "Der hydrophobe Effekt ist keine direkte Anziehung zwischen unpolaren Molekülen, sondern eine entropische Triebkraft: Wenn unpolare Moleküle aggregieren, wird Wasser freigesetzt, das vorher in geordneten Hydratationsschalen gefangen war — der Entropiegewinn des Wassers treibt die Aggregation an. Phospholipide mit polarem Kopf und unpolarem Schwanz bilden daher spontan Doppelschichten (Bilayer) in wässriger Umgebung: das thermodynamisch günstigste Arrangement.",
        merksatz:
          "Hydrophober Effekt: Aggregation unpolarer Gruppen → Entropiegewinn des Wassers → treibt Membranbildung und Proteinfaltung.",
      },
      {
        heading: "Hierarchie der Proteinstruktur",
        text: "Proteine zeigen vier Strukturebenen: Primär (Aminosäuresequenz, kovalent), Sekundär (α-Helix und β-Faltblatt durch H-Brücken), Tertiär (Gesamtfaltung durch H-Brücken, hydrophoben Effekt, van-der-Waals, Disulfid, Salzbrücken) und Quartär (Assoziation mehrerer Polypeptidketten). Die Primärsequenz kodiert alle höheren Strukturebenen (Anfinsen-Dogma). Denaturierungsmittel stören selektiv nichtkovalente Wechselwirkungen und belassen die Primärstruktur intakt.",
        merksatz:
          "Primär: kovalent; Sekundär: H-Brücken; Tertiär: alles zusammen; Quartär: mehrere Ketten.",
      },
      {
        heading: "Pharmakologie der Bindungen",
        text: "Arzneimittel binden an Zielstrukturen über nichtkovalente (reversible) oder kovalente (irreversible) Bindungen. Reversible Bindungen ermöglichen dosierbare, steuerbare Pharmakotherapie. Irreversible Bindungen sind für bestimmte Anwendungen gewünscht: Aspirin acetyliert COX irreversibel (Thrombozyten bilden kein neues COX → anhaltende Thrombozytenaggregationshemmung über die Lebensdauer der Thrombozyten ~10 Tage). Lipinski's Rule of Five fasst die Bindungseigenschaften für orale Bioverfügbarkeit zusammen.",
        merksatz:
          "Reversible Hemmung: nichtkovalent, steuerbar; irreversibel: kovalent, dauerhaft (z. B. Aspirin-COX).",
      },
    ],

    merksätze: [
      "α-glycosidisch (Stärke) = Amylase spaltet = Energiespeicher; β-glycosidisch (Cellulose) = Ballaststoff.",
      "Hydrophober Effekt: entropisch getrieben; unpolare Gruppen aggregieren → Entropiegewinn des Wassers.",
      "Phospholipid-Bilayer: Selbstorganisation durch hydrophoben Effekt → Grundlage aller Biomembranen.",
      "Gesättigte Fettsäuren: gerade Kette → dichte Packung → feste Fette; ungesättigt (cis): Knick → flüssig.",
      "Trans-Fettsäuren: kein Knick → erhöhtes Atheroskleroserisiko.",
      "Peptidbindung: sp², planar, partieller Doppelbindungscharakter → bestimmt Proteinstruktur.",
      "Proteindenaturierung: nichtkovalente Wechselwirkungen gestört → Funktionsverlust (Primärstruktur bleibt).",
      "Disulfidbrücken (Cys–Cys): kovalent, stabilisieren extrazelluläre Proteine (Antikörper, Insulin).",
      "Aspirin: irreversible kovalente Acetylierung von COX-1/COX-2 → dauerhafter Effekt.",
      "Lipinski Rule of Five: MW ≤ 500, logP ≤ 5, HBD ≤ 5, HBA ≤ 10 → orale Bioverfügbarkeit.",
    ],

    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Beschreiben Sie die Kräfte, die zur Proteinfaltung und Stabilisierung der Tertiärstruktur von Proteinen beitragen. Welche Rolle spielen kovalente und nichtkovalente Wechselwirkungen, und was passiert bei der Denaturierung?",
      answer: `Die Tertiärstruktur eines Proteins — seine einzigartige dreidimensionale Faltung — wird durch ein komplexes Zusammenspiel verschiedener Bindungstypen stabilisiert:

Kovalente Bindungen: Disulfidbrücken (–S–S–) zwischen Cystein-Resten sind die einzige kovalente (nicht-Rückgrat) Stabilisierungskraft der Tertiärstruktur. Sie sind besonders wichtig in Proteinen, die in oxidativen Umgebungen vorkommen (extrazelluläre Proteine, Antikörper, Insulin).

Nichtkovalente Wechselwirkungen (dominierend):
1. Hydrophober Effekt: die stärkste Triebkraft der Faltung. Hydrophobe Aminosäuren (Leu, Ile, Val, Phe) werden ins Proteininnere gedrängt, weg vom Wasser. Der Entropiegewinn des Wassers ist die primäre Triebkraft.
2. Wasserstoffbrücken: zwischen polaren Seitenketten und dem Peptidrückgrat; stützen Sekundärstrukturen und Schleifen.
3. Ionische Wechselwirkungen (Salzbrücken): zwischen geladenen Seitenketten (Lys⁺, Arg⁺, His⁺ mit Asp⁻, Glu⁻); stärker im Proteininneren, wo kein Wasser konkurriert.
4. Van-der-Waals-Kräfte: sorgen für dichte Packung im Proteininneren (optimale Raumfüllung).

Denaturierung: Wird ein Protein erhitzt, mit Säure/Base, Harnstoff oder Detergenzien behandelt, werden die nichtkovalenten Wechselwirkungen gestört. Das Protein entfaltet sich — es verliert seine Sekundär- und Tertiärstruktur sowie seine Funktion. Die Primärstruktur (Sequenz, kovalente Peptidbindungen) bleibt intakt. Nach Entfernung des Denaturierungsmittels kann das Protein theoretisch renaturieren (Anfinsen-Experiment mit RNase A). In der Klinik nutzt man Denaturierung bei Sterilisation (Hitze, Autoklavieren) und in der Diagnostik (SDS-PAGE).`,
    },

    klinischerBezug:
      "Die Irreversibilität der COX-Hemmung durch Aspirin (kovalente Acetylierung) ist pharmakologisch genutzt: Da Thrombozyten kernlos sind und kein neues COX-1 synthetisieren können, hält die Thrombozytenaggregationshemmung für die gesamte Lebensdauer der Thrombozyten (ca. 10 Tage) an — Grundlage der niedrigdosierten Aspirintherapie bei kardiovaskulärem Risiko. Proteindenaturierung durch Hitze ist die Grundlage der Sterilisation im Autoklaven (121 °C, 15 min), wobei Mikroorganismen durch Entfaltung ihrer essentiellen Enzyme abgetötet werden.",

    selfTest: [
      {
        question:
          "Warum können Menschen Cellulose nicht verdauen, obwohl Stärke und Cellulose beide aus Glucose aufgebaut sind?",
        options: [
          "Cellulose hat eine viel höhere Molmasse als Stärke.",
          "Stärke enthält mehr Glucose-Einheiten pro Kette.",
          "Cellulose ist in Wasser unlöslich und kann daher nicht aufgenommen werden.",
          "Cellulose enthält β-1,4-glycosidische Bindungen, für die menschliche Verdauungsenzyme (Amylasen) keine Spezifität besitzen.",
          "Cellulose wird durch den Magen denaturiert und ist daher unverdaulich.",
        ],
        correctIndex: 3,
        explanation:
          "Stärke (Amylose und Amylopektin) enthält α-1,4-glycosidische Bindungen, die durch menschliche α-Amylase gespalten werden können. Cellulose enthält β-1,4-glycosidische Bindungen. Durch den Unterschied in der Stereochemie am anomeren C1 (α vs. β) unterscheidet sich die räumliche Anordnung der Glucoseketten grundlegend. Menschliche Verdauungsenzyme haben keine Komplementarität für β-1,4-Bindungen (keine Cellulase) → Cellulose ist unverdaulich → wirkt als Ballaststoff. Wiederkäuer können Cellulose durch Mikroorganismen im Pansen abbauen.",
        hints: [
          "α- vs. β-glycosidische Bindung: gleiche Atome, andere Stereochemie.",
          "Enzymspezifität: Amylase passt nur zu α-Bindungen.",
        ],
        difficulty: 1,
        tags: ["cellulose", "glycosidische-bindung", "amylase"],
      },
      {
        question: "Was ist die primäre thermodynamische Triebkraft des hydrophoben Effekts?",
        options: [
          "Direkte Anziehungskräfte zwischen unpolaren Molekülen.",
          "Enthalpiegewinn durch van-der-Waals-Wechselwirkungen zwischen Kohlenwasserstoffketten.",
          "Minimierung der freien Energie durch Ausbildung kovalenter Bindungen.",
          "Elektrostatische Abstoßung polarer Wassermoleküle von unpolaren Gruppen.",
          "Entropiegewinn des Wassers, wenn geordnete Hydratationsschalen um unpolare Moleküle aufgelöst werden.",
        ],
        correctIndex: 4,
        explanation:
          "Der hydrophobe Effekt ist primär entropisch getrieben, nicht enthalpisch. Wenn unpolare Moleküle in Wasser gelöst sind, ordnen sich die umgebenden Wassermoleküle in hochgeordneten Hydratationsschalen (Käfigstrukturen) um sie herum — das kostet Entropie (ΔS < 0). Wenn unpolare Moleküle aggregieren, werden diese geordneten Wasserschalen aufgelöst und die Wassermoleküle gewinnen Freiheitsgrade (ΔS > 0). Dieser Entropiegewinn des Wassers ist die treibende Kraft, die Lipide zur Aggregation in Membranen und hydrophobe Aminosäuren ins Proteininnere treibt.",
        hints: [
          "Hydrophober Effekt: über Entropie des Wassers, nicht Anziehung der unpolaren Gruppen.",
          "Was passiert mit geordneten Hydratationsschalen bei Aggregation?",
        ],
        difficulty: 2,
        tags: ["hydrophober-effekt", "entropie", "membranbildung"],
      },
      {
        question: "Welcher Bindungstyp stabilisiert die α-Helix-Sekundärstruktur in Proteinen?",
        options: [
          "Wasserstoffbrücken zwischen der C=O-Gruppe der Aminosäure i und der N–H-Gruppe der Aminosäure i+4.",
          "Kovalente Bindungen im Peptidrückgrat.",
          "Disulfidbrücken zwischen Cystein-Seitenketten.",
          "Ionische Wechselwirkungen zwischen Seitenketten.",
          "Van-der-Waals-Kräfte zwischen hydrophoben Seitenketten.",
        ],
        correctIndex: 0,
        explanation:
          "Die α-Helix wird durch intramolekulare Wasserstoffbrücken stabilisiert: Die Carbonylgruppe (C=O) der Peptidbindung der Aminosäure i bildet eine H-Brücke mit der N–H-Gruppe der Peptidbindung der Aminosäure i+4 (d. h. 4 Aminosäuren weiter in der Sequenz). Pro Windung der Helix (~3,6 Aminosäuren) entstehen regelmäßig H-Brücken, die die Helixachse stabilisieren. Alle Carbonyl-Gruppen zeigen in eine Richtung, alle NH-Gruppen in die andere → polares Helixmoment. α-Helices sind häufig in Transmembranproteinen (z. B. 7 Transmembranhelices bei GPCR).",
        hints: [
          "Sekundärstruktur: lokale, regelmäßige Struktur durch H-Brücken.",
          "α-Helix: H-Brücke von C=O(i) zu N-H(i+4).",
        ],
        difficulty: 2,
        tags: ["alpha-helix", "sekundärstruktur", "wasserstoffbrücken"],
      },
      {
        question:
          "Aspirin hemmt Cyclooxygenase (COX) irreversibel. Was ist die chemische Grundlage dieser Irreversibilität?",
        options: [
          "Aspirin bildet ionische Bindungen mit dem aktiven Zentrum.",
          "Aspirin überträgt kovalent eine Acetylgruppe auf Serin-530 der COX (Acetylierung), was nicht mehr rückgängig gemacht werden kann.",
          "Aspirin verdrängt das Substrat kompetitiv ohne Ablösung.",
          "Aspirin denaturiert die COX durch hydrophoben Effekt.",
          "Aspirin bildet Disulfidbrücken mit Cystein-Resten in der COX.",
        ],
        correctIndex: 1,
        explanation:
          "Aspirin (Acetylsalicylsäure) überträgt seine Acetylgruppe auf den Hydroxyl-Sauerstoff von Serin-530 im Kanal der Cyclooxygenase (Acetylierung, nukleophile Acylsubstitution). Die resultierende kovalente O-Acetyl-Serinmodifikation blockiert dauerhaft den Zugang des Arachidonsäure-Substrats zum katalytischen Zentrum. Da die kovalente Bindung unter physiologischen Bedingungen nicht hydrolysiert wird, bleibt das Enzym dauerhaft inaktiv. In kernlosen Thrombozyten wird kein neues COX-1 synthetisiert — der Effekt hält für die gesamte Thrombozytenliebensdauer (ca. 10 Tage) an.",
        hints: [
          "Irreversibel = kovalente Bindung.",
          "Welches Reagenz kann Hydroxylgruppen acetylieren?",
        ],
        difficulty: 2,
        tags: ["aspirin", "cox", "irreversible-hemmung"],
      },
      {
        question:
          "Warum haben cis-ungesättigte Fettsäuren (z. B. Ölsäure) niedrigere Schmelzpunkte als gesättigte Fettsäuren gleicher Kettenlänge?",
        options: [
          "Ungesättigte Fettsäuren haben weniger C-Atome.",
          "Cis-Fettsäuren bilden mehr Wasserstoffbrücken.",
          "Die cis-Doppelbindung erzeugt einen Knick in der Kette → lockere Packung → schwächere London-Kräfte → niedrigerer Schmelzpunkt.",
          "Ungesättigte Fettsäuren sind polarer als gesättigte.",
          "Die höhere Molmasse gesättigter Fettsäuren erhöht deren Schmelzpunkt.",
        ],
        correctIndex: 2,
        explanation:
          "Die cis-Konfiguration einer Doppelbindung erzeugt einen starren Knick (~30°) in der Fettsäurekette, weil die π-Bindung freie Rotation verhindert und beide Wasserstoffatome auf derselben Seite liegen. Dieser Knick verhindert die dichte parallele Packung der Kohlenwasserstoffketten. Schwächere intermolekulare London-Kräfte → geringere Energie zum Schmelzen nötig → niedrigerer Schmelzpunkt. Ölsäure (18:1 cis-Δ9) schmilzt bei 13 °C, Stearinsäure (18:0) bei 70 °C. Trans-Fettsäuren haben keinen Knick und verhalten sich ähnlich wie gesättigte.",
        hints: [
          "cis-Doppelbindung: beide H auf derselben Seite → Knick.",
          "Knick verhindert dichte Packung → schwächere London-Kräfte.",
        ],
        difficulty: 2,
        tags: ["fettsäuren", "cis-ungesättigt", "schmelzpunkt"],
      },
      {
        question: "Was beschreibt Lipinski's Rule of Five (Ro5) für Arzneimittel?",
        options: [
          "Pharmaka müssen genau 5 Aminosäuren als Bindemotive haben.",
          "Pharmaka dürfen maximal 5 Chiralitätszentren besitzen.",
          "Pharmaka müssen mindestens 5 aromatische Ringe aufweisen.",
          "Pharmaka mit MW ≤ 500 Da, logP ≤ 5, ≤ 5 H-Brücken-Donoren und ≤ 10 H-Brücken-Akzeptoren haben wahrscheinlich gute orale Bioverfügbarkeit.",
          "Pharmaka müssen mit mindestens 5 verschiedenen Bindungstypen an ihren Rezeptor binden.",
        ],
        correctIndex: 3,
        explanation:
          "Lipinski's Rule of Five (1997) ist eine Faustregel für die orale Bioverfügbarkeit von Arzneimitteln. Ein Pharmakon mit MW > 500 Da, logP > 5 (zu lipophil), > 5 H-Brücken-Donoren (NH, OH) oder > 10 H-Brücken-Akzeptoren (N, O) wird wahrscheinlich schlecht resorbiert. Zu polare Moleküle (viele HBD/HBA) können Zellmembranen nicht passieren; zu unpolare (hoher logP) lösen sich nicht ausreichend in wässriger Körperflüssigkeit. Ausnahmen: Substrate für Transporter (Antibiotika, Vitamine). Biologika (Antikörper) fallen nicht unter die Ro5.",
        hints: [
          "Ro5 = Gleichgewicht zwischen Wasser- und Fettlöslichkeit.",
          "Was limitiert die orale Aufnahme — zu polar oder zu unpolar?",
        ],
        difficulty: 2,
        tags: ["lipinski", "bioverfügbarkeit", "pharmaka"],
      },
      {
        question: "Welche Bindungsart verbindet die Nucleotide in einem DNA-Strang miteinander?",
        options: [
          "Wasserstoffbrücken",
          "Ionische Bindungen über Mg²⁺",
          "Van-der-Waals-Kräfte",
          "Disulfidbrücken",
          "Phosphodiesterbindungen (kovalent)",
        ],
        correctIndex: 4,
        explanation:
          "Das Rückgrat eines DNA-Stranges wird durch Phosphodiesterbindungen gebildet: Eine Phosphatgruppe ist kovalent über eine Esterbindung (3'- und 5'-Position) mit je zwei Desoxyribose-Zuckermolekülen verbunden. Diese kovalenten Bindungen verleihen dem Strang seine mechanische Stabilität. Die Wasserstoffbrücken zwischen komplementären Basen halten hingegen die zwei antiparallelen Stränge der Doppelhelix zusammen — sie können durch Helikasen enzymatisch oder durch Hitze aufgetrennt werden, ohne die Primärstruktur der Einzelstränge zu zerstören.",
        hints: [
          "Rückgrat = Zucker-Phosphat-Kette; Basenpaare = zwischen den Strängen.",
          "Esterbindung zwischen Phosphat und Zucker = Phosphodiester.",
        ],
        difficulty: 1,
        tags: ["dna", "phosphodiesterbindung", "nukleotide"],
      },
      {
        question:
          "Welche Aminosäure-Seitenkette ist in der Lage, kovalente Disulfidbrücken zu bilden, die die Tertiärstruktur von Proteinen stabilisieren?",
        options: [
          "Cystein (Cys)",
          "Threonin (Thr)",
          "Serin (Ser)",
          "Methionin (Met)",
          "Histidin (His)",
        ],
        correctIndex: 0,
        explanation:
          "Cystein (Cys) besitzt eine Thiolgruppe (–SH) in seiner Seitenkette. Zwei Cysteine können unter oxidativen Bedingungen durch Oxidation ihrer Thiolgruppen eine kovalente Disulfidbrücke (–S–S–) bilden: 2 R–SH → R–S–S–R + 2H⁺ + 2e⁻. Disulfidbrücken sind die einzigen kovalenten (nicht-Peptidrückgrat) Querverbindungen in Proteinen und sind besonders häufig in sekretierten und extrazellulären Proteinen (Antikörper, Insulin, RNase A), da das extrazelluläre Milieu oxidativer ist als das Zytoplasma. Sie verleihen dem Protein erhöhte thermische und chemische Stabilität.",
        hints: [
          "Welche Aminosäure hat eine –SH-Gruppe?",
          "Oxidation zweier Thiole ergibt eine Disulfidbrücke.",
        ],
        difficulty: 1,
        tags: ["cystein", "disulfidbrücke", "tertiärstruktur"],
      },
    ],
  },
];
