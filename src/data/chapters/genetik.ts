import type { Chapter } from "./types";

export const genetikChapter: Chapter = {
  id: "genetik",
  subject: "biologie",
  title: "Genetik & Molekularbiologie",
  subtitle: "DNA, Proteinbiosynthese, Vererbung & Mutationen",
  icon: "🧬",
  chapterNumber: "Kapitel 2/3",
  readingTime: "~50 Minuten",
  level: "Kernstoff",
  frequency: "Sehr häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die molekularen Grundlagen der Genetik — vom Aufbau der DNA über die Proteinbiosynthese (Transkription und Translation) bis hin zu den Mendelschen Regeln, Erbgängen, Mutationstypen und dem Blutgruppensystem. Genetik ist eines der am häufigsten geprüften Themen im MedAT-BMS und erfordert ein tiefes Verständnis der Zusammenhänge zwischen Struktur, Funktion und Vererbung.",
  learningObjectives: [
    "Die Struktur der DNA und die Basenpaarungsregeln erklären",
    "Den Ablauf der DNA-Replikation beschreiben",
    "Transkription und Translation im Detail erklären",
    "Die Eigenschaften des genetischen Codes benennen",
    "Die drei Mendelschen Regeln anwenden können",
    "Verschiedene Erbgänge an Stammbäumen erkennen",
    "Mutationstypen unterscheiden und Beispiele nennen",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. DNA-Aufbau
    // ──────────────────────────────────────────────
    {
      heading: "DNA-Aufbau",
      content:
        "Die DNA (Desoxyribonukleinsäure) ist der Träger der genetischen Information in allen zellulären Lebewesen. Ihre Struktur wurde 1953 von James Watson und Francis Crick als Doppelhelix beschrieben — basierend auf Röntgenbeugungsdaten von Rosalind Franklin und Maurice Wilkins.\n\n" +
        "**Nukleotid-Aufbau:** Jedes Nukleotid besteht aus drei Komponenten: (1) einer Phosphatgruppe, (2) einem Zucker (Desoxyribose) und (3) einer stickstoffhaltigen Base. Die Nukleotide sind über Phosphodiesterbindungen zwischen dem 3'-OH des einen Zuckers und dem 5'-Phosphat des nächsten verknüpft — dies ergibt das Zucker-Phosphat-Rückgrat.\n\n" +
        "**Basen:** Man unterscheidet Purine und Pyrimidine. Die Purine Adenin (A) und Guanin (G) besitzen zwei Ringe (Doppelringstruktur). Die Pyrimidine Cytosin (C) und Thymin (T) besitzen nur einen Ring. Merkregel: Pyrimidine sind kleiner ('y' für 'klein').\n\n" +
        "**Basenpaarung (komplementär):** Adenin paart mit Thymin über 2 Wasserstoffbrücken (A=T). Guanin paart mit Cytosin über 3 Wasserstoffbrücken (G≡C). Diese komplementäre Basenpaarung ist die Grundlage für Replikation, Transkription und Translation.\n\n" +
        "**Chargaff-Regeln:** In jeder DNA gilt: die Menge an Adenin entspricht der Menge an Thymin (A = T), und die Menge an Guanin entspricht der Menge an Cytosin (G = C). Daraus folgt: Purine = Pyrimidine.\n\n" +
        "**Antiparallele Stränge:** Die beiden DNA-Stränge verlaufen antiparallel — ein Strang in 5'→3'-Richtung, der komplementäre Strang in 3'→5'-Richtung. Die Stränge werden durch die Wasserstoffbrücken zwischen den Basen zusammengehalten und um eine gemeinsame Achse gewunden.\n\n" +
        "**DNA-Replikation:** Die Verdopplung der DNA erfolgt semikonservativ (Meselson & Stahl, 1958) — jeder neue Doppelstrang enthält einen alten und einen neu synthetisierten Strang. Ablauf: (1) Helicase entwindet die Doppelhelix und öffnet die Replikationsgabel. (2) Topoisomerase baut Torsionsspannungen ab. (3) Primase synthetisiert kurze RNA-Primer als Startpunkt. (4) DNA-Polymerase III synthetisiert den neuen Strang in 5'→3'-Richtung. Am Leitstrang (leading strand) erfolgt die Synthese kontinuierlich in Richtung der Replikationsgabel. Am Folgestrang (lagging strand) erfolgt die Synthese diskontinuierlich in Form von Okazaki-Fragmenten (je ca. 100–200 Nukleotide bei Eukaryoten). (5) DNA-Polymerase I ersetzt die RNA-Primer durch DNA. (6) DNA-Ligase verknüpft die Okazaki-Fragmente zu einem durchgängigen Strang.",
      diagram: "dna-helix",
      merke:
        'A=T hat <strong>2</strong> H-Brücken, G≡C hat <strong>3</strong> H-Brücken. GC-reiche DNA ist thermisch stabiler (höhere Schmelztemperatur). Merke: "Auf dem <strong>GC</strong> liegt\'s <strong>gut</strong> (3 Brücken = stärker)"',
      klinik:
        "Die PCR (Polymerase-Kettenreaktion) nutzt die DNA-Replikation in vitro mit thermostabiler Taq-Polymerase — essenziell für COVID-Tests, Forensik und Gendiagnostik.",
    },

    // ──────────────────────────────────────────────
    // 2. RNA-Typen
    // ──────────────────────────────────────────────
    {
      heading: "RNA-Typen",
      content:
        "Die RNA (Ribonukleinsäure) unterscheidet sich von der DNA in mehreren zentralen Punkten: Sie enthält Ribose statt Desoxyribose, Uracil statt Thymin, und liegt meist einzelsträngig vor. Es gibt drei Haupttypen von RNA, die in der Proteinbiosynthese zusammenwirken:\n\n" +
        "**mRNA (messenger RNA / Boten-RNA):** Entsteht bei der Transkription als Kopie eines Gens. Sie trägt die genetische Information in Form von Codons (Basentriplets) vom Zellkern zu den Ribosomen im Cytoplasma. Die mRNA ist kurzlebig und wird nach der Translation abgebaut.\n\n" +
        "**tRNA (transfer RNA):** Kleine, kleeblattförmige RNA-Moleküle, die als Adapter zwischen mRNA und Aminosäuren dienen. Jede tRNA trägt an einem Ende ein Anticodon (komplementär zum mRNA-Codon) und am anderen Ende die passende Aminosäure. Die Aminoacyl-tRNA-Synthetase belädt die tRNA mit der korrekten Aminosäure — ein essenzieller Schritt für die Genauigkeit der Translation.\n\n" +
        "**rRNA (ribosomale RNA):** Struktureller und katalytischer Hauptbestandteil der Ribosomen. Eukaryotische Ribosomen (80S) bestehen aus einer großen Untereinheit (60S) und einer kleinen Untereinheit (40S). Die rRNA macht ca. 80% der gesamten zellulären RNA aus. Die Peptidyltransferase-Aktivität (Bildung der Peptidbindung) wird durch die rRNA katalysiert — das Ribosom ist daher ein Ribozym.\n\n" +
        "Weitere RNA-Typen: snRNA (small nuclear RNA, beteiligt am Spleißen), miRNA und siRNA (Genregulation durch RNA-Interferenz).",
      vergleichsTabelle: {
        headers: ["Merkmal", "DNA", "RNA"],
        rows: [
          ["Zucker", "Desoxyribose (–OH am C2' fehlt)", "Ribose (–OH am C2' vorhanden)"],
          ["Basen", "A, T, G, C", "A, U, G, C"],
          ["Stränge", "Doppelsträngig (Doppelhelix)", "Meist einzelsträngig"],
          ["Ort", "Zellkern (Eukaryoten)", "Zellkern & Cytoplasma"],
          [
            "Funktion",
            "Langfristige Speicherung der Erbinformation",
            "Informationsübertragung, Proteinbiosynthese, Regulation",
          ],
        ],
      },
      merke:
        "DNA hat <strong>T</strong>hymin, RNA hat <strong>U</strong>racil. DNA ist <strong>D</strong>oppelsträngig, RNA ist meist <strong>E</strong>inzelsträngig.",
    },

    // ──────────────────────────────────────────────
    // 3. Transkription
    // ──────────────────────────────────────────────
    {
      heading: "Transkription (DNA → mRNA)",
      content:
        "Die Transkription ist der erste Schritt der Genexpression: Ein DNA-Abschnitt (Gen) wird in eine komplementäre mRNA-Kopie umgeschrieben. Die Transkription erfolgt bei Eukaryoten im Zellkern.\n\n" +
        "**Enzyme und Signale:** Die RNA-Polymerase II (bei Eukaryoten) katalysiert die mRNA-Synthese. Sie erkennt den Promotor — eine spezifische DNA-Sequenz vor dem Gen, die häufig eine TATA-Box enthält (ca. 25 bp vor dem Transkriptionsstart). Transkriptionsfaktoren helfen bei der Bindung der RNA-Polymerase an den Promotor. Am Ende des Gens befindet sich ein Terminator-Signal, das die Transkription beendet.\n\n" +
        "**Ablauf:** Die RNA-Polymerase liest den Matrizenstrang (template strand, auch codogener Strang) in 3'→5'-Richtung und synthetisiert die mRNA in 5'→3'-Richtung. Die mRNA-Sequenz entspricht dem codierenden Strang (Nicht-Matrizenstrang, sense strand), wobei T durch U ersetzt ist. Wichtig: DNA-Polymerase und RNA-Polymerase synthetisieren beide in 5'→3'-Richtung.\n\n" +
        "**Posttranskriptionale Modifikation (mRNA-Processing, nur Eukaryoten):**\n" +
        "Die prä-mRNA (primäres Transkript) wird vor dem Transport ins Cytoplasma dreifach modifiziert:\n" +
        "(1) 5'-Capping: Ein 7-Methylguanosin-Cap wird an das 5'-Ende angefügt. Es schützt vor Abbau, unterstützt den Transport und die Ribosomenbindung.\n" +
        "(2) Polyadenylierung: Ein Poly-A-Schwanz (ca. 200 Adenin-Nukleotide) wird an das 3'-Ende angefügt. Er stabilisiert die mRNA und reguliert deren Lebensdauer.\n" +
        "(3) Spleißen: Introns (nicht-codierende Sequenzen) werden durch das Spliceosom (Komplex aus snRNAs und Proteinen) herausgeschnitten. Die Exons (codierende Sequenzen) werden zusammenligiert. Alternatives Spleißen ermöglicht es, aus einem Gen mehrere verschiedene Proteine herzustellen — ein wichtiger Mechanismus zur Erhöhung der Proteinvielfalt (das menschliche Genom hat ca. 20.000 Gene, aber über 100.000 verschiedene Proteine).",
      diagram: "transcription-translation",
      merke:
        "Introns = <strong>IN</strong> den Müll (werden rausgespleißt). Exons = <strong>EX</strong>primiert (bleiben in der reifen mRNA und werden translatiert).",
    },

    // ──────────────────────────────────────────────
    // 4. Translation
    // ──────────────────────────────────────────────
    {
      heading: "Translation (mRNA → Protein)",
      content:
        "Die Translation ist der zweite Schritt der Proteinbiosynthese: Die Basensequenz der mRNA wird an den Ribosomen im Cytoplasma in eine Aminosäuresequenz (Polypeptidkette) übersetzt.\n\n" +
        "**Codon-Prinzip:** Die mRNA wird in Basentriplets (Codons) gelesen. Jedes Codon codiert für eine bestimmte Aminosäure. Die Leserichtung ist 5'→3'. Das Startcodon AUG codiert für Methionin und markiert den Translationsbeginn. Die Stoppcodons UAA, UAG und UGA codieren für keine Aminosäure und beenden die Translation.\n\n" +
        "**Ribosom-Aufbau:** Eukaryotische Ribosomen (80S) bestehen aus zwei Untereinheiten (40S + 60S). Sie besitzen drei funktionelle Bindungsstellen für tRNA:\n" +
        "• A-Stelle (Aminoacyl-Stelle): Hier bindet die neu ankommende Aminoacyl-tRNA mit ihrem Anticodon an das mRNA-Codon.\n" +
        "• P-Stelle (Peptidyl-Stelle): Hier sitzt die tRNA, die die wachsende Polypeptidkette trägt.\n" +
        "• E-Stelle (Exit-Stelle): Hier verlässt die entladene tRNA das Ribosom.\n\n" +
        "**Phasen der Translation:**\n\n" +
        "1) Initiation: Die kleine ribosomale Untereinheit bindet an die mRNA (5'-Cap-Erkennung) und gleitet bis zum Startcodon AUG. Die Initiator-tRNA (Met-tRNA) bindet an das AUG. Die große Untereinheit lagert sich an und bildet das funktionsfähige Ribosom. Die Met-tRNA sitzt in der P-Stelle.\n\n" +
        "2) Elongation: (a) Codon-Erkennung: Eine Aminoacyl-tRNA mit passendem Anticodon bindet an die A-Stelle. (b) Peptidbindung: Die Peptidyltransferase (katalytische Aktivität der rRNA) überträgt die Polypeptidkette von der tRNA in der P-Stelle auf die Aminosäure in der A-Stelle — es entsteht eine neue Peptidbindung. (c) Translokation: Das Ribosom bewegt sich um ein Codon (3 Basen) in 5'→3'-Richtung weiter. Die tRNA wechselt von der A-Stelle in die P-Stelle, die alte tRNA rückt in die E-Stelle und wird freigesetzt. Der Zyklus wiederholt sich für jedes Codon.\n\n" +
        "3) Termination: Wenn ein Stoppcodon (UAA, UAG oder UGA) die A-Stelle erreicht, bindet kein tRNA, sondern ein Release-Faktor. Dieser löst die Freisetzung der fertigen Polypeptidkette aus. Das Ribosom dissoziiert in seine Untereinheiten.\n\n" +
        "Mehrere Ribosomen können gleichzeitig eine mRNA translatieren — diese Struktur nennt man Polysom (Polyribosom).",
      merke:
        'Startcodon: <strong>AUG</strong> (Methionin). Stoppcodons: <strong>UAA, UAG, UGA</strong> — merke: "<strong>U</strong> <strong>A</strong>re <strong>A</strong>way", "<strong>U</strong> <strong>A</strong>re <strong>G</strong>one", "<strong>U</strong> <strong>G</strong>o <strong>A</strong>way"',
    },

    // ──────────────────────────────────────────────
    // 5. Genetischer Code
    // ──────────────────────────────────────────────
    {
      heading: "Genetischer Code",
      content:
        "Der genetische Code ist die Zuordnung von mRNA-Codons zu Aminosäuren. Er wurde in den 1960er Jahren u.a. durch Nirenberg, Matthäi und Khorana entschlüsselt.\n\n" +
        "**Grundprinzip:** Vier verschiedene Basen (A, U, G, C) werden in Dreiergruppen (Codons) gelesen. Es gibt 4³ = 64 mögliche Codons. Davon codieren 61 für die 20 proteinogenen Aminosäuren, und 3 sind Stoppcodons (UAA, UAG, UGA).\n\n" +
        "**Eigenschaften des genetischen Codes:**\n\n" +
        "1) Universell: Der genetische Code ist bei nahezu allen Lebewesen identisch — von Bakterien bis zum Menschen. Ausnahmen: Mitochondrien und einige einzellige Organismen haben leicht abgewandelte Codes.\n\n" +
        "2) Degeneriert (redundant): Es gibt mehr Codons (61 für AS) als Aminosäuren (20). Daher codieren mehrere verschiedene Codons für dieselbe Aminosäure. Beispiel: Leucin wird von 6 Codons codiert (UUA, UUG, CUU, CUC, CUA, CUG). Wichtig: Degeneriert bedeutet NICHT mehrdeutig! Jedes Codon codiert eindeutig für nur eine einzige Aminosäure.\n\n" +
        "3) Kommafrei: Die Codons werden lückenlos hintereinander gelesen. Es gibt keine Trennzeichen zwischen den Codons. Der Leserahmen (reading frame) wird durch das Startcodon AUG festgelegt.\n\n" +
        "4) Nicht-überlappend: Jedes Nukleotid gehört nur zu einem einzigen Codon (Ausnahmen bei einigen Viren).\n\n" +
        "**Wobble-Hypothese (Crick, 1966):** Die dritte Base eines Codons (die Wobble-Position) paart weniger spezifisch mit dem Anticodon der tRNA. Daher kann eine einzige tRNA mehrere Codons erkennen, die sich nur in der dritten Position unterscheiden. Dies erklärt, warum die Degeneriertheit des Codes hauptsächlich in der dritten Codonposition auftritt und warum die Zelle mit weniger als 61 verschiedenen tRNAs auskommt (tatsächlich ca. 45 verschiedene tRNAs beim Menschen).",
      merke:
        "Der genetische Code ist <strong>degeneriert</strong> (mehrere Codons für eine AS), aber <strong>nicht mehrdeutig</strong> (jedes Codon codiert nur EINE AS). 4³ = 64 Codons > 20 Aminosäuren.",
      altfrage:
        '"Wie viele verschiedene Codons gibt es?" → 64 (4³). Davon codieren 61 für Aminosäuren und 3 sind Stoppcodons (UAA, UAG, UGA).',
    },

    // ──────────────────────────────────────────────
    // 6. Mendelsche Regeln
    // ──────────────────────────────────────────────
    {
      heading: "Mendelsche Regeln",
      content:
        "Gregor Mendel (1822–1884) formulierte die grundlegenden Gesetze der Vererbung anhand seiner Kreuzungsexperimente mit Erbsen (Pisum sativum). Seine drei Regeln bilden die Basis der klassischen Genetik.\n\n" +
        "**Wichtige Begriffe:**\n" +
        "• Genotyp: Genetische Ausstattung eines Individuums (z.B. Aa)\n" +
        "• Phänotyp: Sichtbares Erscheinungsbild (z.B. gelbe Samen)\n" +
        "• Homozygot: Reinerbig (AA oder aa) — beide Allele gleich\n" +
        "• Heterozygot: Mischerbig (Aa) — zwei verschiedene Allele\n" +
        "• Dominant: Allel, das sich im heterozygoten Zustand durchsetzt (A)\n" +
        "• Rezessiv: Allel, das nur im homozygoten Zustand sichtbar wird (a)\n" +
        "• Kodominanz: Beide Allele exprimieren sich gleich stark (z.B. Blutgruppe AB: Iᴬ und Iᴮ)\n" +
        "• Intermediärer Erbgang: Heterozygote zeigen einen Mischphänotyp (z.B. rote × weiße Blüten → rosa)\n\n" +
        "**1. Uniformitätsregel (Uniformity Rule):**\n" +
        "Kreuzt man zwei homozygote (reinerbige) Eltern, die sich in einem Merkmal unterscheiden (P: AA × aa), so sind alle Nachkommen der F1-Generation uniform (gleich) in Genotyp (Aa) und Phänotyp. Bei dominant-rezessivem Erbgang zeigen alle F1-Individün den dominanten Phänotyp. Bei intermediärem Erbgang zeigen alle F1 eine Zwischenform.\n\n" +
        "**2. Spaltungsregel (Segregation Rule):**\n" +
        "Kreuzt man die F1-Hybriden untereinander (Aa × Aa), so spalten sich die Merkmale in der F2-Generation in einem bestimmten Verhältnis auf:\n" +
        "• Genotypisches Spaltungsverhältnis: 1 AA : 2 Aa : 1 aa\n" +
        "• Phänotypisches Spaltungsverhältnis (dominant-rezessiv): 3 : 1 (drei zeigen den dominanten Phänotyp, eins den rezessiven)\n" +
        "• Phänotypisches Spaltungsverhältnis (intermediär): 1 : 2 : 1\n\n" +
        "**3. Unabhängigkeitsregel (Independent Assortment Rule / Dihybride Kreuzung):**\n" +
        "Werden zwei oder mehr Merkmale gleichzeitig betrachtet (dihybrider Erbgang), so werden die einzelnen Allele unabhängig voneinander vererbt und neu kombiniert — vorausgesetzt, die Gene liegen auf verschiedenen Chromosomen (keine genetische Kopplung). Kreuzung AaBb × AaBb ergibt das phänotypische Spaltungsverhältnis 9:3:3:1 in der F2-Generation (bei dominant-rezessiven Erbgängen). Liegen Gene auf demselben Chromosom, werden sie häufig gemeinsam vererbt (Kopplung), sofern kein Crossing-over stattfindet.",
      diagram: "pedigree-analysis",
      merke:
        "Spaltungsverhältnisse: Monohybrid <strong>3:1</strong> (phänotypisch) bzw. <strong>1:2:1</strong> (genotypisch). Dihybrid: <strong>9:3:3:1</strong>. Die 3. Regel gilt nur bei Genen auf <strong>verschiedenen Chromosomen</strong> (keine Kopplung)!",
    },

    // ──────────────────────────────────────────────
    // 7. Erbgänge
    // ──────────────────────────────────────────────
    {
      heading: "Erbgänge",
      content:
        "Erbgänge beschreiben, wie ein genetisches Merkmal (oft eine Erbkrankheit) von Generation zu Generation weitergegeben wird. Anhand von Stammbaumanalysen lässt sich der Erbgang einer Erkrankung identifizieren.\n\n" +
        "**Autosomal-dominanter Erbgang:**\n" +
        "Das krankmachende Allel (A) liegt auf einem Autosom und ist dominant. Bereits ein mutiertes Allel reicht für die Erkrankung: Genotyp Aa oder AA → krank, aa → gesund. Merkmale: Die Erkrankung tritt in jeder Generation auf (keine Generation wird übersprungen). Jedes betroffene Kind hat mindestens einen betroffenen Elternteil. Männer und Frauen sind gleich häufig betroffen. Beispiele: Chorea Huntington, Marfan-Syndrom, familiäre Hypercholesterinämie.\n\n" +
        "**Autosomal-rezessiver Erbgang:**\n" +
        "Das krankmachende Allel (a) liegt auf einem Autosom und ist rezessiv. Nur homozygote Individün (aa) sind erkrankt. Heterozygote (Aa) sind phänotypisch gesund, aber Konduktoren (Anlageträger). Merkmale: Die Erkrankung überspringt häufig Generationen. Betroffene Kinder können gesunde Eltern haben (wenn beide Konduktoren sind). Konsanguinität (Verwandtenehe) erhöht das Risiko. Männer und Frauen sind gleich häufig betroffen. Beispiele: Mukoviszidose (Cystische Fibrose), Sichelzellanämie, Phenylketonurie (PKU), Albinismus.\n\n" +
        "**X-chromosomal-rezessiver Erbgang:**\n" +
        "Das krankmachende Allel liegt auf dem X-Chromosom und ist rezessiv. Männer sind deutlich häufiger betroffen, da sie nur ein X-Chromosom besitzen (hemizygot: XᵃY → krank). Frauen erkranken nur bei Homozygotie (XᵃXᵃ → selten). Heterozygote Frauen (XᴬXᵃ) sind Konduktorinnen (klinisch gesund, aber Überträgerinnen). Merkmale: Vorwiegend Männer betroffen. Keine Vater-zu-Sohn-Übertragung (Vater gibt Y-Chromosom an Söhne). Betroffene Söhne erhalten das mutierte X von der Mutter (Konduktorin). Beispiele: Hämophilie A und B (Bluterkrankheit), Rot-Grün-Blindheit (Protanopie/Deuteranopie), Muskeldystrophie Duchenne, G6PD-Mangel (Favismus).\n\n" +
        "**X-chromosomal-dominanter Erbgang:**\n" +
        "Das krankmachende Allel liegt auf dem X-Chromosom und ist dominant. Selten. Bereits ein mutiertes X-Allel reicht für die Erkrankung bei beiden Geschlechtern. Frauen sind häufiger betroffen als Männer (doppelte Chance, ein mutiertes X zu erben). Betroffene Väter geben die Erkrankung an alle Töchter, aber keine Söhne. Beispiele: Rett-Syndrom, Vitamin-D-resistente Rachitis (Phosphatdiabetes).",
      vergleichsTabelle: {
        headers: ["Erbgang", "Krankheitsbeispiel", "Erkennungsmerkmal"],
        rows: [
          [
            "Autosomal-dominant",
            "Chorea Huntington, Marfan-Syndrom",
            "Jede Generation betroffen, kein Geschlechtsunterschied, vertikales Muster im Stammbaum",
          ],
          [
            "Autosomal-rezessiv",
            "Mukoviszidose, Sichelzellanämie, PKU",
            "Generationen werden übersprungen, gesunde Eltern können kranke Kinder haben (Konduktoren Aa), Konsanguinität erhöht Risiko",
          ],
          [
            "X-chromosomal-rezessiv",
            "Hämophilie, Rot-Grün-Blindheit, Duchenne",
            "Vorwiegend Männer betroffen, keine Vater-Sohn-Übertragung, Mutter ist Konduktorin",
          ],
          [
            "X-chromosomal-dominant",
            "Rett-Syndrom, Phosphatdiabetes",
            "Selten, Frauen häufiger betroffen, betroffener Vater → alle Töchter betroffen",
          ],
        ],
      },
      altfrage:
        '"Rot-Grün-Schwäche ist..." → <strong>X-chromosomal rezessiv</strong>. Deshalb sind ca. 8% der Männer, aber nur 0,5% der Frauen betroffen (Frauen bräuchten das Allel auf BEIDEN X-Chromosomen).',
      klinik:
        "Mukoviszidose ist die häufigste autosomal-rezessive Erkrankung bei Europäern. Ca. 1 von 25 Personen ist Konduktor (Aa). Wahrscheinlichkeit für ein krankes Kind bei zwei Konduktoren: 25%.",
    },

    // ──────────────────────────────────────────────
    // 8. Mutationen
    // ──────────────────────────────────────────────
    {
      heading: "Mutationen",
      content:
        "Eine Mutation ist eine dauerhafte Veränderung des Erbguts. Mutationen können spontan auftreten (Replikationsfehler, ca. 1 pro 10⁹ Basenpaare nach Korrektur) oder durch Mutagene (UV-Strahlung, Chemikalien, Viren) induziert werden. Man unterscheidet drei Ebenen:\n\n" +
        "**1. Genmutationen (Punktmutationen und kleine Veränderungen):**\n" +
        "Diese betreffen einzelne oder wenige Nukleotide innerhalb eines Gens.\n" +
        "• Stille Mutation (silent): Das Codon ändert sich, codiert aber aufgrund der Degeneriertheit des Codes für dieselbe Aminosäure. Keine Auswirkung auf das Protein.\n" +
        "• Missense-Mutation: Ein Basenaustausch führt zum Einbau einer anderen Aminosäure. Kann harmlos oder pathologisch sein. Beispiel: Sichelzellanämie (Glutamat → Valin in β-Globin durch Mutation GAG → GUG).\n" +
        "• Nonsense-Mutation: Ein Basenaustausch erzeugt ein vorzeitiges Stoppcodon. Das Protein wird verkürzt und ist meist funktionslos.\n" +
        "• Insertion: Einbau von einem oder mehreren zusätzlichen Nukleotiden.\n" +
        "• Deletion: Verlust von einem oder mehreren Nukleotiden.\n" +
        "• Frameshift-Mutation: Insertionen oder Deletionen, deren Basenzahl kein Vielfaches von 3 ist, verschieben den gesamten Leserahmen ab der Mutationsstelle. Alle nachfolgenden Codons werden falsch gelesen → in der Regel schwerwiegend (veränderte Aminosäuresequenz + meist vorzeitiges Stoppcodon).\n\n" +
        "**2. Chromosomenmutationen (strukturelle Chromosomenaberrationen):**\n" +
        "Diese betreffen die Struktur einzelner Chromosomen.\n" +
        "• Deletion: Verlust eines Chromosomensegments (z.B. Cri-du-Chat-Syndrom: Deletion am kurzen Arm von Chromosom 5).\n" +
        "• Duplikation: Verdopplung eines Chromosomensegments.\n" +
        "• Inversion: Ein Chromosomensegment wird herausgeschnitten und in umgekehrter Orientierung wieder eingebaut.\n" +
        "• Translokation: Übertragung eines Chromosomensegments auf ein anderes, nicht-homologes Chromosom. Beispiel: Philadelphia-Chromosom (t(9;22)) bei chronischer myeloischer Leukämie (CML) — Fusion der Gene BCR und ABL.\n\n" +
        "**3. Genommutationen (numerische Chromosomenaberrationen):**\n" +
        "Diese betreffen die Anzahl der Chromosomen im gesamten Genom.\n" +
        "• Aneuploidie: Abweichung um einzelne Chromosomen. Ursache: Non-Disjunction in der Meiose (Chromosomen trennen sich nicht korrekt).\n" +
        "  - Trisomie 21 (Down-Syndrom): 47 Chromosomen, Chromosom 21 dreifach. Häufigstes Auftreten, Risiko steigt mit mütterlichem Alter.\n" +
        "  - Trisomie 18 (Edwards-Syndrom): Schwere Fehlbildungen, meist letal.\n" +
        "  - Trisomie 13 (Patau-Syndrom): Schwere Fehlbildungen, meist letal.\n" +
        "  - Turner-Syndrom (45,X): Monosomie X, weiblicher Phänotyp, Minderwuchs, Infertilität.\n" +
        "  - Klinefelter-Syndrom (47,XXY): Männlicher Phänotyp, Hochwuchs, Infertilität, oft Gynäkomastie.\n" +
        "• Polyploidie: Vervielfachung des gesamten Chromosomensatzes (3n = triploid, 4n = tetraploid). Beim Menschen nicht lebensfähig, bei Pflanzen häufig.",
      vergleichsTabelle: {
        headers: ["Mutationstyp", "Ebene", "Beispiel"],
        rows: [
          [
            "Punktmutation (Missense)",
            "Genmutation (einzelne Basen)",
            "Sichelzellanämie (GAG → GUG im β-Globin-Gen)",
          ],
          [
            "Insertion/Deletion (Frameshift)",
            "Genmutation (Leserahmenverschiebung)",
            "Bestimmte Formen der Mukoviszidose (ΔF508: 3-bp-Deletion)",
          ],
          [
            "Deletion (chromosomal)",
            "Chromosomenmutation (Strukturveränderung)",
            "Cri-du-Chat-Syndrom (Deletion 5p)",
          ],
          [
            "Translokation",
            "Chromosomenmutation (Strukturveränderung)",
            "Philadelphia-Chromosom t(9;22) bei CML",
          ],
          [
            "Trisomie",
            "Genommutation (numerische Aberration)",
            "Down-Syndrom (Trisomie 21, 47 Chromosomen)",
          ],
        ],
      },
      merke:
        "Trisomie 21 ist eine <strong>Genommutation</strong> (NICHT Genmutation!) — die Gesamtzahl der Chromosomen ist verändert (47 statt 46). Non-Disjunction in der Meiose.",
      altfrage:
        '"Trisomie 21 ist eine..." → <strong>Genommutation</strong> (numerische Chromosomenaberration). NICHT Genmutation (betrifft einzelne Gene) und NICHT Chromosomenmutation (strukturelle Veränderung).',
    },

    // ──────────────────────────────────────────────
    // 9. Blutgruppen (ABO & Rhesus)
    // ──────────────────────────────────────────────
    {
      heading: "Blutgruppen (ABO & Rhesus)",
      content:
        "Das Blutgruppensystem ist ein klassisches Beispiel für Kodominanz und hat große klinische Bedeutung bei Bluttransfusionen und in der Schwangerschaftsmedizin.\n\n" +
        "**ABO-System (Karl Landsteiner, 1901):**\n" +
        "Das ABO-System wird durch ein Gen auf Chromosom 9 bestimmt, das drei Allele besitzt: Iᴬ, Iᴮ und i. Iᴬ und Iᴮ sind kodominant züinander (beide werden im heterozygoten Zustand exprimiert → Blutgruppe AB). Das Allel i ist rezessiv gegenüber Iᴬ und Iᴮ.\n\n" +
        "Die Allele codieren für Enzyme (Glykosyltransferasen), die bestimmte Zuckerreste an eine Grundstruktur (H-Antigen) auf der Oberfläche der Erythrozyten anfügen:\n" +
        "• Iᴬ → N-Acetylgalactosamin wird angehängt → Antigen A\n" +
        "• Iᴮ → Galactose wird angehängt → Antigen B\n" +
        "• i → kein Zucker wird angehängt → kein Antigen (nur H-Antigen)\n\n" +
        "**Genotypen und Phänotypen:**\n" +
        "• Blutgruppe A: Genotyp IᴬIᴬ oder Iᴬi → A-Antigene auf Erythrozyten, Anti-B-Antikörper im Plasma\n" +
        "• Blutgruppe B: Genotyp IᴮIᴮ oder Iᴮi → B-Antigene auf Erythrozyten, Anti-A-Antikörper im Plasma\n" +
        "• Blutgruppe AB: Genotyp IᴬIᴮ → A- und B-Antigene, keine Antikörper im Plasma → Universalempfänger\n" +
        "• Blutgruppe 0: Genotyp ii → keine A/B-Antigene, Anti-A- und Anti-B-Antikörper im Plasma → Universalspender\n\n" +
        "Die Antikörper im ABO-System sind sogenannte reguläre (natürliche) Antikörper der Klasse IgM. Sie werden ohne vorherige Sensibilisierung gebildet (wahrscheinlich durch Kreuzreaktivität mit bakteriellen Antigenen im Darm) und sind bereits ab dem 3.–6. Lebensmonat nachweisbar.\n\n" +
        "**Rhesus-System:**\n" +
        "Das wichtigste Rhesus-Antigen ist das D-Antigen (Rh-Faktor). Der Erbgang ist autosomal-dominant:\n" +
        "• Rh-positiv (Rh+): Genotyp DD oder Dd → D-Antigen auf Erythrozyten vorhanden (~85% der Europäer)\n" +
        "• Rh-negativ (Rh⁻): Genotyp dd → kein D-Antigen (~15% der Europäer)\n\n" +
        "Im Gegensatz zum ABO-System bilden Rh⁻-Personen Anti-D-Antikörper (IgG) erst nach Sensibilisierung (Kontakt mit Rh⁺-Blut durch Transfusion oder Schwangerschaft). Diese irregulären Antikörper sind plazentagängig (IgG!) und können bei einer nachfolgenden Schwangerschaft mit einem Rh⁺-Fetus den Morbus hämolyticus neonatorum verursachen.",
      vergleichsTabelle: {
        headers: ["Blutgruppe", "Genotyp", "Antigene", "Antikörper"],
        rows: [
          ["A", "IᴬIᴬ oder Iᴬi", "A-Antigen", "Anti-B"],
          ["B", "IᴮIᴮ oder Iᴮi", "B-Antigen", "Anti-A"],
          ["AB", "IᴬIᴮ", "A- und B-Antigen", "Keine (→ Universalempfänger)"],
          ["0", "ii", "Keine (nur H-Antigen)", "Anti-A und Anti-B (→ Universalspender)"],
        ],
      },
      merke:
        "Universalspender: <strong>Blutgruppe 0</strong> (keine Antigene auf Erythrozyten). Universalempfänger: <strong>Blutgruppe AB</strong> (keine Antikörper im Plasma). ABO = kodominanter Erbgang!",
      klinik:
        "Rhesus-Inkompatibilität: Rh⁻ Mutter + Rh⁺ Kind → Mutter bildet Anti-D-Antikörper → Gefahr für 2. Schwangerschaft (Morbus hämolyticus neonatorum). Prävention: Anti-D-Prophylaxe.",
    },
  ],

  keyFacts: [
    {
      label: "Basenpaarung",
      value: "A=T: 2 H-Brücken, G≡C: 3 H-Brücken",
    },
    {
      label: "Startcodon",
      value: "AUG (Methionin)",
    },
    {
      label: "Stoppcodons",
      value: "UAA, UAG, UGA",
    },
    {
      label: "Codon-Anzahl",
      value: "64 Codons → 20 Aminosäuren + 3 Stoppcodons",
    },
    {
      label: "Chromosomenzahl Mensch",
      value: "46 Chromosomen (22 Autosomenpaare + XX/XY)",
    },
    {
      label: "Monohybrid F2",
      value: "3:1 (phänotypisch), 1:2:1 (genotypisch)",
    },
    {
      label: "Trisomie 21",
      value: "Genommutation (nicht Genmutation!)",
    },
    {
      label: "Blutgruppen-Spende",
      value: "Universalspender: 0, Universalempfänger: AB",
    },
    {
      label: "X-chrom. rezessiv",
      value: "Männer häufiger betroffen",
    },
    {
      label: "DNA-Replikation",
      value: "Semikonservativ, 5'→3'",
    },
  ],

  selfTestQuestions: [
    {
      question: "Wie viele Wasserstoffbrücken bildet das Basenpaar G-C?",
      options: ["1", "2", "3", "4", "5"],
      correctIndex: 2,
      explanation:
        "G≡C bildet 3 H-Brücken (stärker), A=T bildet nur 2 H-Brücken. GC-reiche DNA-Abschnitte haben daher eine höhere Schmelztemperatur.",
    },
    {
      question: "Welches ist das Startcodon der Translation?",
      options: ["UAA", "AUG", "UAG", "GCA", "UGA"],
      correctIndex: 1,
      explanation:
        "AUG codiert für Methionin und ist gleichzeitig das Startcodon. UAA, UAG und UGA sind Stoppcodons.",
    },
    {
      question: "Trisomie 21 ist eine...",
      options: [
        "Genmutation",
        "Chromosomenmutation",
        "Genommutation",
        "Punktmutation",
        "Translokation",
      ],
      correctIndex: 2,
      explanation:
        "Trisomie 21 ist eine Genommutation (numerische Chromosomenaberration) — das Chromosom 21 liegt dreifach vor (47 Chromosomen statt 46). Ursache: Non-Disjunction in der Meiose.",
    },
    {
      question: "Welche Blutgruppe ist der Universalspender?",
      options: ["A", "B", "AB", "0", "Rh+"],
      correctIndex: 3,
      explanation:
        "Blutgruppe 0 hat keine A- oder B-Antigene auf den Erythrozyten und kann daher an alle Empfänger gespendet werden. Blutgruppe AB ist der Universalempfänger (keine Antikörper im Plasma).",
    },
    {
      question: "Was wird beim Spleißen entfernt?",
      options: ["Exons", "Introns", "Poly-A-Schwanz", "5'-Cap", "Promotor"],
      correctIndex: 1,
      explanation:
        "Beim Spleißen werden die Introns (nicht-codierende Sequenzen) aus der prä-mRNA entfernt. Die Exons (exprimierte Sequenzen) werden zusammengefügt und bilden die reife mRNA.",
    },
  ],

  summary: [
    "Die DNA ist ein Doppelhelix-Molekül aus Nukleotiden mit komplementärer Basenpaarung (A=T mit 2, G≡C mit 3 H-Brücken). Die Replikation erfolgt semikonservativ durch DNA-Polymerase III in 5'→3'-Richtung.",
    "RNA unterscheidet sich von DNA durch Ribose, Uracil (statt Thymin) und Einzelsträngigkeit. Drei Haupttypen: mRNA (Boten-RNA), tRNA (Transfer-RNA) und rRNA (ribosomale RNA).",
    "Bei der Transkription wird DNA durch RNA-Polymerase in mRNA umgeschrieben. Bei Eukaryoten folgt mRNA-Processing: 5'-Capping, Polyadenylierung und Spleißen (Introns raus, Exons bleiben).",
    "Die Translation erfolgt an Ribosomen: mRNA wird in 5'→3'-Richtung in Codons (Basentriplets) gelesen. Startcodon AUG, Stoppcodons UAA/UAG/UGA. tRNA liefert die passenden Aminosäuren.",
    "Der genetische Code umfasst 64 Codons für 20 Aminosäuren. Er ist universell, degeneriert (redundant), kommafrei und nicht-überlappend. Die Wobble-Position (3. Base) erklärt die Degeneriertheit.",
    "Mendelsche Regeln: 1. Uniformität (F1 uniform), 2. Spaltung (F2: 3:1 phänotypisch), 3. Unabhängigkeit (9:3:3:1 bei dihybridem Erbgang, nur bei freier Kombinierbarkeit).",
    "Erbgänge: autosomal-dominant (jede Generation), autosomal-rezessiv (überspringt Generationen), X-chromosomal-rezessiv (Männer häufiger betroffen). Stammbaumanalyse ist essenziell.",
    "Mutationen auf drei Ebenen: Genmutationen (Punkt-, Frameshift-), Chromosomenmutationen (Deletion, Translokation), Genommutationen (Aneuploidie wie Trisomie 21, Polyploidie).",
    "ABO-Blutgruppen: kodominanter Erbgang (Iᴬ, Iᴮ kodominant, i rezessiv). Universalspender: 0, Universalempfänger: AB. Rhesus: dominant (D), Anti-D-Prophylaxe bei Rh⁻-Müttern.",
  ],
};
