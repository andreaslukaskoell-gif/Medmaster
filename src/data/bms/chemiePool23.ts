/**
 * Chemie BMS Pool 23 — 50 SCHWERE Fragen (MedAT-Stil).
 * Fokus: Transfer, Rechnung, FALSCH-Fragen, Mehrschrittlogik.
 * Stoff: chem-kap1–chem-kap6.
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

export const chemiePool23: Question[] = [
  // ──────────────────────────────────────
  // ATOMBAU & PERIODENSYSTEM (8 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-001",
    "chem-kap1",
    "Ein Atom hat 26 Protonen, 30 Neutronen und 24 Elektronen. Welche Angabe beschreibt dieses Teilchen korrekt?",
    ["⁵⁶Fe²⁺", "⁵⁶Fe²⁻", "⁵⁶Fe³⁺", "⁵⁴Fe²⁺", "⁵⁶Co²⁺"],
    0,
    "26 Protonen = Eisen (Fe, Z = 26). Massenzahl A = 26 + 30 = 56. 26 Protonen − 24 Elektronen = Ladung +2 → ⁵⁶Fe²⁺. Fe²⁻ hätte 28 Elektronen. Fe³⁺ hätte 23 Elektronen. ⁵⁴Fe²⁺ hätte nur 28 Nukleonen. Co hat Z = 27.",
    "schwer",
    ["Nuklide", "Ionen", "Ordnungszahl", "Massenzahl"]
  ),
  q(
    "ch-pool-hard-002",
    "chem-kap1",
    "Welche Elektronenkonfiguration ist für ein Grundzustandsatom UNMÖGLICH?",
    [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷",
    ],
    3,
    "Option D schreibt 3d⁴ 4s² — das ergibt zwar die richtige Elektronenzahl für Chrom (Z = 24), aber Chrom hat im Grundzustand die Konfiguration 4s¹ 3d⁵ (halbvolle d-Schale bevorzugt). Die Notation 3d⁴ 4s² ist die 'erwartete' Konfiguration, die aber NICHT dem tatsächlichen Grundzustand entspricht (Hundscher Stabilitätsgewinn). A = Zn (korrekt), B = Cr (korrekt!), C = V (korrekt), E = Co (korrekt).",
    "schwer",
    ["Elektronenkonfiguration", "Periodensystem", "Hundsregel"]
  ),
  q(
    "ch-pool-hard-003",
    "chem-kap1",
    "Welche der folgenden Aussagen über die Elemente der 3. Periode (Na bis Ar) ist FALSCH?",
    [
      "Die Ionisierungsenergie steigt streng monoton von Na zu Ar ohne Ausnahmen",
      "Der Atomradius nimmt von Na zu Ar ab",
      "Na hat den größten metallischen Charakter in der Periode",
      "Cl hat eine höhere Elektronenaffinität als Ar",
      "Mg hat eine höhere erste Ionisierungsenergie als Al",
    ],
    0,
    "Die IE steigt NICHT streng monoton — es gibt Ausnahmen: Mg (3s²) hat eine höhere IE als Al (3s²3p¹), und P (3p³, halbvoll) hat eine höhere IE als S (3p⁴). 'Tendenziell' wäre korrekt, aber 'streng monoton ohne Ausnahmen' ist falsch. B ist korrekt (steigende Kernladung → kleinerer Radius). C ist korrekt (Alkalimetall). D ist korrekt (Edelgase haben sehr geringe EA). E ist korrekt (3s² stabiler als 3s²3p¹).",
    "schwer",
    ["Periodensystem", "Ionisierungsenergie", "Trends", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-004",
    "chem-kap1",
    "Das Element Selen (Se, Z = 34) bildet bevorzugt das Ion Se²⁻. Welche Edelgaskonfiguration erreicht dieses Ion?",
    ["Argon-Konfiguration", "Krypton-Konfiguration", "Xenon-Konfiguration", "Neon-Konfiguration", "Es erreicht keine Edelgaskonfiguration"],
    1,
    "Se (Z = 34) + 2 Elektronen = 36 Elektronen = Krypton (Z = 36). Argon hat Z = 18 (zu wenig), Xenon hat Z = 54 (zu viel), Neon hat Z = 10. Se²⁻ hat exakt die Elektronenzahl von Krypton.",
    "schwer",
    ["Ionen", "Edelgaskonfiguration", "Periodensystem"]
  ),
  q(
    "ch-pool-hard-005",
    "chem-kap1",
    "Ein Element bildet ein dreifach positiv geladenes Ion mit der Elektronenkonfiguration [Ar] 3d⁵. Um welches Element handelt es sich?",
    ["Mn", "Fe", "Cr", "Co", "V"],
    1,
    "[Ar] 3d⁵ = 18 + 5 = 23 Elektronen im Ion. Das Ion hat Ladung 3+, also hat das Atom 23 + 3 = 26 Elektronen = 26 Protonen = Fe (Eisen). Mn (Z = 25) → Mn³⁺ hätte 22 e⁻ = [Ar]3d⁴. Cr (Z = 24) → Cr³⁺ hätte 21 e⁻ = [Ar]3d³. Co (Z = 27) → Co³⁺ hätte 24 e⁻ = [Ar]3d⁶. V (Z = 23) → V³⁺ hätte 20 e⁻ = [Ar]3d².",
    "schwer",
    ["Elektronenkonfiguration", "Ionen", "Übergangsmetalle"]
  ),
  q(
    "ch-pool-hard-006",
    "chem-kap1",
    "Isotop X hat 20 Protonen und eine Massenzahl von 44. Isotop Y desselben Elements hat 4 Neutronen mehr. Welche Massenzahl hat Isotop Y?",
    ["44", "48", "40", "46", "42"],
    1,
    "Beide Isotope haben gleiche Protonenzahl (20, also Calcium). A = Z + N. X: A = 44, also N = 24. Y hat 4 Neutronen mehr: N = 28, also A = 20 + 28 = 48. Fehler 44 (vergisst Neutronen), 40 (subtrahiert statt addiert), 46 (addiert nur 2), 42 (subtrahiert 2).",
    "schwer",
    ["Nuklide", "Isotope", "Massenzahl"]
  ),
  q(
    "ch-pool-hard-007",
    "chem-kap1",
    "Welches der folgenden Elemente hat die NIEDRIGSTE erste Ionisierungsenergie?",
    ["Li", "Na", "K", "Cs", "Be"],
    3,
    "Die erste Ionisierungsenergie sinkt in einer Hauptgruppe von oben nach unten, weil der Atomradius zunimmt und die Abschirmung steigt. Cs (Gruppe 1, Periode 6) hat die niedrigste IE aller genannten Elemente. Li > Na > K > Cs. Be (Gruppe 2) hat eine höhere IE als alle Alkalimetalle der gleichen oder höheren Periode.",
    "schwer",
    ["Ionisierungsenergie", "Periodensystem", "Trends"]
  ),
  q(
    "ch-pool-hard-008",
    "chem-kap1",
    "Ein Atom im Grundzustand hat 5 Elektronen in 3d-Orbitalen und insgesamt 25 Elektronen. Wie viele ungepaarte Elektronen besitzt es?",
    ["5", "3", "1", "4", "2"],
    0,
    "25 Elektronen = Mangan (Z = 25), Konfiguration [Ar] 4s² 3d⁵. Nach der Hundschen Regel werden die fünf 3d-Orbitale zunächst je einfach besetzt → 5 ungepaarte Elektronen. 4s² ist gepaart. Häufiger Fehler: 3 (denkt an 3 unbesetzte Orbitale) oder 1 (verwechselt mit 4s).",
    "schwer",
    ["Elektronenkonfiguration", "Hundsregel", "Paramagnetismus"]
  ),

  // ──────────────────────────────────────
  // CHEMISCHE BINDUNG (5 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-009",
    "chem-kap3",
    "Welche der folgenden Aussagen über Bindungstypen ist FALSCH?",
    [
      "In der Ionenbindung werden Elektronen vollständig übertragen",
      "Metallbindung erklärt die elektrische Leitfähigkeit von Metallen",
      "Kovalente Bindungen entstehen durch gemeinsame Elektronenpaare",
      "Ionenverbindungen leiten im festen Zustand den elektrischen Strom",
      "Die Elektronegativitätsdifferenz hilft bei der Einordnung des Bindungstyps",
    ],
    3,
    "Ionenverbindungen leiten im FESTEN Zustand NICHT, da die Ionen im Kristallgitter fixiert sind. Erst in Schmelze oder Lösung werden Ionen beweglich und können Strom leiten. A ist vereinfacht korrekt (MedAT-Niveau). B ist korrekt (Elektronengas). C ist die Definition. E ist korrekt (ΔEN-Regel).",
    "schwer",
    ["Ionenbindung", "Metallbindung", "kovalente Bindung", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-010",
    "chem-kap3",
    "CO₂ hat einen Siedepunkt von −78 °C, SiO₂ (Quarz) schmilzt erst bei ca. 1700 °C. Welche Erklärung ist korrekt?",
    [
      "CO₂ ist ein Molekülgitter, SiO₂ ein Atomgitter mit kovalenten Bindungen in alle Richtungen",
      "CO₂ hat schwächere kovalente Bindungen als SiO₂",
      "SiO₂ bildet Ionenbindungen, CO₂ nicht",
      "CO₂ ist polar und verdampft leicht durch Dipol-Abstoßung",
      "Si hat mehr Elektronen als C, daher stärkere Van-der-Waals-Kräfte",
    ],
    0,
    "CO₂ bildet diskrete Moleküle (Molekülkristall), zwischen denen nur schwache Van-der-Waals-Kräfte wirken → niedriger Sdp. SiO₂ bildet ein dreidimensionales Netzwerk aus kovalenten Si-O-Bindungen (Atomgitter) → extrem hoher Schmelzpunkt. B ist falsch: die C=O-Bindung ist sogar stärker als Si-O, aber entscheidend ist die Gitterstruktur. C ist falsch: SiO₂ ist kovalent. D ist falsch: CO₂ ist unpolar. E missversteht den Mechanismus.",
    "schwer",
    ["Atomgitter", "Molekülgitter", "Siedepunkt", "kovalente Bindung"]
  ),
  q(
    "ch-pool-hard-011",
    "chem-kap3",
    "Welche Verbindung hat den HÖCHSTEN Siedepunkt?",
    ["CH₄", "NH₃", "H₂O", "HF", "H₂S"],
    2,
    "H₂O hat den höchsten Siedepunkt (100 °C) wegen besonders starker Wasserstoffbrückenbindungen: jedes H₂O-Molekül kann 4 H-Brücken ausbilden (2 Donor, 2 Akzeptor). HF (19,5 °C) hat zwar stärkere einzelne H-Brücken, aber kann nur Ketten (nicht Netzwerke) bilden. NH₃ (−33 °C) bildet schwächere H-Brücken. CH₄ (−161 °C) hat keine H-Brücken. H₂S (−60 °C) bildet kaum H-Brücken.",
    "schwer",
    ["Wasserstoffbrücken", "Siedepunkt", "zwischenmolekulare Kräfte"]
  ),
  q(
    "ch-pool-hard-012",
    "chem-kap3",
    "Diamant und Graphit sind Allotrope des Kohlenstoffs. Welche Aussage ist FALSCH?",
    [
      "In Diamant ist jedes C-Atom sp³-hybridisiert und tetraedrisch umgeben",
      "Graphit leitet elektrischen Strom entlang der Schichtebenen",
      "Diamant ist härter als Graphit, weil alle C-C-Bindungen gleich stark sind",
      "Graphit hat delokalisierte π-Elektronen in den Schichten",
      "Diamant ist ein elektrischer Isolator",
    ],
    2,
    "Die Aussage 'alle C-C-Bindungen sind gleich stark' ist bei Diamant zwar richtig (alle sp³), aber das ist NICHT der Grund für seine Härte im Vergleich zu Graphit. Graphit hat sogar STÄRKERE Bindungen innerhalb der Schichten (sp² mit π-Bindung, C-C 142 pm) als Diamant (sp³, C-C 154 pm). Diamant ist härter, weil sein 3D-Netzwerk in ALLE Richtungen kovalent verknüpft ist, während Graphit-Schichten nur durch schwache Van-der-Waals-Kräfte zusammengehalten werden.",
    "schwer",
    ["Allotropie", "Kohlenstoff", "Hybridisierung", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-013",
    "chem-kap3",
    "NaCl hat einen Schmelzpunkt von 801 °C, CsCl von 645 °C. Welche Erklärung trifft zu?",
    [
      "Cs⁺ ist größer als Na⁺, daher ist die Gitterenergie bei CsCl geringer",
      "Cs ist weniger elektronegativ, daher ist die Bindung schwächer",
      "CsCl kristallisiert kubisch-primitiv, NaCl kubisch-flächenzentriert — das erklärt den Unterschied allein",
      "Cs⁺ hat weniger Protonen als Na⁺ und zieht Cl⁻ schwächer an",
      "NaCl hat kovalenten Bindungsanteil, CsCl ist rein ionisch",
    ],
    0,
    "Die Gitterenergie hängt von Ionenradien und -ladungen ab (Born-Landé-Gleichung). Cs⁺ (r = 167 pm) ist deutlich größer als Na⁺ (r = 102 pm) → größerer Ionenabstand → geringere Coulomb-Anziehung → niedrigere Gitterenergie → niedrigerer Schmelzpunkt. B verwechselt EN mit Gitterenergie. C: Strukturtyp spielt eine Rolle, erklärt aber nicht allein den Unterschied. D: die Ladung beider Kationen ist +1, entscheidend ist der Radius. E ist falsch — NaCl ist nicht kovalnter als CsCl.",
    "schwer",
    ["Ionenbindung", "Gitterenergie", "Schmelzpunkt"]
  ),

  // ──────────────────────────────────────
  // STÖCHIOMETRIE & REAKTIONEN (8 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-014",
    "chem-kap4",
    "Bei der Verbrennung von 12 g Kohlenstoff mit 16 g Sauerstoff: Wie viel CO₂ entsteht maximal?",
    ["28 g", "44 g", "22 g", "11 g", "14,67 g"],
    2,
    "C + O₂ → CO₂. n(C) = 12/12 = 1 mol. n(O₂) = 16/32 = 0,5 mol. O₂ ist der limitierende Faktor (braucht 1 mol O₂ für 1 mol C). Es reagieren 0,5 mol C mit 0,5 mol O₂ → 0,5 mol CO₂ = 0,5 × 44 = 22 g. Fehler: 44 g (vergisst limiting reagent), 28 g (addiert Massen falsch), 11 g (halbiert nochmal), 14,67 g (teilt 44 durch 3).",
    "schwer",
    ["Stöchiometrie", "limiting reagent", "Verbrennung", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-015",
    "chem-kap4",
    "Wie viel Gramm CaCO₃ müssen zersetzt werden, um 11,2 L CO₂ (bei STP: 0 °C, 1 atm) zu erhalten?",
    ["100 g", "50 g", "200 g", "25 g", "44 g"],
    1,
    "CaCO₃ → CaO + CO₂. Bei STP: 1 mol Gas = 22,4 L → 11,2 L = 0,5 mol CO₂. Stöchiometrie 1:1 → braucht 0,5 mol CaCO₃. M(CaCO₃) = 40 + 12 + 3×16 = 100 g/mol. 0,5 × 100 = 50 g. Fehler: 100 g (1 mol statt 0,5), 200 g (verdoppelt), 25 g (halbiert nochmal), 44 g (verwechselt mit M(CO₂)).",
    "schwer",
    ["Stöchiometrie", "Molvolumen", "Zersetzung", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-016",
    "chem-kap4",
    "30 g Ethanol (C₂H₅OH, M = 46 g/mol) werden vollständig verbrannt. Wie viel Mol CO₂ entstehen?",
    ["0,65 mol", "1,30 mol", "2,61 mol", "0,33 mol", "1,96 mol"],
    1,
    "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. n(Ethanol) = 30/46 ≈ 0,652 mol. Pro mol Ethanol entstehen 2 mol CO₂ → 0,652 × 2 ≈ 1,30 mol CO₂. Fehler: 0,65 mol (Faktor 2 vergessen), 2,61 mol (Faktor 4 statt 2), 0,33 mol (durch 2 statt mal 2), 1,96 mol (Faktor 3 statt 2).",
    "schwer",
    ["Stöchiometrie", "Verbrennung", "Ethanol", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-017",
    "chem-kap4",
    "4 g Wasserstoff reagieren mit überschüssigem Stickstoff zu Ammoniak. Wie viel Gramm NH₃ entstehen maximal?",
    ["6,8 g", "22,7 g", "34 g", "11,3 g", "17 g"],
    1,
    "3 H₂ + N₂ → 2 NH₃. n(H₂) = 4/2 = 2 mol. 3 mol H₂ → 2 mol NH₃, also 2 mol H₂ → (2/3)×2 = 4/3 mol NH₃. m(NH₃) = 4/3 × 17 ≈ 22,7 g. Fehler: 34 g (2 mol NH₃, ignoriert Stöchiometrie), 6,8 g (0,4 mol), 11,3 g (2/3 mol), 17 g (1 mol, nimmt 1:1 an).",
    "schwer",
    ["Stöchiometrie", "Ammoniak", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-018",
    "chem-kap4",
    "Bei der Reaktion 2 Al + 3 Cl₂ → 2 AlCl₃ reagieren 5,4 g Al mit 28,4 g Cl₂. Welcher Stoff ist im Überschuss und um wie viel Gramm?",
    [
      "Cl₂ im Überschuss um 7,1 g",
      "Al im Überschuss um 2,7 g",
      "Cl₂ im Überschuss um 14,2 g",
      "Al im Überschuss um 0,1 mol",
      "Beide reagieren stöchiometrisch ab",
    ],
    0,
    "n(Al) = 5,4/27 = 0,2 mol. n(Cl₂) = 28,4/71 = 0,4 mol. Für 0,2 mol Al braucht man 3/2 × 0,2 = 0,3 mol Cl₂. Vorhanden: 0,4 mol → 0,1 mol Cl₂ im Überschuss = 0,1 × 71 = 7,1 g. Fehler: 2,7 g (vertauscht wer im Überschuss ist), 14,2 g (verdoppelt), 0,1 mol Al (verwechselt), stöchiometrisch (Rechenfehler).",
    "schwer",
    ["Stöchiometrie", "limiting reagent", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-019",
    "chem-kap4",
    "Wie viel mL einer 2 M HCl-Lösung werden benötigt, um 5,3 g Na₂CO₃ (M = 106 g/mol) vollständig umzusetzen?",
    ["25 mL", "50 mL", "100 mL", "12,5 mL", "75 mL"],
    1,
    "Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂. n(Na₂CO₃) = 5,3/106 = 0,05 mol. Braucht 2 × 0,05 = 0,1 mol HCl. V = n/c = 0,1/2 = 0,05 L = 50 mL. Fehler: 25 mL (vergisst Faktor 2 bei HCl), 100 mL (verdoppelt nochmal), 12,5 mL (halbiert statt zu verdoppeln), 75 mL (Faktor 3).",
    "schwer",
    ["Stöchiometrie", "Neutralisation", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-020",
    "chem-kap4",
    "56 g Eisen reagieren mit Schwefelsäure: Fe + H₂SO₄ → FeSO₄ + H₂↑. Welches Volumen H₂ entsteht bei STP (22,4 L/mol)?",
    ["22,4 L", "11,2 L", "44,8 L", "5,6 L", "33,6 L"],
    0,
    "n(Fe) = 56/56 = 1 mol. Stöchiometrie 1:1 → 1 mol H₂. V = 1 × 22,4 = 22,4 L bei STP. Fehler: 11,2 L (halbiert, denkt an H statt H₂), 44,8 L (verdoppelt, Stöchiometriefehler), 5,6 L (÷4), 33,6 L (×1,5).",
    "schwer",
    ["Stöchiometrie", "Gasvolumen", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-021",
    "chem-kap4",
    "Welche Aussage zur Reaktionsgleichung 2 H₂ + O₂ → 2 H₂O ist FALSCH?",
    [
      "2 Mol Wasserstoff reagieren mit 1 Mol Sauerstoff",
      "Die Masse der Produkte ist geringer als die Masse der Edukte, weil Energie frei wird",
      "Bei STP reagieren 44,8 L H₂ mit 22,4 L O₂",
      "4 g Wasserstoff reagieren mit 32 g Sauerstoff zu 36 g Wasser",
      "Es handelt sich um eine Redoxreaktion",
    ],
    1,
    "Der Massenerhaltungssatz (Lavoisier) gilt für ALLE chemischen Reaktionen: Die Masse der Produkte ist GLEICH der Masse der Edukte. Energiefreisetzung ändert die Masse nicht (im chemischen Kontext; relativistisch wäre der Massendefekt verschwindend gering). A ist korrekt (Stöchiometrie). C ist korrekt (2 mol × 22,4 L und 1 mol × 22,4 L). D ist korrekt (4+32=36). E ist korrekt (H: 0→+1, O: 0→−2).",
    "schwer",
    ["Stöchiometrie", "Massenerhaltung", "FALSCH-Frage"]
  ),

  // ──────────────────────────────────────
  // CHEMISCHES GLEICHGEWICHT (7 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-022",
    "chem-kap4",
    "Für die Reaktion N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH < 0: Welche Maßnahme erhöht die Ammoniakausbeute im Gleichgewicht?",
    [
      "Temperaturerhöhung",
      "Zugabe eines Katalysators",
      "Druckerhöhung",
      "Entfernung von N₂",
      "Volumenvergrößerung",
    ],
    2,
    "Le Chatelier: Druckerhöhung verschiebt das GG zur Seite mit weniger Gasteilchen (links: 4 mol, rechts: 2 mol → nach rechts → mehr NH₃). Temperaturerhöhung verschiebt exotherme Reaktion nach LINKS (weniger NH₃). Katalysator ändert GG-Lage NICHT. Entfernung von N₂ verschiebt nach links. Volumenvergrößerung = Druckerniedrigung → nach links.",
    "schwer",
    ["Le Chatelier", "Gleichgewicht", "Haber-Bosch"]
  ),
  q(
    "ch-pool-hard-023",
    "chem-kap4",
    "Das MWG für A(g) ⇌ 2 B(g) ergibt Kc = 0,04 mol/L. Im GG beträgt [A] = 1 mol/L. Wie groß ist [B]?",
    ["0,02 mol/L", "0,04 mol/L", "0,2 mol/L", "0,4 mol/L", "0,08 mol/L"],
    2,
    "Kc = [B]²/[A] = 0,04. [A] = 1 mol/L. [B]² = 0,04 × 1 = 0,04. [B] = √0,04 = 0,2 mol/L. Fehler: 0,04 (vergisst Quadrat, setzt [B] = Kc), 0,02 (halbiert Kc), 0,4 (quadriert statt Wurzel), 0,08 (2 × Kc).",
    "schwer",
    ["MWG", "Gleichgewicht", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-024",
    "chem-kap4",
    "Für die Reaktion 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g) sind im GG: [SO₂] = 0,1 M, [O₂] = 0,2 M, [SO₃] = 0,4 M. Wie groß ist Kc?",
    ["80 L/mol", "8 L/mol", "160 L/mol", "16 L/mol", "800 L/mol"],
    0,
    "Kc = [SO₃]²/([SO₂]² × [O₂]) = (0,4)²/((0,1)² × 0,2) = 0,16/(0,01 × 0,2) = 0,16/0,002 = 80. Fehler: 8 (vergisst Quadrat im Zähler), 160 (verdoppelt), 16 (falsche Potenz), 800 (Dezimalfehler).",
    "schwer",
    ["MWG", "Gleichgewicht", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-025",
    "chem-kap4",
    "Welche Aussage über einen Katalysator ist FALSCH?",
    [
      "Er senkt die Aktivierungsenergie der Hin- und Rückreaktion gleichermaßen",
      "Er beschleunigt die Einstellung des Gleichgewichts",
      "Er verschiebt die Gleichgewichtslage zugunsten der Produkte",
      "Er wird bei der Reaktion nicht verbraucht",
      "Er bietet einen alternativen Reaktionsweg mit niedrigerer Aktivierungsenergie",
    ],
    2,
    "Ein Katalysator verschiebt die Gleichgewichtslage NICHT — er beschleunigt nur die Einstellung des Gleichgewichts, indem er Hin- UND Rückreaktion gleichermaßen beschleunigt (senkt Ea symmetrisch). A, B, D, E sind korrekt. C ist die typische Fehlvorstellung vieler Studenten.",
    "schwer",
    ["Katalysator", "Gleichgewicht", "Aktivierungsenergie", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-026",
    "chem-kap4",
    "Die endotherme Reaktion CaCO₃(s) ⇌ CaO(s) + CO₂(g) steht im Gleichgewicht. Was passiert bei Temperaturerhöhung?",
    [
      "Das Gleichgewicht verschiebt sich nach links, mehr CaCO₃ entsteht",
      "Das Gleichgewicht verschiebt sich nach rechts, mehr CO₂ entsteht",
      "Kein Effekt, da Feststoffe nicht im MWG erscheinen",
      "Nur der CO₂-Partialdruck sinkt",
      "Der Katalysator wird wirksamer",
    ],
    1,
    "Le Chatelier: Temperaturerhöhung begünstigt die endotherme Richtung → hier nach rechts (Zersetzung) → mehr CO₂ und CaO. Fehler A: verwechselt endo/exotherm. C: Feststoffe erscheinen nicht im MWG, aber die Temperatur beeinflusst Kp trotzdem! D: CO₂ steigt, nicht sinkt. E: Katalysator hat nichts mit Temperatureffekt auf GG-Lage zu tun.",
    "schwer",
    ["Le Chatelier", "Gleichgewicht", "endotherm"]
  ),
  q(
    "ch-pool-hard-027",
    "chem-kap4",
    "Für die Gleichgewichtsreaktion H₂(g) + I₂(g) ⇌ 2 HI(g) gilt Kc = 50 bei einer bestimmten Temperatur. Wenn [H₂] = [I₂] = 0,1 M im Gleichgewicht sind, wie groß ist [HI]?",
    ["0,71 mol/L", "5 mol/L", "0,5 mol/L", "2,24 mol/L", "0,22 mol/L"],
    0,
    "Kc = [HI]²/([H₂]×[I₂]) = 50. [HI]² = 50 × 0,1 × 0,1 = 0,5. [HI] = √0,5 ≈ 0,707 ≈ 0,71 mol/L. Fehler: 5 (vergisst Wurzel, setzt [HI] = Kc × 0,1), 0,5 (quadriert nicht zurück), 2,24 (√5 statt √0,5), 0,22 (√0,05).",
    "schwer",
    ["MWG", "Gleichgewicht", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-028",
    "chem-kap4",
    "Eine Reaktion hat Kc = 4,0 × 10⁻³. Welche Aussage trifft zu?",
    [
      "Im Gleichgewicht überwiegen die Edukte deutlich",
      "Im Gleichgewicht überwiegen die Produkte deutlich",
      "Die Reaktion läuft praktisch nicht ab",
      "Die Reaktion läuft vollständig ab",
      "Edukte und Produkte liegen in gleicher Konzentration vor",
    ],
    0,
    "Kc << 1 bedeutet, dass im Gleichgewicht die Eduktkonzentrationen im Nenner deutlich größer sind als die Produktkonzentrationen im Zähler → Edukte überwiegen. B wäre richtig bei Kc >> 1. C ist falsch: die Reaktion läuft ab, nur liegen im GG mehr Edukte vor. D wäre bei Kc → ∞. E wäre bei Kc ≈ 1.",
    "schwer",
    ["MWG", "Gleichgewichtskonstante"]
  ),

  // ──────────────────────────────────────
  // SÄURE-BASE (8 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-029",
    "chem-kap5",
    "Wie viel mL 0,5 M NaOH werden benötigt, um 25 mL 0,3 M H₂SO₄ vollständig zu neutralisieren?",
    ["30 mL", "15 mL", "60 mL", "7,5 mL", "25 mL"],
    0,
    "H₂SO₄ ist zweiprotonig: n(H⁺) = 25 mL × 0,3 M × 2 = 15 mmol. NaOH ist einprotonig: V = n/c = 15 mmol / 0,5 M = 30 mL. Fehler: 15 mL (vergisst zweiprotonig), 60 mL (verdoppelt statt: Faktor 2 bereits berücksichtigt), 7,5 mL (halbiert), 25 mL (gleiche Volumina angenommen).",
    "schwer",
    ["Neutralisation", "Stöchiometrie", "Säure-Base", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-030",
    "chem-kap5",
    "Der pH-Wert einer 0,001 M HCl-Lösung beträgt 3. Was ist der pH-Wert einer 0,001 M Essigsäure-Lösung (pKs = 4,76)?",
    ["3,00", "3,88", "4,76", "2,88", "6,00"],
    1,
    "Essigsäure ist eine schwache Säure: pH = ½ (pKs − log c) = ½ (4,76 − log(0,001)) = ½ (4,76 + 3) = ½ × 7,76 = 3,88. Fehler: 3,00 (behandelt wie starke Säure), 4,76 (setzt pH = pKs, gilt nur am Pufferhalbäquivalenzpunkt), 2,88 (rechnet ½ × (4,76 + 1)), 6,00 (willkürlich).",
    "schwer",
    ["pH", "schwache Säure", "pKs", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-031",
    "chem-kap5",
    "Ein Acetatpuffer enthält 0,1 M Essigsäure und 0,2 M Natriumacetat (pKs = 4,76). Wie groß ist der pH?",
    ["4,46", "4,76", "5,06", "5,76", "3,76"],
    2,
    "Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA]) = 4,76 + log(0,2/0,1) = 4,76 + log(2) = 4,76 + 0,30 = 5,06. Fehler: 4,76 (vergisst den log-Term, setzt pH = pKs), 4,46 (subtrahiert log 2 statt addiert), 5,76 (addiert 1 statt log 2), 3,76 (subtrahiert 1).",
    "schwer",
    ["Puffer", "Henderson-Hasselbalch", "pH", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-032",
    "chem-kap5",
    "Zu einem Puffer aus 0,1 M Essigsäure / 0,1 M Acetat (pH = 4,76) werden wenig mL konzentrierte NaOH zugegeben. Was passiert?",
    [
      "Der pH sinkt, weil NaOH die Essigsäure verdünnt",
      "Der pH steigt leicht, weil NaOH Essigsäure in Acetat umwandelt",
      "Der pH bleibt exakt bei 4,76, weil es ein Puffer ist",
      "Der pH springt sofort auf 14",
      "Der Puffer wird zerstört und der pH fällt unter 2",
    ],
    1,
    "NaOH reagiert mit Essigsäure: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. Das Verhältnis [A⁻]/[HA] steigt → pH steigt leicht (Henderson-Hasselbalch). Der Puffer BEGRENZT den Anstieg, aber der pH bleibt NICHT exakt gleich (Fehler C). A verwechselt die Richtung. D ignoriert die Pufferwirkung. E wäre nur bei Säurezugabe denkbar.",
    "schwer",
    ["Puffer", "Säure-Base", "Le Chatelier"]
  ),
  q(
    "ch-pool-hard-033",
    "chem-kap5",
    "Welcher pH-Wert ergibt sich für eine 0,01 M NaOH-Lösung bei 25 °C?",
    ["2", "12", "10", "14", "11"],
    1,
    "NaOH ist eine starke Base: [OH⁻] = 0,01 M. pOH = −log(0,01) = 2. pH = 14 − pOH = 14 − 2 = 12. Fehler: 2 (verwechselt pH mit pOH), 10 (rechnet 14−4), 14 (setzt pH = 14 für jede Base), 11 (rechnet −log(0,1)).",
    "schwer",
    ["pH", "pOH", "starke Base", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-034",
    "chem-kap5",
    "Bei der Titration von 20 mL 0,1 M CH₃COOH mit 0,1 M NaOH: Welcher pH liegt am Äquivalenzpunkt vor?",
    ["7,0", "größer als 7", "kleiner als 7", "4,76", "14,0"],
    1,
    "Am Äquivalenzpunkt ist alle Essigsäure in Natriumacetat (CH₃COONa) umgewandelt. Acetat ist die konjugierte Base einer schwachen Säure → die Lösung reagiert BASISCH → pH > 7. Fehler: 7,0 (gilt nur für starke Säure + starke Base), kleiner als 7 (verwechselt mit schwacher Base + starker Säure), 4,76 (das ist der pKs, nicht der ÄP-pH), 14 (reine NaOH-Lösung).",
    "schwer",
    ["Titration", "Äquivalenzpunkt", "schwache Säure"]
  ),
  q(
    "ch-pool-hard-035",
    "chem-kap5",
    "Welche Aussage über konjugierte Säure-Base-Paare ist FALSCH?",
    [
      "Die konjugierte Base einer starken Säure ist eine schwache Base",
      "H₂O kann sowohl als Säure als auch als Base reagieren (Ampholyt)",
      "Je stärker eine Säure, desto schwächer ihre konjugierte Base",
      "NH₄⁺ ist die konjugierte Säure von NH₃",
      "Die konjugierte Base von H₂SO₄ ist SO₄²⁻",
    ],
    4,
    "Die konjugierte Base von H₂SO₄ ist HSO₄⁻ (nicht SO₄²⁻!). H₂SO₄ gibt ein Proton ab → HSO₄⁻. Erst HSO₄⁻ gibt das zweite Proton ab → SO₄²⁻. SO₄²⁻ ist die konjugierte Base von HSO₄⁻. Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["konjugierte Paare", "Säure-Base", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-036",
    "chem-kap5",
    "Eine Lösung hat pH = 5. Um wie viel Mal höher ist die H₃O⁺-Konzentration verglichen mit einer Lösung von pH = 8?",
    ["3-mal", "30-mal", "300-mal", "1000-mal", "3000-mal"],
    3,
    "pH-Differenz = 8 − 5 = 3. Da pH logarithmisch ist: [H₃O⁺]₁/[H₃O⁺]₂ = 10^(8−5) = 10³ = 1000. Fehler: 3 (denkt linear statt logarithmisch), 30 (3 × 10), 300 (3 × 100), 3000 (3 × 1000).",
    "schwer",
    ["pH", "Logarithmus", "Konzentration"]
  ),

  // ──────────────────────────────────────
  // REDOX (7 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-037",
    "chem-kap5",
    "In der Verbindung K₂Cr₂O₇ (Kaliumdichromat): Welche Oxidationszahl hat Chrom?",
    ["+3", "+6", "+7", "+2", "+4"],
    1,
    "K₂Cr₂O₇: K = +1 (2×), O = −2 (7×). Gesamtladung = 0. 2(+1) + 2x + 7(−2) = 0 → 2 + 2x − 14 = 0 → 2x = 12 → x = +6. Fehler: +3 (halbiert nochmal), +7 (verwechselt mit KMnO₄-Mangan), +2 (Division durch falschen Koeffizienten), +4 (rechnet mit falscher O-Zahl).",
    "schwer",
    ["Oxidationszahl", "Redox", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-038",
    "chem-kap5",
    "In der Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu: Welche Aussage ist korrekt?",
    [
      "Zink wird reduziert, Kupfer wird oxidiert",
      "Zink ist das Oxidationsmittel",
      "Zink gibt Elektronen ab und wird oxidiert",
      "Cu²⁺ gibt Elektronen ab",
      "Die Oxidationszahl von Kupfer steigt von +2 auf 0",
    ],
    2,
    "Zn → Zn²⁺: Oxidationszahl steigt von 0 auf +2 → Oxidation (Elektronenabgabe). Cu²⁺ → Cu: OZ sinkt von +2 auf 0 → Reduktion (Elektronenaufnahme). Zn ist das Reduktionsmittel (wird selbst oxidiert). Fehler A: vertauscht. B: Zn ist Reduktionsmittel. D: Cu²⁺ nimmt Elektronen AUF. E: OZ sinkt, nicht steigt.",
    "schwer",
    ["Redox", "Oxidation", "Reduktion"]
  ),
  q(
    "ch-pool-hard-039",
    "chem-kap5",
    "In einer galvanischen Zelle mit Zn/Zn²⁺ (E° = −0,76 V) und Cu/Cu²⁺ (E° = +0,34 V): Wie groß ist die Standardzellspannung?",
    ["0,42 V", "1,10 V", "−1,10 V", "−0,42 V", "2,20 V"],
    1,
    "E°(Zelle) = E°(Kathode) − E°(Anode) = +0,34 − (−0,76) = +1,10 V. Zn wird oxidiert (Anode), Cu²⁺ wird reduziert (Kathode). Fehler: 0,42 V (subtrahiert falsch: 0,76 − 0,34), −1,10 V (Vorzeichen vertauscht), −0,42 V (doppelt falsch), 2,20 V (addiert und verdoppelt).",
    "schwer",
    ["Galvanische Zelle", "Standardpotenzial", "Redox", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-040",
    "chem-kap5",
    "In KMnO₄ hat Mangan die Oxidationszahl +7. Nach der Reaktion in saurer Lösung liegt Mn²⁺ vor. Wie viele Elektronen hat ein Mn-Atom aufgenommen?",
    ["2", "3", "5", "7", "4"],
    2,
    "Mn geht von +7 auf +2 → Änderung um 5 Einheiten → 5 Elektronen aufgenommen (Reduktion). Fehler: 2 (denkt an Ladung von Mn²⁺), 3 (7−4), 7 (gesamte OZ), 4 (7−3).",
    "schwer",
    ["Oxidationszahl", "Redox", "Permanganat", "rechenfrage"]
  ),
  q(
    "ch-pool-hard-041",
    "chem-kap5",
    "Welche der folgenden Reaktionen ist KEINE Redoxreaktion?",
    [
      "2 Na + Cl₂ → 2 NaCl",
      "Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂",
      "CaCO₃ → CaO + CO₂",
      "Zn + 2 HCl → ZnCl₂ + H₂",
      "2 Mg + O₂ → 2 MgO",
    ],
    2,
    "CaCO₃ → CaO + CO₂ ist eine thermische Zersetzung. Oxidationszahlen: Ca bleibt +2, C bleibt +4, O bleibt −2 → KEINE Änderung der OZ → keine Redoxreaktion. Alle anderen zeigen OZ-Änderungen: A (Na: 0→+1, Cl: 0→−1), B (Fe: +3→0, C: +2→+4), D (Zn: 0→+2, H: +1→0), E (Mg: 0→+2, O: 0→−2).",
    "schwer",
    ["Redox", "Oxidationszahl", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-042",
    "chem-kap5",
    "In einer Elektrolyse von CuSO₄-Lösung: An welcher Elektrode scheidet sich Kupfer ab und warum?",
    [
      "An der Anode, weil Cu²⁺ dort oxidiert wird",
      "An der Kathode, weil Cu²⁺ dort reduziert wird",
      "An beiden Elektroden gleichmäßig",
      "An der Anode, weil Cu²⁺ zur positiven Elektrode wandert",
      "An der Kathode, weil Cu²⁺ dort oxidiert wird",
    ],
    1,
    "Cu²⁺ wandert als Kation zur Kathode (negativ geladen bei Elektrolyse) und wird dort reduziert: Cu²⁺ + 2e⁻ → Cu. An der Anode findet Oxidation statt (z. B. Wasseroxidation oder Auflösung der Anode). Fehler A: Kupfer wird reduziert, nicht oxidiert. C: nur an einer Elektrode. D: Cu²⁺ wandert zur negativen Kathode. E: an Kathode wird reduziert, nicht oxidiert.",
    "schwer",
    ["Elektrolyse", "Redox", "Kathode"]
  ),
  q(
    "ch-pool-hard-043",
    "chem-kap5",
    "Welche Oxidationszahl hat Schwefel in Na₂S₂O₃ (Natriumthiosulfat)?",
    ["+2", "+4", "+6", "+1", "+3"],
    0,
    "Na₂S₂O₃: Na = +1 (2×), O = −2 (3×). 2(+1) + 2x + 3(−2) = 0 → 2 + 2x − 6 = 0 → 2x = 4 → x = +2 (formal gemittelt). Fehler: +4 (verwechselt mit SO₂), +6 (verwechselt mit SO₃/SO₄²⁻), +1 (Rechenfehler), +3 (teilt durch falschen Koeffizienten). Hinweis: real liegen in S₂O₃²⁻ zwei S-Atome in unterschiedlicher Umgebung vor (+5 und −1), aber der formale Durchschnitt ist +2.",
    "schwer",
    ["Oxidationszahl", "Redox", "rechenfrage"]
  ),

  // ──────────────────────────────────────
  // ORGANIK & NATURSTOFFE (7 Fragen)
  // ──────────────────────────────────────
  q(
    "ch-pool-hard-044",
    "chem-kap6",
    "Welches Produkt entsteht bei der Oxidation eines sekundären Alkohols?",
    ["Aldehyd", "Keton", "Carbonsäure", "Ester", "Ether"],
    1,
    "Sekundäre Alkohole (R₂CHOH) werden zu Ketonen (R₂C=O) oxidiert. Primäre Alkohole → Aldehyd → Carbonsäure. Tertiäre Alkohole sind schwer oxidierbar. Ester entstehen aus Säure + Alkohol (Veresterung). Ether aus Kondensation zweier Alkohole.",
    "schwer",
    ["Alkohole", "Oxidation", "funktionelle Gruppen"]
  ),
  q(
    "ch-pool-hard-045",
    "chem-kap6",
    "Welche Aussage über Aminosäuren bei physiologischem pH (≈ 7,4) ist FALSCH?",
    [
      "Die α-Aminogruppe liegt überwiegend als −NH₃⁺ protoniert vor",
      "Die α-Carboxylgruppe liegt überwiegend als −COO⁻ deprotoniert vor",
      "Aminosäuren liegen als Zwitterionen vor",
      "Der isoelektrische Punkt ist immer genau 7,0",
      "Aminosäuren sind amphoter — sie können als Säure und Base reagieren",
    ],
    3,
    "Der isoelektrische Punkt (pI) ist NICHT immer 7,0. Er hängt von den pKs-Werten der Amino- und Carboxylgruppe ab und liegt für die meisten neutralen Aminosäuren bei ca. 5,5–6,3. Saure AS (Asp, Glu) haben pI ≈ 3, basische (Lys, Arg, His) haben pI > 7,5. A ist korrekt (pKs ~9 > 7,4). B ist korrekt (pKs ~2 < 7,4). C und E sind korrekt.",
    "schwer",
    ["Aminosäuren", "Zwitterion", "isoelektrischer Punkt", "FALSCH-Frage"]
  ),
  q(
    "ch-pool-hard-046",
    "chem-kap6",
    "Glucose (C₆H₁₂O₆) und Fructose (C₆H₁₂O₆) haben dieselbe Summenformel. In welchem Verhältnis stehen sie zueinander?",
    ["Isomere (Konstitutionsisomere)", "Enantiomere", "Identische Verbindungen", "Polymere", "Homologe"],
    0,
    "Glucose und Fructose haben die gleiche Summenformel C₆H₁₂O₆, aber unterschiedliche Strukturformeln (Glucose = Aldohexose, Fructose = Ketohexose) → Konstitutionsisomere. Enantiomere hätten gleiche Struktur, aber spiegelbildliche Konfiguration. Identisch sind sie nicht (unterschiedliche Eigenschaften). Polymere bestehen aus Wiederholungseinheiten. Homologe unterscheiden sich um CH₂.",
    "schwer",
    ["Isomerie", "Kohlenhydrate", "Glucose", "Fructose"]
  ),
  q(
    "ch-pool-hard-047",
    "chem-kap6",
    "Was entsteht bei der Reaktion von Essigsäure (CH₃COOH) mit Ethanol (C₂H₅OH) in Gegenwart von H₂SO₄ als Katalysator?",
    ["Diethylether und Wasser", "Ethylacetat und Wasser", "Acetaldehyd und Wasser", "Essigsäureanhydrid und Wasser", "Acetamid und Wasser"],
    1,
    "Veresterung: CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ (Ethylacetat/Essigsäureethylester) + H₂O. H₂SO₄ wirkt als Katalysator (wasserentziehend). Diethylether entsteht aus 2 Ethanol (Kondensation). Acetaldehyd durch Oxidation von Ethanol. Essigsäureanhydrid aus 2 Essigsäure. Acetamid aus Essigsäure + Ammoniak.",
    "schwer",
    ["Veresterung", "funktionelle Gruppen", "Essigsäure"]
  ),
  q(
    "ch-pool-hard-048",
    "chem-kap6",
    "Welche der folgenden Verbindungen kann KEINE Wasserstoffbrücken als Donor ausbilden?",
    ["CH₃OH (Methanol)", "CH₃NH₂ (Methylamin)", "CH₃CHO (Acetaldehyd)", "H₂O (Wasser)", "CH₃COOH (Essigsäure)"],
    2,
    "H-Brücken-Donor braucht ein H-Atom an einem elektronegativen Atom (O, N, F). Acetaldehyd (CH₃CHO) hat zwar ein O-Atom (H-Brücken-Akzeptor!), aber KEIN O−H oder N−H → kann nicht als Donor fungieren. Methanol (O−H), Methylamin (N−H), Wasser (O−H) und Essigsäure (O−H) sind alle H-Brücken-Donoren.",
    "schwer",
    ["Wasserstoffbrücken", "funktionelle Gruppen", "zwischenmolekulare Kräfte"]
  ),
  q(
    "ch-pool-hard-049",
    "chem-kap6",
    "Bei der alkalischen Hydrolyse (Verseifung) eines Fettes entsteht:",
    ["Fettsäure + Glycerin", "Fettsäure-Natriumsalz (Seife) + Glycerin", "Fettsäure + Ethanol", "Fettsäure-Ester + Wasser", "Glycerin + Natriumhydroxid"],
    1,
    "Verseifung = alkalische Esterhydrolyse: Fett + 3 NaOH → 3 Fettsäure-Na-Salze (Seifen) + Glycerin. Fehler A: bei SAURER Hydrolyse entstehen freie Fettsäuren. C: Ethanol ist kein Bestandteil von Fetten. D: beschreibt die UMGEKEHRTE Reaktion (Veresterung). E: NaOH wird verbraucht, nicht gebildet.",
    "schwer",
    ["Verseifung", "Fette", "Ester"]
  ),
  q(
    "ch-pool-hard-050",
    "chem-kap6",
    "α-Glucose und β-Glucose unterscheiden sich in der Stellung der OH-Gruppe am C1-Atom. Wie nennt man dieses Isomerie-Verhältnis?",
    ["Konstitutionsisomerie", "Anomerie (Diastereomerie)", "Enantiomerie", "Mesomerie", "Tautomerie"],
    1,
    "α- und β-Glucose sind Anomere — sie unterscheiden sich nur in der Konfiguration am anomeren C-Atom (C1), das bei der Ringbildung zum neuen Stereozentrum wird. Anomere sind ein Spezialfall der Diastereomerie. Konstitutionsisomere hätten unterschiedliche Verknüpfung. Enantiomere wären Spiegelbilder. Mesomerie beschreibt Grenzstrukturen. Tautomerie = Isomerie durch H-Wanderung (z. B. Keto-Enol).",
    "schwer",
    ["Anomerie", "Kohlenhydrate", "Isomerie", "Glucose"]
  ),

  // ─── chem-kap1: Teilchen/Welle-Dualismus (Stichwort ch-2-03) ──────

  q(
    "ch-dualismus-001",
    "chem-kap1",
    "Welche Aussage beschreibt den Welle-Teilchen-Dualismus korrekt?",
    [
      "Materie und Strahlung zeigen sowohl Wellen- als auch Teilcheneigenschaften",
      "Licht ist ausschließlich eine Welle",
      "Elektronen verhalten sich ausschließlich wie Teilchen",
      "Der Dualismus gilt nur für makroskopische Objekte",
      "Teilcheneigenschaften und Welleneigenschaften schließen sich gegenseitig aus",
    ],
    0,
    "Der Welle-Teilchen-Dualismus ist ein Grundprinzip der Quantenmechanik: Sowohl elektromagnetische Strahlung (Photonen) als auch Materie (Elektronen, Atome) zeigen je nach Experiment Wellen- oder Teilcheneigenschaften. Beides sind komplementäre Beschreibungen desselben Phänomens.",
    "leicht",
    ["teilchen-welle-dualismus", "quantenmechanik"]
  ),

  q(
    "ch-dualismus-002",
    "chem-kap1",
    "Wie lautet die De-Broglie-Beziehung?",
    [
      "λ = h / p (Wellenlänge = Plancksches Wirkungsquantum / Impuls)",
      "λ = p / h",
      "λ = h · p",
      "λ = m · v",
      "λ = c / h",
    ],
    0,
    "Die De-Broglie-Beziehung λ = h/p = h/(m·v) ordnet jedem Teilchen mit Impuls p eine Materiewelle mit Wellenlänge λ zu. Louis de Broglie postulierte 1924, dass nicht nur Licht, sondern auch Materie Welleneigenschaften besitzt.",
    "mittel",
    ["teilchen-welle-dualismus", "de-broglie"]
  ),

  q(
    "ch-dualismus-003",
    "chem-kap1",
    "Welches Experiment zeigte erstmals den Wellencharakter von Elektronen?",
    [
      "Das Rutherford-Streuexperiment",
      "Das Davisson-Germer-Experiment (Elektronenbeugung an Nickelkristall)",
      "Der Millikan-Versuch",
      "Das Michelson-Morley-Experiment",
      "Der Franck-Hertz-Versuch",
    ],
    1,
    "Das Davisson-Germer-Experiment (1927) zeigte Beugungsmuster bei der Reflexion von Elektronen an einem Nickelkristall — ein eindeutiger Nachweis des Wellencharakters von Elektronen und Bestätigung der De-Broglie-Hypothese.",
    "schwer",
    ["teilchen-welle-dualismus", "davisson-germer", "elektronenbeugung"]
  ),

  q(
    "ch-dualismus-004",
    "chem-kap1",
    "Welche Eigenschaft von Licht beweist seinen Teilchencharakter?",
    [
      "Beugung am Spalt",
      "Interferenz",
      "Photoelektrischer Effekt",
      "Polarisation",
      "Brechung an Grenzflächen",
    ],
    2,
    "Der photoelektrische Effekt (Photoeffekt) beweist den Teilchencharakter von Licht: Licht überträgt Energie in diskreten Quanten (Photonen) auf Elektronen. Die Energie eines Photons ist E = h·f. Beugung, Interferenz und Polarisation sind Welleneigenschaften.",
    "mittel",
    ["teilchen-welle-dualismus", "photoeffekt"]
  ),

  q(
    "ch-dualismus-005",
    "chem-kap1",
    "Warum ist die De-Broglie-Wellenlänge makroskopischer Objekte praktisch nicht beobachtbar?",
    [
      "Weil die Masse so groß ist, dass λ = h/(m·v) extrem klein wird (viel kleiner als Atomdurchmesser)",
      "Weil makroskopische Objekte keine Masse haben",
      "Weil h für große Objekte nicht gilt",
      "Weil die Lichtgeschwindigkeit c die Wellenlänge aufhebt",
      "Weil makroskopische Objekte sich nicht bewegen",
    ],
    0,
    "Für ein Objekt mit großer Masse m ist die De-Broglie-Wellenlänge λ = h/(m·v) unvorstellbar klein (z. B. ≈ 10⁻³⁴ m für einen Ball), da h = 6,626·10⁻³⁴ J·s extrem klein ist. Beugungseffekte treten nur auf, wenn λ in der Größenordnung der Strukturen liegt.",
    "mittel",
    ["teilchen-welle-dualismus", "de-broglie"]
  ),

  q(
    "ch-dualismus-006",
    "chem-kap1",
    "Welche Bedeutung hat der Welle-Teilchen-Dualismus für das Verständnis von Orbitalen?",
    [
      "Elektronen in Atomen werden als stehende Materiewellen beschrieben, deren Wellenfunktion die Aufenthaltswahrscheinlichkeit bestimmt",
      "Elektronen bewegen sich auf festen Kreisbahnen wie Planeten",
      "Orbitale haben nichts mit dem Dualismus zu tun",
      "Der Dualismus erklärt nur das Verhalten von Photonen in Atomen",
      "Elektronen in Orbitalen haben keine Welleneigenschaften",
    ],
    0,
    "Der Welle-Teilchen-Dualismus ist die Grundlage des Orbitalmodells: Elektronen werden als stehende Materiewellen beschrieben (Schrödinger-Gleichung). Die Wellenfunktion ψ liefert über |ψ|² die Aufenthaltswahrscheinlichkeit. Die Quantisierung ergibt sich aus der Randbedingung für stehende Wellen.",
    "schwer",
    ["teilchen-welle-dualismus", "orbitale", "wellenfunktion"]
  ),

  q(
    "ch-dualismus-007",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Compton-Effekt ist korrekt?",
    [
      "Ein Photon überträgt beim Stoß mit einem Elektron Impuls und ändert seine Wellenlänge",
      "Ein Photon wird bei der Streuung vollständig absorbiert",
      "Der Compton-Effekt beweist den Wellencharakter von Licht",
      "Beim Compton-Effekt bleibt die Wellenlänge des Photons unverändert",
      "Der Compton-Effekt tritt nur bei Radiowellen auf",
    ],
    0,
    "Beim Compton-Effekt (1923) stößt ein Photon mit einem Elektron wie ein Teilchen. Das gestreute Photon hat eine größere Wellenlänge (weniger Energie), da es Impuls und Energie auf das Elektron übertragen hat. Dies beweist den Teilchencharakter von Röntgenstrahlung.",
    "schwer",
    ["teilchen-welle-dualismus", "compton-effekt"]
  ),

  q(
    "ch-dualismus-008",
    "chem-kap1",
    "Welche De-Broglie-Wellenlänge hat ein Elektron (m = 9,1 · 10⁻³¹ kg) mit einer Geschwindigkeit von 1,0 · 10⁶ m/s? (h = 6,6 · 10⁻³⁴ J·s)",
    [
      "0,73 nm",
      "7,3 nm",
      "0,073 nm",
      "73 nm",
      "0,0073 nm",
    ],
    0,
    "λ = h/(m·v) = 6,6·10⁻³⁴ / (9,1·10⁻³¹ · 1,0·10⁶) = 6,6·10⁻³⁴ / 9,1·10⁻²⁵ ≈ 7,3·10⁻¹⁰ m = 0,73 nm. Diese Wellenlänge liegt im Bereich von Atomabständen, weshalb Elektronenbeugung an Kristallen möglich ist.",
    "schwer",
    ["teilchen-welle-dualismus", "de-broglie", "rechenfrage"]
  ),

  q(
    "ch-dualismus-009",
    "chem-kap1",
    "Was versteht man unter der Komplementarität in der Quantenmechanik?",
    [
      "Wellen- und Teilcheneigenschaften ergänzen sich, können aber nicht gleichzeitig in einem Experiment beobachtet werden",
      "Wellen und Teilchen sind identisch",
      "Komplementarität bedeutet, dass nur der Wellencharakter existiert",
      "Komplementarität gilt nur für Protonen",
      "Beide Eigenschaften können immer gleichzeitig gemessen werden",
    ],
    0,
    "Das Komplementaritätsprinzip (Bohr, 1928) besagt, dass Wellen- und Teilcheneigenschaften komplementär sind: Sie schließen sich in einem einzelnen Experiment gegenseitig aus, sind aber beide nötig, um Quantenobjekte vollständig zu beschreiben. Welches Verhalten beobachtet wird, hängt vom Versuchsaufbau ab.",
    "mittel",
    ["teilchen-welle-dualismus", "komplementaritaet", "bohr"]
  ),

  q(
    "ch-dualismus-010",
    "chem-kap1",
    "Welche der folgenden Aussagen zum Teilchen-Welle-Dualismus ist FALSCH?",
    [
      "Photonen zeigen im Doppelspaltexperiment Interferenzmuster (Wellencharakter)",
      "Elektronen können an Kristallen gebeugt werden (Wellencharakter)",
      "Der Dualismus wurde erst im 21. Jahrhundert entdeckt",
      "Die De-Broglie-Wellenlänge ist umgekehrt proportional zum Impuls",
      "Der Photoeffekt zeigt den Teilchencharakter von Licht",
    ],
    2,
    "Der Welle-Teilchen-Dualismus wurde NICHT erst im 21. Jahrhundert entdeckt. Einstein erklärte den Photoeffekt 1905, De Broglie postulierte die Materiewellen 1924, Davisson und Germer bestätigten sie experimentell 1927. Alles im frühen 20. Jahrhundert.",
    "leicht",
    ["teilchen-welle-dualismus", "falsch-aussage"]
  ),
];
