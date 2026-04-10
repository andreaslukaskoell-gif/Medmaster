/**
 * Chemie Typ K Neu 4 — 75 Kombinationsaufgaben (IDs ch-typk-new4-001 bis -075).
 * Schwerpunkte: Chemisches Gleichgewicht, Kinetik, Anorganische Verbindungen,
 *               Biochemie Vertiefung, Polymere und Werkstoffe.
 * 5 Aussagen pro Frage, genau 1 korrekte Kombination (A–E).
 * Schwierigkeit: ~30 % leicht (1), ~45 % mittel (2), ~25 % schwer (3).
 * ~10 % Option E = "Alle Aussagen sind richtig".
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const chemieTypKNew4: BMSFrage[] = [
  // ═══════════════════════════════════════════════════════════
  // ─── 001–015: CHEMISCHES GLEICHGEWICHT ────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 001 Gleichgewichtsbegriff (leicht) ───
  {
    id: "ch-typk-new4-001",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum chemischen Gleichgewicht sind richtig?\n\n1. Im chemischen Gleichgewicht sind die Geschwindigkeiten der Hin- und Rückreaktion gleich.\n2. Im Gleichgewicht ändern sich die Konzentrationen der Reaktanten und Produkte nicht mehr.\n3. Das chemische Gleichgewicht ist ein dynamisches Gleichgewicht.\n4. Im Gleichgewicht laufen keine Reaktionen mehr ab.\n5. Die Gleichgewichtskonstante K beschreibt das Verhältnis der Konzentrationen im Gleichgewicht.",
    aussagen: [
      { nr: 1, text: "Im chemischen Gleichgewicht sind die Geschwindigkeiten der Hin- und Rückreaktion gleich.", korrekt: true },
      { nr: 2, text: "Im Gleichgewicht ändern sich die Konzentrationen der Reaktanten und Produkte nicht mehr.", korrekt: true },
      { nr: 3, text: "Das chemische Gleichgewicht ist ein dynamisches Gleichgewicht.", korrekt: true },
      { nr: 4, text: "Im Gleichgewicht laufen keine Reaktionen mehr ab.", korrekt: false },
      { nr: 5, text: "Die Gleichgewichtskonstante K beschreibt das Verhältnis der Konzentrationen im Gleichgewicht.", korrekt: true },
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
      "Richtig sind 1, 2, 3 und 5. Im dynamischen Gleichgewicht laufen Hin- und Rückreaktion weiterhin ab — sie sind nur gleich schnell (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 002 Massenwirkungsgesetz (leicht) ───
  {
    id: "ch-typk-new4-002",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Massenwirkungsgesetz sind richtig?\n\n1. Die Gleichgewichtskonstante Kc ist der Quotient aus Produktkonzentrationen und Eduktkonzentrationen (jeweils potenziert mit den stöchiometrischen Koeffizienten).\n2. Ein großes K (K >> 1) bedeutet, dass das Gleichgewicht auf der Produktseite liegt.\n3. Die Gleichgewichtskonstante ist temperaturabhängig.\n4. Reine Feststoffe und reine Flüssigkeiten werden im Massenwirkungsgesetz nicht berücksichtigt.\n5. Die Gleichgewichtskonstante ändert sich bei Zugabe eines Katalysators.",
    aussagen: [
      { nr: 1, text: "Die Gleichgewichtskonstante Kc ist der Quotient aus Produktkonzentrationen und Eduktkonzentrationen.", korrekt: true },
      { nr: 2, text: "Ein großes K (K >> 1) bedeutet, dass das Gleichgewicht auf der Produktseite liegt.", korrekt: true },
      { nr: 3, text: "Die Gleichgewichtskonstante ist temperaturabhängig.", korrekt: true },
      { nr: 4, text: "Reine Feststoffe und reine Flüssigkeiten werden im Massenwirkungsgesetz nicht berücksichtigt.", korrekt: true },
      { nr: 5, text: "Die Gleichgewichtskonstante ändert sich bei Zugabe eines Katalysators.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ein Katalysator beschleunigt beide Reaktionsrichtungen gleichermaßen und verändert K nicht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 003 Le Chatelier Temperatur (mittel) ───
  {
    id: "ch-typk-new4-003",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Prinzip von Le Chatelier und Temperaturänderungen sind richtig?\n\n1. Bei einer exothermen Reaktion verschiebt Temperaturerhöhung das Gleichgewicht zur Eduktseite.\n2. Bei einer endothermen Reaktion verschiebt Temperaturerhöhung das Gleichgewicht zur Produktseite.\n3. Temperaturänderungen verändern den Wert der Gleichgewichtskonstanten K.\n4. Das Prinzip von Le Chatelier besagt, dass ein System einer Störung entgegenwirkt.\n5. Temperaturerhöhung verschiebt das Gleichgewicht immer zur Produktseite.",
    aussagen: [
      { nr: 1, text: "Bei einer exothermen Reaktion verschiebt Temperaturerhöhung das Gleichgewicht zur Eduktseite.", korrekt: true },
      { nr: 2, text: "Bei einer endothermen Reaktion verschiebt Temperaturerhöhung das Gleichgewicht zur Produktseite.", korrekt: true },
      { nr: 3, text: "Temperaturänderungen verändern den Wert der Gleichgewichtskonstanten K.", korrekt: true },
      { nr: 4, text: "Das Prinzip von Le Chatelier besagt, dass ein System einer Störung entgegenwirkt.", korrekt: true },
      { nr: 5, text: "Temperaturerhöhung verschiebt das Gleichgewicht immer zur Produktseite.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Richtung der Verschiebung bei Temperaturerhöhung hängt davon ab, ob die Reaktion exo- oder endotherm ist (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 004 Le Chatelier Druck (mittel) ───
  {
    id: "ch-typk-new4-004",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Prinzip von Le Chatelier und Druckänderungen sind richtig?\n\n1. Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasmolekülen.\n2. Das Prinzip gilt nur für Reaktionen, bei denen sich die Gesamtzahl der Gasmoleküle ändert.\n3. Die Gleichgewichtskonstante Kp ändert sich durch Druckänderung nicht.\n4. Bei der Ammoniaksynthese (N₂ + 3 H₂ ⇌ 2 NH₃) begünstigt hoher Druck die Produktbildung.\n5. Druckerhöhung verändert immer die Gleichgewichtskonstante K.",
    aussagen: [
      { nr: 1, text: "Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasmolekülen.", korrekt: true },
      { nr: 2, text: "Das Prinzip gilt nur für Reaktionen, bei denen sich die Gesamtzahl der Gasmoleküle ändert.", korrekt: true },
      { nr: 3, text: "Die Gleichgewichtskonstante Kp ändert sich durch Druckänderung nicht.", korrekt: true },
      { nr: 4, text: "Bei der Ammoniaksynthese (N₂ + 3 H₂ ⇌ 2 NH₃) begünstigt hoher Druck die Produktbildung.", korrekt: true },
      { nr: 5, text: "Druckerhöhung verändert immer die Gleichgewichtskonstante K.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Gleichgewichtskonstante K wird nur durch Temperatur verändert, nicht durch Druck (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 005 Le Chatelier Konzentration (leicht) ───
  {
    id: "ch-typk-new4-005",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Prinzip von Le Chatelier und Konzentrationsänderungen sind richtig?\n\n1. Zugabe eines Edukts verschiebt das Gleichgewicht zur Produktseite.\n2. Entfernung eines Produkts verschiebt das Gleichgewicht ebenfalls zur Produktseite.\n3. Der Wert der Gleichgewichtskonstanten K ändert sich durch Konzentrationsänderung nicht.\n4. Das System reagiert auf die Störung, bis ein neues Gleichgewicht erreicht ist.\n5. Zugabe eines Produkts verschiebt das Gleichgewicht zur Produktseite.",
    aussagen: [
      { nr: 1, text: "Zugabe eines Edukts verschiebt das Gleichgewicht zur Produktseite.", korrekt: true },
      { nr: 2, text: "Entfernung eines Produkts verschiebt das Gleichgewicht ebenfalls zur Produktseite.", korrekt: true },
      { nr: 3, text: "Der Wert der Gleichgewichtskonstanten K ändert sich durch Konzentrationsänderung nicht.", korrekt: true },
      { nr: 4, text: "Das System reagiert auf die Störung, bis ein neues Gleichgewicht erreicht ist.", korrekt: true },
      { nr: 5, text: "Zugabe eines Produkts verschiebt das Gleichgewicht zur Produktseite.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Zugabe eines Produkts verschiebt das Gleichgewicht zur Eduktseite, nicht zur Produktseite (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 006 Kp und Kc (mittel) ───
  {
    id: "ch-typk-new4-006",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Beziehung zwischen Kp und Kc sind richtig?\n\n1. Kp verwendet Partialdrücke, Kc verwendet molare Konzentrationen.\n2. Die Beziehung lautet: Kp = Kc × (RT)^Δn, wobei Δn die Änderung der Molzahl gasförmiger Spezies ist.\n3. Wenn Δn = 0 ist, sind Kp und Kc numerisch gleich.\n4. R ist die universelle Gaskonstante und T die absolute Temperatur in Kelvin.\n5. Kp und Kc sind immer gleich, unabhängig von der Reaktion.",
    aussagen: [
      { nr: 1, text: "Kp verwendet Partialdrücke, Kc verwendet molare Konzentrationen.", korrekt: true },
      { nr: 2, text: "Die Beziehung lautet: Kp = Kc × (RT)^Δn, wobei Δn die Änderung der Molzahl gasförmiger Spezies ist.", korrekt: true },
      { nr: 3, text: "Wenn Δn = 0 ist, sind Kp und Kc numerisch gleich.", korrekt: true },
      { nr: 4, text: "R ist die universelle Gaskonstante und T die absolute Temperatur in Kelvin.", korrekt: true },
      { nr: 5, text: "Kp und Kc sind immer gleich, unabhängig von der Reaktion.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Kp und Kc sind nur gleich, wenn Δn = 0; ansonsten unterscheiden sie sich (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 007 Löslichkeitsprodukt (schwer) ───
  {
    id: "ch-typk-new4-007",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Löslichkeitsprodukt (KL) sind richtig?\n\n1. Das Löslichkeitsprodukt ist die Gleichgewichtskonstante für die Auflösung eines schwerlöslichen Salzes.\n2. Wird das Ionenprodukt Q > KL, fällt der Feststoff aus.\n3. Der Gleichioneneffekt verringert die Löslichkeit eines Salzes.\n4. Das Löslichkeitsprodukt ist temperaturabhängig.\n5. Das Löslichkeitsprodukt gilt auch für gut lösliche Salze wie NaCl.",
    aussagen: [
      { nr: 1, text: "Das Löslichkeitsprodukt ist die Gleichgewichtskonstante für die Auflösung eines schwerlöslichen Salzes.", korrekt: true },
      { nr: 2, text: "Wird das Ionenprodukt Q > KL, fällt der Feststoff aus.", korrekt: true },
      { nr: 3, text: "Der Gleichioneneffekt verringert die Löslichkeit eines Salzes.", korrekt: true },
      { nr: 4, text: "Das Löslichkeitsprodukt ist temperaturabhängig.", korrekt: true },
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
      "Richtig sind 1–4. Das Löslichkeitsprodukt-Konzept ist nur für schwerlösliche Salze sinnvoll anwendbar (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 008 Haber-Bosch-Verfahren (mittel) ───
  {
    id: "ch-typk-new4-008",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Haber-Bosch-Verfahren sind richtig?\n\n1. Die Reaktion N₂ + 3 H₂ ⇌ 2 NH₃ ist exotherm.\n2. Hoher Druck (200–300 bar) begünstigt die Ammoniakbildung.\n3. Niedrige Temperatur begünstigt thermodynamisch die Ammoniakbildung.\n4. Eisenkatalysatoren werden verwendet, um die Reaktion kinetisch zu beschleunigen.\n5. Der optimale Kompromiss liegt bei ca. 450 °C, da die Reaktion sonst zu langsam wäre.",
    aussagen: [
      { nr: 1, text: "Die Reaktion N₂ + 3 H₂ ⇌ 2 NH₃ ist exotherm.", korrekt: true },
      { nr: 2, text: "Hoher Druck (200–300 bar) begünstigt die Ammoniakbildung.", korrekt: true },
      { nr: 3, text: "Niedrige Temperatur begünstigt thermodynamisch die Ammoniakbildung.", korrekt: true },
      { nr: 4, text: "Eisenkatalysatoren werden verwendet, um die Reaktion kinetisch zu beschleunigen.", korrekt: true },
      { nr: 5, text: "Der optimale Kompromiss liegt bei ca. 450 °C, da die Reaktion sonst zu langsam wäre.", korrekt: true },
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
      "Alle fünf Aussagen sind korrekt. Das Haber-Bosch-Verfahren ist ein klassisches Beispiel für den Kompromiss zwischen thermodynamischer Begünstigung und kinetischer Machbarkeit.",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 009 Reaktionsquotient Q (schwer) ───
  {
    id: "ch-typk-new4-009",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Reaktionsquotienten Q sind richtig?\n\n1. Q hat die gleiche mathematische Form wie K, wird aber für beliebige Konzentrationen berechnet.\n2. Wenn Q < K, verläuft die Nettoreaktion in Richtung der Produkte.\n3. Wenn Q > K, verläuft die Nettoreaktion in Richtung der Edukte.\n4. Wenn Q = K, befindet sich das System im Gleichgewicht.\n5. Q ist immer gleich K, unabhängig vom Zustand des Systems.",
    aussagen: [
      { nr: 1, text: "Q hat die gleiche mathematische Form wie K, wird aber für beliebige Konzentrationen berechnet.", korrekt: true },
      { nr: 2, text: "Wenn Q < K, verläuft die Nettoreaktion in Richtung der Produkte.", korrekt: true },
      { nr: 3, text: "Wenn Q > K, verläuft die Nettoreaktion in Richtung der Edukte.", korrekt: true },
      { nr: 4, text: "Wenn Q = K, befindet sich das System im Gleichgewicht.", korrekt: true },
      { nr: 5, text: "Q ist immer gleich K, unabhängig vom Zustand des Systems.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Q ist nur im Gleichgewicht gleich K; in allen anderen Zuständen weicht Q von K ab (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 010 Van 't Hoff-Gleichung (schwer) ───
  {
    id: "ch-typk-new4-010",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Van 't Hoff-Gleichung sind richtig?\n\n1. Die Van 't Hoff-Gleichung beschreibt die Temperaturabhängigkeit der Gleichgewichtskonstanten.\n2. Für exotherme Reaktionen nimmt K mit steigender Temperatur ab.\n3. Für endotherme Reaktionen nimmt K mit steigender Temperatur zu.\n4. Die Gleichung enthält die Standardreaktionsenthalpie ΔH° als Parameter.\n5. Die Van 't Hoff-Gleichung gilt nur für Gasreaktionen.",
    aussagen: [
      { nr: 1, text: "Die Van 't Hoff-Gleichung beschreibt die Temperaturabhängigkeit der Gleichgewichtskonstanten.", korrekt: true },
      { nr: 2, text: "Für exotherme Reaktionen nimmt K mit steigender Temperatur ab.", korrekt: true },
      { nr: 3, text: "Für endotherme Reaktionen nimmt K mit steigender Temperatur zu.", korrekt: true },
      { nr: 4, text: "Die Gleichung enthält die Standardreaktionsenthalpie ΔH° als Parameter.", korrekt: true },
      { nr: 5, text: "Die Van 't Hoff-Gleichung gilt nur für Gasreaktionen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Van 't Hoff-Gleichung ist allgemein gültig und nicht auf Gasreaktionen beschränkt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 011 Katalysator und Gleichgewicht (leicht) ───
  {
    id: "ch-typk-new4-011",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Katalysatoren und Gleichgewicht sind richtig?\n\n1. Ein Katalysator beschleunigt die Einstellung des Gleichgewichts.\n2. Ein Katalysator verändert die Gleichgewichtslage nicht.\n3. Ein Katalysator senkt die Aktivierungsenergie für Hin- und Rückreaktion gleichermaßen.\n4. Ein Katalysator geht unverändert aus der Reaktion hervor.\n5. Ein Katalysator verschiebt das Gleichgewicht zugunsten der Produkte.",
    aussagen: [
      { nr: 1, text: "Ein Katalysator beschleunigt die Einstellung des Gleichgewichts.", korrekt: true },
      { nr: 2, text: "Ein Katalysator verändert die Gleichgewichtslage nicht.", korrekt: true },
      { nr: 3, text: "Ein Katalysator senkt die Aktivierungsenergie für Hin- und Rückreaktion gleichermaßen.", korrekt: true },
      { nr: 4, text: "Ein Katalysator geht unverändert aus der Reaktion hervor.", korrekt: true },
      { nr: 5, text: "Ein Katalysator verschiebt das Gleichgewicht zugunsten der Produkte.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ein Katalysator beschleunigt die Einstellung des Gleichgewichts, verschiebt es aber nicht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 012 Heterogenes Gleichgewicht (mittel) ───
  {
    id: "ch-typk-new4-012",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum heterogenen Gleichgewicht sind richtig?\n\n1. Bei heterogenen Gleichgewichten liegen Reaktionspartner in verschiedenen Phasen vor.\n2. Die Konzentration reiner Feststoffe wird als konstant angenommen und in K nicht aufgenommen.\n3. Beispiel: CaCO₃(s) ⇌ CaO(s) + CO₂(g), mit K = p(CO₂).\n4. Die Aktivität reiner Feststoffe und Flüssigkeiten wird gleich 1 gesetzt.\n5. Heterogene Gleichgewichte sind nicht vom Prinzip von Le Chatelier betroffen.",
    aussagen: [
      { nr: 1, text: "Bei heterogenen Gleichgewichten liegen Reaktionspartner in verschiedenen Phasen vor.", korrekt: true },
      { nr: 2, text: "Die Konzentration reiner Feststoffe wird als konstant angenommen und in K nicht aufgenommen.", korrekt: true },
      { nr: 3, text: "Beispiel: CaCO₃(s) ⇌ CaO(s) + CO₂(g), mit K = p(CO₂).", korrekt: true },
      { nr: 4, text: "Die Aktivität reiner Feststoffe und Flüssigkeiten wird gleich 1 gesetzt.", korrekt: true },
      { nr: 5, text: "Heterogene Gleichgewichte sind nicht vom Prinzip von Le Chatelier betroffen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Le Chatelier gilt ebenso für heterogene Gleichgewichte (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 013 Gleichgewicht in der Biologie (leicht) ───
  {
    id: "ch-typk-new4-013",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Gleichgewichtsreaktionen in biologischen Systemen sind richtig?\n\n1. Viele Enzymreaktionen katalysieren Gleichgewichtsreaktionen.\n2. Biologische Systeme halten sich oft fern vom thermodynamischen Gleichgewicht.\n3. Die Kopplung an ATP-Hydrolyse kann ungünstige Reaktionen antreiben.\n4. Das Fließgleichgewicht (steady state) in Zellen unterscheidet sich vom thermodynamischen Gleichgewicht.\n5. Lebende Zellen befinden sich stets im thermodynamischen Gleichgewicht.",
    aussagen: [
      { nr: 1, text: "Viele Enzymreaktionen katalysieren Gleichgewichtsreaktionen.", korrekt: true },
      { nr: 2, text: "Biologische Systeme halten sich oft fern vom thermodynamischen Gleichgewicht.", korrekt: true },
      { nr: 3, text: "Die Kopplung an ATP-Hydrolyse kann ungünstige Reaktionen antreiben.", korrekt: true },
      { nr: 4, text: "Das Fließgleichgewicht (steady state) in Zellen unterscheidet sich vom thermodynamischen Gleichgewicht.", korrekt: true },
      { nr: 5, text: "Lebende Zellen befinden sich stets im thermodynamischen Gleichgewicht.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Lebende Zellen befinden sich im Fließgleichgewicht, nicht im thermodynamischen Gleichgewicht — Tod = thermodynamisches Gleichgewicht (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 014 Estergleichgewicht (mittel) ───
  {
    id: "ch-typk-new4-014",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Veresterung als Gleichgewichtsreaktion sind richtig?\n\n1. Die Veresterung ist eine Gleichgewichtsreaktion: Carbonsäure + Alkohol ⇌ Ester + Wasser.\n2. Durch Entfernen des Wassers kann die Ausbeute an Ester erhöht werden.\n3. Ein Überschuss an Alkohol oder Säure verschiebt das Gleichgewicht zur Produktseite.\n4. Säurekatalyse (z. B. H₂SO₄) beschleunigt die Gleichgewichtseinstellung.\n5. Die Gleichgewichtskonstante der Veresterung ist stets K = 1.",
    aussagen: [
      { nr: 1, text: "Die Veresterung ist eine Gleichgewichtsreaktion: Carbonsäure + Alkohol ⇌ Ester + Wasser.", korrekt: true },
      { nr: 2, text: "Durch Entfernen des Wassers kann die Ausbeute an Ester erhöht werden.", korrekt: true },
      { nr: 3, text: "Ein Überschuss an Alkohol oder Säure verschiebt das Gleichgewicht zur Produktseite.", korrekt: true },
      { nr: 4, text: "Säurekatalyse (z. B. H₂SO₄) beschleunigt die Gleichgewichtseinstellung.", korrekt: true },
      { nr: 5, text: "Die Gleichgewichtskonstante der Veresterung ist stets K = 1.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. K hängt von den konkreten Reaktionspartnern ab und ist nicht immer 1 (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 015 Gibbs-Energie und Gleichgewicht (schwer) ───
  {
    id: "ch-typk-new4-015",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Beziehung zwischen Gibbs-Energie und Gleichgewichtskonstante sind richtig?\n\n1. ΔG° = −RT ln K ist die Beziehung zwischen freier Standardenthalpie und Gleichgewichtskonstante.\n2. Bei K > 1 ist ΔG° negativ, die Reaktion ist unter Standardbedingungen freiwillig.\n3. Bei K < 1 ist ΔG° positiv.\n4. Im Gleichgewicht ist ΔG = 0 (nicht ΔG°).\n5. ΔG° = 0 bedeutet, dass die Reaktion nicht ablaufen kann.",
    aussagen: [
      { nr: 1, text: "ΔG° = −RT ln K ist die Beziehung zwischen freier Standardenthalpie und Gleichgewichtskonstante.", korrekt: true },
      { nr: 2, text: "Bei K > 1 ist ΔG° negativ, die Reaktion ist unter Standardbedingungen freiwillig.", korrekt: true },
      { nr: 3, text: "Bei K < 1 ist ΔG° positiv.", korrekt: true },
      { nr: 4, text: "Im Gleichgewicht ist ΔG = 0 (nicht ΔG°).", korrekt: true },
      { nr: 5, text: "ΔG° = 0 bedeutet, dass die Reaktion nicht ablaufen kann.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. ΔG° = 0 bedeutet K = 1, also liegen Edukte und Produkte im Gleichgewicht etwa gleich vor — die Reaktion läuft durchaus ab (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 016–030: KINETIK ─────────────────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 016 Reaktionsgeschwindigkeit (leicht) ───
  {
    id: "ch-typk-new4-016",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Reaktionsgeschwindigkeit sind richtig?\n\n1. Die Reaktionsgeschwindigkeit beschreibt die Konzentrationsänderung pro Zeiteinheit.\n2. Die Reaktionsgeschwindigkeit nimmt in der Regel mit steigender Temperatur zu.\n3. Katalysatoren erhöhen die Reaktionsgeschwindigkeit, ohne selbst verbraucht zu werden.\n4. Die Reaktionsgeschwindigkeit hängt von der Konzentration der Reaktanten ab.\n5. Die Reaktionsgeschwindigkeit ist immer konstant während der gesamten Reaktion.",
    aussagen: [
      { nr: 1, text: "Die Reaktionsgeschwindigkeit beschreibt die Konzentrationsänderung pro Zeiteinheit.", korrekt: true },
      { nr: 2, text: "Die Reaktionsgeschwindigkeit nimmt in der Regel mit steigender Temperatur zu.", korrekt: true },
      { nr: 3, text: "Katalysatoren erhöhen die Reaktionsgeschwindigkeit, ohne selbst verbraucht zu werden.", korrekt: true },
      { nr: 4, text: "Die Reaktionsgeschwindigkeit hängt von der Konzentration der Reaktanten ab.", korrekt: true },
      { nr: 5, text: "Die Reaktionsgeschwindigkeit ist immer konstant während der gesamten Reaktion.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Reaktionsgeschwindigkeit ändert sich im Verlauf der Reaktion, da die Eduktkonzentrationen abnehmen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 017 Reaktionsordnung (mittel) ───
  {
    id: "ch-typk-new4-017",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Reaktionsordnung sind richtig?\n\n1. Die Reaktionsordnung gibt an, wie die Reaktionsgeschwindigkeit von den Konzentrationen abhängt.\n2. Bei einer Reaktion 1. Ordnung ist die Halbwertszeit unabhängig von der Anfangskonzentration.\n3. Bei einer Reaktion 2. Ordnung verdoppelt sich die Geschwindigkeit bei Verdopplung der Konzentration.\n4. Die Reaktionsordnung kann experimentell bestimmt werden und muss nicht ganzzahlig sein.\n5. Die Reaktionsordnung lässt sich immer direkt aus der stöchiometrischen Gleichung ablesen.",
    aussagen: [
      { nr: 1, text: "Die Reaktionsordnung gibt an, wie die Reaktionsgeschwindigkeit von den Konzentrationen abhängt.", korrekt: true },
      { nr: 2, text: "Bei einer Reaktion 1. Ordnung ist die Halbwertszeit unabhängig von der Anfangskonzentration.", korrekt: true },
      { nr: 3, text: "Bei einer Reaktion 2. Ordnung verdoppelt sich die Geschwindigkeit bei Verdopplung der Konzentration.", korrekt: false },
      { nr: 4, text: "Die Reaktionsordnung kann experimentell bestimmt werden und muss nicht ganzzahlig sein.", korrekt: true },
      { nr: 5, text: "Die Reaktionsordnung lässt sich immer direkt aus der stöchiometrischen Gleichung ablesen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2 und 4. Bei 2. Ordnung vervierfacht sich die Geschwindigkeit bei Verdopplung (3 falsch). Die Ordnung muss experimentell bestimmt werden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 018 Arrhenius-Gleichung (mittel) ───
  {
    id: "ch-typk-new4-018",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Arrhenius-Gleichung sind richtig?\n\n1. Die Arrhenius-Gleichung lautet: k = A × e^(−Ea/RT).\n2. A ist der Frequenzfaktor (prä-exponentieller Faktor).\n3. Ea ist die Aktivierungsenergie der Reaktion.\n4. Eine höhere Temperatur führt zu einem größeren Geschwindigkeitskonstanten k.\n5. Die Arrhenius-Gleichung sagt voraus, dass alle Reaktionen bei 0 K mit maximaler Geschwindigkeit ablaufen.",
    aussagen: [
      { nr: 1, text: "Die Arrhenius-Gleichung lautet: k = A × e^(−Ea/RT).", korrekt: true },
      { nr: 2, text: "A ist der Frequenzfaktor (prä-exponentieller Faktor).", korrekt: true },
      { nr: 3, text: "Ea ist die Aktivierungsenergie der Reaktion.", korrekt: true },
      { nr: 4, text: "Eine höhere Temperatur führt zu einem größeren Geschwindigkeitskonstanten k.", korrekt: true },
      { nr: 5, text: "Die Arrhenius-Gleichung sagt voraus, dass alle Reaktionen bei 0 K mit maximaler Geschwindigkeit ablaufen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei 0 K wird k praktisch null (e^(−Ea/0) → 0), da kein Molekül genug Energie hat (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 019 Aktivierungsenergie (leicht) ───
  {
    id: "ch-typk-new4-019",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Aktivierungsenergie sind richtig?\n\n1. Die Aktivierungsenergie ist die Mindestenergie, die Reaktanten benötigen, um zu reagieren.\n2. Ein Katalysator senkt die Aktivierungsenergie.\n3. Die Aktivierungsenergie beeinflusst die Geschwindigkeit, nicht das Gleichgewicht.\n4. Im Energiediagramm entspricht die Aktivierungsenergie der Energiedifferenz zwischen Edukten und Übergangszustand.\n5. Exotherme Reaktionen haben keine Aktivierungsenergie.",
    aussagen: [
      { nr: 1, text: "Die Aktivierungsenergie ist die Mindestenergie, die Reaktanten benötigen, um zu reagieren.", korrekt: true },
      { nr: 2, text: "Ein Katalysator senkt die Aktivierungsenergie.", korrekt: true },
      { nr: 3, text: "Die Aktivierungsenergie beeinflusst die Geschwindigkeit, nicht das Gleichgewicht.", korrekt: true },
      { nr: 4, text: "Im Energiediagramm entspricht die Aktivierungsenergie der Energiedifferenz zwischen Edukten und Übergangszustand.", korrekt: true },
      { nr: 5, text: "Exotherme Reaktionen haben keine Aktivierungsenergie.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Auch exotherme Reaktionen haben eine Aktivierungsenergie — sonst würden sie sofort spontan ablaufen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 020 Enzymkinetik (mittel) ───
  {
    id: "ch-typk-new4-020",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Enzymkinetik sind richtig?\n\n1. Die Michaelis-Menten-Gleichung beschreibt die Abhängigkeit der Reaktionsgeschwindigkeit von der Substratkonzentration.\n2. Km ist die Substratkonzentration, bei der die halbe Maximalgeschwindigkeit (Vmax/2) erreicht wird.\n3. Ein niedriger Km-Wert bedeutet eine hohe Substrataffinität des Enzyms.\n4. Bei hoher Substratkonzentration nähert sich die Geschwindigkeit der Vmax (Sättigungskinetik).\n5. Enzyme verändern die Gleichgewichtslage einer Reaktion.",
    aussagen: [
      { nr: 1, text: "Die Michaelis-Menten-Gleichung beschreibt die Abhängigkeit der Reaktionsgeschwindigkeit von der Substratkonzentration.", korrekt: true },
      { nr: 2, text: "Km ist die Substratkonzentration, bei der die halbe Maximalgeschwindigkeit (Vmax/2) erreicht wird.", korrekt: true },
      { nr: 3, text: "Ein niedriger Km-Wert bedeutet eine hohe Substrataffinität des Enzyms.", korrekt: true },
      { nr: 4, text: "Bei hoher Substratkonzentration nähert sich die Geschwindigkeit der Vmax (Sättigungskinetik).", korrekt: true },
      { nr: 5, text: "Enzyme verändern die Gleichgewichtslage einer Reaktion.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Enzyme beschleunigen die Gleichgewichtseinstellung, verändern aber nicht die Gleichgewichtslage (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 021 Enzymhemmung (schwer) ───
  {
    id: "ch-typk-new4-021",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Enzymhemmung sind richtig?\n\n1. Ein kompetitiver Inhibitor konkurriert mit dem Substrat um das aktive Zentrum.\n2. Kompetitive Hemmung erhöht den Km-Wert, lässt Vmax unverändert.\n3. Nichtkompetitive Hemmung verringert Vmax, lässt Km unverändert.\n4. Irreversible Inhibitoren binden kovalent und inaktivieren das Enzym dauerhaft.\n5. Kompetitive Hemmung kann durch Substraterhöhung nicht überwunden werden.",
    aussagen: [
      { nr: 1, text: "Ein kompetitiver Inhibitor konkurriert mit dem Substrat um das aktive Zentrum.", korrekt: true },
      { nr: 2, text: "Kompetitive Hemmung erhöht den Km-Wert, lässt Vmax unverändert.", korrekt: true },
      { nr: 3, text: "Nichtkompetitive Hemmung verringert Vmax, lässt Km unverändert.", korrekt: true },
      { nr: 4, text: "Irreversible Inhibitoren binden kovalent und inaktivieren das Enzym dauerhaft.", korrekt: true },
      { nr: 5, text: "Kompetitive Hemmung kann durch Substraterhöhung nicht überwunden werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Kompetitive Hemmung kann durch hohe Substratkonzentration überwunden werden, da das Substrat den Inhibitor verdrängt (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 022 RGT-Regel (leicht) ───
  {
    id: "ch-typk-new4-022",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur RGT-Regel (Reaktionsgeschwindigkeit-Temperatur-Regel) sind richtig?\n\n1. Die RGT-Regel besagt, dass sich die Reaktionsgeschwindigkeit pro 10 °C Temperaturerhöhung etwa verdoppelt bis verdreifacht.\n2. Die RGT-Regel ist eine Faustregel und gilt nicht exakt.\n3. Der Temperaturkoeffizient Q₁₀ liegt typischerweise zwischen 2 und 3.\n4. Die Beschleunigung beruht darauf, dass mehr Teilchen die Aktivierungsenergie überschreiten.\n5. Die RGT-Regel besagt, dass Reaktionen bei jeder Temperaturerhöhung um genau den Faktor 10 schneller werden.",
    aussagen: [
      { nr: 1, text: "Die RGT-Regel besagt, dass sich die Reaktionsgeschwindigkeit pro 10 °C Temperaturerhöhung etwa verdoppelt bis verdreifacht.", korrekt: true },
      { nr: 2, text: "Die RGT-Regel ist eine Faustregel und gilt nicht exakt.", korrekt: true },
      { nr: 3, text: "Der Temperaturkoeffizient Q₁₀ liegt typischerweise zwischen 2 und 3.", korrekt: true },
      { nr: 4, text: "Die Beschleunigung beruht darauf, dass mehr Teilchen die Aktivierungsenergie überschreiten.", korrekt: true },
      { nr: 5, text: "Die RGT-Regel besagt, dass Reaktionen bei jeder Temperaturerhöhung um genau den Faktor 10 schneller werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die RGT-Regel sagt eine Verdopplung bis Verdreifachung pro 10 °C voraus, nicht Faktor 10 (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 023 Homogene/heterogene Katalyse (mittel) ───
  {
    id: "ch-typk-new4-023",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur homogenen und heterogenen Katalyse sind richtig?\n\n1. Bei der homogenen Katalyse befinden sich Katalysator und Reaktanten in derselben Phase.\n2. Bei der heterogenen Katalyse liegt der Katalysator in einer anderen Phase als die Reaktanten.\n3. Enzyme sind Biokatalysatoren, die meist homogene Katalyse in wässriger Lösung durchführen.\n4. Heterogene Katalyse spielt z. B. im Autoabgaskatalysator eine Rolle.\n5. Katalysatoren werden bei der Reaktion irreversibel verbraucht.",
    aussagen: [
      { nr: 1, text: "Bei der homogenen Katalyse befinden sich Katalysator und Reaktanten in derselben Phase.", korrekt: true },
      { nr: 2, text: "Bei der heterogenen Katalyse liegt der Katalysator in einer anderen Phase als die Reaktanten.", korrekt: true },
      { nr: 3, text: "Enzyme sind Biokatalysatoren, die meist homogene Katalyse in wässriger Lösung durchführen.", korrekt: true },
      { nr: 4, text: "Heterogene Katalyse spielt z. B. im Autoabgaskatalysator eine Rolle.", korrekt: true },
      { nr: 5, text: "Katalysatoren werden bei der Reaktion irreversibel verbraucht.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Katalysatoren gehen unverändert aus der Reaktion hervor und werden nicht verbraucht (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 024 Lineweaver-Burk (schwer) ───
  {
    id: "ch-typk-new4-024",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zum Lineweaver-Burk-Diagramm sind richtig?\n\n1. Das Lineweaver-Burk-Diagramm ist die doppelt-reziproke Darstellung der Michaelis-Menten-Gleichung.\n2. Aufgetragen wird 1/v gegen 1/[S].\n3. Der y-Achsenabschnitt entspricht 1/Vmax.\n4. Der x-Achsenabschnitt entspricht −1/Km.\n5. Im Lineweaver-Burk-Diagramm ergibt sich eine Parabel.",
    aussagen: [
      { nr: 1, text: "Das Lineweaver-Burk-Diagramm ist die doppelt-reziproke Darstellung der Michaelis-Menten-Gleichung.", korrekt: true },
      { nr: 2, text: "Aufgetragen wird 1/v gegen 1/[S].", korrekt: true },
      { nr: 3, text: "Der y-Achsenabschnitt entspricht 1/Vmax.", korrekt: true },
      { nr: 4, text: "Der x-Achsenabschnitt entspricht −1/Km.", korrekt: true },
      { nr: 5, text: "Im Lineweaver-Burk-Diagramm ergibt sich eine Parabel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Das Lineweaver-Burk-Diagramm ergibt eine Gerade, keine Parabel (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 025 Allosterische Regulation (mittel) ───
  {
    id: "ch-typk-new4-025",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur allosterischen Regulation von Enzymen sind richtig?\n\n1. Allosterische Enzyme besitzen neben dem aktiven Zentrum ein regulatorisches Zentrum.\n2. Positive allosterische Modulatoren erhöhen die Enzymaktivität.\n3. Negative allosterische Modulatoren verringern die Enzymaktivität.\n4. Allosterische Enzyme zeigen oft eine sigmoidale Kinetik statt einer hyperbolischen.\n5. Allosterische Regulation findet ausschließlich am aktiven Zentrum statt.",
    aussagen: [
      { nr: 1, text: "Allosterische Enzyme besitzen neben dem aktiven Zentrum ein regulatorisches Zentrum.", korrekt: true },
      { nr: 2, text: "Positive allosterische Modulatoren erhöhen die Enzymaktivität.", korrekt: true },
      { nr: 3, text: "Negative allosterische Modulatoren verringern die Enzymaktivität.", korrekt: true },
      { nr: 4, text: "Allosterische Enzyme zeigen oft eine sigmoidale Kinetik statt einer hyperbolischen.", korrekt: true },
      { nr: 5, text: "Allosterische Regulation findet ausschließlich am aktiven Zentrum statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Allosterische Regulation erfolgt an einem separaten regulatorischen Zentrum, nicht am aktiven Zentrum (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 026 Reaktionsmechanismen (schwer) ───
  {
    id: "ch-typk-new4-026",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Reaktionsmechanismen und Kinetik sind richtig?\n\n1. Der geschwindigkeitsbestimmende Schritt ist der langsamste Teilschritt eines Mechanismus.\n2. Ein Zwischenprodukt (Intermediat) wird gebildet und in einem späteren Schritt wieder verbraucht.\n3. Der Übergangszustand (Aktivierungskomplex) ist ein kurzlebiges Energiemaximum auf der Reaktionskoordinate.\n4. Die Gesamtreaktionsordnung wird durch den geschwindigkeitsbestimmenden Schritt festgelegt.\n5. Der Reaktionsmechanismus lässt sich immer eindeutig aus der Bruttogleichung ableiten.",
    aussagen: [
      { nr: 1, text: "Der geschwindigkeitsbestimmende Schritt ist der langsamste Teilschritt eines Mechanismus.", korrekt: true },
      { nr: 2, text: "Ein Zwischenprodukt (Intermediat) wird gebildet und in einem späteren Schritt wieder verbraucht.", korrekt: true },
      { nr: 3, text: "Der Übergangszustand (Aktivierungskomplex) ist ein kurzlebiges Energiemaximum auf der Reaktionskoordinate.", korrekt: true },
      { nr: 4, text: "Die Gesamtreaktionsordnung wird durch den geschwindigkeitsbestimmenden Schritt festgelegt.", korrekt: true },
      { nr: 5, text: "Der Reaktionsmechanismus lässt sich immer eindeutig aus der Bruttogleichung ableiten.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Der Mechanismus kann nicht aus der Bruttogleichung abgeleitet werden — er muss experimentell ermittelt werden (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 027 Stoßtheorie (mittel) ───
  {
    id: "ch-typk-new4-027",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Stoßtheorie sind richtig?\n\n1. Für eine Reaktion müssen Teilchen mit ausreichender Energie zusammenstoßen.\n2. Die Orientierung der Teilchen beim Stoß muss günstig sein (Stericfaktor).\n3. Eine Erhöhung der Konzentration erhöht die Stoßfrequenz.\n4. Eine Erhöhung der Temperatur erhöht den Anteil der Teilchen mit ausreichender Energie.\n5. Jeder Zusammenstoß zwischen Reaktanten führt zu einer chemischen Reaktion.",
    aussagen: [
      { nr: 1, text: "Für eine Reaktion müssen Teilchen mit ausreichender Energie zusammenstoßen.", korrekt: true },
      { nr: 2, text: "Die Orientierung der Teilchen beim Stoß muss günstig sein (Stericfaktor).", korrekt: true },
      { nr: 3, text: "Eine Erhöhung der Konzentration erhöht die Stoßfrequenz.", korrekt: true },
      { nr: 4, text: "Eine Erhöhung der Temperatur erhöht den Anteil der Teilchen mit ausreichender Energie.", korrekt: true },
      { nr: 5, text: "Jeder Zusammenstoß zwischen Reaktanten führt zu einer chemischen Reaktion.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nur ein kleiner Bruchteil der Stöße hat die richtige Energie und Orientierung für eine Reaktion (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 028 Halbwertszeit (leicht) ───
  {
    id: "ch-typk-new4-028",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zur Halbwertszeit sind richtig?\n\n1. Die Halbwertszeit ist die Zeit, in der die Konzentration eines Reaktanten auf die Hälfte sinkt.\n2. Bei Reaktionen 1. Ordnung ist die Halbwertszeit t₁/₂ = ln 2 / k.\n3. Bei Reaktionen 1. Ordnung ist die Halbwertszeit konzentrationsunabhängig.\n4. Radioaktiver Zerfall folgt einer Kinetik 1. Ordnung.\n5. Bei Reaktionen 2. Ordnung ist die Halbwertszeit ebenfalls konzentrationsunabhängig.",
    aussagen: [
      { nr: 1, text: "Die Halbwertszeit ist die Zeit, in der die Konzentration eines Reaktanten auf die Hälfte sinkt.", korrekt: true },
      { nr: 2, text: "Bei Reaktionen 1. Ordnung ist die Halbwertszeit t₁/₂ = ln 2 / k.", korrekt: true },
      { nr: 3, text: "Bei Reaktionen 1. Ordnung ist die Halbwertszeit konzentrationsunabhängig.", korrekt: true },
      { nr: 4, text: "Radioaktiver Zerfall folgt einer Kinetik 1. Ordnung.", korrekt: true },
      { nr: 5, text: "Bei Reaktionen 2. Ordnung ist die Halbwertszeit ebenfalls konzentrationsunabhängig.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei 2. Ordnung hängt die Halbwertszeit von der Anfangskonzentration ab: t₁/₂ = 1/(k×c₀) (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 029 Coenzyme (mittel) ───
  {
    id: "ch-typk-new4-029",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Coenzymen in der Enzymkatalyse sind richtig?\n\n1. Coenzyme sind organische Moleküle, die als Co-Substrate an Enzymreaktionen teilnehmen.\n2. NAD⁺/NADH und FAD/FADH₂ sind wichtige Redox-Coenzyme.\n3. Coenzym A überträgt Acetylgruppen und ist zentral im Fettsäure- und Citratzyklus-Stoffwechsel.\n4. Viele Coenzyme werden aus Vitaminen synthetisiert.\n5. Coenzyme sind stets fest an das Enzym gebunden und werden nie abgelöst.",
    aussagen: [
      { nr: 1, text: "Coenzyme sind organische Moleküle, die als Co-Substrate an Enzymreaktionen teilnehmen.", korrekt: true },
      { nr: 2, text: "NAD⁺/NADH und FAD/FADH₂ sind wichtige Redox-Coenzyme.", korrekt: true },
      { nr: 3, text: "Coenzym A überträgt Acetylgruppen und ist zentral im Fettsäure- und Citratzyklus-Stoffwechsel.", korrekt: true },
      { nr: 4, text: "Viele Coenzyme werden aus Vitaminen synthetisiert.", korrekt: true },
      { nr: 5, text: "Coenzyme sind stets fest an das Enzym gebunden und werden nie abgelöst.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Coenzyme (Co-Substrate) binden reversibel und werden nach der Reaktion abgelöst — fest gebundene organische Gruppen heißen prosthetische Gruppen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 030 Reaktionsordnung null (schwer) ───
  {
    id: "ch-typk-new4-030",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Reaktionen nullter Ordnung sind richtig?\n\n1. Bei einer Reaktion nullter Ordnung ist die Reaktionsgeschwindigkeit konzentrationsunabhängig.\n2. Das Geschwindigkeitsgesetz lautet: v = k.\n3. Die Konzentration des Reaktanten nimmt linear mit der Zeit ab.\n4. Enzymreaktionen bei Substratsättigung zeigen Kinetik pseudo-nullter Ordnung.\n5. Reaktionen nullter Ordnung kommen in der Natur nicht vor.",
    aussagen: [
      { nr: 1, text: "Bei einer Reaktion nullter Ordnung ist die Reaktionsgeschwindigkeit konzentrationsunabhängig.", korrekt: true },
      { nr: 2, text: "Das Geschwindigkeitsgesetz lautet: v = k.", korrekt: true },
      { nr: 3, text: "Die Konzentration des Reaktanten nimmt linear mit der Zeit ab.", korrekt: true },
      { nr: 4, text: "Enzymreaktionen bei Substratsättigung zeigen Kinetik pseudo-nullter Ordnung.", korrekt: true },
      { nr: 5, text: "Reaktionen nullter Ordnung kommen in der Natur nicht vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Reaktionen pseudo-nullter Ordnung kommen z. B. bei Enzymsättigung und heterogener Katalyse vor (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 031–045: ANORGANISCHE VERBINDUNGEN ───────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 031 Oxide (leicht) ───
  {
    id: "ch-typk-new4-031",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Oxiden sind richtig?\n\n1. Metalloxide reagieren mit Wasser meist zu Basen (basische Oxide).\n2. Nichtmetalloxide reagieren mit Wasser meist zu Säuren (saure Oxide).\n3. CO₂ ist ein saures Oxid, das mit Wasser Kohlensäure (H₂CO₃) bildet.\n4. CaO (Calciumoxid) ist ein basisches Oxid, das mit Wasser Ca(OH)₂ bildet.\n5. Alle Oxide sind wasserlöslich.",
    aussagen: [
      { nr: 1, text: "Metalloxide reagieren mit Wasser meist zu Basen (basische Oxide).", korrekt: true },
      { nr: 2, text: "Nichtmetalloxide reagieren mit Wasser meist zu Säuren (saure Oxide).", korrekt: true },
      { nr: 3, text: "CO₂ ist ein saures Oxid, das mit Wasser Kohlensäure (H₂CO₃) bildet.", korrekt: true },
      { nr: 4, text: "CaO (Calciumoxid) ist ein basisches Oxid, das mit Wasser Ca(OH)₂ bildet.", korrekt: true },
      { nr: 5, text: "Alle Oxide sind wasserlöslich.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Viele Oxide sind wasserunlöslich, z. B. SiO₂, Al₂O₃ (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 032 Hydride (mittel) ───
  {
    id: "ch-typk-new4-032",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Hydriden sind richtig?\n\n1. Ionische Hydride (z. B. NaH) enthalten das Hydridion H⁻.\n2. Kovalente Hydride (z. B. H₂O, NH₃, CH₄) sind Verbindungen von Nichtmetallen mit Wasserstoff.\n3. Ionische Hydride reagieren mit Wasser unter Bildung von H₂ und einer Base.\n4. Die Stabilität der Hydride der Hauptgruppe nimmt innerhalb einer Periode von links nach rechts zu.\n5. Alle Hydride sind gasförmig bei Raumtemperatur.",
    aussagen: [
      { nr: 1, text: "Ionische Hydride (z. B. NaH) enthalten das Hydridion H⁻.", korrekt: true },
      { nr: 2, text: "Kovalente Hydride (z. B. H₂O, NH₃, CH₄) sind Verbindungen von Nichtmetallen mit Wasserstoff.", korrekt: true },
      { nr: 3, text: "Ionische Hydride reagieren mit Wasser unter Bildung von H₂ und einer Base.", korrekt: true },
      { nr: 4, text: "Die Stabilität der Hydride der Hauptgruppe nimmt innerhalb einer Periode von links nach rechts zu.", korrekt: true },
      { nr: 5, text: "Alle Hydride sind gasförmig bei Raumtemperatur.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Ionische Hydride (NaH, CaH₂) sind Feststoffe, H₂O ist flüssig (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 033 Halogenide (mittel) ───
  {
    id: "ch-typk-new4-033",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Halogeniden sind richtig?\n\n1. Halogenide sind Verbindungen der Halogene (F, Cl, Br, I) mit anderen Elementen.\n2. NaCl ist ein typisches ionisches Halogenid mit hohem Schmelzpunkt.\n3. Kovalente Halogenide (z. B. HCl, CCl₄) haben niedrigere Schmelzpunkte als ionische.\n4. Silberhalogenide (außer AgF) sind schwerlöslich und lichtempfindlich.\n5. Alle Halogenide sind in Wasser gut löslich.",
    aussagen: [
      { nr: 1, text: "Halogenide sind Verbindungen der Halogene (F, Cl, Br, I) mit anderen Elementen.", korrekt: true },
      { nr: 2, text: "NaCl ist ein typisches ionisches Halogenid mit hohem Schmelzpunkt.", korrekt: true },
      { nr: 3, text: "Kovalente Halogenide (z. B. HCl, CCl₄) haben niedrigere Schmelzpunkte als ionische.", korrekt: true },
      { nr: 4, text: "Silberhalogenide (außer AgF) sind schwerlöslich und lichtempfindlich.", korrekt: true },
      { nr: 5, text: "Alle Halogenide sind in Wasser gut löslich.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Viele Halogenide sind schwerlöslich, z. B. AgCl, PbCl₂ (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 034 Schwefelsäure (leicht) ───
  {
    id: "ch-typk-new4-034",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Schwefelsäure (H₂SO₄) sind richtig?\n\n1. H₂SO₄ ist eine starke zweiprotonige Säure.\n2. Konzentrierte Schwefelsäure wirkt stark hygroskopisch (wasserentziehend).\n3. H₂SO₄ wird im Kontaktverfahren großtechnisch hergestellt.\n4. Schwefelsäure dissoziiert in zwei Stufen.\n5. Verdünnte Schwefelsäure ist ein stärkeres Oxidationsmittel als konzentrierte.",
    aussagen: [
      { nr: 1, text: "H₂SO₄ ist eine starke zweiprotonige Säure.", korrekt: true },
      { nr: 2, text: "Konzentrierte Schwefelsäure wirkt stark hygroskopisch (wasserentziehend).", korrekt: true },
      { nr: 3, text: "H₂SO₄ wird im Kontaktverfahren großtechnisch hergestellt.", korrekt: true },
      { nr: 4, text: "Schwefelsäure dissoziiert in zwei Stufen.", korrekt: true },
      { nr: 5, text: "Verdünnte Schwefelsäure ist ein stärkeres Oxidationsmittel als konzentrierte.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Konzentrierte Schwefelsäure ist ein stärkeres Oxidationsmittel als verdünnte (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 035 Salze Eigenschaften (leicht) ───
  {
    id: "ch-typk-new4-035",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Salzen sind richtig?\n\n1. Salze sind ionische Verbindungen aus Kationen und Anionen.\n2. Salze haben in der Regel hohe Schmelz- und Siedepunkte.\n3. Salzschmelzen und Salzlösungen leiten den elektrischen Strom.\n4. Salze bilden Ionengitter mit einer regelmäßigen Anordnung.\n5. Salze leiten im festen Zustand den elektrischen Strom gut.",
    aussagen: [
      { nr: 1, text: "Salze sind ionische Verbindungen aus Kationen und Anionen.", korrekt: true },
      { nr: 2, text: "Salze haben in der Regel hohe Schmelz- und Siedepunkte.", korrekt: true },
      { nr: 3, text: "Salzschmelzen und Salzlösungen leiten den elektrischen Strom.", korrekt: true },
      { nr: 4, text: "Salze bilden Ionengitter mit einer regelmäßigen Anordnung.", korrekt: true },
      { nr: 5, text: "Salze leiten im festen Zustand den elektrischen Strom gut.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Im Festkörper sind die Ionen im Gitter fixiert und können sich nicht frei bewegen — daher keine Stromleitung (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 036 Amphotere Oxide (mittel) ───
  {
    id: "ch-typk-new4-036",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu amphoteren Oxiden und Hydroxiden sind richtig?\n\n1. Amphotere Stoffe können sowohl als Säure als auch als Base reagieren.\n2. Aluminiumoxid (Al₂O₃) ist ein typisches amphoteres Oxid.\n3. Al(OH)₃ löst sich sowohl in Säure als auch in starker Lauge.\n4. Zinkoxid (ZnO) ist ebenfalls amphoter.\n5. Amphoterie tritt nur bei Nichtmetalloxiden auf.",
    aussagen: [
      { nr: 1, text: "Amphotere Stoffe können sowohl als Säure als auch als Base reagieren.", korrekt: true },
      { nr: 2, text: "Aluminiumoxid (Al₂O₃) ist ein typisches amphoteres Oxid.", korrekt: true },
      { nr: 3, text: "Al(OH)₃ löst sich sowohl in Säure als auch in starker Lauge.", korrekt: true },
      { nr: 4, text: "Zinkoxid (ZnO) ist ebenfalls amphoter.", korrekt: true },
      { nr: 5, text: "Amphoterie tritt nur bei Nichtmetalloxiden auf.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Amphoterie tritt typischerweise bei Metalloxiden auf (Al, Zn, Pb, Sn), nicht bei Nichtmetalloxiden (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 037 Halogene (leicht) ───
  {
    id: "ch-typk-new4-037",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Halogenen sind richtig?\n\n1. Halogene stehen in der VII. Hauptgruppe (Gruppe 17) des Periodensystems.\n2. Die Elektronegativität der Halogene nimmt von Fluor zu Iod ab.\n3. Fluor ist das elektronegativste Element.\n4. Die Reaktivität der Halogene nimmt von Fluor zu Iod ab.\n5. Alle Halogene sind bei Raumtemperatur gasförmig.",
    aussagen: [
      { nr: 1, text: "Halogene stehen in der VII. Hauptgruppe (Gruppe 17) des Periodensystems.", korrekt: true },
      { nr: 2, text: "Die Elektronegativität der Halogene nimmt von Fluor zu Iod ab.", korrekt: true },
      { nr: 3, text: "Fluor ist das elektronegativste Element.", korrekt: true },
      { nr: 4, text: "Die Reaktivität der Halogene nimmt von Fluor zu Iod ab.", korrekt: true },
      { nr: 5, text: "Alle Halogene sind bei Raumtemperatur gasförmig.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Brom ist bei Raumtemperatur flüssig, Iod ist fest (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 038 Komplexverbindungen (schwer) ───
  {
    id: "ch-typk-new4-038",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Komplexverbindungen sind richtig?\n\n1. In einer Komplexverbindung ist ein Zentralion (meist Metallion) von Liganden umgeben.\n2. Liganden sind Lewis-Basen, die freie Elektronenpaare an das Zentralion donieren.\n3. Die Koordinationszahl gibt die Anzahl der an das Zentralion gebundenen Liganden an.\n4. Häm ist ein Eisenkomplex im Hämoglobin.\n5. Komplexverbindungen kommen in biologischen Systemen nicht vor.",
    aussagen: [
      { nr: 1, text: "In einer Komplexverbindung ist ein Zentralion (meist Metallion) von Liganden umgeben.", korrekt: true },
      { nr: 2, text: "Liganden sind Lewis-Basen, die freie Elektronenpaare an das Zentralion donieren.", korrekt: true },
      { nr: 3, text: "Die Koordinationszahl gibt die Anzahl der an das Zentralion gebundenen Liganden an.", korrekt: true },
      { nr: 4, text: "Häm ist ein Eisenkomplex im Hämoglobin.", korrekt: true },
      { nr: 5, text: "Komplexverbindungen kommen in biologischen Systemen nicht vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Komplexverbindungen sind biologisch sehr wichtig — Häm, Chlorophyll (Mg), Vitamin B12 (Co) sind Beispiele (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 039 Alkalimetalle (leicht) ───
  {
    id: "ch-typk-new4-039",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Alkalimetallen sind richtig?\n\n1. Alkalimetalle stehen in der I. Hauptgruppe (Gruppe 1) des Periodensystems.\n2. Sie bilden einfach positive Kationen (M⁺).\n3. Die Reaktivität der Alkalimetalle nimmt von oben nach unten in der Gruppe zu.\n4. Alkalimetalle reagieren heftig mit Wasser unter Bildung von Hydroxiden und Wasserstoff.\n5. Alkalimetalle haben hohe Ionisierungsenergien.",
    aussagen: [
      { nr: 1, text: "Alkalimetalle stehen in der I. Hauptgruppe (Gruppe 1) des Periodensystems.", korrekt: true },
      { nr: 2, text: "Sie bilden einfach positive Kationen (M⁺).", korrekt: true },
      { nr: 3, text: "Die Reaktivität der Alkalimetalle nimmt von oben nach unten in der Gruppe zu.", korrekt: true },
      { nr: 4, text: "Alkalimetalle reagieren heftig mit Wasser unter Bildung von Hydroxiden und Wasserstoff.", korrekt: true },
      { nr: 5, text: "Alkalimetalle haben hohe Ionisierungsenergien.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Alkalimetalle haben niedrige Ionisierungsenergien, da sie ihr Valenzelektron leicht abgeben (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 040 Erdalkalimetalle (mittel) ───
  {
    id: "ch-typk-new4-040",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Erdalkalimetallen sind richtig?\n\n1. Erdalkalimetalle stehen in der II. Hauptgruppe (Gruppe 2).\n2. Sie bilden zweifach positive Kationen (M²⁺).\n3. Calcium und Magnesium sind für den menschlichen Körper essenziell.\n4. Calciumcarbonat (CaCO₃) ist Hauptbestandteil von Kalkstein und Marmor.\n5. Erdalkalimetalle sind edler als Alkalimetalle und reagieren nicht mit Wasser.",
    aussagen: [
      { nr: 1, text: "Erdalkalimetalle stehen in der II. Hauptgruppe (Gruppe 2).", korrekt: true },
      { nr: 2, text: "Sie bilden zweifach positive Kationen (M²⁺).", korrekt: true },
      { nr: 3, text: "Calcium und Magnesium sind für den menschlichen Körper essenziell.", korrekt: true },
      { nr: 4, text: "Calciumcarbonat (CaCO₃) ist Hauptbestandteil von Kalkstein und Marmor.", korrekt: true },
      { nr: 5, text: "Erdalkalimetalle sind edler als Alkalimetalle und reagieren nicht mit Wasser.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Erdalkalimetalle reagieren durchaus mit Wasser (z. B. Ca + 2 H₂O → Ca(OH)₂ + H₂), wenn auch weniger heftig als Alkalimetalle (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 041 Stickstoffverbindungen (mittel) ───
  {
    id: "ch-typk-new4-041",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Stickstoffverbindungen sind richtig?\n\n1. Ammoniak (NH₃) ist eine schwache Base nach Brønsted.\n2. Salpetersäure (HNO₃) ist eine starke einprotonige Säure und ein Oxidationsmittel.\n3. Stickstoffoxide (NOx) tragen zur Luftverschmutzung und zum sauren Regen bei.\n4. N₂ ist wegen der stabilen Dreifachbindung chemisch sehr reaktionsträge.\n5. Stickstoff ist in allen Oxidationsstufen gleich stabil.",
    aussagen: [
      { nr: 1, text: "Ammoniak (NH₃) ist eine schwache Base nach Brønsted.", korrekt: true },
      { nr: 2, text: "Salpetersäure (HNO₃) ist eine starke einprotonige Säure und ein Oxidationsmittel.", korrekt: true },
      { nr: 3, text: "Stickstoffoxide (NOx) tragen zur Luftverschmutzung und zum sauren Regen bei.", korrekt: true },
      { nr: 4, text: "N₂ ist wegen der stabilen Dreifachbindung chemisch sehr reaktionsträge.", korrekt: true },
      { nr: 5, text: "Stickstoff ist in allen Oxidationsstufen gleich stabil.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Stickstoff ist in verschiedenen Oxidationsstufen (−3 bis +5) unterschiedlich stabil — am stabilsten als N₂ (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 042 Phosphorverbindungen (schwer) ───
  {
    id: "ch-typk-new4-042",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Phosphorverbindungen sind richtig?\n\n1. Phosphorsäure (H₃PO₄) ist eine dreiprotonige Säure.\n2. ATP enthält energiereiche Phosphorsäureanhydrid-Bindungen.\n3. Phosphat ist ein wichtiger Bestandteil der DNA und RNA (Phosphodiester-Bindungen).\n4. Hydroxylapatit [Ca₅(PO₄)₃OH] ist der mineralische Hauptbestandteil von Knochen und Zähnen.\n5. Phosphor kommt in der Natur nur als elementarer weißer Phosphor vor.",
    aussagen: [
      { nr: 1, text: "Phosphorsäure (H₃PO₄) ist eine dreiprotonige Säure.", korrekt: true },
      { nr: 2, text: "ATP enthält energiereiche Phosphorsäureanhydrid-Bindungen.", korrekt: true },
      { nr: 3, text: "Phosphat ist ein wichtiger Bestandteil der DNA und RNA (Phosphodiester-Bindungen).", korrekt: true },
      { nr: 4, text: "Hydroxylapatit [Ca₅(PO₄)₃OH] ist der mineralische Hauptbestandteil von Knochen und Zähnen.", korrekt: true },
      { nr: 5, text: "Phosphor kommt in der Natur nur als elementarer weißer Phosphor vor.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Phosphor kommt in der Natur fast ausschließlich als Phosphat in Mineralien vor, nicht als Element (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 043 Gitterenergie (schwer) ───
  {
    id: "ch-typk-new4-043",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zur Gitterenergie sind richtig?\n\n1. Die Gitterenergie ist die Energie, die beim Bilden eines Ionengitters aus gasförmigen Ionen frei wird.\n2. Hohe Gitterenergie bedeutet hohen Schmelzpunkt und hohe Stabilität des Salzes.\n3. Die Gitterenergie steigt mit zunehmender Ladung der Ionen.\n4. Die Gitterenergie steigt mit abnehmendem Ionenradius.\n5. Die Gitterenergie ist für alle Salze gleich groß.",
    aussagen: [
      { nr: 1, text: "Die Gitterenergie ist die Energie, die beim Bilden eines Ionengitters aus gasförmigen Ionen frei wird.", korrekt: true },
      { nr: 2, text: "Hohe Gitterenergie bedeutet hohen Schmelzpunkt und hohe Stabilität des Salzes.", korrekt: true },
      { nr: 3, text: "Die Gitterenergie steigt mit zunehmender Ladung der Ionen.", korrekt: true },
      { nr: 4, text: "Die Gitterenergie steigt mit abnehmendem Ionenradius.", korrekt: true },
      { nr: 5, text: "Die Gitterenergie ist für alle Salze gleich groß.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Gitterenergie variiert stark — sie hängt von Ionenladung und -radius ab (z. B. MgO >> NaCl, 5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 044 Wasserhärte (leicht) ───
  {
    id: "ch-typk-new4-044",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zur Wasserhärte sind richtig?\n\n1. Die Wasserhärte wird hauptsächlich durch gelöste Ca²⁺- und Mg²⁺-Ionen verursacht.\n2. Temporäre Härte beruht auf gelöstem Calciumhydrogencarbonat Ca(HCO₃)₂.\n3. Temporäre Härte kann durch Erhitzen entfernt werden (Kalkausfall).\n4. Permanente Härte wird durch Sulfate und Chloride von Ca²⁺ und Mg²⁺ verursacht.\n5. Hartes Wasser ist gesundheitsschädlich und darf nicht getrunken werden.",
    aussagen: [
      { nr: 1, text: "Die Wasserhärte wird hauptsächlich durch gelöste Ca²⁺- und Mg²⁺-Ionen verursacht.", korrekt: true },
      { nr: 2, text: "Temporäre Härte beruht auf gelöstem Calciumhydrogencarbonat Ca(HCO₃)₂.", korrekt: true },
      { nr: 3, text: "Temporäre Härte kann durch Erhitzen entfernt werden (Kalkausfall).", korrekt: true },
      { nr: 4, text: "Permanente Härte wird durch Sulfate und Chloride von Ca²⁺ und Mg²⁺ verursacht.", korrekt: true },
      { nr: 5, text: "Hartes Wasser ist gesundheitsschädlich und darf nicht getrunken werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Hartes Wasser ist nicht gesundheitsschädlich — Ca und Mg sind sogar essenzielle Mineralstoffe (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 045 Redox in anorganischer Chemie (schwer) ───
  {
    id: "ch-typk-new4-045",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-3-01",
    stamm: "Welche der folgenden Aussagen zu Redoxreaktionen anorganischer Verbindungen sind richtig?\n\n1. KMnO₄ ist ein starkes Oxidationsmittel, wobei Mn von +7 auf +2 reduziert wird (im Sauren).\n2. H₂O₂ kann sowohl als Oxidations- als auch als Reduktionsmittel wirken.\n3. Beim Thermitverfahren reduziert Aluminium Eisenoxid zu Eisen.\n4. In der Elektrochemie wird an der Anode oxidiert und an der Kathode reduziert.\n5. Bei Redoxreaktionen findet kein Elektronentransfer statt.",
    aussagen: [
      { nr: 1, text: "KMnO₄ ist ein starkes Oxidationsmittel, wobei Mn von +7 auf +2 reduziert wird (im Sauren).", korrekt: true },
      { nr: 2, text: "H₂O₂ kann sowohl als Oxidations- als auch als Reduktionsmittel wirken.", korrekt: true },
      { nr: 3, text: "Beim Thermitverfahren reduziert Aluminium Eisenoxid zu Eisen.", korrekt: true },
      { nr: 4, text: "In der Elektrochemie wird an der Anode oxidiert und an der Kathode reduziert.", korrekt: true },
      { nr: 5, text: "Bei Redoxreaktionen findet kein Elektronentransfer statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Redoxreaktionen sind definiert durch Elektronentransfer — das ist ihr Kernmerkmal (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 046–060: BIOCHEMIE VERTIEFUNG ────────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 046 DNA-Struktur (leicht) ───
  {
    id: "ch-typk-new4-046",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur DNA-Struktur aus chemischer Sicht sind richtig?\n\n1. DNA besteht aus Desoxyribonukleotiden, die über Phosphodiesterbindungen verknüpft sind.\n2. Die komplementäre Basenpaarung erfolgt über Wasserstoffbrücken: A-T (2), G-C (3).\n3. Die Doppelhelix hat eine antiparallele Anordnung der beiden Stränge (5'→3' und 3'→5').\n4. Das Zucker-Phosphat-Rückgrat ist hydrophil und zeigt nach außen.\n5. DNA-Einzelstränge sind durch kovalente Bindungen zwischen den Basenpaaren verbunden.",
    aussagen: [
      { nr: 1, text: "DNA besteht aus Desoxyribonukleotiden, die über Phosphodiesterbindungen verknüpft sind.", korrekt: true },
      { nr: 2, text: "Die komplementäre Basenpaarung erfolgt über Wasserstoffbrücken: A-T (2), G-C (3).", korrekt: true },
      { nr: 3, text: "Die Doppelhelix hat eine antiparallele Anordnung der beiden Stränge (5'→3' und 3'→5').", korrekt: true },
      { nr: 4, text: "Das Zucker-Phosphat-Rückgrat ist hydrophil und zeigt nach außen.", korrekt: true },
      { nr: 5, text: "DNA-Einzelstränge sind durch kovalente Bindungen zwischen den Basenpaaren verbunden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Basenpaare werden durch Wasserstoffbrücken (nicht-kovalent) zusammengehalten (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 047 RNA-Typen (leicht) ───
  {
    id: "ch-typk-new4-047",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu RNA aus chemischer Sicht sind richtig?\n\n1. RNA enthält Ribose statt Desoxyribose als Zuckerkomponente.\n2. In der RNA ist die Base Thymin durch Uracil ersetzt.\n3. mRNA transportiert die genetische Information vom Kern zu den Ribosomen.\n4. tRNA hat eine Kleeblattstruktur und trägt Aminosäuren.\n5. RNA ist immer doppelsträngig wie DNA.",
    aussagen: [
      { nr: 1, text: "RNA enthält Ribose statt Desoxyribose als Zuckerkomponente.", korrekt: true },
      { nr: 2, text: "In der RNA ist die Base Thymin durch Uracil ersetzt.", korrekt: true },
      { nr: 3, text: "mRNA transportiert die genetische Information vom Kern zu den Ribosomen.", korrekt: true },
      { nr: 4, text: "tRNA hat eine Kleeblattstruktur und trägt Aminosäuren.", korrekt: true },
      { nr: 5, text: "RNA ist immer doppelsträngig wie DNA.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. RNA ist in der Regel einzelsträngig und kann Sekundärstrukturen (Haarnadelschleifen) bilden (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 048 DNA-Replikation (mittel) ───
  {
    id: "ch-typk-new4-048",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur DNA-Replikation aus chemischer Sicht sind richtig?\n\n1. Die DNA-Replikation ist semikonservativ — jeder Tochterstrang enthält einen alten und einen neuen Strang.\n2. DNA-Polymerase synthetisiert den neuen Strang in 5'→3'-Richtung.\n3. Die Helicase trennt die beiden Stränge der Doppelhelix.\n4. Okazaki-Fragmente entstehen am Folgestrang (lagging strand).\n5. DNA-Polymerase kann ohne Primer (RNA-Primer) die Synthese starten.",
    aussagen: [
      { nr: 1, text: "Die DNA-Replikation ist semikonservativ — jeder Tochterstrang enthält einen alten und einen neuen Strang.", korrekt: true },
      { nr: 2, text: "DNA-Polymerase synthetisiert den neuen Strang in 5'→3'-Richtung.", korrekt: true },
      { nr: 3, text: "Die Helicase trennt die beiden Stränge der Doppelhelix.", korrekt: true },
      { nr: 4, text: "Okazaki-Fragmente entstehen am Folgestrang (lagging strand).", korrekt: true },
      { nr: 5, text: "DNA-Polymerase kann ohne Primer (RNA-Primer) die Synthese starten.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. DNA-Polymerase benötigt einen RNA-Primer als Startpunkt für die Synthese (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 049 Transkription (mittel) ───
  {
    id: "ch-typk-new4-049",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Transkription sind richtig?\n\n1. Die RNA-Polymerase synthetisiert RNA komplementär zum Matrizenstrang der DNA.\n2. Die Transkription erfolgt in 5'→3'-Richtung bezüglich der RNA.\n3. Bei Eukaryoten bindet die RNA-Polymerase II an den Promotor für mRNA-Gene.\n4. Die prä-mRNA wird durch Capping, Polyadenylierung und Spleißen prozessiert.\n5. Die Transkription findet bei Eukaryoten im Zytoplasma statt.",
    aussagen: [
      { nr: 1, text: "Die RNA-Polymerase synthetisiert RNA komplementär zum Matrizenstrang der DNA.", korrekt: true },
      { nr: 2, text: "Die Transkription erfolgt in 5'→3'-Richtung bezüglich der RNA.", korrekt: true },
      { nr: 3, text: "Bei Eukaryoten bindet die RNA-Polymerase II an den Promotor für mRNA-Gene.", korrekt: true },
      { nr: 4, text: "Die prä-mRNA wird durch Capping, Polyadenylierung und Spleißen prozessiert.", korrekt: true },
      { nr: 5, text: "Die Transkription findet bei Eukaryoten im Zytoplasma statt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Transkription findet bei Eukaryoten im Zellkern statt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 050 Translation (mittel) ───
  {
    id: "ch-typk-new4-050",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Translation sind richtig?\n\n1. Bei der Translation wird die Basensequenz der mRNA in eine Aminosäuresequenz übersetzt.\n2. Ribosomen bestehen aus rRNA und Proteinen und katalysieren die Peptidbindung.\n3. Das Startcodon AUG codiert für Methionin.\n4. Stoppcodons (UAA, UAG, UGA) werden von Release-Faktoren erkannt.\n5. Jede tRNA kann alle 20 Aminosäuren transportieren.",
    aussagen: [
      { nr: 1, text: "Bei der Translation wird die Basensequenz der mRNA in eine Aminosäuresequenz übersetzt.", korrekt: true },
      { nr: 2, text: "Ribosomen bestehen aus rRNA und Proteinen und katalysieren die Peptidbindung.", korrekt: true },
      { nr: 3, text: "Das Startcodon AUG codiert für Methionin.", korrekt: true },
      { nr: 4, text: "Stoppcodons (UAA, UAG, UGA) werden von Release-Faktoren erkannt.", korrekt: true },
      { nr: 5, text: "Jede tRNA kann alle 20 Aminosäuren transportieren.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Jede tRNA ist spezifisch für eine bestimmte Aminosäure (Aminoacyl-tRNA-Synthetase sorgt für die korrekte Beladung, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 051 Genetischer Code (leicht) ───
  {
    id: "ch-typk-new4-051",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zum genetischen Code sind richtig?\n\n1. Der genetische Code ist ein Triplett-Code — drei Basen codieren eine Aminosäure.\n2. Der Code ist degeneriert (redundant) — mehrere Codons können die gleiche Aminosäure codieren.\n3. Der Code ist universell — er gilt (mit wenigen Ausnahmen) für alle Lebewesen.\n4. Es gibt 64 mögliche Codons bei 4 verschiedenen Basen.\n5. Jedes der 64 Codons codiert für eine andere Aminosäure.",
    aussagen: [
      { nr: 1, text: "Der genetische Code ist ein Triplett-Code — drei Basen codieren eine Aminosäure.", korrekt: true },
      { nr: 2, text: "Der Code ist degeneriert (redundant) — mehrere Codons können die gleiche Aminosäure codieren.", korrekt: true },
      { nr: 3, text: "Der Code ist universell — er gilt (mit wenigen Ausnahmen) für alle Lebewesen.", korrekt: true },
      { nr: 4, text: "Es gibt 64 mögliche Codons bei 4 verschiedenen Basen.", korrekt: true },
      { nr: 5, text: "Jedes der 64 Codons codiert für eine andere Aminosäure.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Es gibt nur 20 Standard-Aminosäuren + 3 Stoppcodons, daher codieren mehrere Codons dieselbe Aminosäure (Degeneration, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 052 Nukleotide (mittel) ───
  {
    id: "ch-typk-new4-052",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu Nukleotiden sind richtig?\n\n1. Ein Nukleotid besteht aus Base, Zucker (Pentose) und Phosphatgruppe.\n2. Purinbasen (Adenin, Guanin) haben eine Doppelringstruktur.\n3. Pyrimidinbasen (Cytosin, Thymin, Uracil) haben eine Einfachringstruktur.\n4. Die N-glykosidische Bindung verbindet Base und Zucker.\n5. Nukleotide und Nukleoside sind chemisch identisch.",
    aussagen: [
      { nr: 1, text: "Ein Nukleotid besteht aus Base, Zucker (Pentose) und Phosphatgruppe.", korrekt: true },
      { nr: 2, text: "Purinbasen (Adenin, Guanin) haben eine Doppelringstruktur.", korrekt: true },
      { nr: 3, text: "Pyrimidinbasen (Cytosin, Thymin, Uracil) haben eine Einfachringstruktur.", korrekt: true },
      { nr: 4, text: "Die N-glykosidische Bindung verbindet Base und Zucker.", korrekt: true },
      { nr: 5, text: "Nukleotide und Nukleoside sind chemisch identisch.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Nukleoside bestehen nur aus Base + Zucker (ohne Phosphat), Nukleotide haben zusätzlich mindestens eine Phosphatgruppe (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 053 Peptidbindung (leicht) ───
  {
    id: "ch-typk-new4-053",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Peptidbindung sind richtig?\n\n1. Die Peptidbindung entsteht durch Kondensation zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe einer anderen.\n2. Bei der Peptidbindungsbildung wird ein Molekül Wasser abgespalten.\n3. Die Peptidbindung hat partiellen Doppelbindungscharakter und ist planar.\n4. Die Rotation um die C-N-Bindung der Peptidbindung ist eingeschränkt.\n5. Die Peptidbindung ist eine Esterbindung.",
    aussagen: [
      { nr: 1, text: "Die Peptidbindung entsteht durch Kondensation zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe einer anderen.", korrekt: true },
      { nr: 2, text: "Bei der Peptidbindungsbildung wird ein Molekül Wasser abgespalten.", korrekt: true },
      { nr: 3, text: "Die Peptidbindung hat partiellen Doppelbindungscharakter und ist planar.", korrekt: true },
      { nr: 4, text: "Die Rotation um die C-N-Bindung der Peptidbindung ist eingeschränkt.", korrekt: true },
      { nr: 5, text: "Die Peptidbindung ist eine Esterbindung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Peptidbindung ist eine Amidbindung (C-N), keine Esterbindung (C-O, 5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 054 Proteinstruktur (mittel) ───
  {
    id: "ch-typk-new4-054",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Proteinstruktur sind richtig?\n\n1. Die Primärstruktur ist die Aminosäuresequenz der Polypeptidkette.\n2. Die Sekundärstruktur umfasst α-Helix und β-Faltblatt, stabilisiert durch Wasserstoffbrücken.\n3. Die Tertiärstruktur ist die dreidimensionale Faltung der gesamten Polypeptidkette.\n4. Die Quartärstruktur beschreibt die Anordnung mehrerer Untereinheiten.\n5. Die Primärstruktur hat keinen Einfluss auf die dreidimensionale Faltung.",
    aussagen: [
      { nr: 1, text: "Die Primärstruktur ist die Aminosäuresequenz der Polypeptidkette.", korrekt: true },
      { nr: 2, text: "Die Sekundärstruktur umfasst α-Helix und β-Faltblatt, stabilisiert durch Wasserstoffbrücken.", korrekt: true },
      { nr: 3, text: "Die Tertiärstruktur ist die dreidimensionale Faltung der gesamten Polypeptidkette.", korrekt: true },
      { nr: 4, text: "Die Quartärstruktur beschreibt die Anordnung mehrerer Untereinheiten.", korrekt: true },
      { nr: 5, text: "Die Primärstruktur hat keinen Einfluss auf die dreidimensionale Faltung.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Primärstruktur (Aminosäuresequenz) bestimmt maßgeblich die dreidimensionale Faltung des Proteins (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 055 ATP-Chemie (mittel) ───
  {
    id: "ch-typk-new4-055",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zu ATP aus chemischer Sicht sind richtig?\n\n1. ATP (Adenosintriphosphat) besteht aus Adenin, Ribose und drei Phosphatgruppen.\n2. Die Hydrolyse von ATP zu ADP + Pi setzt ca. 30,5 kJ/mol freie Energie frei.\n3. Die energiereiche Bindung besteht zwischen den Phosphatgruppen (Phosphorsäureanhydrid-Bindung).\n4. ATP dient als universeller Energieträger in biologischen Systemen.\n5. ATP ist thermodynamisch extrem stabil und wird nie spontan hydrolysiert.",
    aussagen: [
      { nr: 1, text: "ATP (Adenosintriphosphat) besteht aus Adenin, Ribose und drei Phosphatgruppen.", korrekt: true },
      { nr: 2, text: "Die Hydrolyse von ATP zu ADP + Pi setzt ca. 30,5 kJ/mol freie Energie frei.", korrekt: true },
      { nr: 3, text: "Die energiereiche Bindung besteht zwischen den Phosphatgruppen (Phosphorsäureanhydrid-Bindung).", korrekt: true },
      { nr: 4, text: "ATP dient als universeller Energieträger in biologischen Systemen.", korrekt: true },
      { nr: 5, text: "ATP ist thermodynamisch extrem stabil und wird nie spontan hydrolysiert.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. ATP ist thermodynamisch instabil (ΔG° der Hydrolyse ist negativ), aber kinetisch stabil — ohne Enzym ist die Hydrolyse langsam (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 056 Denaturierung (leicht) ───
  {
    id: "ch-typk-new4-056",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Denaturierung von Proteinen sind richtig?\n\n1. Bei der Denaturierung geht die dreidimensionale Struktur des Proteins verloren.\n2. Hitze, extreme pH-Werte und organische Lösungsmittel können Denaturierung auslösen.\n3. Die Primärstruktur (Aminosäuresequenz) bleibt bei der Denaturierung erhalten.\n4. Denaturierte Enzyme verlieren ihre katalytische Aktivität.\n5. Denaturierung ist immer vollständig reversibel.",
    aussagen: [
      { nr: 1, text: "Bei der Denaturierung geht die dreidimensionale Struktur des Proteins verloren.", korrekt: true },
      { nr: 2, text: "Hitze, extreme pH-Werte und organische Lösungsmittel können Denaturierung auslösen.", korrekt: true },
      { nr: 3, text: "Die Primärstruktur (Aminosäuresequenz) bleibt bei der Denaturierung erhalten.", korrekt: true },
      { nr: 4, text: "Denaturierte Enzyme verlieren ihre katalytische Aktivität.", korrekt: true },
      { nr: 5, text: "Denaturierung ist immer vollständig reversibel.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Denaturierung ist oft irreversibel, z. B. beim Kochen von Eiern (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 057 Lipide Chemie (mittel) ───
  {
    id: "ch-typk-new4-057",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Chemie der Lipide sind richtig?\n\n1. Fette sind Ester aus Glycerin und drei Fettsäuren (Triacylglyceride).\n2. Gesättigte Fettsäuren haben keine Doppelbindungen in der Kohlenstoffkette.\n3. Ungesättigte Fettsäuren mit cis-Doppelbindungen haben einen Knick in der Kette.\n4. Phospholipide sind amphiphil — sie besitzen einen hydrophilen Kopf und hydrophobe Schwänze.\n5. Gesättigte Fette sind bei Raumtemperatur immer flüssig.",
    aussagen: [
      { nr: 1, text: "Fette sind Ester aus Glycerin und drei Fettsäuren (Triacylglyceride).", korrekt: true },
      { nr: 2, text: "Gesättigte Fettsäuren haben keine Doppelbindungen in der Kohlenstoffkette.", korrekt: true },
      { nr: 3, text: "Ungesättigte Fettsäuren mit cis-Doppelbindungen haben einen Knick in der Kette.", korrekt: true },
      { nr: 4, text: "Phospholipide sind amphiphil — sie besitzen einen hydrophilen Kopf und hydrophobe Schwänze.", korrekt: true },
      { nr: 5, text: "Gesättigte Fette sind bei Raumtemperatur immer flüssig.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Gesättigte Fette sind bei Raumtemperatur fest (z. B. Butter, Schmalz), ungesättigte sind flüssig (Öle, 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 058 Kohlenhydrate Chemie (leicht) ───
  {
    id: "ch-typk-new4-058",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Chemie der Kohlenhydrate sind richtig?\n\n1. Die allgemeine Summenformel der Kohlenhydrate ist Cn(H₂O)n.\n2. Glucose und Fructose sind Hexosen mit der Summenformel C₆H₁₂O₆.\n3. Saccharose besteht aus Glucose und Fructose, verknüpft durch eine glykosidische Bindung.\n4. Stärke und Cellulose sind Polysaccharide aus Glucose-Einheiten.\n5. Glucose und Fructose sind Strukturisomere mit identischen chemischen Eigenschaften.",
    aussagen: [
      { nr: 1, text: "Die allgemeine Summenformel der Kohlenhydrate ist Cn(H₂O)n.", korrekt: true },
      { nr: 2, text: "Glucose und Fructose sind Hexosen mit der Summenformel C₆H₁₂O₆.", korrekt: true },
      { nr: 3, text: "Saccharose besteht aus Glucose und Fructose, verknüpft durch eine glykosidische Bindung.", korrekt: true },
      { nr: 4, text: "Stärke und Cellulose sind Polysaccharide aus Glucose-Einheiten.", korrekt: true },
      { nr: 5, text: "Glucose und Fructose sind Strukturisomere mit identischen chemischen Eigenschaften.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Glucose (Aldose) und Fructose (Ketose) sind zwar Strukturisomere, haben aber unterschiedliche chemische Eigenschaften (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 059 PCR (schwer) ───
  {
    id: "ch-typk-new4-059",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Polymerase-Kettenreaktion (PCR) sind richtig?\n\n1. Die PCR ermöglicht die exponentielle Vervielfältigung eines spezifischen DNA-Abschnitts.\n2. Die drei Schritte eines PCR-Zyklus sind Denaturierung, Annealing (Primerhybridisierung) und Elongation.\n3. Es wird eine hitzestabile DNA-Polymerase (z. B. Taq-Polymerase) verwendet.\n4. Zwei Primer (forward und reverse) begrenzen den zu amplifizierenden Bereich.\n5. Bei der PCR werden keine dNTPs (Desoxyribonukleosidtriphosphate) benötigt.",
    aussagen: [
      { nr: 1, text: "Die PCR ermöglicht die exponentielle Vervielfältigung eines spezifischen DNA-Abschnitts.", korrekt: true },
      { nr: 2, text: "Die drei Schritte eines PCR-Zyklus sind Denaturierung, Annealing (Primerhybridisierung) und Elongation.", korrekt: true },
      { nr: 3, text: "Es wird eine hitzestabile DNA-Polymerase (z. B. Taq-Polymerase) verwendet.", korrekt: true },
      { nr: 4, text: "Zwei Primer (forward und reverse) begrenzen den zu amplifizierenden Bereich.", korrekt: true },
      { nr: 5, text: "Bei der PCR werden keine dNTPs (Desoxyribonukleosidtriphosphate) benötigt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. dNTPs sind essenziell für die PCR — sie liefern die Bausteine (A, T, G, C) für die DNA-Synthese (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 060 Verseifung (schwer) ───
  {
    id: "ch-typk-new4-060",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur Verseifung sind richtig?\n\n1. Verseifung ist die alkalische Hydrolyse eines Esters.\n2. Bei der Verseifung von Fetten entstehen Glycerin und Seifen (Fettsäureanionen).\n3. Seifen sind Natriumsalze langkettiger Fettsäuren.\n4. Seifen wirken als Tenside — sie besitzen einen hydrophilen und einen hydrophoben Teil.\n5. Verseifung ist eine Gleichgewichtsreaktion, die leicht umkehrbar ist.",
    aussagen: [
      { nr: 1, text: "Verseifung ist die alkalische Hydrolyse eines Esters.", korrekt: true },
      { nr: 2, text: "Bei der Verseifung von Fetten entstehen Glycerin und Seifen (Fettsäureanionen).", korrekt: true },
      { nr: 3, text: "Seifen sind Natriumsalze langkettiger Fettsäuren.", korrekt: true },
      { nr: 4, text: "Seifen wirken als Tenside — sie besitzen einen hydrophilen und einen hydrophoben Teil.", korrekt: true },
      { nr: 5, text: "Verseifung ist eine Gleichgewichtsreaktion, die leicht umkehrbar ist.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die alkalische Verseifung ist praktisch irreversibel, da das Carboxylat-Ion sehr stabil ist (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ═══════════════════════════════════════════════════════════
  // ─── 061–075: POLYMERE UND WERKSTOFFE ─────────────────────
  // ═══════════════════════════════════════════════════════════

  // ─── 061 Polymere Grundlagen (leicht) ───
  {
    id: "ch-typk-new4-061",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Polymeren sind richtig?\n\n1. Polymere sind Makromoleküle, die aus vielen Wiederholungseinheiten (Monomeren) aufgebaut sind.\n2. Die Polymerisation verknüpft Monomere zu langen Ketten.\n3. Polyethylen (PE) entsteht durch Polymerisation von Ethylen (Ethen).\n4. Polymere können natürlichen (z. B. Cellulose, Proteine) oder synthetischen Ursprungs sein.\n5. Alle Polymere sind wasserlöslich.",
    aussagen: [
      { nr: 1, text: "Polymere sind Makromoleküle, die aus vielen Wiederholungseinheiten (Monomeren) aufgebaut sind.", korrekt: true },
      { nr: 2, text: "Die Polymerisation verknüpft Monomere zu langen Ketten.", korrekt: true },
      { nr: 3, text: "Polyethylen (PE) entsteht durch Polymerisation von Ethylen (Ethen).", korrekt: true },
      { nr: 4, text: "Polymere können natürlichen (z. B. Cellulose, Proteine) oder synthetischen Ursprungs sein.", korrekt: true },
      { nr: 5, text: "Alle Polymere sind wasserlöslich.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die meisten synthetischen Polymere (PE, PP, PVC) sind wasserunlöslich (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 062 Additionspolymerisation (mittel) ───
  {
    id: "ch-typk-new4-062",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zur Additionspolymerisation sind richtig?\n\n1. Bei der Additionspolymerisation werden ungesättigte Monomere (mit C=C-Doppelbindung) verknüpft.\n2. Es entsteht kein Nebenprodukt — das Polymer hat die gleiche Summenformel wie die Monomere.\n3. Polypropylen (PP) und Polystyrol (PS) entstehen durch Additionspolymerisation.\n4. Die Reaktion wird oft durch Radikale, Kationen oder Anionen initiiert.\n5. Bei der Additionspolymerisation wird Wasser als Nebenprodukt gebildet.",
    aussagen: [
      { nr: 1, text: "Bei der Additionspolymerisation werden ungesättigte Monomere (mit C=C-Doppelbindung) verknüpft.", korrekt: true },
      { nr: 2, text: "Es entsteht kein Nebenprodukt — das Polymer hat die gleiche Summenformel wie die Monomere.", korrekt: true },
      { nr: 3, text: "Polypropylen (PP) und Polystyrol (PS) entstehen durch Additionspolymerisation.", korrekt: true },
      { nr: 4, text: "Die Reaktion wird oft durch Radikale, Kationen oder Anionen initiiert.", korrekt: true },
      { nr: 5, text: "Bei der Additionspolymerisation wird Wasser als Nebenprodukt gebildet.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Bei der Additionspolymerisation entsteht kein Nebenprodukt — Wasser entsteht nur bei der Kondensationspolymerisation (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 063 Kondensationspolymerisation (mittel) ───
  {
    id: "ch-typk-new4-063",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zur Kondensationspolymerisation sind richtig?\n\n1. Bei der Kondensationspolymerisation wird bei jeder Verknüpfung ein kleines Molekül (z. B. H₂O) abgespalten.\n2. Polyester (z. B. PET) entstehen durch Kondensation von Dicarbonsäuren und Diolen.\n3. Polyamide (z. B. Nylon) entstehen durch Kondensation von Dicarbonsäuren und Diaminen.\n4. Proteine und DNA sind natürliche Kondensationspolymere.\n5. Kondensationspolymerisation erfordert immer Monomere mit C=C-Doppelbindungen.",
    aussagen: [
      { nr: 1, text: "Bei der Kondensationspolymerisation wird bei jeder Verknüpfung ein kleines Molekül (z. B. H₂O) abgespalten.", korrekt: true },
      { nr: 2, text: "Polyester (z. B. PET) entstehen durch Kondensation von Dicarbonsäuren und Diolen.", korrekt: true },
      { nr: 3, text: "Polyamide (z. B. Nylon) entstehen durch Kondensation von Dicarbonsäuren und Diaminen.", korrekt: true },
      { nr: 4, text: "Proteine und DNA sind natürliche Kondensationspolymere.", korrekt: true },
      { nr: 5, text: "Kondensationspolymerisation erfordert immer Monomere mit C=C-Doppelbindungen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Kondensationspolymerisation erfordert bifunktionelle Monomere (z. B. -OH + -COOH), keine Doppelbindungen (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 064 Thermoplaste/Duroplaste/Elastomere (mittel) ───
  {
    id: "ch-typk-new4-064",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Thermoplasten, Duroplasten und Elastomeren sind richtig?\n\n1. Thermoplaste sind bei Erwärmung verformbar und erstarren beim Abkühlen.\n2. Duroplaste sind stark vernetzt und behalten ihre Form auch bei Erhitzung.\n3. Elastomere sind schwach vernetzt und zeigen Gummielastizität.\n4. PVC und Polyethylen sind Beispiele für Thermoplaste.\n5. Thermoplaste, Duroplaste und Elastomere haben identische mechanische Eigenschaften.",
    aussagen: [
      { nr: 1, text: "Thermoplaste sind bei Erwärmung verformbar und erstarren beim Abkühlen.", korrekt: true },
      { nr: 2, text: "Duroplaste sind stark vernetzt und behalten ihre Form auch bei Erhitzung.", korrekt: true },
      { nr: 3, text: "Elastomere sind schwach vernetzt und zeigen Gummielastizität.", korrekt: true },
      { nr: 4, text: "PVC und Polyethylen sind Beispiele für Thermoplaste.", korrekt: true },
      { nr: 5, text: "Thermoplaste, Duroplaste und Elastomere haben identische mechanische Eigenschaften.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die drei Polymerklassen unterscheiden sich grundlegend in Vernetzung und mechanischen Eigenschaften (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 065 PET (leicht) ───
  {
    id: "ch-typk-new4-065",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Polyethylenterephthalat (PET) sind richtig?\n\n1. PET ist ein Polyester, der aus Terephthalsäure und Ethylenglykol hergestellt wird.\n2. PET wird für Getränkeflaschen, Textilfasern und Verpackungen verwendet.\n3. PET ist recyclebar und wird oft mechanisch oder chemisch recycelt.\n4. PET entsteht durch Kondensationspolymerisation.\n5. PET ist ein natürliches Polymer, das in Pflanzen vorkommt.",
    aussagen: [
      { nr: 1, text: "PET ist ein Polyester, der aus Terephthalsäure und Ethylenglykol hergestellt wird.", korrekt: true },
      { nr: 2, text: "PET wird für Getränkeflaschen, Textilfasern und Verpackungen verwendet.", korrekt: true },
      { nr: 3, text: "PET ist recyclebar und wird oft mechanisch oder chemisch recycelt.", korrekt: true },
      { nr: 4, text: "PET entsteht durch Kondensationspolymerisation.", korrekt: true },
      { nr: 5, text: "PET ist ein natürliches Polymer, das in Pflanzen vorkommt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. PET ist ein synthetisches Polymer, kein natürliches (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 066 Vulkanisation (schwer) ───
  {
    id: "ch-typk-new4-066",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zur Vulkanisation sind richtig?\n\n1. Vulkanisation ist die Vernetzung von Kautschuk mit Schwefel.\n2. Durch Vulkanisation entstehen Schwefelbrücken zwischen den Polymerketten.\n3. Vulkanisierter Kautschuk (Gummi) ist elastischer und hitzebeständiger als Rohkautschuk.\n4. Charles Goodyear entdeckte die Vulkanisation.\n5. Vulkanisation macht den Kautschuk spröde und unbrauchbar.",
    aussagen: [
      { nr: 1, text: "Vulkanisation ist die Vernetzung von Kautschuk mit Schwefel.", korrekt: true },
      { nr: 2, text: "Durch Vulkanisation entstehen Schwefelbrücken zwischen den Polymerketten.", korrekt: true },
      { nr: 3, text: "Vulkanisierter Kautschuk (Gummi) ist elastischer und hitzebeständiger als Rohkautschuk.", korrekt: true },
      { nr: 4, text: "Charles Goodyear entdeckte die Vulkanisation.", korrekt: true },
      { nr: 5, text: "Vulkanisation macht den Kautschuk spröde und unbrauchbar.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Vulkanisation verbessert die Eigenschaften des Kautschuks — er wird elastisch, formstabil und hitzebeständig (5 falsch). Nur bei extremer Übervernetzung wird er spröde (Hartgummi).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 067 Biopolymere (leicht) ───
  {
    id: "ch-typk-new4-067",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Biopolymeren sind richtig?\n\n1. Cellulose ist das häufigste natürliche Polymer und besteht aus β-Glucose-Einheiten.\n2. Stärke ist ein pflanzliches Speicherpolysaccharid aus α-Glucose-Einheiten.\n3. Proteine sind Biopolymere aus Aminosäuren, verknüpft durch Peptidbindungen.\n4. DNA und RNA sind Biopolymere aus Nukleotiden.\n5. Biopolymere werden ausschließlich synthetisch hergestellt.",
    aussagen: [
      { nr: 1, text: "Cellulose ist das häufigste natürliche Polymer und besteht aus β-Glucose-Einheiten.", korrekt: true },
      { nr: 2, text: "Stärke ist ein pflanzliches Speicherpolysaccharid aus α-Glucose-Einheiten.", korrekt: true },
      { nr: 3, text: "Proteine sind Biopolymere aus Aminosäuren, verknüpft durch Peptidbindungen.", korrekt: true },
      { nr: 4, text: "DNA und RNA sind Biopolymere aus Nukleotiden.", korrekt: true },
      { nr: 5, text: "Biopolymere werden ausschließlich synthetisch hergestellt.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Biopolymere werden von Lebewesen produziert — sie sind per Definition natürlichen Ursprungs (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 068 Kunststoffrecycling (mittel) ───
  {
    id: "ch-typk-new4-068",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zum Kunststoffrecycling sind richtig?\n\n1. Mechanisches Recycling umfasst Sammeln, Zerkleinern, Waschen und Umschmelzen.\n2. Chemisches Recycling bricht Polymere in ihre Monomere oder andere Chemikalien auf.\n3. Thermoplaste lassen sich leichter recyceln als Duroplaste.\n4. Die Recyclingcodes 1–7 kennzeichnen verschiedene Kunststoffarten.\n5. Alle Kunststoffe können unbegrenzt oft ohne Qualitätsverlust recycelt werden.",
    aussagen: [
      { nr: 1, text: "Mechanisches Recycling umfasst Sammeln, Zerkleinern, Waschen und Umschmelzen.", korrekt: true },
      { nr: 2, text: "Chemisches Recycling bricht Polymere in ihre Monomere oder andere Chemikalien auf.", korrekt: true },
      { nr: 3, text: "Thermoplaste lassen sich leichter recyceln als Duroplaste.", korrekt: true },
      { nr: 4, text: "Die Recyclingcodes 1–7 kennzeichnen verschiedene Kunststoffarten.", korrekt: true },
      { nr: 5, text: "Alle Kunststoffe können unbegrenzt oft ohne Qualitätsverlust recycelt werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Beim mechanischen Recycling tritt Downcycling auf — die Qualität nimmt mit jedem Durchgang ab (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 069 Silikone (schwer) ───
  {
    id: "ch-typk-new4-069",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Silikonen sind richtig?\n\n1. Silikone sind Polysiloxane mit alternierendem Si-O-Rückgrat.\n2. Siliciumatome in Silikonen tragen organische Seitengruppen (z. B. Methyl).\n3. Silikone sind hitzebeständig, wasserabweisend und chemisch inert.\n4. Silikone werden als Dichtungsmaterialien, in der Medizin und in Kosmetika verwendet.\n5. Silikone bestehen ausschließlich aus Kohlenstoff und Wasserstoff.",
    aussagen: [
      { nr: 1, text: "Silikone sind Polysiloxane mit alternierendem Si-O-Rückgrat.", korrekt: true },
      { nr: 2, text: "Siliciumatome in Silikonen tragen organische Seitengruppen (z. B. Methyl).", korrekt: true },
      { nr: 3, text: "Silikone sind hitzebeständig, wasserabweisend und chemisch inert.", korrekt: true },
      { nr: 4, text: "Silikone werden als Dichtungsmaterialien, in der Medizin und in Kosmetika verwendet.", korrekt: true },
      { nr: 5, text: "Silikone bestehen ausschließlich aus Kohlenstoff und Wasserstoff.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Silikone enthalten Silicium und Sauerstoff im Rückgrat, nicht nur C und H (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 070 Glasübergangstemperatur (schwer) ───
  {
    id: "ch-typk-new4-070",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zur Glasübergangstemperatur (Tg) sind richtig?\n\n1. Die Glasübergangstemperatur ist die Temperatur, bei der ein amorphes Polymer vom glasartigen in den gummiartigen Zustand übergeht.\n2. Unterhalb der Tg ist das Polymer hart und spröde.\n3. Oberhalb der Tg wird das Polymer weich und flexibel.\n4. Die Tg hängt von der Kettensteifigkeit und den Seitengruppen des Polymers ab.\n5. Die Glasübergangstemperatur ist identisch mit dem Schmelzpunkt eines Polymers.",
    aussagen: [
      { nr: 1, text: "Die Glasübergangstemperatur ist die Temperatur, bei der ein amorphes Polymer vom glasartigen in den gummiartigen Zustand übergeht.", korrekt: true },
      { nr: 2, text: "Unterhalb der Tg ist das Polymer hart und spröde.", korrekt: true },
      { nr: 3, text: "Oberhalb der Tg wird das Polymer weich und flexibel.", korrekt: true },
      { nr: 4, text: "Die Tg hängt von der Kettensteifigkeit und den Seitengruppen des Polymers ab.", korrekt: true },
      { nr: 5, text: "Die Glasübergangstemperatur ist identisch mit dem Schmelzpunkt eines Polymers.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Tg und Schmelzpunkt (Tm) sind unterschiedliche Größen — Tg betrifft amorphe Bereiche, Tm kristalline Bereiche (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 071 Polymerisation Arten (leicht) ───
  {
    id: "ch-typk-new4-071",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Polymerisationsarten sind richtig?\n\n1. Bei der radikalischen Polymerisation werden Radikale als Starter (Initiatoren) verwendet.\n2. Die kationische Polymerisation verwendet Lewis-Säuren als Katalysatoren.\n3. Die anionische Polymerisation nutzt starke Nucleophile als Initiatoren.\n4. Die Ziegler-Natta-Katalyse ermöglicht die stereospezifische Polymerisation.\n5. Alle Polymerisationsreaktionen laufen ohne Katalysator ab.",
    aussagen: [
      { nr: 1, text: "Bei der radikalischen Polymerisation werden Radikale als Starter (Initiatoren) verwendet.", korrekt: true },
      { nr: 2, text: "Die kationische Polymerisation verwendet Lewis-Säuren als Katalysatoren.", korrekt: true },
      { nr: 3, text: "Die anionische Polymerisation nutzt starke Nucleophile als Initiatoren.", korrekt: true },
      { nr: 4, text: "Die Ziegler-Natta-Katalyse ermöglicht die stereospezifische Polymerisation.", korrekt: true },
      { nr: 5, text: "Alle Polymerisationsreaktionen laufen ohne Katalysator ab.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Viele Polymerisationen erfordern Initiatoren oder Katalysatoren (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },

  // ─── 072 Copolymere (mittel) ───
  {
    id: "ch-typk-new4-072",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Copolymeren sind richtig?\n\n1. Copolymere bestehen aus zwei oder mehr verschiedenen Monomerarten.\n2. Statistische Copolymere haben eine zufällige Abfolge der Monomere.\n3. Blockcopolymere bestehen aus langen Blöcken je einer Monomersorte.\n4. Pfropfcopolymere haben Seitenketten aus einem anderen Monomer als die Hauptkette.\n5. Copolymere können nur aus genau zwei Monomerarten bestehen.",
    aussagen: [
      { nr: 1, text: "Copolymere bestehen aus zwei oder mehr verschiedenen Monomerarten.", korrekt: true },
      { nr: 2, text: "Statistische Copolymere haben eine zufällige Abfolge der Monomere.", korrekt: true },
      { nr: 3, text: "Blockcopolymere bestehen aus langen Blöcken je einer Monomersorte.", korrekt: true },
      { nr: 4, text: "Pfropfcopolymere haben Seitenketten aus einem anderen Monomer als die Hauptkette.", korrekt: true },
      { nr: 5, text: "Copolymere können nur aus genau zwei Monomerarten bestehen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Copolymere können aus mehr als zwei Monomerarten bestehen (Terpolymere etc., 5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 073 Biologisch abbaubare Polymere (mittel) ───
  {
    id: "ch-typk-new4-073",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu biologisch abbaubaren Polymeren sind richtig?\n\n1. Polylactid (PLA) wird aus Milchsäure hergestellt und ist biologisch abbaubar.\n2. PLA kann als Verpackungsmaterial und für medizinische Implantate verwendet werden.\n3. Polyhydroxyalkanoate (PHA) werden von Mikroorganismen als Energiespeicher produziert.\n4. Biologisch abbaubare Polymere werden durch Mikroorganismen in CO₂ und Wasser zersetzt.\n5. Alle Kunststoffe aus nachwachsenden Rohstoffen sind automatisch biologisch abbaubar.",
    aussagen: [
      { nr: 1, text: "Polylactid (PLA) wird aus Milchsäure hergestellt und ist biologisch abbaubar.", korrekt: true },
      { nr: 2, text: "PLA kann als Verpackungsmaterial und für medizinische Implantate verwendet werden.", korrekt: true },
      { nr: 3, text: "Polyhydroxyalkanoate (PHA) werden von Mikroorganismen als Energiespeicher produziert.", korrekt: true },
      { nr: 4, text: "Biologisch abbaubare Polymere werden durch Mikroorganismen in CO₂ und Wasser zersetzt.", korrekt: true },
      { nr: 5, text: "Alle Kunststoffe aus nachwachsenden Rohstoffen sind automatisch biologisch abbaubar.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Biobasierte Kunststoffe sind nicht zwangsläufig biologisch abbaubar — z. B. Bio-PE ist chemisch identisch mit Erdöl-PE (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },

  // ─── 074 Nylon/Polyamide (schwer) ───
  {
    id: "ch-typk-new4-074",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Nylon und Polyamiden sind richtig?\n\n1. Nylon 6,6 entsteht durch Polykondensation von Hexamethylendiamin und Adipinsäure.\n2. Die Amidbindung (-CO-NH-) ist die charakteristische Verknüpfung in Polyamiden.\n3. Polyamide werden für Fasern, Seile und technische Bauteile verwendet.\n4. Wasserstoffbrücken zwischen den Amidgruppen tragen zur Festigkeit bei.\n5. Polyamide sind identisch mit Polyestern.",
    aussagen: [
      { nr: 1, text: "Nylon 6,6 entsteht durch Polykondensation von Hexamethylendiamin und Adipinsäure.", korrekt: true },
      { nr: 2, text: "Die Amidbindung (-CO-NH-) ist die charakteristische Verknüpfung in Polyamiden.", korrekt: true },
      { nr: 3, text: "Polyamide werden für Fasern, Seile und technische Bauteile verwendet.", korrekt: true },
      { nr: 4, text: "Wasserstoffbrücken zwischen den Amidgruppen tragen zur Festigkeit bei.", korrekt: true },
      { nr: 5, text: "Polyamide sind identisch mit Polyestern.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Polyamide (Amidbindung) und Polyester (Esterbindung) sind chemisch unterschiedliche Polymerklassen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },

  // ─── 075 Faserverbundwerkstoffe (schwer) ───
  {
    id: "ch-typk-new4-075",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-4-01",
    stamm: "Welche der folgenden Aussagen zu Faserverbundwerkstoffen sind richtig?\n\n1. Faserverbundwerkstoffe bestehen aus einer Matrix (z. B. Harz) und eingebetteten Verstärkungsfasern.\n2. Kohlenstofffaserverstärkte Kunststoffe (CFK) haben ein hohes Festigkeits-zu-Gewicht-Verhältnis.\n3. Glasfaserverstärkte Kunststoffe (GFK) sind günstiger als CFK und weit verbreitet.\n4. Die Fasern übernehmen die Zugbelastung, die Matrix überträgt Kräfte und schützt die Fasern.\n5. Faserverbundwerkstoffe bestehen ausschließlich aus Metallen.",
    aussagen: [
      { nr: 1, text: "Faserverbundwerkstoffe bestehen aus einer Matrix (z. B. Harz) und eingebetteten Verstärkungsfasern.", korrekt: true },
      { nr: 2, text: "Kohlenstofffaserverstärkte Kunststoffe (CFK) haben ein hohes Festigkeits-zu-Gewicht-Verhältnis.", korrekt: true },
      { nr: 3, text: "Glasfaserverstärkte Kunststoffe (GFK) sind günstiger als CFK und weit verbreitet.", korrekt: true },
      { nr: 4, text: "Die Fasern übernehmen die Zugbelastung, die Matrix überträgt Kräfte und schützt die Fasern.", korrekt: true },
      { nr: 5, text: "Faserverbundwerkstoffe bestehen ausschließlich aus Metallen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Faserverbundwerkstoffe bestehen typischerweise aus Polymeren (Matrix) und Fasern (Glas, Kohlenstoff, Aramid), nicht aus Metallen (5 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
