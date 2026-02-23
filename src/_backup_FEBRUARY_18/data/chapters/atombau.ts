import type { Chapter } from "./types";

export const atombauChapter: Chapter = {
  id: "atombau",
  subject: "chemie",
  title: "Allgemeine & Anorganische Chemie",
  subtitle: "Atombau, Periodensystem, Bindungen, Stöchiometrie & Radioaktivität",
  icon: "⚛️",
  chapterNumber: "Kapitel 1/3",
  readingTime: "~50 Minuten",
  level: "Grundlage",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die fundamentalen Konzepte der allgemeinen und anorganischen Chemie, die für den MedAT essenziell sind. Vom Aufbau einzelner Atome über das Periodensystem und chemische Bindungen bis hin zu Stöchiometrie, Säure-Base-Chemie und Radioaktivität werden alle prüfungsrelevanten Themen systematisch aufbereitet. Ein besonderer Fokus liegt auf den periodischen Trends, Bindungstypen und dem Säure-Base-Gleichgewicht — diese Themen werden im MedAT besonders häufig geprüft.",

  learningObjectives: [
    "Den Aufbau eines Atoms und die Elektronenkonfiguration beschreiben",
    "Periodische Trends (EN, Atomradius, IE) erklären und anwenden",
    "Die drei Hauptbindungstypen unterscheiden",
    "Zwischenmolekulare Kräfte in der richtigen Stärkereihenfolge einordnen",
    "Stöchiometrische Berechnungen mit dem Mol-Konzept durchführen",
    "pH-Werte berechnen und Puffersysteme verstehen",
    "Redoxreaktionen und radioaktive Zerfallsarten beschreiben",
  ],

  sections: [
    // ----------------------------------------------------------------
    // SECTION 1: Atombau & Atommodelle
    // ----------------------------------------------------------------
    {
      heading: "Atombau & Atommodelle",
      content: `Ein Atom ist der kleinste chemisch nicht weiter teilbare Baustein der Materie. Es besteht aus einem positiv geladenen <strong>Atomkern</strong> und einer negativ geladenen <strong>Elektronenhülle</strong>.

<strong>Aufbau des Atomkerns</strong>
Der Kern enthält zwei Arten von Nukleonen:
• <strong>Protonen (p⁺)</strong> — positiv geladen, Masse ≈ 1 u (atomare Masseneinheit)
• <strong>Neutronen (n)</strong> — elektrisch neutral, Masse ≈ 1 u

Die <strong>Ordnungszahl Z</strong> gibt die Anzahl der Protonen an und definiert das Element eindeutig. In einem elektrisch neutralen Atom gilt: Anzahl Protonen = Anzahl Elektronen.

Die <strong>Massenzahl A</strong> ist die Summe aus Protonen und Neutronen: A = Z + N. Hieraus ergibt sich die Schreibweise: ᴬ_Z X (z. B. ¹²₆C für Kohlenstoff-12 mit 6 Protonen und 6 Neutronen).

<strong>Isotope</strong> sind Atome desselben Elements (gleiche Protonenzahl Z), die sich in der Neutronenzahl N unterscheiden. Beispiel: ¹²C, ¹³C und ¹⁴C sind Kohlenstoff-Isotope. Die chemischen Eigenschaften bleiben nahezu identisch, da diese von der Elektronenhülle abhängen.

<strong>Elektronenhülle</strong>
Die Elektronen (e⁻) umgeben den Kern und bestimmen die chemischen Eigenschaften eines Elements.

<strong>Bohr'sches Atommodell (Schalenmodell)</strong>
Niels Bohr beschrieb 1913 die Elektronen auf festen Kreisbahnen (Schalen) um den Kern:
• Schale K (n = 1): max. 2 Elektronen
• Schale L (n = 2): max. 8 Elektronen
• Schale M (n = 3): max. 18 Elektronen
• Schale N (n = 4): max. 32 Elektronen
Allgemein: maximale Elektronenzahl pro Schale = 2n².

Dieses Modell erklärt z. B. die Linienspektren der Elemente, hat aber Grenzen — es kann weder die exakte Energieaufspaltung noch die räumliche Form der Orbitale beschreiben.

<strong>Orbitalmodell (Quantenmechanisches Modell)</strong>
Das modernere Orbitalmodell ersetzt die festen Bahnen durch <strong>Aufenthaltswahrscheinlichkeiten</strong>. Ein Orbital ist ein Raumbereich, in dem sich ein Elektron mit 90 % Wahrscheinlichkeit aufhält. Die vier Quantenzahlen (n, l, mₗ, mₛ) beschreiben den Zustand eines Elektrons vollständig.

<strong>Unterschalen und ihre Kapazität:</strong>
• s-Orbital: 1 Orbital → max. 2 Elektronen
• p-Orbitale: 3 Orbitale → max. 6 Elektronen
• d-Orbitale: 5 Orbitale → max. 10 Elektronen
• f-Orbitale: 7 Orbitale → max. 14 Elektronen

<strong>Aufbauprinzip (Reihenfolge der Orbitalbesetzung)</strong>
Elektronen besetzen die Orbitale in aufsteigender Energie: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p. Wichtig: Das 4s-Orbital wird vor dem 3d-Orbital besetzt, weil es eine niedrigere Energie hat.

<strong>Hund'sche Regel</strong>
Orbitale gleicher Energie (z. B. die drei p-Orbitale) werden zürst einzeln mit parallelem Spin besetzt, bevor eine Doppelbesetzung stattfindet. Merkspruch: „Busse werden erst einzeln besetzt, bevor sich jemand dazusetzt.“

<strong>Pauli-Prinzip</strong>
In einem Orbital befinden sich maximal 2 Elektronen — und diese müssen entgegengesetzten Spin besitzen (antiparallel: ↑↓). Kein Elektron darf mit einem anderen in allen vier Quantenzahlen übereinstimmen.

<strong>Beispiel: Sauerstoff (Z = 8)</strong>
Elektronenkonfiguration: 1s² 2s² 2p⁴ — die 2p-Unterschale hat 3 Orbitale, von denen nach der Hund'schen Regel erst alle drei einfach besetzt werden; das vierte Elektron paart sich dann mit einem der bereits besetzten Orbitale.`,
      diagram: "atomic-orbitals",
      merke:
        "Aufbaureihenfolge: 1s 2s 2p 3s 3p <strong>4s 3d</strong> 4p 5s 4d 5p. Merke: 4s wird VOR 3d besetzt! Hund: Orbitale gleicher Energie erst einfach besetzen (Busse erst einzeln besetzen).",
      klinik:
        "Radioaktive Isotope in der Medizin: Iod-131 für Schilddrüsendiagnostik/-therapie, Technetium-99m als häufigster Tracer in der Nuklearmedizin (SPECT).",
    },

    // ----------------------------------------------------------------
    // SECTION 2: Periodensystem der Elemente
    // ----------------------------------------------------------------
    {
      heading: "Periodensystem der Elemente",
      content: `Das Periodensystem der Elemente (PSE) ordnet alle bekannten Elemente nach steigender Ordnungszahl und gruppiert sie nach ihren chemischen Eigenschaften.

<strong>Aufbau des PSE</strong>
• <strong>7 Perioden</strong> (Zeilen) — entsprechen den Elektronenschalen (Periode 1 = K-Schale, Periode 2 = L-Schale usw.)
• <strong>18 Gruppen</strong> (Spalten) — Elemente derselben Gruppe haben die gleiche Anzahl an Valenzelektronen (Außenelektronen) und damit ähnliche chemische Eigenschaften.

<strong>Hauptgruppen (1, 2, 13–18): s- und p-Block</strong>
Die Hauptgruppenelemente füllen ihre s- oder p-Orbitale auf. Die Gruppennummer minus 10 (ab Gruppe 13) ergibt die Valenzelektronenzahl:
• Gruppe 1 (Alkalimetalle): 1 Valenzelektron — Li, Na, K, Rb, Cs, Fr — sehr reaktiv, bilden +1-Ionen
• Gruppe 2 (Erdalkalimetalle): 2 Valenzelektronen — Be, Mg, Ca, Sr, Ba, Ra — bilden +2-Ionen
• Gruppe 17 (Halogene): 7 Valenzelektronen — F, Cl, Br, I, At — sehr reaktiv, bilden -1-Ionen
• Gruppe 18 (Edelgase): 8 Valenzelektronen (He: 2) — He, Ne, Ar, Kr, Xe, Rn — chemisch (nahezu) inert, volle Außenschale

<strong>Nebengruppen (3–12): d-Block</strong>
Die Nebengruppenelemente (Übergangsmetalle) füllen ihre d-Orbitale auf. Sie können variable Oxidationsstufen annehmen (z. B. Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺) und bilden oft farbige Verbindungen und Komplexe.

<strong>Periodische Trends</strong>

<strong>1. Atomradius</strong>
• In der Periode von links nach rechts: <strong>nimmt ab</strong> (mehr Protonen ziehen die Elektronen stärker an, bei gleicher Schalenzahl)
• In der Gruppe von oben nach unten: <strong>nimmt zu</strong> (neue Schalen kommen hinzu)

<strong>2. Ionisierungsenergie (IE)</strong>
Die Energie, die nötig ist, um ein Elektron aus einem neutralen Atom zu entfernen.
• In der Periode →: <strong>nimmt zu</strong> (stärkere Kernladung)
• In der Gruppe ↓: <strong>nimmt ab</strong> (Valenzelektronen sind weiter vom Kern entfernt)

<strong>3. Elektronegativität (EN)</strong>
Die Fähigkeit eines Atoms, Bindungselektronen an sich zu ziehen (Skala nach Pauling).
• In der Periode →: <strong>nimmt zu</strong>
• In der Gruppe ↓: <strong>nimmt ab</strong>
• Höchster Wert: <strong>Fluor (EN = 3,98)</strong>, gefolgt von Sauerstoff (3,44), Stickstoff (3,04) und Chlor (3,16).
• Edelgase haben per Konvention keine EN (volle Außenschale, keine Bindungstendenz).

<strong>4. Metallcharakter</strong>
• In der Periode →: <strong>nimmt ab</strong> (von Metall über Halbmetall zu Nichtmetall)
• In der Gruppe ↓: <strong>nimmt zu</strong> (entgegengesetzt zu EN und IE)

Zusammengefasst: EN, IE und Nichtmetallcharakter steigen nach rechts oben; Atomradius und Metallcharakter steigen nach links unten.`,
      diagram: "periodic-table",
      vergleichsTabelle: {
        headers: ["Trend", "In der Periode →", "In der Gruppe ↓"],
        rows: [
          ["Atomradius", "nimmt ab ↓", "nimmt zu ↑"],
          ["Ionisierungsenergie", "nimmt zu ↑", "nimmt ab ↓"],
          ["Elektronegativität", "nimmt zu ↑", "nimmt ab ↓"],
          ["Metallcharakter", "nimmt ab ↓", "nimmt zu ↑"],
        ],
      },
      merke:
        "Alle Trends gehen <strong>nach rechts oben</strong> (außer Atomradius und Metallcharakter): EN, IE steigen von links unten nach rechts oben. Höchste EN: <strong>Fluor</strong> (3,98).",
      altfrage:
        '"Welches Element hat die höchste Elektronegativität?" → <strong>Fluor</strong> (3,98). NICHT Sauerstoff (3,44) und NICHT Chlor (3,16).',
    },

    // ----------------------------------------------------------------
    // SECTION 3: Chemische Bindungen
    // ----------------------------------------------------------------
    {
      heading: "Chemische Bindungen",
      content: `Chemische Bindungen entstehen, weil Atome einen energetisch günstigeren Zustand anstreben — in der Regel die <strong>Edelgaskonfiguration</strong> (Oktettregel: 8 Valenzelektronen, Ausnahme Helium: 2). Es gibt drei Hauptbindungstypen:

<strong>1. Ionenbindung</strong>
• Zwischen <strong>Metall und Nichtmetall</strong> (EN-Differenz > 1,7)
• Mechanismus: <strong>Elektronenübertragung</strong> — das Metall gibt Elektronen ab (→ Kation), das Nichtmetall nimmt sie auf (→ Anion)
• Die entgegengesetzt geladenen Ionen ziehen sich elektrostatisch an und bilden ein geordnetes <strong>Kristallgitter</strong> (Ionengitter)
• Eigenschaften: hoher Schmelzpunkt, spröde (bei Verschiebung stoßen gleichnamige Ladungen aufeinander), als Feststoff Isolator, als Schmelze oder in Lösung elektrisch leitfähig (frei bewegliche Ionen)
• Beispiele: NaCl (Kochsalz), CaF₂, MgO

<strong>2. Kovalente Bindung (Atombindung)</strong>
• Zwischen <strong>Nichtmetall und Nichtmetall</strong> (EN-Differenz < 1,7)
• Mechanismus: <strong>gemeinsame Elektronenpaare</strong> — die Atome teilen sich Valenzelektronen
• Sigma-Bindung (σ): frontale Orbitalüberlappung, Einfachbindung — frei drehbar
• Pi-Bindung (π): seitliche Orbitalüberlappung, kommt zusätzlich zur σ-Bindung in Doppel- und Dreifachbindungen vor — verhindert freie Drehung
• <strong>Polare kovalente Bindung</strong>: ungleiche EN → Ladungsverschiebung (Dipol), z. B. H-Cl (δ⁺H—Clδ⁻)
• <strong>Unpolare kovalente Bindung</strong>: gleiche EN → gleichmäßige Elektronenverteilung, z. B. H₂, O₂, N₂
• Beispiele: H₂O, CO₂, CH₄, NH₃

<strong>3. Metallische Bindung</strong>
• Zwischen <strong>Metallatomen</strong>
• Mechanismus: <strong>Elektronengas-Modell</strong> — die Valenzelektronen sind delokalisiert und bewegen sich frei zwischen den positiv geladenen Metallkationen (Atomrümpfen)
• Eigenschaften: elektrisch leitfähig (frei bewegliche Elektronen), thermisch leitfähig, verformbar (duktil, malleabel — Schichten gleiten übereinander), metallischer Glanz
• Beispiele: Fe, Cu, Al, Au

<strong>VSEPR-Modell (Valence Shell Electron Pair Repulsion)</strong>
Das VSEPR-Modell sagt die räumliche Struktur von Molekülen vorher. Elektronenpaare (bindend und frei) stoßen sich gegenseitig ab und ordnen sich so an, dass der Abstand maximal ist:
• 2 Elektronenpaare → <strong>linear</strong>, Winkel 180° (z. B. CO₂, BeCl₂)
• 3 Elektronenpaare → <strong>trigonal-planar</strong>, Winkel 120° (z. B. BF₃)
• 4 Elektronenpaare → <strong>tetraedrisch</strong>, Winkel 109,5° (z. B. CH₄)
• 4 EP, davon 1 freies → <strong>trigonal-pyramidal</strong>, Winkel ~107° (z. B. NH₃)
• 4 EP, davon 2 freie → <strong>gewinkelt</strong>, Winkel ~104,5° (z. B. H₂O)
Freie Elektronenpaare beanspruchen mehr Raum als bindende und drücken die Bindungswinkel zusammen.`,
      diagram: "ionic-bond",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Ionenbindung", "Kovalente Bindung", "Metallbindung"],
        rows: [
          ["Partner", "Metall + Nichtmetall", "Nichtmetall + Nichtmetall", "Metall + Metall"],
          [
            "Prinzip",
            "Elektronenübertragung",
            "Gemeinsame Elektronenpaare",
            "Elektronengas (delokalisiert)",
          ],
          ["Schmelzpunkt", "Hoch", "Niedrig bis mittel", "Mittel bis hoch"],
          [
            "Leitfähigkeit",
            "Nur in Lösung/Schmelze",
            "Keine (Ausn.: Graphit)",
            "Sehr gut (Elektronen)",
          ],
          ["Verformbarkeit", "Spröde", "Nicht verformbar", "Gut verformbar (duktil)"],
        ],
      },
      merke:
        "Ionenverbindungen leiten NUR als <strong>Lösung oder Schmelze</strong> Strom (frei bewegliche Ionen). Als Feststoff: Isolator! Metalle leiten IMMER (Elektronengas).",
      klinik:
        "Elektrolyte im Blut (Na⁺, K⁺, Ca²⁺, Cl⁻) sind gelöste Ionen — essenziell für Nervenleitung, Muskelkontraktion und Säure-Basen-Haushalt.",
    },

    // ----------------------------------------------------------------
    // SECTION 4: Zwischenmolekulare Kräfte
    // ----------------------------------------------------------------
    {
      heading: "Zwischenmolekulare Kräfte",
      content: `Zwischenmolekulare Kräfte (intermolekulare Wechselwirkungen) wirken <strong>zwischen</strong> Molekülen — im Gegensatz zu den intramolekularen Bindungen (ionisch, kovalent, metallisch), die <strong>innerhalb</strong> von Molekülen wirken. Sie bestimmen physikalische Eigenschaften wie Siedepunkt, Schmelzpunkt und Löslichkeit.

<strong>1. Van-der-Waals-Kräfte (London-Dispersionskräfte)</strong>
• Treten in <strong>allen</strong> Molekülen und Atomen auf — auch in unpolaren
• Entstehung: Durch zufällige, kurzzeitige Ladungsverschiebungen (temporäre Dipole) in der Elektronenhülle, die in Nachbarmolekülen ebenfalls Dipole induzieren
• Stärke: <strong>schwächste</strong> aller zwischenmolekularen Kräfte
• Nimmt mit der <strong>Molekülgröße</strong> und <strong>Oberfläche</strong> zu (mehr Elektronen → leichter polarisierbar)
• Beispiel: Edelgase (He, Ne, Ar), Alkane (Methan, Ethan, Propan) — je länger die Kette, desto höher der Siedepunkt

<strong>2. Dipol-Dipol-Wechselwirkungen</strong>
• Treten zwischen <strong>polaren Molekülen</strong> auf (permanenter Dipol)
• Die positive Teilladung (δ⁺) eines Moleküls wird von der negativen Teilladung (δ⁻) eines Nachbarmoleküls angezogen
• Stärker als Van-der-Waals-Kräfte, aber schwächer als Wasserstoffbrücken
• Beispiel: HCl, Aceton (CH₃COCH₃), Schwefeldioxid (SO₂)

<strong>3. Wasserstoffbrücken (H-Brücken)</strong>
• Spezialfall der Dipol-Dipol-Wechselwirkung — die <strong>stärkste</strong> zwischenmolekulare Kraft
• Voraussetzung: Ein Wasserstoffatom ist an ein stark elektronegatives Atom gebunden: <strong>Fluor (F), Sauerstoff (O) oder Stickstoff (N)</strong> — die <strong>FON-Regel</strong>
• Das stark positivierte H-Atom (δ⁺) wechselwirkt mit einem freien Elektronenpaar am F, O oder N eines Nachbarmoleküls
• Typische Stärke: 10–40 kJ/mol (im Vergleich: kovalente Bindung 150–500 kJ/mol)
• Beispiele: H₂O···H₂O, NH₃···NH₃, HF···HF, DNA-Basenpaarung (A-T: 2 H-Brücken, G-C: 3 H-Brücken)

<strong>Stärkereihenfolge der zwischenmolekularen Kräfte:</strong>
Ionische Wechselwirkung > Wasserstoffbrücken > Dipol-Dipol > Van-der-Waals

<strong>Anomalien des Wassers — erklärt durch Wasserstoffbrücken</strong>

• <strong>Hoher Siedepunkt (100 °C)</strong>: Ohne Wasserstoffbrücken würde H₂O bei ca. -80 °C sieden (vergleichbar mit H₂S: -60 °C). Die starken H-Brücken halten die Moleküle zusammen und erfordern viel Energie zum Verdampfen.

• <strong>Dichteanomalie</strong>: Wasser hat seine größte Dichte bei <strong>4 °C</strong> (nicht bei 0 °C). Beim Gefrieren bilden die Wassermoleküle ein hexagonales Kristallgitter mit großen Hohlräumen → Eis ist weniger dicht als flüssiges Wasser → Eis schwimmt. Diese Eigenschaft ist für das Überleben aquatischer Organismen im Winter essenziell.

• <strong>Hohe spezifische Wärmekapazität</strong> (4,18 kJ/(kg·K)): Viel Energie wird benötigt, um die Temperatur von Wasser zu erhöhen, da zunächst H-Brücken gebrochen werden müssen. Dies macht Wasser zu einem ausgezeichneten Temperaturpuffer im Körper.

• <strong>Hohe Verdampfungsenthalpie</strong>: Schwitzen kühlt den Körper effektiv, weil beim Verdunsten von Schweiß (= Wasser) viel Wärme entzogen wird.`,
      merke:
        "Stärke: Ionenbindung > H-Brücken > Dipol-Dipol > Van-der-Waals. <strong>FON-Regel</strong>: H-Brücken nur bei F-H, O-H, N-H!",
      altfrage:
        '"Warum hat Wasser einen so hohen Siedepunkt?" → <strong>Wasserstoffbrücken</strong> zwischen den H₂O-Molekülen. Ohne H-Brücken würde Wasser bei ca. -80°C sieden!',
    },

    // ----------------------------------------------------------------
    // SECTION 5: Stöchiometrie & Mol-Konzept
    // ----------------------------------------------------------------
    {
      heading: "Stöchiometrie & Mol-Konzept",
      content: `Die Stöchiometrie ist das quantitative Rechnen mit chemischen Reaktionsgleichungen. Das zentrale Konzept ist das <strong>Mol</strong>.

<strong>Das Mol — die chemische Mengeneinheit</strong>
• 1 Mol enthält exakt <strong>6,022 × 10²³ Teilchen</strong> (Atome, Moleküle, Ionen, Elektronen usw.)
• Diese Zahl heißt <strong>Avogadro-Konstante</strong> (Nₐ = 6,022 × 10²³ mol⁻¹)
• Definitionsgemäß enthält 1 Mol eines Stoffes so viele Teilchen wie Atome in 12 g des Kohlenstoff-Isotops ¹²C enthalten sind

<strong>Molare Masse M</strong>
• Gibt die Masse von 1 Mol eines Stoffes in g/mol an
• Numerisch gleich der relativen Atommasse (aus dem PSE)
• Beispiel: M(H₂O) = 2 × 1,008 + 15,999 = 18,015 g/mol → 1 Mol Wasser wiegt 18,015 g

<strong>Zentrale Formeln</strong>

<strong>Stoffmenge:</strong> n = m / M
• n = Stoffmenge in mol
• m = Masse in g
• M = molare Masse in g/mol

<strong>Konzentration:</strong> c = n / V
• c = Stoffmengenkonzentration in mol/L (= Molarität, M)
• n = Stoffmenge in mol
• V = Volumen in L

<strong>Teilchenzahl:</strong> N = n × Nₐ
• N = Anzahl der Teilchen
• Nₐ = 6,022 × 10²³ mol⁻¹

<strong>Reaktionsgleichungen ausgleichen</strong>
Chemische Gleichungen müssen ausgeglichen sein — auf beiden Seiten muss die gleiche Anzahl jedes Atomtyps stehen (Massenerhaltung nach Lavoisier).

Beispiel: Verbrennung von Methan
CH₄ + 2 O₂ → CO₂ + 2 H₂O

Vorgehen: 1. Gleichung aufstellen → 2. Atome zählen → 3. Koeffizienten anpassen → 4. Kontrolle.

<strong>Limitierender Reaktand</strong>
In einer Reaktion wird in der Regel nicht von jedem Edukt die exakte stöchiometrische Menge eingesetzt. Der Reaktand, der zürst vollständig verbraucht wird, heißt <strong>limitierender Reaktand</strong> — er bestimmt die maximale Produktmenge. Der andere liegt im Überschuss vor.

Beispiel: Für 2 H₂ + O₂ → 2 H₂O benötigt man H₂ und O₂ im Verhältnis 2:1. Hat man 3 mol H₂ und 1 mol O₂, ist O₂ der limitierende Reaktand (verbraucht 2 mol H₂), und 1 mol H₂ bleibt übrig.

<strong>Ideales Gasgesetz</strong>
p · V = n · R · T
• p = Druck in Pa (oder atm)
• V = Volumen in m³ (oder L)
• n = Stoffmenge in mol
• R = universelle Gaskonstante = 8,314 J/(mol·K)
• T = Temperatur in Kelvin (K = °C + 273,15)

Bei Standardbedingungen (STP: 0 °C, 1 atm) beträgt das molare Volumen eines idealen Gases <strong>22,4 L/mol</strong>.`,
      merke:
        "1 mol = <strong>6,022 × 10²³</strong> Teilchen (Avogadro). n = m/M (Stoffmenge = Masse/Molare Masse). c = n/V (Konzentration = Stoffmenge/Volumen).",
    },

    // ----------------------------------------------------------------
    // SECTION 6: Säure-Base-Chemie
    // ----------------------------------------------------------------
    {
      heading: "Säure-Base-Chemie",
      content: `Säuren und Basen spielen in der Chemie und Medizin eine zentrale Rolle. Es gibt verschiedene Definitionen:

<strong>Brønsted-Lowry-Definition (MedAT-relevant!)</strong>
• <strong>Säure</strong> = Protonendonator (gibt H⁺ ab)
• <strong>Base</strong> = Protonenakzeptor (nimmt H⁺ auf)
• Bei jeder Säure-Base-Reaktion entsteht ein <strong>konjugiertes Säure-Base-Paar</strong>:
  HCl + H₂O → Cl⁻ + H₃O⁺
  Säure₁ + Base₂ → konj. Base₁ + konj. Säure₂

<strong>Lewis-Definition (Ergänzung)</strong>
• Lewis-Säure = Elektronenpaarakzeptor (z. B. BF₃, AlCl₃)
• Lewis-Base = Elektronenpaardonator (z. B. NH₃, H₂O)

<strong>pH-Wert und pOH-Wert</strong>
• pH = -log₁₀[H⁺] (bzw. [H₃O⁺])
• pOH = -log₁₀[OH⁻]
• Bei 25 °C gilt: <strong>pH + pOH = 14</strong>
• pH < 7: sauer, pH = 7: neutral, pH > 7: basisch
• Eine Änderung um 1 pH-Einheit bedeutet eine <strong>10-fache</strong> Konzentrationsänderung

<strong>Starke vs. schwache Säuren/Basen</strong>
• <strong>Starke Säuren</strong> dissoziieren in Wasser <strong>vollständig</strong>: HCl, HNO₃, H₂SO₄, HBr, HI, HClO₄
  → Beispiel: HCl → H⁺ + Cl⁻ (100 % Dissoziation)
• <strong>Schwache Säuren</strong> dissoziieren nur <strong>teilweise</strong>: CH₃COOH (Essigsäure), H₂CO₃ (Kohlensäure), H₃PO₄
  → Es stellt sich ein Gleichgewicht ein: CH₃COOH ⇌ CH₃COO⁻ + H⁺

Die Säurestärke wird durch den <strong>pKs-Wert</strong> (Säuredissoziationskonstante) quantifiziert:
• Kleine pKs → starke Säure (hohe Dissoziation)
• Große pKs → schwache Säure (geringe Dissoziation)

<strong>Puffersysteme</strong>
Ein Puffer besteht aus einer <strong>schwachen Säure und ihrer konjugierten Base</strong> (oder umgekehrt). Er hält den pH-Wert bei Zugabe von Säure oder Base annähernd konstant.

<strong>Henderson-Hasselbalch-Gleichung:</strong>
pH = pKs + log([A⁻] / [HA])

• [A⁻] = Konzentration der konjugierten Base
• [HA] = Konzentration der schwachen Säure
• Wenn [A⁻] = [HA] → pH = pKs → hier ist die <strong>Pufferkapazität maximal</strong>
• Effektiver Pufferbereich: pH = pKs ± 1

<strong>Bicarbonatpuffer — der wichtigste Blutpuffer</strong>
CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

Dieses System ist besonders effektiv, weil CO₂ über die Lunge abgeatmet werden kann (offenes System). Das Verhältnis HCO₃⁻/CO₂ beträgt normalerweise 20:1, was einen pH von 7,4 ergibt.

<strong>Weitere wichtige Puffer im Körper:</strong>
• Phosphatpuffer (HPO₄²⁻/H₂PO₄⁻) — besonders in den Zellen und im Urin
• Proteinpuffer (z. B. Hämoglobin, Albumin) — Amino- und Carboxylgruppen als Puffergruppen`,
      diagram: "ph-scale",
      merke:
        "Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA]). Wenn [A⁻] = [HA], dann pH = pKs — dort ist die <strong>Pufferkapazität maximal</strong>! pH + pOH = 14.",
      klinik:
        "Blut-pH: <strong>7,35-7,45</strong>. Azidose < 7,35 (z.B. diabetische Ketoazidose), Alkalose > 7,45 (z.B. Hyperventilation → resp. Alkalose). Bicarbonatpuffer ist der wichtigste Blutpuffer.",
    },

    // ----------------------------------------------------------------
    // SECTION 7: Redox & Radioaktivität
    // ----------------------------------------------------------------
    {
      heading: "Redox & Radioaktivität",
      content: `<strong>Redoxreaktionen</strong>

Redoxreaktionen sind Elektronenübertragungsreaktionen. Oxidation und Reduktion treten immer gleichzeitig auf (gekoppelt).

<strong>Definitionen:</strong>
• <strong>Oxidation</strong> = Elektronenabgabe → Oxidationszahl steigt (↑)
• <strong>Reduktion</strong> = Elektronenaufnahme → Oxidationszahl sinkt (↓)

Merksprüche:
• <strong>OIL RIG</strong>: Oxidation Is Loss, Reduction Is Gain (von Elektronen)
• <strong>LEO GER</strong>: Loss of Electrons is Oxidation, Gain of Electrons is Reduction

<strong>Oxidationsmittel und Reduktionsmittel:</strong>
• Das <strong>Oxidationsmittel</strong> oxidiert den Partner → wird dabei selbst <strong>reduziert</strong>
• Das <strong>Reduktionsmittel</strong> reduziert den Partner → wird dabei selbst <strong>oxidiert</strong>

<strong>Regeln zur Bestimmung von Oxidationszahlen (OZ):</strong>
1. Elemente in elementarer Form: OZ = 0 (z. B. O₂, Fe, Na)
2. Einatomige Ionen: OZ = Ionenladung (z. B. Na⁺ → +1, Cl⁻ → -1)
3. Wasserstoff: OZ = <strong>+1</strong> (Ausnahme: Metallhydride wie NaH → -1)
4. Sauerstoff: OZ = <strong>-2</strong> (Ausnahme: Peroxide wie H₂O₂ → -1, OF₂ → +2)
5. Fluor: OZ immer <strong>-1</strong> (elektronegativstes Element)
6. Summe aller OZ in einem neutralen Molekül = 0, in einem Ion = Ionenladung

<strong>Beispiel: Reaktion von Zink mit Salzsäure</strong>
Zn + 2 HCl → ZnCl₂ + H₂↑
• Zn: OZ 0 → +2 (Oxidation, Elektronenabgabe) → Zn ist das Reduktionsmittel
• H: OZ +1 → 0 (Reduktion, Elektronenaufnahme) → HCl (H⁺) ist das Oxidationsmittel

<strong>Radioaktivität</strong>

Radioaktivität ist der spontane Zerfall instabiler Atomkerne unter Aussendung von Strahlung. Die drei Hauptzerfallsarten:

<strong>1. Alpha-Zerfall (α)</strong>
• Aussendung eines Helium-4-Kerns (²⁴He²⁺ = 2 Protonen + 2 Neutronen)
• Massenzahl: <strong>A sinkt um 4</strong>
• Ordnungszahl: <strong>Z sinkt um 2</strong>
• Beispiel: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He
• Reichweite: wenige cm in Luft, Blatt Papier reicht als Abschirmung
• Hohe Ionisierungsdichte → bei Inkorporation sehr gefährlich

<strong>2. Beta-minus-Zerfall (β⁻)</strong>
• Ein Neutron wandelt sich in ein Proton um: n → p⁺ + e⁻ + ν̄ₑ (Antineutrino)
• Ein Elektron (β⁻-Teilchen) und ein Antineutrino werden emittiert
• Massenzahl: <strong>A bleibt gleich</strong>
• Ordnungszahl: <strong>Z steigt um 1</strong>
• Beispiel: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ
• Reichweite: einige Meter in Luft, dünne Aluminiumschicht als Abschirmung

<strong>3. Gamma-Strahlung (γ)</strong>
• Aussendung hochenergetischer elektromagnetischer Strahlung (Photonen)
• Tritt oft begleitend nach α- oder β-Zerfall auf (Übergang in den Grundzustand)
• <strong>Keine Änderung</strong> von Massenzahl oder Ordnungszahl
• Reichweite: sehr hoch, Abschirmung durch dicke Blei- oder Betonschichten

<strong>Halbwertszeit (t½)</strong>
Die Halbwertszeit ist die Zeit, nach der die Hälfte der radioaktiven Kerne zerfallen ist.

<strong>Zerfallsgesetz:</strong>
N(t) = N₀ × (½)^(t/t½)

• N(t) = Anzahl der noch vorhandenen Kerne zum Zeitpunkt t
• N₀ = Anfangsanzahl der Kerne
• t½ = Halbwertszeit

Beispiel: ¹⁴C hat eine Halbwertszeit von 5730 Jahren → nach 5730 Jahren ist die Hälfte des ¹⁴C zerfallen → Grundlage der Radiokarbonmethode (C-14-Datierung).

<strong>Medizinisch wichtige Radionuklide:</strong>
• Technetium-99m (t½ = 6 h) — häufigster Tracer in der Nuklearmedizin (SPECT)
• Iod-131 (t½ = 8 Tage) — Schilddrüsendiagnostik und Radiojodtherapie
• Fluor-18 (t½ = 110 min) — PET-Diagnostik (als ¹⁸F-FDG)
• Cobalt-60 (t½ = 5,3 Jahre) — Strahlentherapie
• Radium-226 (t½ = 1600 Jahre) — historisch, heute nicht mehr in der Therapie`,
      merke:
        "<strong>OIL RIG</strong>: Oxidation Is Loss, Reduction Is Gain (von Elektronen). Das Oxidationsmittel wird selbst <strong>reduziert</strong>! Alpha: -4A/-2Z, Beta⁻: =A/+1Z, Gamma: keine Änderung.",
      altfrage:
        '"Was passiert bei einem Beta-minus-Zerfall?" → Neutron → Proton + Elektron + Antineutrino. Massenzahl bleibt gleich, Ordnungszahl steigt um 1.',
    },
  ],

  keyFacts: [
    {
      label: "Ordnungszahl",
      value: "Ordnungszahl = Protonenzahl = Elektronenzahl (neutral)",
    },
    {
      label: "Avogadro-Konstante",
      value: "6,022 × 10²³ Teilchen/mol",
    },
    {
      label: "Höchste EN",
      value: "Fluor (3,98)",
    },
    {
      label: "pH-Formel",
      value: "pH + pOH = 14, pH = -log[H⁺]",
    },
    {
      label: "H-Brücken",
      value: "Nur bei F-H, O-H, N-H (FON-Regel)",
    },
    {
      label: "Henderson-Hasselbalch",
      value: "pH = pKs + log([A⁻]/[HA])",
    },
    {
      label: "Blut-pH",
      value: "7,35–7,45",
    },
    {
      label: "Alpha-Zerfall",
      value: "-4A, -2Z",
    },
    {
      label: "Beta⁻-Zerfall",
      value: "=A, +1Z",
    },
    {
      label: "Kräfte-Reihenfolge",
      value: "Ionenbindung > H-Brücken > Dipol-Dipol > Van-der-Waals",
    },
  ],

  selfTestQuestions: [
    {
      question: "Welches Element hat die höchste Elektronegativität?",
      options: ["Sauerstoff", "Chlor", "Fluor", "Stickstoff", "Neon"],
      correctIndex: 2,
      explanation:
        "Fluor hat mit 3,98 die höchste EN aller Elemente. Edelgase wie Neon haben per Definition keine EN (volle Außenschale).",
    },
    {
      question: "Was gilt für eine Ionenverbindung im festen Zustand?",
      options: [
        "Leitet Strom",
        "Ist verformbar",
        "Leitet keinen Strom",
        "Ist flüssig",
        "Enthält freie Elektronen",
      ],
      correctIndex: 2,
      explanation:
        "Ionenverbindungen leiten nur als Lösung oder Schmelze Strom (frei bewegliche Ionen). Im festen Zustand sind die Ionen im Gitter fixiert → Isolator.",
    },
    {
      question: "pH + pOH = ?",
      options: ["7", "10", "12", "14", "1"],
      correctIndex: 3,
      explanation:
        "Bei 25°C gilt: pH + pOH = 14. Dies folgt aus dem Ionenprodukt des Wassers: Kw = [H⁺]·[OH⁻] = 10⁻¹⁴.",
    },
    {
      question: "Was passiert bei einem Alpha-Zerfall?",
      options: [
        "Massenzahl -4, OZ -2",
        "Massenzahl gleich, OZ +1",
        "Keine Änderung",
        "Massenzahl -2, OZ -4",
        "Massenzahl +4, OZ +2",
      ],
      correctIndex: 0,
      explanation:
        "Beim Alpha-Zerfall wird ein Helium-4-Kern (2p + 2n) emittiert. Daher: Massenzahl sinkt um 4, Ordnungszahl sinkt um 2.",
    },
    {
      question: "Welche intermolekulare Kraft erklärt den hohen Siedepunkt von Wasser?",
      options: [
        "Van-der-Waals-Kräfte",
        "Ionenbindung",
        "Metallische Bindung",
        "Wasserstoffbrücken",
        "Kovalente Bindung",
      ],
      correctIndex: 3,
      explanation:
        "Wasserstoffbrücken zwischen H₂O-Molekülen (O-H···O) sind die stärksten zwischenmolekularen Kräfte und erklären den hohen Siedepunkt (100°C statt erwartet -80°C).",
    },
  ],

  summary: [
    "Atome bestehen aus Kern (Protonen + Neutronen) und Elektronenhülle. Die Ordnungszahl Z definiert das Element, die Massenzahl A = Z + N. Elektronen besetzen Orbitale nach dem Aufbauprinzip (1s 2s 2p 3s 3p 4s 3d ...), der Hund'schen Regel und dem Pauli-Prinzip.",
    "Das Periodensystem ordnet Elemente nach steigender Ordnungszahl. Periodische Trends: EN und IE steigen nach rechts oben, Atomradius und Metallcharakter nach links unten. Fluor hat die höchste EN (3,98).",
    "Drei Hauptbindungstypen: Ionenbindung (Elektronenübertragung, Metall + Nichtmetall), kovalente Bindung (geteilte Elektronenpaare, Nichtmetalle) und metallische Bindung (Elektronengas, Metalle). VSEPR erklärt die Molekülgeometrie.",
    "Zwischenmolekulare Kräfte bestimmen physikalische Eigenschaften. Stärkereihenfolge: Ionische WW > H-Brücken (FON-Regel) > Dipol-Dipol > Van-der-Waals. Wasserstoffbrücken erklären die besonderen Eigenschaften des Wassers.",
    "Das Mol-Konzept: 1 mol = 6,022 × 10²³ Teilchen. Zentrale Formeln: n = m/M und c = n/V. Reaktionsgleichungen müssen ausgeglichen sein; der limitierende Reaktand bestimmt die Produktmenge.",
    "Brønsted-Säuren sind Protonendonatoren, Basen Protonenakzeptoren. pH = -log[H⁺], pH + pOH = 14. Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA]). Der Bicarbonatpuffer hält den Blut-pH bei 7,35–7,45.",
    "Redoxreaktionen: Oxidation = Elektronenverlust (OZ↑), Reduktion = Elektronengewinn (OZ↓). OIL RIG. Radioaktive Zerfallsarten: Alpha (-4A/-2Z), Beta⁻ (=A/+1Z), Gamma (keine Änderung). Halbwertszeit: N(t) = N₀ × (½)^(t/t½).",
  ],
};
