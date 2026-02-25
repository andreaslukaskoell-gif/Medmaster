/**
 * BMS Question Knowledge — Bio Kap1 "Die Zelle", UK bio-1-01 (Kennzeichen des Lebens, Systembiologie).
 * Extracted from content: terms, facts, relations, numbers, contrasts. Generator uses ONLY this data.
 */
import type { BMSKnowledge } from "../types";

export const bioKap1Uk01Knowledge: BMSKnowledge = {
  ukId: "bio-1-01",
  chapterId: "bio-kap1",
  subject: "biologie",
  title: "Kennzeichen des Lebens und Systembiologie",
  terms: [
    "Stoffwechsel",
    "Reizbarkeit",
    "Fortpflanzung",
    "Wachstum",
    "Evolution",
    "Bewegung",
    "Homöostase",
    "StReForWaEvoBeHo",
    "Negative Rückkopplung",
    "Positive Rückkopplung",
    "Emergenz",
    "Viren",
    "ATP",
    "Kristallisation",
  ],
  facts: [
    {
      id: "f1",
      text: "Kristallisation ist kein Kennzeichen des Lebens.",
      category: "comparison",
      explanationHint:
        "Kristallisation ist ein physikalisch-chemischer Prozess; alle anderen Optionen sind Kennzeichen des Lebens.",
    },
    {
      id: "f2",
      text: "Emergenz bezeichnet die Entstehung neuer Eigenschaften auf höherer Organisationsebene.",
      category: "definition",
      explanationHint:
        "Das Ganze ist mehr als die Summe seiner Teile (z. B. Bewusstsein beim Gehirn).",
    },
    {
      id: "f3",
      text: "Negative Rückkopplung stabilisiert den Sollwert (z. B. Blutzucker, Temperatur).",
      category: "mechanism",
      explanationHint: "Der Effekt wirkt dem Auslöser entgegen.",
    },
    {
      id: "f4",
      text: "Positive Rückkopplung verstärkt den Reiz (z. B. Blutgerinnung, Wehen, Aktionspotential).",
      category: "mechanism",
      explanationHint: "Alles-oder-Nichts-Reaktionen.",
    },
    {
      id: "f5",
      text: "Viren haben keinen eigenständigen Stoffwechsel und keine Zellstruktur.",
      category: "definition",
      explanationHint:
        "Viren sind obligat intrazelluläre Parasiten; deshalb wirken Antibiotika nicht.",
    },
    {
      id: "f6",
      text: "Homöostase ist die aktive Aufrechterhaltung innerer Gleichgewichte (pH, Temperatur, Blutzucker).",
      category: "definition",
      explanationHint: "Über Regelkreise mit negativer Rückkopplung.",
    },
    {
      id: "f7",
      text: "ATP ist die universelle Energiewährung der Zelle.",
      category: "definition",
      explanationHint: "Ohne ATP keine Arbeit in der Zelle.",
    },
    {
      id: "f8",
      text: "Die sieben Kennzeichen des Lebens sind Stoffwechsel, Reizbarkeit, Fortpflanzung, Wachstum, Evolution, Bewegung und Homöostase.",
      category: "definition",
      explanationHint: "StReForWaEvoBeHo – kein einzelnes Kennzeichen definiert Leben allein.",
    },
    {
      id: "f9",
      text: "Antibiotika wirken nicht gegen Viren, weil Viren keine bakteriellen Zielstrukturen haben.",
      category: "clinical",
      explanationHint:
        "Antivirale Therapien zielen auf virale Strukturen (z. B. Reverse-Transkriptase).",
    },
    {
      id: "f10",
      text: "Diabetes mellitus Typ 2 ist eine Homöostasestörung des Blutzuckerregelkreises durch Insulinresistenz.",
      category: "clinical",
      explanationHint: "Chronische Hyperglykämie, HbA1c als Laborparameter.",
    },
  ],
  relations: [
    { id: "r1", a: "Insulin", b: "Blutzucker", relation: "senkt", kind: "cause–effect" },
    {
      id: "r2",
      a: "Negative Rückkopplung",
      b: "Homöostase",
      relation: "hält aufrecht",
      kind: "mechanism",
    },
    { id: "r3", a: "Viren", b: "Wirtszelle", relation: "vermehren sich nur in", kind: "location" },
    {
      id: "r4",
      a: "Emergenz",
      b: "höhere Organisationsebene",
      relation: "tritt auf bei",
      kind: "definition",
    },
  ],
  numbers: [
    { id: "n1", label: "Anzahl Kennzeichen des Lebens", value: "7", context: "StReForWaEvoBeHo" },
    {
      id: "n2",
      label: "Hierarchieebenen",
      value: "Atom → Molekül → Organell → Zelle → Gewebe → Organ → Organismus",
      context: "Emergenz",
    },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Rückkopplung",
      optionA: "Negative Rückkopplung: Effekt wirkt dem Auslöser entgegen, stabilisiert.",
      optionB: "Positive Rückkopplung: Effekt verstärkt den Reiz (Blutgerinnung, Wehen).",
      correctSide: "A",
    },
    {
      id: "c2",
      topic: "Viren",
      optionA: "Viren erfüllen alle Kennzeichen des Lebens.",
      optionB:
        "Viren haben keinen Stoffwechsel und keine Zellstruktur; Fortpflanzung und Evolution sind bei Viren erfüllt.",
      correctSide: "B",
    },
    {
      id: "c3",
      topic: "Wachstum",
      optionA: "Kristallisation ist biologisches Wachstum.",
      optionB: "Kristallisation ist kein biologisches Wachstum (physikalisch-chemisch).",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "Die sieben Kennzeichen des Lebens benennen und mit klinischen Beispielen verknüpfen",
    "Homöostase und negative Rückkopplung am Beispiel Blutzucker und Körpertemperatur beschreiben",
    "Den Begriff Emergenz im Kontext der Systembiologie erklären",
    "Viren als Grenzfall des Lebens begründen",
  ],
  sequences: [
    {
      id: "seq1",
      label: "Organisationsebenen der Biologie (klein nach groß)",
      orderedItems: ["Atom", "Molekül", "Organell", "Zelle", "Gewebe", "Organ", "Organismus"],
      context: "Emergenz: auf jeder Ebene entstehen neue Eigenschaften.",
    },
  ],
  plausibleFalse: [
    { id: "pf1", text: "Kristallisation zählt zu den sieben Kennzeichen des Lebens." },
    { id: "pf2", text: "Positive Rückkopplung stabilisiert den Sollwert (z. B. Blutzucker)." },
    { id: "pf3", text: "Viren besitzen einen eigenständigen Stoffwechsel und eine Zellstruktur." },
    {
      id: "pf4",
      text: "Antibiotika wirken gezielt gegen Viren, da diese bakterielle Zielstrukturen haben.",
    },
  ],
};

