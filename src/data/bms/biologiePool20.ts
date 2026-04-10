/**
 * Biologie BMS Pool 20 — 30 schwere Fragen (difficulty 3) im offiziellen MedAT-Stil.
 * Stoff: Kap1–Kap5, Schwerpunkt: Multi-Step-Reasoning, Anwendung, Berechnung.
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

export const biologiePool20: Question[] = [
  // ── Zellbiologie (bio-kap1): 5 Fragen ──
  q(
    "bio-pool-20-001",
    "bio-kap1",
    "Beim vollständigen aeroben Abbau eines Moleküls Glucose werden theoretisch maximal wie viele ATP gewonnen?",
    ["2 ATP", "4 ATP", "30–32 ATP", "36–38 ATP", "40 ATP"],
    2,
    "Nach aktueller Berechnung liefert die vollständige aerobe Oxidation von Glucose 30–32 ATP. Die Differenz ergibt sich aus dem Protonengradient-basierten Wirkungsgrad der ATP-Synthase und den Shuttle-Systemen (Malat-Aspartat vs. Glycerophosphat).",
    "schwer",
    ["Energiestoffwechsel", "ATP", "Glykolyse", "Citratzyklus"]
  ),
  q(
    "bio-pool-20-002",
    "bio-kap1",
    "Bei der Elektronentransportkette in der inneren Mitochondrienmembran pumpen die Komplexe I, III und IV Protonen in den Intermembranraum. Welche Aussage ist FALSCH?",
    [
      "Komplex II (Succinat-Dehydrogenase) pumpt keine Protonen über die Membran",
      "Der Protonengradient treibt die ATP-Synthase (Komplex V) an",
      "Cyanid hemmt Komplex IV und blockiert so die gesamte Atmungskette",
      "NADH liefert Elektronen an Komplex I, FADH₂ an Komplex II",
      "Komplex I überträgt Elektronen direkt auf Sauerstoff zu Wasser",
    ],
    4,
    "Komplex I überträgt Elektronen auf Ubichinon, nicht direkt auf Sauerstoff. Die Reduktion von O₂ zu H₂O erfolgt erst an Komplex IV (Cytochrom-c-Oxidase). Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["Atmungskette", "Mitochondrien", "Elektronentransport"]
  ),
  q(
    "bio-pool-20-003",
    "bio-kap1",
    "Ein Zellbiologe untersucht eine eukaryotische Zelle und findet ein Organell mit Doppelmembran, eigener ringförmiger DNA und 70S-Ribosomen. Welche Aussage zur Endosymbiontentheorie trifft am besten zu?",
    [
      "Dieses Organell ist ein Lysosom, das durch Einstülpung der Plasmamembran entstand",
      "Dieses Organell stammt ursprünglich von einem aufgenommenen aeroben Prokaryoten ab",
      "Die eigene DNA dieses Organells kodiert alle seine Proteine vollständig selbst",
      "70S-Ribosomen kommen ausschließlich in Chloroplasten vor",
      "Die Doppelmembran entsteht durch Fusion zweier ER-Zisternen während der Zellteilung",
    ],
    1,
    "Die beschriebenen Merkmale passen auf Mitochondrien. Laut Endosymbiontentheorie stammen sie von einem aufgenommenen aeroben Prokaryoten ab. Die meisten mitochondrialen Proteine werden jedoch vom Kerngenom kodiert und importiert.",
    "schwer",
    ["Endosymbiontentheorie", "Mitochondrien", "Evolution"]
  ),
  q(
    "bio-pool-20-004",
    "bio-kap1",
    "Welche der folgenden Aussagen über den Unterschied zwischen aktivem und passivem Transport ist FALSCH?",
    [
      "Osmose ist ein Beispiel für passiven Transport",
      "Die Na⁺/K⁺-ATPase transportiert 3 Na⁺ nach außen und 2 K⁺ nach innen pro ATP",
      "Erleichterte Diffusion benötigt zwar Carrier-Proteine, aber keine Energie in Form von ATP",
      "Sekundär aktiver Transport nutzt den Gradienten eines Ions, um ein anderes Molekül gegen seinen Gradienten zu transportieren",
      "Primär aktiver Transport erfolgt immer in Richtung des Konzentrationsgradienten",
    ],
    4,
    "Primär aktiver Transport erfolgt gerade GEGEN den Konzentrationsgradienten unter direktem ATP-Verbrauch. Das ist sein definierendes Merkmal. Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["Membrantransport", "Aktiver Transport", "Na/K-ATPase"]
  ),
  q(
    "bio-pool-20-005",
    "bio-kap1",
    "In einer Zelle wird ein Protein synthetisiert, das für die Sekretion bestimmt ist. Welche Reihenfolge der beteiligten Zellkompartimente ist korrekt?",
    [
      "Freie Ribosomen → Golgi-Apparat → Lysosom → Exozytose",
      "Raues ER → Golgi-Apparat → Sekretorische Vesikel → Exozytose",
      "Glattes ER → Golgi-Apparat → Endosom → Exozytose",
      "Zellkern → Glattes ER → Peroxisom → Plasmamembran",
      "Raues ER → Lysosom → Golgi-Apparat → Exozytose",
    ],
    1,
    "Sekretorische Proteine werden am rauen ER synthetisiert (Signalpeptid), im Golgi-Apparat modifiziert und sortiert, in sekretorische Vesikel verpackt und durch Exozytose freigesetzt. Die Reihenfolge ist entscheidend für die korrekte Prozessierung.",
    "schwer",
    ["Proteinbiosynthese", "Sekretorischer Weg", "ER", "Golgi"]
  ),

  // ── Humanbiologie (bio-kap2): 8 Fragen ──
  q(
    "bio-pool-20-006",
    "bio-kap2",
    "Ein Patient mit einer Blutgasanalyse zeigt: pH 7,28, pCO₂ 60 mmHg, HCO₃⁻ 27 mmol/l. Welche Störung liegt vor?",
    [
      "Metabolische Azidose mit respiratorischer Kompensation",
      "Respiratorische Azidose",
      "Metabolische Alkalose mit respiratorischer Kompensation",
      "Respiratorische Alkalose (dekompensiert)",
      "Gemischte metabolisch-respiratorische Alkalose",
    ],
    1,
    "pH < 7,35 = Azidose. pCO₂ erhöht (>45 mmHg) = respiratorische Ursache. HCO₃⁻ leicht erhöht = beginnende renale Kompensation, aber noch unvollständig (pH noch sauer). Typisch für COPD oder Ateminsuffizienz.",
    "schwer",
    ["Säure-Base-Haushalt", "Blutgasanalyse", "Atmung"]
  ),
  q(
    "bio-pool-20-008",
    "bio-kap2",
    "Bei der Erregungsweiterleitung am Herzen durchläuft der elektrische Impuls verschiedene Strukturen. Welche Reihenfolge ist korrekt?",
    [
      "AV-Knoten → Sinusknoten → His-Bündel → Purkinje-Fasern → Myokard",
      "Sinusknoten → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern",
      "His-Bündel → Sinusknoten → Purkinje-Fasern → AV-Knoten → Myokard",
      "Purkinje-Fasern → AV-Knoten → His-Bündel → Sinusknoten → Myokard",
      "Sinusknoten → His-Bündel → AV-Knoten → Purkinje-Fasern → Tawara-Schenkel",
    ],
    1,
    "Die korrekte Erregungsleitung: Sinusknoten (primärer Schrittmacher, 60–80/min) → AV-Knoten (Verzögerung) → His-Bündel → Tawara-Schenkel (rechter/linker) → Purkinje-Fasern → Ventrikelmyokard.",
    "schwer",
    ["Herz", "Erregungsleitung", "EKG"]
  ),
  q(
    "bio-pool-20-009",
    "bio-kap2",
    "Welche Aussage zur Skelettmuskelkontraktion ist FALSCH?",
    [
      "Calcium wird aus dem sarkoplasmatischen Retikulum freigesetzt und bindet an Troponin C",
      "ATP wird für das Lösen der Myosinköpfe vom Aktin benötigt",
      "Die I-Bande und die H-Zone werden bei der Kontraktion kürzer",
      "Die A-Bande wird bei der Kontraktion kürzer, weil sich die Myosinfilamente verkürzen",
      "Acetylcholin bindet an nikotinische Rezeptoren an der motorischen Endplatte",
    ],
    3,
    "Die A-Bande bleibt bei der Kontraktion GLEICH lang, da sich die Myosinfilamente nicht verkürzen. Nur die I-Bande und H-Zone werden kürzer, weil die Aktinfilamente über die Myosinfilamente gleiten (Gleitfilamenttheorie).",
    "schwer",
    ["Muskulatur", "Gleitfilamenttheorie", "Kontraktion"]
  ),
  q(
    "bio-pool-20-010",
    "bio-kap2",
    "Ein Patient hat einen Hämatokrit von 65 % und eine stark erhöhte Erythrozytenzahl. Welche Differenzialdiagnose ist am wahrscheinlichsten, wenn gleichzeitig der Erythropoietin-Spiegel erniedrigt ist?",
    [
      "Sekundäre Polyzythämie durch chronische Hypoxie",
      "Polycythaemia vera",
      "Eisenmangelanämie mit kompensatorischer EPO-Erhöhung",
      "Dehydratation mit relativem Hämatokrit-Anstieg",
      "Renale Polyzythämie durch EPO-produzierenden Tumor",
    ],
    1,
    "Bei Polycythaemia vera liegt eine autonome Proliferation der erythroiden Vorläuferzellen vor (JAK2-Mutation). EPO ist daher supprimiert (negative Rückkopplung). Bei sekundärer Polyzythämie oder renalem Tumor wäre EPO erhöht.",
    "schwer",
    ["Hämatologie", "Erythrozyten", "EPO"]
  ),
  q(
    "bio-pool-20-011",
    "bio-kap2",
    "Welche Aussage über die Leber und ihren Pfortaderkreislauf ist FALSCH?",
    [
      "Die Pfortader führt nährstoffreiches, aber sauerstoffarmes Blut aus dem Darm zur Leber",
      "Die Leber erhält ca. 75 % ihres Blutes über die Pfortader und 25 % über die A. hepatica",
      "Ammoniak wird in der Leber über den Harnstoffzyklus zu Harnstoff entgiftet",
      "Das Blut verlässt die Leber über die Pfortader zurück in die V. cava inferior",
      "In den Hepatozyten findet die Gluconeogenese und die Ketonkörperbildung statt",
    ],
    3,
    "Das Blut verlässt die Leber über die Lebervenen (Venae hepaticae), die in die V. cava inferior münden — NICHT über die Pfortader. Die Pfortader ist das zuführende Gefäß aus dem Splanchnikusgebiet.",
    "schwer",
    ["Leber", "Pfortader", "Stoffwechsel"]
  ),
  q(
    "bio-pool-20-012",
    "bio-kap2",
    "Welcher der folgenden Reflexe ist ein MONOsynaptischer Reflex?",
    [
      "Fremdreflex",
      "Patellarsehnenreflex (Kniesehnenreflex)",
      "Pupillenreflex bei Lichteinfall",
      "Hustenreflex bei Fremdkörper in der Trachea",
      "Kreuzextensorreflex",
    ],
    1,
    "Der Patellarsehnenreflex ist der klassische monosynaptische Eigenreflex: Afferente Ia-Faser → direkte Synapse auf Alpha-Motoneuron → Kontraktion des M. quadriceps. Alle anderen genannten Reflexe sind polysynaptisch.",
    "schwer",
    ["Neurologie", "Reflexe", "Motorik"]
  ),
  q(
    "bio-pool-20-013",
    "bio-kap2",
    "Ein Neugeborenes wird mit Gelbsucht (Ikterus neonatorum) eingeliefert. Welche Aussage zum Bilirubinstoffwechsel ist korrekt?",
    [
      "Indirektes (unkonjugiertes) Bilirubin ist wasserlöslich und wird renal ausgeschieden",
      "Direktes (konjugiertes) Bilirubin entsteht durch Glucuronidierung in der Leber und ist wasserlöslich",
      "Bilirubin entsteht aus dem Abbau von Myoglobin, nicht aus dem Hämoglobinabbau",
      "Die Blut-Hirn-Schranke ist für konjugiertes Bilirubin durchlässig, was zum Kernikterus führt",
      "UDP-Glucuronyltransferase ist beim Neugeborenen überaktiv und produziert zu viel Bilirubin",
    ],
    1,
    "Direktes (konjugiertes) Bilirubin wird in der Leber durch UDP-Glucuronyltransferase mit Glucuronsäure konjugiert und ist dadurch wasserlöslich. Beim Neugeborenen ist dieses Enzym noch unreif, weshalb indirektes Bilirubin akkumuliert. Unkonjugiertes Bilirubin ist lipophil und kann die Blut-Hirn-Schranke passieren (→ Kernikterus).",
    "schwer",
    ["Bilirubinstoffwechsel", "Leber", "Neonatologie"]
  ),

  // ── Genetik (bio-kap4): 5 Fragen ──
  q(
    "bio-pool-20-014",
    "bio-kap4",
    "Bei einem autosomal-rezessiven Erbgang sind beide Eltern heterozygot (Aa × Aa). Mit welcher Wahrscheinlichkeit ist ein phänotypisch gesundes Kind Träger (heterozygot)?",
    ["1/4 (25 %)", "1/2 (50 %)", "2/3", "3/4 (75 %)", "1/3"],
    2,
    "Aa × Aa → 1/4 AA, 2/4 Aa, 1/4 aa. Phänotypisch gesund sind AA + Aa = 3/4. Davon sind 2/4 Aa, also 2/3 der gesunden Kinder sind Träger. Bedingungswahrscheinlichkeit: P(Aa | gesund) = (2/4) / (3/4) = 2/3.",
    "schwer",
    ["Genetik", "Autosomal-rezessiv", "Wahrscheinlichkeit"]
  ),
  q(
    "bio-pool-20-015",
    "bio-kap4",
    "Ein Gen zeigt unvollständige Dominanz. Werden zwei heterozygote Organismen (Rr) gekreuzt, welches Phänotypenverhältnis ergibt sich in der F2?",
    ["3:1", "1:2:1", "1:1", "9:3:3:1 (dihybrid)", "2:1"],
    1,
    "Bei unvollständiger Dominanz zeigt der Heterozygote einen intermediären Phänotyp. Rr × Rr → 1 RR : 2 Rr : 1 rr, und alle drei Genotypen sind phänotypisch unterscheidbar → 1:2:1 Phänotypenverhältnis.",
    "schwer",
    ["Genetik", "Unvollständige Dominanz", "Phänotyp"]
  ),
  q(
    "bio-pool-20-016",
    "bio-kap4",
    "Welche Aussage zur Epigenetik ist FALSCH?",
    [
      "DNA-Methylierung an CpG-Inseln führt typischerweise zur Stilllegung der Genexpression",
      "Histonacetylierung lockert die Chromatinstruktur und fördert die Transkription",
      "Epigenetische Veränderungen verändern die DNA-Basensequenz direkt",
      "Genomisches Imprinting führt dazu, dass nur das maternale oder paternale Allel exprimiert wird",
      "MicroRNAs können die Genexpression posttranskriptionell regulieren",
    ],
    2,
    "Epigenetische Veränderungen (Methylierung, Histonmodifikation, ncRNA) beeinflussen die Genexpression, ohne die DNA-Basensequenz zu verändern. Das ist das Kernmerkmal der Epigenetik. Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["Epigenetik", "Genregulation", "DNA-Methylierung"]
  ),
  q(
    "bio-pool-20-017",
    "bio-kap4",
    "Bei der Meiose I kommt es zum Crossing-over. In welcher Phase findet dies statt, und welche Konsequenz hat es?",
    [
      "Metaphase I — Homologe ordnen sich an der Äquatorialplatte und tauschen Chromosomenstücke aus",
      "Prophase I (Pachytän)",
      "Anaphase I — Die Schwesterchromatiden werden getrennt und dabei rekombiniert",
      "Prophase II — Crossing-over findet erst in der zweiten meiotischen Teilung statt",
      "Telophase I — Rekombination erfolgt während der Kernhüllenbildung",
    ],
    1,
    "Crossing-over findet in der Prophase I statt, genauer im Pachytän-Stadium, wenn homologe Chromosomen als Bivalente gepaart sind. Nicht-Schwesterchromatiden tauschen Segmente aus, was die genetische Vielfalt durch Rekombination erhöht.",
    "schwer",
    ["Meiose", "Crossing-over", "Rekombination"]
  ),
  q(
    "bio-pool-20-018",
    "bio-kap4",
    "Eine Mutation führt zum Austausch einer Aminosäure in einem Protein (Missense-Mutation). Welche Aussage trifft zu?",
    [
      "Eine Missense-Mutation führt immer zu einem vollständigen Funktionsverlust des Proteins",
      "Aufgrund der Wobble-Hypothese betreffen Missense-Mutationen meist die dritte Codon-Position",
      "Eine konservative Missense-Mutation kann funktionell toleriert werden",
      "Missense-Mutationen sind identisch mit Nonsense-Mutationen",
      "Missense-Mutationen können nur in Exons auftreten und betreffen nie regulatorische Regionen",
    ],
    2,
    "Eine konservative Missense-Mutation tauscht eine Aminosäure gegen eine chemisch ähnliche aus und kann daher die Proteinfunktion erhalten. Nicht-konservative Missense-Mutationen können schwerwiegend sein. Wobble-Basenpaarung betrifft die dritte Position, die aber oft stille Mutationen ergibt.",
    "schwer",
    ["Mutationen", "Genetik", "Proteinbiosynthese"]
  ),

  // ── Entwicklung/Evolution (bio-kap3): 7 Fragen ──
  q(
    "bio-pool-20-019",
    "bio-kap3",
    "In einer Population mit 10.000 Individuen beträgt die Frequenz des rezessiven Allels (q) für eine Erbkrankheit 0,02. Wie viele Individuen sind nach Hardy-Weinberg homozygot erkrankt?",
    ["2", "4", "20", "200", "400"],
    1,
    "Hardy-Weinberg: q² = Frequenz homozygoter Erkrankter. q = 0,02 → q² = 0,0004. 0,0004 × 10.000 = 4 Individuen. Die HW-Gleichung lautet p² + 2pq + q² = 1.",
    "schwer",
    ["Hardy-Weinberg", "Populationsgenetik", "Berechnung"]
  ),
  q(
    "bio-pool-20-020",
    "bio-kap3",
    "Welche der folgenden Situationen verletzt das Hardy-Weinberg-Gleichgewicht NICHT?",
    [
      "Gerichtete Selektion gegen den homozygot rezessiven Phänotyp",
      "Zufällige Paarung (Panmixie) in einer großen Population ohne Mutation, Selektion oder Migration",
      "Genfluss durch Immigration von Individuen mit anderen Allelfrequenzen",
      "Genetischer Flaschenhals durch eine Naturkatastrophe",
      "Assortative Paarung",
    ],
    1,
    "Das Hardy-Weinberg-Gleichgewicht setzt voraus: große Population, Panmixie, keine Selektion, keine Mutation, keine Migration. Nur Option B erfüllt alle diese Bedingungen. Alle anderen Optionen verletzen mindestens eine Voraussetzung.",
    "schwer",
    ["Hardy-Weinberg", "Populationsgenetik", "Evolution"]
  ),
  q(
    "bio-pool-20-021",
    "bio-kap3",
    "Was unterscheidet den Gründereffekt vom genetischen Flaschenhals?",
    [
      "Beim Flaschenhals wandert eine kleine Gruppe aus, beim Gründereffekt wird die Population dezimiert",
      "Beim Gründereffekt besiedelt eine kleine Gründerpopulation ein neues Habitat, beim Flaschenhals schrumpft die Gesamtpopulation stark",
      "Der Gründereffekt betrifft nur Pflanzen, der Flaschenhals nur Tiere",
      "Der Gründereffekt verändert die Allelfrequenzen nicht, der Flaschenhals schon",
      "Beide Effekte erhöhen die genetische Diversität in der Population",
    ],
    1,
    "Gründereffekt: Kleine Teilpopulation wandert aus und gründet eine neue Population (z. B. Inselbesiedlung). Flaschenhals: Die gesamte Population wird durch ein Ereignis (Katastrophe) dezimiert. Beide sind Formen der genetischen Drift und reduzieren die genetische Diversität.",
    "schwer",
    ["Gründereffekt", "Flaschenhalseffekt", "Genetische Drift"]
  ),
  q(
    "bio-pool-20-022",
    "bio-kap3",
    "Welche Form der Selektion stabilisiert den Mittelwert eines Merkmals und reduziert die Varianz?",
    [
      "Disruptive (aufspaltende) Selektion",
      "Gerichtete (direktionale) Selektion",
      "Stabilisierende Selektion",
      "Sexuelle Selektion",
      "Frequenzabhängige Selektion",
    ],
    2,
    "Stabilisierende Selektion bevorzugt den Durchschnittsphänotyp und selektiert gegen Extreme. Beispiel: Geburtsgewicht beim Menschen. Sie reduziert die phänotypische Varianz, verschiebt aber nicht den Mittelwert.",
    "schwer",
    ["Selektion", "Evolution", "Populationsgenetik"]
  ),
  q(
    "bio-pool-20-023",
    "bio-kap3",
    "Welche Aussage zur Gastrulation ist korrekt?",
    [
      "Bei der Gastrulation entstehen die drei Keimblätter: Ektoderm, Mesoderm und Endoderm",
      "Die Gastrulation findet erst nach der Organogenese statt",
      "Aus dem Ektoderm entwickelt sich ausschließlich die Haut, nicht das Nervensystem",
      "Das Mesoderm bildet die Darmschleimhaut und die Leber",
      "Bei der Gastrulation entsteht zunächst das Mesoderm, dann erst Ekto- und Endoderm",
    ],
    0,
    "Die Gastrulation ist der Prozess der Keimblattbildung (Ektoderm, Mesoderm, Endoderm) aus der Blastula. Sie findet VOR der Organogenese statt. Aus dem Ektoderm entstehen Haut UND Nervensystem (Neurulation). Das Endoderm bildet die Darmschleimhaut.",
    "schwer",
    ["Embryologie", "Gastrulation", "Keimblätter"]
  ),
  q(
    "bio-pool-20-024",
    "bio-kap3",
    "Welche Aussage zur allopatrischen Artbildung ist FALSCH?",
    [
      "Geografische Isolation ist die Voraussetzung für allopatrische Artbildung",
      "Nach der Isolation kommt es zu unabhängiger genetischer Veränderung in den Teilpopulationen",
      "Reproduktive Isolation kann als Folge der Divergenz entstehen (postzygotische Barrieren)",
      "Allopatrische Artbildung erfordert zwingend gerichtete Selektion in beiden Teilpopulationen",
      "Bei erneuter Kontaktnahme kann es zu einem Verstärkungseffekt kommen (Reinforcement)",
    ],
    3,
    "Allopatrische Artbildung erfordert NICHT zwingend gerichtete Selektion. Auch genetische Drift allein kann in den isolierten Teilpopulationen zu ausreichender Divergenz führen. Selektion kann beteiligt sein, ist aber keine notwendige Bedingung.",
    "schwer",
    ["Artbildung", "Allopatrie", "Speziation"]
  ),
  q(
    "bio-pool-20-025",
    "bio-kap3",
    "Welches Keimblatt ist der Ursprung des Herzens und der Nieren?",
    ["Ektoderm", "Endoderm", "Mesoderm", "Trophoblast", "Neuralleiste"],
    2,
    "Das Mesoderm (mittleres Keimblatt) bildet u. a. Herz, Blutgefäße, Nieren, Skelett, Muskulatur und Bindegewebe. Ektoderm → Haut, Nervensystem. Endoderm → Verdauungstrakt, Lunge, Leber, Pankreas.",
    "schwer",
    ["Keimblätter", "Mesoderm", "Embryologie"]
  ),

  // ── Ökologie/Immunologie (bio-kap5): 5 Fragen ──
  q(
    "bio-pool-20-026",
    "bio-kap5",
    "Welche Aussage zur klonalen Selektion von B-Lymphozyten ist FALSCH?",
    [
      "Jeder naive B-Lymphozyt trägt einen einzigartigen B-Zell-Rezeptor (membranständiges IgM/IgD)",
      "Bei Antigenkontakt wird der passende B-Zell-Klon selektiv aktiviert und vermehrt sich",
      "Aus aktivierten B-Zellen entstehen Plasmazellen (Antikörpersekretion)",
      "Die klonale Selektion bewirkt, dass ein B-Lymphozyt mehrere verschiedene Antikörperspezifitäten gleichzeitig produziert",
      "Die somatische Hypermutation in Keimzentren erhöht die Antikörperaffinität (Affinitätsreifung)",
    ],
    3,
    "Ein B-Lymphozyt produziert Antikörper nur EINER Spezifität (monoklonal). Das ist ein Grundprinzip der klonalen Selektion nach Burnet. Jede B-Zelle hat durch V(D)J-Rekombination einen einzigartigen Rezeptor, und dieser bestimmt die Spezifität aller von diesem Klon produzierten Antikörper.",
    "schwer",
    ["Immunologie", "Klonale Selektion", "B-Zellen"]
  ),
  q(
    "bio-pool-20-027",
    "bio-kap5",
    "In einem Ökosystem beträgt die Nettoprimärproduktion 10.000 kJ/m²/Jahr. Gemäß der 10-%-Regel: Wie viel Energie steht Konsumenten dritter Ordnung (Tertiärkonsumenten) zur Verfügung?",
    ["1.000 kJ/m²/Jahr", "100 kJ/m²/Jahr", "10 kJ/m²/Jahr", "1 kJ/m²/Jahr", "0,1 kJ/m²/Jahr"],
    2,
    "10-%-Regel (Lindeman): Je trophische Stufe werden ca. 10 % der Energie weitergegeben. Produzenten: 10.000 → Primärkonsumenten: 1.000 → Sekundärkonsumenten: 100 → Tertiärkonsumenten: 10 kJ/m²/Jahr.",
    "schwer",
    ["Ökologie", "Energiefluss", "Trophische Ebenen"]
  ),
  q(
    "bio-pool-20-028",
    "bio-kap5",
    "Welcher Immunglobulin-Isotyp kann als einziger die Plazentaschranke überwinden und dem Neugeborenen passiven Nestschutz verleihen?",
    ["IgA", "IgM", "IgG", "IgE", "IgD"],
    2,
    "IgG ist das einzige Immunglobulin, das die Plazenta passieren kann. Es verleiht dem Neugeborenen passiven Nestschutz für die ersten Lebensmonate. IgA wird über die Muttermilch übertragen (Schleimhautschutz).",
    "schwer",
    ["Immunologie", "Immunglobuline", "IgG"]
  ),
  q(
    "bio-pool-20-029",
    "bio-kap5",
    "Bei einer Autoimmunerkrankung greift das Immunsystem körpereigene Strukturen an. Welcher Mechanismus der Selbsttoleranz ist bei Autoimmunerkrankungen typischerweise gestört?",
    [
      "Klonale Deletion autoreaktiver T-Zellen im Thymus",
      "Komplementaktivierung über den alternativen Weg",
      "Antigenpräsentation über MHC-II auf Erythrozyten",
      "Opsonisierung durch C-reaktives Protein",
      "Phagozytose durch neutrophile Granulozyten",
    ],
    0,
    "Zentrale Toleranz: Im Thymus werden T-Zellen, die stark auf Selbstantigene reagieren, durch negative Selektion (klonale Deletion) eliminiert. Bei Autoimmunerkrankungen ist dieser Mechanismus und/oder die periphere Toleranz gestört.",
    "schwer",
    ["Immunologie", "Autoimmunität", "Toleranz"]
  ),
  q(
    "bio-pool-20-030",
    "bio-kap5",
    "Welche Aussage zur kompetitiven Ausschlusspraxis (Gause-Prinzip) ist korrekt?",
    [
      "Zwei Arten mit identischer ökologischer Nische können dauerhaft am selben Ort koexistieren",
      "Zwei Arten mit identischer ökologischer Nische können nicht dauerhaft koexistieren — eine wird verdrängt",
      "Kompetitiver Ausschluss tritt nur bei Prädator-Beute-Beziehungen auf",
      "Das Gause-Prinzip gilt nur für pflanzliche Organismen in terrestrischen Ökosystemen",
      "Nischendifferenzierung verhindert Koexistenz und führt immer zum Ausschluss beider Arten",
    ],
    1,
    "Das Gause-Prinzip (kompetitiver Ausschluss): Zwei Arten mit identischer ökologischer Nische können nicht dauerhaft koexistieren. Eine Art wird die andere verdrängen. Nischendifferenzierung ermöglicht hingegen Koexistenz.",
    "schwer",
    ["Ökologie", "Kompetitiver Ausschluss", "Gause-Prinzip"]
  ),
];
