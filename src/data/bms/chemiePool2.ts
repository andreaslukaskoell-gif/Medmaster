/**
 * Chemie-Pool Teil 2 — Fragen 51–100.
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const chemiePool2: Question[] = [
  q(
    "ch-pool-051",
    "chem-kap5",
    "Welche Formel beschreibt das Ionenprodukt des Wassers?",
    [
      "K_w = [H⁺][OH⁻] (ohne Berücksichtigung von H₃O⁺)",
      "K_w = [H₃O⁺] + [OH⁻] (Summe statt Produkt der Konzentrationen)",
      "K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ (25 °C)",
      "K_w = pH + pOH (Summe der negativen Logarithmen)",
      "K_w = 10⁻⁷ (entspricht nur der Konzentration von H₃O⁺)",
    ],
    2,
    "K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ bei 25 °C. In reinem Wasser gilt [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L.",
    "leicht",
    ["K_w", "Autoprotolyse"]
  ),
  q(
    "ch-pool-052",
    "chem-kap3",
    "Welche Verbindung ist ein typischer Vertreter der Ionenbindung?",
    ["H₂O", "CH₄", "NaCl", "CO₂", "NH₃"],
    2,
    "NaCl: Metall (Na) + Nichtmetall (Cl), große EN-Differenz, Ionenkristall. H₂O, CH₄, CO₂, NH₃ sind molekular/kovalent.",
    "leicht",
    ["Ionenbindung", "NaCl"]
  ),
  q(
    "ch-pool-053",
    "chem-kap4",
    "Bei der Metathese NaCl + AgNO₃ → AgCl↓ + NaNO₃ entsteht ein Niederschlag, weil:",
    [
      "AgCl gut löslich ist",
      "AgCl schwer löslich ist",
      "NaNO₃ ausfällt",
      "keine Reaktion stattfindet",
      "alle Produkte gasförmig sind",
    ],
    1,
    "AgCl (Silberchlorid) ist in Wasser schwer löslich und fällt als Niederschlag aus. Die Fällungsreaktion ist eine Form der Metathese (Doppelumsatz).",
    "mittel",
    ["Metathese", "Fällung", "Löslichkeit"]
  ),
  q(
    "ch-pool-054",
    "chem-kap6",
    "Welcher Bindungswinkel liegt bei sp³-hybridisierten Kohlenstoffatomen vor?",
    ["90°", "109,5°", "120°", "180°", "60°"],
    1,
    "sp³-Hybridisierung → tetraedrische Geometrie, Bindungswinkel 109,5°. sp² → 120°, sp → 180°.",
    "leicht",
    ["Hybridisierung", "Bindungswinkel"]
  ),
  q(
    "ch-pool-055",
    "chem-kap1",
    "Die Avogadro-Konstante N_A hat den Wert etwa:",
    [
      "6,022 · 10²³ mol⁻¹",
      "6,022 · 10⁻²³ mol",
      "22,4 mol/L",
      "8,314 J/(mol·K)",
      "1,38 · 10⁻²³ J/K",
    ],
    0,
    "N_A ≈ 6,022 · 10²³ mol⁻¹. Ein Mol enthält N_A Teilchen. 22,4 L/mol ist das molare Volumen bei STP.",
    "leicht",
    ["Avogadro", "Mol"]
  ),
  q(
    "ch-pool-056",
    "chem-kap2",
    "Kondensieren bezeichnet den Übergang:",
    [
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "fest → flüssig",
      "flüssig → fest",
    ],
    1,
    "Kondensieren = gasförmig → flüssig (z. B. Wasserdampf zu Tropfen). Verdampfen = flüssig → gasförmig.",
    "leicht",
    ["Kondensieren", "Phasenübergang"]
  ),
  q(
    "ch-pool-057",
    "chem-kap5",
    "Eine wässrige Lösung von NaOH hat einen pH:",
    ["kleiner 7", "gleich 7", "größer 7", "gleich 0", "gleich 14"],
    2,
    "NaOH ist eine starke Base; in Wasser entsteht OH⁻, daher pH > 7 (basisch).",
    "leicht",
    ["Base", "pH", "NaOH"]
  ),
  q(
    "ch-pool-058",
    "chem-kap4",
    "Welcher Reaktionstyp: CH₄ + Cl₂ → CH₃Cl + HCl (unter UV)?",
    ["Addition", "Eliminierung", "radikalische Substitution", "Metathese", "Veresterung"],
    2,
    "Alkan + Halogen unter UV: ein H wird durch Cl ersetzt = radikalische Substitution. Läuft über Radikale (Cl·, CH₃·).",
    "mittel",
    ["radikalische Substitution", "Alkan", "Chlorierung"]
  ),
  q(
    "ch-pool-059",
    "chem-kap3",
    "Die Oktettregel besagt, dass Atome in Verbindungen oft:",
    [
      "6 Außenelektronen anstreben",
      "8 Außenelektronen (Edelgaskonfiguration) anstreben",
      "10 Elektronen in der Hülle haben",
      "keine Elektronen abgeben",
      "nur 2 Elektronen haben",
    ],
    1,
    "Oktettregel: Viele Atome erreichen in Verbindungen 8 Außenelektronen (Edelgaskonfiguration). Ausnahmen: H (2), manche erweitern das Oktett.",
    "leicht",
    ["Oktettregel", "Edelgaskonfiguration"]
  ),
  q(
    "ch-pool-060",
    "chem-kap6",
    "Alkene haben die allgemeine Summenformel:",
    ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙ₊₁"],
    1,
    "Alkene: mindestens eine C=C-Doppelbindung, CₙH₂ₙ. Alkane: CₙH₂ₙ₊₂. Alkine: CₙH₂ₙ₋₂.",
    "leicht",
    ["Alkene", "Summenformel"]
  ),
  q(
    "ch-pool-061",
    "chem-kap1",
    "Im Periodensystem nimmt die Elektronegativität innerhalb einer Periode von links nach rechts:",
    ["ab", "zu", "bleibt gleich", "nimmt zuerst ab, dann zu", "ist immer 0"],
    1,
    "In einer Periode nimmt die Elektronegativität von links nach rechts zu (mehr Protonen, kleinere Radien). In einer Gruppe nimmt sie nach unten ab.",
    "leicht",
    ["Elektronegativität", "Periodensystem"]
  ),
  q(
    "ch-pool-062",
    "chem-kap2",
    "Nach dem Gesetz von Charles/Gay-Lussac gilt bei konstantem Druck:",
    ["p · V = const", "V / T = const", "p / V = const", "n · T = const", "V · p = const"],
    1,
    "Charles/Gay-Lussac: Bei p = const ist V proportional zu T (in Kelvin), also V/T = const. Temperaturerhöhung → Volumenvergrößerung.",
    "leicht",
    ["Charles", "Gasgesetze"]
  ),
  q(
    "ch-pool-063",
    "chem-kap5",
    "Welche Säure ist eine starke Säure in Wasser?",
    ["Essigsäure", "Kohlensäure", "Salpetersäure", "Phosphorsäure", "Blausäure"],
    2,
    "Starke Säuren: HCl, HBr, HI, HNO₃, H₂SO₄ (erste Protolyse), HClO₄. Essigsäure, H₂CO₃, H₃PO₄ sind schwach.",
    "mittel",
    ["starke Säure", "HNO3"]
  ),
  q(
    "ch-pool-064",
    "chem-kap4",
    "Die Reaktionsenthalpie ΔH einer exothermen Reaktion ist:",
    ["positiv", "negativ", "null", "immer größer als ΔG", "unabhängig von der Temperatur"],
    1,
    "Exotherm = Wärme wird abgegeben, ΔH < 0. Endotherm = Wärme wird aufgenommen, ΔH > 0.",
    "leicht",
    ["Reaktionsenthalpie", "exotherm"]
  ),
  q(
    "ch-pool-065",
    "chem-kap3",
    "Welche Aussage zur Ionenbindung ist richtig?",
    [
      "Sie entsteht durch gemeinsame Elektronenpaare.",
      "Sie entsteht durch vollständige Elektronenübertragung.",
      "Sie ist nur zwischen Nichtmetallen möglich.",
      "Sie führt zu niedrigen Schmelzpunkten.",
      "Sie ist unpolar.",
    ],
    1,
    "Ionenbindung: Elektronenübertragung vom Metall zum Nichtmetall, Bildung von Kation und Anion. Kovalente Bindung = gemeinsames Elektronenpaar.",
    "leicht",
    ["Ionenbindung", "Elektronenübertragung"]
  ),
  q(
    "ch-pool-066",
    "chem-kap6",
    "Ein tertiäres C-Atom ist an wie viele weitere C-Atome gebunden?",
    ["0", "1", "2", "3", "4"],
    3,
    "Primär: 1 C-Nachbar. Sekundär: 2 C-Nachbarn. Tertiär: 3 C-Nachbarn. Quartär: 4 C-Nachbarn.",
    "leicht",
    ["tertiäres C-Atom", "Alkane"]
  ),
  q(
    "ch-pool-067",
    "chem-kap1",
    "Die Anzahl der Protonen im Kern entspricht bei einem neutralen Atom der Anzahl:",
    ["der Neutronen", "der Elektronen in der Hülle", "der Nukleonen", "der Schalen", "der Isotope"],
    1,
    "Bei einem neutralen Atom: Anzahl Protonen (Z) = Anzahl Elektronen. Die Neutronenzahl kann variieren (Isotope).",
    "leicht",
    ["Protonen", "Elektronen", "neutral"]
  ),
  q(
    "ch-pool-068",
    "chem-kap5",
    "Welcher Wert hat pH + pOH in wässriger Lösung bei 25 °C?",
    ["0", "7", "14", "10⁻¹⁴", "variabel"],
    2,
    "pH + pOH = 14 (bei 25 °C), weil [H₃O⁺][OH⁻] = 10⁻¹⁴ und −log([H₃O⁺]) − log([OH⁻]) = −log(10⁻¹⁴) = 14.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-069",
    "chem-kap2",
    "Schmelzen ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → fest",
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
    ],
    0,
    "Schmelzen = fest → flüssig. Erstarren/Gefrieren = flüssig → fest.",
    "leicht",
    ["Schmelzen", "Phasenübergang"]
  ),
  q(
    "ch-pool-070",
    "chem-kap4",
    "Ein Reduktionsmittel:",
    [
      "wird reduziert",
      "wird oxidiert",
      "nimmt Elektronen auf",
      "ändert die Oxidationszahl nicht",
      "ist immer ein Metall",
    ],
    1,
    "Reduktionsmittel gibt Elektronen ab und wird dabei oxidiert. Oxidationsmittel nimmt Elektronen auf und wird reduziert.",
    "mittel",
    ["Reduktionsmittel", "Redox"]
  ),
  q(
    "ch-pool-071",
    "chem-kap3",
    "Welche Aussage zu NaCl in Wasser ist richtig?",
    [
      "NaCl liegt als Molekül vor.",
      "Na⁺ und Cl⁻ sind hydratisiert.",
      "Die Lösung leitet nicht.",
      "Es entsteht HCl.",
      "NaCl sinkt ungelöst zu Boden.",
    ],
    1,
    "NaCl dissoziiert in Wasser zu Na⁺ und Cl⁻; die Ionen werden von Wassermolekülen umhüllt (Hydratation). Die Lösung leitet Strom.",
    "mittel",
    ["NaCl", "Hydratation", "Dissoziation"]
  ),
  q(
    "ch-pool-072",
    "chem-kap6",
    "Cycloalkane haben die Summenformel:",
    ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙ₋₁"],
    1,
    "Cycloalkane (Ring ohne Doppelbindung): CₙH₂ₙ – gleiche Formel wie Alkene! Cyclohexan C₆H₁₂, Cyclopropan C₃H₆.",
    "mittel",
    ["Cycloalkan", "Summenformel"]
  ),
  q(
    "ch-pool-073",
    "chem-kap5",
    "Welches Ion entsteht, wenn Ammoniak (NH₃) ein Proton aufnimmt?",
    ["NH₂⁻", "NH₄⁺", "NO₃⁻", "N₂", "N³⁻"],
    1,
    "NH₃ + H⁺ → NH₄⁺ (Ammoniumion). NH₃ ist eine Base (Protonenakzeptor); das konjugierte Säure-Base-Paar ist NH₄⁺/NH₃.",
    "leicht",
    ["Ammoniak", "Ammonium", "Brønsted"]
  ),
  q(
    "ch-pool-074",
    "chem-kap1",
    "Welches Element hat die höchste Elektronegativität (Pauling)?",
    ["Kohlenstoff", "Stickstoff", "Sauerstoff", "Fluor", "Chlor"],
    3,
    "Fluor hat mit 4,0 die höchste Elektronegativität auf der Pauling-Skala. Dann folgen O (3,5), N (3,0), Cl (3,0), C (2,5).",
    "leicht",
    ["Elektronegativität", "Fluor"]
  ),
  q(
    "ch-pool-075",
    "chem-kap2",
    "Bei konstanter Stoffmenge und konstantem Druck gilt nach Charles:",
    ["p · V = const", "V / T = const", "p / T = const", "V · n = const", "T · p = const"],
    1,
    "Charles: Bei p = const und n = const ist V/T = const. Volumen steigt proportional zur absoluten Temperatur.",
    "leicht",
    ["Charles", "Gasgesetze"]
  ),
  q(
    "ch-pool-076",
    "chem-kap4",
    "Bei der Synthesereaktion:",
    [
      "zerfällt eine Verbindung in einfachere Bestandteile",
      "vereinigen sich zwei oder mehr Stoffe zu einem Produkt",
      "wird ein Atom durch ein anderes ausgetauscht (Substitution)",
      "tauschen zwei Verbindungen Partner (doppelte Umsetzung)",
      "werden Elektronen von einem Stoff auf einen anderen übertragen",
    ],
    1,
    "Synthese (Kombination): A + B → AB. Zersetzung: AB → A + B. Substitution: ein Atom wird ersetzt. Metathese: Partnertausch.",
    "leicht",
    ["Synthese", "Reaktionstyp"]
  ),
  q(
    "ch-pool-077",
    "chem-kap3",
    "Die Koordinationszahl im NaCl-Gitter beträgt:",
    ["4", "6", "8", "12", "2"],
    1,
    "Im NaCl-Gitter ist jedes Na⁺ von 6 Cl⁻ umgeben und umgekehrt → Koordinationszahl 6. CsCl-Gitter: KZ 8.",
    "mittel",
    ["Koordinationszahl", "NaCl-Gitter"]
  ),
  q(
    "ch-pool-078",
    "chem-kap6",
    "Welche Verbindung kann cis/trans-Isomere bilden?",
    ["Ethan", "Ethen", "But-2-en", "Methan", "Ethin"],
    2,
    "But-2-en hat zwei gleiche Reste an jedem C der Doppelbindung; cis = gleiche Seite, trans = gegenüber. Ethan und Methan haben keine Doppelbindung; Ethen C₂H₄ hat keine verschiedenen Reste.",
    "mittel",
    ["cis-trans", "Alkene", "Isomerie"]
  ),
  q(
    "ch-pool-079",
    "chem-kap5",
    "Der pH-Wert einer Lösung mit [OH⁻] = 10⁻³ mol/L beträgt (25 °C):",
    ["3", "11", "7", "−3", "14"],
    1,
    "[OH⁻] = 10⁻³ → pOH = 3 → pH = 14 − 3 = 11. Die Lösung ist basisch.",
    "leicht",
    ["pH", "pOH", "basisch"]
  ),
  q(
    "ch-pool-080",
    "chem-kap1",
    "Die Elektronenkonfiguration von Sauerstoff (Z=8) ist:",
    ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p²", "2s² 2p⁶", "1s⁸"],
    0,
    "O: 8 Elektronen → 1s² 2s² 2p⁴. 2p⁴ bedeutet 4 Elektronen in den drei p-Orbitalen (zwei ungepaart).",
    "mittel",
    ["Elektronenkonfiguration", "Sauerstoff"]
  ),
  q(
    "ch-pool-081",
    "chem-kap2",
    "Welche Temperatur in Kelvin entspricht 0 °C?",
    ["0 K", "273 K", "273,15 K", "100 K", "373 K"],
    2,
    "T(K) = T(°C) + 273,15. 0 °C = 273,15 K. 100 °C = 373,15 K. Bei Gasgesetzen immer Kelvin verwenden.",
    "leicht",
    ["Kelvin", "Temperatur"]
  ),
  q(
    "ch-pool-082",
    "chem-kap4",
    "Die Aktivierungsenergie E_A ist:",
    [
      "die Reaktionsenthalpie (Differenz der Enthalpien von Produkten und Edukten)",
      "die Energie, die zur Überwindung der Energiebarriere zwischen Edukten und Übergangszustand nötig ist",
      "die Bindungsenergie (Energie zur Spaltung einer bestimmten chemischen Bindung)",
      "immer negativ, da jede Reaktion einen exothermen Zwischenschritt hat",
      "unabhängig vom Katalysator (wird durch Katalyse nicht beeinflusst)",
    ],
    1,
    "Aktivierungsenergie = Energiehöhe zwischen Edukten und Übergangszustand (Aktivierter Komplex). Ein Katalysator senkt E_A.",
    "mittel",
    ["Aktivierungsenergie", "Katalyse"]
  ),
  q(
    "ch-pool-083",
    "chem-kap3",
    "Welche Bindung ist am ehesten ionisch?",
    ["C−C", "C−H", "Na−Cl", "O−H", "N−H"],
    2,
    "Ionenbindung bei großer EN-Differenz (typisch > 1,7). Na−Cl: Metall + Nichtmetall, große Differenz. C−C, C−H, O−H, N−H sind kovalent (teilweise polar).",
    "leicht",
    ["Ionenbindung", "Elektronegativität"]
  ),
  q(
    "ch-pool-084",
    "chem-kap6",
    "Ethanol (C₂H₅OH) siedet höher als Dimethylether (CH₃OCH₃), obwohl beide C₂H₆O haben, weil:",
    [
      "Ethanol schwerer ist",
      "Ethanol Wasserstoffbrücken ausbilden kann",
      "Ether polarer ist",
      "Ethanol eine kürzere Kette hat",
      "Ether nicht brennbar ist",
    ],
    1,
    "Ethanol hat eine OH-Gruppe und kann H-Brücken bilden; Dimethylether nicht. H-Brücken erhöhen Siedepunkt und Verdampfungsenthalpie erheblich.",
    "mittel",
    ["Ethanol", "Wasserstoffbrücken", "Siedepunkt"]
  ),
  q(
    "ch-pool-085",
    "chem-kap5",
    "Eine verdünnte HCl-Lösung enthält vor allem:",
    ["HCl-Moleküle", "H₃O⁺ und Cl⁻", "OH⁻ und Cl⁻", "H₂ und Cl₂", "nur H₂O"],
    1,
    "HCl ist eine starke Säure und dissoziiert in Wasser praktisch vollständig: HCl + H₂O → H₃O⁺ + Cl⁻.",
    "leicht",
    ["HCl", "Dissoziation", "starke Säure"]
  ),
  q(
    "ch-pool-086",
    "chem-kap1",
    "Die Anzahl der Valenzelektronen von Chlor (Gruppe 7) beträgt:",
    ["1", "5", "6", "7", "8"],
    3,
    "Chlor steht in Gruppe 17 (7. Hauptgruppe) und hat 7 Valenzelektronen (3s² 3p⁵). Es nimmt typischerweise 1 Elektron auf → Cl⁻.",
    "leicht",
    ["Valenzelektronen", "Chlor"]
  ),
  q(
    "ch-pool-087",
    "chem-kap2",
    "Das molare Volumen eines idealen Gases bei 25 °C und 1 bar ist etwa:",
    ["22,4 L/mol", "24,5 L/mol", "24,8 L/mol", "20 L/mol", "30 L/mol"],
    2,
    "Bei 25 °C (298 K) und 1 bar: V_m = RT/p ≈ 24,8 L/mol. Bei 0 °C und 1 atm: 22,4 L/mol.",
    "mittel",
    ["molares Volumen", "ideales Gas"]
  ),
  q(
    "ch-pool-088",
    "chem-kap4",
    "Bei einer Fällungsreaktion:",
    [
      "entsteht ein Gas",
      "entsteht ein schwerlöslicher Niederschlag",
      "wird nur erhitzt",
      "ändert sich der Aggregatzustand nicht",
      "reagieren nur Gase",
    ],
    1,
    "Fällungsreaktion: Zwei lösliche Salze reagieren zu einem schwerlöslichen Produkt (Niederschlag), z. B. AgNO₃ + NaCl → AgCl↓ + NaNO₃.",
    "leicht",
    ["Fällung", "Niederschlag"]
  ),
  q(
    "ch-pool-089",
    "chem-kap3",
    "Die van-der-Waals-Gleichung korrigiert die ideale Gasgleichung für reale Gase durch:",
    [
      "nur den Druck (ohne Korrektur des Eigenvolumens der Teilchen)",
      "Druckkorrektur (a) und Volumenkorrektur (b)",
      "nur die Temperatur (ohne Berücksichtigung von Wechselwirkungen)",
      "nur das Volumen (ohne Korrektur der Anziehungskräfte zwischen Teilchen)",
      "die Stoffmenge (Abweichung von der Avogadro-Konstante bei realen Gasen)",
    ],
    1,
    "van-der-Waals: (p + an²/V²)(V − nb) = nRT. a = Anziehung zwischen Teilchen, b = Kovolumen (Eigenvolumen).",
    "mittel",
    ["van-der-Waals", "reales Gas"]
  ),
  q(
    "ch-pool-090",
    "chem-kap6",
    "Welche Aussage zu Kohlenstoff ist richtig?",
    [
      "Kohlenstoff hat nur zwei Bindungen.",
      "Kohlenstoff ist typischerweise vierbindig.",
      "Kohlenstoff bildet nur Einfachbindungen.",
      "Kohlenstoff kommt nur in anorganischen Verbindungen vor.",
      "Kohlenstoff hat die Oxidationszahl −4 in allen Verbindungen.",
    ],
    1,
    "Kohlenstoff hat 4 Valenzelektronen und ist in organischen Verbindungen typischerweise vierbindig (tetravalent). Es kann Einfach-, Doppel- und Dreifachbindungen eingehen.",
    "leicht",
    ["Kohlenstoff", "vierbindig"]
  ),
  q(
    "ch-pool-091",
    "chem-kap5",
    "Welcher Stoff ist ein Ampholyt?",
    ["NaCl", "HCl", "H₂O", "NaOH", "CH₄"],
    2,
    "Ampholyt kann sowohl als Säure (H⁺ abgeben) als auch als Base (H⁺ aufnehmen) wirken. Wasser: H₂O + H₂O ⇌ H₃O⁺ + OH⁻; H₂O kann auch mit NH₃ oder HCl reagieren.",
    "mittel",
    ["Ampholyt", "Wasser"]
  ),
  q(
    "ch-pool-092",
    "chem-kap1",
    "Die Hauptgruppen im Periodensystem sind die Spalten mit den Ziffern:",
    ["1–18", "nur 1 und 2", "1–8", "1–7", "0–8"],
    2,
    "Nach IUPAC: Gruppen 1–18. Traditionell: Hauptgruppen 1–8 (mit römischen Ziffern I–VIII). Die Nebengruppen liegen dazwischen.",
    "leicht",
    ["Periodensystem", "Hauptgruppen"]
  ),
  q(
    "ch-pool-093",
    "chem-kap2",
    "Verdampfen ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "flüssig → fest",
    ],
    1,
    "Verdampfen (bzw. Sieden beim Siedepunkt) = flüssig → gasförmig. Kondensieren = gasförmig → flüssig.",
    "leicht",
    ["Verdampfen", "Phasenübergang"]
  ),
  q(
    "ch-pool-094",
    "chem-kap4",
    "Die Gleichgewichtskonstante K einer Reaktion:",
    [
      "hängt von den Anfangskonzentrationen ab",
      "hängt nur von der Temperatur ab",
      "ist immer 1",
      "ändert sich mit dem Katalysator",
      "ist dimensionsbehaftet immer mol/L",
    ],
    1,
    "K hängt nur von der Temperatur ab (und vom Standarddruck bei Gasen). Katalysator und Anfangskonzentrationen ändern K nicht, nur die Gleichgewichtslage bei gleichem K.",
    "mittel",
    ["Gleichgewichtskonstante", "Temperatur"]
  ),
  q(
    "ch-pool-095",
    "chem-kap3",
    "Welche Aussage zur kovalenten Bindung ist richtig?",
    [
      "Es werden nur Elektronen übertragen.",
      "Es werden Elektronenpaare geteilt.",
      "Es entstehen nur Ionen.",
      "Die Bindung ist immer unpolar.",
      "Es gibt keine feste räumliche Orientierung.",
    ],
    1,
    "Kovalente Bindung = gemeinsames Elektronenpaar zwischen zwei Atomen. Kann polar sein (unterschiedliche EN). Ionenbindung = Elektronenübertragung.",
    "leicht",
    ["kovalente Bindung", "Elektronenpaar"]
  ),
  q(
    "ch-pool-096",
    "chem-kap6",
    "Ein primäres C-Atom ist an wie viele weitere C-Atome gebunden?",
    ["0", "1", "2", "3", "4"],
    1,
    "Primär: 1 C-Nachbar (z. B. Endstand einer Kette). Sekundär: 2, tertiär: 3, quartär: 4 C-Nachbarn.",
    "leicht",
    ["primäres C-Atom", "Alkane"]
  ),
  q(
    "ch-pool-097",
    "chem-kap5",
    "Welche Aussage zu Basen ist richtig?",
    [
      "Basen nehmen H⁺ auf (Brønsted).",
      "Basen geben immer OH⁻ ab.",
      "Alle Basen sind fest.",
      "Basen haben immer pH < 7.",
      "Es gibt keine schwachen Basen.",
    ],
    0,
    "Nach Brønsted: Base = Protonenakzeptor (nimmt H⁺ auf). Starke Basen (z. B. NaOH) liefern OH⁻; NH₃ ist eine Base, obwohl es kein OH⁻ enthält.",
    "leicht",
    ["Base", "Brønsted"]
  ),
  q(
    "ch-pool-098",
    "chem-kap1",
    "Die Wellenlänge λ und die Frequenz ν elektromagnetischer Strahlung sind verknüpft durch:",
    ["λ = c · ν", "λ · ν = c", "λ = ν / c", "λ + ν = c", "λ = c / ν"],
    4,
    "c = λ · ν (Lichtgeschwindigkeit = Wellenlänge × Frequenz), also λ = c/ν. Je größer die Frequenz, desto kleiner die Wellenlänge.",
    "leicht",
    ["Wellenlänge", "Frequenz", "Licht"]
  ),
  q(
    "ch-pool-099",
    "chem-kap2",
    "Welche Aussage zu Wasser ist richtig?",
    [
      "Wasser hat bei 4 °C seine minimale Dichte.",
      "Eis ist dichter als flüssiges Wasser.",
      "Wasser hat bei 4 °C seine maximale Dichte.",
      "Wasser gefriert bei 4 °C.",
      "Die Dichte von Wasser ist temperaturunabhängig.",
    ],
    2,
    "Dichteanomalie: Wasser hat bei 4 °C das Dichtemaximum. Eis (0 °C) ist weniger dicht und schwimmt.",
    "leicht",
    ["Wasser", "Dichteanomalie"]
  ),
  q(
    "ch-pool-100",
    "chem-kap4",
    "Bei der Reaktion A + B ⇌ C + D wird bei Zugabe von A:",
    [
      "das Gleichgewicht nicht beeinflusst",
      "mehr C und D gebildet (Gleichgewicht weicht aus)",
      "nur A verbraucht",
      "die Gleichgewichtskonstante K größer",
      "die Rückreaktion ausschließlich ablaufen",
    ],
    1,
    "Le Chatelier: Zugabe eines Edukts (A) verschiebt das Gleichgewicht auf die Produktseite, es werden mehr C und D gebildet, bis sich ein neues Gleichgewicht einstellt. K bleibt konstant.",
    "mittel",
    ["Le Chatelier", "Gleichgewicht", "Konzentration"]
  ),
];