/** Bio Kap1 UK2 — Prokaryoten vs. Eukaryoten (Zentral prüfungsrelevant). */
export const bioKap1Uk02Knowledge: BMSKnowledge = {
  ukId: "bio-1-02",
  chapterId: "bio-kap1",
  subject: "biologie",
  title: "Prokaryoten vs. Eukaryoten",
  terms: [
    "Prokaryoten",
    "Eukaryoten",
    "Gram-Färbung",
    "Peptidoglykan",
    "70S",
    "80S",
    "Endosymbiontentheorie",
    "Archäen",
  ],
  facts: [
    {
      id: "f1",
      text: "Prokaryoten haben keinen membranumschlossenen Zellkern; die DNA liegt im Nukleoid.",
      category: "definition",
      explanationHint: "Definierendes Merkmal; Eukaryoten haben echten Kern mit Doppelmembran.",
    },
    {
      id: "f2",
      text: "Prokaryotische Ribosomen haben 70S (30S + 50S), eukaryotische 80S (40S + 60S).",
      category: "definition",
      explanationHint: "Grundlage der Antibiotika-Selektivität; Mitochondrien haben 70S.",
    },
    {
      id: "f3",
      text: "Gram-positive Bakterien färben sich violett (dicke Peptidoglykanschicht); Gram-negative rosa (dünne Schicht + LPS).",
      category: "comparison",
      explanationHint: "LPS nur bei Gram-negativ → Endotoxin → septischer Schock.",
    },
    {
      id: "f4",
      text: "Die Endosymbiontentheorie wird durch zirkuläre DNA, 70S-Ribosomen, Doppelmembran, binäre Fission und Antibiotika-Empfindlichkeit der Mitochondrien gestützt.",
      category: "mechanism",
      explanationHint: "Mitochondrien = ehemaliges α-Proteobakterium.",
    },
    {
      id: "f5",
      text: "Archäen sind Prokaryoten ohne Peptidoglykan und daher penicillinresistent; sie bilden die dritte Domäne (Bacteria, Archaea, Eukarya).",
      category: "definition",
      explanationHint: "Woese, 16S-rRNA; Ether-Lipide in der Membran.",
    },
    {
      id: "f6",
      text: "Penicillin wirkt gegen Bakterien, weil es die Peptidoglykan-Zellwand hemmt; menschliche Zellen haben keine solche Zellwand.",
      category: "clinical",
      explanationHint: "PBP-Hemmung; MRSA hat verändertes PBP.",
    },
    {
      id: "f7",
      text: "Chloramphenicol hemmt die 50S-Untereinheit des 70S-Ribosoms; Mitochondrien haben 70S → bei hoher Dosis aplastische Anämie möglich.",
      category: "clinical",
      explanationHint: "Selektivität gegenüber 80S-Ribosomen; Cave Mitochondrien.",
    },
  ],
  relations: [
    {
      id: "r1",
      a: "Penicillin",
      b: "Peptidoglykan",
      relation: "hemmt Synthese",
      kind: "mechanism",
    },
    {
      id: "r2",
      a: "Mitochondrien",
      b: "70S-Ribosomen",
      relation: "besitzen",
      kind: "structure–function",
    },
    {
      id: "r3",
      a: "LPS",
      b: "Gram-negative Bakterien",
      relation: "kommt vor bei",
      kind: "location",
    },
  ],
  numbers: [
    {
      id: "n1",
      label: "Prokaryoten-Ribosom",
      value: "70S (30S + 50S)",
      unit: "Sedimentationskoeffizient",
      context: "Antibiotika zielen auf 70S",
    },
    {
      id: "n2",
      label: "Eukaryoten-Ribosom",
      value: "80S (40S + 60S)",
      unit: "Sedimentationskoeffizient",
      context: "Zytoplasma",
    },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Gram-Färbung",
      optionA: "Gram-positiv: violett, dicke Peptidoglykanschicht.",
      optionB: "Gram-negativ: rosa, dünne Peptidoglykanschicht + LPS-Außenmembran.",
      correctSide: "A",
    },
    {
      id: "c2",
      topic: "Zellteilung",
      optionA: "Prokaryoten: binäre Fission (kein Spindelapparat).",
      optionB: "Eukaryoten: Mitose/Meiose mit Spindel.",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "Prokaryoten und Eukaryoten unterscheiden",
    "Gram-Färbung und Ribosomengröße für Antibiotikatherapie anwenden",
    "Endosymbiontentheorie mit 5 Belegen beschreiben",
  ],
  plausibleFalse: [
    { id: "pf1", text: "Prokaryoten besitzen einen membranumschlossenen Zellkern." },
    { id: "pf2", text: "Eukaryotische Ribosomen haben den Sedimentationskoeffizienten 70S." },
    {
      id: "pf3",
      text: "Gram-negative Bakterien färben sich violett (dicke Peptidoglykanschicht).",
    },
    {
      id: "pf4",
      text: "Archäen besitzen eine Zellwand aus Peptidoglykan und sind penicillinempfindlich.",
    },
  ],
};

