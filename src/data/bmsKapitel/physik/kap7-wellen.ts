import type { Kapitel } from '../types';

export const physKap7: Kapitel = {
  id: 'phys-kap7',
  title: 'Wellen & Optik',
  subject: 'physik',
  icon: '🌊',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap7-1',
      title: 'Wellenphysik',
      diagram: 'wave-types',
      content: `Eine Welle ist die Ausbreitung einer Störung (Schwingung) durch ein Medium, wobei Energie transportiert wird, aber keine Materie. Die fundamentale Wellengleichung lautet c = λ · f, wobei c die Ausbreitungsgeschwindigkeit, λ (Lambda) die Wellenlänge und f die Frequenz ist. Die Wellenlänge ist der Abstand zwischen zwei aufeinanderfolgenden Wellenbergen (oder -tälern), die Frequenz gibt die Anzahl der Schwingungen pro Sekunde an (Einheit: Hertz, 1 Hz = 1/s), und die Periode T = 1/f ist die Dauer einer vollständigen Schwingung. Die Amplitude A beschreibt die maximale Auslenkung aus der Ruhelage und bestimmt die Intensität (Energie) der Welle — die Intensität ist proportional zum Quadrat der Amplitude: I ∝ A².

Man unterscheidet zwei grundlegende Wellentypen nach der Schwingungsrichtung relativ zur Ausbreitungsrichtung. Bei Transversalwellen schwingt das Medium senkrecht zur Ausbreitungsrichtung — Beispiele sind Lichtwellen, Wellen auf einer Saite und Oberflächenwellen auf Wasser. Bei Longitudinalwellen schwingt das Medium parallel zur Ausbreitungsrichtung — Beispiele sind Schallwellen und Druckwellen. Bei Longitudinalwellen entstehen Verdichtungen und Verdünnungen. Elektromagnetische Wellen (Licht, Radiowellen) sind Transversalwellen, die kein Medium benötigen und sich auch im Vakuum ausbreiten können. Schallwellen sind Longitudinalwellen und benötigen ein materielles Medium — im Vakuum gibt es keinen Schall.

Treffen zwei Wellen aufeinander, überlagern sie sich nach dem Superpositionsprinzip: Die resultierende Auslenkung ist die Summe der Einzelauslenkungen. Bei konstruktiver Interferenz verstärken sich die Wellen (gleiche Phase, Maxima überlagern sich), bei destruktiver Interferenz löschen sie sich aus (entgegengesetzte Phase). Stehende Wellen entstehen durch Überlagerung zweier gegenläufiger Wellen gleicher Frequenz und Amplitude — es bilden sich Knoten (Punkte ohne Schwingung) und Bäuche (Punkte maximaler Schwingung). Stehende Wellen treten in Musikinstrumenten auf (Saiten, Blasinstrumente) und bestimmen deren Klang. Die Beugung beschreibt die Ausbreitung von Wellen hinter Hindernissen oder durch Spalte — sie ist besonders ausgeprägt, wenn die Öffnung in der Größenordnung der Wellenlänge liegt.`,
      merksätze: [
        'Wellengleichung: c = λ·f. Transversalwellen: Schwingung ⊥ Ausbreitung. Longitudinalwellen: Schwingung ∥ Ausbreitung.',
        'Konstruktive Interferenz: Verstärkung (gleiche Phase). Destruktive Interferenz: Auslöschung (Gegenphase). Intensität: I ∝ A².',
      ],
      altfrage: {
        question: 'Eine Welle hat eine Frequenz von 500 Hz und eine Wellenlänge von 0,68 m. Wie groß ist die Ausbreitungsgeschwindigkeit?',
        answer: 'c = λ · f = 0,68 m · 500 Hz = 340 m/s. Dies entspricht der Schallgeschwindigkeit in Luft bei Raumtemperatur.',
      },
      klinischerBezug:
        'Die Ultraschalldiagnostik (Sonographie) nutzt hochfrequente Schallwellen (2–20 MHz). Höhere Frequenzen liefern bessere Auflösung, dringen aber weniger tief ein. Die Wellenlänge bestimmt die minimale auflösbare Struktur. Bei 5 MHz und c ≈ 1540 m/s (in Gewebe): λ = c/f ≈ 0,3 mm — Strukturen kleiner als diese Wellenlänge können nicht aufgelöst werden.',
      selfTest: [
        {
          question: 'Schallwellen sind:',
          options: [
            'Transversalwellen, die sich im Vakuum ausbreiten',
            'Longitudinalwellen, die ein Medium benötigen',
            'Transversalwellen, die ein Medium benötigen',
            'Longitudinalwellen, die sich im Vakuum ausbreiten',
            'Elektromagnetische Wellen mit niedriger Frequenz',
          ],
          correctIndex: 1,
          explanation: 'Schallwellen sind Longitudinalwellen (Verdichtungen und Verdünnungen). Sie benötigen ein materielles Medium und können sich nicht im Vakuum ausbreiten.',
        },
        {
          question: 'Eine Welle hat eine Frequenz von 200 Hz. Wie groß ist die Periode?',
          options: ['200 s', '0,005 s', '0,5 s', '2 s', '0,02 s'],
          correctIndex: 1,
          explanation: 'T = 1/f = 1/200 Hz = 0,005 s = 5 ms.',
        },
        {
          question: 'Bei konstruktiver Interferenz zweier gleicher Wellen:',
          options: [
            'löschen sich die Wellen aus',
            'verdoppelt sich die Amplitude',
            'halbiert sich die Frequenz',
            'ändert sich die Wellenlänge',
            'vervierfacht sich die Amplitude',
          ],
          correctIndex: 1,
          explanation: 'Bei konstruktiver Interferenz überlagern sich die Wellen in Phase — die Amplituden addieren sich, die resultierende Amplitude verdoppelt sich.',
        },
      ],
    },
    {
      id: 'phys-kap7-2',
      title: 'Schall',
      diagram: 'doppler-effect',
      content: `Schall ist eine mechanische Longitudinalwelle, die sich durch elastische Medien (Gase, Flüssigkeiten, Festkörper) ausbreitet. Die Schallgeschwindigkeit hängt vom Medium und dessen Temperatur ab. In Luft bei 20 °C beträgt sie etwa 343 m/s und steigt mit der Temperatur um ungefähr 0,6 m/s pro Kelvin. In Wasser ist Schall deutlich schneller (ca. 1480 m/s) und in Knochen noch schneller (ca. 3500 m/s). Der Frequenzbereich des menschlichen Gehörs liegt zwischen etwa 20 Hz und 20000 Hz (20 kHz). Schall unterhalb von 20 Hz heißt Infraschall, oberhalb von 20 kHz Ultraschall. Die Ultraschalldiagnostik in der Medizin arbeitet typischerweise mit Frequenzen von 2–20 MHz.

Die Lautstärke wird in Dezibel (dB) gemessen und basiert auf einer logarithmischen Skala: L = 10 · log₁₀(I/I₀), wobei I die Schallintensität und I₀ = 10⁻¹² W/m² die Hörschwelle ist. Die logarithmische Skala ist sinnvoll, weil das menschliche Ohr einen enormen Intensitätsbereich abdeckt (Faktor 10¹²). Eine Erhöhung um 10 dB entspricht einer Verzehnfachung der Intensität und wird subjektiv als ungefähre Verdopplung der Lautstärke empfunden. Die Schmerzgrenze liegt bei etwa 130 dB (entspricht 10 W/m²). Normales Gespräch liegt bei ca. 60 dB, ein Presslufthammer bei ca. 100 dB. Dauerhafte Lärmbelastung über 85 dB kann zu irreversiblen Hörschäden führen (Lärmschwerhörigkeit), da die Haarzellen im Innenohr geschädigt werden.

Der Doppler-Effekt beschreibt die scheinbare Frequenzänderung einer Welle, wenn sich Quelle und Beobachter relativ zueinander bewegen. Nähern sich Quelle und Beobachter einander, wird die beobachtete Frequenz höher (Blauverschiebung bei Licht); entfernen sie sich, wird sie niedriger (Rotverschiebung). Die Formel für einen sich bewegenden Beobachter lautet: f' = f · (c ± v_Beobachter)/(c ∓ v_Quelle), wobei das obere Vorzeichen für Annäherung und das untere für Entfernung gilt. In der Medizin ist der Doppler-Effekt die Grundlage der Doppler-Sonographie: Ultraschall wird von sich bewegenden Erythrozyten reflektiert, und die Frequenzverschiebung ist proportional zur Blutflussgeschwindigkeit. So können Gefäßverengungen (Stenosen), Thrombosen und Herzklappenfehler nicht-invasiv diagnostiziert werden. Auch die fetale Herzfrequenz wird mittels Doppler-Ultraschall gemessen.`,
      merksätze: [
        'Schallgeschwindigkeit in Luft: ≈ 343 m/s (20 °C). Hörbereich: 20 Hz – 20 kHz. Ultraschall: > 20 kHz. Lautstärke: L = 10·log(I/I₀) in dB.',
        'Doppler-Effekt: Annäherung → höhere Frequenz, Entfernung → niedrigere Frequenz. +10 dB = 10-fache Intensität. Schmerzgrenze: ≈ 130 dB.',
      ],
      altfrage: {
        question: 'Um wie viel dB steigt der Schallpegel, wenn die Intensität verzehnfacht wird?',
        answer: 'L = 10·log₁₀(I/I₀). Bei 10-facher Intensität: ΔL = 10·log₁₀(10) = 10·1 = 10 dB.',
      },
      klinischerBezug:
        'Die Doppler-Sonographie nutzt den Doppler-Effekt zur Messung der Blutflussgeschwindigkeit. Die Frequenzverschiebung Δf = 2·f₀·v·cos(θ)/c (mit v = Blutgeschwindigkeit, θ = Winkel zwischen Schallstrahl und Strömung) ermöglicht die Beurteilung von Gefäßstenosen. Lärmschwerhörigkeit (ab 85 dB Dauerbelastung) ist eine häufige Berufskrankheit und beruht auf der Zerstörung der äußeren Haarzellen im Corti-Organ.',
      selfTest: [
        {
          question: 'Die Schallgeschwindigkeit ist am höchsten in:',
          options: ['Luft', 'Wasser', 'Knochen', 'Vakuum', 'Fettgewebe'],
          correctIndex: 2,
          explanation: 'Schall breitet sich in Festkörpern am schnellsten aus (Knochen: ≈ 3500 m/s > Wasser: ≈ 1480 m/s > Luft: ≈ 343 m/s). Im Vakuum gibt es keinen Schall.',
        },
        {
          question: 'Eine Verdopplung der Schallintensität entspricht einem Anstieg um:',
          options: ['2 dB', '3 dB', '6 dB', '10 dB', '20 dB'],
          correctIndex: 1,
          explanation: 'ΔL = 10·log₁₀(2) ≈ 10·0,301 ≈ 3 dB. Eine Verdopplung der Intensität entspricht +3 dB.',
        },
        {
          question: 'Ein Krankenwagen nähert sich mit Sirene. Was beobachtet ein stehender Zuhörer?',
          options: [
            'Die Tonhöhe wird tiefer',
            'Die Tonhöhe wird höher',
            'Die Lautstärke bleibt konstant',
            'Die Tonhöhe bleibt gleich, nur die Lautstärke ändert sich',
            'Die Wellenlänge des Schalls nimmt zu',
          ],
          correctIndex: 1,
          explanation: 'Doppler-Effekt: Bei Annäherung von Quelle und Beobachter steigt die beobachtete Frequenz — der Ton klingt höher.',
        },
      ],
    },
    {
      id: 'phys-kap7-3',
      title: 'Reflexion & Brechung',
      content: `Die Reflexion beschreibt das Zurückwerfen einer Welle an einer Grenzfläche. Das Reflexionsgesetz besagt, dass der Einfallswinkel α gleich dem Reflexionswinkel α' ist: α = α'. Beide Winkel werden zum Lot (der Senkrechten auf die Oberfläche) gemessen. Bei spiegelnder (regulärer) Reflexion an einer glatten Oberfläche bleiben parallele Strahlen parallel, was eine scharfe Abbildung ermöglicht (Spiegel). Bei diffuser Reflexion an einer rauen Oberfläche werden die Strahlen in alle Richtungen gestreut, was erklärt, warum wir Gegenstände aus jeder Richtung sehen können, auch wenn sie nicht selbst leuchten. In der Medizin nutzt die Ultraschalldiagnostik die Reflexion von Schallwellen an Grenzflächen zwischen verschiedenen Geweben — je unterschiedlicher die akustischen Impedanzen, desto stärker die Reflexion.

Die Brechung (Refraktion) beschreibt die Richtungsänderung einer Welle beim Übergang von einem Medium in ein anderes mit unterschiedlicher Ausbreitungsgeschwindigkeit. Das Snelliussche Brechungsgesetz lautet: n₁ · sin(α) = n₂ · sin(β), wobei n₁ und n₂ die Brechungsindizes der beiden Medien und α und β die Winkel zum Lot sind. Der Brechungsindex n = c₀/c ist das Verhältnis der Lichtgeschwindigkeit im Vakuum c₀ zur Lichtgeschwindigkeit im Medium c. Für Wasser gilt n ≈ 1,33, für Glas n ≈ 1,5 und für Luft n ≈ 1,0. Beim Übergang vom optisch dünneren ins optisch dichtere Medium (n₂ > n₁) wird der Strahl zum Lot hin gebrochen, im umgekehrten Fall vom Lot weg.

Die Totalreflexion tritt auf, wenn Licht vom optisch dichteren ins optisch dünnere Medium übergeht und der Einfallswinkel den Grenzwinkel der Totalreflexion αc übersteigt: sin(αc) = n₂/n₁. Bei Winkeln größer als αc wird das gesamte Licht reflektiert und keines gebrochen. Dieses Phänomen wird in Glasfaserkabeln genutzt, die Licht über große Entfernungen nahezu verlustfrei leiten. In der Medizin basiert die Endoskopie (z. B. Gastroskopie, Koloskopie) auf Glasfaseroptik: Licht wird durch Totalreflexion in flexiblen Glasfaserbündeln geleitet, um das Körperinnere zu beleuchten und Bilder zu übertragen. Die Brechung im Auge (durch Hornhaut und Linse) fokussiert das Licht auf die Netzhaut und ermöglicht das Sehen — Fehlsichtigkeiten (Myopie, Hyperopie) beruhen auf fehlerhafter Brechung.`,
      merksätze: [
        'Reflexionsgesetz: Einfallswinkel = Reflexionswinkel (α = α\'). Brechungsgesetz (Snellius): n₁·sin(α) = n₂·sin(β).',
        'Totalreflexion: sin(αc) = n₂/n₁ (nur vom dichteren ins dünnere Medium möglich). Brechungsindex: n = c₀/c (n_Wasser ≈ 1,33, n_Glas ≈ 1,5).',
      ],
      altfrage: {
        question: 'Licht trifft unter 30° (zum Lot) aus Luft (n₁ = 1) auf eine Glasoberfläche (n₂ = 1,5). Wie groß ist der Brechungswinkel?',
        answer: 'n₁·sin(α) = n₂·sin(β) → 1·sin(30°) = 1,5·sin(β) → sin(β) = 0,5/1,5 = 1/3 → β ≈ 19,5°. Der Strahl wird zum Lot hin gebrochen.',
      },
      klinischerBezug:
        'Das menschliche Auge nutzt Brechung: Die Hornhaut (n ≈ 1,376) liefert den Großteil der Brechkraft (≈ 43 dpt), die Linse (n ≈ 1,42) steuert durch Akkommodation weitere 10–20 dpt bei. Myopie: Augapfel zu lang → Bild vor der Netzhaut (Korrektur: Zerstreuungslinse). Hyperopie: Augapfel zu kurz → Bild hinter der Netzhaut (Korrektur: Sammellinse). Glasfaser-Endoskopie nutzt Totalreflexion.',
      selfTest: [
        {
          question: 'Licht geht von Glas (n = 1,5) in Luft (n = 1). Der Grenzwinkel der Totalreflexion beträgt:',
          options: ['41,8°', '90°', '48,6°', '30°', '60°'],
          correctIndex: 0,
          explanation: 'sin(αc) = n₂/n₁ = 1/1,5 = 2/3 → αc = arcsin(2/3) ≈ 41,8°.',
        },
        {
          question: 'Beim Übergang vom optisch dünneren ins optisch dichtere Medium wird der Lichtstrahl:',
          options: [
            'vom Lot weg gebrochen',
            'zum Lot hin gebrochen',
            'nicht gebrochen',
            'totalreflektiert',
            'in seine Spektralfarben zerlegt',
          ],
          correctIndex: 1,
          explanation: 'Beim Übergang ins dichtere Medium (n₂ > n₁) wird der Brechungswinkel kleiner als der Einfallswinkel — der Strahl wird zum Lot hin gebrochen.',
        },
        {
          question: 'Totalreflexion ist möglich, wenn:',
          options: [
            'Licht vom dünneren ins dichtere Medium übergeht',
            'Licht vom dichteren ins dünnere Medium übergeht und α > αc',
            'Der Einfallswinkel 0° beträgt',
            'Die Wellenlänge des Lichts groß genug ist',
            'Das Licht polarisiert ist',
          ],
          correctIndex: 1,
          explanation: 'Totalreflexion tritt nur auf, wenn Licht vom optisch dichteren ins dünnere Medium übergeht UND der Einfallswinkel größer als der Grenzwinkel αc ist.',
        },
      ],
    },
    {
      id: 'phys-kap7-4',
      title: 'Linsen & Optische Geräte',
      diagram: 'lens-imaging',
      content: `Linsen nutzen die Lichtbrechung, um Lichtstrahlen zu fokussieren oder zu zerstreuen. Die Sammellinse (konvex, Bikonvexlinse) ist in der Mitte dicker als am Rand und bündelt parallele Lichtstrahlen in einem Punkt, dem Brennpunkt F. Die Brennweite f ist der Abstand zwischen Linsenmitte und Brennpunkt. Die Brechkraft (Dioptrie) D = 1/f (in m⁻¹ = dpt) ist ein Maß für die Stärke der Lichtbrechung. Eine Sammellinse hat eine positive Brechkraft. Die Zerstreuungslinse (konkav, Bikonkavlinse) ist in der Mitte dünner als am Rand und zerstreut parallele Strahlen so, dass sie scheinbar von einem virtüllen Brennpunkt divergieren. Sie hat eine negative Brechkraft. Werden mehrere dünne Linsen direkt hintereinandergeschaltet, addieren sich ihre Brechkräfte: Dges = D₁ + D₂.

Die Abbildungsgleichung (Linsengleichung) für dünne Linsen lautet: 1/f = 1/g + 1/b, wobei f die Brennweite, g die Gegenstandsweite (Abstand des Gegenstands von der Linse) und b die Bildweite (Abstand des Bildes von der Linse) ist. Der Abbildungsmaßstab β = b/g = B/G gibt das Verhältnis von Bildgröße B zur Gegenstandsgröße G an. Bei einer Sammellinse entstehen je nach Gegenstandsweite unterschiedliche Bilder: Für g > 2f entsteht ein reelles, verkleinertes, umgekehrtes Bild; für g = 2f ein reelles, gleichgroßes, umgekehrtes Bild; für f < g < 2f ein reelles, vergrößertes, umgekehrtes Bild; für g = f kein Bild (parallele Strahlen); für g < f ein virtülles, vergrößertes, aufrechtes Bild (Lupe).

Die Lupe ist die einfachste Anwendung einer Sammellinse: Der Gegenstand wird innerhalb der Brennweite platziert (g < f), wodurch ein vergrößertes, aufrechtes, virtülles Bild entsteht. Die Vergrößerung einer Lupe beträgt V = 25 cm/f (bezogen auf die deutliche Sehweite von 25 cm). Das Mikroskop kombiniert zwei Linsen: Das Objektiv (kurze Brennweite) erzeugt ein vergrößertes reelles Zwischenbild, das Okular (als Lupe) vergrößert dieses nochmals. Die Gesamtvergrößerung ist das Produkt der Einzelvergrößerungen: Vges = Vobjektiv · Vokular. In der Medizin sind optische Geräte unverzichtbar: Das Ophthalmoskop (Augenspiegel) ermöglicht die Betrachtung des Augenhintergrunds, die Operationsmikroskope erlauben mikrochirurgische Eingriffe, und Endoskope nutzen Linsensysteme zur Darstellung innerer Organe. Die Korrektur von Fehlsichtigkeiten erfolgt durch Brillengläser oder Kontaktlinsen: Bei Myopie (Kurzsichtigkeit) werden Zerstreuungslinsen (negative Dioptrien), bei Hyperopie (Weitsichtigkeit) Sammellinsen (positive Dioptrien) eingesetzt.`,
      merksätze: [
        'Linsengleichung: 1/f = 1/g + 1/b. Brechkraft: D = 1/f (in Dioptrien). Sammellinse: f > 0, Zerstreuungslinse: f < 0.',
        'Lupe: V = 25 cm/f. Mikroskop: Vges = V_Objektiv · V_Okular. Myopie → Zerstreuungslinse, Hyperopie → Sammellinse.',
      ],
      altfrage: {
        question: 'Ein Gegenstand steht 30 cm vor einer Sammellinse mit f = 20 cm. Wo entsteht das Bild?',
        answer: '1/f = 1/g + 1/b → 1/20 = 1/30 + 1/b → 1/b = 1/20 - 1/30 = 3/60 - 2/60 = 1/60 → b = 60 cm. Das Bild ist reell, vergrößert (β = 60/30 = 2) und umgekehrt.',
      },
      klinischerBezug:
        'Das menschliche Auge hat eine Gesamtbrechkraft von etwa 60 dpt (Hornhaut ≈ 43 dpt + Linse ≈ 17 dpt). Bei Myopie (-3 dpt Brille) liegt der Fernpunkt näher als unendlich. Bei Presbyopie (Altersweitsichtigkeit) verliert die Linse ihre Akkommodationsfähigkeit und kann nicht mehr auf nahe Objekte fokussieren — Lesebrille mit Sammellinse erforderlich.',
      selfTest: [
        {
          question: 'Eine Sammellinse hat eine Brennweite von 10 cm. Wie groß ist ihre Brechkraft?',
          options: ['1 dpt', '10 dpt', '0,1 dpt', '100 dpt', '5 dpt'],
          correctIndex: 1,
          explanation: 'D = 1/f = 1/0,1 m = 10 dpt. Die Brennweite muss in Metern eingesetzt werden.',
        },
        {
          question: 'Ein Gegenstand wird innerhalb der Brennweite einer Sammellinse platziert. Das entstehende Bild ist:',
          options: [
            'reell, verkleinert, umgekehrt',
            'virtüll, vergrößert, aufrecht',
            'reell, vergrößert, umgekehrt',
            'virtüll, verkleinert, aufrecht',
            'reell, gleichgroß, aufrecht',
          ],
          correctIndex: 1,
          explanation: 'Für g < f (Lupe): Das Bild ist virtüll (nicht auf einem Schirm auffangbar), vergrößert und aufrecht.',
        },
        {
          question: 'Welche Linsenart wird zur Korrektur von Kurzsichtigkeit (Myopie) verwendet?',
          options: [
            'Sammellinse (konvex)',
            'Zerstreuungslinse (konkav)',
            'Zylinderlinse',
            'Plankonvexlinse',
            'Bifokallinse',
          ],
          correctIndex: 1,
          explanation: 'Bei Myopie ist der Augapfel zu lang — das Bild entsteht vor der Netzhaut. Eine Zerstreuungslinse (negative Dioptrien) divergiert die Strahlen leicht und verschiebt das Bild auf die Netzhaut.',
        },
      ],
    },
    {
      id: 'phys-kap7-5',
      title: 'Elektromagnetisches Spektrum',
      diagram: 'em-spectrum',
      content: `Elektromagnetische Wellen sind Transversalwellen, die aus schwingenden elektrischen und magnetischen Feldern bestehen und sich im Vakuum mit Lichtgeschwindigkeit c ≈ 3 · 10⁸ m/s ausbreiten. Sie benötigen kein Medium und decken einen enormen Frequenz- und Wellenlängenbereich ab — das elektromagnetische Spektrum. Von langen zu kurzen Wellenlängen geordnet: Radiowellen (> 1 m), Mikrowellen (1 mm – 1 m), Infrarotstrahlung (700 nm – 1 mm), sichtbares Licht (400–700 nm, von Rot nach Violett), Ultraviolettstrahlung (10–400 nm), Röntgenstrahlung (0,01–10 nm) und Gammastrahlung (< 0,01 nm). Mit abnehmender Wellenlänge steigt die Frequenz und damit die Energie der Photonen gemäß E = h · f, wobei h = 6,626 · 10⁻³⁴ J·s das Plancksche Wirkungsquantum ist.

Sichtbares Licht macht nur einen winzigen Teil des elektromagnetischen Spektrums aus (400–700 nm). Rotes Licht hat die längste Wellenlänge (≈ 700 nm) und die geringste Energie, violettes Licht die kürzeste Wellenlänge (≈ 400 nm) und die höchste Energie. Infrarotstrahlung wird als Wärmestrahlung empfunden und von allen warmen Körpern ausgesandt. UV-Strahlung ist energiereicher als sichtbares Licht und wird in UV-A (315–400 nm, Bräunung), UV-B (280–315 nm, Vitamin-D-Synthese, Sonnenbrand) und UV-C (100–280 nm, keimtötend) eingeteilt. Die Ozonschicht absorbiert den Großteil der UV-B- und die gesamte UV-C-Strahlung.

Röntgenstrahlung durchdringt Weichteilgewebe und wird von dichteren Strukturen (Knochen, Metall) absorbiert, was die Grundlage der Röntgendiagnostik bildet. In der Computertomographie (CT) werden Röntgenstrahlen aus verschiedenen Winkeln aufgenommen und computergestützt zu Schnittbildern verarbeitet. Gammastrahlung entsteht bei radioaktiven Zerfällen und hat die höchste Energie. Sie wird in der Strahlentherapie zur Behandlung von Tumoren und in der Nuklearmedizin zur Diagnostik (z. B. PET, SPECT) eingesetzt. Die biologische Wirkung elektromagnetischer Strahlung hängt von ihrer Energie (Frequenz) ab: Strahlung ab dem UV-Bereich (also UV, Röntgen, Gamma) ist ionisierend — sie hat genug Energie, um Elektronen aus Atomen zu lösen und kann DNA-Schäden verursachen. Radiowellen, Mikrowellen, Infrarot und sichtbares Licht sind nicht-ionisierend. E = h · f ist die zentrale Gleichung, die Wellencharakter und Teilchencharakter (Photonen) des Lichts verbindet — der Welle-Teilchen-Dualismus.`,
      merksätze: [
        'Elektromagnetisches Spektrum (nach steigender Frequenz/Energie): Radio → Mikrowelle → IR → sichtbares Licht → UV → Röntgen → Gamma. E = h·f.',
        'Ab UV-Bereich: ionisierende Strahlung (DNA-Schäden möglich). Sichtbares Licht: 400 nm (violett) bis 700 nm (rot). Alle EM-Wellen: c = 3·10⁸ m/s im Vakuum.',
      ],
      altfrage: {
        question: 'Welche Wellenlänge hat grünes Licht (f ≈ 6·10¹⁴ Hz)? (c = 3·10⁸ m/s)',
        answer: 'λ = c/f = 3·10⁸ / 6·10¹⁴ = 5·10⁻⁷ m = 500 nm. Dies liegt im sichtbaren Bereich.',
      },
      klinischerBezug:
        'In der Medizin wird fast das gesamte EM-Spektrum genutzt: Radiowellen (MRT), Mikrowellen (Diathermie), IR (Wärmelampen, Thermographie), sichtbares Licht (Endoskopie, Phototherapie bei Neugeborenenikterus), UV (Desinfektion, PUVA-Therapie bei Psoriasis), Röntgen (Radiographie, CT), Gamma (Strahlentherapie, PET). Die Photonenenergie bestimmt die biologische Wirkung: E(Gamma) >> E(Röntgen) >> E(UV) >> E(sichtbar).',
      selfTest: [
        {
          question: 'Welche elektromagnetische Strahlung hat die höchste Photonenenergie?',
          options: ['Infrarot', 'Sichtbares Licht', 'Radiowellen', 'Gammastrahlung', 'Mikrowellen'],
          correctIndex: 3,
          explanation: 'E = h·f. Gammastrahlung hat die höchste Frequenz und damit die höchste Photonenenergie.',
        },
        {
          question: 'Ab welchem Bereich des EM-Spektrums spricht man von ionisierender Strahlung?',
          options: ['Infrarot', 'Sichtbares Licht', 'Ultraviolett', 'Mikrowellen', 'Radiowellen'],
          correctIndex: 2,
          explanation: 'Ab dem UV-Bereich ist die Photonenenergie hoch genug, um Elektronen aus Atomen zu lösen (Ionisation). UV, Röntgen und Gamma sind ionisierend.',
        },
        {
          question: 'Alle elektromagnetischen Wellen im Vakuum haben:',
          options: [
            'die gleiche Wellenlänge',
            'die gleiche Frequenz',
            'die gleiche Ausbreitungsgeschwindigkeit (c)',
            'die gleiche Energie',
            'die gleiche Amplitude',
          ],
          correctIndex: 2,
          explanation: 'Alle EM-Wellen breiten sich im Vakuum mit Lichtgeschwindigkeit c ≈ 3·10⁸ m/s aus, unabhängig von Frequenz oder Wellenlänge.',
        },
      ],
    },
  ],
};
