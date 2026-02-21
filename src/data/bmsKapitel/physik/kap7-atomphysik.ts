import type { Kapitel } from '../types';

export const physKap7: Kapitel = {
  id: 'phys-kap7',
  title: 'Atomphysik und Kernphysik',
  subject: 'physik',
  icon: '☢️',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ph-7-01',
      title: 'Atomkern und Kernkräfte',
      content: `Der Atomkern ist das Herz jedes Atoms — winzig (Durchmesser 10⁻¹⁴ bis 10⁻¹⁵ m) im Vergleich zum Atom (10⁻¹⁰ m), aber fast die gesamte Masse des Atoms in sich vereinend. Der Kern besteht aus Protonen (positiv geladen, Masse 1,673 × 10⁻²⁷ kg) und Neutronen (neutral, Masse 1,675 × 10⁻²⁷ kg). Protonen und Neutronen werden zusammen als Nukleonen bezeichnet. Die Massenzahl A = Anzahl der Nukleonen (Protonen + Neutronen); die Ordnungszahl Z = Anzahl der Protonen; die Neutronenzahl N = A − Z.

Aber warum halten sich die Protonen im Kern zusammen, obwohl sie sich elektrostatisch abstoßen? Die Antwort: die starke Kernkraft. Diese Wechselwirkung ist etwa 100-mal stärker als die elektromagnetische Kraft, wirkt aber nur auf sehr kurze Distanzen (~10⁻¹⁵ m = 1 Femtometer = 1 fm). Sie wirkt zwischen Protonen und Neutronen gleichermaßen (ladungsunabhängig) und hält den Kern zusammen. Bei zu vielen Protonen überwiegt die Coulomb-Abstoßung — der Kern wird instabil.

Das Konzept der Bindungsenergie pro Nukleon erklärt die Stabilität von Atomkernen. Die Ruhemasse des Kerns ist immer kleiner als die Summe der Massen der freien Nukleonen — der sogenannte Massendefekt Δm. Diese Massendifferenz ist die Bindungsenergie: E_B = Δm·c² (Einstein-Relation). Je mehr Bindungsenergie pro Nukleon, desto stabiler der Kern. Das Maximum liegt bei Eisen-56 (Fe-56) mit etwa 8,79 MeV pro Nukleon — das stabilste Nuklid. Leichtere Kerne gewinnen durch Fusion Energie (Richtung zu mehr Nukleonen, bis zum Eisenmaximum); schwerere Kerne durch Spaltung (ebenfalls Richtung Eisenmaximum).

Isotope sind Atome desselben Elements (gleiches Z), aber mit verschiedenen Neutronenzahlen (verschiedenes N und damit A). Zum Beispiel Wasserstoff: ¹H (Protium, 1 Proton, 0 Neutronen), ²H (Deuterium, 1 Proton, 1 Neutron), ³H (Tritium, 1 Proton, 2 Neutronen, radioaktiv). Sauerstoff: ¹⁶O (stabiles Hauptisotop), ¹⁸O (stabiles seltenes Isotop, genutzt als Tracer). Jedes Isotop ist durch das Symbol ᴬ_Z X definiert. Die Nuklidkarte (Segré-Diagramm) trägt alle bekannten Nuklide ein: stabile Nuklide bilden ein "Stabilitätstal", instabile liegen davorseits und zerfallen durch verschiedene Prozesse.

Für die Medizin besonders relevant sind die radioaktiven Isotope, die in der Diagnostik und Therapie eingesetzt werden. Technetium-99m (⁹⁹ᵐTc) ist das meistgenutzte Radionuklid der Nuklearmedizin: T₁/₂ = 6 Stunden (kurz genug für geringe Strahlenbelastung, lang genug für die Untersuchung), emittiert reine Gamma-Strahlung mit 140 keV (ideal für Szintigraphie-Kameras). Jod-131 (¹³¹I): T₁/₂ = 8 Tage; β⁻ und γ-Emitter; genutzt für Schilddrüsenszintigraphie und -therapie (Struma, Schilddrüsenkarzinom) — Jod wird selektiv von Schilddrüsenzellen aufgenommen. Fluor-18 (¹⁸F): T₁/₂ = 110 min; β⁺-Emitter; in Form von FDG (Fluordesoxyglukose) für PET — wird von stoffwechselaktiven Tumorzellen aufgenommen.`,
      lernziele: [
        'Aufbau des Atomkerns (Protonen, Neutronen, Massenzahl, Ordnungszahl) beschreiben',
        'Starke Kernkraft und ihre Eigenschaften erklären',
        'Bindungsenergie pro Nukleon und das Eisenmaximum verstehen',
        'Medizinisch relevante Isotope (⁹⁹ᵐTc, ¹³¹I, ¹⁸F) kennen',
      ],
      sections: [
        {
          heading: 'Atomkernaufbau und Kernkräfte',
          text: 'Atomkern: Protonen (Z) + Neutronen (N); A = Z + N. Kernradius: R = R₀·A^(1/3) mit R₀ ≈ 1,2 fm. Starke Kernkraft: anziehend; Reichweite ≈ 2 fm; ladungsunabhängig; ~100× stärker als Coulomb. Schwache Wechselwirkung: verantwortlich für β-Zerfall (n → p + e⁻ + antineutrino). Elektromagnetische Abstoßung der Protonen limitiert stabile Kerngröße (schwerste stabile Kerne: Bismut-209, Z=83). Magische Zahlen: 2, 8, 20, 28, 50, 82, 126 Protonen oder Neutronen → besonders stabile Schalen (Kernshalenmodell).',
          merksatz: 'A = Z + N; Z = Ordnungszahl (Protonen); Starke Kernkraft hält Nukleonen zusammen (Reichweite < 2 fm)',
        },
        {
          heading: 'Bindungsenergie und Massendefekt',
          text: 'Massendefekt: Δm = Z·m_p + N·m_n − m_Kern. Bindungsenergie: E_B = Δm·c². Bindungsenergie pro Nukleon: E_B/A (Maximum bei Fe-56 ≈ 8,79 MeV/Nukleon). Leichte Kerne (H, He): E_B/A ≈ 1–7 MeV → durch Fusion Energie gewinnen. Schwere Kerne (U, Th): E_B/A ≈ 7,5 MeV → durch Spaltung Energie gewinnen. Energiefreisetzung: ΔE = Δm·c². Beispiel: Fusion von 4 Protonen zu He-4 → ΔE ≈ 26,7 MeV (Sonne!).',
        },
        {
          heading: 'Medizinische Radioisotope',
          text: '⁹⁹ᵐTc: T₁/₂ = 6 h; γ 140 keV; Szintigraphie von Knochen, Lunge, Niere, Herz. ¹³¹I: T₁/₂ = 8 d; β⁻+γ; Schilddrüsentherapie (20–100 mCi) und Diagnostik (0,1–0,5 mCi). ¹⁸F-FDG: T₁/₂ = 110 min; β⁺; PET-CT für Onkologie, Neurologie, Kardiologie. Ga-68: T₁/₂ = 68 min; β⁺; DOTATATE-PET für neuroendokrine Tumoren. Lu-177: T₁/₂ = 6,7 d; β⁻+γ; Peptidrezeptorradiotherapie. Ra-223: T₁/₂ = 11,4 d; α; Knochenmetastasen bei Prostatakarzinom.',
        },
      ],
      merksätze: [
        'Kernaufbau: A = Z + N; Isotope: gleiches Z, verschiedenes N',
        'Bindungsenergie max. bei Fe-56 (8,79 MeV/Nukleon) — stabilstes Nuklid',
        'Medizin: ⁹⁹ᵐTc (Szintigraphie), ¹³¹I (Schilddrüse), ¹⁸F-FDG (PET)',
      ],
      altfrage: {
        question: 'Kohlenstoff-14 (¹⁴C) hat Z=6. Wie viele Protonen, Neutronen und Elektronen hat ein neutrales ¹⁴C-Atom? Und für was wird ¹⁴C-Radiokarbondatierung genutzt?',
        answer: 'A = 14, Z = 6 → N = A − Z = 14 − 6 = 8 Neutronen. Protonen: 6. Elektronen (neutral): 6. Radiokarbondatierung: ¹⁴C wird in der Atmosphäre durch kosmische Strahlung erzeugt und von Lebewesen aufgenommen. Nach dem Tod hört die ¹⁴C-Aufnahme auf; die Aktivität sinkt mit T₁/₂ = 5730 Jahren. Durch Messung der Restaktivität kann das Alter organischer Materialien bis ~50.000 Jahre bestimmt werden (wichtig in Archäologie und Paläontologie).',
      },
      klinischerBezug: 'In der Nuklearmedizin werden radioaktive Isotope sowohl diagnostisch (Szintigraphie, PET-CT) als auch therapeutisch eingesetzt. Die ¹³¹I-Therapie der Schilddrüse nutzt den physiologischen Jod-Stoffwechsel: Jodat/Jodid wird von NIS (Natrium-Jodid-Symporter) in Schilddrüsenzellen aufgenommen. Radioaktives Jod schädigt spezifisch Schilddrüsengewebe durch β-Strahlung (Reichweite 1–3 mm) ohne wesentliche Strahlung auf Nachbarorgane. Indikationen: Hyperthyreose (Morbus Basedow, Autonomie) und differenziertes Schilddrüsenkarzinom nach Thyreoidektomie. SIRT (Selektive interne Radiotherapie): ¹⁹⁰Yttrium-Mikrosphären werden in hepatische Gefäße injiziert und emittieren β-Strahlung direkt am Lebermetastasen-Ort.',
      selfTest: [
        {
          question: 'Welche Partikel befinden sich im Atomkern?',
          options: [
            'Elektronen und Protonen',
            'Protonen und Neutronen',
            'Neutronen und Elektronen',
            'Nur Protonen',
            'Quarks und Gluonen (direkt messbar)',
          ],
          correctIndex: 1,
          explanation: 'Der Atomkern besteht aus Protonen (positiv geladen, Z gibt ihre Anzahl an) und Neutronen (neutral, N = A − Z). Die Elektronen befinden sich in der Elektronenhülle, nicht im Kern. Technisch sind Protonen und Neutronen aus Quarks zusammengesetzt, aber auf der Ebene der Kernphysik werden sie als Elementarbausteine behandelt.',
          hints: ['Atom = Kern + Hülle. Kern enthält: Protonen + Neutronen.', 'Elektronen sind in der Hülle, nicht im Kern.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Nuklid hat die höchste Bindungsenergie pro Nukleon?',
          options: ['Wasserstoff-1 (¹H)', 'Helium-4 (⁴He)', 'Eisen-56 (⁵⁶Fe)', 'Uran-235 (²³⁵U)', 'Kohlenstoff-12 (¹²C)'],
          correctIndex: 2,
          explanation: 'Eisen-56 hat mit ca. 8,79 MeV pro Nukleon die höchste Bindungsenergie pro Nukleon aller Kerne — es ist das stabilste Nuklid. Leichtere Kerne können durch Fusion Energie freisetzen (bis zum Fe-56-Maximum); schwerere Kerne durch Spaltung. Fe-56 ist daher das "Endprodukt" nuklearer Brennprozesse in Sternen (Sternentwicklung).',
          hints: ['Auf der Bindungsenergie-pro-Nukleon-Kurve liegt das Maximum bei A ≈ 56.', 'Fe-56 = stabilstes Nuklid; Stern-Nukleosynthese endet bei Eisen.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Radionuklid wird am häufigsten in der Nuklearmedizin für Szintigraphie verwendet?',
          options: ['¹³¹I', '¹⁸F', '⁹⁹ᵐTc', '²³⁵U', '⁶⁰Co'],
          correctIndex: 2,
          explanation: '⁹⁹ᵐTc (Technetium-99m) ist das meistgenutzte Radionuklid der Nuklearmedizin. Vorteile: T₁/₂ = 6 h (kurz genug für geringe Strahlenbelastung, lang genug für Untersuchung), reine γ-Strahlung mit 140 keV (optimal für Gamma-Kamera), keine β-Strahlung (weniger Gewebebelastung), vielfältig markierbar. Wird täglich in Klinik aus ⁹⁹Mo/⁹⁹ᵐTc-Generatoren gewonnen (Mo-Kuh).',
          hints: ['Das meistgenutzte Radionuklid hat T₁/₂ = 6 h und emittiert reine Gamma.', '⁹⁹ᵐTc = Technetium-99 metastabil; "m" steht für metastabilen Isomerzustand.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was sind Isotope?',
          options: [
            'Atome mit gleicher Massenzahl aber verschiedener Ordnungszahl',
            'Atome des gleichen Elements (gleiches Z) mit verschiedener Neutronenzahl',
            'Kerne mit gleicher Neutronenzahl aber verschiedener Protonenzahl',
            'Zwei verschiedene Elemente mit gleicher Dichte',
            'Radioaktive Atome eines Elements',
          ],
          correctIndex: 1,
          explanation: 'Isotope = gleiche Ordnungszahl Z (gleiches Element = gleiche Protonenzahl), aber verschiedene Massenzahl A (und damit verschiedene Neutronenzahl N = A − Z). Beispiel: ¹²C, ¹³C, ¹⁴C — alle Kohlenstoff (Z=6), aber N = 6, 7, 8. ¹⁴C ist radioaktiv; ¹²C und ¹³C stabil. Isobare = gleiche A, verschiedene Z. Isotone = gleiche N, verschiedene Z.',
          hints: ['Iso-top = gleiche Stelle im Periodensystem (gleiche Z = gleiche Protonen).', 'Verschiedene Neutronenzahl → verschiedene Massenzahl → Isotop.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Wechselwirkung ist verantwortlich dafür, dass sich Protonen im Kern nicht gegenseitig abstoßen und auseinanderfliegen?',
          options: [
            'Gravitationskraft',
            'Schwache Wechselwirkung',
            'Starke Kernkraft',
            'Elektromagnetische Kraft',
            'Van-der-Waals-Kraft',
          ],
          correctIndex: 2,
          explanation: 'Die starke Kernkraft hält Protonen und Neutronen im Kern zusammen. Sie ist ca. 100-mal stärker als die Coulomb-Abstoßung zwischen Protonen, wirkt aber nur auf sehr kurze Distanzen (< 2 fm). Die schwache Wechselwirkung ist verantwortlich für den β-Zerfall. Die Gravitation ist auf Kernebene völlig vernachlässigbar (viel zu schwach).',
          hints: ['Protonen stoßen sich elektrostatisch ab — was ist stärker und kurzzeitiger?', 'Starke Kernkraft: stärker als Coulomb, kurzreichweitig (~2 fm).'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-7-02',
      title: 'Radioaktivität und Zerfallsgesetze',
      content: `Radioaktivität ist das spontane Umwandeln instabiler Atomkerne in andere Kerne unter Aussendung von Strahlung. Henri Becquerel entdeckte dieses Phänomen 1896 zufällig; Marie und Pierre Curie erforschten es systematisch und entdeckten Radium und Polonium. Radioaktivität ist ein statistisches Quantenphänomen — man kann für einen einzelnen Kern nicht vorhersagen, wann er zerfällt, aber für ein großes Ensemble von Kernen lässt sich die Zerfallswahrscheinlichkeit präzise angeben.

Beim **Alpha-Zerfall** (α-Zerfall) sendet der Kern ein Heliumkern-Teilchen (⁴₂He, bestehend aus 2 Protonen und 2 Neutronen) aus. Die Massenzahl A nimmt um 4 ab, die Ordnungszahl Z um 2. Beispiel: ²²⁶Ra → ²²²Rn + ⁴He. Alpha-Teilchen haben hohe Ionisierungsdichte (doppelte Ladung, relativ schwer), aber geringe Reichweite: wenige Zentimeter in Luft, einige Mikrometer in Gewebe. Ein Blatt Papier stoppt α-Strahlung vollständig. Intern gefährlich (Radon-Inhalation, Polonium-210-Vergiftung), extern weniger gefährlich.

Beim **Beta-Zerfall** wandelt sich ein Neutron in ein Proton um (β⁻) oder ein Proton in ein Neutron (β⁺). β⁻-Zerfall: n → p + e⁻ + ν̄_e (Antineutrino). Die Ordnungszahl Z erhöht sich um 1, A bleibt gleich. β⁺-Zerfall: p → n + e⁺ + ν_e (Neutrino). Z nimmt um 1 ab. Das positronenemittierende Radionuklid ¹⁸F (F-18) wird in der PET (Positronen-Emissionstomographie) genutzt: das Positron (e⁺) annihiliert mit einem Elektron und erzeugt zwei gegenläufige Gammaquanten zu je 511 keV — Koinzidenzdetektion ermöglicht 3D-Bildgebung.

Die **Gamma-Strahlung** (γ-Strahlung) ist keine eigenständige Zerfallsart, sondern begleitet α- und β-Zerfall, wenn der Tochterkern in einem angeregten Zustand verbleibt. Der angeregte Kern gibt Energie als hochenergetisches Photon (Gamma-Quant) ab. Gamma-Strahlung hat die größte Reichweite aller ionisierenden Strahlungsarten (cm bis m in Gewebe) und erfordert dichte Abschirmung (Blei, Beton).

Das **Zerfallsgesetz** beschreibt die zeitliche Abnahme der Kernanzahl: N(t) = N₀ · e^(−λt). λ ist die Zerfallskonstante [1/s]; sie ist charakteristisch für jedes Radionuklid. Die Halbwertszeit T₁/₂ ist die Zeit, nach der die Hälfte aller Kerne zerfallen ist: T₁/₂ = ln(2)/λ = 0,693/λ. Nach n Halbwertszeiten ist noch N₀/2ⁿ des Ausgangsmaterials vorhanden. Die **Aktivität** A(t) = λ·N(t) = A₀·e^(−λt) gibt die Anzahl der Zerfälle pro Sekunde an, gemessen in Becquerel (Bq = 1 Zerfall/s). Früher: 1 Curie (Ci) = 3,7 × 10¹⁰ Bq (Aktivität von 1 g Radium).

Das Zerfallsgesetz ist exponentiell — ein fundamentales Merkmal stochastischer Zerfallsprozesse. In der Medizin: ⁹⁹ᵐTc (T₁/₂ = 6 h): nach 24 h (4 Halbwertszeiten) verbleiben noch (½)⁴ = 6,25% der Anfangsaktivität — die Strahlenbelastung nimmt entsprechend ab. ¹³¹I (T₁/₂ = 8 Tage): nach 56 Tagen (7 Halbwertszeiten) verbleiben noch (½)⁷ ≈ 0,8% — dann ist die Aktivität vernachlässigbar gering.`,
      lernziele: [
        'Alpha-, Beta- und Gamma-Zerfall beschreiben und Zerfallsgleichungen aufstellen',
        'Zerfallsgesetz N(t) = N₀·e^(−λt) und Halbwertszeit anwenden',
        'Aktivität in Becquerel berechnen',
        'PET-Prinzip (β⁺-Zerfall, Annihilation, Koinzidenzdetektion) erklären',
      ],
      sections: [
        {
          heading: 'Alpha-, Beta- und Gamma-Zerfall',
          text: 'α-Zerfall: ᴬ_Z X → ᴬ⁻⁴_{Z-2}Y + ⁴₂He. α-Teilchen: schwer, hohe Ionisierungsdichte, kurze Reichweite (cm in Luft). Intern sehr schädlich. β⁻-Zerfall: ᴬ_Z X → ᴬ_{Z+1}Y + e⁻ + antineutrino. β⁺-Zerfall: ᴬ_Z X → ᴬ_{Z-1}Y + e⁺ + neutrino. β-Teilchen: mittel (mm bis cm in Gewebe). γ-Strahlung: hochenergetische Photonen (keV bis MeV); große Reichweite; begleitet α/β. Elektroneneinfang: Alternativprozess zu β⁺. Nachweis: Geiger-Müller-Zählrohr, Szintillator, Halbleiterdetektor.',
          merksatz: 'α-Zerfall: A−4, Z−2; β⁻: Z+1; β⁺: Z−1; γ: A,Z unverändert',
        },
        {
          heading: 'Zerfallsgesetz und Halbwertszeit',
          text: 'N(t) = N₀·e^(−λt). Halbwertszeit: T₁/₂ = ln(2)/λ ≈ 0,693/λ. Nach n×T₁/₂: N = N₀·(½)ⁿ. Aktivität: A = λ·N [Bq = s⁻¹]. 1 Ci = 3,7 × 10¹⁰ Bq. Biologische Halbwertszeit: Zeit bis 50% des Radionuklids metabolisch ausgeschieden. Effektive Halbwertszeit: T_eff = (T_phys × T_bio)/(T_phys + T_bio) — immer kleiner als beide einzelnen HWZ. Für ¹³¹I: T_phys = 8 d, T_bio ≈ 120 d (Schilddrüse) → T_eff ≈ 7,5 d.',
        },
        {
          heading: 'PET und Beta-Plus-Zerfall',
          text: 'β⁺-Zerfall (Positronemitter): p → n + e⁺ + ν_e. Positron e⁺ annihiliert mit Elektron: e⁺ + e⁻ → 2γ mit je 511 keV (gegenläufig). Koinzidenz-Detektion: Beide Gammaquanten werden simultan in gegenüberliegenden Detektoren registriert → Annihilationsort liegt auf der Verbindungslinie. 3D-Rekonstruktion: wie CT-Schichten. Wichtige PET-Tracer: ¹⁸F-FDG (Glukosestoffwechsel), ¹⁸F-Cholin (Prostata-CA), ⁶⁸Ga-DOTATATE (neuroendokrine Tumoren), ⁸²Rb (Herzperfusion). PET-CT: Kombination anatomische (CT) + funktionelle (PET) Information.',
        },
      ],
      merksätze: [
        'Zerfallsgesetz: N(t) = N₀·e^(−λt); T₁/₂ = ln(2)/λ; nach n HWZ: N = N₀·(½)ⁿ',
        'β⁺-Zerfall → Positron → Annihilation → 2×511 keV → PET-Koinzidenzdetektion',
        'Aktivität: A = λ·N [Becquerel = Zerfall/s]',
      ],
      altfrage: {
        question: 'Eine Patientenschilddrüse wurde mit 400 MBq ¹³¹I (T₁/₂ = 8 Tage) behandelt. Welche Aktivität verbleibt nach 32 Tagen? Wie viele Halbwertszeiten sind das?',
        answer: 'n = 32 d / 8 d = 4 Halbwertszeiten. A(t) = A₀ × (½)ⁿ = 400 MBq × (½)⁴ = 400 × 1/16 = 25 MBq. Nach 32 Tagen sind noch 25 MBq Aktivität vorhanden. Zum Vergleich: Die natürliche Hintergrundaktivität im Körper beträgt etwa 100 Bq/kg → 70 kg × 100 = 7000 Bq = 0,007 MBq. Die Restaktivität ist also immer noch deutlich über dem Hintergrundsignal.',
      },
      klinischerBezug: 'PET-CT (Positronen-Emissionstomographie kombiniert mit Computertomographie) ist das modernste Werkzeug der Onkologie für Staging, Therapieplanung und Verlaufskontrolle. ¹⁸F-FDG (Fluordesoxyglukose) wird von Tumorzellen mit hohem Glukosestoffwechsel (Warburg-Effekt) bevorzugt aufgenommen und akkumuliert. Ein heißer Herd im PET-Bild weist auf erhöhten Metabolismus hin (Tumor, Entzündung, Infekt). Falsch-positive: Entzündungsreaktionen (Sarkoidose, Post-COVID-19), physiologische Anreicherung (Gehirn, Herzmuskel, Harnleiter). Falsch-negative: Mucinöse Tumoren (geringe FDG-Aufnahme), lobuläres Mammakarzinom. Neue Tracer wie PSMA-PET (⁶⁸Ga-PSMA) revolutionieren das Prostatakarzinom-Staging mit höherer Sensitivität als klassische Bildgebung.',
      selfTest: [
        {
          question: 'Welche Aussage zum Alpha-Zerfall ist korrekt?',
          options: [
            'Alpha-Teilchen sind identisch mit Elektronen',
            'Alpha-Zerfall erhöht die Ordnungszahl Z um 1',
            'Ein Alpha-Teilchen besteht aus 2 Protonen und 2 Neutronen (⁴He-Kern)',
            'Alpha-Strahlung hat die größte Reichweite',
            'Alpha-Zerfall ist ein Zerfall der Elektronenhülle',
          ],
          correctIndex: 2,
          explanation: 'Alpha-Teilchen sind Helium-4-Kerne (⁴He): 2 Protonen + 2 Neutronen. Beim α-Zerfall nimmt A um 4 ab, Z um 2. Alpha-Teilchen haben die kürzeste Reichweite (cm in Luft, μm in Gewebe) und die höchste Ionisierungsdichte. Ein Blatt Papier oder die äußere Hautschicht stoppt α-Strahlung vollständig.',
          hints: ['Alpha = Helium-Kern. He hat Z=2, A=4.', 'α-Zerfall: Z−2, A−4.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine radioaktive Probe hat eine Halbwertszeit von 10 Stunden und anfänglich 1000 Bq Aktivität. Welche Aktivität hat sie nach 40 Stunden?',
          options: ['500 Bq', '250 Bq', '125 Bq', '62,5 Bq', '31,25 Bq'],
          correctIndex: 3,
          explanation: '40 h / 10 h = 4 Halbwertszeiten. A = A₀ × (½)⁴ = 1000 × 1/16 = 62,5 Bq. Nach jeder Halbwertszeit halbiert sich die Aktivität: 1000 → 500 → 250 → 125 → 62,5 Bq.',
          hints: ['n = Zeit/T₁/₂ = 40/10 = 4. A = A₀ × (½)⁴.', '(½)⁴ = 1/16; 1000/16 = 62,5 Bq.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist ¹⁸F-FDG für die PET-Onkologie so nützlich?',
          options: [
            'Weil Tumorzellen kein FDG aufnehmen und daher "kalt" erscheinen',
            'Weil FDG durch erhöhten Glukosestoffwechsel von Tumoren akkumuliert wird (Warburg-Effekt)',
            'Weil ¹⁸F α-Strahlung emittiert',
            'Weil FDG an Tumormarker bindet',
            'Weil ¹⁸F eine sehr lange Halbwertszeit hat',
          ],
          correctIndex: 1,
          explanation: 'FDG (2-Fluordeoxyglukose) wird wie Glukose aufgenommen, aber nicht weiter verstoffwechselt (kein Fluor in Glykolyse) → Akkumulation in stoffwechselaktiven Zellen. Tumorzellen haben oft erhöhten Glukosestoffwechsel (Warburg-Effekt: aerobe Glykolyse) → mehr FDG-Aufnahme → erhöhtes PET-Signal. T₁/₂ ¹⁸F = 110 min ist ideal: kurz genug für geringe Strahlenbelastung, lang genug für Produktion und Untersuchung.',
          hints: ['Warburg-Effekt: Tumorzellen nutzen Glykolyse auch bei ausreichend Sauerstoff.', 'FDG = Glukose-Analogon → hoch aufgenommen wo viel Glukose verbraucht wird.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was unterscheidet β⁻ von β⁺-Zerfall?',
          options: [
            'β⁻ emittiert ein Positron, β⁺ ein Elektron',
            'β⁻: Neutron → Proton + Elektron; β⁺: Proton → Neutron + Positron',
            'β⁻ hat eine längere Halbwertszeit als β⁺',
            'β⁺ erhöht Z um 1, β⁻ erniedrigt Z um 1',
            'Es gibt keinen Unterschied in der Strahlenbiologie',
          ],
          correctIndex: 1,
          explanation: 'β⁻-Zerfall: n → p + e⁻ + ν̄_e; Z erhöht sich um 1. β⁺-Zerfall: p → n + e⁺ + ν_e; Z erniedrigt sich um 1. In beiden Fällen: A unverändert. Das emittierte Positron beim β⁺-Zerfall annihiliert mit einem Elektron → 2 Gamma-Photonen zu 511 keV → PET-Prinzip.',
          hints: ['β⁻ = Elektronen; β⁺ = Positronen. Welcher Kernwandel findet statt?', 'n→p: Z steigt (+1); p→n: Z sinkt (−1).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Einheit ist Becquerel?',
          options: [
            'Joule pro Kilogramm (J/kg)',
            'Joule mal Sekunde (J·s)',
            'Ein radioaktiver Zerfall pro Sekunde',
            'Gray (J/kg absorbierte Dosis)',
            'Sievert (Äquivalentdosis)',
          ],
          correctIndex: 2,
          explanation: 'Becquerel (Bq): 1 Bq = 1 radioaktiver Zerfall pro Sekunde. A = λ·N [Bq]. 1 Ci (Curie) = 3,7 × 10¹⁰ Bq (historische Einheit). Typische Aktivitäten: PET: 100–400 MBq; Szintigraphie: 100–800 MBq; ¹³¹I-Therapie: 2–30 GBq. Natürliche Radioaktivität im menschlichen Körper (hauptsächlich ⁴⁰K): ca. 6000 Bq.',
          hints: ['Becquerel = Aktivität = Zerfälle pro Zeiteinheit.', '1 Bq = 1/s = 1 Zerfall/Sekunde.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-7-03',
      title: 'Ionisierende Strahlung und Strahlenschutz',
      content: `Ionisierende Strahlung ist Strahlung mit ausreichend Energie, um Elektronen aus Atomen herauszulösen — also Ionen zu erzeugen. In biologischen Systemen können ionisierte Moleküle Kettenreaktionen auslösen, die zur DNA-Schädigung führen. Das Verständnis von Dosisgrößen und Strahlenschutzprinzipien ist für jeden Arzt essentiell, der diagnostische oder therapeutische Strahlung einsetzt.

Die **Energiedosis** D = E/m [Gray = J/kg] gibt an, wie viel Strahlenenergie pro Kilogramm Masse absorbiert wird. 1 Gray = 1 Joule/kg. Dies ist die physikalische Dosis und macht keine Aussage über die biologische Wirkung. Verschiedene Strahlungsarten haben unterschiedliche biologische Wirksamkeit, da sie unterschiedlich Energie deponieren (spezifische Ionisierungsdichte = LET, Linear Energy Transfer).

Die **Äquivalentdosis** H = D · w_R [Sievert] berücksichtigt die unterschiedliche biologische Wirksamkeit. Der Strahlungs-Wichtungsfaktor w_R hängt von der Strahlungsart ab: Photonen (γ, Röntgen) und Elektronen: w_R = 1; Neutronen: w_R = 5–20 (je nach Energie); Alpha-Teilchen: w_R = 20. Daher: 1 Gy α-Strahlung hat die biologische Wirkung von 20 Gy Röntgenstrahlung! Stochastische Effekte (Krebs, genetische Mutationen) sind proportional zur Dosis (kein Schwellenwert); deterministische Effekte (Strahlenkrankheit, Hauterythem) treten erst ab Schwellendosen auf.

Die **effektive Dosis** E = Σ(w_T · H_T) [Sievert] berücksichtigt zusätzlich die unterschiedliche Strahlungsempfindlichkeit verschiedener Organe und Gewebe. Der Gewebe-Wichtungsfaktor w_T ist: Gonaden 0,08; Brust 0,12; Dickdarm 0,12; Lunge 0,12; Knochenmark 0,12; restliche Gewebe 0,12; Schilddrüse 0,04; Gehirn 0,01 usw. Summe aller w_T = 1. Die effektive Dosis ermöglicht den Vergleich verschiedener Untersuchungen und die Abschätzung des Krebsrisikos.

Typische effektive Dosen: Röntgen-Thorax: 0,02–0,04 mSv; Mammographie: 0,4 mSv; CT Schädel: 2 mSv; CT Thorax-Abdomen: 10–20 mSv; Koronarangiographie: 5–15 mSv; natürliche Hintergrundstrahlung Deutschland: ca. 2,1 mSv/Jahr (Radon dominiert); Transatlantikflug: 0,05 mSv; Fukushima-Reaktorunfall: 0,5–1 mSv Durchschnittsdosis für Bevölkerung Japans.

Die drei **Strahlenschutzprinzipien**: (1) **Abstand**: Intensität nimmt mit r² ab (1/r²-Gesetz). Verdopplung des Abstands → Viertelung der Dosis. (2) **Zeit**: Dosis ~ Expositionszeit. Kürzere Aufenthaltsdauer im Strahlenfeld → geringere Dosis. (3) **Abschirmung**: je nach Strahlungsart verschieden. Alpha: Papier, Haut. Beta: Plexiglas, Aluminium (kein Blei → Bremsstrahlung). Gamma/Röntgen: Blei, Beton, Wasser. Das **ALARA-Prinzip** (As Low As Reasonably Achievable) fordert, die Dosis so weit wie vernünftigerweise erreichbar zu senken, auch unterhalb gesetzlicher Grenzwerte.`,
      lernziele: [
        'Energiedosis (Gray) und Äquivalentdosis (Sievert) unterscheiden und berechnen',
        'Strahlungs-Wichtungsfaktoren (w_R) für verschiedene Strahlungsarten kennen',
        'Effektive Dosis und Organsensitivitäten erklären',
        'Drei Strahlenschutzprinzipien (Abstand, Zeit, Abschirmung) anwenden',
      ],
      sections: [
        {
          heading: 'Dosisgrößen und Einheiten',
          text: 'Energiedosis: D = E/m [Gy = J/kg]. Äquivalentdosis: H = D·w_R [Sv]. Strahlungswichtungsfaktor w_R: Photonen/Elektronen = 1; Neutronen = 5–20; Alpha = 20. Effektive Dosis: E = Σ(w_T·H_T) [Sv]. Grenzwerte: beruflich exponierte Personen: 20 mSv/Jahr; allgemeine Bevölkerung: 1 mSv/Jahr. Frühhistorisch: 1 Rem = 10 mSv; 1 Rad = 10 mGy. Strahlenkrankheit (Ganzkörper): 1 Gy LD50 = 3–5 Gy (ohne Behandlung) / 7–8 Gy (mit Behandlung).',
          merksatz: 'Gray (Gy) = physikalische Dosis [J/kg]; Sievert (Sv) = biologische Dosis = Gy × w_R',
        },
        {
          heading: 'Typische medizinische Dosen',
          text: 'Röntgen-Thorax: 0,02–0,04 mSv. Mammographie: 0,4 mSv. Röntgen-Abdomen: 1 mSv. CT Kopf: 2 mSv. CT Thorax-Abdomen: 10–20 mSv. Koronarangiographie: 5–15 mSv. PET-CT (FDG): 8–14 mSv. ¹³¹I-Therapie: 10–200 mSv (organspezifisch). Strahlentherapie (Fraktion): 1,8–2 Gy lokal. Natürliche Hintergrundstrahlung: 2,1 mSv/Jahr (DE). Höhenstrahlung Piloten: bis 6 mSv/Jahr. Radon: ca. 1,1 mSv/Jahr in DE (variabel je nach Region).',
        },
        {
          heading: 'Strahlenschutz — ALARA-Prinzip',
          text: 'Abstand: I ~ 1/r² (Strahlungsintensität nimmt mit Quadrat des Abstands ab). 3-facher Abstand → 9-fach geringere Dosis. Zeit: D ~ t (Dosis proportional zur Expositionszeit). Abschirmung: α → Papier/Haut; β → Plexiglas (kein Blei wegen Bremsstrahlung!); γ/Röntgen → Blei (HVL Blei für 140 keV ≈ 0,3 mm; für 511 keV ≈ 4 mm). ALARA: Keine Strahlenexposition ohne medizinische Indikation; Nutzen muss Risiko überwiegen; Schwangerschaft besonders geschützt (Fetus hochsensibel in 1.–3. Monat).',
        },
      ],
      merksätze: [
        'D [Gy] = E/m; H [Sv] = D × w_R; w_R(α) = 20; w_R(γ/β) = 1',
        'ALARA: Abstand (1/r²), Zeit (proportional), Abschirmung (materialspezifisch)',
        'Grenzwerte: beruflich 20 mSv/Jahr; Bevölkerung 1 mSv/Jahr',
      ],
      altfrage: {
        question: 'Ein Strahlenarbeiter absorbiert 10 mGy Alpha-Strahlung und 50 mGy Röntgenstrahlung. Welche Gesamtäquivalentdosis empfängt er?',
        answer: 'Äquivalentdosis α: H_α = D_α × w_R(α) = 10 mGy × 20 = 200 mSv. Äquivalentdosis Röntgen: H_γ = D_γ × w_R(γ) = 50 mGy × 1 = 50 mSv. Gesamtäquivalentdosis: H_ges = 200 + 50 = 250 mSv. Zum Vergleich: Der Grenzwert für beruflich Strahlenexponierte beträgt 20 mSv/Jahr — 250 mSv übersteigt den Jahresgrenzwert um das 12,5-fache! Sofortiger Entzug aus dem Strahlenbereich wäre notwendig.',
      },
      klinischerBezug: 'In der Radiologie ist die rechtfertigende Indikation (Nutzen übersteigt Risiko) und das ALARA-Prinzip gesetzlich vorgeschrieben. Das Strahlenrisiko eines CT-Thorax (ca. 10 mSv) entspricht einem Krebsrisiko-Anstieg von etwa 1 in 2000 (basierend auf Lineares-Schwellen-Modell). Bei einer 70-jährigen Patientin mit Lungenkarzinom-Verdacht ist dieses Risiko akzeptabel. Bei einem 5-jährigen Kind wäre der gleiche CT ohne dringende Indikation nicht zu vertreten (Kinder radiosensitiver, längere Lebenserwartung für Latenzzeit). Ultraschall und MRI sind Strahlen-alternative Bildgebungsmodalitäten, die bei Kindern und Schwangeren bevorzugt eingesetzt werden sollten.',
      selfTest: [
        {
          question: 'Welche Einheit ist die SI-Einheit für absorbierte Strahlendosis (Energiedosis)?',
          options: ['Sievert (Sv)', 'Becquerel (Bq)', 'Gray (Gy = J/kg)', 'Rem', 'Curie (Ci)'],
          correctIndex: 2,
          explanation: 'Gray (Gy) = Joule/Kilogramm ist die SI-Einheit für die absorbierte Dosis (Energiedosis). 1 Gy = 1 J/kg Absorptionsenergie. Sievert (Sv) ist die Einheit für die Äquivalentdosis (berücksichtigt biologische Wirksamkeit). Historisch: 1 Rad = 0,01 Gy = 10 mGy; 1 Rem = 0,01 Sv = 10 mSv.',
          hints: ['Gy = physikalische Dosis; Sv = biologische Dosis.', 'Gray = Joule pro Kilogramm (Energie pro Masse).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welchen Strahlungs-Wichtungsfaktor w_R hat Alpha-Strahlung?',
          options: ['w_R = 1', 'w_R = 5', 'w_R = 10', 'w_R = 20', 'w_R = 100'],
          correctIndex: 3,
          explanation: 'Alpha-Teilchen haben w_R = 20 — die biologisch wirksamste der häufigen Strahlungsarten. Der hohe Wert spiegelt die hohe Ionisierungsdichte (hoher LET) wider: Alpha-Teilchen deponieren ihre gesamte Energie auf sehr kurzer Strecke und erzeugen damit dichte Ionisationsspuren, die besonders effektiv DNA-Doppelstrangbrüche erzeugen. Photonen/Elektronen: w_R = 1.',
          hints: ['α-Strahlung: stark ionisierend, kurze Reichweite, hoher LET → hoher w_R.', 'w_R(α) = 20; w_R(γ) = 1.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches Strahlenschutzprinzip erklärt, warum ein Radiologe möglichst weit vom Röntgentisch stehen sollte?',
          options: [
            'Zeitprinzip: kürzere Expositionszeit',
            'Abstandsprinzip: Intensität nimmt mit 1/r² ab',
            'Abschirmungsprinzip: Gewebe schirmt Strahlung ab',
            'ALARA: Dosis so gering wie möglich halten',
            'Kollimationsprinzip: Einblendung des Nutzstrahlenbündels',
          ],
          correctIndex: 1,
          explanation: 'Das Abstandsprinzip: Die Strahlungsintensität nimmt proportional zum Quadrat des Abstands ab (1/r²-Gesetz). Ein Radiologe in 2 m Abstand empfängt nur (1/2)² = 1/4 der Dosis im Vergleich zu 1 m Abstand. Bei 3 m nur 1/9. Einfache und effektive Schutzmaßnahme. In der Fluoroskopie (Durchleuchtung) ist maximaler Abstand vom Patienten besonders wichtig, da die Streustrahlung vom Patienten ausgeht.',
          hints: ['Intensität ~ 1/r². Verdoppelung Abstand → Viertelung Intensität.', 'Je weiter weg, desto geringer die Dosis — einfachstes Schutzprinzip.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum sollte Beta-Strahlung NICHT mit Blei abgeschirmt werden?',
          options: [
            'Weil Blei Beta-Strahlung verstärkt',
            'Weil Beta-Strahlung Blei radioaktiv macht',
            'Weil beim Abbremsen von Beta-Teilchen in schwerem Material Bremsstrahlung (Röntgen) entsteht',
            'Weil Blei zu schwer ist',
            'Weil Blei Beta-Strahlung nicht absorbiert',
          ],
          correctIndex: 2,
          explanation: 'Beim Abbremsen energiereicher Beta-Teilchen in hochatomigen Materialien (wie Blei, Z=82) entsteht Bremsstrahlung — eine Art Röntgenstrahlung. Diese sekundäre Röntgenstrahlung kann gefährlicher sein als die originale Beta-Strahlung! Geeignete Abschirmung für Beta: Plexiglas oder Aluminium (niedrige Ordnungszahl → wenig Bremsstrahlung). Gamma wird dann mit Blei abgeschirmt.',
          hints: ['Bremsstrahlung = Röntgenstrahlung, die beim Abbremsen von Elektronen entsteht.', 'Blei hat hohe Ordnungszahl → viel Bremsstrahlung. Plexiglas hat niedrige Z → wenig.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist das ALARA-Prinzip im Strahlenschutz?',
          options: [
            'Abstand, Licht, Aktivität, Rotation, Abschirmung',
            'As Low As Reasonably Achievable — Strahlenexposition so gering wie vernünftigerweise erreichbar',
            'Alle Laborwerte müssen regelmäßig überprüft werden',
            'Alpha, Larmor, Aktivität, Röntgen, Alpha-Strahlung',
            'Es ist ein Grenzwert von 1 mSv/Jahr',
          ],
          correctIndex: 1,
          explanation: 'ALARA = "As Low As Reasonably Achievable" — Strahlenexposition muss so gering wie vernünftigerweise erreichbar gehalten werden. Nicht nur gesetzliche Grenzwerte einhalten, sondern aktiv bemüht sein, Dosen zu minimieren. Praktisch: Indikationsstellung hinterfragen; Niedrigdosis-Protokolle bevorzugen; Alternativen (Ultraschall, MRI) erwägen; Strahlenschutzkleidung tragen; Abstand halten.',
          hints: ['ALARA = englisches Akronym. "As Low As Reasonably Achievable."', 'Nicht nur Grenzwerte einhalten — aktiv minimieren.'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-7-04',
      title: 'Kernspaltung, Kernfusion und medizinische Physik',
      content: `Die Energie des Atomkerns — Kernenergie — ist eine der mächtigsten bekannten Energiequellen. Sie beruht auf dem Massendefekt und der Einstein-Relation E = mc². Schon kleine Massen ergeben enorme Energien: 1 g Uran-235, vollständig gespalten, liefert die Energie von 2,5 Tonnen Kohle. Die zwei Hauptprozesse sind Kernspaltung (schwere Kerne → mittlere Kerne) und Kernfusion (leichte Kerne → schwerere Kerne).

Die **Kernspaltung** wurde 1938 von Otto Hahn, Lise Meitner und Fritz Straßmann entdeckt. Wenn ein thermisches Neutron (langsames Neutron) auf ²³⁵U trifft, wird der Kern hochinstabil und zerfällt in zwei mittlere Tochterkerne und 2–3 freie Neutronen: ²³⁵U + n → ⁹²Kr + ¹⁴¹Ba + 3n + ΔE (≈ 200 MeV pro Spaltung). Die freigesetzten Neutronen können weitere ²³⁵U-Kerne spalten — eine Kettenreaktion. Im Kernreaktor wird diese Reaktion kontrolliert (Steuerstäbe aus Bor oder Cadmium absorbieren überschüssige Neutronen); in einer Atombombe unkontrolliert (superkritische Masse).

Die **Kernfusion** ist der Prozess, der die Sonne und alle Sterne antreibt. Im Sonnenkern fusionieren vier Protonen schrittweise zu einem Helium-4-Kern: 4 ¹H → ⁴He + 2e⁺ + 2ν_e + ΔE (26,7 MeV). Auf der Erde versucht man die Deuterium-Tritium-Fusion zu nutzen: ²H + ³H → ⁴He + n + 17,6 MeV. Dafür müssen Temperaturen von über 100 Millionen Kelvin erreicht werden (Plasma), was bisher nur in Experimenten (Tokamak-Reaktoren wie ITER) gelingt. Fusion hat theoretisch enormen Vorteil: mehr Energie pro Reaktion als Spaltung, keine hochradioaktiven langlebigen Spaltprodukte, Rohstoff (Deuterium) aus Meerwasser.

Der **Massendefekt** und die Äquivalenz von Masse und Energie: ΔE = Δm·c² (Einstein, 1905). Bei der Kernspaltung von ²³⁵U beträgt der Massendefekt ca. 0,2 amu pro Spaltung: ΔE = 0,2 × 1,66 × 10⁻²⁷ kg × (3 × 10⁸ m/s)² ≈ 3 × 10⁻¹¹ J = 190 MeV. Dies entspricht der kinetischen Energie der Spaltprodukte — riesig im Vergleich zur chemischen Reaktionsenergie (einige eV).

In der **medizinischen Physik** werden verschiedenste Strahlenarten für Diagnose und Therapie eingesetzt. Röntgenstrahlung (20–150 keV) dringt durch weiche Gewebe und wird von Knochen absorbiert — klassisches Röntgenbild. CT nutzt Röntgen aus 360° für 3D-Rekonstruktion. Gamma-Kamera detektiert γ-Photonen von Radiopharmaka im Körper (Szintigraphie). Die **Strahlentherapie** nutzt ionisierende Strahlung zur Tumorzerstörung: Photonenstrahlung (Linearbeschleuniger), Elektronenstrahlung (oberflächliche Tumoren), Protonentherapie (Bragg-Peak — präzise Energiedeposition am Ende der Reichweite), **Gamma Knife** (viele 60Co-Quellen konvergieren auf Zielvolumen) und BNCT (Bor-Neutroneneinfangtherapie). Das MRI ohne ionisierende Strahlung ergänzt die Bildgebung und wird zunehmend für Bestrahlungsplanung genutzt (MR-Linac).`,
      lernziele: [
        'Kernspaltung (Kettenreaktion, Energiefreisetzung) beschreiben',
        'Kernfusion und die Voraussetzungen (Plasma, Temperatur) erklären',
        'Massendefekt und Einstein-Relation E = mc² anwenden',
        'Medizinische Strahlungsanwendungen (Röntgen, CT, PET, Strahlentherapie) überblicken',
      ],
      sections: [
        {
          heading: 'Kernspaltung und Kernfusion',
          text: 'Kernspaltung: ²³⁵U + n → Spaltprodukte + 2–3n + ΔE ≈ 200 MeV. Kettenreaktion: k > 1 (superkritisch = Bombe), k = 1 (kritisch = Reaktor), k < 1 (unterkritisch). Kernfusion: ²H + ³H → ⁴He + n + 17,6 MeV. Bedingung: T > 10⁸ K (Plasma). Energievergleich: Fusion/Spaltung (MeV) >> Chemie (eV). Vorteil Fusion: mehr Energie/Masse, kein Langzeit-Atommüll, Rohstoff aus Meerwasser. ITER (Cadarache, Frankreich): Tokamak-Fusionsreaktor, Inbetriebnahme ~2025–2035.',
          merksatz: 'Kernspaltung: ²³⁵U + n → ~200 MeV; Fusion: ²H + ³H → ⁴He + n + 17,6 MeV',
        },
        {
          heading: 'Massendefekt und E = mc²',
          text: 'Einstein: E = mc². Massendefekt Δm → Bindungsenergie E_B = Δm·c². Beispiel: 1 amu = 1,66 × 10⁻²⁷ kg. E = 1 amu × c² = 931,5 MeV. Bei Kernspaltung: Δm ≈ 0,2 amu → ΔE ≈ 0,2 × 931,5 ≈ 186 MeV ≈ 200 MeV (übliche Näherung). Vergleich: Verbrennung von 1 C-Atom → ΔE ≈ 4 eV (50 Millionen Mal weniger!). Auch Paarbildung (γ → e⁺ + e⁻) und Annihilation (e⁺ + e⁻ → 2γ) sind direkte Anwendungen von E = mc².',
        },
        {
          heading: 'Medizinische Strahlenanwendungen',
          text: 'Diagnostik: Röntgen (20–150 keV), CT, Mammographie, Fluoroskopie. Nuklearmedizin: Szintigraphie (Gamma-Kamera), PET-CT (β⁺-Emitter). Therapie: externe Strahlentherapie (Linearbeschleuniger, 6–15 MV Photonen; Elektronen); Brachytherapie (Seedimplantation, z.B. ¹²⁵I-Seeds für Prostatakarzinom); Protonentherapie (Bragg-Peak, präzise Tiefendeposition); Schwerionentherapie (Kohlenstoff-Ionen, HIT Heidelberg). Gamma-Knife: 201 ⁶⁰Co-Quellen konvergieren auf Zielvolumen (intrakranielle Tumore). MR-Linac: MRI + Linearbeschleuniger kombiniert für Echtzeit-Bildführung.',
        },
      ],
      merksätze: [
        'E = mc²; 1 amu = 931,5 MeV; Kernspaltung ≈ 200 MeV; Fusion ≈ 17,6 MeV',
        'Protonentherapie: Bragg-Peak = präzise Energiedeposition im Tumor, wenig Schaden davor/dahinter',
        'MRI: keine ionisierende Strahlung; CT/Röntgen/PET: ionisierende Strahlung',
      ],
      altfrage: {
        question: 'Ein 1 kg-Stück U-235 wird vollständig gespalten. Jede Spaltung setzt ca. 200 MeV frei, und in 1 kg U-235 sind ca. 2,56 × 10²⁴ Atome. Wie viel Energie wird freigesetzt? (1 MeV = 1,6 × 10⁻¹³ J)',
        answer: 'Energie pro Spaltung: E₁ = 200 MeV × 1,6 × 10⁻¹³ J/MeV = 3,2 × 10⁻¹¹ J. Gesamtenergie: E_ges = 3,2 × 10⁻¹¹ J × 2,56 × 10²⁴ = 8,19 × 10¹³ J ≈ 8,2 × 10¹³ J = 82 Terajoule. Zum Vergleich: Verbrennung von 1 kg Kohle liefert ca. 3 × 10⁷ J = 30 MJ. 1 kg U-235 liefert 82 × 10¹² J / 3 × 10⁷ J ≈ 2,7 Millionen Mal mehr Energie als 1 kg Kohle!',
      },
      klinischerBezug: 'Die Protonentherapie ist ein zunehmend wichtiges Werkzeug der modernen Onkologie. Im Gegensatz zur klassischen Photonenstrahlung (Röntgen/Gamma) haben Protonen einen charakteristischen Bragg-Peak: Sie deponieren den Großteil ihrer Energie am Ende ihrer Reichweite, mit minimalem Dosisabfall im Eingangskanal und fast null Dosis dahinter. Dies ermöglicht eine präzise Bestrahlung von Tumoren neben kritischen Strukturen (Hirnstamm, Rückenmark, Augen, Herz). Indikationen: Tumoren bei Kindern (minimale Strahlenbelastung des Wachstumsgewebes), Schädelbasistumore, Uvealmelanome, Prostata-Karzinom. Nachteil: enorme Kosten (~10× teurer als konventionelle Strahlentherapie) und Verfügbarkeit (weltweit ca. 100 Protonentherapieanlagen).',
      selfTest: [
        {
          question: 'Was ist der Bragg-Peak bei der Protonentherapie?',
          options: [
            'Der maximale Strahlungsdosis an der Körperoberfläche',
            'Die Stelle maximaler Energiedeposition am Ende der Proton-Reichweite im Gewebe',
            'Die Frequenz des Protonenstrahls',
            'Der Spitzenwert der Beschleunigerspannung',
            'Die maximale Dosisrate des Linearbeschleunigers',
          ],
          correctIndex: 1,
          explanation: 'Der Bragg-Peak ist das charakteristische Phänomen, dass schwere geladene Teilchen (Protonen, Schwerionen) am Ende ihrer Reichweite im Gewebe die meiste Energie deponieren. Davor deponieren sie relativ wenig Energie ("Plateaubereich"). Nach dem Peak: fast null Dosis. Durch Anpassen der Protonenenergie kann der Bragg-Peak auf den Tumor gelegt werden — präzise Bestrahlung mit Schonung des umliegenden Gewebes.',
          hints: ['Bragg-Peak = Energiedepositionsmaximum am Ende der Reichweite.', 'Im Gegensatz zu Photonen (exponentieller Abfall), haben Protonen diesen Peak.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Reaktion beschreibt die Kernspaltung von Uran-235?',
          options: [
            '²³⁵U → ²³¹Th + ⁴He',
            '²³⁵U + n → ²³⁶U → Spaltprodukte + 2–3n + Energie',
            '²H + ²H → ⁴He + Energie',
            '²³⁵U → ²³⁵Np + e⁻',
            '²³⁵U + 2n → ²³⁷U',
          ],
          correctIndex: 1,
          explanation: 'U-235 Kernspaltung: ²³⁵U + n → ²³⁶U* (angeregt, instabil) → z.B. ⁹²Kr + ¹⁴¹Ba + 3n + ~200 MeV. Die freigesetzten Neutronen können weitere ²³⁵U-Kerne spalten → Kettenreaktion. Option A ist α-Zerfall von U-235. Option C ist Deuterium-Deuterium-Fusion.',
          hints: ['Spaltung: ²³⁵U + n → zwei mittlere Kerne + 2–3 Neutronen.', 'Kettenreaktion: freie Neutronen spalten weitere U-235-Kerne.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was unterscheidet MRI von CT und Röntgen?',
          options: [
            'MRI verwendet Ultraschall statt Röntgenstrahlung',
            'MRI verwendet Radiowellen und Magnetfelder — keine ionisierende Strahlung',
            'MRI ist teurer als Röntgen aber billiger als CT',
            'MRI kann nur Knochen darstellen',
            'MRI verwendet Gammastrahlung, wie die PET',
          ],
          correctIndex: 1,
          explanation: 'MRI (Magnetresonanztomographie) nutzt starke Magnetfelder (1,5–7 T) und Radiowellen (MHz-Bereich) — keine ionisierende Strahlung. CT und Röntgen verwenden ionisierende Röntgenstrahlung. MRI hat keine Strahlungsrisiken und eignet sich besonders für strahlenempfindliche Patienten. MRI bietet exzellenten Weichteilkontrast; CT ist schneller und besser für Knochen/Lunge/akute Blutungen.',
          hints: ['MRI: Magnetfeld + Radiowellen = nicht-ionisierend.', 'CT/Röntgen: Röntgenstrahlung = ionisierend (Strahlendosis).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Bedingung ist für Kernfusion notwendig?',
          options: [
            'Sehr niedrige Temperaturen (< 1 K) um Quanteneffekte zu nutzen',
            'Temperaturen über 100 Millionen Kelvin (Plasma), um die Coulomb-Abstoßung zu überwinden',
            'Normaler Atmosphärendruck und Raumtemperatur',
            'Ein Neutronenbeschuss wie bei der Spaltung',
            'Radioaktive Ausgangsmaterialien',
          ],
          correctIndex: 1,
          explanation: 'Für Kernfusion müssen die Kerne so nah kommen, dass die Kernkraft wirkt (< 2 fm). Aber Protonen stoßen sich elektrostatisch ab. Um die Coulomb-Barriere zu überwinden, braucht man extrem hohe kinetische Energie — entsprechend T > 10⁸ K (100 Millionen Kelvin). Bei diesen Temperaturen ist Materie im Plasmazustand (vollständig ionisiert). Die Sonne erreicht im Kern nur ca. 15 Millionen K — Tunneleffekt (Quantenmechanik) macht Fusion dennoch möglich.',
          hints: ['Coulomb-Abstoßung zwischen Protonen muss überwunden werden.', 'Sehr hohe Temperatur = hohe kinetische Energie = kann Barriere überwinden.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was gilt für die Einstein-Relation E = mc²?',
          options: [
            'Sie gilt nur für radioaktive Zerfälle',
            'Sie besagt, dass Masse und Energie äquivalent sind; Massendefekt → Bindungsenergie',
            'Sie gilt nur für Teilchen mit Lichtgeschwindigkeit',
            'Sie beschreibt die kinetische Energie von Teilchen bei v << c',
            'Sie gilt nur in der Quantenmechanik',
          ],
          correctIndex: 1,
          explanation: 'E = mc² ist eine universelle Relation zwischen Masse und Energie — sie gilt immer, nicht nur bei Radioaktivität. Jede Massenänderung entspricht einer Energieänderung und umgekehrt. Der Massendefekt des Atomkerns (Δm = Summe Einzelmassen − Kernmasse) entspricht der Bindungsenergie: E_B = Δm·c². Dies erklärt die enorme Energie bei Kern-reaktionen im Vergleich zu chemischen Reaktionen.',
          hints: ['E = mc² verbindet Masse und Energie — fundamental und universal.', 'Massendefekt → Bindungsenergie (Kernkräfte binden Nukleonen unter Massenverlust).'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
  ],
};