/** Bio Kap1 UK3 — Zellmembran (Zentral prüfungsrelevant). */
export const bioKap1Uk03Knowledge: BMSKnowledge = {
  ukId: "bio-1-03",
  chapterId: "bio-kap1",
  subject: "biologie",
  title: "Zellmembran — Aufbau, Barriere und Identität",
  terms: [
    "Flüssig-Mosaik-Modell",
    "Phospholipid-Doppelschicht",
    "Cholesterin",
    "Glykokalix",
    "CFTR",
    "integral",
    "peripher",
  ],
  facts: [
    {
      id: "f1",
      text: "Das Flüssig-Mosaik-Modell beschreibt eine fluide Phospholipid-Doppelschicht mit lateral beweglichen Proteinen (Singer & Nicolson, 1972).",
      category: "definition",
      explanationHint: "Flüssig = Mobilität; Mosaik = heterogene Proteine.",
    },
    {
      id: "f2",
      text: "O₂ und CO₂ diffundieren ohne Transportprotein durch die Lipidschicht; Ionen und große polare Moleküle brauchen Kanäle/Transporter.",
      category: "mechanism",
      explanationHint: "Hydrophobes Inneres + Hydrathülle der Ionen = Barriere.",
    },
    {
      id: "f3",
      text: "Cholesterin wirkt in der Membran als bidirektionaler Fluiditätspuffer (bei Wärme versteift, bei Kälte verflüssigt).",
      category: "mechanism",
      explanationHint: "Zwischen Phospholipide eingelagert; nicht Hauptbestandteil.",
    },
    {
      id: "f4",
      text: "Ungesättigte Fettsäuren (cis-Doppelbindung = Knick) erhöhen die Membranfluidität; gesättigte senken sie.",
      category: "comparison",
      explanationHint: "Oft vertauscht in Prüfungen.",
    },
    {
      id: "f5",
      text: "Integrale Membranproteine durchspannen die Lipiddoppelschicht (Kanäle, Transporter, Rezeptoren, Pumpen); periphere sitzen nur an der Oberfläche.",
      category: "definition",
      explanationHint: "Integral = nicht ohne Detergenzien ablösbar.",
    },
    {
      id: "f6",
      text: "Die Glykokalix ist die Zuckerschicht auf der Außenseite (Zellerkennung, Schutz); Blutgruppenantigene sind Kohlenhydratstrukturen.",
      category: "definition",
      explanationHint: "Glykoproteine, Glykolipide.",
    },
    {
      id: "f7",
      text: "CFTR ist ein Cl⁻-Kanal; die Mutation ΔF508 führt zu Fehlfaltung und Mukoviszidose (visköser Schleim).",
      category: "clinical",
      explanationHint: "Kein Cl⁻-Export → wenig Wasser im Schleim.",
    },
  ],
  relations: [
    { id: "r1", a: "CFTR", b: "Cl⁻-Transport", relation: "vermittelt", kind: "structure–function" },
    { id: "r2", a: "Cholesterin", b: "Membranfluidität", relation: "puffert", kind: "mechanism" },
  ],
  numbers: [],
  contrasts: [
    {
      id: "c1",
      topic: "Membranproteine",
      optionA: "Integral: durch die Membran (Kanäle, Transporter).",
      optionB: "Peripher: nur an Oberfläche.",
      correctSide: "A",
    },
    {
      id: "c2",
      topic: "Fluidität",
      optionA: "Gesättigte Fettsäuren erhöhen Fluidität.",
      optionB: "Ungesättigte Fettsäuren erhöhen Fluidität (Knicke).",
      correctSide: "B",
    },
  ],
  learningObjectives: [
    "Flüssig-Mosaik-Modell erklären",
    "Cholesterin und Fettsäuren für Fluidität beschreiben",
    "CFTR und Mukoviszidose zuordnen",
  ],
};

