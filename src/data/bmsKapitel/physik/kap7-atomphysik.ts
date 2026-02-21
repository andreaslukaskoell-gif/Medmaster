import type { Kapitel } from '../types';

export const physKap7: Kapitel = {
  id: 'phys-kap7',
  title: "Atomphysik",
  subject: 'physik',
  icon: '☢️',
  estimatedTime: '45 min',
  unterkapitel: [
    {
      id: 'ph-7-01',
      title: "Atom- und Kernphysik",
      content: `# Atom- und Kernphysik

## Atommodell (Kern-Hülle)

Atom besteht aus positiv geladenem Kern (Protonen + Neutronen) und negativer Elektronenhülle. Der Atomkern ist winzig (10⁻¹⁵ m) gegenüber dem Atomradius (10⁻¹⁰ m).

## Radioaktivität

**α-Zerfall**: Emission eines He-Kerns (⁴₂He). Ordnungszahl −2, Massenzahl −4. Geringe Reichweite.

**β⁻-Zerfall**: Ein Neutron → Proton + Elektron + Antineutrino. Ordnungszahl +1.

**β⁺-Zerfall (Positronenemission)**: Proton → Neutron + Positron + Neutrino.

**γ-Strahlung**: Elektromagnetische Strahlung aus angeregten Kernen. Keine Änderung von Z oder A. Höchste Durchdringungsfähigkeit.

## Halbwertszeit

**T½**: Zeit, nach der die Hälfte der radioaktiven Kerne zerfallen ist.
N(t) = N₀ · (½)^(t/T½)

## Kernspaltung und -fusion

- **Spaltung**: Schwere Kerne (²³⁵U) spalten sich → Kernkraft, Kettenreaktion
- **Fusion**: Leichte Kerne verschmelzen (H → He in Sonne) → große Energiemengen

## Für den MedAT

- α-Strahlung: stoppbar durch Papier; β: Aluminium; γ: Blei/dickes Beton
- Halbwertszeit: exponentieller Zerfall
- Medizinische Anwendungen: Röntgen (γ), PET (β⁺), Strahlentherapie
`,
      lernziele: [],
      sections: [],
      merksätze: [],
      selfTest: [
        {
          question: "Aus welchen Teilchen besteht ein Atom im Kern-Hülle-Modell?",
          options: [
          "Protonen im Kern, Elektronen in der Hülle",
          "Protonen und Neutronen im Kern, Elektronen in der Hülle",
          "Protonen und Elektronen im Kern, Neutronen in der Hülle",
          "Nur Protonen im Kern, Neutronen und Elektronen in der Hülle",
          "Protonen, Neutronen und Elektronen im Kern"
          ],
          correctIndex: 1,
          explanation: "Der Atomkern besteht aus positiv geladenen Protonen und ungeladenen Neutronen (zusammen Nukleonen genannt). Die negativ geladenen Elektronen befinden sich in der Atomhülle und bewegen sich in Orbitalen um den Kern.",
          difficulty: 1,
        },
        {
          question: "Was versteht man unter der Ordnungszahl (Kernladungszahl) Z eines Elements?",
          options: [
          "Die Anzahl der Neutronen im Atomkern",
          "Die Summe aus Protonen und Neutronen",
          "Die Anzahl der Protonen im Atomkern",
          "Die Anzahl der Elektronen in der äußersten Schale",
          "Die relative Atommasse des Elements"
          ],
          correctIndex: 2,
          explanation: "Die Ordnungszahl Z gibt die Anzahl der Protonen im Atomkern an. Sie bestimmt die chemischen Eigenschaften des Elements und seine Position im Periodensystem. Bei neutralen Atomen entspricht Z auch der Anzahl der Elektronen.",
          difficulty: 1,
        },
        {
          question: "Was sind Isotope?",
          options: [
          "Atome mit gleicher Neutronenzahl aber unterschiedlicher Protonenzahl",
          "Atome mit gleicher Elektronenzahl aber unterschiedlicher Protonenzahl",
          "Atome mit gleicher Protonenzahl aber unterschiedlicher Neutronenzahl",
          "Atome mit gleicher Massenzahl aber unterschiedlicher Ladung",
          "Atome mit gleicher Elektronenkonfiguration aber unterschiedlicher Masse"
          ],
          correctIndex: 2,
          explanation: "Isotope sind Atome desselben Elements (gleiche Protonenzahl Z), die sich in der Anzahl der Neutronen unterscheiden. Beispiel: ¹²C und ¹⁴C sind beide Kohlenstoff-Isotope mit 6 Protonen, aber 6 bzw. 8 Neutronen.",
          difficulty: 2,
        },
        {
          question: "Welche Hauptquantenzahl n beschreibt die erste Elektronenschale (K-Schale)?",
          options: [
          "n = 0",
          "n = 1",
          "n = 2",
          "n = 3",
          "n = 4"
          ],
          correctIndex: 1,
          explanation: "Die Hauptquantenzahl n nimmt ganzzahlige Werte ab 1 an. n = 1 bezeichnet die K-Schale (erste Schale), n = 2 die L-Schale, n = 3 die M-Schale usw. Die Hauptquantenzahl bestimmt die Energie und den mittleren Abstand der Elektronen vom Kern.",
          difficulty: 2,
        },
        {
          question: "Wie viele Elektronen können maximal in der zweiten Elektronenschale (L-Schale) untergebracht werden?",
          options: [
          "2 Elektronen",
          "4 Elektronen",
          "6 Elektronen",
          "8 Elektronen",
          "10 Elektronen"
          ],
          correctIndex: 3,
          explanation: "Die maximale Elektronenzahl pro Schale berechnet sich nach 2n². Für die L-Schale (n = 2) gilt: 2 × 2² = 8 Elektronen. Diese verteilen sich auf das 2s-Orbital (2 e⁻) und drei 2p-Orbitale (6 e⁻).",
          difficulty: 1,
        },
        {
          question: "Welche Aussage über s-Orbitale ist korrekt?",
          options: [
          "s-Orbitale haben eine hantelförmige Struktur",
          "s-Orbitale können maximal 6 Elektronen aufnehmen",
          "s-Orbitale sind kugelförmig symmetrisch",
          "s-Orbitale existieren erst ab der zweiten Schale",
          "s-Orbitale haben die Nebenquantenzahl l = 1"
          ],
          correctIndex: 2,
          explanation: "s-Orbitale sind kugelsymmetrisch (nicht hantelförmig wie p-Orbitale) und können maximal 2 Elektronen mit entgegengesetztem Spin aufnehmen. Sie existieren in jeder Schale (1s, 2s, 3s...) und haben die Nebenquantenzahl l = 0.",
          difficulty: 2,
        },
        {
          question: "Ein Elektron im Wasserstoffatom befindet sich im 3d-Orbital. Welche Quantenzahlen sind möglich?",
          options: [
          "n = 3, l = 0",
          "n = 3, l = 1",
          "n = 3, l = 2",
          "n = 3, l = 3",
          "n = 2, l = 2"
          ],
          correctIndex: 2,
          explanation: "Für d-Orbitale gilt l = 2. Die Hauptquantenzahl n muss mindestens l + 1 sein, also n ≥ 3 für d-Orbitale. Daher ist 3d mit n = 3 und l = 2 korrekt. Die Nebenquantenzahl l kann Werte von 0 bis n-1 annehmen.",
          difficulty: 3,
        },
        {
          question: "Was besagt das Pauli-Prinzip für Elektronen in Atomen?",
          options: [
          "Elektronen besetzen zürst die energieärmsten Orbitale",
          "Keine zwei Elektronen können in allen Quantenzahlen übereinstimmen",
          "Elektronen in einem Orbital haben parallele Spins",
          "Orbitale werden zürst einfach, dann doppelt besetzt",
          "Die Elektronenzahl entspricht der Protonenzahl"
          ],
          correctIndex: 1,
          explanation: "Das Pauli-Ausschlussprinzip besagt, dass sich keine zwei Elektronen in einem Atom in allen vier Quantenzahlen (n, l, ml, ms) gleichen dürfen. Daher können in einem Orbital maximal zwei Elektronen mit entgegengesetztem Spin sein.",
          difficulty: 1,
        },
        {
          question: "Welche Kraft hält die Protonen im Atomkern zusammen, obwohl sie sich elektrisch abstoßen?",
          options: [
          "Die elektromagnetische Kraft",
          "Die Gravitationskraft",
          "Die schwache Wechselwirkung",
          "Die starke Wechselwirkung (Kernkraft)",
          "Die Van-der-Waals-Kraft"
          ],
          correctIndex: 3,
          explanation: "Die starke Wechselwirkung (starke Kernkraft) ist die stärkste der vier Grundkräfte und wirkt nur auf sehr kurze Distanzen (ca. 10⁻¹⁵ m). Sie bindet Quarks zu Nukleonen und Nukleonen untereinander im Kern, wobei sie die elektrische Abstoßung der Protonen überwindet.",
          difficulty: 2,
        },
        {
          question: "Was ist die Reichweite der starken Wechselwirkung?",
          options: [
          "Unendlich weit, nimmt aber mit dem Quadrat der Entfernung ab",
          "Etwa 10⁻⁸ m (Atomdurchmesser)",
          "Etwa 10⁻¹⁵ m (Kerndurchmesser)",
          "Etwa 10⁻¹⁸ m (Protondurchmesser)",
          "Etwa 10⁻³⁵ m (Planck-Länge)"
          ],
          correctIndex: 2,
          explanation: "Die starke Wechselwirkung hat eine sehr kurze Reichweite von etwa 10⁻¹⁵ m, was der Größenordnung des Atomkerns entspricht. Außerhalb dieser Distanz nimmt sie extrem schnell ab. Dies erklärt, warum sie zwar die stärkste Kraft ist, aber nur im Kernbereich wirkt.",
          difficulty: 2,
        },
        {
          question: "Welche Aussage über die schwache Wechselwirkung ist korrekt?",
          options: [
          "Sie ist verantwortlich für den Zusammenhalt des Atomkerns",
          "Sie vermittelt radioaktive Beta-Zerfälle",
          "Sie wirkt nur zwischen Protonen",
          "Sie hat eine größere Reichweite als die starke Wechselwirkung",
          "Sie ist stärker als die elektromagnetische Kraft"
          ],
          correctIndex: 1,
          explanation: "Die schwache Wechselwirkung ist verantwortlich für Beta-Zerfälle, bei denen sich Neutronen in Protonen umwandeln (oder umgekehrt). Sie wirkt auf Quarks und Leptonen und ist deutlich schwächer als die starke und elektromagnetische Kraft, aber stärker als die Gravitation.",
          difficulty: 3,
        },
        {
          question: "Warum sind schwere Atomkerne instabiler als leichte?",
          options: [
          "Weil die Gravitationskraft mit zunehmender Masse zunimmt",
          "Weil die elektromagnetische Abstoßung langreichweitiger ist als die Kernkraft",
          "Weil schwere Kerne mehr Elektronen haben",
          "Weil die starke Kraft bei schweren Kernen verschwindet",
          "Weil schwere Kerne keine Neutronen enthalten"
          ],
          correctIndex: 1,
          explanation: "Die starke Kernkraft wirkt nur auf kurze Distanzen zwischen benachbarten Nukleonen. Die elektrische Abstoßung zwischen Protonen wirkt dagegen über größere Entfernungen. In großen Kernen summiert sich die Abstoßung aller Protonen, während die Kernkraft nur lokal wirkt, was zu Instabilität führt.",
          difficulty: 2,
        },
        {
          question: "Was ist ein Antiteilchen des Elektrons?",
          options: [
          "Das Proton",
          "Das Positron",
          "Das Neutron",
          "Das Neutrino",
          "Das Photon"
          ],
          correctIndex: 1,
          explanation: "Das Positron ist das Antiteilchen des Elektrons. Es hat dieselbe Masse wie ein Elektron, aber positive Ladung. Bei der Begegnung von Elektron und Positron kommt es zur Paarvernichtung (Annihilation), wobei Energie in Form von Gammastrahlung freigesetzt wird.",
          difficulty: 3,
        },
        {
          question: "Was versteht man unter Kernspaltung?",
          options: [
          "Die Verschmelzung zweier leichter Kerne zu einem schwereren",
          "Die Aufspaltung eines schweren Atomkerns in leichtere Fragmente",
          "Die Emission eines Alpha-Teilchens aus dem Kern",
          "Die Umwandlung eines Neutrons in ein Proton",
          "Die Ionisation der Elektronenhülle"
          ],
          correctIndex: 1,
          explanation: "Bei der Kernspaltung (Fission) wird ein schwerer Atomkern (z.B. ²³⁵U) durch Neutronenbeschuss in zwei oder mehr leichtere Kerne gespalten. Dabei werden 2-3 Neutronen und viel Energie freigesetzt. Dies ist das Prinzip von Kernkraftwerken und Atombomben.",
          difficulty: 2,
        },
        {
          question: "Welches Isotop wird hauptsächlich in Kernreaktoren für die kontrollierte Kernspaltung verwendet?",
          options: [
          "²³⁸U (Uran-238)",
          "²³⁵U (Uran-235)",
          "²³²Th (Thorium-232)",
          "²⁴⁰Pu (Plutonium-240)",
          "¹²C (Kohlenstoff-12)"
          ],
          correctIndex: 1,
          explanation: "²³⁵U ist das einzige in der Natur vorkommende spaltbare Isotop und wird in Kernreaktoren verwendet. Es macht nur 0,7% des natürlichen Urans aus (99,3% ist ²³⁸U). Thermische Neutronen können ²³⁵U effektiv spalten, während ²³⁸U nur durch schnelle Neutronen spaltbar ist.",
          difficulty: 2,
        },
        {
          question: "Was ist die Funktion von Moderatoren in Kernreaktoren?",
          options: [
          "Sie absorbieren überschüssige Neutronen zur Steuerung der Kettenreaktion",
          "Sie verlangsamen schnelle Neutronen auf thermische Geschwindigkeiten",
          "Sie schirmen die Umgebung vor Strahlung ab",
          "Sie kühlen den Reaktorkern",
          "Sie wandeln radioaktive Abfälle um"
          ],
          correctIndex: 1,
          explanation: "Moderatoren (z.B. Wasser, Graphit, schweres Wasser) bremsen die bei der Spaltung entstehenden schnellen Neutronen durch elastische Stöße ab. Langsame (thermische) Neutronen haben eine viel höhere Wahrscheinlichkeit, weitere ²³⁵U-Kerne zu spalten, was die Kettenreaktion aufrechterhält.",
          difficulty: 3,
        },
        {
          question: "Was ist die kritische Masse bei der Kernspaltung?",
          options: [
          "Die Masse, bei der ein Reaktor überhitzt",
          "Die minimale Masse, bei der eine selbsterhaltende Kettenreaktion möglich ist",
          "Die Masse eines einzelnen Uranatoms",
          "Die maximal zulässige Masse in einem Reaktor",
          "Die Masse der Spaltprodukte nach einer Reaktion"
          ],
          correctIndex: 1,
          explanation: "Die kritische Masse ist die minimale Menge spaltbaren Materials, bei der im Durchschnitt mindestens ein freigesetztes Neutron eine weitere Spaltung auslöst. Unterhalb der kritischen Masse entweichen zu viele Neutronen nach außen, und die Kettenreaktion erlischt.",
          difficulty: 2,
        },
        {
          question: "Was versteht man unter Kernfusion?",
          options: [
          "Die Spaltung schwerer Atomkerne",
          "Die Verschmelzung leichter Atomkerne zu schwereren",
          "Die Anlagerung von Neutronen an den Kern",
          "Die Emission von Gammastrahlung",
          "Die Umwandlung von Materie in Antimaterie"
          ],
          correctIndex: 1,
          explanation: "Bei der Kernfusion verschmelzen leichte Atomkerne (z.B. Wasserstoff-Isotope) zu schwereren Kernen unter Freisetzung enormer Energie. Dies ist der Energieproduktionsprozess in Sternen wie der Sonne. Fusion erfordert extrem hohe Temperaturen (Millionen Grad).",
          difficulty: 2,
        },
        {
          question: "Welche Fusionsreaktion findet hauptsächlich in der Sonne statt?",
          options: [
          "Die Verschmelzung von Helium zu Kohlenstoff",
          "Die Proton-Proton-Kette, bei der Wasserstoff zu Helium fusioniert",
          "Die Verschmelzung von Kohlenstoff zu Eisen",
          "Die Spaltung von Uran zu Blei",
          "Die Umwandlung von Neutronen zu Protonen"
          ],
          correctIndex: 1,
          explanation: "In der Sonne läuft hauptsächlich die Proton-Proton-Kette ab: Vier Protonen (¹H) verschmelzen über mehrere Schritte zu einem Heliumkern (⁴He), wobei Positronen, Neutrinos und Gammastrahlung entstehen. Diese Reaktion erzeugt die Energie der Sonne.",
          difficulty: 3,
        },
        {
          question: "Warum ist die Kernfusion schwerer zu realisieren als die Kernspaltung?",
          options: [
          "Weil Fusionskerne radioaktiv sind",
          "Weil extreme Temperaturen und Drücke nötig sind, um die Coulomb-Abstoßung zu überwinden",
          "Weil Fusion weniger Energie freisetzt als Spaltung",
          "Weil keine geeigneten Brennstoffe existieren",
          "Weil Fusion nur im Vakuum stattfinden kann"
          ],
          correctIndex: 1,
          explanation: "Damit positiv geladene Kerne fusionieren können, müssen sie die elektrische Abstoßung (Coulomb-Barriere) überwinden. Dies erfordert Temperaturen von mehreren Millionen Grad Celsius und hohen Druck. Die technische Herausforderung liegt im Einschluss des heißen Plasmas.",
          difficulty: 3,
        },
        {
          question: "Welche Isotope werden bevorzugt für kontrollierte Fusionsexperimente verwendet?",
          options: [
          "Uran-235 und Plutonium-239",
          "Kohlenstoff-12 und Sauerstoff-16",
          "Deuterium und Tritium",
          "Helium-3 und Helium-4",
          "Wasserstoff-1 und Wasserstoff-2"
          ],
          correctIndex: 2,
          explanation: "Die D-T-Reaktion (Deuterium + Tritium → Helium-4 + Neutron) hat bei erreichbaren Temperaturen den höchsten Wirkungsquerschnitt. Deuterium ist in Meerwasser reichlich vorhanden, Tritium wird im Reaktor aus Lithium erbrütet. Diese Reaktion setzt 17,6 MeV pro Fusion frei.",
          difficulty: 2,
        },
        {
          question: "Warum wird bei Kernspaltung und Kernfusion Energie frei?",
          options: [
          "Weil Masse verloren geht und nach E = mc² in Energie umgewandelt wird",
          "Weil chemische Bindungen aufgebrochen werden",
          "Weil Elektronen von höheren auf tiefere Orbitale fallen",
          "Weil Wärme aus der Umgebung aufgenommen wird",
          "Weil kinetische Energie der Teilchen zunimmt"
          ],
          correctIndex: 0,
          explanation: "Die Bindungsenergie pro Nukleon ist bei mittelschweren Kernen (um Eisen) am höchsten. Bei Fusion leichter Kerne und Spaltung schwerer Kerne entstehen stabilere Produkte mit höherer Bindungsenergie. Der Massendefekt wird nach Einsteins E = mc² in Energie umgewandelt.",
          difficulty: 2,
        },
        {
          question: "Was versteht man unter Radioaktivität?",
          options: [
          "Die Emission elektromagnetischer Wellen durch heiße Körper",
          "Die spontane Umwandlung instabiler Atomkerne unter Aussendung ionisierender Strahlung",
          "Die Absorption von Röntgenstrahlung durch Materie",
          "Die chemische Reaktion radioaktiver Stoffe mit Luft",
          "Die Erwärmung radioaktiver Materialien"
          ],
          correctIndex: 1,
          explanation: "Radioaktivität ist die spontane Umwandlung (Zerfall) instabiler Atomkerne unter Emission ionisierender Strahlung (Alpha-, Beta- oder Gammastrahlung). Dieser Prozess kann nicht durch äußere Bedingungen (Temperatur, Druck, chemische Bindung) beeinflusst werden.",
          difficulty: 1,
        },
        {
          question: "Was ist ein Alpha-Teilchen?",
          options: [
          "Ein hochenergetisches Elektron",
          "Ein Heliumkern (2 Protonen, 2 Neutronen)",
          "Ein hochenergetisches Photon",
          "Ein freies Neutron",
          "Ein Positron"
          ],
          correctIndex: 1,
          explanation: "Ein Alpha-Teilchen besteht aus 2 Protonen und 2 Neutronen, ist also identisch mit einem Helium-4-Kern. Es trägt eine zweifach positive Ladung und hat eine relativ große Masse. Alpha-Strahlung hat geringe Durchdringungsfähigkeit (bereits durch Papier stoppbar).",
          difficulty: 1,
        },
        {
          question: "Wie ändert sich ein Atomkern beim Alpha-Zerfall?",
          options: [
          "Ordnungszahl Z erhöht sich um 2, Massenzahl A erhöht sich um 4",
          "Ordnungszahl Z verringert sich um 1, Massenzahl A bleibt gleich",
          "Ordnungszahl Z verringert sich um 2, Massenzahl A verringert sich um 4",
          "Ordnungszahl Z bleibt gleich, Massenzahl A verringert sich um 4",
          "Ordnungszahl Z und Massenzahl A bleiben unverändert"
          ],
          correctIndex: 2,
          explanation: "Beim Alpha-Zerfall emittiert der Kern ein Alpha-Teilchen (⁴He). Dadurch verringert sich die Ordnungszahl um 2 (zwei Protonen weniger) und die Massenzahl um 4 (zwei Protonen und zwei Neutronen weniger). Beispiel: ²³⁸U → ²³⁴Th + ⁴He.",
          difficulty: 2,
        },
        {
          question: "Was ist Beta-minus-Strahlung?",
          options: [
          "Eine Emission von Protonen",
          "Eine Emission von Neutronen",
          "Eine Emission von Elektronen",
          "Eine Emission von Positronen",
          "Eine Emission von Photonen"
          ],
          correctIndex: 2,
          explanation: "Bei der Beta-minus-Strahlung wandelt sich ein Neutron im Kern in ein Proton um, wobei ein Elektron (β⁻) und ein Antineutrino emittiert werden. Die Ordnungszahl steigt um 1, die Massenzahl bleibt gleich. Beispiel: ¹⁴C → ¹⁴N + e⁻ + ν̄ₑ.",
          difficulty: 1,
        },
        {
          question: "Welche Aussage über Gamma-Strahlung ist korrekt?",
          options: [
          "Sie besteht aus geladenen Teilchen",
          "Sie entsteht bei Übergängen zwischen Kernenergie-Niveaus",
          "Sie hat geringere Energie als sichtbares Licht",
          "Sie ist nur schwach durchdringend",
          "Sie verändert die Ordnungszahl des Kerns"
          ],
          correctIndex: 1,
          explanation: "Gamma-Strahlung ist hochenergetische elektromagnetische Strahlung (Photonen), die bei Übergängen zwischen angeregten Zuständen des Atomkerns entsteht. Sie verändert weder Ordnungszahl noch Massenzahl und hat die höchste Durchdringungsfähigkeit aller radioaktiven Strahlungsarten.",
          difficulty: 2,
        },
        {
          question: "Welche Strahlungsart hat die geringste Reichweite in Luft?",
          options: [
          "Gamma-Strahlung",
          "Beta-Strahlung",
          "Alpha-Strahlung",
          "Röntgenstrahlung",
          "Neutronenstrahlung"
          ],
          correctIndex: 2,
          explanation: "Alpha-Strahlung hat aufgrund ihrer hohen Masse und Ladung die geringste Reichweite (wenige Zentimeter in Luft, gestoppt durch Papier). Beta-Strahlung erreicht einige Meter in Luft, Gamma-Strahlung hat die höchste Reichweite und benötigt dicke Blei- oder Betonschichten zur Abschirmung.",
          difficulty: 2,
        },
        {
          question: "Warum wird bei der Beta-Strahlung zusätzlich ein Neutrino emittiert?",
          options: [
          "Um die elektrische Ladung zu neutralisieren",
          "Um Energie- und Impulserhaltung zu gewährleisten",
          "Um die Massenzahl konstant zu halten",
          "Um die Kernkraft zu verstärken",
          "Um Gammastrahlung zu erzeugen"
          ],
          correctIndex: 1,
          explanation: "Experimente zeigten, dass die Beta-Teilchen ein kontinuierliches Energiespektrum haben statt einer festen Energie. Pauli postulierte das Neutrino (bzw. Antineutrino), um die Energie- und Impulserhaltung zu erklären. Das Neutrino trägt die fehlende Energie und den Impuls.",
          difficulty: 3,
        },
        {
          question: "Was versteht man unter der Aktivität einer radioaktiven Probe?",
          options: [
          "Die Gesamtenergie der emittierten Strahlung",
          "Die Anzahl der Zerfälle pro Zeiteinheit",
          "Die Masse des radioaktiven Materials",
          "Die Temperatur der Probe",
          "Die chemische Reaktivität des Materials"
          ],
          correctIndex: 1,
          explanation: "Die Aktivität A gibt die Anzahl der Kernzerfälle pro Zeiteinheit an. Die SI-Einheit ist das Becquerel (Bq): 1 Bq = 1 Zerfall/s. Eine ältere Einheit ist das Curie (Ci): 1 Ci = 3,7 × 10¹⁰ Bq. Die Aktivität nimmt exponentiell mit der Zeit ab.",
          difficulty: 2,
        },
        {
          question: "Was ist die Halbwertszeit eines radioaktiven Isotops?",
          options: [
          "Die Zeit, bis die Hälfte der Energie abgestrahlt wurde",
          "Die Zeit, bis die Hälfte der ursprünglichen Atomkerne zerfallen ist",
          "Die Zeit, bis die Aktivität auf null sinkt",
          "Die halbe Lebensdauer eines einzelnen Atoms",
          "Die Zeit bis zur halben Temperatur der Probe"
          ],
          correctIndex: 1,
          explanation: "Die Halbwertszeit T₁/₂ ist die Zeit, nach der die Hälfte der ursprünglich vorhandenen radioaktiven Atomkerne zerfallen ist. Nach 2 × T₁/₂ sind noch 25% übrig, nach 3 × T₁/₂ noch 12,5% usw. Die Halbwertszeit ist charakteristisch für jedes Isotop.",
          difficulty: 1,
        },
        {
          question: "Eine radioaktive Probe hat eine Halbwertszeit von 8 Tagen. Nach 24 Tagen sind noch 10 g übrig. Wie viel Material war ursprünglich vorhanden?",
          options: [
          "20 g",
          "40 g",
          "60 g",
          "80 g",
          "120 g"
          ],
          correctIndex: 3,
          explanation: "24 Tage entsprechen 3 Halbwertszeiten (24/8 = 3). Nach n Halbwertszeiten gilt: N = N₀ × (1/2)ⁿ. Also: 10 g = N₀ × (1/2)³ = N₀ × 1/8. Daraus folgt: N₀ = 10 g × 8 = 80 g.",
          difficulty: 2,
        },
        {
          question: "Die Aktivität einer Probe beträgt anfangs 800 Bq. Nach 12 Stunden beträgt sie noch 100 Bq. Wie groß ist die Halbwertszeit?",
          options: [
          "2 Stunden",
          "3 Stunden",
          "4 Stunden",
          "6 Stunden",
          "8 Stunden"
          ],
          correctIndex: 2,
          explanation: "A = A₀ × (1/2)ⁿ. Hier: 100 = 800 × (1/2)ⁿ → (1/2)ⁿ = 1/8 = (1/2)³, also n = 3 Halbwertszeiten in 12 Stunden. Daraus: T₁/₂ = 12 h / 3 = 4 Stunden. Alternativ: 800 → 400 → 200 → 100 in jeweils 4 Stunden.",
          difficulty: 3,
        },
        {
          question: "Welches radioaktive Isotop wird zur Altersbestimmung organischer Materialien verwendet?",
          options: [
          "Uran-238",
          "Kohlenstoff-14",
          "Jod-131",
          "Kobalt-60",
          "Plutonium-239"
          ],
          correctIndex: 1,
          explanation: "Die Radiokarbonmethode (C-14-Methode) nutzt ¹⁴C mit einer Halbwertszeit von 5.730 Jahren. ¹⁴C entsteht durch kosmische Strahlung in der Atmosphäre und wird von lebenden Organismen aufgenommen. Nach dem Tod stoppt die Aufnahme, und der ¹⁴C-Gehalt nimmt durch Zerfall ab.",
          difficulty: 2,
        },
        {
          question: "Eine Probe enthält nach 17.190 Jahren noch 12,5% des ursprünglichen ¹⁴C. Was ist die Halbwertszeit von ¹⁴C?",
          options: [
          "3.865 Jahre",
          "4.298 Jahre",
          "5.730 Jahre",
          "6.430 Jahre",
          "8.595 Jahre"
          ],
          correctIndex: 2,
          explanation: "12,5% = 1/8 des Originals. 1/8 = (1/2)³, also sind 3 Halbwertszeiten vergangen. T₁/₂ = 17.190 Jahre / 3 = 5.730 Jahre. Dies ist die tatsächliche Halbwertszeit von Kohlenstoff-14.",
          difficulty: 3,
        },
        {
          question: "Was bedeutet \"ionisierende Strahlung\"?",
          options: [
          "Strahlung, die Metalle zum Leuchten bringt",
          "Strahlung, die Atome oder Moleküle ionisiert",
          "Strahlung, die nur in Ionen eindringen kann",
          "Strahlung, die elektrische Ströme erzeugt",
          "Strahlung, die magnetische Felder bildet"
          ],
          correctIndex: 1,
          explanation: "Ionisierende Strahlung hat genug Energie, um Elektronen aus Atomen oder Molekülen zu entfernen und damit Ionen zu erzeugen. Dazu gehören Alpha-, Beta-, Gamma-Strahlung, Röntgenstrahlung und hochenergetische UV-Strahlung. Sie kann biologisches Gewebe schädigen.",
          difficulty: 2,
        },
        {
          question: "Welche Strahlungsart hat die höchste Ionisierungsfähigkeit?",
          options: [
          "Gamma-Strahlung",
          "Beta-Strahlung",
          "Alpha-Strahlung",
          "Röntgenstrahlung",
          "UV-Strahlung"
          ],
          correctIndex: 2,
          explanation: "Alpha-Strahlung hat die höchste Ionisierungsdichte aufgrund ihrer hohen Masse und zweifachen Ladung. Sie erzeugt viele Ionenpaare auf kurzer Strecke, was sie bei innerer Kontamination sehr gefährlich macht, aber gleichzeitig leicht abschirmbar (geringe Reichweite).",
          difficulty: 2,
        },
        {
          question: "Was versteht man unter der Absorption ionisierender Strahlung?",
          options: [
          "Die Reflexion der Strahlung an Oberflächen",
          "Die Schwächung der Strahlung beim Durchgang durch Materie",
          "Die Verstärkung der Strahlung durch Streuung",
          "Die Umwandlung von Strahlung in Wärme",
          "Die Ablenkung der Strahlung durch Magnetfelder"
          ],
          correctIndex: 1,
          explanation: "Absorption beschreibt die Schwächung der Strahlung beim Durchgang durch Materie durch Wechselwirkungen (Ionisation, Streuung, Paarbildung). Die Intensität nimmt exponentiell ab: I = I₀ × e^(-μx), wobei μ der Absorptionskoeffizient und x die Dicke des Materials ist.",
          difficulty: 2,
        },
        {
          question: "Die Intensität von Gamma-Strahlung wird durch eine 5 cm dicke Bleiplatte auf 25% reduziert. Welche Dicke reduziert sie auf 6,25%?",
          options: [
          "5 cm",
          "7,5 cm",
          "10 cm",
          "15 cm",
          "20 cm"
          ],
          correctIndex: 2,
          explanation: "25% = 1/4 und 6,25% = 1/16 = (1/4)². Die erste Schicht (5 cm) reduziert auf 1/4, eine zweite identische Schicht (weitere 5 cm) reduziert nochmal auf 1/4 davon, also insgesamt auf 1/16. Gesamtdicke: 10 cm. Alternativ: 5 cm ist die Halbwertsdicke für Faktor 4 = 2², also 2 Halbwertsdicken. Für 16 = 2⁴ braucht man 4 Halbwertsdicken.",
          difficulty: 3,
        },
        {
          question: "Welche Aussage über kosmische Strahlung ist korrekt?",
          options: [
          "Sie besteht ausschließlich aus Elektronen",
          "Sie kommt hauptsächlich von der Sonne",
          "Sie besteht überwiegend aus hochenergetischen Protonen und Atomkernen",
          "Sie kann die Erdatmosphäre nicht durchdringen",
          "Sie ist nur nachts nachweisbar"
          ],
          correctIndex: 2,
          explanation: "Die primäre kosmische Strahlung besteht zu ~90% aus Protonen, ~9% aus Heliumkernen und ~1% aus schwereren Kernen. Sie stammt von Supernovae, aktiven Galaxienkernen und anderen hochenergetischen kosmischen Quellen. In der Atmosphäre erzeugt sie Teilchenschauer (sekundäre kosmische Strahlung).",
          difficulty: 2,
        },
        {
          question: "Wodurch entsteht das natürliche Kohlenstoff-14 in der Atmosphäre?",
          options: [
          "Durch radioaktiven Zerfall von Uran",
          "Durch Reaktionen von Neutronen aus kosmischer Strahlung mit Stickstoff",
          "Durch Photosynthese in Pflanzen",
          "Durch chemische Reaktionen mit Sauerstoff",
          "Durch vulkanische Aktivität"
          ],
          correctIndex: 1,
          explanation: "Kosmische Strahlung erzeugt in der oberen Atmosphäre Neutronen, die mit Stickstoff-14 reagieren: ¹⁴N + n → ¹⁴C + p. Das entstehende ¹⁴C oxidiert zu CO₂ und wird in den Kohlenstoffkreislauf eingebaut. Dies ermöglicht die Radiokarbondatierung.",
          difficulty: 2,
        },
        {
          question: "Was ist eine Zerfallsreihe?",
          options: [
          "Die zeitliche Abfolge von Zerfällen in einer Probe",
          "Eine Sequenz von radioaktiven Zerfällen, die von einem Mutternuklid zu einem stabilen Endprodukt führt",
          "Die räumliche Anordnung zerfallender Atome",
          "Eine mathematische Formel zur Berechnung der Halbwertszeit",
          "Die Reihenfolge der Entdeckung radioaktiver Elemente"
          ],
          correctIndex: 1,
          explanation: "Eine Zerfallsreihe ist eine Kette aufeinanderfolgender radioaktiver Zerfälle. Beispiel: Die Uran-Radium-Reihe beginnt bei ²³⁸U und endet nach vielen Alpha- und Beta-Zerfällen beim stabilen ²⁰⁶Pb. Es gibt vier natürliche Zerfallsreihen (Uran-238, Uran-235, Thorium-232, Neptunium-237).",
          difficulty: 3,
        },
        {
          question: "²³⁸U zerfällt über mehrere Schritte zu ²⁰⁶Pb. Wie viele Alpha-Zerfälle sind mindestens nötig?",
          options: [
          "4 Alpha-Zerfälle",
          "6 Alpha-Zerfälle",
          "8 Alpha-Zerfälle",
          "10 Alpha-Zerfälle",
          "12 Alpha-Zerfälle"
          ],
          correctIndex: 2,
          explanation: "Die Massenzahl verringert sich von 238 auf 206, also um 32. Jeder Alpha-Zerfall verringert A um 4. Daher: 32/4 = 8 Alpha-Zerfälle. Die Ordnungszahl sinkt dabei von 92 auf 82, also um 10. Da 8 Alpha-Zerfälle Z um 16 senken, müssen 6 Beta-Zerfälle erfolgen (erhöhen Z um 6), um netto -10 zu erreichen.",
          difficulty: 2,
        },
        {
          question: "Welches Gas in der Uran-Zerfallsreihe ist besonders gesundheitsgefährdend?",
          options: [
          "Helium",
          "Wasserstoff",
          "Radon",
          "Sauerstoff",
          "Stickstoff"
          ],
          correctIndex: 2,
          explanation: "Radon-222 ist ein radioaktives Edelgas, das in der Uran-238-Zerfallsreihe entsteht. Als Gas kann es aus dem Boden in Gebäude eindringen und sich anreichern. Es ist ein Alpha-Strahler mit einer Halbwertszeit von 3,8 Tagen und die zweithäufigste Ursache für Lungenkrebs nach Rauchen.",
          difficulty: 2,
        },
        {
          question: "Was ist der Massendefekt eines Atomkerns?",
          options: [
          "Der Massenverlust durch radioaktiven Zerfall",
          "Die Differenz zwischen der Summe der Nukleonmassen und der tatsächlichen Kernmasse",
          "Die Masse der Elektronen in der Hülle",
          "Die Massenzunahme bei Kernfusion",
          "Der Fehler bei der Massenbestimmung"
          ],
          correctIndex: 1,
          explanation: "Der Massendefekt Δm ist die Differenz zwischen der Summe der Massen freier Protonen und Neutronen und der tatsächlichen Kernmasse. Diese \"fehlende\" Masse wurde bei der Kernbildung in Bindungsenergie umgewandelt: E_B = Δm × c². Je größer der Massendefekt, desto stabiler der Kern.",
          difficulty: 3,
        },
        {
          question: "Ein Helium-4-Kern hat eine Masse von 4,0015 u. Die Massen von Proton und Neutron betragen jeweils etwa 1,007 u und 1,009 u. Wie groß ist ungefähr der Massendefekt?",
          options: [
          "0,001 u",
          "0,010 u",
          "0,030 u",
          "0,050 u",
          "0,100 u"
          ],
          correctIndex: 2,
          explanation: "Summe der Einzelmassen: 2 × 1,007 u + 2 × 1,009 u = 2,014 u + 2,018 u = 4,032 u. Massendefekt: Δm = 4,032 u - 4,0015 u ≈ 0,030 u. Diese Masse entspricht der Bindungsenergie des Heliumkerns von etwa 28 MeV.",
          difficulty: 3,
        },
        {
          question: "Welche Einheit wird für die Strahlendosis (absorbierte Energie pro Masse) verwendet?",
          options: [
          "Becquerel (Bq)",
          "Gray (Gy)",
          "Curie (Ci)",
          "Sievert (Sv)",
          "Röntgen (R)"
          ],
          correctIndex: 1,
          explanation: "Gray (Gy) ist die SI-Einheit der Energiedosis: 1 Gy = 1 J/kg absorbierte Energie. Die Äquivalentdosis (biologische Wirkung) wird in Sievert (Sv) gemessen. Becquerel (Bq) ist die Einheit der Aktivität. Eine alte Einheit der Energiedosis ist Rad (1 Gy = 100 rad).",
          difficulty: 2,
        },
        {
          question: "Warum ist Alpha-Strahlung bei innerer Kontamination (Einatmen, Verschlucken) besonders gefährlich?",
          options: [
          "Weil sie sehr durchdringend ist",
          "Weil sie eine hohe Ionisierungsdichte auf kurzer Strecke hat",
          "Weil sie sehr weit reicht",
          "Weil sie nicht abgeschirmt werden kann",
          "Weil sie durch Magnetfelder nicht ablenkbar ist"
          ],
          correctIndex: 1,
          explanation: "Alpha-Teilchen haben eine sehr hohe Ionisierungsdichte, geben also ihre Energie auf sehr kurzer Strecke ab. Bei äußerer Bestrahlung werden sie von der Haut gestoppt (harmlos). Im Körper deponieren sie ihre gesamte Energie im Gewebe und verursachen schwere lokale Schäden (z.B. Lungenkrebs durch Radon).",
          difficulty: 2,
        },
        {
          question: "Welches Prinzip beschreibt die drei Grundregeln des Strahlenschutzes?",
          options: [
          "Zeit, Raum, Frequenz",
          "Abstand, Abschirmung, Aufenthaltsdauer",
          "Masse, Energie, Impuls",
          "Reflektion, Absorption, Transmission",
          "Alpha, Beta, Gamma"
          ],
          correctIndex: 1,
          explanation: "Die drei A's des Strahlenschutzes: 1) Abstand: Intensität nimmt mit 1/r² ab. 2) Abschirmung: Geeignete Materialien zwischen Quelle und Person. 3) Aufenthaltsdauer: Exposition minimieren. Diese Prinzipien reduzieren die Strahlendosis effektiv.",
          difficulty: 2,
        },
        {
          question: "Eine Probe von Jod-131 (Halbwertszeit 8 Tage) hat eine anfängliche Aktivität von 3200 Bq. Welche Aktivität hat sie nach 32 Tagen?",
          options: [
          "100 Bq",
          "200 Bq",
          "400 Bq",
          "800 Bq",
          "1600 Bq"
          ],
          correctIndex: 1,
          explanation: "32 Tage entsprechen 4 Halbwertszeiten (32/8 = 4). Nach jeder Halbwertszeit halbiert sich die Aktivität: 3200 → 1600 → 800 → 400 → 200 Bq. Oder: A = A₀ × (1/2)ⁿ = 3200 × (1/2)⁴ = 3200 × 1/16 = 200 Bq.",
          difficulty: 3,
        }
      ],
    }
  ],
};
