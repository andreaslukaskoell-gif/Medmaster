import type { Flashcard } from "./flashcards";

// ============================================================
// CHEMIE — Erweiterte Karteikarten Teil 2
// ============================================================

export const chemieThermodynamik: Flashcard[] = [
  { id: "fc-ch-td1", front: "Enthalpie: Was ist ΔH?", back: "ΔH = Reaktionsenthalpie (Wärme bei konstantem Druck)\nΔH < 0: Exotherm (Wärme wird frei)\nΔH > 0: Endotherm (Wärme wird aufgenommen)\nBildungsenthalpie: ΔH_f° = Enthalpie bei Bildung aus Elementen.", category: "chemie", topic: "Thermodynamik", difficulty: "leicht" },
  { id: "fc-ch-td2", front: "Hess'scher Satz?", back: "ΔH einer Reaktion ist unabhängig vom Reaktionsweg.\nNur Anfangs- und Endzustand zählen → Zustandsfunktion.\nAnwendung: ΔH_Reaktion = Σ ΔH_f°(Produkte) - Σ ΔH_f°(Edukte)\nErlaubt Berechnung nicht direkt messbarer Reaktionsenthalpien.", category: "chemie", topic: "Thermodynamik", difficulty: "mittel" },
  { id: "fc-ch-td3", front: "Entropie S: Was misst sie?", back: "Maß für Unordnung/Anzahl der Mikrozustände.\nS = k_B · ln(W) (Boltzmann)\n2. Hauptsatz: ΔS_Universum ≥ 0 (immer zunehmend)\nΔS > 0: Mehr Unordnung (Gas > Flüssig > Fest)\nSublimation, Lösen, Mischen → ΔS positiv.", category: "chemie", topic: "Thermodynamik", difficulty: "mittel" },
  { id: "fc-ch-td4", front: "Gibbs'sche freie Enthalpie?", back: "ΔG = ΔH - T·ΔS\nΔG < 0: Spontan (exergon)\nΔG > 0: Nicht spontan (endergon)\nΔG = 0: Gleichgewicht\nBei T↑ wird -TΔS dominanter → entropiegetriebene Reaktionen begünstigt.", category: "chemie", topic: "Thermodynamik", difficulty: "mittel" },
  { id: "fc-ch-td5", front: "Aktivierungsenergie Ea?", back: "Mindestenergie für Reaktionsstart.\nArrhenius: k = A · e^(-Ea/RT)\nKatalysator: Senkt Ea → schnellere Reaktion (NICHT ΔG!)\nEnergieprofildiagramm: Edukte → Übergangszustand → Produkte\nÜbergangszustand = höchster Punkt = Ea.", category: "chemie", topic: "Thermodynamik", difficulty: "mittel" },
  { id: "fc-ch-td6", front: "Kalorimetrie: Wärme messen?", back: "Q = m · c · ΔT (bei Flüssigkeiten)\nQ = C_kal · ΔT (Bombenkalorimeter)\nc(Wasser) = 4,186 J/(g·K)\nVerbrennungswärme: Stoff verbrennt vollständig in O₂\nNeutralisation: ΔH° ≈ -57 kJ/mol (starke Säure + starke Base).", category: "chemie", topic: "Thermodynamik", difficulty: "leicht" },
  { id: "fc-ch-td7", front: "Exotherm vs Endotherm: Beispiele?", back: "Exotherm (ΔH < 0): Verbrennung, Neutralisation, Kristallisation, Zellatmung\nEndotherm (ΔH > 0): Photosynthese, Kalkbrennen, Verdampfen, Elektrolyse\nExotherme Reaktionen geben Wärme an Umgebung ab → Temperatur steigt.", category: "chemie", topic: "Thermodynamik", difficulty: "leicht" },
  { id: "fc-ch-td8", front: "Bindungsenthalpie: Berechnung?", back: "ΔH_Reaktion = Σ E(gebrochene Bindungen) - Σ E(gebildete Bindungen)\nBindungsbruch: Endotherm (Energie nötig)\nBindungsbildung: Exotherm (Energie frei)\nDreifachbindung > Doppelbindung > Einfachbindung (Energie).\nN≡N: 945 kJ/mol, O=O: 498 kJ/mol.", category: "chemie", topic: "Thermodynamik", difficulty: "mittel" },
  { id: "fc-ch-td9", front: "Gitterenergie: Ionenkristalle?", back: "Energie bei Bildung eines Ionenkristalls aus gasförmigen Ionen.\nBorn-Haber-Kreisprozess: Verbindet Gitterenergie mit messbaren Größen.\nHohe Gitterenergie → hoher Schmelzpunkt, geringe Löslichkeit.\nAbhängig von: Ionenladung↑ und Ionenradius↓ → Gitterenergie↑.", category: "chemie", topic: "Thermodynamik", difficulty: "schwer" },
  { id: "fc-ch-td10", front: "Lösungsenthalpie: Warum löst sich NaCl?", back: "ΔH_Lösung = ΔH_Gitter + ΔH_Hydratation\nNaCl: ΔH_Gitter = +787 kJ/mol, ΔH_Hydratation ≈ -783 kJ/mol\n→ ΔH_Lösung ≈ +4 kJ/mol (leicht endotherm!)\nLöst sich trotzdem: ΔS > 0 (mehr Unordnung) → ΔG < 0\nEntropiegetriebener Prozess!", category: "chemie", topic: "Thermodynamik", difficulty: "schwer" },
];

