import type { Kapitel } from '../types';

export const chemKap2: Kapitel = {
  id: 'chem-kap2',
  title: 'Mikrokosmos — Quantenphysik und Spektroskopie',
  subject: 'chemie',
  icon: '🌀',
  estimatedTime: '40 min',
  unterkapitel: [
    {
      id: 'ch-2-01',
      title: 'Welle-Teilchen-Dualismus und Unschärferelation',
      content: `## Welle-Teilchen-Dualismus

Im frühen 20. Jahrhundert wurde deutlich, dass Licht sowohl Wellen- als auch Teilcheneigenschaften besitzt (Photoeffekt, Doppelspaltexperiment). Louis de Broglie postulierte 1924, dass auch Materie Welleneigenschaften hat. Die **de-Broglie-Wellenlänge** eines Teilchens mit Masse m und Impuls p ist: λ = h/p = h/(mv), wobei h = 6,626×10⁻³⁴ J·s das Planck'sche Wirkungsquantum ist. Für Elektronen im Atom liegen diese Wellenlängen im Angström-Bereich — vergleichbar mit Atomabständen.

## Heisenberg'sche Unschärferelation

Werner Heisenberg formulierte 1927 eine fundamentale Grenze der Messbarkeit: Ort x und Impuls p eines Teilchens können nicht gleichzeitig beliebig genau bestimmt werden. Mathematisch: Δx · Δp ≥ ℏ/2, wobei ℏ = h/(2π) das reduzierte Planck'sche Wirkungsquantum ist. Dies ist keine technische Limitation, sondern ein Naturgesetz. Eine genauere Ortsbestimmung (kleines Δx) erzwingt zwingend eine größere Impulsunschärfe (großes Δp) und umgekehrt.

## Vom Bohrschen Modell zur Quantenmechanik

Das Bohrsche Modell versagte bei Mehrelektronenatomen. Erwin Schrödinger entwickelte 1926 die Wellengleichung (Schrödinger-Gleichung), deren Lösungen die **Wellenfunktionen ψ** (Orbitale) sind. Das Betragsquadrat |ψ|² gibt die **Aufenthaltswahrscheinlichkeit** des Elektrons an einem bestimmten Ort an. Orbitale sind daher keine festen Bahnen, sondern dreidimensionale Wahrscheinlichkeitsdichten.

## Bedeutung für das Atommodell

Die Unschärferelation erklärt, warum Elektronen keine definierten Bahnen haben können: Wäre der Ort eines Elektrons im Atom exakt bekannt, wäre seine kinetische Energie (durch die Impulsunschärfe) enorm groß und das Atom instabil. Die räumliche Ausdehnung der Orbitale ist daher eine direkte Folge der Quantenmechanik und nicht eine Messungenauigkeit.`,
      lernziele: [
        "Den Welle-Teilchen-Dualismus erklären und die de-Broglie-Wellenlänge berechnen",
        "Die Heisenberg'sche Unschärferelation formulieren und ihre physikalische Bedeutung erläutern",
        "Den Übergang vom Bohrschen Modell zum quantenmechanischen Orbitalmodell begründen",
      ],
      sections: [
        {
          heading: "De-Broglie-Wellenlänge: Rechnung und Bedeutung",
          text: "Die de-Broglie-Wellenlänge λ = h/p verknüpft Wellen- und Teilcheneigenschaften. Für ein Elektron (m=9,1×10⁻³¹ kg) mit Geschwindigkeit v=10⁶ m/s ergibt sich λ = 6,626×10⁻³⁴ / (9,1×10⁻³¹ × 10⁶) ≈ 7×10⁻¹⁰ m = 0,7 Å. Dieser Wert liegt im Bereich typischer Atomabstände (~1-3 Å), was erklärt, warum Quanteneffekte für Elektronen in Atomen relevant sind. Für makroskopische Objekte (z.B. ein Tennisball, m=0,06 kg, v=50 m/s) wäre λ ≈ 2×10⁻³⁴ m — praktisch nicht messbar, weshalb Quanteneffekte im Alltag keine Rolle spielen.",
        },
        {
          heading: "Orbitale als Wahrscheinlichkeitsdichten",
          text: "Die Wellenfunktion ψ (Psi) eines Elektrons ist eine mathematische Funktion des Ortes. Sie hat an sich keine direkte physikalische Bedeutung, aber ihr Betragsquadrat |ψ|² gibt die Wahrscheinlichkeitsdichte an — also die Wahrscheinlichkeit, das Elektron in einem kleinen Volumenelement dV zu finden, beträgt |ψ|²dV. Elektronen in s-Orbitalen haben die höchste Aufenthaltswahrscheinlichkeit nahe dem Kern (kugelförmige Verteilung), während p-Orbitale zwei Lappen entlang einer Achse zeigen, mit einem Knotenpunkt im Kern. Diese räumliche Struktur der Orbitale ist entscheidend für das Verständnis chemischer Bindungen.",
        },
      ],
      merksätze: [
        "de Broglie: λ = h/p — auch Elektronen haben Wellenlänge",
        "Heisenberg: Δx·Δp ≥ ℏ/2 — Ort und Impuls nie gleichzeitig scharf",
        "|ψ|² = Aufenthaltswahrscheinlichkeit des Elektrons im Orbital",
      ],
      klinischerBezug: "Die Wellennatur von Elektronen wird in der Elektronenmikroskopie genutzt: Da Elektronen bei typischen Beschleunigungsspannungen Wellenlängen von ~0,004 nm erreichen, ermöglichen sie eine Auflösung weit unter der sichtbaren Lichtmikroskopie (~200 nm) und lassen ultrastrukturelle Details biologischer Proben sichtbar machen.",
      altfrage: {
        question: "Warum haben Elektronen im Atom keine definierten Bahnen wie im Bohrschen Modell?",
        answer: "Aufgrund der Heisenberg'schen Unschärferelation (Δx·Δp ≥ ℏ/2) kann Ort und Impuls eines Elektrons nicht gleichzeitig beliebig genau bekannt sein. Wäre der Ort exakt definiert (feste Bahn), wäre der Impuls völlig unbestimmt, was zu unendlich hoher kinetischer Energie führen würde. Stattdessen werden Elektronen durch Orbitale — Aufenthaltswahrscheinlichkeiten |ψ|² — beschrieben.",
      },
      selfTest: [
        {
          question: "Was beschreibt |ψ|² im quantenmechanischen Atommodell?",
          options: [
            "Die Energie des Elektrons in einem Orbital",
            "Die genaue Position des Elektrons zu einem bestimmten Zeitpunkt",
            "Die Aufenthaltswahrscheinlichkeit des Elektrons an einem Ort",
            "Die Geschwindigkeit des Elektrons auf seiner Bahn",
            "Die Anzahl der Elektronen in einem Orbital",
          ],
          correctIndex: 2,
          explanation: "|ψ|² ist das Betragsquadrat der Wellenfunktion und gibt die Wahrscheinlichkeitsdichte an — also die Wahrscheinlichkeit, das Elektron in einem bestimmten Raumbereich zu finden.",
          hints: [
            "ψ ist die Wellenfunktion, |ψ|² ihr Betragsquadrat",
            "Im Quantenmodell gibt es keine definierte Elektronenbahn mehr",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Elektron hat den Impuls p = 10⁻²⁴ kg·m/s. Welche de-Broglie-Wellenlänge besitzt es? (h = 6,6×10⁻³⁴ J·s)",
          options: [
            "6,6×10⁻¹⁰ m",
            "6,6×10⁻⁸ m",
            "1,5×10⁻⁹ m",
            "6,6×10⁻⁵⁸ m",
            "1,0×10⁻²⁴ m",
          ],
          correctIndex: 0,
          explanation: "λ = h/p = 6,6×10⁻³⁴ J·s / 10⁻²⁴ kg·m/s = 6,6×10⁻¹⁰ m = 0,66 nm. Das liegt im Röntgenbereich und ist vergleichbar mit Atomabständen.",
          hints: [
            "Verwende λ = h/p",
            "Teile h durch den gegebenen Impuls p",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was besagt die Heisenberg'sche Unschärferelation Δx·Δp ≥ ℏ/2?",
          options: [
            "Messgeräte sind zu ungenau, um Elektronen exakt zu orten",
            "Ort und Impuls eines Quantenobjekts können grundsätzlich nicht gleichzeitig beliebig genau bestimmt werden",
            "Elektronen bewegen sich so schnell, dass ihre Position nie gemessen werden kann",
            "Die Energie eines Elektrons ist immer unscharf",
            "Quantenmechanische Messungen stören das Elektron immer stärker als klassische Messungen",
          ],
          correctIndex: 1,
          explanation: "Die Unschärferelation ist kein technisches, sondern ein fundamentales Naturgesetz: Je kleiner die Ortsunschärfe Δx, desto größer muss die Impulsunschärfe Δp sein — und umgekehrt. Dies gilt unabhängig von der Qualität des Messgeräts.",
          hints: [
            "Es geht um eine fundamentale Naturgrenze, nicht um technische Limitierungen",
            "Δx und Δp sind Unschärfen von Ort und Impuls",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Wissenschaftler postulierte den Welle-Charakter von Materie (Materiewellen)?",
          options: [
            "Werner Heisenberg",
            "Erwin Schrödinger",
            "Louis de Broglie",
            "Niels Bohr",
            "Max Planck",
          ],
          correctIndex: 2,
          explanation: "Louis de Broglie postulierte 1924 in seiner Dissertation, dass Materie Welleneigenschaften besitzt, analog zum Licht. Die Wellenlänge berechnet sich mit λ = h/p. Heisenberg formulierte die Unschärferelation, Schrödinger die Wellengleichung.",
          hints: [
            "Denke an den Namen der Wellenlängenformel: de-Broglie-Wellenlänge",
            "Der Nobelpreis dafür wurde 1929 vergeben",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum spielen Quanteneffekte (Welle-Teilchen-Dualismus) für einen Fußball kaum eine Rolle?",
          options: [
            "Fußbälle bestehen aus zu vielen Atomen, um Quanteneffekte zu zeigen",
            "Die de-Broglie-Wellenlänge eines Fußballs ist extrem klein und nicht messbar",
            "Fußbälle sind elektrisch neutral und unterliegen daher nicht der Quantenmechanik",
            "Die Heisenberg'sche Unschärferelation gilt nur für Elektronen",
            "Fußbälle bewegen sich zu langsam für Quanteneffekte",
          ],
          correctIndex: 1,
          explanation: "Für einen Fußball (m≈0,45 kg, v≈30 m/s) ergibt sich λ = h/(mv) ≈ 5×10⁻³⁵ m — dieser Wert ist um viele Größenordnungen kleiner als jede messbare Länge (Atomkern: ~10⁻¹⁵ m). Quanteneffekte sind daher praktisch irrelevant.",
          hints: [
            "Berechne λ = h/p für große Massen: h ist sehr klein (~10⁻³⁴)",
            "Für schwere Objekte wird λ extrem klein",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-2-02',
      title: 'Elektromagnetische Strahlung und Photonen',
      content: `## Elektromagnetische Strahlung

Elektromagnetische (EM) Strahlung ist eine Kombination aus sich gegenseitig erzeugenden elektrischen und magnetischen Feldern, die sich mit Lichtgeschwindigkeit c = 3×10⁸ m/s ausbreiten. Charakteristische Größen sind Frequenz f (Hz), Wellenlänge λ (m) und die Beziehung: c = λ · f. Das EM-Spektrum umfasst Radiowellen (km-Wellenlänge), Mikrowellen, Infrarot, sichtbares Licht (380-780 nm), Ultraviolett, Röntgenstrahlung bis hin zu Gammastrahlung (pm-Bereich).

## Planck'sches Wirkungsquantum und Photonenenergie

Max Planck erkannte 1900, dass Energie nicht kontinuierlich, sondern nur in diskreten Portionen (Quanten) emittiert wird. Ein **Photon** ist ein Energiequant der EM-Strahlung mit der Energie: **E = h · f = h · c / λ**, wobei h = 6,626×10⁻³⁴ J·s das Planck'sche Wirkungsquantum ist. Hochfrequente Strahlung (kurze Wellenlänge) trägt mehr Energie pro Photon: Röntgenstrahlung (λ≈0,1 nm) hat ~10.000-mal mehr Energie pro Photon als rotes Licht (λ≈700 nm).

## Photoeffekt und Einstein

Albert Einstein erklärte 1905 den Photoeffekt (Nobelpreis 1921): Wenn Licht auf ein Metall trifft, können Elektronen nur dann aus der Oberfläche herausgelöst werden, wenn die Photonenenergie hf die Austrittsarbeit W übersteigt. Die kinetische Energie der emittierten Elektronen: E_kin = hf − W. Unterhalb einer bestimmten Grenzfrequenz werden keine Elektronen emittiert — unabhängig von der Intensität des Lichts.

## Medizinische Anwendungen

**Röntgenstrahlung** (0,01-10 nm) dringt durch Gewebe und wird durch dichte Strukturen (Knochen) stärker absorbiert. In der CT (Computertomographie) werden 3D-Bilder rekonstruiert. **UV-Strahlung** (10-380 nm) aktiviert die Vitamin-D-Synthese in der Haut, schädigt aber bei Überexposition die DNA. **Infrarotstrahlung** (780 nm-1 mm) wird als Wärme wahrgenommen und findet Anwendung in der Wärmebilddiagnostik.`,
      lernziele: [
        "Die Photonenenergie mit E = hf = hc/λ berechnen und verschiedene Spektralbereiche zuordnen",
        "Den Photoeffekt erklären und die Einsteingleichung E_kin = hf − W anwenden",
        "Medizinische Anwendungen von Röntgen-, UV- und IR-Strahlung beschreiben",
      ],
      sections: [
        {
          heading: "Das elektromagnetische Spektrum",
          text: "Das EM-Spektrum ist kontinuierlich und reicht von langen Radiowellen (λ bis zu km) über Mikrowellen, Infrarot, sichtbares Licht (380-780 nm), Ultraviolett, Röntgenstrahlung bis zu Gammastrahlung (λ < 0,01 nm). Im sichtbaren Bereich entsprechen Wellenlängen bestimmten Farben: Violett (~380-450 nm), Blau (450-495 nm), Grün (495-570 nm), Gelb (570-590 nm), Orange (590-620 nm), Rot (620-780 nm). Die Energie pro Photon steigt mit abnehmender Wellenlänge: Violettes Licht hat ~1,6-mal mehr Energie als rotes. Ionisierende Strahlung (UV, Röntgen, Gamma) hat genug Energie, um Elektronen aus Atomen zu entfernen und DNA-Schäden zu verursachen.",
        },
        {
          heading: "Photoeffekt: Beweis der Teilchennatur des Lichts",
          text: "Der Photoeffekt beweist, dass Licht aus diskreten Photonen besteht. Klassisch würde man erwarten, dass bei ausreichend intensivem Licht stets Elektronen herausgelöst werden. Stattdessen zeigt sich: Unterhalb der Grenzfrequenz f₀ = W/h werden nie Elektronen emittiert, egal wie intensiv das Licht ist. Oberhalb von f₀ werden sofort Elektronen mit E_kin = hf − W emittiert. Die Intensität des Lichts bestimmt nur die Anzahl der emittierten Elektronen (Stromstärke), nicht ihre Energie. Dies beweist, dass ein einzelnes Photon mit einem einzelnen Elektron interagiert — ein klassisches Wellenmodell kann das nicht erklären.",
        },
      ],
      merksätze: [
        "E = hf = hc/λ: hohe Frequenz (kurze Wellenlänge) = hohe Photonenenergie",
        "Photoeffekt: E_kin = hf − W (nur wenn hf > W, sonst kein Elektron)",
        "Sichtbares Licht: 380 nm (violett) bis 780 nm (rot)",
      ],
      klinischerBezug: "Röntgenstrahlung ionisiert Gewebe und kann DNA-Strangbrüche verursachen, weshalb Strahlenexposition in der Medizin streng reguliert wird. Die Photonenenergie (E=hf) bestimmt das Gewebepenetrationsvermögen: Hochenergetische Gammastrahlen (Strahlentherapie) können gezielt tief liegende Tumoren bestrahlen.",
      altfrage: {
        question: "Welche Frequenz hat Licht der Wellenlänge 500 nm? (c = 3×10⁸ m/s)",
        answer: "f = c/λ = (3×10⁸ m/s) / (500×10⁻⁹ m) = 6×10¹⁴ Hz. Die Photonenenergie beträgt E = hf = 6,626×10⁻³⁴ × 6×10¹⁴ ≈ 4×10⁻¹⁹ J ≈ 2,5 eV (grünes Licht).",
      },
      selfTest: [
        {
          question: "Licht hat die Wellenlänge 300 nm. Welchem Spektralbereich gehört es an?",
          options: [
            "Sichtbares Licht (violett)",
            "Infrarotstrahlung",
            "Ultraviolettstrahlung",
            "Röntgenstrahlung",
            "Mikrowellen",
          ],
          correctIndex: 2,
          explanation: "UV-Strahlung hat Wellenlängen von 10-380 nm. 300 nm liegt im UV-Bereich. Sichtbares Licht beginnt erst bei ~380 nm (violett), IR beginnt bei ~780 nm.",
          hints: [
            "Sichtbares Licht: 380-780 nm",
            "Kürzere Wellenlängen als sichtbares Licht sind UV oder Röntgen",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Photonenenergie hat Licht der Frequenz f = 6×10¹⁴ Hz? (h = 6,6×10⁻³⁴ J·s)",
          options: [
            "6,6×10⁻³⁴ J",
            "6×10¹⁴ J",
            "3,96×10⁻¹⁹ J",
            "1,1×10⁻⁴⁸ J",
            "9,1×10⁻³¹ J",
          ],
          correctIndex: 2,
          explanation: "E = hf = 6,6×10⁻³⁴ J·s × 6×10¹⁴ Hz = 3,96×10⁻¹⁹ J ≈ 4×10⁻¹⁹ J. Das entspricht grünem Licht (~2,5 eV).",
          hints: [
            "Verwende E = hf",
            "Multipliziere h mit der gegebenen Frequenz f",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Beim Photoeffekt wird Licht der Frequenz f auf eine Metalloberfläche gestrahlt. Was passiert, wenn f kleiner als die Grenzfrequenz f₀ ist?",
          options: [
            "Es werden Elektronen emittiert, aber mit sehr geringer Energie",
            "Es werden Elektronen emittiert, aber erst nach einer Verzögerungszeit",
            "Es werden keine Elektronen emittiert, egal wie groß die Intensität ist",
            "Es werden mehr Elektronen emittiert, wenn die Intensität erhöht wird",
            "Das Metall heizt sich auf und emittiert schließlich Elektronen durch Wärme",
          ],
          correctIndex: 2,
          explanation: "Unterhalb der Grenzfrequenz f₀ = W/h hat kein einzelnes Photon genug Energie (hf < W), um ein Elektron aus dem Metall zu lösen. Mehr Intensität bedeutet mehr Photonen, aber jedes Photon hat dieselbe Energie — daher keine Elektronen, egal wie intensiv das Licht ist.",
          hints: [
            "Ein Photon interagiert mit einem Elektron — kein Aufsummieren von Photonen",
            "Die Bedingung für Elektronenemission ist hf > W (Austrittsarbeit)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Metall hat die Austrittsarbeit W = 4×10⁻¹⁹ J. Licht der Frequenz f = 8×10¹⁴ Hz trifft auf die Oberfläche. (h = 6,6×10⁻³⁴ J·s). Welche kinetische Energie haben die emittierten Elektronen?",
          options: [
            "1,28×10⁻¹⁹ J",
            "4×10⁻¹⁹ J",
            "5,28×10⁻¹⁹ J",
            "1,68×10⁻¹⁹ J",
            "Keine Elektronen werden emittiert",
          ],
          correctIndex: 0,
          explanation: "E_kin = hf − W = 6,6×10⁻³⁴ × 8×10¹⁴ − 4×10⁻¹⁹ = 5,28×10⁻¹⁹ − 4×10⁻¹⁹ = 1,28×10⁻¹⁹ J.",
          hints: [
            "Berechne zuerst die Photonenenergie: E = hf",
            "E_kin = hf − W (Einsteinsche Gleichung des Photoeffekts)",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Warum kann UV-Strahlung, aber nicht Radiostrahlung, DNA-Schäden verursachen?",
          options: [
            "UV-Strahlung hat eine größere Wellenlänge und damit mehr Energie",
            "UV-Photonen haben genug Energie, um chemische Bindungen in DNA-Molekülen aufzubrechen, Radiophotonen nicht",
            "Radiostrahlung dringt nicht durch die Haut und erreicht die DNA nicht",
            "UV-Strahlung ist ionisierend, weil sie aus mehreren Photonen gleichzeitig besteht",
            "DNA absorbiert selektiv nur Radiowellen",
          ],
          correctIndex: 1,
          explanation: "UV-Photonen haben Energien von ~3-12 eV (λ=100-400 nm), was ausreicht, um chemische Bindungen (Bindungsenergie ~3-10 eV) zu brechen und z.B. Pyrimidindimere in der DNA zu bilden. Radiophotonen haben Energien von ~10⁻⁹ bis 10⁻⁶ eV — millionenmal zu wenig für Bindungsbrüche.",
          hints: [
            "E = hf: Radiofrequenzen sind sehr niedrig → sehr wenig Energie pro Photon",
            "Chemische Bindungen brauchen typisch ~3-10 eV zum Brechen",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-2-03',
      title: 'Atomspektren und Spektralanalyse',
      content: `## Emission- und Absorptionsspektren

Wenn Atome Energie aufnehmen (z.B. durch Erhitzen oder elektrische Entladung), werden Elektronen auf höhere Energieniveaus angehoben (Anregung). Bei der Rückkehr in den Grundzustand emittieren sie Photonen mit genau der Energiedifferenz zwischen den Niveaus: E_Photon = E₂ − E₁ = hf. Da die Energieniveaus eines Elements diskret und charakteristisch sind, entsteht ein elementspezifisches **Emissionsspektrum** (Linienspektrum). Umgekehrt absorbieren Atome genau die Wellenlängen, die sie auch emittieren → **Absorptionsspektrum** (dunkle Linien im kontinuierlichen Spektrum).

## Serien des Wasserstoffspektrums

Wasserstoff ist das einfachste Atom (Z=1) und hat das am besten verstandene Spektrum. Die Elektronenübergänge sind in Serien gruppiert:
- **Lyman-Serie**: Übergänge zur n=1 (UV-Bereich)
- **Balmer-Serie**: Übergänge zur n=2 (sichtbares Licht, rot: 656 nm / blau: 486 nm / violett: 434 nm)
- **Paschen-Serie**: Übergänge zur n=3 (Infrarot)

## Franck-Hertz-Versuch

James Franck und Gustav Hertz zeigten 1914, dass Elektronen Energie nur in diskreten Quanten an Atome übertragen. Elektronen mit zu wenig Energie stoßen elastisch (kein Energieübertrag). Erst bei ausreichender Energie findet inelastische Streuung statt, und das Atom wird angeregt. Dies bewies die Quantelung der Energieniveaus.

## Fluoreszenz, Phosphoreszenz und Spektroskopie

**Fluoreszenz**: Unmittelbare Emission nach Anregung (< 10⁻⁸ s). Anwendung: Fluoreszenzfärbung in der Histologie, FACS, Immunfluoreszenz. **Phosphoreszenz**: Verzögerte Emission (ms bis Stunden) durch metastabile Zustände (Triplettzustand). In der Diagnostik wird **Spektroskopie** genutzt, um Moleküle anhand ihrer charakteristischen Absorptions- oder Emissionsspektren zu identifizieren und zu quantifizieren.`,
      lernziele: [
        "Emissions- und Absorptionsspektren erklären und den Unterschied beschreiben",
        "Die Serien des Wasserstoffspektrums (Lyman, Balmer, Paschen) und ihre Spektralbereiche zuordnen",
        "Fluoreszenz und Phosphoreszenz unterscheiden und diagnostische Anwendungen nennen",
      ],
      sections: [
        {
          heading: "Linienspektren als Fingerabdruck der Elemente",
          text: "Jedes Element besitzt ein einzigartiges Spektrum, das zur Identifikation genutzt werden kann — ähnlich einem Fingerabdruck. In der Astrophysik ermöglicht das Absorptionsspektrum der Sonne (Fraunhofer-Linien) die Bestimmung ihrer chemischen Zusammensetzung: Dunkle Linien entstehen, wenn Sonnenlicht von kühlen Atmosphärenschichten absorbiert wird. Die Spektralanalyse (AAS, AES) wird in der klinischen Chemie zur Bestimmung von Spurenelementen (Natrium, Kalium, Calcium, Eisen) in Körperflüssigkeiten eingesetzt. Flammenspektrometrie ist einfach und kostengünstig für Na und K (gelbe bzw. violette Flamme). Graphitrohrofen-AAS erreicht Nachweisgrenzen im ng/L-Bereich.",
        },
        {
          heading: "Fluoreszenz in der medizinischen Diagnostik",
          text: "Fluoreszenz beruht auf der Absorption eines Photons (Anregung) und der nahezu sofortigen Emission eines Photons niedrigerer Energie (Stokes-Verschiebung: Emissionswellenlänge > Anregungswellenlänge). In der Medizin sind Fluoreszenzfarbstoffe (Fluorophore) wie FITC, DAPI oder Texas Red unverzichtbar. Die Immunfluoreszenzmikroskopie lokalisiert Proteine in Gewebeschnitten durch fluoreszenzmarkierte Antikörper. Die Durchflusszytometrie (FACS) kann einzelne Blutzellen anhand fluoreszenzmarkierter Oberflächenmarker sortieren und zählen. Neuere Techniken wie TIRF und STORM erreichen Auflösungen weit unterhalb der Beugungsgrenze.",
        },
      ],
      merksätze: [
        "Balmer-Serie: Übergänge zu n=2, sichtbares Licht (rot 656 nm, blau 486 nm)",
        "Lyman: n=1, UV; Balmer: n=2, sichtbar; Paschen: n=3, IR",
        "Fluoreszenz: sofortige Lichtemission (< 10⁻⁸s) nach Anregung",
      ],
      klinischerBezug: "Fluoreszenzmarkierte Antikörper sind das Rückgrat der modernen Immundiagnostik: In der Immunfluoreszenz, im ELISA und in der Durchflusszytometrie ermöglichen sie die sensitive und spezifische Detektion von Krankheitserregern, Autoantikörpern und Tumorzellmarkern.",
      altfrage: {
        question: "Warum erzeugen angeregte Atome ein Linienspektrum statt eines kontinuierlichen Spektrums?",
        answer: "Elektronen in Atomen können nur diskrete Energieniveaus einnehmen. Bei der Rückkehr von einem angeregten Niveau in ein niedrigeres wird ein Photon mit genau der Energiedifferenz ΔE = hf emittiert. Da nur bestimmte Übergänge zwischen diskreten Niveaus möglich sind, entstehen nur bestimmte Frequenzen — das elementspezifische Linienspektrum.",
      },
      selfTest: [
        {
          question: "Welche Spektralserie des Wasserstoffs liegt im sichtbaren Bereich?",
          options: [
            "Lyman-Serie",
            "Balmer-Serie",
            "Paschen-Serie",
            "Brackett-Serie",
            "Pfund-Serie",
          ],
          correctIndex: 1,
          explanation: "Die Balmer-Serie (Übergänge auf n=2) liegt im sichtbaren Bereich: H-α bei 656 nm (rot), H-β bei 486 nm (blau), H-γ bei 434 nm (violett). Die Lyman-Serie (n=1) liegt im UV, die Paschen-Serie (n=3) im IR.",
          hints: [
            "Sichtbares Licht: 380-780 nm",
            "Die Serie nach Johann Jakob Balmer liegt im Sichtbaren",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen Emissions- und Absorptionsspektrum?",
          options: [
            "Emissionsspektrum zeigt kontinuierliche Farben, Absorptionsspektrum zeigt Linien",
            "Emissionsspektrum hat helle Linien auf dunklem Hintergrund, Absorptionsspektrum dunkle Linien im Kontinuum",
            "Emissionsspektrum entsteht bei UV-Licht, Absorptionsspektrum bei Röntgenlicht",
            "Beide Spektren sind identisch, nur die Messmethode unterscheidet sich",
            "Absorptionsspektren zeigen immer mehr Linien als Emissionsspektren",
          ],
          correctIndex: 1,
          explanation: "Emissionsspektren zeigen helle charakteristische Linien auf schwarzem Hintergrund (emittierte Photonen). Absorptionsspektren zeigen dunkle Linien im kontinuierlichen Regenbogenspektrum (absorbierte Wellenlängen). Beide Spektren zeigen dieselben charakteristischen Wellenlängen des Elements.",
          hints: [
            "Emission = Atome senden Licht aus; Absorption = Atome schlucken bestimmte Wellenlängen",
            "Ein Kontinuumsspektrum mit fehlenden Wellenlängen ist ein Absorptionsspektrum",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was beweist der Franck-Hertz-Versuch?",
          options: [
            "Elektronen haben Welleneigenschaften",
            "Atome können nur diskrete Energiemengen aufnehmen (Quantelung der Energieniveaus)",
            "Photonen haben keine Masse",
            "Die Elektronenmasse ist konstant",
            "Röntgenstrahlung entsteht durch Elektronenstöße",
          ],
          correctIndex: 1,
          explanation: "Im Franck-Hertz-Versuch stoßen Elektronen inelastisch mit Quecksilberatomen, aber nur wenn sie genau die Anregungsenergie (4,9 eV für Hg) besitzen. Bei geringerer Energie erfolgt nur elastischer Stoß ohne Energieübertrag. Dies beweist die Quantelung der Energieniveaus.",
          hints: [
            "Inelastische Stöße finden nur bei bestimmten Elektronenenergien statt",
            "Der Versuch zeigt, dass Energie nur in bestimmten Portionen übertragen werden kann",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Stokes-Verschiebung bei der Fluoreszenz?",
          options: [
            "Die Energie des emittierten Photons ist größer als die des absorbierten",
            "Das emittierte Licht hat eine längere Wellenlänge als das absorbierte",
            "Der Fluoreszenzfarbstoff verschiebt sich im Gewebe",
            "Das absorbierte Licht hat eine längere Wellenlänge als das emittierte",
            "Die Emissionszeit verschiebt sich bei steigender Temperatur",
          ],
          correctIndex: 1,
          explanation: "Bei der Fluoreszenz gibt das angeregte Molekül zunächst etwas Energie durch Schwingungsrelaxation ab. Das dann emittierte Photon hat daher weniger Energie (niedrigere Frequenz, längere Wellenlänge) als das absorbierte. Diese Rotverschiebung wird als Stokes-Verschiebung bezeichnet.",
          hints: [
            "Emittiertes Photon hat weniger Energie als absorbiertes → welche Wellenlänge?",
            "E = hf: weniger Energie bedeutet niedrigere Frequenz und längere Wellenlänge",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Ein Elektron in einem Wasserstoffatom fällt von n=4 auf n=2. In welchem Spektralbereich liegt das emittierte Photon?",
          options: [
            "Infrarot (Paschen-Serie)",
            "Sichtbares Licht (Balmer-Serie)",
            "UV-Licht (Lyman-Serie)",
            "Röntgenstrahlung",
            "Mikrowellen",
          ],
          correctIndex: 1,
          explanation: "Alle Übergänge, die beim Wasserstoff auf n=2 enden, gehören zur Balmer-Serie, die im sichtbaren Lichtbereich liegt. Der Übergang 4→2 entspricht der H-β-Linie bei 486 nm (blau-grün).",
          hints: [
            "Die Endquantenzahl bestimmt die Serie: n=1→Lyman, n=2→Balmer, n=3→Paschen",
            "Balmer-Serie liegt im sichtbaren Bereich",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
