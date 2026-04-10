/**
 * Biologie Typ K Neu 4 — 75 Kombinationsaufgaben (IDs bio-typk-new4-001 bis -075).
 * Schwerpunkte: Mikrobiologie, Zellsignaling, Stoffwechsel, Genetik Vertiefung, Histologie.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const biologieTypKNew4: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–015: MIKROBIOLOGIE ───────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 Bakterienaufbau (leicht) ───
  {
    id: "bio-typk-new4-001",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zum Aufbau von Bakterien sind richtig?\n\n1. Bakterien besitzen keinen membranumhüllten Zellkern.\n2. Die bakterielle Zellwand enthält Murein (Peptidoglykan).\n3. Bakterien besitzen Mitochondrien zur Energiegewinnung.\n4. Plasmide sind kleine, ringförmige DNA-Moleküle außerhalb des Bakterienchromosoms.\n5. Ribosomen der Bakterien (70S) unterscheiden sich von eukaryotischen Ribosomen (80S).",
    aussagen: [
      { nr: 1, text: "Bakterien besitzen keinen membranumhüllten Zellkern.", korrekt: true },
      { nr: 2, text: "Die bakterielle Zellwand enthält Murein (Peptidoglykan).", korrekt: true },
      { nr: 3, text: "Bakterien besitzen Mitochondrien zur Energiegewinnung.", korrekt: false },
      { nr: 4, text: "Plasmide sind kleine, ringförmige DNA-Moleküle außerhalb des Bakterienchromosoms.", korrekt: true },
      { nr: 5, text: "Ribosomen der Bakterien (70S) unterscheiden sich von eukaryotischen Ribosomen (80S).", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Bakterien sind Prokaryoten und besitzen keine Mitochondrien (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 002 Gram-Färbung (leicht) ───
  {
    id: "bio-typk-new4-002",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zur Gram-Färbung sind richtig?\n\n1. Gram-positive Bakterien besitzen eine dicke Peptidoglykanschicht.\n2. Gram-negative Bakterien erscheinen nach der Färbung blau-violett.\n3. Gram-negative Bakterien besitzen eine äußere Membran mit Lipopolysacchariden.\n4. Die Gram-Färbung unterscheidet Bakterien anhand ihres Zellwandaufbaus.\n5. Mykoplasmen lassen sich problemlos mit der Gram-Färbung einordnen.",
    aussagen: [
      { nr: 1, text: "Gram-positive Bakterien besitzen eine dicke Peptidoglykanschicht.", korrekt: true },
      { nr: 2, text: "Gram-negative Bakterien erscheinen nach der Färbung blau-violett.", korrekt: false },
      { nr: 3, text: "Gram-negative Bakterien besitzen eine äußere Membran mit Lipopolysacchariden.", korrekt: true },
      { nr: 4, text: "Die Gram-Färbung unterscheidet Bakterien anhand ihres Zellwandaufbaus.", korrekt: true },
      { nr: 5, text: "Mykoplasmen lassen sich problemlos mit der Gram-Färbung einordnen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 3] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 3 und 4. Gram-negative Bakterien erscheinen rosa-rot (2 falsch). Mykoplasmen besitzen keine Zellwand und sind daher Gram-negativ ohne echte Zuordnung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 003 Bakterielle Vermehrung (leicht) ───
  {
    id: "bio-typk-new4-003",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zur bakteriellen Vermehrung sind richtig?\n\n1. Bakterien vermehren sich hauptsächlich durch binäre Spaltung (Zweiteilung).\n2. Die Generationszeit ist die Zeitspanne für eine Zellteilung.\n3. Die Wachstumskurve einer Bakterienkultur umfasst Lag-, Log-, stationäre und Absterbephase.\n4. In der stationären Phase übersteigt die Teilungsrate die Absterberate.\n5. Endosporen dienen der Vermehrung und nicht dem Überleben.",
    aussagen: [
      { nr: 1, text: "Bakterien vermehren sich hauptsächlich durch binäre Spaltung (Zweiteilung).", korrekt: true },
      { nr: 2, text: "Die Generationszeit ist die Zeitspanne für eine Zellteilung.", korrekt: true },
      { nr: 3, text: "Die Wachstumskurve einer Bakterienkultur umfasst Lag-, Log-, stationäre und Absterbephase.", korrekt: true },
      { nr: 4, text: "In der stationären Phase übersteigt die Teilungsrate die Absterberate.", korrekt: false },
      { nr: 5, text: "Endosporen dienen der Vermehrung und nicht dem Überleben.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2 und 3. In der stationären Phase sind Teilungs- und Absterberate gleich (4 falsch). Endosporen sind Überdauerungsformen, keine Vermehrungsformen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 004 Viren Grundlagen (mittel) ───
  {
    id: "bio-typk-new4-004",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu Viren sind richtig?\n\n1. Viren besitzen keinen eigenen Stoffwechsel und sind obligate intrazelluläre Parasiten.\n2. Das Kapsid besteht aus Proteinuntereinheiten (Kapsomeren).\n3. Alle Viren besitzen eine Lipidmembranhülle.\n4. Viren können entweder DNA oder RNA als Erbmaterial enthalten, aber nie beides gleichzeitig.\n5. Bakteriophagen infizieren ausschließlich Bakterien.",
    aussagen: [
      { nr: 1, text: "Viren besitzen keinen eigenen Stoffwechsel und sind obligate intrazelluläre Parasiten.", korrekt: true },
      { nr: 2, text: "Das Kapsid besteht aus Proteinuntereinheiten (Kapsomeren).", korrekt: true },
      { nr: 3, text: "Alle Viren besitzen eine Lipidmembranhülle.", korrekt: false },
      { nr: 4, text: "Viren können entweder DNA oder RNA als Erbmaterial enthalten, aber nie beides gleichzeitig.", korrekt: true },
      { nr: 5, text: "Bakteriophagen infizieren ausschließlich Bakterien.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Nicht alle Viren besitzen eine Hülle — es gibt auch unbehüllte (nackte) Viren (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 005 Virale Replikationszyklen (mittel) ───
  {
    id: "bio-typk-new4-005",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu viralen Replikationszyklen sind richtig?\n\n1. Beim lytischen Zyklus werden neue Viruspartikel produziert und die Wirtszelle zerstört.\n2. Beim lysogenen Zyklus wird die Virus-DNA in das Wirtsgenom integriert.\n3. Retroviren nutzen die reverse Transkriptase, um RNA in DNA umzuschreiben.\n4. HIV ist ein Beispiel für ein Retrovirus.\n5. Im lysogenen Zyklus wird die Wirtszelle sofort nach der Infektion lysiert.",
    aussagen: [
      { nr: 1, text: "Beim lytischen Zyklus werden neue Viruspartikel produziert und die Wirtszelle zerstört.", korrekt: true },
      { nr: 2, text: "Beim lysogenen Zyklus wird die Virus-DNA in das Wirtsgenom integriert.", korrekt: true },
      { nr: 3, text: "Retroviren nutzen die reverse Transkriptase, um RNA in DNA umzuschreiben.", korrekt: true },
      { nr: 4, text: "HIV ist ein Beispiel für ein Retrovirus.", korrekt: true },
      { nr: 5, text: "Im lysogenen Zyklus wird die Wirtszelle sofort nach der Infektion lysiert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Im lysogenen Zyklus wird die Wirtszelle nicht sofort lysiert — die Virus-DNA bleibt als Provirus integriert (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 006 Pilze (mittel) ───
  {
    id: "bio-typk-new4-006",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu Pilzen sind richtig?\n\n1. Pilze sind heterotroph und besitzen keine Chloroplasten.\n2. Die Zellwand der Pilze enthält Chitin.\n3. Pilze vermehren sich ausschließlich geschlechtlich durch Sporen.\n4. Hefen sind einzellige Pilze, die sich durch Sprossung vermehren.\n5. Mykorrhiza beschreibt eine Symbiose zwischen Pilzen und Pflanzenwurzeln.",
    aussagen: [
      { nr: 1, text: "Pilze sind heterotroph und besitzen keine Chloroplasten.", korrekt: true },
      { nr: 2, text: "Die Zellwand der Pilze enthält Chitin.", korrekt: true },
      { nr: 3, text: "Pilze vermehren sich ausschließlich geschlechtlich durch Sporen.", korrekt: false },
      { nr: 4, text: "Hefen sind einzellige Pilze, die sich durch Sprossung vermehren.", korrekt: true },
      { nr: 5, text: "Mykorrhiza beschreibt eine Symbiose zwischen Pilzen und Pflanzenwurzeln.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Pilze können sich sowohl geschlechtlich als auch ungeschlechtlich vermehren (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 007 Prionen (mittel) ───
  {
    id: "bio-typk-new4-007",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu Prionen sind richtig?\n\n1. Prionen sind infektiöse Proteine ohne Nukleinsäure.\n2. Prionen verursachen transmissible spongiforme Enzephalopathien (TSE).\n3. Das Prion-Protein PrPSc entsteht durch Umfaltung des normalen PrPC.\n4. Prionen können durch Standardsterilisation (Autoklavieren bei 121 °C) vollständig inaktiviert werden.\n5. BSE und Creutzfeldt-Jakob-Krankheit werden durch Prionen verursacht.",
    aussagen: [
      { nr: 1, text: "Prionen sind infektiöse Proteine ohne Nukleinsäure.", korrekt: true },
      { nr: 2, text: "Prionen verursachen transmissible spongiforme Enzephalopathien (TSE).", korrekt: true },
      { nr: 3, text: "Das Prion-Protein PrPSc entsteht durch Umfaltung des normalen PrPC.", korrekt: true },
      { nr: 4, text: "Prionen können durch Standardsterilisation (Autoklavieren bei 121 °C) vollständig inaktiviert werden.", korrekt: false },
      { nr: 5, text: "BSE und Creutzfeldt-Jakob-Krankheit werden durch Prionen verursacht.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Prionen sind extrem resistent und werden durch normales Autoklavieren nicht vollständig inaktiviert (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 008 Antibiotikaresistenz (mittel) ───
  {
    id: "bio-typk-new4-008",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zur Antibiotikaresistenz sind richtig?\n\n1. Resistenzgene können über Plasmide durch Konjugation zwischen Bakterien übertragen werden.\n2. Mutation im bakteriellen Genom kann spontan zu Resistenz führen.\n3. Antibiotika erzeugen Resistenz, indem sie das Bakteriengenom gezielt verändern.\n4. MRSA steht für Methicillin-resistenter Staphylococcus aureus.\n5. Transformation ist die Aufnahme freier DNA aus der Umgebung durch Bakterien.",
    aussagen: [
      { nr: 1, text: "Resistenzgene können über Plasmide durch Konjugation zwischen Bakterien übertragen werden.", korrekt: true },
      { nr: 2, text: "Mutation im bakteriellen Genom kann spontan zu Resistenz führen.", korrekt: true },
      { nr: 3, text: "Antibiotika erzeugen Resistenz, indem sie das Bakteriengenom gezielt verändern.", korrekt: false },
      { nr: 4, text: "MRSA steht für Methicillin-resistenter Staphylococcus aureus.", korrekt: true },
      { nr: 5, text: "Transformation ist die Aufnahme freier DNA aus der Umgebung durch Bakterien.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Antibiotika erzeugen keine Resistenz direkt — sie selektieren bereits resistente Varianten (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 009 Antibiotika-Wirkmechanismen (schwer) ───
  {
    id: "bio-typk-new4-009",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu Antibiotika-Wirkmechanismen sind richtig?\n\n1. Penicillin hemmt die Zellwandsynthese durch Blockade der Transpeptidase.\n2. Tetracycline hemmen die bakterielle Proteinbiosynthese an der 30S-Untereinheit.\n3. Fluorchinolone hemmen die bakterielle Gyrase (Topoisomerase II).\n4. Makrolide wie Erythromycin wirken an der 50S-Untereinheit des Ribosoms.\n5. Sulfonamide hemmen die Folsäuresynthese durch kompetitive Hemmung.",
    aussagen: [
      { nr: 1, text: "Penicillin hemmt die Zellwandsynthese durch Blockade der Transpeptidase.", korrekt: true },
      { nr: 2, text: "Tetracycline hemmen die bakterielle Proteinbiosynthese an der 30S-Untereinheit.", korrekt: true },
      { nr: 3, text: "Fluorchinolone hemmen die bakterielle Gyrase (Topoisomerase II).", korrekt: true },
      { nr: 4, text: "Makrolide wie Erythromycin wirken an der 50S-Untereinheit des Ribosoms.", korrekt: true },
      { nr: 5, text: "Sulfonamide hemmen die Folsäuresynthese durch kompetitive Hemmung.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle fünf Aussagen sind korrekt. Die genannten Antibiotika-Klassen haben jeweils unterschiedliche Angriffspunkte im Bakterium.",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 010 Horizontaler Gentransfer (schwer) ───
  {
    id: "bio-typk-new4-010",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zum horizontalen Gentransfer bei Bakterien sind richtig?\n\n1. Bei der Konjugation wird DNA über einen Pilus von einer Donor- auf eine Empfängerzelle übertragen.\n2. Transduktion erfolgt durch Bakteriophagen, die bakterielle DNA von einer Zelle zur anderen transportieren.\n3. Transformation erfordert immer einen direkten Zell-Zell-Kontakt.\n4. Die F-Plasmid-Integration in das Bakterienchromosom erzeugt Hfr-Stämme.\n5. Horizontaler Gentransfer trägt zur schnellen Verbreitung von Antibiotikaresistenzen bei.",
    aussagen: [
      { nr: 1, text: "Bei der Konjugation wird DNA über einen Pilus von einer Donor- auf eine Empfängerzelle übertragen.", korrekt: true },
      { nr: 2, text: "Transduktion erfolgt durch Bakteriophagen, die bakterielle DNA von einer Zelle zur anderen transportieren.", korrekt: true },
      { nr: 3, text: "Transformation erfordert immer einen direkten Zell-Zell-Kontakt.", korrekt: false },
      { nr: 4, text: "Die F-Plasmid-Integration in das Bakterienchromosom erzeugt Hfr-Stämme.", korrekt: true },
      { nr: 5, text: "Horizontaler Gentransfer trägt zur schnellen Verbreitung von Antibiotikaresistenzen bei.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Transformation erfordert keinen Zell-Zell-Kontakt — es wird freie DNA aus der Umgebung aufgenommen (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 011 Virustypen (leicht) ───
  {
    id: "bio-typk-new4-011",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu verschiedenen Virustypen sind richtig?\n\n1. Influenzaviren besitzen ein segmentiertes RNA-Genom.\n2. Herpesviren sind DNA-Viren und können latent im Körper verbleiben.\n3. Das Hepatitis-B-Virus nutzt eine reverse Transkriptase in seinem Replikationszyklus.\n4. Coronaviren besitzen ein einzelsträngiges RNA-Genom mit positiver Polarität.\n5. Adenoviren sind behüllte DNA-Viren.",
    aussagen: [
      { nr: 1, text: "Influenzaviren besitzen ein segmentiertes RNA-Genom.", korrekt: true },
      { nr: 2, text: "Herpesviren sind DNA-Viren und können latent im Körper verbleiben.", korrekt: true },
      { nr: 3, text: "Das Hepatitis-B-Virus nutzt eine reverse Transkriptase in seinem Replikationszyklus.", korrekt: true },
      { nr: 4, text: "Coronaviren besitzen ein einzelsträngiges RNA-Genom mit positiver Polarität.", korrekt: true },
      { nr: 5, text: "Adenoviren sind behüllte DNA-Viren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Adenoviren sind unbehüllte (nackte) DNA-Viren (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 012 Bakterielle Toxine (mittel) ───
  {
    id: "bio-typk-new4-012",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu bakteriellen Toxinen sind richtig?\n\n1. Exotoxine werden von Bakterien aktiv sezerniert.\n2. Endotoxine sind Bestandteil der äußeren Membran gram-negativer Bakterien.\n3. Das Botulinumtoxin hemmt die Freisetzung von Acetylcholin an der neuromuskulären Synapse.\n4. Endotoxine bestehen hauptsächlich aus Lipopolysacchariden (LPS).\n5. Exotoxine sind hitzestabil und können nicht durch Erhitzen inaktiviert werden.",
    aussagen: [
      { nr: 1, text: "Exotoxine werden von Bakterien aktiv sezerniert.", korrekt: true },
      { nr: 2, text: "Endotoxine sind Bestandteil der äußeren Membran gram-negativer Bakterien.", korrekt: true },
      { nr: 3, text: "Das Botulinumtoxin hemmt die Freisetzung von Acetylcholin an der neuromuskulären Synapse.", korrekt: true },
      { nr: 4, text: "Endotoxine bestehen hauptsächlich aus Lipopolysacchariden (LPS).", korrekt: true },
      { nr: 5, text: "Exotoxine sind hitzestabil und können nicht durch Erhitzen inaktiviert werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Exotoxine sind meist hitzelabil und können durch Erhitzen denaturiert werden — es sind Endotoxine, die hitzestabil sind (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 013 Immunabwehr gegen Mikroben (schwer) ───
  {
    id: "bio-typk-new4-013",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zur Immunabwehr gegen Mikroorganismen sind richtig?\n\n1. Makrophagen phagozytieren Bakterien und präsentieren Antigene auf MHC-II-Molekülen.\n2. Natürliche Killerzellen erkennen virusinfizierte Zellen, die keine MHC-I-Moleküle exprimieren.\n3. Interferone sind antivirale Proteine, die von virusinfizierten Zellen produziert werden.\n4. Das Komplementsystem kann Bakterien durch Bildung des Membranangriffskomplexes (MAC) lysieren.\n5. T-Helferzellen zerstören intrazelluläre Pathogene direkt durch Perforin.",
    aussagen: [
      { nr: 1, text: "Makrophagen phagozytieren Bakterien und präsentieren Antigene auf MHC-II-Molekülen.", korrekt: true },
      { nr: 2, text: "Natürliche Killerzellen erkennen virusinfizierte Zellen, die keine MHC-I-Moleküle exprimieren.", korrekt: true },
      { nr: 3, text: "Interferone sind antivirale Proteine, die von virusinfizierten Zellen produziert werden.", korrekt: true },
      { nr: 4, text: "Das Komplementsystem kann Bakterien durch Bildung des Membranangriffskomplexes (MAC) lysieren.", korrekt: true },
      { nr: 5, text: "T-Helferzellen zerstören intrazelluläre Pathogene direkt durch Perforin.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Zytotoxische T-Zellen (CD8+), nicht T-Helferzellen (CD4+), nutzen Perforin zur Zellzerstörung (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 014 Bakterielle Sporenbildung (leicht) ───
  {
    id: "bio-typk-new4-014",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zur bakteriellen Sporenbildung sind richtig?\n\n1. Endosporen werden von bestimmten gram-positiven Bakterien wie Bacillus und Clostridium gebildet.\n2. Endosporen sind extrem resistent gegenüber Hitze, UV-Strahlung und Chemikalien.\n3. Die Sporulation wird durch ungünstige Umweltbedingungen wie Nährstoffmangel ausgelöst.\n4. Endosporen enthalten Dipicolinsäure, die zur Hitzeresistenz beiträgt.\n5. Jede Endospore enthält das genetische Material von mehreren Bakterienzellen.",
    aussagen: [
      { nr: 1, text: "Endosporen werden von bestimmten gram-positiven Bakterien wie Bacillus und Clostridium gebildet.", korrekt: true },
      { nr: 2, text: "Endosporen sind extrem resistent gegenüber Hitze, UV-Strahlung und Chemikalien.", korrekt: true },
      { nr: 3, text: "Die Sporulation wird durch ungünstige Umweltbedingungen wie Nährstoffmangel ausgelöst.", korrekt: true },
      { nr: 4, text: "Endosporen enthalten Dipicolinsäure, die zur Hitzeresistenz beiträgt.", korrekt: true },
      { nr: 5, text: "Jede Endospore enthält das genetische Material von mehreren Bakterienzellen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Jede Endospore enthält das Genom einer einzigen Bakterienzelle (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 015 Biofilme (schwer) ───
  {
    id: "bio-typk-new4-015",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm: "Welche der folgenden Aussagen zu bakteriellen Biofilmen sind richtig?\n\n1. Biofilme bestehen aus Bakteriengemeinschaften, die in eine extrazelluläre Matrix eingebettet sind.\n2. Bakterien in Biofilmen sind deutlich resistenter gegen Antibiotika als planktonische Bakterien.\n3. Quorum Sensing ermöglicht die Koordination des Verhaltens in Biofilmen.\n4. Zahnbelag (Plaque) ist ein Beispiel für einen Biofilm.\n5. Biofilme bestehen immer nur aus einer einzigen Bakterienart.",
    aussagen: [
      { nr: 1, text: "Biofilme bestehen aus Bakteriengemeinschaften, die in eine extrazelluläre Matrix eingebettet sind.", korrekt: true },
      { nr: 2, text: "Bakterien in Biofilmen sind deutlich resistenter gegen Antibiotika als planktonische Bakterien.", korrekt: true },
      { nr: 3, text: "Quorum Sensing ermöglicht die Koordination des Verhaltens in Biofilmen.", korrekt: true },
      { nr: 4, text: "Zahnbelag (Plaque) ist ein Beispiel für einen Biofilm.", korrekt: true },
      { nr: 5, text: "Biofilme bestehen immer nur aus einer einzigen Bakterienart.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Biofilme können aus mehreren Bakterienarten bestehen (Mischbiofilme sind häufig, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 016–030: ZELLSIGNALING ───────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 016 Rezeptortypen Übersicht (leicht) ───
  {
    id: "bio-typk-new4-016",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu Rezeptortypen sind richtig?\n\n1. G-Protein-gekoppelte Rezeptoren (GPCR) durchspannen die Membran mit 7 Transmembrandomänen.\n2. Rezeptortyrosinkinasen phosphorylieren sich bei Ligandenbindung gegenseitig an Tyrosinresten.\n3. Ionenkanal-gekoppelte Rezeptoren vermitteln besonders schnelle zelluläre Antworten.\n4. Intrazelluläre Rezeptoren binden hydrophile Liganden, die nicht durch die Membran gelangen.\n5. Ligandenbindung an einen Rezeptor löst eine Signalkaskade aus.",
    aussagen: [
      { nr: 1, text: "G-Protein-gekoppelte Rezeptoren (GPCR) durchspannen die Membran mit 7 Transmembrandomänen.", korrekt: true },
      { nr: 2, text: "Rezeptortyrosinkinasen phosphorylieren sich bei Ligandenbindung gegenseitig an Tyrosinresten.", korrekt: true },
      { nr: 3, text: "Ionenkanal-gekoppelte Rezeptoren vermitteln besonders schnelle zelluläre Antworten.", korrekt: true },
      { nr: 4, text: "Intrazelluläre Rezeptoren binden hydrophile Liganden, die nicht durch die Membran gelangen.", korrekt: false },
      { nr: 5, text: "Ligandenbindung an einen Rezeptor löst eine Signalkaskade aus.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Intrazelluläre Rezeptoren binden lipophile (hydrophobe) Liganden, die die Membran passieren können — z. B. Steroidhormone (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 017 G-Proteine (mittel) ───
  {
    id: "bio-typk-new4-017",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu G-Proteinen sind richtig?\n\n1. Heterotrimere G-Proteine bestehen aus α-, β- und γ-Untereinheiten.\n2. Im inaktiven Zustand ist GDP an die α-Untereinheit gebunden.\n3. Bei Aktivierung wird GDP gegen GTP ausgetauscht.\n4. Die GTPase-Aktivität der α-Untereinheit inaktiviert das G-Protein wieder.\n5. G-Proteine sind ausschließlich stimulierend (Gs) und hemmen niemals Effektoren.",
    aussagen: [
      { nr: 1, text: "Heterotrimere G-Proteine bestehen aus α-, β- und γ-Untereinheiten.", korrekt: true },
      { nr: 2, text: "Im inaktiven Zustand ist GDP an die α-Untereinheit gebunden.", korrekt: true },
      { nr: 3, text: "Bei Aktivierung wird GDP gegen GTP ausgetauscht.", korrekt: true },
      { nr: 4, text: "Die GTPase-Aktivität der α-Untereinheit inaktiviert das G-Protein wieder.", korrekt: true },
      { nr: 5, text: "G-Proteine sind ausschließlich stimulierend (Gs) und hemmen niemals Effektoren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Es gibt auch inhibitorische G-Proteine (Gi), die z. B. die Adenylylcyclase hemmen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 018 cAMP-Signalweg (mittel) ───
  {
    id: "bio-typk-new4-018",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zum cAMP-Signalweg sind richtig?\n\n1. Die Adenylylcyclase wandelt ATP in cyclisches AMP (cAMP) um.\n2. cAMP aktiviert die Proteinkinase A (PKA).\n3. Phosphodiesterasen bauen cAMP zu AMP ab und beenden das Signal.\n4. Gs-Proteine stimulieren die Adenylylcyclase.\n5. cAMP wird ausschließlich im Zellkern gebildet.",
    aussagen: [
      { nr: 1, text: "Die Adenylylcyclase wandelt ATP in cyclisches AMP (cAMP) um.", korrekt: true },
      { nr: 2, text: "cAMP aktiviert die Proteinkinase A (PKA).", korrekt: true },
      { nr: 3, text: "Phosphodiesterasen bauen cAMP zu AMP ab und beenden das Signal.", korrekt: true },
      { nr: 4, text: "Gs-Proteine stimulieren die Adenylylcyclase.", korrekt: true },
      { nr: 5, text: "cAMP wird ausschließlich im Zellkern gebildet.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. cAMP wird im Zytoplasma an der Innenseite der Plasmamembran durch die Adenylylcyclase gebildet (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 019 IP3/DAG-Signalweg (schwer) ───
  {
    id: "bio-typk-new4-019",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zum IP3/DAG-Signalweg sind richtig?\n\n1. Phospholipase C spaltet PIP2 in IP3 und DAG.\n2. IP3 bindet an Rezeptoren am endoplasmatischen Retikulum und setzt Ca²⁺ frei.\n3. DAG aktiviert zusammen mit Ca²⁺ die Proteinkinase C (PKC).\n4. Der Signalweg wird durch Gq-Proteine aktiviert.\n5. IP3 und DAG sind hydrophile Moleküle, die frei im Zytoplasma diffundieren.",
    aussagen: [
      { nr: 1, text: "Phospholipase C spaltet PIP2 in IP3 und DAG.", korrekt: true },
      { nr: 2, text: "IP3 bindet an Rezeptoren am endoplasmatischen Retikulum und setzt Ca²⁺ frei.", korrekt: true },
      { nr: 3, text: "DAG aktiviert zusammen mit Ca²⁺ die Proteinkinase C (PKC).", korrekt: true },
      { nr: 4, text: "Der Signalweg wird durch Gq-Proteine aktiviert.", korrekt: true },
      { nr: 5, text: "IP3 und DAG sind hydrophile Moleküle, die frei im Zytoplasma diffundieren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. IP3 ist hydrophil und diffundiert im Zytoplasma, aber DAG ist lipophil und verbleibt in der Membran — die Aussage, dass beide hydrophil sind, ist falsch (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 020 Signalverstärkung (leicht) ───
  {
    id: "bio-typk-new4-020",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zur Signalverstärkung (Signalkaskade) sind richtig?\n\n1. Ein einzelnes Hormonmolekül kann durch Signalkaskaden eine Vielzahl von Zielmolekülen aktivieren.\n2. Kinasekaskaden verstärken das Signal, indem jede Kinase viele Substratmoleküle phosphoryliert.\n3. Second Messenger wie cAMP und Ca²⁺ tragen zur schnellen Signalausbreitung bei.\n4. Die Signalverstärkung ermöglicht eine Reaktion auf sehr geringe Hormonkonzentrationen.\n5. Signalverstärkung bedeutet, dass das Hormonsignal immer proportional verstärkt wird ohne Sättigung.",
    aussagen: [
      { nr: 1, text: "Ein einzelnes Hormonmolekül kann durch Signalkaskaden eine Vielzahl von Zielmolekülen aktivieren.", korrekt: true },
      { nr: 2, text: "Kinasekaskaden verstärken das Signal, indem jede Kinase viele Substratmoleküle phosphoryliert.", korrekt: true },
      { nr: 3, text: "Second Messenger wie cAMP und Ca²⁺ tragen zur schnellen Signalausbreitung bei.", korrekt: true },
      { nr: 4, text: "Die Signalverstärkung ermöglicht eine Reaktion auf sehr geringe Hormonkonzentrationen.", korrekt: true },
      { nr: 5, text: "Signalverstärkung bedeutet, dass das Hormonsignal immer proportional verstärkt wird ohne Sättigung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Signalkaskaden zeigen typischerweise Sättigungsverhalten — ab einer bestimmten Konzentration nimmt die Verstärkung nicht weiter zu (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 021 Calcium als Second Messenger (mittel) ───
  {
    id: "bio-typk-new4-021",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu Calcium als Second Messenger sind richtig?\n\n1. Die intrazelluläre Ca²⁺-Konzentration ist im Ruhezustand sehr niedrig (ca. 100 nM).\n2. Ca²⁺ wird im endoplasmatischen Retikulum und in Mitochondrien gespeichert.\n3. Calmodulin ist ein Ca²⁺-bindendes Protein, das nach Aktivierung verschiedene Kinasen stimuliert.\n4. Ca²⁺-ATPasen (SERCA, PMCA) pumpen Ca²⁺ zurück in die Speicher bzw. aus der Zelle.\n5. Ein Anstieg der intrazellulären Ca²⁺-Konzentration hat stets hemmende Effekte auf Zellfunktionen.",
    aussagen: [
      { nr: 1, text: "Die intrazelluläre Ca²⁺-Konzentration ist im Ruhezustand sehr niedrig (ca. 100 nM).", korrekt: true },
      { nr: 2, text: "Ca²⁺ wird im endoplasmatischen Retikulum und in Mitochondrien gespeichert.", korrekt: true },
      { nr: 3, text: "Calmodulin ist ein Ca²⁺-bindendes Protein, das nach Aktivierung verschiedene Kinasen stimuliert.", korrekt: true },
      { nr: 4, text: "Ca²⁺-ATPasen (SERCA, PMCA) pumpen Ca²⁺ zurück in die Speicher bzw. aus der Zelle.", korrekt: true },
      { nr: 5, text: "Ein Anstieg der intrazellulären Ca²⁺-Konzentration hat stets hemmende Effekte auf Zellfunktionen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ca²⁺-Anstieg hat meist aktivierende Effekte (Muskelkontraktion, Exozytose, Genexpression) — nicht nur hemmende (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 022 Rezeptortyrosinkinasen (mittel) ───
  {
    id: "bio-typk-new4-022",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu Rezeptortyrosinkinasen (RTK) sind richtig?\n\n1. RTKs dimerisieren bei Ligandenbindung und autophosphorylieren Tyrosinreste.\n2. Die Ras-MAPK-Signalkaskade wird häufig durch RTKs aktiviert.\n3. Adaptorproteine wie Grb2 verbinden phosphorylierte RTKs mit nachgeschalteten Signalmolekülen.\n4. Mutationen in RTK-Genen können zu unkontrolliertem Zellwachstum und Krebs führen.\n5. RTKs benötigen keine Ligandenbindung für ihre Aktivierung.",
    aussagen: [
      { nr: 1, text: "RTKs dimerisieren bei Ligandenbindung und autophosphorylieren Tyrosinreste.", korrekt: true },
      { nr: 2, text: "Die Ras-MAPK-Signalkaskade wird häufig durch RTKs aktiviert.", korrekt: true },
      { nr: 3, text: "Adaptorproteine wie Grb2 verbinden phosphorylierte RTKs mit nachgeschalteten Signalmolekülen.", korrekt: true },
      { nr: 4, text: "Mutationen in RTK-Genen können zu unkontrolliertem Zellwachstum und Krebs führen.", korrekt: true },
      { nr: 5, text: "RTKs benötigen keine Ligandenbindung für ihre Aktivierung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. RTKs benötigen Ligandenbindung (z. B. Wachstumsfaktoren) für Dimerisierung und Aktivierung (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 023 Signaltransduktion Hormone (leicht) ───
  {
    id: "bio-typk-new4-023",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zur Signaltransduktion von Hormonen sind richtig?\n\n1. Steroidhormone binden an intrazelluläre Rezeptoren und wirken als Transkriptionsfaktoren.\n2. Peptidhormone binden an Oberflächenrezeptoren und nutzen Second Messenger.\n3. Adrenalin bindet an adrenerge Rezeptoren und aktiviert den cAMP-Signalweg.\n4. Insulin bindet an eine Rezeptortyrosinkinase.\n5. Alle Hormone wirken ausschließlich über intrazelluläre Rezeptoren.",
    aussagen: [
      { nr: 1, text: "Steroidhormone binden an intrazelluläre Rezeptoren und wirken als Transkriptionsfaktoren.", korrekt: true },
      { nr: 2, text: "Peptidhormone binden an Oberflächenrezeptoren und nutzen Second Messenger.", korrekt: true },
      { nr: 3, text: "Adrenalin bindet an adrenerge Rezeptoren und aktiviert den cAMP-Signalweg.", korrekt: true },
      { nr: 4, text: "Insulin bindet an eine Rezeptortyrosinkinase.", korrekt: true },
      { nr: 5, text: "Alle Hormone wirken ausschließlich über intrazelluläre Rezeptoren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Peptidhormone und Katecholamine wirken über Oberflächenrezeptoren — nur lipophile Hormone (Steroide, Schilddrüsenhormone) nutzen intrazelluläre Rezeptoren (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 024 Apoptose-Signalwege (schwer) ───
  {
    id: "bio-typk-new4-024",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu Apoptose-Signalwegen sind richtig?\n\n1. Der intrinsische Weg wird durch mitochondriale Cytochrom-c-Freisetzung ausgelöst.\n2. Der extrinsische Weg beginnt mit der Aktivierung von Todesrezeptoren (z. B. Fas, TNF-R).\n3. Caspasen sind Cysteinproteasen, die als zentrale Effektoren der Apoptose wirken.\n4. Bcl-2 ist ein anti-apoptotisches Protein, das Cytochrom c in den Mitochondrien zurückhält.\n5. Apoptose und Nekrose sind identische Prozesse des Zelltods.",
    aussagen: [
      { nr: 1, text: "Der intrinsische Weg wird durch mitochondriale Cytochrom-c-Freisetzung ausgelöst.", korrekt: true },
      { nr: 2, text: "Der extrinsische Weg beginnt mit der Aktivierung von Todesrezeptoren (z. B. Fas, TNF-R).", korrekt: true },
      { nr: 3, text: "Caspasen sind Cysteinproteasen, die als zentrale Effektoren der Apoptose wirken.", korrekt: true },
      { nr: 4, text: "Bcl-2 ist ein anti-apoptotisches Protein, das Cytochrom c in den Mitochondrien zurückhält.", korrekt: true },
      { nr: 5, text: "Apoptose und Nekrose sind identische Prozesse des Zelltods.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Apoptose ist programmierter, kontrollierter Zelltod ohne Entzündung, Nekrose dagegen ist unkontrollierter Zelltod mit Entzündungsreaktion (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 025 Notch-Signalweg (schwer) ───
  {
    id: "bio-typk-new4-025",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zum Notch-Signalweg sind richtig?\n\n1. Notch ist ein Transmembranrezeptor, der durch direkten Zell-Zell-Kontakt aktiviert wird.\n2. Bei Aktivierung wird die intrazelluläre Domäne von Notch abgespalten und wandert in den Kern.\n3. Im Kern wirkt die Notch-Domäne als Transkriptionsfaktor.\n4. Der Notch-Signalweg spielt eine wichtige Rolle bei der Zelldifferenzierung und Embryonalentwicklung.\n5. Notch-Liganden (z. B. Delta, Jagged) befinden sich frei gelöst im Blutplasma.",
    aussagen: [
      { nr: 1, text: "Notch ist ein Transmembranrezeptor, der durch direkten Zell-Zell-Kontakt aktiviert wird.", korrekt: true },
      { nr: 2, text: "Bei Aktivierung wird die intrazelluläre Domäne von Notch abgespalten und wandert in den Kern.", korrekt: true },
      { nr: 3, text: "Im Kern wirkt die Notch-Domäne als Transkriptionsfaktor.", korrekt: true },
      { nr: 4, text: "Der Notch-Signalweg spielt eine wichtige Rolle bei der Zelldifferenzierung und Embryonalentwicklung.", korrekt: true },
      { nr: 5, text: "Notch-Liganden (z. B. Delta, Jagged) befinden sich frei gelöst im Blutplasma.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Notch-Liganden sind membranständige Proteine auf Nachbarzellen, nicht frei löslich (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 026 Wnt-Signalweg (schwer) ───
  {
    id: "bio-typk-new4-026",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zum Wnt-Signalweg sind richtig?\n\n1. Im kanonischen Wnt-Weg wird β-Catenin stabilisiert und gelangt in den Zellkern.\n2. Ohne Wnt-Signal wird β-Catenin durch einen Destruktionskomplex phosphoryliert und abgebaut.\n3. β-Catenin aktiviert im Kern zusammen mit TCF/LEF-Transkriptionsfaktoren Zielgene.\n4. Der Wnt-Signalweg ist wichtig für Stammzellerhaltung und Embryogenese.\n5. APC (Adenomatous Polyposis Coli) aktiviert den Wnt-Signalweg und verhindert β-Catenin-Abbau.",
    aussagen: [
      { nr: 1, text: "Im kanonischen Wnt-Weg wird β-Catenin stabilisiert und gelangt in den Zellkern.", korrekt: true },
      { nr: 2, text: "Ohne Wnt-Signal wird β-Catenin durch einen Destruktionskomplex phosphoryliert und abgebaut.", korrekt: true },
      { nr: 3, text: "β-Catenin aktiviert im Kern zusammen mit TCF/LEF-Transkriptionsfaktoren Zielgene.", korrekt: true },
      { nr: 4, text: "Der Wnt-Signalweg ist wichtig für Stammzellerhaltung und Embryogenese.", korrekt: true },
      { nr: 5, text: "APC (Adenomatous Polyposis Coli) aktiviert den Wnt-Signalweg und verhindert β-Catenin-Abbau.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. APC ist Teil des Destruktionskomplexes und fördert den Abbau von β-Catenin — es hemmt den Wnt-Weg (5 falsch). APC-Mutationen sind häufig bei Darmkrebs.",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 027 Autokrine/parakrine Signale (leicht) ───
  {
    id: "bio-typk-new4-027",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zu Signalarten sind richtig?\n\n1. Autokrine Signale wirken auf die gleiche Zelle, die sie aussendet.\n2. Parakrine Signale wirken auf benachbarte Zellen in unmittelbarer Umgebung.\n3. Endokrine Signale werden über das Blut zu entfernten Zielzellen transportiert.\n4. Synaptische Signalübertragung erfolgt durch Neurotransmitter an der Synapse.\n5. Endokrine Signale wirken ausschließlich auf direkt benachbarte Zellen.",
    aussagen: [
      { nr: 1, text: "Autokrine Signale wirken auf die gleiche Zelle, die sie aussendet.", korrekt: true },
      { nr: 2, text: "Parakrine Signale wirken auf benachbarte Zellen in unmittelbarer Umgebung.", korrekt: true },
      { nr: 3, text: "Endokrine Signale werden über das Blut zu entfernten Zielzellen transportiert.", korrekt: true },
      { nr: 4, text: "Synaptische Signalübertragung erfolgt durch Neurotransmitter an der Synapse.", korrekt: true },
      { nr: 5, text: "Endokrine Signale wirken ausschließlich auf direkt benachbarte Zellen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Endokrine Signale wirken auf entfernte Zielzellen — das kennzeichnet die hormonelle Fernwirkung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 028 Phosphorylierung/Dephosphorylierung (mittel) ───
  {
    id: "bio-typk-new4-028",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zur Phosphorylierung in der Signaltransduktion sind richtig?\n\n1. Proteinkinasen übertragen Phosphatgruppen von ATP auf Proteine.\n2. Phosphatasen entfernen Phosphatgruppen von Proteinen und beenden so Signale.\n3. Phosphorylierung kann Proteine sowohl aktivieren als auch inaktivieren.\n4. Serin, Threonin und Tyrosin sind die häufigsten Phosphorylierungsstellen.\n5. Phosphorylierung verändert ausschließlich die Ladung, nie die Konformation eines Proteins.",
    aussagen: [
      { nr: 1, text: "Proteinkinasen übertragen Phosphatgruppen von ATP auf Proteine.", korrekt: true },
      { nr: 2, text: "Phosphatasen entfernen Phosphatgruppen von Proteinen und beenden so Signale.", korrekt: true },
      { nr: 3, text: "Phosphorylierung kann Proteine sowohl aktivieren als auch inaktivieren.", korrekt: true },
      { nr: 4, text: "Serin, Threonin und Tyrosin sind die häufigsten Phosphorylierungsstellen.", korrekt: true },
      { nr: 5, text: "Phosphorylierung verändert ausschließlich die Ladung, nie die Konformation eines Proteins.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Phosphorylierung verändert sowohl Ladung als auch Konformation eines Proteins, was die Aktivität beeinflusst (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 029 NO-Signalweg (mittel) ───
  {
    id: "bio-typk-new4-029",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zum Stickstoffmonoxid-(NO-)Signalweg sind richtig?\n\n1. NO wird durch die NO-Synthase (NOS) aus Arginin gebildet.\n2. NO ist ein gasförmiges Signalmolekül, das frei durch Membranen diffundiert.\n3. NO aktiviert die lösliche Guanylylcyclase, die cGMP bildet.\n4. cGMP bewirkt in glatten Muskelzellen eine Relaxation (Vasodilatation).\n5. NO ist sehr stabil und wirkt über Stunden.",
    aussagen: [
      { nr: 1, text: "NO wird durch die NO-Synthase (NOS) aus Arginin gebildet.", korrekt: true },
      { nr: 2, text: "NO ist ein gasförmiges Signalmolekül, das frei durch Membranen diffundiert.", korrekt: true },
      { nr: 3, text: "NO aktiviert die lösliche Guanylylcyclase, die cGMP bildet.", korrekt: true },
      { nr: 4, text: "cGMP bewirkt in glatten Muskelzellen eine Relaxation (Vasodilatation).", korrekt: true },
      { nr: 5, text: "NO ist sehr stabil und wirkt über Stunden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. NO hat eine sehr kurze Halbwertszeit von nur wenigen Sekunden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 030 Signaltermination (leicht) ───
  {
    id: "bio-typk-new4-030",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-03",
    stamm: "Welche der folgenden Aussagen zur Beendigung (Termination) von Signalen sind richtig?\n\n1. Rezeptorinternalisierung durch Endozytose reduziert die Rezeptordichte an der Zelloberfläche.\n2. GTPasen schalten G-Proteine ab, indem sie GTP zu GDP hydrolysieren.\n3. Phosphodiesterasen bauen cyclische Nukleotide (cAMP, cGMP) ab.\n4. Proteinphosphatasen dephosphorylieren signalübertragende Proteine.\n5. Signale werden nie aktiv beendet, sondern klingen passiv ab.",
    aussagen: [
      { nr: 1, text: "Rezeptorinternalisierung durch Endozytose reduziert die Rezeptordichte an der Zelloberfläche.", korrekt: true },
      { nr: 2, text: "GTPasen schalten G-Proteine ab, indem sie GTP zu GDP hydrolysieren.", korrekt: true },
      { nr: 3, text: "Phosphodiesterasen bauen cyclische Nukleotide (cAMP, cGMP) ab.", korrekt: true },
      { nr: 4, text: "Proteinphosphatasen dephosphorylieren signalübertragende Proteine.", korrekt: true },
      { nr: 5, text: "Signale werden nie aktiv beendet, sondern klingen passiv ab.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Zellen besitzen zahlreiche aktive Mechanismen zur Signalbeendigung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 031–045: STOFFWECHSEL ────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 031 Glykolyse Grundlagen (leicht) ───
  {
    id: "bio-typk-new4-031",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Glykolyse sind richtig?\n\n1. Die Glykolyse findet im Zytoplasma statt.\n2. Ein Molekül Glucose wird in zwei Moleküle Pyruvat gespalten.\n3. Die Nettobilanz der Glykolyse beträgt 2 ATP und 2 NADH pro Glucose.\n4. Die Glykolyse läuft sowohl aerob als auch anaerob ab.\n5. Die Glykolyse benötigt Sauerstoff als Elektronenakzeptor.",
    aussagen: [
      { nr: 1, text: "Die Glykolyse findet im Zytoplasma statt.", korrekt: true },
      { nr: 2, text: "Ein Molekül Glucose wird in zwei Moleküle Pyruvat gespalten.", korrekt: true },
      { nr: 3, text: "Die Nettobilanz der Glykolyse beträgt 2 ATP und 2 NADH pro Glucose.", korrekt: true },
      { nr: 4, text: "Die Glykolyse läuft sowohl aerob als auch anaerob ab.", korrekt: true },
      { nr: 5, text: "Die Glykolyse benötigt Sauerstoff als Elektronenakzeptor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Glykolyse ist ein anaerober Prozess und benötigt keinen Sauerstoff (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 032 Glykolyse-Enzyme (mittel) ───
  {
    id: "bio-typk-new4-032",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zu Schlüsselenzymen der Glykolyse sind richtig?\n\n1. Die Hexokinase katalysiert die Phosphorylierung von Glucose zu Glucose-6-phosphat.\n2. Phosphofructokinase-1 (PFK-1) ist das geschwindigkeitsbestimmende Enzym der Glykolyse.\n3. PFK-1 wird durch ATP allosterisch gehemmt und durch AMP aktiviert.\n4. Pyruvatkinase katalysiert den letzten Schritt und erzeugt Pyruvat und ATP.\n5. Alle Glykolyse-Reaktionen sind irreversibel.",
    aussagen: [
      { nr: 1, text: "Die Hexokinase katalysiert die Phosphorylierung von Glucose zu Glucose-6-phosphat.", korrekt: true },
      { nr: 2, text: "Phosphofructokinase-1 (PFK-1) ist das geschwindigkeitsbestimmende Enzym der Glykolyse.", korrekt: true },
      { nr: 3, text: "PFK-1 wird durch ATP allosterisch gehemmt und durch AMP aktiviert.", korrekt: true },
      { nr: 4, text: "Pyruvatkinase katalysiert den letzten Schritt und erzeugt Pyruvat und ATP.", korrekt: true },
      { nr: 5, text: "Alle Glykolyse-Reaktionen sind irreversibel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nur drei Reaktionen der Glykolyse sind irreversibel (Hexokinase, PFK-1, Pyruvatkinase) — die übrigen sieben sind reversibel (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 033 Citratzyklus (mittel) ───
  {
    id: "bio-typk-new4-033",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zum Citratzyklus sind richtig?\n\n1. Der Citratzyklus findet in der mitochondrialen Matrix statt.\n2. Acetyl-CoA wird mit Oxalacetat zu Citrat kondensiert.\n3. Pro Durchlauf entstehen 3 NADH, 1 FADH₂ und 1 GTP (bzw. ATP).\n4. Der Citratzyklus ist ein amphiboler Stoffwechselweg (katabol und anabol).\n5. Pyruvat wird direkt in den Citratzyklus eingespeist, ohne vorherige Umwandlung.",
    aussagen: [
      { nr: 1, text: "Der Citratzyklus findet in der mitochondrialen Matrix statt.", korrekt: true },
      { nr: 2, text: "Acetyl-CoA wird mit Oxalacetat zu Citrat kondensiert.", korrekt: true },
      { nr: 3, text: "Pro Durchlauf entstehen 3 NADH, 1 FADH₂ und 1 GTP (bzw. ATP).", korrekt: true },
      { nr: 4, text: "Der Citratzyklus ist ein amphiboler Stoffwechselweg (katabol und anabol).", korrekt: true },
      { nr: 5, text: "Pyruvat wird direkt in den Citratzyklus eingespeist, ohne vorherige Umwandlung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Pyruvat muss zuerst durch die Pyruvatdehydrogenase zu Acetyl-CoA umgewandelt werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 034 Atmungskette Grundlagen (leicht) ───
  {
    id: "bio-typk-new4-034",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Atmungskette sind richtig?\n\n1. Die Atmungskette befindet sich in der inneren Mitochondrienmembran.\n2. NADH und FADH₂ liefern Elektronen für die Atmungskette.\n3. Sauerstoff ist der finale Elektronenakzeptor und wird zu Wasser reduziert.\n4. Die Atmungskette besteht aus vier Proteinkomplexen (Komplex I–IV).\n5. Die Atmungskette produziert direkt große Mengen ATP durch Substratkettenphosphorylierung.",
    aussagen: [
      { nr: 1, text: "Die Atmungskette befindet sich in der inneren Mitochondrienmembran.", korrekt: true },
      { nr: 2, text: "NADH und FADH₂ liefern Elektronen für die Atmungskette.", korrekt: true },
      { nr: 3, text: "Sauerstoff ist der finale Elektronenakzeptor und wird zu Wasser reduziert.", korrekt: true },
      { nr: 4, text: "Die Atmungskette besteht aus vier Proteinkomplexen (Komplex I–IV).", korrekt: true },
      { nr: 5, text: "Die Atmungskette produziert direkt große Mengen ATP durch Substratkettenphosphorylierung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Atmungskette baut einen Protonengradienten auf; ATP wird dann durch die ATP-Synthase (oxidative Phosphorylierung) gebildet, nicht durch Substratkettenphosphorylierung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 035 Oxidative Phosphorylierung (mittel) ───
  {
    id: "bio-typk-new4-035",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur oxidativen Phosphorylierung sind richtig?\n\n1. Die ATP-Synthase nutzt den Protonengradienten über die innere Mitochondrienmembran.\n2. Der Protonengradient wird durch die Komplexe I, III und IV aufgebaut.\n3. Die chemiosmotische Hypothese von Peter Mitchell erklärt den Mechanismus.\n4. Pro NADH werden etwa 2,5 ATP gebildet, pro FADH₂ etwa 1,5 ATP.\n5. Die ATP-Synthase befindet sich in der äußeren Mitochondrienmembran.",
    aussagen: [
      { nr: 1, text: "Die ATP-Synthase nutzt den Protonengradienten über die innere Mitochondrienmembran.", korrekt: true },
      { nr: 2, text: "Der Protonengradient wird durch die Komplexe I, III und IV aufgebaut.", korrekt: true },
      { nr: 3, text: "Die chemiosmotische Hypothese von Peter Mitchell erklärt den Mechanismus.", korrekt: true },
      { nr: 4, text: "Pro NADH werden etwa 2,5 ATP gebildet, pro FADH₂ etwa 1,5 ATP.", korrekt: true },
      { nr: 5, text: "Die ATP-Synthase befindet sich in der äußeren Mitochondrienmembran.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die ATP-Synthase sitzt in der inneren Mitochondrienmembran, nicht in der äußeren (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 036 Milchsäuregärung (leicht) ───
  {
    id: "bio-typk-new4-036",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Milchsäuregärung sind richtig?\n\n1. Bei der Milchsäuregärung wird Pyruvat zu Laktat reduziert.\n2. NADH wird dabei zu NAD⁺ reoxidiert, damit die Glykolyse weiterlaufen kann.\n3. In Skelettmuskelzellen findet bei Sauerstoffmangel Milchsäuregärung statt.\n4. Die Netto-ATP-Ausbeute der Milchsäuregärung beträgt 2 ATP pro Glucose.\n5. Bei der Milchsäuregärung wird CO₂ freigesetzt.",
    aussagen: [
      { nr: 1, text: "Bei der Milchsäuregärung wird Pyruvat zu Laktat reduziert.", korrekt: true },
      { nr: 2, text: "NADH wird dabei zu NAD⁺ reoxidiert, damit die Glykolyse weiterlaufen kann.", korrekt: true },
      { nr: 3, text: "In Skelettmuskelzellen findet bei Sauerstoffmangel Milchsäuregärung statt.", korrekt: true },
      { nr: 4, text: "Die Netto-ATP-Ausbeute der Milchsäuregärung beträgt 2 ATP pro Glucose.", korrekt: true },
      { nr: 5, text: "Bei der Milchsäuregärung wird CO₂ freigesetzt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei der Milchsäuregärung wird kein CO₂ freigesetzt — im Gegensatz zur alkoholischen Gärung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 037 β-Oxidation (mittel) ───
  {
    id: "bio-typk-new4-037",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur β-Oxidation von Fettsäuren sind richtig?\n\n1. Die β-Oxidation findet in der mitochondrialen Matrix statt.\n2. Pro Durchlauf werden ein Acetyl-CoA, ein FADH₂ und ein NADH abgespalten.\n3. Langkettige Fettsäuren müssen mithilfe des Carnitin-Shuttles ins Mitochondrium transportiert werden.\n4. Die Fettsäure wird am β-Kohlenstoff oxidiert und um zwei C-Atome verkürzt.\n5. Die β-Oxidation findet ausschließlich im Zytoplasma statt.",
    aussagen: [
      { nr: 1, text: "Die β-Oxidation findet in der mitochondrialen Matrix statt.", korrekt: true },
      { nr: 2, text: "Pro Durchlauf werden ein Acetyl-CoA, ein FADH₂ und ein NADH abgespalten.", korrekt: true },
      { nr: 3, text: "Langkettige Fettsäuren müssen mithilfe des Carnitin-Shuttles ins Mitochondrium transportiert werden.", korrekt: true },
      { nr: 4, text: "Die Fettsäure wird am β-Kohlenstoff oxidiert und um zwei C-Atome verkürzt.", korrekt: true },
      { nr: 5, text: "Die β-Oxidation findet ausschließlich im Zytoplasma statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die β-Oxidation findet in der mitochondrialen Matrix statt, nicht im Zytoplasma (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 038 Ketonkörper (schwer) ───
  {
    id: "bio-typk-new4-038",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zu Ketonkörpern sind richtig?\n\n1. Ketonkörper werden in der Leber aus Acetyl-CoA gebildet.\n2. Acetoacetat, β-Hydroxybutyrat und Aceton sind die drei Ketonkörper.\n3. Ketonkörper dienen extrahepatischen Geweben, besonders dem Gehirn, als alternative Energiequelle.\n4. Bei Diabetes mellitus Typ 1 kann eine Ketoazidose auftreten.\n5. Die Leber kann Ketonkörper sowohl bilden als auch verwerten.",
    aussagen: [
      { nr: 1, text: "Ketonkörper werden in der Leber aus Acetyl-CoA gebildet.", korrekt: true },
      { nr: 2, text: "Acetoacetat, β-Hydroxybutyrat und Aceton sind die drei Ketonkörper.", korrekt: true },
      { nr: 3, text: "Ketonkörper dienen extrahepatischen Geweben, besonders dem Gehirn, als alternative Energiequelle.", korrekt: true },
      { nr: 4, text: "Bei Diabetes mellitus Typ 1 kann eine Ketoazidose auftreten.", korrekt: true },
      { nr: 5, text: "Die Leber kann Ketonkörper sowohl bilden als auch verwerten.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Leber bildet Ketonkörper, kann sie aber selbst nicht verwerten, da ihr das Enzym Succinyl-CoA-Acetoacetyl-CoA-Transferase fehlt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 039 Gluconeogenese (schwer) ───
  {
    id: "bio-typk-new4-039",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Gluconeogenese sind richtig?\n\n1. Die Gluconeogenese findet hauptsächlich in Leber und Nierenrinde statt.\n2. Die Gluconeogenese ist die exakte Umkehrung der Glykolyse.\n3. Drei Glykolyse-Reaktionen sind irreversibel und werden in der Gluconeogenese umgangen.\n4. Oxalacetat, Laktat und glucogene Aminosäuren sind Substrate der Gluconeogenese.\n5. Die Gluconeogenese wird durch Insulin stimuliert und durch Glucagon gehemmt.",
    aussagen: [
      { nr: 1, text: "Die Gluconeogenese findet hauptsächlich in Leber und Nierenrinde statt.", korrekt: true },
      { nr: 2, text: "Die Gluconeogenese ist die exakte Umkehrung der Glykolyse.", korrekt: false },
      { nr: 3, text: "Drei Glykolyse-Reaktionen sind irreversibel und werden in der Gluconeogenese umgangen.", korrekt: true },
      { nr: 4, text: "Oxalacetat, Laktat und glucogene Aminosäuren sind Substrate der Gluconeogenese.", korrekt: true },
      { nr: 5, text: "Die Gluconeogenese wird durch Insulin stimuliert und durch Glucagon gehemmt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [1, 2, 3] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 3 und 4. Die Gluconeogenese ist nicht die exakte Umkehrung (2 falsch). Glucagon stimuliert die Gluconeogenese, Insulin hemmt sie (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 040 Pentosephosphatweg (schwer) ───
  {
    id: "bio-typk-new4-040",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zum Pentosephosphatweg sind richtig?\n\n1. Der Pentosephosphatweg findet im Zytoplasma statt.\n2. Er liefert NADPH für reduktive Biosynthesen (z. B. Fettsäuresynthese).\n3. Ribose-5-phosphat wird für die Nukleotidsynthese bereitgestellt.\n4. Glucose-6-phosphat-Dehydrogenase katalysiert den geschwindigkeitsbestimmenden Schritt.\n5. Der Pentosephosphatweg produziert mehr ATP als die Glykolyse.",
    aussagen: [
      { nr: 1, text: "Der Pentosephosphatweg findet im Zytoplasma statt.", korrekt: true },
      { nr: 2, text: "Er liefert NADPH für reduktive Biosynthesen (z. B. Fettsäuresynthese).", korrekt: true },
      { nr: 3, text: "Ribose-5-phosphat wird für die Nukleotidsynthese bereitgestellt.", korrekt: true },
      { nr: 4, text: "Glucose-6-phosphat-Dehydrogenase katalysiert den geschwindigkeitsbestimmenden Schritt.", korrekt: true },
      { nr: 5, text: "Der Pentosephosphatweg produziert mehr ATP als die Glykolyse.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Pentosephosphatweg produziert kein ATP direkt — sein Hauptzweck ist NADPH und Ribose-5-phosphat (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 041 Energiebilanz Glucose (leicht) ───
  {
    id: "bio-typk-new4-041",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Energiebilanz der vollständigen Glucoseoxidation sind richtig?\n\n1. Die vollständige Oxidation eines Glucosemoleküls ergibt etwa 30–32 ATP.\n2. Die Glykolyse liefert netto 2 ATP.\n3. Der Citratzyklus liefert pro Glucosemolekül (2 Durchläufe) 2 GTP.\n4. Die meisten ATP entstehen durch oxidative Phosphorylierung in der Atmungskette.\n5. Die Energieausbeute der anaeroben Glykolyse ist ebenso hoch wie die der aeroben Oxidation.",
    aussagen: [
      { nr: 1, text: "Die vollständige Oxidation eines Glucosemoleküls ergibt etwa 30–32 ATP.", korrekt: true },
      { nr: 2, text: "Die Glykolyse liefert netto 2 ATP.", korrekt: true },
      { nr: 3, text: "Der Citratzyklus liefert pro Glucosemolekül (2 Durchläufe) 2 GTP.", korrekt: true },
      { nr: 4, text: "Die meisten ATP entstehen durch oxidative Phosphorylierung in der Atmungskette.", korrekt: true },
      { nr: 5, text: "Die Energieausbeute der anaeroben Glykolyse ist ebenso hoch wie die der aeroben Oxidation.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die anaerobe Glykolyse liefert nur 2 ATP, die aerobe Oxidation dagegen ca. 30–32 ATP (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 042 Pyruvatdehydrogenase (mittel) ───
  {
    id: "bio-typk-new4-042",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zum Pyruvatdehydrogenase-Komplex (PDH) sind richtig?\n\n1. PDH wandelt Pyruvat in Acetyl-CoA um und verbindet damit Glykolyse und Citratzyklus.\n2. Bei der Reaktion werden CO₂ und NADH gebildet.\n3. Der PDH-Komplex benötigt fünf Coenzyme: TPP, Liponamid, CoA, FAD und NAD⁺.\n4. PDH wird durch hohe Konzentrationen von Acetyl-CoA und NADH gehemmt.\n5. PDH befindet sich im Zytoplasma, genau wie die Glykolyse-Enzyme.",
    aussagen: [
      { nr: 1, text: "PDH wandelt Pyruvat in Acetyl-CoA um und verbindet damit Glykolyse und Citratzyklus.", korrekt: true },
      { nr: 2, text: "Bei der Reaktion werden CO₂ und NADH gebildet.", korrekt: true },
      { nr: 3, text: "Der PDH-Komplex benötigt fünf Coenzyme: TPP, Liponamid, CoA, FAD und NAD⁺.", korrekt: true },
      { nr: 4, text: "PDH wird durch hohe Konzentrationen von Acetyl-CoA und NADH gehemmt.", korrekt: true },
      { nr: 5, text: "PDH befindet sich im Zytoplasma, genau wie die Glykolyse-Enzyme.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. PDH befindet sich in der mitochondrialen Matrix, nicht im Zytoplasma (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 043 Fettsäuresynthese (schwer) ───
  {
    id: "bio-typk-new4-043",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Fettsäuresynthese sind richtig?\n\n1. Die Fettsäuresynthese findet im Zytoplasma statt.\n2. Acetyl-CoA-Carboxylase katalysiert den geschwindigkeitsbestimmenden Schritt und bildet Malonyl-CoA.\n3. Die Fettsäuresynthase ist ein multifunktioneller Enzymkomplex.\n4. NADPH ist der benötigte Reduktionsmittellieferant.\n5. Die Fettsäuresynthese und die β-Oxidation laufen im gleichen Kompartiment ab.",
    aussagen: [
      { nr: 1, text: "Die Fettsäuresynthese findet im Zytoplasma statt.", korrekt: true },
      { nr: 2, text: "Acetyl-CoA-Carboxylase katalysiert den geschwindigkeitsbestimmenden Schritt und bildet Malonyl-CoA.", korrekt: true },
      { nr: 3, text: "Die Fettsäuresynthase ist ein multifunktioneller Enzymkomplex.", korrekt: true },
      { nr: 4, text: "NADPH ist der benötigte Reduktionsmittellieferant.", korrekt: true },
      { nr: 5, text: "Die Fettsäuresynthese und die β-Oxidation laufen im gleichen Kompartiment ab.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Fettsäuresynthese läuft im Zytoplasma ab, die β-Oxidation in der mitochondrialen Matrix — unterschiedliche Kompartimente (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 044 Alkoholische Gärung (leicht) ───
  {
    id: "bio-typk-new4-044",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur alkoholischen Gärung sind richtig?\n\n1. Bei der alkoholischen Gärung entsteht Ethanol und CO₂ aus Pyruvat.\n2. Die alkoholische Gärung wird von Hefen und einigen Bakterien durchgeführt.\n3. NADH wird zu NAD⁺ reoxidiert, um die Glykolyse aufrechtzuerhalten.\n4. Die Netto-ATP-Ausbeute beträgt 2 ATP pro Glucose.\n5. Die alkoholische Gärung findet in den Mitochondrien statt.",
    aussagen: [
      { nr: 1, text: "Bei der alkoholischen Gärung entsteht Ethanol und CO₂ aus Pyruvat.", korrekt: true },
      { nr: 2, text: "Die alkoholische Gärung wird von Hefen und einigen Bakterien durchgeführt.", korrekt: true },
      { nr: 3, text: "NADH wird zu NAD⁺ reoxidiert, um die Glykolyse aufrechtzuerhalten.", korrekt: true },
      { nr: 4, text: "Die Netto-ATP-Ausbeute beträgt 2 ATP pro Glucose.", korrekt: true },
      { nr: 5, text: "Die alkoholische Gärung findet in den Mitochondrien statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die alkoholische Gärung findet im Zytoplasma statt, nicht in den Mitochondrien (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 045 Stoffwechselregulation (schwer) ───
  {
    id: "bio-typk-new4-045",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-05",
    stamm: "Welche der folgenden Aussagen zur Regulation des Energiestoffwechsels sind richtig?\n\n1. Ein hohes ATP/ADP-Verhältnis hemmt katabole Wege.\n2. Allosterische Regulation ermöglicht schnelle Anpassung der Enzymaktivität.\n3. Fructose-2,6-bisphosphat aktiviert PFK-1 und stimuliert die Glykolyse.\n4. Insulin fördert die Glykogensynthese und hemmt die Gluconeogenese.\n5. Die Regulation des Stoffwechsels erfolgt ausschließlich über allosterische Mechanismen.",
    aussagen: [
      { nr: 1, text: "Ein hohes ATP/ADP-Verhältnis hemmt katabole Wege.", korrekt: true },
      { nr: 2, text: "Allosterische Regulation ermöglicht schnelle Anpassung der Enzymaktivität.", korrekt: true },
      { nr: 3, text: "Fructose-2,6-bisphosphat aktiviert PFK-1 und stimuliert die Glykolyse.", korrekt: true },
      { nr: 4, text: "Insulin fördert die Glykogensynthese und hemmt die Gluconeogenese.", korrekt: true },
      { nr: 5, text: "Die Regulation des Stoffwechsels erfolgt ausschließlich über allosterische Mechanismen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Stoffwechsel wird auch durch hormonelle Signale, kovalente Modifikation und Genexpression reguliert — nicht nur allosterisch (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 046–060: GENETIK VERTIEFUNG ─────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 046 Epigenetik Grundlagen (leicht) ───
  {
    id: "bio-typk-new4-046",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Epigenetik sind richtig?\n\n1. Epigenetische Veränderungen beeinflussen die Genexpression, ohne die DNA-Sequenz zu verändern.\n2. DNA-Methylierung von Cytosin-Resten (CpG) ist eine wichtige epigenetische Modifikation.\n3. Hypermethylierung von Promotorregionen führt in der Regel zur Genaktivierung.\n4. Epigenetische Muster können bei der Zellteilung an Tochterzellen weitergegeben werden.\n5. Histonmodifikationen zählen zu den epigenetischen Mechanismen.",
    aussagen: [
      { nr: 1, text: "Epigenetische Veränderungen beeinflussen die Genexpression, ohne die DNA-Sequenz zu verändern.", korrekt: true },
      { nr: 2, text: "DNA-Methylierung von Cytosin-Resten (CpG) ist eine wichtige epigenetische Modifikation.", korrekt: true },
      { nr: 3, text: "Hypermethylierung von Promotorregionen führt in der Regel zur Genaktivierung.", korrekt: false },
      { nr: 4, text: "Epigenetische Muster können bei der Zellteilung an Tochterzellen weitergegeben werden.", korrekt: true },
      { nr: 5, text: "Histonmodifikationen zählen zu den epigenetischen Mechanismen.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Hypermethylierung von Promotorregionen führt zur Geninaktivierung (Silencing), nicht zur Aktivierung (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 047 Histonmodifikationen (mittel) ───
  {
    id: "bio-typk-new4-047",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Histonmodifikationen sind richtig?\n\n1. Histonacetylierung durch Histonacetyltransferasen (HATs) lockert die Chromatinstruktur.\n2. Histondeacetylasen (HDACs) entfernen Acetylgruppen und fördern die Chromatinkondensation.\n3. Acetylierung von Lysinresten neutralisiert deren positive Ladung.\n4. Histonmethylierung kann je nach Position aktivierend oder reprimierend wirken.\n5. Histonmodifikationen verändern die DNA-Sequenz der Gene.",
    aussagen: [
      { nr: 1, text: "Histonacetylierung durch Histonacetyltransferasen (HATs) lockert die Chromatinstruktur.", korrekt: true },
      { nr: 2, text: "Histondeacetylasen (HDACs) entfernen Acetylgruppen und fördern die Chromatinkondensation.", korrekt: true },
      { nr: 3, text: "Acetylierung von Lysinresten neutralisiert deren positive Ladung.", korrekt: true },
      { nr: 4, text: "Histonmethylierung kann je nach Position aktivierend oder reprimierend wirken.", korrekt: true },
      { nr: 5, text: "Histonmodifikationen verändern die DNA-Sequenz der Gene.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Histonmodifikationen beeinflussen die Chromatinstruktur und Genexpression, verändern aber nicht die DNA-Sequenz (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 048 Genomisches Imprinting (mittel) ───
  {
    id: "bio-typk-new4-048",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zum genomischen Imprinting sind richtig?\n\n1. Beim Imprinting wird eines der elterlichen Allele durch Methylierung stillgelegt.\n2. Imprinting führt zu einer monoallelischen Expression bestimmter Gene.\n3. Das Prader-Willi-Syndrom und das Angelman-Syndrom betreffen die gleiche chromosomale Region (15q).\n4. Imprinting-Muster werden in der Keimbahn neu etabliert.\n5. Imprinting betrifft alle Gene im menschlichen Genom gleichermaßen.",
    aussagen: [
      { nr: 1, text: "Beim Imprinting wird eines der elterlichen Allele durch Methylierung stillgelegt.", korrekt: true },
      { nr: 2, text: "Imprinting führt zu einer monoallelischen Expression bestimmter Gene.", korrekt: true },
      { nr: 3, text: "Das Prader-Willi-Syndrom und das Angelman-Syndrom betreffen die gleiche chromosomale Region (15q).", korrekt: true },
      { nr: 4, text: "Imprinting-Muster werden in der Keimbahn neu etabliert.", korrekt: true },
      { nr: 5, text: "Imprinting betrifft alle Gene im menschlichen Genom gleichermaßen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Imprinting betrifft nur eine kleine Zahl von Genen (ca. 100–200 beim Menschen), nicht alle Gene gleichermaßen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 049 Genregulation bei Prokaryoten (leicht) ───
  {
    id: "bio-typk-new4-049",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Genregulation bei Prokaryoten sind richtig?\n\n1. Das Operon-Modell wurde von Jacob und Monod am Lac-Operon von E. coli beschrieben.\n2. Ein Operon besteht aus Promotor, Operator und Strukturgenen.\n3. Beim Lac-Operon wirkt Laktose als Induktor, der den Repressor inaktiviert.\n4. Das Trp-Operon wird durch Tryptophan reprimiert (negative Kontrolle).\n5. Eukaryoten organisieren ihre Gene ebenfalls in Operons.",
    aussagen: [
      { nr: 1, text: "Das Operon-Modell wurde von Jacob und Monod am Lac-Operon von E. coli beschrieben.", korrekt: true },
      { nr: 2, text: "Ein Operon besteht aus Promotor, Operator und Strukturgenen.", korrekt: true },
      { nr: 3, text: "Beim Lac-Operon wirkt Laktose als Induktor, der den Repressor inaktiviert.", korrekt: true },
      { nr: 4, text: "Das Trp-Operon wird durch Tryptophan reprimiert (negative Kontrolle).", korrekt: true },
      { nr: 5, text: "Eukaryoten organisieren ihre Gene ebenfalls in Operons.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Eukaryoten besitzen keine Operons — jedes Gen hat in der Regel seinen eigenen Promotor (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 050 RNA-Interferenz (mittel) ───
  {
    id: "bio-typk-new4-050",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur RNA-Interferenz (RNAi) sind richtig?\n\n1. RNAi ist ein Mechanismus zur posttranskriptionellen Genregulation.\n2. MicroRNAs (miRNAs) werden aus Vorläufer-RNA durch Dicer-Prozessierung gebildet.\n3. Der RISC-Komplex (RNA-induced silencing complex) bindet die Ziel-mRNA und hemmt deren Translation.\n4. siRNAs (small interfering RNAs) führen zum Abbau komplementärer mRNA.\n5. RNAi erhöht die Proteinproduktion der Zielgene.",
    aussagen: [
      { nr: 1, text: "RNAi ist ein Mechanismus zur posttranskriptionellen Genregulation.", korrekt: true },
      { nr: 2, text: "MicroRNAs (miRNAs) werden aus Vorläufer-RNA durch Dicer-Prozessierung gebildet.", korrekt: true },
      { nr: 3, text: "Der RISC-Komplex (RNA-induced silencing complex) bindet die Ziel-mRNA und hemmt deren Translation.", korrekt: true },
      { nr: 4, text: "siRNAs (small interfering RNAs) führen zum Abbau komplementärer mRNA.", korrekt: true },
      { nr: 5, text: "RNAi erhöht die Proteinproduktion der Zielgene.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. RNAi vermindert (silenced) die Genexpression, statt sie zu erhöhen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 051 Alternatives Spleißen (mittel) ───
  {
    id: "bio-typk-new4-051",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zum alternativen Spleißen sind richtig?\n\n1. Alternatives Spleißen ermöglicht die Bildung verschiedener mRNA-Varianten aus einem Gen.\n2. Durch alternatives Spleißen kann ein Gen für mehrere Proteinvarianten codieren.\n3. Exons werden beim Spleißen entfernt und Introns bleiben in der reifen mRNA.\n4. Das Spleißosom ist ein Ribonukleoprotein-Komplex aus snRNAs und Proteinen.\n5. Alternatives Spleißen erhöht die Proteinvielfalt des Proteoms.",
    aussagen: [
      { nr: 1, text: "Alternatives Spleißen ermöglicht die Bildung verschiedener mRNA-Varianten aus einem Gen.", korrekt: true },
      { nr: 2, text: "Durch alternatives Spleißen kann ein Gen für mehrere Proteinvarianten codieren.", korrekt: true },
      { nr: 3, text: "Exons werden beim Spleißen entfernt und Introns bleiben in der reifen mRNA.", korrekt: false },
      { nr: 4, text: "Das Spleißosom ist ein Ribonukleoprotein-Komplex aus snRNAs und Proteinen.", korrekt: true },
      { nr: 5, text: "Alternatives Spleißen erhöht die Proteinvielfalt des Proteoms.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Beim Spleißen werden Introns entfernt und Exons bleiben in der reifen mRNA — nicht umgekehrt (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 052 X-Inaktivierung (leicht) ───
  {
    id: "bio-typk-new4-052",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur X-Inaktivierung sind richtig?\n\n1. Bei weiblichen Säugetieren wird eines der beiden X-Chromosomen inaktiviert.\n2. Das inaktivierte X-Chromosom bildet ein Barr-Körperchen am Kernrand.\n3. Die X-Inaktivierung erfolgt zufällig und früh in der Embryonalentwicklung.\n4. Die XIST-RNA spielt eine zentrale Rolle bei der X-Inaktivierung.\n5. Beim Mann werden beide X-Chromosomen inaktiviert.",
    aussagen: [
      { nr: 1, text: "Bei weiblichen Säugetieren wird eines der beiden X-Chromosomen inaktiviert.", korrekt: true },
      { nr: 2, text: "Das inaktivierte X-Chromosom bildet ein Barr-Körperchen am Kernrand.", korrekt: true },
      { nr: 3, text: "Die X-Inaktivierung erfolgt zufällig und früh in der Embryonalentwicklung.", korrekt: true },
      { nr: 4, text: "Die XIST-RNA spielt eine zentrale Rolle bei der X-Inaktivierung.", korrekt: true },
      { nr: 5, text: "Beim Mann werden beide X-Chromosomen inaktiviert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Männer besitzen nur ein X-Chromosom (XY), das aktiv bleibt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 053 Transkriptionsfaktoren Eukaryoten (schwer) ───
  {
    id: "bio-typk-new4-053",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu eukaryotischen Transkriptionsfaktoren sind richtig?\n\n1. Basale Transkriptionsfaktoren (z. B. TFIID) binden an die TATA-Box im Promotor.\n2. Enhancer sind DNA-Sequenzen, die die Transkription auch über große Distanzen aktivieren können.\n3. Silencer sind regulatorische Elemente, die die Transkription hemmen.\n4. Mediatorkomplexe vermitteln zwischen Transkriptionsfaktoren und der RNA-Polymerase II.\n5. Eukaryotische Transkription wird ausschließlich auf Promotor-Ebene reguliert.",
    aussagen: [
      { nr: 1, text: "Basale Transkriptionsfaktoren (z. B. TFIID) binden an die TATA-Box im Promotor.", korrekt: true },
      { nr: 2, text: "Enhancer sind DNA-Sequenzen, die die Transkription auch über große Distanzen aktivieren können.", korrekt: true },
      { nr: 3, text: "Silencer sind regulatorische Elemente, die die Transkription hemmen.", korrekt: true },
      { nr: 4, text: "Mediatorkomplexe vermitteln zwischen Transkriptionsfaktoren und der RNA-Polymerase II.", korrekt: true },
      { nr: 5, text: "Eukaryotische Transkription wird ausschließlich auf Promotor-Ebene reguliert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Eukaryotische Genexpression wird auf vielen Ebenen reguliert: Chromatin, Transkription, Spleißen, Translation und posttranskriptionell (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 054 Epigenetik und Umwelt (mittel) ───
  {
    id: "bio-typk-new4-054",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zum Einfluss der Umwelt auf die Epigenetik sind richtig?\n\n1. Ernährung, Stress und Umweltgifte können epigenetische Muster verändern.\n2. Transgenerationale epigenetische Vererbung wurde in Tiermodellen nachgewiesen.\n3. Eineiige Zwillinge zeigen mit zunehmendem Alter zunehmend unterschiedliche Epigenome.\n4. Epigenetische Veränderungen können zur Tumorentstehung beitragen.\n5. Umwelteinflüsse auf die Epigenetik sind immer irreversibel.",
    aussagen: [
      { nr: 1, text: "Ernährung, Stress und Umweltgifte können epigenetische Muster verändern.", korrekt: true },
      { nr: 2, text: "Transgenerationale epigenetische Vererbung wurde in Tiermodellen nachgewiesen.", korrekt: true },
      { nr: 3, text: "Eineiige Zwillinge zeigen mit zunehmendem Alter zunehmend unterschiedliche Epigenome.", korrekt: true },
      { nr: 4, text: "Epigenetische Veränderungen können zur Tumorentstehung beitragen.", korrekt: true },
      { nr: 5, text: "Umwelteinflüsse auf die Epigenetik sind immer irreversibel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Epigenetische Veränderungen sind prinzipiell reversibel — das macht sie zum Ziel epigenetischer Therapien (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 055 mRNA-Prozessierung (leicht) ───
  {
    id: "bio-typk-new4-055",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur mRNA-Prozessierung bei Eukaryoten sind richtig?\n\n1. Die 5'-Kappe (Cap-Struktur) schützt die mRNA vor Abbau durch Exonukleasen.\n2. Die Polyadenylierung (Poly-A-Schwanz) stabilisiert die mRNA und unterstützt den Export.\n3. Beim Spleißen werden Introns aus der prä-mRNA entfernt.\n4. Das Spleißosom erkennt Konsensussequenzen an den Intron-Exon-Grenzen.\n5. Prokaryotische mRNA durchläuft die gleichen Prozessierungsschritte wie eukaryotische mRNA.",
    aussagen: [
      { nr: 1, text: "Die 5'-Kappe (Cap-Struktur) schützt die mRNA vor Abbau durch Exonukleasen.", korrekt: true },
      { nr: 2, text: "Die Polyadenylierung (Poly-A-Schwanz) stabilisiert die mRNA und unterstützt den Export.", korrekt: true },
      { nr: 3, text: "Beim Spleißen werden Introns aus der prä-mRNA entfernt.", korrekt: true },
      { nr: 4, text: "Das Spleißosom erkennt Konsensussequenzen an den Intron-Exon-Grenzen.", korrekt: true },
      { nr: 5, text: "Prokaryotische mRNA durchläuft die gleichen Prozessierungsschritte wie eukaryotische mRNA.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Prokaryotische mRNA wird nicht gekappt, nicht polyadenyliert und hat in der Regel keine Introns zum Spleißen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 056 Chromatin-Remodeling (schwer) ───
  {
    id: "bio-typk-new4-056",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zum Chromatin-Remodeling sind richtig?\n\n1. Euchromatin ist locker gepackt und transkriptionell aktiv.\n2. Heterochromatin ist dicht gepackt und transkriptionell inaktiv.\n3. ATP-abhängige Chromatin-Remodeling-Komplexe (z. B. SWI/SNF) verschieben Nukleosomen.\n4. Die Histon-Variante H2A.Z ist mit aktiven Promotorregionen assoziiert.\n5. Chromatin-Remodeling spielt keine Rolle bei der Genregulation.",
    aussagen: [
      { nr: 1, text: "Euchromatin ist locker gepackt und transkriptionell aktiv.", korrekt: true },
      { nr: 2, text: "Heterochromatin ist dicht gepackt und transkriptionell inaktiv.", korrekt: true },
      { nr: 3, text: "ATP-abhängige Chromatin-Remodeling-Komplexe (z. B. SWI/SNF) verschieben Nukleosomen.", korrekt: true },
      { nr: 4, text: "Die Histon-Variante H2A.Z ist mit aktiven Promotorregionen assoziiert.", korrekt: true },
      { nr: 5, text: "Chromatin-Remodeling spielt keine Rolle bei der Genregulation.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Chromatin-Remodeling ist ein zentraler Mechanismus der eukaryotischen Genregulation (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 057 CRISPR-Cas9 (mittel) ───
  {
    id: "bio-typk-new4-057",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu CRISPR-Cas9 sind richtig?\n\n1. CRISPR-Cas9 ermöglicht gezielte Schnitte in der DNA an vorbestimmten Stellen.\n2. Eine Guide-RNA (sgRNA) leitet das Cas9-Protein zur Zielsequenz.\n3. Cas9 erzeugt einen Doppelstrangbruch in der DNA.\n4. Die Reparatur erfolgt durch NHEJ (fehleranfällig) oder HDR (präzise mit Template).\n5. CRISPR-Cas9 stammt ursprünglich aus dem adaptiven Immunsystem von Säugetieren.",
    aussagen: [
      { nr: 1, text: "CRISPR-Cas9 ermöglicht gezielte Schnitte in der DNA an vorbestimmten Stellen.", korrekt: true },
      { nr: 2, text: "Eine Guide-RNA (sgRNA) leitet das Cas9-Protein zur Zielsequenz.", korrekt: true },
      { nr: 3, text: "Cas9 erzeugt einen Doppelstrangbruch in der DNA.", korrekt: true },
      { nr: 4, text: "Die Reparatur erfolgt durch NHEJ (fehleranfällig) oder HDR (präzise mit Template).", korrekt: true },
      { nr: 5, text: "CRISPR-Cas9 stammt ursprünglich aus dem adaptiven Immunsystem von Säugetieren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. CRISPR-Cas9 stammt aus dem Immunsystem von Bakterien und Archaeen — nicht von Säugetieren (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 058 Transposons (schwer) ───
  {
    id: "bio-typk-new4-058",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Transposons (springende Gene) sind richtig?\n\n1. Transposons sind mobile genetische Elemente, die ihre Position im Genom verändern können.\n2. Barbara McClintock entdeckte Transposons bei Mais.\n3. Retrotransposons nutzen eine RNA-Zwischenstufe und reverse Transkriptase.\n4. Transposons können Mutationen verursachen, wenn sie in Gene oder regulatorische Regionen inserieren.\n5. Transposons machen weniger als 1 % des menschlichen Genoms aus.",
    aussagen: [
      { nr: 1, text: "Transposons sind mobile genetische Elemente, die ihre Position im Genom verändern können.", korrekt: true },
      { nr: 2, text: "Barbara McClintock entdeckte Transposons bei Mais.", korrekt: true },
      { nr: 3, text: "Retrotransposons nutzen eine RNA-Zwischenstufe und reverse Transkriptase.", korrekt: true },
      { nr: 4, text: "Transposons können Mutationen verursachen, wenn sie in Gene oder regulatorische Regionen inserieren.", korrekt: true },
      { nr: 5, text: "Transposons machen weniger als 1 % des menschlichen Genoms aus.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Transposable Elemente machen etwa 45 % des menschlichen Genoms aus, nicht weniger als 1 % (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 059 Nicht-codierende RNA (mittel) ───
  {
    id: "bio-typk-new4-059",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu nicht-codierenden RNAs sind richtig?\n\n1. rRNA ist ein struktureller und katalytischer Bestandteil der Ribosomen.\n2. tRNA transportiert Aminosäuren zum Ribosom während der Translation.\n3. lncRNAs (long non-coding RNAs) können die Genexpression regulieren.\n4. snRNAs sind Bestandteile des Spleißosoms.\n5. Alle nicht-codierenden RNAs haben ausschließlich strukturelle Funktionen.",
    aussagen: [
      { nr: 1, text: "rRNA ist ein struktureller und katalytischer Bestandteil der Ribosomen.", korrekt: true },
      { nr: 2, text: "tRNA transportiert Aminosäuren zum Ribosom während der Translation.", korrekt: true },
      { nr: 3, text: "lncRNAs (long non-coding RNAs) können die Genexpression regulieren.", korrekt: true },
      { nr: 4, text: "snRNAs sind Bestandteile des Spleißosoms.", korrekt: true },
      { nr: 5, text: "Alle nicht-codierenden RNAs haben ausschließlich strukturelle Funktionen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nicht-codierende RNAs haben vielfältige Funktionen: strukturell, katalytisch, regulatorisch — nicht ausschließlich strukturelle (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 060 Telomere und Telomerase (leicht) ───
  {
    id: "bio-typk-new4-060",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Telomeren und Telomerase sind richtig?\n\n1. Telomere sind repetitive DNA-Sequenzen an den Enden der Chromosomen.\n2. Bei jeder Zellteilung verkürzen sich die Telomere aufgrund des Endreplikationsproblems.\n3. Telomerase ist eine reverse Transkriptase, die Telomere verlängert.\n4. In den meisten somatischen Zellen ist die Telomerase-Aktivität gering oder abwesend.\n5. Telomerverkürzung hat keinen Einfluss auf die zelluläre Seneszenz.",
    aussagen: [
      { nr: 1, text: "Telomere sind repetitive DNA-Sequenzen an den Enden der Chromosomen.", korrekt: true },
      { nr: 2, text: "Bei jeder Zellteilung verkürzen sich die Telomere aufgrund des Endreplikationsproblems.", korrekt: true },
      { nr: 3, text: "Telomerase ist eine reverse Transkriptase, die Telomere verlängert.", korrekt: true },
      { nr: 4, text: "In den meisten somatischen Zellen ist die Telomerase-Aktivität gering oder abwesend.", korrekt: true },
      { nr: 5, text: "Telomerverkürzung hat keinen Einfluss auf die zelluläre Seneszenz.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Telomerverkürzung ist ein wichtiger Auslöser der zellulären Seneszenz (Hayflick-Grenze, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 061–075: HISTOLOGIE ──────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 061 Epithelgewebe Grundlagen (leicht) ───
  {
    id: "bio-typk-new4-061",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Epithelgewebe sind richtig?\n\n1. Epithelgewebe bedeckt äußere und innere Körperoberflächen.\n2. Epithelzellen sitzen auf einer Basalmembran.\n3. Epithelgewebe enthält zahlreiche Blutgefäße und wird direkt durchblutet.\n4. Epithelzellen sind durch Zellverbindungen (z. B. Tight Junctions, Desmosomen) miteinander verbunden.\n5. Epithelgewebe kann sensorische, sekretorische und protektive Funktionen haben.",
    aussagen: [
      { nr: 1, text: "Epithelgewebe bedeckt äußere und innere Körperoberflächen.", korrekt: true },
      { nr: 2, text: "Epithelzellen sitzen auf einer Basalmembran.", korrekt: true },
      { nr: 3, text: "Epithelgewebe enthält zahlreiche Blutgefäße und wird direkt durchblutet.", korrekt: false },
      { nr: 4, text: "Epithelzellen sind durch Zellverbindungen (z. B. Tight Junctions, Desmosomen) miteinander verbunden.", korrekt: true },
      { nr: 5, text: "Epithelgewebe kann sensorische, sekretorische und protektive Funktionen haben.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Epithelgewebe ist avaskulär — es enthält keine Blutgefäße und wird per Diffusion ernährt (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 062 Epitheltypen (mittel) ───
  {
    id: "bio-typk-new4-062",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Epitheltypen sind richtig?\n\n1. Einschichtiges Plattenepithel kleidet Blutgefäße (Endothel) und Körperhöhlen (Mesothel) aus.\n2. Mehrschichtiges verhorntes Plattenepithel bildet die Epidermis der Haut.\n3. Flimmerepithel mit Kinozilien kommt in den Atemwegen vor.\n4. Übergangsepithel (Urothel) ist dehnbar und kleidet die Harnblase aus.\n5. Im Dünndarm findet sich ein mehrschichtiges Zylinderepithel.",
    aussagen: [
      { nr: 1, text: "Einschichtiges Plattenepithel kleidet Blutgefäße (Endothel) und Körperhöhlen (Mesothel) aus.", korrekt: true },
      { nr: 2, text: "Mehrschichtiges verhorntes Plattenepithel bildet die Epidermis der Haut.", korrekt: true },
      { nr: 3, text: "Flimmerepithel mit Kinozilien kommt in den Atemwegen vor.", korrekt: true },
      { nr: 4, text: "Übergangsepithel (Urothel) ist dehnbar und kleidet die Harnblase aus.", korrekt: true },
      { nr: 5, text: "Im Dünndarm findet sich ein mehrschichtiges Zylinderepithel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Im Dünndarm befindet sich ein einschichtiges hochprismatisches (Zylinder-)Epithel mit Mikrovilli, kein mehrschichtiges (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 063 Bindegewebe (leicht) ───
  {
    id: "bio-typk-new4-063",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Bindegewebe sind richtig?\n\n1. Bindegewebe besteht aus Zellen und extrazellulärer Matrix.\n2. Fibroblasten sind die häufigsten Zellen im lockeren Bindegewebe.\n3. Kollagenfasern verleihen dem Bindegewebe Zugfestigkeit.\n4. Elastische Fasern ermöglichen die Dehnbarkeit des Gewebes.\n5. Bindegewebe ist stets avaskulär wie Epithelgewebe.",
    aussagen: [
      { nr: 1, text: "Bindegewebe besteht aus Zellen und extrazellulärer Matrix.", korrekt: true },
      { nr: 2, text: "Fibroblasten sind die häufigsten Zellen im lockeren Bindegewebe.", korrekt: true },
      { nr: 3, text: "Kollagenfasern verleihen dem Bindegewebe Zugfestigkeit.", korrekt: true },
      { nr: 4, text: "Elastische Fasern ermöglichen die Dehnbarkeit des Gewebes.", korrekt: true },
      { nr: 5, text: "Bindegewebe ist stets avaskulär wie Epithelgewebe.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Im Gegensatz zu Epithelgewebe ist Bindegewebe in der Regel gut durchblutet (vaskularisiert, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 064 Knorpelgewebe (mittel) ───
  {
    id: "bio-typk-new4-064",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Knorpelgewebe sind richtig?\n\n1. Chondrozyten sind die Zellen des Knorpelgewebes und liegen in Lakunen.\n2. Hyaliner Knorpel findet sich in Gelenken, Trachea und Rippenknorpel.\n3. Elastischer Knorpel kommt in der Ohrmuschel und im Kehldeckel vor.\n4. Faserknorpel enthält viel Kollagen Typ I und findet sich in Bandscheiben.\n5. Knorpelgewebe ist reichlich durchblutet und regeneriert daher schnell.",
    aussagen: [
      { nr: 1, text: "Chondrozyten sind die Zellen des Knorpelgewebes und liegen in Lakunen.", korrekt: true },
      { nr: 2, text: "Hyaliner Knorpel findet sich in Gelenken, Trachea und Rippenknorpel.", korrekt: true },
      { nr: 3, text: "Elastischer Knorpel kommt in der Ohrmuschel und im Kehldeckel vor.", korrekt: true },
      { nr: 4, text: "Faserknorpel enthält viel Kollagen Typ I und findet sich in Bandscheiben.", korrekt: true },
      { nr: 5, text: "Knorpelgewebe ist reichlich durchblutet und regeneriert daher schnell.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Knorpelgewebe ist avaskulär (gefäßfrei) und regeneriert daher langsam (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 065 Knochengewebe (mittel) ───
  {
    id: "bio-typk-new4-065",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Knochengewebe sind richtig?\n\n1. Osteoblasten synthetisieren die Knochenmatrix (Osteoid) und mineralisieren sie.\n2. Osteozyten sind reife Knochenzellen, die in Lakunen liegen und über Canaliculi verbunden sind.\n3. Osteoklasten bauen Knochensubstanz ab und sind mehrkernige Riesenzellen.\n4. Hydroxylapatit (Calciumphosphat) verleiht dem Knochen seine Härte.\n5. Knochen wird ausschließlich durch desmale (direkte) Ossifikation gebildet.",
    aussagen: [
      { nr: 1, text: "Osteoblasten synthetisieren die Knochenmatrix (Osteoid) und mineralisieren sie.", korrekt: true },
      { nr: 2, text: "Osteozyten sind reife Knochenzellen, die in Lakunen liegen und über Canaliculi verbunden sind.", korrekt: true },
      { nr: 3, text: "Osteoklasten bauen Knochensubstanz ab und sind mehrkernige Riesenzellen.", korrekt: true },
      { nr: 4, text: "Hydroxylapatit (Calciumphosphat) verleiht dem Knochen seine Härte.", korrekt: true },
      { nr: 5, text: "Knochen wird ausschließlich durch desmale (direkte) Ossifikation gebildet.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Es gibt zwei Arten der Ossifikation: desmale (direkte) und chondrale (indirekte, über Knorpelvorstufe, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 066 Skelettmuskulatur (leicht) ───
  {
    id: "bio-typk-new4-066",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Skelettmuskulatur sind richtig?\n\n1. Skelettmuskelzellen sind mehrkernig und quergestreift.\n2. Die funktionelle Einheit der Muskelkontraktion ist das Sarkomer.\n3. Aktin (dünne Filamente) und Myosin (dicke Filamente) sind die Hauptkontraktionsproteine.\n4. Die Kontraktion wird durch Ca²⁺-Freisetzung aus dem sarkoplasmatischen Retikulum ausgelöst.\n5. Skelettmuskulatur kann nicht willkürlich gesteuert werden.",
    aussagen: [
      { nr: 1, text: "Skelettmuskelzellen sind mehrkernig und quergestreift.", korrekt: true },
      { nr: 2, text: "Die funktionelle Einheit der Muskelkontraktion ist das Sarkomer.", korrekt: true },
      { nr: 3, text: "Aktin (dünne Filamente) und Myosin (dicke Filamente) sind die Hauptkontraktionsproteine.", korrekt: true },
      { nr: 4, text: "Die Kontraktion wird durch Ca²⁺-Freisetzung aus dem sarkoplasmatischen Retikulum ausgelöst.", korrekt: true },
      { nr: 5, text: "Skelettmuskulatur kann nicht willkürlich gesteuert werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Skelettmuskulatur ist willkürlich steuerbar (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 067 Glatte Muskulatur (mittel) ───
  {
    id: "bio-typk-new4-067",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur glatten Muskulatur sind richtig?\n\n1. Glatte Muskelzellen sind spindelförmig und besitzen nur einen Zellkern.\n2. Glatte Muskulatur zeigt keine Querstreifung.\n3. Sie kommt in Wänden von Hohlorganen wie Darm, Blutgefäßen und Uterus vor.\n4. Die Kontraktion der glatten Muskulatur ist langsamer, aber ausdauernder als die der Skelettmuskulatur.\n5. Glatte Muskulatur wird ausschließlich willkürlich gesteuert.",
    aussagen: [
      { nr: 1, text: "Glatte Muskelzellen sind spindelförmig und besitzen nur einen Zellkern.", korrekt: true },
      { nr: 2, text: "Glatte Muskulatur zeigt keine Querstreifung.", korrekt: true },
      { nr: 3, text: "Sie kommt in Wänden von Hohlorganen wie Darm, Blutgefäßen und Uterus vor.", korrekt: true },
      { nr: 4, text: "Die Kontraktion der glatten Muskulatur ist langsamer, aber ausdauernder als die der Skelettmuskulatur.", korrekt: true },
      { nr: 5, text: "Glatte Muskulatur wird ausschließlich willkürlich gesteuert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Glatte Muskulatur wird unwillkürlich (autonom) gesteuert (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 068 Herzmuskulatur (mittel) ───
  {
    id: "bio-typk-new4-068",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Herzmuskulatur sind richtig?\n\n1. Herzmuskelzellen sind quergestreift und besitzen meist einen oder zwei Zellkerne.\n2. Glanzstreifen (Disci intercalares) enthalten Gap Junctions zur elektrischen Kopplung.\n3. Die Herzmuskulatur besitzt Autorhythmie — sie kann spontan Aktionspotenziale erzeugen.\n4. Herzmuskelzellen sind über Gap Junctions als funktionelles Synzytium verbunden.\n5. Herzmuskulatur regeneriert sich nach einem Infarkt vollständig durch Zellteilung.",
    aussagen: [
      { nr: 1, text: "Herzmuskelzellen sind quergestreift und besitzen meist einen oder zwei Zellkerne.", korrekt: true },
      { nr: 2, text: "Glanzstreifen (Disci intercalares) enthalten Gap Junctions zur elektrischen Kopplung.", korrekt: true },
      { nr: 3, text: "Die Herzmuskulatur besitzt Autorhythmie — sie kann spontan Aktionspotenziale erzeugen.", korrekt: true },
      { nr: 4, text: "Herzmuskelzellen sind über Gap Junctions als funktionelles Synzytium verbunden.", korrekt: true },
      { nr: 5, text: "Herzmuskulatur regeneriert sich nach einem Infarkt vollständig durch Zellteilung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Herzmuskelzellen können sich kaum teilen — nach einem Infarkt wird geschädigtes Gewebe durch Narbengewebe ersetzt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 069 Nervengewebe Neurone (leicht) ───
  {
    id: "bio-typk-new4-069",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Neuronen sind richtig?\n\n1. Neurone bestehen aus Zellkörper (Soma), Dendriten und Axon.\n2. Dendriten empfangen Signale und leiten sie zum Soma.\n3. Das Axon leitet Aktionspotenziale vom Soma weg zu den Synapsen.\n4. Die Myelinscheide erhöht die Geschwindigkeit der Erregungsleitung.\n5. Neurone teilen sich im adulten Gehirn regelmäßig und in großem Umfang.",
    aussagen: [
      { nr: 1, text: "Neurone bestehen aus Zellkörper (Soma), Dendriten und Axon.", korrekt: true },
      { nr: 2, text: "Dendriten empfangen Signale und leiten sie zum Soma.", korrekt: true },
      { nr: 3, text: "Das Axon leitet Aktionspotenziale vom Soma weg zu den Synapsen.", korrekt: true },
      { nr: 4, text: "Die Myelinscheide erhöht die Geschwindigkeit der Erregungsleitung.", korrekt: true },
      { nr: 5, text: "Neurone teilen sich im adulten Gehirn regelmäßig und in großem Umfang.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Reife Neurone sind postmitotisch und teilen sich in der Regel nicht mehr (Ausnahme: begrenzte Neurogenese, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 070 Gliazellen (mittel) ───
  {
    id: "bio-typk-new4-070",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Gliazellen sind richtig?\n\n1. Oligodendrozyten bilden die Myelinscheide im zentralen Nervensystem.\n2. Schwann-Zellen bilden die Myelinscheide im peripheren Nervensystem.\n3. Astrozyten sind an der Blut-Hirn-Schranke beteiligt und regulieren die Ionenhomöostase.\n4. Mikroglia sind die Immunzellen des ZNS und phagozytieren Pathogene.\n5. Gliazellen erzeugen und leiten Aktionspotenziale weiter.",
    aussagen: [
      { nr: 1, text: "Oligodendrozyten bilden die Myelinscheide im zentralen Nervensystem.", korrekt: true },
      { nr: 2, text: "Schwann-Zellen bilden die Myelinscheide im peripheren Nervensystem.", korrekt: true },
      { nr: 3, text: "Astrozyten sind an der Blut-Hirn-Schranke beteiligt und regulieren die Ionenhomöostase.", korrekt: true },
      { nr: 4, text: "Mikroglia sind die Immunzellen des ZNS und phagozytieren Pathogene.", korrekt: true },
      { nr: 5, text: "Gliazellen erzeugen und leiten Aktionspotenziale weiter.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Gliazellen erzeugen keine Aktionspotenziale — das ist die Aufgabe der Neurone (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 071 Synapse (mittel) ───
  {
    id: "bio-typk-new4-071",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Synapse sind richtig?\n\n1. An chemischen Synapsen werden Neurotransmitter aus synaptischen Vesikeln freigesetzt.\n2. Die Freisetzung der Neurotransmitter ist Ca²⁺-abhängig.\n3. Neurotransmitter binden an Rezeptoren der postsynaptischen Membran.\n4. Der synaptische Spalt ist ca. 20–40 nm breit.\n5. An chemischen Synapsen erfolgt die Signalübertragung in beide Richtungen gleich schnell.",
    aussagen: [
      { nr: 1, text: "An chemischen Synapsen werden Neurotransmitter aus synaptischen Vesikeln freigesetzt.", korrekt: true },
      { nr: 2, text: "Die Freisetzung der Neurotransmitter ist Ca²⁺-abhängig.", korrekt: true },
      { nr: 3, text: "Neurotransmitter binden an Rezeptoren der postsynaptischen Membran.", korrekt: true },
      { nr: 4, text: "Der synaptische Spalt ist ca. 20–40 nm breit.", korrekt: true },
      { nr: 5, text: "An chemischen Synapsen erfolgt die Signalübertragung in beide Richtungen gleich schnell.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Chemische Synapsen leiten Signale unidirektional weiter — von präsynaptisch nach postsynaptisch (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 072 Kollagen (schwer) ───
  {
    id: "bio-typk-new4-072",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Kollagen sind richtig?\n\n1. Kollagen ist das häufigste Protein im menschlichen Körper.\n2. Die typische Kollagenstruktur ist eine Tripelhelix aus drei Polypeptidketten.\n3. Hydroxyprolin und Hydroxylysin sind charakteristische Aminosäuren des Kollagens.\n4. Vitamin C ist essenziell für die Hydroxylierung von Prolin und Lysin im Kollagen.\n5. Kollagen Typ I kommt ausschließlich im Knorpel vor.",
    aussagen: [
      { nr: 1, text: "Kollagen ist das häufigste Protein im menschlichen Körper.", korrekt: true },
      { nr: 2, text: "Die typische Kollagenstruktur ist eine Tripelhelix aus drei Polypeptidketten.", korrekt: true },
      { nr: 3, text: "Hydroxyprolin und Hydroxylysin sind charakteristische Aminosäuren des Kollagens.", korrekt: true },
      { nr: 4, text: "Vitamin C ist essenziell für die Hydroxylierung von Prolin und Lysin im Kollagen.", korrekt: true },
      { nr: 5, text: "Kollagen Typ I kommt ausschließlich im Knorpel vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Kollagen Typ I kommt in Knochen, Haut, Sehnen und Dentin vor — im Knorpel dominiert Kollagen Typ II (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 073 Grundgewebearten (leicht) ───
  {
    id: "bio-typk-new4-073",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu den vier Grundgewebearten sind richtig?\n\n1. Die vier Grundgewebearten sind Epithel-, Binde-/Stütz-, Muskel- und Nervengewebe.\n2. Epithelgewebe dient der Abdeckung und Auskleidung von Oberflächen.\n3. Bindegewebe verbindet und stützt andere Gewebe.\n4. Muskelgewebe ist für die Kontraktion und Bewegung verantwortlich.\n5. Nervengewebe kommt nur im Gehirn, nicht im peripheren Nervensystem vor.",
    aussagen: [
      { nr: 1, text: "Die vier Grundgewebearten sind Epithel-, Binde-/Stütz-, Muskel- und Nervengewebe.", korrekt: true },
      { nr: 2, text: "Epithelgewebe dient der Abdeckung und Auskleidung von Oberflächen.", korrekt: true },
      { nr: 3, text: "Bindegewebe verbindet und stützt andere Gewebe.", korrekt: true },
      { nr: 4, text: "Muskelgewebe ist für die Kontraktion und Bewegung verantwortlich.", korrekt: true },
      { nr: 5, text: "Nervengewebe kommt nur im Gehirn, nicht im peripheren Nervensystem vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nervengewebe kommt sowohl im ZNS als auch im peripheren Nervensystem vor (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 074 Blutgewebe (schwer) ───
  {
    id: "bio-typk-new4-074",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Blut als Gewebe sind richtig?\n\n1. Blut zählt zum Bindegewebe, da es eine flüssige extrazelluläre Matrix (Plasma) besitzt.\n2. Die geformten Bestandteile umfassen Erythrozyten, Leukozyten und Thrombozyten.\n3. Hämatopoetische Stammzellen im Knochenmark sind multipotent.\n4. Granulozyten, Monozyten und Lymphozyten gehören zu den Leukozyten.\n5. Thrombozyten besitzen einen Zellkern und eigene DNA.",
    aussagen: [
      { nr: 1, text: "Blut zählt zum Bindegewebe, da es eine flüssige extrazelluläre Matrix (Plasma) besitzt.", korrekt: true },
      { nr: 2, text: "Die geformten Bestandteile umfassen Erythrozyten, Leukozyten und Thrombozyten.", korrekt: true },
      { nr: 3, text: "Hämatopoetische Stammzellen im Knochenmark sind multipotent.", korrekt: true },
      { nr: 4, text: "Granulozyten, Monozyten und Lymphozyten gehören zu den Leukozyten.", korrekt: true },
      { nr: 5, text: "Thrombozyten besitzen einen Zellkern und eigene DNA.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Thrombozyten sind kernlose Zellfragmente, die durch Abschnürung von Megakaryozyten entstehen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 075 Saltatorische Erregungsleitung (schwer) ───
  {
    id: "bio-typk-new4-075",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur saltatorischen Erregungsleitung sind richtig?\n\n1. Bei myelinisierten Axonen springt das Aktionspotenzial von Ranvier-Schnürring zu Ranvier-Schnürring.\n2. Die saltatorische Leitung ist schneller als die kontinuierliche Leitung unmyelinisierter Fasern.\n3. An den Ranvier-Schnürringen ist die Membran reich an spannungsabhängigen Natriumkanälen.\n4. Die Myelinscheide wirkt als elektrischer Isolator und verringert den Ionenstrom über die Membran.\n5. Alle Nervenfasern im menschlichen Körper sind myelinisiert.",
    aussagen: [
      { nr: 1, text: "Bei myelinisierten Axonen springt das Aktionspotenzial von Ranvier-Schnürring zu Ranvier-Schnürring.", korrekt: true },
      { nr: 2, text: "Die saltatorische Leitung ist schneller als die kontinuierliche Leitung unmyelinisierter Fasern.", korrekt: true },
      { nr: 3, text: "An den Ranvier-Schnürringen ist die Membran reich an spannungsabhängigen Natriumkanälen.", korrekt: true },
      { nr: 4, text: "Die Myelinscheide wirkt als elektrischer Isolator und verringert den Ionenstrom über die Membran.", korrekt: true },
      { nr: 5, text: "Alle Nervenfasern im menschlichen Körper sind myelinisiert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Es gibt auch unmyelinisierte Nervenfasern (z. B. C-Fasern für Schmerzleitung, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
