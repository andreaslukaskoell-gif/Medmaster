/**
 * Physik Pool — \"Was ist falsch?" (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/physik.
 * 60 Fragen: je 10 pro Kapitelbereich (kap1–kap5, kap7).
 * Schwierigkeit: 24 leicht, 24 mittel, 12 schwer.
 */
import type { Question } from "./index";

const ids = ["a", "b", "c", "d", "e"] as const;

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer",
  tags: string[]
): Question {
  return {
    id,
    subject: "physik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const physikWasIstFalsch: Question[] = [
  // ─── kap1: Mechanik (10 Fragen) ───────────────────────────────────

  q(
    "ph-wif-001",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Newtonschen Mechanik ist FALSCH?",
    [
      "Actio und Reactio wirken stets auf denselben Körper.",
      "Ein Körper bleibt in Ruhe oder bewegt sich gleichförmig, wenn keine resultierende Kraft auf ihn wirkt.",
      "F = m · a beschreibt den Zusammenhang zwischen Kraft, Masse und Beschleunigung.",
      "Die Gewichtskraft eines Körpers hängt von der Erdbeschleunigung ab.",
      "Kräfte sind vektorielle Größen und können durch Pfeile dargestellt werden.",
    ],
    0,
    "Actio und Reactio (3. Newtonsches Gesetz) wirken stets auf zwei verschiedene Körper, nicht auf denselben. Die Kräfte sind gleich groß, entgegengesetzt gerichtet, greifen aber an unterschiedlichen Körpern an.",
    "mittel",
    ["falsch-aussage", "mechanik", "newton"]
  ),

  q(
    "ph-wif-002",
    "phys-kap1",
    "Welche der folgenden Aussagen zur kinetischen Energie ist FALSCH?",
    [
      "Die kinetische Energie ist proportional zur Masse des Körpers.",
      "Die kinetische Energie ist proportional zur Geschwindigkeit des Körpers.",
      "Die kinetische Energie ist stets positiv oder null.",
      "Die Einheit der kinetischen Energie ist Joule.",
      "Ein ruhender Körper hat die kinetische Energie null.",
    ],
    1,
    "Die kinetische Energie E_kin = ½ · m · v² ist proportional zum Quadrat der Geschwindigkeit, nicht zur Geschwindigkeit selbst. Verdoppelt man die Geschwindigkeit, vervierfacht sich die kinetische Energie.",
    "mittel",
    ["falsch-aussage", "mechanik", "energie"]
  ),

  q(
    "ph-wif-003",
    "phys-kap1",
    "Welche der folgenden Aussagen zum freien Fall ist FALSCH?",
    [
      "Im Vakuum fallen alle Körper unabhängig von ihrer Masse gleich schnell.",
      "Die Fallbeschleunigung auf der Erdoberfläche beträgt etwa 9,81 m/s².",
      "Die Fallstrecke wächst linear mit der Zeit.",
      "Die Geschwindigkeit im freien Fall nimmt gleichmäßig zu.",
      "Der freie Fall ist eine gleichmäßig beschleunigte Bewegung.",
    ],
    2,
    "Die Fallstrecke wächst quadratisch mit der Zeit (s = ½ · g · t²), nicht linear. Die Geschwindigkeit nimmt linear zu (v = g · t), was die quadratische Abhängigkeit der Strecke bewirkt.",
    "mittel",
    ["falsch-aussage", "mechanik", "freier-fall"]
  ),

  q(
    "ph-wif-004",
    "phys-kap1",
    "Welche der folgenden Aussagen zum Impuls ist FALSCH?",
    [
      "Der Impuls ist das Produkt aus Masse und Geschwindigkeit.",
      "Der Impuls ist eine vektorielle Größe.",
      "In einem abgeschlossenen System bleibt der Gesamtimpuls erhalten.",
      "Bei einer vollkommen elastischen Kollision geht Impuls verloren.",
      "Die Einheit des Impulses ist kg · m/s.",
    ],
    3,
    "Bei jeder Kollision in einem abgeschlossenen System bleibt der Gesamtimpuls erhalten – sowohl bei elastischen als auch bei unelastischen Stößen. Bei einem elastischen Stoß bleibt zusätzlich die kinetische Energie erhalten.",
    "schwer",
    ["falsch-aussage", "mechanik", "impuls"]
  ),

  q(
    "ph-wif-005",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Reibung ist FALSCH?",
    [
      "Die Reibungskraft ist proportional zur Auflagefläche des Körpers.",
      "Reibungskräfte wirken stets der Bewegungsrichtung entgegen.",
      "Die Haftreibungskraft verhindert das Gleiten eines Körpers.",
      "Die Reibungskraft hängt von der Normalkraft ab.",
      "Gleitreibung ist in der Regel kleiner als Haftreibung.",
    ],
    0,
    "Im Coulombschen Reibungsmodell ist die Reibungskraft F_R = μ · F_N und unabhängig von der Größe der Auflagefläche. Dies ist eine häufige Falle: Die Kontaktfläche spielt im idealisierten Modell keine Rolle.",
    "schwer",
    ["falsch-aussage", "mechanik", "reibung"]
  ),

  q(
    "ph-wif-006",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Arbeit und Leistung ist FALSCH?",
    [
      "Hält man einen schweren Gegenstand ruhig in der Hand, verrichtet man mechanische Arbeit.",
      "Arbeit wird verrichtet, wenn eine Kraft einen Körper längs eines Weges verschiebt.",
      "Die Einheit der Leistung ist Watt (W = J/s).",
      "Bei der Hubarbeit gilt W = m · g · h.",
      "Die Leistung ist der Quotient aus Arbeit und Zeit.",
    ],
    0,
    "Mechanische Arbeit erfordert eine Kraft und eine Verschiebung in Kraftrichtung (W = F · s · cos α). Beim ruhigen Halten ist die Verschiebung null, daher wird keine mechanische Arbeit verrichtet – auch wenn die Muskulatur physiologisch Energie verbraucht.",
    "mittel",
    ["falsch-aussage", "mechanik", "arbeit", "leistung"]
  ),

  q(
    "ph-wif-007",
    "phys-kap1",
    "Welche der folgenden Aussagen zur gleichförmigen Kreisbewegung ist FALSCH?",
    [
      "Die Zentripetalkraft zeigt zum Mittelpunkt der Kreisbahn.",
      "Die Zentrifugalkraft ist eine echte Kraft im Inertialsystem.",
      "Die Bahngeschwindigkeit ist bei gleichförmiger Kreisbewegung konstant.",
      "Die Zentripetalbeschleunigung ist proportional zum Quadrat der Bahngeschwindigkeit.",
      "Die Winkelgeschwindigkeit ω ist bei gleichförmiger Kreisbewegung konstant.",
    ],
    1,
    "Die Zentrifugalkraft ist eine Scheinkraft (Trägheitskraft), die nur in rotierenden Bezugssystemen (Nichtinertialsystemen) auftritt. Im Inertialsystem gibt es nur die Zentripetalkraft als reale Kraft.",
    "schwer",
    ["falsch-aussage", "mechanik", "kreisbewegung"]
  ),

  q(
    "ph-wif-008",
    "phys-kap1",
    "Welche der folgenden Aussagen zur Gravitation ist FALSCH?",
    [
      "Die Gravitationskraft wirkt zwischen allen Massen.",
      "Die Gravitationskraft nimmt mit dem Quadrat des Abstands ab.",
      "Auf der Mondoberfläche ist die Gewichtskraft eines Körpers geringer als auf der Erde.",
      "Die Gravitationskraft ist stets anziehend.",
      "Die Gravitationskonstante G hängt von den beteiligten Massen ab.",
    ],
    4,
    "Die Gravitationskonstante G ≈ 6,674 × 10⁻¹¹ N·m²/kg² ist eine universelle Naturkonstante und hängt nicht von den Massen ab. Das Gravitationsgesetz lautet F = G · m₁ · m₂ / r².",
    "schwer",
    ["falsch-aussage", "mechanik", "gravitation"]
  ),

  q(
    "ph-wif-009",
    "phys-kap1",
    "Welche der folgenden Aussagen zum schiefen Wurf ist FALSCH?",
    [
      "Die horizontale Geschwindigkeitskomponente bleibt bei Vernachlässigung der Luftreibung konstant.",
      "Die maximale Wurfweite wird bei einem Abwurfwinkel von 45° erreicht.",
      "Die Wurfweite verdoppelt sich, wenn man die Abwurfgeschwindigkeit verdoppelt.",
      "Die vertikale Bewegung ist eine gleichmäßig beschleunigte Bewegung.",
      "Am höchsten Punkt der Bahn ist die vertikale Geschwindigkeitskomponente null.",
    ],
    2,
    "Die Wurfweite ist proportional zum Quadrat der Abwurfgeschwindigkeit (R = v₀² · sin(2α) / g). Verdoppelt man v₀, vervierfacht sich die Wurfweite – sie verdoppelt sich nicht.",
    "schwer",
    ["falsch-aussage", "mechanik", "wurf"]
  ),

  q(
    "ph-wif-010",
    "phys-kap1",
    "Welche der folgenden Aussagen zur potentiellen Energie ist FALSCH?",
    [
      "Die potentielle Energie eines Körpers hängt von der gewählten Bezugshöhe ab.",
      "Im Gravitationsfeld der Erde gilt E_pot = m · g · h.",
      "Potentielle Energie kann in kinetische Energie umgewandelt werden.",
      "Die Spannenergie einer Feder ist proportional zur Auslenkung.",
      "Die potentielle Energie ist eine Zustandsgröße.",
    ],
    3,
    "Die Spannenergie einer Feder ist E = ½ · k · x² und somit proportional zum Quadrat der Auslenkung, nicht zur Auslenkung selbst. Die Federkraft F = k · x ist linear, die Energie jedoch quadratisch.",
    "schwer",
    ["falsch-aussage", "mechanik", "energie"]
  ),

  // ─── kap2: Fluidmechanik (10 Fragen) ──────────────────────────────

  q(
    "ph-wif-011",
    "phys-kap2",
    "Welche der folgenden Aussagen zum hydrostatischen Druck ist FALSCH?",
    [
      "Der hydrostatische Druck nimmt mit der Tiefe zu.",
      "Der hydrostatische Druck in einer bestimmten Tiefe hängt von der Form des Gefäßes ab.",
      "Die Einheit des Drucks ist Pascal (Pa = N/m²).",
      "Der hydrostatische Druck wirkt in alle Richtungen gleich.",
      "Der hydrostatische Druck hängt von der Dichte der Flüssigkeit ab.",
    ],
    1,
    "Der hydrostatische Druck p = ρ · g · h hängt nur von der Dichte der Flüssigkeit, der Erdbeschleunigung und der Tiefe ab – nicht von der Form des Gefäßes. Dies ist das hydrostatische Paradoxon.",
    "mittel",
    ["falsch-aussage", "fluidmechanik", "druck"]
  ),

  q(
    "ph-wif-012",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Archimedischen Prinzip ist FALSCH?",
    [
      "Die Auftriebskraft hängt von der Masse des eingetauchten Körpers ab.",
      "Ein Körper schwebt, wenn seine Dichte gleich der Dichte der Flüssigkeit ist.",
      "Die Auftriebskraft hängt vom Volumen des eingetauchten Körperteils ab.",
      "Ein Körper sinkt, wenn seine Dichte größer als die der Flüssigkeit ist.",
      "Die Auftriebskraft ist gleich der Gewichtskraft der verdrängten Flüssigkeit.",
    ],
    0,
    "Die Auftriebskraft F_A = ρ_Flüssigkeit · g · V_eingetaucht hängt von der Dichte der Flüssigkeit und dem eingetauchten Volumen ab, nicht von der Masse des Körpers. Zwei Körper gleichen Volumens erfahren denselben Auftrieb, unabhängig von ihrer Masse.",
    "mittel",
    ["falsch-aussage", "fluidmechanik", "auftrieb"]
  ),

  q(
    "ph-wif-013",
    "phys-kap2",
    "Welche der folgenden Aussagen zur Kontinuitätsgleichung ist FALSCH?",
    [
      "In einem Rohr mit Verengung nimmt die Strömungsgeschwindigkeit zu.",
      "Bei einer Verengung des Rohres steigt der statische Druck.",
      "Das Produkt aus Querschnittsfläche und Geschwindigkeit ist konstant.",
      "Die Kontinuitätsgleichung gilt für inkompressible Flüssigkeiten.",
      "Der Volumenstrom bleibt in einem Rohr ohne Abzweigung konstant.",
    ],
    1,
    "Nach dem Bernoulli-Prinzip sinkt der statische Druck an einer Verengung, weil die Strömungsgeschwindigkeit zunimmt (Kontinuität: A₁v₁ = A₂v₂). Höhere kinetische Energiedichte = niedrigerer statischer Druck.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "kontinuität", "bernoulli"]
  ),

  q(
    "ph-wif-014",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Blutdruck ist FALSCH?",
    [
      "Der systolische Druck ist der maximale Druck während der Herzkontraktion.",
      "Blutdruck wird üblicherweise in mmHg angegeben.",
      "In den Venen ist der Blutdruck höher als in den Arterien.",
      "Der diastolische Druck ist der Druck in der Entspannungsphase des Herzens.",
      "1 mmHg entspricht etwa 133,3 Pa.",
    ],
    2,
    "In den Venen ist der Blutdruck deutlich niedriger als in den Arterien. Der arterielle Mitteldruck liegt bei etwa 100 mmHg, während er in den Venen auf wenige mmHg abfällt.",
    "mittel",
    ["falsch-aussage", "fluidmechanik", "blutdruck"]
  ),

  q(
    "ph-wif-015",
    "phys-kap2",
    "Welche der folgenden Aussagen zur Viskosität ist FALSCH?",
    [
      "Die Viskosität beschreibt die Zähigkeit einer Flüssigkeit.",
      "Bei laminarer Strömung bewegen sich die Flüssigkeitsschichten parallel zueinander.",
      "Das Hagen-Poiseuille-Gesetz beschreibt den Volumenstrom in Rohren.",
      "Die Viskosität von Wasser nimmt mit steigender Temperatur zu.",
      "Blut verhält sich als nicht-newtonsche Flüssigkeit.",
    ],
    3,
    "Die Viskosität von Wasser nimmt mit steigender Temperatur ab, nicht zu. Bei höherer Temperatur bewegen sich die Moleküle schneller, wodurch die intermolekularen Wechselwirkungen abnehmen und die Flüssigkeit dünnflüssiger wird.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "viskosität"]
  ),

  q(
    "ph-wif-016",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Bernoulli-Effekt ist FALSCH?",
    [
      "In einem horizontalen Rohr ist die Summe aus statischem und dynamischem Druck konstant.",
      "An Tragflächen erzeugt die schnellere Strömung an der Oberseite einen Unterdruck.",
      "Die Bernoulli-Gleichung gilt streng nur für reibungsfreie, inkompressible Strömungen.",
      "Der dynamische Druck ist proportional zur Strömungsgeschwindigkeit.",
      "Ein Venturi-Rohr nutzt den Bernoulli-Effekt zur Druckmessung.",
    ],
    3,
    "Der dynamische Druck ist p_dyn = ½ · ρ · v² und somit proportional zum Quadrat der Strömungsgeschwindigkeit, nicht zur Geschwindigkeit selbst.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "bernoulli"]
  ),

  q(
    "ph-wif-017",
    "phys-kap2",
    "Welche der folgenden Aussagen zur Oberflächenspannung ist FALSCH?",
    [
      "Die Oberflächenspannung nimmt mit steigender Temperatur zu.",
      "Tenside verringern die Oberflächenspannung von Wasser.",
      "Wasser hat eine besonders hohe Oberflächenspannung aufgrund von Wasserstoffbrücken.",
      "Die Oberflächenspannung bewirkt, dass Flüssigkeiten eine möglichst kleine Oberfläche einnehmen.",
      "Kleine Insekten können dank der Oberflächenspannung auf Wasser laufen.",
    ],
    0,
    "Die Oberflächenspannung nimmt mit steigender Temperatur ab, weil die thermische Bewegung der Moleküle die Kohäsionskräfte schwächt. Bei der Siedetemperatur wird sie null.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "oberflächenspannung"]
  ),

  q(
    "ph-wif-018",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Hagen-Poiseuille-Gesetz ist FALSCH?",
    [
      "Der Volumenstrom ist proportional zur Druckdifferenz.",
      "Der Volumenstrom ist umgekehrt proportional zur Länge des Rohres.",
      "Der Volumenstrom ist proportional zum Quadrat des Radius.",
      "Der Volumenstrom ist proportional zur vierten Potenz des Radius.",
      "Das Gesetz gilt für laminare Strömung in zylindrischen Rohren.",
    ],
    2,
    "Nach dem Hagen-Poiseuille-Gesetz ist der Volumenstrom Q = (π · Δp · r⁴) / (8 · η · L), also proportional zur vierten Potenz des Radius, nicht zum Quadrat. Eine Halbierung des Radius reduziert den Volumenstrom auf 1/16.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "hagen-poiseuille"]
  ),

  q(
    "ph-wif-019",
    "phys-kap2",
    "Welche der folgenden Aussagen zur Kapillarität ist FALSCH?",
    [
      "Wasser steigt in engen Glasröhren aufgrund der Adhäsionskräfte auf.",
      "Quecksilber wird in Glaskapillaren herabgedrückt (konvexer Meniskus).",
      "Je enger die Kapillare, desto höher steigt die Flüssigkeit.",
      "Kapillarität spielt beim Wassertransport in Pflanzen eine Rolle.",
      "Die Steighöhe ist unabhängig von der Oberflächenspannung der Flüssigkeit.",
    ],
    4,
    "Die Steighöhe in einer Kapillare ist h = (2 · σ · cos θ) / (ρ · g · r) und hängt direkt von der Oberflächenspannung σ ab. Eine höhere Oberflächenspannung führt zu einer größeren Steighöhe.",
    "schwer",
    ["falsch-aussage", "fluidmechanik", "kapillarität"]
  ),

  q(
    "ph-wif-020",
    "phys-kap2",
    "Welche der folgenden Aussagen zum Pascal'schen Prinzip ist FALSCH?",
    [
      "Druck breitet sich in einer eingeschlossenen Flüssigkeit gleichmäßig aus.",
      "Hydraulische Pressen nutzen das Pascal'sche Prinzip.",
      "Bei einer hydraulischen Presse ist die Kraft am großen Kolben größer als am kleinen.",
      "Bei einer hydraulischen Presse wird der Weg am großen Kolben größer als am kleinen.",
      "Das Pascal'sche Prinzip erklärt die Funktionsweise von Bremsanlagen.",
    ],
    3,
    "Bei einer hydraulischen Presse ist der Weg am großen Kolben kleiner als am kleinen Kolben. Es gilt F₁ · s₁ = F₂ · s₂ (Energieerhaltung): Der große Kolben liefert zwar mehr Kraft, aber weniger Weg.",
    "mittel",
    ["falsch-aussage", "fluidmechanik", "pascal"]
  ),

  // ─── kap3: Schwingungen und Wellen (10 Fragen) ────────────────────

  q(
    "ph-wif-021",
    "phys-kap3",
    "Welche der folgenden Aussagen zu mechanischen Schwingungen ist FALSCH?",
    [
      "Die Frequenz einer Schwingung ist der Kehrwert der Periodendauer.",
      "Die Amplitude gibt die maximale Auslenkung an.",
      "Eine harmonische Schwingung lässt sich durch eine Sinusfunktion beschreiben.",
      "Die Eigenfrequenz eines Federpendels hängt von der Federkonstante ab.",
      "Die Periodendauer eines Fadenpendels hängt von der Masse des Pendelkörpers ab.",
    ],
    4,
    "Die Periodendauer eines Fadenpendels T = 2π · √(L/g) hängt nur von der Fadenlänge L und der Erdbeschleunigung g ab, nicht von der Masse. Dies ist ein klassischer MedAT-Fehler.",
    "mittel",
    ["falsch-aussage", "schwingungen", "pendel"]
  ),

  q(
    "ph-wif-022",
    "phys-kap3",
    "Welche der folgenden Aussagen zu Schallwellen ist FALSCH?",
    [
      "Schall breitet sich im Vakuum aus.",
      "Schall breitet sich in Luft als Longitudinalwelle aus.",
      "Die Schallgeschwindigkeit in Luft beträgt etwa 343 m/s bei 20 °C.",
      "Die Lautstärke wird in Dezibel (dB) gemessen.",
      "Schall breitet sich in Festkörpern schneller aus als in Luft.",
    ],
    0,
    "Schall ist eine mechanische Welle und benötigt ein Medium zur Ausbreitung. Im Vakuum gibt es keine Teilchen, die Schwingungen übertragen können – daher kann sich Schall im Vakuum nicht ausbreiten.",
    "mittel",
    ["falsch-aussage", "wellen", "akustik"]
  ),

  q(
    "ph-wif-023",
    "phys-kap3",
    "Welche der folgenden Aussagen zum Doppler-Effekt ist FALSCH?",
    [
      "Bei Annäherung einer Schallquelle wird die Frequenz höher wahrgenommen.",
      "Der Doppler-Effekt tritt bei Schall und Licht auf.",
      "Rettungswagen nutzen den Doppler-Effekt nicht absichtlich, er tritt aber auf.",
      "Bei Entfernung einer Schallquelle wird die Wellenlänge kleiner.",
      "Die wahrgenommene Frequenzänderung hängt von der Relativgeschwindigkeit ab.",
    ],
    3,
    "Bei Entfernung einer Schallquelle wird die wahrgenommene Frequenz niedriger und die Wellenlänge größer, nicht kleiner. Die Wellenfronten werden auseinandergezogen.",
    "schwer",
    ["falsch-aussage", "wellen", "doppler"]
  ),

  q(
    "ph-wif-024",
    "phys-kap3",
    "Welche der folgenden Aussagen zur Lichtbrechung ist FALSCH?",
    [
      "Licht wird beim Übergang von einem optisch dünneren in ein optisch dichteres Medium zum Lot hin gebrochen.",
      "Die Lichtgeschwindigkeit im optisch dichteren Medium ist höher als im Vakuum.",
      "Totalreflexion tritt beim Übergang vom optisch dichteren ins optisch dünnere Medium auf.",
      "Der Brechungsindex von Vakuum ist definitionsgemäß 1.",
      "Beim Übergang vom optisch dichteren ins optisch dünnere Medium wird Licht vom Lot weg gebrochen.",
    ],
    1,
    "Die Lichtgeschwindigkeit im optisch dichteren Medium ist niedriger als im Vakuum. Es gilt v = c/n, wobei n > 1 den Brechungsindex des Mediums darstellt. In Glas (n ≈ 1,5) beträgt die Lichtgeschwindigkeit nur etwa 2 × 10⁸ m/s.",
    "mittel",
    ["falsch-aussage", "wellen", "optik", "brechung"]
  ),

  q(
    "ph-wif-025",
    "phys-kap3",
    "Welche der folgenden Aussagen zu Linsen ist FALSCH?",
    [
      "Sammellinsen bündeln parallel einfallendes Licht in einem Brennpunkt.",
      "Zerstreuungslinsen erzeugen stets virtuelle Bilder.",
      "Sammellinsen erzeugen stets reelle Bilder.",
      "Die Brechkraft einer Linse wird in Dioptrien angegeben.",
      "Die Brechkraft ist der Kehrwert der Brennweite in Metern.",
    ],
    2,
    "Sammellinsen erzeugen nur dann ein reelles Bild, wenn der Gegenstand außerhalb der Brennweite liegt. Befindet sich der Gegenstand innerhalb der Brennweite, entsteht ein virtuelles, aufrechtes, vergrößertes Bild (Lupe).",
    "schwer",
    ["falsch-aussage", "wellen", "optik", "linsen"]
  ),

  q(
    "ph-wif-026",
    "phys-kap3",
    "Welche der folgenden Aussagen zur Resonanz ist FALSCH?",
    [
      "Resonanz tritt auf, wenn die Erregerfrequenz gleich der Eigenfrequenz ist.",
      "Bei Resonanz erreicht die Amplitude ihr Maximum.",
      "Resonanz kann zu Zerstörung von Strukturen führen (z. B. Brücken).",
      "Dämpfung verringert die Resonanzamplitude.",
      "Resonanz tritt nur bei mechanischen Systemen auf, nicht bei elektromagnetischen.",
    ],
    4,
    "Resonanz ist ein universelles Phänomen und tritt bei allen schwingungsfähigen Systemen auf – mechanischen, elektromagnetischen und akustischen. Beispiel: Schwingkreise in der Elektronik nutzen elektromagnetische Resonanz.",
    "schwer",
    ["falsch-aussage", "schwingungen", "resonanz"]
  ),

  q(
    "ph-wif-027",
    "phys-kap3",
    "Welche der folgenden Aussagen zur Interferenz ist FALSCH?",
    [
      "Interferenz tritt nur bei Lichtwellen auf, nicht bei Schallwellen.",
      "Bei destruktiver Interferenz können sich Wellen gegenseitig auslöschen.",
      "Für Interferenz müssen die Wellen kohärent sein.",
      "Interferenz ist ein Beweis für den Wellencharakter von Licht.",
      "Bei konstruktiver Interferenz addieren sich die Amplituden.",
    ],
    0,
    "Interferenz tritt bei allen Wellenarten auf – sowohl bei Licht- als auch bei Schallwellen und Wasserwellen. Sie ist eine grundlegende Welleneigenschaft und nicht auf eine bestimmte Wellenart beschränkt.",
    "mittel",
    ["falsch-aussage", "wellen", "interferenz"]
  ),

  q(
    "ph-wif-028",
    "phys-kap3",
    "Welche der folgenden Aussagen zum menschlichen Auge ist FALSCH?",
    [
      "Die Augenlinse kann ihre Brennweite verändern (Akkommodation).",
      "Bei Kurzsichtigkeit liegt der Brennpunkt vor der Netzhaut.",
      "Bei Weitsichtigkeit liegt der Brennpunkt hinter der Netzhaut.",
      "Die Netzhaut enthält Stäbchen und Zapfen als Photorezeptoren.",
      "Kurzsichtigkeit wird mit Sammellinsen korrigiert.",
    ],
    4,
    "Kurzsichtigkeit (Myopie) wird mit Zerstreuungslinsen (Konkavlinsen) korrigiert, nicht mit Sammellinsen. Die Zerstreuungslinse verschiebt den Brennpunkt nach hinten auf die Netzhaut. Sammellinsen werden bei Weitsichtigkeit eingesetzt.",
    "mittel",
    ["falsch-aussage", "optik", "auge"]
  ),

  q(
    "ph-wif-029",
    "phys-kap3",
    "Welche der folgenden Aussagen zu stehenden Wellen ist FALSCH?",
    [
      "Stehende Wellen entstehen durch Überlagerung zweier gegenläufiger Wellen gleicher Frequenz.",
      "Bei einer stehenden Welle wird Energie in Ausbreitungsrichtung transportiert.",
      "An den Bäuchen einer stehenden Welle ist die Amplitude maximal.",
      "Stehende Wellen treten z. B. bei Saiteninstrumenten auf.",
      "An den Knoten einer stehenden Welle ist die Amplitude stets null.",
    ],
    1,
    "Bei einer stehenden Welle findet kein Netto-Energietransport in Ausbreitungsrichtung statt. Die Energie pendelt zwischen den Bäuchen hin und her, wird aber nicht weitertransportiert – im Gegensatz zu einer fortschreitenden Welle.",
    "schwer",
    ["falsch-aussage", "wellen", "stehende-wellen"]
  ),

  q(
    "ph-wif-030",
    "phys-kap3",
    "Welche der folgenden Aussagen zur Dezibel-Skala ist FALSCH?",
    [
      "Die Dezibel-Skala ist logarithmisch.",
      "Eine Verdoppelung der Schallintensität entspricht einer Zunahme um 3 dB.",
      "Die Schmerzschwelle liegt bei etwa 120–130 dB.",
      "Eine Zunahme um 10 dB entspricht einer Verdoppelung der wahrgenommenen Lautstärke.",
      "0 dB bedeutet, dass kein Schall vorhanden ist.",
    ],
    4,
    "0 dB bedeutet nicht, dass kein Schall vorhanden ist, sondern dass der Schalldruckpegel an der Hörschwelle liegt (I₀ = 10⁻¹² W/m²). Es ist der Referenzpunkt, nicht die Abwesenheit von Schall.",
    "schwer",
    ["falsch-aussage", "akustik", "dezibel"]
  ),

  // ─── kap4: Wärmelehre (10 Fragen) ─────────────────────────────────

  q(
    "ph-wif-031",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Temperatur ist FALSCH?",
    [
      "Der absolute Nullpunkt liegt bei −273,15 °C.",
      "Die Kelvin-Skala hat denselben Skalenabstand wie die Celsius-Skala.",
      "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen.",
      "Am absoluten Nullpunkt haben alle Teilchen maximale Entropie.",
      "Zwischen Kelvin und Celsius gilt: T(K) = T(°C) + 273,15.",
    ],
    3,
    "Am absoluten Nullpunkt (0 K) nimmt die Entropie eines perfekten Kristalls den Wert null an (3. Hauptsatz der Thermodynamik). Die Teilchenbewegung ist minimal – die Entropie ist am absoluten Nullpunkt nicht maximal, sondern minimal.",
    "schwer",
    ["falsch-aussage", "wärmelehre", "temperatur"]
  ),

  q(
    "ph-wif-032",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Wärmeübertragung ist FALSCH?",
    [
      "Wärmeleitung findet hauptsächlich in Festkörpern statt.",
      "Konvektion ist Wärmetransport durch Strömung.",
      "Wärmestrahlung benötigt ein Medium zur Übertragung.",
      "Metalle sind in der Regel gute Wärmeleiter.",
      "Dunkle Oberflächen absorbieren mehr Wärmestrahlung als helle.",
    ],
    2,
    "Wärmestrahlung (Infrarotstrahlung) ist eine elektromagnetische Welle und benötigt kein Medium – sie breitet sich auch im Vakuum aus. So erreicht uns die Sonnenwärme durch das Vakuum des Weltraums.",
    "mittel",
    ["falsch-aussage", "wärmelehre", "wärmeübertragung"]
  ),

  q(
    "ph-wif-033",
    "phys-kap4",
    "Welche der folgenden Aussagen zum idealen Gas ist FALSCH?",
    [
      "Bei konstantem Volumen ist der Druck proportional zur Temperatur (in Kelvin).",
      "Bei isothermer Kompression bleibt die innere Energie eines idealen Gases konstant und die Temperatur steigt.",
      "Bei konstantem Druck ist das Volumen proportional zur Temperatur (in Kelvin).",
      "Die innere Energie eines idealen Gases hängt nur von der Temperatur ab.",
      "Bei konstanter Temperatur ist das Produkt aus Druck und Volumen konstant.",
    ],
    1,
    "Bei isothermer Kompression bleibt definitionsgemäß die Temperatur konstant (isotherm = gleiche Temperatur). Die innere Energie eines idealen Gases hängt nur von der Temperatur ab, bleibt also ebenfalls konstant. Die bei der Kompression zugeführte Arbeit wird als Wärme abgegeben.",
    "schwer",
    ["falsch-aussage", "wärmelehre", "ideales-gas"]
  ),

  q(
    "ph-wif-034",
    "phys-kap4",
    "Welche der folgenden Aussagen zu den Hauptsätzen der Thermodynamik ist FALSCH?",
    [
      "Der 2. Hauptsatz verbietet, dass Wärme von einem kalten zu einem warmen Körper fließen kann.",
      "Der 1. Hauptsatz beschreibt die Energieerhaltung.",
      "Der 2. Hauptsatz besagt, dass Wärme spontan stets vom wärmeren zum kälteren Körper fließt.",
      "Ein Perpetuum mobile 2. Art würde den 2. Hauptsatz verletzen.",
      "Die Entropie eines abgeschlossenen Systems kann nicht abnehmen.",
    ],
    0,
    "Der 2. Hauptsatz verbietet nicht den Wärmefluss von kalt nach warm – er verbietet nur, dass dies spontan geschieht. Eine Wärmepumpe oder ein Kühlschrank transportiert Wärme von kalt nach warm, benötigt dafür aber externe Arbeit.",
    "schwer",
    ["falsch-aussage", "wärmelehre", "thermodynamik"]
  ),

  q(
    "ph-wif-035",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Wärmekapazität ist FALSCH?",
    [
      "Die spezifische Wärmekapazität gibt an, wie viel Energie nötig ist, um 1 kg eines Stoffes um 1 K zu erwärmen.",
      "Die spezifische Wärmekapazität ist für alle Stoffe gleich.",
      "Die aufgenommene Wärmemenge berechnet sich aus Q = m · c · ΔT.",
      "Metalle haben in der Regel eine niedrigere spezifische Wärmekapazität als Wasser.",
      "Wasser hat eine besonders hohe spezifische Wärmekapazität.",
    ],
    1,
    "Die spezifische Wärmekapazität ist eine stoffspezifische Eigenschaft und variiert stark: Wasser hat c ≈ 4186 J/(kg·K), Eisen nur c ≈ 449 J/(kg·K). Sie ist definitiv nicht für alle Stoffe gleich.",
    "mittel",
    ["falsch-aussage", "wärmelehre", "wärmekapazität"]
  ),

  q(
    "ph-wif-036",
    "phys-kap4",
    "Welche der folgenden Aussagen zu Phasenübergängen ist FALSCH?",
    [
      "Beim Schmelzen wird Energie zugeführt, ohne dass die Temperatur steigt.",
      "Die Schmelzwärme ist die Energie, die zum Phasenübergang fest→flüssig benötigt wird.",
      "Verdampfen ist ein endothermer Prozess.",
      "Sublimation ist der direkte Übergang von flüssig zu gasförmig.",
      "Bei Kondensation wird Wärme an die Umgebung abgegeben.",
    ],
    3,
    "Sublimation ist der direkte Übergang von fest zu gasförmig (z. B. Trockeneis), nicht von flüssig zu gasförmig. Der Übergang von flüssig zu gasförmig heißt Verdampfen bzw. Verdunsten.",
    "mittel",
    ["falsch-aussage", "wärmelehre", "phasenübergänge"]
  ),

  q(
    "ph-wif-037",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Wärmeausdehnung ist FALSCH?",
    [
      "Die meisten Stoffe dehnen sich bei Erwärmung aus.",
      "Wasser dehnt sich beim Gefrieren zusammen.",
      "Die Volumenausdehnung ist etwa dreimal so groß wie die Längenausdehnung.",
      "Wasser hat eine Dichteanomalie: Es hat bei 4 °C die größte Dichte.",
      "Bimetallstreifen nutzen die unterschiedliche Wärmeausdehnung zweier Metalle.",
    ],
    1,
    "Wasser dehnt sich beim Gefrieren aus (Anomalie des Wassers). Eis hat ein größeres Volumen als die gleiche Masse flüssigen Wassers, weshalb Eis auf Wasser schwimmt. Gefrierendes Wasser in geschlossenen Rohren kann diese sprengen.",
    "mittel",
    ["falsch-aussage", "wärmelehre", "wärmeausdehnung"]
  ),

  q(
    "ph-wif-038",
    "phys-kap4",
    "Welche der folgenden Aussagen zur Entropie ist FALSCH?",
    [
      "Die Entropie ist ein Maß für die Unordnung eines Systems.",
      "In einem abgeschlossenen System nimmt die Entropie stets zu oder bleibt gleich.",
      "Bei reversiblen Prozessen bleibt die Gesamtentropie konstant.",
      "Lebewesen können lokal die Entropie verringern, indem sie Energie aufwenden.",
      "Die Entropie eines abgeschlossenen Systems kann spontan abnehmen.",
    ],
    4,
    "Die Entropie eines abgeschlossenen Systems kann gemäß dem 2. Hauptsatz der Thermodynamik nicht spontan abnehmen. Sie kann nur gleich bleiben (reversibler Prozess) oder zunehmen (irreversibler Prozess).",
    "schwer",
    ["falsch-aussage", "wärmelehre", "entropie"]
  ),

  q(
    "ph-wif-039",
    "phys-kap4",
    "Welche der folgenden Aussagen zum Wirkungsgrad ist FALSCH?",
    [
      "Der Wirkungsgrad ist das Verhältnis von Nutzenergie zu zugeführter Energie.",
      "Der Wirkungsgrad kann nie größer als 100 % sein.",
      "Eine Wärmepumpe hat stets einen Wirkungsgrad unter 100 %.",
      "Der Carnot-Wirkungsgrad ist der maximal erreichbare Wirkungsgrad einer Wärmekraftmaschine.",
      "Der Carnot-Wirkungsgrad hängt von den Temperaturen der Wärmereservoire ab.",
    ],
    2,
    "Die Leistungszahl (COP) einer Wärmepumpe kann deutlich über 1 (bzw. 100 %) liegen, da sie nicht den Wirkungsgrad, sondern das Verhältnis von abgegebener Wärme zu aufgewendeter Arbeit beschreibt. Ein COP von 3–5 ist typisch.",
    "schwer",
    ["falsch-aussage", "wärmelehre", "wirkungsgrad"]
  ),

  q(
    "ph-wif-040",
    "phys-kap4",
    "Welche der folgenden Aussagen zur adiabatischen Zustandsänderung ist FALSCH?",
    [
      "Bei einer adiabatischen Änderung wird keine Wärme mit der Umgebung ausgetauscht.",
      "Adiabatische Kompression führt zu einer Temperaturerhöhung.",
      "Adiabatische Expansion führt zu einer Temperaturabnahme.",
      "Adiabatische Prozesse verlaufen in einem p-V-Diagramm steiler als isotherme.",
      "Bei adiabatischer Kompression bleibt die innere Energie konstant.",
    ],
    4,
    "Bei adiabatischer Kompression wird Arbeit am Gas verrichtet, und da keine Wärme abfließt (Q = 0), erhöht sich die innere Energie (ΔU = W). Die Temperatur und damit die innere Energie steigen.",
    "schwer",
    ["falsch-aussage", "wärmelehre", "adiabatisch"]
  ),

  // ─── kap5: Elektrizität (10 Fragen) ───────────────────────────────

  q(
    "ph-wif-041",
    "phys-kap5",
    "Welche der folgenden Aussagen zum Ohm'schen Gesetz ist FALSCH?",
    [
      "Die Stromstärke ist proportional zur angelegten Spannung.",
      "Der Widerstand hat die Einheit Ohm (Ω).",
      "U = R · I beschreibt den Zusammenhang zwischen Spannung, Widerstand und Strom.",
      "Ein höherer Widerstand führt bei gleicher Spannung zu geringerem Strom.",
      "Das Ohm'sche Gesetz gilt für alle elektrischen Bauteile.",
    ],
    4,
    "Das Ohm'sche Gesetz gilt nur für lineare (Ohm'sche) Widerstände. Halbleiterdioden, LEDs und Transistoren zeigen ein nichtlineares Verhalten, bei dem der Widerstand von Spannung und Strom abhängt.",
    "schwer",
    ["falsch-aussage", "elektrizität", "ohm"]
  ),

  q(
    "ph-wif-042",
    "phys-kap5",
    "Welche der folgenden Aussagen zur Reihenschaltung von Widerständen ist FALSCH?",
    [
      "In einer Reihenschaltung fließt durch alle Widerstände derselbe Strom.",
      "Die Spannung über jedem Widerstand ist gleich groß.",
      "Die Gesamtspannung teilt sich auf die einzelnen Widerstände auf.",
      "Der Gesamtwiderstand ist die Summe der Einzelwiderstände.",
      "Fällt ein Widerstand aus, ist der Stromkreis unterbrochen.",
    ],
    1,
    "In einer Reihenschaltung ist die Spannung über jedem Widerstand proportional zu seinem Widerstandswert (Spannungsteiler: U_i = R_i · I). Nur bei gleich großen Widerständen wäre die Spannung gleich.",
    "mittel",
    ["falsch-aussage", "elektrizität", "reihenschaltung"]
  ),

  q(
    "ph-wif-043",
    "phys-kap5",
    "Welche der folgenden Aussagen zur Parallelschaltung von Widerständen ist FALSCH?",
    [
      "Der Gesamtwiderstand einer Parallelschaltung ist die Summe der Einzelwiderstände.",
      "Der Gesamtstrom teilt sich auf die einzelnen Zweige auf.",
      "Der Gesamtwiderstand einer Parallelschaltung ist stets kleiner als der kleinste Einzelwiderstand.",
      "Für den Gesamtwiderstand gilt: 1/R_ges = 1/R₁ + 1/R₂ + ...",
      "An allen parallel geschalteten Widerständen liegt dieselbe Spannung an.",
    ],
    0,
    "Der Gesamtwiderstand einer Parallelschaltung berechnet sich aus 1/R_ges = 1/R₁ + 1/R₂ + ... und ist stets kleiner als der kleinste Einzelwiderstand. Die Summe der Einzelwiderstände gilt für die Reihenschaltung.",
    "mittel",
    ["falsch-aussage", "elektrizität", "parallelschaltung"]
  ),

  q(
    "ph-wif-044",
    "phys-kap5",
    "Welche der folgenden Aussagen zur elektrischen Leistung ist FALSCH?",
    [
      "Die elektrische Leistung berechnet sich aus P = U · I.",
      "Die Einheit der elektrischen Leistung ist Watt.",
      "Bei konstantem Widerstand ist die Leistung proportional zum Quadrat der Spannung.",
      "Bei konstantem Widerstand ist die Leistung proportional zum Strom.",
      "Die Verlustleistung an einem Widerstand wird in Wärme umgewandelt.",
    ],
    3,
    "Bei konstantem Widerstand gilt P = I² · R, die Leistung ist also proportional zum Quadrat des Stroms, nicht proportional zum Strom. Alternativ: P = U²/R (proportional zum Quadrat der Spannung).",
    "schwer",
    ["falsch-aussage", "elektrizität", "leistung"]
  ),

  q(
    "ph-wif-045",
    "phys-kap5",
    "Welche der folgenden Aussagen zum elektrischen Feld ist FALSCH?",
    [
      "Gleichnamige Ladungen ziehen sich an.",
      "Die elektrische Feldstärke hat die Einheit V/m.",
      "Feldlinien zeigen die Richtung der Kraft auf positive Ladungen.",
      "In einem Plattenkondensator ist das Feld zwischen den Platten homogen.",
      "Die Coulomb-Kraft nimmt mit dem Quadrat des Abstands ab.",
    ],
    0,
    "Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Das Coulomb-Gesetz lautet F = k · q₁ · q₂ / r²; bei gleichem Vorzeichen der Ladungen ist die Kraft abstoßend.",
    "mittel",
    ["falsch-aussage", "elektrizität", "feld"]
  ),

  q(
    "ph-wif-046",
    "phys-kap5",
    "Welche der folgenden Aussagen zum Magnetismus ist FALSCH?",
    [
      "Jeder Magnet hat einen Nord- und einen Südpol.",
      "Ein stromdurchflossener Leiter erzeugt ein Magnetfeld.",
      "Die Lorentzkraft wirkt auf bewegte Ladungen im Magnetfeld.",
      "Magnetische Monopole existieren in der Natur als isolierte Pole.",
      "Ein Elektromagnet lässt sich ein- und ausschalten.",
    ],
    3,
    "Magnetische Monopole wurden bisher nicht nachgewiesen. Jeder Magnet hat stets einen Nord- und einen Südpol. Auch beim Zerteilen eines Magneten entstehen wieder vollständige Dipole – isolierte Pole existieren nicht.",
    "schwer",
    ["falsch-aussage", "elektrizität", "magnetismus"]
  ),

  q(
    "ph-wif-047",
    "phys-kap5",
    "Welche der folgenden Aussagen zur elektromagnetischen Induktion ist FALSCH?",
    [
      "Ein sich änderndes Magnetfeld induziert eine Spannung in einer Leiterschleife.",
      "Die induzierte Spannung ist proportional zur Änderungsrate des magnetischen Flusses.",
      "Die Lenz'sche Regel besagt, dass der Induktionsstrom seiner Ursache entgegenwirkt.",
      "Transformatoren arbeiten auf Basis der elektromagnetischen Induktion.",
      "Induktion funktioniert auch mit einem konstanten, gleichmäßigen Magnetfeld.",
    ],
    4,
    "Für die Induktion einer Spannung ist eine zeitliche Änderung des magnetischen Flusses erforderlich. Ein konstantes, gleichmäßiges Magnetfeld (ohne Relativbewegung oder Flussänderung) induziert keine Spannung.",
    "schwer",
    ["falsch-aussage", "elektrizität", "induktion"]
  ),

  q(
    "ph-wif-048",
    "phys-kap5",
    "Welche der folgenden Aussagen zum Kondensator ist FALSCH?",
    [
      "Die Kapazität eines Plattenkondensators steigt mit der Plattenfläche.",
      "Die Kapazität steigt mit abnehmendem Plattenabstand.",
      "Die gespeicherte Energie beträgt E = ½ · C · U².",
      "Die Kapazität hat die Einheit Farad (F).",
      "Ein Dielektrikum zwischen den Platten verringert die Kapazität.",
    ],
    4,
    "Ein Dielektrikum zwischen den Platten erhöht die Kapazität um den Faktor der relativen Permittivität εᵣ. Es gilt C = ε₀ · εᵣ · A / d, und da εᵣ > 1, wird die Kapazität vergrößert.",
    "schwer",
    ["falsch-aussage", "elektrizität", "kondensator"]
  ),

  q(
    "ph-wif-049",
    "phys-kap5",
    "Welche der folgenden Aussagen zu Wechselstrom ist FALSCH?",
    [
      "Wechselstrom ändert periodisch seine Richtung.",
      "Die Netzfrequenz in Europa beträgt 50 Hz.",
      "Der Effektivwert ist stets größer als der Scheitelwert.",
      "Transformatoren funktionieren nur mit Wechselstrom.",
      "Der Effektivwert der Spannung beträgt bei 230 V Netzspannung etwa 325 V Scheitelwert.",
    ],
    2,
    "Der Effektivwert ist stets kleiner als der Scheitelwert. Es gilt U_eff = U_max / √2. Bei einer Netzspannung von 230 V (Effektivwert) beträgt der Scheitelwert ca. 325 V.",
    "schwer",
    ["falsch-aussage", "elektrizität", "wechselstrom"]
  ),

  q(
    "ph-wif-050",
    "phys-kap5",
    "Welche der folgenden Aussagen zur Coulomb-Kraft ist FALSCH?",
    [
      "Die Coulomb-Kraft ist proportional zum Produkt der beiden Ladungen.",
      "Die Coulomb-Kraft wirkt nur in Flüssigkeiten und Festkörpern, nicht im Vakuum.",
      "Die Coulomb-Kraft kann anziehend oder abstoßend sein.",
      "Die Coulomb-Kraft hat formale Ähnlichkeit mit dem Gravitationsgesetz.",
      "Die Coulomb-Kraft nimmt mit dem Quadrat des Abstands ab.",
    ],
    1,
    "Die Coulomb-Kraft wirkt auch im Vakuum – sie benötigt kein Medium. Das Coulomb-Gesetz F = k · q₁ · q₂ / r² gilt universell und ist im Vakuum sogar am stärksten (keine Abschirmung durch ein Dielektrikum).",
    "mittel",
    ["falsch-aussage", "elektrizität", "coulomb"]
  ),

  // ─── kap7: Atomphysik (10 Fragen) ─────────────────────────────────

  q(
    "ph-wif-051",
    "phys-kap7",
    "Welche der folgenden Aussagen zum radioaktiven Zerfall ist FALSCH?",
    [
      "Beim α-Zerfall wird ein Heliumkern emittiert.",
      "Beim β⁻-Zerfall wird ein Elektron emittiert.",
      "γ-Strahlung ist elektromagnetische Strahlung hoher Energie.",
      "Die Aktivität einer Probe nimmt exponentiell mit der Zeit ab.",
      "Die Halbwertszeit eines Isotops kann durch äußere Bedingungen wie Temperatur verändert werden.",
    ],
    4,
    "Die Halbwertszeit ist eine kernphysikalische Konstante und kann durch äußere Bedingungen wie Temperatur, Druck oder chemische Bindung praktisch nicht verändert werden. Sie ist eine intrinsische Eigenschaft des Atomkerns.",
    "schwer",
    ["falsch-aussage", "atomphysik", "radioaktivität"]
  ),

  q(
    "ph-wif-052",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Halbwertszeit ist FALSCH?",
    [
      "Nach einer Halbwertszeit ist die Hälfte der ursprünglichen Kerne zerfallen.",
      "Nach zwei Halbwertszeiten ist noch ein Viertel der Kerne vorhanden.",
      "Die Halbwertszeit ist für jedes Isotop charakteristisch.",
      "Nach drei Halbwertszeiten sind 75 % der Kerne zerfallen.",
      "Die Halbwertszeit verschiedener Isotope kann von Bruchteilen einer Sekunde bis zu Milliarden Jahren reichen.",
    ],
    3,
    "Nach drei Halbwertszeiten sind nicht 75 %, sondern 87,5 % der Kerne zerfallen. Es bleiben (½)³ = 1/8 = 12,5 % übrig, also sind 87,5 % zerfallen. Nach zwei Halbwertszeiten sind 75 % zerfallen.",
    "schwer",
    ["falsch-aussage", "atomphysik", "halbwertszeit"]
  ),

  q(
    "ph-wif-053",
    "phys-kap7",
    "Welche der folgenden Aussagen zum Atommodell ist FALSCH?",
    [
      "Im Bohrschen Modell bewegen sich Elektronen auf festen Bahnen.",
      "Im Orbitalmodell beschreiben Orbitale Aufenthaltswahrscheinlichkeiten der Elektronen.",
      "Elektronen im Grundzustand befinden sich auf dem energiereichsten Niveau.",
      "Die Hauptquantenzahl n bestimmt maßgeblich die Energie eines Elektrons.",
      "Im Periodensystem entspricht die Periode der höchsten besetzten Hauptquantenzahl.",
    ],
    2,
    "Elektronen im Grundzustand befinden sich auf dem energieärmsten Niveau, nicht auf dem energiereichsten. Im Grundzustand besetzen die Elektronen die niedrigsten verfügbaren Energieniveaus (Aufbauprinzip).",
    "mittel",
    ["falsch-aussage", "atomphysik", "atommodell"]
  ),

  q(
    "ph-wif-054",
    "phys-kap7",
    "Welche der folgenden Aussagen zur ionisierenden Strahlung ist FALSCH?",
    [
      "α-Strahlung hat die geringste Reichweite in Luft.",
      "β-Strahlung wird durch ein Magnetfeld abgelenkt.",
      "γ-Strahlung wird durch ein Magnetfeld stark abgelenkt.",
      "α-Strahlung wird bereits durch ein Blatt Papier abgeschirmt.",
      "γ-Strahlung hat die höchste Durchdringungsfähigkeit.",
    ],
    2,
    "γ-Strahlung besteht aus Photonen (elektrisch neutral) und wird daher nicht durch ein Magnetfeld abgelenkt. Nur geladene Teilchen (α- und β-Strahlung) erfahren die Lorentzkraft im Magnetfeld.",
    "mittel",
    ["falsch-aussage", "atomphysik", "strahlung"]
  ),

  q(
    "ph-wif-055",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Kernfusion ist FALSCH?",
    [
      "Bei der Kernfusion verschmelzen leichte Kerne zu schwereren.",
      "Die Sonne gewinnt ihre Energie aus Kernfusion.",
      "Bei der Fusion von Wasserstoff zu Helium wird Energie frei.",
      "Kernfusion findet bei Raumtemperatur spontan statt.",
      "Der Massendefekt bei der Fusion wird als Energie freigesetzt.",
    ],
    3,
    "Kernfusion erfordert extrem hohe Temperaturen (ca. 10–100 Millionen Kelvin), um die elektrostatische Abstoßung der positiv geladenen Kerne zu überwinden. Bei Raumtemperatur findet keine spontane Fusion statt.",
    "mittel",
    ["falsch-aussage", "atomphysik", "kernfusion"]
  ),

  q(
    "ph-wif-056",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Kernspaltung ist FALSCH?",
    [
      "Bei der Kernspaltung wird ein schwerer Kern in leichtere Fragmente gespalten.",
      "Bei der Kernspaltung wird Energie absorbiert, da die Bindungsenergie abnimmt.",
      "Kernspaltung kann durch Beschuss mit Neutronen ausgelöst werden.",
      "Bei der Spaltung von Uran-235 werden auch Neutronen freigesetzt.",
      "Eine kontrollierte Kettenreaktion findet in Kernreaktoren statt.",
    ],
    1,
    "Bei der Kernspaltung wird Energie freigesetzt, nicht absorbiert. Die Spaltprodukte haben zusammen eine höhere Bindungsenergie pro Nukleon als der Ausgangskern, und die Differenz wird als kinetische Energie und Strahlung frei.",
    "schwer",
    ["falsch-aussage", "atomphysik", "kernspaltung"]
  ),

  q(
    "ph-wif-057",
    "phys-kap7",
    "Welche der folgenden Aussagen zum photoelektrischen Effekt ist FALSCH?",
    [
      "Erhöht man die Intensität des Lichts (bei gleicher Frequenz unter der Grenzfrequenz), werden Elektronen ausgelöst.",
      "Licht kann Elektronen aus einer Metalloberfläche herauslösen.",
      "Die kinetische Energie der Photoelektronen hängt von der Frequenz des Lichts ab.",
      "Unterhalb einer Grenzfrequenz werden keine Elektronen ausgelöst.",
      "Einstein erklärte den Photoeffekt mit dem Teilchencharakter des Lichts.",
    ],
    0,
    "Unterhalb der Grenzfrequenz reicht die Energie eines einzelnen Photons (E = h · f) nicht aus, um ein Elektron auszulösen – unabhängig von der Intensität. Mehr Photonen gleicher Frequenz liefern zwar mehr Energie insgesamt, aber kein einzelnes Photon hat genug Energie.",
    "schwer",
    ["falsch-aussage", "atomphysik", "photoeffekt"]
  ),

  q(
    "ph-wif-058",
    "phys-kap7",
    "Welche der folgenden Aussagen zum Welle-Teilchen-Dualismus ist FALSCH?",
    [
      "Licht zeigt sowohl Wellen- als auch Teilcheneigenschaften.",
      "Auch Elektronen zeigen Welleneigenschaften (de-Broglie-Wellenlänge).",
      "Das Doppelspaltexperiment zeigt die Wellennatur von Licht.",
      "Die de-Broglie-Wellenlänge wird mit steigendem Impuls größer.",
      "Der Welle-Teilchen-Dualismus ist ein Grundprinzip der Quantenmechanik.",
    ],
    3,
    "Die de-Broglie-Wellenlänge ist λ = h/p und nimmt mit steigendem Impuls ab, nicht zu. Je schneller ein Teilchen ist (mehr Impuls), desto kürzer ist seine Wellenlänge.",
    "schwer",
    ["falsch-aussage", "atomphysik", "dualismus"]
  ),

  q(
    "ph-wif-059",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Äquivalenz von Masse und Energie ist FALSCH?",
    [
      "Die berühmte Formel lautet E = m · c².",
      "Die Formel gilt nur für radioaktive Stoffe.",
      "c ist die Lichtgeschwindigkeit im Vakuum (ca. 3 × 10⁸ m/s).",
      "Selbst eine kleine Masse entspricht einer enormen Energie.",
      "Der Massendefekt bei Kernreaktionen wird gemäß E = Δm · c² in Energie umgewandelt.",
    ],
    1,
    "E = m · c² gilt universell für alle Massen, nicht nur für radioaktive Stoffe. Es ist ein allgemeines Prinzip der speziellen Relativitätstheorie, das die Äquivalenz von Masse und Energie für jede Form von Materie beschreibt.",
    "schwer",
    ["falsch-aussage", "atomphysik", "relativität"]
  ),

  q(
    "ph-wif-060",
    "phys-kap7",
    "Welche der folgenden Aussagen zur Dosimetrie ist FALSCH?",
    [
      "Die Energiedosis wird in Gray (Gy) gemessen.",
      "Die Äquivalentdosis wird in Sievert (Sv) gemessen.",
      "α-Strahlung hat einen geringeren Qualitätsfaktor als β-Strahlung.",
      "Die Äquivalentdosis berücksichtigt die biologische Wirksamkeit der Strahlung.",
      "Die natürliche Strahlenbelastung in Österreich beträgt etwa 2–3 mSv pro Jahr.",
    ],
    2,
    "α-Strahlung hat einen Qualitätsfaktor (Strahlungswichtungsfaktor) von 20, während β-Strahlung nur einen Faktor von 1 hat. α-Strahlung ist biologisch wesentlich wirksamer, weil sie ihre gesamte Energie auf kurzer Strecke abgibt.",
    "schwer",
    ["falsch-aussage", "atomphysik", "dosimetrie"]
  ),
];
