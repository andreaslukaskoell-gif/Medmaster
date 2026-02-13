export interface Question {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  chapter: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export const bmsQuestions: Question[] = [
  // === BIOLOGIE ===
  {
    id: "bio-1",
    subject: "biologie",
    chapter: "zellbiologie",
    text: "Welche Organelle ist für die oxidative Phosphorylierung und damit für die ATP-Synthese in eukaryotischen Zellen hauptverantwortlich?",
    options: [
      { id: "a", text: "Endoplasmatisches Retikulum" },
      { id: "b", text: "Golgi-Apparat" },
      { id: "c", text: "Mitochondrium" },
      { id: "d", text: "Lysosom" },
      { id: "e", text: "Peroxisom" },
    ],
    correctOptionId: "c",
    explanation:
      "Mitochondrien sind die 'Kraftwerke der Zelle'. In der inneren Mitochondrienmembran findet die Elektronentransportkette statt, die den Protonengradienten aufbaut, welcher die ATP-Synthase antreibt (oxidative Phosphorylierung). Pro Glucosemolekül entstehen hier ca. 34 der insgesamt 38 ATP.",
  },
  {
    id: "bio-2",
    subject: "biologie",
    chapter: "genetik",
    text: "Bei der Meiose kommt es in der Prophase I zum Crossing-over. Welche biologische Bedeutung hat dieser Vorgang?",
    options: [
      { id: "a", text: "Verdopplung der DNA" },
      { id: "b", text: "Erhöht die genetische Variabilität durch Rekombination" },
      { id: "c", text: "Reparatur von DNA-Schäden" },
      { id: "d", text: "Verkürzung der Chromosomen" },
      { id: "e", text: "Trennung der Schwesterchromatiden" },
    ],
    correctOptionId: "b",
    explanation:
      "Beim Crossing-over (Rekombination) werden homologe Chromosomenabschnitte zwischen den Chromatiden homologer Chromosomen ausgetauscht. Dies führt zu neuen Genkombinationen auf den Chromatiden und ist ein wesentlicher Mechanismus zur Erhöhung der genetischen Variabilität in der geschlechtlichen Fortpflanzung.",
  },
  {
    id: "bio-3",
    subject: "biologie",
    chapter: "humanbiologie",
    text: "Welches Hormon wird von den Beta-Zellen der Langerhans-Inseln im Pankreas produziert und senkt den Blutzuckerspiegel?",
    options: [
      { id: "a", text: "Glucagon" },
      { id: "b", text: "Insulin" },
      { id: "c", text: "Somatostatin" },
      { id: "d", text: "Adrenalin" },
      { id: "e", text: "Cortisol" },
    ],
    correctOptionId: "b",
    explanation:
      "Insulin wird von den Beta-Zellen der Langerhans-Inseln im Pankreas sezerniert. Es fördert die Glucoseaufnahme in Muskel- und Fettzellen durch Translokation von GLUT4-Transportern, stimuliert die Glykogensynthese und hemmt die Gluconeogenese. Glucagon (Alpha-Zellen) wirkt antagonistisch und erhöht den Blutzucker.",
  },
  {
    id: "bio-4",
    subject: "biologie",
    chapter: "oekologie",
    text: "Welcher Begriff beschreibt die maximale Populationsgröße, die ein Lebensraum dauerhaft ernähren kann?",
    options: [
      { id: "a", text: "Biotische Kapazität" },
      { id: "b", text: "Ökologische Nische" },
      { id: "c", text: "Kapazitätsgrenze (Carrying Capacity)" },
      { id: "d", text: "Minimumgesetz" },
      { id: "e", text: "Populationsdichte" },
    ],
    correctOptionId: "c",
    explanation:
      "Die Kapazitätsgrenze (Carrying Capacity, K) beschreibt die maximale Anzahl von Individuen einer Art, die ein bestimmter Lebensraum mit seinen begrenzten Ressourcen (Nahrung, Raum, Wasser) langfristig tragen kann. Bei Erreichen von K nähert sich die Wachstumsrate der Population Null (logistisches Wachstum).",
  },
  {
    id: "bio-5",
    subject: "biologie",
    chapter: "zellbiologie",
    text: "Welcher Prozess beschreibt den Transport von Stoffen gegen ein Konzentrationsgefälle unter ATP-Verbrauch?",
    options: [
      { id: "a", text: "Osmose" },
      { id: "b", text: "Erleichterte Diffusion" },
      { id: "c", text: "Aktiver Transport" },
      { id: "d", text: "Passive Diffusion" },
      { id: "e", text: "Endozytose" },
    ],
    correctOptionId: "c",
    explanation:
      "Beim aktiven Transport werden Substanzen unter Energieverbrauch (meist ATP-Hydrolyse) gegen ihr Konzentrationsgefälle durch die Membran transportiert. Ein klassisches Beispiel ist die Na+/K+-ATPase, die 3 Na+ aus der Zelle und 2 K+ in die Zelle pumpt. Im Gegensatz dazu erfolgen Diffusion und Osmose passiv entlang des Konzentrationsgradienten.",
  },
  {
    id: "bio-6",
    subject: "biologie",
    chapter: "genetik",
    text: "Beim ABO-Blutgruppensystem spricht man von kodominanter Vererbung. Was bedeutet Kodominanz?",
    options: [
      { id: "a", text: "Ein Allel unterdrückt die Expression des anderen vollständig" },
      { id: "b", text: "Beide Allele werden im heterozygoten Zustand gleichermaßen exprimiert" },
      { id: "c", text: "Die Merkmale vermischen sich zu einem Zwischenphänotyp" },
      { id: "d", text: "Nur das mütterliche Allel wird exprimiert" },
      { id: "e", text: "Ein Allel wird nur unter bestimmten Umweltbedingungen exprimiert" },
    ],
    correctOptionId: "b",
    explanation:
      "Bei Kodominanz werden beide Allele im heterozygoten Zustand gleichermaßen und unabhängig voneinander exprimiert. Beim ABO-System führt der Genotyp I^A I^B zur Blutgruppe AB, da beide Antigene (A und B) auf der Erythrozytenoberfläche gebildet werden. Dies unterscheidet sich von intermediärem Erbgang, bei dem ein Zwischenphänotyp entsteht.",
  },
  {
    id: "bio-7",
    subject: "biologie",
    chapter: "humanbiologie",
    text: "Welche Struktur des Erregungsleitungssystems des Herzens ist der primäre Schrittmacher?",
    options: [
      { id: "a", text: "Atrioventrikulärknoten (AV-Knoten)" },
      { id: "b", text: "His-Bündel" },
      { id: "c", text: "Sinusknoten (SA-Knoten)" },
      { id: "d", text: "Purkinje-Fasern" },
      { id: "e", text: "Tawara-Schenkel" },
    ],
    correctOptionId: "c",
    explanation:
      "Der Sinusknoten (SA-Knoten) liegt im rechten Vorhof und ist der primäre Schrittmacher des Herzens mit einer Eigenfrequenz von ca. 60-80 Schlägen pro Minute. Er generiert spontane elektrische Impulse, die über die Vorhöfe zum AV-Knoten weitergeleitet werden. Fällt der Sinusknoten aus, kann der AV-Knoten als sekundärer Schrittmacher mit niedrigerer Frequenz (ca. 40-50/min) einspringen.",
  },
  {
    id: "bio-8",
    subject: "biologie",
    chapter: "zellbiologie",
    text: "Welche Struktur ist in prokaryotischen Zellen NICHT vorhanden?",
    options: [
      { id: "a", text: "Ribosomen" },
      { id: "b", text: "Zellmembran" },
      { id: "c", text: "Membranumhüllter Zellkern" },
      { id: "d", text: "DNA" },
      { id: "e", text: "Zellwand" },
    ],
    correctOptionId: "c",
    explanation:
      "Prokaryoten (z.B. Bakterien) besitzen keinen membranumhüllten Zellkern. Ihre DNA liegt frei im Cytoplasma als ringförmiges Chromosom im sogenannten Nukleoid vor. Eukaryoten hingegen haben einen durch eine Doppelmembran (Kernhülle) abgegrenzten Zellkern. Ribosomen, Zellmembran und DNA sind in beiden Zelltypen vorhanden, wobei prokaryotische Ribosomen kleiner sind (70S vs. 80S).",
  },
  {
    id: "bio-9",
    subject: "biologie",
    chapter: "oekologie",
    text: "Welche Art der Symbiose wird als Mutualismus bezeichnet?",
    options: [
      { id: "a", text: "Ein Partner profitiert, der andere wird geschädigt" },
      { id: "b", text: "Beide Partner profitieren voneinander" },
      { id: "c", text: "Ein Partner profitiert, der andere bleibt unbeeinflusst" },
      { id: "d", text: "Beide Partner werden geschädigt" },
      { id: "e", text: "Beide Partner konkurrieren um dieselbe Ressource" },
    ],
    correctOptionId: "b",
    explanation:
      "Mutualismus ist eine Form der Symbiose, bei der beide beteiligten Arten einen Vorteil aus der Beziehung ziehen (+/+). Ein klassisches Beispiel ist die Mykorrhiza, bei der Pilze die Pflanzenwurzel besiedeln und Mineralstoffe liefern, während die Pflanze dem Pilz organische Nährstoffe bereitstellt. Im Gegensatz dazu profitiert beim Parasitismus nur ein Partner auf Kosten des anderen (+/-).",
  },
  {
    id: "bio-10",
    subject: "biologie",
    chapter: "genetik",
    text: "Bei autosomal-rezessivem Erbgang sind beide Eltern heterozygote Überträger (Aa). Wie groß ist die Wahrscheinlichkeit, dass ein Kind phänotypisch betroffen (aa) ist?",
    options: [
      { id: "a", text: "0%" },
      { id: "b", text: "25%" },
      { id: "c", text: "50%" },
      { id: "d", text: "75%" },
      { id: "e", text: "100%" },
    ],
    correctOptionId: "b",
    explanation:
      "Nach den Mendelschen Regeln ergibt die Kreuzung Aa x Aa folgende Genotypen: 1/4 AA, 2/4 Aa, 1/4 aa. Nur homozygot rezessive Individuen (aa) zeigen den betroffenen Phänotyp, also beträgt die Wahrscheinlichkeit 25%. Die Hälfte der Nachkommen (Aa) sind heterozygote Überträger und 25% (AA) sind weder betroffen noch Überträger.",
  },

  // === CHEMIE ===
  {
    id: "chem-1",
    subject: "chemie",
    chapter: "atombau",
    text: "Wie viele Elektronen kann die dritte Elektronenschale (n=3) maximal aufnehmen?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "18" },
      { id: "c", text: "32" },
      { id: "d", text: "2" },
      { id: "e", text: "10" },
    ],
    correctOptionId: "b",
    explanation:
      "Die maximale Elektronenzahl pro Schale berechnet sich nach der Formel 2n². Für n=3: 2 x 3² = 2 x 9 = 18 Elektronen. Die dritte Schale hat die Unterschalen 3s (2e-), 3p (6e-) und 3d (10e-), zusammen 18 Elektronen.",
  },
  {
    id: "chem-2",
    subject: "chemie",
    chapter: "bindungen",
    text: "Welche Bindungsart entsteht, wenn ein Atom mit hoher Elektronegativität ein Elektron von einem Atom mit niedriger Elektronegativität übernimmt?",
    options: [
      { id: "a", text: "Kovalente Bindung" },
      { id: "b", text: "Ionenbindung" },
      { id: "c", text: "Metallische Bindung" },
      { id: "d", text: "Van-der-Waals-Bindung" },
      { id: "e", text: "Wasserstoffbrückenbindung" },
    ],
    correctOptionId: "b",
    explanation:
      "Bei der Ionenbindung ist die Elektronegativitätsdifferenz so groß (>1.7), dass ein vollständiger Elektronenübertrag stattfindet. Das elektronegativere Atom wird zum Anion, das weniger elektronegative zum Kation. Die elektrostatische Anziehung zwischen den entgegengesetzt geladenen Ionen bildet die Ionenbindung (z.B. NaCl).",
  },
  {
    id: "chem-3",
    subject: "chemie",
    chapter: "säuren-basen",
    text: "Welchen pH-Wert hat eine Salzsäurelösung mit der Konzentration c(HCl) = 0,001 mol/L?",
    options: [
      { id: "a", text: "pH = 1" },
      { id: "b", text: "pH = 2" },
      { id: "c", text: "pH = 3" },
      { id: "d", text: "pH = 4" },
      { id: "e", text: "pH = 7" },
    ],
    correctOptionId: "c",
    explanation:
      "HCl ist eine starke Säure und dissoziiert vollständig: HCl -> H+ + Cl-. Die H+-Konzentration entspricht daher der HCl-Konzentration: c(H+) = 0,001 mol/L = 10^-3 mol/L. Der pH-Wert berechnet sich als: pH = -log(c(H+)) = -log(10^-3) = 3.",
  },
  {
    id: "chem-4",
    subject: "chemie",
    chapter: "organische-chemie",
    text: "Welche funktionelle Gruppe kennzeichnet Aldehyde?",
    options: [
      { id: "a", text: "-COOH (Carboxylgruppe)" },
      { id: "b", text: "-OH (Hydroxylgruppe)" },
      { id: "c", text: "-CHO (Aldehydgruppe/Formylgruppe)" },
      { id: "d", text: "-CO- (Ketogruppe)" },
      { id: "e", text: "-NH2 (Aminogruppe)" },
    ],
    correctOptionId: "c",
    explanation:
      "Aldehyde besitzen die Formylgruppe (-CHO), eine Carbonylgruppe (C=O) an einem endständigen Kohlenstoffatom, das zusätzlich ein Wasserstoffatom trägt. Im Gegensatz dazu tragen Ketone die Carbonylgruppe zwischen zwei Kohlenstoffatomen (-CO-), und Carbonsäuren haben eine Carboxylgruppe (-COOH).",
  },
  {
    id: "chem-5",
    subject: "chemie",
    chapter: "atombau",
    text: "Welches Teilchen hat im Kern 17 Protonen und 18 Neutronen, und besitzt insgesamt 18 Elektronen?",
    options: [
      { id: "a", text: "Cl-Atom (neutral)" },
      { id: "b", text: "Ar-Atom (neutral)" },
      { id: "c", text: "Chlorid-Ion (Cl-)" },
      { id: "d", text: "Kalium-Ion (K+)" },
      { id: "e", text: "Sulfid-Ion (S²-)" },
    ],
    correctOptionId: "c",
    explanation:
      "17 Protonen identifizieren das Element Chlor (Ordnungszahl 17). Ein neutrales Cl-Atom hätte 17 Elektronen. Da dieses Teilchen 18 Elektronen besitzt (eines mehr), handelt es sich um das einfach negativ geladene Chlorid-Ion Cl-. Die Massenzahl beträgt 17+18 = 35 (Cl-35, das häufigste Chlorisotop).",
  },
  {
    id: "chem-6",
    subject: "chemie",
    chapter: "säuren-basen",
    text: "Welches Puffersystem ist das wichtigste Puffersystem im menschlichen Blut zur Regulation des pH-Wertes?",
    options: [
      { id: "a", text: "Phosphatpuffer (H2PO4-/HPO4²-)" },
      { id: "b", text: "Kohlensäure-Bicarbonat-Puffer (H2CO3/HCO3-)" },
      { id: "c", text: "Proteinatpuffer" },
      { id: "d", text: "Ammoniak-Puffer (NH3/NH4+)" },
      { id: "e", text: "Acetatpuffer (CH3COOH/CH3COO-)" },
    ],
    correctOptionId: "b",
    explanation:
      "Der Kohlensäure-Bicarbonat-Puffer (H2CO3/HCO3-) ist das wichtigste Puffersystem im Blut und hält den pH-Wert im physiologischen Bereich von 7,35-7,45. Sein Vorteil liegt in der offenen Systemcharakteristik: Überschüssiges CO2 kann über die Lunge abgeatmet und HCO3- über die Niere reguliert werden. Die Henderson-Hasselbalch-Gleichung beschreibt das Gleichgewicht dieses Systems.",
  },
  {
    id: "chem-7",
    subject: "chemie",
    chapter: "organische-chemie",
    text: "Welche funktionellen Gruppen besitzen alle Aminosäuren?",
    options: [
      { id: "a", text: "Hydroxylgruppe (-OH) und Carboxylgruppe (-COOH)" },
      { id: "b", text: "Aminogruppe (-NH2) und Carboxylgruppe (-COOH)" },
      { id: "c", text: "Aminogruppe (-NH2) und Aldehydgruppe (-CHO)" },
      { id: "d", text: "Thiolgruppe (-SH) und Aminogruppe (-NH2)" },
      { id: "e", text: "Phosphatgruppe (-PO4) und Carboxylgruppe (-COOH)" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle Aminosäuren besitzen eine Aminogruppe (-NH2) und eine Carboxylgruppe (-COOH), die am selben Kohlenstoffatom (alpha-C-Atom) gebunden sind. Zusätzlich tragen sie eine variable Seitenkette (R-Gruppe), die die spezifischen Eigenschaften jeder Aminosäure bestimmt. Bei physiologischem pH liegen Aminosäuren als Zwitterionen vor, wobei die Aminogruppe protoniert (-NH3+) und die Carboxylgruppe deprotoniert (-COO-) ist.",
  },
  {
    id: "chem-8",
    subject: "chemie",
    chapter: "bindungen",
    text: "Unter welchen Bedingungen treten Wasserstoffbrückenbindungen auf?",
    options: [
      { id: "a", text: "Zwischen zwei beliebigen Wasserstoffatomen" },
      { id: "b", text: "Nur innerhalb von Wassermolekülen" },
      { id: "c", text: "Zwischen einem an ein elektronegatives Atom (N, O, F) gebundenen Wasserstoff und einem weiteren elektronegativen Atom" },
      { id: "d", text: "Ausschließlich zwischen Metallatomen und Wasserstoff" },
      { id: "e", text: "Zwischen Wasserstoff und Kohlenstoff in organischen Molekülen" },
    ],
    correctOptionId: "c",
    explanation:
      "Wasserstoffbrückenbindungen entstehen, wenn ein Wasserstoffatom kovalent an ein stark elektronegatives Atom (Stickstoff, Sauerstoff oder Fluor) gebunden ist und mit einem freien Elektronenpaar eines weiteren elektronegativen Atoms wechselwirkt. Diese intermolekulare Kraft ist deutlich schwächer als kovalente Bindungen, aber stärker als Van-der-Waals-Kräfte. Sie sind entscheidend für die besonderen Eigenschaften des Wassers und die Struktur von DNA und Proteinen.",
  },
  {
    id: "chem-9",
    subject: "chemie",
    chapter: "atombau",
    text: "Isotope eines Elements unterscheiden sich in welcher Eigenschaft?",
    options: [
      { id: "a", text: "Anzahl der Protonen" },
      { id: "b", text: "Anzahl der Elektronen" },
      { id: "c", text: "Anzahl der Neutronen" },
      { id: "d", text: "Kernladungszahl" },
      { id: "e", text: "Elektronegativität" },
    ],
    correctOptionId: "c",
    explanation:
      "Isotope sind Atome desselben Elements (gleiche Protonenzahl/Ordnungszahl), die sich in der Anzahl der Neutronen im Kern unterscheiden. Dadurch haben sie unterschiedliche Massenzahlen. Zum Beispiel besitzt Kohlenstoff-12 sechs Neutronen und Kohlenstoff-14 acht Neutronen, beide haben aber sechs Protonen. Die chemischen Eigenschaften der Isotope sind nahezu identisch, da diese von der Elektronenkonfiguration abhängen.",
  },
  {
    id: "chem-10",
    subject: "chemie",
    chapter: "säuren-basen",
    text: "Welche Oxidationszahl hat Sauerstoff im Wassermolekül (H2O)?",
    options: [
      { id: "a", text: "+2" },
      { id: "b", text: "-1" },
      { id: "c", text: "-2" },
      { id: "d", text: "0" },
      { id: "e", text: "-4" },
    ],
    correctOptionId: "c",
    explanation:
      "Im Wassermolekül hat Sauerstoff die Oxidationszahl -2, da er als elektronegativeres Atom die Bindungselektronen formal zu sich zieht. Wasserstoff hat jeweils die Oxidationszahl +1. Die Summe aller Oxidationszahlen im neutralen Molekül ergibt Null: 2 x (+1) + 1 x (-2) = 0. Die Oxidationszahl -2 ist der häufigste Wert für Sauerstoff in den meisten Verbindungen, mit Ausnahmen wie Peroxiden (-1) und OF2 (+2).",
  },

  // === PHYSIK ===
  {
    id: "phys-1",
    subject: "physik",
    chapter: "mechanik",
    text: "Ein Körper wird aus 20 m Höhe im freien Fall losgelassen (g = 10 m/s²). Mit welcher Geschwindigkeit trifft er auf dem Boden auf? (Luftwiderstand vernachlässigt)",
    options: [
      { id: "a", text: "10 m/s" },
      { id: "b", text: "20 m/s" },
      { id: "c", text: "40 m/s" },
      { id: "d", text: "200 m/s" },
      { id: "e", text: "14,1 m/s" },
    ],
    correctOptionId: "b",
    explanation:
      "Beim freien Fall gilt: v² = 2gh. Eingesetzt: v² = 2 x 10 x 20 = 400. Also v = 20 m/s. Alternativ über Energieerhaltung: mgh = ½mv², daraus folgt v = sqrt(2gh) = sqrt(400) = 20 m/s.",
  },
  {
    id: "phys-2",
    subject: "physik",
    chapter: "elektrizität",
    text: "Ein Widerstand von 100 Ohm wird an eine Spannung von 230 V angeschlossen. Welche Stromstärke fließt?",
    options: [
      { id: "a", text: "0,23 A" },
      { id: "b", text: "2,3 A" },
      { id: "c", text: "23 A" },
      { id: "d", text: "23.000 A" },
      { id: "e", text: "0,023 A" },
    ],
    correctOptionId: "b",
    explanation:
      "Nach dem Ohmschen Gesetz gilt: I = U/R = 230 V / 100 Ohm = 2,3 A. Das Ohmsche Gesetz I = U/R ist eine der fundamentalsten Beziehungen der Elektrizitätslehre und beschreibt den linearen Zusammenhang zwischen Spannung, Strom und Widerstand.",
  },
  {
    id: "phys-3",
    subject: "physik",
    chapter: "optik",
    text: "Welches optische Phänomen ist für die Aufspaltung von weißem Licht in seine Spektralfarben beim Durchgang durch ein Prisma verantwortlich?",
    options: [
      { id: "a", text: "Reflexion" },
      { id: "b", text: "Beugung" },
      { id: "c", text: "Dispersion" },
      { id: "d", text: "Interferenz" },
      { id: "e", text: "Polarisation" },
    ],
    correctOptionId: "c",
    explanation:
      "Dispersion beschreibt die wellenlängenabhängige Brechung von Licht. Verschiedene Wellenlängen (Farben) haben im Prisma unterschiedliche Brechungsindizes: Kurzwelliges blaues Licht wird stärker gebrochen als langwelliges rotes Licht. Dadurch wird weißes Licht in seine Spektralfarben aufgefächert.",
  },
  {
    id: "phys-4",
    subject: "physik",
    chapter: "mechanik",
    text: "Welche physikalische Größe bleibt bei einem perfekt elastischen Stoß NICHT erhalten?",
    options: [
      { id: "a", text: "Impuls" },
      { id: "b", text: "Kinetische Energie" },
      { id: "c", text: "Keine - beide bleiben erhalten" },
      { id: "d", text: "Beide gehen verloren" },
      { id: "e", text: "Nur die potenzielle Energie bleibt erhalten" },
    ],
    correctOptionId: "c",
    explanation:
      "Beim perfekt elastischen Stoß bleiben sowohl der Gesamtimpuls als auch die gesamte kinetische Energie erhalten. Dies unterscheidet ihn vom inelastischen Stoß, bei dem zwar der Impuls, nicht aber die kinetische Energie erhalten bleibt (ein Teil wird in Wärme, Verformung etc. umgewandelt).",
  },
  {
    id: "phys-5",
    subject: "physik",
    chapter: "thermodynamik",
    text: "Wie verändert sich das Volumen eines idealen Gases bei konstantem Druck, wenn die absolute Temperatur verdoppelt wird?",
    options: [
      { id: "a", text: "Es halbiert sich" },
      { id: "b", text: "Es bleibt gleich" },
      { id: "c", text: "Es verdoppelt sich" },
      { id: "d", text: "Es vervierfacht sich" },
      { id: "e", text: "Es verdreifacht sich" },
    ],
    correctOptionId: "c",
    explanation:
      "Nach dem Gesetz von Gay-Lussac (bzw. Charles) gilt bei konstantem Druck: V/T = const, also V1/T1 = V2/T2. Wenn T2 = 2T1, dann V2 = V1 x (2T1/T1) = 2V1. Das Volumen verdoppelt sich. Dies folgt direkt aus der idealen Gasgleichung pV = nRT bei konstantem p und n.",
  },
  {
    id: "phys-6",
    subject: "physik",
    chapter: "mechanik",
    text: "Was besagt Newtons drittes Gesetz (Wechselwirkungsgesetz)?",
    options: [
      { id: "a", text: "Ein Körper bleibt in Ruhe, solange keine Kraft auf ihn wirkt" },
      { id: "b", text: "Kraft ist gleich Masse mal Beschleunigung (F = m x a)" },
      { id: "c", text: "Jede Kraft erzeugt eine gleich große, entgegengesetzt gerichtete Gegenkraft (actio = reactio)" },
      { id: "d", text: "Die Gravitationskraft ist proportional zum Quadrat des Abstands" },
      { id: "e", text: "Die Beschleunigung ist umgekehrt proportional zur Geschwindigkeit" },
    ],
    correctOptionId: "c",
    explanation:
      "Newtons drittes Gesetz (actio = reactio) besagt, dass Kräfte immer paarweise auftreten: Übt ein Körper A eine Kraft auf Körper B aus, so übt Körper B eine gleich große, aber entgegengesetzt gerichtete Kraft auf Körper A aus. Beide Kräfte greifen an unterschiedlichen Körpern an und sind vom gleichen Typ. Ein Beispiel ist die Rakete: Die ausgestoßenen Gase üben eine Kraft auf die Rakete aus und umgekehrt.",
  },
  {
    id: "phys-7",
    subject: "physik",
    chapter: "elektrizität",
    text: "Wie berechnet sich der Gesamtwiderstand bei einer Reihenschaltung von Widerständen?",
    options: [
      { id: "a", text: "Der Kehrwert des Gesamtwiderstands ist die Summe der Kehrwerte der Einzelwiderstände" },
      { id: "b", text: "Der Gesamtwiderstand ist die Summe der Einzelwiderstände (Rges = R1 + R2 + ...)" },
      { id: "c", text: "Der Gesamtwiderstand entspricht dem kleinsten Einzelwiderstand" },
      { id: "d", text: "Der Gesamtwiderstand ist das Produkt der Einzelwiderstände" },
      { id: "e", text: "Der Gesamtwiderstand ist der Mittelwert der Einzelwiderstände" },
    ],
    correctOptionId: "b",
    explanation:
      "Bei der Reihenschaltung (Serienschaltung) addieren sich die Einzelwiderstände zum Gesamtwiderstand: Rges = R1 + R2 + R3 + ... Der Strom ist in allen Widerständen gleich, während sich die Gesamtspannung auf die einzelnen Widerstände aufteilt. Im Gegensatz dazu gilt bei der Parallelschaltung: 1/Rges = 1/R1 + 1/R2 + ..., wobei der Gesamtwiderstand stets kleiner als der kleinste Einzelwiderstand ist.",
  },
  {
    id: "phys-8",
    subject: "physik",
    chapter: "optik",
    text: "Unter welchen Bedingungen tritt Totalreflexion auf?",
    options: [
      { id: "a", text: "Wenn Licht von einem optisch dünneren in ein optisch dichteres Medium übergeht" },
      { id: "b", text: "Wenn Licht senkrecht auf eine Grenzfläche trifft" },
      { id: "c", text: "Wenn Licht von einem optisch dichteren in ein optisch dünneres Medium übergeht und der Einfallswinkel den Grenzwinkel überschreitet" },
      { id: "d", text: "Wenn Licht auf eine verspiegelte Oberfläche trifft" },
      { id: "e", text: "Wenn Licht durch ein Medium mit gleichmäßig abnehmendem Brechungsindex verläuft" },
    ],
    correctOptionId: "c",
    explanation:
      "Totalreflexion tritt auf, wenn Licht von einem optisch dichteren Medium (höherer Brechungsindex, z.B. Glas) in ein optisch dünneres Medium (niedrigerer Brechungsindex, z.B. Luft) übergeht und der Einfallswinkel größer als der kritische Grenzwinkel ist. In diesem Fall wird das gesamte Licht reflektiert und kein Licht tritt in das zweite Medium über. Dieses Prinzip wird in Glasfaserkabeln zur Datenübertragung genutzt.",
  },
  {
    id: "phys-9",
    subject: "physik",
    chapter: "thermodynamik",
    text: "Welcher gängige Stoff hat die höchste spezifische Wärmekapazität?",
    options: [
      { id: "a", text: "Eisen (0,45 kJ/(kg*K))" },
      { id: "b", text: "Aluminium (0,90 kJ/(kg*K))" },
      { id: "c", text: "Ethanol (2,44 kJ/(kg*K))" },
      { id: "d", text: "Wasser (4,18 kJ/(kg*K))" },
      { id: "e", text: "Kupfer (0,38 kJ/(kg*K))" },
    ],
    correctOptionId: "d",
    explanation:
      "Wasser hat mit 4,18 kJ/(kg*K) eine außergewöhnlich hohe spezifische Wärmekapazität. Das bedeutet, es wird viel Energie benötigt, um Wasser zu erwärmen, und es gibt beim Abkühlen entsprechend viel Energie ab. Diese Eigenschaft beruht auf den starken Wasserstoffbrückenbindungen zwischen den Wassermolekülen und ist entscheidend für die Klimaregulation der Erde sowie die Thermoregulation des menschlichen Körpers.",
  },
  {
    id: "phys-10",
    subject: "physik",
    chapter: "mechanik",
    text: "Eine konstante Kraft von 50 N verschiebt einen Körper um 4 m in Kraftrichtung. Wie groß ist die verrichtete Arbeit?",
    options: [
      { id: "a", text: "12,5 J" },
      { id: "b", text: "54 J" },
      { id: "c", text: "200 J" },
      { id: "d", text: "800 J" },
      { id: "e", text: "100 J" },
    ],
    correctOptionId: "c",
    explanation:
      "Die mechanische Arbeit berechnet sich nach W = F x s (wenn Kraft und Weg parallel sind). Eingesetzt: W = 50 N x 4 m = 200 J (Joule). Ein Joule entspricht einem Newtonmeter (1 J = 1 N*m). Würde die Kraft nicht in Wegrichtung wirken, müsste der Cosinus des Winkels zwischen Kraft und Weg berücksichtigt werden: W = F x s x cos(alpha).",
  },

  // === MATHEMATIK ===
  {
    id: "math-1",
    subject: "mathematik",
    chapter: "algebra",
    text: "Wie lautet die Lösungsmenge der Gleichung x² - 5x + 6 = 0?",
    options: [
      { id: "a", text: "{2, 3}" },
      { id: "b", text: "{-2, -3}" },
      { id: "c", text: "{1, 6}" },
      { id: "d", text: "{-1, 6}" },
      { id: "e", text: "{-2, 3}" },
    ],
    correctOptionId: "a",
    explanation:
      "Faktorisierung: x² - 5x + 6 = (x - 2)(x - 3) = 0. Also x1 = 2 und x2 = 3. Alternativ mit der p-q-Formel: x = 5/2 +/- sqrt(25/4 - 6) = 2,5 +/- sqrt(0,25) = 2,5 +/- 0,5. Somit x1 = 2 und x2 = 3.",
  },
  {
    id: "math-2",
    subject: "mathematik",
    chapter: "statistik",
    text: "In einer Urne befinden sich 3 rote und 7 blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, bei zweimaligem Ziehen ohne Zurücklegen zwei rote Kugeln zu ziehen?",
    options: [
      { id: "a", text: "9/100" },
      { id: "b", text: "3/45 = 1/15" },
      { id: "c", text: "6/90 = 1/15" },
      { id: "d", text: "1/10" },
      { id: "e", text: "3/10" },
    ],
    correctOptionId: "c",
    explanation:
      "P(2 rote) = P(1. rot) x P(2. rot | 1. rot) = 3/10 x 2/9 = 6/90 = 1/15. Beim ersten Zug sind 3 von 10 Kugeln rot. Nach dem Ziehen einer roten Kugel (ohne Zurücklegen) sind noch 2 von 9 Kugeln rot. Die Einzelwahrscheinlichkeiten werden multipliziert.",
  },
  {
    id: "math-3",
    subject: "mathematik",
    chapter: "geometrie",
    text: "Wie groß ist die Fläche eines Kreises mit dem Radius r = 5 cm? (pi ~ 3,14)",
    options: [
      { id: "a", text: "31,4 cm²" },
      { id: "b", text: "78,5 cm²" },
      { id: "c", text: "157 cm²" },
      { id: "d", text: "25 cm²" },
      { id: "e", text: "50 cm²" },
    ],
    correctOptionId: "b",
    explanation:
      "Die Kreisfläche berechnet sich mit A = pi x r² = 3,14 x 5² = 3,14 x 25 = 78,5 cm². Der Kreisumfang wäre U = 2 x pi x r = 31,4 cm (Antwort a). Häufiger Fehler: Verwechslung von Fläche und Umfang.",
  },
  {
    id: "math-4",
    subject: "mathematik",
    chapter: "algebra",
    text: "Vereinfachen Sie: (2^3 x 2^5) / 2^4",
    options: [
      { id: "a", text: "2^4 = 16" },
      { id: "b", text: "2^2 = 4" },
      { id: "c", text: "2^12 = 4096" },
      { id: "d", text: "2^8 = 256" },
      { id: "e", text: "2^6 = 64" },
    ],
    correctOptionId: "a",
    explanation:
      "Potenzgesetze: Im Zähler werden die Exponenten bei gleicher Basis addiert: 2^3 x 2^5 = 2^(3+5) = 2^8. Bei der Division werden Exponenten subtrahiert: 2^8 / 2^4 = 2^(8-4) = 2^4 = 16.",
  },
  {
    id: "math-5",
    subject: "mathematik",
    chapter: "analysis",
    text: "Was ist die erste Ableitung der Funktion f(x) = 3x³ - 2x² + 5x - 1?",
    options: [
      { id: "a", text: "f'(x) = 9x² - 4x + 5" },
      { id: "b", text: "f'(x) = 9x² - 2x + 5" },
      { id: "c", text: "f'(x) = 3x² - 4x + 5" },
      { id: "d", text: "f'(x) = 9x³ - 4x² + 5x" },
      { id: "e", text: "f'(x) = 6x² - 4x + 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Nach der Potenzregel (f(x) = ax^n => f'(x) = n*ax^(n-1)): Ableitung von 3x³ = 9x², Ableitung von -2x² = -4x, Ableitung von 5x = 5, Ableitung von -1 = 0. Also f'(x) = 9x² - 4x + 5.",
  },
  {
    id: "math-6",
    subject: "mathematik",
    chapter: "statistik",
    text: "Bei einer Normalverteilung liegen ca. 68% aller Werte in welchem Bereich?",
    options: [
      { id: "a", text: "Innerhalb von zwei Standardabweichungen um den Mittelwert" },
      { id: "b", text: "Innerhalb von einer Standardabweichung um den Mittelwert" },
      { id: "c", text: "Innerhalb von drei Standardabweichungen um den Mittelwert" },
      { id: "d", text: "Zwischen dem Minimum und dem Mittelwert" },
      { id: "e", text: "Innerhalb von einer halben Standardabweichung um den Mittelwert" },
    ],
    correctOptionId: "b",
    explanation:
      "Die 68-95-99,7-Regel (empirische Regel) der Normalverteilung besagt, dass ca. 68% aller Werte innerhalb einer Standardabweichung (Mittelwert +/- 1 Sigma) liegen. Etwa 95% liegen innerhalb von zwei Standardabweichungen und ca. 99,7% innerhalb von drei Standardabweichungen. Diese Regel ist fundamental für die Interpretation von Messwerten und Konfidenzintervallen in der Medizin und Forschung.",
  },
  {
    id: "math-7",
    subject: "mathematik",
    chapter: "geometrie",
    text: "Ein rechtwinkliges Dreieck hat die Katheten a = 3 cm und b = 4 cm. Wie lang ist die Hypotenuse c?",
    options: [
      { id: "a", text: "6 cm" },
      { id: "b", text: "5 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "12 cm" },
      { id: "e", text: "4,5 cm" },
    ],
    correctOptionId: "b",
    explanation:
      "Nach dem Satz des Pythagoras gilt: c² = a² + b² = 3² + 4² = 9 + 16 = 25. Also c = sqrt(25) = 5 cm. Das Dreieck mit den Seitenlängen 3, 4 und 5 ist das bekannteste pythagoräische Tripel. Weitere Tripel sind z.B. (5, 12, 13) und (8, 15, 17).",
  },
  {
    id: "math-8",
    subject: "mathematik",
    chapter: "analysis",
    text: "Berechnen Sie das bestimmte Integral von f(x) = 2x im Intervall [0, 3].",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "9" },
      { id: "c", text: "12" },
      { id: "d", text: "3" },
      { id: "e", text: "18" },
    ],
    correctOptionId: "b",
    explanation:
      "Die Stammfunktion von f(x) = 2x ist F(x) = x². Das bestimmte Integral berechnet sich als F(3) - F(0) = 3² - 0² = 9 - 0 = 9. Geometrisch entspricht dies der Fläche des Dreiecks unter der Geraden f(x) = 2x von 0 bis 3, also ½ x Grundseite x Höhe = ½ x 3 x 6 = 9.",
  },
  {
    id: "math-9",
    subject: "mathematik",
    chapter: "algebra",
    text: "Berechnen Sie: log₂(64) = ?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "8" },
      { id: "e", text: "7" },
    ],
    correctOptionId: "c",
    explanation:
      "Der Logarithmus log₂(64) fragt: 'Welche Potenz von 2 ergibt 64?' Da 2^6 = 64 (2 x 2 x 2 x 2 x 2 x 2 = 64), ist log₂(64) = 6. Allgemein gilt: log_b(x) = n bedeutet b^n = x. Logarithmen sind in der Medizin z.B. beim pH-Wert (negativer dekadischer Logarithmus der H+-Konzentration) von großer Bedeutung.",
  },
  {
    id: "math-10",
    subject: "mathematik",
    chapter: "analysis",
    text: "Gegeben ist die Funktion f(x) = e^x. Wie lautet die Ableitung f'(x)?",
    options: [
      { id: "a", text: "f'(x) = x * e^(x-1)" },
      { id: "b", text: "f'(x) = e^x" },
      { id: "c", text: "f'(x) = 1/x" },
      { id: "d", text: "f'(x) = e^(x+1)" },
      { id: "e", text: "f'(x) = e^(x-1)" },
    ],
    correctOptionId: "b",
    explanation:
      "Die natürliche Exponentialfunktion f(x) = e^x ist die einzige Funktion, die mit ihrer eigenen Ableitung identisch ist: f'(x) = e^x. Diese besondere Eigenschaft macht die Eulersche Zahl e (ca. 2,71828) fundamental für die Mathematik und Naturwissenschaften. In der Medizin beschreiben Exponentialfunktionen z.B. den radioaktiven Zerfall, Bakterienwachstum und pharmakokinetische Prozesse.",
  },
];

export function getQuestionsBySubject(subject: string): Question[] {
  return bmsQuestions.filter((q) => q.subject === subject);
}

export function getQuestionsByChapter(chapter: string): Question[] {
  return bmsQuestions.filter((q) => q.chapter === chapter);
}
