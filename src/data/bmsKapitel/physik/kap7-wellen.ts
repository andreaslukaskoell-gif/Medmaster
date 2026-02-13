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
      content: `Eine **Welle** ist Ausbreitung einer Störung durch ein Medium. Energie wird transportiert, aber keine Materie. Die fundamentale Wellengleichung: c = λ · f. c ist die Ausbreitungsgeschwindigkeit, λ (Lambda) die **Wellenlänge** (Abstand zwischen zwei Wellenbergen), f die **Frequenz** (Schwingungen pro Sekunde). Einheit der Frequenz: Hertz (1 Hz = 1/s). Die **Periode** T = 1/f ist die Dauer einer Schwingung. Die **Amplitude A** ist die maximale Auslenkung. Die Intensität (Energie) ist proportional zu A²: I ∝ A².

**Transversalwellen**: Schwingung senkrecht zur Ausbreitungsrichtung. Beispiele: Lichtwellen, Saitenwellen, Oberflächenwellen auf Wasser. **Longitudinalwellen**: Schwingung parallel zur Ausbreitungsrichtung. Beispiele: Schallwellen, Druckwellen. Bei Longitudinalwellen entstehen Verdichtungen und Verdünnungen.

Elektromagnetische Wellen (Licht, Radiowellen) sind Transversalwellen. Sie brauchen kein Medium und breiten sich auch im Vakuum aus. Schallwellen sind Longitudinalwellen. Sie brauchen ein Medium. Im Vakuum gibt es keinen Schall.

**Superpositionsprinzip**: Wellen überlagern sich. Die resultierende Auslenkung ist die Summe der Einzelauslenkungen. **Konstruktive Interferenz**: Wellen verstärken sich (gleiche Phase, Maxima überlagern sich). **Destruktive Interferenz**: Wellen löschen sich aus (entgegengesetzte Phase). **Stehende Wellen**: Überlagerung zweier gegenläufiger Wellen gleicher Frequenz und Amplitude. Es bilden sich Knoten (keine Schwingung) und Bäuche (maximale Schwingung). Beispiel: Musikinstrumente (Saiten, Blasinstrumente).

**Beugung**: Ausbreitung von Wellen hinter Hindernissen oder durch Spalte. Besonders ausgeprägt, wenn die Öffnung ungefähr die Größe der Wellenlänge hat.`,
      merksätze: [
        'Wellengleichung: c = λ·f. Transversalwellen: Schwingung ⊥ Ausbreitung. Longitudinalwellen: Schwingung ∥ Ausbreitung.',
        'Konstruktive Interferenz: Verstärkung (gleiche Phase). Destruktive Interferenz: Auslöschung (Gegenphase). Intensität: I ∝ A².',
      ],
      altfrage: {
        question: 'Eine Welle hat eine Frequenz von 500 Hz und eine Wellenlänge von 0,68 m. Wie groß ist die Ausbreitungsgeschwindigkeit?',
        answer: 'c = λ · f = 0,68 m · 500 Hz = 340 m/s. Dies entspricht der Schallgeschwindigkeit in Luft bei Raumtemperatur.',
      },
      klinischerBezug:
        'Die **Ultraschalldiagnostik** (Sonographie) nutzt hochfrequente Schallwellen (2–20 MHz). Höhere Frequenzen liefern bessere Auflösung, dringen aber weniger tief ein. Die Wellenlänge bestimmt die minimale auflösbare Struktur. Bei 5 MHz und c ≈ 1540 m/s (in Gewebe): λ = c/f ≈ 0,3 mm. Strukturen kleiner als 0,3 mm können nicht aufgelöst werden.',
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
      content: `**Schall** ist eine mechanische Longitudinalwelle. Sie breitet sich durch elastische Medien aus (Gase, Flüssigkeiten, Festkörper). Die **Schallgeschwindigkeit** hängt vom Medium und der Temperatur ab. In Luft bei 20 °C: ca. 343 m/s (steigt um ca. 0,6 m/s pro Kelvin). In Wasser: ca. 1480 m/s. In Knochen: ca. 3500 m/s. Der **Hörbereich** des Menschen: 20 Hz bis 20000 Hz (20 kHz). **Infraschall**: < 20 Hz. **Ultraschall**: > 20 kHz. Die medizinische Ultraschalldiagnostik arbeitet mit 2–20 MHz.

Die **Lautstärke** wird in Dezibel (dB) gemessen. Logarithmische Skala: L = 10 · log₁₀(I/I₀). I ist die Schallintensität, I₀ = 10⁻¹² W/m² die Hörschwelle. Die logarithmische Skala ist sinnvoll, weil das Ohr einen enormen Intensitätsbereich abdeckt (Faktor 10¹²). +10 dB = Verzehnfachung der Intensität (subjektiv: ungefähre Verdopplung der Lautstärke). **Schmerzgrenze**: ca. 130 dB (= 10 W/m²). Normales Gespräch: ca. 60 dB. Presslufthammer: ca. 100 dB. **Dauerhafte Lärmbelastung über 85 dB** kann zu irreversiblen Hörschäden führen (**Lärmschwerhörigkeit**). Die Haarzellen im Innenohr werden geschädigt.

**Doppler-Effekt**: Scheinbare Frequenzänderung einer Welle, wenn sich Quelle und Beobachter relativ zueinander bewegen. **Annäherung** → höhere Frequenz (Blauverschiebung bei Licht). **Entfernung** → niedrigere Frequenz (Rotverschiebung). Formel für bewegten Beobachter: f' = f · (c ± v_Beobachter)/(c ∓ v_Quelle). Oberes Vorzeichen: Annäherung. Unteres: Entfernung.`,
      merksätze: [
        'Schallgeschwindigkeit in Luft: ≈ 343 m/s (20 °C). Hörbereich: 20 Hz – 20 kHz. Ultraschall: > 20 kHz. Lautstärke: L = 10·log(I/I₀) in dB.',
        'Doppler-Effekt: Annäherung → höhere Frequenz, Entfernung → niedrigere Frequenz. +10 dB = 10-fache Intensität. Schmerzgrenze: ≈ 130 dB.',
      ],
      altfrage: {
        question: 'Um wie viel dB steigt der Schallpegel, wenn die Intensität verzehnfacht wird?',
        answer: 'L = 10·log₁₀(I/I₀). Bei 10-facher Intensität: ΔL = 10·log₁₀(10) = 10·1 = 10 dB.',
      },
      klinischerBezug:
        'Die **Doppler-Sonographie** nutzt den Doppler-Effekt zur Messung der Blutflussgeschwindigkeit. Die Frequenzverschiebung Δf = 2·f₀·v·cos(θ)/c (mit v = Blutgeschwindigkeit, θ = Winkel zwischen Schallstrahl und Strömung, c ≈ 1540 m/s in Gewebe) ermöglicht die Beurteilung von Gefäßstenosen und Klappenfehlern. **Lärmschwerhörigkeit** (ab 85 dB Dauerbelastung) ist eine häufige Berufskrankheit. Sie beruht auf der Zerstörung der äußeren Haarzellen im **Corti-Organ**.',
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
      content: `**Reflexion** ist das Zurückwerfen einer Welle an einer Grenzfläche. **Reflexionsgesetz**: Einfallswinkel α = Reflexionswinkel α'. Beide Winkel werden zum Lot (Senkrechte auf die Oberfläche) gemessen. **Spiegelnde (reguläre) Reflexion**: glatte Oberfläche. Parallele Strahlen bleiben parallel. Scharfe Abbildung (Spiegel). **Diffuse Reflexion**: raue Oberfläche. Strahlen werden in alle Richtungen gestreut. Deshalb sehen wir Gegenstände aus jeder Richtung, auch wenn sie nicht selbst leuchten.

**Brechung (Refraktion)**: Richtungsänderung beim Übergang von einem Medium in ein anderes (unterschiedliche Ausbreitungsgeschwindigkeit). **Snelliussches Brechungsgesetz**: n₁ · sin(α) = n₂ · sin(β). n₁ und n₂ sind die **Brechungsindizes** der beiden Medien, α und β die Winkel zum Lot. Der Brechungsindex n = c₀/c ist das Verhältnis der Lichtgeschwindigkeit im Vakuum c₀ zur Lichtgeschwindigkeit im Medium c. Wasser: n ≈ 1,33. Glas: n ≈ 1,5. Luft: n ≈ 1,0. Übergang vom optisch dünneren ins dichtere Medium (n₂ > n₁): Strahl wird zum Lot hin gebrochen. Umgekehrt: vom Lot weg.

**Totalreflexion**: Tritt auf, wenn Licht vom optisch dichteren ins dünnere Medium übergeht UND der Einfallswinkel den **Grenzwinkel der Totalreflexion αc** übersteigt: sin(αc) = n₂/n₁. Bei Winkeln > αc wird das gesamte Licht reflektiert, keines gebrochen. Dieses Phänomen nutzen Glasfaserkabeln (Totalreflexion leitet Licht fast verlustfrei über große Entfernungen).`,
      merksätze: [
        'Reflexionsgesetz: Einfallswinkel = Reflexionswinkel (α = α\'). Brechungsgesetz (Snellius): n₁·sin(α) = n₂·sin(β).',
        'Totalreflexion: sin(αc) = n₂/n₁ (nur vom dichteren ins dünnere Medium möglich). Brechungsindex: n = c₀/c (n_Wasser ≈ 1,33, n_Glas ≈ 1,5).',
      ],
      altfrage: {
        question: 'Licht trifft unter 30° (zum Lot) aus Luft (n₁ = 1) auf eine Glasoberfläche (n₂ = 1,5). Wie groß ist der Brechungswinkel?',
        answer: 'n₁·sin(α) = n₂·sin(β) → 1·sin(30°) = 1,5·sin(β) → sin(β) = 0,5/1,5 = 1/3 → β ≈ 19,5°. Der Strahl wird zum Lot hin gebrochen.',
      },
      klinischerBezug:
        'Das **menschliche Auge** nutzt Brechung: Die **Hornhaut** (n ≈ 1,376) liefert den Großteil der Brechkraft (≈ 43 dpt). Die **Linse** (n ≈ 1,42) steuert durch Akkommodation weitere 10–20 dpt bei. **Myopie** (Kurzsichtigkeit): Augapfel zu lang → Bild vor der Netzhaut. Korrektur: Zerstreuungslinse (negative Dioptrien). **Hyperopie** (Weitsichtigkeit): Augapfel zu kurz → Bild hinter der Netzhaut. Korrektur: Sammellinse (positive Dioptrien). **Glasfaser-Endoskopie** (Gastroskopie, Koloskopie) nutzt Totalreflexion.',
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
      content: `Linsen nutzen Lichtbrechung, um Lichtstrahlen zu fokussieren oder zu zerstreuen. Die **Sammellinse** (konvex, Bikonvexlinse) ist in der Mitte dicker. Sie bündelt parallele Lichtstrahlen im **Brennpunkt F**. Die **Brennweite f** ist der Abstand zwischen Linsenmitte und Brennpunkt. Die **Brechkraft (Dioptrie)** D = 1/f (in m⁻¹ = dpt) ist ein Maß für die Stärke. Sammellinse: D > 0. Die **Zerstreuungslinse** (konkav, Bikonkavlinse) ist in der Mitte dünner. Sie zerstreut Strahlen, als würden sie von einem virtuellen Brennpunkt divergieren. Zerstreuungslinse: D < 0. Mehrere dünne Linsen direkt hintereinander: Brechkräfte addieren sich: Dges = D₁ + D₂.

**Abbildungsgleichung** (Linsengleichung) für dünne Linsen: 1/f = 1/g + 1/b. f ist die Brennweite, g die **Gegenstandsweite** (Abstand Gegenstand–Linse), b die **Bildweite** (Abstand Bild–Linse). **Abbildungsmaßstab** β = b/g = B/G (Verhältnis Bildgröße zu Gegenstandsgröße). Bei einer Sammellinse entstehen je nach g unterschiedliche Bilder: g > 2f: reell, verkleinert, umgekehrt. g = 2f: reell, gleichgroß, umgekehrt. f < g < 2f: reell, vergrößert, umgekehrt. g = f: kein Bild (parallele Strahlen). **g < f: virtuell, vergrößert, aufrecht (Lupe).**

Die **Lupe** nutzt eine Sammellinse: Gegenstand innerhalb der Brennweite (g < f) → vergrößertes, aufrechtes, virtuelles Bild. Vergrößerung: V = 25 cm/f (bezogen auf die deutliche Sehweite von 25 cm). Das **Mikroskop** kombiniert zwei Linsen: Objektiv (kurze Brennweite) erzeugt vergrößertes reelles Zwischenbild. Okular (als Lupe) vergrößert nochmals. Gesamtvergrößerung: Vges = Vobjektiv · Vokular.`,
      merksätze: [
        'Linsengleichung: 1/f = 1/g + 1/b. Brechkraft: D = 1/f (in Dioptrien). Sammellinse: f > 0, Zerstreuungslinse: f < 0.',
        'Lupe: V = 25 cm/f. Mikroskop: Vges = V_Objektiv · V_Okular. Myopie → Zerstreuungslinse, Hyperopie → Sammellinse.',
      ],
      altfrage: {
        question: 'Ein Gegenstand steht 30 cm vor einer Sammellinse mit f = 20 cm. Wo entsteht das Bild?',
        answer: '1/f = 1/g + 1/b → 1/20 = 1/30 + 1/b → 1/b = 1/20 - 1/30 = 3/60 - 2/60 = 1/60 → b = 60 cm. Das Bild ist reell, vergrößert (β = 60/30 = 2) und umgekehrt.',
      },
      klinischerBezug:
        'Das **menschliche Auge** hat eine Gesamtbrechkraft von etwa 60 dpt (Hornhaut ≈ 43 dpt + Linse ≈ 17 dpt). Bei **Myopie** (-3 dpt Brille) liegt der Fernpunkt näher als unendlich. Bei **Presbyopie** (Altersweitsichtigkeit) verliert die Linse ihre Akkommodationsfähigkeit. Lesebrille mit Sammellinse erforderlich. **Ophthalmoskop** (Augenspiegel) ermöglicht Betrachtung des Augenhintergrunds. **Operationsmikroskope** erlauben mikrochirurgische Eingriffe.',
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
            'virtuell, vergrößert, aufrecht',
            'reell, vergrößert, umgekehrt',
            'virtuell, verkleinert, aufrecht',
            'reell, gleichgroß, aufrecht',
          ],
          correctIndex: 1,
          explanation: 'Für g < f (Lupe): Das Bild ist virtuell (nicht auf einem Schirm auffangbar), vergrößert und aufrecht.',
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
      content: `**Elektromagnetische Wellen** sind Transversalwellen aus schwingenden elektrischen und magnetischen Feldern. Sie breiten sich im Vakuum mit Lichtgeschwindigkeit aus: c ≈ 3 · 10⁸ m/s. Sie brauchen kein Medium. Das **elektromagnetische Spektrum** deckt einen enormen Frequenz- und Wellenlängenbereich ab. Von langen zu kurzen Wellenlängen: **Radiowellen** (> 1 m), **Mikrowellen** (1 mm – 1 m), **Infrarotstrahlung** (700 nm – 1 mm), **sichtbares Licht** (400–700 nm, Rot → Violett), **Ultraviolettstrahlung** (10–400 nm), **Röntgenstrahlung** (0,01–10 nm), **Gammastrahlung** (< 0,01 nm). Mit abnehmender Wellenlänge steigt die Frequenz und die Energie der Photonen: E = h · f. h = 6,626 · 10⁻³⁴ J·s ist das Plancksche Wirkungsquantum.

**Sichtbares Licht** macht nur einen winzigen Teil des Spektrums aus (400–700 nm). Rotes Licht: λ ≈ 700 nm (geringste Energie). Violettes Licht: λ ≈ 400 nm (höchste Energie). **Infrarotstrahlung** wird als Wärme empfunden. Alle warmen Körper senden IR aus. **UV-Strahlung** ist energiereicher. Einteilung: **UV-A** (315–400 nm, Bräunung), **UV-B** (280–315 nm, Vitamin-D-Synthese, Sonnenbrand), **UV-C** (100–280 nm, keimtötend). Die Ozonschicht absorbiert den Großteil der UV-B- und die gesamte UV-C-Strahlung.

**Röntgenstrahlung** durchdringt Weichteilgewebe und wird von dichten Strukturen (Knochen, Metall) absorbiert. Das ist die Grundlage der Röntgendiagnostik. In der **Computertomographie (CT)** werden Röntgenstrahlen aus verschiedenen Winkeln aufgenommen und zu Schnittbildern verarbeitet. **Gammastrahlung** entsteht bei radioaktiven Zerfällen und hat die höchste Energie. Sie wird in der Strahlentherapie zur Tumorbehandlung und in der Nuklearmedizin (PET, SPECT) eingesetzt.

Die **biologische Wirkung** hängt von der Energie ab: **Ab dem UV-Bereich (UV, Röntgen, Gamma) ist Strahlung ionisierend.** Sie hat genug Energie, um Elektronen aus Atomen zu lösen und kann DNA-Schäden verursachen. Radiowellen, Mikrowellen, Infrarot und sichtbares Licht sind nicht-ionisierend.`,
      merksätze: [
        'Elektromagnetisches Spektrum (nach steigender Frequenz/Energie): Radio → Mikrowelle → IR → sichtbares Licht → UV → Röntgen → Gamma. E = h·f.',
        'Ab UV-Bereich: ionisierende Strahlung (DNA-Schäden möglich). Sichtbares Licht: 400 nm (violett) bis 700 nm (rot). Alle EM-Wellen: c = 3·10⁸ m/s im Vakuum.',
      ],
      altfrage: {
        question: 'Welche Wellenlänge hat grünes Licht (f ≈ 6·10¹⁴ Hz)? (c = 3·10⁸ m/s)',
        answer: 'λ = c/f = 3·10⁸ / 6·10¹⁴ = 5·10⁻⁷ m = 500 nm. Dies liegt im sichtbaren Bereich.',
      },
      klinischerBezug:
        'In der Medizin wird fast das gesamte EM-Spektrum genutzt: **Radiowellen** (MRT), **Mikrowellen** (Diathermie), **IR** (Wärmelampen, Thermographie), **sichtbares Licht** (Endoskopie, Phototherapie bei Neugeborenenikterus — Abbau von Bilirubin durch blaues Licht 450–470 nm), **UV** (Desinfektion, PUVA-Therapie bei Psoriasis), **Röntgen** (Radiographie, CT), **Gamma** (Strahlentherapie, PET). Die Photonenenergie bestimmt die biologische Wirkung: E(Gamma) >> E(Röntgen) >> E(UV) >> E(sichtbar).',
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
