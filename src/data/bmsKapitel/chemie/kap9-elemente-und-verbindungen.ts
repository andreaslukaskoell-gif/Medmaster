// @ts-nocheck
import type { Kapitel } from "../types";

export const chemKap9: Kapitel = {
  id: "chem-kap9",
  title: "Elemente und Verbindungen",
  subject: "chemie",
  icon: "🧪",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ch-9-01",
      title: "Wasser — Eigenschaften und biologische Bedeutung",
      lernziele: [
        "Die Struktur des Wassermoleküls und den Ursprung seines Dipolcharakters erläutern können",
        "Die außergewöhnlichen physikalischen Eigenschaften von Wasser mit dem H-Brücken-Netzwerk begründen",
        "Die Rolle von Wasser als Lösungsmittel, Reaktionsmedium und Temperaturpuffer im menschlichen Körper erklären",
        "Den Autoprotolyseprozess des Wassers und seine Bedeutung für den pH-Wert verstehen",
      ],
      content: `## Struktur des Wassermoleküls

Wasser (H₂O) ist das häufigste und biologisch bedeutsamste anorganische Molekül auf der Erde. Das zentrale Sauerstoffatom trägt vier Elektronenpaare: zwei bindende und zwei nichtbindende. Nach dem VSEPR-Modell komprimiert sich der Bindungswinkel von theoretisch 109,5° auf **104,5°**. Die Sauerstoff-Wasserstoff-Bindung ist stark polar (ΔEN = 1,24), woraus ein permanentes Dipolmoment von **μ = 1,85 Debye (D)** resultiert.

## Wasserstoffbrückenbindungen

Jedes Wassermolekül kann bis zu **vier H-Brücken** ausbilden: zwei als Donor (H-Atome, δ+) und zwei als Akzeptor (freie Elektronenpaare am O, δ−). Energie je H-Brücke: ~20 kJ/mol. Dieses kooperative Netzwerk erklärt:

**Hoher Siedepunkt:** 100 °C trotz MW 18 g/mol. H₂S (34 g/mol, keine H-Brücken) siedet bei −60 °C. Das Brechen des H-Brücken-Netzwerks beim Verdampfen kostet viel Energie.

**Hohe spezifische Wärmekapazität:** c = 4182 J/(kg·K). Ein Körper mit 70 kg Wasser puffert Temperaturschwankungen außerordentlich gut.

**Hohe Verdampfungsenthalpie:** ~2430 kJ/kg bei 37 °C. 1 mL verdunstender Schweiß entzieht dem Körper ~2,4 kJ — entscheidend für Thermoregulation.

**Hohe Oberflächenspannung:** γ = 72 mN/m. Ermöglicht Kapillarkräfte im Xylem (Wassertransport bis 100 m Höhe) und schützt Lungenalveolen (Surfactant senkt γ).

## Dichteanomalie — Eis schwimmt

Wasser hat seine **maximale Dichte bei 4 °C** (ρ = 1,000 kg/L). Eis (hexagonale Gitterstruktur) ist ~9 % weniger dicht (ρ = 0,917 kg/L) und schwimmt. Biologisch: Seen frieren von der Oberfläche; das 4 °C-Wasser am Boden bleibt flüssig — Organismen überleben den Winter.

## Autoprotolysé und pH-Wert

**2 H₂O ⇌ H₃O⁺ + OH⁻**

Ionenprodukt: **K_w = [H₃O⁺] · [OH⁻] = 1,0 × 10⁻¹⁴** (25 °C). Neutrales Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7,0. Bei 37 °C: K_w ≈ 2,4 × 10⁻¹⁴ → Neutralpunkt pH ≈ 6,8. Wasser ist amphoter — je nach Partner Säure oder Base.

## Hydratation und Löslichkeit

Wasser solvatisiert Ionen (Ion-Dipol-Wechselwirkung) und polare Moleküle (H-Brücken). ΔH_hyd(Na⁺) ≈ −406 kJ/mol, ΔH_hyd(Cl⁻) ≈ −363 kJ/mol. Der **hydrophobe Effekt** — entropisch getrieben — aggregiert apolare Moleküle und treibt Protein-Faltung und Membranbildung.`,
      sections: [
        {
          heading: "Dipolcharakter und H-Brücken",
          text: "Die gewinkelte Geometrie (104,5°) und die hohe Elektronegativität des Sauerstoffs erzeugen einen ausgeprägten Dipol (μ = 1,85 D). Jedes Wassermolekül bildet bis zu vier H-Brücken aus — zwei als Donor (H-Atome, δ+) und zwei als Akzeptor (freie Elektronenpaare am O, δ−). Dieses kooperative Netzwerk erklärt alle anomalen Eigenschaften des Wassers.",
          merksatz: "4 H-Brücken pro Molekül: 2 Donor (H) + 2 Akzeptor (O) — Wasser vernetzt sich wie kein anderes kleines Molekül."
        },
        {
          heading: "Anomalien — hoher Siedepunkt und Dichtemaximum",
          text: "Wasser siedet bei 100 °C (statt ~−80 °C ohne H-Brücken) und hat eine spezifische Wärmekapazität von 4182 J/(kg·K). Das Dichtemaximum liegt bei 4 °C; Eis (hexagonale Gitterstruktur) ist 9 % weniger dicht als Wasser und schwimmt. Seen frieren von oben — Leben unter dem Eis überlebt.",
          merksatz: "Wasser: Dichtemaximum 4 °C, Eis schwimmt → Seen frieren von oben → aquatisches Leben überlebt den Winter."
        },
        {
          heading: "Autoprotolysé und Amphoterie",
          text: "Wasser ionisiert schwach zu H₃O⁺ und OH⁻. K_w = 10⁻¹⁴ (25 °C) → pH-Neutralpunkt = 7. Bei 37 °C K_w ≈ 2,4 × 10⁻¹⁴ → Neutralpunkt pH ≈ 6,8. Wasser ist amphoter — Proton-Donor oder -Akzeptor je nach Reaktionspartner.",
          merksatz: "K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ bei 25 °C → pH_neutral = 7; bei 37 °C pH_neutral ≈ 6,8."
        },
        {
          heading: "Hydrophiler vs. hydrophober Effekt",
          text: "Ionen und polare Moleküle werden hydratisiert und damit löslich (Ion-Dipol- / Dipol-Dipol-WW). Apolare Stoffe erzwingen geordnete Wasserkäfige (Clathrate) — entropisch ungünstig. Der hydrophobe Effekt treibt Aggregation apolarer Gruppen (ΔS_gesamt > 0) und ist Grundlage von Proteinstruktur und Lipid-Doppelschichten.",
          merksatz: "Hydrophober Effekt = entropischer Antrieb — apolare Gruppen aggregieren, um geordnete Wasserkäfige zu minimieren."
        }
      ],
      merksätze: [
        "Bindungswinkel H₂O: 104,5° (komprimiert durch freie Elektronenpaare des O)",
        "Dipolmoment Wasser: μ = 1,85 D — einer der höchsten Werte kleiner Moleküle",
        "Wasser bildet 4 H-Brücken: 2× Donor (H-Atome) + 2× Akzeptor (freie Paare am O)",
        "Siedepunkt 100 °C trotz MW 18 g/mol — ohne H-Brücken wäre er ~−80 °C",
        "Spezifische Wärmekapazität: 4182 J/(kg·K) — höchste aller gängigen Flüssigkeiten",
        "Dichtemaximum bei 4 °C → Eis (0,917 kg/L) schwimmt auf Wasser (1,000 kg/L)",
        "Verdampfungsenthalpie: ~2430 kJ/kg bei 37 °C — Schweiß kühlt effizient",
        "K_w = 10⁻¹⁴ bei 25 °C → pH-Neutralpunkt = 7; bei 37 °C pH-Neutralpunkt ≈ 6,8",
        "Wasser ist amphoter: wirkt je nach Partner als Säure oder Base",
        "Hydrophober Effekt: thermodynamisch getrieben durch Entropiegewinn bei Aggregation apolarer Gruppen"
      ],
      altfrage: {
        question: "Erläutern Sie die außergewöhnlichen physikalischen Eigenschaften des Wassers und begründen Sie diese auf molekularer Ebene. Gehen Sie auf Siedepunkt, Wärmekapazität, Dichteanomalie und Oberflächenspannung sowie deren biologische Bedeutung ein.",
        answer: `Alle außergewöhnlichen Eigenschaften des Wassers lassen sich auf seinen Dipolcharakter und das ausgedehnte H-Brücken-Netzwerk zurückführen. Der gewinkelte Bindungswinkel von 104,5° und ΔEN = 1,24 erzeugen ein Dipolmoment von 1,85 D. Jedes Molekül bildet bis zu vier H-Brücken (~20 kJ/mol): zwei als Donor und zwei als Akzeptor.

Der hohe Siedepunkt von 100 °C (H₂S siedet bei −60 °C!) erfordert das Aufbrechen des H-Brücken-Netzwerks beim Verdampfen — Verdampfungsenthalpie ~2430 kJ/kg bei 37 °C ermöglicht effiziente Kühlung durch Schweiß. Die hohe Wärmekapazität (4182 J/kg·K) stabilisiert die Körpertemperatur bei Wärmeproduktion.

Die Dichteanomalie (Maximum bei 4 °C) lässt Eis schwimmen (9 % weniger dicht) — Seen frieren von der Oberfläche, das 4 °C-Wasser am Boden bleibt flüssig, aquatische Organismen überleben den Winter. Die hohe Oberflächenspannung (72 mN/m) ermöglicht Kapillarkräfte im Pflanzenstamm (100 m Höhe) und schützt Lungenalveolen — Surfactant (DPPC) senkt γ, um den Alveolarkollaps beim Ausatmen zu verhindern.`
      },
      klinischerBezug: "Der Wassergehalt des menschlichen Körpers (60–70 % des Körpergewichts) ist Medium für Elektrolyttransport, pH-Regulation und Temperaturhomöostase. Dehydratation um 2 % des Körpergewichts reduziert kognitive Leistung messbar; Hyponatriämie (Überwässerung ohne Elektrolyte) führt zu Hirnödem. In der Pharmazie bestimmt der Hydratationszustand die Bioverfügbarkeit wasserlöslicher Arzneimittel und die renale Clearance.",
      selfTest: [
        {
          question: "Warum hat Wasser trotz seines geringen Molekulargewichts (18 g/mol) einen Siedepunkt von 100 °C?",
          options: [
            "Wegen der starken kovalenten O-H-Bindungen, die beim Sieden gebrochen werden",
            "Wegen des ausgedehnten Wasserstoffbrücken-Netzwerks, das beim Verdampfen aufgebrochen werden muss",
            "Wegen der Van-der-Waals-Wechselwirkungen zwischen den kleinen H₂O-Molekülen",
            "Wegen des hohen Dipolmoments, das eine starke ionische Bindung bewirkt",
            "Wegen der Dichteanomalie, die den Phasenübergang erschwert"
          ],
          correctIndex: 1,
          explanation: "Der hohe Siedepunkt ist ausschließlich auf das extensive Wasserstoffbrücken-Netzwerk zurückzuführen. Jedes H₂O-Molekül bildet bis zu vier H-Brücken (~20 kJ/mol). Beim Verdampfen müssen diese intermolekularen Bindungen gebrochen werden — nicht die kovalenten O-H-Bindungen. H₂S (34 g/mol, keine H-Brücken) siedet bei −60 °C, also 160 °C tiefer als Wasser, obwohl es schwerer ist. Van-der-Waals-Kräfte allein würden einen Siedepunkt weit unter −80 °C ergeben. Beim Verdampfen ändert sich die Aggregation, nicht die chemische Bindung.",
          hints: [
            "Vergleiche Wasser mit H₂S — gleiche Gruppe, aber sehr unterschiedliche Siedepunkte. Was macht den Unterschied?",
            "Beim Verdampfen ändern Moleküle ihren Aggregatzustand — welche Bindungen werden dabei gebrochen: kovalente oder intermolekulare?"
          ],
          difficulty: 1,
          tags: []
        },
        {
          question: "Bei welcher Temperatur hat Wasser seine maximale Dichte, und warum ist dies biologisch bedeutsam?",
          options: [
            "Bei 0 °C — weil Wasser beim Gefrieren am dichtesten wird",
            "Bei 4 °C — weil Seen dadurch von oben gefrieren und das Leben unter dem Eis erhalten bleibt",
            "Bei 20 °C — bei Raumtemperatur ist Wasser am stabilsten und daher am dichtesten",
            "Bei 37 °C — die Körpertemperatur optimiert die Wasserdichte für physiologische Prozesse",
            "Bei 100 °C — kurz vor dem Sieden sind alle Moleküle maximal komprimiert"
          ],
          correctIndex: 1,
          explanation: "Wasser hat sein Dichtemaximum bei exakt 4 °C (ρ = 1,000 kg/L). Unter 4 °C nimmt die Dichte wieder ab, weil die Moleküle beginnen, die geordnete hexagonale Eisstruktur zu bilden — diese beansprucht mehr Raum. Eis (0,917 kg/L) ist ~9 % weniger dicht und schwimmt. Biologisch lebensrettend: Seen kühlen von der Oberfläche, das 4 °C-Wasser sinkt auf den Boden. Das Eis isoliert das darunter liegende flüssige Wasser. Fische, Algen und andere Organismen überleben den Winter im 4 °C-Wasser am Seegrund.",
          hints: [
            "Eis schwimmt auf Wasser — was sagt das über die Dichte von Eis im Vergleich zu flüssigem Wasser?",
            "Denke an einen See im Winter: Von wo friert er zuerst? Oben oder unten? Warum ist das für Fische wichtig?"
          ],
          difficulty: 1,
          tags: []
        },
        {
          question: "K_w = 1,0 × 10⁻¹⁴ bei 25 °C. Welche Aussage trifft für [OH⁻] = 10⁻³ mol/L zu?",
          options: [
            "[H₃O⁺] = 10⁻³ mol/L; die Lösung ist neutral",
            "[H₃O⁺] = 10⁻¹¹ mol/L; die Lösung ist basisch mit pH = 11",
            "[H₃O⁺] = 10⁻¹¹ mol/L; die Lösung ist sauer mit pH = 3",
            "[H₃O⁺] = 10⁻⁷ mol/L; das Ionenprodukt ist durch OH⁻-Ionen unverändert",
            "K_w ändert sich, und [H₃O⁺] ist nicht berechenbar"
          ],
          correctIndex: 1,
          explanation: "K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ ist bei konstanter Temperatur invariant. [H₃O⁺] = K_w / [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L → pH = 11. Eine hohe OH⁻-Konzentration (10⁻³ > 10⁻⁷) signalisiert eine basische Lösung. K_w bleibt konstant — es verändert sich nicht durch den Zusatz von Basen, solange die Temperatur konstant bleibt. pH 11 entspricht z. B. einer Natriumcarbonat-Lösung oder einem Haarentferner.",
          hints: [
            "K_w ist bei gleicher Temperatur immer 10⁻¹⁴ — berechne [H₃O⁺] = K_w / [OH⁻].",
            "pH = −log[H₃O⁺] — ist der pH größer oder kleiner als 7 wenn [H₃O⁺] sehr klein ist?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was versteht man unter dem hydrophoben Effekt und welche Struktur wird davon angetrieben?",
          options: [
            "Die Abstoßung hydrophober Moleküle durch Wasser aufgrund elektrostatischer Wechselwirkungen; er erklärt die Löslichkeit von Fetten",
            "Die entropisch getriebene Aggregation apolarer Moleküle in Wasser, die geordnete Wasserkäfige minimiert; er treibt Lipid-Doppelschichten und Proteinstrukturen",
            "Die hohe Oberflächenspannung des Wassers, die verhindert, dass apolare Moleküle die Oberfläche durchdringen",
            "Die Anziehungskraft zwischen Wasser und apolaren Gruppen durch Van-der-Waals-Kräfte; er erklärt Emulsionen",
            "Der Druck, der durch das H-Brücken-Netzwerk auf gelöste Moleküle ausgeübt wird"
          ],
          correctIndex: 1,
          explanation: "Der hydrophobe Effekt ist primär entropisch getrieben. Apolare Moleküle in Wasser erzwingen eine geordnete Käfigstruktur (Clathrate) von Wassermolekülen — ΔS_Wasser < 0. Das System minimiert diesen Entropieverlust, indem apolare Gruppen aggregieren und die Gesamtoberfläche minimieren — die geordneten Wassermoleküle werden freigesetzt (ΔS_gesamt > 0 → spontan). Biologisch fundamental: (1) Bildung von Phospholipid-Doppelschichten (hydrophile Köpfe außen, hydrophobe Schwänze innen), (2) Protein-Faltung (hydrophober Kern), (3) Mizellbildung von Detergenzien.",
          hints: [
            "Was passiert mit Wassermolekülen, wenn ein apolares Molekül ins Wasser eingebracht wird? Werden sie geordneter oder ungeordneter?",
            "Spontane Prozesse haben ΔG < 0. Wenn ΔH ≈ 0, welcher Term (ΔS) muss positiv sein, und wo kommt diese Entropie her?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Warum ist die hohe Verdampfungsenthalpie des Wassers für die menschliche Thermoregulation entscheidend?",
          options: [
            "Weil Wasser als Kühlflüssigkeit im Blut zirkuliert und Wärme in alle Körperbereiche überträgt",
            "Weil die Verdampfung von 1 g Schweiß bei 37 °C etwa 2,43 kJ Wärme aus dem Körper abführt und so effizient kühlt",
            "Weil Wasser eine hohe Wärmekapazität hat und Temperaturschwankungen dämpft, ohne zu verdampfen",
            "Weil die hohe Verdampfungstemperatur von 100 °C verhindert, dass Körperflüssigkeiten bei Fieber sieden",
            "Weil Schweiß Salze enthält, die die Wärmekapazität erhöhen und die Kühlung verbessern"
          ],
          correctIndex: 1,
          explanation: "Die Verdampfungsenthalpie beträgt bei 37 °C ca. 2430 kJ/kg = 2,43 kJ/g. Beim Verdampfen von Schweiß an der Hautoberfläche wird diese Energie direkt dem Körper entzogen — als latente Wärme, ohne die Temperatur des Schweißtropfens zu erhöhen. Ein Mensch kann bei Hitze mehrere Liter Schweiß pro Stunde produzieren und so trotz intensiver Muskelarbeit (bis 800 W Wärmeproduktion) die Kerntemperatur stabil halten. Option A beschreibt Wärmetransport, nicht Kühlung durch Verdampfung. Option C (Wärmekapazität) erklärt Pufferung, nicht die aktive Kühlung durch Schweißverdunstung.",
          hints: [
            "Beim Verdampfen braucht Wasser Energie — woher kommt diese Energie, wenn Schweiß auf der Haut verdunstet?",
            "Latente Wärme = Wärme ohne Temperaturänderung. Wie viel Energie wird aus dem Körper entzogen, wenn 1 g Schweiß verdunstet?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welcher pH gilt als neutral bei 37 °C, wenn K_w = 2,4 × 10⁻¹⁴?",
          options: [
            "pH 7,0 — Neutralität ist immer bei pH 7 definiert",
            "pH 6,8 — weil bei 37 °C [H₃O⁺] = [OH⁻] = Wurzel(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L",
            "pH 7,4 — der physiologische Blut-pH gilt als Neutralpunkt",
            "pH 6,0 — bei Körpertemperatur überwiegen H₃O⁺-Ionen stärker",
            "pH 8,0 — weil wärmeres Wasser basischer wird"
          ],
          correctIndex: 1,
          explanation: "Neutral bedeutet [H₃O⁺] = [OH⁻]. Bei 37 °C: K_w = 2,4 × 10⁻¹⁴. [H₃O⁺] = Wurzel(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L. pH = −log(1,55 × 10⁻⁷) ≈ 6,81. Der Neutralpunkt liegt bei 37 °C bei pH ≈ 6,8, nicht 7,0. Der physiologische Blut-pH von 7,4 ist bei 37 °C daher leicht basisch. Neutral ist keine feste pH-Zahl — es ist der temperaturabhängige Punkt, an dem [H₃O⁺] = [OH⁻]. K_w steigt mit Temperatur (Autoprotolysé ist endotherm), weshalb der Neutralpunkt mit steigender T sinkt.",
          hints: [
            "Neutral bedeutet [H₃O⁺] = [OH⁻]. Wenn K_w = [H₃O⁺]·[OH⁻] und beide gleich sind: [H₃O⁺] = Wurzel(K_w).",
            "K_w bei 37 °C ist größer als bei 25 °C — sinkt oder steigt der pH-Neutralpunkt bei höherer Temperatur?"
          ],
          difficulty: 3,
          tags: []
        },
        {
          question: "Was ist der Hauptgrund für die leichte Löslichkeit von NaCl in Wasser?",
          options: [
            "NaCl bildet kovalente Bindungen mit Wasser und wird chemisch umgewandelt",
            "Ion-Dipol-Wechselwirkungen zwischen Na⁺/Cl⁻ und polaren H₂O-Molekülen überwiegen die Ionengitter-Energie",
            "Das Wasser hat eine hohe Oberflächenspannung, die NaCl-Kristalle physikalisch auflöst",
            "NaCl ist apolar und profitiert daher vom hydrophoben Effekt in wässriger Lösung",
            "H₂O-Moleküle dringen durch Osmose in das Kristallgitter ein und sprengen es"
          ],
          correctIndex: 1,
          explanation: "Die Löslichkeit von NaCl basiert auf Ion-Dipol-Wechselwirkungen: Der δ−-Sauerstoff orientiert sich zu Na⁺, die δ+-Wasserstoffe zu Cl⁻. Hydratationsenthalpien: ΔH_hyd(Na⁺) ≈ −406 kJ/mol, ΔH_hyd(Cl⁻) ≈ −363 kJ/mol, zusammen ~−769 kJ/mol. Dies überwindet die Gitterenergie des NaCl-Kristalls (~−787 kJ/mol). Die leicht endotherme Lösungsenthalpie (+4 kJ/mol) wird durch den Entropiegewinn der freien Ionen im Lösungsmittel kompensiert. NaCl ist ionic/polar — kein hydrophober Effekt, der gilt für apolare Stoffe.",
          hints: [
            "Wasser ist ein Dipol — welche Seite des Dipols wird von Na⁺ angezogen, welche von Cl⁻?",
            "Um ein Salz zu lösen, muss das Lösungsmittel die Kräfte im Kristallgitter überwinden — was liefert Wasser dafür?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was erklärt Kapillarkräfte, die Pflanzenwasser bis 100 m Höhe transportieren?",
          options: [
            "Die hohe Dichte des Wassers, die osmotischen Druck im Xylem erzeugt",
            "Hohe Oberflächenspannung und Kohäsion durch H-Brücken, kombiniert mit Adhäsion an Zellwandfasern",
            "Die niedrige Viskosität des Wassers, die Fluss in engen Kanälen erleichtert",
            "Der hohe Siedepunkt, der Verdampfung im Xylem verhindert",
            "Die Dichteanomalie, die kaltes Wasser in den Wurzeln aufsteigen lässt"
          ],
          correctIndex: 1,
          explanation: "Der Wassertransport im Xylem basiert auf dem Kohäsions-Tensions-Modell: (1) Transpiration an den Blättern erzeugt Unterdruck (Tension), (2) Kohäsion — H-Brücken zwischen Wassermolekülen — hält die Wassersäule zusammen (sie reißt nicht), (3) Adhäsion — Wechselwirkungen zwischen Wasser und polaren Cellulose-/Ligninfasern — ermöglicht das Kleben des Wassers an den Xylemwänden. Die hohe Oberflächenspannung (72 mN/m) ist Ausdruck dieser starken Kohäsionskräfte. In Xylemgefäßen mit 10–500 μm Durchmesser können diese Kräfte Säulen von mehr als 100 m aufrechterhalten.",
          hints: [
            "Was hält die lange Wassersäule im Pflanzen-Xylem zusammen? Kohäsion (Wasser-Wasser) oder Adhäsion (Wasser-Wand)?",
            "Oberflächenspannung = Ausdruck starker intermolekularer Anziehung — welche Kräfte sind bei Wasser dafür verantwortlich?"
          ],
          difficulty: 2,
          tags: []
        }
      ]
    },
    {
      id: "ch-9-02",
      title: "Kohlenstoff und seine Verbindungen",
      lernziele: [
        "Die vier Bindungspartner des Kohlenstoffs und die Strukturvielfalt durch Katenation erklären können",
        "Allotrope des Kohlenstoffs (Diamant, Graphit, Fulleren, Graphen) und ihre Eigenschaften ableiten",
        "CO₂ und CO als medizinisch relevante anorganische C-Verbindungen charakterisieren",
        "Das Bicarbonat-Puffersystem und Henderson-Hasselbalch berechnen und interpretieren können",
        "Acetyl-CoA als zentrale metabolische Schnittstelle benennen"
      ],
      content: `## Kohlenstoff — das Element des Lebens

Kohlenstoff (C, Atomnr. 6, [He] 2s² 2p²) kann mit seinen **vier Valenzelektronen** vier kovalente Bindungen eingehen. Zusammen mit der Fähigkeit zur **Katenation** (Verkettung von C-Atomen) entsteht eine nahezu unbegrenzte strukturelle Vielfalt: sp³ (Tetraeder, 109,5°), sp² (planar, 120°) und sp (linear, 180°) Hybridisierungen.

## Allotrope des Kohlenstoffs

**Diamant (sp³):** Dreidimensionales Tetraedernetzwerk — härtestes natürliches Material (Mohs 10), elektrischer Isolator (alle Elektronen in σ-Bindungen), transparent. Bindungslänge C-C: 154 pm.

**Graphit (sp²):** Planare hexagonale Schichten mit delokalisiertem π-System — guter elektrischer Leiter (parallel zur Schicht), weich (Van-der-Waals zwischen Schichten, 3,35 Å Abstand), schwarz-glänzend. Verwendung: Elektroden, Schmiermittel.

**Graphen:** Einzelne Graphitschicht — außergewöhnliche elektrische Leitfähigkeit, 200× zugfester als Stahl, transparent. Nobelpreis Physik 2010 (Geim, Novoselov).

**Fullerene (C₆₀):** Sphärische Käfige aus Fünf- und Sechsringen. Potenzielle Nanomedizin-Anwendungen (Wirkstofftransport, freie-Radikal-Fänger).

## CO₂ — Kohlenstoffdioxid

CO₂ ist linear (sp, 180°) und apolar (die beiden C=O-Dipole kompensieren sich). Es entsteht als Endprodukt der aeroben Zellatmung und reagiert im Blut mit Wasser — katalysiert durch **Carboanhydrase** (kcat ~10⁶ s⁻¹):

**CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺**

Das Bicarbonat-Puffersystem hält den Blut-pH bei 7,4:
pH = pKa + log([HCO₃⁻] / [H₂CO₃]) = 6,1 + log(24/1,2) = 6,1 + 1,3 = **7,4**

Bei Hypoventilation steigt CO₂ → pH sinkt (respiratorische Azidose); bei Hyperventilation sinkt CO₂ → pH steigt (respiratorische Alkalose).

## CO — Kohlenstoffmonoxid

CO ist farb-, geruch- und geschmacklos — **extrem toxisch**. Es bindet an Hämoglobin mit **250× höherer Affinität** als O₂. HbCO kann kein O₂ transportieren. Zusätzlich verschiebt CO die O₂-Bindungskurve nach links (erhöhte Affinität verbleibender Hb-Einheiten) → O₂-Abgabe ans Gewebe unmöglich → histotoxische Hypoxie. CO hemmt auch Cytochrom-c-Oxidase (Komplex IV). **Behandlung:** 100 % O₂ (hyperbar bei schwerer Vergiftung).

## Carbonate und Metabolismus

CaCO₃ (Calciumcarbonat) bildet Knochen (zusammen mit Hydroxylapatit), Marmor und Muschelschalen. Metabolisch zentral: **Pyruvat** (Endprodukt Glykolyse → PDH → Acetyl-CoA), **Acetyl-CoA** (Schnittstelle: Glykolyse, β-Oxidation, Zitratzyklus), **Citrat** (Inhibitor der Phosphofructokinase), **Malonyl-CoA** (Fettsäuresynthese, inhibiert CPT-1).`,
      sections: [
        {
          heading: "Allotrope des Kohlenstoffs",
          text: "Im Diamant sind alle C-Atome sp³-hybridisiert — 3D-Netzwerk, härtestes Mineral, Isolator. Im Graphit sind C-Atome sp²-hybridisiert — planare Schichten mit delokalisiertem π-System, elektrisch leitfähig, weich. Graphen (Einzelschicht) und Fullerene (Käfige) ergänzen die Familie. Die Hybridisierung bestimmt alle Eigenschaften vollständig.",
          merksatz: "Diamant = sp³ = hart + Isolator; Graphit = sp² = weich + Leiter — gleiche Atome, völlig verschiedene Eigenschaften durch Hybridisierung."
        },
        {
          heading: "CO₂ und das Bicarbonat-Puffersystem",
          text: "CO₂ aus dem Zitratzyklus wird in Erythrozyten durch Carboanhydrase zu HCO₃⁻ umgewandelt und via Chloride-Shift ins Plasma transportiert (~70 % des CO₂). Henderson-Hasselbalch: pH = 6,1 + log(24/1,2) = 7,4. Die Lunge reguliert CO₂ (schnell), die Niere reguliert HCO₃⁻ (langsam). Carboanhydrase-Hemmer (Acetazolamid) erhöhen HCO₃⁻-Ausscheidung: Glaukom-Therapie, Höhenkrankheit.",
          merksatz: "pH_Blut = 6,1 + log(HCO₃⁻/H₂CO₃) = 6,1 + log(24/1,2) = 7,4 — Henderson-Hasselbalch für das Bicarbonat-Puffersystem."
        },
        {
          heading: "CO — Toxizität und Mechanismus",
          text: "CO bindet 250× stärker an Hb als O₂, bildet HbCO → kein O₂-Transport. Linksverschobene O₂-Bindungskurve → auch das restliche Hb gibt weniger O₂ ab. CO hemmt zudem Komplex IV der Atmungskette. Farb- und geruchlos → heimtückisch. Antidot: 100 % O₂ (Verdrängung des CO durch Massenwirkungsgesetz); hyperbar bei schwerer Vergiftung.",
          merksatz: "CO-Affinität zu Hb: 250× > O₂ → HbCO = funktionell nutzloses Hämoglobin; Antidot: 100 % O₂ (oder hyperbar)."
        }
      ],
      merksätze: [
        "Kohlenstoff: 4 Valenzelektronen → tetravalent → enorme Strukturvielfalt durch Katenation",
        "sp³ = Tetraeder (109,5°); sp² = planar (120°); sp = linear (180°)",
        "Diamant (sp³): härtestes Mineral (Mohs 10), Isolator; Graphit (sp²): weich, Leiter",
        "CO₂ + H₂O ⇌ HCO₃⁻ + H⁺ → Bicarbonat-Puffersystem des Blutes (pKa 6,1)",
        "CO bindet 250× stärker an Hb als O₂ → HbCO → Gewebeerstickung",
        "Carboanhydrase: schnellstes Enzym, kcat ~10⁶ s⁻¹ → CO₂-Hydratation in Erythrozyten",
        "Bicarbonat-Puffer: pH = 6,1 + log(24/1,2) = 7,4 — physiologischer Blut-pH",
        "CaCO₃ bildet Knochen (mit Hydroxylapatit), Marmor und Muschelschalen",
        "Fullerene (C₆₀): sphärische Käfige — potenzielle Drug-Delivery-Systeme in der Nanomedizin",
        "Acetyl-CoA: zentrale metabolische Schnittstelle — Glykolyse, β-Oxidation und Zitratzyklus"
      ],
      altfrage: {
        question: "Erläutern Sie die Rolle von CO₂ im menschlichen Blut: Transport, chemische Gleichgewichte und Bedeutung für die pH-Regulation.",
        answer: `CO₂ entsteht als Hauptprodukt der aeroben Zellatmung (oxidative Decarboxylierungen im Zitratzyklus). Im Gewebe diffundiert CO₂ in Erythrozyten, wo Carboanhydrase (kcat ~10⁶ s⁻¹) es blitzschnell zu HCO₃⁻ umwandelt: CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺. Das HCO₃⁻ wird via Chloride-Shift (Band-3-Protein, Anionenaustauscher) ins Plasma transportiert. Transport: ~70 % als HCO₃⁻, ~23 % als Carbaminohämoglobin, ~7 % physikalisch gelöst.

In der Lunge kehrt der Prozess um: niedriger alveolarer pCO₂ lässt CO₂ aus dem Blut in die Alveole diffundieren; Carboanhydrase katalysiert HCO₃⁻ + H⁺ → CO₂ + H₂O, und CO₂ wird ausgeatmet.

Das Bicarbonat-Puffersystem (pKa = 6,1) hält arteriellen Blut-pH bei 7,40: pH = 6,1 + log(24 mmol/L / 1,2 mmol/L) = 7,4. Bei COPD (Hypoventilation) steigt pCO₂ → respiratorische Azidose; renale Kompensation durch erhöhte HCO₃⁻-Rückresorption (Tage). Bei diabetischer Ketoazidose sinkt HCO₃⁻ → metabolische Azidose; Kompensation durch Hyperventilation (Kussmaul-Atmung) → CO₂ ↓ → pH ↑.`
      },
      klinischerBezug: "CO-Vergiftung durch defekte Heizungen ist häufiger Vergiftungsnotfall; charakteristisches Kirschrot der Haut (HbCO) ist ein Spätzeichen — Diagnose durch Co-Oximetrie im arteriellen Blutgastest. Das Bicarbonat-Puffersystem ist Grundlage der Blutgasanalyse (pH, pCO₂, HCO₃⁻) zur Diagnose von Azidosen/Alkalosen bei kritisch kranken Patienten. Carboanhydrase-Hemmer wie Acetazolamid (Diamox) erhöhen HCO₃⁻-Ausscheidung — Einsatz bei Glaukom, Höhenkrankheit und als mildes Diuretikum.",
      selfTest: [
        {
          question: "Warum kann Diamant Strom nicht leiten, obwohl Graphit — aus demselben Element — ein guter Leiter ist?",
          options: [
            "Diamant ist kristallin und Graphit ist amorph; amorphe Materialien leiten besser",
            "Im Diamant sind alle vier Valenzelektronen in sp³-σ-Bindungen lokalisiert; im Graphit sind die p-Elektronen delokalisiert und mobil",
            "Diamant enthält mehr C-Atome pro Volumen und ist daher dichter mit gebundenen Elektronen",
            "Graphit hat metallische Verunreinigungen, die die Leitfähigkeit erklären",
            "Diamant reflektiert Licht total und lässt daher keinen Elektronenfluss zu"
          ],
          correctIndex: 1,
          explanation: "Im Diamant (sp³) sind alle vier Valenzelektronen in gerichteten σ-Bindungen zu vier Nachbarn gebunden — keine freien Elektronen → Isolator. Im Graphit (sp²) bilden drei Elektronen σ-Bindungen in der Ebene; das vierte p-Elektron (senkrecht zur Schicht) delokalisiert über das π-System der gesamten Schicht. Diese delokalisierten π-Elektronen sind frei beweglich → elektrische Leitfähigkeit parallel zur Schichtebene (anisotrop: senkrecht zur Schicht ist Graphit schlechter Leiter, nur Van-der-Waals zwischen Schichten). Hybridisierung ist der Schlüssel: sp³ vs. sp².",
          hints: [
            "Elektrische Leitfähigkeit erfordert mobile Elektronen. Sind alle Elektronen im Diamant in festen Bindungen gebunden?",
            "Im Graphit ist das 4. Valenzelektron nicht in einer σ-Bindung — wo ist es, und kann es sich bewegen?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "COPD-Patient hat pCO₂ = 60 mmHg (normal 40 mmHg). Welche Kompensation erwartet man?",
          options: [
            "Hyperventilation, um CO₂ zu eliminieren und den pH zu senken",
            "Renale Rückresorption von HCO₃⁻, um den pH zu heben und die Azidose zu kompensieren",
            "Erhöhte CO₂-Produktion im Zitratzyklus, um den pCO₂ weiter zu senken",
            "Erhöhte Cl⁻-Ausscheidung durch die Nieren, um den Chloride-Shift rückgängig zu machen",
            "Verminderte Erythropoiese, um den Hb-gebundenen CO₂-Anteil zu reduzieren"
          ],
          correctIndex: 1,
          explanation: "Erhöhter pCO₂ durch unzureichende Ventilation (COPD) führt zu respiratorischer Azidose: CO₂ + H₂O → HCO₃⁻ + H⁺ → pH sinkt. Renale Kompensation (langsam, Tage): (1) Tubulusepithelzellen sezernieren mehr H⁺ ins Lumen, (2) verstärkte HCO₃⁻-Rückresorption, (3) erhöhte NH₄⁺-Produktion als H⁺-Puffer. Dies erhöht [HCO₃⁻] im Blut → pH hebt sich Richtung 7,4. Klinisch: erhöhtes HCO₃⁻ (>26 mmol/L) und pH nahe 7,4 trotz hohem pCO₂. Hyperventilation wäre Kompensation bei metabolischer Azidose — bei COPD strukturell nicht möglich.",
          hints: [
            "Hoher pCO₂ → mehr H⁺ → pH sinkt (Azidose). Welches Organ kompensiert über HCO₃⁻-Rückresorption?",
            "Bei respiratorischer Azidose ist die Lunge beeinträchtigt — welches andere Organ übernimmt die Kompensation?"
          ],
          difficulty: 3,
          tags: []
        },
        {
          question: "Warum ist CO in kleinen Mengen lebensgefährlich, obwohl es kein ätzend-korrosives Gas ist?",
          options: [
            "CO löst sich in Wasser zu Kohlensäure und senkt den Blut-pH drastisch",
            "CO bindet ~250× stärker als O₂ an Hämoglobin und verschiebt die O₂-Bindungskurve nach links — Gewebeerstickung trotz ausreichend Hämoglobin",
            "CO hemmt die Carboanhydrase irreversibel und verhindert CO₂-Transport",
            "CO ist radioaktiv und schädigt direkt die DNA in Knochenmarkzellen",
            "CO zerstört Surfactant in den Alveolen und verhindert den Gasaustausch"
          ],
          correctIndex: 1,
          explanation: "CO bindet an Hämoglobin mit 250-fach höherer Affinität als O₂ → HbCO. HbCO kann kein O₂ transportieren (funktionelle Anämie). Zusätzlich bewirkt CO den umgekehrten kooperativen Effekt: verbleibende Hb-Untereinheiten binden O₂ mit höherer Affinität (linksverschobene O₂-Bindungskurve) → O₂-Abgabe ans Gewebe fast unmöglich → histotoxische Hypoxie. CO hemmt auch direkt Cytochrom-c-Oxidase (Komplex IV). Bei chronischer Exposition: Kopfschmerz, Schwindel — oft mit Grippe verwechselt. Antidot: 100 % O₂ oder Hyperbar-O₂, um CO vom Hb zu verdrängen.",
          hints: [
            "Was passiert, wenn HbCO gebildet wird? Kann dieses Hämoglobin noch Sauerstoff binden?",
            "Hämoglobin hat 4 Untereinheiten (kooperativ). Was passiert mit den restlichen, wenn CO an eine bindet?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Berechnen Sie den pH für [HCO₃⁻] = 24 mmol/L, [H₂CO₃] = 1,2 mmol/L (pKa = 6,1).",
          options: [
            "pH = 5,1",
            "pH = 6,1",
            "pH = 7,4",
            "pH = 7,0",
            "pH = 8,0"
          ],
          correctIndex: 2,
          explanation: "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,301 ≈ 7,4. Das physiologische Verhältnis [HCO₃⁻]/[H₂CO₃] = 20:1. Azidose: pH < 7,35 (Verhältnis sinkt unter ~15:1); Alkalose: pH > 7,45 (Verhältnis über ~25:1). Das Puffersystem ist effektiv als offenes System — Lunge reguliert CO₂ schnell, Niere reguliert HCO₃⁻ langsam — trotz eines pKa von 6,1, der weit vom Blut-pH entfernt ist.",
          hints: [
            "Henderson-Hasselbalch: pH = pKa + log([Base]/[Säure]). Wer ist Base (HCO₃⁻), wer ist Säure (H₂CO₃)?",
            "log(20) = log(2 × 10) = log 2 + log 10 = 0,301 + 1 = 1,301. Wie lautet 6,1 + 1,301?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Aus welchen ZWEI katabolen Wegen stammt Acetyl-CoA hauptsächlich?",
          options: [
            "Harnstoffzyklus und Gluconeogenese",
            "Glykolyse (über Pyruvat-Dehydrogenase) und β-Oxidation von Fettsäuren",
            "Pentose-Phosphat-Weg und Citratzyklus",
            "Transamination von Aminosäuren und Nukleotidabbau",
            "Photosynthese und anaerobe Gärung"
          ],
          correctIndex: 1,
          explanation: "Acetyl-CoA ist das Drehkreuz des Energiemetabolismus. Zwei Hauptquellen: (1) Glykolyse → Pyruvat → Pyruvat-Dehydrogenase-Komplex (PDH, irreversibel): Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH. Irreversibel: kein Rückweg Acetyl-CoA → Pyruvat → Glukose. (2) β-Oxidation von Fettsäuren: Schrittweiser Abbau im Mitochondrium zu Acetyl-CoA-Einheiten. Acetyl-CoA kondensiert dann mit Oxalacetat zu Citrat (Eintritt Zitratzyklus), oder dient als Baustein für Ketonkörper (Hungermetabolismus) und Cholesterinsynthese.",
          hints: [
            "Was ist das Endprodukt der Glykolyse, und welches Enzym verbindet es mit dem Zitratzyklus?",
            "Fettsäuren werden im Mitochondrium zu 2-Kohlenstoff-Einheiten abgebaut — welcher Weg ist das?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Hybridisierung hat CO₂ und welche geometrische Konsequenz ergibt sich?",
          options: [
            "sp³-Hybridisierung → gewinkelte Geometrie wie Wasser, polar",
            "sp²-Hybridisierung → trigonal-planare Geometrie, leicht polar",
            "sp-Hybridisierung → lineare Geometrie (O=C=O, 180°), apolares Molekül",
            "sp³d-Hybridisierung → trigonal-bipyramidale Geometrie",
            "Keine Hybridisierung → ionisches Molekül, wasserlöslich als CO₂²⁻"
          ],
          correctIndex: 2,
          explanation: "Im CO₂ ist C sp-hybridisiert: Zwei sp-Orbitale bilden σ-Bindungen zu den O-Atomen (180°, linear). Zwei verbleibende p-Orbitale bilden je eine π-Bindung → zwei C=O-Doppelbindungen. Das Molekül ist perfekt linear: O=C=O. Obwohl jede C=O-Bindung polar ist, kompensieren sich die zwei entgegengesetzten gleich großen Dipole → Gesamtdipolmoment = 0 → apolares Molekül. Trotzdem ist CO₂ Treibhausgas, weil seine asymmetrische Streckschwingung und Biegeschwingung Infrarotstrahlung absorbieren.",
          hints: [
            "CO₂ hat zwei C=O-Doppelbindungen, keine freien Elektronenpaare am C. Zwei Bindungspartner → welche Hybridisierung?",
            "Wenn ein Molekül symmetrisch ist (O=C=O), heben sich Bindungsdipole auf — ist das Molekül polar oder apolar?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welches Element zeigt ebenfalls Katenation, jedoch in weit geringerem Ausmaß als Kohlenstoff?",
          options: [
            "Silizium (Si) — vier Valenzelektronen, Si-Si-Bindungen sind aber schwächer und hydrolysieren leicht",
            "Stickstoff (N) — N-N-Bindungen in Hydrazin und Diazenen sind stabil",
            "Sauerstoff (O) — Peroxide (O-O-Bindungen) ermöglichen kettenartige Strukturen",
            "Schwefel (S) — S₈-Ringe und Polysulfidketten sind häufiger als C-Ketten",
            "Chlor (Cl) — Polychlorverbindungen sind kettenartig"
          ],
          correctIndex: 0,
          explanation: "Kohlenstoff: C-C-Bindungsenergie ~347 kJ/mol (stabil, kinetisch inert gegenüber Hydrolyse) → Millionen organischer Verbindungen. Silizium (Periode 3, Gruppe 14, ebenfalls 4 Valenzelektronen): Si-Si-Bindung ~226 kJ/mol, schwächer und kinetisch anfällig gegen Hydrolyse (Si reagiert mit OH⁻ leichter als C). Silane (SiₙH₂ₙ₊₂) sind die Analoga zu Alkanen, zersetzen sich aber an Luft. Schwefel bildet bemerkenswert lange Ketten (S₈, Polysulfide), aber nicht die strukturelle Vielfalt des Kohlenstoffs. Die einzigartige Kombination aus Bindungsstärke und kinetischer Stabilität macht C zum Grundbaustein des Lebens.",
          hints: [
            "Welches Element steht direkt unter Kohlenstoff im Periodensystem mit ebenfalls vier Valenzelektronen?",
            "Warum sind C-C-Bindungen so stabil? Denke an Bindungsenergie und kinetische Inertheit gegenüber Hydrolyse."
          ],
          difficulty: 3,
          tags: []
        }
      ]
    },
    {
      id: "ch-9-03",
      title: "Stickstoff, Schwefel und Halogene",
      lernziele: [
        "Die industrielle Bedeutung des Stickstoffs (Haber-Bosch) und seine Rolle in Aminosäuren und Nukleotiden erklären",
        "Schwefelverbindungen (H₂S, SO₂, SO₃, H₂SO₄) beschreiben; Schwefel in biologischen Molekülen benennen",
        "Die Halogene F, Cl, Br, I in Bezug auf Oxidationspotenzial, biologische Rolle und medizinische Anwendungen charakterisieren",
        "Salpeter- und Schwefelsäure als Industriesäuren und ihre Reaktionen darstellen",
        "Die medizinische Bedeutung von Iod (Schilddrüse), Chlor (Desinfektion) und Fluor (Kariesprophylaxe) erläutern"
      ],
      content: `## Stickstoff (N) — das häufigste Atmosphärengas

Stickstoff macht **78 % der Erdatmosphäre** aus. Das N₂-Molekül besitzt eine Dreifachbindung (N≡N, 945 kJ/mol — eine der stärksten Bindungen überhaupt) und ist daher extrem reaktionsträge.

**Stickstoffixierung:**
- **Biologisch:** Nitrogenase (Rhizobien in Leguminosen-Wurzelknöllchen): N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2 NH₃ + H₂ + 16 ADP + 16 Pi
- **Industriell (Haber-Bosch):** N₂ + 3 H₂ ⇌ 2 NH₃; 400–500 °C, 150–300 bar, Fe/K₂O/Al₂O₃-Katalysator; ~15–25 % Gleichgewichtsausbeute (Kompromiss: hoher Druck + mittlere T). Versorgt ~50 % der Weltbevölkerung mit Stickstoffdünger.

**NO (Stickstoffmonoxid):** Endogener Signalstoff aus L-Arginin (NO-Synthase, NOS) → aktiviert lösliche Guanylatzyklase → cGMP → Vasodilatation. Pharmazeutisch: Nitrate (Glycerintrinitrat) → NO → Antiangina-Therapie. PDE5-Hemmer (Sildenafil) hemmen cGMP-Abbau → Verstärkung des NO-Effekts.

**NH₃:** Pyramidale Geometrie (sp³), toxisch als NH₄⁺ im Blut; im Harnstoffzyklus entgiftet. Leberversagen → Hyperammonämie → hepatische Enzephalopathie.

**Salpetersäure (HNO₃):** Starke Säure + starkes Oxidationsmittel. Konz. HNO₃ + Metall → NO₂ (braun); verd. HNO₃ + Metall → NO (farblos). Königswasser: 3 HCl + 1 HNO₃ → löst Au und Pt.

## Schwefel (S) — das Bio-Element

Schwefel ist ein wichtiges Bioelement in **Methionin** (Thioether, −S−) und **Cystein** (Thiol, −SH). Disulfidbrücken (Cys–S–S–Cys) stabilisieren Proteinstrukturen (Antikörper, Insulin, Keratin). Coenzym A trägt −SH als reaktives Zentrum für Acylübertragungen.

**H₂S:** Faulende-Eier-Geruch bei niedrigen Konzentrationen; ab ~100 ppm Geruchslähmung (Olfaktorius-Paralyse) — tückische Warneigenschaft! Hemmt Cytochrom-c-Oxidase (Komplex IV) analog zu HCN → histotoxische Hypoxie. Endogen auch vasodilatatorisch.

**SO₂:** Reizgas, Luftschadstoff, Konservierungsmittel (E220), Asthmaprovokator; + H₂O → H₂SO₃.

**H₂SO₄ (Kontaktverfahren):** S → SO₂ → SO₃ (V₂O₅, 400–600 °C) → Oleum (SO₃ + H₂SO₄) → + H₂O → H₂SO₄. pKa1 <<0, pKa2 ≈ 1,99. Ausgeprägt hygroskopisch und dehydratisierend (konzentriert karbonisiert Zucker, verursacht schwere Verätzungen).

## Halogene — Gruppe 17

**Oxidationskraft:** F₂ (E° +2,87 V) > Cl₂ (+1,36 V) > Br₂ (+1,07 V) > I₂ (+0,54 V) — abnehmend von oben nach unten.

**Fluor (F):** Elektronegativstes Element (EN = 3,98). F⁻ ersetzt OH⁻ in Hydroxylapatit → Fluorapatit (Ca₁₀(PO₄)₆F₂) — säurefester → **Kariesprophylaxe**. Fluorose bei Überversorgung.

**Chlor (Cl):** Gelbgrünes Gas. Cl₂ + H₂O → HCl + HClO (Hypochlorige Säure, starkes Oxidationsmittel) → **Desinfektion** (Trinkwasser, Schwimmbäder). NaOCl = Bleichmittel. Cl⁻: wichtigstes extrazelluläres Anion (~105 mmol/L), an Magensäure-Produktion beteiligt.

**Iod (I):** Sublimiert bei RT, violetter Dampf. I₂ + Stärke → blauviolett (Iod-Stärke-Nachweis). **Schilddrüse:** I⁻ wird durch Na⁺/I⁻-Symporter aufgenommen → Thyreoperoxidase (TPO) oxidiert I⁻ → I₂ (mit H₂O₂) → Iodierung von Thyreoglobulin-Tyrosinen → MIT (1 I), DIT (2 I) → Kopplung → T₃ (3 I, aktiv) und T₄ (4 I, Prohormon). Iodmangel → Struma, Kretinismus. Methimazol/PTU hemmen TPO — Thyreostatika.`,
      sections: [
        {
          heading: "Stickstoff: Haber-Bosch und NO-Signaling",
          text: "Das N₂-Molekül (N≡N, 945 kJ/mol) ist extrem stabil — biologische Fixierung durch Nitrogenase (16 ATP/N₂) und industrieller Haber-Bosch-Prozess (Fe-Kat., 400–500 °C, 150–300 bar) ermöglichen die Verfügbarkeit von fixiertem N. Endogenes NO (aus L-Arginin, NOS) aktiviert Guanylatzyklase → cGMP → Vasodilatation — Grundlage der Nitrat-Therapie bei Angina pectoris und des Wirkprinzips von PDE5-Hemmern.",
          merksatz: "N≡N: 945 kJ/mol → nahezu reaktionsträge; Fixierung durch Nitrogenase oder Haber-Bosch nötig. NO → cGMP → Vasodilatation."
        },
        {
          heading: "Schwefel in Biologie und Industrie",
          text: "Cystein (−SH) und Methionin (−S−) sind schwefelhaltige Aminosäuren. Disulfidbrücken stabilisieren Proteine. H₂S hemmt Komplex IV (analog zu HCN) und lähmt ab ~100 ppm den Geruchssinn — extrem tückisch in Güllekellern. H₂SO₄ (Kontaktverfahren: SO₂ → SO₃ mit V₂O₅ → Oleum → H₂SO₄) ist die mengenmäßig wichtigste Industriechemikalie.",
          merksatz: "Disulfidbrücken (Cys-S-S-Cys) stabilisieren Proteinstruktur (Antikörper, Insulin); −SH des Coenzym A ist reaktives Acyl-Übertragungszentrum."
        },
        {
          heading: "Halogene: Oxidationskraft und medizinische Bedeutung",
          text: "Halogene sind starke Oxidationsmittel (F₂ > Cl₂ > Br₂ > I₂). F⁻ bildet Fluorapatit → Kariesprophylaxe. Cl₂/HClO desinfiziert Trinkwasser und Wunden. I⁻ ist essenziell für T₃ und T₄; Iodmangel → Struma. Thyreostatika (Methimazol, PTU) hemmen TPO und unterdrücken die Hormonsynthese bei Hyperthyreose.",
          merksatz: "Halogene Oxidationskraft: F₂ > Cl₂ > Br₂ > I₂ (abnehmendes E° in Gruppe 17 von oben nach unten)."
        },
        {
          heading: "Salpeter- und Schwefelsäure",
          text: "HNO₃: starke Säure + starkes Oxidationsmittel. Konz. HNO₃ → NO₂ (braun), verd. HNO₃ → NO (farblos). Königswasser (3 HCl + 1 HNO₃) löst Au und Pt. H₂SO₄ (pKa1 <<0) ist hygroskopisch, dehydratisierend, stark ätzend; Kontaktverfahren: ~250 Mio. t/Jahr global produziert — Indikator für Industrieentwicklung.",
          merksatz: "Königswasser = 3 vol HCl + 1 vol HNO₃ → löst Gold und Platin durch [AuCl₄]⁻- und [PtCl₆]²⁻-Bildung."
        }
      ],
      merksätze: [
        "N≡N: Bindungsenergie 945 kJ/mol — stärkste Dreifachbindung, erklärt die Trägheit von N₂",
        "Haber-Bosch: N₂ + 3 H₂ → 2 NH₃; 400–500 °C, 150–300 bar, Fe-Katalysator",
        "NO aus L-Arginin (NOS) → Guanylatzyklase → cGMP → Vasodilatation — Basis Nitrat-Antiangina",
        "H₂S: hemmt Cytochrom-c-Oxidase (Komplex IV) — ähnlich toxisch wie HCN; Geruchslähmung ab ~100 ppm",
        "Disulfidbrücken: Cystein–S–S–Cystein stabilisieren Proteinstruktur (Antikörper, Insulin)",
        "Kontaktverfahren: SO₂ + 1/2 O₂ → SO₃ (V₂O₅) → Oleum → + H₂O → H₂SO₄",
        "Halogene: Oxidationskraft F₂ > Cl₂ > Br₂ > I₂ (abnehmendes Standardpotenzial E°)",
        "F⁻: Fluorapatit statt Hydroxylapatit → Zahnschmelz säurefester → Kariesprophylaxe",
        "I⁻: essenziell für T₃ (3 I) und T₄ (4 I) — Iodmangel → Struma (Kropf)",
        "Königswasser: 3 HCl + 1 HNO₃ → löst Au und Pt (einzige Säuremischung dafür)"
      ],
      altfrage: {
        question: "Erläutern Sie die Bedeutung von Iod für den menschlichen Körper. Gehen Sie auf Aufnahme, Biochemie der Schilddrüsenhormon-Synthese sowie Folgen von Iodmangel und -überversorgung ein.",
        answer: `Iod (I, Atomnr. 53) ist ein essenzielles Spurenelement und das einzige Halogen, das der Körper in nennenswerten Mengen benötigt. Empfohlene Tagesdosis: 150–200 μg (Erwachsene), 230–260 μg (Schwangerschaft). Aufnahme als Iodid (I⁻) hauptsächlich über Meeresfrüchte, iodiertes Speisesalz und Milchprodukte.

In der Schilddrüse: I⁻ wird durch den Na⁺/I⁻-Symporter (NIS) aktiv konzentriert (bis 30–40× Blutkonzentration). Thyreoperoxidase (TPO) oxidiert I⁻ zu I₂ (mit H₂O₂): 2 I⁻ + H₂O₂ → I₂ + 2 OH⁻. Reaktive Iodspezies iodieren Tyrosinreste in Thyreoglobulin → Monoiodtyrosin (MIT, 1 I) und Diiodtyrosin (DIT, 2 I). TPO koppelt dann: MIT + DIT → T₃ (Trijodthyronin, 3 I, biologisch aktiv); DIT + DIT → T₄ (Thyroxin, 4 I, Prohormon). T₄ wird peripher durch Deiodinasen zu T₃ oder reverse-T₃ (inaktiv) umgewandelt.

Wirkungen: T₃/T₄ regulieren Grundumsatz (thermogene Wirkung, Na⁺/K⁺-ATPase-Hochregulation), Wachstum und Differenzierung (besonders fetale Gehirnentwicklung), Herzfrequenz und Stoffwechsel.

Iodmangel: T₃/T₄ sinken → TSH-Anstieg → Struma (diffuse Schilddrüsenhyperplasie). Bei schwerem fetalem Mangel: Kretinismus (irreversible geistige Retardierung, Taubheit, Wachstumsstörung).

Iodüberversorgung: Jod-Basedow-Phänomen (Hyperthyreose bei vorbestehender Struma); Wolff-Chaikoff-Effekt (transiente Hemmung der Hormonsynthese). Hochdosiertes Kaliumiodid bei Nuklearunfällen: blockiert Aufnahme von radioaktivem ¹³¹I.`
      },
      klinischerBezug: "Schilddrüsenhormone (T₃, T₄) regulieren den Grundumsatz des gesamten Körpers; ihre Synthese ist iodabhängig. Hypothyreose (Iodmangel, Hashimoto) wird mit L-Thyroxin (T₄) substituiert. Propylthiouracil und Methimazol hemmen TPO und damit die Hormonsynthese (Hyperthyreose-Therapie). Nitroglyzerin (Glycerintrinitrat), das älteste Antiangina-Mittel, wird enzymatisch zu NO metabolisiert — es erweitert Koronargefäße und senkt die kardiale Vorlast durch venöse Dilatation.",
      selfTest: [
        {
          question: "Welche Bedingungen werden beim Haber-Bosch-Prozess gewählt, und warum ist dies ein Kompromiss?",
          options: [
            "Hohe Temperatur (800 °C) und Normaldruck — weil Hitze die Reaktion beschleunigt",
            "400–500 °C und 150–300 bar mit Fe-Katalysator — Kompromiss zwischen Gleichgewichtslage und Reaktionsgeschwindigkeit",
            "Niedrige Temperatur (−40 °C) und sehr hoher Druck (1000 bar) — für maximale Ausbeute",
            "Normaldruck und Raumtemperatur mit Platinkatalysator — für umweltfreundliche Produktion",
            "100 °C und 1 bar — Standardbedingungen für alle Industrieprozesse"
          ],
          correctIndex: 1,
          explanation: "N₂ + 3 H₂ ⇌ 2 NH₃ ist exotherm (ΔH = −92 kJ/mol) und geht von 4 auf 2 Mol Gas. Le Chatelier: (1) Niedrige T begünstigt NH₃ (exotherm), aber macht Reaktion zu langsam. (2) Hoher Druck begünstigt NH₃ (weniger Mol). Kompromiss: 400–500 °C (genug Geschwindigkeit) + 150–300 bar + Fe/K₂O/Al₂O₃-Katalysator (erhöht Reaktionsgeschwindigkeit ohne Gleichgewicht zu verschieben). Ausbeute nur ~15–25 % pro Durchgang → Kreislaufführung des unregierten Gases. Haber-Bosch versorgt ~50 % der Weltbevölkerung mit Stickstoffdünger.",
          hints: [
            "Le Chatelier: Exotherme Reaktion — welche Temperatur begünstigt die Produktseite?",
            "Weshalb kann man nicht bei 0 °C arbeiten, obwohl das thermodynamisch günstiger wäre?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Warum ist H₂S in höheren Konzentrationen besonders tückisch gefährlich?",
          options: [
            "Weil H₂S sich mit Hämoglobin verbindet und Sulfhämoglobin bildet",
            "Weil H₂S ab ~100 ppm die Geruchsnerven lähmt — die Warnung durch Geruch fällt weg, obwohl toxische Konzentrationen weiter steigen",
            "Weil H₂S radioaktiv ist und Knochenmarkzellen schädigt",
            "Weil H₂S zu SO₄²⁻ oxidiert wird und Nierenversagen auslöst",
            "Weil H₂S alkalisch ist und die Magensäure neutralisiert"
          ],
          correctIndex: 1,
          explanation: "H₂S-Paradox: Bei niedrigen Konzentrationen (0,01–10 ppm) intensiver Faulei-Geruch als Warnsignal. Ab ~50–100 ppm: Olfaktorius-Paralyse (Lähmung der Geruchsrezeptoren) — die Person riecht nichts mehr, obwohl gefährliche Konzentrationen (>250–500 ppm) vorliegen können. Tückisch in Güllekellern, Kanalschächten, petrochemischen Anlagen. Toxikologisch: H₂S hemmt Cytochrom-c-Oxidase (Komplex IV) analog zu HCN → histotoxische Hypoxie → Bewusstseinsverlust, Atemstillstand. Antidot: Hydroxycobalamin, Dimethylaminophenol (DMAP) → Methämoglobin-Bildung als H₂S-Fänger.",
          hints: [
            "Was passiert mit dem Geruchssinn bei hohen H₂S-Konzentrationen? Ist das ein Schutzmechanismus oder ein Problem?",
            "H₂S hemmt ein Enzym der Atmungskette — welches, und was ist die Folge für die Zellatmung?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welcher Schritt folgt in der Schilddrüse direkt nach der Aufnahme von I⁻, bevor es in Thyreoglobulin eingebaut wird?",
          options: [
            "I⁻ wird zu I₂ oxidiert durch Thyreoperoxidase (TPO) unter Einsatz von H₂O₂",
            "I⁻ wird direkt in Tyrosinreste von Thyreoglobulin eingebaut ohne weitere Aktivierung",
            "I⁻ wird durch Jodid-Kinase phosphoryliert und als Iodidphosphat aktiviert",
            "I⁻ wird mit TSH zu einem Komplex verbunden, der Thyreoglobulin aktiviert",
            "I⁻ wird ins Blut zurückgegeben und dort zu I₂ oxidiert"
          ],
          correctIndex: 0,
          explanation: "Nach aktiver Aufnahme von I⁻ durch den Na⁺/I⁻-Symporter (NIS) wird I⁻ ins Follikellumen transportiert. Dort katalysiert Thyreoperoxidase (TPO) unter Verbrauch von H₂O₂ die Oxidation: 2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O. Die reaktiven Iodspezies (I₂ oder I⁺) iodieren sofort Tyrosinreste in Thyreoglobulin (Organifikation): → Monoiodtyrosin (MIT) und Diiodtyrosin (DIT). Dann Kopplungsreaktion durch TPO: MIT + DIT → T₃; DIT + DIT → T₄. Methimazol und PTU hemmen TPO → Thyreostatika (Hyperthyreose-Therapie).",
          hints: [
            "I⁻ (Oxidationsstufe −1) muss vor dem Einbau in organische Moleküle aktiviert werden — in welche Oxidationsstufe?",
            "Welches Enzym der Schilddrüse ist für Oxidation, Iodierung und Kopplung verantwortlich?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was unterscheidet konz. HNO₃ von verd. HNO₃ bei der Oxidation von Metallen?",
          options: [
            "Konzentrierte HNO₃ reduziert Metalle zu Metalliodiden; verdünnte zu Metallnitraten",
            "Konzentrierte HNO₃ oxidiert Metalle unter Bildung von NO₂ (braun); verdünnte unter Bildung von NO (farblos)",
            "Konzentrierte HNO₃ ist weniger reaktiv wegen Passivierungsschicht; verdünnte greift Eisen sofort an",
            "Konzentrierte HNO₃ reagiert nur mit Nichtmetallen; verdünnte nur mit Metallen",
            "Kein Unterschied — beide produzieren NH₃ als Stickstoffreduktionsprodukt"
          ],
          correctIndex: 1,
          explanation: "HNO₃ oxidiert Metalle (außer Au, Pt) unter Bildung von Stickoxiden — das entstehende Produkt hängt von der Konzentration ab: Konz. HNO₃: primär NO₂ (braunes Gas, N in +4): Cu + 4 HNO₃(konz.) → Cu(NO₃)₂ + 2 NO₂ + 2 H₂O. Verd. HNO₃: primär NO (farbloses Gas, N in +2): 3 Cu + 8 HNO₃(verd.) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Bei sehr verdünnter HNO₃ + aktivem Metall (Zn): NH₄⁺ (N in −3). Königswasser (3 HCl + 1 HNO₃) löst Au durch [AuCl₄]⁻-Bildung. Fe und Al werden durch konz. HNO₃ passiviert (Oxidschicht).",
          hints: [
            "Oxidationszahl von N in HNO₃ ist +5. In NO₂ ist sie +4, in NO ist sie +2 — konz. oder verd. HNO₃ reduziert N weniger weit?",
            "Braunes Gas = NO₂; farbloses Gas = NO. Bei welcher HNO₃-Konzentration entsteht welches?"
          ],
          difficulty: 3,
          tags: []
        },
        {
          question: "Warum schützt Fluorid (F⁻) vor Karies?",
          options: [
            "F⁻ tötet Kariesbakterien direkt durch oxidative Wirkung",
            "F⁻ ersetzt OH⁻ im Hydroxylapatit und bildet Fluorapatit — weniger säurelöslich als Hydroxylapatit",
            "F⁻ erhöht die Speichelproduktion und verdünnt Säuren im Mund",
            "F⁻ bildet einen Calciumfluorid-Schutzfilm auf dem Zahn, der Säuren abweist",
            "F⁻ hemmt Glucosyltransferase von Streptococcus mutans und verhindert Plaquebildung"
          ],
          correctIndex: 1,
          explanation: "Zahnschmelz: Hydroxylapatit Ca₁₀(PO₄)₆(OH)₂. Kariesbakterien (Streptococcus mutans) produzieren Milchsäure → pH < 5,5 → Demineralisierung. F⁻ (aus Zahnpasta, fluoridiertem Wasser) lagert sich ein und ersetzt OH⁻: Ca₁₀(PO₄)₆(OH)₂ + 2 F⁻ → Ca₁₀(PO₄)₆F₂ + 2 OH⁻. Fluorapatit hat ein niedrigeres Löslichkeitsprodukt (Ksp) und braucht pH < 4,5 zur Demineralisierung (statt <5,5 bei Hydroxylapatit) → säurefesterer Zahnschmelz. Zudem fördert F⁻ die Remineralisierung. Primärmechanismus: Struktureinbau, nicht direkte Bakterizidie.",
          hints: [
            "Was ist Hydroxylapatit chemisch, und welche Gruppe (OH⁻) könnte F⁻ ersetzen?",
            "Ein niedrigeres Löslichkeitsprodukt bedeutet — ist das neue Mineral leichter oder schwerer in Säure löslich?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Wie vermittelt Stickstoffmonoxid (NO) seine vasodilatatorische Wirkung auf molekularer Ebene?",
          options: [
            "NO aktiviert Adenylatcyclase → cAMP → Proteinkinase A → Vasodilatation",
            "NO aktiviert lösliche Guanylatzyklase (sGC) → cGMP → Proteinkinase G → Inaktivierung der MLCK → Relaxation der glatten Muskulatur",
            "NO bindet an β-Adrenorezeptoren → Gi-Protein → Vasodilatation",
            "NO hemmt Phosphodiesterase direkt → kein cAMP-Abbau → Vasodilatation",
            "NO aktiviert Kaliumkanäle direkt durch Membranpolarisation"
          ],
          correctIndex: 1,
          explanation: "NO ist lipophil und durchquert Membranen leicht. Es bindet an das Häm-Eisen der löslichen Guanylatzyklase (sGC) → Konformationsänderung → Aktivierung → cGMP-Synthese aus GTP. cGMP aktiviert Proteinkinase G (PKG), die (1) Myosin-Leichtketten-Kinase (MLCK) inaktiviert → weniger Myosin-Phosphorylierung → Relaxation, (2) BK-Ca-Kanäle öffnet → Hyperpolarisation → verminderter Ca²⁺-Einstrom. Resultat: Gefäßrelaxation → Vasodilatation. PDE5 baut cGMP ab — PDE5-Hemmer (Sildenafil, Tadalafil) verstärken den NO-Effekt: erektile Dysfunktion, pulmonale arterielle Hypertonie.",
          hints: [
            "NO bindet an ein häm-haltiges Enzym — nicht an einen Membranrezeptor. Welches intrazelluläre Enzym enthält Häm und produziert einen Second Messenger?",
            "cGMP aktiviert Proteinkinase G. Was phosphoryliert diese in der glatten Muskelzelle, und welche Konsequenz hat das?"
          ],
          difficulty: 3,
          tags: []
        },
        {
          question: "Welche Reihenfolge beschreibt das Kontaktverfahren zur Herstellung von H₂SO₄ korrekt?",
          options: [
            "S → SO₃ → SO₂ → H₂SO₄",
            "S → SO₂ → SO₃ (V₂O₅-Katalysator) → Oleum (SO₃ in H₂SO₄) → + H₂O → H₂SO₄",
            "H₂S → SO₂ → H₂SO₃ → Oxidation → H₂SO₄",
            "FeS₂ → SO₃ → direkte Reaktion mit H₂O → H₂SO₄",
            "S + H₂O → H₂SO₄ direkt durch Nassoxidation"
          ],
          correctIndex: 1,
          explanation: "Kontaktverfahren (global ~250 Mio. t H₂SO₄/Jahr): (1) Schwefelverbrennung: S + O₂ → SO₂ (oder Pyrit-Röstung: 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂). (2) Katalytische Oxidation: 2 SO₂ + O₂ ⇌ 2 SO₃; V₂O₅-Katalysator, 400–600 °C; >98 % Ausbeute. (3) SO₃ wird NICHT direkt mit H₂O umgesetzt (würde dichten Schwefelsäurenebel/Aerosol bilden, der nicht kondensierbar ist). Stattdessen: SO₃ in konz. H₂SO₄ → Oleum (H₂S₂O₇, Pyroschwefelsäure). (4) Oleum + H₂O → 2 H₂SO₄. Der Trick: SO₃ direkt + H₂O = Aerosol-Problem; Oleum-Route umgeht das.",
          hints: [
            "S wird zuerst zu SO₂ (Verbrennung) oxidiert, dann zu SO₃ — welches Enzym (bzw. Katalysator) ist nötig?",
            "Warum kann SO₃ nicht direkt mit Wasser umgesetzt werden — was entsteht physikalisch?"
          ],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welches Muster zeigen TSH und Schilddrüsenhormone bei Hypothyreose vs. Hyperthyreose?",
          options: [
            "Hypothyreose: hohes T₃/T₄, niedriges TSH; Hyperthyreose: niedriges T₃/T₄, hohes TSH",
            "Hypothyreose: niedriges T₃/T₄, hohes TSH (Hypophyse stimuliert stärker); Hyperthyreose: hohes T₃/T₄, niedriges TSH (Hemmung der Hypophyse)",
            "Beide Erkrankungen: gleichzeitig erhöhtes TSH und erhöhtes T₃/T₄",
            "TSH wird bei beiden Erkrankungen nicht beeinflusst — Regulation nur lokal in der Schilddrüse",
            "Hypothyreose: erhöhtes TSH und erhöhtes T₃/T₄ durch kompensatorische Überproduktion"
          ],
          correctIndex: 1,
          explanation: "Die Schilddrüsenachse arbeitet über negative Rückkopplung: TRH (Hypothalamus) → TSH (Hypophyse) → T₃/T₄ (Schilddrüse) → hemmt TRH und TSH. Hypothyreose (z. B. Iodmangel, Hashimoto): T₃/T₄ niedrig → Hemmung der Hypophyse fällt weg → TSH steigt kompensatorisch → Struma. Hyperthyreose (Morbus Basedow, autonomes Adenom): T₃/T₄ hoch → starke Hemmung der Hypophyse → TSH supprimiert (<0,1 mU/L). Diagnose: TSH ist der empfindlichste Laborparameter; TSH hoch = primäre Hypothyreose; TSH niedrig/supprimiert = Hyperthyreose. T₃/T₄ zur Bestätigung und Schweregradbeurteilung.",
          hints: [
            "Die Hypophyse wird durch TSH stimuliert — oder sendet sie TSH? Und was hemmt TSH-Ausschüttung?",
            "Negative Rückkopplung: Hohes T₃/T₄ hemmt TSH. Was passiert also bei Hyperthyreose mit dem TSH-Spiegel?"
          ],
          difficulty: 2,
          tags: []
        }
      ]
    }
  ]
};
