export const fragenPart1 = [
  {
    id: 'ch-q-001',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Elementarteilchen befinden sich im Atomkern?',
    optionen: [
      'Nur Protonen',
      'Nur Neutronen',
      'Protonen und Neutronen',
      'Protonen und Elektronen',
      'Neutronen und Elektronen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der Atomkern besteht aus Protonen (positiv geladen) und Neutronen (elektrisch neutral). Die Elektronen befinden sich in der Elektronenhülle außerhalb des Kerns.',
    strategieTipp: 'Merke: Kern = Protonen + Neutronen, Hülle = Elektronen. Die Massenzahl gibt die Summe von Protonen und Neutronen an.'
  },
  {
    id: 'ch-q-002',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Die Ordnungszahl eines Elements gibt an:',
    optionen: [
      'Die Anzahl der Neutronen',
      'Die Anzahl der Protonen',
      'Die Summe von Protonen und Neutronen',
      'Die Anzahl der Elektronen in der äußersten Schale',
      'Die relative Atommasse'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Ordnungszahl (Kernladungszahl) entspricht der Anzahl der Protonen im Atomkern. Sie definiert das chemische Element eindeutig. In einem neutralen Atom entspricht sie auch der Elektronenzahl.',
    strategieTipp: 'Ordnungszahl = Protonenzahl. Diese Zahl steht im Periodensystem links oben beim Element und ist charakteristisch für jedes Element.'
  },
  {
    id: 'ch-q-003',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein Kohlenstoff-14-Atom besitzt:',
    optionen: [
      '6 Protonen und 6 Neutronen',
      '6 Protonen und 8 Neutronen',
      '8 Protonen und 6 Neutronen',
      '7 Protonen und 7 Neutronen',
      '6 Protonen und 14 Neutronen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Kohlenstoff hat die Ordnungszahl 6, also immer 6 Protonen. Die Zahl 14 ist die Massenzahl (Protonen + Neutronen). Daher: 14 - 6 = 8 Neutronen. C-14 ist ein radioaktives Isotop des Kohlenstoffs.',
    strategieTipp: 'Massenzahl - Ordnungszahl = Neutronenzahl. Die Ordnungszahl bleibt bei Isotopen gleich, die Neutronenzahl variiert.'
  },
  {
    id: 'ch-q-004',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Isotope eines Elements unterscheiden sich in:',
    optionen: [
      'Der Anzahl der Protonen',
      'Der Anzahl der Elektronen',
      'Der Anzahl der Neutronen',
      'Der Ordnungszahl',
      'Den chemischen Eigenschaften'
    ],
    korrekteAntwort: 2,
    erklärung: 'Isotope sind Atome desselben Elements (gleiche Protonenzahl) mit unterschiedlicher Neutronenzahl. Sie haben daher unterschiedliche Massenzahlen, aber identische chemische Eigenschaften.',
    strategieTipp: 'Iso-tope = gleicher Ort im Periodensystem. Gleiche Protonen, verschiedene Neutronen. Beispiel: C-12, C-13, C-14.'
  },
  {
    id: 'ch-q-005',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Ion mit der Schreibweise ²³Na⁺ besitzt:',
    optionen: [
      '11 Protonen, 12 Neutronen, 11 Elektronen',
      '11 Protonen, 12 Neutronen, 10 Elektronen',
      '12 Protonen, 11 Neutronen, 11 Elektronen',
      '11 Protonen, 11 Neutronen, 10 Elektronen',
      '11 Protonen, 23 Neutronen, 10 Elektronen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Natrium (Na) hat die Ordnungszahl 11 (11 Protonen). Massenzahl 23 bedeutet 23 - 11 = 12 Neutronen. Das + zeigt, dass ein Elektron fehlt: 11 - 1 = 10 Elektronen.',
    strategieTipp: 'Bei Kationen (positiv): Elektronenzahl = Protonenzahl - Ladung. Bei Anionen (negativ): Elektronenzahl = Protonenzahl + Ladung.'
  },
  {
    id: 'ch-q-006',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Die Masse eines Atoms ist hauptsächlich konzentriert in:',
    optionen: [
      'Der Elektronenhülle',
      'Den äußeren Schalen',
      'Dem Atomkern',
      'Den Valenzorbitalen',
      'Gleichmäßig verteilt über das ganze Atom'
    ],
    korrekteAntwort: 2,
    erklärung: 'Fast die gesamte Masse eines Atoms (>99,9%) befindet sich im winzigen Atomkern, der aus Protonen und Neutronen besteht. Elektronen haben eine vernachlässigbar kleine Masse.',
    strategieTipp: 'Kern = fast gesamte Masse, aber nur etwa 1/100.000 des Atomdurchmessers. Die Hülle bestimmt das Volumen, der Kern die Masse.'
  },
  {
    id: 'ch-q-007',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über Nuklide ist korrekt?',
    optionen: [
      'Alle Nuklide eines Elements sind stabil',
      'Nuklide sind nur die stabilen Isotope',
      'Jedes Nuklid ist durch Protonen- und Neutronenzahl eindeutig definiert',
      'Nuklide haben immer die gleiche Elektronenkonfiguration',
      'Nuklide unterscheiden sich nur in der Elektronenzahl'
    ],
    korrekteAntwort: 2,
    erklärung: 'Ein Nuklid ist eine Atomsorte mit festgelegter Protonen- und Neutronenzahl. Es gibt stabile und instabile (radioaktive) Nuklide. Jedes Isotop ist ein eigenes Nuklid.',
    strategieTipp: 'Nuklid = eindeutig definierte Atomsorte. Wird durch Massenzahl und Ordnungszahl charakterisiert, z.B. ¹⁴C oder ²³⁵U.'
  },
  {
    id: 'ch-q-008',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein zweifach negativ geladenes Sauerstoff-Ion (¹⁶O²⁻) enthält:',
    optionen: [
      '8 Protonen, 8 Neutronen, 6 Elektronen',
      '8 Protonen, 8 Neutronen, 10 Elektronen',
      '6 Protonen, 10 Neutronen, 8 Elektronen',
      '8 Protonen, 10 Neutronen, 8 Elektronen',
      '10 Protonen, 6 Neutronen, 10 Elektronen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Sauerstoff hat Ordnungszahl 8 (8 Protonen). Massenzahl 16: 16 - 8 = 8 Neutronen. Zweifach negativ bedeutet 2 zusätzliche Elektronen: 8 + 2 = 10 Elektronen.',
    strategieTipp: 'Die Ladung ändert nur die Elektronenzahl, nicht Protonen oder Neutronen. Negative Ladung = mehr Elektronen, positive = weniger.'
  },
  {
    id: 'ch-q-009',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die Massenzahl eines Atoms ergibt sich aus:',
    optionen: [
      'Der Summe aller Elektronen',
      'Der Anzahl der Protonen',
      'Der Summe von Protonen und Elektronen',
      'Der Summe von Protonen und Neutronen',
      'Der Differenz von Neutronen und Protonen'
    ],
    korrekteAntwort: 3,
    erklärung: 'Die Massenzahl (Nukleonenzahl) ist die Summe der Nukleonen (Protonen + Neutronen) im Atomkern. Sie wird als hochgestellte Zahl links vom Elementsymbol geschrieben.',
    strategieTipp: 'Massenzahl A = Protonenzahl Z + Neutronenzahl N. Beispiel: ¹²C hat 6 Protonen und 6 Neutronen (6+6=12).'
  },
  {
    id: 'ch-q-010',
    stichwortId: 'ch-1-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Chlor kommt in der Natur als Isotopengemisch vor: 75% ³⁵Cl und 25% ³⁷Cl. Die relative Atommasse beträgt etwa:',
    optionen: [
      '35,0',
      '35,5',
      '36,0',
      '36,5',
      '37,0'
    ],
    korrekteAntwort: 1,
    erklärung: 'Relative Atommasse = gewichtetes Mittel: (0,75 × 35) + (0,25 × 37) = 26,25 + 9,25 = 35,5. Dies erklärt, warum die Atommasse im Periodensystem oft keine ganze Zahl ist.',
    strategieTipp: 'Bei Isotopengemischen: Multipliziere jede Massenzahl mit ihrem Anteil und addiere. Die meisten Elemente sind Gemische.'
  },
  {
    id: 'ch-q-011',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die Heisenbergsche Unschärferelation besagt, dass:',
    optionen: [
      'Ort und Impuls eines Teilchens gleichzeitig exakt messbar sind',
      'Nur der Ort eines Elektrons genau bestimmt werden kann',
      'Ort und Impuls eines Teilchens nicht gleichzeitig beliebig genau bestimmt werden können',
      'Elektronen sich nur auf festen Bahnen bewegen',
      'Die Energie eines Photons nicht messbar ist'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Unschärferelation (Δx · Δp ≥ h/4π) besagt, dass je genauer der Ort bekannt ist, desto ungenauer ist der Impuls und umgekehrt. Dies ist eine fundamentale Eigenschaft der Quantenmechanik.',
    strategieTipp: 'Unschärfe ist keine Messungenauigkeit, sondern eine grundlegende Naturgesetzmäßigkeit. Wichtig für das Verständnis von Orbitalen statt festen Bahnen.'
  },
  {
    id: 'ch-q-012',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Elektromagnetische Strahlung ist charakterisiert durch:',
    optionen: [
      'Nur ihre Wellenlänge',
      'Nur ihre Frequenz',
      'Wellenlänge und Frequenz, die miteinander verknüpft sind',
      'Ihre Masse',
      'Ihre elektrische Ladung'
    ],
    korrekteAntwort: 2,
    erklärung: 'Elektromagnetische Strahlung wird durch Wellenlänge λ und Frequenz ν beschrieben. Diese sind über c = λ · ν verknüpft (c = Lichtgeschwindigkeit). Elektromagnetische Wellen haben keine Masse oder Ladung.',
    strategieTipp: 'Merke: c = λν. Kurze Wellenlänge bedeutet hohe Frequenz und umgekehrt. Energie eines Photons: E = hν.'
  },
  {
    id: 'ch-q-013',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Der Teilchen-Welle-Dualismus besagt, dass:',
    optionen: [
      'Nur Licht sowohl Teilchen- als auch Welleneigenschaften hat',
      'Elektronen nur Teilcheneigenschaften zeigen',
      'Alle Materie und Strahlung sowohl Teilchen- als auch Welleneigenschaften besitzt',
      'Nur sehr kleine Teilchen Welleneigenschaften haben',
      'Wellen und Teilchen völlig unterschiedliche Phänomene sind'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der Welle-Teilchen-Dualismus ist ein Grundprinzip der Quantenmechanik: Alle Objekte zeigen je nach Experiment Wellen- oder Teilchencharakter. Dies gilt für Photonen, Elektronen und sogar größere Objekte (de Broglie).',
    strategieTipp: 'Licht zeigt Teilchencharakter (Photöffekt), Elektronen zeigen Wellencharakter (Beugung). Beide Aspekte sind komplementär, nicht widersprüchlich.'
  },
  {
    id: 'ch-q-014',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die Energie eines Photons beträgt 3,0 × 10⁻¹⁹ J. Bei welcher Wellenlänge liegt dieses Photon? (h = 6,6 × 10⁻³⁴ J·s, c = 3,0 × 10⁸ m/s)',
    optionen: [
      '440 nm (blau)',
      '550 nm (grün)',
      '660 nm (rot)',
      '220 nm (UV)',
      '880 nm (Infrarot)'
    ],
    korrekteAntwort: 2,
    erklärung: 'E = h·c/λ, also λ = h·c/E = (6,6 × 10⁻³⁴ × 3,0 × 10⁸) / (3,0 × 10⁻¹⁹) = 6,6 × 10⁻⁷ m = 660 nm. Dies entspricht rotem Licht.',
    strategieTipp: 'Formel E = hν = hc/λ umstellen. Höhere Energie bedeutet kürzere Wellenlänge. Sichtbares Licht: 400-700 nm.'
  },
  {
    id: 'ch-q-015',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Das sichtbare Lichtspektrum umfasst Wellenlängen von etwa:',
    optionen: [
      '1-10 nm',
      '10-100 nm',
      '400-700 nm',
      '1000-2000 nm',
      '1-10 μm'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das für das menschliche Auge sichtbare Licht liegt im Bereich von etwa 380-780 nm (Nanometer). Violett bei 400 nm, Rot bei 700 nm. Außerhalb liegen UV (<400 nm) und Infrarot (>700 nm).',
    strategieTipp: 'Merke: Sichtbar ≈ 400-700 nm. ROY G BIV (Rot-Orange-Gelb-Grün-Blau-Indigo-Violett) von langen zu kurzen Wellenlängen.'
  },
  {
    id: 'ch-q-016',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Photonen sind:',
    optionen: [
      'Massereiche Teilchen mit elektrischer Ladung',
      'Masselose Energiequanten elektromagnetischer Strahlung',
      'Bestandteile des Atomkerns',
      'Negativ geladene Elementarteilchen',
      'Nur bei radioaktiven Prozessen vorhanden'
    ],
    korrekteAntwort: 1,
    erklärung: 'Photonen sind die Quanten (kleinste Energiepakete) elektromagnetischer Strahlung. Sie haben keine Ruhemasse, keine elektrische Ladung und bewegen sich mit Lichtgeschwindigkeit. Ihre Energie ist E = hν.',
    strategieTipp: 'Photon = Lichtteilchen. Masselose Energieträger. Verschiedene Energien entsprechen verschiedenen Farben/Frequenzen.'
  },
  {
    id: 'ch-q-017',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ordnen Sie elektromagnetische Strahlung nach steigender Energie:',
    optionen: [
      'Radiowellen < Infrarot < sichtbares Licht < UV < Röntgenstrahlung',
      'UV < sichtbares Licht < Infrarot < Radiowellen < Röntgenstrahlung',
      'Infrarot < Radiowellen < sichtbares Licht < UV < Röntgenstrahlung',
      'Röntgenstrahlung < UV < sichtbares Licht < Infrarot < Radiowellen',
      'Sichtbares Licht < UV < Infrarot < Radiowellen < Röntgenstrahlung'
    ],
    korrekteAntwort: 0,
    erklärung: 'Energie nimmt mit der Frequenz zu (E = hν), also mit abnehmender Wellenlänge. Von niedrig zu hoch: Radiowellen (niedrigste Frequenz) → Mikrowellen → Infrarot → sichtbar → UV → Röntgen → Gammastrahlung (höchste Frequenz).',
    strategieTipp: 'Je kürzer die Wellenlänge, desto höher die Energie. Radio hat längste Wellen, Gamma kürzeste. E ∝ ν ∝ 1/λ.'
  },
  {
    id: 'ch-q-018',
    stichwortId: 'ch-2-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Beziehung beschreibt die Energie eines Photons korrekt?',
    optionen: [
      'E = mc²',
      'E = hν',
      'E = ½mv²',
      'E = mgh',
      'E = kT'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Energie eines Photons wird durch die Planck-Einstein-Beziehung E = hν beschrieben, wobei h das Plancksche Wirkungsquantum und ν die Frequenz ist. Alternativ: E = hc/λ.',
    strategieTipp: 'Planck-Gleichung E = hν ist fundamental für Quantenmechanik. h = 6,626 × 10⁻³⁴ J·s. Höhere Frequenz = höhere Energie.'
  },
  {
    id: 'ch-q-019',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Das Gesetz von Boyle-Mariotte beschreibt bei konstanter Temperatur:',
    optionen: [
      'Die direkte Proportionalität von Druck und Volumen',
      'Die indirekte Proportionalität von Druck und Volumen',
      'Die Unabhängigkeit von Druck und Volumen',
      'Die Proportionalität von Volumen und Temperatur',
      'Die Konstanz des Volumens'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das Boyle-Mariotte-Gesetz besagt: p · V = const (bei T = const). Druck und Volumen sind indirekt proportional. Verdoppelt man den Druck, halbiert sich das Volumen.',
    strategieTipp: 'Merke: p↑ → V↓ bei konstanter Temperatur. Mathematisch: p₁V₁ = p₂V₂. Anwendung: Luftpumpe, Spritze.'
  },
  {
    id: 'ch-q-020',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Das Gesetz von Gay-Lussac besagt bei konstantem Volumen:',
    optionen: [
      'Der Druck ist unabhängig von der Temperatur',
      'Der Druck nimmt mit steigender Temperatur ab',
      'Der Druck ist direkt proportional zur absoluten Temperatur',
      'Das Volumen ist proportional zum Druck',
      'Die Stoffmenge ändert sich mit der Temperatur'
    ],
    korrekteAntwort: 2,
    erklärung: 'Gay-Lussac: p/T = const (bei V = const). Der Druck eines Gases ist direkt proportional zur absoluten Temperatur in Kelvin. Verdoppelt man T, verdoppelt sich p.',
    strategieTipp: 'T↑ → p↑ bei konstantem Volumen. Wichtig: Temperatur muss in Kelvin sein! Anwendung: Druckkochtopf, Autoreifen im Sommer.'
  },
  {
    id: 'ch-q-021',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Ein Gas nimmt bei 27°C und 1 bar ein Volumen von 2,0 L ein. Welches Volumen hat es bei 127°C und 1 bar?',
    optionen: [
      '2,0 L',
      '2,5 L',
      '2,67 L',
      '3,0 L',
      '4,0 L'
    ],
    korrekteAntwort: 2,
    erklärung: 'Bei konstantem Druck gilt V₁/T₁ = V₂/T₂. T₁ = 300 K, T₂ = 400 K. V₂ = V₁ · T₂/T₁ = 2,0 · (400/300) = 2,0 · 1,333 = 2,67 L.',
    strategieTipp: 'Immer in Kelvin rechnen! T(K) = T(°C) + 273. Bei konstantem p: V ∝ T. Charles-Gesetz: V₁/T₁ = V₂/T₂.'
  },
  {
    id: 'ch-q-022',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die absolute Temperatur wird gemessen in:',
    optionen: [
      'Grad Celsius',
      'Grad Fahrenheit',
      'Kelvin',
      'Joule',
      'Pascal'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die absolute Temperaturskala verwendet Kelvin (K) als Einheit. Der absolute Nullpunkt (0 K = -273,15°C) ist die tiefstmögliche Temperatur. T(K) = T(°C) + 273,15.',
    strategieTipp: 'Kelvin ist die SI-Einheit für Temperatur. Keine negativen Werte möglich. Wichtig für Gasgesetze, da diese absolute Temperaturen erfordern.'
  },
  {
    id: 'ch-q-023',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Gas wird von 3,0 L bei 2,0 bar auf 1,5 L komprimiert. Die Temperatur steigt dabei von 20°C auf 80°C. Der Enddruck beträgt etwa:',
    optionen: [
      '3,2 bar',
      '4,0 bar',
      '4,8 bar',
      '5,6 bar',
      '6,4 bar'
    ],
    korrekteAntwort: 2,
    erklärung: 'Kombinierte Gasgleichung: p₁V₁/T₁ = p₂V₂/T₂. T₁ = 293 K, T₂ = 353 K. p₂ = p₁ · (V₁/V₂) · (T₂/T₁) = 2,0 · (3,0/1,5) · (353/293) = 2,0 · 2 · 1,205 = 4,82 bar.',
    strategieTipp: 'Alle drei Gasgesetze kombiniert: (p₁V₁)/T₁ = (p₂V₂)/T₂. Nach der gesuchten Größe umstellen. Immer Kelvin verwenden!'
  },
  {
    id: 'ch-q-024',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die ideale Gasgleichung lautet:',
    optionen: [
      'pV = nT',
      'pV = RT',
      'pV = nRT',
      'p = nRT/V',
      'V = nR/pT'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die ideale Gasgleichung ist pV = nRT, wobei p = Druck, V = Volumen, n = Stoffmenge in mol, R = universelle Gaskonstante (8,314 J/(mol·K)), T = absolute Temperatur in Kelvin.',
    strategieTipp: 'pV = nRT vereint alle Gasgesetze. R = 8,314 J/(mol·K) = 0,0821 L·atm/(mol·K). Gilt gut für reale Gase bei hoher T und niedrigem p.'
  },
  {
    id: 'ch-q-025',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Stoffmenge Gas (in mol) ist in einem 10 L Behälter bei 25°C und 2,0 bar enthalten? (R = 0,083 L·bar/(mol·K))',
    optionen: [
      '0,61 mol',
      '0,81 mol',
      '1,21 mol',
      '1,61 mol',
      '2,01 mol'
    ],
    korrekteAntwort: 1,
    erklärung: 'pV = nRT → n = pV/(RT) = (2,0 · 10)/(0,083 · 298) = 20/24,73 = 0,81 mol. T = 25°C = 298 K.',
    strategieTipp: 'Nach n umstellen: n = pV/(RT). Einheiten beachten! Hier: p in bar, V in L, R = 0,083 L·bar/(mol·K), T in K.'
  },
  {
    id: 'ch-q-026',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Das molare Volumen eines idealen Gases bei Standardbedingungen (0°C, 1 bar) beträgt etwa:',
    optionen: [
      '11,2 L/mol',
      '18,0 L/mol',
      '22,4 L/mol',
      '24,8 L/mol',
      '44,8 L/mol'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das molare Volumen Vm bei Normalbedingungen (273 K, 1,013 bar) beträgt 22,4 L/mol. Dies folgt aus pV = nRT für n = 1 mol. Bei exakt 1 bar und 0°C sind es etwa 22,7 L/mol.',
    strategieTipp: 'Merke: 22,4 L/mol bei STP (Standard Temperature and Pressure). Wichtig für stöchiometrische Berechnungen mit Gasen. 1 mol = 22,4 L.'
  },
  {
    id: 'ch-q-027',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Bei welcher Temperatur liegt der absolute Nullpunkt?',
    optionen: [
      '-100°C',
      '-173°C',
      '-273°C',
      '-373°C',
      '-473°C'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der absolute Nullpunkt liegt bei -273,15°C bzw. 0 K. Dies ist die theoretisch tiefstmögliche Temperatur, bei der alle thermische Bewegung zum Stillstand kommt.',
    strategieTipp: 'Absolute Null = 0 K = -273°C (gerundet). Bei dieser Temperatur hätte ein ideales Gas theoretisch Volumen null (praktisch nicht erreichbar).'
  },
  {
    id: 'ch-q-028',
    stichwortId: 'ch-3-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Zwei Gasbehälter gleichen Volumens enthalten bei gleicher Temperatur unterschiedliche Gase. Behälter A (He, 4 g/mol) zeigt denselben Druck wie Behälter B (O₂, 32 g/mol). Das Massenverhältnis m(He)/m(O₂) beträgt:',
    optionen: [
      '1:8',
      '1:4',
      '1:2',
      '1:1',
      '8:1'
    ],
    korrekteAntwort: 0,
    erklärung: 'Bei gleichem p, V, T haben beide Behälter gleiche Stoffmenge n (pV = nRT). m = n · M, daher m(He)/m(O₂) = M(He)/M(O₂) = 4/32 = 1/8.',
    strategieTipp: 'Bei gleichen Bedingungen: gleiche Stoffmenge. Masse = n · Molmasse. Leichtere Gase haben weniger Masse bei gleicher Stoffmenge.'
  },
  {
    id: 'ch-q-029',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Die drei klassischen Aggregatzustände sind:',
    optionen: [
      'Fest, gasförmig, plasma',
      'Fest, flüssig, gasförmig',
      'Flüssig, gasförmig, sublimiert',
      'Kristallin, amorph, flüssig',
      'Kondensiert, verdampft, geschmolzen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die drei klassischen Aggregatzustände der Materie sind fest (s), flüssig (l) und gasförmig (g). Sie unterscheiden sich in der Anordnung und Beweglichkeit der Teilchen.',
    strategieTipp: 'Fest: geordnet, wenig Bewegung. Flüssig: ungeordnet, beweglich. Gasförmig: sehr ungeordnet, sehr beweglich. Plasma ist ein vierter Zustand.'
  },
  {
    id: 'ch-q-030',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Der Phasenübergang von fest zu flüssig heißt:',
    optionen: [
      'Verdampfen',
      'Kondensieren',
      'Schmelzen',
      'Sublimieren',
      'Resublimieren'
    ],
    korrekteAntwort: 2,
    erklärung: 'Schmelzen ist der Übergang vom festen in den flüssigen Aggregatzustand. Die Temperatur, bei der dies bei einem bestimmten Druck geschieht, ist die Schmelztemperatur.',
    strategieTipp: 'Schmelzen = fest → flüssig. Erstarren = flüssig → fest (Umkehrung). Beispiel: Eis schmilzt zu Wasser bei 0°C (1 bar).'
  },
  {
    id: 'ch-q-031',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Der direkte Übergang von fest zu gasförmig ohne flüssige Phase heißt:',
    optionen: [
      'Verdampfen',
      'Schmelzen',
      'Kondensieren',
      'Sublimieren',
      'Erstarren'
    ],
    korrekteAntwort: 3,
    erklärung: 'Sublimation ist der direkte Phasenübergang von fest zu gasförmig. Beispiele: Trockeneis (CO₂), Iod, Naphthalin. Die Umkehrung heißt Resublimation oder Deposition.',
    strategieTipp: 'Sublimieren: fest → gasförmig direkt. Beispiel: Trockeneis bei Normaldruck. Resublimieren: gasförmig → fest. Raureif ist resublimierter Wasserdampf.'
  },
  {
    id: 'ch-q-032',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Verdampfen ist der Phasenübergang von:',
    optionen: [
      'Fest zu flüssig',
      'Flüssig zu gasförmig',
      'Gasförmig zu flüssig',
      'Fest zu gasförmig',
      'Flüssig zu fest'
    ],
    korrekteAntwort: 1,
    erklärung: 'Verdampfen (oder Sieden bei Siedetemperatur) ist der Übergang von flüssig zu gasförmig. Die Umkehrung heißt Kondensieren. Beispiel: Wasser siedet bei 100°C (1 bar).',
    strategieTipp: 'Verdampfen = flüssig → Gas. Kondensieren = Gas → flüssig. Verdunsten ist Verdampfen unterhalb der Siedetemperatur an der Oberfläche.'
  },
  {
    id: 'ch-q-033',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Im Phasendiagramm trennen Phasengrenzlinien verschiedene Bereiche. Der Tripelpunkt ist:',
    optionen: [
      'Der Punkt höchster Temperatur',
      'Der Punkt höchsten Drucks',
      'Der Punkt, an dem alle drei Phasen im Gleichgewicht koexistieren',
      'Der Punkt des Siedens',
      'Der Punkt des Schmelzens'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der Tripelpunkt ist der einzige Punkt im p-T-Diagramm, an dem alle drei Phasen (fest, flüssig, gasförmig) gleichzeitig im Gleichgewicht existieren. Für Wasser: 0,01°C und 611 Pa.',
    strategieTipp: 'Tripelpunkt = drei Phasen gleichzeitig. Einziger Punkt mit festem p und T. Für H₂O: 273,16 K (0,01°C) und 611 Pa.'
  },
  {
    id: 'ch-q-034',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Der kritische Punkt im Phasendiagramm markiert:',
    optionen: [
      'Den Tripelpunkt',
      'Den Punkt, oberhalb dessen keine Verflüssigung durch Druckerhöhung möglich ist',
      'Den Schmelzpunkt bei Normaldruck',
      'Den Siedepunkt bei Normaldruck',
      'Den Sublimationspunkt'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der kritische Punkt (kritische Temperatur Tc und kritischer Druck pc) ist das Ende der Dampfdruckkurve. Oberhalb von Tc kann ein Gas nicht mehr durch Druckerhöhung verflüssigt werden; es entsteht ein überkritischer Zustand.',
    strategieTipp: 'Oberhalb kritischer Temperatur: keine Verflüssigung möglich, nur überkritische Fluide. Für CO₂: 31°C/73 bar. Wichtig für überkritische Extraktion.'
  },
  {
    id: 'ch-q-035',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Beim Schmelzen nimmt die meisten Stoffe:',
    optionen: [
      'Im Volumen ab',
      'Im Volumen zu',
      'Behalten ihr Volumen exakt bei',
      'Ändern ihre Masse',
      'Ändern ihre Stoffmenge'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die meisten Stoffe dehnen sich beim Schmelzen aus (Volumen nimmt zu), da die geordnete Kristallstruktur aufbricht. Ausnahme: Wasser (Eis schwimmt), Bismut, Gallium.',
    strategieTipp: 'Normal: fest → flüssig, Dichte nimmt ab. Anomalie des Wassers: Eis hat geringere Dichte als Wasser, daher schwimmt es.'
  },
  {
    id: 'ch-q-036',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'In einem Phasendiagramm mit Druck (y-Achse) und Temperatur (x-Achse) verläuft die Schmelzkurve von Wasser:',
    optionen: [
      'Mit positiver Steigung (nach rechts oben)',
      'Mit negativer Steigung (nach rechts unten)',
      'Horizontal',
      'Vertikal',
      'Sie existiert nicht'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Schmelzkurve von Wasser hat eine negative Steigung (einzigartig). Höherer Druck senkt den Schmelzpunkt. Grund: Eis hat geringere Dichte als Wasser. Bei den meisten Stoffen ist die Steigung positiv.',
    strategieTipp: 'Wasser-Anomalie: Druckerhöhung erleichtert Schmelzen (Schlittschuhlaufen). Bei normalen Stoffen: Druck erhöht Schmelzpunkt.'
  },
  {
    id: 'ch-q-037',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Kondensieren ist der Phasenübergang:',
    optionen: [
      'Fest → flüssig',
      'Flüssig → gasförmig',
      'Gasförmig → flüssig',
      'Fest → gasförmig',
      'Flüssig → fest'
    ],
    korrekteAntwort: 2,
    erklärung: 'Kondensieren ist der Übergang von gasförmig zu flüssig. Es ist die Umkehrung des Verdampfens. Beispiel: Wasserdampf kondensiert zu Wassertropfen an kalten Oberflächen.',
    strategieTipp: 'Kondensieren = Gas → flüssig. Exothermer Prozess (Energie wird frei). Beispiele: Tau, Beschlagene Fenster, Wolkenbildung.'
  },
  {
    id: 'ch-q-038',
    stichwortId: 'ch-4-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Die Siedetemperatur eines Stoffes ist abhängig von:',
    optionen: [
      'Nur der chemischen Zusammensetzung',
      'Nur dem Druck',
      'Druck und chemischer Zusammensetzung',
      'Nur dem Volumen',
      'Nur der Stoffmenge'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Siedetemperatur hängt vom Druck ab (niedriger Druck → niedrigere Siedetemperatur) und von der chemischen Natur des Stoffes (zwischenmolekulare Kräfte). Wasser siedet bei 1 bar bei 100°C, bei 0,5 bar bereits bei 82°C.',
    strategieTipp: 'Niedriger Druck → niedrigerer Siedepunkt. Auf Bergen (niedriger Luftdruck) kocht Wasser unter 100°C. Im Dampfkochtopf (höher Druck) über 100°C.'
  },
  {
    id: 'ch-q-039',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Das Periodensystem ist geordnet nach:',
    optionen: [
      'Atommasse',
      'Ordnungszahl (Protonenzahl)',
      'Neutronenzahl',
      'Elektronegativität',
      'Atomradius'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das moderne Periodensystem ist nach aufsteigender Ordnungszahl (Kernladungszahl = Protonenzahl) geordnet. Mendelejew ordnete ursprünglich nach Atommasse, aber die Ordnungszahl ist das korrekte Ordnungsprinzip.',
    strategieTipp: 'Ordnungszahl bestimmt Position. Von links nach rechts: Ordnungszahl steigt. Elemente mit ähnlichen Eigenschaften stehen untereinander (Gruppen).'
  },
  {
    id: 'ch-q-040',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Elemente einer Gruppe im Periodensystem haben:',
    optionen: [
      'Die gleiche Anzahl von Protonen',
      'Die gleiche Anzahl von Elektronen in der äußersten Schale',
      'Die gleiche Atommasse',
      'Die gleiche Anzahl von Schalen',
      'Die gleiche Ordnungszahl'
    ],
    korrekteAntwort: 1,
    erklärung: 'Elemente einer Gruppe (vertikale Spalten) haben die gleiche Anzahl von Valenzelektronen (Elektronen in der äußersten Schale). Dies verleiht ihnen ähnliche chemische Eigenschaften.',
    strategieTipp: 'Gruppe = Spalte = gleiche Valenzelektronen = ähnliche Eigenschaften. Beispiel: Gruppe 1 (Alkalimetalle) haben alle 1 Valenzelektron.'
  },
  {
    id: 'ch-q-041',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Elemente einer Periode im Periodensystem haben:',
    optionen: [
      'Die gleiche Anzahl von Valenzelektronen',
      'Die gleiche Anzahl von besetzten Elektronenschalen',
      'Die gleiche Elektronegativität',
      'Den gleichen Atomradius',
      'Die gleiche Ionisierungsenergie'
    ],
    korrekteAntwort: 1,
    erklärung: 'Elemente einer Periode (horizontale Zeilen) haben die gleiche Anzahl von besetzten Elektronenschalen. Von links nach rechts nimmt die Zahl der Valenzelektronen zu.',
    strategieTipp: 'Periode = Zeile = Anzahl der Schalen. Periode 2 (Li-Ne): 2 Schalen. Periode 3 (Na-Ar): 3 Schalen.'
  },
  {
    id: 'ch-q-042',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die Elektronegativität im Periodensystem nimmt generell zu:',
    optionen: [
      'Von links nach rechts und von oben nach unten',
      'Von rechts nach links und von unten nach oben',
      'Von links nach rechts und von unten nach oben',
      'Von rechts nach links und von oben nach unten',
      'Sie zeigt keinen systematischen Trend'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Elektronegativität nimmt von links nach rechts zu (mehr Protonen, stärkere Anziehung) und von unten nach oben zu (kleinerer Radius). Fluor ist am elektronegativsten, Francium am wenigsten.',
    strategieTipp: 'Elektronegativität steigt nach rechts oben. F (Fluor) ist am elektronegativsten (4,0). Wichtig für Polarität von Bindungen.'
  },
  {
    id: 'ch-q-043',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die erste Ionisierungsenergie im Periodensystem:',
    optionen: [
      'Nimmt in einer Periode von links nach rechts ab',
      'Nimmt in einer Gruppe von oben nach unten zu',
      'Ist bei Edelgasen besonders niedrig',
      'Nimmt in einer Periode generell von links nach rechts zu',
      'Ist bei Alkalimetallen besonders hoch'
    ],
    korrekteAntwort: 3,
    erklärung: 'Die erste Ionisierungsenergie nimmt in einer Periode generell von links nach rechts zu (stärkere Kernladung) und in einer Gruppe von oben nach unten ab (größerer Abstand). Edelgase haben höchste, Alkalimetalle niedrigste Werte.',
    strategieTipp: 'Ionisierungsenergie = Energie zum Entfernen eines Elektrons. Steigt nach rechts (stärkere Bindung) und nach oben (näher am Kern). He hat höchste.'
  },
  {
    id: 'ch-q-044',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Der Atomradius im Periodensystem nimmt generell ab:',
    optionen: [
      'Von links nach rechts in einer Periode',
      'Von oben nach unten in einer Gruppe',
      'Von rechts nach links in einer Periode',
      'In allen Richtungen gleich',
      'Von den Metallen zu den Nichtmetallen'
    ],
    korrekteAntwort: 0,
    erklärung: 'Der Atomradius nimmt in einer Periode von links nach rechts ab (mehr Protonen ziehen Elektronen stärker an) und in einer Gruppe von oben nach unten zu (mehr Schalen).',
    strategieTipp: 'Radius: klein nach rechts oben, groß nach links unten. Cs ist größtes Atom, He kleinstes. Mehr Protonen bei gleicher Schale = kleinerer Radius.'
  },
  {
    id: 'ch-q-045',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Wie viele Hauptgruppen hat das Periodensystem?',
    optionen: [
      '6',
      '7',
      '8',
      '10',
      '18'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das Periodensystem hat 8 Hauptgruppen (manchmal als Gruppen 1, 2, 13-18 bezeichnet). Dazu kommen 10 Nebengruppen (Übergangsmetalle). Insgesamt gibt es 18 Gruppen.',
    strategieTipp: 'Hauptgruppen: 1-2 und 13-18 (alte Zählung: I-VIII). Nebengruppen: 3-12. Hauptgruppen zeigen deutlichste periodische Trends.'
  },
  {
    id: 'ch-q-046',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über die Elektronenkonfiguration ist korrekt?',
    optionen: [
      'Alle Elemente einer Periode haben die gleiche Valenzelektronenzahl',
      'Die maximale Elektronenzahl in der n-ten Schale beträgt 2n',
      'Die maximale Elektronenzahl in der n-ten Schale beträgt 2n²',
      'Die erste Schale kann maximal 4 Elektronen aufnehmen',
      'Die zweite Schale kann maximal 18 Elektronen aufnehmen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die maximale Elektronenzahl in der n-ten Hauptschale beträgt 2n². Also: 1. Schale (n=1): 2 Elektronen, 2. Schale (n=2): 8 Elektronen, 3. Schale (n=3): 18 Elektronen.',
    strategieTipp: 'Formel 2n²: Schale 1→2e⁻, Schale 2→8e⁻, Schale 3→18e⁻, Schale 4→32e⁻. Wichtig für Elektronenkonfiguration und Periodenaufbau.'
  },
  {
    id: 'ch-q-047',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Element der 3. Periode und 15. Gruppe (Hauptgruppe 5) ist:',
    optionen: [
      'Stickstoff (N)',
      'Phosphor (P)',
      'Arsen (As)',
      'Silicium (Si)',
      'Schwefel (S)'
    ],
    korrekteAntwort: 1,
    erklärung: 'Gruppe 15 (alte Zählung: Hauptgruppe 5) enthält N, P, As, Sb, Bi. Die 3. Periode umfasst Na bis Ar. Der Schnittpunkt ist Phosphor (P) mit 3 Schalen und 5 Valenzelektronen.',
    strategieTipp: 'Periode = Anzahl Schalen, Gruppe = Valenzelektronen. P: 3. Periode, Gruppe 15, Konfiguration [Ne]3s²3p³, 5 Valenzelektronen.'
  },
  {
    id: 'ch-q-048',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Reihenfolge ist bezüglich der ersten Ionisierungsenergie korrekt?',
    optionen: [
      'Na < Mg < Al < Si',
      'F < O < N < C',
      'Li > Na > K > Rb',
      'He < Ne < Ar < Kr',
      'Cl > Br > I > At'
    ],
    korrekteAntwort: 2,
    erklärung: 'Innerhalb einer Gruppe nimmt die Ionisierungsenergie von oben nach unten ab (größerer Radius, schwächere Bindung). Li > Na > K > Rb ist korrekt. In Perioden steigt sie generell nach rechts.',
    strategieTipp: 'Ionisierungsenergie: In Gruppe von oben nach unten abnehmend. In Periode von links nach rechts zunehmend (mit Ausnahmen bei voll- und halbbesetzten Orbitalen).'
  },
  {
    id: 'ch-q-049',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Die Edelgase befinden sich in:',
    optionen: [
      'Gruppe 1',
      'Gruppe 2',
      'Gruppe 17',
      'Gruppe 18',
      'Den Nebengruppen'
    ],
    korrekteAntwort: 3,
    erklärung: 'Die Edelgase stehen in Gruppe 18 (alte Zählung: VIII. Hauptgruppe). Sie haben vollständig gefüllte äußere Schalen (außer He: 2, sonst 8 Valenzelektronen) und sind sehr reaktionsträge.',
    strategieTipp: 'Edelgase (He, Ne, Ar, Kr, Xe, Rn): Gruppe 18, äußerste Schale voll besetzt, daher sehr stabil und reaktionsträge. Oktettregel.'
  },
  {
    id: 'ch-q-050',
    stichwortId: 'ch-5-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Trends im Periodensystem verlaufen in die gleiche Richtung?',
    optionen: [
      'Atomradius und Elektronegativität nehmen beide nach rechts zu',
      'Ionisierungsenergie und Atomradius nehmen beide nach rechts zu',
      'Elektronegativität und Ionisierungsenergie nehmen beide nach rechts oben zu',
      'Atomradius und Elektronegativität nehmen beide nach unten ab',
      'Metallcharakter und Elektronegativität nehmen beide nach rechts zu'
    ],
    korrekteAntwort: 2,
    erklärung: 'Elektronegativität und Ionisierungsenergie zeigen den gleichen Trend: beide nehmen nach rechts und nach oben zu. Beide korrelieren mit der Fähigkeit, Elektronen anzuziehen bzw. festzuhalten.',
    strategieTipp: 'Gleiche Richtung: EN und IE steigen nach rechts oben. Gegenläufig: Atomradius sinkt nach rechts oben. Metallcharakter sinkt nach rechts.'
  }
];
