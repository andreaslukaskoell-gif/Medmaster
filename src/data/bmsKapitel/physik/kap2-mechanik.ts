import type { Kapitel } from "../types";

export const physKap2: Kapitel = {
  id: "phys-kap2",
  title: "Mechanik",
  subject: "physik",
  icon: "⚙️",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ph-2-01",
      title: "Newtonsche Gesetze und Kinematik",
      content: `## Newtonsche Gesetze und Kinematik

Die klassische Mechanik ist das Fundament der Physik und beschreibt, wie sich Körper unter dem Einfluss von Kräften bewegen. Isaac Newton formulierte im 17. Jahrhundert drei Grundgesetze, die für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit bis heute uneingeschränkt gültig sind. Diese Gesetze sind keine abstrakten Theorien — sie erklären, warum Knochen brechen, wie das Herz Blut pumpt und weshalb Venenpunktionen eine bestimmte Kraft erfordern.

## Kinematik: Bewegung ohne Kräfte

Die Kinematik beschreibt Bewegung rein geometrisch, ohne die Ursachen zu hinterfragen. Grundgrößen sind Ort (s), Zeit (t), Geschwindigkeit (v) und Beschleunigung (a).

**Gleichförmige Bewegung:** Bei konstanter Geschwindigkeit gilt s = v · t. Der Weg ist proportional zur Zeit. Im v-t-Diagramm ist das eine Horizontale; die Fläche unter der Kurve ergibt den zurückgelegten Weg.

**Gleichmäßig beschleunigte Bewegung:** Wenn eine konstante Kraft auf einen Körper wirkt, gilt a = const. Die Geschwindigkeit wächst linear: v(t) = v₀ + a · t. Der Weg folgt einer Parabelgleichung: s(t) = s₀ + v₀·t + ½·a·t². Der freie Fall ist der Spezialfall mit a = g ≈ 9,81 m/s² (Erdbeschleunigung). Ein Körper, der aus der Ruhe fällt, erreicht nach 1 s eine Geschwindigkeit von 9,81 m/s und hat 4,9 m zurückgelegt.

**Vektorielle Darstellung:** Geschwindigkeit und Beschleunigung sind Vektoren — sie haben Betrag (Skalar) und Richtung. Bei schiefer Wurf-Bewegung zerlegt man die Bewegung in horizontale (v_x = const) und vertikale Komponente (v_y = v₀y − g·t). Die Bahnkurve ist eine Parabel.

**Relativbewegung:** Geschwindigkeiten addieren sich vektoriell. Wenn ein Läufer mit 4 m/s in einem Zug fährt, der selbst 30 m/s schnell fährt, ist seine Geschwindigkeit relativ zur Erde 34 m/s (in Fahrtrichtung) oder 26 m/s (entgegen). Dieses Superpositionsprinzip gilt für alle Bewegungsgrößen.

## Das erste Newtonsche Gesetz — Trägheitsgesetz

Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn wirkt. Trägheit (lat. inertia) bedeutet Widerstandsfähigkeit gegen Zustandsänderung. Die Trägheit ist proportional zur Masse: Ein 80-kg-Mensch hat die doppelte Trägheit eines 40-kg-Kindes.

Im klinischen Kontext ist das Trägheitsgesetz bei Dezelerationstraumen entscheidend: Bei einem Frontalaufprall bremst das Fahrzeug schlagartig ab, aber Organe (Leber, Milz, Aorta) bewegen sich aufgrund ihrer Trägheit weiter vorwärts. Dabei können Gefäßstiele abreißen — besonders die Aorta descendens ist anfällig für Transektionen, weil sie an der Wirbelsäule fixiert ist, während der Aortenbogen sich weiter vorwärts bewegt.

## Das zweite Newtonsche Gesetz — Aktionsprinzip

F = m · a ist das wichtigste Gesetz der Mechanik. Eine Kraft von 1 Newton (N = kg·m/s²) beschleunigt 1 kg um 1 m/s². Das Gesetz ist vektoriell: Die Beschleunigung zeigt in dieselbe Richtung wie die resultierende Kraft.

Aus F = m·a folgt direkt: Größere Masse → geringere Beschleunigung bei gleicher Kraft. Das erklärt, warum ein schwerer Patient schwieriger zu reanimieren ist — bei identischer Herzmassagekraft ist die erzeugte Thoraxkompression (Beschleunigung des Sternums) geringer. Die optimale Drucktiefe erfordert daher eine angepasste Kraft.

**Superpositionsprinzip:** Mehrere Kräfte überlagern sich zur Gesamtkraft F_res = F₁ + F₂ + ... (Vektorsumme). Im Gleichgewicht ist F_res = 0. Das Auflösen dieser Vektorgleichungen (Komponentenform: F_x = 0, F_y = 0) ist das Werkzeug der Statik.

## Das dritte Newtonsche Gesetz — Reaktionsprinzip (actio = reactio)

Wenn Körper A eine Kraft auf Körper B ausübt, übt Körper B gleichzeitig eine gleich große, aber entgegengesetzte Kraft auf Körper A aus. Beide Kräfte bilden ein Aktions-Reaktions-Paar, wirken aber auf verschiedene Körper — sie heben sich daher nicht auf!

Beim Laufen: Der Fuß drückt die Erde nach hinten-unten (Aktionskraft). Die Erde drückt den Fuß nach vorne-oben (Reaktionskraft = Bodenreaktionskraft). Nur diese Reaktionskraft beschleunigt den Menschen vorwärts. Bei der Injektion: Die Spritze drückt auf die Haut (Aktionskraft), die Haut drückt auf die Spritze zurück (Reaktionskraft) — der Arzt muss diese überwinden.

## Freie und erzwungene Schwingungen

Ein Pendel schwingt mit seiner Eigenfrequenz f₀ = (1/2π)·√(g/l). Resonanz tritt auf, wenn die Anregungsfrequenz gleich der Eigenfrequenz ist — dann wächst die Amplitude dramatisch. Im Körper: Knochen und Gelenke haben mechanische Eigenfrequenzen. Vibrationstraining nutzt Resonanzeffekte zur Muskelstimulation.`,
      lernziele: [
        "Die drei Newtonschen Gesetze korrekt formulieren und auf biologische Beispiele anwenden",
        "Gleichförmige und gleichmäßig beschleunigte Bewegungen mathematisch beschreiben (v(t), s(t))",
        "Den Unterschied zwischen Kinematik und Dynamik erklären",
        "Vektorielle Addition von Kräften und Geschwindigkeiten durchführen",
        "Klinische Beispiele für Trägheit und Dezelerationstrauma benennen",
      ],
      sections: [
        {
          heading: "Kinematik: Gleichförmige und beschleunigte Bewegung",
          text: "Die Kinematik beschreibt Bewegung ohne Rücksicht auf ihre Ursachen. Bei gleichförmiger Bewegung gilt s = v·t (linearer Weg-Zeit-Zusammenhang). Bei gleichmäßiger Beschleunigung gilt v(t) = v₀ + a·t und s(t) = v₀·t + ½·a·t². Der freie Fall ist der wichtigste Sonderfall mit a = g = 9,81 m/s². Alle Bewegungsgrößen (v, a) sind Vektoren — bei schiefer Bewegung werden sie komponentenweise behandelt.",
          merksatz:
            "v = v₀ + at — Geschwindigkeit wächst linear mit der Zeit bei konstanter Beschleunigung. Fläche unter v(t)-Kurve = zurückgelegter Weg.",
        },
        {
          heading: "Die drei Newtonschen Gesetze",
          text: "1. Trägheitsgesetz: Kein Nettokraft → keine Zustandsänderung. 2. Aktionsprinzip: F = m·a — Kraft bestimmt Beschleunigung proportional zur Masse. 3. Reaktionsprinzip: actio = reactio — Kräfte treten immer paarweise auf, wirken auf verschiedene Körper. Diese drei Gesetze bilden das vollständige Framework der newtonschen Mechanik.",
          merksatz:
            "actio = reactio: Gleich groß, entgegengesetzt, aber auf verschiedene Körper wirkend — daher heben sie sich NICHT auf!",
        },
        {
          heading: "Klinische Anwendung: Dezelerationstrauma",
          text: "Bei plötzlichem Abbremsen (Autounfall, Sturz) wirkt die Trägheit: Organe setzen ihre Bewegung fort, während das Skelett aufgehalten wird. Besonders gefährdet sind: (1) Aorta descendens bei Aortenbogenverankerung, (2) Leber- und Milzstiele, (3) Gehirn (Contrecoup-Verletzung). Das zweite Newtonsche Gesetz erklärt, warum Körperschutz (Airbag, Helm) die Bremsstrecke verlängert und damit die Kraft F = m·a reduziert.",
          merksatz:
            "Airbag-Prinzip: Längere Bremsstrecke → geringere Verzögerung a → geringere Kraft F = m·a auf den Körper.",
        },
      ],
      diagram: "newton-forces",

      merksätze: [
        "Trägheitsgesetz: Kein F_res → kein Δv. Alles bleibt so, wie es ist.",
        "F = m·a: Kraft ist Masse mal Beschleunigung. 1 N = 1 kg·m/s².",
        "actio = reactio: Immer gleich groß, entgegengesetzt, verschiedene Körper.",
        "Freier Fall: g = 9,81 m/s² ≈ 10 m/s². Nach 1 s: v = 10 m/s, s = 5 m.",
        "v(t) = v₀ + a·t — lineare Geschwindigkeitszunahme bei konstanter Beschleunigung.",
        "s(t) = v₀·t + ½·a·t² — parabolischer Weg bei gleichmäßiger Beschleunigung.",
        "Vektoraddition: Kräfte und Geschwindigkeiten addieren sich komponentenweise.",
        "Dezelerationstrauma: Trägheit der Organe führt zu Gefäßabriss bei plötzlichem Stopp.",
        "Superpositionsprinzip: F_res = ΣFᵢ (Vektorsumme aller Einzelkräfte).",
        "Gleichgewicht: F_res = 0 → ΣFₓ = 0 und ΣFᵧ = 0 (für jede Komponente separat).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das zweite Newtonsche Gesetz (F = m·a) und zeigen Sie anhand von drei verschiedenen klinischen Beispielen, wie dieses Gesetz in der Medizin relevant ist.",
        answer: `Das zweite Newtonsche Gesetz besagt, dass die auf einen Körper wirkende Nettokraft gleich dem Produkt aus seiner Masse und der resultierenden Beschleunigung ist: F = m·a. Es handelt sich um eine Vektorgleichung — Kraft und Beschleunigung zeigen in dieselbe Richtung. Die Einheit der Kraft ist das Newton (N = kg·m/s²).

Klinisches Beispiel 1 — Herzreanimation (CPR): Beim Herzdruckmassage muss der Helfer eine ausreichende Kraft aufwenden, um das Sternum um 5–6 cm zu komprimieren. Da F = m·a gilt und der Thorax eine bestimmte Masse und Federsteifigkeit hat, muss die Druckkraft entsprechend angepasst werden. Bei adipösen Patienten ist mehr Kraft nötig, um dieselbe Kompressionstiefe zu erzielen.

Klinisches Beispiel 2 — Knochenbruch: Knochen brechen, wenn die einwirkende Kraft eine materialspezifische Bruchfestigkeit überschreitet. Die Kraft beim Aufprall (Sturz) ergibt sich aus F = m·a, wobei a die Verzögerung beim Aufprall ist. Ein Sturz auf hartem Boden (kurze Bremsstrecke, hohe Verzögerung) erzeugt eine größere Kraft als ein Sturz auf weichem Untergrund (längere Bremsstrecke, geringere Verzögerung). Schutzausrüstung (Helmpolster, Airbag) verlängert die Bremsstrecke gezielt, um a und damit F zu reduzieren.

Klinisches Beispiel 3 — Injektion und Venenpunktion: Um eine Kanüle in eine Vene einzuführen, muss der Arzt eine Kraft aufwenden, die den Gewebewiderstand überwindet. F = m·a beschreibt die Beschleunigung der Kanüle durch das Gewebe. Zu wenig Kraft führt dazu, dass die Kanüle nicht eindringt; zu viel Kraft bewirkt ein Durchstechen der Gegenwand. Die optimale Technik nutzt eine kontrollierte, mittelgroße Beschleunigung.`,
      },
      klinischerBezug:
        "Das Trägheitsgesetz erklärt Dezelerationstraumen bei Verkehrsunfällen: Organe (Aorta, Leber, Gehirn) setzen ihre Bewegung nach plötzlichem Fahrzeugstopp fort und können abreißen oder kontusionieren. Das zweite Newtonsche Gesetz ist direkt bei der Herzdruckmassage relevant — die Kompressionstiefe von 5–6 cm erfordert eine Kraft von ca. 400–500 N auf den Thorax. Beim Einführen von Kathetern und Kanülen muss die aufgebrachte Kraft an den Gewebewiderstand angepasst werden, um eine präzise, kontrollierte Penetration zu gewährleisten.",
      selfTest: [
        {
          question:
            "Ein Körper der Masse 4 kg wird mit einer Nettokraft von 20 N beschleunigt. Welche Beschleunigung erfährt er?",
          options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²", "80 m/s²"],
          correctIndex: 2,
          explanation:
            "Nach dem zweiten Newtonschen Gesetz gilt F = m·a, umgestellt a = F/m. Mit F = 20 N und m = 4 kg ergibt sich a = 20/4 = 5 m/s². Einheitencheck: N/kg = (kg·m/s²)/kg = m/s² — korrekt. Option A wäre a = F/m = 20/20 (falsche Masse), Option D würde F/m = 10 nur bei m = 2 kg gelten. Merke: Bei F = m·a immer zuerst die gesuchte Größe freistellen.",
          hints: [
            "Stelle F = m·a nach der gesuchten Größe a um: a = F/m.",
            "Setze F = 20 N und m = 4 kg ein und dividiere.",
          ],
          difficulty: 1,
          tags: ["newton", "kraft", "beschleunigung"],
        },
        {
          question:
            "Ein Stein fällt aus der Ruhe (v₀ = 0) frei nach unten. Nach 3 Sekunden beträgt seine Geschwindigkeit (g = 10 m/s²):",
          options: ["3 m/s", "10 m/s", "15 m/s", "30 m/s", "45 m/s"],
          correctIndex: 3,
          explanation:
            "Beim freien Fall gilt v(t) = v₀ + g·t. Mit v₀ = 0 und g = 10 m/s²: v(3 s) = 0 + 10·3 = 30 m/s. Die zurückgelegte Strecke wäre s = ½·g·t² = ½·10·9 = 45 m. Option C (15 m/s) wäre das Ergebnis nach 1,5 s. Option E (45 m/s) entspricht dem Weg in Metern, nicht der Geschwindigkeit. Die Geschwindigkeit beim freien Fall wächst linear mit der Zeit.",
          hints: ["Freier Fall: v(t) = g·t (da v₀ = 0).", "Multipliziere g = 10 m/s² mit t = 3 s."],
          difficulty: 1,
          tags: ["freier-fall", "kinematik", "geschwindigkeit"],
        },
        {
          question: "Welche Aussage zum dritten Newtonschen Gesetz (actio = reactio) ist KORREKT?",
          options: [
            "Aktions- und Reaktionskraft wirken auf denselben Körper und heben sich auf.",
            "Die Reaktionskraft ist immer kleiner als die Aktionskraft.",
            "Aktions- und Reaktionskraft wirken auf verschiedene Körper und heben sich nicht auf.",
            "Das Gesetz gilt nur für ruhende Körper.",
            "Aktionskraft und Reaktionskraft wirken in dieselbe Richtung.",
          ],
          correctIndex: 2,
          explanation:
            "Das dritte Newtonsche Gesetz besagt: Übt Körper A eine Kraft auf Körper B aus (Aktionskraft), so übt Körper B gleichzeitig eine gleich große, aber entgegengesetzte Kraft auf Körper A aus (Reaktionskraft). Entscheidend: Beide Kräfte wirken auf VERSCHIEDENE Körper — deshalb heben sie sich nicht auf und können keine resultierende Kraft auf ein System erzeugen. Anwendung: Beim Laufen drückt der Fuß die Erde nach hinten; die Erde drückt den Fuß nach vorne (Bodenreaktionskraft = Vortrieb). Option A ist falsch — gleiche Körper würden Aufhebung bedeuten.",
          hints: [
            "Aktions- und Reaktionskraft greifen immer an zwei verschiedenen Körpern an.",
            "Würden sie am selben Körper angreifen, würden sie sich aufheben — das ist aber nicht der Fall.",
          ],
          difficulty: 2,
          tags: ["newton", "actio-reactio", "kräfte"],
        },
        {
          question:
            "Ein Auto fährt mit v = 108 km/h und bremst auf einem Weg von 50 m auf v = 0 ab. Welche mittlere Verzögerung (Betrag der Beschleunigung) wirkt auf die Insassen?",
          options: ["2,16 m/s²", "5,4 m/s²", "9 m/s²", "18 m/s²", "27 m/s²"],
          correctIndex: 2,
          explanation:
            "108 km/h = 30 m/s. Nutze v² = v₀² − 2·a·s (mit Endgeschwindigkeit v = 0): 0 = 30² − 2·a·50 → 2·a·50 = 900 → a = 900/100 = 9 m/s². Das entspricht fast genau einer g-Kraft (g ≈ 9,81 m/s²). Bei solchen Verzögerungen wirken enorme Kräfte auf den Körper: F = m·a = 80 kg · 9 m/s² = 720 N. Ohne Sicherheitsgurt würde ein 80-kg-Mensch mit dieser Kraft gegen das Lenkrad gedrückt — erklärt die schweren Thoraxtraumen.",
          hints: [
            "Erst Einheitenumrechnung: 108 km/h = 108/3,6 = 30 m/s.",
            "Nutze die kinematische Formel v² = v₀² − 2·a·s und löse nach a auf.",
          ],
          difficulty: 3,
          tags: ["kinematik", "bremsen", "beschleunigung"],
        },
        {
          question: "Was beschreibt die Kinematik im Unterschied zur Dynamik?",
          options: [
            "Kinematik untersucht die Ursachen der Bewegung (Kräfte).",
            "Kinematik beschreibt Bewegung rein geometrisch ohne Betrachtung der Kräfte.",
            "Kinematik gilt nur für rotierende Körper.",
            "Kinematik ist ein Teilgebiet der Thermodynamik.",
            "Kinematik beschäftigt sich ausschließlich mit der Gleichgewichtslehre.",
          ],
          correctIndex: 1,
          explanation:
            "Kinematik (gr. kinema = Bewegung) beschreibt Bewegung rein durch Größen wie Ort, Geschwindigkeit und Beschleunigung — ohne die verursachenden Kräfte zu hinterfragen. Die Dynamik (gr. dynamis = Kraft) hingegen verknüpft Bewegung mit Kräften über F = m·a. Die Statik ist der Sonderfall der Dynamik, bei dem alle Kräfte im Gleichgewicht sind (F_res = 0). Kinematische Größen: s(t), v(t), a(t). Dynamische Größen: F, m, Impuls p, Energie E.",
          hints: [
            'Das Wort "Kinematik" kommt vom griechischen "kinema" = Bewegung — reine Bewegungsbeschreibung.',
            'Die Dynamik fügt die Ursache (Kraft) hinzu — Kinematik beschreibt nur das "Was", nicht das "Warum".',
          ],
          difficulty: 1,
          tags: ["kinematik", "dynamik", "bewegung"],
        },
        {
          question:
            "Eine Krankenschwester schiebt ein Krankenbett (Masse 80 kg) mit einer horizontalen Kraft von 160 N über einen reibungsfreien Boden. Welche Beschleunigung erreicht das Bett?",
          options: ["0,5 m/s²", "1,0 m/s²", "2,0 m/s²", "4,0 m/s²", "12,8 m/s²"],
          correctIndex: 2,
          explanation:
            "F = m·a → a = F/m = 160 N / 80 kg = 2,0 m/s². Ohne Reibung ist die Nettokraft gleich der aufgebrachten Kraft. In der Praxis gibt es immer Reibung (Rollreibung der Räder), die die tatsächliche Beschleunigung reduziert. Die Reibungskraft F_R = μ·F_N = μ·m·g müsste von der Antriebskraft subtrahiert werden. Für ein Krankenhausbett mit guten Rädern liegt μ_Roll ≈ 0,01–0,02, also F_R ≈ 8–16 N — der Effekt ist klein, aber vorhanden.",
          hints: [
            "Ohne Reibung ist die Nettokraft gleich der aufgebrachten Kraft: F_netto = F = 160 N.",
            "a = F/m — teile die Kraft durch die Masse.",
          ],
          difficulty: 1,
          tags: ["newton", "kraft", "beschleunigung"],
        },
        {
          question:
            "Welches kinematische Merkmal unterscheidet gleichförmige von gleichmäßig beschleunigter Bewegung im v-t-Diagramm?",
          options: [
            "Gleichförmige Bewegung zeigt eine Parabel, beschleunigte Bewegung eine Gerade.",
            "Gleichförmige Bewegung zeigt eine Horizontale (v = const), beschleunigte Bewegung eine Gerade mit Steigung.",
            "Beide Bewegungen zeigen identische v-t-Kurven.",
            "Beschleunigte Bewegung zeigt eine Horizontale, gleichförmige eine Parabel.",
            "Im v-t-Diagramm lässt sich kein Unterschied erkennen.",
          ],
          correctIndex: 1,
          explanation:
            "Im v-t-Diagramm gilt: Gleichförmige Bewegung (a = 0, v = const) erscheint als horizontale Gerade. Gleichmäßig beschleunigte Bewegung (a = const ≠ 0) zeigt eine geneigte Gerade mit Steigung a (Steigung = Beschleunigung). Die Fläche unter der v-t-Kurve ergibt in beiden Fällen den zurückgelegten Weg. Im s-t-Diagramm (Ort-Zeit) ist gleichförmige Bewegung eine Gerade, beschleunigte Bewegung eine Parabel. Diese Diagramminterpretation ist grundlegend für die Auswertung von Bewegungsdaten.",
          hints: [
            "Die Steigung der v-t-Kurve entspricht der Beschleunigung: Δv/Δt = a.",
            "Bei a = 0 ist die Steigung null → horizontale Linie. Bei a ≠ 0 steigt oder fällt die Gerade.",
          ],
          difficulty: 2,
          tags: ["kinematik", "diagramm", "beschleunigung"],
        },
        {
          question:
            "Beim Venenpunktionstraining wird die Kanüle mit v₀ = 0 durch eine gleichförmige Beschleunigung von a = 0,4 m/s² in die Vene geführt. Wie lange dauert es, bis sie eine Tiefe von 2 cm (0,02 m) erreicht?",
          options: ["0,05 s", "0,1 s", "0,16 s", "0,32 s", "1,0 s"],
          correctIndex: 3,
          explanation:
            "s = ½·a·t² (da v₀ = 0). Umgestellt: t = √(2s/a) = √(2·0,02/0,4) = √(0,04/0,4) = √0,1 ≈ 0,316 s ≈ 0,32 s. Die Endgeschwindigkeit wäre v = a·t = 0,4·0,316 ≈ 0,13 m/s = 13 cm/s — eine realistische Einstechgeschwindigkeit. Zu schnelles Einstechen (hohe a) führt zu Durchstechen der Gegenwand; zu langsames Einstechen ermöglicht dem Gewebe, auszuweichen. Diese kinematischen Überlegungen helfen, optimale Punktionstechniken zu entwickeln.",
          hints: [
            "Bei v₀ = 0 gilt s = ½·a·t². Stelle nach t um: t = √(2s/a).",
            "Einheitencheck: √(m / (m/s²)) = √(s²) = s — korrekt.",
          ],
          difficulty: 3,
          tags: ["kinematik", "gleichförmig-beschleunigt", "zeit"],
        },
      ],
    },
    {
      id: "ph-2-02",
      title: "Erhaltungssätze — Energie, Impuls, Drehimpuls",
      diagram: "coordinate-system",
      content: `## Erhaltungssätze — Energie, Impuls, Drehimpuls

Erhaltungssätze gehören zu den tiefsten Prinzipien der Physik. Sie besagen, dass bestimmte physikalische Größen in einem abgeschlossenen System konstant bleiben — unabhängig von den internen Vorgängen. Die drei wichtigsten Erhaltungssätze der Mechanik sind: Energieerhaltung, Impulserhaltung und Drehimpulserhaltung. Sie folgen aus fundamentalen Symmetrieprinzipien (Noether-Theorem): Energieerhaltung aus Zeitsymmetrie, Impulserhaltung aus Translationssymmetrie, Drehimpulserhaltung aus Rotationssymmetrie.

## Impuls und Impulserhaltung

Der Impuls p = m · v ist das Produkt aus Masse und Geschwindigkeit (Einheit: kg·m/s = N·s). Impuls ist ein Vektor — Betrag und Richtung sind entscheidend. Der Kraftstoß J = F · Δt = Δp beschreibt die Änderung des Impulses durch eine Kraft über eine Zeitspanne. Daraus folgt das zweite Newtonsche Gesetz in allgemeinerer Form: F = dp/dt.

Impulserhaltungssatz: In einem abgeschlossenen System (keine äußeren Kräfte) bleibt der Gesamtimpuls konstant: p_ges = Σmᵢ·vᵢ = const. Das gilt unabhängig davon, welche inneren Kräfte wirken (Explosionen, Kollisionen, chemische Reaktionen).

Anwendungen: Bei einem elastischen Stoß (Billardkugeln) sind sowohl Impuls als auch kinetische Energie erhalten. Bei einem inelastischen Stoß (Knetmasse-Kollision) ist nur der Impuls erhalten — kinetische Energie wird in Wärme, Verformungsenergie umgewandelt. Beim vollkommen unelastischen Stoß vereinigen sich beide Körper: m₁·v₁ + m₂·v₂ = (m₁+m₂)·v'. In der Medizin: Ballistisches Trauma — ein Projektil überträgt seinen Impuls auf das Gewebe: F·Δt = Δp. Hohle Projektile (Deformationsgeschosse) verlängern den Kontaktzeitraum und erhöhen die Gewebedeformation.

## Arbeit, Energie und der Energieerhaltungssatz

Mechanische Arbeit W = F · s · cos(θ) ist das Produkt aus Kraft, Weg und dem Kosinus des Winkels zwischen Kraft- und Wegrichtung (Einheit: Joule, J = N·m = kg·m²/s²). Nur die Kraftkomponente parallel zum Weg leistet Arbeit. Eine Kraft senkrecht zur Bewegungsrichtung (z. B. Zentripetalkraft) leistet keine Arbeit!

**Kinetische Energie** (Bewegungsenergie): E_kin = ½·m·v². Sie ist proportional zum Quadrat der Geschwindigkeit — bei doppelter Geschwindigkeit viermal so viel kinetische Energie. Das erklärt, warum Hochgeschwindigkeitsprojektile so verheerend sind und warum der Bremsweg bei Kraftfahrzeugen quadratisch mit der Geschwindigkeit wächst.

**Potenzielle Energie** (Lageenergie): E_pot = m·g·h. Die potenzielle Energie ist eine Zustandsgröße — sie hängt nur von der Höhe h über einem gewählten Referenzniveau ab, nicht vom zurückgelegten Weg.

**Energieerhaltungssatz:** In einem abgeschlossenen System ohne Reibung gilt: E_kin + E_pot = const. Energie kann zwischen kinetischer und potenzieller Form umgewandelt werden, aber die Gesamtenergie bleibt konstant. Mit Reibung gilt: Die mechanische Energie nimmt ab, aber die freigesetzte Wärme kompensiert exakt den Verlust — die Gesamtenergie (thermisch + mechanisch) bleibt erhalten.

## Leistung und Wirkungsgrad

Leistung P = W/t = F·v (Einheit: Watt, W = J/s). Leistung ist Arbeit pro Zeit. Ein Mensch kann kurzfristig etwa 1000 W (1 kW) leisten, im Dauerbetrieb etwa 100–200 W. Das Herz pumpt täglich ca. 8000 l Blut und leistet dabei eine mechanische Arbeit von ca. 1 J pro Herzschlag (70 Schläge/min → ca. 1 W mechanische Herzleistung, tatsächlich benötigt das Herz ca. 6 W wegen des Wirkungsgrades des Herzmuskelgewebes von etwa 17 %).

Wirkungsgrad η = P_nutz / P_ges · 100 %. Der menschliche Körper hat beim Laufen einen Wirkungsgrad von ca. 20–25 % — der Rest wird als Wärme abgegeben.

## Drehimpuls und Rotationsenergie

Drehimpuls L = I · ω, wobei I das Trägheitsmoment (kg·m²) und ω die Winkelgeschwindigkeit (rad/s) ist. Drehimpulserhaltung: In Abwesenheit äußerer Drehmomente bleibt L = const. Der Pirouetten-Effekt: Wenn ein Eiskunstläufer die Arme anzieht (verringert I), erhöht sich ω — bei konstantem L. Rotationsenergie: E_rot = ½·I·ω². Im Körper bestimmt das Trägheitsmoment der Gliedmaßen die Energieeffizienz der Bewegung.`,
      lernziele: [
        "Impuls (p = mv) und Kraftstoß (J = FΔt) definieren und den Impulserhaltungssatz anwenden",
        "Mechanische Arbeit, kinetische und potenzielle Energie berechnen",
        "Den Energieerhaltungssatz auf Reibungs- und reibungsfreie Systeme anwenden",
        "Leistung und Wirkungsgrad berechnen und biologische Beispiele nennen",
        "Elastische von inelastischen Stößen unterscheiden und Berechnungen durchführen",
      ],
      sections: [
        {
          heading: "Impuls und Kraftstoß",
          text: "Der Impuls p = m·v ist ein Vektor (Einheit: kg·m/s). Der Kraftstoß J = F·Δt = Δp beschreibt die Impulsänderung. Bei Kollisionen ist in abgeschlossenen Systemen der Gesamtimpuls erhalten: Σp_vorher = Σp_nachher. Elastische Stöße erhalten zusätzlich die kinetische Energie. Inelastische Stöße (Deformationen, Knochenbrüche, Gewebeschäden) wandeln kinetische Energie in andere Energieformen um.",
          merksatz:
            "p = m·v. Kraftstoß = Impulsänderung: F·Δt = Δp. Längerer Kontakt → geringere Kraft bei gleicher Impulsänderung.",
        },
        {
          heading: "Energieerhaltung: kinetisch und potenziell",
          text: "E_kin = ½mv², E_pot = mgh. Ohne Reibung: E_kin + E_pot = const. Ein Körper, der aus Höhe h fällt, erreicht am Boden v = √(2gh). Mit Reibung wird mechanische Energie in Wärme umgewandelt, die Gesamtenergie (inkl. thermisch) bleibt jedoch erhalten. Der Energieerhaltungssatz ist universell gültig — er gilt auch für elektrische, chemische und thermische Energie.",
          merksatz:
            "v = √(2gh) — Auftreffgeschwindigkeit beim freien Fall aus Höhe h (ohne Reibung).",
        },
        {
          heading: "Herzleistung und biologische Arbeit",
          text: "Das Herz leistet pro Herzschlag ca. W = p·ΔV ≈ 100 mmHg · 70 ml ≈ 1 J mechanische Arbeit. Bei 70 Schlägen/min ergibt das P ≈ 1,2 W mechanische Herzleistung. Da der Wirkungsgrad des Herzmuskels ca. 17 % beträgt, verbraucht das Herz metabolisch ca. 7 W. Im Dauerstress (Tachykardie, Hypertension) steigt dieser Wert stark an und führt zur Myokardhypertrophie.",
          merksatz:
            "Herzarbeit ≈ 1 J/Schlag. Mechanische Herzleistung ≈ 1 W (Ruhe). Gesamtmetabolismus Herz ≈ 7 W (η ≈ 17 %).",
        },
      ],
      merksätze: [
        "Impuls p = m·v: Vektorgröße in kg·m/s. Impulserhaltung in abgeschlossenen Systemen.",
        "Kraftstoß J = F·Δt = Δp. Längere Einwirkzeit → geringere Spitzenkraft (Airbag-Prinzip).",
        "E_kin = ½·m·v²: Bei doppelter Geschwindigkeit viermal so viel kinetische Energie.",
        "E_pot = m·g·h: Lageenergie abhängig von Höhe, Masse und Erdbeschleunigung.",
        "Energieerhaltung: E_kin + E_pot = const (ohne Reibungsverluste).",
        "Arbeit W = F·s·cos(θ): Senkrechte Kraft zum Weg → keine Arbeit geleistet.",
        "Leistung P = W/t = F·v: Einheit Watt (W = J/s).",
        "Elastischer Stoß: Impuls UND kinetische Energie erhalten.",
        "Inelastischer Stoß: NUR Impuls erhalten, kinetische Energie nimmt ab.",
        "Drehimpulserhaltung: I·ω = const → kleineres I → größeres ω (Pirouetteneffekt).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie den Unterschied zwischen elastischem und inelastischem Stoß und erklären Sie, welche Erhaltungsgrößen in jedem Fall gelten. Geben Sie ein klinisches Beispiel für einen inelastischen Stoß.",
        answer: `Bei einem elastischen Stoß bleiben sowohl der Gesamtimpuls als auch die gesamte kinetische Energie erhalten. Das bedeutet: Σ(m·v)_vorher = Σ(m·v)_nachher UND Σ(½·m·v²)_vorher = Σ(½·m·v²)_nachher. Ein klassisches Beispiel ist der Stoß zweier Billardkugeln — in der Praxis sind vollkommen elastische Stöße idealisiert, da immer geringe Verformungsenergie und Wärme entstehen.

Beim inelastischen Stoß ist nur der Gesamtimpuls erhalten, nicht die kinetische Energie. Ein Teil der kinetischen Energie wird in innere Energie (Verformung, Wärme, Schall) umgewandelt. Der Extremfall ist der vollkommen unelastische Stoß, bei dem sich beide Körper vereinigen: v' = (m₁·v₁ + m₂·v₂)/(m₁+m₂). Der Energieverlust ist maximal.

Klinisches Beispiel: Bei einem Sturz auf den Kopf (Schädel-Hirn-Trauma) trifft der Kopf (Masse ca. 5 kg, Geschwindigkeit ca. 4 m/s nach 80-cm-Sturz) auf den Boden. Der Stoß ist vollkommen unelastisch — der Kopf bleibt nach dem Aufprall am Boden. Die kinetische Energie (E = ½·5·16 = 40 J) wird in Deformationsenergie des Schädels, Schockwellen im Hirngewebe und Wärme umgewandelt. Der Impuls p = 5·4 = 20 kg·m/s wird durch die Bodenkraft abgebaut. Ein weicher Untergrund (Helm, Matte) verlängert den Stoßvorgang (größeres Δt), reduziert die Spitzenkraft und schützt das Gewebe.`,
      },
      klinischerBezug:
        "Der Impulserhaltungssatz erklärt ballistische Verletzungen: Ein Projektil (Masse ca. 10 g, Geschwindigkeit ca. 300 m/s, Impuls 3 N·s) überträgt seinen gesamten Impuls auf das Körpergewebe innerhalb von Millisekunden — die resultierende Gewebekraft kann tödlich sein. Die Herzleistung (mechanisch ca. 1 W, metabolisch ca. 7 W) ist ein Maß für den kardialen Sauerstoffbedarf; bei Hypertonie steigt die Druck-Volumen-Arbeit des Herzens, was den myokardialen O₂-Verbrauch erhöht und zur Linksherzhypertrophie führt.",
      selfTest: [
        {
          question:
            "Ein 70-kg-Patient springt aus 1,25 m Höhe und landet auf hartem Boden. Welche kinetische Energie hat er unmittelbar vor dem Aufprall (g = 10 m/s²)?",
          options: ["175 J", "350 J", "437,5 J", "875 J", "1225 J"],
          correctIndex: 3,
          explanation:
            "Energieerhaltung: E_pot = E_kin → mgh = E_kin. E_kin = 70·10·1,25 = 875 J. Alternativ: v = √(2gh) = √(2·10·1,25) = √25 = 5 m/s, dann E_kin = ½·70·25 = 875 J. Diese 875 J werden beim Aufprall in Verformungsenergie, Schallenergie und Wärme umgewandelt. Ein Sturz aus dieser Höhe kann bei älteren Patienten (Osteoporose) bereits zu Frakturen führen — die Knochen können nur begrenzte Energie elastisch und plastisch aufnehmen.",
          hints: [
            "Nutze Energieerhaltung: Die potenzielle Energie mgh wird vollständig in kinetische Energie umgewandelt.",
            "E_kin = mgh = 70 kg · 10 m/s² · 1,25 m.",
          ],
          difficulty: 2,
          tags: ["energieerhaltung", "potenzielle-energie", "kinetische-energie"],
        },
        {
          question:
            "Das Herz pumpt pro Schlag ein Schlagvolumen von 70 ml gegen einen mittleren Aortendruck von 100 mmHg. Welche mechanische Arbeit leistet das Herz pro Schlag? (1 mmHg = 133 Pa)",
          options: ["0,07 J", "0,093 J", "0,93 J", "9,3 J", "93 J"],
          correctIndex: 2,
          explanation:
            "W = p·ΔV. Druckumrechnung: 100 mmHg = 100·133 = 13300 Pa. Volumenstrom: 70 ml = 70·10⁻⁶ m³. W = 13300 Pa · 70·10⁻⁶ m³ = 13300 · 0,000070 = 0,931 J ≈ 0,93 J. Bei 70 Schlägen/min: P = 0,93 J · 70/60 s⁻¹ ≈ 1,08 W mechanische Herzleistung. Da der Herzmuskelwirkungsgrad nur ca. 17 % beträgt, verbraucht das Herz metabolisch ca. 6 W, was einem Tagesverbrauch von ca. 518 kJ entspricht.",
          hints: [
            "Herzarbeit = Druck × Volumen: W = p·ΔV. Erst Einheiten umrechnen: mmHg → Pa, ml → m³.",
            "1 mmHg = 133 Pa; 1 ml = 10⁻⁶ m³. Dann W = p·ΔV.",
          ],
          difficulty: 3,
          tags: ["herzarbeit", "druck", "arbeit"],
        },
        {
          question:
            "Ein Körper (m = 5 kg) wird von Ruhe aus über eine Strecke von 10 m mit einer konstanten Kraft von 20 N beschleunigt. Welche kinetische Energie hat er danach?",
          options: ["50 J", "100 J", "200 J", "400 J", "1000 J"],
          correctIndex: 2,
          explanation:
            "Geleistete Arbeit = Zunahme der kinetischen Energie: W = F·s = 20 N · 10 m = 200 J. Damit: E_kin = 200 J. Zur Kontrolle: a = F/m = 20/5 = 4 m/s². v² = 2·a·s = 2·4·10 = 80 m²/s². E_kin = ½·m·v² = ½·5·80 = 200 J. Beide Methoden liefern dasselbe Ergebnis — das Arbeit-Energie-Theorem ist elegant und oft schneller.",
          hints: [
            "Das Arbeit-Energie-Theorem: Die geleistete Arbeit W = F·s entspricht der Änderung der kinetischen Energie.",
            "W = F·s = 20·10 = 200 J = E_kin (da Startzustand: Ruhe, E_kin,0 = 0).",
          ],
          difficulty: 2,
          tags: ["arbeit", "energie", "kinetische-energie"],
        },
        {
          question: "Welche Energieform wird beim inelastischen Stoß NICHT erhalten?",
          options: [
            "Gesamtenergie (inkl. Wärme)",
            "Gesamtimpuls",
            "Kinetische Energie",
            "Drehimpuls (bei Abwesenheit äußerer Drehmomente)",
            "Elektrische Ladung",
          ],
          correctIndex: 2,
          explanation:
            "Beim inelastischen Stoß ist nur der Gesamtimpuls erhalten (kein äußerer Kraftstoß), nicht aber die kinetische Energie. Ein Teil der kinetischen Energie wird in Verformungsenergie, Wärme und Schall umgewandelt. Die Gesamtenergie (inkl. aller Energieformen) ist gemäß dem ersten Hauptsatz der Thermodynamik immer erhalten — kinetische Energie ist aber nicht erhalten. Beim elastischen Stoß sind sowohl Impuls als auch kinetische Energie erhalten.",
          hints: [
            "Beim inelastischen Stoß hört man oft ein Geräusch (Schallenergie) oder sieht eine Verformung — das ist die umgewandelte kinetische Energie.",
            "Impuls ist immer erhalten (solange keine äußere Kraft wirkt). Kinetische Energie nur beim elastischen Stoß.",
          ],
          difficulty: 1,
          tags: ["stoß", "impulserhaltung", "kinetische-energie"],
        },
        {
          question:
            "Ein Eiskunstläufer (I₁ = 4 kg·m²) dreht mit ω₁ = 2 rad/s. Er zieht die Arme an und reduziert sein Trägheitsmoment auf I₂ = 1 kg·m². Wie groß ist die neue Winkelgeschwindigkeit ω₂?",
          options: ["0,5 rad/s", "2 rad/s", "4 rad/s", "8 rad/s", "16 rad/s"],
          correctIndex: 3,
          explanation:
            "Drehimpulserhaltung: L = I·ω = const → I₁·ω₁ = I₂·ω₂. Umgestellt: ω₂ = I₁·ω₁/I₂ = 4·2/1 = 8 rad/s. Der Läufer rotiert also viermal schneller als zuvor! Die Rotationsenergie ändert sich dabei: E₁ = ½·4·4 = 8 J, E₂ = ½·1·64 = 32 J — die Energie hat sich vervierfacht. Die zusätzliche Energie stammt aus der Muskelarbeit, die der Läufer aufwenden muss, um die Arme einzuziehen (gegen die Zentrifugalkraft).",
          hints: [
            "Drehimpulserhaltung: L = I·ω = const. Stelle nach ω₂ um: ω₂ = I₁·ω₁/I₂.",
            "I₁ = 4 kg·m², ω₁ = 2 rad/s, I₂ = 1 kg·m² → ω₂ = ?",
          ],
          difficulty: 3,
          tags: ["drehimpuls", "trägheitsmoment", "rotation"],
        },
        {
          question:
            "Ein Kraftstoß von F = 5 N wirkt über Δt = 0,02 s auf die Haut. Welchen Impuls überträgt er?",
          options: ["0,001 N·s", "0,01 N·s", "0,1 N·s", "1 N·s", "250 N·s"],
          correctIndex: 2,
          explanation:
            "Kraftstoß J = F·Δt = 5 N · 0,02 s = 0,1 N·s. Der Kraftstoß entspricht der Impulsänderung Δp = 0,1 kg·m/s. Das bedeutet: Wenn die Nadel (Masse z. B. 0,01 kg) diese Impulsänderung erfährt, ändert sich ihre Geschwindigkeit um Δv = Δp/m = 0,1/0,01 = 10 m/s. Das Konzept des Kraftstoßes erklärt, warum schnelle, kurze Krafteinwirkungen (Schlag) und langsame, längere Einwirkungen (Druck) denselben Impuls übertragen können, aber sehr unterschiedliche Gewebeschäden verursachen.",
          hints: [
            "Kraftstoß J = F·Δt. Einfaches Produkt aus Kraft und Zeitdauer.",
            "5 N · 0,02 s = 0,10 N·s.",
          ],
          difficulty: 1,
          tags: ["kraftstoß", "impuls", "kraft"],
        },
        {
          question:
            "Welche Leistung erbringt ein Arzt, der eine 20-kg-Patientenliege in 4 Sekunden um 0,5 m anhebt (g = 10 m/s²)?",
          options: ["2,5 W", "10 W", "25 W", "100 W", "400 W"],
          correctIndex: 2,
          explanation:
            "W = F·s = m·g·h = 20·10·0,5 = 100 J. P = W/t = 100 J/4 s = 25 W. Das entspricht etwa 25 % der Dauerleistungsfähigkeit eines durchschnittlichen Menschen (ca. 100 W). Bei 8 Stunden Arbeit mit dieser Leistung würde ein Arzt 8·3600·25 = 720 kJ mechanische Arbeit leisten — der tatsächliche Energieverbrauch ist wegen η < 100 % höher. Diese Berechnungen sind relevant für die Ergonomie im Pflegebereich.",
          hints: [
            "Erst Arbeit berechnen: W = mgh = 20·10·0,5 = 100 J.",
            "Dann Leistung: P = W/t = 100 J / 4 s = 25 W.",
          ],
          difficulty: 2,
          tags: ["leistung", "arbeit", "wirkungsgrad"],
        },
      ],
    },
    {
      id: "ph-2-03",
      title: "Statik, Druck und Hydrodynamik",
      diagram: "newton-forces",
      content: `## Statik, Druck und Hydrodynamik

Die Statik untersucht Körper und Systeme im Gleichgewicht, während die Hydrodynamik die Bewegung von Flüssigkeiten und Gasen beschreibt. Beide Gebiete sind für die Medizin von zentraler Bedeutung: Statik erklärt die Mechanik des Bewegungsapparates (Hebelprinzipien im Skelett), Hydrodynamik beschreibt den Blutfluss und die Funktion der Lunge.

## Statik und Gleichgewichtsbedingungen

Ein Körper befindet sich im mechanischen Gleichgewicht, wenn zwei Bedingungen gleichzeitig erfüllt sind:
1. **Kräftegleichgewicht:** Die Summe aller Kräfte (Vektoren) ist null: ΣF = 0. Damit ist Translationsgleichgewicht gewährleistet.
2. **Momentengleichgewicht:** Die Summe aller Drehmomente um jeden beliebigen Punkt ist null: ΣM = 0. Damit ist Rotationsgleichgewicht gewährleistet.

**Drehmoment:** M = F · d, wobei d der senkrechte Hebelarm (Abstand von der Drehachse zur Wirkungslinie der Kraft) ist. Einheit: N·m. Ein großer Hebelarm ermöglicht es, mit kleiner Kraft ein großes Drehmoment zu erzeugen — das ist das Hebelgesetz.

Im Körper: Der Unterarm ist ein einarmiger Hebel (Typ 3). Der Bizeps (Kraft F_B) wirkt ca. 5 cm vom Ellenbogengelenk (Drehachse) entfernt. Eine Last von 10 kg (100 N) in der Hand wirkt ca. 35 cm von der Drehachse. Momentengleichgewicht: F_B · 0,05 = 100 · 0,35 → F_B = 700 N. Der Muskel muss eine siebenmal größere Kraft aufwenden als die Last — das ist anatomisch nachteilig, aber ermöglicht schnelle, weite Bewegungen (Geschwindigkeitshebel).

## Druck in Flüssigkeiten

Druck p = F/A (Einheit: Pascal, Pa = N/m²). Der Druck wirkt in alle Richtungen gleich (Pascal'sches Prinzip). Der hydrostatische Druck in einer Flüssigkeit der Dichte ρ in Tiefe h beträgt p = ρ·g·h. Im menschlichen Körper: Der arterielle Blutdruck (systolisch ca. 120 mmHg) überwindet den peripheren Gefäßwiderstand und treibt das Blut durch den Kreislauf. Der venöse Druck (ca. 5 mmHg) ist viel niedriger — Klappen verhindern Rückfluss.

**Auftrieb:** Ein in eine Flüssigkeit eingetauchter Körper erfährt eine Auftriebskraft F_A = ρ_Fl · g · V_verdrängt (Archimedisches Prinzip). Für den menschlichen Körper (Dichte ca. 0,98 kg/dm³ im Wasser) ist der Auftrieb fast vollständig gleich dem Gewicht — das ermöglicht therapeutisches Schwimmen und Rehabilitationsübungen im Wasser.

## Strömungslehre: Kontinuitätsgleichung und Bernoulli

**Kontinuitätsgleichung:** In einer inkompressiblen, reibungsfreien Strömung gilt: A₁·v₁ = A₂·v₂ (Volumenstrom Q = A·v = const). Wenn der Querschnitt kleiner wird, steigt die Strömungsgeschwindigkeit. Im Körper: In der Aorta (Durchmesser ca. 2,5 cm, Querschnitt ca. 5 cm²) fließt Blut mit ca. 20 cm/s. In den Kapillaren (Gesamtquerschnitt ca. 5000 cm², 1000-fach größer) fließt Blut nur ca. 0,03 cm/s — optimal für den Stoffaustausch.

**Bernoulli-Gleichung:** ½·ρ·v² + ρ·g·h + p = const. Dies ist der Energieerhaltungssatz für Strömungen. An engen Stellen (hohe Geschwindigkeit) ist der Druck niedrig, an weiten Stellen (geringe Geschwindigkeit) ist der Druck hoch. Anwendung: Bei einer Arterienstenose steigt die Strömungsgeschwindigkeit — der Druck fällt hinter der Stenose ab (poststenotischer Druckabfall).

**Poiseuille-Gesetz (reibungsbehaftete Strömung):** Der Volumenstrom durch ein zylindrisches Gefäß ist Q = (π·r⁴·Δp)/(8·η·l). Der Radius geht mit der vierten Potenz ein! Eine Halbierung des Gefäßradius reduziert den Volumenstrom auf 1/16 des ursprünglichen Wertes. Das erklärt, warum Koronarstenosen so kritisch sind: Eine 50%ige Radiusreduktion reduziert den Blutfluss auf 6,25 % des Normalen.

## Viskosität und Strömungstypen

Viskosität η (Einheit: Pa·s) beschreibt den inneren Reibungswiderstand einer Flüssigkeit. Wasser: η ≈ 10⁻³ Pa·s; Blut: η ≈ 3–4·10⁻³ Pa·s (nicht-newtonsches Fluid — abhängig von Hämatokrit und Scherrate). Bei laminarer Strömung (Reynoldszahl Re < 2300) fließen Flüssigkeitsschichten parallel ohne Vermischung. Bei turbulenter Strömung (Re > 4000) entstehen Wirbel — Herzgeräusche (Turbulenzen an verengten Klappen) sind klinisch diagnostisch wichtig.`,
      lernziele: [
        "Die zwei Gleichgewichtsbedingungen (Kräfte- und Momentengleichgewicht) anwenden",
        "Drehmomente berechnen und das Hebelgesetz auf den Bewegungsapparat anwenden",
        "Die Bernoulli-Gleichung und Kontinuitätsgleichung auf den Blutkreislauf anwenden",
        "Das Poiseuille-Gesetz erklären und die Bedeutung des Radius⁴-Gesetzes für Gefäßstenosen verstehen",
        "Laminare und turbulente Strömung unterscheiden und die Reynoldszahl einordnen",
      ],
      sections: [
        {
          heading: "Hebelgesetz und Muskelkräfte",
          text: "Ein Hebel im Gleichgewicht erfüllt: F₁·d₁ = F₂·d₂ (Drehmomentgleichgewicht). Im Körper sind Muskeln nahe an Gelenken angesetzt (kleiner Hebelarm), was große Muskelkräfte erfordert, aber schnelle und weite Bewegungen ermöglicht. Der Unterarm-Bizeps-Mechanismus ist ein Typ-3-Hebel: Muskelkraft (ca. 5 cm vom Gelenk) vs. Last (ca. 35 cm vom Gelenk) → Kraft-Übersetzung 1:7. Für 10 kg Last braucht der Bizeps ca. 700 N.",
          merksatz:
            "M = F·d. Kleiner Hebelarm → große Kraft nötig. Großer Hebelarm → kleine Kraft nötig. Gleichgewicht: F₁·d₁ = F₂·d₂.",
        },
        {
          heading: "Bernoulli und Blutdruck",
          text: "Die Bernoulli-Gleichung (½ρv² + ρgh + p = const) besagt: Schnelle Strömung → niedriger Druck. Bei Gefäßstenosen steigt v, fällt p. Das Poiseuille-Gesetz Q = πr⁴Δp/(8ηl) zeigt die extreme Abhängigkeit vom Radius — das r⁴-Gesetz macht den Gefäßradius zum dominanten Faktor für den Blutfluss.",
          merksatz:
            "Poiseuille: Q ~ r⁴. Radius halbiert → Fluss auf 1/16 reduziert. Gefäßverengung ist extrem flusslimitierend.",
        },
        {
          heading: "Laminare vs. turbulente Strömung",
          text: "Die Reynoldszahl Re = ρ·v·d/η entscheidet über den Strömungstyp: Re < 2300 → laminar (geordnet, schichtenweise); Re > 4000 → turbulent (wirbelnd, Energieverlust). Turbulente Strömung erzeugt Geräusche (Herzgeräusche, Strömungsgeräusche bei Stenosen). Im normalen Kreislauf ist die Strömung meist laminar; an Klappen, Stenosen und Biegungen kann Turbulenz entstehen. Turbulenz erhöht den Strömungswiderstand und den Energiebedarf des Herzens.",
          merksatz:
            "Re = ρvd/η. Re < 2300: laminar (leise, effizient). Re > 4000: turbulent (laut, energieaufwendig).",
        },
      ],
      merksätze: [
        "Gleichgewicht: ΣF = 0 (Kräfte) UND ΣM = 0 (Momente). Beide Bedingungen müssen erfüllt sein.",
        "Drehmoment M = F · d. Einheit: N·m. Großer Hebelarm → großes Drehmoment bei kleiner Kraft.",
        "Druck p = F/A. Einheit Pascal (Pa). Hydrostatisch: p = ρgh.",
        "Bernoulli: ½ρv² + ρgh + p = const. Schnell → niedriger Druck (Venturi-Effekt).",
        "Kontinuität: A₁v₁ = A₂v₂. Enger Querschnitt → schnellere Strömung.",
        "Poiseuille: Q = πr⁴Δp/(8ηl). Radius geht mit 4. Potenz ein!",
        "Reynoldszahl: Re = ρvd/η. Laminar: Re < 2300. Turbulent: Re > 4000.",
        "Archimedisches Prinzip: F_A = ρ_Fl·g·V. Auftrieb = Gewicht des verdrängten Fluids.",
        "Kapillaren: Gesamtquerschnitt 1000× größer als Aorta → Blutfluss 1000× langsamer (Kontinuität).",
        "Arterienstenose 50 % Radius → Fluss auf (0,5)⁴ = 6,25 % des Normalflusses (Poiseuille).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Poiseuille-Gesetz und erläutern Sie, warum eine Koronarstenose mit 50%iger Lumenreduktion klinisch so kritisch ist. Welche therapeutischen Maßnahmen leiten sich daraus ab?",
        answer: `Das Hagen-Poiseuille-Gesetz beschreibt den Volumenstrom Q einer viskosen, inkompressiblen Flüssigkeit durch ein zylindrisches Rohr bei laminarer Strömung: Q = (π·r⁴·Δp)/(8·η·l). Dabei ist r der Gefäßradius, Δp der Druckgradient, η die dynamische Viskosität und l die Rohrlänge. Der kritische Parameter ist der Radius, der mit der vierten Potenz eingeht.

Eine 50%ige Lumenreduktion bedeutet eine Halbierung des Radius (r₂ = 0,5·r₁). Die Auswirkung auf den Volumenstrom: Q₂/Q₁ = (r₂/r₁)⁴ = (0,5)⁴ = 1/16 = 6,25 %. Der Koronarfluss sinkt also auf nur 6,25 % des ursprünglichen Wertes. In der Praxis versucht der Körper durch Erhöhung des Blutdrucks gegenzusteuern, was die kardiale Nachlast erhöht und die Herzarbeit steigert.

Klinische Konsequenzen: Schon bei moderater körperlicher Belastung kann das Koronargefäß nicht genug Blut liefern → Angina pectoris (ischämische Brustschmerzen). Bei maximaler Stenose (> 90 %) kann die Myokardversorgung auch in Ruhe insuffizient sein → Herzinfarkt.

Therapeutische Konsequenzen aus dem r⁴-Gesetz: (1) Perkutane transluminale Koronarangioplastie (PTCA/Stenting) — Ballon-Aufweitung von r = 0,5r₀ auf r₀ steigert den Fluss um Faktor 16. (2) Bypass-Operation — Umgehung der Stenose mit neuem Gefäß mit größerem r. (3) Medikamentöse Vasodilatation — Nitroglycerin erhöht r durch glatte Muskelrelaxation. Das Poiseuille-Gesetz zeigt, warum kleinste Radienänderungen massive Auswirkungen auf den Blutfluss haben.`,
      },
      klinischerBezug:
        "Das Poiseuille-Gesetz (Q ~ r⁴) erklärt die extreme klinische Relevanz von Gefäßstenosen: Eine Lumenreduktion um 50 % (Radiushalbierung) reduziert den Blutfluss auf 6,25 % des Normalen — das Herzmuskelgewebe wird ischämisch. Stenting bei Koronarstenosen nutzt genau dieses Gesetz: Schon eine kleine Radiusvergrößerung (r × 1,2) steigert den Fluss auf das 2,1-fache. Die Bernoulli-Gleichung erklärt zusätzlich, warum an Stenosen der Druck poststenotisch abfällt und Kalzifizierungen das Risiko einer plötzlichen Gefäßdissektion erhöhen.",
      selfTest: [
        {
          question:
            "Ein Muskel wirkt 4 cm vom Gelenk (Drehachse) entfernt. Eine Last von 50 N hängt 20 cm vom Gelenk. Wie groß muss die Muskelkraft im Gleichgewicht sein?",
          options: ["10 N", "50 N", "200 N", "250 N", "1000 N"],
          correctIndex: 3,
          explanation:
            "Momentengleichgewicht: F_Muskel · d_Muskel = F_Last · d_Last. F_M · 0,04 m = 50 N · 0,20 m → F_M = (50 · 0,20)/0,04 = 10/0,04 = 250 N. Der Muskel muss 250 N aufwenden, um eine Last von nur 50 N zu halten — Faktor 5. Dies ist typisch für Körperhebel: kurze Muskelhebelarme erfordern große Muskelkräfte, ermöglichen aber große Bewegungsgeschwindigkeiten. Die Gelenkreaktionskraft beträgt dabei: F_Gelenk = F_M − F_Last = 250 − 50 = 200 N.",
          hints: [
            "Momentengleichgewicht: F₁·d₁ = F₂·d₂. Drehmoment Muskel = Drehmoment Last.",
            "F_M · 4 cm = 50 N · 20 cm → F_M = 50·20/4.",
          ],
          difficulty: 2,
          tags: ["statik", "hebel", "drehmoment"],
        },
        {
          question:
            "In der Aorta (Querschnitt 5 cm²) fließt Blut mit 20 cm/s. Welche Geschwindigkeit hat das Blut in Kapillaren mit einem Gesamtquerschnitt von 2500 cm²?",
          options: ["0,002 cm/s", "0,004 cm/s", "0,04 cm/s", "4 cm/s", "10 cm/s"],
          correctIndex: 2,
          explanation:
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂ → v₂ = A₁·v₁/A₂ = (5·20)/2500 = 100/2500 = 0,04 cm/s. Der Blutfluss in den Kapillaren ist 500-mal langsamer als in der Aorta! Diese extrem geringe Kapillarströmungsgeschwindigkeit ist physiologisch essenziell: Sie ermöglicht ausreichend Zeit für den Diffusionsaustausch von O₂, CO₂, Glukose und Metaboliten zwischen Blut und Gewebe. Würde das Blut schneller fließen, wäre der Diffusionsaustausch unvollständig.",
          hints: [
            "Kontinuitätsgleichung: A₁·v₁ = A₂·v₂. Löse nach v₂ auf.",
            "v₂ = (A₁/A₂) · v₁ = (5/2500) · 20 cm/s.",
          ],
          difficulty: 2,
          tags: ["kontinuität", "strömung", "blutfluss"],
        },
        {
          question: "Welche Aussage zur Bernoulli-Gleichung ist KORREKT?",
          options: [
            "An engen Stellen eines Gefäßes steigt der Druck an.",
            "An engen Stellen eines Gefäßes sinkt der Druck (bei steigender Geschwindigkeit).",
            "Die Bernoulli-Gleichung gilt nur für turbulente Strömungen.",
            "Die Bernoulli-Gleichung ignoriert die Strömungsgeschwindigkeit.",
            "Hohe Viskosität ist Voraussetzung für die Bernoulli-Gleichung.",
          ],
          correctIndex: 1,
          explanation:
            "Die Bernoulli-Gleichung (½ρv² + ρgh + p = const) ist der Energieerhaltungssatz für ideale (reibungsfreie, inkompressible) Strömungen. Da die Summe konstant ist: Wenn v steigt (enge Stelle), muss p sinken. Dieser Venturi-Effekt ist medizinisch bedeutsam: An einer Arterienstenose steigt v → p fällt poststenotisch → das Gefäß könnte kollabieren. Die Bernoulli-Gleichung gilt idealisiert für reibungsfreie Strömungen — Reibungseffekte werden im Poiseuille-Gesetz berücksichtigt.",
          hints: [
            "Bernoulli: Wenn ein Term steigt, müssen andere sinken (Summe = const).",
            "Engere Stelle → höhere Geschwindigkeit (Kontinuität) → nach Bernoulli muss der Druck sinken.",
          ],
          difficulty: 2,
          tags: ["bernoulli", "druck", "strömung"],
        },
        {
          question:
            "Ein Koronargefäß wird auf 1/3 seines ursprünglichen Radius verengt. Auf welchen Bruchteil sinkt der Volumenstrom (nach Poiseuille, bei gleichem Δp)?",
          options: ["1/3", "1/9", "1/27", "1/81", "1/243"],
          correctIndex: 3,
          explanation:
            "Poiseuille: Q ~ r⁴. Q_neu/Q_alt = (r_neu/r_alt)⁴ = (1/3)⁴ = 1/81 ≈ 1,2 % des ursprünglichen Flusses. Eine Drittelung des Radius reduziert den Blutfluss auf weniger als 2 % des Normalflusses! Das ist unter Ruhe-Sauerstoffbedarf — das Myokard wäre komplett ischämisch. In der klinischen Praxis versucht der Körper durch Druckerhöhung (Hypertension) gegenzusteuern, was die kardiale Arbeit massiv steigert und einen Teufelskreis initiiert.",
          hints: [
            "Poiseuille: Q ~ r⁴. Wenn r auf 1/3 schrumpft, wird Q zu (1/3)⁴.",
            "(1/3)⁴ = 1/(3⁴) = 1/81.",
          ],
          difficulty: 3,
          tags: ["poiseuille", "gefäßwiderstand", "radius"],
        },
        {
          question:
            "Was ist der hydrostatische Druck in einem Blutgefäß 1,5 m unterhalb des Herzens (ρ_Blut = 1050 kg/m³, g = 10 m/s²)?",
          options: ["105 Pa", "1050 Pa", "10500 Pa", "15750 Pa", "105000 Pa"],
          correctIndex: 3,
          explanation:
            "Hydrostatischer Druck: p = ρ·g·h = 1050 · 10 · 1,5 = 15750 Pa = 15,75 kPa. Umrechnung in mmHg: 15750/133 ≈ 118 mmHg. Das bedeutet: In den Fußvenen eines stehenden Menschen liegt der Blutdruck bei systolisch 120 + 118 ≈ 238 mmHg! Das erklärt das Krampfaderproblem (Veneninsuffizienz bei Stehenden), das Ödemrisiko in den Beinen und warum venöse Ulzera vorwiegend am Unterschenkel auftreten.",
          hints: [
            "Hydrostatischer Druck: p = ρ·g·h. Alle Einheiten SI: kg/m³, m/s², m → Pa.",
            "1050 · 10 · 1,5 = ?",
          ],
          difficulty: 2,
          tags: ["hydrostatik", "druck", "blutdruck"],
        },
        {
          question: "Welche Aussage zur Reynolds-Zahl ist KORREKT?",
          options: [
            "Re > 4000 beschreibt laminare Strömung ohne Wirbel.",
            "Re < 2300 beschreibt laminare Strömung; Re > 4000 turbulente Strömung.",
            "Die Reynolds-Zahl ist dimensionsbehaftet (Einheit: Pa).",
            "Turbulente Strömung ist leiser als laminare Strömung.",
            "Eine hohe Viskosität erhöht die Reynolds-Zahl.",
          ],
          correctIndex: 1,
          explanation:
            "Die Reynolds-Zahl Re = ρ·v·d/η ist dimensionslos. Re < 2300: laminare Strömung (Schichtströmung, geordnet, kein Vermischen, energieeffizient, geräuscharm). Re > 4000: turbulente Strömung (Wirbelbildung, Energieverlust, Geräuscherzeugung). Klinisch: Herzgeräusche entstehen durch Turbulenzen an verengten Herzklappen oder Septumdefekten. Eine hohe Viskosität η steht im Nenner — erhöhte Viskosität senkt Re (begünstigt Laminarströmung).",
          hints: [
            "Re = ρvd/η. Der Nenner ist η (Viskosität) — größeres η → kleineres Re → laminarer.",
            "Laminar bei Re < 2300, turbulent bei Re > 4000. Turbulenz → Geräusche.",
          ],
          difficulty: 2,
          tags: ["reynolds-zahl", "laminare-strömung", "viskosität"],
        },
        {
          question:
            "Ein Taucher befindet sich auf 10 m Tiefe (ρ_Wasser = 1000 kg/m³, g = 10 m/s², p_atm = 100000 Pa). Wie groß ist der Gesamtdruck auf ihn?",
          options: ["10000 Pa", "100000 Pa", "110000 Pa", "200000 Pa", "1000000 Pa"],
          correctIndex: 3,
          explanation:
            "Gesamtdruck = Atmosphärendruck + hydrostatischer Druck = p_atm + ρ·g·h = 100000 + 1000·10·10 = 100000 + 100000 = 200000 Pa = 2 bar. Pro 10 m Tauchtiefe kommt 1 bar Druck hinzu. Bei 10 m Tiefe hat sich der absolute Druck verdoppelt. Das ist relevant für das Boyle-Mariotte-Gesetz: Luft in der Lunge komprimiert sich auf die Hälfte des Volumens. Beim Auftauchen muss diese Kompression durch Ausatmen ausgeglichen werden — sonst Barotrauma.",
          hints: [
            "Gesamtdruck = p_atm + ρgh. Beide Anteile addieren sich.",
            "Hydrostatischer Anteil: 1000 · 10 · 10 = 100000 Pa = 1 bar.",
          ],
          difficulty: 2,
          tags: ["hydrostatik", "druck", "tauchen"],
        },
      ],
    },
    {
      id: "ph-2-04",
      title: "Gravitation und Rotation",
      diagram: "coordinate-system",
      content: `## Gravitation und Rotation

Gravitation und Rotation sind zwei der fundamentalsten Phänomene der Physik. Die Gravitation beschreibt die Anziehungskraft zwischen Massen, Rotation beschreibt die Kreisbewegung und die damit verbundenen Beschleunigungen und Kräfte. Beide sind in der Medizin präsent: von der Erdanziehung auf den menschlichen Körper (Blutverteilung, orthopädische Belastung) bis zur Zentrifugation in der Labormedizin.

## Newtonsches Gravitationsgesetz

Isaac Newton erkannte, dass dieselbe Kraft, die einen Apfel fallen lässt, auch den Mond auf seiner Bahn hält. Das Gravitationsgesetz: F_G = G · (m₁ · m₂)/r², wobei G = 6,674·10⁻¹¹ N·m²/kg² die Gravitationskonstante ist. Die Gravitationskraft ist proportional zu beiden Massen und nimmt mit dem Quadrat des Abstands ab (Abstandsquadratgesetz). Auf der Erdoberfläche vereinfacht sich die Formel: F_G = m·g, wobei g = G·M_Erde/r_Erde² ≈ 9,81 m/s².

**Gewichtskraft vs. Masse:** Masse m ist eine unveränderliche Eigenschaft des Körpers (Menge der Materie). Gewichtskraft F_G = m·g ist die Gravitationskraft auf der Erde. Auf dem Mond (g_Mond ≈ 1,62 m/s²) wiegt derselbe Körper nur 1/6 seines Erdgewichts. In der Schwerelosigkeit (Raumstation, freier Fall) ist F_G = 0 — der Körper ist gewichtslos, aber seine Masse bleibt gleich.

**Keplersche Gesetze:** (1) Planeten bewegen sich auf Ellipsen mit der Sonne im Brennpunkt. (2) Der Fahrstrahl überstreicht in gleichen Zeiten gleiche Flächen — das folgt aus der Drehimpulserhaltung. (3) Das Quadrat der Umlaufzeit ist proportional zur dritten Potenz der großen Halbachse: T² ~ a³. Diese Gesetze gelten analog für Satelliten und ermöglichen die Berechnung von GPS-Satellitenbahnen.

## Kreisbewegung und Zentripetalbeschleunigung

Gleichförmige Kreisbewegung bedeutet konstante Bahngeschwindigkeit v bei sich ständig ändernder Richtung. Die Zentripetalbeschleunigung zeigt immer zur Kreismitte: a_z = v²/r = ω²·r (ω = Winkelgeschwindigkeit in rad/s). Die Zentripetalkraft F_z = m·a_z = m·v²/r = m·ω²·r muss durch eine reale Kraft bereitgestellt werden (Gravitation bei Planeten, Normalkraft auf einer Kurve, Seilspannung).

Wichtige Beziehungen: Umlaufzeit T = 2π/ω. Frequenz f = 1/T. Bahngeschwindigkeit v = ω·r = 2πr/T.

**Scheinkräfte bei Rotation:** Im rotierenden Bezugssystem wirken Scheinkräfte (Trägheitskräfte): Zentrifugalkraft F_cf = m·ω²·r (nach außen gerichtet) und Corioliskraft (bei Bewegungen im rotierenden System).

## Labormedizin: Zentrifugation

Die Zentrifuge nutzt die Zentrifugalkraft zur Trennung von Blutbestandteilen. Bei r = 10 cm und ω = 300 rad/s berechnet sich die Zentrifugalbeschleunigung: a = ω²·r = 90000 · 0,1 = 9000 m/s² ≈ 918 g. In diesem Feld sedimentieren Erythrozyten (dichteste Komponente), dann Leukozyten und Thrombozyten (Buffy coat), dann Plasma (hellgelb) von unten nach oben. Der Hämatokrit wird durch Mikrohämatokrit-Zentrifugation bestimmt.

**Relative Zentrifugalbeschleunigung (RCF):** RCF = (ω²·r)/g. Gängige Vereinfachung: RCF = 1,118 · 10⁻⁵ · n² · r (mit n in rpm und r in mm).

## Rotation des menschlichen Körpers: Biomechanik

Das Trägheitsmoment I = Σmᵢ·rᵢ² (Einheit: kg·m²) ist das rotatorische Analogon zur Masse. Es hängt nicht nur von der Masse ab, sondern auch davon, wie weit die Masse von der Drehachse entfernt ist. Ausgestreckte Arme erhöhen I erheblich — daher drehen Eiskunstläufer mit angezogenen Armen schneller (Drehimpulserhaltung).

**Winkelkinematik:** ω = ω₀ + α·t und θ = θ₀ + ω₀·t + ½·α·t² (mit Winkelbeschleunigung α). Das Drehmoment M = I·α ist das rotatorische Analogon zu F = m·a.

**Stabilität und Gleichgewicht:** Ein Körper ist im stabilen Gleichgewicht, wenn sein Schwerpunkt möglichst tief liegt und die Standfläche groß ist. Das Gleichgewichtskriterium: Die senkrechte Projektion des Schwerpunkts muss innerhalb der Standfläche liegen. Ältere Menschen mit hohem Schwerpunkt und schmaler Standfläche sind sturzgefährdeter.`,
      lernziele: [
        "Das Newtonsche Gravitationsgesetz anwenden und zwischen Masse und Gewichtskraft unterscheiden",
        "Zentripetalbeschleunigung und Zentripetalkraft für gleichförmige Kreisbewegungen berechnen",
        "Das Prinzip der Zentrifugation und die relative Zentrifugalbeschleunigung (RCF) erklären",
        "Trägheitsmoment und Drehimpulserhaltung auf biologische Rotationsbewegungen anwenden",
        "Die Bedingungen für stabiles Gleichgewicht des menschlichen Körpers erläutern",
      ],
      sections: [
        {
          heading: "Gravitation: Universalgesetz und Erdanziehung",
          text: "F_G = G·m₁·m₂/r² — Gravitation wirkt zwischen allen Massen, nimmt mit dem Quadrat des Abstands ab. Auf der Erdoberfläche: F_G = m·g mit g ≈ 9,81 m/s². Wichtig: Masse (unveränderlich, kg) ≠ Gewicht (kraftabhängig, N). In der Schwerelosigkeit (ISS) ist F_G ≈ 0 — Muskeln und Knochen atrophieren durch fehlende mechanische Belastung (Osteoporose im Weltraum). Medizinisch relevant: Orthostase (Aufstehen) erfordert Gegenregulation gegen den hydrostatischen Blutdruck-Abfall.",
          merksatz:
            "F_G = m·g auf der Erdoberfläche. Gewicht ist eine Kraft (N), Masse ist eine Materieeigenschaft (kg). Im Weltraum: Masse bleibt, Gewicht → 0.",
        },
        {
          heading: "Zentripetalkraft und Kreisbewegung",
          text: "Gleichförmige Kreisbewegung: v = ω·r = 2πr/T. Zentripetalbeschleunigung: a_z = v²/r = ω²·r. Zentripetalkraft: F_z = m·v²/r — sie zeigt immer zur Kreismitte und wird durch eine reale Kraft bereitgestellt (Reibung, Gravitation, Seilspannung). In der Zentrifuge: a_z = ω²·r kann Hunderte bis Tausende von g erreichen und trennt Substanzen nach Dichte.",
          merksatz:
            "a_z = v²/r = ω²·r. Zentripetalkraft zeigt zur Mitte — sie ist keine Scheinkraft, sondern eine reale Kraft!",
        },
        {
          heading: "Zentrifuge in der Labormedizin",
          text: "Die Zentrifuge trennt Blutbestandteile durch die RCF: RCF = ω²·r/g. Typische Vollblutaufarbeitung: 300–500 × g für 10 min → Plasma (oben), Buffy coat (Leukozyten + Thrombozyten, Mitte), Erythrozyten (unten). Für Serumgewinnung: 1000–2000 × g. Für DNA-Aufreinigung: Dichtegradientenzentrifugation mit CsCl bei 100.000 × g (Ultrazentrifuge).",
          merksatz:
            "RCF = ω²·r/g. Höheres RCF → schnellere Sedimentation dichter Teilchen. 1 × g = Erdbeschleunigung = 9,81 m/s².",
        },
      ],
      merksätze: [
        "F_G = G·m₁·m₂/r². Abstandsquadratgesetz: Doppelter Abstand → viermal kleinere Kraft.",
        "g = 9,81 m/s² ≈ 10 m/s² auf der Erdoberfläche. Auf dem Mond: g_M ≈ 1,62 m/s².",
        "Gewichtskraft F_G = m·g (Newton). Masse m (Kilogramm). Nicht verwechseln!",
        "Zentripetalbeschleunigung a_z = v²/r = ω²·r. Zeigt zur Kreismitte.",
        "Zentripetalkraft F_z = m·ω²·r — sie ist real, keine Scheinkraft.",
        "ω (Winkelgeschwindigkeit) in rad/s. v = ω·r. T = 2π/ω. f = 1/T.",
        "Trägheitsmoment I = Σmᵢ·rᵢ². Masse fern von der Achse → großes I.",
        "Drehimpuls L = I·ω = const (ohne äußere Drehmomente).",
        "Stabiles Gleichgewicht: Schwerpunkt tief, Standfläche groß, Projektion des SP innerhalb der Standfläche.",
        "Zentrifuge: RCF = ω²·r/g. 3000 rpm, r = 10 cm → RCF ≈ 1000 g.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Prinzip der Laborzentrifuge, leiten Sie die Formel für die relative Zentrifugalbeschleunigung (RCF) her und erläutern Sie, wie Blut durch differentielle Zentrifugation in seine Bestandteile getrennt wird.",
        answer: `Eine Zentrifuge dreht Probenröhrchen mit hoher Winkelgeschwindigkeit ω um eine zentrale Achse. Auf jedes Teilchen der Masse m im Abstand r von der Drehachse wirkt eine Zentripetalbeschleunigung a_z = ω²·r (im Laborsystem) bzw. eine Zentrifugalkraft F_cf = m·ω²·r (im mitrotierenden System, nach außen). Schwerere und dichtere Teilchen erfahren eine größere Kraft und sedimentieren schneller nach außen (zum Boden des Röhrchens).

Herleitung der RCF: Die Zentrifugalbeschleunigung a_cf = ω²·r wird auf die Erdbeschleunigung g normiert: RCF = a_cf/g = ω²·r/g. Mit ω = 2πn (n = Umdrehungen/Sekunde): RCF = 4π²·n²·r/g. Praktisch: Bei n = 3000 rpm = 50 U/s und r = 0,1 m: RCF = 4π²·2500·0,1/9,81 ≈ 1005 g.

Differentielle Bluttrennung: Vollblut enthält Bestandteile unterschiedlicher Dichte und Größe. Bei 300–500 × g (10 min): Erythrozyten (Dichte ca. 1,10 g/ml) sedimentieren nach unten; Leukozyten und Thrombozyten (Dichte ca. 1,04–1,07 g/ml) bilden den Buffy coat; Plasma (Dichte ca. 1,025 g/ml) bleibt oben. Bei höheren RCF (1000–2000 × g) sedimentieren auch Thrombozyten. Für Thrombozyten-Konzentrate: Niedertourige Zentrifugation (200 × g) trennt zunächst Erythrozyten ab, dann hochtourig (1000 × g) pelletiert die Thrombozyten.

Ultrazentrifugation (100.000–500.000 × g): Trennt Lipoproteine (LDL, HDL nach Dichte), Zellorganellen, Ribosomen und sogar Makromoleküle. Dichtegradientenzentrifugation in CsCl oder Saccharose ermöglicht die Isopyknische Trennung — jede Substanz wandert in ihre charakteristische Gleichgewichtsdichte.`,
      },
      klinischerBezug:
        "Die Zentrifugation ist ein zentrales labormedizinisches Werkzeug: Vollblut-Zentrifugation trennt Plasma, Buffy coat und Erythrozyten für Blutbild, Gerinnung und Serumanalyse. Bei der Orthostase (Aufstehen aus dem Liegen) muss das kardiovaskuläre System den hydrostatischen Druckabfall von ca. 18 mmHg kompensieren — bei Versagen: orthostatische Hypotonie mit Synkope. Langfristige Schwerelosigkeit (Astronauten, ISS) führt zu Knochendemineralisierung (ca. 1–2 % Knochenmasse/Monat) und Muskelatrophie durch fehlende Gravitationsbelastung, was neue Therapieansätze für Osteoporose und Immobilisierungssyndrome inspiriert.",
      selfTest: [
        {
          question:
            "Eine Laborzentrifuge dreht mit 3000 rpm (Umdrehungen/Minute) und hat einen Radius von 10 cm. Wie groß ist die Zentripetalbeschleunigung in Einheiten von g (g = 10 m/s²)?",
          options: ["30 g", "100 g", "300 g", "1000 g", "3000 g"],
          correctIndex: 3,
          explanation:
            "ω = 3000 rpm = 3000/60 U/s = 50 U/s = 50 · 2π rad/s ≈ 314 rad/s. a_z = ω²·r = 314² · 0,1 = 98596 · 0,1 ≈ 9860 m/s². RCF = 9860/10 ≈ 986 g ≈ 1000 g. Vereinfachte Formel: RCF ≈ (n/1000)² · r_cm · 112 = (3)² · 10 · 11,2 ≈ 1008 g. Klinische Relevanz: Bei 1000 g sedimentieren Erythrozyten vollständig innerhalb von 5–10 min. Leukozyten und Thrombozyten benötigen höhere RCF oder längere Zeit.",
          hints: [
            "Erst ω umrechnen: rpm → rad/s: ω = 3000/60 · 2π ≈ 314 rad/s.",
            "a_z = ω²·r. Dann RCF = a_z / g (mit g = 10 m/s²).",
          ],
          difficulty: 3,
          tags: ["zentrifuge", "zentripetalbeschleunigung", "rcf"],
        },
        {
          question: "Welche Kraft hält einen Satelliten auf seiner Kreisbahn um die Erde?",
          options: [
            "Zentrifugalkraft (Scheinkraft nach außen)",
            "Trägheitskraft",
            "Gravitationskraft (als Zentripetalkraft)",
            "Magnetkraft der Erde",
            "Der Satellit braucht keine Kraft — er bewegt sich im Vakuum kräftefrei.",
          ],
          correctIndex: 2,
          explanation:
            "Die Gravitationskraft der Erde liefert die notwendige Zentripetalkraft für die Kreisbahn: F_G = m·g(r) = m·v²/r. In der richtigen Höhe und Geschwindigkeit fällt der Satellit ständig um die Erde herum — er bewegt sich nicht kräftefrei (das widerspräche dem Trägheitsgesetz, das geradlinige Bewegung ohne Kraft vorhersagt). Die Zentrifugalkraft ist eine Scheinkraft im mitrotierenden Bezugssystem — sie existiert nicht im Inertialsystem der Erde.",
          hints: [
            "Im Inertialsystem (Erde) wirkt nur eine reale Kraft auf den Satelliten: die Gravitationskraft.",
            "Zentrifugalkraft ist eine Scheinkraft im mitrotierenden System — sie ist keine reale Kraft.",
          ],
          difficulty: 2,
          tags: ["gravitation", "zentripetalkraft", "satellit"],
        },
        {
          question:
            "Ein Autofahrer fährt mit v = 20 m/s durch eine Kurve mit Radius r = 50 m. Wie groß ist die Zentripetalbeschleunigung?",
          options: ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²", "400 m/s²"],
          correctIndex: 2,
          explanation:
            "a_z = v²/r = (20)²/50 = 400/50 = 8 m/s² ≈ 0,82 g. Diese Beschleunigung wirkt zur Kurvenmitte und wird durch die Reibung zwischen Reifen und Fahrbahn bereitgestellt. Auf nasser Fahrbahn (geringer Reibkoeffizient μ ≈ 0,4) kann maximal a_max = μ·g = 0,4·10 = 4 m/s² durch Reibung erzeugt werden — bei 8 m/s² würde das Auto schleudern. Sicherheitsrelevant: Kurvenradius und Geschwindigkeit sind durch a_z = v²/r verknüpft — doppelte Geschwindigkeit erfordert viermal größeren Kurvenradius.",
          hints: ["Zentripetalbeschleunigung: a_z = v²/r.", "20² = 400. 400/50 = 8 m/s²."],
          difficulty: 1,
          tags: ["kreisbewegung", "zentripetalbeschleunigung", "kurvenfahrt"],
        },
        {
          question:
            "Auf dem Mond (g_Mond = 1,6 m/s²) wiegt ein Astronaut 120 N. Wie groß ist seine Masse?",
          options: ["12 kg", "48 kg", "75 kg", "192 kg", "750 kg"],
          correctIndex: 2,
          explanation:
            "F_G = m·g_Mond → m = F_G/g_Mond = 120 N / 1,6 m/s² = 75 kg. Zur Kontrolle: Auf der Erde würde dieser Astronaut wiegen F_G,Erde = 75·10 = 750 N ≈ 76 kg. Das Verhältnis: g_Mond/g_Erde = 1,6/10 = 0,16 ≈ 1/6 — auf dem Mond wiegt man ca. 1/6 seines Erdgewichts. Die Masse bleibt identisch (75 kg), denn sie ist eine intrinsische Eigenschaft des Körpers, unabhängig von g.",
          hints: ["F_G = m · g. Umstellen nach m: m = F_G / g_Mond.", "m = 120 N / 1,6 m/s² = ?"],
          difficulty: 1,
          tags: ["gravitation", "masse", "gewichtskraft"],
        },
        {
          question:
            "Welche Bedingung muss für stabiles Gleichgewicht des menschlichen Körpers im Stand erfüllt sein?",
          options: [
            "Der Schwerpunkt muss möglichst hoch liegen.",
            "Die Standfläche muss möglichst klein sein.",
            "Die senkrechte Projektion des Schwerpunkts muss innerhalb der Standfläche liegen.",
            "Der Körper muss symmetrisch belastet sein.",
            "Das Trägheitsmoment muss maximal sein.",
          ],
          correctIndex: 2,
          explanation:
            "Stabiles Gleichgewicht erfordert, dass die senkrechte Projektion (Lot) des Schwerpunkts innerhalb der Standfläche liegt. Wenn das Lot außerhalb fällt, erzeugt die Gewichtskraft ein Kippmoment — der Körper fällt. Zusätzliche Stabilitätsfaktoren: (1) Tiefer Schwerpunkt (kleines Kippmoment bei Auslenkung), (2) Große Standfläche (toleriert größere Auslenkungen). Ältere Menschen mit reduzierter Muskelkraft und eingeschränkter Tiefensensibilität sind sturzgefährdet.",
          hints: [
            "Stell dir vor, du lehnst dich weit vor — wann fällst du um? Wenn das Lot deines Schwerpunkts vor die Zehen gerät.",
            "Standfläche = Fläche zwischen den Füßen. Projektion des SP muss darin liegen.",
          ],
          difficulty: 2,
          tags: ["statik", "gleichgewicht", "schwerpunkt"],
        },
        {
          question:
            "Ein Raumschiff umkreist die Erde in 400 km Höhe. Dort ist g ≈ 8,7 m/s². Mit welcher Geschwindigkeit umkreist es die Erde (Erdradius r_E = 6400 km)? Nutze: g = v²/r.",
          options: ["2,9 km/s", "7,7 km/s", "11,2 km/s", "28,4 km/s", "40,0 km/s"],
          correctIndex: 1,
          explanation:
            "r = r_E + h = 6400 + 400 = 6800 km = 6,8·10⁶ m. Zentripetalbeschleunigung = Gravitationsbeschleunigung: g = v²/r → v = √(g·r) = √(8,7 · 6,8·10⁶) = √(59,16·10⁶) ≈ 7692 m/s ≈ 7,7 km/s. Das ist die erste kosmische Geschwindigkeit in dieser Höhe. Die ISS umkreist die Erde mit ca. 7,7 km/s und benötigt ca. 90 min für einen Umlauf. Option C (11,2 km/s) wäre die zweite kosmische Geschwindigkeit (Fluchtgeschwindigkeit) von der Erdoberfläche.",
          hints: [
            "Gravitationskraft = Zentripetalkraft: m·g = m·v²/r → v = √(g·r).",
            "Gesamtradius: r = 6400 + 400 = 6800 km = 6,8 × 10⁶ m.",
          ],
          difficulty: 3,
          tags: ["gravitation", "kreisbewegung", "satellit"],
        },
        {
          question: "Welche Aussage zum Trägheitsmoment I ist KORREKT?",
          options: [
            "I ist eine Vektorgröße.",
            "I hängt nur von der Masse ab, nicht von der Massenverteilung.",
            "I ist das rotatorische Analogon zur Masse und hängt von der Massenverteilung um die Drehachse ab.",
            "Kleineres I bedeutet langsamere Rotation bei konstantem Drehimpuls.",
            "Das Trägheitsmoment ist in allen Situationen konstant.",
          ],
          correctIndex: 2,
          explanation:
            "Das Trägheitsmoment I = Σmᵢ·rᵢ² (Einheit: kg·m²) ist eine skalare Größe (kein Vektor). Es ist das rotatorische Pendant zur Masse und beschreibt den Widerstand gegen Winkelgeschwindigkeitsänderungen. Entscheidend: I hängt von der Massenverteilung um die Drehachse ab — je weiter die Masse von der Achse entfernt ist, desto größer I. Beim Eiskunstläufer: Ausgestreckte Arme → großes I → langsame Rotation; Arme angelegt → kleines I → schnelle Rotation (Drehimpulserhaltung: L = I·ω = const → kleines I → großes ω).",
          hints: [
            "I = Σm·r² — der Abstand r von der Drehachse geht quadratisch ein.",
            "Bei L = I·ω = const: Wenn I kleiner wird, muss ω größer werden.",
          ],
          difficulty: 2,
          tags: ["trägheitsmoment", "rotation", "drehimpuls"],
        },
      ],
    },
  ],
};
