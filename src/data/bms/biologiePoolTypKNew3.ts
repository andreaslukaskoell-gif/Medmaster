/**
 * Biologie Typ K Neu 3 — 75 Kombinationsaufgaben (IDs bio-typk-new3-001 bis -075).
 * Schwerpunkte: Blut/Blutgruppen, Niere, Atmung/Gasaustausch, Herz-Kreislauf,
 *               Verdauung, Fortpflanzung, Sinnesorgane.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const biologieTypKNew3: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–011: BLUT UND BLUTGRUPPEN ────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 Blutzusammensetzung (leicht) ───
  {
    id: "bio-typk-new3-001",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Zusammensetzung des Blutes sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Blutplasma macht etwa 55 % des Blutvolumens aus.", korrekt: true },
      { nr: 2, text: "Erythrozyten sind die häufigsten Blutzellen.", korrekt: true },
      { nr: 3, text: "Thrombozyten sind kernhaltige Zellen, die aus Megakaryozyten entstehen.", korrekt: false },
      { nr: 4, text: "Albumin ist das häufigste Plasmaprotein und trägt zum kolloidosmotischen Druck bei.", korrekt: true },
      { nr: 5, text: "Leukozyten machen weniger als 1 % des Blutvolumens aus.", korrekt: true },
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
      "Richtig sind 1, 2, 4 und 5. Thrombozyten sind kernlose Zellfragmente (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 002 Erythrozyten-Eigenschaften (leicht) ───
  {
    id: "bio-typk-new3-002",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Erythrozyten sind richtig?",
    aussagen: [
      { nr: 1, text: "Reife Erythrozyten besitzen keinen Zellkern und keine Mitochondrien.", korrekt: true },
      { nr: 2, text: "Die bikonkave Scheibenform vergrößert die Oberfläche für den Gasaustausch.", korrekt: true },
      { nr: 3, text: "Erythrozyten werden im roten Knochenmark gebildet (Erythropoese).", korrekt: true },
      { nr: 4, text: "Das Hormon Erythropoetin (EPO) wird hauptsächlich in der Niere produziert.", korrekt: true },
      { nr: 5, text: "Erythrozyten gewinnen ihre Energie ausschließlich durch oxidative Phosphorylierung.", korrekt: false },
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
      "Richtig sind 1–4. Erythrozyten haben keine Mitochondrien und nutzen daher die anaerobe Glykolyse (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 003 AB0-Blutgruppensystem (mittel) ───
  {
    id: "bio-typk-new3-003",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zum AB0-Blutgruppensystem sind richtig?",
    aussagen: [
      { nr: 1, text: "Blutgruppe A besitzt A-Antigene auf den Erythrozyten und Anti-B-Antikörper im Plasma.", korrekt: true },
      { nr: 2, text: "Blutgruppe 0 hat weder A- noch B-Antigene und besitzt Anti-A- und Anti-B-Antikörper.", korrekt: true },
      { nr: 3, text: "Blutgruppe AB hat beide Antigene und keine Antikörper gegen A oder B.", korrekt: true },
      { nr: 4, text: "Die AB0-Blutgruppen werden autosomal-rezessiv vererbt.", korrekt: false },
      { nr: 5, text: "Personen mit Blutgruppe 0 gelten als Universalspender für Erythrozytenkonzentrate.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Die Allele A und B sind kodominant, 0 ist rezessiv gegenüber A und B (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 004 Rhesus-System (mittel) ───
  {
    id: "bio-typk-new3-004",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zum Rhesus-Blutgruppensystem sind richtig?",
    aussagen: [
      { nr: 1, text: "Das wichtigste Rhesus-Antigen ist das D-Antigen.", korrekt: true },
      { nr: 2, text: "Rhesus-negative Personen bilden Anti-D-Antikörper erst nach Kontakt mit Rh-positivem Blut.", korrekt: true },
      { nr: 3, text: "Bei der Rhesus-Inkompatibilität kann eine Rh-negative Mutter Antikörper gegen das Rh-positive Kind bilden.", korrekt: true },
      { nr: 4, text: "Anti-D-Prophylaxe verhindert die Sensibilisierung der Rh-negativen Mutter.", korrekt: true },
      { nr: 5, text: "Rhesus-Antikörper gehören zur Klasse IgM und können die Plazenta nicht passieren.", korrekt: false },
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
      "Richtig sind 1–4. Anti-D-Antikörper sind IgG und können die Plazenta passieren, was den Morbus haemolyticus neonatorum verursacht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 005 Leukozyten-Typen (mittel) ───
  {
    id: "bio-typk-new3-005",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Leukozyten sind richtig?",
    aussagen: [
      { nr: 1, text: "Neutrophile Granulozyten sind die häufigsten weißen Blutkörperchen.", korrekt: true },
      { nr: 2, text: "Eosinophile Granulozyten sind an der Parasitenabwehr und allergischen Reaktionen beteiligt.", korrekt: true },
      { nr: 3, text: "Basophile Granulozyten setzen Histamin und Heparin frei.", korrekt: true },
      { nr: 4, text: "Monozyten differenzieren sich im Gewebe zu Makrophagen.", korrekt: true },
      { nr: 5, text: "Lymphozyten gehören zu den Granulozyten.", korrekt: false },
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
      "Richtig sind 1–4. Lymphozyten gehören zu den Agranulozyten (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 006 Blutgerinnung (mittel) ───
  {
    id: "bio-typk-new3-006",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Blutgerinnung (Hämostase) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die primäre Hämostase umfasst Vasokonstriktion und Thrombozytenadhäsion.", korrekt: true },
      { nr: 2, text: "Thrombozyten heften sich über den Von-Willebrand-Faktor an freiliegendes Kollagen.", korrekt: true },
      { nr: 3, text: "In der sekundären Hämostase wird Fibrinogen durch Thrombin zu Fibrin umgewandelt.", korrekt: true },
      { nr: 4, text: "Vitamin K ist für die Synthese bestimmter Gerinnungsfaktoren in der Leber essenziell.", korrekt: true },
      { nr: 5, text: "Heparin fördert die Blutgerinnung, indem es Thrombin aktiviert.", korrekt: false },
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
      "Richtig sind 1–4. Heparin hemmt die Gerinnung (Antikoagulans), es aktiviert Antithrombin III (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 007 Blutplasma und Serum (leicht) ───
  {
    id: "bio-typk-new3-007",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Blutplasma und Serum sind richtig?",
    aussagen: [
      { nr: 1, text: "Blutplasma enthält Wasser, Proteine, Elektrolyte und gelöste Gase.", korrekt: true },
      { nr: 2, text: "Serum ist Plasma ohne Gerinnungsfaktoren (insbesondere ohne Fibrinogen).", korrekt: true },
      { nr: 3, text: "Immunglobuline (Antikörper) sind Plasmaproteine der Gammaglobulin-Fraktion.", korrekt: true },
      { nr: 4, text: "Der kolloidosmotische Druck des Plasmas wird hauptsächlich durch Albumin aufrechterhalten.", korrekt: true },
      { nr: 5, text: "Blutplasma hat einen pH-Wert von etwa 6,4.", korrekt: false },
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
      "Richtig sind 1–4. Der pH-Wert des Blutplasmas liegt bei etwa 7,4 (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 008 Erythrozytenabbau (schwer) ───
  {
    id: "bio-typk-new3-008",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zum Abbau von Erythrozyten sind richtig?",
    aussagen: [
      { nr: 1, text: "Alte Erythrozyten werden hauptsächlich in Milz und Leber durch Makrophagen abgebaut.", korrekt: true },
      { nr: 2, text: "Beim Hämoglobinabbau entsteht zunächst Biliverdin, dann Bilirubin.", korrekt: true },
      { nr: 3, text: "Indirektes (unkonjugiertes) Bilirubin wird in der Leber an Glucuronsäure gekoppelt.", korrekt: true },
      { nr: 4, text: "Konjugiertes Bilirubin wird über die Galle in den Darm ausgeschieden.", korrekt: true },
      { nr: 5, text: "Das freigesetzte Eisen wird vollständig über den Urin ausgeschieden.", korrekt: false },
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
      "Richtig sind 1–4. Eisen wird recycelt und an Transferrin gebunden zur Erythropoese zurückgeführt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 009 Thrombozyten und Hämostase (schwer) ───
  {
    id: "bio-typk-new3-009",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Thrombozyten sind richtig?",
    aussagen: [
      { nr: 1, text: "Thrombozyten entstehen durch Abschnürung aus Megakaryozyten im Knochenmark.", korrekt: true },
      { nr: 2, text: "Thrombozyten haben eine Lebensdauer von etwa 7–10 Tagen.", korrekt: true },
      { nr: 3, text: "Aktivierte Thrombozyten setzen ADP und Thromboxan A2 frei, was weitere Thrombozyten rekrutiert.", korrekt: true },
      { nr: 4, text: "Prostacyclin (PGI2) aus dem Endothel hemmt die Thrombozytenaggregation.", korrekt: true },
      { nr: 5, text: "Thrombozyten besitzen einen Zellkern und können sich durch Mitose teilen.", korrekt: false },
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
      "Richtig sind 1–4. Thrombozyten sind kernlos und können sich nicht teilen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 010 Blutgruppen-Vererbung (schwer) ───
  {
    id: "bio-typk-new3-010",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Vererbung der AB0-Blutgruppen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Allele IA und IB sind kodominant zueinander.", korrekt: true },
      { nr: 2, text: "Das Allel i (Blutgruppe 0) ist rezessiv gegenüber IA und IB.", korrekt: true },
      { nr: 3, text: "Eltern mit Blutgruppe A und B können ein Kind mit Blutgruppe 0 haben.", korrekt: true },
      { nr: 4, text: "Ein Elternteil mit Blutgruppe AB kann ein Kind mit Blutgruppe 0 haben.", korrekt: false },
      { nr: 5, text: "Die AB0-Gene liegen auf Chromosom 9.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Blutgruppe AB (Genotyp IAIB) kann kein i-Allel vererben, daher kein Kind mit Blutgruppe 0 (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 011 Fibrinolyse (schwer) ───
  {
    id: "bio-typk-new3-011",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zur Fibrinolyse sind richtig?",
    aussagen: [
      { nr: 1, text: "Plasmin ist das aktive Enzym, das Fibrinfäden auflöst.", korrekt: true },
      { nr: 2, text: "Plasminogen wird durch Gewebeplasminogenaktivator (t-PA) zu Plasmin aktiviert.", korrekt: true },
      { nr: 3, text: "Die Fibrinolyse dient der Auflösung von Blutgerinnseln nach der Wundheilung.", korrekt: true },
      { nr: 4, text: "D-Dimere sind Abbauprodukte des Fibrins und dienen als Labormarker für Thrombosen.", korrekt: true },
      { nr: 5, text: "Fibrinolyse und Blutgerinnung laufen nie gleichzeitig ab.", korrekt: false },
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
      "Richtig sind 1–4. Gerinnung und Fibrinolyse laufen als Gegenspieler gleichzeitig ab (dynamisches Gleichgewicht; 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 012–022: NIERE UND AUSSCHEIDUNG ──────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 012 Nierenaufbau (leicht) ───
  {
    id: "bio-typk-new3-012",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Aufbau der Niere sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Niere besteht aus Nierenrinde (Kortex) und Nierenmark (Medulla).", korrekt: true },
      { nr: 2, text: "Das Nierenbecken sammelt den Urin und leitet ihn in den Harnleiter.", korrekt: true },
      { nr: 3, text: "Jede Niere enthält etwa 1 Million Nephrone.", korrekt: true },
      { nr: 4, text: "Die Glomeruli liegen ausschließlich im Nierenmark.", korrekt: false },
      { nr: 5, text: "Die Nierenarterie versorgt die Niere mit Blut.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Die Glomeruli liegen in der Nierenrinde, nicht im Mark (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 013 Nephron-Aufbau (mittel) ───
  {
    id: "bio-typk-new3-013",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Nephron sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Nephron besteht aus Nierenkörperchen (Glomerulus + Bowman-Kapsel) und Tubulussystem.", korrekt: true },
      { nr: 2, text: "Der proximale Tubulus reabsorbiert den Großteil des Wassers und der Glukose.", korrekt: true },
      { nr: 3, text: "Die Henle-Schleife erzeugt den osmotischen Gradienten im Nierenmark.", korrekt: true },
      { nr: 4, text: "Der distale Tubulus mündet in das Sammelrohr.", korrekt: true },
      { nr: 5, text: "Das Sammelrohr ist immer wasserdurchlässig, unabhängig von Hormonen.", korrekt: false },
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
      "Richtig sind 1–4. Die Wasserdurchlässigkeit des Sammelrohrs wird durch ADH (Vasopressin) reguliert (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 014 Glomeruläre Filtration (mittel) ───
  {
    id: "bio-typk-new3-014",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur glomerulären Filtration sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Primärharn enthält Wasser, Elektrolyte, Glukose und Harnstoff.", korrekt: true },
      { nr: 2, text: "Pro Tag werden etwa 180 Liter Primärharn gebildet.", korrekt: true },
      { nr: 3, text: "Proteine mit hohem Molekulargewicht werden normalerweise nicht filtriert.", korrekt: true },
      { nr: 4, text: "Der effektive Filtrationsdruck ergibt sich aus hydrostatischem Druck minus kolloidosmotischem Druck und Kapselinnendruck.", korrekt: true },
      { nr: 5, text: "Erythrozyten passieren die glomeruläre Filtrationsbarriere problemlos.", korrekt: false },
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
      "Richtig sind 1–4. Erythrozyten sind zu groß für die Filtrationsbarriere; ihr Auftreten im Urin (Hämaturie) ist pathologisch (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 015 Tubuläre Rückresorption (mittel) ───
  {
    id: "bio-typk-new3-015",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur tubulären Rückresorption sind richtig?",
    aussagen: [
      { nr: 1, text: "Im proximalen Tubulus werden etwa 65–70 % des filtrierten Natriums rückresorbiert.", korrekt: true },
      { nr: 2, text: "Glukose wird im proximalen Tubulus durch sekundär-aktiven Transport (SGLT) vollständig rückresorbiert.", korrekt: true },
      { nr: 3, text: "Aminosäuren werden im proximalen Tubulus rückresorbiert.", korrekt: true },
      { nr: 4, text: "Der absteigende Schenkel der Henle-Schleife ist wasserdurchlässig, aber wenig permeabel für Salze.", korrekt: true },
      { nr: 5, text: "Im aufsteigenden Schenkel der Henle-Schleife wird Wasser aktiv resorbiert.", korrekt: false },
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
      "Richtig sind 1–4. Der aufsteigende Schenkel ist wasserundurchlässig; dort werden Ionen (NaCl) aktiv transportiert (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 016 ADH und Wasserhaushalt (mittel) ───
  {
    id: "bio-typk-new3-016",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zu ADH (Vasopressin) und dem Wasserhaushalt sind richtig?",
    aussagen: [
      { nr: 1, text: "ADH wird im Hypothalamus produziert und aus der Neurohypophyse freigesetzt.", korrekt: true },
      { nr: 2, text: "ADH erhöht die Wasserpermeabilität des Sammelrohrs durch Einbau von Aquaporin-2.", korrekt: true },
      { nr: 3, text: "Bei Dehydratation steigt die ADH-Ausschüttung, und der Urin wird konzentriert.", korrekt: true },
      { nr: 4, text: "Diabetes insipidus entsteht durch ADH-Mangel oder ADH-Resistenz.", korrekt: true },
      { nr: 5, text: "ADH senkt den Blutdruck durch Vasodilatation.", korrekt: false },
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
      "Richtig sind 1–4. ADH wirkt vasokonstriktorisch und erhöht den Blutdruck (daher auch Vasopressin; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 017 RAAS (schwer) ───
  {
    id: "bio-typk-new3-017",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Renin-Angiotensin-Aldosteron-System (RAAS) sind richtig?",
    aussagen: [
      { nr: 1, text: "Renin wird von den juxtaglomerulären Zellen der Niere bei niedrigem Blutdruck sezerniert.", korrekt: true },
      { nr: 2, text: "Renin spaltet Angiotensinogen (aus der Leber) zu Angiotensin I.", korrekt: true },
      { nr: 3, text: "ACE (Angiotensin-Converting-Enzyme) wandelt Angiotensin I in Angiotensin II um.", korrekt: true },
      { nr: 4, text: "Angiotensin II bewirkt Vasokonstriktion und stimuliert die Aldosteronfreisetzung.", korrekt: true },
      { nr: 5, text: "Aldosteron wird in der Nebennierenmedulla produziert.", korrekt: false },
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
      "Richtig sind 1–4. Aldosteron wird in der Nebennierenrinde (Zona glomerulosa) produziert, nicht in der Medulla (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 018 Harnstoffzyklus (schwer) ───
  {
    id: "bio-typk-new3-018",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Harnstoffzyklus sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Harnstoffzyklus findet hauptsächlich in der Leber statt.", korrekt: true },
      { nr: 2, text: "Harnstoff entsteht aus dem Abbau von Aminogruppen beim Aminosäurekatabolismus.", korrekt: true },
      { nr: 3, text: "Harnstoff wird über die Niere mit dem Urin ausgeschieden.", korrekt: true },
      { nr: 4, text: "Der Harnstoffzyklus verläuft teilweise in den Mitochondrien und teilweise im Zytoplasma.", korrekt: true },
      { nr: 5, text: "Harnstoff ist toxischer als Ammoniak.", korrekt: false },
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
      "Richtig sind 1–4. Ammoniak ist wesentlich toxischer als Harnstoff; der Harnstoffzyklus dient der Entgiftung von Ammoniak (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 019 Nierenfunktionen (leicht) ───
  {
    id: "bio-typk-new3-019",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zu den Funktionen der Niere sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Niere reguliert den Wasser- und Elektrolythaushalt.", korrekt: true },
      { nr: 2, text: "Die Niere ist am Säure-Basen-Haushalt beteiligt (H⁺-Sekretion, HCO₃⁻-Rückresorption).", korrekt: true },
      { nr: 3, text: "Die Niere produziert Erythropoetin (EPO) zur Stimulation der Erythropoese.", korrekt: true },
      { nr: 4, text: "Die Niere aktiviert Vitamin D (Calcitriol-Bildung).", korrekt: true },
      { nr: 5, text: "Die Niere hat keine endokrine Funktion.", korrekt: false },
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
      "Richtig sind 1–4. Die Niere hat wichtige endokrine Funktionen (EPO, Renin, Calcitriol; 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 020 Aldosteron-Wirkung (mittel) ───
  {
    id: "bio-typk-new3-020",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zur Wirkung von Aldosteron sind richtig?",
    aussagen: [
      { nr: 1, text: "Aldosteron fördert die Natriumrückresorption im distalen Tubulus und Sammelrohr.", korrekt: true },
      { nr: 2, text: "Aldosteron fördert die Kaliumsekretion in den Urin.", korrekt: true },
      { nr: 3, text: "Durch Natriumretention folgt Wasser osmotisch nach, das Blutvolumen steigt.", korrekt: true },
      { nr: 4, text: "Aldosteron ist ein Steroidhormon aus der Nebennierenrinde.", korrekt: true },
      { nr: 5, text: "Aldosteron wirkt über membranständige Rezeptoren und löst sofortige Effekte aus.", korrekt: false },
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
      "Richtig sind 1–4. Aldosteron ist ein Steroidhormon, das über intrazelluläre Rezeptoren wirkt und die Genexpression beeinflusst (verzögerte Wirkung; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 021 Gegenstromprinzip (schwer) ───
  {
    id: "bio-typk-new3-021",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum Gegenstromprinzip der Henle-Schleife sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Gegenstromprinzip erzeugt einen zunehmenden osmotischen Gradienten im Nierenmark.", korrekt: true },
      { nr: 2, text: "Der absteigende Schenkel verliert Wasser passiv an das hyperosmolare Interstitium.", korrekt: true },
      { nr: 3, text: "Der aufsteigende dicke Schenkel transportiert NaCl aktiv ins Interstitium (NKCC2-Transporter).", korrekt: true },
      { nr: 4, text: "Die Vasa recta verlaufen parallel zur Henle-Schleife und erhalten den Gradienten.", korrekt: true },
      { nr: 5, text: "Der aufsteigende Schenkel ist hochpermeabel für Wasser.", korrekt: false },
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
      "Richtig sind 1–4. Der aufsteigende Schenkel ist wasserundurchlässig; er transportiert nur Ionen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 022 Tubuloglomeruläres Feedback (schwer) ───
  {
    id: "bio-typk-new3-022",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-07",
    stamm: "Welche der folgenden Aussagen zum tubuloglomerulären Feedback sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Macula densa liegt am Übergang des aufsteigenden Schenkels zum distalen Tubulus.", korrekt: true },
      { nr: 2, text: "Die Macula densa misst die NaCl-Konzentration im Tubuluslumen.", korrekt: true },
      { nr: 3, text: "Bei hoher NaCl-Konzentration wird die afferente Arteriole verengt, und die GFR sinkt.", korrekt: true },
      { nr: 4, text: "Dieses Feedback schützt vor übermäßigem Flüssigkeits- und Salzverlust.", korrekt: true },
      { nr: 5, text: "Die Macula densa gehört nicht zum juxtaglomerulären Apparat.", korrekt: false },
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
      "Richtig sind 1–4. Die Macula densa ist ein wesentlicher Bestandteil des juxtaglomerulären Apparats (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 023–033: ATMUNG UND GASAUSTAUSCH ─────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 023 Atemwege (leicht) ───
  {
    id: "bio-typk-new3-023",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zu den Atemwegen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Trachea verzweigt sich in zwei Hauptbronchien.", korrekt: true },
      { nr: 2, text: "Die Atemwege werden durch Flimmerepithel und Mukus gereinigt (mukoziliäre Clearance).", korrekt: true },
      { nr: 3, text: "Der rechte Hauptbronchus ist steiler und kürzer als der linke.", korrekt: true },
      { nr: 4, text: "Die Bronchiolen enthalten noch Knorpelspangen zur Stabilisierung.", korrekt: false },
      { nr: 5, text: "Die Epiglottis verschließt beim Schlucken den Kehlkopfeingang.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Bronchiolen haben keine Knorpelspangen mehr; ihre Wand wird durch glatte Muskulatur stabilisiert (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 024 Alveolen und Gasaustausch (leicht) ───
  {
    id: "bio-typk-new3-024",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zu Alveolen und Gasaustausch sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Alveolen sind von einem dichten Kapillarnetz umgeben.", korrekt: true },
      { nr: 2, text: "Der Gasaustausch erfolgt durch Diffusion entlang des Partialdruckgefälles.", korrekt: true },
      { nr: 3, text: "Surfactant senkt die Oberflächenspannung und verhindert das Kollabieren der Alveolen.", korrekt: true },
      { nr: 4, text: "Surfactant wird von Typ-II-Pneumozyten produziert.", korrekt: true },
      { nr: 5, text: "O₂ diffundiert vom Blut in die Alveolen.", korrekt: false },
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
      "Richtig sind 1–4. O₂ diffundiert von den Alveolen ins Blut (hoher pO₂ in der Alveole), nicht umgekehrt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 025 Hämoglobin und O₂-Transport (mittel) ───
  {
    id: "bio-typk-new3-025",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zum Sauerstofftransport im Blut sind richtig?",
    aussagen: [
      { nr: 1, text: "Hämoglobin besteht aus vier Untereinheiten, jede mit einer Häm-Gruppe.", korrekt: true },
      { nr: 2, text: "Ein Hämoglobin-Molekül kann maximal vier O₂-Moleküle binden.", korrekt: true },
      { nr: 3, text: "Die O₂-Bindungskurve hat eine sigmoide (S-förmige) Form durch kooperative Bindung.", korrekt: true },
      { nr: 4, text: "Etwa 98 % des Sauerstoffs werden an Hämoglobin gebunden transportiert.", korrekt: true },
      { nr: 5, text: "Fetales Hämoglobin (HbF) hat eine niedrigere O₂-Affinität als adultes Hämoglobin (HbA).", korrekt: false },
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
      "Richtig sind 1–4. HbF hat eine höhere O₂-Affinität als HbA, damit es dem mütterlichen Blut effektiv O₂ entziehen kann (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 026 Bohr-Effekt (mittel) ───
  {
    id: "bio-typk-new3-026",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zum Bohr-Effekt sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein niedriger pH-Wert (sauer) verschiebt die O₂-Bindungskurve nach rechts.", korrekt: true },
      { nr: 2, text: "Bei Rechtsverschiebung gibt Hämoglobin O₂ leichter ab.", korrekt: true },
      { nr: 3, text: "Im stoffwechselaktiven Gewebe (viel CO₂, niedriger pH) wird O₂ effizient freigesetzt.", korrekt: true },
      { nr: 4, text: "Erhöhte Temperatur verschiebt die Kurve nach rechts.", korrekt: true },
      { nr: 5, text: "Der Bohr-Effekt beschreibt die erhöhte O₂-Affinität bei niedrigem pH.", korrekt: false },
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
      "Richtig sind 1–4. Der Bohr-Effekt beschreibt die verminderte (nicht erhöhte) O₂-Affinität bei niedrigem pH (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 027 CO₂-Transport (mittel) ───
  {
    id: "bio-typk-new3-027",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zum CO₂-Transport im Blut sind richtig?",
    aussagen: [
      { nr: 1, text: "Etwa 70 % des CO₂ werden als Bicarbonat (HCO₃⁻) im Plasma transportiert.", korrekt: true },
      { nr: 2, text: "Carboanhydrase in Erythrozyten katalysiert die Reaktion CO₂ + H₂O → H₂CO₃.", korrekt: true },
      { nr: 3, text: "Etwa 23 % des CO₂ sind als Carbaminohämoglobin an Hämoglobin gebunden.", korrekt: true },
      { nr: 4, text: "Nur etwa 7 % des CO₂ sind physikalisch im Plasma gelöst.", korrekt: true },
      { nr: 5, text: "CO₂ wird ausschließlich physikalisch gelöst im Plasma transportiert.", korrekt: false },
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
      "Richtig sind 1–4. CO₂ wird auf drei Wegen transportiert: als HCO₃⁻ (~70 %), Carbaminoverbindung (~23 %) und gelöst (~7 %) (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 028 Atemmechanik (leicht) ───
  {
    id: "bio-typk-new3-028",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zur Atemmechanik sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Inspiration kontrahiert sich das Zwerchfell und flacht ab.", korrekt: true },
      { nr: 2, text: "Die äußeren Interkostalmuskeln heben die Rippen und vergrößern den Thorax.", korrekt: true },
      { nr: 3, text: "Die normale Exspiration ist in Ruhe ein überwiegend passiver Vorgang.", korrekt: true },
      { nr: 4, text: "Der Pleuraspalt enthält einen dünnen Flüssigkeitsfilm und steht unter Unterdruck.", korrekt: true },
      { nr: 5, text: "Die Exspiration erfolgt in Ruhe durch aktive Kontraktion der Bauchmuskulatur.", korrekt: false },
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
      "Richtig sind 1–4. Die Ruhexspiration erfolgt passiv durch elastische Rückstellkräfte (5 falsch; Bauchmuskulatur nur bei forcierter Exspiration).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 029 Lungenvolumina (mittel) ───
  {
    id: "bio-typk-new3-029",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zu Lungenvolumina sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Tidalvolumen (Atemzugvolumen) beträgt in Ruhe etwa 500 mL.", korrekt: true },
      { nr: 2, text: "Die Vitalkapazität ist die Summe aus Tidalvolumen, inspiratorischem und exspiratorischem Reservevolumen.", korrekt: true },
      { nr: 3, text: "Das Residualvolumen ist die Luftmenge, die nach maximaler Exspiration in der Lunge verbleibt.", korrekt: true },
      { nr: 4, text: "Die Totalkapazität umfasst Vitalkapazität plus Residualvolumen.", korrekt: true },
      { nr: 5, text: "Das Residualvolumen kann mit einem Spirometer direkt gemessen werden.", korrekt: false },
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
      "Richtig sind 1–4. Das Residualvolumen kann nicht mit dem Spirometer gemessen werden, sondern z. B. durch Helium-Verdünnung oder Bodyplethysmographie (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 030 Atemregulation (schwer) ───
  {
    id: "bio-typk-new3-030",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zur Atemregulation sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Atemzentrum liegt in der Medulla oblongata und im Pons.", korrekt: true },
      { nr: 2, text: "Chemosensoren in der Medulla reagieren primär auf den pCO₂ (über pH-Änderung im Liquor).", korrekt: true },
      { nr: 3, text: "Periphere Chemosensoren im Glomus caroticum messen pO₂, pCO₂ und pH.", korrekt: true },
      { nr: 4, text: "Ein Anstieg des pCO₂ steigert den Atemantrieb.", korrekt: true },
      { nr: 5, text: "Der Atemantrieb wird ausschließlich durch den O₂-Partialdruck gesteuert.", korrekt: false },
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
      "Richtig sind 1–4. Der Hauptatemantrieb kommt vom pCO₂; der pO₂ spielt erst bei starkem Abfall eine Rolle (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 031 2,3-BPG und Höhenanpassung (schwer) ───
  {
    id: "bio-typk-new3-031",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zu 2,3-Bisphosphoglycerat (2,3-BPG) und Höhenanpassung sind richtig?",
    aussagen: [
      { nr: 1, text: "2,3-BPG bindet an desoxy-Hämoglobin und senkt die O₂-Affinität.", korrekt: true },
      { nr: 2, text: "Bei Höhenaufenthalt steigt die 2,3-BPG-Konzentration in den Erythrozyten.", korrekt: true },
      { nr: 3, text: "Erhöhtes 2,3-BPG erleichtert die O₂-Abgabe an das Gewebe.", korrekt: true },
      { nr: 4, text: "In großer Höhe stimuliert vermehrtes EPO die Erythrozytenbildung.", korrekt: true },
      { nr: 5, text: "2,3-BPG verschiebt die O₂-Bindungskurve nach links.", korrekt: false },
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
      "Richtig sind 1–4. 2,3-BPG verschiebt die Kurve nach rechts (geringere Affinität, leichtere Abgabe; 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 032 Totraum und alveoläre Ventilation (mittel) ───
  {
    id: "bio-typk-new3-032",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zu Totraum und alveolärer Ventilation sind richtig?",
    aussagen: [
      { nr: 1, text: "Der anatomische Totraum umfasst die luftleitenden Atemwege, in denen kein Gasaustausch stattfindet.", korrekt: true },
      { nr: 2, text: "Der anatomische Totraum beträgt etwa 150 mL.", korrekt: true },
      { nr: 3, text: "Die alveoläre Ventilation ergibt sich aus (Tidalvolumen minus Totraum) mal Atemfrequenz.", korrekt: true },
      { nr: 4, text: "Schnelle, flache Atmung reduziert die alveoläre Ventilation im Vergleich zu langsamer, tiefer Atmung.", korrekt: true },
      { nr: 5, text: "Der gesamte Atemzug erreicht die Alveolen.", korrekt: false },
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
      "Richtig sind 1–4. Nur der Teil des Atemzugs, der über den Totraum hinausgeht, erreicht die Alveolen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 033 CO-Vergiftung (schwer) ───
  {
    id: "bio-typk-new3-033",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-01",
    stamm: "Welche der folgenden Aussagen zur Kohlenmonoxid-(CO)-Vergiftung sind richtig?",
    aussagen: [
      { nr: 1, text: "CO bindet etwa 200- bis 300-mal stärker an Hämoglobin als O₂.", korrekt: true },
      { nr: 2, text: "CO-Hämoglobin (Carboxyhämoglobin) kann keinen Sauerstoff transportieren.", korrekt: true },
      { nr: 3, text: "CO verschiebt die O₂-Bindungskurve des verbleibenden funktionellen Hämoglobins nach links.", korrekt: true },
      { nr: 4, text: "Die Therapie erfolgt durch Gabe von 100 % Sauerstoff, um CO von Hämoglobin zu verdrängen.", korrekt: true },
      { nr: 5, text: "CO-Vergiftung führt typischerweise zu einer Blaufärbung (Zyanose) der Haut.", korrekt: false },
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
      "Richtig sind 1–4. CO-Hämoglobin ist kirschrot, nicht blau; daher zeigt sich keine typische Zyanose (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 034–044: HERZ-KREISLAUF ──────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 034 Herzanatomie (leicht) ───
  {
    id: "bio-typk-new3-034",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zur Anatomie des Herzens sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Herz besteht aus zwei Vorhöfen und zwei Kammern.", korrekt: true },
      { nr: 2, text: "Die linke Herzkammer pumpt Blut in die Aorta (Körperkreislauf).", korrekt: true },
      { nr: 3, text: "Die rechte Herzkammer pumpt Blut in den Truncus pulmonalis (Lungenkreislauf).", korrekt: true },
      { nr: 4, text: "Das Herzseptum trennt die rechte von der linken Herzhälfte.", korrekt: true },
      { nr: 5, text: "Die Pulmonalvenen führen sauerstoffarmes Blut zur linken Herzhälfte.", korrekt: false },
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
      "Richtig sind 1–4. Die Pulmonalvenen führen sauerstoffreiches Blut von der Lunge zum linken Vorhof (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 035 Herzzyklus (mittel) ───
  {
    id: "bio-typk-new3-035",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum Herzzyklus sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Systole umfasst die Anspannungs- und die Austreibungsphase.", korrekt: true },
      { nr: 2, text: "Die Diastole umfasst die Entspannungs- und die Füllungsphase.", korrekt: true },
      { nr: 3, text: "Während der isovolumetrischen Anspannung sind alle Herzklappen geschlossen.", korrekt: true },
      { nr: 4, text: "Die Aortenklappe öffnet sich, wenn der Ventrikeldruck den Aortendruck übersteigt.", korrekt: true },
      { nr: 5, text: "Die Diastole ist bei normaler Herzfrequenz kürzer als die Systole.", korrekt: false },
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
      "Richtig sind 1–4. Die Diastole ist bei normaler Herzfrequenz länger als die Systole (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 036 Erregungsleitungssystem (mittel) ───
  {
    id: "bio-typk-new3-036",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum Erregungsleitungssystem des Herzens sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Sinusknoten ist der primäre Schrittmacher mit einer Frequenz von ca. 60–100/min.", korrekt: true },
      { nr: 2, text: "Der AV-Knoten verzögert die Erregungsüberleitung, damit die Vorhöfe sich vor den Kammern kontrahieren.", korrekt: true },
      { nr: 3, text: "Das His-Bündel leitet die Erregung vom AV-Knoten zu den Kammern.", korrekt: true },
      { nr: 4, text: "Purkinje-Fasern sorgen für eine schnelle und gleichmäßige Erregung der Ventrikelmuskulatur.", korrekt: true },
      { nr: 5, text: "Die Erregung breitet sich vom His-Bündel zuerst an die Herzspitze und dann zur Herzbasis aus.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle fünf Aussagen sind richtig. Die Erregungsausbreitung erfolgt tatsächlich von der Herzspitze zur Basis.",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 037 EKG-Grundlagen (mittel) ───
  {
    id: "bio-typk-new3-037",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum EKG sind richtig?",
    aussagen: [
      { nr: 1, text: "Die P-Welle repräsentiert die Vorhoferregung (Depolarisation).", korrekt: true },
      { nr: 2, text: "Der QRS-Komplex repräsentiert die Kammererregung (Depolarisation).", korrekt: true },
      { nr: 3, text: "Die T-Welle repräsentiert die Kammerrepolarisation.", korrekt: true },
      { nr: 4, text: "Die PQ-Strecke entspricht der Überleitung vom Vorhof zur Kammer.", korrekt: true },
      { nr: 5, text: "Der QRS-Komplex repräsentiert die Vorhofrepolarisation.", korrekt: false },
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
      "Richtig sind 1–4. Der QRS-Komplex zeigt die Kammerdepolarisation; die Vorhofrepolarisation wird vom QRS überdeckt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 038 Blutdruck (leicht) ───
  {
    id: "bio-typk-new3-038",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum Blutdruck sind richtig?",
    aussagen: [
      { nr: 1, text: "Der systolische Blutdruck entsteht während der Auswurfphase des Herzens.", korrekt: true },
      { nr: 2, text: "Der diastolische Blutdruck wird durch die Windkesselfunktion der Aorta aufrechterhalten.", korrekt: true },
      { nr: 3, text: "Ein normaler Blutdruck liegt bei etwa 120/80 mmHg.", korrekt: true },
      { nr: 4, text: "Der Blutdruck sinkt von den Arterien über die Kapillaren zu den Venen.", korrekt: true },
      { nr: 5, text: "Der Blutdruck ist in den großen Venen am höchsten.", korrekt: false },
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
      "Richtig sind 1–4. Der Blutdruck ist in der Aorta am höchsten und fällt zu den Venen hin ab (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 039 Gefäßtypen (leicht) ───
  {
    id: "bio-typk-new3-039",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zu den Blutgefäßen sind richtig?",
    aussagen: [
      { nr: 1, text: "Arterien führen Blut vom Herzen weg, Venen führen Blut zum Herzen.", korrekt: true },
      { nr: 2, text: "Kapillaren sind die dünnsten Gefäße und der Ort des Stoffaustausches.", korrekt: true },
      { nr: 3, text: "Arterien haben dickere Muskelschichten als Venen.", korrekt: true },
      { nr: 4, text: "Venen besitzen Klappen, die den Rückfluss des Blutes verhindern.", korrekt: true },
      { nr: 5, text: "Arterien führen immer sauerstoffreiches Blut.", korrekt: false },
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
      "Richtig sind 1–4. Die Pulmonalarterien führen sauerstoffarmes Blut zur Lunge (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 040 Frank-Starling-Mechanismus (schwer) ───
  {
    id: "bio-typk-new3-040",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum Frank-Starling-Mechanismus sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine erhöhte Füllung (Vorlast) des Ventrikels führt zu einer stärkeren Kontraktion.", korrekt: true },
      { nr: 2, text: "Der Mechanismus beruht auf der optimalen Überlappung der Aktin- und Myosinfilamente.", korrekt: true },
      { nr: 3, text: "Er sorgt dafür, dass das Herz das angebotene Blutvolumen vollständig auswirft.", korrekt: true },
      { nr: 4, text: "Der Frank-Starling-Mechanismus passt die Auswurfleistung beider Ventrikel aneinander an.", korrekt: true },
      { nr: 5, text: "Der Frank-Starling-Mechanismus funktioniert nur bei sympathischer Stimulation.", korrekt: false },
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
      "Richtig sind 1–4. Der Frank-Starling-Mechanismus ist eine intrinsische Eigenschaft des Herzmuskels und funktioniert auch ohne Sympathikus (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 041 Herzklappen (mittel) ───
  {
    id: "bio-typk-new3-041",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zu den Herzklappen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Mitralklappe (Bikuspidalklappe) liegt zwischen linkem Vorhof und linker Kammer.", korrekt: true },
      { nr: 2, text: "Die Trikuspidalklappe liegt zwischen rechtem Vorhof und rechter Kammer.", korrekt: true },
      { nr: 3, text: "Aorten- und Pulmonalklappe sind Taschenklappen.", korrekt: true },
      { nr: 4, text: "Sehnenfäden (Chordae tendineae) verhindern das Umschlagen der Segelklappen.", korrekt: true },
      { nr: 5, text: "Die Aortenklappe hat drei Segel, die Mitralklappe ebenfalls drei.", korrekt: false },
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
      "Richtig sind 1–4. Die Mitralklappe hat nur zwei Segel (Bikuspidalklappe), die Aortenklappe hat drei Taschen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 042 Koronargefäße (schwer) ───
  {
    id: "bio-typk-new3-042",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zu den Herzkranzgefäßen (Koronargefäßen) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Koronararterien entspringen aus der Aortenwurzel oberhalb der Aortenklappe.", korrekt: true },
      { nr: 2, text: "Die Durchblutung des Myokards erfolgt hauptsächlich während der Diastole.", korrekt: true },
      { nr: 3, text: "Die linke Koronararterie versorgt den größten Teil der linken Kammerwand.", korrekt: true },
      { nr: 4, text: "Ein Verschluss einer Koronararterie kann zum Myokardinfarkt führen.", korrekt: true },
      { nr: 5, text: "Die Koronargefäße werden während der Systole optimal durchblutet.", korrekt: false },
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
      "Richtig sind 1–4. Während der Systole werden die Koronargefäße durch die Myokardkontraktion komprimiert; die Hauptdurchblutung erfolgt in der Diastole (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 043 Kreislaufsystem vollständig (leicht) ───
  {
    id: "bio-typk-new3-043",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zum Blutkreislauf sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Körperkreislauf (großer Kreislauf) versorgt alle Organe mit sauerstoffreichem Blut.", korrekt: true },
      { nr: 2, text: "Der Lungenkreislauf (kleiner Kreislauf) dient dem Gasaustausch in der Lunge.", korrekt: true },
      { nr: 3, text: "Im kleinen Kreislauf fließt sauerstoffarmes Blut vom rechten Ventrikel zur Lunge.", korrekt: true },
      { nr: 4, text: "Oxygeniertes Blut gelangt über die Pulmonalvenen zum linken Vorhof.", korrekt: true },
      { nr: 5, text: "Beide Kreisläufe sind hintereinander geschaltet.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle fünf Aussagen sind richtig. Körper- und Lungenkreislauf sind in Serie geschaltet.",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 044 Vegetative Herzsteuerung (schwer) ───
  {
    id: "bio-typk-new3-044",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-06",
    stamm: "Welche der folgenden Aussagen zur vegetativen Steuerung des Herzens sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Sympathikus erhöht die Herzfrequenz (positiv chronotrop) und Kontraktionskraft (positiv inotrop).", korrekt: true },
      { nr: 2, text: "Der Parasympathikus (N. vagus) senkt die Herzfrequenz (negativ chronotrop).", korrekt: true },
      { nr: 3, text: "Noradrenalin und Adrenalin wirken am Herzen über β1-Adrenozeptoren.", korrekt: true },
      { nr: 4, text: "Acetylcholin wirkt am Herzen über muskarinische M2-Rezeptoren.", korrekt: true },
      { nr: 5, text: "Der Parasympathikus steigert die Kontraktionskraft der Ventrikel stark.", korrekt: false },
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
      "Richtig sind 1–4. Der Parasympathikus hat kaum Einfluss auf die Ventrikelkontraktionskraft; er wirkt hauptsächlich am Sinusknoten und AV-Knoten (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 045–055: VERDAUUNG ───────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 045 Verdauungsenzyme Mund und Magen (leicht) ───
  {
    id: "bio-typk-new3-045",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zur Verdauung im Mund und Magen sind richtig?",
    aussagen: [
      { nr: 1, text: "Speichelamylase (Ptyalin) beginnt die Stärkeverdauung im Mund.", korrekt: true },
      { nr: 2, text: "Pepsin spaltet Proteine im sauren Milieu des Magens.", korrekt: true },
      { nr: 3, text: "Pepsin wird als inaktives Pepsinogen von den Hauptzellen sezerniert.", korrekt: true },
      { nr: 4, text: "Belegzellen (Parietalzellen) produzieren Salzsäure (HCl) und Intrinsic Factor.", korrekt: true },
      { nr: 5, text: "Im Magen werden Fette vollständig verdaut.", korrekt: false },
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
      "Richtig sind 1–4. Die Fettverdauung findet hauptsächlich im Duodenum statt (Lipasen, Gallensäuren; 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 046 Pankreas (mittel) ───
  {
    id: "bio-typk-new3-046",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zum Pankreas sind richtig?",
    aussagen: [
      { nr: 1, text: "Das exokrine Pankreas produziert Verdauungsenzyme (Trypsin, Lipase, Amylase).", korrekt: true },
      { nr: 2, text: "Das endokrine Pankreas (Langerhans-Inseln) produziert Insulin und Glukagon.", korrekt: true },
      { nr: 3, text: "Trypsinogen wird durch Enterokinase im Duodenum zu Trypsin aktiviert.", korrekt: true },
      { nr: 4, text: "Der Pankreassaft enthält Bicarbonat zur Neutralisation des sauren Magenchymus.", korrekt: true },
      { nr: 5, text: "Das Pankreas liegt im Brustraum hinter dem Herzen.", korrekt: false },
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
      "Richtig sind 1–4. Das Pankreas liegt retroperitoneal im Oberbauch hinter dem Magen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 047 Leber und Galle (mittel) ───
  {
    id: "bio-typk-new3-047",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zu Leber und Galle sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Leber produziert Galle, die in der Gallenblase gespeichert und konzentriert wird.", korrekt: true },
      { nr: 2, text: "Gallensäuren emulgieren Fette und vergrößern deren Oberfläche für die Lipasenwirkung.", korrekt: true },
      { nr: 3, text: "Die Leber ist das zentrale Organ für den Stoffwechsel (Glukose, Proteine, Lipide).", korrekt: true },
      { nr: 4, text: "Die Leber entgiftet körperfremde Stoffe (Biotransformation).", korrekt: true },
      { nr: 5, text: "Gallensäuren sind Enzyme, die Fette direkt spalten.", korrekt: false },
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
      "Richtig sind 1–4. Gallensäuren sind keine Enzyme; sie emulgieren Fette nur, die eigentliche Spaltung übernehmen Lipasen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 048 Dünndarm-Resorption (mittel) ───
  {
    id: "bio-typk-new3-048",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zur Resorption im Dünndarm sind richtig?",
    aussagen: [
      { nr: 1, text: "Zotten und Mikrovilli vergrößern die Oberfläche des Dünndarms enorm.", korrekt: true },
      { nr: 2, text: "Monosaccharide (z. B. Glukose) werden über SGLT1 und GLUT2 resorbiert.", korrekt: true },
      { nr: 3, text: "Aminosäuren und Dipeptide werden über spezifische Transporter aufgenommen.", korrekt: true },
      { nr: 4, text: "Fettsäuren und Monoglyceride werden in Enterozyten zu Triglyceriden verestert und als Chylomikronen abgegeben.", korrekt: true },
      { nr: 5, text: "Die Resorption aller Nährstoffe erfolgt ausschließlich passiv ohne Energieaufwand.", korrekt: false },
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
      "Richtig sind 1–4. Viele Resorptionsvorgänge sind aktiv (z. B. SGLT1 = sekundär-aktiver Na⁺-gekoppelter Transport; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 049 Dickdarm (leicht) ───
  {
    id: "bio-typk-new3-049",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zum Dickdarm sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Dickdarm resorbiert vor allem Wasser und Elektrolyte.", korrekt: true },
      { nr: 2, text: "Die Darmflora (Mikrobiom) im Dickdarm produziert Vitamin K und einige B-Vitamine.", korrekt: true },
      { nr: 3, text: "Der Dickdarm gliedert sich in Caecum, Colon und Rektum.", korrekt: true },
      { nr: 4, text: "Die Appendix vermiformis (Wurmfortsatz) sitzt am Caecum.", korrekt: true },
      { nr: 5, text: "Im Dickdarm findet die Hauptverdauung der Proteine statt.", korrekt: false },
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
      "Richtig sind 1–4. Die Proteinverdauung findet hauptsächlich im Magen und Dünndarm statt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 050 Hormone der Verdauung (schwer) ───
  {
    id: "bio-typk-new3-050",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zu Verdauungshormonen sind richtig?",
    aussagen: [
      { nr: 1, text: "Gastrin stimuliert die HCl-Sekretion der Belegzellen im Magen.", korrekt: true },
      { nr: 2, text: "Sekretin stimuliert die Bicarbonatsekretion des Pankreas.", korrekt: true },
      { nr: 3, text: "Cholecystokinin (CCK) stimuliert die Kontraktion der Gallenblase und die Enzymsekretion des Pankreas.", korrekt: true },
      { nr: 4, text: "GIP (Gastric Inhibitory Peptide) hemmt die Magensäuresekretion und stimuliert die Insulinfreisetzung.", korrekt: true },
      { nr: 5, text: "Sekretin wird im Magen als Reaktion auf Alkohol produziert.", korrekt: false },
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
      "Richtig sind 1–4. Sekretin wird von S-Zellen im Duodenum als Reaktion auf sauren Chymus freigesetzt, nicht im Magen durch Alkohol (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 051 Intrinsic Factor und Vitamin B12 (schwer) ───
  {
    id: "bio-typk-new3-051",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zu Intrinsic Factor und Vitamin B12 sind richtig?",
    aussagen: [
      { nr: 1, text: "Intrinsic Factor wird von den Belegzellen (Parietalzellen) des Magens produziert.", korrekt: true },
      { nr: 2, text: "Intrinsic Factor ist für die Resorption von Vitamin B12 im terminalen Ileum notwendig.", korrekt: true },
      { nr: 3, text: "Vitamin-B12-Mangel kann zu megaloblastärer Anämie führen.", korrekt: true },
      { nr: 4, text: "Bei Zerstörung der Belegzellen (z. B. Autoimmungastritis) kann perniziöse Anämie entstehen.", korrekt: true },
      { nr: 5, text: "Vitamin B12 wird im Duodenum ohne Intrinsic Factor resorbiert.", korrekt: false },
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
      "Richtig sind 1–4. Vitamin B12 benötigt Intrinsic Factor und wird im terminalen Ileum resorbiert, nicht im Duodenum (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 052 Enterohepatischer Kreislauf (schwer) ───
  {
    id: "bio-typk-new3-052",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zum enterohepatischen Kreislauf sind richtig?",
    aussagen: [
      { nr: 1, text: "Gallensäuren werden im terminalen Ileum rückresorbiert und über die Pfortader zur Leber transportiert.", korrekt: true },
      { nr: 2, text: "Etwa 95 % der Gallensäuren werden pro Umlauf rückresorbiert.", korrekt: true },
      { nr: 3, text: "Der enterohepatische Kreislauf spart die Neusynthese von Gallensäuren.", korrekt: true },
      { nr: 4, text: "Die Pfortader (Vena portae) führt nährstoffreiches Blut vom Darm zur Leber.", korrekt: true },
      { nr: 5, text: "Gallensäuren werden nach einmaliger Verwendung vollständig über den Stuhl ausgeschieden.", korrekt: false },
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
      "Richtig sind 1–4. Der enterohepatische Kreislauf recycelt ~95 % der Gallensäuren; nur ein kleiner Teil geht über den Stuhl verloren (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 053 Magenaufbau (leicht) ───
  {
    id: "bio-typk-new3-053",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zum Aufbau des Magens sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Magen gliedert sich in Kardia, Fundus, Korpus und Pylorus.", korrekt: true },
      { nr: 2, text: "Die Magenschleimhaut ist durch eine Schleimschicht vor der eigenen Säure geschützt.", korrekt: true },
      { nr: 3, text: "Nebenzellen produzieren den schützenden Schleim (Mukus).", korrekt: true },
      { nr: 4, text: "Der Pylorus kontrolliert die portionsweise Entleerung des Chymus in das Duodenum.", korrekt: true },
      { nr: 5, text: "Der pH-Wert im Magen liegt normalerweise bei 7,0.", korrekt: false },
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
      "Richtig sind 1–4. Der pH-Wert im Magen liegt bei etwa 1–2 (stark sauer; 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 054 Dünndarmabschnitte (mittel) ───
  {
    id: "bio-typk-new3-054",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zu den Dünndarmabschnitten sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Dünndarm gliedert sich in Duodenum, Jejunum und Ileum.", korrekt: true },
      { nr: 2, text: "Im Duodenum münden der Gallengang und der Pankreasgang.", korrekt: true },
      { nr: 3, text: "Die Brunner-Drüsen im Duodenum sezernieren alkalischen Schleim.", korrekt: true },
      { nr: 4, text: "Die Peyer-Plaques im Ileum gehören zum darmassoziierten Immunsystem (GALT).", korrekt: true },
      { nr: 5, text: "Das Jejunum ist der kürzeste Dünndarmabschnitt.", korrekt: false },
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
      "Richtig sind 1–4. Das Duodenum ist der kürzeste Dünndarmabschnitt (~25 cm), nicht das Jejunum (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 055 Fettverdauung und -transport (schwer) ───
  {
    id: "bio-typk-new3-055",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-3-02",
    stamm: "Welche der folgenden Aussagen zur Fettverdauung und zum Fetttransport sind richtig?",
    aussagen: [
      { nr: 1, text: "Gallensäuren emulgieren Fette zu kleinen Mizellen.", korrekt: true },
      { nr: 2, text: "Pankreaslipase spaltet Triglyceride in Monoglyceride und freie Fettsäuren.", korrekt: true },
      { nr: 3, text: "Langkettige Fettsäuren gelangen als Chylomikronen in die Lymphe (nicht direkt ins Blut).", korrekt: true },
      { nr: 4, text: "Kurzkettige Fettsäuren können direkt in das Pfortaderblut aufgenommen werden.", korrekt: true },
      { nr: 5, text: "Fette werden ohne Gallensäuren ebenso effizient verdaut wie mit Gallensäuren.", korrekt: false },
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
      "Richtig sind 1–4. Ohne Gallensäuren ist die Fettverdauung stark beeinträchtigt, da die Emulgierung fehlt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 056–065: FORTPFLANZUNG ───────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 056 Meiose (leicht) ───
  {
    id: "bio-typk-new3-056",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur Meiose sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Meiose besteht aus zwei Teilungen (Meiose I und II) und erzeugt haploide Zellen.", korrekt: true },
      { nr: 2, text: "In der Meiose I werden homologe Chromosomen getrennt (Reduktionsteilung).", korrekt: true },
      { nr: 3, text: "In der Meiose II werden Schwesterchromatiden getrennt (ähnlich der Mitose).", korrekt: true },
      { nr: 4, text: "Crossing-over in der Prophase I erhöht die genetische Vielfalt.", korrekt: true },
      { nr: 5, text: "Die Meiose verdoppelt den Chromosomensatz.", korrekt: false },
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
      "Richtig sind 1–4. Die Meiose halbiert den Chromosomensatz (von diploid zu haploid; 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 057 Spermatogenese (mittel) ───
  {
    id: "bio-typk-new3-057",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur Spermatogenese sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Spermatogenese findet in den Tubuli seminiferi (Hodenkanälchen) statt.", korrekt: true },
      { nr: 2, text: "Aus einer primären Spermatozyte entstehen über Meiose I und II vier Spermatiden.", korrekt: true },
      { nr: 3, text: "Sertoli-Zellen unterstützen und ernähren die reifenden Spermien.", korrekt: true },
      { nr: 4, text: "Testosteron wird von den Leydig-Zellen im Interstitium produziert.", korrekt: true },
      { nr: 5, text: "Die Spermatogenese beginnt bereits vor der Geburt.", korrekt: false },
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
      "Richtig sind 1–4. Die Spermatogenese beginnt erst mit der Pubertät, nicht pränatal (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 058 Oogenese (mittel) ───
  {
    id: "bio-typk-new3-058",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur Oogenese sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Oogenese beginnt bereits pränatal; primäre Oozyten arretieren in der Prophase I.", korrekt: true },
      { nr: 2, text: "Meiose I wird erst bei der Ovulation abgeschlossen.", korrekt: true },
      { nr: 3, text: "Aus einer primären Oozyte entsteht eine funktionelle Eizelle und drei Polkörperchen.", korrekt: true },
      { nr: 4, text: "Meiose II wird erst bei der Befruchtung abgeschlossen.", korrekt: true },
      { nr: 5, text: "Frauen bilden kontinuierlich neue Eizellen aus Stammzellen.", korrekt: false },
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
      "Richtig sind 1–4. Die Anzahl der Eizellen ist bei der Geburt festgelegt; es werden keine neuen gebildet (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 059 Embryonalentwicklung (mittel) ───
  {
    id: "bio-typk-new3-059",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur frühen Embryonalentwicklung sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Furchungsteilungen wandeln die Zygote in eine Morula und dann in eine Blastozyste um.", korrekt: true },
      { nr: 2, text: "Die Blastozyste besteht aus Trophoblast (außen) und Embryoblast (innen).", korrekt: true },
      { nr: 3, text: "Die Implantation (Einnistung) erfolgt etwa 6–7 Tage nach der Befruchtung im Uterus.", korrekt: true },
      { nr: 4, text: "Der Trophoblast entwickelt sich zur Plazenta.", korrekt: true },
      { nr: 5, text: "Die Furchungsteilungen führen zu einer Zunahme der Gesamtzellmasse.", korrekt: false },
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
      "Richtig sind 1–4. Bei der Furchung teilen sich die Zellen, ohne zu wachsen; die Gesamtmasse bleibt zunächst gleich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 060 Keimblätter (mittel) ───
  {
    id: "bio-typk-new3-060",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu den Keimblättern sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Ektoderm bildet Epidermis, Nervensystem und Sinnesorgane.", korrekt: true },
      { nr: 2, text: "Das Mesoderm bildet Muskulatur, Skelett, Herz und Niere.", korrekt: true },
      { nr: 3, text: "Das Entoderm bildet das Epithel des Verdauungstraktes und der Atemwege.", korrekt: true },
      { nr: 4, text: "Während der Gastrulation bilden sich die drei Keimblätter.", korrekt: true },
      { nr: 5, text: "Das Nervensystem entsteht aus dem Entoderm.", korrekt: false },
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
      "Richtig sind 1–4. Das Nervensystem entsteht aus dem Ektoderm, nicht aus dem Entoderm (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 061 Plazenta (schwer) ───
  {
    id: "bio-typk-new3-061",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Plazenta sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Plazenta ermöglicht den Stoff- und Gasaustausch zwischen Mutter und Fetus.", korrekt: true },
      { nr: 2, text: "Mütterliches und fetales Blut mischen sich in der Plazenta nicht direkt.", korrekt: true },
      { nr: 3, text: "Die Plazenta produziert Hormone wie hCG, Progesteron und Östrogen.", korrekt: true },
      { nr: 4, text: "IgG-Antikörper der Mutter können die Plazentaschranke passieren und dem Fetus passive Immunität verleihen.", korrekt: true },
      { nr: 5, text: "Die Plazenta verhindert vollständig den Übertritt aller Krankheitserreger.", korrekt: false },
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
      "Richtig sind 1–4. Einige Erreger (z. B. Röteln, Toxoplasma, HIV) können die Plazentaschranke überwinden (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 062 Menstruationszyklus (mittel) ───
  {
    id: "bio-typk-new3-062",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zum Menstruationszyklus sind richtig?",
    aussagen: [
      { nr: 1, text: "In der Follikelphase reift unter FSH-Einfluss ein dominanter Follikel heran.", korrekt: true },
      { nr: 2, text: "Der LH-Peak löst die Ovulation aus.", korrekt: true },
      { nr: 3, text: "In der Lutealphase produziert der Gelbkörper Progesteron.", korrekt: true },
      { nr: 4, text: "Progesteron bereitet die Uterusschleimhaut auf die Implantation vor.", korrekt: true },
      { nr: 5, text: "Der Gelbkörper bleibt auch ohne Befruchtung dauerhaft bestehen.", korrekt: false },
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
      "Richtig sind 1–4. Ohne Befruchtung bildet sich der Gelbkörper nach etwa 14 Tagen zurück (Luteolyse; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 063 Neurulation (schwer) ───
  {
    id: "bio-typk-new3-063",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Neurulation sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Neuralplatte entsteht aus dem Ektoderm durch Induktion der Chorda dorsalis.", korrekt: true },
      { nr: 2, text: "Die Neuralrinne faltet sich zum Neuralrohr, aus dem Gehirn und Rückenmark entstehen.", korrekt: true },
      { nr: 3, text: "Die Neuralleistenzellen wandern aus und bilden u. a. periphere Nerven und Melanozyten.", korrekt: true },
      { nr: 4, text: "Folsäuremangel erhöht das Risiko für Neuralrohrdefekte (z. B. Spina bifida).", korrekt: true },
      { nr: 5, text: "Die Neurulation findet im dritten Trimester der Schwangerschaft statt.", korrekt: false },
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
      "Richtig sind 1–4. Die Neurulation findet in der 3.–4. Entwicklungswoche statt (1. Trimester; 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 064 Hormonelle Steuerung der Fortpflanzung (mittel) ───
  {
    id: "bio-typk-new3-064",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur hormonellen Steuerung der Fortpflanzung sind richtig?",
    aussagen: [
      { nr: 1, text: "GnRH aus dem Hypothalamus stimuliert die Freisetzung von FSH und LH aus der Adenohypophyse.", korrekt: true },
      { nr: 2, text: "FSH fördert die Follikelreifung bei der Frau und die Spermatogenese beim Mann.", korrekt: true },
      { nr: 3, text: "LH löst die Ovulation bei der Frau aus und stimuliert die Testosteronproduktion beim Mann.", korrekt: true },
      { nr: 4, text: "Östrogen und Progesteron hemmen im negativen Feedback die GnRH-Ausschüttung.", korrekt: true },
      { nr: 5, text: "FSH und LH werden im Hypothalamus produziert.", korrekt: false },
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
      "Richtig sind 1–4. FSH und LH werden in der Adenohypophyse (Hypophysenvorderlappen) produziert, nicht im Hypothalamus (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 065 Zwillinge (leicht) ───
  {
    id: "bio-typk-new3-065",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu Zwillingen sind richtig?",
    aussagen: [
      { nr: 1, text: "Eineiige (monozygote) Zwillinge entstehen aus einer befruchteten Eizelle, die sich teilt.", korrekt: true },
      { nr: 2, text: "Eineiige Zwillinge sind genetisch identisch.", korrekt: true },
      { nr: 3, text: "Zweieiige (dizygote) Zwillinge entstehen aus zwei verschiedenen Eizellen, die von zwei Spermien befruchtet werden.", korrekt: true },
      { nr: 4, text: "Zweieiige Zwillinge sind genetisch so verschieden wie normale Geschwister.", korrekt: true },
      { nr: 5, text: "Eineiige Zwillinge haben immer getrennte Plazenten.", korrekt: false },
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
      "Richtig sind 1–4. Eineiige Zwillinge können je nach Zeitpunkt der Teilung eine gemeinsame Plazenta haben (monochorionisch; 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 066–075: SINNESORGANE ────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 066 Auge – Aufbau (leicht) ───
  {
    id: "bio-typk-new3-066",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zum Aufbau des Auges sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Hornhaut (Cornea) ist der wichtigste lichtbrechende Anteil des Auges.", korrekt: true },
      { nr: 2, text: "Die Linse kann ihre Brechkraft durch Akkommodation verändern.", korrekt: true },
      { nr: 3, text: "Die Iris reguliert den Lichteinfall durch Veränderung der Pupillenweite.", korrekt: true },
      { nr: 4, text: "Die Netzhaut (Retina) enthält die lichtempfindlichen Photorezeptoren.", korrekt: true },
      { nr: 5, text: "Der Glaskörper liegt vor der Linse.", korrekt: false },
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
      "Richtig sind 1–4. Der Glaskörper liegt hinter der Linse und füllt den hinteren Augenabschnitt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 067 Photorezeptoren (mittel) ───
  {
    id: "bio-typk-new3-067",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zu Photorezeptoren sind richtig?",
    aussagen: [
      { nr: 1, text: "Stäbchen sind für das Sehen bei geringer Lichtintensität (skotopisches Sehen) zuständig.", korrekt: true },
      { nr: 2, text: "Zapfen ermöglichen das Farbsehen (photopisches Sehen) und sind in drei Typen vorhanden (S, M, L).", korrekt: true },
      { nr: 3, text: "Das Sehpigment der Stäbchen ist Rhodopsin (Sehpurpur).", korrekt: true },
      { nr: 4, text: "Die Fovea centralis enthält die höchste Dichte an Zapfen.", korrekt: true },
      { nr: 5, text: "Stäbchen sind am schärfsten Sehen (Fovea) beteiligt.", korrekt: false },
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
      "Richtig sind 1–4. In der Fovea befinden sich fast ausschließlich Zapfen; Stäbchen dominieren in der Peripherie (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 068 Ohr – Aufbau (leicht) ───
  {
    id: "bio-typk-new3-068",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-04",
    stamm: "Welche der folgenden Aussagen zum Aufbau des Ohres sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Außenohr besteht aus Ohrmuschel und äußerem Gehörgang.", korrekt: true },
      { nr: 2, text: "Das Mittelohr enthält die Gehörknöchelchen Hammer, Amboss und Steigbügel.", korrekt: true },
      { nr: 3, text: "Die Gehörknöchelchen übertragen und verstärken den Schall vom Trommelfell zum ovalen Fenster.", korrekt: true },
      { nr: 4, text: "Das Innenohr enthält die Cochlea (Hören) und das Vestibularorgan (Gleichgewicht).", korrekt: true },
      { nr: 5, text: "Das Trommelfell liegt zwischen Mittelohr und Innenohr.", korrekt: false },
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
      "Richtig sind 1–4. Das Trommelfell trennt Außenohr und Mittelohr (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 069 Cochlea und Hören (mittel) ───
  {
    id: "bio-typk-new3-069",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-04",
    stamm: "Welche der folgenden Aussagen zur Cochlea und zum Hören sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Cochlea ist schneckenförmig aufgebaut und mit Flüssigkeit gefüllt.", korrekt: true },
      { nr: 2, text: "Die Basilarmembran schwingt frequenzabhängig (Tonotopie): hohe Frequenzen an der Basis, tiefe an der Spitze.", korrekt: true },
      { nr: 3, text: "Das Corti-Organ auf der Basilarmembran enthält die Haarzellen als Rezeptoren.", korrekt: true },
      { nr: 4, text: "Innere Haarzellen sind die eigentlichen Sinneszellen, die Signale an den Hörnerv senden.", korrekt: true },
      { nr: 5, text: "Die Schallwellen werden in der Cochlea ohne Flüssigkeit direkt an das Gehirn geleitet.", korrekt: false },
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
      "Richtig sind 1–4. In der Cochlea werden Schallwellen über die Flüssigkeit (Perilymphe/Endolymphe) weitergeleitet und von Haarzellen in Nervensignale umgewandelt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 070 Gleichgewichtsorgan (mittel) ───
  {
    id: "bio-typk-new3-070",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-04",
    stamm: "Welche der folgenden Aussagen zum Gleichgewichtsorgan (Vestibularorgan) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die drei Bogengänge registrieren Drehbeschleunigungen des Kopfes.", korrekt: true },
      { nr: 2, text: "Utriculus und Sacculus registrieren lineare Beschleunigungen und die Lage des Kopfes zur Schwerkraft.", korrekt: true },
      { nr: 3, text: "In den Bogengängen befinden sich Haarzellen in der Cupula, die durch Endolymphe-Strömung abgelenkt werden.", korrekt: true },
      { nr: 4, text: "In Utriculus und Sacculus befinden sich Otolithen (Ohrsteinchen) auf der Macula.", korrekt: true },
      { nr: 5, text: "Das Gleichgewichtsorgan liegt im Außenohr.", korrekt: false },
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
      "Richtig sind 1–4. Das Gleichgewichtsorgan liegt im Innenohr (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 071 Akkommodation und Fehlsichtigkeit (mittel) ───
  {
    id: "bio-typk-new3-071",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zu Akkommodation und Fehlsichtigkeit sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei Nahakkommodation kontrahiert sich der Ziliarmuskel und die Linse wird stärker gekrümmt.", korrekt: true },
      { nr: 2, text: "Bei Myopie (Kurzsichtigkeit) ist der Augapfel zu lang oder die Brechkraft zu hoch.", korrekt: true },
      { nr: 3, text: "Bei Hyperopie (Weitsichtigkeit) ist der Augapfel zu kurz oder die Brechkraft zu gering.", korrekt: true },
      { nr: 4, text: "Presbyopie (Altersweitsichtigkeit) entsteht durch nachlassende Elastizität der Linse.", korrekt: true },
      { nr: 5, text: "Myopie wird mit Sammellinsen korrigiert.", korrekt: false },
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
      "Richtig sind 1–4. Myopie wird mit Zerstreuungslinsen (Konkavlinsen) korrigiert; Sammellinsen korrigieren Hyperopie (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 072 Blinder Fleck und Sehbahn (schwer) ───
  {
    id: "bio-typk-new3-072",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zum blinden Fleck und zur Sehbahn sind richtig?",
    aussagen: [
      { nr: 1, text: "Der blinde Fleck ist die Stelle, an der der Sehnerv die Retina verlässt (Papille).", korrekt: true },
      { nr: 2, text: "Am blinden Fleck befinden sich keine Photorezeptoren.", korrekt: true },
      { nr: 3, text: "Die nasalen Fasern des Sehnervs kreuzen im Chiasma opticum auf die Gegenseite.", korrekt: true },
      { nr: 4, text: "Die primäre Sehrinde liegt im Okzipitallappen.", korrekt: true },
      { nr: 5, text: "Alle Fasern des Sehnervs kreuzen im Chiasma opticum.", korrekt: false },
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
      "Richtig sind 1–4. Nur die nasalen Fasern kreuzen; die temporalen Fasern bleiben ipsilateral (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 073 Tastsinn und Hautrezeptoren (leicht) ───
  {
    id: "bio-typk-new3-073",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zu Hautrezeptoren und Tastsinn sind richtig?",
    aussagen: [
      { nr: 1, text: "Meissner-Körperchen reagieren auf leichte Berührung (Vibration niedriger Frequenz).", korrekt: true },
      { nr: 2, text: "Pacini-Körperchen reagieren auf Druck und Vibration hoher Frequenz (tiefe Schichten).", korrekt: true },
      { nr: 3, text: "Merkel-Zellen registrieren anhaltenden Druck und Textur.", korrekt: true },
      { nr: 4, text: "Freie Nervenendigungen vermitteln Schmerz- und Temperaturempfindungen.", korrekt: true },
      { nr: 5, text: "Alle Hautrezeptoren liegen ausschließlich in der Epidermis.", korrekt: false },
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
      "Richtig sind 1–4. Viele Rezeptoren (z. B. Pacini-Körperchen) liegen in der Dermis oder Subkutis, nicht nur in der Epidermis (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 074 Geschmack und Geruch (mittel) ───
  {
    id: "bio-typk-new3-074",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zu Geschmacks- und Geruchssinn sind richtig?",
    aussagen: [
      { nr: 1, text: "Es gibt fünf Grundgeschmacksqualitäten: süß, sauer, salzig, bitter und umami.", korrekt: true },
      { nr: 2, text: "Geschmacksknospen befinden sich hauptsächlich auf den Zungenpapillen.", korrekt: true },
      { nr: 3, text: "Riechzellen in der Riechschleimhaut sind bipolare Neurone mit Zilien.", korrekt: true },
      { nr: 4, text: "Der Geruchssinn wird über den N. olfactorius (I. Hirnnerv) zum Bulbus olfactorius geleitet.", korrekt: true },
      { nr: 5, text: "Geschmack und Geruch werden über denselben Hirnnerv geleitet.", korrekt: false },
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
      "Richtig sind 1–4. Geschmack wird über N. facialis (VII), N. glossopharyngeus (IX) und N. vagus (X) geleitet; Geruch über N. olfactorius (I) (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 075 Signaltransduktion der Sinne (schwer) ───
  {
    id: "bio-typk-new3-075",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-9-01",
    stamm: "Welche der folgenden Aussagen zur Signaltransduktion bei Sinnesorganen sind richtig?",
    aussagen: [
      { nr: 1, text: "Sinneszellen wandeln physikalische oder chemische Reize in elektrische Signale um (Transduktion).", korrekt: true },
      { nr: 2, text: "Ein Rezeptorpotenzial entsteht durch Öffnung oder Schließung von Ionenkanälen.", korrekt: true },
      { nr: 3, text: "Die Intensität eines Reizes wird durch die Frequenz der Aktionspotenziale codiert.", korrekt: true },
      { nr: 4, text: "Adaptation bedeutet, dass die Empfindlichkeit eines Rezeptors bei anhaltendem Reiz abnimmt.", korrekt: true },
      { nr: 5, text: "Alle Sinnesrezeptoren adaptieren gleich schnell.", korrekt: false },
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
      "Richtig sind 1–4. Verschiedene Rezeptoren adaptieren unterschiedlich schnell: Pacini-Körperchen sehr schnell, Schmerzrezeptoren sehr langsam (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
