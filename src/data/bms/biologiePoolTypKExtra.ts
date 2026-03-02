/**
 * Biologie Typ K Extra — 20 Kombinationsaufgaben (IDs bio-pool-typk-011 bis -030).
 * Korrekte Option variiert über A–E. Schwierigkeit 1–3.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const biologiePoolTypKExtra: BMSFrage[] = [
  {
    id: "bio-pool-typk-011",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-02",
    stamm: "Welche der folgenden Aussagen zur Zellmembran und zum Membrantransport sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Flüssig-Mosaik-Modell-Membran besteht aus einer Phospholipid-Doppelschicht mit eingelagerten Proteinen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der erleichterte Transport erfolgt gegen den Konzentrationsgradienten und benötigt ATP.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Aquaporine ermöglichen den schnellen Transport von Wasser durch die Membran.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Die Na⁺/K⁺-ATPase pumpt 3 Na⁺ nach außen und 2 K⁺ nach innen und verbraucht ATP.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Phagozytose ist ein Beispiel für Exozytose.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [2, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [1, 2, 3] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 3 und 4. Erleichterter Transport läuft entlang des Gradienten ohne ATP (2 falsch). Phagozytose ist Endozytose, nicht Exozytose (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-012",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm:
      "Welche der folgenden Aussagen zur Zellatmung und zum Energiestoffwechsel sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die Glykolyse findet im Zytoplasma statt und liefert netto 2 ATP pro Glukosemolekül.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Der Citratzyklus (Krebszyklus) läuft in der Mitochondrienmatrix ab.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Atmungskette ist an der inneren Mitochondrienmembran lokalisiert und produziert CO₂.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei der anaeroben Glykolyse in Muskelzellen entsteht Laktat aus Pyruvat.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "FADH₂ und NADH geben Elektronen an die Atmungskette ab und werden dabei re-oxidiert.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die Atmungskette produziert H₂O, nicht CO₂; CO₂ entsteht im Citratzyklus (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-013",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-09",
    stamm: "Welche der folgenden Aussagen zur Photosynthese sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Lichtreaktionen finden in den Thylakoidmembranen statt und produzieren ATP und NADPH.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Im Calvin-Zyklus wird CO₂ durch RuBisCO an Ribulose-1,5-bisphosphat fixiert.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Chlorophyll a absorbiert vor allem grünes Licht (ca. 550 nm).",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei der Lichtreaktion wird Wasser gespalten und Sauerstoff als Nebenprodukt freigesetzt.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der Calvin-Zyklus benötigt ATP und NADPH aus den Lichtreaktionen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Chlorophyll a absorbiert hauptsächlich rotes (660–700 nm) und blaues (430–450 nm) Licht, nicht grünes (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-014",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur DNA-Replikation sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "DNA-Replikation ist semikonservativ: Jede Tochterdoppelhelix enthält einen Eltern- und einen Neustrang.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "DNA-Polymerase synthetisiert DNA immer in 3'→5'-Richtung.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Der Leitstrang wird kontinuierlich, der Folgestrang in Okazaki-Fragmenten synthetisiert.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "RNA-Primer liefern die freie 3'-OH-Gruppe, an die DNA-Polymerase andockt.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "DNA-Ligase verknüpft Okazaki-Fragmente durch Bildung von Phosphodiesterbindungen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 5] },
      { key: "D", nummern: [2, 4, 5] },
      { key: "E", nummern: [1, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. DNA-Polymerase synthetisiert nur in 5'→3'-Richtung (2 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-015",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-02",
    stamm: "Welche der folgenden Aussagen zu Transkription und Translation sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Bei der Transkription wird ein RNA-Strang an der DNA-Matrize synthetisiert.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Startcodon am mRNA ist AUG und codiert für Methionin.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "tRNA-Moleküle transportieren Aminosäuren zur Ribosom; jede tRNA hat ein Anticodon.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Das genetische Code ist nicht redundant — jedes Codon codiert für genau eine Aminosäure und umgekehrt.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Ribosomen bestehen aus rRNA und Proteinen und besitzen eine große und kleine Untereinheit.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 3, 4] },
      { key: "E", nummern: [2, 3, 4] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Der genetische Code ist redundant (degeneriert): mehrere Codons können dieselbe Aminosäure codieren, z. B. 6 Codons für Leucin (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-016",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-03",
    stamm: "Welche der folgenden Aussagen zur Mendelschen Genetik und Vererbung sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Beim Monohybridkreuz zweier heterozygoter Eltern (Aa × Aa) ergibt sich ein Phänotypverhältnis von 3:1.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "X-chromosomal-rezessive Erkrankungen betreffen Männer häufiger als Frauen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Kodominanz bedeutet, dass ein Allel vollständig über das andere dominiert.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Beim Dihybridkreuz (AaBb × AaBb) ergibt sich ein Phänotypverhältnis von 9:3:3:1 bei unabhängiger Vererbung.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Crossing-over erhöht die genetische Variabilität durch Rekombination homologer Chromosomen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 3, 4] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Kodominanz bedeutet, dass beide Allele gleichzeitig im Phänotyp sichtbar sind (z. B. Blutgruppe AB) — nicht Dominanz eines über das andere (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-017",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zum Herz-Kreislauf-System sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Herz besitzt 4 Kammern: zwei Vorhöfe und zwei Ventrikel.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Sauerstoffarmes Blut fließt vom rechten Ventrikel durch die Pulmonalarterie zur Lunge.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Venen führen immer sauerstoffreiches Blut; Arterien immer sauerstoffarmes Blut.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Das Sinusknoten ist der primäre Schrittmacher des Herzens und liegt im rechten Vorhof.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Kapillaren sind die kleinsten Blutgefäße; hier findet der Stoff- und Gasaustausch statt.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Venen können sauerstoffarmes (Körperkreislauf) oder sauerstoffreiches (Pulmonalvenen) Blut führen — diese Aussage ist pauschal falsch (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-018",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zum Immunsystem sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "T-Killerzellen (zytotoxische T-Zellen) töten virusinfizierte Zellen durch direkten Kontakt ab.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "B-Zellen differenzieren zu Plasmazellen, die Antikörper sezernieren.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Das angeborene Immunsystem reagiert antigenspezifisch und bildet ein immunologisches Gedächtnis.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "MHC-I-Moleküle präsentieren intrazelluläre Peptide und sind auf nahezu allen Körperzellen vorhanden.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Mastzellen schütten bei allergischen Reaktionen Histamin aus.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [3, 4, 5] },
      { key: "C", nummern: [1, 3, 5] },
      { key: "D", nummern: [2, 3, 4] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Antigenspezifität und Gedächtnisbildung sind Merkmale des adaptiven (erworbenen), nicht des angeborenen Immunsystems (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-019",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-03",
    stamm: "Welche der folgenden Aussagen zur Nervenphysiologie und Synapse sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das Ruhemembranpotenzial beträgt typischerweise −70 mV (Innen negativ gegenüber Außen).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Beim Aktionspotenzial öffnen sich zunächst spannungsgesteuerte Na⁺-Kanäle → Depolarisation.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Neurotransmitter werden präsynaptisch durch Diffusion entsorgt; eine enzymatische Spaltung gibt es nicht.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Myelinisierte Axone leiten Impulse schneller durch saltatorische Erregungsleitung.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Acetylcholin ist ein Neurotransmitter, der an neuromuskulären Verbindungen freigesetzt wird.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 3] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Neurotransmitter werden sowohl enzymatisch abgebaut (z. B. Acetylcholinesterase) als auch durch Reuptake und Diffusion entfernt (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-020",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-03",
    stamm: "Welche der folgenden Aussagen zur Niere und zum Harnbildungsprozess sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die glomeruläre Filtration erzeugt täglich ca. 180 L Primärharn; davon werden ca. 99 % rückresorbiert.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "ADH (Antidiuretisches Hormon) verringert die Wasserpermeabilität des Sammelrohrs → verdünnter Urin.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Aldosteron fördert die Na⁺-Resorption im distalen Tubulus und steigert damit den Blutdruck.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Im Henle-Schen Loop wird Harnstoff im aufsteigenden Schenkel aktiv transportiert.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Die Niere reguliert den Säure-Basen-Haushalt durch Ausscheidung von H⁺ und Rückresorption von HCO₃⁻.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [2, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 3 und 5. ADH erhöht die Wasserpermeabilität → konzentrierter Urin (2 falsch). Im aufsteigenden Schenkel des Henle-Loops wird NaCl aktiv transportiert, nicht Harnstoff (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-021",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-5-01",
    stamm: "Welche der folgenden Aussagen zur Evolution und Selektion sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Natürliche Selektion wirkt auf den Phänotyp; der Genotyp bestimmt die Heritabilität.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Genetische Drift hat besonders in großen Populationen einen starken Einfluss.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Allopatrische Artbildung entsteht durch geografische Isolation voneinander getrennter Populationen.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Das Hardy-Weinberg-Gleichgewicht gilt nur, wenn keine Mutation, Migration, Selektion und kein genetischer Drift vorliegen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Konvergente Evolution führt dazu, dass nicht verwandte Arten ähnliche Merkmale entwickeln.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [2, 3, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Genetische Drift ist in kleinen Populationen am stärksten (Flaschenhalseffekt und Gründereffekt) (2 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-022",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-04",
    stamm: "Welche der folgenden Aussagen zur Mitose sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "In der Prophase kondensieren die Chromosomen und die Kernhülle beginnt sich aufzulösen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "In der Metaphase ordnen sich die Chromosomen an der Äquatorialplatte (Metaphasenplatte) an.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "In der Anaphase werden homologe Chromosomen getrennt (wie bei der Meiose I).",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Aus einer diploiden (2n) Zelle entstehen durch Mitose zwei diploide Tochterzellen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Zytokinese (Zellteilung des Zytoplasmas) beginnt in der Telophase.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [2, 3, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. In der Anaphase der Mitose werden Schwesterchromatiden getrennt; die Trennung homologer Chromosomen findet in der Anaphase I der Meiose statt (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-023",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-02",
    stamm: "Welche der folgenden Aussagen zum Muskelgewebe und zur Muskelkontraktion sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Sarkomere sind die funktionellen Grundeinheiten des quergestreiften Muskels.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Beim Gleitfilamentmechanismus gleiten Aktin- und Myosinfilamente aneinander vorbei, ohne kürzer zu werden.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Calcium (Ca²⁺) wird bei der Kontraktion aus dem Sarkoplasmatischen Retikulum freigesetzt und bindet an Myosin.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Glatte Muskulatur ist unwillkürlich und enthält keine Sarkomere.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Herzmuskelzellen sind durch Glanzstreifen (Disci intercalares) miteinander verbunden.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Ca²⁺ bindet an Troponin (nicht Myosin), was die Myosin-Bindungsstellen am Aktin freigibt (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-024",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-04",
    stamm: "Welche der folgenden Aussagen zum Hormonsystem sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Steroidhormone sind lipophil und können die Zellmembran durchqueren; sie binden an intrazelluläre Rezeptoren.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Insulin senkt den Blutzucker, indem es die Glukoseaufnahme in Muskel- und Fettzellen fördert.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Glukagon wird bei Hyperglykämie (hohem Blutzucker) aus den α-Zellen des Pankreas ausgeschüttet.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Schilddrüsenhormone (T3, T4) steigern den Grundumsatz und sind für die normale Entwicklung essenziell.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Das Hypothalamus-Hypophysen-System reguliert viele endokrine Drüsen über Releasing-Hormone.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Glukagon wird bei Hypoglykämie (niedrigem Blutzucker) freigesetzt, nicht bei Hyperglykämie (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-025",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-04",
    stamm: "Welche der folgenden Aussagen zu Enzymen und Enzymkinetik sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Enzyme sind Biokatalysatoren, die die Aktivierungsenergie einer Reaktion senken.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Michaelis-Konstante KM gibt die Substratkonzentration an, bei der die Reaktionsgeschwindigkeit halb maximal ist.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Kompetitive Inhibitoren binden an die allosterische Stelle des Enzyms und senken Vmax.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Bei allosterischer Regulation kann ein Effektormolekül an einer anderen Stelle als dem aktiven Zentrum binden.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Isoenzyme (Isoformen) katalysieren dieselbe Reaktion, können aber verschiedene kinetische Eigenschaften haben.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [2, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [1, 3, 5] },
      { key: "D", nummern: [2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Kompetitive Inhibitoren binden am aktiven Zentrum (nicht allosterisch) und erhöhen den scheinbaren KM, lassen aber Vmax unverändert (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-026",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-04",
    stamm: "Welche der folgenden Aussagen zur Histologie der Leber sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die funktionelle Grundeinheit der Leber ist das Leberläppchen (Lobulus hepaticus).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Hepatozyten synthetisieren u. a. Albumin, Gerinnungsfaktoren und Galle.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Kupffer-Zellen sind spezialisierte Endothelzellen, die Kollagen in der Leber produzieren.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Sauerstoffreiches Blut erreicht die Leber über die Pfortader.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Die Leber spielt eine zentrale Rolle bei Entgiftung, Glukosehomöostase und Lipoproteinsynthese.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2 und 5. Kupffer-Zellen sind residente Makrophagen der Leber (keine Endothelzellen, kein Kollagen) (3 falsch). Sauerstoffreiches Blut kommt über die A. hepatica; die Pfortader bringt nährstoffreiches, aber sauerstoffärmeres Blut aus dem Darm (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-027",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu Populationsökologie und Wachstum sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Exponentielles Wachstum tritt auf, wenn unbegrenzte Ressourcen vorhanden sind.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Logistisches Wachstum beschreibt eine S-Kurve; die Wachstumsrate sinkt, wenn die Kapazitätsgrenze K erreicht wird.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Intraspezifische Konkurrenz tritt zwischen Individuen verschiedener Arten auf.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die Räuber-Beute-Dynamik führt zu zeitlich versetzten Populationsschwankungen beider Arten.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "K-Strategen produzieren wenige Nachkommen mit hoher elterlicher Fürsorge.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [1, 3, 4] },
      { key: "E", nummern: [2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Intraspezifische Konkurrenz findet zwischen Individuen derselben Art statt; interspezifische Konkurrenz betrifft verschiedene Arten (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-028",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-05",
    stamm: "Welche der folgenden Aussagen zu Mutationen und Mutagenen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Eine Punktmutation kann durch Substitution, Insertion oder Deletion einer einzelnen Base entstehen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Eine stille (synonyme) Mutation verändert die Aminosäuresequenz des Proteins.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Ionisierende Strahlung (Röntgen, γ-Strahlung) kann Doppelstrangbrüche in der DNA verursachen.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Trisomie 21 (Down-Syndrom) entsteht durch Nondisjunktion in der Meiose.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Frameshift-Mutationen entstehen durch Substitution und verschieben den Leserahmen.",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [1, 3, 4] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 3 und 4. Stille Mutationen verändern die Aminosäuresequenz nicht (2 falsch). Frameshift-Mutationen entstehen durch Insertionen oder Deletionen, nicht durch Substitutionen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-029",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-05",
    stamm: "Welche der folgenden Aussagen zum Verdauungssystem sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Pepsin ist eine Protease, die im sauren Milieu des Magens aktiv ist.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Lipase spaltet Triglyceride in Fettsäuren und Monoglyceride; Gallensalze emulgieren das Fett.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Aminosäuren und Glukose werden hauptsächlich im Magen resorbiert.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Der pH-Wert des Magens beträgt ca. 1–2 durch Salzsäure (HCl)-Sekretion der Belegzellen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Zotten und Mikrovilli vergrößern die Resorptionsoberfläche des Dünndarms enorm.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Aminosäuren und Glukose werden im Dünndarm (Jejunum) resorbiert, nicht im Magen (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-030",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-06",
    stamm: "Welche der folgenden Aussagen zu Epigenetik und Genregulation sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "DNA-Methylierung an CpG-Inseln in Promotorregionen führt meist zur Genstilllegung.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Histonacetylierung lockert die Chromatinstruktur und fördert die Transkription.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Epigenetische Veränderungen verändern die DNA-Sequenz selbst.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "MicroRNAs (miRNA) können die Translation spezifischer mRNAs durch komplementäre Bindung hemmen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Epigenetische Markierungen können in manchen Fällen an Tochterzellen weitergegeben werden.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 3, 4] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Epigenetische Veränderungen verändern die Genexpression, NICHT die DNA-Sequenz selbst (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
