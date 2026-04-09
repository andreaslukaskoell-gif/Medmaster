/**
 * Biology BMS pool 22 — 50 genuinely HARD questions (schwer).
 * Transfer, multi-step reasoning, cross-chapter integration, subtle FALSCH.
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "schwer",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "biologie",
    chapter,
    text,
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool22: Question[] = [
  // ── Zellbiologie (bio-kap1): 10 Fragen ──

  q(
    "bio-pool-hard-001",
    "bio-kap1",
    "Ein Enzym der Atmungskette wird durch Cyanid gehemmt. Welche UNMITTELBARE Folge hat dies für die Zelle?",
    [
      "NADH kann nicht mehr oxidiert werden",
      "Die Glykolyse stoppt sofort",
      "Die ATP-Synthase dreht sich rückwärts",
      "Der Citratzyklus beschleunigt kompensatorisch",
      "Die Laktatproduktion sinkt",
    ],
    0,
    "Cyanid hemmt Komplex IV der Atmungskette. Dadurch staut sich der Elektronenfluss, und NADH kann nicht mehr zu NAD⁺ reoxidiert werden. B ist falsch, weil die Glykolyse kein O₂ benötigt und zunächst weiterläuft. C (Rückwärtslauf der ATP-Synthase) kann sekundär auftreten, ist aber nicht die unmittelbare Folge. D ist falsch, da der Citratzyklus durch NAD⁺-Mangel ebenfalls gehemmt wird. E ist falsch, weil die Laktatproduktion sogar ansteigt (Glykolyse → Laktat als Ausweg).",
    "schwer",
    ["atmungskette", "cyanid", "komplex-iv", "transfer"]
  ),

  q(
    "bio-pool-hard-002",
    "bio-kap1",
    "Eine Zelle wird in eine hypotone Lösung gebracht. Die Na⁺/K⁺-ATPase wird gleichzeitig durch Ouabain blockiert. Was geschieht?",
    [
      "Die Zelle schwillt stärker an als ohne Ouabain",
      "Die Zelle schrumpft, weil Na⁺ die Zelle verlässt",
      "Es ändert sich nichts, da die ATPase für das Volumen irrelevant ist",
      "Die Zelle schwillt gleich stark an wie ohne Ouabain",
      "Die Zelle platzt sofort durch Kalium-Einstrom",
    ],
    0,
    "In hypotoner Lösung strömt Wasser osmotisch ein. Normalerweise pumpt die Na⁺/K⁺-ATPase 3 Na⁺ hinaus und 2 K⁺ hinein, wodurch sie den intrazellulären osmotischen Druck senkt und die Zelle vor übermäßigem Schwellen schützt. Bei Ouabain-Blockade fällt diese Regulation weg → stärkeres Anschwellen. B ist falsch, weil Na⁺ passiv eher einströmt. C ist falsch, die ATPase ist zentral für die Volumenregulation. D unterschätzt den Beitrag der Pumpe. E ist falsch, K⁺-Einstrom ist nicht die Ursache des Platzens.",
    "schwer",
    ["membrantransport", "ouabain", "osmose", "transfer"]
  ),

  q(
    "bio-pool-hard-003",
    "bio-kap1",
    "Welche der folgenden Aussagen über Mitochondrien ist FALSCH?",
    [
      "Sie besitzen eine eigene, ringförmige DNA",
      "Sie werden maternal vererbt",
      "Ihre innere Membran ist stark gefaltet (Cristae)",
      "Sie synthetisieren alle ihre Proteine selbst",
      "Sie entstehen durch Teilung vorhandener Mitochondrien",
    ],
    3,
    "D ist falsch: Mitochondrien kodieren nur ca. 13 Proteine selbst; die große Mehrheit der mitochondrialen Proteine wird im Zellkern kodiert und nach Translation im Cytoplasma importiert. A ist richtig (mtDNA ist ringförmig). B ist richtig (maternale Vererbung). C ist richtig (Cristae vergrößern die Oberfläche). E ist richtig (Mitochondrien entstehen durch Zweiteilung bestehender Mitochondrien).",
    "schwer",
    ["mitochondrien", "falsch-aussage", "endosymbiontentheorie"]
  ),

  q(
    "bio-pool-hard-004",
    "bio-kap1",
    "Ein Pharmakon hemmt selektiv die V-ATPase (Protonenpumpe) in den Lysosomen. Welche Zellfunktion ist am DIREKTESTEN betroffen?",
    [
      "Der intrazelluläre Proteinabbau durch lysosomale Hydrolasen",
      "Die oxidative Phosphorylierung",
      "Die Proteinbiosynthese am rauen ER",
      "Der Vesikeltransport vom ER zum Golgi",
      "Die Zellteilung in der Mitose",
    ],
    0,
    "V-ATPasen halten den sauren pH (~4,5) in Lysosomen aufrecht. Ohne sauren pH sind die lysosomalen Hydrolasen (Proteasen, Lipasen etc.) inaktiv → Proteinabbau gestört. B betrifft Mitochondrien, nicht Lysosomen. C und D betreffen ER/Golgi unabhängig vom lysosomalen pH. E ist nicht direkt von lysosomaler Ansäuerung abhängig.",
    "schwer",
    ["lysosomen", "v-atpase", "proteinabbau", "transfer"]
  ),

  q(
    "bio-pool-hard-005",
    "bio-kap1",
    "Beim sekundär aktiven Transport von Glucose in Darmepithelzellen (SGLT1) wird Glucose GEGEN ihren Konzentrationsgradienten transportiert. Woher stammt die Energie?",
    [
      "Aus dem Na⁺-Gradienten, der durch die Na⁺/K⁺-ATPase aufrechterhalten wird",
      "Aus der direkten ATP-Hydrolyse durch SGLT1",
      "Aus dem K⁺-Gradienten über die apikale Membran",
      "Aus dem Protonengradienten der Atmungskette",
      "Aus der Substratkettenphosphorylierung der Glykolyse",
    ],
    0,
    "SGLT1 ist ein Na⁺/Glucose-Symporter. Na⁺ strömt entlang seines Gradienten (extrazellulär hoch) in die Zelle und nimmt Glucose mit. Dieser Na⁺-Gradient wird primär durch die basolaterale Na⁺/K⁺-ATPase aufrechterhalten. B ist falsch, weil SGLT1 kein ATP hydrolysiert (sekundär aktiv, nicht primär aktiv). C, D und E beschreiben keine relevanten Energiequellen für diesen Transporter.",
    "schwer",
    ["membrantransport", "sglt1", "sekundaer-aktiv", "transfer"]
  ),

  q(
    "bio-pool-hard-006",
    "bio-kap1",
    "Colchicin verhindert die Polymerisation von Tubulin. Welcher Vorgang in der Zelle ist dadurch am stärksten beeinträchtigt?",
    [
      "Die Trennung der Chromosomen in der Anaphase",
      "Die DNA-Replikation in der S-Phase",
      "Die Transkription von mRNA im Zellkern",
      "Die Translation am rauen ER",
      "Die Zytokinese durch den kontraktilen Ring",
    ],
    0,
    "Colchicin hemmt die Mikrotubulibildung. In der Mitose wird der Spindelapparat aus Mikrotubuli aufgebaut, der die Chromosomen in der Anaphase trennt. Ohne Spindel keine Chromosomentrennung. B (DNA-Replikation) ist unabhängig von Mikrotubuli. C und D betreffen Transkription/Translation (keine Mikrotubuli nötig). E (Zytokinese) nutzt Aktin-Myosin-Filamente, nicht Mikrotubuli.",
    "schwer",
    ["mikrotubuli", "colchicin", "mitose", "transfer"]
  ),

  q(
    "bio-pool-hard-007",
    "bio-kap1",
    "In einer Zelle wird durch ein Signalmolekül die Adenylatcyclase aktiviert. Welche Kaskade folgt UNMITTELBAR?",
    [
      "ATP → cAMP → Aktivierung der Proteinkinase A",
      "GTP → cGMP → Aktivierung der Proteinkinase G",
      "PIP₂ → IP₃ + DAG → Ca²⁺-Freisetzung",
      "Ras → Raf → MEK → ERK",
      "JAK → STAT → Genexpression",
    ],
    0,
    "Adenylatcyclase wandelt ATP in cAMP um; cAMP aktiviert Proteinkinase A (PKA). B beschreibt den Guanylatzyclase-Weg (NO-Signalweg). C beschreibt den Phospholipase-C-Weg. D ist die MAP-Kinase-Kaskade (Rezeptortyrosinkinasen). E ist der JAK-STAT-Weg (Zytokinrezeptoren). Alle sind real existierende Signalwege, aber nur A folgt auf Adenylatcyclase-Aktivierung.",
    "schwer",
    ["signaltransduktion", "camp", "adenylatcyclase", "transfer"]
  ),

  q(
    "bio-pool-hard-008",
    "bio-kap1",
    "Welche der folgenden Aussagen über Aquaporine ist FALSCH?",
    [
      "Sie ermöglichen den Wassertransport entlang des osmotischen Gradienten",
      "Sie transportieren auch Protonen (H⁺) zusammen mit Wasser",
      "Sie kommen in Nierentubuluszellen besonders zahlreich vor",
      "ADH (Vasopressin) steigert den Einbau von Aquaporin-2 in die Membran",
      "Sie bilden tetramere Komplexe in der Membran",
    ],
    1,
    "B ist falsch: Aquaporine haben einen Mechanismus (positiv geladene Arginin-Reste im Kanal), der Protonen strikt ausschließt – trotz Grotthuss-Mechanismus. Dies ist essenziell für die Aufrechterhaltung von pH-Gradienten. A ist richtig (passiver Wassertransport). C ist richtig (Sammelrohr). D ist richtig (AQP2-Shuttle). E ist richtig (4 Monomere bilden je einen Kanal).",
    "schwer",
    ["aquaporine", "membrantransport", "falsch-aussage"]
  ),

  q(
    "bio-pool-hard-009",
    "bio-kap1",
    "Durch Entkopplersubstanzen (z. B. 2,4-Dinitrophenol) wird die innere Mitochondrienmembran für Protonen durchlässig. Welche Konsequenz ergibt sich?",
    [
      "O₂-Verbrauch steigt, aber ATP-Synthese sinkt",
      "O₂-Verbrauch sinkt und ATP-Synthese steigt",
      "Sowohl O₂-Verbrauch als auch ATP-Synthese steigen",
      "Der Protonengradient wird verstärkt",
      "NADH-Produktion im Citratzyklus wird gehemmt",
    ],
    0,
    "Entkoppler dissipieren den Protonengradienten, indem H⁺ ohne ATP-Synthase zurückfließt. Die Atmungskette versucht kompensatorisch, den Gradienten wiederherzustellen → erhöhter O₂-Verbrauch. Da H⁺ aber am Komplex V vorbeifließt, wird weniger ATP produziert → Wärmefreisetzung. B ist das Gegenteil. C ist falsch (ATP sinkt). D ist falsch (Gradient wird abgebaut). E ist falsch (Citratzyklus läuft sogar schneller, weil mehr NAD⁺ frei wird).",
    "schwer",
    ["atmungskette", "entkopplung", "dnp", "transfer"]
  ),

  q(
    "bio-pool-hard-010",
    "bio-kap1",
    "Eine Mutation im Gen für Clathrin führt zu einem nicht-funktionalen Protein. Welcher zelluläre Prozess ist am stärksten betroffen?",
    [
      "Die rezeptorvermittelte Endozytose",
      "Die Exozytose von Neurotransmittern",
      "Die Zellteilung in der Telophase",
      "Die Signalweiterleitung durch Gap Junctions",
      "Die passive Diffusion von O₂ durch die Membran",
    ],
    0,
    "Clathrin bildet die Hülle um Vesikel bei der rezeptorvermittelten Endozytose (Clathrin-coated pits). Ohne funktionales Clathrin können z. B. LDL-Rezeptoren nicht internalisiert werden. B (Exozytose) nutzt v. a. SNARE-Proteine, nicht Clathrin. C (Telophase) betrifft Kernhülle/Zytokinese. D (Gap Junctions) sind Connexin-Kanäle. E (O₂-Diffusion) ist passiv und braucht keine Proteine.",
    "schwer",
    ["endozytose", "clathrin", "membrantransport", "transfer"]
  ),

  // ── Humanbiologie (bio-kap2): 10 Fragen ──

  q(
    "bio-pool-hard-011",
    "bio-kap2",
    "Ein Patient hat einen erhöhten Aldosteron-Spiegel. Welche Kombination von Elektrolytveränderungen im Blut ist am wahrscheinlichsten?",
    [
      "Na⁺ erhöht, K⁺ erniedrigt",
      "Na⁺ erniedrigt, K⁺ erhöht",
      "Na⁺ und K⁺ beide erhöht",
      "Na⁺ und K⁺ beide erniedrigt",
      "Na⁺ unverändert, K⁺ erhöht",
    ],
    0,
    "Aldosteron fördert in der Niere (distaler Tubulus/Sammelrohr) die Na⁺-Rückresorption und die K⁺-Sekretion. Erhöhtes Aldosteron → mehr Na⁺ im Blut, weniger K⁺ (Hypokaliämie). B ist das Gegenteil (passt zu Aldosteron-Mangel). C, D und E stimmen nicht mit dem Wirkmechanismus überein.",
    "schwer",
    ["aldosteron", "elektrolyte", "niere", "regelkreis"]
  ),

  q(
    "bio-pool-hard-012",
    "bio-kap2",
    "Bei einem Patienten ist die Surfactant-Produktion in den Typ-II-Pneumozyten gestört. Welche Folge tritt ein?",
    [
      "Die Alveolen kollabieren beim Ausatmen (Atelektase)",
      "Die Atemwegsresistance sinkt",
      "Das Residualvolumen nimmt ab",
      "Der Gasaustausch verbessert sich durch engeren Kontakt",
      "Die Atemfrequenz nimmt ab",
    ],
    0,
    "Surfactant senkt die Oberflächenspannung der Alveolen und verhindert deren Kollaps (Atelektase). Ohne Surfactant → Alveolarkollaps → verminderte Gasaustauschfläche → Atemnot. B ist falsch (Resistance steigt durch Atelektase). C ist falsch (Residualvolumen kann sich verschieben, aber Kollaps ist das Hauptproblem). D ist falsch (weniger Fläche → schlechterer Austausch). E ist falsch (Kompensation → Frequenz steigt).",
    "schwer",
    ["lunge", "surfactant", "atelektase", "transfer"]
  ),

  q(
    "bio-pool-hard-013",
    "bio-kap2",
    "Welche der folgenden Aussagen über den Barorezeptor-Reflex ist FALSCH?",
    [
      "Barorezeptoren liegen im Carotissinus und Aortenbogen",
      "Bei Blutdruckanstieg steigt die Afferenzfrequenz",
      "Der Reflex führt bei Blutdruckanstieg zur Sympathikusaktivierung",
      "Der Reflexbogen verläuft über das Kreislaufzentrum in der Medulla oblongata",
      "Bei Blutdruckabfall steigt die Herzfrequenz reflektorisch",
    ],
    2,
    "C ist falsch: Bei Blutdruckanstieg registrieren die Barorezeptoren die Dehnung → erhöhte Afferenzfrequenz → das Kreislaufzentrum hemmt den Sympathikus und aktiviert den Parasympathikus → Herzfrequenz und Gefäßwiderstand sinken. Die Sympathikusaktivierung erfolgt bei Blutdruckabfall, nicht bei -anstieg. A, B, D und E sind korrekt.",
    "schwer",
    ["barorezeptor", "blutdruck", "regelkreis", "falsch-aussage"]
  ),

  q(
    "bio-pool-hard-014",
    "bio-kap2",
    "Ein Patient kann nach einer Hirnstammschädigung die rechte Körperhälfte nicht mehr willkürlich bewegen. Auf welcher Seite liegt die Läsion der Pyramidenbahn am wahrscheinlichsten?",
    [
      "Links, oberhalb der Pyramidenkreuzung",
      "Rechts, oberhalb der Pyramidenkreuzung",
      "Links, unterhalb der Pyramidenkreuzung",
      "Rechts, unterhalb der Pyramidenkreuzung",
      "Beidseitig auf Höhe der Pyramidenkreuzung",
    ],
    0,
    "Die Pyramidenbahn kreuzt in der Medulla oblongata (Pyramidenkreuzung). Eine Läsion OBERHALB der Kreuzung auf der LINKEN Seite führt zur kontralateralen Lähmung (rechte Körperhälfte). B (rechts oberhalb) würde die linke Seite lähmen. C und D (unterhalb) würden die ipsilaterale Seite betreffen. E ist unwahrscheinlich bei einseitiger Symptomatik.",
    "schwer",
    ["pyramidenbahn", "kreuzung", "motorik", "transfer"]
  ),

  q(
    "bio-pool-hard-015",
    "bio-kap2",
    "Eine Person hyperventiliert. Welche unmittelbare Veränderung im Blut tritt ein?",
    [
      "pCO₂ sinkt, pH steigt (respiratorische Alkalose)",
      "pCO₂ steigt, pH sinkt (respiratorische Azidose)",
      "pO₂ sinkt, pH sinkt",
      "pCO₂ und pO₂ bleiben gleich, nur pH ändert sich",
      "Bicarbonat steigt kompensatorisch sofort an",
    ],
    0,
    "Hyperventilation → vermehrtes Abatmen von CO₂ → pCO₂ sinkt → das Gleichgewicht CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ verschiebt sich nach links → weniger H⁺ → pH steigt = respiratorische Alkalose. B ist das Gegenteil (Hypoventilation). C ist falsch (pO₂ ändert sich kaum oder steigt leicht). D ist falsch (pCO₂ sinkt definitiv). E ist falsch (renale Kompensation dauert Stunden bis Tage, nicht sofort).",
    "schwer",
    ["hyperventilation", "alkalose", "blutgas", "transfer"]
  ),

  q(
    "bio-pool-hard-016",
    "bio-kap2",
    "Bei der Blutgerinnung wird Prothrombin durch Faktor Xa in Thrombin umgewandelt. Welche Funktion hat Thrombin NICHT?",
    [
      "Aktivierung von Fibrinogen zu Fibrin",
      "Aktivierung von Faktor XIII (Fibrinstabilisierung)",
      "Positive Rückkopplung durch Aktivierung von Faktor V und VIII",
      "Direkte Auflösung des Fibrinnetzes (Fibrinolyse)",
      "Aktivierung von Thrombozyten",
    ],
    3,
    "D ist falsch: Thrombin baut Fibrin nicht ab – das macht Plasmin (Fibrinolyse). Thrombin hat sogar eine pro-koagulatorische Wirkung. A ist richtig (Hauptfunktion). B ist richtig (Quervernetzung). C ist richtig (Verstärkungsschleife). E ist richtig (Thrombin aktiviert Thrombozyten über PAR-Rezeptoren).",
    "schwer",
    ["gerinnung", "thrombin", "falsch-aussage"]
  ),

  q(
    "bio-pool-hard-017",
    "bio-kap2",
    "Ein Hormon wirkt über intrazelluläre Rezeptoren und beeinflusst direkt die Genexpression. Welches Hormon passt am besten?",
    [
      "Cortisol",
      "Adrenalin",
      "Insulin",
      "ADH (Vasopressin)",
      "Histamin",
    ],
    0,
    "Cortisol ist ein Steroidhormon (lipophil), das die Membran passiert und an intrazelluläre (zytosolische) Rezeptoren bindet. Der Hormon-Rezeptor-Komplex transloziert in den Kern und reguliert die Transkription. B (Adrenalin) bindet an membranständige Adrenozeptoren (G-Protein-gekoppelt). C (Insulin) bindet an Rezeptortyrosinkinase. D (ADH) an V1/V2-Rezeptoren (membranständig). E (Histamin) an H1-H4-Rezeptoren (membranständig).",
    "schwer",
    ["hormone", "steroidhormon", "cortisol", "transfer"]
  ),

  q(
    "bio-pool-hard-018",
    "bio-kap2",
    "Welche Aussage über den Sauerstofftransport im Blut trifft zu?",
    [
      "Der Bohr-Effekt beschreibt die verminderte O₂-Affinität bei niedrigem pH",
      "O₂ wird hauptsächlich physikalisch gelöst transportiert",
      "Fetales Hämoglobin (HbF) hat eine niedrigere O₂-Affinität als adultes HbA",
      "CO₂ wird ausschließlich als Bicarbonat transportiert",
      "Myoglobin hat eine sigmoide Bindungskurve wie Hämoglobin",
    ],
    0,
    "A ist korrekt: Der Bohr-Effekt besagt, dass saurer pH die O₂-Affinität von Hämoglobin senkt (Rechtsverschiebung der Bindungskurve → leichtere O₂-Abgabe im Gewebe). B ist falsch (98 % an Hb gebunden). C ist falsch (HbF hat HÖHERE Affinität, daher Plazentaaustausch möglich). D ist falsch (CO₂ wird auch als Carbaminoverbindung und physikalisch gelöst transportiert). E ist falsch (Myoglobin hat eine hyperbolische Kurve, kein kooperatives Bindungsverhalten).",
    "schwer",
    ["sauerstoff", "bohr-effekt", "haemoglobin", "transfer"]
  ),

  q(
    "bio-pool-hard-019",
    "bio-kap2",
    "Welche Reihenfolge beschreibt den Erregungsleitungsweg im Herzen korrekt?",
    [
      "Sinusknoten → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern",
      "AV-Knoten → Sinusknoten → His-Bündel → Purkinje-Fasern → Tawara-Schenkel",
      "His-Bündel → Sinusknoten → AV-Knoten → Tawara-Schenkel → Purkinje-Fasern",
      "Sinusknoten → His-Bündel → AV-Knoten → Purkinje-Fasern → Tawara-Schenkel",
      "Purkinje-Fasern → Tawara-Schenkel → His-Bündel → AV-Knoten → Sinusknoten",
    ],
    0,
    "Die korrekte Reihenfolge ist: Sinusknoten (primärer Schrittmacher) → AV-Knoten (Verzögerung für Vorhofentleerung) → His-Bündel → Tawara-Schenkel (rechts/links) → Purkinje-Fasern (Ventrikelerregung). B beginnt falsch mit dem AV-Knoten. C beginnt mit dem His-Bündel. D vertauscht AV-Knoten und His-Bündel. E ist die umgekehrte Reihenfolge.",
    "schwer",
    ["herz", "erregungsleitung", "reihenfolge"]
  ),

  q(
    "bio-pool-hard-020",
    "bio-kap2",
    "Bei einer Mahlzeit steigen Blutglucose und Insulin an. Welche Stoffwechselwirkung hat Insulin in der Leber NICHT?",
    [
      "Stimulation der Glykogensynthese",
      "Hemmung der Gluconeogenese",
      "Stimulation der Lipogenese",
      "Stimulation der Glykogenolyse",
      "Aktivierung der Glucokinase",
    ],
    3,
    "D ist falsch: Insulin hemmt die Glykogenolyse (Glykogenabbau), es stimuliert sie nicht – das macht Glucagon. Insulin wirkt anabol: Es fördert Glykogensynthese (A), hemmt Gluconeogenese (B), fördert Lipogenese (C) und aktiviert die Glucokinase (E) zur Phosphorylierung von Glucose.",
    "schwer",
    ["insulin", "leber", "stoffwechsel", "falsch-aussage"]
  ),

  // ── Genetik (bio-kap3): 12 Fragen ──

  q(
    "bio-pool-hard-021",
    "bio-kap3",
    "In einer Population liegt die Frequenz des rezessiven Allels für Albinismus bei q = 0,01. Wie hoch ist der erwartete Anteil phänotypisch gesunder Überträger (heterozygot) nach Hardy-Weinberg?",
    [
      "Etwa 2 %",
      "Etwa 0,01 %",
      "Etwa 0,1 %",
      "Etwa 10 %",
      "Etwa 1 %",
    ],
    0,
    "Hardy-Weinberg: Heterozygote = 2pq. p = 1 − q = 0,99; 2 × 0,99 × 0,01 = 0,0198 ≈ 2 %. B (0,01 %) = q² = Homozygote. C (0,1 %) rechnet nur pq, nicht 2pq. D (10 %) ist zehnfach zu hoch. E (1 %) verwechselt 2pq mit q.",
    "schwer",
    ["hardy-weinberg", "rechnung", "heterozygote"]
  ),

  q(
    "bio-pool-hard-022",
    "bio-kap3",
    "In einem Stammbaum zeigt sich: Zwei phänotypisch gesunde Eltern haben ein betroffenes Kind. Das Merkmal tritt in jeder Generation auf, Männer und Frauen sind gleich häufig betroffen. Welcher Erbgang liegt am wahrscheinlichsten vor?",
    [
      "Autosomal-rezessiv",
      "Autosomal-dominant",
      "X-chromosomal-rezessiv",
      "X-chromosomal-dominant",
      "Mitochondrial",
    ],
    0,
    "Beide Eltern gesund + betroffenes Kind = rezessiv (Eltern sind Überträger). Männer und Frauen gleich betroffen = autosomal. B ist falsch (bei dominant wäre mindestens ein Elternteil betroffen). C ist falsch (X-rezessiv betrifft v. a. Männer). D ist falsch (dominant + X → betroffener Vater hätte alle Töchter betroffen). E ist falsch (mitochondrial → nur maternale Vererbung).",
    "schwer",
    ["stammbaum", "erbgang", "autosomal-rezessiv"]
  ),

  q(
    "bio-pool-hard-023",
    "bio-kap3",
    "Mutter: Blutgruppe A (heterozygot I^A i). Vater: Blutgruppe B (heterozygot I^B i). Wie groß ist die Wahrscheinlichkeit, dass ein Kind Blutgruppe 0 hat?",
    [
      "25 %",
      "50 %",
      "0 %",
      "75 %",
      "12,5 %",
    ],
    0,
    "Kreuzung I^A i × I^B i → Genotypen: I^A I^B (AB), I^A i (A), I^B i (B), ii (0), jeweils 25 %. Kind mit Blutgruppe 0 (Genotyp ii) hat eine Wahrscheinlichkeit von 25 %. B (50 %) überschätzt. C (0 %) vergisst, dass beide Eltern ein i-Allel tragen. D und E sind falsch.",
    "schwer",
    ["blutgruppe", "kreuzung", "rechnung"]
  ),

  q(
    "bio-pool-hard-024",
    "bio-kap3",
    "Während der Meiose I kommt es zum Crossing-over zwischen zwei homologen Chromosomen. Welche DIREKTE genetische Konsequenz hat dies?",
    [
      "Rekombination von Allelen auf demselben Chromosom",
      "Verdopplung der Chromosomenzahl",
      "Entstehung neuer Mutationen",
      "Veränderung der DNA-Basensequenz",
      "Trennung der Schwesterchromatiden",
    ],
    0,
    "Crossing-over in der Prophase I führt zum Austausch von Chromatidensegmenten zwischen homologen Chromosomen → neue Allel-Kombinationen auf einem Chromosom (Rekombination). B ist falsch (Chromosomenzahl bleibt gleich). C ist falsch (Crossing-over ist keine Mutation, sondern Rekombination existierender Allele). D ist falsch (die Sequenz selbst wird nicht verändert, nur neu kombiniert). E beschreibt Meiose II/Mitose-Anaphase.",
    "schwer",
    ["meiose", "crossing-over", "rekombination"]
  ),

  q(
    "bio-pool-hard-025",
    "bio-kap3",
    "Ein Mann mit Rot-Grün-Blindheit (X-chromosomal-rezessiv) bekommt mit einer Konduktorin Kinder. Wie hoch ist die Wahrscheinlichkeit, dass eine TOCHTER farbenblind ist?",
    [
      "50 %",
      "100 %",
      "25 %",
      "0 %",
      "75 %",
    ],
    0,
    "Vater: X^a Y (farbenblind). Mutter (Konduktorin): X^A X^a. Töchter erhalten ein X vom Vater (X^a) und eines von der Mutter (50 % X^A, 50 % X^a). → 50 % der Töchter sind X^a X^a (farbenblind), 50 % sind X^A X^a (Konduktorinnen). B (100 %) vergisst, dass die Mutter auch ein normales Allel hat. C (25 %) rechnet für alle Kinder statt nur Töchter. D (0 %) vergisst das väterliche X^a.",
    "schwer",
    ["x-chromosomal", "farbenblindheit", "rechnung"]
  ),

  q(
    "bio-pool-hard-026",
    "bio-kap3",
    "Bei welchem Ereignis in der Meiose entsteht typischerweise eine Trisomie 21 (Down-Syndrom)?",
    [
      "Non-Disjunction in der Meiose I oder II",
      "Crossing-over in der Prophase I",
      "Deletion eines Chromosomenarms in der Anaphase",
      "Translokation während der DNA-Replikation",
      "Fehlerhafte Zytokinese nach der Meiose II",
    ],
    0,
    "Trisomie 21 entsteht durch Non-Disjunction: homologe Chromosomen (Meiose I) oder Schwesterchromatiden (Meiose II) trennen sich nicht → eine Gamete hat 2 Kopien von Chr. 21, die andere keine. B (Crossing-over) verändert Allel-Kombinationen, aber nicht die Chromosomenzahl. C (Deletion) führt zu partiellem Verlust. D beschreibt Robertsonsche Translokation (seltene Form). E (Zytokinese) betrifft Zellteilung, nicht Chromosomensegregation.",
    "schwer",
    ["non-disjunction", "trisomie", "meiose"]
  ),

  q(
    "bio-pool-hard-027",
    "bio-kap3",
    "Ein Gen zeigt unvollständige Dominanz. Eltern: rot (RR) × weiß (WW) → F1 rosa (RW). Wie ist das Phänotyp-Verhältnis in der F2?",
    [
      "1 rot : 2 rosa : 1 weiß",
      "3 rot : 1 weiß",
      "1 rot : 1 rosa",
      "2 rot : 1 rosa : 1 weiß",
      "1 rot : 3 weiß",
    ],
    0,
    "Bei unvollständiger Dominanz sind Heterozygote phänotypisch unterscheidbar. F1 × F1: RW × RW → RR (rot) : RW (rosa) : WW (weiß) = 1:2:1. B (3:1) gilt bei vollständiger Dominanz. C (1:1) wäre Rückkreuzung. D und E stimmen mit keinem Kreuzungstyp überein.",
    "schwer",
    ["unvollstaendige-dominanz", "kreuzung", "rechnung"]
  ),

  q(
    "bio-pool-hard-028",
    "bio-kap3",
    "Welche Aussage zur Epigenetik ist FALSCH?",
    [
      "DNA-Methylierung an CpG-Inseln aktiviert typischerweise die Genexpression",
      "Histonacetylierung lockert die Chromatinstruktur",
      "Epigenetische Veränderungen sind potenziell reversibel",
      "Genomisches Imprinting ist ein epigenetischer Mechanismus",
      "Epigenetische Modifikationen können an Tochterzellen weitergegeben werden",
    ],
    0,
    "A ist falsch: DNA-Methylierung an CpG-Inseln in Promotoren führt typischerweise zur Genstilllegung (Silencing), NICHT zur Aktivierung. B ist richtig (Acetylierung → offenes Euchromatin → aktive Transkription). C ist richtig (z. B. durch Demethylasen). D ist richtig (elternspezifische Methylierung). E ist richtig (mitotische Vererbung epigenetischer Marker).",
    "schwer",
    ["epigenetik", "methylierung", "falsch-aussage"]
  ),

  q(
    "bio-pool-hard-029",
    "bio-kap3",
    "In einer Population sind 4 % der Menschen von einer autosomal-rezessiven Erkrankung betroffen. Wie groß ist die Heterozygoten-Frequenz (Überträger)?",
    [
      "32 %",
      "4 %",
      "20 %",
      "16 %",
      "40 %",
    ],
    0,
    "Betroffene = q² = 0,04 → q = 0,2 → p = 0,8. Heterozygote = 2pq = 2 × 0,8 × 0,2 = 0,32 = 32 %. B (4 %) verwechselt q² mit 2pq. C (20 %) ist nur q. D (16 %) verwechselt p² (Homozygot-Gesunde). E (40 %) berechnet 2q statt 2pq.",
    "schwer",
    ["hardy-weinberg", "rechnung", "heterozygotenfrequenz"]
  ),

  q(
    "bio-pool-hard-030",
    "bio-kap3",
    "Zwei Gene (A und B) liegen auf demselben Chromosom mit einer Rekombinationsfrequenz von 20 %. Bei einem dihybriden Organismus (AaBb, Gene in cis: AB/ab): Welche Gametenfrequenz hat die Rekombinante Ab?",
    [
      "10 %",
      "20 %",
      "25 %",
      "40 %",
      "50 %",
    ],
    0,
    "Rekombinationsfrequenz 20 % bedeutet: 20 % rekombinante Gameten insgesamt, aufgeteilt auf zwei Typen (Ab und aB) → jeweils 10 %. Die parentalen Gameten (AB und ab) machen jeweils 40 % aus. B (20 %) vergisst die Aufteilung auf 2 rekombinante Klassen. C (25 %) wäre freie Kombinierbarkeit (unabhängige Gene). D und E sind zu hoch.",
    "schwer",
    ["genkopplung", "rekombination", "rechnung"]
  ),

  q(
    "bio-pool-hard-031",
    "bio-kap3",
    "Ein Paar bekommt Kinder. Der Vater ist heterozygot für zwei autosomale Gene (AaBb), die Mutter ist homozygot rezessiv (aabb). Die Gene sind NICHT gekoppelt. Wie viele verschiedene Phänotypen können bei den Kindern auftreten?",
    [
      "4",
      "2",
      "3",
      "8",
      "16",
    ],
    0,
    "AaBb × aabb (Testkreuzung): Gameten des Vaters: AB, Ab, aB, ab (jeweils 25 %). Kinder: AaBb, Aabb, aaBb, aabb → 4 verschiedene Genotypen und (bei vollständiger Dominanz) 4 verschiedene Phänotypen: A_B_, A_bb, aaB_, aabb. B (2) verwechselt mit monohybrid. C (3) vergisst eine Kombination. D (8) und E (16) sind bei F2-Kreuzungen relevant, nicht bei Testkreuzung.",
    "schwer",
    ["dihybrid", "testkreuzung", "rechnung"]
  ),

  q(
    "bio-pool-hard-032",
    "bio-kap3",
    "Eine X-chromosomal vererbte Erkrankung zeigt sich bei Männern häufiger als bei Frauen. Ein betroffener Mann hat mit einer gesunden, nicht-heterozygoten Frau Kinder. Welche Aussage stimmt?",
    [
      "Alle Töchter sind Konduktorinnen, kein Sohn ist betroffen",
      "Alle Söhne sind betroffen, alle Töchter gesund",
      "50 % der Söhne sind betroffen, 50 % der Töchter sind Konduktorinnen",
      "Alle Kinder sind phänotypisch gesund",
      "50 % aller Kinder sind betroffen",
    ],
    0,
    "Vater X^a Y × Mutter X^A X^A: Töchter erhalten X^a vom Vater und X^A von der Mutter → alle X^A X^a (Konduktorinnen, phänotypisch gesund). Söhne erhalten Y vom Vater und X^A von der Mutter → alle X^A Y (gesund, kein Träger). B ist falsch (Söhne bekommen X nur von der Mutter). C trifft auf heterozygote Mutter zu. D vergisst den Konduktorinnen-Status. E ist weit überschätzt.",
    "schwer",
    ["x-chromosomal", "vererbung", "konduktorin"]
  ),

  // ── Molekulare Genetik (bio-kap4): 8 Fragen ──

  q(
    "bio-pool-hard-033",
    "bio-kap4",
    "Eine Punktmutation ändert ein Codon von UAC (Tyrosin) zu UAA. Welche Konsequenz hat dies für das Protein?",
    [
      "Vorzeitiger Translationsabbruch (Nonsense-Mutation)",
      "Einbau einer anderen Aminosäure (Missense-Mutation)",
      "Keine Auswirkung durch Wobble-Basenpaarung",
      "Verschiebung des Leserasters (Frameshift)",
      "Verstärkung der Transkriptionsrate",
    ],
    0,
    "UAA ist eines der drei Stopp-Codons (UAA, UAG, UGA). Die Mutation von UAC → UAA erzeugt ein vorzeitiges Stoppcodon → verkürztes, meist funktionsloses Protein = Nonsense-Mutation. B wäre ein Austausch zu einem anderen Aminosäure-Codon. C (Wobble) gleicht manche Austausche in der 3. Position aus, aber UAA ist definitiv ein Stopp. D (Frameshift) tritt bei Insertion/Deletion auf. E hat mit Codonänderung nichts zu tun.",
    "schwer",
    ["mutation", "nonsense", "translation", "transfer"]
  ),

  q(
    "bio-pool-hard-034",
    "bio-kap4",
    "Bei der PCR wird die Annealingtemperatur zu hoch gewählt. Welche Konsequenz ist am wahrscheinlichsten?",
    [
      "Keine oder sehr geringe Amplifikation des Zielgens",
      "Unspezifische Amplifikation vieler DNA-Fragmente",
      "Die DNA-Polymerase wird irreversibel denaturiert",
      "Die Template-DNA wird dauerhaft einzelsträngig",
      "Die Primer binden an beide DNA-Stränge gleichzeitig",
    ],
    0,
    "Bei zu hoher Annealingtemperatur können die Primer nicht stabil an die Template-DNA binden → keine oder geringe Amplifikation. B (unspezifische Amplifikation) tritt bei ZU NIEDRIGER Temperatur auf. C ist falsch (Taq-Polymerase ist thermostabil bis ~95 °C). D ist falsch (bei Temperaturabkühlung renaturiert DNA). E ist nicht möglich (Primer sind einzelsträngig, binden je an einen Strang).",
    "schwer",
    ["pcr", "annealing", "temperatur", "transfer"]
  ),

  q(
    "bio-pool-hard-035",
    "bio-kap4",
    "Welche der folgenden Aussagen über das RNA-Spleißen ist FALSCH?",
    [
      "Introns werden aus der prä-mRNA entfernt und Exons verbunden",
      "Das Spleißosom besteht hauptsächlich aus snRNPs",
      "Alternatives Spleißen erhöht die Proteinvielfalt",
      "Prokaryoten spleißen ihre mRNA nach der Transkription genauso wie Eukaryoten",
      "Spleißen findet im Zellkern statt",
    ],
    3,
    "D ist falsch: Prokaryoten haben in der Regel keine Introns in ihren mRNAs und besitzen kein Spleißosom. Spleißen ist ein typisch eukaryotisches Merkmal. A, B, C und E beschreiben korrekt den eukaryotischen Spleißvorgang.",
    "schwer",
    ["spleissen", "prokaryoten", "eukaryoten", "falsch-aussage"]
  ),

  q(
    "bio-pool-hard-036",
    "bio-kap4",
    "Ein mRNA-Molekül hat die Basensequenz 5'-AUG-GCU-UAC-GAA-UAA-3'. Wie viele Aminosäuren enthält das resultierende Polypeptid (ohne Start-Methionin-Abspaltung)?",
    [
      "4",
      "3",
      "5",
      "2",
      "1",
    ],
    0,
    "AUG (Met) – GCU (Ala) – UAC (Tyr) – GAA (Glu) – UAA (Stopp). Es werden 4 Aminosäuren eingebaut (Met, Ala, Tyr, Glu), dann folgt das Stoppcodon UAA. B (3) vergisst das Start-Methionin. C (5) zählt das Stoppcodon als Aminosäure. D und E sind zu wenig.",
    "schwer",
    ["translation", "codon", "rechnung"]
  ),

  q(
    "bio-pool-hard-037",
    "bio-kap4",
    "Welcher Mechanismus reguliert die Genexpression auf posttranskriptionaler Ebene?",
    [
      "RNA-Interferenz (miRNA/siRNA)",
      "Methylierung von CpG-Inseln",
      "Bindung von Transkriptionsfaktoren an den Promotor",
      "Histonmodifikation",
      "Chromatinremodeling durch SWI/SNF-Komplexe",
    ],
    0,
    "RNA-Interferenz wirkt posttranskriptional: miRNA/siRNA binden an komplementäre mRNA und führen zu deren Abbau oder Translationshemmung. B (Methylierung) ist epigenetisch/prätranskriptional. C (Transkriptionsfaktoren) wirkt auf Transkriptionsebene. D (Histonmodifikation) und E (Chromatinremodeling) wirken auf Chromatinebene (prä-/transkriptional).",
    "schwer",
    ["genregulation", "rna-interferenz", "posttranskriptional"]
  ),

  q(
    "bio-pool-hard-038",
    "bio-kap4",
    "Eine Insertion von 2 Basenpaaren in ein Exon hat welche Konsequenz für das Protein?",
    [
      "Frameshift-Mutation mit verändertem Leseraster ab der Insertion",
      "Stille Mutation ohne Auswirkung auf das Protein",
      "Missense-Mutation mit einer einzelnen Aminosäure-Änderung",
      "Deletion einer einzelnen Aminosäure",
      "Duplikation des betroffenen Exons",
    ],
    0,
    "Da der genetische Code in Tripletts gelesen wird, verschiebt eine Insertion von 2 Basen das Leseraster (Frameshift). Alle nachfolgenden Codons werden falsch gelesen, oft entsteht ein frühzeitiges Stoppcodon. B (still) wäre nur bei Insertion von 3 Basen (oder Vielfachen) möglich. C (Missense) betrifft Punktmutationen. D (Deletion einer AS) passt nicht zu einer Insertion. E ist kein Ergebnis einer Punktinsertion.",
    "schwer",
    ["frameshift", "insertion", "mutation", "transfer"]
  ),

  q(
    "bio-pool-hard-039",
    "bio-kap4",
    "Bei der Replikation entsteht auf dem Folgestrang eine Reihe von Okazaki-Fragmenten. Welches Enzym verbindet diese Fragmente?",
    [
      "DNA-Ligase",
      "DNA-Polymerase III",
      "Helikase",
      "Primase",
      "Topoisomerase",
    ],
    0,
    "DNA-Ligase verknüpft die 3'-OH-Gruppe eines Okazaki-Fragments mit der 5'-Phosphatgruppe des nächsten durch Bildung einer Phosphodiesterbindung. B (Pol III) synthetisiert die Fragmente, verbindet sie aber nicht. C (Helikase) öffnet den Doppelstrang. D (Primase) synthetisiert RNA-Primer. E (Topoisomerase) löst Torsionsspannung.",
    "schwer",
    ["replikation", "okazaki", "ligase"]
  ),

  q(
    "bio-pool-hard-040",
    "bio-kap4",
    "Ein Gen wird durch einen Enhancer reguliert, der 10.000 Basenpaare vom Promotor entfernt liegt. Wie kann der Enhancer die Transkription beeinflussen?",
    [
      "Durch DNA-Schleifenbildung (Looping), sodass Enhancer und Promotor räumlich nah kommen",
      "Der Enhancer wandert entlang der DNA zum Promotor",
      "Der Enhancer wird zunächst in RNA transkribiert und bindet dann an den Promotor",
      "Der Enhancer kann nur bis 1.000 bp Entfernung wirken, daher hat er keinen Effekt",
      "Der Enhancer wirkt über Diffusion von Signalmolekülen durch den Zellkern",
    ],
    0,
    "Enhancer wirken über DNA-Looping: Mediatorkomplexe und Transkriptionsfaktoren binden am Enhancer, die DNA bildet eine Schleife, und der Enhancer kommt räumlich in Kontakt mit dem Promotor-Komplex. B ist falsch (DNA-Elemente wandern nicht). C beschreibt keinen bekannten Mechanismus für klassische Enhancer. D ist falsch (Enhancer können über Millionen bp wirken). E ist falsch (keine Signaldiffusion nötig).",
    "schwer",
    ["enhancer", "genregulation", "dna-looping", "transfer"]
  ),

  // ── Evolution & Ökologie (bio-kap5): 5 Fragen ──

  q(
    "bio-pool-hard-041",
    "bio-kap5",
    "In einer kleinen Inselpopulation verändert sich die Allelfrequenz zufällig von Generation zu Generation, ohne dass Selektion wirkt. Welcher Evolutionsmechanismus liegt vor?",
    [
      "Genetische Drift",
      "Natürliche Selektion",
      "Gerichtete Mutation",
      "Genfluss",
      "Sexuelle Selektion",
    ],
    0,
    "Zufällige Schwankungen der Allelfrequenzen in kleinen Populationen = Genetische Drift. B (Selektion) ist nicht zufällig, sondern gerichtet. C (gerichtete Mutation) existiert als Evolutionsfaktor nicht in dieser Form. D (Genfluss) erfordert Migration zwischen Populationen. E (sexuelle Selektion) ist eine Form der natürlichen Selektion, nicht zufällig.",
    "schwer",
    ["genetische-drift", "populationsgenetik", "evolution"]
  ),

  q(
    "bio-pool-hard-042",
    "bio-kap5",
    "Stabilisierende Selektion wirkt auf ein Merkmal (z. B. Geburtsgewicht). Welches Ergebnis ist zu erwarten?",
    [
      "Die Varianz des Merkmals nimmt ab, der Mittelwert bleibt gleich",
      "Der Mittelwert verschiebt sich in eine Richtung",
      "Zwei extreme Phänotypen werden bevorzugt",
      "Alle Phänotypen haben gleiche Fitness",
      "Die Varianz nimmt zu bei gleichem Mittelwert",
    ],
    0,
    "Stabilisierende Selektion bevorzugt den mittleren Phänotyp und selektiert gegen Extreme → die Varianz sinkt, der Mittelwert bleibt stabil. B beschreibt gerichtete Selektion. C beschreibt disruptive Selektion. D wäre keine Selektion. E ist das Gegenteil (disruptive Selektion).",
    "schwer",
    ["stabilisierende-selektion", "evolution", "transfer"]
  ),

  q(
    "bio-pool-hard-043",
    "bio-kap5",
    "Welche Bedingung gehört NICHT zu den Voraussetzungen des Hardy-Weinberg-Gleichgewichts?",
    [
      "Natürliche Selektion findet statt",
      "Keine Mutation",
      "Keine Migration (Genfluss)",
      "Zufällige Paarung (Panmixie)",
      "Unendlich große Population",
    ],
    0,
    "A ist die richtige Antwort: Hardy-Weinberg setzt voraus, dass KEINE Selektion stattfindet. Wenn Selektion wirkt, verändern sich die Allelfrequenzen und das Gleichgewicht gilt nicht. B (keine Mutation), C (keine Migration), D (Panmixie) und E (große Population) sind alle echte Voraussetzungen des HWG.",
    "schwer",
    ["hardy-weinberg", "voraussetzungen", "evolution"]
  ),

  q(
    "bio-pool-hard-044",
    "bio-kap5",
    "Zwei Tierarten zeigen ähnliche Körperformen, sind aber nicht nah verwandt (z. B. Delfin und Hai). Wie wird diese Ähnlichkeit evolutionsbiologisch bezeichnet?",
    [
      "Konvergenz (analoge Strukturen)",
      "Homologie (gemeinsamer Vorfahre)",
      "Atavismus",
      "Adaptive Radiation",
      "Koevolution",
    ],
    0,
    "Ähnliche Merkmale bei nicht verwandten Arten durch Anpassung an gleiche Umweltbedingungen = Konvergenz (Analogie). B (Homologie) setzt gemeinsamen Vorfahren voraus (z. B. Arm-Flügel-Flosse bei Wirbeltieren). C (Atavismus) ist das Wiederauftreten eines Ahnen-Merkmals. D (adaptive Radiation) ist die Aufspaltung einer Art in viele Nischen. E (Koevolution) betrifft wechselseitige Anpassung zweier Arten.",
    "schwer",
    ["konvergenz", "analogie", "evolution"]
  ),

  q(
    "bio-pool-hard-045",
    "bio-kap5",
    "In einer Population mit Hardy-Weinberg-Gleichgewicht beträgt die Frequenz des dominanten Phänotyps 91 %. Wie groß ist die Frequenz des dominanten Allels (p)?",
    [
      "0,7",
      "0,3",
      "0,91",
      "0,09",
      "0,49",
    ],
    0,
    "Rezessiver Phänotyp = q² = 1 − 0,91 = 0,09. q = √0,09 = 0,3. p = 1 − q = 0,7. B (0,3) ist q, nicht p. C (0,91) verwechselt Phänotypfrequenz mit Allelfrequenz. D (0,09) ist q². E (0,49) ist p², nicht p.",
    "schwer",
    ["hardy-weinberg", "rechnung", "allelfrequenz"]
  ),

  // ── Immunbiologie (bio-kap5): 5 Fragen ──

  q(
    "bio-pool-hard-046",
    "bio-kap5",
    "Welche Antikörperklasse überwindet die Plazentaschranke und schützt das Neugeborene?",
    [
      "IgG",
      "IgM",
      "IgA",
      "IgE",
      "IgD",
    ],
    0,
    "IgG ist der einzige Antikörper, der über den FcRn-Rezeptor aktiv durch die Plazenta transportiert wird → Nestschutz des Neugeborenen. B (IgM) ist zu groß (Pentamer). C (IgA) schützt Schleimhäute (v. a. in Muttermilch). D (IgE) ist für Allergien/Parasiten zuständig. E (IgD) hat geringe Serumkonzentration und B-Zell-Differenzierungsfunktion.",
    "schwer",
    ["antikoerper", "igg", "plazenta", "immunologie"]
  ),

  q(
    "bio-pool-hard-047",
    "bio-kap5",
    "Ein Patient mit Blutgruppe A (Rhesus-negativ) erhält versehentlich eine Transfusion mit Blutgruppe B (Rhesus-positiv). Welche Reaktion tritt auf?",
    [
      "Sofortige hämolytische Reaktion durch Anti-B-Antikörper + Sensibilisierung gegen Rhesus-D",
      "Keine Reaktion, da die AB0-Gruppen kompatibel sind",
      "Nur Anti-Rhesus-Reaktion, AB0-Antikörper sind irrelevant",
      "Verzögerte Reaktion erst nach 2 Wochen durch Anti-B",
      "Nur leichte allergische Reaktion ohne Hämolyse",
    ],
    0,
    "Patient Blutgruppe A hat natürliche Anti-B-Antikörper (IgM) → sofortige Agglutination und Hämolyse der Spender-Erythrozyten. Zusätzlich ist der Patient Rh-negativ und wird gegen Rh-D sensibilisiert (IgG-Bildung nach Tagen/Wochen → relevant bei erneuter Exposition). B ist falsch (A und B sind inkompatibel). C ist falsch (AB0-Reaktion ist die gefährlichste). D ist falsch (Anti-B sind präformiert → sofort). E ist falsch (schwere hämolytische Reaktion).",
    "schwer",
    ["blutgruppe", "transfusion", "haemolyse", "transfer"]
  ),

  q(
    "bio-pool-hard-048",
    "bio-kap5",
    "Welche Zellen präsentieren Antigene über MHC-Klasse-II-Moleküle und aktivieren dadurch T-Helferzellen?",
    [
      "Dendritische Zellen, Makrophagen und B-Zellen",
      "Alle kernhaltigen Körperzellen",
      "Ausschließlich B-Zellen",
      "Nur Makrophagen",
      "Erythrozyten und Thrombozyten",
    ],
    0,
    "MHC-II wird nur auf professionellen antigenpräsentierenden Zellen (APCs) exprimiert: Dendritische Zellen, Makrophagen und B-Zellen. B beschreibt MHC-I-Expression (alle kernhaltigen Zellen). C und D sind unvollständig. E ist falsch (Erythrozyten haben keinen Kern und keine MHC-Moleküle, Thrombozyten ebenfalls nicht).",
    "schwer",
    ["mhc-ii", "antigenpraesentation", "t-helferzellen"]
  ),

  q(
    "bio-pool-hard-049",
    "bio-kap5",
    "Nach einer Erstinfektion mit einem Virus dauert die adaptive Immunantwort ca. 7–10 Tage. Bei einer Zweitinfektion mit demselben Virus ist die Antwort schneller und stärker. Welcher Mechanismus erklärt dies am besten?",
    [
      "Gedächtnis-B- und T-Zellen aus der Erstinfektion werden schnell reaktiviert",
      "Das angeborene Immunsystem hat das Virus beim zweiten Mal erkannt",
      "Die Antikörper der Erstinfektion sind noch im Blut vorhanden",
      "Natürliche Killerzellen reagieren spezifischer beim zweiten Kontakt",
      "Komplementfaktoren haben ein Gedächtnis für virale Antigene",
    ],
    0,
    "Immunologisches Gedächtnis basiert auf langlebigen Gedächtnis-B-Zellen und Gedächtnis-T-Zellen, die bei Zweitkontakt schneller und stärker reagieren (höhere Antikörpertiter, schnellere Klonexpansion). B ist falsch (angeborenes IS hat kein Gedächtnis im klassischen Sinne). C ist teilweise richtig, erklärt aber nicht die stärkere Antwort. D ist falsch (NK-Zellen gehören zum angeborenen IS). E ist falsch (Komplement hat kein Gedächtnis).",
    "schwer",
    ["immungedaechtnis", "sekundaerantwort", "vakzinierung"]
  ),

  q(
    "bio-pool-hard-050",
    "bio-kap5",
    "Welche Aussage über die klonale Selektion von B-Zellen ist FALSCH?",
    [
      "Jede B-Zelle produziert von Anfang an alle Antikörperklassen gleichzeitig",
      "Jede B-Zelle trägt einen spezifischen Antigenrezeptor (BCR)",
      "Bei Antigenkontakt proliferiert die passende B-Zelle klonal",
      "Klonale Selektion erklärt die Spezifität der adaptiven Immunantwort",
      "Autoreaktive B-Zellen werden im Knochenmark eliminiert (zentrale Toleranz)",
    ],
    0,
    "A ist falsch: Eine B-Zelle produziert zunächst IgM und IgD; erst nach Aktivierung und T-Zell-Hilfe erfolgt der Klassenwechsel (Class Switch) zu IgG, IgA oder IgE. Eine B-Zelle produziert NICHT alle Klassen gleichzeitig. B, C, D und E beschreiben korrekte Aspekte der klonalen Selektion und B-Zell-Biologie.",
    "schwer",
    ["klonale-selektion", "b-zellen", "falsch-aussage"]
  ),
];