/** Bio Kap1 UK4 — Membrantransport (Zentral prüfungsrelevant). */
export const bioKap1Uk04Knowledge: BMSKnowledge = {
  ukId: "bio-1-04",
  chapterId: "bio-kap1",
  subject: "biologie",
  title: "Membrantransport — passiv und aktiv",
  terms: [
    "Osmose",
    "Tonizität",
    "Na⁺/K⁺-ATPase",
    "hypoton",
    "hyperton",
    "isoton",
    "Hämolyse",
    "Krenation",
  ],
  facts: [
    {
      id: "f1",
      text: "Passiver Transport verläuft entlang des Konzentrationsgradienten ohne ATP; aktiver Transport gegen den Gradienten (primär mit ATP, sekundär mit Na⁺-Gradient).",
      category: "definition",
      explanationHint:
        "Einfache/erleichterte Diffusion, Osmose = passiv; Na⁺/K⁺-ATPase = primär aktiv.",
    },
    {
      id: "f2",
      text: "In hypotoner Lösung strömt Wasser in die Zelle → Erythrozyten schwellen und können hämolysieren; in hypertoner Lösung schrumpfen sie (Krenation).",
      category: "mechanism",
      explanationHint: "Osmose: Wasser folgt der höheren Osmolalität.",
    },
    {
      id: "f3",
      text: "Isotone NaCl-Lösung ist 0,9 % (~290 mosmol/kg) und hält das Zellvolumen konstant (Infusionstherapie).",
      category: "clinical",
      explanationHint: "Physiologische Kochsalzlösung.",
    },
    {
      id: "f4",
      text: "Die Na⁺/K⁺-ATPase pumpt pro ATP 3 Na⁺ aus der Zelle und 2 K⁺ in die Zelle; Grundlage für Ruhemembranpotenzial und sekundären aktiven Transport.",
      category: "mechanism",
      explanationHint: "Herzglykoside hemmen → positiv inotrop.",
    },
    {
      id: "f5",
      text: "Sekundär aktiver Transport nutzt den Na⁺-Gradienten (Symport z. B. SGLT: Na⁺ und Glucose gemeinsam; Antiport z. B. Na⁺/Ca²⁺-Austauscher).",
      category: "mechanism",
      explanationHint: "SGLT2-Hemmer → Glucosurie bei Typ-2-Diabetes.",
    },
    {
      id: "f6",
      text: "Ionen und polare Moleküle (z. B. Glucose) benötigen Kanäle oder Carrier für den Membrandurchtritt; passiver Transport nutzt den Konzentrationsgradienten, aktiver verbraucht ATP oder Kopplung an den Na⁺-Gradienten.",
      category: "comparison",
      explanationHint:
        "UK Membrantransport: Unterscheidung passiv/aktiv; O₂/CO₂ siehe UK Zellmembran.",
    },
  ],
  relations: [
    {
      id: "r1",
      a: "Na⁺/K⁺-ATPase",
      b: "Ruhemembranpotenzial",
      relation: "erzeugt Grundlage für",
      kind: "mechanism",
    },
    {
      id: "r2",
      a: "SGLT",
      b: "Na⁺-Gradient",
      relation: "nutzt für Glucosetransport",
      kind: "mechanism",
    },
  ],
  numbers: [
    {
      id: "n1",
      label: "Na⁺/K⁺-ATPase pro ATP",
      value: "3 Na⁺ raus, 2 K⁺ rein",
      context: "Primär aktiver Transport",
    },
    {
      id: "n2",
      label: "Isotone NaCl",
      value: "0,9 %",
      unit: "~290 mosmol/kg",
      context: "Infusion",
    },
  ],
  contrasts: [
    {
      id: "c1",
      topic: "Tonizität",
      optionA: "Hypoton: Osmolalität außen < innen → Wasser strömt in die Zelle → Hämolyse.",
      optionB: "Hyperton: Osmolalität außen > innen → Wasser strömt heraus → Krenation.",
      correctSide: "B",
    },
    {
      id: "c2",
      topic: "Transport",
      optionA: "Primär aktiv: direkter ATP-Verbrauch (z. B. Na⁺/K⁺-ATPase).",
      optionB: "Sekundär aktiv: Na⁺-Gradient treibt Substrat (Symport/Antiport).",
      correctSide: "A",
    },
  ],
  learningObjectives: [
    "Osmose und Tonizität anwenden",
    "Na⁺/K⁺-ATPase und sekundär aktiven Transport unterscheiden",
    "Klinik: Infusion, Herzglykoside, SGLT2-Hemmer",
  ],
  rechenfragen: [
    {
      id: "rec1",
      text: "Eine 0,9 %ige NaCl-Lösung (physiologische Kochsalzlösung) hat etwa welche Osmolalität?",
      correctValue: "~290",
      unit: "mosmol/kg",
      wrongValues: ["~150", "~350", "~500", "~100"],
      explanationHint:
        "0,9 % NaCl entspricht etwa 154 mmol/l Na⁺ und 154 mmol/l Cl⁻ → ~308 mosmol/l; typisch rund 290 mosmol/kg angegeben. Isotone Infusion hält Zellvolumen konstant.",
    },
    {
      id: "rec2",
      text: "Wie viele Na⁺-Ionen pumpt die Na⁺/K⁺-ATPase pro verbrauchtem ATP aus der Zelle?",
      correctValue: "3",
      unit: "Na⁺ pro ATP",
      wrongValues: ["1", "2", "4", "5"],
      explanationHint:
        "Die Na⁺/K⁺-ATPase transportiert 3 Na⁺ aus der Zelle und 2 K⁺ in die Zelle pro ATP. Grundlage für Ruhemembranpotenzial und sekundären aktiven Transport.",
    },
  ],
};
