/**
 * Biologie BMS Pool 18 — 60 Fragen im offiziellen MedAT-Stil (Typ A + FALSCH).
 * Stoff: Kap3 (Entwicklungsbiologie & Evolution).
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "biologie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool18: Question[] = [
  // ═══════════════════════════════════════════════════════════════
  // Entstehung des Lebens / Endosymbiose (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-001",
    "bio-kap3",
    "Welche Gasgemisch-Zusammensetzung wurde im Miller-Urey-Experiment (1953) verwendet?",
    [
      "O₂, N₂, CO₂ und H₂O",
      "CH₄, NH₃, H₂ und H₂O",
      "O₃, CO₂, N₂ und H₂O",
      "He, Ne, Ar und H₂O",
      "CO₂, O₂, CH₄ und N₂",
    ],
    1,
    "Miller und Urey simulierten die reduzierende Uratmosphäre mit Methan (CH₄), Ammoniak (NH₃), Wasserstoff (H₂) und Wasserdampf (H₂O). Elektrische Entladungen lieferten die Energie für die abiotische Synthese von Aminosäuren.",
    "leicht",
    ["Entstehung des Lebens", "Miller-Urey"]
  ),
  q(
    "bio-pool-18-002",
    "bio-kap3",
    "Die RNA-Welt-Hypothese löst ein zentrales Problem der Lebensentstehung. Welches?",
    [
      "Die Entstehung der Lipid-Doppelschicht",
      "Das Henne-Ei-Problem zwischen DNA und Proteinen",
      "Die Bildung von ATP ohne Mitochondrien",
      "Die Herkunft des Sauerstoffs in der Atmosphäre",
      "Die Entstehung der Zellwand bei Prokaryoten",
    ],
    1,
    "RNA kann sowohl Informationen speichern als auch katalytisch wirken (Ribozyme). Dadurch löst die RNA-Welt-Hypothese das Paradoxon, dass Proteine für DNA-Replikation nötig sind, aber DNA für Proteinsynthese gebraucht wird.",
    "mittel",
    ["RNA-Welt", "Entstehung des Lebens"]
  ),
  q(
    "bio-pool-18-003",
    "bio-kap3",
    "Welche Aussage über Protobionten trifft zu?",
    [
      "Sie besaßen bereits DNA als Erbmaterial",
      "Sie sind membranumhüllte Strukturen mit primitivem Stoffwechsel, aber ohne vollständige Replikation",
      "Sie hatten Mitochondrien für die Energiegewinnung",
      "Sie konnten Photosynthese betreiben",
      "Sie besaßen Ribosomen für die Translation",
    ],
    1,
    "Protobionten waren erste membranumhüllte Strukturen mit einfachem Stoffwechsel, aber ohne vollständige Selbstreplikation — sie erfüllten noch nicht alle Kriterien des Lebens.",
    "mittel",
    ["Protobionten", "Entstehung des Lebens"]
  ),
  q(
    "bio-pool-18-004",
    "bio-kap3",
    "Welcher Befund stützt die Endosymbiontentheorie am stärksten?",
    [
      "Mitochondrien haben eine glatte Außenmembran",
      "Mitochondrien und Chloroplasten besitzen eigene ringförmige DNA und 70S-Ribosomen",
      "Pflanzenzellen haben eine Zellwand aus Cellulose",
      "Lysosomen enthalten saure Hydrolasen",
      "Das Cytoskelett besteht aus Aktinfilamenten",
    ],
    1,
    "Mitochondrien und Chloroplasten haben eigene ringförmige DNA (wie Prokaryoten), 70S-Ribosomen, eine Doppelmembran und teilen sich durch Zweiteilung — alles Hinweise auf einen prokaryotischen Endosymbionten.",
    "leicht",
    ["Endosymbiontentheorie", "Mitochondrien"]
  ),
  q(
    "bio-pool-18-005",
    "bio-kap3",
    "Welche Aussage über die Endosymbiontentheorie ist FALSCH?",
    [
      "Lynn Margulis formulierte die Theorie in den 1960er-Jahren",
      "Chloroplasten stammen von cyanobakterienähnlichen Vorfahren ab",
      "Mitochondrien stammen von aeroben Proteobakterien ab",
      "Die Endosymbiose erklärt die Entstehung des Zellkerns",
      "Die Doppelmembran von Mitochondrien ist ein Beleg für die Aufnahme durch Phagocytose",
    ],
    3,
    "Die Endosymbiontentheorie erklärt die Herkunft von Mitochondrien und Chloroplasten, nicht aber die Entstehung des Zellkerns (D falsch). Die innere Membran entspricht der Bakterienmembran, die äußere der Phagocytose-Vakuole.",
    "mittel",
    ["Endosymbiontentheorie", "FALSCH"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Evolution — Darwin, Selektion, synthetische Theorie (8 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-006",
    "bio-kap3",
    "Worin unterscheidet sich Darwins Evolutionstheorie grundlegend von Lamarcks Theorie?",
    [
      "Darwin postulierte die Vererbung erworbener Eigenschaften",
      "Lamarck erkannte die Bedeutung der natürlichen Selektion",
      "Darwin erklärte Evolution durch natürliche Selektion auf Basis zufälliger Variation",
      "Lamarck lehnte die Anpassung an die Umwelt ab",
      "Darwin nahm an, dass Organe durch Gebrauch stärker werden",
    ],
    2,
    "Darwin: Zufällige Variation + natürliche Selektion → unterschiedlicher Fortpflanzungserfolg. Lamarck: Vererbung erworbener Eigenschaften durch Gebrauch/Nichtgebrauch — heute widerlegt.",
    "leicht",
    ["Evolution", "Darwin", "Lamarck"]
  ),
  q(
    "bio-pool-18-007",
    "bio-kap3",
    "Was versteht man unter biologischer Fitness im evolutionsbiologischen Sinne?",
    [
      "Die körperliche Ausdauer und Muskelkraft eines Organismus",
      "Den relativen Fortpflanzungserfolg eines Individuums in einer Population",
      "Die Überlebenszeit eines Organismus im Vergleich zur Artmitte",
      "Die Anzahl der Mutationen im Genom eines Individuums",
      "Die Fähigkeit, Raubtieren zu entkommen",
    ],
    1,
    "Biologische Fitness ist der relative Fortpflanzungserfolg: Wie viele fertile Nachkommen bringt ein Individuum im Vergleich zur Restpopulation hervor? Fitness ist kein Maß für körperliche Stärke.",
    "leicht",
    ["Evolution", "Fitness"]
  ),
  q(
    "bio-pool-18-008",
    "bio-kap3",
    "Ein Experiment zeigt, dass sich hellbraune Mäuse auf dunklem Untergrund häufiger vermehren als weiße Mäuse. Welcher Selektionstyp liegt vor?",
    [
      "Stabilisierende Selektion, da der Mittelwert begünstigt wird",
      "Gerichtete (direktionale) Selektion zugunsten eines Extrems",
      "Disruptive Selektion zugunsten beider Extreme",
      "Sexuelle Selektion durch Partnerwahl",
      "Künstliche Selektion durch den Menschen",
    ],
    1,
    "Gerichtete Selektion: Ein Phänotyp-Extrem wird bevorzugt. Der Mittelwert der Population verschiebt sich in eine Richtung.",
    "mittel",
    ["Evolution", "Selektion", "direktional"]
  ),
  q(
    "bio-pool-18-009",
    "bio-kap3",
    "Welche Aussage beschreibt die synthetische Evolutionstheorie korrekt?",
    [
      "Sie beruht ausschließlich auf Darwins Beobachtungen von den Galápagos-Inseln",
      "Sie vereint Darwins Selektionstheorie mit der Genetik (Mendel)",
      "Sie erklärt Evolution nur durch Gendrift ohne Selektion",
      "Sie widerlegt Darwins Prinzip der natürlichen Selektion",
      "Sie bezieht sich nur auf die Entstehung neuer Arten durch Isolation",
    ],
    1,
    "Die synthetische Evolutionstheorie vereint Darwins natürliche Selektion mit Mendelscher Genetik, Populationsgenetik, Mutationsforschung und Paläontologie zu einem umfassenden Erklärungsrahmen.",
    "mittel",
    ["Evolution", "synthetische Theorie"]
  ),
  q(
    "bio-pool-18-010",
    "bio-kap3",
    "In einer Population tragen Individuen mit intermediärer Körpergröße mehr Nachkommen aus als sehr große oder sehr kleine. Welcher Selektionstyp liegt vor?",
    [
      "Gerichtete Selektion zugunsten der Großen",
      "Disruptive Selektion zugunsten beider Extreme",
      "Stabilisierende Selektion zugunsten des Mittelwerts",
      "Sexuelle Selektion durch Partnerwahl",
      "Frequenzabhängige Selektion",
    ],
    2,
    "Stabilisierende Selektion: Individuen mit mittlerer Merkmalsausprägung haben den höchsten Fortpflanzungserfolg. Extreme werden selektiert. Beispiel: mittleres Geburtsgewicht bei Säuglingen.",
    "leicht",
    ["Evolution", "Selektion", "stabilisierend"]
  ),
  q(
    "bio-pool-18-011",
    "bio-kap3",
    "Welche Aussage über natürliche Selektion ist FALSCH?",
    [
      "Sie wirkt auf den Phänotyp eines Individuums",
      "Sie setzt genetische Variation in der Population voraus",
      "Sie führt dazu, dass besser angepasste Individuen mehr Nachkommen hinterlassen",
      "Sie erzeugt aktiv neue Mutationen im Genom",
      "Sie kann zu Anpassung (Adaptation) an die Umwelt führen",
    ],
    3,
    "Natürliche Selektion erzeugt KEINE neuen Mutationen — Mutationen entstehen zufällig (D falsch). Selektion wirkt nur auf vorhandene Variation und bevorzugt Phänotypen mit höherer Fitness.",
    "leicht",
    ["Evolution", "Selektion", "FALSCH"]
  ),
  q(
    "bio-pool-18-012",
    "bio-kap3",
    "Welches Phänomen erklärt, warum viele Pfauenhennen Hähne mit besonders großem Federschmuck bevorzugen?",
    [
      "Stabilisierende Selektion",
      "Sexuelle Selektion durch Partnerwahl",
      "Gendrift in kleinen Populationen",
      "Ökologische Nischentrennung",
      "Gerichtete Selektion durch Raubtiere",
    ],
    1,
    "Sexuelle Selektion (intersexuell): Weibchen wählen Männchen mit auffälligen Merkmalen. Das Pfauenrad signalisiert genetische Qualität (Handicap-Prinzip), obwohl es die Überlebensfähigkeit einschränkt.",
    "mittel",
    ["Evolution", "sexuelle Selektion"]
  ),
  q(
    "bio-pool-18-013",
    "bio-kap3",
    "Was unterscheidet Koevolution von gewöhnlicher Evolution?",
    [
      "Koevolution betrifft nur Pflanzenpopulationen",
      "Zwei oder mehr Arten üben wechselseitig Selektionsdruck aufeinander aus und treiben gegenseitige Anpassung voran",
      "Koevolution findet nur in den Tropen statt",
      "Koevolution beschreibt ausschließlich Parasit-Wirt-Beziehungen",
      "Koevolution verläuft stets schneller als gewöhnliche Evolution",
    ],
    1,
    "Koevolution: Wechselseitiger Selektionsdruck zwischen Arten. Beide Arten passen sich im Laufe der Zeit aneinander an.",
    "mittel",
    ["Evolution", "Koevolution"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Evolutionsfaktoren — Mutation, Gendrift, Genfluss, HWG (8 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-014",
    "bio-kap3",
    "In einer Population mit 10 000 Individuen hat das Allel A eine Frequenz von p = 0,6. Wie hoch ist der Anteil heterozygoter Individuen (Aa) nach Hardy-Weinberg?",
    ["0,24 (24 %)", "0,36 (36 %)", "0,48 (48 %)", "0,16 (16 %)", "0,60 (60 %)"],
    2,
    "Hardy-Weinberg: p = 0,6 → q = 0,4. Heterozygote = 2pq = 2 × 0,6 × 0,4 = 0,48 (48 %). Die Formel p² + 2pq + q² = 1 beschreibt die Genotypfrequenzen im Gleichgewicht.",
    "mittel",
    ["Hardy-Weinberg", "Populationsgenetik", "rechenfrage"]
  ),
  q(
    "bio-pool-18-015",
    "bio-kap3",
    "Welche Bedingung gehört NICHT zu den Voraussetzungen des Hardy-Weinberg-Gleichgewichts?",
    [
      "Keine Mutation",
      "Keine Selektion",
      "Zufällige Paarung (Panmixie)",
      "Kleine Populationsgröße",
      "Kein Genfluss (Migration)",
    ],
    3,
    "Hardy-Weinberg setzt eine GROSSE (idealerweise unendliche) Population voraus (D falsch). Weitere Bedingungen: keine Mutation, keine Selektion, Panmixie, kein Genfluss — nur dann bleiben Allelfrequenzen konstant.",
    "leicht",
    ["Hardy-Weinberg", "FALSCH"]
  ),
  q(
    "bio-pool-18-016",
    "bio-kap3",
    "Bei einer autosomal-rezessiven Erkrankung sind 9 % der Bevölkerung betroffen. Wie groß ist die Heterozygotenfrequenz nach Hardy-Weinberg?",
    ["21 %", "42 %", "49 %", "30 %", "18 %"],
    1,
    "q² = 0,09 → q = 0,3 → p = 0,7. Heterozygote (Überträger) = 2pq = 2 × 0,7 × 0,3 = 0,42 → 42 %.",
    "schwer",
    ["Hardy-Weinberg", "Populationsgenetik", "rechenfrage"]
  ),
  q(
    "bio-pool-18-017",
    "bio-kap3",
    "Ein Vulkanausbruch tötet 95 % einer Inselpopulation. Die überlebenden 5 % haben zufällig eine andere Allelverteilung als die Ausgangspopulation. Welcher Evolutionsfaktor liegt vor?",
    [
      "Gerichtete Selektion",
      "Genfluss durch Migration",
      "Flaschenhalseffekt (genetischer Flaschenhals)",
      "Gründereffekt",
      "Sexuelle Selektion",
    ],
    2,
    "Flaschenhalseffekt: Eine drastische Reduktion der Populationsgröße führt durch Zufall zu veränderten Allelfrequenzen. Im Gegensatz dazu entsteht der Gründereffekt, wenn wenige Individuen eine neue Population gründen.",
    "leicht",
    ["Gendrift", "Flaschenhalseffekt"]
  ),
  q(
    "bio-pool-18-018",
    "bio-kap3",
    "Wenige Vögel einer Festlandspopulation werden auf eine entfernte Insel verdriftet und gründen dort eine neue Population. Welcher Evolutionsfaktor beschreibt dieses Szenario?",
    [
      "Flaschenhalseffekt",
      "Gründereffekt",
      "Stabilisierende Selektion",
      "Disruptive Selektion",
      "Genfluss",
    ],
    1,
    "Gründereffekt: Eine kleine Gruppe gründet eine neue Population. Durch Zufall repräsentieren die Gründer nicht die Allelfrequenzen der Ausgangspopulation — eine Sonderform der Gendrift.",
    "leicht",
    ["Gendrift", "Gründereffekt"]
  ),
  q(
    "bio-pool-18-019",
    "bio-kap3",
    "Welche Aussage über Genfluss (Migration) trifft zu?",
    [
      "Genfluss verringert stets die genetische Diversität beider Populationen",
      "Genfluss beschreibt den Transfer von Allelen zwischen Populationen durch Zu- oder Abwanderung",
      "Genfluss wirkt nur auf Populationen derselben Insel",
      "Genfluss ist dasselbe wie Gendrift",
      "Genfluss erzeugt neue Allele wie Mutation",
    ],
    1,
    "Genfluss (Genmigration): Allele werden durch wandernde Individuen zwischen Populationen ausgetauscht. Er gleicht Allelfrequenzen zwischen Populationen an und erhöht oft die genetische Diversität der Empfängerpopulation.",
    "leicht",
    ["Genfluss", "Populationsgenetik"]
  ),
  q(
    "bio-pool-18-020",
    "bio-kap3",
    "In einer Population beträgt die Frequenz des rezessiven Allels a q = 0,2. Wie groß ist der erwartete Anteil homozygoter Merkmalsträger (aa) nach Hardy-Weinberg?",
    ["2 %", "4 %", "16 %", "20 %", "40 %"],
    1,
    "q² = (0,2)² = 0,04 = 4 %. Nach Hardy-Weinberg ist der Anteil homozygoter rezessiver Individuen q². Bei q = 0,2 ergibt sich 4 %.",
    "mittel",
    ["Hardy-Weinberg", "Populationsgenetik", "rechenfrage"]
  ),
  q(
    "bio-pool-18-021",
    "bio-kap3",
    "Welcher Evolutionsfaktor führt als einziger zu gerichteter Anpassung an die Umwelt?",
    ["Gendrift", "Genfluss", "Mutation", "Natürliche Selektion", "Gründereffekt"],
    3,
    "Nur natürliche Selektion ist ein gerichteter Prozess, der systematisch vorteilhafte Allele bevorzugt. Mutation, Gendrift und Genfluss verändern Allelfrequenzen zufällig oder ungerichtet.",
    "mittel",
    ["Evolution", "Selektion", "Evolutionsfaktoren"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Phylogenetik — Homologie, Analogie, Stammbäume (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-022",
    "bio-kap3",
    "Flügel von Vögeln und Flügel von Insekten erfüllen die gleiche Funktion, haben aber einen unterschiedlichen Bauplan. Wie bezeichnet man solche Organe?",
    ["Homologe Organe", "Analoge Organe", "Rudimentäre Organe", "Vestigiale Organe", "Atavismen"],
    1,
    "Analoge Organe: gleiche Funktion, aber unterschiedlicher Bauplan und unterschiedliche stammesgeschichtliche Herkunft (konvergente Evolution). Homologe Organe haben dagegen den gleichen Grundbauplan (gemeinsamer Vorfahre).",
    "leicht",
    ["Phylogenetik", "Analogie"]
  ),
  q(
    "bio-pool-18-023",
    "bio-kap3",
    "Arm des Menschen, Flosse des Wals und Flügel der Fledermaus haben denselben Grundbauplan. Welcher Begriff trifft zu?",
    [
      "Analogie",
      "Homologie",
      "Atavismus",
      "Rudiment ohne Funktion",
      "Konvergenz durch gleichen Selektionsdruck",
    ],
    1,
    "Homologe Organe: gleicher Grundbauplan, verschiedene Funktion, gemeinsamer Vorfahre. Die Vorderextremitäten der Wirbeltiere sind ein Paradebeispiel für Homologie.",
    "leicht",
    ["Phylogenetik", "Homologie"]
  ),
  q(
    "bio-pool-18-024",
    "bio-kap3",
    "Welche Aussage über phylogenetische Stammbäume trifft zu?",
    [
      "Die Endknoten eines Stammbaums stellen stets ausgestorbene Arten dar",
      "Jeder Verzweigungspunkt (Knoten) repräsentiert den letzten gemeinsamen Vorfahren zweier Linien",
      "Stammbäume zeigen immer die zeitliche Lebensdauer jeder Art",
      "Die Äste zeigen den Grad der morphologischen Ähnlichkeit, nicht Verwandtschaft",
      "Molekulare Stammbäume widersprechen grundsätzlich morphologischen Stammbäumen",
    ],
    1,
    "In einem phylogenetischen Stammbaum repräsentiert jeder Verzweigungspunkt (Knoten) den hypothetischen letzten gemeinsamen Vorfahren zweier Entwicklungslinien.",
    "mittel",
    ["Phylogenetik", "Stammbäume"]
  ),
  q(
    "bio-pool-18-025",
    "bio-kap3",
    "Welches Kriterium definiert den biologischen Artbegriff nach Ernst Mayr?",
    [
      "Morphologische Ähnlichkeit zwischen Individuen",
      "Gemeinsames Verbreitungsgebiet (sympatrisch)",
      "Fortpflanzungsgemeinschaft mit fertilen Nachkommen und reproduktive Isolation gegenüber anderen Gruppen",
      "Gleiche ökologische Nische",
      "Identische DNA-Sequenz im ribosomalen RNA-Gen",
    ],
    2,
    "Biologischer Artbegriff (Mayr 1942): Eine Art ist eine Gruppe natürlicher Populationen, die sich tatsächlich oder potenziell untereinander fortpflanzen und fertile Nachkommen erzeugen, aber reproduktiv von anderen Gruppen isoliert sind.",
    "mittel",
    ["Phylogenetik", "Artbegriff"]
  ),
  q(
    "bio-pool-18-026",
    "bio-kap3",
    "Welcher Artbildungsmechanismus liegt vor, wenn eine Population durch eine geographische Barriere (z. B. Gebirgskette) dauerhaft getrennt wird und sich getrennt weiterentwickelt?",
    [
      "Sympatrische Artbildung",
      "Parapatrische Artbildung",
      "Allopatrische Artbildung",
      "Hybridisierung",
      "Polyploidisierung",
    ],
    2,
    "Allopatrische Artbildung: Geographische Isolation trennt eine Population physisch. Unabhängige Mutation, Selektion und Gendrift führen zu genetischer Divergenz und schließlich reproduktiver Isolation.",
    "leicht",
    ["Phylogenetik", "Artbildung", "allopatrisch"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Hominiden-Evolution (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-027",
    "bio-kap3",
    "Welche anatomische Anpassung gilt als frühestes Merkmal der Homininen-Linie?",
    [
      "Vergrößerung des Gehirnvolumens auf über 1000 cm³",
      "Aufrechter Gang (Bipedie)",
      "Herstellung von Steinwerkzeugen",
      "Sprachfähigkeit durch Absenkung des Kehlkopfes",
      "Reduktion der Körperbehaarung",
    ],
    1,
    "Der aufrechte Gang (Bipedie) erscheint in der Fossilgeschichte deutlich vor der Gehirnvergrößerung. Fossilien wie Ardipithecus ramidus (~4,4 Mio. J.) und Australopithecus afarensis waren bereits biped, hatten aber ein relativ kleines Gehirn (~400–500 cm³).",
    "mittel",
    ["Hominiden", "Bipedie"]
  ),
  q(
    "bio-pool-18-028",
    "bio-kap3",
    "Welche Gattung umfasst das berühmte Fossil «Lucy» (~3,2 Mio. Jahre)?",
    ["Homo", "Australopithecus", "Ardipithecus", "Paranthropus", "Sahelanthropus"],
    1,
    "Lucy gehört zu Australopithecus afarensis. Sie war biped, hatte aber noch ein kleines Gehirn (~400 cm³). Australopithecinen gelten als wichtige Vorläufer der Gattung Homo.",
    "leicht",
    ["Hominiden", "Australopithecus"]
  ),
  q(
    "bio-pool-18-029",
    "bio-kap3",
    "Welche Aussage über Homo neanderthalensis ist FALSCH?",
    [
      "Neandertaler lebten in Europa und Westasien",
      "Sie bestatteten ihre Toten und stellten Werkzeuge her",
      "Sie hatten ein Gehirnvolumen von durchschnittlich ~1400 cm³",
      "Homo sapiens und Neandertaler haben sich nie vermischt",
      "Sie waren an kaltes Klima angepasst",
    ],
    3,
    "Genomanalysen zeigen, dass Homo sapiens und Neandertaler sich vermischten: 1–4 % Neandertaler-DNA finden sich heute bei Nicht-Afrikanern (D falsch). Die Kreuzung fand vor ~50 000–60 000 Jahren in Europa/Westasien statt.",
    "mittel",
    ["Hominiden", "Neandertaler", "FALSCH"]
  ),
  q(
    "bio-pool-18-030",
    "bio-kap3",
    "In welcher Region gilt die früheste Entstehung von Homo sapiens als gesichert?",
    ["Südostasien", "Europa", "Afrika", "Australien", "Südamerika"],
    2,
    "Out-of-Africa-Hypothese: Homo sapiens entstand vor ~300 000 Jahren in Afrika. Von dort breitete er sich ab ~70 000 Jahren nach Asien, Europa und schließlich in die restliche Welt aus.",
    "leicht",
    ["Hominiden", "Out-of-Africa"]
  ),
  q(
    "bio-pool-18-031",
    "bio-kap3",
    "Welche Werkzeugkultur wird dem frühen Homo habilis zugeordnet?",
    [
      "Acheuléén (Faustkeile)",
      "Oldowan",
      "Moustérien (Neandertaler-Werkzeuge)",
      "Aurignacien",
      "Magdalénien",
    ],
    1,
    "Homo habilis (~2,5–1,5 Mio. J.) gilt als erster systematischer Werkzeugmacher. Die Oldowan-Industrie (einfache Geröllwerkzeuge/Chopper) ist die älteste bekannte Werkzeugkultur. Acheuléén mit Faustkeilen wird Homo erectus zugeschrieben.",
    "schwer",
    ["Hominiden", "Werkzeuge"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Gametogenese — Spermatogenese, Oogenese (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-032",
    "bio-kap3",
    "Wie viele funktionsfähige Spermien entstehen aus einer Spermatogonie nach vollständiger Spermatogenese?",
    ["1", "2", "4", "8", "16"],
    2,
    "Spermatogenese: 1 Spermatogonie → (Mitose) → Spermatozyte I → (Meiose I) → 2 Spermatozyten II → (Meiose II) → 4 Spermatiden → 4 reife Spermien. Alle 4 sind funktionsfähig.",
    "leicht",
    ["Gametogenese", "Spermatogenese"]
  ),
  q(
    "bio-pool-18-033",
    "bio-kap3",
    "Wie viele funktionsfähige Eizellen entstehen aus einer Oogonie nach vollständiger Oogenese?",
    ["1", "2", "3", "4", "0"],
    0,
    "Oogenese: 1 Oogonie → Oozyte I → Meiose I → 1 Oozyte II + 1 Polkörperchen → Meiose II → 1 reife Eizelle + 1 weiteres Polkörperchen. Nur 1 der 4 Zellen wird zur funktionsfähigen Eizelle, die 3 Polkörperchen degenerieren.",
    "leicht",
    ["Gametogenese", "Oogenese"]
  ),
  q(
    "bio-pool-18-034",
    "bio-kap3",
    "In welcher Meiosephase wird die Oogenese beim Menschen bis zur Pubertät arretiert?",
    [
      "Metaphase der Meiose I",
      "Prophase der Meiose I (Diktyotän)",
      "Metaphase der Meiose II",
      "Telophase der Meiose II",
      "Es gibt keinen Meiosearrest bei der Oogenese",
    ],
    1,
    "Oozyten werden pränatal in der Prophase der Meiose I arretiert (Diktyotän) und bleiben so bis zur Ovulation in der Pubertät. Erst der LH-Peak löst die Fortsetzung der Meiose I aus. Die Meiose II wird erst durch die Befruchtung vollendet.",
    "schwer",
    ["Gametogenese", "Oogenese", "Meiosearrest"]
  ),
  q(
    "bio-pool-18-035",
    "bio-kap3",
    "Welches Hormon löst die Ovulation aus?",
    [
      "FSH (follikelstimulierendes Hormon)",
      "Progesteron",
      "LH-Peak (luteinisierendes Hormon)",
      "Östrogen allein",
      "Oxytocin",
    ],
    2,
    "Der plötzliche Anstieg von LH (LH-Surge) in der Zyklusmitte löst die Ovulation aus: Die Oozyte II wird aus dem Graafschen Follikel freigesetzt. FSH fördert das Follikelwachstum, löst aber nicht direkt die Ovulation aus.",
    "mittel",
    ["Gametogenese", "Ovulation"]
  ),
  q(
    "bio-pool-18-036",
    "bio-kap3",
    "Welche Aussage über die Spermatogenese ist FALSCH?",
    [
      "Sie beginnt in der Pubertät und läuft kontinuierlich bis ins hohe Alter",
      "Sie findet in den Samenkanälchen (Tubuli seminiferi)",
      "Sertoli-Zellen (Ammenzellen) unterstützen die reifenden Spermien",
      "Aus einer Spermatozyte I entstehen 2 reife Spermien",
      "Testosteron ist für die Spermatogenese essentiell",
    ],
    3,
    "Aus einer Spermatozyte I entstehen nach Meiose I + II insgesamt 4 (nicht 2) Spermatiden, die sich alle zu reifen Spermien differenzieren (D falsch).",
    "mittel",
    ["Gametogenese", "Spermatogenese", "FALSCH"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Befruchtung und Furchung (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-037",
    "bio-kap3",
    "Wo findet die Befruchtung der Eizelle beim Menschen normalerweise statt?",
    [
      "Im Uterus (Gebärmutterhöhle)",
      "Im Ovar (Eierstock)",
      "In der Ampulle der Tuba uterina (Eileiter)",
      "In der Vagina",
      "Im Peritonealraum",
    ],
    2,
    "Die Befruchtung findet normalerweise im ampullären Teil des Eileiters (Tuba uterina) statt. Die befruchtete Eizelle (Zygote) wandert dann in ~4–5 Tagen durch den Eileiter in den Uterus zur Implantation.",
    "leicht",
    ["Befruchtung", "Eileiter"]
  ),
  q(
    "bio-pool-18-038",
    "bio-kap3",
    "Welche Reaktion des Spermiums ist nötig, um die Zona pellucida der Eizelle zu durchdringen?",
    [
      "Kapazitation allein reicht aus",
      "Akrosomreaktion: Freisetzung hydrolytischer Enzyme aus dem Akrosom",
      "Depolarisation der Spermienmembran",
      "Bildung eines Polkörperchens",
      "Sekretion von Progesteron durch das Spermium",
    ],
    1,
    "Akrosomreaktion: Das Akrosom verschmilzt mit der Plasmamembran und setzt Hyaluronidase und Akrosin frei. Diese Enzyme lösen die Zona pellucida lokal auf und ermöglichen das Eindringen des Spermiums.",
    "mittel",
    ["Befruchtung", "Akrosomreaktion"]
  ),
  q(
    "bio-pool-18-039",
    "bio-kap3",
    "Welchen Zweck hat die Polyspermie-Blockade nach dem Eindringen des ersten Spermiums?",
    [
      "Sie erhöht die genetische Vielfalt der Nachkommen",
      "Sie verhindert das Eindringen weiterer Spermien und damit einen letalen polyploiden Chromosomensatz",
      "Sie löst die erste Furchungsteilung aus",
      "Sie aktiviert die Implantation der Blastozyste",
      "Sie bewirkt den Abschluss der Meiose I der Eizelle",
    ],
    1,
    "Polyspermie-Blockade: Nach Spermien-Eintritt wird die Zona pellucida durch die kortikale Reaktion (Exocytose kortikaler Granula) gehärtet. Ohne diese Blockade würden mehrere Spermien verschmelzen → letaler polyploider Chromosomensatz.",
    "mittel",
    ["Befruchtung", "Polyspermieblock"]
  ),
  q(
    "bio-pool-18-040",
    "bio-kap3",
    "Welches Stadium erreicht der Embryo bei der Implantation in die Gebärmutterschleimhaut?",
    ["Zygote", "Morula", "Blastozyste", "Gastrula", "Neurula"],
    2,
    "Bei der Implantation (~Tag 6–7) ist der Embryo im Blastozystenstadium: eine Hohlkugel mit äußerem Trophoblast und innerem Embryoblast. Die Morula erreicht den Uterus, differenziert sich dort zur Blastozyste.",
    "mittel",
    ["Furchung", "Blastozyste", "Implantation"]
  ),
  q(
    "bio-pool-18-041",
    "bio-kap3",
    "Was beschreibt die Furchungsteilungen der Zygote korrekt?",
    [
      "Schnelle mitotische Teilungen ohne Zellwachstum; die Gesamtgröße des Embryos bleibt zunächst gleich",
      "Langsame meiotische Teilungen mit Crossing-over",
      "Teilungen mit gleichzeitigem Zellwachstum und Verdopplung der Gesamtmasse",
      "Teilungen nur in der Gebärmutterschleimhaut nach Implantation",
      "Asymmetrische Teilungen, bei denen eine Zelle stets degeneriert",
    ],
    0,
    "Furchungsteilungen sind rasche mitotische Teilungen ohne signifikantes Zellwachstum: Die Zygote wird in immer kleinere Blastomeren unterteilt (Morula → Blastozyste). Die Gesamtgröße bleibt etwa gleich.",
    "leicht",
    ["Furchung", "Embryologie"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Gastrulation und Keimblätter (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-042",
    "bio-kap3",
    "Welche drei Keimblätter entstehen bei der Gastrulation?",
    [
      "Trophoblast, Embryoblast, Amnion",
      "Ektoderm, Mesoderm, Entoderm",
      "Epibleme, Cortex, Mark",
      "Epidermis, Dermis, Subcutis",
      "Mucosa, Submucosa, Serosa",
    ],
    1,
    "Bei der Gastrulation bilden sich die drei Keimblätter: Ektoderm, Mesoderm und Entoderm.",
    "leicht",
    ["Gastrulation", "Keimblätter"]
  ),
  q(
    "bio-pool-18-043",
    "bio-kap3",
    "Aus welchem Keimblatt entwickelt sich das Nervensystem?",
    ["Entoderm", "Mesoderm", "Ektoderm", "Trophoblast", "Mesenchym"],
    2,
    "Das Nervensystem entsteht aus dem Ektoderm. Weitere Ektoderm-Derivate: Epidermis, Haarfollikel, Zahnschmelz, Augenlinse, Sinnesepithelien.",
    "leicht",
    ["Keimblätter", "Ektoderm"]
  ),
  q(
    "bio-pool-18-044",
    "bio-kap3",
    "Welches der folgenden Organe stammt NICHT aus dem Mesoderm?",
    ["Herzmuskulatur", "Niere", "Skelettmuskulatur", "Gehirn", "Blutgefäße"],
    3,
    "Das Gehirn stammt aus dem Ektoderm, nicht aus dem Mesoderm (D falsch). Mesoderm-Derivate: Skelett, Muskulatur, Herz, Blutgefäße, Nieren, Nebennieren (Rinde), Keimdrüsen, Bindegewebe.",
    "mittel",
    ["Keimblätter", "Mesoderm", "FALSCH"]
  ),
  q(
    "bio-pool-18-045",
    "bio-kap3",
    "Was entsteht aus dem Entoderm?",
    [
      "Epidermis und Nervensystem",
      "Skelettmuskulatur und Knochen",
      "Epithelauskleidung des Verdauungstrakts, Leber, Pankreas und Lunge",
      "Blutgefäße und Herz",
      "Niere und Nebennieren",
    ],
    2,
    "Entoderm-Derivate: Epithelauskleidung des Verdauungstrakts, Leber, Pankreas, Schilddrüse, Lunge (Alveolarepithel), Harnblase (Epithel) und Thymus.",
    "mittel",
    ["Keimblätter", "Entoderm"]
  ),
  q(
    "bio-pool-18-046",
    "bio-kap3",
    "Welcher Vorgang leitet die Gastrulation beim Menschen ein?",
    [
      "Die Bildung des Primitivstreifens auf dem Epiblasten",
      "Die Implantation der Blastozyste",
      "Der erste Herzschlag des Embryos",
      "Die Verschmelzung von Ei und Spermium",
      "Die Bildung der Amnionhöhle",
    ],
    0,
    "Die Gastrulation beginnt mit der Bildung des Primitivstreifens (~Tag 15) auf dem Epiblasten. Zellen wandern durch den Primitivstreifen ein (Invagination) und bilden Mesoderm und Entoderm — ein Vorgang namens epithelial-mesenchymale Transition.",
    "schwer",
    ["Gastrulation", "Primitivstreifen"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Neurulation, Organogenese (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-047",
    "bio-kap3",
    "Was geschieht bei der Neurulation?",
    [
      "Die Blastozyste nistet sich in die Gebärmutterschleimhaut ein",
      "Das Neuralrohr bildet sich aus der Neuralplatte durch Auffaltung und Verschluss",
      "Die Keimblätter entstehen durch Gastrulation",
      "Die Plazenta wird aus dem Trophoblasten gebildet",
      "Das Herz beginnt zu schlagen",
    ],
    1,
    "Neurulation: Die Neuralplatte faltet sich zu Neuralrinne → Neuralwülste → Neuralrohr auf. Das Neuralrohr wird zu Gehirn und Rückenmark. Defekte führen zu Spina bifida oder Anenzephalie.",
    "mittel",
    ["Neurulation", "Neuralrohr"]
  ),
  q(
    "bio-pool-18-048",
    "bio-kap3",
    "Welche Struktur induziert die Bildung der Neuralplatte beim Vertebratenembryo?",
    [
      "Der Trophoblast",
      "Die Chorda dorsalis (Notochord)",
      "Das Amnion",
      "Die Allantois",
      "Der Dottersack",
    ],
    1,
    "Die Chorda dorsalis (Notochord) sendet Signale an das darüberliegende Ektoderm und induziert dessen Differenzierung zur Neuralplatte. Dieser Vorgang heißt neurale Induktion.",
    "schwer",
    ["Neurulation", "Chorda dorsalis", "Induktion"]
  ),
  q(
    "bio-pool-18-049",
    "bio-kap3",
    "Ein Neuralrohrdefekt kann zu Spina bifida führen. Welcher Nährstoff senkt das Risiko nachweislich?",
    ["Vitamin C", "Eisen", "Folsäure (Vitamin B9)", "Vitamin D", "Calcium"],
    2,
    "Folsäure (Vitamin B9) ist essentiell für den Verschluss des Neuralrohrs. Eine Supplementierung perikonzeptionell senkt das Risiko für Neuralrohrdefekte (Spina bifida, Anenzephalie) um bis zu 70 %.",
    "leicht",
    ["Neurulation", "Folsäure", "klinisch"]
  ),
  q(
    "bio-pool-18-050",
    "bio-kap3",
    "Aus welcher embryonalen Struktur entstehen periphere Nerven, Melanozyten und Nebennierenmark?",
    [
      "Neuralrohr",
      "Neuralleiste (Neuralleistenzellen)",
      "Somiten",
      "Seitenplattenmesoderm",
      "Entoderm",
    ],
    1,
    "Neuralleistenzellen wandern vom dorsalen Neuralrohr in den Embryo und differenzieren sich zu peripheren Neuronen, Schwann-Zellen, Melanozyten, Nebennierenmarkzellen, Knorpel und Knochen des Gesichtsschädels u. v. m.",
    "schwer",
    ["Neurulation", "Neuralleiste"]
  ),
  q(
    "bio-pool-18-051",
    "bio-kap3",
    "In welcher Schwangerschaftswoche sind alle wesentlichen Organanlagen des menschlichen Embryos angelegt?",
    ["Woche 2", "Woche 4", "Woche 8", "Woche 16", "Woche 24"],
    2,
    "Am Ende der 8. Woche sind alle wesentlichen Organanlagen gebildet. Ab Woche 9 spricht man vom Fetus — in der Fetalperiode wachsen und reifen die Organe.",
    "mittel",
    ["Organogenese", "Embryonalperiode"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Embryonalhüllen und Plazenta (5 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-052",
    "bio-kap3",
    "Aus welcher Schicht der Blastozyste entwickelt sich die Plazenta?",
    ["Embryoblast", "Trophoblast", "Epiblast allein", "Hypoblast allein", "Neuralrohr"],
    1,
    "Der Trophoblast differenziert sich in Zytotrophoblast und Synzytiotrophoblast und bildet zusammen mit mütterlichem Gewebe die Plazenta. Der Embryoblast (innere Zellmasse) wird zum Embryo.",
    "leicht",
    ["Plazenta", "Trophoblast"]
  ),
  q(
    "bio-pool-18-053",
    "bio-kap3",
    "Welche Funktion hat das Amnion?",
    [
      "Ernährung des Embryos über Blutgefäße",
      "Es umgibt den Embryo und bildet die Fruchtwasserhöhle als Schutz vor mechanischer Belastung",
      "Es bildet die Nabelschnurgefäße",
      "Es produziert Hormone für die Schwangerschaftserhaltung",
      "Es wird zur definitiven Plazenta",
    ],
    1,
    "Das Amnion umgibt den Embryo und begrenzt die Amnionhöhle (Fruchtwasserhöhle). Das Fruchtwasser schützt den Embryo vor Stößen, Austrocknung und Temperaturschwankungen und ermöglicht freie Bewegung.",
    "leicht",
    ["Embryonalhüllen", "Amnion"]
  ),
  q(
    "bio-pool-18-054",
    "bio-kap3",
    "Welche Aussage über die Plazenta trifft NICHT zu?",
    [
      "Sie ermöglicht den Gasaustausch zwischen mütterlichem und fetalem Blut",
      "Sie produziert hCG, Progesteron und Östrogen",
      "Mütterliches und fetales Blut mischen sich direkt in der Plazenta",
      "Sie dient als Plazentaschranke und hält viele Erreger zurück",
      "Sie wird nach der Geburt als Nachgeburt ausgestoßen",
    ],
    2,
    "Mütterliches und fetales Blut mischen sich NICHT direkt (C falsch). Die Plazenta funktioniert über den intervillösen Raum: Mütterliches Blut umspült die Chorionzotten, der Austausch erfolgt durch die Plazentaschranke (Diffusion, aktiver Transport).",
    "mittel",
    ["Plazenta", "FALSCH"]
  ),
  q(
    "bio-pool-18-055",
    "bio-kap3",
    "Welches Hormon wird von der Plazenta produziert und ist die Grundlage des Schwangerschaftstests?",
    [
      "LH (luteinisierendes Hormon)",
      "FSH (follikelstimulierendes Hormon)",
      "hCG (humanes Choriongonadotropin)",
      "Prolactin",
      "Oxytocin",
    ],
    2,
    "hCG (humanes Choriongonadotropin) wird ab der Implantation vom Trophoblasten/Plazenta sezerniert. Es erhält das Corpus luteum und damit die Progesteronproduktion in der Frühschwangerschaft. Schwangerschaftstests weisen hCG im Urin oder Blut nach.",
    "leicht",
    ["Plazenta", "hCG"]
  ),
  q(
    "bio-pool-18-056",
    "bio-kap3",
    "Welche der folgenden Embryonalhüllen bildet beim Säugetier die Grundlage für die fetale Harnblase?",
    ["Amnion", "Chorion", "Allantois", "Dottersack", "Dezidua"],
    2,
    "Die Allantois bildet beim Säugetier die Nabelschnurgefäße und wird embryologisch zur Grundlage des Urachus (verödeter Harngang) und der Harnblase. Beim Vogel dient sie als Harnspeicher und Gastauschorgan.",
    "schwer",
    ["Embryonalhüllen", "Allantois"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // Allgemeine Entwicklungsbiologie (4 Fragen)
  // ═══════════════════════════════════════════════════════════════
  q(
    "bio-pool-18-057",
    "bio-kap3",
    "Was versteht man unter Determination in der Entwicklungsbiologie?",
    [
      "Die sichtbare Differenzierung einer Zelle in einen bestimmten Zelltyp",
      "Die irreversible Festlegung des Entwicklungsschicksals einer Zelle, bevor morphologische Veränderungen sichtbar werden",
      "Die Fähigkeit einer Stammzelle, sich in alle Zelltypen zu differenzieren",
      "Die Wanderung von Zellen während der Gastrulation",
      "Die Induktion eines Organs durch Signale benachbarter Gewebe",
    ],
    1,
    "Determination: Das Entwicklungsschicksal einer Zelle wird irreversibel festgelegt — die Zelle ‚weiß', was sie werden wird, bevor sie morphologisch differenziert ist. Determination geht der sichtbaren Differenzierung voraus.",
    "mittel",
    ["Entwicklungsbiologie", "Determination"]
  ),
  q(
    "bio-pool-18-058",
    "bio-kap3",
    "Was bedeutet Totipotenz in der Embryologie?",
    [
      "Die Fähigkeit, sich nur in Zellen eines Keimblatts zu differenzieren",
      "Die Fähigkeit, sich nur in Blutzellen zu differenzieren",
      "Die Fähigkeit einer Zelle, einen kompletten Organismus inklusive extraembryonaler Gewebe zu bilden",
      "Die Fähigkeit, sich unbegrenzt zu teilen ohne Differenzierung",
      "Die Fähigkeit, tote Zellen zu ersetzen",
    ],
    2,
    "Totipotenz: Eine Zelle kann einen vollständigen Organismus inklusive aller extraembryonalen Strukturen (Plazenta, Fruchthäute) bilden. Beim Menschen sind nur die Zygote und die ersten Blastomeren (~bis 8-Zell-Stadium) totipotent.",
    "mittel",
    ["Entwicklungsbiologie", "Totipotenz"]
  ),
  q(
    "bio-pool-18-059",
    "bio-kap3",
    "Welcher Vorgang liegt vor, wenn ein Gewebe durch Signalmoleküle die Differenzierung eines benachbarten Gewebes steuert?",
    ["Apoptose", "Embryonale Induktion", "Gastrulation", "Implantation", "Furchung"],
    1,
    "Embryonale Induktion: Ein Gewebe (Induktor) sendet Signale (z. B. Wachstumsfaktoren), die in einem kompetenten Nachbargewebe eine bestimmte Differenzierung auslösen. Klassisches Beispiel: Chorda dorsalis induziert Neuralplatte.",
    "schwer",
    ["Entwicklungsbiologie", "Induktion"]
  ),
  q(
    "bio-pool-18-060",
    "bio-kap3",
    "Ein Teratogen wie Thalidomid (Contergan) verursacht Fehlbildungen hauptsächlich in einer bestimmten Phase der Schwangerschaft. Welche Phase ist besonders empfindlich?",
    [
      "Befruchtung (Tag 0–1)",
      "Furchungsphase (Tag 1–5)",
      "Embryonalperiode (Woche 3–8)",
      "Fetalperiode, da hier das Wachstum erfolgt",
      "Kurz vor der Geburt",
    ],
    2,
    "Die Embryonalperiode (Woche 3–8) ist die sensitivste Phase für Teratogene, da hier die Organanlagen gebildet werden (Organogenese). Thalidomid verursachte Extremitätenfehlbildungen, weil es die Gliedmaßenentwicklung in dieser kritischen Phase störte.",
    "schwer",
    ["Entwicklungsbiologie", "Teratogene", "klinisch"]
  ),
];
