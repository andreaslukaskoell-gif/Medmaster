export const fragenPart5 = [
  {
    id: "ch-q-201",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche der folgenden Aussagen über Monosaccharide trifft zu?",
    optionen: [
      "Glucose und Fructose sind Ketosen",
      "Ribose ist eine Hexose",
      "Glucose liegt in wässriger Lösung überwiegend als offenkettige Form vor",
      "D-Glucose und D-Fructose sind Isomere mit der Summenformel C₆H₁₂O₆",
      "Alle Monosaccharide haben die allgemeine Formel Cₙ(H₂O)ₙ₊₁",
    ],
    korrekteAntwort: 3,
    erklärung:
      "D-Glucose (Aldose) und D-Fructose (Ketose) sind beide Hexosen mit der Summenformel C₆H₁₂O₆ und somit Konstitutionsisomere. Glucose ist eine Aldose (keine Ketose), Ribose ist eine Pentose (C₅H₁₀O₅), und in Lösung liegt Glucose überwiegend ringförmig vor (Pyranoseform).",
    strategieTipp:
      "Merke: Glucose = Aldohexose, Fructose = Ketohexose, beide C₆H₁₂O₆. Die Ringform dominiert in wässriger Lösung (>99%).",
  },
  {
    id: "ch-q-202",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was entsteht bei der Verknüpfung zweier Monosaccharide?",
    optionen: [
      "Ein Polysaccharid",
      "Ein Disaccharid über eine glykosidische Bindung",
      "Ein Oligopeptid",
      "Eine Esterbindung",
      "Ein Aminozucker",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Zwei Monosaccharide verbinden sich unter Wasserabspaltung (Kondensation) zu einem Disaccharid. Die Bindung zwischen den beiden Zuckermolekülen wird glykosidische Bindung genannt (z.B. α-1,4-glykosidisch bei Maltose).",
    strategieTipp:
      "Glykosidische Bindung = Bindungstyp zwischen Zuckern. 2 Monosaccharide = Disaccharid, viele = Polysaccharid.",
  },
  {
    id: "ch-q-203",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage über die Haworth-Projektion der α-D-Glucose ist korrekt?",
    optionen: [
      "Die OH-Gruppe am C1-Atom zeigt nach oben (axial)",
      "Die OH-Gruppe am C1-Atom zeigt nach unten (axial)",
      "Das Molekül bildet einen Fünfring (Furanose)",
      "Die CH₂OH-Gruppe am C5 zeigt nach unten",
      "Die OH-Gruppe am C2 steht immer in trans-Position zur OH-Gruppe am C1",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei α-D-Glucose in der Haworth-Projektion zeigt die anomere OH-Gruppe am C1 nach unten (auf der gleichen Seite wie der Sauerstoff im Ring). Bei β-D-Glucose zeigt sie nach oben. Glucose bildet einen Sechsring (Pyranose), und die CH₂OH-Gruppe zeigt nach oben.",
    strategieTipp:
      "α = OH unten, β = OH oben (am anomeren C1). Glucose = Pyranose (6-Ring), Fructose = Furanose (5-Ring) in Saccharose.",
  },
  {
    id: "ch-q-204",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welches Disaccharid wird durch α-1,4-glykosidische Bindung zwischen zwei Glucosemolekülen gebildet?",
    optionen: ["Saccharose", "Lactose", "Maltose", "Cellobiose", "Trehalose"],
    korrekteAntwort: 2,
    erklärung:
      "Maltose (Malzzucker) besteht aus zwei α-D-Glucosemolekülen, die α-1,4-glykosidisch verknüpft sind. Cellobiose hat β-1,4-Bindung, Saccharose besteht aus Glucose und Fructose, Lactose aus Galactose und Glucose, Trehalose hat α-1,1-Bindung.",
    strategieTipp:
      "Maltose = 2 Glucose α-1,4. Cellobiose = 2 Glucose β-1,4. Bindungstyp und Monomere bestimmen das Disaccharid.",
  },
  {
    id: "ch-q-205",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Funktion hat Cellulose in Pflanzen?",
    optionen: [
      "Energiespeicher",
      "Strukturelles Stützelement der Zellwand",
      "Informationsspeicher",
      "Katalysator für biochemische Reaktionen",
      "Transportmolekül für Glucose",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Cellulose ist ein β-1,4-verknüpftes Glucosepolymer und das Hauptstrukturpolysaccharid pflanzlicher Zellwände. Die β-Konfiguration ermöglicht parallele Anordnung und Wasserstoffbrücken zwischen den Ketten, was extreme Festigkeit verleiht. Energiespeicher ist Stärke.",
    strategieTipp:
      "Cellulose = Struktur (β-Bindung, unverdaulich für Menschen). Stärke = Energie (α-Bindung, verdaulich).",
  },
  {
    id: "ch-q-206",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Warum können Menschen Cellulose nicht verdauen?",
    optionen: [
      "Cellulose ist ein D-Zucker, Menschen können nur L-Zucker verdauen",
      "Menschen besitzen keine Enzyme zur Spaltung von β-1,4-glykosidischen Bindungen",
      "Cellulose ist wasserunlöslich",
      "Die Molekülmasse ist zu hoch",
      "Cellulose enthält keine Glucose",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der menschliche Verdauungstrakt produziert keine Cellulase-Enzyme, die β-1,4-glykosidische Bindungen spalten können. Wir haben nur Amylase für α-1,4-Bindungen (Stärke). Wiederkäür haben Bakterien im Pansen, die Cellulase produzieren.",
    strategieTipp:
      "β-Bindung (Cellulose) = nicht verdaubar für Menschen. α-Bindung (Stärke, Glykogen) = verdaubar durch Amylase.",
  },
  {
    id: "ch-q-207",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welches Strukturmerkmal unterscheidet Amylose von Amylopektin?",
    optionen: [
      "Amylose hat β-1,4-Bindungen, Amylopektin α-1,4-Bindungen",
      "Amylose besteht aus Fructose, Amylopektin aus Glucose",
      "Amylose ist unverzweigt, Amylopektin hat α-1,6-Verzweigungen",
      "Amylose ist wasserlöslich, Amylopektin nicht",
      "Amylose bildet Doppelhelices, Amylopektin nicht",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Amylose ist ein unverzweigtes α-1,4-verknüpftes Glucosepolymer (Helix-Struktur), während Amylopektin zusätzlich α-1,6-glykosidische Verzweigungen aufweist (alle 20-25 Glucoseeinheiten). Beide sind Bestandteile der Stärke und bestehen aus Glucose.",
    strategieTipp:
      "Stärke = Amylose (unverzweigt, ~20%) + Amylopektin (verzweigt, ~80%). Glykogen ähnelt Amylopektin, aber stärker verzweigt.",
  },
  {
    id: "ch-q-208",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Mit welchem Reagenz lässt sich reduzierende Wirkung von Zuckern nachweisen?",
    optionen: [
      "Biuret-Reagenz",
      "Fehling-Reagenz",
      "Ninhydrin",
      "Phenolphthalein",
      "Lugolsche Lösung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Fehling-Reagenz (Cu²⁺-Ionen in alkalischer Lösung) wird durch reduzierende Zucker zu Cu₂O (roter Niederschlag) reduziert. Glucose, Fructose, Maltose sind reduzierend (freie Aldehydgruppe). Saccharose ist nicht reduzierend. Lugolsche Lösung weist Stärke nach (blau-violette Färbung).",
    strategieTipp:
      "Fehling = reduzierende Zucker (rot). Lugol = Stärke (blau). Biuret = Proteine (violett). Ninhydrin = Aminosäuren (violett).",
  },
  {
    id: "ch-q-209",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Funktion haben Proteine NICHT?",
    optionen: [
      "Katalyse biochemischer Reaktionen",
      "Strukturbildung (z.B. Kollagen)",
      "Transport von Molekülen (z.B. Hämoglobin)",
      "Langfristige Energiespeicherung",
      "Immunabwehr (Antikörper)",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Proteine haben vielfältige Funktionen: Enzyme (Katalyse), Strukturproteine (Kollagen, Keratin), Transportproteine (Hämoglobin), Antikörper (Immunsystem), Hormone, Motorproteine. Langfristige Energiespeicherung erfolgt durch Fette und Kohlenhydrate (Glykogen, Stärke), nicht durch Proteine.",
    strategieTipp:
      "Hauptfunktionen der Proteine: Struktur, Katalyse, Transport, Signalübertragung, Bewegung, Abwehr. Energie ist sekundär.",
  },
  {
    id: "ch-q-210",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele essentielle Aminosäuren gibt es beim Menschen?",
    optionen: ["5", "8", "9", "12", "20"],
    korrekteAntwort: 2,
    erklärung:
      "Es gibt 9 essentielle Aminosäuren beim erwachsenen Menschen: Histidin, Isoleucin, Leucin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan und Valin. Diese müssen mit der Nahrung aufgenommen werden, da der Körper sie nicht selbst synthetisieren kann.",
    strategieTipp:
      'Merksatz: "PVT TIM HaLl" (Phenylalanin, Valin, Threonin, Tryptophan, Isoleucin, Methionin, Histidin, Leucin, Lysin) = 9 essentielle AS.',
  },
  {
    id: "ch-q-211",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aminosäure besitzt eine Thiolgruppe (-SH) in ihrer Seitenkette?",
    optionen: ["Methionin", "Serin", "Cystein", "Tyrosin", "Threonin"],
    korrekteAntwort: 2,
    erklärung:
      "Cystein besitzt eine Thiolgruppe (-SH) in der Seitenkette, die mit einer anderen Cystein-SH-Gruppe unter Oxidation eine Disulfidbrücke (-S-S-) bilden kann. Diese Disulfidbrücken stabilisieren die Tertiär- und Quartärstruktur von Proteinen. Methionin enthält Schwefel, aber als Thiöther.",
    strategieTipp:
      "Cystein = -SH (kann Disulfidbrücken bilden). Methionin = -S-CH₃ (Thiöther). Serin/Threonin = -OH (Alkohol).",
  },
  {
    id: "ch-q-212",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist eine Peptidbindung?",
    optionen: [
      "Eine Esterbindung zwischen Aminosäure und Fettsäure",
      "Eine glykosidische Bindung zwischen Zuckern",
      "Eine Amidbindung zwischen Carboxylgruppe und Aminogruppe zweier Aminosäuren",
      "Eine Wasserstoffbrückenbindung zwischen zwei Proteinketten",
      "Eine ionische Bindung zwischen sauren und basischen Aminosäuren",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Peptidbindung ist eine Amidbindung (-CO-NH-), die durch Kondensationsreaktion zwischen der Carboxylgruppe (-COOH) einer Aminosäure und der Aminogruppe (-NH₂) einer anderen entsteht. Dabei wird ein Wassermolekül abgespalten. Diese Bindung ist planar und partiell doppelbindungscharakter.",
    strategieTipp:
      "Peptidbindung = Amidbindung = -CO-NH-. Entsteht durch Kondensation (Wasserabspaltung) zwischen COOH und NH₂.",
  },
  {
    id: "ch-q-213",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welcher Begriff beschreibt die Abfolge der Aminosäuren in einem Protein?",
    optionen: [
      "Primärstruktur",
      "Sekundärstruktur",
      "Tertiärstruktur",
      "Quartärstruktur",
      "Konformation",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Die Primärstruktur ist die lineare Aminosäuresequenz eines Proteins, festgelegt durch Peptidbindungen. Die Sekundärstruktur beschreibt lokale räumliche Anordnungen (α-Helix, β-Faltblatt), die Tertiärstruktur die gesamte 3D-Faltung, die Quartärstruktur die Anordnung mehrerer Untereinheiten.",
    strategieTipp:
      "1° = Sequenz (welche AS), 2° = lokale Faltung (Helix/Blatt), 3° = gesamte 3D-Form, 4° = mehrere Ketten.",
  },
  {
    id: "ch-q-214",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welche Sekundärstruktur wird hauptsächlich durch Wasserstoffbrücken zwischen der C=O-Gruppe einer Aminosäure und der N-H-Gruppe vier Reste weiter stabilisiert?",
    optionen: ["β-Faltblatt", "α-Helix", "Random Coil", "Triple-Helix", "Disulfidbrücke"],
    korrekteAntwort: 1,
    erklärung:
      "Die α-Helix wird durch Wasserstoffbrücken zwischen der C=O-Gruppe der Aminosäure n und der N-H-Gruppe der Aminosäure n+4 stabilisiert. Diese intramolekularen H-Brücken verlaufen parallel zur Helixachse. Das β-Faltblatt wird durch intermolekulare H-Brücken zwischen benachbarten Strängen stabilisiert.",
    strategieTipp:
      "α-Helix = H-Brücken innerhalb einer Kette (i zu i+4). β-Faltblatt = H-Brücken zwischen verschiedenen Strängen.",
  },
  {
    id: "ch-q-215",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Wechselwirkungen stabilisieren die Tertiärstruktur von Proteinen NICHT?",
    optionen: [
      "Disulfidbrücken zwischen Cysteinresten",
      "Hydrophobe Wechselwirkungen",
      "Wasserstoffbrückenbindungen",
      "Peptidbindungen",
      "Ionische Wechselwirkungen (Salzbrücken)",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Peptidbindungen definieren die Primärstruktur (kovalente Bindungen zwischen Aminosäuren), nicht die Tertiärstruktur. Die 3D-Faltung wird stabilisiert durch: Disulfidbrücken (kovalent), hydrophobe Effekte, Wasserstoffbrücken, ionische Wechselwirkungen und Van-der-Waals-Kräfte zwischen Seitenketten.",
    strategieTipp:
      "Primärstruktur = Peptidbindungen (kovalent). Tertiärstruktur = Wechselwirkungen der Seitenketten (meist nicht-kovalent, außer -S-S-).",
  },
  {
    id: "ch-q-216",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was bedeutet Denaturierung eines Proteins?",
    optionen: [
      "Synthese neuer Proteine aus Aminosäuren",
      "Spaltung von Peptidbindungen",
      "Verlust der nativen räumlichen Struktur",
      "Oxidation von Aminosäureresten",
      "Bildung von Quartärstrukturen",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Denaturierung ist der Verlust der nativen Sekundär-, Tertiär- und Quartärstruktur eines Proteins durch äußere Einflüsse (Hitze, pH-Änderung, organische Lösungsmittel). Die Primärstruktur bleibt erhalten, aber das Protein verliert meist seine biologische Funktion. Beispiel: Eiklar beim Kochen.",
    strategieTipp:
      "Denaturierung = Strukturverlust (2°/3°/4°), Primärstruktur bleibt. Ursachen: Hitze, pH, Chemikalien. Oft irreversibel.",
  },
  {
    id: "ch-q-217",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Nachweisreaktion färbt Proteine violett?",
    optionen: [
      "Fehling-Probe",
      "Jod-Stärke-Reaktion",
      "Biuret-Reaktion",
      "Benedict-Probe",
      "Silberspiegel-Probe",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Biuret-Reaktion weist Peptidbindungen nach. In alkalischer Lösung bildet Cu²⁺ mit mindestens zwei Peptidbindungen einen violetten Komplex. Die Reaktion ist nach Biuret (H₂N-CO-NH-CO-NH₂) benannt, das ebenfalls positiv reagiert.",
    strategieTipp:
      "Biuret = Protein-Nachweis (violett). Benötigt mindestens 2 Peptidbindungen. Funktioniert nicht bei einzelnen Aminosäuren.",
  },
  {
    id: "ch-q-218",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aminosäure ist achiral und besitzt kein Stereozentrum?",
    optionen: ["Alanin", "Glycin", "Valin", "Serin", "Leucin"],
    korrekteAntwort: 1,
    erklärung:
      "Glycin (NH₂-CH₂-COOH) ist die einzige achirale proteinogene Aminosäure, da das α-C-Atom zwei Wasserstoffatome trägt und somit kein Stereozentrum ist. Alle anderen 19 proteinogenen Aminosäuren sind chiral und liegen in L-Konfiguration vor.",
    strategieTipp:
      "Glycin = kleinste AS, achiral (R = H). Alle anderen proteinogenen AS = chiral, L-Form. Glycin hat keine Seitenkette außer H.",
  },
  {
    id: "ch-q-219",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Bei welchem pH-Wert liegt eine Aminosäure überwiegend als Zwitterion vor?",
    optionen: [
      "Bei pH 1 (stark sauer)",
      "Bei pH 14 (stark basisch)",
      "Am isölektrischen Punkt",
      "Nur in organischen Lösungsmitteln",
      "Zwitterionen bilden sich nicht bei Aminosäuren",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Am isölektrischen Punkt (pI) liegt die Aminosäure überwiegend als Zwitterion vor: Die Aminogruppe ist protoniert (-NH₃⁺), die Carboxylgruppe deprotoniert (-COO⁻). Die Nettoladung ist null. Bei niedrigem pH überwiegt die Kationform (+1), bei hohem pH die Anionform (-1).",
    strategieTipp:
      "Isölektrischer Punkt = Zwitterion (±0). pH < pI = Kation (+). pH > pI = Anion (-). Wichtig für Elektrophorese.",
  },
  {
    id: "ch-q-220",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage über Fette (Triacylglycerine) ist korrekt?",
    optionen: [
      "Sie bestehen aus Glycerin und drei Aminosäuren",
      "Sie sind Polymere aus Monosacchariden",
      "Sie entstehen durch Veresterung von Glycerin mit drei Fettsäuren",
      "Sie sind wasserlöslich und hydrophil",
      "Sie enthalten immer Phosphat-Gruppen",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Fette (Triacylglycerine, Triglyceride) entstehen durch Veresterung der drei OH-Gruppen des Glycerins mit drei Fettsäuren unter Wasserabspaltung. Sie sind hydrophob (wasserunlöslich) und dienen als Energiespeicher. Phospholipide enthalten Phosphat, Fette nicht.",
    strategieTipp:
      "Fett = Glycerin + 3 Fettsäuren (Ester). Phospholipid = Glycerin + 2 Fettsäuren + Phosphat. Fette sind hydrophob.",
  },
  {
    id: "ch-q-221",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Fettsäuren enthalten Doppelbindungen?",
    optionen: [
      "Gesättigte Fettsäuren",
      "Ungesättigte Fettsäuren",
      "Nur kurzkettige Fettsäuren",
      "Aminosäuren",
      "Keine Fettsäuren enthalten Doppelbindungen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ungesättigte Fettsäuren enthalten eine (einfach ungesättigt) oder mehrere (mehrfach ungesättigt) C=C-Doppelbindungen. Gesättigte Fettsäuren haben nur Einfachbindungen. Die Doppelbindungen liegen meist in cis-Konfiguration vor und verursachen Knicke in der Kohlenstoffkette.",
    strategieTipp:
      "Gesättigt = nur C-C (z.B. Palmitinsäure). Ungesättigt = C=C (z.B. Ölsäure). Cis-Doppelbindung = Knick = niedriger Schmelzpunkt.",
  },
  {
    id: "ch-q-222",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Warum haben ungesättigte Fette einen niedrigeren Schmelzpunkt als gesättigte Fette?",
    optionen: [
      "Sie haben eine geringere Molekülmasse",
      "Sie sind polarer",
      "Die cis-Doppelbindungen verhindern dichte Packung der Moleküle",
      "Sie bilden keine Van-der-Waals-Kräfte",
      "Sie enthalten weniger Kohlenstoffatome",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Cis-Doppelbindungen in ungesättigten Fettsäuren erzeugen Knicke in der Kohlenstoffkette, wodurch die Moleküle sich nicht so dicht aneinander lagern können. Dies reduziert Van-der-Waals-Wechselwirkungen und senkt den Schmelzpunkt. Deshalb sind ungesättigte Fette bei Raumtemperatur flüssig (Öle).",
    strategieTipp:
      "Cis-Doppelbindung = Knick = lockere Packung = niedriger Schmelzpunkt = flüssig (Öl). Gesättigt = gerade = fest (Fett).",
  },
  {
    id: "ch-q-223",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was sind Omega-3-Fettsäuren?",
    optionen: [
      "Gesättigte Fettsäuren mit drei Kohlenstoffatomen",
      "Fettsäuren mit drei Doppelbindungen",
      "Fettsäuren, bei denen die erste Doppelbindung am dritten C-Atom vom Methyl-Ende liegt",
      "Fettsäuren mit drei Carboxylgruppen",
      "Dreifach ungesättigte Aminosäuren",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Omega-3-Fettsäuren sind ungesättigte Fettsäuren, bei denen die erste Doppelbindung am dritten Kohlenstoffatom vom Methyl-Ende (ω-Ende) der Kette liegt. Beispiele: α-Linolensäure (ALA), Eicosapentänsäure (EPA), Docosahexänsäure (DHA). Sie sind essentiell.",
    strategieTipp:
      "Omega-3 = erste C=C am 3. C vom CH₃-Ende. Omega-6 = am 6. C. Zählung vom Methyl-Ende (ω), nicht vom COOH-Ende.",
  },
  {
    id: "ch-q-224",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Lipidklasse bildet die Hauptkomponente biologischer Membranen?",
    optionen: ["Triacylglycerine (Fette)", "Steroide", "Phospholipide", "Wachse", "Fettsäuren"],
    korrekteAntwort: 2,
    erklärung:
      "Phospholipide sind amphipathische Moleküle mit hydrophilem Kopf (Phosphat + polarer Rest) und hydrophoben Schwänzen (2 Fettsäuren). In wässriger Umgebung bilden sie spontan Doppelschichten (Lipid-Bilayer), die Grundstruktur aller biologischen Membranen.",
    strategieTipp:
      "Membran = Phospholipid-Doppelschicht. Amphipathisch = hydrophiler Kopf + hydrophobe Schwänze. Ermöglicht Kompartimentierung.",
  },
  {
    id: "ch-q-225",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was passiert bei der Verseifung eines Fettes?",
    optionen: [
      "Es wird hydriert",
      "Es wird mit Base zu Glycerin und Seife (Fettsäuresalze) gespalten",
      "Es wird dehydriert",
      "Es kristallisiert aus",
      "Es wird zu Aminosäuren abgebaut",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei der Verseifung (Hydrolyse) werden Fette mit starker Lauge (NaOH, KOH) in Glycerin und Fettsäuresalze (Seifen) gespalten. Die Esterbindungen werden durch OH⁻ angegriffen. Beispiel: Fett + 3 NaOH → Glycerin + 3 Natriumsalze der Fettsäuren.",
    strategieTipp:
      "Verseifung = Fett + Base → Glycerin + Seife. Umkehrung der Veresterung. Seife = Salz einer Fettsäure.",
  },
  {
    id: "ch-q-226",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Strukturformel beschreibt Cholesterin am besten?",
    optionen: [
      "Lineares Polymer aus Isoprenen",
      "Steroidgerüst aus vier kondensierten Ringen",
      "Verzweigtes Polysaccharid",
      "Einfache Fettsäure",
      "Phospholipid mit zwei Fettsäureketten",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Cholesterin gehört zu den Steroiden und besitzt das charakteristische Steroid-Grundgerüst aus vier kondensierten Ringen (drei Sechsringe, ein Fünfring = Cyclopentanoperhydrophenanthren). Es ist wichtiger Membranbestandteil und Ausgangsstoff für Steroidhormone und Gallensäuren.",
    strategieTipp:
      "Steroide = 4-Ring-Struktur (3×6er + 1×5er). Cholesterin, Testosteron, Cortisol, Vitamin D gehören zu Steroiden.",
  },
  {
    id: "ch-q-227",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist die biologische Funktion von Cholesterin NICHT?",
    optionen: [
      "Regulation der Membranfluidität",
      "Vorstufe für Steroidhormone",
      "Vorstufe für Vitamin D",
      "Hauptenergiespeicher in Fettzellen",
      "Vorstufe für Gallensäuren",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Cholesterin ist wichtig für Membranfluidität, Vorstufe von Steroidhormonen (Cortisol, Testosteron, Östrogen), Vitamin D und Gallensäuren. Hauptenergiespeicher in Fettzellen sind Triacylglycerine (Fette), nicht Cholesterin. Cholesterin liefert keine signifikante Energie.",
    strategieTipp:
      "Cholesterin = Membrankomponente, Hormon-/Vitamin-Vorstufe. Energiespeicher = Fette (Triacylglycerine). Nicht verwechseln!",
  },
  {
    id: "ch-q-228",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welches Nukleotid-Baustein kommt in RNA, aber nicht in DNA vor?",
    optionen: ["Adenin", "Thymin", "Uracil", "Guanin", "Cytosin"],
    korrekteAntwort: 2,
    erklärung:
      "RNA enthält die Base Uracil anstelle von Thymin. Beide sind Pyrimidinbasen und paaren mit Adenin, aber Uracil fehlt die Methylgruppe am C5, die Thymin besitzt. DNA: A, T, G, C. RNA: A, U, G, C. Der Zucker unterscheidet sich ebenfalls (Ribose vs. Desoxyribose).",
    strategieTipp:
      "DNA = Thymin (T). RNA = Uracil (U). Beide paaren mit Adenin. RNA hat Ribose, DNA Desoxyribose (fehlt OH am C2).",
  },
  {
    id: "ch-q-229",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Aus welchen Komponenten besteht ein Nukleotid?",
    optionen: [
      "Base + Zucker",
      "Base + Zucker + Phosphat",
      "Base + Aminosäure",
      "Nur aus einer stickstoffhaltigen Base",
      "Zucker + Fettsäure",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein Nukleotid besteht aus drei Komponenten: einer stickstoffhaltigen Base (Purin oder Pyrimidin), einem Pentosezucker (Ribose oder Desoxyribose) und mindestens einer Phosphatgruppe. Base + Zucker ohne Phosphat = Nukleosid.",
    strategieTipp:
      "Nukleotid = Base + Zucker + Phosphat. Nukleosid = Base + Zucker (ohne Phosphat). Nukleoside sind Vorstufen.",
  },
  {
    id: "ch-q-230",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Basen sind Purine?",
    optionen: [
      "Cytosin und Thymin",
      "Adenin und Guanin",
      "Uracil und Thymin",
      "Adenin und Cytosin",
      "Guanin und Thymin",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Purine (Adenin und Guanin) bestehen aus einem Doppelringsystem (9 Atome). Pyrimidine (Cytosin, Thymin, Uracil) haben einen Einzelring (6 Atome). In der DNA paaren Purine mit Pyrimidinen: A-T (2 H-Brücken), G-C (3 H-Brücken).",
    strategieTipp:
      'Purine = 2 Ringe = Adenin (A) + Guanin (G). Pyrimidine = 1 Ring = Cytosin (C), Thymin (T), Uracil (U). "Pure As Gold".',
  },
  {
    id: "ch-q-231",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Bindung verknüpft Nukleotide in einem DNA-Strang?",
    optionen: [
      "Wasserstoffbrückenbindung",
      "Glykosidische Bindung",
      "Phosphodiesterbindung",
      "Peptidbindung",
      "Disulfidbrücke",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Nukleotide werden durch Phosphodiesterbindungen zwischen der 3'-OH-Gruppe eines Zuckers und der 5'-Phosphatgruppe des nächsten Nukleotids verknüpft. Dies bildet das Zucker-Phosphat-Rückgrat der DNA/RNA. Wasserstoffbrücken verbinden komplementäre Basen zwischen zwei Strängen.",
    strategieTipp:
      "Phosphodiesterbindung = innerhalb eines Strangs (3'-5'-Verknüpfung). H-Brücken = zwischen Strängen (A-T, G-C).",
  },
  {
    id: "ch-q-232",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie viele Wasserstoffbrücken bilden sich zwischen Guanin und Cytosin?",
    optionen: ["1", "2", "3", "4", "5"],
    korrekteAntwort: 2,
    erklärung:
      "Guanin und Cytosin bilden drei Wasserstoffbrücken (G≡C), Adenin und Thymin nur zwei (A=T). Die zusätzliche H-Brücke macht GC-Paare stabiler als AT-Paare. DNA-Bereiche mit hohem GC-Gehalt haben höhere Schmelztemperaturen.",
    strategieTipp:
      "G≡C = 3 H-Brücken (stabil). A=T = 2 H-Brücken. Hoher GC-Gehalt = höherer Schmelzpunkt (Tm) der DNA.",
  },
  {
    id: "ch-q-233",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Struktur bildet die DNA typischerweise?",
    optionen: ["Einzelstrang", "Doppelhelix", "Triple-Helix", "β-Faltblatt", "Random Coil"],
    korrekteAntwort: 1,
    erklärung:
      "DNA bildet eine Doppelhelix (Watson-Crick-Modell): zwei antiparallele Stränge winden sich umeinander, wobei komplementäre Basen im Inneren durch Wasserstoffbrücken paaren (A-T, G-C). Das Zucker-Phosphat-Rückgrat ist außen. RNA ist meist einzelsträngig.",
    strategieTipp:
      "DNA = Doppelhelix, antiparallel (5'→3' und 3'→5'). RNA = meist Einzelstrang. Komplementarität: A-T, G-C.",
  },
  {
    id: "ch-q-234",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: 'Was bedeutet "antiparallel" bei der DNA-Struktur?',
    optionen: [
      "Die beiden Stränge verlaufen parallel in gleicher Richtung",
      "Die Stränge haben unterschiedliche Basensequenzen",
      "Ein Strang verläuft 5'→3', der andere 3'→5'",
      "Die Basen sind nicht komplementär",
      "Es gibt keine Wasserstoffbrücken",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Antiparallel bedeutet, dass die beiden DNA-Stränge in entgegengesetzter Richtung verlaufen: Ein Strang hat 5'→3'-Orientierung, der komplementäre Strang 3'→5'. Dies ist wichtig für Replikation und Transkription, da DNA-Polymerasen nur in 5'→3'-Richtung synthetisieren.",
    strategieTipp:
      "Antiparallel = entgegengesetzte Orientierung (↑5'→3' und ↓3'→5'). Wichtig für Replikation: nur 5'→3'-Synthese möglich.",
  },
  {
    id: "ch-q-235",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist die Hauptfunktion der mRNA?",
    optionen: [
      "Genetische Information langfristig speichern",
      "Aminosäuren zum Ribosom transportieren",
      "Genetische Information von DNA zum Ribosom übertragen",
      "Katalytische Aktivität bei der Proteinbiosynthese",
      "Strukturelle Komponente der Ribosomen",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Messenger-RNA (mRNA) überträgt die genetische Information von der DNA im Zellkern zu den Ribosomen im Cytoplasma, wo sie als Matrize für die Proteinbiosynthese (Translation) dient. tRNA transportiert Aminosäuren, rRNA ist Ribosom-Bestandteil.",
    strategieTipp:
      "mRNA = Bote (DNA→Ribosom). tRNA = Transporter (bringt AS). rRNA = ribosomale Struktur + Katalyse. Drei RNA-Typen merken!",
  },
  {
    id: "ch-q-236",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist ein Codon?",
    optionen: [
      "Eine Aminosäure",
      "Eine Sequenz von drei Nukleotiden auf der mRNA",
      "Eine Bindung zwischen Nukleotiden",
      "Ein Protein im Ribosom",
      "Eine Mutation in der DNA",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein Codon ist eine Sequenz aus drei aufeinanderfolgenden Nukleotiden (Triplett) auf der mRNA, die für eine bestimmte Aminosäure oder ein Stoppsignal codiert. Es gibt 64 mögliche Codons (4³), die für 20 Aminosäuren codieren (genetischer Code ist degeneriert).",
    strategieTipp:
      "Codon = 3 Basen auf mRNA = codiert 1 Aminosäure. 64 Codons, 20 AS = Degeneration. Start: AUG, Stop: UAA, UAG, UGA.",
  },
  {
    id: "ch-q-237",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches Vitamin ist fettlöslich?",
    optionen: ["Vitamin C", "Vitamin B12", "Vitamin D", "Vitamin B6", "Folsäure"],
    korrekteAntwort: 2,
    erklärung:
      "Vitamin D ist eines der vier fettlöslichen Vitamine (A, D, E, K). Diese werden in Fettgewebe und Leber gespeichert und können überdosiert werden. Wasserlösliche Vitamine (B-Komplex, C) werden nicht signifikant gespeichert und im Überschuss über Urin ausgeschieden.",
    strategieTipp:
      "Fettlöslich = A, D, E, K (Speicherung möglich, Überdosierung). Wasserlöslich = B, C (keine Speicherung, Überschuss ausgeschieden).",
  },
  {
    id: "ch-q-238",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Funktion hat Vitamin C (Ascorbinsäure)?",
    optionen: [
      "Blutgerinnung",
      "Sehprozess",
      "Antioxidans und Cofaktor bei Kollagensynthese",
      "Calciumstoffwechsel",
      "Membranschutz durch Lipidperoxidation",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Vitamin C ist ein starkes Antioxidans (Reduktionsmittel) und essentieller Cofaktor für Enzyme der Kollagensynthese (Hydroxylierung von Prolin und Lysin). Mangel führt zu Skorbut (defektes Kollagen). Vitamin K = Blutgerinnung, A = Sehen, D = Calcium, E = Membranen.",
    strategieTipp:
      "Vitamin C = Antioxidans + Kollagen. Mangel = Skorbut. Wasserlöslich, hohe Dosen meist unbedenklich (Ausscheidung).",
  },
  {
    id: "ch-q-239",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welches Vitamin wird als Vorstufe (Provitamin) in der Haut durch UV-Licht gebildet?",
    optionen: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K", "Vitamin B12"],
    korrekteAntwort: 1,
    erklärung:
      "Vitamin D₃ (Cholecalciferol) wird in der Haut aus 7-Dehydrocholesterol (Provitamin D₃) durch UV-B-Strahlung gebildet. Es wird dann in Leber und Niere zum aktiven Hormon Calcitriol hydroxyliert, das den Calcium- und Phosphatstoffwechsel reguliert.",
    strategieTipp:
      "Vitamin D = Sonnenvitamin (UV-B in Haut). Streng genommen ein Hormon. Reguliert Ca²⁺-Aufnahme. Mangel = Rachitis/Osteomalazie.",
  },
  {
    id: "ch-q-240",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welches Vitamin ist wichtig für die Blutgerinnung?",
    optionen: ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K", "Vitamin B1"],
    korrekteAntwort: 3,
    erklärung:
      "Vitamin K ist essentiell für die γ-Carboxylierung von Glutamatresten in Gerinnungsfaktoren (II, VII, IX, X) und Protein C/S. Mangel führt zu erhöhter Blutungsneigung. Neugeborene erhalten prophylaktisch Vitamin K. Warfarin (Antikoagulans) hemmt Vitamin-K-Reduktase.",
    strategieTipp:
      'Vitamin K = Koagulation (Gerinnung). K für "Koagulation". Fettlöslich. Antagonist = Warfarin (Blutverdünner).',
  },
  {
    id: "ch-q-241",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was unterscheidet Vitamine von anderen organischen Nährstoffen?",
    optionen: [
      "Sie liefern Energie",
      "Sie sind in großen Mengen erforderlich",
      "Sie können vom Körper nicht oder nicht in ausreichender Menge synthetisiert werden",
      "Sie bestehen immer aus Aminosäuren",
      "Sie sind alle wasserlöslich",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Vitamine sind organische Verbindungen, die der Organismus für lebenswichtige Funktionen benötigt, aber nicht selbst (oder nicht ausreichend) synthetisieren kann. Sie müssen mit der Nahrung aufgenommen werden. Sie liefern keine Energie, sind strukturell vielfältig und in geringen Mengen wirksam.",
    strategieTipp:
      "Vitamine = essentiell (Zufuhr nötig), keine Energie, geringe Mengen, vielfältige Strukturen. Fehlen = Mangelkrankheiten.",
  },
  {
    id: "ch-q-242",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was sind Enzyme?",
    optionen: [
      "Anorganische Katalysatoren",
      "Biologische Katalysatoren, meist Proteine",
      "Energiespeichermoleküle",
      "Strukturproteine",
      "Hormone",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Enzyme sind biologische Katalysatoren, die chemische Reaktionen beschleunigen, ohne dabei selbst verbraucht zu werden. Die meisten Enzyme sind Proteine (einige sind katalytisch aktive RNA-Moleküle = Ribozyme). Sie senken die Aktivierungsenergie und sind hochspezifisch.",
    strategieTipp:
      "Enzyme = Bio-Katalysatoren, meist Proteine. Senken Aktivierungsenergie, nicht verbraucht, hochspezifisch, wiederverwendbar.",
  },
  {
    id: "ch-q-243",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie beeinflusst ein Enzym eine chemische Reaktion?",
    optionen: [
      "Es verschiebt das Gleichgewicht zugunsten der Produkte",
      "Es erhöht die Aktivierungsenergie",
      "Es senkt die Aktivierungsenergie",
      "Es wird dabei verbraucht",
      "Es ändert die Gibbs-Energie der Reaktion",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Enzyme senken die Aktivierungsenergie einer Reaktion, wodurch diese schneller abläuft. Sie verändern weder das thermodynamische Gleichgewicht noch die Gibbs-Energie (ΔG) der Reaktion. Das Enzym liegt nach der Reaktion unverändert vor und kann erneut wirken.",
    strategieTipp:
      "Enzym senkt Ea (Aktivierungsenergie) → schnellere Reaktion. Gleichgewicht und ΔG unverändert. Katalysator = nicht verbraucht.",
  },
  {
    id: "ch-q-244",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist das aktive Zentrum eines Enzyms?",
    optionen: [
      "Der Bereich, wo Cofaktoren gebunden werden",
      "Die dreidimensionale Tasche, in der das Substrat bindet und die Reaktion katalysiert wird",
      "Die Primärstruktur des Enzyms",
      "Der Bereich, der beim Erhitzen zürst denaturiert",
      "Die regulatorische Bindungsstelle",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das aktive Zentrum ist eine dreidimensionale Region des Enzyms, meist eine Tasche oder Spalte, in der das Substrat bindet und die katalytische Reaktion stattfindet. Es wird durch die Tertiärstruktur geformt und enthält katalytisch wichtige Aminosäurereste. Es ist hochspezifisch für das Substrat.",
    strategieTipp:
      'Aktives Zentrum = Substratbindung + Katalyse. 3D-Struktur wichtig. Spezifität durch "Schlüssel-Schloss" oder "Induced Fit".',
  },
  {
    id: "ch-q-245",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: 'Was beschreibt das "Induced-Fit-Modell" der Enzym-Substrat-Bindung?',
    optionen: [
      "Substrat und aktives Zentrum passen exakt wie Schlüssel und Schloss",
      "Das Enzym ändert seine Konformation bei Substratbindung für optimale Passung",
      "Mehrere Substrate binden gleichzeitig",
      "Das Substrat wird chemisch verändert, bevor es bindet",
      "Das Enzym bindet nur an denaturierte Substrate",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Induced-Fit-Modell (Koshland) besagt, dass das Enzym seine Konformation bei Substratbindung ändert, wodurch das aktive Zentrum optimal um das Substrat geformt wird. Dies erklärt die hohe Spezifität besser als das starre Schlüssel-Schloss-Modell (Fischer).",
    strategieTipp:
      "Schlüssel-Schloss = starre Passung (veraltet). Induced Fit = flexible Anpassung (modern). Konformationsänderung optimiert Katalyse.",
  },
  {
    id: "ch-q-246",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist ein Cofaktor?",
    optionen: [
      "Ein zweites Enzym, das die Reaktion unterstützt",
      "Eine nicht-proteinartige Komponente, die für die Enzymaktivität notwendig ist",
      "Ein Inhibitor",
      "Ein Produkt der enzymatischen Reaktion",
      "Eine Aminosäure im aktiven Zentrum",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Cofaktoren sind nicht-proteinartige Komponenten, die manche Enzyme für ihre Aktivität benötigen. Sie können anorganisch (Metallionen wie Zn²⁺, Mg²⁺, Fe²⁺) oder organisch sein (Coenzyme wie NAD⁺, FAD, Coenzym A). Enzym ohne Cofaktor = Apönzym, mit Cofaktor = Holönzym.",
    strategieTipp:
      "Cofaktor = Nicht-Protein-Helfer. Metallionen oder Coenzyme. Apönzym (inaktiv) + Cofaktor = Holönzym (aktiv).",
  },
  {
    id: "ch-q-247",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist eine kompetitive Hemmung?",
    optionen: [
      "Der Inhibitor bindet an das aktive Zentrum und konkurriert mit dem Substrat",
      "Der Inhibitor bindet irreversibel an das Enzym",
      "Der Inhibitor bindet an eine andere Stelle und verändert die Enzymform",
      "Das Produkt hemmt die Reaktion",
      "Zwei Enzyme konkurrieren um das gleiche Substrat",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Bei kompetitiver Hemmung bindet der Inhibitor reversibel an das aktive Zentrum und konkurriert mit dem Substrat um die Bindung. Die Hemmung kann durch Erhöhung der Substratkonzentration überwunden werden. Km steigt, Vmax bleibt gleich.",
    strategieTipp:
      "Kompetitiv = Inhibitor am aktiven Zentrum, konkurriert mit Substrat. Überwindbar durch mehr Substrat. Km↑, Vmax gleich.",
  },
  {
    id: "ch-q-248",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was beschreibt die Michaelis-Menten-Konstante Km?",
    optionen: [
      "Die maximale Reaktionsgeschwindigkeit",
      "Die Substratkonzentration bei halber maximaler Geschwindigkeit",
      "Die Enzymkonzentration",
      "Die Aktivierungsenergie",
      "Die Hemmkonstante",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Km ist die Substratkonzentration, bei der die Reaktionsgeschwindigkeit die Hälfte von Vmax erreicht. Ein niedriger Km-Wert bedeutet hohe Affinität des Enzyms zum Substrat (wenig Substrat für halbmaximale Aktivität nötig), ein hoher Km-Wert niedrige Affinität.",
    strategieTipp:
      "Km = [S] bei v = Vmax/2. Kleiner Km = hohe Affinität. Großer Km = niedrige Affinität. Enzymcharakteristikum.",
  },
  {
    id: "ch-q-249",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welcher Faktor beeinflusst die Enzymaktivität NICHT?",
    optionen: [
      "Temperatur",
      "pH-Wert",
      "Substratkonzentration",
      "Die Konzentration der Produkte der letzten Woche",
      "Inhibitoren",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Enzymaktivität wird beeinflusst durch: Temperatur (Optimum, dann Denaturierung), pH-Wert (Optimum, protonierung), Substrat- und Enzymkonzentration, Cofaktoren, Inhibitoren und Produktkonzentration (Produkthemmung). Vergangene Produktkonzentrationen haben keinen direkten Einfluss auf die aktülle Reaktion.",
    strategieTipp:
      "Enzymaktivität: T, pH, [S], [E], Cofaktoren, Inhibitoren, aktülle [P]. Jedes Enzym hat T- und pH-Optimum.",
  },
  {
    id: "ch-q-250",
    stichwortId: "ch-13-01",
    fach: "chemie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist allosterische Regulation?",
    optionen: [
      "Regulation durch Bindung eines Moleküls an das aktive Zentrum",
      "Regulation durch Bindung eines Effektors an eine Stelle außerhalb des aktiven Zentrums",
      "Irreversible Inaktivierung des Enzyms",
      "Regulation ausschließlich durch pH-Änderung",
      "Kompetitive Hemmung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei allosterischer Regulation bindet ein Effektor (Aktivator oder Inhibitor) an eine allosterische Stelle (nicht aktives Zentrum), was eine Konformationsänderung auslöst und die Aktivität des aktiven Zentrums beeinflusst. Dies ist wichtig für Feedbackhemmung und metabolische Kontrolle.",
    strategieTipp:
      "Allosterisch = Bindung außerhalb aktiven Zentrums → Konformationsänderung → Aktivitätsänderung. Wichtig für Stoffwechselregulation.",
  },
];
