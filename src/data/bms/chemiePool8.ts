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
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}
export const chemiePool8: Question[] = [
  // ── chem-kap1: Atombau / Orbitaltheorie / Hybridisierung ─────────────────
  q(
    "ch-pool-8-001",
    "chem-kap1",
    "Ein Kohlenstoffatom im angeregten Zustand hybridisiert zu sp³. Welche Aussage zur Geometrie und Bindungswinkel eines Methanmoleküls ist korrekt?",
    [
      "Trigonal-planar, Winkel 120°",
      "Trigonal-pyramidal, Winkel 107°",
      "Tetraedrisch, Winkel 109,5°",
      "Linear, Winkel 180°",
      "Gewinkelt, Winkel 104,5°",
    ],
    2,
    "CH₄ hat sp³-Hybridisierung mit 4 äquivalenten Bindungspaaren → regulärer Tetraeder, Bindungswinkel 109,5°.",
    "schwer",
    ["hybridisierung", "geometrie"]
  ),

  q(
    "ch-pool-8-002",
    "chem-kap1",
    "Ethen (C₂H₄) besitzt eine C=C-Doppelbindung. Aus welchen Orbitalbeiträgen setzt sich diese zusammen, und wie viele π-Bindungen enthält sie?",
    [
      "Zwei σ-Bindungen aus sp²-Orbitalen, keine π-Bindung",
      "Eine σ aus sp²-sp²-Überlappung + eine π aus p_z-p_z-Überlappung",
      "Zwei π-Bindungen aus unhybridisierten p-Orbitalen",
      "Eine σ aus sp³-Hybridorbitalen + eine π aus d-d-Überlappung",
      "Eine σ aus s-Orbitalen + eine π aus p-p-Überlappung",
    ],
    1,
    "C=C besteht aus σ (Kopf-an-Kopf, sp²) + π (seitlich, p_z). sp²-Hybridisierung, trigonal-planar.",
    "schwer",
    ["hybridisierung", "orbitale"]
  ),

  q(
    "ch-pool-8-003",
    "chem-kap1",
    "Das Stickstoffatom in NH₃ ist sp³-hybridisiert. Warum ist der H-N-H-Winkel (107°) kleiner als der ideale Tetraederwinkel (109,5°)?",
    [
      "Das freie Elektronenpaar beansprucht mehr Raum als ein bindenes Paar und drückt die Bindungen zusammen",
      "N hat eine geringere Elektronegativität als C, was die Bindungen streckt",
      "NH₃ hat sp²-Hybridisierung, daher 120°-Grundgeometrie",
      "Die Wasserstoffbrücken zwischen NH₃-Molekülen verkürzen den Winkel",
      "Das freie Paar liegt in einem s-Orbital und verändert den Winkel nicht",
    ],
    0,
    "Freie Elektronenpaare haben größere effektive Abstoßung (mehr Raumvolumen) als bindende Paare → Bindungswinkel komprimiert auf 107°.",
    "schwer",
    ["vsepr", "freie-elektronenpaare"]
  ),

  q(
    "ch-pool-8-004",
    "chem-kap1",
    "Acetylsalicylsäure (Aspirin) enthält eine Carbonylgruppe mit sp²-hybridisiertem Kohlenstoff. Welche Aussage zu diesem C-Atom stimmt?",
    [
      "3 σ-Bindungen, 1 freies Elektronenpaar, trigonal-planar",
      "3 σ-Bindungen, 1 π-Bindung zur Carbonyl-O, trigonal-planar",
      "4 σ-Bindungen, kein π-Anteil, tetraedrisch",
      "2 σ-Bindungen, 2 π-Bindungen, linear",
      "3 σ-Bindungen, 1 π-Bindung, trigonal-pyramidal",
    ],
    1,
    "sp²-C der Carbonylgruppe: 3 σ-Bindungen (trigonal-planar) + 1 π-Bindung (C=O aus p_z-Überlappung).",
    "schwer",
    ["sp2", "carbonyl"]
  ),

  q(
    "ch-pool-8-005",
    "chem-kap1",
    "Die Hund'sche Regel besagt, dass Elektronen ein Orbital erst nach Auffüllung gleicher Energie besetzen, bevor sie paaren. Welche Elektronenkonfiguration von Sauerstoff (Z=8) ist korrekt?",
    [
      "1s² 2s² 2p⁶ (volle zweite Schale, Neon-Konfiguration)",
      "1s² 2s² 2p⁴ mit 2 ungepaarten p-Elektronen",
      "1s² 2s¹ 2p⁵ (ein 2s-Elektron in den 2p-Bereich verschoben)",
      "1s² 2s² 2p² 2d² (mit d-Orbitalen in der zweiten Schale)",
      "1s² 2s² 2p³ 2s¹ (eine nicht-aufbaukonforme Verteilung)",
    ],
    1,
    "O: 1s² 2s² 2p⁴. Nach Hund: 2px↑↓, 2py↑, 2pz↑ → 2 ungepaarte Elektronen. O ist paramagnetisch.",
    "schwer",
    ["elektronenkonfiguration", "hund"]
  ),

  q(
    "ch-pool-8-006",
    "chem-kap1",
    "Acetylen (HC≡CH) hat sp-hybridisierte Kohlenstoffe. Wie viele σ- und π-Bindungen enthält das Molekül insgesamt?",
    ["3 σ, 0 π", "2 σ, 2 π", "3 σ, 2 π", "2 σ, 3 π", "4 σ, 1 π"],
    2,
    "HC≡CH: H-C σ (2×) + C-C σ (1×) = 3 σ; C≡C enthält 2 π-Bindungen (p_y + p_z). Gesamt: 3 σ + 2 π.",
    "schwer",
    ["sp", "dreifachbindung"]
  ),

  q(
    "ch-pool-8-007",
    "chem-kap1",
    "Das Ionisierungspotenzial von Natrium (Na, Z=11) beträgt 496 kJ/mol, das zweite 4562 kJ/mol. Was erklärt diesen enormen Sprung?",
    [
      "Das zweite Elektron wird aus einem energiereichen 3p-Orbital entfernt, das weniger stabil gebunden ist",
      "Nach Entfernung des ersten Elektrons liegt die Konfiguration [Ne] vor; das zweite Elektron muss aus der stabilen Edelgashülle herausgelöst werden",
      "Na kann nur ein Elektron abgeben, weil es ausschließlich eine einzige Valenzschale besitzt",
      "Der Sprung ist auf die Pauli-Abstoßung der Elektronen in der gleichen Schale zurückzuführen",
      "Das zweite Elektron liegt in einem 2s-Orbital mit deutlich höherer Hauptquantenzahl als das erste",
    ],
    1,
    "Nach Na→Na⁺ liegt [Ne]-Konfiguration vor. Das zweite Elektron muss aus der vollen n=2-Schale entfernt werden → dramatisch höhere Ionisierungsenergie.",
    "schwer",
    ["ionisierungsenergie", "edelgaskonfiguration"]
  ),

  q(
    "ch-pool-8-008",
    "chem-kap1",
    "Phosphor bildet PCl₅, obwohl es in der 3. Periode liegt. Welches Konzept erklärt, warum P eine Oktettregel-Ausnahme eingehen kann?",
    [
      "P nutzt sein 3d-Orbital als Hypervalenz-Erweiterung der Valenzschale",
      "P hat eine geringere Elektronegativität als N, daher kann es mehr Elektronen aufnehmen",
      "PCl₅ ist ein Ionenverbund, daher gelten andere Regeln",
      "P bildet tatsächlich kein PCl₅; diese Verbindung existiert nicht",
      "Das 4s-Orbital von P steht als Erweiterung zur Verfügung",
    ],
    0,
    "P (3. Periode) besitzt energetisch zugängliche 3d-Orbitale → Hypervalenz möglich; N (2. Periode) fehlen d-Orbitale, daher max. 8 Elektronen.",
    "schwer",
    ["hypervalenz", "3d-orbital"]
  ),

  q(
    "ch-pool-8-009",
    "chem-kap1",
    "Welche Hybridisierung besitzt das zentrale Schwefelatom in Schwefelsäure (H₂SO₄) und welche molekulare Geometrie resultiert?",
    [
      "sp², trigonal-planar",
      "sp³, tetraedrisch (verzerrt)",
      "sp³d, trigonal-bipyramidal",
      "sp²d, quadratisch-eben",
      "sp, linear",
    ],
    1,
    "S in H₂SO₄: sp³-hybridisiert mit 4 Liganden (2 OH, 2 =O) → verzerrter Tetraeder; Hypervalenz über 3d-Beteiligung.",
    "schwer",
    ["hybridisierung", "schwefelsäure"]
  ),

  q(
    "ch-pool-8-010",
    "chem-kap1",
    "Das Bohrsche Atommodell liefert für das Wasserstoffatom die Balmer-Formel. Welche Energie (in eV) wird beim Übergang von n=3 nach n=1 emittiert? (E_n = −13,6/n² eV)",
    ["12,09 eV", "10,20 eV", "1,51 eV", "13,6 eV", "3,40 eV"],
    0,
    "ΔE = 13,6(1/1² − 1/3²) = 13,6(1 − 1/9) = 13,6 × 8/9 ≈ 12,09 eV. Lyman-Serie (UV).",
    "schwer",
    ["bohr", "emission", "rechenfrage"]
  ),

  q(
    "ch-pool-8-011",
    "chem-kap1",
    "Chlor (Z=17) besitzt zwei stabile Isotope: ³⁵Cl (75,8%) und ³⁷Cl (24,2%). Berechne die mittlere Atommasse.",
    ["35,5 u", "36,0 u", "35,0 u", "36,5 u", "37,0 u"],
    0,
    "M = 0,758×35 + 0,242×37 = 26,53 + 8,95 = 35,48 ≈ 35,5 u.",
    "schwer",
    ["isotope", "atommasse", "rechenfrage"]
  ),

  q(
    "ch-pool-8-012",
    "chem-kap1",
    "Benzol (C₆H₆) zeigt keine typischen Alken-Reaktionen. Welches Orbital-Konzept erklärt die besondere Stabilität des aromatischen Systems?",
    [
      "6 lokalisierte σ-Bindungen bilden einen Käfig um den Ring",
      "6 p_z-Elektronen delokalisieren sich über das gesamte π-System (Hückel: 4n+2 mit n=1)",
      "Die sp²-Hybridisierung verhindert jede Additions­reaktion",
      "Benzol hat wechselnde Einfach- und Doppelbindungen, die zu schnell interkonvertieren",
      "Das freie Elektronenpaar am Sauerstoff stabilisiert den Ring",
    ],
    1,
    "Benzol: 6 sp²-C, je 1 unhybridisiertes p_z bildet delokalisiertes π-System (6e, 4n+2 mit n=1) → aromatische Stabilisierung, Resonanzenergie ~150 kJ/mol.",
    "schwer",
    ["aromatizitaet", "hückel", "delokalisierung"]
  ),

  // ── chem-kap2: Materie / Aggregatzustände / Löslichkeit ──────────────────
  q(
    "ch-pool-8-013",
    "chem-kap2",
    "Der osmotische Druck einer Glucoselösung (M=180 g/mol) beträgt bei 37°C 7,4 atm (physiologisch). Welche Konzentration liegt vor? (R=0,082 L·atm/mol·K)",
    ["0,29 mol/L", "0,10 mol/L", "0,50 mol/L", "1,00 mol/L", "0,15 mol/L"],
    0,
    "π = cRT → c = π/(RT) = 7,4/(0,082×310) = 7,4/25,42 ≈ 0,29 mol/L.",
    "schwer",
    ["osmose", "rechenfrage", "physiologie"]
  ),

  q(
    "ch-pool-8-014",
    "chem-kap2",
    "Natriumchlorid (NaCl) erhöht den osmotischen Druck einer Lösung doppelt so stark wie Glucose bei gleicher Molkonzentration. Warum?",
    [
      "NaCl hat eine höhere Molmasse",
      "NaCl dissoziiert vollständig in Na⁺ und Cl⁻ (van't Hoff-Faktor i=2)",
      "NaCl bildet Wasserstoffbrücken, Glucose nicht",
      "Natrium hat eine größere Hydratationshülle als Glucose",
      "NaCl senkt die Dichte des Wassers stärker",
    ],
    1,
    "Kolligativer Effekt: Anzahl gelöster Teilchen entscheidend. NaCl → 2 Ionen (i=2), Glucose bleibt molekular (i=1) → doppelter osmotischer Druck.",
    "schwer",
    ["kolligativ", "vant-hoff", "osmose"]
  ),

  q(
    "ch-pool-8-015",
    "chem-kap2",
    "Die Siedepunktserhöhung einer Lösung aus 10 g Harnstoff (M=60 g/mol) in 100 g Wasser beträgt ΔT_s = K_s × b. Mit K_s(Wasser) = 0,512 K·kg/mol, wie groß ist ΔT_s?",
    ["0,085 K", "0,854 K", "0,171 K", "1,71 K", "0,512 K"],
    1,
    "b = (10/60)/0,1 kg = 1,667 mol/kg. ΔT_s = 0,512 × 1,667 = 0,854 K.",
    "schwer",
    ["siedepunkt", "kolligativ", "rechenfrage"]
  ),

  q(
    "ch-pool-8-016",
    "chem-kap2",
    "Das Henry'sche Gesetz beschreibt die Löslichkeit von Gasen in Flüssigkeiten. Was passiert mit dem gelösten O₂-Gehalt im Blut, wenn der Partialdruck von O₂ auf die Hälfte sinkt (Höhenkrankheit)?",
    [
      "O₂-Gehalt verdoppelt sich (inverser Effekt)",
      "O₂-Gehalt bleibt konstant, da Hämoglobin puffert",
      "Gelöster O₂-Gehalt halbiert sich (Henry proportional)",
      "Gelöster O₂-Gehalt sinkt auf ein Viertel",
      "Kein Effekt, da O₂ nur gebunden transportiert wird",
    ],
    2,
    "Henry: c = k_H × p. Halbierung von p → Halbierung von c (gelöstes O₂). Hämoglobin-gebundenes O₂ folgt der Sauerstoffbindungskurve (sigmoid), aber physikalisch gelöst: linear.",
    "schwer",
    ["henry", "löslichkeit", "physiologie"]
  ),

  q(
    "ch-pool-8-017",
    "chem-kap2",
    "Ein Patient erhält eine hypotone Kochsalzlösung (0,45% NaCl statt 0,9%). Was geschieht mit den Erythrozyten?",
    [
      "Sie schrumpfen (Plasmolyse), weil Wasser in die Zelle eindringt",
      "Sie platzen (Hämolyse), weil Wasser osmotisch in die Zelle einströmt",
      "Keine Veränderung, Erythrozyten regulieren aktiv",
      "Sie werden steifer und verstopfen Kapillaren",
      "Sie werden flacher und verlieren Hämoglobin",
    ],
    1,
    "Hypotone Umgebung → osmotischer Einstrom von Wasser in Erythrozyten → Schwellung → Hämolyse. Isotonik ist bei 0,9% NaCl (≈ 308 mOsmol/L).",
    "schwer",
    ["osmose", "hämolyse", "physiologie"]
  ),

  q(
    "ch-pool-8-018",
    "chem-kap2",
    "Das Phasendiagramm von Wasser zeigt einen Tripelpunkt bei 0,006 atm / 0,01°C. Was bedeutet das für Gefriertrocknung (Lyophilisation) in der Pharmazie?",
    [
      "Oberhalb des Tripelpunkts sublimiert Wasser direkt, daher muss Druck < 0,006 atm sein",
      "Unterhalb des Tripelpunkts verdampft Wasser ohne Schmelzphase, daher ist p < 0,006 atm nötig",
      "Der Tripelpunkt ist irrelevant; Gefriertrocknung läuft bei 1 atm ab",
      "Man erhöht den Druck über 1 atm, damit Eis sublimiert",
      "Der Tripelpunkt gibt die minimale Temperatur für Sublimation an",
    ],
    1,
    "Lyophilisation: Produkt einfrieren, dann p unter Tripelpunkt (< 0,006 atm) senken → Eis sublimiert direkt zu Wasserdampf, keine Flüssigphase → schonende Trocknung.",
    "schwer",
    ["phasendiagramm", "sublimation", "pharmazie"]
  ),

  q(
    "ch-pool-8-019",
    "chem-kap2",
    "Die van-der-Waals-Gleichung lautet (p + a/V²)(V-b) = nRT. Warum zeigt reales CO₂ bei hohem Druck stärkere Abweichung vom idealen Gas als He?",
    [
      "CO₂ hat größere Moleküle und stärkere London-Dispersionskräfte (höheres a)",
      "He ist schwerer als CO₂ und komprimierbarer",
      "CO₂ hat einen kleineren Eigenvolumenterm b",
      "He besitzt freie Elektronen, die ideales Verhalten verhindern",
      "CO₂ dissoziiert bei hohem Druck in C und O₂",
    ],
    0,
    "CO₂: lineare Moleküle mit polarisierbarem π-System → starke London-Kräfte (großes a) + endliches Eigenvolumen b. He: einatomig, kaum polarisierbar → nahezu ideal.",
    "schwer",
    ["reale-gase", "van-der-waals"]
  ),

  q(
    "ch-pool-8-020",
    "chem-kap2",
    "Berechne den Dampfdruck einer Lösung aus 0,1 mol NaCl in 1 mol Wasser (Raoultsches Gesetz, p°(H₂O) = 23,8 mmHg bei 25°C). NaCl dissoziiert vollständig.",
    ["23,8 mmHg", "21,3 mmHg", "20,5 mmHg", "22,3 mmHg", "19,8 mmHg"],
    4,
    "NaCl → Na⁺ + Cl⁻ → 0,2 mol Ionen. x(H₂O) = 1/(1+0,2) = 0,833. p = 0,833 × 23,8 ≈ 19,8 mmHg.",
    "schwer",
    ["raoult", "dampfdruck", "rechenfrage"]
  ),

  q(
    "ch-pool-8-021",
    "chem-kap2",
    "Ethanol und Wasser bilden ein positives Azeotrop bei 95,6% Ethanol (78,1°C). Was bedeutet das für die Destillation?",
    [
      "Man kann reines Ethanol (100%) durch einfache Destillation erhalten",
      "Die Mischung kann über das Azeotrop hinaus nicht weiter getrennt werden; absoluter Alkohol erfordert Molekularsieb",
      "Das Azeotrop zeigt negativen Dampfdruckexzess (H-Brücken)",
      "Unterhalb 78,1°C siedet die Mischung, nicht reines Ethanol",
      "Das Azeotrop entsteht durch chemische Reaktion von Ethanol und Wasser",
    ],
    1,
    "Positives Azeotrop = Dampfdruckmaxima, Siedepunktminimum. Destillation liefert max. 95,6% EtOH. Für >99% Ethanol braucht man Molekularsiebe oder azeotrope Destillation mit Cyclohexan.",
    "schwer",
    ["azeotrop", "destillation"]
  ),

  q(
    "ch-pool-8-022",
    "chem-kap2",
    "Ein Arznei­mittel hat eine Löslichkeit von 0,2 mg/mL in Wasser. Die therapeutische Konzentration im Plasma beträgt 5 µg/mL. Welcher Löslichkeitsansatz wäre zur Formulierungsoptimierung am direktesten geeignet?",
    [
      "Erhöhung der Temperatur auf 80°C",
      "Verwendung von Cyclodextrinen zur Komplexierung (Löslichkeitsvermittlung)",
      "Verringerung der Partikelgröße allein (Auflösungsrate, nicht Gleichgewichtslöslichkeit)",
      "Zugabe von NaCl (Aussalzeffekt)",
      "Senkung des pH auf 0 für alle Substanzen",
    ],
    1,
    "Cyclodextrine bilden Einschluss­komplexe mit hydrophoben Molekülen → drastische Löslichkeitserhöhung. Nur Option B adressiert die Gleichgewichts­löslichkeit direkt und pharmazeutisch realistisch.",
    "schwer",
    ["löslichkeit", "formulierung", "cyclodextrin"]
  ),

  q(
    "ch-pool-8-023",
    "chem-kap2",
    "Der Verteilungskoeffizient P (logP) eines Wirkstoffs zwischen Octanol und Wasser beträgt logP = 2. Was bedeutet das für die orale Bioverfügbarkeit?",
    [
      "Sehr hohe Wasserlöslichkeit und dadurch schlechte passive Membranpassage (hydrophil)",
      "Gute Lipophilie (Verhältnis 100:1 in Octanol) → gute Membranpermeation, aber möglicherweise schlechte wässrige Löslichkeit",
      "logP = 2 entspricht einem hydrophilen Molekül mit guter Wasserlöslichkeit und geringer Lipophilie",
      "Kein Einfluss auf die Resorption im GI-Trakt, nur auf die renale Clearance und Ausscheidung",
      "logP > 0 bedeutet vollständige Unlöslichkeit in wässrigen Medien bei physiologischem pH",
    ],
    1,
    "logP = 2 → [Octanol]/[Wasser] = 100:1 → lipophil genug für Membranpassage. Optimale orale Bioverfügbarkeit bei logP 1–3 (Lipinski Rule of 5).",
    "schwer",
    ["logp", "bioverfügbarkeit", "lipinski"]
  ),

  q(
    "ch-pool-8-024",
    "chem-kap2",
    "Calciumphosphat (Ca₃(PO₄)₂) hat ein Löslichkeitsprodukt K_sp = 2,07 × 10⁻³³. Warum ist diese Verbindung so schwer löslich, und was hat das für die Knochenchemie zu bedeuten?",
    [
      "K_sp ist groß, also sehr löslich; Knochen lösen sich leicht",
      "Kleines K_sp bedeutet extrem geringe Ionenkonzentration im Gleichgewicht; ideal für Knochenmatrix-Stabilität",
      "Ca₃(PO₄)₂ ist wasserlöslich, da Calcium zweifach geladen ist",
      "Das K_sp gilt nur für saure Lösungen; im Blut ist es irrelevant",
      "K_sp beschreibt nur kinetische Lösungsrate, nicht Gleichgewicht",
    ],
    1,
    "K_sp = [Ca²⁺]³[PO₄³⁻]² = 2,07×10⁻³³. Extrem klein → Gleichgewichtskonzentrationen minimal → Knochenmatrix bleibt stabil. Paraathyroidhormon mobilisiert Ca²⁺ durch Verschiebung dieses Gleichgewichts.",
    "schwer",
    ["ksp", "löslichkeitsprodukt", "knochen"]
  ),

  // ── chem-kap3: Stöchiometrie ─────────────────────────────────────────────
  q(
    "ch-pool-8-025",
    "chem-kap3",
    "Bei der Verbrennung von Glucose (C₆H₁₂O₆) nach C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O: Welche Masse CO₂ entsteht aus 36 g Glucose? (M: C=12, H=1, O=16)",
    ["52,8 g", "26,4 g", "44,0 g", "88,0 g", "106 g"],
    0,
    "M(C₆H₁₂O₆)=180 g/mol. n=36/180=0,2 mol. Pro mol Glucose: 6 mol CO₂ → 1,2 mol CO₂. m=1,2×44=52,8 g.",
    "schwer",
    ["stöchiometrie", "verbrennung", "rechenfrage"]
  ),

  q(
    "ch-pool-8-026",
    "chem-kap3",
    "Haber-Bosch-Prozess: N₂ + 3H₂ ⇌ 2NH₃. Welches Volumen NH₃ (in L bei STP, 22,4 L/mol) entsteht aus 5,6 L N₂ und 22,4 L H₂?",
    ["22,4 L", "11,2 L", "16,8 L", "5,6 L", "44,8 L"],
    1,
    "Bei STP: 5,6 L N₂ = 0,25 mol; 22,4 L H₂ = 1 mol. Stöchiometrie: 0,25 mol N₂ braucht 0,75 mol H₂ → H₂ im Überschuss. Limitierend: N₂ → 0,5 mol NH₃ = 11,2 L.",
    "schwer",
    ["stöchiometrie", "haber-bosch", "rechenfrage"]
  ),

  q(
    "ch-pool-8-027",
    "chem-kap3",
    "Eine Lösung enthält 4,9 g H₂SO₄ (M=98 g/mol) in 500 mL. Ein Arzt setzt 250 mL dieser Lösung mit überschüssiger NaOH um. Wie viel Gramm NaOH (M=40 g/mol) werden verbraucht? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
    ["4,0 g", "2,0 g", "8,0 g", "1,0 g", "16,0 g"],
    1,
    "c(H₂SO₄)=4,9/98/0,5=0,1 mol/L. n(H₂SO₄) in 250 mL = 0,025 mol. n(NaOH) = 2×0,025 = 0,05 mol. m=0,05×40=2,0 g.",
    "schwer",
    ["stöchiometrie", "neutralisation", "rechenfrage"]
  ),

  q(
    "ch-pool-8-028",
    "chem-kap3",
    "Bei der Elektrolyse von Wasser (2H₂O → 2H₂ + O₂) werden 2,016 g H₂ erzeugt. Welches Volumen O₂ (STP) entsteht gleichzeitig?",
    ["22,4 L", "11,2 L", "5,6 L", "44,8 L", "1,12 L"],
    1,
    "n(H₂) = 2,016/2,016 = 1 mol. 2 mol H₂ pro 1 mol O₂ → 0,5 mol O₂ → V = 0,5 × 22,4 = 11,2 L.",
    "schwer",
    ["elektrolyse", "stöchiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-029",
    "chem-kap3",
    "Welche Masse Eisen (M=56 g/mol) scheidet sich ab, wenn 2 Faraday elektrische Ladung durch eine FeCl₃-Lösung fließen? (Fe³⁺ + 3e⁻ → Fe; 1 F = Ladung für 1 mol e⁻)",
    ["37,3 g", "56,0 g", "18,7 g", "112 g", "28,0 g"],
    0,
    "2 mol e⁻ für Fe³⁺→Fe (braucht 3e⁻/Fe): n(Fe) = 2/3 = 0,667 mol. m = 0,667×56 = 37,3 g.",
    "schwer",
    ["elektrolyse", "faraday", "rechenfrage"]
  ),

  q(
    "ch-pool-8-030",
    "chem-kap3",
    "Ein Pharmabetrieb stellt Aspirin (M=180 g/mol) aus Salicylsäure (M=138 g/mol) und Essigsäureanhydrid (M=102 g/mol) her. Ausbeute: 75%. Welche Masse Aspirin erhält man aus 276 g Salicylsäure?",
    ["270 g", "360 g", "180 g", "540 g", "480 g"],
    0,
    "n(Salicylsäure)=276/138=2 mol → theoretisch 2 mol Aspirin = 360 g. 75% Ausbeute → 0,75×360=270 g.",
    "schwer",
    ["ausbeute", "stöchiometrie", "pharmazie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-031",
    "chem-kap3",
    "Die Summenformel einer unbekannten Verbindung ergibt per Elementaranalyse: 40,0% C, 6,7% H, 53,3% O (Gew.-%). Berechne die Molekülformel, wenn M≈180 g/mol.",
    ["CH₂O (Formaldehyd)", "C₃H₆O₃", "C₆H₁₂O₆ (Glucose)", "C₂H₄O₂ (Essigsäure)", "C₄H₈O₄"],
    2,
    "Mol-Verhältnis: C: 40/12=3,33; H: 6,7/1=6,7; O: 53,3/16=3,33 → Verhältnis 1:2:1 → Empirisch CH₂O. M(CH₂O)=30. 180/30=6 → Molekülformel C₆H₁₂O₆.",
    "schwer",
    ["molekülformel", "elementaranalyse", "rechenfrage"]
  ),

  q(
    "ch-pool-8-032",
    "chem-kap3",
    "Wie viele Liter CO₂ (STP) entstehen, wenn 10 g CaCO₃ (M=100 g/mol) mit überschüssiger HCl reagieren? (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂)",
    ["2,24 L", "4,48 L", "1,12 L", "22,4 L", "0,56 L"],
    0,
    "n(CaCO₃)=10/100=0,1 mol → 0,1 mol CO₂ → V=0,1×22,4=2,24 L.",
    "schwer",
    ["stöchiometrie", "co2", "rechenfrage"]
  ),

  q(
    "ch-pool-8-033",
    "chem-kap3",
    "Titration: 25 mL einer unbekannten H₂SO₄-Lösung werden mit 35 mL 0,2 mol/L NaOH neutralisiert. (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O). Berechne die Konzentration der Säure.",
    ["0,14 mol/L", "0,28 mol/L", "0,07 mol/L", "0,35 mol/L", "0,56 mol/L"],
    0,
    "n(NaOH)=0,035×0,2=0,007 mol. n(H₂SO₄)=0,007/2=0,0035 mol. c=0,0035/0,025=0,14 mol/L.",
    "schwer",
    ["titration", "stöchiometrie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-034",
    "chem-kap3",
    "Bicarbonat (HCO₃⁻) dient als Puffer im Blut. Wie viele Millimol HCO₃⁻ (M=61 g/mol) sind in 1 L Blut bei einem physiologischen Gehalt von 24 mmol/L gelöst? (konzeptuelle Frage: Bedeutung für Puffersystem)",
    [
      "24 mmol – entspricht der Henderson-Hasselbalch-Konzentration für pH 7,4",
      "12 mmol – nur das ionisierte Bicarbonat zählt",
      "48 mmol – doppelter Wert wegen zweifacher Ionisation",
      "61 mmol – entspricht einer molaren Lösung",
      "2,4 mmol – 10-fach verdünnt für Sicherheit",
    ],
    0,
    "Physiologisch: [HCO₃⁻] = 24 mmol/L. In 1 L Blut = 24 mmol. Dieser Wert definiert zusammen mit pCO₂ über Henderson-Hasselbalch den Blut-pH (pH = 6,1 + log(24/1,2) ≈ 7,4).",
    "schwer",
    ["puffer", "bicarbonat", "physiologie"]
  ),

  q(
    "ch-pool-8-035",
    "chem-kap3",
    "Die molare Masse von Insulin beträgt ca. 5808 g/mol. Wie viele Insulinmoleküle sind in einer 100-IE-Spritze mit 0,1 mL einer 100 IE/mL = 3,47 mg/mL Lösung enthalten? (Nₐ = 6,02×10²³)",
    ["3,59 × 10¹⁶", "3,59 × 10¹⁹", "3,59 × 10¹³", "6,02 × 10²³", "1,00 × 10²³"],
    0,
    "m = 3,47 mg/mL × 0,1 mL = 0,347 mg = 3,47×10⁻⁴ g. n = 3,47×10⁻⁴/5808 = 5,97×10⁻⁸ mol. N = 5,97×10⁻⁸ × 6,02×10²³ = 3,59×10¹⁶.",
    "schwer",
    ["stöchiometrie", "avogadro", "pharmazie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-036",
    "chem-kap3",
    "Bei einer Redox-Titration mit Kaliumpermanganat (KMnO₄) im sauren Medium: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Wie viele mol Fe²⁺ werden von 0,01 mol KMnO₄ oxidiert?",
    ["0,01 mol", "0,05 mol", "0,02 mol", "0,10 mol", "0,005 mol"],
    1,
    "Elektronenbilanz: 1 mol MnO₄⁻ nimmt 5e⁻ auf. Fe²⁺→Fe³⁺ gibt je 1e⁻ ab. 0,01 mol MnO₄⁻ × 5 = 0,05 mol Fe²⁺.",
    "schwer",
    ["redox", "permanganat", "rechenfrage"]
  ),

  // ── chem-kap4: Thermodynamik / Kinetik ──────────────────────────────────
  q(
    "ch-pool-8-037",
    "chem-kap4",
    "Hess'scher Satz: Berechne ΔH der Reaktion C(s) + ½O₂(g) → CO(g) aus folgenden Daten:\n(1) C + O₂ → CO₂, ΔH₁ = −394 kJ/mol\n(2) CO + ½O₂ → CO₂, ΔH₂ = −283 kJ/mol",
    ["−111 kJ/mol", "−677 kJ/mol", "+111 kJ/mol", "−394 kJ/mol", "−283 kJ/mol"],
    0,
    "Ziel: (1) − (2): ΔH = ΔH₁ − ΔH₂ = −394 − (−283) = −394 + 283 = −111 kJ/mol.",
    "schwer",
    ["hess", "thermodynamik", "rechenfrage"]
  ),

  q(
    "ch-pool-8-038",
    "chem-kap4",
    "Die Bildungsenthalpie von Wasser (flüssig) beträgt ΔH_f = −286 kJ/mol. Welche Energie wird beim Verbrennen von 2 g H₂ (M=2 g/mol) freigesetzt?",
    ["286 kJ", "143 kJ", "572 kJ", "71,5 kJ", "1144 kJ"],
    0,
    "n(H₂) = 2/2 = 1 mol. ΔH = 1 × (−286) kJ → Energie freigesetzt = 286 kJ.",
    "schwer",
    ["verbrennung", "thermodynamik", "rechenfrage"]
  ),

  q(
    "ch-pool-8-039",
    "chem-kap4",
    "Die Arrhenius-Gleichung lautet k = A·e^(−Ea/RT). Wie ändert sich die Reaktionsgeschwindigkeit, wenn die Aktivierungsenergie von 80 kJ/mol auf 60 kJ/mol sinkt (T=300 K, R=8,314 J/mol·K)?",
    [
      "Sie verdoppelt sich",
      "Sie steigt um das ~3000-fache",
      "Sie steigt um 33%",
      "Sie sinkt, da niedrigere Aktivierungsenergie den Frequenzfaktor senkt",
      "Sie steigt um das 10-fache",
    ],
    1,
    "Δ(Ea/RT) = 20000/(8,314×300) = 8,02. Ratio = e^8,02 ≈ 3020-fach. Deutliche Beschleunigung bei kleinerem Ea.",
    "schwer",
    ["arrhenius", "kinetik", "rechenfrage"]
  ),

  q(
    "ch-pool-8-040",
    "chem-kap4",
    "Gibbs-Enthalpie: ΔG = ΔH − TΔS. Eine Reaktion hat ΔH = −50 kJ/mol und ΔS = −100 J/mol·K. Bei welcher Temperatur wechselt die Reaktion von spontan zu nicht-spontan?",
    ["500 K", "50 K", "250 K", "1000 K", "100 K"],
    0,
    "ΔG = 0 wenn ΔH = TΔS → T = ΔH/ΔS = 50000 J/mol / 100 J/mol·K = 500 K. Für T<500 K ist ΔG<0 (spontan).",
    "schwer",
    ["gibbs", "thermodynamik", "rechenfrage"]
  ),

  q(
    "ch-pool-8-041",
    "chem-kap4",
    "Das Gleichgewicht N₂O₄ ⇌ 2NO₂ hat Kc = 4,6×10⁻³ bei 25°C. Was bedeutet K < 1 für die Gleichgewichtslage, und wie beeinflusst Druckerhöhung das Gleichgewicht?",
    [
      "K<1: Edukte bevorzugt; Druckerhöhung verschiebt zu NO₂ (2 mol Gasseite)",
      "K<1: Edukte bevorzugt; Druckerhöhung verschiebt zurück zu N₂O₄ (weniger Mole)",
      "K<1: Produkte bevorzugt; Druckerhöhung hat keinen Effekt",
      "K<1: Gleichgewicht liegt mittig; Druck irrelevant",
      "K<1: Produkte bevorzugt; Druckerhöhung verschiebt zu N₂O₄",
    ],
    1,
    "Kc<1 → Eduktseitige Lage (mehr N₂O₄). Druckerhöhung: Le Chatelier → Seite mit weniger Gasmolekülen bevorzugt: 1 mol N₂O₄ vs. 2 mol NO₂ → Gleichgewicht verschiebt zu N₂O₄.",
    "schwer",
    ["gleichgewicht", "le-chatelier", "kinetik"]
  ),

  q(
    "ch-pool-8-042",
    "chem-kap4",
    "Enzymkinetik nach Michaelis-Menten: K_M = 2 mM, v_max = 10 µmol/min. Berechne v bei [S] = 6 mM.",
    ["7,5 µmol/min", "5,0 µmol/min", "3,0 µmol/min", "10,0 µmol/min", "2,5 µmol/min"],
    0,
    "v = v_max × [S]/(K_M + [S]) = 10 × 6/(2+6) = 60/8 = 7,5 µmol/min.",
    "mittel",
    ["michaelis-menten", "enzymkinetik", "rechenfrage"]
  ),

  q(
    "ch-pool-8-043",
    "chem-kap4",
    "Bei einer Reaktion 1. Ordnung beträgt die Halbwertszeit t₁/₂ = 10 min. Wie viel Prozent der Ausgangssubstanz verbleiben nach 30 min?",
    ["25%", "12,5%", "50%", "6,25%", "37,5%"],
    1,
    "30 min = 3 Halbwertszeiten. Nach jeder t₁/₂ halbiert sich die Menge: 100% → 50% → 25% → 12,5%.",
    "schwer",
    ["reaktionsordnung", "halbwertszeit", "rechenfrage"]
  ),

  q(
    "ch-pool-8-044",
    "chem-kap4",
    "Der Gleichgewichtskonstante K_p einer Reaktion A(g) ⇌ B(g) + C(g) beträgt 0,25 atm bei 400°C. Bei welchem Ausgangsdruck p_A entsteht ein Gleichgewicht mit p_B = p_C = 0,1 atm?",
    ["0,04 atm", "0,14 atm", "0,40 atm", "0,25 atm", "0,50 atm"],
    1,
    "K_p = x²/(p_A0−x) = 0,25; x=p_B=p_C=0,1. 0,01/(p_A0−0,1)=0,25 → p_A0−0,1=0,04 → p_A0=0,14 atm.",
    "schwer",
    ["gleichgewicht", "kp", "rechenfrage"]
  ),

  q(
    "ch-pool-8-045",
    "chem-kap4",
    "Ein kompetitiver Inhibitor erhöht den apparenten K_M eines Enzyms, ohne v_max zu verändern. Welche Reaktion auf Substrat­überschuss ist klinisch relevant?",
    [
      "Inhibition ist irreversibel und kann durch Substrat nicht überwunden werden",
      "Bei hoher Substratkonzentration wird der Inhibitor verdrängt; v_max bleibt erreichbar",
      "v_max sinkt irreversibel; K_M bleibt konstant",
      "Inhibitor und Substrat binden an verschiedene Stellen; K_M erhöht sich permanent",
      "Kompetitive Inhibition ist identisch mit unkompetitiver Hemmung",
    ],
    1,
    "Kompetitiv: Inhibitor bindet reversibel am aktiven Zentrum; Substrat verdrängt ihn bei hoher [S]. v_max unverändert, K_M app erhöht. Klinische Relevanz: z.B. Methotrexat (DHFR-Hemmung) bei Folsäure-Überdosierung.",
    "schwer",
    ["enzymhemmung", "michaelis-menten", "pharmakologie"]
  ),

  q(
    "ch-pool-8-046",
    "chem-kap4",
    "Die Nernst-Gleichung E = E° − (RT/nF)·ln Q. Berechne das Zellpotenzial einer Zn/Cu-Zelle bei 25°C wenn [Zn²⁺] = 0,1 mol/L und [Cu²⁺] = 1 mol/L. E°(Zelle) = 1,10 V, n=2. (RT/F = 0,0257 V)",
    ["1,13 V", "1,10 V", "1,07 V", "0,97 V", "1,20 V"],
    0,
    "Q = [Zn²⁺]/[Cu²⁺] = 0,1/1 = 0,1. E = 1,10 − (0,0257/2)·ln(0,1) = 1,10 − 0,01285×(−2,303) = 1,10 + 0,0296 ≈ 1,13 V.",
    "mittel",
    ["nernst", "elektrochemie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-047",
    "chem-kap4",
    "Eine galvanische Zelle (Daniell-Element) hat E° = +1,10 V bei Standardbedingungen. Welches Vorzeichen hat ΔG°, und welche Aussage ist korrekt?",
    [
      "ΔG° > 0, Reaktion nicht spontan",
      "ΔG° < 0, Reaktion spontan; ΔG° = −nFE° = −2×96485×1,10 ≈ −212 kJ/mol",
      "ΔG° = 0, System im Gleichgewicht",
      "E° positiv bedeutet endotherme Reaktion",
      "ΔG° und E° sind unabhängig voneinander",
    ],
    1,
    "ΔG° = −nFE°. E°>0 → ΔG°<0 → Reaktion spontan. ΔG°= −2×96485×1,10 = −212,3 kJ/mol.",
    "schwer",
    ["gibbs", "galvanisch", "elektrochemie"]
  ),

  q(
    "ch-pool-8-048",
    "chem-kap4",
    "Welcher Prozess hat ΔS > 0 und ΔH > 0, aber ΔG < 0 bei hoher Temperatur?",
    [
      "Kristallisation aus einer Schmelze",
      "Auflösung von NaCl in Wasser (immer spontan)",
      "Schmelzen von Eis bei T > 0°C",
      "Bildung von N₂ aus N und N (kovalente Bindung)",
      "Kondensation von Wasserdampf",
    ],
    2,
    "Schmelzen: ΔH>0 (endotherm), ΔS>0 (Ordnung sinkt). ΔG = ΔH − TΔS. Bei T>T_Schmelz dominiert −TΔS → ΔG<0 → spontan.",
    "schwer",
    ["gibbs", "entropie", "thermodynamik"]
  ),

  // ── chem-kap5: Säure-Base / Puffer ──────────────────────────────────────
  q(
    "ch-pool-8-049",
    "chem-kap5",
    "Berechne den pH einer 0,1 mol/L Essigsäurelösung (Ka = 1,8×10⁻⁵).",
    ["pH 2,87", "pH 3,87", "pH 2,37", "pH 1,00", "pH 4,74"],
    0,
    "[H⁺] = √(Ka×c) = √(1,8×10⁻⁵×0,1) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L. pH = −log(1,34×10⁻³) = 2,87.",
    "schwer",
    ["ph-berechnung", "schwache-säure", "rechenfrage"]
  ),

  q(
    "ch-pool-8-050",
    "chem-kap5",
    "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). Ein Acetatpuffer (pKa=4,75) enthält 0,1 mol/L Essigsäure und 0,2 mol/L Natriumacetat. Berechne pH.",
    ["5,05", "4,45", "4,75", "5,35", "3,75"],
    0,
    "pH = 4,75 + log(0,2/0,1) = 4,75 + log(2) = 4,75 + 0,301 = 5,05.",
    "schwer",
    ["henderson-hasselbalch", "puffer", "rechenfrage"]
  ),

  q(
    "ch-pool-8-051",
    "chem-kap5",
    "Das Blut-Puffersystem: pH = 6,1 + log([HCO₃⁻]/[CO₂]). Normwerte: [HCO₃⁻] = 24 mmol/L, [CO₂] = 1,2 mmol/L. Ein Patient mit respiratorischer Azidose hat [CO₂] = 2,4 mmol/L. Berechne den neuen pH.",
    ["pH 7,10", "pH 7,40", "pH 6,80", "pH 7,70", "pH 7,25"],
    0,
    "pH = 6,1 + log(24/2,4) = 6,1 + log(10) = 6,1 + 1,0 = 7,10.",
    "schwer",
    ["blutpuffer", "azidose", "rechenfrage"]
  ),

  q(
    "ch-pool-8-052",
    "chem-kap5",
    "Eine Lösung mit pH 9 enthält welche [OH⁻]-Konzentration bei 25°C (Kw = 10⁻¹⁴)?",
    ["10⁻⁹ mol/L", "10⁻⁵ mol/L", "10⁻⁷ mol/L", "10⁻³ mol/L", "10⁻¹¹ mol/L"],
    1,
    "pOH = 14 − 9 = 5 → [OH⁻] = 10⁻⁵ mol/L.",
    "schwer",
    ["ph", "poh", "rechenfrage"]
  ),

  q(
    "ch-pool-8-053",
    "chem-kap5",
    "Welche Kombination ergibt einen effektiven Puffer nahe pH 7,4 (physiologisch)? (pKa: H₂CO₃=6,1; H₂PO₄⁻=7,2; NH₄⁺=9,2; CH₃COOH=4,75)",
    [
      "Essigsäure/Acetat (pKa 4,75)",
      "Ammoniak/Ammonium (pKa 9,2)",
      "Phosphat (H₂PO₄⁻/HPO₄²⁻, pKa 7,2)",
      "Bicarbonat (pKa 6,1)",
      "Keine dieser Kombinationen",
    ],
    2,
    "Effektiver Puffer: pKa ±1 um Ziel-pH (7,4). H₂PO₄⁻/HPO₄²⁻ mit pKa 7,2 liegt am nächsten. Phosphat ist zellinterner Puffer.",
    "schwer",
    ["puffer", "physiologie", "pka"]
  ),

  q(
    "ch-pool-8-054",
    "chem-kap5",
    "Metabolische Alkalose (pH 7,55, [HCO₃⁻] = 35 mmol/L). Welche respiratorische Kompensation ist zu erwarten?",
    [
      "Hyperventilation → CO₂ abatmen → pH sinkt",
      "Hypoventilation → CO₂ ansteigen → mehr [H₂CO₃] → pH sinkt Richtung normal",
      "Niere scheidet HCO₃⁻ aus → sofortige Korrektur in Minuten",
      "Hyperventilation → pH steigt weiter",
      "Keine Kompensation möglich bei metabolischer Ursache",
    ],
    1,
    "Bei metabolischer Alkalose: Überschuss HCO₃⁻ → pH↑. Kompensation: Hypoventilation → pCO₂↑ → H₂CO₃↑ → H⁺↑ → pH↓ Richtung Normwert.",
    "schwer",
    ["säure-base", "alkalose", "physiologie"]
  ),

  q(
    "ch-pool-8-055",
    "chem-kap5",
    "Aspirin (Acetylsalicylsäure, pKa=3,5) wird oral eingenommen. Bei Magen-pH 2, welcher Anteil liegt un-ionisiert vor? (Henderson-Hasselbalch für % un-ionisiert)",
    [
      "76% un-ionisiert",
      "24% un-ionisiert",
      "50% un-ionisiert",
      "99% un-ionisiert",
      "1% un-ionisiert",
    ],
    3,
    "pH=2, pKa=3,5: pH−pKa=−1,5 → [A⁻]/[HA]=10⁻¹·⁵≈0,032. %un-ionisiert=1/(1+0,032)×100≈97%≈99%.",
    "schwer",
    ["henderson-hasselbalch", "ionisation", "pharmazie", "rechenfrage"]
  ),

  q(
    "ch-pool-8-056",
    "chem-kap5",
    "Die Pufferkapazität β = dn/dpH ist bei pH = pKa maximal. Ein Phosphatpuffer mit pKa=7,2 hat bei pH 7,2 maximale β. Was passiert mit β, wenn man 0,05 mol HCl zu 1 L eines 0,1 M Phosphatpuffers (pH 7,2) gibt?",
    [
      "pH sinkt auf 6,2 (unkontrollierte Azidifizierung)",
      "pH sinkt leicht (ca. 0,4 Einheiten); Puffer neutralisiert größten Teil",
      "pH bleibt exakt konstant (idealer Puffer)",
      "pH steigt, da HCl den Puffer aktiviert",
      "pH sinkt auf 0 sofort",
    ],
    1,
    "Puffer bei pKa max. kapazitiv. Henderson-Hasselbalch: neue [H₂PO₄⁻]/[HPO₄²⁻] = (0,05+0,05)/0,05 = 2 → pH = 7,2 + log(0,5) = 7,2 − 0,3 = 6,9. Senkung um ~0,3 Einheiten.",
    "schwer",
    ["pufferkapazität", "phosphat", "rechenfrage"]
  ),

  q(
    "ch-pool-8-057",
    "chem-kap5",
    "Salzsäure (HCl, starke Säure) und Essigsäure (CH₃COOH, schwache Säure) haben bei gleicher Molkonzentration 0,1 mol/L unterschiedliche pH-Werte. Welche Aussage ist korrekt?",
    [
      "HCl hat höheren pH, weil sie stärker dissoziiert",
      "CH₃COOH hat niedrigeren pH, weil sie mehr H⁺ abgibt",
      "HCl: pH=1,0; CH₃COOH: pH≈2,87 (partielle Dissoziation)",
      "Beide haben pH=1,0, da gleiche Konzentration",
      "pH hängt nur von der Konzentration, nicht der Säurestärke ab",
    ],
    2,
    "HCl vollständig dissoziiert: [H⁺]=0,1 → pH=1,0. CH₃COOH partiell: [H⁺]=√(1,8×10⁻⁵×0,1)=1,34×10⁻³ → pH≈2,87.",
    "schwer",
    ["starke-schwache-säure", "ph-vergleich"]
  ),

  q(
    "ch-pool-8-058",
    "chem-kap5",
    "Amphotere Aminosäuren haben zwei pKa-Werte (α-COOH und α-NH₃⁺). Für Glycin: pKa1=2,34, pKa2=9,60. Bei welchem pH liegt der isoelektrische Punkt (pI)?",
    ["5,97", "2,34", "9,60", "7,00", "6,00"],
    0,
    "pI = (pKa1 + pKa2)/2 = (2,34 + 9,60)/2 = 11,94/2 = 5,97.",
    "schwer",
    ["aminosäure", "isoelektrisch", "rechenfrage"]
  ),

  q(
    "ch-pool-8-059",
    "chem-kap5",
    "Kohlensäure (H₂CO₃) ist eine zweiprotonige Säure (pKa1=6,35, pKa2=10,33). Im venösen Blut mit pH=7,35, welche Species dominiert?",
    [
      "H₂CO₃ (undissoziiert)",
      "HCO₃⁻ (Monohydrogencarbonat) dominiert klar",
      "CO₃²⁻ (Carbonat) ist Hauptspecies",
      "Gleichgewicht 50:50 zwischen H₂CO₃ und HCO₃⁻",
      "Alle Species in gleicher Menge",
    ],
    1,
    "pH 7,35 >> pKa1 (6,35) → erste Dissoziation weit rechts → HCO₃⁻ dominiert. pH 7,35 << pKa2 (10,33) → zweite Dissoziation kaum → kein CO₃²⁻. HCO₃⁻ ist Hauptform.",
    "schwer",
    ["diprotisch", "bicarbonat", "physiologie"]
  ),

  q(
    "ch-pool-8-060",
    "chem-kap5",
    "Ein Patient hat Nierenversagen mit Unfähigkeit, H⁺ zu sezernieren und HCO₃⁻ zu reabsorbieren. Welche Säure-Base-Störung und welcher Kompensationsmechanismus tritt auf?",
    [
      "Respiratorische Alkalose; die Niere scheidet vermehrt HCO₃⁻ aus, um den pH zu normalisieren",
      "Metabolische Azidose (Akkumulation von H⁺, HCO₃⁻↓); Kompensation: Hyperventilation (CO₂ abatmen)",
      "Metabolische Alkalose; die Atemfrequenz sinkt kompensatorisch, um CO₂ im Blut zu retinieren",
      "Respiratorische Azidose; die Niere kompensiert sofort durch vermehrte H⁺-Sekretion im Tubulus",
      "Kein Säure-Base-Problem bei Nierenversagen, da die Lunge alle Störungen kompensieren kann",
    ],
    1,
    "Nierenversagen → H⁺ akkumuliert, HCO₃⁻ sinkt → metabolische Azidose. Kompensation: Atemzentrum stimuliert → Hyperventilation → CO₂↓ → H₂CO₃↓ → pH partial korrigiert.",
    "schwer",
    ["säure-base", "nierenversagen", "physiologie"]
  ),

  // ── chem-kap6: Organische Chemie / Isomerie / Aminosäuren ───────────────
  q(
    "ch-pool-8-061",
    "chem-kap6",
    "Thalidomid (Contergan) enthält ein chirales Zentrum. Das R-Enantiomer wirkt sedativ, das S-Enantiomer teratogen. Welches Prinzip unterstreicht die Bedeutung der Stereochemie in der Pharmakologie?",
    [
      "Enantiomere haben identische biochemische Wirkung, da sie die gleiche Summenformel besitzen",
      "Chirale Wirkstoffe interagieren enantioselektiv mit chiralen Rezeptoren/Enzymen → unterschiedliche biologische Aktivitäten",
      "Teratogenität ist unabhängig von der Stereochemie und betrifft beide Enantiomere gleichermaßen",
      "Racematspaltung ist pharmazeutisch irrelevant und wird in der modernen Arzneimittelentwicklung nicht benötigt",
      "Das S-Enantiomer ist grundsätzlich stabiler und daher toxischer als die R-Konfiguration des Wirkstoffs",
    ],
    1,
    "Chirale Enzyme/Rezeptoren erkennen Enantiomere unterschiedlich (Schlüssel-Schloss). Thalidomid-Tragödie: Racemat verabreicht; S-Form teratogen. Enantioselektive Synthese/Spaltung heute Standard.",
    "schwer",
    ["chiralität", "enantiomere", "pharmakologie"]
  ),

  q(
    "ch-pool-8-062",
    "chem-kap6",
    "Wie viele Stereoisomere hat Glucose (Aldohexose mit 4 Stereocentren)?",
    ["4", "8", "16", "2", "32"],
    2,
    "2^n Stereoisomere für n Stereozentren. Glucose hat 4 chirale C-Atome → 2⁴ = 16 Stereoisomere (8 D- und 8 L-Aldohexosen).",
    "schwer",
    ["stereoisomere", "kohlenhydrate", "chiralität"]
  ),

  q(
    "ch-pool-8-063",
    "chem-kap6",
    "Vergleich Verbrennung von Methanol (CH₃OH) vs. Ethanol (C₂H₅OH): Beide reagieren mit O₂ zu CO₂ und H₂O. Welche Menge O₂ (mol) verbraucht die vollständige Verbrennung von 1 mol Ethanol?",
    ["2 mol O₂", "3 mol O₂", "1 mol O₂", "4 mol O₂", "1,5 mol O₂"],
    1,
    "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Koeffizientencheck: C: 2=2; H: 6=6; O: 1+6=7=4+3=7. 3 mol O₂.",
    "schwer",
    ["verbrennung", "stöchiometrie", "organik"]
  ),

  q(
    "ch-pool-8-064",
    "chem-kap6",
    "Aspirin wird durch Hydrolyse von Acetylsalicylsäure gebildet... Umgekehrt: Welche funktionellen Gruppen reagieren bei der Aspirin-Synthese (Veresterung von Salicylsäure mit Essigsäureanhydrid)?",
    [
      "Carboxylgruppe von Salicylsäure + Aldehyd von Essigsäureanhydrid",
      "Phenolische OH-Gruppe von Salicylsäure + Anhydrid → Estergruppe + Essigsäure",
      "Aminogruppe + Carbonsäure → Amidbindung",
      "Zwei Hydroxylgruppen kondensieren zu Ether",
      "Aldehyd + Alkohol → Halbacetal",
    ],
    1,
    "Salicylsäure hat phenolische -OH. Essigsäureanhydrid (CH₃CO)₂O acyliert -OH → Ester (-OCOCH₃) + CH₃COOH als Nebenprodukt. Keine Carboxyl-Reaktion nötig.",
    "schwer",
    ["esterbildung", "organik", "pharmakologie"]
  ),

  q(
    "ch-pool-8-065",
    "chem-kap6",
    "Welche der folgenden Aminosäuren hat eine basische Seitenkette und erhöht daher ihren pI auf ~10,5?",
    [
      "Asparaginsäure (pI=2,77)",
      "Glycin (pI=5,97)",
      "Lysin (pI=9,74)",
      "Phenylalanin (pI=5,48)",
      "Serin (pI=5,68)",
    ],
    2,
    "Lysin: zwei basische Gruppen (α-NH₂ + ε-NH₂). pI = (pKa2+pKa3)/2 = (9,0+10,5)/2 ≈ 9,74. Aspartat ist saure AS, andere neutral.",
    "schwer",
    ["aminosäure", "pI", "lysin"]
  ),

  q(
    "ch-pool-8-066",
    "chem-kap6",
    "Cysteine können Disulfidbindungen bilden. Welche Reaktion liegt zugrunde, und welche Bedeutung hat das für Proteinstruktur?",
    [
      "SH + SH → S-S + H₂ (Reduktion); destabilisiert Tertiärstruktur",
      "2 R-SH → R-S-S-R + 2H⁺ + 2e⁻ (Oxidation); stabilisiert Tertiär-/Quartärstruktur kovalent",
      "SH reagiert mit Wasser zu S-OH (Hydroxylierung)",
      "Disulfidbindungen sind instabile Wasserstoffbrücken",
      "Nur intrazelluläre Disulfide; extrazelluläre unmöglich",
    ],
    1,
    "Thiolgruppen (–SH) oxidieren zu Disulfiden (–S–S–). Diese kovalenten Quervernetzungen stabilisieren 3D-Struktur. Extrazelluläre Proteine (Insulin: A-B Ketten) abhängig davon.",
    "schwer",
    ["disulfid", "proteinstruktur", "cysteine"]
  ),

  q(
    "ch-pool-8-067",
    "chem-kap6",
    "Ein Peptid hat die Sequenz Ala-Gly-Pro-Phe. Wie viele Peptidbindungen und welche Eigenschaft besitzt die Peptidbindung aufgrund von Resonanz?",
    [
      "3 Peptidbindungen, die frei um ihre C−N-Achse rotierbar sind",
      "3 Peptidbindungen, partieller Doppelbindungscharakter → planar, eingeschränkte Rotation",
      "4 Peptidbindungen in planarer Anordnung zwischen den Aminosäuren",
      "2 Peptidbindungen mit vollständigem Doppelbindungscharakter (C=N)",
      "3 Peptidbindungen mit ausschließlich sp³-Charakter am Stickstoff",
    ],
    1,
    "4 AS → 3 Peptidbindungen (N-1). Resonanz zwischen C=O und N-Lonepair → partieller Doppelbindungscharakter → planare Peptidbindung, cis/trans-Isomerie möglich.",
    "schwer",
    ["peptidbindung", "resonanz", "proteinstruktur"]
  ),

  q(
    "ch-pool-8-068",
    "chem-kap6",
    "Morphin und Heroin sind Opioide. Heroin ist diacetyliertes Morphin (OH-Gruppen acetyliert). Warum passiert Heroin die Blut-Hirn-Schranke schneller?",
    [
      "Heroin hat geringere Molmasse als Morphin",
      "Acetylierung erhöht Lipophilie (logP↑) → bessere Membranpermeation",
      "Heroin ist wasserlöslicher durch Acetylgruppen",
      "Heroin aktiviert andere Rezeptoren als Morphin",
      "Acetylierung verringert Proteindissoziation",
    ],
    1,
    "Acetylierung von –OH → –OCOCH₃: H-Brücken-Kapazität sinkt, logP steigt → lipophiler → schnellere ZNS-Penetration. Heroin wird dann im ZNS zu Morphin hydrolysiert.",
    "schwer",
    ["lipophilie", "blut-hirn-schranke", "pharmakologie"]
  ),

  q(
    "ch-pool-8-069",
    "chem-kap6",
    "Welches Strukturmerkmal unterscheidet α-D-Glucose von β-D-Glucose, und welche Bedeutung hat das für Stärke vs. Cellulose?",
    [
      "α und β unterscheiden sich nur in der Konfiguration an C-6 (endständiges Kohlenstoffatom)",
      "α-glycosidische Bindung (Stärke) vs. β-glycosidische Bindung (Cellulose) bestimmt, ob Menschen das Polymer verdauen können",
      "Beide sind identisch; Stärke und Cellulose unterscheiden sich ausschließlich in der Kettenlänge (Polymerisationsgrad)",
      "α-Glucose hat 5 OH-Gruppen, während β-Glucose nur 4 OH-Gruppen besitzt (eine weniger am Ring)",
      "Stärke enthält hauptsächlich Fructose als Monomer, während Cellulose ausschließlich α-Glucose verwendet",
    ],
    1,
    "α: anomeres OH axial (C-1); β: äquatorial. Stärke: α(1→4) spaltbar durch Amylasen. Cellulose: β(1→4) → gestreckte Kette, Menschen fehlt β-Glucosidase → unverdaulich.",
    "schwer",
    ["kohlenhydrate", "anomere", "glycosidisch"]
  ),

  q(
    "ch-pool-8-070",
    "chem-kap6",
    "Paracetamol (Acetaminophen) wird in der Leber durch CYP2E1 zu NAPQI (N-acetyl-p-benzochinon-imin) metabolisiert, das mit Glutathion konjugiert wird. Bei Überdosierung erschöpft NAPQI das Glutathion. Welche chemische Reaktion liegt bei der Glutathion-Konjugation von NAPQI vor?",
    [
      "Nucleophile Addition des Thiol-S von Glutathion an das elektrophile Chinon-System",
      "Esterifikation der NAPQI-Carbonylgruppe mit Glutathion",
      "Radikalische Substitution am aromatischen Ring",
      "Oxidation von Glutathion durch NAPQI ohne kovalente Bindung",
      "Peptidbildung zwischen NAPQI und der Aminogruppe von Glutathion",
    ],
    0,
    "NAPQI ist ein Michael-Akzeptor (elektrophiles Chinon). Glutathion-Thiol (–SH, nukleophil) addiert in 1,4-Michael-Addition → stabiles Thioether-Addukt. Bei Erschöpfung: NAPQI attackiert Leber-Proteine → Hepatotoxizität.",
    "schwer",
    ["glutathion", "napqi", "lebertoxizität", "organik"]
  ),
];
