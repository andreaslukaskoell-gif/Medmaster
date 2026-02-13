export const fragenPart2 = [
  {
    id: 'ph-q-051',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Ein Fadenpendel schwingt mit einer Periodendauer von 2 s. Welche Aussage zur Frequenz dieser Schwingung ist korrekt?',
    optionen: [
      'Die Frequenz beträgt 2 Hz.',
      'Die Frequenz beträgt 0,5 Hz.',
      'Die Frequenz beträgt 1 Hz.',
      'Die Frequenz beträgt 4 Hz.',
      'Die Frequenz beträgt 0,25 Hz.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Frequenz f ist der Kehrwert der Periodendauer T: f = 1/T = 1/(2 s) = 0,5 Hz. Eine Frequenz von 0,5 Hz bedeutet, dass das Pendel eine halbe Schwingung pro Sekunde ausführt.',
    strategieTipp: 'Merke die Grundformel: f = 1/T. Frequenz und Periodendauer sind reziproke Größen.'
  },
  {
    id: 'ph-q-052',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein harmonischer Oszillator hat eine Amplitude von 5 cm und eine Kreisfrequenz von 10 rad/s. Welche maximale Geschwindigkeit erreicht der Oszillator?',
    optionen: [
      '25 cm/s',
      '50 cm/s',
      '75 cm/s',
      '100 cm/s',
      '10 cm/s'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die maximale Geschwindigkeit bei harmonischer Schwingung ist v_max = ω × A = 10 rad/s × 5 cm = 50 cm/s. Diese Geschwindigkeit wird beim Durchgang durch die Ruhelage erreicht.',
    strategieTipp: 'Bei harmonischen Schwingungen gilt: v_max = ω × A. Die maximale Geschwindigkeit tritt auf, wenn die Auslenkung null ist.'
  },
  {
    id: 'ph-q-053',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die Länge eines Fadenpendels wird vervierfacht. Wie ändert sich die Periodendauer?',
    optionen: [
      'Sie bleibt gleich.',
      'Sie verdoppelt sich.',
      'Sie vervierfacht sich.',
      'Sie halbiert sich.',
      'Sie wird achtmal so groß.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Periodendauer eines Fadenpendels ist T = 2π√(l/g). Da T proportional zur Wurzel der Länge ist, führt eine Vervierfachung der Länge zu einer Verdopplung der Periodendauer: √4 = 2.',
    strategieTipp: 'Beachte die Wurzelbeziehung: T ∝ √l. Bei Vervierfachung der Länge nimmt die Periodendauer um den Faktor √4 = 2 zu.'
  },
  {
    id: 'ph-q-054',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Federpendel mit Masse m = 200 g und Federkonstante D = 50 N/m schwingt harmonisch. Welche Periodendauer hat diese Schwingung?',
    optionen: [
      'T ≈ 0,13 s',
      'T ≈ 0,40 s',
      'T ≈ 0,63 s',
      'T ≈ 1,26 s',
      'T ≈ 0,28 s'
    ],
    korrekteAntwort: 1,
    erklärung: 'Für ein Federpendel gilt T = 2π√(m/D) = 2π√(0,2 kg / 50 N/m) = 2π√0,004 s² = 2π × 0,0632 s ≈ 0,40 s.',
    strategieTipp: 'Wandle Gramm in Kilogramm um! Formel: T = 2π√(m/D). Rechne sorgfältig mit der Wurzel.'
  },
  {
    id: 'ph-q-055',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was charakterisiert eine gedämpfte Schwingung im Vergleich zu einer ungedämpften harmonischen Schwingung?',
    optionen: [
      'Die Frequenz nimmt kontinuierlich zu.',
      'Die Amplitude nimmt mit der Zeit ab.',
      'Die Periodendauer bleibt konstant, aber die Phase ändert sich.',
      'Die Energie des Systems nimmt zu.',
      'Die Schwingung wird schneller.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei gedämpften Schwingungen wird mechanische Energie durch Reibungskräfte in Wärme umgewandelt. Dies führt zu einer kontinuierlichen Abnahme der Amplitude, während die Frequenz nahezu konstant bleibt.',
    strategieTipp: 'Dämpfung bedeutet Energieverlust durch Reibung, was sich in abnehmender Amplitude zeigt.'
  },
  {
    id: 'ph-q-056',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine Welle breitet sich mit der Geschwindigkeit v = 340 m/s aus und hat eine Wellenlänge von λ = 0,68 m. Welche Frequenz hat diese Welle?',
    optionen: [
      '231 Hz',
      '500 Hz',
      '680 Hz',
      '850 Hz',
      '1020 Hz'
    ],
    korrekteAntwort: 1,
    erklärung: 'Mit der Wellengleichung v = f × λ ergibt sich: f = v/λ = 340 m/s / 0,68 m = 500 Hz. Dies entspricht einem hörbaren Ton.',
    strategieTipp: 'Die fundamentale Wellengleichung v = f × λ gilt für alle Wellentypen. Stelle nach der gesuchten Größe um.'
  },
  {
    id: 'ph-q-057',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche der folgenden Aussagen über Transversalwellen ist korrekt?',
    optionen: [
      'Die Schwingungsrichtung ist parallel zur Ausbreitungsrichtung.',
      'Die Schwingungsrichtung ist senkrecht zur Ausbreitungsrichtung.',
      'Transversalwellen können sich nicht in Festkörpern ausbreiten.',
      'Transversalwellen haben keine Wellenlänge.',
      'Transversalwellen sind immer gedämpft.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei Transversalwellen (z.B. Licht, Seilwellen) schwingen die Teilchen senkrecht zur Ausbreitungsrichtung der Welle. Im Gegensatz dazu schwingen bei Longitudinalwellen (z.B. Schall) die Teilchen parallel zur Ausbreitungsrichtung.',
    strategieTipp: 'Trans-versal = quer, quer zur Ausbreitungsrichtung. Beispiel: Seilwelle.'
  },
  {
    id: 'ph-q-058',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Zwei kohärente Wellen mit gleicher Amplitude und Frequenz überlagern sich. An einem Punkt beträgt der Gangunterschied genau λ/2. Was tritt auf?',
    optionen: [
      'Konstruktive Interferenz mit maximaler Amplitude',
      'Destruktive Interferenz mit Amplitude null',
      'Teilweise konstruktive Interferenz',
      'Beugung',
      'Reflexion'
    ],
    korrekteAntwort: 1,
    erklärung: 'Ein Gangunterschied von λ/2 entspricht einem Phasenunterschied von π (180°). Die Wellen sind gegenphasig und löschen sich aus (destruktive Interferenz). Dies ist ein klassisches Interferenzmuster.',
    strategieTipp: 'Gangunterschied λ/2, 3λ/2, 5λ/2... führt zu destruktiver Interferenz. Gangunterschied 0, λ, 2λ... führt zu konstruktiver Interferenz.'
  },
  {
    id: 'ph-q-059',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Eine Welle der Wellenlänge λ = 600 nm trifft auf einen Doppelspalt mit Spaltabstand d = 0,3 mm. Auf einem Schirm in L = 2 m Entfernung wird ein Interferenzmuster beobachtet. Welcher Abstand besteht zwischen zwei benachbarten hellen Streifen?',
    optionen: [
      '2 mm',
      '4 mm',
      '6 mm',
      '8 mm',
      '10 mm'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Streifenabstand beim Doppelspalt ist Δy = λ × L / d = (600 × 10⁻⁹ m × 2 m) / (0,3 × 10⁻³ m) = 1200 × 10⁻⁹ m / (0,3 × 10⁻³ m) = 4 × 10⁻³ m = 4 mm.',
    strategieTipp: 'Doppelspalt-Formel: Δy = λL/d. Achte auf konsistente Einheiten (nm → m, mm → m).'
  },
  {
    id: 'ph-q-060',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter Beugung von Wellen?',
    optionen: [
      'Die Reflexion von Wellen an einer Grenzfläche',
      'Die Ausbreitung von Wellen in den geometrischen Schattenraum',
      'Die Änderung der Ausbreitungsgeschwindigkeit beim Medienwechsel',
      'Die Verstärkung von Wellen durch Überlagerung',
      'Die Dämpfung von Wellen durch Absorption'
    ],
    korrekteAntwort: 1,
    erklärung: 'Beugung beschreibt das Phänomen, dass Wellen Hindernisse umgehen und sich in Bereiche ausbreiten, die nach den Gesetzen der geometrischen Optik im Schatten liegen sollten. Dies ist besonders ausgeprägt, wenn die Hindernisabmessungen in der Größenordnung der Wellenlänge liegen.',
    strategieTipp: 'Beugung = Ablenkung von Wellen an Kanten und Hindernissen. Je kleiner das Hindernis im Verhältnis zur Wellenlänge, desto stärker die Beugung.'
  },
  {
    id: 'ph-q-061',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine elektromagnetische Welle wird durch einen Polarisationsfilter geschickt. Welche Aussage ist korrekt?',
    optionen: [
      'Nur Longitudinalwellen können polarisiert werden.',
      'Nach dem Filter schwingen die elektrischen Feldvektoren bevorzugt in einer Ebene.',
      'Die Frequenz der Welle ändert sich.',
      'Die Ausbreitungsgeschwindigkeit verdoppelt sich.',
      'Polarisation ist nur bei Schallwellen möglich.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Polarisation ist eine Eigenschaft von Transversalwellen wie Licht. Ein Polarisationsfilter lässt nur Schwingungen in einer bestimmten Ebene durch. Nach dem Filter ist das Licht linear polarisiert, d.h. die elektrischen Feldvektoren schwingen nur noch in einer Ebene.',
    strategieTipp: 'Nur Transversalwellen können polarisiert werden. Longitudinalwellen wie Schall nicht.'
  },
  {
    id: 'ph-q-062',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Zwei identische Polarisationsfilter werden hintereinander aufgestellt. Der zweite Filter ist um 60° gegenüber dem ersten gedreht. Welcher Anteil der Intensität des ursprünglich unpolarisierten Lichts wird durchgelassen?',
    optionen: [
      '12,5%',
      '25%',
      '37,5%',
      '50%',
      '75%'
    ],
    korrekteAntwort: 0,
    erklärung: 'Der erste Filter lässt 50% der Intensität durch (unpolarisiertes Licht). Der zweite Filter folgt dem Gesetz von Malus: I = I₀ × cos²(60°) = I₀ × 0,25. Gesamtintensität: 0,5 × 0,25 = 0,125 = 12,5%.',
    strategieTipp: 'Gesetz von Malus: I = I₀ × cos²(α). Bei unpolarisiertem Licht wird zunächst die Hälfte durchgelassen.'
  },
  {
    id: 'ph-q-063',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine stehende Welle entsteht auf einer Saite der Länge L = 80 cm. Die Grundschwingung hat eine Frequenz von 200 Hz. Welche Wellenlänge hat die Grundschwingung?',
    optionen: [
      '40 cm',
      '80 cm',
      '160 cm',
      '120 cm',
      '200 cm'
    ],
    korrekteAntwort: 2,
    erklärung: 'Bei der Grundschwingung (1. Harmonische) einer beidseitig eingespannten Saite gilt: L = λ/2, also λ = 2L = 2 × 80 cm = 160 cm. Die Saite bildet genau einen halben Wellenberg aus.',
    strategieTipp: 'Grundschwingung einer Saite: L = λ/2, daher λ = 2L. Die Saitenlänge entspricht einer halben Wellenlänge.'
  },
  {
    id: 'ph-q-064',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Auf einer 60 cm langen Saite bildet sich die 3. Harmonische einer stehenden Welle aus. Wie viele Schwingungsknoten befinden sich auf der Saite (ohne die Enden)?',
    optionen: [
      '1',
      '2',
      '3',
      '4',
      '5'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die n-te Harmonische hat n-1 Knoten zwischen den Enden. Bei der 3. Harmonischen sind dies 3-1 = 2 Knoten. Die Saite schwingt in drei Segmenten, getrennt durch zwei innere Knoten.',
    strategieTipp: 'Anzahl innerer Knoten = Nummer der Harmonischen minus 1. Die 3. Harmonische hat 2 innere Knoten.'
  },
  {
    id: 'ph-q-065',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Fadenpendel führt kleine Schwingungen aus. Die maximale Auslenkung beträgt 8 cm, die maximale Geschwindigkeit 40 cm/s. Welche Kreisfrequenz hat die Schwingung?',
    optionen: [
      '2,5 rad/s',
      '5 rad/s',
      '7,5 rad/s',
      '10 rad/s',
      '15 rad/s'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei harmonischer Schwingung gilt v_max = ω × A. Umgestellt: ω = v_max / A = 40 cm/s / 8 cm = 5 rad/s. Die Kreisfrequenz beschreibt, wie schnell die Phase der Schwingung fortschreitet.',
    strategieTipp: 'Aus v_max = ω × A folgt ω = v_max / A. Die Kreisfrequenz verbindet Amplitude und maximale Geschwindigkeit.'
  },
  {
    id: 'ph-q-066',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Eigenschaft bleibt bei der Reflexion einer Welle an einer festen Wand immer erhalten?',
    optionen: [
      'Die Amplitude nimmt zu.',
      'Die Frequenz bleibt gleich.',
      'Die Wellenlänge verdoppelt sich.',
      'Die Ausbreitungsgeschwindigkeit ändert sich.',
      'Die Phase bleibt unverändert.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei der Reflexion bleiben Frequenz und Wellenlänge erhalten (da das Medium gleich bleibt). Die Phase kann sich um π ändern (Phasensprung bei Reflexion an festem Ende), aber die Frequenz ist eine intrinsische Eigenschaft der Welle, die sich nicht ändert.',
    strategieTipp: 'Reflexion: Frequenz und Wellenlänge bleiben im gleichen Medium erhalten. An festem Ende tritt ein Phasensprung von π auf.'
  },
  {
    id: 'ph-q-067',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine Schallwelle (v = 340 m/s) hat eine Frequenz von 1700 Hz. Welche Wellenlänge hat dieser Schall?',
    optionen: [
      '10 cm',
      '20 cm',
      '30 cm',
      '40 cm',
      '50 cm'
    ],
    korrekteAntwort: 1,
    erklärung: 'Mit v = f × λ ergibt sich: λ = v / f = 340 m/s / 1700 Hz = 0,2 m = 20 cm. Diese Wellenlänge liegt im Bereich hörbarer Töne.',
    strategieTipp: 'Wellengleichung umstellen: λ = v / f. Schallgeschwindigkeit in Luft ≈ 340 m/s ist eine wichtige Konstante.'
  },
  {
    id: 'ph-q-068',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Federpendel schwingt mit der Amplitude A = 10 cm. An welcher Position ist die kinetische Energie gleich der potentiellen Energie?',
    optionen: [
      'Bei x = 0 cm (Ruhelage)',
      'Bei x = ±7,07 cm',
      'Bei x = ±5 cm',
      'Bei x = ±10 cm (maximale Auslenkung)',
      'Bei x = ±8,66 cm'
    ],
    korrekteAntwort: 1,
    erklärung: 'Kinetische und potentielle Energie sind gleich, wenn E_kin = E_pot = E_gesamt/2. Da E_pot = (1/2)Dx² und E_gesamt = (1/2)DA², folgt: (1/2)Dx² = (1/4)DA², also x² = A²/2, x = A/√2 = 10 cm/√2 ≈ 7,07 cm.',
    strategieTipp: 'Bei x = A/√2 sind kinetische und potentielle Energie gleich groß. Dies ist eine wichtige Position bei harmonischen Schwingungen.'
  },
  {
    id: 'ph-q-069',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welcher Zusammenhang besteht zwischen der Periodendauer T und der Kreisfrequenz ω?',
    optionen: [
      'ω = T',
      'ω = 2π/T',
      'ω = T/2π',
      'ω = 1/T',
      'ω = πT'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Kreisfrequenz ist definiert als ω = 2π/T = 2πf. Sie gibt an, welchen Winkel (in Radiant) pro Zeiteinheit durchlaufen wird. Eine volle Schwingung entspricht 2π Radiant.',
    strategieTipp: 'Merke: ω = 2πf = 2π/T. Die Kreisfrequenz ist die Winkelgeschwindigkeit der entsprechenden Kreisbewegung.'
  },
  {
    id: 'ph-q-070',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was geschieht mit der Energie bei einer gedämpften Schwingung?',
    optionen: [
      'Sie bleibt konstant.',
      'Sie wird in Wärme umgewandelt.',
      'Sie nimmt zu.',
      'Sie wird in potentielle Energie umgewandelt.',
      'Sie oszilliert zwischen zwei Werten.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei gedämpften Schwingungen wird mechanische Energie durch Reibungskräfte (z.B. Luftwiderstand, innere Reibung) kontinuierlich in Wärmeenergie umgewandelt. Dies führt zur Abnahme der Amplitude.',
    strategieTipp: 'Dämpfung bedeutet Energieverlust durch Reibung. Die mechanische Energie wird in Wärme dissipiert.'
  },
  {
    id: 'ph-q-071',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Zwei Wellen gleicher Frequenz und Amplitude überlagern sich mit einem Phasenunterschied von π/2. Welche resultierende Amplitude ergibt sich?',
    optionen: [
      '0',
      'A√2',
      'A',
      '2A',
      'A/2'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei einem Phasenunterschied von π/2 addieren sich die Amplituden vektoriell: A_res = √(A² + A²) = A√2. Dies entspricht einer teilweise konstruktiven Interferenz.',
    strategieTipp: 'Phasenunterschied π/2 (90°): vektorielle Addition der Amplituden. Nutze den Satz des Pythagoras: A_res = √(A₁² + A₂²).'
  },
  {
    id: 'ph-q-072',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Eine Saite der Länge 1,2 m und linearer Massendichte μ = 2 g/m wird mit einer Kraft F = 80 N gespannt. Welche Frequenz hat die Grundschwingung?',
    optionen: [
      '50 Hz',
      '83,3 Hz',
      '100 Hz',
      '125 Hz',
      '166,7 Hz'
    ],
    korrekteAntwort: 1,
    erklärung: 'Wellengeschwindigkeit: v = √(F/μ) = √(80 N / 0,002 kg/m) = √40000 m²/s² = 200 m/s. Grundschwingung: f₁ = v/(2L) = 200 m/s / (2 × 1,2 m) = 200/2,4 Hz ≈ 83,3 Hz.',
    strategieTipp: 'Zweistufig rechnen: (1) Wellengeschwindigkeit v = √(F/μ), (2) Grundfrequenz f₁ = v/(2L). Achte auf Einheiten (g → kg).'
  },
  {
    id: 'ph-q-073',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist der Unterschied zwischen Longitudinal- und Transversalwellen?',
    optionen: [
      'Longitudinalwellen haben eine größere Wellenlänge.',
      'Bei Longitudinalwellen ist die Schwingungsrichtung parallel zur Ausbreitungsrichtung.',
      'Transversalwellen breiten sich schneller aus.',
      'Longitudinalwellen können nicht reflektiert werden.',
      'Transversalwellen haben keine Frequenz.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Longitudinalwellen (z.B. Schall): Schwingung parallel zur Ausbreitung. Transversalwellen (z.B. Licht, Seilwelle): Schwingung senkrecht zur Ausbreitung. Dies ist der fundamentale Unterschied zwischen beiden Wellentypen.',
    strategieTipp: 'Longitudinal = längs, parallel zur Ausbreitung. Transversal = quer, senkrecht zur Ausbreitung.'
  },
  {
    id: 'ph-q-074',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein Pendel schwingt auf der Erde mit einer Periodendauer von 2 s. Welche Periodendauer hätte es auf dem Mond (g_Mond ≈ g_Erde/6)?',
    optionen: [
      '0,82 s',
      '4,9 s',
      '3,46 s',
      '1,41 s',
      '2,45 s'
    ],
    korrekteAntwort: 1,
    erklärung: 'T = 2π√(l/g), also T ∝ 1/√g. Wenn g um den Faktor 6 kleiner wird, nimmt T um den Faktor √6 ≈ 2,45 zu: T_Mond = 2 s × √6 ≈ 4,9 s.',
    strategieTipp: 'T ∝ 1/√g. Kleinere Gravitation führt zu längerer Periodendauer. Faktor: √(g_Erde/g_Mond) = √6.'
  },
  {
    id: 'ph-q-075',
    stichwortId: 'ph-3-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine harmonische Welle wird durch y(x,t) = 0,05 m × sin(10x - 50t) beschrieben. Welche Ausbreitungsgeschwindigkeit hat die Welle?',
    optionen: [
      '2 m/s',
      '5 m/s',
      '10 m/s',
      '50 m/s',
      '0,5 m/s'
    ],
    korrekteAntwort: 1,
    erklärung: 'Aus der Wellengleichung y = A sin(kx - ωt) liest man ab: k = 10 rad/m, ω = 50 rad/s. Ausbreitungsgeschwindigkeit: v = ω/k = 50/10 = 5 m/s.',
    strategieTipp: 'Aus y = A sin(kx - ωt) folgt: v = ω/k. Die Köffizienten vor x und t geben k und ω an.'
  },
  {
    id: 'ph-q-076',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Temperatur auf der Celsius-Skala entspricht 300 K auf der Kelvin-Skala?',
    optionen: [
      '0°C',
      '27°C',
      '100°C',
      '273°C',
      '-27°C'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Umrechnung zwischen Kelvin und Celsius erfolgt mit T(°C) = T(K) - 273,15. Also: T = 300 K - 273 K = 27°C. Der Nullpunkt der Kelvin-Skala liegt bei -273,15°C (absoluter Nullpunkt).',
    strategieTipp: 'Merke: T(°C) = T(K) - 273. Raumtemperatur liegt bei etwa 300 K = 27°C.'
  },
  {
    id: 'ph-q-077',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter der inneren Energie eines Systems?',
    optionen: [
      'Nur die kinetische Energie der Moleküle',
      'Die Summe aller Energie­formen der Teilchen im System',
      'Nur die potentielle Energie zwischen den Molekülen',
      'Die zugeführte Wärmeenergie',
      'Die mechanische Arbeit am System'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die innere Energie U ist die Gesamtenergie aller Teilchen im System. Sie umfasst kinetische Energie (Translation, Rotation, Vibration) und potentielle Energie (Wechselwirkungen zwischen Teilchen). Bei idealen Gasen besteht sie nur aus kinetischer Energie.',
    strategieTipp: 'Innere Energie = alle mikroskopischen Energieformen. Sie ist eine Zustandsgröße und hängt von Temperatur, Druck und Volumen ab.'
  },
  {
    id: 'ph-q-078',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Bei welchem Aggregatzustand ist die innere Energie eines Stoffes bei gleicher Temperatur am größten?',
    optionen: [
      'Fest',
      'Gasförmig',
      'Flüssig',
      'Bei allen gleich',
      'Es gibt keinen Unterschied.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Beim Übergang fest → flüssig → gasförmig muss Energie zugeführt werden (Schmelz- und Verdampfungswärme), um die Bindungen zu lösen. Bei gleicher Temperatur hat der gasförmige Zustand die höchste innere Energie, da die potentielle Energie der Teilchen am größten ist (schwache Bindungen).',
    strategieTipp: 'Reihenfolge der inneren Energie: fest < flüssig < gasförmig (bei gleicher Temperatur). Phasenübergänge erfordern Energiezufuhr.'
  },
  {
    id: 'ph-q-079',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine Zelle wird in eine hypertonische Lösung gebracht. Was geschieht aufgrund des osmotischen Drucks?',
    optionen: [
      'Die Zelle nimmt Wasser auf und schwillt an.',
      'Wasser verlässt die Zelle, sie schrumpft.',
      'Der osmotische Druck hat keinen Effekt.',
      'Die Zelle nimmt gelöste Stoffe auf.',
      'Die Zellmembran wird undurchlässig.'
    ],
    korrekteAntwort: 1,
    erklärung: 'In einer hypertonischen Lösung (höhere Konzentration außen) ist der osmotische Druck außerhalb größer. Wasser diffundiert aus der Zelle heraus in Richtung höherer Konzentration, die Zelle schrumpft (Plasmolyse bei Pflanzenzellen).',
    strategieTipp: 'Hypertonisch = höhere Konzentration außen → Wasser fließt raus. Hypotonisch = niedrigere Konzentration außen → Wasser fließt rein.'
  },
  {
    id: 'ph-q-080',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Der osmotische Druck einer Lösung beträgt 2,5 × 10⁵ Pa bei 27°C. Welche molare Konzentration hat die Lösung? (R = 8,314 J/(mol×K))',
    optionen: [
      '0,5 mol/L',
      '100 mol/m³',
      '200 mol/m³',
      '1000 mol/m³',
      '50 mol/m³'
    ],
    korrekteAntwort: 1,
    erklärung: 'Van\'t Hoff-Gleichung: π = cRT, also c = π/(RT) = 2,5 × 10⁵ Pa / (8,314 J/(mol×K) × 300 K) = 2,5 × 10⁵ / 2494,2 mol/m³ ≈ 100 mol/m³ = 0,1 mol/L.',
    strategieTipp: 'Osmotischer Druck: π = cRT (van\'t Hoff). Achte auf T in Kelvin (27°C = 300 K). Ergebnis in mol/m³, nicht mol/L.'
  },
  {
    id: 'ph-q-081',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was besagt der erste Hauptsatz der Thermodynamik?',
    optionen: [
      'Energie kann erzeugt und vernichtet werden.',
      'Die Änderung der inneren Energie ist gleich der Summe von zugeführter Wärme und verrichteter Arbeit.',
      'Die Entropie nimmt stets zu.',
      'Wärme fließt von kalt nach warm.',
      'Der absolute Nullpunkt kann erreicht werden.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der 1. Hauptsatz ist der Energieerhaltungssatz der Thermodynamik: ΔU = Q + W, wobei Q die zugeführte Wärme und W die am System verrichtete Arbeit ist. Energie wird nicht erzeugt oder vernichtet, sondern nur umgewandelt.',
    strategieTipp: 'Merke: ΔU = Q + W. Vorzeichenkonvention: Q > 0 wenn Wärme zugeführt wird, W > 0 wenn am System Arbeit verrichtet wird.'
  },
  {
    id: 'ph-q-082',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein ideales Gas dehnt sich isotherm aus. Welche Aussage ist korrekt?',
    optionen: [
      'Die innere Energie nimmt zu.',
      'Die vom Gas verrichtete Arbeit entspricht der zugeführten Wärme.',
      'Es wird keine Wärme ausgetauscht.',
      'Die Temperatur steigt.',
      'Der Druck bleibt konstant.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei isothermer Zustandsänderung (T = const) bleibt beim idealen Gas die innere Energie konstant (ΔU = 0). Nach dem 1. Hauptsatz gilt dann: Q = -W. Die zugeführte Wärme wird vollständig in Arbeit umgewandelt.',
    strategieTipp: 'Isotherm: T = const → ΔU = 0 (ideales Gas) → Q = -W. Die gesamte zugeführte Wärme wird in Volumenarbeit umgewandelt.'
  },
  {
    id: 'ph-q-083',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein ideales Gas mit n = 2 mol wird isobar (p = 10⁵ Pa) von V₁ = 0,02 m³ auf V₂ = 0,05 m³ erwärmt. Welche Arbeit verrichtet das Gas?',
    optionen: [
      '1500 J',
      '3000 J',
      '4500 J',
      '6000 J',
      '7500 J'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei isobarer Expansion: W = -p × ΔV = -10⁵ Pa × (0,05 m³ - 0,02 m³) = -10⁵ Pa × 0,03 m³ = -3000 J. Das negative Vorzeichen bedeutet, dass das Gas Arbeit verrichtet (an der Umgebung). Die vom Gas verrichtete Arbeit beträgt 3000 J.',
    strategieTipp: 'Isobare Arbeit: W = -p × ΔV. Negatives Vorzeichen: Gas leistet Arbeit. Positives ΔV: Expansion.'
  },
  {
    id: 'ph-q-084',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was beschreibt das ideale Gasgesetz?',
    optionen: [
      'Den Zusammenhang zwischen Wärme und Arbeit',
      'Die Beziehung zwischen Druck, Volumen, Stoffmenge und Temperatur',
      'Die Änderung der Entropie',
      'Die Wärmekapazität von Gasen',
      'Die Diffusionsgeschwindigkeit'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das ideale Gasgesetz lautet pV = nRT und verknüpft die Zustandsgrößen Druck (p), Volumen (V), Stoffmenge (n) und Temperatur (T). R ist die universelle Gaskonstante (8,314 J/(mol×K)).',
    strategieTipp: 'Merke: pV = nRT. Diese Gleichung gilt gut für verdünnte Gase bei nicht zu tiefen Temperaturen.'
  },
  {
    id: 'ph-q-085',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein ideales Gas bei 20°C und 1 bar wird auf 80°C erwärmt bei konstantem Volumen. Welcher Druck stellt sich ein?',
    optionen: [
      '1,2 bar',
      '1,2 bar',
      '1,4 bar',
      '4 bar',
      '0,8 bar'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei isochorer Zustandsänderung (V = const) gilt: p₁/T₁ = p₂/T₂. Mit T₁ = 293 K und T₂ = 353 K: p₂ = p₁ × T₂/T₁ = 1 bar × 353/293 ≈ 1,20 bar.',
    strategieTipp: 'Isochor: p/T = const. Achte auf absolute Temperatur in Kelvin! T(K) = T(°C) + 273.'
  },
  {
    id: 'ph-q-086',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Carnot-Prozess arbeitet zwischen den Temperaturen T₁ = 600 K und T₂ = 300 K. Welchen Wirkungsgrad hat diese ideale Wärmekraftmaschine?',
    optionen: [
      '25%',
      '50%',
      '75%',
      '100%',
      '33%'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Carnot-Wirkungsgrad ist η = 1 - T₂/T₁ = 1 - 300 K/600 K = 1 - 0,5 = 0,5 = 50%. Dies ist der maximal mögliche Wirkungsgrad für eine Wärmekraftmaschine zwischen diesen Temperaturen.',
    strategieTipp: 'Carnot-Wirkungsgrad: η = 1 - T_kalt/T_warm. Absolute Temperaturen verwenden! Dies ist der theoretische Maximalwirkungsgrad.'
  },
  {
    id: 'ph-q-087',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist die Anomalie des Wassers?',
    optionen: [
      'Wasser hat die höchste Dichte bei 0°C.',
      'Wasser hat die höchste Dichte bei 4°C.',
      'Wasser dehnt sich beim Abkühlen nicht aus.',
      'Wasser kann nicht gefrieren.',
      'Wasser hat keine Oberflächenspannung.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Dichteanomalie des Wassers bedeutet, dass Wasser seine größte Dichte bei 4°C hat (nicht bei 0°C). Beim weiteren Abkühlen zu Eis dehnt es sich aus, weshalb Eis auf Wasser schwimmt. Dies ist lebenswichtig für aquatische Ökosysteme.',
    strategieTipp: 'Anomalie des Wassers: maximale Dichte bei 4°C. Deshalb schwimmt Eis und Gewässer frieren von oben nach unten.'
  },
  {
    id: 'ph-q-088',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Wärmemenge ist nötig, um 2 kg Wasser von 20°C auf 80°C zu erwärmen? (c_Wasser = 4200 J/(kg×K))',
    optionen: [
      '252 kJ',
      '504 kJ',
      '336 kJ',
      '672 kJ',
      '168 kJ'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Wärmemenge berechnet sich mit Q = m × c × ΔT = 2 kg × 4200 J/(kg×K) × (80°C - 20°C) = 2 × 4200 × 60 J = 504000 J = 504 kJ.',
    strategieTipp: 'Formel Q = mcΔT. Spezifische Wärmekapazität von Wasser (4200 J/(kg×K)) sollte man kennen.'
  },
  {
    id: 'ph-q-089',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: '500 g Wasser bei 80°C werden mit 300 g Wasser bei 20°C gemischt. Welche Mischtemperatur stellt sich ein? (Wärmeverluste vernachlässigt)',
    optionen: [
      '45°C',
      '57,5°C',
      '50°C',
      '60°C',
      '52,5°C'
    ],
    korrekteAntwort: 1,
    erklärung: 'Wärmebilanz: m₁c(T_m - T₁) + m₂c(T_m - T₂) = 0. Da c gleich ist: m₁(T_m - 80) + m₂(T_m - 20) = 0. Also: 500(T_m - 80) + 300(T_m - 20) = 0 → 800T_m = 46000 → T_m = 57,5°C.',
    strategieTipp: 'Mischtemperatur: Wärmeabgabe = Wärmeaufnahme. Bei gleichem Stoff kürzt sich c heraus, rechne mit Massen als Gewichtung.'
  },
  {
    id: 'ph-q-090',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist die spezifische Wärmekapazität eines Stoffes?',
    optionen: [
      'Die Wärme, die 1 kg des Stoffes enthält',
      'Die Wärme, die nötig ist, um 1 kg des Stoffes um 1 K zu erwärmen',
      'Die Temperatur, bei der der Stoff schmilzt',
      'Die Dichte des Stoffes bei 20°C',
      'Die Wärmeleitfähigkeit des Stoffes'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die spezifische Wärmekapazität c gibt an, wie viel Energie benötigt wird, um 1 kg eines Stoffes um 1 K (oder 1°C) zu erwärmen. Einheit: J/(kg×K). Sie ist eine stoffspezifische Konstante.',
    strategieTipp: 'Spezifische Wärmekapazität c: Energiebedarf pro kg und Kelvin. Wasser hat mit 4200 J/(kg×K) einen sehr hohen Wert.'
  },
  {
    id: 'ph-q-091',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein ideales Gas wird adiabatisch komprimiert. Welche Aussage ist korrekt?',
    optionen: [
      'Die Temperatur bleibt konstant.',
      'Die Temperatur steigt.',
      'Es findet Wärmeaustausch mit der Umgebung statt.',
      'Der Druck bleibt konstant.',
      'Die innere Energie bleibt konstant.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Adiabatisch bedeutet Q = 0 (keine Wärmeaustausch). Bei Kompression wird Arbeit am Gas verrichtet (W > 0), daher steigt nach dem 1. Hauptsatz die innere Energie und damit die Temperatur: ΔU = W > 0.',
    strategieTipp: 'Adiabatisch: Q = 0. Bei Kompression: W > 0 → ΔU > 0 → T steigt. Bei Expansion: T sinkt.'
  },
  {
    id: 'ph-q-092',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was besagt der zweite Hauptsatz der Thermodynamik?',
    optionen: [
      'Energie kann nicht erzeugt werden.',
      'Wärme fließt nicht spontan von kalt nach warm.',
      'Die Entropie nimmt bei reversiblen Prozessen zu.',
      'Arbeit kann vollständig in Wärme umgewandelt werden.',
      'Der absolute Nullpunkt kann erreicht werden.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der 2. Hauptsatz besagt u.a., dass Wärme nicht spontan von einem kälteren zu einem wärmeren Körper fließt. Äquivalent: Die Entropie eines abgeschlossenen Systems nimmt nie ab. Es gibt keine 100% effizienten Wärmekraftmaschinen.',
    strategieTipp: '2. Hauptsatz: Entropie nimmt zu, Wärme fließt von warm nach kalt, kein Perpetuum mobile möglich.'
  },
  {
    id: 'ph-q-093',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Gas mit Anfangsdruck p₁ = 2 bar und Volumen V₁ = 5 L expandiert isotherm auf V₂ = 15 L. Welcher Enddruck stellt sich ein?',
    optionen: [
      '0,5 bar',
      '0,67 bar',
      '1 bar',
      '1,5 bar',
      '3 bar'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei isothermer Zustandsänderung gilt das Boyle-Mariotte-Gesetz: p₁V₁ = p₂V₂. Also: p₂ = p₁ × V₁/V₂ = 2 bar × 5 L / 15 L = 10/15 bar ≈ 0,67 bar.',
    strategieTipp: 'Isotherm: pV = const (Boyle-Mariotte). Bei Verdreifachung des Volumens sinkt der Druck auf ein Drittel.'
  },
  {
    id: 'ph-q-094',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welcher Aggregatzustand hat die größte Teilchenbeweglichkeit?',
    optionen: [
      'Fest',
      'Gasförmig',
      'Flüssig',
      'Alle gleich',
      'Es kommt auf den Stoff an.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Im gasförmigen Zustand bewegen sich die Teilchen frei und schnell im gesamten verfügbaren Raum. In Flüssigkeiten sind sie beweglich, aber durch Kohäsionskräfte aneinander gebunden. In Festkörpern können sie nur um feste Plätze schwingen.',
    strategieTipp: 'Teilchenbeweglichkeit: gasförmig > flüssig > fest. Dies erklärt die unterschiedlichen makroskopischen Eigenschaften.'
  },
  {
    id: 'ph-q-095',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein ideales Gas enthält n = 3 mol bei T = 300 K und p = 2 × 10⁵ Pa. Welches Volumen nimmt es ein? (R = 8,314 J/(mol×K))',
    optionen: [
      '18,7 L',
      '37,4 L',
      '56,1 L',
      '74,8 L',
      '12,5 L'
    ],
    korrekteAntwort: 1,
    erklärung: 'Aus pV = nRT folgt: V = nRT/p = (3 mol × 8,314 J/(mol×K) × 300 K) / (2 × 10⁵ Pa) = 7482,6 J / (2 × 10⁵ Pa) = 0,0374 m³ = 37,4 L.',
    strategieTipp: 'Ideales Gasgesetz umstellen: V = nRT/p. Achte auf Einheiten: 1 J = 1 Pa×m³, 1 m³ = 1000 L.'
  },
  {
    id: 'ph-q-096',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Eine Wärmekraftmaschine nimmt 1000 J Wärme bei hoher Temperatur auf und gibt 600 J bei niedriger Temperatur ab. Welche mechanische Arbeit wird verrichtet?',
    optionen: [
      '200 J',
      '400 J',
      '600 J',
      '1000 J',
      '1600 J'
    ],
    korrekteAntwort: 1,
    erklärung: 'Nach dem 1. Hauptsatz gilt für einen Kreisprozess: W = Q_zu - Q_ab = 1000 J - 600 J = 400 J. Die Differenz zwischen aufgenommener und abgegebener Wärme wird in mechanische Arbeit umgewandelt.',
    strategieTipp: 'Wärmekraftmaschine: W = Q_heiß - Q_kalt. Die verrichtete Arbeit ist die Differenz der Wärmen.'
  },
  {
    id: 'ph-q-097',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Warum frieren Seen im Winter von oben nach unten?',
    optionen: [
      'Weil kaltes Wasser leichter ist als warmes Wasser.',
      'Wegen der Dichteanomalie des Wassers.',
      'Weil Eis schwerer ist als Wasser.',
      'Weil die Luft von oben kühlt.',
      'Weil der Druck oben kleiner ist.'
    ],
    korrekteAntwort: 1,
    erklärung: 'Aufgrund der Dichteanomalie hat Wasser bei 4°C seine maximale Dichte und sinkt nach unten. Kälteres Wasser (0-4°C) ist leichter und bleibt oben, wo es zu Eis gefriert. Das dichtere 4°C-Wasser am Grund verhindert das Durchfrieren und ermöglicht aquatisches Leben im Winter.',
    strategieTipp: 'Dichteanomalie → 4°C-Wasser sinkt ab → Eisbildung oben → Leben am Grund möglich. Ohne diese Anomalie würden Gewässer von unten nach oben zufrieren.'
  },
  {
    id: 'ph-q-098',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Einheit hat die spezifische Wärmekapazität?',
    optionen: [
      'J/kg',
      'J/(kg×K)',
      'J/K',
      'W/(kg×K)',
      'kJ/mol'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die spezifische Wärmekapazität c hat die Einheit J/(kg×K) oder äquivalent J/(kg×°C). Sie gibt die Energiemenge an, die pro Kilogramm und pro Kelvin Temperaturänderung benötigt wird.',
    strategieTipp: 'Einheit der spezifischen Wärmekapazität: J/(kg×K). Aus Q = mcΔT folgt: c = Q/(mΔT).'
  },
  {
    id: 'ph-q-099',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Bei welchem thermodynamischen Prozess bleibt das Volumen konstant?',
    optionen: [
      'Isobar',
      'Isochor',
      'Isotherm',
      'Adiabatisch',
      'Isentrop'
    ],
    korrekteAntwort: 1,
    erklärung: 'Isochor bedeutet V = konstant. Bei diesem Prozess wird keine Volumenarbeit verrichtet (W = 0), und die gesamte zugeführte Wärme erhöht die innere Energie: ΔU = Q.',
    strategieTipp: 'Merke die Prozesse: isobar (p const), isochor (V const), isotherm (T const), adiabatisch (Q = 0).'
  },
  {
    id: 'ph-q-100',
    stichwortId: 'ph-4-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Dieselmotor komprimiert Luft adiabatisch von 1 bar und 300 K auf 40 bar. Die Temperatur steigt auf etwa 900 K. Warum entzündet sich der Kraftstoff?',
    optionen: [
      'Durch elektrische Funken',
      'Durch die hohe Temperatur bei adiabatischer Kompression',
      'Durch katalytische Reaktion',
      'Durch den hohen Druck allein',
      'Durch Reibung der Moleküle'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei adiabatischer Kompression wird die gesamte Kompressionsarbeit in innere Energie (Temperaturerhöhung) umgewandelt. Die Temperatur steigt auf etwa 900 K (ca. 600°C), was ausreicht, um den eingespritzten Diesel selbst zu entzünden. Deshalb benötigen Dieselmotoren keine Zündkerzen.',
    strategieTipp: 'Dieselprinzip: adiabatische Kompression → T steigt stark → Selbstzündung. Im Gegensatz zum Ottomotor keine Fremdzündung nötig.'
  }
];