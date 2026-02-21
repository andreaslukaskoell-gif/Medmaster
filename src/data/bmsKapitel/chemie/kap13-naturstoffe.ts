import type { Kapitel } from '../types';

export const chemKap13: Kapitel = {
  id: "chem-kap13",
  title: "Naturstoffe",
  subject: "chemie",
  icon: "🔬",
  estimatedTime: "65 min",
  unterkapitel: [
    {
      id: "ch-13-01",
      title: "Kohlenhydrate — Von Monosacchariden zu Polysacchariden",
      content: `## Monosaccharide — Einfachzucker

Monosaccharide sind die Grundbausteine aller Kohlenhydrate. Die wichtigsten Hexosen (6C, Formel C₆H₁₂O₆):

- **Glucose** (Traubenzucker): Hauptenergielieferant aller Zellen; Blutglucose 3,9–6,1 mmol/L
- **Fructose** (Fruchtzucker): süßer als Glucose, im Obst, Honig
- **Galaktose**: Milchzucker-Baustein (Laktose = Galaktose + Glucose)

Pentosen (5C): Ribose (in RNA) und Desoxyribose (in DNA).

## Fischer- und Haworth-Projektion

- **Fischer-Projektion:** Lineare Darstellung mit C1 (Aldehydgruppe) oben. Horizontale Bindungen zeigen aus der Papierebene heraus. D-Glucose hat alle OH-Gruppen nach rechts (an C5: OH rechts = D-Konfiguration).
- **Haworth-Projektion:** Ringförmige Darstellung (Pyranose = 6-Ring, Furanose = 5-Ring). Glucose bildet in wässriger Lösung einen 6-Ring (Pyranoseform).

## α- vs. β-D-Glucose: Anomere

Beim Ringschluss (Halbacetalbildung) entsteht ein neues Stereozentrum am C1 (anomeres C):
- **α-D-Glucose:** OH an C1 liegt axial (unterhalb der Ringebene in Haworth: gleiche Seite wie C6-CH₂OH)
- **β-D-Glucose:** OH an C1 liegt äquatorial (oberhalb in Haworth: gegenüber C6-CH₂OH)

In wässriger Lösung stehen α und β im Gleichgewicht (Mutarotation).

## Glykosidische Bindung und Disaccharide

Die glykosidische Bindung verknüpft Monosaccharide unter Wasserabspaltung:

- **α-1,4-glykosidisch:** in Stärke (Amylose: linear; Amylopektin: verzweigt α-1,6) und Glykogen
- **β-1,4-glykosidisch:** in Cellulose (kann vom Menschen nicht gespalten werden — kein β-Glucosidase)

**Disaccharide:**
- Saccharose: α-Glucose + β-Fructose (α-1,2-Bindung), kein reduzierendes Ende
- Laktose: β-Galaktose + Glucose (β-1,4-Bindung), reduzierend
- Maltose: α-Glucose + α-Glucose (α-1,4-Bindung), reduzierend

**Polysaccharide:** Stärke (Pflanzenspeicher), Glykogen (Tierspeicher, verzweigt), Cellulose (Strukturpolysaccharid), Chitin (Exoskelett).`,
      lernziele: [
        "Monosaccharide (Glucose, Fructose, Galaktose) unterscheiden und in Fischer- und Haworth-Projektion darstellen",
        "Alpha- und Beta-D-Glucose unterscheiden und die anomere Position beschreiben",
        "Alpha-1,4- und Beta-1,4-glykosidische Bindungen und ihre biologischen Konsequenzen erläutern",
      ],
      sections: [
        {
          heading: "Alpha vs. Beta — biologische Konsequenzen",
          text: "Die Art der glykosidischen Bindung hat fundamentale biologische Auswirkungen. α-1,4-Bindungen (in Stärke und Glykogen) bilden eine Wendelstruktur (Helix), die durch menschliche Amylase spaltbar ist. β-1,4-Bindungen (in Cellulose) bilden gestreckte, gerade Ketten, die Wasserstoffbrücken zwischen benachbarten Ketten ausbilden → mechanisch stabile Fasern. Menschen besitzen keine β-Glucosidase → Cellulose unverdaubar (Ballaststoff). Wiederkäuer haben Bakterien im Pansen mit β-Glucosidasen → können Cellulose verdauen. Diese Bindungstyp-Unterschiede erklären die Vielfalt der Polysaccharid-Eigenschaften (löslich: Stärke; unlöslich: Cellulose).",
          merksatz: "α-1,4: Stärke/Glykogen (spaltbar); β-1,4: Cellulose (unlöslich, Ballaststoff)",
        },
        {
          heading: "Glykogen als Glucosespeicher",
          text: "Glykogen ist das Speicherpolysaccharid in Tieren (Leber: ca. 100 g, Muskel: ca. 400 g). Struktur: verzweigt (α-1,4-Ketten, alle 8–12 Glucose-Einheiten α-1,6-Verzweigung). Die Verzweigung ermöglicht schnellen Abbau (viele nichtreduzierende Enden für Glykogenphosphorylase). Glykogenolyse: Glykogenphosphorylase + Debranching-Enzym → Glucose-1-Phosphat → Glucose-6-Phosphat → Glycolyse (Muskel) oder Glucose (Leber). Regulation durch Insulin (Glykogensynthese ↑) und Glucagon/Adrenalin (Glykogenolyse ↑). Glykogenspeicherkrankheiten (z.B. Pompe, McArdle) = genetische Enzymdefekte.",
          merksatz: "Glykogen: α-1,4 + α-1,6 (verzweigt), Leber + Muskel",
        },
      ],
      merksätze: [
        "Glucose/Fructose/Galaktose: C₆H₁₂O₆; D-Form = OH an C5 rechts",
        "α-Glucose: OH-C1 axial/unten; β-Glucose: OH-C1 äquatorial/oben",
        "α-1,4: Stärke (Amylase spaltbar); β-1,4: Cellulose (unverdaubar)",
      ],
      klinischerBezug: "Laktoseintoleranz: Mangel an intestinaler Laktase (β-Galaktosidase) → Laktose wird nicht gespalten → osmotisch im Dickdarm → bakterielle Fermentation → Blähungen, Diarrhö. Therapie: Laktosearme Diät oder exogene Laktase. Galaktosämie: Mangel an Galaktose-1-Phosphat-Uridyltransferase → Galaktose-1-P akkumuliert → hepatische und neurologische Schäden.",
      altfrage: {
        question: "Warum kann der Mensch Cellulose nicht verdauen, obwohl sie aus Glucose-Einheiten besteht?",
        answer: "Cellulose besteht aus β-1,4-glykosidisch verknüpften Glucoseeinheiten. Der menschliche Verdauungstrakt besitzt keine β-1,4-Glucosidase (Cellulase), die diese Bindung spalten kann. Amylase spaltet nur α-1,4-Bindungen (in Stärke/Glykogen). Cellulose ist daher ein unverdaulicher Ballaststoff. Nur bestimmte Bakterien (im Pansen von Wiederkäuern oder im Darm von Termiten) produzieren Cellulasen.",
      },
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen α-D-Glucose und β-D-Glucose?",
          options: [
            "α hat 5 C-Atome, β hat 6 C-Atome",
            "α-D-Glucose hat OH an C1 axial (unterhalb Ringebe), β-D-Glucose hat OH an C1 äquatorial (oberhalb)",
            "α und β sind in der Fischer-Projektion gleich",
            "α ist die D-Form, β ist die L-Form",
            "β hat eine Doppelbindung, α nicht",
          ],
          correctIndex: 1,
          explanation: "Beim Ringschluss (Halbacetalbildung) der Glucose entsteht ein neues Stereozentrum am C1 (anomeres C). α-D-Glucose: OH an C1 ist axial = unterhalb der Ringeben in der Haworth-Projektion (gleiche Seite wie H an C1, cis zur C6-CH₂OH). β-D-Glucose: OH an C1 ist äquatorial = oberhalb der Ringebene in Haworth. Beide Anomere stehen in wässriger Lösung im Gleichgewicht (Mutarotation).",
          hints: [
            "Anomeres C = C1 (der Aldehyd-C im offenkettigen Zucker)",
            "α: OH unterhalb; β: OH oberhalb in Haworth-Projektion",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage zur glykosidischen Bindung in Stärke ist korrekt?",
          options: [
            "β-1,4-glykosidische Bindungen in linearen Ketten",
            "α-1,4-glykosidische Bindungen (und α-1,6 in Amylopektin)",
            "β-1,6-glykosidische Bindungen (Cellulose)",
            "Nur α-1,6-Bindungen in verzweigten Ketten",
            "Keine glykosidischen Bindungen — nur Wasserstoffbrücken",
          ],
          correctIndex: 1,
          explanation: "Stärke besteht aus zwei Komponenten: Amylose (lineare α-1,4-Ketten) und Amylopektin (α-1,4-Ketten mit α-1,6-Verzweigungen alle 24–30 Glucoseeinheiten). Diese α-1,4-Bindungen werden durch menschliche α-Amylase (Speichel, Pankreas) gespalten. Cellulose hat β-1,4-Bindungen, die nicht spaltbar sind.",
          hints: [
            "Stärke vs. Cellulose: α vs. β macht den Unterschied",
            "α-1,4 = Stärke; β-1,4 = Cellulose",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Maltose entsteht bei der Stärkehydrolyse durch Amylase. Was sind ihre Bestandteile?",
          options: [
            "Glucose + Galaktose (β-1,4-Bindung)",
            "Glucose + Fructose (α-1,2-Bindung)",
            "Glucose + Glucose (α-1,4-Bindung)",
            "Galaktose + Galaktose (β-1,4-Bindung)",
            "Glucose + Glucose (β-1,4-Bindung)",
          ],
          correctIndex: 2,
          explanation: "Maltose (Malzzucker) besteht aus zwei α-D-Glucoseeinheiten, die durch eine α-1,4-glykosidische Bindung verknüpft sind. Sie entsteht als Zwischenprodukt der Stärkehydrolyse durch Amylase. Maltose hat ein freies anomeres C1 (reduzierendes Ende) und ist daher ein reduzierendes Disaccharid. Saccharose (Glc+Fruc) ist nicht-reduzierend.",
          hints: [
            "Stärke = α-1,4-verknüpfte Glucose → Hydrolyse → Maltose",
            "Maltose = Mal + ose → Mal-zprodukt aus Stärke",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Laktose (Milchzucker) besteht aus:",
          options: [
            "Zwei Glucosemolekülen",
            "Glucose + Fructose",
            "Galaktose + Glucose (β-1,4-Bindung)",
            "Galaktose + Galaktose (α-1,4-Bindung)",
            "Fructose + Galaktose",
          ],
          correctIndex: 2,
          explanation: "Laktose besteht aus β-D-Galaktose und D-Glucose, verknüpft durch eine β-1,4-glykosidische Bindung. Für die Hydrolyse wird Laktase (β-Galaktosidase) benötigt. Fehlt dieses Enzym (Laktoseintoleranz), kann Laktose nicht gespalten werden. Laktose ist reduzierend (Glucose-Teil hat freies anomeres C).",
          hints: [
            "Lakt-ose kommt in Milch vor → Milchzucker enthält Galaktose",
            "β-1,4-Bindung → Laktase nötig",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist Glykogen und wo wird es gespeichert?",
          options: [
            "Ein lineares Stärkepolymer; gespeichert in Pflanzenzellen",
            "Ein Oligosaccharid; im Blutplasma gelöst",
            "Ein hochverzweigtes α-1,4/α-1,6-Glucosepolymer; gespeichert in Leber und Muskel",
            "Ein Cellulose-ähnliches β-1,4-Polymer; in Erythrozyten",
            "Ein Glykoprotein; in Thrombozyten",
          ],
          correctIndex: 2,
          explanation: "Glykogen ist das tierische Pendant zu Stärke: hochverzweigtes Polysaccharid aus α-1,4-verknüpften Glucoseeinheiten mit α-1,6-Verzweigungen alle 8–12 Einheiten. Gespeichert in Leber (ca. 100 g, zur Blutglucosehomöostase) und Muskel (ca. 400 g, für lokale Energieversorgung). Hohe Verzweigung erlaubt schnelle Mobilisierung durch viele nichtreduzierende Enden.",
          hints: [
            "Glykogen = tierisches Speicherpolysaccharid",
            "Leber für Blutzucker, Muskel für Eigenversorgung",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: "ch-13-02",
      title: "Aminosäuren und Proteine — Primär- bis Quartärstruktur",
      content: `## Aminosäuren — Struktur und pI

Die 20 proteinogenen Aminosäuren haben die allgemeine Struktur: H₂N-Cα(H)(R)-COOH.

In wässriger Lösung liegen sie als Zwitterionen vor (NH₃⁺ und COO⁻ gleichzeitig). Der pI (isoelektrischer Punkt) ist der pH, bei dem die Nettoladung null ist:

**pI ≈ ½(pK₁ + pK₂)**

- Für Asp (sauer): pI ≈ ½(2,1 + 3,9) = 3,0
- Für Lys (basisch): pI ≈ ½(9,2 + 10,5) = 9,85

## Peptidbindung — Struktur und Eigenschaften

Die Peptidbindung (-CO-NH-) hat durch Resonanz partiellen Doppelbindungscharakter → planar, überwiegend trans. Peptide wachsen vom N-Terminus (linkes Ende, freie NH₂) zum C-Terminus (rechts, freie COOH).

## Primärstruktur

Die **Primärstruktur** ist die Aminosäuresequenz (kovalent festgelegt). Sie bestimmt alle übergeordneten Strukturen. Sequenz-Änderung → andere Funktion oder Krankheit (Sichelzellanämie: Glu→Val an Position 6 der β-Kette des Hämoglobins).

## Sekundärstruktur

**α-Helix:** Rechtsgängige Spirale; Wasserstoffbrücken zwischen NH-Gruppe einer AS und C=O-Gruppe der i+4-AS entlang der Helix. 3,6 AS pro Windung. Stabil durch H-Brücken. Häufig in Transmembranproteinen.

**β-Faltblatt:** Zwei oder mehr β-Stränge liegen parallel oder antiparallel nebeneinander; H-Brücken zwischen NH und C=O benachbarter Stränge. Planares, faltblattartiges Muster. Häufig in β-Amyloid (Alzheimer).

## Tertiärstruktur

3D-Faltung des gesamten Polypeptids. Stabilisiert durch:
- **Disulfidbrücken** (kovalent, zwischen zwei Cys-SH)
- Hydrophobe Wechselwirkungen (unpolaren Seitenketten nach innen)
- Wasserstoffbrücken
- Ionische Wechselwirkungen (Salzbrücken)

## Quartärstruktur

Mehrere Polypeptidketten (Untereinheiten) assoziieren nicht-kovalent. Beispiel: Hämoglobin (α₂β₂), Antikörper (2 schwere + 2 leichte Ketten).`,
      lernziele: [
        "Die vier Strukturebenen von Proteinen (Primär bis Quartär) mit stabilisierenden Kräften beschreiben",
        "Die Eigenschaften der Peptidbindung (planar, trans, partieller Doppelbindungscharakter) erklären",
        "Für die Sekundärstruktur (α-Helix, β-Faltblatt) die Wechselwirkungstypen angeben",
      ],
      sections: [
        {
          heading: "Proteinstruktur und Denaturierung",
          text: "Die Tertiärstruktur eines Proteins entsteht durch spontane Faltung der Polypeptidkette, getrieben durch den hydrophoben Effekt (Aminosäuren mit unpolaren Seitenketten ordnen sich ins Innere, weg von Wasser). Chaperone (z.B. Hsp70) helfen bei der korrekten Faltung in vivo. Denaturierung = Verlust der 3D-Struktur durch Aufbrechen nicht-kovalenter Bindungen (Hitze, Detergenzien, extremes pH, Harnstoff). Die Primärstruktur (kovalente Bindungen) bleibt erhalten. Denaturierung ist oft irreversibel (z.B. gekochtes Ei). In manchen Fällen renaturiert ein Protein nach Entfernen des denaturierenden Agens (klassisches Experiment: Ribonuklease A nach Harnstoff-Entfernung).",
          merksatz: "Denaturierung: Verlust der 3D-Struktur (nicht-kovalent); Primärstruktur bleibt",
        },
        {
          heading: "Hämoglobin als Quartärstruktur-Beispiel",
          text: "Hämoglobin (Hb) ist ein heterotetrameres Protein (α₂β₂) mit vier Hämgruppen (Fe²⁺). Jede Untereinheit bindet ein O₂-Molekül. Durch kooperative Bindung steigt die Sauerstoffaffinität mit zunehmender O₂-Sättigung (sigmoide O₂-Dissoziationskurve). Bohr-Effekt: ↑CO₂ und ↓pH verringern O₂-Affinität (rechtsverschobene Kurve) — begünstigt O₂-Abgabe im Gewebe. 2,3-BPG (Biphosphoglycerat) stabilisiert deoxygenierten Zustand (T-State) und senkt O₂-Affinität. Fetales Hb (HbF, γ-Ketten statt β) bindet 2,3-BPG schwächer → höhere O₂-Affinität (kann O₂ von mütterlichem Hb übernehmen).",
          merksatz: "Hb: α₂β₂, 4 Häm, kooperativ, Bohr-Effekt, 2,3-BPG",
        },
      ],
      merksätze: [
        "Primär: Sequenz (kovalent); Sekundär: H-Brücken (α-Helix, β-Faltblatt)",
        "Tertiär: 3D-Faltung (hydrophob, Disulfid, H-Brücken); Quartär: Untereinheiten",
        "Sichelzellanämie: Glu₆→Val₆ in β-Hb → HbS-Aggregation bei Hypoxie",
      ],
      klinischerBezug: "Sichelzellanämie: Ein-Punkt-Mutation (Glu→Val an Position 6 der β-Globin-Kette) führt zu HbS. Bei Desoxygenierung aggregiert HbS zu Fasern → Sichelzellform → Hämolyse, Gefäßverschlüsse (Schmerz-Episoden, Organinfarkte). Heterozygote (Sichelzellmerkmal) sind malaria-partiell-geschützt (evolutionärer Vorteil in Malariagebieten).",
      altfrage: {
        question: "Was stabilisiert die α-Helix-Sekundärstruktur?",
        answer: "Die α-Helix wird durch intramolekulare Wasserstoffbrücken stabilisiert, die zwischen der NH-Gruppe einer Aminosäure und der C=O-Gruppe der i+4 entfernten Aminosäure entlang der Helixachse gebildet werden. Die Seitenketten zeigen nach außen. Pro Windung kommen 3,6 Aminosäuren. Der H-Brücken-Abstand beträgt 0,54 nm pro Windung.",
      },
      selfTest: [
        {
          question: "Was stabilisiert hauptsächlich die Tertiärstruktur eines globulären Proteins?",
          options: [
            "Peptidbindungen (kovalent) entlang der Kette",
            "Nur Disulfidbrücken zwischen Cys-Resten",
            "Hydrophobe Wechselwirkungen, Wasserstoffbrücken, Ionische Wechselwirkungen, Disulfidbrücken",
            "Nur kovalente C-C-Bindungen",
            "Van-der-Waals-Kräfte allein",
          ],
          correctIndex: 2,
          explanation: "Die Tertiärstruktur wird durch ein Zusammenspiel mehrerer Kräfte stabilisiert: Hydrophobe Wechselwirkungen (dominant, unpolare Seitenketten im Inneren), Wasserstoffbrücken (polar Seitenketten), ionische Wechselwirkungen (Salzbrücken zwischen entgegengesetzt geladenen Gruppen), Disulfidbrücken (kovalent, zwischen zwei Cys). Van-der-Waals-Kräfte spielen ebenfalls eine Rolle.",
          hints: [
            "Mehrere verschiedene Kräfte stabilisieren Tertiärstruktur",
            "Disulfidbrücken sind kovalent, die anderen nicht-kovalent",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum ist die Sichelzellanämie ein Beispiel für die Bedeutung der Primärstruktur?",
          options: [
            "Eine Änderung der Tertiärstruktur bewirkt Sichelbil dung",
            "Ein Aminosäureaustausch (Glu₆→Val₆ in β-Hb) führt zu Aggregation und Sichelzellform",
            "Hämoglobin fehlt komplett",
            "HbS hat andere Quartärstruktur (4 α-Ketten statt α₂β₂)",
            "Die Mutation ändert nur den isoelektrischen Punkt",
          ],
          correctIndex: 1,
          explanation: "Bei Sichelzellanämie ist an Position 6 der β-Kette Glutamat (negativ geladen, hydrophil) durch Valin (unpolar, hydrophob) ersetzt (Glu→Val). Diese einzige Änderung in der Primärstruktur macht HbS hydrophober auf der Oberfläche → bei Desoxygenierung aggregieren HbS-Moleküle zu langen Fasern → Erythrozyten nehmen Sichelform an → Hämolyse und Mikroverschlüsse.",
          hints: [
            "Eine Aminosäure → gesamte Krankheit",
            "Glu (geladen) → Val (unpolar): was ändert sich an der Oberfläche?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Wie viele Aminosäuren kommen pro Windung der α-Helix?",
          options: [
            "2,0",
            "3,0",
            "3,6",
            "4,0",
            "6,0",
          ],
          correctIndex: 2,
          explanation: "Die α-Helix hat 3,6 Aminosäuren pro Windung (Translationsschritt: 0,15 nm/AS, Steigung pro Windung: 0,54 nm). Wasserstoffbrücken bilden sich zwischen i und i+4 (also AS 1 mit 5, 2 mit 6, etc.). Die rechtsgängige α-Helix nach Pauling ist die häufigste Form. In Membranproteinen sind Transmembranhelices besonders stabil (hydrophobe Seitenketten nach außen zu Lipid).",
          hints: [
            "i und i+4 bedeutet: 4 Positionen dazwischen = 3,6 Windungen",
            "Eine vollständige Helixwindung umfasst 3,6 AS",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist Denaturierung eines Proteins?",
          options: [
            "Abbau der Peptidbindungen durch Proteasen",
            "Verlust der 3D-Faltung durch Störung nicht-kovalenter Bindungen",
            "Spaltung aller Disulfidbrücken",
            "Synthese eines neuen Proteins mit anderer Sequenz",
            "Glykosilierung des Proteins",
          ],
          correctIndex: 1,
          explanation: "Denaturierung ist der Verlust der nativen (funktionellen) 3D-Struktur eines Proteins durch Aufbrechen nicht-kovalenter Wechselwirkungen (Wasserstoffbrücken, hydrophobe Wechselwirkungen, ionische Bindungen). Die Primärstruktur (kovalente Peptidbindungen) bleibt erhalten. Auslöser: Hitze, Säure/Lauge, Detergenzien (SDS), Chaotrope (Harnstoff, Guanidin). Oft irreversibel (Ei-Weiß kochen).",
          hints: [
            "Denaturierung ≠ Hydrolyse der Peptidbindungen",
            "Primärstruktur (Sequenz) bleibt bei Denaturierung erhalten",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Kräfte stabilisieren das β-Faltblatt?",
          options: [
            "Kovalente C=O-Bindungen zwischen Strängen",
            "Wasserstoffbrücken zwischen NH-Gruppen und C=O-Gruppen benachbarter Stränge",
            "Disulfidbrücken zwischen Cys-Resten benachbarter Stränge",
            "Ionische Wechselwirkungen zwischen geladenen Seitenketten",
            "Van-der-Waals-Kräfte zwischen aromatischen Ringen",
          ],
          correctIndex: 1,
          explanation: "Das β-Faltblatt wird durch Wasserstoffbrücken zwischen der NH-Gruppe eines Strangs und der C=O-Gruppe des benachbarten Strangs stabilisiert. Diese H-Brücken verlaufen senkrecht zur Strangrichtung. Die Seitenketten zeigen abwechselnd ober- und unterhalb der Faltblattebene. β-Faltblätter können parallel (gleiche Richtung der Stränge) oder antiparallel (entgegengesetzte Richtung, energetisch günstiger) vorliegen.",
          hints: [
            "Sekundärstruktur-H-Brücken sind zwischen Backbone-NH und C=O (nicht Seitenketten)",
            "β-Faltblatt: H-Brücken quer zwischen benachbarten Strängen",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-13-03",
      title: "Lipide — Fette, Phospholipide und Cholesterin",
      content: `## Fettsäuren — gesättigt und ungesättigt

Fettsäuren sind lineare Carbonsäuren mit gerader Anzahl an C-Atomen (4–22 C).

- **Gesättigte Fettsäuren (SFA):** Keine C=C-Doppelbindung. Geradkettig, dicht gepackt → hoher Schmelzpunkt → fest (tierische Fette). Beispiele: Palmitinsäure (16:0), Stearinsäure (18:0).
- **Einfach ungesättigte (MUFA):** Eine cis-C=C-Doppelbindung. Ölsäure (18:1 cis-Δ9): Olivenöl.
- **Mehrfach ungesättigte (PUFA):** Mehrere cis-C=C-Doppelbindungen. Linolsäure (18:2 cis-Δ9,12, ω-6), α-Linolensäure (18:3, ω-3), EPA, DHA.

cis-Doppelbindungen bewirken Knicke in der Kette → weniger dichte Packung → niedrigerer Schmelzpunkt → flüssig (Pflanzenöle).

## Triglyceride (Triacylglycerine)

Triglyceride bestehen aus Glycerol und drei Fettsäuren, verbunden durch Esterbindungen. Energiedichte: 37 kJ/g (viel höher als Kohlenhydrate mit 17 kJ/g), da Kohlenstoff im Durchschnitt oxidationszahlniedriger ist.

**Verseifung (Saponifikation):** NaOH + Triglycerid → Glycerol + 3 Fettsäure-Na-Salze (Seife)

## Phospholipide — Bausteine der Zellmembran

Phospholipide bestehen aus: Glycerol + 2 Fettsäuren + Phosphatgruppe + polarer Kopfgruppe (z. B. Cholin → Phosphatidylcholin, Lecithin).

**Amphiphil:** Hydrophober Schwanz (zwei Fettsäureketten) + hydrophiler Kopf (Phosphat + Cholin). In wässriger Umgebung bilden sie spontan Lipid-Doppelschichten (Zellmembran) oder Micellen.

## Cholesterin — Steroid und Membrankomponente

Cholesterin hat das **Steroid-Grundgerüst** (vier kondensierte Kohlenstoffringe, A-D, mit 17 C in den Ringen). Es ist ein rigides, planares Molekül.

**Funktionen:**
1. **Membranfluidität:** Cholesterin zwischen Phospholipid-Schwänzen → bei hoher Temp. Fluidität ↓ (Ordnung), bei niedriger T Fluidität ↑ (verhindert Kristallisation)
2. **Steroidhormonvorstufe:** Cortisol, Aldosteron, Testosteron, Östrogen, Vitamin D₃
3. **Gallensäurenvorstufe:** Cholat, Chenodesoxycholat (emulgieren Nahrungsfette)
4. **Myelin:** Cholesterin-reich in Nervenisolierung`,
      lernziele: [
        "Gesättigte und ungesättigte Fettsäuren unterscheiden und den Einfluss auf Schmelzpunkt und Membraneigenschaften erläutern",
        "Die amphiphile Struktur von Phospholipiden erklären und ihre Rolle beim Membranaufbau beschreiben",
        "Die Funktionen von Cholesterin (Membranfluidität, Hormonvorstufe, Gallensäuren) nennen",
      ],
      sections: [
        {
          heading: "Phospholipid-Doppelschicht und Membranfluidität",
          text: "Die Zellmembran ist eine Lipid-Doppelschicht aus Phospholipiden (und Sphingolipiden), in die Proteine eingebettet sind (Fluid Mosaic Model, Singer & Nicolson 1972). Phospholipide ordnen sich so, dass ihre hydrophoben Schwänze ins Innere zeigen und ihre hydrophilen Köpfe das wässrige Innen- und Außenmilieu berühren. Die Membranfluidität ist temperaturabhängig: Höherer Anteil ungesättigter Fettsäuren (cis-Knicke) → niedrigerer Schmelzpunkt → mehr Fluidität. Cholesterin reguliert die Fluidität bidirektional: Bei hoher T verhindert es übermäßige Fluidität (ordnend), bei niedriger T verhindert es Erstarrung (verflüssigend). Lipid Rafts: Cholesterinreiche Mikrodomänen in der Membran mit besonderer Signalgebungsfunktion.",
          merksatz: "Phospholipid-Doppelschicht: amphiphil, Kopf außen, Schwanz innen",
        },
        {
          heading: "Cholesterin-Stoffwechsel und klinische Relevanz",
          text: "Cholesterin wird in der Leber (und anderen Zellen) aus Acetyl-CoA synthetisiert (HMG-CoA-Reduktase ist der geschwindigkeitsbestimmende Schritt, gehemmt durch Statine). Transport im Blut als Lipoproteine: VLDL → IDL → LDL (bringt Cholesterin in Gewebe, LDL-Rezeptor-vermittelt); HDL (nimmt Cholesterin aus Gewebe auf → reverse Cholesterintransport). Hypercholesterinämie (LDL ↑) → Oxidiertes LDL → Schaumzellen → Arteriosklerose. Familäre Hypercholesterinämie: LDL-Rezeptor-Defekt (autosomal-dominant) → LDL ↑↑ → frühzeitige KHK. Statine (HMG-CoA-Reduktase-Hemmer, z.B. Simvastatin) senken LDL und reduzieren kardiovaskuläres Risiko.",
          merksatz: "HMG-CoA-Reduktase: geschw.best. Schritt der Cholesterinsynthese → Statin-Angriffspunkt",
        },
      ],
      merksätze: [
        "SFA: gesättigt, fest, hoch-Sdp.; PUFA: ungesättigt, flüssig, cis-Knicke",
        "Phospholipide: amphiphil → Doppelschicht (Membran) und Micellen",
        "Cholesterin: Membranfluidität, Steroidhormon-Vorstufe, Gallensäuren",
      ],
      klinischerBezug: "Gallensteine: übersättigte Galle mit Cholesterin → Kristallisation → Cholesterol-Gallensteine (80 %). Therapie: UDCA (Ursodeoxycholsäure löst Cholesterinsteine auf), laparoskopische Cholezystektomie. Essentielle Fettsäuren (Linolsäure ω-6, α-Linolensäure ω-3) können vom Menschen nicht synthetisiert werden und müssen mit der Nahrung aufgenommen werden.",
      altfrage: {
        question: "Warum sind Pflanzenöle bei Raumtemperatur flüssig, tierische Fette fest?",
        answer: "Pflanzenöle enthalten viele mehrfach ungesättigte Fettsäuren (PUFA) mit cis-Doppelbindungen. Diese cis-Knicke verhindern eine dichte Packung der Fettsäureketten → niedriger Schmelzpunkt → flüssig. Tierische Fette enthalten vorwiegend gesättigte Fettsäuren (SFA), die geradkettig und dicht gepackt sind → starke Van-der-Waals-Kräfte → höherer Schmelzpunkt → fest.",
      },
      selfTest: [
        {
          question: "Was ist der Unterschied zwischen gesättigten und ungesättigten Fettsäuren hinsichtlich Schmelzpunkt?",
          options: [
            "Gesättigte Fettsäuren haben niedrigeren Schmelzpunkt (flüssig)",
            "Ungesättigte Fettsäuren haben höheren Schmelzpunkt (fest)",
            "Gesättigte haben höheren Schmelzpunkt; ungesättigte (cis) haben niedrigeren Schmelzpunkt",
            "Kein Unterschied im Schmelzpunkt",
            "Mehrfach ungesättigte Fettsäuren sind immer fester als einfach ungesättigte",
          ],
          correctIndex: 2,
          explanation: "Gesättigte Fettsäuren (keine C=C) sind geradkettig und können eng packen → starke Van-der-Waals-Kräfte → hoher Schmelzpunkt → fest (Butter, Schmalz). Ungesättigte Fettsäuren mit cis-Doppelbindungen haben Knicke in der Kette → lockere Packung → schwächere Wechselwirkungen → niedriger Schmelzpunkt → flüssig (Olivenöl, Fischöl).",
          hints: [
            "cis-Knicke = lockere Packung = niedrigerer Schmelzpunkt",
            "Fest = gesättigt; flüssig = ungesättigt (bei Raumtemperatur)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum sind Phospholipide für den Membranaufbau geeignet?",
          options: [
            "Weil sie nur hydrophob sind und gut in Wasser lösen",
            "Weil sie amphiphil sind (hydrophiler Kopf + hydrophober Schwanz) und spontan Doppelschichten bilden",
            "Weil sie kovalente Bindungen zwischen Membranen bilden",
            "Weil sie unlöslich sind und Membrangerüst bilden",
            "Weil sie aus vier Ringen (wie Cholesterin) bestehen",
          ],
          correctIndex: 1,
          explanation: "Phospholipide sind amphiphil: Sie haben einen polaren/hydrophilen Kopf (Phosphat + Kopfgruppe, z.B. Cholin) und zwei unpolare/hydrophobe Schwänze (Fettsäureketten). In wässriger Umgebung ordnen sie sich spontan so an, dass Köpfe zum Wasser zeigen und Schwänze ins Innere → Lipid-Doppelschicht. Diese Selbstorganisation (Entropie des Wassers) ist der Hauptantrieb des Membranaufbaus.",
          hints: [
            "Amphiphil = hat hydrophiles und hydrophobes Ende",
            "In Wasser: Schwänze verstecken sich im Inneren",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Funktion hat Cholesterin in der Zellmembran?",
          options: [
            "Es bildet die Hauptstruktur der Membran (>50%)",
            "Es reguliert die Membranfluidität (bei Wärme: ordnend, bei Kälte: verflüssigend)",
            "Es stabilisiert die Membran ausschließlich durch kovalente Bindungen",
            "Es pumpt Ionen durch die Membran",
            "Es dient nur als Vorstufe für Steroidhormone",
          ],
          correctIndex: 1,
          explanation: "Cholesterin ist rigid und planar und legt sich zwischen die Fettsäureschwänze der Phospholipide. Bei hoher Temperatur: Cholesterin ordnet die beweglichen Schwänze → Fluidität nimmt ab (verhindert zu hohe Flüssigkeit). Bei niedriger Temperatur: Cholesterin verhindert die Kristallisation der Schwänze → Fluidität bleibt. Es ist ein 'Fluiditätspuffer'. Außerdem ist Cholesterin reich in Lipid Rafts (Signaldomänen).",
          hints: [
            "Cholesterin stabilisiert in beide Richtungen — nicht nur eine",
            "Lipid Rafts sind cholesterinreich",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was sind essentielle Fettsäuren?",
          options: [
            "Fettsäuren, die vom Körper synthetisiert werden können",
            "Alle gesättigten Fettsäuren",
            "Fettsäuren die der Mensch nicht selbst synthetisieren kann und mit der Nahrung aufnehmen muss",
            "Fettsäuren, die in Mitochondrien abgebaut werden",
            "Fettsäuren ohne Bedeutung für die Gesundheit",
          ],
          correctIndex: 2,
          explanation: "Essentielle Fettsäuren sind mehrfach ungesättigte Fettsäuren (PUFA), die der Mensch nicht selbst synthetisieren kann: Linolsäure (18:2 ω-6) und α-Linolensäure (18:3 ω-3). Der menschliche Körper kann zwar Doppelbindungen einführen (Δ9-Desaturase), aber nicht über die ω-6 oder ω-3 Position hinaus. Aus Linolsäure entstehen Arachidonsäure (Vorläufer der Prostaglandine/Leukotriene), aus ALA entstehen EPA und DHA (antiinflammatorisch).",
          hints: [
            "Essentiell = muss mit Nahrung aufgenommen werden",
            "ω-3 (ALA, EPA, DHA) und ω-6 (Linolsäure, AA) sind essentiell",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Aus welchem Vorläufermolekül werden Steroidhormone (Cortisol, Testosteron) synthetisiert?",
          options: [
            "Glycerol",
            "Glukose",
            "Cholesterin",
            "Phospholipide",
            "Arachidonsäure",
          ],
          correctIndex: 2,
          explanation: "Alle Steroidhormone werden aus Cholesterin synthetisiert: Cholesterin → Pregnenolon (mitochondriales Cytochrom P450scc) → Progesteron → Cortisol/Aldosteron (Nebennierenrinde) oder Testosteron/Östrogen (Gonaden) oder Vitamin D₃ (Haut, Leber, Niere). Das Steroid-Grundgerüst (4 kondensierte C-Ringe) bleibt bei allen Derivaten erhalten — nur die Substituenten und Seitenketten unterscheiden sich.",
          hints: [
            "Steroid-Grundgerüst kommt von Cholesterin",
            "Cortisol, Aldosteron, Testosteron, Östrogen = Steroidhormone",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: "ch-13-04",
      title: "Nukleinsäuren — DNA, RNA und Nukleotide",
      content: `## Nukleotide — Grundbausteine

Ein Nukleotid besteht aus drei Komponenten:
1. **Phosphatgruppe** (ein oder mehrere Phosphatreste)
2. **Pentose** (Zucker): Desoxyribose in DNA (kein OH an C2), Ribose in RNA (OH an C2)
3. **Stickstoffbase** (N-glykosidische Bindung zwischen Base und C1' des Zuckers)

## Purine und Pyrimidine

**Purine** (2-Ring-System, 9 Atome):
- **Adenin (A)** und **Guanin (G)** — in DNA und RNA

**Pyrimidine** (1-Ring-System, 6 Atome):
- **Cytosin (C)** — in DNA und RNA
- **Thymin (T)** — nur in DNA (hat extra Methylgruppe am C5)
- **Uracil (U)** — nur in RNA (ersetzt Thymin)

Merkhilfe: PuRines = Double ring (A und G); PYrimidines = Einzelring (C, T, U)

## DNA — Struktur und Doppelhelix

Die DNA-Doppelhelix (Watson-Crick-Modell, 1953) ist:
- **Antiparallel:** Strang läuft 5'→3', Gegenstrang 3'→5'
- **B-Form** (unter physiologischen Bedingungen): rechtsgängige Helix, 10 bp pro Windung, Steigung 3,4 nm
- **Basenpaare:** A=T (2 Wasserstoffbrücken), G≡C (3 Wasserstoffbrücken)
- Zucker-Phosphat-Rückgrat außen (hydrophil), Basen innen (hydrophob, π-Stacking)

## RNA — Unterschiede zur DNA

- Einzelstrang (kann Sekundärstrukturen bilden: Haarnadeln)
- Ribose statt Desoxyribose (OH an C2)
- Uracil statt Thymin

Typen: mRNA (Vorlage für Translation), tRNA (Aminosäure-Adapter), rRNA (Ribosomstruktur), snRNA, miRNA, siRNA.

## ATP als Energieträger

Adenosin-5'-Triphosphat (ATP): Ribose + Adenin + 3 Phosphatreste. Hydrolyse von ATP → ADP + Pᵢ:
**ΔG° = −30,5 kJ/mol**

Die hohe Energie aus der Hydrolyse beruht auf: Abstoßung der negativen Ladungen im Triphosphat, Resonanzstabilisierung von ADP und Pᵢ, Hydratation der Produkte.`,
      lernziele: [
        "Purine (A, G) und Pyrimidine (C, T, U) unterscheiden und die Basenpaarung in der DNA beschreiben",
        "Die Struktur der DNA-Doppelhelix (antiparallel, B-Form, Basenpaare) erläutern",
        "ATP als Energieträger und den ΔG°-Wert der ATP-Hydrolyse beschreiben",
      ],
      sections: [
        {
          heading: "DNA-Replikation und RNA-Transkription — Überblick",
          text: "Die DNA-Doppelhelix dient als Vorlage für zwei Prozesse: Replikation (DNA → DNA) und Transkription (DNA → RNA). Bei der semikonservativen Replikation entstehen zwei Tochtermoleküle, die je einen alten und einen neuen Strang enthalten. Wichtige Enzyme: DNA-Polymerase (synthetisiert 5'→3', braucht Primer), Primase, Helicase, Ligase. Die Transkription (RNA-Polymerase, keine Primer nötig) erzeugt pre-mRNA, die prozessiert wird (5'-Cap, Poly-A-Schwanz, Spleißen der Introns). Inhibitoren der DNA/RNA-Synthese: Rifampicin (hemmt prokaryotische RNA-Pol), Actinomycin D (DNA-interkalierend), Fluorochinolone (hemmen DNA-Gyrase), Aciclovir (hemmt virale DNA-Pol).",
          merksatz: "DNA: A=T (2 H-Brücken), G≡C (3 H-Brücken); antiparallel, 5'→3'",
        },
        {
          heading: "ATP-Synthese und -Hydrolyse",
          text: "ATP wird in der Zelle hauptsächlich durch drei Mechanismen synthetisiert: Oxidative Phosphorylierung (ATP-Synthase in Mitochondrien, getrieben durch Protonengradient = Chemiosmose), Substratkettenphosphorylierung (Glycolyse, Citratzyklus) und Photophosphorylierung (in Chloroplasten). Die ATP-Synthase (F₀F₁-ATPase) ist eine rotary motor-Maschine: Protonenfluss durch F₀ treibt Rotation der γ-Untereinheit → Konformationsänderungen in F₁ → ADP + Pᵢ → ATP. Bei ATP-Hydrolyse wird die Energie für mechanische Arbeit (Myosin, Kinesin), chemische Arbeit (Biosynthesen) und osmotische Arbeit (Ionenpumpen wie Na⁺/K⁺-ATPase) genutzt.",
          merksatz: "ATP: ΔG°=-30,5 kJ/mol; ATP-Synthase: Protonengradient treibt Rotation",
        },
      ],
      merksätze: [
        "Purine: A+G (Doppelring); Pyrimidine: C+T+U (Einzelring)",
        "DNA: A=T (2 HB), G≡C (3 HB), antiparallel, B-Helix",
        "ATP-Hydrolyse: ΔG° = −30,5 kJ/mol; RNA hat Ribose + Uracil",
      ],
      klinischerBezug: "Antivirale Nukleosidanaloga (Aciclovir gegen HSV, Zidovudin/AZT gegen HIV): Diese Analoga fehlt eine OH-Gruppe am C3' der Ribose (statt 3'-OH ein H oder N₃) → werden von DNA-Polymerase eingebaut → Kettenabbruch (kein weiteres Nukleotid kann addiert werden). Selektivität: virale Polymerasen haben höhere Affinität für die Analoga als zelluläre Polymerasen.",
      altfrage: {
        question: "Worin unterscheiden sich DNA und RNA strukturell?",
        answer: "Drei Hauptunterschiede: 1. Zucker: DNA enthält Desoxyribose (kein 2'-OH), RNA enthält Ribose (2'-OH vorhanden). 2. Base: DNA enthält Thymin, RNA enthält Uracil (Thymin mit Methylgruppe am C5). 3. Strangstruktur: DNA ist normalerweise doppelsträngig (Doppelhelix), RNA ist normalerweise einzelsträngig (kann aber Sekundärstrukturen wie Haarnadeln bilden).",
      },
      selfTest: [
        {
          question: "Welche der folgenden Basen ist eine Purinbase?",
          options: [
            "Thymin",
            "Cytosin",
            "Uracil",
            "Guanin",
            "Alle sind Pyrimidine",
          ],
          correctIndex: 3,
          explanation: "Purine haben ein bicyclisches Ringsystem (Pyrimidin + Imidazol, 9 Atome): Adenin (A) und Guanin (G). Pyrimidine haben einen einfachen 6-Ring (6 Atome): Cytosin (C), Thymin (T) und Uracil (U). Merkhilfe: PuRine = puRe Gold (AG), PYrimidines = CUT (Cytosin, Uracil, Thymin).",
          hints: [
            "Purin = Doppelringsystem; Pyrimidin = Einzelringsystem",
            "A und G sind Purine; C, T, U sind Pyrimidine",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "In der DNA-Doppelhelix paart Guanin (G) mit Cytosin (C) durch:",
          options: [
            "2 Wasserstoffbrücken (wie A-T)",
            "3 Wasserstoffbrücken",
            "1 kovalente Bindung",
            "4 Wasserstoffbrücken",
            "Ionische Bindung",
          ],
          correctIndex: 1,
          explanation: "In der DNA-Doppelhelix bilden G und C drei Wasserstoffbrücken miteinander (G≡C), während A und T nur zwei Wasserstoffbrücken bilden (A=T). Der höhere GC-Gehalt einer DNA erhöht die Schmelztemperatur (Tm), da mehr Energie zum Aufbrechen der stärkeren G≡C-Paarung benötigt wird. Dies ist wichtig für PCR-Design (GC-reiche Primer haben höhere Tm).",
          hints: [
            "G≡C: 3 H-Brücken; A=T: 2 H-Brücken",
            "Mehr H-Brücken = stärkere Paarung = höhere Schmelztemperatur",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen Desoxyribose (DNA) und Ribose (RNA)?",
          options: [
            "Desoxyribose hat 5 C-Atome, Ribose hat 6 C-Atome",
            "Desoxyribose fehlt die OH-Gruppe am C2' (hat nur H), Ribose hat OH an C2'",
            "Ribose ist rechtsdrehend, Desoxyribose linksdrehend",
            "Desoxyribose ist in RNA, Ribose in DNA",
            "Beide Zucker sind strukturell identisch",
          ],
          correctIndex: 1,
          explanation: "Der einzige strukturelle Unterschied zwischen Desoxyribose (in DNA) und Ribose (in RNA) ist die OH-Gruppe am C2': Desoxyribose hat nur H (desoxy = ohne O), Ribose hat OH. Dieser kleine Unterschied hat große Konsequenzen: RNA ist weniger stabil (2'-OH kann in Intramolekular-Hydrolyse involviert sein → RNA kürzer-lebig als DNA). DNA ist chemisch stabiler als RNA — sinnvoll für ein dauerhaftes Speichermolekül.",
          hints: [
            "Desoxy = ohne O = kein 2'-OH",
            "RNA hat 2'-OH → reaktiver, weniger stabil als DNA",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Der ΔG°-Wert der ATP-Hydrolyse beträgt ca. −30,5 kJ/mol. Was bedeutet das?",
          options: [
            "Die Reaktion ist endergonisch (benötigt Energie)",
            "Die Reaktion ist exergonisch und gibt Energie frei, die für zelluläre Arbeit nutzbar ist",
            "Die Reaktion ist im Gleichgewicht (ΔG° = 0)",
            "Die Reaktion läuft nur bei hoher Temperatur ab",
            "Die Energie wird als Wärme direkt abgegeben",
          ],
          correctIndex: 1,
          explanation: "ΔG° = −30,5 kJ/mol (negativ) → die ATP-Hydrolyse ist exergonisch (spontan) und gibt Energie frei. Diese Energie kann durch Kopplung an endergonische Reaktionen (ΔG° > 0) genutzt werden — z.B. Proteinsynthese, Muskelkontraktion, Ionentransport. ATP ist das universelle Energiewährungsmedium der Zelle. In vivo ist ΔG unter physiologischen Bedingungen noch negativer (ca. −50 bis −70 kJ/mol) wegen der niedrigen ADP/ATP-Konzentrationsverhältnisse.",
          hints: [
            "Negatives ΔG° = exergonisch = gibt Energie ab",
            "ATP-Energie wird für endergonische Reaktionen verwendet (Kopplung)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die DNA-Doppelhelix ist FALSCH?",
          options: [
            "Die beiden Stränge sind antiparallel (5'→3' und 3'→5')",
            "Die Basen zeigen ins Innere der Helix",
            "Das Zucker-Phosphat-Rückgrat ist hydrophil und liegt außen",
            "Die Doppelhelix ist linksgängig unter physiologischen Bedingungen",
            "A und T paaren mit 2 Wasserstoffbrücken",
          ],
          correctIndex: 3,
          explanation: "Die B-DNA (unter physiologischen Bedingungen vorherrschend) ist RECHTSGÄNGIG, nicht linksgängig. Die anderen Aussagen sind alle korrekt: antiparallele Stränge, Basen innen (hydrophob, π-Stacking), Zucker-Phosphat außen (hydrophil), A=T (2 HB). Die linksgängige Z-DNA ist eine seltene Form unter bestimmten Salzbedingungen und in GC-reichen Sequenzen.",
          hints: [
            "B-DNA: rechtsgängig ist die physiologische Form",
            "Linksgängig = Z-DNA (selten, unter speziellen Bedingungen)",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-13-05",
      title: "Enzyme und Vitamine",
      content: `## Enzymklassen — EC-Klassifikation

Enzyme werden nach der katalysierten Reaktion in sechs Hauptklassen eingeteilt:

1. **Oxidoreduktasen:** Oxidation-Reduktion (Elektronenübertragung). Beispiele: Lactatdehydrogenase (LDH), Alkohol-Dehydrogenase (ADH), Cytochrom-c-Oxidase.
2. **Transferasen:** Übertragung einer chemischen Gruppe (Methyl, Aminogruppe, Phosphat). Beispiele: Aminotransferasen (ALT, AST), Kinasen (Phosphatgruppe).
3. **Hydrolasen:** Hydrolyse (Spaltung unter H₂O-Addition). Beispiele: Proteasen (Trypsin, Pepsin), Lipasen, Amylase, Phosphatasen.
4. **Lyasen:** Addition oder Elimination (kein Wasser, keine Redox). Beispiele: Pyruvat-Decarboxylase, Fumarase.
5. **Isomerasen:** Isomerisierung (Umwandlung von Isomeren). Beispiele: Phosphoglucoisomerase, Prolin-Isomerase (Peptidyl-Prolyl-Isomerase).
6. **Ligasen:** Verknüpfung zweier Moleküle unter ATP-Verbrauch. Beispiele: DNA-Ligase, Acetyl-CoA-Carboxylase, Glutaminsynthetase.

## Coenzyme und Cofaktoren

Viele Enzyme benötigen nicht-proteinische Hilfsmoleküle:

- **Cofaktoren:** Metallionen (Zn²⁺ in Carboxypeptidasen, Fe²⁺ im Häm, Mg²⁺ für Kinasen/DNA-Polymerase)
- **Coenzyme (organisch):** NAD⁺ (Vit. B3-Derivat), FAD (Vit. B2-Derivat), Coenzym A (Vit. B5-Derivat), Thiaminpyrophosphat (Vit. B1), Pyridoxalphosphat (Vit. B6), Tetrahydrofolat (Folsäure-Derivat), Methylcobalamin (Vit. B12-Derivat)

## Wasserlösliche Vitamine als Coenzym-Vorstufen

| Vitamin | Coenzym | Funktion |
|---|---|---|
| B1 (Thiamin) | TPP | Decarboxylierung (Pyruvat-DH) |
| B2 (Riboflavin) | FAD/FMN | Redox (Atmungskette) |
| B3 (Niacin) | NAD⁺/NADP⁺ | Redox (überall) |
| B5 (Pantothensäure) | CoA | Acylgruppenübertragung |
| B6 (Pyridoxin) | PLP | Aminosäuremetabolismus |
| B12 (Cobalamin) | Methylcobalamin | Methylgruppen, Folsäure-Zyklus |
| Folsäure | THF | Einkohlenstoff-Übertragung, DNA-Synthese |
| C (Ascorbinsäure) | — | Antioxidans, Kollagensynthese (Prolyl-Hydroxylase) |

## Fettlösliche Vitamine ADEK

- **Vitamin A** (Retinol): Sehzyklus (Retinal), Zelldifferenzierung (Retinsäure)
- **Vitamin D** (Calcitriol): Ca²⁺/PO₄-Homöostase, Parathormon-Gegenspieler
- **Vitamin E** (Tocopherol): Antioxidans (Membranen), verhindert Lipidperoxidation
- **Vitamin K** (Phylloquinon): Carboxylierung von Gerinnungsfaktoren II, VII, IX, X, Protein C/S

## Vitaminmangelsyndrome

- Vit. C-Mangel → Skorbut (defekte Kollagensynthese: Zahnfleischbluten, Hämorrhagien)
- Vit. B1-Mangel → Beriberi (Neuropathie, Herzinsuffizienz) / Wernicke-Enzephalopathie (Alkoholiker)
- Vit. D-Mangel → Rachitis (Kinder) / Osteomalazie (Erwachsene)
- Vit. B3-Mangel → Pellagra (4 Ds: Dermatitis, Diarrhö, Demenz, Death)
- Folsäuremangel → Neuralrohrdefekte (Spina bifida), megaloblastäre Anämie`,
      lernziele: [
        "Die sechs Enzymklassen nach EC-Klassifikation benennen und je ein Beispiel nennen",
        "Wichtige Coenzyme und ihre Vitaminvorstufen zuordnen (NAD⁺/B3, FAD/B2, CoA/B5, TPP/B1)",
        "Die klinischen Symptome wichtiger Vitaminmangelzustände nennen",
      ],
      sections: [
        {
          heading: "Coenzyme als Vitaminderivate",
          text: "Viele Vitamine des B-Komplexes sind Vorstufen von Coenzymen, die in zentralen Stoffwechselreaktionen unentbehrlich sind. Vitamin B1 (Thiamin) wird zu Thiaminpyrophosphat (TPP), dem Coenzym der Pyruvat-Dehydrogenase und α-Ketoglutarat-Dehydrogenase (Citratzyklus). B1-Mangel → TPP-Mangel → Hemmung dieser Schlüsselenzyme → Beriberi oder Wernicke-Enzephalopathie. Vitamin B12 (Cobalamin) enthält Kobalt und katalysiert als Methylcobalamin die Remethylierung von Homocystein zu Methionin (zusammen mit Folsäure). B12-Mangel → Methionin-Mangel + Methylmalonat-Akkumulation + megaloblastäre Anämie + funikuläre Myelose.",
          merksatz: "B1→TPP (Pyruvat-DH); B2→FAD; B3→NAD⁺; B5→CoA; B6→PLP; B12→Methylcobalamin",
        },
        {
          heading: "Vitaminmangel-Syndrome klinisch",
          text: "Skorbut (Vitamin-C-Mangel) trat historisch bei Seeleuten auf. Vitamin C ist Cofaktor der Prolyl- und Lysyl-Hydroxylase (Kollagen-Synthese: Hydroxylierung von Prolin und Lysin nötig für Tripelhelix-Stabilität). Mangel → brüchiges Kollagen → Zahnfleischbluten, Wundheilungsstörungen, petechiale Hämorrhagien. Rachitis (Vitamin-D-Mangel in Wachstumsphase) führt zu weichen, biegsamen Knochen (Ausbiegung der Beine) durch gestörte Mineralisierung. Pellagra (Vit. B3-Mangel, Tryptophan-Mangel) bei maisbasierter Ernährung (Mais enthält Niacin in nicht bioverfügbarer Form — traditionelles Nixtamal-Verfahren macht es verfügbar). 4 Ds: Dermatitis (lichtempfindlich), Diarrhö, Demenz, Death.",
          merksatz: "Skorbut: Vit. C; Beriberi/Wernicke: Vit. B1; Rachitis: Vit. D; Pellagra: Vit. B3",
        },
      ],
      merksätze: [
        "6 Enzymklassen: Oxidored., Transferase, Hydrolase, Lyase, Isomerase, Ligase",
        "B1→TPP, B2→FAD, B3→NAD⁺, B5→CoA — Coenzyme aus Vitaminen",
        "ADEK fettlöslich; Mangel: Skorbut(C), Beriberi(B1), Rachitis(D), Pellagra(B3)",
      ],
      klinischerBezug: "Warfarin (Phenprocoumon) hemmt die Vitamin-K-abhängige Carboxylase → Gerinnungsfaktoren II, VII, IX, X bleiben inaktiv (können kein Ca²⁺ binden) → Antikoagulation. Antagonist: Vitamin K (Phytomenadion). Folsäuresupplementation (400–800 μg/d) vor und in der Frühschwangerschaft reduziert Neuralrohrdefekte um >70 % (Spina bifida, Anenzephalie).",
      altfrage: {
        question: "Warum ist Vitamin C für die Kollagensynthese notwendig?",
        answer: "Vitamin C (Ascorbinsäure) ist ein essentieller Cofaktor der Prolyl-3-Hydroxylase und Lysyl-Hydroxylase. Diese Enzyme hydroxylieren Prolin- und Lysin-Reste in der Kollagen-Vorstufe (Prokollagen). Die Hydroxylierungen sind für die Ausbildung der stabilen Tripelhelix (Wasserstoffbrücken über Hydroxyprolin) und für die intermolekulare Quervernetzung (über Hydroxylysin) notwendig. Ohne Hydroxylierung → instabiles, brüchiges Kollagen → Skorbut.",
      },
      selfTest: [
        {
          question: "Zu welcher Enzymklasse gehört die Lactatdehydrogenase (LDH)?",
          options: [
            "Hydrolase (spaltet unter H₂O-Addition)",
            "Transferase (überträgt Phosphatgruppe)",
            "Oxidoreduktase (katalysiert Redox-Reaktion: Laktat ⇌ Pyruvat + NADH)",
            "Lyase (Decarboxylierung)",
            "Isomerase (Isomerisierung)",
          ],
          correctIndex: 2,
          explanation: "LDH katalysiert die reversible Reaktion: Laktat + NAD⁺ ⇌ Pyruvat + NADH + H⁺. Da Elektronen (in Form von Wasserstoff) übertragen werden (NAD⁺ wird zu NADH reduziert, Laktat wird zu Pyruvat oxidiert), ist LDH eine Oxidoreduktase (EC 1). Klinisch: LDH ist ein unspezifischer Marker für Zelluntergang (Herzinfarkt, Hämolyse, Lebererkrankung).",
          hints: [
            "Enzymklasse 1 = Oxidoreduktasen: Redox-Reaktionen mit NAD⁺/NADH",
            "LDH: Laktat ⇌ Pyruvat — wird NAD⁺ reduziert?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Vitamin ist die Vorstufe von FAD und FMN?",
          options: [
            "Vitamin B1 (Thiamin)",
            "Vitamin B2 (Riboflavin)",
            "Vitamin B3 (Niacin)",
            "Vitamin B5 (Pantothensäure)",
            "Vitamin B6 (Pyridoxin)",
          ],
          correctIndex: 1,
          explanation: "Vitamin B2 (Riboflavin) ist die Vorstufe von FAD (Flavinadenindinukleotid) und FMN (Flavinmononukleotid). FAD/FMN sind Coenzyme in Oxidoreduktasen wie Succinat-Dehydrogenase (Citratzyklus, Komplex II der Atmungskette), Acyl-CoA-Dehydrogenase (β-Oxidation), und NADH-Dehydrogenase (Komplex I).",
          hints: [
            "FAD enthält 'Flavin' → Riboflavin",
            "B2 = Riboflavin → FAD/FMN",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Krankheitsbild entsteht durch Vitamin-C-Mangel?",
          options: [
            "Rachitis (weiche Knochen)",
            "Beriberi (Neuropathie)",
            "Skorbut (Zahnfleischbluten, Hämorrhagien)",
            "Pellagra (Dermatitis, Demenz)",
            "Perniziöse Anämie",
          ],
          correctIndex: 2,
          explanation: "Vitamin-C-Mangel führt zu Skorbut: Vitamin C ist Cofaktor der Kollagen-Hydroxylaseenzymen (Prolyl- und Lysyl-Hydroxylase). Ohne Hydroxylierung ist Kollagen instabil → Gefäßwände brüchig → Zahnfleischbluten, petechiale Hämorrhagien, Wundheilungsstörungen, Knochenschmerzen. Historisch gefürchtet bei Seeleuten ohne frisches Obst/Gemüse. Vitamin-D-Mangel → Rachitis; B1-Mangel → Beriberi; B3-Mangel → Pellagra; B12-Mangel → Perniziöse Anämie.",
          hints: [
            "Skorbut: historische Seefahrerkrankheit durch Mangel an welchem Vitamin?",
            "Kollagen-Synthese erfordert welches Vitamin?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warfarin hemmt die Wirkung von Vitamin K. Was ist die Folge?",
          options: [
            "Vitamin-K-Mangelsymptome im Knochen (Osteomalazie)",
            "Inaktivierung der Gerinnungsfaktoren II, VII, IX, X → Antikoagulation",
            "Erhöhte Calcium-Resorption im Darm",
            "Hemmung der LDL-Cholesterol-Synthese",
            "Erhöhtes Blutungsrisiko durch Thrombozytenmangel",
          ],
          correctIndex: 1,
          explanation: "Vitamin K ist Cofaktor der γ-Glutamylcarboxylase, die Glutamylreste in den Gerinnungsfaktoren II (Prothrombin), VII, IX, X sowie Protein C und S carboxyliert. Diese Carboxylierung ist nötig für die Ca²⁺-Bindung (und damit Aktivierung) der Faktoren. Warfarin hemmt die Vitamin-K-Epoxid-Reduktase → weniger aktives Vitamin K → Faktoren bleiben uncarboxyliert → Antikoagulation → erhöhtes Blutungsrisiko.",
          hints: [
            "Vitamin K: Gerinnungsfaktoren II, VII, IX, X",
            "Warfarin = Vitamin-K-Antagonist → welche Faktoren fallen aus?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Funktion von Coenzym A (CoA)?",
          options: [
            "CoA ist ein Elektronenakzeptor (wie NAD⁺)",
            "CoA überträgt Acylgruppen (z.B. Acetylgruppen) auf andere Moleküle",
            "CoA ist ein Protonenpuffer",
            "CoA ist Teil der DNA-Helikase",
            "CoA aktiviert ATP durch Phosphorylierung",
          ],
          correctIndex: 1,
          explanation: "Coenzym A (CoA, aus Vitamin B5/Pantothensäure) trägt über seine Thiolgruppe (-SH) Acylgruppen als Thioester: Acetyl-CoA (CH₃-CO-S-CoA) ist die aktivierte Form der Essigsäure und Ausgangspunkt für Citratzyklus, Fettsäuresynthese und Cholesterinsynthese. Die Thioesterbindung ist energiereich (ΔG° ≈ −31 kJ/mol bei Hydrolyse). CoA ist essentiell für den Fettsäuremetabolismus (β-Oxidation: Acyl-CoA-Intermediate) und die Biosynthese von Aminosäuren, Ketonen, Cholesterin.",
          hints: [
            "CoA enthält -SH Gruppe → bindet Acylgruppen als Thioester",
            "Acetyl-CoA ist das zentrale CoA-Derivat im Stoffwechsel",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
