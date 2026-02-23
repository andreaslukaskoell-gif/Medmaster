import type { Chapter } from "./types";

export const optikChapter: Chapter = {
  id: "optik",
  subject: "physik",
  title: "Optik & Wellen",
  subtitle: "Reflexion, Brechung, Linsen, Wellen & Doppler-Effekt",
  icon: "🔭",
  chapterNumber: "Kapitel 3/3",
  readingTime: "~40 Minuten",
  level: "Kernstoff",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die physikalischen Grundlagen von Wellen und Optik, die für den MedAT essenziell sind. Von der Wellenphysik über Reflexion, Brechung und Totalreflexion bis hin zu Linsen, dem menschlichen Auge, dem Doppler-Effekt und den Grundlagen der Kernphysik werden alle prüfungsrelevanten Themen systematisch aufbereitet. Ein besonderer Fokus liegt auf dem Snellius'schen Brechungsgesetz, der Linsengleichung, den Fehlsichtigkeiten des Auges und der medizinischen Anwendung des Doppler-Effekts — diese Themen werden im MedAT besonders häufig geprüft.",

  learningObjectives: [
    "Transversal- und Longitudinalwellen unterscheiden",
    "Reflexions- und Brechungsgesetz anwenden",
    "Linsengleichung und Brechkraft berechnen",
    "Totalreflexion und deren Bedingungen erklären",
    "Den Doppler-Effekt und seine medizinische Anwendung beschreiben",
  ],

  sections: [
    // ----------------------------------------------------------------
    // SECTION 1: Wellenphysik
    // ----------------------------------------------------------------
    {
      heading: "Wellenphysik",
      content: `Eine <strong>Welle</strong> ist die räumliche Ausbreitung einer Schwingung. Dabei wird Energie transportiert, aber keine Materie — die Teilchen des Mediums schwingen lediglich um ihre Ruhelage. Man unterscheidet zwei grundlegende Wellentypen:

<strong>Transversalwelle</strong>
Bei einer Transversalwelle steht die Schwingungsrichtung <strong>senkrecht (⊥)</strong> zur Ausbreitungsrichtung. Beispiele:
• <strong>Licht</strong> (elektromagnetische Welle) — breitet sich auch im Vakuum aus
• <strong>Seilwelle</strong> — das Seil schwingt auf und ab, die Welle wandert horizontal
• <strong>Wasserwelle</strong> (an der Oberfläche, vereinfacht)
Transversalwellen können <strong>polarisiert</strong> werden, d. h. die Schwingung kann auf eine Ebene beschränkt werden (z. B. durch Polarisationsfilter).

<strong>Longitudinalwelle</strong>
Bei einer Longitudinalwelle verläuft die Schwingungsrichtung <strong>parallel (‖)</strong> zur Ausbreitungsrichtung. Es entstehen periodische Verdichtungen und Verdünnungen des Mediums. Beispiele:
• <strong>Schallwelle</strong> — Luftmoleküle werden abwechselnd komprimiert und verdünnt
• <strong>Erdbebenwelle</strong> (P-Welle)
Longitudinalwellen benötigen <strong>immer ein Medium</strong> (Schall breitet sich nicht im Vakuum aus!) und sind <strong>nicht polarisierbar</strong>.

<strong>Welleneigenschaften</strong>

• <strong>Amplitude A</strong> — maximale Auslenkung aus der Ruhelage. Bestimmt bei Schall die Lautstärke, bei Licht die Helligkeit.
• <strong>Frequenz f</strong> [Hz = 1/s] — Anzahl der Schwingungen pro Sekunde. Bestimmt bei Schall die Tonhöhe, bei Licht die Farbe.
• <strong>Wellenlänge λ</strong> [m] — Abstand zwischen zwei benachbarten Punkten gleicher Phase (z. B. von Wellenberg zu Wellenberg).
• <strong>Geschwindigkeit v</strong> [m/s] — Ausbreitungsgeschwindigkeit der Welle.
• <strong>Periode T</strong> [s] — Dauer einer vollständigen Schwingung: T = 1/f.

<strong>Grundgleichung der Wellenphysik:</strong>
<strong>v = λ · f</strong>
Die Geschwindigkeit einer Welle ist das Produkt aus Wellenlänge und Frequenz.

<strong>Wichtige Geschwindigkeiten:</strong>
• Schall in Luft (20 °C): <strong>~343 m/s</strong>
• Schall in Wasser: ~1480 m/s
• Schall in Stahl: ~5900 m/s
• Licht im Vakuum: <strong>c = 3 × 10⁸ m/s</strong> (Naturkonstante, maximale Geschwindigkeit)

<strong>Interferenz</strong>
Wenn zwei Wellen aufeinandertreffen, überlagern sie sich (Superpositionsprinzip):
• <strong>Konstruktive Interferenz</strong>: Die Wellen sind in Phase (Gangunterschied = n·λ) → die Amplituden addieren sich → <strong>Verstärkung</strong>
• <strong>Destruktive Interferenz</strong>: Die Wellen sind gegenphasig (Gangunterschied = (n+½)·λ) → die Amplituden löschen sich aus → <strong>Auslöschung</strong>
Anwendung: Noise-Cancelling-Kopfhörer nutzen destruktive Interferenz.

<strong>Beugung</strong>
Wellen können sich um Hindernisse oder durch Öffnungen ausbreiten — dies nennt man <strong>Beugung (Diffraktion)</strong>. Beugung ist besonders ausgeprägt, wenn die Größe der Öffnung in der Größenordnung der Wellenlänge liegt (Öffnung ≈ λ). Daher wird Schall (λ ~ cm bis m) leicht um Ecken gebeugt, Licht (λ ~ nm) hingegen kaum.

<strong>Stehende Wellen und Resonanz</strong>
Wenn eine Welle an einem festen Ende reflektiert wird und sich mit der einlaufenden Welle überlagert, entsteht eine <strong>stehende Welle</strong>. Dabei gibt es:
• <strong>Knoten</strong> — Punkte, die nicht schwingen (Amplitude = 0)
• <strong>Bäuche</strong> — Punkte maximaler Schwingung
<strong>Resonanz</strong> tritt auf, wenn die Erregerfrequenz mit einer Eigenfrequenz des schwingenden Systems übereinstimmt → maximale Energieübertragung, maximale Amplitude. Beispiel: Glas zerspringt bei bestimmter Tonfrequenz.`,
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Transversalwelle", "Longitudinalwelle"],
        rows: [
          ["Schwingungsrichtung", "Senkrecht (⊥) zur Ausbreitung", "Parallel (‖) zur Ausbreitung"],
          ["Beispiel", "Licht, Seilwelle, Wasserwelle", "Schall, Erdbebenwelle (P-Welle)"],
          ["Medium nötig?", "Nicht immer (Licht: nein)", "Ja, immer"],
          ["Polarisierbar?", "Ja", "Nein"],
        ],
      },
      merke:
        "v = λ·f — Geschwindigkeit = Wellenlänge × Frequenz. Schall in Luft: <strong>~343 m/s</strong>. Licht im Vakuum: <strong>3 × 10⁸ m/s</strong>. Schall braucht ein Medium, Licht nicht!",
    },

    // ----------------------------------------------------------------
    // SECTION 2: Optik: Reflexion & Brechung
    // ----------------------------------------------------------------
    {
      heading: "Optik: Reflexion & Brechung",
      content: `Die Optik beschreibt das Verhalten von Licht. Licht ist eine <strong>elektromagnetische Transversalwelle</strong>, die sich im Vakuum mit der Lichtgeschwindigkeit c = 3 × 10⁸ m/s ausbreitet. Sichtbares Licht hat Wellenlängen von ca. 380 nm (Violett) bis 780 nm (Rot).

<strong>Reflexion</strong>

Trifft Licht auf eine Grenzfläche zwischen zwei Medien, wird ein Teil des Lichts zurückgeworfen — das ist die <strong>Reflexion</strong>.

<strong>Reflexionsgesetz:</strong>
Der <strong>Einfallswinkel α</strong> ist gleich dem <strong>Ausfallswinkel β</strong>:
<strong>α = β</strong>
Beide Winkel werden zum <strong>Einfallslot</strong> (Senkrechte auf die Oberfläche) gemessen. Einfallender Strahl, Lot und reflektierter Strahl liegen in einer Ebene.

Arten der Reflexion:
• <strong>Spiegelreflexion</strong> (glatte Oberfläche): paralleles Licht wird parallel reflektiert → scharfes Spiegelbild
• <strong>Diffuse Reflexion</strong> (raue Oberfläche): Licht wird in alle Richtungen gestreut → kein Spiegelbild, aber Gegenstand wird sichtbar

<strong>Brechung (Refraktion)</strong>

Wenn Licht von einem Medium in ein anderes übergeht (z. B. von Luft in Wasser), ändert sich seine <strong>Geschwindigkeit</strong> — und dadurch auch seine <strong>Richtung</strong>. Dieses Phänomen heißt <strong>Brechung</strong>.

<strong>Brechungsindex n:</strong>
Der Brechungsindex gibt an, um welchen Faktor Licht in einem Medium langsamer ist als im Vakuum:
n = c / v_Medium
• Vakuum: n = 1,00 (Definition)
• Luft: n ≈ 1,00 (wird oft als 1 angenommen)
• Wasser: n = 1,33
• Glas: n ≈ 1,5 (je nach Glassorte 1,4–1,9)
• Diamant: n = 2,42

Je größer der Brechungsindex, desto <strong>optisch dichter</strong> ist das Medium und desto langsamer bewegt sich das Licht darin.

<strong>Snellius'sches Brechungsgesetz:</strong>
<strong>n₁ · sin(α) = n₂ · sin(β)</strong>
• n₁ = Brechungsindex des ersten Mediums
• n₂ = Brechungsindex des zweiten Mediums
• α = Einfallswinkel (zum Lot)
• β = Brechungswinkel (zum Lot)

<strong>Richtung der Brechung:</strong>
• Übergang in ein <strong>optisch dichteres</strong> Medium (n₂ > n₁): Licht wird <strong>zum Lot hin</strong> gebrochen (β < α)
• Übergang in ein <strong>optisch dünneres</strong> Medium (n₂ < n₁): Licht wird <strong>vom Lot weg</strong> gebrochen (β > α)

<strong>Totalreflexion</strong>

Totalreflexion ist ein Spezialfall, der nur beim Übergang vom <strong>optisch dichteren ins dünnere</strong> Medium auftreten kann. Wenn der Einfallswinkel den <strong>Grenzwinkel α_grenz</strong> überschreitet, wird das gesamte Licht reflektiert — kein Licht tritt mehr ins zweite Medium über.

<strong>Grenzwinkel:</strong>
sin(α_grenz) = n₂ / n₁ (mit n₂ < n₁)

Beispiel: Übergang Wasser → Luft:
sin(α_grenz) = 1,00 / 1,33 = 0,752 → α_grenz ≈ 48,8°
Ab einem Einfallswinkel von ~49° tritt Totalreflexion auf.

<strong>Anwendungen der Totalreflexion:</strong>
• <strong>Glasfaserkabel</strong> (Lichtwellenleiter): Licht wird durch Totalreflexion im Glasfaserkern gehalten → Datenübertragung über große Entfernungen
• <strong>Umlenkprismen</strong> in Ferngläsern und Endoskopen
• <strong>Brillanz von Diamanten</strong>: Hoher Brechungsindex (n = 2,42) → kleiner Grenzwinkel → viel Totalreflexion → starkes Funkeln

<strong>Dispersion</strong>

Der Brechungsindex n ist wellenlängenabhängig — kurzwelliges Licht (Blau/Violett) wird stärker gebrochen als langwelliges Licht (Rot). Dieses Phänomen heißt <strong>Dispersion</strong>.

Anwendungen:
• <strong>Prisma</strong>: Weißes Licht wird in seine Spektralfarben aufgespalten (Rot – Orange – Gelb – Grün – Blau – Violett)
• <strong>Regenbogen</strong>: Sonnenlicht wird in Wassertropfen gebrochen, reflektiert und dispergiert → Farbspektrum am Himmel`,
      diagram: "lens-imaging",
      merke:
        "<strong>Zum Lot</strong> = ins dichtere Medium. <strong>Vom Lot weg</strong> = ins dünnere Medium. Totalreflexion nur beim Übergang <strong>dicht → dünn</strong>! Anwendung: Glasfaser.",
      altfrage:
        '"Totalreflexion tritt auf, wenn..." → Licht vom optisch <strong>dichteren</strong> ins <strong>dünnere</strong> Medium übergeht UND der Einfallswinkel den Grenzwinkel überschreitet.',
    },

    // ----------------------------------------------------------------
    // SECTION 3: Linsen & das Auge
    // ----------------------------------------------------------------
    {
      heading: "Linsen & das Auge",
      content: `Linsen sind transparente optische Elemente, die Licht durch Brechung ablenken. Man unterscheidet zwei Grundtypen:

<strong>Sammellinse (Konvexlinse)</strong>
• In der Mitte dicker als am Rand
• Bündelt parallel einfallendes Licht in einem Punkt — dem <strong>Brennpunkt F</strong>
• Erzeugt (je nach Gegenstandsweite) <strong>reelle oder virtülle Bilder</strong>
• Verwendung: Lupe, Brille bei Weitsichtigkeit, Kamera, Projektor

<strong>Zerstreuungslinse (Konkavlinse)</strong>
• In der Mitte dünner als am Rand
• Streut parallel einfallendes Licht — die Verlängerungen der gebrochenen Strahlen treffen sich im <strong>virtüllen Brennpunkt F</strong> (auf der Einfallsseite)
• Erzeugt immer ein <strong>virtülles, aufrechtes, verkleinertes Bild</strong>
• Verwendung: Brille bei Kurzsichtigkeit, Türspion

<strong>Linsengleichung (Dünne Linsen)</strong>

Die Beziehung zwischen Brennweite f, Gegenstandsweite g und Bildweite b wird durch die <strong>Linsengleichung</strong> beschrieben:

<strong>1/f = 1/g + 1/b</strong>

• f = Brennweite [m] — Abstand zwischen Linsenmitte und Brennpunkt
• g = Gegenstandsweite [m] — Abstand zwischen Gegenstand und Linsenmitte
• b = Bildweite [m] — Abstand zwischen Bild und Linsenmitte

Vorzeichenkonvention:
• Sammellinse: f > 0 (positiv)
• Zerstreuungslinse: f < 0 (negativ)
• Reelles Bild: b > 0
• Virtülles Bild: b < 0

<strong>Brechkraft D</strong>
<strong>D = 1/f</strong> [Einheit: Dioptrie, dpt]
• Sammellinse: D > 0 (positive Dioptrien)
• Zerstreuungslinse: D < 0 (negative Dioptrien)
• Je kürzer die Brennweite, desto stärker bricht die Linse das Licht

Beispiel: Eine Linse mit f = 0,5 m hat eine Brechkraft von D = 1/0,5 = 2 dpt.

<strong>Vergrößerung V</strong>
<strong>V = B/G = b/g</strong>
• B = Bildgröße, G = Gegenstandsgröße
• |V| > 1 → vergrößertes Bild
• |V| < 1 → verkleinertes Bild
• V > 0 → aufrechtes Bild
• V < 0 → umgekehrtes (invertiertes) Bild

<strong>Bildentstehung bei der Sammellinse — Abhängigkeit von g:</strong>
• g > 2f → reelles, verkleinertes, umgekehrtes Bild (zwischen f und 2f)
• g = 2f → reelles Bild in gleicher Größe, umgekehrt (bei b = 2f)
• f < g < 2f → reelles, vergrößertes, umgekehrtes Bild (b > 2f)
• g = f → kein Bild (parallele Strahlen, Bild im Unendlichen)
• g < f → virtülles, vergrößertes, aufrechtes Bild (Lupe!)

<strong>Lupe</strong>
Die Lupe ist eine Sammellinse, bei der der Gegenstand innerhalb der Brennweite liegt (g < f). Die Vergrößerung der Lupe berechnet sich als:
<strong>V = 25 cm / f</strong>
(25 cm = deutliche Sehweite des normalsichtigen Auges)

<strong>Das menschliche Auge als optisches System</strong>

Das Auge funktioniert wie eine Kamera mit zwei brechenden Elementen:
• <strong>Hornhaut (Cornea)</strong> — liefert ca. 2/3 der gesamten Brechkraft (~43 dpt)
• <strong>Augenlinse</strong> — liefert ca. 1/3 der Brechkraft (~19 dpt, variabel durch Akkommodation)
Gesamte Brechkraft des Auges: ~59 dpt (bei Fernakkommodation)

Das Bild entsteht auf der <strong>Retina (Netzhaut)</strong> — es ist reell, verkleinert und umgekehrt (das Gehirn dreht es wieder um).

<strong>Akkommodation</strong>
Die Fähigkeit des Auges, die Brechkraft der Linse zu verändern und so auf unterschiedliche Entfernungen scharf zu stellen:
• <strong>Nahakkommodation</strong>: Ziliarmuskel kontrahiert → Zonulafasern entspannen → Linse wird kugeliger (stärker gekrümmt) → Brechkraft steigt
• <strong>Fernakkommodation</strong>: Ziliarmuskel entspannt → Zonulafasern straff → Linse wird flacher → Brechkraft sinkt

<strong>Fehlsichtigkeiten</strong>

<strong>Kurzsichtigkeit (Myopie):</strong>
• Augapfel ist <strong>zu lang</strong> (oder Brechkraft zu stark)
• Bild entsteht <strong>vor</strong> der Retina
• Ferne Gegenstände erscheinen unscharf
• Korrektur: <strong>Zerstreuungslinse</strong> (Konkavlinse) mit <strong>negativen Dioptrien</strong>
• Beispiel: -3,0 dpt Brille

<strong>Weitsichtigkeit (Hyperopie):</strong>
• Augapfel ist <strong>zu kurz</strong> (oder Brechkraft zu schwach)
• Bild entsteht <strong>hinter</strong> der Retina
• Nahe Gegenstände erscheinen unscharf
• Korrektur: <strong>Sammellinse</strong> (Konvexlinse) mit <strong>positiven Dioptrien</strong>
• Beispiel: +2,5 dpt Brille

<strong>Alterssichtigkeit (Presbyopie):</strong>
• Die Elastizität der Augenlinse nimmt mit dem Alter ab → Nahakkommodation eingeschränkt
• Korrektur: Lesebrille (Sammellinse) oder Gleitsichtbrille`,
      merke:
        "1/f = 1/g + 1/b. <strong>Kurzsichtig</strong> = Augapfel zu <strong>lang</strong> → <strong>Zerstreuungslinse</strong> (negative Dioptrien). <strong>Weitsichtig</strong> = zu <strong>kurz</strong> → <strong>Sammellinse</strong> (positive Dioptrien).",
      klinik:
        "LASIK: Laserchirurgische Korrektur der Hornhautkrümmung → Änderung der Brechkraft. Grauer Star (Katarakt): Trübung der Augenlinse → operative Linsenersetzung.",
    },

    // ----------------------------------------------------------------
    // SECTION 4: Doppler-Effekt & Kernphysik
    // ----------------------------------------------------------------
    {
      heading: "Doppler-Effekt & Kernphysik",
      content: `<strong>Doppler-Effekt</strong>

Der Doppler-Effekt beschreibt die Änderung der wahrgenommenen <strong>Frequenz</strong> (und damit der Wellenlänge) einer Welle, wenn sich Quelle und Beobachter relativ zueinander bewegen.

<strong>Quelle nähert sich dem Beobachter:</strong>
• Die Wellenfronten werden <strong>gestaucht</strong>
• Die Wellenlänge wird <strong>kürzer</strong>
• Die wahrgenommene Frequenz wird <strong>höher</strong>
• Bei Licht: <strong>Blauverschiebung</strong> (zu kürzeren Wellenlängen)
• Alltagsbeispiel: Rettungswagen fährt auf einen zu → Sirene klingt höher

<strong>Quelle entfernt sich vom Beobachter:</strong>
• Die Wellenfronten werden <strong>gedehnt</strong>
• Die Wellenlänge wird <strong>länger</strong>
• Die wahrgenommene Frequenz wird <strong>niedriger</strong>
• Bei Licht: <strong>Rotverschiebung</strong> (zu längeren Wellenlängen)
• Alltagsbeispiel: Rettungswagen fährt weg → Sirene klingt tiefer

<strong>Doppler-Formel (vereinfacht, Quelle bewegt sich):</strong>
f_beobachtet = f_quelle × v_Schall / (v_Schall ∓ v_Quelle)
• Minus (−) wenn Quelle sich nähert → f steigt
• Plus (+) wenn Quelle sich entfernt → f sinkt

<strong>Medizinische Anwendung: Ultraschall-Doppler</strong>
Der Doppler-Effekt wird in der Medizin genutzt, um die <strong>Blutflussgeschwindigkeit</strong> zu messen:
• Ein Ultraschallkopf sendet Schallwellen aus, die an den bewegten Erythrozyten reflektiert werden
• Die reflektierten Wellen haben eine veränderte Frequenz (Doppler-Verschiebung)
• Aus der Frequenzänderung wird die Geschwindigkeit des Blutflusses berechnet
• <strong>Farbkodierte Doppler-Sonographie</strong>: Rot = Fluss zum Schallkopf hin, Blau = Fluss vom Schallkopf weg
• Anwendungen: Gefäßdiagnostik (Stenosen, Thrombosen), Echokardiographie, pränatale Diagnostik

<strong>Kernphysik — Radioaktivität</strong>

Radioaktivität ist der spontane Zerfall instabiler Atomkerne unter Aussendung von Strahlung. Es gibt drei Hauptzerfallsarten:

<strong>1. Alpha-Zerfall (α)</strong>
• Aussendung eines <strong>Helium-4-Kerns</strong> (⁴₂He = 2 Protonen + 2 Neutronen)
• Massenzahl: <strong>A sinkt um 4</strong>
• Ordnungszahl: <strong>Z sinkt um 2</strong>
• Beispiel: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He
• Reichweite: wenige cm in Luft, Blatt Papier reicht als Abschirmung
• Hohe Ionisierungsdichte → bei Inkorporation sehr gefährlich

<strong>2. Beta-minus-Zerfall (β⁻)</strong>
• Ein Neutron wandelt sich in ein Proton um: n → p⁺ + e⁻ + ν̄ₑ
• Massenzahl: <strong>A bleibt gleich</strong>
• Ordnungszahl: <strong>Z steigt um 1</strong>
• Beispiel: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ
• Reichweite: einige Meter in Luft, Aluminiumschicht als Abschirmung

<strong>3. Gamma-Strahlung (γ)</strong>
• Hochenergetische <strong>elektromagnetische Strahlung</strong> (Photonen)
• Tritt oft begleitend nach α- oder β-Zerfall auf
• <strong>Keine Änderung</strong> von Massenzahl oder Ordnungszahl
• Reichweite: sehr hoch, Abschirmung durch dicke Blei- oder Betonschichten

<strong>Halbwertszeit (t½)</strong>

Die Halbwertszeit ist die Zeit, nach der die Hälfte der radioaktiven Kerne zerfallen ist.

<strong>Zerfallsgesetz:</strong>
<strong>N(t) = N₀ · (½)^(t/t½)</strong>
• N(t) = Anzahl der noch vorhandenen Kerne zum Zeitpunkt t
• N₀ = Anfangsanzahl der Kerne
• t½ = Halbwertszeit

Rechenbeispiel: Von 1000 radioaktiven Kernen mit t½ = 2 Stunden sind nach 6 Stunden (= 3 Halbwertszeiten) noch übrig:
N = 1000 · (½)³ = 1000 · 1/8 = <strong>125 Kerne</strong>

<strong>Kernspaltung und Kernfusion</strong>

<strong>Kernspaltung:</strong>
• Schwere Atomkerne (z. B. Uran-235) werden durch Neutronenbeschuss in leichtere Kerne gespalten
• Dabei werden Energie und weitere Neutronen freigesetzt → <strong>Kettenreaktion</strong> möglich
• Anwendung: Kernkraftwerke, Atombombe

<strong>Kernfusion:</strong>
• Leichte Atomkerne (z. B. Wasserstoff-Isotope Deuterium und Tritium) verschmelzen zu schwereren Kernen
• Setzt enorm viel Energie frei (Massendefekt: E = mc²)
• Energiequelle der <strong>Sonne</strong> und aller Sterne: 4 ¹H → ⁴He + Energie
• Auf der Erde: Fusionsforschung (z. B. ITER) — extrem hohe Temperaturen (~100 Mio. °C) nötig

<strong>Medizinisch wichtige Strahlung:</strong>
• <strong>Röntgenstrahlung</strong>: Elektromagnetische Strahlung mit kurzer Wellenlänge → Durchdringung von Gewebe → Bildgebung (konventionelles Röntgen, CT)
• <strong>Nuklearmedizin</strong>: Technetium-99m (SPECT), Fluor-18 (PET), Iod-131 (Schilddrüsentherapie)
• <strong>Strahlentherapie</strong>: Gezielte Zerstörung von Tumorzellen durch ionisierende Strahlung`,
      merke:
        "Doppler: Quelle <strong>näher</strong> → <strong>höhere</strong> Frequenz (Blauverschiebung). Quelle <strong>weiter weg</strong> → <strong>niedrigere</strong> Frequenz (Rotverschiebung). Ultraschall-Doppler misst Blutfluss!",
      klinik:
        "Ultraschall-Doppler: Ermöglicht nicht-invasive Messung der Blutflussgeschwindigkeit. Farbkodiert: Rot = zum Schallkopf, Blau = vom Schallkopf weg. Wichtig für Gefäßdiagnostik.",
    },
  ],

  keyFacts: [
    {
      label: "Wellengleichung",
      value: "v = λ · f",
    },
    {
      label: "Schallgeschwindigkeit",
      value: "~343 m/s (in Luft bei 20 °C)",
    },
    {
      label: "Snellius'sches Gesetz",
      value: "n₁ · sin(α) = n₂ · sin(β)",
    },
    {
      label: "Totalreflexion",
      value: "Nur beim Übergang dicht → dünn, wenn α > α_grenz",
    },
    {
      label: "Linsengleichung",
      value: "1/f = 1/g + 1/b",
    },
    {
      label: "Brechkraft",
      value: "D = 1/f [Dioptrie, dpt]",
    },
    {
      label: "Kurzsichtig",
      value: "Augapfel zu lang → Zerstreuungslinse (negative dpt)",
    },
    {
      label: "Weitsichtig",
      value: "Augapfel zu kurz → Sammellinse (positive dpt)",
    },
    {
      label: "Doppler-Effekt",
      value: "Quelle näher = höhere Frequenz, weiter weg = niedrigere Frequenz",
    },
    {
      label: "Halbwertszeit",
      value: "N(t) = N₀ · (½)^(t/t½)",
    },
  ],

  selfTestQuestions: [
    {
      question: "Welches Gesetz beschreibt die Lichtbrechung?",
      options: ["Newton", "Ohm", "Snellius", "Kirchhoff", "Faraday"],
      correctIndex: 2,
      explanation:
        "Das Snellius'sche Brechungsgesetz: n₁ · sin(α) = n₂ · sin(β) beschreibt, wie Licht beim Übergang zwischen Medien gebrochen wird.",
    },
    {
      question: "Totalreflexion tritt auf beim Übergang von...",
      options: [
        "Dünn nach dicht",
        "Dicht nach dünn",
        "In jeder Richtung",
        "Nur im Vakuum",
        "Nur bei Schall",
      ],
      correctIndex: 1,
      explanation:
        "Totalreflexion nur beim Übergang vom optisch dichteren ins dünnere Medium, wenn der Einfallswinkel den Grenzwinkel überschreitet.",
    },
    {
      question: "Kurzsichtigkeit wird korrigiert mit...",
      options: ["Sammellinse", "Zerstreuungslinse", "Prisma", "Spiegel", "Kontaktlinse"],
      correctIndex: 1,
      explanation:
        "Kurzsichtigkeit: Augapfel zu lang, Bild vor der Retina. Korrektur: Zerstreuungslinse (negative Dioptrien) verschiebt den Brennpunkt nach hinten.",
    },
    {
      question: "Wenn sich eine Schallquelle nähert, wird die Frequenz...",
      options: ["Niedriger", "Höher", "Bleibt gleich", "Null", "Unendlich"],
      correctIndex: 1,
      explanation:
        "Doppler-Effekt: Nähert sich die Quelle, werden die Wellenfronten gestaucht → kürzere Wellenlänge → höhere Frequenz.",
    },
    {
      question: "Welche Welle braucht KEIN Medium?",
      options: ["Schallwelle", "Wasserwelle", "Lichtwelle", "Erdbebenwelle", "Seilwelle"],
      correctIndex: 2,
      explanation:
        "Licht (elektromagnetische Welle) kann sich auch im Vakuum ausbreiten. Schall, Wasser- und Seilwellen brauchen ein Medium.",
    },
  ],

  summary: [
    "Wellen transportieren Energie ohne Materietransport. Transversalwellen (Schwingung ⊥ Ausbreitung, z. B. Licht) sind polarisierbar; Longitudinalwellen (Schwingung ‖ Ausbreitung, z. B. Schall) benötigen immer ein Medium. Grundgleichung: v = λ · f.",
    "Reflexionsgesetz: α = β (zum Lot). Snellius'sches Brechungsgesetz: n₁ · sin(α) = n₂ · sin(β). Licht wird beim Eintritt in ein dichteres Medium zum Lot gebrochen. Totalreflexion nur von dicht nach dünn bei Überschreitung des Grenzwinkels.",
    "Linsengleichung: 1/f = 1/g + 1/b. Brechkraft D = 1/f [dpt]. Kurzsichtigkeit (Augapfel zu lang) → Zerstreuungslinse, Weitsichtigkeit (zu kurz) → Sammellinse. Lupe: V = 25 cm/f.",
    "Doppler-Effekt: Annäherung → höhere Frequenz (Blauverschiebung), Entfernung → niedrigere Frequenz (Rotverschiebung). Medizinisch: Ultraschall-Doppler zur Blutflussmessung. Radioaktivität: α (-4A/-2Z), β⁻ (=A/+1Z), γ (keine Änderung). Halbwertszeit: N(t) = N₀ · (½)^(t/t½).",
  ],
};
