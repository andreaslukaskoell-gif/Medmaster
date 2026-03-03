/**
 * Biology BMS pool — questions 171–240 (MedAT style).
 * Topics from bio-kap1 through bio-kap5, evenly spread.
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool3: Question[] = [
  // ── bio-kap1: Zellbiologie (14 Fragen) ──────────────────────────────
  q(
    "bio-pool-171",
    "bio-kap1",
    "Welche Aussage zur Zellmembran ist richtig?",
    [
      "Die Lipiddoppelschicht ist vollständig impermeabel für alle Moleküle.",
      "Cholesterin erhöht die Membranfluidität bei niedrigen Temperaturen und verringert sie bei hohen Temperaturen.",
      "Integrale Membranproteine sind nur an der Außenseite der Membran verankert.",
      "Glykolipide befinden sich ausschließlich auf der zytosolischen Seite der Membran.",
      "Phospholipide können sich durch Flip-Flop-Bewegungen schneller als durch laterale Diffusion bewegen.",
    ],
    1,
    "Cholesterin wirkt als Fluidity Buffer: Bei niedrigen Temperaturen verhindert es die enge Packung der Fettsäureketten und erhöht so die Fluidität; bei hohen Temperaturen stabilisiert es die Membran und verringert die Fluidität. Glykolipide befinden sich auf der extrazellulären Seite, und Flip-Flop ist sehr langsam im Vergleich zur lateralen Diffusion.",
    "mittel",
    ["zellmembran", "cholesterin", "fluidität"]
  ),
  q(
    "bio-pool-172",
    "bio-kap1",
    "Welche der folgenden Aussagen zum endoplasmatischen Retikulum (ER) ist FALSCH?",
    [
      "Das raue ER ist mit Ribosomen besetzt und synthetisiert sekretorische Proteine.",
      "Das glatte ER ist an der Lipidsynthese und der Entgiftung beteiligt.",
      "Proteine werden im rauen ER cotranslational in das Lumen transloziert.",
      "Das glatte ER spielt in Muskelzellen eine wichtige Rolle bei der Kalziumspeicherung.",
      "Das raue ER ist der Hauptort der ATP-Synthese in der Zelle.",
    ],
    4,
    "Die ATP-Synthese findet hauptsächlich in den Mitochondrien statt (oxidative Phosphorylierung) und zu einem geringen Anteil im Zytoplasma (Glykolyse). Das raue ER synthetisiert Proteine für den Sekretionsweg, ist aber kein Ort der ATP-Synthese.",
    "leicht",
    ["er", "endoplasmatisches retikulum", "falsch-aussage"]
  ),
  q(
    "bio-pool-173",
    "bio-kap1",
    "Ein Patient wird mit einem Medikament behandelt, das die Funktion der Mikrotubuli hemmt (z. B. Colchicin). Welcher zelluläre Prozess ist am stärksten betroffen?",
    [
      "Die Glykolyse im Zytoplasma",
      "Die Zellteilung (Mitose)",
      "Die Translation an den Ribosomen",
      "Die oxidative Phosphorylierung in den Mitochondrien",
      "Die Transkription im Zellkern",
    ],
    1,
    "Mikrotubuli bilden die Mitosespindel, die für die Trennung der Chromosomen während der Zellteilung essenziell ist. Colchicin hemmt die Polymerisation der Mikrotubuli und blockiert damit die Mitose. Die anderen genannten Prozesse sind nicht direkt von Mikrotubuli abhängig.",
    "mittel",
    ["mikrotubuli", "colchicin", "mitose", "zytoskelett"]
  ),
  q(
    "bio-pool-174",
    "bio-kap1",
    "Welche Aussage zum Golgi-Apparat ist richtig?",
    [
      "Er besteht aus einem einzigen großen Membransack ohne Zisternenstruktur.",
      "Er modifiziert, sortiert und verpackt Proteine für den intrazellulären Transport oder die Sekretion.",
      "Er ist der Hauptort der semikonservativen DNA-Replikation in der Zelle.",
      "Er produziert ATP durch Chemiosmose an der inneren Mitochondrienmembran.",
      "Er baut langkettige Fettsäuren durch β-Oxidation in der Matrix ab.",
    ],
    1,
    "Der Golgi-Apparat besteht aus gestapelten, flachen Membransäckchen (Zisternen) und modifiziert Proteine (z. B. Glykosylierung), sortiert sie und verpackt sie in Vesikel für den Transport zu ihrem Bestimmungsort. DNA-Replikation findet im Kern statt, ATP-Produktion in Mitochondrien, β-Oxidation in Mitochondrien und Peroxisomen.",
    "leicht",
    ["golgi-apparat", "proteinmodifikation", "sekretion"]
  ),
  q(
    "bio-pool-175",
    "bio-kap1",
    "Welche der folgenden Aussagen zur Osmose ist FALSCH?",
    [
      "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran.",
      "Wasser bewegt sich von der Seite mit niedrigerer Osmolarität zur Seite mit höherer Osmolarität.",
      "In einer hypertonen Lösung schrumpfen Erythrozyten (Krenation).",
      "In einer hypotonen Lösung schwellen Erythrozyten an und können platzen (Hämolyse).",
      "Der osmotische Druck ist unabhängig von der Konzentration gelöster Teilchen.",
    ],
    4,
    "Der osmotische Druck ist direkt proportional zur Konzentration gelöster Teilchen (van-'t-Hoff-Gesetz: π = i·c·R·T). Alle anderen Aussagen sind korrekt: Osmose geht zum höher konzentrierten Kompartiment, Erythrozyten krenieren in hypertoner und lysieren in hypotoner Lösung.",
    "leicht",
    ["osmose", "osmotischer druck", "falsch-aussage"]
  ),
  q(
    "bio-pool-176",
    "bio-kap1",
    "Lysosomen enthalten hydrolytische Enzyme. Welcher pH-Wert herrscht im Inneren von Lysosomen?",
    [
      "pH 7,4 (neutral)",
      "pH 8,0 (leicht basisch)",
      "pH 4,5–5,0 (sauer)",
      "pH 2,0 (stark sauer wie Magensäure)",
      "pH 6,8–7,0 (nahezu neutral)",
    ],
    2,
    "Lysosomen haben ein saures Milieu mit einem pH von ca. 4,5–5,0, das durch V-Typ-ATPasen (Protonenpumpen) aufrechterhalten wird. Dieser saure pH ist optimal für die Aktivität der lysosomalen Hydrolasen. Der pH des Zytoplasmas liegt bei ~7,2, der Magen bei ~2.",
    "leicht",
    ["lysosomen", "ph-wert", "hydrolase"]
  ),
  q(
    "bio-pool-177",
    "bio-kap1",
    "Welche Aussage zur Mitochondrien-Struktur ist richtig?",
    [
      "Mitochondrien besitzen nur eine einfache Membran.",
      "Die innere Mitochondrienmembran ist glatt und ohne Einfaltungen.",
      "Die Cristae vergrößern die Oberfläche der inneren Membran und tragen die Atmungskettenkomplexe.",
      "Die Matrix der Mitochondrien enthält keine eigene DNA.",
      "Die äußere Membran ist für alle Moleküle undurchlässig.",
    ],
    2,
    "Mitochondrien haben eine Doppelmembranstruktur. Die innere Membran bildet Einfaltungen (Cristae), die die Oberfläche vergrößern und die Komplexe der Atmungskette sowie die ATP-Synthase tragen. Die Matrix enthält mitochondriale DNA (mtDNA). Die äußere Membran ist durch Porine für kleine Moleküle durchlässig.",
    "mittel",
    ["mitochondrien", "cristae", "atmungskette"]
  ),
  q(
    "bio-pool-178",
    "bio-kap1",
    "Ein Zellbiologe beobachtet unter dem Elektronenmikroskop Organellen mit Doppelmembran und eigenem Genom. Welche Organellen kommen in Frage?",
    [
      "Lysosomen und Peroxisomen",
      "Mitochondrien und Chloroplasten",
      "Golgi-Apparat und ER",
      "Ribosomen und Zentrosomen",
      "Vesikel und Endosomen",
    ],
    1,
    "Nur Mitochondrien und Chloroplasten besitzen eine Doppelmembran und eigene DNA (zirkuläre Genome). Dies stützt die Endosymbiontentheorie. Lysosomen, Peroxisomen, Golgi und ER haben Einzelmembranen; Ribosomen und Zentrosomen haben keine Membran.",
    "leicht",
    ["mitochondrien", "chloroplasten", "endosymbiontentheorie"]
  ),
  q(
    "bio-pool-179",
    "bio-kap1",
    "Welche Transportform benötigt direkt ATP als Energiequelle?",
    [
      "Erleichterte Diffusion über Ionenkanäle",
      "Osmose",
      "Primär aktiver Transport (z. B. Na⁺/K⁺-ATPase)",
      "Einfache Diffusion kleiner lipophiler Moleküle",
      "Diffusion von CO₂ durch die Membran",
    ],
    2,
    "Der primär aktive Transport nutzt direkt ATP-Hydrolyse, um Stoffe gegen ihr Konzentrationsgefälle zu transportieren. Das bekannteste Beispiel ist die Na⁺/K⁺-ATPase, die 3 Na⁺ hinaus und 2 K⁺ hinein pumpt. Alle anderen genannten Transportformen sind passiv und benötigen kein ATP.",
    "leicht",
    ["aktiver transport", "na-k-atpase", "atp"]
  ),
  q(
    "bio-pool-180",
    "bio-kap1",
    "Welche der folgenden Aussagen zur Apoptose (programmierter Zelltod) ist FALSCH?",
    [
      "Apoptose ist ein kontrollierter, energieabhängiger Prozess.",
      "Bei der Apoptose werden Caspasen aktiviert, die zelluläre Proteine spalten.",
      "Apoptotische Zellen werden von Makrophagen phagozytiert, ohne eine Entzündung auszulösen.",
      "Apoptose spielt eine wichtige Rolle in der Embryonalentwicklung.",
      "Apoptose führt typischerweise zu einer massiven Entzündungsreaktion im umliegenden Gewebe.",
    ],
    4,
    "Ein Kennzeichen der Apoptose ist, dass sie KEINE Entzündungsreaktion auslöst (im Gegensatz zur Nekrose). Die Zelle wird in apoptotische Körperchen zerlegt und von Phagozyten aufgenommen, bevor der Inhalt freigesetzt wird. Alle anderen Aussagen sind korrekt.",
    "mittel",
    ["apoptose", "caspasen", "falsch-aussage"]
  ),
  q(
    "bio-pool-181",
    "bio-kap1",
    "Welche Funktion haben Peroxisomen in der Zelle?",
    [
      "Synthese von Steroidhormonen (z. B. Cortisol, Aldosteron) im glatten ER",
      "Abbau von sehr langkettigen Fettsäuren und Entgiftung von Wasserstoffperoxid",
      "Speicherung von Kalziumionen für die elektromechanische Kopplung bei der Muskelkontraktion",
      "Synthese von ribosomaler RNA (rRNA) im Nukleolus des Zellkerns",
      "Bildung der Mitosespindel aus Mikrotubuli durch das Centrosom",
    ],
    1,
    "Peroxisomen bauen sehr langkettige Fettsäuren durch β-Oxidation ab und entgiften H₂O₂ mithilfe des Enzyms Katalase (2 H₂O₂ → 2 H₂O + O₂). Die Steroidhormonsynthese findet im glatten ER statt, die Kalziumspeicherung im sarkoplasmatischen Retikulum, rRNA-Synthese im Nukleolus.",
    "mittel",
    ["peroxisomen", "katalase", "fettsäuren"]
  ),
  q(
    "bio-pool-182",
    "bio-kap1",
    "Was versteht man unter Endozytose?",
    [
      "Die Abgabe von Stoffen aus der Zelle durch Vesikelfusion mit der Plasmamembran",
      "Die Aufnahme von extrazellulärem Material in die Zelle durch Einstülpung der Membran",
      "Die Diffusion kleiner Moleküle durch Membrankanäle",
      "Die aktive Pumpe von Ionen gegen ein Konzentrationsgefälle",
      "Die Passage von Wasser durch Aquaporine",
    ],
    1,
    "Endozytose bezeichnet die Aufnahme von Stoffen in die Zelle, indem die Plasmamembran sich einstülpt und Vesikel bildet. Man unterscheidet Phagozytose (große Partikel), Pinozytose (Flüssigkeit) und rezeptorvermittelte Endozytose. Das Gegenteil ist die Exozytose (Ausstoß).",
    "leicht",
    ["endozytose", "membrantransport", "vesikel"]
  ),
  q(
    "bio-pool-183",
    "bio-kap1",
    "Welche Aussage zum Zellzyklus ist richtig?",
    [
      "Die S-Phase ist die Phase der Zellteilung.",
      "In der G1-Phase findet die DNA-Replikation statt.",
      "In der G0-Phase befinden sich terminal differenzierte Zellen, die sich nicht mehr teilen.",
      "Die M-Phase ist die längste Phase des Zellzyklus.",
      "Cycline sind Proteine, die den Zellzyklus hemmen.",
    ],
    2,
    "Terminal differenzierte Zellen (z. B. Neuronen, Erythrozyten) verlassen den Zellzyklus und treten in die G0-Phase ein. Die S-Phase ist die Phase der DNA-Synthese, nicht der Teilung. Die G1-Phase dient dem Zellwachstum. Die M-Phase ist meist die kürzeste Phase. Cycline aktivieren CDKs und treiben den Zellzyklus voran.",
    "mittel",
    ["zellzyklus", "g0-phase", "differenzierung"]
  ),
  q(
    "bio-pool-184",
    "bio-kap1",
    "Bei einem Patienten mit Zellweger-Syndrom fehlen funktionsfähige Peroxisomen. Welche Stoffwechselfunktion ist dadurch am stärksten eingeschränkt?",
    [
      "Die Glykolyse",
      "Der Citratzyklus",
      "Der Abbau sehr langkettiger Fettsäuren",
      "Die Glykogensynthese",
      "Die Proteinbiosynthese am rauen ER",
    ],
    2,
    "Peroxisomen sind essenziell für den Abbau sehr langkettiger Fettsäuren (VLCFA, >22 C-Atome). Beim Zellweger-Syndrom akkumulieren diese Fettsäuren im Blut und Gewebe, was zu schweren neurologischen Schäden führt. Glykolyse, Citratzyklus und Glykogensynthese finden im Zytoplasma bzw. in Mitochondrien statt.",
    "schwer",
    ["peroxisomen", "zellweger-syndrom", "fettsäuren"]
  ),

  // ── bio-kap2: Histologie & Organsysteme (14 Fragen) ─────────────────
  q(
    "bio-pool-185",
    "bio-kap2",
    "Welche der folgenden Aussagen zum Blut ist richtig?",
    [
      "Erythrozyten machen den größten Teil der Leukozyten aus.",
      "Thrombozyten sind kernhaltige Zellen, die in der Milz gebildet werden.",
      "Der Hämatokrit gibt den prozentualen Anteil der Erythrozyten am Gesamtblutvolumen an.",
      "Blutplasma besteht zu etwa 50 % aus Proteinen.",
      "Monozyten sind die häufigsten Leukozyten im Blut.",
    ],
    2,
    "Der Hämatokrit gibt den Volumenanteil der Erythrozyten am Gesamtblut an (Normwert: Frauen ~37–47 %, Männer ~40–54 %). Erythrozyten sind keine Leukozyten; Thrombozyten sind kernlose Zellfragmente aus dem Knochenmark; Blutplasma besteht zu ~91 % aus Wasser und ~7 % Proteinen; die häufigsten Leukozyten sind neutrophile Granulozyten.",
    "leicht",
    ["blut", "hämatokrit", "erythrozyten"]
  ),
  q(
    "bio-pool-186",
    "bio-kap2",
    "Welche Aussage zur Niere ist FALSCH?",
    [
      "Die funktionelle Einheit der Niere ist das Nephron.",
      "Im Glomerulus wird das Blut filtriert und der Primärharn gebildet.",
      "Im proximalen Tubulus werden etwa 65 % des Natriums und Wassers rückresorbiert.",
      "Die Henle-Schleife ist für die Konzentration des Harns durch das Gegenstromprinzip wichtig.",
      "Der gesamte Primärharn wird unverändert als Endharn ausgeschieden.",
    ],
    4,
    "Von ca. 180 Litern Primärharn pro Tag werden etwa 99 % rückresorbiert; nur ca. 1,5–2 Liter Endharn werden ausgeschieden. Die Tubuli und die Henle-Schleife resorbieren Wasser, Elektrolyte, Glukose und Aminosäuren zurück ins Blut.",
    "leicht",
    ["niere", "nephron", "primärharn", "falsch-aussage"]
  ),
  q(
    "bio-pool-187",
    "bio-kap2",
    "Ein Patient hat einen Herzinfarkt erlitten. Welches Gewebe ist primär betroffen?",
    [
      "Glatte Muskulatur der Koronararterien",
      "Quergestreifte Skelettmuskulatur",
      "Herzmuskelgewebe (Kardiomyozyten)",
      "Bindegewebe des Perikards",
      "Epithelgewebe des Endokards",
    ],
    2,
    "Beim Herzinfarkt (Myokardinfarkt) kommt es durch den Verschluss einer Koronararterie zur Ischämie und Nekrose des Herzmuskelgewebes (Myokard). Die Kardiomyozyten sind quergestreift, aber unwillkürlich innerviert und durch Glanzstreifen (Disci intercalares) verbunden.",
    "leicht",
    ["herzinfarkt", "kardiomyozyten", "myokard"]
  ),
  q(
    "bio-pool-188",
    "bio-kap2",
    "Welche Aussage zum autonomen Nervensystem ist richtig?",
    [
      "Der Sympathikus verwendet ausschließlich Acetylcholin als Neurotransmitter.",
      "Der Parasympathikus erhöht die Herzfrequenz.",
      "Der Sympathikus bewirkt eine Erweiterung der Bronchien.",
      "Der Parasympathikus wird auch als Fight-or-Flight-System bezeichnet.",
      "Sympathikus und Parasympathikus innervieren ausschließlich die Skelettmuskulatur.",
    ],
    2,
    "Der Sympathikus bewirkt eine Bronchodilatation (Erweiterung der Bronchien) zur besseren Sauerstoffaufnahme in Stresssituationen. Der Sympathikus nutzt postganglionär v. a. Noradrenalin (nicht nur Acetylcholin). Der Parasympathikus senkt die Herzfrequenz und ist das Rest-and-Digest-System.",
    "mittel",
    ["sympathikus", "parasympathikus", "autonomes nervensystem"]
  ),
  q(
    "bio-pool-189",
    "bio-kap2",
    "Welche der folgenden Strukturen gehört NICHT zum Verdauungstrakt?",
    ["Ösophagus", "Duodenum", "Jejunum", "Ureter", "Zäkum"],
    3,
    "Der Ureter (Harnleiter) gehört zum Harnsystem und verbindet die Niere mit der Harnblase. Ösophagus, Duodenum, Jejunum und Zäkum sind allesamt Abschnitte des Verdauungstrakts.",
    "leicht",
    ["verdauungstrakt", "ureter", "anatomie"]
  ),
  q(
    "bio-pool-190",
    "bio-kap2",
    "Bei einer Blutuntersuchung fällt eine stark erhöhte Anzahl eosinophiler Granulozyten auf. Welche Ursache ist am wahrscheinlichsten?",
    [
      "Bakterielle Lungenentzündung (Pneumonie mit neutrophiler Entzündung)",
      "Parasitäre Infektion (z. B. Wurmbefall)",
      "Virale Hepatitis (Leberentzündung durch Hepatitis-A/B/C-Viren)",
      "Eisenmangelanämie (mikrozytär, hypochrom, durch Eisenmangel bedingt)",
      "Dehydration (Flüssigkeitsverlust mit Verschiebung der Elektrolytbalance)",
    ],
    1,
    "Eosinophile Granulozyten sind besonders bei parasitären Infektionen und allergischen Reaktionen erhöht (Eosinophilie). Sie setzen zytotoxische Granula frei, die Parasiten abtöten können. Bei bakteriellen Infektionen steigen eher die Neutrophilen an.",
    "mittel",
    ["eosinophile", "parasiten", "blutbild"]
  ),
  q(
    "bio-pool-191",
    "bio-kap2",
    "Welche Aussage zum Lungenkreislauf (kleiner Kreislauf) ist richtig?",
    [
      "Die Pulmonalarterien führen sauerstoffreiches Blut vom Herzen zur Lunge.",
      "Die Pulmonalvenen führen sauerstoffarmes Blut von der Lunge zum Herzen.",
      "Der rechte Ventrikel pumpt Blut in die Pulmonalarterien.",
      "Der linke Vorhof empfängt Blut aus den Hohlvenen.",
      "Der Gasaustausch findet in den Bronchien statt.",
    ],
    2,
    "Der rechte Ventrikel pumpt sauerstoffarmes Blut über die Pulmonalarterien (Lungenarterien) zur Lunge. Nach dem Gasaustausch in den Alveolen fließt das sauerstoffreiche Blut über die Pulmonalvenen zurück zum linken Vorhof. Pulmonalarterien führen also sauerstoffarmes Blut — ein häufiger Prüfungsklassiker.",
    "mittel",
    ["lungenkreislauf", "pulmonalarterien", "herz"]
  ),
  q(
    "bio-pool-192",
    "bio-kap2",
    "Welche Eigenschaft ist typisch für Epithelgewebe?",
    [
      "Große Interzellularräume mit viel extrazellulärer Matrix",
      "Zellen liegen dicht aneinander mit wenig Interzellularsubstanz",
      "Epithelzellen sind reich an Blutgefäßen",
      "Epithelgewebe hat keine Basalmembran",
      "Epithelzellen teilen sich nicht",
    ],
    1,
    "Epithelgewebe zeichnet sich durch dicht gepackte Zellen mit sehr wenig Interzellularsubstanz aus. Es ist avaskulär (keine eigenen Blutgefäße, Ernährung durch Diffusion) und sitzt auf einer Basalmembran. Die Zellerneuerungsrate ist oft hoch (z. B. Darmepithel alle 3–5 Tage).",
    "leicht",
    ["epithelgewebe", "basalmembran", "histologie"]
  ),
  q(
    "bio-pool-193",
    "bio-kap2",
    "Welche Aussage zum Hormonsystem ist FALSCH?",
    [
      "Insulin senkt den Blutzuckerspiegel.",
      "Glukagon erhöht den Blutzuckerspiegel durch Glykogenolyse in der Leber.",
      "Adrenalin wird im Nebennierenmark produziert.",
      "Thyroxin (T4) wird in der Nebenschilddrüse (Parathyroidea) produziert.",
      "Cortisol wird in der Nebennierenrinde synthetisiert.",
    ],
    3,
    "Thyroxin (T4) wird in der Schilddrüse (Thyroidea) produziert, NICHT in der Nebenschilddrüse. Die Nebenschilddrüse (Parathyroidea) produziert Parathormon (PTH), das den Kalziumspiegel im Blut reguliert. Alle anderen Aussagen sind korrekt.",
    "mittel",
    ["hormone", "thyroxin", "nebenschilddrüse", "falsch-aussage"]
  ),
  q(
    "bio-pool-194",
    "bio-kap2",
    "Welcher Abschnitt des Dünndarms ist der Hauptort der Nährstoffresorption?",
    ["Duodenum", "Jejunum", "Ileum", "Zäkum", "Rektum"],
    1,
    "Das Jejunum ist der Hauptort der Nährstoffresorption im Dünndarm. Es hat eine große Resorptionsfläche durch Kerckring-Falten, Zotten und Mikrovilli. Das Duodenum dient v. a. der Durchmischung mit Galle und Pankreassaft. Das Ileum resorbiert Vitamin B12 und Gallensäuren. Zäkum und Rektum gehören zum Dickdarm.",
    "mittel",
    ["dünndarm", "jejunum", "resorption"]
  ),
  q(
    "bio-pool-195",
    "bio-kap2",
    "Ein Patient hat eine Schädigung des N. vagus. Welche Folge ist zu erwarten?",
    [
      "Erhöhte Herzfrequenz",
      "Verengung der Pupillen",
      "Erhöhte Magensäureproduktion",
      "Verstärkte Darmperistaltik",
      "Bronchospasmus",
    ],
    0,
    "Der N. vagus ist der wichtigste Nerv des Parasympathikus. Sein Ausfall führt zum Überwiegen des Sympathikus und damit zu einer erhöhten Herzfrequenz (Tachykardie). Die Magensäureproduktion und die Darmperistaltik werden reduziert (nicht erhöht), da der Parasympathikus diese fördert.",
    "schwer",
    ["vagus", "parasympathikus", "herzfrequenz"]
  ),
  q(
    "bio-pool-196",
    "bio-kap2",
    "Wo findet der Gasaustausch in der Lunge statt?",
    [
      "In den Bronchien (luftleitende Atemwege mit Knorpelspangen)",
      "In der Trachea (Luftröhre mit C-förmigen Knorpelspangen)",
      "In den Alveolen",
      "In den Bronchiolen",
      "Im Pleuraraum",
    ],
    2,
    "Der Gasaustausch (O₂-Aufnahme, CO₂-Abgabe) findet in den Alveolen (Lungenbläschen) statt. Die Blut-Luft-Schranke zwischen Alveolarepithel und Kapillarendothel ist nur ca. 0,2–0,6 µm dick. Die Gesamtfläche der ca. 300 Mio. Alveolen beträgt etwa 70–100 m².",
    "leicht",
    ["alveolen", "gasaustausch", "lunge"]
  ),
  q(
    "bio-pool-197",
    "bio-kap2",
    "Welche Blutgruppen-Konstellation führt bei einer Transfusion zur Agglutination?",
    [
      "Spender A, Empfänger AB",
      "Spender 0, Empfänger B",
      "Spender B, Empfänger A",
      "Spender 0, Empfänger A",
      "Spender 0, Empfänger AB",
    ],
    2,
    "Ein Empfänger mit Blutgruppe A besitzt Anti-B-Antikörper. Erhält er Blut der Gruppe B (mit B-Antigenen), kommt es zur Agglutination. Blutgruppe 0 besitzt keine A/B-Antigene und ist daher als Spender universell verträglich. AB-Empfänger haben keine Anti-A/Anti-B-Antikörper.",
    "mittel",
    ["blutgruppen", "agglutination", "transfusion"]
  ),
  q(
    "bio-pool-198",
    "bio-kap2",
    "Welche Zellen des Immunsystems sind für die humorale Immunantwort (Antikörperproduktion) verantwortlich?",
    [
      "Zytotoxische T-Zellen (CD8+)",
      "Natürliche Killerzellen (NK-Zellen)",
      "B-Lymphozyten und Plasmazellen",
      "Neutrophile Granulozyten",
      "Makrophagen (phagozytierende Antigenpräsentierende Zellen des Immunsystems)",
    ],
    2,
    "Die humorale Immunantwort beruht auf Antikörpern, die von Plasmazellen produziert werden. Plasmazellen entstehen durch Differenzierung aktivierter B-Lymphozyten. Zytotoxische T-Zellen und NK-Zellen gehören zur zellulären Immunantwort. Neutrophile und Makrophagen gehören zur angeborenen Immunität.",
    "mittel",
    ["immunsystem", "b-lymphozyten", "antikörper"]
  ),

  // ── bio-kap3: Evolution & Ökologie (14 Fragen) ──────────────────────
  q(
    "bio-pool-199",
    "bio-kap3",
    "Welche der folgenden Aussagen zur natürlichen Selektion ist richtig?",
    [
      "Natürliche Selektion erzeugt neue genetische Variationen.",
      "Natürliche Selektion wirkt auf den Phänotyp und beeinflusst indirekt den Genotyp der Population.",
      "Natürliche Selektion führt immer zu größeren und stärkeren Organismen.",
      "Natürliche Selektion wirkt nur auf einzelne Gene, nicht auf Organismen.",
      "Natürliche Selektion kann die Allelfrequenz in einer Population nicht verändern.",
    ],
    1,
    "Natürliche Selektion wirkt auf den Phänotyp: Individuen mit vorteilhaften Merkmalen überleben und reproduzieren sich besser, wodurch sich die Allelfrequenzen in der Population verschieben. Neue Variationen entstehen durch Mutation und Rekombination, nicht durch Selektion selbst.",
    "mittel",
    ["selektion", "evolution", "phänotyp"]
  ),
  q(
    "bio-pool-200",
    "bio-kap3",
    "Welche Aussage zum Hardy-Weinberg-Gleichgewicht ist FALSCH?",
    [
      "Es gilt für große, zufällig paarende Populationen.",
      "Mutation, Migration und Selektion dürfen nicht einwirken.",
      "Die Genotypfrequenzen berechnen sich nach p² + 2pq + q² = 1.",
      "Das Hardy-Weinberg-Gleichgewicht beschreibt sich ändernde Allelfrequenzen von Generation zu Generation.",
      "p + q = 1 beschreibt die Allelfrequenzen bei zwei Allelen.",
    ],
    3,
    "Das Hardy-Weinberg-Gleichgewicht beschreibt eine ideale Population, in der sich die Allelfrequenzen NICHT ändern (Gleichgewicht). Voraussetzungen: große Population, zufällige Paarung, keine Mutation, Migration oder Selektion. In der Realität sind diese Bedingungen nie vollständig erfüllt.",
    "mittel",
    ["hardy-weinberg", "allelfrequenz", "falsch-aussage"]
  ),
  q(
    "bio-pool-201",
    "bio-kap3",
    "Welcher Mechanismus führt am ehesten zu einer allopatrischen Artbildung?",
    [
      "Sexuelle Selektion innerhalb einer Population",
      "Geografische Isolation durch eine Gebirgsbildung",
      "Polyploidisierung bei Pflanzen",
      "Habitatisolation innerhalb desselben Gebiets",
      "Temporale Isolation durch unterschiedliche Blühzeiten",
    ],
    1,
    "Allopatrische Artbildung entsteht durch geografische Isolation: Eine Population wird physisch getrennt (z. B. durch Gebirge, Flüsse, Meere), und die Teilpopulationen entwickeln sich unabhängig weiter, bis sie reproduktiv isoliert sind. Sympatrische Artbildung (z. B. durch Polyploidisierung) geschieht ohne geografische Trennung.",
    "leicht",
    ["artbildung", "allopatrisch", "isolation"]
  ),
  q(
    "bio-pool-202",
    "bio-kap3",
    "Was versteht man unter konvergenter Evolution?",
    [
      "Die Entwicklung ähnlicher Merkmale bei nicht verwandten Arten aufgrund ähnlicher Umweltbedingungen",
      "Die Aufspaltung einer Art in viele verschiedene Arten",
      "Die Rückentwicklung eines Organs zu einem Rudiment",
      "Die gemeinsame Abstammung zweier eng verwandter Arten",
      "Die zufällige Veränderung der Allelfrequenzen in kleinen Populationen",
    ],
    0,
    "Konvergente Evolution beschreibt die unabhängige Entwicklung ähnlicher Merkmale bei nicht verwandten Arten als Anpassung an ähnliche Umweltbedingungen (Analogie). Beispiel: Stromlinienform bei Haien (Fische) und Delfinen (Säugetiere). Divergente Evolution (adaptive Radiation) ist die Aufspaltung in viele Arten.",
    "leicht",
    ["konvergenz", "evolution", "analogie"]
  ),
  q(
    "bio-pool-203",
    "bio-kap3",
    "In einer Population von Käfern mit brauner und grüner Färbung leben die Individuen auf brauner Baumrinde. Welche Art der Selektion wirkt hier am wahrscheinlichsten?",
    [
      "Disruptive Selektion",
      "Stabilisierende Selektion",
      "Gerichtete (direktionale) Selektion zugunsten brauner Käfer",
      "Sexuelle Selektion zugunsten grüner Käfer",
      "Keine Selektion, da die Färbung keinen Einfluss auf das Überleben hat",
    ],
    2,
    "Auf brauner Baumrinde sind braune Käfer besser getarnt und werden seltener von Fressfeinden erbeutet. Es wirkt gerichtete Selektion: Die Häufigkeit des Allels für braune Färbung nimmt zu, während grüne Käfer benachteiligt werden. Dies verschiebt die Merkmalsverteilung in eine Richtung.",
    "leicht",
    ["selektion", "tarnung", "direktionale selektion"]
  ),
  q(
    "bio-pool-204",
    "bio-kap3",
    "Welche der folgenden Aussagen zum Gendrift ist richtig?",
    [
      "Gendrift tritt nur in sehr großen Populationen auf.",
      "Gendrift ist eine zufällige Veränderung der Allelfrequenzen, besonders in kleinen Populationen.",
      "Gendrift führt immer zur Anpassung an die Umwelt.",
      "Gendrift wird durch natürliche Selektion gesteuert.",
      "Gendrift erhöht die genetische Vielfalt einer Population.",
    ],
    1,
    "Gendrift (genetische Drift) bezeichnet die zufällige Veränderung von Allelfrequenzen in einer Population. Der Effekt ist in kleinen Populationen besonders stark (Flaschenhals-Effekt, Gründereffekt). Gendrift ist NICHT adaptiv (nicht von Selektion gesteuert) und kann zur Fixierung oder zum Verlust von Allelen führen.",
    "mittel",
    ["gendrift", "allelfrequenz", "kleine populationen"]
  ),
  q(
    "bio-pool-205",
    "bio-kap3",
    "Welche Aussage zur ökologischen Nische ist FALSCH?",
    [
      "Die ökologische Nische beschreibt die Gesamtheit der Umweltanforderungen und Lebensweisen einer Art.",
      "Zwei Arten können dauerhaft dieselbe ökologische Nische im selben Habitat besetzen.",
      "Die Fundamentalnische ist größer als die Realnische.",
      "Interspezifische Konkurrenz kann zur Nischenverkleinerung führen.",
      "Die Realnische ist die tatsächlich besetzte Nische unter Konkurrenzdruck.",
    ],
    1,
    "Nach dem Konkurrenzausschlussprinzip (Gause) können zwei Arten NICHT dauerhaft dieselbe ökologische Nische im selben Habitat besetzen — eine Art wird die andere verdrängen. Die Fundamentalnische beschreibt den potenziellen Lebensraum ohne Konkurrenz, die Realnische den tatsächlich genutzten unter Konkurrenzbedingungen.",
    "mittel",
    ["ökologische nische", "konkurrenzausschluss", "falsch-aussage"]
  ),
  q(
    "bio-pool-206",
    "bio-kap3",
    "Was beschreibt der Flaschenhals-Effekt (bottleneck effect)?",
    [
      "Die Zunahme der genetischen Vielfalt nach einer Populationsexpansion",
      "Die drastische Reduktion der Populationsgröße, die zu einer verringerten genetischen Vielfalt führt",
      "Die gerichtete Selektion zugunsten eines bestimmten Phänotyps",
      "Die Gründung einer neuen Population durch wenige Individuen in einem neuen Habitat",
      "Die Kreuzung zwischen verschiedenen Arten (Hybridisierung)",
    ],
    1,
    "Beim Flaschenhals-Effekt wird eine Population durch ein katastrophales Ereignis (z. B. Naturkatastrophe, Epidemie) drastisch reduziert. Die überlebenden Individuen repräsentieren nur einen kleinen Teil der ursprünglichen genetischen Vielfalt. Der Gründereffekt (Option D) ist ein verwandtes, aber anderes Phänomen.",
    "leicht",
    ["flaschenhals-effekt", "gendrift", "genetische vielfalt"]
  ),
  q(
    "bio-pool-207",
    "bio-kap3",
    "In einem Wald existieren Produzenten (Pflanzen), Primärkonsumenten (Herbivore), Sekundärkonsumenten (Karnivore) und Destruenten. Wohin geht der größte Anteil der Energie auf jeder Trophieebene?",
    [
      "Er wird als Biomasse an die nächste Trophieebene weitergegeben.",
      "Er wird als Wärme durch Zellatmung abgegeben.",
      "Er wird in Form von ATP gespeichert.",
      "Er wird vollständig von Destruenten aufgenommen.",
      "Er geht durch Fotosynthese zurück an die Produzenten.",
    ],
    1,
    "Auf jeder Trophieebene wird der größte Teil der aufgenommenen Energie (ca. 90 %) durch Zellatmung als Wärme abgegeben. Nur etwa 10 % werden als Biomasse an die nächste Trophieebene weitergegeben (10-%-Regel von Lindeman). Deshalb haben Nahrungsketten selten mehr als 4–5 Stufen.",
    "mittel",
    ["trophieebenen", "energiefluss", "10-prozent-regel"]
  ),
  q(
    "bio-pool-208",
    "bio-kap3",
    "Welche Form der Symbiose liegt vor, wenn ein Clownfisch in den Tentakeln einer Seeanemone lebt und beide Partner einen Vorteil davon haben?",
    [
      "Parasitismus (einseitig nützliche Beziehung auf Kosten des Wirts)",
      "Kommensalismus",
      "Mutualismus",
      "Amensalismus",
      "Prädation (Räuber-Beute-Beziehung in der Nahrungskette)",
    ],
    2,
    "Mutualismus ist eine Symbioseform, bei der beide Partner profitieren. Der Clownfisch erhält Schutz vor Fressfeinden, und die Seeanemone profitiert von der Reinigung und dem Nahrungseintrag durch den Fisch. Beim Kommensalismus profitiert nur ein Partner, beim Parasitismus wird ein Partner geschädigt.",
    "leicht",
    ["symbiose", "mutualismus", "ökologie"]
  ),
  q(
    "bio-pool-209",
    "bio-kap3",
    "Was versteht man unter einer homologen Struktur?",
    [
      "Strukturen, die bei verschiedenen Arten die gleiche Funktion haben, aber unterschiedlichen Ursprung",
      "Strukturen, die einen gemeinsamen evolutionären Ursprung haben, aber unterschiedliche Funktionen erfüllen können",
      "Strukturen, die nur bei einer einzigen Art vorkommen",
      "Rudimentäre Organe ohne jede Funktion",
      "Strukturen, die durch konvergente Evolution entstanden sind",
    ],
    1,
    "Homologe Strukturen haben einen gemeinsamen evolutionären Ursprung (gleicher Bauplan), können aber verschiedene Funktionen erfüllen. Beispiel: Vorderextremitäten bei Wal (Flosse), Fledermaus (Flügel) und Mensch (Arm). Analoge Strukturen (Option A) haben gleiche Funktion bei verschiedenem Ursprung.",
    "leicht",
    ["homologie", "evolution", "vergleichende anatomie"]
  ),
  q(
    "bio-pool-210",
    "bio-kap3",
    "Eine isolierte Inselpopulation von Eidechsen hat durch ein Sturmtief 90 % ihrer Individuen verloren. Welche evolutionären Konsequenzen sind am wahrscheinlichsten?",
    [
      "Erhöhte genetische Vielfalt durch verstärkte Mutation",
      "Verringerte genetische Vielfalt und stärkere Auswirkung von Gendrift",
      "Keine Veränderung, da natürliche Selektion unverändert wirkt",
      "Sofortige Artbildung durch reproduktive Isolation",
      "Verstärkte gerichtete Selektion auf größere Körpergröße",
    ],
    1,
    "Der Verlust von 90 % der Population ist ein Flaschenhals-Effekt. Die überlebenden 10 % repräsentieren nur einen Bruchteil des genetischen Pools. In der nun kleinen Population hat Gendrift einen viel stärkeren Effekt als zuvor, und bestimmte Allele können zufällig verloren gehen oder fixiert werden.",
    "schwer",
    ["flaschenhals-effekt", "gendrift", "inselpopulation"]
  ),
  q(
    "bio-pool-211",
    "bio-kap3",
    "Welche Aussage zu Kohlenstoffkreislauf und Fotosynthese ist richtig?",
    [
      "Bei der Fotosynthese wird CO₂ freigesetzt und O₂ aufgenommen.",
      "Die Zellatmung fixiert CO₂ in organische Verbindungen.",
      "Pflanzen fixieren CO₂ in der Lichtreaktion der Fotosynthese.",
      "Die CO₂-Fixierung findet im Calvin-Zyklus (Dunkelreaktion) der Fotosynthese statt.",
      "Fossile Brennstoffe spielen keine Rolle im Kohlenstoffkreislauf.",
    ],
    3,
    "Die CO₂-Fixierung erfolgt im Calvin-Zyklus (Dunkelreaktion/lichtunabhängige Reaktion) durch das Enzym RuBisCO, das CO₂ an Ribulose-1,5-bisphosphat bindet. Die Lichtreaktion liefert ATP und NADPH, verbraucht aber kein CO₂ direkt. Fotosynthese nimmt CO₂ auf und gibt O₂ ab (nicht umgekehrt).",
    "mittel",
    ["fotosynthese", "calvin-zyklus", "kohlenstoffkreislauf"]
  ),
  q(
    "bio-pool-212",
    "bio-kap3",
    "Welche Struktur gilt als Beleg für die Evolution, obwohl sie beim Menschen keine offensichtliche Funktion mehr hat?",
    [
      "Der Bizepsmuskel (M. biceps brachii als Armbeuger am Oberarm)",
      "Der Appendix vermiformis (Wurmfortsatz)",
      "Die Leber (Hepar) als zentrales Stoffwechsel- und Syntheseorgan",
      "Das Kleinhirn (Cerebellum) für motorische Koordination und Gleichgewicht",
      "Die Schilddrüse (Glandula thyroidea) mit T3- und T4-Hormonproduktion",
    ],
    1,
    "Der Appendix vermiformis (Wurmfortsatz) gilt als rudimentäres Organ — ein Überbleibsel des bei Pflanzenfressern größeren Blinddarms. Obwohl er eine gewisse immunologische Funktion hat, ist er ein klassisches Beispiel für ein Rudiment als Evolutionsbeleg.",
    "leicht",
    ["rudiment", "appendix", "evolution"]
  ),

  // ── bio-kap4: Genetik (14 Fragen) ───────────────────────────────────
  q(
    "bio-pool-213",
    "bio-kap4",
    "Welche Aussage zur DNA-Replikation ist richtig?",
    [
      "Die DNA-Replikation verläuft konservativ: Ein Tochterstrang besteht nur aus neuem Material.",
      "Die DNA-Polymerase kann den neuen Strang nur in 5'→3'-Richtung synthetisieren.",
      "Beide Tochterstränge werden kontinuierlich synthetisiert.",
      "Die Helikase verbindet die Okazaki-Fragmente miteinander.",
      "RNA-Primase katalysiert die Spaltung der Wasserstoffbrücken zwischen den Basen.",
    ],
    1,
    "Die DNA-Polymerase synthetisiert den neuen Strang ausschließlich in 5'→3'-Richtung. Die Replikation ist semikonservativ (jeder Doppelstrang enthält einen alten und einen neuen Strang). Am Folgestrang entstehen Okazaki-Fragmente, die von der DNA-Ligase verbunden werden. Die Helikase trennt den Doppelstrang.",
    "mittel",
    ["dna-replikation", "dna-polymerase", "5-3-richtung"]
  ),
  q(
    "bio-pool-214",
    "bio-kap4",
    "Bei einem autosomal-rezessiven Erbgang sind beide Eltern heterozygote Merkmalsträger (Aa). Wie hoch ist die Wahrscheinlichkeit, dass ein Kind das Merkmal phänotypisch ausprägt?",
    ["0 %", "25 %", "50 %", "75 %", "100 %"],
    1,
    "Bei Aa × Aa ergibt sich nach Mendel: 1/4 AA, 2/4 Aa, 1/4 aa. Nur homozygot rezessive Individuen (aa) zeigen das Merkmal phänotypisch. Die Wahrscheinlichkeit beträgt 25 % (1/4).",
    "leicht",
    ["autosomal-rezessiv", "mendel", "kreuzung"]
  ),
  q(
    "bio-pool-215",
    "bio-kap4",
    "Welche Aussage zur Meiose ist FALSCH?",
    [
      "In der Meiose I werden homologe Chromosomen getrennt (Reduktions­teilung).",
      "In der Meiose II werden die Schwesterchromatiden getrennt.",
      "Crossing-over findet in der Prophase I statt und erhöht die genetische Variabilität.",
      "Am Ende der Meiose entstehen vier haploide Zellen.",
      "Am Ende der Meiose I entstehen zwei diploide Zellen.",
    ],
    4,
    "Am Ende der Meiose I entstehen zwei HAPLOIDE Zellen (nicht diploide), da die homologen Chromosomen getrennt werden (Reduktions­teilung). Jede Zelle enthält einen haploiden Chromosomensatz, auch wenn jedes Chromosom noch aus zwei Chromatiden besteht.",
    "mittel",
    ["meiose", "reduktions­teilung", "falsch-aussage"]
  ),
  q(
    "bio-pool-216",
    "bio-kap4",
    "Welches Enzym katalysiert die Transkription der mRNA von einer DNA-Vorlage?",
    ["DNA-Polymerase", "RNA-Polymerase II", "Reverse Transkriptase", "DNA-Ligase", "Topoisomerase"],
    1,
    "Die RNA-Polymerase II katalysiert die Transkription der mRNA (Boten-RNA) im Zellkern der Eukaryoten. Die DNA-Polymerase repliziert DNA, die Reverse Transkriptase schreibt RNA in DNA um (Retroviren), die Ligase verbindet DNA-Fragmente und die Topoisomerase löst Torsionsspannungen.",
    "leicht",
    ["transkription", "rna-polymerase", "mrna"]
  ),
  q(
    "bio-pool-217",
    "bio-kap4",
    "Was versteht man unter einer Punktmutation?",
    [
      "Die Verdopplung eines ganzen Chromosoms",
      "Den Austausch eines einzelnen Nukleotids in der DNA-Sequenz",
      "Die Deletion eines ganzen Gens",
      "Die Translokation eines Chromosomenabschnitts auf ein anderes Chromosom",
      "Die Inversion eines gesamten Chromosomenarms",
    ],
    1,
    "Eine Punktmutation ist der Austausch (Substitution), die Insertion oder die Deletion eines einzelnen Nukleotids. Man unterscheidet Missense- (Aminosäureaustausch), Nonsense- (Stoppcodon) und stille Mutationen (keine Aminosäureänderung). Die anderen Optionen beschreiben Chromosomenmutationen oder -aberrationen.",
    "leicht",
    ["punktmutation", "substitution", "mutation"]
  ),
  q(
    "bio-pool-218",
    "bio-kap4",
    "Ein Codon auf der mRNA lautet AUG. Welche Funktion hat dieses Codon?",
    [
      "Es ist ein Stoppcodon und beendet die Translation.",
      "Es codiert für Tryptophan.",
      "Es ist das Startcodon und codiert für Methionin.",
      "Es codiert für Alanin.",
      "Es ist ein Intron-Signal und wird beim Spleißen entfernt.",
    ],
    2,
    "AUG ist das universelle Startcodon der Translation und codiert für die Aminosäure Methionin. Jede mRNA-Translation beginnt mit AUG. Stoppcodons sind UAA, UAG und UGA. Tryptophan wird durch UGG codiert.",
    "leicht",
    ["codon", "aug", "startcodon", "methionin"]
  ),
  q(
    "bio-pool-219",
    "bio-kap4",
    "Welche der folgenden Aussagen zur Epigenetik ist richtig?",
    [
      "Epigenetische Veränderungen verändern die DNA-Basensequenz.",
      "DNA-Methylierung führt typischerweise zur Aktivierung der Genexpression.",
      "Histonacetylierung lockert die Chromatinstruktur und fördert die Transkription.",
      "Epigenetische Modifikationen können nicht an Tochterzellen weitergegeben werden.",
      "Epigenetische Veränderungen treten nur in Keimzellen auf.",
    ],
    2,
    "Histonacetylierung neutralisiert die positive Ladung der Histone, lockert die Bindung zur negativ geladenen DNA und macht das Chromatin zugänglicher für die Transkriptionsmaschinerie (Euchromatin). DNA-Methylierung hemmt typischerweise die Genexpression. Epigenetische Modifikationen verändern die Basensequenz nicht, können aber vererbt werden.",
    "schwer",
    ["epigenetik", "histonacetylierung", "genexpression"]
  ),
  q(
    "bio-pool-220",
    "bio-kap4",
    "Bei der Sichelzellanämie liegt eine Punktmutation im β-Globin-Gen vor. Welche Aminosäure wird durch welche ersetzt?",
    [
      "Valin durch Glutaminsäure",
      "Glutaminsäure durch Valin",
      "Histidin durch Prolin",
      "Cystein durch Tyrosin",
      "Leucin durch Phenylalanin",
    ],
    1,
    "Bei der Sichelzellanämie wird an Position 6 des β-Globins Glutaminsäure (hydrophil) durch Valin (hydrophob) ersetzt (GAG→GTG auf DNA-Ebene). Dies führt zur Polymerisation des desoxygenierten HbS und zur Sichelform der Erythrozyten.",
    "schwer",
    ["sichelzellanämie", "punktmutation", "hämoglobin"]
  ),
  q(
    "bio-pool-221",
    "bio-kap4",
    "Welche Aussage zum X-chromosomal-rezessiven Erbgang ist richtig?",
    [
      "Erkrankte Väter geben das Merkmal immer an ihre Söhne weiter.",
      "Frauen können das Merkmal nie ausprägen.",
      "Söhne einer heterozygoten Trägerin haben ein 50 %-Risiko, das Merkmal auszuprägen.",
      "Das Merkmal tritt bei Frauen häufiger auf als bei Männern.",
      "Heterozygote Trägerinnen zeigen immer das volle Krankheitsbild.",
    ],
    2,
    "Bei X-chromosomal-rezessivem Erbgang hat der Sohn einer heterozygoten Trägerin (X^a X) ein 50 %-Risiko, das betroffene X-Chromosom zu erben und das Merkmal als Hemizygot auszuprägen. Männer sind häufiger betroffen, da sie nur ein X haben. Frauen können betroffen sein (homozygot X^a X^a), dies ist aber selten.",
    "mittel",
    ["x-chromosomal", "erbgang", "trägerin"]
  ),
  q(
    "bio-pool-222",
    "bio-kap4",
    "Was beschreibt das zentrale Dogma der Molekularbiologie?",
    [
      "Proteine → RNA → DNA",
      "DNA → RNA → Protein",
      "RNA → DNA → Protein",
      "Protein → DNA → RNA",
      "DNA → Protein → RNA",
    ],
    1,
    "Das zentrale Dogma der Molekularbiologie (Francis Crick, 1958) beschreibt den Informationsfluss: DNA wird in RNA transkribiert, die RNA wird in Protein translatiert. Ausnahmen wie die Reverse Transkription (RNA→DNA bei Retroviren) ändern die grundlegende Richtung nicht.",
    "leicht",
    ["zentrales dogma", "transkription", "translation"]
  ),
  q(
    "bio-pool-223",
    "bio-kap4",
    "Welche der folgenden Techniken wird verwendet, um spezifische DNA-Abschnitte in vitro zu vervielfältigen?",
    [
      "Western Blot (immunologischer Proteinnachweis nach Gelelektrophorese)",
      "Gelelektrophorese (Auftrennung von Nukleinsäuren oder Proteinen nach Größe)",
      "Polymerase-Kettenreaktion (PCR)",
      "ELISA (Enzyme-Linked Immunosorbent Assay zum quantitativen Antigennachweis)",
      "Zentrifugation (Trennung von Zellbestandteilen nach Sedimentationskoeffizient)",
    ],
    2,
    "Die Polymerase-Kettenreaktion (PCR) vervielfältigt gezielt DNA-Abschnitte durch zyklische Schritte: Denaturierung (94 °C), Annealing (~55 °C, Primer-Hybridisierung) und Elongation (72 °C, Taq-Polymerase). Western Blot weist Proteine nach, ELISA detektiert Antigene/Antikörper.",
    "leicht",
    ["pcr", "dna-vervielfältigung", "molekularbiologie"]
  ),
  q(
    "bio-pool-224",
    "bio-kap4",
    "In einer Familie tritt Mukoviszidose (autosomal-rezessiv) auf. Beide Eltern sind phänotypisch gesund, aber Träger (Cf Cf). Wie hoch ist die Wahrscheinlichkeit, dass zwei aufeinanderfolgende Kinder BEIDE erkrankt sind?",
    ["1/2", "1/4", "1/8", "1/16", "1/64"],
    3,
    "Bei Cf × Cf (Carrier × Carrier) beträgt die Wahrscheinlichkeit für ein erkranktes Kind (cf cf) = 1/4. Für zwei unabhängige Ereignisse multipliziert man: 1/4 × 1/4 = 1/16. Jede Schwangerschaft ist ein unabhängiges Ereignis.",
    "schwer",
    ["mukoviszidose", "wahrscheinlichkeit", "autosomal-rezessiv"]
  ),
  q(
    "bio-pool-225",
    "bio-kap4",
    "Welche Aussage zur Genregulation bei Eukaryoten ist FALSCH?",
    [
      "Transkriptionsfaktoren binden an Promotorregionen und regulieren die Genexpression.",
      "Enhancer können die Transkription auch über große Entfernungen hinweg aktivieren.",
      "Alternatives Spleißen ermöglicht die Bildung verschiedener Proteine aus einem Gen.",
      "Bei Eukaryoten gibt es keine posttranskriptionelle Regulation der Genexpression.",
      "Silencer sind DNA-Sequenzen, die die Transkription hemmen können.",
    ],
    3,
    "Eukaryoten haben vielfältige posttranskriptionelle Regulationsmechanismen: mRNA-Stabilität, alternatives Spleißen, Translation-Kontrolle, miRNA-vermittelte Regulation und Proteinmodifikation. Die Aussage, es gäbe keine posttranskriptionelle Regulation, ist falsch.",
    "schwer",
    ["genregulation", "transkription", "spleißen", "falsch-aussage"]
  ),
  q(
    "bio-pool-226",
    "bio-kap4",
    "Was geschieht beim Crossing-over während der Meiose?",
    [
      "Homologe Chromosomen tauschen Abschnitte ihrer Chromatiden aus.",
      "Schwesterchromatiden werden voneinander getrennt.",
      "Die Zentriolen wandern zu den Zellpolen.",
      "Die Kernmembran löst sich auf.",
      "Die Chromosomen kondensieren zum ersten Mal.",
    ],
    0,
    "Beim Crossing-over (Prophase I der Meiose) tauschen homologe Chromosomen reziprok Abschnitte nicht-schwesterlicher Chromatiden aus. Dies führt zu einer Rekombination des genetischen Materials und erhöht die genetische Vielfalt der Nachkommen erheblich.",
    "mittel",
    ["crossing-over", "meiose", "rekombination"]
  ),

  // ── bio-kap5: Mikrobiologie & Humangenetik (14 Fragen) ──────────────
  q(
    "bio-pool-227",
    "bio-kap5",
    "Welche Aussage zu Viren ist richtig?",
    [
      "Viren besitzen einen eigenen Stoffwechsel und können sich selbstständig vermehren.",
      "Alle Viren besitzen eine Lipidmembran (Hülle).",
      "Viren enthalten entweder DNA oder RNA als Erbmaterial, aber niemals beides gleichzeitig.",
      "Viren sind größer als die meisten Bakterien.",
      "Viren werden durch Antibiotika abgetötet.",
    ],
    2,
    "Viren enthalten entweder DNA oder RNA als genetisches Material, niemals beides. Sie haben keinen eigenen Stoffwechsel und sind obligat intrazelluläre Parasiten. Nicht alle Viren sind behüllt (z. B. Adenoviren sind unbehüllt). Viren sind meist 20–300 nm groß (kleiner als Bakterien). Antibiotika wirken nur gegen Bakterien.",
    "leicht",
    ["viren", "dna", "rna", "obligat intrazellulär"]
  ),
  q(
    "bio-pool-228",
    "bio-kap5",
    "Welche der folgenden Aussagen zu Bakterien ist FALSCH?",
    [
      "Bakterien sind Prokaryoten und besitzen keinen membranumschlossenen Zellkern.",
      "Viele Bakterien besitzen eine Zellwand aus Peptidoglykan (Murein).",
      "Bakterien können Plasmide tragen, die zusätzliche Gene (z. B. Antibiotikaresistenzen) enthalten.",
      "Bakterien vermehren sich durch Meiose.",
      "Einige Bakterien können Endosporen bilden, die extrem widerstandsfähig sind.",
    ],
    3,
    "Bakterien vermehren sich durch binäre Fission (Zweiteilung), NICHT durch Meiose. Meiose ist ein eukaryotischer Zellteilungsprozess zur Bildung haploider Keimzellen. Alle anderen Aussagen sind korrekt: Prokaryoten, Peptidoglykan-Zellwand, Plasmide und Endosporen.",
    "leicht",
    ["bakterien", "zellteilung", "meiose", "falsch-aussage"]
  ),
  q(
    "bio-pool-229",
    "bio-kap5",
    "Welcher Mechanismus der Antibiotikaresistenz wird durch horizontalen Gentransfer zwischen Bakterien vermittelt?",
    [
      "Spontane Punktmutationen im Bakterienchromosom",
      "Konjugation (Übertragung von Plasmiden über Pili)",
      "Vertikale Vererbung von Chromosomenmutationen",
      "Selektion resistenter Klone durch UV-Strahlung",
      "Zufällige Deletionen im Genom",
    ],
    1,
    "Konjugation ist ein Mechanismus des horizontalen Gentransfers, bei dem Bakterien Plasmide (z. B. mit Resistenzgenen) über F-Pili an andere Bakterien übertragen. Weitere horizontale Gentransfer-Mechanismen sind Transformation (Aufnahme freier DNA) und Transduktion (via Bakteriophagen). Punktmutationen und vertikale Vererbung sind keine horizontalen Transfers.",
    "mittel",
    ["antibiotikaresistenz", "konjugation", "horizontaler gentransfer"]
  ),
  q(
    "bio-pool-230",
    "bio-kap5",
    "Ein Patient wird positiv auf Trisomie 21 (Down-Syndrom) getestet. Welche chromosomale Aberration liegt vor?",
    [
      "Ein zusätzliches X-Chromosom (47,XXY)",
      "Drei Kopien des Chromosoms 21 (47,XX/XY,+21)",
      "Deletion eines Teils von Chromosom 21",
      "Translokation von Chromosom 21 auf Chromosom 14 (in allen Fällen)",
      "Ein fehlendes Chromosom 21 (Monosomie 21)",
    ],
    1,
    "Trisomie 21 bedeutet drei Kopien des Chromosoms 21 (Karyotyp 47,XX,+21 oder 47,XY,+21). Die häufigste Ursache ist Non-Disjunction in der Meiose. Eine Translokations-Trisomie (Robertson-Translokation 14;21) kommt in ca. 3–4 % der Fälle vor, aber nicht in allen. 47,XXY ist das Klinefelter-Syndrom.",
    "leicht",
    ["trisomie 21", "down-syndrom", "chromosomenaberration"]
  ),
  q(
    "bio-pool-231",
    "bio-kap5",
    "Welche Aussage zur Immunabwehr ist richtig?",
    [
      "Die angeborene Immunität ist hochspezifisch für einzelne Erreger.",
      "T-Killerzellen gehören zur humoralen Immunantwort.",
      "Dendritische Zellen sind professionelle Antigen-präsentierende Zellen, die T-Zellen aktivieren.",
      "Antikörper werden ausschließlich von T-Helferzellen produziert.",
      "Das Komplementsystem ist Teil der adaptiven Immunantwort.",
    ],
    2,
    "Dendritische Zellen sind die wichtigsten professionellen Antigen-präsentierenden Zellen (APCs). Sie nehmen Antigene auf, prozessieren sie und präsentieren sie auf MHC-Molekülen an T-Zellen in den Lymphknoten. Die angeborene Immunität ist UNSPEZIFISCH. T-Killerzellen gehören zur zellulären (nicht humoralen) Immunantwort. Antikörper werden von Plasmazellen (B-Zellen) produziert.",
    "mittel",
    ["immunsystem", "dendritische zellen", "antigen-präsentation"]
  ),
  q(
    "bio-pool-232",
    "bio-kap5",
    "Welche Blutgruppen-Kombination der Eltern kann KEIN Kind mit Blutgruppe AB hervorbringen?",
    [
      "Mutter A (heterozygot), Vater B (heterozygot)",
      "Mutter AB, Vater 0",
      "Mutter 0, Vater 0",
      "Mutter A (homozygot), Vater B (homozygot)",
      "Mutter AB, Vater AB",
    ],
    2,
    "Eltern mit Blutgruppe 0 × 0 haben beide den Genotyp ii und können nur Kinder mit Blutgruppe 0 (ii) haben. Für Blutgruppe AB müsste das Kind ein I^A- und ein I^B-Allel haben, was bei diesen Eltern unmöglich ist.",
    "mittel",
    ["blutgruppen", "vererbung", "abo-system"]
  ),
  q(
    "bio-pool-233",
    "bio-kap5",
    "Was bewirkt eine Impfung (aktive Immunisierung) im Körper?",
    [
      "Die direkte Zufuhr von Antikörpern gegen einen bestimmten Erreger",
      "Die Stimulation des adaptiven Immunsystems zur Bildung von Gedächtniszellen",
      "Die Zerstörung aller Bakterien im Körper",
      "Die Hemmung der Antikörperproduktion",
      "Die Deaktivierung des angeborenen Immunsystems",
    ],
    1,
    "Bei der aktiven Immunisierung wird dem Körper ein abgeschwächter oder inaktivierter Erreger (oder dessen Bestandteile) zugeführt. Das adaptive Immunsystem bildet spezifische B- und T-Gedächtniszellen, die bei erneutem Kontakt eine schnelle und starke Immunantwort ermöglichen. Die passive Immunisierung (Option A) liefert fertige Antikörper.",
    "leicht",
    ["impfung", "aktive immunisierung", "gedächtniszellen"]
  ),
  q(
    "bio-pool-234",
    "bio-kap5",
    "Welche Aussage zur Vererbung der Blutgruppen im ABO-System ist FALSCH?",
    [
      "Die Allele I^A und I^B sind kodominant.",
      "Das Allel i (Blutgruppe 0) ist rezessiv gegenüber I^A und I^B.",
      "Personen mit Blutgruppe AB besitzen Anti-A- und Anti-B-Antikörper.",
      "Personen mit Blutgruppe 0 haben den Genotyp ii.",
      "Blutgruppe A kann den Genotyp I^A I^A oder I^A i haben.",
    ],
    2,
    "Personen mit Blutgruppe AB besitzen KEINE Anti-A- oder Anti-B-Antikörper und sind daher Universalempfänger. Sie tragen sowohl A- als auch B-Antigene auf ihren Erythrozyten. Personen mit Blutgruppe 0 besitzen dagegen Anti-A- UND Anti-B-Antikörper.",
    "mittel",
    ["blutgruppen", "kodominanz", "antikörper", "falsch-aussage"]
  ),
  q(
    "bio-pool-235",
    "bio-kap5",
    "Welche Zellen sind Hauptangriffsziel des HI-Virus (HIV)?",
    [
      "Erythrozyten (bikonkave, kernlose rote Blutkörperchen)",
      "Thrombozyten (kernlose Blutplättchen für die Hämostase)",
      "CD4-positive T-Helferzellen",
      "Neutrophile Granulozyten",
      "Osteoblasten (knochenaufbauende Zellen, die Osteoid bilden)",
    ],
    2,
    "HIV (humanes Immundefizienzvirus) befällt primär CD4⁺-T-Helferzellen, da das Virus den CD4-Rezeptor als Hauptrezeptor für den Zelleintritt nutzt (zusammen mit CCR5 oder CXCR4 als Korezeptor). Die Zerstörung der T-Helferzellen führt zum Immundefekt (AIDS).",
    "mittel",
    ["hiv", "cd4", "t-helferzellen"]
  ),
  q(
    "bio-pool-236",
    "bio-kap5",
    "Bei der PCR-Diagnostik wird Taq-Polymerase verwendet. Warum ist gerade dieses Enzym geeignet?",
    [
      "Es arbeitet besonders schnell bei Raumtemperatur.",
      "Es ist hitzestabil und übersteht den Denaturierungsschritt bei ~95 °C.",
      "Es benötigt keine Primer für die DNA-Synthese.",
      "Es kann RNA direkt in DNA umschreiben.",
      "Es repariert gleichzeitig Mutationen in der DNA.",
    ],
    1,
    "Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus und ist hitzestabil (optimale Aktivität bei ~72 °C). Sie übersteht den Denaturierungsschritt bei ~95 °C und muss daher nicht nach jedem Zyklus neu zugegeben werden. Reverse Transkriptase (nicht Taq) schreibt RNA in DNA um.",
    "mittel",
    ["pcr", "taq-polymerase", "thermus aquaticus"]
  ),
  q(
    "bio-pool-237",
    "bio-kap5",
    "Welche der folgenden Chromosomenstörungen führt zum Turner-Syndrom?",
    ["47,XXY", "47,XYY", "45,X", "47,XXX", "47,+21"],
    2,
    "Das Turner-Syndrom hat den Karyotyp 45,X (Monosomie X) — es fehlt ein Geschlechtschromosom. Betroffene sind phänotypisch weiblich mit Kleinwuchs, Streak-Gonaden und Infertilität. 47,XXY ist das Klinefelter-Syndrom, 47,+21 das Down-Syndrom.",
    "leicht",
    ["turner-syndrom", "monosomie x", "geschlechtschromosomen"]
  ),
  q(
    "bio-pool-238",
    "bio-kap5",
    "Welche Aussage zu MHC-Molekülen (HLA) ist richtig?",
    [
      "MHC-I-Moleküle präsentieren Antigene ausschließlich an B-Zellen.",
      "MHC-II-Moleküle kommen auf allen kernhaltigen Zellen vor.",
      "MHC-I-Moleküle präsentieren intrazelluläre Antigene und kommen auf fast allen kernhaltigen Zellen vor.",
      "MHC-Moleküle spielen keine Rolle bei der Transplantatabstoßung.",
      "MHC-I- und MHC-II-Moleküle sind funktionell identisch.",
    ],
    2,
    "MHC-I-Moleküle kommen auf fast allen kernhaltigen Zellen vor und präsentieren intrazelluläre Peptide (z. B. virale Proteine) an CD8⁺-T-Zellen. MHC-II-Moleküle kommen nur auf professionellen Antigen-präsentierenden Zellen (APCs) vor und präsentieren extrazelluläre Antigene an CD4⁺-T-Helferzellen. MHC-Moleküle sind zentral für die Transplantatabstoßung.",
    "schwer",
    ["mhc", "hla", "antigen-präsentation"]
  ),
  q(
    "bio-pool-239",
    "bio-kap5",
    "Ein Retrovirus wie HIV besitzt das Enzym Reverse Transkriptase. Welche Funktion hat dieses Enzym?",
    [
      "Es repliziert die virale DNA.",
      "Es transkribiert die virale DNA in mRNA.",
      "Es schreibt die virale RNA in DNA um.",
      "Es spaltet Proteine in Aminosäuren.",
      "Es transportiert das Virus in den Zellkern.",
    ],
    2,
    "Die Reverse Transkriptase schreibt das virale RNA-Genom in DNA um (reverse Transkription: RNA→DNA). Diese DNA (Provirus) wird dann in das Wirtsgenom integriert. Der Informationsfluss RNA→DNA ist die Umkehrung des zentralen Dogmas und namensgebend für Retroviren.",
    "mittel",
    ["retrovirus", "reverse transkriptase", "hiv"]
  ),
  q(
    "bio-pool-240",
    "bio-kap5",
    "Bei einer Patientin wird eine Deletion auf dem kurzen Arm von Chromosom 5 festgestellt (5p-Syndrom). Welcher klinische Phänotyp ist zu erwarten?",
    [
      "Marfan-Syndrom mit Arachnodaktylie",
      "Cri-du-Chat-Syndrom mit katzenartigem Schrei im Säuglingsalter",
      "Klinefelter-Syndrom mit Gynäkomastie",
      "Edwards-Syndrom mit schwerer geistiger Retardierung und Organfehlbildungen",
      "Prader-Willi-Syndrom mit extremer Adipositas",
    ],
    1,
    "Das Cri-du-Chat-Syndrom (Katzenschrei-Syndrom) wird durch eine Deletion auf dem kurzen Arm von Chromosom 5 (5p-) verursacht. Charakteristisch ist der katzenartige Schrei im Säuglingsalter (durch Kehlkopffehlbildung), Mikrozephalie und geistige Retardierung. Edwards-Syndrom = Trisomie 18, Marfan = FBN1-Genmutation auf Chr. 15.",
    "schwer",
    ["cri-du-chat", "deletion", "chromosomenaberration"]
  ),
];