export const chemieGleichgewicht: Flashcard[] = [
  { id: "fc-ch-gg1", front: "Chemisches Gleichgewicht: Definition?", back: "Dynamisches Gleichgewicht: Hin- und Rückreaktion gleich schnell.\nKonzentrationen bleiben konstant (NICHT gleich!).\nKc = [Produkte]^n / [Edukte]^m\nKc > 1: Gleichgewicht auf Produktseite\nKc < 1: Gleichgewicht auf Eduktseite.", category: "chemie", topic: "Gleichgewicht", difficulty: "leicht" },
  { id: "fc-ch-gg2", front: "Le Chatelier: Prinzip vom kleinsten Zwang?", back: "System weicht Störung aus und stellt neues GGW ein.\nKonzentration↑: GGW verschiebt zur Gegenseite\nDruck↑: GGW verschiebt zur Seite mit weniger Gasteilchen\nTemperatur↑: GGW verschiebt in endotherme Richtung\nKatalysator: KEIN Einfluss auf GGW-Lage (nur schneller).", category: "chemie", topic: "Gleichgewicht", difficulty: "leicht" },
  { id: "fc-ch-gg3", front: "Kp vs Kc: Unterschied?", back: "Kc: Mit Konzentrationen [mol/L]\nKp: Mit Partialdrücken [atm/Pa]\nKp = Kc · (RT)^Δn (Δn = mol gasf. Produkte - mol gasf. Edukte)\nNur für Gasreaktionen relevant.\nBei Δn = 0: Kp = Kc.", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
  { id: "fc-ch-gg4", front: "Löslichkeitsprodukt Ksp?", back: "Ksp = [Kation]^m · [Anion]^n (in gesättigter Lösung)\nBeispiel: CaF₂ → Ca²⁺ + 2F⁻, Ksp = [Ca²⁺]·[F⁻]²\nKsp klein → schwer löslich (z.B. BaSO₄: Ksp = 1,1×10⁻¹⁰)\nIonenprodukt Q > Ksp → Fällung\nGemeinsamer-Ionen-Effekt: Löslichkeit sinkt.", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
  { id: "fc-ch-gg5", front: "Pufferlösungen: Wie funktionieren sie?", back: "Schwache Säure + konjugierte Base (z.B. CH₃COOH/CH₃COO⁻)\nH⁺ zugegeben → Base neutralisiert: A⁻ + H⁺ → HA\nOH⁻ zugegeben → Säure neutralisiert: HA + OH⁻ → A⁻ + H₂O\npH ≈ pKs + log([A⁻]/[HA]) (Henderson-Hasselbalch)\nMax. Pufferkapazität bei pH = pKs.", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
  { id: "fc-ch-gg6", front: "Titrationskurve: Starke Säure + starke Base?", back: "Anfangs-pH niedrig (~1-2)\nPufferbereich: Langsamer pH-Anstieg\nÄquivalenzpunkt: pH = 7 (genau neutral)\nSteiler Anstieg um Äquivalenzpunkt\nIndikator: Phenolphthalein (Umschlag pH 8,2-10).\nEnd-pH hoch (~12-13).", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
  { id: "fc-ch-gg7", front: "Schwache Säure + starke Base: Titration?", back: "Äquivalenzpunkt: pH > 7 (basisch! Weil konjugierte Base entsteht)\nHalbäquivalenzpunkt: pH = pKs (wichtig!)\nPufferbereich: pH = pKs ± 1\nIndikator: Phenolphthalein (nicht Methylorange!)\nBeispiel: Essigsäure (pKs=4,75) + NaOH → ÄP bei pH≈8,7.", category: "chemie", topic: "Gleichgewicht", difficulty: "schwer" },
  { id: "fc-ch-gg8", front: "Autoprotolyse des Wassers?", back: "H₂O + H₂O ⇌ H₃O⁺ + OH⁻\nKw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ (bei 25°C)\npH + pOH = 14\nBei T↑: Kw↑ → pH sinkt (mehr Dissoziation)\nReines Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7.", category: "chemie", topic: "Gleichgewicht", difficulty: "leicht" },
  { id: "fc-ch-gg9", front: "Ampholyte: Was sind sie?", back: "Stoffe die sowohl als Säure ALS AUCH als Base reagieren können.\nBeispiel: Wasser (H₂O), Aminosäuren, HCO₃⁻, HSO₄⁻\nH₂O als Säure: H₂O → OH⁻ + H⁺\nH₂O als Base: H₂O + H⁺ → H₃O⁺\nAminosäuren: Zwitterion bei isölektrischem Punkt.", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
  { id: "fc-ch-gg10", front: "Massenwirkungsgesetz: Herleitung?", back: "Für aA + bB ⇌ cC + dD:\nKc = [C]^c · [D]^d / ([A]^a · [B]^b)\nNur gelöste Stoffe und Gase in K (nicht Feststoffe/reine Flüssigkeiten!)\nΔG° = -RT·ln(K)\nK temperaturabhängig: Van't-Hoff-Gleichung.", category: "chemie", topic: "Gleichgewicht", difficulty: "mittel" },
];

export const chemieKinetik: Flashcard[] = [
  { id: "fc-ch-ki1", front: "Reaktionsgeschwindigkeit: Definition?", back: "v = -Δ[Edukt]/Δt = +Δ[Produkt]/Δt\nEinheit: mol/(L·s)\nAbhängig von: Konzentration, Temperatur, Katalysator, Oberfläche.\nRGT-Regel: +10°C → v verdoppelt bis verdreifacht sich.", category: "chemie", topic: "Kinetik", difficulty: "leicht" },
  { id: "fc-ch-ki2", front: "Geschwindigkeitsgesetz: Reaktionsordnung?", back: "v = k · [A]^m · [B]^n\nm, n = Reaktionsordnung (experimentell bestimmt!)\n0. Ordnung: v = k (konstant)\n1. Ordnung: v = k·[A] (Halbwertszeit konstant!)\n2. Ordnung: v = k·[A]²\nGesamtordnung = m + n.", category: "chemie", topic: "Kinetik", difficulty: "mittel" },
  { id: "fc-ch-ki3", front: "Arrhenius-Gleichung?", back: "k = A · e^(-Ea/RT)\nk = Geschwindigkeitskonstante\nA = Präexponentieller Faktor (Stoßfaktor)\nEa = Aktivierungsenergie\nR = 8,314 J/(mol·K)\nAuftragung: ln(k) vs 1/T → Gerade mit Steigung -Ea/R.", category: "chemie", topic: "Kinetik", difficulty: "schwer" },
  { id: "fc-ch-ki4", front: "Katalysator: Wie wirkt er?", back: "Senkt Aktivierungsenergie → alternative Reaktionsroute.\nÄndert NICHT: ΔG, ΔH, Gleichgewichtslage.\nÄndert: Geschwindigkeit (Hin- UND Rückreaktion gleich!).\nHomogene Katalyse: Katalysator in gleicher Phase (z.B. H⁺ in Lösung)\nHeterogene Katalyse: Andere Phase (z.B. Pt-Oberfläche).", category: "chemie", topic: "Kinetik", difficulty: "leicht" },
  { id: "fc-ch-ki5", front: "Enzymkinetik vs chemische Kinetik?", back: "Enzyme = Biokatalysatoren (Proteine)\nMichälis-Menten: v = Vmax·[S]/(Km+[S])\nSättigungskinetik: Bei hohem [S] → v = Vmax\nSubstratspezifisch, Temperatur-/pH-Optimum\nKompetitive Hemmung: Km↑, Vmax gleich\nAllosterische Regulation: Konformationsänderung.", category: "chemie", topic: "Kinetik", difficulty: "schwer" },
  { id: "fc-ch-ki6", front: "Halbwertszeit: 1. Ordnung?", back: "t½ = ln(2)/k = 0,693/k\nUNABHÄNGIG von Anfangskonzentration!\nNach 1 HWZ: 50%, nach 2: 25%, nach 3: 12,5%\nBeispiel: Radioaktiver Zerfall, Medikamentenabbau.\n2. Ordnung: t½ = 1/(k·[A]₀) → abhängig von [A]₀!", category: "chemie", topic: "Kinetik", difficulty: "mittel" },
  { id: "fc-ch-ki7", front: "Reaktionsmechanismus: Elementarschritte?", back: "Gesamtreaktion = Summe der Elementarschritte.\nGeschwindigkeitsbestimmender Schritt: Der langsamste!\nIntermediate: Gebildet und verbraucht (nicht im Geschwindigkeitsgesetz).\nÜbergangszustand: Höchster Punkt im Energieprofil (kurzlebig).\nMolekularität: Uni-(1), Bi-(2), Trimolekular (3, selten).", category: "chemie", topic: "Kinetik", difficulty: "schwer" },
  { id: "fc-ch-ki8", front: "Stoßtheorie: Wann reagieren Teilchen?", back: "Zwei Bedingungen für Reaktion:\n1. Ausreichende Energie (E ≥ Ea)\n2. Richtige Orientierung (Stoßgeometrie)\nNicht jeder Stoß ist effektiv!\nTemperatur↑ → mehr Teilchen mit E ≥ Ea (Maxwell-Boltzmann)\nKonzentration↑ → mehr Stöße pro Zeiteinheit.", category: "chemie", topic: "Kinetik", difficulty: "mittel" },
];

// ============================================================
// PHYSIK — Erweiterte Karteikarten Teil 2
// ============================================================

export const physikSchwingungen: Flashcard[] = [
  { id: "fc-ph-sw1", front: "Harmonische Schwingung: Grundgrößen?", back: "x(t) = A·sin(ωt + φ)\nA = Amplitude, ω = Kreisfrequenz, φ = Phase\nω = 2π/T = 2πf\nT = Periode (s), f = Frequenz (Hz)\nv_max = A·ω, a_max = A·ω².", category: "physik", topic: "Schwingungen", difficulty: "leicht" },
  { id: "fc-ph-sw2", front: "Federpendel: Formeln?", back: "F = -k·x (Hooke'sches Gesetz, rücktreibende Kraft)\nT = 2π·√(m/k)\nω = √(k/m)\nE_pot = ½·k·x², E_kin = ½·m·v²\nE_gesamt = ½·k·A² = konstant\nT unabhängig von Amplitude!", category: "physik", topic: "Schwingungen", difficulty: "leicht" },
  { id: "fc-ph-sw3", front: "Fadenpendel: Schwingungsdauer?", back: "T = 2π·√(L/g) (nur für kleine Auslenkungen < 15°)\nL = Fadenlänge, g = Erdbeschleunigung\nUNABHÄNGIG von Masse und Amplitude!\nT auf dem Mond: Länger (g kleiner)\nAnwendung: Sekundenpendel (T=2s → L≈1m).", category: "physik", topic: "Schwingungen", difficulty: "leicht" },
  { id: "fc-ph-sw4", front: "Gedämpfte Schwingung?", back: "Reibungskraft entzieht Energie → Amplitude nimmt ab.\nA(t) = A₀·e^(-δt) (exponentieller Abfall)\nδ = Dämpfungskonstante\nSchwache Dämpfung: Oszilliert, Amplitude sinkt\nKritische Dämpfung: Schnellste Rückkehr ohne Schwingung\nÜberdämpfung: Langsame Rückkehr, kein Schwingen.", category: "physik", topic: "Schwingungen", difficulty: "mittel" },
  { id: "fc-ph-sw5", front: "Resonanz: Wann tritt sie auf?", back: "Wenn Erregerfrequenz ≈ Eigenfrequenz des Systems.\nAmplitude wird MAXIMAL bei Resonanzfrequenz.\nGeringe Dämpfung → Scharfe Resonanzspitze, große Amplitude.\nBeispiele: Brücken (Tacoma Narrows), Gläser zerspringen bei Ton.\nMedizin: MRT nutzt Resonanz der H-Kerne.", category: "physik", topic: "Schwingungen", difficulty: "mittel" },
  { id: "fc-ph-sw6", front: "Energieumwandlung bei Schwingungen?", back: "Ständiger Wechsel E_pot ↔ E_kin:\nMaximale Auslenkung: E_pot = max, E_kin = 0\nRuhelage: E_pot = 0, E_kin = max\nE_gesamt = E_pot + E_kin = konstant (ohne Dämpfung)\nFrequenz der Energieumwandlung = 2f (doppelte Schwingungsfrequenz).", category: "physik", topic: "Schwingungen", difficulty: "mittel" },
];

export const physikFluidmechanik: Flashcard[] = [
  { id: "fc-ph-fl1", front: "Druck: Definition und Einheiten?", back: "p = F/A (Kraft pro Fläche)\nEinheit: Pascal (Pa) = N/m²\n1 bar = 10⁵ Pa\n1 atm = 101.325 Pa = 760 mmHg\nHydrostatischer Druck: p = ρ·g·h\nDruck wirkt in alle Richtungen gleich (Pascal-Prinzip).", category: "physik", topic: "Fluidmechanik", difficulty: "leicht" },
  { id: "fc-ph-fl2", front: "Pascal'sches Gesetz?", back: "Druckänderung in abgeschlossener Flüssigkeit wirkt überall gleich.\nHydraulische Presse: F₁/A₁ = F₂/A₂\nKleine Kraft auf kleine Fläche → große Kraft auf große Fläche.\nKraftverstärkung: F₂ = F₁·(A₂/A₁)\nAnwendungen: Hydraulikbremse, Wagenheber.", category: "physik", topic: "Fluidmechanik", difficulty: "leicht" },
  { id: "fc-ph-fl3", front: "Archimedisches Prinzip?", back: "Auftriebskraft = Gewicht der verdrängten Flüssigkeit.\nF_A = ρ_Fl · V_verdrängt · g\nSchwimmen: F_A > F_G (ρ_Körper < ρ_Flüssigkeit)\nSchweben: F_A = F_G (ρ gleich)\nSinken: F_A < F_G (ρ_Körper > ρ_Flüssigkeit)\nScheinbare Gewichtsabnahme in Flüssigkeit.", category: "physik", topic: "Fluidmechanik", difficulty: "leicht" },
  { id: "fc-ph-fl4", front: "Bernoulli-Gleichung?", back: "p + ½ρv² + ρgh = konstant (entlang Stromlinie)\nSchnelle Strömung → niedriger Druck\nLangsame Strömung → hoher Druck\nAnwendungen: Flugzeugflügel (Auftrieb), Venturi-Effekt, Zerstäuber.\nVoraussetzung: Ideale, inkompressible, reibungsfreie Strömung.", category: "physik", topic: "Fluidmechanik", difficulty: "mittel" },
  { id: "fc-ph-fl5", front: "Viskosität: Zähigkeit von Flüssigkeiten?", back: "η = dynamische Viskosität [Pa·s]\nNewton'sches Fluid: τ = η·(dv/dx) (Scherspannung proportional)\nBlut: Nicht-Newton'sch (Viskosität abhängig von Scherrate).\nHagen-Poiseuille: Q = πΔp·r⁴/(8ηL)\nr⁴: Verdopplung Radius → 16× mehr Durchfluss!", category: "physik", topic: "Fluidmechanik", difficulty: "schwer" },
  { id: "fc-ph-fl6", front: "Oberflächenspannung?", back: "σ = F/L [N/m] — Kraft pro Länge an Oberfläche.\nWassermoleküle an Oberfläche: Nur Kohäsionskräfte nach innen → Minimierung der Oberfläche.\nTropfenform (Kugel = minimale Oberfläche).\nKapillareffekt: Wasser steigt in engen Röhren.\nSurfactant in Lunge: Senkt Oberflächenspannung → verhindert Alveolarkollaps.", category: "physik", topic: "Fluidmechanik", difficulty: "mittel" },
  { id: "fc-ph-fl7", front: "Kontinuitätsgleichung?", back: "A₁·v₁ = A₂·v₂ (inkompressible Fluide)\nEnger Querschnitt → höhere Geschwindigkeit.\nBlutkreislauf: Aorta (schnell) → Kapillaren (langsam, weil Gesamtquerschnitt↑)\nVolumenstrom Q = A·v = konstant.", category: "physik", topic: "Fluidmechanik", difficulty: "mittel" },
];

export const physikModernePhysik: Flashcard[] = [
  { id: "fc-ph-mp1", front: "Welle-Teilchen-Dualismus?", back: "Licht: Manchmal Welle (Beugung, Interferenz), manchmal Teilchen (Photöffekt, Compton).\nElektronen: Manchmal Teilchen, manchmal Welle (Elektronenbeugung).\nde Broglie: λ = h/p = h/(mv)\nJe größer die Masse → je kleiner λ → klassisches Verhalten.", category: "physik", topic: "Moderne Physik", difficulty: "mittel" },
  { id: "fc-ph-mp2", front: "Heisenbergsche Unschärferelation?", back: "Δx · Δp ≥ ℏ/2 (ℏ = h/2π)\nOrt und Impuls NICHT gleichzeitig beliebig genau messbar.\nAuch: ΔE · Δt ≥ ℏ/2 (Energie-Zeit)\nKeine Messungenauigkeit, sondern fundamentale Eigenschaft der Natur!\nKonsequenz: Elektronen haben keine exakte Bahn im Atom → Orbitale (Aufenthaltswahrscheinlichkeit).", category: "physik", topic: "Moderne Physik", difficulty: "schwer" },
  { id: "fc-ph-mp3", front: "E = mc²: Masse-Energie-Äquivalenz?", back: "Einstein: Masse und Energie sind äquivalent.\nRuheenergie: E₀ = m₀c²\nc² ≈ 9×10¹⁶ m²/s² → winzige Masse = enorme Energie.\nKernspaltung: Massendefekt → Energie (Atombombe, AKW)\nKernfusion: 4H → He + Energie (Sonne)\nMedizin: PET nutzt Positron-Elektron-Annihilation.", category: "physik", topic: "Moderne Physik", difficulty: "mittel" },
  { id: "fc-ph-mp4", front: "Kernspaltung vs Kernfusion?", back: "Spaltung: Schwerer Kern zerfällt in 2 leichtere + Neutronen + Energie.\n²³⁵U + n → ²³⁶U → Spaltprodukte + 2-3n + ~200 MeV\nKettenreaktion: Neutronen spalten weitere Kerne.\nFusion: Leichte Kerne verschmelzen → schwerer Kern + Energie.\n²H + ³H → ⁴He + n + 17,6 MeV\nFusion: Mehr Energie pro Masse, aber extrem hohe T nötig.", category: "physik", topic: "Moderne Physik", difficulty: "mittel" },
  { id: "fc-ph-mp5", front: "Bohr'sches Atommodell?", back: "Elektronen auf diskreten Bahnen (Energieniveaus n=1,2,3...)\nEn = -13,6 eV/n² (Wasserstoff)\nÜbergang n→m: Photon mit E = hf = |En - Em|\nAbsorption: Elektron springt höher (Energie aufgenommen)\nEmission: Elektron fällt tiefer (Photon emittiert)\nLinienspektrum: Diskrete Wellenlängen (Balmer-Serie im Sichtbaren).", category: "physik", topic: "Moderne Physik", difficulty: "mittel" },
  { id: "fc-ph-mp6", front: "Spezielle Relativitätstheorie: 2 Postulate?", back: "1. Relativitätsprinzip: Naturgesetze gleich in allen Inertialsystemen.\n2. Konstanz der Lichtgeschwindigkeit: c = 3×10⁸ m/s in allen Bezugssystemen.\nKonsequenzen:\n→ Zeitdilatation: Δt' = Δt/√(1-v²/c²) (bewegte Uhr geht langsamer)\n→ Längenkontraktion: L' = L·√(1-v²/c²)\n→ Keine Überlichtgeschwindigkeit möglich.", category: "physik", topic: "Moderne Physik", difficulty: "schwer" },
];

// ============================================================
// MATHEMATIK — Erweiterte Karteikarten Teil 2
// ============================================================

export const matheVektoren: Flashcard[] = [
  { id: "fc-ma-v1", front: "Vektor: Grundoperationen?", back: "Addition: ā + b̄ = (a₁+b₁, a₂+b₂, a₃+b₃)\nSkalare Multiplikation: r·ā = (r·a₁, r·a₂, r·a₃)\nBetrag: |ā| = √(a₁²+a₂²+a₃²)\nEinheitsvektor: ā/|ā| (Länge 1)\nNullvektor: (0,0,0).", category: "mathe", topic: "Vektoren", difficulty: "leicht" },
  { id: "fc-ma-v2", front: "Skalarprodukt (Punktprodukt)?", back: "ā·b̄ = a₁b₁ + a₂b₂ + a₃b₃ = |ā|·|b̄|·cos(α)\nErgebnis: Skalar (Zahl)!\nOrthogonal (senkrecht): ā·b̄ = 0\nWinkel: cos(α) = (ā·b̄)/(|ā|·|b̄|)\nAnwendung: Projektion, Winkelberechnung.", category: "mathe", topic: "Vektoren", difficulty: "leicht" },
  { id: "fc-ma-v3", front: "Kreuzprodukt (Vektorprodukt)?", back: "ā×b̄ = (a₂b₃-a₃b₂, a₃b₁-a₁b₃, a₁b₂-a₂b₁)\nErgebnis: Vektor! (senkrecht auf ā und b̄)\n|ā×b̄| = |ā|·|b̄|·sin(α) = Fläche des Parallelogramms.\nā×b̄ = -b̄×ā (antikommutativ)\nParallele Vektoren: ā×b̄ = 0̄.", category: "mathe", topic: "Vektoren", difficulty: "mittel" },
  { id: "fc-ma-v4", front: "Geradengleichung: Vektor-Form?", back: "r̄(t) = ā + t·b̄ (Punkt + Richtung)\nā = Stützvektor (Punkt auf Gerade)\nb̄ = Richtungsvektor\nt = Parameter (reelle Zahl)\nParallele Geraden: Gleicher Richtungsvektor.\nSchnittpunkt: Gleichsetzen und t,s lösen.", category: "mathe", topic: "Vektoren", difficulty: "mittel" },
  { id: "fc-ma-v5", front: "Ebenengleichung: 3 Formen?", back: "Parameterform: r̄ = ā + s·b̄ + t·c̄\nNormalenform: n̄·(r̄ - ā) = 0\nKoordinatenform: ax + by + cz = d\nn̄ = (a,b,c) = Normalenvektor (senkrecht zur Ebene)\nAbstand Punkt-Ebene: d = |n̄·(P̄-ā)|/|n̄|.", category: "mathe", topic: "Vektoren", difficulty: "mittel" },
  { id: "fc-ma-v6", front: "Lineare Unabhängigkeit?", back: "Vektoren ā, b̄ sind linear unabhängig, wenn:\nr·ā + s·b̄ = 0̄ nur für r=s=0.\n2 Vektoren: Unabhängig ↔ nicht parallel.\n3 Vektoren im R³: Unabhängig ↔ nicht komplanar.\nSpatprodukt ≠ 0 → linear unabhängig.\nBasis des R³: 3 linear unabhängige Vektoren.", category: "mathe", topic: "Vektoren", difficulty: "mittel" },
];

export const matheFolgen: Flashcard[] = [
  { id: "fc-ma-fo1", front: "Arithmetische Folge?", back: "Konstante Differenz d: aₙ = a₁ + (n-1)·d\nSumme: Sₙ = n/2·(a₁ + aₙ) = n/2·(2a₁ + (n-1)d)\nBeispiel: 2, 5, 8, 11, ... (d=3)\nGauß-Summe: 1+2+...+n = n(n+1)/2.", category: "mathe", topic: "Folgen", difficulty: "leicht" },
  { id: "fc-ma-fo2", front: "Geometrische Folge?", back: "Konstanter Quotient q: aₙ = a₁·q^(n-1)\nSumme: Sₙ = a₁·(1-q^n)/(1-q) für q≠1\nUnendliche Reihe (|q|<1): S∞ = a₁/(1-q)\nBeispiel: 3, 6, 12, 24, ... (q=2)\nZinseszins: K_n = K₀·(1+p/100)^n ist geometrisch.", category: "mathe", topic: "Folgen", difficulty: "leicht" },
  { id: "fc-ma-fo3", front: "Konvergenz: Wann hat eine Folge einen Grenzwert?", back: "Folge (aₙ) konvergiert gegen L, wenn:\nFür jedes ε > 0 existiert N, sodass |aₙ - L| < ε für alle n > N.\nBeschränkt + monoton → konvergent (Monotoniekriterium).\nDivergent: Kein endlicher Grenzwert.\nlim(1/n) = 0, lim(1+1/n)^n = e ≈ 2,718.", category: "mathe", topic: "Folgen", difficulty: "mittel" },
  { id: "fc-ma-fo4", front: "Wichtige Grenzwerte?", back: "lim(n→∞) 1/n = 0\nlim(n→∞) (1+1/n)^n = e\nlim(n→∞) n^k/a^n = 0 (a>1): Exponential schlägt Polynom.\nlim(n→∞) ln(n)/n = 0: Logarithmus wächst langsamer als linear.\nlim(n→∞) n!/n^n = 0.", category: "mathe", topic: "Folgen", difficulty: "mittel" },
  { id: "fc-ma-fo5", front: "Reihen: Konvergenzkriterien?", back: "Geometrische Reihe: |q| < 1 → konvergent.\nHarmonische Reihe: Σ 1/n → divergent!\nQuotientenkriterium: lim|aₙ₊₁/aₙ| < 1 → konvergent.\nVergleichskriterium: |aₙ| ≤ bₙ und Σbₙ konvergent → Σaₙ konvergent.\nNotwendig: aₙ → 0 (aber nicht hinreichend!).", category: "mathe", topic: "Folgen", difficulty: "schwer" },
  { id: "fc-ma-fo6", front: "Fibonacci-Folge?", back: "F(1)=1, F(2)=1, F(n)=F(n-1)+F(n-2)\n1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\nVerhältnis aufeinanderfolgender Glieder → Goldener Schnitt φ = (1+√5)/2 ≈ 1,618.\nKommt vor in: Blattstellung, Schneckenhäuser, Kunst.\nMedAT KFF: Häufig in Zahlenfolgen-Aufgaben!", category: "mathe", topic: "Folgen", difficulty: "leicht" },
];

export const matheIntegral: Flashcard[] = [
  { id: "fc-ma-in1", front: "Unbestimmtes Integral: Stammfunktion?", back: "∫f(x)dx = F(x) + C (C = Integrationskonstante)\nF'(x) = f(x)\nGrundintegrale:\n∫x^n dx = x^(n+1)/(n+1) + C (n≠-1)\n∫1/x dx = ln|x| + C\n∫e^x dx = e^x + C\n∫sin(x) dx = -cos(x) + C.", category: "mathe", topic: "Integration", difficulty: "leicht" },
  { id: "fc-ma-in2", front: "Bestimmtes Integral: Fläche berechnen?", back: "∫[a→b] f(x)dx = F(b) - F(a) (Hauptsatz der Analysis)\nFläche zwischen Kurve und x-Achse.\nACHTUNG: Fläche unter x-Achse → negatives Integral!\nFür Flächeninhalt: ∫|f(x)|dx\nZwischen zwei Kurven: ∫[a→b] |f(x)-g(x)|dx.", category: "mathe", topic: "Integration", difficulty: "leicht" },
  { id: "fc-ma-in3", front: "Substitutionsregel?", back: "∫f(g(x))·g'(x)dx = ∫f(u)du mit u = g(x)\nSchritte: 1. u = g(x) wählen, 2. du = g'(x)dx, 3. Substituieren, 4. Integrieren, 5. Rücksubstituieren.\nBeispiel: ∫2x·e^(x²)dx, u=x², du=2x·dx → ∫e^u du = e^u = e^(x²)+C.", category: "mathe", topic: "Integration", difficulty: "mittel" },
  { id: "fc-ma-in4", front: "Partielle Integration?", back: "∫u·v'dx = u·v - ∫u'·v dx\nMerke: LIATE-Regel für u-Wahl:\nL=Logarithmus, I=Inverse Trig, A=Algebraisch, T=Trig, E=Exponential.\nBeispiel: ∫x·e^x dx, u=x, v'=e^x → x·e^x - ∫e^x dx = x·e^x - e^x + C.", category: "mathe", topic: "Integration", difficulty: "mittel" },
  { id: "fc-ma-in5", front: "Rotationsvolumen?", back: "Um x-Achse: V = π·∫[a→b] [f(x)]² dx (Scheibenmethode)\nUm y-Achse: V = 2π·∫[a→b] x·f(x) dx (Schalenmethode)\nBeispiel: Kugel V = 4/3·πr³ durch Rotation von y=√(r²-x²).\nHohlkörper: V = π·∫[a→b] ([f(x)]² - [g(x)]²) dx.", category: "mathe", topic: "Integration", difficulty: "schwer" },
  { id: "fc-ma-in6", front: "Hauptsatz der Differential- und Integralrechnung?", back: "1. Teil: F(x) = ∫[a→x] f(t)dt → F'(x) = f(x)\nIntegration und Differentiation sind Umkehroperationen.\n2. Teil: ∫[a→b] f(x)dx = F(b) - F(a)\nBedeutung: Verbindet Stammfunktion mit bestimmtem Integral.\nFundamental für gesamte Analysis!", category: "mathe", topic: "Integration", difficulty: "mittel" },
];

// ============================================================
// ZUSAMMENFÜHRUNG: Alle erweiterten Decks (Teil 2)
// ============================================================

export const expandedDecks2: Record<string, Flashcard[]> = {
  "chemie-thermodynamik": chemieThermodynamik,
  "chemie-gleichgewicht": chemieGleichgewicht,
  "chemie-kinetik": chemieKinetik,
  "physik-schwingungen": physikSchwingungen,
  "physik-fluidmechanik": physikFluidmechanik,
  "physik-moderne-physik": physikModernePhysik,
  "mathe-vektoren": matheVektoren,
  "mathe-folgen": matheFolgen,
  "mathe-integral": matheIntegral,
};

export const expandedDeckLabels2: Record<string, string> = {
  "chemie-thermodynamik": "Chemie: Thermodynamik",
  "chemie-gleichgewicht": "Chemie: Gleichgewicht",
  "chemie-kinetik": "Chemie: Reaktionskinetik",
  "physik-schwingungen": "Physik: Schwingungen",
  "physik-fluidmechanik": "Physik: Fluidmechanik",
  "physik-moderne-physik": "Physik: Moderne Physik",
  "mathe-vektoren": "Mathe: Vektoren",
  "mathe-folgen": "Mathe: Folgen & Reihen",
  "mathe-integral": "Mathe: Integration",
};
