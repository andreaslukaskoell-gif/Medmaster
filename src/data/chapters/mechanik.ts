import type { Chapter } from "./types";

export const mechanikChapter: Chapter = {
  id: "mechanik",
  subject: "physik",
  title: "Mechanik & Wärmelehre",
  subtitle: "Kinematik, Kräfte, Energie, Impuls & Thermodynamik",
  icon: "⚙️",
  chapterNumber: "Kapitel 1/3",
  readingTime: "~50 Minuten",
  level: "Kernstoff",
  frequency: "Sehr häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die physikalischen Grundlagen der Mechanik und Wärmelehre — von der Beschreibung von Bewegungen (Kinematik) über Kräfte und Newton'sche Gesetze bis hin zu Energie, Impuls und Thermodynamik. Mechanik und Wärmelehre gehören zu den am häufigsten geprüften Themen im MedAT-BMS Physik-Teil und erfordern sowohl konzeptionelles Verständnis als auch sicheres Rechnen mit den Grundformeln.",
  learningObjectives: [
    "Gleichförmige und beschleunigte Bewegung berechnen",
    "Die drei Newton'schen Gesetze anwenden",
    "Energieerhaltung und Impulserhaltung bei Stößen nutzen",
    "Arbeit, Leistung und Energie berechnen",
    "Wärmeenergie mit Q = m·c·ΔT berechnen",
    "Die Hauptsätze der Thermodynamik erklären",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. Kinematik
    // ──────────────────────────────────────────────
    {
      heading: "Kinematik",
      content:
        "Die Kinematik beschreibt Bewegungen rein geometrisch — ohne nach den Ursachen (Kräften) zu fragen. Man unterscheidet verschiedene Bewegungsarten anhand des Geschwindigkeits- und Beschleunigungsverlaufs.\n\n" +
        "<strong>Gleichförmige Bewegung (a = 0):</strong>\n" +
        "Ein Körper bewegt sich mit konstanter Geschwindigkeit v auf einer geraden Bahn. Es wirkt keine resultierende Kraft (oder die Kräfte heben sich auf).\n" +
        "• Geschwindigkeit: v = s / t\n" +
        "• Strecke: s = v · t\n" +
        "• Im v-t-Diagramm: horizontale Gerade (v = const). Im s-t-Diagramm: Gerade mit Steigung v (linear ansteigend). Die Fläche unter der v-t-Kurve entspricht der zurückgelegten Strecke.\n\n" +
        "<strong>Gleichmäßig beschleunigte Bewegung (a = const):</strong>\n" +
        "Die Geschwindigkeit ändert sich gleichmäßig — der Körper wird schneller (a > 0) oder langsamer (a < 0, Bremsen).\n" +
        "• Beschleunigung: a = Δv / Δt\n" +
        "• Geschwindigkeit: v(t) = v₀ + a · t\n" +
        "• Strecke: s(t) = v₀ · t + ½ · a · t²\n" +
        "• Ohne Anfangsgeschwindigkeit (v₀ = 0): s = ½ · a · t²\n" +
        "• Zusammenhang ohne Zeit: v² = v₀² + 2 · a · s\n" +
        "• Im v-t-Diagramm: Gerade mit Steigung a. Im s-t-Diagramm: Parabel (quadratischer Anstieg).\n\n" +
        "<strong>Freier Fall (ohne Luftwiderstand):</strong>\n" +
        "Ein Spezialfall der gleichmäßig beschleunigten Bewegung mit a = g ≈ 9,81 m/s² ≈ 10 m/s² (Erdbeschleunigung). Alle Körper fallen gleich schnell — unabhängig von ihrer Masse (Galilei).\n" +
        "• Geschwindigkeit: v = g · t\n" +
        "• Fallstrecke: s = ½ · g · t²\n" +
        "• Geschwindigkeit aus Höhe: v = √(2 · g · h)\n" +
        "• Zahlenwerte (mit g ≈ 10 m/s²): Nach 1 s: v = 10 m/s, s = 5 m. Nach 2 s: v = 20 m/s, s = 20 m. Nach 3 s: v = 30 m/s, s = 45 m.\n\n" +
        "<strong>Horizontaler Wurf:</strong>\n" +
        "Überlagerung (Superposition) zweier unabhängiger Bewegungen: horizontal gleichförmig (vₓ = v₀ = const, x = v₀ · t) und vertikal freier Fall (vᵧ = g · t, y = ½ · g · t²). Die Bahnkurve ist eine Parabel. Die Auftreffgeschwindigkeit ergibt sich aus der vektoriellen Addition: v = √(vₓ² + vᵧ²).\n\n" +
        "<strong>Senkrechter Wurf nach oben:</strong>\n" +
        "Der Körper wird mit v₀ senkrecht nach oben geworfen. Die Erdbeschleunigung g bremst ihn.\n" +
        "• Geschwindigkeit: v(t) = v₀ − g · t\n" +
        "• Steigzeit (v = 0): t_max = v₀ / g\n" +
        "• Maximale Höhe: h_max = v₀² / (2 · g)\n" +
        "• Die Flugzeit (hin und zurück) ist doppelt so lang wie die Steigzeit: t_ges = 2 · v₀ / g.\n" +
        "• Beim Rückfall am Abwurfpunkt hat der Körper wieder die Geschwindigkeit v₀ (Betrag).",
      merke:
        "Freier Fall: Nach <strong>1 s</strong>: v = 10 m/s, s = 5 m. Nach <strong>2 s</strong>: v = 20 m/s, s = 20 m. Nach <strong>3 s</strong>: v = 30 m/s, s = 45 m. Strecke wächst <strong>quadratisch</strong>!",
      altfrage:
        "\"Ein Stein fällt 3 Sekunden. Welche Strecke legt er zurück?\" → s = ½gt² = ½ × 10 × 9 = <strong>45 m</strong>. Geschwindigkeit: v = gt = 30 m/s.",
    },

    // ──────────────────────────────────────────────
    // 2. Kräfte & Newton'sche Gesetze
    // ──────────────────────────────────────────────
    {
      heading: "Kräfte & Newton'sche Gesetze",
      content:
        "Die Dynamik beschreibt die Ursachen von Bewegungen: Kräfte. Isaac Newton formulierte drei fundamentale Gesetze, die das Fundament der klassischen Mechanik bilden.\n\n" +
        "<strong>1. Newton'sches Gesetz — Trägheitsprinzip:</strong>\n" +
        "Ein Körper verharrt im Zustand der Ruhe oder der gleichförmig geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn wirkt. Trägheit ist die Eigenschaft eines Körpers, seinen Bewegungszustand beizubehalten. Die Masse ist ein Maß für die Trägheit.\n\n" +
        "<strong>2. Newton'sches Gesetz — Aktionsprinzip (Grundgleichung):</strong>\n" +
        "Die Beschleunigung eines Körpers ist proportional zur resultierenden Kraft und umgekehrt proportional zur Masse:\n" +
        "F = m · a\n" +
        "Einheit: 1 Newton = 1 N = 1 kg · m/s². Eine Kraft von 1 N beschleunigt eine Masse von 1 kg mit 1 m/s².\n\n" +
        "<strong>3. Newton'sches Gesetz — Wechselwirkungsprinzip (Actio = Reactio):</strong>\n" +
        "Übt ein Körper A eine Kraft auf Körper B aus (actio), so übt Körper B eine gleich große, aber entgegengesetzt gerichtete Kraft auf Körper A aus (reactio). Beide Kräfte greifen an verschiedenen Körpern an!\n\n" +
        "<strong>Wichtige Kräfte:</strong>\n\n" +
        "• <strong>Gewichtskraft:</strong> F_G = m · g (mit g ≈ 9,81 m/s² auf der Erdoberfläche). Wichtig: Gewicht ≠ Masse! Die Masse ist überall gleich, die Gewichtskraft hängt von g ab (auf dem Mond: g ≈ 1,6 m/s²).\n\n" +
        "• <strong>Reibungskraft:</strong> F_R = μ · F_N, wobei μ der Reibungskoeffizient und F_N die Normalkraft ist. Haftreibung (μ_H) > Gleitreibung (μ_G) > Rollreibung (μ_R). Reibung ist unabhängig von der Auflagefläche und der Geschwindigkeit (vereinfacht).\n\n" +
        "• <strong>Federkraft (Hooke'sches Gesetz):</strong> F = k · x, wobei k die Federkonstante [N/m] und x die Auslenkung aus der Ruhelage ist. Die Kraft ist proportional zur Auslenkung (lineares Verhalten im elastischen Bereich).\n\n" +
        "• <strong>Zentripetalkraft:</strong> F_Z = m · v² / r = m · ω² · r. Diese Kraft zeigt zum Mittelpunkt der Kreisbahn und hält den Körper auf der Bahn. Sie ist keine eigene Kraftart, sondern wird von anderen Kräften bereitgestellt (Gravitation, Seilkraft, Reibung etc.).\n\n" +
        "<strong>Schiefe Ebene:</strong>\n" +
        "Bei einem Körper auf einer geneigten Fläche (Neigungswinkel α) wird die Gewichtskraft in zwei Komponenten zerlegt:\n" +
        "• Hangabtriebskraft (parallel zur Ebene): F_H = m · g · sin(α)\n" +
        "• Normalkraft (senkrecht zur Ebene): F_N = m · g · cos(α)\n" +
        "Bei α = 0° (horizontal): F_H = 0, F_N = mg. Bei α = 90° (vertikal): F_H = mg, F_N = 0.\n\n" +
        "<strong>Arbeit und Leistung:</strong>\n" +
        "• Arbeit: W = F · s · cos(α) [Einheit: Joule, J = N·m = kg·m²/s²]. Arbeit wird nur verrichtet, wenn die Kraft eine Komponente in Bewegungsrichtung hat. Bei α = 90° (Kraft senkrecht zur Bewegung): W = 0.\n" +
        "• Leistung: P = W / t = F · v [Einheit: Watt, W = J/s]. Leistung ist die pro Zeiteinheit verrichtete Arbeit.",
      diagram: "newton-forces",
      merke:
        "F = m·a ist DIE Grundgleichung. <strong>Gewicht ≠ Masse</strong>: Gewichtskraft F_G = m·g hängt von g ab (Mond: g ≈ 1,6 m/s²). Schiefe Ebene: F_H = mg·sin(α), F_N = mg·cos(α).",
      klinik:
        "Biomechanik: Beim Gehen wirkt auf das Kniegelenk das 3-4fache des Körpergewichts. Bei Treppensteigen sogar das 6-8fache — relevant für Orthopädie und Gelenkprothesen.",
    },

    // ──────────────────────────────────────────────
    // 3. Energie & Arbeit
    // ──────────────────────────────────────────────
    {
      heading: "Energie & Arbeit",
      content:
        "Energie ist die Fähigkeit eines Systems, Arbeit zu verrichten. Sie kann weder erzeugt noch vernichtet werden — nur von einer Form in eine andere umgewandelt werden (Energieerhaltungssatz). In der Mechanik sind drei Energieformen zentral.\n\n" +
        "<strong>Kinetische Energie (Bewegungsenergie):</strong>\n" +
        "E_kin = ½ · m · v²\n" +
        "Die kinetische Energie hängt quadratisch von der Geschwindigkeit ab: Doppelte Geschwindigkeit → vierfache kinetische Energie. Das ist der Grund, warum der Bremsweg bei doppelter Geschwindigkeit viermal so lang ist (Bremsweg ∝ v²). Einheit: Joule [J].\n\n" +
        "<strong>Potentielle Energie (Lageenergie):</strong>\n" +
        "E_pot = m · g · h\n" +
        "Die potentielle Energie hängt von der Höhe h über einem frei wählbaren Referenzniveau ab. Sie ist proportional zur Masse und zur Höhe. Einheit: Joule [J].\n\n" +
        "<strong>Spannenergie (elastische Energie):</strong>\n" +
        "E_sp = ½ · k · x²\n" +
        "Die in einer Feder gespeicherte Energie bei Auslenkung x aus der Ruhelage. k ist die Federkonstante [N/m]. Einheit: Joule [J].\n\n" +
        "<strong>Energieerhaltungssatz:</strong>\n" +
        "In einem abgeschlossenen System (keine äußeren Kräfte, keine Reibung) bleibt die Gesamtenergie konstant:\n" +
        "E_ges = E_kin + E_pot + E_sp = const\n\n" +
        "Wichtigstes Beispiel — Freier Fall (ohne Reibung):\n" +
        "Am höchsten Punkt: E_pot = mgh, E_kin = 0.\n" +
        "Am tiefsten Punkt: E_pot = 0, E_kin = ½mv².\n" +
        "Energieerhaltung: mgh = ½mv² → v = √(2gh).\n" +
        "Die Masse kürzt sich heraus! Die Auftreffgeschwindigkeit ist <strong>unabhängig von der Masse</strong> des Körpers.\n\n" +
        "Weitere Beispiele:\n" +
        "• Pendel: Am höchsten Punkt maximale E_pot, minimale E_kin. Am tiefsten Punkt maximale E_kin, minimale E_pot. Ständige Umwandlung zwischen beiden Formen.\n" +
        "• Looping (Achterbahn): Am höchsten Punkt des Loopings muss E_kin > 0 sein, damit der Wagen nicht herunterfällt.\n\n" +
        "<strong>Wirkungsgrad:</strong>\n" +
        "η = E_nutz / E_zu = P_nutz / P_zu\n" +
        "Der Wirkungsgrad gibt an, welcher Anteil der zugeführten Energie tatsächlich in nutzbare Energie umgewandelt wird. η liegt immer zwischen 0 und 1 (bzw. 0% und 100%). Die Differenz geht als Wärme (Reibung) verloren.",
      merke:
        "Energieerhaltung: mgh = ½mv² → v = √(2gh). Geschwindigkeit am Boden ist <strong>unabhängig von der Masse</strong>! Eine Feder und ein Stein fallen gleich schnell (ohne Luftwiderstand).",
    },

    // ──────────────────────────────────────────────
    // 4. Impuls & Stöße
    // ──────────────────────────────────────────────
    {
      heading: "Impuls & Stöße",
      content:
        "Der Impuls ist eine fundamentale Erhaltungsgröße der Mechanik und spielt eine zentrale Rolle bei der Beschreibung von Stoßvorgängen.\n\n" +
        "<strong>Impuls:</strong>\n" +
        "p = m · v\n" +
        "Der Impuls ist das Produkt aus Masse und Geschwindigkeit. Er ist eine Vektorgröße (hat Richtung!). Einheit: kg·m/s.\n\n" +
        "<strong>Kraft als Impulsänderung:</strong>\n" +
        "F = Δp / Δt = (m · Δv) / Δt = m · a\n" +
        "Dies ist die allgemeinere Form des 2. Newton'schen Gesetzes. Eine Kraft bewirkt eine zeitliche Änderung des Impulses. Der Kraftstoß F · Δt = Δp gibt an, wie stark sich der Impuls ändert.\n\n" +
        "<strong>Impulserhaltungssatz:</strong>\n" +
        "In einem abgeschlossenen System (keine äußeren Kräfte) bleibt der Gesamtimpuls erhalten:\n" +
        "p_vorher = p_nachher\n" +
        "m₁ · v₁ + m₂ · v₂ = m₁ · v₁' + m₂ · v₂'\n" +
        "Der Impuls ist bei <strong>allen</strong> Stoßarten erhalten — unabhängig davon, ob der Stoß elastisch oder inelastisch ist.\n\n" +
        "<strong>Elastischer Stoß:</strong>\n" +
        "Sowohl Impuls als auch kinetische Energie sind erhalten. Keine bleibende Verformung, keine Wärmeentwicklung. Beispiel: Billardkugeln (näherungsweise), Atome/Moleküle.\n" +
        "Spezialfall: Gleiche Massen (m₁ = m₂) — die Geschwindigkeiten werden getauscht: Kugel 1 bleibt stehen, Kugel 2 übernimmt die Geschwindigkeit von Kugel 1 (Newton-Pendel).\n\n" +
        "<strong>Inelastischer Stoß:</strong>\n" +
        "Der Impuls ist erhalten, aber ein Teil der kinetischen Energie wird in Wärme, Verformungsenergie oder Schall umgewandelt. E_kin vorher > E_kin nachher. Beispiel: Die meisten realen Stöße (Autounfall, Ballprall).\n\n" +
        "<strong>Perfekt inelastischer Stoß:</strong>\n" +
        "Beide Körper verschmelzen nach dem Stoß und bewegen sich gemeinsam weiter. Maximaler Verlust an kinetischer Energie (aber Impuls bleibt erhalten!).\n" +
        "m₁ · v₁ + m₂ · v₂ = (m₁ + m₂) · v'\n" +
        "v' = (m₁ · v₁ + m₂ · v₂) / (m₁ + m₂)\n" +
        "Beispiel: Zwei Züge koppeln aneinander, Knetmasse-Kollision.",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Elastischer Stoß", "Inelastischer Stoß", "Perfekt inelastisch"],
        rows: [
          ["Impuls", "Erhalten", "Erhalten", "Erhalten"],
          ["Kin. Energie", "Erhalten", "Teilweise verloren", "Maximal verloren"],
          ["Verformung", "Keine (reversibel)", "Teilweise bleibend", "Maximal (Körper verschmelzen)"],
          ["Beispiel", "Billardkugeln, Newton-Pendel", "Autounfall (teilelastisch)", "Knetmasse, Kupplung von Zügen"],
        ],
      },
      merke:
        "Impuls ist <strong>IMMER erhalten</strong> (in abgeschlossenem System). Kinetische Energie nur beim <strong>elastischen Stoß</strong>. Perfekt inelastisch: Körper kleben zusammen → maximaler Energieverlust.",
    },

    // ──────────────────────────────────────────────
    // 5. Wärmelehre & Thermodynamik
    // ──────────────────────────────────────────────
    {
      heading: "Wärmelehre & Thermodynamik",
      content:
        "Die Wärmelehre (Thermodynamik) beschreibt die Zusammenhänge zwischen Wärme, Temperatur und Energie. Sie hat fundamentale Bedeutung für Medizin (Körpertemperatur, Fieber, Kühlung) und Naturwissenschaft.\n\n" +
        "<strong>Temperatur und Temperaturskalen:</strong>\n" +
        "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes.\n" +
        "• Celsius-Skala: 0°C = Gefrierpunkt von Wasser, 100°C = Siedepunkt (bei 1 atm)\n" +
        "• Kelvin-Skala: K = °C + 273,15. Die Kelvin-Skala beginnt beim absoluten Nullpunkt (0 K = −273,15°C). Bei 0 K ist die Teilchenbewegung theoretisch minimal (Nullpunktsenergie). Temperaturdifferenzen sind in K und °C gleich groß: ΔT = 1 K = 1°C.\n" +
        "• Fahrenheit (selten im MedAT): °F = °C × 9/5 + 32.\n\n" +
        "<strong>Wärmeenergie:</strong>\n" +
        "Q = m · c · ΔT\n" +
        "Q = zugeführte/abgegebene Wärmemenge [J oder kJ]\n" +
        "m = Masse [kg]\n" +
        "c = spezifische Wärmekapazität [J/(kg·K) oder kJ/(kg·K)]\n" +
        "ΔT = Temperaturdifferenz [K oder °C]\n\n" +
        "Die spezifische Wärmekapazität c gibt an, wie viel Energie benötigt wird, um 1 kg eines Stoffes um 1 K zu erwärmen. Wasser hat mit c = 4,18 kJ/(kg·K) eine besonders hohe Wärmekapazität — das macht Wasser zu einem hervorragenden Wärmespeicher und erklärt das milde Klima an Küsten.\n\n" +
        "<strong>Aggregatzustände und Phasenübergänge:</strong>\n" +
        "• Fest ↔ Flüssig: Schmelzen (Energiezufuhr) / Erstarren (Energieabgabe). Schmelzwärme Q_s = m · L_s.\n" +
        "• Flüssig ↔ Gasförmig: Verdampfen (Energiezufuhr) / Kondensieren (Energieabgabe). Verdampfungswärme Q_v = m · L_v.\n" +
        "• Fest ↔ Gasförmig: Sublimieren (Energiezufuhr) / Resublimieren (Energieabgabe).\n" +
        "Während eines Phasenübergangs bleibt die Temperatur konstant — die zugeführte Energie wird für die Änderung des Aggregatzustands verwendet (Umwandlungswärme), nicht für die Temperaturerhöhung.\n\n" +
        "<strong>Wärmeübertragung — drei Mechanismen:</strong>\n" +
        "• Wärmeleitung: Energieübertragung durch direkten Kontakt (Teilchenschwingungen). Benötigt ein Medium. Beispiel: Metalllöffel in heißem Tee wird warm. Gute Leiter: Metalle. Schlechte Leiter (Isolatoren): Luft, Styropor.\n" +
        "• Konvektion (Wärmeströmung): Energieübertragung durch Strömung eines Fluids (Flüssigkeit oder Gas). Warme Flüssigkeit/Luft steigt auf (geringere Dichte), kalte sinkt ab → Konvektionszelle. Beispiel: Heizung erwärmt Raumluft, Golfstrom.\n" +
        "• Wärmestrahlung: Energieübertragung durch elektromagnetische Strahlung (Infrarotstrahlung). Benötigt kein Medium — funktioniert auch im Vakuum. Beispiel: Sonnenstrahlung erwärmt die Erde, Wärmebildkamera.\n\n" +
        "<strong>Hauptsätze der Thermodynamik:</strong>\n\n" +
        "• <strong>0. Hauptsatz:</strong> Wenn System A im thermischen Gleichgewicht mit System B ist, und System B im thermischen Gleichgewicht mit System C, dann sind auch A und C im Gleichgewicht. (Grundlage der Temperaturmessung mit Thermometern.)\n\n" +
        "• <strong>1. Hauptsatz (Energieerhaltung):</strong> ΔU = Q + W. Die Änderung der inneren Energie ΔU eines Systems ist gleich der zugeführten Wärme Q plus der am System verrichteten Arbeit W. Energie kann nicht erzeugt oder vernichtet werden — ein Perpetuum mobile 1. Art ist unmöglich.\n\n" +
        "• <strong>2. Hauptsatz (Entropiesatz):</strong> In einem abgeschlossenen System nimmt die Entropie (Maß für die Unordnung) niemals ab. Wärme fließt spontan immer von warm nach kalt, nie umgekehrt. Ein Perpetuum mobile 2. Art (vollständige Umwandlung von Wärme in Arbeit) ist unmöglich. Der 2. Hauptsatz definiert die Richtung natürlicher Prozesse (Zeitpfeil).\n\n" +
        "• <strong>3. Hauptsatz:</strong> Der absolute Nullpunkt (0 K) kann nicht in endlich vielen Schritten erreicht werden.",
      vergleichsTabelle: {
        headers: ["Übertragung", "Mechanismus", "Medium nötig?", "Beispiel"],
        rows: [
          ["Wärmeleitung", "Kontakt (Teilchenschwingungen)", "Ja", "Metalllöffel in heißem Tee"],
          ["Konvektion", "Strömung eines Fluids", "Ja (Flüssigkeit/Gas)", "Heizung erwärmt Raumluft, Golfstrom"],
          ["Wärmestrahlung", "Elektromagnetische Strahlung (IR)", "Nein (auch im Vakuum)", "Sonnenstrahlung, Wärmebildkamera"],
        ],
      },
      merke:
        "Kelvin = °C + 273,15. <strong>0 K = −273,15°C</strong> = absoluter Nullpunkt (theoretisch keine Teilchenbewegung). Wasser: c = 4,18 kJ/(kg·K) — extrem hohe Wärmekapazität!",
      klinik:
        "Fieber: Erhöhung der Körperkerntemperatur durch Pyrogene (z.B. Prostaglandin E₂). Hyperthermie ≠ Fieber: Bei Hyperthermie versagt die Wärmeregulation (z.B. Hitzschlag).",
    },
  ],

  keyFacts: [
    {
      label: "Gleichförmige Bewegung",
      value: "v = s / t",
    },
    {
      label: "Beschleunigte Bewegung",
      value: "s = ½ · a · t²",
    },
    {
      label: "Newton 2",
      value: "F = m · a (1 N = 1 kg·m/s²)",
    },
    {
      label: "Erdbeschleunigung",
      value: "g ≈ 9,81 m/s² ≈ 10 m/s²",
    },
    {
      label: "Kinetische / Potentielle Energie",
      value: "E_kin = ½mv², E_pot = mgh",
    },
    {
      label: "Freier Fall — Geschwindigkeit",
      value: "v = √(2gh) — unabhängig von der Masse",
    },
    {
      label: "Impuls",
      value: "p = m · v — ist bei allen Stößen erhalten",
    },
    {
      label: "Wärmeenergie",
      value: "Q = m · c · ΔT",
    },
    {
      label: "Kelvin-Umrechnung",
      value: "K = °C + 273,15 (0 K = −273,15°C)",
    },
    {
      label: "Wärmekapazität Wasser",
      value: "c = 4,18 kJ/(kg·K)",
    },
  ],

  selfTestQuestions: [
    {
      question: "Ein Stein fällt 2 Sekunden im freien Fall (g ≈ 10 m/s²). Welche Strecke legt er zurück?",
      options: ["10 m", "20 m", "30 m", "40 m", "5 m"],
      correctIndex: 1,
      explanation:
        "s = ½ · g · t² = ½ × 10 × 4 = 20 m. (Mit g ≈ 10 m/s²)",
    },
    {
      question: "Welche Größe ist bei ALLEN Stoßarten erhalten?",
      options: ["Kinetische Energie", "Impuls", "Geschwindigkeit", "Beschleunigung", "Keine"],
      correctIndex: 1,
      explanation:
        "Der Impuls (p = mv) ist bei allen Stößen in abgeschlossenen Systemen erhalten. Kinetische Energie nur beim elastischen Stoß.",
    },
    {
      question: "0 Kelvin entspricht...",
      options: ["−273,15°C", "0°C", "−100°C", "273,15°C", "−460°C"],
      correctIndex: 0,
      explanation:
        "0 K = −273,15°C ist der absolute Nullpunkt. Umrechnung: K = °C + 273,15.",
    },
    {
      question: "Auf der schiefen Ebene mit Winkel α ist die Hangabtriebskraft...",
      options: ["mg · cos(α)", "mg · sin(α)", "mg · tan(α)", "mg / sin(α)", "mg"],
      correctIndex: 1,
      explanation:
        "Hangabtriebskraft F_H = mg · sin(α), Normalkraft F_N = mg · cos(α). Bei α = 0° (horizontal): F_H = 0.",
    },
    {
      question: "Wie viel Energie braucht man, um 1 kg Wasser um 10°C zu erwärmen?",
      options: ["4,18 kJ", "41,8 kJ", "418 kJ", "4180 kJ", "0,418 kJ"],
      correctIndex: 1,
      explanation:
        "Q = m · c · ΔT = 1 kg × 4,18 kJ/(kg·K) × 10 K = 41,8 kJ.",
    },
  ],

  summary: [
    "Kinematik: Gleichförmige Bewegung (v = s/t, s-t linear), gleichmäßig beschleunigte Bewegung (s = ½at², v-t linear), freier Fall (g ≈ 10 m/s², s = ½gt²). Horizontaler Wurf = Überlagerung gleichförmig + freier Fall.",
    "Newton'sche Gesetze: 1. Trägheit (ohne Kraft → Ruhe oder gleichförmig), 2. F = ma (Grundgleichung), 3. Actio = Reactio. Gewichtskraft F_G = mg, Reibung F_R = μ·F_N, Federkraft F = kx, Zentripetalkraft F_Z = mv²/r.",
    "Schiefe Ebene: Hangabtriebskraft F_H = mg·sin(α), Normalkraft F_N = mg·cos(α). Arbeit W = F·s·cos(α) [J]. Leistung P = W/t = F·v [W].",
    "Energie: E_kin = ½mv², E_pot = mgh, E_sp = ½kx². Energieerhaltung: mgh = ½mv² → v = √(2gh) (unabhängig von Masse!). Wirkungsgrad η = E_nutz/E_zu.",
    "Impuls p = mv ist bei ALLEN Stößen erhalten. Kinetische Energie nur beim elastischen Stoß. Perfekt inelastisch: Körper verschmelzen, maximaler Energieverlust.",
    "Wärmelehre: K = °C + 273,15, Q = m·c·ΔT (Wasser: c = 4,18 kJ/(kg·K)). Aggregatzustandsänderungen: Schmelzen, Verdampfen, Sublimieren — Temperatur bleibt während Phasenübergang konstant.",
    "Wärmeübertragung: Leitung (Kontakt), Konvektion (Strömung), Strahlung (elektromagnetisch, kein Medium nötig). Hauptsätze: 0. Thermisches Gleichgewicht, 1. Energieerhaltung (ΔU = Q + W), 2. Entropie nimmt zu.",
  ],
};
