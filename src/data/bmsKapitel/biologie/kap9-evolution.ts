import type { Kapitel } from '../types';

export const bioKap9: Kapitel = {
  id: 'bio-kap9',
  title: 'Evolution',
  subject: 'biologie',
  icon: '🦴',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'bio-9-01',
      title: 'Entstehung des Lebens und Endosymbiontentheorie',
      content: `## Entstehung des Lebens — Grundüberlegungen

Wie entstand das erste Leben auf der Erde vor ca. 3,8 Milliarden Jahren? Die Wissenschaft untersucht chemische und physikalische Prozesse, die zur Bildung erster biologischer Moleküle und schließlich lebender Zellen führten. Religiöse und philosophische Ansichten liegen außerhalb des naturwissenschaftlichen Rahmens.

## Miller-Urey-Experiment (1953)

Stanley Miller und Harold Urey simulierten die **präbiotische Atmosphäre** der frühen Erde: ein Gemisch aus Methan (CH₄), Ammoniak (NH₃), molekularem Wasserstoff (H₂) und Wasserdampf (H₂O). Durch elektrische Entladungen (simulierter Blitz) als Energiequelle entstanden nach wenigen Tagen **Aminosäuren** und andere organische Moleküle — die Bausteine des Lebens.

Das Experiment bewies: Organische Moleküle können aus anorganischen Verbindungen unter abiotischen Bedingungen entstehen (chemische Evolution). Kritik: Die genaue Zusammensetzung der Urathmo sphäre war anders (mehr CO₂ und N₂), aber auch mit modifizierten Zusammensetzungen entstehen organische Verbindungen.

## RNA-Welt-Hypothese

Die **RNA-Welt-Hypothese** postuliert, dass RNA die erste Informationsmolekül UND erste Katalysatormolekül war. RNA kann sowohl genetische Information speichern (wie DNA) als auch enzymatische Aktivität besitzen (Ribozyme). Dies löst das Henne-Ei-Problem: Proteine brauchen DNA/RNA für ihre Synthese, aber DNA/RNA brauchen Proteine (Enzyme). In einer RNA-Welt übernahm RNA beide Rollen. Erst später wurden DNA (stabiler für Informationsspeicherung) und Proteine (effektivere Katalyse) von der RNA übernommen.

## Protobionten

**Protobionten** (z. B. Coacervate, Liposomen) sind einfache, abgegrenzte Systeme, die durch spontane Aggregation entstehen können. Lipide bilden in wässriger Umgebung spontan Doppelschichten (Vesikel) — eine primitive Membran. Innerhalb dieser Membran konnten chemische Reaktionen isoliert ablaufen.

## Endosymbiontentheorie

Die **Endosymbiontentheorie** (Lynn Margulis, 1967) erklärt die Entstehung eukaryotischer Organellen. Mitochondrien und Chloroplasten entstanden durch **Endosymbiose**: ein größeres Prokaryot nahm ein kleineres auf, ohne es zu verdauen. Das internalisierte Bakterium wurde zum Organell.

Belege:
- Eigenes, ringförmiges DNA-Genom (ähnlich Bakterien)
- Eigene 70S-Ribosomen (wie Bakterien, nicht 80S wie Eukaryoten)
- Doppelmembran (innere Membran = ehemalige Bakterienmembran)
- Vermehrung durch binäre Teilung (unabhängig von Wirtszelle)
- Phylogenetische Ähnlichkeit zu Alphaproteobakterien (Mitochondrien) und Cyanobakterien (Chloroplasten)`,
      lernziele: [
        "Das Miller-Urey-Experiment und seine Bedeutung für die chemische Evolution erläutern",
        "Die RNA-Welt-Hypothese und ihre Begründung beschreiben",
        "Die Endosymbiontentheorie mit mindestens drei Belegen stützen",
      ],
      sections: [
        {
          heading: "RNA-Welt — Das Henne-Ei-Problem lösen",
          text: "Das zentrale Paradoxon der Lebensentstehung: Proteine katalysieren die Synthese von DNA und RNA, aber DNA und RNA sind nötig für die Proteinherstellung. Was kam zuerst? Die RNA-Welt-Hypothese löst dies: RNA-Moleküle können als Ribozyme enzymatische Aktivität entfalten (z. B. das Ribosom ist im Kern ein Ribozym — rRNA katalysiert die Peptidylübertragung). RNA kann sich selbst replizieren, mutieren und durch natürliche Selektion weiterentwickeln. Aktuelle Forschung zeigt, dass RNA unter präbiotischen Bedingungen spontan gebildet werden kann und dass primitive RNA-Enzyme (Ribozyme) einfache Reaktionen katalysieren. Mit der Zeit entwickelten sich DNA (thermodynamisch stabiler) als dauerhafteres Speichermedium und Proteine als effektivere Katalysatoren.",
          merksatz: "RNA-Welt: RNA war erstes Informations- UND Katalysemolekül (Ribozyme). Löst das Henne-Ei-Problem zwischen DNA/Protein.",
        },
        {
          heading: "Endosymbiontentheorie — Belege und Bedeutung",
          text: "Lynn Margulis' Theorie, die sie 1967 vorlegte und die zunächst stark kritisiert wurde, gilt heute als gesichert. Die Belege sind vielfältig und unabhängig voneinander: Mitochondrien haben ein eigenes ringförmiges Genom mit bakteriellen Merkmalen (keine Histone, kein Splicing). Ihre Ribosomen sedimentieren wie bakterielle (70S) und werden durch Antibiotika gehemmt, die auch Bakterien hemmen (z. B. Chloramphenicol, Tetracyclin). Phylogenetische Analysen zeigen, dass die mitochondriale 16S-rRNA am engsten mit Alphaproteobakterien (speziell Rickettsiales) verwandt ist. Für Chloroplasten gilt analoge Verwandtschaft mit Cyanobakterien. Die Theorie erklärt, warum eukaryotische Zellen so viel komplexer sind als prokaryotische — sie sind im Wesentlichen Chimären.",
          merksatz: "Endosymbiose-Belege: eigenes Genom, 70S-Ribosomen, Antibiotikasensitivität, Doppelmembran, binäre Teilung, phylogenetische Ähnlichkeit zu Bakterien.",
        },
      ],
      merksätze: [
        "Miller-Urey: CH₄ + NH₃ + H₂ + H₂O + Blitz → Aminosäuren (1953). Beweis: abiotische Entstehung organischer Moleküle.",
        "RNA-Welt: RNA als erstes Informations- und Katalysemolekül. Ribozyme = RNA-Enzyme.",
        "Endosymbiontentheorie (Margulis): Mitochondrien ← Alphaproteobakterien; Chloroplasten ← Cyanobakterien. Belege: eigenes Genom, 70S-Ribosomen, Doppelmembran.",
      ],
      klinischerBezug: "Die 70S-Ribosomen der Mitochondrien erklären die mitochondriale Toxizität mancher Antibiotika (z. B. Chloramphenicol hemmt 70S-Ribosomen von Bakterien UND Mitochondrien → aplastische Anämie als Nebenwirkung). Mutationen im mitochondrialen Genom (maternal vererbt) verursachen mitochondriale Erkrankungen wie das MELAS-Syndrom.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Nennen Sie drei Belege für die Endosymbiontentheorie (dass Mitochondrien aus Prokaryoten entstanden).",
        answer: "1. Eigenes ringförmiges DNA-Genom ohne Histone (wie Bakterien). 2. Eigene 70S-Ribosomen (wie Bakterien, nicht 80S wie eukaryotische Cytoplasma-Ribosomen). 3. Doppelmembran (innere Membran entspricht der ehemaligen Bakterienmembran, äußere dem phagozytischen Vesikel). 4. Vermehrung durch binäre Teilung unabhängig vom Zellzyklus. 5. Antibiotika hemmen mitochondriale Ribosomen (wie bei Bakterien). 6. Phylogenetische Ähnlichkeit zu Alphaproteobakterien.",
      },
      selfTest: [
        {
          question: "Was bewiesen Miller und Urey mit ihrem Experiment von 1953?",
          options: [
            "Dass das erste Leben aus dem Weltall auf die Erde kam (Panspermie)",
            "Dass organische Moleküle (z. B. Aminosäuren) unter abiotischen Bedingungen aus anorganischen Verbindungen entstehen können",
            "Dass RNA das erste Informationsmolekül war",
            "Dass eukaryotische Zellen durch Endosymbiose entstanden sind",
            "Dass die Erde anfangs sauerstoffreich war",
          ],
          correctIndex: 1,
          explanation: "Das Miller-Urey-Experiment zeigte, dass Aminosäuren und andere organische Moleküle spontan aus einfachen anorganischen Verbindungen (CH₄, NH₃, H₂, H₂O) unter Energiezufuhr (elektrische Entladungen) entstehen können. Dies belegt die Möglichkeit einer chemischen Evolution — der abiotischen Entstehung organischer Bausteine des Lebens auf der frühen Erde.",
          hints: [
            "Das Experiment simulierte Bedingungen der frühen Erde — welches Ergebnis war überraschend?",
            "Aminosäuren aus anorganischen Ausgangsstoffen — das war der Kern des Experiments.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum ist die RNA-Welt-Hypothese für die Erklärung des Ursprungs des Lebens wichtig?",
          options: [
            "Sie erklärt, wie das erste Wasser auf der Erde entstand",
            "Sie löst das Henne-Ei-Problem: RNA kann sowohl Informationen speichern als auch enzymatisch aktiv sein",
            "Sie belegt, dass DNA vor RNA entstanden ist",
            "Sie erklärt die Entstehung der ersten Zellmembranen",
            "Sie zeigt, dass Proteine die ersten Katalysatoren waren",
          ],
          correctIndex: 1,
          explanation: "Das Henne-Ei-Problem der Lebensentstehung: Proteine brauchen Nukleinsäuren für ihre Synthese, aber Nukleinsäuren brauchen Proteine (Enzyme) für ihre Replikation. Die RNA-Welt-Hypothese löst dies: RNA kann als Ribozym enzymatische Aktivität entfalten (Katalyse) UND genetische Information speichern. Eine RNA-Welt braucht daher anfangs keine Proteine.",
          hints: [
            "Was ist das besondere an Ribozymen? RNA als Enzym?",
            "Welches Paradoxon wird gelöst, wenn RNA sowohl Information speichern als auch Enzyme ersetzen kann?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches der folgenden Merkmale von Mitochondrien stützt die Endosymbiontentheorie am stärksten?",
          options: [
            "Mitochondrien befinden sich im Cytoplasma der Zelle",
            "Mitochondrien produzieren ATP durch oxidative Phosphorylierung",
            "Mitochondrien haben eigene 70S-Ribosomen und ein ringförmiges DNA-Genom",
            "Mitochondrien sind von einer Doppelmembran umgeben",
            "Mitochondrien sind in fast allen eukaryotischen Zellen vorhanden",
          ],
          correctIndex: 2,
          explanation: "Die eigenen 70S-Ribosomen (wie in Bakterien, nicht 80S wie im eukaryotischen Cytoplasma) und das eigene ringförmige Genom ohne Histone sind die stärksten Belege für den bakteriellen Ursprung der Mitochondrien. Diese Merkmale sind so fundamental verschieden vom Rest der eukaryotischen Zelle, dass sie nur durch einen prokaryotischen Vorläufer erklärt werden können.",
          hints: [
            "70S vs. 80S-Ribosomen — was haben 70S mit Bakterien gemein?",
            "Ein eigenes Genom bedeutet, dass Mitochondrien genetisch eigenständig sind — wie bei welchen Organismen sonst?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche zwei Organellen entstanden gemäß der Endosymbiontentheorie durch Endosymbiose prokaryotischer Vorläufer?",
          options: [
            "Zellkern und Ribosomen",
            "Golgi-Apparat und endoplasmatisches Retikulum",
            "Mitochondrien und Chloroplasten",
            "Lysosomen und Peroxisomen",
            "Zentriolen und Flagellen",
          ],
          correctIndex: 2,
          explanation: "Laut Endosymbiontentheorie entstanden Mitochondrien durch Aufnahme von Alphaproteobakterien und Chloroplasten durch Aufnahme von Cyanobakterien in eine Wirtszelle. Beide Organellen haben Merkmale, die auf ihren prokaryotischen Ursprung hinweisen: eigenes Genom, 70S-Ribosomen, Doppelmembran, binäre Teilung.",
          hints: [
            "Welche Organellen haben ein eigenes Genom? Das ist ein starker Hinweis auf endosymbiontischen Ursprung.",
            "Mitochondrien = Energiegewinnung; Chloroplasten = Photosynthese. Welche Bakterien betreiben Photosynthese?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Experiment lieferte den ersten Beweis für die abiotische Synthese organischer Moleküle?",
          options: [
            "Das Griffith-Experiment (Transformation von Bakterien, 1928)",
            "Das Hershey-Chase-Experiment (DNA ist Erbmaterial, 1952)",
            "Das Miller-Urey-Experiment (Aminosäurenbildung aus anorganischen Gasen, 1953)",
            "Das Meselson-Stahl-Experiment (semikonservative DNA-Replikation, 1958)",
            "Das Pasteur-Experiment (Widerlegung der Urzeugung, 1859)",
          ],
          correctIndex: 2,
          explanation: "Das Miller-Urey-Experiment (1953) zeigte erstmals, dass Aminosäuren und andere organische Moleküle aus einem Gemisch anorganischer Gase (CH₄, NH₃, H₂, H₂O) unter Energiezufurf (elektrische Entladungen) entstehen können. Dies legte die experimentelle Grundlage für die Theorie der chemischen Evolution.",
          hints: [
            "Miller und Urey simulierten die Bedingungen der frühen Erde — was entstand dabei überraschenderweise?",
            "Das Experiment widerlegte nicht die Urzeugung, sondern zeigte, wie organische Moleküle abiotisch entstehen können.",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-9-03',
      title: 'Phylogenetik — Stammbäume, Homologie und Analogie',
      content: `## Phylogenetik — Grundlagen

Die **Phylogenetik** rekonstruiert die Verwandtschaftsbeziehungen zwischen Organismen und deren Evolutionsgeschichte. Sie erstellt **phylogenetische Stammbäume** (Phylogramme/Kladogramme), die verzweigte Verwandtschaftsverhältnisse darstellen.

## Phylogenetische Stammbäume

Ein phylogenetischer Stammbaum zeigt: Äste = Evolutionslinien; Verzweigungspunkte (Nodes) = gemeinsame Vorfahren; Wurzel = gemeinsamer Ursprung aller dargestellten Taxa. **Kladogramme** zeigen nur Verwandtschaftsverhältnisse (Topologie); **Phylogramme** zeigen zusätzlich die Astlängen, die evolutionäre Distanz (z. B. Mutationsrate × Zeit) repräsentieren.

Clade: Gruppe aus einem gemeinsamen Vorfahren und ALLEN seinen Nachkommen (monophyletische Gruppe). Die moderne **Cladistik** klassifiziert Organismen ausschließlich nach gemeinsamen abgeleiteten Merkmalen (Synapomorphien).

## Homologe Strukturen

**Homologie** bezeichnet strukturelle Ähnlichkeiten, die auf gemeinsame Abstammung zurückgehen — unabhängig von der aktuellen Funktion.

Beispiel: Der **Vorderextremitäten-Vergleich** bei Wirbeltieren (Arm des Menschen, Flosse des Wals, Flügel des Vogels, Vorderbein des Pferdes) zeigt denselben Grundbauplan (Humerus, Radius, Ulna, Karpalknochen, Phalangen), obwohl die Funktionen unterschiedlich sind (Greifen, Schwimmen, Fliegen, Laufen). Dieser gemeinsame Bauplan erklärt sich durch gemeinsame Abstammung von einem Tetrapoden-Vorfahren.

## Analoge Strukturen (Konvergenz)

**Analogie** bezeichnet strukturelle oder funktionelle Ähnlichkeiten, die durch **konvergente Evolution** entstanden — unabhängige Entwicklung ähnlicher Lösungen auf ähnliche Umweltprobleme. Die Strukturen haben unterschiedlichen Ursprung (nicht homolog).

Beispiele:
- Flügel des Vogels (Wirbeltier, modifizierte Vorderextremität) vs. Flügel des Insekts (Ausstülpung des Exoskeletts) — beide zum Fliegen, aber strukturell völlig unterschiedlich
- Augen von Tintenfisch (Weichtier) und Mensch (Wirbeltier) — konvergente Evolution zum Linsenauge
- Stromlinienförmiger Körper bei Fischen (Wirbeltier), Delfinen (Säugetier) und Ichthyosauriern (Reptil)

## Molekulare Phylogenie

Durch Vergleich von DNA-Sequenzen (z. B. 16S-rRNA bei Bakterien, Cytochrom c, Histon H4) können präzisere Verwandtschaftsverhältnisse berechnet werden als durch morphologische Merkmale. **Molekulare Uhren** nutzen konstante Mutationsraten zur zeitlichen Kalibrierung von Stammbäumen.`,
      lernziele: [
        "Homologe von analogen Strukturen anhand von Beispielen unterscheiden",
        "Phylogenetische Stammbäume lesen und Verwandtschaftsbeziehungen ableiten",
        "Die Bedeutung molekularer Phylogenie für die Rekonstruktion von Evolutionsgeschichte erläutern",
      ],
      sections: [
        {
          heading: "Homologie vs. Analogie — Ein kritischer Unterschied",
          text: "Homologie und Analogie werden häufig verwechselt. Der entscheidende Unterschied liegt im Ursprung: Homologe Strukturen haben denselben evolutionären Ursprung (common ancestry) — sie sind strukturell oft ähnlich, obwohl die Funktion verschieden ist. Analoge Strukturen haben unterschiedliche evolutionäre Ursprünge — sie sind funktionell ähnlich (durch konvergente Evolution auf dasselbe Problem gestoßen), aber strukturell verschieden. Als Faustregel: Homologie → gemeinsame Herkunft, ähnlicher Bau; Analogie → unabhängige Entstehung, ähnliche Funktion. Ein besonders eindrucksvolles Analogiebeispiel ist das Linsenauge von Tintenfischen und Wirbeltieren: Beide haben unabhängig ein optisches System mit Linse, Retina und Iris entwickelt — aber die Photorezeptoren zeigen grundlegend verschiedene Struktur und Entwicklung.",
          merksatz: "Homologie = gleicher Ursprung, verschiedene Funktion (Vogelflügel und Menschenarm). Analogie = verschiedener Ursprung, gleiche Funktion (Vogelflügel und Insektenflügel).",
        },
        {
          heading: "Molekulare Uhr — Evolution zeitlich datieren",
          text: "Die Idee der molekularen Uhr basiert auf der Beobachtung, dass neutrale Mutationen in bestimmten Genen mit einer nahezu konstanten Rate akkumulieren. Je mehr Sequenzunterschiede zwischen zwei Arten, desto weiter sind ihre Abstammungslinien auseinander gelaufen (desto länger ist der gemeinsame Vorfahre her). Durch Kalibrierung mit datierten Fossilien können absolute Zeitpunkte berechnet werden. Beispiel: Der molekulare Vergleich von Cytochrom c zwischen Mensch und Schimpanse zeigt sehr wenige Unterschiede (beide divergierten vor ca. 6–7 Millionen Jahren). Molekulare Uhren haben Diskrepanzen zu fossilen Befunden aufgedeckt (z. B. die frühere Trennung von Wirbeltier-Klassen als bisher angenommen). Probleme: Mutationsraten sind nicht immer konstant (Generation Time Effect, unterschiedliche Selektionsdrücke).",
          merksatz: "Molekulare Uhr: neutrale Mutationen akkumulieren konstant → Sequenzunterschiede proportional zu Zeit seit Divergenz. Kalibrierung mit Fossilien.",
        },
      ],
      merksätze: [
        "Homologe Strukturen: gleicher evolutionärer Ursprung, verschiedene Funktion (Wirbeltier-Vorderextremitäten).",
        "Analoge Strukturen: konvergente Evolution, verschiedener Ursprung, gleiche Funktion (Flügel von Vogel und Insekt).",
        "Cladistik: Klassifikation nach Synapomorphien (gemeinsamen abgeleiteten Merkmalen). Monophyletisch = gemeinsamer Vorfahre + alle Nachkommen.",
      ],
      klinischerBezug: "Molekulare Phylogenie ist in der Infektionsmedizin essenziell: Phylogenetische Analysen von Virussequenzen (z. B. HIV, SARS-CoV-2) rekonstruieren Ausbreitungswege von Epidemien (Genomic Epidemiology) und identifizieren Ursprungsorte von Pandemien. Bei SARS-CoV-2 konnte die phylogenetische Analyse zeigen, dass das Virus einmalig in Menschen eingetreten ist und sich danach weltweit verbreitet hat.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen homologen und analogen Strukturen und nennen Sie je ein Beispiel.",
        answer: "Homologe Strukturen sind auf gemeinsame Abstammung zurückzuführen — sie haben denselben evolutionären Ursprung und oft einen ähnlichen Grundbauplan, obwohl die Funktion verschieden sein kann. Beispiel: Arm des Menschen und Vorderflosse des Wals (beide haben Humerus, Radius, Ulna — gemeinsamer Vorfahre). Analoge Strukturen entstanden durch konvergente Evolution unabhängig voneinander als Anpassung an ähnliche Umweltbedingungen — sie haben verschiedenen Ursprung, erfüllen aber dieselbe Funktion. Beispiel: Flügel des Vogels (modifizierter Knochenarm) und Flügel des Insekts (Exoskelett-Ausstülpung).",
      },
      selfTest: [
        {
          question: "Der Arm des Menschen, die Flosse des Wals und der Flügel des Vogels sind strukturell ähnlich (Humerus, Radius, Ulna). Wie bezeichnet man dieses Verhältnis?",
          options: [
            "Analoge Strukturen (konvergente Evolution)",
            "Konvergente Merkmale ohne gemeinsamen Ursprung",
            "Homologe Strukturen (gemeinsame Abstammung)",
            "Rudimentäre Strukturen ohne Funktion",
            "Atavismen (Rückschlag zu ursprünglicheren Merkmalen)",
          ],
          correctIndex: 2,
          explanation: "Arm, Flosse und Flügel sind homologe Strukturen — sie teilen denselben Grundbauplan (Humerus, Radius, Ulna, Karpalknochen, Phalangen) aufgrund gemeinsamer Abstammung von einem Tetrapoden-Vorfahren. Obwohl die Funktionen verschieden sind (Greifen, Schwimmen, Fliegen), belegt der identische Bauplan die gemeinsame Evolutionsgeschichte.",
          hints: [
            "Gleicher Bauplan trotz verschiedener Funktion — welches Konzept beschreibt das?",
            "Homolog = gleicher Ursprung; analog = gleiche Funktion, unterschiedlicher Ursprung.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Vogelflügel und Insektenflügel sind beides Flugorgane. Warum sind sie analog, nicht homolog?",
          options: [
            "Weil sie beide aus demselben genetischen Grundbauplan entstanden",
            "Weil sie keine funktionelle Ähnlichkeit haben",
            "Weil sie unabhängig in verschiedenen Abstammungslinien entstanden und strukturell grundlegend verschieden sind",
            "Weil Vogelflügel aus Federn bestehen und Insektenflügel nicht",
            "Weil Vögel und Insekten beide zu den Arthropoden gehören",
          ],
          correctIndex: 2,
          explanation: "Vogelflügel sind modifizierte Vorderextremitäten (Knochen: Humerus, Radius, Ulna, modifizierte Karpalknochen). Insektenflügel sind Ausstülpungen des Exoskeletts und haben keinen knöchernen Grundbauplan. Beide entstanden unabhängig voneinander in verschiedenen evolutionären Abstammungslinien (Wirbeltiere vs. Arthropoden) als Lösung für dasselbe Problem (Fliegen) — das ist konvergente Evolution und führt zu analogen, nicht homologen Strukturen.",
          hints: [
            "Analoge Strukturen lösen dasselbe Problem, entstehen aber unabhängig in verschiedenen Abstammungslinien.",
            "Was ist der strukturelle Aufbau eines Vogelflügels? Und was der eines Insektenflügels?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist ein 'Clade' in der Cladistik?",
          options: [
            "Eine Art, die ausgestorben ist",
            "Eine Gruppe von Organismen ohne gemeinsamen Vorfahren",
            "Eine monophyletische Gruppe: ein gemeinsamer Vorfahre und ALLE seine Nachkommen",
            "Zwei Arten, die eine konvergente Merkmal teilen",
            "Ein Ast in einem phylogenetischen Stammbaum ohne Verzweigung",
          ],
          correctIndex: 2,
          explanation: "Ein Clade (Klade) ist eine monophyletische Gruppe, die aus einem gemeinsamen Vorfahren und ALLEN seinen Nachkommen besteht. Die Cladistik klassifiziert Organismen ausschließlich nach Claden — polyphyletische (verschiedene Vorfahren) und paraphyletische (gemeinsamer Vorfahre, aber nicht alle Nachkommen) Gruppen werden abgelehnt. Beispiel: 'Reptilien' ohne Vögel ist eine paraphyletische Gruppe — Vögel sind evolutionäre Nachkommen der Dinosaurier und gehören daher zum 'Reptilien'-Clade.",
          hints: [
            "Clade = monophyletisch = ein Vorfahre + ALLE Nachkommen (kein Ausschluss).",
            "Die Cladistik lehnt paraphyletische Gruppen ab — was ist das Problem mit 'Reptilien' ohne Vögel?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was misst die 'Molekulare Uhr' in der Phylogenetik?",
          options: [
            "Die Geburtenrate einer Art über geologische Zeiträume",
            "Die Akkumulation neutraler Mutationen über Zeit zur Datierung von Divergenzereignissen",
            "Die Körpergröße von Organismen im Verhältnis zur Evolutionsgeschwindigkeit",
            "Die Anzahl der Fossilfunde pro Million Jahre",
            "Den Zeitpunkt, zu dem die ersten Zellen auf der Erde entstanden",
          ],
          correctIndex: 1,
          explanation: "Die molekulare Uhr basiert auf der Idee, dass neutrale Mutationen in bestimmten Genen mit einer nahezu konstanten Rate akkumulieren. Durch Vergleich der Sequenzunterschiede zwischen zwei Arten und Kalibrierung mit datierten Fossilien kann der Zeitpunkt der Divergenz abgeschätzt werden: Je mehr Sequenzunterschiede, desto länger liegt der gemeinsame Vorfahre zurück.",
          hints: [
            "Eine 'Uhr' misst Zeit — welche molekulare Eigenschaft dient als Zeitmaß?",
            "Neutrale Mutationen akkumulieren ohne Selektionsdruck — wie hängt das mit vergangener Zeit zusammen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Sequenz wird häufig für phylogenetische Analysen von Bakterien verwendet und warum?",
          options: [
            "Die Sequenz des Insulingens — weil es in allen Lebewesen vorkommt",
            "Die 16S-rRNA-Sequenz — weil sie hochkonserviert ist, aber genug Variabilität für Verwandtschaftsanalysen zeigt",
            "Die Sequenz des Histon H1-Gens — weil Histone nur in Eukaryoten vorkommen",
            "Die mitochondriale DNA — weil sie schnell mutiert",
            "Die Telomersequenz — weil sie in allen Zellen identisch ist",
          ],
          correctIndex: 1,
          explanation: "Die 16S-rRNA ist das Standardmolekül für bakterielle Phylogenetik: Sie ist in allen Bakterien vorhanden (universell), ihr Grundbauplan ist stark konserviert (Funktion im Ribosom muss erhalten bleiben), hat aber genug variable Regionen, um Verwandtschaftsgrade zu unterscheiden. Carl Woese nutzte 16S-rRNA-Vergleiche zur Entdeckung der Archaea als drittes Domäne des Lebens.",
          hints: [
            "Ein Marker für Phylogenie muss universal und hochkonserviert, aber doch variabel genug sein.",
            "Carl Woese entdeckte mit diesem Molekül die Archaea als eigenständige Domäne.",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-9-04',
      title: 'Evolutionstheorie — Darwin, Selektion und Synthetische Theorie',
      content: `## Charles Darwin und die Evolutionstheorie

Charles Darwin und Alfred Russel Wallace entwickelten unabhängig voneinander die Theorie der **natürlichen Selektion** (1858/1859, "On the Origin of Species"). Darwins Beobachtungen auf den Galapagos-Inseln (Finken mit verschiedenen Schnabelformen, je nach Nahrungsquelle) lieferten anschauliche Belege.

## Darwins vier Kernprinzipien

1. **Variation:** Innerhalb einer Population gibt es natürliche, erbliche Variation zwischen Individuen
2. **Erblichkeit:** Merkmale werden von Eltern auf Nachkommen vererbt
3. **Überproduktion:** Mehr Individuen werden geboren als überleben können (Malthus'sche Beobachtung)
4. **Differential-Reproduktion (Fitness):** Individuen mit vorteilhaften Merkmalen überleben und reproduzieren sich häufiger → natürliche Selektion

Darwin kannte die genetischen Grundlagen der Variation nicht — das war ein grundlegender Mangel, der erst durch die Synthese mit der Genetik behoben wurde.

## Selektionsarten

**Stabilisierende Selektion:** Extremwerte werden selektiert gegen, der Mittelwert bleibt erhalten. Beispiel: Geburtsgewicht beim Menschen — zu leichte und zu schwere Babys haben erhöhte Sterblichkeit.

**Gerichtete Selektion:** Verschiebt den Mittelwert in eine Richtung. Beispiel: Antibiotikaresistenz bei Bakterien — nur resistente Varianten überleben, resistente Allele häufen sich an.

**Disruptive Selektion:** Bevorzugt beide Extreme, der Mittelwert wird selektiert gegen. Kann zur sympatrischen Artbildung führen. Beispiel: Schnabelgröße bei Darwinfinken auf Nahrungsopposition.

## Sexuelle Selektion

**Sexuelle Selektion** (Darwin, 1871) ist eine Form natürlicher Selektion durch Konkurrenz um Paarungspartner. Zwei Formen:
- **Intrasexuelle Selektion:** Konkurrenz zwischen Individuen desselben Geschlechts (z. B. Hirschkämpfe)
- **Intersexuelle Selektion:** Wahl durch das andere Geschlecht (z. B. Pfauenfedern — Weibchenwahl)

Sexuelle Selektion erklärt **sexuellen Dimorphismus** (Unterschiede zwischen Männchen und Weibchen).

## Synthetische Evolutionstheorie (Neue Synthese)

Die **Synthetische Evolutionstheorie** (1930–1950er, Fisher, Dobzhansky, Mayr, Simpson) integriert Darwins Selektionstheorie mit der Mendelschen Genetik, der Populationsgenetik (Hardy-Weinberg, Allelhäufigkeiten) und der Paläontologie. Sie definiert Evolution als **Veränderung der Allelhäufigkeiten in einer Population über Zeit**. Evolutionäre Faktoren: Mutation (Rohstoff), Selektion (Richtung), Gendrift (Zufall), Genfluss (Migration).`,
      lernziele: [
        "Darwins vier Kernprinzipien der natürlichen Selektion nennen und erläutern",
        "Die drei Selektionsarten (stabilisierend, gerichtet, disruptiv) unterscheiden und mit Beispielen belegen",
        "Die Synthetische Evolutionstheorie und ihre Integration von Genetik und Darwinismus beschreiben",
      ],
      sections: [
        {
          heading: "Fitness — Was bedeutet 'Überleben des Tüchtigsten'?",
          text: "Der Begriff 'Survival of the Fittest' (Spencer, nicht Darwin) wird oft missverstanden. In der Evolutionsbiologie bedeutet Fitness nicht physische Stärke, sondern **reproduktive Fitness**: die Fähigkeit eines Individuums, überlebensfähige, fertile Nachkommen zu erzeugen. Ein schwächliches, aber besonders fertiles Individuum hat höhere Fitness als ein starkes, nicht-reproduktives Individuum. Inklusive Fitness (Hamilton) erweitert das Konzept: Indirekte Fitness durch Verwandtenunterstützung (Altruismus gegenüber genetisch verwandten Individuen). Beispiel: Eine Biene, die zugunsten der Königin auf eigene Reproduktion verzichtet, aber die gemeinsamen Gene durch die Königin weitervererbt (kin selection). Fitness ist immer relativ zur aktuellen Umwelt — was heute vorteilhaft ist, kann in veränderter Umwelt neutral oder nachteilig sein.",
          merksatz: "Fitness = reproduktive Erfolg (nicht Kraft). Inklusive Fitness = eigene + indirekte Reproduktion durch Verwandte (Kin Selection).",
        },
        {
          heading: "Synthetische Evolutionstheorie — Integration der Erkenntnisse",
          text: "Darwin kannte Mendels Arbeit nicht (obwohl sie 1866 veröffentlicht wurde). Die Neue Synthese der 1930–1950er Jahre integrierte beide: Mutationen im Mendelschen Sinne liefern die genetische Variation, auf der natürliche Selektion wirkt. R.A. Fisher (The Genetical Theory of Natural Selection, 1930) zeigte mathematisch, dass Darwinismus und Mendelsche Genetik kompatibel sind. Theodosius Dobzhansky ('Genetics and the Origin of Species', 1937) verknüpfte Populationsgenetik mit Evolutionsbiologie. Ernst Mayr definierte den biologischen Artbegriff und analysierte Artbildungsmechanismen. Das Ergebnis: Die Synthetische Evolutionstheorie definiert Evolution als Veränderung der Allelfrequenzen in einer Population — eine präzise, quantifizierbare Definition.",
          merksatz: "Neue Synthese = Darwin (Selektion) + Mendel (Genetik) + Populationsgenetik. Evolution = Veränderung der Allelfrequenzen in Populationen über Zeit.",
        },
      ],
      merksätze: [
        "Darwin: Variation + Erblichkeit + Überproduktion + Differentialreproduktion → natürliche Selektion.",
        "Selektionsarten: stabilisierend (Mittelwert bleibt) | gerichtet (Mittelwert verschiebt sich) | disruptiv (Extreme bevorzugt).",
        "Synthetische Theorie: Evolution = Veränderung der Allelfrequenzen. Faktoren: Mutation, Selektion, Gendrift, Genfluss.",
      ],
      klinischerBezug: "Gerichtete Selektion ist in der Medizin hoch relevant: Antibiotika-Einsatz selektiert resistente Bakterienstämme (MRSA, multiresistente Tuberkulose). Das Verständnis der Selektionsdynamik ist essenziell für die Entwicklung von Resistenz-Präventionsstrategien (Antibiotic Stewardship, Therapierotation).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was versteht Darwin unter 'natürlicher Selektion'? Erläutern Sie die vier Voraussetzungen.",
        answer: "Natürliche Selektion setzt vier Bedingungen voraus: (1) Variation: Individuen einer Population unterscheiden sich in vererbbaren Merkmalen. (2) Erblichkeit: Diese Merkmale werden an Nachkommen weitergegeben. (3) Überproduktion: Es werden mehr Individuen geboren als die Umwelt tragen kann (Kampf ums Dasein). (4) Differential-Reproduktion: Individuen mit vorteilhaften Merkmalen überleben und reproduzieren sich häufiger. Das Ergebnis: Vorteilhafte Merkmale nehmen in der Population über Generationen zu — die Population verändert sich (Evolution).",
      },
      selfTest: [
        {
          question: "Welche Selektionsform ist zu erwarten, wenn in einer Population zwei verschiedene Nahrungsquellen verfügbar sind und Individuen mit extremen Merkmalswerten (z. B. sehr großer oder sehr kleiner Schnabel) bevorzugt werden?",
          options: [
            "Stabilisierende Selektion",
            "Gerichtete Selektion",
            "Disruptive Selektion",
            "Sexuelle Selektion",
            "Balancierte Selektion",
          ],
          correctIndex: 2,
          explanation: "Disruptive Selektion bevorzugt beide Extreme des Merkmalsspektrums und selektiert gegen den Mittelwert. Wenn zwei verschiedene Nahrungsquellen vorhanden sind (z. B. harte Samen und weiche Insekten), sind Individuen mit sehr großem Schnabel (hart) und sehr kleinem Schnabel (weich) am vorteilhaftesten, während Individuen mit mittlerem Schnabel weder das eine noch das andere gut können. Disruptive Selektion kann zur sympatrischen Artbildung führen.",
          hints: [
            "Wenn zwei verschiedene Nischen besetzt werden, welche Merkmale werden bevorzugt — die mittleren oder die Extreme?",
            "Disruptiv = auseinanderreißend. Welche Selektionsform teilt eine Population auf?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was bedeutet 'Fitness' in der Evolutionsbiologie?",
          options: [
            "Die physische Stärke und Ausdauer eines Individuums",
            "Die Körpergröße eines Individuums im Vergleich zum Durchschnitt",
            "Der reproduktive Erfolg eines Individuums — die Fähigkeit, überlebensfähige Nachkommen zu erzeugen",
            "Die Geschwindigkeit, mit der ein Individuum mutiert",
            "Die Immunstärke eines Organismus gegenüber Pathogenen",
          ],
          correctIndex: 2,
          explanation: "In der Evolutionsbiologie bezeichnet Fitness den relativen reproduktiven Erfolg — wie viele überlebensfähige, fertile Nachkommen ein Individuum im Vergleich zu anderen Individuen der Population erzeugt. Ein Individuum mit hoher Fitness muss nicht physisch stark sein, sondern muss mehr Nachkommen hinterlassen, die selbst wieder Nachkommen erzeugen. Fitness ist immer relativ und umweltabhängig.",
          hints: [
            "Evolution durch natürliche Selektion misst Erfolg durch Reproduktion, nicht durch Überleben allein.",
            "'Survival of the Fittest' bedeutet 'Überleben des Fortpflanzungsfähigsten', nicht des Stärksten.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was integriert die Synthetische Evolutionstheorie (Neue Synthese)?",
          options: [
            "Darwins Selektionstheorie und die Epigenetik",
            "Darwins Selektionstheorie, die Mendelsche Genetik und die Populationsgenetik",
            "Lamarckismus und Darwinismus",
            "Panspermie-Theorie und die RNA-Welt-Hypothese",
            "Endosymbiontentheorie und Cladistik",
          ],
          correctIndex: 1,
          explanation: "Die Synthetische Evolutionstheorie (1930–1950er) verbindet Darwins Theorie der natürlichen Selektion mit der Mendelschen Genetik (erbliche Variation durch Allele) und der Populationsgenetik (Allelfrequenzveränderungen, Hardy-Weinberg). Diese Integration definiert Evolution präzise als Veränderung der Allelfrequenzen in Populationen und erklärt die genetischen Grundlagen von Variation und Selektion.",
          hints: [
            "Darwin kannte Mendels Genetik nicht — was hat die Neue Synthese hinzugefügt?",
            "Evolution = Veränderung der Allelfrequenzen — welche Disziplin untersucht Allelfrequenzen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Beim menschlichen Geburtsgewicht ist bekannt, dass sehr leichte und sehr schwere Babys höhere Sterblichkeit haben, Babys mit mittlerem Gewicht am besten überleben. Welche Selektionsform ist das?",
          options: [
            "Gerichtete Selektion",
            "Disruptive Selektion",
            "Stabilisierende Selektion",
            "Sexuelle Selektion",
            "Künstliche Selektion",
          ],
          correctIndex: 2,
          explanation: "Stabilisierende Selektion bevorzugt den Mittelwert des Merkmalsspektrums und selektiert gegen beide Extreme. Beim Geburtsgewicht überleben Babys mit durchschnittlichem Gewicht am besten — zu leichte Babys haben unentwickelte Organe, zu schwere Babys können zu Geburtskomplikationen führen. Die Folge: Das durchschnittliche Geburtsgewicht bleibt über Generationen relativ konstant.",
          hints: [
            "Stabilisierend = der Mittelwert wird bevorzugt, Extreme werden benachteiligt.",
            "Was passiert mit der Varianz des Merkmals unter stabilisierender Selektion — nimmt sie zu oder ab?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen intrasexueller und intersexueller Selektion?",
          options: [
            "Intrasexuelle Selektion betrifft nur Männchen; intersexuelle nur Weibchen",
            "Intrasexuelle Selektion = Konkurrenz zwischen Individuen desselben Geschlechts; intersexuelle = Wahl durch das andere Geschlecht",
            "Intrasexuelle Selektion führt zu sexuellem Dimorphismus; intersexuelle nicht",
            "Intrasexuelle Selektion ist eine Form der natürlichen Selektion; intersexuelle ist davon getrennt",
            "Es gibt keinen bedeutenden Unterschied zwischen beiden Formen",
          ],
          correctIndex: 1,
          explanation: "Intrasexuelle Selektion bezeichnet die Konkurrenz zwischen Individuen desselben Geschlechts um Paarungsmöglichkeiten (z. B. Kampf zwischen Hirschmännchen um Weibchen — der Sieger paart sich). Intersexuelle Selektion bezeichnet die Wahl eines Paarungspartners durch das andere Geschlecht (z. B. Pfauenweibchen wählen Männchen mit besonders auffälligem Schwanzgefieder). Beide Formen können zu sexuellem Dimorphismus führen.",
          hints: [
            "Intra = innerhalb (derselben Gruppe); inter = zwischen (verschiedenen Gruppen).",
            "Pfauenfedern: Weibchen wählen aus — ist das Konkurrenz unter Männchen oder Wahl durch Weibchen?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-9-05',
      title: 'Artbegriff und Artbildung — Isolationsmechanismen',
      content: `## Biologischer Artbegriff

Ernst Mayr (1942) definierte den **biologischen Artbegriff**: Eine Art ist eine Gruppe von Populationen, deren Mitglieder sich in der Natur tatsächlich oder potenziell miteinander fortpflanzen und von anderen solchen Gruppen reproduktiv isoliert sind.

Stärken: Klar operationalisierbar. Schwächen: Gilt nicht für asexuelle Organismen (Bakterien, Parthenogeneten), Fossilien und allopatrische Populationen ohne Kontakt.

Alternative Artkonzepte: Phylogenetischer Artbegriff (kleinste monophyletische Einheit), morphologischer Artbegriff (traditionell, Phänotyp), ökologischer Artbegriff (ökologische Nische).

## Präzygotische Isolationsmechanismen

Präzygotische Mechanismen verhindern die Bildung einer Zygote:
- **Geografische Isolation** (allopatrisch): räumliche Trennung verhindert Begegnung
- **Ökologische Isolation:** verschiedene Habitate, keine Begegnung
- **Zeitliche/saisonale Isolation:** verschiedene Paarungszeiten oder Blütezeiten
- **Verhaltensisolation:** verschiedene Balzrituale, keine Anlockung
- **Mechanische Isolation:** morphologische Inkompatibilität der Fortpflanzungsorgane oder Blütenstrukturen

## Postzygotische Isolationsmechanismen

Postzygotische Mechanismen treten nach Befruchtung auf:
- **Hybridsterilität:** Hybriden sind lebensfähig, aber steril (z. B. Maultier = Pferd × Esel)
- **Hybridlethalität:** Hybriden sterben frühzeitig ab
- **Hybridvitalitätsschwäche:** Hybriden sind zwar lebensfähig und fertil, aber weniger gut adaptiert

## Allopatrische Artbildung

**Allopatrische Artbildung** (häufigste Form): Eine geografische Barriere (Gebirge, Ozean, Gletschervorstoß) trennt eine Population. Die Teilpopulationen entwickeln sich unabhängig durch Mutation, Selektion und Gendrift auseinander. Nach Wiedervereinigung können sie sich nicht mehr fortpflanzen → neue Arten.

Beispiel: Finken auf den Galapagos-Inseln entstanden durch allopatrische Artbildung (jede Insel, unterschiedliche Selektion).

## Sympatrische Artbildung

**Sympatrische Artbildung** erfolgt ohne geografische Isolation im selben Gebiet. Mechanismus bei Pflanzen häufig: **Polyploidie** (Verdoppelung des Chromosomensatzes durch Meiose-Fehler). Allopolyploide Hybriden sind steril mit dem Ausgangselternarten, können sich aber untereinander fortpflanzen → neue Art in einer Generation.

Beispiel: Weizen (*Triticum aestivum*, hexaploid 6n=42) durch Kreuzung dreier diploider Vorläuferarten.`,
      lernziele: [
        "Den biologischen Artbegriff (Mayr) definieren und seine Grenzen benennen",
        "Präzygotische von postzygotischen Isolationsmechanismen unterscheiden und Beispiele nennen",
        "Allopatrische von sympatrischer Artbildung unterscheiden und je ein Beispiel nennen",
      ],
      sections: [
        {
          heading: "Allopatrische Artbildung — Schritt für Schritt",
          text: "Allopatrische Artbildung verläuft in typischen Schritten: (1) Ausgangs-Population ist genetisch durchmischt. (2) Eine geografische Barriere (Fluss, Gebirge, Gletschervorstoß, Meereseinbruch) teilt die Population. (3) Beide Teilpopulationen akkumulieren unabhängig Mutationen, unterliegen verschiedenen Selektionsdrücken und erleben Gendrift (v. a. in kleinen Gründerpopulationen). (4) Divergenz der Genotypen und Phänotypen über viele Generationen. (5) Bei Wiedervereinigung (Abbau der Barriere): Test auf Reproduktionsisolation. Wenn vollständige Isolation besteht → zwei Arten. Wenn noch Hybridisierung möglich → Sekundärzone, möglicherweise vollständige Isolation durch Auslese gegen Hybriden (Verstärkung). Die Darwin-Finken auf den Galapagos-Inseln (13–15 Arten aus einer Gründerpopulation) sind das klassische Beispiel für adaptive Radiation (rasche allopatrische Artbildung in verschiedene ökologische Nischen).",
          merksatz: "Allopatrische Artbildung: geografische Barriere → Isolation → unabhängige Divergenz → Reproduktionsisolation → neue Arten.",
        },
        {
          heading: "Polyploidie — Sympatrische Artbildung in einer Generation",
          text: "Polyploidie ist der wichtigste Mechanismus sympatrischer Artbildung, besonders bei Pflanzen. Wenn die Meiose fehlerhaft verläuft, können diploide Gameten entstehen (statt haploider). Vereinigung zweier diploider Gameten → tetraploider Organismus (Autopolyploidie). Dieser kann sich nicht mehr mit den Ausgangsdiploiden fortpflanzen (Hybride sind triploid und steril), aber tetraploide Individuen können sich untereinander fortpflanzen → neue Art. Allopolyploidie: Ein interspezifischer Hybrid (steril) verdoppelt seinen Chromosomensatz → jedes Chromosom hat ein Homologes → fertil. Beispiele: Weizen (Triticum aestivum, 6n=42 aus drei diploiden Vorfahren), Raps (Brassica napus, aus Kohl und Rübsen). Beim Menschen führt Polyploidie zum Tod (Ausnahme: einzelne Gewebe).",
          merksatz: "Polyploidie: Chromosomensatzverdoppelung → Reproduktionsisolation vom Ausgangsorganismus → sympatrische Artbildung in einer Generation.",
        },
      ],
      merksätze: [
        "Biologischer Artbegriff (Mayr): Populationen, die sich untereinander fortpflanzen und von anderen reproduktiv isoliert sind.",
        "Präzygotisch: Isolation vor Befruchtung (geografisch, zeitlich, Verhalten). Postzygotisch: nach Befruchtung (Hybridsterilität, -lethalität).",
        "Allopatrisch = geografische Isolation; sympatrisch = keine geografische Isolation (z. B. Polyploidie bei Pflanzen).",
      ],
      klinischerBezug: "Polyploidie ist in der Humanmedizin teratogen: Triploide (3n=69) und tetraploide Embryonen sind nicht lebensfähig und führen zu Frühaborten. In der Krebsbiologie sind viele Tumorzellen aneuplooid oder polyplooid — Chromosomeninstabilität ist ein Hallmark of Cancer.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was unterscheidet allopatrische von sympatrischer Artbildung?",
        answer: "Allopatrische Artbildung erfolgt durch geografische Trennung einer Population durch eine Barriere (Gebirge, Ozean). Die getrennten Populationen divergieren durch Mutation, Selektion und Gendrift, bis sie reproduktiv isoliert sind. Sympatrische Artbildung erfolgt im selben geografischen Gebiet ohne physische Trennung. Bei Pflanzen ist Polyploidie der häufigste Mechanismus: Ein polyploider Organismus kann sich nicht mehr mit den Elterndiploiden fortpflanzen, wohl aber mit anderen Polyploiden derselben Art — eine neue Art entsteht in einer Generation.",
      },
      selfTest: [
        {
          question: "Ein Maultier (Hybrid aus Pferd und Esel) ist lebensfähig, aber steril. Welcher Isolationsmechanismus liegt vor?",
          options: [
            "Präzygotische Isolation durch geografische Trennung",
            "Präzygotische Isolation durch Verhaltensinkompatibilität",
            "Postzygotische Isolation durch Hybridsterilität",
            "Postzygotische Isolation durch Hybridlethalität",
            "Präzygotische Isolation durch mechanische Inkompatibilität",
          ],
          correctIndex: 2,
          explanation: "Das Maultier (Hybrid aus Pferde-Stute × Esel-Hengst) ist lebensfähig und phänotypisch gesund, aber unfruchtbar (steril). Dies ist ein klassisches Beispiel für postzygotische Isolation durch Hybridsterilität: Die Zygote und der Hybrid entstehen normal (präzygotische Barrieren versagen), aber der Hybrid kann keine Gameten bilden. Ursache: Pferd hat 64 Chromosomen, Esel 62 — im Hybriden können die Chromosomen in der Meiose nicht normal paaren.",
          hints: [
            "Post-zygotisch = nach der Befruchtung. Das Maultier ist ja bereits geboren.",
            "Steril = kann keine Nachkommen erzeugen. Ist das Maultier lebensfähig? Ja. Kann es sich fortpflanzen? Nein.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Der biologische Artbegriff von Mayr hat Grenzen. Für welche Organismen ist er am wenigsten geeignet?",
          options: [
            "Für sexuell reproduzierende Vögel",
            "Für Säugetiere mit bekannten Kreuzungsbarrieren",
            "Für asexuell reproduzierende Organismen (z. B. Bakterien) und Fossilien",
            "Für Insekten mit territorialem Verhalten",
            "Für Meeresorganismen mit großen Verbreitungsgebieten",
          ],
          correctIndex: 2,
          explanation: "Der biologische Artbegriff basiert auf sexueller Reproduktion und reproduktiver Isolation. Für asexuell reproduzierende Organismen (Bakterien, viele Protisten, parthenogenetische Tiere) ist er nicht anwendbar, da diese sich nicht sexuell fortpflanzen. Für Fossilien ist er ebenfalls nicht anwendbar, da man das Fortpflanzungsverhalten ausgestorbener Organismen nicht direkt beobachten kann.",
          hints: [
            "Wenn eine Art sich nicht sexuell fortpflanzt, gibt es keine 'reproduktive Isolation' — was fehlt dem Konzept dann?",
            "Fossilien können keine Kreuzungsexperimente durchführen — wie soll man ihre Artgrenzen bestimmen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Auf einer Insel wurden zwei verwandte Vogelarten gefunden, die sich nicht miteinander fortpflanzen. Beide sind von einer einzigen Population auf dem Festland abgeleitet, die durch eine glaziale Periode getrennt wurde. Welcher Artbildungsmechanismus liegt vor?",
          options: [
            "Sympatrische Artbildung durch Polyploidie",
            "Sympatrische Artbildung durch Habitattrennung",
            "Allopatrische Artbildung durch geografische Isolation",
            "Parapatrische Artbildung in einer Kontaktzone",
            "Instantane Artbildung durch Chromosomenmutation",
          ],
          correctIndex: 2,
          explanation: "Die Beschreibung passt zur allopatrischen Artbildung: Eine ursprünglich einheitliche Population wurde durch eine geografische Barriere (glaziale Periode → Gletschervorstoß oder Meereseinbruch) getrennt. Beide Teilpopulationen divergierten unabhängig voneinander, bis sie reproduktiv isoliert waren. Nach dem Ende der glazialen Periode kamen die Nachkommen wieder in Kontakt, konnten sich aber nicht mehr miteinander fortpflanzen.",
          hints: [
            "Die geografische Trennung (glaziale Periode) ist das Schlüsselmerkmal — welches Artbildungsmodell setzt eine solche Trennung voraus?",
            "Allopatrisch = verschiedene Orte (allos = verschieden, patria = Heimat).",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Weizen (Triticum aestivum) ist hexaploid (6n = 42) und entstand aus drei diploiden Vorfahrenarten. Welcher Artbildungsmechanismus war beteiligt?",
          options: [
            "Allopatrische Artbildung durch geografische Isolation",
            "Stabilisierende Selektion auf die Chromosomenzahl",
            "Allopolyploidie (Hybridisierung + Chromosomensatzverdoppelung)",
            "Gendrift in einer kleinen Gründerpopulation",
            "Disruptive Selektion auf verschiedene Nahrungsquellen",
          ],
          correctIndex: 2,
          explanation: "Die Entstehung von hexaploidem Weizen ist ein klassisches Beispiel für Allopolyploidie: Drei verschiedene diploide Vorfahrenarten (je 2n=14) kreuzten sich. Die Hybriden waren zunächst steril (keine homologen Chromosomenpaare für die Meiose). Durch zufällige Verdoppelungen des Chromosomensatzes (Allopolyploidie) entstanden fertile Pflanzen mit je zwei Kopien jedes Genoms (6n=42). Diese können sich nicht mehr mit den Ausgangsarten kreuzen — eine neue Art in wenigen Generationen.",
          hints: [
            "Hexaploid = 6 Chromosomensätze. Wenn drei diploide Arten sich vereinigen und die Chromosomen verdoppeln, wie viele Sätze entstehen?",
            "Polyploidie bei Pflanzen ist der wichtigste Mechanismus der sympatrischen Artbildung.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welche Aussage über präzygotische Isolationsmechanismen ist korrekt?",
          options: [
            "Sie treten nach der Befruchtung auf und verhindern die Entwicklung des Hybriden",
            "Sie verhindern die Bildung einer Zygote und reduzieren damit den Energieaufwand für erfolglose Kreuzungsversuche",
            "Sie betreffen ausschließlich geografische Trennung",
            "Sie führen immer zur vollständigen genetischen Isolation innerhalb einer Generation",
            "Sie treten nur bei pflanzlichen Organismen auf",
          ],
          correctIndex: 1,
          explanation: "Präzygotische Isolationsmechanismen verhindern die Bildung einer Zygote — sie wirken vor der Befruchtung. Dies ist energetisch effizienter als postzygotische Mechanismen, bei denen bereits Ressourcen in Paarung und Befruchtung investiert wurden. Präzygotische Mechanismen umfassen: geografische Isolation, ökologische Isolation, zeitliche Isolation, Verhaltensisolation und mechanische Inkompatibilität.",
          hints: [
            "Prä- = vor. Zygote = befruchtete Eizelle. Präzygotisch = vor der Befruchtung.",
            "Welchen Vorteil hat es, eine Hybridisierung vor der Befruchtung zu verhindern?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-9-06',
      title: 'Evolutionsfaktoren — Mutation, Drift und Hardy-Weinberg',
      content: `## Die vier Evolutionsfaktoren

Die Synthetische Evolutionstheorie identifiziert vier Hauptfaktoren, die Allelfrequenzen in Populationen verändern:
1. **Mutation** — liefert neuen genetischen Rohstoff
2. **Selektion** — nicht-zufällige, gerichtete Veränderung
3. **Gendrift** — zufällige Veränderungen in kleinen Populationen
4. **Genfluss** — Austausch von Allelen zwischen Populationen (Migration)

## Mutation als Rohstoff

Mutationen erzeugen neue Allele und sind der einzige Mechanismus, der tatsächlich neue genetische Information einführt. Die Mutationsrate ist gering (~10⁻⁸ bis 10⁻⁶ pro Gen pro Generation), aber über viele Gene und Generationen liefert sie ausreichend Variation.

Wichtig: Mutation allein treibt Evolution kaum voran (Mutationsdruck ist schwach) — Selektion und Gendrift sind die stärkeren treibenden Kräfte.

## Gendrift

**Gendrift** bezeichnet zufällige Veränderungen der Allelfrequenzen, die nicht durch Selektion verursacht werden. Besonders stark in kleinen Populationen. Kann dazu führen, dass neutrale oder sogar leicht schädliche Allele durch reinen Zufall fixiert oder eliminiert werden.

**Flaschenhals-Effekt (Bottleneck):** Eine Population wird durch einen katastrophalen Ereignis (Krankheit, Naturkatastrophe) auf wenige Individuen reduziert. Die Überlebenden repräsentieren nur einen Ausschnitt der ursprünglichen genetischen Vielfalt. Beispiel: Nordlicher Elefantenrobbe (ca. 20 Individuen im 19. Jahrhundert → heute 200.000 mit sehr geringer genetischer Diversität).

**Gründereffekt (Founder Effect):** Eine kleine Gruppe gründet eine neue Population. Zufällige Allele der Gründer sind in der neuen Population überrepräsentiert. Beispiel: Genetische Erkrankungen in isolierten Gemeinschaften (z. B. Ellis-van-Creveld-Syndrom bei Amischen in Pennsylvania, zurückzuführen auf wenige Gründerindividuen).

## Genfluss

**Genfluss** (Genfluss, Migrationseffekt) bezeichnet den Transfer von Allelen zwischen Populationen durch wandernde Individuen. Genfluss homogenisiert Populationen genetisch — er wirkt der Divergenz durch Selektion und Gendrift entgegen. Genfluss verhindert Artbildung.

## Hardy-Weinberg-Gesetz

Das **Hardy-Weinberg-Gesetz** (1908) beschreibt das Gleichgewicht der Allelfrequenzen in einer idealen Population:

**p² + 2pq + q² = 1** (mit p + q = 1)

Bedingungen: große Population, Panmixie, keine Mutation, keine Selektion, kein Genfluss.

Im Hardy-Weinberg-Gleichgewicht ändert sich die Allelfrequenz nicht. Abweichungen vom Gleichgewicht zeigen an, dass evolutionäre Kräfte wirken. Anwendung: Heterozygotenvorteil (Sichelzellanämie in Malariaregionen), Trägerfrequenzberechnung.`,
      lernziele: [
        "Die vier Evolutionsfaktoren (Mutation, Selektion, Gendrift, Genfluss) und ihre Wirkungsweisen beschreiben",
        "Flaschenhals-Effekt und Gründereffekt als Formen des Gendrifts unterscheiden",
        "Das Hardy-Weinberg-Gesetz formulieren und seine Bedingungen und Anwendungen erläutern",
      ],
      sections: [
        {
          heading: "Flaschenhals-Effekt vs. Gründereffekt",
          text: "Beide sind Formen des Gendrifts in kleinen Populationen, haben aber verschiedene Ursachen. Der Flaschenhals-Effekt entsteht, wenn eine bestehende große Population durch ein Ereignis (Epidemie, Naturkatastrophe) drastisch reduziert wird — die überlebenden wenigen Individuen repräsentieren nur einen Ausschnitt der ursprünglichen genetischen Vielfalt (genetische Verarmung). Der Gründereffekt tritt auf, wenn eine kleine Gruppe von Individuen eine neue Population kolonisiert — die Allele der Gründer (zufällig, nicht representativ) dominieren die neue Population. Beide können zur Fixierung seltener Allele führen (einschließlich Krankheitsallele) und genetische Vielfalt reduzieren. Das Northern Elephant Seal-Beispiel ist ein Flaschenhals; die Amischen mit hoher Ellis-van-Creveld-Häufigkeit sind ein Gründereffekt-Beispiel.",
          merksatz: "Flaschenhals: bestehende Population wird stark reduziert. Gründereffekt: kleine Gruppe gründet neue Population. Beide → Gendrift, genetische Verarmung.",
        },
        {
          heading: "Hardy-Weinberg-Gleichgewicht und Heterozygotenvorteil",
          text: "Das Hardy-Weinberg-Gesetz beschreibt eine sich nicht verändernde Population — einen Referenzzustand ohne Evolution. Abweichungen zeigen, welche evolutionären Kräfte aktiv sind. Ein wichtiges Abweichungsbeispiel ist der Heterozygotenvorteil (Überdominanz): In Malariaregionen Afrikas sind Sichelzellanämie-Allele (HbS) in höherer Frequenz vorhanden als durch Mutation allein zu erwarten wäre. Der Grund: Heterozygote (HbA/HbS) sind resistenter gegen schwere Malaria als normale Homozygote (HbA/HbA) — balancierende Selektion hält das Sichelzellallel in der Population. Das Hardy-Weinberg-Gleichgewicht gilt hier nicht, weil Selektion aktiv wirkt (Heterozygotenvorteil). Dies ist ein Beispiel für balancierte Polymorphismus.",
          merksatz: "Heterozygotenvorteil: HbA/HbS (Sichelzellträger) widerstandsfähiger gegen Malaria → HbS-Allel bleibt häufig in Malariaregionen (balancierte Selektion).",
        },
      ],
      merksätze: [
        "4 Evolutionsfaktoren: Mutation (Rohstoff), Selektion (gerichtet), Gendrift (Zufall, kleine Population), Genfluss (homogenisierend).",
        "Gendrift: Flaschenhals (Katastrophe) oder Gründereffekt (neue Kolonie) → genetische Verarmung, Fixierung zufälliger Allele.",
        "Hardy-Weinberg: p²+2pq+q²=1. Im Gleichgewicht = keine Evolution. Abweichungen zeigen aktive evolutionäre Kräfte.",
      ],
      klinischerBezug: "Der Gründereffekt erklärt die erhöhte Häufigkeit bestimmter genetischer Erkrankungen in isolierten Gemeinschaften: Tay-Sachs bei aschkenasischen Juden, Ellis-van-Creveld-Syndrom bei Amischen. In der Pharmakogenetik erklärt der Gründereffekt populationsspezifische Häufigkeiten von Medikamentenmetabolismus-Varianten (z. B. CYP2D6-Allele).",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie den Unterschied zwischen Flaschenhals-Effekt und Gründereffekt.",
        answer: "Beide sind Sonderformen des Gendrifts. Der Flaschenhals-Effekt tritt auf, wenn eine große bestehende Population durch ein katastrophales Ereignis (Seuche, Naturkatastrophe) auf wenige Individuen reduziert wird. Die überlebenden Individuen repräsentieren nur einen zufälligen Ausschnitt der ursprünglichen genetischen Variation — Allelfrequenzen ändern sich zufällig, Diversität geht verloren. Der Gründereffekt tritt auf, wenn eine kleine Gruppe von Individuen aus einer großen Population eine neue Population gründet (z. B. auf einer neuen Insel). Die zufälligen Allele der Gründer sind in der neuen Population überrepräsentiert.",
      },
      selfTest: [
        {
          question: "Welcher Evolutionsfaktor hat in kleinen, isolierten Populationen den stärksten Einfluss auf die Allelfrequenzveränderung?",
          options: [
            "Mutation",
            "Selektion",
            "Gendrift",
            "Genfluss",
            "Rekombination",
          ],
          correctIndex: 2,
          explanation: "In kleinen Populationen dominiert Gendrift als Evolutionsfaktor. Durch Zufallsprozesse (Überleben und Reproduktion sind nicht determiniert) können Allelfrequenzen stark schwanken. In sehr kleinen Populationen kann ein Allel allein durch Zufall fixiert oder eliminiert werden, unabhängig von seiner Fitness. In großen Populationen mittelt sich der Zufall aus und Selektion dominiert.",
          hints: [
            "Je kleiner die Population, desto größer die zufälligen Schwankungen — welcher Faktor ist per Definition zufällig?",
            "Gendrift = genetischer Drift = zufällige Veränderungen durch Stichprobenfehler in kleinen Populationen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Population von Robben wird durch eine Seuche von 10.000 auf 50 Individuen reduziert. Die überlebenden Tiere zeigen sehr geringe genetische Diversität. Welcher Effekt liegt vor?",
          options: [
            "Gründereffekt",
            "Flaschenhals-Effekt",
            "Selektionsvorteil der überlebenden Individuen",
            "Mutationsdruck",
            "Genfluss von benachbarten Populationen",
          ],
          correctIndex: 1,
          explanation: "Der Flaschenhals-Effekt tritt auf, wenn eine bestehende Population durch ein Ereignis (hier: Seuche) drastisch reduziert wird. Die wenigen überlebenden Individuen repräsentieren nur einen zufälligen Ausschnitt der ursprünglichen genetischen Vielfalt — viele Allele gehen verloren. Die resultierende Population zeigt daher geringe genetische Diversität. Das ist kein Gründereffekt (der betrifft neue Kolonien), sondern ein Flaschenhals.",
          hints: [
            "Die Population war groß und wurde durch ein Ereignis reduziert — das ist der Schlüssel zur Unterscheidung.",
            "Flaschenhals = eine bestehende große Population wird 'durch einen engen Hals gezwungen' (nur wenige überleben).",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Das Hardy-Weinberg-Gleichgewicht gilt unter der Bedingung 'keine Selektion'. Was bedeutet es, wenn eine Population in einer solchen idealen Population analysiert wird und das Gleichgewicht NICHT vorliegt?",
          options: [
            "Die Population ist sehr groß und stabil",
            "Mindestens einer der Evolutionsfaktoren (Selektion, Mutation, Gendrift, Genfluss) wirkt auf diese Population",
            "Die Mutation ist zu schnell, um das Gleichgewicht zu messen",
            "Das Hardy-Weinberg-Gesetz gilt nur für Menschen, nicht für Tiere",
            "Die Population hat gerade einen Gründereffekt durchlaufen und ist nun im Gleichgewicht",
          ],
          correctIndex: 1,
          explanation: "Das Hardy-Weinberg-Gleichgewicht beschreibt einen Zustand ohne Evolution. Wenn eine reale Population vom Hardy-Weinberg-Gleichgewicht abweicht, bedeutet das, dass mindestens einer der fünf idealen Bedingungen nicht erfüllt ist — also mindestens ein Evolutionsfaktor aktiv ist: Selektion, Mutation, Gendrift, Genfluss oder Nicht-Zufälligkeit der Paarung. Die Abweichung kann genutzt werden, um aktive evolutionäre Kräfte nachzuweisen.",
          hints: [
            "Hardy-Weinberg = kein Evolutionsdruck. Abweichung = Evolution ist aktiv.",
            "Welche fünf Bedingungen müssen erfüllt sein? Verletzung einer davon → Abweichung vom Gleichgewicht.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In einer kleinen isolierten Gemeinschaft tritt eine seltene autosomal rezessive Erkrankung mit einer Häufigkeit von 1:100 auf, obwohl sie in der Allgemeinbevölkerung nur 1:10.000 vorkommt. Was erklärt dies am wahrscheinlichsten?",
          options: [
            "Starke Selektion zugunsten der Erkrankung in dieser Gemeinschaft",
            "Hohe Mutationsrate durch Umweltgifte in dieser Region",
            "Gründereffekt: wenige Gründerindividuen trugen das Allel, das in der isolierten Gemeinschaft gehäuft wurde",
            "Das Hardy-Weinberg-Gleichgewicht gilt nicht für kleine Gemeinschaften",
            "Die Erkrankung wird durch Infektionen übertragen, nicht genetisch",
          ],
          correctIndex: 2,
          explanation: "Der Gründereffekt erklärt die Häufung seltener Erbkrankheiten in isolierten Gemeinschaften: Wenn die Gemeinschaft von wenigen Gründerindividuen abstammt, die zufällig das pathogene Allel trugen, ist dieses Allel in der Nachfolgepopulation überrepräsentiert. Durch Inzucht (Heirat innerhalb der Gemeinschaft) erhöht sich die Trägerfrequenz weiter. Klassisches Beispiel: Amische in Pennsylvania (Ellis-van-Creveld, Ahornsirup-Krankheit).",
          hints: [
            "Isolierte Gemeinschaft + seltene Erkrankung häufiger als normal → Welcher Effekt erklärt das Auftreten in isolierten Gründerpopulationen?",
            "Gründereffekt: zufällige Allele der Gründer werden überrepräsentiert.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Genfluss als Evolutionsfaktor ist korrekt?",
          options: [
            "Genfluss erhöht die genetische Differenzierung zwischen Populationen",
            "Genfluss tritt nur bei pflanzlichen Organismen durch Pollenausbreitung auf",
            "Genfluss homogenisiert Populationen genetisch und wirkt der Artbildung entgegen",
            "Genfluss ist ein zufälliger Prozess ohne gerichtete Wirkung",
            "Genfluss erhöht die Häufigkeit vorteilhafter Mutationen spezifisch",
          ],
          correctIndex: 2,
          explanation: "Genfluss (Migration von Individuen zwischen Populationen) überträgt Allele von einer Population zur anderen. Dies homogenisiert Populationen genetisch: Allelfrequenzunterschiede, die durch Selektion oder Gendrift entstanden sind, werden durch Genfluss wieder angeglichen. Genfluss wirkt damit der genetischen Divergenz entgegen und verhindert oder verlangsamt die Artbildung. Geografische Isolation verhindert Genfluss — das ist der erste Schritt bei allopatrischer Artbildung.",
          hints: [
            "Genfluss = Allele fließen zwischen Populationen — was passiert mit Unterschieden, wenn Allele ausgetauscht werden?",
            "Genfluss und Artbildung: Warum ist geografische Isolation Voraussetzung für allopatrische Artbildung?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-9-07',
      title: 'Entwicklung des Menschen — Hominiden',
      content: `## Hominiden — Definition und Stammbaum

**Hominiden** (Familie Hominidae) umfassen in der modernen Systematik alle Großen Menschenaffen (Orang-Utan, Gorilla, Schimpanse, Bonobo) und den Menschen. Im engeren Sinn bezeichnet **Hominini** die Tribus, zu der Schimpansen und Menschen (Homo) gehören. Der Mensch ist kein Nachkomme moderner Schimpansen, sondern beide teilen einen gemeinsamen Vorfahren vor ca. 6–7 Millionen Jahren.

## Frühe Homininen

**Ardipithecus ramidus** (ca. 4,4 Mya): früher Biped, noch stark waldgebunden

**Australopithecus afarensis** (ca. 3,9–2,9 Mya): "Lucy"-Skelett (1974, Äthiopien). Kleines Hirnvolumen (~450 ccm), aufrechter Gang, aber noch Kletteranlage. Wichtig: Zweibeinigkeit evolvierte vor der Gehirnvergrößerung.

**Australopithecus africanus** (ca. 3–2 Mya): weiterer früher Hominid in Südafrika.

## Genus Homo

**Homo habilis** (ca. 2,4–1,5 Mya): erster Homo, Hirnvolumen ~630 ccm. Erste Steinwerkzeuge (Oldowan-Kultur). Möglicherweise noch Australopithecus?

**Homo erectus** (ca. 1,9 Mya–0,1 Mya): Erste Homininen außerhalb Afrikas (bis Java, China, Europa). Hirnvolumen ~900–1.100 ccm. Acheuléen-Faustkeile. Kontrolle des Feuers (umstritten: ob 1,5 Mya oder sicherer 400.000 Jahre).

**Homo heidelbergensis** (ca. 700.000–200.000 Jahre): Gemeinsamer Vorfahre von Homo neanderthalensis und Homo sapiens.

**Homo neanderthalensis** (ca. 400.000–40.000 Jahre): Europa und Westasien. Hirnvolumen ähnlich wie H. sapiens (~1.400–1.600 ccm), aber anders strukturiert. Bestattungen, Schmuck, Kunst. Genetisch: moderne Menschen haben 1–4% neanderthalische DNA (Hybridisierung nach Out-of-Africa-Migration). Aussterben: Konkurrenz mit H. sapiens, Klimawandel.

## Homo sapiens und Out-of-Africa

**Homo sapiens** (ca. 300.000 Jahre bis heute): Entstehung in Afrika. **Out-of-Africa-Theorie** (mehrheitlich akzeptiert): Homo sapiens wanderte vor ca. 60.000–70.000 Jahren aus Afrika aus und verdrängte ältere Hominiden (Neanderthaler in Europa, Denisova-Menschen in Asien). Hirnvolumen ~1.350 ccm, aber Größe allein erklärt nicht die kognitiven Fähigkeiten — Vernetzung und Kortexstruktur sind entscheidend.

## Wichtige Trends in der Homininen-Evolution

- **Aufrechter Gang (Bipedie):** Evolution vor Gehirnvergrößerung (früheste Homininen gingen aufrecht)
- **Zunahme des Hirnvolumens:** Von ~450 ccm (Australopithecus) auf ~1.350 ccm (H. sapiens)
- **Werkzeuggebrauch:** Oldowan → Acheuléen → Mittelpaläolithikum → Jungpaläolithikum
- **Sprachentwicklung:** Broca-Areal im linken Frontallappen, Hyoid-Knochen (Kehlkopfstruktur) als Indikator`,
      lernziele: [
        "Die wichtigsten Homininen (Australopithecus afarensis, H. habilis, H. erectus, H. neanderthalensis, H. sapiens) in chronologische Reihenfolge bringen und ihre Merkmale nennen",
        "Die Out-of-Africa-Theorie und genetische Belege (Neanderthaler-DNA) beschreiben",
        "Wichtige Trends der Homininen-Evolution (Bipedie, Hirnvolumen, Werkzeuggebrauch) erläutern",
      ],
      sections: [
        {
          heading: "Bipedie vor Gehirnvergrößerung — Eine wichtige Erkenntnis",
          text: "Lange glaubte man, dass Gehirnvergrößerung und aufrechter Gang parallel evolvierten. Die Fossil-Befunde zeigen jedoch klar: Frühe Homininen wie Australopithecus afarensis (Lucy, 3,2 Mya) gingen bereits aufrecht, hatten aber ein Hirnvolumen von nur ~450 ccm (ähnlich einem Schimpansen). Die Gehirnvergrößerung folgte deutlich später. Warum Bipedie? Mehrere Hypothesen: Freisetzen der Hände für Werkzeuge (aber Werkzeuge kamen viel später), thermoregulatorische Vorteile (aufrechter Gang reduziert Sonneneinstrahlung auf den Körper), effizientere Fortbewegung über lange Strecken in offener Savanne, bessere Übersicht in der Savanne. Wahrscheinlich kombinierten mehrere Selektionsvortei le. Die bipede Anatomie hat auch Nachteile: Beckenerweiterung für Geburt kollidiiert mit großem Kopf (Neugeborenenkopf muss gedreht werden), erhöhte Risiken für Rückenschmerzen, Krampfadern, Leistenbrüche.",
          merksatz: "Bipedie evolovierte vor Gehirnvergrößerung: Australopithecus aufrecht (3,9 Mya), Hirnvolumen erst ab Homo (1,5 Mya) deutlich vergrößert.",
        },
        {
          heading: "Neanderthaler — Verwandte, keine Vorfahren",
          text: "Homo neanderthalensis war keine primitive Vorstufe des modernen Menschen, sondern eine eigenständige, an Kälteklima adaptierte Menschenart in Europa. Neanderthaler hatten ein vergleichbares oder sogar etwas größeres Hirnvolumen als wir (~1.400–1.600 ccm), bestatteten ihre Toten, nutzten Schmuck (Muschelperlen, Pigmente) und pflegten Kranke. Genetische Analysen (Svante Pääbo, Nobelpreis 2022) zeigen, dass moderne Menschen außerhalb Afrikas 1–4% neanderthalische DNA tragen — Beweis für Hybridisierung nach dem Out-of-Africa-Ereignis. Einige neanderthalische Allele haben Konsequenzen für moderne Menschen: TLR-Allele (Immunabwehr), Allergie-Risiko, COVID-19-Schwere-Risikofaktoren. Das Aussterben der Neanderthaler vor ca. 40.000 Jahren war wahrscheinlich eine Kombination aus Konkurrenz mit H. sapiens, Klimawandel und demografischen Effekten.",
          merksatz: "Neanderthaler: eigenständige Art, nicht Vorstufe. 1–4% ihrer DNA in modernen Menschen. Svante Pääbo: Paläogenomik, Nobelpreis 2022.",
        },
      ],
      merksätze: [
        "Homininen-Reihe: Ardipithecus → Australopithecus afarensis (Lucy) → H. habilis → H. erectus → H. sapiens.",
        "Hirnvolumen-Zunahme: ~450 ccm (Australopithecus) → ~630 (H. habilis) → ~1.000 (H. erectus) → ~1.350 (H. sapiens).",
        "Out-of-Africa: H. sapiens entstand in Afrika, migrierte vor ~60.000–70.000 Jahren. Neanderthaler-DNA in modernen Menschen (1–4%).",
      ],
      klinischerBezug: "Svante Pääbos Arbeit (Nobelpreis Medizin 2022) zur Paläogenomik der Neanderthaler zeigte, dass bestimmte neanderthalische Allele das COVID-19-Schwereverlaufsrisiko erhöhen (Chromosom 3-Risikohaplotyp). Dies verbindet prähistorische Homininen-Forschung direkt mit klinisch relevanten Fragestellungen der modernen Medizin.",
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was sagt die Out-of-Africa-Theorie aus und welche genetischen Belege stützen sie?",
        answer: "Die Out-of-Africa-Theorie besagt, dass Homo sapiens in Afrika entstand (vor ca. 300.000 Jahren) und dann vor ca. 60.000–70.000 Jahren aus Afrika in den Rest der Welt migrierte. Genetische Belege: (1) Maximale genetische Diversität bei afrikanischen Populationen (alle anderen Populationen sind Teilmengen dieser Diversität — Gründereffekt bei Auswanderung). (2) Mitochondriale DNA (maternale Linie) und Y-Chromosom (paternale Linie) konvergieren auf afrikanische Ursprünge (Mitochondrielle Eva, Chromosomaler Adam). (3) 1–4% neanderthalische DNA in Nicht-Afrikanern belegt Hybridisierung nach der afrikanischen Migration.",
      },
      selfTest: [
        {
          question: "In welcher chronologischer Reihenfolge erschienen die folgenden Homininen?",
          options: [
            "H. sapiens → H. erectus → H. habilis → Australopithecus afarensis",
            "Australopithecus afarensis → H. habilis → H. erectus → H. sapiens",
            "H. habilis → Australopithecus afarensis → H. erectus → H. sapiens",
            "H. erectus → H. habilis → H. sapiens → Australopithecus afarensis",
            "Alle Homininen existierten gleichzeitig und entwickelten sich unabhängig",
          ],
          correctIndex: 1,
          explanation: "Die chronologische Reihenfolge ist: Australopithecus afarensis (Lucy, ~3,9–2,9 Mya), dann Homo habilis (~2,4–1,5 Mya), gefolgt von Homo erectus (~1,9 Mya–100.000 Jahre), und schließlich Homo sapiens (vor ca. 300.000 Jahren bis heute). Dies entspricht einer zunehmenden Hirnvolumenzunahme und Werkzeugkomplexität über die Zeit.",
          hints: [
            "Lucy (Australopithecus afarensis) ist der älteste der genannten. Wer folgte als erster Homo?",
            "Die Reihenfolge spiegelt sich im Hirnvolumen wider: 450 ccm → 630 ccm → 1.000 ccm → 1.350 ccm.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über Homo neanderthalensis ist korrekt?",
          options: [
            "Neanderthaler hatten ein deutlich kleineres Hirnvolumen als Homo sapiens",
            "Neanderthaler waren Vorfahren von Homo sapiens, nicht von Homo erectus",
            "Neanderthaler lebten nur in Afrika und migrierten nie nach Europa",
            "Moderne Menschen außerhalb Afrikas tragen 1–4% neanderthalische DNA",
            "Neanderthaler nutzten keine Werkzeuge oder symbolisches Verhalten",
          ],
          correctIndex: 3,
          explanation: "Genetische Analysen (Svante Pääbo, Max-Planck-Institut) zeigen, dass moderne Menschen nicht-afrikanischer Abstammung zwischen 1–4% neanderthalische DNA tragen. Dies belegt, dass Homo sapiens nach dem Out-of-Africa-Ereignis mit Neanderthalern hybridisierte, bevor diese ausstarben. Afrikanische Populationen haben dagegen kaum oder keine neanderthalische DNA, da ihre Vorfahren Afrika nicht verließen, als die Hybridisierung stattfand.",
          hints: [
            "Genetische Analysen von Neanderthaler-Genome (Svante Pääbo, Nobelpreis 2022) lieferten direkte Belege.",
            "1–4% in Nicht-Afrikanern — wo fand die Hybridisierung statt, wenn Afrikaner kaum neanderthalische DNA haben?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher der folgenden Homininen verließ als erster den afrikanischen Kontinent?",
          options: [
            "Australopithecus afarensis",
            "Homo habilis",
            "Homo erectus",
            "Homo neanderthalensis",
            "Homo sapiens",
          ],
          correctIndex: 2,
          explanation: "Homo erectus war der erste Hominin, der Afrika verließ und andere Kontinente besiedelte. Fossile Funde von H. erectus wurden in Java (Indonesien, Dubois 1891), China (Peking-Mensch) und Europa gefunden, datiert auf bis zu 1,8 Millionen Jahre. Australopithecus und H. habilis blieben auf Afrika beschränkt. H. sapiens verließ Afrika erst vor ca. 60.000–70.000 Jahren im Rahmen der Out-of-Africa-Migration.",
          hints: [
            "Welcher Hominid ist für seine weite Verbreitung außerhalb Afrikas bekannt (Java, Peking)?",
            "Homo erectus = 'aufrecht gehender Mensch' — er wanderte weit.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was belegt die Out-of-Africa-Theorie durch genetische Daten?",
          options: [
            "Africaner haben die geringste genetische Diversität aller Populationen",
            "Die maximale genetische Diversität findet sich in afrikanischen Populationen, was auf den Ursprung von H. sapiens in Afrika hinweist",
            "Alle modernen Menschen haben identische mitochondriale DNA",
            "Neanderthaler und H. sapiens haben identische Genome",
            "Australopithecus afarensis-DNA wurde in modernen Populationen gefunden",
          ],
          correctIndex: 1,
          explanation: "Ein Hauptbeleg der Out-of-Africa-Theorie ist die maximale genetische Diversität in afrikanischen Populationen: Da alle nicht-afrikanischen Populationen von einer kleinen Gruppe auswandernder H. sapiens abstammen (Gründereffekt), haben sie einen Ausschnitt der afrikanischen genetischen Vielfalt. Dies entspricht dem Erwartungsmuster, wenn Afrika der Ursprungskontinent ist — die älteste Population zeigt die größte Diversität.",
          hints: [
            "Gründereffekt bei Auswanderung aus Afrika: Was passiert mit der genetischen Diversität der auswandernden Gruppe?",
            "Mehr genetische Diversität = ältere Population (mehr Zeit für Mutationsakkumulation).",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum war die Entdeckung, dass Australopithecus afarensis bereits aufrecht ging, evolutionär so bedeutsam?",
          options: [
            "Weil sie zeigte, dass der aufrechte Gang nach der Gehirnvergrößerung evolvierte",
            "Weil sie bewies, dass Australopithecus kein Vorfahre des Menschen ist",
            "Weil sie zeigte, dass Bipedie vor der Gehirnvergrößerung evolvierte — der aufrechte Gang war der erste Schritt der Homininisation",
            "Weil sie Australopithecus als ersten Werkzeugbenutzer identifizierte",
            "Weil sie das Aussterben von Australopithecus erklärte",
          ],
          correctIndex: 2,
          explanation: "Die Entdeckung von Lucy (Australopithecus afarensis, 3,2 Mya) mit bipeder Anatomie, aber kleinem Hirnvolumen (~450 ccm) widerlegte die frühere Annahme, dass Gehirnvergrößerung und Bipedie parallel evolvierten. Bipedie war der erste evolutionäre Schritt der Homininisation — lange bevor der Homo-Typ mit großem Gehirn erschien. Dies veränderte das Bild der Menschheitsevolution grundlegend.",
          hints: [
            "Hirnvolumen von Australopithecus: ~450 ccm (Schimpansen-Niveau). Geht er aufrecht? Ja!",
            "Was war also chronologisch früher: aufrechter Gang oder großes Gehirn?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
