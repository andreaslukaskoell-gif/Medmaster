import type { Kapitel } from "../types";

export const chemKapAnorganisch: Kapitel = {
  id: "chem-kap5",
  title: "Anorganische Chemie",
  subject: "chemie",
  icon: "🧪",
  estimatedTime: "150 min",
  unterkapitel: [
    // === from kap9-elemente-und-verbindungen ===
    {
      id: "ch-9-01",
      title: "Wasser — Eigenschaften und biologische Bedeutung",
      imageUrl: "/images/bms/ch-wasserstoffbruecken.jpg",
      imageCaption: "Abb.: Wasserstoffbrücken und Eigenschaften des Wassers (OpenStax, CC BY 4.0)",
      stichworte: [
        "Dipolmoment",
        "Wasserstoffbrücken",
        "Dichteanomalie",
        "Siedepunkt",
        "Wärmekapazität",
        "Verdampfungsenthalpie",
        "Autoprotolyse",
        "Ionenprodukt Kw",
        "Hydratation",
        "Hydrophober Effekt",
        "Oberflächenspannung",
        "Amphoterie",
      ],
      lernziele: [
        "Die Struktur des Wassermoleküls und den Ursprung seines Dipolcharakters erläutern können",
        "Die außergewöhnlichen physikalischen Eigenschaften von Wasser mit dem H-Brücken-Netzwerk begründen",
        "Die Rolle von Wasser als Lösungsmittel, Reaktionsmedium und Temperaturpuffer im menschlichen Körper erklären",
        "Den Autoprotolyseprozess des Wassers und seine Bedeutung für den pH-Wert verstehen",
      ],
      content: `## Struktur des Wassermoleküls

Wasser (H₂O) ist das häufigste und biologisch bedeutsamste anorganische Molekül auf der Erde. Der menschliche Körper besteht zu **60–70 %** aus Wasser — es ist Lösungsmittel, Reaktionsmedium, Transportvehikel und Temperaturpuffer in einem. Das zentrale Sauerstoffatom trägt vier Elektronenpaare: zwei bindende (zu den H-Atomen) und zwei nichtbindende (freie Elektronenpaare). Nach dem **VSEPR-Modell** (Valence Shell Electron Pair Repulsion, Elektronenpaar-Abstoßungs-Modell) komprimieren die freien Elektronenpaare den Bindungswinkel von theoretisch 109,5° (Tetraeder) auf **104,5°**. Die Sauerstoff-Wasserstoff-Bindung ist stark polar (ΔEN = 1,24 nach Pauling), woraus ein permanentes Dipolmoment von **μ = 1,85 Debye (D)** (Einheit der Polarität) resultiert — einer der höchsten Werte kleiner Moleküle.

> **Merke:** Wasser hat eine gewinkelte Geometrie (104,5°), nicht linear wie CO₂. Die freien Elektronenpaare am O komprimieren den Winkel unter den Tetraederwinkel.

{{IMAGE}}

## Wasserstoffbrückenbindungen

Jedes Wassermolekül kann bis zu **vier H-Brücken** ausbilden: zwei als Donor (H-Atome, δ+) und zwei als Akzeptor (freie Elektronenpaare am O, δ−). Energie je H-Brücke: ~20 kJ/mol (zum Vergleich: kovalente O-H-Bindung ~460 kJ/mol). Dieses kooperative Netzwerk erklärt sämtliche anomalen physikalischen Eigenschaften:

| Eigenschaft | Wert | Vergleich / Bedeutung |
|---|---|---|
| Siedepunkt | 100 °C | H₂S (34 g/mol): −60 °C; ohne H-Brücken wäre Sdp. ~−80 °C |
| Spez. Wärmekapazität | 4182 J/(kg·K) | Höchste aller gängigen Flüssigkeiten; puffert Körpertemperatur |
| Verdampfungsenthalpie | ~2430 kJ/kg (37 °C) | 1 mL Schweiß entzieht ~2,4 kJ → effiziente Thermoregulation |
| Oberflächenspannung | 72 mN/m | Kapillarkräfte im Xylem (bis 100 m), Alveolarstabilität |
| Schmelzwärme | 334 kJ/kg | Eis → Wasser: hoher Energiebedarf für Phasenübergang |


**Hoher Siedepunkt:** 100 °C trotz MW 18 g/mol. H₂S (34 g/mol, keine H-Brücken) siedet bei −60 °C — eine Differenz von 160 °C, die ausschließlich auf das H-Brücken-Netzwerk zurückzuführen ist.

**Hohe spezifische Wärmekapazität:** c = 4182 J/(kg·K). Ein 70 kg schwerer Mensch mit ~42 kg Körperwasser kann erhebliche Wärmeproduktion (z. B. Sport: bis 800 W) abpuffern. Rechenbeispiel: 800 J/s × 60 s = 48 kJ → ΔT = 48000 / (42 × 4182) ≈ 0,27 °C pro Minute.

**Hohe Verdampfungsenthalpie:** ~2430 kJ/kg bei 37 °C. 1 mL verdunstender Schweiß entzieht dem Körper ~2,4 kJ — entscheidend für Thermoregulation. Bei maximaler Schweißproduktion (~2 L/h) können ~1300 W Wärme abgeführt werden.

**Hohe Oberflächenspannung:** γ = 72 mN/m. Ermöglicht Kapillarkräfte im Xylem (Wassertransport bis 100 m Höhe in Mammutbäumen) und schützt Lungenalveolen. Pulmonales **Surfactant** (oberflächenaktive Substanz; Dipalmitoylphosphatidylcholin, DPPC) senkt γ und verhindert Alveolarkollaps beim Ausatmen. Frühgeborenen-Atemnotsyndrom (IRDS, Infant Respiratory Distress Syndrome) entsteht bei Surfactant-Mangel.

## Dichteanomalie — Eis schwimmt

Wasser hat seine **maximale Dichte bei 4 °C** (ρ = 1,000 kg/L). Unterhalb von 4 °C beginnen die Moleküle, die geordnete hexagonale Gitterstruktur des Eises auszubilden — diese beansprucht mehr Volumen. Eis ist daher ~9 % weniger dicht (ρ = 0,917 kg/L) und schwimmt.

**Biologische Bedeutung:**
- Seen kühlen im Herbst von der Oberfläche ab; das 4 °C-Wasser sinkt auf den Boden
- Eis bildet sich an der Oberfläche und isoliert das darunterliegende Wasser
- Fische, Amphibien und Mikroorganismen überleben im 4 °C-Wasser am Seegrund
- Ohne diese Anomalie würden Gewässer von unten gefrieren → Ausrottung aquatischen Lebens

> **Merke:** Dichtemaximum bei 4 °C → Eis schwimmt → Seen frieren von oben → aquatisches Leben überlebt den Winter.

## Autoprotolyse und pH-Wert

Wasser reagiert mit sich selbst (Autoprotolyse):

**2 H₂O ⇌ H₃O⁺ + OH⁻**

Ionenprodukt: **K_w = [H₃O⁺] · [OH⁻] = 1,0 × 10⁻¹⁴** (25 °C). In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7,0 (neutral bei 25 °C).

K_w ist **temperaturabhängig** (Autoprotolyse ist endotherm, ΔH > 0):
- Bei 37 °C (Körpertemperatur): K_w ≈ 2,4 × 10⁻¹⁴ → [H₃O⁺] = √(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ → pH ≈ 6,8
- „Neutral" bedeutet nicht automatisch pH 7, sondern [H₃O⁺] = [OH⁻]

Wasser ist **amphoter** (Ampholyt) — je nach Reaktionspartner Säure oder Base:
- Als Säure: H₂O + NH₃ → NH₄⁺ + OH⁻ (gibt H⁺ ab)
- Als Base: H₂O + HCl → H₃O⁺ + Cl⁻ (nimmt H⁺ auf)

## Hydratation und Löslichkeit


Wasser solvatisiert Ionen durch **Ion-Dipol-Wechselwirkungen**: Der δ⁻-Sauerstoff orientiert sich zu Kationen, die δ⁺-Wasserstoffe zu Anionen. Hydratationsenthalpien: ΔH_hyd(Na⁺) ≈ −406 kJ/mol, ΔH_hyd(Cl⁻) ≈ −363 kJ/mol. Die Summe (−769 kJ/mol) überwindet die NaCl-Gitterenergie (−787 kJ/mol); der leicht endotherme Lösungsprozess (+4 kJ/mol) wird durch Entropiegewinn kompensiert. Polare organische Moleküle (Glucose, Ethanol, Harnstoff) werden über H-Brücken und Dipol-Dipol-WW gelöst.

## Hydrophober Effekt

Der **hydrophobe Effekt** ist primär entropisch getrieben: Apolare Moleküle in Wasser erzwingen geordnete Wasserkäfige (Clathrate, käfigartige Wasserstrukturen) — ΔS_Wasser < 0 (ungünstig). Aggregation apolarer Gruppen minimiert die Kontaktfläche → geordnete Wassermoleküle werden freigesetzt → ΔS_gesamt > 0 → spontan (ΔG < 0).

**Biologisch fundamental:**
- Phospholipid-Doppelschichten: hydrophile Köpfe außen, hydrophobe Schwänze innen
- Proteinfaltung: hydrophobe Aminosäuren im Inneren, hydrophile außen
- Mizellbildung (kugelförmige Lipidaggregate) von Gallensalzen und Detergenzien

> **Merke:** Hydrophober Effekt = entropischer Antrieb — apolare Gruppen aggregieren, um geordnete Wasserkäfige zu minimieren. Treibkraft für Membranbildung und Proteinfaltung.

> **Prüfungstipp:** Wasser-Anomalien sind ein MedAT-Klassiker. Merke die Zahlenwerte: Bindungswinkel 104,5°, Dichtemaximum bei 4 °C, Siedepunkt 100 °C trotz MW 18, spez. Wärmekapazität 4182 J/(kg·K). Bei Vergleichsfragen H₂O vs. H₂S immer auf H-Brücken verweisen.`,
      sections: [
        {
          heading: "Dipolcharakter und H-Brücken",
          text: "Die gewinkelte Geometrie (104,5°) und die hohe Elektronegativität des Sauerstoffs erzeugen einen ausgeprägten Dipol (μ = 1,85 D). Jedes Wassermolekül bildet bis zu vier H-Brücken aus — zwei als Donor (H-Atome, δ+) und zwei als Akzeptor (freie Elektronenpaare am O, δ−). Dieses kooperative Netzwerk erklärt alle anomalen Eigenschaften des Wassers.",
          merksatz:
            "4 H-Brücken pro Molekül: 2 Donor (H) + 2 Akzeptor (O) — Wasser vernetzt sich wie kein anderes kleines Molekül.",
        },
        {
          heading: "Anomalien — hoher Siedepunkt und Dichtemaximum",
          text: "Wasser siedet bei 100 °C (statt ~−80 °C ohne H-Brücken) und hat eine spezifische Wärmekapazität von 4182 J/(kg·K). Das Dichtemaximum liegt bei 4 °C; Eis (hexagonale Gitterstruktur) ist 9 % weniger dicht als Wasser und schwimmt. Seen frieren von oben — Leben unter dem Eis überlebt.",
          merksatz:
            "Wasser: Dichtemaximum 4 °C, Eis schwimmt → Seen frieren von oben → aquatisches Leben überlebt den Winter.",
        },
        {
          heading: "Autoprotolyse und Amphoterie",
          text: "Wasser ionisiert schwach zu H₃O⁺ und OH⁻. K_w = 10⁻¹⁴ (25 °C) → pH-Neutralpunkt = 7. Bei 37 °C K_w ≈ 2,4 × 10⁻¹⁴ → Neutralpunkt pH ≈ 6,8. Wasser ist amphoter — Proton-Donor oder -Akzeptor je nach Reaktionspartner.",
          merksatz:
            "K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ bei 25 °C → pH_neutral = 7; bei 37 °C pH_neutral ≈ 6,8.",
        },
        {
          heading: "Hydrophiler vs. hydrophober Effekt",
          text: "Ionen und polare Moleküle werden hydratisiert und damit löslich (Ion-Dipol- / Dipol-Dipol-WW). Apolare Stoffe erzwingen geordnete Wasserkäfige (Clathrate) — entropisch ungünstig. Der hydrophobe Effekt treibt Aggregation apolarer Gruppen (ΔS_gesamt > 0) und ist Grundlage von Proteinstruktur und Lipid-Doppelschichten.",
          merksatz:
            "Hydrophober Effekt = entropischer Antrieb — apolare Gruppen aggregieren, um geordnete Wasserkäfige zu minimieren.",
        },
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
        "Hydrophober Effekt: thermodynamisch getrieben durch Entropiegewinn bei Aggregation apolarer Gruppen",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die außergewöhnlichen physikalischen Eigenschaften des Wassers und begründen Sie diese auf molekularer Ebene. Gehen Sie auf Siedepunkt, Wärmekapazität, Dichteanomalie und Oberflächenspannung sowie deren biologische Bedeutung ein.",
        answer: `Alle außergewöhnlichen Eigenschaften des Wassers lassen sich auf seinen Dipolcharakter und das ausgedehnte H-Brücken-Netzwerk zurückführen. Der gewinkelte Bindungswinkel von 104,5° und ΔEN = 1,24 erzeugen ein Dipolmoment von 1,85 D. Jedes Molekül bildet bis zu vier H-Brücken (~20 kJ/mol): zwei als Donor und zwei als Akzeptor.

Der hohe Siedepunkt von 100 °C (H₂S siedet bei −60 °C!) erfordert das Aufbrechen des H-Brücken-Netzwerks beim Verdampfen — Verdampfungsenthalpie ~2430 kJ/kg bei 37 °C ermöglicht effiziente Kühlung durch Schweiß. Die hohe Wärmekapazität (4182 J/kg·K) stabilisiert die Körpertemperatur bei Wärmeproduktion.

Die Dichteanomalie (Maximum bei 4 °C) lässt Eis schwimmen (9 % weniger dicht) — Seen frieren von der Oberfläche, das 4 °C-Wasser am Boden bleibt flüssig, aquatische Organismen überleben den Winter. Die hohe Oberflächenspannung (72 mN/m) ermöglicht Kapillarkräfte im Pflanzenstamm (100 m Höhe) und schützt Lungenalveolen — Surfactant (DPPC) senkt γ, um den Alveolarkollaps beim Ausatmen zu verhindern.`,
      },
      klinischerBezug:
        "Der Wassergehalt des menschlichen Körpers (60–70 % des Körpergewichts) ist Medium für Elektrolyttransport, pH-Regulation und Temperaturhomöostase. Dehydratation um 2 % des Körpergewichts reduziert kognitive Leistung messbar; Hyponatriämie (Überwässerung ohne Elektrolyte) führt zu Hirnödem. In der Pharmazie bestimmt der Hydratationszustand die Bioverfügbarkeit wasserlöslicher Arzneimittel und die renale Clearance.",
      selfTest: [
        {
          question:
            "Warum hat Wasser trotz seines geringen Molekulargewichts (18 g/mol) einen Siedepunkt von 100 °C?",
          options: [
            "Wegen der starken kovalenten O-H-Bindungen, die beim Sieden gebrochen werden",
            "Wegen der Dichteanomalie, die den Phasenübergang erschwert",
            "Wegen der Van-der-Waals-Wechselwirkungen zwischen den kleinen H₂O-Molekülen",
            "Wegen des hohen Dipolmoments, das eine starke ionische Bindung bewirkt",
            "Wegen des ausgedehnten Wasserstoffbrücken-Netzwerks, das beim Verdampfen aufgebrochen werden muss",
          ],
          correctIndex: 4,
          explanation:
            "Der hohe Siedepunkt ist ausschließlich auf das extensive Wasserstoffbrücken-Netzwerk zurückzuführen. Jedes H₂O-Molekül bildet bis zu vier H-Brücken (~20 kJ/mol). Beim Verdampfen müssen diese intermolekularen Bindungen gebrochen werden — nicht die kovalenten O-H-Bindungen. H₂S (34 g/mol, keine H-Brücken) siedet bei −60 °C, also 160 °C tiefer als Wasser, obwohl es schwerer ist. Van-der-Waals-Kräfte allein würden einen Siedepunkt weit unter −80 °C ergeben. Beim Verdampfen ändert sich die Aggregation, nicht die chemische Bindung.",
          hints: [
            "Vergleiche Wasser mit H₂S — gleiche Gruppe, aber sehr unterschiedliche Siedepunkte. Was macht den Unterschied?",
            "Beim Verdampfen ändern Moleküle ihren Aggregatzustand — welche Bindungen werden dabei gebrochen: kovalente oder intermolekulare?",
          ],
          difficulty: 1,
          tags: ["wasser", "siedepunkt", "wasserstoffbrücken"],
        },
        {
          question:
            "Bei welcher Temperatur hat Wasser seine maximale Dichte, und warum ist dies biologisch bedeutsam?",
          options: [
            "Bei 4 °C — weil Seen dadurch von oben gefrieren und das Leben unter dem Eis erhalten bleibt",
            "Bei 0 °C — weil Wasser beim Gefrieren am dichtesten wird",
            "Bei 20 °C — bei Raumtemperatur ist Wasser am stabilsten und daher am dichtesten",
            "Bei 37 °C — die Körpertemperatur optimiert die Wasserdichte für physiologische Prozesse",
            "Bei 100 °C — kurz vor dem Sieden sind alle Moleküle maximal komprimiert",
          ],
          correctIndex: 0,
          explanation:
            "Wasser hat sein Dichtemaximum bei exakt 4 °C (ρ = 1,000 kg/L). Unter 4 °C nimmt die Dichte wieder ab, weil die Moleküle beginnen, die geordnete hexagonale Eisstruktur zu bilden — diese beansprucht mehr Raum. Eis (0,917 kg/L) ist ~9 % weniger dicht und schwimmt. Biologisch lebensrettend: Seen kühlen von der Oberfläche, das 4 °C-Wasser sinkt auf den Boden. Das Eis isoliert das darunter liegende flüssige Wasser. Fische, Algen und andere Organismen überleben den Winter im 4 °C-Wasser am Seegrund.",
          hints: [
            "Eis schwimmt auf Wasser — was sagt das über die Dichte von Eis im Vergleich zu flüssigem Wasser?",
            "Denke an einen See im Winter: Von wo friert er zuerst? Oben oder unten? Warum ist das für Fische wichtig?",
          ],
          difficulty: 1,
          tags: ["dichteanomalie", "dichtemaximum", "eis-schwimmt"],
        },
        {
          question: "K_w = 1,0 × 10⁻¹⁴ bei 25 °C. Welche Aussage trifft für [OH⁻] = 10⁻³ mol/L zu?",
          options: [
            "[H₃O⁺] = 10⁻³ mol/L; die Lösung ist neutral",
            "[H₃O⁺] = 10⁻¹¹ mol/L; die Lösung ist basisch mit pH = 11",
            "[H₃O⁺] = 10⁻¹¹ mol/L; die Lösung ist sauer mit pH = 3",
            "[H₃O⁺] = 10⁻⁷ mol/L; das Ionenprodukt ist durch OH⁻-Ionen unverändert",
            "K_w ändert sich, und [H₃O⁺] ist nicht berechenbar",
          ],
          correctIndex: 1,
          explanation:
            "K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ ist bei konstanter Temperatur invariant. [H₃O⁺] = K_w / [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L → pH = 11. Eine hohe OH⁻-Konzentration (10⁻³ > 10⁻⁷) signalisiert eine basische Lösung. K_w bleibt konstant — es verändert sich nicht durch den Zusatz von Basen, solange die Temperatur konstant bleibt. pH 11 entspricht z. B. einer Natriumcarbonat-Lösung oder einem Haarentferner.",
          hints: [
            "K_w ist bei gleicher Temperatur immer 10⁻¹⁴ — berechne [H₃O⁺] = K_w / [OH⁻].",
            "pH = −log[H₃O⁺] — ist der pH größer oder kleiner als 7 wenn [H₃O⁺] sehr klein ist?",
          ],
          difficulty: 2,
          tags: ["ionenprodukt", "kw", "ph-rechnen"],
        },
        {
          question:
            "Was versteht man unter dem hydrophoben Effekt und welche Struktur wird davon angetrieben?",
          options: [
            "Die Abstoßung hydrophober Moleküle durch Wasser aufgrund elektrostatischer Wechselwirkungen; er erklärt die Löslichkeit von Fetten",
            "Die hohe Oberflächenspannung des Wassers, die verhindert, dass apolare Moleküle die Oberfläche durchdringen",
            "Die entropisch getriebene Aggregation apolarer Moleküle in Wasser, die geordnete Wasserkäfige minimiert; er treibt Lipid-Doppelschichten und Proteinstrukturen",
            "Die Anziehungskraft zwischen Wasser und apolaren Gruppen durch Van-der-Waals-Kräfte; er erklärt Emulsionen",
            "Der Druck, der durch das H-Brücken-Netzwerk auf gelöste Moleküle ausgeübt wird",
          ],
          correctIndex: 2,
          explanation:
            "Der hydrophobe Effekt ist primär entropisch getrieben. Apolare Moleküle in Wasser erzwingen eine geordnete Käfigstruktur (Clathrate) von Wassermolekülen — ΔS_Wasser < 0. Das System minimiert diesen Entropieverlust, indem apolare Gruppen aggregieren und die Gesamtoberfläche minimieren — die geordneten Wassermoleküle werden freigesetzt (ΔS_gesamt > 0 → spontan). Biologisch fundamental: (1) Bildung von Phospholipid-Doppelschichten (hydrophile Köpfe außen, hydrophobe Schwänze innen), (2) Protein-Faltung (hydrophober Kern), (3) Mizellbildung von Detergenzien.",
          hints: [
            "Was passiert mit Wassermolekülen, wenn ein apolares Molekül ins Wasser eingebracht wird? Werden sie geordneter oder ungeordneter?",
            "Spontane Prozesse haben ΔG < 0. Wenn ΔH ≈ 0, welcher Term (ΔS) muss positiv sein, und wo kommt diese Entropie her?",
          ],
          difficulty: 2,
          tags: ["hydrophober-effekt", "entropie", "lipid-bilayer"],
        },
        {
          question:
            "Warum ist die hohe Verdampfungsenthalpie des Wassers für die menschliche Thermoregulation entscheidend?",
          options: [
            "Weil Wasser als Kühlflüssigkeit im Blut zirkuliert und Wärme in alle Körperbereiche überträgt",
            "Weil die hohe Verdampfungstemperatur von 100 °C verhindert, dass Körperflüssigkeiten bei Fieber sieden",
            "Weil Wasser eine hohe Wärmekapazität hat und Temperaturschwankungen dämpft, ohne zu verdampfen",
            "Weil die Verdampfung von 1 g Schweiß bei 37 °C etwa 2,43 kJ Wärme aus dem Körper abführt und so effizient kühlt",
            "Weil Schweiß Salze enthält, die die Wärmekapazität erhöhen und die Kühlung verbessern",
          ],
          correctIndex: 3,
          explanation:
            "Die Verdampfungsenthalpie beträgt bei 37 °C ca. 2430 kJ/kg = 2,43 kJ/g. Beim Verdampfen von Schweiß an der Hautoberfläche wird diese Energie direkt dem Körper entzogen — als latente Wärme, ohne die Temperatur des Schweißtropfens zu erhöhen. Ein Mensch kann bei Hitze mehrere Liter Schweiß pro Stunde produzieren und so trotz intensiver Muskelarbeit (bis 800 W Wärmeproduktion) die Kerntemperatur stabil halten. Option A beschreibt Wärmetransport, nicht Kühlung durch Verdampfung. Option C (Wärmekapazität) erklärt Pufferung, nicht die aktive Kühlung durch Schweißverdunstung.",
          hints: [
            "Beim Verdampfen braucht Wasser Energie — woher kommt diese Energie, wenn Schweiß auf der Haut verdunstet?",
            "Latente Wärme = Wärme ohne Temperaturänderung. Wie viel Energie wird aus dem Körper entzogen, wenn 1 g Schweiß verdunstet?",
          ],
          difficulty: 2,
          tags: ["verdampfungsenthalpie", "thermoregulation", "schwitzen"],
        },
        {
          question: "Welcher pH gilt als neutral bei 37 °C, wenn K_w = 2,4 × 10⁻¹⁴?",
          options: [
            "pH 7,0 — Neutralität ist immer bei pH 7 definiert",
            "pH 8,0 — weil wärmeres Wasser basischer wird",
            "pH 7,4 — der physiologische Blut-pH gilt als Neutralpunkt",
            "pH 6,0 — bei Körpertemperatur überwiegen H₃O⁺-Ionen stärker",
            "pH 6,8 — weil bei 37 °C [H₃O⁺] = [OH⁻] = Wurzel(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L",
          ],
          correctIndex: 4,
          explanation:
            "Neutral bedeutet [H₃O⁺] = [OH⁻]. Bei 37 °C: K_w = 2,4 × 10⁻¹⁴. [H₃O⁺] = Wurzel(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L. pH = −log(1,55 × 10⁻⁷) ≈ 6,81. Der Neutralpunkt liegt bei 37 °C bei pH ≈ 6,8, nicht 7,0. Der physiologische Blut-pH von 7,4 ist bei 37 °C daher leicht basisch. Neutral ist keine feste pH-Zahl — es ist der temperaturabhängige Punkt, an dem [H₃O⁺] = [OH⁻]. K_w steigt mit Temperatur (Autoprotolyse ist endotherm), weshalb der Neutralpunkt mit steigender T sinkt.",
          hints: [
            "Neutral bedeutet [H₃O⁺] = [OH⁻]. Wenn K_w = [H₃O⁺]·[OH⁻] und beide gleich sind: [H₃O⁺] = Wurzel(K_w).",
            "K_w bei 37 °C ist größer als bei 25 °C — sinkt oder steigt der pH-Neutralpunkt bei höherer Temperatur?",
          ],
          difficulty: 3,
          tags: ["neutralpunkt", "kw-temperatur", "rechnen"],
        },
        {
          question: "Was ist der Hauptgrund für die leichte Löslichkeit von NaCl in Wasser?",
          options: [
            "Ion-Dipol-Wechselwirkungen zwischen Na⁺/Cl⁻ und polaren H₂O-Molekülen überwiegen die Ionengitter-Energie",
            "NaCl bildet kovalente Bindungen mit Wasser und wird chemisch umgewandelt",
            "Das Wasser hat eine hohe Oberflächenspannung, die NaCl-Kristalle physikalisch auflöst",
            "NaCl ist apolar und profitiert daher vom hydrophoben Effekt in wässriger Lösung",
            "H₂O-Moleküle dringen durch Osmose in das Kristallgitter ein und sprengen es",
          ],
          correctIndex: 0,
          explanation:
            "Die Löslichkeit von NaCl basiert auf Ion-Dipol-Wechselwirkungen: Der δ−-Sauerstoff orientiert sich zu Na⁺, die δ+-Wasserstoffe zu Cl⁻. Hydratationsenthalpien: ΔH_hyd(Na⁺) ≈ −406 kJ/mol, ΔH_hyd(Cl⁻) ≈ −363 kJ/mol, zusammen ~−769 kJ/mol. Dies überwindet die Gitterenergie des NaCl-Kristalls (~−787 kJ/mol). Die leicht endotherme Lösungsenthalpie (+4 kJ/mol) wird durch den Entropiegewinn der freien Ionen im Lösungsmittel kompensiert. NaCl ist ionic/polar — kein hydrophober Effekt, der gilt für apolare Stoffe.",
          hints: [
            "Wasser ist ein Dipol — welche Seite des Dipols wird von Na⁺ angezogen, welche von Cl⁻?",
            "Um ein Salz zu lösen, muss das Lösungsmittel die Kräfte im Kristallgitter überwinden — was liefert Wasser dafür?",
          ],
          difficulty: 2,
          tags: ["nacl-löslichkeit", "hydratation", "ion-dipol"],
        },
        {
          question: "Was erklärt Kapillarkräfte, die Pflanzenwasser bis 100 m Höhe transportieren?",
          options: [
            "Die hohe Dichte des Wassers, die osmotischen Druck im Xylem erzeugt",
            "Hohe Oberflächenspannung und Kohäsion durch H-Brücken, kombiniert mit Adhäsion an Zellwandfasern",
            "Die niedrige Viskosität des Wassers, die Fluss in engen Kanälen erleichtert",
            "Der hohe Siedepunkt, der Verdampfung im Xylem verhindert",
            "Die Dichteanomalie, die kaltes Wasser in den Wurzeln aufsteigen lässt",
          ],
          correctIndex: 1,
          explanation:
            "Der Wassertransport im Xylem basiert auf dem Kohäsions-Tensions-Modell: (1) Transpiration an den Blättern erzeugt Unterdruck (Tension), (2) Kohäsion — H-Brücken zwischen Wassermolekülen — hält die Wassersäule zusammen (sie reißt nicht), (3) Adhäsion — Wechselwirkungen zwischen Wasser und polaren Cellulose-/Ligninfasern — ermöglicht das Kleben des Wassers an den Xylemwänden. Die hohe Oberflächenspannung (72 mN/m) ist Ausdruck dieser starken Kohäsionskräfte. In Xylemgefäßen mit 10–500 μm Durchmesser können diese Kräfte Säulen von mehr als 100 m aufrechterhalten.",
          hints: [
            "Was hält die lange Wassersäule im Pflanzen-Xylem zusammen? Kohäsion (Wasser-Wasser) oder Adhäsion (Wasser-Wand)?",
            "Oberflächenspannung = Ausdruck starker intermolekularer Anziehung — welche Kräfte sind bei Wasser dafür verantwortlich?",
          ],
          difficulty: 2,
          tags: ["kapillarkräfte", "kohäsion", "adhäsion"],
        },
      ],
    },
    {
      id: "ch-9-02",
      title: "Kohlenstoff und seine Verbindungen",
      stichworte: [
        "Katenation",
        "Hybridisierung sp3 sp2 sp",
        "Diamant",
        "Graphit",
        "Graphen",
        "Fullerene",
        "CO₂ Bicarbonat-Puffer",
        "CO Hämoglobin",
        "Carboanhydrase",
        "Henderson-Hasselbalch",
        "Acetyl-CoA",
      ],
      lernziele: [
        "Die vier Bindungspartner des Kohlenstoffs und die Strukturvielfalt durch Katenation erklären können",
        "Allotrope des Kohlenstoffs (Diamant, Graphit, Fulleren, Graphen) und ihre Eigenschaften ableiten",
        "CO₂ und CO als medizinisch relevante anorganische C-Verbindungen charakterisieren",
        "Das Bicarbonat-Puffersystem und Henderson-Hasselbalch berechnen und interpretieren können",
        "Acetyl-CoA als zentrale metabolische Schnittstelle benennen",
      ],
      content: `## Kohlenstoff — das Element des Lebens


Kohlenstoff (C, Atomnr. 6, Elektronenkonfiguration [He] 2s² 2p²) kann mit seinen **vier Valenzelektronen** vier kovalente Bindungen eingehen. Zusammen mit der Fähigkeit zur **Katenation** (Verkettung von C-Atomen zu Ketten, Ringen und Verzweigungen) entsteht eine nahezu unbegrenzte strukturelle Vielfalt — die Grundlage der gesamten organischen Chemie.

**Hybridisierungstypen und ihre Geometrie:**

| Hybridisierung | Geometrie | Winkel | Beispiele |
|---|---|---|---|
| sp³ | Tetraeder | 109,5° | CH₄, C₂H₆, Diamant |
| sp² | Trigonal-planar | 120° | C₂H₄ (Ethen), Graphit, Benzol |
| sp | Linear | 180° | CO₂, C₂H₂ (Ethin), HCN |

Die C-C-Einfachbindung hat eine Bindungsenergie von ~347 kJ/mol und eine Länge von 154 pm. C=C: ~614 kJ/mol, 134 pm. C≡C: ~839 kJ/mol, 120 pm. Die hohe Stabilität und kinetische Inertheit der C-C-Bindung gegenüber Hydrolyse macht Kohlenstoff zum bevorzugten Gerüstelement des Lebens.

> **Merke:** Kohlenstoff: 4 Valenzelektronen → tetravalent → Katenation + drei Hybridisierungstypen → enorme Strukturvielfalt.

## Allotrope des Kohlenstoffs

Kohlenstoff kommt in mehreren Allotropen (verschiedene Strukturformen desselben Elements) vor, deren Eigenschaften sich dramatisch unterscheiden — allein durch die Hybridisierung:

**Diamant (sp³):** Dreidimensionales Tetraedernetzwerk — härtestes natürliches Material (Mohs 10), elektrischer Isolator (alle 4 Valenzelektronen in σ-Bindungen lokalisiert), transparent, höchste Wärmeleitfähigkeit. Bindungslänge C-C: 154 pm. Thermodynamisch metastabil (Graphit ist stabiler; ΔG°f = +2,9 kJ/mol), aber Umwandlung kinetisch gehemmt.

**Graphit (sp²):** Planare hexagonale Schichten mit delokalisiertem π-System — guter elektrischer Leiter parallel zur Schicht (mobile π-Elektronen), weich senkrecht dazu (nur Van-der-Waals zwischen Schichten, 3,35 Å Abstand), schwarz-glänzend. C-C in Ebene: 142 pm. Verwendung: Elektroden, Schmiermittel, Bleistiftminen.

**Graphen:** Einzelne Graphitschicht — außergewöhnliche elektrische Leitfähigkeit, 200× zugfester als Stahl, transparent. Nobelpreis Physik 2010 (Geim, Novoselov). Potenzielle Anwendungen: flexible Elektronik, Biosensoren, Wasserfilter.

**Fullerene (C₆₀, „Buckyballs"):** Sphärische Käfige aus 12 Fünf- und 20 Sechsringen. Potenzielle Nanomedizin-Anwendungen (Wirkstofftransport, freie-Radikal-Fänger).

## CO₂ — Kohlenstoffdioxid

CO₂ ist **sp-hybridisiert** (linear, 180°) und apolar (die beiden C=O-Dipole kompensieren sich, Gesamtdipolmoment = 0). CO₂ entsteht als Endprodukt der aeroben Zellatmung und reagiert im Blut mit Wasser — katalysiert durch **Carboanhydrase** (Zn²⁺-haltiges Enzym, eines der schnellsten, kcat ~10⁶ s⁻¹):

**CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺**

Das Bicarbonat-Puffersystem hält den Blut-pH bei 7,4. Rechenbeispiel (Henderson-Hasselbalch):
pH = pKa + log([HCO₃⁻] / [H₂CO₃]) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,3 = **7,4**

**CO₂-Transport im Blut** erfolgt über drei Wege:
- ~70 % als HCO₃⁻ (via Chloride-Shift durch Band-3-Protein ins Plasma)
- ~23 % als Carbaminohämoglobin (CO₂ kovalent an NH₂-Gruppen des Hb gebunden)
- ~7 % physikalisch gelöst

Bei Hypoventilation (verminderte Atmung) steigt CO₂ → pH sinkt (respiratorische Azidose); bei Hyperventilation (gesteigerte Atmung) sinkt CO₂ → pH steigt (respiratorische Alkalose).

> **Merke:** pH_Blut = 6,1 + log(24/1,2) = 7,4. Lunge reguliert CO₂ (schnell), Niere reguliert HCO₃⁻ (langsam).

## CO — Kohlenstoffmonoxid

CO ist farb-, geruch- und geschmacklos — **extrem toxisch**. Es bindet an Hämoglobin mit **250× höherer Affinität** als O₂ und bildet Carboxyhämoglobin (HbCO). HbCO kann kein O₂ transportieren (funktionelle Anämie). Zusätzlich verschiebt CO die O₂-Bindungskurve nach links → O₂-Abgabe ans Gewebe praktisch unmöglich → histotoxische Hypoxie (Gewebserstickung trotz O₂-Angebot). CO hemmt auch Cytochrom-c-Oxidase (Komplex IV der Atmungskette).

**Klinische Zeichen:** Kopfschmerz, Schwindel, Übelkeit; kirschrote Haut (HbCO — Spätzeichen). Diagnose: Co-Oximetrie (spektralphotometrische Hb-Analyse).

**Behandlung:** 100 % O₂ (Verdrängung durch Massenwirkungsgesetz); hyperbar (Überdruckkammer) bei schwerer Vergiftung. HWZ von HbCO: ~300 min (Raumluft), ~60 min (100 % O₂), ~20 min (hyperbar).

## Carbonate und Metabolismus


**CaCO₃ (Calciumcarbonat)** bildet zusammen mit Hydroxylapatit die mineralische Matrix der Knochen und Zähne. CaCO₃ findet sich auch in Marmor, Kalkstein und Muschelschalen.

Metabolisch zentrale Kohlenstoffverbindungen:
- **Pyruvat:** Endprodukt der Glykolyse (Zuckerabbau) → PDH-Komplex (Pyruvatdehydrogenase, irreversibel) → Acetyl-CoA
- **Acetyl-CoA** (aktivierte Essigsäure)**:** Zentrale Schnittstelle — Glykolyse, β-Oxidation (Fettsäureabbau), Aminosäureabbau → Zitratzyklus
- **Citrat:** Erster Metabolit im Zitratzyklus; allosterischer Inhibitor der PFK-1 (Phosphofructokinase-1, Schlüsselenzym der Glykolyse)
- **Malonyl-CoA:** Substrat der Fettsäuresynthese; inhibiert CPT-1 (Carnitin-Palmitoyltransferase 1, blockiert Fettsäure-Import ins Mitochondrium)

> **Merke:** Acetyl-CoA = Drehkreuz des Energiestoffwechsels — Glykolyse, β-Oxidation und Aminosäureabbau münden hier ein.

> **Prüfungstipp:** CO₂-Hybridisierung (sp, linear, apolar) und CO-Toxizität (250× Affinität zu Hb) sind häufige MedAT-Fragen. Henderson-Hasselbalch mit den Blut-Normalwerten (pH 7,4 = 6,1 + log(24/1,2)) muss sicher sitzen.`,
      sections: [
        {
          heading: "Allotrope des Kohlenstoffs",
          text: "Im Diamant sind alle C-Atome sp³-hybridisiert — 3D-Netzwerk, härtestes Mineral, Isolator. Im Graphit sind C-Atome sp²-hybridisiert — planare Schichten mit delokalisiertem π-System, elektrisch leitfähig, weich. Graphen (Einzelschicht) und Fullerene (Käfige) ergänzen die Familie. Die Hybridisierung bestimmt alle Eigenschaften vollständig.",
          merksatz:
            "Diamant = sp³ = hart + Isolator; Graphit = sp² = weich + Leiter — gleiche Atome, völlig verschiedene Eigenschaften durch Hybridisierung.",
        },
        {
          heading: "CO₂ und das Bicarbonat-Puffersystem",
          text: "CO₂ aus dem Zitratzyklus wird in Erythrozyten durch Carboanhydrase zu HCO₃⁻ umgewandelt und via Chloride-Shift ins Plasma transportiert (~70 % des CO₂). Henderson-Hasselbalch: pH = 6,1 + log(24/1,2) = 7,4. Die Lunge reguliert CO₂ (schnell), die Niere reguliert HCO₃⁻ (langsam). Carboanhydrase-Hemmer (Acetazolamid) erhöhen HCO₃⁻-Ausscheidung: Glaukom-Therapie, Höhenkrankheit.",
          merksatz:
            "pH_Blut = 6,1 + log(HCO₃⁻/H₂CO₃) = 6,1 + log(24/1,2) = 7,4 — Henderson-Hasselbalch für das Bicarbonat-Puffersystem.",
        },
        {
          heading: "CO — Toxizität und Mechanismus",
          text: "CO bindet 250× stärker an Hb als O₂, bildet HbCO → kein O₂-Transport. Linksverschobene O₂-Bindungskurve → auch das restliche Hb gibt weniger O₂ ab. CO hemmt zudem Komplex IV der Atmungskette. Farb- und geruchlos → heimtückisch. Antidot: 100 % O₂ (Verdrängung des CO durch Massenwirkungsgesetz); hyperbar bei schwerer Vergiftung.",
          merksatz:
            "CO-Affinität zu Hb: 250× > O₂ → HbCO = funktionell nutzloses Hämoglobin; Antidot: 100 % O₂ (oder hyperbar).",
        },
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
        "Acetyl-CoA: zentrale metabolische Schnittstelle — Glykolyse, β-Oxidation und Zitratzyklus",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Rolle von CO₂ im menschlichen Blut: Transport, chemische Gleichgewichte und Bedeutung für die pH-Regulation.",
        answer: `CO₂ entsteht als Hauptprodukt der aeroben Zellatmung (oxidative Decarboxylierungen im Zitratzyklus). Im Gewebe diffundiert CO₂ in Erythrozyten, wo Carboanhydrase (kcat ~10⁶ s⁻¹) es blitzschnell zu HCO₃⁻ umwandelt: CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺. Das HCO₃⁻ wird via Chloride-Shift (Band-3-Protein, Anionenaustauscher) ins Plasma transportiert. Transport: ~70 % als HCO₃⁻, ~23 % als Carbaminohämoglobin, ~7 % physikalisch gelöst.

In der Lunge kehrt der Prozess um: niedriger alveolarer pCO₂ lässt CO₂ aus dem Blut in die Alveole diffundieren; Carboanhydrase katalysiert HCO₃⁻ + H⁺ → CO₂ + H₂O, und CO₂ wird ausgeatmet.

Das Bicarbonat-Puffersystem (pKa = 6,1) hält arteriellen Blut-pH bei 7,40: pH = 6,1 + log(24 mmol/L / 1,2 mmol/L) = 7,4. Bei COPD (Hypoventilation) steigt pCO₂ → respiratorische Azidose; renale Kompensation durch erhöhte HCO₃⁻-Rückresorption (Tage). Bei diabetischer Ketoazidose sinkt HCO₃⁻ → metabolische Azidose; Kompensation durch Hyperventilation (Kussmaul-Atmung) → CO₂ ↓ → pH ↑.`,
      },
      klinischerBezug:
        "CO-Vergiftung durch defekte Heizungen ist häufiger Vergiftungsnotfall; charakteristisches Kirschrot der Haut (HbCO) ist ein Spätzeichen — Diagnose durch Co-Oximetrie im arteriellen Blutgastest. Das Bicarbonat-Puffersystem ist Grundlage der Blutgasanalyse (pH, pCO₂, HCO₃⁻) zur Diagnose von Azidosen/Alkalosen bei kritisch kranken Patienten. Carboanhydrase-Hemmer wie Acetazolamid (Diamox) erhöhen HCO₃⁻-Ausscheidung — Einsatz bei Glaukom, Höhenkrankheit und als mildes Diuretikum.",
      selfTest: [
        {
          question:
            "Warum kann Diamant Strom nicht leiten, obwohl Graphit — aus demselben Element — ein guter Leiter ist?",
          options: [
            "Diamant ist kristallin und Graphit ist amorph; amorphe Materialien leiten besser",
            "Diamant enthält mehr C-Atome pro Volumen und ist daher dichter mit gebundenen Elektronen",
            "Im Diamant sind alle vier Valenzelektronen in sp³-σ-Bindungen lokalisiert; im Graphit sind die p-Elektronen delokalisiert und mobil",
            "Graphit hat metallische Verunreinigungen, die die Leitfähigkeit erklären",
            "Diamant reflektiert Licht total und lässt daher keinen Elektronenfluss zu",
          ],
          correctIndex: 2,
          explanation:
            "Im Diamant (sp³) sind alle vier Valenzelektronen in gerichteten σ-Bindungen zu vier Nachbarn gebunden — keine freien Elektronen → Isolator. Im Graphit (sp²) bilden drei Elektronen σ-Bindungen in der Ebene; das vierte p-Elektron (senkrecht zur Schicht) delokalisiert über das π-System der gesamten Schicht. Diese delokalisierten π-Elektronen sind frei beweglich → elektrische Leitfähigkeit parallel zur Schichtebene (anisotrop: senkrecht zur Schicht ist Graphit schlechter Leiter, nur Van-der-Waals zwischen Schichten). Hybridisierung ist der Schlüssel: sp³ vs. sp².",
          hints: [
            "Elektrische Leitfähigkeit erfordert mobile Elektronen. Sind alle Elektronen im Diamant in festen Bindungen gebunden?",
            "Im Graphit ist das 4. Valenzelektron nicht in einer σ-Bindung — wo ist es, und kann es sich bewegen?",
          ],
          difficulty: 2,
          tags: ["diamant", "graphit", "hybridisierung-leitfähigkeit"],
        },
        {
          question:
            "COPD-Patient hat pCO₂ = 60 mmHg (normal 40 mmHg). Welche Kompensation erwartet man?",
          options: [
            "Hyperventilation, um CO₂ zu eliminieren und den pH zu senken",
            "Erhöhte Cl⁻-Ausscheidung durch die Nieren, um den Chloride-Shift rückgängig zu machen",
            "Erhöhte CO₂-Produktion im Zitratzyklus, um den pCO₂ weiter zu senken",
            "Renale Rückresorption von HCO₃⁻, um den pH zu heben und die Azidose zu kompensieren",
            "Verminderte Erythropoiese, um den Hb-gebundenen CO₂-Anteil zu reduzieren",
          ],
          correctIndex: 3,
          explanation:
            "Erhöhter pCO₂ durch unzureichende Ventilation (COPD) führt zu respiratorischer Azidose: CO₂ + H₂O → HCO₃⁻ + H⁺ → pH sinkt. Renale Kompensation (langsam, Tage): (1) Tubulusepithelzellen sezernieren mehr H⁺ ins Lumen, (2) verstärkte HCO₃⁻-Rückresorption, (3) erhöhte NH₄⁺-Produktion als H⁺-Puffer. Dies erhöht [HCO₃⁻] im Blut → pH hebt sich Richtung 7,4. Klinisch: erhöhtes HCO₃⁻ (>26 mmol/L) und pH nahe 7,4 trotz hohem pCO₂. Hyperventilation wäre Kompensation bei metabolischer Azidose — bei COPD strukturell nicht möglich.",
          hints: [
            "Hoher pCO₂ → mehr H⁺ → pH sinkt (Azidose). Welches Organ kompensiert über HCO₃⁻-Rückresorption?",
            "Bei respiratorischer Azidose ist die Lunge beeinträchtigt — welches andere Organ übernimmt die Kompensation?",
          ],
          difficulty: 3,
          tags: ["copd", "respiratorische-azidose", "renale-kompensation"],
        },
        {
          question:
            "Warum ist CO in kleinen Mengen lebensgefährlich, obwohl es kein ätzend-korrosives Gas ist?",
          options: [
            "CO löst sich in Wasser zu Kohlensäure und senkt den Blut-pH drastisch",
            "CO zerstört Surfactant in den Alveolen und verhindert den Gasaustausch",
            "CO hemmt die Carboanhydrase irreversibel und verhindert CO₂-Transport",
            "CO ist radioaktiv und schädigt direkt die DNA in Knochenmarkzellen",
            "CO bindet ~250× stärker als O₂ an Hämoglobin und verschiebt die O₂-Bindungskurve nach links — Gewebeerstickung trotz ausreichend Hämoglobin",
          ],
          correctIndex: 4,
          explanation:
            "CO bindet an Hämoglobin mit 250-fach höherer Affinität als O₂ → HbCO. HbCO kann kein O₂ transportieren (funktionelle Anämie). Zusätzlich bewirkt CO den umgekehrten kooperativen Effekt: verbleibende Hb-Untereinheiten binden O₂ mit höherer Affinität (linksverschobene O₂-Bindungskurve) → O₂-Abgabe ans Gewebe fast unmöglich → histotoxische Hypoxie. CO hemmt auch direkt Cytochrom-c-Oxidase (Komplex IV). Bei chronischer Exposition: Kopfschmerz, Schwindel — oft mit Grippe verwechselt. Antidot: 100 % O₂ oder Hyperbar-O₂, um CO vom Hb zu verdrängen.",
          hints: [
            "Was passiert, wenn HbCO gebildet wird? Kann dieses Hämoglobin noch Sauerstoff binden?",
            "Hämoglobin hat 4 Untereinheiten (kooperativ). Was passiert mit den restlichen, wenn CO an eine bindet?",
          ],
          difficulty: 2,
          tags: ["co-vergiftung", "hbco", "o2-bindungskurve"],
        },
        {
          question:
            "Berechnen Sie den pH für [HCO₃⁻] = 24 mmol/L, [H₂CO₃] = 1,2 mmol/L (pKa = 6,1).",
          options: ["pH = 7,4", "pH = 6,1", "pH = 5,1", "pH = 7,0", "pH = 8,0"],
          correctIndex: 0,
          explanation:
            "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,301 ≈ 7,4. Das physiologische Verhältnis [HCO₃⁻]/[H₂CO₃] = 20:1. Azidose: pH < 7,35 (Verhältnis sinkt unter ~15:1); Alkalose: pH > 7,45 (Verhältnis über ~25:1). Das Puffersystem ist effektiv als offenes System — Lunge reguliert CO₂ schnell, Niere reguliert HCO₃⁻ langsam — trotz eines pKa von 6,1, der weit vom Blut-pH entfernt ist.",
          hints: [
            "Henderson-Hasselbalch: pH = pKa + log([Base]/[Säure]). Wer ist Base (HCO₃⁻), wer ist Säure (H₂CO₃)?",
            "log(20) = log(2 × 10) = log 2 + log 10 = 0,301 + 1 = 1,301. Wie lautet 6,1 + 1,301?",
          ],
          difficulty: 2,
          tags: ["henderson-hasselbalch", "bicarbonat-puffer", "ph-rechnen"],
        },
        {
          question: "Aus welchen ZWEI katabolen Wegen stammt Acetyl-CoA hauptsächlich?",
          options: [
            "Harnstoffzyklus und Gluconeogenese",
            "Glykolyse (über Pyruvat-Dehydrogenase) und β-Oxidation von Fettsäuren",
            "Pentose-Phosphat-Weg und Citratzyklus",
            "Transamination von Aminosäuren und Nukleotidabbau",
            "Photosynthese und anaerobe Gärung",
          ],
          correctIndex: 1,
          explanation:
            "Acetyl-CoA ist das Drehkreuz des Energiemetabolismus. Zwei Hauptquellen: (1) Glykolyse → Pyruvat → Pyruvat-Dehydrogenase-Komplex (PDH, irreversibel): Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH. Irreversibel: kein Rückweg Acetyl-CoA → Pyruvat → Glukose. (2) β-Oxidation von Fettsäuren: Schrittweiser Abbau im Mitochondrium zu Acetyl-CoA-Einheiten. Acetyl-CoA kondensiert dann mit Oxalacetat zu Citrat (Eintritt Zitratzyklus), oder dient als Baustein für Ketonkörper (Hungermetabolismus) und Cholesterinsynthese.",
          hints: [
            "Was ist das Endprodukt der Glykolyse, und welches Enzym verbindet es mit dem Zitratzyklus?",
            "Fettsäuren werden im Mitochondrium zu 2-Kohlenstoff-Einheiten abgebaut — welcher Weg ist das?",
          ],
          difficulty: 2,
          tags: ["acetyl-coa", "glykolyse", "beta-oxidation"],
        },
        {
          question: "Welche Hybridisierung hat CO₂ und welche geometrische Konsequenz ergibt sich?",
          options: [
            "sp³-Hybridisierung → gewinkelte Geometrie wie Wasser, polar",
            "sp²-Hybridisierung → trigonal-planare Geometrie, leicht polar",
            "sp-Hybridisierung → lineare Geometrie (O=C=O, 180°), apolares Molekül",
            "sp³d-Hybridisierung → trigonal-bipyramidale Geometrie",
            "Keine Hybridisierung → ionisches Molekül, wasserlöslich als CO₂²⁻",
          ],
          correctIndex: 2,
          explanation:
            "Im CO₂ ist C sp-hybridisiert: Zwei sp-Orbitale bilden σ-Bindungen zu den O-Atomen (180°, linear). Zwei verbleibende p-Orbitale bilden je eine π-Bindung → zwei C=O-Doppelbindungen. Das Molekül ist perfekt linear: O=C=O. Obwohl jede C=O-Bindung polar ist, kompensieren sich die zwei entgegengesetzten gleich großen Dipole → Gesamtdipolmoment = 0 → apolares Molekül. Trotzdem ist CO₂ Treibhausgas, weil seine asymmetrische Streckschwingung und Biegeschwingung Infrarotstrahlung absorbieren.",
          hints: [
            "CO₂ hat zwei C=O-Doppelbindungen, keine freien Elektronenpaare am C. Zwei Bindungspartner → welche Hybridisierung?",
            "Wenn ein Molekül symmetrisch ist (O=C=O), heben sich Bindungsdipole auf — ist das Molekül polar oder apolar?",
          ],
          difficulty: 2,
          tags: ["co2", "sp-hybridisierung", "linear-apolar"],
        },
        {
          question:
            "Welches Element zeigt ebenfalls Katenation, jedoch in weit geringerem Ausmaß als Kohlenstoff?",
          options: [
            "Schwefel (S) — S₈-Ringe und Polysulfidketten sind häufiger als C-Ketten",
            "Stickstoff (N) — N-N-Bindungen in Hydrazin und Diazenen sind stabil",
            "Sauerstoff (O) — Peroxide (O-O-Bindungen) ermöglichen kettenartige Strukturen",
            "Silizium (Si) — vier Valenzelektronen, Si-Si-Bindungen sind aber schwächer und hydrolysieren leicht",
            "Chlor (Cl) — Polychlorverbindungen sind kettenartig",
          ],
          correctIndex: 3,
          explanation:
            "Kohlenstoff: C-C-Bindungsenergie ~347 kJ/mol (stabil, kinetisch inert gegenüber Hydrolyse) → Millionen organischer Verbindungen. Silizium (Periode 3, Gruppe 14, ebenfalls 4 Valenzelektronen): Si-Si-Bindung ~226 kJ/mol, schwächer und kinetisch anfällig gegen Hydrolyse (Si reagiert mit OH⁻ leichter als C). Silane (SiₙH₂ₙ₊₂) sind die Analoga zu Alkanen, zersetzen sich aber an Luft. Schwefel bildet bemerkenswert lange Ketten (S₈, Polysulfide), aber nicht die strukturelle Vielfalt des Kohlenstoffs. Die einzigartige Kombination aus Bindungsstärke und kinetischer Stabilität macht C zum Grundbaustein des Lebens.",
          hints: [
            "Welches Element steht direkt unter Kohlenstoff im Periodensystem mit ebenfalls vier Valenzelektronen?",
            "Warum sind C-C-Bindungen so stabil? Denke an Bindungsenergie und kinetische Inertheit gegenüber Hydrolyse.",
          ],
          difficulty: 3,
          tags: ["katenation", "silizium", "c-c-bindung"],
        },
      ],
    },
    {
      id: "ch-9-03",
      title: "Stickstoff, Schwefel und Halogene",
      stichworte: [
        "Haber-Bosch-Prozess",
        "NO Stickstoffmonoxid",
        "Nitrogenase",
        "Disulfidbrücken",
        "H₂S Toxizität",
        "Kontaktverfahren H₂SO₄",
        "Halogene Oxidationskraft",
        "Fluorapatit Kariesprophylaxe",
        "Iod Schilddrüse T3 T4",
        "Königswasser",
        "Salpetersäure HNO₃",
      ],
      lernziele: [
        "Die industrielle Bedeutung des Stickstoffs (Haber-Bosch) und seine Rolle in Aminosäuren und Nukleotiden erklären",
        "Schwefelverbindungen (H₂S, SO₂, SO₃, H₂SO₄) beschreiben; Schwefel in biologischen Molekülen benennen",
        "Die Halogene F, Cl, Br, I in Bezug auf Oxidationspotenzial, biologische Rolle und medizinische Anwendungen charakterisieren",
        "Salpeter- und Schwefelsäure als Industriesäuren und ihre Reaktionen darstellen",
        "Die medizinische Bedeutung von Iod (Schilddrüse), Chlor (Desinfektion) und Fluor (Kariesprophylaxe) erläutern",
      ],
      content: `## Stickstoff (N) — das häufigste Atmosphärengas


Stickstoff macht **78 % der Erdatmosphäre** aus und ist damit das häufigste Gas. Das N₂-Molekül besitzt eine Dreifachbindung (N≡N, 945 kJ/mol — eine der stärksten Bindungen überhaupt) und ist daher extrem reaktionsträge. Stickstoff ist Bestandteil aller Aminosäuren, Nukleotide und zahlreicher Cofaktoren — ein unverzichtbares Bioelement.

**Stickstoffixierung — zwei Wege:**
- **Biologisch:** Nitrogenase (Rhizobien [stickstofffixierende Bakterien] in Leguminosen-Wurzelknöllchen [Hülsenfrüchtler]): N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2 NH₃ + H₂ + 16 ADP + 16 Pi. Der hohe ATP-Verbrauch spiegelt die Aktivierungsenergie wider, die zum Brechen der N≡N-Bindung nötig ist.
- **Industriell (Haber-Bosch):** N₂ + 3 H₂ ⇌ 2 NH₃; 400–500 °C, 150–300 bar, Fe/K₂O/Al₂O₃-Katalysator; ~15–25 % Gleichgewichtsausbeute (Kompromiss zwischen Kinetik und Thermodynamik nach Le Chatelier). Versorgt ~50 % der Weltbevölkerung mit Stickstoffdünger — die wichtigste chemische Reaktion der Menschheitsgeschichte.

> **Merke:** Haber-Bosch-Kompromiss: Exotherme Reaktion (ΔH = −92 kJ/mol) + Volumenabnahme (4 → 2 mol Gas) → niedrige T und hoher Druck begünstigen NH₃, aber niedrige T macht Reaktion zu langsam → 400–500 °C + 150–300 bar + Fe-Katalysator.

**NO (Stickstoffmonoxid):** Endogener Signalstoff, gebildet aus L-Arginin durch **NO-Synthase (NOS)** in drei Isoformen (nNOS/neuronal, eNOS/endothelial, iNOS/induzierbar). NO aktiviert lösliche Guanylatzyklase (Enzym zur cGMP-Synthese) → cGMP ↑ (zyklisches Guanosinmonophosphat, Second Messenger) → Proteinkinase G → Vasodilatation (Gefäßerweiterung) der glatten Muskulatur. Pharmazeutisch: Glycerintrinitrat (Nitroglyzerin) → NO → Antiangina-Therapie (Koronargefäßerweiterung, Vorlastsenkung). PDE5-Hemmer (Phosphodiesterase-5-Hemmer; Sildenafil, Tadalafil) hemmen cGMP-Abbau → Verstärkung des NO-Effekts → Einsatz bei erektiler Dysfunktion und pulmonaler arterieller Hypertonie.

**NH₃ (Ammoniak):** Pyramidale Geometrie (sp³, Bindungswinkel 107°), stark riechend. Im Blut toxisch als NH₄⁺: stört Glutamat/GABA-Gleichgewicht im ZNS. Entgiftung im **Harnstoffzyklus** (Stoffwechselweg der Leber zur NH₃-Entsorgung): 2 NH₃ + CO₂ + 3 ATP → Harnstoff (H₂N-CO-NH₂) + H₂O + 3 ADP. Leberversagen → Hyperammonämie (erhöhter Blut-Ammoniak) → hepatische Enzephalopathie (Bewusstseinsstörungen, Asterixis [Flapping Tremor]).

**Salpetersäure (HNO₃):** Starke Säure (pKa ≈ −1,4) + starkes Oxidationsmittel (N in OZ +5). Konz. HNO₃ + Metall → NO₂ (braunes Gas, N: +4); verd. HNO₃ + Metall → NO (farbloses Gas, N: +2). **Königswasser:** 3 HCl + 1 HNO₃ → löst Au und Pt durch Bildung von [AuCl₄]⁻- und [PtCl₆]²⁻-Komplexen. Fe und Al werden durch konz. HNO₃ **passiviert** (schützende Oxidschicht).

**Stickstoffoxide — Übersicht:**

| Formel | Name | OZ von N | Eigenschaft | Medizinische Relevanz |
|---|---|---|---|---|
| N₂O | Distickstoffmonoxid (Lachgas) | +1 | Farbloses, süßlich riechendes Gas | Inhalationsanästhetikum (Analgesie, Sedierung) |
| NO | Stickstoffmonoxid | +2 | Farbloses Gas, radikal | Endogener Vasodilatator (cGMP-Signalweg) |
| NO₂ | Stickstoffdioxid | +4 | Braunes, giftiges Gas | Luftschadstoff, Reizgas → Lungenödem |
| N₂O₅ | Distickstoffpentoxid | +5 | Weißer Feststoff | Anhydrid der Salpetersäure |

**Stickstoff-Kreislauf — biologisch und klinisch:**
- **Fixierung:** N₂ → NH₃ (Nitrogenase oder Haber-Bosch)
- **Nitrifikation:** NH₃ → NO₂⁻ → NO₃⁻ (Nitrosomonas, Nitrobacter)
- **Assimilation:** NO₃⁻ → Aminosäuren → Proteine (Pflanzen, über Nahrungskette → Mensch)
- **Denitrifikation:** NO₃⁻ → N₂ (anaerobe Bakterien) — schließt den Kreislauf
- **Klinisch:** Nitrat im Trinkwasser → Nitrit (Bakterien im Darm) → Methämoglobin (Fe³⁺ statt Fe²⁺ im Hämoglobin) → keine O₂-Bindung → **Methämoglobinämie** (Blausucht, besonders gefährlich bei Säuglingen: „Blue-Baby-Syndrom")

> **Merke:** Stickstoff ist zentral für Aminosäuren, Nukleotide, Harnstoff, Kreatinin und NO-Signaling. N₂ ist extrem inert (N≡N, 945 kJ/mol) — biologische Fixierung durch Nitrogenase ist energetisch aufwendig (16 ATP).

---

## Schwefel (S) — das Bio-Element

Schwefel (Atomnr. 16, Gruppe 16) ist ein essenzielles Bioelement. Es kommt in zwei der 20 proteinogenen Aminosäuren vor:
- **Methionin:** Thioether (−S−, Schwefel zwischen zwei C-Atomen), Methyl-Donor als S-Adenosylmethionin (SAM)
- **Cystein:** Thiol (−SH), bildet **Disulfidbrücken** (Cys–S–S–Cys) durch Oxidation

Disulfidbrücken stabilisieren die Tertiär- und Quartärstruktur von Proteinen (Antikörper, Insulin mit 3 S-S-Brücken, Keratin im Haar). **Coenzym A** trägt eine −SH-Gruppe als reaktives Zentrum für Acylübertragungen (Acetyl-CoA, Malonyl-CoA).

**H₂S (Schwefelwasserstoff):** Faulende-Eier-Geruch bei niedrigen Konzentrationen (0,01–10 ppm); ab **~100 ppm Geruchslähmung** (Olfaktorius-Paralyse) — extrem tückisch, weil die Warnung durch Geruch wegfällt! Hemmt **Cytochrom-c-Oxidase (Komplex IV)** analog zu HCN → histotoxische Hypoxie → Bewusstlosigkeit, Atemstillstand. Tückisch in Güllekellern und Kanalschächten. Endogen wirkt H₂S in niedrigen Konzentrationen vasodilatatorisch (gasförmiger Signalstoff neben NO und CO).

**SO₂ (Schwefeldioxid):** Reizgas, Luftschadstoff (saurer Regen: SO₂ + H₂O → H₂SO₃, weiter zu H₂SO₄). **Saurer Regen** wird am meisten durch **HNO₃** (Stickoxide aus Verbrennung) und **H₂SO₄** (Schwefeloxide) verursacht. SO₂ ist Konservierungsmittel (E220), **Asthmaprovokator** bei empfindlichen Personen.

**H₂SO₄ (Schwefelsäure) — Kontaktverfahren:** Mengenmäßig wichtigste Industriechemikalie (~250 Mio. t/Jahr weltweit):
1. S + O₂ → SO₂ (Schwefelverbrennung oder Pyrit-Röstung)
2. 2 SO₂ + O₂ → 2 SO₃ (V₂O₅-Katalysator, 400–600 °C; >98 % Ausbeute)
3. SO₃ + konz. H₂SO₄ → Oleum (H₂S₂O₇) — nicht direkt + H₂O (Aerosol-Problem!)
4. Oleum + H₂O → 2 H₂SO₄

pKa1 <<0 (starke erste Stufe), pKa2 ≈ 1,99. Konzentrierte H₂SO₄ ist **hygroskopisch** und **dehydratisierend** (karbonisiert Zucker zu schwarzem Kohlenstoff, verursacht schwere Verätzungen).

**Schwefel in der Medizin — klinische Bezüge:**
- **Glutathion (GSH):** Tripeptid (γ-Glu-Cys-Gly) mit freier −SH-Gruppe → wichtigstes intrazelluläres Antioxidans; GSH-Peroxidase reduziert H₂O₂ und Lipidperoxide; Paracetamol-Überdosis → GSH-Depletion → Lebernekrose (Antidot: N-Acetylcystein liefert Cystein für GSH-Resynthese)
- **Sulfonamide:** Strukturanaloga der p-Aminobenzoesäure (PABA) → hemmen Folsäuresynthese in Bakterien → Antibiotika (historisch erste Antibiotika vor Penicillin)
- **Thiopental:** Schwefelanaloges Barbiturat → ultrakurz wirksames Narkotikum (Einleitung der Allgemeinanästhesie)
- **α-Liponsäure:** Enthält Dithiolan-Ring (zyklisches Disulfid) → Cofaktor der Pyruvat-Dehydrogenase und α-Ketoglutarat-Dehydrogenase

| Schwefelverbindung | Biologische Rolle | Klinische Relevanz |
|---|---|---|
| Cystein (−SH) | Disulfidbrücken, Redox-Puffer | Antioxidans (NAC als Mukolytikum/Antidot) |
| Methionin (−S−) | SAM → Methylierung (DNA, Proteine) | Homocystein-Akkumulation → Atherosklerose |
| Coenzym A (−SH) | Acetyl-CoA, Fettsäuresynthese | Pantothenat (B₅)-Mangel → CoA ↓ |
| Glutathion (GSH) | Entgiftung, Redox-Puffer | Paracetamol-Vergiftung → GSH-Depletion |
| Biotin (S-haltig) | Carboxylasen (Fettsäure-, Gluconeogenese) | Biotinidase-Mangel → Neugeborenenscreening |
| Thiamin (B₁, Thiazol) | Pyruvat-Dehydrogenase, Transketolase | Wernicke-Enzephalopathie bei B₁-Mangel |

> **Merke:** Schwefel ist essenziell für Redox-Biochemie (Disulfidbrücken, Glutathion, CoA) und Methylierung (SAM). Klinisch relevant: NAC bei Paracetamol-Vergiftung liefert Cystein für GSH-Resynthese.

---

## Halogene — Gruppe 17


Die Halogene (F, Cl, Br, I) sind starke Oxidationsmittel mit abnehmender Oxidationskraft von oben nach unten:

| Halogen | E° (V) | Aggregatzustand (RT) | Medizinische Relevanz |
|---|---|---|---|
| F₂ | +2,87 | Gas (hellgelb) | Fluorapatit → Kariesprophylaxe |
| Cl₂ | +1,36 | Gas (gelbgrün) | Desinfektion (HClO), Magensäure (HCl) |
| Br₂ | +1,07 | Flüssigkeit (braun) | Bromide als Sedativa (historisch) |
| I₂ | +0,54 | Feststoff (sublimiert violett) | Schilddrüsenhormone T₃/T₄ |

**Fluor (F):** Elektronegativstes Element aller (EN = 3,98 nach Pauling). F₂ ist so reaktiv, dass es fast alle Elemente direkt angreift — sogar Edelgase (XeF₂, XeF₄). F⁻ ersetzt OH⁻ in Hydroxylapatit → **Fluorapatit** (Ca₁₀(PO₄)₆F₂) — säurefester als Hydroxylapatit (pH < 4,5 statt < 5,5 für Demineralisierung) → **Kariesprophylaxe**. Fluorose (weiße Flecken bis Braunverfärbung) bei chronischer Überversorgung (>2 mg/Tag über Jahre). Fluorid in der Medizin: **Natriumfluorid (NaF)** in Zahnpasta (1000–1500 ppm F⁻), fluoridiertes Trinkwasser (0,7–1,2 mg/L), Fluoridlack beim Zahnarzt. **PET-Diagnostik:** ¹⁸F-Fluordesoxyglucose (¹⁸F-FDG) als Radiotracer — Tumorzellen mit hoher Glykolyserate reichern ¹⁸F-FDG an.

**Chlor (Cl):** Cl₂ + H₂O → HCl + HClO (Hypochlorige Säure) → starkes Oxidationsmittel → **Desinfektion** (Trinkwasser, Schwimmbäder, Wundreinigung). NaOCl = Bleichmittel (Eau de Javel). Cl⁻ ist das wichtigste extrazelluläre Anion (~105 mmol/L) und essenziell für die HCl-Produktion in Belegzellen des Magens (pH ≈ 1–2). Weitere Cl-Verbindungen: **PVC** (Polyvinylchlorid) — medizinische Schläuche, Blutbeutel. **Chloramin-T** — Desinfektionsmittel in der Endodontie. Cl⁻-Kanäle: **CFTR** (Cystic Fibrosis Transmembrane Conductance Regulator) — Defekt → Mukoviszidose (zähflüssiger Schleim in Lunge und Pankreas; häufigste autosomal-rezessive Erbkrankheit bei Kaukasiern, ~1:2500).

**Brom (Br):** Einziges flüssiges Nichtmetall bei Raumtemperatur (neben Hg als flüssigem Metall). Br₂ ist stark ätzend und erzeugt braune Dämpfe. Historisch: **Kaliumbromid (KBr)** als Sedativum und Antikonvulsivum (19. Jahrhundert). Heute: **Ethidiumbromid** — interkalierender DNA-Farbstoff in der Gelelektrophorese (fluoresziert unter UV → DNA-Banden sichtbar). **Bromhaltige Arzneistoffe:** Ipratropiumbromid (Anticholinergikum bei COPD/Asthma), Pancuroniumbromid (Muskelrelaxans in der Anästhesie).

**Iod (I):** Sublimiert bei Erhitzung zu violettem Dampf. I₂ + Stärke → blauviolette Färbung (**Iod-Stärke-Nachweis** — Nachweisreaktion). **Schilddrüsenhormonsynthese:** I⁻ wird durch den Na⁺/I⁻-Symporter (NIS) aktiv aufgenommen → **Thyreoperoxidase (TPO)** oxidiert I⁻ zu I₂ (mit H₂O₂) → Iodierung von Thyreoglobulin-Tyrosinen → MIT (1 I), DIT (2 I) → Kopplung: MIT + DIT → **T₃** (Trijodthyronin, 3 I, biologisch aktiv); DIT + DIT → **T₄** (Thyroxin, 4 I, Prohormon). Iodmangel → Struma (Kropf), bei fetalem Mangel → Kretinismus. **Thyreostatika** (Schilddrüsenhemmer)**:** Methimazol und PTU (Propylthiouracil) hemmen TPO. Hochdosiertes Kaliumiodid bei Nuklearunfällen blockiert die Aufnahme von radioaktivem ¹³¹I. **Iodhaltige Kontrastmittel:** Röntgen-/CT-Kontrastmittel (Iopamidol, Iohexol) — iodierte Benzolringe absorbieren Röntgenstrahlen → Gefäße und Organe sichtbar. Cave: Iod-Allergie (eigentlich Reaktion auf Trägermolekül), Kontrastmittel-induzierte Nephropathie, thyreotoxische Krise bei latenter Hyperthyreose.

**Interhalogenverbindungen und Polyhalogenide:** Halogene können untereinander reagieren: ClF₃ (stärkstes Fluorierungsmittel), BrCl, ICl (Iodmonochlorid — braune Flüssigkeit, Desinfektionsmittel). I₃⁻ (Triiodid-Ion) entsteht durch I₂ + I⁻ → I₃⁻ — stabiler als I₂ in wässriger Lösung, Basis der Lugol-Lösung (KI + I₂) für Schilddrüsenblockade und Wunddesinfektion.

> **Merke:** Halogene Oxidationskraft: F₂ > Cl₂ > Br₂ > I₂ — abnehmendes E° in Gruppe 17 von oben nach unten. F⁻ für Zähne (Fluorapatit) und PET (¹⁸F-FDG), Cl⁻ für Magensäure und CFTR, Br⁻ historisch Sedativum, I⁻ für Schilddrüse (T₃/T₄) und CT-Kontrastmittel.

> **Prüfungstipp:** Iod-Schilddrüse (T₃ = 3 Iod, T₄ = 4 Iod), Fluorapatit-Karieschutz und die Haber-Bosch-Bedingungen (400-500 °C, 150-300 bar, Fe-Katalysator) sind wiederkehrende MedAT-Themen. Bei H₂S: Geruchslähmung ab ~100 ppm als Fangfrage beachten. Neue Fangfrage: „Welches Halogen ist bei RT flüssig?" → Brom (Br₂).`,
      sections: [
        {
          heading: "Stickstoff: Haber-Bosch und NO-Signaling",
          text: "Das N₂-Molekül (N≡N, 945 kJ/mol) ist extrem stabil — biologische Fixierung durch Nitrogenase (16 ATP/N₂) und industrieller Haber-Bosch-Prozess (Fe-Kat., 400–500 °C, 150–300 bar) ermöglichen die Verfügbarkeit von fixiertem N. Endogenes NO (aus L-Arginin, NOS) aktiviert Guanylatzyklase → cGMP → Vasodilatation — Grundlage der Nitrat-Therapie bei Angina pectoris und des Wirkprinzips von PDE5-Hemmern.",
          merksatz:
            "N≡N: 945 kJ/mol → nahezu reaktionsträge; Fixierung durch Nitrogenase oder Haber-Bosch nötig. NO → cGMP → Vasodilatation.",
        },
        {
          heading: "Schwefel in Biologie und Industrie",
          text: "Cystein (−SH) und Methionin (−S−) sind schwefelhaltige Aminosäuren. Disulfidbrücken stabilisieren Proteine. H₂S hemmt Komplex IV (analog zu HCN) und lähmt ab ~100 ppm den Geruchssinn — extrem tückisch in Güllekellern. H₂SO₄ (Kontaktverfahren: SO₂ → SO₃ mit V₂O₅ → Oleum → H₂SO₄) ist die mengenmäßig wichtigste Industriechemikalie.",
          merksatz:
            "Disulfidbrücken (Cys-S-S-Cys) stabilisieren Proteinstruktur (Antikörper, Insulin); −SH des Coenzym A ist reaktives Acyl-Übertragungszentrum.",
        },
        {
          heading: "Halogene: Oxidationskraft und medizinische Bedeutung",
          text: "Halogene sind starke Oxidationsmittel (F₂ > Cl₂ > Br₂ > I₂). F⁻ bildet Fluorapatit → Kariesprophylaxe. Cl₂/HClO desinfiziert Trinkwasser und Wunden. I⁻ ist essenziell für T₃ und T₄; Iodmangel → Struma. Thyreostatika (Methimazol, PTU) hemmen TPO und unterdrücken die Hormonsynthese bei Hyperthyreose.",
          merksatz:
            "Halogene Oxidationskraft: F₂ > Cl₂ > Br₂ > I₂ (abnehmendes E° in Gruppe 17 von oben nach unten).",
        },
        {
          heading: "Salpeter- und Schwefelsäure",
          text: "HNO₃: starke Säure + starkes Oxidationsmittel. Konz. HNO₃ → NO₂ (braun), verd. HNO₃ → NO (farblos). Königswasser (3 HCl + 1 HNO₃) löst Au und Pt. H₂SO₄ (pKa1 <<0) ist hygroskopisch, dehydratisierend, stark ätzend; Kontaktverfahren: ~250 Mio. t/Jahr global produziert — Indikator für Industrieentwicklung.",
          merksatz:
            "Königswasser = 3 vol HCl + 1 vol HNO₃ → löst Gold und Platin durch [AuCl₄]⁻- und [PtCl₆]²⁻-Bildung.",
        },
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
        "Königswasser: 3 HCl + 1 HNO₃ → löst Au und Pt (einzige Säuremischung dafür)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Bedeutung von Iod für den menschlichen Körper. Gehen Sie auf Aufnahme, Biochemie der Schilddrüsenhormon-Synthese sowie Folgen von Iodmangel und -überversorgung ein.",
        answer: `Iod (I, Atomnr. 53) ist ein essenzielles Spurenelement und das einzige Halogen, das der Körper in nennenswerten Mengen benötigt. Empfohlene Tagesdosis: 150–200 μg (Erwachsene), 230–260 μg (Schwangerschaft). Aufnahme als Iodid (I⁻) hauptsächlich über Meeresfrüchte, iodiertes Speisesalz und Milchprodukte.

In der Schilddrüse: I⁻ wird durch den Na⁺/I⁻-Symporter (NIS) aktiv konzentriert (bis 30–40× Blutkonzentration). Thyreoperoxidase (TPO) oxidiert I⁻ zu I₂ (mit H₂O₂): 2 I⁻ + H₂O₂ → I₂ + 2 OH⁻. Reaktive Iodspezies iodieren Tyrosinreste in Thyreoglobulin → Monoiodtyrosin (MIT, 1 I) und Diiodtyrosin (DIT, 2 I). TPO koppelt dann: MIT + DIT → T₃ (Trijodthyronin, 3 I, biologisch aktiv); DIT + DIT → T₄ (Thyroxin, 4 I, Prohormon). T₄ wird peripher durch Deiodinasen zu T₃ oder reverse-T₃ (inaktiv) umgewandelt.

Wirkungen: T₃/T₄ regulieren Grundumsatz (thermogene Wirkung, Na⁺/K⁺-ATPase-Hochregulation), Wachstum und Differenzierung (besonders fetale Gehirnentwicklung), Herzfrequenz und Stoffwechsel.

Iodmangel: T₃/T₄ sinken → TSH-Anstieg → Struma (diffuse Schilddrüsenhyperplasie). Bei schwerem fetalem Mangel: Kretinismus (irreversible geistige Retardierung, Taubheit, Wachstumsstörung).

Iodüberversorgung: Jod-Basedow-Phänomen (Hyperthyreose bei vorbestehender Struma); Wolff-Chaikoff-Effekt (transiente Hemmung der Hormonsynthese). Hochdosiertes Kaliumiodid bei Nuklearunfällen: blockiert Aufnahme von radioaktivem ¹³¹I.`,
      },
      klinischerBezug:
        "Schilddrüsenhormone (T₃, T₄) regulieren den Grundumsatz des gesamten Körpers; ihre Synthese ist iodabhängig. Hypothyreose (Iodmangel, Hashimoto) wird mit L-Thyroxin (T₄) substituiert. Propylthiouracil und Methimazol hemmen TPO und damit die Hormonsynthese (Hyperthyreose-Therapie). Nitroglyzerin (Glycerintrinitrat), das älteste Antiangina-Mittel, wird enzymatisch zu NO metabolisiert — es erweitert Koronargefäße und senkt die kardiale Vorlast durch venöse Dilatation.",
      selfTest: [
        {
          question:
            "Welche Bedingungen werden beim Haber-Bosch-Prozess gewählt, und warum ist dies ein Kompromiss?",
          options: [
            "Hohe Temperatur (800 °C) und Normaldruck — weil Hitze die Reaktion beschleunigt",
            "100 °C und 1 bar — Standardbedingungen für alle Industrieprozesse",
            "Niedrige Temperatur (−40 °C) und sehr hoher Druck (1000 bar) — für maximale Ausbeute",
            "Normaldruck und Raumtemperatur mit Platinkatalysator — für umweltfreundliche Produktion",
            "400–500 °C und 150–300 bar mit Fe-Katalysator — Kompromiss zwischen Gleichgewichtslage und Reaktionsgeschwindigkeit",
          ],
          correctIndex: 4,
          explanation:
            "N₂ + 3 H₂ ⇌ 2 NH₃ ist exotherm (ΔH = −92 kJ/mol) und geht von 4 auf 2 Mol Gas. Le Chatelier: (1) Niedrige T begünstigt NH₃ (exotherm), aber macht Reaktion zu langsam. (2) Hoher Druck begünstigt NH₃ (weniger Mol). Kompromiss: 400–500 °C (genug Geschwindigkeit) + 150–300 bar + Fe/K₂O/Al₂O₃-Katalysator (erhöht Reaktionsgeschwindigkeit ohne Gleichgewicht zu verschieben). Ausbeute nur ~15–25 % pro Durchgang → Kreislaufführung des unregierten Gases. Haber-Bosch versorgt ~50 % der Weltbevölkerung mit Stickstoffdünger.",
          hints: [
            "Le Chatelier: Exotherme Reaktion — welche Temperatur begünstigt die Produktseite?",
            "Weshalb kann man nicht bei 0 °C arbeiten, obwohl das thermodynamisch günstiger wäre?",
          ],
          difficulty: 2,
          tags: ["haber-bosch", "le-chatelier", "kompromiss-kinetik"],
        },
        {
          question: "Warum ist H₂S in höheren Konzentrationen besonders tückisch gefährlich?",
          options: [
            "Weil H₂S ab ~100 ppm die Geruchsnerven lähmt — die Warnung durch Geruch fällt weg, obwohl toxische Konzentrationen weiter steigen",
            "Weil H₂S sich mit Hämoglobin verbindet und Sulfhämoglobin bildet",
            "Weil H₂S radioaktiv ist und Knochenmarkzellen schädigt",
            "Weil H₂S zu SO₄²⁻ oxidiert wird und Nierenversagen auslöst",
            "Weil H₂S alkalisch ist und die Magensäure neutralisiert",
          ],
          correctIndex: 0,
          explanation:
            "H₂S-Paradox: Bei niedrigen Konzentrationen (0,01–10 ppm) intensiver Faulei-Geruch als Warnsignal. Ab ~50–100 ppm: Olfaktorius-Paralyse (Lähmung der Geruchsrezeptoren) — die Person riecht nichts mehr, obwohl gefährliche Konzentrationen (>250–500 ppm) vorliegen können. Tückisch in Güllekellern, Kanalschächten, petrochemischen Anlagen. Toxikologisch: H₂S hemmt Cytochrom-c-Oxidase (Komplex IV) analog zu HCN → histotoxische Hypoxie → Bewusstseinsverlust, Atemstillstand. Antidot: Hydroxycobalamin, Dimethylaminophenol (DMAP) → Methämoglobin-Bildung als H₂S-Fänger.",
          hints: [
            "Was passiert mit dem Geruchssinn bei hohen H₂S-Konzentrationen? Ist das ein Schutzmechanismus oder ein Problem?",
            "H₂S hemmt ein Enzym der Atmungskette — welches, und was ist die Folge für die Zellatmung?",
          ],
          difficulty: 2,
          tags: ["h2s", "geruchslähmung", "komplex-iv-hemmung"],
        },
        {
          question:
            "Welcher Schritt folgt in der Schilddrüse direkt nach der Aufnahme von I⁻, bevor es in Thyreoglobulin eingebaut wird?",
          options: [
            "I⁻ wird direkt in Tyrosinreste von Thyreoglobulin eingebaut ohne weitere Aktivierung",
            "I⁻ wird zu I₂ oxidiert durch Thyreoperoxidase (TPO) unter Einsatz von H₂O₂",
            "I⁻ wird durch Jodid-Kinase phosphoryliert und als Iodidphosphat aktiviert",
            "I⁻ wird mit TSH zu einem Komplex verbunden, der Thyreoglobulin aktiviert",
            "I⁻ wird ins Blut zurückgegeben und dort zu I₂ oxidiert",
          ],
          correctIndex: 1,
          explanation:
            "Nach aktiver Aufnahme von I⁻ durch den Na⁺/I⁻-Symporter (NIS) wird I⁻ ins Follikellumen transportiert. Dort katalysiert Thyreoperoxidase (TPO) unter Verbrauch von H₂O₂ die Oxidation: 2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O. Die reaktiven Iodspezies (I₂ oder I⁺) iodieren sofort Tyrosinreste in Thyreoglobulin (Organifikation): → Monoiodtyrosin (MIT) und Diiodtyrosin (DIT). Dann Kopplungsreaktion durch TPO: MIT + DIT → T₃; DIT + DIT → T₄. Methimazol und PTU hemmen TPO → Thyreostatika (Hyperthyreose-Therapie).",
          hints: [
            "I⁻ (Oxidationsstufe −1) muss vor dem Einbau in organische Moleküle aktiviert werden — in welche Oxidationsstufe?",
            "Welches Enzym der Schilddrüse ist für Oxidation, Iodierung und Kopplung verantwortlich?",
          ],
          difficulty: 2,
          tags: ["schilddrüse", "tpo", "iodid-oxidation"],
        },
        {
          question: "Was unterscheidet konz. HNO₃ von verd. HNO₃ bei der Oxidation von Metallen?",
          options: [
            "Konzentrierte HNO₃ reduziert Metalle zu Metalliodiden; verdünnte zu Metallnitraten",
            "Konzentrierte HNO₃ ist weniger reaktiv wegen Passivierungsschicht; verdünnte greift Eisen sofort an",
            "Konzentrierte HNO₃ oxidiert Metalle unter Bildung von NO₂ (braun); verdünnte unter Bildung von NO (farblos)",
            "Konzentrierte HNO₃ reagiert nur mit Nichtmetallen; verdünnte nur mit Metallen",
            "Kein Unterschied — beide produzieren NH₃ als Stickstoffreduktionsprodukt",
          ],
          correctIndex: 2,
          explanation:
            "HNO₃ oxidiert Metalle (außer Au, Pt) unter Bildung von Stickoxiden — das entstehende Produkt hängt von der Konzentration ab: Konz. HNO₃: primär NO₂ (braunes Gas, N in +4): Cu + 4 HNO₃(konz.) → Cu(NO₃)₂ + 2 NO₂ + 2 H₂O. Verd. HNO₃: primär NO (farbloses Gas, N in +2): 3 Cu + 8 HNO₃(verd.) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Bei sehr verdünnter HNO₃ + aktivem Metall (Zn): NH₄⁺ (N in −3). Königswasser (3 HCl + 1 HNO₃) löst Au durch [AuCl₄]⁻-Bildung. Fe und Al werden durch konz. HNO₃ passiviert (Oxidschicht).",
          hints: [
            "Oxidationszahl von N in HNO₃ ist +5. In NO₂ ist sie +4, in NO ist sie +2 — konz. oder verd. HNO₃ reduziert N weniger weit?",
            "Braunes Gas = NO₂; farbloses Gas = NO. Bei welcher HNO₃-Konzentration entsteht welches?",
          ],
          difficulty: 3,
          tags: ["salpetersäure", "no2", "no-bildung"],
        },
        {
          question: "Warum schützt Fluorid (F⁻) vor Karies?",
          options: [
            "F⁻ tötet Kariesbakterien direkt durch oxidative Wirkung",
            "F⁻ bildet einen Calciumfluorid-Schutzfilm auf dem Zahn, der Säuren abweist",
            "F⁻ erhöht die Speichelproduktion und verdünnt Säuren im Mund",
            "F⁻ ersetzt OH⁻ im Hydroxylapatit und bildet Fluorapatit — weniger säurelöslich als Hydroxylapatit",
            "F⁻ hemmt Glucosyltransferase von Streptococcus mutans und verhindert Plaquebildung",
          ],
          correctIndex: 3,
          explanation:
            "Zahnschmelz: Hydroxylapatit Ca₁₀(PO₄)₆(OH)₂. Kariesbakterien (Streptococcus mutans) produzieren Milchsäure → pH < 5,5 → Demineralisierung. F⁻ (aus Zahnpasta, fluoridiertem Wasser) lagert sich ein und ersetzt OH⁻: Ca₁₀(PO₄)₆(OH)₂ + 2 F⁻ → Ca₁₀(PO₄)₆F₂ + 2 OH⁻. Fluorapatit hat ein niedrigeres Löslichkeitsprodukt (Ksp) und braucht pH < 4,5 zur Demineralisierung (statt <5,5 bei Hydroxylapatit) → säurefesterer Zahnschmelz. Zudem fördert F⁻ die Remineralisierung. Primärmechanismus: Struktureinbau, nicht direkte Bakterizidie.",
          hints: [
            "Was ist Hydroxylapatit chemisch, und welche Gruppe (OH⁻) könnte F⁻ ersetzen?",
            "Ein niedrigeres Löslichkeitsprodukt bedeutet — ist das neue Mineral leichter oder schwerer in Säure löslich?",
          ],
          difficulty: 2,
          tags: ["fluorid", "fluorapatit", "kariesprophylaxe"],
        },
        {
          question:
            "Wie vermittelt Stickstoffmonoxid (NO) seine vasodilatatorische Wirkung auf molekularer Ebene?",
          options: [
            "NO aktiviert Adenylatcyclase → cAMP → Proteinkinase A → Vasodilatation",
            "NO aktiviert Kaliumkanäle direkt durch Membranpolarisation",
            "NO bindet an β-Adrenorezeptoren → Gi-Protein → Vasodilatation",
            "NO hemmt Phosphodiesterase direkt → kein cAMP-Abbau → Vasodilatation",
            "NO aktiviert lösliche Guanylatzyklase (sGC) → cGMP → Proteinkinase G → Inaktivierung der MLCK → Relaxation der glatten Muskulatur",
          ],
          correctIndex: 4,
          explanation:
            "NO ist lipophil und durchquert Membranen leicht. Es bindet an das Häm-Eisen der löslichen Guanylatzyklase (sGC) → Konformationsänderung → Aktivierung → cGMP-Synthese aus GTP. cGMP aktiviert Proteinkinase G (PKG), die (1) Myosin-Leichtketten-Kinase (MLCK) inaktiviert → weniger Myosin-Phosphorylierung → Relaxation, (2) BK-Ca-Kanäle öffnet → Hyperpolarisation → verminderter Ca²⁺-Einstrom. Resultat: Gefäßrelaxation → Vasodilatation. PDE5 baut cGMP ab — PDE5-Hemmer (Sildenafil, Tadalafil) verstärken den NO-Effekt: erektile Dysfunktion, pulmonale arterielle Hypertonie.",
          hints: [
            "NO bindet an ein häm-haltiges Enzym — nicht an einen Membranrezeptor. Welches intrazelluläre Enzym enthält Häm und produziert einen Second Messenger?",
            "cGMP aktiviert Proteinkinase G. Was phosphoryliert diese in der glatten Muskelzelle, und welche Konsequenz hat das?",
          ],
          difficulty: 3,
          tags: ["no", "guanylatzyklase", "cgmp-vasodilatation"],
        },
        {
          question:
            "Welche Reihenfolge beschreibt das Kontaktverfahren zur Herstellung von H₂SO₄ korrekt?",
          options: [
            "S → SO₂ → SO₃ (V₂O₅-Katalysator) → Oleum (SO₃ in H₂SO₄) → + H₂O → H₂SO₄",
            "S → SO₃ → SO₂ → H₂SO₄",
            "H₂S → SO₂ → H₂SO₃ → Oxidation → H₂SO₄",
            "FeS₂ → SO₃ → direkte Reaktion mit H₂O → H₂SO₄",
            "S + H₂O → H₂SO₄ direkt durch Nassoxidation",
          ],
          correctIndex: 0,
          explanation:
            "Kontaktverfahren (global ~250 Mio. t H₂SO₄/Jahr): (1) Schwefelverbrennung: S + O₂ → SO₂ (oder Pyrit-Röstung: 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂). (2) Katalytische Oxidation: 2 SO₂ + O₂ ⇌ 2 SO₃; V₂O₅-Katalysator, 400–600 °C; >98 % Ausbeute. (3) SO₃ wird NICHT direkt mit H₂O umgesetzt (würde dichten Schwefelsäurenebel/Aerosol bilden, der nicht kondensierbar ist). Stattdessen: SO₃ in konz. H₂SO₄ → Oleum (H₂S₂O₇, Pyroschwefelsäure). (4) Oleum + H₂O → 2 H₂SO₄. Der Trick: SO₃ direkt + H₂O = Aerosol-Problem; Oleum-Route umgeht das.",
          hints: [
            "S wird zuerst zu SO₂ (Verbrennung) oxidiert, dann zu SO₃ — welches Enzym (bzw. Katalysator) ist nötig?",
            "Warum kann SO₃ nicht direkt mit Wasser umgesetzt werden — was entsteht physikalisch?",
          ],
          difficulty: 2,
          tags: ["kontaktverfahren", "so3", "schwefelsäure"],
        },
        {
          question:
            "Welches Muster zeigen TSH und Schilddrüsenhormone bei Hypothyreose vs. Hyperthyreose?",
          options: [
            "Hypothyreose: hohes T₃/T₄, niedriges TSH; Hyperthyreose: niedriges T₃/T₄, hohes TSH",
            "Hypothyreose: niedriges T₃/T₄, hohes TSH (Hypophyse stimuliert stärker); Hyperthyreose: hohes T₃/T₄, niedriges TSH (Hemmung der Hypophyse)",
            "Beide Erkrankungen: gleichzeitig erhöhtes TSH und erhöhtes T₃/T₄",
            "TSH wird bei beiden Erkrankungen nicht beeinflusst — Regulation nur lokal in der Schilddrüse",
            "Hypothyreose: erhöhtes TSH und erhöhtes T₃/T₄ durch kompensatorische Überproduktion",
          ],
          correctIndex: 1,
          explanation:
            "Die Schilddrüsenachse arbeitet über negative Rückkopplung: TRH (Hypothalamus) → TSH (Hypophyse) → T₃/T₄ (Schilddrüse) → hemmt TRH und TSH. Hypothyreose (z. B. Iodmangel, Hashimoto): T₃/T₄ niedrig → Hemmung der Hypophyse fällt weg → TSH steigt kompensatorisch → Struma. Hyperthyreose (Morbus Basedow, autonomes Adenom): T₃/T₄ hoch → starke Hemmung der Hypophyse → TSH supprimiert (<0,1 mU/L). Diagnose: TSH ist der empfindlichste Laborparameter; TSH hoch = primäre Hypothyreose; TSH niedrig/supprimiert = Hyperthyreose. T₃/T₄ zur Bestätigung und Schweregradbeurteilung.",
          hints: [
            "Die Hypophyse wird durch TSH stimuliert — oder sendet sie TSH? Und was hemmt TSH-Ausschüttung?",
            "Negative Rückkopplung: Hohes T₃/T₄ hemmt TSH. Was passiert also bei Hyperthyreose mit dem TSH-Spiegel?",
          ],
          difficulty: 2,
          tags: ["tsh", "schilddrüsenhormone", "negative-rückkopplung"],
        },
        {
          question: "Welche Aussage über die Halogene ist korrekt?",
          options: [
            "Iod ist bei Raumtemperatur ein Gas und sublimiert erst bei 200 °C",
            "Fluor hat die niedrigste Elektronegativität aller Halogene",
            "Brom ist das einzige Nichtmetall, das bei Raumtemperatur flüssig ist",
            "Chlor hat ein höheres Standardpotenzial als Fluor",
            "Alle Halogene sind bei Raumtemperatur Feststoffe",
          ],
          correctIndex: 2,
          explanation:
            "Brom (Br₂) ist bei Raumtemperatur eine braune, stark ätzende Flüssigkeit (Sdp. 59 °C) — das einzige flüssige Nichtmetall (Hg ist das einzige flüssige Metall). Fluor hat die HÖCHSTE Elektronegativität (3,98). Iod ist bei RT ein Feststoff (sublimiert bei Erhitzung). Die Oxidationskraft nimmt von F₂ (E° = +2,87 V) nach I₂ (E° = +0,54 V) ab.",
          hints: [
            "Welches Halogen hat den Siedepunkt knapp über Raumtemperatur?",
            "Aggregatzustände der Halogene bei RT: F₂ und Cl₂ sind Gase, I₂ ist ein Feststoff — was ist Br₂?",
          ],
          difficulty: 1,
          tags: ["halogene", "aggregatzustand", "brom"],
        },
        {
          question: "Warum ist Methämoglobinämie durch Nitrit besonders gefährlich für Säuglinge?",
          options: [
            "Säuglinge haben einen höheren Nitrit-Spiegel im Blut als Erwachsene",
            "Nitrit wird bei Säuglingen über die Niere nicht ausgeschieden",
            "Säuglinge haben mehr Hämoglobin F, das resistent gegen Nitrit ist",
            "Säuglinge haben weniger Methämoglobin-Reduktase und einen höheren pH im Magen, der Nitratreduktion durch Bakterien begünstigt",
            "Säuglinge haben eine höhere Fluoridkonzentration im Blut, die Nitrit aktiviert",
          ],
          correctIndex: 3,
          explanation:
            "Säuglinge sind besonders anfällig für Nitrit-induzierte Methämoglobinämie (Blue-Baby-Syndrom) aus zwei Gründen: (1) Ihr Magen-pH ist höher als bei Erwachsenen → Bakterien können Nitrat aus Trinkwasser/Nahrung leichter zu Nitrit reduzieren. (2) Fetales Hämoglobin (HbF) wird leichter zu Methämoglobin oxidiert, und Säuglinge haben weniger Methämoglobin-Reduktase (NADH-Cytochrom-b5-Reduktase) → eingeschränkte Rückreduktion von Fe³⁺ zu Fe²⁺. Methämoglobin (Fe³⁺) bindet kein O₂ → Zyanose, Hypoxie.",
          hints: [
            "Fetal Hämoglobin (HbF) ist empfindlicher gegenüber Oxidation als adultes HbA.",
            "Welches Enzym reduziert Methämoglobin zurück — und haben Säuglinge genug davon?",
          ],
          difficulty: 3,
          tags: ["methämoglobinämie", "nitrit", "säuglinge"],
        },
      ],
    },
    // === from kap10-säure-base ===
    {
      id: "ch-10-01",
      title: "Säure-Base-Definitionen und pH-Wert",
      imageUrl: "/images/bms/ch-ph-skala.jpg",
      imageCaption: "Abb.: pH-Skala von sauer bis basisch (OpenStax, CC BY 4.0)",
      stichworte: [
        "Arrhenius-Definition",
        "Brønsted-Lowry Protonendonor",
        "Lewis-Säure Elektronenpaarakzeptor",
        "Korrespondierendes Säure-Base-Paar",
        "Ampholyt",
        "Autoprotolyse",
        "Ionenprodukt Kw",
        "pH-Wert Berechnung",
        "pH + pOH = 14",
        "Blut-pH 7,35-7,45",
      ],
      content: `## Drei Definitionen -- von eng bis allgemein

Drei Säure-Base-Definitionen bauen aufeinander auf, jede allgemeiner als die vorige. Die engste stammt von **Arrhenius** (1884): Säuren setzen in wässriger Lösung H⁺-Ionen frei, Basen OH⁻-Ionen. Diese Definition ist auf wässrige Systeme beschränkt und kann nicht erklären, warum Ammoniak (NH₃) basisch reagiert, obwohl es keine OH⁻-Gruppe enthält.

## Die Brønsted-Lowry-Definition


**Johannes Nicolaus Brønsted** (1923) erweiterte das Konzept grundlegend:

- **Säure** = Protonendonator: gibt ein Proton (H⁺) ab
- **Base** = Protonenakzeptor: nimmt ein Proton (H⁺) auf

Diese Definition gilt auch für nicht-wässrige Lösungen und erklärt Protonenübertragungsreaktionen umfassend. Jede Säure-Base-Reaktion ist nach Brønsted eine **Protonenübertragung** zwischen einem Donor und einem Akzeptor.

Beispiel: CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ (Säure1 + Base2 ⇌ Base1 + Säure2)

Aus jeder Säure entsteht nach Protonenabgabe die **korrespondierende (konjugierte) Base** – und umgekehrt. Säure und ihre korrespondierende Base unterscheiden sich immer genau um ein H⁺.

**Starke Säure** → **schwache korrespondierende Base** (und umgekehrt). Je leichter eine Säure Protonen abgibt, desto stabiler (schwächer) ist die entstehende Basis.

**Amphotere Teilchen (Ampholyte)** können sowohl als Säure als auch als Base reagieren. Wichtigstes Beispiel: Wasser (H₂O) und Hydrogencarbonat (HCO₃⁻).

## Die Lewis-Definition

**Gilbert N. Lewis** (1923) formulierte die allgemeinste Säure-Base-Definition:

- **Lewis-Säure** = Elektronenpaarakzeptor (nimmt ein Elektronenpaar auf)
- **Lewis-Base** = Elektronenpaardonor (gibt ein Elektronenpaar ab)

Diese Definition ist die weiteste und umfasst auch Reaktionen ohne Protonentransfer. Beispiele für Lewis-Säuren: BF₃, AlCl₃, Metallkationen (Fe³⁺, Cu²⁺). Lewis-Säuren haben oft ein unbesetztes Orbital. Alle Brønsted-Säuren sind auch Lewis-Säuren, aber nicht umgekehrt.

Wichtige Lewis-Säure-Base-Reaktion: BF3 + :NH3 --> F3B<-NH3 (Addukt; Lewis-S. + Lewis-B.)


{{IMAGE}}

## Das Ionenprodukt des Wassers (Kw) und die Autoprotolyse

Wasser ist ein Amphoproton – es kann selbst mit sich selbst reagieren:

H₂O + H₂O ⇌ H₃O⁺ + OH⁻

Diese Reaktion heißt **Autoprotolyse** des Wassers. Das Gleichgewicht liegt weit auf der linken Seite (Wasser ionisiert kaum). Das **Ionenprodukt des Wassers** ist:

**K_W = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² (bei 25 °C)**

In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7 (neutral bei 25 °C).

K_W ist **temperaturabhängig**: Bei höherer Temperatur steigt K_W (Autoprotolyse ist endotherm). Bei 37 °C (Körpertemperatur) ist K_W ≈ 2,4 × 10⁻¹⁴, sodass der Neutralpunkt bei pH ≈ 6,8 liegt. „Neutral" bedeutet also nicht immer pH = 7, sondern [H₃O⁺] = [OH⁻].

## Definition und Berechnung des pH-Werts

Der **pH-Wert** ist der negative dekadische Logarithmus der Hydronium-Ionen-Konzentration:

**pH = −log₁₀[H₃O⁺]**

Daraus folgt: **[H₃O⁺] = 10⁻pH** (in mol/L). **Beispiel:** Eine Lösung mit **pH 3** enthält **[H₃O⁺] = 10⁻³ mol/L** — nicht 0,003 g/L oder 10³ mol/L; die Einheit ist mol/L und der Wert 10⁻³.

Analog: **pOH = −log₁₀[OH⁻]** und **pH + pOH = pK_W = 14** (bei 25 °C)

### pH-Skala (bei 25 °C)
| pH | [H₃O⁺] (mol/L) | Charakter |
|-----|-----------------|-----------|
| 0   | 1               | stark sauer |
| 3   | 10⁻³            | sauer |
| 7   | 10⁻⁷            | neutral |
| 11  | 10⁻¹¹           | basisch |
| 14  | 10⁻¹⁴           | stark basisch |

Eine **Veränderung um eine pH-Einheit** bedeutet eine **10-fache Änderung** der H₃O⁺-Konzentration (logarithmische Skala!).

## Klinischer Kontext: Blut-pH

Der Blut-pH des Menschen liegt im Normbereich bei **7,35–7,45**. Eine Abweichung nach unten heißt **Azidose** (< 7,35), nach oben **Alkalose** (> 7,45). Diese engen Grenzen sind lebenswichtig, da Enzymstrukturen und Proteinfunktionen pH-sensitiv sind. Schon bei pH < 7,0 oder pH > 7,7 besteht Lebensgefahr.

---

> **Merke:** Brønsted-Säure = Protonendonor (gibt H⁺ ab), Brønsted-Base = Protonenakzeptor (nimmt H⁺ auf). Lewis erweitert: Säure = Elektronenpaarakzeptor, Base = Elektronenpaardonor — keine H⁺-Übertragung nötig.

> **Merke:** pH = −log[H₃O⁺]; eine Änderung um 1 pH-Einheit bedeutet eine 10-fache Änderung der H₃O⁺-Konzentration. Bei 37 °C (Körpertemperatur) liegt der Neutralpunkt bei pH ≈ 6,8, nicht bei 7,0.

> **Prüfungstipp:** Drei Definitionen auseinanderhalten: Arrhenius (nur wässrig), Brønsted (Protonenübertragung), Lewis (Elektronenpaar). Typische Falle: BF₃ ist nach Lewis eine Säure, aber NICHT nach Brønsted (kein H⁺). Blut-pH-Normalbereich 7,35-7,45 auswendig wissen.`,
      lernziele: [
        "Die Säure-Base-Definitionen nach Arrhenius, Brønsted-Lowry und Lewis erklären und vergleichen können",
        "Korrespondierende Säure-Base-Paare identifizieren und den Begriff Ampholyt erklären",
        "Das Ionenprodukt des Wassers Kw und die Autoprotolyse beschreiben",
        "Den pH-Wert berechnen und die logarithmische pH-Skala interpretieren",
        "Den Zusammenhang pH + pOH = 14 anwenden",
      ],
      sections: [
        {
          heading: "Brønsted-Lowry vs. Lewis: Die zwei wichtigsten Definitionen",
          text: "Brønsted definiert Säuren und Basen über den Protonentransfer, Lewis über den Elektronenpaar-Transfer. Für den MedAT-H ist die Brønsted-Definition zentral: Säure = Protonendonor, Base = Protonenakzeptor. Lewis-Säuren (z. B. Fe³⁺, AlCl₃) haben ein unbesetztes Orbital und akzeptieren Elektronenpaare ohne H⁺-Transfer. Alle Brønsted-Säuren sind auch Lewis-Säuren, aber nicht umgekehrt.",
          merksatz:
            "Brønsted: Säure gibt H⁺ ab, Base nimmt H⁺ auf. Lewis: Säure nimmt Elektronenpaar auf, Base gibt es ab.",
        },
        {
          heading: "Korrespondierende Paare und Ampholyte",
          text: "Eine Brønsted-Säure HA gibt ein Proton ab und wird zur korrespondierenden Base A⁻. HA und A⁻ bilden ein konjugiertes Paar. Je stärker die Säure, desto schwächer die korrespondierende Base. Ampholyte wie Wasser (H₂O) oder Hydrogencarbonat (HCO₃⁻) können sowohl Protonen abgeben als auch aufnehmen – sie sind gleichzeitig Brønsted-Säure und Brønsted-Base.",
          merksatz:
            "Starke Säure → schwache korrespondierende Base (und umgekehrt). pKs(Säure) + pKb(korr. Base) = 14.",
        },
        {
          heading: "pH-Berechnung und Ionenprodukt",
          text: "Das Ionenprodukt Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ (25 °C) ist die Grundlage aller pH-Berechnungen. pH = −log[H₃O⁺], also [H₃O⁺] = 10⁻pH. Bei 25 °C gilt pH + pOH = 14. Kw steigt mit der Temperatur: Bei 37 °C Kw ≈ 2,4 × 10⁻¹⁴ → Neutralpunkt bei pH ≈ 6,8. Eine Veränderung um 1 pH-Einheit = Faktor 10 in der H₃O⁺-Konzentration.",
          merksatz: "pH = −log[H₃O⁺] | pH + pOH = 14 | Kw = 10⁻¹⁴ | Neutral: pH = 7 nur bei 25 °C.",
        },
      ],

      merksätze: [
        "Brønsted-Säure = Protonendonor (gibt H⁺ ab); Brønsted-Base = Protonenakzeptor (nimmt H⁺ auf).",
        "Lewis-Säure = Elektronenpaarakzeptor; Lewis-Base = Elektronenpaardonor – ohne zwingenden H⁺-Transfer.",
        "Korrespondierendes Paar: HA und A⁻ unterscheiden sich um genau ein H⁺.",
        "Starke Säure → schwache korrespondierende Base; schwache Säure → starke korrespondierende Base.",
        "Ampholyt (Amphoteres Teilchen): kann sowohl H⁺ abgeben als auch aufnehmen. Beispiele: H₂O, HCO₃⁻, HPO₄²⁻.",
        "Autoprotolyse des Wassers: 2 H₂O ⇌ H₃O⁺ + OH⁻; Kw = 10⁻¹⁴ bei 25 °C.",
        "pH = −log[H₃O⁺]; eine pH-Einheit = Faktor 10 in der H₃O⁺-Konzentration.",
        "pH + pOH = 14 (bei 25 °C); gilt aus Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴.",
        "Blut-pH normal: 7,35–7,45. Azidose: < 7,35; Alkalose: > 7,45.",
        "Kw ist temperaturabhängig – bei 37 °C liegt der Neutralpunkt bei pH ≈ 6,8, nicht bei 7,0.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die drei historischen Säure-Base-Definitionen (Arrhenius, Brønsted-Lowry, Lewis) und erklären Sie, warum die Lewis-Definition die allgemeinste ist. Geben Sie für jede Definition ein Beispiel.",
        answer:
          "Die Arrhenius-Definition (1884) ist die engste: Säuren liefern in Wasser H⁺-Ionen (z. B. HCl → H⁺ + Cl⁻), Basen liefern OH⁻-Ionen (z. B. NaOH → Na⁺ + OH⁻). Diese Definition ist auf wässrige Systeme beschränkt und kann nicht erklären, warum NH₃ basisch reagiert.\n\nBrønsted und Lowry (1923) erweiterten das Konzept auf Protonenübertragungen: Säure = Protonendonor, Base = Protonenakzeptor. Die Definition gilt auch in nicht-wässrigen Medien. Beispiel: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ – Wasser ist hier die Säure (gibt H⁺ ab), NH₃ die Base (nimmt H⁺ auf). Jede Säure hat eine korrespondierende Base, die aus ihr durch Protonenabgabe entsteht.\n\nLewis (1923) formulierte die allgemeinste Definition über Elektronenpaare: Lewis-Säure = Elektronenpaarakzeptor, Lewis-Base = Elektronenpaardonor. Beispiel: BF₃ (Lewis-Säure, hat leeres Orbital) + NH₃ (Lewis-Base, hat freies Elektronenpaar) → Addukt F₃B←NH₃. Diese Definition umfasst Reaktionen ganz ohne H⁺-Beteiligung, z. B. Metallkomplexe. Alle Brønsted-Säuren sind auch Lewis-Säuren (H⁺ ist ein Elektronenpaarakzeptor), aber nicht alle Lewis-Säuren sind Brønsted-Säuren (BF₃ hat kein abzugebendes Proton).",
      },
      klinischerBezug:
        "Der Blut-pH von 7,35–7,45 muss präzise aufrechterhalten werden, da Enzyme und Membranproteine pH-sensitiv sind; bereits pH-Abweichungen von ±0,1 Einheiten können schwerwiegende physiologische Folgen haben. Im Säure-Base-Haushalt des Körpers spielen alle drei Definitionen eine Rolle: Brønsted-Konzept für Puffersysteme (HCO₃⁻/H₂CO₃), Lewis-Konzept für Metallionen-Komplexe (Hämoglobin-Fe²⁺ als Lewis-Säure, das O₂ als Lewis-Base bindet).",
      selfTest: [
        {
          question:
            "Nach Brønsted-Lowry reagiert Ammoniak (NH₃) mit Wasser. Welche Rolle nimmt NH₃ dabei ein?",
          options: [
            "NH₃ ist eine Brønsted-Säure, weil es ein Proton abgibt",
            "NH₃ reagiert nicht mit Wasser nach Brønsted",
            "NH₃ ist eine Lewis-Säure, weil es ein Elektronenpaar akzeptiert",
            "NH₃ ist ein Ampholyt, weil es sowohl Proton gibt als auch nimmt",
            "NH₃ ist eine Brønsted-Base, weil es ein Proton aufnimmt",
          ],
          correctIndex: 4,
          explanation:
            "Nach Brønsted-Lowry ist NH₃ eine Base, weil es ein Proton (H⁺) vom Wasser aufnimmt: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. NH₃ ist der Protonenakzeptor (Base), H₂O der Protonendonor (Säure). Die korrespondierenden Paare sind: NH₄⁺/NH₃ und H₂O/OH⁻. NH₃ ist zwar eine Lewis-Base (Elektronenpaardonor über das freie Elektronenpaar am N), aber in dieser Reaktion mit Wasser ist die Brønsted-Beschreibung als Protonenakzeptor maßgeblich.",
          hints: [
            "Brønsted-Base = Protonenakzeptor (nimmt H⁺ auf)",
            "NH₃ + H₂O → NH₄⁺ + OH⁻: Wer gibt H⁺ ab, wer nimmt es auf?",
          ],
          difficulty: 1,
          tags: ["brønsted", "nh3", "protonenakzeptor"],
        },
        {
          question:
            "Die Autoprotolyse des Wassers bei 25 °C ergibt ein Ionenprodukt. Welches ist korrekt?",
          options: [
            "Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L²",
            "Kw = [H₃O⁺] · [OH⁻] = 10⁻⁷ mol²/L²",
            "Kw = [H₂O]² = 10⁻¹⁴ mol²/L²",
            "Kw = [H⁺] / [OH⁻] = 10⁻¹⁴",
            "Kw = [H₃O⁺]² = 10⁻¹⁴ mol²/L²",
          ],
          correctIndex: 0,
          explanation:
            "Das Ionenprodukt des Wassers ist Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² bei 25 °C. In reinem Wasser sind beide Konzentrationen gleich: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L, Produkt = 10⁻¹⁴. Die Konzentration des Wassers selbst (ca. 55,5 mol/L) wird in Kw nicht aufgeführt, da sie nahezu konstant ist und in die Gleichgewichtskonstante eingearbeitet wurde. Kw ist temperaturabhängig – er steigt bei Erwärmung, da die Autoprotolyse endotherm ist.",
          hints: [
            "Kw = Produkt aus [H₃O⁺] und [OH⁻], nicht Quotient",
            "In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L",
          ],
          difficulty: 1,
          tags: ["ionenprodukt", "kw", "autoprotolysé"],
        },
        {
          question:
            "Eine wässrige Lösung hat [H₃O⁺] = 10⁻³ mol/L. Welcher pH-Wert liegt vor und wie hoch ist [OH⁻]?",
          options: [
            "pH = 3; [OH⁻] = 10⁻⁷ mol/L",
            "pH = 3; [OH⁻] = 10⁻¹¹ mol/L",
            "pH = 11; [OH⁻] = 10⁻³ mol/L",
            "pH = 3; [OH⁻] = 10⁻³ mol/L",
            "pH = −3; [OH⁻] = 10⁻¹⁴ mol/L",
          ],
          correctIndex: 1,
          explanation:
            "pH = −log[H₃O⁺] = −log(10⁻³) = 3. Für [OH⁻]: Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴, also [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L. Probe: pH + pOH = 3 + 11 = 14 ✓. Die Lösung ist sauer (pH < 7). Die logarithmische Beziehung zwischen pH und [H₃O⁺] ist fundamental: Eine Änderung um 1 pH-Einheit bedeutet eine 10-fache Änderung der H₃O⁺-Konzentration.",
          hints: [
            "pH = −log[H₃O⁺]; pOH = −log[OH⁻]; pH + pOH = 14",
            "Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ → [OH⁻] = 10⁻¹⁴ / [H₃O⁺]",
          ],
          difficulty: 1,
          tags: ["ph-rechnen", "poh", "kw-anwendung"],
        },
        {
          question:
            "BF₃ reagiert mit NH₃ zu einem Addukt. Nach welcher Definition ist BF₃ eine Säure?",
          options: [
            "Nach Arrhenius, weil BF₃ H⁺-Ionen liefert",
            "Nach Brønsted, weil BF₃ ein Proton abgibt",
            "Nach Lewis, weil BF₃ ein Elektronenpaar akzeptiert",
            "Nach Lewis, weil BF₃ ein Elektronenpaar abgibt",
            "BF₃ ist nach keiner Definition eine Säure",
          ],
          correctIndex: 2,
          explanation:
            "BF₃ ist eine Lewis-Säure, weil es ein leeres p-Orbital am Boratom besitzt und daher ein freies Elektronenpaar von NH₃ (Lewis-Base) akzeptieren kann: BF₃ + :NH₃ → F₃B←NH₃. Bei dieser Reaktion wird kein Proton übertragen – sie ist daher nach Brønsted-Lowry keine Säure-Base-Reaktion. Die Lewis-Definition ist die weiteste: Sie umfasst alle Elektronenpaar-Übertragungen, auch ohne H⁺-Beteiligung.",
          hints: [
            "Lewis-Säure = Elektronenpaarakzeptor (hat leeres Orbital)",
            "BF₃ hat kein H⁺ abzugeben → keine Brønsted-Säure",
          ],
          difficulty: 2,
          tags: ["lewis-säure", "bf3", "elektronenpaar-akzeptor"],
        },
        {
          question: "Das korrespondierende (konjugierte) Säure-Base-Paar von H₂PO₄⁻ als Säure ist:",
          options: [
            "H₃PO₄ / H₂PO₄⁻",
            "H₃PO₄ / HPO₄²⁻",
            "HPO₄²⁻ / PO₄³⁻",
            "H₂PO₄⁻ / HPO₄²⁻",
            "H₂PO₄⁻ / PO₄³⁻",
          ],
          correctIndex: 3,
          explanation:
            "Wenn H₂PO₄⁻ als Säure fungiert, gibt es ein Proton ab: H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻. Das korrespondierende Paar ist H₂PO₄⁻ (Säure) / HPO₄²⁻ (korrespondierende Base). Korrespondierende Paare unterscheiden sich immer um genau ein H⁺. H₂PO₄⁻ ist ein Ampholyt: es kann auch als Base reagieren und H⁺ aufnehmen (→ H₃PO₄). Dies ist relevant für den physiologischen Phosphatpuffer (pKs₂ ≈ 7,2), der im Urin und intrazellulär wichtig ist.",
          hints: [
            "Korrespondierende Paare: Säure ⇌ H⁺ + korrespondierende Base",
            "H₂PO₄⁻ − H⁺ = HPO₄²⁻",
          ],
          difficulty: 2,
          tags: ["konjugiertes-paar", "phosphat", "h2po4"],
        },
        {
          question:
            "Wasser bei 37 °C hat ein größeres Kw als bei 25 °C. Welche Aussage über den pH-Neutralpunkt bei 37 °C ist korrekt?",
          options: [
            "Der Neutralpunkt liegt bei pH = 7, unverändert",
            "Der Neutralpunkt liegt bei pH > 7, Wasser wird basischer",
            "Wasser ist bei 37 °C sauer, weil [H₃O⁺] > [OH⁻]",
            "Der Neutralpunkt hängt nur von der Konzentration ab, nicht von der Temperatur",
            "Der Neutralpunkt liegt bei pH < 7 (ca. 6,8), Wasser bleibt aber neutral",
          ],
          correctIndex: 4,
          explanation:
            "Bei 37 °C beträgt Kw ≈ 2,4 × 10⁻¹⁴, daher [H₃O⁺] = [OH⁻] = √(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L → pH ≈ 6,81. Der Neutralpunkt liegt also bei ca. 6,8, nicht bei 7. Trotzdem ist reines Wasser bei 37 °C neutral, denn [H₃O⁺] = [OH⁻]. 'Neutral' bedeutet immer [H₃O⁺] = [OH⁻], nicht automatisch pH = 7. Dieser Unterschied ist klinisch relevant: Physiologische Prozesse laufen bei Körpertemperatur ab, wo der Neutralpunkt leicht verschoben ist.",
          hints: [
            "Neutral bedeutet [H₃O⁺] = [OH⁻], nicht zwingend pH = 7",
            "Kw steigt mit Temperatur → √Kw steigt → pH des Neutralpunkts sinkt",
          ],
          difficulty: 3,
          tags: ["neutralpunkt", "kw-temperatur", "ph-neutralität"],
        },
        {
          question:
            "HCO₃⁻ (Hydrogencarbonat) ist ein Ampholyt. In welchen beiden Reaktionen zeigt sich das?",
          options: [
            "Als Säure: HCO₃⁻ → H⁺ + CO₃²⁻; als Base: HCO₃⁻ + H⁺ → H₂CO₃",
            "Als Säure: HCO₃⁻ → 2H⁺ + CO₃²⁻; als Base: HCO₃⁻ → OH⁻ + CO₂",
            "Als Säure: HCO₃⁻ + OH⁻ → CO₂ + H₂O; als Base: HCO₃⁻ → H₂O + CO₂",
            "Als Säure und Base: HCO₃⁻ ⇌ H₂CO₃ ⇌ CO₂ + H₂O (nur eine Richtung)",
            "HCO₃⁻ ist kein Ampholyt, es reagiert nur als Base",
          ],
          correctIndex: 0,
          explanation:
            "HCO₃⁻ ist ein klassischer Ampholyt (amphoteres Teilchen): Als Brønsted-Säure gibt es ein Proton ab: HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (pKs ≈ 10,3). Als Brønsted-Base nimmt es ein Proton auf: HCO₃⁻ + H⁺ → H₂CO₃ (bzw. CO₂ + H₂O). Diese Amphoterie ist für den Kohlensäure-Bicarbonat-Puffer im Blut entscheidend: HCO₃⁻ kann sowohl zugesetzte Säure als auch zugesetzte Base abpuffern, indem es in die entsprechende Richtung reagiert.",
          hints: [
            "Ampholyt = kann sowohl H⁺ abgeben als auch aufnehmen",
            "HCO₃⁻ als Säure → CO₃²⁻; als Base → H₂CO₃",
          ],
          difficulty: 2,
          tags: ["ampholyt", "hco3", "bicarbonat-amphoterie"],
        },
        {
          question:
            "Eine Lösung hat pH = 5. Um welchen Faktor ist ihre H₃O⁺-Konzentration höher als bei pH = 8?",
          options: ["Faktor 3", "Faktor 1000", "Faktor 30", "Faktor 10000", "Faktor 100"],
          correctIndex: 1,
          explanation:
            "Bei pH 5: [H₃O⁺] = 10⁻⁵ mol/L. Bei pH 8: [H₃O⁺] = 10⁻⁸ mol/L. Verhältnis: 10⁻⁵ / 10⁻⁸ = 10³ = 1000. Die Differenz von 3 pH-Einheiten entspricht dem Faktor 10³ = 1000. Der Unterschied ist nicht additiv (3-fach), sondern multiplikativ (10³-fach), da der pH-Wert eine logarithmische Skala ist. Diese Eigenschaft ist klinisch relevant: Kleine pH-Unterschiede (z. B. im Blut: 7,35 vs. 7,45) entsprechen bedeutsamen Unterschieden in der H₃O⁺-Konzentration.",
          hints: [
            "Differenz von n pH-Einheiten = Faktor 10ⁿ in der H₃O⁺-Konzentration",
            "10⁻⁵ / 10⁻⁸ = 10^(8−5) = 10³",
          ],
          difficulty: 2,
          tags: ["ph-logarithmus", "faktor-10", "konzentration"],
        },
      ],
    },

    {
      id: "ch-10-02",
      title: "Starke und schwache Säuren/Basen – Ka, Kb, pKa",
      imageUrl: "/images/bms/ch-ph-skala.jpg",
      imageCaption: "Abb.: Stärke von Säuren und Basen im Vergleich (OpenStax, CC BY 4.0)",
      stichworte: [
        "Starke Säure vollständige Dissoziation",
        "Schwache Säure Gleichgewicht",
        "Säurekonstante Ka",
        "pKa-Wert Säurestärke",
        "pH schwache Säure Näherung",
        "Mehrprotonige Säuren",
        "Phosphorsäure pKa-Stufen",
        "Kohlensäure pKa",
        "pKa + pKb = 14",
        "Dissoziationsgrad",
      ],
      content: `## Starke Säuren: Vollständige Dissoziation


**Starke Säuren** dissoziieren in wässriger Lösung vollständig (nahezu irreversibel). Das bedeutet: Alle Säuremoleküle geben ihr Proton an das Wasser ab.

Für starke Säuren gilt: **[H₃O⁺] = c(Säure)** (vollständige Dissoziation, kein Gleichgewicht). Der pH berechnet sich direkt: **pH = -log c(Säure)**.

Beispiel: 0,01 mol/L HCl → [H₃O⁺] = 0,01 = 10⁻² mol/L → **pH = 2**

{{IMAGE}}

## Schwache Säuren: Gleichgewichtige Dissoziation


**Schwache Säuren** dissoziieren nur teilweise. Es stellt sich ein Gleichgewicht ein:

HA + H₂O ⇌ H₃O⁺ + A⁻

Die **Säurekonstante Ka** (auch Ks) beschreibt dieses Gleichgewicht:

Ka = [H₃O⁺][A⁻] / [HA]

(Konzentration des Wassers ist konstant und wird in Ka eingearbeitet.)

Je größer Ka, desto stärker die Säure. Der **pKa = -log Ka** ist praktischer:

- **pKa < 0**: starke Säure
- **pKa = 0-4**: mittelstarke Säure
- **pKa = 4-10**: schwache Säure
- **pKa > 10**: sehr schwache Säure

## pH-Berechnung für schwache Säuren

Für eine schwache Säure HA der Konzentration c0 gilt mit dem Dissoziationsgrad alpha:

**Vereinfachte Formel** (gilt für alpha << 1, d. h. schwache Säure):

[H₃O⁺] = Wurzel(Ka · c₀)

**pH = 1/2 · (pKa − log c₀)**

Beispiel: 0,1 mol/L Essigsäure (pKa = 4,75):
- [H₃O⁺] = Wurzel(10⁻⁴·⁷⁵ × 0,1) = Wurzel(10⁻⁵·⁷⁵) = 10⁻²·⁸⁷⁵ ≈ 1,33 × 10⁻³ mol/L
- pH ≈ 2,87

## Mehrprotonige Säuren (polyprotische Säuren)

Säuren können mehrere Protonen stufenweise abgeben. Jede Stufe hat eine eigene Säurekonstante, die bei jeder folgenden Stufe kleiner wird:

**Phosphorsäure H₃PO₄:**
- pKa1 ≈ 2,15 (H₃PO₄ ⇌ H⁺ + H₂PO₄⁻)
- pKa2 ≈ 7,20 (H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻) ← wichtig für Phosphatpuffer
- pKa3 ≈ 12,35 (HPO₄²⁻ ⇌ H⁺ + PO₄³⁻)

**Kohlensäure H₂CO₃:**
- pKa1 ≈ 6,35 (H₂CO₃ ⇌ H⁺ + HCO₃⁻) ← wichtig für Blutpuffer
- pKa2 ≈ 10,33 (HCO₃⁻ ⇌ H⁺ + CO₃²⁻)

## Starke Basen: NaOH, KOH

Starke Basen dissoziieren vollständig. [OH⁻] = c(Base).

pOH = −log[OH⁻]; pH = 14 − pOH

Beispiel: 0,001 mol/L NaOH → [OH⁻] = 10⁻³ mol/L → pOH = 3 → pH = 11

## Schwache Basen und Kb

Schwache Basen (z. B. NH₃, Amine) reagieren teilweise mit Wasser:

B + H₂O ⇌ BH⁺ + OH⁻

**Basenkonstante:** Kb = [BH⁺][OH⁻] / [B]

**pKb = −log Kb**

Beziehung zwischen korrespondierendem Paar: **pKa(Säure) + pKb(korr. Base) = pKw = 14**

Beispiel: NH₃ hat pKb = 4,75 → korrespondierende Säure NH₄⁺ hat pKa = 9,25.

## Dissoziationsgrad alpha

Der **Dissoziationsgrad alpha** gibt an, welcher Anteil der eingesetzten Säure tatsächlich dissoziiert ist:

**alpha = [H₃O⁺] / c₀**

Für starke Säuren: alpha ≈ 1 (100 % dissoziiert). Für schwache Säuren: alpha << 1. Beispiel: 0,1 mol/L Essigsäure hat [H₃O⁺] = 1,33 × 10⁻³ mol/L → alpha = 0,0133 = **1,33 %** — nur jedes 75. Molekül ist dissoziiert.

> **Merke:** alpha steigt bei Verdünnung (Le Chatelier: Gleichgewicht verschiebt sich zur dissoziierten Seite). Verdünnt man Essigsäure auf 10^-5 mol/L, steigt alpha auf ~42 %.

## Salze schwacher Säuren/Basen -- Hydrolyse

Die Lösung eines Salzes kann sauer, basisch oder neutral reagieren, abhängig davon, ob Kation und/oder Anion aus schwachen Säuren/Basen stammen:

| Salz von | Reaktion in Lösung | Beispiel |
|---|---|---|
| Starke Säure + starke Base | Neutral (pH ~ 7) | NaCl |
| Schwache Säure + starke Base | Basisch (pH > 7) | CH3COONa |
| Starke Säure + schwache Base | Sauer (pH < 7) | NH4Cl |
| Schwache Säure + schwache Base | Abhängig von pKa/pKb | CH3COONH4 |

Natriumacetat (CH₃COONa) reagiert basisch, weil Acetat als konjugierte Base der schwachen Essigsäure Protonen aus dem Wasser aufnimmt: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.

## Klinische Relevanz

Im Blut agieren viele biologisch wichtige Moleküle als schwache Säuren oder Basen: CO2/H2CO3 (pKa ~ 6,1 im physiologischen Kontext), Phosphat (pKa2 ~ 7,2), Proteine (Histidinreste pKa ~ 6). Diese schwachen Säure-Base-Paare bilden die Grundlage der Puffersysteme des Blutes.

Die **Magensäure** (HCl, pH ~ 1-2) ist die einzige starke Säure im Körper und wird von Belegzellen durch aktiven H+/K+-ATPase-Transport sezerniert. Protonenpumpeninhibitoren (PPI wie Omeprazol) hemmen dieses Enzym und erhöhen den Magen-pH -- Standardtherapie bei Refluxerkrankung und Magenulzera.

> **Merke:** pKa + pKb = 14 (bei 25 °C) für jedes korrespondierende Säure-Base-Paar. Starke Säure → schwache korrespondierende Base. Schwache Säure → starke korrespondierende Base.

> **Prüfungstipp:** pH-Berechnung starke vs. schwache Säure nicht verwechseln! Starke Säure: pH = -log c₀ (direkt). Schwache Säure: pH = ½(pKa - log c₀). Merke die starken Säuren: HCl, HBr, HI, HNO₃, H₂SO₄ (1. Stufe), HClO₄.`,
      lernziele: [
        "Den Unterschied zwischen starken und schwachen Säuren anhand der Dissoziation und Ka/pKa erklären",
        "Den pH starker Säuren und Basen direkt berechnen",
        "Den pH schwacher Säuren mit der Näherungsformel pH = ½(pKa − log c₀) berechnen",
        "Mehrprotonige Säuren und ihre stufenweise Dissoziation beschreiben",
        "Die Beziehung pKa + pKb = 14 anwenden",
      ],
      sections: [
        {
          heading: "Starke vs. schwache Säuren: Was ist der Unterschied?",
          text: "Starke Säuren dissoziieren vollständig (Dissoziationsgrad α ≈ 1): In 0,1 mol/L HCl liegen nahezu keine HCl-Moleküle mehr vor, nur H₃O⁺ und Cl⁻. Der pH = −log c(HCl) direkt. Schwache Säuren dissoziieren nur teilweise (α << 1): In 0,1 mol/L Essigsäure dissoziieren nur ca. 1,3 % der Moleküle. Zur pH-Berechnung braucht man Ka. Merkhilfe: Starke Säure → keine HA-Moleküle mehr; schwache Säure → Gleichgewicht mit viel HA.",
          merksatz:
            "Starke Säure: [H₃O⁺] = c₀, pH = −log c₀. Schwache Säure: [H₃O⁺] = √(Ka · c₀), pH = ½(pKa − log c₀).",
        },
        {
          heading: "Ka, pKa und Säurestärke",
          text: "Ka ist die Gleichgewichtskonstante der Dissoziation: Ka = [H₃O⁺][A⁻]/[HA]. Großes Ka → starke Dissoziation → starke Säure. pKa = −log Ka: kleiner pKa = starke Säure. Starke Säuren wie HCl haben pKa ≈ −7, schwache wie CH₃COOH pKa ≈ 4,75, sehr schwache wie NH₄⁺ pKa ≈ 9,25. Beim Halbäquivalenzpunkt einer Titration gilt pH = pKa (Henderson-Hasselbalch bei gleicher Säure- und Basekonzentration).",
          merksatz:
            "pKa < 0: starke Säure. pKa 4–7: schwache Säure. pKa > 10: sehr schwache Säure. Kleineres pKa = stärkere Säure.",
        },
        {
          heading: "Mehrprotonige Säuren: Stufenweise Dissoziation",
          text: "Polyprotische Säuren geben ihre Protonen schrittweise ab. Jede Stufe hat eine eigene Ka, die kleiner wird: Ka1 > Ka2 > Ka3. Der erste Schritt ist immer der leichteste (aus neutralem Molekül), spätere Schritte schwieriger (aus negativer Spezies). Für Puffer nutzt man meist das Paar aus der am physiologisch relevanten pKa-Stufe. Beispiel: H₃PO₄ nutzt pKa2 = 7,2 für den Phosphatpuffer (HPO₄²⁻/H₂PO₄⁻) im Blut und Urin.",
          merksatz:
            "Polyprotische Säure: Ka1 >> Ka2 >> Ka3. Der pH einer Lösung wird meist durch Ka1 dominiert.",
        },
        {
          heading: "Starke Säuren — Übersicht",
          text: "Die häufigsten starken Säuren mit ihren pKa-Werten:",
          table: {
            headers: ["Säure", "Name", "pKa"],
            rows: [
              ["HCl", "Salzsäure", "≈ −7"],
              ["HBr", "Bromwasserstoffsäure", "≈ −9"],
              ["HI", "Iodwasserstoffsäure", "≈ −10"],
              ["HNO₃", "Salpetersäure", "≈ −1,4"],
              ["H₂SO₄", "Schwefelsäure (1. Stufe)", "≈ −3"],
              ["HClO₄", "Perchlorsäure", "≈ −10"],
            ],
          },
        },
        {
          heading: "Wichtige schwache Säuren und ihre pKa-Werte",
          text: "pKa-Werte ausgewählter schwacher Säuren:",
          table: {
            headers: ["Säure", "pKa"],
            rows: [
              ["Essigsäure (CH₃COOH)", "4,75"],
              ["Kohlensäure (H₂CO₃)", "6,35"],
              ["Ammoniumion (NH₄⁺)", "9,25"],
              ["Hydrogencarbonat (HCO₃⁻)", "10,33"],
              ["Wasser (H₂O)", "15,74"],
              ["Ethanol (C₂H₅OH)", "16"],
            ],
          },
        },
      ],

      merksätze: [
        "Starke Säuren: HCl, HBr, HI, HNO₃, H₂SO₄ (1. Stufe), HClO₄ – alle dissoziieren vollständig.",
        "Schwache Säuren dissoziieren teilweise: Ka-Wert bestimmt das Gleichgewicht.",
        "pKa = −log Ka: Je kleiner pKa, desto stärker die Säure.",
        "pH starke Säure: pH = −log c₀ (direkt, vollständige Dissoziation).",
        "pH schwache Säure (Näherung): pH = ½ · (pKa − log c₀).",
        "pKa(Säure) + pKb(korrespondierende Base) = 14 bei 25 °C.",
        "Starke Base (NaOH): [OH⁻] = c₀; pOH = −log c₀; pH = 14 − pOH.",
        "H₃PO₄: pKa1 ≈ 2,1; pKa2 ≈ 7,2; pKa3 ≈ 12,4 – stufenweise Dissoziation.",
        "H₂CO₃: pKa1 ≈ 6,35; pKa2 ≈ 10,33 – Basis des Blutpuffers.",
        "Am Halbäquivalenzpunkt einer Titration: pH = pKa der schwachen Säure.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie den Begriff der Säurekonstante Ka und des pKa-Werts. Wie berechnet man den pH-Wert einer 0,1 mol/L Essigsäure-Lösung (pKa = 4,75)? Warum unterscheidet sich dieser pH-Wert von dem einer 0,1 mol/L Salzsäure-Lösung?",
        answer:
          "Die Säurekonstante Ka beschreibt das Gleichgewicht der Protonenabgabe einer schwachen Säure HA in Wasser: Ka = [H₃O⁺][A⁻]/[HA]. Je größer Ka, desto weiter liegt das Gleichgewicht auf der rechten Seite (stärkere Dissoziation, stärkere Säure). Der pKa = −log Ka ist ein praktischer logarithmischer Maßstab: Kleinerer pKa = stärkere Säure.\n\nFür Essigsäure (pKa = 4,75, Ka ≈ 1,78 × 10⁻⁵):\nMit der Näherungsformel für schwache Säuren: [H₃O⁺] = √(Ka · c₀) = √(1,78 × 10⁻⁵ × 0,1) = √(1,78 × 10⁻⁶) ≈ 1,33 × 10⁻³ mol/L. pH ≈ −log(1,33 × 10⁻³) ≈ 2,87.\n\nFür Salzsäure (starke Säure, vollständige Dissoziation): [H₃O⁺] = c₀ = 0,1 mol/L → pH = 1.\n\nDer Unterschied: Salzsäure dissoziiert vollständig (alle HCl-Moleküle liefern H₃O⁺), Essigsäure nur zu ca. 1,3 % (nur wenige CH₃COOH-Moleküle dissoziieren). Obwohl beide die gleiche Ausgangskonzentration haben, ist der pH der Essigsäure fast 2 Einheiten höher – ein Faktor 100 in der H₃O⁺-Konzentration. Dies verdeutlicht: Konzentration ≠ Säurestärke.",
      },
      klinischerBezug:
        "Im Blut sind fast alle biologisch aktiven Säure-Base-Paare schwache Säuren: CO₂/HCO₃⁻ (pKa ≈ 6,1), H₂PO₄⁻/HPO₄²⁻ (pKa ≈ 7,2) und Histidinreste in Proteinen (pKa ≈ 6). Ihre partiellen Dissoziationsgleichgewichte erlauben das Abpuffern von H⁺-Veränderungen. Starke Säuren wie HCl (Magensäure, pH ≈ 1–2) dissoziieren vollständig und würden ohne Schutzschicht das Gewebe zerstören.",
      selfTest: [
        {
          question: "Welcher pKa-Wert kennzeichnet eine starke Säure?",
          options: ["pKa = 12", "pKa = 7", "pKa = −3", "pKa = 4,75", "pKa = 9,25"],
          correctIndex: 2,
          explanation:
            "Ein stark negativer pKa-Wert kennzeichnet eine starke Säure. Schwefelsäure (H₂SO₄) hat pKa ≈ −3, Salzsäure (HCl) pKa ≈ −7, Perchlorsäure pKa ≈ −10. Diese Säuren dissoziieren praktisch vollständig. pKa = 4,75 gehört zu Essigsäure (schwach), pKa = 9,25 zu NH₄⁺ (sehr schwach), pKa = 12 ist eine sehr schwache Säure. Merkreihe: HClO₄ > HI > HBr > HCl > H₂SO₄ (1. Stufe) > HNO₃ – alle starke Säuren.",
          hints: [
            "Je kleiner pKa (auch negativ), desto stärker die Säure",
            "Starke Säuren: pKa << 0; schwache Säuren: pKa > 2",
          ],
          difficulty: 1,
          tags: ["pka", "säurestärke", "starke-säure"],
        },
        {
          question: "Berechnen Sie den pH einer 0,01 mol/L HNO₃-Lösung (starke Säure).",
          options: ["pH = 1", "pH = 12", "pH = 3", "pH = 2", "pH = 7"],
          correctIndex: 3,
          explanation:
            "HNO₃ ist eine starke Säure und dissoziiert vollständig: HNO₃ → H⁺ + NO₃⁻. Daher: [H₃O⁺] = c(HNO₃) = 0,01 mol/L = 10⁻² mol/L. pH = −log(10⁻²) = 2. Die vollständige Dissoziation ist das Schlüsselprinzip für starke Säuren: Es gibt keine HNO₃-Moleküle mehr in Lösung, nur H₃O⁺ und NO₃⁻. Bei schwachen Säuren wäre der pH höher, da nicht alle Moleküle dissoziieren.",
          hints: [
            "HNO₃ ist eine starke Säure → vollständige Dissoziation → [H₃O⁺] = c₀",
            "pH = −log(0,01) = −log(10⁻²) = 2",
          ],
          difficulty: 1,
          tags: ["hno3", "starke-säure", "ph-rechnen"],
        },
        {
          question:
            "Eine schwache Säure HA hat Ka = 10⁻⁵. Welcher pKa ergibt sich, und wie groß ist der pH einer 0,1 mol/L Lösung (Näherung)?",
          options: [
            "pKa = 5; pH = 2,5",
            "pKa = 5; pH = 3,5",
            "pKa = 5; pH = 5",
            "pKa = −5; pH = 3",
            "pKa = 5; pH = 3",
          ],
          correctIndex: 4,
          explanation:
            "pKa = −log(10⁻⁵) = 5. Für den pH: Näherungsformel für schwache Säuren: pH = ½ · (pKa − log c₀) = ½ · (5 − log 0,1) = ½ · (5 − (−1)) = ½ · 6 = 3. Alternativ: [H₃O⁺] = √(Ka · c₀) = √(10⁻⁵ × 10⁻¹) = √(10⁻⁶) = 10⁻³ mol/L → pH = 3. Die Näherung gilt, wenn die Dissoziation << c₀ ist (hier: 10⁻³ << 0,1 ✓).",
          hints: [
            "pKa = −log Ka; Näherung: pH = ½(pKa − log c₀)",
            "[H₃O⁺] = √(Ka · c₀) = √(10⁻⁵ · 10⁻¹) = 10⁻³",
          ],
          difficulty: 2,
          tags: ["schwache-säure", "ka", "näherungsformel"],
        },
        {
          question:
            "Ammoniak (NH₃) hat pKb = 4,75. Welchen pKa hat das konjugierte Ammoniumion (NH₄⁺)?",
          options: ["pKa = 9,25", "pKa = 4,75", "pKa = 14", "pKa = 7", "pKa = −4,75"],
          correctIndex: 0,
          explanation:
            "Es gilt: pKa(Säure) + pKb(korrespondierende Base) = pKw = 14 (bei 25 °C). Also: pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75 = 9,25. NH₄⁺ ist eine schwache Säure (pKa = 9,25), NH₃ ist eine schwache Base (pKb = 4,75). Das konjugierte Paar NH₄⁺/NH₃ unterscheidet sich um genau ein H⁺. Diese Beziehung gilt immer für korrespondierende Säure-Base-Paare und folgt aus Ks × Kb = Kw.",
          hints: [
            "pKa(korr. Säure) + pKb(korr. Base) = 14",
            "pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75",
          ],
          difficulty: 2,
          tags: ["nh3", "pka-pkb-beziehung", "konjugiertes-paar"],
        },
        {
          question:
            "Phosphorsäure H₃PO₄ ist eine dreistufige Säure mit pKa1 ≈ 2,1, pKa2 ≈ 7,2, pKa3 ≈ 12,4. Welche Spezies dominiert bei pH 7?",
          options: [
            "H₃PO₄ (undissoziiert)",
            "H₂PO₄⁻ und HPO₄²⁻ (ungefähr gleich)",
            "HPO₄²⁻ (fast vollständig)",
            "PO₄³⁻ (vollständig deprotoniert)",
            "H₂PO₄⁻ (dominiert)",
          ],
          correctIndex: 1,
          explanation:
            "Bei pH 7 liegt das System nahe am pKa2 ≈ 7,2. Nach Henderson-Hasselbalch gilt bei pH = pKa: [A⁻]/[HA] = 1, also gleiche Mengen beider Spezies. Bei pH 7 (etwas unter pKa2 = 7,2) überwiegt leicht H₂PO₄⁻ gegenüber HPO₄²⁻, aber beide sind in ähnlicher Konzentration vorhanden. Dies macht das H₂PO₄⁻/HPO₄²⁻-Paar ideal für den physiologischen Phosphatpuffer bei pH ≈ 7–7,4. H₃PO₄ ist bei pH 7 praktisch nicht mehr vorhanden (weit über pKa1 = 2,1).",
          hints: [
            "Bei pH = pKa liegt das Gleichgewicht 50:50 zwischen Säure und korrespondierender Base",
            "pKa2 der Phosphorsäure ≈ 7,2 liegt nah an pH 7",
          ],
          difficulty: 2,
          tags: ["phosphorsäure", "dreistufig", "speziesverteilung"],
        },
        {
          question: "Eine 0,1 mol/L NaOH-Lösung (starke Base) hat welchen pH-Wert?",
          options: ["pH = 1", "pH = 7", "pH = 13", "pH = 12", "pH = 14"],
          correctIndex: 2,
          explanation:
            "NaOH ist eine starke Base, dissoziiert vollständig: [OH⁻] = 0,1 mol/L = 10⁻¹ mol/L. pOH = −log(10⁻¹) = 1. pH = 14 − pOH = 14 − 1 = 13. Bei 0,1 mol/L starker Base ist pH = 13, nicht 14 (das wäre 1 mol/L NaOH: [OH⁻] = 1 mol/L, pOH = 0, pH = 14). Der Unterschied zwischen pH 12, 13 und 14 entspricht jeweils einer 10-fachen Änderung der OH⁻-Konzentration.",
          hints: [
            "NaOH: [OH⁻] = c₀; pOH = −log c₀; pH = 14 − pOH",
            "0,1 = 10⁻¹ → pOH = 1 → pH = 13",
          ],
          difficulty: 1,
          tags: ["naoh", "starke-base", "poh-rechnen"],
        },
        {
          question: "Warum nimmt die Säurestärke bei mehrprotonigen Säuren von Stufe zu Stufe ab?",
          options: [
            "Weil die Molekülmasse mit jeder Deprotonierung sinkt",
            "Weil die Reaktionstemperatur sinkt",
            "Weil die Konzentration der Säure sinkt",
            "Weil das Ion mit jeder Protonabgabe negativer wird und das nächste H⁺ fester hält",
            "Weil mehr Wasser verbraucht wird",
          ],
          correctIndex: 3,
          explanation:
            "Bei polyprotischen Säuren wird jedes weitere Proton von einer negativ geladenen Spezies abgegeben. Ein negatives Ion hält Protonen deutlich stärker (elektrostatische Anziehung) als ein neutrales Molekül. Deshalb: Ka1 >> Ka2 >> Ka3. Bei H₃SO₄ → H₂SO₄ → HSO₄⁻ → SO₄²⁻ nimmt die Ladung zu, und jede Stufe ist schwerer zu deprotonieren. Der gleiche Effekt gilt für H₃PO₄ (pKa1 ≈ 2,1; pKa2 ≈ 7,2; pKa3 ≈ 12,4) – jede Stufe ist um ca. 5 pKa-Einheiten schwächer.",
          hints: [
            "Negative Ladung stabilisiert H⁺ im Molekül → schwieriger abzuspalten",
            "Ka1 >> Ka2: erste Stufe aus neutralem Molekül, zweite aus negativem Ion",
          ],
          difficulty: 3,
          tags: ["polyprotische-säure", "mehrstufig", "ka-stufenfolge"],
        },
        {
          question:
            "Methylamin (CH₃NH₂) ist eine schwache Base mit pKb = 3,36. Eine wässrige Lösung von Methylaminhydrochlorid (CH₃NH₃⁺Cl⁻) reagiert:",
          options: [
            "Neutral (pH = 7), weil es ein Salz ist",
            "Basisch (pH > 7), weil Methylamin eine Base ist",
            "Basisch (pH > 7), weil HCl eine starke Säure war",
            "Sauer (pH < 7), weil Cl⁻ sauer reagiert",
            "Sauer (pH < 7), weil CH₃NH₃⁺ eine schwache Säure ist",
          ],
          correctIndex: 4,
          explanation:
            "Methylaminhydrochlorid enthält das Kation CH₃NH₃⁺ (konjugierte Säure zum Methylamin) und Cl⁻ (konjugierte Base der starken Säure HCl). Cl⁻ reagiert neutral (Salz starker Säure). CH₃NH₃⁺ ist die konjugierte Säure einer schwachen Base: pKa(CH₃NH₃⁺) = 14 − pKb(CH₃NH₂) = 14 − 3,36 = 10,64. CH₃NH₃⁺ ist also eine sehr schwache Säure und gibt leicht Protonen ab → Lösung reagiert sauer (pH < 7). Allgemein: Salz einer schwachen Base mit starker Säure → saure Lösung.",
          hints: [
            "Salz der schwachen Base + starke Säure → saure Lösung (konjugierte Säure ist schwach sauer)",
            "pKa(CH₃NH₃⁺) = 14 − pKb(CH₃NH₂)",
          ],
          difficulty: 3,
          tags: ["salz-hydrolyse", "schwache-base", "saure-lösung"],
        },
      ],
    },

    {
      id: "ch-10-03",
      title: "Puffersysteme und Henderson-Hasselbalch",
      imageUrl: "/images/bms/ch-ph-skala.jpg",
      imageCaption: "Abb.: Pufferwirkung im biologischen pH-Bereich (OpenStax, CC BY 4.0)",
      stichworte: [
        "Henderson-Hasselbalch-Gleichung",
        "Pufferbereich pKa ± 1",
        "Pufferkapazität",
        "Carbonat-Puffersystem",
        "Bicarbonat HCO₃⁻",
        "Phosphatpuffer",
        "Proteinpuffer Hämoglobin",
        "Azidose Alkalose",
        "Lunge CO₂ Regulation",
        "Niere HCO₃⁻ Regulation",
        "Bohr-Effekt",
        "Carboanhydrase",
        "Acetazolamid",
      ],
      content: `## Was ist ein Puffer?


Ein **Puffersystem** ist eine Lösung, die pH-Änderungen bei Zugabe kleiner Mengen Säure oder Base minimiert. Puffer bestehen aus einem **schwachen Säure-Base-Paar**:

- Einer **schwachen Säure (HA)** -- neutralisiert zugesetzte Basen
- Ihrer **konjugierten Base (A-)** -- neutralisiert zugesetzte Säuren

Reaktionen beim Puffern:

Zugabe von H⁺:  A⁻ + H⁺ → HA          (Base fängt Säure ab)
Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O  (Säure fängt Base ab)

## Die Henderson-Hasselbalch-Gleichung

Die zentrale Gleichung für Puffersysteme:

pH = pKa + log([A⁻]/[HA])

**Bedeutung der Terme:**
- pKa: Säurestärke der schwachen Säure im Puffer
- [A⁻]/[HA]: Verhältnis von konjugierter Base zu schwacher Säure
- Bei [A⁻] = [HA] (Verhältnis = 1): log(1) = 0 → **pH = pKa**

**Pufferbereich:** pH = pKa +/- 1 (effektiver Pufferbereich)

Außerhalb dieses Bereichs kann das System kaum noch puffern.

### Herleitung aus Ka:
Ka = [H₃O⁺][A⁻]/[HA] → [H₃O⁺] = Ka · [HA]/[A⁻]
→ −log[H₃O⁺] = −log Ka + log([A⁻]/[HA])
→ pH = pKa + log([A⁻]/[HA])

## Pufferkapazität

Die **Pufferkapazität** gibt an, wie viel Säure oder Base ein Puffer aufnehmen kann, bevor der pH sich stark ändert. Sie ist:

- Am **größten bei pH = pKa** (gleiche Mengen HA und A-)
- Proportional zur **Gesamtkonzentration** des Puffersystems (c = [HA] + [A-])
- **Begrenzt**: Ist entweder HA oder A- verbraucht, versagt der Puffer

**Praktische Konsequenz:** Ein konzentrierterer Puffer kann mehr Säure/Base abpuffern, ändert aber den pH bei Verdünnung (nur wenn beide Komponenten gleich verdünnt werden, bleibt pH konstant).

{{IMAGE}}

## Das Carbonat-Puffersystem im Blut


Das wichtigste Puffersystem im Blut ist das **Kohlensäure-Bicarbonat-System**:

CO₂(g) ⇌ CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

Der effektive pKa im physiologischen Kontext (berücksichtigt CO2-Hydratation) beträgt **~ 6,1**.

Henderson-Hasselbalch für Blut:
7,4 = 6,1 + log([HCO3-]/[CO2])
log([HCO3-]/[CO2]) = 1,3 => [HCO3-]/[CO2] ~ 20:1

Normalwerte im arteriellen Blut:
- [HCO3-] ~ 24 mmol/L
- pCO2 ~ 40 mmHg (entspricht ~1,2 mmol/L gelöstem CO2)
- pH ~ 7,4

**Regulation:**
- Lunge: reguliert CO2 (schnell, Minuten)
- Niere: reguliert HCO3- (langsam, Stunden bis Tage)

## Der Phosphatpuffer

Das Phosphat-Puffersystem (H2PO4-/HPO4 2-, pKa ~ 7,2) ist im Blutplasma weniger wichtig, aber entscheidend im **Urin** und **intrazellulär**:

H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻     pKa ≈ 7,2

Bei pH 7,4 überwiegt HPO4 2- (~80 %) über H2PO4- (~20 %).

## Proteinpuffer

Proteine (besonders Hämoglobin und Plasmaproteine) sind die **quantitativ wichtigsten** Puffer im Blut. Die ionisierbaren Seitenketten der Aminosäuren, v. a. **Histidin** (pKa ~ 6), fungieren als Säure-Base-Paare. Hämoglobin wirkt im Erythrozyten als Puffer, besonders beim Bohr-Effekt (H+ stabilisiert deoxy-Hb).

## Klinische Puffersysteme im Überblick

| Puffersystem | pKa | Wichtigste Lokalisation |
|---|---|---|
| H2CO3/HCO3- | 6,1 (eff.) | Blutplasma |
| H2PO4-/HPO4 2- | 7,2 | Intrazelluläres Milieu, Urin |
| Hämoglobin-Puffer | ~6-8 | Erythrozyten |
| Plasmaprotein-Puffer | ~6-8 | Blutplasma |

## Klinisch: Azidose und Alkalose durch Pufferversagen

Der Carbonat-Puffer kann versagen, wenn:
- **CO2 steigt** (respiratorische Azidose: z. B. Hyperventilationsausfall, COPD)
- **HCO3- sinkt** (metabolische Azidose: z. B. Ketoazidose, Laktazidose, Nierenversagen)
- **CO2 sinkt** (respiratorische Alkalose: Hyperventilation)
- **HCO3- steigt** (metabolische Alkalose: z. B. Erbrechen, Diuretika)

## Hämoglobin als Puffer: Bohr-Effekt

Hämoglobin (Hb) ist nach dem Carbonat-System der zweitwichtigste Blutpuffer:

**HbO₂ + H⁺ ⇌ HHb⁺ + O₂**

Abfallendes pH (saures Milieu bei Muskelarbeit, CO₂, Laktat) → Le Chatelier → mehr O₂ wird freigesetzt → Sauerstoffversorgung des aktiven Gewebes steigt. Bei hohem pH (Lunge) verschiebt sich das Gleichgewicht links → mehr O₂ wird gebunden.

Zusätzlich beeinflusst 2,3-DPG (Diphosphoglycerat) die O₂-Affinität: Bei hohem 2,3-DPG (z. B. bei Hypoxie, Anämie) sinkt die O₂-Affinität → mehr O₂-Abgabe ins Gewebe.

## Carboanhydrase


Die **Carboanhydrase (CA)** katalysiert: CO₂ + H₂O ⇌ H₂CO₃

- Beschleunigung: ca. 10⁶-fach (k_cat ≈ 10⁶/s — eines der schnellsten Enzyme)
- Cofaktor: Zn²⁺ im aktiven Zentrum
- Vorkommen: Erythrozyten (CO₂-Transport), Nierentubuli (Säure-Base), Augenkammerwasser (Glaukompathogenese)

Ohne CA würde der CO₂-Transport im Blut und die pH-Regulierung zusammenbrechen. **Acetazolamid** hemmt CA und wird als Diuretikum und zur Glaukomtherapie eingesetzt.

---

> **Merke:** Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]). Bei [A-] = [HA] ist pH = pKa (maximale Pufferkapazität). Effektiver Pufferbereich: pKa +/- 1.

> 💡 **Prüfungstipp:** Henderson-Hasselbalch auswendig können! Wenn [A⁻] = [HA] → log(1) = 0 → pH = pKa. Das ist der Punkt maximaler Pufferkapazität.

> **Merke:** Blut-pH 7,4 entsteht durch [HCO3-]/[CO2] ~ 20:1 bei pKa(eff.) = 6,1. Lunge reguliert pCO2 schnell (Minuten), Niere reguliert HCO3- langsam (Stunden bis Tage). Versagt die Kompensation, drohen Azidose (pH < 7,35) oder Alkalose (pH > 7,45).

> **Merke:** Bohr-Effekt: pH ↓ / pCO₂ ↑ → Hb-O₂-Affinität ↓ → mehr O₂-Abgabe ans Gewebe. Le Chatelier auf molekularer Ebene.`,
      lernziele: [
        "Die Henderson-Hasselbalch-Gleichung anwenden und den pH von Pufferlösungen berechnen",
        "Den Pufferbereich (pH = pKa ± 1) und die Pufferkapazität erklären",
        "Das Carbonat-Puffersystem des Blutes mit der Henderson-Hasselbalch-Gleichung analysieren",
        "Die Rolle von Phosphat- und Proteinpuffern im Körper beschreiben",
        "Azidose und Alkalose auf das Versagen des Carbonat-Puffersystems zurückführen",
        "Den Bohr-Effekt als Le-Chatelier-Prinzip in der Hämoglobin-O₂-Bindung erläutern.",
        "Die Rolle der Carboanhydrase im CO₂-Transport und der pH-Regulierung erklären.",
      ],
      sections: [
        {
          heading: "Henderson-Hasselbalch: Die Formel verstehen",
          text: "pH = pKa + log([A⁻]/[HA]) gilt für jedes konjugierte Säure-Base-Paar. Bei [A⁻] = [HA] ist log(1) = 0, also pH = pKa. Erhöht man [A⁻] (mehr Base), steigt pH. Erhöht man [HA] (mehr Säure), sinkt pH. Der effektive Pufferbereich liegt bei pH = pKa ± 1 (Verhältnis 10:1 bis 1:10). Klinisch: Blut-pH 7,4 = pKa(6,1) + log(20) = 6,1 + 1,3 = 7,4.",
          merksatz:
            "pH = pKa + log([Base]/[Säure]). Bei pH = pKa: 50:50-Verhältnis. Pufferbereich: pKa ± 1.",
        },
        {
          heading: "Das Blut-Carbonat-System: Lunge und Niere als Regulatoren",
          text: "Blut-pH 7,4 hält das System bei [HCO₃⁻]/[CO₂] ≈ 20:1 aufrecht. Die Lunge reguliert CO₂ innerhalb von Minuten (schnelle Kompensation): Hyperventilation → CO₂ sinkt → pH steigt. Die Niere reguliert HCO₃⁻ über Stunden bis Tage (langsame Kompensation): mehr H⁺-Ausscheidung und HCO₃⁻-Reabsorption. Respiratorische Störungen werden renal kompensiert und umgekehrt.",
          merksatz:
            "Lunge reguliert CO₂ (schnell), Niere reguliert HCO₃⁻ (langsam). pKa(eff.) = 6,1 für Blutpuffer.",
        },
        {
          heading: "Pufferkapazität: Warum Konzentration wichtig ist",
          text: "Die Pufferkapazität ist proportional zur Konzentration beider Pufferkomponenten. Ein Puffer bei pH = pKa hat maximale Kapazität (beide Komponenten vorhanden). Ist eine Komponente erschöpft (nur noch HA oder nur noch A⁻), versagt der Puffer. Klinisch: Bei metabolischer Azidose wird HCO₃⁻ verbraucht (puffert H⁺ zu H₂CO₃ → CO₂) → Pufferkapazität nimmt ab → pH sinkt trotz Kompensation.",
          merksatz:
            "Pufferkapazität maximal bei pH = pKa. Konzentriertere Puffer = höhere Kapazität. Begrenzt: Erschöpfung möglich.",
        },
        {
          heading: "Bohr-Effekt und Carboanhydrase",
          text: "Bohr-Effekt: HbO₂ + H⁺ ⇌ HHb⁺ + O₂. Niedriger pH in aktiven Geweben senkt O₂-Affinität von Hb → O₂-Abgabe steigt (Le Chatelier). In der Lunge (hoher pH) bindet Hb wieder O₂. Carboanhydrase (CA): Zn²⁺-Metalloenzym, beschleunigt CO₂ + H₂O ⇌ H₂CO₃ um 10⁶-fach. Vorkommen: Erythrozyten, Nierentubuli, Augenkammerwasser. Acetazolamid hemmt CA → Diuretikum und Glaukomtherapie.",
          merksatz:
            "Bohr-Effekt: pH ↓ → Hb gibt mehr O₂ ab. Carboanhydrase: Zn²⁺-Enzym, 10⁶× schneller, gehemmt durch Acetazolamid.",
        },
      ],

      merksätze: [
        "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) – die wichtigste Puffergleichung.",
        "Bei [A⁻] = [HA] gilt pH = pKa (Halbäquivalenzpunkt; maximale Pufferkapazität).",
        "Pufferbereich: pH = pKa ± 1 (Verhältnis 1:10 bis 10:1).",
        "Blut-Puffersystem: H₂CO₃/HCO₃⁻, pKa(eff.) ≈ 6,1; pH 7,4 → [HCO₃⁻]/[CO₂] ≈ 20:1.",
        "Lunge reguliert CO₂ schnell; Niere reguliert HCO₃⁻ langsam.",
        "Phosphatpuffer (H₂PO₄⁻/HPO₄²⁻, pKa ≈ 7,2): wichtig intrazellulär und im Urin.",
        "Proteine (Hämoglobin, Histidinreste) sind quantitativ wichtigste Puffer im Blut.",
        "Zugabe von H⁺: A⁻ + H⁺ → HA. Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O.",
        "Azidose: pH < 7,35; Alkalose: pH > 7,45 – Pufferversagen oder Überbelastung.",
        "Pufferkapazität erschöpft → pH fällt/steigt stark → medizinischer Notfall.",
        "Bohr-Effekt: niedrigeres pH → Hb gibt mehr O₂ ab (Le Chatelier).",
        "Carboanhydrase: CO₂ + H₂O ⇌ H₂CO₃ (10⁶× beschleunigt, Zn²⁺-Enzym).",
        "Acetazolamid hemmt Carboanhydrase → Diuretikum und Glaukomtherapie.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie anhand der Henderson-Hasselbalch-Gleichung, warum das Carbonat-Puffersystem trotz eines pKa von 6,1 den Blut-pH bei 7,4 puffern kann, und wie Lunge und Niere zur Regulation beitragen.",
        answer:
          "Die Henderson-Hasselbalch-Gleichung lautet: pH = pKa + log([HCO₃⁻]/[CO₂]). Für das Blut: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]), also log([HCO₃⁻]/[CO₂]) = 1,3, d. h. das Verhältnis [HCO₃⁻]/[CO₂] ≈ 20:1. Obwohl der pKa (6,1) weit vom Blut-pH (7,4) entfernt liegt und der optimale Pufferbereich eigentlich bei pKa ± 1 = 5,1–7,1 wäre, ist das System effektiv, weil beide Komponenten reguliert werden können.\n\nDie **Lunge** reguliert CO₂ schnell (innerhalb von Minuten) über die Ventilation: Azidose → Hyperventilation → CO₂ sinkt → Nenner kleiner → Verhältnis steigt → pH steigt (respiratorische Kompensation). Alkalose → Hypoventilation → CO₂ steigt → pH sinkt.\n\nDie **Niere** reguliert HCO₃⁻ langsam (Stunden bis Tage): Bei Azidose scheidet die Niere mehr H⁺ aus (als NH₄⁺ und titrierbarer Säure) und reabsorbiert mehr HCO₃⁻ → Zähler steigt → pH steigt. Bei Alkalose umgekehrt.\n\nDie Kombination aus schneller respiratorischer und langsamer renaler Kompensation macht das System besonders flexibel und zum wichtigsten Blutpuffer. Die hohen Konzentrationen (HCO₃⁻ ≈ 24 mmol/L) verleihen dem System zudem eine große Pufferkapazität.",
      },
      klinischerBezug:
        "Die Henderson-Hasselbalch-Gleichung ist das Fundament der klinischen Blutgasanalyse: pH = 6,1 + log([HCO₃⁻]/[pCO₂ × 0,0307]). Eine respiratorische Azidose (pCO₂ ↑, z. B. bei COPD) wird renal durch HCO₃⁻-Retention kompensiert; eine metabolische Azidose (HCO₃⁻ ↓, z. B. Ketoazidose) wird respiratorisch durch Hyperventilation (Kussmaul-Atmung, CO₂ ↓) kompensiert. Diese gegenläufige Kompensation ist diagnostisch zentral zur Unterscheidung primärer und kompensatorischer Störungen.",
      selfTest: [
        {
          question:
            "Ein Puffersystem aus Essigsäure (pKa = 4,75) enthält [CH₃COO⁻] = 0,1 mol/L und [CH₃COOH] = 0,01 mol/L. Welcher pH liegt vor?",
          options: ["pH = 5,75", "pH = 4,75", "pH = 3,75", "pH = 6,75", "pH = 7,4"],
          correctIndex: 0,
          explanation:
            "pH = pKa + log([A⁻]/[HA]) = 4,75 + log(0,1/0,01) = 4,75 + log(10) = 4,75 + 1 = 5,75. Das Verhältnis [Base]/[Säure] = 10:1 verschiebt den pH um +1 pKa-Einheit nach oben. Bei 1:1 wäre pH = pKa = 4,75; bei 100:1 wäre pH = 4,75 + 2 = 6,75. Die Henderson-Hasselbalch-Gleichung erlaubt diese direkte Berechnung, ohne Ka explizit umzurechnen.",
          hints: ["pH = pKa + log([A⁻]/[HA])", "log(10) = 1 → pH = 4,75 + 1"],
          difficulty: 1,
          tags: ["henderson-hasselbalch", "puffer", "acetat"],
        },
        {
          question: "Welche der folgenden Aussagen zur Pufferkapazität ist FALSCH?",
          options: [
            "Die Pufferkapazität ist am größten, wenn pH = pKa",
            "Ein Puffer kann unbegrenzt viel Säure oder Base neutralisieren",
            "Eine konzentriertere Pufferlösung hat eine größere Pufferkapazität",
            "Die Pufferkapazität nimmt ab, wenn das Verhältnis [A⁻]/[HA] sehr groß oder sehr klein wird",
            "Der effektive Pufferbereich liegt bei pH = pKa ± 1",
          ],
          correctIndex: 1,
          explanation:
            "Ein Puffer kann NICHT unbegrenzt Säure oder Base aufnehmen – das ist die falsche Aussage. Die Pufferkapazität ist begrenzt durch die Mengen der vorhandenen Pufferkomponenten. Wird HA vollständig zu A⁻ umgewandelt (bei Zugabe von Base) oder A⁻ vollständig zu HA (bei Zugabe von Säure), ist die Kapazität erschöpft. Alle anderen Aussagen sind korrekt: Maximale Kapazität bei pH = pKa, konzentriertere Puffer puffern mehr, effektiver Pufferbereich bei pKa ± 1.",
          hints: [
            "Puffer haben endliche Kapazität – erschöpfbar",
            "Maximale Kapazität bei pH = pKa, nicht unbegrenzt",
          ],
          difficulty: 1,
          tags: ["pufferkapazität", "pufferbereich", "pka-pm1"],
        },
        {
          question:
            "Das Blut hat pH 7,4, der effektive pKa des Carbonat-Systems beträgt 6,1. Wie hoch ist das Verhältnis [HCO₃⁻]/[CO₂]?",
          options: ["1:1", "10:1", "20:1", "100:1", "7,4:6,1"],
          correctIndex: 2,
          explanation:
            "Henderson-Hasselbalch: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]). log([HCO₃⁻]/[CO₂]) = 7,4 − 6,1 = 1,3. [HCO₃⁻]/[CO₂] = 10^1,3 ≈ 20. Das Verhältnis ist ≈ 20:1 (nicht 10:1, was einem Unterschied von genau 1 pH-Einheit entsprechen würde). Normalwerte: [HCO₃⁻] ≈ 24 mmol/L, gelöstes CO₂ ≈ 1,2 mmol/L (bei pCO₂ = 40 mmHg). Das asymmetrische Verhältnis 20:1 erklärt, warum das System auf Säurezugabe empfindlicher reagiert als auf Basenzugabe.",
          hints: ["7,4 = 6,1 + log(x) → log(x) = 1,3 → x = 10^1,3 ≈ 20", "10^1 = 10; 10^1,3 ≈ 20"],
          difficulty: 2,
          tags: ["carbonat-puffer", "hco3-co2-verhältnis", "blut-ph"],
        },
        {
          question:
            "Ein Patient hat pH 7,2, pCO₂ = 30 mmHg (erniedrigt). Was für eine Störung liegt vor?",
          options: [
            "Respiratorische Azidose",
            "Metabolische Alkalose",
            "Respiratorische Alkalose",
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Kein Säure-Base-Problem",
          ],
          correctIndex: 3,
          explanation:
            "pH 7,2 < 7,35 → Azidose. pCO₂ = 30 mmHg (normal: 35–45 mmHg) → erniedrigt → Hyperventilation. Bei einer primären respiratorischen Azidose wäre pCO₂ erhöht. Hier ist pCO₂ erniedrigt – das ist eine respiratorische Kompensation: Die Hyperventilation versucht, durch CO₂-Abatmung den pH zu heben. Primäre Störung: metabolische Azidose (HCO₃⁻ ↓). Kompensation: respiratorisch (pCO₂ ↓ durch Hyperventilation). Klinisches Beispiel: Diabetische Ketoazidose mit Kussmaul-Atmung.",
          hints: [
            "pH < 7,35 = Azidose; pCO₂ erniedrigt = Hyperventilation (Kompensation)",
            "Primäre Störung: wo liegt die Ursache? Kompensation: entgegengesetzt",
          ],
          difficulty: 3,
          tags: ["metabolische-azidose", "ketoazidose", "kussmaul"],
        },
        {
          question:
            "Warum liegt der pKa des Carbonat-Puffers effektiv bei 6,1, obwohl die reine Kohlensäure H₂CO₃ pKa1 ≈ 6,35 hat?",
          options: [
            "Weil die Niere den pKa verändert",
            "Weil der Ionenstärke-Effekt im Blut den pKa senkt",
            "Weil Hämoglobin den pKa senkt",
            "Weil der pH-Wert des Blutes den pKa beeinflusst",
            "Weil gelöstes CO₂ in die Pufferrechnung einbezogen wird und [CO₂] >> [H₂CO₃] ist",
          ],
          correctIndex: 4,
          explanation:
            "Im Blut ist die Konzentration von gelöstem CO₂ viel größer als die von H₂CO₃ (das Hydratationsgleichgewicht CO₂ + H₂O ⇌ H₂CO₃ liegt weit auf der CO₂-Seite, Verhältnis ca. 700:1). Wenn man in der Pufferrechnung nicht [H₂CO₃] allein, sondern [CO₂(aq)] + [H₂CO₃] ≈ [CO₂(aq)] als Nenner verwendet (was physiologisch sinnvoll ist, da CO₂ der regulierbare Parameter ist), ergibt sich ein effektiver pKa von 6,1 statt 6,35. Dieser effektive pKa wird mit 6,1 angegeben und ist für die Henderson-Hasselbalch-Gleichung im Blutkontext zu verwenden.",
          hints: [
            "CO₂(aq) >> H₂CO₃; effektiver Nenner ist CO₂(gesamt)",
            "pKa(eff) = 6,1 gilt für [HCO₃⁻]/[CO₂(aq)] – der in der Klinik verwendete Wert",
          ],
          difficulty: 3,
          tags: ["pka-effektiv", "co2-h2co3", "carbonat-puffer"],
        },
        {
          question:
            "Man bereitet einen Phosphatpuffer bei pH 7,4 mit dem Paar H₂PO₄⁻/HPO₄²⁻ (pKa = 7,2) vor. Welches Molverhältnis [HPO₄²⁻]/[H₂PO₄⁻] ist erforderlich?",
          options: [
            "Etwa 1,58:1 (mehr HPO₄²⁻)",
            "Genau 1:1",
            "Etwa 0,16:1 (mehr H₂PO₄⁻)",
            "Etwa 10:1",
            "Genau 7,4:7,2",
          ],
          correctIndex: 0,
          explanation:
            "Henderson-Hasselbalch: 7,4 = 7,2 + log([HPO₄²⁻]/[H₂PO₄⁻]). log([HPO₄²⁻]/[H₂PO₄⁻]) = 0,2. [HPO₄²⁻]/[H₂PO₄⁻] = 10^0,2 ≈ 1,58. Es überwiegt HPO₄²⁻ leicht (etwa 61 % HPO₄²⁻, 39 % H₂PO₄⁻). Bei pKa = 7,2 und pH = 7,4 (0,2 pH-Einheiten über pKa) gilt: etwas mehr als 50 % liegen als Base vor. Bei pKa 7,2 ist dieser Puffer ideal für physiologische pH-Werte und wird für Laborpuffer verwendet.",
          hints: [
            "7,4 = 7,2 + log(x) → log(x) = 0,2 → x = 10^0,2 ≈ 1,58",
            "10^0,2 ≈ 1,58 (da 10^0 = 1 und 10^1 = 10)",
          ],
          difficulty: 2,
          tags: ["phosphatpuffer", "ph74", "henderson-hasselbalch"],
        },
        {
          question:
            "Warum ist der Phosphatpuffer (pKa ≈ 7,2) im Blutplasma weniger wichtig als intrazellulär, obwohl sein pKa ideal für pH 7,4 wäre?",
          options: [
            "Weil Phosphat zu schnell reagiert und das System instabil macht",
            "Weil die Phosphatkonzentration im Plasma sehr niedrig ist (~1 mmol/L) verglichen mit HCO₃⁻ (~24 mmol/L)",
            "Weil Phosphat nur im sauren Milieu als Puffer wirkt",
            "Weil Phosphat mit Kalzium reagiert und ausfällt",
            "Weil Phosphat durch die Niere vollständig entfernt wird",
          ],
          correctIndex: 1,
          explanation:
            "Obwohl pKa ≈ 7,2 ideal nahe am physiologischen pH liegt, ist die Phosphatkonzentration im Blutplasma sehr niedrig (ca. 1 mmol/L), verglichen mit HCO₃⁻ (ca. 24 mmol/L). Die Pufferkapazität ist proportional zur Konzentration der Pufferkomponenten. Intrazellulär hingegen sind Phosphatkonzentrationen höher (ca. 10–40 mmol/L), weshalb der Phosphatpuffer dort eine bedeutende Rolle spielt. Zusätzlich ist der Carbonatpuffer durch die Regulierbarkeit von CO₂ über die Lunge besonders leistungsfähig.",
          hints: [
            "Pufferkapazität ∝ Konzentration der Pufferkomponenten",
            "Plasma: [HCO₃⁻] ≈ 24 mmol/L >> [Phosphat] ≈ 1 mmol/L",
          ],
          difficulty: 3,
          tags: ["phosphatpuffer", "konzentration", "intrazellulär"],
        },
        {
          question:
            "Welches Ergebnis hat die Henderson-Hasselbalch-Gleichung, wenn [A⁻]/[HA] = 100:1?",
          options: ["pH = pKa − 2", "pH = pKa − 1", "pH = pKa + 2", "pH = pKa + 1", "pH = pKa"],
          correctIndex: 2,
          explanation:
            "pH = pKa + log([A⁻]/[HA]) = pKa + log(100) = pKa + 2. Beim Verhältnis 100:1 (100-facher Überschuss der Baseform) liegt der pH 2 Einheiten über dem pKa. Bei 10:1 wäre pH = pKa + 1; bei 1:1 pH = pKa; bei 1:10 pH = pKa − 1; bei 1:100 pH = pKa − 2. Dies verdeutlicht den Pufferbereich: Außerhalb von pKa ± 1 (also 1:10 bis 10:1) ist eine Komponente so stark verarmt, dass kaum noch Pufferung möglich ist.",
          hints: ["log(100) = log(10²) = 2", "pH = pKa + log(100) = pKa + 2"],
          difficulty: 1,
          tags: ["henderson-hasselbalch", "verhältnis", "pufferbereich"],
        },
      ],
    },

    {
      id: "ch-10-04",
      title: "Titrationskurven, Indikatoren und klinische Anwendung",
      stichworte: [
        "Äquivalenzpunkt",
        "Halbäquivalenzpunkt pH = pKa",
        "Phenolphthalein",
        "Methylorange",
        "Titrationskurve",
        "Respiratorische Azidose",
        "Metabolische Azidose",
        "Kussmaul-Atmung",
        "Blutgasanalyse BGA",
        "Anionenlücke",
        "Kompensationsmechanismen",
      ],
      content: `## Grundprinzip der Titration


Eine **Titration** ist ein analytisches Verfahren zur quantitativen Bestimmung einer unbekannten Konzentration. Eine Lösung bekannter Konzentration (Titrant, in der Bürette) wird einer Lösung unbekannter Konzentration (Analyt, in dem Erlenmeyerkolben) tropfenweise zugegeben, bis die Reaktion vollständig ist.

**Äquivalenzpunkt**: Der Punkt, an dem stöchiometrisch genauso viele Moles Titrant wie Analyt vorhanden sind.

**Berechnung:** n(Säure) = n(Base) -> c1 * V1 = c2 * V2

## Titrationskurven: Vier wichtige Fälle


### 1. Starke Säure mit starker Base (z. B. HCl mit NaOH)

- Äquivalenzpunkt bei **pH = 7** (Salz NaCl reagiert neutral)
- Steiler pH-Sprung um den Äquivalenzpunkt (ca. pH 3-11 in enger Volumenspanne)
- Indikatoren: **Phenolphthalein** (pH 8-10) oder **Methylorange** (pH 3,1-4,4) geeignet

### 2. Schwache Säure mit starker Base (z. B. CH3COOH mit NaOH)

- Äquivalenzpunkt bei **pH > 7** (basisch, weil Acetat CH3COO- basisch hydrolysiert)
- Am Halbäquivalenzpunkt (Volumen = 1/2 Äquivalenzvolumen): **pH = pKa** der Säure
- Pufferbereich sichtbar: flache Kurve um pKa +/- 1
- Indikator: **Phenolphthalein** geeignet (Umschlag im Basischen)

### 3. Starke Säure mit schwacher Base (z. B. HCl mit NH3)

- Äquivalenzpunkt bei **pH < 7** (sauer, weil NH4+ sauer hydrolysiert)
- Indikator: **Methylorange** geeignet (Umschlag im Sauren)

### 4. Schwache Säure mit schwacher Base

- Kein klarer Äquivalenzpunkt (schwacher pH-Sprung)
- In der Praxis vermieden, Indikatoren ungeeignet

### Mehrprotonige Säuren (z. B. H3PO4 mit NaOH)

Zeigen **mehrere Äquivalenzpunkte** (einen pro Protonierungsstufe). Bei H3PO4 gibt es drei Äquivalenzpunkte und zwei erkennbare Pufferbereiche.

## Indikatoren: Schwache Säuren mit Farbunterschied

Indikatoren (HIn) sind selbst schwache Säuren, deren Protonierungs- und Deprotonierungsform unterschiedliche Farben haben:

HIn  ⇌ H+  +  In-
(Farbe 1)      (Farbe 2)

Der Farbumschlag erfolgt beim **pKa(HIn)**. Im Bereich **pKa +/- 1** sieht man eine Mischfarbe.

### Wichtige Indikatoren:
| Indikator | Umschlagsbereich | Farbe sauer | Farbe basisch |
|-----------|-----------------|-------------|----------------|
| Methylorange | 3,1-4,4 | Rot | Gelb |
| Methylrot | 4,4-6,2 | Rot | Gelb |
| Lackmus (Litmus) | 5,0-8,0 | Rot | Blau |
| Bromthymolblau | 6,0-7,6 | Gelb | Blau |
| Phenolphthalein | 8,2-10,0 | Farblos | Rot-violett |
| Thymolblau | 8,0-9,6 | Gelb | Blau |

**Auswahl des Indikators:** Der Indikator muss so gewählt werden, dass sein Umschlagsbereich mit dem pH am Äquivalenzpunkt übereinstimmt.

## Klinische Säure-Base-Pathophysiologie

Der normale Blut-pH liegt bei **7,35-7,45**. Vier primäre Störungen sind zu unterscheiden:

### Respiratorische Azidose
- **Ursache:** Hypoventilation -> CO2 hoch (pCO2 > 45 mmHg)
- **pH:** < 7,35 (Azidose)
- **Kompensation:** Niere erhöht HCO3--Reabsorption (langsam, Tage)
- **Beispiele:** COPD, Sedierung, Atemmuskellähmung

### Respiratorische Alkalose
- **Ursache:** Hyperventilation -> CO2 niedrig (pCO2 < 35 mmHg)
- **pH:** > 7,45 (Alkalose)
- **Kompensation:** Niere erhöht HCO3--Ausscheidung
- **Beispiele:** Angst, Höhenkrankheit, Fieber

### Metabolische Azidose
- **Ursache:** HCO3- niedrig oder H+-Überschuss
- **pH:** < 7,35
- **Kompensation:** Hyperventilation -> CO2 niedrig (Kussmaul-Atmung)
- **Beispiele:** Ketoazidose (Diabetes), Laktazidose, Nierenversagen, Diarrhö
- **Anionenlücke:** AG = Na+ - (Cl- + HCO3-) normal 8-16 mEq/L; erhöhte AG bei Keto-/Laktazidose

### Metabolische Alkalose
- **Ursache:** HCO3- hoch oder H+-Verlust
- **pH:** > 7,45
- **Kompensation:** Hypoventilation -> CO2 hoch
- **Beispiele:** Erbrechen (HCl-Verlust), Diuretika-Einnahme, übermäßige NaHCO3-Zufuhr

## Referenz: BGA-Interpretation

| Störung | pH | pCO2 | HCO3- |
|---------|-----|------|--------|
| Resp. Azidose | niedrig | hoch | hoch (kompensatorisch) |
| Resp. Alkalose | hoch | niedrig | niedrig (kompensatorisch) |
| Met. Azidose | niedrig | niedrig (kompensatorisch) | niedrig |
| Met. Alkalose | hoch | hoch (kompensatorisch) | hoch |

## Normwerte für Blutgasanalyse (BGA)
- pH: 7,35-7,45
- pCO2: 35-45 mmHg
- pO2: 75-100 mmHg (arteriell)
- HCO3-: 22-26 mmol/L
- Base Excess (BE): -2 bis +2 mmol/L

---

> **Merke:** Am Halbäquivalenzpunkt einer Titration (Volumen = 1/2 des Äquivalenzvolumens) gilt pH = pKa -- dort liegt die maximale Pufferkapazität. Der Äquivalenzpunkt liegt bei pH = 7 nur für starke Säure + starke Base; bei schwacher Säure + starker Base liegt er im Basischen.

> **Merke:** BGA-Diagnostik: pH < 7,35 = Azidose, pH > 7,45 = Alkalose. Primär pCO2 verändert = respiratorisch; primär HCO3- verändert = metabolisch. Kompensation erfolgt jeweils durch das andere Organ (Lunge <-> Niere).

> **Prüfungstipp:** BGA-Interpretation in 3 Schritten: (1) pH prüfen: Azidose oder Alkalose? (2) pCO₂ oder HCO₃⁻ als Ursache identifizieren. (3) Kompensation vorhanden? Äquivalenzpunkt-pH merken: stark+stark = 7, schwach+stark = basisch, stark+schwach = sauer.`,
      lernziele: [
        "Titrationskurven für starke und schwache Säure/Base-Kombinationen beschreiben und den Äquivalenzpunkt lokalisieren",
        "Den pH am Äquivalenzpunkt vorhersagen (neutral, sauer oder basisch) und begründen",
        "Den passenden Indikator für eine gegebene Titration auswählen",
        "Die vier primären Säure-Base-Störungen (respiratorisch/metabolisch, Azidose/Alkalose) erklären und anhand von BGA-Werten identifizieren",
        "Kompensationsmechanismen von Lunge und Niere beschreiben",
      ],
      sections: [
        {
          heading: "Titrationskurven: Äquivalenzpunkt und pH-Sprung",
          text: "Bei der Titration starker Säure mit starker Base liegt der Äquivalenzpunkt bei pH 7 (NaCl reagiert neutral). Bei schwacher Säure mit starker Base liegt er im Basischen (pH > 7), weil das entstehende Salz (z. B. Natriumacetat) basisch hydrolysiert. Am Halbäquivalenzpunkt gilt pH = pKa – das ist der Pufferbereich. Der steile pH-Sprung um den Äquivalenzpunkt ist charakteristisch und erlaubt die Indikatorwahl. Je schwächer die Säure oder Base, desto weniger steil der Sprung.",
          merksatz:
            "Starke Säure + starke Base → Äquivalenzpunkt pH 7. Schwache Säure + starke Base → pH > 7. Schwache Base + starke Säure → pH < 7.",
        },
        {
          heading: "Indikatoren: Auswahl nach Äquivalenzpunkt",
          text: "Indikatoren sind selbst schwache Säuren (HIn ⇌ H⁺ + In⁻) mit zwei verschiedenfarbigen Formen. Der Umschlag findet bei pKa(HIn) statt. Der Indikator muss im Umschlagsbereich des Äquivalenzpunkts liegen. Für starke Säure/starke Base: Phenolphthalein (8–10) oder Methylorange (3–4) möglich, weil der pH-Sprung beide Bereiche überquert. Für schwache Säure/starke Base: nur Phenolphthalein (basischer Äquivalenzpunkt). Für starke Säure/schwache Base: nur Methylorange oder Methylrot.",
          merksatz:
            "Indikatorwahl: pKa(Indikator) ≈ pH am Äquivalenzpunkt. Phenolphthalein für basische, Methylorange für saure Äquivalenzpunkte.",
        },
        {
          heading: "Klinische Azidose und Alkalose: BGA-Interpretation",
          text: "Vier primäre Störungen: (1) Respiratorische Azidose: pH ↓, pCO₂ ↑ → renale Kompensation (HCO₃⁻ ↑). (2) Respiratorische Alkalose: pH ↑, pCO₂ ↓ → renale Kompensation (HCO₃⁻ ↓). (3) Metabolische Azidose: pH ↓, HCO₃⁻ ↓ → respiratorische Kompensation (pCO₂ ↓, Kussmaul-Atmung). (4) Metabolische Alkalose: pH ↑, HCO₃⁻ ↑ → respiratorische Kompensation (pCO₂ ↑). Die primäre Störung und die Kompensation verändern sich immer in dieselbe Richtung (CO₂ und HCO₃⁻ ändern sich gleichsinnig bei Kompensation).",
          merksatz:
            "pH ↓ = Azidose. pH ↑ = Alkalose. Primär CO₂-Änderung = respiratorisch. Primär HCO₃⁻-Änderung = metabolisch.",
        },
      ],

      merksätze: [
        "Titration: n(Säure) = n(Base) am Äquivalenzpunkt → c₁V₁ = c₂V₂.",
        "Starke Säure + starke Base: Äquivalenzpunkt pH = 7 (neutrales Salz).",
        "Schwache Säure + starke Base: Äquivalenzpunkt pH > 7 (basisches Salz hydrolysiert).",
        "Am Halbäquivalenzpunkt einer schwachen Säure: pH = pKa.",
        "Indikatoren: schwache Säuren mit zwei Farbformen; Umschlag bei pKa(Indikator).",
        "Phenolphthalein: farblos (sauer) → rot-violett (basisch), Umschlag pH 8,2–10,0.",
        "Methylorange: rot (sauer) → gelb (basisch), Umschlag pH 3,1–4,4.",
        "Blut-pH 7,35–7,45; pCO₂ 35–45 mmHg; HCO₃⁻ 22–26 mmol/L – Normwerte.",
        "Respiratorische Azidose: pCO₂ ↑, pH ↓ (z. B. COPD); renale Kompensation: HCO₃⁻ ↑.",
        "Metabolische Azidose: HCO₃⁻ ↓, pH ↓ (z. B. Ketoazidose); respiratorische Kompensation: pCO₂ ↓ (Kussmaul).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie den Verlauf der Titrationskurve bei der Titration einer schwachen Säure (z. B. Essigsäure, pKa = 4,75) mit Natronlauge. Auf welchen pH-Wert setzt der Äquivalenzpunkt, und welcher Indikator ist geeignet?",
        answer:
          "Die Titrationskurve der Essigsäure mit NaOH beginnt bei einem relativ flachen Anfangs-pH (für 0,1 mol/L CH₃COOH ca. pH 2,87). Zu Beginn der Titration (0 bis ca. 50 % des Äquivalenzvolumens) steigt der pH nur langsam an – dies ist der Pufferbereich, in dem sowohl CH₃COOH als auch CH₃COO⁻ vorhanden sind. Am Halbäquivalenzpunkt (50 % des Äquivalenzvolumens hinzugefügt) gilt pH = pKa = 4,75, da [CH₃COOH] = [CH₃COO⁻].\n\nNachdem etwa 90–100 % des Äquivalenzvolumens zugegeben wurden, steigt der pH rasch an (steiler pH-Sprung). Am Äquivalenzpunkt liegt der pH nicht bei 7, sondern im basischen Bereich (ca. pH 8,9 für 0,1 mol/L CH₃COONa). Das ist so, weil das entstehende Natriumacetat (CH₃COONa) in Wasser basisch hydrolysiert: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ – Acetat ist die konjugierte Base der schwachen Essigsäure und ist eine mittelstarke Base.\n\nDa der Äquivalenzpunkt im basischen Bereich (pH ≈ 8–9) liegt, ist **Phenolphthalein** (Umschlagsbereich pH 8,2–10,0) der geeignete Indikator: Er schlägt genau in diesem Bereich von farblos nach rot-violett um. Methylorange (Umschlag pH 3,1–4,4) wäre ungeeignet, da es im Pufferbereich der Essigsäure umschlägt, nicht am Äquivalenzpunkt.",
      },
      klinischerBezug:
        "Die Unterscheidung der vier primären Säure-Base-Störungen (respiratorisch/metabolisch × Azidose/Alkalose) ist eine Kernkompetenz der klinischen Medizin. Bei einer Blutgasanalyse (BGA) bestimmt man pH, pCO₂ und HCO₃⁻: pH < 7,35 bei pCO₂ > 45 mmHg ist respiratorische Azidose (z. B. COPD-Exazerbation), pH < 7,35 bei HCO₃⁻ < 22 mmol/L ist metabolische Azidose (z. B. Ketoazidose; Kussmaul-Atmung als Kompensation). Die gleichzeitige Beurteilung des Kompensationsstatus erlaubt die Diagnose primärer und sekundärer Störungen.",
      selfTest: [
        {
          question:
            "Bei der Titration von 25 mL HCl (unbekannte Konzentration) werden 20 mL NaOH (0,1 mol/L) verbraucht. Wie groß ist c(HCl)?",
          options: ["0,05 mol/L", "0,125 mol/L", "0,1 mol/L", "0,08 mol/L", "0,2 mol/L"],
          correctIndex: 3,
          explanation:
            "Am Äquivalenzpunkt gilt: n(HCl) = n(NaOH) (1:1-Stöchiometrie). n(NaOH) = c × V = 0,1 mol/L × 0,020 L = 0,002 mol. n(HCl) = 0,002 mol. c(HCl) = n/V = 0,002 mol / 0,025 L = 0,08 mol/L. Merke: c₁V₁ = c₂V₂ gilt nur bei einbasigen Säuren und einsäurigen Basen (1:1-Stöchiometrie). Bei zweiprotoniger Säure wie H₂SO₄ wäre das Verhältnis 1:2, also c(H₂SO₄) = c(NaOH) × V(NaOH) / (2 × V(H₂SO₄)).",
          hints: ["n(HCl) = n(NaOH) am Äquivalenzpunkt", "c(HCl) = n/V = (0,1 × 0,020) / 0,025"],
          difficulty: 1,
          tags: ["titration", "äquivalenzpunkt", "c1v1-c2v2"],
        },
        {
          question:
            "Welcher Indikator ist für die Titration von Essigsäure (pKa = 4,75) mit NaOH am besten geeignet?",
          options: [
            "Methylorange (Umschlag pH 3,1–4,4)",
            "Methylrot (Umschlag pH 4,4–6,2)",
            "Lackmus (Umschlag pH 5,0–8,0)",
            "Bromthymolblau (Umschlag pH 6,0–7,6)",
            "Phenolphthalein (Umschlag pH 8,2–10,0)",
          ],
          correctIndex: 4,
          explanation:
            "Bei der Titration einer schwachen Säure (Essigsäure) mit einer starken Base (NaOH) liegt der Äquivalenzpunkt im Basischen (pH ≈ 8–9, weil Acetat basisch hydrolysiert). Daher braucht man einen Indikator, der in diesem basischen Bereich umschlägt: Phenolphthalein (Umschlag pH 8,2–10,0) ist ideal. Methylorange schlägt im sauren Bereich um (pH 3,1–4,4) – das liegt im Pufferbereich der Essigsäure, nicht am Äquivalenzpunkt. Bromthymolblau (6–7,6) liegt zu nah am neutralen Bereich.",
          hints: [
            "Äquivalenzpunkt schwache Säure + starke Base: pH > 7",
            "Indikator muss im pH-Bereich des Äquivalenzpunkts umschlagen",
          ],
          difficulty: 1,
          tags: ["indikator", "phenolphthalein", "titration-essigsäure"],
        },
        {
          question:
            "Bei der Titration von NH₃ (schwache Base, pKb = 4,75) mit HCl (starke Säure) liegt der Äquivalenzpunkt bei:",
          options: [
            "pH < 7 (sauer)",
            "pH > 7 (basisch)",
            "pH = 7 (neutral)",
            "pH = pKb = 4,75",
            "pH = 14",
          ],
          correctIndex: 0,
          explanation:
            "Bei der Titration einer schwachen Base (NH₃) mit einer starken Säure (HCl) entsteht am Äquivalenzpunkt das Salz NH₄Cl. NH₄⁺ ist die konjugierte Säure der schwachen Base NH₃ und reagiert sauer: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75 = 9,25. Der pH am Äquivalenzpunkt liegt sauer, ca. bei pH = 5–5,5 (für 0,1 mol/L NH₄Cl). Geeigneter Indikator: Methylorange oder Methylrot (Umschlag im Sauren).",
          hints: [
            "Schwache Base + starke Säure → Salz hydrolysiert sauer",
            "NH₄⁺ ist konjugierte Säure von NH₃ → saure Lösung am Äquivalenzpunkt",
          ],
          difficulty: 2,
          tags: ["titration-nh3", "äquivalenzpunkt-sauer", "salz-hydrolyse"],
        },
        {
          question:
            "Ein Patient hat folgende BGA-Werte: pH = 7,52, pCO₂ = 30 mmHg, HCO₃⁻ = 24 mmol/L. Welche Störung liegt vor?",
          options: [
            "Metabolische Alkalose",
            "Respiratorische Alkalose (unkompensiert)",
            "Respiratorische Azidose",
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Keine Störung",
          ],
          correctIndex: 1,
          explanation:
            "pH 7,52 > 7,45 → Alkalose. pCO₂ = 30 mmHg < 35 mmHg (erniedrigt) → CO₂ wird abgeatmet → Hyperventilation. HCO₃⁻ = 24 mmol/L (normal). Primäre Störung: pCO₂ erniedrigt → respiratorische Alkalose. Da HCO₃⁻ noch normal ist, keine renale Kompensation → unkompensiert. Bei kompensierter respiratorischer Alkalose würde die Niere HCO₃⁻ ausscheiden (HCO₃⁻ ↓). Ursachen: Hyperventilation bei Angst, Schmerz, Höhe, Sepsis. Behandlung: Ursache beheben, evtl. CO₂-Rückatmung.",
          hints: [
            "pH > 7,45 = Alkalose; pCO₂ erniedrigt = respiratorisch primär",
            "HCO₃⁻ normal → keine renale Kompensation → unkompensiert",
          ],
          difficulty: 2,
          tags: ["respiratorische-alkalose", "hyperventilation", "bga"],
        },
        {
          question:
            "Ein diabetischer Patient mit schlechter Einstellung hat pH 7,22, pCO₂ = 25 mmHg, HCO₃⁻ = 10 mmol/L. Welche Diagnose und welches klinische Zeichen der Kompensation sind zu erwarten?",
          options: [
            "Respiratorische Azidose; Oligurie als Kompensation",
            "Metabolische Alkalose; Hypoventilation als Kompensation",
            "Metabolische Azidose; Kussmaul-Atmung als respiratorische Kompensation",
            "Respiratorische Alkalose; renale HCO₃⁻-Retention als Kompensation",
            "Gemischte Störung ohne erkennbare Kompensation",
          ],
          correctIndex: 2,
          explanation:
            "pH 7,22 < 7,35 → Azidose. HCO₃⁻ = 10 mmol/L (normal 22–26) → stark erniedrigt → primär metabolische Azidose. pCO₂ = 25 mmHg (normal 35–45) → erniedrigt → respiratorische Kompensation durch Hyperventilation. Klinisches Zeichen: Kussmaul-Atmung (tiefe, regelmäßige, geräuschvolle Atemzüge) – charakteristisch für die diabetische Ketoazidose. Bei der Ketoazidose sind Ketonkörper (β-Hydroxybutyrat, Acetoacetat) starke Säuren, die HCO₃⁻ verbrauchen. Behandlung: Insulin, Flüssigkeit, Elektrolytausgleich.",
          hints: [
            "HCO₃⁻ ↓ → metabolische Störung; pCO₂ ↓ → respiratorische Kompensation",
            "Ketoazidose → Kussmaul-Atmung (tiefe Hyperventilation als Kompensation)",
          ],
          difficulty: 2,
          tags: ["ketoazidose", "kussmaul-atmung", "metabolische-azidose"],
        },
        {
          question:
            "Was versteht man unter dem Halbäquivalenzpunkt bei der Titration einer schwachen Säure, und welchen Wert hat der pH dort?",
          options: [
            "Der Punkt, an dem die Hälfte des Titranten zugegeben wurde und pH = 7",
            "Der Punkt, an dem der Indikator umschlägt",
            "Der Äquivalenzpunkt selbst, bei pH > 7",
            "Der Punkt, an dem [HA] = [A⁻] und pH = pKa der schwachen Säure",
            "Der Punkt, an dem [OH⁻] = [H₃O⁺]",
          ],
          correctIndex: 3,
          explanation:
            "Der Halbäquivalenzpunkt liegt bei der Hälfte des Äquivalenzvolumens (also wenn halb so viel Base zugegeben wurde wie am Äquivalenzpunkt nötig). An diesem Punkt ist genau die Hälfte der Säure HA zur konjugierten Base A⁻ neutralisiert worden: [HA] = [A⁻]. Nach Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0 = pKa. Am Halbäquivalenzpunkt ist also pH = pKa der schwachen Säure. Dieser Punkt ist diagnostisch wichtig: Man kann pKa einer unbekannten Säure durch Titration bestimmen.",
          hints: [
            "Halbäquivalenz: halb neutralisiert → [HA] = [A⁻]",
            "Henderson-Hasselbalch: bei [HA] = [A⁻] → log(1) = 0 → pH = pKa",
          ],
          difficulty: 2,
          tags: ["halbäquivalenzpunkt", "pka-bestimmung", "titration"],
        },
        {
          question:
            "Phenolphthalein ist farblos bei pH 7 und rot-violett bei pH 10. Es selbst ist eine schwache Säure mit pKa ≈ 9,1. Bei welchem pH findet der Farbumschlag statt?",
          options: [
            "Bei pH = 7 (neutral)",
            "Bei pH = 14 (maximal basisch)",
            "Der Umschlag hängt nicht vom pKa ab",
            "Bei pH = 7,4 (Blut-pH)",
            "Bei pH ≈ 9,1 (= pKa des Indikators)",
          ],
          correctIndex: 4,
          explanation:
            "Indikatoren sind schwache Säuren (HIn). Der Farbumschlag findet in der Nähe des pKa des Indikators statt. Bei pH << pKa überwiegt HIn (saure, farblose Form). Bei pH >> pKa überwiegt In⁻ (basische, rote Form). Bei pH = pKa sind [HIn] = [In⁻]: man sieht eine Mischfarbe, und das ist der Mittelpunkt des Umschlagsbereichs (pKa ± 1). Für Phenolphthalein mit pKa ≈ 9,1 ist der Umschlagsbereich 8,1–10,1. Dies erklärt, warum Phenolphthalein für Titrationen mit basischem Äquivalenzpunkt geeignet ist.",
          hints: [
            "Indikator-Umschlag bei pH ≈ pKa(Indikator)",
            "HIn (farblos) ⇌ H⁺ + In⁻ (farbig): Gleichgewicht bestimmt Farbe",
          ],
          difficulty: 2,
          tags: ["phenolphthalein", "indikator-pka", "farbumschlag"],
        },
        {
          question:
            "Ein Patient mit chronischer Niereninsuffizienz hat pH 7,30, pCO₂ = 32 mmHg, HCO₃⁻ = 15 mmol/L. Welche Störung liegt vor?",
          options: [
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Metabolische Alkalose",
            "Respiratorische Azidose mit metabolischer Kompensation",
            "Respiratorische Alkalose mit metabolischer Kompensation",
            "Normalbefund",
          ],
          correctIndex: 0,
          explanation:
            "pH 7,30 < 7,35 → Azidose. HCO₃⁻ = 15 mmol/L < 22 mmol/L → stark erniedrigt → primär metabolische Ursache (Niere kann H⁺ nicht ausreichend ausscheiden und HCO₃⁻ nicht regenerieren). pCO₂ = 32 mmHg < 35 mmHg → erniedrigt → respiratorische Kompensation (Hyperventilation). Diagnose: Metabolische Azidose mit respiratorischer Kompensation, typisch für chronische Niereninsuffizienz. Die Niere ist hier die Ursache (kann keine Säuren ausscheiden), nicht die Kompensationsorgane. Behandlung: Natriumbicarbonat-Substitution, renale Ersatztherapie.",
          hints: [
            "HCO₃⁻ erniedrigt → primär metabolisch; pCO₂ erniedrigt → respiratorische Kompensation",
            "Chronische Niereninsuffizienz → HCO₃⁻ ↓ (Niere kann Säure nicht ausscheiden)",
          ],
          difficulty: 3,
          tags: ["niereninsuffizienz", "metabolische-azidose", "bga"],
        },
      ],
    },
    // === from kap11-redox-reaktionen ===
    {
      id: "ch-11-01",
      title: "Oxidation und Reduktion — Grundlagen",
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption: "Abb.: Elektronenübertragung bei Redoxreaktionen (OpenStax, CC BY 4.0)",
      stichworte: [
        "OIL RIG Elektronentransfer",
        "Oxidationszahlen",
        "Reduktionsmittel Oxidationsmittel",
        "Halbreaktion-Methode",
        "KMnO₄ Permanganat",
        "Disproportionierung",
        "Komproportionierung",
        "NADH FADH₂ Atmungskette",
        "Vitamin C Antioxidans",
        "Redox-Gleichung ausgleichen",
      ],
      content: `## Definitionen: OIL RIG


Oxidation und Reduktion sind die grundlegendsten Elektronenübertragungsreaktionen der Chemie. Die Eselsbrücke **OIL RIG** fasst beide Prozesse zusammen: **O**xidation **I**s **L**oss (Oxidation = Elektronenverlust), **R**eduction **I**s **G**ain (Reduktion = Elektronengewinn). Beide Prozesse laufen stets gleichzeitig und gekoppelt ab -- es kann keine Oxidation ohne gleichzeitige Reduktion geben.

Das Teilchen, das Elektronen **abgibt** und dabei oxidiert wird, heißt **Reduktionsmittel** (RM), weil es das andere Teilchen reduziert. Das Teilchen, das Elektronen **aufnimmt** und dabei reduziert wird, heißt **Oxidationsmittel** (OM), weil es das andere Teilchen oxidiert. Im klassischen Beispiel Zn + Cu2+ -> Zn2+ + Cu ist Zink das Reduktionsmittel (gibt 2e- ab) und Cu2+ das Oxidationsmittel (nimmt 2e- auf).

{{IMAGE}}

## Oxidationszahlen (Oxidationsstufen)


Oxidationszahlen (OZ) sind formale, hypothetische Ladungen, die einem Atom zugewiesen werden, als wären alle Bindungen vollständig ionisch.

**Regeln zur Bestimmung der OZ (Prioritätsreihenfolge):**
1. Reine Elemente: OZ = 0 (z. B. Fe, Cl2, O3)
2. Einatomige Ionen: OZ = Ionenladung (Fe2+ -> OZ = +2; Cl- -> OZ = -1)
3. Fluor: immer OZ = -1
4. Sauerstoff: OZ = -2 (Ausnahmen: Peroxide wie H2O2 -> OZ = -1)
5. Wasserstoff: OZ = +1 in Verbindungen mit Nichtmetallen; OZ = -1 in Metallhydriden (NaH)
6. Summenregel: Summe aller OZ x Atomanzahl = Gesamtladung des Teilchens (0 bei Neutralmolekül)

**Praxisbeispiele:**
- H2SO4: 2(+1) + OZ(S) + 4(-2) = 0 -> OZ(S) = **+6**
- HNO3: (+1) + OZ(N) + 3(-2) = 0 -> OZ(N) = **+5**
- KMnO4: (+1) + OZ(Mn) + 4(-2) = 0 -> OZ(Mn) = **+7**

## Aufstellen von Redox-Gleichungen (Halbreaktion-Methode)

**Schritte (saures Medium):**
1. Oxidations- und Reduktions-Halbreaktionen separat aufschreiben
2. Atome (außer H und O) ausgleichen
3. O-Atome mit H2O ausgleichen
4. H-Atome mit H+ ausgleichen
5. Elektronen ergänzen, um Ladungsbalance herzustellen
6. Elektronen durch Multiplikation der Halbreaktionen angleichen
7. Halbreaktionen addieren und kürzen

**Beispiel (sauer): MnO4- + Fe2+ -> Mn2+ + Fe3+**
- Reduktion: MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O
- Oxidation: Fe2+ -> Fe3+ + 1e- (x5)
- Gesamt: MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 5Fe3+ + 4H2O

## Disproportionierung und Komproportionierung

Bei der **Disproportionierung** reagiert ein Element gleichzeitig als Oxidans und Reduktans: 2H2O2 -> 2H2O + O2. O hat in H2O2 OZ = -1; im Produkt H2O hat O OZ = -2 (Reduktion) und in O2 hat O OZ = 0 (Oxidation).

Bei der **Komproportionierung** reagieren zwei verschiedene Oxidationsstufen desselben Elements zur einheitlichen Mittelstufe: Cu0 + Cu2+ -> 2Cu+.

---

> **Merke:** OIL RIG: Oxidation Is Loss (e- abgeben, OZ steigt); Reduction Is Gain (e- aufnehmen, OZ sinkt). Reduktionsmittel wird selbst oxidiert; Oxidationsmittel wird selbst reduziert.

> **Prüfungstipp:** OZ-Bestimmung ist eine häufige Rechenaufgabe im MedAT. Priorität merken: F immer -1, O fast immer -2 (Peroxide: -1), H meist +1 (Hydride: -1). Summenregel anwenden: alle OZ × Atomanzahl = Gesamtladung.`,
      lernziele: [
        "Oxidation und Reduktion mithilfe des Elektronen-Konzepts (OIL RIG) definieren und anwenden",
        "Oxidationszahlen für beliebige Verbindungen nach den Prioritätsregeln systematisch bestimmen",
        "Redox-Gleichungen mit der Halbreaktion-Methode in saurer und basischer Lösung aufstellen und ausgleichen",
        "Starke Oxidations- und Reduktionsmittel benennen und ihre Bedeutung in Biologie und Medizin erläutern",
        "Disproportionierungs- und Komproportionierungsreaktionen erkennen und beschreiben",
      ],
      sections: [
        {
          heading: "OIL RIG — Die Grundregel",
          text: "Oxidation ist Elektronenabgabe (OIL = Oxidation Is Loss), Reduktion ist Elektronenaufnahme (RIG = Reduction Is Gain). Reduktionsmittel wird oxidiert; Oxidationsmittel wird reduziert. Beide Prozesse sind stets gekoppelt: Kein Elektron kann abgegeben werden, ohne dass ein anderes Teilchen es aufnimmt. Die OZ-Änderung zeigt, wer was tut: steigende OZ = Oxidation, sinkende OZ = Reduktion.",
          merksatz:
            "OIL RIG: Oxidation Is Loss — Reduction Is Gain. Das Reduktionsmittel wird selbst oxidiert.",
        },
        {
          heading: "Oxidationszahlen systematisch bestimmen",
          text: "Die sechs Prioritätsregeln erlauben es, OZ auch in komplexen Molekülen zu berechnen. Fluorid hat immer −1, Sauerstoff fast immer −2 (Ausnahmen: Peroxide −1, OF₂ +2). Die Summe aller OZ × Atomanzahl ergibt die Gesamtladung. Beispiel: In Cr₂O₇²⁻ gilt 2·OZ(Cr) + 7·(−2) = −2, also OZ(Cr) = +6.",
          merksatz: "Summenregel: Σ(OZ × n) = Gesamtladung. Bei Neutralmolekülen = 0.",
        },
        {
          heading: "Halbreaktion-Methode",
          text: "Redox-Gleichungen werden in zwei Halbreaktionen zerlegt und separat ausgeglichen: Atome → O mit H₂O → H mit H⁺ → Ladung mit e⁻. Dann werden die Elektronen durch Multiplikation angeglichen und die Halbreaktionen addiert. Im basischen Medium wird H⁺ durch H₂O/OH⁻ ersetzt.",
          merksatz:
            "Halbreaktionen-Reihenfolge: erst Atome, dann O (H₂O), dann H (H⁺), dann Ladung (e⁻) ausgleichen.",
        },
        {
          heading: "Disproportionierung vs. Komproportionierung",
          text: "Disproportionierung: Ein Element wird gleichzeitig oxidiert und reduziert → zwei Produkte mit verschiedenen OZ (z. B. 2H₂O₂ → H₂O + O₂). Komproportionierung: Zwei verschiedene OZ desselben Elements reagieren zur Mittelstufe (z. B. Cu⁰ + Cu²⁺ → 2Cu⁺). Klinisch: Superoxiddismutase (SOD) katalysiert die Disproportionierung von O₂·⁻ zu H₂O₂ und O₂.",
          merksatz:
            "Disproportionierung: gleiches Element → zwei verschiedene OZ-Produkte. Komproportionierung: Umkehrung davon.",
        },
      ],
      merksätze: [
        "OIL RIG: Oxidation Is Loss (e⁻), Reduction Is Gain (e⁻)",
        "Reduktionsmittel wird oxidiert; Oxidationsmittel wird reduziert",
        "OZ-Regel: F immer −1; O meist −2 (Peroxide: −1; OF₂: +2); H meist +1 (Hydride: −1)",
        "Summe der OZ × Atomanzahl = Gesamtladung des Teilchens",
        "Halbreaktion-Reihenfolge: Atome → O (H₂O) → H (H⁺) → e⁻",
        "KMnO₄: Mn +7 → +2 (sauer, 5e⁻) oder → +4 (neutral, 3e⁻) oder → +6 (basisch, 1e⁻)",
        "K₂Cr₂O₇: Cr +6 → +3 (3e⁻ pro Cr-Atom, 6e⁻ pro Formeleinheit)",
        "Disproportionierung: dasselbe Element wird gleichzeitig oxidiert UND reduziert",
        "NADH und FADH₂ sind die wichtigsten biologischen Reduktionsmittel (Atmungskette)",
        "Stärkstes Oxidationsmittel: F₂; stärkstes Reduktionsmittel: Li (nach elektrochemischer Spannungsreihe)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie das Konzept der Oxidationszahlen: Wie werden sie bestimmt, und welche Bedeutung haben sie für das Erkennen von Redox-Reaktionen? Geben Sie zwei Beispiele aus der anorganischen Chemie.",
        answer:
          "Oxidationszahlen (OZ) sind formale Ladungen, die Atomen in Verbindungen zugewiesen werden, als wären alle Bindungen vollständig ionisch — auch in kovalenten Molekülen. Sie sind ein Buchführungsinstrument, um Elektronenverschiebungen zu verfolgen, aber keine echten Ladungen. Die Bestimmung folgt einer Prioritätsreihenfolge: (1) Reine Elemente haben OZ = 0; (2) einatomige Ionen haben OZ = Ionenladung; (3) F ist immer −1; (4) O ist meist −2 (Ausnahmen: Peroxide −1, OF₂ +2); (5) H ist meist +1 (Ausnahme: Metallhydride −1); (6) die Summe aller OZ × Atomanzahl ergibt die Gesamtladung. Für das Erkennen von Redox-Reaktionen gilt: Erhöht sich die OZ eines Atoms von Edukt zu Produkt, wurde es oxidiert; sinkt sie, wurde es reduziert. Beispiel 1: In der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu steigt OZ(Zn) von 0 auf +2 (Oxidation) und sinkt OZ(Cu) von +2 auf 0 (Reduktion) — eine klassische Galvanische Reaktion. Beispiel 2: In KMnO₄ hat Mn OZ = +7; in MnSO₄ (saures Medium) hat Mn OZ = +2 — eine Reduktion um 5 Einheiten, also 5 Elektronen pro Mn aufgenommen. Anhand der OZ-Änderungen lässt sich sofort ablesen, welches Teilchen oxidiert und welches reduziert wird, und wie viele Elektronen übertragen werden — Grundlage für die stöchiometrische Auswertung von Redox-Titrationen.",
      },
      klinischerBezug:
        "Redox-Reaktionen sind die Grundlage der zellulären Energiegewinnung: In der mitochondrialen Atmungskette werden Elektronen von NADH und FADH₂ schrittweise auf O₂ übertragen, wobei ein Protonengradient für die ATP-Synthese aufgebaut wird. Die unkontrollierte Oxidation körpereigener Moleküle durch reaktive Sauerstoffspezies (ROS) führt zu oxidativem Stress, der mit Arteriosklerose, Krebs und Neurodegeneration assoziiert ist. Antioxidantien wie Vitamin C (Ascorbinsäure) und Vitamin E wirken als Reduktionsmittel und neutralisieren ROS durch Elektronenabgabe.",
      selfTest: [
        {
          question: "Welche Aussage zur Oxidation ist korrekt?",
          options: [
            "Oxidation ist die Aufnahme von Elektronen",
            "Oxidation ist die Abgabe von Elektronen",
            "Oxidation erniedrigt die Oxidationszahl eines Atoms",
            "Oxidation und Reduktion können unabhängig voneinander ablaufen",
            "Das Oxidationsmittel wird bei der Reaktion oxidiert",
          ],
          correctIndex: 1,
          explanation:
            "Oxidation bedeutet Elektronenabgabe (OIL = Oxidation Is Loss). Ein Atom, das Elektronen abgibt, wird oxidiert — seine Oxidationszahl steigt. Das Teilchen, das Elektronen abgibt, heißt Reduktionsmittel (da es das andere Teilchen reduziert). Oxidation und Reduktion laufen stets gleichzeitig ab — Elektronen können nicht frei existieren, sie müssen sofort von einem anderen Teilchen aufgenommen werden. Das Oxidationsmittel nimmt Elektronen auf und wird dabei selbst reduziert, nicht oxidiert.",
          hints: [
            "OIL RIG: Oxidation Is Loss, Reduction Is Gain — welcher Buchstabe steht für Elektronenabgabe?",
            "Wenn OZ steigt → Oxidation; wenn OZ sinkt → Reduktion",
          ],
          difficulty: 1,
          tags: ["oxidation", "oil-rig", "elektronen-abgabe"],
        },
        {
          question: "Welche Oxidationszahl hat Schwefel in H₂SO₄?",
          options: ["+2", "+4", "+6", "−2", "0"],
          correctIndex: 2,
          explanation:
            "In H₂SO₄ gilt die Summenregel: Gesamtladung = 0. H hat OZ = +1 (×2 = +2), O hat OZ = −2 (×4 = −8). Also: +2 + OZ(S) + (−8) = 0 → OZ(S) = +6. Schwefel erreicht hier seine höchste Oxidationsstufe (+6), weshalb konzentrierte H₂SO₄ ein starkes Oxidationsmittel ist. Zum Vergleich: In H₂S hat S OZ = −2 (starkes Reduktionsmittel); in SO₂ hat S OZ = +4; in S₈ hat S OZ = 0.",
          hints: [
            "Summenregel: Σ(OZ × n) = 0 für Neutralmolekül",
            "H hat OZ +1, O hat OZ −2 — berechne dann S aus der Gleichung",
          ],
          difficulty: 1,
          tags: ["oxidationszahl", "h2so4", "summenregel"],
        },
        {
          question:
            "Bei der Reaktion: 2KMnO₄ + 5H₂O₂ + 3H₂SO₄ → 2MnSO₄ + 5O₂ + K₂SO₄ + 8H₂O — welche Teilchen werden oxidiert?",
          options: [
            "Mn in KMnO₄ (von +7 auf +2)",
            "H in H₂SO₄ (von +1 auf 0)",
            "S in H₂SO₄ (von +6 auf +4)",
            "O in H₂O₂ (von −1 auf 0 in O₂)",
            "K in KMnO₄ (von +1 auf 0)",
          ],
          correctIndex: 3,
          explanation:
            "In H₂O₂ hat O die Oxidationszahl −1 (Peroxid-Ausnahme!). Im Produkt O₂ haben die O-Atome OZ = 0. Da die OZ von −1 auf 0 steigt, wurden diese O-Atome oxidiert. H₂O₂ wirkt hier als Reduktionsmittel. Gleichzeitig wird Mn in KMnO₄ von +7 auf +2 reduziert (OZ sinkt = Reduktion). S und K ändern ihre OZ nicht. Diese Reaktion ist Grundlage der Permanganat-Rücktitration in der Analytik.",
          hints: [
            "Steigende OZ = Oxidation; sinkende OZ = Reduktion",
            "In H₂O₂ hat O die OZ −1 (Peroxid!), in O₂ hat O OZ = 0 — steigt oder sinkt die OZ?",
          ],
          difficulty: 2,
          tags: ["kmno4", "h2o2", "peroxid-oxidation"],
        },
        {
          question: "Welches der folgenden Teilchen ist das stärkste Oxidationsmittel?",
          options: ["Na⁺", "Zn²⁺", "NADH", "H₂", "F₂"],
          correctIndex: 4,
          explanation:
            "Fluor (F₂) ist das stärkste chemische Oxidationsmittel überhaupt, da Fluor die höchste Elektronegativität aller Elemente besitzt (EN = 3,98 nach Pauling). F₂ oxidiert praktisch alle anderen Substanzen. Na⁺ und Zn²⁺ sind bereits reduzierte Formen (Kationen) — sie sind schwächere Oxidationsmittel. H₂ und NADH sind Reduktionsmittel (sie geben Elektronen ab). Ein starkes Oxidationsmittel hat ein hohes Standardredoxpotenzial E° (F₂/F⁻: E° = +2,87 V).",
          hints: [
            "Oxidationsmittel nimmt Elektronen auf — welches Element zieht Elektronen am stärksten an?",
            "F ist das elektronegativste Element im Periodensystem",
          ],
          difficulty: 1,
          tags: ["oxidationsmittel", "fluor", "elektronegativität"],
        },
        {
          question: "Was versteht man unter Disproportionierung?",
          options: [
            "Dasselbe Element wird im selben Reaktionsschritt gleichzeitig oxidiert und reduziert",
            "Zwei verschiedene OZ eines Elements reagieren zur selben mittleren OZ",
            "Ein Stoff reagiert mit einem anderen Stoff gleicher OZ",
            "Ein starkes Oxidationsmittel reagiert mit einem starken Reduktionsmittel",
            "Eine Redox-Reaktion, bei der keine Elektronen übertragen werden",
          ],
          correctIndex: 0,
          explanation:
            "Disproportionierung bedeutet, dass ein Element in derselben Verbindung gleichzeitig als Oxidans und Reduktans fungiert: Es entstehen zwei Produkte mit höherer und niedrigerer OZ als im Ausgangsstoff. Klassisches Beispiel: 2H₂O₂ → 2H₂O + O₂. O hat in H₂O₂ OZ = −1; in H₂O hat O OZ = −2 (Reduktion) und in O₂ hat O OZ = 0 (Oxidation). Das Gegenteil — zwei verschiedene OZ reagieren zur Mittelstufe — heißt Komproportionierung (z. B. Cu⁰ + Cu²⁺ → 2Cu⁺).",
          hints: [
            "'Dis-' = Aufspaltung: das Element spaltet sich in zwei OZ-Produkte auf",
            "Beispiel: H₂O₂ → H₂O (O: −2) UND O₂ (O: 0) — zwei verschiedene OZ entstehen aus OZ −1",
          ],
          difficulty: 2,
          tags: ["disproportionierung", "h2o2", "selbstredox"],
        },
        {
          question: "Welche Oxidationszahl hat Stickstoff in HNO₂ (salpetrige Säure)?",
          options: ["+1", "+3", "+2", "+5", "−3"],
          correctIndex: 1,
          explanation:
            "In HNO₂ gilt: H hat +1, O hat −2 (×2 = −4). Summenregel: (+1) + OZ(N) + (−4) = 0 → OZ(N) = +3. Zum Vergleich: In HNO₃ hat N OZ = +5; in NH₃ hat N OZ = −3; in N₂ hat N OZ = 0; in NO hat N OZ = +2; in NO₂ hat N OZ = +4. Stickstoff zeigt damit eine Spanne von −3 bis +5. NO ist klinisch bedeutsam als Signalmolekül (endotheliale Vasodilatation, Neurotransmitter).",
          hints: [
            "H = +1, O = −2 in dieser Verbindung; Summe muss 0 ergeben",
            "N kann OZ von −3 bis +5 annehmen — HNO₂ liegt zwischen HNO₃ (+5) und NO (+2)",
          ],
          difficulty: 2,
          tags: ["oxidationszahl", "stickstoff", "hno2"],
        },
        {
          question: "Welche biologische Funktion erfüllen NADH und FADH₂ in der Zelle?",
          options: [
            "Sie liefern Phosphatgruppen für die DNA-Replikation",
            "Sie spalten Peptidbrücken durch Oxidation von Schwefelatomen",
            "Sie übertragen Elektronen in der Atmungskette auf O₂ und ermöglichen so ATP-Synthese",
            "Sie aktivieren Kinasen durch Phosphorylierung von Serin-Resten",
            "Sie transportieren CO₂ vom Gewebe zur Lunge",
          ],
          correctIndex: 2,
          explanation:
            "NADH und FADH₂ sind die zentralen Elektronenüberträger der Zellatmung. Sie werden im Citratzyklus und bei der Glykolyse durch Oxidation von Substraten gebildet und geben ihre Elektronen an die mitochondriale Atmungskette ab: NADH an Komplex I, FADH₂ an Komplex II. Die Elektronen fließen über Ubichinon, Komplex III, Cytochrom c und Komplex IV schließlich auf O₂, wobei H₂O entsteht. Der dabei aufgebaute Protonengradient treibt die ATP-Synthase an (Chemiosmose nach Mitchell). Pro Mol NADH entstehen ~2,5 Mol ATP, pro FADH₂ ~1,5 Mol ATP.",
          hints: [
            "NADH ist ein Reduktionsmittel — in welchem Kompartiment und an welchen Komplex gibt es Elektronen ab?",
            "Stichwort: Atmungskette, Chemiosmose, Protonengradient",
          ],
          difficulty: 2,
          tags: ["nadh", "fadh2", "atmungskette"],
        },
        {
          question: "In welchem der folgenden Fälle wirkt H₂O₂ als Oxidationsmittel?",
          options: [
            "H₂O₂ + KMnO₄ → O₂ + Mn²⁺ + ...",
            "2H₂O₂ → 2H₂O + O₂ (Disproportionierung)",
            "H₂O₂ + Cl₂ → O₂ + 2HCl",
            "H₂O₂ + 2KI → I₂ + 2KOH",
            "H₂O₂ + H₂S → S + 2H₂O (H₂O₂ nimmt Elektronen auf)",
          ],
          correctIndex: 3,
          explanation:
            "In der Reaktion H₂O₂ + 2KI → I₂ + 2KOH wird I⁻ (OZ = −1) zu I₂ (OZ = 0) oxidiert — die OZ steigt, also Oxidation. H₂O₂ nimmt die Elektronen auf, O geht von −1 zu −2, also Reduktion. H₂O₂ ist hier das Oxidationsmittel. Im Gegensatz dazu wirkt H₂O₂ gegenüber KMnO₄ (Antwort A) als Reduktionsmittel (Mn +7 oxidiert H₂O₂). Antwort E ist falsch formuliert — tatsächlich ist H₂O₂ dort das Oxidationsmittel, aber die Formulierung widerspricht sich. Diese Doppelrolle von H₂O₂ macht es biochemisch interessant: Es entsteht beim oxidativen Metabolismus und wird von Katalase abgebaut.",
          hints: [
            "H₂O₂ als OM: es nimmt Elektronen auf, O geht von −1 auf −2",
            "H₂O₂ als RM: es gibt Elektronen ab an ein stärkeres OM wie KMnO₄",
          ],
          difficulty: 3,
          tags: ["h2o2", "oxidationsmittel", "iodid-oxidation"],
        },
      ],
    },
    {
      id: "ch-11-02",
      title: "Elektrochemie — Galvanische Zellen und Elektrolyse",
      stichworte: [
        "Galvanische Zelle",
        "Anode Kathode AnOx RedKat",
        "Standardelektrodenpotenzial E°",
        "Daniell-Element Zn/Cu",
        "Zellspannung Berechnung",
        "ΔG = −nFE°",
        "Faraday-Gesetz Elektrolyse",
        "Spannungsreihe",
        "Blei-Akkumulator",
        "Brennstoffzelle",
      ],
      content: `## Galvanische Zellen (Voltasche Elemente)


Eine galvanische Zelle wandelt chemische Energie spontan in elektrische Energie um. Sie besteht aus zwei **Halbzellen** (Elektroden), die durch eine Salzbrücke oder ein Diaphragma verbunden sind. An der **Anode** findet Oxidation statt (das Metall löst sich auf oder Anionen werden oxidiert), an der **Kathode** findet Reduktion statt (Kationen werden abgeschieden).

**Aufbau eines Daniell-Elements (Zn/Cu-Zelle):**
- Anode (negativ): Zn -> Zn2+ + 2e- (Oxidation)
- Kathode (positiv): Cu2+ + 2e- -> Cu (Reduktion)
- Gesamt: Zn + Cu2+ -> Zn2+ + Cu
- Zellspannung: E-Zelle = E-Kathode - E-Anode = +0,34 V - (-0,76 V) = **+1,10 V**

Die **Salzbrücke** (z. B. mit gesättigter KCl-Lösung) sorgt für Ladungsausgleich zwischen den Halbzellen, ohne die Elektroden-Lösungen zu vermischen. Ohne Salzbrücke würde schnell eine Ladungstrennung entstehen, die den Elektronenfluss stoppt.

## Standardelektrodenpotenziale (Standardreduktionspotenziale)

Das Standardelektrodenpotenzial E beschreibt die Tendenz eines Redox-Paares, Elektronen aufzunehmen (Reduktion), gemessen gegen die Standard-Wasserstoff-Elektrode (SHE, E = 0,00 V per Definition) bei 25 °C, 1 atm, allen Ionen in 1 mol/L Konzentration.

**Regeln zur Verwendung:**
- Höheres E = stärkeres Oxidationsmittel (nimmt lieber Elektronen auf)
- Niedrigeres E = stärkeres Reduktionsmittel (gibt lieber Elektronen ab)
- Eine spontane Redox-Reaktion läuft ab, wenn E-Zelle = E-Kathode - E-Anode > 0
- DeltaG = -n*F*E-Zelle (Faraday-Gleichung, n = Elektronenanzahl, F = 96485 C/mol)


## Elektrolyse (erzwungene Redox-Reaktionen)

Bei der Elektrolyse wird eine nicht-spontane Redox-Reaktion durch externe elektrische Energie erzwungen. Die Polarität wird umgekehrt: Anode ist jetzt positiv (angeschlossen an den Plus-Pol), Kathode ist negativ.

**Faradaysche Gesetze:**
1. Die abgeschiedene Stoffmenge ist proportional zur geflossenen Ladungsmenge (Q = I * t)
2. Für gleiche Ladung werden äquivalente Stoffmengen verschiedener Elemente abgeschieden

**m = (M * I * t) / (n * F)**
- m = abgeschiedene Masse (g)
- M = Molmasse (g/mol)
- I = Stromstärke (A)
- t = Zeit (s)
- n = Anzahl übertragener Elektronen
- F = Faraday-Konstante = 96485 C/mol

**Beispiel: Elektrolyse von CuSO4-Lösung**
- Kathode: Cu2+ + 2e- -> Cu (Kupfer scheidet sich ab)
- Anode: 2H2O -> O2 + 4H+ + 4e- (Wasser wird oxidiert, wenn Elektrode inert)
- Anwendung: Galvanik, Kupferraffination, Chlor-Alkali-Elektrolyse

## Batterien und Akkumulatoren

**Primärzellen** (nicht wiederaufladbar): Leclanche-Element (Zinkkohlenstoff), Alkaline-Batterie (Zn/MnO2), Lithium-Primärzellen. Die chemischen Reaktionen sind irreversibel.

**Sekundärzellen/Akkumulatoren** (wiederaufladbar): Blei-Akkumulator, Lithium-Ionen-Akku, Nickel-Metallhydrid (NiMH). Beim Laden werden die Redox-Reaktionen durch externe Energie umgekehrt.

**Blei-Akkumulator (Kfz-Batterie):**
- Entladen (Anode): Pb -> Pb2+ + 2e- (Pb wird zu PbSO4)
- Entladen (Kathode): PbO2 + 4H+ + SO4(2-) + 2e- -> PbSO4 + 2H2O
- Laden: Reaktionen umgekehrt, PbSO4 -> Pb und PbO2

**Brennstoffzellen:** H2 + 1/2 O2 -> H2O mit direkter elektrischer Energiegewinnung (Wirkungsgrad bis 60%), ideal für CO2-freie Energieerzeugung.

> **Merke:** AnOx RedKat: Anode = Oxidation, Kathode = Reduktion -- gilt sowohl in galvanischen Zellen als auch bei der Elektrolyse. In der galvanischen Zelle ist die Anode negativ, bei der Elektrolyse positiv (umgekehrte Polarität).

## Korrosion -- elektrochemische Zerstörung

Korrosion ist eine unerwünschte galvanische Reaktion: Ein Metall (z. B. Eisen) wird in Gegenwart von Wasser und O2 oxidiert: Fe -> Fe2+ + 2e- (Anode); O2 + 2H2O + 4e- -> 4OH- (Kathode). Fe2+ und OH- bilden Fe(OH)2, das zu Fe2O3*xH2O (Rost) weiteroxidiert.

**Korrosionsschutz:**
- **Kathodischer Schutz:** Opferanode aus unedlerem Metall (Zn an Stahlschiffen, Mg an Pipelines) -- das unedlere Metall wird bevorzugt oxidiert
- **Verzinkung:** Zn-Überzug schützt selbst bei Beschädigung (Zn als Opferanode)
- **Passivierung:** Aluminium bildet eine dichte Al2O3-Schicht (selbstschützend)
- **Lacke und Beschichtungen:** Verhindern Kontakt mit Elektrolyt

## Rechenbeispiel: DeltaG aus Zellspannung

Daniell-Element (Zn/Cu): E-Zelle = +1,10 V, n = 2 Elektronen.

DeltaG = -n * F * E-Zelle = -2 x 96485 C/mol x 1,10 V = -212267 J/mol = **-212 kJ/mol**

Negativer DeltaG-Wert bestätigt: Die Reaktion Zn + Cu2+ -> Zn2+ + Cu ist spontan und exergon. Verknüpfung mit Gleichgewichtskonstante: ln(K) = nFE/(RT) -> K = e^(2 x 96485 x 1,10 / (8,314 x 298)) = ca. 10^37 (praktisch vollständig).

## Medizinische Anwendungen der Elektrochemie

- **Herzschrittmacher:** Lithium-Iodid-Primärbatterien (5-10 Jahre Lebensdauer) oder Li-Ionen-Akkus
- **Blutgasanalyse:** Potentiometrische pH- und pO2-Elektroden basieren auf Standardelektrodenpotenzial-Prinzipien
- **Defibrillator-Implantate:** Hohe Energiedichte durch Li-Ionen-Technologie
- **Galvanik in der Zahnmedizin:** Verschiedene Metalle im Mund (Gold, Amalgam) können galvanische Elemente bilden -> Galvanischer Geschmack

> **Merke:** E-Zelle = E-Kathode - E-Anode. Positiv = spontan (DeltaG < 0). Je größer E-Zelle, desto mehr nutzbare elektrische Energie.

> **Prüfungstipp:** AnOx RedKat (Anode = Oxidation, Kathode = Reduktion) gilt IMMER -- sowohl in galvanischen Zellen als auch bei der Elektrolyse. Die Formel E = E(Kathode) - E(Anode) > 0 für spontane Reaktionen muss sitzen.`,
      lernziele: [
        "Aufbau und Funktionsweise galvanischer Zellen erläutern und Anode/Kathode zuordnen",
        "Standardelektrodenpotenziale lesen, interpretieren und zur Vorhersage spontaner Redox-Reaktionen nutzen",
        "Die Zellspannung einer galvanischen Zelle berechnen und mit ΔG° verknüpfen",
        "Prinzip der Elektrolyse und die Faradayschen Gesetze zur Massenberechnung anwenden",
        "Verschiedene Batterietypen und deren elektrochemische Grundlagen beschreiben",
      ],
      sections: [
        {
          heading: "Galvanische Zelle: Anode und Kathode",
          text: "In einer galvanischen Zelle findet an der Anode Oxidation (Elektronenabgabe), an der Kathode Reduktion (Elektronenaufnahme) statt. Die Elektronen fließen im äußeren Stromkreis von Anode zu Kathode. Die Salzbrücke gewährleistet den Ionenaustausch für Ladungsbalance. Merkhilfe: AnOx (Anode = Oxidation), RedKat (Reduktion = Kathode).",
          merksatz:
            "AnOx RedKat: Anode = Oxidation, Kathode = Reduktion. Elektronen fließen von Anode (−) zu Kathode (+).",
        },
        {
          heading: "Standardpotenziale und Spontanität",
          text: "Das Standardelektrodenpotenzial E° beschreibt die Reduktionsneigung eines Redox-Paares relativ zur SHE. E°Zelle = E°Kathode − E°Anode. Wenn E°Zelle > 0, ist die Reaktion spontan (ΔG° < 0). Je größer der Unterschied der E°-Werte, desto mehr Energie wird freigesetzt. ΔG° = −n·F·E°Zelle verknüpft Elektrochemie mit Thermodynamik.",
          merksatz:
            "E°Zelle = E°Kathode − E°Anode. Positiv = spontan. ΔG° = −nFE° (n = Elektronen, F = 96485 C/mol).",
        },
        {
          heading: "Elektrolyse und Faradaysche Gesetze",
          text: "Elektrolyse erzwingt nicht-spontane Redox-Reaktionen durch externe Spannung. Die abgeschiedene Masse folgt m = M·I·t / (n·F). Anwendungen: Metallgewinnung (Al aus Al₂O₃), Galvanik (Vergolden, Verchromung), Chlor-Alkali-Elektrolyse (NaOH + Cl₂). Die Anode ist jetzt positiv (an Plus-Pol), die Kathode negativ (an Minus-Pol).",
          merksatz:
            "Faraday: m = M·I·t / (n·F). Pro 96485 C wird 1 Äquivalent (M/n Gramm) Substanz abgeschieden.",
        },
        {
          heading: "Akkumulatoren in der Medizin",
          text: "Medizinische Geräte (Herzschrittmacher, implantierbare Defibrillatoren, Insulinpumpen) verwenden Lithium-Primär- oder Lithium-Ionen-Akkus wegen hoher Energiedichte, langer Lebensdauer und stabiler Spannungsabgabe. Der Blei-Akkumulator liefert hohe Ströme für Startermotoren. Die Grundprinzipien aller Batterien sind identisch: Spontane Redox-Reaktionen erzeugen elektrischen Strom.",
          merksatz:
            "Primärzelle = nicht aufladbar (irreversibel); Sekundärzelle/Akku = aufladbar (reversibel).",
        },
        {
          heading: "Ausgewählte Standardelektrodenpotenziale (Reduktionspotenziale)",
          text: "Die elektrochemische Spannungsreihe geordnet nach absteigendem E°:",
          table: {
            headers: ["Redox-Paar", "E° (V)"],
            rows: [
              ["F₂ + 2e⁻ → 2F⁻", "+2,87"],
              ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "+1,51"],
              ["Cl₂ + 2e⁻ → 2Cl⁻", "+1,36"],
              ["O₂ + 4H⁺ + 4e⁻ → 2H₂O", "+1,23"],
              ["Cu²⁺ + 2e⁻ → Cu", "+0,34"],
              ["2H⁺ + 2e⁻ → H₂", "0,00 (Referenz)"],
              ["Fe²⁺ + 2e⁻ → Fe", "−0,44"],
              ["Zn²⁺ + 2e⁻ → Zn", "−0,76"],
              ["Na⁺ + e⁻ → Na", "−2,71"],
              ["Li⁺ + e⁻ → Li", "−3,04"],
            ],
          },
        },
      ],
      merksätze: [
        "AnOx RedKat: Anode = Oxidation, Kathode = Reduktion (in galvanischer Zelle UND Elektrolyse)",
        "E°Zelle = E°Kathode − E°Anode; positiv = spontane Reaktion",
        "ΔG° = −n · F · E°Zelle (n = Elektronen, F = 96485 C/mol)",
        "SHE (Standard-Wasserstoff-Elektrode): E° = 0,00 V per Definition (Referenz)",
        "Höheres E° = stärkeres Oxidationsmittel (steht weiter rechts/oben in der Spannungsreihe)",
        "Daniell-Element: Zn/Cu, E°Zelle = +1,10 V (Zn Anode: −0,76 V; Cu Kathode: +0,34 V)",
        "Faraday-Gesetz: m = M · I · t / (n · F) für Elektrolyse-Massenberechnung",
        "Elektrolyse: Anode ist POSITIV (umgekehrte Polarität zur galvanischen Zelle)",
        "Brennstoffzelle: H₂ + ½O₂ → H₂O, direkter Energiegewinn ohne Verbrennung",
        "Blei-Akkumulator: Pb/PbO₂ in H₂SO₄, E°Zelle ≈ 2 V pro Zelle (6 V = 3 Zellen in Serie)",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie Aufbau und Funktionsweise eines Daniell-Elements. Wie wird die Zellspannung berechnet, und wie hängt sie mit der freien Enthalpie zusammen?",
        answer:
          "Das Daniell-Element ist eine galvanische Zelle bestehend aus zwei Halbzellen: einer Zinkelektrode in ZnSO₄-Lösung (Anode) und einer Kupferelektrode in CuSO₄-Lösung (Kathode), verbunden durch eine Salzbrücke (z. B. KCl-Lösung in Agar-Gel). An der Anode wird Zink oxidiert: Zn → Zn²⁺ + 2e⁻ (E° = −0,76 V). An der Kathode wird Kupfer reduziert: Cu²⁺ + 2e⁻ → Cu (E° = +0,34 V). Elektronen fließen im äußeren Stromkreis von der Zink-Anode zur Kupfer-Kathode. Die Salzbrücke gleicht die entstehenden Ladungsunterschiede aus: Anionen wandern zur Anode, Kationen zur Kathode. Die Standardzellspannung berechnet sich als E°Zelle = E°Kathode − E°Anode = 0,34 − (−0,76) = +1,10 V. Der positive Wert bestätigt die Spontanität. Der Zusammenhang zur freien Enthalpie lautet: ΔG° = −n · F · E°Zelle. Mit n = 2 (zwei Elektronen) und F = 96485 C/mol ergibt sich ΔG° = −2 × 96485 × 1,10 = −212268 J/mol ≈ −212 kJ/mol. Der negative ΔG°-Wert bestätigt, dass die Reaktion spontan und exergon ist. Je größer E°Zelle, desto mehr elektrische Arbeit kann gewonnen werden.",
      },
      klinischerBezug:
        "Herzschrittmacher und implantierbare Defibrillatoren nutzen Lithium-Iodid-Primärbatterien (Lebensdauer 5–10 Jahre) oder Lithium-Ionen-Akkus, deren elektrochemische Stabilität und hohe Energiedichte lebenserhaltend sind. Die elektrochemische Grundlage von Membranpotenzialem in Nervenzellen (Na⁺/K⁺-Gradient) folgt denselben thermodynamischen Prinzipien wie galvanische Zellen — die Nernst-Gleichung beschreibt beide. In der klinischen Diagnostik wird die Blutgas-Analyse mit potentiometrischen pH- und pO₂-Elektroden durchgeführt, die auf Standardelektrodenpotenzial-Prinzipien basieren.",
      selfTest: [
        {
          question: "In einer galvanischen Zelle: An welcher Elektrode findet Oxidation statt?",
          options: [
            "Kathode (positiv)",
            "Kathode (negativ)",
            "An beiden Elektroden gleichzeitig",
            "Anode (positiv)",
            "Anode (negativ)",
          ],
          correctIndex: 4,
          explanation:
            "In einer galvanischen Zelle findet an der Anode Oxidation statt — Elektronen werden abgegeben und fließen durch den äußeren Stromkreis zur Kathode. Die Anode ist negativ geladen (Elektronenüberschuss durch Oxidation). Die Merkhilfe AnOx RedKat: Anode = Oxidation, Kathode = Reduktion. In der Elektrolyse ist die Anode dagegen positiv (an den Plus-Pol der Spannungsquelle angeschlossen), aber Oxidation findet auch dort statt.",
          hints: [
            "AnOx RedKat: AN-ode = OX-idation; KAT-hode = RED-uktion",
            "In der galvanischen Zelle ist die Anode negativ (Elektronenabgabe = Elektronenüberschuss)",
          ],
          difficulty: 1,
          tags: ["galvanische-zelle", "anode-kathode", "anox-redkat"],
        },
        {
          question: "Die Standardzellspannung des Daniell-Elements (Zn/Cu) beträgt:",
          options: ["1,10 V", "0,76 V", "0,34 V", "1,52 V", "2,00 V"],
          correctIndex: 0,
          explanation:
            "E°Zelle = E°Kathode − E°Anode = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 V − (−0,76 V) = +1,10 V. Die positive Zellspannung zeigt an, dass die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu spontan abläuft. Zink mit niedrigerem E° ist die Anode (wird oxidiert), Kupfer mit höherem E° ist die Kathode (wird reduziert). Diese Reaktion war historisch das erste galvanische Element, konstruiert von Luigi Galvani und Alessandro Volta.",
          hints: [
            "E°Zelle = E°Kathode − E°Anode; Kathode hat höheres E°",
            "E°(Cu²⁺/Cu) = +0,34 V; E°(Zn²⁺/Zn) = −0,76 V",
          ],
          difficulty: 1,
          tags: ["daniell-element", "zellspannung", "e0-berechnung"],
        },
        {
          question: "Welche Aussage zur Elektrolyse ist korrekt?",
          options: [
            "Elektrolyse ist eine spontane Redox-Reaktion",
            "Elektrolyse erzwingt nicht-spontane Redox-Reaktionen durch externe elektrische Energie",
            "Die Anode der Elektrolysezelle ist an den Minuspol angeschlossen",
            "An der Kathode der Elektrolysezelle findet Oxidation statt",
            "Die abgeschiedene Masse ist unabhängig von der Stromstärke",
          ],
          correctIndex: 1,
          explanation:
            "Elektrolyse ist das elektrochemische Erzwingen nicht-spontaner Redox-Reaktionen durch Anlegen einer externen Spannung. Die ΔG°-Werte sind positiv (endergon). An der Kathode (negativ, an Minuspol) findet Reduktion statt (Metallabscheidung), an der Anode (positiv, an Pluspol) findet Oxidation statt. Die abgeschiedene Masse folgt dem Faradayschen Gesetz: m = M·I·t/(n·F) — sie ist proportional zur Stromstärke und zur Zeit.",
          hints: [
            "Elektrolyse = erzwungene, NICHT-spontane Reaktion (braucht externe Spannung)",
            "Die Grundregel AnOx RedKat gilt auch bei Elektrolyse — aber die Vorzeichen der Elektroden sind anders",
          ],
          difficulty: 2,
          tags: ["elektrolyse", "nicht-spontan", "externe-spannung"],
        },
        {
          question:
            "Bei der Elektrolyse von CuSO₄-Lösung mit einer Stromstärke von 2 A über 965 s und n = 2 Elektronen: Welche Masse Kupfer (M = 63,5 g/mol) scheidet sich an der Kathode ab?",
          options: ["0,318 g", "1,27 g", "0,635 g", "2,54 g", "6,35 g"],
          correctIndex: 2,
          explanation:
            "Faradaysches Gesetz: m = M · I · t / (n · F) = 63,5 · 2 · 965 / (2 · 96485) = 63,5 · 1930 / 192970 = 122555 / 192970 ≈ 0,635 g. Die geflossene Ladung beträgt Q = I · t = 2 A · 965 s = 1930 C. 1 Mol Elektronen entspricht 96485 C (Faraday-Konstante). Für Cu²⁺ + 2e⁻ → Cu braucht man 2 × 96485 = 192970 C pro Mol Cu = 63,5 g. Mit 1930 C scheidet man 1930/192970 × 63,5 ≈ 0,635 g ab.",
          hints: [
            "Faraday: m = M · I · t / (n · F) mit F = 96485 C/mol",
            "Schritt 1: Q = I × t = 2 × 965 = 1930 C; dann m = 63,5 × 1930 / (2 × 96485)",
          ],
          difficulty: 3,
          tags: ["faraday-gesetz", "elektrolyse", "kupfer-abscheidung"],
        },
        {
          question: "Was beschreibt das Standardelektrodenpotenzial E°?",
          options: [
            "Die Spannung einer Zelle unter beliebigen Bedingungen",
            "Die Gleichgewichtskonstante der Oxidationsreaktion",
            "Die Energie, die zur Elektrolyse benötigt wird",
            "Die Tendenz eines Redox-Paares, Elektronen aufzunehmen, gemessen gegen die SHE bei Standardbedingungen",
            "Die Leitfähigkeit der Elektrolytlösung",
          ],
          correctIndex: 3,
          explanation:
            "Das Standardelektrodenpotenzial E° (auch Standardreduktionspotenzial) beschreibt die Neigung eines Redox-Paares, Elektronen aufzunehmen (Reduktion), gemessen gegen die Standard-Wasserstoff-Elektrode (SHE, E° = 0,00 V) unter Standardbedingungen (25 °C, 1 atm, alle gelösten Ionen in 1 mol/L Konzentration). Höheres E° bedeutet stärkeres Oxidationsmittel. Damit lässt sich vorhersagen, welche Redox-Reaktionen spontan ablaufen: Die Reaktion mit positivem E°Zelle ist spontan.",
          hints: [
            "Standard = Standardbedingungen (25 °C, 1 mol/L, 1 atm), gemessen gegen SHE",
            "E° beschreibt die Reduktions-Neigung: hohes E° = nimmt gerne Elektronen auf",
          ],
          difficulty: 2,
          tags: ["standardelektrodenpotenzial", "she", "reduktionspotenzial"],
        },
        {
          question: "Welche Aussage zur freien Enthalpie ΔG° und Zellspannung E° ist korrekt?",
          options: [
            "ΔG° = +n · F · E°Zelle (positiv für spontane Reaktionen)",
            "ΔG° = −F / (n · E°Zelle)",
            "ΔG° = n · R · T · ln(E°Zelle)",
            "ΔG° und E° sind voneinander unabhängig",
            "ΔG° = −n · F · E°Zelle (negativ für spontane Reaktionen)",
          ],
          correctIndex: 4,
          explanation:
            "Die fundamentale Verknüpfung lautet ΔG° = −n · F · E°Zelle. Für eine spontane Reaktion gilt E°Zelle > 0 und entsprechend ΔG° < 0 (exergon). n ist die Anzahl der übertragenen Elektronen, F die Faraday-Konstante (96485 C/mol). Beispiel Daniell-Element: ΔG° = −2 × 96485 × 1,10 = −212 kJ/mol. Diese Gleichung verknüpft Elektrochemie mit Thermodynamik und ermöglicht die Berechnung von Gleichgewichtskonstanten: ΔG° = −RT·ln(K), also ln(K) = n·F·E°/(R·T).",
          hints: [
            "Spontane Reaktion: ΔG° < 0 und E°Zelle > 0 — welches Vorzeichen passt?",
            "ΔG° = −n · F · E°: Minus-Zeichen ist entscheidend",
          ],
          difficulty: 2,
          tags: ["delta-g", "e0-zelle", "spontanität"],
        },
        {
          question: "Warum ist eine Salzbrücke in einer galvanischen Zelle notwendig?",
          options: [
            "Sie gleicht Ladungsunterschiede zwischen den Halbzellen aus und ermöglicht so dauerhaften Stromfluss",
            "Sie verhindert, dass die Elektroden sich auflösen",
            "Sie leitet Elektronen von der Anode zur Kathode",
            "Sie erhöht die Standardzellspannung",
            "Sie katalysiert die Elektrodenreaktionen",
          ],
          correctIndex: 0,
          explanation:
            "Die Salzbrücke (z. B. KCl in Agar-Gel) ist für den Ionentransport zwischen den Halbzellen zuständig. Ohne sie würde in der Anodenhalbzelle ein Ladungsüberschuss entstehen (Zn²⁺-Ionen treten aus, Elektronen fließen ab → negative Überschussladung in Lösung bleibt), während in der Kathodenhalbzelle Kationen verbraucht werden (positive Ladung fehlt). Diese Ladungstrennung würde den Elektronenfluss sofort stoppen. Die Salzbrücke lässt Ionen wandern (Anionen zur Anode, Kationen zur Kathode), hält aber die Lösungen getrennt.",
          hints: [
            "Was passiert mit der Ladungsbilanz, wenn Zn²⁺ in die Lösung geht, aber Elektronen nach außen fließen?",
            "Die Salzbrücke führt Ionen durch, keine Elektronen — sie schließt den Stromkreis ionisch",
          ],
          difficulty: 2,
          tags: ["salzbrücke", "ladungsausgleich", "galvanische-zelle"],
        },
      ],
    },
    {
      id: "ch-11-03",
      title: "Nernst-Gleichung und Elektrochemisches Gleichgewicht",
      stichworte: [
        "Nernst-Gleichung",
        "Reaktionsquotient Q",
        "Nernst-Faktor 59,16 mV",
        "Glaselektrode pH-Messung",
        "Gleichgewichtskonstante aus E°",
        "Konzentrationszelle",
        "Nernst-Potenzial biologisch",
        "Ruhemembranpotenzial",
        "Goldman-Gleichung",
        "K⁺-Nernst −90 mV",
      ],
      content: `


## Warum reicht E° allein nicht aus?

Das **Standardpotenzial E°** beschreibt die Spannung unter idealen Laborbedingungen (25 °C, alle Konzentrationen exakt 1 mol/L). In der Realität sind diese Bedingungen fast nie erfüllt: Im Blut liegt die K+-Konzentration bei 4 mmol/L, nicht bei 1 mol/L. Die **Nernst-Gleichung** korrigiert E° für reale Konzentrationen.

**Die Grundidee in einem Satz:** Je mehr vom Oxidationsmittel vorhanden ist, desto stärker "will" die Reaktion ablaufen -> die Spannung steigt. Je mehr vom Reduktionsmittel da ist, desto schwächer wird der Antrieb -> die Spannung sinkt.

Das ist wie ein Wasserfall: Je größer der Höhenunterschied (= Konzentrationsunterschied), desto mehr Kraft hat das Wasser (= Spannung).

---

## Die Nernst-Gleichung -- Schritt für Schritt

Die Formel sieht auf den ersten Blick kompliziert aus, aber sie hat nur **eine zentrale Aussage**: *Das reale Potenzial E weicht vom Standardpotenzial E ab, und zwar abhängig vom Konzentrationsverhältnis Q.*

**E = E_Standard - (0,05916 V)/n * log(Q)**   *(bei 25 °C)*

Was bedeuten die einzelnen Teile?

| Symbol | Bedeutung | Woher kommt es? |
|--------|-----------|-----------------|
| **E** | Das tatsächliche Potenzial -- was du messen würdest | Das ist gesucht |
| **E_Standard** | Das Standardpotenzial (aus der Tabelle) | Bekannt aus dem letzten UK |
| **0,05916 V** | Der "Nernst-Faktor" -- eine Naturkonstante bei 25 °C | Kommt aus R*T/F * ln(10) |
| **n** | Anzahl übertragener Elektronen | Aus der Reaktionsgleichung |
| **Q** | Reaktionsquotient: [Produkte] / [Edukte] | Aus den aktuellen Konzentrationen |

**Das Minuszeichen** ist der Schlüssel: Wenn Q groß wird (viel Produkt, wenig Edukt -> Batterie fast leer), wird E kleiner. Wenn Q klein ist (viel Edukt -> Batterie frisch), bleibt E nahe an E_Standard oder wird sogar größer.

> **Merke:** Mehr Oxidationsmittel (Edukt) = stärkerer Antrieb = höheres E. Mehr Reduktionsmittel (Produkt) = schwächerer Antrieb = niedrigeres E. Der Nernst-Faktor beträgt **59,16 mV pro Zehnerpotenz** im Konzentrationsverhältnis (bei 25 °C).

---

## Wie misst das pH-Gerät im Krankenhaus?

Die wichtigste Anwendung der Nernst-Gleichung in der Klinik ist die **pH-Messung** mit einer Glaselektrode. Das Prinzip ist elegant: Eine spezielle Glasmembran lässt nur H+-Ionen durch. Je nachdem wie viele H+-Ionen in der Lösung sind (= der pH-Wert), baut sich eine messbare Spannung auf.

Pro **pH-Einheit** ändert sich die Spannung um genau **59,16 mV** (bei 25 °C).

- pH sinkt um 1 (z. B. von 7 auf 6 = 10-fach mehr H+) -> Spannung steigt um ca. 59 mV
- pH steigt um 1 (z. B. von 7 auf 8 = 10-fach weniger H+) -> Spannung sinkt um ca. 59 mV

Bei **Körpertemperatur (37 °C)** beträgt der Nernst-Faktor ca. **61,5 mV** pro pH-Einheit.

> **Merke:** Glaselektrode: **-59 mV pro pH-Einheit** (25 °C). Klinisch: Blutgasanalysator misst Blut-pH (Norm: 7,35-7,45) genau mit diesem Prinzip.

---

## Biologische Membranpotenziale -- Nernst in der Zelle

Nervenzellen besitzen einen charakteristischen Ionengradienten:

- **Intrazellulär:** viel K+ (ca. 140 mmol/L), wenig Na+ (ca. 15 mmol/L)
- **Extrazellulär:** wenig K+ (ca. 4 mmol/L), viel Na+ (ca. 145 mmol/L)

Dieser Konzentrationsunterschied erzeugt -- genau wie bei einer Batterie -- eine elektrische Spannung. Die Nernst-Gleichung berechnet, welche Spannung sich für **ein einzelnes Ion** ergibt:

**E_Ion = (RT/zF) * ln([außen] / [innen])**

In der Praxis merkt man sich die Ergebnisse:

| Ion | innen | außen | Nernst-Potenzial |
|-----|-------|--------|----------|
| **K+** | 140 mmol/L | 4 mmol/L | **ca. -90 mV** |
| **Na+** | 15 mmol/L | 145 mmol/L | **ca. +62 mV** |

Wäre die Membran *nur* für K+ durchlässig, läge das Potenzial bei -90 mV. Wäre sie *nur* für Na+ durchlässig, bei +62 mV. In der Realität ist sie vor allem für K+ durchlässig -- daher liegt das **Ruhemembranpotenzial bei ca. -70 mV** (näher am K+-Wert).

> **Merke:** K+-Nernst ca. -90 mV, Na+-Nernst ca. +62 mV. Ruhemembranpotenzial (ca. -70 mV) liegt dazwischen. Diesen Zusammenhang beschreibt die **Goldman-Gleichung**.

> **Prüfungstipp:** Der Nernst-Faktor 59,16 mV (bei 25 °C) taucht in Rechenfragen auf: Pro Zehnerpotenz Konzentrationsänderung verschiebt sich E um 59,16/n mV. Membranpotenzialwerte merken: K+ = -90 mV, Na+ = +62 mV, Ruhepotenzial = -70 mV.`,
      lernziele: [
        "Die Nernst-Gleichung formulieren und auf konkrete Elektroden- und Zellpotenziale anwenden",
        "Den Einfluss von Konzentration und Temperatur auf Elektrodenpotenziale berechnen und interpretieren",
        "Das Prinzip der potentiometrischen pH-Messung mit der Glaselektrode erläutern",
        "Gleichgewichtskonstanten aus Standardelektropotenzialen berechnen",
        "Biologische Membranpotenziale als elektrochemische Phänomene (Nernst-Potenzial) beschreiben",
      ],
      sections: [
        {
          heading: "Die Nernst-Gleichung — Formel und Bedeutung",
          text: "E = E° − (0,05916 V)/n · log(Q) bei 25 °C. Q ist der Reaktionsquotient: [Produkte]/[Edukte]. Ist Q < 1 (Oxidans-Überschuss), ist E > E°. Ist Q > 1 (Reduktans-Überschuss), ist E < E°. Die Nernst-Gleichung verknüpft Thermodynamik (ΔG = −nFE) mit realen Konzentrationen und erklärt, warum sich Zellspannungen mit Entladung ändern.",
          merksatz:
            "Nernst: E = E° − (0,05916/n) · log(Q). Bei 25 °C: pro Zehnerpotenz in Q ändert sich E um 59,16/n mV.",
        },
        {
          heading: "pH-Messung mit der Glaselektrode",
          text: "Die Glaselektrode nutzt die Nernst-Gleichung zur pH-Bestimmung: E_Membran = const − 0,05916 · pH. Pro pH-Einheit ändert sich die Spannung um 59,16 mV (Nernst-Faktor). Zwei Referenzpunkte (Kalibrierung mit pH 4 und pH 7 oder 7 und 10) legen die Geraden fest. Klinisch wird pH-Messung im Blutgas-Gerät eingesetzt (Normwert arteriell: pH 7,35–7,45).",
          merksatz:
            "Glaselektrode: −59,16 mV pro pH-Einheit (Nernst-Steigung bei 25 °C). Kalibrierung mit 2 Puffern.",
        },
        {
          heading: "Gleichgewichtskonstante aus E°",
          text: "Im Gleichgewicht gilt E = 0 und ΔG = 0. Daraus folgt K = 10^(n · E° / 0,05916). Großes positives E° = große K = Reaktion läuft fast vollständig ab. Kleines E° = kleines K = nur partieller Umsatz. Daniell-Element: K ≈ 10³⁷ (praktisch vollständiger Umsatz). Diese Verknüpfung verbindet Elektrochemie mit Gleichgewichtsthermodynamik.",
          merksatz: "K = 10^(n·E°/0,05916). Positives E° → K > 1 → spontan und produktbegünstigt.",
        },
        {
          heading: "Nernst-Potenzial und biologische Membranen",
          text: "Das Nernst-Potenzial eines Ions beschreibt das Gleichgewichtspotenzial, bei dem die elektrische Kraft den Konzentrationsgradienten gerade kompensiert. E_Ion = (RT/zF) · ln([außen]/[innen]). Für K⁺ ergibt sich ca. −90 mV, für Na⁺ ca. +62 mV. Das tatsächliche Ruhemembranpotenzial (−70 mV) liegt zwischen diesen Werten und wird durch die Goldman-Gleichung beschrieben, die Permeabilitäten berücksichtigt.",
          merksatz:
            "Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen]). K⁺: ca. −90 mV; Na⁺: ca. +62 mV.",
        },
      ],
      merksätze: [
        "Nernst-Gleichung: E = E° − (RT/nF)·ln(Q) = E° − (0,05916/n)·log(Q) bei 25 °C",
        "Nernst-Faktor: 59,16 mV pro Dekade in Q (bei 25 °C, n = 1)",
        "Hohe [Ox]-Konzentration → kleines Q → E größer als E° (stärkeres Oxidationsmittel)",
        "Gleichgewicht: E = 0 → K = 10^(n·E°/0,05916) bei 25 °C",
        "Glaselektrode: −59,16 mV pro pH-Einheit bei 25 °C (Nernst-Steigung)",
        "Biologisches Nernst-Potenzial: E_Ion = (RT/zF)·ln([außen]/[innen])",
        "K⁺-Nernst-Potenzial ≈ −90 mV; Na⁺-Nernst-Potenzial ≈ +62 mV (physiolog.)",
        "Ruhemembranpotenzial ≈ −70 mV (zwischen K⁺ und Na⁺ Nernst-Potenzial)",
        "Konzentrationszelle: E° = 0, aber E ≠ 0 wegen Konzentrationsunterschied (Nernst)",
        "ΔG = −nFE; im Gleichgewicht E = 0 und ΔG = 0 → K aus E° berechenbar",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Nernst-Gleichung: Was besagt sie, wie wird sie angewendet, und welche biologische Bedeutung hat sie? Berechnen Sie das Nernst-Potenzial für K⁺ bei physiologischen Konzentrationen.",
        answer:
          "Die Nernst-Gleichung beschreibt das tatsächliche Elektrodenpotenzial E unter realen (nicht-Standard-)Bedingungen: E = E° − (RT/nF)·ln(Q), bei 25 °C vereinfacht zu E = E° − (0,05916/n)·log(Q). Dabei ist E° das Standardpotenzial, R die Gaskonstante (8,314 J/mol·K), T die Temperatur in Kelvin, n die Anzahl übertragener Elektronen, F die Faraday-Konstante (96485 C/mol) und Q der Reaktionsquotient. Die Gleichung zeigt: Erhöht man die Konzentration des Oxidationsmittels (Ox), sinkt Q, und E wird größer als E° — das Redoxpaar wird reaktiver. Umgekehrt bei Überschuss des Reduktionsmittels. Anwendung: pH-Messung mit der Glaselektrode basiert auf der Nernst-Gleichung; pro pH-Einheit ändert sich die Spannung um 59,16 mV. In der Biologie beschreibt das Nernst-Potenzial das Gleichgewichtspotenzial eines Ions über eine selektive Membran. Für K⁺ mit typischen physiologischen Konzentrationen ([K⁺]_innen = 140 mmol/L, [K⁺]_außen = 4 mmol/L) bei 37 °C (T = 310 K): E_K = (RT/zF)·ln([außen]/[innen]) = (8,314 × 310)/(1 × 96485)·ln(4/140) = 0,02677 · ln(0,02857) = 0,02677 × (−3,555) ≈ −0,095 V ≈ −95 mV. Dieses Potenzial bedeutet: Wenn die Membran nur für K⁺ permeabel wäre, würde sich ein Gleichgewichtspotenzial von −95 mV einstellen. Das reale Ruhemembranpotenzial (−70 mV) liegt zwischen K⁺ (−95 mV) und Na⁺ (+62 mV), da die Membran für beide Ionen teilweise permeabel ist (Goldman-Gleichung).",
      },
      klinischerBezug:
        "Die Nernst-Gleichung ist direkt relevant für die Blutgasanalyse: pH-Elektroden in Blutgasgeräten messen das Membranpotenzial der Glaselektrode und berechnen daraus den pH-Wert (Normbereich arteriell: 7,35–7,45). pO₂- und pCO₂-Elektroden (Clark- und Severinghaus-Elektroden) basieren ebenfalls auf elektrochemischen Prinzipien. Die Nernst-Gleichung erklärt auch, warum Hypokaliämie (erniedrigtes extrazelluläres K⁺) das Ruhemembranpotenzial hyperpolarisiert und Herzrhythmusstörungen verursacht — das K⁺-Nernst-Potenzial verschiebt sich in negativere Richtung.",
      selfTest: [
        {
          question: "Die Nernst-Gleichung lautet bei 25 °C (vereinfacht):",
          options: [
            "E = E° + (0,05916/n) · log(Q)",
            "E = E° − (0,05916/n) · log(Q)",
            "E = E° · n · 0,05916 · log(Q)",
            "E = E° / (n · 0,05916 · log(Q))",
            "E = −E° + (0,05916/n) · log(Q)",
          ],
          correctIndex: 1,
          explanation:
            "Die Nernst-Gleichung bei 25 °C lautet: E = E° − (0,05916 V / n) · log₁₀(Q). Der Faktor 0,05916 V entsteht aus RT/F bei 25 °C multipliziert mit ln(10) für die Umrechnung von natürlichem auf dekadischen Logarithmus: (8,314 × 298 / 96485) × 2,303 = 0,05916 V. Das Minuszeichen ist entscheidend: Erhöht man Q (mehr Produkte), sinkt E. Diese Gleichung ermöglicht die Berechnung von Elektrodenpotenzialen unter beliebigen Konzentrationsbedingungen.",
          hints: [
            "Merke: E = E° MINUS (0,05916/n) · log(Q) — Minuszeichen!",
            "0,05916 V = RT·ln(10)/F bei 25 °C (= 2,303 × 8,314 × 298 / 96485)",
          ],
          difficulty: 1,
          tags: ["nernst-gleichung", "reaktionsquotient", "konzentration"],
        },
        {
          question:
            "Das Elektrodenpotenzial einer Zn²⁺/Zn-Elektrode (E° = −0,76 V, n = 2) bei [Zn²⁺] = 0,01 mol/L beträgt:",
          options: ["−0,701 V", "−0,760 V", "−0,819 V", "−0,642 V", "−0,900 V"],
          correctIndex: 2,
          explanation:
            "Nernst: E = −0,76 − (0,05916/2) · log([Zn]/[Zn²⁺]). Für Metallabscheidung Zn²⁺ + 2e⁻ → Zn gilt Q = 1/[Zn²⁺] = 1/0,01 = 100. Also: E = −0,76 − (0,02958) · log(100) = −0,76 − 0,02958 · 2 = −0,76 − 0,0592 = −0,819 V. Eine niedrigere Zn²⁺-Konzentration macht die Elektrode negativer (Reduktion ist weniger begünstigt), was die Le-Chatelier-Regel bestätigt.",
          hints: [
            "Q = 1/[Zn²⁺] für die Reduktionshalbreaktion Zn²⁺ + 2e⁻ → Zn",
            "E = −0,76 − (0,05916/2) · log(1/0,01) = −0,76 − 0,02958 · log(100)",
          ],
          difficulty: 3,
          tags: ["nernst", "zn-elektrode", "konzentration-spannung"],
        },
        {
          question:
            "Die Glaselektrode zeigt eine Spannung von −59,16 mV pro pH-Einheit. Was beschreibt dieser Wert?",
          options: [
            "Die maximale Spannung der Elektrode",
            "Den pKa-Wert der Glasmembran",
            "Die Aktivierungsenergie der Elektrodenreaktion",
            "Den Nernst-Faktor: die Potenzialänderung pro Einheit im Reaktionsquotienten bei n = 1 und 25 °C",
            "Die Faraday-Konstante in mV",
          ],
          correctIndex: 3,
          explanation:
            "Der Nernst-Faktor (59,16 mV bei 25 °C für n = 1) beschreibt die Potenzialänderung pro Dekade im Reaktionsquotienten Q. Da pH = −log[H⁺], entspricht eine pH-Änderung um 1 einer zehnfachen Änderung von [H⁺] (eine Dekade). Die Glaselektrode misst H⁺-Aktivität, und nach der Nernst-Gleichung ändert sich das Potential um 59,16 mV pro pH-Einheit (bei 25 °C). Bei Körpertemperatur (37 °C) beträgt der Nernst-Faktor ca. 61,5 mV/pH.",
          hints: [
            "59,16 mV = RT·ln(10)/F bei 25 °C für n = 1 Elektron",
            "pH = −log[H⁺] — eine pH-Einheit entspricht einer Zehnerpotenz in [H⁺]",
          ],
          difficulty: 2,
          tags: ["glaselektrode", "nernst-faktor", "ph-messung"],
        },
        {
          question:
            "Das Nernst-Gleichgewichtspotenzial für Na⁺ liegt bei ca. +62 mV. Was bedeutet dies für eine Nervenzelle?",
          options: [
            "Na⁺ strömt bei diesem Potenzial aus der Zelle aus",
            "Bei −62 mV sind elektrischer und chemischer Gradient für Na⁺ im Gleichgewicht",
            "Das Aktionspotenzial erreicht genau +62 mV",
            "Na⁺ hat ein negatives Ruhepotenzial",
            "Bei +62 mV halten sich elektrischer Antrieb und chemischer Konzentrationsgradient für Na⁺ die Waage",
          ],
          correctIndex: 4,
          explanation:
            "Das Nernst-Potenzial +62 mV für Na⁺ bedeutet: Wenn das Membranpotenzial genau +62 mV betrüge, wären elektrischer Gradient (innen positiv = treibt Na⁺ raus) und chemischer Gradient ([Na⁺]_außen >> innen = treibt Na⁺ rein) im Gleichgewicht, es gäbe keinen Nettostrom. Da das Ruhemembranpotenzial ca. −70 mV ist, besteht ein großer treibender Druck für Na⁺-Einstrom. Beim Aktionspotenzial öffnen Na⁺-Kanäle, Na⁺ strömt ein und das Potential nähert sich (aber erreicht meist nicht ganz) +62 mV.",
          hints: [
            "Nernst-Potenzial = das Membranpotenzial, bei dem Nettostrom = 0 (elektrisch und chemisch im Gleichgewicht)",
            "Bei Ruhepotenzial −70 mV: Wie wirken elektrischer und chemischer Gradient für Na⁺?",
          ],
          difficulty: 2,
          tags: ["nernst-potenzial", "na-kanal", "membranpotenzial"],
        },
        {
          question:
            "Wie wird die Gleichgewichtskonstante K aus dem Standardpotenzial E° berechnet?",
          options: [
            "K = 10^(n · E° / 0,05916)",
            "K = E° / (n · 0,05916)",
            "K = n · E° / 0,05916",
            "K = e^(n · E° / 0,05916)",
            "K = 10^(E° / 0,05916)",
          ],
          correctIndex: 0,
          explanation:
            "Im Gleichgewicht gilt E = 0, also Q = K. Einsetzen in die Nernst-Gleichung: 0 = E° − (0,05916/n) · log(K) → log(K) = n · E° / 0,05916 → K = 10^(n·E°/0,05916). Alternativ über ΔG°: ΔG° = −nFE° = −RT·ln(K) → ln(K) = nFE°/(RT) → K = e^(nFE°/RT). Für Daniell-Element: K = 10^(2 × 1,10 / 0,05916) = 10^37,2 ≈ 10³⁷ — die Reaktion läuft praktisch vollständig ab.",
          hints: [
            "Im Gleichgewicht E = 0, daher Q = K — setze in Nernst-Gleichung ein und löse nach K auf",
            "log(K) = n·E°/0,05916 → K = 10^(n·E°/0,05916)",
          ],
          difficulty: 2,
          tags: ["gleichgewichtskonstante", "e0", "k-berechnung"],
        },
        {
          question:
            "Eine Konzentrationszelle besteht aus zwei Cu/Cu²⁺-Halbzellen mit [Cu²⁺] = 1,0 mol/L (Kathode) und [Cu²⁺] = 0,01 mol/L (Anode). Welche Zellspannung ergibt sich näherungsweise?",
          options: ["0,00 V", "+0,059 V", "+0,029 V", "+0,118 V", "+0,34 V"],
          correctIndex: 1,
          explanation:
            "Bei einer Konzentrationszelle gilt E°Zelle = 0 (beide Elektroden sind Cu²⁺/Cu mit E° = +0,34 V). Die Spannung kommt ausschließlich aus dem Konzentrationsunterschied: E_Zelle = −(0,05916/2) · log([Cu²⁺]_Anode / [Cu²⁺]_Kathode) = −(0,02958) · log(0,01/1,0) = −0,02958 · (−2) = +0,0592 ≈ +0,059 V. Konzentrationszellen erzeugen also auch ohne unterschiedliche Elektrodenmaterialien eine Spannung — allein durch den Konzentrationsgradienten. Dies ist direkt analog zum chemiosmotischen Prinzip in Mitochondrien.",
          hints: [
            "Konzentrationszelle: E° = 0, Spannung kommt nur vom Konzentrationsunterschied (Nernst)",
            "E_Zelle = (0,05916/n) · log([Ox]_hoch / [Ox]_niedrig) — höhere [Ox] an der Kathode treibt die Reaktion",
          ],
          difficulty: 3,
          tags: ["konzentrationszelle", "nernst", "konzentrationsunterschied"],
        },
        {
          question:
            "Welchen Einfluss hat ein Anstieg der Temperatur von 25 °C auf 37 °C auf den Nernst-Faktor?",
          options: [
            "Der Nernst-Faktor bleibt konstant bei 59,16 mV",
            "Der Nernst-Faktor sinkt auf ca. 50 mV",
            "Der Nernst-Faktor steigt auf ca. 61,5 mV",
            "Der Nernst-Faktor wird negativ",
            "Der Nernst-Faktor halbiert sich auf ca. 30 mV",
          ],
          correctIndex: 2,
          explanation:
            "Der Nernst-Faktor bei 25 °C (298 K) beträgt RT·ln(10)/F = 8,314 × 298 × 2,303 / 96485 = 0,05916 V = 59,16 mV. Bei 37 °C (310 K): 8,314 × 310 × 2,303 / 96485 = 0,06148 V ≈ 61,5 mV. Der Nernst-Faktor ist direkt proportional zur absoluten Temperatur T. Das ist relevant für pH-Messungen und biologische Membranpotenziale: Ein auf 25 °C kalibriertes pH-Gerät zeigt bei 37 °C (Körpertemperatur) leicht abweichende Werte, deshalb haben klinische Blutgasgeräte eine Temperaturkompensation.",
          hints: [
            "Nernst-Faktor = RT·ln(10)/F — er ist proportional zu T (Kelvin)",
            "T wächst von 298 K auf 310 K — um welchen Faktor wächst der Nernst-Faktor?",
          ],
          difficulty: 3,
          tags: ["nernst-faktor", "temperatur", "ph-kalibrierung"],
        },
      ],
    },
    {
      id: "ch-11-04",
      title: "Oxidativer Stress, ROS und biologische Redox-Systeme",
      stichworte: [
        "Reaktive Sauerstoffspezies ROS",
        "Superoxid O₂·⁻",
        "Hydroxyl-Radikal Fenton",
        "Superoxiddismutase SOD",
        "Katalase",
        "Glutathion GSH GPx",
        "NADPH Pentosephosphatweg",
        "G6PD-Mangel",
        "Vitamin E Membranschutz",
        "Lipidperoxidation",
        "Oxidativer Burst NADPH-Oxidase",
      ],
      content: `


## Reaktive Sauerstoffspezies (ROS)

Reaktive Sauerstoffspezies (ROS, englisch: Reactive Oxygen Species) sind hochreaktive, sauerstoffhaltige Moleküle, die in der Lage sind, zelluläre Biomoleküle zu oxidieren und zu schädigen. Sie entstehen als unvermeidliche Nebenprodukte des aeroben Stoffwechsels, aber auch gezielt durch Immunzellen zur Pathogenabwehr.

**Wichtige ROS und ihre Bildung:**
- **Superoxid-Radikalanion (O2*-):** Entsteht durch unvollständige Reduktion von O2 (1-Elektronen-Übertragung), besonders an Komplex I und III der Atmungskette. O2 + e- -> O2*-
- **Wasserstoffperoxid (H2O2):** Entsteht aus O2*- durch Superoxiddismutase (SOD): 2O2*- + 2H+ -> H2O2 + O2. Weniger reaktiv als O2*-, aber membrangängig.
- **Hydroxyl-Radikal (*OH):** Das reaktivste ROS. Entsteht aus H2O2 durch die **Fenton-Reaktion**: H2O2 + Fe2+ -> *OH + OH- + Fe3+. Auch durch Haber-Weiss-Reaktion: O2*- + H2O2 -> *OH + OH- + O2.
- **Singlett-Sauerstoff (1O2):** Angeregter, besonders reaktiver Zustand des O2, entsteht bei Photooxidation.
- **Peroxynitrit (ONOO-):** Reaktion von O2*- mit NO: O2*- + NO* -> ONOO- (sehr reaktiv, nitrosiert Proteine).

## Oxidativer Stress

**Oxidativer Stress** entsteht, wenn die Produktion von ROS die antioxidative Kapazität der Zelle übersteigt. Dies führt zu:
- **Lipidperoxidation:** ROS attackieren mehrfach ungesättigte Fettsäuren in Membranen -> Kettenreaktion -> Membranschädigung
- **Protein-Oxidation:** Oxidation von Cystein-SH-Gruppen zu Disulfiden (-S-S-), Sulfensäuren (-SOH), oder Sulfonyl-Gruppen; Carbonylierung; Fragmentierung
- **DNA-Oxidation:** *OH greift Basen und Desoxyribose an -> 8-Oxo-Guanin (häufigste oxidative DNA-Läsion) -> Mutationen, Strangbrüche
- **Enzyme-Inaktivierung:** Oxidation aktiver Zentren (Fe-S-Cluster, Haem-Gruppen)

**Krankheiten bei chronischem oxidativem Stress:** Arteriosklerose (LDL-Oxidation), Krebs, Morbus Alzheimer, Parkinson, Diabetes mellitus Typ 2, rheumatoide Arthritis, chronisch-entzündliche Darmerkrankungen.

## Antioxidatives Schutzsystem

Die Zelle verfügt über enzymatische und nicht-enzymatische Antioxidantien:

**Enzymatische Antioxidantien:**
- **Superoxiddismutase (SOD):** Disproportioniert O2*- -> H2O2 + O2. Drei Isoformen: SOD1 (Cu/Zn, zytoplasmatisch), SOD2 (Mn, mitochondrial), SOD3 (Cu/Zn, extrazellulär)
- **Katalase:** H2O2 -> H2O + 1/2 O2. Peroxisomales Enzym. Höchste Umsatzzahl aller bekannten Enzyme (ca. 10^7 /s)
- **Glutathion-Peroxidase (GPx):** H2O2 + 2GSH -> 2H2O + GSSG. Verwendet reduziertes Glutathion (GSH) als Reduktionsmittel. Selenocystein im aktiven Zentrum.
- **Glutathion-Reduktase (GR):** GSSG + NADPH -> 2GSH. Regeneriert GSH auf Kosten von NADPH (aus Pentosephosphatweg).
- **Thioredoxin-System:** Thioredoxin (Trx) + Thioredoxin-Reduktase (TrxR) + NADPH: reduziert oxidierte Proteine

**Nicht-enzymatische Antioxidantien:**
- **Glutathion (GSH):** Tripeptid (gamma-Glu-Cys-Gly), zentrales intrazelluläres Antioxidans. Konzentration 1-10 mmol/L intrazellulär.
- **Vitamin C (Ascorbinsäure):** Wasserlöslich, direkte Radikalfänger-Funktion, regeneriert Vitamin E
- **Vitamin E (alpha-Tocopherol):** Fettlöslich, schützt Membranen vor Lipidperoxidation durch Abfangen von Peroxy-Radikalen (LOO*)
- **beta-Carotin und andere Carotinoide:** Quencher von Singlett-Sauerstoff
- **Harnsäure:** Wichtiges Antioxidans im Plasma
- **Coenzym Q10 (Ubichinol):** Membrangebundener Elektronenträger, auch antioxidativ

## NADPH und der Pentosephosphatweg

NADPH (Nicotinamid-Adenin-Dinukleotid-Phosphat, reduziert) ist das zentrale Reduktionsmittel für die Regeneration des Antioxidans-Systems. Der **Pentosephosphatweg (PPW)** ist die Hauptquelle für NADPH in der Zelle:
- G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der erste, geschwindigkeitsbestimmende Schritt
- G6PD-Mangel (häufigste Enzymopathie weltweit, X-chromosomal) -> reduzierter NADPH-Spiegel -> Erythrozyten anfällig für oxidativen Stress -> hämolytische Anämie bei Exposition zu Oxidantien (Primaquin, Favabohnen, Infektionen)

## ROS als Signalmoleküle

ROS haben nicht ausschließlich schädliche Funktionen. In physiologischen Konzentrationen wirken sie als **Redox-Signalmoleküle** (Konzept des Eustress vs. Distress):
- H2O2 oxidiert Cystein-SH-Gruppen von Signalproteinen -> Konformationsänderung -> Signalübertragung
- Aktivierung von NF-kappaB, HIF-1alpha, Nrf2 (antioxidativer Transkriptionsfaktor)
- NADPH-Oxidase (NOX) in Phagozyten produziert O2*- gezielt zur Pathogenabwehr (oxidativer Burst)
- Mitochondriale ROS regulieren Apoptose und Autophagie

---

> **Prüfungstipp:** ROS-Schutzkaskade merken: SOD (O₂·⁻ -> H₂O₂) -> Katalase/GPx (H₂O₂ -> H₂O). G6PD-Mangel = häufigste Enzymopathie weltweit = hämolytische Anämie bei Oxidantien. Fenton-Reaktion (Fe²⁺ + H₂O₂ -> ·OH) ist die gefährlichste ROS-Quelle.`,
      lernziele: [
        "Die wichtigsten reaktiven Sauerstoffspezies (ROS), ihre Bildungsmechanismen und Reaktivität benennen",
        "Oxidativen Stress definieren und seine Folgen auf Lipide, Proteine und DNA beschreiben",
        "Das enzymatische und nicht-enzymatische antioxidative Schutzsystem der Zelle erläutern",
        "Die Rolle von NADPH und dem Pentosephosphatweg für die antioxidative Kapazität erklären",
        "ROS als Signalmoleküle einordnen und den Unterschied zwischen physiologischer und pathologischer ROS-Produktion beschreiben",
      ],
      sections: [
        {
          heading: "Bildung und Klassifikation von ROS",
          text: "Superoxid (O₂·⁻) ist das primäre ROS der Atmungskette. SOD wandelt es zu H₂O₂ um (Disproportionierung). H₂O₂ ist membrangängig und modulerat reaktiv. Das Hydroxyl-Radikal (·OH), gebildet durch die Fenton-Reaktion (Fe²⁺ + H₂O₂), ist das reaktivste ROS und kann jedes biologische Molekül in diffusionslimitierter Geschwindigkeit oxidieren. Peroxynitrit (ONOO⁻, aus O₂·⁻ + NO) schädigt Proteine durch Nitrosierung.",
          merksatz:
            "ROS-Kaskade: O₂ → O₂·⁻ (1e⁻) → H₂O₂ (SOD) → ·OH (Fenton: Fe²⁺). Hydroxyl-Radikal ist das reaktivste.",
        },
        {
          heading: "Enzymatisches Antioxidans-System",
          text: "SOD (Superoxiddismutase) → Katalase → Glutathion-Peroxidase (GPx) bilden eine Kaskade: SOD entgiftet O₂·⁻ zu H₂O₂, Katalase und GPx bauen H₂O₂ ab. GPx benötigt GSH (Glutathion), das durch Glutathion-Reduktase auf Kosten von NADPH regeneriert wird. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (G6PD). G6PD-Mangel unterbricht diese Kette.",
          merksatz:
            "SOD → H₂O₂ → Katalase/GPx → H₂O. GPx braucht GSH; GSH-Reduktase regeneriert GSH mit NADPH.",
        },
        {
          heading: "Nicht-enzymatische Antioxidantien",
          text: "Vitamin E (α-Tocopherol, fettlöslich) schützt Membranen vor Lipidperoxidation; Vitamin C (Ascorbat, wasserlöslich) regeneriert Vitamin E. Glutathion (GSH) ist das wichtigste intrazelluläre Antioxidans und Co-Substrat von GPx. Harnsäure ist wichtig im Plasma. β-Carotin quencht Singlett-Sauerstoff. Coenzym Q₁₀ (Ubichinol) hat membrangebundene antioxidative Funktion.",
          merksatz:
            "Vitamin E (Membran) + Vitamin C (Zytosol, regeneriert Vit. E) + GSH + Harnsäure (Plasma) = Antioxidans-Team.",
        },
        {
          heading: "ROS als Signalmoleküle — Redox-Signaling",
          text: "Physiologische H₂O₂-Konzentrationen (nanomolar) wirken als Signalmoleküle: Sie oxidieren reaktive Cysteine in Phosphatasen und Kinasen, ändern deren Aktivität und modulieren Signalwege (NF-κB, Nrf2, HIF-1α). NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom (oxidativer Burst). Mitochondriale ROS triggern Apoptose. Zu viel ROS = Distress; kontrollierte ROS = Eustress.",
          merksatz:
            "Redox-Signaling: H₂O₂ oxidiert Cystein-SH → Konformationsänderung → Signalwirkung (physiologisch bei niedrigen Konz.).",
        },
      ],
      merksätze: [
        "ROS-Kaskade: O₂ →(1e⁻)→ O₂·⁻ →(SOD)→ H₂O₂ →(Fenton/Fe²⁺)→ ·OH",
        "Hydroxyl-Radikal (·OH) ist das reaktivste ROS — keine spezifische Entgiftung möglich",
        "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺ (Eisenkatalyse!)",
        "SOD: O₂·⁻ → H₂O₂ + O₂ (Disproportionierung; 3 Isoformen: Cu/Zn, Mn, extrazellulär)",
        "Katalase: H₂O₂ → H₂O + ½O₂ (peroxisomal; höchste Umsatzzahl aller Enzyme)",
        "GPx: H₂O₂ + 2GSH → 2H₂O + GSSG (Selen im aktiven Zentrum)",
        "NADPH aus Pentosephosphatweg regeneriert GSH über Glutathion-Reduktase",
        "G6PD-Mangel → NADPH-Mangel → GSH-Mangel → oxidative Hämolyse (X-chromosomal)",
        "Vitamin E (fettlöslich, Membranschutz) + Vitamin C (wasserlöslich, regeneriert Vit. E)",
        "Oxidativer Stress: ROS > antioxidative Kapazität → Lipidperoxidation, DNA-Schäden, Proteincarbonylierung",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie das antioxidative Schutzsystem der Zelle. Wie arbeiten enzymatische und nicht-enzymatische Antioxidantien zusammen, und welche klinische Relevanz hat ein G6PD-Mangel?",
        answer:
          "Das antioxidative Schutzsystem der Zelle besteht aus zwei Ebenen: enzymatische und nicht-enzymatische Antioxidantien, die koordiniert gegen reaktive Sauerstoffspezies (ROS) vorgehen. Das primäre ROS, Superoxid (O₂·⁻), wird von der Superoxiddismutase (SOD) durch Disproportionierung in Wasserstoffperoxid (H₂O₂) und O₂ umgewandelt: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. H₂O₂ ist weniger reaktiv, aber noch gefährlich, da es durch die Fenton-Reaktion (Fe²⁺ + H₂O₂ → ·OH + OH⁻ + Fe³⁺) zum extrem reaktiven Hydroxyl-Radikal (·OH) führen kann. Zwei Enzyme bauen H₂O₂ ab: (1) Katalase (peroxisomal): H₂O₂ → H₂O + ½O₂, sehr schnell. (2) Glutathion-Peroxidase (GPx): H₂O₂ + 2GSH → 2H₂O + GSSG, verbraucht dabei reduziertes Glutathion (GSH). Das oxidierte Glutathion (GSSG) wird durch Glutathion-Reduktase auf Kosten von NADPH regeneriert: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. NADPH kommt hauptsächlich aus dem Pentosephosphatweg (PPW), dessen erster Schritt von Glucose-6-Phosphat-Dehydrogenase (G6PD) katalysiert wird. Nicht-enzymatische Antioxidantien ergänzen dieses System: Glutathion (GSH, direkter Radikalfänger), Vitamin E (α-Tocopherol, Membranschutz durch Abfangen von Lipidperoxyl-Radikalen), Vitamin C (Ascorbat, wasserlöslich, regeneriert Vitamin E, direkte Radikalabfangung), Harnsäure (wichtig im Plasma) und β-Carotin (Singlett-Sauerstoff-Quencher). Klinische Relevanz G6PD-Mangel: G6PD-Mangel ist die häufigste Enzymopathie weltweit (ca. 400 Millionen Betroffene), X-chromosomal vererbt. Erythrozyten haben keinen Zellkern und können Enzyme nicht neu synthetisieren — mit G6PD-Mangel können sie kein NADPH produzieren, weshalb GSH nicht regeneriert werden kann. Bei Exposition zu Oxidantien (Malaria-Medikament Primaquin, Favabohnen, Infektionen) kommt es zu unkontrolliertem oxidativem Stress im Erythrozyten, Hämolyse der Membran und hämolytischer Anämie.",
      },
      klinischerBezug:
        "Reaktive Sauerstoffspezies (ROS) spielen eine zentrale Rolle in der Pathogenese häufiger Erkrankungen: Oxidierte LDL-Partikel (durch ROS-Angriff) werden von Makrophagen in der Gefäßwand aufgenommen und bilden Schaumzellen — Ausgangspunkt der Arteriosklerose. Bei ischämischer Reperfusion (z. B. nach Myokardinfarkt) entsteht ein ROS-Burst, der zusätzlichen Gewebeschaden verursacht (Reperfusionsschaden). Pharmakologische Antioxidantien (N-Acetylcystein als GSH-Vorläufer, Allopurinol, Vitamin E) werden klinisch eingesetzt, um oxidativen Stress bei Paracetamol-Vergiftung, Nierenprotektoin und kardiovaskulären Erkrankungen zu reduzieren.",
      selfTest: [
        {
          question: "Welches ROS entsteht durch die Fenton-Reaktion?",
          options: [
            "Superoxid (O₂·⁻)",
            "Wasserstoffperoxid (H₂O₂)",
            "Singlett-Sauerstoff (¹O₂)",
            "Hydroxyl-Radikal (·OH)",
            "Peroxynitrit (ONOO⁻)",
          ],
          correctIndex: 3,
          explanation:
            "Die Fenton-Reaktion lautet: Fe²⁺ + H₂O₂ → Fe³⁺ + OH⁻ + ·OH. Das Hydroxyl-Radikal (·OH) ist das Produkt und gleichzeitig das reaktivste bekannte ROS. Es kann ohne Enzymkatalyse praktisch jedes biologische Molekül oxidieren — Lipide, Proteine, DNA — in diffusionslimitierter Geschwindigkeit (k ≈ 10⁹–10¹⁰ L·mol⁻¹·s⁻¹). Da es keine spezifische Entgiftungsmöglichkeit gibt, ist die Vorbeugung seiner Bildung durch H₂O₂-Abbau (Katalase, GPx) und Eisenbindung (Ferritin, Transferrin) essenziell.",
          hints: [
            "Fenton-Reaktion: Fe²⁺ + H₂O₂ → ? — das Produkt ist das reaktivste ROS",
            "·OH = Hydroxyl-Radikal; nicht zu verwechseln mit OH⁻ (Hydroxid-Ion)",
          ],
          difficulty: 1,
          tags: ["fenton-reaktion", "hydroxyl-radikal", "ros"],
        },
        {
          question: "Welches Enzym katalysiert die Disproportionierung von Superoxid (O₂·⁻)?",
          options: [
            "Katalase",
            "Glutathion-Peroxidase",
            "NADPH-Oxidase",
            "Glutathion-Reduktase",
            "Superoxiddismutase (SOD)",
          ],
          correctIndex: 4,
          explanation:
            "Die Superoxiddismutase (SOD) katalysiert: 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂. Es handelt sich um eine Disproportionierung (Comproportionierung) — ein Teil des Superoxids wird zu H₂O₂ reduziert (OZ von −1/2 auf −1), ein anderer Teil zu O₂ oxidiert (OZ von −1/2 auf 0). Drei SOD-Isoformen existieren beim Menschen: SOD1 (Cu/Zn, zytosolisch, dominant im ZNS), SOD2 (Mn, mitochondrial, besonders wichtig bei hohem O₂·⁻-Fluss), SOD3 (Cu/Zn, sekretiert). SOD1-Mutationen sind mit familiärer ALS assoziiert.",
          hints: [
            "Das Enzym heißt nach seinem Substrat: Superoxid-Dis-mutase",
            "Disproportionierung: O₂·⁻ wird gleichzeitig oxidiert (→O₂) und reduziert (→H₂O₂)",
          ],
          difficulty: 1,
          tags: ["sod", "superoxid-dismutase", "superoxid"],
        },
        {
          question: "Welche Aussage zu Glutathion (GSH) ist korrekt?",
          options: [
            "GSH ist ein Tripeptid (γ-Glu-Cys-Gly), das als Co-Substrat der Glutathion-Peroxidase dient",
            "GSH ist ein fettlösliches Antioxidans, das Membranen schützt",
            "GSH wird durch Katalase regeneriert",
            "GSH enthält Selen im aktiven Zentrum",
            "Oxidiertes GSSG wird durch NADH regeneriert",
          ],
          correctIndex: 0,
          explanation:
            "Glutathion (GSH) ist ein Tripeptid aus γ-Glutaminsäure, Cystein und Glycin (γ-Glu-Cys-Gly). Die ungewöhnliche γ-Peptidbindung schützt es vor normalen Peptidasen. Die freie SH-Gruppe des Cysteins ist der antioxidativ wirksame Teil. Als Co-Substrat der Glutathion-Peroxidase (GPx) wird GSH zu GSSG oxidiert: H₂O₂ + 2GSH → 2H₂O + GSSG. Regeneriert wird GSH durch die Glutathion-Reduktase auf Kosten von NADPH: GSSG + NADPH + H⁺ → 2GSH + NADP⁺. Das Selen befindet sich im aktiven Zentrum der GPx (als Selenocystein), nicht im Glutathion selbst.",
          hints: [
            "GSH ist ein Tripeptid (3 Aminosäuren) mit einer reaktiven SH-Gruppe",
            "GPx braucht GSH als Reduktionsmittel; was entsteht dabei?",
          ],
          difficulty: 2,
          tags: ["glutathion", "gsh", "gsx-peroxidase"],
        },
        {
          question: "Warum führt G6PD-Mangel zu hämolytischer Anämie bei Exposition zu Oxidantien?",
          options: [
            "G6PD produziert direkt Hämoglobin, dessen Mangel zur Hämolyse führt",
            "G6PD-Mangel → weniger NADPH → kein GSH-Regeneration → oxidativer Stress → Erythrozytenmembran-Hämolyse",
            "G6PD ist für die Synthese von Häm erforderlich",
            "G6PD baut Oxidantien direkt ab; ohne G6PD akkumulieren sie",
            "G6PD aktiviert Katalase; ohne G6PD fehlt die H₂O₂-Entgiftung",
          ],
          correctIndex: 1,
          explanation:
            "G6PD (Glucose-6-Phosphat-Dehydrogenase) ist der geschwindigkeitsbestimmende Schritt des Pentosephosphatwegs und die Hauptquelle für NADPH in Erythrozyten. NADPH wird benötigt, um GSSG zu GSH zu regenerieren (durch Glutathion-Reduktase). Ohne ausreichend NADPH sinkt der GSH-Spiegel. GSH ist der wichtigste antioxidative Schutz im Erythrozyten. Bei oxidativem Stress (Primaquin, Favabohnen, Infektionen) können Erythrozyten mit G6PD-Mangel ROS nicht ausreichend neutralisieren → Oxidation von Hämoglobin zu Methämoglobin und Heinz-Körper-Bildung → Hämolyse. G6PD-Mangel ist X-chromosomal und schützt heterozygote Frauen partiell vor schwerer Malaria.",
          hints: [
            "G6PD → NADPH → Glutathion-Reduktase → GSH. Wo ist die Kette unterbrochen?",
            "Erythrozyten haben keinen Kern und können Enzyme nicht neu synthetisieren — was passiert, wenn GSH aufgebraucht ist?",
          ],
          difficulty: 2,
          tags: ["g6pd-mangel", "nadph", "hämolytische-anämie"],
        },
        {
          question: "Welche Aussage zu Vitamin E (α-Tocopherol) ist korrekt?",
          options: [
            "Vitamin E ist wasserlöslich und schützt zytosolische Proteine vor Oxidation",
            "Vitamin E wirkt als Prooxidans bei hohen Dosen",
            "Vitamin E fängt Lipidperoxyl-Radikale in Membranen ab und wird dabei selbst zum Tocopherol-Radikal, das durch Vitamin C regeneriert wird",
            "Vitamin E aktiviert die Katalase und erhöht deren Umsatzrate",
            "Vitamin E wird durch GSH direkt regeneriert ohne Beteiligung von Vitamin C",
          ],
          correctIndex: 2,
          explanation:
            "Vitamin E (α-Tocopherol) ist fettlöslich und lokalisiert in Zellmembranen. Es fängt Lipidperoxyl-Radikale (LOO·) ab, die bei Lipidperoxidation entstehen: LOO· + Vit-E-OH → LOOH + Vit-E-O· (Tocopherol-Radikal). Das resultierende Tocopherol-Radikal ist stabil und wenig reaktiv. Es wird durch Vitamin C (Ascorbat) im wässrigen Milieu regeneriert: Vit-E-O· + Ascorbat → Vit-E-OH + Ascorbyl-Radikal. Das Ascorbyl-Radikal wird durch Glutathion oder NADPH-abhängige Reduktasen regeneriert. Diese Kaskade Vitamin E → Vitamin C → GSH/NADPH verbindet die membrangebundene mit der zytosolischen Antioxidans-Ebene.",
          hints: [
            "Vitamin E = fettlöslich = Membranschutz; es fängt Radikale ab und wird selbst zum Radikal",
            "Wer regeneriert das Tocopherol-Radikal — ein anderes Antioxidans?",
          ],
          difficulty: 2,
          tags: ["vitamin-e", "tocopherol", "fettlösliches-antioxidans"],
        },
        {
          question: "Welche pathologische Folge entsteht primär durch Lipidperoxidation?",
          options: [
            "8-Oxo-Guanin-Bildung in der DNA",
            "Proteincarbonylierung und Enzyminaktivierung",
            "Mitochondriale DNA-Deletionen durch direkte ·OH-Angriffe",
            "Membranschädigung durch Kettenreaktion an ungesättigten Fettsäuren",
            "Histon-Acetylierung und epigenetische Veränderungen",
          ],
          correctIndex: 3,
          explanation:
            "Lipidperoxidation ist eine Kettenreaktion (Initiierung → Propagation → Termination), die bevorzugt mehrfach ungesättigte Fettsäuren (PUFA) in Membranen befällt. Initiierung: ·OH entzieht einer PUFA ein H-Atom → Lipidradikal L·. Propagation: L· + O₂ → LOO· (Peroxyl-Radikal); LOO· + LH → LOOH + L· (Kettenreaktion). Termination: zwei Radikale reagieren. Produkte sind Malondialdehyd (MDA), 4-Hydroxynonenal (4-HNE) und Isoprostane — Biomarker für oxidativen Stress. Die Konsequenz ist strukturelle Membranschädigung, veränderte Permeabilität und Rezeptorfunktion sowie Aktivierung von Apoptose.",
          hints: [
            "Lipidperoxidation = Membranen; welcher Membranbestandteil wird primär angegriffen?",
            "Es handelt sich um eine Kettenreaktion (Radikal → erzeugt neues Radikal)",
          ],
          difficulty: 2,
          tags: ["lipidperoxidation", "membranschaden", "ros-kettenreaktion"],
        },
        {
          question:
            "Welche ROS wirkt als physiologisches Signalmolekül bei nanomolaren Konzentrationen?",
          options: [
            "Hydroxyl-Radikal (·OH)",
            "Superoxid (O₂·⁻)",
            "Singlett-Sauerstoff (¹O₂)",
            "Peroxynitrit (ONOO⁻)",
            "Wasserstoffperoxid (H₂O₂)",
          ],
          correctIndex: 4,
          explanation:
            "H₂O₂ ist das wichtigste ROS-Signalmolekül bei niedrigen (nanomolaren) Konzentrationen. Es ist ausreichend stabil (Halbwertszeit Millisekunden bis Sekunden), membrangängig über Aquaporine, und reagiert selektiv mit hochreaktiven Cysteinresten in Enzymen und Transkriptionsfaktoren. Durch Oxidation von Cys-SH zu Cys-SOH (Sulfensäure) werden Phosphatasen gehemmt (z. B. PTP1B) oder Kinasen aktiviert — Redox-Signaling. Aktivierte Transkriptionsfaktoren: Nrf2 (antioxidative Gene), NF-κB (Inflammation), HIF-1α (Hypoxieantwort). Das Hydroxyl-Radikal ist zu reaktiv für selektives Signaling; O₂·⁻ ist geladen und schlecht membrangängig.",
          hints: [
            "Welches ROS ist stabil genug für Signalwege (nicht zu reaktiv), aber reaktiv genug für Proteinmodifikation?",
            "H₂O₂ ist membrangängig und oxidiert selektiv reaktive Cysteine in Signalproteinen",
          ],
          difficulty: 3,
          tags: ["h2o2-signaling", "redox-signaling", "nrf2"],
        },
        {
          question: "Welche Aussage zum oxidativen Burst von Makrophagen ist korrekt?",
          options: [
            "NADPH-Oxidase (NOX2) produziert gezielt O₂·⁻ im Phagosom zur Pathogenabwehr",
            "Makrophagen produzieren ROS versehentlich als Nebenprodukt der Phagozytose",
            "Makrophagen nutzen Katalase, um H₂O₂ zur Abtötung von Bakterien einzusetzen",
            "Der oxidative Burst produziert NO als einziges antimikrobielles ROS",
            "Der oxidative Burst aktiviert SOD, um die ROS-Produktion zu verstärken",
          ],
          correctIndex: 0,
          explanation:
            "Die NADPH-Oxidase (NOX2, auch Phagozyt-Oxidase) ist ein Multiprotein-Enzymkomplex, der bei Aktivierung von Makrophagen und Neutrophilen gezielt O₂·⁻ ins Phagosom produziert: 2O₂ + NADPH → 2O₂·⁻ + NADP⁺ + H⁺. Dieses O₂·⁻ wird zu H₂O₂ dismutiert, aus dem Myeloperoxidase (MPO) Hypochlorit (HOCl, 'Bleiche') bildet: H₂O₂ + Cl⁻ → HOCl + OH⁻. HOCl ist hochwirksam gegen Bakterien. Chronische Granulomatose (CGD) ist eine seltene Erkrankung mit NOX2-Defekt — Patienten leiden an schweren, rezidivierenden Infektionen mit katalasepositiven Bakterien (die ihr eigenes H₂O₂ abbauen).",
          hints: [
            "NADPH-Oxidase = NOX2, produziert gezielt Superoxid (O₂·⁻) zur Pathogenabwehr",
            "Der oxidative Burst ist eine GEWOLLTE, kontrollierte ROS-Produktion — kein Versehen",
          ],
          difficulty: 2,
          tags: ["oxidativer-burst", "nadph-oxidase", "makrophagen"],
        },
      ],
    },
  ],
};
