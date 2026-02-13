import type { Chapter } from "./types";

export const humanbiologieChapter: Chapter = {
  id: "humanbiologie",
  subject: "biologie",
  title: "Humanbiologie",
  subtitle: "Organsysteme \u2014 Herz, Blut, Nerven, Niere, Hormone & mehr",
  icon: "\u{1FAC0}",
  chapterNumber: "Kapitel 3/3",
  readingTime: "~55 Minuten",
  level: "Kernstoff",
  frequency: "Sehr h\u00E4ufig gepr\u00FCft",
  overview:
    "Dieses Kapitel behandelt die wichtigsten Organsysteme des menschlichen K\u00F6rpers, die regelm\u00E4\u00DFig im MedAT gepr\u00FCft werden: Herz-Kreislauf-System, Blut und Immunsystem, Nervensystem mit Synapse und Neurotransmittern, Niere und Hom\u00F6ostase, Hormonsystem, Verdauungssystem, Atmungssystem sowie Fortpflanzung und Entwicklung. Der Fokus liegt auf funktionellen Zusammenh\u00E4ngen, klinischen Bez\u00FCgen und den am h\u00E4ufigsten abgefragten Fakten.",

  learningObjectives: [
    "Den Aufbau des Herzens und den Blutfluss beschreiben",
    "Die Erregungsleitung im Herzen erkl\u00E4ren",
    "Aufbau und Funktion eines Neurons verstehen",
    "Sympathikus und Parasympathikus vergleichen",
    "Die Funktion der Niere und das RAAS erkl\u00E4ren",
    "Die wichtigsten Hormone und ihre Wirkungen kennen",
    "Den Verdauungsweg mit Enzymen beschreiben",
    "Die drei Keimbl\u00E4tter und ihre Derivate benennen",
  ],

  sections: [
    {
      heading: "Herz-Kreislauf-System",
      content:
        "Das Herz ist ein muskul\u00E4res Hohlorgan mit vier Kammern: zwei Vorh\u00F6fe (Atrien) und zwei Kammern (Ventrikel). Zwischen Vorh\u00F6fen und Ventrikeln liegen die Segelklappen (Atrioventrikularklappen): die Trikuspidalklappe (rechts, drei Segel) und die Mitralklappe (links, zwei Segel, auch Bikuspidalklappe). Zwischen Ventrikeln und gro\u00DFen Arterien liegen die Taschenklappen: die Pulmonalklappe (rechts, zum Truncus pulmonalis) und die Aortenklappe (links, zur Aorta).\n\nDer Blutfluss folgt einem festen Kreislauf: Hohlvenen (Vena cava superior und inferior) \u2192 rechtes Atrium \u2192 Trikuspidalklappe \u2192 rechter Ventrikel \u2192 Pulmonalklappe \u2192 Lungenarterien (Truncus pulmonalis) \u2192 Lunge (Gasaustausch: CO\u2082 ab, O\u2082 auf) \u2192 Lungenvenen \u2192 linkes Atrium \u2192 Mitralklappe \u2192 linker Ventrikel \u2192 Aortenklappe \u2192 Aorta \u2192 K\u00F6rperkreislauf. Wichtig: Die Lungenarterien f\u00FChren sauerstoffarmes Blut, die Lungenvenen f\u00FChren sauerstoffreiches Blut \u2014 Arterien sind definiert als Gef\u00E4\u00DFe, die Blut VOM Herzen wegf\u00FChren, unabh\u00E4ngig vom Sauerstoffgehalt.\n\nDie Erregungsleitung des Herzens sorgt f\u00FCr die rhythmische Kontraktion: Der Sinusknoten (im rechten Vorhof, prim\u00E4rer Schrittmacher, Frequenz ~70/min) erzeugt spontane Aktionspotentiale \u2192 Erregung breitet sich \u00FCber die Vorh\u00F6fe aus \u2192 AV-Knoten (Atrioventrikularknoten, sekund\u00E4rer Schrittmacher, Eigenfrequenz 40\u201350/min, bewirkt eine Verz\u00F6gerung von ~0,1 s, damit die Vorh\u00F6fe vor den Ventrikeln kontrahieren) \u2192 His-B\u00FCndel (leitet Erregung durch das Herzskelett) \u2192 Tawara-Schenkel (rechter und linker Schenkel) \u2192 Purkinje-Fasern (schnelle Erregung der Ventrikelmuskulatur von der Herzspitze her).\n\nDer arterielle Blutdruck betr\u00E4gt beim gesunden Erwachsenen systolisch ~120 mmHg (Auswurf) und diastolisch ~80 mmHg (Erschlaffung). Der Puls ist an peripheren Arterien tastbar. Das Herzzeitvolumen (HZV) errechnet sich als Herzfrequenz \u00D7 Schlagvolumen (~70/min \u00D7 ~70 mL = ~5 L/min).",
      diagram: "heart-anatomy",
      merke:
        "Herzklappen: <strong>Tri-Mi-Pu-Ao</strong> (Trikuspidal, Mitral, Pulmonal, Aorta). Arterien f\u00FChren Blut <strong>VOM Herzen weg</strong> \u2014 egal ob sauerstoffreich oder -arm! Lungenarterien = sauerstoffarm.",
      klinik:
        "Herzinfarkt = Verschluss einer Koronararterie \u2192 Myokardnekrose. Typisch: retrosternaler Brustschmerz, Ausstrahlung in linken Arm. STEMI vs. NSTEMI im EKG.",
    },

    {
      heading: "Blut & Immunsystem",
      content:
        "Das Blut (ca. 5\u20136 L beim Erwachsenen) besteht aus Plasma (~55%) und zellul\u00E4ren Bestandteilen (~45%). Der Anteil der zellul\u00E4ren Bestandteile am Gesamtblutvolumen wird als H\u00E4matokrit bezeichnet.\n\nErythrozyten (rote Blutk\u00F6rperchen) haben eine Lebensdauer von ~120 Tagen, besitzen keinen Zellkern (bei S\u00E4ugetieren) und enthalten H\u00E4moglobin \u2014 ein eisenhaltiges Protein (Fe\u00B2\u207A), das O\u2082 reversibel bindet. Ihre Bildung (Erythropöse) findet im roten Knochenmark statt und wird durch Erythropötin (EPO, aus der Niere) stimuliert.\n\nLeukozyten (wei\u00DFe Blutk\u00F6rperchen) dienen der Immunabwehr. Sie gliedern sich in: Granulozyten \u2014 Neutrophile (~60%, unspezifische Abwehr, Phagozytose), Eosinophile (~2\u20134%, Parasitenabwehr, Allergien), Basophile (~0,5\u20131%, Histaminfreisetzung); Monozyten \u2014 wandern ins Gewebe und differenzieren zu Makrophagen (Phagozytose, Antigenpr\u00E4sentation); Lymphozyten \u2014 T-Zellen (zellul\u00E4re Immunit\u00E4t: CD4\u207A = T-Helferzellen, CD8\u207A = zytotoxische T-Zellen), B-Zellen (humorale Immunit\u00E4t: differenzieren zu Plasmazellen \u2192 Antik\u00F6rperproduktion), NK-Zellen (nat\u00FCrliche Killerzellen, angeborene Immunit\u00E4t, t\u00F6ten virusinfizierte und Tumorzellen).\n\nThrombozyten (Blutpl\u00E4ttchen) sind kernlose Zellfragmente aus Megakaryozyten, Lebensdauer 5\u201310 Tage. Sie initiieren die Blutgerinnung: Adh\u00E4sion \u2192 Aggregation \u2192 Thrombozytenpfropf (prim\u00E4re H\u00E4mostase), gefolgt von der Gerinnungskaskade (sekund\u00E4re H\u00E4mostase, Fibrinbildung).\n\nDas Immunsystem gliedert sich in angeboren (unspezifisch: Haut/Schleimh\u00E4ute als Barriere, Makrophagen, Granulozyten, NK-Zellen, Komplementsystem, Entz\u00FCndungsreaktion) und adaptiv (spezifisch: T-Zellen und B-Zellen, Antik\u00F6rper, Ged\u00E4chtniszellen). Die adaptive Immunantwort zeichnet sich durch Spezifit\u00E4t und immunologisches Ged\u00E4chtnis aus.\n\nAntik\u00F6rperklassen (Immunglobuline): IgM (Erstreaktion, Pentamer mit 10 Bindungsstellen, aktiviert Komplement), IgG (h\u00E4ufigster Antik\u00F6rper im Serum, plazentagängig \u2192 Nestschutz, Sekund\u00E4rantwort), IgA (Schleimhautschutz, in Speichel/Muttermilch/Darm als Dimer), IgE (Allergien, Parasitenabwehr, bindet an Mastzellen \u2192 Histaminfreisetzung), IgD (B-Zell-Rezeptor auf naiven B-Zellen, Funktion noch nicht vollst\u00E4ndig gekl\u00E4rt).\n\nAktive Impfung: abgeschw\u00E4chte/abget\u00F6tete Erreger oder Antigene \u2192 eigene Immunantwort \u2192 Ged\u00E4chtniszellen \u2192 langfristiger Schutz (Wochen bis Aufbau). Passive Impfung: fertige Antik\u00F6rper \u2192 sofortiger, aber kurzfristiger Schutz (z. B. nach Exposition).",
      vergleichsTabelle: {
        headers: ["Antik\u00F6rper", "Vorkommen", "Besonderheit"],
        rows: [
          [
            "IgM",
            "Blut (intravaskul\u00E4r)",
            "Erstreaktion, Pentamer, aktiviert Komplement",
          ],
          [
            "IgG",
            "Blut, Gewebe",
            "H\u00E4ufigster Ak, plazentagängig, Sekund\u00E4rantwort",
          ],
          [
            "IgA",
            "Schleimh\u00E4ute, Sekrete",
            "Schleimhautschutz, Dimer, in Muttermilch",
          ],
          [
            "IgE",
            "Gewebe (an Mastzellen)",
            "Allergie, Parasitenabwehr, Histaminfreisetzung",
          ],
          [
            "IgD",
            "B-Zell-Oberfl\u00E4che",
            "B-Zell-Rezeptor, Funktion teils unklar",
          ],
        ],
      },
      merke:
        "Antik\u00F6rper-Merkregel: <strong>MADGE</strong> \u2014 IgM (Erst), IgA (Schleimhaut), IgD (B-Zell), IgG (h\u00E4ufigst, Placenta), IgE (Allergie). IgG = \"lon<strong>G</strong>-lasting\", IgM = \"i<strong>M</strong>mediate\".",
      altfrage:
        "\"Welcher Antik\u00F6rper ist plazentagängig?\" \u2192 <strong>IgG</strong> \u2014 der einzige Ak, der die Plazenta passiert und so den Nestschutz des Neugeborenen gew\u00E4hrleistet.",
    },

    {
      heading: "Nervensystem",
      content:
        "Das Nervensystem wird anatomisch in das Zentralnervensystem (ZNS: Gehirn und R\u00FCckenmark) und das Periphere Nervensystem (PNS: Spinalnerven, Hirnnerven, Ganglien) gegliedert. Funktionell unterscheidet man das somatische (willk\u00FCrliche) Nervensystem, das die Skelettmuskulatur steuert, vom vegetativen (autonomen) Nervensystem, das unwillk\u00FCrlich innere Organe reguliert. Das vegetative Nervensystem besteht aus Sympathikus, Parasympathikus und dem enterischen Nervensystem.\n\nDie Grundeinheit ist das Neuron (Nervenzelle): Dendriten (Signalaufnahme) \u2192 Soma (Zellk\u00F6rper mit Kern) \u2192 Axonh\u00FCgel (Ort der AP-Entstehung) \u2192 Axon (Signalweiterleitung) \u2192 Synaptische Endkn\u00F6pfchen (Signal\u00FCbertragung). Axone k\u00F6nnen von Myelinscheiden umgeben sein, die als elektrische Isolation dienen und die Leitungsgeschwindigkeit dramatisch erh\u00F6hen. Im PNS werden die Myelinscheiden von Schwann-Zellen gebildet (eine Schwann-Zelle umwickelt ein Internodium), im ZNS von Oligodendrozyten (ein Oligodendrozyt kann mehrere Axone myelinisieren).\n\nDas Aktionspotential (AP) ist die Grundlage der elektrischen Signalweiterleitung: Ruhepotential \u2248 \u221270 mV (aufrechterhalten durch die Na+/K+-ATPase: 3 Na+ raus, 2 K+ rein, und durch die hohe Ruheleitf\u00E4higkeit f\u00FCr K+). Bei einem \u00FCberschwelligen Reiz wird das Schwellenpotential (\u2248 \u221255 mV) erreicht \u2192 spannungsgesteuerte Na+-Kan\u00E4le \u00F6ffnen sich \u2192 schneller Na+-Einstrom \u2192 Depolarisation \u2192 Overshoot bis ca. +30 mV \u2192 Na+-Kan\u00E4le inaktivieren (Refrakt\u00E4rzeit!) \u2192 spannungsgesteuerte K+-Kan\u00E4le \u00F6ffnen sich \u2192 K+-Ausstrom \u2192 Repolarisation \u2192 kurze Hyperpolarisation (K+-Kan\u00E4le schlie\u00DFen verz\u00F6gert) \u2192 R\u00FCckkehr zum Ruhepotential. Es gilt das Alles-oder-nichts-Prinzip: Ein AP wird entweder voll ausgel\u00F6st oder gar nicht \u2014 die Amplitude ist unabh\u00E4ngig von der Reizst\u00E4rke.\n\nBei myelinisierten Axonen erfolgt die saltatorische Erregungsleitung: Das AP springt von einem Ranvier-Schn\u00FCrring zum n\u00E4chsten (die Schn\u00FCrringe sind die L\u00FCcken zwischen den Myelinscheiden, an denen Ionenkan\u00E4le konzentriert sind). Dies ist wesentlich schneller als die kontinuierliche Leitung an unmyelinisierten Axonen (bis zu 120 m/s vs. ~1 m/s).",
      diagram: "action-potential",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Sympathikus", "Parasympathikus"],
        rows: [
          ["Pupille", "Mydriasis (weit)", "Miosis (eng)"],
          ["Herzfrequenz", "\u2191 (Tachykardie)", "\u2193 (Bradykardie)"],
          ["Bronchien", "Dilatation", "Konstriktion"],
          ["Verdauung", "\u2193 (gehemmt)", "\u2191 (gef\u00F6rdert)"],
          [
            "Neurotransmitter",
            "Noradrenalin (postganglion\u00E4r)",
            "Acetylcholin (pr\u00E4- und postganglion\u00E4r)",
          ],
          ["Situation", "Fight or Flight", "Rest and Digest"],
        ],
      },
      merke:
        "<strong>Sympathikus</strong> = Fight or Flight (Noradrenalin). <strong>Parasympathikus</strong> = Rest and Digest (Acetylcholin). Ruhepotential \u2248 -70 mV (K+-Gleichgewicht).",
      klinik:
        "Multiple Sklerose: Autoimmune Zerst\u00F6rung der Myelinscheiden \u2192 gest\u00F6rte saltatorische Erregungsleitung \u2192 L\u00E4hmungen, Sensibilit\u00E4tsst\u00F6rungen, Sehst\u00F6rungen.",
    },

    {
      heading: "Synapse und Neurotransmitter",
      content:
        "Die chemische Synapse ist der wichtigste Mechanismus der Signal\u00FCbertragung zwischen Neuronen (oder zwischen Neuron und Effektorzelle). Der Ablauf der synaptischen \u00DCbertragung im Detail:\n\n1. Ein Aktionspotential erreicht die pr\u00E4synaptische Endigung (synaptisches Endkn\u00F6pfchen).\n2. Spannungsgesteuerte Ca2+-Kan\u00E4le \u00F6ffnen sich \u2192 Ca2+ str\u00F6mt in die Pr\u00E4synapse ein.\n3. Der Ca2+-Einstrom bewirkt die Fusion der synaptischen Vesikel (die Neurotransmitter enthalten) mit der pr\u00E4synaptischen Membran \u2192 Exozytose der Neurotransmitter in den synaptischen Spalt (~20\u201340 nm breit).\n4. Die Neurotransmitter diffundieren durch den synaptischen Spalt und binden an spezifische Rezeptoren auf der postsynaptischen Membran.\n5. Ionotrope Rezeptoren: Liganden-gesteuerte Ionenkan\u00E4le \u2192 direkter Ionenstrom \u2192 schnelle Antwort. Metabotrope Rezeptoren: G-Protein-gekoppelt \u2192 Second-Messenger-Kaskade \u2192 langsamere, modulierende Wirkung.\n6. Je nach Neurotransmitter und Rezeptor entsteht ein EPSP (exzitatorisches postsynaptisches Potential, Depolarisation, erregend) oder ein IPSP (inhibitorisches postsynaptisches Potential, Hyperpolarisation, hemmend).\n7. EPSPs und IPSPs werden am Axonh\u00FCgel r\u00E4umlich und zeitlich summiert. Wird das Schwellenpotential erreicht, entsteht ein neues AP.\n8. Die Signal\u00FCbertragung wird beendet durch: enzymatischen Abbau (z. B. Acetylcholinesterase spaltet ACh), Wiederaufnahme in die Pr\u00E4synapse (Reuptake, z. B. f\u00FCr Serotonin, Noradrenalin, Dopamin) oder Diffusion aus dem synaptischen Spalt.\n\nWichtige Neurotransmitter und ihre Funktionen:\n\u2022 Acetylcholin (ACh): neuromuskuläre Endplatte (Skelettmuskelkontraktion), Parasympathikus (postganglion\u00E4r), ZNS (Ged\u00E4chtnis, Aufmerksamkeit).\n\u2022 Noradrenalin (NA): Sympathikus (postganglion\u00E4r), ZNS (Wachheit, Aufmerksamkeit).\n\u2022 Dopamin (DA): Belohnungssystem (mesolimbisches System), Motorik (nigrostriatales System), Hormonregulation.\n\u2022 Serotonin (5-HT): Stimmung, Schlaf-Wach-Rhythmus, Appetit, Schmerzwahrnehmung.\n\u2022 GABA (Gamma-Aminobutters\u00E4ure): wichtigster hemmender Neurotransmitter im ZNS, Cl\u207B-Einstrom \u2192 Hyperpolarisation.\n\u2022 Glutamat: wichtigster erregender Neurotransmitter im ZNS, beteiligt an Lernen und Ged\u00E4chtnis (NMDA-Rezeptoren, LTP).\n\u2022 Glycin: hemmender NT, v. a. im R\u00FCckenmark und Hirnstamm.",
      diagram: "synapse",
      merke:
        "Erregend: <strong>Glutamat</strong> (h\u00E4ufigster erregender NT), <strong>Acetylcholin</strong>. Hemmend: <strong>GABA</strong> (h\u00E4ufigster hemmender NT), Glycin. Merke: GABA = \"<strong>G</strong>oes <strong>A</strong>way, <strong>B</strong>locks <strong>A</strong>ctivity\".",
      klinik:
        "Parkinson: Dopaminmangel in der Substantia nigra \u2192 Rigor, Tremor, Akinese. Depression: oft mit Serotonin-/Noradrenalinmangel assoziiert \u2192 SSRI-Therapie.",
    },

    {
      heading: "Niere & Hom\u00F6ostase",
      content:
        "Die Nieren (retroperitoneal, bohnenf\u00F6rmig, je ~150 g) sind das zentrale Organ der Hom\u00F6ostase. Jede Niere enth\u00E4lt ca. 1 Million Nephrone \u2014 die funktionellen Einheiten der Niere.\n\nAufbau des Nephrons: Glomerulus (Kapillarkn\u00E4uel, Filtration des Blutes) \u2192 Bowman-Kapsel (umgibt den Glomerulus, sammelt das Ultrafiltrat = Prim\u00E4rharn) \u2192 Proximaler Tubulus (R\u00FCckresorption von ~65% des Na+, Wasser, Glucose, Aminos\u00E4uren; Sekretion von H+, Harnstoff) \u2192 Henle-Schleife (absteigender Schenkel: wasserdurchl\u00E4ssig, Wasserentzug; aufsteigender Schenkel: wasserundurchl\u00E4ssig, aktiver NaCl-Transport \u2192 Gegenstromprinzip \u2192 Aufbau des Konzentrationsgradienten im Nierenmark) \u2192 Distaler Tubulus (Feinregulation von Na+, K+, Ca2+; Wirkort von Aldosteron) \u2192 Sammelrohr (Wirkort von ADH = Aquaporin-Einbau \u2192 Wasserr\u00FCckresorption, Urinkonzentrierung).\n\nDie glomerul\u00E4re Filtrationsrate (GFR) betr\u00E4gt ~120 mL/min, was ca. 180 Liter Prim\u00E4rharn pro Tag entspricht. Durch tubul\u00E4re R\u00FCckresorption (99%) werden letztlich nur ~1,5 Liter Endharn (Urin) ausgeschieden. Die Filtration im Glomerulus wird durch den effektiven Filtrationsdruck angetrieben (hydrostatischer Druck in den Kapillaren minus onkotischer Druck minus Kapselinnendruck).\n\nWichtige Hormone der Nierenfunktion:\n\u2022 ADH (Antidiuretisches Hormon, Vasopressin): wird im Hypothalamus produziert und im Hypophysenhinterlappen (HHL) gespeichert/freigesetzt. Wirkung: Einbau von Aquaporin-2-Kan\u00E4len in die Sammelrohre \u2192 verst\u00E4rkte Wasserr\u00FCckresorption \u2192 konzentrierter Urin, geringeres Volumen. Stimulus: erh\u00F6hte Plasmaosmolarit\u00E4t, Volumenmangel.\n\u2022 Aldosteron: Mineralokortikoid aus der Nebennierenrinde (Zona glomerulosa). Wirkung: verst\u00E4rkte Na+-R\u00FCckresorption (und K+-Sekretion) im distalen Tubulus und Sammelrohr \u2192 Wasser folgt osmotisch \u2192 Blutdruckanstieg.\n\u2022 RAAS (Renin-Angiotensin-Aldosteron-System): Bei Blutdruckabfall, Volumenmangel oder Sympathikusaktivierung \u2192 juxtaglomerul\u00E4re Zellen der Niere setzen Renin frei \u2192 Renin spaltet Angiotensinogen (aus der Leber) zu Angiotensin I \u2192 ACE (Angiotensin-Converting-Enzyme, v. a. in der Lunge) wandelt Angiotensin I in Angiotensin II um \u2192 Angiotensin II: Vasokonstriktion (Blutdruck\u2191), Aldosteronfreisetzung (Na+/Wasser\u2191), ADH-Freisetzung, Durstgef\u00FChl. ACE-Hemmer sind wichtige Antihypertensiva.",
      merke:
        "GFR: <strong>~180 L Prim\u00E4rharn/Tag</strong>, aber nur <strong>~1,5 L Endharn</strong>. Das bedeutet: 99% werden r\u00FCckresorbiert! ADH = mehr Wasser zur\u00FCck, Aldosteron = mehr Na+ zur\u00FCck.",
      altfrage:
        "\"Wie viel Prim\u00E4rharn wird pro Tag gebildet?\" \u2192 <strong>~180 Liter</strong>. NICHT 1,5 L (das ist der Endharn). NICHT 120 mL (das ist die GFR pro Minute).",
    },

    {
      heading: "Hormonsystem",
      content:
        "Das endokrine System reguliert \u00FCber Hormone (chemische Botenstoffe im Blut) langsam ablaufende K\u00F6rperfunktionen wie Stoffwechsel, Wachstum, Fortpflanzung und Hom\u00F6ostase. Zentrale Steuerungsachse: Hypothalamus \u2192 Hypophyse (Hirnanhangsdr\u00FCse) \u2192 Zielorgane.\n\nDer Hypothalamus produziert Releasing-Hormone (z. B. TRH, GnRH, CRH) und Inhibiting-Hormone, die \u00FCber das portale Gef\u00E4\u00DFsystem den Hypophysenvorderlappen (HVL, Adenohypophyse) erreichen. Der HVL produziert: TSH (Schilddr\u00FCse), ACTH (Nebennierenrinde), FSH/LH (Gonaden), GH (Wachstum), Prolaktin (Milchproduktion). Der Hypophysenhinterlappen (HHL, Neurohypophyse) speichert und sezerniert Oxytocin und ADH (Vasopressin), die im Hypothalamus produziert werden. Die Regulation erfolgt \u00FCber negatives Feedback: Hohe Spiegel des Endhormons hemmen die \u00FCbergeordneten Zentren.\n\nWichtige Hormone im \u00DCberblick:\n\n\u2022 Insulin: produziert von den B-Zellen (Beta-Zellen) der Langerhans-Inseln im Pankreas. Wirkung: Blutzucker\u2193 (f\u00F6rdert Glucoseaufnahme in Muskel/Fettgewebe, stimuliert Glykogensynthese, hemmt Gluconeogenese). Insulin ist das EINZIGE blutzuckersenkende Hormon.\n\u2022 Glukagon: produziert von den A-Zellen (Alpha-Zellen) der Langerhans-Inseln. Wirkung: Blutzucker\u2191 (Glykogenolyse, Gluconeogenese in der Leber). Gegenspieler von Insulin.\n\u2022 T3 (Trijodthyronin) / T4 (Thyroxin): Schilddr\u00FCsenhormone, ben\u00F6tigen Jod f\u00FCr die Synthese. Wirkung: Grundumsatz\u2191, Stoffwechsel\u2191, Wachstum und Entwicklung. T3 ist die biologisch aktivere Form, T4 wird peripher zu T3 konvertiert. Regulation: Hypothalamus (TRH) \u2192 HVL (TSH) \u2192 Schilddr\u00FCse (T3/T4) \u2192 negatives Feedback.\n\u2022 Cortisol: Glukokortikoid aus der Nebennierenrinde (Zona fasciculata). Wirkung: Blutzucker\u2191 (Gluconeogenese), Immunsuppression, Entz\u00FCndungshemmung, Stresshormon. Regulation: CRH \u2192 ACTH \u2192 Cortisol.\n\u2022 Adrenalin (Epinephrin): aus dem Nebennierenmark (NNM). Wirkung: Sympathikusverst\u00E4rkung \u2014 Herzfrequenz\u2191, Blutdruck\u2191, Bronchodilatation, Blutzucker\u2191 (Glykogenolyse), Lipolyse. Wird bei Stress ausgesch\u00FCttet.\n\u2022 ADH (Antidiuretisches Hormon, Vasopressin): produziert im Hypothalamus, gespeichert im HHL. Wirkung: Wasserr\u00FCckresorption in der Niere\u2191 (Sammelrohr), Vasokonstriktion.\n\u2022 Aldosteron: Mineralokortikoid aus der Nebennierenrinde (Zona glomerulosa). Wirkung: Na+-R\u00FCckresorption\u2191, K+-Sekretion\u2191 im distalen Tubulus \u2192 Blutvolumen\u2191, Blutdruck\u2191. Regulation \u00FCber RAAS.\n\nDie Nebenniere gliedert sich in Mark (NNM: Adrenalin und Noradrenalin, Katecholamine, Sympathikus-assoziiert) und Rinde (NNR, drei Zonen: Zona glomerulosa \u2192 Aldosteron, Zona fasciculata \u2192 Cortisol, Zona reticularis \u2192 Androgene). Merkspruch: Salz, Zucker, Sex (von au\u00DFen nach innen).",
      vergleichsTabelle: {
        headers: ["Hormon", "Bildungsort", "Wirkung"],
        rows: [
          [
            "Insulin",
            "B-Zellen, Pankreas (Langerhans)",
            "Blutzucker\u2193, Glucoseaufnahme\u2191, Glykogensynthese\u2191",
          ],
          [
            "Glukagon",
            "A-Zellen, Pankreas (Langerhans)",
            "Blutzucker\u2191, Glykogenolyse, Gluconeogenese",
          ],
          [
            "T3/T4",
            "Schilddr\u00FCse (Thyreozyten)",
            "Grundumsatz\u2191, Stoffwechsel\u2191, Wachstum",
          ],
          [
            "Cortisol",
            "NNR (Zona fasciculata)",
            "Blutzucker\u2191, Immunsuppression, Stressreaktion",
          ],
          [
            "Adrenalin",
            "NNM (Nebennierenmark)",
            "Herzfrequenz\u2191, Blutdruck\u2191, Bronchodilatation",
          ],
          [
            "ADH",
            "Hypothalamus \u2192 HHL",
            "Wasserr\u00FCckresorption\u2191 (Sammelrohr), Vasokonstriktion",
          ],
          [
            "Aldosteron",
            "NNR (Zona glomerulosa)",
            "Na+-R\u00FCckresorption\u2191, K+-Sekretion\u2191, Blutdruck\u2191",
          ],
        ],
      },
      merke:
        "Insulin = <strong>einziges</strong> blutzuckersenkendes Hormon! Gegenspieler: Glukagon, Adrenalin, Cortisol, Wachstumshormon \u2014 alle erh\u00F6hen BZ.",
      klinik:
        "Diabetes Typ 1: Autoimmune Zerst\u00F6rung der B-Zellen \u2192 absoluter Insulinmangel. Diabetes Typ 2: Insulinresistenz der Zielzellen \u2192 relativer Insulinmangel. Typ 2 ist mit ~90% deutlich h\u00E4ufiger.",
    },

    {
      heading: "Verdauungssystem",
      content:
        "Das Verdauungssystem (Gastrointestinaltrakt) dient der mechanischen und chemischen Aufspaltung der Nahrung sowie der Resorption von N\u00E4hrstoffen.\n\nDer Verdauungsweg im Detail:\n\n1. Mundh\u00F6hle: Mechanische Zerkleinerung (Z\u00E4hne, Zunge). Speicheldr\u00FCsen produzieren Speichel mit Speichelamylase (Ptyalin), die St\u00E4rke zu Maltose spaltet (Kohlenhydratverdauung beginnt bereits im Mund!). pH ~7 (neutral). Lysozym im Speichel wirkt antibakteriell.\n\n2. \u00D6sophagus (Speiser\u00F6hre): Transport durch Peristaltik (rhythmische Muskelkontraktionen). Keine Verdauung. Unterer \u00D6sophagussphinkter verhindert Reflux.\n\n3. Magen (Gaster): Salzs\u00E4ure (HCl, pH 1\u20132) aus den Belegzellen (Parietalzellen) denaturiert Proteine und t\u00F6tet Bakterien. Pepsinogen wird von Hauptzellen sezerniert und durch HCl zu Pepsin (aktive Protease) aktiviert \u2192 Proteinverdauung beginnt. Belegzellen produzieren auch den Intrinsic Factor, der f\u00FCr die Vitamin-B12-Resorption im terminalen Ileum essentiell ist. Nebenzellen produzieren Schleim zum Schutz der Magenschleimhaut.\n\n4. Duodenum (Zw\u00F6lffingerdarm): Hier m\u00FCnden der Ductus choledochus (Gallengang) und der Ductus pancreaticus (Pankreasgang, oft gemeinsam an der Papilla Vateri). Galle (produziert in der Leber, gespeichert in der Gallenblase): emulgiert Fette (keine Enzyme, sondern Gallens\u00E4uren als Emulgatoren \u2192 gr\u00F6\u00DFere Angriffsfl\u00E4che f\u00FCr Lipase). Pankreassaft (exokrines Pankreas): Trypsin und Chymotrypsin (Proteasen), Pankreaslipase (Fette \u2192 Glycerol + Fetts\u00E4uren), Pankreasamylase (St\u00E4rke \u2192 Maltose), Bikarbonat (HCO3\u207B) zur Neutralisation des sauren Chymus.\n\n5. Jejunum und Ileum (Leerdarm und Krummdarm): Hauptort der N\u00E4hrstoffresorption. Enorme Oberfl\u00E4chenvergr\u00F6\u00DFerung durch Kerckring-Falten, Zotten (Villi) und Mikrovilli (B\u00FCrstensaum). Resorption: Monosaccharide, Aminos\u00E4uren, Fetts\u00E4uren, Vitamine, Mineralien. Vitamin B12 wird spezifisch im terminalen Ileum resorbiert (Intrinsic-Factor-abh\u00E4ngig). Gallens\u00E4uren werden ebenfalls im Ileum r\u00FCckresorbiert (enterohepatischer Kreislauf).\n\n6. Colon (Dickdarm): Wasserr\u00FCckresorption, Elektrolytr\u00FCckresorption, Eindickung des Stuhls. Darmbakterien (Mikrobiom) produzieren Vitamin K und einige B-Vitamine. Keine nennenswerte N\u00E4hrstoffresorption.\n\n7. Rektum und Anus: Speicherung und Ausscheidung des Stuhls (Def\u00E4kation).\n\nDie Leber ist das zentrale Stoffwechselorgan: Gallenproduktion, Entgiftung (Biotransformation, z. B. Alkohol, Medikamente), Glykogenspeicher, Proteinproduktion (Albumin, Gerinnungsfaktoren, Transportproteine), Harnstoffsynthese (Ammoniakentgiftung), Cholesterinsynthese.\n\nDas Pankreas hat eine Doppelfunktion: exokrin (Azinuszellen \u2192 Verdauungsenzyme und Bikarbonat in den D\u00FCnndarm) und endokrin (Langerhans-Inseln: B-Zellen \u2192 Insulin, A-Zellen \u2192 Glukagon, D-Zellen \u2192 Somatostatin).",
      merke:
        "Enzymorte: <strong>Mund</strong> = Amylase (St\u00E4rke). <strong>Magen</strong> = Pepsin (Proteine). <strong>D\u00FCnndarm</strong> = Trypsin (Proteine), Lipase (Fette), Amylase (St\u00E4rke). Merke: AMP \u2192 TLA.",
      klinik:
        "Pernizi\u00F6se An\u00E4mie: Mangel an Intrinsic Factor (Magen) \u2192 B12 kann im Ileum nicht resorbiert werden \u2192 megaloblast\u00E4re An\u00E4mie + neurologische Symptome.",
    },

    {
      heading: "Atmungssystem",
      content:
        "Das Atmungssystem (Respirationstrakt) dient dem Gasaustausch: Aufnahme von O2 und Abgabe von CO2.\n\nDer Luftweg: Nase/Mund (Erw\u00E4rmung, Befeuchtung, Reinigung der Atemluft) \u2192 Pharynx (Rachen) \u2192 Larynx (Kehlkopf, enth\u00E4lt die Stimmlippen, Epiglottis verschlie\u00DFt beim Schlucken die Trachea) \u2192 Trachea (Luftr\u00F6hre, C-f\u00F6rmige Knorpelspangen halten sie offen) \u2192 Bifurkation \u2192 rechter und linker Hauptbronchus \u2192 Lappenbronchien (rechts 3, links 2, entsprechend der Lungenlappen) \u2192 Segmentbronchien \u2192 Bronchiolen (kein Knorpel mehr, glatte Muskulatur) \u2192 Terminale Bronchiolen \u2192 Respiratorische Bronchiolen \u2192 Ductus alveolares \u2192 Alveolen (Lungenbl\u00E4schen, ca. 300 Millionen, Gesamtoberfl\u00E4che ~100 m\u00B2).\n\nDer Gasaustausch findet in den Alveolen statt: O2 diffundiert durch die d\u00FCnne Blut-Luft-Schranke (Alveolarepithel Typ I, Basalmembran, Kapillarendothel, insgesamt ~0,5 \u00B5m) ins Kapillarblut und bindet an H\u00E4moglobin in den Erythrozyten. CO2 diffundiert umgekehrt aus dem Blut in das Alveolarlumen und wird abgeatmet. Die Diffusion folgt den Partialdruckgradienten (Ficksches Gesetz). Alveolarepithel Typ II produziert Surfactant, der die Oberfl\u00E4chenspannung herabsetzt und das Kollabieren der Alveolen verhindert.\n\n\u00C4u\u00DFere Atmung (Ventilation + pulmonaler Gasaustausch) vs. innere Atmung (Gasaustausch auf Gewebeebene + Zellatmung/mitochondriale Atmungskette).\n\nAtemvolumina (Spirometrie):\n\u2022 Atemzugvolumen (Tidalvolumen, VT): ~500 mL (normaler Atemzug)\n\u2022 Inspiratorisches Reservevolumen (IRV): ~3.000 mL (zus\u00E4tzlich einatembar)\n\u2022 Exspiratorisches Reservevolumen (ERV): ~1.000 mL (zus\u00E4tzlich ausatembar)\n\u2022 Residualvolumen (RV): ~1.500 mL (verbleibt nach maximaler Exspiration in der Lunge, nicht mit Spirometrie messbar)\n\u2022 Vitalkapazit\u00E4t (VC): VT + IRV + ERV \u2248 4.500 mL (~4,5 L) = maximales Volumen, das ein- und ausgeatmet werden kann\n\u2022 Totalkapazit\u00E4t (TLC): VC + RV \u2248 6.000 mL (~6 L) = gesamtes Lungenvolumen\n\u2022 Funktionelle Residualkapazit\u00E4t (FRC): ERV + RV \u2248 2.500 mL (Volumen nach normaler Exspiration)\n\u2022 Anatomischer Totraum: ~150 mL (luftleitende Abschnitte ohne Gasaustausch)\n\nDas Zwerchfell (Diaphragma) ist der wichtigste Atemmuskel. Bei Kontraktion senkt es sich ab \u2192 Thoraxvolumen\u2191 \u2192 Unterdruck \u2192 Luft str\u00F6mt ein (Inspiration). Bei Erschlaffung hebt es sich \u2192 Thoraxvolumen\u2193 \u2192 Luft wird ausgedr\u00FCckt (Exspiration, in Ruhe passiv). Unterst\u00FCtzende Atemmuskeln: \u00E4u\u00DFere Interkostalmuskeln (Inspiration), innere Interkostalmuskeln (forcierte Exspiration).",
      merke:
        "Atemzugvolumen: <strong>~500 mL</strong>. Davon erreichen nur ~350 mL die Alveolen (150 mL = Totraum). Vitalkapazit\u00E4t = maximales Ein- + Ausatmungsvolumen (~4,5 L).",
    },

    {
      heading: "Fortpflanzung & Entwicklung",
      content:
        "Menstruationszyklus (durchschnittlich 28 Tage):\n\n1. Follikelphase (Tag 1\u201314): FSH (Follikelstimulierendes Hormon aus dem HVL) stimuliert das Wachstum mehrerer Follikel im Ovar. Ein dominanter Follikel (Graaf-Follikel) reift heran und produziert zunehmend \u00D6strogen (\u00D6stradiol). \u00D6strogen bewirkt den Aufbau des Endometriums (Proliferationsphase im Uterus). Gleichzeitig hemmt \u00D6strogen in niedrigen Dosen FSH/LH (negatives Feedback).\n\n2. Ovulation (Tag ~14): Hohe \u00D6strogenkonzentrationen l\u00F6sen einen positiven Feedback-Effekt aus \u2192 LH-Peak (Luteinisierendes Hormon) \u2192 Eisprung (Ovulation): Die reife Eizelle wird aus dem Follikel freigesetzt und vom Fimbrientrichter der Tube aufgefangen.\n\n3. Lutealphase (Tag 15\u201328): Der geplatzte Follikel wird zum Gelbk\u00F6rper (Corpus luteum) und produziert Progesteron (und etwas \u00D6strogen). Progesteron bereitet das Endometrium auf die Einnistung vor (Sekretionsphase, dr\u00FCsenreich, gut durchblutet). Bei ausbleibender Befruchtung degeneriert der Gelbk\u00F6rper \u2192 Progesteron\u2193 \u2192 Endometrium wird abgesto\u00DFen \u2192 Menstruationsblutung (Tag 1 des neuen Zyklus).\n\nGametogenese:\n\u2022 Spermatogenese: beginnt in der Pubert\u00E4t, findet kontinuierlich in den Tubuli seminiferi des Hodens statt, Dauer ~64 Tage. Spermatogonie (2n) \u2192 prim\u00E4re Spermatozyte (2n) \u2192 Meiose I \u2192 sekund\u00E4re Spermatozyten (1n) \u2192 Meiose II \u2192 Spermatiden (1n) \u2192 Reifung \u2192 Spermien. Testosteron (Leydig-Zellen) und FSH (\u2192 Sertoli-Zellen) sind essentiell.\n\u2022 Oogenese: beginnt bereits in der Fetalentwicklung. Oogonien (2n) \u2192 prim\u00E4re Oozyten (2n), die in der Prophase der Meiose I arretieren (Diktyot\u00E4n-Arrest) \u2014 teils \u00FCber Jahrzehnte! Ab der Pubert\u00E4t wird pro Zyklus eine prim\u00E4re Oozyte durch den LH-Peak zur Vollendung der Meiose I stimuliert \u2192 sekund\u00E4re Oozyte (1n) + 1. Polk\u00F6rperchen. Die Meiose II wird erst nach der Befruchtung durch das Spermium abgeschlossen \u2192 reife Eizelle (1n) + 2. Polk\u00F6rperchen. Diskontinuierlich!\n\nFr\u00FChentwicklung nach Befruchtung:\nBefruchtung (meist in der Ampulla der Tube) \u2192 Zygote (2n) \u2192 Furchungsteilungen \u2192 Morula (solider Zellhaufen, Tag 3\u20134) \u2192 Blastozyste (Tag 5\u20136, Hohlkugel mit Trophoblast = \u00E4u\u00DFere Schicht, wird zu Plazenta/Chorion, und Embryoblast = innere Zellmasse, wird zum Embryo) \u2192 Implantation (Einnistung in das Endometrium, Tag 6\u20137) \u2192 Trophoblast produziert hCG (humanes Choriongonadotropin, erh\u00E4lt den Gelbk\u00F6rper, damit Progesteron\u2191, Basis des Schwangerschaftstests).\n\nGastrulation (3. Entwicklungswoche): Aus der zweibl\u00E4ttrigen Keimscheibe bilden sich die drei Keimbl\u00E4tter:\n\u2022 Ektoderm (\u00E4u\u00DFeres Keimblatt): Epidermis (Haut), Nervensystem (Gehirn, R\u00FCckenmark, periphere Nerven \u2014 durch Neurulation aus der Neuralplatte), Sinnesorgane (Linse, Innenohr), Zahnschmelz.\n\u2022 Mesoderm (mittleres Keimblatt): Muskulatur (Skelett-, Herz-, glatte Muskulatur), Skelett (Knochen, Knorpel), Bindegewebe, Herz und Blutgef\u00E4\u00DFe, Nieren (Urogenitalsystem), Milz, Nebennierenrinde.\n\u2022 Endoderm (inneres Keimblatt): Epithelauskleidung des Gastrointestinaltrakts (Magen, Darm), Lunge (Alveolarepithel), Leber, Pankreas, Schilddr\u00FCse, Harnblase (Urothel).",
      vergleichsTabelle: {
        headers: ["Keimblatt", "Ektoderm", "Mesoderm", "Endoderm"],
        rows: [
          [
            "Gewebe",
            "Epidermis, Nervensystem, Sinnesorgane, Zahnschmelz",
            "Muskulatur, Skelett, Herz, Gef\u00E4\u00DFe, Niere, Bindegewebe",
            "Darmepithel, Lunge, Leber, Pankreas, Schilddr\u00FCse",
          ],
          [
            "Merkregel",
            "Au\u00DFen: Haut + Nerven",
            "Mitte: Muskeln + Skelett",
            "Innen: Darm + Dr\u00FCsen",
          ],
        ],
      },
      merke:
        "Keimbl\u00E4tter: <strong>E</strong>ktoderm = <strong>a</strong>u\u00DFen (Haut + Nervensystem). <strong>M</strong>esoderm = <strong>M</strong>itte (Muskeln, Skelett). <strong>En</strong>doderm = <strong>in</strong>nen (Darm, Lunge). Merke: EMS \u2014 von au\u00DFen nach innen.",
      altfrage:
        "\"Woraus entwickelt sich das Nervensystem?\" \u2192 <strong>Ektoderm</strong>. Das Nervensystem entsteht aus der Neuralplatte des Ektoderms (Neurulation). Auch die Haut (Epidermis) stammt vom Ektoderm.",
      klinik:
        "Extrauteringravidit\u00E4t (Eileiterschwangerschaft): Implantation au\u00DFerhalb des Uterus, meist in der Tube. Akutes Abdomen bei Ruptur \u2014 gyn\u00E4kologischer Notfall!",
    },
  ],

  keyFacts: [
    { label: "Ruhepotential", value: "-70 mV" },
    { label: "Sinusknoten", value: "70/min (prim\u00E4rer Schrittmacher)" },
    {
      label: "GFR",
      value: "~120 mL/min, ~180 L Prim\u00E4rharn/Tag",
    },
    { label: "Erythrozyten", value: "120 Tage Lebensdauer" },
    { label: "IgG", value: "plazentagängig, h\u00E4ufigster Antik\u00F6rper" },
    { label: "Atemzugvolumen", value: "~500 mL" },
    { label: "Blutdruck normal", value: "120/80 mmHg" },
    {
      label: "Ektoderm",
      value: "\u2192 Nervensystem + Epidermis",
    },
    {
      label: "Insulin",
      value: "einziges blutzuckersenkendes Hormon",
    },
    {
      label: "Ovulation",
      value: "Tag 14, ausgel\u00F6st durch LH-Peak",
    },
  ],

  selfTestQuestions: [
    {
      question: "Was ist der prim\u00E4re Schrittmacher des Herzens?",
      options: [
        "AV-Knoten",
        "His-B\u00FCndel",
        "Sinusknoten",
        "Purkinje-Fasern",
        "Tawara-Schenkel",
      ],
      correctIndex: 2,
      explanation:
        "Der Sinusknoten im rechten Vorhof ist der prim\u00E4re Schrittmacher mit ~70 Schl\u00E4gen/min. Bei Ausfall \u00FCbernimmt der AV-Knoten (40-50/min) als sekund\u00E4rer Schrittmacher.",
    },
    {
      question: "Welcher Antik\u00F6rper ist plazentagängig?",
      options: ["IgM", "IgA", "IgG", "IgE", "IgD"],
      correctIndex: 2,
      explanation:
        "IgG ist der einzige plazentagängige Antik\u00F6rper und vermittelt so den Nestschutz des Neugeborenen. IgG ist auch der h\u00E4ufigste Antik\u00F6rper im Serum und dominiert die Sekund\u00E4rantwort.",
    },
    {
      question: "Wie viel Prim\u00E4rharn bildet die Niere pro Tag?",
      options: ["1,5 L", "15 L", "120 L", "180 L", "500 L"],
      correctIndex: 3,
      explanation:
        "Die GFR betr\u00E4gt ~120 mL/min, das ergibt ~180 L Prim\u00E4rharn pro Tag. Davon werden 99% r\u00FCckresorbiert, sodass nur ~1,5 L Endharn ausgeschieden werden.",
    },
    {
      question: "Woraus entwickelt sich das Nervensystem?",
      options: [
        "Endoderm",
        "Mesoderm",
        "Ektoderm",
        "Trophoblast",
        "Mesenchym",
      ],
      correctIndex: 2,
      explanation:
        "Das Nervensystem entwickelt sich aus dem Ektoderm (\u00E4u\u00DFeres Keimblatt) durch Neurulation. Auch die Epidermis der Haut stammt vom Ektoderm. Mesoderm \u2192 Muskeln/Skelett, Endoderm \u2192 Darm/Lunge.",
    },
    {
      question: "Welches Hormon senkt den Blutzucker?",
      options: [
        "Glukagon",
        "Cortisol",
        "Insulin",
        "Adrenalin",
        "Wachstumshormon",
      ],
      correctIndex: 2,
      explanation:
        "Insulin ist das einzige blutzuckersenkende Hormon. Es wird von den B-Zellen (Beta-Zellen) der Langerhans-Inseln im Pankreas produziert. Alle anderen genannten Hormone erh\u00F6hen den Blutzucker.",
    },
  ],

  summary: [
    "Das Herz hat vier Kammern, vier Klappen (Tri-Mi-Pu-Ao) und ein hierarchisches Erregungsleitungssystem (Sinusknoten \u2192 AV-Knoten \u2192 His \u2192 Tawara \u2192 Purkinje).",
    "Blut besteht aus Plasma (55%) und Zellen (45%). Erythrozyten leben ~120 Tage und tragen H\u00E4moglobin (Fe2+). Leukozyten umfassen Granulozyten, Monozyten und Lymphozyten.",
    "Die f\u00FCnf Antik\u00F6rperklassen (IgM, IgG, IgA, IgE, IgD) haben jeweils spezifische Funktionen. IgG ist plazentagängig und am h\u00E4ufigsten, IgM dominiert die Erstreaktion.",
    "Neurone leiten Signale \u00FCber Aktionspotentiale weiter (Ruhepotential -70 mV, Alles-oder-nichts-Prinzip). Myelinscheiden erm\u00F6glichen schnelle saltatorische Erregungsleitung.",
    "An chemischen Synapsen l\u00F6st Ca2+-Einstrom die Freisetzung von Neurotransmittern aus. Glutamat ist der h\u00E4ufigste erregende, GABA der h\u00E4ufigste hemmende NT.",
    "Die Niere filtert ~180 L Prim\u00E4rharn/Tag (GFR ~120 mL/min) und resorbiert 99% zur\u00FCck. ADH reguliert die Wasserr\u00FCckresorption, Aldosteron die Na+-R\u00FCckresorption.",
    "Insulin ist das einzige blutzuckersenkende Hormon. Die Hypothalamus-Hypophysen-Achse steuert die meisten endokrinen Funktionen \u00FCber negatives Feedback.",
    "Die Verdauung beginnt im Mund (Amylase) und endet im Colon. Magen (Pepsin, HCl), Pankreas (Trypsin, Lipase, Amylase) und Leber (Galle) sind entscheidend.",
    "Gasaustausch findet in ~300 Millionen Alveolen statt (~100 m\u00B2 Oberfl\u00E4che). Atemzugvolumen ~500 mL, Vitalkapazit\u00E4t ~4,5 L, Totalkapazit\u00E4t ~6 L.",
    "Die drei Keimbl\u00E4tter (Ektoderm, Mesoderm, Endoderm) geben allen Geweben des K\u00F6rpers ihren Ursprung. Das Nervensystem stammt vom Ektoderm (Neurulation).",
  ],
};
