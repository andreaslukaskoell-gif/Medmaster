import type { Kapitel } from "../../types";

/**
 * Archived UKs from kap1-atombau-periodensystem.ts
 * - ch-1-03: "Radioaktivität und Kernreaktionen" — PHYSICS scope, not Chemistry
 * - ch-2-02: "Löslichkeit, Konzentration und Osmose" — NOT in Chemie Stichwortliste
 */
export const archivedChemAtomUKs: Kapitel["unterkapitel"] = [
  // ─────────────────────────────────────────────────────────────────
  // UK ch-1-03: Radioaktivität und Kernreaktionen
  // ─────────────────────────────────────────────────────────────────
  {
    id: "ch-1-03",
    title: "Radioaktivität und Kernreaktionen",
    stichworte: [
      "Radioaktivität",
      "Alpha-Zerfall",
      "Beta-Zerfall",
      "Gamma-Strahlung",
      "Halbwertszeit",
      "Zerfallsgesetz",
      "PET",
      "Strahlenschutz",
      "Sievert",
      "Nuklearmedizin",
      "Radon",
    ],
    content: `Radioaktive Kerne zerfallen spontan und setzen dabei Energie frei — als Teilchenstrahlung oder elektromagnetische Wellen. Diese Strahlung ist sowohl Diagnosewerkzeug als auch Krebsrisiko.

## Arten der Strahlung

{{DIAGRAM:radiation-penetration}}

### Alpha-Strahlung
- Emission eines **Alphateilchens** (He-4-Kern: 2 Protonen + 2 Neutronen)
- Umwandlung: Z sinkt um 2, A sinkt um 4
- Beispiel: U-238 wird zu Th-234 + He-4
- Eigenschaften: geringe Reichweite (wenige cm in Luft), stoppt bereits durch ein Blatt Papier oder die Haut; hohes Ionisierungsvermögen
- Biologisch: gefährlich bei Inkorporation (Inhalation von Radon führt zu Lungenkrebs)

### Beta-minus-Strahlung
- Emission eines **Elektrons** und eines **Antineutrinos** (nahezu masseloses Elementarteilchen) durch Umwandlung eines Neutrons in ein Proton im Kern
- Kernreaktion: n wird zu p + e⁻ + Antineutrino; Z erhöht sich um 1, A bleibt gleich
- Beispiel: C-14 wird zu N-14 + e- + Antineutrino (Basis der Radiokohlenstoffdatierung)
- Reichweite: einige Meter in Luft, stoppt durch Aluminium (mm-Bereich)

### Beta-plus-Strahlung (Positronenemission)
- Emission eines **Positrons** (e+, Antiteilchen des Elektrons) und eines **Neutrinos**
- Kernreaktion: p wird zu n + e+ + Neutrino; Z sinkt um 1, A bleibt gleich
- Positron annihiliert sofort mit einem Elektron und erzeugt **zwei Gammaquanten** (je 511 keV, 180 Grad entgegengesetzt)
- Medizinisch: **PET** (Positronen-Emissionstomographie) nutzt diese Annihilationsstrahlung zur Bildgebung
- Beispiel: F-18 wird zu O-18 + e+ + Neutrino (F-18-FDG-PET in der Onkologie und Neurologie)

### Gamma-Strahlung
- Hochenergetische **elektromagnetische Strahlung** (kein Teilchen!)
- Entsteht nach Alpha- oder Beta-Zerfall, wenn der Tochterkern noch in einem angeregten Zustand ist
- Z und A bleiben unverändert (kein Kernzerfall, nur Energieabgabe)
- Sehr hohe Reichweite (viele Meter in Luft), braucht Blei oder mehrere cm Beton zur Abschirmung
- Metastabile Kerne (angeregte Kerne mit verzögertem Zerfall): Tc-99m wird zu Tc-99 + Gamma (Knochenszintigraphie (nuklearmedizinische Bildgebung), Schilddrüsenszintigraphie)

## Halbwertszeit und Zerfallsgesetz

Die **Halbwertszeit T-halb** ist die Zeit, nach der genau die Hälfte aller ursprünglich vorhandenen Kerne zerfallen ist. Sie ist charakteristisch für jedes Nuklid und temperaturunabhängig (kein chemischer Prozess!).

**Zerfallsgesetz:**
N(t) = N0 mal (1/2) hoch (t / T-halb) = N0 mal e hoch (-lambda mal t)

Dabei ist lambda = ln2 / T-halb ungefähr 0,693 / T-halb die **Zerfallskonstante** (pro Sekunde).

> **Merke:** Nach n Halbwertszeiten verbleibt noch N0/2 hoch n. Nach 1 HWZ: 50 %; nach 2: 25 %; nach 3: 12,5 %; nach 10: ca. 0,1 %.

**Aktivität A** = lambda mal N(t) [Einheit: Becquerel, Bq = 1 Zerfall/s; älter: Curie, Ci = 3,7 mal 10 hoch 10 Bq]

Medizinisch relevante Halbwertszeiten:

| Nuklid | T-halb | Anwendung |
|--------|--------|-----------|
| Tc-99m | 6 h | Szintigraphie (Knochen, Schilddrüse) |
| F-18 | 110 min | PET (FDG, Onkologie) |
| I-131 | 8 d | Radiojodtherapie (Schilddrüse) |
| Co-60 | 5,27 a | Gamma Knife (Strahlentherapie) |
| C-14 | 5730 a | Radiokohlenstoffdatierung |
| U-238 | 4,5 mal 10 hoch 9 a | Geologische Datierung |

**Beispielrechnung:** Ein Patient erhält Tc-99m (T-halb = 6 h). Wie viel Aktivität verbleibt nach 24 h? n = 24/6 = 4 Halbwertszeiten. Restaktivität = 1/2 hoch 4 = 1/16 = 6,25 % der Ausgangsdosis.

> **Prüfungstipp:** Halbwertszeit-Aufgaben sind MedAT-Klassiker. Strategie: t durch T-halb teilen = Anzahl n der Halbwertszeiten. Dann Restmenge = (1/2)^n. Merke die Reihe: 50 % → 25 % → 12,5 % → 6,25 % → 3,125 %.

## Kernspaltung und Kernfusion

**Kernspaltung:** Schwere Kerne (z. B. U-235) werden durch Neutronenbeschuss in zwei leichtere Kerne gespalten. Freisetzung von 2-3 Neutronen + ca. 200 MeV Energie pro Spaltung. Kettenreaktion möglich: Kernreaktor (kontrolliert) oder Atombombe (unkontrolliert). Medizinisch relevant: Spaltprodukte wie I-131 und Sr-90 bei Reaktorunfällen.

**Kernfusion:** Leichte Kerne (z. B. H-2 + H-3 wird zu He-4 + n) verschmelzen unter extremen Bedingungen (über 10 hoch 7 K). Energiequelle der Sonne. Noch nicht als kontrollierte Energiequelle realisiert.

## Strahlenschutz

Die drei Grundprinzipien des Strahlenschutzes:
1. **Abstand**: Intensität nimmt mit 1/r² ab (Abstandsgesetz) – doppelter Abstand ergibt 1/4 der Dosis
2. **Zeit**: Exposition so kurz wie möglich halten (ALARA-Prinzip: As Low As Reasonably Achievable)
3. **Abschirmung**: Material je nach Strahlungsart (Papier für Alpha; Al für Beta; Pb/Beton für Gamma/Neutronen)

Internationale Einheiten:
- **Gray (Gy)**: absorbierte Energiedosis = J/kg (physikalische Dosis)
- **Sievert (Sv)**: effektive Dosis = Gy mal Strahlungs-Wichtungsfaktor (biologische Dosis; für Alpha: 20; für Beta/Gamma: 1)

Natürliche Strahlenbelastung in Österreich: ca. 2,5 mSv/Jahr (Radon, kosmische Strahlung, Nahrung). Ein Thorax-Röntgen: ca. 0,02 mSv; CT-Abdomen: ca. 10 mSv.


## Klinische Anwendungen und Gefahren

- **Diagnostisch**: Szintigraphie (Tc-99m), PET (F-18-FDG), SPECT (Einzelphotonen-Emissionstomographie), Röntgen/CT (X-Strahlen, kein Kernzerfall)
- **Therapeutisch**: I-131-Therapie (Schilddrüsenkarzinom, M. Basedow), Y-90-Mikrosphären (hepatozelluläres Karzinom), Ra-223-Dichlorid (Xofigo, Knochenmetastasen), externe Strahlentherapie (Linearbeschleuniger, Gamma Knife)
- **Gefahren**: Radon-222 (Alphazerfall, Inhalation führt zu zweitgrößter Ursache von Lungenkrebs nach Rauchen in Europa); ionisierende Strahlung führt zu DNA-Doppelstrangbrüchen und Krebsrisiko (stochastisch, kein Schwellenwert nach LNT-Modell (Linear-No-Threshold, lineares Modell ohne Schwellendosis))
- **Schutzmaßnahme nach Atomunfall**: Kaliumiodid (KI) sättigt die Schilddrüse mit stabilem Iod und verhindert Einbau von radioaktivem I-131. Besonders wichtig für Kinder (höherer Jodumsatz, längere Restlebenserwartung)`,

    lernziele: [
      "Die drei Hauptarten der radioaktiven Strahlung (α, β, γ) hinsichtlich Natur, Reichweite, Abschirmung und Veränderung von Z und A beschreiben.",
      "Das Zerfallsgesetz N(t) = N₀ × (½)^(t/T½) anwenden und Halbwertszeit-Berechnungen durchführen.",
      "Den Unterschied zwischen β⁻- und β⁺-Zerfall erläutern und das Prinzip der PET erklären.",
      "Medizinisch relevante Radionuklide (⁹⁹ᵐTc, ¹⁸F, ¹³¹I, ¹⁴C) und ihre Anwendungen benennen.",
      "Die drei Strahlenschutzprinzipien (Abstand, Zeit, Abschirmung) und die Einheiten Gray/Sievert kennen.",
    ],

    sections: [
      {
        heading: "Alpha-, Beta- und Gammastrahlung – Natur und Eigenschaften",
        text: "α-Strahlung: Heliumkerne (Z−2, A−4), sehr kurze Reichweite, stoppt bei Papier, hohe Ionisierung – gefährlich nur bei Inkorporation. β⁻-Strahlung: Elektronen durch n→p-Umwandlung (Z+1, A gleich), mittlere Reichweite, stoppt bei Al-Folie. β⁺-Strahlung: Positronen durch p→n (Z−1, A gleich) → Annihilation mit e⁻ → 2×511-keV-Quanten → Basis der PET. γ-Strahlung: elektromagnetisch, kein Kernteilchen, sehr hohe Reichweite, braucht Pb-Abschirmung; Z und A unverändert.",
        merksatz:
          "α: Papier stoppt es. β: Aluminium stoppt es. γ: Blei/Beton stoppt es. PET = β⁺ + Annihilation → 2×γ (511 keV).",
      },
      {
        heading: "Halbwertszeit und Zerfallsgesetz",
        text: "N(t) = N₀ × (½)^(t/T½). Nach 1 Halbwertszeit: 50 % übrig; nach 2: 25 %; nach 10: ≈0,1 %. Aktivität A = λN; λ = ln2/T½. Für Diagnostik: kurze T½ (Minuten bis Tage), für Therapie: T½ passend zur Tumorbehandlung. ⁹⁹ᵐTc (6 h) ideal für Szintigraphie; ¹³¹I (8 d) für Schilddrüsentherapie; ¹⁴C (5730 a) für Archäologie.",
        merksatz:
          "Nach n Halbwertszeiten: Restmenge = N₀/2ⁿ. Nach 10 HWZ: < 0,1 % des Ausgangswerts.",
      },
      {
        heading: "Klinische Nuklearmedizin und Strahlenschutz",
        text: "PET mit ¹⁸F-FDG: Positronenemitter → Annihilationsstrahlung → 3D-Bild des Glukosestoffwechsels (Tumordetektion, Hirnfunktion). ¹³¹I-Therapie: β⁻-Strahler wird von Schilddrüse aufgenommen → lokale Zerstörung überaktiven Gewebes oder Karzinomzellen. Strahlenschutz: Abstand (1/r²), kurze Expositionszeit, geeignete Abschirmung (materialabhängig). Bei Atomunfall Kaliumiodid zur Blockierung der Schilddrüse gegen ¹³¹I.",
        merksatz:
          "KI-Prophylaxe nach Atomunfall: Schilddrüse mit stabilem Iod sättigen → kein radioaktives ¹³¹I eingebaut.",
      },
    ],

    merksätze: [
      "α-Zerfall: Z−2, A−4; Teilchen = ⁴He; Reichweite = cm in Luft / Papier.",
      "β⁻-Zerfall: n → p + e⁻ + ν̄ₑ; Z+1, A gleich; Reichweite = Al-Folie (mm).",
      "β⁺-Zerfall: p → n + e⁺ + νₑ; Z−1, A gleich; Positron + Elektron → 2×γ (511 keV, 180°) = PET.",
      "γ-Strahlung: elektromagnetisch, kein Teilchen; Z und A gleich; Reichweite = Meter; Abschirmung: Pb.",
      "Halbwertszeit T½: Zeit bis 50 % der Kerne zerfallen; N(t) = N₀ × (½)^(t/T½).",
      "⁹⁹ᵐTc (6 h): Szintigraphie | ¹⁸F (110 min): PET | ¹³¹I (8 d): Schilddrüsentherapie | ¹⁴C (5730 a): Datierung.",
      "Strahlenschutz: Abstand² (Intensität ∝ 1/r²) + Zeit minimieren + Material abschirmen.",
      "Einheiten: Gy (Gray) = absorbierte Dosis [J/kg]; Sv (Sievert) = biologisch gewichtete Dosis.",
      "α-Strahlung: Wichtungsfaktor 20 → 1 Gy α entspricht 20 Sv biologischer Wirkung.",
      "Radon-222: α-Strahler, natürlich in Böden, zweitgrößte Ursache von Lungenkrebs in Europa.",
    ],

    diagram: "radiation-penetration",
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Erläutern Sie den Unterschied zwischen β⁻-Zerfall und β⁺-Zerfall. Erklären Sie, wie das Prinzip des β⁺-Zerfalls in der Positronen-Emissions-Tomographie (PET) medizinisch genutzt wird.",
      answer:
        "Beim β⁻-Zerfall wandelt sich im Kern ein Neutron in ein Proton um: n → p + e⁻ + ν̄ₑ. Es wird ein Elektron (β⁻-Teilchen) und ein Antineutrino emittiert. Die Ordnungszahl Z steigt um 1, die Massenzahl A bleibt unverändert. Der Tochterkern ist ein Element mit Z+1. Beispiel: ¹⁴C → ¹⁴N. Beim β⁺-Zerfall (Positronenemission) wandelt sich ein Proton in ein Neutron um: p → n + e⁺ + νₑ. Es wird ein Positron (e⁺, Antiteilchen des Elektrons) und ein Neutrino emittiert. Z sinkt um 1, A bleibt gleich. Beispiel: ¹⁸F → ¹⁸O. Das Positron ist in Materie extrem kurzlebig: Es annihiliert sofort mit einem Elektron aus der Umgebung. Bei dieser Annihilation werden zwei Gammaquanten mit je 511 keV und exakt 180° Winkelabstand emittiert. Genau dieses Prinzip nutzt die PET: Der Patient erhält einen β⁺-Emitter (meistens ¹⁸F-markierte Fluordesoxyglukose, FDG). FDG wird wie normale Glukose von metabolisch aktiven Zellen aufgenommen, aber nicht weiter abgebaut → Anreicherung in Tumoren, Entzündungsherden, aktivem Hirngewebe. Die Koinzidenz-Detektion der beiden 511-keV-Quanten durch gegenüberliegende Detektoren erlaubt eine präzise dreidimensionale Rekonstruktion des Metabolismus. ¹⁸F hat eine Halbwertszeit von 110 Minuten – lang genug für Produktion und Injektion, kurz genug für akzeptable Strahlenexposition.",
    },

    klinischerBezug:
      "PET (¹⁸F-FDG), Szintigraphie (⁹⁹ᵐTc), Radiojodtherapie (¹³¹I) und Radon-Prävention sind klinische Kernthemen der Radioaktivität.",

    selfTest: [
      {
        question: "Was verändert sich beim Alpha-Zerfall eines Atomkerns?",
        options: [
          "Z sinkt um 1, A bleibt gleich.",
          "Z bleibt gleich, A sinkt um 4.",
          "Z bleibt gleich, A steigt um 2.",
          "Z steigt um 2, A steigt um 4.",
          "Z sinkt um 2, A sinkt um 4.",
        ],
        correctIndex: 4,
        explanation:
          "Beim Alpha-Zerfall wird ein Alphateilchen (⁴₂He) emittiert, das aus 2 Protonen und 2 Neutronen besteht. Daher sinkt Z um 2 und A um 4. Beispiel: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Das Alphateilchen ist identisch mit einem Helium-4-Kern. Die Gleichung muss bezüglich Z (Ladungserhaltung) und A (Massenerhaltung) auf beiden Seiten ausgeglichen sein.",
        hints: [
          "Alphateilchen = ⁴He = 2 Protonen + 2 Neutronen. Was verliert der Mutterkern?",
          "Ladungs- und Massenerhaltung: Prüfen Sie, ob Ihre Antwort beide Seiten der Gleichung ausgleicht.",
        ],
        tags: ["alpha-zerfall", "radioaktivität", "kernreaktion"],
        difficulty: 1,
      },
      {
        question:
          "Nach 3 Halbwertszeiten ist noch welcher Bruchteil der ursprünglichen Aktivität vorhanden?",
        options: ["1/8", "1/4", "1/6", "1/3", "1/9"],
        correctIndex: 0,
        explanation:
          "Nach jeder Halbwertszeit halbiert sich die Restmenge: N(t) = N₀ × (½)ⁿ, wobei n = Anzahl der Halbwertszeiten. Nach 1 HWZ: ½; nach 2 HWZ: ¼; nach 3 HWZ: ⅛ = 12,5 %. Allgemein: nach n HWZ bleibt 1/2ⁿ übrig. Dies ist wichtig für die Abschätzung der Strahlenbelastung in der Nuklearmedizin. Nach 10 HWZ verbleiben nur noch ca. 0,1 % der ursprünglichen Aktivität.",
        hints: [
          "Jede Halbwertszeit halbiert den Restbestand. Wenden Sie das dreimal an.",
          "½ × ½ × ½ = ?",
        ],
        tags: ["halbwertszeit", "zerfallsgesetz", "radioaktivität"],
        difficulty: 2,
      },
      {
        question: "Welche Aussage zur Annihilation bei der PET ist korrekt?",
        options: [
          "Ein Positron und ein Neutron bilden zwei Alphastrahlen.",
          "Ein Positron und ein Elektron annihilieren und erzeugen zwei 511-keV-Gammaquanten im 180°-Winkel.",
          "Zwei Elektronen vernichten sich gegenseitig und bilden ein Gammaquant.",
          "Das Positron wird direkt vom PET-Scanner detektiert.",
          "Annihilation erzeugt ein einzelnes hochenergetisches Betaquant.",
        ],
        correctIndex: 1,
        explanation:
          "Bei der Positronen-Elektron-Annihilation treffen ein Positron (e⁺) und ein Elektron (e⁻) aufeinander. Ihre Gesamtmasse (2 × 0,511 MeV/c²) wird vollständig in elektromagnetische Energie umgewandelt: 2 Gammaquanten mit je 511 keV. Aufgrund der Impulserhaltung fliegen die Photonen exakt in entgegengesetzter Richtung (180°) auseinander. PET-Scanner nutzen Koinzidenzdetektion: Beide Quanten werden zeitgleich von gegenüberliegenden Detektoren registriert → exakte Lokalisierung des Annihilationsereignisses im 3D-Raum. Ohne die 180°-Koinzidenz wäre keine präzise Bildgebung möglich.",
        hints: [
          "Anti-Teilchen trifft auf Teilchen → vollständige Umwandlung in Energie (E = mc²).",
          "Impulserhaltung + zwei identische Photonen → 180°-Winkel zwischen den beiden Gammaquanten.",
        ],
        tags: ["annihilation", "pet", "gammastrahlung"],
        difficulty: 2,
      },
      {
        question: "Welches Material ist zur Abschirmung von Gammastrahlung geeignet?",
        options: [
          "Ein Blatt Papier",
          "Eine Aluminiumfolie (wenige mm)",
          "Dickes Blei oder Betonwände",
          "Kleidung aus Baumwolle",
          "Wasser in Glasflaschen",
        ],
        correctIndex: 2,
        explanation:
          "Gammastrahlung ist hochenergetische elektromagnetische Strahlung mit sehr hoher Durchdringungskraft. Zur effektiven Abschirmung werden dichte, schwere Materialien benötigt, vor allem Blei (Pb, hohe Ordnungszahl → viele Elektronen für Photoeffekt/Comptonstreuung) oder dicke Betonwände. Papier stoppt nur α-Strahlung. Aluminium (mm-Bereich) stoppt β-Strahlung. Kleidung bietet keinen Schutz gegen γ. Wasser kann in großen Mengen Gammastrahlung abschwächen (Schwimmbecken in Kernkraftwerken), aber Glasflaschen sind ungeeignet.",
        hints: [
          "Merkreihe: α → Papier; β → Aluminium; γ → Blei/Beton.",
          "Gamma ist elektromagnetisch und sehr durchdringend – welches Material ist am dichtesten?",
        ],
        tags: ["gammastrahlung", "strahlenschutz", "abschirmung"],
        difficulty: 1,
      },
      {
        question:
          "¹³¹I wird zur Therapie von Schilddrüsenerkrankungen eingesetzt. Welche Eigenschaft macht es dafür geeignet?",
        options: [
          "Es ist ein Alphastrahler mit langer Halbwertszeit und hoher Reichweite.",
          "Es hat eine Halbwertszeit von 6 Stunden und ist damit ideal für Therapie.",
          "Es ist ein γ-Strahler, der von außen durch die Haut wirkt.",
          "Es hat eine Halbwertszeit von 8 Tagen, ist ein β⁻-Strahler und wird von der Schilddrüse spezifisch aufgenommen.",
          "Es ist chemisch inert und wird gleichmäßig im ganzen Körper verteilt.",
        ],
        correctIndex: 3,
        explanation:
          "¹³¹I vereint mehrere ideale Eigenschaften für die Radiojodtherapie: (1) Organspezifische Aufnahme: Die Schilddrüse ist das einzige Organ, das Iod aktiv aufnimmt (für die Schilddrüsenhormonsynthese T₃/T₄). ¹³¹I wird wie normales Iod aufgenommen → gezielter Transport zum Zielgewebe. (2) β⁻-Strahlung: Die emittierten Elektronen haben eine sehr kurze Reichweite (mm) im Gewebe → lokale Strahlenwirkung nur in der Schilddrüse, wenig systemische Belastung. (3) T½ = 8 Tage: Genug für therapeutische Wirkung, danach rasche Elimination. Anwendung: M. Basedow, Schilddrüsenkarzinom-Ablation nach Thyreoidektomie.",
        hints: [
          "Warum nicht ein Alpha-Strahler? Alphastrahlen sind sehr kurz, würden aber trotzdem lokal stark schädigen – und der β-Strahler hat denselben lokalen Effekt mit kontrollierbarer Reichweite.",
          "Was nimmt die Schilddrüse als einziges Organ spezifisch auf? (Denkansatz Thyroxin-Synthese)",
        ],
        tags: ["radiojodtherapie", "schilddrüse", "beta-zerfall", "klinisch"],
        difficulty: 2,
      },
      {
        question:
          "Welche Maßnahme schützt die Schilddrüse nach einem Kernkraftwerksunfall am wirksamsten vor radioaktivem Iod?",
        options: [
          "Evakuierung allein reicht aus; Jodpillen sind unwirksam.",
          "Trinken von großen Mengen Wasser zur Verdünnung.",
          "Einnahme von Natriumchlorid in großen Mengen.",
          "Externe Abschirmung mit Bleiwesten.",
          "Gabe von Kaliumiodid (KI), um die Schilddrüse mit stabilem Iod zu sättigen.",
        ],
        correctIndex: 4,
        explanation:
          "Nach einem Kernkraftwerksunfall (z. B. Tschernobyl 1986, Fukushima 2011) kann radioaktives ¹³¹I freigesetzt werden. Die Schilddrüse nimmt es genauso auf wie stabiles Iod. Präventionsmaßnahme: Einnahme von Kaliumiodid (KI) in ausreichender Dosierung sättigt die Schilddrüse mit stabilem (nicht-radioaktivem) ¹²⁷I → kein Platz mehr für ¹³¹I-Aufnahme → drastische Reduktion der Schilddrüsenstrahlenbelastung. Diese Maßnahme muss zeitnah (vor oder kurz nach Exposition) erfolgen. Sie schützt nur die Schilddrüse, nicht den restlichen Körper. Besonders wichtig für Kinder (höhere Jodumsatz-Rate und längere Restlebenserwartung = höheres Krebsrisiko).",
        hints: [
          'Was passiert, wenn die Schilddrüse bereits mit stabilem Iod "voll" ist? Kann sie dann noch radioaktives Iod aufnehmen?',
          "Kompetitive Hemmung: Stabiles Iod konkurriert mit ¹³¹I um die gleichen Transporter in der Schilddrüse.",
        ],
        tags: ["strahlenschutz", "kaliumiodid", "schilddrüse", "klinisch"],
        difficulty: 2,
      },
      {
        question:
          "Welcher Strahlungstyp hat das höchste biologische Schädigungspotenzial pro absorbierter Energiedosis (Gray)?",
        options: [
          "Alphastrahlung (α)",
          "Betastrahlung (β)",
          "Röntgenstrahlung",
          "Gammastrahlung (γ)",
          "Alle Strahlungstypen haben dasselbe biologische Schädigungspotenzial.",
        ],
        correctIndex: 0,
        explanation:
          "Die biologische Wirksamkeit einer Strahlung wird durch den Strahlungs-Wichtungsfaktor (früher: relative biologische Wirksamkeit, RBW) beschrieben. Für α-Strahlung beträgt er 20, für β- und γ-Strahlung jeweils 1. Das bedeutet: 1 Gray α-Strahlung entspricht 20 Sievert biologischer Dosis – 20-fach höhere Schädigung als dieselbe Energiemenge als γ-Strahlung. Der Grund: Alphateilchen sind schwer und langsam → hohe lineare Energieübertragung (LET) → dichte Ionisierung entlang kurzer Bahnen → schwer zu reparierende DNA-Doppelstrangbrüche. Obwohl Alpha-Strahlung von außen harmlos ist (stoppt an der Haut), ist sie intern (Inhalation, Ingestion) besonders gefährlich.",
        hints: [
          "Einheit Sievert (Sv) = Gray (Gy) × Wichtungsfaktor. Welche Strahlung hat den höchsten Wichtungsfaktor?",
          "Alpha-Teilchen sind groß und schwer → viele Kollisionen auf kurzer Strecke → hohe Energiedichte → maximale DNA-Schädigung.",
        ],
        tags: ["biologische-wirksamkeit", "sievert", "alpha-strahlung"],
        difficulty: 3,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UK 2 — Löslichkeit, Konzentration und Osmose
  // ─────────────────────────────────────────────────────────────
  {
    id: "ch-2-02",
    title: "Löslichkeit, Konzentration und Osmose",
    stichworte: [
      "Löslichkeit",
      "Osmose",
      "Osmolarität",
      "Isotonisch",
      "Hypotonisch",
      "Hypertonisch",
      "Onkotischer Druck",
      "Albumin",
      "Van-t-Hoff-Faktor",
      "Hämolyse",
      "Infusion",
    ],
    content: `Ob ein Wirkstoff resorbiert wird, hängt davon ab, ob er sich im Wasser oder in Fett löst — und ob die Osmolarität einer Infusion stimmt, entscheidet über Hämolyse oder Heilung.

## Löslichkeit und das Prinzip "Similia similibus solvuntur"

**Polare Lösungsmittel** (z. B. Wasser, ε = 80 (Dielektrizitätskonstante, Maß für elektrische Abschirmfähigkeit)) lösen **polare und ionische** Substanzen: Wasser hydratisiert Ionen durch Ausbildung von Hydrathüllen (Ion-Dipol-Wechselwirkung) und bildet H-Brücken mit polaren Molekülen (OH, NH, C=O). Die Hydratationsenthalpie kompensiert die Gitterenergie.

> **Merke:** Ein Salz löst sich in Wasser, wenn die Hydratationsenthalpie (Energie beim Umhüllen der Ionen mit Wasser) die Gitterenergie (Energie zum Aufbrechen des Ionengitters) übersteigt oder annähernd erreicht.

{{IMAGE}}

**Unpolare Lösungsmittel** (Hexan, Dichlormethan) lösen **unpolare** Substanzen (Lipide, Steroide, Wachse) über London-Wechselwirkungen. Die Dielektrizitätskonstante ε ist niedrig (Hexan: ε = 1,9), was die Abschwächung von Coulomb-Kräften zwischen Ionen verhindert — ionische Verbindungen bleiben unlöslich.

**Amphiphile Moleküle** (Detergenzien, Phospholipide, Gallensäuren) besitzen einen polaren Kopf und einen unpolaren Schwanz → Mizellenbildung in Wasser: Schwänze innen, Köpfe außen. Kritische Mizellkonzentration (CMC): Mindestkonzentration für Mizellenbildung. Gallensäuren im Darm bilden Mizellen, die Fettverdauungsprodukte (Monoglyzeride, Fettsäuren) solubilisieren und zur Resorption an die Enterozytenmembran (Membran der Dünndarmepithelzellen) transportieren.

## Löslichkeitsprodukt Ksp

Für schwerlösliche Salze gilt das **Löslichkeitsprodukt** Ksp (Gleichgewichtskonstante der Sättigung): Ksp = [Kation]^n × [Anion]^m (bei Sättigung).
- BaSO₄: Ksp ≈ 1,1 × 10⁻¹⁰ → extrem schwerlöslich → sicheres GI-Kontrastmittel
- CaSO₄: Ksp ≈ 4,9 × 10⁻⁵ → leicht löslich
- Ca-Oxalat: Ksp ≈ 2,3 × 10⁻⁹ → Nierensteinbildung bei Hyperoxalurie (erhöhte Oxalsäure-Ausscheidung im Urin)

Wenn das Ionenprodukt Q > Ksp → Ausfällung (Kristallisation). Wenn Q < Ksp → Lösung noch nicht gesättigt.

**Umrechnung Molarität ↔ g/L:** c [mol/L] × M [g/mol] = β [g/L]
Beispiel: 0,9 % NaCl (m/v) = 9 g NaCl / L; M(NaCl) = 58,44 g/mol → c = 9/58,44 ≈ 0,154 mol/L


## Osmose und osmotischer Druck

**Osmose** ist die Bewegung von Lösungsmittelmolekülen (Wasser) durch eine **semipermeable Membran** (durchlässig für Wasser, nicht für gelöste Teilchen) vom Bereich **niedrigerer** in den Bereich **höherer** Teilchenkonzentration (= vom niedrigen osmotischen Druck zum hohen osmotischen Druck).

**Osmotischer Druck (π):** Nach van't Hoff: π = i · c · R · T
- i = van't-Hoff-Faktor (Anzahl der Teilchen nach Dissoziation; NaCl: i = 2; Glukose: i = 1)
- c = Molarität [mol/L]
- R = 8,314 J/(mol·K), T = Temperatur in Kelvin

**Osmolarität** [mOsmol/L] = Summe aller osmotisch aktiven Teilchen pro Liter.

Blutplasma-Osmolarität: **285–295 mOsmol/L** (Normbereich, geregelt durch ADH (antidiuretisches Hormon) und Durst)

Beispielrechnung für 0,154 mol/L NaCl: Osmolarität = 0,154 × 2 × 1000 = 308 mOsmol/L (≈ isoosmolar mit Blut)
Für 5 % Glukose: 50 g/L ÷ 180 g/mol = 0,278 mol/L × 1 = 278 mOsmol/L (≈ isoosmolar)

## Klinisch: Isoton, hypoton, hyperton

- **Isotonische Lösung** (≈ 285–295 mOsmol/L): Gleichgewicht → keine Volumenänderung der Erythrozyten. Beispiele: 0,9 % NaCl, 5 % Glukose
- **Hypotone Lösung** (<270 mOsmol/L): Wasser strömt in Zellen → **Hämolyse** (Erythrozyten platzen bei starker Hypotonie)
- **Hypertone Lösung** (>310 mOsmol/L): Wasser strömt aus Zellen → **Hämaggregation/Crenation** (Erythrozyten schrumpfen)

**Kolloidosmotischer (onkotischer) Druck:** Plasmaproteine (v. a. **Albumin**) können die Kapillarmembran nicht passieren → halten Wasser im Gefäßsystem. Albumin (35–50 g/L) generiert ca. 25 mmHg onkotischen Druck. Bei **Hypoalbuminämie** (Leberzirrhose, nephrotisches Syndrom, Malnutrition) sinkt der onkotische Druck → Wasseraustritt ins Interstitium → **Ödembildung**.

## Kolligative Eigenschaften

Eigenschaften, die nur von der **Teilchenzahl**, nicht von der Art des Gelösten abhängen:
1. **Siedepunktserhöhung:** ΔTb = Kb · m · i (Kb für Wasser = 0,512 K·kg/mol)
2. **Gefrierpunktserniedrigung:** ΔTf = Kf · m · i (Kf für Wasser = 1,853 K·kg/mol; Grundlage für Osmolalitätsmessung (Osmolarität bezogen auf Lösungsmittelmasse))
3. **Dampfdruckerniedrigung** (Raoult)
4. **Osmose**

Klinisch wird die **Serum-Osmolalität** aus dem Gefrierpunkt gemessen; berechnete Osmolalität: 2×[Na⁺] + [Glukose]/18 + [Harnstoff]/6 (Einheiten in mg/dL) bzw. vereinfacht 2×[Na] + [Glukose] + [Harnstoff] (Einheiten in mmol/L).

> **Prüfungstipp:** Osmolaritätsaufgaben erfordern immer die Dissoziation zu berücksichtigen: NaCl → 2 Teilchen (i=2), CaCl₂ → 3 Teilchen (i=3), Glukose → 1 Teilchen (i=1). Vergiss nicht: Osmolarität = c × i × 1000. Hypotone Lösung → Hämolyse (Zellen platzen), hypertone → Crenation (Zellen schrumpfen).`,

    lernziele: [
      'Das Löslichkeitsprinzip "Similia similibus solvuntur" auf polare, unpolare und amphiphile Substanzen anwenden können.',
      "Die verschiedenen Konzentrationsangaben (Molarität, Massenkonzentration, %) definieren und ineinander umrechnen können.",
      "Osmose, osmotischen Druck und Osmolarität erklären und mit dem van't-Hoff-Faktor berechnen können.",
      "Isotonische, hypotone und hypertone Lösungen unterscheiden und ihre Wirkung auf Erythrozyten beschreiben können.",
      "Den kolloidosmotischen Druck und die klinische Bedeutung von Albumin bei der Ödembildung erklären können.",
    ],

    sections: [
      {
        heading: "Löslichkeit — polar löst polar",
        text: 'Der Grundsatz "Similia similibus solvuntur" erklärt, warum Wasser Salze und Zucker löst, aber keine Fette: Polare Substanzen wechselwirken über H-Brücken und elektrostatische Kräfte mit Wasser; unpolare Substanzen können diese Wechselwirkungen nicht eingehen und werden daher aus dem Wasser "ausgeschlossen" (hydrophober Effekt). Amphiphile Moleküle wie Phospholipide nutzen beide Eigenschaften: Der polare Kopf zeigt ins Wasser, der unpolare Schwanz organisiert sich weg vom Wasser — Grundlage der Biomembran.',
        merksatz: '"Gleiches löst sich in Gleichem" — polar in polar, unpolar in unpolar.',
      },
      {
        heading: "Osmose und klinische Konsequenzen",
        text: "Die Osmoregulation ist lebensnotwendig: Das Blutplasma wird bei 285–295 mOsmol/L gehalten (Hypothalamus/ADH-Achse). Jede Abweichung gefährdet die Zellintegrität. Hypotone Lösungen (z. B. reines Wasser i.v.) würden Erythrozyten durch Wassereinstrom zum Platzen bringen (Hämolyse). Hypertone Lösungen (z. B. Meerwasser trinken) entziehen Zellen Wasser. Albumin als wichtigstes Plasmaprotein generiert den onkotischen Druck und hält Wasser im Gefäß; sein Abfall führt zu Ödemen.",
        merksatz:
          'Osmose: Wasser wandert vom geringen zum hohen osmotischen Druck — immer von "verdünnt" nach "konzentriert".',
      },
      {
        heading: "Konzentrationsrechnung im klinischen Alltag",
        text: 'Die häufigste Infusionslösung "NaCl 0,9 %" bedeutet 0,9 g NaCl pro 100 mL = 9 g/L. Mit M(NaCl) = 58,44 g/mol ergibt sich c = 0,154 mol/L. Da NaCl vollständig in Na⁺ und Cl⁻ dissoziiert (i = 2), beträgt die Osmolarität 2 × 154 = 308 mOsmol/L — knapp isotonisch. "5 % Glukose" = 50 g/L; M(Glukose) = 180 g/mol → c = 0,278 mol/L; i = 1 → 278 mOsmol/L. Diese Rechnungen sind prüfungsrelevant.',
        merksatz: "Osmolarität [mOsmol/L] = Molarität × i × 1000; NaCl: i = 2, Glukose: i = 1.",
      },
      {
        heading: "Konzentrationsbegriffe",
        text: "Übersicht der wichtigsten Konzentrationsmaße und ihrer klinischen Anwendung.",
        merksatz: "Molarität c [mol/L] = n/V; Massenkonzentration β [g/L] = c × M.",
        table: {
          headers: ["Begriff", "Formel", "Einheit", "Anwendung"],
          rows: [
            ["Molarität (c)", "n / V", "mol/L (M)", "Standardkonzentration im Labor"],
            ["Molalität (b)", "n / m(Lösungsmittel)", "mol/kg", "Kolligative Eigenschaften"],
            ["Massenkonzentration (β)", "m / V", "g/L", "Klinische Laborbefunde"],
            ["Massenanteil (w)", "m(Stoff) / m(Lösung)", "% (m/m)", "Lösungsansatz"],
            [
              "Volumenanteil (φ)",
              "V(Stoff) / V(Lösung)",
              "% (v/v)",
              "Alkohol, Sauerstoffkonzentration",
            ],
            [
              "Massenvolumenkonzentration",
              "m(Stoff) / V(Lösung)",
              "% (m/v)",
              "Infusionslösungen (z. B. 0,9 % NaCl)",
            ],
          ],
        },
      },
    ],

    merksätze: [
      '"Similia similibus solvuntur" — polar löst polar, unpolar löst unpolar.',
      "0,9 % NaCl = 154 mmol/L NaCl = 308 mOsmol/L ≈ isotonisch.",
      "5 % Glukose = 278 mOsmol/L ≈ isotonisch; nach Metabolisierung wirkt es wie hypotones Wasser.",
      "Osmose: Wasser wandert immer vom geringen zum hohen osmotischen Druck (semipermeable Membran).",
      "Van't-Hoff-Faktor i: NaCl → i = 2; CaCl₂ → i = 3; Glukose → i = 1.",
      "Blutplasma-Osmolarität normal: 285–295 mOsmol/L; geregelt durch ADH und Niere.",
      "Hypotone Lösung → Hämolyse der Erythrozyten; hypertone Lösung → Crenation (Schrumpfen).",
      "Albumin erzeugt onkotischen Druck (~25 mmHg) → hält Wasser im Gefäß.",
      "Hypoalbuminämie (Leberzirrhose, nephrotisches Syndrom) → Ödeme durch verminderten onkotischen Druck.",
    ],

    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Ein Patient mit nephrotischem Syndrom (starker Proteinverlust im Urin) entwickelt ausgeprägte periphere Ödeme trotz normalem Blutdruck. Erläutern Sie den pathophysiologischen Mechanismus und die zugrundeliegenden physikalisch-chemischen Prinzipien.",
      answer: `Das nephrotische Syndrom ist durch eine massive Proteinurie (>3,5 g/Tag) gekennzeichnet, die zur Hypoalbuminämie führt (Serumalbumin < 30 g/L, normal 35–50 g/L). Albumin ist das mengenmäßig wichtigste Plasmaprotein und mit einem Molekulargewicht von ca. 66 kDa zu groß, um unter normalen Bedingungen die Kapillarmembran zu passieren.

Der **kolloidosmotische (onkotische) Druck** bezeichnet den osmotischen Druck, den Makromoleküle (vor allem Albumin) aufbauen, die nicht durch Membranen diffundieren können. Er beträgt beim Gesunden ca. 25–28 mmHg und hält Wasser im Gefäßlumen, indem er dem hydrostatischen Filtrationsdruck (ca. 35 mmHg arteriell, 15 mmHg venös) entgegenwirkt. Das Gleichgewicht zwischen Filtration und Reabsorption beschreibt die Starling-Gleichung.

Bei Hypoalbuminämie sinkt der onkotische Druck erheblich (z. B. auf < 15 mmHg). Das hydrostatische Druckgefälle überwiegt nun an beiden Seiten des Kapillarbetts → Nettofiltration von Flüssigkeit ins Interstitium → **Ödembildung**. Da das Blutvolumen sinkt (Volumenmangel im Gefäß), aktiviert die Niere das RAAS (Renin-Angiotensin-Aldosteron-System) und schüttet ADH aus → Na⁺- und Wasserretention → paradoxe Verstärkung der Ödeme, obwohl bereits zu viel Wasser im Interstitium ist.

Das osmotische Grundprinzip lautet: Wasser folgt stets dem osmotischen Gefälle — in diesem Fall dem Druckgefälle von Gefäß zum Interstitium. Da die Plasmaproteine fehlen, fehlt der Gegendruck. Die Therapie zielt auf Albuminsubstitution (kurzzeitig), Diuretika zur Natriumausscheidung und Behandlung der Grunderkrankung.`,
    },

    klinischerBezug:
      "Isotonische Infusionslösungen (0,9 % NaCl, 5 % Glukose) schützen Erythrozyten; Hypoalbuminämie (nephrotisches Syndrom, Leberzirrhose) senkt onkotischen Druck und verursacht Ödeme.",

    selfTest: [
      {
        question:
          "Wie groß ist die Osmolarität einer 0,5 mol/L CaCl₂-Lösung? (CaCl₂ → Ca²⁺ + 2 Cl⁻)",
        options: ["1500 mOsmol/L", "750 mOsmol/L", "1000 mOsmol/L", "500 mOsmol/L", "250 mOsmol/L"],
        correctIndex: 0,
        explanation:
          "CaCl₂ dissoziiert vollständig in 1 Ca²⁺ und 2 Cl⁻, also 3 Teilchen pro Formeleinheit → van't-Hoff-Faktor i = 3. Osmolarität = c × i × 1000 = 0,5 mol/L × 3 × 1000 = 1500 mOsmol/L. Diese Lösung ist stark hypertonisch (Blut: ~290 mOsmol/L). Starke Hypertonizität würde Erythrozyten schrumpfen lassen (Crenation) und darf nicht als Infusion gegeben werden.",
        hints: [
          "Zählen Sie die Ionen: CaCl₂ → Ca²⁺ + 2 Cl⁻ = wie viele Teilchen?",
          "Osmolarität = Molarität × Anzahl Teilchen (i) × 1000.",
        ],
        tags: ["osmolarität", "dissoziation", "vant-hoff-faktor"],
        difficulty: 2,
      },
      {
        question:
          "Ein Patient erhält versehentlich reines Wasser (destilliert) als intravenöse Infusion. Was passiert mit seinen Erythrozyten?",
        options: [
          "Sie schrumpfen (Crenation), weil Wasser hypotonisch ist.",
          "Sie schwellen an und platzen (Hämolyse), weil Wasser ins Zellinnere strömt.",
          "Nichts, weil Erythrozyten keine semipermeable Membran haben.",
          "Sie werden agglutiniert durch den osmotischen Druck.",
          "Ihre Hämoglobinkonzentration steigt durch Wasserentzug.",
        ],
        correctIndex: 1,
        explanation:
          "Reines Wasser hat eine Osmolarität von 0 mOsmol/L — extrem hypotonisch gegenüber dem Zellinneren (Erythrozyt: ~300 mOsmol/L). Wasser strömt per Osmose durch die semipermeable Erythrozytenmembran in die Zelle, bis der osmotische Druck ausgeglichen ist oder die Membran reißt. Die Folge ist Hämolyse (Platzen der Erythrozyten) mit Freisetzung von Hämoglobin — klinisch: Hämoglobinurie, Nierenversagen möglich. Deswegen müssen alle i.v.-Lösungen isotonisch formuliert sein.",
        hints: [
          "Wohin wandert Wasser bei der Osmose — zur höheren oder niedrigeren Konzentration?",
          "Der Erythrozyt hat eine höhere Innenkonzentration als das Außenmedium.",
        ],
        tags: ["osmose", "hämolyse", "erythrozyten"],
        difficulty: 1,
      },
      {
        question:
          "Welche Konzentration hat eine 5 % (m/v) Glukoselösung in mol/L? (M Glukose = 180 g/mol)",
        options: ["0,028 mol/L", "0,500 mol/L", "0,278 mol/L", "2,78 mol/L", "5,00 mol/L"],
        correctIndex: 2,
        explanation:
          "5 % (m/v) bedeutet 5 g Glukose pro 100 mL = 50 g/L. Mit der Molmasse M = 180 g/mol gilt: c = 50 g/L ÷ 180 g/mol ≈ 0,278 mol/L. Die Osmolarität beträgt 0,278 mol/L × 1 (Glukose dissoziiert nicht, i = 1) × 1000 ≈ 278 mOsmol/L — damit ist die Lösung annähernd isotonisch mit Blutplasma (285–295 mOsmol/L).",
        hints: [
          "5 % (m/v) = 5 g pro 100 mL = wie viele g pro Liter?",
          "c = Masse pro Liter ÷ Molmasse.",
        ],
        tags: ["molarität", "glukose", "konzentration"],
        difficulty: 2,
      },
      {
        question:
          "Warum entwickelt ein Patient mit schwerer Hypoalbuminämie (Albumin 15 g/L statt 40 g/L) periphere Ödeme?",
        options: [
          "Weil Albumin Wasser aktiv in die Zellen pumpt.",
          "Weil fehlende Albumine die Blut-Hirn-Schranke destabilisieren.",
          "Weil Albumin die Nierenfunktion hemmt und Wasser retiniert wird.",
          "Weil der onkotische Druck im Plasma sinkt und Wasser aus den Kapillaren ins Interstitium austritt.",
          "Weil Albumin normalerweise Wasser aus dem Darm resorbiert.",
        ],
        correctIndex: 3,
        explanation:
          "Albumin ist zu groß, um die Kapillarmembran normal zu passieren, und erzeugt dadurch den onkotischen (kolloidosmotischen) Druck von ~25 mmHg, der Wasser im Gefäßlumen hält. Bei Hypoalbuminämie (z. B. nephrotisches Syndrom, Leberzirrhose, Malnutrition) sinkt dieser Gegendruck. Der hydrostatische Druck der Kapillaren überwiegt nun an beiden Seiten, Wasser filtiert verstärkt ins Interstitium: Ödeme entstehen. Dies ist reines Osmose-Prinzip: Wasser folgt dem osmotischen Gradienten — von höherer zu niedrigerer Albuminkonzentration (Gefäß → Interstitium).",
        hints: [
          "Was erzeugt der kolloidosmotische Druck — Wasser halten oder herausdrücken?",
          "Starling-Gleichung: hydrostatischer Druck filtert aus, onkotischer Druck hält zurück.",
        ],
        tags: ["onkotischer-druck", "albumin", "ödeme", "klinisch"],
        difficulty: 2,
      },
      {
        question:
          "Jod (I₂) ist nahezu wasserunlöslich, löst sich aber gut in Tetrachlorkohlenstoff (CCl₄). Welches Prinzip erklärt das am besten?",
        options: [
          "Jod bildet H-Brücken mit CCl₄.",
          "CCl₄ ist polar und bildet Dipol-Dipol-Wechselwirkungen mit I₂.",
          "CCl₄ hat eine höhere Dielektrizitätskonstante als Wasser.",
          "Jod ist ionisch und CCl₄ ist ein starkes Ionensolvatans.",
          '"Similia similibus solvuntur" — beide sind unpolarer Natur und wechselwirken über London-Kräfte.',
        ],
        correctIndex: 4,
        explanation:
          'Jod (I₂) ist ein unpolares, symmetrisches Molekül ohne permanentes Dipolmoment. CCl₄ ist ebenfalls unpolar (symmetrisches Tetraeder, Dipolmomente heben sich auf). Beide wechselwirken über London-Dispersionskräfte, die für unpolare Moleküle die einzigen intermolekularen Kräfte sind. Da "Gleiches sich in Gleichem löst", ist I₂ gut in CCl₄ löslich. In Wasser (hochpolar, H-Brücken-Netzwerk) ist I₂ dagegen nahezu unlöslich, weil I₂ dieses Netzwerk nicht aufrechterhalten kann. CCl₄ hat eine niedrigere Dielektrizitätskonstante als Wasser, kein Dipolmoment und keine H-Brücken.',
        hints: [
          "Welche Symmetrie hat I₂? Hat es ein Dipolmoment?",
          "CCl₄ hat vier gleiche C-Cl-Bindungen in Tetraederanordnung — was bedeutet das für das Gesamtdipolmoment?",
        ],
        tags: ["löslichkeit", "polarität", "london-kräfte"],
        difficulty: 2,
      },
      {
        question:
          "Welche Lösung ist die richtige intravenöse Flüssigkeit für einen Patienten mit Hypovolämie (Blutdruckabfall durch Volumenmangel) ohne bekannte Elektrolytstörungen?",
        options: [
          "Isotonische 0,9 % NaCl-Lösung (154 mmol/L, ~308 mOsmol/L).",
          "10 % NaCl-Lösung, um den Blutdruck schnell zu erhöhen.",
          "Destilliertes Wasser, weil es keine zusätzlichen Elektrolyte enthält.",
          "Hypotone 0,45 % NaCl-Lösung, um mehr Volumen in die Zellen zu bringen.",
          "70 % Ethanol, weil Alkohol gefäßerweiternd wirkt.",
        ],
        correctIndex: 0,
        explanation:
          "Bei Hypovolämie muss das intravasale Volumen aufgefüllt werden ohne Hämolyse oder Crenation zu riskieren. Die isotonische 0,9 % NaCl-Lösung (154 mmol/L NaCl, Osmolarität ~308 mOsmol/L) entspricht annähernd dem osmotischen Druck des Blutplasmas (285–295 mOsmol/L) und verursacht keine Volumenverschiebungen über Erythrozytenmembranen. Destilliertes Wasser (0 mOsmol/L) würde akute Hämolyse verursachen. 10 % NaCl ist stark hypertonisch und würde Zellen schrumpfen lassen sowie hypernatriämische Schäden verursachen. Hypotone Lösungen würden Zellen aufschwellen lassen.",
        hints: [
          "Welche Osmolarität entspricht der des Blutes (~290 mOsmol/L)?",
          "Was passiert bei zu niedriger oder zu hoher Osmolarität mit Erythrozyten?",
        ],
        tags: ["infusion", "isotonisch", "hypovolämie", "klinisch"],
        difficulty: 1,
      },
      {
        question:
          "Was ist der Van't-Hoff-Faktor (i) für Calciumchlorid CaCl₂, das vollständig dissoziiert?",
        options: ["1", "3", "2", "4", "6"],
        correctIndex: 1,
        explanation:
          "CaCl₂ dissoziiert in wässriger Lösung vollständig: CaCl₂ → Ca²⁺ + 2 Cl⁻. Pro Formeleinheit entstehen 3 Ionen. Der van't-Hoff-Faktor i gibt die Anzahl der Partikel an, in die eine Formeleinheit dissoziiert. Für CaCl₂ gilt daher i = 3. Dies ist wichtig für die Berechnung der Osmolarität (= c × i × 1000) und kolligativer Eigenschaften. Vergleich: NaCl: i = 2 (Na⁺ + Cl⁻); Glukose: i = 1 (kein Zerfall); MgCl₂: i = 3; AlCl₃: i = 4.",
        hints: [
          "Schreiben Sie die Dissoziationsgleichung auf: CaCl₂ → ?",
          "Zählen Sie die Produkt-Ionen.",
        ],
        tags: ["vant-hoff-faktor", "dissoziation", "osmolarität"],
        difficulty: 1,
      },
    ],
  },
];
