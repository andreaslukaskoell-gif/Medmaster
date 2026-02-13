import { expandedDecks, expandedDeckLabels } from "./flashcards_expanded";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: "bio" | "chemie" | "physik" | "mathe";
  topic: string;
  difficulty: "leicht" | "mittel" | "schwer";
}

// Auto-generated flashcards from chapter key facts
const baseDecks: Record<string, Flashcard[]> = {
  "bio-zellbiologie": [
    { id: "fc-bio-1", front: "Welche Organelle ist das Kraftwerk der Zelle?", back: "Mitochondrium — Produktion von ATP durch oxidative Phosphorylierung. Doppelmembran mit Cristae.", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
    { id: "fc-bio-2", front: "Was ist der Unterschied zwischen rauem und glattem ER?", back: "Raues ER: mit Ribosomen besetzt → Proteinsynthese.\nGlattes ER: ohne Ribosomen → Lipidsynthese, Calciumspeicher, Entgiftung.", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
    { id: "fc-bio-3", front: "Nenne die Phasen der Mitose (PMAT).", back: "1. Prophase: Chromatin kondensiert\n2. Metaphase: Chromosomen in Äquatorialebene\n3. Anaphase: Chromatiden zu den Polen\n4. Telophase: Kernhüllen neu, Dekondensation", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
    { id: "fc-bio-4", front: "Was besagt die Endosymbiontentheorie?", back: "Mitochondrien und Chloroplasten stammen von aufgenommenen Prokaryoten ab. Belege: eigene 70S-Ribosomen, Doppelmembran, eigene ringförmige DNA.", category: "bio", topic: "Zellbiologie", difficulty: "mittel" },
    { id: "fc-bio-5", front: "Welche Funktion hat der Golgi-Apparat?", back: "Sortierung, Modifikation und Verpackung von Proteinen. Cis-Seite empfängt vom ER, Trans-Seite versendet in Vesikel.", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
    { id: "fc-bio-6", front: "Was sind Lysosomen?", back: "Membranumhüllte Vesikel mit hydrolytischen Enzymen (pH 4-5). Funktion: intrazelluläre Verdauung, Autophagie.", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
    { id: "fc-bio-7", front: "Ribosomen: 70S vs 80S?", back: "70S: Prokaryoten und Organellen (Mito, Chloroplast)\n80S: Eukaryoten (im Cytoplasma)\nS = Svedberg-Einheit (Sedimentationskoeffizient)", category: "bio", topic: "Zellbiologie", difficulty: "mittel" },
    { id: "fc-bio-8", front: "Wie viel ATP liefert die vollständige Oxidation von 1 Glucose?", back: "Ca. 38 ATP (theoretisch), davon:\n- 2 ATP aus Glykolyse\n- 2 ATP aus Citratzyklus\n- 34 ATP aus oxidativer Phosphorylierung", category: "bio", topic: "Zellbiologie", difficulty: "schwer" },
  ],
  "bio-genetik": [
    { id: "fc-bio-g1", front: "Basenpaarung der DNA?", back: "Adenin (A) — Thymin (T): 2 Wasserstoffbrücken\nGuanin (G) — Cytosin (C): 3 Wasserstoffbrücken\n→ G-C Bindung ist stärker!", category: "bio", topic: "Genetik", difficulty: "leicht" },
    { id: "fc-bio-g2", front: "Unterschied Transkription vs Translation?", back: "Transkription: DNA → mRNA (im Zellkern, RNA-Polymerase)\nTranslation: mRNA → Protein (am Ribosom im Cytoplasma)", category: "bio", topic: "Genetik", difficulty: "leicht" },
    { id: "fc-bio-g3", front: "Was sind die Stopp-Codons?", back: "UAA, UAG, UGA — Für sie gibt es keine passende tRNA → Termination der Translation.", category: "bio", topic: "Genetik", difficulty: "mittel" },
    { id: "fc-bio-g4", front: "Mendel: Spaltungsregel (F2)?", back: "In F2 spalten sich Merkmale:\n- Phänotypisch: 3:1 (dominant:rezessiv)\n- Genotypisch: 1:2:1 (AA:Aa:aa)", category: "bio", topic: "Genetik", difficulty: "leicht" },
    { id: "fc-bio-g5", front: "Was bedeutet 'semikonservativ' bei der DNA-Replikation?", back: "Jeder neue DNA-Doppelstrang besteht aus einem alten (Eltern-) und einem neu synthetisierten Strang.", category: "bio", topic: "Genetik", difficulty: "mittel" },
    { id: "fc-bio-g6", front: "Welche Enzyme wirken bei der Replikation?", back: "1. Helicase: entwindet Doppelhelix\n2. Primase: setzt RNA-Primer\n3. DNA-Polymerase III: synthetisiert (5'→3')\n4. DNA-Ligase: verbindet Okazaki-Fragmente", category: "bio", topic: "Genetik", difficulty: "schwer" },
    { id: "fc-bio-g7", front: "Kodominanz Beispiel?", back: "AB0-Blutgruppen: Allele A und B sind kodominant. Bei Genotyp AB prägen sich BEIDE Antigene auf den Erythrozyten aus.", category: "bio", topic: "Genetik", difficulty: "mittel" },
  ],
  "bio-humanbiologie": [
    { id: "fc-bio-h1", front: "Blutfluss durch das Herz?", back: "Hohlvenen → re. Vorhof → Trikuspidalklappe → re. Ventrikel → Pulmonalklappe → Lungenarterien → Lunge → Lungenvenen → li. Vorhof → Mitralklappe → li. Ventrikel → Aortenklappe → Aorta", category: "bio", topic: "Herz-Kreislauf", difficulty: "mittel" },
    { id: "fc-bio-h2", front: "Erregungsleitung des Herzens?", back: "Sinusknoten (Schrittmacher, ~70/min) → AV-Knoten (Verzögerung) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern", category: "bio", topic: "Herz-Kreislauf", difficulty: "mittel" },
    { id: "fc-bio-h3", front: "Phasen des Aktionspotentials?", back: "Ruhepotential (-70mV) → Depolarisation (Na⁺-Einstrom) → Overshoot (+30mV) → Repolarisation (K⁺-Ausstrom) → Hyperpolarisation → Ruhepotential", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
    { id: "fc-bio-h4", front: "IgG vs IgM Antikörper?", back: "IgG: häufigster Ak, Sekundärantwort, plazentagängig\nIgM: Erstantwort, größter Ak (Pentamer), nicht plazentagängig", category: "bio", topic: "Immunsystem", difficulty: "schwer" },
    { id: "fc-bio-h5", front: "Aktive vs Passive Impfung?", back: "Aktiv: abgeschwächte/tote Erreger → eigene Ak-Bildung (langsam, langfristig)\nPassiv: fertige Antikörper → sofortiger Schutz (kurz)", category: "bio", topic: "Immunsystem", difficulty: "leicht" },
  ],
  "chemie-atombau": [
    { id: "fc-ch-1", front: "Ordnungszahl Z vs Massenzahl A?", back: "Z = Anzahl Protonen = Anzahl Elektronen (neutrales Atom)\nA = Protonen + Neutronen\nIsotope: gleiches Z, verschiedenes A", category: "chemie", topic: "Atombau", difficulty: "leicht" },
    { id: "fc-ch-2", front: "Elektronenkonfiguration: Aufbauprinzip?", back: "Reihenfolge: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p...\nSchale n → max. 2n² Elektronen\nHund: erst einfach besetzen\nPauli: max. 2 e⁻ pro Orbital", category: "chemie", topic: "Atombau", difficulty: "mittel" },
    { id: "fc-ch-3", front: "Trends im PSE: Atomradius?", back: "In der Periode: nimmt AB (mehr Protonen → stärkere Anziehung)\nIn der Gruppe: nimmt ZU (mehr Schalen)", category: "chemie", topic: "Atombau", difficulty: "leicht" },
    { id: "fc-ch-4", front: "Trends im PSE: Elektronegativität?", back: "In der Periode: nimmt ZU\nIn der Gruppe: nimmt AB\nHöchste EN: Fluor (3,98)\nEN bestimmt die Polarität von Bindungen", category: "chemie", topic: "Atombau", difficulty: "leicht" },
  ],
  "chemie-bindungen": [
    { id: "fc-ch-b1", front: "Ionenbindung vs Kovalente Bindung?", back: "Ionenbindung: Metall + Nichtmetall, EN-Diff > 1,7, Elektronenübertragung\nKovalent: Nichtmetall + Nichtmetall, EN-Diff < 1,7, geteilte Elektronenpaare", category: "chemie", topic: "Bindungen", difficulty: "leicht" },
    { id: "fc-ch-b2", front: "Wasserstoffbrückenbindung?", back: "H gebunden an F, O oder N\nStärkste zwischenmolekulare Kraft\nErklärt: hoher Sdp. von H₂O, Dichteanomalie, DNA-Basenpaarung", category: "chemie", topic: "Bindungen", difficulty: "mittel" },
    { id: "fc-ch-b3", front: "VSEPR: 4 Elektronenpaare = ?", back: "Tetraedrisch (109,5°) z.B. CH₄\nMit 1 freien EP: trigonal pyramidal (NH₃)\nMit 2 freien EP: gewinkelt (H₂O, 104,5°)", category: "chemie", topic: "Bindungen", difficulty: "schwer" },
  ],
  "chemie-säuren-basen": [
    { id: "fc-ch-s1", front: "pH-Wert berechnen?", back: "pH = -log[H⁺]\npOH = 14 - pH\nJede pH-Stufe = Faktor 10 in H⁺-Konzentration\npH 7 = neutral (bei 25°C)", category: "chemie", topic: "Säuren-Basen", difficulty: "leicht" },
    { id: "fc-ch-s2", front: "Henderson-Hasselbalch-Gleichung?", back: "pH = pKs + log([A⁻]/[HA])\nPufferkapazität maximal wenn [A⁻] = [HA], dann pH = pKs", category: "chemie", topic: "Säuren-Basen", difficulty: "schwer" },
    { id: "fc-ch-s3", front: "Bicarbonatpuffer im Blut?", back: "H₂CO₃ / HCO₃⁻\npH-Bereich: 7,35 - 7,45\nBei Säurezufuhr: HCO₃⁻ + H⁺ → H₂CO₃ → CO₂ + H₂O (abgeatmet)", category: "chemie", topic: "Säuren-Basen", difficulty: "schwer" },
    { id: "fc-ch-s4", front: "OIL RIG — Was bedeutet das?", back: "Oxidation Is Loss (Elektronenabgabe)\nReduction Is Gain (Elektronenaufnahme)\nOxidationsmittel wird selbst reduziert\nReduktionsmittel wird selbst oxidiert", category: "chemie", topic: "Redox", difficulty: "leicht" },
  ],
  "physik-mechanik": [
    { id: "fc-ph-1", front: "Newton'sche Gesetze?", back: "1. Trägheit: Körper bleibt in Ruhe/Bewegung ohne Kraft\n2. F = m × a\n3. Actio = Reactio", category: "physik", topic: "Mechanik", difficulty: "leicht" },
    { id: "fc-ph-2", front: "Energieerhaltungssatz?", back: "In einem abgeschlossenen System bleibt die Gesamtenergie erhalten.\nE_kin + E_pot = konstant\n½mv² + mgh = konstant", category: "physik", topic: "Mechanik", difficulty: "leicht" },
    { id: "fc-ph-3", front: "Elastischer vs Inelastischer Stoss?", back: "Elastisch: Impuls UND kinetische Energie erhalten\nInelastisch: nur Impuls erhalten\nPerfekt inelastisch: Körper verschmelzen", category: "physik", topic: "Mechanik", difficulty: "mittel" },
    { id: "fc-ph-4", front: "Freier Fall: Formeln?", back: "v(t) = g × t\ns(t) = ½ × g × t²\nv = √(2gh)\ng ≈ 9,81 m/s² ≈ 10 m/s²", category: "physik", topic: "Mechanik", difficulty: "leicht" },
  ],
  "physik-elektrizität": [
    { id: "fc-ph-e1", front: "Ohm'sches Gesetz?", back: "U = R × I\nI = U/R\nR = U/I\nEinheiten: V = Ω × A", category: "physik", topic: "Elektrizität", difficulty: "leicht" },
    { id: "fc-ph-e2", front: "Reihen- vs Parallelschaltung: Widerstand?", back: "Reihe: R_ges = R₁ + R₂ (Widerstand addiert sich)\nParallel: 1/R_ges = 1/R₁ + 1/R₂ (Gesamtwiderstand kleiner als kleinster Einzelwiderstand)", category: "physik", topic: "Elektrizität", difficulty: "leicht" },
    { id: "fc-ph-e3", front: "Kirchhoff'sche Regeln?", back: "1. Knotenregel: Summe aller Ströme = 0\n2. Maschenregel: Summe aller Spannungen in Masche = 0", category: "physik", topic: "Elektrizität", difficulty: "mittel" },
  ],
  "physik-optik": [
    { id: "fc-ph-o1", front: "Linsengleichung?", back: "1/f = 1/g + 1/b\nf = Brennweite\ng = Gegenstandsweite\nb = Bildweite\nBrechkraft D = 1/f [Dioptrie]", category: "physik", topic: "Optik", difficulty: "mittel" },
    { id: "fc-ph-o2", front: "Kurzsichtigkeit vs Weitsichtigkeit?", back: "Kurzsichtig: Augapfel zu lang → Bild vor Netzhaut → Zerstreuungslinse (konkav)\nWeitsichtig: Augapfel zu kurz → Bild hinter Netzhaut → Sammellinse (konvex)", category: "physik", topic: "Optik", difficulty: "leicht" },
  ],
  "mathe-algebra": [
    { id: "fc-ma-1", front: "Quadratische Formel?", back: "x = (-b ± √(b²-4ac)) / (2a)\nDiskriminante D = b²-4ac:\nD > 0: zwei Lösungen\nD = 0: eine Lösung\nD < 0: keine reelle Lösung", category: "mathe", topic: "Algebra", difficulty: "leicht" },
    { id: "fc-ma-2", front: "Logarithmus-Gesetze?", back: "log(a×b) = log(a) + log(b)\nlog(a/b) = log(a) - log(b)\nlog(aⁿ) = n × log(a)\nBasiswechsel: log_a(x) = log_b(x)/log_b(a)", category: "mathe", topic: "Algebra", difficulty: "mittel" },
    { id: "fc-ma-3", front: "Potenzgesetze?", back: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ / aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐˣⁿ\na⁰ = 1\na⁻ⁿ = 1/aⁿ", category: "mathe", topic: "Algebra", difficulty: "leicht" },
  ],
  "mathe-geometrie": [
    { id: "fc-ma-g1", front: "Satz des Pythagoras?", back: "a² + b² = c²\n(c = Hypotenuse im rechtwinkligen Dreieck)\nGilt NUR für rechtwinklige Dreiecke!", category: "mathe", topic: "Geometrie", difficulty: "leicht" },
    { id: "fc-ma-g2", front: "Kreis: Fläche und Umfang?", back: "Fläche: A = π × r²\nUmfang: U = 2π × r = π × d\nKreissektor: A = α/360 × πr²", category: "mathe", topic: "Geometrie", difficulty: "leicht" },
    { id: "fc-ma-g3", front: "Kugel: Volumen und Oberfläche?", back: "V = 4/3 × π × r³\nO = 4 × π × r²", category: "mathe", topic: "Geometrie", difficulty: "mittel" },
  ],
  "mathe-analysis": [
    { id: "fc-ma-a1", front: "Wichtige Ableitungsregeln?", back: "(xⁿ)' = n×xⁿ⁻¹\n(eˣ)' = eˣ\n(ln x)' = 1/x\n(sin x)' = cos x\n(cos x)' = -sin x", category: "mathe", topic: "Analysis", difficulty: "mittel" },
    { id: "fc-ma-a2", front: "Extremstellen finden?", back: "1. f'(x) = 0 → Kandidaten\n2. f''(x) > 0 → Minimum\n   f''(x) < 0 → Maximum\nWendepunkte: f''(x) = 0 und f'''(x) ≠ 0", category: "mathe", topic: "Analysis", difficulty: "schwer" },
  ],
};

// Merge base decks with expanded decks
export const flashcardDecks: Record<string, Flashcard[]> = {
  ...baseDecks,
  ...expandedDecks,
};

export function getAllFlashcards(): Flashcard[] {
  return Object.values(flashcardDecks).flat();
}

export function getFlashcardsByCategory(category: string): Flashcard[] {
  return Object.entries(flashcardDecks)
    .filter(([key]) => key.startsWith(category))
    .flatMap(([, cards]) => cards);
}

export function getDeckNames(): { id: string; label: string; count: number; category: string }[] {
  const labels: Record<string, string> = {
    "bio-zellbiologie": "Biologie: Zellbiologie",
    "bio-genetik": "Biologie: Genetik",
    "bio-humanbiologie": "Biologie: Humanbiologie",
    "chemie-atombau": "Chemie: Atombau & PSE",
    "chemie-bindungen": "Chemie: Bindungen",
    "chemie-säuren-basen": "Chemie: Säuren & Basen",
    "physik-mechanik": "Physik: Mechanik",
    "physik-elektrizität": "Physik: Elektrizität",
    "physik-optik": "Physik: Optik",
    "mathe-algebra": "Mathe: Algebra",
    "mathe-geometrie": "Mathe: Geometrie",
    "mathe-analysis": "Mathe: Analysis",
    ...expandedDeckLabels,
  };
  return Object.entries(flashcardDecks).map(([id, cards]) => {
    const parts = id.split("-");
    const category = parts[0];
    const topic = parts.slice(1).join("-");
    return { id, label: labels[id] || topic, count: cards.length, category };
  });
}
