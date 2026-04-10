/**
 * Chemie Typ K Neu 5 — 75 Kombinationsaufgaben (IDs ch-typk-new5-001 bis -075).
 * Schwerpunkte: Nomenklatur, Isomerie, Spektroskopie, Säure-Base Vertiefung,
 *               Chemie des Alltags, Koordinationschemie.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const chemieTypKNew5: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–013: NOMENKLATUR ─────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 IUPAC Grundregeln (leicht) ───
  {
    id: "ch-typk-new5-001",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur IUPAC-Nomenklatur organischer Verbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die längste Kohlenstoffkette bestimmt den Stammnamen.", korrekt: true },
      { nr: 2, text: "Substituenten werden alphabetisch vor den Stammnamen gestellt.", korrekt: true },
      { nr: 3, text: "Die Nummerierung der Kette erfolgt so, dass die Substituenten möglichst niedrige Positionsnummern erhalten.", korrekt: true },
      { nr: 4, text: "Mehrfachbindungen werden durch Endungen wie -en (Doppelbindung) und -in (Dreifachbindung) gekennzeichnet.", korrekt: true },
      { nr: 5, text: "Bei der IUPAC-Nomenklatur hat die funktionelle Gruppe keinen Einfluss auf die Nummerierung.", korrekt: false },
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
      "Richtig sind 1–4. Die höchstrangige funktionelle Gruppe bestimmt die Nummerierungsrichtung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 002 Alkane Nomenklatur (leicht) ───
  {
    id: "ch-typk-new5-002",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur der Alkane sind richtig?",
    aussagen: [
      { nr: 1, text: "Methan, Ethan, Propan, Butan sind die ersten vier Glieder der homologen Reihe.", korrekt: true },
      { nr: 2, text: "Alkane haben die allgemeine Summenformel CₙH₂ₙ₊₂.", korrekt: true },
      { nr: 3, text: "Verzweigte Alkane haben niedrigere Siedepunkte als unverzweigte Isomere gleicher Molmasse.", korrekt: true },
      { nr: 4, text: "Die Endung \"-an\" kennzeichnet gesättigte Kohlenwasserstoffe.", korrekt: true },
      { nr: 5, text: "Cycloalkane haben die gleiche Summenformel wie Alkane gleicher C-Zahl.", korrekt: false },
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
      "Richtig sind 1–4. Cycloalkane haben die Formel CₙH₂ₙ (zwei H weniger als offenkettige Alkane, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 003 Funktionelle Gruppen (leicht) ───
  {
    id: "ch-typk-new5-003",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Zuordnungen von funktionellen Gruppen und Stoffklassen sind richtig?",
    aussagen: [
      { nr: 1, text: "−OH → Alkohole", korrekt: true },
      { nr: 2, text: "−COOH → Carbonsäuren", korrekt: true },
      { nr: 3, text: "−NH₂ → Amine", korrekt: true },
      { nr: 4, text: "−CHO → Aldehyde", korrekt: true },
      { nr: 5, text: "−CO− (Ketogruppe) → Ether", korrekt: false },
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
      "Richtig sind 1–4. Die Ketogruppe (>C=O) kennzeichnet Ketone, nicht Ether (−O−, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 004 Alkohole Nomenklatur (mittel) ───
  {
    id: "ch-typk-new5-004",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur und Einteilung von Alkoholen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Endung \"-ol\" kennzeichnet Alkohole nach IUPAC.", korrekt: true },
      { nr: 2, text: "Primäre Alkohole tragen die OH-Gruppe an einem C-Atom mit höchstens einem weiteren C-Substituenten.", korrekt: true },
      { nr: 3, text: "Tertiäre Alkohole sind schwerer oxidierbar als primäre.", korrekt: true },
      { nr: 4, text: "Ethanol hat den IUPAC-Namen Ethan-1-ol.", korrekt: true },
      { nr: 5, text: "Methanol und Ethanol sind beide gleich gut verträglich für den menschlichen Körper.", korrekt: false },
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
      "Richtig sind 1–4. Methanol ist hochgiftig (Blindheit, Tod); Ethanol ist in kleinen Mengen verträglich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 005 Carbonsäuren Nomenklatur (mittel) ───
  {
    id: "ch-typk-new5-005",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur von Carbonsäuren sind richtig?",
    aussagen: [
      { nr: 1, text: "Die IUPAC-Endung für Carbonsäuren ist \"-säure\" (z. B. Ethansäure = Essigsäure).", korrekt: true },
      { nr: 2, text: "Ameisensäure (Methansäure) ist die einfachste Carbonsäure.", korrekt: true },
      { nr: 3, text: "Benzoesäure leitet sich vom Benzolring ab.", korrekt: true },
      { nr: 4, text: "Dicarbonsäuren (z. B. Oxalsäure, Malonsäure) besitzen zwei COOH-Gruppen.", korrekt: true },
      { nr: 5, text: "Carbonsäuren sind schwächere Säuren als Alkohole.", korrekt: false },
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
      "Richtig sind 1–4. Carbonsäuren sind deutlich stärkere Säuren als Alkohole (stabilisiertes Carboxylat-Anion, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 006 Ester und Ether (mittel) ───
  {
    id: "ch-typk-new5-006",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Estern und Ethern sind richtig?",
    aussagen: [
      { nr: 1, text: "Ester entstehen durch Kondensation von Carbonsäure und Alkohol unter Wasserabspaltung.", korrekt: true },
      { nr: 2, text: "Fette sind Ester aus Glycerin und Fettsäuren.", korrekt: true },
      { nr: 3, text: "Ether haben die allgemeine Struktur R−O−R'.", korrekt: true },
      { nr: 4, text: "Diethylether war eines der ersten Narkosemittel.", korrekt: true },
      { nr: 5, text: "Ester sind nicht hydrolysierbar.", korrekt: false },
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
      "Richtig sind 1–4. Ester können durch saure oder basische Hydrolyse (Verseifung) gespalten werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 007 Anorganische Nomenklatur (mittel) ───
  {
    id: "ch-typk-new5-007",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur anorganischen Nomenklatur sind richtig?",
    aussagen: [
      { nr: 1, text: "NaCl heißt Natriumchlorid — das Kation wird zuerst genannt.", korrekt: true },
      { nr: 2, text: "Bei Oxiden gibt das Präfix die Anzahl der Atome an (z. B. Distickstoffpentoxid = N₂O₅).", korrekt: true },
      { nr: 3, text: "Bei Übergangsmetallen wird die Oxidationsstufe in römischen Ziffern angegeben (z. B. Eisen(III)-chlorid).", korrekt: true },
      { nr: 4, text: "Sulfat (SO₄²⁻), Nitrat (NO₃⁻) und Phosphat (PO₄³⁻) sind wichtige Oxoanionen.", korrekt: true },
      { nr: 5, text: "In der anorganischen Nomenklatur wird das Anion immer zuerst genannt.", korrekt: false },
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
      "Richtig sind 1–4. Das Kation wird zuerst genannt, dann das Anion (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 008 Amine Nomenklatur (mittel) ───
  {
    id: "ch-typk-new5-008",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur von Aminen sind richtig?",
    aussagen: [
      { nr: 1, text: "Primäre Amine haben die Struktur R−NH₂.", korrekt: true },
      { nr: 2, text: "Sekundäre Amine haben zwei organische Reste am Stickstoff (R₂NH).", korrekt: true },
      { nr: 3, text: "Tertiäre Amine (R₃N) können als Basen reagieren, da das freie Elektronenpaar am N Protonen aufnehmen kann.", korrekt: true },
      { nr: 4, text: "Anilin (Aminobenzol) ist das einfachste aromatische Amin.", korrekt: true },
      { nr: 5, text: "Amine sind grundsätzlich stärkere Säuren als Carbonsäuren.", korrekt: false },
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
      "Richtig sind 1–4. Amine sind Basen, nicht Säuren — sie nehmen Protonen auf (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 009 Prioritätsregeln (schwer) ───
  {
    id: "ch-typk-new5-009",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Prioritätsregeln bei der IUPAC-Nomenklatur sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Rangfolge der funktionellen Gruppen bestimmt den Suffix: Carbonsäure > Aldehyd > Keton > Alkohol > Amin.", korrekt: true },
      { nr: 2, text: "Höherrangige Gruppen bestimmen die Nummerierung und den Suffix.", korrekt: true },
      { nr: 3, text: "Niederrangige Gruppen werden als Präfixe (Substituenten) angegeben.", korrekt: true },
      { nr: 4, text: "Halogensubstituenten werden immer als Präfix genannt (Fluor-, Chlor-, Brom-, Iod-).", korrekt: true },
      { nr: 5, text: "Alle funktionellen Gruppen sind gleichrangig in der IUPAC-Nomenklatur.", korrekt: false },
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
      "Richtig sind 1–4. Es gibt eine klar definierte Rangfolge der funktionellen Gruppen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 010 Aromaten Nomenklatur (mittel) ───
  {
    id: "ch-typk-new5-010",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur aromatischer Verbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Toluol ist der Trivialname für Methylbenzol.", korrekt: true },
      { nr: 2, text: "Ortho (o-), Meta (m-) und Para (p-) beschreiben die relative Position zweier Substituenten am Benzolring.", korrekt: true },
      { nr: 3, text: "o- bedeutet 1,2-Stellung, m- bedeutet 1,3-Stellung, p- bedeutet 1,4-Stellung.", korrekt: true },
      { nr: 4, text: "Phenol ist Hydroxybenzol.", korrekt: true },
      { nr: 5, text: "Naphthalin besteht aus drei kondensierten Benzolringen.", korrekt: false },
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
      "Richtig sind 1–4. Naphthalin besteht aus zwei kondensierten Benzolringen (Anthracen hat drei, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 011 Trivial- vs. IUPAC-Namen (leicht) ───
  {
    id: "ch-typk-new5-011",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Zuordnungen Trivialname → IUPAC-Name sind richtig?",
    aussagen: [
      { nr: 1, text: "Essigsäure → Ethansäure", korrekt: true },
      { nr: 2, text: "Ameisensäure → Methansäure", korrekt: true },
      { nr: 3, text: "Aceton → Propan-2-on", korrekt: true },
      { nr: 4, text: "Formaldehyd → Methanal", korrekt: true },
      { nr: 5, text: "Glycerin → Butan-1,2,3-triol", korrekt: false },
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
      "Richtig sind 1–4. Glycerin ist Propan-1,2,3-triol (3 C-Atome, nicht 4, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 012 Heterocyclen (schwer) ───
  {
    id: "ch-typk-new5-012",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Heterocyclen sind richtig?",
    aussagen: [
      { nr: 1, text: "Heterocyclen enthalten neben Kohlenstoff mindestens ein weiteres Atom (z. B. N, O, S) im Ring.", korrekt: true },
      { nr: 2, text: "Pyridin ist ein Sechsring mit einem Stickstoff (ähnlich Benzol).", korrekt: true },
      { nr: 3, text: "Purin und Pyrimidin sind Grundgerüste der DNA-Basen.", korrekt: true },
      { nr: 4, text: "Furan ist ein Fünfring mit einem Sauerstoff.", korrekt: true },
      { nr: 5, text: "Heterocyclen kommen in der Natur nicht vor.", korrekt: false },
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
      "Richtig sind 1–4. Heterocyclen sind extrem häufig in der Natur (DNA-Basen, Aminosäuren wie Histidin, Tryptophan, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 013 Oxosäuren (schwer) ───
  {
    id: "ch-typk-new5-013",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Oxosäuren und ihren Salzen sind richtig?",
    aussagen: [
      { nr: 1, text: "Schwefelsäure (H₂SO₄) ist eine zweiprotonige starke Säure.", korrekt: true },
      { nr: 2, text: "Phosphorsäure (H₃PO₄) ist dreiprotonig und bildet Phosphate, Hydrogenphosphate und Dihydrogenphosphate.", korrekt: true },
      { nr: 3, text: "Salpetersäure (HNO₃) ist eine einprotonige starke Säure.", korrekt: true },
      { nr: 4, text: "Kohlensäure (H₂CO₃) ist eine schwache Säure, die in CO₂ und H₂O zerfällt.", korrekt: true },
      { nr: 5, text: "Schweflige Säure (H₂SO₃) hat die gleiche Oxidationsstufe des Schwefels wie Schwefelsäure.", korrekt: false },
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
      "Richtig sind 1–4. Schwefel in H₂SO₃ hat Oxidationsstufe +IV, in H₂SO₄ hat er +VI (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 014–025: ISOMERIE ────────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 014 Isomerie Übersicht (leicht) ───
  {
    id: "ch-typk-new5-014",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Isomerie-Arten sind richtig?",
    aussagen: [
      { nr: 1, text: "Konstitutionsisomere haben die gleiche Summenformel, aber unterschiedliche Verknüpfung der Atome.", korrekt: true },
      { nr: 2, text: "Stereoisomere haben die gleiche Konstitution, aber unterschiedliche räumliche Anordnung.", korrekt: true },
      { nr: 3, text: "Enantiomere sind Spiegelbilder, die nicht zur Deckung gebracht werden können.", korrekt: true },
      { nr: 4, text: "Diastereomere sind Stereoisomere, die keine Enantiomere sind.", korrekt: true },
      { nr: 5, text: "Konstitutionsisomere haben immer die gleichen physikalischen Eigenschaften.", korrekt: false },
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
      "Richtig sind 1–4. Konstitutionsisomere haben in der Regel unterschiedliche physikalische Eigenschaften (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 015 E/Z-Isomerie (mittel) ───
  {
    id: "ch-typk-new5-015",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur E/Z-Isomerie sind richtig?",
    aussagen: [
      { nr: 1, text: "E/Z-Isomerie tritt bei Doppelbindungen auf, wenn an jedem C der Doppelbindung zwei verschiedene Substituenten sitzen.", korrekt: true },
      { nr: 2, text: "Die Z-Konfiguration bedeutet, dass die Substituenten höherer Priorität auf der gleichen Seite liegen.", korrekt: true },
      { nr: 3, text: "Die Priorität wird nach den CIP-Regeln (Cahn-Ingold-Prelog) bestimmt.", korrekt: true },
      { nr: 4, text: "Höhere Ordnungszahl bedeutet höhere Priorität nach CIP.", korrekt: true },
      { nr: 5, text: "E/Z-Isomere können durch Rotation um die Doppelbindung ineinander umgewandelt werden.", korrekt: false },
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
      "Richtig sind 1–4. Doppelbindungen sind nicht frei drehbar; die Umwandlung erfordert Bindungsbruch (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 016 R/S-Nomenklatur (schwer) ───
  {
    id: "ch-typk-new5-016",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur R/S-Konfiguration sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Stereozentrum (chirales Zentrum) ist ein C-Atom mit vier verschiedenen Substituenten.", korrekt: true },
      { nr: 2, text: "Die CIP-Regeln ordnen den Substituenten Prioritäten nach Ordnungszahl zu.", korrekt: true },
      { nr: 3, text: "Bei R-Konfiguration nimmt die Priorität im Uhrzeigersinn ab (mit niedrigster Priorität nach hinten).", korrekt: true },
      { nr: 4, text: "Bei S-Konfiguration nimmt die Priorität gegen den Uhrzeigersinn ab.", korrekt: true },
      { nr: 5, text: "R- und S-Konfiguration sagen direkt die Drehrichtung des polarisierten Lichts voraus.", korrekt: false },
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
      "Richtig sind 1–4. R/S beschreibt die Konfiguration, aber (+)/(−) bzw. d/l die Drehrichtung — kein direkter Zusammenhang (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 017 Konformationsisomerie (mittel) ───
  {
    id: "ch-typk-new5-017",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Konformationsisomerie sind richtig?",
    aussagen: [
      { nr: 1, text: "Konformere entstehen durch Rotation um Einfachbindungen.", korrekt: true },
      { nr: 2, text: "Die gestaffelte Konformation von Ethan ist energetisch günstiger als die ekliptische.", korrekt: true },
      { nr: 3, text: "Newman-Projektionen zeigen die räumliche Anordnung bei Blick entlang einer C-C-Bindung.", korrekt: true },
      { nr: 4, text: "Bei Cyclohexan ist die Sesselkonformation die stabilste.", korrekt: true },
      { nr: 5, text: "Konformere können nicht ineinander überführt werden.", korrekt: false },
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
      "Richtig sind 1–4. Konformere gehen durch Rotation um Einfachbindungen leicht ineinander über (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 018 Enantiomere Eigenschaften (mittel) ───
  {
    id: "ch-typk-new5-018",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Enantiomeren sind richtig?",
    aussagen: [
      { nr: 1, text: "Enantiomere haben identische Schmelz- und Siedepunkte.", korrekt: true },
      { nr: 2, text: "Enantiomere drehen die Ebene des polarisierten Lichts um gleiche Beträge, aber in entgegengesetzte Richtungen.", korrekt: true },
      { nr: 3, text: "Ein racemisches Gemisch (1:1-Mischung) ist optisch inaktiv.", korrekt: true },
      { nr: 4, text: "Enantiomere können in chiraler Umgebung (z. B. Enzyme) unterschiedlich reagieren.", korrekt: true },
      { nr: 5, text: "Enantiomere haben unterschiedliche Löslichkeiten in achiralen Lösungsmitteln.", korrekt: false },
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
      "Richtig sind 1–4. In achiralen Lösungsmitteln haben Enantiomere identische Löslichkeiten (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 019 Chiralität in der Biologie (mittel) ───
  {
    id: "ch-typk-new5-019",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Chiralität in biologischen Systemen sind richtig?",
    aussagen: [
      { nr: 1, text: "Natürliche Aminosäuren liegen fast ausschließlich als L-Enantiomere vor.", korrekt: true },
      { nr: 2, text: "Natürliche Zucker (z. B. Glucose) liegen überwiegend als D-Enantiomere vor.", korrekt: true },
      { nr: 3, text: "Enzyme sind chiral und können Enantiomere unterschiedlich erkennen.", korrekt: true },
      { nr: 4, text: "Das Thalidomid-Beispiel zeigt, dass Enantiomere unterschiedliche Wirkungen haben können.", korrekt: true },
      { nr: 5, text: "Chiralität spielt in der Pharmakologie keine Rolle.", korrekt: false },
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
      "Richtig sind 1–4. Chiralität ist in der Pharmakologie extrem wichtig (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 020 Fischer-Projektion (schwer) ───
  {
    id: "ch-typk-new5-020",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Fischer-Projektion sind richtig?",
    aussagen: [
      { nr: 1, text: "In der Fischer-Projektion zeigen horizontale Linien Substituenten, die zum Betrachter zeigen.", korrekt: true },
      { nr: 2, text: "Vertikale Linien zeigen Substituenten, die vom Betrachter weg zeigen.", korrekt: true },
      { nr: 3, text: "Die oxidierte Funktionalität (z. B. CHO, COOH) steht konventionsgemäß oben.", korrekt: true },
      { nr: 4, text: "D/L-Nomenklatur bezieht sich auf die Konfiguration am untersten Stereozentrum relativ zu D-Glycerinaldehyd.", korrekt: true },
      { nr: 5, text: "Die Fischer-Projektion darf beliebig im Raum gedreht werden, ohne die Konfiguration zu ändern.", korrekt: false },
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
      "Richtig sind 1–4. Drehen der Fischer-Projektion um 90° verändert die Konfiguration (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 021 Meso-Verbindungen (schwer) ───
  {
    id: "ch-typk-new5-021",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Meso-Verbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine Meso-Verbindung besitzt Stereozentren, ist aber aufgrund einer internen Spiegelebene achiral.", korrekt: true },
      { nr: 2, text: "Meso-Weinsäure hat zwei Stereozentren, ist aber optisch inaktiv.", korrekt: true },
      { nr: 3, text: "Die Formel 2ⁿ gibt die maximale Anzahl der Stereoisomere bei n Stereozentren an.", korrekt: true },
      { nr: 4, text: "Meso-Verbindungen reduzieren die tatsächliche Zahl der Stereoisomere gegenüber 2ⁿ.", korrekt: true },
      { nr: 5, text: "Jede Verbindung mit zwei Stereozentren ist automatisch chiral.", korrekt: false },
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
      "Richtig sind 1–4. Meso-Verbindungen zeigen, dass Stereozentren nicht automatisch Chiralität bedeuten (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 022 Konstitutionsisomere Beispiele (leicht) ───
  {
    id: "ch-typk-new5-022",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Konstitutionsisomeren sind richtig?",
    aussagen: [
      { nr: 1, text: "n-Butan und Isobutan (2-Methylpropan) sind Konstitutionsisomere mit der Formel C₄H₁₀.", korrekt: true },
      { nr: 2, text: "Ethanol (CH₃CH₂OH) und Dimethylether (CH₃OCH₃) sind Konstitutionsisomere mit der Formel C₂H₆O.", korrekt: true },
      { nr: 3, text: "Konstitutionsisomere können verschiedene funktionelle Gruppen besitzen.", korrekt: true },
      { nr: 4, text: "Die Anzahl der Konstitutionsisomere steigt mit der Anzahl der C-Atome stark an.", korrekt: true },
      { nr: 5, text: "Konstitutionsisomere haben immer den gleichen Siedepunkt.", korrekt: false },
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
      "Richtig sind 1–4. Konstitutionsisomere haben unterschiedliche physikalische Eigenschaften, inkl. Siedepunkt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 023 Cis/Trans bei Cycloalkanen (mittel) ───
  {
    id: "ch-typk-new5-023",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur cis/trans-Isomerie bei Cycloalkanen sind richtig?",
    aussagen: [
      { nr: 1, text: "An einem Cycloalkan-Ring können Substituenten cis (gleiche Seite) oder trans (gegenüberliegende Seite) stehen.", korrekt: true },
      { nr: 2, text: "cis-1,2-Dimethylcyclohexan und trans-1,2-Dimethylcyclohexan sind Diastereomere.", korrekt: true },
      { nr: 3, text: "Die eingeschränkte Drehbarkeit am Ring verhindert die freie Umwandlung von cis zu trans.", korrekt: true },
      { nr: 4, text: "Trans-Substituenten in 1,2-Stellung bevorzugen am Cyclohexan die diäquatoriale Anordnung.", korrekt: true },
      { nr: 5, text: "Cis/trans-Isomerie an Cycloalkanen erfordert eine Doppelbindung im Ring.", korrekt: false },
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
      "Richtig sind 1–4. cis/trans-Isomerie an Cycloalkanen ergibt sich durch die eingeschränkte Drehbarkeit am Ring, keine Doppelbindung nötig (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 024 Optische Aktivität (mittel) ───
  {
    id: "ch-typk-new5-024",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur optischen Aktivität sind richtig?",
    aussagen: [
      { nr: 1, text: "Optisch aktive Substanzen drehen die Schwingungsebene von linear polarisiertem Licht.", korrekt: true },
      { nr: 2, text: "Ein Polarimeter misst den Drehwinkel α.", korrekt: true },
      { nr: 3, text: "(+) bedeutet Rechtsdrehung, (−) bedeutet Linksdrehung.", korrekt: true },
      { nr: 4, text: "Der spezifische Drehwert [α] ist eine charakteristische Stoffkonstante.", korrekt: true },
      { nr: 5, text: "Alle chiralen Verbindungen drehen das Licht nach rechts.", korrekt: false },
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
      "Richtig sind 1–4. Die Drehrichtung hängt von der spezifischen Verbindung ab und kann nicht aus R/S vorhergesagt werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 025 Tautomerie (schwer) ───
  {
    id: "ch-typk-new5-025",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Tautomerie sind richtig?",
    aussagen: [
      { nr: 1, text: "Tautomere sind Konstitutionsisomere, die durch Protonenwanderung schnell ineinander übergehen.", korrekt: true },
      { nr: 2, text: "Die Keto-Enol-Tautomerie ist das bekannteste Beispiel.", korrekt: true },
      { nr: 3, text: "In der Keto-Form liegt ein C=O vor, in der Enol-Form ein C=C mit OH.", korrekt: true },
      { nr: 4, text: "Die DNA-Basen zeigen Tautomerie, die bei der Basenpaarung eine Rolle spielt.", korrekt: true },
      { nr: 5, text: "Tautomere können nie gleichzeitig in Lösung vorliegen.", korrekt: false },
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
      "Richtig sind 1–4. Tautomere stehen in Lösung im Gleichgewicht und liegen somit gleichzeitig vor (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 026–037: SPEKTROSKOPIE ───────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 026 Elektromagnetisches Spektrum (leicht) ───
  {
    id: "ch-typk-new5-026",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum elektromagnetischen Spektrum und Spektroskopie sind richtig?",
    aussagen: [
      { nr: 1, text: "UV-Vis-Spektroskopie nutzt ultraviolettes und sichtbares Licht.", korrekt: true },
      { nr: 2, text: "IR-Spektroskopie nutzt Infrarotstrahlung und zeigt Molekülschwingungen.", korrekt: true },
      { nr: 3, text: "NMR-Spektroskopie nutzt Radiowellen und ein starkes Magnetfeld.", korrekt: true },
      { nr: 4, text: "Die Energie der Strahlung steigt mit zunehmender Frequenz (E = hf).", korrekt: true },
      { nr: 5, text: "Röntgenstrahlung hat eine niedrigere Energie als sichtbares Licht.", korrekt: false },
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
      "Richtig sind 1–4. Röntgenstrahlung hat deutlich höhere Energie als sichtbares Licht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 027 IR-Spektroskopie Grundlagen (mittel) ───
  {
    id: "ch-typk-new5-027",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur IR-Spektroskopie sind richtig?",
    aussagen: [
      { nr: 1, text: "IR-Spektroskopie misst die Absorption von Infrarotstrahlung durch Molekülschwingungen.", korrekt: true },
      { nr: 2, text: "Nur Schwingungen, die das Dipolmoment ändern, sind IR-aktiv.", korrekt: true },
      { nr: 3, text: "Die O-H-Valenzschwingung liegt typischerweise bei 3200–3600 cm⁻¹ (breit).", korrekt: true },
      { nr: 4, text: "Die C=O-Valenzschwingung zeigt eine starke Absorption bei ca. 1700 cm⁻¹.", korrekt: true },
      { nr: 5, text: "Symmetrische Moleküle wie N₂ und O₂ zeigen starke IR-Absorption.", korrekt: false },
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
      "Richtig sind 1–4. Homonukleare zweiatomige Moleküle (N₂, O₂) haben kein Dipolmoment und sind IR-inaktiv (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 028 IR charakteristische Banden (mittel) ───
  {
    id: "ch-typk-new5-028",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Zuordnungen von IR-Absorptionsbanden zu funktionellen Gruppen sind richtig?",
    aussagen: [
      { nr: 1, text: "Breite Bande bei 2500–3300 cm⁻¹: O-H einer Carbonsäure.", korrekt: true },
      { nr: 2, text: "Scharfe Bande bei ca. 2100–2260 cm⁻¹: C≡C oder C≡N Dreifachbindung.", korrekt: true },
      { nr: 3, text: "Bande bei ca. 1600–1680 cm⁻¹: C=C Doppelbindung.", korrekt: true },
      { nr: 4, text: "Der Fingerprintbereich (unter 1500 cm⁻¹) ist für jede Verbindung charakteristisch.", korrekt: true },
      { nr: 5, text: "Die N-H-Streckschwingung liegt bei ca. 500 cm⁻¹.", korrekt: false },
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
      "Richtig sind 1–4. Die N-H-Streckschwingung liegt bei ca. 3300–3500 cm⁻¹ (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 029 NMR Grundprinzip (schwer) ───
  {
    id: "ch-typk-new5-029",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Grundprinzip der NMR-Spektroskopie sind richtig?",
    aussagen: [
      { nr: 1, text: "NMR basiert auf der Wechselwirkung von Kernspins mit einem äußeren Magnetfeld.", korrekt: true },
      { nr: 2, text: "¹H und ¹³C sind die wichtigsten Kerne für organische NMR-Spektroskopie.", korrekt: true },
      { nr: 3, text: "Die chemische Verschiebung δ (in ppm) gibt die Resonanzfrequenz relativ zu einem Standard an.", korrekt: true },
      { nr: 4, text: "TMS (Tetramethylsilan) dient als interner Standard mit δ = 0 ppm.", korrekt: true },
      { nr: 5, text: "Alle Atomkerne sind NMR-aktiv.", korrekt: false },
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
      "Richtig sind 1–4. Nur Kerne mit Kernspin ≠ 0 sind NMR-aktiv (z. B. ¹²C und ¹⁶O sind NMR-inaktiv, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 030 ¹H-NMR Interpretation (schwer) ───
  {
    id: "ch-typk-new5-030",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur ¹H-NMR-Spektroskopie sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Anzahl der Signale entspricht der Anzahl chemisch nicht-äquivalenter Protonen.", korrekt: true },
      { nr: 2, text: "Die Integrationshöhe eines Signals ist proportional zur Anzahl der Protonen.", korrekt: true },
      { nr: 3, text: "Die Spin-Spin-Kopplung (J-Kopplung) führt zur Aufspaltung der Signale (n+1-Regel).", korrekt: true },
      { nr: 4, text: "Aromatische Protonen erscheinen typischerweise bei δ 6,5–8,5 ppm.", korrekt: true },
      { nr: 5, text: "Alle Protonen in einem Molekül erscheinen bei der gleichen chemischen Verschiebung.", korrekt: false },
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
      "Richtig sind 1–4. Chemisch nicht-äquivalente Protonen erscheinen bei unterschiedlichen Verschiebungen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 031 UV-Vis Spektroskopie (mittel) ───
  {
    id: "ch-typk-new5-031",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur UV-Vis-Spektroskopie sind richtig?",
    aussagen: [
      { nr: 1, text: "UV-Vis misst die Absorption von UV- und sichtbarem Licht durch Elektronenübergänge.", korrekt: true },
      { nr: 2, text: "Konjugierte π-Systeme absorbieren bei längeren Wellenlängen als isolierte Doppelbindungen.", korrekt: true },
      { nr: 3, text: "Das Lambert-Beer'sche Gesetz beschreibt den Zusammenhang: A = ε · c · d.", korrekt: true },
      { nr: 4, text: "Die Absorption ist proportional zur Konzentration und Schichtdicke.", korrekt: true },
      { nr: 5, text: "UV-Vis-Spektroskopie kann nur bei festen Proben angewendet werden.", korrekt: false },
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
      "Richtig sind 1–4. UV-Vis wird hauptsächlich an Lösungen gemessen, funktioniert aber auch mit Gasen und Feststoffen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 032 Farbigkeit und Konjugation (leicht) ───
  {
    id: "ch-typk-new5-032",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Farbigkeit organischer Verbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Farbige Verbindungen absorbieren sichtbares Licht; die Komplementärfarbe wird wahrgenommen.", korrekt: true },
      { nr: 2, text: "Chromophore sind die lichtabsorbierenden Molekülteile (z. B. konjugierte π-Systeme).", korrekt: true },
      { nr: 3, text: "Je ausgedehnter das konjugierte π-System, desto langwelliger die Absorption.", korrekt: true },
      { nr: 4, text: "β-Carotin ist orange, weil es ein langes konjugiertes System besitzt.", korrekt: true },
      { nr: 5, text: "Gesättigte Kohlenwasserstoffe sind stark farbig.", korrekt: false },
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
      "Richtig sind 1–4. Gesättigte Kohlenwasserstoffe absorbieren kein sichtbares Licht und sind farblos (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 033 Massenspektrometrie (schwer) ───
  {
    id: "ch-typk-new5-033",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Massenspektrometrie (MS) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die MS misst das Masse-zu-Ladungs-Verhältnis (m/z) von Ionen.", korrekt: true },
      { nr: 2, text: "Der Molekülionenpeak (M⁺) gibt die Molmasse der Verbindung an.", korrekt: true },
      { nr: 3, text: "Fragmentierungsmuster liefern Hinweise auf die Struktur.", korrekt: true },
      { nr: 4, text: "Das Isotopenmuster (z. B. ³⁵Cl/³⁷Cl) ist im Massenspektrum erkennbar.", korrekt: true },
      { nr: 5, text: "Die Massenspektrometrie ist eine spektroskopische Methode, die auf Lichtabsorption basiert.", korrekt: false },
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
      "Richtig sind 1–4. MS basiert nicht auf Lichtabsorption, sondern auf der Trennung geladener Teilchen im elektrischen/magnetischen Feld (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 034 Fluoreszenz (mittel) ───
  {
    id: "ch-typk-new5-034",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Fluoreszenz und Phosphoreszenz sind richtig?",
    aussagen: [
      { nr: 1, text: "Fluoreszenz ist die Emission von Licht nach Absorption von UV- oder sichtbarem Licht.", korrekt: true },
      { nr: 2, text: "Das emittierte Licht hat eine längere Wellenlänge als das absorbierte (Stokes-Shift).", korrekt: true },
      { nr: 3, text: "Fluoreszenz tritt innerhalb von Nanosekunden auf (schnell).", korrekt: true },
      { nr: 4, text: "Phosphoreszenz dauert länger (Millisekunden bis Sekunden), weil ein Triplettzustand beteiligt ist.", korrekt: true },
      { nr: 5, text: "Fluoreszenz und Phosphoreszenz treten bei allen Molekülen gleichermaßen auf.", korrekt: false },
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
      "Richtig sind 1–4. Nur bestimmte Moleküle (Fluorophore) zeigen Fluoreszenz; die meisten Moleküle geben die Energie strahlungslos ab (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 035 Dünnschichtchromatographie (leicht) ───
  {
    id: "ch-typk-new5-035",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Dünnschichtchromatographie (DC) sind richtig?",
    aussagen: [
      { nr: 1, text: "Die DC trennt Substanzen nach unterschiedlicher Adsorption an der stationären Phase.", korrekt: true },
      { nr: 2, text: "Der Rf-Wert (Retentionsfaktor) ist das Verhältnis von Laufstrecke der Substanz zur Laufmittelfront.", korrekt: true },
      { nr: 3, text: "Polare Substanzen haben auf polarer stationärer Phase (z. B. Kieselgel) niedrigere Rf-Werte.", korrekt: true },
      { nr: 4, text: "Die DC eignet sich zur schnellen qualitativen Analyse und Reaktionskontrolle.", korrekt: true },
      { nr: 5, text: "Der Rf-Wert ist immer größer als 1.", korrekt: false },
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
      "Richtig sind 1–4. Der Rf-Wert liegt definitionsgemäß zwischen 0 und 1 (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 036 Lambert-Beer Gesetz (mittel) ───
  {
    id: "ch-typk-new5-036",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Lambert-Beer'schen Gesetz sind richtig?",
    aussagen: [
      { nr: 1, text: "A = ε · c · d, wobei A die Extinktion, ε der molare Extinktionskoeffizient, c die Konzentration und d die Schichtdicke ist.", korrekt: true },
      { nr: 2, text: "Das Gesetz gilt bei verdünnten Lösungen und monochromatischem Licht.", korrekt: true },
      { nr: 3, text: "Die Transmission T ist definiert als I/I₀ und A = −log T.", korrekt: true },
      { nr: 4, text: "Bei doppelter Konzentration verdoppelt sich die Extinktion (bei Gültigkeit des Gesetzes).", korrekt: true },
      { nr: 5, text: "Das Lambert-Beer'sche Gesetz gilt auch bei beliebig hohen Konzentrationen.", korrekt: false },
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
      "Richtig sind 1–4. Bei hohen Konzentrationen treten Abweichungen auf (Assoziation, Streulicht, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 037 Spektroskopie Vergleich (leicht) ───
  {
    id: "ch-typk-new5-037",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Vergleich spektroskopischer Methoden sind richtig?",
    aussagen: [
      { nr: 1, text: "IR zeigt funktionelle Gruppen, NMR die Konnektivität der Atome.", korrekt: true },
      { nr: 2, text: "MS liefert die Molmasse und Fragmentierungsmuster.", korrekt: true },
      { nr: 3, text: "UV-Vis eignet sich besonders für konjugierte Systeme und Konzentrationsbestimmungen.", korrekt: true },
      { nr: 4, text: "Die Kombination mehrerer Methoden ermöglicht eine sichere Strukturaufklärung.", korrekt: true },
      { nr: 5, text: "Eine einzige spektroskopische Methode reicht immer zur vollständigen Strukturaufklärung.", korrekt: false },
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
      "Richtig sind 1–4. In der Regel werden mehrere Methoden kombiniert (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 038–050: SÄURE-BASE VERTIEFUNG ───────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 038 Lewis-Säuren/Basen (mittel) ───
  {
    id: "ch-typk-new5-038",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Lewis-Säure-Base-Konzept sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine Lewis-Säure ist ein Elektronenpaarakzeptor.", korrekt: true },
      { nr: 2, text: "Eine Lewis-Base ist ein Elektronenpaardonor.", korrekt: true },
      { nr: 3, text: "BF₃ ist eine typische Lewis-Säure (leeres p-Orbital am Bor).", korrekt: true },
      { nr: 4, text: "NH₃ ist eine Lewis-Base (freies Elektronenpaar am Stickstoff).", korrekt: true },
      { nr: 5, text: "Das Lewis-Konzept ist enger gefasst als das Brønsted-Konzept.", korrekt: false },
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
      "Richtig sind 1–4. Das Lewis-Konzept ist weiter gefasst als Brønsted (umfasst auch Reaktionen ohne Protonen, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 039 Amphotere Stoffe (leicht) ───
  {
    id: "ch-typk-new5-039",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu amphoteren Stoffen sind richtig?",
    aussagen: [
      { nr: 1, text: "Amphotere Stoffe können sowohl als Säure als auch als Base reagieren.", korrekt: true },
      { nr: 2, text: "Wasser ist amphoter: H₂O + H₂O ⇌ H₃O⁺ + OH⁻.", korrekt: true },
      { nr: 3, text: "Aminosäuren sind amphoter: Sie besitzen eine NH₂- und eine COOH-Gruppe.", korrekt: true },
      { nr: 4, text: "Hydrogencarbonat (HCO₃⁻) kann als Säure oder Base reagieren.", korrekt: true },
      { nr: 5, text: "Salzsäure (HCl) ist ein amphoterer Stoff.", korrekt: false },
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
      "Richtig sind 1–4. HCl ist eine starke Säure und kann in Wasser nicht als Base reagieren (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 040 Mehrprotonige Säuren (mittel) ───
  {
    id: "ch-typk-new5-040",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu mehrprotonigen Säuren sind richtig?",
    aussagen: [
      { nr: 1, text: "Schwefelsäure (H₂SO₄) gibt zwei Protonen ab: pKₛ₁ < 0 (stark), pKₛ₂ ≈ 1,9 (mäßig stark).", korrekt: true },
      { nr: 2, text: "Phosphorsäure (H₃PO₄) ist dreiprotonig mit pKₛ₁ ≈ 2,1, pKₛ₂ ≈ 7,2, pKₛ₃ ≈ 12,4.", korrekt: true },
      { nr: 3, text: "Jede Stufe der Protolyse hat einen eigenen pKₛ-Wert, der typischerweise von Stufe zu Stufe steigt.", korrekt: true },
      { nr: 4, text: "Die Speziesverteilung hängt vom pH ab (Verteilungsdiagramm).", korrekt: true },
      { nr: 5, text: "Bei mehrprotonigen Säuren sind alle Protolysestufen gleich stark.", korrekt: false },
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
      "Richtig sind 1–4. Die Abgabe jedes weiteren Protons ist energetisch ungünstiger (negative Ladung steigt), daher pKₛ steigend (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 041 Puffer (mittel) ───
  {
    id: "ch-typk-new5-041",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Pufferlösungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Puffer besteht aus einer schwachen Säure und ihrem konjugierten Base-Salz (oder umgekehrt).", korrekt: true },
      { nr: 2, text: "Der Puffer-pH lässt sich mit der Henderson-Hasselbalch-Gleichung berechnen: pH = pKₛ + log([A⁻]/[HA]).", korrekt: true },
      { nr: 3, text: "Maximale Pufferkapazität liegt bei pH = pKₛ (gleiche Konzentrationen von Säure und Base).", korrekt: true },
      { nr: 4, text: "Ein Puffer wirkt effektiv im Bereich pH = pKₛ ± 1.", korrekt: true },
      { nr: 5, text: "Ein Puffer kann unbegrenzt Säure oder Base aufnehmen, ohne dass sich der pH ändert.", korrekt: false },
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
      "Richtig sind 1–4. Die Pufferkapazität ist begrenzt; bei Verbrauch einer Komponente versagt der Puffer (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 042 Biologische Puffer (mittel) ───
  {
    id: "ch-typk-new5-042",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu biologischen Puffersystemen sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Bicarbonat-Puffer (H₂CO₃/HCO₃⁻) ist der wichtigste Puffer im Blutplasma.", korrekt: true },
      { nr: 2, text: "Der Phosphat-Puffer (H₂PO₄⁻/HPO₄²⁻) ist v. a. intrazellulär und im Urin wichtig.", korrekt: true },
      { nr: 3, text: "Hämoglobin puffert durch Aufnahme/Abgabe von H⁺ an Histidinreste.", korrekt: true },
      { nr: 4, text: "Plasmaproteine (v. a. Albumin) tragen ebenfalls zur Pufferkapazität bei.", korrekt: true },
      { nr: 5, text: "Im Blut gibt es nur den Bicarbonat-Puffer.", korrekt: false },
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
      "Richtig sind 1–4. Im Blut wirken mehrere Puffersysteme zusammen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 043 Titration (mittel) ───
  {
    id: "ch-typk-new5-043",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Säure-Base-Titration sind richtig?",
    aussagen: [
      { nr: 1, text: "Am Äquivalenzpunkt einer starken Säure mit starker Base liegt der pH bei 7.", korrekt: true },
      { nr: 2, text: "Am Äquivalenzpunkt einer schwachen Säure mit starker Base liegt der pH > 7.", korrekt: true },
      { nr: 3, text: "Indikatoren ändern ihre Farbe in einem bestimmten pH-Bereich (Umschlagsbereich).", korrekt: true },
      { nr: 4, text: "Phenolphthalein schlägt bei ca. pH 8,2–10 von farblos nach pink/violett um.", korrekt: true },
      { nr: 5, text: "Am Äquivalenzpunkt einer schwachen Säure mit starker Base liegt der pH bei genau 7.", korrekt: false },
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
      "Richtig sind 1–4. Bei schwacher Säure + starker Base entsteht am ÄP eine basische Salzlösung (pH > 7, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 044 Starke vs. schwache Säuren (leicht) ───
  {
    id: "ch-typk-new5-044",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu starken und schwachen Säuren sind richtig?",
    aussagen: [
      { nr: 1, text: "Starke Säuren (z. B. HCl, HNO₃, H₂SO₄) dissoziieren in Wasser praktisch vollständig.", korrekt: true },
      { nr: 2, text: "Schwache Säuren (z. B. CH₃COOH, HF) stellen ein Gleichgewicht ein.", korrekt: true },
      { nr: 3, text: "Der pKₛ-Wert gibt die Säurestärke an: je kleiner, desto stärker die Säure.", korrekt: true },
      { nr: 4, text: "Essigsäure hat einen pKₛ von ca. 4,75.", korrekt: true },
      { nr: 5, text: "Essigsäure hat einen pKₛ von ca. 4,75.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle Aussagen 1–5 sind richtig. Starke Säuren dissoziieren vollständig, schwache stellen ein Gleichgewicht ein.",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 045 Hydrolysereaktionen (schwer) ───
  {
    id: "ch-typk-new5-045",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Hydrolyse von Salzen sind richtig?",
    aussagen: [
      { nr: 1, text: "Salze starker Säuren und starker Basen reagieren neutral (z. B. NaCl).", korrekt: true },
      { nr: 2, text: "Salze schwacher Säuren und starker Basen reagieren basisch (z. B. Natriumacetat).", korrekt: true },
      { nr: 3, text: "Salze starker Säuren und schwacher Basen reagieren sauer (z. B. Ammoniumchlorid).", korrekt: true },
      { nr: 4, text: "Das Anion einer schwachen Säure fungiert als Base und nimmt ein Proton von Wasser auf.", korrekt: true },
      { nr: 5, text: "Alle Salzlösungen sind neutral.", korrekt: false },
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
      "Richtig sind 1–4. Salzlösungen können sauer, basisch oder neutral sein, abhängig von den Stamm-Säuren/Basen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 046 Säurestärke organischer Säuren (schwer) ───
  {
    id: "ch-typk-new5-046",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Säurestärke organischer Verbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Elektronenziehende Substituenten (z. B. −Cl, −NO₂) erhöhen die Säurestärke von Carbonsäuren.", korrekt: true },
      { nr: 2, text: "Trichloressigsäure ist stärker als Essigsäure (induktiver Effekt der Cl-Atome).", korrekt: true },
      { nr: 3, text: "Phenol ist saurer als Ethanol, weil das Phenolat-Ion mesomeriestabilisiert ist.", korrekt: true },
      { nr: 4, text: "Carbonsäuren sind saurer als Alkohole, weil das Carboxylat-Anion mesomeriestabilisiert ist.", korrekt: true },
      { nr: 5, text: "Elektronenschiebende Gruppen (z. B. −CH₃) erhöhen die Säurestärke.", korrekt: false },
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
      "Richtig sind 1–4. Elektronenschiebende Gruppen verringern die Säurestärke (destabilisieren das Anion, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 047 Autoprotolysis Wasser (leicht) ───
  {
    id: "ch-typk-new5-047",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Autoprotolyse des Wassers sind richtig?",
    aussagen: [
      { nr: 1, text: "2 H₂O ⇌ H₃O⁺ + OH⁻ beschreibt die Autoprotolyse.", korrekt: true },
      { nr: 2, text: "Das Ionenprodukt des Wassers ist Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² bei 25 °C.", korrekt: true },
      { nr: 3, text: "In reinem Wasser gilt [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L bei 25 °C.", korrekt: true },
      { nr: 4, text: "pH + pOH = 14 bei 25 °C.", korrekt: true },
      { nr: 5, text: "Das Ionenprodukt Kw ist temperaturunabhängig.", korrekt: false },
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
      "Richtig sind 1–4. Kw steigt mit der Temperatur (endotherme Reaktion, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 048 Brønsted-Theorie (leicht) ───
  {
    id: "ch-typk-new5-048",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Brønsted-Säure-Base-Theorie sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine Brønsted-Säure ist ein Protonendonor.", korrekt: true },
      { nr: 2, text: "Eine Brønsted-Base ist ein Protonenakzeptor.", korrekt: true },
      { nr: 3, text: "Jede Säure hat eine konjugierte Base und umgekehrt.", korrekt: true },
      { nr: 4, text: "Die konjugierte Base einer starken Säure ist eine schwache Base.", korrekt: true },
      { nr: 5, text: "Die konjugierte Base einer starken Säure ist eine starke Base.", korrekt: false },
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
      "Richtig sind 1–4. Je stärker die Säure, desto schwächer die konjugierte Base (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 049 Pufferkapazität (schwer) ───
  {
    id: "ch-typk-new5-049",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Pufferkapazität sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Pufferkapazität gibt an, wie viel Säure/Base ein Puffer aufnehmen kann, bevor der pH stark abweicht.", korrekt: true },
      { nr: 2, text: "Höhere Gesamtkonzentration der Pufferkomponenten erhöht die Pufferkapazität.", korrekt: true },
      { nr: 3, text: "Die Pufferkapazität ist am größten, wenn [HA] = [A⁻] (pH = pKₛ).", korrekt: true },
      { nr: 4, text: "Ein Puffer mit 1 mol/L hat eine höhere Kapazität als einer mit 0,01 mol/L (bei gleichem Verhältnis).", korrekt: true },
      { nr: 5, text: "Die Pufferkapazität ist unabhängig von der Gesamtkonzentration.", korrekt: false },
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
      "Richtig sind 1–4. Die Pufferkapazität hängt direkt von der Gesamtkonzentration ab (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 050 pH-Berechnung (mittel) ───
  {
    id: "ch-typk-new5-050",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur pH-Berechnung sind richtig?",
    aussagen: [
      { nr: 1, text: "Für starke Säuren gilt: pH = −log c (bei vollständiger Dissoziation).", korrekt: true },
      { nr: 2, text: "Für schwache Säuren gilt näherungsweise: pH = ½(pKₛ − log c).", korrekt: true },
      { nr: 3, text: "Für starke Basen: pOH = −log c, dann pH = 14 − pOH.", korrekt: true },
      { nr: 4, text: "Der pH einer 0,01 mol/L HCl-Lösung beträgt 2.", korrekt: true },
      { nr: 5, text: "Eine Verdopplung der HCl-Konzentration verdoppelt auch den pH-Wert.", korrekt: false },
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
      "Richtig sind 1–4. Der pH ist eine logarithmische Skala — Verdopplung der Konzentration senkt den pH um log 2 ≈ 0,3, verdoppelt ihn nicht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 051–063: CHEMIE DES ALLTAGS ──────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 051 Seifen und Tenside (leicht) ───
  {
    id: "ch-typk-new5-051",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Seifen und Tensiden sind richtig?",
    aussagen: [
      { nr: 1, text: "Seifen sind Natriumsalze langkettiger Fettsäuren.", korrekt: true },
      { nr: 2, text: "Tenside haben einen hydrophilen Kopf und einen hydrophoben Schwanz.", korrekt: true },
      { nr: 3, text: "Tenside setzen die Oberflächenspannung von Wasser herab.", korrekt: true },
      { nr: 4, text: "Mizellen entstehen, wenn Tenside eine bestimmte Konzentration (CMC) überschreiten.", korrekt: true },
      { nr: 5, text: "Seifen funktionieren in hartem Wasser (Ca²⁺, Mg²⁺) besser als in weichem.", korrekt: false },
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
      "Richtig sind 1–4. In hartem Wasser bilden Seifen unlösliche Kalkseifen und verlieren Waschwirkung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 052 Kunststoffe Grundlagen (leicht) ───
  {
    id: "ch-typk-new5-052",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Kunststoffen (Polymeren) sind richtig?",
    aussagen: [
      { nr: 1, text: "Polymere bestehen aus vielen sich wiederholenden Monomer-Einheiten.", korrekt: true },
      { nr: 2, text: "Polyethylen (PE) entsteht durch Kettenpolymerisation von Ethylen.", korrekt: true },
      { nr: 3, text: "Thermoplaste sind beim Erwärmen verformbar (z. B. PE, PVC, PS).", korrekt: true },
      { nr: 4, text: "Duroplaste sind nach Aushärtung nicht mehr verformbar (z. B. Bakelit, Epoxidharz).", korrekt: true },
      { nr: 5, text: "Alle Kunststoffe sind biologisch abbaubar.", korrekt: false },
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
      "Richtig sind 1–4. Die meisten konventionellen Kunststoffe sind nicht biologisch abbaubar (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 053 Polymerisationsarten (mittel) ───
  {
    id: "ch-typk-new5-053",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Polymerisationsarten sind richtig?",
    aussagen: [
      { nr: 1, text: "Kettenpolymerisation (z. B. radikalisch) läuft über Initiation, Wachstum und Abbruch.", korrekt: true },
      { nr: 2, text: "Polykondensation setzt Nebenprodukte frei (z. B. Wasser bei Polyester, Nylon).", korrekt: true },
      { nr: 3, text: "Polyaddition verläuft ohne Nebenprodukt (z. B. Polyurethane aus Diisocyanat + Diol).", korrekt: true },
      { nr: 4, text: "PET (Polyethylenterephthalat) ist ein Polykondensationsprodukt.", korrekt: true },
      { nr: 5, text: "Alle Polymerisationen verlaufen radikalisch.", korrekt: false },
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
      "Richtig sind 1–4. Es gibt verschiedene Mechanismen: radikalisch, anionisch, kationisch, Ziegler-Natta, Polykondensation usw. (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 054 Lebensmittelzusatzstoffe (mittel) ───
  {
    id: "ch-typk-new5-054",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Lebensmittelzusatzstoffen sind richtig?",
    aussagen: [
      { nr: 1, text: "E-Nummern kennzeichnen in der EU zugelassene Lebensmittelzusatzstoffe.", korrekt: true },
      { nr: 2, text: "Ascorbinsäure (E300, Vitamin C) wird als Antioxidans eingesetzt.", korrekt: true },
      { nr: 3, text: "Emulgatoren (z. B. Lecithin, E322) stabilisieren Emulsionen (z. B. Öl/Wasser).", korrekt: true },
      { nr: 4, text: "Konservierungsstoffe (z. B. Sorbinsäure, E200) hemmen das Wachstum von Mikroorganismen.", korrekt: true },
      { nr: 5, text: "Alle E-Nummern-Stoffe sind synthetisch und gesundheitsschädlich.", korrekt: false },
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
      "Richtig sind 1–4. Viele E-Nummern-Stoffe sind natürlichen Ursprungs (z. B. E300 = Vitamin C) und unbedenklich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 055 Waschmittelchemie (mittel) ───
  {
    id: "ch-typk-new5-055",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Waschmittelchemie sind richtig?",
    aussagen: [
      { nr: 1, text: "Moderne Waschmittel enthalten anionische, nichtionische oder kationische Tenside.", korrekt: true },
      { nr: 2, text: "Wasserenthärter (z. B. Zeolithe) binden Ca²⁺ und Mg²⁺ und verhindern Kalkseifenbildung.", korrekt: true },
      { nr: 3, text: "Proteasen und Lipasen sind Enzyme in Waschmitteln, die Eiweiß- und Fettflecken abbauen.", korrekt: true },
      { nr: 4, text: "Optische Aufheller absorbieren UV-Licht und emittieren blaues Licht (Fluoreszenz).", korrekt: true },
      { nr: 5, text: "Bleichmittel auf Sauerstoffbasis (z. B. Natriumpercarbonat) sind Reduktionsmittel.", korrekt: false },
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
      "Richtig sind 1–4. Bleichmittel sind Oxidationsmittel (sie oxidieren Farbstoffe und machen sie farblos, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 056 Batterien und Akkumulatoren (mittel) ───
  {
    id: "ch-typk-new5-056",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Batterien und Akkumulatoren sind richtig?",
    aussagen: [
      { nr: 1, text: "In einer galvanischen Zelle wird chemische Energie in elektrische Energie umgewandelt.", korrekt: true },
      { nr: 2, text: "An der Anode findet Oxidation statt, an der Kathode Reduktion.", korrekt: true },
      { nr: 3, text: "Lithium-Ionen-Akkumulatoren nutzen die Interkalation von Li⁺ in Graphit und Metalloxide.", korrekt: true },
      { nr: 4, text: "Der Bleiakkumulator verwendet Pb und PbO₂ mit Schwefelsäure als Elektrolyt.", korrekt: true },
      { nr: 5, text: "Primärbatterien sind wiederaufladbar.", korrekt: false },
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
      "Richtig sind 1–4. Primärbatterien sind nicht wiederaufladbar; Sekundärbatterien (Akkumulatoren) sind es (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 057 Korrosion (mittel) ───
  {
    id: "ch-typk-new5-057",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zur Korrosion sind richtig?",
    aussagen: [
      { nr: 1, text: "Rosten ist die Korrosion von Eisen in Gegenwart von Wasser und Sauerstoff.", korrekt: true },
      { nr: 2, text: "Korrosionsschutz kann durch Beschichtung (Farbe, Lack, Galvanisierung) erreicht werden.", korrekt: true },
      { nr: 3, text: "Kathodischer Schutz verwendet ein unedleres Metall (Opferanode), z. B. Zink am Schiffsrumpf.", korrekt: true },
      { nr: 4, text: "Verzinkung schützt Eisen, weil Zink bevorzugt oxidiert wird.", korrekt: true },
      { nr: 5, text: "Edelmetalle wie Gold und Platin rosten leicht.", korrekt: false },
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
      "Richtig sind 1–4. Edelmetalle sind korrosionsbeständig aufgrund ihres hohen Standardpotenzials (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 058 Kohlenhydrate (leicht) ───
  {
    id: "ch-typk-new5-058",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Kohlenhydraten sind richtig?",
    aussagen: [
      { nr: 1, text: "Glucose und Fructose sind Monosaccharide mit der Formel C₆H₁₂O₆.", korrekt: true },
      { nr: 2, text: "Saccharose (Haushaltszucker) ist ein Disaccharid aus Glucose und Fructose.", korrekt: true },
      { nr: 3, text: "Stärke und Cellulose sind Polysaccharide aus Glucose, unterscheiden sich aber in der glykosidischen Bindung (α vs. β).", korrekt: true },
      { nr: 4, text: "Glucose liegt in wässriger Lösung überwiegend als cyclische Halbacetal-Form vor.", korrekt: true },
      { nr: 5, text: "Cellulose ist für den Menschen leicht verdaulich.", korrekt: false },
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
      "Richtig sind 1–4. Menschen können Cellulose (β-1,4-Bindung) nicht verdauen, da das nötige Enzym (Cellulase) fehlt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 059 Fette und Fettsäuren (leicht) ───
  {
    id: "ch-typk-new5-059",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Fetten und Fettsäuren sind richtig?",
    aussagen: [
      { nr: 1, text: "Fette sind Triester des Glycerins mit drei Fettsäuren (Triacylglycerine).", korrekt: true },
      { nr: 2, text: "Gesättigte Fettsäuren haben keine Doppelbindungen und sind bei Raumtemperatur eher fest.", korrekt: true },
      { nr: 3, text: "Ungesättigte Fettsäuren haben mindestens eine C=C-Doppelbindung.", korrekt: true },
      { nr: 4, text: "Trans-Fettsäuren entstehen z. B. bei der partiellen Härtung von Pflanzenölen.", korrekt: true },
      { nr: 5, text: "Ölsäure (C18:1) ist eine gesättigte Fettsäure.", korrekt: false },
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
      "Richtig sind 1–4. Ölsäure hat eine Doppelbindung (C18:1 = 18 C, 1 Doppelbindung) und ist ungesättigt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 060 Aminosäuren Chemie (mittel) ───
  {
    id: "ch-typk-new5-060",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Chemie der Aminosäuren sind richtig?",
    aussagen: [
      { nr: 1, text: "Aminosäuren besitzen eine Aminogruppe (−NH₂) und eine Carboxylgruppe (−COOH) am α-C-Atom.", korrekt: true },
      { nr: 2, text: "Am isoelektrischen Punkt (pI) liegt die Aminosäure als Zwitterion vor (insgesamt neutral).", korrekt: true },
      { nr: 3, text: "Peptidbindungen entstehen durch Kondensation zweier Aminosäuren unter Wasserabspaltung.", korrekt: true },
      { nr: 4, text: "Die Peptidbindung hat partiellen Doppelbindungscharakter (planar, trans-Konfiguration bevorzugt).", korrekt: true },
      { nr: 5, text: "Glycin (die einfachste Aminosäure) ist chiral.", korrekt: false },
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
      "Richtig sind 1–4. Glycin hat als einzige proteinogene Aminosäure kein Stereozentrum (R = H, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 061 Verseifung (mittel) ───
  {
    id: "ch-typk-new5-061",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur Verseifung sind richtig?",
    aussagen: [
      { nr: 1, text: "Verseifung ist die basische Hydrolyse von Estern (z. B. Fett + NaOH → Glycerin + Seife).", korrekt: true },
      { nr: 2, text: "Die entstehenden Seifen sind Natriumsalze der Fettsäuren.", korrekt: true },
      { nr: 3, text: "Die Verseifung ist irreversibel (im Gegensatz zur sauren Hydrolyse).", korrekt: true },
      { nr: 4, text: "Der Verseifungswert gibt an, wie viel KOH nötig ist, um 1 g Fett vollständig zu verseifen.", korrekt: true },
      { nr: 5, text: "Verseifung und Veresterung sind identische Reaktionen.", korrekt: false },
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
      "Richtig sind 1–4. Verseifung ist die Umkehrung der Veresterung (Hydrolyse statt Bildung), aber nicht identisch (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 062 Umweltchemie Treibhausgase (leicht) ───
  {
    id: "ch-typk-new5-062",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Treibhausgasen sind richtig?",
    aussagen: [
      { nr: 1, text: "CO₂, CH₄, N₂O und FCKWs sind wichtige Treibhausgase.", korrekt: true },
      { nr: 2, text: "Methan (CH₄) hat pro Molekül ein höheres Treibhauspotenzial als CO₂.", korrekt: true },
      { nr: 3, text: "Der natürliche Treibhauseffekt hält die Erde auf einer bewohnbaren Temperatur.", korrekt: true },
      { nr: 4, text: "FCKWs schädigen zusätzlich die Ozonschicht.", korrekt: true },
      { nr: 5, text: "Der Treibhauseffekt wurde erst durch den Menschen verursacht.", korrekt: false },
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
      "Richtig sind 1–4. Der natürliche Treibhauseffekt existiert unabhängig vom Menschen; der Mensch verstärkt ihn (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 063 Katalysatoren im Alltag (mittel) ───
  {
    id: "ch-typk-new5-063",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Katalysatoren im Alltag sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Autokatalysator wandelt CO, NOₓ und unverbrannte Kohlenwasserstoffe in CO₂, N₂ und H₂O um.", korrekt: true },
      { nr: 2, text: "Enzyme sind biologische Katalysatoren, die Reaktionen hochspezifisch beschleunigen.", korrekt: true },
      { nr: 3, text: "Ein Katalysator senkt die Aktivierungsenergie einer Reaktion.", korrekt: true },
      { nr: 4, text: "Ein Katalysator geht unverändert aus der Reaktion hervor.", korrekt: true },
      { nr: 5, text: "Ein Katalysator verschiebt das chemische Gleichgewicht auf die Produktseite.", korrekt: false },
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
      "Richtig sind 1–4. Ein Katalysator beschleunigt Hin- und Rückreaktion gleichermaßen und verschiebt das Gleichgewicht nicht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 064–075: KOORDINATIONSCHEMIE ─────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 064 Komplexe Grundlagen (leicht) ───
  {
    id: "ch-typk-new5-064",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Koordinationsverbindungen (Komplexen) sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Komplex besteht aus einem Zentralion (meist Übergangsmetall) und Liganden.", korrekt: true },
      { nr: 2, text: "Liganden sind Lewis-Basen, die Elektronenpaare an das Zentralion donieren.", korrekt: true },
      { nr: 3, text: "Die Koordinationszahl gibt die Anzahl der Bindungsstellen am Zentralion an.", korrekt: true },
      { nr: 4, text: "Häufige Koordinationszahlen sind 4 (tetraedrisch/quadratisch-planar) und 6 (oktaedrisch).", korrekt: true },
      { nr: 5, text: "Komplexe kommen nur in synthetischen Verbindungen vor, nicht in der Natur.", korrekt: false },
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
      "Richtig sind 1–4. Komplexe sind in der Natur allgegenwärtig: Hämoglobin (Fe), Chlorophyll (Mg), Vitamin B₁₂ (Co) (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 065 Liganden (mittel) ───
  {
    id: "ch-typk-new5-065",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Liganden sind richtig?",
    aussagen: [
      { nr: 1, text: "Einzähnige Liganden (z. B. H₂O, NH₃, Cl⁻) binden über eine Bindungsstelle.", korrekt: true },
      { nr: 2, text: "Mehrzähnige (Chelat-)Liganden (z. B. Ethylendiamin, EDTA) binden über mehrere Stellen.", korrekt: true },
      { nr: 3, text: "Der Chelateffekt beschreibt die höhere Stabilität von Chelatkomplexen gegenüber vergleichbaren Komplexen mit einzähnigen Liganden.", korrekt: true },
      { nr: 4, text: "EDTA ist ein sechszähniger Ligand und bildet besonders stabile Komplexe.", korrekt: true },
      { nr: 5, text: "Alle Liganden sind neutral — geladene Liganden existieren nicht.", korrekt: false },
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
      "Richtig sind 1–4. Viele Liganden sind geladen (Cl⁻, CN⁻, OH⁻, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 066 Kristallfeldtheorie (schwer) ───
  {
    id: "ch-typk-new5-066",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Kristallfeldtheorie sind richtig?",
    aussagen: [
      { nr: 1, text: "Liganden erzeugen ein elektrisches Feld, das die d-Orbitale des Zentralions energetisch aufspaltet.", korrekt: true },
      { nr: 2, text: "Im oktaedrischen Feld spalten die d-Orbitale in t₂g (tiefer) und eg (höher) auf.", korrekt: true },
      { nr: 3, text: "Die Größe der Aufspaltung (Δ) hängt vom Liganden ab (spektrochemische Reihe).", korrekt: true },
      { nr: 4, text: "Starkfeldliganden (z. B. CN⁻, CO) erzeugen große Δ-Werte und begünstigen Low-Spin-Komplexe.", korrekt: true },
      { nr: 5, text: "Die Kristallfeldtheorie erklärt nicht die Farbigkeit von Übergangsmetallkomplexen.", korrekt: false },
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
      "Richtig sind 1–4. Die Kristallfeldtheorie erklärt die Farbigkeit durch d-d-Übergänge (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 067 Komplexe in der Biologie (mittel) ───
  {
    id: "ch-typk-new5-067",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu biologisch wichtigen Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Hämoglobin enthält Fe²⁺ im Porphyrinring, das O₂ reversibel bindet.", korrekt: true },
      { nr: 2, text: "Chlorophyll enthält Mg²⁺ im Porphyrinring und absorbiert Licht für die Photosynthese.", korrekt: true },
      { nr: 3, text: "Vitamin B₁₂ (Cobalamin) enthält Cobalt als Zentralion.", korrekt: true },
      { nr: 4, text: "Cytochrom-c-Oxidase enthält Kupfer- und Eisenzentren in der Atmungskette.", korrekt: true },
      { nr: 5, text: "Biologische Metallkomplexe spielen keine Rolle im Stoffwechsel.", korrekt: false },
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
      "Richtig sind 1–4. Metallkomplexe sind für zahlreiche Stoffwechselvorgänge essenziell (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 068 Nomenklatur von Komplexen (schwer) ───
  {
    id: "ch-typk-new5-068",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur von Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Liganden werden vor dem Metallnamen alphabetisch aufgeführt.", korrekt: true },
      { nr: 2, text: "Anionische Liganden erhalten die Endung -o (z. B. Chloro, Cyano, Hydroxo).", korrekt: true },
      { nr: 3, text: "Neutrale Liganden behalten ihren Namen (Ausnahmen: Aqua, Ammin, Carbonyl).", korrekt: true },
      { nr: 4, text: "Die Oxidationsstufe des Metalls wird in römischen Ziffern angegeben.", korrekt: true },
      { nr: 5, text: "Anionische Komplexe erhalten die Endung -at (z. B. Hexacyanidoferrat).", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Alle Aussagen 1–5 sind richtig. Die Nomenklatur folgt strikten IUPAC-Regeln.",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 069 Isomerie bei Komplexen (schwer) ───
  {
    id: "ch-typk-new5-069",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Isomerie bei Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "cis-trans-Isomerie tritt bei oktaedrischen und quadratisch-planaren Komplexen auf.", korrekt: true },
      { nr: 2, text: "Beim cis-Isomer stehen gleiche Liganden nebeneinander, beim trans gegenüber.", korrekt: true },
      { nr: 3, text: "Ionisationsisomerie entsteht, wenn Ligand und Gegenion die Plätze tauschen.", korrekt: true },
      { nr: 4, text: "Linkage-Isomerie tritt auf, wenn ein Ligand über verschiedene Atome binden kann (z. B. SCN⁻ über S oder N).", korrekt: true },
      { nr: 5, text: "Oktaedrische Komplexe zeigen keine Isomerie.", korrekt: false },
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
      "Richtig sind 1–4. Oktaedrische Komplexe zeigen verschiedenste Isomerieformen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 070 Spektrochemische Reihe (mittel) ───
  {
    id: "ch-typk-new5-070",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur spektrochemischen Reihe sind richtig?",
    aussagen: [
      { nr: 1, text: "Die spektrochemische Reihe ordnet Liganden nach ihrer Feldstärke (Δ-Aufspaltung).", korrekt: true },
      { nr: 2, text: "I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO ist die ungefähre Reihenfolge.", korrekt: true },
      { nr: 3, text: "Schwachfeldliganden erzeugen kleine Δ-Werte und fördern High-Spin-Komplexe.", korrekt: true },
      { nr: 4, text: "Die absorbierte Lichtfarbe hängt von Δ ab: großes Δ → kurzwelligeres Licht absorbiert.", korrekt: true },
      { nr: 5, text: "Alle Liganden erzeugen die gleiche Aufspaltung unabhängig vom Zentralion.", korrekt: false },
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
      "Richtig sind 1–4. Die Aufspaltung hängt sowohl vom Liganden als auch vom Zentralion ab (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 071 High-Spin/Low-Spin (schwer) ───
  {
    id: "ch-typk-new5-071",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu High-Spin- und Low-Spin-Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei High-Spin-Komplexen ist Δ klein; Elektronen besetzen nach Hund'scher Regel bevorzugt eg-Orbitale.", korrekt: true },
      { nr: 2, text: "Bei Low-Spin-Komplexen ist Δ groß; Elektronen paaren sich bevorzugt in t₂g-Orbitalen.", korrekt: true },
      { nr: 3, text: "Die Anzahl der ungepaarten Elektronen bestimmt die magnetischen Eigenschaften (paramagnetisch vs. diamagnetisch).", korrekt: true },
      { nr: 4, text: "High-Spin-Komplexe haben mehr ungepaarte Elektronen und sind stärker paramagnetisch.", korrekt: true },
      { nr: 5, text: "High-Spin und Low-Spin treten auch bei d⁰- und d¹⁰-Konfigurationen auf.", korrekt: false },
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
      "Richtig sind 1–4. Bei d⁰ und d¹⁰ gibt es keinen Unterschied zwischen High-Spin und Low-Spin (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 072 EDTA und Chelatometrie (mittel) ───
  {
    id: "ch-typk-new5-072",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu EDTA und Chelatometrie sind richtig?",
    aussagen: [
      { nr: 1, text: "EDTA bildet mit den meisten Metallionen sehr stabile 1:1-Komplexe.", korrekt: true },
      { nr: 2, text: "Die komplexometrische Titration mit EDTA dient zur Bestimmung der Wasserhärte (Ca²⁺, Mg²⁺).", korrekt: true },
      { nr: 3, text: "Der Chelateffekt beruht hauptsächlich auf einem günstigen Entropie-Beitrag.", korrekt: true },
      { nr: 4, text: "EDTA wird in der Medizin zur Behandlung von Schwermetallvergiftungen eingesetzt (Chelat-Therapie).", korrekt: true },
      { nr: 5, text: "EDTA ist ein einzähniger Ligand.", korrekt: false },
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
      "Richtig sind 1–4. EDTA ist ein sechszähniger Ligand (4 Carboxylat-O und 2 N, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 073 Übergangsmetalle (leicht) ───
  {
    id: "ch-typk-new5-073",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Übergangsmetallen sind richtig?",
    aussagen: [
      { nr: 1, text: "Übergangsmetalle stehen in den Nebengruppen (d-Block) des Periodensystems.", korrekt: true },
      { nr: 2, text: "Sie können variable Oxidationsstufen annehmen.", korrekt: true },
      { nr: 3, text: "Viele Übergangsmetallverbindungen sind farbig (d-d-Übergänge).", korrekt: true },
      { nr: 4, text: "Sie bilden häufig Komplexe mit verschiedenen Liganden.", korrekt: true },
      { nr: 5, text: "Übergangsmetalle haben keine katalytischen Eigenschaften.", korrekt: false },
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
      "Richtig sind 1–4. Übergangsmetalle sind wichtige Katalysatoren (z. B. Fe im Haber-Bosch, Pt im Autokatalysator, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 074 Farbigkeit Komplexe (mittel) ───
  {
    id: "ch-typk-new5-074",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Farbigkeit von Übergangsmetallkomplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Farbigkeit entsteht durch Absorption von sichtbarem Licht bei d-d-Elektronenübergängen.", korrekt: true },
      { nr: 2, text: "Die wahrgenommene Farbe ist die Komplementärfarbe des absorbierten Lichts.", korrekt: true },
      { nr: 3, text: "[Cu(H₂O)₆]²⁺ ist blau, weil orangerotes Licht absorbiert wird.", korrekt: true },
      { nr: 4, text: "Austausch der Liganden kann die Farbe des Komplexes verändern (z. B. Cu²⁺ mit NH₃ → tiefblau).", korrekt: true },
      { nr: 5, text: "Komplexe mit d⁰- oder d¹⁰-Konfiguration sind immer farbig.", korrekt: false },
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
      "Richtig sind 1–4. d⁰ und d¹⁰ haben keine d-d-Übergänge und sind daher meist farblos (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 075 Stabilitätskonstante (schwer) ───
  {
    id: "ch-typk-new5-075",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Stabilitätskonstante von Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Gesamtstabilitätskonstante Kges beschreibt das Gleichgewicht zwischen freiem Metallion, Liganden und Komplex.", korrekt: true },
      { nr: 2, text: "Ein großer Kges-Wert bedeutet, dass der Komplex thermodynamisch stabil ist.", korrekt: true },
      { nr: 3, text: "Chelatkomplexe haben generell höhere Kges-Werte als vergleichbare Komplexe mit einzähnigen Liganden.", korrekt: true },
      { nr: 4, text: "Die Stabilität hängt u. a. von Ladung, Ionenradius des Metalls und der Natur des Liganden ab.", korrekt: true },
      { nr: 5, text: "Die Stabilitätskonstante ist immer kleiner als 1.", korrekt: false },
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
      "Richtig sind 1–4. Stabilitätskonstanten können sehr groß sein (z. B. EDTA-Komplexe: Kges > 10²⁰, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
