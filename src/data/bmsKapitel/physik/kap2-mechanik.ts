import type { Kapitel } from '../types';

export const physKap2: Kapitel = {
  id: 'phys-kap2',
  title: 'Mechanik',
  subject: 'physik',
  icon: '⚙️',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ph-2-01',
      title: 'Newtonsche Gesetze und Kinematik',
      content: `Die klassische Mechanik beschreibt, wie sich Körper unter dem Einfluss von Kräften bewegen. Isaac Newton formulierte im 17. Jahrhundert drei Gesetze, die bis heute — für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit — die Grundlage aller mechanischen Berechnungen bilden. Diese Gesetze sind nicht nur theoretische Konstrukte; sie erklären, warum Knochen brechen, wie das Herz pumpt und weshalb Blut durch Gefäße fließt.

Das erste Newtonsche Gesetz (Trägheitsgesetz) besagt: Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine äußere Kraft auf ihn wirkt. Trägheit ist die Widerstandsfähigkeit eines Körpers gegen Änderungen seines Bewegungszustands. Ein schweres Objekt ist träger als ein leichtes — deshalb ist eine massive Person schwieriger zu beschleunigen und schwieriger zu stoppen. Im Körper manifestiert sich Trägheit beim Aufprall: Bei einem Autounfall bewegen sich Organe mit der Aufprallverzögerung weiter und können sich von Gefäßen abreißen — die gefährlichste Verletzung bei Dezelerationstraumen.

Das zweite Newtonsche Gesetz ist das zentrale Gesetz der Mechanik: F = m × a. Kraft ist gleich Masse mal Beschleunigung. Eine Kraft von 1 Newton beschleunigt 1 kg um 1 m/s². Dieses Gesetz sagt, wie stark eine Kraft einen Körper beschleunigt. Im Körper: Das Herz erzeugt eine Kraft auf das Blut (F = Δp × A, mit Δp = Druckdifferenz und A = Klappenfläche) und beschleunigt es entsprechend der Blutmasse. Kräfte sind Vektoren — sie haben Betrag und Richtung. Mehrere Kräfte überlagern sich zur Gesamtkraft (Superpositionsprinzip).

Das dritte Newtonsche Gesetz (actio = reactio) ist vielleicht das intuitivst überraschendste: Wenn Körper A eine Kraft auf Körper B ausübt, übt B eine gleich große, entgegengesetzte Kraft auf A aus. Wenn Sie auf den Boden treten, tritt der Boden gleichwertig zurück. Im Gelenk: Wenn Muskeln auf den Knochen ziehen, zieht der Knochen gleichwertig auf den Muskel. Diese Reaktionskräfte bestimmen die Belastung von Gelenken und Bandstrukturen.

Die Kinematik beschreibt Bewegung ohne Berücksichtigung von Kräften. Bei gleichförmiger Bewegung gilt v = s/t (Geschwindigkeit = Weg/Zeit). Bei gleichmäßiger Beschleunigung a: v(t) = v₀ + a·t und s(t) = s₀ + v₀·t + ½·a·t². Der freie Fall ist gleichmäßig beschleunigte Bewegung mit der Erdbeschleunigung g = 9,81 m/s²: v(t) = g·t und h(t) = ½·g·t². Beispiel: Ein Objekt fällt 5 Sekunden — erreicht v = 9,81 × 5 = 49 m/s und fällt h = ½ × 9,81 × 25 = 123 m.

Die Kreisbewegung ist eine besondere Form der Beschleunigung: Auch bei konstanter Bahngeschwindigkeit v ändert sich ständig die Richtung, was eine Beschleunigung Richtung Kreismittelpunkt erfordert — die Zentripetalbeschleunigung a_z = v²/r. Die zugehörige Zentripetalkraft F_z = m·v²/r = m·ω²·r. In der Medizin: Bei schnellen Kopfbewegungen wirkt Zentripetalkraft auf das Gehirn; Zentrifugen trennen Blutbestandteile durch die Zentrifugalkraft (Scheinkraft im rotierenden Bezugssystem).`,
      lernziele: [
        'Die drei Newtonschen Gesetze formulieren und Beispiele nennen',
        'Kinematische Grundgleichungen für gleichförmige und gleichmäßig beschleunigte Bewegung anwenden',
        'Freier Fall: Geschwindigkeit und Fallhöhe berechnen',
        'Kreisbewegung und Zentripetalkraft verstehen',
      ],
      sections: [
        {
          heading: 'Die drei Newtonschen Gesetze',
          text: '1. Trägheitsgesetz: Kein Einfluss → kein Richtungswechsel. Trägheit = Widerstand gegen Zustandsänderung (Maß: Masse). 2. Kraftgesetz: F = m·a — Kraft verursacht Beschleunigung proportional zur Masse. Einheit: Newton (N = kg·m/s²). 3. Actio=reactio: Kräfte treten immer paarweise auf — gleich groß, entgegengesetzt. Im klinischen Kontext: Dezelerationstrauma (1. Gesetz), Knochenbruchkraft (2. Gesetz), Gelenkreaktionskräfte (3. Gesetz).',
          merksatz: 'Newton 2: F = m·a — KRAFT macht MASSE beschleunigen',
        },
        {
          heading: 'Kinematik — Gleichungen der Bewegung',
          text: 'Gleichförmige Bewegung (a=0): s = v·t. Gleichmäßig beschleunigt: v(t) = v₀ + a·t; s(t) = v₀t + ½at²; v² = v₀² + 2·a·s. Freier Fall: g = 9,81 m/s² (Erdbeschleunigung), a = g nach unten. Wichtige Zahlenwerte: nach 1 s → v = 9,81 m/s, h = 4,9 m; nach 2 s → v = 19,6 m/s, h = 19,6 m. Der quadratische Term ½at² zeigt: Falltiefe wächst quadratisch mit der Zeit.',
        },
        {
          heading: 'Kreisbewegung und Zentripetalkraft',
          text: 'Winkelgeschwindigkeit ω = 2π/T = 2πf [rad/s]. Bahngeschwindigkeit v = ω·r. Zentripetalbeschleunigung a_z = v²/r = ω²·r — immer zum Kreismittelpunkt gerichtet. Zentripetalkraft F_z = m·v²/r — diese Kraft hält den Körper auf der Kreisbahn. In Laborzentrifugen werden bis zu 100.000 g (Vielfaches der Erdbeschleunigung) erreicht, um Zellbestandteile zu trennen. Der menschliche Körper kann kurzfristig etwa 5–9 g tolerieren.',
        },
      ],
      merksätze: [
        'F = m·a: Kraft in Newton, Masse in kg, Beschleunigung in m/s²',
        'Freier Fall: v = g·t, h = ½·g·t² mit g = 9,81 m/s²',
        'Actio = reactio: Kräfte treten immer als Paare auf, gleich groß, entgegengesetzt',
      ],
      altfrage: {
        question: 'Ein Rettungshubschrauber bringt in 8 Sekunden aus dem Stand eine Geschwindigkeit von 40 m/s auf. Welche mittlere Kraft wirkt auf einen Passagier mit 80 kg Masse?',
        answer: 'Beschleunigung: a = Δv/Δt = 40 m/s / 8 s = 5 m/s². Kraft: F = m·a = 80 kg × 5 m/s² = 400 N. Zusätzlich wirkt das Eigengewicht FG = m·g = 80 × 9,81 = 784,8 N nach unten. Die Gesamtkraft in Flugrichtung beträgt 400 N; das Verhältnis zur Gewichtskraft ist 400/784,8 ≈ 0,51 g — also etwa eine halbe Erdbeschleunigung zusätzlich.',
      },
      klinischerBezug: 'Dezelerationstraumen entstehen, wenn der Körper durch einen plötzlichen Stopp abgebremst wird (Autounfall, Sturz). Innere Organe bewegen sich durch ihre Trägheit weiter und können sich von Befestigungsstrukturen abreißen: Aortenruptur an der Aorta descendens (fixiert am Lig. arteriosum), Leberruptur, Milzruptur. Die wirkende Kraft hängt von Masse und Verzögerung ab (F = m·a). Airbags und Sicherheitsgurte verlängern die Bremszeit und reduzieren so die Kraft nach F = m·Δv/Δt.',
      selfTest: [
        {
          question: 'Ein Körper der Masse 5 kg erfährt eine Nettokraft von 20 N. Wie groß ist seine Beschleunigung?',
          options: ['0,25 m/s²', '4 m/s²', '25 m/s²', '100 m/s²', '15 m/s²'],
          correctIndex: 1,
          explanation: 'Aus F = m·a folgt a = F/m = 20 N / 5 kg = 4 m/s². Newton (N) = kg·m/s², also N/kg = m/s². Eine Nettokraft von 20 N beschleunigt 5 kg mit 4 m/s² — nach 1 Sekunde hat der Körper eine Geschwindigkeit von 4 m/s erreicht.',
          hints: ['Forme F = m·a nach a um: a = F/m.', 'Einheitenkontrolle: N/kg = kg·m/s²/kg = m/s².'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Stein wird fallen gelassen. Nach wie vielen Sekunden erreicht er eine Geschwindigkeit von 29,4 m/s? (g = 9,81 m/s²)',
          options: ['1 s', '2 s', '3 s', '4 s', '5 s'],
          correctIndex: 2,
          explanation: 'v = g·t → t = v/g = 29,4 m/s / 9,81 m/s² = 3 s. Merkhilfe: Nach 1 s hat ein fallender Körper ca. 10 m/s (entspricht g), nach 3 s ca. 30 m/s. In dieser Zeit fällt er h = ½·g·t² = ½ × 9,81 × 9 ≈ 44,1 m.',
          hints: ['Freier Fall: v = g·t. Forme nach t um: t = v/g.', 'g ≈ 10 m/s² (Näherung) → t ≈ 29,4/10 ≈ 3 s.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Newtonsche Gesetz erklärt, warum bei einem Autounfall durch Verzögerung innere Organe Schaden nehmen können?',
          options: [
            'Erstes Gesetz (Trägheit)',
            'Zweites Gesetz (F=ma)',
            'Drittes Gesetz (actio=reactio)',
            'Alle drei gemeinsam',
            'Keines — das ist ein biologisches Phänomen',
          ],
          correctIndex: 0,
          explanation: 'Das erste Newtonsche Gesetz (Trägheitsgesetz) erklärt das Dezelerationstrauma: Wenn das Auto abrupt stoppt, bewegen sich die Organe durch ihre Trägheit weiter in Fahrtrichtung — und reißen von ihren Befestigungsstrukturen ab. Trägheit ist der Widerstand gegen Änderungen des Bewegungszustands.',
          hints: ['Welches Gesetz beschreibt, dass Körper ihren Bewegungszustand behalten wollen?', 'Organe wissen nicht, dass das Auto stoppt — was passiert mit ihnen?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Rennfahrer fährt mit v = 20 m/s auf einer Kreisbahn mit Radius r = 50 m. Wie groß ist die Zentripetalbeschleunigung?',
          options: ['0,4 m/s²', '4 m/s²', '8 m/s²', '400 m/s²', '2 m/s²'],
          correctIndex: 2,
          explanation: 'Zentripetalbeschleunigung: a_z = v²/r = (20 m/s)² / 50 m = 400/50 = 8 m/s². Dies entspricht etwa 0,82 g. Die Zentripetalkraft auf einen 70 kg-Fahrer beträgt F = m·a = 70 × 8 = 560 N.',
          hints: ['Formel: a_z = v²/r. Beachte: v wird quadriert!', '(20)² = 400; 400/50 = 8.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Actio und Reactio — welche Aussage ist korrekt?',
          options: [
            'Actio und Reactio heben sich gegenseitig auf, da sie gleich groß sind',
            'Actio und Reactio wirken immer auf verschiedene Körper',
            'Actio ist immer größer als Reactio',
            'Actio und Reactio wirken immer in dieselbe Richtung',
            'Actio=Reactio gilt nur bei Körpern in Ruhe',
          ],
          correctIndex: 1,
          explanation: 'Actio und Reactio sind gleich groß und entgegengesetzt — aber sie wirken auf verschiedene Körper. Deshalb heben sie sich nicht auf (das würde Kräfte am selben Körper erfordern). Beispiel: Erde zieht Apfel nach unten (actio), Apfel zieht Erde nach oben (reactio) — beide Kräfte gleich groß, aber Erde ist zu schwer, um merklich beschleunigt zu werden.',
          hints: ['Das Schlüsselwort ist: auf welchem Körper wirken die Kräfte?', 'Wenn A und B sich gegenseitig anziehen — wo wirkt jede Kraft?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-2-02',
      title: 'Erhaltungssätze — Energie, Impuls, Drehimpuls',
      content: `Die Erhaltungssätze gehören zu den fundamentalsten Prinzipien der Physik. Sie besagen, dass bestimmte Größen — Energie, Impuls, Drehimpuls — in abgeschlossenen Systemen konstant bleiben, auch wenn sich die Erscheinungsform ändert. Diese Gesetze sind keine willkürlichen Annahmen, sondern folgen mathematisch aus den Symmetrien der Natur: Energieerhaltung aus der Zeitinvarianz der Physikgesetze, Impulserhaltung aus der Raumtranslationssymmetrie, Drehimpulserhaltung aus der Rotationssymmetrie.

Der Energieerhaltungssatz ist der mächtigste dieser Sätze: Die Gesamtenergie eines abgeschlossenen Systems bleibt konstant. Energie kann weder erzeugt noch vernichtet, nur umgewandelt werden. Die kinetische Energie E_kin = ½mv² ist die Energie der Bewegung. Die potenzielle Energie E_pot = mgh ist die Energie der Lage (gespeicherte Energie durch Höhe). Im freien Fall nimmt E_pot ab, während E_kin zunimmt — die Summe bleibt konstant: ½mv² + mgh = const. Auf der Achterbahn wird Höhe in Geschwindigkeit umgewandelt und umgekehrt; ohne Reibung wäre die Bahn ewig in Betrieb.

Im menschlichen Körper gilt ebenfalls Energieerhaltung: Chemische Energie der Nahrung (ATP) wird in mechanische Arbeit (Muskelkontraktion), Wärme und elektrische Energie (Nervensignale) umgewandelt. Der Wirkungsgrad menschlicher Muskeln liegt bei etwa 25–30% — der Rest wird als Wärme abgegeben, was die Körpertemperatur hält.

Arbeit ist das Skalarprodukt aus Kraft und Weg: W = F·s·cos(α), wobei α der Winkel zwischen Kraft und Bewegungsrichtung ist. Eine senkrecht zur Bewegung stehende Kraft (α=90°) verrichtet keine Arbeit — die Normalkraft des Bodens bei horizontaler Bewegung, die Zentripetalkraft bei Kreisbewegung. Leistung P = W/t = F·v ist die Arbeit pro Zeit. Ein Mensch kann kurzfristig etwa 500–700 W Leistung erbringen; im Ausdauerbereich sind es 100–300 W.

Der Impuls p = m·v ist das Produkt aus Masse und Geschwindigkeit. Im Impulssatz gilt: Für abgeschlossene Systeme bleibt der Gesamtimpuls erhalten. Bei einem elastischen Stoß werden sowohl Energie als auch Impuls erhalten — kein Energieverlust in Wärme oder Verformung. Bei einem vollständig unelastischen Stoß kleben die Körper zusammen; Impuls wird erhalten, aber Energie geht in Verformung und Wärme verloren. Zwischen diesen Extremen liegen reale Stöße.

Praktisches Beispiel: Zwei Schlitten, m₁ = 60 kg mit v₁ = 4 m/s und m₂ = 40 kg in Ruhe, stoßen unelastisch zusammen. Impulserhaltung: m₁v₁ = (m₁+m₂)v'. Somit: 60×4 = 100×v' → v' = 2,4 m/s. Anfangsenergie: ½×60×16 = 480 J. Endenergie: ½×100×5,76 = 288 J. Verlust: 192 J — geht in Wärme und Verformung.

Der Drehimpuls L = I·ω (Trägheitsmoment × Winkelgeschwindigkeit) bleibt in abgeschlossenen Systemen erhalten. Ein Eiskunstläufer dreht langsam mit ausgestreckten Armen; zieht er die Arme an den Körper, wird I kleiner, also muss ω größer werden — er dreht schneller. Dieses Prinzip gilt auch für den Herzmuskel, der sich während der Systole verformt und dabei Drehimpuls überträgt.`,
      lernziele: [
        'Energieerhaltung und Umwandlung zwischen kinetischer und potenzieller Energie anwenden',
        'Arbeit und Leistung berechnen',
        'Impulserhaltung bei elastischen und unelastischen Stößen anwenden',
        'Wirkungsgrad als Verhältnis Nutzleistung/Gesamtleistung kennen',
      ],
      sections: [
        {
          heading: 'Energieerhaltung und Energieformen',
          text: 'E_kin = ½mv² (kinetische Energie), E_pot = mgh (gravitationspotenzielle Energie). Gesamtenergie = E_kin + E_pot = konstant (ohne Reibung). Mit Reibung: Energie geht in Wärme verloren. Wirkungsgrad η = E_nutz/E_zu ≤ 1 (nie größer als 1, da kein Perpetuum mobile). Menschlicher Muskel: η ≈ 25–30%. Herzpumpe: η ≈ 15–25%. In der Medizin: ATP-Hydrolyse liefert Energie für Muskelkontraktion, Ionenpumpen, Synthese.',
          merksatz: 'E_kin + E_pot = const (abgeschlossenes System ohne Reibung)',
        },
        {
          heading: 'Arbeit, Leistung und Wirkungsgrad',
          text: 'Arbeit W = F·s·cos(α) [Joule]. Nur Kraftkomponenten in Bewegungsrichtung verrichten Arbeit. Leistung P = W/t = F·v [Watt]. Wirkungsgrad η = P_nutz/P_zu. Beispiele: Treppen steigen — W = m·g·h = 70 × 9,81 × 3 = 2060 J pro Stockwerk. Laufen mit 10 km/h: ca. 700 W Gesamtleistung (η ≈ 0,25 → Nutzleistung ≈ 175 W; Wärme 525 W). Herzarbeit pro Schlag: W ≈ 1 J; Herzleistung ≈ 1–5 W.',
        },
        {
          heading: 'Stoßgesetze — Impulserhaltung',
          text: 'Impuls p = m·v [kg·m/s]. Impulserhaltung: Σp_vor = Σp_nach (immer). Energieerhaltung: nur beim elastischen Stoß. Elastischer Stoß (z.B. Billardkugeln): Impuls + Energie erhalten. Unelastischer Stoß (z.B. Knet): Impuls erhalten, Energie verloren. Vollständig unelastisch: Körper kleben zusammen, maximaler Energieverlust. Medizin: Stoßwellenlithotripsie nutzt Druckwellen zur Nierensteinzerstörung; Herzschrittmacher-Impuls überträgt Impuls ans Herz.',
        },
      ],
      merksätze: [
        'Energieerhaltung: E_kin + E_pot = const; η = P_nutz/P_zu ≤ 1',
        'Impulserhaltung: Σ(m·v)_vorher = Σ(m·v)_nachher — immer gültig',
        'Elastischer Stoß: Impuls + Energie erhalten; unelastisch: nur Impuls erhalten',
      ],
      altfrage: {
        question: 'Eine Patientin (60 kg) steigt eine Treppe mit 12 Stufen (je 18 cm hoch) in 6 Sekunden. Welche mechanische Leistung bringt sie auf, und wie viel Wärme wird bei η=0,25 abgegeben?',
        answer: 'Höhe: h = 12 × 0,18 m = 2,16 m. Arbeit: W = m·g·h = 60 × 9,81 × 2,16 = 1270 J. Leistung: P_nutz = W/t = 1270/6 ≈ 212 W. Gesamtleistung: P_ges = P_nutz/η = 212/0,25 = 847 W. Wärmeleistung: P_wärme = P_ges - P_nutz = 847 - 212 = 635 W. Der Körper gibt also dreimal mehr Wärme ab als mechanische Arbeit — daher schwitzt man beim Treppensteigen.',
      },
      klinischerBezug: 'In der Notaufnahme ist die Kenntnis von Erhaltungssätzen klinisch relevant: Bei einem Sturz aus 2 Metern Höhe erreicht der Patient eine Aufprallgeschwindigkeit von v = √(2gh) = √(2 × 9,81 × 2) ≈ 6,3 m/s ≈ 22,5 km/h. Die kinetische Energie E = ½mv² = ½ × 70 × 39,6 ≈ 1386 J muss beim Aufprall auf den Boden absorbiert werden. Je kürzer die Bremszeit, desto größer die Kraft. Auf hartem Boden mit Bremszeit von Millisekunden entstehen enorme Aufprallkräfte, die zu Frakturen führen.',
      selfTest: [
        {
          question: 'Ein Ball der Masse 0,5 kg fällt aus 5 m Höhe. Welche Geschwindigkeit hat er kurz vor dem Aufprall? (g = 10 m/s²)',
          options: ['5 m/s', '10 m/s', '25 m/s', '50 m/s', '7,07 m/s'],
          correctIndex: 1,
          explanation: 'Energieerhaltung: E_pot = E_kin → mgh = ½mv² → v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s. Alternativ über Kinematik: v² = 2gh → v = 10 m/s. Die Masse kürzt sich heraus — alle Körper fallen gleich schnell (Galileo).',
          hints: ['Setze E_pot = E_kin: mgh = ½mv². Die Masse kürzt sich.', 'v = √(2gh) — merkwürdige Wurzelformel, aber leicht herstellbar.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Eigenschaft bleibt bei einem vollständig unelastischen Stoß erhalten?',
          options: [
            'Kinetische Energie',
            'Potenzielle Energie',
            'Impuls',
            'Drehimpuls und Impuls',
            'Keine Erhaltungsgröße bleibt erhalten',
          ],
          correctIndex: 2,
          explanation: 'Bei jedem Stoß (elastisch oder unelastisch) bleibt der Impuls erhalten, sofern keine äußeren Kräfte wirken. Beim vollständig unelastischen Stoß gehen die Körper zusammen und maximale kinetische Energie wird in Wärme/Verformung umgewandelt. Die Gesamtenergie bleibt erhalten (1. Hauptsatz), aber kinetische Energie nimmt ab.',
          hints: ['Impulserhaltung gilt immer, Energieerhaltung (kinetisch) nur beim elastischen Stoß.', 'Was unterscheidet elastischen von unelastischem Stoß? → Energieverlust!'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Person (70 kg) hebt einen 20 kg-Koffer auf 1,5 m Höhe in 3 Sekunden. Welche mittlere Leistung wird aufgewendet? (g = 10 m/s²)',
          options: ['10 W', '30 W', '100 W', '300 W', '450 W'],
          correctIndex: 2,
          explanation: 'Arbeit: W = m·g·h = 20 × 10 × 1,5 = 300 J. Leistung: P = W/t = 300/3 = 100 W. Beachte: Nur die Masse des Koffers (20 kg) ist relevant, da die Person selbst nicht gehoben wird. 100 W entspricht etwa der Leistung einer alten Glühbirne — eine alltagstaugliche Referenz.',
          hints: ['Arbeit W = m·g·h mit der Masse des Koffers (20 kg), nicht der Person.', 'Leistung P = W/t.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Der Wirkungsgrad des menschlichen Muskels beträgt ungefähr:',
          options: ['5–10%', '25–30%', '50–60%', '75–80%', 'nahezu 100%'],
          correctIndex: 1,
          explanation: 'Der menschliche Muskel wandelt etwa 25–30% der chemischen Energie (ATP) in mechanische Arbeit um. Der Rest (70–75%) wird als Wärme abgegeben — was erklärt, warum wir beim Sport schwitzen und warm werden. Herzmuskel: η ≈ 15–25%. Elektromotoren erreichen η ≈ 90–95%.',
          hints: ['Der Muskel ist thermodynamisch keine optimale Maschine.', 'η = mechanische Nutzleistung / ATP-Energiezufuhr ≈ 0,25–0,30.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Schlitten (m=50 kg, v=6 m/s) prallt auf einen ruhenden Schlitten (m=50 kg) und sie fahren zusammen weiter (unelastischer Stoß). Welche Geschwindigkeit hat das System danach?',
          options: ['6 m/s', '4 m/s', '3 m/s', '2 m/s', '1 m/s'],
          correctIndex: 2,
          explanation: "Impulserhaltung: m₁·v₁ = (m₁+m₂)·v'. 50×6 = 100×v' → v' = 300/100 = 3 m/s. Die Energie halbiert sich: E_kin vorher = ½×50×36 = 900 J; E_kin nachher = ½×100×9 = 450 J. 450 J werden als Verformungsenergie/Wärme abgegeben.",
          hints: ["Impulserhaltung: m₁v₁ + m₂v₂ = (m₁+m₂)v'.", "Da m₁=m₂ und v₂=0: v' = v₁/2."],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-2-03',
      title: 'Statik, Druck und Hydrodynamik',
      content: `Flüssigkeiten und Gase verhalten sich grundlegend anders als feste Körper: Sie können fließen, sich verformen und Druck in alle Richtungen gleichmäßig weiterleiten. Die Physik der ruhenden Flüssigkeiten (Hydrostatik) und strömenden Flüssigkeiten (Hydrodynamik) ist unmittelbar relevant für das Verständnis des Blutkreislaufs, der Atmung und zahlreicher medizinischer Geräte.

Druck ist definiert als Kraft pro Fläche: p = F/A, gemessen in Pascal (Pa = N/m²). Druck wirkt in Flüssigkeiten isotrop — gleich in alle Richtungen. Das ist das Pascalsche Prinzip: Ein in einer Flüssigkeit erzeugter Druckanstieg überträgt sich gleichmäßig auf alle Bereiche. Hydraulische Pressen nutzen dieses Prinzip: Eine kleine Kraft auf kleine Fläche erzeugt denselben Druckanstieg wie eine große Kraft auf große Fläche — F₁/A₁ = F₂/A₂.

Der hydrostatische Druck p = ρ·g·h hängt nur von der Flüssigkeitsdichte ρ, der Erdbeschleunigung g und der Tiefe h ab — unabhängig von Gefäßform und -volumen. Das ist das Prinzip der kommunizierenden Röhren. Im Körper: Der venöse Blutdruck in den Beinvenen im Stehen beträgt: p = ρ·g·h = 1060 kg/m³ × 9,81 m/s² × 1,5 m ≈ 15.600 Pa ≈ 117 mmHg — viel mehr als der arterielle Druck (80 mmHg diastolisch). Daher ist aktiver Venenpumpenmechanismus durch Muskeln und Venenklappen lebenswichtig.

Das Archimedische Prinzip beschreibt den Auftrieb: Ein in eine Flüssigkeit eingetauchter Körper erfährt eine nach oben gerichtete Auftriebskraft F_A = ρ_Fluid × g × V_verdrängt. Ein Körper schwimmt, wenn F_A ist größer oder gleich F_Gewicht, also wenn seine mittlere Dichte kleiner als die der Flüssigkeit ist. Lunge hat durch enthaltene Luft eine geringe Dichte — daher sind Lungen im Wasser auftriebspositiv. In der Medizin: Ultraschalluntersuchung von Feten — der Fetus schwimmt im Fruchtwasser (Dichte ≈ Dichte Körper). Spezifisches Gewicht des Urins gibt Auskunft über Konzentrationsfähigkeit der Nieren.

Die Bernoulli-Gleichung beschreibt die Energieerhaltung in strömenden Flüssigkeiten: p + ½ρv² + ρgh = const. Dies bedeutet: Wo die Strömungsgeschwindigkeit v zunimmt (Engstelle), fällt der statische Druck p ab — und umgekehrt. Dies erklärt den Venturi-Effekt: Bei einer Gefäßeinengung beschleunigt das Blut, der Druck fällt. Hinter der Einengung kann es zur turbulenten Rückströmung kommen, was Arteriosklerose begünstigt.

Das Hagen-Poiseuille-Gesetz beschreibt den Volumenstrom durch ein zylindrisches Gefäß: Q = π·r⁴·Δp/(8·η·L). Der Radius geht mit der vierten Potenz ein — eine Halbierung des Gefäßradius reduziert den Durchfluss auf 1/16! Das ist der entscheidende Punkt der Gefäßphysiologie: Gefäße regulieren Blutfluss primär durch Änderung ihres Radius (Vasokonstriktion/Vasodilatation). Ein um 10% verengtes Gefäß hat bereits etwa 35% weniger Durchfluss. Viskosität η des Blutes (3–4 mPa·s, abhängig von Hämatokrit) und Gefäßlänge L spielen ebenfalls eine Rolle, sind aber physiologisch weniger variabel als r.`,
      lernziele: [
        'Druck, hydrostatischen Druck und Auftrieb berechnen',
        'Bernoulli-Gleichung verstehen und auf Blutfluss anwenden',
        'Hagen-Poiseuille-Gesetz und klinische Relevanz von Gefäßradius kennen',
        'Pascalsches Prinzip bei hydraulischen Systemen erläutern',
      ],
      sections: [
        {
          heading: 'Druck und hydrostatisches Prinzip',
          text: 'Druck p = F/A [Pa = N/m²]. Hydrostatischer Druck: p = ρ·g·h — proportional zu Dichte, g und Tiefe. Pascalsches Prinzip: Druckänderung überträgt sich gleichmäßig. Auftrieb: F_A = ρ_Fluid·g·V (Archimedisches Prinzip). Klinisch: Venöser Blutdruck in Beinvenen im Stehen ≈ 80–120 mmHg hydrostatisch. Ödeme entstehen, wenn hydrostatischer Druck den kolloidosmotischen Druck übersteigt. Messung des Liquordrucks (normal: 7–15 cmH₂O) durch Lumbalpunktion.',
          merksatz: 'p_hydrost = ρ·g·h — nur von Tiefe abhängig, nicht von Gefäßform!',
        },
        {
          heading: 'Bernoulli-Gleichung und Strömungsdynamik',
          text: 'Bernoulli: p + ½ρv² + ρgh = const. Bei Einengung: v↑ → p↓ (Venturi-Effekt). Bei Erweiterung: v↓ → p↑. Turbulente vs. laminare Strömung: Reynolds-Zahl Re = ρ·v·d/η; Re < 2000: laminar; Re > 4000: turbulent. Herzgeräusche entstehen durch turbulente Strömung. Bernoulli in der Medizin: Doppler-Echokardiographie misst v über Herzklappen, aus der man Δp = 4·v² (vereinfacht nach Bernoulli) berechnet.',
        },
        {
          heading: 'Hagen-Poiseuille und Gefäßwiderstand',
          text: 'Hagen-Poiseuille: Q = π·r⁴·Δp/(8·η·L). Strömwiderstand R = 8·η·L/(π·r⁴). Kritisch: r⁴-Abhängigkeit! Verdoppelung von r → 16-facher Fluss. Halbierung von r → 1/16 Fluss. Klinisch: Aspirin verdünnt Blut (senkt η); Nitroglycerin weitet Gefäße (erhöht r); Atherosklerose verengt Gefäße (r↓ → Q stark↓). Vergleich mit elektrischem Strom: Q entspricht I, Δp entspricht U, hydraulischer R entspricht elektrischem R.',
        },
      ],
      merksätze: [
        'Hagen-Poiseuille: Q ~ r⁴ — Gefäßradius halbieren → Fluss 16-fach kleiner!',
        'Bernoulli: Mehr Geschwindigkeit → weniger Druck (Venturi-Effekt)',
        'Auftrieb F_A = ρ_Fluid·g·V_verdrängt (Archimedes)',
      ],
      altfrage: {
        question: 'Bei einer Arteriosklerose reduziert sich der Radius einer Koronararterie von 3 mm auf 2 mm. Um welchen Faktor ändert sich der Blutfluss Q laut Hagen-Poiseuille (bei gleichem Δp)?',
        answer: 'Q ~ r⁴. Faktor = (2/3)⁴ = 16/81 ≈ 0,198. Der Blutfluss sinkt auf etwa 20% des ursprünglichen Werts — also eine Reduktion um 80%! Eine 33%-ige Reduktion des Radius führt zu 80%-iger Flussreduktion. Das erklärt, warum Koronarstenosen von 50% des Lumens (entspricht r-Reduktion um 29%) bereits zu schwerer Ischämie führen können.',
      },
      klinischerBezug: 'Das Hagen-Poiseuille-Gesetz ist das physikalische Fundament der Kreislaufphysiologie. Arteriolen (kleine Widerstandsgefäße) regulieren durch Vasokonstriktion und Vasodilatation den Blutfluss in Organe. Ödementstehung: Wenn kapillärer hydrostatischer Druck (p_hyd ≈ 32 mmHg arteriell, 15 mmHg venös) den kolloidal-osmotischen Druck (ca. 25 mmHg) übersteigt, tritt Flüssigkeit ins Interstitium aus. Herzinsuffizienz erhöht venösen Druck → Ödem in Lunge und Unterschenkel.',
      selfTest: [
        {
          question: 'In welcher Tiefe unter Wasser beträgt der hydrostatische Druck 98.100 Pa? (ρ_Wasser = 1000 kg/m³, g = 9,81 m/s²)',
          options: ['1 m', '5 m', '10 m', '100 m', '20 m'],
          correctIndex: 2,
          explanation: 'p = ρ·g·h → h = p/(ρ·g) = 98.100/(1000 × 9,81) = 10 m. In 10 m Wassertiefe beträgt der hydrostatische Druck ≈ 1 atm = 101.325 Pa ≈ 98.100 Pa (leichte Abweichung durch g-Näherung). Daher: Gesamtdruck in 10 m Tiefe ≈ 2 atm.',
          hints: ['Forme p = ρ·g·h nach h um: h = p/(ρ·g).', 'Bekannte Näherung: 10 m Wassertiefe ≈ 1 atm Überdruck.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Nach dem Hagen-Poiseuille-Gesetz — wie verändert sich der Blutfluss, wenn der Gefäßradius auf das Doppelte zunimmt?',
          options: ['Verdoppelt', 'Vervierfacht', 'Verachtfacht', 'Versechzehnfacht', 'Bleibt gleich'],
          correctIndex: 3,
          explanation: 'Q ~ r⁴. Wenn r → 2r, dann Q → (2r)⁴/r⁴ = 2⁴ = 16. Der Fluss nimmt um den Faktor 16 zu. Diese extrem starke Abhängigkeit erklärt, warum kleine Radienänderungen durch Vasodilatation enorme Auswirkungen auf die Durchblutung haben.',
          hints: ['Q ~ r⁴ bedeutet: Verdopplung von r → Q mal 2⁴.', '2⁴ = 2 × 2 × 2 × 2 = 16.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die Bernoulli-Gleichung erklärt, warum bei einer Gefäßeinengung (Stenose):',
          options: [
            'Der Druck an der Engstelle zunimmt',
            'Die Geschwindigkeit an der Engstelle abnimmt',
            'Der Druck an der Engstelle abnimmt und die Geschwindigkeit zunimmt',
            'Druck und Geschwindigkeit beide zunehmen',
            'Bernoulli gilt nur für Gase, nicht für Blut',
          ],
          correctIndex: 2,
          explanation: 'Nach Bernoulli: p + ½ρv² = const. Bei konstanter Höhe gilt: Nimmt v zu, muss p abnehmen. An einer Stenose wird das Blut beschleunigt (v↑) und der statische Druck fällt (p↓). Hinter der Stenose verlangsamt das Blut sich wieder und der Druck steigt — allerdings entsteht dort oft turbulente Strömung und ein Druckverlust.',
          hints: ['Bernoulli: p + ½ρv² = const → wenn v↑, dann p↓.', 'Denke an einen Gartenschlauch, den man zukneift: Wasser schießt schneller heraus.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was beschreibt das Archimedische Prinzip?',
          options: [
            'Die Kraft auf eine schwimmende Kugel proportional zu ihrem Gewicht',
            'Die Auftriebskraft auf einen eingetauchten Körper gleich dem Gewicht der verdrängten Flüssigkeit',
            'Den Druckverlauf in einer strömenden Flüssigkeit',
            'Die Abhängigkeit des Drucks von der Tiefe',
            'Das Gleichgewicht zwischen Druck und Auftrieb an der Wasseroberfläche',
          ],
          correctIndex: 1,
          explanation: 'Das Archimedische Prinzip: F_A = ρ_Fluid·g·V_verdrängt = Gewichtskraft der verdrängten Flüssigkeitsmenge. Ein Körper schwimmt, wenn F_A ist größer oder gleich F_Gewicht, also wenn seine mittlere Dichte kleiner als die des Fluids ist. Medizinisch: Eine luftgefüllte Lunge schwimmt im Wasser (relevant in der Forensik für Ertrinkungsfälle).',
          hints: ['Auftrieb = Gewicht der verdrängten Flüssigkeit — nicht des Körpers.', 'V_verdrängt ist das eingetauchte Volumen, nicht unbedingt das gesamte Körpervolumen.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Aussage zur Viskosität des Blutes ist korrekt?',
          options: [
            'Blutviskosität ist unabhängig vom Hämatokrit',
            'Eine höhere Viskosität erhöht laut Hagen-Poiseuille den Blutfluss',
            'Blutviskosität liegt bei 3–4 mPa·s und hängt stark vom Hämatokrit ab',
            'Blutviskosität ist identisch mit der von Wasser (1 mPa·s)',
            'Viskosität hat keinen Einfluss auf den Gefäßwiderstand',
          ],
          correctIndex: 2,
          explanation: 'Blut hat eine höhere Viskosität als Wasser (3–4 mPa·s vs. 1 mPa·s), hauptsächlich wegen der Erythrozyten. Der Hämatokrit (Volumenanteil der Erythrozyten) ist der wichtigste Bestimmungsfaktor der Blutviskosität. Bei Polyzythämie (Hkt > 55%) steigt die Viskosität stark an, erhöht den Gefäßwiderstand (R steigt mit η nach Hagen-Poiseuille) und belastet das Herz.',
          hints: ['Hagen-Poiseuille: R = 8·η·L/(π·r⁴) — R steigt mit η.', 'Erythrozyten machen Blut zähflüssiger als reines Wasser.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-2-04',
      title: 'Gravitation und Rotation',
      content: `Die Gravitation ist eine der vier fundamentalen Wechselwirkungen in der Natur und die erste, die mathematisch präzise beschrieben wurde. Newtons Gravitationsgesetz lautet: F = G·m₁·m₂/r², wobei G = 6,674 × 10⁻¹¹ N·m²/kg² die Gravitationskonstante ist. Jede Masse zieht jede andere Masse an — die Kraft nimmt quadratisch mit dem Abstand ab (Abstandsquadratgesetz) und ist proportional zum Produkt der Massen.

Die Erdbeschleunigung g ergibt sich aus dem Gravitationsgesetz: g = G·M_Erde/R_Erde² ≈ 9,81 m/s². Auf der Erdoberfläche ist g praktisch konstant, variiert aber mit Höhe und geografischer Breite leicht. Auf dem Mond beträgt g_Mond ≈ 1,62 m/s² (ca. g/6), auf Mars g_Mars ≈ 3,72 m/s². Die Kenntnis von g ist fundamentale Voraussetzung für alle Fallberechnungen, Druckmessungen und biomechanischen Analysen.

Das Gravitationspotenzial φ = −G·M/r ist die potenzielle Energie pro Einheitsmasse. Je tiefer man sich in einem Gravitationsfeld befindet, desto negativer das Potential — Energie muss aufgewandt werden, um aus einem Gravitationsfeld zu entkommen (Fluchtgeschwindigkeit). Im medizinischen Alltag: Die potenzielle Energie E_pot = mgh wird bei der Berechnung von Sturzfolgen und bei der Auslegung von medizinischen Geräten (z.B. Infusionsständer) benötigt.

Drehmoment M = F·r·sin(α) beschreibt die Drehwirkung einer Kraft auf einen Körper. Das Hebelgesetz: F₁·r₁ = F₂·r₂ (Gleichgewicht). Ein langer Hebel erhöht die Wirkung einer kleinen Kraft. Im Körper sind Muskeln, Knochen und Gelenke als Hebelsysteme organisiert. Der Bizeps insertiert nahe am Ellenbogengelenk (kurzer Hebelarm), während die Last an der Hand einen langen Hebelarm hat. Das macht Muskeln mechanisch ineffizient (Kraft >> Last), ermöglicht aber große Bewegungsgeschwindigkeiten.

Die Rotationsenergie E_rot = ½·I·ω² (analog zu E_kin = ½mv²) hängt vom Trägheitsmoment I = Σmᵢrᵢ² ab. I ist das Rotationsäquivalent der trägen Masse: Es beschreibt, wie schwer ein Körper rotationsmäßig zu beschleunigen ist. Je weiter die Masse vom Rotationszentrum entfernt ist, desto größer I. Eine Hohlkugel hat höheres I als eine Vollkugel gleicher Masse. Der Drehimpuls L = I·ω ist beim kreisenden Eiskunstläufer konstant: Zieht er die Arme an (I kleiner), dreht er schneller (ω größer).

Im Skelett wirken Muskeln oft mit kurzen Hebelarmen (nahe dem Gelenk): Der Patellarsehnenreflex nutzt den kurzen Hebelarm des Quadrizeps am Tibiatuberkel. Das Hüftgelenk trägt beim einbeinigen Stehen eine Kraft, die etwa 3-fach größer als das Körpergewicht ist — berechnet aus dem Kräftegleichgewicht der Drehmomente. Dies erklärt, warum Hüftgelenke bei gleicher Belastung wie beim Gehen langfristig verschleißen.`,
      lernziele: [
        'Newtonsches Gravitationsgesetz und Erdbeschleunigung herleiten',
        'Drehmoment, Hebelgesetz und Gleichgewichtsbedingungen anwenden',
        'Trägheitsmoment und Rotationsenergie berechnen',
        'Biomechanische Hebelwirkungen im Skelett analysieren',
      ],
      sections: [
        {
          heading: 'Gravitation und Gravitationspotenzial',
          text: 'F_Grav = G·m₁·m₂/r² mit G = 6,674 × 10⁻¹¹ N·m²/kg². Erdbeschleunigung: g = G·M_Erde/R_Erde² = 9,81 m/s² (auf Meereshöhe). Auf dem Mond: g_Mond ≈ g/6 = 1,62 m/s² — Gewichtskraft fällt auf 1/6. Gravitationspotenzial: φ = −G·M/r [J/kg]; potenzielle Energie: E_pot = m·φ = −G·m·M/r. Klinisch relevant: Sturzhöhe berechnen (E_pot = mgh), Infusionsdruck (Infusionsbeutel muss höher als Patient hängen).',
          merksatz: 'g = G·M/r² ≈ 9,81 m/s² auf Erdoberfläche; auf Mond ≈ 1,62 m/s²',
        },
        {
          heading: 'Drehmoment und Hebelgesetz',
          text: 'Drehmoment M = F·r·sin(α) [N·m]; r = Hebelarm (senkrechter Abstand Kraftlinie–Drehpunkt). Gleichgewicht: ΣM = 0 → F₁·r₁ = F₂·r₂. Menschliche Biomechanik als Hebelsystem: Bizeps (Insertion ≈ 5 cm vom Ellenbogen) trägt Last an Hand (≈ 35 cm). Übersetzung: 35/5 = 7 — Muskel muss 7-fache Kraft der Last aufbringen! Dafür: Geschwindigkeit der Hand ist 7-fach höher als Muskelverkürzung.',
        },
        {
          heading: 'Rotationsenergie und Trägheitsmoment',
          text: 'Trägheitsmoment I = Σmᵢ·rᵢ² [kg·m²]. Für spezielle Körper: Vollzylinder I = ½mR², Vollkugel I = 2/5 mR², Hohlzylinder I = mR². Rotationsenergie E_rot = ½·I·ω². Drehimpuls L = I·ω = const (ohne äußeres Drehmoment). Eiskunstläuferin mit ausgestreckten Armen: I groß → ω klein. Arme angelegt: I klein → ω groß (schnellere Drehung). Anwendung: Gyroeffekt, Herzrotation bei Systole.',
        },
      ],
      merksätze: [
        'Hebelgesetz: F₁·r₁ = F₂·r₂; Muskeln haben kurze Hebelarme → hohe Kraft, kurze Längenänderung',
        'Drehimpulserhaltung: I·ω = const — Arme anziehen → schneller drehen',
        'F_Grav = G·m₁·m₂/r² — Abstandsquadratgesetz',
      ],
      altfrage: {
        question: 'Ein Mensch (70 kg) trägt eine Aktentasche (10 kg) in der rechten Hand. Das Hüftgelenk ist der Drehpunkt. Der Hebelarm der Tasche (rechts) beträgt 30 cm, der Hebelarm der Abduktoren (links) beträgt 8 cm. Welche Kraft müssen die Hüftabduktoren aufbringen, um das Gleichgewicht zu halten?',
        answer: 'Drehmoment der Tasche: M_T = 10 × 9,81 × 0,30 = 29,4 N·m. Gleichgewicht: F_Abduktor × 0,08 = 29,4 N·m → F_Abduktor = 29,4/0,08 = 367,5 N ≈ 37,5 kg-Äquivalent. Zum Vergleich: 10 kg Tasche erzeugt 368 N Abduktorenkraft — wegen des unvorteilhaften Hebelarms. Genau deshalb schont man das Hüftgelenk, indem man auf der betroffenen Seite einen Stock trägt (verlängert Hebelarm der Stützseite).',
      },
      klinischerBezug: 'In der Orthopädie sind Hebelgesetze allgegenwärtig. Das Kniegelenk beim Sitzen: Der Quadrizeps (Streckmuskel) wirkt mit einem kurzen Hebelarm (Patella) gegen die Gravitation, die am langen Unterschenkel-Hebelarm zieht. Bei 90° Knieflexion müssen die Strecksehnen das Vielfache des Unterschenkelgewichts aufbringen. Das erklärt, warum Treppensteigen für Kniepatienten schmerzhaft ist. Hüfttotalendoprothesen müssen diese Hebelkräfte (bis zu 3–4 × Körpergewicht beim Gehen) langfristig standhalten.',
      selfTest: [
        {
          question: 'Auf dem Mars beträgt g_Mars ≈ 3,72 m/s². Wie viel würde eine 70 kg-Person auf dem Mars wiegen?',
          options: ['70 N', '260 N', '686 N', '3720 N', '189 N'],
          correctIndex: 1,
          explanation: 'Gewichtskraft F_G = m·g_Mars = 70 kg × 3,72 m/s² = 260,4 N. Zum Vergleich: Auf der Erde wiegt dieselbe Person 70 × 9,81 = 686,7 N. Auf dem Mars wäre man also etwa 38% des Erdgewichts. Masse bleibt immer 70 kg — Gewicht ist ortsabhängig.',
          hints: ['F_G = m·g — verwende g_Mars = 3,72 m/s², nicht 9,81.', 'Gewicht (N) ist nicht dasselbe wie Masse (kg).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Kind (25 kg) sitzt 2 m vom Drehpunkt einer Wippe entfernt. In welchem Abstand muss ein Erwachsener (75 kg) sitzen, um die Wippe ins Gleichgewicht zu bringen?',
          options: ['0,33 m', '0,67 m', '1,0 m', '2,0 m', '6,0 m'],
          correctIndex: 1,
          explanation: 'Hebelgesetz: F₁·r₁ = F₂·r₂ → m₁·g·r₁ = m₂·g·r₂ → m₁·r₁ = m₂·r₂. 25 × 2 = 75 × r₂ → r₂ = 50/75 = 0,67 m. Der Erwachsene muss nur 0,67 m vom Drehpunkt sitzen — deutlich näher als das Kind, weil er schwerer ist.',
          hints: ['Hebelgesetz: F₁·r₁ = F₂·r₂; g kürzt sich heraus.', 'r₂ = m₁·r₁/m₂ = 25×2/75 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zum Trägheitsmoment I ist korrekt?',
          options: [
            'I hängt nur von der Masse ab',
            'I ist gleich der trägen Masse',
            'I hängt von der Massenverteilung relativ zur Rotationsachse ab',
            'I ist für alle Körper gleicher Masse identisch',
            'I hat die Einheit kg/m²',
          ],
          correctIndex: 2,
          explanation: 'Das Trägheitsmoment I = Σmᵢ·rᵢ² hängt sowohl von der Gesamtmasse als auch davon ab, wie diese Masse relativ zur Rotationsachse verteilt ist. Gleiche Masse weiter von der Achse entfernt → größeres I → schwerer zu beschleunigen. Eine Hohlscheibe hat größeres I als eine Vollscheibe gleicher Masse, weil die Masse weiter von der Achse entfernt ist.',
          hints: ['I = Σm·r² — der Abstand r zur Rotationsachse geht quadratisch ein.', 'Eiskunstläuferin: Arme ausgestreckt → große r → großes I → langsame Rotation.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Der Drehimpuls eines rotierenden Systems bleibt erhalten, wenn:',
          options: [
            'Die Energie konstant bleibt',
            'Kein äußeres Drehmoment wirkt',
            'Die Winkelgeschwindigkeit konstant bleibt',
            'Die Masse konstant bleibt',
            'Das Trägheitsmoment konstant bleibt',
          ],
          correctIndex: 1,
          explanation: 'Der Drehimpuls L = I·ω bleibt erhalten, wenn kein äußeres Drehmoment auf das System wirkt — analog zur linearen Impulserhaltung (keine äußere Kraft). Wenn I sich ändert (z.B. durch Arme anziehen), ändert sich ω entsprechend, sodass L = I·ω konstant bleibt.',
          hints: ['Analogie: Impuls bleibt erhalten wenn keine äußere Kraft → Drehimpuls wenn kein äußeres Drehmoment.', 'L = I·ω = const → wenn I kleiner, dann ω größer.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zur Gravitationskraft zwischen Erde und Mond ist korrekt?',
          options: [
            'Die Erde zieht den Mond stärker an als der Mond die Erde',
            'Der Mond zieht die Erde stärker an als die Erde den Mond',
            'Beide ziehen sich mit gleich großer Kraft an (actio=reactio)',
            'Die Gravitation ist hier unerheblich, da der Mond zu weit entfernt ist',
            'Die Kraft hängt nur von der Mondmasse ab',
          ],
          correctIndex: 2,
          explanation: 'Nach dem dritten Newtonschen Gesetz (actio = reactio) und dem Gravitationsgesetz F = G·m₁·m₂/r² wirken Erde und Mond mit gleich großen Kräften aufeinander. Die Beschleunigungen sind unterschiedlich (a = F/m), weil die Massen verschieden sind — die Erde wird kaum merklich beschleunigt, der Mond stark.',
          hints: ['F_Grav = G·m₁·m₂/r² — symmetrisch in m₁ und m₂.', 'Actio=Reactio: Kraft auf Mond durch Erde = Kraft auf Erde durch Mond.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
