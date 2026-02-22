import type { Kapitel } from '../types';

export const chemKap13: Kapitel = {
  id: 'chem-kap13',
  title: "Naturstoffe",
  subject: 'chemie',
  icon: '🔬',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'ch-13-01',
      title: "Aminosäuren und Proteine",
      content: `# Aminosäuren und Proteine

## Grundstruktur der Aminosäuren

Alle 20 proteinogenen Aminosäuren besitzen einen einheitlichen Grundbauplan am α-Kohlenstoff: eine **α-Aminogruppe** (–NH₂), eine **α-Carboxylgruppe** (–COOH), ein Wasserstoffatom und eine variable **Seitenkette (R-Gruppe)**. Glycin ist die einzige Ausnahme ohne Stereozentrum (R = H), alle anderen liegen als L-Enantiomere vor.

## Klassifikation der Aminosäuren

Nach der Polarität der R-Gruppe unterscheidet man:
- **Unpolare (hydrophobe)**: Alanin, Valin, Leucin, Isoleucin, Phenylalanin, Tryptophan, Methionin, Prolin
- **Polare ungeladene**: Serin, Threonin, Cystein, Tyrosin, Asparagin, Glutamin
- **Saure (negativ bei pH 7)**: Asparaginsäure, Glutaminsäure
- **Basische (positiv bei pH 7)**: Lysin, Arginin, Histidin
- **Schwefelhaltige**: Cystein (–SH, Disulfidbrücken) und Methionin (–S–CH₃)
- **Aromatische**: Phenylalanin, Tyrosin, Tryptophan

**Essentielle Aminosäuren** (8 beim Erwachsenen): Isoleucin, Leucin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan, Valin. Histidin ist essentiell für Kinder.

## Peptidbindung

Die Peptidbindung entsteht durch **Kondensationsreaktion** zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe der nächsten unter Abspaltung eines Wassermoleküls. Das Resultat ist eine Amidbindung (–CO–NH–). Charakteristika der Peptidbindung: **planar** (sp²-Hybridisierung), **partieller Doppelbindungscharakter** (Mesomerie), **keine freie Rotation** um die C–N-Achse, Syntheserichtung von N-Terminus → C-Terminus.

## Proteinstruktur

Die räumliche Organisation von Proteinen wird in vier Ebenen beschrieben:
- **Primärstruktur**: lineare Aminosäuresequenz, durch Peptidbindungen festgelegt; bestimmt alle übergeordneten Strukturen
- **Sekundärstruktur**: lokale räumliche Anordnung durch H-Brücken im Peptidrückgrat; α-Helix (H-Brücken zwischen C=O an Position n und N–H an n+4), β-Faltblatt (H-Brücken zwischen parallelen oder antiparallelen Strängen)
- **Tertiärstruktur**: gesamte 3D-Faltung des Polypeptids; stabilisiert durch hydrophobe Wechselwirkungen (unpolarer Kern), Disulfidbrücken (Cystein–Cystein), ionische Salzbrücken, H-Brücken und Van-der-Waals-Kräfte
- **Quartärstruktur**: Anordnung mehrerer Untereinheiten (Polypeptidketten) zu einem funktionstüchtigen Proteinkomplex; Beispiel: Hämoglobin (2α + 2β)

## Denaturierung

Denaturierung bezeichnet den **Verlust der nativen Raumstruktur** (Sekundär- bis Quartärstruktur) bei erhaltener Primärstruktur. Auslöser: hohe Temperatur (Zerstörung von H-Brücken und hydrophoben WW), extremer pH-Wert (Änderung ionischer WW), organische Lösungsmittel (Stören des hydrophoben Effekts), reduzierende Agenzien (Spaltung von Disulfidbrücken). Denaturierung kann **reversibel** (z.B. Chaperone assistieren bei Rückfaltung) oder **irreversibel** (gekochtes Ei, Prionen) sein.

## Klinische Relevanz

**Sichelzellanämie**: Punktmutation Glu→Val an Position 6 der β-Globinkette führt zu Aggregation von Desoxy-HbS. **Phenylketonurie (PKU)**: Enzymdefekt Phenylalanin-Hydroxylase → Phenylalanin akkumuliert, kein Tyrosin. **Enzyme als Biomarker**: Troponin T/I (Herzinfarkt), CK-MB (Herzmuskelnekrose), LDH (unspezifisch), GPT/ALT und AST (Leberschäden).`,
      lernziele: [
        "Den Grundaufbau einer Aminosäure (α-C, Amino-, Carboxylgruppe, R-Gruppe) beschreiben und Aminosäuren nach Polarität und Ladung klassifizieren",
        "Die Bildung einer Peptidbindung als Kondensationsreaktion erklären und ihre strukturellen Besonderheiten (planar, partieller Doppelbindungscharakter) nennen",
        "Die vier Ebenen der Proteinstruktur und die jeweiligen stabilisierenden Wechselwirkungen beschreiben",
        "Denaturierung erklären und Beispiele für reversible und irreversible Denaturierung nennen",
        "Klinisch relevante Proteindefekte (Sichelzellanämie, PKU) und enzymatische Biomarker kennen",
      ],
      sections: [
        {
          heading: "Peptidbindung und Proteinstruktur im Überblick",
          text: "Die Peptidbindung ist das Rückgrat aller Proteine. Sie entsteht durch Kondensation (–H₂O) zwischen –COOH und –NH₂. Ihre Planarität durch Mesomerie schränkt die Rotation ein und zwingt das Polypeptid in definierte Konformationen. Auf der Primärstruktur (Sequenz) bauen Sekundärstruktur (α-Helix, β-Faltblatt durch H-Brücken im Rückgrat), Tertiärstruktur (globale 3D-Faltung durch Seitenketten-WW) und Quartärstruktur (Multimerbildung) auf.",
          merksatz: "Primär = Sequenz; Sekundär = H-Brücken im Rückgrat; Tertiär = Seitenketten-Wechselwirkungen; Quartär = Untereinheiten.",
        },
        {
          heading: "Essentielle Aminosäuren und ihre klinische Bedeutung",
          text: "Die acht essentiellen Aminosäuren des Erwachsenen (Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) können vom Körper nicht synthetisiert werden. PKU entsteht bei fehlendem Abbau von Phenylalanin (Enzymdefekt Phe-Hydroxylase → fehlendes Tyrosin, toxische Phe-Metabolite → Hirnschäden wenn unbehandelt). Die Sichelzellanämie zeigt, wie ein einziger Aminosäurenaustausch in der Primärstruktur die gesamte Proteinfunktion und klinische Manifestation verändert.",
          merksatz: "Essentielle AS: Ile-Leu-Lys-Met-Phe-Thr-Trp-Val — Merkhilfe: 'Ich Liebe Leckere Mahlzeiten, Phanta-stisch Toll Wirklich Verdient'.",
        },
        {
          heading: "Enzymatische Biomarker in der Klinik",
          text: "Intrazelluläre Enzyme treten bei Zellschäden ins Blut aus und dienen als diagnostische Marker. Troponin T und I sind herzmuskelspezifisch und hochsensitiv für den Myokardinfarkt. CK-MB (Kreatinkinase, Herzfraktion) steigt früh an. LDH (Laktatdehydrogenase) ist wenig spezifisch, aber sensibel. GPT/ALT ist leberparenchymspezifisch (Hepatitis), AST/GOT findet sich in Herz und Leber.",
          merksatz: "Troponin → Herzinfarkt; GPT/ALT → Leber; CK-MB → frühzeitig bei Herzschäden.",
        },
      ],
      merksätze: [
        "Alle proteinogenen Aminosäuren (außer Glycin) sind L-konfiguriert und tragen am α-C: –NH₂, –COOH, –H, –R.",
        "Essentielle AS (8 Erwachsene): Ile, Leu, Lys, Met, Phe, Thr, Trp, Val — Histidin zusätzlich für Kinder.",
        "Peptidbindung = Amidbindung; entsteht durch Kondensation (–H₂O); ist planar wegen Mesomerie.",
        "Synthese am Ribosom: N-Terminus → C-Terminus (5'→3' auf mRNA kodiert).",
        "Sekundärstruktur α-Helix: H-Brücken zwischen C=O(n) und N–H(n+4), rechtsgängig.",
        "Disulfidbrücken (Cys–Cys) sind die einzigen kovalenten Bindungen in der Tertiär-/Quartärstruktur (außer Peptidbindungen).",
        "Denaturierung zerstört Sekundär- bis Quartärstruktur, nicht die Primärstruktur.",
        "Sichelzellanämie: Glu6Val in β-Globin → Hämoglobin-S aggregiert bei Desoxigenierung.",
        "PKU: Phenylalanin-Hydroxylase-Defekt → Phe akkumuliert, Tyrosin wird nicht gebildet.",
        "Biomarker: Troponin = Herzinfarkt; GPT/ALT = Leberschaden; LDH = unspezifisch.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erläutern Sie den Zusammenhang zwischen Primärstruktur und den höheren Strukturebenen eines Proteins am Beispiel der Sichelzellanämie.",
        answer: "Die Primärstruktur eines Proteins ist die lineare Abfolge der Aminosäuren, die durch Peptidbindungen verknüpft sind. Sie wird direkt durch die DNA-Sequenz kodiert und legt alle übergeordneten Strukturen fest, da sie die chemischen Eigenschaften der Seitenketten bestimmt, die für Faltung und Funktion verantwortlich sind. Bei der Sichelzellanämie ist dies exemplarisch zu sehen: Eine einzige Punktmutation im β-Globin-Gen führt zum Austausch der hydrophilen, negativ geladenen Glutaminsäure an Position 6 durch die hydrophobe, ungeladene Aminosäure Valin (Glu6Val). Dieser Austausch verändert die Tertiärstruktur geringfügig, hat aber dramatische Konsequenzen für die Quartärstruktur: Desoxy-HbS-Moleküle polymerisieren, da die hydrophobe Val-Seitenkette in eine komplementäre hydrophobe Tasche eines benachbarten Moleküls passt. Die langen HbS-Polymere verformen Erythrozyten zu sichelförmigen Zellen, die Kapillaren verstopfen und vorzeitig hämolysieren. Dieses Beispiel zeigt, dass die gesamte Funktion eines Proteins – von der atomaren Struktur bis zum klinischen Krankheitsbild – in der Primärstruktur kodiert ist und ein einziger Aminosäureaustausch diese gesamte Kaskade verändern kann.",
      },
      klinischerBezug: "Troponin, CK-MB und LDH als Serummarker bei Myokardinfarkt; PKU-Screening bei Neugeborenen; Sichelzellanämie als Modell für Struktur-Funktions-Beziehung.",
      selfTest: [
        {
          question: "Welche der folgenden Aminosäuren ist die einzige achirale proteinogene Aminosäure?",
          options: [
            "Alanin",
            "Glycin",
            "Cystein",
            "Serin",
            "Valin",
          ],
          correctIndex: 1,
          explanation: "Glycin (H₂N–CH₂–COOH) ist die einzige proteinogene Aminosäure ohne Stereozentrum, da das α-Kohlenstoffatom zwei identische Wasserstoffatome trägt (R = H). Damit fehlt die Voraussetzung für Chiralität (vier verschiedene Substituenten am sp³-C). Alle anderen 19 proteinogenen Aminosäuren tragen vier unterschiedliche Gruppen am α-C und liegen ausschließlich in der L-Konfiguration vor. Alanin (R = –CH₃), Cystein (R = –CH₂–SH), Serin (R = –CH₂–OH) und Valin (R = –CH(CH₃)₂) sind alle chiral.",
          hints: [
            "Chiralität erfordert vier verschiedene Substituenten am zentralen Kohlenstoffatom.",
            "Betrachte, was die Seitenkette (R-Gruppe) dieser Aminosäure ist — sie ist die kleinste denkbare.",
          ],
          tags: ["aminosäuren", "chiralität", "glycin"],
          difficulty: 1,
        },
        {
          question: "Welche strukturelle Besonderheit der Peptidbindung verhindert die freie Rotation um die C–N-Achse?",
          options: [
            "Die Peptidbindung ist eine Einfachbindung mit großem Raumanspruch",
            "Die Peptidbindung hat partiellen Doppelbindungscharakter durch Mesomerie",
            "Die Peptidbindung ist eine Disulfidbrücke zwischen Cysteinen",
            "Die Peptidbindung enthält ein Metallatom als Rotationshemmung",
            "Die freie Rotation wird ausschließlich durch sterische Hinderung der R-Gruppen verhindert",
          ],
          correctIndex: 1,
          explanation: "Die Peptidbindung (–CO–NH–) besitzt partiellen Doppelbindungscharakter aufgrund von Mesomerie: Das freie Elektronenpaar des Stickstoffs ist in das π-System der benachbarten Carbonylgruppe delokalisiert. Dadurch liegt die C–N-Bindung energetisch zwischen Einfach- und Doppelbindung (Bindungslänge ~1,32 Å, kürzer als typische C–N-Einfachbindung mit ~1,47 Å). Diese Elektronendelokalisierung macht die Bindung planar und starr — alle vier Atome (Cα, C=O, N, H sowie der folgende Cα) liegen in einer Ebene. Dies schränkt die möglichen Konformationen eines Polypeptids erheblich ein und ist Grundlage für definierte Sekundärstrukturen.",
          hints: [
            "Erinnere dich an das Konzept der Mesomerie bei der Amid-Gruppe.",
            "Bei welchem Hybridisierungszustand ist keine freie Rotation möglich?",
          ],
          tags: ["peptidbindung", "mesomerie", "proteinstruktur"],
          difficulty: 2,
        },
        {
          question: "Welche Wechselwirkungen stabilisieren die α-Helix als Sekundärstruktur?",
          options: [
            "Kovalente Disulfidbrücken zwischen Cysteinen im gleichen Strang",
            "Ionische Wechselwirkungen zwischen geladenen Seitenketten",
            "Intramolekulare Wasserstoffbrücken zwischen C=O(n) und N–H(n+4) im Peptidrückgrat",
            "Hydrophobe Wechselwirkungen zwischen unpolaren Seitenketten",
            "Phosphodiesterbindungen zwischen den Aminosäureresten",
          ],
          correctIndex: 2,
          explanation: "Die α-Helix wird durch intramolekulare Wasserstoffbrücken zwischen der Carbonylgruppe (C=O) der Aminosäure an Position n und der Amidgruppe (N–H) der Aminosäure an Position n+4 im selben Strang stabilisiert. Diese H-Brücken verlaufen parallel zur Helixachse. Eine vollständige Windung umfasst 3,6 Aminosäurereste. Disulfidbrücken und ionische Wechselwirkungen stabilisieren die Tertiärstruktur, hydrophobe Effekte tragen ebenfalls zur Tertiärstruktur bei. Phosphodiesterbindungen gehören zur DNA/RNA, nicht zu Proteinen.",
          hints: [
            "Sekundärstruktur wird durch H-Brücken im Peptidrückgrat (nicht in den Seitenketten) stabilisiert.",
            "Die Zahl 'n+4' ist der Schlüssel zur α-Helix-Definition.",
          ],
          tags: ["sekundärstruktur", "alpha-helix", "wasserstoffbrücken"],
          difficulty: 2,
        },
        {
          question: "Bei der Sichelzellanämie liegt die Ursache in welcher Strukturebene des Hämoglobins?",
          options: [
            "Tertiärstruktur: Fehlfaltung der β-Globinkette durch Disulfidbrückenbruch",
            "Primärstruktur: Glu→Val-Austausch an Position 6 der β-Globinkette",
            "Sekundärstruktur: Zerstörung der α-Helix-Segmente",
            "Quartärstruktur: α- und β-Ketten können sich nicht zusammenlagern",
            "Kovalente Modifikation der Häm-Gruppe durch Oxidation",
          ],
          correctIndex: 1,
          explanation: "Die Sichelzellanämie wird durch eine Punktmutation im β-Globin-Gen verursacht, die zu einem Aminosäureaustausch in der Primärstruktur führt: Glutaminsäure (hydrophil, negativ geladen) an Position 6 wird durch Valin (hydrophob, ungeladen) ersetzt. Die veränderte Primärstruktur (HbS statt HbA) führt dazu, dass desoxygenierte HbS-Moleküle polymerisieren, weil die hydrophobe Val6-Seitenkette in eine komplementäre hydrophobe Tasche des Nachbarmoleküls passt. Dieses Beispiel illustriert, wie die Primärstruktur alle übergeordneten Strukturen und die Funktion eines Proteins determiniert.",
          hints: [
            "Beginne bei der molekularen Ursache: eine DNA-Mutation führt zu einem einzigen Aminosäurenaustausch.",
            "Welche Strukturebene beschreibt die Aminosäuresequenz eines Proteins?",
          ],
          tags: ["sichelzellanämie", "primärstruktur", "hämoglobin", "klinisch"],
          difficulty: 2,
        },
        {
          question: "Welche der folgenden Bindungstypen trägt zur Stabilisierung der Tertiärstruktur bei, NICHT aber zur Sekundärstruktur?",
          options: [
            "Wasserstoffbrücken zwischen Peptidrückgrat-Gruppen",
            "Disulfidbrücken zwischen Cysteinen",
            "Peptidbindungen zwischen Aminosäureresten",
            "Die planare Struktur der Peptidbindung",
            "Van-der-Waals-Kräfte im Rückgrat",
          ],
          correctIndex: 1,
          explanation: "Disulfidbrücken (–S–S–) entstehen durch oxidative Kupplung zweier Cystein-Thiolgruppen (–SH) und sind kovalente Bindungen zwischen Seitenketten — ein charakteristisches Merkmal der Tertiär- (und Quartär-)struktur. Sekundärstrukturen (α-Helix, β-Faltblatt) werden hingegen durch nicht-kovalente Wasserstoffbrücken im Peptidrückgrat stabilisiert. Peptidbindungen definieren die Primärstruktur. Die Planarität der Peptidbindung begrenzt Konformationen, ist aber kein Stabilisierungsmechanismus für eine bestimmte Strukturebene.",
          hints: [
            "Sekundärstruktur = Wasserstoffbrücken im Rückgrat. Was ist dagegen eine kovalente Bindung zwischen Seitenketten?",
            "Cystein enthält eine –SH-Gruppe, die eine besondere kovalente Bindung eingehen kann.",
          ],
          tags: ["tertiärstruktur", "disulfidbrücken", "cystein"],
          difficulty: 3,
        },
        {
          question: "Welche Aussage zur Denaturierung von Proteinen ist korrekt?",
          options: [
            "Denaturierung spaltet alle Peptidbindungen und setzt Aminosäuren frei",
            "Denaturierung zerstört die Primärstruktur, lässt aber höhere Strukturen intakt",
            "Denaturierung hebt Sekundär- bis Quartärstruktur auf, die Primärstruktur bleibt erhalten",
            "Denaturierung ist immer reversibel durch Wiederherstellung physiologischer Bedingungen",
            "Denaturierung betrifft nur die Quartärstruktur, nicht die Sekundärstruktur",
          ],
          correctIndex: 2,
          explanation: "Denaturierung bezeichnet den Verlust der nativen räumlichen Struktur (Sekundär-, Tertiär- und Quartärstruktur), wobei die kovalenten Peptidbindungen (Primärstruktur) erhalten bleiben. Auslöser sind Hitze (> Optimum → Zerstörung von H-Brücken und hydrophoben WW), extremer pH (Veränderung ionischer WW), organische Lösungsmittel (Störung des hydrophoben Effekts) und Reduktionsmittel (β-Mercaptoethanol → Spaltung von Disulfidbrücken). Denaturierung kann reversibel sein (manche Enzyme renaturieren bei Normalbedingungen, Chaperone helfen), ist aber häufig irreversibel (gekochtes Eiweiß, Prionen).",
          hints: [
            "Welche Bindungen in einem Protein sind kovalent und welche nicht-kovalent?",
            "Denaturierung = 'Verlust der Natur(form)' — der chemische Rückgrat bleibt, nur die Faltung geht verloren.",
          ],
          tags: ["denaturierung", "proteinstruktur", "reversibel"],
          difficulty: 1,
        },
        {
          question: "Ein 45-jähriger Patient kommt mit typischen Brustschmerzen in die Notaufnahme. Welcher der folgenden Labormarker ist am spezifischsten für einen akuten Myokardinfarkt und steigt frühzeitig an?",
          options: [
            "LDH (Laktatdehydrogenase)",
            "GPT/ALT (Alaninaminotransferase)",
            "Amylase",
            "Troponin T oder Troponin I",
            "Gesamtprotein im Serum",
          ],
          correctIndex: 3,
          explanation: "Troponin T und Troponin I sind kardiale Proteine des kontraktilen Apparats der Herzmuskelzellen und sind bei gesunden Personen im Blut kaum nachweisbar. Bei Myokardnekrose werden sie frühzeitig (3–6 h nach Ereignis) freigesetzt und sind für mehrere Tage erhöht. Sie gelten heute als Goldstandard für die Infarktdiagnostik (hohe Sensitivität und Spezifität). LDH ist wenig spezifisch (kommt in vielen Geweben vor). GPT/ALT ist ein Leberwert (hepatozellulärer Schaden). Amylase weist auf Pankreatitis hin.",
          hints: [
            "Welches Protein ist ausschließlich im Herzmuskel in dieser Form vorhanden?",
            "Der gesuchte Marker ist seit den 1990ern der Standard für Herzinfarktdiagnostik und hat CK-MB weitgehend ersetzt.",
          ],
          tags: ["biomarker", "troponin", "herzinfarkt", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: 'ch-13-02',
      title: "Kohlenhydrate — Mono-, Di- und Polysaccharide",
      content: `# Kohlenhydrate — Mono-, Di- und Polysaccharide

## Monosaccharide — Grundbausteine

Monosaccharide sind nicht weiter hydrolysierbare Zucker mit der allgemeinen Formel (CH₂O)ₙ. Einteilung nach Kettenlänge: **Triosen** (n=3, z.B. Glycerinaldehyd), Tetrosen, **Pentosen** (n=5: Ribose, Desoxyribose), **Hexosen** (n=6: Glucose, Fructose, Galactose). Einteilung nach funktioneller Gruppe: **Aldosen** (Aldehydgruppe am C1, z.B. Glucose) vs. **Ketosen** (Ketogruppe am C2, z.B. Fructose).

**Fischer-Projektion**: Darstellung als offene Kette; Referenz ist D-Glycerinaldehyd (OH rechts am letzten Chiralitätszentrum → D-Konfiguration). **Haworth-Projektion**: Ringform (Pyranose = Sechsring bei Hexosen, Furanose = Fünfring). Bei der Ringschluss-Reaktion entsteht ein neues Chiralitätszentrum: **α-Anomer** (OH am anomeren C1 axial = auf gleicher Seite wie die Ringbildung; in Haworth: unten) vs. **β-Anomer** (OH am C1 äquatorial; in Haworth: oben).

**Epimere**: Konfigurationsisomere, die sich nur an einem Chiralitätszentrum unterscheiden. D-Galactose ist das C4-Epimer von D-Glucose (C4-OH nach oben in Haworth statt unten).

## Wichtige Monosaccharide

- **D-Glucose**: Aldohexose, Blutglukose (Normalwert 3,9–6,1 mmol/L nüchtern), einziges regulär nutzbares Substrat des Gehirns (außer Ketose bei Fasten)
- **D-Fructose**: Ketohexose, süßester natürlicher Zucker, kommt in Obst und Honig vor, Bestandteil von Saccharose
- **D-Galactose**: Aldohexose, C4-Epimer der Glucose, Bestandteil von Laktose
- **D-Ribose**: Aldopentose, Bestandteil der RNA
- **2-Desoxy-D-Ribose**: Aldopentose, Bestandteil der DNA (OH an C2 durch H ersetzt)

## Disaccharide und glykosidische Bindung

Zwei Monosaccharide verbinden sich unter Abspaltung von Wasser durch eine **glykosidische Bindung** (O-glykosidisch) zwischen dem anomeren C und einer OH-Gruppe des anderen Zuckers.

Saccharose ist **nicht reduzierend**, da beide anomeren OH-Gruppen an der Bindung beteiligt sind und keine freie Halbacetalgruppe mehr vorliegt.

## Polysaccharide

- **Stärke**: Speicherpolysaccharid der Pflanzen; Amylose (unverzweigt, α-1,4, Helix) + Amylopektin (verzweigt, α-1,4-Kette mit α-1,6-Verzweigungen alle 20–25 Reste)
- **Glykogen**: Tierisches/humanes Speicherpolysaccharid in Leber und Muskel; wie Amylopektin aber stärker verzweigt (α-1,6-Verzweigung alle 8–12 Reste)
- **Cellulose**: Strukturpolysaccharid der Pflanzenzellwand; β-1,4-verknüpfte Glucose; unlöslich, keine Hydrolyse durch humane Amylase (kein β-1,4-Glukosidase-Gen) → Ballaststoff

## Klinischer Bezug

**Laktoseintoleranz**: Laktasemangel (Laktase = Disaccharidase) → Laktose wird nicht zu Gal + Glc gespalten → osmotische Diarrhö, Gasbildung durch Darmbakterien. **Diabetes mellitus**: Chronische Hyperglykämie → nicht-enzymatische Glykierung von Hämoglobin: Glucose bindet kovalent an N-terminales Valin der β-Globinkette → **HbA1c** als Maß für Glykämiekontrolle der letzten 8–12 Wochen (Erythrozyten-Halbwertszeit). **Glykogenspeicherkrankheiten**: z.B. Morbus Pompe (Typ II, Mangel an α-1,4-Glukosidase in Lysosomen).`,
      lernziele: [
        "Monosaccharide nach Kettenlänge und funktioneller Gruppe klassifizieren sowie Aldosen und Ketosen unterscheiden",
        "Die Fischer- und Haworth-Projektion erklären und α- und β-Anomere von D-Glucose benennen",
        "Die wichtigsten Disaccharide (Maltose, Saccharose, Laktose) nach Bestandteilen und Bindungstyp unterscheiden sowie das Konzept 'reduzierend/nicht-reduzierend' erklären",
        "Die Polysaccharide Stärke, Glykogen und Cellulose in Struktur und Funktion vergleichen",
        "HbA1c als Langzeitmarker der Glukosekontrolle und Laktoseintoleranz biochemisch erklären",
      ],
      sections: [
        {
          heading: "α- und β-Anomere der Glucose",
          text: "Beim Ringschluss der offenkettigen D-Glucose zur Pyranoseform (Sechsring) greift das C5-OH nukleophil die Aldehydgruppe am C1 an. Dabei entsteht ein neues Chiralitätszentrum am C1 (anomeres Kohlenstoffatom). In der Haworth-Projektion zeigt die OH-Gruppe am C1 bei α-D-Glucose nach unten (gleiche Seite wie die Ringbildung), bei β-D-Glucose nach oben. In wässriger Lösung stellt sich ein Gleichgewicht ein: ~36% α, ~64% β, <1% offenkettige Form (Mutarotation). Der Unterschied ist biologisch bedeutsam: Stärke (α) ist verdaulich, Cellulose (β) ist es nicht.",
          merksatz: "α = OH unten in Haworth; β = OH oben. 'α steht axial' (in der Sesselkonformation von Pyranose).",
        },
        {
          heading: "Saccharose ist nicht reduzierend",
          text: "Reduzierende Zucker haben eine freie Halbacetalgruppe (anomere OH) und können Cu²⁺ in der Fehling-Probe reduzieren. Saccharose ist das einzige häufige Disaccharid, das nicht reduzierend ist, weil sowohl das anomere C1 der Glucose als auch das anomere C2 der Fructose an der glykosidischen Bindung (α-1→β-2) beteiligt sind — es gibt keine freie Halbacetalgruppe. Maltose und Laktose sind reduzierend (nur C1 der einen Komponente ist gebunden, C1' der anderen ist frei).",
          merksatz: "Saccharose = nicht reduzierend (beide anomere C gebunden). Maltose & Laktose = reduzierend.",
        },
        {
          heading: "HbA1c: Biochemie und klinische Bedeutung",
          text: "HbA1c entsteht durch nicht-enzymatische Glykierung (Maillard-Reaktion): Glucose reagiert spontan mit der freien Aminogruppe am N-terminalen Valin der β-Globinkette über eine Schiff-Base zur stabilen Amadori-Verbindung. Da Erythrozyten keine Membranproteine erneuern (kernlos, keine Proteinsynthese), spiegelt HbA1c die durchschnittliche Blutglukose der letzten ~8–12 Wochen wider. Therapieziel bei Typ-2-Diabetes meist HbA1c < 7% (53 mmol/mol). Beachte: Anämie oder Hämolysezustände verfälschen den HbA1c-Wert.",
          merksatz: "HbA1c = Glykiertes Hämoglobin = 8–12 Wochen Glukosegedächtnis.",
        },
        {
          heading: "Wichtige Disaccharide im Überblick",
          text: "Maltose, Saccharose und Laktose im Vergleich:",
          table: {
            headers: ["Disaccharid", "Bestandteile", "Bindungstyp", "Reduzierend?"],
            rows: [
              ["Maltose", "Glc + Glc", "α-1→4", "ja"],
              ["Saccharose", "Glc + Frc", "α-1→β-2", "nein"],
              ["Laktose", "Gal + Glc", "β-1→4", "ja"],
            ]
          }
        },
      ],
      merksätze: [
        "Aldosen haben die Aldehyd- (–CHO) am C1, Ketosen die Ketofunktion am C2 (z.B. Fructose).",
        "α-D-Glucose: OH an C1 nach unten (axial in Sesselkonformation); β-D-Glucose: OH an C1 nach oben (äquatorial).",
        "D-Galactose = C4-Epimer der D-Glucose (nur C4-OH-Konfiguration unterscheidet sich).",
        "Maltose: Glc-α1,4-Glc; Saccharose: Glc-α1-β2-Frc (nicht reduzierend!); Laktose: Gal-β1,4-Glc.",
        "Amylose: α-1,4-unverzweigt (Helix); Amylopektin: α-1,4 mit α-1,6-Verzweigungen alle 20–25 Reste.",
        "Glykogen = wie Amylopektin, aber α-1,6-Verzweigung alle 8–12 Reste (stärker verzweigt).",
        "Cellulose: β-1,4-Glc → unlöslich; Mensch hat keine Cellulase → Ballaststoff.",
        "HbA1c = nicht-enzymatische Glykierung, spiegelt Ø-Blutglukose der letzten 8–12 Wochen wider.",
        "Laktoseintoleranz: Laktasemangel → Gal+Glc werden nicht freigesetzt → Diarrhö, Blähungen.",
        "Ribose (RNA) = Pentose mit OH am C2; Desoxyribose (DNA) = Pentose ohne OH am C2.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen Amylose, Amylopektin und Glykogen in Bezug auf Struktur und physiologische Bedeutung.",
        answer: "Amylose, Amylopektin und Glykogen sind alle Glucosepolymere aus α-D-Glucose, unterscheiden sich aber erheblich in ihrer Verzweigungsstruktur und ihrer biologischen Funktion. Amylose ist ein lineares Polymer aus α-1,4-glykosidisch verknüpfter D-Glucose, das in wässriger Lösung eine Helixstruktur annimmt. In dieser Helix werden Jodmoleküle eingelagert, was zu der charakteristischen blau-violetten Färbung beim Stärke-Iod-Nachweis führt. Amylopektin dagegen ist ein verzweigtes Molekül: Es hat ebenfalls ein α-1,4-verknüpftes Grundgerüst, aber zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Beide zusammen bilden die Stärke in Pflanzen als Reservekohlenhydrat. Glykogen ist das funktionelle Analogon in Tier und Mensch und wird vor allem in der Leber (Regulierung des Blutglukosespiegels) und im Skelettmuskel (lokale Energiereserve) gespeichert. Es ähnelt dem Amylopektin strukturell, ist aber noch stärker verzweigt: Die α-1,6-Verzweigungen treten bereits alle 8–12 Glucosereste auf. Diese hohe Verzweigungsdichte hat eine entscheidende physiologische Bedeutung: Sie erzeugt viele nicht-reduzierende Enden, an denen Glykogen-Phosphorylase gleichzeitig Glucosereste abspalten kann, was eine sehr schnelle Mobilisierung von Glucose ermöglicht — wichtig für plötzlichen Energiebedarf (z.B. Flucht, intensive körperliche Belastung).",
      },
      klinischerBezug: "HbA1c als Therapiemonitor bei Diabetes mellitus; Laktoseintoleranz durch Laktasemangel; Glykogenspeicherkrankheiten bei Enzymdefekten des Glykogenabbaus.",
      selfTest: [
        {
          question: "Welche Aussage zur Saccharose ist korrekt?",
          options: [
            "Saccharose besteht aus zwei α-D-Glucosemolekülen",
            "Saccharose ist ein reduzierendes Disaccharid",
            "Saccharose wird durch eine α-1→β-2-glykosidische Bindung zwischen Glucose und Fructose gebildet",
            "Saccharose kann durch die Fehling-Probe nachgewiesen werden",
            "Saccharose enthält eine freie Halbacetalgruppe am anomeren Kohlenstoff",
          ],
          correctIndex: 2,
          explanation: "Saccharose (Haushaltszucker) besteht aus α-D-Glucose und β-D-Fructose, die durch eine α-1→β-2-glykosidische Bindung verknüpft sind. Diese Bindung involviert beide anomeren Kohlenstoffatome (C1 der Glucose und C2 der Fructose), sodass keine freie Halbacetalgruppe mehr vorliegt. Deshalb ist Saccharose das einzige unter den häufigen Disacchariden, das nicht reduzierend ist und die Fehling-Probe negativ reagiert. Maltose (α-1,4, Glc+Glc) und Laktose (β-1,4, Gal+Glc) sind reduzierend.",
          hints: [
            "Welches Disaccharid hat eine Bindung zwischen beiden anomeren Kohlenstoffatomen?",
            "Nicht-reduzierende Zucker haben keine freie Halbacetalgruppe — warum ist das bei Saccharose so?",
          ],
          tags: ["saccharose", "disaccharide", "reduzierend", "glykosidische-bindung"],
          difficulty: 2,
        },
        {
          question: "Was unterscheidet Amylopektin strukturell von Amylose?",
          options: [
            "Amylopektin besteht aus β-D-Glucose, Amylose aus α-D-Glucose",
            "Amylopektin ist unverzweigt, Amylose enthält α-1,6-Verzweigungen",
            "Amylopektin enthält α-1,6-Verzweigungen alle 20–25 Reste, Amylose ist unverzweigt",
            "Amylopektin kommt nur in Tieren vor, Amylose nur in Pflanzen",
            "Amylopektin hat eine kürzere Kettenlänge als Amylose",
          ],
          correctIndex: 2,
          explanation: "Amylose und Amylopektin sind beide Bestandteile der pflanzlichen Stärke und bestehen aus α-D-Glucose mit α-1,4-glykosidischen Hauptkettenbindungen. Amylose ist jedoch ein lineares, unverzweigtes Polymer (bildet Helixstruktur → Iod-Einlagerung → blau). Amylopektin hat dagegen zusätzlich α-1,6-glykosidische Verzweigungspunkte etwa alle 20–25 Glucosereste. Das tierische/humane Glykogen ist strukturell ähnlich wie Amylopektin, aber noch stärker verzweigt (alle 8–12 Reste). Cellulose (nicht Amylose) besteht aus β-D-Glucose.",
          hints: [
            "Denke an den Stärke-Iod-Test: Welcher Stärketyp bildet eine Helix für die Iod-Einlagerung?",
            "Das Präfix 'Pektin' kommt von 'pectus' und weist auf Verzweigung hin — welche Bindung ist für Verzweigungen verantwortlich?",
          ],
          tags: ["amylose", "amylopektin", "stärke", "glykogen"],
          difficulty: 2,
        },
        {
          question: "D-Galactose ist das C4-Epimer von D-Glucose. Was bedeutet 'Epimer'?",
          options: [
            "Zwei Verbindungen mit gleicher Summenformel aber unterschiedlicher Funktionsgruppe",
            "Zwei Stereoisomere, die sich an genau einem Chiralitätszentrum unterscheiden",
            "Zwei Enantiomere, die Spiegelbilder voneinander sind",
            "Zwei Verbindungen, die ineinander umgewandelt werden können ohne Bindungsbruch",
            "Zwei Anomere mit unterschiedlicher Konfiguration am anomeren Kohlenstoff",
          ],
          correctIndex: 1,
          explanation: "Epimere sind Diastereomere, die sich nur in der Konfiguration an einem einzigen Chiralitätszentrum unterscheiden. D-Galactose ist das C4-Epimer von D-Glucose: Beide sind Aldohexosen (C₆H₁₂O₆), unterscheiden sich aber ausschließlich in der Konfiguration der OH-Gruppe am C4-Atom (in Haworth: OH nach unten bei Glucose, nach oben bei Galactose). Enantiomere sind vollständige Spiegelbilder (alle Chiralitätszentren invertiert, z.B. D- und L-Glucose). Anomere sind spezielle Epimere am anomeren C (C1 bei Aldosen). Konformere entstehen durch Rotation ohne Bindungsbruch.",
          hints: [
            "Epimere sind eine Untergruppe der Diastereomere — wie viele Chiralitätszentren unterscheiden sich?",
            "Vergleiche die Haworth-Strukturen: An welchem Kohlenstoffatom zeigt die OH-Gruppe bei Galactose anders als bei Glucose?",
          ],
          tags: ["epimere", "galactose", "glucose", "stereoisomerie"],
          difficulty: 3,
        },
        {
          question: "Ein Patient hat HbA1c = 9,5% (80 mmol/mol). Was gibt dieser Wert an?",
          options: [
            "Die aktuelle Blutglukosekonzentration zum Zeitpunkt der Messung",
            "Die durchschnittliche Blutglukosekonzentration der letzten 8–12 Wochen",
            "Den prozentualen Anteil des Hämoglobins, der durch enzymatische Reaktionen verändert wurde",
            "Die Konzentration von freier Glucose im Blutplasma",
            "Den Anteil des Hämoglobins, der durch Oxidation denaturiert ist",
          ],
          correctIndex: 1,
          explanation: "HbA1c (Hämoglobin A1c) entsteht durch nicht-enzymatische Glykierung: Glucose reagiert spontan mit der freien α-Aminogruppe des N-terminalen Valins der β-Globinkette. Da Erythrozyten (kernlos, keine Proteinsynthese) ihre Proteine nicht erneuern, akkumuliert HbA1c proportional zur durchschnittlichen Blutglukose über die gesamte Lebensspanne des Erythrozyten (~120 Tage, relevanter Zeitraum 8–12 Wochen). Ein HbA1c von 9,5% entspricht einer durchschnittlichen Glukose von ~12–13 mmol/L und zeigt eine deutlich unzureichende Diabeteskontrolle an. Ein Zielwert < 7% (53 mmol/mol) wird oft angestrebt.",
          hints: [
            "Erythrozyten haben keine Zellkern — können sie ihre Proteine ersetzen?",
            "HbA1c ist das 'glykierte' Hämoglobin — über welchen Zeitraum sammelt sich diese Modifikation an?",
          ],
          tags: ["hba1c", "diabetes", "glykierung", "klinisch"],
          difficulty: 1,
        },
        {
          question: "Warum kann der Mensch Cellulose nicht als Energiequelle nutzen?",
          options: [
            "Cellulose ist aus L-Glucose aufgebaut, die im Stoffwechsel nicht verwertbar ist",
            "Cellulose besitzt keine glykosidischen Bindungen und kann daher nicht hydrolysiert werden",
            "Der Mensch besitzt keine Enzyme zur Hydrolyse der β-1,4-glykosidischen Bindungen",
            "Cellulose enthält kovalent gebundene Phosphatgruppen, die ihre Verdauung verhindern",
            "Cellulose ist zu wasserunlöslich, um überhaupt mit Enzymen in Kontakt zu kommen",
          ],
          correctIndex: 2,
          explanation: "Cellulose besteht aus β-1,4-glykosidisch verknüpfter D-Glucose. Der Mensch (und die meisten Säugetiere) besitzen keine β-1,4-Glucosidase (Cellulase), die diese spezifische Bindung hydrolysieren kann. Menschliche Amylasen (Speichel und Pankreas) können nur α-1,4-glykosidische Bindungen spalten (Stärke, Glykogen). Wiederkäuer haben im Pansen Bakterien, die Cellulasen produzieren. Cellulose wird deshalb als unverdaulicher Ballaststoff klassifiziert, obwohl sie aus demselben Monomer (Glucose) wie Stärke besteht. Die Ursache liegt also ausschließlich in der Anomerie (β statt α) der glykosidischen Bindung.",
          hints: [
            "Stärke (α-1,4) und Cellulose (β-1,4) bestehen beide aus Glucose — warum ist nur Stärke verdaulich?",
            "Welche Eigenschaft hat das für Cellulose spezifische Enzym, das Menschen fehlen?",
          ],
          tags: ["cellulose", "beta-1-4", "ballaststoff", "verdauung"],
          difficulty: 2,
        },
        {
          question: "Welches Monosaccharid ist der exklusive Energielieferant des Gehirns unter Normalbedingungen?",
          options: [
            "Fructose",
            "Galactose",
            "Glucose",
            "Ribose",
            "Mannose",
          ],
          correctIndex: 2,
          explanation: "Das Gehirn ist auf eine kontinuierliche Zufuhr von D-Glucose angewiesen, da es keine nennenswerten eigenen Glykogenspeicher hat und unter Normalbedingungen keine freien Fettsäuren oxidieren kann (Blut-Hirn-Schranke limitiert den Transport langkettiger Fettsäuren). Sinkt der Blutglukosespiegel unter ~3 mmol/L (Hypoglykämie), kommt es zu Bewusstseinsstörungen bis zum Koma. Ausnahme: Bei längerem Fasten oder diabetischer Ketoazidose kann das Gehirn schrittweise auf Ketonkörper (Acetoacetat, β-Hydroxybutyrat) umstellen, die aus der hepatischen Fettsäureoxidation entstehen.",
          hints: [
            "Das Gehirn kann keine Fettsäuren direkt verbrennen — was ist dann sein Primärsubstrat?",
            "Hypoglykämie betrifft zuerst das Gehirn — welcher Zucker fehlt dabei?",
          ],
          tags: ["glucose", "gehirn", "hypoglykämie", "energieversorgung"],
          difficulty: 1,
        },
        {
          question: "Bei Laktoseintoleranz liegt ein Mangel an welchem Enzym vor, und welche biochemische Konsequenz hat dies direkt?",
          options: [
            "Amylase-Mangel → Stärke wird nicht verdaut → Hyperglykämie",
            "Laktase-Mangel → Laktose wird nicht in Galactose und Glucose gespalten → osmotische Diarrhö",
            "Saccharase-Mangel → Saccharose akkumuliert → Laktoseintoleranz",
            "Galactosidase-Mangel → Galactosämie mit Laktose im Blut",
            "Glucosidasemangel → Glykogenose Typ II (Pompe) mit Laktoseintoleranz",
          ],
          correctIndex: 1,
          explanation: "Laktase (Laktase-Phlorizin-Hydrolase) ist eine Disaccharidase im Bürstensaum des Dünndarmepithels, die Laktose (β-1,4-Gal-Glc) in D-Galactose und D-Glucose spaltet. Bei Laktasemangel (primär genetisch, mit zunehmendem Alter bei vielen Ethnien normal) gelangt unverdaute Laktose in den Dickdarm. Dort fermentieren Darmbakterien die Laktose zu kurzkettigen Fettsäuren, CO₂ und H₂ → Blähungen, Schmerzen. Außerdem wirkt unverdaute Laktose osmotisch → osmotische Diarrhö. Amylasemangel betrifft Stärke, Saccharasemangel betrifft Saccharose, Pompe betrifft Glykogen.",
          hints: [
            "Laktase = das Enzym, das Laktose spaltet. Welches Disaccharid ist das und welche Monosaccharide entstehen?",
            "Unverdaulicher Zucker im Dickdarm → Was machen Darmbakterien damit?",
          ],
          tags: ["laktoseintoleranz", "laktase", "disaccharidase", "klinisch"],
          difficulty: 2,
        },
      ],
    },

    {
      id: 'ch-13-03',
      title: "Lipide — Fette, Phospholipide und Steroide",
      content: `# Lipide — Fette, Phospholipide und Steroide

## Fettsäuren

Fettsäuren sind unverzweigte (meist) Carbonsäuren mit langer Kohlenwasserstoffkette. Einteilung:
- **Gesättigte Fettsäuren**: Keine Doppelbindungen; gerade, dicht packbar → fest bei Raumtemperatur. Wichtiges Beispiel: **Palmitinsäure** (C16:0, Hexadecansäure), **Stearinsäure** (C18:0)
- **Einfach ungesättigte**: Eine C=C-Doppelbindung. Beispiel: **Ölsäure** (C18:1Δ9, cis; Hauptfettsäure in Olivenöl) → flüssig bei Raumtemperatur
- **Mehrfach ungesättigte**: Mehrere Doppelbindungen; **essentielle** Fettsäuren: Linolsäure (C18:2, ω-6) und α-Linolensäure (C18:3, ω-3), müssen mit der Nahrung aufgenommen werden

**cis vs. trans**: Natürlich vorkommende ungesättigte Fettsäuren liegen meist in cis-Konfiguration vor (Knick in der Kette → niedrigerer Schmelzpunkt). Trans-Fettsäuren (z.B. durch industrielle Fetthärtung) verhalten sich ähnlich wie gesättigte Fettsäuren (gerade Kette, höherer Schmelzpunkt) und sind atherogen (erhöhen LDL, senken HDL).

**Energiedichte**: Lipide liefern **38 kJ/g** (mehr als doppelt so viel wie Kohlenhydrate oder Proteine: je 17 kJ/g), da Fettsäuren stärker reduziert sind.

## Triglyceride (Triacylglycerine)

Triglyceride entstehen durch **Veresterung** (Kondensation) von Glycerin mit drei Fettsäuren. Drei OH-Gruppen des Glycerins reagieren mit je einer –COOH-Gruppe der Fettsäuren → 3 Esterbindungen + 3 H₂O. Sie sind hydrophob und bilden die wichtigsten Energiespeicher in Fettzellen (Adipozyten). **Lipolyse**: Triglycerid → Glycerin + 3 freie Fettsäuren durch Lipasen (hormonsensitive Lipase, LPL).

## Phospholipide

Phospholipide (v.a. Glycerophospholipide) ähneln Triglyceriden, aber eine Fettsäure ist durch eine **Phosphatgruppe mit polarem Kopf** ersetzt: sn-1 und sn-2 am Glycerin tragen Fettsäuren, sn-3 trägt Phosphat + polaren Rest (Cholin, Serin, Ethanolamin, Inositol). Das wichtigste: **Phosphatidylcholin (Lecithin)**.

**Amphipathischer Charakter**: polarer Phosphatkopf (hydrophil) + zwei unpolare Fettsäureschwänze (hydrophob) → spontane **Bilayer-Bildung** in wässriger Umgebung (treibende Kraft: hydrophober Effekt). Diese Eigenschaft macht Phospholipide zum Grundbaustein aller biologischen Membranen.

## Steroide

Steroide basieren auf dem **Sterangerüst** (Cyclopentanoperhydrophenanthren): drei kondensierte Sechsringe (A, B, C) + ein Fünfring (D). Alle Steroide sind von **Cholesterin** abgeleitet:

## Klinischer Bezug

**Hypercholesterinämie**: LDL > 160 mg/dL (4,1 mmol/L) → Atheroskleroserisiko steigt. **Atherosklerose**: LDL-Oxidation, Schaumzellbildung, Plaques in Arterienwand. **Statine** hemmen **HMG-CoA-Reduktase** (Schlüsselenzym der Cholesterinbiosynthese → Mevalonat-Weg) → LDL-Senkung. **Omega-3-Fettsäuren** (EPA, DHA): antiinflammatorisch, senken Triglyceride. **Ketonkörper** (Acetoacetat, β-Hydroxybutyrat, Aceton) entstehen bei hepatischer Fettsäureoxidation (Diabetes Typ 1, Fasten) → Ketoazidose bei unkontrolliertem Diabetes.`,
      lernziele: [
        "Fettsäuren nach Sättigungsgrad klassifizieren, den Unterschied zwischen cis/trans-Konfiguration und seine physiologische Bedeutung erklären",
        "Die Struktur von Triglyceriden und ihre Bildung durch Veresterung beschreiben sowie die Lipolyse erklären",
        "Den amphipathischen Aufbau von Phospholipiden und die Konsequenz für die Membranbildung erläutern",
        "Das Sterangerüst und die wichtigsten Steroide (Cholesterin, Steroidhormone, Vitamin D, Gallensäuren) benennen",
        "Hypercholesterinämie, Atherosklerose und das Wirkprinzip von Statinen (HMG-CoA-Reduktase-Hemmung) erklären",
      ],
      sections: [
        {
          heading: "Fettsäuren: Struktur und Eigenschaften",
          text: "Die Länge der Kohlenwasserstoffkette und der Sättigungsgrad bestimmen physikalische Eigenschaften und biologische Wirkung von Fettsäuren. Gesättigte Fettsäuren (keine Doppelbindungen, Palmitinsäure C16:0, Stearinsäure C18:0) können sich gestreckt eng aneinanderlagern → hohe Van-der-Waals-Kräfte → festes Fett bei Raumtemperatur. Ungesättigte Fettsäuren (Ölsäure C18:1Δ9, cis) haben einen Knick an der Doppelbindung → schlechtere Packung → niedriger Schmelzpunkt → flüssiges Öl. Trans-Fettsäuren aus industrieller Fetthärtung sind atherogen. Essentielle Fettsäuren (Linolsäure ω-6, α-Linolensäure ω-3) dienen als Vorläufer für Eicosanoide (Prostaglandine, Leukotriene).",
          merksatz: "Gesättigte Fettsäuren = fest, arteriogen; ungesättigte cis = flüssig, protektiv; trans = fest, arteriogen.",
        },
        {
          heading: "Phospholipide und Membranbildung",
          text: "Glycerophospholipide (z.B. Phosphatidylcholin = Lecithin) bestehen aus Glycerin, zwei Fettsäuren (sn-1 meist gesättigt, sn-2 meist ungesättigt), einer Phosphatgruppe und einem polaren Alkohol-Rest (Cholin, Serin etc.). Sie sind amphipathisch: Der polare Phosphokopf interagiert mit Wasser (hydrophil), die unpolaren Fettsäureschwänze meiden Wasser (hydrophob). In wässrigem Milieu organisieren sich Phospholipide spontan zu einem Bilayer — die Grundstruktur aller biologischen Membranen. Cholesterin lagert sich zwischen die Fettsäureschwänze und moduliert die Membranfluidität (bei tiefen Temperaturen verhindernd Erstarren; bei hohen Temperaturen verhindernd Überfließen).",
          merksatz: "Phospholipid = Amphiphil; polarer Kopf außen, apolare Schwänze innen → Bilayer = Membran.",
        },
        {
          heading: "Cholesterin und Statine",
          text: "Cholesterin wird in der Leber aus Acetyl-CoA über den Mevalonat-Weg synthetisiert; das Schlüsselenzym ist HMG-CoA-Reduktase. Im Blut wird Cholesterin in Lipoproteinen transportiert: LDL transportiert Cholesterin zu peripheren Geweben (hohes LDL = 'schlechtes' Cholesterin → Atherosklerose), HDL holt Cholesterin aus Geweben zurück zur Leber. Statine (Atorvastatin, Simvastatin) hemmen kompetitiv HMG-CoA-Reduktase → weniger endogene Cholesterinsynthese → Hochregulation der LDL-Rezeptoren in Hepatozyten → mehr LDL-Aufnahme aus Blut → LDL-Senkung um 30–50%.",
          merksatz: "Statine hemmen HMG-CoA-Reduktase → weniger Cholesterinsynthese → LDL-Rezeptor-Hochregulation → LDL-Senkung.",
        },
        {
          heading: "Wichtige Steroide und ihre Funktionen",
          text: "Alle Steroide leiten sich vom Cholesterin ab:",
          table: {
            headers: ["Steroid", "Funktion"],
            rows: [
              ["Cholesterin", "Membrankomponente (reguliert Fluidität), Ausgangsstoff für alle Steroide"],
              ["Cortisol", "Glucocorticoid; Stressreaktion, Gluconeogenese, Antiinflammation"],
              ["Aldosteron", "Mineralocorticoid; Na⁺/K⁺-Regulation in Niere"],
              ["Testosteron", "Androgen; Virilisierung, Spermatogenese"],
              ["Östradiol", "Östrogen; Feminisierung, Menstruationszyklus"],
              ["Progesteron", "Gelbkörperhormon; Schwangerschaft"],
              ["Vitamin D₃", "Calcitriol (aktiv); Calcium- und Phosphathomöostase"],
              ["Gallensäuren", "Cholsäure etc.; Fettemulgierung im Darm"],
            ]
          }
        },
      ],
      merksätze: [
        "Fettsäuren: gesättigt = keine C=C; einfach ungesättigt = eine C=C; mehrfach ungesättigt = ≥2 C=C.",
        "Essentielle Fettsäuren: Linolsäure (ω-6) und α-Linolensäure (ω-3) — müssen mit Nahrung zugeführt werden.",
        "cis-Doppelbindung → Knick → niedriger Schmelzpunkt; trans-Doppelbindung → gerade → höherer Schmelzpunkt.",
        "Energiedichte: Lipide 38 kJ/g vs. Kohlenhydrate/Proteine je 17 kJ/g.",
        "Triglycerid = Glycerin + 3 Fettsäuren, verknüpft durch 3 Esterbindungen (Kondensation).",
        "Phospholipide = amphipathisch (polarer Phosphatkopf + 2 apolare Fettsäureschwänze) → Bilayer.",
        "Lecithin (Phosphatidylcholin) = häufigstes Membranphospholipid.",
        "Sterangerüst = 4 kondensierte Ringe (3× Sechsring + 1× Fünfring); Cholesterin ist Grundgerüst.",
        "Statine hemmen HMG-CoA-Reduktase (Schlüsselenzym der Cholesterinbiosynthese).",
        "Ketonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton — entstehen bei exzessiver Lipolyse (Fasten, Typ-1-Diabetes).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erläutern Sie, weshalb Phospholipide spontan Lipiddoppelschichten bilden und welche Rolle Cholesterin in biologischen Membranen spielt.",
        answer: "Phospholipide sind amphipathische Moleküle: Sie besitzen einen hydrophilen (wasserfreundlichen) polaren Kopf (Phosphatgruppe mit Cholin oder einem anderen polaren Alkohol) und zwei hydrophobe (wasserfeindliche) unpolare Fettsäureschwänze. Wenn Phospholipide in wässriges Milieu gebracht werden, führt der hydrophobe Effekt zur spontanen Selbstorganisation: Die Fettsäureschwänze meiden den Kontakt mit Wasser und lagern sich zusammen (hydrophobe Wechselwirkungen), während die polaren Köpfe zur wässrigen Phase weisen. Das thermodynamisch günstigste Arrangement ist dabei nicht die Mizelle (wie bei Detergenzien mit nur einem Schwanz), sondern eine **Phospholipid-Doppelschicht (Bilayer)**: Zwei Lagen Phospholipide ordnen sich so an, dass ihre Fettsäureschwänze nach innen zeigen und ihre polaren Köpfe nach außen zur wässrigen Phase. Dies führt zu einem selbstdichtenden, flexiblen flüssigkristallinen Membransystem — der Grundstruktur aller biologischen Membranen. Cholesterin fügt sich mit seiner kleinen OH-Gruppe in Richtung der Phosphatkopfgruppen und seinem unpolaren Sterangerüst zwischen den Fettsäureketten ein. Es erfüllt dabei eine duale temperaturabhängige Funktion: Bei niedrigen Temperaturen verhindert es das Erstarren der Membran (Fluiditätspuffer), bei hohen Temperaturen die übermäßige Fluidisierung. Darüber hinaus dient Cholesterin als Ausgangsstoff für Steroidhormone, Gallensäuren und Vitamin D₃.",
      },
      klinischerBezug: "Hypercholesterinämie und Atherosklerose; Statine als HMG-CoA-Reduktase-Hemmer; Ketoazidose bei Typ-1-Diabetes; Trans-Fettsäuren als kardiovaskulärer Risikofaktor.",
      selfTest: [
        {
          question: "Welche Aussage über die Energiedichte von Lipiden im Vergleich zu Kohlenhydraten ist korrekt?",
          options: [
            "Lipide und Kohlenhydrate haben die gleiche Energiedichte von ca. 17 kJ/g",
            "Kohlenhydrate liefern mit 38 kJ/g mehr Energie als Lipide mit 17 kJ/g",
            "Lipide liefern mit ca. 38 kJ/g mehr als doppelt so viel Energie wie Kohlenhydrate (ca. 17 kJ/g)",
            "Proteine liefern mehr Energie als Lipide",
            "Lipide liefern nur 4 kcal/g, Kohlenhydrate dagegen 9 kcal/g",
          ],
          correctIndex: 2,
          explanation: "Lipide (Fette) liefern ca. 38 kJ/g (≈ 9 kcal/g), während Kohlenhydrate und Proteine je ca. 17 kJ/g (≈ 4 kcal/g) liefern. Die höhere Energiedichte der Lipide erklärt sich durch den stärker reduzierten (höherer Wasserstoffgehalt, weniger Sauerstoff) Zustand der Fettsäuren im Vergleich zu Kohlenhydraten (die formal CH₂O-Einheiten enthalten und somit 'schon partiell oxidiert' sind). Deshalb sind Triglyceride als Energiespeicher effizienter als Glykogen (zudem nimmt Glykogen gebundenes Wasser mit → effektive Energiedichte von Glykogen noch geringer).",
          hints: [
            "Lipide enthalten viel mehr Wasserstoff relativ zum Sauerstoff als Kohlenhydrate — welche Konsequenz hat das für die Oxidationsenergie?",
            "Merke: Fett = 9 kcal/g; KH und Protein = 4 kcal/g.",
          ],
          tags: ["energiedichte", "lipide", "kohlenhydrate", "stoffwechsel"],
          difficulty: 1,
        },
        {
          question: "Was macht Phospholipide zu idealen Membranbestandteilen?",
          options: [
            "Sie sind vollständig hydrophob und bilden dadurch wasserundurchlässige Schichten",
            "Sie sind vollständig hydrophil und können sich frei in wässriger Lösung lösen",
            "Sie sind amphipathisch (polarer Kopf + apolare Schwänze) und bilden spontan Bilayer in Wasser",
            "Sie tragen drei Fettsäureketten wie Triglyceride und sind deshalb besonders stabil",
            "Sie können kovalente Bindungen mit Membranproteinen eingehen und die Membran fixieren",
          ],
          correctIndex: 2,
          explanation: "Phospholipide sind amphipathische Moleküle: Der hydrophile polare Kopf (Phosphat + Cholin oder anderer polarer Rest) ist wasserfreundlich, die zwei hydrophoben Fettsäureschwänze sind wasserfeindlich. In wässrigem Milieu ordnen sie sich durch den hydrophoben Effekt spontan zu einer Doppelschicht (Bilayer) an: Köpfe nach außen zur wässrigen Phase, Schwänze nach innen. Diese Selbstorganisation liefert die Grundstruktur aller biologischen Membranen. Triglyceride (drei Fettsäuren, kein polarer Kopf) sind vollständig hydrophob und bilden keine Membranen, sondern Fetttröpfchen.",
          hints: [
            "Was ist das Besondere an einer Substanz, die sowohl hydrophile als auch hydrophobe Bereiche hat?",
            "Denke an den hydrophoben Effekt: Was geschieht mit unpolaren Bereichen in Wasser?",
          ],
          tags: ["phospholipide", "membran", "amphipathisch", "bilayer"],
          difficulty: 1,
        },
        {
          question: "Welcher der folgenden Faktoren erklärt den niedrigeren Schmelzpunkt von Olivenöl im Vergleich zu Palmfett?",
          options: [
            "Olivenöl enthält Phospholipide, Palmfett dagegen nicht",
            "Palmfett hat eine kürzere Kohlenstoffkette als Olivenöl",
            "Olivenöl enthält vorwiegend einfach ungesättigte (cis) Fettsäuren mit Knick in der Kette",
            "Olivenöl hat einen höheren Anteil an trans-Fettsäuren",
            "Palmfett enthält Steroide, die den Schmelzpunkt erhöhen",
          ],
          correctIndex: 2,
          explanation: "Olivenöl enthält hauptsächlich Ölsäure (C18:1Δ9, cis-Konfiguration, einfach ungesättigt). Die cis-Doppelbindung erzeugt einen Knick von ca. 30° in der Fettsäurekette. Dieser Knick verhindert die enge parallele Packung der Fettsäuremoleküle und reduziert die Van-der-Waals-Wechselwirkungen → niedriger Schmelzpunkt → bei Raumtemperatur flüssig. Palmfett enthält hauptsächlich Palmitinsäure (C16:0, gesättigt, gestreckte Kette) → dichte Packung → stärkere Van-der-Waals-Kräfte → höherer Schmelzpunkt → fest bei Raumtemperatur. Trans-Fettsäuren verhalten sich ähnlich wie gesättigte (gerade Kette) und wären ebenfalls fest.",
          hints: [
            "Was bewirkt eine cis-Doppelbindung geometrisch für die Form der Fettsäurekette?",
            "Dichte Packung → mehr Van-der-Waals-Kräfte → höherer Schmelzpunkt. Welche Fettsäureart erlaubt dichteste Packung?",
          ],
          tags: ["fettsäuren", "schmelzpunkt", "cis", "gesättigt-ungesättigt"],
          difficulty: 2,
        },
        {
          question: "Welches Enzym wird durch Statine gehemmt und welche Konsequenz hat dies für den Cholesterinstoffwechsel?",
          options: [
            "Cholesterin-Oxidase → Cholesterin wird direkt abgebaut → LDL sinkt",
            "LDL-Rezeptor → weniger LDL-Aufnahme in Hepatozyten → LDL-Anstieg im Blut",
            "HMG-CoA-Reduktase → weniger Cholesterinsynthese → Hochregulation der LDL-Rezeptoren → LDL-Senkung",
            "Lipoprotein-Lipase → weniger VLDL-Abbau → Triglyceridanstieg",
            "Phospholipase A₂ → Membranabbau in Hepatozyten → diffuse Lipidstörung",
          ],
          correctIndex: 2,
          explanation: "Statine (z.B. Atorvastatin, Simvastatin, Rosuvastatin) hemmen kompetitiv die HMG-CoA-Reduktase, das Schlüsselenzym der Cholesterinbiosynthese im Mevalonat-Weg. Durch weniger endogene Cholesterinsynthese in der Leber sinkt der intrahepatische Cholesteringehalt. Als Reaktion darauf reguliert die Leberzelle die LDL-Rezeptoren auf ihrer Oberfläche hoch (mehr SREBP-2-Aktivierung). Diese erhöhte LDL-Rezeptor-Dichte führt zu verstärkter Aufnahme von LDL-Cholesterin aus dem Blut → LDL-Senkung um 30–50%. HDL-Cholesterin steigt leicht an. Statine sind die wirksamsten Medikamente zur LDL-Senkung und zur Reduktion kardiovaskulärer Ereignisse.",
          hints: [
            "HMG-CoA-Reduktase ist das Schrittmacherenzym der Cholesterinbiosynthese — was passiert, wenn es gehemmt wird?",
            "Die Leber reagiert auf niedrigen intrazellulären Cholesterinspiegel mit Hochregulation von Rezeptoren — welchen?",
          ],
          tags: ["statine", "hmg-coa-reduktase", "cholesterin", "ldl", "klinisch"],
          difficulty: 2,
        },
        {
          question: "Welches Steroid dient als gemeinsamer Ausgangsstoff für Cortisol, Testosteron und Vitamin D₃?",
          options: [
            "Östradiol",
            "Cholesterin",
            "Aldosteron",
            "Cortisol",
            "Progesteron",
          ],
          correctIndex: 1,
          explanation: "Cholesterin ist der universelle Vorläufer aller Steroide im menschlichen Körper. Es besitzt das Sterangerüst (vier kondensierte Ringe: drei Sechsringe + ein Fünfring) und eine –OH-Gruppe an C3 sowie eine aliphatische Seitenkette. Aus Cholesterin werden in den Nebennieren Glucocorticoide (Cortisol) und Mineralocorticoide (Aldosteron) synthetisiert, in den Gonaden Androgene (Testosteron) und Östrogene (Östradiol), in der Leber Gallensäuren, und in Haut/Leber/Niere Vitamin D₃ (Cholecalciferol → Calcidiol → Calcitriol). Progesteron ist selbst ein Steroid-Intermediat, kein Ausgangsstoff für alle genannten.",
          hints: [
            "Was haben Cortisol, Testosteron, Aldosteron und Vitamin D strukturell gemeinsam?",
            "Der Ausgangsstoff ist das häufigste Steroid in Säugetierzellmembranen.",
          ],
          tags: ["cholesterin", "steroide", "steroidhormone", "biosynthese"],
          difficulty: 1,
        },
        {
          question: "Ketonkörper entstehen bei längerem Fasten oder unkontrolliertem Typ-1-Diabetes. Welche Metabolite sind das und in welchem Organ werden sie hauptsächlich gebildet?",
          options: [
            "Glucose und Fructose; gebildet in der Niere durch Gluconeogenese",
            "Acetoacetat, β-Hydroxybutyrat und Aceton; gebildet in der Leber aus überschüssigem Acetyl-CoA",
            "Pyruvat und Lactat; gebildet in der Muskulatur bei anaerober Glykolyse",
            "Cholesterin und Gallensäuren; gebildet in der Leber bei erhöhtem Fettkonsum",
            "Harnsäure und Ammoniak; gebildet in der Leber beim Proteinabbau",
          ],
          correctIndex: 1,
          explanation: "Ketonkörper sind Acetoacetat, β-Hydroxybutyrat und Aceton. Sie entstehen in der Leber (Mitochondrien) aus überschüssigem Acetyl-CoA, das bei gesteigerter Fettsäureoxidation (β-Oxidation) anfällt, wenn der Oxalacetat-Pool für den Citratzyklus nicht ausreicht (z.B. bei Glukosemangel). In der Ketogenese kondensieren zwei Acetyl-CoA-Moleküle zu Acetoacetyl-CoA, das zu Acetoacetat umgewandelt wird; durch Reduktion entsteht β-Hydroxybutyrat, durch spontane Decarboxylierung flüchtiges Aceton. Bei unkontrolliertem Typ-1-Diabetes führt absoluter Insulinmangel zu unkontrollierter Lipolyse und Ketogenese → Ketoazidose (Blut-pH fällt, Acetongeruch der Atemluft).",
          hints: [
            "In welchem Organ läuft die β-Oxidation der Fettsäuren ab und was ist das Endprodukt?",
            "Bei Glukosemangel fehlt Oxalacetat für den Citratzyklus — wohin geht dann das Acetyl-CoA?",
          ],
          tags: ["ketonkörper", "ketoazidose", "diabetes", "fasten", "klinisch"],
          difficulty: 3,
        },
        {
          question: "Welche Funktion haben Gallensäuren und von welchem Molekül werden sie synthetisiert?",
          options: [
            "Gallensäuren sind Verdauungsenzyme für Fette; sie werden aus Aminosäuren gebildet",
            "Gallensäuren sind Emulgatoren für Fette im Darm; sie werden aus Cholesterin gebildet",
            "Gallensäuren sind Hormone mit Steroidstruktur; sie werden in der Bauchspeicheldrüse gebildet",
            "Gallensäuren sind Transportproteine für Lipide im Blut; sie werden aus Triglyceriden gebildet",
            "Gallensäuren sind Cofaktoren der Lipasen und werden aus Fettsäuren gebildet",
          ],
          correctIndex: 1,
          explanation: "Gallensäuren (z.B. Cholsäure, Chenodesoxycholsäure) werden in der Leber aus Cholesterin synthetisiert und als Gallensalze (konjugiert mit Glycin oder Taurin) in der Gallenblase gespeichert. Im Dünndarm wirken sie als biologische Detergenzien (Emulgatoren): Durch ihren amphipathischen Charakter (Sterangerüst + polare OH-Gruppen) emulgieren sie Nahrungsfette in kleine Mizellen → vergrößerte Angriffsfläche für pankre­atische Lipasen. Gallensäuren werden im terminalen Ileum resorbiert und zur Leber zurücktransportiert (enterohepatischer Kreislauf). Sie sind keine Enzyme selbst, sondern ermöglichen die effiziente enzymatische Fettspaltung.",
          hints: [
            "Gallensäuren haben ein Sterangerüst — von welchem häufigen Steroid werden sie abgeleitet?",
            "Was bedeutet 'emulgieren' und warum ist das für die Fettverdauung wichtig?",
          ],
          tags: ["gallensäuren", "cholesterin", "fettverdauung", "emulgierung"],
          difficulty: 2,
        },
      ],
    },

    {
      id: 'ch-13-04',
      title: "Nukleinsäuren — DNA und RNA",
      content: `# Nukleinsäuren — DNA und RNA

## Nukleotid-Aufbau

Das Grundmonomer der Nukleinsäuren ist das **Nukleotid**, bestehend aus drei Komponenten:
1. **Stickstoffbase** (Purin oder Pyrimidin)
2. **Pentosezucker** (Ribose bei RNA; 2'-Desoxyribose bei DNA — kein OH an C2')
3. **Phosphatgruppe(n)** (1–3; in Nukleinsäuren ist es die 5'-Phosphatgruppe)

**Nukleosid** = Base + Zucker (ohne Phosphat). **Nukleotid** = Nukleosid + Phosphat(e). **ATP** (Adenosin-Triphosphat) ist das zentrale Energietransportmolekül der Zelle: Die Hydrolyse der β-γ-Phosphorsäureanhydridbindung liefert ΔG°' ≈ –30,5 kJ/mol.

## Stickstoffbasen

**Purinbasen** (Doppelring, 9 Atome): **Adenin (A)** und **Guanin (G)** — in DNA und RNA
**Pyrimidinbasen** (Einzelring, 6 Atome): **Cytosin (C)** in DNA + RNA; **Thymin (T)** nur in DNA (hat Methylgruppe an C5); **Uracil (U)** nur in RNA (keine Methylgruppe)

## Chargaff-Regeln

In doppelsträngiger DNA gilt:
- **A = T** (verbunden durch **2 Wasserstoffbrücken**)
- **G ≡ C** (verbunden durch **3 Wasserstoffbrücken**)
- **A + G = C + T** (Purine = Pyrimidine)
- Der GC-Gehalt variiert zwischen Organismen und bestimmt die Schmelztemperatur der DNA (hoher GC% → höhere Tm)

## DNA-Doppelhelix

**Watson-Crick-Modell (B-DNA)**:
- Zwei **antiparallele** Stränge (5'→3' und 3'→5')
- **Rechtsgängige** Helix
- 10,5 Basenpaare pro Windung; Windungshöhe 3,4 nm
- Komplementäre Basenpaare im Inneren durch H-Brücken; hydrophobe Stapelung (π-π-Stacking) der Basen
- Zucker-Phosphat-Rückgrat außen, negativ geladen (Phosphatgruppen) → bindet Histonproteine

**Antiparallel** bedeutet: Ein Strang verläuft 5'→3', der komplementäre 3'→5'. DNA-Polymerasen synthetisieren ausschließlich in 5'→3'-Richtung, weshalb ein Strang kontinuierlich (Leitstrang) und einer diskontinuierlich (Folgestrang, Okazaki-Fragmente) repliziert wird.

## RNA-Typen

## Nukleosid-Analoga in der Therapie

**Aciclovir** (Acycloguanosin): Guanosin-Analogon ohne 3'-OH → keine Kettenverlängerung nach Einbau → Kettenabbruch → hemmt virale DNA-Polymerase (Herpesviren). **Tenofovir**: Adenosinmonophosphat-Analogon → hemmt HIV-Reverse Transkriptase. **Remdesivir**: Adenosin-Analogon → hemmt SARS-CoV-2-RNA-abhängige RNA-Polymerase.

## DNA-Methylierung und Epigenetik

DNA-Methylierung (Methylierung von Cytosin an CpG-Dinukleotiden durch DNA-Methyltransferasen) ist eine epigenetische Modifikation: Sie ändert nicht die Basensequenz, beeinflusst aber die Transkription (Promotor-Methylierung → Silencing). Dies ist wichtig für Genimprinting, X-Inaktivierung, Krebsentstehung (Hypermethylierung von Tumorsuppressor-Promotoren).`,
      lernziele: [
        "Die drei Komponenten eines Nukleotids nennen und Nukleosid von Nukleotid unterscheiden",
        "Die Purin- und Pyrimidinbasen und ihre Paarungsregeln (Chargaff) mit Anzahl der Wasserstoffbrücken beschreiben",
        "Den Aufbau der DNA-Doppelhelix (antiparallel, rechtsgängig, 10,5 bp/Windung) erklären",
        "Die vier wichtigsten RNA-Typen (mRNA, tRNA, rRNA, miRNA) und ihre Funktionen benennen",
        "Das Wirkprinzip von Nukleosid-Analoga als Virostatika (Kettenabbruch) erklären",
      ],
      sections: [
        {
          heading: "Nukleotid-Aufbau und ATP",
          text: "Ein Nukleotid besteht aus einer Stickstoffbase (Purin oder Pyrimidin), einem Pentosezucker (Ribose oder Desoxyribose) und einer Phosphatgruppe. In der Nukleinsäure-Kette verbindet eine Phosphodiesterbindung das 3'-OH des einen Zuckers mit dem 5'-Phosphat des nächsten Nukleotids (3'→5'-Verknüpfung). ATP (Adenosin-Triphosphat) ist das universelle Energiewährungsmolekül: Die Hydrolyse von ATP zu ADP + Pᵢ liefert etwa 30,5 kJ/mol unter Standardbedingungen. Die Unterschiede zwischen DNA und RNA: Ribose (RNA) hat OH an C2', Desoxyribose (DNA) hat nur H an C2'. RNA enthält Uracil statt Thymin.",
          merksatz: "DNA = Desoxyribose + T; RNA = Ribose + U. Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat.",
        },
        {
          heading: "DNA-Doppelhelix und Chargaff-Regeln",
          text: "Die B-DNA (häufigste Form in vivo) ist eine rechtsgängige Doppelhelix: zwei antiparallele Stränge winden sich umeinander. Im Inneren befinden sich die Basenpaare (A=T mit 2 H-Brücken; G≡C mit 3 H-Brücken), das Zucker-Phosphat-Rückgrat liegt außen. 10,5 Basenpaare pro Windung, Steigung 3,4 nm. Die Chargaff-Regeln folgen aus der komplementären Basenpaarung: In jeder dsDNA gilt A=T und G=C. Der GC-Gehalt ist artspezifisch und korreliert positiv mit der Schmelztemperatur (Tm), da G-C-Paare (3 H-Brücken) stabiler sind als A-T-Paare (2 H-Brücken).",
          merksatz: "A=T (2 H-Brücken); G≡C (3 H-Brücken). GC-reich → höhere Schmelztemperatur.",
        },
        {
          heading: "RNA-Typen und Nukleosid-Analoga",
          text: "mRNA überträgt die genetische Information und enthält 5'-Cap, Poly-A-Schwanz und kodierenden Bereich (Codons = Tripletts). tRNA trägt die Aminosäuren und hat ein Anticodon, das komplementär zum mRNA-Codon ist. rRNA bildet das Ribosom und katalysiert als Ribozym die Peptidbindungsbildung. miRNA reguliert die Genexpression posttranskriptionell. Nukleosid-Analoga (Aciclovir, Tenofovir) nutzen die Ähnlichkeit zu natürlichen Nukleosiden: Nach Phosphorylierung durch virale Kinasen werden sie von viralen Polymerasen eingebaut, terminieren aber die Kettenverlängerung (Fehlen des 3'-OH → kein nächstes Nukleotid kann angehängt werden).",
          merksatz: "Aciclovir: kein 3'-OH → Kettenabbruch → hemmt virale DNA-Synthese. Wirksam gegen Herpes simplex.",
        },
        {
          heading: "RNA-Typen und ihre Funktionen",
          text: "Die vier wichtigsten RNA-Typen im Überblick:",
          table: {
            headers: ["RNA-Typ", "Funktion"],
            rows: [
              ["mRNA (messenger)", "Überträgt genetische Information vom Kern zum Ribosom; wird translatiert"],
              ["tRNA (transfer)", "Transportiert Aminosäuren zum Ribosom; Anticodon paart mit mRNA-Codon"],
              ["rRNA (ribosomale)", "Strukturkomponente des Ribosoms (28S, 18S, 5.8S, 5S beim Eukaryoten); katalytisch aktiv (Ribozym)"],
              ["miRNA / siRNA", "Regulieren Genexpression durch mRNA-Abbau oder Translationshemmung (RNA-Interferenz)"],
            ]
          }
        },
      ],
      merksätze: [
        "Purine (Doppelring): Adenin (A), Guanin (G) — in DNA und RNA. Pyrimidine (Einzelring): C, T (nur DNA), U (nur RNA).",
        "Chargaff: A=T (2 H-Brücken); G≡C (3 H-Brücken); A+G = C+T (Purine = Pyrimidine).",
        "DNA-Helix: antiparallel (5'→3' || 3'→5'), rechtsgängig, 10,5 bp/Windung, 3,4 nm Steigung.",
        "Desoxyribose (DNA): kein OH an C2'; Ribose (RNA): OH an C2'.",
        "Nukleosid = Base + Zucker; Nukleotid = Base + Zucker + Phosphat; ATP = Adenosin-Triphosphat.",
        "mRNA = Botschaft vom Kern zum Ribosom; tRNA = trägt Aminosäure + Anticodon; rRNA = Ribosom-Grundgerüst.",
        "Anticodon der tRNA ist komplementär und antiparallel zum Codon der mRNA.",
        "Kettenabbruch-Prinzip: Nukleosid-Analogon ohne 3'-OH → keine weiteren Nukleotide anknüpfbar.",
        "DNA-Methylierung an CpG: epigenetische Regulation ohne Sequenzänderung; Promotor-Methylierung → Gen-Silencing.",
        "GC-reiche DNA hat höhere Schmelztemperatur (3 H-Brücken pro GC vs. 2 bei AT).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erläutern Sie das Wirkprinzip von Aciclovir als Virostatikum und erklären Sie, warum es selektiv virusbefallene Zellen betrifft.",
        answer: "Aciclovir (Acycloguanosin) ist ein Guanosin-Analogon und eines der wichtigsten Virostatika zur Behandlung von Herpesvirus-Infektionen (HSV-1, HSV-2, VZV). Sein Wirkprinzip basiert auf einem mehrstufigen Aktivierungsprozess kombiniert mit dem Kettenabbruch-Mechanismus. Im ersten Schritt wird Aciclovir von der virusspezifischen Thymidinkinase (TK) phosphoryliert zu Aciclovir-Monophosphat. Dies ist der Schlüsselschritt für die Selektivität: Herpesviren codieren ihre eigene TK, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Thymidinkinase des Wirts. In nicht-infizierten Zellen findet diese erste Phosphorylierung kaum statt. In einem zweiten und dritten Schritt wird Aciclovir-Monophosphat durch zelluläre Kinasen zu Aciclovir-Triphosphat phosphoryliert. Dieses wird von der viralen DNA-Polymerase als falsches Substrat in den wachsenden DNA-Strang eingebaut. Da Aciclovir keine 3'-Hydroxylgruppe am Zuckeranalogon besitzt (der Zuckerring ist 'offen', es fehlt C3' und damit die 3'-OH-Gruppe), kann das nächste Nukleotid nicht an die 3'-Position angehängt werden — der DNA-Strang bricht ab. Die virale Replikation wird so effektiv unterbunden, während gesunde, nicht-infizierte Zellen kaum betroffen sind.",
      },
      klinischerBezug: "Aciclovir (Herpes), Tenofovir (HIV), Remdesivir (COVID-19) als Nukleosid-Analoga mit Kettenabbruchmechanismus; DNA-Methylierung in Krebsentstehung; Chargaff-Regeln für forensische DNA-Analyse.",
      selfTest: [
        {
          question: "Welche der folgenden Basen kommt ausschließlich in RNA vor?",
          options: [
            "Adenin",
            "Guanin",
            "Cytosin",
            "Thymin",
            "Uracil",
          ],
          correctIndex: 4,
          explanation: "Uracil ist eine Pyrimidinbase, die ausschließlich in RNA vorkommt. Sie entspricht funktionell dem Thymin der DNA (paart mit Adenin), besitzt aber keine Methylgruppe am C5. Thymin kommt ausschließlich in DNA vor. Adenin, Guanin und Cytosin kommen in beiden Nukleinsäuren (DNA und RNA) vor. Die Pentose unterscheidet ebenfalls: RNA enthält Ribose (OH an C2'), DNA enthält Desoxyribose (H an C2').",
          hints: [
            "DNA: A, T, G, C; RNA: A, ?, G, C — welche Base ersetzt Thymin in der RNA?",
            "Der Name 'Ur-acil' enthält einen Hinweis: 'ur' = ursprünglich — RNA ist evolutionär älter als DNA.",
          ],
          tags: ["uracil", "thymin", "rna", "dna", "basen"],
          difficulty: 1,
        },
        {
          question: "Ein DNA-Doppelstrang hat einen GC-Gehalt von 60%. Wie viele Wasserstoffbrücken gibt es pro 100 Basenpaare?",
          options: [
            "200 Wasserstoffbrücken",
            "220 Wasserstoffbrücken",
            "240 Wasserstoffbrücken",
            "260 Wasserstoffbrücken",
            "300 Wasserstoffbrücken",
          ],
          correctIndex: 2,
          explanation: "Bei 100 Basenpaaren und 60% GC-Gehalt: 60 G≡C-Paare × 3 H-Brücken = 180 H-Brücken, plus 40 A=T-Paare × 2 H-Brücken = 80 H-Brücken. Gesamt: 180 + 80 = 260 Wasserstoffbrücken. Warte: 60×3 = 180, 40×2 = 80, Summe = 260. Das ist Option D. Lass nochmals rechnen: 60% GC → 60 G-C-Paare (je 3 H-Brücken = 180) + 40 A-T-Paare (je 2 H-Brücken = 80) = 260 Wasserstoffbrücken insgesamt.",
          hints: [
            "G≡C hat 3 H-Brücken, A=T hat 2 H-Brücken. Bei 100 bp und 60% GC: 60 GC-Paare + 40 AT-Paare.",
            "Rechne: 60×3 + 40×2 = ?",
          ],
          tags: ["chargaff", "wasserstoffbrücken", "gc-gehalt", "dna"],
          difficulty: 3,
        },
        {
          question: "Was bedeutet 'antiparallel' in Bezug auf die DNA-Doppelhelix?",
          options: [
            "Die beiden Stränge verlaufen parallel in derselben 5'→3'-Richtung",
            "Die Basensequenzen der beiden Stränge sind identisch",
            "Ein Strang verläuft in 5'→3'-Richtung, der komplementäre Strang in 3'→5'-Richtung",
            "Die Doppelhelix ist linksgängig (Z-DNA)",
            "Die Phosphatgruppen wechseln zwischen den Strängen ab",
          ],
          correctIndex: 2,
          explanation: "Antiparallel bedeutet, dass die beiden Stränge der DNA-Doppelhelix in entgegengesetzter Richtung verlaufen: Wenn ein Strang von 5'→3' verläuft, dann verläuft der komplementäre Partnerstrang in 3'→5'-Richtung (bezogen auf dieselbe räumliche Richtung). Diese Antiparallelität ist Konsequenz der komplementären Basenpaarung und der Geometrie der glykosidischen Bindungen. Biologisch bedeutsam: DNA-Polymerasen synthetisieren nur in 5'→3'-Richtung, weshalb an der Replikationsgabel ein Strang kontinuierlich (Leitstrang, 5'→3' in Syntheserichtung) und einer diskontinuierlich (Folgestrang, als Okazaki-Fragmente) repliziert wird.",
          hints: [
            "Schreibe zwei Zahlenreihen übereinander: 5'→3' und 3'←5'. Das ist antiparallel.",
            "DNA-Polymerase synthetisiert nur 5'→3'. Was bedeutet das für den anderen Strang an der Replikationsgabel?",
          ],
          tags: ["dna-helix", "antiparallel", "replikation"],
          difficulty: 2,
        },
        {
          question: "Welche RNA trägt eine Aminosäure zum Ribosom und erkennt das mRNA-Codon durch ihr Anticodon?",
          options: [
            "mRNA (messenger RNA)",
            "rRNA (ribosomale RNA)",
            "tRNA (transfer RNA)",
            "miRNA (micro RNA)",
            "siRNA (small interfering RNA)",
          ],
          correctIndex: 2,
          explanation: "Die tRNA (Transfer-RNA) ist das Adaptormolekül zwischen der Nukleinsäure-Welt (mRNA-Codon) und der Protein-Welt (Aminosäure). Sie hat eine charakteristische Kleeblattstruktur (sekundär) bzw. L-förmige 3D-Struktur. Am 3'-Ende (CCA-Trinukleotid) ist die spezifische Aminosäure kovalent gebunden (durch Aminoacyl-tRNA-Synthetasen, 'Aktivierung'). Das Anticodon-Loop enthält ein Trinukleotid (Anticodon), das komplementär und antiparallel zum spezifischen mRNA-Codon ist. mRNA enthält die Codons, rRNA ist Ribosombestandteil, miRNA/siRNA regulieren die Genexpression posttranskriptionell.",
          hints: [
            "Welche RNA hat ein 'Anticodon' — das Gegenstück zum Codon auf der mRNA?",
            "Transfer = Transport. Was wird von wo nach wo transportiert?",
          ],
          tags: ["trna", "anticodon", "translation", "rna-typen"],
          difficulty: 1,
        },
        {
          question: "Warum ist Aciclovir selektiv für virusinfizierte Zellen und kaum toxisch für gesunde Wirtszellen?",
          options: [
            "Aciclovir kann die Plasmamembran gesunder Zellen nicht passieren",
            "Die erste Phosphorylierung wird fast ausschließlich durch die viruseigene Thymidinkinase durchgeführt, die eine viel höhere Affinität für Aciclovir hat als die zelluläre Kinase",
            "Gesunde Zellen können Aciclovir enzymatisch abbauen, infizierte Zellen nicht",
            "Aciclovir wird nur von Viruspartikeln, nicht von Zellen aufgenommen",
            "Die zelluläre DNA-Polymerase erkennt Aciclovir nicht als Substrat, die virale DNA-Polymerase hat eine absolut niedrigere Genauigkeit",
          ],
          correctIndex: 1,
          explanation: "Die Selektivität von Aciclovir beruht auf einem zweistufigen Mechanismus: Erstens wird Aciclovir hauptsächlich durch die viruseigene Thymidinkinase (TK) zu Aciclovir-Monophosphat phosphoryliert. Die HSV-TK hat eine deutlich höhere Affinität (niedrigerer Km) für Aciclovir als die zelluläre Thymidinkinase. In nicht-infizierten Zellen findet diese erste Aktivierung kaum statt. Zweitens: Aciclovir-Triphosphat hemmt präferentiell die virale DNA-Polymerase (Ki viral ≪ Ki zellulär). Dieser zweifache Selektivitätsmechanismus erklärt die geringe Toxizität von Aciclovir für den Wirt bei gleichzeitig effektiver antiviraler Wirkung.",
          hints: [
            "Welches Enzym führt die erste Aktivierungsphosphorylierung von Aciclovir durch, und wer kodiert es?",
            "Das Virus bringt sein eigenes Aktivierungsenzym mit — welcher Vorteil ergibt sich daraus für die Selektivität?",
          ],
          tags: ["aciclovir", "selektivität", "thymidinkinase", "virostatika"],
          difficulty: 3,
        },
        {
          question: "Ein dsDNA-Abschnitt hat auf einem Strang die Sequenz 5'-ATGCGT-3'. Wie lautet der komplementäre Gegenstrang?",
          options: [
            "5'-ATGCGT-3'",
            "5'-TACGCA-3'",
            "3'-ATGCGT-5'",
            "5'-ACGCAT-3'",
            "3'-UACGCA-5'",
          ],
          correctIndex: 3,
          explanation: "Der komplementäre Strang folgt den Chargaff-Regeln (A paart mit T, G paart mit C) und verläuft antiparallel. Ausgangs-Strang: 5'-A-T-G-C-G-T-3'. Komplementär und antiparallel: 3'-T-A-C-G-C-A-5' = 5'-A-C-G-C-A-T-3'. Schritt für Schritt: A→T, T→A, G→C, C→G, G→C, T→A ergibt den Komplementärstrang (3'→5'): TACGCA. Umgekehrt in 5'→3'-Richtung: ACGCAT. Antwort D ist korrekt. RNA würde Uracil statt Thymin enthalten (Antwort E), ist hier aber nicht gemeint (es handelt sich um dsDNA).",
          hints: [
            "Komplementäre Basenpaare: A↔T, G↔C. Denk daran, dass der Gegenstrang antiparallel ist!",
            "Schreibe erst den Komplementärstrang 3'→5', dann drehe ihn um für die 5'→3'-Schreibweise.",
          ],
          tags: ["basenpaarung", "komplementärstrang", "antiparallel", "dna"],
          difficulty: 2,
        },
        {
          question: "Was ist der Unterschied zwischen DNA-Methylierung als epigenetischer Modifikation und einer Punktmutation?",
          options: [
            "Beide verändern die Basensequenz der DNA dauerhaft",
            "DNA-Methylierung verändert die Basensequenz, Punktmutationen nicht",
            "DNA-Methylierung verändert die Genexpression ohne Änderung der Basensequenz; Punktmutationen verändern die Basensequenz selbst",
            "Punktmutationen sind vererbbar, DNA-Methylierung nicht",
            "DNA-Methylierung betrifft nur Adenin; Punktmutationen betreffen Cytosin",
          ],
          correctIndex: 2,
          explanation: "DNA-Methylierung ist eine epigenetische Modifikation: Eine Methylgruppe (–CH₃) wird durch DNA-Methyltransferasen kovalent an das C5-Atom von Cytosin in CpG-Dinukleotiden angehängt. Die Basensequenz (A, T, G, C) bleibt dabei identisch — nur die chemische Modifikation am Cytosin ändert sich. Dennoch kann Promotor-Methylierung die Transkription eines Gens stillegen (Silencing). Bei Punktmutationen wird hingegen eine Base durch eine andere ausgetauscht, deletiert oder insertiert — die Sequenz selbst ändert sich. Epigenetische Markierungen (Methylierungen, Histonmodifikationen) können vererbt werden (transgenerationelle Epigenetik), sind aber prinzipiell reversibel.",
          hints: [
            "'Epi-genetik' bedeutet 'über der Genetik' — die Sequenz bleibt, die Regulation ändert sich.",
            "Was wird bei einer Mutation verändert: die Sequenz (A, T, G, C) oder eine chemische Gruppe daran?",
          ],
          tags: ["epigenetik", "dna-methylierung", "punktmutation", "genexpression"],
          difficulty: 2,
        },
      ],
    },
  ],
};
