/**
 * Biologie BMS Pool 21 — 30 schwere Fragen (difficulty 3) im offiziellen MedAT-Stil.
 * Stoff: Kap1–Kap5, Schwerpunkt: Anwendung, Klinik, Kombination, Berechnung.
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
    subject: "biologie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const biologiePool21: Question[] = [
  // ── Zellbiologie (bio-kap1): 5 Fragen ──
  q(
    "bio-pool-21-001",
    "bio-kap1",
    "Ein Zellgift blockiert die Protonenpumpen der Atmungskette, ohne den Elektronentransport zu stoppen. Welche unmittelbare Folge hat dies?",
    [
      "Der Citratzyklus wird beschleunigt, da mehr NAD⁺ verfügbar ist",
      "Die ATP-Synthase wird maximal aktiv, da mehr Protonen verfügbar sind",
      "Der Protonengradient bricht zusammen und die ATP-Synthese durch oxidative Phosphorylierung stoppt, während die Elektronentransportenergie als Wärme frei wird",
      "Die Glykolyse wird vollständig gehemmt",
      "Sauerstoff wird nicht mehr verbraucht",
    ],
    2,
    "Entkoppler (z. B. 2,4-DNP, Thermogenin in braunem Fettgewebe) dissipieren den Protonengradienten als Wärme. Elektronen fließen weiter (O₂ wird verbraucht), aber die ATP-Synthase kann ohne Gradienten kein ATP produzieren. Die Zelle schaltet auf verstärkte Glykolyse um.",
    "schwer",
    ["Atmungskette", "Entkopplung", "Mitochondrien"]
  ),
  q(
    "bio-pool-21-002",
    "bio-kap1",
    "Welche Aussage über Lysosomen und Peroxisomen ist FALSCH?",
    [
      "Lysosomen enthalten saure Hydrolasen mit einem pH-Optimum von ca. 4,5–5",
      "Peroxisomen bauen langkettige Fettsäuren durch Beta-Oxidation ab und produzieren dabei H₂O₂",
      "Katalase in Peroxisomen wandelt H₂O₂ in Wasser und Sauerstoff um",
      "Lysosomen sind von einer Doppelmembran umgeben, ähnlich wie Mitochondrien",
      "Lysosomen verschmelzen mit Endosomen und Phagosomen zur intrazellulären Verdauung",
    ],
    3,
    "Lysosomen sind von einer EINFACHEN Membran umgeben (nicht Doppelmembran). Die Membran ist durch stark glykosylierte Proteine (LAMPs) gegen die eigenen Hydrolasen geschützt. Doppelmembranen haben nur Mitochondrien, Chloroplasten und der Zellkern.",
    "schwer",
    ["Lysosomen", "Peroxisomen", "Zellorganellen"]
  ),
  q(
    "bio-pool-21-003",
    "bio-kap1",
    "Welche Aussage zur Signaltransduktion über G-Protein-gekoppelte Rezeptoren (GPCRs) ist korrekt?",
    [
      "GPCRs haben eine einzelne Transmembrandomäne und wirken als Ionenkanäle",
      "Das aktivierte Gα-Untereinheit (Gs) hemmt die Adenylylcyclase und senkt den cAMP-Spiegel",
      "GPCRs durchspannen die Membran mit 7 Transmembrandomänen; Ligandenbindung aktiviert heterotrimere G-Proteine",
      "GPCRs phosphorylieren Zielproteine direkt durch ihre intrinsische Kinaseaktivität",
      "cAMP wird durch Adenylylcyclase abgebaut und durch Phosphodiesterase synthetisiert",
    ],
    2,
    "GPCRs (7-Transmembrandomänen-Rezeptoren) aktivieren heterotrimere G-Proteine (α, β, γ). Gs-α stimuliert die Adenylylcyclase → cAMP↑. Gi-α hemmt sie → cAMP↓. cAMP wird durch Phosphodiesterasen abgebaut (nicht synthetisiert). GPCRs haben keine intrinsische Kinaseaktivität.",
    "schwer",
    ["Signaltransduktion", "GPCR", "cAMP"]
  ),
  q(
    "bio-pool-21-004",
    "bio-kap1",
    "In welcher Phase des Zellzyklus findet die DNA-Replikation statt, und welches Enzym entfernt die RNA-Primer?",
    [
      "G1-Phase; DNA-Polymerase I",
      "S-Phase; RNase H und DNA-Polymerase I (bei Prokaryoten) bzw. FEN1/RNase H (bei Eukaryoten)",
      "G2-Phase; Primase",
      "M-Phase; Topoisomerase II",
      "S-Phase; RNA-Polymerase II",
    ],
    1,
    "DNA-Replikation findet in der S-Phase (Synthese-Phase) statt. RNA-Primer werden bei Prokaryoten durch RNase H und DNA-Polymerase I entfernt und ersetzt. Bei Eukaryoten übernehmen RNase H und FEN1 (Flap-Endonuklease 1) diese Aufgabe, DNA-Polymerase δ füllt die Lücken.",
    "schwer",
    ["Zellzyklus", "DNA-Replikation", "Primer"]
  ),
  q(
    "bio-pool-21-005",
    "bio-kap1",
    "Ein Forscher setzt Zellen einem hypotonischen Medium aus. Welche Aussage zur Osmose ist korrekt?",
    [
      "Wasser strömt aus der Zelle heraus, die Zelle schrumpft (Krenation)",
      "Es findet keine Nettobewegung von Wasser statt, da die Membran semipermeabel ist",
      "Wasser strömt in die Zelle hinein; ohne Zellwand kann die Zelle lysieren",
      "Gelöste Stoffe diffundieren aus dem Medium in die Zelle und gleichen die Konzentration aus",
      "Die Na⁺/K⁺-ATPase verhindert jegliche osmotische Wasserverschiebung",
    ],
    2,
    "Im hypotonischen Medium ist die Solut-Konzentration außen geringer als innen. Wasser strömt osmotisch in die Zelle. Tierische Zellen ohne stützende Zellwand können anschwellen und platzen (Lyse/Hämolyse bei Erythrozyten). Pflanzenzellen werden turgeszent, die Zellwand verhindert Lyse.",
    "schwer",
    ["Osmose", "Hypotonisch", "Zellmembran"]
  ),

  // ── Humanbiologie (bio-kap2): 7 Fragen ──
  q(
    "bio-pool-21-006",
    "bio-kap2",
    "Welche Aussage zum Frank-Starling-Mechanismus des Herzens ist korrekt?",
    [
      "Er beschreibt die Abnahme der Kontraktionskraft bei zunehmendem venösen Rückstrom",
      "Er besagt, dass die Herzfrequenz proportional zum Blutdruck steigt",
      "Er besagt, dass eine erhöhte Vordehnung der Ventrikelmuskulatur (erhöhte Vorlast) zu einer stärkeren Kontraktion führt",
      "Er funktioniert nur unter Einfluss des Sympathikus und erfordert Adrenalin",
      "Er beschreibt den Einfluss des Vagustonus auf die Herzfrequenz",
    ],
    2,
    "Frank-Starling-Mechanismus: Je stärker das Myokard vorgedehnt wird (erhöhtes enddiastolisches Volumen/Vorlast), desto größer ist die Kontraktionskraft und das Schlagvolumen. Dieser Mechanismus ist intrinsisch und funktioniert auch ohne nervale oder hormonelle Stimulation.",
    "schwer",
    ["Herz", "Frank-Starling", "Hämodynamik"]
  ),
  q(
    "bio-pool-21-007",
    "bio-kap2",
    "Ein Patient hat eine Schilddrüsenunterfunktion (Hypothyreose). Welche Kombination von Laborwerten ist bei einer primären Hypothyreose typisch?",
    [
      "TSH erniedrigt, fT3/fT4 erniedrigt",
      "TSH erhöht, fT3/fT4 erniedrigt",
      "TSH erhöht, fT3/fT4 erhöht",
      "TSH erniedrigt, fT3/fT4 erhöht",
      "TSH normal, fT3/fT4 stark erniedrigt",
    ],
    1,
    "Bei primärer Hypothyreose (Ursache in der Schilddrüse selbst, z. B. Hashimoto) sind fT3/fT4 erniedrigt. Durch den fehlenden negativen Feedback steigt TSH (Hypophyse kompensiert). Bei sekundärer Hypothyreose (Hypophysendefizit) wäre TSH ebenfalls niedrig.",
    "schwer",
    ["Schilddrüse", "Hypothyreose", "Hormone", "Feedback"]
  ),
  q(
    "bio-pool-21-008",
    "bio-kap2",
    "Welche Aussage zum Aktionspotenzial einer Nervenzelle ist FALSCH?",
    [
      "Die Depolarisation wird durch den schnellen Einstrom von Na⁺-Ionen durch spannungsgesteuerte Na⁺-Kanäle ausgelöst",
      "Die Repolarisation erfolgt durch den Ausstrom von K⁺-Ionen durch spannungsgesteuerte K⁺-Kanäle",
      "Das Alles-oder-Nichts-Prinzip besagt, dass die Amplitude des Aktionspotenzials von der Reizstärke abhängt",
      "Während der absoluten Refraktärzeit kann kein weiteres Aktionspotenzial ausgelöst werden",
      "Die saltatorische Erregungsleitung an myelinisierten Axonen ist schneller als die kontinuierliche Leitung",
    ],
    2,
    "Das Alles-oder-Nichts-Prinzip besagt, dass ein Aktionspotenzial entweder voll ausgelöst wird oder gar nicht — die Amplitude ist KONSTANT und unabhängig von der Reizstärke. Die Reizstärke wird über die Frequenz der Aktionspotenziale kodiert, nicht über deren Amplitude.",
    "schwer",
    ["Neurophysiologie", "Aktionspotenzial", "Nervenzelle"]
  ),
  q(
    "bio-pool-21-009",
    "bio-kap2",
    "Welche Aussage zur Nierenfunktion ist FALSCH?",
    [
      "Im Glomerulus wird das Blut durch den Filtrationsdruckunterschied ultrafiltriert (Primärharn)",
      "Täglich werden ca. 180 Liter Primärharn gebildet, davon werden ca. 99 % rückresorbiert",
      "Glucose wird im proximalen Tubulus vollständig rückresorbiert (bei normaler Blutglucose)",
      "ADH (Vasopressin) wirkt am proximalen Tubulus und erhöht dort die Wasserpermeabilität",
      "Bei Diabetes mellitus kann Glucose im Urin erscheinen, wenn die Nierenschwelle überschritten wird",
    ],
    3,
    "ADH (antidiuretisches Hormon/Vasopressin) wirkt am SAMMELROHR (und distalen Tubulus), nicht am proximalen Tubulus. Es bewirkt dort den Einbau von Aquaporin-2-Kanälen und erhöht die Wasserrückresorption. Der proximale Tubulus resorbiert Wasser konstitutiv (ca. 65 %).",
    "schwer",
    ["Niere", "ADH", "Filtration", "Rückresorption"]
  ),
  q(
    "bio-pool-21-010",
    "bio-kap2",
    "Ein Patient mit Blutgruppe AB (Rhesus-positiv) benötigt eine Bluttransfusion. Welche Aussage ist korrekt?",
    [
      "Er kann nur Blut der Gruppe AB erhalten, da er Anti-A und Anti-B Antikörper besitzt",
      "Er ist Universalspender und kann an alle Blutgruppen spenden",
      "Er besitzt keine regulären Anti-A und Anti-B Antikörper (Isoagglutinine) und ist daher Universalempfänger",
      "Er benötigt zwingend Rhesus-negatives Blut, um eine Transfusionsreaktion zu vermeiden",
      "Die Blutgruppe AB ist die häufigste Blutgruppe in Europa",
    ],
    2,
    "Blutgruppe AB: Erythrozyten tragen sowohl A- als auch B-Antigene, daher werden im Serum keine Anti-A oder Anti-B Antikörper gebildet (Isoagglutinine fehlen). AB ist Universalempfänger (Erythrozytenkonzentrat). AB-Plasma enthält keine Antikörper → AB-Plasma ist Universalplasma.",
    "schwer",
    ["Blutgruppen", "Transfusion", "AB0-System"]
  ),
  q(
    "bio-pool-21-011",
    "bio-kap2",
    "Welche Aussage zum Surfactant in der Lunge ist korrekt?",
    [
      "Surfactant wird von Alveolarzellen Typ I produziert und erhöht die Oberflächenspannung",
      "Surfactant wird von Alveolarzellen Typ II produziert und senkt die Oberflächenspannung der Alveolen",
      "Surfactant besteht hauptsächlich aus Cholesterin und wird im Bronchialepithel gebildet",
      "Ein Mangel an Surfactant führt zu Emphysem mit Überblähung der Alveolen",
      "Surfactant wird erst nach der Geburt gebildet und ist pränatal nicht vorhanden",
    ],
    1,
    "Surfactant (hauptsächlich Dipalmitoylphosphatidylcholin) wird von Typ-II-Pneumozyten ab ca. SSW 24 produziert. Es senkt die Oberflächenspannung der Alveolen und verhindert deren Kollaps (Atelektase). Surfactant-Mangel bei Frühgeborenen → Atemnotsyndrom (IRDS).",
    "schwer",
    ["Lunge", "Surfactant", "Pneumozyten"]
  ),
  q(
    "bio-pool-21-012",
    "bio-kap2",
    "Welche Aussage zur Blut-Hirn-Schranke (BHS) ist FALSCH?",
    [
      "Die BHS wird hauptsächlich durch Tight Junctions zwischen den Endothelzellen der Hirnkapillaren gebildet",
      "Lipophile Substanzen und kleine Gase (O₂, CO₂) können die BHS per Diffusion passieren",
      "Glucose wird durch spezifische GLUT1-Transporter über die BHS transportiert",
      "Astrozyten (Gliazellen) umhüllen die Kapillaren mit Endfüßchen und tragen zur BHS-Funktion bei",
      "Alle Bereiche des Gehirns besitzen eine gleich starke Blut-Hirn-Schranke ohne Ausnahmen",
    ],
    4,
    "Nicht alle Hirnbereiche haben eine gleich starke BHS. Die zirkumventrikulären Organe (z. B. Area postrema, Eminentia mediana, Neurohypophyse) besitzen eine durchlässige BHS, um Blutparameter direkt zu detektieren (z. B. Osmolarität, Hormone, Toxine für den Brechreflex).",
    "schwer",
    ["Blut-Hirn-Schranke", "ZNS", "Neuroanatomie"]
  ),

  // ── Genetik (bio-kap4): 5 Fragen ──
  q(
    "bio-pool-21-013",
    "bio-kap4",
    "Bei einem X-chromosomal rezessiven Erbgang ist die Mutter Konduktorin (X^A X^a) und der Vater gesund (X^A Y). Mit welcher Wahrscheinlichkeit ist ein Sohn betroffen?",
    [
      "0 % (kein Sohn kann betroffen sein)",
      "25 % (jedes vierte Kind)",
      "50 % (jeder zweite Sohn)",
      "75 %",
      "100 % (alle Söhne)",
    ],
    2,
    "Konduktorin X^A X^a × gesunder Vater X^A Y: Söhne erhalten ihr X von der Mutter. 50 % der Söhne erhalten X^a → betroffen. 50 % erhalten X^A → gesund. Töchter: 50 % Konduktorinnen (X^A X^a), 50 % gesund (X^A X^A). Kein Sohn erhält ein X vom Vater.",
    "schwer",
    ["X-chromosomal", "Erbgang", "Konduktorin"]
  ),
  q(
    "bio-pool-21-014",
    "bio-kap4",
    "Welche Aussage zum genetischen Code ist FALSCH?",
    [
      "Der genetische Code ist degeneriert (redundant): mehrere Codons können für dieselbe Aminosäure kodieren",
      "Der genetische Code ist universell — mit wenigen Ausnahmen (z. B. Mitochondrien) gilt er für alle Lebewesen",
      "Das Startcodon AUG kodiert für Methionin und initiiert die Translation",
      "Der genetische Code ist überlappend: ein Nukleotid kann Teil von zwei benachbarten Codons sein",
      "Es gibt drei Stoppcodons: UAA, UAG und UGA",
    ],
    3,
    "Der genetische Code ist NICHT überlappend: Jedes Nukleotid gehört zu genau einem Codon (bei normaler Translation). Der Code wird komma-frei und in einem festen Leseraster (Reading Frame) abgelesen. Eine Frameshift-Mutation verschiebt dieses Raster.",
    "schwer",
    ["Genetischer Code", "Translation", "Codons"]
  ),
  q(
    "bio-pool-21-015",
    "bio-kap4",
    "Bei einer Dihybrid-Kreuzung (AaBb × AaBb) mit unabhängiger Vererbung: Wie hoch ist die Wahrscheinlichkeit für den Genotyp AaBb in der F2?",
    ["1/16", "2/16", "4/16", "9/16", "3/16"],
    2,
    "Für jedes Gen getrennt: Aa × Aa → P(Aa) = 2/4 = 1/2. Bb × Bb → P(Bb) = 2/4 = 1/2. Bei unabhängiger Vererbung: P(AaBb) = 1/2 × 1/2 = 1/4 = 4/16. Das 9:3:3:1-Verhältnis betrifft die Phänotypen, nicht die Genotypen.",
    "schwer",
    ["Dihybrid", "Mendelsche Regeln", "Wahrscheinlichkeit"]
  ),
  q(
    "bio-pool-21-016",
    "bio-kap4",
    "Welche Aussage zur Polymerase-Kettenreaktion (PCR) ist korrekt?",
    [
      "PCR verwendet RNA-Polymerase zur Amplifikation von DNA-Abschnitten",
      "Die Denaturierung erfolgt bei ca. 95 °C, wobei die DNA-Doppelstränge getrennt werden",
      "PCR benötigt keine Primer, da die Taq-Polymerase die Startstelle selbst erkennt",
      "Nach 10 Zyklen liegen theoretisch ca. 100 Kopien der Zielsequenz vor",
      "Die Taq-Polymerase hat eine Korrekturlesefunktion (Proofreading) mit 3'→5'-Exonuklease-Aktivität",
    ],
    1,
    "PCR-Schritte: 1) Denaturierung bei ~95 °C (Strangtrennung), 2) Annealing bei ~55–65 °C (Primerbindung), 3) Elongation bei ~72 °C (Taq-Polymerase verlängert). Nach n Zyklen: 2^n Kopien. 10 Zyklen → 2^10 = 1024 Kopien. Taq hat KEINE Korrekturlesefunktion.",
    "schwer",
    ["PCR", "Molekularbiologie", "Taq-Polymerase"]
  ),
  q(
    "bio-pool-21-017",
    "bio-kap4",
    "Welche Aussage zu Tumorsuppressorgenen und Onkogenen ist korrekt?",
    [
      "Tumorsuppressorgene müssen aktiviert werden (Gain-of-Function), damit Krebs entsteht",
      "Onkogene entstehen durch Inaktivierung von Protoonkogenen",
      "Bei Tumorsuppressorgenen müssen nach Knudsons Two-Hit-Hypothese beide Allele inaktiviert werden",
      "p53 ist ein Onkogen, das das Zellwachstum fördert",
      "Retinoblastom (Rb) ist ein Proto-Onkogen, das bei Aktivierung zu Krebs führt",
    ],
    2,
    "Knudsons Two-Hit-Hypothese: Tumorsuppressorgene (z. B. Rb, p53) sind rezessiv — beide Allele müssen inaktiviert werden (Loss-of-Function). Onkogene entstehen durch Aktivierung (Gain-of-Function) von Protoonkogenen (z. B. Punktmutation, Amplifikation, Translokation). p53 ist ein Tumorsuppressorgen.",
    "schwer",
    ["Onkogene", "Tumorsuppressorgene", "Krebsgenetik"]
  ),

  // ── Entwicklung/Evolution (bio-kap3): 8 Fragen ──
  q(
    "bio-pool-21-018",
    "bio-kap3",
    "Welche Aussage zur sympatrischen Artbildung ist korrekt?",
    [
      "Sympatrische Artbildung erfordert immer eine geografische Barriere zwischen den Populationen",
      "Polyploidisierung bei Pflanzen ist ein häufiger Mechanismus der sympatrischen Artbildung",
      "Sympatrische Artbildung kommt nur bei Tieren vor, nicht bei Pflanzen",
      "Sie führt immer zu morphologisch identischen, aber reproduktiv isolierten Arten",
      "Sympatrische Artbildung widerspricht dem biologischen Artkonzept vollständig",
    ],
    1,
    "Sympatrische Artbildung erfolgt OHNE geografische Isolation im selben Verbreitungsgebiet. Häufigster Mechanismus: Polyploidisierung (besonders bei Pflanzen), z. B. Allopolyploidie nach Hybridisierung. Auch ökologische Nischendifferenzierung oder sexuelle Selektion können beteiligt sein.",
    "schwer",
    ["Sympatrische Artbildung", "Polyploidie", "Speziation"]
  ),
  q(
    "bio-pool-21-019",
    "bio-kap3",
    "In einer Population sind 16 % der Individuen homozygot rezessiv für ein Merkmal (aa). Wie hoch ist die Frequenz der Heterozygoten (2pq) nach Hardy-Weinberg?",
    ["0,24 (24 %)", "0,32 (32 %)", "0,48 (48 %)", "0,64 (64 %)", "0,16 (16 %)"],
    2,
    "q² = 0,16 → q = 0,4 → p = 1 − 0,4 = 0,6. Heterozygotenfrequenz: 2pq = 2 × 0,6 × 0,4 = 0,48 = 48 %. Kontrolle: p² + 2pq + q² = 0,36 + 0,48 + 0,16 = 1,00.",
    "schwer",
    ["Hardy-Weinberg", "Populationsgenetik", "Berechnung"]
  ),
  q(
    "bio-pool-21-020",
    "bio-kap3",
    "Welche Struktur ist ein Beispiel für Homologie (und nicht Analogie)?",
    [
      "Flügel eines Vogels und Flügel eines Schmetterlings",
      "Arm des Menschen und Vorderflosse eines Wals",
      "Auge eines Wirbeltiers und Auge eines Tintenfischs",
      "Grabbeine eines Maulwurfs und Grabbeine einer Maulwurfsgrille",
      "Stromlinienform eines Hais und eines Delfins",
    ],
    1,
    "Homologe Strukturen haben einen gemeinsamen Bauplan (gleiche embryonale Herkunft), aber können unterschiedliche Funktionen haben. Arm des Menschen und Vorderflosse des Wals teilen den gleichen Knochenaufbau (Humerus, Radius, Ulna). Flügel von Vogel und Insekt sind analog (konvergente Evolution, verschiedener Bauplan).",
    "schwer",
    ["Homologie", "Analogie", "Vergleichende Anatomie"]
  ),
  q(
    "bio-pool-21-021",
    "bio-kap3",
    "Welche Aussage zur Plazenta ist FALSCH?",
    [
      "Die Plazenta ermöglicht den Gasaustausch zwischen mütterlichem und fetalem Blut",
      "Mütterliches und fetales Blut mischen sich in der Plazenta direkt (offener Kreislauf)",
      "Die Plazenta produziert hCG (humanes Choriongonadotropin), das den Gelbkörper erhält",
      "Nährstoffe und Abfallprodukte werden über die Plazentaschranke ausgetauscht",
      "Die Plazenta hat sowohl einen maternalen als auch einen fetalen Anteil",
    ],
    1,
    "Mütterliches und fetales Blut mischen sich in der Plazenta NICHT direkt. Es handelt sich um eine hämochoriale Plazenta: Mütterliches Blut umspült die Chorionzotten, aber die Plazentaschranke (Synzytiotrophoblast) trennt beide Kreisläufe. Austausch erfolgt durch Diffusion und aktiven Transport.",
    "schwer",
    ["Plazenta", "Embryologie", "Schwangerschaft"]
  ),
  q(
    "bio-pool-21-022",
    "bio-kap3",
    "Welcher Selektionstyp führt zu einer Aufspaltung der Merkmalverteilung in einer Population mit zwei Extremen?",
    [
      "Stabilisierende Selektion",
      "Gerichtete (direktionale) Selektion",
      "Disruptive (aufspaltende) Selektion",
      "Künstliche Selektion (Züchtung)",
      "Balancierte Selektion durch Heterozygotenvorteil",
    ],
    2,
    "Disruptive Selektion bevorzugt beide Extreme und selektiert gegen den Durchschnittswert. Beispiel: Schnabelgröße bei Darwinfinken (große und kleine Samen, aber keine mittleren verfügbar). Sie kann zur sympatrischen Artbildung beitragen.",
    "schwer",
    ["Selektion", "Disruptive Selektion", "Evolution"]
  ),
  q(
    "bio-pool-21-023",
    "bio-kap3",
    "Welche Aussage zu Rudimenten (rudimentären Organen) ist korrekt?",
    [
      "Rudimentäre Organe haben immer noch eine wichtige Funktion für den Organismus",
      "Rudimentäre Organe sind Strukturen, die bei den Vorfahren funktionell waren, aber ihre ursprüngliche Funktion weitgehend verloren haben",
      "Das menschliche Steißbein ist kein Rudiment, sondern eine Neubildung",
      "Rudimentäre Organe sind Hinweise auf konvergente Evolution",
      "Rudimentäre Organe kommen nur bei Wirbeltieren vor",
    ],
    1,
    "Rudimente sind zurückgebildete Organe, die bei Vorfahren eine Funktion hatten (z. B. Steißbein als Rest des Schwanzes, Appendix als reduzierter Blinddarm, Nickhaut als rudimentäres drittes Augenlid). Sie sind Homologien und Belege für gemeinsame Abstammung (divergente, nicht konvergente Evolution).",
    "schwer",
    ["Rudimente", "Evolution", "Homologie"]
  ),
  q(
    "bio-pool-21-024",
    "bio-kap3",
    "Welche Aussage zur Neurulation in der Embryonalentwicklung ist korrekt?",
    [
      "Die Neuralplatte bildet sich aus dem Endoderm unter Einfluss der Chorda dorsalis",
      "Die Neuralrinne schließt sich zum Neuralrohr, aus dem ZNS (Gehirn und Rückenmark) entsteht",
      "Neuralleistenzellen stammen vom Mesoderm ab und bilden nur Knorpelgewebe",
      "Die Neurulation findet erst im dritten Schwangerschaftstrimester statt",
      "Folsäuremangel hat keinen Einfluss auf den Neuralrohrschluss",
    ],
    1,
    "Neurulation: Ektoderm verdickt sich zur Neuralplatte → Neuralrinne → Neuralrohr (schließt sich ca. Tag 22–28). Daraus entstehen Gehirn und Rückenmark. Neuralleistenzellen (Ektoderm!) bilden PNS, Melanozyten, Nebennieremark u. a. Folsäure ist kritisch für den Neuralrohrschluss (Mangel → Spina bifida).",
    "schwer",
    ["Neurulation", "Embryologie", "Neuralrohr"]
  ),
  q(
    "bio-pool-21-025",
    "bio-kap3",
    "Welche Aussage zur adaptiven Radiation ist korrekt?",
    [
      "Adaptive Radiation beschreibt die Rückbildung von Arten zu einem gemeinsamen Vorfahren",
      "Sie tritt typischerweise auf, wenn eine Stammart neue, unbesetzte ökologische Nischen erschließt und sich in viele spezialisierte Arten aufspaltet",
      "Adaptive Radiation führt immer zur Verringerung der Artenzahl",
      "Darwinfinken auf den Galapagosinseln sind KEIN Beispiel für adaptive Radiation",
      "Adaptive Radiation erfordert konstante Umweltbedingungen ohne neue ökologische Nischen",
    ],
    1,
    "Adaptive Radiation: Eine Stammart diversifiziert sich schnell in viele neue Arten, die verschiedene ökologische Nischen besetzen. Klassische Beispiele: Darwinfinken (Galapagos), Buntbarsche (Ostafrikanische Seen), Lemuren (Madagaskar). Auslöser sind oft unbesetzte Nischen (z. B. Inseln, nach Massenaussterben).",
    "schwer",
    ["Adaptive Radiation", "Evolution", "Artbildung"]
  ),

  // ── Ökologie/Immunologie (bio-kap5): 5 Fragen ──
  q(
    "bio-pool-21-026",
    "bio-kap5",
    "Welche Aussage zu MHC-Molekülen (Major Histocompatibility Complex) ist korrekt?",
    [
      "MHC-I präsentiert extrazelluläre Antigene und wird nur auf Antigen-präsentierenden Zellen exprimiert",
      "MHC-II präsentiert intrazelluläre (endogene) Antigene und wird auf allen kernhaltigen Zellen exprimiert",
      "MHC-I präsentiert endogene Antigene auf allen kernhaltigen Zellen; MHC-II präsentiert exogene Antigene auf professionellen APCs",
      "MHC-Moleküle spielen bei der Transplantatabstoßung keine Rolle",
      "T-Helferzellen (CD4⁺) erkennen Antigene über MHC-I-Moleküle",
    ],
    2,
    "MHC-I: auf allen kernhaltigen Zellen, präsentiert endogene Peptide (z. B. virale Proteine) → erkannt von CD8⁺ zytotoxischen T-Zellen. MHC-II: auf professionellen APCs (dendritische Zellen, Makrophagen, B-Zellen), präsentiert exogene Peptide → erkannt von CD4⁺ T-Helferzellen.",
    "schwer",
    ["MHC", "Antigenpräsentation", "Immunologie"]
  ),
  q(
    "bio-pool-21-027",
    "bio-kap5",
    "Welche Aussage zum Komplementsystem ist FALSCH?",
    [
      "Der klassische Weg wird durch Antikörper-Antigen-Komplexe (IgG oder IgM) aktiviert",
      "Der alternative Weg wird direkt durch mikrobielle Oberflächen ohne Antikörper aktiviert",
      "Der Membranangriffskomplex (MAC) bildet Poren in der Zellmembran von Pathogenen",
      "C3a und C5a sind Anaphylatoxine, die Entzündungsreaktionen und Chemotaxis vermitteln",
      "Das Komplementsystem gehört ausschließlich zur adaptiven Immunabwehr und hat keine angeborenen Komponenten",
    ],
    4,
    "Das Komplementsystem gehört primär zur ANGEBORENEN (unspezifischen) Immunabwehr, kann aber über den klassischen Weg durch Antikörper (adaptive Komponente) aktiviert werden. Es bildet eine Brücke zwischen angeborenem und adaptivem Immunsystem. Funktionen: Lyse (MAC), Opsonisierung (C3b), Entzündung (C3a, C5a).",
    "schwer",
    ["Komplementsystem", "Angeborene Immunität", "MAC"]
  ),
  q(
    "bio-pool-21-028",
    "bio-kap5",
    "In einer Lotka-Volterra-Räuber-Beute-Beziehung: Welche Aussage ist korrekt?",
    [
      "Räuber- und Beutepopulation schwanken synchron — beide Maxima fallen zusammen",
      "Die Räuberpopulation erreicht ihr Maximum zeitversetzt NACH dem Maximum der Beutepopulation",
      "Beutepopulationen beeinflussen die Räuberpopulation, aber nicht umgekehrt",
      "Das Modell berücksichtigt Krankheiten, Konkurrenz und Umweltkatastrophen",
      "Die Populationsgrößen konvergieren immer auf einen stabilen Gleichgewichtswert ohne Oszillation",
    ],
    1,
    "Lotka-Volterra-Modell: Beute- und Räuberpopulation oszillieren phasenverschoben. Zuerst steigt die Beute → dann steigt die Räuberpopulation (Nahrungsangebot) → Beute sinkt → Räuber sinkt (Nahrungsmangel) → Zyklus beginnt erneut. Das Räubermaximum folgt dem Beutemaximum zeitversetzt.",
    "schwer",
    ["Ökologie", "Lotka-Volterra", "Räuber-Beute"]
  ),
  q(
    "bio-pool-21-029",
    "bio-kap5",
    "Welche Aussage zur Typ-I-Allergie (Soforttyp) ist korrekt?",
    [
      "Sie wird durch IgG-Antikörper vermittelt und tritt erst nach 48 Stunden auf",
      "Mastzellen werden durch kreuzvernetztes IgE auf ihrer Oberfläche degranuliert und setzen Histamin frei",
      "Die Typ-I-Allergie erfordert keine vorherige Sensibilisierung gegen das Allergen",
      "T-Zellen sind die primären Effektorzellen bei der allergischen Sofortreaktion",
      "Antihistaminika sind bei Typ-I-Allergien wirkungslos",
    ],
    1,
    "Typ-I-Allergie (Soforttyp, Anaphylaxie): 1. Sensibilisierung: B-Zellen produzieren allergenspezifisches IgE → bindet an FcεRI auf Mastzellen. 2. Reexposition: Allergen kreuzvernetzt membranständiges IgE → Mastzell-Degranulation → Histamin, Leukotriene, Prostaglandine → Vasodilatation, Bronchospasmus, Ödeme.",
    "schwer",
    ["Allergie", "IgE", "Mastzellen", "Immunologie"]
  ),
  q(
    "bio-pool-21-030",
    "bio-kap5",
    "Welche Aussage zum Stickstoffkreislauf ist FALSCH?",
    [
      "Stickstofffixierende Bakterien (z. B. Rhizobium in Leguminosen-Wurzelknöllchen) wandeln N₂ in Ammonium (NH₄⁺) um",
      "Nitrifikation ist die Oxidation von Ammonium zu Nitrit und dann zu Nitrat durch Nitrifizierer",
      "Denitrifikation wandelt Nitrat unter anaeroben Bedingungen zurück zu N₂",
      "Pflanzen können atmosphärischen Stickstoff (N₂) direkt über ihre Wurzeln aufnehmen und assimilieren",
      "Ammonifikation ist der Abbau organischer Stickstoffverbindungen zu Ammonium durch Destruenten",
    ],
    3,
    "Pflanzen können N₂ NICHT direkt aufnehmen. Sie benötigen fixierten Stickstoff in Form von NH₄⁺ (Ammonium) oder NO₃⁻ (Nitrat). Nur bestimmte Prokaryoten (z. B. Rhizobium, Azotobacter, Cyanobakterien) besitzen das Enzym Nitrogenase zur N₂-Fixierung.",
    "schwer",
    ["Stickstoffkreislauf", "Ökologie", "Biogeochemie"]
  ),
];
