import type { Kapitel } from '../types';

export const physKap8: Kapitel = {
  id: 'phys-kap8',
  title: 'Atom- & Kernphysik',
  subject: 'physik',
  icon: '☢️',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'phys-kap8-1',
      title: 'Radioaktivität',
      content: `**Radioaktivität** ist die spontane Umwandlung instabiler Atomkerne unter Aussendung ionisierender Strahlung. Atomkerne bestehen aus Protonen (positiv geladen) und Neutronen (ungeladen), zusammen als **Nukleonen** bezeichnet. Die **Kernladungszahl Z** (Protonenzahl) bestimmt das Element, die **Massenzahl A** (Protonen + Neutronen) die Masse des Kerns. Isotope eines Elements haben die gleiche Protonenzahl, aber unterschiedliche Neutronenzahlen. Instabile Isotope (Radionuklide) streben durch radioaktiven Zerfall einen energetisch günstigeren Zustand an. Die drei klassischen Strahlungsarten sind **α-Strahlung**, **β-Strahlung** und **γ-Strahlung**, die sich in ihrer Natur, Reichweite und Durchdringungsfähigkeit grundlegend unterscheiden. Henri Becquerel entdeckte die Radioaktivität 1896, Marie und Pierre Curie erforschten sie systematisch und isolierten die radioaktiven Elemente Polonium und Radium.

Beim **α-Zerfall** sendet der Kern ein α-Teilchen aus, das aus 2 Protonen und 2 Neutronen besteht — es handelt sich also um einen Helium-4-Kern (⁴₂He). Dadurch nimmt die Massenzahl um 4 und die Kernladungszahl um 2 ab: ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He. α-Strahlung hat eine hohe Ionisierungsdichte, aber eine geringe Reichweite (wenige Zentimeter in Luft, wird bereits durch ein Blatt Papier abgeschirmt). Beim **β⁻-Zerfall** wird ein Neutron in ein Proton, ein Elektron (β⁻-Teilchen) und ein Antineutrino umgewandelt: n → p + e⁻ + ν̄ₑ. Die Kernladungszahl steigt um 1, die Massenzahl bleibt gleich. Beim selteneren **β⁺-Zerfall** (Positronenemission) wird ein Proton in ein Neutron, ein Positron und ein Neutrino umgewandelt. β-Strahlung hat eine mittlere Reichweite (einige Meter in Luft, Abschirmung durch Aluminium oder Plexiglas). **γ-Strahlung** ist hochenergetische elektromagnetische Strahlung, die beim Übergang eines angeregten Kerns in einen niedrigeren Energiezustand emittiert wird. Sie begleitet häufig α- oder β-Zerfälle. γ-Strahlung hat die höchste Durchdringungsfähigkeit und wird erst durch dicke Schichten aus Blei oder Beton wirksam abgeschirmt.

Das **Zerfallsgesetz** beschreibt die Abnahme der Anzahl radioaktiver Kerne mit der Zeit: **N(t) = N₀ · (½)^(t/T½)** bzw. N(t) = N₀ · e^(−λt), wobei N₀ die Anfangsanzahl, T½ die Halbwertszeit und λ = ln(2)/T½ die Zerfallskonstante ist. Die **Halbwertszeit** T½ ist die Zeit, nach der die Hälfte der radioaktiven Kerne zerfallen ist — sie ist charakteristisch für jedes Radionuklid und unabhängig von äußeren Bedingungen (Temperatur, Druck, chemische Bindung). Beispiele: ²³⁸U hat T½ ≈ 4,5 Milliarden Jahre, ¹⁴C hat T½ ≈ 5730 Jahre (Radiokohlenstoffdatierung), ¹³¹I hat T½ ≈ 8 Tage (Schilddrüsendiagnostik). Die **Aktivität A** (Zerfälle pro Zeiteinheit) wird in Becquerel (Bq) gemessen: 1 Bq = 1 Zerfall/s. Die veraltete Einheit ist Curie (Ci): 1 Ci = 3,7 · 10¹⁰ Bq. Die Aktivität nimmt mit der gleichen Halbwertszeit ab wie die Teilchenzahl: A(t) = A₀ · (½)^(t/T½).`,
      merksätze: [
        'Zerfallsgesetz: N(t) = N₀·(½)^(t/T½). Halbwertszeit T½: Zeit, bis die Hälfte zerfallen ist (stoffspezifisch, unabhängig von Temperatur/Druck). Aktivität: A in Becquerel (1 Bq = 1 Zerfall/s).',
        'α-Strahlung: ⁴He-Kern, hohe Ionisierung, geringe Reichweite (Papier schirmt ab). β-Strahlung: Elektron/Positron, mittlere Reichweite (Aluminium). γ-Strahlung: EM-Welle, höchste Durchdringung (Blei/Beton).'
      ],
      altfrage: {
        question: 'Ein radioaktives Isotop hat eine Halbwertszeit von 6 Stunden. Wie viel Prozent der ursprünglichen Substanz sind nach 18 Stunden noch vorhanden?',
        answer: '18 Stunden entsprechen 3 Halbwertszeiten (18/6 = 3). N(t) = N₀·(½)³ = N₀·1/8 = 12,5 % der ursprünglichen Substanz. Nach jeder Halbwertszeit halbiert sich die Menge: 100 % → 50 % → 25 % → 12,5 %.'
      },
      klinischerBezug: 'Radioaktive Isotope werden in der Nuklearmedizin diagnostisch und therapeutisch eingesetzt. ¹³¹Iod (T½ = 8 Tage, β⁻- und γ-Strahler) reichert sich in der Schilddrüse an und wird zur Diagnostik und Therapie von Schilddrüsenerkrankungen (Hyperthyreose, Schilddrüsenkarzinom) verwendet — die Radiojodtherapie. ⁹⁹ᵐTc (T½ = 6 Stunden, reiner γ-Strahler) ist das am häufigsten verwendete Radionuklid in der Szintigraphie. ¹⁸F-FDG (Fluordeoxyglucose) wird in der PET-Diagnostik zur Tumorerkennung eingesetzt, da Tumorzellen einen erhöhten Glucosestoffwechsel aufweisen.',
      selfTest: [
        {
          question: 'Ein α-Teilchen besteht aus:',
          options: [
            '2 Elektronen und 2 Neutronen',
            '2 Protonen und 2 Neutronen (Helium-4-Kern)',
            '1 Proton und 1 Neutron',
            '4 Neutronen',
            '2 Protonen und 2 Elektronen'
          ],
          correctIndex: 1,
          explanation: 'Ein α-Teilchen ist ein Helium-4-Kern und besteht aus 2 Protonen und 2 Neutronen. Beim α-Zerfall nimmt die Massenzahl des Mutterkerns um 4 und die Kernladungszahl um 2 ab.'
        },
        {
          question: 'Nach wie vielen Halbwertszeiten ist die Aktivität eines radioaktiven Präparats auf 1/8 des Anfangswerts gesunken?',
          options: [
            '2 Halbwertszeiten',
            '3 Halbwertszeiten',
            '4 Halbwertszeiten',
            '8 Halbwertszeiten',
            '6 Halbwertszeiten'
          ],
          correctIndex: 1,
          explanation: '(½)ⁿ = 1/8 → n = 3. Nach 3 Halbwertszeiten ist die Aktivität auf (½)³ = 1/8 des Anfangswerts gesunken: 100 % → 50 % → 25 % → 12,5 %.'
        },
        {
          question: 'Welche Strahlungsart hat die geringste Durchdringungsfähigkeit?',
          options: [
            'α-Strahlung',
            'β-Strahlung',
            'γ-Strahlung',
            'Röntgenstrahlung',
            'Neutronenstrahlung'
          ],
          correctIndex: 0,
          explanation: 'α-Strahlung hat die geringste Reichweite (wenige cm in Luft, Abschirmung durch Papier), dafür aber die höchste Ionisierungsdichte. β-Strahlung wird durch Aluminium, γ-Strahlung erst durch Blei oder Beton wirksam abgeschirmt.'
        }
      ]
    },
    {
      id: 'phys-kap8-2',
      title: 'Kernreaktionen',
      content: `**Kernreaktionen** sind Prozesse, bei denen Atomkerne umgewandelt werden und dabei enorme Energiemengen freigesetzt oder aufgenommen werden. Im Gegensatz zu chemischen Reaktionen, die nur die Elektronenhülle betreffen, verändern Kernreaktionen die Zusammensetzung des Atomkerns selbst. Die bei Kernreaktionen umgesetzten Energien sind typischerweise millionenfach größer als bei chemischen Reaktionen. Die Grundlage für das Verständnis der Kernenergie bildet Einsteins berühmte Masse-Energie-Äquivalenz: **E = mc²**, wobei E die Energie, m die Masse und c die Lichtgeschwindigkeit (3 · 10⁸ m/s) ist. Selbst eine winzige Masse entspricht einer riesigen Energiemenge. Der **Massendefekt** Δm ist die Differenz zwischen der Summe der Massen der einzelnen Nukleonen und der tatsächlichen Masse des zusammengesetzten Kerns. Die daraus resultierende Energie ΔE = Δm · c² ist die **Bindungsenergie** des Kerns — sie muss aufgewendet werden, um den Kern vollständig in seine Nukleonen zu zerlegen. Je höher die Bindungsenergie pro Nukleon, desto stabiler ist der Kern. Eisen-56 (⁵⁶Fe) hat die höchste Bindungsenergie pro Nukleon und ist damit der stabilste Kern.

Die **Kernspaltung** (Fission) ist die Aufspaltung eines schweren Kerns (typischerweise ²³⁵U oder ²³⁹Pu) in zwei mittelschwere Kerne (Spaltfragmente) unter Freisetzung von Energie und zusätzlichen Neutronen. Die Spaltung wird durch den Einfang eines langsamen (thermischen) Neutrons ausgelöst: ²³⁵U + n → Spaltprodukte + 2–3 n + Energie (ca. 200 MeV pro Spaltung). Die freigesetzten Neutronen können weitere Kerne spalten und so eine **Kettenreaktion** auslösen. In einem **Kernreaktor** wird die Kettenreaktion durch Moderatoren (z. B. Wasser, Graphit — verlangsamen die Neutronen) und Steuerstäbe (z. B. Cadmium, Bor — absorbieren Neutronen) kontrolliert. Die Bedingung für eine selbsterhaltende Kettenreaktion ist, dass durchschnittlich genau ein Neutron pro Spaltung eine weitere Spaltung auslöst (kritische Masse). Unkontrollierte Kettenreaktionen führen zur Kernexplosion (Atombombe). Die Probleme der Kernspaltung sind die radioaktiven Abfallprodukte mit langen Halbwertszeiten und das Risiko schwerer Unfälle (Tschernobyl 1986, Fukushima 2011).

Die **Kernfusion** (Verschmelzung) ist die Vereinigung leichter Kerne zu einem schwereren Kern unter Freisetzung enormer Energiemengen. In der Sonne verschmelzen Wasserstoffkerne zu Helium in der Proton-Proton-Kette: 4 ¹H → ⁴He + 2 e⁺ + 2 νₑ + Energie (ca. 26,7 MeV). Die Fusion setzt pro Nukleon deutlich mehr Energie frei als die Spaltung. Die technische Herausforderung der Kernfusion auf der Erde besteht darin, dass extrem hohe Temperaturen (>100 Millionen °C) nötig sind, um die elektrostatische Abstoßung der positiv geladenen Kerne zu überwinden — man spricht von einem **Plasma**, das durch Magnetfelder (Tokamak) oder Laserbestrahlung (Trägheitsfusion) eingeschlossen werden muss. Die vielversprechendste Fusionsreaktion für terrestrische Kraftwerke ist: ²H (Deuterium) + ³H (Tritium) → ⁴He + n + 17,6 MeV. Die Kernfusion hätte gegenüber der Kernspaltung entscheidende Vorteile: nahezu unerschöpflicher Brennstoff (Deuterium aus Meerwasser), keine langlebigen radioaktiven Abfälle und kein Risiko einer Kernschmelze. Trotz jahrzehntelanger Forschung ist die kontrollierte Energiegewinnung durch Kernfusion bisher noch nicht technisch realisiert.`,
      merksätze: [
        'Kernspaltung: schwerer Kern (²³⁵U) + Neutron → 2 mittlere Kerne + 2–3 Neutronen + ~200 MeV. Kettenreaktion kontrolliert durch Moderator + Steuerstäbe. Kernfusion: leichte Kerne (H → He) → noch mehr Energie, aber >100 Mio. °C nötig.',
        'E = mc²: Massendefekt Δm → Bindungsenergie ΔE = Δm·c². Stabilster Kern: ⁵⁶Fe (höchste Bindungsenergie pro Nukleon). Kerne leichter als Fe → Fusion günstig, schwerer als Fe → Spaltung günstig.'
      ],
      altfrage: {
        question: 'Warum wird bei der Kernspaltung von ²³⁵U Energie freigesetzt?',
        answer: 'Die Spaltprodukte (mittelschwere Kerne) haben eine höhere Bindungsenergie pro Nukleon als ²³⁵U. Die Differenz der Bindungsenergien wird als kinetische Energie der Spaltprodukte und Neutronen freigesetzt. Dies folgt aus der Masse-Energie-Äquivalenz E = mc²: Die Gesamtmasse der Produkte ist geringer als die Masse der Ausgangsstoffe (Massendefekt).'
      },
      klinischerBezug: 'Die Kernspaltung liefert die Grundlage für die Herstellung medizinischer Radionuklide: ⁹⁹Mo (Mutternuklid von ⁹⁹ᵐTc, dem wichtigsten Diagnostik-Radionuklid) wird in Kernreaktoren durch Neutronenbestrahlung von ²³⁵U erzeugt. Die Positronen-Emissions-Tomographie (PET) nutzt die Annihilation von Positronen (aus β⁺-Zerfall) mit Elektronen, wobei zwei γ-Photonen mit je 511 keV in entgegengesetzte Richtungen emittiert werden. In der Strahlentherapie werden Schwerionenstrahlen (z. B. ¹²C-Ionen) aus Teilchenbeschleunigern zur präzisen Tumorbestrahlung eingesetzt.',
      selfTest: [
        {
          question: 'Was besagt die Gleichung E = mc²?',
          options: [
            'Energie und Masse sind voneinander unabhängig.',
            'Masse kann in Energie umgewandelt werden und umgekehrt.',
            'Die Lichtgeschwindigkeit hängt von der Masse ab.',
            'Energie ist immer gleich der doppelten Masse.',
            'Die Masse eines Körpers nimmt mit der Temperatur ab.'
          ],
          correctIndex: 1,
          explanation: 'Einsteins Masse-Energie-Äquivalenz E = mc² besagt, dass Masse und Energie äquivalent sind und ineinander umgewandelt werden können. Bei Kernreaktionen wird der Massendefekt Δm in Energie ΔE = Δm·c² umgewandelt.'
        },
        {
          question: 'Was löst die Kernspaltung von ²³⁵U aus?',
          options: [
            'Ein schnelles Proton',
            'Ein langsames (thermisches) Neutron',
            'γ-Strahlung',
            'Ein α-Teilchen',
            'Ein hochenergetisches Elektron'
          ],
          correctIndex: 1,
          explanation: 'Die Spaltung von ²³⁵U wird durch den Einfang eines langsamen (thermischen) Neutrons ausgelöst. Die freigesetzten schnellen Neutronen müssen durch einen Moderator (z. B. Wasser) abgebremst werden, um weitere Spaltungen effizient auslösen zu können.'
        },
        {
          question: 'Welcher Kern hat die höchste Bindungsenergie pro Nukleon und ist damit am stabilsten?',
          options: [
            'Wasserstoff (¹H)',
            'Uran (²³⁸U)',
            'Eisen (⁵⁶Fe)',
            'Helium (⁴He)',
            'Kohlenstoff (¹²C)'
          ],
          correctIndex: 2,
          explanation: '⁵⁶Fe hat die höchste Bindungsenergie pro Nukleon (ca. 8,8 MeV). Kerne leichter als Eisen gewinnen Energie durch Fusion, Kerne schwerer als Eisen durch Spaltung — beides strebt in Richtung des Eisen-Maximums.'
        }
      ]
    },
    {
      id: 'phys-kap8-3',
      title: 'Strahlenschutz',
      content: `Der **Strahlenschutz** befasst sich mit dem Schutz von Mensch und Umwelt vor den schädlichen Wirkungen ionisierender Strahlung. Um die biologische Wirkung von Strahlung zu quantifizieren, werden verschiedene Dosisbegriffe verwendet. Die **Energiedosis D** (Einheit: **Gray, Gy**) gibt die pro Masse absorbierte Strahlungsenergie an: D = E/m (1 Gy = 1 J/kg). Die Energiedosis allein reicht jedoch nicht aus, um die biologische Wirkung zu beschreiben, da verschiedene Strahlungsarten bei gleicher Energiedosis unterschiedlich stark schädigen. Daher wird die **Äquivalentdosis H** (Einheit: **Sievert, Sv**) eingeführt: H = D · wR, wobei wR der **Strahlungswichtungsfaktor** (früher: Qualitätsfaktor) ist. Für γ- und β-Strahlung gilt wR = 1, für α-Strahlung wR = 20 (aufgrund der hohen Ionisierungsdichte) und für Neutronen wR = 5–20 (je nach Energie). Die **effektive Dosis E** berücksichtigt zusätzlich die unterschiedliche Strahlenempfindlichkeit verschiederer Organe und Gewebe durch organspezifische Wichtungsfaktoren wT.

Die **biologische Wirkung** ionisierender Strahlung beruht auf der Ionisation und Anregung von Molekülen in lebenden Zellen. Besonders kritisch sind Schäden an der DNA: Einzelstrangbrüche (meist reparierbar), Doppelstrangbrüche (schwer reparierbar, können zu Mutationen führen) und Basenschäden. Strahlung kann **direkt** (Absorption der Strahlungsenergie durch die DNA selbst) oder **indirekt** (Radiolyse von Wasser → Bildung freier Radikale wie OH·, die die DNA angreifen) wirken. Man unterscheidet **deterministische Strahlenschäden** (Schwellendosis erforderlich, Schwere dosisabhängig, z. B. Hautverbrennungen ab ca. 3 Gy, Strahlenkrankheit, Katarakt) und **stochastische Strahlenschäden** (keine Schwellendosis, Wahrscheinlichkeit dosisabhängig, z. B. Krebsentstehung, genetische Schäden). Die Latenzzeit für strahleninduzierte Krebserkrankungen beträgt oft Jahre bis Jahrzehnte. Besonders strahlenempfindlich sind Gewebe mit hoher Zellteilungsrate: Knochenmark (hämatopötische Stammzellen), Darmepithel, Keimzellen und embryonales Gewebe.

Die drei Grundprinzipien des Strahlenschutzes sind: (1) **Abstand**: Die Dosisleistung nimmt mit dem Quadrat des Abstands ab (Abstandsquadratgesetz: I ∝ 1/r²). Verdoppelung des Abstands verringert die Dosis auf ein Viertel. (2) **Abschirmung**: Geeignete Materialien zwischen Strahlenquelle und Person. α-Strahlung: Papier/Haut. β-Strahlung: Aluminium/Plexiglas (kein Blei, da sonst Bremsstrahlung entsteht!). γ-Strahlung: Blei, Beton. Die Abschwächung folgt einem Exponentialgesetz: I(x) = I₀ · e^(−μx), wobei μ der lineare Schwächungskoeffizient ist. (3) **Aufenthaltsdauer**: Die Gesamtdosis steigt proportional mit der Expositionszeit — daher soll die Aufenthaltszeit im Strahlenfeld minimiert werden. Die natürliche Hintergrundstrahlung beträgt in Österreich und Deutschland durchschnittlich ca. 2–3 mSv/Jahr (kosmische Strahlung, Radon, terrestrische Strahlung, Nahrung). Der Grenzwert für die effektive Dosis für beruflich strahlenexponierte Personen liegt bei 20 mSv/Jahr, für die allgemeine Bevölkerung bei 1 mSv/Jahr (zusätzlich zur natürlichen Strahlung). Das ALARA-Prinzip (As Low As Reasonably Achievable) fordert, die Strahlenexposition stets so gering wie vernünftigerweise erreichbar zu halten.`,
      merksätze: [
        'Dosisbegriffe: Energiedosis D (Gy = J/kg) → Äquivalentdosis H = D·wR (Sv). Wichtungsfaktoren wR: γ/β = 1, α = 20, Neutronen = 5–20. Grenzwert beruflich: 20 mSv/Jahr.',
        'Strahlenschutz-Prinzipien: Abstand (I ∝ 1/r²), Abschirmung (α: Papier, β: Aluminium, γ: Blei), Aufenthaltsdauer minimieren. ALARA-Prinzip: So wenig Strahlung wie möglich!'
      ],
      altfrage: {
        question: 'Eine Person erhält eine Energiedosis von 0,1 Gy durch α-Strahlung. Wie groß ist die Äquivalentdosis in Sievert?',
        answer: 'H = D · wR = 0,1 Gy · 20 = 2 Sv. Der Strahlungswichtungsfaktor für α-Strahlung beträgt wR = 20, da α-Teilchen eine hohe Ionisierungsdichte aufweisen und bei gleicher Energiedosis deutlich mehr biologischen Schaden verursachen als γ- oder β-Strahlung.'
      },
      klinischerBezug: 'Die akute Strahlenkrankheit tritt ab einer Ganzkörperdosis von ca. 1 Sv auf und verläuft in Phasen: Prodromalphase (Übelkeit, Erbrechen), Latenzphase, Manifestationsphase (Knochenmarksdepression mit Panzytopenie ab ca. 1 Sv, gastrointestinales Syndrom ab ca. 6 Sv, zerebrovaskuläres Syndrom ab ca. 20 Sv — letal). Die mittlere letale Dosis (LD₅₀/₆₀) ohne medizinische Versorgung beträgt ca. 3,5–4 Sv. In der Strahlentherapie werden gezielt hohe lokale Dosen (40–70 Gy, fraktioniert) auf Tumoren appliziert, wobei umliegendes Gewebe durch Mehrfeldbestrahlung geschont wird.',
      selfTest: [
        {
          question: 'Welche Einheit beschreibt die biologisch gewichtete Strahlendosis?',
          options: [
            'Gray (Gy)',
            'Becquerel (Bq)',
            'Sievert (Sv)',
            'Coulomb (C)',
            'Joule (J)'
          ],
          correctIndex: 2,
          explanation: 'Die Äquivalentdosis in Sievert (Sv) berücksichtigt die unterschiedliche biologische Wirksamkeit verschiedener Strahlungsarten (H = D·wR). Gray (Gy) ist die Einheit der Energiedosis ohne biologische Gewichtung, Becquerel (Bq) misst die Aktivität.'
        },
        {
          question: 'Warum ist α-Strahlung bei Inkorporation (Aufnahme in den Körper) besonders gefährlich?',
          options: [
            'α-Strahlung hat die größte Reichweite.',
            'α-Strahlung durchdringt den gesamten Körper.',
            'α-Strahlung hat eine sehr hohe Ionisierungsdichte und schädigt das umliegende Gewebe massiv.',
            'α-Strahlung ist elektromagnetisch und hat hohe Energie.',
            'α-Strahlung wird vom Magnetfeld des Körpers absorbiert.'
          ],
          correctIndex: 2,
          explanation: 'α-Teilchen haben zwar eine geringe Reichweite (werden extern durch Haut abgeschirmt), aber eine sehr hohe Ionisierungsdichte (wR = 20). Bei Inkorporation (Einatmen, Verschlucken) geben sie ihre gesamte Energie auf kleinstem Raum ab und verursachen massive lokale DNA-Schäden.'
        },
        {
          question: 'Wie ändert sich die Dosisleistung, wenn der Abstand zur Strahlenquelle verdreifacht wird?',
          options: [
            'Sie sinkt auf 1/3',
            'Sie sinkt auf 1/6',
            'Sie sinkt auf 1/9',
            'Sie bleibt gleich',
            'Sie sinkt auf 1/27'
          ],
          correctIndex: 2,
          explanation: 'Nach dem Abstandsquadratgesetz (I ∝ 1/r²) sinkt die Dosisleistung mit dem Quadrat des Abstands. Bei Verdreifachung des Abstands: I = I₀/3² = I₀/9, also auf ein Neuntel.'
        }
      ]
    },
    {
      id: 'phys-kap8-4',
      title: 'Medizinische Anwendungen',
      content: `Die **Röntgenstrahlung** wurde 1895 von Wilhelm Conrad Röntgen entdeckt und ist die älteste bildgebende Methode in der Medizin. Röntgenstrahlen entstehen, wenn schnelle Elektronen auf ein Metallziel (Anode, meist Wolfram) treffen und abgebremst werden (**Bremsstrahlung**) oder wenn Elektronen aus inneren Schalen der Anode herausgeschlagen werden und Elektronen höherer Schalen nachrücken (**charakteristische Strahlung**). Die Röhrenspannung (typisch 25–150 kV) bestimmt die maximale Photonenenergie und damit die Durchdringungsfähigkeit. In der konventionellen Röntgendiagnostik durchdringen die Strahlen den Körper und werden je nach Gewebedichte unterschiedlich absorbiert: Knochen absorbieren stark (weiß im Bild), Weichteilgewebe mäßig (grau), Luft kaum (schwarz). Die **Computertomographie (CT)** erzeugt Schnittbilder, indem die Röntgenröhre um den Patienten rotiert und Detektoren die Abschwächung aus vielen Winkeln messen. Ein Computer berechnet daraus die räumliche Dichteverteilung. CT liefert hervorragende Detailauflösung und ist besonders geeignet für Knochen, Lunge und akute Diagnostik (z. B. Schlaganfall, Polytrauma).

Die **Magnetresonanztomographie (MRT)** nutzt keine ionisierende Strahlung, sondern starke Magnetfelder und Hochfrequenzpulse. Das Prinzip basiert auf der **Kernspinresonanz**: Wasserstoffkerne (Protonen) besitzen einen Eigendrehimpuls (Kernspin) und richten sich in einem starken äußeren Magnetfeld (typisch 1,5 oder 3 Tesla) parallel oder antiparallel aus. Ein kurzer Hochfrequenzpuls (Radiofrequenz, im MHz-Bereich) kippt die Ausrichtung der Spins um. Beim Zurückkehren in den Gleichgewichtszustand (Relaxation) senden die Protonen messbare Signale aus. Die Relaxationszeiten **T₁** (Spin-Gitter-Relaxation, longitudinal) und **T₂** (Spin-Spin-Relaxation, transversal) sind gewebespezifisch und erzeugen den hervorragenden Weichteilkontrast der MRT. T₁-gewichtete Bilder eignen sich gut für die Anatomie (Fett hell, Wasser dunkel), T₂-gewichtete Bilder für die Erkennung von Pathologien (Wasser/Ödeme hell). MRT ist besonders geeignet für Gehirn, Rückenmark, Gelenke, Weichteilgewebe und eignet sich hervorragend zur Tumordiagnostik — alles ohne Strahlenbelastung.

Die **Strahlentherapie** (Radiotherapie) nutzt ionisierende Strahlung zur Behandlung maligner Tumoren. Das Ziel ist die Zerstörung von Tumorzellen durch DNA-Schäden, insbesondere Doppelstrangbrüche, die die Zellteilung verhindern. Die Gesamtdosis (typisch 40–70 Gy) wird in viele kleine Fraktionen (z. B. 2 Gy pro Tag über mehrere Wochen) aufgeteilt, damit sich das gesunde Gewebe zwischen den Sitzungen erholen kann (Fraktionierung). Moderne Verfahren wie die **intensitätsmodulierte Radiotherapie (IMRT)** und die **Protonentherapie** ermöglichen eine präzise Dosisverteilung, die den Tumor maximal und das umliegende Gewebe minimal belastet. Die **Positronen-Emissions-Tomographie (PET)** ist ein nuklearmedizinisches Bildgebungsverfahren. Dem Patienten wird ein Positronenstrahler (meist ¹⁸F-FDG, eine radioaktiv markierte Glucose) injiziert. Tumorzellen mit erhöhtem Glucosestoffwechsel (Warburg-Effekt) reichern ¹⁸F-FDG vermehrt an. Beim β⁺-Zerfall von ¹⁸F emittierte Positronen annihilieren mit Elektronen und erzeugen zwei 511-keV-γ-Photonen in entgegengesetzte Richtungen, die von ringförmig angeordneten Detektoren registriert werden. PET-CT kombiniert die metabolische PET-Information mit der anatomischen CT-Auflösung und ist der Goldstandard für Tumorstaging und Therapiekontrolle.`,
      merksätze: [
        'Bildgebung: Röntgen/CT = ionisierende Strahlung (Röntgenstrahlen, guter Knochenkontrast). MRT = keine ionisierende Strahlung (Magnetfeld + Radiowellen, hervorragender Weichteilkontrast). PET = Positronenstrahler (¹⁸F-FDG, Stoffwechselaktivität).',
        'MRT-Prinzip: Protonen im Magnetfeld → Hochfrequenzpuls → Relaxation (T₁, T₂) → Signal. T₁-gewichtet: Anatomie (Fett hell). T₂-gewichtet: Pathologie (Wasser/Ödem hell). Strahlentherapie: Fraktionierung (2 Gy/Tag) schont gesundes Gewebe.'
      ],
      altfrage: {
        question: 'Warum ist die MRT für die Darstellung von Weichteilgewebe besser geeignet als die CT?',
        answer: 'Die MRT basiert auf der Kernspinresonanz von Wasserstoffprotonen und erzeugt unterschiedliche Signale je nach chemischer Umgebung und Wassergehalt des Gewebes (T₁- und T₂-Relaxationszeiten sind gewebespezifisch). Dies ergibt einen hervorragenden Weichteilkontrast. Die CT misst dagegen die Röntgenabsorption, die primär von der Elektronendichte abhängt — Weichteilgewebe haben ähnliche Elektronendichten und sind daher in der CT schwerer zu unterscheiden.'
      },
      klinischerBezug: 'In der klinischen Praxis wird die Bildgebung nach dem ALARA-Prinzip eingesetzt: MRT wird bevorzugt, wenn keine ionisierende Strahlung nötig ist (z. B. Schädel-MRT statt CT bei Kindern). CT ist jedoch bei Notfällen (Polytrauma, Schlaganfall, Lungenembolie) aufgrund der schnellen Bildakquisition unverzichtbar. Kontraindikationen der MRT sind metallische Implantate (Herzschrittmacher, Cochlea-Implantate — neuere Modelle sind teils MRT-kompatibel) und Klaustrophobie. Gadolinium-basierte Kontrastmittel in der MRT können bei schwerer Niereninsuffizienz die nephrogene systemische Fibrose (NSF) auslösen.',
      selfTest: [
        {
          question: 'Welches bildgebende Verfahren verwendet KEINE ionisierende Strahlung?',
          options: [
            'Konventionelles Röntgen',
            'Computertomographie (CT)',
            'Magnetresonanztomographie (MRT)',
            'Positronen-Emissions-Tomographie (PET)',
            'Szintigraphie'
          ],
          correctIndex: 2,
          explanation: 'Die MRT nutzt starke Magnetfelder und Hochfrequenzpulse (Radiowellen), keine ionisierende Strahlung. Röntgen und CT verwenden Röntgenstrahlen, PET verwendet radioaktive Tracer (Positronenstrahler).'
        },
        {
          question: 'Was wird bei der PET-Untersuchung mit ¹⁸F-FDG gemessen?',
          options: [
            'Die Knochendichte',
            'Die Blutflussgeschwindigkeit',
            'Der Glucosestoffwechsel der Gewebe',
            'Die Nervenleitgeschwindigkeit',
            'Die Sauerstoffsättigung im Blut'
          ],
          correctIndex: 2,
          explanation: '¹⁸F-FDG (Fluordeoxyglucose) ist ein radioaktiv markiertes Glucoseanalogon, das von Zellen mit hohem Glucosestoffwechsel vermehrt aufgenommen wird. Tumorzellen zeigen typischerweise einen erhöhten Glucosestoffwechsel (Warburg-Effekt) und erscheinen daher im PET-Bild als „heiße“ Areale.'
        },
        {
          question: 'Warum wird die Strahlentherapie in viele kleine Fraktionen aufgeteilt?',
          options: [
            'Weil die Geräte nicht genug Strahlung auf einmal erzeugen können.',
            'Weil sich gesundes Gewebe zwischen den Sitzungen besser erholen kann als Tumorgewebe.',
            'Weil Tumorzellen nur zu bestimmten Uhrzeiten strahlenempfindlich sind.',
            'Weil die Strahlung im Körper gespeichert werden muss.',
            'Weil die Halbwertszeit der verwendeten Isotope zu kurz ist.'
          ],
          correctIndex: 1,
          explanation: 'Die Fraktionierung nutzt den Unterschied in der DNA-Reparaturkapazität: Gesunde Zellen können DNA-Schäden zwischen den Fraktionen besser reparieren als Tumorzellen, deren Reparaturmechanismen häufig defekt sind. Dadurch wird die Tumorzerstörung maximiert und die Nebenwirkungen auf gesundes Gewebe minimiert.'
        }
      ]
    }
  ]
};
