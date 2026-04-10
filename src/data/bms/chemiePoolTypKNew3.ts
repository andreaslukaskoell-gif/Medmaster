/**
 * Chemie Typ K Neu 3 — 75 Kombinationsaufgaben (IDs ch-typk-new3-001 bis -075).
 * Schwerpunkte: Lösungen/Löslichkeit, Gasgesetze, Puffer, Kernchemie,
 *               Komplexchemie, Analytische Chemie, Umweltchemie.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const chemieTypKNew3: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–011: LÖSUNGEN UND LÖSLICHKEIT ────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 Lösungsbegriff (leicht) ───
  {
    id: "ch-typk-new3-001",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Lösungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine Lösung ist ein homogenes Gemisch aus Lösungsmittel und gelöstem Stoff.", korrekt: true },
      { nr: 2, text: "In einer gesättigten Lösung kann bei gegebener Temperatur kein weiterer Stoff gelöst werden.", korrekt: true },
      { nr: 3, text: "Wasser ist aufgrund seiner Polarität ein gutes Lösungsmittel für ionische und polare Verbindungen.", korrekt: true },
      { nr: 4, text: "Die Löslichkeit der meisten Feststoffe in Wasser steigt mit der Temperatur.", korrekt: true },
      { nr: 5, text: "Öl löst sich gut in Wasser, da beide polar sind.", korrekt: false },
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
      "Richtig sind 1–4. Öl ist unpolar und daher in polarem Wasser unlöslich (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 002 Konzentrationsangaben (leicht) ───
  {
    id: "ch-typk-new3-002",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Konzentrationsangaben sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Stoffmengenkonzentration (Molarität) c = n/V hat die Einheit mol/L.", korrekt: true },
      { nr: 2, text: "Die Massenkonzentration gibt die Masse des gelösten Stoffes pro Volumen der Lösung an.", korrekt: true },
      { nr: 3, text: "Der Massenanteil (w) ist der Quotient aus Masse des gelösten Stoffes und Gesamtmasse.", korrekt: true },
      { nr: 4, text: "Die Molalität bezieht die Stoffmenge des gelösten Stoffes auf die Masse des Lösungsmittels (mol/kg).", korrekt: true },
      { nr: 5, text: "Molarität und Molalität sind immer identisch.", korrekt: false },
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
      "Richtig sind 1–4. Molarität bezieht sich auf das Volumen der Lösung, Molalität auf die Masse des Lösungsmittels; sie sind nur in verdünnten wässrigen Lösungen annähernd gleich (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 003 Verdünnungsgesetz (leicht) ───
  {
    id: "ch-typk-new3-003",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Verdünnung von Lösungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Beim Verdünnen gilt c₁ · V₁ = c₂ · V₂ (die Stoffmenge bleibt gleich).", korrekt: true },
      { nr: 2, text: "Verdünnen senkt die Konzentration, ohne die Stoffmenge des gelösten Stoffes zu ändern.", korrekt: true },
      { nr: 3, text: "Eine 1 M Lösung, die 1:10 verdünnt wird, hat danach die Konzentration 0,1 M.", korrekt: true },
      { nr: 4, text: "Beim Verdünnen von Schwefelsäure gibt man immer die Säure zum Wasser (nie umgekehrt).", korrekt: true },
      { nr: 5, text: "Verdünnung verändert die Stoffmenge des gelösten Stoffes.", korrekt: false },
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
      "Richtig sind 1–4. Beim Verdünnen bleibt die Stoffmenge konstant, nur die Konzentration sinkt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 004 Löslichkeitsprodukt (mittel) ───
  {
    id: "ch-typk-new3-004",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Löslichkeitsprodukt (Ksp) sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Löslichkeitsprodukt beschreibt das Gleichgewicht zwischen einem schwerlöslichen Salz und seinen Ionen in Lösung.", korrekt: true },
      { nr: 2, text: "Wird das Ionenprodukt Q > Ksp, fällt ein Niederschlag aus.", korrekt: true },
      { nr: 3, text: "Ksp ist temperaturabhängig.", korrekt: true },
      { nr: 4, text: "Der Zusatz eines gemeinsamen Ions senkt die Löslichkeit eines schwerlöslichen Salzes (gleichioniger Zusatz).", korrekt: true },
      { nr: 5, text: "Das Löslichkeitsprodukt gilt auch für gut lösliche Salze wie NaCl.", korrekt: false },
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
      "Richtig sind 1–4. Das Löslichkeitsprodukt wird primär für schwerlösliche Salze angewendet; bei gut löslichen Salzen ist das Konzept wenig aussagekräftig (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 005 Kolligative Eigenschaften (mittel) ───
  {
    id: "ch-typk-new3-005",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu kolligativen Eigenschaften sind richtig?",
    aussagen: [
      { nr: 1, text: "Kolligative Eigenschaften hängen von der Anzahl der gelösten Teilchen ab, nicht von deren Art.", korrekt: true },
      { nr: 2, text: "Siedepunktserhöhung (Ebullioskopie) ist eine kolligative Eigenschaft.", korrekt: true },
      { nr: 3, text: "Gefrierpunktserniedrigung (Kryoskopie) wird z. B. beim Streusalz genutzt.", korrekt: true },
      { nr: 4, text: "Der osmotische Druck ist proportional zur Konzentration gelöster Teilchen (van-'t-Hoff-Gesetz).", korrekt: true },
      { nr: 5, text: "Kolligative Eigenschaften hängen von der Molmasse des gelösten Stoffes ab.", korrekt: false },
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
      "Richtig sind 1–4. Kolligative Eigenschaften hängen nur von der Teilchenzahl ab, nicht von der Art oder Molmasse (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 006 Osmose (mittel) ───
  {
    id: "ch-typk-new3-006",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Osmose sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Osmose wandert Lösungsmittel durch eine semipermeable Membran vom Bereich geringerer zum Bereich höherer Konzentration.", korrekt: true },
      { nr: 2, text: "Der osmotische Druck kann mit π = c · R · T berechnet werden.", korrekt: true },
      { nr: 3, text: "In einer hypertonen Lösung schrumpfen Erythrozyten (Krenation).", korrekt: true },
      { nr: 4, text: "In einer hypotonen Lösung schwellen Erythrozyten an und können platzen (Hämolyse).", korrekt: true },
      { nr: 5, text: "Bei der Osmose wandern gelöste Teilchen durch die Membran.", korrekt: false },
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
      "Richtig sind 1–4. Bei der Osmose wandert das Lösungsmittel, nicht die gelösten Teilchen, durch die semipermeable Membran (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 007 Elektrolyte (leicht) ───
  {
    id: "ch-typk-new3-007",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Elektrolyten sind richtig?",
    aussagen: [
      { nr: 1, text: "Starke Elektrolyte dissoziieren in Wasser vollständig in Ionen (z. B. NaCl, HCl).", korrekt: true },
      { nr: 2, text: "Schwache Elektrolyte dissoziieren nur teilweise (z. B. Essigsäure, NH₃).", korrekt: true },
      { nr: 3, text: "Elektrolytlösungen leiten elektrischen Strom.", korrekt: true },
      { nr: 4, text: "Nichtelektrolyte wie Glukose dissoziieren nicht und leiten keinen Strom.", korrekt: true },
      { nr: 5, text: "Alle organischen Verbindungen sind starke Elektrolyte.", korrekt: false },
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
      "Richtig sind 1–4. Viele organische Verbindungen (z. B. Zucker, Alkohole) sind Nichtelektrolyte (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 008 Löslichkeit von Gasen (mittel) ───
  {
    id: "ch-typk-new3-008",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Löslichkeit von Gasen in Flüssigkeiten sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur ab.", korrekt: true },
      { nr: 2, text: "Nach dem Henry-Gesetz ist die Gaslöslichkeit proportional zum Partialdruck des Gases.", korrekt: true },
      { nr: 3, text: "Erhöhter Druck steigert die Gaslöslichkeit (z. B. CO₂ in Sprudelwasser).", korrekt: true },
      { nr: 4, text: "Die Dekompressionskrankheit (Taucherkrankheit) entsteht durch zu schnelles Freisetzen gelöster Gase (N₂).", korrekt: true },
      { nr: 5, text: "Die Löslichkeit von Gasen nimmt mit steigender Temperatur zu.", korrekt: false },
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
      "Richtig sind 1–4. Die Gaslöslichkeit sinkt bei steigender Temperatur (5 ist das Gegenteil von 1 und damit falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 009 Kristallisation und Fällung (mittel) ───
  {
    id: "ch-typk-new3-009",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Kristallisation und Fällung sind richtig?",
    aussagen: [
      { nr: 1, text: "Kristallisation tritt auf, wenn eine Lösung übersättigt ist.", korrekt: true },
      { nr: 2, text: "Umkristallisation wird zur Reinigung von Feststoffen genutzt.", korrekt: true },
      { nr: 3, text: "Fällungsreaktionen entstehen, wenn das Ionenprodukt das Löslichkeitsprodukt überschreitet.", korrekt: true },
      { nr: 4, text: "AgCl fällt als weißer Niederschlag bei Zugabe von Silbernitrat zu einer Chlorid-Lösung.", korrekt: true },
      { nr: 5, text: "Fällung findet nur bei organischen Verbindungen statt.", korrekt: false },
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
      "Richtig sind 1–4. Fällungsreaktionen treten häufig bei anorganischen Salzen auf (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 010 Dissoziation (schwer) ───
  {
    id: "ch-typk-new3-010",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Dissoziation in wässriger Lösung sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Dissoziationsgrad α gibt den Anteil dissoziierter Moleküle an der Gesamtmenge an.", korrekt: true },
      { nr: 2, text: "Bei starken Säuren ist α ≈ 1 (vollständige Dissoziation).", korrekt: true },
      { nr: 3, text: "Die Ostwald-Verdünnungsregel besagt, dass der Dissoziationsgrad schwacher Elektrolyte mit zunehmender Verdünnung steigt.", korrekt: true },
      { nr: 4, text: "Die Säurekonstante Ka ist ein Maß für die Stärke einer Säure.", korrekt: true },
      { nr: 5, text: "Starke Säuren haben einen hohen pKa-Wert.", korrekt: false },
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
      "Richtig sind 1–4. Starke Säuren haben einen niedrigen (oft negativen) pKa-Wert (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 011 Lösungsenthalpie (schwer) ───
  {
    id: "ch-typk-new3-011",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Lösungsenthalpie sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Lösungsenthalpie setzt sich aus Gitterenergie und Hydratationsenergie zusammen.", korrekt: true },
      { nr: 2, text: "Ist die Hydratationsenergie größer als die Gitterenergie, ist der Lösungsvorgang exotherm.", korrekt: true },
      { nr: 3, text: "Endothermes Lösen (z. B. NH₄NO₃ in Wasser) führt zur Abkühlung der Lösung.", korrekt: true },
      { nr: 4, text: "Die Hydratation beschreibt die Anlagerung von Wassermolekülen an gelöste Ionen.", korrekt: true },
      { nr: 5, text: "Der Lösungsvorgang ist immer exotherm.", korrekt: false },
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
      "Richtig sind 1–4. Der Lösungsvorgang kann exotherm oder endotherm sein, je nach Verhältnis von Gitter- und Hydratationsenergie (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 012–022: GASGESETZE ──────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 012 Ideales Gasgesetz (leicht) ───
  {
    id: "ch-typk-new3-012",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum idealen Gasgesetz sind richtig?",
    aussagen: [
      { nr: 1, text: "Das ideale Gasgesetz lautet p · V = n · R · T.", korrekt: true },
      { nr: 2, text: "R ist die universelle Gaskonstante (8,314 J/(mol·K)).", korrekt: true },
      { nr: 3, text: "T muss in Kelvin angegeben werden.", korrekt: true },
      { nr: 4, text: "1 mol eines idealen Gases nimmt bei Standardbedingungen (0 °C, 1 atm) etwa 22,4 L ein.", korrekt: true },
      { nr: 5, text: "Das ideale Gasgesetz berücksichtigt intermolekulare Kräfte.", korrekt: false },
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
      "Richtig sind 1–4. Das ideale Gasgesetz vernachlässigt intermolekulare Kräfte und das Eigenvolumen der Teilchen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 013 Boyle-Mariotte (leicht) ───
  {
    id: "ch-typk-new3-013",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Gesetz von Boyle-Mariotte sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei konstanter Temperatur gilt: p₁ · V₁ = p₂ · V₂.", korrekt: true },
      { nr: 2, text: "Druck und Volumen sind bei konstanter Temperatur umgekehrt proportional.", korrekt: true },
      { nr: 3, text: "Verdoppelt man den Druck bei konstanter Temperatur, halbiert sich das Volumen.", korrekt: true },
      { nr: 4, text: "Dieses Gesetz gilt für ideale Gase bei isothermer Zustandsänderung.", korrekt: true },
      { nr: 5, text: "Bei Druckerhöhung nimmt das Volumen eines idealen Gases zu.", korrekt: false },
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
      "Richtig sind 1–4. Bei Druckerhöhung nimmt das Volumen ab, nicht zu (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 014 Gay-Lussac / Charles (leicht) ───
  {
    id: "ch-typk-new3-014",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Gesetz von Gay-Lussac (Charles) sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei konstantem Druck ist das Volumen eines Gases proportional zur absoluten Temperatur.", korrekt: true },
      { nr: 2, text: "V₁/T₁ = V₂/T₂ gilt bei konstantem Druck.", korrekt: true },
      { nr: 3, text: "Erwärmt man ein Gas bei konstantem Druck, dehnt es sich aus.", korrekt: true },
      { nr: 4, text: "Am absoluten Nullpunkt (0 K) hätte ein ideales Gas das Volumen null.", korrekt: true },
      { nr: 5, text: "Die Temperatur muss in Celsius eingesetzt werden.", korrekt: false },
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
      "Richtig sind 1–4. Im Gasgesetz muss die absolute Temperatur in Kelvin verwendet werden (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 015 Dalton-Gesetz (mittel) ───
  {
    id: "ch-typk-new3-015",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Dalton-Gesetz der Partialdrücke sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Gesamtdruck eines Gasgemisches ist die Summe der Partialdrücke aller Komponenten.", korrekt: true },
      { nr: 2, text: "Der Partialdruck einer Komponente ist proportional zu ihrem Molenbruch.", korrekt: true },
      { nr: 3, text: "In der Atmosphäre beträgt der Partialdruck von O₂ etwa 21 % des Gesamtdrucks.", korrekt: true },
      { nr: 4, text: "Das Dalton-Gesetz gilt für ideale Gasgemische.", korrekt: true },
      { nr: 5, text: "In einem Gasgemisch haben alle Komponenten den gleichen Partialdruck.", korrekt: false },
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
      "Richtig sind 1–4. Der Partialdruck hängt vom Molenbruch ab und ist für verschiedene Gase unterschiedlich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 016 Reale Gase und van der Waals (mittel) ───
  {
    id: "ch-typk-new3-016",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu realen Gasen sind richtig?",
    aussagen: [
      { nr: 1, text: "Reale Gase weichen bei hohem Druck und niedrigen Temperaturen vom idealen Verhalten ab.", korrekt: true },
      { nr: 2, text: "Die van-der-Waals-Gleichung korrigiert für intermolekulare Anziehungskräfte und Eigenvolumen.", korrekt: true },
      { nr: 3, text: "Der Korrekturfaktor a berücksichtigt die Anziehungskräfte zwischen den Gasteilchen.", korrekt: true },
      { nr: 4, text: "Der Korrekturfaktor b berücksichtigt das Eigenvolumen der Gasteilchen.", korrekt: true },
      { nr: 5, text: "Reale Gase verhalten sich bei sehr hohem Druck immer ideal.", korrekt: false },
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
      "Richtig sind 1–4. Bei hohem Druck weichen reale Gase am stärksten vom idealen Verhalten ab (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 017 Avogadro-Gesetz (leicht) ───
  {
    id: "ch-typk-new3-017",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Avogadro-Gesetz sind richtig?",
    aussagen: [
      { nr: 1, text: "Gleiche Volumina idealer Gase enthalten bei gleichem Druck und gleicher Temperatur die gleiche Anzahl Teilchen.", korrekt: true },
      { nr: 2, text: "Die Avogadro-Konstante beträgt etwa 6,022 × 10²³ mol⁻¹.", korrekt: true },
      { nr: 3, text: "Das Molvolumen eines idealen Gases bei STP (0 °C, 1 atm) beträgt 22,4 L.", korrekt: true },
      { nr: 4, text: "V₁/n₁ = V₂/n₂ bei konstantem Druck und konstanter Temperatur.", korrekt: true },
      { nr: 5, text: "Das Avogadro-Gesetz gilt nur für Edelgase.", korrekt: false },
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
      "Richtig sind 1–4. Das Avogadro-Gesetz gilt für alle idealen Gase, nicht nur für Edelgase (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 018 Kinetische Gastheorie (mittel) ───
  {
    id: "ch-typk-new3-018",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zur kinetischen Gastheorie sind richtig?",
    aussagen: [
      { nr: 1, text: "Gasteilchen bewegen sich in ständiger, zufälliger Bewegung.", korrekt: true },
      { nr: 2, text: "Die mittlere kinetische Energie der Teilchen ist proportional zur absoluten Temperatur.", korrekt: true },
      { nr: 3, text: "Stöße zwischen Gasteilchen und mit der Gefäßwand sind bei einem idealen Gas elastisch.", korrekt: true },
      { nr: 4, text: "Bei gleicher Temperatur haben leichtere Gasteilchen eine höhere mittlere Geschwindigkeit als schwerere.", korrekt: true },
      { nr: 5, text: "Im idealen Gas üben die Teilchen attraktive Kräfte aufeinander aus.", korrekt: false },
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
      "Richtig sind 1–4. Im idealen Gas gibt es keine intermolekularen Kräfte (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 019 Diffusion und Effusion (mittel) ───
  {
    id: "ch-typk-new3-019",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Diffusion und Effusion sind richtig?",
    aussagen: [
      { nr: 1, text: "Diffusion ist die gleichmäßige Durchmischung von Gasen aufgrund der Teilchenbewegung.", korrekt: true },
      { nr: 2, text: "Effusion ist das Entweichen von Gasteilchen durch eine kleine Öffnung.", korrekt: true },
      { nr: 3, text: "Nach Graham-Gesetz ist die Effusionsrate umgekehrt proportional zur Wurzel der Molmasse.", korrekt: true },
      { nr: 4, text: "Leichtere Gase (z. B. H₂) effundieren schneller als schwerere (z. B. O₂).", korrekt: true },
      { nr: 5, text: "Schwerere Gase diffundieren immer schneller als leichtere.", korrekt: false },
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
      "Richtig sind 1–4. Leichtere Gase diffundieren und effundieren schneller (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 020 Gasgemische (mittel) ───
  {
    id: "ch-typk-new3-020",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Gasgemischen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Atmosphäre besteht hauptsächlich aus N₂ (~78 %) und O₂ (~21 %).", korrekt: true },
      { nr: 2, text: "Der Molenbruch einer Komponente ist das Verhältnis ihrer Stoffmenge zur Gesamtstoffmenge.", korrekt: true },
      { nr: 3, text: "Die Summe aller Molenbrüche in einem Gemisch ergibt 1.", korrekt: true },
      { nr: 4, text: "CO₂ macht in der Atmosphäre nur etwa 0,04 % aus.", korrekt: true },
      { nr: 5, text: "Edelgase machen über 10 % der Atmosphäre aus.", korrekt: false },
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
      "Richtig sind 1–4. Edelgase machen weniger als 1 % der Atmosphäre aus (hauptsächlich Argon ~0,93 %; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 021 Dampfdruck (schwer) ───
  {
    id: "ch-typk-new3-021",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Dampfdruck sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Dampfdruck ist der Druck, bei dem sich Verdampfung und Kondensation im Gleichgewicht befinden.", korrekt: true },
      { nr: 2, text: "Der Dampfdruck steigt mit zunehmender Temperatur.", korrekt: true },
      { nr: 3, text: "Eine Flüssigkeit siedet, wenn ihr Dampfdruck den Umgebungsdruck erreicht.", korrekt: true },
      { nr: 4, text: "Stoffe mit starken intermolekularen Kräften haben einen niedrigeren Dampfdruck.", korrekt: true },
      { nr: 5, text: "Der Dampfdruck ist unabhängig von der Temperatur.", korrekt: false },
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
      "Richtig sind 1–4. Der Dampfdruck ist stark temperaturabhängig (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 022 Amagat und Gasmischungen (schwer) ───
  {
    id: "ch-typk-new3-022",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Gasmischungen und Volumenanteilen sind richtig?",
    aussagen: [
      { nr: 1, text: "Nach dem Gesetz von Amagat ist das Gesamtvolumen einer idealen Gasmischung die Summe der Partialvolumina.", korrekt: true },
      { nr: 2, text: "Der Volumenanteil einer Gaskomponente ist bei idealen Gasen gleich dem Molenbruch.", korrekt: true },
      { nr: 3, text: "In der Atemluft ist der Stickstoff-Volumenanteil am größten.", korrekt: true },
      { nr: 4, text: "Der Partialdruck ist das Produkt aus Molenbruch und Gesamtdruck.", korrekt: true },
      { nr: 5, text: "Das Volumen einer Gasmischung ist immer kleiner als die Summe der Einzelvolumina.", korrekt: false },
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
      "Richtig sind 1–4. Bei idealen Gasen ist das Gesamtvolumen genau die Summe der Partialvolumina, nicht kleiner (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 023–033: PUFFER ──────────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 023 Pufferbegriff (leicht) ───
  {
    id: "ch-typk-new3-023",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Pufferlösungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Puffer besteht aus einer schwachen Säure und ihrem konjugierten Base-Salz (oder umgekehrt).", korrekt: true },
      { nr: 2, text: "Puffer halten den pH-Wert bei Zugabe kleiner Mengen Säure oder Base annähernd konstant.", korrekt: true },
      { nr: 3, text: "Der Acetatpuffer besteht aus Essigsäure und Natriumacetat.", korrekt: true },
      { nr: 4, text: "Der Phosphatpuffer besteht aus H₂PO₄⁻ und HPO₄²⁻.", korrekt: true },
      { nr: 5, text: "Ein Puffer aus einer starken Säure und einem Salz funktioniert optimal.", korrekt: false },
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
      "Richtig sind 1–4. Puffer benötigen schwache Säuren/Basen; starke Säuren dissoziieren vollständig und puffern nicht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 024 Henderson-Hasselbalch (mittel) ───
  {
    id: "ch-typk-new3-024",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Henderson-Hasselbalch-Gleichung sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Gleichung lautet pH = pKa + log([A⁻]/[HA]).", korrekt: true },
      { nr: 2, text: "Wenn [A⁻] = [HA], dann ist pH = pKa.", korrekt: true },
      { nr: 3, text: "Die Gleichung gilt für Pufferlösungen mit schwachen Säuren/Basen.", korrekt: true },
      { nr: 4, text: "Ein Puffer hat seine maximale Kapazität, wenn pH = pKa.", korrekt: true },
      { nr: 5, text: "Die Gleichung gilt auch für starke Säuren in verdünnter Lösung.", korrekt: false },
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
      "Richtig sind 1–4. Henderson-Hasselbalch setzt ein Puffergleichgewicht schwacher Säuren voraus; starke Säuren puffern nicht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 025 Blutpuffer (mittel) ───
  {
    id: "ch-typk-new3-025",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Bicarbonat-Blutpuffer sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Bicarbonat-Puffersystem (CO₂/HCO₃⁻) ist der wichtigste Puffer im Blut.", korrekt: true },
      { nr: 2, text: "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ beschreibt das Puffergleichgewicht.", korrekt: true },
      { nr: 3, text: "Die Niere reguliert die HCO₃⁻-Konzentration, die Lunge den pCO₂.", korrekt: true },
      { nr: 4, text: "Der normale Blut-pH liegt bei 7,35–7,45.", korrekt: true },
      { nr: 5, text: "Der Blut-pH wird ausschließlich durch die Niere reguliert.", korrekt: false },
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
      "Richtig sind 1–4. Der Blut-pH wird von Lunge (schnell, CO₂-Abatmung) und Niere (langsam, HCO₃⁻) gemeinsam reguliert (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 026 Pufferkapazität (mittel) ───
  {
    id: "ch-typk-new3-026",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Pufferkapazität sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Pufferkapazität gibt an, wie viel Säure oder Base ein Puffer neutralisieren kann, bevor sich der pH stark ändert.", korrekt: true },
      { nr: 2, text: "Die Pufferkapazität ist am höchsten, wenn die Konzentrationen von Säure und konjugierter Base gleich sind.", korrekt: true },
      { nr: 3, text: "Höhere Gesamtkonzentration des Puffers erhöht die Pufferkapazität.", korrekt: true },
      { nr: 4, text: "Der effektive Pufferbereich liegt bei pH = pKa ± 1.", korrekt: true },
      { nr: 5, text: "Außerhalb des Pufferbereichs puffert die Lösung ebenso effektiv.", korrekt: false },
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
      "Richtig sind 1–4. Außerhalb des Bereichs pH = pKa ± 1 nimmt die Pufferwirkung stark ab (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 027 Azidose und Alkalose (schwer) ───
  {
    id: "ch-typk-new3-027",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Azidose und Alkalose sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei einer respiratorischen Azidose ist der pCO₂ erhöht (Hypoventilation).", korrekt: true },
      { nr: 2, text: "Bei einer metabolischen Azidose ist die HCO₃⁻-Konzentration erniedrigt.", korrekt: true },
      { nr: 3, text: "Eine respiratorische Alkalose entsteht durch Hyperventilation (pCO₂ erniedrigt).", korrekt: true },
      { nr: 4, text: "Der Körper kompensiert eine respiratorische Azidose renal durch vermehrte HCO₃⁻-Rückresorption.", korrekt: true },
      { nr: 5, text: "Bei einer Alkalose liegt der Blut-pH unter 7,35.", korrekt: false },
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
      "Richtig sind 1–4. Bei einer Alkalose liegt der pH über 7,45 (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 028 Weitere Blutpuffer (schwer) ───
  {
    id: "ch-typk-new3-028",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu weiteren Puffersystemen im Blut sind richtig?",
    aussagen: [
      { nr: 1, text: "Hämoglobin ist ein wichtiger Nicht-Bicarbonat-Puffer im Blut.", korrekt: true },
      { nr: 2, text: "Plasmaproteine (v. a. Albumin) tragen zur Pufferung bei.", korrekt: true },
      { nr: 3, text: "Der Phosphatpuffer spielt intrazellulär eine größere Rolle als im Blut.", korrekt: true },
      { nr: 4, text: "Desoxyhämoglobin puffert Protonen besser als Oxyhämoglobin.", korrekt: true },
      { nr: 5, text: "Nur das Bicarbonat-System puffert das Blut; andere Puffer sind irrelevant.", korrekt: false },
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
      "Richtig sind 1–4. Neben dem Bicarbonat-System tragen Hämoglobin, Plasmaproteine und Phosphat wesentlich zur Pufferung bei (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 029 Puffer-Herstellung (leicht) ───
  {
    id: "ch-typk-new3-029",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Herstellung eines Puffers sind richtig?",
    aussagen: [
      { nr: 1, text: "Man kann einen Puffer herstellen, indem man eine schwache Säure teilweise mit einer starken Base neutralisiert.", korrekt: true },
      { nr: 2, text: "Man kann einen Puffer herstellen, indem man eine schwache Säure mit ihrem Natriumsalz mischt.", korrekt: true },
      { nr: 3, text: "Für einen Puffer bei pH 4,75 wählt man Essigsäure (pKa ≈ 4,75) und Natriumacetat.", korrekt: true },
      { nr: 4, text: "Für einen Puffer bei pH 7,4 eignet sich das Phosphatpuffersystem (H₂PO₄⁻/HPO₄²⁻; pKa₂ ≈ 7,2).", korrekt: true },
      { nr: 5, text: "Ein Puffer bei pH 7 kann aus Salzsäure und NaCl hergestellt werden.", korrekt: false },
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
      "Richtig sind 1–4. HCl ist eine starke Säure und NaCl ist neutral; dieses Gemisch puffert nicht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 030 Pufferwirkung berechnen (schwer) ───
  {
    id: "ch-typk-new3-030",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Berechnung des Puffer-pH sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei Zugabe von Säure zu einem Puffer wird die konjugierte Base verbraucht und die Säure gebildet.", korrekt: true },
      { nr: 2, text: "Bei Zugabe von Base wird die schwache Säure verbraucht und die konjugierte Base gebildet.", korrekt: true },
      { nr: 3, text: "Nach Zugabe kann der neue pH mit Henderson-Hasselbalch berechnet werden.", korrekt: true },
      { nr: 4, text: "Die Stoffmengenbilanz muss vor der pH-Berechnung aktualisiert werden.", korrekt: true },
      { nr: 5, text: "Der pH eines Puffers ändert sich nicht, egal wie viel Säure man zugibt.", korrekt: false },
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
      "Richtig sind 1–4. Jeder Puffer hat eine begrenzte Kapazität; bei Überschreitung ändert sich der pH stark (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 031 TRIS-Puffer (mittel) ───
  {
    id: "ch-typk-new3-031",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum TRIS-Puffer sind richtig?",
    aussagen: [
      { nr: 1, text: "TRIS (Tris(hydroxymethyl)aminomethan) ist eine organische Base.", korrekt: true },
      { nr: 2, text: "TRIS-Puffer wird häufig in der Biochemie und Molekularbiologie verwendet.", korrekt: true },
      { nr: 3, text: "Der pKa von TRIS liegt bei etwa 8,1 (bei 25 °C).", korrekt: true },
      { nr: 4, text: "Der TRIS-Puffer ist besonders geeignet für pH-Bereiche um pH 7–9.", korrekt: true },
      { nr: 5, text: "TRIS-Puffer ist temperaturunabhängig.", korrekt: false },
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
      "Richtig sind 1–4. Der pKa von TRIS ist stark temperaturabhängig (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 032 Ammoniak-Puffer (mittel) ───
  {
    id: "ch-typk-new3-032",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Ammoniak-Ammonium-Puffer sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Ammoniak-Puffer besteht aus NH₃ (schwache Base) und NH₄⁺ (konjugierte Säure).", korrekt: true },
      { nr: 2, text: "Der pKb von NH₃ beträgt etwa 4,75; der zugehörige pKa von NH₄⁺ liegt bei etwa 9,25.", korrekt: true },
      { nr: 3, text: "Dieser Puffer puffert am besten um pH ≈ 9,25.", korrekt: true },
      { nr: 4, text: "Zugabe von HCl zu diesem Puffer wandelt NH₃ in NH₄⁺ um.", korrekt: true },
      { nr: 5, text: "NH₃/NH₄⁺-Puffer puffern optimal bei pH 4.", korrekt: false },
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
      "Richtig sind 1–4. Der Pufferbereich liegt um den pKa des NH₄⁺ (≈ 9,25), nicht bei pH 4 (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 033 Puffer in biologischen Systemen (schwer) ───
  {
    id: "ch-typk-new3-033",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Puffern in biologischen Systemen sind richtig?",
    aussagen: [
      { nr: 1, text: "Der Bicarbonat-Puffer ist ein offenes System, weil CO₂ über die Lunge abgeatmet werden kann.", korrekt: true },
      { nr: 2, text: "Das offene System verleiht dem Bicarbonat-Puffer eine größere Kapazität als geschlossene Puffer.", korrekt: true },
      { nr: 3, text: "Intrazellulär dominieren Phosphat- und Proteinpuffer.", korrekt: true },
      { nr: 4, text: "Die Carboanhydrase beschleunigt die Gleichgewichtseinstellung zwischen CO₂ und H₂CO₃.", korrekt: true },
      { nr: 5, text: "Der Blut-pH wird allein durch chemische Puffer geregelt, ohne Beteiligung von Organen.", korrekt: false },
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
      "Richtig sind 1–4. Lunge und Niere sind essenziell für die pH-Regulation; chemische Puffer allein reichen nicht aus (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 034–044: KERNCHEMIE ──────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 034 Isotope (leicht) ───
  {
    id: "ch-typk-new3-034",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Isotopen sind richtig?",
    aussagen: [
      { nr: 1, text: "Isotope eines Elements haben die gleiche Protonenzahl, aber unterschiedliche Neutronenzahlen.", korrekt: true },
      { nr: 2, text: "Isotope haben nahezu identische chemische Eigenschaften.", korrekt: true },
      { nr: 3, text: "Die relative Atommasse eines Elements ist der gewichtete Durchschnitt der Isotopenmassen.", korrekt: true },
      { nr: 4, text: "Kohlenstoff hat die Isotope ¹²C, ¹³C und ¹⁴C.", korrekt: true },
      { nr: 5, text: "Isotope eines Elements haben unterschiedliche Elektronenzahlen.", korrekt: false },
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
      "Richtig sind 1–4. Isotope haben die gleiche Protonenzahl und damit auch die gleiche Elektronenzahl im neutralen Atom (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 035 Radioaktiver Zerfall (leicht) ───
  {
    id: "ch-typk-new3-035",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum radioaktiven Zerfall sind richtig?",
    aussagen: [
      { nr: 1, text: "Beim α-Zerfall wird ein Helium-4-Kern (²He²⁺) emittiert.", korrekt: true },
      { nr: 2, text: "Beim β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt und ein Elektron emittiert.", korrekt: true },
      { nr: 3, text: "Beim γ-Zerfall wird elektromagnetische Strahlung emittiert, ohne dass sich die Nukleonenzahl ändert.", korrekt: true },
      { nr: 4, text: "α-Strahlung hat die geringste Reichweite und wird durch ein Blatt Papier abgeschirmt.", korrekt: true },
      { nr: 5, text: "γ-Strahlung ist leicht durch Papier abschirmbar.", korrekt: false },
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
      "Richtig sind 1–4. γ-Strahlung ist hochenergetische elektromagnetische Strahlung und erfordert dicke Blei- oder Betonabschirmung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 036 Halbwertszeit (leicht) ───
  {
    id: "ch-typk-new3-036",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Halbwertszeit sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Halbwertszeit ist die Zeit, in der die Hälfte der radioaktiven Kerne zerfallen ist.", korrekt: true },
      { nr: 2, text: "Der radioaktive Zerfall folgt einer Kinetik erster Ordnung.", korrekt: true },
      { nr: 3, text: "Nach zwei Halbwertszeiten ist noch ein Viertel der ursprünglichen Menge vorhanden.", korrekt: true },
      { nr: 4, text: "Die Halbwertszeit ist eine stoffspezifische Konstante und von äußeren Bedingungen unabhängig.", korrekt: true },
      { nr: 5, text: "Nach einer Halbwertszeit ist der gesamte radioaktive Stoff zerfallen.", korrekt: false },
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
      "Richtig sind 1–4. Nach einer Halbwertszeit ist nur die Hälfte zerfallen, nicht alles (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 037 Kernspaltung und Kernfusion (mittel) ───
  {
    id: "ch-typk-new3-037",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Kernspaltung und Kernfusion sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Kernspaltung wird ein schwerer Kern (z. B. ²³⁵U) in leichtere Kerne gespalten.", korrekt: true },
      { nr: 2, text: "Bei der Kernfusion verschmelzen leichte Kerne (z. B. Deuterium + Tritium) zu schwereren.", korrekt: true },
      { nr: 3, text: "Beide Prozesse setzen Energie frei, die aus dem Massendefekt stammt (E = mc²).", korrekt: true },
      { nr: 4, text: "Kernspaltung wird in Kernkraftwerken genutzt.", korrekt: true },
      { nr: 5, text: "Kernfusion findet bei Raumtemperatur und -druck statt.", korrekt: false },
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
      "Richtig sind 1–4. Kernfusion erfordert extrem hohe Temperaturen (Millionen Grad), wie sie in der Sonne herrschen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 038 Radiokarbonmethode (mittel) ───
  {
    id: "ch-typk-new3-038",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Radiokarbonmethode (¹⁴C-Datierung) sind richtig?",
    aussagen: [
      { nr: 1, text: "¹⁴C entsteht in der Atmosphäre durch Neutroneneinfang von ¹⁴N.", korrekt: true },
      { nr: 2, text: "¹⁴C wird von Lebewesen aufgenommen und nach dem Tod nicht mehr ersetzt.", korrekt: true },
      { nr: 3, text: "Die Halbwertszeit von ¹⁴C beträgt etwa 5730 Jahre.", korrekt: true },
      { nr: 4, text: "Durch Messung des verbliebenen ¹⁴C-Anteils kann das Alter organischer Proben bestimmt werden.", korrekt: true },
      { nr: 5, text: "Die ¹⁴C-Methode eignet sich zur Datierung von Gesteinen, die Millionen Jahre alt sind.", korrekt: false },
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
      "Richtig sind 1–4. Die ¹⁴C-Methode ist auf etwa 50.000 Jahre begrenzt; für Millionen Jahre alte Proben nutzt man andere Methoden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 039 Strahlenschutz (mittel) ───
  {
    id: "ch-typk-new3-039",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Strahlenschutz sind richtig?",
    aussagen: [
      { nr: 1, text: "Die drei Grundprinzipien des Strahlenschutzes sind: Abstand, Abschirmung, Aufenthaltsdauer.", korrekt: true },
      { nr: 2, text: "Die Dosisleistung nimmt mit dem Quadrat des Abstands ab.", korrekt: true },
      { nr: 3, text: "Blei und Beton sind effektive Abschirmmaterialien für γ-Strahlung.", korrekt: true },
      { nr: 4, text: "Die biologische Wirkung ionisierender Strahlung kann DNA-Schäden verursachen.", korrekt: true },
      { nr: 5, text: "α-Strahlung ist die gefährlichste externe Strahlenquelle.", korrekt: false },
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
      "Richtig sind 1–4. α-Strahlung wird bereits durch die Haut gestoppt und ist extern kaum gefährlich; intern (Inkorporation) ist sie jedoch sehr schädlich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 040 Zerfallsreihe (schwer) ───
  {
    id: "ch-typk-new3-040",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Zerfallsreihen sind richtig?",
    aussagen: [
      { nr: 1, text: "Eine Zerfallsreihe endet mit einem stabilen Isotop (z. B. ²⁰⁶Pb bei der Uran-238-Reihe).", korrekt: true },
      { nr: 2, text: "In einer Zerfallsreihe wechseln sich α- und β-Zerfälle ab.", korrekt: true },
      { nr: 3, text: "Beim α-Zerfall sinkt die Massenzahl um 4 und die Ordnungszahl um 2.", korrekt: true },
      { nr: 4, text: "Beim β⁻-Zerfall steigt die Ordnungszahl um 1 bei gleicher Massenzahl.", korrekt: true },
      { nr: 5, text: "Jeder radioaktive Kern zerfällt sofort nach seiner Entstehung.", korrekt: false },
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
      "Richtig sind 1–4. Der Zerfall ist ein statistischer Prozess; jeder Kern hat eine individuelle Wahrscheinlichkeit zu zerfallen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 041 Medizinische Anwendungen (mittel) ───
  {
    id: "ch-typk-new3-041",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu medizinischen Anwendungen der Kernchemie sind richtig?",
    aussagen: [
      { nr: 1, text: "Technetium-99m wird in der nuklearmedizinischen Diagnostik (z. B. Szintigraphie) eingesetzt.", korrekt: true },
      { nr: 2, text: "Iod-131 wird therapeutisch bei Schilddrüsenerkrankungen eingesetzt.", korrekt: true },
      { nr: 3, text: "PET (Positronen-Emissions-Tomographie) nutzt Positronenstrahler wie ¹⁸F.", korrekt: true },
      { nr: 4, text: "Die Strahlentherapie nutzt ionisierende Strahlung zur Zerstörung von Tumorzellen.", korrekt: true },
      { nr: 5, text: "Radioaktive Tracer haben keinerlei Nebenwirkungen.", korrekt: false },
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
      "Richtig sind 1–4. Auch geringe Strahlenbelastung durch Tracer birgt ein (geringes) Risiko; daher ist das Nutzen-Risiko-Verhältnis abzuwägen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 042 Aktivität und Dosisbegriffe (schwer) ───
  {
    id: "ch-typk-new3-042",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zu Aktivität und Dosisbegriffen sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Aktivität A gibt die Anzahl der Zerfälle pro Zeiteinheit an (Einheit: Becquerel, Bq).", korrekt: true },
      { nr: 2, text: "Die Energiedosis (Gray, Gy) gibt die absorbierte Energie pro Masse an.", korrekt: true },
      { nr: 3, text: "Die Äquivalentdosis (Sievert, Sv) berücksichtigt die biologische Wirksamkeit der Strahlung.", korrekt: true },
      { nr: 4, text: "1 Bq = 1 Zerfall pro Sekunde.", korrekt: true },
      { nr: 5, text: "Becquerel und Gray messen dasselbe.", korrekt: false },
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
      "Richtig sind 1–4. Becquerel misst die Aktivität (Zerfälle/s), Gray die absorbierte Energiedosis (J/kg) — zwei verschiedene Größen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 043 Kernbindungsenergie (schwer) ───
  {
    id: "ch-typk-new3-043",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Kernbindungsenergie sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Kernbindungsenergie ist die Energie, die nötig ist, um einen Kern in seine einzelnen Nukleonen zu zerlegen.", korrekt: true },
      { nr: 2, text: "Die Bindungsenergie pro Nukleon ist bei Eisen-56 am höchsten.", korrekt: true },
      { nr: 3, text: "Der Massendefekt ist die Differenz zwischen der Masse der Einzelnukleonen und der Kernmasse.", korrekt: true },
      { nr: 4, text: "Sowohl Spaltung schwerer als auch Fusion leichter Kerne setzen Energie frei, weil sie zu Kernen mit höherer Bindungsenergie pro Nukleon führen.", korrekt: true },
      { nr: 5, text: "Kerne mit der niedrigsten Bindungsenergie pro Nukleon sind am stabilsten.", korrekt: false },
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
      "Richtig sind 1–4. Kerne mit der höchsten Bindungsenergie pro Nukleon sind am stabilsten (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 044 Natürliche Radioaktivität (leicht) ───
  {
    id: "ch-typk-new3-044",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur natürlichen Radioaktivität sind richtig?",
    aussagen: [
      { nr: 1, text: "Kalium-40 (⁴⁰K) ist ein natürlich vorkommendes radioaktives Isotop in unserer Nahrung.", korrekt: true },
      { nr: 2, text: "Radon (²²²Rn) ist ein radioaktives Edelgas, das aus dem Boden entweicht.", korrekt: true },
      { nr: 3, text: "Die natürliche Hintergrundstrahlung kommt von kosmischer und terrestrischer Strahlung.", korrekt: true },
      { nr: 4, text: "Auch der menschliche Körper enthält radioaktive Isotope (v. a. ⁴⁰K und ¹⁴C).", korrekt: true },
      { nr: 5, text: "Natürliche Radioaktivität existiert nicht; alle Strahlung ist künstlich.", korrekt: false },
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
      "Richtig sind 1–4. Natürliche Radioaktivität ist allgegenwärtig; wir sind ihr ständig ausgesetzt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 045–052: KOMPLEXCHEMIE GRUNDLAGEN ────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 045 Komplexbegriff (leicht) ───
  {
    id: "ch-typk-new3-045",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Komplexverbindungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Ein Komplex besteht aus einem Zentralatom/-ion (meist Übergangsmetall) und Liganden.", korrekt: true },
      { nr: 2, text: "Liganden sind Moleküle oder Ionen, die über freie Elektronenpaare an das Zentralatom koordinieren.", korrekt: true },
      { nr: 3, text: "Die Koordinationszahl gibt die Anzahl der Liganden-Donor-Atome am Zentralatom an.", korrekt: true },
      { nr: 4, text: "Häufige Koordinationszahlen sind 4 (tetraedrisch/quadratisch-planar) und 6 (oktaedrisch).", korrekt: true },
      { nr: 5, text: "Komplexverbindungen kommen nur im Labor vor, nicht in der Natur.", korrekt: false },
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
      "Richtig sind 1–4. Komplexe kommen in der Natur häufig vor, z. B. Hämoglobin (Fe²⁺), Chlorophyll (Mg²⁺), Vitamin B12 (Co³⁺) (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 046 Liganden (mittel) ───
  {
    id: "ch-typk-new3-046",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Liganden sind richtig?",
    aussagen: [
      { nr: 1, text: "Einzähnige Liganden (z. B. H₂O, NH₃, Cl⁻) koordinieren über ein Donoratom.", korrekt: true },
      { nr: 2, text: "Mehrzähnige Liganden (Chelatliganden) koordinieren über mehrere Donoratome (z. B. EDTA).", korrekt: true },
      { nr: 3, text: "Der Chelateffekt bewirkt eine erhöhte Stabilität von Chelatkomplexen gegenüber solchen mit einzähnigen Liganden.", korrekt: true },
      { nr: 4, text: "EDTA ist ein sechszähniger Ligand, der Metallionen sehr stabil bindet.", korrekt: true },
      { nr: 5, text: "Liganden können keine negative Ladung tragen.", korrekt: false },
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
      "Richtig sind 1–4. Viele Liganden sind Anionen, z. B. Cl⁻, CN⁻, OH⁻ (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 047 Biologische Komplexe (mittel) ───
  {
    id: "ch-typk-new3-047",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu biologisch relevanten Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Hämoglobin enthält Fe²⁺ im Porphyrinring (Häm), das O₂ reversibel bindet.", korrekt: true },
      { nr: 2, text: "Chlorophyll enthält Mg²⁺ als Zentralion im Porphyrinring.", korrekt: true },
      { nr: 3, text: "Vitamin B12 (Cobalamin) enthält Co³⁺ als Zentralion.", korrekt: true },
      { nr: 4, text: "Cytochrome enthalten Eisen-Porphyrin-Komplexe und spielen eine Rolle in der Atmungskette.", korrekt: true },
      { nr: 5, text: "Hämoglobin enthält Kupfer als Zentralatom.", korrekt: false },
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
      "Richtig sind 1–4. Hämoglobin enthält Eisen (Fe²⁺), nicht Kupfer; Kupfer findet sich z. B. in Hämocyanin (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 048 Kristallfeldtheorie (schwer) ───
  {
    id: "ch-typk-new3-048",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Kristallfeldtheorie sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Kristallfeldtheorie erklärt die Aufspaltung der d-Orbitale durch die elektrostatische Wechselwirkung mit Liganden.", korrekt: true },
      { nr: 2, text: "Im oktaedrischen Feld werden die d-Orbitale in t₂g und eg aufgespalten.", korrekt: true },
      { nr: 3, text: "Die Farbe vieler Übergangsmetallkomplexe entsteht durch d-d-Übergänge.", korrekt: true },
      { nr: 4, text: "Die spektrochemische Reihe ordnet Liganden nach der Stärke der Aufspaltung.", korrekt: true },
      { nr: 5, text: "Alle Komplexe sind farblos.", korrekt: false },
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
      "Richtig sind 1–4. Viele Komplexe sind farbig (z. B. [Cu(H₂O)₆]²⁺ = blau; 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 049 Nomenklatur Komplexe (mittel) ───
  {
    id: "ch-typk-new3-049",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Nomenklatur von Komplexen sind richtig?",
    aussagen: [
      { nr: 1, text: "Anionische Liganden erhalten die Endung -o (z. B. Chloro für Cl⁻).", korrekt: true },
      { nr: 2, text: "Die Anzahl der Liganden wird mit griechischen Zahlwörtern angegeben (di, tri, tetra usw.).", korrekt: true },
      { nr: 3, text: "Bei anionischen Komplexen erhält das Zentralmetall die Endung -at.", korrekt: true },
      { nr: 4, text: "Die Oxidationsstufe des Zentralmetalls wird in römischen Ziffern angegeben.", korrekt: true },
      { nr: 5, text: "Liganden werden alphabetisch geordnet, nicht nach Ladung.", korrekt: true },
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
      "Alle fünf Aussagen sind richtig. Die IUPAC-Nomenklatur für Komplexe verwendet diese Regeln konsequent.",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 050 Komplexstabilität (schwer) ───
  {
    id: "ch-typk-new3-050",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Komplexstabilität sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Komplexbildungskonstante K_f gibt die Stabilität eines Komplexes an.", korrekt: true },
      { nr: 2, text: "Ein hoher K_f-Wert bedeutet einen stabilen Komplex.", korrekt: true },
      { nr: 3, text: "Der Chelateffekt führt zu einer höheren Komplexstabilität bei mehrzähnigen Liganden.", korrekt: true },
      { nr: 4, text: "EDTA-Komplexe sind besonders stabil und werden zur Schwermetallentgiftung eingesetzt.", korrekt: true },
      { nr: 5, text: "Einzähnige Liganden bilden immer stabilere Komplexe als mehrzähnige.", korrekt: false },
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
      "Richtig sind 1–4. Mehrzähnige Liganden bilden durch den Chelateffekt stabilere Komplexe als einzähnige (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 051 Cisplatin (schwer) ───
  {
    id: "ch-typk-new3-051",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Cisplatin sind richtig?",
    aussagen: [
      { nr: 1, text: "Cisplatin ([PtCl₂(NH₃)₂]) ist ein quadratisch-planarer Platinkomplex.", korrekt: true },
      { nr: 2, text: "Cisplatin wird als Zytostatikum in der Krebstherapie eingesetzt.", korrekt: true },
      { nr: 3, text: "Cisplatin wirkt, indem es an DNA bindet und die Replikation hemmt.", korrekt: true },
      { nr: 4, text: "Die cis-Konfiguration ist für die biologische Wirkung entscheidend; das trans-Isomer ist unwirksam.", korrekt: true },
      { nr: 5, text: "Cisplatin hat keine Nebenwirkungen.", korrekt: false },
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
      "Richtig sind 1–4. Cisplatin hat erhebliche Nebenwirkungen wie Nephrotoxizität, Ototoxizität und Übelkeit (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 052 Übergangsmetalle (mittel) ───
  {
    id: "ch-typk-new3-052",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Übergangsmetallen und Komplexbildung sind richtig?",
    aussagen: [
      { nr: 1, text: "Übergangsmetalle können variable Oxidationsstufen einnehmen.", korrekt: true },
      { nr: 2, text: "Ihre Fähigkeit zur Komplexbildung beruht auf leeren oder teilbesetzten d-Orbitalen.", korrekt: true },
      { nr: 3, text: "Viele Übergangsmetallverbindungen sind farbig wegen d-d-Elektronenübergängen.", korrekt: true },
      { nr: 4, text: "Übergangsmetalle und ihre Verbindungen dienen häufig als Katalysatoren.", korrekt: true },
      { nr: 5, text: "Übergangsmetalle kommen nur in der 4. Periode des Periodensystems vor.", korrekt: false },
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
      "Richtig sind 1–4. Übergangsmetalle kommen in den Perioden 4–7 vor (Nebengruppen; 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 053–063: ANALYTISCHE CHEMIE ──────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 053 Titration Grundbegriffe (leicht) ───
  {
    id: "ch-typk-new3-053",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Titration sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Titration wird eine Lösung bekannter Konzentration (Maßlösung) zur Probe gegeben.", korrekt: true },
      { nr: 2, text: "Der Äquivalenzpunkt ist erreicht, wenn Analyt und Titrant stöchiometrisch umgesetzt sind.", korrekt: true },
      { nr: 3, text: "Indikatoren zeigen den Endpunkt durch einen Farbumschlag an.", korrekt: true },
      { nr: 4, text: "Aus dem verbrauchten Volumen der Maßlösung kann die Konzentration der Probe berechnet werden.", korrekt: true },
      { nr: 5, text: "Der Äquivalenzpunkt und der Endpunkt sind immer identisch.", korrekt: false },
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
      "Richtig sind 1–4. Der Endpunkt (Farbumschlag) liegt oft nahe am, aber nicht exakt beim Äquivalenzpunkt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 054 Säure-Base-Titration (mittel) ───
  {
    id: "ch-typk-new3-054",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Säure-Base-Titration sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Titration einer starken Säure mit einer starken Base liegt der Äquivalenzpunkt bei pH 7.", korrekt: true },
      { nr: 2, text: "Bei der Titration einer schwachen Säure mit einer starken Base liegt der Äquivalenzpunkt über pH 7.", korrekt: true },
      { nr: 3, text: "Phenolphthalein schlägt bei pH 8,2–10 um und eignet sich für die Titration schwacher Säuren.", korrekt: true },
      { nr: 4, text: "Methylorange schlägt bei pH 3,1–4,4 um und eignet sich für die Titration schwacher Basen.", korrekt: true },
      { nr: 5, text: "Bei jeder Säure-Base-Titration liegt der Äquivalenzpunkt bei pH 7.", korrekt: false },
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
      "Richtig sind 1–4. Der Äquivalenzpunkt liegt nur bei starker Säure + starker Base bei pH 7; bei schwachen Säuren oder Basen verschiebt er sich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 055 pH-Indikatoren (leicht) ───
  {
    id: "ch-typk-new3-055",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu pH-Indikatoren sind richtig?",
    aussagen: [
      { nr: 1, text: "pH-Indikatoren sind schwache Säuren oder Basen, deren protonierte und deprotonierte Form verschiedene Farben haben.", korrekt: true },
      { nr: 2, text: "Universalindikator zeigt über einen breiten pH-Bereich verschiedene Farben.", korrekt: true },
      { nr: 3, text: "Lackmus ist rot im Sauren und blau im Basischen.", korrekt: true },
      { nr: 4, text: "pH-Meter messen den pH-Wert elektrochemisch und sind genauer als Indikatoren.", korrekt: true },
      { nr: 5, text: "Jeder Indikator zeigt den exakten pH-Wert einer Lösung an.", korrekt: false },
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
      "Richtig sind 1–4. Indikatoren zeigen nur an, ob der pH in einem bestimmten Bereich liegt; für genaue Werte braucht man ein pH-Meter (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 056 Redox-Titration (mittel) ───
  {
    id: "ch-typk-new3-056",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Redox-Titration sind richtig?",
    aussagen: [
      { nr: 1, text: "Bei der Redox-Titration wird die Stoffmenge eines Oxidations- oder Reduktionsmittels bestimmt.", korrekt: true },
      { nr: 2, text: "Kaliumpermanganat (KMnO₄) dient als eigener Indikator, da es sich bei der Reduktion entfärbt.", korrekt: true },
      { nr: 3, text: "Die Manganometrie nutzt MnO₄⁻ als Oxidationsmittel (z. B. zur Bestimmung von Fe²⁺).", korrekt: true },
      { nr: 4, text: "Am Äquivalenzpunkt sind Oxidations- und Reduktionsmittel stöchiometrisch umgesetzt.", korrekt: true },
      { nr: 5, text: "Redox-Titrationen funktionieren ohne Elektronentransfer.", korrekt: false },
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
      "Richtig sind 1–4. Redox-Titrationen basieren per Definition auf Elektronentransfer (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 057 Gravimetrie (mittel) ───
  {
    id: "ch-typk-new3-057",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur gravimetrischen Analyse sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Gravimetrie bestimmt die Masse eines Analyten durch Fällung und Wägung.", korrekt: true },
      { nr: 2, text: "Der Niederschlag wird filtriert, gewaschen und nach dem Trocknen/Glühen gewogen.", korrekt: true },
      { nr: 3, text: "Sulfat kann gravimetrisch als BaSO₄ bestimmt werden.", korrekt: true },
      { nr: 4, text: "Gravimetrische Methoden können sehr genau sein, sind aber zeitaufwendig.", korrekt: true },
      { nr: 5, text: "Gravimetrie erfordert keine stöchiometrische Reaktion.", korrekt: false },
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
      "Richtig sind 1–4. Gravimetrie erfordert eine quantitative, stöchiometrische Fällungsreaktion (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 058 Chromatographie (mittel) ───
  {
    id: "ch-typk-new3-058",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Chromatographie sind richtig?",
    aussagen: [
      { nr: 1, text: "Chromatographie trennt Stoffgemische durch unterschiedliche Verteilung zwischen stationärer und mobiler Phase.", korrekt: true },
      { nr: 2, text: "In der Dünnschichtchromatographie (DC) ist die stationäre Phase eine dünne Schicht auf einer Platte.", korrekt: true },
      { nr: 3, text: "Der Rf-Wert gibt das Verhältnis der Laufstrecke des Stoffes zur Laufstrecke der Laufmittelfront an.", korrekt: true },
      { nr: 4, text: "Gaschromatographie (GC) trennt verdampfbare Stoffe in der Gasphase.", korrekt: true },
      { nr: 5, text: "Chromatographie funktioniert nur mit flüssigen Proben.", korrekt: false },
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
      "Richtig sind 1–4. Gaschromatographie trennt Gase/Dämpfe; auch feste Proben können nach Lösung/Verdampfung analysiert werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 059 Spektroskopie Grundlagen (schwer) ───
  {
    id: "ch-typk-new3-059",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu spektroskopischen Methoden sind richtig?",
    aussagen: [
      { nr: 1, text: "UV/Vis-Spektroskopie misst die Absorption von Licht im UV- und sichtbaren Bereich.", korrekt: true },
      { nr: 2, text: "Das Lambert-Beer-Gesetz (A = ε · c · d) verknüpft Absorption mit Konzentration.", korrekt: true },
      { nr: 3, text: "IR-Spektroskopie identifiziert funktionelle Gruppen anhand charakteristischer Schwingungen.", korrekt: true },
      { nr: 4, text: "Massenspektrometrie bestimmt die Masse/Ladung (m/z) von Ionen und gibt Hinweise auf die Molmasse.", korrekt: true },
      { nr: 5, text: "Alle Moleküle absorbieren im sichtbaren Bereich.", korrekt: false },
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
      "Richtig sind 1–4. Viele Moleküle absorbieren nur im UV-Bereich und erscheinen farblos (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 060 Komplexometrische Titration (schwer) ───
  {
    id: "ch-typk-new3-060",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur komplexometrischen Titration sind richtig?",
    aussagen: [
      { nr: 1, text: "EDTA bildet mit Metallionen stabile 1:1-Chelatkomplexe.", korrekt: true },
      { nr: 2, text: "Die Bestimmung der Wasserhärte erfolgt durch EDTA-Titration von Ca²⁺ und Mg²⁺.", korrekt: true },
      { nr: 3, text: "Eriochromschwarz T wird als Metallindikator verwendet und ändert seine Farbe von rot nach blau.", korrekt: true },
      { nr: 4, text: "Am Äquivalenzpunkt liegt alles Metall als EDTA-Komplex vor.", korrekt: true },
      { nr: 5, text: "EDTA-Titration kann nur für Alkaliimetalle verwendet werden.", korrekt: false },
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
      "Richtig sind 1–4. EDTA-Titration wird v. a. für Erdalkalimetalle und Übergangsmetalle verwendet, nicht für Alkalimetalle (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 061 Flammenfärbung (leicht) ───
  {
    id: "ch-typk-new3-061",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zur Flammenfärbung sind richtig?",
    aussagen: [
      { nr: 1, text: "Natrium färbt die Flamme intensiv gelb.", korrekt: true },
      { nr: 2, text: "Kalium färbt die Flamme violett.", korrekt: true },
      { nr: 3, text: "Lithium färbt die Flamme karminrot.", korrekt: true },
      { nr: 4, text: "Die Flammenfarbe entsteht durch Elektronenübergänge zwischen Energieniveaus.", korrekt: true },
      { nr: 5, text: "Alle Elemente zeigen eine identische Flammenfärbung.", korrekt: false },
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
      "Richtig sind 1–4. Jedes Element hat eine charakteristische Flammenfärbung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 062 pH-Berechnung (mittel) ───
  {
    id: "ch-typk-new3-062",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur pH-Berechnung sind richtig?",
    aussagen: [
      { nr: 1, text: "Für starke Säuren gilt: pH = −log₁₀(c₀), wenn c₀ die Anfangskonzentration ist.", korrekt: true },
      { nr: 2, text: "Für starke Basen gilt: pOH = −log₁₀(c₀) und pH = 14 − pOH (bei 25 °C).", korrekt: true },
      { nr: 3, text: "Für schwache Säuren kann der pH näherungsweise mit pH = ½ · (pKa − log c₀) berechnet werden.", korrekt: true },
      { nr: 4, text: "Verdünnt man eine starke Säure (c₀ = 0,01 M) zehnfach, steigt der pH um 1.", korrekt: true },
      { nr: 5, text: "Eine 0,1 M NaOH-Lösung hat bei 25 °C einen pH von 1.", korrekt: false },
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
      "Richtig sind 1–4. 0,1 M NaOH hat pOH = 1, also pH = 13 (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 063 Nachweisreaktionen (mittel) ───
  {
    id: "ch-typk-new3-063",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Nachweisreaktionen in der analytischen Chemie sind richtig?",
    aussagen: [
      { nr: 1, text: "Chlorid-Ionen werden mit Silbernitrat als weißer AgCl-Niederschlag nachgewiesen.", korrekt: true },
      { nr: 2, text: "Sulfat-Ionen werden mit Bariumchlorid als weißer BaSO₄-Niederschlag nachgewiesen.", korrekt: true },
      { nr: 3, text: "Stärke wird mit Iod-Kaliumiodid-Lösung (Lugol) blauviolett gefärbt.", korrekt: true },
      { nr: 4, text: "CO₂ trübt Kalkwasser (Ca(OH)₂-Lösung) durch Bildung von CaCO₃.", korrekt: true },
      { nr: 5, text: "Alle Ionen können mit derselben Nachweisreaktion identifiziert werden.", korrekt: false },
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
      "Richtig sind 1–4. Jedes Ion erfordert eine spezifische Nachweisreaktion (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 064–075: UMWELTCHEMIE ────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 064 Treibhauseffekt (leicht) ───
  {
    id: "ch-typk-new3-064",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Treibhauseffekt sind richtig?",
    aussagen: [
      { nr: 1, text: "Treibhausgase (CO₂, CH₄, N₂O, H₂O) absorbieren Infrarotstrahlung und erwärmen die Atmosphäre.", korrekt: true },
      { nr: 2, text: "Der natürliche Treibhauseffekt ist lebensnotwendig und hält die Erde auf ca. 15 °C.", korrekt: true },
      { nr: 3, text: "CO₂ entsteht bei der Verbrennung fossiler Brennstoffe.", korrekt: true },
      { nr: 4, text: "Methan (CH₄) hat pro Molekül ein höheres Treibhauspotenzial als CO₂.", korrekt: true },
      { nr: 5, text: "Der Treibhauseffekt wird allein durch CO₂ verursacht.", korrekt: false },
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
      "Richtig sind 1–4. Mehrere Gase tragen zum Treibhauseffekt bei: CO₂, CH₄, N₂O, H₂O, FCKW (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 065 Ozonschicht (leicht) ───
  {
    id: "ch-typk-new3-065",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zur Ozonschicht sind richtig?",
    aussagen: [
      { nr: 1, text: "Ozon (O₃) in der Stratosphäre absorbiert UV-B- und UV-C-Strahlung.", korrekt: true },
      { nr: 2, text: "FCKW (Fluorchlorkohlenwasserstoffe) setzen in der Stratosphäre Chlorradikale frei, die Ozon zerstören.", korrekt: true },
      { nr: 3, text: "Ein Chlorradikal kann katalytisch tausende Ozonmoleküle zerstören.", korrekt: true },
      { nr: 4, text: "Das Montrealer Protokoll (1987) verbot die Produktion von FCKW.", korrekt: true },
      { nr: 5, text: "Bodennahes Ozon ist für Menschen gesundheitsfördernd.", korrekt: false },
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
      "Richtig sind 1–4. Bodennahes Ozon ist ein Schadstoff und Reizgas, das Atemwege und Pflanzen schädigt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 066 Saurer Regen (mittel) ───
  {
    id: "ch-typk-new3-066",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu saurem Regen sind richtig?",
    aussagen: [
      { nr: 1, text: "SO₂ und NOₓ aus Verbrennungsprozessen reagieren in der Atmosphäre zu Schwefelsäure und Salpetersäure.", korrekt: true },
      { nr: 2, text: "Saurer Regen hat einen pH-Wert unter 5,6.", korrekt: true },
      { nr: 3, text: "Saurer Regen schädigt Wälder, versauert Gewässer und greift Kalkstein an.", korrekt: true },
      { nr: 4, text: "Rauchgasentschwefelung reduziert SO₂-Emissionen.", korrekt: true },
      { nr: 5, text: "Normaler Regen hat einen pH-Wert von 7,0.", korrekt: false },
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
      "Richtig sind 1–4. Normaler Regen hat durch gelöstes CO₂ einen pH von etwa 5,6, nicht 7,0 (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 067 Schwermetalle (mittel) ───
  {
    id: "ch-typk-new3-067",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Schwermetallen in der Umwelt sind richtig?",
    aussagen: [
      { nr: 1, text: "Blei (Pb), Quecksilber (Hg) und Cadmium (Cd) sind besonders toxische Schwermetalle.", korrekt: true },
      { nr: 2, text: "Quecksilber kann sich in Nahrungsketten anreichern (Bioakkumulation), besonders als Methylquecksilber.", korrekt: true },
      { nr: 3, text: "Blei hemmt Enzyme der Hämsynthese und kann zu Anämie führen.", korrekt: true },
      { nr: 4, text: "Cadmium schädigt vor allem Nieren und Knochen bei chronischer Exposition.", korrekt: true },
      { nr: 5, text: "Schwermetalle werden im Körper schnell abgebaut und sind daher ungefährlich.", korrekt: false },
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
      "Richtig sind 1–4. Schwermetalle werden schlecht ausgeschieden und akkumulieren im Körper (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 068 Eutrophierung (mittel) ───
  {
    id: "ch-typk-new3-068",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zur Eutrophierung von Gewässern sind richtig?",
    aussagen: [
      { nr: 1, text: "Eutrophierung wird durch übermäßigen Eintrag von Nährstoffen (Phosphat, Nitrat) verursacht.", korrekt: true },
      { nr: 2, text: "Algenwachstum (Algenblüte) ist eine typische Folge der Eutrophierung.", korrekt: true },
      { nr: 3, text: "Der Abbau toter Algen verbraucht Sauerstoff und kann zum Fischsterben führen.", korrekt: true },
      { nr: 4, text: "Phosphat aus Waschmitteln und Düngemitteln ist eine Hauptquelle.", korrekt: true },
      { nr: 5, text: "Eutrophierung verbessert die Wasserqualität.", korrekt: false },
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
      "Richtig sind 1–4. Eutrophierung verschlechtert die Wasserqualität durch Sauerstoffmangel und Algenblüte (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 069 Wasseraufbereitung (mittel) ───
  {
    id: "ch-typk-new3-069",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zur Wasseraufbereitung sind richtig?",
    aussagen: [
      { nr: 1, text: "Chlorung desinfiziert Trinkwasser durch Abtötung von Keimen.", korrekt: true },
      { nr: 2, text: "Aktivkohlefilter adsorbieren organische Verunreinigungen.", korrekt: true },
      { nr: 3, text: "Flockung mit Aluminiumsulfat entfernt Schwebstoffe.", korrekt: true },
      { nr: 4, text: "Umkehrosmose kann Salz aus Meerwasser entfernen.", korrekt: true },
      { nr: 5, text: "Trinkwasser muss nicht aufbereitet werden, da natürliches Wasser immer rein ist.", korrekt: false },
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
      "Richtig sind 1–4. Natürliches Wasser enthält oft Keime und Verunreinigungen und muss aufbereitet werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 070 Smog (leicht) ───
  {
    id: "ch-typk-new3-070",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Smog sind richtig?",
    aussagen: [
      { nr: 1, text: "Sommersmog (photochemischer Smog) entsteht durch UV-Einstrahlung auf NOₓ und Kohlenwasserstoffe.", korrekt: true },
      { nr: 2, text: "Bodennahes Ozon ist ein Hauptbestandteil des Sommersmogs.", korrekt: true },
      { nr: 3, text: "Wintersmog (London-Smog) entsteht durch SO₂ und Feinstaub bei Inversionswetterlage.", korrekt: true },
      { nr: 4, text: "Katalysatoren in Autos reduzieren die NOₓ- und CO-Emissionen.", korrekt: true },
      { nr: 5, text: "Smog tritt nur in Großstädten tropischer Länder auf.", korrekt: false },
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
      "Richtig sind 1–4. Smog kann weltweit auftreten, auch in gemäßigten Breiten (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 071 Kunststoffe und Umwelt (mittel) ───
  {
    id: "ch-typk-new3-071",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Kunststoffen und Umwelt sind richtig?",
    aussagen: [
      { nr: 1, text: "Die meisten konventionellen Kunststoffe werden aus Erdöl hergestellt.", korrekt: true },
      { nr: 2, text: "Kunststoffe sind in der Natur sehr langlebig und schwer abbaubar.", korrekt: true },
      { nr: 3, text: "Mikroplastik entsteht durch Zerfall größerer Kunststoffteile und gelangt in Gewässer.", korrekt: true },
      { nr: 4, text: "Recycling von Thermoplasten ist grundsätzlich möglich, da sie beim Erwärmen wieder verformbar sind.", korrekt: true },
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
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 072 Düngemittel (mittel) ───
  {
    id: "ch-typk-new3-072",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Düngemitteln sind richtig?",
    aussagen: [
      { nr: 1, text: "NPK-Dünger enthalten Stickstoff, Phosphor und Kalium als Hauptnährstoffe.", korrekt: true },
      { nr: 2, text: "Das Haber-Bosch-Verfahren synthetisiert Ammoniak (NH₃) aus N₂ und H₂ unter hohem Druck und Temperatur.", korrekt: true },
      { nr: 3, text: "Überdüngung kann zur Nitratauswaschung ins Grundwasser führen.", korrekt: true },
      { nr: 4, text: "Ammoniumnitrat (NH₄NO₃) ist ein häufig verwendeter Stickstoffdünger.", korrekt: true },
      { nr: 5, text: "Düngemittel haben keinerlei negative Umweltauswirkungen.", korrekt: false },
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
      "Richtig sind 1–4. Übermäßiger Düngereinsatz kann Eutrophierung und Grundwasserbelastung verursachen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ─── 073 Batterien und Umwelt (leicht) ───
  {
    id: "ch-typk-new3-073",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zu Batterien und Umwelt sind richtig?",
    aussagen: [
      { nr: 1, text: "Batterien und Akkumulatoren enthalten oft Schwermetalle (Cd, Pb, Hg) und sollten fachgerecht entsorgt werden.", korrekt: true },
      { nr: 2, text: "Lithium-Ionen-Akkus sind wiederaufladbar und enthalten Lithium-Verbindungen.", korrekt: true },
      { nr: 3, text: "Recycling von Batterien schont Ressourcen und verhindert Umweltverschmutzung.", korrekt: true },
      { nr: 4, text: "Bleiakkumulatoren werden in Autos als Starterbatterien verwendet.", korrekt: true },
      { nr: 5, text: "Batterien können bedenkenlos im Hausmüll entsorgt werden.", korrekt: false },
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
      "Richtig sind 1–4. Batterien enthalten Schadstoffe und müssen getrennt gesammelt und recycelt werden (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ─── 074 Pestizide (schwer) ───
  {
    id: "ch-typk-new3-074",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zu Pestiziden und Umwelt sind richtig?",
    aussagen: [
      { nr: 1, text: "Pestizide umfassen Herbizide, Insektizide und Fungizide.", korrekt: true },
      { nr: 2, text: "Persistente organische Schadstoffe (POPs) wie DDT akkumulieren in Nahrungsketten.", korrekt: true },
      { nr: 3, text: "Neonicotinoide stehen im Verdacht, Bienenvölker zu schädigen.", korrekt: true },
      { nr: 4, text: "Biologischer Pflanzenschutz nutzt natürliche Feinde statt Chemikalien.", korrekt: true },
      { nr: 5, text: "Alle Pestizide sind vollständig biologisch abbaubar und unbedenklich.", korrekt: false },
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
      "Richtig sind 1–4. Viele Pestizide sind persistent und können ökologische Schäden verursachen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ─── 075 Kohlenstoffkreislauf (schwer) ───
  {
    id: "ch-typk-new3-075",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm: "Welche der folgenden Aussagen zum Kohlenstoffkreislauf sind richtig?",
    aussagen: [
      { nr: 1, text: "Photosynthese fixiert CO₂ aus der Atmosphäre in organische Verbindungen.", korrekt: true },
      { nr: 2, text: "Zellatmung setzt CO₂ durch Oxidation organischer Verbindungen wieder frei.", korrekt: true },
      { nr: 3, text: "Fossile Brennstoffe sind langfristig gespeicherter Kohlenstoff.", korrekt: true },
      { nr: 4, text: "Die Verbrennung fossiler Brennstoffe setzt CO₂ frei und verstärkt den Treibhauseffekt.", korrekt: true },
      { nr: 5, text: "Der Kohlenstoffkreislauf ist ein geschlossener Kreislauf, der durch menschliche Aktivitäten nicht beeinflusst wird.", korrekt: false },
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
      "Richtig sind 1–4. Die Verbrennung fossiler Brennstoffe hat das natürliche Gleichgewicht des Kohlenstoffkreislaufs gestört (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
