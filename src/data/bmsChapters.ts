export interface VergleichsTabelleData {
  headers: string[];
  rows: string[][];
}

export interface SelbstTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface ChapterSection {
  heading: string;
  content: string;
  diagram?: string;
  merke?: string;
  altfrage?: string;
  klinik?: string;
  vergleichsTabelle?: VergleichsTabelleData;
}

export interface Chapter {
  id: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  title: string;
  subtitle?: string;
  icon?: string;
  chapterNumber?: string;
  readingTime?: string;
  level?: string;
  frequency?: string;
  overview?: string;
  learningObjectives?: string[];
  sections: ChapterSection[];
  keyFacts?: KeyFact[];
  selfTestQuestions?: SelbstTestQuestion[];
  summary?: string[];
  selfTestIds?: string[];
}

export const bmsChapters: Chapter[] = [
  // ==============================
  // BIOLOGIE
  // ==============================
  {
    id: "zellbiologie",
    subject: "biologie",
    title: "Zellbiologie",
    overview: "Die Zellbiologie ist das Fundament der Biologie im MedAT. Du lernst hier den Aufbau von Zellen, die Funktion der Organellen und den Zellzyklus — Themen, die in fast jedem MedAT-Test vorkommen und auch für das Verständnis vieler klinischer Zusammenhänge essenziell sind.",
    learningObjectives: [
      "Prokaryoten und Eukaryoten vergleichen und unterscheiden können",
      "Die wichtigsten Zellorganellen und ihre Funktionen benennen",
      "Den Zellzyklus mit Interphase und Mitose-Phasen erklären",
      "Die Endosymbiontentheorie verstehen und begründen",
      "Membrantransport-Mechanismen unterscheiden können",
    ],
    sections: [
      {
        heading: "Zelltypen: Prokaryoten vs. Eukaryoten",
        content: `Prokaryoten (Bakterien, Archaeen) besitzen keinen membranumschlossenen Zellkern. Ihre DNA liegt frei im Cytoplasma als Nukleoid vor. Eukaryoten (Tiere, Pflanzen, Pilze) haben einen echten Zellkern mit Doppelmembran (Kernhülle) und membranumschlossene Organellen.

Wichtige Unterschiede:
- Größe: Prokaryoten 1-10 um, Eukaryoten 10-100 um
- Ribosomen: Prokaryoten 70S, Eukaryoten 80S (im Cytoplasma)
- Zellteilung: Prokaryoten durch binäre Fission, Eukaryoten durch Mitose/Meiose
- Endosymbiontentheorie: Mitochondrien und Chloroplasten stammen von aufgenommenen Prokaryoten ab (eigene 70S-Ribosomen, Doppelmembran, eigene DNA)`,
        diagram: "plant-vs-animal-cell",
        merke: "Mitochondrien und Chloroplasten haben eigene 70S-Ribosomen und Doppelmembran — Belege für die Endosymbiontentheorie!",
        klinik: "Antibiotika wie Chloramphenicol hemmen bakterielle 70S-Ribosomen, nicht die menschlichen 80S-Ribosomen — so wirken sie selektiv toxisch gegen Bakterien.",
      },
      {
        heading: "Zellorganellen und ihre Funktionen",
        content: `Mitochondrien: Kraftwerke der Zelle, ATP-Produktion durch oxidative Phosphorylierung. Doppelmembran mit Cristae (Oberflächenvergrößerung). Innere Membran: Elektronentransportkette und ATP-Synthase.

Endoplasmatisches Retikulum (ER):
- Raues ER: mit Ribosomen besetzt, Proteinsynthese und -modifikation
- Glattes ER: Lipidsynthese, Calciumspeicher, Entgiftung

Golgi-Apparat: Sortierung, Modifikation und Verpackung von Proteinen. Cis-Seite (Empfang vom ER), Trans-Seite (Versand in Vesikel).

Lysosomen: Enthalten hydrolytische Enzyme (pH 4-5), intrazelluläre Verdauung, Autophagie.

Peroxisomen: Abbau langkettiger Fettsäuren, Entgiftung (H2O2-Abbau durch Katalase).`,
        diagram: "animal-cell",
        merke: "Merke die Reihenfolge des Proteinwegs: Raues ER → Golgi-Apparat → Vesikel → Zellmembran/Exozytose.",
        klinik: "Lysosomale Speicherkrankheiten (z.B. Morbus Gaucher, Tay-Sachs) entstehen durch fehlende lysosomale Enzyme — nicht abgebaute Stoffe akkumulieren in den Zellen.",
      },
      {
        heading: "Zellmembran und Membrantransport",
        content: `Die Zellmembran besteht aus einer Lipiddoppelschicht mit eingelagerten Proteinen (Fluid-Mosaik-Modell).

Bestandteile:
- Phospholipide: hydrophiler Kopf, hydrophobe Schwanzgruppe
- Cholesterin: reguliert Membranfluidität
- Integrale Proteine: durchspannen die Membran (Kanäle, Carrier)
- Periphere Proteine: an der Oberfläche angelagert
- Glykokalix: Zuckerketten an der Außenseite (Zell-Zell-Erkennung)

Passiver Transport (ohne Energie):
- Diffusion: Teilchen wandern vom Ort hoher zum Ort niedriger Konzentration
- Osmose: Diffusion von Wasser durch semipermeable Membran
- Erleichterte Diffusion: über Kanalproteine oder Carrier

Aktiver Transport (mit ATP):
- Primär aktiv: direkt ATP-getrieben (z.B. Na+/K+-ATPase: 3 Na+ raus, 2 K+ rein)
- Sekundär aktiv: nutzt Ionengradienten (z.B. Na+/Glucose-Symport)`,
        diagram: "cell-membrane",
        merke: "Na+/K+-ATPase: 3 Na+ raus, 2 K+ rein pro ATP — erzeugt das Ruhemembranpotential!",
        klinik: "Mukoviszidose (Cystische Fibrose) entsteht durch einen defekten Chlorid-Kanal (CFTR) — dies zeigt, wie wichtig Membrantransportproteine für die Gesundheit sind.",
      },
      {
        heading: "Zellteilung: Mitose und Zellzyklus",
        content: `Der Zellzyklus besteht aus Interphase und Mitose:

Interphase:
- G1-Phase: Zellwachstum, Proteinsynthese
- S-Phase: DNA-Replikation (aus jedem Chromosom wird ein Zwei-Chromatid-Chromosom)
- G2-Phase: Vorbereitung auf die Teilung, Kontrollpunkt

Mitose (PMAT):
1. Prophase: Chromatin kondensiert zu Chromosomen, Spindelapparat bildet sich
2. Metaphase: Chromosomen ordnen sich in der Äquatorialebene an
3. Anaphase: Schwesterchromatiden werden zu den Polen gezogen
4. Telophase: Kernhüllen bilden sich neu, Chromosomen dekondensieren

Zytokinese: Teilung des Cytoplasmas (bei Tierzellen durch Einschnürung, bei Pflanzenzellen durch Zellplatte).

Kontrollpunkte des Zellzyklus:
- G1/S-Kontrollpunkt (Restriktionspunkt): Ist die Zelle groß genug? DNA unbeschädigt?
- G2/M-Kontrollpunkt: Ist die DNA-Replikation vollständig?
- Spindel-Kontrollpunkt (Metaphase): Sind alle Chromosomen korrekt am Spindelapparat befestigt?`,
        diagram: "mitosis",
        merke: "PMAT — Prophase, Metaphase, Anaphase, Telophase. Bei der Meiose: PMAT x 2 (aber mit Crossing-Over in Prophase I!).",
        klinik: "Fehler an den Zellzyklus-Kontrollpunkten (z.B. mutiertes p53-Tumorsuppressorgen) können zu unkontrollierter Zellteilung und Krebs führen.",
      },
    ],
    summary: [
      "Prokaryoten haben keinen Zellkern und 70S-Ribosomen, Eukaryoten haben Zellkern und 80S-Ribosomen",
      "Mitochondrien sind die Kraftwerke der Zelle (ATP durch oxidative Phosphorylierung)",
      "Proteinweg: Raues ER → Golgi-Apparat → Vesikel → Zielort",
      "Na+/K+-ATPase pumpt 3 Na+ raus und 2 K+ rein pro ATP",
      "Mitose-Phasen: Prophase, Metaphase, Anaphase, Telophase (PMAT)",
      "Zellzyklus-Kontrollpunkte verhindern unkontrolliertes Wachstum",
    ],
    selfTestIds: ["bio-1", "bio-3", "bio-5", "bio-7", "bio-10"],
  },
  {
    id: "genetik",
    subject: "biologie",
    title: "Genetik",
    overview: "Genetik ist einer der am häufigsten geprüften Bereiche im MedAT-BMS. Von der DNA-Struktur über Proteinbiosynthese bis zu den Mendel'schen Regeln — ein solides Verständnis der Genetik ist für den Test unentbehrlich.",
    learningObjectives: [
      "DNA-Struktur und semikonservative Replikation erklären",
      "Transkription und Translation im Detail beschreiben",
      "Die drei Mendel'schen Regeln anwenden können",
      "Meiose und ihre Bedeutung für genetische Vielfalt verstehen",
      "Verschiedene Mutationstypen unterscheiden",
    ],
    sections: [
      {
        heading: "DNA-Struktur und Replikation",
        content: `Die DNA ist ein Doppelstrang aus Nukleotiden (Doppelhelix, Watson & Crick 1953). Jedes Nukleotid besteht aus: Phosphatgruppe, Desoxyribose (Zucker), stickstoffhaltige Base.

Basenpaarung (komplementär):
- Adenin (A) -- Thymin (T): 2 Wasserstoffbrücken
- Guanin (G) -- Cytosin (C): 3 Wasserstoffbrücken (stärker!)

DNA-Replikation (semikonservativ):
1. Helicase entwindet die Doppelhelix
2. Primase setzt RNA-Primer
3. DNA-Polymerase III synthetisiert neuen Strang (5'->3'-Richtung)
4. Leitstrang: kontinuierlich, Folgestrang: diskontinuierlich (Okazaki-Fragmente)
5. DNA-Ligase verbindet Fragmente

Chargaff-Regeln: A=T und G=C (mengenmäßig gleich viel im Gesamtgenom).`,
        diagram: "dna-helix",
        merke: "A-T hat 2 H-Brücken, G-C hat 3 H-Brücken. DNA-reiche Regionen mit viel G-C sind daher thermisch stabiler (höhere Schmelztemperatur).",
        klinik: "Die Polymerase-Kettenreaktion (PCR) nutzt die DNA-Replikation in vitro — essenziell für genetische Diagnostik, Forensik und Forschung.",
      },
      {
        heading: "Proteinbiosynthese",
        content: `Vom Gen zum Protein in zwei Schritten:

1. Transkription (im Zellkern):
- RNA-Polymerase liest den Matrizenstrang (3'->5') ab
- Synthetisiert mRNA in 5'->3'-Richtung
- mRNA-Processing bei Eukaryoten: 5'-Cap, 3'-Poly-A-Schwanz, Spleißen (Entfernung von Introns, Exons bleiben)

2. Translation (am Ribosom im Cytoplasma):
- Initiation: Ribosom bindet an mRNA, Start-Codon AUG (Methionin)
- Elongation: tRNA bringt Aminosäuren, Peptidbindung wird geknüpft
- Termination: Stopp-Codon (UAA, UAG, UGA) - kein passendes tRNA

Genetischer Code: 64 Codons für 20 Aminosäuren -> degeneriert (redundant), universell, kommafrei, nicht überlappend.`,
        diagram: "transcription-translation",
        merke: "Introns = IN den Kern (werden rausgespleißt), Exons = EXprimiert (bleiben in der mRNA).",
        klinik: "Viele Antibiotika wirken, indem sie die bakterielle Translation hemmen: Tetracyclin blockiert die tRNA-Bindung, Erythromycin hemmt die Translokation.",
      },
      {
        heading: "Meiose und genetische Vielfalt",
        content: `Die Meiose produziert haploide Gameten (Keimzellen) aus diploiden Zellen.

Meiose I (Reduktionsteilung):
- Prophase I: Crossing-Over zwischen homologen Chromosomen
- Metaphase I: Homologe Paare ordnen sich zufällig an (interchromosomale Rekombination)
- Anaphase I: Homologe Chromosomen werden getrennt
- Ergebnis: 2 haploide Zellen mit Zwei-Chromatid-Chromosomen

Meiose II (wie Mitose):
- Schwesterchromatiden werden getrennt
- Ergebnis: 4 haploide Zellen mit Ein-Chromatid-Chromosomen

Quellen genetischer Vielfalt:
1. Crossing-Over (intrachromosomale Rekombination)
2. Zufällige Verteilung homologer Chromosomen (2^23 Kombinationen)
3. Zufällige Befruchtung`,
        diagram: "meiosis",
        merke: "Meiose I: Homologe werden getrennt (Reduktion). Meiose II: Chromatiden werden getrennt (wie Mitose). Non-Disjunction in Meiose I oder II führt zu Aneuploidie.",
        klinik: "Trisomie 21 (Down-Syndrom) entsteht durch Non-Disjunction in der Meiose — meist in Meiose I der mütterlichen Eizelle. Risiko steigt mit dem Alter der Mutter.",
      },
      {
        heading: "Mendel'sche Genetik und Vererbung",
        content: `Gregor Mendel entdeckte die Grundregeln der Vererbung:

1. Uniformitätsregel: Kreuzt man zwei reinerbige (homozygote) Eltern, sind alle F1-Nachkommen gleich (uniform).

2. Spaltungsregel: In der F2-Generation spalten sich Merkmale im Verhältnis 3:1 (phänotypisch) bzw. 1:2:1 (genotypisch) bei dominant-rezessivem Erbgang.

3. Unabhängigkeitsregel: Verschiedene Gene werden unabhängig voneinander vererbt (gilt nur bei Genen auf verschiedenen Chromosomen - keine Kopplung).

Wichtige Begriffe:
- Genotyp: genetische Ausstattung (z.B. Aa)
- Phänotyp: sichtbare Merkmalsausprägung
- Dominant (A): überdeckt rezessives Allel
- Rezessiv (a): nur bei Homozygotie (aa) sichtbar
- Kodominanz: beide Allele prägen sich aus (z.B. AB0-Blutgruppen: A und B sind kodominant)
- Intermediärer Erbgang: Mischform (z.B. rosa Blume aus rot x weiß)`,
        diagram: "pedigree-analysis",
        merke: "Bei autosomal-rezessiver Vererbung können gesunde Eltern (Aa x Aa) ein krankes Kind (aa) mit 25% Wahrscheinlichkeit bekommen. Bei X-chromosomal-rezessiv sind v.a. Männer betroffen!",
        klinik: "Viele genetische Erkrankungen folgen Mendel'schen Regeln: Mukoviszidose und Sichelzellanämie sind autosomal-rezessiv, Huntington ist autosomal-dominant.",
      },
    ],
    summary: [
      "DNA: Doppelhelix mit komplementärer Basenpaarung (A-T: 2 H-Brücken, G-C: 3 H-Brücken)",
      "Replikation ist semikonservativ, DNA-Polymerase arbeitet 5'→3'",
      "Transkription im Kern (mRNA), Translation am Ribosom (Protein)",
      "Genetischer Code: 64 Codons, Start=AUG, Stopp=UAA/UAG/UGA",
      "Meiose: 2 Teilungen → 4 haploide Zellen, Crossing-Over sorgt für Rekombination",
      "Mendel: Uniformität (F1), Spaltung 3:1 (F2), Unabhängigkeit",
    ],
    selfTestIds: ["bio-16", "bio-18", "bio-20", "bio-22", "bio-25"],
  },
  {
    id: "humanbiologie",
    subject: "biologie",
    title: "Humanbiologie",
    overview: "Humanbiologie umfasst das Herz-Kreislauf-System, Nervensystem und Immunsystem — drei Kernthemen, die im MedAT regelmäßig abgefragt werden. Verstehe die Zusammenhänge zwischen Organfunktion und klinischer Relevanz.",
    learningObjectives: [
      "Den Aufbau des Herzens und den Blutfluss beschreiben können",
      "Die Erregungsleitung im Herzen erklären",
      "Aufbau und Funktion eines Neurons verstehen",
      "Angeborene und adaptive Immunantwort unterscheiden",
      "Antikörperklassen und ihre Funktionen kennen",
    ],
    sections: [
      {
        heading: "Herz-Kreislauf-System",
        content: `Das Herz ist ein muskuläres Hohlorgan mit vier Kammern:
- Rechter Vorhof (Atrium) -> Rechte Herzkammer (Ventrikel) -> Lungenkreislauf
- Linker Vorhof -> Linke Herzkammer -> Körperkreislauf

Blutfluss: Hohlvenen -> rechtes Atrium -> Trikuspidalklappe -> rechter Ventrikel -> Pulmonalklappe -> Lungenarterien -> Lunge (Gasaustausch) -> Lungenvenen -> linkes Atrium -> Mitralklappe -> linker Ventrikel -> Aortenklappe -> Aorta -> Körper

Erregungsleitung: Sinusknoten (Schrittmacher, ~70/min) -> AV-Knoten (Verzögerung) -> His-Bündel -> Tawara-Schenkel -> Purkinje-Fasern

Wichtig: Arterien führen Blut VOM Herzen weg, Venen führen Blut ZUM Herzen. Lungenarterien führen sauerstoffarmes Blut (Ausnahme!).`,
        diagram: "heart-anatomy",
        merke: "Arterien = AB vom Herzen (egal ob sauerstoffreich oder -arm!). Lungenarterien führen sauerstoffarmes, Lungenvenen führen sauerstoffreiches Blut.",
        klinik: "Bei einem AV-Block ist die Erregungsüberleitung am AV-Knoten gestört — im EKG sichtbar als verlängerte PQ-Zeit oder ausfallende QRS-Komplexe.",
      },
      {
        heading: "Nervensystem",
        content: `Zentrales Nervensystem (ZNS): Gehirn und Rückenmark
Peripheres Nervensystem (PNS): Hirnnerven und Spinalnerven

Neuron (Nervenzelle):
- Dendrit: empfängt Signale
- Soma (Zellkörper): Verarbeitung
- Axon: leitet Aktionspotential weiter
- Synapse: Signalübergang zur nächsten Zelle

Aktionspotential: Ruhepotential (-70mV) -> Depolarisation (Na+-Einstrom) -> Overshoot (+30mV) -> Repolarisation (K+-Ausstrom) -> Hyperpolarisation -> Ruhepotential

Synaptische Übertragung: Aktionspotential -> Ca2+-Einstrom -> Vesikelfusion -> Neurotransmitterfreisetzung (z.B. Acetylcholin, Dopamin, Serotonin) -> Bindung an Rezeptoren -> Wirkung an Postsynapse

Saltatorische Erregungsleitung: Bei myelinisierten Axonen springt das AP von Ranvier'schem Schnürring zu Schnürring — deutlich schneller als kontinuierliche Leitung.`,
        diagram: "action-potential",
        merke: "Ruhepotential ≈ -70mV (K+-Gleichgewichtspotential). Depolarisation durch Na+-Einstrom, Repolarisation durch K+-Ausstrom. 'Alles-oder-nichts-Prinzip'!",
        klinik: "Multiple Sklerose zerstört die Myelinscheiden — die saltatorische Erregungsleitung ist gestört, was zu Lähmungen und Sensibilitätsstörungen führt.",
      },
      {
        heading: "Synapse und Neurotransmitter",
        content: `Chemische Synapse (häufigster Typ):
1. Aktionspotential erreicht präsynaptische Endigung
2. Spannungsabhängige Ca2+-Kanäle öffnen sich
3. Ca2+-Einstrom löst Vesikelfusion mit präsynaptischer Membran aus
4. Neurotransmitter werden in den synaptischen Spalt freigesetzt
5. Bindung an Rezeptoren der Postsynapse
6. Erregung (EPSP) oder Hemmung (IPSP)
7. Beendigung: Abbau, Wiederaufnahme oder Diffusion

Wichtige Neurotransmitter:
- Acetylcholin: neuromuskuläre Endplatte, parasympathisch
- Noradrenalin: sympathisch, "fight or flight"
- Dopamin: Belohnungssystem, Motorik
- Serotonin: Stimmung, Schlaf
- GABA: wichtigster hemmender NT im Gehirn
- Glutamat: wichtigster erregender NT im Gehirn`,
        diagram: "synapse",
        merke: "Erregend: Glutamat, Acetylcholin. Hemmend: GABA, Glycin. Merke: GABA = 'Goes Away, Blocks Activity'.",
        klinik: "Parkinson entsteht durch Dopaminmangel in der Substantia nigra. Depressionen werden mit Serotonin-Wiederaufnahme-Hemmern (SSRI) behandelt.",
      },
      {
        heading: "Immunsystem",
        content: `Unspezifische (angeborene) Abwehr:
- Physikalische Barrieren: Haut, Schleimhäute, Magensäure
- Zellulär: Makrophagen, Granulozyten, NK-Zellen (Phagozytose)
- Humoral: Komplementsystem, Lysozym, Interferone

Spezifische (adaptive) Abwehr:
- Zellulär: T-Lymphozyten (T-Helferzellen CD4+, zytotoxische T-Zellen CD8+)
- Humoral: B-Lymphozyten -> Plasmazellen -> Antikörper (Immunglobuline)

Antikörper-Klassen:
- IgG: häufigster Ak, plazentagängig, Sekundärantwort
- IgM: Erstantwort, größter Ak (Pentamer)
- IgA: Schleimhautschutz (Speichel, Muttermilch)
- IgE: Allergien, Parasitenabwehr
- IgD: B-Zell-Rezeptor

Impfung: Aktiv (abgeschwächte/tote Erreger -> eigene Ak-Bildung) vs. Passiv (fertige Antikörper, sofortiger aber kurzer Schutz).`,
        diagram: "immune-response",
        merke: "Antikörper-Reihenfolge nach Größe: IgM > IgA > IgG > IgE > IgD. IgM = 'iMMediate' (Erstantwort), IgG = 'lonG-lasting' (Sekundärantwort, plazentagängig).",
        klinik: "Typ-I-Allergie (Soforttyp, z.B. Heuschnupfen): IgE-vermittelt. Mastzellen werden durch IgE-Quervernetzung aktiviert und setzen Histamin frei.",
      },
    ],
    summary: [
      "Herz: 4 Kammern, Erregungsleitung: Sinusknoten → AV-Knoten → His-Bündel → Purkinje",
      "Arterien führen Blut VOM Herzen weg, Venen ZUM Herzen",
      "Aktionspotential: Ruhe (-70mV) → Depolarisation (Na+) → Repolarisation (K+)",
      "Saltatorische Leitung an myelinisierten Axonen ist viel schneller",
      "Angeborene Immunantwort ist schnell aber unspezifisch, adaptive ist langsamer aber spezifisch",
      "IgM = Erstantwort, IgG = Sekundärantwort (häufigster, plazentagängig)",
    ],
    selfTestIds: ["bio-31", "bio-33", "bio-35", "bio-37", "bio-40"],
  },

  // ==============================
  // CHEMIE
  // ==============================
  {
    id: "atombau",
    subject: "chemie",
    title: "Atombau und Periodensystem",
    overview: "Das Periodensystem und der Atombau bilden die Grundlage der gesamten Chemie. Im MedAT werden regelmäßig Elektronenkonfigurationen, periodische Trends und Radioaktivität abgefragt.",
    learningObjectives: [
      "Den Aufbau eines Atoms beschreiben (Protonen, Neutronen, Elektronen)",
      "Elektronenkonfigurationen aufstellen können",
      "Periodische Trends erklären (Atomradius, EN, Ionisierungsenergie)",
      "Radioaktive Zerfallsarten und Halbwertszeit verstehen",
    ],
    sections: [
      {
        heading: "Atommodelle und Aufbau",
        content: `Ein Atom besteht aus:
- Atomkern: Protonen (p+, positiv) und Neutronen (n, neutral)
- Elektronenhülle: Elektronen (e-, negativ)

Ordnungszahl Z = Anzahl Protonen = Anzahl Elektronen (im neutralen Atom)
Massenzahl A = Protonen + Neutronen
Isotope: gleiche Protonenzahl, verschiedene Neutronenzahl

Atommodelle:
- Bohr'sches Modell: Elektronen auf festen Bahnen (Schalen K, L, M, N...)
- Orbitalmodell: Elektronen in Aufenthaltswahrscheinlichkeitsbereichen (Orbitale)

Elektronenkonfiguration:
- Schale n kann maximal 2n² Elektronen aufnehmen
- Unterschalen: s (2e-), p (6e-), d (10e-), f (14e-)
- Aufbau-Prinzip (Aufbauprinzip): 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...
- Hund'sche Regel: Orbitale gleicher Energie werden zunächst einfach besetzt
- Pauli-Prinzip: Max. 2 Elektronen pro Orbital mit antiparallelem Spin`,
        diagram: "atomic-orbitals",
        merke: "Aufbaureihenfolge: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p. Merke: 4s wird VOR 3d besetzt, aber 3d hat niedrigere Energie wenn besetzt!",
        klinik: "Radioaktive Isotope in der Medizin: Iod-131 für Schilddrüsendiagnostik, Technetium-99m als häufigster Tracer in der Nuklearmedizin.",
      },
      {
        heading: "Periodensystem der Elemente",
        content: `Aufbau des PSE:
- 7 Perioden (Zeilen): entsprechen den Hauptenergieniveaus
- 18 Gruppen (Spalten): Elemente mit gleicher Valenzelektronenzahl
- Hauptgruppen (1, 2, 13-18): s- und p-Block
- Nebengruppen (3-12): d-Block

Periodische Trends:
- Atomradius: nimmt in der Periode ab (mehr Protonen, stärkere Anziehung), nimmt in der Gruppe zu (mehr Schalen)
- Ionisierungsenergie: nimmt in der Periode zu, in der Gruppe ab
- Elektronegativität (EN): nimmt in der Periode zu, in der Gruppe ab. Höchste EN: Fluor (3,98)
- Metallcharakter: nimmt in der Periode ab, in der Gruppe zu

Wichtige Gruppen:
- Gruppe 1: Alkalimetalle (1 Valenzelektron, sehr reaktiv)
- Gruppe 2: Erdalkalimetalle
- Gruppe 17: Halogene (7 Valenzelektronen, reaktiv)
- Gruppe 18: Edelgase (volle Außenschale, stabil/inert)`,
        diagram: "periodic-table",
        merke: "Alle Trends gehen 'nach rechts oben' (außer Atomradius und Metallcharakter): Elektronegativität, Ionisierungsenergie steigen von links unten nach rechts oben.",
      },
      {
        heading: "Radioaktivität und Kernreaktionen",
        content: `Radioaktiver Zerfall - instabile Kerne zerfallen spontan:

Alpha-Zerfall (a): Außendung eines He-4-Kerns (2p + 2n)
- Massenzahl sinkt um 4, Ordnungszahl um 2
- Beispiel: U-238 -> Th-234 + He-4

Beta-minus-Zerfall (b-): Neutron -> Proton + Elektron + Antineutrino
- Massenzahl bleibt gleich, Ordnungszahl steigt um 1
- Beispiel: C-14 -> N-14 + e-

Gamma-Strahlung (g): Elektromagnetische Strahlung bei Kernübergang
- Keine Änderung von Massen- oder Ordnungszahl

Halbwertszeit (t1/2): Zeit, in der die Hälfte der Kerne zerfallen ist
- N(t) = N0 x (1/2)^(t/t1/2)
- C-14: t1/2 = 5730 Jahre (Altersbestimmung)`,
        merke: "Alpha: -4 Masse, -2 OZ. Beta-minus: gleiche Masse, +1 OZ. Gamma: keine Änderung (nur Energieabgabe).",
        klinik: "In der Strahlentherapie wird ionisierende Strahlung gezielt gegen Tumorzellen eingesetzt. Die biologische Wirkung hängt von der Strahlungsart ab: Alpha hat die höchste Ionisationsdichte.",
      },
    ],
    summary: [
      "Ordnungszahl = Protonenzahl = Elektronenzahl (neutral), Massenzahl = Protonen + Neutronen",
      "Elektronenkonfiguration folgt dem Aufbauprinzip, Hund'scher Regel und Pauli-Prinzip",
      "EN, Ionisierungsenergie steigen nach rechts oben im PSE; Atomradius nimmt ab",
      "Alpha-Zerfall: -4A, -2Z; Beta-Zerfall: gleiche A, +1Z; Gamma: keine Änderung",
      "Halbwertszeit: N(t) = N0 x (1/2)^(t/t½)",
    ],
    selfTestIds: ["chem-1", "chem-3", "chem-5", "chem-8", "chem-10"],
  },
  {
    id: "bindungen",
    subject: "chemie",
    title: "Chemische Bindungen",
    overview: "Chemische Bindungen bestimmen die Eigenschaften aller Stoffe. Von der Ionenbindung im Kochsalz bis zu den Wasserstoffbrücken im Wasser — dieses Kapitel erklärt, warum Materie so zusammenhält, wie sie es tut.",
    learningObjectives: [
      "Die drei Hauptbindungstypen (Ionen-, Atom-, Metallbindung) unterscheiden",
      "Polare und unpolare kovalente Bindungen erkennen",
      "Das VSEPR-Modell zur Bestimmung der Molekülgeometrie anwenden",
      "Zwischenmolekulare Kräfte in der richtigen Stärkereihenfolge einordnen",
    ],
    sections: [
      {
        heading: "Ionenbindung",
        content: `Ionenbindung entsteht zwischen Metall und Nichtmetall (EN-Differenz > 1,7):

- Metall gibt Elektronen ab -> Kation (positiv geladen)
- Nichtmetall nimmt Elektronen auf -> Anion (negativ geladen)
- Elektrostatische Anziehung bildet Ionengitter (Kristallstruktur)

Eigenschaften von Ionenverbindungen:
- Hoher Schmelz- und Siedepunkt (starke elektrostatische Kräfte)
- Spröde (Verschiebung führt zu Abstoßung gleichnamiger Ionen)
- Leiten Strom in Lösung oder Schmelze (frei bewegliche Ionen)
- Oft wasserlöslich (Hydratation der Ionen)

Gitterenergie: Energie, die frei wird, wenn Ionen aus der Gasphase ein Gitter bilden. Je kleiner die Ionen und je höher die Ladung, desto größer die Gitterenergie.

Beispiel NaCl: Na -> Na+ + e-; Cl + e- -> Cl-; Na+Cl- bildet kubisch-flächenzentriertes Gitter.`,
        diagram: "ionic-bond",
        merke: "Ionenverbindungen leiten NUR als Lösung oder Schmelze Strom (frei bewegliche Ionen nötig). Als Feststoff: Isolator!",
        klinik: "Elektrolyte im Blut (Na+, K+, Ca2+, Cl-) sind gelöste Ionen und essenziell für Nervenleitung, Muskelkontraktion und Säure-Basen-Haushalt.",
      },
      {
        heading: "Kovalente Bindung (Atombindung)",
        content: `Kovalente Bindung entsteht zwischen Nichtmetallen (EN-Differenz < 1,7):

- Gemeinsame Elektronenpaare werden geteilt
- Einfachbindung: 1 Elektronenpaar (sigma-Bindung)
- Doppelbindung: 2 Elektronenpaare (1 sigma + 1 pi)
- Dreifachbindung: 3 Elektronenpaare (1 sigma + 2 pi)

Polare vs. unpolare Bindung:
- Unpolar: gleiche EN (z.B. H2, O2, N2)
- Polar: unterschiedliche EN (z.B. H-Cl, H-O). Elektronenpaar ist zum elektronegativeren Atom verschoben -> Dipolmoment

VSEPR-Modell (Elektronenpaarabstoßung): Bestimmt die räumliche Struktur
- 2 Elektronenpaare: linear (180°) - z.B. CO2
- 3 Elektronenpaare: trigonal planar (120°) - z.B. BF3
- 4 Elektronenpaare: tetraedrisch (109,5°) - z.B. CH4
- Bei freien Elektronenpaaren: Abweichung (H2O: gewinkelt 104,5°)`,
        diagram: "covalent-bond",
        merke: "Sigma-Bindungen erlauben freie Rotation, Pi-Bindungen nicht! Deshalb gibt es bei Doppelbindungen cis/trans-Isomerie.",
      },
      {
        heading: "Zwischenmolekulare Kräfte",
        content: `Van-der-Waals-Kräfte (London-Dispersionskräfte):
- Schwache, temporäre Dipole durch Elektronenverschiebung
- In allen Molekülen vorhanden
- Stärke nimmt mit Molekülgröße/Oberfläche zu

Dipol-Dipol-Wechselwirkungen:
- Zwischen permanenten Dipolen (polaren Molekülen)
- Stärker als Van-der-Waals-Kräfte
- Beispiel: HCl-Moleküle

Wasserstoffbrückenbindungen:
- Spezialfall: H gebunden an F, O oder N
- Stärkste zwischenmolekulare Kraft (außer Ionenbindung)
- Erklärt die anomalen Eigenschaften des Wassers:
  * Hoher Siedepunkt (100°C statt erwartet -80°C)
  * Dichteanomalie (Eis schwimmt, max. Dichte bei 4°C)
  * Hohe Wärmekapazität
  * Oberflächenspannung`,
        merke: "Stärke: Ionenbindung > H-Brücken > Dipol-Dipol > Van-der-Waals. H-Brücken nur bei F-H, O-H, N-H (FON-Regel!).",
        klinik: "Wasserstoffbrücken stabilisieren die DNA-Doppelhelix und die Sekundärstruktur von Proteinen (Alpha-Helix, Beta-Faltblatt) — Grundlage aller biologischen Strukturen.",
      },
    ],
    summary: [
      "Ionenbindung: Metall + Nichtmetall, EN-Diff > 1,7, bildet Kristallgitter",
      "Kovalente Bindung: geteilte Elektronenpaare, polar wenn EN-Differenz vorhanden",
      "VSEPR: Molekülform hängt von Anzahl Bindungs- und freien Elektronenpaaren ab",
      "H-Brücken erklären die Anomalien des Wassers (hoher Siedepunkt, Dichteanomalie)",
      "Stärkereihenfolge: Ionenbindung > H-Brücken > Dipol-Dipol > Van-der-Waals",
    ],
    selfTestIds: ["chem-13", "chem-15", "chem-18", "chem-20", "chem-22"],
  },
  {
    id: "säuren-basen",
    subject: "chemie",
    title: "Säuren, Basen und Redox",
    overview: "Säure-Base-Reaktionen und Redoxreaktionen gehören zu den am häufigsten geprüften Chemie-Themen im MedAT. pH-Berechnungen, Puffersysteme und Oxidationszahlen sind absolute Pflicht.",
    learningObjectives: [
      "Säuren und Basen nach Brønsted-Lowry definieren",
      "pH-Werte berechnen und die pH-Skala interpretieren",
      "Die Henderson-Hasselbalch-Gleichung anwenden",
      "Oxidationszahlen bestimmen und Redoxgleichungen aufstellen",
    ],
    sections: [
      {
        heading: "Definitionen und Konzepte",
        content: `Arrhenius-Definition:
- Säure: gibt H+-Ionen in wässriger Lösung ab
- Base: gibt OH--Ionen in wässriger Lösung ab

Brønsted-Lowry-Definition (allgemeiner):
- Säure: Protonendonator (gibt H+ ab)
- Base: Protonenakzeptor (nimmt H+ auf)
- Konjugiertes Säure-Base-Paar: HCl/Cl-, NH3/NH4+

Starke Säuren: dissoziieren vollständig (HCl, HNO3, H2SO4)
Schwache Säuren: dissoziieren teilweise (CH3COOH, H2CO3)

pH-Wert: pH = -log[H+]
- pH 0-6,9: sauer
- pH 7: neutral
- pH 7,1-14: basisch/alkalisch
- pOH = 14 - pH
- Jede pH-Stufe = Faktor 10 in der H+-Konzentration`,
        diagram: "ph-scale",
        merke: "pH + pOH = 14 (bei 25°C). Eine pH-Änderung um 1 bedeutet 10-fache Änderung der H+-Konzentration!",
        klinik: "Der Blut-pH liegt bei 7,35-7,45. Schon geringe Abweichungen (Azidose < 7,35, Alkalose > 7,45) können lebensbedrohlich sein.",
      },
      {
        heading: "Puffer und Neutralisation",
        content: `Neutralisation: Säure + Base -> Salz + Wasser
HCl + NaOH -> NaCl + H2O

Pufferlösungen: halten den pH-Wert bei Zugabe von Säure oder Base nahezu konstant.

Zusammensetzung: schwache Säure + konjugierte Base (oder umgekehrt)
Beispiel: Acetatpuffer (CH3COOH / CH3COO-)
- Zugabe H+: CH3COO- + H+ -> CH3COOH (Puffert ab)
- Zugabe OH-: CH3COOH + OH- -> CH3COO- + H2O (Puffert ab)

Henderson-Hasselbalch-Gleichung: pH = pKs + log([A-]/[HA])
Pufferkapazität: am größten wenn [A-] = [HA], dann pH = pKs

Biologisch wichtige Puffer:
- Bicarbonatpuffer im Blut: H2CO3 / HCO3- (pH 7,35-7,45)
- Phosphatpuffer: H2PO4- / HPO4(2-)
- Proteinpuffer: Aminosäuren als Zwitterionen`,
        merke: "Henderson-Hasselbalch: pH = pKs + log([A-]/[HA]). Wenn [A-] = [HA], dann pH = pKs — dort ist die Pufferkapazität maximal!",
        klinik: "Der Bicarbonatpuffer (CO2/HCO3-) ist der wichtigste Blutpuffer. Hyperventilation bläst CO2 ab → pH steigt (respiratorische Alkalose). Bei Diabetes kann Ketosäureproduktion den Puffer erschöpfen → metabolische Azidose.",
      },
      {
        heading: "Redoxreaktionen",
        content: `Redoxreaktionen = Elektronentransferreaktionen:
- Oxidation: Abgabe von Elektronen (Oxidationszahl steigt)
- Reduktion: Aufnahme von Elektronen (Oxidationszahl sinkt)
- Oxidationsmittel: wird selbst reduziert (nimmt e- auf)
- Reduktionsmittel: wird selbst oxidiert (gibt e- ab)

Merkspruch: "OIL RIG" - Oxidation Is Loss, Reduction Is Gain

Oxidationszahlen bestimmen:
- Elemente: 0
- Einatomige Ionen: gleich der Ladung
- H in Verbindungen: +1 (außer Metallhydride: -1)
- O in Verbindungen: -2 (außer Peroxide: -1)
- Summe aller OZ = Gesamtladung

Beispiel: 2 Mg + O2 -> 2 MgO
- Mg: 0 -> +2 (Oxidation, gibt 2e- ab)
- O: 0 -> -2 (Reduktion, nimmt 2e- auf)
- Mg ist das Reduktionsmittel, O2 das Oxidationsmittel`,
        merke: "OIL RIG: Oxidation Is Loss (von Elektronen), Reduction Is Gain. Das Oxidationsmittel wird selbst REDUZIERT!",
        klinik: "Die Zellatmung ist eine Redoxreaktion: Glucose wird oxidiert (Elektronenabgabe an NAD+), Sauerstoff wird reduziert (zu H2O). 1 Glucose liefert ca. 30-32 ATP.",
      },
    ],
    summary: [
      "Säure = Protonendonator, Base = Protonenakzeptor (Brønsted-Lowry)",
      "pH = -log[H+]; jede pH-Stufe = Faktor 10",
      "Henderson-Hasselbalch: pH = pKs + log([A-]/[HA])",
      "Bicarbonatpuffer ist der wichtigste Blutpuffer",
      "Oxidation = Elektronenabgabe, Reduktion = Elektronenaufnahme",
      "H: +1 (normal), O: -2 (normal) bei Oxidationszahlenbestimmung",
    ],
    selfTestIds: ["chem-25", "chem-28", "chem-30", "chem-35", "chem-40"],
  },

  // ==============================
  // PHYSIK
  // ==============================
  {
    id: "mechanik",
    subject: "physik",
    title: "Mechanik",
    overview: "Mechanik ist der umfangreichste Physik-Bereich im MedAT. Newton'sche Gesetze, Energieerhaltung und Impuls werden regelmäßig abgefragt. Besonders Berechnungsaufgaben sind typisch — Formeln sicher beherrschen!",
    learningObjectives: [
      "Gleichförmige und beschleunigte Bewegung berechnen",
      "Die drei Newton'schen Gesetze anwenden",
      "Energieerhaltung und Impulserhaltung bei Stößen anwenden",
      "Arbeit, Leistung und Energie berechnen",
    ],
    sections: [
      {
        heading: "Kinematik: Gleichförmige und beschleunigte Bewegung",
        content: `Gleichförmige Bewegung (v = konstant):
- Weg-Zeit-Gesetz: s = v x t
- v-t-Diagramm: horizontale Linie
- s-t-Diagramm: Gerade durch Ursprung

Gleichmäßig beschleunigte Bewegung (a = konstant):
- v(t) = v0 + a x t
- s(t) = v0 x t + 1/2 x a x t²
- v² = v0² + 2 x a x s

Freier Fall (a = g ≈ 9,81 m/s² ≈ 10 m/s²):
- v(t) = g x t
- s(t) = 1/2 x g x t²
- v = sqrt(2 x g x h) (Aufprallgeschwindigkeit)

Horizontaler Wurf: Überlagerung von gleichförmiger Bewegung (horizontal) und freiem Fall (vertikal).

Senkrechter Wurf nach oben: v(t) = v0 - g x t, maximale Höhe bei v = 0: h_max = v0²/(2g)`,
        merke: "Freier Fall: Nach 1s: v = 10 m/s, s = 5m. Nach 2s: v = 20 m/s, s = 20m. Die Strecke wächst quadratisch!",
      },
      {
        heading: "Newton'sche Gesetze und Kräfte",
        content: `1. Newton'sches Gesetz (Trägheitsprinzip):
Ein Körper bleibt in Ruhe oder bewegt sich geradlinig gleichförmig, solange keine resultierende Kraft auf ihn wirkt.

2. Newton'sches Gesetz (Aktionsprinzip):
F = m x a (Kraft = Masse x Beschleunigung)
- 1 Newton = 1 kg x m/s²

3. Newton'sches Gesetz (Reactio):
Actio = Reactio. Zu jeder Kraft gibt es eine gleich große, entgegengesetzte Gegenkraft.

Wichtige Kräfte:
- Gewichtskraft: F_G = m x g
- Reibungskraft: F_R = μ x F_N (μ = Reibungskoeffizient)
- Federkraft: F = k x s (Hooke'sches Gesetz)
- Zentripetalkraft: F_Z = m x v²/r (Kreisbewegung)

Arbeit: W = F x s x cos(alpha), Einheit: Joule [J]
Leistung: P = W/t = F x v, Einheit: Watt [W]`,
        diagram: "newton-forces",
        merke: "F = m x a ist die Grundgleichung der Mechanik. Gewicht ist NICHT gleich Masse: Gewichtskraft F_G = m x g hängt von der Gravitation ab!",
        klinik: "In der Biomechanik wirken Newton'sche Gesetze: Beim Gehen wirkt auf das Kniegelenk das 3-4fache des Körpergewichts — relevant für Orthopädie und Rehabilitation.",
      },
      {
        heading: "Energie und Impuls",
        content: `Energieformen:
- Kinetische Energie: E_kin = 1/2 x m x v²
- Potentielle Energie: E_pot = m x g x h
- Spannenergie: E_sp = 1/2 x k x s²

Energieerhaltungssatz: In einem abgeschlossenen System bleibt die Gesamtenergie erhalten. Energie kann nur umgewandelt werden.

Beispiel freier Fall: E_pot (oben) = E_kin (unten)
mgh = 1/2 mv² -> v = sqrt(2gh)

Impuls: p = m x v [kg x m/s]
- Impulserhaltung: p_vorher = p_nachher (in abgeschlossenem System)

Stöße:
- Elastischer Stoß: Impuls UND kinetische Energie erhalten
- Inelastischer Stoß: nur Impuls erhalten
- Perfekt inelastisch: Körper verschmelzen, maximaler Energieverlust`,
        merke: "Bei Energieerhaltung: mgh = ½mv² → v = sqrt(2gh). Geschwindigkeit am Boden ist unabhängig von der Masse!",
      },
    ],
    summary: [
      "Gleichmäßig beschleunigt: s = ½at², v = at, v² = 2as",
      "F = m x a (Newton 2), F_G = mg, F_R = µ x F_N",
      "E_kin = ½mv², E_pot = mgh, Energieerhaltung: E_ges = const",
      "Impuls p = mv ist bei Stößen erhalten, kin. Energie nur bei elastischen Stößen",
      "Arbeit W = F x s x cos(α), Leistung P = W/t",
    ],
    selfTestIds: ["phys-1", "phys-3", "phys-5", "phys-8", "phys-10"],
  },
  {
    id: "elektrizität",
    subject: "physik",
    title: "Elektrizitätslehre",
    overview: "Elektrizität und Magnetismus sind zentrale Physik-Themen im MedAT. Ohm'sches Gesetz, Kirchhoff'sche Regeln und die Lorentzkraft werden regelmäßig abgefragt. Auch EKG-Grundlagen basieren auf Elektrophysik.",
    learningObjectives: [
      "Ohm'sches Gesetz und elektrische Leistung berechnen",
      "Reihen- und Parallelschaltung berechnen und unterscheiden",
      "Kirchhoff'sche Regeln anwenden",
      "Magnetfelder und elektromagnetische Induktion verstehen",
    ],
    sections: [
      {
        heading: "Grundgrößen und Ohm'sches Gesetz",
        content: `Elektrische Ladung Q: Einheit Coulomb [C]
- Elementarladung: e = 1,6 x 10^-19 C

Elektrische Stromstärke I = Q/t: Ladung pro Zeit, Einheit Ampere [A]

Elektrische Spannung U: Potentialdifferenz, Einheit Volt [V]
- Spannung "treibt" den Strom an

Elektrischer Widerstand R: Einheit Ohm [Omega]

Ohm'sches Gesetz: U = R x I
- I = U/R (Strom steigt mit Spannung, sinkt mit Widerstand)

Elektrische Leistung: P = U x I = I²R = U²/R, Einheit Watt [W]

Elektrische Energie: E = P x t = U x I x t, Einheit Joule [J]
- 1 kWh = 3.600.000 J = 3,6 MJ`,
        merke: "U = R x I ('URI'). Leistung: P = U x I = I²R = U²/R. Drei Formen — eine Formel, je nachdem was gegeben ist!",
      },
      {
        heading: "Reihen- und Parallelschaltung",
        content: `Reihenschaltung:
- Strom ist überall gleich: I_ges = I_1 = I_2
- Spannungen addieren sich: U_ges = U_1 + U_2
- Widerstände addieren sich: R_ges = R_1 + R_2
- Spannungsteiler: U_1/U_2 = R_1/R_2

Parallelschaltung:
- Spannung ist überall gleich: U_ges = U_1 = U_2
- Ströme addieren sich: I_ges = I_1 + I_2
- Widerstände: 1/R_ges = 1/R_1 + 1/R_2
- R_ges ist KLEINER als der kleinste Einzelwiderstand
- Stromteiler: I_1/I_2 = R_2/R_1

Kirchhoff'sche Regeln:
1. Knotenregel: Summe aller Ströme an einem Knoten = 0
2. Maschenregel: Summe aller Spannungen in einer Masche = 0`,
        diagram: "circuit",
        merke: "Reihe: gleicher Strom, Widerstände addieren. Parallel: gleiche Spannung, 1/R addieren. Der Gesamtwiderstand parallel ist immer KLEINER als der kleinste Einzelwiderstand!",
        klinik: "Das EKG nutzt Kirchhoff'sche Prinzipien: Die Ableitungen messen Spannungsdifferenzen zwischen Elektroden — das Herz als elektrischer Dipol im Körper.",
      },
      {
        heading: "Elektrisches und Magnetisches Feld",
        content: `Elektrisches Feld E:
- E = F/q (Kraft pro Ladung), Einheit V/m
- Feldlinien: von + nach - (Richtung der Kraft auf positive Testladung)
- Plattenkondensator: E = U/d (homogenes Feld)
- Kapazität: C = Q/U, Einheit Farad [F]

Magnetisches Feld B:
- Einheit Tesla [T]
- Feldlinien: von Nord nach Süd (außerhalb des Magneten)
- Stromdurchflossener Leiter erzeugt Magnetfeld (Rechte-Hand-Regel)

Lorentzkraft: F = q x v x B x sin(alpha)
- Kraft auf bewegte Ladung im Magnetfeld
- Steht senkrecht auf v und B (Drei-Finger-Regel)

Elektromagnetische Induktion (Faraday):
- Änderung des magnetischen Flusses erzeugt Spannung
- U_ind = -N x dPhi/dt (Lenz'sche Regel: induzierter Strom wirkt seiner Ursache entgegen)`,
        merke: "Lorentzkraft steht IMMER senkrecht auf v und B — sie ändert nur die Richtung, nie den Betrag der Geschwindigkeit!",
        klinik: "MRT (Magnetresonanztomographie) nutzt starke Magnetfelder (1,5-3 Tesla), um Wasserstoffkerne im Körper auszurichten und Bilder zu erzeugen.",
      },
    ],
    summary: [
      "Ohm: U = R x I, Leistung P = U x I = I²R = U²/R",
      "Reihenschaltung: gleicher Strom, R addieren. Parallel: gleiche Spannung, 1/R addieren",
      "Kirchhoff: Knotenregel (Ströme) und Maschenregel (Spannungen)",
      "Lorentzkraft F = qvB sin(α) steht senkrecht auf v und B",
      "Induktion: Änderung des Magnetflusses erzeugt Spannung",
    ],
    selfTestIds: ["phys-11", "phys-14", "phys-17", "phys-19", "phys-20"],
  },
  {
    id: "optik",
    subject: "physik",
    title: "Optik und Wellen",
    overview: "Optik umfasst Reflexion, Brechung und Linsen — Themen die im MedAT regelmäßig vorkommen, besonders in Verbindung mit dem Auge. Wellen und das elektromagnetische Spektrum ergänzen dieses Kapitel.",
    learningObjectives: [
      "Reflexionsgesetz und Brechungsgesetz anwenden",
      "Linsengleichung und Vergrößerung berechnen",
      "Totalreflexion und deren Anwendungen erklären",
      "Das elektromagnetische Spektrum kennen",
    ],
    sections: [
      {
        heading: "Reflexion und Brechung",
        content: `Reflexionsgesetz: Einfallswinkel = Ausfallswinkel (alpha = beta)
- Gemessen zum Lot (Senkrechte auf die Oberfläche)

Brechungsgesetz (Snellius): n1 x sin(alpha) = n2 x sin(beta)
- n = Brechungsindex (Vakuum: 1, Wasser: 1,33, Glas: ~1,5)
- Licht wird zum Lot hin gebrochen, wenn es in ein optisch dichteres Medium eintritt

Totalreflexion: Wenn Licht von dichterem zu dünnerem Medium übergeht und der Einfallswinkel den Grenzwinkel überschreitet.
- sin(alpha_grenz) = n2/n1
- Anwendung: Glasfaserkabel, Lichtleiter

Dispersion: Brechungsindex ist wellenlängenabhängig
- Kurzwelliges Licht (blau) wird stärker gebrochen
- Prisma spaltet weißes Licht in Spektralfarben`,
        merke: "Zum Lot hin = ins dichtere Medium. Vom Lot weg = ins dünnere Medium. Totalreflexion nur beim Übergang von dicht nach dünn!",
      },
      {
        heading: "Linsen und optische Instrumente",
        content: `Sammellinse (konvex): bündelt paralleles Licht im Brennpunkt F
Zerstreuungslinse (konkav): streut Licht, als käme es vom virtuellen Brennpunkt

Linsengleichung (dünne Linse): 1/f = 1/g + 1/b
- f = Brennweite, g = Gegenstandsweite, b = Bildweite
- Brechkraft D = 1/f, Einheit Dioptrie [dpt]

Vergrößerung: V = B/G = b/g (Bildgröße/Gegenstandsgröße)

Auge:
- Hornhaut + Linse brechen Licht auf Netzhaut (Retina)
- Akkommodation: Linse ändert Krümmung (Nah/Fernsicht)
- Kurzsichtigkeit: Augapfel zu lang -> Zerstreuungslinse
- Weitsichtigkeit: Augapfel zu kurz -> Sammellinse

Optische Instrumente: Lupe (Vergrößerung V = 25cm/f), Mikroskop (zwei Sammellinsen), Fernrohr.`,
        diagram: "lens-imaging",
        merke: "1/f = 1/g + 1/b. Kurzsichtig = zu lang → Zerstreuungslinse (negative Dioptrien). Weitsichtig = zu kurz → Sammellinse (positive Dioptrien).",
        klinik: "Laserchirurgie (LASIK) korrigiert die Hornhautkrümmung und damit die Brechkraft des Auges — so werden Fehlsichtigkeiten ohne Brille korrigiert.",
      },
      {
        heading: "Wellen und elektromagnetisches Spektrum",
        content: `Licht als elektromagnetische Welle:
- Geschwindigkeit im Vakuum: c = 3 x 10^8 m/s
- c = lambda x f (Wellenlänge x Frequenz)
- Sichtbares Licht: ca. 380nm (violett) bis 780nm (rot)

Elektromagnetisches Spektrum (steigende Wellenlänge):
Gamma -> Röntgen -> UV -> Sichtbar -> Infrarot -> Mikrowellen -> Radiowellen

Interferenz: Überlagerung von Wellen
- Konstruktiv: Wellenberge treffen aufeinander (Verstärkung)
- Destruktiv: Berg trifft Tal (Auslöschung)

Beugung: Wellen breiten sich um Hindernisse aus
- Tritt auf wenn Öffnung ~ Wellenlänge

Welle-Teilchen-Dualismus:
- Licht zeigt Wellen- UND Teilcheneigenschaften
- Photoelektrischer Effekt (Einstein): E = h x f (Photonenergie)
- h = 6,63 x 10^-34 Js (Planck'sches Wirkungsquantum)`,
        diagram: "em-spectrum",
        merke: "Hohe Frequenz = kurze Wellenlänge = hohe Energie (Gamma). Niedrige Frequenz = lange Wellenlänge = niedrige Energie (Radio). E = h x f.",
        klinik: "Röntgenstrahlung durchdringt Weichgewebe, wird aber von Knochen absorbiert — Basis der Röntgendiagnostik. UV-Strahlung kann DNA-Schäden verursachen (Hautkrebs).",
      },
    ],
    summary: [
      "Reflexion: Einfallswinkel = Ausfallswinkel",
      "Brechung: n1 sin(α) = n2 sin(β), Totalreflexion nur von dicht nach dünn",
      "Linsengleichung: 1/f = 1/g + 1/b, Brechkraft D = 1/f [dpt]",
      "EM-Spektrum: Gamma → Röntgen → UV → Sichtbar → IR → Mikrowellen → Radio",
      "E = hf: Photonenenergie proportional zur Frequenz",
    ],
    selfTestIds: ["phys-21", "phys-24", "phys-27", "phys-30", "phys-33"],
  },

  // ==============================
  // MATHEMATIK
  // ==============================
  {
    id: "algebra",
    subject: "mathematik",
    title: "Algebra",
    overview: "Algebra bildet die Basis für alle Berechnungen im MedAT. Quadratische Gleichungen, Logarithmen und Prozentrechnung sind typische Aufgabentypen. Sichere Formelkenntnisse sparen wertvolle Prüfungszeit.",
    learningObjectives: [
      "Quadratische Gleichungen mit der Lösungsformel lösen",
      "Potenz-, Wurzel- und Logarithmengesetze sicher anwenden",
      "Prozentrechnung und Zinseszins berechnen",
      "Gleichungssysteme mit verschiedenen Verfahren lösen",
    ],
    sections: [
      {
        heading: "Gleichungen und Ungleichungen",
        content: `Lineare Gleichungen: ax + b = 0 -> x = -b/a

Quadratische Gleichungen: ax² + bx + c = 0
- Lösungsformel: x = (-b +/- sqrt(b² - 4ac)) / (2a)
- Diskriminante D = b² - 4ac:
  * D > 0: zwei reelle Lösungen
  * D = 0: eine doppelte Lösung
  * D < 0: keine reelle Lösung
- Satz von Vieta: x1 + x2 = -b/a, x1 * x2 = c/a

Ungleichungen:
- Rechenregeln wie Gleichungen, ABER: Multiplikation/Division mit negativer Zahl kehrt das Relationszeichen um!
- Betragsungleichung: |x| < a bedeutet -a < x < a

Lineare Gleichungssysteme (2 Variablen):
- Einsetzungsverfahren, Gleichsetzungsverfahren, Additionsverfahren
- Eindeutige Lösung / Keine Lösung / Unendlich viele Lösungen`,
        merke: "Diskriminante D = b²-4ac bestimmt die Anzahl der Lösungen. ACHTUNG bei Ungleichungen: Multiplikation mit negativer Zahl dreht das Zeichen um!",
      },
      {
        heading: "Potenzen, Wurzeln und Logarithmen",
        content: `Potenzgesetze:
- a^m x a^n = a^(m+n)
- a^m / a^n = a^(m-n)
- (a^m)^n = a^(m*n)
- (a*b)^n = a^n * b^n
- a^0 = 1, a^(-n) = 1/a^n

Wurzeln:
- sqrt(a) = a^(1/2), n-te Wurzel: a^(1/n)
- sqrt(a*b) = sqrt(a) * sqrt(b)
- sqrt(a/b) = sqrt(a) / sqrt(b)

Logarithmen (Umkehrung der Potenz): log_a(x) = y bedeutet a^y = x
- ln = log_e (natürlicher Logarithmus, e ≈ 2,718)
- lg = log_10 (dekadischer Logarithmus)

Logarithmusgesetze:
- log(a*b) = log(a) + log(b)
- log(a/b) = log(a) - log(b)
- log(a^n) = n * log(a)
- Basiswechsel: log_a(x) = log_b(x) / log_b(a)`,
        merke: "Logarithmusgesetze: Multiplikation wird zu Addition, Division zu Subtraktion, Potenz wird zum Faktor. Der pH-Wert ist ein Logarithmus: pH = -lg[H+]!",
      },
      {
        heading: "Prozentrechnung und Verhältnisse",
        content: `Grundbegriffe:
- Grundwert G, Prozentwert P, Prozentsatz p
- P = G x p/100
- p = P/G x 100
- G = P x 100/p

Prozentuale Veränderung:
- Zunahme um p%: G_neu = G x (1 + p/100)
- Abnahme um p%: G_neu = G x (1 - p/100)
- Prozentuale Änderung: (Neu - Alt) / Alt x 100%

Zinseszins: K_n = K_0 x (1 + p/100)^n
- K_0 = Anfangskapital, p = Zinssatz, n = Jahre

Dreisatz:
- Proportional: mehr -> mehr (z.B. Stückpreis)
- Antiproportional: mehr -> weniger (z.B. Arbeiter/Zeit)

Mischungsrechnung: Gewichteter Durchschnitt
m1*c1 + m2*c2 = (m1+m2) * c_mix`,
        merke: "Zinseszins: K_n = K_0 x (1 + p/100)^n. Gleiche Formel wie Bakterienwachstum und radioaktiver Zerfall — nur mit (1-p/100) für Zerfall!",
        klinik: "Prozentrechnung in der Medizin: Dosierungsberechnungen, Verdünnungsreihen, Sensitivität/Spezifität von Tests — alles basiert auf sicherem Umgang mit Prozenten.",
      },
    ],
    summary: [
      "Quadratische Gleichung: x = (-b ± sqrt(b²-4ac)) / 2a",
      "Diskriminante D > 0: 2 Lösungen, D = 0: 1 Lösung, D < 0: keine",
      "Potenzgesetze: gleiche Basis → Exponenten addieren/subtrahieren",
      "Logarithmus: log(a·b) = log(a) + log(b), log(a^n) = n·log(a)",
      "Zinseszins: K_n = K_0 × (1 + p/100)^n",
    ],
    selfTestIds: ["math-1", "math-3", "math-5", "math-8", "math-10"],
  },
  {
    id: "geometrie",
    subject: "mathematik",
    title: "Geometrie und Trigonometrie",
    overview: "Geometrie und Trigonometrie umfassen Flächen- und Volumenberechnungen sowie Winkelfunktionen. Diese Themen werden im MedAT oft mit physikalischen Anwendungen kombiniert.",
    learningObjectives: [
      "Flächen und Umfänge von Grundfiguren berechnen",
      "Volumen und Oberflächen von Körpern berechnen",
      "Sinus, Kosinus und Tangens im rechtwinkligen Dreieck anwenden",
      "Sinus- und Kosinussatz für allgemeine Dreiecke nutzen",
    ],
    sections: [
      {
        heading: "Flächen und Umfänge",
        content: `Dreieck:
- Fläche: A = 1/2 x g x h (Grundseite x Höhe)
- Satz des Pythagoras (rechtwinkliges Dreieck): a² + b² = c²
- Winkelsumme: alpha + beta + gamma = 180°

Viereck:
- Rechteck: A = a x b, U = 2(a+b)
- Quadrat: A = a², U = 4a
- Parallelogramm: A = g x h
- Trapez: A = 1/2 x (a+c) x h

Kreis:
- Fläche: A = pi x r²
- Umfang: U = 2 x pi x r = pi x d
- Kreissektor: A = alpha/360 x pi x r²
- Kreisbogen: b = alpha/360 x 2 x pi x r

Zusammengesetzte Flächen: in Teilflächen zerlegen, einzeln berechnen, addieren/subtrahieren.`,
        merke: "Pythagoras: a² + b² = c² (c ist die Hypotenuse = längste Seite, gegenüber dem rechten Winkel). Funktioniert NUR bei rechtwinkligen Dreiecken!",
      },
      {
        heading: "Körper und Volumen",
        content: `Quader:
- Volumen: V = a x b x c
- Oberfläche: O = 2(ab + ac + bc)

Würfel:
- V = a³, O = 6a²

Zylinder:
- V = pi x r² x h
- Mantelfläche: M = 2 x pi x r x h
- Oberfläche: O = 2 x pi x r x (r + h)

Kegel:
- V = 1/3 x pi x r² x h
- Mantellinie: s = sqrt(r² + h²)
- Mantelfläche: M = pi x r x s

Kugel:
- V = 4/3 x pi x r³
- Oberfläche: O = 4 x pi x r²

Pyramide:
- V = 1/3 x A_Grundfläche x h`,
        merke: "Spitze Körper (Kegel, Pyramide) haben Faktor 1/3 im Volumen gegenüber dem 'vollen' Körper (Zylinder, Prisma). Kugel: V = 4/3πr³, O = 4πr².",
      },
      {
        heading: "Trigonometrie",
        content: `Im rechtwinkligen Dreieck (bezogen auf Winkel alpha):
- sin(alpha) = Gegenkathete / Hypotenuse
- cos(alpha) = Ankathete / Hypotenuse
- tan(alpha) = Gegenkathete / Ankathete = sin/cos

Wichtige Werte:
- sin(0°) = 0, sin(30°) = 0,5, sin(45°) = sqrt(2)/2, sin(60°) = sqrt(3)/2, sin(90°) = 1
- cos(0°) = 1, cos(30°) = sqrt(3)/2, cos(45°) = sqrt(2)/2, cos(60°) = 0,5, cos(90°) = 0

Einheitskreis: sin² + cos² = 1

Sinussatz: a/sin(A) = b/sin(B) = c/sin(C)
Kosinussatz: c² = a² + b² - 2ab x cos(C)

Bogenmaß: alpha(rad) = alpha(°) x pi/180
- 360° = 2*pi rad, 180° = pi rad, 90° = pi/2 rad`,
        diagram: "unit-circle",
        merke: "SOH-CAH-TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. sin²(α) + cos²(α) = 1 gilt IMMER!",
      },
    ],
    summary: [
      "Dreieck: A = ½gh, Pythagoras: a² + b² = c²",
      "Kreis: A = πr², U = 2πr, Kugel: V = 4/3πr³",
      "Spitze Körper: Faktor 1/3 (Kegel, Pyramide)",
      "sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse",
      "Einheitskreis: sin² + cos² = 1, Kosinussatz für allgemeine Dreiecke",
    ],
    selfTestIds: ["math-13", "math-15", "math-18", "math-20", "math-22"],
  },
  {
    id: "analysis",
    subject: "mathematik",
    title: "Analysis (Grundlagen)",
    overview: "Analysis-Grundlagen wie Funktionstypen, Ableitungen und Integrale kommen im MedAT vor — besonders in Kombination mit physikalischen Fragestellungen. Sichere Ableitungsregeln sind ein großer Vorteil.",
    learningObjectives: [
      "Verschiedene Funktionstypen erkennen und ihre Eigenschaften beschreiben",
      "Ableitungsregeln sicher anwenden (Potenz-, Produkt-, Ketten-, Quotientenregel)",
      "Extremstellen und Wendepunkte berechnen",
      "Grundintegrale bestimmen und Flächen berechnen",
    ],
    sections: [
      {
        heading: "Funktionen und ihre Eigenschaften",
        content: `Eine Funktion f ordnet jedem x-Wert genau einen y-Wert zu: y = f(x)

Lineare Funktionen: f(x) = kx + d
- k = Steigung (Änderung von y pro Einheit x)
- d = y-Achsenabschnitt
- Nullstelle: x = -d/k

Quadratische Funktionen: f(x) = ax² + bx + c
- Parabel (a > 0: nach oben geöffnet, a < 0: nach unten)
- Scheitelpunkt: x_s = -b/(2a), y_s = f(x_s)
- Scheitelpunktform: f(x) = a(x - x_s)² + y_s

Exponentialfunktionen: f(x) = a x b^x
- b > 1: Wachstum, 0 < b < 1: Zerfall
- Natürliche Exponentialfunktion: f(x) = e^x

Logarithmusfunktionen: f(x) = log_b(x) (Umkehrfunktion der Exponentialfunktion)

Definitionsbereich und Wertebereich:
- Nenner ≠ 0, unter gerader Wurzel ≥ 0, Argument des log > 0`,
        diagram: "coordinate-system",
        merke: "Exponentialfunktion e^x ist ihre eigene Ableitung! Und: Exponentielles Wachstum/Zerfall beschreibt viele biologische Prozesse (Bakterienwachstum, radioaktiver Zerfall, Pharmakokinetik).",
      },
      {
        heading: "Differentialrechnung (Ableitung)",
        content: `Die Ableitung f'(x) gibt die momentane Änderungsrate (Steigung) von f(x) an.

Ableitungsregeln:
- Potenzregel: (x^n)' = n x x^(n-1)
- Konstantenregel: (c x f)' = c x f'
- Summenregel: (f + g)' = f' + g'
- Produktregel: (f x g)' = f' x g + f x g'
- Quotientenregel: (f/g)' = (f' x g - f x g') / g²
- Kettenregel: (f(g(x)))' = f'(g(x)) x g'(x)

Spezielle Ableitungen:
- (e^x)' = e^x
- (ln(x))' = 1/x
- (sin(x))' = cos(x)
- (cos(x))' = -sin(x)

Anwendungen:
- Tangentengleichung: y = f'(a)(x - a) + f(a)
- Extremstellen: f'(x) = 0, f''(x) > 0 (Minimum), f''(x) < 0 (Maximum)
- Wendepunkte: f''(x) = 0 und f'''(x) ≠ 0`,
        merke: "Extremstellen: f'(x) = 0 setzen. Minimum wenn f''(x) > 0, Maximum wenn f''(x) < 0. Wendepunkt: f''(x) = 0 und Vorzeichenwechsel.",
      },
      {
        heading: "Integralrechnung (Grundlagen)",
        content: `Das bestimmte Integral berechnet die Fläche zwischen Kurve und x-Achse:
Integral von a bis b über f(x)dx = F(b) - F(a)

F(x) ist die Stammfunktion (Aufleitung) von f(x): F'(x) = f(x)

Grundintegrale:
- Integral x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)
- Integral 1/x dx = ln|x| + C
- Integral e^x dx = e^x + C
- Integral sin(x) dx = -cos(x) + C
- Integral cos(x) dx = sin(x) + C

Rechenregeln:
- Integral [c x f(x)] dx = c x Integral f(x) dx
- Integral [f(x) + g(x)] dx = Integral f(x) dx + Integral g(x) dx

Fläche zwischen Kurve und x-Achse:
- Wenn f(x) < 0: Integral ist negativ -> Betrag nehmen
- Fläche zwischen zwei Kurven: Integral |f(x) - g(x)| dx`,
        merke: "Integration ist die Umkehrung der Ableitung. Stammfunktion von x^n ist x^(n+1)/(n+1). ACHTUNG: Bei x^(-1) = 1/x ist die Stammfunktion ln|x|!",
      },
    ],
    summary: [
      "Lineare Funktion: f(x) = kx + d, Parabel: f(x) = ax² + bx + c",
      "Potenzregel: (x^n)' = nx^(n-1), Kettenregel: [f(g(x))]' = f'(g(x))·g'(x)",
      "(e^x)' = e^x, (ln x)' = 1/x, (sin x)' = cos x, (cos x)' = -sin x",
      "Extremstellen: f'(x) = 0, Minimum f''> 0, Maximum f'' < 0",
      "Stammfunktion: x^n → x^(n+1)/(n+1), Fläche = F(b) - F(a)",
    ],
    selfTestIds: ["math-25", "math-28", "math-30", "math-33", "math-35"],
  },
];

export function getChaptersBySubject(subject: string): Chapter[] {
  return bmsChapters.filter((c) => c.subject === subject);
}
