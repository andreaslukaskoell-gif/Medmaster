import type { Flashcard } from "./flashcards";

// ============================================================
// BIOLOGIE — Erweiterte Karteikarten
// ============================================================

export const bioEvolution: Flashcard[] = [
  { id: "fc-bio-ev1", front: "Was ist natürliche Selektion?", back: "Individün mit vorteilhaften Merkmalen überleben und pflanzen sich häufiger fort.\nDarwin: 'Survival of the fittest' = Überleben der Bestangepassten (nicht der Stärksten!).", category: "bio", topic: "Evolution", difficulty: "leicht" },
  { id: "fc-bio-ev2", front: "Arten der Selektion?", back: "1. Stabilisierende: Extreme werden eliminiert → Mittelwert bevorzugt\n2. Gerichtete: Ein Extrem wird bevorzugt → Merkmalsverschiebung\n3. Disruptive: Beide Extreme bevorzugt → Merkmalsspaltung", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev3", front: "Hardy-Weinberg-Gleichung?", back: "p² + 2pq + q² = 1\np + q = 1\np = Frequenz dominantes Allel\nq = Frequenz rezessives Allel\nGilt nur bei: kein Drift, keine Mutation, keine Selektion, keine Migration, Panmixie.", category: "bio", topic: "Evolution", difficulty: "schwer" },
  { id: "fc-bio-ev4", front: "Homologie vs Analogie?", back: "Homolog: gleicher Ursprung, verschiedene Funktion (Arm/Flosse/Flügel)\nAnalog: verschiedener Ursprung, gleiche Funktion (Vogelflügel/Insektenflügel)\nHomologie = Beleg für Verwandtschaft, Analogie = konvergente Evolution.", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev5", front: "Was ist Gendrift?", back: "Zufällige Änderung der Allelfrequenz, besonders in kleinen Populationen.\nFlaschenhalseffekt: Population drastisch reduziert → Allelverlust\nGründereffekt: Kleine Gruppe gründet neue Population → wenige Allele.", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev6", front: "Allopatrische vs sympatrische Artbildung?", back: "Allopatrisch: Geografische Isolation trennt Population → getrennte Evolution\nSympatrisch: Artbildung OHNE räumliche Trennung (z. B. durch Polyploidie, ökologische Nischen).", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev7", front: "Evolutionsbelege: Welche gibt es?", back: "1. Fossilien (Leitfossilien, Brückentiere)\n2. Homologe Organe\n3. Rudimentäre Organe (Appendix, Weisheitszähne)\n4. Embryonalentwicklung (Biogenetische Grundregel)\n5. DNA-Sequenzvergleiche\n6. Universeller genetischer Code", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev8", front: "Synthetische Evolutionstheorie: 5 Faktoren?", back: "1. Mutation (neue Allele)\n2. Rekombination (neue Kombinationen)\n3. Selektion (gerichtete Auslese)\n4. Gendrift (zufällige Änderung)\n5. Isolation (Artbildung)\nAlle wirken zusammen auf die Evolution.", category: "bio", topic: "Evolution", difficulty: "schwer" },
  { id: "fc-bio-ev9", front: "Was ist Kövolution?", back: "Wechselseitige Anpassung zweier Arten aneinander.\nBeispiele: Blüten ↔ Bestäuber, Parasit ↔ Wirt, Räuber ↔ Beute.\nFührt zu immer besserer Anpassung (evolutionäres Wettrüsten).", category: "bio", topic: "Evolution", difficulty: "mittel" },
  { id: "fc-bio-ev10", front: "Adaptive Radiation?", back: "Auffächerung einer Stammform in viele verschiedene Arten durch Anpassung an unterschiedliche ökologische Nischen.\nKlassisches Beispiel: Darwinfinken auf Galápagos — unterschiedliche Schnabelformen für verschiedene Nahrung.", category: "bio", topic: "Evolution", difficulty: "mittel" },
];

export const bioOekologie: Flashcard[] = [
  { id: "fc-bio-ok1", front: "Biotische vs abiotische Faktoren?", back: "Biotisch: Lebewesen (Konkurrenz, Prädation, Symbiose)\nAbiotisch: Unbelebt (Temperatur, Licht, Wasser, pH, Boden).", category: "bio", topic: "Ökologie", difficulty: "leicht" },
  { id: "fc-bio-ok2", front: "Ökologische Nische vs Habitat?", back: "Habitat: Wo ein Organismus lebt (Lebensraum)\nÖkologische Nische: Gesamtheit aller Umweltbeziehungen einer Art (Nahrung, Feinde, Temperaturbereich, Aktivitätszeit).\nKonkurrenzausschlussprinzip: Zwei Arten können nicht die gleiche Nische besetzen.", category: "bio", topic: "Ökologie", difficulty: "mittel" },
  { id: "fc-bio-ok3", front: "Nahrungskette: Trophieebenen?", back: "1. Produzenten (Pflanzen, Algen) — Photosynthese\n2. Primärkonsumenten (Herbivoren)\n3. Sekundärkonsumenten (Carnivoren)\n4. Tertiärkonsumenten (Top-Prädatoren)\n5. Destrünten (Zersetzer)\nEnergieverlust: ~90% pro Stufe (10%-Regel).", category: "bio", topic: "Ökologie", difficulty: "leicht" },
  { id: "fc-bio-ok4", front: "Symbiose-Formen?", back: "Mutualismus: beide profitieren (Biene ↔ Blüte)\nKommensalismus: einer profitiert, anderer neutral (Epiphyten)\nParasitismus: einer profitiert, anderer geschädigt (Zecke).", category: "bio", topic: "Ökologie", difficulty: "leicht" },
  { id: "fc-bio-ok5", front: "Populationswachstum: J- vs S-Kurve?", back: "J-Kurve: Exponentielles Wachstum (unbegrenzte Ressourcen)\nS-Kurve: Logistisches Wachstum mit Kapazitätsgrenze K\nFormel: dN/dt = r·N·(K-N)/K\nr = Wachstumsrate, K = Kapazitätsgrenze.", category: "bio", topic: "Ökologie", difficulty: "mittel" },
  { id: "fc-bio-ok6", front: "r- vs K-Strategen?", back: "r-Strategen: Viele Nachkommen, wenig Pflege, kurze Lebensdauer (Insekten, Bakterien)\nK-Strategen: Wenige Nachkommen, viel Pflege, lange Lebensdauer (Elefant, Mensch)\nr nahe Kapazitätsgrenze: K-Strategen überlegen.", category: "bio", topic: "Ökologie", difficulty: "mittel" },
  { id: "fc-bio-ok7", front: "Kohlenstoffkreislauf: Grundprinzip?", back: "CO₂ → Photosynthese → Biomasse → Zellatmung/Verbrennung → CO₂\nSenken: Ozeane, Wälder, Böden\nQuellen: Verbrennung, Vulkane, Atmung\nTreibhauseffekt: CO₂, CH₄, N₂O absorbieren Infrarotstrahlung.", category: "bio", topic: "Ökologie", difficulty: "mittel" },
  { id: "fc-bio-ok8", front: "Stickstoffkreislauf: Schlüsselprozesse?", back: "1. N₂-Fixierung: N₂ → NH₃ (Rhizobien, Blitz)\n2. Nitrifikation: NH₃ → NO₂⁻ → NO₃⁻\n3. Assimilation: NO₃⁻ → Aminosäuren\n4. Ammonifikation: org. N → NH₃\n5. Denitrifikation: NO₃⁻ → N₂ (anärob)", category: "bio", topic: "Ökologie", difficulty: "schwer" },
];

export const bioFortpflanzung: Flashcard[] = [
  { id: "fc-bio-fp1", front: "Spermatogenese: Wo und wie?", back: "Im Hoden (Tubuli seminiferi).\nSpermatogonie (2n) → Spermatozyte I → Meiose I → Spermatozyte II → Meiose II → Spermatiden → Spermien.\nDauer: ~74 Tage. Ab Pubertät kontinuierlich.", category: "bio", topic: "Fortpflanzung", difficulty: "mittel" },
  { id: "fc-bio-fp2", front: "Oogenese: Besonderheiten?", back: "Beginnt bereits pränatal (Oogonien → Primäre Oozyten).\nArretiert in Prophase I (Diktyotän) bis Pubertät.\nMeiose I erst bei Ovulation → 1 Eizelle + 1 Polkörper.\nMeiose II erst nach Befruchtung.\nBegrenzter Vorrat: ~400 Ovulationen.", category: "bio", topic: "Fortpflanzung", difficulty: "schwer" },
  { id: "fc-bio-fp3", front: "Menstruationszyklus: 4 Phasen?", back: "1. Menstruation (Tag 1-5): Abstoßung Endometrium\n2. Follikelphase (Tag 1-14): FSH → Follikelreifung, Östrogen ↑\n3. Ovulation (Tag 14): LH-Peak → Eisprung\n4. Lutealphase (Tag 15-28): Gelbkörper → Progesteron ↑", category: "bio", topic: "Fortpflanzung", difficulty: "mittel" },
  { id: "fc-bio-fp4", front: "Hormone des Menstruationszyklus?", back: "GnRH (Hypothalamus) → FSH + LH (Hypophyse)\nFSH: Follikelreifung\nLH: Auslösung Ovulation + Gelbkörperbildung\nÖstrogen: Endometriumaufbau (Follikelphase)\nProgesteron: Endometrium-Erhalt (Lutealphase)", category: "bio", topic: "Fortpflanzung", difficulty: "mittel" },
  { id: "fc-bio-fp5", front: "Embryonalentwicklung: Keimblätter?", back: "3 Keimblätter (Gastrulation):\nEktoderm: Haut, Nervensystem, Sinnesorgane\nMesoderm: Muskeln, Knochen, Blut, Nieren, Herz\nEndoderm: Darmepithel, Leber, Pankreas, Lunge\nMerke: 'Ecto = Extern, Endo = Intern'", category: "bio", topic: "Fortpflanzung", difficulty: "mittel" },
  { id: "fc-bio-fp6", front: "Befruchtung: Schritte?", back: "1. Kapazitation der Spermien im Eileiter\n2. Akrosomreaktion: Enzyme lösen Corona radiata\n3. Bindung an Zona pellucida (ZP3-Protein)\n4. Verschmelzung der Membranen\n5. Kortikalreaktion (Polyspermieblock)\n6. Verschmelzung der Vorkerne (Karyogamie)", category: "bio", topic: "Fortpflanzung", difficulty: "schwer" },
  { id: "fc-bio-fp7", front: "Plazenta: Funktionen?", back: "1. Gasaustausch (O₂/CO₂)\n2. Nährstofftransport\n3. Hormonproduktion (hCG, Östrogen, Progesteron)\n4. Immunschutz (IgG-Transfer)\n5. Abfallentsorgung\nPlazentaschranke: Schützt teilweise vor Schadstoffen (nicht alle!).", category: "bio", topic: "Fortpflanzung", difficulty: "mittel" },
];

export const bioMolekulargenetik: Flashcard[] = [
  { id: "fc-bio-mg1", front: "Genexpression: Zentrales Dogma?", back: "DNA → (Transkription) → mRNA → (Translation) → Protein\nAusnahmen: Reverse Transkription (RNA → DNA bei Retroviren), RNA-Replikation.", category: "bio", topic: "Molekulargenetik", difficulty: "leicht" },
  { id: "fc-bio-mg2", front: "mRNA-Prozessierung (Eukaryoten)?", back: "1. 5'-Capping: 7-Methylguanosin-Kappe → Schutz + Ribosomenerkennung\n2. 3'-Polyadenylierung: Poly-A-Schwanz → Stabilität\n3. Spleißen: Introns raus, Exons zusammen\nAlternatives Spleißen → verschiedene Proteine aus einem Gen.", category: "bio", topic: "Molekulargenetik", difficulty: "schwer" },
  { id: "fc-bio-mg3", front: "PCR: Polymerase-Kettenreaktion?", back: "1. Denaturierung (95°C): DNA-Stränge trennen\n2. Annealing (55-65°C): Primer binden\n3. Elongation (72°C): Taq-Polymerase verlängert\nNach n Zyklen: 2ⁿ Kopien.\n30 Zyklen = ~1 Milliarde Kopien!", category: "bio", topic: "Molekulargenetik", difficulty: "mittel" },
  { id: "fc-bio-mg4", front: "Mutationsarten?", back: "Punktmutationen:\n- Stumm: Aminosäure ändert sich nicht (Degeneration)\n- Missense: Andere Aminosäure (z.B. Sichelzell: Glu→Val)\n- Nonsense: Stoppcodon entsteht → verkürztes Protein\nFrameshift: Insertion/Deletion → Leseraster verschoben.", category: "bio", topic: "Molekulargenetik", difficulty: "mittel" },
  { id: "fc-bio-mg5", front: "Epigenetik: Mechanismen?", back: "1. DNA-Methylierung: CH₃ an Cytosin → Gen-Stilllegung\n2. Histonmodifikation: Acetylierung (aktiv), Methylierung (variabel)\n3. miRNA: Bindet mRNA → verhindert Translation\nVererbbar, aber reversibel. Beeinflusst durch Umwelt.", category: "bio", topic: "Molekulargenetik", difficulty: "schwer" },
  { id: "fc-bio-mg6", front: "Genetischer Code: Eigenschaften?", back: "1. Triplett-Code: 3 Basen = 1 Codon = 1 Aminosäure\n2. Degeneriert: Mehrere Codons für eine AS (64 Codons, 20 AS)\n3. Kommafrei: Lückenlos abgelesen\n4. Nicht überlappend\n5. Universal: Fast alle Lebewesen verwenden denselben Code\nAusnahme: Mitochondrien (leicht abweichend).", category: "bio", topic: "Molekulargenetik", difficulty: "mittel" },
  { id: "fc-bio-mg7", front: "CRISPR-Cas9: Wie funktioniert es?", back: "1. Guide-RNA erkennt Zielsequenz auf der DNA\n2. Cas9-Nuklease schneidet beide DNA-Stränge\n3. Zelle repariert: NHEJ (fehlerhaft → Knockout) oder HDR (mit Vorlage → Korrektur)\nAnwendung: Gentherapie, Pflanzenzucht, Forschung.", category: "bio", topic: "Molekulargenetik", difficulty: "schwer" },
];

export const bioNervensystem: Flashcard[] = [
  { id: "fc-bio-ns1", front: "Sympathikus vs Parasympathikus?", back: "Sympathikus: 'Fight or Flight' — Herzfrequenz↑, Bronchien weit, Pupillen weit, Verdauung↓\nParasympathikus: 'Rest and Digest' — Herzfrequenz↓, Bronchien eng, Pupillen eng, Verdauung↑\nTransmitter: Sympathikus=Noradrenalin, Para=Acetylcholin.", category: "bio", topic: "Nervensystem", difficulty: "leicht" },
  { id: "fc-bio-ns2", front: "Synapsentypen?", back: "Chemische Synapse: Neurotransmitter über synaptischen Spalt (langsamer, modulierbar)\nElektrische Synapse (Gap Junctions): Direkte Ionenübertragung (schneller, bidirektional)\nErregende Synapse: EPSP (Na⁺-Einstrom)\nHemmende Synapse: IPSP (Cl⁻-Einstrom/K⁺-Ausstrom).", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
  { id: "fc-bio-ns3", front: "Neurotransmitter: Die wichtigsten?", back: "Acetylcholin: Muskelkontraktion, Parasympathikus\nNoradrenalin: Sympathikus, Aufmerksamkeit\nDopamin: Belohnung, Motorik (Mangel→Parkinson)\nSerotonin: Stimmung, Schlaf (Mangel→Depression)\nGABA: Hemmung (wichtigster hemmender NT)\nGlutamat: Erregung (wichtigster erregender NT).", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
  { id: "fc-bio-ns4", front: "Saltatorische Erregungsleitung?", back: "Bei myelinisierten Nervenfasern springt das AP von Ranvier-Schnürring zu Schnürring.\nViel schneller als kontinuierliche Leitung (bis 120 m/s vs 1-2 m/s).\nMyelin = Isolation durch Schwann-Zellen (PNS) / Oligodendrozyten (ZNS).\nMS: Demyelinisierung → gestörte Leitung.", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
  { id: "fc-bio-ns5", front: "Aufbau des Gehirns: 5 Hauptteile?", back: "1. Großhirn (Cerebrum): Bewusstsein, Denken, Motorik\n2. Zwischenhirn (Diencephalon): Thalamus, Hypothalamus\n3. Mittelhirn (Mesencephalon): Reflexe, Augen\n4. Kleinhirn (Cerebellum): Koordination, Gleichgewicht\n5. Hirnstamm (Medulla): Vitalfunktionen (Atmung, Herzschlag)", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
  { id: "fc-bio-ns6", front: "Reflex vs bewusste Reaktion?", back: "Reflex: Reiz → Sensor → afferent → Rückenmark → efferent → Effektor\nSchnell, unwillkürlich, angeboren oder erlernt.\nBeispiel: Kniesehnenreflex (monosynaptisch)\nBewusste Reaktion: Über Großhirn, langsamer, willentlich steuerbar.", category: "bio", topic: "Nervensystem", difficulty: "leicht" },
  { id: "fc-bio-ns7", front: "Na⁺/K⁺-ATPase: Funktion?", back: "Transportiert 3 Na⁺ RAUS und 2 K⁺ REIN pro ATP.\nErhält das Ruhepotential (-70 mV).\nElektrogen: Netto 1 positive Ladung nach außen.\nVerbraucht ~30% der Gesamt-ATP-Produktion des Körpers.", category: "bio", topic: "Nervensystem", difficulty: "mittel" },
];

export const bioImmunsystem: Flashcard[] = [
  { id: "fc-bio-im1", front: "Angeborene vs adaptive Immunität?", back: "Angeboren: Sofort, unspezifisch (Haut, Makrophagen, NK-Zellen, Komplement)\nAdaptiv: Verzögert, spezifisch (T-Zellen, B-Zellen, Antikörper)\nAngeboren → Brücke → Adaptiv über APCs (dendritische Zellen).", category: "bio", topic: "Immunbiologie", difficulty: "leicht" },
  { id: "fc-bio-im2", front: "T-Zellen: CD4 vs CD8?", back: "CD4+ (T-Helferzellen): Aktivieren B-Zellen und Makrophagen, Th1/Th2-Differenzierung\nCD8+ (Zytotoxische T-Zellen): Töten virusinfizierte Zellen + Tumorzellen direkt\nMHC I: Alle kernhaltigen Zellen → CD8\nMHC II: Nur APCs → CD4.", category: "bio", topic: "Immunbiologie", difficulty: "mittel" },
  { id: "fc-bio-im3", front: "Antikörper-Klassen: Ig-Typen?", back: "IgG: Häufigster, Sekundärantwort, plazentagängig\nIgM: Erstantwort, Pentamer (10 Bindungsstellen)\nIgA: Schleimhäute, Muttermilch (Dimer)\nIgE: Allergien, Parasiten\nIgD: B-Zell-Rezeptor (Oberfläche)", category: "bio", topic: "Immunbiologie", difficulty: "mittel" },
  { id: "fc-bio-im4", front: "Blutgruppen: AB0-System?", back: "A: Antigen A + Anti-B-Antikörper\nB: Antigen B + Anti-A-Antikörper\nAB: Beide Antigene, keine Antikörper (Universalempfänger)\n0: Keine Antigene, beide Antikörper (Universalspender)\nVererbung: IA und IB kodominant, i rezessiv.", category: "bio", topic: "Immunbiologie", difficulty: "leicht" },
  { id: "fc-bio-im5", front: "Rhesus-Faktor: Warum klinisch wichtig?", back: "Rh+ (D-Antigen vorhanden): ~85% der Bevölkerung\nRh-: Kein D-Antigen\nProblem: Rh- Mutter + Rh+ Kind → Sensibilisierung → Anti-D-Antikörper → Morbus hämolyticus neonatorum bei 2. Schwangerschaft.\nProphylaxe: Anti-D-Immunglobulin nach Geburt.", category: "bio", topic: "Immunbiologie", difficulty: "schwer" },
  { id: "fc-bio-im6", front: "Allergie Typ I (Soforttyp)?", back: "IgE-vermittelt. Ablauf:\n1. Sensibilisierung: B-Zellen → IgE → bindet an Mastzellen\n2. Re-Exposition: Allergen crosslinkt IgE → Mastzellen degranulieren → Histamin\nSymptome: Urtikaria, Rhinitis, Asthma, Anaphylaxie\nBeispiele: Pollen, Nüsse, Bienengift.", category: "bio", topic: "Immunbiologie", difficulty: "mittel" },
];

export const bioVerdauung: Flashcard[] = [
  { id: "fc-bio-vd1", front: "Enzyme der Verdauung: Mund → Magen → Darm?", back: "Mund: Amylase (Stärke→Maltose), Lipase (lingual)\nMagen: Pepsin (Proteine, pH 2), HCl, Intrinsic Factor\nPankreas: Trypsin, Lipase, Amylase, Nukleasen\nDünndarm: Laktase, Maltase, Peptidasen (Bürstensaum).", category: "bio", topic: "Verdauung", difficulty: "mittel" },
  { id: "fc-bio-vd2", front: "Dünndarm: Aufbau und Resorption?", back: "3 Abschnitte: Duodenum, Jejunum, Ileum\nOberflächenvergrößerung: Kerckring-Falten → Zotten → Mikrovilli (200m²!)\nResorption: Glucose/AS über Na⁺-Symporter, Fette über Mizellen → Chylomikronen, Vit. B12 im Ileum.", category: "bio", topic: "Verdauung", difficulty: "mittel" },
  { id: "fc-bio-vd3", front: "Leber: 5 Hauptfunktionen?", back: "1. Galleproduktion (Emulgierung von Fetten)\n2. Entgiftung (Alkohol, Medikamente, NH₃→Harnstoff)\n3. Stoffwechselzentrale (Gluconeogenese, Glykogenspeicher)\n4. Proteinbiosynthese (Albumin, Gerinnungsfaktoren)\n5. Speicher (Eisen, Vitamine A, D, B12).", category: "bio", topic: "Verdauung", difficulty: "mittel" },
  { id: "fc-bio-vd4", front: "Pankreas: Exokrin vs endokrin?", back: "Exokrin (99%): Verdauungsenzyme → Ductus pancreaticus → Duodenum\n- Trypsinogen → Trypsin (durch Enterokinase aktiviert)\nEndokrin (Langerhans-Inseln):\n- α-Zellen: Glucagon (BZ↑)\n- β-Zellen: Insulin (BZ↓)\n- δ-Zellen: Somatostatin (hemmt beides)", category: "bio", topic: "Verdauung", difficulty: "mittel" },
];

export const bioNiere: Flashcard[] = [
  { id: "fc-bio-ni1", front: "Nephron: Aufbau?", back: "Nierenkörperchen: Glomerulus + Bowman-Kapsel\nTubuläres System: Prox. Tubulus → Henle-Schleife → Dist. Tubulus → Sammelrohr\nPrimärharn: ~180 L/Tag\nEndharn: ~1,5 L/Tag (99% Rückresorption!).", category: "bio", topic: "Niere", difficulty: "mittel" },
  { id: "fc-bio-ni2", front: "Gegenstromprinzip in der Henle-Schleife?", back: "Absteigender Schenkel: Wasserdurchlässig, NaCl-undurchlässig → Wasser strömt ins Interstitium\nAufsteigender Schenkel: Wasserundurchlässig, NaCl wird aktiv resorbiert\n→ Erzeugt Osmolaritätsgradienten im Mark (bis 1200 mOsm/L)\n→ Ermöglicht Harnkonzentrierung im Sammelrohr (ADH-abhängig).", category: "bio", topic: "Niere", difficulty: "schwer" },
  { id: "fc-bio-ni3", front: "RAAS: Renin-Angiotensin-Aldosteron-System?", back: "Nierendurchblutung↓ → Renin (Juxtaglomeruläre Zellen)\nAngiotensinogen → Angiotensin I (Renin) → Angiotensin II (ACE in Lunge)\nAngiotensin II: Vasokonstriktion + Aldosteron-Freisetzung\nAldosteron: Na⁺-Rückresorption↑, K⁺-Sekretion↑ → Blutdruck↑.", category: "bio", topic: "Niere", difficulty: "schwer" },
];


// ============================================================
// BIOLOGIE — Hormonsystem (Endokrinologie)
// ============================================================

export const bioHormonSystem: Flashcard[] = [
  { id: "fc-bio-hs1", front: "Hypothalamus-Hypophysen-Achse: Prinzip?", back: "Hypothalamus → Releasing-/Inhibiting-Hormone → Hypophysenvorderlappen (HVL)\nHVL → glandotrope Hormone → periphere Drüsen\nNegative Rückkopplung: Periphere Hormone hemmen Hypothalamus + HVL.\nBeispiel: TRH → TSH → T3/T4 → hemmt TRH/TSH.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs2", front: "Hypophysenvorderlappen: 6 Hormone?", back: "1. TSH (→ Schilddrüse)\n2. ACTH (→ Nebennierenrinde)\n3. LH (→ Gonaden)\n4. FSH (→ Gonaden)\n5. STH/GH (Wachstumshormon → Knochen, Muskeln)\n6. Prolaktin (→ Milchproduktion)\nMerke: 'FLAT PiG' — FSH, LH, ACTH, TSH, Prolaktin, GH.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs3", front: "Hypophysenhinterlappen: Welche Hormone?", back: "Oxytocin: Uteruskontraktion (Geburt), Milchejektion, Bonding\nADH (Vasopressin): Wasserrückresorption im Sammelrohr → konzentrierter Urin\nBeide im Hypothalamus synthetisiert, im HHL nur gespeichert + freigesetzt!\nADH-Mangel → Diabetes insipidus (massiver Wasserverlust).", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs4", front: "Schilddrüsenhormone T3 und T4?", back: "T4 (Thyroxin): 4 Iod-Atome, Speicherform, längere HWZ\nT3 (Triiodthyronin): 3 Iod-Atome, aktive Form, 5× stärker\nWirkung: Grundumsatz↑, O₂-Verbrauch↑, Wachstum, ZNS-Entwicklung\nHypothyreose: Müdigkeit, Gewichtszunahme, Kälteempfindlichkeit\nHyperthyreose: Tachykardie, Gewichtsverlust, Nervosität.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs5", front: "Nebenniere: Mark vs Rinde?", back: "Nebennierenmark (NNM): Adrenalin + Noradrenalin (Katecholamine) → 'Fight or Flight'\nNebennierenrinde (NNR) — 3 Schichten:\n1. Zona glomerulosa: Aldosteron (Mineralokortikoide)\n2. Zona fasciculata: Cortisol (Glukokortikoide)\n3. Zona reticularis: Androgene (DHEA)\nMerke: 'Salt-Sugar-Sex' (von außen nach innen).", category: "bio", topic: "Hormonsystem", difficulty: "schwer" },
  { id: "fc-bio-hs6", front: "Cortisol: Wirkungen?", back: "Gluconeogenese↑ (Blutzucker↑)\nProteolyse↑, Lipolyse↑\nEntzündungshemmend + Immunsuppressiv\nPermissive Wirkung auf Katecholamine\nStresshormon: Circadianer Rhythmus (Maximum morgens)\nCushing-Syndrom: Cortisol-Überproduktion → Stammfettsucht, Striae, Hyperglykämie.", category: "bio", topic: "Hormonsystem", difficulty: "schwer" },
  { id: "fc-bio-hs7", front: "Insulin: Synthese und Wirkung?", back: "β-Zellen der Langerhans-Inseln (Pankreas)\nAusschüttung: Bei Blutzucker↑\nWirkung: Glykogensynthese↑, Glucoseaufnahme↑ (GLUT4), Lipogenese↑, Proteinbiosynthese↑\nInsulin senkt BZ → einziges blutzuckersenkendes Hormon!\nGegenspieler: Glucagon, Adrenalin, Cortisol, STH.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs8", front: "Diabetes mellitus Typ 1 vs Typ 2?", back: "Typ 1: Autoimmune Zerstörung der β-Zellen → absoluter Insulinmangel, juvenil, insulinpflichtig\nTyp 2: Insulinresistenz + relative Insuffizienz, Adipositas-assoziiert, >90% aller Fälle\nKomplikationen: Mikroangiopathie (Retina, Niere), Makroangiopathie (Herzinfarkt, Schlaganfall), Neuropathie.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs9", front: "Negative vs positive Rückkopplung?", back: "Negative Rückkopplung: Produkt hemmt eigene Produktion → Homöostase\nBeispiel: T3/T4 hemmt TSH und TRH\nPositive Rückkopplung: Produkt verstärkt eigene Produktion → selten!\nBeispiel: LH-Peak vor Ovulation (Östrogen verstärkt LH-Ausschüttung)\nOxytocin bei Geburt: Wehen → Oxytocin → stärkere Wehen.", category: "bio", topic: "Hormonsystem", difficulty: "mittel" },
  { id: "fc-bio-hs10", front: "Hormonklassen: Hydrophil vs lipophil?", back: "Hydrophil (Peptid-/Proteohormone, Katecholamine):\n→ Oberflächenrezeptoren → Second Messenger (cAMP, IP3, Ca²⁺)\n→ Schnelle Wirkung, kurze HWZ\nLipophil (Steroide, Schilddrüsenhormone):\n→ Intrazelluläre/nukleäre Rezeptoren → Genexpression\n→ Langsame Wirkung, lange HWZ, Transportproteine nötig.", category: "bio", topic: "Hormonsystem", difficulty: "schwer" },
  { id: "fc-bio-hs11", front: "Stressreaktion: Akut vs chronisch?", back: "Akut: Sympathikus + NNM → Adrenalin/Noradrenalin\n→ HF↑, RR↑, BZ↑, Bronchodilatation, Durchblutung Muskulatur↑\nChronisch: HPA-Achse → CRH → ACTH → Cortisol\n→ Immunsuppression, Proteinabbau, Hyperglykämie\nChronischer Stress: Risikörhöhung für KHK, Depression, metabolisches Syndrom.", category: "bio", topic: "Hormonsystem", difficulty: "schwer" },
  { id: "fc-bio-hs12", front: "Kalziumhomöostase: PTH vs Calcitonin?", back: "Parathormon (PTH, Nebenschilddrüse):\n→ Ca²⁺↑ im Blut: Knochenabbau, renale Rückresorption↑, Vit.-D-Aktivierung\nCalcitonin (C-Zellen der Schilddrüse):\n→ Ca²⁺↓: Hemmung Knochenabbau, renale Ca-Ausscheidung↑\nVitamin D (Calcitriol): Ca²⁺-Resorption im Darm↑\nHypoparathyreoidismus → Tetanie (Muskelkrämpfe).", category: "bio", topic: "Hormonsystem", difficulty: "schwer" },
];

// ============================================================
// BIOLOGIE — Blut & Hämatologie
// ============================================================

export const bioBlut: Flashcard[] = [
  { id: "fc-bio-bl1", front: "Blutzusammensetzung?", back: "Plasma (~55%): Wasser, Proteine (Albumin, Globuline, Fibrinogen), Elektrolyte, Glukose\nZelluläre Bestandteile (~45% = Hämatokrit):\n• Erythrozyten: ~5 Mio/µL\n• Leukozyten: 4.000–10.000/µL\n• Thrombozyten: 150.000–400.000/µL\nBlutvolumen: ~4–6 L beim Erwachsenen.", category: "bio", topic: "Blut", difficulty: "leicht" },
  { id: "fc-bio-bl2", front: "Erythrozyten: Aufbau und Funktion?", back: "Bikonkave Scheibe, kernlos (bei Säugetieren), Ø 7,5 µm\nLebensdauer: ~120 Tage, Abbau in Milz (Hämoglobin → Bilirubin)\nBildung: Erythropöse im Knochenmark, stimuliert durch EPO (Niere)\nHauptfunktion: O₂-Transport via Hämoglobin\nEnergie: Nur anärobe Glykolyse (keine Mitochondrien!).", category: "bio", topic: "Blut", difficulty: "mittel" },
  { id: "fc-bio-bl3", front: "Hämoglobin: Aufbau und O₂-Bindung?", back: "Tetramer: 2α + 2β Untereinheiten, je 1 Häm-Gruppe mit Fe²⁺\nKooperative Bindung: Sigmoide Sättigungskurve\n1 Hb bindet max. 4 O₂-Moleküle\nDesoxyhb (T-State) vs Oxyhb (R-State)\nCO bindet 200× stärker als O₂ → CO-Vergiftung\nHbA1c: Glykiertes Hb → Langzeit-BZ-Marker (Diabetes).", category: "bio", topic: "Blut", difficulty: "schwer" },
  { id: "fc-bio-bl4", front: "Leukozyten: Typen und Funktionen?", back: "Granulozyten:\n• Neutrophile (60–70%): Phagozytose, Bakterienabwehr\n• Eosinophile (2–4%): Parasiten, Allergien\n• Basophile (<1%): Histamin, IgE-vermittelt\nAgranulozyten:\n• Monozyten (3–8%): → Makrophagen im Gewebe\n• Lymphozyten (25–30%): T-Zellen, B-Zellen, NK-Zellen.", category: "bio", topic: "Blut", difficulty: "mittel" },
  { id: "fc-bio-bl5", front: "Thrombozyten und primäre Hämostase?", back: "Thrombozyten: Kernlose Zellfragmente aus Megakaryozyten\nLebensdauer: 7–10 Tage\nPrimäre Hämostase (Minuten):\n1. Vasokonstriktion\n2. Thrombozytenadhäsion (vWF an Kollagen)\n3. Thrombozytenaktivierung (Formänderung, ADP/TXA₂-Freisetzung)\n4. Thrombozytenaggregation (GPIIb/IIIa + Fibrinogen).", category: "bio", topic: "Blut", difficulty: "mittel" },
  { id: "fc-bio-bl6", front: "Sekundäre Hämostase: Gerinnungskaskade?", back: "Extrinsischer Weg: Gewebefaktor (TF) → VII → X\nIntrinsischer Weg: XII → XI → IX → (VIIIa) → X\nGemeinsame Endstrecke: X → Va → Prothrombin → Thrombin → Fibrinogen → Fibrin\nFibrin wird durch Faktor XIII quervernetzt\nAntikoagulation: Antithrombin III, Protein C/S, Heparin, Cumarine (Vitamin-K-Antagonisten).", category: "bio", topic: "Blut", difficulty: "schwer" },
  { id: "fc-bio-bl7", front: "Blutgruppen: AB0-System Details?", back: "Antigene = Glykolipide auf Erythrozyten-Oberfläche\nH-Substanz (Vorläufer) → A-Transferase → Antigen A\nH-Substanz → B-Transferase → Antigen B\nBlutgruppe 0: Nur H-Substanz (keine Transferase)\nBombay-Phänotyp (Oh): Keine H-Substanz → kein A/B, extrem selten\nAntikörper: IgM (natürliche Isoagglutinine) → keine Plazentapassage.", category: "bio", topic: "Blut", difficulty: "schwer" },
  { id: "fc-bio-bl8", front: "Anämie: Einteilung nach MCV?", back: "Mikrozytär (MCV <80 fL): Eisenmangel (häufigste!), Thalassämie\nNormozytär (80–100 fL): Akute Blutung, hämolytische Anämie, Niereninsuffizienz (EPO-Mangel)\nMakrozytär (MCV >100 fL): Vitamin-B12-/Folsäure-Mangel (megaloblastär)\nSymptome: Blässe, Müdigkeit, Tachykardie, Dyspnoe.", category: "bio", topic: "Blut", difficulty: "schwer" },
  { id: "fc-bio-bl9", front: "Fibrinolyse: Wie wird ein Thrombus aufgelöst?", back: "Plasminogen → Plasmin (durch t-PA = Tissue Plasminogen Activator)\nPlasmin spaltet Fibrin → Fibrinspaltprodukte (D-Dimere)\nD-Dimere: Labormarker für Thrombose/Lungenembolie\nTherapeutisch: Streptokinase, Alteplase (rt-PA)\nHemmung: α₂-Antiplasmin, PAI-1.", category: "bio", topic: "Blut", difficulty: "schwer" },
  { id: "fc-bio-bl10", front: "Hämatopöse: Blutbildung im Knochenmark?", back: "Pluripotente Stammzelle →\nMyeloische Reihe: Erythrozyten, Granulozyten, Monozyten, Thrombozyten\nLymphatische Reihe: T-Zellen, B-Zellen, NK-Zellen\nWachstumsfaktoren: EPO (Ery), TPO (Thrombo), G-CSF (Granulo), M-CSF (Mono)\nPostnatal: Rotes Knochenmark (v.a. Becken, Sternum, Wirbelkörper)\nPränatal: Dottersack → Leber/Milz → Knochenmark.", category: "bio", topic: "Blut", difficulty: "mittel" },
];

// ============================================================
// BIOLOGIE — Muskelsystem
// ============================================================

export const bioMuskelSystem: Flashcard[] = [
  { id: "fc-bio-mu1", front: "Drei Muskeltypen: Vergleich?", back: "Skelettmuskulatur: Quergestreift, willkürlich, mehrkernig, schnelle Kontraktion\nGlatte Muskulatur: Nicht quergestreift, unwillkürlich, einkernig, langsam/tonisch (Gefäße, Darm)\nHerzmuskulatur: Quergestreift, unwillkürlich, einkernig, Glanzstreifen (Gap Junctions)\nAlle benötigen Ca²⁺ für Kontraktion.", category: "bio", topic: "Muskelsystem", difficulty: "leicht" },
  { id: "fc-bio-mu2", front: "Sarkomer: Aufbau?", back: "Kleinste kontraktile Einheit des Muskels\nZ-Scheibe → Z-Scheibe = 1 Sarkomer\nActin (dünne Filamente): Von Z-Scheibe ausgehend\nMyosin (dicke Filamente): In der Mitte (A-Bande)\nI-Bande: Nur Actin (wird bei Kontraktion kürzer)\nH-Zone: Nur Myosin (wird bei Kontraktion kürzer)\nA-Bande: Bleibt gleich lang!", category: "bio", topic: "Muskelsystem", difficulty: "mittel" },
  { id: "fc-bio-mu3", front: "Gleitfilamenttheorie: Muskelkontraktion?", back: "1. AP erreicht T-Tubuli\n2. Ca²⁺-Freisetzung aus sarkoplasmatischem Retikulum\n3. Ca²⁺ bindet Troponin C → Konformationsänderung → Tropomyosin gibt Bindungsstellen frei\n4. Myosinköpfe binden Actin (Querbrücken)\n5. Kraftschlag: ADP+Pi Freisetzung → Filamente gleiten\n6. ATP bindet → Lösung → neuer Zyklus\nRigor mortis: Kein ATP → Dauerbindung.", category: "bio", topic: "Muskelsystem", difficulty: "schwer" },
  { id: "fc-bio-mu4", front: "Neuromuskuläre Endplatte?", back: "Motorische Endplatte = Synapse zwischen Motoneuron und Muskelfaser\n1. AP → Acetylcholin (ACh)-Freisetzung aus Vesikeln\n2. ACh bindet nikotinische Rezeptoren → Na⁺-Einstrom → Endplattenpotential\n3. Überschwelliges EPP → Muskel-AP → Kontraktion\nACh-Abbau: Acetylcholinesterase\nCurare: Blockiert nAChR → Lähmung\nMyasthenia gravis: AK gegen nAChR.", category: "bio", topic: "Muskelsystem", difficulty: "schwer" },
  { id: "fc-bio-mu5", front: "Motorische Einheit: Definition?", back: "1 Motoneuron + alle von ihm innervierten Muskelfasern\nKleine Einheiten (z. B. Augenmuskeln): Feinmotorik, wenige Fasern/Neuron\nGroße Einheiten (z. B. Quadrizeps): Grobmotorik, viele Fasern/Neuron\nKraftregulation: Rekrutierung (mehr Einheiten) + Frequenzierung (höhere AP-Frequenz)\nTetanus: Summation bei hoher Frequenz → Dauerkontraktion.", category: "bio", topic: "Muskelsystem", difficulty: "mittel" },
  { id: "fc-bio-mu6", front: "ATP-Quellen im Muskel?", back: "1. Kreatinphosphat → ATP (sofort, ~10 s)\n2. Anärobe Glykolyse (Glukose → Laktat, ~1–2 min)\n3. Ärobe Oxidation (Fettsäuren + Glukose, Minuten–Stunden)\nMuskelfasertypen:\nTyp I (rot, slow-twitch): Ausdauer, viele Mitochondrien, ärob\nTyp II (weiß, fast-twitch): Kraft/Schnelligkeit, anärob, schnell ermüdend.", category: "bio", topic: "Muskelsystem", difficulty: "mittel" },
  { id: "fc-bio-mu7", front: "Isotonische vs isometrische Kontraktion?", back: "Isotonisch: Muskelspannung konstant, Länge ändert sich\n→ Konzentrisch: Muskel verkürzt sich (z. B. Bizeps-Curl hoch)\n→ Exzentrisch: Muskel verlängert sich unter Spannung (z. B. Gewicht ablassen)\nIsometrisch: Muskellänge konstant, Spannung ändert sich\n→ z. B. Gegenstand halten, Wand drücken\nExzentrisch verursacht meisten Muskelkater (Mikrorisse).", category: "bio", topic: "Muskelsystem", difficulty: "mittel" },
  { id: "fc-bio-mu8", front: "Kontraktionsformen der glatten Muskulatur?", back: "Single-Unit: Gap Junctions → synchrone Kontraktion (Darm, Uterus)\nMulti-Unit: Jede Zelle einzeln innerviert (Iris, große Gefäße)\nCalcium-Quelle: Extrazellulär (nicht SR wie Skelettmuskel)\nMechanismus: Ca²⁺-Calmodulin → MLCK → Myosin-Phosphorylierung → Kontraktion\nKein Troponin! Regulation über Myosin, nicht Actin.", category: "bio", topic: "Muskelsystem", difficulty: "schwer" },
  { id: "fc-bio-mu9", front: "Herzmuskulatur: Besonderheiten?", back: "Quergestreift ABER unwillkürlich\nGlanzstreifen (Disci intercalares): Desmosomen (mechanisch) + Gap Junctions (elektrisch)\nFunktionelles Synzytium: AP breitet sich über ganzes Herz aus\nLange Refraktärzeit → kein Tetanus möglich (wichtig für Pumpfunktion!)\nAutonomie: Schrittmacherzellen im Sinusknoten (60–100/min).", category: "bio", topic: "Muskelsystem", difficulty: "schwer" },
  { id: "fc-bio-mu10", front: "Muskelspindel und Golgi-Sehnenorgan?", back: "Muskelspindel (intrafusal):\n→ Misst Muskeldehnung (Länge)\n→ Afferenz: Ia + II Fasern\n→ Monosynaptischer Dehnungsreflex (z. B. Patellarsehnenreflex)\nGolgi-Sehnenorgan:\n→ Misst Muskelspannung (Kraft) an Sehne\n→ Afferenz: Ib Fasern\n→ Hemmung bei Überlastung → schützt vor Muskelriss.", category: "bio", topic: "Muskelsystem", difficulty: "schwer" },
];

// ============================================================
// BIOLOGIE — Atmung & Respiratorisches System
// ============================================================

export const bioAtmung: Flashcard[] = [
  { id: "fc-bio-at1", front: "Aufbau der Lunge: Anatomie?", back: "Rechte Lunge: 3 Lappen (Ober-, Mittel-, Unterlappen)\nLinke Lunge: 2 Lappen (Ober-, Unterlappen) — Herz braucht Platz\nBronchialbaum: Trachea → Hauptbronchien → Lappen- → Segment- → Bronchioli → Alveolen\n~300 Mio Alveolen, Gasaustauschfläche ~100 m²\nSurfactant: Oberflächenspannung↓, verhindert Atelektase.", category: "bio", topic: "Atmung", difficulty: "mittel" },
  { id: "fc-bio-at2", front: "Atemmechanik: Inspiration und Exspiration?", back: "Inspiration (aktiv): Zwerchfell kontrahiert (↓) + externe Interkostalmuskeln → Thorax weitet sich → Unterdruck → Luft strömt ein\nExspiration (passiv in Ruhe): Elastische Rückstellkraft der Lunge\nForcierte Exspiration: Interne Interkostalmuskeln + Bauchmuskeln\nPleuraspalt: Negativer Druck hält Lunge entfaltet\nPneumothorax: Luft im Pleuraspalt → Lungenkollaps.", category: "bio", topic: "Atmung", difficulty: "mittel" },
  { id: "fc-bio-at3", front: "Gasaustausch in der Lunge?", back: "Diffusion nach Partialdruckgefälle (Fick-Gesetz):\nO₂: pAlveolar (~100 mmHg) > pvenös (~40 mmHg) → O₂ ins Blut\nCO₂: pvenös (~46 mmHg) > pAlveolar (~40 mmHg) → CO₂ in Alveole\nDiffusionsstrecke: ~0,5 µm (Alveolarepithel + Basalmembran + Kapillarendothel)\nCO₂ diffundiert 20× schneller als O₂ (höhere Löslichkeit).", category: "bio", topic: "Atmung", difficulty: "mittel" },
  { id: "fc-bio-at4", front: "O₂-Transport im Blut?", back: "98,5% an Hämoglobin gebunden (Oxyhämoglobin)\n1,5% physikalisch gelöst im Plasma\nO₂-Sättigungskurve: Sigmoid (kooperative Bindung)\npO₂ 100 mmHg → ~97–99% Sättigung (Lunge)\npO₂ 40 mmHg → ~75% Sättigung (Gewebe)\np50 = pO₂ bei 50% Sättigung (normal ~26 mmHg).", category: "bio", topic: "Atmung", difficulty: "mittel" },
  { id: "fc-bio-at5", front: "CO₂-Transport im Blut?", back: "3 Formen:\n1. Bicarbonat HCO₃⁻ (~70%): CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺ (Carboanhydrase in Ery)\n2. Carbaminohämoglobin (~23%): CO₂ an Hb-NH₂ gebunden\n3. Physikalisch gelöst (~7%)\nChlorid-Shift: HCO₃⁻ raus aus Ery, Cl⁻ rein (Ladungsausgleich)\nIn der Lunge: Umkehrung aller Reaktionen.", category: "bio", topic: "Atmung", difficulty: "schwer" },
  { id: "fc-bio-at6", front: "Bohr-Effekt: Was ist das?", back: "Rechtsverschiebung der O₂-Sättigungskurve bei:\n→ pH↓ (mehr H⁺), pCO₂↑, Temperatur↑, 2,3-BPG↑\nBedeutung: Im aktiven Gewebe (sauer, warm, viel CO₂) gibt Hb leichter O₂ ab → effizientere O₂-Versorgung\nGegenteil: Linksverschiebung (pH↑, pCO₂↓) → Hb hält O₂ fest\nFetales Hb (HbF): Höhere O₂-Affinität als HbA → Linksverschiebung.", category: "bio", topic: "Atmung", difficulty: "schwer" },
  { id: "fc-bio-at7", front: "Atemregulation: Zentrale Steuerung?", back: "Atemzentrum: Medulla oblongata (rhythmische Grundaktivität)\nChemorezeptoren:\n→ Zentral (Medulla): Reagieren auf pCO₂/pH des Liquors (wichtigster Atemantrieb!)\n→ Peripher (Glomus caroticum/aorticum): Reagieren auf pO₂↓, pCO₂↑, pH↓\nHypoxischer Atemantrieb: Bei COPD-Patienten (chronisch erhöhtes CO₂)\nHering-Breuer-Reflex: Lungendehnung hemmt Inspiration.", category: "bio", topic: "Atmung", difficulty: "schwer" },
  { id: "fc-bio-at8", front: "Lungenvolumina und -kapazitäten?", back: "Atemzugvolumen (AZV): ~500 mL\nInspiratorisches Reservevolumen (IRV): ~3000 mL\nExspiratorisches Reservevolumen (ERV): ~1100 mL\nResidualvolumen (RV): ~1200 mL (nicht ausatembar!)\nVitalkapazität (VC): AZV + IRV + ERV = ~4600 mL\nTotalkapazität (TLC): VC + RV = ~5800 mL\nFunktionelle Residualkapazität (FRC): ERV + RV = ~2300 mL\nMessung: Spirometrie (kein RV!) / Bodyplethysmographie (mit RV).", category: "bio", topic: "Atmung", difficulty: "mittel" },
];

// ============================================================
// BIOLOGIE — Mikrobiologie
// ============================================================

export const bioMikrobiologie: Flashcard[] = [
  { id: "fc-bio-mi1", front: "Bakterienzelle: Aufbau?", back: "Prokaryot: Kein Zellkern, kein ER, keine Mitochondrien\nZellwand: Peptidoglykan (Murein)\nPlasmamembran: Phospholipid-Doppelschicht\nRibosomen: 70S (30S + 50S) → Antibiotikaangriffspunkt!\nWeitere Strukturen: Plasmide (extrachromosomale DNA), Pili, Flagellen, Kapsel\nDNA: Einzelnes zirkuläres Chromosom im Nukleoid.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi2", front: "Gram-Färbung: Gram-positiv vs -negativ?", back: "Gram-positiv (z. B. Staphylococcus, Streptococcus):\n→ Dicke Peptidoglykanschicht → Kristallviolett bleibt → VIOLETT\n→ Teichonsäuren in Zellwand\nGram-negativ (z. B. E. coli, Salmonella):\n→ Dünne Peptidoglykanschicht + äußere Membran (LPS!) → ROSA/ROT\n→ Periplasmatischer Raum\nLPS (Endotoxin): Kann septischen Schock auslösen.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi3", front: "Virusreplikation: Lytischer vs lysogener Zyklus?", back: "Lytischer Zyklus:\n1. Adsorption → 2. Injektion → 3. Replikation → 4. Assembly → 5. Lyse → Freisetzung\nLysogener Zyklus:\nVirus-DNA integriert ins Wirtsgenom (Prophage) → wird bei Zellteilung mitrepliziert\nStress → Induktion → Wechsel zum lytischen Zyklus\nBeispiel: HIV (Retrovirus), λ-Phage.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi4", front: "Antibiotika: Wirkmechanismen?", back: "1. Zellwandsynthese-Hemmung: β-Laktame (Penicillin, Cephalosporine) → PBP-Hemmung\n2. Proteinsynthese-Hemmung:\n   • 30S: Tetracycline, Aminoglykoside\n   • 50S: Makrolide, Chloramphenicol\n3. DNA/RNA-Synthese: Fluorchinolone (Gyrase), Rifampicin (RNA-Polymerase)\n4. Folsäuresynthese: Sulfonamide, Trimethoprim\n5. Zellmembran: Polymyxine.", category: "bio", topic: "Mikrobiologie", difficulty: "schwer" },
  { id: "fc-bio-mi5", front: "Antibiotikaresistenz: Mechanismen?", back: "1. Enzymatischer Abbau: β-Laktamasen zerstören Penicilline\n2. Zielstruktur-Veränderung: Mutiertes PBP (MRSA)\n3. Effluxpumpen: AB wird aktiv herausgepumpt\n4. Verminderte Permeabilität: Porinverlust (Gram-neg.)\nÜbertragung: Plasmide (Konjugation), Transduktion (Phagen), Transformation\nMRSA, VRE, ESBL = klinisch relevante Resistenzen.", category: "bio", topic: "Mikrobiologie", difficulty: "schwer" },
  { id: "fc-bio-mi6", front: "Biofilm: Was ist das?", back: "Mikroorganismen eingebettet in selbstproduzierte extrazelluläre Matrix (EPS)\nEigenschaften:\n→ 10–1000× resistenter gegen Antibiotika als planktonische Bakterien\n→ Schutz vor Immunsystem (Phagozytose↓)\n→ Quorum Sensing: Kommunikation über Signalmoleküle\nKlinische Relevanz: Implantate, Katheter, Endokarditis, Mukoviszidose-Lunge\nBekämpfung: Schwierig → oft Entfernung des Implantats nötig.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi7", front: "Prionen: Infektiöse Proteine?", back: "Keine DNA/RNA! Infektiöses Agens = fehlgefaltetes Protein (PrPSc)\nPrPc (normal, α-Helix) → PrPSc (pathologisch, β-Faltblatt)\nPrPSc konvertiert normales PrPc → Kettenreaktion\nKrankheiten: BSE (Rind), Creutzfeldt-Jakob (Mensch), Scrapie (Schaf), Kuru\nKeine Immunantwort, nicht sterilisierbar mit normalen Methoden\nNachweis: Postmortal, spongiforme Hirnveränderungen.", category: "bio", topic: "Mikrobiologie", difficulty: "schwer" },
  { id: "fc-bio-mi8", front: "Viren: Aufbau und Klassifikation?", back: "Obligat intrazelluläre Parasiten (kein eigener Stoffwechsel!)\nAufbau: Nukleinsäure (DNA ODER RNA) + Kapsid (Proteinhülle) ± Lipidmembran (Envelope)\nKlassifikation nach Baltimore:\n• dsDNA (Herpes, Adeno) • ssDNA (Parvo)\n• dsRNA (Rota) • (+)ssRNA (Corona, HIV) • (−)ssRNA (Inflünza, Ebola)\n• Retroviren: RNA → DNA (Reverse Transkriptase)", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi9", front: "Bakterielle Genetik: Horizontaler Gentransfer?", back: "1. Transformation: Aufnahme freier DNA aus Umgebung\n2. Transduktion: DNA-Übertragung durch Bakteriophagen\n3. Konjugation: Direkter Transfer via Pilus (F-Plasmid)\nBedeutung: Schnelle Verbreitung von Resistenzgenen!\nPlasmide: Extrachromosomale DNA, selbstreplizierend\n→ Können Resistenzgene, Virulenzfaktoren, Toxingene tragen.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
  { id: "fc-bio-mi10", front: "Koch'sche Postulate: 4 Kriterien?", back: "1. Erreger muss in jedem Krankheitsfall nachweisbar sein\n2. Erreger muss isoliert und in Reinkultur gezüchtet werden können\n3. Reinkultur muss bei gesundem Organismus die gleiche Krankheit auslösen\n4. Erreger muss aus dem experimentell infizierten Organismus reisoliert werden\nEinschränkungen: Nicht bei obligat intrazellulären Erregern, Viren, Prionen anwendbar.", category: "bio", topic: "Mikrobiologie", difficulty: "mittel" },
];

// ============================================================
// BIOLOGIE — Pflanzenbiologie
// ============================================================

export const bioPflanzen: Flashcard[] = [
  { id: "fc-bio-pf1", front: "Photosynthese: Überblick und Bilanz?", back: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (Lichtenergie nötig)\nOrt: Chloroplasten\nLichtreaktion: Thylakoidmembran → ATP + NADPH + O₂\nDunkelreaktion (Calvin-Zyklus): Stroma → CO₂-Fixierung → Glucose\nChlorophyll a/b: Absorbiert Rot + Blau, reflektiert Grün.", category: "bio", topic: "Pflanzenbiologie", difficulty: "leicht" },
  { id: "fc-bio-pf2", front: "Lichtreaktion: Photosystem I und II?", back: "PS II (P680): H₂O → 2H⁺ + 2e⁻ + ½O₂ (Photolyse des Wassers → O₂-Quelle!)\nElektronentransportkette → Protonengradient → ATP (Photophosphorylierung)\nPS I (P700): Elektronen → Ferredoxin → NADP⁺-Reduktase → NADPH\nZ-Schema: PS II → Plastochinon → Cyt b6f → Plastocyanin → PS I → NADPH\nZyklische Photophosphorylierung: Nur PS I → nur ATP (kein NADPH).", category: "bio", topic: "Pflanzenbiologie", difficulty: "schwer" },
  { id: "fc-bio-pf3", front: "Calvin-Zyklus (Dunkelreaktion)?", back: "Ort: Stroma der Chloroplasten\n3 Phasen:\n1. CO₂-Fixierung: RuBisCO fixiert CO₂ an Ribulose-1,5-bisphosphat → 2× 3-Phosphoglycerat (3-PG)\n2. Reduktion: 3-PG → G3P (benötigt ATP + NADPH)\n3. Regeneration: G3P → Ribulose-1,5-bisphosphat (benötigt ATP)\nBilanz: 3 CO₂ + 9 ATP + 6 NADPH → 1 G3P\n6 Umläufe → 1 Glucose.", category: "bio", topic: "Pflanzenbiologie", difficulty: "schwer" },
  { id: "fc-bio-pf4", front: "C3-, C4- und CAM-Pflanzen: Unterschiede?", back: "C3-Pflanzen (Weizen, Reis): CO₂-Fixierung durch RuBisCO → 3-PG (3C)\n→ Problem: Photorespiration bei Hitze (RuBisCO bindet O₂)\nC4-Pflanzen (Mais, Zuckerrohr): Vorfixierung durch PEP-Carboxylase → Oxalacetat (4C)\n→ Räumliche Trennung (Mesophyll → Bündelscheidenzellen)\nCAM-Pflanzen (Kakteen): Zeitliche Trennung → CO₂-Fixierung nachts (Stomata zu am Tag)\n→ Spart Wasser in ariden Gebieten.", category: "bio", topic: "Pflanzenbiologie", difficulty: "schwer" },
  { id: "fc-bio-pf5", front: "Pflanzenhormone: Die 5 wichtigsten?", back: "1. Auxin (IAA): Streckungswachstum, Phototropismus, Apikaldominanz\n2. Gibberelline: Sprossstreckung, Samenkeimung, Blüteninduktion\n3. Cytokinine: Zellteilung, verzögern Seneszenz\n4. Abscisinsäure (ABA): Stresshormon, Stomata-Schließung, Dormanz\n5. Ethylen (Ethen): Fruchtreifung, Blattabwurf (Abszission), Seneszenz\nMerke: Auxin/Gibberellin/Cytokinin = Wachstum, ABA/Ethylen = Hemmung/Reifung.", category: "bio", topic: "Pflanzenbiologie", difficulty: "mittel" },
  { id: "fc-bio-pf6", front: "Xylem vs Phlöm: Transport in Pflanzen?", back: "Xylem (Holzteil): Wasser + Mineralstoffe aufwärts\n→ Tote Zellen (Tracheiden, Tracheen)\n→ Antrieb: Transpirationssog (Kohäsions-Spannungs-Theorie) + Wurzeldruck\nPhlöm (Siebteil): Assimilate (Saccharose) von Source → Sink\n→ Lebende Zellen (Siebröhren + Geleitzellen)\n→ Antrieb: Druckströmungsmodell (Münch) — osmotischer Druckgradient.", category: "bio", topic: "Pflanzenbiologie", difficulty: "mittel" },
  { id: "fc-bio-pf7", front: "Stomata: Regulation der Spaltöffnungen?", back: "Schließzellen: Bohnenförmig, regulieren Gasaustausch + Transpiration\nÖffnung: K⁺-Aufnahme → Osmose → Turgordruck↑ → Porus öffnet\nSchließung: K⁺-Abgabe → Turgor↓ → Porus schließt\nRegulation: Licht↑ → offen, CO₂↓ → offen, ABA (Trockenstress) → geschlossen\nDilemma: Offen = CO₂ rein, aber H₂O raus (Transpiration).", category: "bio", topic: "Pflanzenbiologie", difficulty: "mittel" },
  { id: "fc-bio-pf8", front: "Photorespiration: Problem der C3-Pflanzen?", back: "RuBisCO bindet bei hoher Temperatur/Licht O₂ statt CO₂\nRuBP + O₂ → 3-PG + 2-Phosphoglycolat (toxisch!)\n→ Aufwändiger Recycling-Weg über Peroxisomen + Mitochondrien\n→ Energieverlust ohne Kohlenhydratgewinn\nVerlust: Bis 30% der fixierten Kohlenstoffmenge\nC4/CAM-Pflanzen: Vermeidungsstrategien gegen Photorespiration.", category: "bio", topic: "Pflanzenbiologie", difficulty: "schwer" },
];

// ============================================================
// BIOLOGIE — Stoffwechsel (erweitert)
// ============================================================

export const bioStoffwechsel: Flashcard[] = [
  { id: "fc-bio-sw1", front: "β-Oxidation: Fettsäureabbau?", back: "Ort: Mitochondrien-Matrix (Transport via Carnitin-Shuttle)\n4 Schritte pro Zyklus: Oxidation → Hydratisierung → Oxidation → Thiolyse\nPro Zyklus: 1 Acetyl-CoA + 1 FADH₂ + 1 NADH\nC16-Palmitat: 7 Zyklen → 8 Acetyl-CoA + 7 FADH₂ + 7 NADH\nATP-Ausbeute Palmitat: 106 ATP (netto, nach Aktivierung)\nRegulation: Malonyl-CoA hemmt CPT-1 (bei Lipogenese).", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw2", front: "Gluconeogenese: Glucose-Neusynthese?", back: "Ort: Hauptsächlich Leber (90%), etwas Niere\nSubstrate: Laktat, Glycerin, glucogene Aminosäuren (NICHT Fettsäuren!)\n3 irreversible Glykolyse-Schritte werden umgangen:\n1. Pyruvatcarboxylase + PEPCK (statt Pyruvatkinase)\n2. Fructose-1,6-bisphosphatase (statt PFK-1)\n3. Glucose-6-phosphatase (statt Hexokinase)\nKosten: 6 ATP + 2 GTP pro Glucose.", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw3", front: "Ketogenese: Ketonkörperbildung?", back: "Ort: Leber (Mitochondrien)\nSubstrat: Acetyl-CoA (aus β-Oxidation bei Kohlenhydratmangel)\nKetonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton\nBedeutung: Alternatives Substrat für Gehirn bei Fasten/Hunger\nDiabetische Ketoazidose: Insulinmangel → unkontrollierte Lipolyse → Ketonkörper↑↑↑ → metabolische Azidose\nAceton: Fruchtiger Atemgeruch.", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw4", front: "Aminosäureabbau: Transaminierung und Desaminierung?", back: "Transaminierung: AS + α-Ketoglutarat → Keto-Säure + Glutamat\n→ Enzyme: Aminotransferasen (ALT, AST) — Coenzym: Pyridoxalphosphat (Vit. B6)\nOxidative Desaminierung: Glutamat → α-Ketoglutarat + NH₄⁺\n→ Enzym: Glutamatdehydrogenase\nNH₄⁺ ist toxisch → muss über Harnstoffzyklus entgiftet werden!\nALT/AST erhöht → Leberschäden (Diagnostik-Marker).", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw5", front: "Harnstoffzyklus: Ammoniak-Entgiftung?", back: "Ort: Leber (Mitochondrien + Cytoplasma)\n2 NH₃ + CO₂ + 3 ATP → Harnstoff + H₂O\nSchritte: Carbamoylphosphat → Citrullin → Argininosuccinat → Arginin → Harnstoff + Ornithin\nSchlüsselenzym: Carbamoylphosphat-Synthetase I (Mitochondrien)\nHarnstoff: Nicht toxisch, wasserlöslich → renale Ausscheidung\nLeberversagen → Hyperammonämie → hepatische Enzephalopathie.", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw6", front: "Glykogenstoffwechsel: Synthese vs Abbau?", back: "Glykogensynthese (Glykogenese):\n→ Glucose → G6P → G1P → UDP-Glucose → Glykogen (Glykogensynthase)\n→ Stimulation: Insulin\nGlykogenabbau (Glykogenolyse):\n→ Glykogen → G1P → G6P → Glucose (Glykogenphosphorylase)\n→ Stimulation: Glucagon (Leber), Adrenalin (Muskel)\nLeber: Glykogen → Blut-Glucose (Glucose-6-phosphatase)\nMuskel: Glykogen → Eigenverbrauch (keine G6Pase!).", category: "bio", topic: "Stoffwechsel", difficulty: "mittel" },
  { id: "fc-bio-sw7", front: "Pentosephosphatweg: Funktion?", back: "Ort: Cytoplasma\nOxidativer Teil: G6P → Ribulose-5-P + 2 NADPH + CO₂\nNicht-oxidativer Teil: Umwandlung von Zuckern (Ribose-5-P für Nukleotide)\nNADPH: Essentiell für Fettsäuresynthese + Glutathion-Reduktion\nG6PDH-Mangel: Häufigster Enzymdefekt weltweit → hämolytische Anämie bei oxidativem Stress\nRibose-5-P: Für DNA/RNA-Synthese.", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw8", front: "Cori-Zyklus: Laktat-Recycling?", back: "Muskel (anärob): Glucose → Pyruvat → Laktat (Lactatdehydrogenase)\nLaktat → Blut → Leber\nLeber: Laktat → Pyruvat → Glucose (Gluconeogenese)\nGlucose → Blut → Muskel\nEnergetisch 'teuer': Muskel gewinnt 2 ATP, Leber verbraucht 6 ATP\nBedeutung: Ermöglicht anärobe Muskelarbeit ohne Laktat-Akkumulation.", category: "bio", topic: "Stoffwechsel", difficulty: "mittel" },
  { id: "fc-bio-sw9", front: "Fettsäuresynthese (Lipogenese)?", back: "Ort: Cytoplasma (hauptsächlich Leber, Fettgewebe)\nAusgangssubstrat: Acetyl-CoA → Malonyl-CoA (ACC = Acetyl-CoA-Carboxylase)\nFettsäuresynthase (FAS): Multienzymkomplex\nPro Zyklus: +2C an wachsende Kette (benötigt NADPH aus Pentosephosphatweg)\nEndprodukt: Palmitat (C16)\nRegulation: Insulin↑ → ACC aktiv, Glucagon↓ → ACC inaktiv.", category: "bio", topic: "Stoffwechsel", difficulty: "schwer" },
  { id: "fc-bio-sw10", front: "Stoffwechsellage: Resorptive vs postresorptive Phase?", back: "Resorptive Phase (nach Essen, Insulin↑):\n→ Glykogensynthese↑, Lipogenese↑, Proteinbiosynthese↑\n→ Glucose als Hauptenergiequelle\nPostresorptive Phase (nüchtern, Glucagon↑):\n→ Glykogenolyse, Gluconeogenese, Lipolyse, β-Oxidation\n→ Fettsäuren + Ketonkörper als Energiequelle\nLängeres Fasten: Ketonkörper für Gehirn (normalerweise nur Glucose!).", category: "bio", topic: "Stoffwechsel", difficulty: "mittel" },
];

// ============================================================
// BIOLOGIE — Sinnesorgane
// ============================================================

export const bioSinnesorgane: Flashcard[] = [
  { id: "fc-bio-so1", front: "Auge: Aufbau und Brechungsmedien?", back: "Äußere Augenhaut: Sklera (weiß) + Kornea (Hornhaut, stärkste Brechung!)\nMittlere Augenhaut: Choroidea (Aderhaut), Ziliarkörper, Iris\nInnere Augenhaut: Retina (Netzhaut) mit Photorezeptoren\nBrechungsmedien: Kornea (~43 dpt) → Kammerwasser → Linse (~19 dpt, variabel) → Glaskörper\nAkkommodation: Ziliarmuskel kontrahiert → Linse wird runder → Nahsehen.", category: "bio", topic: "Sinnesorgane", difficulty: "mittel" },
  { id: "fc-bio-so2", front: "Photorezeptoren: Stäbchen vs Zapfen?", back: "Stäbchen (~120 Mio): Skotopisches Sehen (Dämmerung), sehr lichtempfindlich, kein Farbsehen\n→ Rhodopsin (Retinal + Opsin)\nZapfen (~6 Mio): Photopisches Sehen (Tag), Farbsehen\n→ 3 Typen: S (blau, 420nm), M (grün, 534nm), L (rot, 564nm)\nFovea centralis: Nur Zapfen → schärfstes Sehen\nBlinder Fleck: Austritt Sehnerv → keine Rezeptoren.", category: "bio", topic: "Sinnesorgane", difficulty: "mittel" },
  { id: "fc-bio-so3", front: "Phototransduktion: Signalweg im Stäbchen?", back: "Dunkel: cGMP hoch → Na⁺-Kanäle offen → Dunkelstrom → Glutamat-Freisetzung\nLicht: Photon → Retinal-Isomerisierung (11-cis → all-trans) → Rhodopsin → Transducin (G-Protein) → Phosphodiesterase → cGMP↓ → Na⁺-Kanäle schließen → Hyperpolarisation → Glutamat↓\nBesonderheit: Licht = Hemmung (Hyperpolarisation), nicht Depolarisation!", category: "bio", topic: "Sinnesorgane", difficulty: "schwer" },
  { id: "fc-bio-so4", front: "Ohr: Schallleitung und Hörvorgang?", back: "Außenohr: Ohrmuschel → äußerer Gehörgang → Trommelfell\nMittelohr: Gehörknöchelchen (Hammer → Amboss → Steigbügel) → Impedanzanpassung (Luft → Flüssigkeit)\nInnenohr: Cochlea (Schnecke) → Basilarmembran → Corti-Organ\nTonotopie: Basis = hohe Frequenzen, Apex = tiefe Frequenzen\nHaarzellen: Stereozilien → mechanische Auslenkung → K⁺-Einstrom → Depolarisation → N. vestibulocochlearis.", category: "bio", topic: "Sinnesorgane", difficulty: "schwer" },
  { id: "fc-bio-so5", front: "Geschmack und Geruch: Chemische Sinne?", back: "Geschmack (gustatorisch): 5 Qualitäten — süß, sauer, salzig, bitter, umami\n→ Geschmacksknospen auf Papillen der Zunge\n→ Süß/Umami/Bitter: G-Protein-gekoppelte Rezeptoren\n→ Sauer/Salzig: Ionenkanäle\nGeruch (olfaktorisch): ~400 Rezeptortypen (GPCRs)\n→ Riechepithel in Nasenhöhle\n→ Jedes Neuron: 1 Rezeptortyp (kombinatorischer Code)\n→ Direkte Verbindung zum limbischen System → Emotionen!", category: "bio", topic: "Sinnesorgane", difficulty: "mittel" },
  { id: "fc-bio-so6", front: "Gleichgewichtsorgan: Vestibularapparat?", back: "3 Bogengänge: Drehbeschleunigung (Rotationsbewegungen)\n→ Endolymphe bewegt Cupula → Haarzellen → Signale\nVorhoforgane: Linearbeschleunigung + Schwerkraft\n→ Utriculus (horizontal) + Sacculus (vertikal)\n→ Otolithenmembran mit Calciumcarbonat-Kristallen\nVestibulookulärer Reflex (VOR): Stabilisiert Blick bei Kopfbewegung\nSchwindel: Fehlerhafte vestibuläre Verarbeitung.", category: "bio", topic: "Sinnesorgane", difficulty: "mittel" },
  { id: "fc-bio-so7", front: "Propriozeption: Tiefensensibilität?", back: "Propriozeptoren informieren über Körperstellung und Bewegung:\n1. Muskelspindeln: Muskeldehnung (Ia, II Fasern)\n2. Golgi-Sehnenorgane: Muskelspannung (Ib Fasern)\n3. Gelenkrezeptoren: Gelenkstellung\n4. Ruffini-Körperchen: Hautdehnung\nLeitung über Hinterstrangbahn → Thalamus → somatosensorischer Kortex\nWichtig für: Koordination, Gleichgewicht, Reflexe\nStörung: Ataxie (z. B. bei Vitamin-B12-Mangel).", category: "bio", topic: "Sinnesorgane", difficulty: "mittel" },
  { id: "fc-bio-so8", front: "Signaltransduktion: Vom Reiz zum Aktionspotential?", back: "Adäquater Reiz → Rezeptorpotential (graduiert, lokal)\n→ Überschreitung der Schwelle → Aktionspotential (Alles-oder-Nichts)\nKodierung der Reizstärke: Frequenzkodierung (mehr AP = stärkerer Reiz)\nAdaptation: Schnell adaptierende Rezeptoren (Berührung) vs langsam adaptierende (Druck)\nRezeptive Felder: Laterale Hemmung → verbessert Kontrastwahrnehmung\nWeber-Fechner-Gesetz: Empfindung ~ log(Reizstärke).", category: "bio", topic: "Sinnesorgane", difficulty: "schwer" },
];

// ============================================================
// CHEMIE — Erweiterte Karteikarten
// ============================================================

export const chemieStoechiometrie: Flashcard[] = [
  { id: "fc-ch-st1", front: "Mol: Definition?", back: "1 Mol = 6,022 × 10²³ Teilchen (Avogadro-Konstante NA)\nn = m/M (Stoffmenge = Masse / Molare Masse)\nBsp: 1 Mol H₂O = 18 g, enthält 6,022 × 10²³ Moleküle.", category: "chemie", topic: "Stöchiometrie", difficulty: "leicht" },
  { id: "fc-ch-st2", front: "Konzentration berechnen?", back: "c = n/V (Stoffmengenkonzentration, mol/L)\nMassenkonzentration: β = m/V (g/L)\nMassenprozent: w = m(Stoff)/m(Lösung) × 100%\nVerdünnung: c₁·V₁ = c₂·V₂", category: "chemie", topic: "Stöchiometrie", difficulty: "leicht" },
  { id: "fc-ch-st3", front: "Reaktionsgleichung ausgleichen: Regeln?", back: "1. Formel der Verbindungen NICHT ändern\n2. Nur Köffizienten anpassen\n3. Atombilanz: Links = Rechts für jedes Element\n4. Ladungsbilanz: Gesamtladung links = rechts\nBsp: 2 H₂ + O₂ → 2 H₂O", category: "chemie", topic: "Stöchiometrie", difficulty: "leicht" },
  { id: "fc-ch-st4", front: "Ideales Gasgesetz?", back: "p·V = n·R·T\np = Druck (Pa), V = Volumen (m³)\nn = Stoffmenge (mol), T = Temperatur (K)\nR = 8,314 J/(mol·K)\nNormalbedingungen: 0°C, 1 atm → 1 mol Gas = 22,4 L.", category: "chemie", topic: "Stöchiometrie", difficulty: "mittel" },
  { id: "fc-ch-st5", front: "Limitierender Reaktant?", back: "Der Reaktant, der zürst verbraucht wird → bestimmt max. Produktmenge.\nBerechnung:\n1. Stoffmengen aller Reaktanten berechnen\n2. Stöchiometrisches Verhältnis vergleichen\n3. Kleineres Verhältnis → limitierend.", category: "chemie", topic: "Stöchiometrie", difficulty: "mittel" },
];

export const chemieOrganik: Flashcard[] = [
  { id: "fc-ch-or1", front: "Alkane, Alkene, Alkine: Unterschied?", back: "Alkane: C-C Einfachbindung (CₙH₂ₙ₊₂), gesättigt\nAlkene: C=C Doppelbindung (CₙH₂ₙ), ungesättigt\nAlkine: C≡C Dreifachbindung (CₙH₂ₙ₋₂)\nReaktivität: Alkin > Alken > Alkan.", category: "chemie", topic: "Organik", difficulty: "leicht" },
  { id: "fc-ch-or2", front: "Funktionelle Gruppen: Die 6 wichtigsten?", back: "-OH: Hydroxyl (Alkohole)\n-CHO: Aldehyd\n-CO-: Keton\n-COOH: Carboxyl (Carbonsäuren)\n-NH₂: Amino\n-CO-NH-: Amid (Peptidbindung)\nMerke: 'Alkohole Aldehyde Ketone Säuren Amine Amide'", category: "chemie", topic: "Organik", difficulty: "leicht" },
  { id: "fc-ch-or3", front: "Isomerie-Typen?", back: "Strukturisomerie: Gleiche Summenformel, verschiedene Verknüpfung\nStereoisomerie:\n- Enantiomere: Spiegelbild (R/S, D/L)\n- Diastereomere: Nicht-Spiegelbild (cis/trans, Z/E)\nChirales Zentrum: C-Atom mit 4 verschiedenen Substitünten.", category: "chemie", topic: "Organik", difficulty: "mittel" },
  { id: "fc-ch-or4", front: "Aminosäuren: Grundstruktur?", back: "H₂N-CH(R)-COOH\nα-C mit: Aminogruppe, Carboxylgruppe, H, Seitenkette R\n20 proteinogene AS\nBeim physiologischen pH (7,4): Zwitterion (NH₃⁺ und COO⁻)\nEssenzielle AS: Können nicht selbst synthetisiert werden (8 beim Erwachsenen).", category: "chemie", topic: "Organik", difficulty: "mittel" },
  { id: "fc-ch-or5", front: "Peptidbindung: Eigenschaften?", back: "Kondensationsreaktion: -COOH + H₂N- → -CO-NH- + H₂O\nPlanar (partieller Doppelbindungscharakter durch Mesomerie)\nTrans-Konfiguration bevorzugt\nProteinstruktur: Primär (Sequenz) → Sekundär (α-Helix, β-Faltblatt) → Tertiär (3D) → Quartär (Untereinheiten).", category: "chemie", topic: "Organik", difficulty: "mittel" },
  { id: "fc-ch-or6", front: "Kohlenhydrate: Mono-, Di-, Polysaccharide?", back: "Monosaccharide: Glucose, Fructose, Galactose (C₆H₁₂O₆)\nDisaccharide: Saccharose (Gluc+Fruc), Lactose (Gal+Gluc), Maltose (Gluc+Gluc)\nPolysaccharide: Stärke, Glykogen (α-1,4), Cellulose (β-1,4)\nGlykosidische Bindung: Kondensation zwischen OH-Gruppen.", category: "chemie", topic: "Organik", difficulty: "mittel" },
  { id: "fc-ch-or7", front: "Lipide: Typen und Funktionen?", back: "Triglyceride: Glycerin + 3 Fettsäuren → Energiespeicher\nPhospholipide: Amphipathisch → Zellmembran-Aufbau\nSteroide: Cholesterol → Hormone (Testosteron, Östrogen, Cortisol)\nGesättigte FS: Keine Doppelbindung, fest (Butter)\nUngesättigte FS: Doppelbindung(en), flüssig (Öl).", category: "chemie", topic: "Organik", difficulty: "mittel" },
];

export const chemieBiochemie: Flashcard[] = [
  { id: "fc-ch-bc1", front: "Glykolyse: Zusammenfassung?", back: "Glucose → 2 Pyruvat\nOrt: Cytoplasma\nErtrag: 2 ATP + 2 NADH\nSchlüsselenzyme: Hexokinase, PFK-1 (limitierend!), Pyruvatkinase\nAnärob: Pyruvat → Lactat (Milchsäuregärung).", category: "chemie", topic: "Biochemie", difficulty: "mittel" },
  { id: "fc-ch-bc2", front: "Citratzyklus: Zusammenfassung?", back: "Ort: Mitochondrien-Matrix\nAcetyl-CoA → 2 CO₂\nErtrag pro Umlauf: 3 NADH + 1 FADH₂ + 1 GTP\nSchlüsselenzym: Isocitrat-Dehydrogenase (limitierend)\nVerbindet Kohlenhydrat-, Fett- und Aminosäurestoffwechsel.", category: "chemie", topic: "Biochemie", difficulty: "schwer" },
  { id: "fc-ch-bc3", front: "Atmungskette: Komplexe I-V?", back: "I: NADH-Dehydrogenase (NADH→NAD⁺, H⁺-Pump)\nII: Succinat-Dehydrogenase (FADH₂→FAD)\nIII: Cytochrom-bc₁ (H⁺-Pump)\nIV: Cytochrom-c-Oxidase (O₂→H₂O, H⁺-Pump)\nV: ATP-Synthase (Protonengradient→ATP)\nOrt: Innere Mitochondrienmembran.", category: "chemie", topic: "Biochemie", difficulty: "schwer" },
  { id: "fc-ch-bc4", front: "Enzyme: Michälis-Menten-Kinetik?", back: "v = Vmax·[S] / (Km+[S])\nKm = Substratkonzentration bei halbmaximaler Geschwindigkeit\nNiedriger Km = hohe Affinität\nVmax = maximale Reaktionsgeschwindigkeit\nLineweaver-Burk: 1/v = Km/(Vmax·[S]) + 1/Vmax.", category: "chemie", topic: "Biochemie", difficulty: "schwer" },
  { id: "fc-ch-bc5", front: "Enzymhemmung: Kompetitiv vs allosterisch?", back: "Kompetitiv: Hemmer bindet im aktiven Zentrum, Km↑, Vmax gleich\nNichtkompetitiv: Hemmer bindet anderswo, Km gleich, Vmax↓\nAllosterisch: Hemmer/Aktivator bindet an regulatorische Stelle → Konformationsänderung\nIrreversibel: Kovalente Bindung (z. B. Aspirin hemmt COX).", category: "chemie", topic: "Biochemie", difficulty: "schwer" },
];

export const chemieRedox: Flashcard[] = [
  { id: "fc-ch-rx1", front: "Oxidationszahlen: Regeln?", back: "Elemente: 0\nH: +I (außer in Metallhydriden: -I)\nO: -II (außer in Peroxiden: -I)\nSumme in Verbindung: 0\nSumme in Ion: Ladung des Ions\nBeispiel: H₂SO₄ → H:+I, O:-II, S:+VI", category: "chemie", topic: "Redox", difficulty: "leicht" },
  { id: "fc-ch-rx2", front: "Elektrochemische Spannungsreihe?", back: "Je negativer E°, desto stärkeres Reduktionsmittel:\nLi (-3,04V) < Na (-2,71V) < Zn (-0,76V) < Fe (-0,44V) < H₂ (0V) < Cu (+0,34V) < Ag (+0,80V) < Au (+1,50V)\nEdle Metalle: Positives E° → schwer zu oxidieren.", category: "chemie", topic: "Redox", difficulty: "mittel" },
  { id: "fc-ch-rx3", front: "Galvanische Zelle: Wie funktioniert sie?", back: "Zwei Halbzellen mit verschiedenen Metallen in Elektrolytlösung.\nAnode (Oxidation): Unedleres Metall gibt e⁻ ab (Minus-Pol)\nKathode (Reduktion): Edleres Metall nimmt e⁻ auf (Plus-Pol)\nSalzbrücke: Ionenausgleich\nSpannung = E°(Kathode) - E°(Anode).", category: "chemie", topic: "Redox", difficulty: "mittel" },
  { id: "fc-ch-rx4", front: "Elektrolyse vs Galvanische Zelle?", back: "Galvanische Zelle: Spontane Redoxreaktion → erzeugt Strom (ΔG < 0)\nElektrolyse: Erzwungene Redoxreaktion → verbraucht Strom (ΔG > 0)\nBei Elektrolyse: Anode = Plus-Pol (umgekehrt!)\nAnwendungen: Aluminiumgewinnung, Galvanisierung, Wasserstoffproduktion.", category: "chemie", topic: "Redox", difficulty: "mittel" },
];

// ============================================================
// PHYSIK — Erweiterte Karteikarten
// ============================================================

export const physikKinematik: Flashcard[] = [
  { id: "fc-ph-k1", front: "Gleichförmige Bewegung: Formeln?", back: "v = s/t = konstant\ns = v · t\na = 0\nIm s-t-Diagramm: Gerade\nIm v-t-Diagramm: Horizontale Linie.", category: "physik", topic: "Kinematik", difficulty: "leicht" },
  { id: "fc-ph-k2", front: "Gleichmäßig beschleunigte Bewegung?", back: "a = Δv/Δt = konstant\nv(t) = v₀ + a·t\ns(t) = v₀·t + ½·a·t²\nv² = v₀² + 2·a·s\nIm v-t-Diagramm: Gerade mit Steigung a\nFläche unter v-t-Kurve = zurückgelegter Weg.", category: "physik", topic: "Kinematik", difficulty: "leicht" },
  { id: "fc-ph-k3", front: "Schiefer Wurf: Zerlegung?", back: "Horizontal: v_x = v₀·cos(α), s_x = v₀·cos(α)·t\nVertikal: v_y = v₀·sin(α) - g·t, s_y = v₀·sin(α)·t - ½g·t²\nMax. Weite: α = 45°\nMax. Höhe: h = v₀²·sin²(α) / (2g)\nWurfweite: w = v₀²·sin(2α) / g.", category: "physik", topic: "Kinematik", difficulty: "schwer" },
  { id: "fc-ph-k4", front: "Kreisbewegung: Zentripetalbeschleunigung?", back: "a_z = v²/r = ω²·r\nF_z = m·v²/r (Zentripetalkraft)\nω = 2π/T = 2π·f (Winkelgeschwindigkeit)\nv = ω·r (Bahngeschwindigkeit)\nDie Zentripetalkraft zeigt immer zum Kreismittelpunkt.", category: "physik", topic: "Kinematik", difficulty: "mittel" },
];

export const physikWaerme: Flashcard[] = [
  { id: "fc-ph-w1", front: "Temperaturskalen: Umrechnung?", back: "Celsius ↔ Kelvin: T(K) = T(°C) + 273,15\nAbsoluter Nullpunkt: 0 K = -273,15°C\nBei 0 K: Keine thermische Bewegung mehr.\nCelsius ↔ Fahrenheit: T(°F) = T(°C)·9/5 + 32", category: "physik", topic: "Wärmelehre", difficulty: "leicht" },
  { id: "fc-ph-w2", front: "Wärmekapazität: Q = m·c·ΔT", back: "Q = Wärmemenge (Joule)\nm = Masse (kg)\nc = spezifische Wärmekapazität (J/(kg·K))\nΔT = Temperaturdifferenz (K)\nc(Wasser) = 4186 J/(kg·K) — höchste aller gewöhnlichen Flüssigkeiten!\nMischungsregel: m₁·c₁·ΔT₁ = m₂·c₂·ΔT₂", category: "physik", topic: "Wärmelehre", difficulty: "leicht" },
  { id: "fc-ph-w3", front: "Hauptsätze der Thermodynamik?", back: "0. Thermisches Gleichgewicht ist transitiv\n1. Energieerhaltung: ΔU = Q - W\n2. Entropie nimmt in abgeschlossenen Systemen zu (S ≥ 0)\n3. Absoluter Nullpunkt ist nicht erreichbar\nEntropie = Maß für Unordnung.", category: "physik", topic: "Wärmelehre", difficulty: "mittel" },
  { id: "fc-ph-w4", front: "Wärmeübertragung: 3 Arten?", back: "Konduktion: Wärmeleitung durch Material (Stab, Wand)\nKonvektion: Wärmetransport durch Strömung (Heizung, Wind)\nStrahlung: Elektromagnetische Wellen (Sonne, Infrarot)\nVakuum: Nur Strahlung möglich!", category: "physik", topic: "Wärmelehre", difficulty: "leicht" },
  { id: "fc-ph-w5", front: "Phasenübergänge und latente Wärme?", back: "Schmelzen/Erstarren: Q = m·L_f (Schmelzwärme)\nVerdampfen/Kondensieren: Q = m·L_v (Verdampfungswärme)\nWährend Phasenübergang: Temperatur bleibt KONSTANT!\nL_v(Wasser) = 2260 kJ/kg — erklärt Kühleffekt von Schweiß.", category: "physik", topic: "Wärmelehre", difficulty: "mittel" },
];

export const physikWellen: Flashcard[] = [
  { id: "fc-ph-wl1", front: "Wellengrößen: Zusammenhang?", back: "v = f · λ (Geschwindigkeit = Frequenz × Wellenlänge)\nT = 1/f (Periode = 1/Frequenz)\nf in Hz, λ in m, v in m/s\nSchall in Luft: ~343 m/s\nLicht im Vakuum: c = 3×10⁸ m/s.", category: "physik", topic: "Wellen", difficulty: "leicht" },
  { id: "fc-ph-wl2", front: "Transversal- vs Longitudinalwelle?", back: "Transversal: Schwingung ⊥ Ausbreitung (Seil, Licht, EM-Wellen)\nLongitudinal: Schwingung ‖ Ausbreitung (Schall, Druckwellen)\nSchall: Longitudinalwelle in Luft\nKann sich NICHT im Vakuum ausbreiten.", category: "physik", topic: "Wellen", difficulty: "leicht" },
  { id: "fc-ph-wl3", front: "Doppler-Effekt?", back: "Annäherung: Frequenz HÖHER (Wellenlänge kürzer)\nEntfernung: Frequenz TIEFER (Wellenlänge länger)\nFormel: f' = f · (v ± v_E) / (v ∓ v_S)\nAnwendung: Ultraschall-Doppler (Blutfluss), Rotverschiebung (Astronomie).", category: "physik", topic: "Wellen", difficulty: "mittel" },
  { id: "fc-ph-wl4", front: "Elektromagnetisches Spektrum?", back: "Radiowellen > Mikrowellen > Infrarot > sichtbares Licht > UV > Röntgen > Gammastrahlung\nEnergie: E = h·f (steigt mit Frequenz)\nSichtbar: 380 nm (violett) — 780 nm (rot)\nAlle EM-Wellen: c = 3×10⁸ m/s im Vakuum.", category: "physik", topic: "Wellen", difficulty: "mittel" },
  { id: "fc-ph-wl5", front: "Brechungsgesetz (Snellius)?", back: "n₁ · sin(α₁) = n₂ · sin(α₂)\nn = c/v (Brechungsindex)\nn(Wasser) ≈ 1,33, n(Glas) ≈ 1,5\nVom dichten ins dünne Medium: Brechung vom Lot WEG\nTotalreflexion: Wenn α > Grenzwinkel (nur dünn→dicht).", category: "physik", topic: "Wellen", difficulty: "mittel" },
];

export const physikAtomphysik: Flashcard[] = [
  { id: "fc-ph-ap1", front: "Radioaktiver Zerfall: α, β, γ?", back: "α-Zerfall: ⁴₂He-Kern abgegeben (Z-2, A-4)\nβ⁻-Zerfall: Neutron→Proton + Elektron + Antineutrino (Z+1)\nγ-Zerfall: Nur Photon (keine Änderung von Z oder A)\nDurchdringungsfähigkeit: α < β < γ\nIonisierungsvermögen: α > β > γ.", category: "physik", topic: "Atomphysik", difficulty: "mittel" },
  { id: "fc-ph-ap2", front: "Halbwertszeit: Formel?", back: "N(t) = N₀ · (½)^(t/t½)\nNach 1 HWZ: 50% übrig\nNach 2 HWZ: 25% übrig\nNach 3 HWZ: 12,5% übrig\nBeispiele: C-14: 5730 Jahre, I-131: 8 Tage, Ra-226: 1600 Jahre.", category: "physik", topic: "Atomphysik", difficulty: "mittel" },
  { id: "fc-ph-ap3", front: "Photölektrischer Effekt?", back: "Licht schlägt Elektronen aus Metall heraus.\nEinstein: E_photon = h·f\nNur wenn h·f ≥ W_A (Austrittsarbeit)\nE_kin = h·f - W_A\nHöhere Intensität → mehr Elektronen (nicht schnellere!)\nHöhere Frequenz → schnellere Elektronen.", category: "physik", topic: "Atomphysik", difficulty: "schwer" },
  { id: "fc-ph-ap4", front: "Strahlenbelastung: Einheiten?", back: "Aktivität: Becquerel (Bq) = Zerfälle/s\nEnergiedosis: Gray (Gy) = J/kg\nÄquivalentdosis: Sievert (Sv) = Gy × Strahlungswichtungsfaktor\nα: Faktor 20, β/γ: Faktor 1\nNatürliche Belastung: ~2,4 mSv/Jahr.", category: "physik", topic: "Atomphysik", difficulty: "schwer" },
];

// ============================================================
// MATHEMATIK — Erweiterte Karteikarten
// ============================================================

export const matheTrigonometrie: Flashcard[] = [
  { id: "fc-ma-t1", front: "Sinus, Cosinus, Tangens im rechtwinkligen Dreieck?", back: "sin(α) = Gegenkathete / Hypotenuse\ncos(α) = Ankathete / Hypotenuse\ntan(α) = Gegenkathete / Ankathete = sin/cos\nMerke: 'SOHCAHTOA' oder 'GAGA HüHü GAGA'", category: "mathe", topic: "Trigonometrie", difficulty: "leicht" },
  { id: "fc-ma-t2", front: "Wichtige Winkelwerte?", back: "sin(0°)=0, sin(30°)=½, sin(45°)=√2/2, sin(60°)=√3/2, sin(90°)=1\ncos(0°)=1, cos(30°)=√3/2, cos(45°)=√2/2, cos(60°)=½, cos(90°)=0\ntan(0°)=0, tan(45°)=1, tan(90°)=∞\nMerke: sin und cos sind um 90° verschoben.", category: "mathe", topic: "Trigonometrie", difficulty: "leicht" },
  { id: "fc-ma-t3", front: "Trigonometrische Identitäten?", back: "sin²(x) + cos²(x) = 1\nsin(2x) = 2·sin(x)·cos(x)\ncos(2x) = cos²(x) - sin²(x)\ntan(x) = sin(x)/cos(x)\nBogenmaß: 360° = 2π rad → 180° = π rad.", category: "mathe", topic: "Trigonometrie", difficulty: "mittel" },
  { id: "fc-ma-t4", front: "Sinussatz und Kosinussatz?", back: "Sinussatz: a/sin(A) = b/sin(B) = c/sin(C)\nKosinussatz: c² = a² + b² - 2ab·cos(C)\n→ Verallgemeinerung des Pythagoras (wenn C=90°: cos(90°)=0 → c²=a²+b²).", category: "mathe", topic: "Trigonometrie", difficulty: "mittel" },
];

export const matheStochastik: Flashcard[] = [
  { id: "fc-ma-s1", front: "Wahrscheinlichkeit: Grundregeln?", back: "0 ≤ P(A) ≤ 1\nP(Ω) = 1 (sicheres Ereignis)\nP(A̅) = 1 - P(A) (Gegenereignis)\nP(A∪B) = P(A) + P(B) - P(A∩B)\nBei Unabhängigkeit: P(A∩B) = P(A)·P(B).", category: "mathe", topic: "Stochastik", difficulty: "leicht" },
  { id: "fc-ma-s2", front: "Bedingte Wahrscheinlichkeit?", back: "P(A|B) = P(A∩B) / P(B)\n'Wahrscheinlichkeit von A, gegeben B'\nBayes: P(A|B) = P(B|A)·P(A) / P(B)\nSensitivität: P(Test+|krank)\nSpezifität: P(Test-|gesund).", category: "mathe", topic: "Stochastik", difficulty: "mittel" },
  { id: "fc-ma-s3", front: "Binomialverteilung?", back: "P(X=k) = (n über k) · p^k · (1-p)^(n-k)\nn: Anzahl Versuche, k: Anzahl Erfolge, p: Erfolgswahrscheinlichkeit\nErwartungswert: E(X) = n·p\nVarianz: Var(X) = n·p·(1-p)\nBedingungen: Unabhängig, gleiche p, genau 2 Ausgänge.", category: "mathe", topic: "Stochastik", difficulty: "mittel" },
  { id: "fc-ma-s4", front: "Normalverteilung: 68-95-99,7-Regel?", back: "~68% der Werte liegen innerhalb ±1σ vom Mittelwert\n~95% innerhalb ±2σ\n~99,7% innerhalb ±3σ\nσ = Standardabweichung\nN(μ, σ²), Glockenkurve, symmetrisch um μ.", category: "mathe", topic: "Stochastik", difficulty: "mittel" },
  { id: "fc-ma-s5", front: "Kombinatorik: Permutation vs Kombination?", back: "Permutation (Reihenfolge wichtig): P(n,k) = n!/(n-k)!\nKombination (Reihenfolge egal): C(n,k) = n!/(k!·(n-k)!) = (n über k)\nBeispiel: 5 aus 45 Lotto = C(45,5) = 1.221.759\nVariation mit Wiederholung: n^k.", category: "mathe", topic: "Stochastik", difficulty: "mittel" },
];

export const matheProzent: Flashcard[] = [
  { id: "fc-ma-p1", front: "Prozent: Grundformel?", back: "Prozentwert W = Grundwert G × Prozentsatz p/100\nGrundwert G = W / (p/100)\nProzentsatz p = (W/G) × 100\nMerke: 'Drei Größen, eine gesucht → Dreisatz!'", category: "mathe", topic: "Prozent", difficulty: "leicht" },
  { id: "fc-ma-p2", front: "Prozentuale Veränderung?", back: "Änderung = (Neuwert - Altwert) / Altwert × 100%\nZunahme um p%: Neuwert = Altwert × (1 + p/100)\nAbnahme um p%: Neuwert = Altwert × (1 - p/100)\nACHTUNG: 20% Zunahme + 20% Abnahme ≠ Ausgangswert! (100→120→96)", category: "mathe", topic: "Prozent", difficulty: "leicht" },
  { id: "fc-ma-p3", front: "Dreisatz: Proportional vs Antiproportional?", back: "Proportional: Mehr → Mehr (Preis steigt mit Menge)\n3 Äpfel → 6€, 5 Äpfel → ?\nAntiproportional: Mehr → Weniger (Mehr Arbeiter → weniger Zeit)\n4 Arbeiter → 12h, 6 Arbeiter → ?\nProportional: Kreuzweise gleich, Anti: Gerade gleich.", category: "mathe", topic: "Prozent", difficulty: "leicht" },
  { id: "fc-ma-p4", front: "Zinseszins: Formel?", back: "K_n = K₀ × (1 + p/100)^n\nK₀ = Anfangskapital\np = Zinssatz in %\nn = Jahre\nVerdopplungszeit ≈ 72/p (Faustformel)\nBsp: 5% Zinsen → Verdopplung in ~14,4 Jahren.", category: "mathe", topic: "Prozent", difficulty: "mittel" },
  { id: "fc-ma-p5", front: "Verdünnungsrechnung (MedAT-typisch)?", back: "c₁·V₁ = c₂·V₂\n10 ml einer 5%-Lösung + 40 ml Wasser:\nc₂ = (5% × 10ml) / 50ml = 1%\nRegel: Konzentration × Volumen = konstante Stoffmenge.", category: "mathe", topic: "Prozent", difficulty: "mittel" },
];

export const matheEinheiten: Flashcard[] = [
  { id: "fc-ma-e1", front: "SI-Basiseinheiten: Die 7?", back: "Meter (m) — Länge\nKilogramm (kg) — Masse\nSekunde (s) — Zeit\nAmpere (A) — Stromstärke\nKelvin (K) — Temperatur\nMol (mol) — Stoffmenge\nCandela (cd) — Lichtstärke", category: "mathe", topic: "Einheiten", difficulty: "leicht" },
  { id: "fc-ma-e2", front: "Vorsätze: Nano bis Mega?", back: "Nano (n): 10⁻⁹\nMikro (μ): 10⁻⁶\nMilli (m): 10⁻³\nZenti (c): 10⁻²\nDezi (d): 10⁻¹\nKilo (k): 10³\nMega (M): 10⁶\nGiga (G): 10⁹", category: "mathe", topic: "Einheiten", difficulty: "leicht" },
  { id: "fc-ma-e3", front: "Kraft, Energie, Leistung: Einheiten?", back: "Kraft: Newton (N) = kg·m/s²\nEnergie/Arbeit: Joule (J) = N·m = kg·m²/s²\nLeistung: Watt (W) = J/s\nDruck: Pascal (Pa) = N/m²\n1 bar = 10⁵ Pa, 1 atm = 101.325 Pa.", category: "mathe", topic: "Einheiten", difficulty: "leicht" },
  { id: "fc-ma-e4", front: "Medizinische Einheiten?", back: "Blutdruck: mmHg (1 mmHg = 133,3 Pa)\nEnergie: kcal (1 kcal = 4,186 kJ)\nStrahlung: Sievert (Sv) für Äquivalentdosis\nOsmolarität: mOsm/L (Blut: ~290 mOsm/L)\nBlut-pH: 7,35-7,45.", category: "mathe", topic: "Einheiten", difficulty: "mittel" },
];

// ============================================================
// ZUSÄTZLICHE DECKS für bestehende Themen (Erweiterung)
// ============================================================

export const bioZellbiologieExtra: Flashcard[] = [
  { id: "fc-bio-ze1", front: "Osmose: Hypoton, Isoton, Hyperton?", back: "Hypoton (außen weniger gelöst): Zelle schwillt an (Lyse bei Tierzellen)\nIsoton: Kein Netto-Wasserfluss\nHyperton (außen mehr gelöst): Zelle schrumpft (Krenation/Plasmolyse)\nOsmotischer Druck: π = i·c·R·T.", category: "bio", topic: "Zellbiologie", difficulty: "leicht" },
  { id: "fc-bio-ze2", front: "Zellzyklus: Checkpoints?", back: "G1/S-Checkpoint (Restriktionspunkt): Zelle groß genug? DNA intakt?\nG2/M-Checkpoint: DNA vollständig repliziert?\nSpindel-Checkpoint (Metaphase): Alle Chromosomen am Spindelapparat?\nRegulation: Cycline + CDKs, p53 = 'Wächter des Genoms'.", category: "bio", topic: "Zellbiologie", difficulty: "mittel" },
  { id: "fc-bio-ze3", front: "Apoptose: Intrinsisch vs Extrinsisch?", back: "Intrinsisch: DNA-Schaden → Cytochrom c aus Mito → Caspase-9 → Caspase-3\nExtrinsisch: Todesligand (FasL, TNF) → Todesrezeptor → Caspase-8 → Caspase-3\nApoptose: kontrolliert, keine Entzündung\nNekrose: unkontrolliert, Entzündung.", category: "bio", topic: "Zellbiologie", difficulty: "schwer" },
  { id: "fc-bio-ze4", front: "Crossing-over: Wann und warum?", back: "Wann: Pachytän der Prophase I (Meiose)\nWas: Austausch von DNA zwischen nicht-schwesterlichen Chromatiden\nWo: An Chiasmata\nWarum: Erhöht genetische Vielfalt → rekombinante Chromosomen\nZusammen mit Independent Assortment = enorme Variation.", category: "bio", topic: "Zellbiologie", difficulty: "mittel" },
];

export const chemieAtombauExtra: Flashcard[] = [
  { id: "fc-ch-ae1", front: "Ionisierungsenergie: Trend im PSE?", back: "In der Periode: Nimmt ZU (stärkere Kernladung)\nIn der Gruppe: Nimmt AB (äußere Elektronen weiter vom Kern)\nAusnahmen: Halbgefüllte/vollgefüllte Unterschalen sind besonders stabil (N vs O).", category: "chemie", topic: "Atombau", difficulty: "mittel" },
  { id: "fc-ch-ae2", front: "Lewisstruktur: Regeln?", back: "1. Valenzelektronen zählen\n2. Gerüststruktur zeichnen (Zentralatom)\n3. Bindungen einzeichnen (= 2 Elektronen)\n4. Freie Elektronenpaare verteilen (Oktett!)\n5. Formalladungen prüfen (möglichst null)\nOktett-Ausnahmen: H (2), Be (4), B (6), P/S (erweitert).", category: "chemie", topic: "Atombau", difficulty: "mittel" },
  { id: "fc-ch-ae3", front: "Hybridisierung: sp, sp², sp³?", back: "sp³: 4 Orbitale, teträdrisch, 109,5° (CH₄)\nsp²: 3 Orbitale, trigonal-planar, 120° (C₂H₄, BF₃)\nsp: 2 Orbitale, linear, 180° (CO₂, C₂H₂)\nAnzahl Hybridorbitale = σ-Bindungen + freie EP am Zentralatom.", category: "chemie", topic: "Atombau", difficulty: "schwer" },
];

export const physikElektExtra: Flashcard[] = [
  { id: "fc-ph-ee1", front: "Kondensator: Kapazität?", back: "C = Q/U = ε₀·ε_r·A/d\nC in Farad (F), Q = Ladung, U = Spannung\nEnergie: W = ½·C·U²\nReihenschaltung: 1/C_ges = 1/C₁ + 1/C₂\nParallelschaltung: C_ges = C₁ + C₂ (umgekehrt wie Widerstände!).", category: "physik", topic: "Elektrizität", difficulty: "mittel" },
  { id: "fc-ph-ee2", front: "Elektrische Leistung?", back: "P = U·I = I²·R = U²/R\nEinheit: Watt (W)\nEnergie: W = P·t\n1 kWh = 3,6 MJ\nSicherung: Begrenzt den Strom I = P/U.", category: "physik", topic: "Elektrizität", difficulty: "leicht" },
  { id: "fc-ph-ee3", front: "Magnetische Kraft auf Leiter?", back: "F = B·I·L·sin(α)\nB = Magnetfeldstärke (Tesla)\nI = Stromstärke, L = Leiterlänge\nα = Winkel zwischen Leiter und Feld\nLinke-Hand-Regel: Daumen=I, Finger=B, Handfläche=F.", category: "physik", topic: "Elektrizität", difficulty: "mittel" },
];

// ============================================================
// ZUSAMMENFÜHRUNG: Alle erweiterten Decks
// ============================================================

export const expandedDecks: Record<string, Flashcard[]> = {
  "bio-evolution": bioEvolution,
  "bio-oekologie": bioOekologie,
  "bio-fortpflanzung": bioFortpflanzung,
  "bio-molekulargenetik": bioMolekulargenetik,
  "bio-nervensystem": bioNervensystem,
  "bio-immunbiologie": bioImmunsystem,
  "bio-verdauung": bioVerdauung,
  "bio-niere": bioNiere,
  "bio-zellbiologie-extra": bioZellbiologieExtra,
  "bio-hormonsystem": bioHormonSystem,
  "bio-blut": bioBlut,
  "bio-muskelsystem": bioMuskelSystem,
  "bio-atmung": bioAtmung,
  "bio-mikrobiologie": bioMikrobiologie,
  "bio-pflanzen": bioPflanzen,
  "bio-stoffwechsel": bioStoffwechsel,
  "bio-sinnesorgane": bioSinnesorgane,
  "chemie-stöchiometrie": chemieStoechiometrie,
  "chemie-organik": chemieOrganik,
  "chemie-biochemie": chemieBiochemie,
  "chemie-redox": chemieRedox,
  "chemie-atombau-extra": chemieAtombauExtra,
  "physik-kinematik": physikKinematik,
  "physik-wärmelehre": physikWaerme,
  "physik-wellen": physikWellen,
  "physik-atomphysik": physikAtomphysik,
  "physik-elektrizität-extra": physikElektExtra,
  "mathe-trigonometrie": matheTrigonometrie,
  "mathe-stochastik": matheStochastik,
  "mathe-prozent": matheProzent,
  "mathe-einheiten": matheEinheiten,
};

export const expandedDeckLabels: Record<string, string> = {
  "bio-evolution": "Biologie: Evolution",
  "bio-oekologie": "Biologie: Ökologie",
  "bio-fortpflanzung": "Biologie: Fortpflanzung",
  "bio-molekulargenetik": "Biologie: Molekulargenetik",
  "bio-nervensystem": "Biologie: Nervensystem",
  "bio-immunbiologie": "Biologie: Immunbiologie",
  "bio-verdauung": "Biologie: Verdauung",
  "bio-niere": "Biologie: Niere & Homöostase",
  "bio-zellbiologie-extra": "Biologie: Zellbiologie II",
  "bio-hormonsystem": "Biologie: Hormonsystem",
  "bio-blut": "Biologie: Blut & Hämatologie",
  "bio-muskelsystem": "Biologie: Muskelsystem",
  "bio-atmung": "Biologie: Atmung & Respiration",
  "bio-mikrobiologie": "Biologie: Mikrobiologie",
  "bio-pflanzen": "Biologie: Pflanzenbiologie",
  "bio-stoffwechsel": "Biologie: Stoffwechsel II",
  "bio-sinnesorgane": "Biologie: Sinnesorgane",
  "chemie-stöchiometrie": "Chemie: Stöchiometrie",
  "chemie-organik": "Chemie: Organische Chemie",
  "chemie-biochemie": "Chemie: Biochemie",
  "chemie-redox": "Chemie: Redox",
  "chemie-atombau-extra": "Chemie: Atombau II",
  "physik-kinematik": "Physik: Kinematik",
  "physik-wärmelehre": "Physik: Wärmelehre",
  "physik-wellen": "Physik: Wellen & Optik",
  "physik-atomphysik": "Physik: Atomphysik",
  "physik-elektrizität-extra": "Physik: Elektrizität II",
  "mathe-trigonometrie": "Mathe: Trigonometrie",
  "mathe-stochastik": "Mathe: Stochastik",
  "mathe-prozent": "Mathe: Prozent & Dreisatz",
  "mathe-einheiten": "Mathe: SI-Einheiten",
};
