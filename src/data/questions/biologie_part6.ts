export const fragenPart6 = [
  {
    id: "bio-q-251",
    stichwortId: "bio-6-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage zur DNA-Doppelhelix-Struktur nach Watson und Crick ist korrekt?",
    optionen: [
      "Die beiden Stränge verlaufen parallel züinander",
      "Adenin paart sich über drei Wasserstoffbrücken mit Thymin",
      "Die antiparallelen Stränge sind über Wasserstoffbrücken zwischen komplementären Basen verbunden",
      "Die Phosphatgruppen befinden sich im Inneren der Helix",
      "Guanin bildet Basenpaare mit Thymin",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die DNA-Doppelhelix besteht aus zwei antiparallelen Strängen (5'→3' und 3'→5'), die über Wasserstoffbrücken zwischen komplementären Basen (A-T mit 2, G-C mit 3 H-Brücken) verbunden sind. Das Zucker-Phosphat-Rückgrat liegt außen.",
    strategieTipp:
      "Merke die Basenpaarungsregeln: A-T (2 H-Brücken), G-C (3 H-Brücken). Antiparallel bedeutet entgegengesetzte Orientierung der Stränge.",
  },
  {
    id: "bio-q-252",
    stichwortId: "bio-6-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Bei der semikonservativen DNA-Replikation entsteht aus einem DNA-Doppelstrang zwei Tochter-DNA-Moleküle. Welche Aussage beschreibt das Prinzip korrekt?",
    optionen: [
      "Beide Tochter-DNA-Moleküle bestehen vollständig aus neu synthetisierten Strängen",
      "Jedes Tochter-DNA-Molekül enthält einen Elternstrang und einen neuen Strang",
      "Beide Stränge werden komplett neu synthetisiert, die Eltern-DNA wird abgebaut",
      "Die Replikation erfolgt nur am Leading-Strand kontinuierlich",
      "Beide Tochter-DNA-Moleküle enthalten abwechselnd alte und neue DNA-Abschnitte",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Semikonservativ bedeutet "halb erhaltend": Jedes Tochter-DNA-Molekül besteht aus einem konservierten (alten) Elternstrang und einem neu synthetisierten komplementären Strang. Dies wurde durch das Meselson-Stahl-Experiment nachgewiesen.',
    strategieTipp:
      'Der Begriff "semikonservativ" ist entscheidend: semi = halb, konservativ = erhaltend. Ein Strang bleibt erhalten, einer wird neu gebildet.',
  },
  {
    id: "bio-q-253",
    stichwortId: "bio-6-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welches Enzym ist für das Entspiralisieren der DNA-Doppelhelix am Replikationsursprung verantwortlich?",
    optionen: ["DNA-Polymerase III", "DNA-Ligase", "Helicase", "Primase", "Topoisomerase"],
    korrekteAntwort: 2,
    erklärung:
      "Die Helicase trennt die beiden DNA-Stränge durch Aufbrechen der Wasserstoffbrücken zwischen den Basenpaaren. Topoisomerase verhindert Überspiralisierung, DNA-Polymerase synthetisiert neue Stränge, Ligase verbindet DNA-Fragmente, Primase synthetisiert RNA-Primer.",
    strategieTipp:
      "Helicase = Helix öffnen. Merke die Hauptenzyme der Replikation: Helicase (öffnet), Primase (Primer), DNA-Polymerase (synthetisiert), Ligase (verbindet).",
  },
  {
    id: "bio-q-254",
    stichwortId: "bio-6-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was sind Okazaki-Fragmente und wo entstehen sie?",
    optionen: [
      "Kurze RNA-Sequenzen, die als Primer für die DNA-Synthese dienen",
      "Kurze DNA-Abschnitte am Leading-Strand, die kontinuierlich synthetisiert werden",
      "Kurze DNA-Abschnitte am Lagging-Strand, die diskontinuierlich synthetisiert und später verbunden werden",
      "Fehlerhafte DNA-Sequenzen, die durch Reparaturenzyme entfernt werden",
      "Einzelstrang-DNA-Bereiche, die durch Helicase erzeugt werden",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Okazaki-Fragmente sind kurze DNA-Stücke (100-200 Nukleotide bei Eukaryoten), die am Lagging-Strand diskontinuierlich in 5'→3'-Richtung synthetisiert werden. RNA-Primer werden entfernt, Lücken von DNA-Polymerase I gefüllt und durch DNA-Ligase verbunden.",
    strategieTipp:
      "Leading-Strand = kontinuierlich, Lagging-Strand = diskontinuierlich mit Okazaki-Fragmenten. Beide werden aber in 5'→3'-Richtung synthetisiert.",
  },
  {
    id: "bio-q-255",
    stichwortId: "bio-6-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Funktion hat die DNA-Ligase bei der DNA-Replikation?",
    optionen: [
      "Sie trennt die beiden DNA-Stränge",
      "Sie synthetisiert neue DNA-Stränge in 5'→3'-Richtung",
      "Sie verknüpft DNA-Fragmente durch Bildung von Phosphodiesterbindungen",
      "Sie entfernt fehlerhafte Nukleotide",
      "Sie synthetisiert RNA-Primer",
    ],
    korrekteAntwort: 2,
    erklärung:
      "DNA-Ligase verbindet Okazaki-Fragmente am Lagging-Strand, indem sie Phosphodiesterbindungen zwischen dem 3'-OH-Ende eines Fragments und dem 5'-Phosphat-Ende des nächsten bildet. Sie \"verklebt\" DNA-Stücke.",
    strategieTipp:
      'Ligase = lateinisch "ligare" (binden). Sie ist der "molekulare Klebstoff", der DNA-Fragmente zusammenfügt.',
  },
  {
    id: "bio-q-256",
    stichwortId: "bio-6-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Nukleotide bilden ein Codon im genetischen Code?",
    optionen: ["2", "3", "4", "5", "6"],
    korrekteAntwort: 1,
    erklärung:
      "Ein Codon besteht aus drei aufeinanderfolgenden Nukleotiden (Triplett). Mit 4 verschiedenen Basen (A, U, G, C) ergeben sich 4³ = 64 mögliche Codons, die 20 Aminosäuren sowie Start- und Stoppsignale codieren.",
    strategieTipp:
      "Triplett-Code: 3 Nukleotide = 1 Codon = 1 Aminosäure (bzw. Start/Stopp). 64 Codons für 20 Aminosäuren = Degeneriertheit des Codes.",
  },
  {
    id: "bio-q-257",
    stichwortId: "bio-6-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was bedeutet die Degeneriertheit des genetischen Codes?",
    optionen: [
      "Der Code ist bei verschiedenen Organismen unterschiedlich",
      "Mehrere Codons können für dieselbe Aminosäure codieren",
      "Ein Codon kann für mehrere verschiedene Aminosäuren codieren",
      "Der Code enthält Fehler und muss korrigiert werden",
      "Nur 20 der 64 möglichen Codons werden tatsächlich genutzt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Degeneriertheit bedeutet, dass mehrere verschiedene Codons für dieselbe Aminosäure codieren können (z.B. UCU, UCC, UCA, UCG alle für Serin). Dies ist ein Schutzmechanismus gegen Mutationen, besonders in der dritten Codon-Position (Wobble-Position).",
    strategieTipp:
      "Degeneriert = redundant, nicht eindeutig. 64 Codons codieren nur 20 Aminosäuren + Stopp, also mehrfache Codierung. Umkehrschluss wäre falsch: Ein Codon = eine Aminosäure.",
  },
  {
    id: "bio-q-258",
    stichwortId: "bio-6-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welches Codon fungiert beim Menschen als Startcodon für die Translation?",
    optionen: ["UAA", "UGA", "AUG", "GUA", "UAG"],
    korrekteAntwort: 2,
    erklärung:
      "AUG ist das universelle Startcodon, das für Methionin (bei Eukaryoten) bzw. N-Formylmethionin (bei Prokaryoten) codiert. Es markiert den Translationsstart. UAA, UAG und UGA sind die drei Stoppcodons, die keine Aminosäure codieren.",
    strategieTipp:
      'Merke: AUG = Start (Methionin). Stopp-Codons: UAA, UAG, UGA (Eselsbrücke: "U Are Away", "U Are Gone", "U Go Away").',
  },
  {
    id: "bio-q-259",
    stichwortId: "bio-6-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was versteht man unter der Universalität des genetischen Codes?",
    optionen: [
      "Der Code funktioniert nur in eukaryotischen Zellen",
      "Alle Organismen verwenden denselben oder nahezu denselben genetischen Code",
      "Jede Aminosäure wird nur durch ein einziges Codon codiert",
      "Der Code wird nur im Zellkern verwendet",
      "Alle 64 Codons werden in allen Organismen gleich genutzt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Universalität des genetischen Codes bedeutet, dass von Bakterien bis zum Menschen (nahezu) derselbe Code verwendet wird. Dies ermöglicht z.B. die Produktion menschlicher Proteine in Bakterien (Insulin). Geringfügige Ausnahmen existieren (Mitochondrien, einige Einzeller).",
    strategieTipp:
      "Universalität = bei allen Lebewesen gleich. Dies ist ein starkes Indiz für gemeinsame Evolution und Grundlage der Gentechnik (fremde Gene in anderen Organismen).",
  },
  {
    id: "bio-q-260",
    stichwortId: "bio-6-03",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Aussage zu Introns und Exons in eukaryotischen Genen ist korrekt?",
    optionen: [
      "Introns werden in die mRNA übersetzt, Exons werden entfernt",
      "Exons sind codierende Sequenzen, Introns werden herausgespleißt",
      "Prokaryoten besitzen mehr Introns als Eukaryoten",
      "Introns und Exons sind identisch",
      "Alle eukaryotischen Gene besitzen gleich viele Introns",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Exons (expressed regions) sind die codierenden Abschnitte, die in die reife mRNA eingebaut werden. Introns (intervening sequences) sind nicht-codierende Bereiche, die während der RNA-Prozessierung durch Spleißen entfernt werden. Prokaryoten haben meist keine Introns.",
    strategieTipp:
      "Exons = expressed = exprimiert = in Protein übersetzt. Introns = intervening = dazwischenliegend = werden entfernt. Spleißen entfernt Introns.",
  },
  {
    id: "bio-q-261",
    stichwortId: "bio-6-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist die Funktion eines Promotors in einem eukaryotischen Gen?",
    optionen: [
      "Er codiert für das Start-Codon der Translation",
      "Er ist die Bindungsstelle für RNA-Polymerase und reguliert den Transkriptionsstart",
      "Er markiert das Ende der Transkription",
      "Er verbindet Exons nach dem Spleißen",
      "Er codiert für regulatorische Proteine",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der Promotor ist eine DNA-Sequenz stromaufwärts (upstream) des Gens, an die die RNA-Polymerase II (bei Eukaryoten) bindet. Er enthält oft eine TATA-Box und bestimmt, wo die Transkription beginnt. Transkriptionsfaktoren binden ebenfalls an Promotorregionen.",
    strategieTipp:
      'Promotor = "bewirbt" das Gen, indem er RNA-Polymerase anlockt. Liegt vor (upstream) dem Gen. Nicht mit Enhancer verwechseln (kann weit entfernt liegen).',
  },
  {
    id: "bio-q-262",
    stichwortId: "bio-6-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Enhancer sind regulatorische DNA-Sequenzen in eukaryotischen Genen. Welche Eigenschaft zeichnet sie aus?",
    optionen: [
      "Sie liegen immer direkt vor dem Promotor",
      "Sie können die Transkription auch aus großer Entfernung und unabhängig von ihrer Orientierung verstärken",
      "Sie sind nur in prokaryotischen Zellen vorhanden",
      "Sie inhibieren die Genexpression",
      "Sie werden in mRNA transkribiert",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Enhancer sind cis-regulatorische Elemente, die die Transkriptionsrate erhöhen können, auch wenn sie Tausende Basenpaare vom Promotor entfernt liegen. Sie funktionieren orientierungsunabhängig. Spezifische Transkriptionsfaktoren binden an Enhancer und interagieren über DNA-Looping mit dem Promotor.",
    strategieTipp:
      "Enhancer = Verstärker, können weit entfernt sein und in beide Richtungen wirken. Silencer = Hemmer. Beide sind cis-Elemente (auf derselben DNA).",
  },
  {
    id: "bio-q-263",
    stichwortId: "bio-6-04",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Bei welchem Prozess wird die Information der DNA in mRNA umgeschrieben?",
    optionen: [
      "Translation",
      "Replikation",
      "Transkription",
      "Reverse Transkription",
      "Rekombination",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Transkription ist die Synthese von RNA (mRNA, tRNA, rRNA) anhand einer DNA-Vorlage durch RNA-Polymerase. Translation ist die Proteinsynthese am Ribosom anhand der mRNA. Replikation ist die DNA-Verdopplung. Das zentrale Dogma: DNA → RNA (Transkription) → Protein (Translation).",
    strategieTipp:
      "Transkription = Umschreiben (DNA → RNA). Translation = Übersetzen (RNA → Protein). Trans-scriptio = Umschrift, trans-latio = Übersetzung.",
  },
  {
    id: "bio-q-264",
    stichwortId: "bio-6-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welche RNA-Prozessierungsschritte erfolgen bei der Reifung der prä-mRNA zur mRNA in Eukaryoten?",
    optionen: [
      "Nur Methylierung der Basen",
      "Nur Anhängen eines Poly-A-Schwanzes",
      "5'-Capping, Spleißen der Introns und Polyadenylierung am 3'-Ende",
      "Nur Spleißen der Exons",
      "Umwandlung von Uracil in Thymin",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die mRNA-Prozessierung bei Eukaryoten umfasst: 1) 5'-Capping (7-Methylguanosin-Kappe zum Schutz und für Ribosomenbindung), 2) Spleißen (Entfernung der Introns, Verbindung der Exons), 3) Polyadenylierung (Poly-A-Schwanz am 3'-Ende für Stabilität und Export).",
    strategieTipp:
      "Merke die drei Schritte: Cap vorne (5'), Spleißen in der Mitte, Poly-A hinten (3'). Prokaryoten haben keine mRNA-Prozessierung.",
  },
  {
    id: "bio-q-265",
    stichwortId: "bio-6-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Funktion hat die Aminoacyl-tRNA-Synthetase bei der Translation?",
    optionen: [
      "Sie katalysiert die Peptidbindung zwischen Aminosäuren",
      "Sie belädt tRNA-Moleküle mit der korrekten Aminosäure",
      "Sie erkennt das Startcodon auf der mRNA",
      "Sie spaltet die mRNA in Codons",
      "Sie bildet das Ribosom",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Aminoacyl-tRNA-Synthetasen sind Enzyme, die spezifisch eine Aminosäure an die korrekte tRNA binden (Beladung). Es gibt 20 verschiedene Synthetasen (eine pro Aminosäure). Dieser Schritt ist entscheidend für die korrekte Translation: falsche Beladung führt zu falschen Proteinen.",
    strategieTipp:
      'Aminoacyl = Aminosäure-gebunden. Die Synthetase "verheiratet" Aminosäure mit passender tRNA. Dieser Schritt bestimmt die Übersetzungsgenauigkeit.',
  },
  {
    id: "bio-q-266",
    stichwortId: "bio-6-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wo findet die Translation in eukaryotischen Zellen statt?",
    optionen: [
      "Ausschließlich im Zellkern",
      "Nur in den Mitochondrien",
      "Im Zellkern und im Cytoplasma",
      "An Ribosomen im Cytoplasma oder am rauen ER",
      "Nur im Golgi-Apparat",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Translation findet an Ribosomen statt, die frei im Cytoplasma schwimmen oder am rauen Endoplasmatischen Retikulum (rER) gebunden sind. Proteine für den Export oder Membranen werden am rER synthetisiert, cytosolische Proteine an freien Ribosomen. Mitochondrien haben eigene Ribosomen.",
    strategieTipp:
      "Transkription im Kern, Translation im Cytoplasma (bei Eukaryoten). Ribosomen sind die Proteinfabriken, entweder frei oder am ER.",
  },
  {
    id: "bio-q-267",
    stichwortId: "bio-6-05",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche RNA-Typen sind an der Proteinbiosynthese beteiligt?",
    optionen: [
      "Nur mRNA",
      "mRNA und DNA",
      "mRNA, tRNA und rRNA",
      "Nur tRNA und rRNA",
      "mRNA, siRNA und miRNA",
    ],
    korrekteAntwort: 2,
    erklärung:
      "An der Translation sind drei RNA-Typen beteiligt: mRNA (messenger RNA, trägt genetische Information), tRNA (transfer RNA, bringt Aminosäuren), rRNA (ribosomale RNA, Hauptbestandteil der Ribosomen). siRNA und miRNA sind regulatorische RNAs.",
    strategieTipp:
      'Die drei "Arbeiter"-RNAs: mRNA = Bauplan, tRNA = Transporter, rRNA = Fabrik-Bestandteil. Alle drei sind für Translation essenziell.',
  },
  {
    id: "bio-q-268",
    stichwortId: "bio-6-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist alternatives Spleißen und welche Bedeutung hat es?",
    optionen: [
      "Fehlerhafte Entfernung von Exons, die zu Mutationen führt",
      "Verschiedene Kombination von Exons eines Gens, wodurch verschiedene Proteine entstehen",
      "Entfernung aller Introns aus der prä-mRNA",
      "Spleißen, das nur in prokaryotischen Zellen vorkommt",
      "Reparatur von fehlerhaft gespleißter mRNA",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Alternatives Spleißen ermöglicht die Produktion verschiedener mRNA-Varianten aus einem Gen, indem Exons unterschiedlich kombiniert werden (einige können übersprungen oder eingeschlossen werden). So können aus ~20.000 menschlichen Genen über 100.000 verschiedene Proteine entstehen.",
    strategieTipp:
      "Alternatives Spleißen = Exon-Shuffling. Ein Gen, viele Proteine. Wichtig für Proteindiversität trotz begrenzter Genzahl. Reguliert z.B. gewebespezifische Isoformen.",
  },
  {
    id: "bio-q-269",
    stichwortId: "bio-6-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welcher Komplex ist für das Spleißen der prä-mRNA in Eukaryoten verantwortlich?",
    optionen: ["Ribosom", "Proteasom", "Spliceosom", "Replikom", "Nukleosom"],
    korrekteAntwort: 2,
    erklärung:
      "Das Spliceosom ist ein großer Komplex aus snRNPs (small nuclear ribonucleoproteins) und Proteinen, der das Spleißen katalysiert. Es erkennt Spleißstellen (Donor-, Akzeptor- und Verzweigungsstellen), schneidet Introns heraus und verbindet Exons. snRNAs (U1, U2, U4, U5, U6) sind essenzielle Komponenten.",
    strategieTipp:
      'Spliceosom = Spleißmaschine, besteht aus snRNPs (gesprochen "Snurps"). Nicht mit Ribosom (Translation) oder Proteasom (Proteinabbau) verwechseln.',
  },
  {
    id: "bio-q-270",
    stichwortId: "bio-6-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist ein Operon?",
    optionen: [
      "Ein einzelnes Gen bei Eukaryoten",
      "Eine Funktionseinheit aus mehreren Genen mit gemeinsamem Promotor und Operator bei Prokaryoten",
      "Ein Chromosomenabschnitt bei höheren Pflanzen",
      "Eine spezielle RNA-Form",
      "Ein Zellorganell zur Proteinsynthese",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein Operon ist eine Einheit bei Prokaryoten, bestehend aus einem Promotor, Operator und mehreren funktionell verwandten Strukturgenen, die gemeinsam transkribiert werden. Klassisches Beispiel: Lac-Operon (Laktose-Abbau) und Trp-Operon (Tryptophan-Synthese) bei E. coli.",
    strategieTipp:
      "Operon = typisch prokaryotisch. Mehrere Gene, eine mRNA (polycistronisch). Eukaryoten haben meist monocistronische mRNAs (ein Gen, eine mRNA).",
  },
  {
    id: "bio-q-271",
    stichwortId: "bio-6-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Beim Lac-Operon von E. coli liegt in Abwesenheit von Laktose der Repressor am Operator gebunden. Was geschieht bei Zugabe von Laktose?",
    optionen: [
      "Der Repressor bleibt gebunden, die Transkription wird verstärkt gehemmt",
      "Laktose bindet an den Repressor, der sich vom Operator löst und die Transkription ermöglicht",
      "Laktose zerstört die mRNA",
      "Der Promotor wird abgebaut",
      "Die RNA-Polymerase wird irreversibel inaktiviert",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Laktose (bzw. Allolaktose als Induktor) bindet an den Lac-Repressor, ändert dessen Konformation, sodass er vom Operator dissoziiert. Die RNA-Polymerase kann nun die Gene für Laktose-Abbauenzyme (lacZ, lacY, lacA) transkribieren. Dies ist ein Beispiel für negative Induktion.",
    strategieTipp:
      "Lac-Operon = induzierbares System. Ohne Laktose: Repressor blockiert. Mit Laktose: Repressor inaktiviert, Gene an. Substrat induziert eigenen Abbau.",
  },
  {
    id: "bio-q-272",
    stichwortId: "bio-6-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Funktion haben Transkriptionsfaktoren bei Eukaryoten?",
    optionen: [
      "Sie synthetisieren DNA",
      "Sie binden an spezifische DNA-Sequenzen und regulieren die Transkription",
      "Sie transportieren mRNA aus dem Kern",
      "Sie spleißen Introns aus der prä-mRNA",
      "Sie katalysieren die Translation",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Transkriptionsfaktoren sind Proteine, die an Promotoren, Enhancer oder Silencer binden und die Transkriptionsrate beeinflussen. Basale Transkriptionsfaktoren (z.B. TFIID) sind für die grundlegende Transkription nötig, spezifische Faktoren regulieren Gen-Expression gewebespezifisch oder in Reaktion auf Signale.",
    strategieTipp:
      "Transkriptionsfaktoren = Regulatoren der Genexpression. Sie sind trans-Faktoren (Proteine), die an cis-Elemente (DNA-Sequenzen) binden.",
  },
  {
    id: "bio-q-273",
    stichwortId: "bio-6-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist ein wesentlicher Unterschied zwischen Enhancern und Silencern?",
    optionen: [
      "Enhancer sind nur in Prokaryoten, Silencer nur in Eukaryoten",
      "Enhancer verstärken die Transkription, Silencer verringern oder unterdrücken sie",
      "Enhancer codieren für Proteine, Silencer für RNA",
      "Silencer liegen immer im Exon, Enhancer im Intron",
      "Es gibt keinen Unterschied",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Enhancer sind cis-regulatorische DNA-Elemente, die die Transkription verstärken (Aktivatoren binden). Silencer sind entsprechende Elemente, die die Transkription hemmen (Repressoren binden). Beide können positionsunabhängig und weit vom Promotor entfernt wirken.",
    strategieTipp:
      "Enhancer = Verstärker (+), Silencer = Dämpfer (-). Beide sind cis-Elemente, die über Transkriptionsfaktoren (trans) wirken.",
  },
  {
    id: "bio-q-274",
    stichwortId: "bio-6-07",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was versteht man unter Epigenetik?",
    optionen: [
      "Die Veränderung der DNA-Sequenz durch Mutationen",
      "Vererbbare Veränderungen der Genexpression ohne Änderung der DNA-Sequenz",
      "Die Gesamtheit aller Gene eines Organismus",
      "Die Reparatur von DNA-Schäden",
      "Die Synthese von Proteinen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Epigenetik beschreibt vererbbare Veränderungen der Genfunktion, die nicht auf Änderungen der DNA-Sequenz beruhen. Mechanismen sind DNA-Methylierung (z.B. an Cytosin), Histonmodifikationen (Acetylierung, Methylierung) und nicht-codierende RNAs. Diese regulieren, welche Gene aktiv oder stumm sind.",
    strategieTipp:
      "Epi = darüber, zusätzlich. Epigenetik = zusätzliche Ebene der Genregulation. DNA-Sequenz bleibt gleich, Expression ändert sich. Wichtig für Entwicklung und Zelldifferenzierung.",
  },
  {
    id: "bio-q-275",
    stichwortId: "bio-6-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welche Auswirkung hat die Methylierung von Cytosinbasen in Promotorregionen typischerweise auf die Genexpression?",
    optionen: [
      "Sie verstärkt die Transkription erheblich",
      "Sie hat keinen Einfluss auf die Genexpression",
      "Sie führt zur Stilllegung der Genexpression",
      "Sie aktiviert alternatives Spleißen",
      "Sie fördert die Translation",
    ],
    korrekteAntwort: 2,
    erklärung:
      "DNA-Methylierung, insbesondere an CpG-Inseln in Promotoren, führt meist zur Transkriptionsrepression. Methylierte Cytosine rekrutieren Methyl-bindende Proteine, die Chromatinkondensation fördern und Transkriptionsfaktoren blockieren. Dies ist wichtig für X-Inaktivierung, genomisches Imprinting und Entwicklung.",
    strategieTipp:
      'Methylierung = Stilllegung ("Gen wird verschlossen"). Acetylierung von Histonen = Aktivierung ("Chromatin wird geöffnet"). Gegensätzliche Effekte.',
  },
  {
    id: "bio-q-276",
    stichwortId: "bio-6-07",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was versteht man unter dem Proteom einer Zelle?",
    optionen: [
      "Die Gesamtheit aller Gene im Genom",
      "Alle in der Zelle zu einem bestimmten Zeitpunkt vorhandenen Proteine",
      "Die Anzahl der Ribosomen in der Zelle",
      "Alle DNA-Methylierungsmuster",
      "Die Struktur des Zellkerns",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Proteom umfasst alle Proteine, die in einer Zelle, einem Gewebe oder Organismus zu einem bestimmten Zeitpunkt exprimiert werden. Im Gegensatz zum statischen Genom ist das Proteom dynamisch und ändert sich je nach Zelltyp, Entwicklungsstadium und Umweltbedingungen. Die Proteomik untersucht das Proteom.",
    strategieTipp:
      "Genom = alle Gene (konstant). Proteom = alle exprimierten Proteine (variabel). Proteom ist viel komplexer wegen alternativem Spleißen und posttranslationaler Modifikationen.",
  },
  {
    id: "bio-q-277",
    stichwortId: "bio-7-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wofür steht die Abkürzung PCR?",
    optionen: [
      "Protein Chain Reaction",
      "Polymerase Chain Reaction",
      "Protein Cloning Reaction",
      "Polymer Chain Replication",
      "Polypeptide Creation Reaction",
    ],
    korrekteAntwort: 1,
    erklärung:
      "PCR steht für Polymerase Chain Reaction (Polymerase-Kettenreaktion). Es ist eine molekularbiologische Methode zur exponentiellen Vervielfältigung (Amplifikation) spezifischer DNA-Abschnitte. Die Methode wurde 1983 von Kary Mullis entwickelt, wofür er 1993 den Nobelpreis erhielt.",
    strategieTipp:
      "PCR = DNA-Vervielfältigung in vitro. Aus wenigen DNA-Molekülen werden Millionen Kopien erzeugt. Grundlage vieler molekularbiologischer Anwendungen.",
  },
  {
    id: "bio-q-278",
    stichwortId: "bio-7-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche drei Hauptschritte werden in einem PCR-Zyklus wiederholt durchlaufen?",
    optionen: [
      "Transkription, Translation, Replikation",
      "Denaturierung, Annealing, Elongation",
      "Initiation, Elongation, Termination",
      "Aufbrechen, Kopieren, Verbinden",
      "Methylierung, Acetylierung, Phosphorylierung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Ein PCR-Zyklus besteht aus: 1) Denaturierung (94-98°C): Aufschmelzen der Doppelstrang-DNA, 2) Annealing (50-65°C): Anlagerung der Primer an die Einzelstränge, 3) Elongation (72°C): DNA-Synthese durch Taq-Polymerase. Diese drei Schritte werden 25-40× wiederholt.",
    strategieTipp:
      "Merke die Temperaturen: Denaturierung heiß (~95°C), Annealing mittel (~55°C), Elongation warm (~72°C). Jeder Zyklus verdoppelt die DNA-Menge.",
  },
  {
    id: "bio-q-279",
    stichwortId: "bio-7-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Warum wird für die PCR die Taq-Polymerase aus dem thermophilen Bakterium Thermus aquaticus verwendet?",
    optionen: [
      "Sie ist besonders kostengünstig herzustellen",
      "Sie ist hitzestabil und bleibt bei hohen Denaturierungstemperaturen aktiv",
      "Sie kann RNA als Matrize verwenden",
      "Sie arbeitet nur bei Raumtemperatur",
      "Sie hat eine Korrekturlesefunktion (Proofreading)",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Taq-Polymerase ist thermostabil (Optimum ~72°C) und übersteht die Denaturierungstemperatur von ~95°C. So muss nicht nach jedem Zyklus neues Enzym zugegeben werden. Thermus aquaticus lebt in heißen Quellen. Nachteil: Taq hat keine Proofreading-Aktivität (höhere Fehlerrate).",
    strategieTipp:
      "Taq-Polymerase = hitzebeständig, aus thermophilem Bakterium. Ermöglicht erst die Automatisierung der PCR. Alternative: Pfu-Polymerase mit Proofreading für höhere Genauigkeit.",
  },
  {
    id: "bio-q-280",
    stichwortId: "bio-7-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Funktion haben die Primer in der PCR?",
    optionen: [
      "Sie schmelzen die DNA auf",
      "Sie markieren die zu vervielfältigenden DNA-Enden und dienen als Startpunkt für die Polymerase",
      "Sie verbinden die DNA-Fragmente",
      "Sie reparieren Fehler in der DNA",
      "Sie spalten die DNA in kleinere Stücke",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Primer sind kurze synthetische Oligonukleotide (15-30 Basen), die komplementär zu den Enden des zu vervielfältigenden DNA-Abschnitts sind. Sie lagern sich beim Annealing an und bieten der DNA-Polymerase einen 3'-OH-Startpunkt. Zwei Primer (Forward und Reverse) definieren den amplifizierten Bereich.",
    strategieTipp:
      "Primer = Startschuss für Polymerase. DNA-Polymerase kann nicht de novo beginnen, braucht 3'-OH-Ende. Primer-Design ist entscheidend für PCR-Spezifität.",
  },
  {
    id: "bio-q-281",
    stichwortId: "bio-7-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Anwendung ist KEIN typischer Einsatzbereich der PCR?",
    optionen: [
      "Diagnostik von Infektionskrankheiten",
      "Vaterschaftstests",
      "Klonierung von Genen",
      "Direkte Proteinsynthese",
      "Forensische DNA-Analyse",
    ],
    korrekteAntwort: 3,
    erklärung:
      "PCR amplifiziert DNA, nicht Proteine. Typische Anwendungen: Diagnostik (Erregernachweis), Forensik (DNA-Fingerabdruck), Klonierung (Vervielfältigung von Genen), Vaterschaftstests (STR-Analyse), evolutionäre Studien, Genexpressionsanalyse (qPCR). Für Proteine werden andere Methoden verwendet.",
    strategieTipp:
      "PCR = DNA-Methode. Für Proteine: Western Blot, ELISA, Massenspektrometrie. PCR kann aber für Genexpression genutzt werden (RT-PCR: RNA → cDNA → PCR).",
  },
  {
    id: "bio-q-282",
    stichwortId: "bio-7-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welches Prinzip liegt der Sanger-Sequenzierung (Kettenabbruchmethode) zugrunde?",
    optionen: [
      "Verwendung von radioaktiven Nukleotiden",
      "Einbau von Didesoxynukleotiden, die zum Kettenabbruch führen",
      "Spaltung der DNA mit Restriktionsenzymen",
      "Verwendung von RNA-Sequenzen",
      "Massenspektrometrische Analyse",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei der Sanger-Methode werden neben normalen dNTPs auch Didesoxynukleotide (ddNTPs) verwendet. ddNTPs fehlt die 3'-OH-Gruppe, sodass nach Einbau keine weitere Verlängerung möglich ist (Kettenabbruch). Durch Fluoreszenzmarkierung der ddNTPs und Analyse der Fragmentlängen wird die Sequenz ermittelt.",
    strategieTipp:
      "Sanger = Kettenabbruch-Methode. ddNTPs = Terminatoren ohne 3'-OH. Früher vier Reaktionen (A, T, G, C), heute eine Reaktion mit vier verschiedenen Fluoreszenzfarbstoffen.",
  },
  {
    id: "bio-q-283",
    stichwortId: "bio-7-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Was ist ein wesentlicher Vorteil von Next-Generation-Sequencing (NGS) gegenüber der Sanger-Sequenzierung?",
    optionen: [
      "NGS ist billiger pro Basenpaar, aber langsamer",
      "NGS kann nur kurze DNA-Fragmente sequenzieren",
      "NGS ermöglicht massiv parallele Sequenzierung von Millionen DNA-Fragmenten gleichzeitig",
      "NGS benötigt keine DNA-Präparation",
      "NGS hat eine höhere Fehlerrate als Sanger",
    ],
    korrekteAntwort: 2,
    erklärung:
      "NGS-Technologien (z.B. Illumina, Ion Torrent) sequenzieren Millionen bis Milliarden Fragmente parallel (massiv parallel). Dies ermöglicht die schnelle und kostengünstige Sequenzierung ganzer Genome. Sanger ist genauer für einzelne Fragmente, NGS überlegen bei großen Datenmengen (Genomsequenzierung, Transkriptomik).",
    strategieTipp:
      "Sanger = präzise, niedrig-durchsatz, teuer für große Mengen. NGS = hoher Durchsatz, parallel, ideal für Genomsequenzierung. NGS revolutionierte Genomik.",
  },
  {
    id: "bio-q-284",
    stichwortId: "bio-7-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was wird bei der DNA-Sequenzierung bestimmt?",
    optionen: [
      "Die dreidimensionale Proteinstruktur",
      "Die Reihenfolge der Nukleotide in einem DNA-Molekül",
      "Die Anzahl der Chromosomen",
      "Die Menge an mRNA in der Zelle",
      "Die Position der Ribosomen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "DNA-Sequenzierung ermittelt die exakte Abfolge der vier Basen (A, T, G, C) in einem DNA-Molekül. Dies ist fundamental für Genomik, Diagnostik (Mutationen), Evolutionsforschung und personalisierte Medizin. Die erste Genomsequenzierung (Bakteriophage) erfolgte 1977, das humane Genom 2003.",
    strategieTipp:
      "Sequenzierung = Buchstabenfolge bestimmen (A, T, G, C). Grundlage für Genanalyse, Mutationsnachweis, Verwandtschaftsanalyse.",
  },
  {
    id: "bio-q-285",
    stichwortId: "bio-7-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Anwendung ist ein typisches Einsatzgebiet der DNA-Sequenzierung?",
    optionen: [
      "Direkter Nachweis von Proteinen",
      "Identifikation von Krankheitsmutationen und genetische Diagnostik",
      "Messung der Zellteilungsrate",
      "Bestimmung des Blutdrucks",
      "Synthese von Antikörpern",
    ],
    korrekteAntwort: 1,
    erklärung:
      "DNA-Sequenzierung wird eingesetzt für: genetische Diagnostik (Erbkrankheiten, Mutationen), Krebsgenomik (somatische Mutationen), Infektionsdiagnostik (Erregeridentifikation), Pharmakogenetik (Medikamentenverträglichkeit), evolutionäre Studien, Forensik und pränatale Diagnostik.",
    strategieTipp:
      "Sequenzierung ist Grundlage der Präzisionsmedizin. Ermöglicht individülle Diagnose und Therapie basierend auf genetischem Profil.",
  },
  {
    id: "bio-q-286",
    stichwortId: "bio-7-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welche Generation der DNA-Sequenzierung ermöglichte erstmals die Sequenzierung des kompletten menschlichen Genoms zu vertretbaren Kosten?",
    optionen: [
      "Maxam-Gilbert-Sequenzierung",
      "Sanger-Sequenzierung",
      "Next-Generation-Sequencing (NGS)",
      "Pyrosequenzierung allein",
      "Manülle Sequenzierung",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Das erste menschliche Genom (Human Genome Project, abgeschlossen 2003) wurde mit Sanger-Sequenzierung erstellt und kostete ~3 Milliarden Dollar. NGS-Technologien (ab ~2005) reduzierten Kosten dramatisch (heute <1000 Dollar) und ermöglichten Routine-Genomsequenzierung für Forschung und Klinik.",
    strategieTipp:
      "NGS = Gamechanger in der Genomik. Von Milliarden auf Tausende Dollar in 15 Jahren. Dritte Generation (PacBio, Nanopore) bietet nun Langstrecken-Sequenzierung.",
  },
  {
    id: "bio-q-287",
    stichwortId: "bio-7-03",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was untersucht die Genomanalyse?",
    optionen: [
      "Nur die Proteinstruktur",
      "Die Gesamtheit der genetischen Information eines Organismus",
      "Ausschließlich mitochondriale DNA",
      "Nur epigenetische Modifikationen",
      "Die Ribosomenstruktur",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Genomanalyse umfasst die Untersuchung der gesamten DNA eines Organismus, einschließlich Genidentifikation, Sequenzvergleiche, Strukturanalysen, Variationen (SNPs), regulatorische Elemente und funktionelle Annotation. Sie ist Grundlage für Verständnis von Evolution, Entwicklung und Krankheiten.",
    strategieTipp:
      "Genom = alle Gene + nicht-codierende DNA. Genomanalyse = umfassende Untersuchung der gesamten genetischen Information, nicht nur einzelner Gene.",
  },
  {
    id: "bio-q-288",
    stichwortId: "bio-7-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist der Unterschied zwischen Genomanalyse und Genexpressionsanalyse?",
    optionen: [
      "Genomanalyse untersucht die DNA-Sequenz, Genexpressionsanalyse die RNA-Menge",
      "Beide sind identisch",
      "Genomanalyse untersucht nur Proteine",
      "Genexpressionsanalyse untersucht nur DNA",
      "Es gibt keinen Unterschied",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Genomanalyse untersucht die DNA-Sequenz (was ist vorhanden?). Genexpressionsanalyse untersucht, welche Gene aktiv sind (welche Gene werden transkribiert?), typischerweise durch Messung von mRNA-Mengen mittels Microarray oder RNA-Seq. Genexpression variiert zwischen Zelltypen und Bedingungen.",
    strategieTipp:
      "Genom = Potenzial (welche Gene sind da?). Transkriptom/Expression = Realität (welche Gene sind aktiv?). Gleiche DNA, unterschiedliche Expression = Zelldifferenzierung.",
  },
  {
    id: "bio-q-289",
    stichwortId: "bio-7-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welche Technologie wird typischerweise für genomweite Genexpressionsanalysen verwendet?",
    optionen: [
      "Western Blot",
      "DNA-Microarray oder RNA-Sequenzierung (RNA-Seq)",
      "Elektronenmikroskopie",
      "Gelelektrophorese",
      "PCR allein",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Microarrays (DNA-Chips) und RNA-Seq sind Hochdurchsatzmethoden zur Messung der Expression Tausender Gene gleichzeitig. Microarrays nutzen Hybridisierung fluoreszenzmarkierter cDNA an immobilisierte Sonden. RNA-Seq sequenziert alle mRNA-Moleküle und ist quantitativer und umfassender.",
    strategieTipp:
      "Microarray = hybridisierungsbasiert, etabliert. RNA-Seq = sequenzierungsbasiert, umfassender, quantitativer. Beide ermöglichen Transkriptom-weite Analysen (Tausende Gene parallel).",
  },
  {
    id: "bio-q-290",
    stichwortId: "bio-7-04",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wofür wird der genetische Fingerabdruck hauptsächlich verwendet?",
    optionen: [
      "Zur Diagnose von Infektionskrankheiten",
      "Zur Identifikation von Personen in Forensik und Vaterschaftstests",
      "Zur Messung der Genexpression",
      "Zur Bestimmung der Blutgruppe",
      "Zur Sequenzierung ganzer Genome",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der genetische Fingerabdruck nutzt hochvariable DNA-Regionen (STRs, VNTRs) zur eindeutigen Identifikation von Personen. Anwendungen: Forensik (Täteridentifikation, Opferidentifikation), Vaterschaftstests, Identifikation von Katastrophenopfern, Verwandtschaftsanalysen. Jeder Mensch (außer eineiigen Zwillingen) hat ein einzigartiges Muster.",
    strategieTipp:
      "Genetischer Fingerabdruck = DNA-Profil, so individüll wie echter Fingerabdruck. Basiert auf variablen Regionen, nicht auf codierenden Genen.",
  },
  {
    id: "bio-q-291",
    stichwortId: "bio-7-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Was sind STRs (Short Tandem Repeats) und warum werden sie für DNA-Fingerprints verwendet?",
    optionen: [
      "Lange, sich wiederholende DNA-Sequenzen, die bei allen Menschen identisch sind",
      "Kurze, sich wiederholende DNA-Sequenzen mit hoher Variabilität zwischen Individün",
      "Proteincodierende Gene",
      "Mitochondriale DNA-Abschnitte",
      "RNA-Moleküle",
    ],
    korrekteAntwort: 1,
    erklärung:
      "STRs sind kurze DNA-Sequenzen (2-6 Basenpaare), die sich mehrfach wiederholen. Die Anzahl der Wiederholungen variiert stark zwischen Individün (Polymorphismus), ist aber bei einem Individuum konstant und vererbt. Analyse von 13-20 STR-Loci ergibt hochspezifisches DNA-Profil.",
    strategieTipp:
      "STR = Short Tandem Repeat = kurze tandemartige Wiederholung (z.B. GATCGATCGATC...). Anzahl der Repeats variiert stark = idealer Marker für Identifikation.",
  },
  {
    id: "bio-q-292",
    stichwortId: "bio-7-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welche ältere Methode wurde vor der STR-Analyse für genetische Fingerabdrücke verwendet?",
    optionen: [
      "RNA-Sequenzierung",
      "RFLP-Analyse (Restriction Fragment Length Polymorphism)",
      "CRISPR-Analyse",
      "Massenspektrometrie",
      "Elektronenmikroskopie",
    ],
    korrekteAntwort: 1,
    erklärung:
      "RFLP-Analyse nutzte variable Restriktionsschnittstellen und VNTRs (Variable Number Tandem Repeats). Nach Restriktionsverdau und Gelelektrophorese entstanden individülle Bandenmuster (Southern Blot). Nachteil: benötigt große DNA-Mengen, zeitaufwendig. STR-Analyse (PCR-basiert) ist schneller und sensitiver.",
    strategieTipp:
      "RFLP = alte Methode, historisch wichtig (erster DNA-Fingerabdruck 1984, Alec Jeffreys). STR = moderne Standard-Methode (PCR-basiert, schneller, weniger DNA nötig).",
  },
  {
    id: "bio-q-293",
    stichwortId: "bio-7-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Warum können eineiige Zwillinge mit Standard-DNA-Fingerprint-Methoden nicht unterschieden werden?",
    optionen: [
      "Sie haben keine DNA",
      "Sie haben identische DNA-Sequenzen einschließlich STR-Muster",
      "Ihre DNA ist zu ähnlich zu analysieren",
      "Sie haben unterschiedliche Chromosomenzahlen",
      "STR-Analyse funktioniert bei Zwillingen nicht",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Eineiige (monozygote) Zwillinge entstehen aus einer befruchteten Eizelle und haben daher identische DNA-Sequenzen, einschließlich aller STR-Loci. Standard-DNA-Fingerprinting kann sie nicht unterscheiden. Unterscheidung ist nur über epigenetische Marker, somatische Mutationen oder sehr tiefe Genomsequenzierung möglich.",
    strategieTipp:
      "Eineiige Zwillinge = genetische Klone = identisches DNA-Profil. Dies ist die einzige natürliche Ausnahme der Einzigartigkeit des DNA-Fingerabdrucks.",
  },
  {
    id: "bio-q-294",
    stichwortId: "bio-7-05",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was sind gentechnisch veränderte Organismen (GVO)?",
    optionen: [
      "Organismen, deren Genom durch natürliche Mutation verändert wurde",
      "Organismen, in deren Genom gezielt Gene eingefügt, entfernt oder verändert wurden",
      "Organismen, die sich schneller vermehren",
      "Nur Bakterien mit Plasmiden",
      "Ausgestorbene Arten",
    ],
    korrekteAntwort: 1,
    erklärung:
      "GVO sind Organismen, deren genetisches Material durch gentechnische Methoden gezielt verändert wurde. Dies umfasst Einfügen fremder Gene (transgen), Entfernen von Genen (Knockout) oder gezielte Modifikation (z.B. CRISPR). Beispiele: Bt-Mais (Insektenresistenz), GoldenRice (Vitamin A), Insulin-produzierende Bakterien.",
    strategieTipp:
      "GVO = gezielt verändert (nicht natürliche Mutation/Züchtung). Transgen = fremde Gene eingefügt. Wichtig für Landwirtschaft, Medizin, Forschung, aber auch ethisch/ökologisch diskutiert.",
  },
  {
    id: "bio-q-295",
    stichwortId: "bio-7-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Funktion haben Restriktionsenzyme in der Gentechnik?",
    optionen: [
      "Sie vervielfältigen DNA",
      "Sie schneiden DNA an spezifischen Erkennungssequenzen",
      "Sie synthetisieren Proteine",
      "Sie markieren Gene mit Fluoreszenz",
      "Sie reparieren DNA-Schäden",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Restriktionsendonukleasen (Restriktionsenzyme) schneiden DNA an spezifischen Palindrom-Sequenzen (4-8 Basenpaare). Sie erzeugen "sticky ends" (überhängende Enden) oder "blunt ends". In der Gentechnik dienen sie zum präzisen Ausschneiden und Einfügen von Genen in Vektoren (z.B. Plasmide).',
    strategieTipp:
      "Restriktionsenzyme = molekulare Scheren, sequenzspezifisch. Natürliche Funktion: bakterielle Abwehr gegen Viren. Namen: EcoRI (aus E. coli), BamHI, HindIII, etc.",
  },
  {
    id: "bio-q-296",
    stichwortId: "bio-7-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist ein Vektor in der Gentechnik und welche Funktion hat er?",
    optionen: [
      "Ein Protein, das Gene transportiert",
      "Ein DNA-Molekül (z.B. Plasmid), das fremde DNA in eine Wirtszelle einschleust",
      "Ein Enzym, das DNA schneidet",
      "Eine Zellorganelle",
      "Ein Mikroskop zur Genbeobachtung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Vektoren sind DNA-Moleküle (meist Plasmide, auch Viren, BACs), die fremde DNA in Wirtszellen transportieren und dort replizieren. Plasmide haben Replikationsursprung, Selektionsmarker (z.B. Antibiotikaresistenz) und Multiple Cloning Site (MCS) für Gen-Insertion. Wichtig für Klonierung und Expression rekombinanter Proteine.",
    strategieTipp:
      "Vektor = Transportvehikel für Gene. Plasmide sind häufigste Vektoren (kleine zirkuläre DNA). Selektionsmarker ermöglichen Identifikation transformierter Zellen.",
  },
  {
    id: "bio-q-297",
    stichwortId: "bio-7-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was versteht man unter Transformation in der Gentechnik?",
    optionen: [
      "Die Umwandlung von RNA in DNA",
      "Die Aufnahme fremder DNA (z.B. Plasmid) in eine Bakterienzelle",
      "Die Mutation eines Gens",
      "Die Teilung einer Zelle",
      "Die Proteinfaltung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Transformation ist die Aufnahme nackter DNA in kompetente Bakterienzellen. Sie kann natürlich erfolgen (bei manchen Bakterien) oder künstlich induziert werden (Hitzeschock, Elektroporation). Nach erfolgreicher Transformation wird die fremde DNA (Plasmid) repliziert und kann exprimiert werden.",
    strategieTipp:
      "Transformation = DNA-Aufnahme in Bakterien. Bei Eukaryoten: Transfektion. Elektroporation = elektrische Impulse öffnen Membran. Kompetente Zellen sind aufnahmebereit.",
  },
  {
    id: "bio-q-298",
    stichwortId: "bio-7-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welches bekannte Humanprotein wird großtechnisch in gentechnisch veränderten Bakterien produziert?",
    optionen: ["Hämoglobin", "Kollagen", "Humaninsulin", "Keratin", "Myosin"],
    korrekteAntwort: 2,
    erklärung:
      "Humaninsulin war eines der ersten rekombinanten Proteine (1982, Humulin). Das menschliche Insulingen wird in E. coli oder Hefe exprimiert. Vorher wurde Insulin aus Schweine-/Rinderbauchspeicheldrüsen gewonnen. Weitere Beispiele: Wachstumshormon, Erythropoietin, Faktor VIII (Blutgerinnung), Impfstoffe.",
    strategieTipp:
      "Rekombinante Proteine in Bakterien = Durchbruch der Gentechnik. Universalität des genetischen Codes ermöglicht Produktion menschlicher Proteine in Mikroorganismen.",
  },
  {
    id: "bio-q-299",
    stichwortId: "bio-7-06",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was versteht man unter Klonierung in der Biologie?",
    optionen: [
      "Die natürliche Fortpflanzung von Organismen",
      "Die Erzeugung genetisch identischer Kopien eines Organismus oder DNA-Moleküls",
      "Die Kreuzung verschiedener Arten",
      "Die Mutation von Genen",
      "Die Zellteilung durch Mitose",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Klonierung bezeichnet die Erzeugung genetisch identischer Kopien. Molekulares Klonieren: Vervielfältigung von DNA-Fragmenten in Vektoren. Reproduktives Klonieren: Erzeugung genetisch identischer Organismen (z.B. Dolly). Therapeutisches Klonieren: Erzeugung embryonaler Stammzellen für medizinische Zwecke.",
    strategieTipp:
      "Klon = genetisch identische Kopie. Natürliche Klone: eineiige Zwillinge, vegetative Vermehrung. Künstliche Klone: Dolly (Kerntransfer), molekulare Klonierung (DNA in Bakterien).",
  },
  {
    id: "bio-q-300",
    stichwortId: "bio-7-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Methode wurde verwendet, um das Klonschaf Dolly (1996) zu erzeugen?",
    optionen: [
      "In-vitro-Fertilisation",
      "Somatischer Zellkerntransfer (SCNT) in eine entkernte Eizelle",
      "Gentransfer mittels Plasmid",
      "Kreuzung zweier identischer Schafe",
      "PCR-Vervielfältigung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Dolly wurde durch somatischen Zellkerntransfer (Somatic Cell Nuclear Transfer, SCNT) erzeugt: Kern einer adulten Euterzelle wurde in eine entkernte Eizelle übertragen. Nach Stimulation entwickelte sich ein Embryo, der einer Leihmutter eingepflanzt wurde. Dolly war genetisch identisch mit dem Spenderschaf.",
    strategieTipp:
      "SCNT = Kerntransfer, Cytoplasma der Eizelle reprogrammiert adulten Kern. Beweis, dass differenzierte Zellen alle genetische Information behalten. Dolly zeigte: reproduktives Klonieren von Säugern ist möglich.",
  },
];
