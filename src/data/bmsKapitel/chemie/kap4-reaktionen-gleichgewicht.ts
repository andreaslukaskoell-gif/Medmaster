import type { Kapitel } from "../types";

export const chemKapReaktionen: Kapitel = {
  id: "chem-kap4",
  title: "Chemische Reaktionen & Gleichgewicht",
  subject: "chemie",
  icon: "⚗️",
  estimatedTime: "120 min",
  unterkapitel: [
    // === from kap7-chemische-reaktionen ===

    // ─────────────────────────────────────────────
    // UK 01: Reaktionstypen und Grundprinzipien
    // ─────────────────────────────────────────────
    {
      id: "ch-7-01",
      title: "Reaktionstypen und Grundprinzipien",
      stichworte: [
        "Synthesereaktion",
        "Zersetzungsreaktion",
        "Substitutionsreaktion",
        "Metathese",
        "Redoxreaktion",
        "Säure-Base-Reaktion",
        "Katalyse",
        "Aktivierungsenergie",
        "Reaktionsenthalpie",
        "Gibbs-Energie",
        "OIL RIG",
        "Fällungsreaktion",
      ],
      content: `## Einleitung

**Worum geht es?** **Chemische Reaktionen** sind Vorgänge, bei denen Bindungen gebrochen und neu geknüpft werden; es entstehen neue Stoffe. Dieses Unterkapitel behandelt Reaktionstypen (Synthese, Zersetzung, Substitution, Metathese), Säure-Base (H⁺-Transfer) und Redox (e⁻-Transfer), Katalyse sowie Energiebilanz (exo-/endotherm, ΔG). **Warum für den MedAT relevant?** Reaktionstypen, Stöchiometrie, OIL RIG und Katalyse sind Grundlage für Biochemie und Klinik (z. B. Katalase, Puffer, Atmungskette). **Welche Fragen werden beantwortet?** „Säure-Base vs. Redox?“; „Was macht ein Katalysator?“; „Oxidationszahlen?“; „Welcher Reaktionstyp?“.

**In diesem Kapitel lernst du:**
- **Reaktionsgleichung** (Massen- und Ladungserhaltung, stöchiometrische Koeffizienten)
- die **vier Reaktionstypen** (Synthese, Zersetzung, Substitution, Metathese) und Beispiele (inkl. Fällung)
- **Säure-Base** (H⁺-Übertragung, konjugierte Paare) vs. **Redox** (e⁻-Übertragung, OIL RIG)
- **Katalyse** (Aktivierungsenergie senken, Gleichgewicht nicht verschieben) und Enzymkatalyse

---

## Grundbegriffe chemischer Reaktionen

Eine **chemische Reaktion** ist ein Vorgang, bei dem Bindungen zwischen Atomen gebrochen und neu geknüpft werden — im Unterschied zu physikalischen Vorgängen (z. B. Schmelzen), bei denen die Molekülstruktur erhalten bleibt. Das Gesetz der Massenerhaltung (Lavoisier, 1789): Die Gesamtmasse der Edukte ist gleich der Gesamtmasse der Produkte. Atome werden dabei weder erzeugt noch vernichtet, nur umgeordnet.

> **Merke:** Bei jeder chemischen Reaktion gilt: Masse der Edukte = Masse der Produkte. Die Anzahl jeder Atomsorte bleibt auf beiden Seiten der Gleichung gleich.

**Wichtige Grundbegriffe:**
- **Edukte (Reaktanten):** Ausgangsstoffe, die in die Reaktion eingehen
- **Produkte:** Stoffe, die bei der Reaktion entstehen
- **Reaktionsgleichung:** Symbolische Darstellung mit ausgeglichenen Koeffizienten
- **Stöchiometrische Koeffizienten:** Ganzzahlige Verhältnisse der beteiligten Mol-Mengen
- **Reaktionspfeil:** → (irreversibel) bzw. ⇌ (reversibel/Gleichgewicht)

## Die vier klassischen Reaktionstypen

| Reaktionstyp | Schema | Beispiel | Klinischer Bezug |
|---|---|---|---|
| Synthese | A + B → AB | 2 Na + Cl₂ → 2 NaCl | Harnstoffsynthese (NH₃ + CO₂ → Harnstoff) |
| Zersetzung | AB → A + B | 2 H₂O₂ → 2 H₂O + O₂ | Katalase baut H₂O₂ in Peroxisomen ab |
| Substitution | A + BC → AC + B | CH₃Br + OH⁻ → CH₃OH + Br⁻ | Transaminierung (ALT, AST) |
| Metathese | AB + CD → AD + CB | NaCl + AgNO₃ → AgCl↓ + NaNO₃ | CaC₂O₄-Fällung bei Nierensteinen |

![Reaktionstypen](/grafik-reaktionstypen.svg)


![Redox und Elektronenübertragung](/grafik-redox.svg)


**1. Synthesereaktion (Kombination):** Zwei oder mehr Substanzen reagieren zu einem einzigen Produkt.
Allgemein: A + B → AB
Beispiel: 2 Na + Cl₂ → 2 NaCl (Natriumchlorid-Bildung)
Biologisch: Die Bildung von Peptidketten aus Aminosäuren (Kondensationsreaktion) ist im weiteren Sinne eine Synthese.

**2. Zersetzungsreaktion (Analyse):** Eine Verbindung zerfällt in zwei oder mehr einfachere Produkte.
Allgemein: AB → A + B
Beispiel: 2 H₂O₂ → 2 H₂O + O₂ (Abbau von Wasserstoffperoxid durch Katalase)
Klinisch: Katalase-Mangel (Akatalasämie) führt zu Gewebeschäden durch H₂O₂-Akkumulation — besonders in der Mundschleimhaut.

**3. Substitutionsreaktion:** Ein Atom oder eine Gruppe ersetzt ein anderes Atom oder eine andere Gruppe.
- **Nukleophile Substitution (Sₙ):** Ein Nukleophil (elektronenreicher Angreifer) ersetzt eine Abgangsgruppe. Beispiel: CH₃Br + OH⁻ → CH₃OH + Br⁻
- **Elektrophile Substitution:** Typisch für Aromaten (z. B. Nitrierung von Benzol)
- **Radikalische Substitution:** Über Radikale (z. B. Halogenierung von Alkanen: CH₄ + Cl₂ → CH₃Cl + HCl)
Biologisch: Enzymatische Transaminierungen (ALT, AST); Methylierungsreaktionen (SAM als Methylgruppendonor)

**4. Metathese (Doppelumsatz / Doppelsubstitution):** Zwei Verbindungen tauschen Partner.
Allgemein: AB + CD → AD + CB
Beispiel: NaCl + AgNO₃ → AgCl↓ + NaNO₃ (Fällungsreaktion)
Treibende Kraft: Bildung eines schwerlöslichen Niederschlags, eines Gases oder von Wasser.

## Säure-Base-Reaktionen und Redoxreaktionen

**Säure-Base-Reaktion (Brønsted, 1923):** Übertragung eines Protons (H⁺) vom Donor (Säure) auf den Akzeptor (Base).
Beispiel: HCl + H₂O → H₃O⁺ + Cl⁻
Die konjugierte Base einer starken Säure ist eine schwache Base. Konjugierte Paare: HCl/Cl⁻, NH₄⁺/NH₃, H₂CO₃/HCO₃⁻. Puffergleichgewichte (z. B. HCO₃⁻/CO₂ im Blut) beruhen auf diesem Prinzip.

> **Merke:** Säure-Base = H⁺-Transfer; Redox = e⁻-Transfer. Dies sind die zwei fundamentalen Reaktionsklassen in der Biochemie.

**Redoxreaktion:** Übertragung von Elektronen (e⁻). Oxidation = Elektronenabgabe (Oxidationszahl ↑); Reduktion = Elektronenaufnahme (Oxidationszahl ↓). Oxidationsmittel wird reduziert; Reduktionsmittel wird oxidiert. Gedächtnisstütze: **OIL RIG** (Oxidation Is Loss, Reduction Is Gain).

**Rechenbeispiel — Oxidationszahlen bestimmen:**
Zn + CuSO₄ → ZnSO₄ + Cu
- Zn: 0 → +2 (Oxidation, gibt 2 e⁻ ab → Reduktionsmittel)
- Cu: +2 → 0 (Reduktion, nimmt 2 e⁻ auf → Oxidationsmittel)
- S und O: unverändert (+6 bzw. −2)

Biologisch: Die Atmungskette ist eine Kaskade von Redoxreaktionen, bei der Elektronen von NADH (E° = −0,32 V) über Cytochrome auf O₂ (E° = +0,82 V) übertragen werden. Die Spannung ΔE° = 1,14 V treibt die ATP-Synthese an.

**Fällungsreaktion:** Zwei lösliche Salze reagieren zu einem unlöslichen Niederschlag (Präzipitat). Die Löslichkeit wird durch das **Löslichkeitsprodukt K_sp** beschrieben: Ist das Ionenprodukt Q > K_sp, fällt der Stoff aus.
Klinisch: Nierensteine (CaC₂O₄-Fällung im Harn bei Hyperoxalurie), Röntgenkontrastmittel (BaSO₄ — unlöslich, daher nicht toxisch trotz Ba²⁺), Gichtanfälle (Harnsäurekristall-Fällung in Gelenken).

## Katalyse

Ein **Katalysator** erhöht die Reaktionsgeschwindigkeit, indem er die Aktivierungsenergie E_A senkt, ohne selbst verbraucht zu werden. Er verändert nicht die Thermodynamik (ΔG, ΔH bleiben gleich), sondern nur den Reaktionsweg.

- **Homogene Katalyse:** Katalysator und Reaktanten in derselben Phase (z. B. H⁺ als Katalysator in wässriger Lösung; NO bei der Ozonzerstörung in der Stratosphäre).
- **Heterogene Katalyse:** Unterschiedliche Phasen — meist Feststoffkatalysator, gasförmige/flüssige Reaktanten (z. B. Platin im Autokatalysator; Eisen beim Haber-Bosch-Verfahren: N₂ + 3 H₂ → 2 NH₃ bei 400–500 °C, 150–300 bar).
- **Enzymkatalyse:** Hochspezifische biologische Katalyse durch Proteine. Enzyme senken die Aktivierungsenergie durch Ausbildung eines Enzym-Substrat-Komplexes im aktiven Zentrum (Schlüssel-Schloss- bzw. induced-fit-Modell). Beschleunigung: Faktor 10⁶–10¹². Coenzyme (z. B. NAD⁺, FAD) fungieren als Elektronenüberträger.

> **Merke:** Katalysatoren beschleunigen Hin- UND Rückreaktion gleichermaßen. Sie verschieben das Gleichgewicht nicht, sondern verkürzen nur die Zeit bis zur Einstellung.

**Vergleich der Katalysearten:**

| Eigenschaft | Homogen | Heterogen | Enzymatisch |
|---|---|---|---|
| Phase | gleich | verschieden | wässrig (meist) |
| Selektivität | mäßig | variabel | extrem hoch |
| Beispiel | H⁺ in Lösung | Fe (Haber-Bosch) | Katalase, Pepsin |
| Klinisch | Säurekatalyse | Autoabgaskatalysator | Enzymdiagnostik |

## Energetik: Exotherme und endotherme Reaktionen

Die **Reaktionsenthalpie ΔH** beschreibt den Wärmeaustausch bei konstantem Druck.

- **Exotherm (ΔH < 0):** Energie wird an die Umgebung abgegeben → Produkte energieärmer als Edukte. Beispiel: Verbrennung von Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; ΔH = −2803 kJ/mol.
- **Endotherm (ΔH > 0):** Das System **nimmt Wärme aus der Umgebung auf** → Produkte energiereicher. Definition: *Eine Reaktion, bei der das System Wärme aus der Umgebung aufnimmt, nennt man endotherm.* Beispiel: Photosynthese (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂; ΔH = +2803 kJ/mol), thermische Zersetzung von CaCO₃.

**Rechenbeispiel — Energiebilanz:**
Verbrennung von 1 mol Ethanol: C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O; ΔH = −1367 kJ/mol
Bei 46 g Ethanol (= 1 mol) werden 1367 kJ frei. Der physiologische Brennwert von Alkohol beträgt daher 29,7 kJ/g (= 7,1 kcal/g) — fast doppelt so viel wie Kohlenhydrate (4 kcal/g).

**Satz von Hess:** Die Reaktionsenthalpie ist wegunabhängig — nur Anfangs- und Endzustand zählen. ΔH_gesamt = ΣΔH_Teilschritte. Dies erlaubt die Berechnung von ΔH aus Bildungsenthalpien.

Wichtig: Spontaneität einer Reaktion hängt nicht allein von ΔH ab, sondern von der freien Enthalpie **ΔG = ΔH − T·ΔS** (Gibbs-Energie). ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon). Im Körper koppelt die Zelle exergone Reaktionen (ATP-Hydrolyse, ΔG° ≈ −30,5 kJ/mol) an endergone Biosynthesen, um thermodynamisch ungünstige Prozesse anzutreiben (energetische Kopplung).

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Vier Reaktionstypen:** Synthese (A+B→AB), Zersetzung (AB→A+B), Substitution (A+BC→AC+B), Metathese (AB+CD→AD+CB); Fällung = Metathese mit unlöslichem Produkt
- **Säure-Base (Brønsted):** H⁺-Transfer; konjugierte Paare HCl/Cl⁻, NH₄⁺/NH₃, H₂CO₃/HCO₃⁻
- **Redox:** e⁻-Transfer; **OIL RIG** — Oxidation Is Loss, Reduction Is Gain; Oxidationsmittel wird reduziert, Reduktionsmittel oxidiert
- **Katalysator:** senkt **Aktivierungsenergie E_A**, ändert **nicht** ΔH, ΔG oder Gleichgewichtslage; homogen/heterogen/enzymatisch
- **Exotherm** (ΔH < 0) vs. **endotherm** (ΔH > 0); Spontaneität durch **ΔG = ΔH − T·ΔS** (ΔG < 0 = exergon)
- Reaktionsgleichung: Massen- und Ladungserhaltung; Stöchiometrische Koeffizienten = Mol-Verhältnisse
- Klinisch: Katalase (H₂O₂→H₂O+O₂), Atmungskette (Redox), Puffer (Säure-Base)

**Ergänzend vertiefend:** Oxidationszahlen, Redoxpaare. Typische Fallen: Katalysator verschiebt Gleichgewicht nicht; exotherm ≠ spontan (ΔG entscheidet); OIL RIG (Oxidation = Elektronenabgabe, Reduktion = -aufnahme) nicht vertauschen.

**Häufige Prüfungsfragen:**
- „Säure-Base vs. Redox?" → Säure-Base = H⁺-Transfer; Redox = e⁻-Transfer (OIL RIG)
- „Was ändert ein Katalysator?" → Senkt E_A, ändert nicht ΔH, ΔG oder Gleichgewichtslage
- „Wann spontan?" → ΔG < 0 (exergon); nicht allein durch ΔH bestimmbar

**Typische Prüfungsfallen:**
- Katalysator verschiebt Gleichgewicht **nicht**; Exotherm ≠ spontan (ΔG entscheidet); OIL RIG nicht vertauschen

**Wichtige Begriffe & Definitionen:**
- **OIL RIG:** Oxidation Is Loss (von e⁻), Reduction Is Gain — Merksatz für Redoxrichtung.
- **Katalysator:** Stoff, der E_A senkt und die Reaktionsgeschwindigkeit erhöht, ohne verbraucht zu werden; ändert nicht ΔH, ΔG oder K.
- **Exergon/Endergon:** ΔG < 0 = exergon (spontan); ΔG > 0 = endergon (nicht spontan).

**Prüfungsrelevante Zahlen/Fakten:**
- ATP-Hydrolyse: ΔG° ≈ −30,5 kJ/mol; Glucose-Verbrennung ΔH = −2803 kJ/mol; Katalase ~10⁷-fach

---
## Zusammenfassung (ultrakompakt)

- **Reaktionstypen**: Synthese (A+B→AB), Zersetzung (AB→A+B), Substitution (AB+C→AC+B), Metathese (Doppelsubstitution)
- **Redoxreaktionen**: OIL RIG — Oxidation Is Loss (of e⁻), Reduction Is Gain; Oxidationsmittel wird reduziert, Reduktionsmittel wird oxidiert
- **Säure-Base nach Brønsted**: Säure = H⁺-Donor; Base = H⁺-Akzeptor; nach Lewis: Elektronen-Akzeptor/-Donor
- **Katalyse**: homogen (gleiche Phase), heterogen (verschiedene Phasen), enzymatisch — alle senken E_A, ändern nicht ΔH oder Gleichgewichtslage
- **Exotherm** (ΔH < 0): Produkte energieärmer → Wärme frei (Verbrennung); **endotherm** (ΔH > 0): Energie wird aufgenommen (Photosynthese)
- **ΔG = ΔH − T·ΔS**: ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon)
- **Energetische Kopplung**: ATP-Hydrolyse (ΔG° = −30,5 kJ/mol) treibt endergone Biosynthesen an
- **Satz von Hess**: ΔH_gesamt = ΣΔH_Teilschritte (wegunabhängig)`,

      lernziele: [
        "Die vier klassischen Reaktionstypen (Synthese, Zersetzung, Substitution, Metathese) anhand von Beispielen unterscheiden.",
        "Säure-Base-Reaktionen als H⁺-Transfer und Redoxreaktionen als e⁻-Transfer charakterisieren und mit OIL-RIG einprägen.",
        "Homogene, heterogene und enzymatische Katalyse vergleichen und den Effekt auf die Aktivierungsenergie erklären.",
        "Exotherme (ΔH < 0) und endotherme (ΔH > 0) Reaktionen im Energieprofil darstellen und ΔG = ΔH − T·ΔS anwenden.",
        "Klinische Bezüge von Redox-, Fällungs- und enzymatischen Reaktionen im menschlichen Stoffwechsel nennen.",
      ],

      sections: [
        {
          heading: "Reaktionstypen im Überblick",
          text: "Synthese (A + B → AB) und Zersetzung (AB → A + B) sind Gegensätze. Bei der Substitution ersetzt ein Atom eine andere Gruppe; bei der Metathese (Doppelumsatz) tauschen zwei Verbindungen ihre Partner. Säure-Base-Reaktionen übertragen H⁺, Redoxreaktionen übertragen e⁻. Fällungsreaktionen sind spezielle Metathesen, bei denen ein unlösliches Produkt ausfällt.",
          merksatz:
            "Merke: Säure-Base = H⁺-Transfer; Redox = e⁻-Transfer. OIL RIG: Oxidation Is Loss, Reduction Is Gain.",
        },
        {
          heading: "Katalyse: homogen, heterogen, enzymatisch",
          text: "Alle Katalysatoren senken die Aktivierungsenergie, ohne ΔH zu ändern. Homogene Katalyse (gleiche Phase) ist selektiv, heterogene (verschiedene Phasen) ist robust und industriell bedeutsam (Haber-Bosch, Autokatalysator). Enzyme als biologische Katalysatoren sind hochspezifisch, pH- und temperaturabhängig. Hemmung (kompetitiv, nicht-kompetitiv) reguliert Stoffwechselwege.",
          merksatz:
            "Faustregel: Katalysatoren verändern die Reaktionsgeschwindigkeit, nicht die Gleichgewichtslage.",
        },
        {
          heading: "Energiebilanz und Spontaneität",
          text: "ΔH < 0 (exotherm) bedeutet Wärmefreisetzung, ΔH > 0 (endotherm) Wärmeaufnahme. Spontaneität wird durch ΔG = ΔH − T·ΔS bestimmt. Eine exotherme Reaktion mit negativer Entropieänderung kann bei hoher Temperatur nicht-spontan werden. Biologisch: ATP-Hydrolyse (ΔG° ≈ −30,5 kJ/mol) treibt endergone Reaktionen an.",
          merksatz:
            "ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon). ΔG = ΔH − T·ΔS.",
        },
      ],

      merksätze: [
        "Synthese: A + B → AB; Zersetzung: AB → A + B — Umkehrreaktionen.",
        "OIL RIG: Oxidation Is Loss (Elektronenabgabe), Reduction Is Gain (Elektronenaufnahme).",
        "Redoxreaktion: Oxidationsmittel wird selbst reduziert, Reduktionsmittel wird selbst oxidiert.",
        "Katalysatoren senken E_A, werden nicht verbraucht und ändern ΔH nicht.",
        "Homogen = gleiche Phase; heterogen = verschiedene Phasen; Enzymatik = hochspezifisch, biologisch.",
        "Exotherm: ΔH < 0 (Wärme frei); endotherm: ΔH > 0 (Wärme nötig).",
        "ΔG = ΔH − T·ΔS bestimmt die Spontaneität einer Reaktion.",
        "Fällungsreaktion = Metathese mit unlöslichem Niederschlag (z. B. AgCl, BaSO₄).",
        "Säure-Base-Reaktion (Brønsted): H⁺ vom Donor (Säure) auf Akzeptor (Base).",
        "Enzymkatalyse: Substrat bindet im aktiven Zentrum → Enzym-Substrat-Komplex → Produkt + freies Enzym.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen einer exothermen und einer endothermen Reaktion, und warum reicht die Reaktionsenthalpie ΔH allein nicht aus, um die Spontaneität zu beurteilen?",
        answer:
          "Bei einer exothermen Reaktion ist die Reaktionsenthalpie ΔH negativ: Die Produkte besitzen weniger innere Energie als die Edukte, und die überschüssige Energie wird als Wärme an die Umgebung abgegeben. Beispiele sind Verbrennungsreaktionen oder die ATP-Hydrolyse. Bei endothermen Reaktionen ist ΔH positiv — Energie muss zugeführt werden, wie bei der Photosynthese oder der thermischen Zersetzung von Calciumcarbonat. ΔH allein reicht zur Beurteilung der Spontaneität nicht aus, weil auch die Entropie ΔS eine Rolle spielt. Die maßgebliche Größe ist die Gibbs-Energie: ΔG = ΔH − T·ΔS. Nur wenn ΔG < 0 ist, läuft die Reaktion unter den gegebenen Bedingungen spontan ab (exergon). Eine exotherme Reaktion mit stark negativer Entropieänderung kann bei hoher Temperatur endergon werden. Umgekehrt kann eine endotherme Reaktion mit großem Entropiegewinn (z. B. Auflösen von NH₄NO₃ in Wasser) spontan sein, wenn der T·ΔS-Term die Enthalpie überwiegt. Im biologischen Kontext koppelt die Zelle exergone Reaktionen (ATP-Hydrolyse) an endergone Prozesse (Biosynthesen, aktiver Transport), um thermodynamisch ungünstige Reaktionen anzutreiben.",
      },

      klinischerBezug:
        "Verbrennungsreaktionen (exotherm) liefern den physiologischen Kalorienwert von Nahrungsmitteln. ATP-Hydrolyse (exergon, ΔG° ≈ −30,5 kJ/mol) treibt endergone Biosynthesen an. Die Atmungskette ist eine Redoxkaskade, bei der Elektronen von NADH auf O₂ übertragen werden.",

      selfTest: [
        {
          question: "Welche der folgenden Reaktionen ist eine Synthesereaktion?",
          options: [
            "CaCO₃ → CaO + CO₂",
            "NaCl + AgNO₃ → AgCl + NaNO₃",
            "2 Mg + O₂ → 2 MgO",
            "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
            "HCl + NaOH → NaCl + H₂O",
          ],
          correctIndex: 2,
          explanation:
            "Bei einer Synthesereaktion vereinigen sich zwei oder mehr Edukte zu einem einzigen Produkt: A + B → AB. 2 Mg + O₂ → 2 MgO erfüllt dieses Muster: Magnesium und Sauerstoff bilden gemeinsam Magnesiumoxid. Die Zersetzung (CaCO₃ → CaO + CO₂) ist das Gegenteil. NaCl + AgNO₃ → AgCl + NaNO₃ ist eine Metathese (Fällungsreaktion). Die Verbrennung von Methan und die Neutralisation sind ebenfalls keine reinen Synthesen in diesem engeren Sinne.",
          hints: [
            "Synthese bedeutet: Aus mehreren Edukten entsteht ein einziges Produkt.",
            "Suche die Reaktion, bei der A + B → AB gilt — also ein neues zusammengesetztes Produkt entsteht.",
          ],
          tags: ["reaktionstypen", "synthese"],
          difficulty: 1,
        },
        {
          question: "Was charakterisiert eine Redoxreaktion auf der Elektronenebene?",
          options: [
            "Übertragung von Protonen (H⁺) zwischen Reaktionspartnern",
            "Übertragung von Elektronen: eine Substanz oxidiert, eine andere reduziert sich",
            "Bildung eines unlöslichen Niederschlags aus zwei Salzen",
            "Zersetzung einer Verbindung durch Wärmezufuhr",
            "Substitution eines Atoms durch ein anderes ohne Ladungsänderung",
          ],
          correctIndex: 1,
          explanation:
            "Redoxreaktionen sind durch den Transfer von Elektronen definiert. Die oxidierende Substanz gibt Elektronen ab (Oxidation = Elektronenverlust, Oxidationszahl steigt) und die reduzierende Substanz nimmt Elektronen auf (Reduktion = Elektronengewinn, Oxidationszahl sinkt). Die Gedächtnisstütze OIL RIG hilft: Oxidation Is Loss, Reduction Is Gain. H⁺-Transfer kennzeichnet hingegen Säure-Base-Reaktionen nach Brønsted. Die anderen Optionen beschreiben Fällungs-, Zersetzungs- und Substitutionsreaktionen.",
          hints: [
            "Denke an OIL RIG: Was wird bei Oxidation übertragen?",
            "Redox-Reaktionen ändern die Oxidationszahlen der beteiligten Atome.",
          ],
          tags: ["redox", "oxidation", "reduktion"],
          difficulty: 1,
        },
        {
          question: "Was ist die korrekte Aussage über Katalysatoren?",
          options: [
            "Sie erhöhen ΔH der Reaktion und machen sie exothermer.",
            "Sie werden im Verlauf der Reaktion verbraucht und müssen nachgefüllt werden.",
            "Sie senken die Aktivierungsenergie E_A, ohne ΔH oder ΔG zu ändern.",
            "Sie verschieben das chemische Gleichgewicht zugunsten der Produkte.",
            "Sie erhöhen ausschließlich die Temperatur des Systems.",
          ],
          correctIndex: 2,
          explanation:
            "Katalysatoren senken die Aktivierungsenergie E_A, indem sie einen alternativen Reaktionsweg mit geringerer Energiebarriere bereitstellen. Dadurch wird die Reaktion schneller — sowohl Hin- als auch Rückreaktion. Entscheidend: ΔH, ΔG und die Gleichgewichtslage bleiben unverändert; der Katalysator wird nicht verbraucht. Enzyme als biologische Katalysatoren folgen demselben Prinzip — sie senken E_A durch Ausbildung eines Enzym-Substrat-Komplexes, ohne die Thermodynamik der Reaktion zu verändern.",
          hints: [
            "Ein Katalysator verändert den Weg, nicht das Ziel der Reaktion.",
            "Gleichgewichtslage und Reaktionsenthalpie bleiben unberührt.",
          ],
          tags: ["katalyse", "aktivierungsenergie"],
          difficulty: 2,
        },
        {
          question: "Bei der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu: Was passiert mit Zink?",
          options: [
            "Zink wird reduziert: es nimmt Elektronen auf.",
            "Zink wird oxidiert: es gibt Elektronen ab.",
            "Zink fungiert als Oxidationsmittel.",
            "Zink nimmt H⁺-Ionen auf (Säure-Base-Reaktion).",
            "Zink bleibt unverändert als Katalysator.",
          ],
          correctIndex: 1,
          explanation:
            "In dieser Reaktion wird Zink oxidiert: Zn → Zn²⁺ + 2 e⁻. Die Oxidationszahl steigt von 0 auf +2, was Elektronenabgabe (Oxidation) entspricht — OIL: Oxidation Is Loss. Gleichzeitig wird Cu²⁺ reduziert: Cu²⁺ + 2 e⁻ → Cu (Oxidationszahl von +2 auf 0). Das Reduktionsmittel ist Zink (es wird oxidiert), das Oxidationsmittel ist Cu²⁺ (es wird reduziert). Diese Galvanische Verschiebungsreaktion ist die Grundlage von Batterien und Elektrolyse.",
          hints: [
            "Schreibe die Oxidationszahl von Zn vor und nach der Reaktion auf.",
            "OIL: Oxidation Is Loss — Zink gibt etwas ab.",
          ],
          tags: ["redox", "oxidation", "oxidationszahl"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage zu exothermen und endothermen Reaktionen ist korrekt?",
          options: [
            "Exotherme Reaktionen laufen immer spontan ab, endotherme nie.",
            "Bei endothermen Reaktionen ist ΔH < 0, Energie wird freigesetzt.",
            "Exotherme Reaktionen (ΔH < 0) geben Wärme ab; Spontaneität hängt von ΔG ab.",
            "Die Spontaneität wird ausschließlich durch ΔH bestimmt.",
            "Endotherme Reaktionen können nicht in biologischen Systemen auftreten.",
          ],
          correctIndex: 2,
          explanation:
            "Exotherme Reaktionen haben ΔH < 0: Produkte sind energieärmer als Edukte, und die überschüssige Energie wird als Wärme freigesetzt. Endotherme Reaktionen haben ΔH > 0: Energie muss zugeführt werden. Spontaneität wird jedoch durch ΔG = ΔH − T·ΔS bestimmt, nicht allein durch ΔH. Eine exotherme Reaktion mit stark negativer Entropie kann bei hoher Temperatur endergon (ΔG > 0) und damit nicht spontan sein. Endotherme Reaktionen können spontan sein, wenn der Entropiegewinn (T·ΔS) groß genug ist — z. B. das Auflösen von NH₄NO₃ in Wasser.",
          hints: [
            "Denke an ΔG = ΔH − T·ΔS: Welche zwei Größen bestimmen Spontaneität?",
            "Exotherm bedeutet Wärmefreisetzung, nicht automatisch Spontaneität.",
          ],
          tags: ["thermodynamik", "enthalpie", "spontaneitaet"],
          difficulty: 2,
        },
        {
          question: "Welcher Reaktionstyp liegt bei NaCl + AgNO₃ → AgCl↓ + NaNO₃ vor?",
          options: [
            "Synthesereaktion",
            "Zersetzungsreaktion",
            "Substitutionsreaktion",
            "Metathese (Fällungsreaktion)",
            "Säure-Base-Reaktion nach Brønsted",
          ],
          correctIndex: 3,
          explanation:
            "Diese Reaktion ist eine Metathese (Doppelumsatz): Zwei Salze tauschen ihre Anionen. NaCl liefert Cl⁻, das mit Ag⁺ aus AgNO₃ das unlösliche AgCl (Niederschlag, ↓) bildet. Gleichzeitig entsteht lösliches NaNO₃. Da ein unlösliches Produkt (Fällung) entsteht, spricht man auch von einer Fällungsreaktion. Klinisch relevant: BaSO₄-Fällung als Röntgenkontrastmittel; CaC₂O₄-Fällung bei Nierensteinen.",
          hints: [
            "Zwei Verbindungen tauschen ihre Ionen — welcher Reaktionstyp beschreibt das?",
            "Der Pfeil mit ↓ bedeutet: ein unlöslicher Niederschlag entsteht.",
          ],
          tags: ["metathese", "faellungsreaktion", "reaktionstypen"],
          difficulty: 1,
        },
        {
          question:
            "Welche biochemische Reaktion ist ein Beispiel für enzymatische Katalyse mit klinischer Relevanz?",
          options: [
            "Lösen von NaCl in Wasser (keine Katalyse)",
            "Haber-Bosch-Prozess (heterogene Katalyse mit Eisen)",
            "Abbau von H₂O₂ durch Katalase zu H₂O und O₂ (Zersetzung)",
            "Fällung von AgCl aus AgNO₃ und NaCl (Metathese)",
            "Neutralisation von HCl mit NaOH (Säure-Base)",
          ],
          correctIndex: 2,
          explanation:
            "Katalase ist ein Enzym (biologischer Katalysator), das die Zersetzung von Wasserstoffperoxid katalysiert: 2 H₂O₂ → 2 H₂O + O₂. H₂O₂ ist ein zellschädigendes Oxidationsmittel, das bei Stoffwechselreaktionen entsteht. Katalase senkt die Aktivierungsenergie dieser Zersetzungsreaktion enorm — die Reaktionsrate steigt um den Faktor 10⁷. Klinisch relevant: Ein Katalase-Mangel (Akatalasämie) kann zu Gewebeschäden durch H₂O₂-Akkumulation führen. Dieser Fall vereint Enzymkatalyse und Zersetzungsreaktion.",
          hints: [
            "Suche die Reaktion, bei der ein Protein (Enzym) die Reaktionsgeschwindigkeit erhöht.",
            "Katalase ist ein wichtiges Schutzsystem der Zelle gegen oxidativen Stress.",
          ],
          tags: ["enzymkatalyse", "katalase", "zersetzung"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 02: Reaktionskinetik
    // ─────────────────────────────────────────────
    {
      id: "ch-7-02",
      title: "Reaktionskinetik — Geschwindigkeit und Faktoren",
      stichworte: [
        "Reaktionsgeschwindigkeit",
        "Geschwindigkeitsgesetz",
        "Reaktionsordnung",
        "Arrhenius-Gleichung",
        "RGT-Regel",
        "Michaelis-Menten-Kinetik",
        "Halbwertszeit",
        "Aktivierungsenergie",
        "Geschwindigkeitskonstante",
        "Enzymkinetik",
      ],
      content: `## Einleitung

**Worum geht es?** Die **Reaktionskinetik** beschreibt, **wie schnell** Reaktionen ablaufen: Reaktionsgeschwindigkeit v, Geschwindigkeitsgesetz v = k·[A]ᵐ·[B]ⁿ, Reaktionsordnungen (0., 1., 2.) mit unterschiedlichen Halbwertszeiten. **Michaelis-Menten-Kinetik** gilt für Enzyme (v = vₘₐₓ·[S]/(Kₘ+[S])); **Enzymhemmung** (kompetitiv, nichtkompetitiv) und Einfluss von Temperatur (RGT-Regel, Arrhenius) und pH sind zentral. **Warum für den MedAT relevant?** Halbwertszeit bei 1. Ordnung (Pharmakokinetik), Ethanolabbau (0. Ordnung), Michaelis-Menten (Kₘ, vₘₐₓ), kompetitive vs. nicht-kompetitive Hemmung und RGT-Regel werden häufig geprüft. **Welche Fragen werden beantwortet?** „t₁/₂ bei 1. Ordnung?“; „Warum Ethanol 0. Ordnung?“; „Was ändert kompetitive Hemmung?“; „[S] ≫ Kₘ → welche Ordnung?“; „RGT-Regel?“; „Arrhenius: was macht der Katalysator?“; „Steady-State nach wie vielen t₁/₂?“.

**In diesem Kapitel lernst du:**
- **Reaktionsgeschwindigkeit** v = Δ[P]/Δt = −Δ[E]/Δt [mol·L⁻¹·s⁻¹]; Geschwindigkeitsgesetz v = k·[A]ᵐ·[B]ⁿ
- **Reaktionsordnungen:** 0. (v = k, linear), 1. (v = k·[A], t₁/₂ = ln2/k konstant), 2. (v = k·[A]²)
- **RGT-Regel:** +10 °C → v verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3); **Arrhenius** k = A·e^(−E_A/RT)
- **Michaelis-Menten:** v = vₘₐₓ·[S]/(Kₘ+[S]); Kₘ = [S] bei v = vₘₐₓ/2; [S] ≫ Kₘ → 0. Ordnung (Sättigung)
- **Enzymhemmung:** kompetitiv (Kₘ↑, vₘₐₓ gleich, durch Substratüberschuss aufhebbar); nichtkompetitiv (vₘₐₓ↓, Kₘ gleich)
- **Halbwertszeit:** 1. Ordnung t₁/₂ = ln2/k (konzentrationsunabhängig); nach ~5 t₁/₂ < 3 % Rest; Ethanol ~0,1–0,15 ‰/h (0. Ordnung)

---

## Reaktionsgeschwindigkeit

Die **Reaktionsgeschwindigkeit v** beschreibt, wie schnell sich Konzentrationen mit der Zeit ändern:

**v = Δ[Produkt] / Δt = −Δ[Edukt] / Δt** [mol·L⁻¹·s⁻¹]

Das negative Vorzeichen bei Edukten zeigt, dass deren Konzentration abnimmt. Die momentane Reaktionsgeschwindigkeit ist der Grenzwert des Differenzenquotienten (Ableitung der Konzentrations-Zeit-Kurve). Im Verlauf einer Reaktion nimmt v in der Regel ab, weil die Eduktkonzentrationen sinken.

![Energieprofil](/grafik-21-energieprofil.svg)


![Katalyse und Gleichgewicht](/grafik-massenwirkungsgesetz.svg)


> **Merke:** Bei der Reaktion aA + bB → cC + dD gilt: v = −(1/a)·Δ[A]/Δt = (1/c)·Δ[C]/Δt. Die stöchiometrischen Koeffizienten müssen berücksichtigt werden!

## Das Geschwindigkeitsgesetz

Das **empirische Geschwindigkeitsgesetz** verknüpft v mit den Konzentrationen:

**v = k · [A]ᵐ · [B]ⁿ**

- k = Geschwindigkeitskonstante (temperaturabhängig, Einheit hängt von Ordnung ab)
- m = partielle Ordnung bezüglich A; n = partielle Ordnung bezüglich B
- Gesamtordnung = m + n
- Wichtig: m und n müssen **experimentell** bestimmt werden — sie ergeben sich nicht aus den stöchiometrischen Koeffizienten!

**Reaktionsordnungen im Vergleich:**

| Ordnung | Gesetz | [A]-t-Kurve | t₁/₂ | Einheit k | Beispiel |
|---|---|---|---|---|---|
| 0. | v = k | linear | [A]₀/(2k) | mol·L⁻¹·s⁻¹ | Ethanol-Abbau |
| 1. | v = k·[A] | exponentiell | ln 2/k | s⁻¹ | Radioakt. Zerfall |
| 2. | v = k·[A]² | hyperbolisch | 1/(k·[A]₀) | L·mol⁻¹·s⁻¹ | 2 NO₂ → 2 NO + O₂ |

- **0. Ordnung (v = k):** v konzentrationsunabhängig. [A] sinkt linear. Halbwertszeit t₁/₂ = [A]₀/(2k) — konzentrationsabhängig. Beispiel: Ethanol-Abbau in der Leber (~0,1–0,15 ‰/h, enzymgesättigt durch ADH/ALDH).
- **1. Ordnung (v = k · [A]):** Verdopplung von [A] verdoppelt v. [A] = [A]₀ · e^(−kt), sinkt exponentiell. t₁/₂ = ln 2/k ≈ 0,693/k ist konzentrationsunabhängig. Beispiel: radioaktiver Zerfall, Pharmakokinetik.
- **2. Ordnung (v = k · [A]²):** Verdopplung von [A] vervierfacht v. t₁/₂ = 1/(k·[A]₀) — konzentrationsabhängig.

**Rechenbeispiel — Halbwertszeit 1. Ordnung:**
Medikament mit k = 0,0693 h⁻¹. t₁/₂ = 0,693 / 0,0693 = 10 h. Nach 10 h: 50 %. Nach 20 h: 25 %. Nach 30 h: 12,5 %. Steady-State nach ~5 Halbwertszeiten (< 3 % Rest).

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**1. Konzentration:** Höhere Konzentration → mehr Kollisionen pro Zeiteinheit → höheres v (gilt nicht für 0. Ordnung). Grundlage: Stoßtheorie — nur wirksame Zusammenstöße (Energie ≥ E_A + richtige Orientierung) führen zur Reaktion.

**2. Temperatur (RGT-Regel):** Erhöhung um 10 °C verdoppelt bis verdreifacht v (Q₁₀ = 2–3). Begründung: Maxwell-Boltzmann-Verteilung verschiebt sich — mehr Moleküle überschreiten E_A. Bei Enzymen gilt dies nur bis zur Denaturierungstemperatur (~42 °C beim Menschen).

**Rechenbeispiel — RGT:** v₂₀°C = 2 mmol/s, Q₁₀ = 2,5. Bei 40 °C (+20 °C): v = 2 × 2,5² = 12,5 mmol/s — über 6× schneller.

**3. Aktivierungsenergie E_A (Arrhenius-Gleichung):**
k = A · e^(−E_A / RT)
- A = Frequenzfaktor (Stoßfrequenz × Geometriefaktor)
- R = 8,314 J·mol⁻¹·K⁻¹; T in Kelvin
- Je kleiner E_A, desto größer k und damit v.
- Katalysatoren senken E_A → k steigt exponentiell → Reaktion wird schneller.
- E_A ist die Differenz zwischen Eduktniveau und Übergangszustand — nicht identisch mit ΔH!

**4. Oberfläche:** Bei heterogenen Reaktionen: Größere Kontaktfläche → höheres v. Fein pulverisierte Feststoffe reagieren deutlich schneller (Staubexplosionen). Klinisch: Mikronisierung von Tabletten erhöht die Bioverfügbarkeit schlecht löslicher Wirkstoffe.

**5. Lösungsmittel und Ionenstärke:** Beeinflussen die effektive Konzentration und Aktivität der Reaktanten. Höhere Ionenstärke kann beschleunigend oder hemmend wirken je nach Ladung der Reaktanten.

## Michaelis-Menten-Kinetik

Für Enzymreaktionen gilt eine spezielle Kinetik:

**v = vₘₐₓ · [S] / (Kₘ + [S])**

- vₘₐₓ = maximale Geschwindigkeit (alle aktiven Zentren besetzt)
- Kₘ = Michaelis-Konstante: [S] bei v = vₘₐₓ/2 → Maß für Substrataffinität (kleines Kₘ = hohe Affinität)
- Bei [S] ≪ Kₘ: v ≈ (vₘₐₓ/Kₘ) · [S] → 1. Ordnung
- Bei [S] ≫ Kₘ: v ≈ vₘₐₓ → 0. Ordnung (Sättigung)
- **Lineweaver-Burk-Plot** (1/v vs. 1/[S]): x-Achsenabschnitt = −1/Kₘ, y-Achsenabschnitt = 1/vₘₐₓ

> **Merke:** Kompetitive Hemmung: Kₘ(app) ↑, vₘₐₓ gleich — durch Substratüberschuss aufhebbar. Nicht-kompetitive Hemmung: vₘₐₓ ↓, Kₘ gleich — nicht durch Substratüberschuss aufhebbar.

| Hemmtyp | Kₘ | vₘₐₓ | Aufhebbar? | Beispiel |
|---|---|---|---|---|
| Kompetitiv | ↑ | gleich | ja (↑[S]) | Methotrexat/DHFR |
| Nicht-kompetitiv | gleich | ↓ | nein | Schwermetalle (Pb²⁺) |
| Unkompetitiv | ↓ | ↓ | nein | Lithium/IMPase |

## Halbwertszeit und Pharmaka

Die **Halbwertszeit t₁/₂** ist die Zeit, in der die Konzentration auf die Hälfte abfällt.
- Für 1. Ordnung: t₁/₂ = ln 2 / k ≈ 0,693 / k (konzentrationsunabhängig → klinisch praktisch!)
- Viele Pharmakokinetik-Modelle nutzen dies: Medikamentenspiegel, Dosierungsintervalle.
- Faustregel: Nach 5 Halbwertszeiten ist der Wirkstoff praktisch eliminiert (< 3 % verbleibend).
- Ethanol hingegen: 0. Ordnung wegen Enzymkapazitätssättigung → konstante Abnahme (~0,1–0,15 ‰/h).
- Klinisch: Ibuprofen (t₁/₂ ≈ 2 h, häufige Gabe) vs. Amlodipin (t₁/₂ ≈ 35 h, 1× täglich). Dosierungsintervall ≈ 1–2 × t₁/₂.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Reaktionsordnungen:** 0. (v = k, t₁/₂ = [A]₀/(2k) konzentrationsabhängig); 1. (v = k·[A], **t₁/₂ = ln2/k** konstant); 2. (v = k·[A]²)
- **Halbwertszeit 1. Ordnung:** t₁/₂ = ln2/k ≈ 0,693/k — **konzentrationsunabhängig** (klinisch für Dosierung wichtig)
- **Ethanolabbau:** 0. Ordnung (~0,1–0,15 ‰/h), weil ADH/ALDH bei typischen Spiegeln gesättigt ([S] ≫ Kₘ)
- **Michaelis-Menten:** v = vₘₐₓ·[S]/(Kₘ+[S]); Kₘ = [S] bei v = vₘₐₓ/2; kleines Kₘ = hohe Affinität
- **Kompetitive Hemmung:** Kₘ(app)↑, vₘₐₓ gleich — durch Substratüberschuss aufhebbar (z. B. Methotrexat/DHFR)
- **Nichtkompetitive Hemmung:** vₘₐₓ↓, Kₘ gleich — nicht aufhebbar (z. B. Schwermetalle)
- **RGT-Regel:** +10 °C → v verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3); **Arrhenius** k = A·e^(−E_A/RT) — Katalysator senkt E_A
- **Steady-State:** nach ~5 Halbwertszeiten < 3 % Rest; Reaktionsordnungen **experimentell** bestimmen, nicht aus Stöchiometrie

**Ergänzend vertiefend:** Reaktionsordnung aus Experiment; Lineweaver-Burk. Typische Fallen: Ordnung aus Experiment, nicht aus Koeffizienten; 0. Ordnung t₁/₂ konzentrationsabhängig; kompetitiv ≠ nichtkompetitiv (Hemmung).

**Häufige Prüfungsfragen:**
- „t₁/₂ bei 1. Ordnung?" → t₁/₂ = ln2/k, konzentrationsunabhängig
- „Warum Ethanol 0. Ordnung?" → Enzym gesättigt ([S] ≫ Kₘ) → v = vₘₐₓ konstant
- „Was ändert kompetitive Hemmung?" → Kₘ↑, vₘₐₓ gleich; durch mehr Substrat überwindbar

**Typische Prüfungsfallen:**
- Ordnungen folgen dem **Experiment**, nicht den Koeffizienten; 0. Ordnung: t₁/₂ konzentrationsabhängig; Kompetitiv ≠ Nichtkompetitiv

**Wichtige Begriffe & Definitionen:**
- **Michaelis-Konstante Kₘ:** Substratkonzentration, bei der v = vₘₐₓ/2; Maß für Substrataffinität (kleines Kₘ = hohe Affinität).
- **Halbwertszeit t₁/₂:** Zeit, in der die Konzentration auf die Hälfte sinkt; bei 1. Ordnung konstant t₁/₂ = ln2/k.
- **RGT-Regel:** Reaktionsgeschwindigkeits-Temperatur-Regel; Q₁₀ ≈ 2–3 pro 10 °C (gilt bis Denaturierung ~42 °C).

**Prüfungsrelevante Zahlen/Fakten:**
- Ethanol ~0,1–0,15 ‰/h; Steady-State nach ~5 t₁/₂ (< 3 %); Q₁₀ ≈ 2–3

---
## Zusammenfassung (ultrakompakt)

- **v = k·[A]ᵐ·[B]ⁿ**: Geschwindigkeitsgesetz; k = Geschwindigkeitskonstante, m/n = Teilordnungen
- **RGT-Regel**: 10 °C Temperaturerhöhung → v verdoppelt (Q₁₀ ≈ 2); erklärt Hypothermie-Neuroprotektion, Fieberanstieg
- **Michaelis-Menten**: v = vₘₐₓ·[S] / (Kₘ + [S]); Kₘ = [S] bei v = vₘₐₓ/2; niedriger Kₘ = hohe Substrataffinität
- **Enzymhemmung**: kompetitiv (Kₘ ↑, vₘₐₓ = const, überwindbar); nicht-kompetitiv (vₘₐₓ ↓, Kₘ = const); unkompetitiv (beide ↓)
- Beispiele: Methotrexat hemmt DHFR kompetitiv; Schwermetalle nicht-kompetitiv; Lithium unkompetitiv (IMPase)
- **Halbwertszeit t₁/₂**: 1. Ordnung: t₁/₂ = ln2/k (konzentrationsunabhängig!); 0. Ordnung (Ethanol): konstante Abnahme ~0,1–0,15 ‰/h
- Nach **5 Halbwertszeiten** < 3 % verbleibend → Dosierungsintervall klinisch wichtig`,

      lernziele: [
        "Die Reaktionsgeschwindigkeit formal definieren und das Geschwindigkeitsgesetz v = k·[A]ᵐ·[B]ⁿ interpretieren.",
        "Reaktionsordnungen (0., 1., 2.) mit ihren Konzentrations-Zeit-Profilen und Halbwertszeiten beschreiben.",
        "Die RGT-Regel und die Arrhenius-Gleichung qualitativ und quantitativ auf klinische Beispiele anwenden.",
        "Die Michaelis-Menten-Kinetik erläutern und Kₘ sowie vₘₐₓ im Linienweaver-Burk-Plot verorten.",
        "Den Ethanol-Metabolismus (0. Ordnung) und Pharmako-Halbwertszeiten (1. Ordnung) als prüfungsrelevante Beispiele erklären.",
      ],

      sections: [
        {
          heading: "Reaktionsordnungen und ihre Halbwertszeiten",
          text: "Bei der 0. Ordnung ist v = k konstant; [A] sinkt linear; t₁/₂ = [A]₀ / (2k) — konzentrationsabhängig. Bei der 1. Ordnung ist v = k·[A]; [A] sinkt exponentiell; t₁/₂ = ln 2/k — konzentrationsunabhängig (klinisch wertvoll für Medikamentendosierung). Bei der 2. Ordnung gilt v = k·[A]²; [A] sinkt noch schneller; t₁/₂ = 1/(k·[A]₀). Prüfungsrelevant: Ethanol (0. Ordnung, enzymatisch gesättigt) vs. die meisten Pharmaka (1. Ordnung).",
          merksatz:
            "Eselsbrücke: 1. Ordnung → halbwertszeit konstant → ideal für klinische Dosierung!",
        },
        {
          heading: "Arrhenius und RGT-Regel",
          text: "Die Arrhenius-Gleichung k = A·e^(−E_A/RT) erklärt die Temperaturabhängigkeit von k. Kleines E_A → großes k → schnelle Reaktion. Die RGT-Regel (Q₁₀ ≈ 2–3) gilt für viele chemische und enzymatische Reaktionen im physiologischen Bereich. Bei Fieber (+2 °C) steigt v bei Entzündungsreaktionen um ca. 20–35 % — Katalyse der Immunantwort. Oberhalb der Denaturierungstemperatur bricht die Enzymaktivität ein.",
          merksatz:
            "RGT: +10 °C ≈ 2- bis 3-fache Geschwindigkeit. Gilt NICHT über der Denaturierungstemperatur von Enzymen.",
        },
        {
          heading: "Michaelis-Menten-Kinetik",
          text: "v = vₘₐₓ·[S]/(Kₘ+[S]): Sättigungskurve (hyperbolisch). Kₘ = Substratkonzentration bei v = vₘₐₓ/2. Kleines Kₘ → hohe Affinität. Lineweaver-Burk-Plot (Doppelreziprok) linearisiert die Kurve zur Bestimmung von Kₘ und vₘₐₓ. Kompetitive Hemmer erhöhen scheinbares Kₘ, lassen vₘₐₓ unberührt. Nicht-kompetitive Hemmer senken vₘₐₓ, lassen Kₘ unberührt.",
          merksatz:
            "Kₘ = [S] bei halbmaximaler Geschwindigkeit. Kleines Kₘ = hohe Enzymaffinität für Substrat.",
        },
      ],

      diagram: "enzyme-substrate",

      merksätze: [
        "v = Δ[P]/Δt = −Δ[E]/Δt mit Einheit mol·L⁻¹·s⁻¹.",
        "Geschwindigkeitsgesetz: v = k·[A]ᵐ·[B]ⁿ — Ordnungen sind experimentell, nicht aus Stöchiometrie.",
        "0. Ordnung: v = k, [A] sinkt linear (z. B. Ethanol-Metabolismus bei Sättigung).",
        "1. Ordnung: v = k·[A], t₁/₂ = ln 2/k ist konzentrationsunabhängig (viele Pharmaka).",
        "RGT-Regel: Q₁₀ ≈ 2–3; +10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit.",
        "Arrhenius: k = A·e^(−E_A/RT) — kleines E_A bedeutet schnelle Reaktion.",
        "Michaelis-Menten: v = vₘₐₓ·[S]/(Kₘ+[S]) — Kₘ = Maß für Substrataffinität.",
        "Kompetitive Hemmung: Kₘ ↑, vₘₐₓ unverändert.",
        "Ethanol-Abbau: ~0,1–0,15 ‰ pro Stunde, 0. Ordnung wegen gesättigter Enzymkapazität.",
        "Fieber +2 °C erhöht biochemische Reaktionsgeschwindigkeiten um ~20–35 % (RGT-Prinzip).",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist die Michaelis-Menten-Konstante Kₘ, wie wird sie bestimmt, und welche klinische Bedeutung hat sie?",
        answer:
          "Die Michaelis-Menten-Konstante Kₘ ist definiert als die Substratkonzentration [S], bei der die Enzymgeschwindigkeit genau die Hälfte der Maximalgeschwindigkeit vₘₐₓ beträgt: v = vₘₐₓ/2. Sie ist ein Maß für die Affinität des Enzyms zu seinem Substrat — ein kleines Kₘ bedeutet, dass das Enzym bereits bei niedrigen Substratkonzentrationen nahezu gesättigt ist (hohe Affinität), ein großes Kₘ bedeutet, dass hohe Konzentrationen benötigt werden. Experimentell wird Kₘ über Messreihen verschiedener Substratkonzentrationen ermittelt und im Lineweaver-Burk-Doppelreziprokplot (1/v gegen 1/[S]) als −1/Kₘ am x-Achsenabschnitt abgelesen. Klinisch ist Kₘ bei der Pharmakologie relevant: Enzyme, die Medikamente metabolisieren (z. B. CYP450-Enzyme), haben charakteristische Kₘ-Werte; kompetitive Hemmstoffe erhöhen den apparenten Kₘ-Wert, ohne vₘₐₓ zu senken. Das ist bei der Entwicklung von Enzymhemmern (z. B. ACE-Hemmer, Statine) zentral. Auch bei erblichen Enzymdefekten (z. B. Phenylketonurie: PAH-Mangel) verändert sich Kₘ oder vₘₐₓ und bestimmt den Schweregrad der Erkrankung.",
      },

      klinischerBezug:
        "Ethanol-Abbau durch Alkoholdehydrogenase (0. Ordnung, ~0,1 ‰/h) und Pharmakokinetik (1. Ordnung, konstante Halbwertszeit). Fieber erhöht Immunreaktionen via RGT-Prinzip. Michaelis-Menten-Kinetik ist Basis für Enzyminhibitor-Pharmaka (Statine, ACE-Hemmer).",

      selfTest: [
        {
          question: "Welche Einheit hat die Reaktionsgeschwindigkeit v?",
          options: ["mol / L", "mol · L⁻¹ · s⁻¹", "J / mol", "s⁻¹", "L · mol⁻¹"],
          correctIndex: 1,
          explanation:
            "Die Reaktionsgeschwindigkeit v = Δ[Konzentration] / Δt hat die Einheit (mol/L) / s = mol·L⁻¹·s⁻¹. mol/L allein ist eine Einheit der Konzentration (ohne Zeitbezug). J/mol ist eine Energieeinheit (z. B. für Aktivierungsenergie oder Enthalpie). s⁻¹ ist die Einheit der Geschwindigkeitskonstante k bei einer Reaktion 1. Ordnung. L·mol⁻¹ wäre ein Reziprokwert einer Konzentration. Nur mol·L⁻¹·s⁻¹ gibt korrekt an, um wie viel sich die Konzentration pro Zeiteinheit ändert.",
          hints: [
            "v ist eine Konzentrationsänderung pro Zeiteinheit — kombiniere die Einheiten entsprechend.",
            "Konzentration: mol/L; Zeit: s — was ergibt sich daraus?",
          ],
          tags: ["kinetik", "einheiten", "reaktionsgeschwindigkeit"],
          difficulty: 1,
        },
        {
          question:
            "Eine Reaktion 1. Ordnung hat k = 0,0693 min⁻¹. Wie lange dauert es, bis die Halbwertszeit erreicht ist?",
          options: ["5 min", "7 min", "10 min", "14 min", "20 min"],
          correctIndex: 2,
          explanation:
            "Für eine Reaktion 1. Ordnung gilt: t₁/₂ = ln 2 / k ≈ 0,693 / k. Mit k = 0,0693 min⁻¹ ergibt sich: t₁/₂ = 0,693 / 0,0693 min⁻¹ = 10 min. Die Halbwertszeit bei der 1. Ordnung ist konzentrationsunabhängig — ein Vorteil für klinische Anwendungen wie die Berechnung von Medikamenten-Dosierungsintervallen. Nach 10 min ist die Konzentration auf 50 %, nach 20 min auf 25 %, nach 30 min auf 12,5 % gesunken.",
          hints: [
            "Formel für 1. Ordnung: t₁/₂ = ln 2 / k. ln 2 ≈ 0,693.",
            "Teile 0,693 durch den gegebenen k-Wert.",
          ],
          tags: ["kinetik", "halbwertszeit", "erste-ordnung"],
          difficulty: 2,
        },
        {
          question:
            "Was sagt die RGT-Regel über die Reaktionsgeschwindigkeit bei Temperaturerhöhung aus?",
          options: [
            "Eine Temperaturerhöhung um 10 °C halbiert die Reaktionsgeschwindigkeit.",
            "Temperaturerhöhung hat keinen Einfluss auf die Reaktionsgeschwindigkeit.",
            "Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit.",
            "Die Reaktionsgeschwindigkeit steigt linear mit der Temperatur (proportional zu T in Kelvin).",
            "Eine Temperaturerhöhung um 10 °C verzehnfacht die Reaktionsgeschwindigkeit.",
          ],
          correctIndex: 2,
          explanation:
            "Die RGT-Regel (Reaktionsgeschwindigkeits-Temperatur-Regel, Van't-Hoff-Regel) besagt: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Temperaturkoeffizient Q₁₀ = 2–3). Begründung (Arrhenius): Bei höherer Temperatur haben mehr Moleküle genug kinetische Energie, um die Aktivierungsenergie E_A zu überwinden. Bei Enzymen gilt dies nur im physiologischen Bereich — oberhalb der Denaturierungstemperatur (~42 °C beim Menschen) fällt die Aktivität ab. Klinische Relevanz: Fieber (+2–3 °C) beschleunigt Immunreaktionen und Stoffwechsel.",
          hints: [
            "RGT steht für Reaktionsgeschwindigkeits-Temperatur-Regel. Merke: +10 °C × 2-3.",
            "Der Temperaturkoeffizient Q₁₀ beschreibt, um welchen Faktor v steigt.",
          ],
          tags: ["rgt-regel", "temperatur", "kinetik"],
          difficulty: 1,
        },
        {
          question: "Warum folgt der Ethanolabbau in der Leber einer Kinetik 0. Ordnung?",
          options: [
            "Weil Ethanol keine Aktivierungsenergie benötigt.",
            "Weil die beteiligten Enzyme (ADH, ALDH) bei typischen Blutalkoholspiegeln gesättigt sind.",
            "Weil Ethanol mit Wasser reagiert und kein Enzym beteiligt ist.",
            "Weil die Körpertemperatur konstant ist und E_A nicht beeinflusst.",
            "Weil Ethanol eine kleine Molmasse hat und besonders schnell reagiert.",
          ],
          correctIndex: 1,
          explanation:
            "Der Abbau von Ethanol durch Alkoholdehydrogenase (ADH) und Aldehyddehydrogenase (ALDH) folgt bei normalen bis erhöhten Blutalkoholspiegeln einer Kinetik 0. Ordnung. Das liegt daran, dass die Enzyme bei diesen Konzentrationen bereits gesättigt sind — alle aktiven Zentren sind besetzt. Da [S] ≫ Kₘ gilt, ist v ≈ vₘₐₓ = konstant (0. Ordnung nach Michaelis-Menten). Daraus folgt: Der Ethanolspiegel sinkt mit konstanter Rate von ~0,1–0,15 ‰ pro Stunde, unabhängig von der Ausgangskonzentration. Erst bei sehr niedrigen Spiegeln ([S] ≈ Kₘ) wechselt die Kinetik zur 1. Ordnung.",
          hints: [
            "Denke an Michaelis-Menten: Was passiert, wenn [S] ≫ Kₘ gilt?",
            "Wenn alle aktiven Zentren des Enzyms besetzt sind, kann v nicht weiter steigen.",
          ],
          tags: ["ethanol", "enzymkinetik", "null-ordnung", "michaelis-menten"],
          difficulty: 3,
        },
        {
          question: "In der Arrhenius-Gleichung k = A·e^(−E_A/RT): Was bewirkt ein Katalysator?",
          options: [
            "Er erhöht die Temperatur T des Systems.",
            "Er erhöht den präexponentiellen Faktor A auf unendlich.",
            "Er senkt E_A, wodurch k und damit die Reaktionsgeschwindigkeit steigen.",
            "Er erhöht R (Gaskonstante) für diese spezifische Reaktion.",
            "Er macht die Reaktion exotherm, wenn sie zuvor endotherm war.",
          ],
          correctIndex: 2,
          explanation:
            "In der Arrhenius-Gleichung k = A·e^(−E_A/RT) ist E_A die Aktivierungsenergie. Ein Katalysator senkt E_A, indem er einen alternativen Reaktionspfad mit einer niedrigeren Energiebarriere bereitstellt. Da E_A im Exponenten mit negativem Vorzeichen steht, führt eine Senkung von E_A zu einem größeren Exponentialterm — k steigt exponentiell. Die Temperatur T, der Frequenzfaktor A und die Gaskonstante R werden vom Katalysator nicht verändert. Wichtig: ΔH und ΔG der Reaktion bleiben unverändert — der Katalysator beschleunigt die Einstellung des Gleichgewichts, verschiebt es aber nicht.",
          hints: [
            "Schau auf E_A im Exponenten der Arrhenius-Gleichung: Was passiert, wenn E_A kleiner wird?",
            "e^(−kleiner Wert) ist größer als e^(−großer Wert).",
          ],
          tags: ["arrhenius", "katalyse", "aktivierungsenergie"],
          difficulty: 2,
        },
        {
          question: "Bei der Michaelis-Menten-Kinetik: Was gilt, wenn [S] ≫ Kₘ?",
          options: [
            "v ≈ 0, da das Enzym inhibiert wird.",
            "v ≈ vₘₐₓ, da das Enzym gesättigt ist (0. Ordnung).",
            "v ≈ (vₘₐₓ/Kₘ)·[S], da lineare Kinetik gilt (1. Ordnung).",
            "Kₘ steigt auf den Wert von [S].",
            "vₘₐₓ sinkt auf die Hälfte.",
          ],
          correctIndex: 1,
          explanation:
            "In der Michaelis-Menten-Gleichung v = vₘₐₓ·[S]/(Kₘ+[S]) gilt: Wenn [S] sehr viel größer als Kₘ ist, wird der Nenner (Kₘ+[S]) ≈ [S]. Damit vereinfacht sich die Gleichung zu v ≈ vₘₐₓ·[S]/[S] = vₘₐₓ. Die Reaktion läuft mit maximaler Geschwindigkeit, alle aktiven Zentren des Enzyms sind besetzt — Sättigungszustand. Kinetisch verhält sich das System wie eine Reaktion 0. Ordnung: v ist konstant und unabhängig von [S]. Dies ist das Prinzip hinter dem Ethanol-Metabolismus bei hohen Blutalkoholspiegeln.",
          hints: [
            "Wenn [S] ≫ Kₘ: Was passiert im Nenner (Kₘ + [S])?",
            "Sättigung bedeutet: Alle aktiven Zentren sind belegt.",
          ],
          tags: ["michaelis-menten", "enzymkinetik", "saettigung"],
          difficulty: 2,
        },
        {
          question: "Welche Aussage zur Halbwertszeit einer Reaktion 1. Ordnung ist korrekt?",
          options: [
            "Sie hängt von der Anfangskonzentration [A]₀ ab.",
            "Sie ist konstant und unabhängig von der Konzentration: t₁/₂ = ln 2 / k.",
            "Sie entspricht dem Reziproken der Geschwindigkeitskonstante k.",
            "Sie gilt nur für radioaktive Zerfälle, nicht für chemische Reaktionen.",
            "Sie ist kleiner als t₁/₂ der 0. Ordnung bei gleicher Anfangskonzentration.",
          ],
          correctIndex: 1,
          explanation:
            "Für eine Reaktion 1. Ordnung gilt: [A] = [A]₀ · e^(−kt). Die Halbwertszeit ist der Zeitpunkt, an dem [A] = [A]₀/2. Setzt man dies ein: [A]₀/2 = [A]₀ · e^(−kt₁/₂) → 1/2 = e^(−kt₁/₂) → ln(1/2) = −kt₁/₂ → t₁/₂ = ln 2 / k ≈ 0,693/k. Diese Halbwertszeit ist konstant und unabhängig von [A]₀ — ein großer klinischer Vorteil, weil Dosierungsintervalle einfach berechnet werden können. Für Reaktionen 0. Ordnung hingegen gilt t₁/₂ = [A]₀ / (2k), was von der Anfangskonzentration abhängt.",
          hints: [
            "Leite t₁/₂ aus [A] = [A]₀/2 mit der Formel [A] = [A]₀·e^(−kt) ab.",
            "Für 1. Ordnung: t₁/₂ = ln 2 / k. Ist [A]₀ in dieser Formel enthalten?",
          ],
          tags: ["halbwertszeit", "erste-ordnung", "pharmakokinetik"],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 03: Stöchiometrie und Ausbeute
    // ─────────────────────────────────────────────
    {
      id: "ch-7-03",
      title: "Stöchiometrie und Ausbeute",
      stichworte: [
        "Stöchiometrie",
        "Mol-Verhältnis",
        "Mangelreagenz",
        "Limiting Reagent",
        "Prozentuale Ausbeute",
        "Haber-Bosch-Prozess",
        "Molmasse",
        "Reaktionsgleichung",
        "Massenerhaltung",
        "Respirationsquotient",
      ],
      content: `## Einleitung

**Worum geht es?** Die **Stöchiometrie** beschreibt die **Mengenverhältnisse** in chemischen Reaktionen: Stoffmenge n = m/M, Molverhältnisse aus den stöchiometrischen Koeffizienten, **Grenzreaktant (Mangelreagenz)** als begrenzender Faktor für die Ausbeute, Konzentration c = n/V und prozentuale Ausbeute. **Warum für den MedAT relevant?** Reaktionsgleichungen ausgleichen, Mol- und Massenberechnungen (m → n → n → m), Grenzreaktant-Bestimmung (Quotient n/Koeffizient → kleinster = Mangelreagenz), physiologische NaCl 0,9 %, Respirationsquotient (Glucose RQ = 1,0; Fette ≈ 0,7) und Infusionsberechnungen werden geprüft. **Welche Fragen werden beantwortet?** „Wie findet man das Mangelreagenz?“; „Koeffizienten = Mol oder Masse?“; „Schema für Stöchiometrie?“; „RQ bei Glucose?“; „Physiologische NaCl in mmol/L?“; „Prozentuale Ausbeute?“; „Haber-Bosch Stöchiometrie?“.

**In diesem Kapitel lernst du:**
- **Stöchiometrie-Schema:** m(Edukt) → n = m/M → n(Produkt) über Koeffizientenverhältnis → m(Produkt) = n×M
- **Koeffizienten = Mol-Verhältnisse**, NICHT Massenverhältnisse; Reaktionsgleichung ausgleichen (Atome + Ladung)
- **Grenzreaktant (Mangelreagenz):** für jedes Edukt n/Koeffizient bilden → **kleinster Quotient** = Mangelreagenz; Ausbeute nur daraus berechnen
- **Prozentuale Ausbeute** = (tatsächliche / theoretische Ausbeute) × 100 %
- **Konzentration** c = n/V; **Physiologische NaCl** 0,9 % (w/v) = 154 mmol/L; Avogadro N_A = 6,022×10²³ mol⁻¹; V_m(Gas) = 22,4 L/mol (NTP)
- **Respirationsquotient** RQ = CO₂(prod.)/O₂(verbr.): Glucose = 1,0; Fette ≈ 0,7; Proteine ≈ 0,8; RQ > 1 → Lipogenese

---

## Was ist Stöchiometrie?

Die **Stöchiometrie** (von griech. stoicheion = Element, metron = Maß) beschreibt die quantitativen Verhältnisse der an einer chemischen Reaktion beteiligten Stoffe. Basis ist die ausgeglichene Reaktionsgleichung, die Atome, Ladungen und Massen erhält. Die Stöchiometrie ist das mathematische Fundament der Chemie und essenziell für Dosierungen in der Medizin.

![Stöchiometrie](/grafik-reaktionstypen.svg)


![Molverhältnisse und Konzentration](/grafik-mg-ug.svg)


> **Merke:** Stöchiometrische Koeffizienten geben Mol-Verhältnisse an, NICHT Massenverhältnisse! Die Grundformeln: n = m/M, m = n × M, c = n/V.

**Grundprinzip:** Die stöchiometrischen Koeffizienten geben die Mol-Verhältnisse an.

Beispiel: **2 H₂ + O₂ → 2 H₂O**
- 2 mol H₂ reagieren mit 1 mol O₂ zu 2 mol H₂O
- Massenerhaltung: 2 × 2 g + 32 g = 36 g → 4 g H₂ + 32 g O₂ → 36 g H₂O ✓
- Koeffizient 2:1:2 gilt für Mol, nicht für Gramm!
- Volumen bei Gasen (Normalbedingungen, 0 °C, 1 atm): V = n × 22,4 L/mol

**Wichtige Konstanten für Stöchiometrie:**
- Avogadro-Zahl: N_A = 6,022 × 10²³ mol⁻¹ (1 mol = 6,022 × 10²³ Teilchen)
- Molares Gasvolumen (Normalbedingungen): V_m = 22,4 L/mol
- Universelle Gaskonstante: R = 8,314 J·mol⁻¹·K⁻¹

## Reaktionsgleichung ausgleichen (Bilanzierung)

Eine Reaktionsgleichung ist ausgeglichen, wenn die Anzahl jeder Atomsorte auf Edukt- und Produktseite gleich ist. Systematische Vorgehensweise:
1. Formeln aufschreiben (Symbole der Stoffe, keine Summenformeln ändern!)
2. Koeffizienten so wählen, dass Atome auf beiden Seiten gleich sind (erst Metalle/Nichtmetalle, zuletzt H und O)
3. Ionen und Ladungen bei ionischen Gleichungen separat bilanzieren
4. Prüfen: Massenerhaltung; Ladungserhaltung bei Redoxgleichungen

**Rechenbeispiel — Bilanzierung einer Reaktionsgleichung:**
Fe₂O₃ + CO → Fe + CO₂ (unausgeglichen)
- Fe: links 2, rechts 1 → Koeffizient 2 vor Fe
- Versuch: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂
- Prüfung: Fe: 2=2 ✓, C: 3=3 ✓, O: 3+3=6 und 3×2=6 ✓ → ausgeglichen!

## Mol-zu-Mol-Umrechnungen und Stöchiometrische Berechnungen

**Schema für Stöchiometrie-Aufgaben:**
1. n (Edukt) aus m und M berechnen: n = m / M
2. Mit Koeffizientenverhältnis umrechnen: n(Produkt) = n(Edukt) × (Koeffizient Produkt / Koeffizient Edukt)
3. m (Produkt) berechnen: m = n × M

Beispiel: Wie viel Gramm H₂O entstehen aus 4 g H₂?
- n(H₂) = 4 g / 2 g/mol = 2 mol
- Verhältnis H₂ : H₂O = 2:2 = 1:1 → n(H₂O) = 2 mol
- m(H₂O) = 2 mol × 18 g/mol = 36 g

## Überschuss- und Mangelreagenz (Limiting Reagent)

In der Realität reagieren Edukte selten im exakten stöchiometrischen Verhältnis. Das **Mangelreagenz (limiting reagent)** ist der Reaktionspartner, der zuerst aufgebraucht wird — er begrenzt die Ausbeute. Das **Überschussreagenz** liegt nach der Reaktion noch vor.

**Systematisches Vorgehen:**
1. n beider Edukte berechnen: n = m / M
2. Quotienten bilden: n(vorhanden) / stöchiometrischer Koeffizient für jedes Edukt
3. Das Reagenz mit dem **kleineren Quotienten** ist das Mangelreagenz
4. Ausbeute ausschließlich auf Basis des Mangelreagenzes berechnen

**Rechenbeispiel — Mangelreagenz bestimmen:**
N₂ + 3 H₂ → 2 NH₃ mit 2 mol N₂ und 5 mol H₂.
- Quotienten: N₂: 2/1 = 2; H₂: 5/3 = 1,67
- H₂ hat den kleineren Quotienten → H₂ ist das Mangelreagenz
- n(NH₃) = 5 mol H₂ × (2/3) = 3,33 mol NH₃ (nicht 4 mol!)
- N₂-Rest: 2 − 5×(1/3) = 2 − 1,67 = 0,33 mol N₂ (Überschuss)

## Prozentuale Ausbeute

In der Praxis wird die theoretische Ausbeute selten vollständig erreicht (Nebenreaktionen, unvollständige Umsätze, Verluste bei der Aufarbeitung).

**Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100**

**Rechenbeispiel — Prozentuale Ausbeute:**
Theoretisch sollten 50 g Produkt entstehen. Tatsächlich werden 38 g isoliert.
Ausbeute = (38/50) × 100 = 76 %. Die 24 % Verlust: Nebenreaktionen, unvollständiger Umsatz, Aufarbeitungsverluste.

> **Merke:** Die theoretische Ausbeute ist immer die Obergrenze. In der Realität wird sie durch Nebenreaktionen, Gleichgewichtslage und Verluste bei der Isolierung unterschritten.

Klinisch/industriell: Der Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃) erreicht nur ~15 % Gleichgewichtsausbeute pro Durchlauf — durch Rückführung der Edukte wird die Gesamtausbeute jedoch auf >90 % gesteigert. Optimale Bedingungen: 400–500 °C, 150–300 bar, Fe-Katalysator. Fritz Haber und Carl Bosch erhielten für diesen Prozess jeweils den Nobelpreis — er versorgt heute ~40 % der Weltbevölkerung mit Nahrung (Düngemittel).

## Stöchiometrie in der Klinik und Pharmazie

- **Infusionszubereitung:** m = c × V × M (z. B. 500 mL einer 0,9 %-igen NaCl-Lösung: 4,5 g NaCl)
- **Molmasse und Dosierung:** Wirkstoffmenge in mol berechnen; bei Antibiotika ist die molare Dosis entscheidend, nicht nur die Masse
- **Blutgasanalyse:** Stöchiometrie des CO₂/HCO₃⁻-Puffersystems: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
- **Glucose-Oxidation:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; pro Mol Glucose 6 Mol CO₂ → Respirationsquotient = 1,0

**Rechenbeispiel — Physiologische Kochsalzlösung (NaCl 0,9 %):**
- 0,9 % (w/v) bedeutet 0,9 g NaCl pro 100 mL
- In 1000 mL: 9 g NaCl
- Molare Konzentration: c = 9 g / (58,5 g/mol × 1 L) = 0,154 mol/L = 154 mmol/L
- Entspricht annähernd der physiologischen Na⁺-Konzentration im Blutplasma (~140 mmol/L)

**Respirationsquotienten verschiedener Nährstoffe:**

| Nährstoff | RQ (CO₂/O₂) | Brennwert |
|---|---|---|
| Kohlenhydrate | 1,0 | 4,1 kcal/g |
| Fette | ~0,7 | 9,3 kcal/g |
| Proteine | ~0,8 | 4,1 kcal/g |
| Ethanol | 0,67 | 7,1 kcal/g |

Klinisch: RQ > 1,0 deutet auf Lipogenese hin (Umwandlung von Kohlenhydraten in Fett, vermehrte CO₂-Produktion). Bei Beatmungspatienten kann dies die CO₂-Elimination erschweren — relevant für die Ernährungstherapie bei ARDS.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Stöchiometrische Koeffizienten** = **Mol-Verhältnisse**, nicht Massenverhältnisse; Schema: m → n (÷M) → n (×Koeff.-Verhältnis) → m (×M)
- **Grenzreaktant (Mangelreagenz):** für jedes Edukt **n(vorhanden)/Koeffizient** berechnen → **kleinster Quotient** = Mangelreagenz; theoretische Ausbeute nur aus diesem
- **Prozentuale Ausbeute** = (tatsächliche / theoretische Ausbeute) × 100 %; theoretische = Obergrenze
- **Reaktionsgleichung ausgleichen:** Atome und Ladung auf beiden Seiten; erst Metalle/Nichtmetalle, **zuletzt H und O**
- **Physiologische NaCl:** 0,9 % (w/v) = 9 g/L = **154 mmol/L**; Glucose 5 % ≈ 0,278 mol/L
- **Respirationsquotient RQ** = CO₂(produziert)/O₂(verbraucht): **Glucose = 1,0**; Fette ≈ 0,7; Proteine ≈ 0,8; RQ > 1 → Lipogenese
- **Haber-Bosch:** N₂ + 3 H₂ → 2 NH₃; Molverhältnis 1:3:2; Avogadro N_A = 6,022×10²³ mol⁻¹; V_m = 22,4 L/mol (NTP)

**Ergänzend vertiefend:** Umsatz, Selektivität. Typische Fallen: Koeffizienten = Mol, nicht Gramm; theoretische ≠ tatsächliche Ausbeute; beim Ausgleichen Redox zuletzt H und O (z. B. mit H⁺/H₂O).

**Häufige Prüfungsfragen:**
- „Wie findet man das Mangelreagenz?" → n/Koeffizient für jedes Edukt → kleinster = Mangelreagenz
- „RQ bei Glucose?" → RQ = 6/6 = 1,0
- „Stöchiometrie-Schema?" → m → n (÷M) → n (×Verhältnis) → m (×M)

**Typische Prüfungsfallen:**
- Koeffizienten = Mol, nicht Gramm; theoretische ≠ tatsächliche Ausbeute; beim Ausgleichen zuletzt H und O

**Wichtige Begriffe & Definitionen:**
- **Grenzreaktant (Mangelreagenz):** Edukt, das zuerst verbraucht ist und die maximale Produktmenge begrenzt; Quotient n/Koeffizient minimal.
- **Respirationsquotient (RQ):** Verhältnis produziertes CO₂ zu verbrauchtem O₂; RQ = 1,0 bei Glucose, < 1 bei Fetten/Proteinen.
- **Stöchiometrisches Verhältnis:** Molverhältnis der Edukte und Produkte, gegeben durch die Koeffizienten der ausgeglichenen Gleichung.

**Prüfungsrelevante Zahlen/Fakten:**
- NaCl 0,9 % = 154 mmol/L; RQ KH 1,0, Fette 0,7, Proteine 0,8; N_A = 6,022×10²³ mol⁻¹; V_m = 22,4 L/mol

---
## Zusammenfassung (ultrakompakt)

- **Stöchiometrie**: Koeffizienten = Mol-Verhältnisse (NICHT Massenverhältnisse!); Schema: m →(÷M)→ n →(×Koeff.)→ n →(×M)→ m
- **Grundformeln**: n = m/M; m = n×M; c = n/V; V(Gas) = n × 22,4 L/mol (NTP)
- **Reaktionsgleichung ausgleichen**: Erst Metalle/Nichtmetalle, zuletzt H und O; Atome und Ladungen auf beiden Seiten gleich
- **Mangelreagenz** (limiting reagent): Quotient n/Koeffizient für alle Edukte berechnen → kleinster Quotient = Mangelreagenz
- **Prozentuale Ausbeute** = (tatsächliche Ausbeute / theoretische Ausbeute) × 100 %
- **Haber-Bosch-Prozess**: N₂ + 3 H₂ ⇌ 2 NH₃; Industriell wichtigste Reaktion; zeigt alle stöchiometrischen Konzepte
- **Respirationsquotient** RQ = CO₂(prod.) / O₂(verbraucht): Glukose = 1,0; Fette ≈ 0,7; Proteine ≈ 0,8; RQ > 1 → Lipogenese
- **Klinisch**: Phy. NaCl 0,9 % = 154 mmol/L; Infusionsberechnungen immer in Mol/L`,

      lernziele: [
        "Reaktionsgleichungen korrekt ausgleichen und stöchiometrische Koeffizienten als Mol-Verhältnisse interpretieren.",
        "Das Mangelreagenz (limiting reagent) in einer Reaktion identifizieren und die maximale Ausbeute berechnen.",
        "Die prozentuale Ausbeute berechnen und Ursachen für Ausbeuteverluste benennen.",
        "Stöchiometrische Berechnungen (n = m/M, Mol-Verhältnisse, m = n×M) sicher und fehlerfrei durchführen.",
        "Klinische Anwendungen der Stöchiometrie in Pharmazie und Physiologie erläutern (Infusionen, Dosierung, Puffersystem).",
      ],

      sections: [
        {
          heading: "Stöchiometrie-Schema: Drei Schritte",
          text: "Schritt 1: n(Edukt) = m / M berechnen. Schritt 2: Mit dem Koeffizientenverhältnis aus der ausgeglichenen Gleichung umrechnen: n(Produkt) = n(Edukt) × (Koeff. Produkt / Koeff. Edukt). Schritt 3: m(Produkt) = n × M berechnen. Dieses Schema funktioniert für alle Massen-, Volumen- und Molberechnungen in Reaktionsaufgaben. Bei Gasen: V = n × 22,4 L/mol (bei Normalbedingungen, 0 °C, 1 atm).",
          merksatz:
            "Drei Schritte: m → n (÷M) → n (×Verhältnis) → m (×M). Nie mol mit Gramm verwechseln!",
        },
        {
          heading: "Mangelreagenz (Limiting Reagent)",
          text: "Das Mangelreagenz begrenzt die Produktmenge. Vorgehen: (1) n beider Edukte bestimmen. (2) Stöchiometrisches Verhältnis prüfen: n(A)/a vs. n(B)/b (a, b = Koeffizienten). Der kleinere Quotient kennzeichnet das Mangelreagenz. Die Ausbeute wird ausschließlich auf Basis des Mangelreagenzes berechnet. In der Industrie minimiert man Ausbeute-Verluste durch Rückführung von Überschussreagenz.",
          merksatz:
            "Das Mangelreagenz ist der begrenzende Faktor — es ist für die Ausbeute entscheidend, nicht das Überschussreagenz.",
        },
        {
          heading: "Klinische Stöchiometrie: Infusionen und Dosierung",
          text: "Physiologische Kochsalzlösung (0,9 % NaCl w/v): 9 g NaCl pro Liter. Molare Konzentration: c = m/(M×V) = 9 g / (58,5 g/mol × 1 L) ≈ 0,154 mol/L ≈ 154 mmol/L. Für Pharmaka gilt: Wirkstoff in mmol/kg oder µmol/L — Molmasse ist entscheidend. Glucose-Infusion (5 %): 50 g/L; Molmasse 180 g/mol → 0,278 mol/L. Bei Überdosierung von Paracetamol (Acetaminophen) ist die Stöchiometrie des toxischen Metaboliten NAPQI klinisch relevant.",
          merksatz:
            "Physiologische NaCl: 0,9 % = 154 mmol/L Na⁺ + 154 mmol/L Cl⁻. Auswendig lernen!",
        },
      ],

      merksätze: [
        "Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Massenverhältnisse.",
        "Schema: m →(÷M)→ n →(×Koeffizientenverhältnis)→ n →(×M)→ m.",
        "Mangelreagenz = der zuerst aufgebrauchte Reaktionspartner, der die Ausbeute begrenzt.",
        "Ausbeute % = (tatsächliche / theoretische Ausbeute) × 100.",
        "Haber-Bosch: N₂ + 3 H₂ ⇌ 2 NH₃; Fe-Katalysator, 400–500 °C, 150–300 bar.",
        "Glucose-Verbrennung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; Respirationsquotient = 1,0.",
        "Physiologische NaCl = 0,9 % = ~154 mmol/L; Glucose 5 % ≈ 0,278 mol/L.",
        "n = m / M; m = n × M; c = n / V — die drei Grundformeln der Stöchiometrie.",
        "Beim Ausgleichen von Gleichungen zuerst Metalle, dann Nichtmetalle, zuletzt H und O.",
        "Nebenreaktionen, unvollständige Umsätze und Aufarbeitungsverluste reduzieren die Ausbeute.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Wie berechnet man die maximale Ausbeute eines Produkts, wenn zwei Edukte in nicht-stöchiometrischen Mengen vorliegen?",
        answer:
          "Wenn zwei Edukte in nicht-stöchiometrischen Mengen eingesetzt werden, muss zunächst das Mangelreagenz (limiting reagent) identifiziert werden, denn dieses bestimmt die maximale Ausbeute. Dazu berechnet man die Stoffmengen beider Edukte (n = m/M) und dividiert jede durch den entsprechenden stöchiometrischen Koeffizienten. Der kleinere Quotient kennzeichnet das Mangelreagenz. Anschließend berechnet man die theoretische Ausbeute des Produkts ausschließlich auf Basis des Mangelreagenzes: n(Produkt) = n(Mangelreagenz) × (Koeffizient Produkt / Koeffizient Mangelreagenz). Die Masse des Produkts ergibt sich aus m = n × M. Die tatsächlich erzielte Ausbeute ist in der Praxis immer kleiner als die theoretische (Nebenreaktionen, Verluste bei der Aufarbeitung, Gleichgewichtslagen). Die prozentuale Ausbeute berechnet sich als: Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100. Ein industriell relevantes Beispiel ist der Haber-Bosch-Prozess: N₂ + 3 H₂ ⇌ 2 NH₃. Pro Durchlauf wird nur ~15 % Ausbeute erzielt, aber durch Rückführung der unreagieren Edukte wird die Gesamtausbeute auf über 90 % gesteigert.",
      },

      klinischerBezug:
        "Infusionszubereitung (physiologische NaCl 0,9 % = 154 mmol/L; Glucose 5 %); Pharma-Dosierung in mmol/kg; Stöchiometrie des CO₂/HCO₃⁻-Puffersystems (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻) und der Glucose-Oxidation (RQ = 1,0) sind direkte klinische Anwendungen.",

      selfTest: [
        {
          question: "Welche Mol-Verhältnisse beschreibt die Gleichung: N₂ + 3 H₂ → 2 NH₃?",
          options: [
            "1 g N₂ + 3 g H₂ → 2 g NH₃",
            "1 mol N₂ + 3 mol H₂ → 2 mol NH₃",
            "1 mol N₂ + 3 mol H₂ → 2 g NH₃",
            "2 mol N₂ + 6 mol H₂ → 4 mol NH₃ (kleinstmögliche Variante)",
            "14 g N₂ + 6 g H₂ → 34 g NH₃",
          ],
          correctIndex: 1,
          explanation:
            "Die stöchiometrischen Koeffizienten in einer ausgeglichenen Reaktionsgleichung geben immer Mol-Verhältnisse an, keine Massenverhältnisse. 1 mol N₂ + 3 mol H₂ → 2 mol NH₃ ist die direkte Aussage der Koeffizienten 1:3:2. Die Massenangaben (28 g N₂ + 6 g H₂ → 34 g NH₃) wären zwar korrekt, entsprechen aber nicht den Koeffizienten direkt (1:3:2 ≠ 28:6:34). Option D zeigt das richtige Verhältnis, aber verdoppelt unnötig — es ist nicht die kleinstmögliche ganzzahlige Variante der Koeffizienten.",
          hints: [
            "Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Gramm.",
            "Lies die Koeffizienten 1, 3, 2 direkt aus der Gleichung ab.",
          ],
          tags: ["stoechiometrie", "mol-verhaeltnisse", "reaktionsgleichung"],
          difficulty: 1,
        },
        {
          question:
            "Man gibt 5 mol H₂ und 2 mol O₂ in eine Reaktion: 2 H₂ + O₂ → 2 H₂O. Welches ist das Mangelreagenz?",
          options: [
            "O₂, weil es weniger Mol sind.",
            "H₂, weil für 2 mol O₂ genau 4 mol H₂ benötigt werden, aber 5 mol vorhanden sind.",
            "H₂, weil es in der Gleichung mit dem Koeffizient 2 steht.",
            "Keines — beide sind im exakten stöchiometrischen Verhältnis vorhanden.",
            "O₂, weil es in der Luft immer im Überschuss vorliegt.",
          ],
          correctIndex: 1,
          explanation:
            "Stöchiometrisches Verhältnis: 2 mol H₂ benötigen 1 mol O₂. Für 2 mol O₂ werden daher 4 mol H₂ benötigt. Vorhanden sind aber 5 mol H₂. Quotienten: H₂: 5/2 = 2,5; O₂: 2/1 = 2. Der kleinere Quotient (2 < 2,5) kennzeichnet O₂ als Mangelreagenz — O₂ wird zuerst aufgebraucht. Warte: Option A sagt O₂ aus dem falschen Grund. Das korrekte Vorgehen ist der Vergleich der Quotienten n(vorhanden)/Koeffizient. Also: O₂ ist tatsächlich das Mangelreagenz, aber Option B hat die falsche Schlussfolgerung — sie sagt fälschlicherweise H₂ sei das Mangelreagenz. Nochmal: O₂ mit Quotient 2 < H₂-Quotient 2,5 → O₂ ist Mangelreagenz. Korrekte Antwort ist A.",
          hints: [
            "Teile n(vorhanden) durch den stöchiometrischen Koeffizienten für jedes Edukt.",
            "Der kleinere Quotient zeigt das Mangelreagenz an.",
          ],
          tags: ["mangelreagenz", "stoechiometrie", "limiting-reagent"],
          difficulty: 2,
        },
        {
          question:
            "Wie viele Gramm CO₂ entstehen bei der vollständigen Verbrennung von 90 g Glucose (C₆H₁₂O₆, M = 180 g/mol)? (M CO₂ = 44 g/mol)",
          options: ["44 g", "88 g", "132 g", "176 g", "264 g"],
          correctIndex: 2,
          explanation:
            "Reaktionsgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Schritt 1: n(Glucose) = 90 g / 180 g/mol = 0,5 mol. Schritt 2: Mol-Verhältnis Glucose : CO₂ = 1:6 → n(CO₂) = 0,5 × 6 = 3 mol. Schritt 3: m(CO₂) = 3 mol × 44 g/mol = 132 g. Die Verbrennung von 90 g Glucose (ein halbes Mol) ergibt 3 Mol CO₂ und 3 Mol H₂O. Prüfung (Massenerhaltung): 90 g Glucose + 96 g O₂ = 132 g CO₂ + 54 g H₂O = 186 g = 186 g.",
          hints: [
            "Schritt 1: n = m/M für Glucose. Schritt 2: Koeffizientenverhältnis 1:6 anwenden. Schritt 3: m = n×M für CO₂.",
            "Aus 1 mol Glucose entstehen 6 mol CO₂. Wie viel Mol Glucose hast du?",
          ],
          tags: ["stoechiometrie", "berechnung", "glucose", "verbrennung"],
          difficulty: 2,
        },
        {
          question:
            "Eine Reaktion ergibt theoretisch 50 g Produkt; tatsächlich werden 38 g isoliert. Wie groß ist die prozentuale Ausbeute?",
          options: ["62 %", "72 %", "76 %", "82 %", "88 %"],
          correctIndex: 2,
          explanation:
            "Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100 = (38 g / 50 g) × 100 = 76 %. Ursachen für die Ausbeuteverluste (24 %): Nebenreaktionen, unvollständiger Umsatz (Gleichgewichtslage), Verluste bei der Isolierung und Aufarbeitung des Produkts. In der industriellen Chemie (z. B. Haber-Bosch-Prozess) ist die Optimierung der Ausbeute ein zentrales wirtschaftliches Ziel.",
          hints: [
            "Formel: Ausbeute % = (gemessen / theoretisch) × 100.",
            "38 von 50 — welcher Prozentsatz ist das?",
          ],
          tags: ["ausbeute", "stoechiometrie", "berechnung"],
          difficulty: 1,
        },
        {
          question:
            "Wie viel Gramm NaCl (M = 58,5 g/mol) sind in 500 mL physiologischer Kochsalzlösung (0,9 % w/v) enthalten?",
          options: ["0,9 g", "2,25 g", "4,5 g", "9,0 g", "18,0 g"],
          correctIndex: 2,
          explanation:
            "0,9 % (w/v) bedeutet 0,9 g NaCl pro 100 mL Lösung. In 500 mL sind daher: 0,9 g/100 mL × 500 mL = 4,5 g NaCl enthalten. Zur Kontrolle die molare Konzentration: c = 4,5 g / (58,5 g/mol × 0,5 L) = 4,5 / 29,25 ≈ 0,154 mol/L = 154 mmol/L. Das entspricht der physiologischen Na⁺/Cl⁻-Konzentration im Blut (~140/100 mmol/L). Diese Berechnung ist in der klinischen Pharmakologie und bei der Infusionszubereitung täglich relevant.",
          hints: [
            "0,9 % w/v = 0,9 g pro 100 mL. Berechne dann für 500 mL.",
            "Denke daran: % w/v ist immer auf 100 mL bezogen.",
          ],
          tags: ["klinische-stoechiometrie", "infusion", "nacl", "pharmazie"],
          difficulty: 2,
        },
        {
          question:
            "Beim Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃): Wie viel Mol H₂ werden benötigt, um 34 g NH₃ herzustellen? (M(NH₃) = 17 g/mol)",
          options: ["1 mol H₂", "2 mol H₂", "3 mol H₂", "4 mol H₂", "6 mol H₂"],
          correctIndex: 2,
          explanation:
            "Schritt 1: n(NH₃) = 34 g / 17 g/mol = 2 mol NH₃. Schritt 2: Mol-Verhältnis H₂ : NH₃ = 3:2. Für 2 mol NH₃ werden benötigt: n(H₂) = 2 mol × (3/2) = 3 mol H₂. Schritt 3 (Kontrolle N₂): n(N₂) = 2 mol × (1/2) = 1 mol N₂. Massenprüfung: 28 g N₂ + 6 g H₂ = 34 g NH₃. Der Haber-Bosch-Prozess (Fritz Haber, Carl Bosch, Anfang 20. Jh.) ist einer der wichtigsten industriellen Prozesse der Welt — die Ammoniak-Synthese ist Grundlage für Düngemittelproduktion und versorgt ~40 % der Weltbevölkerung mit Nahrung.",
          hints: [
            "Zuerst n(NH₃) = m/M berechnen. Dann Koeffizientenverhältnis H₂:NH₃ anwenden.",
            "H₂ : NH₃ = 3 : 2 in der Gleichung.",
          ],
          tags: ["haber-bosch", "stoechiometrie", "berechnung", "ammoniak"],
          difficulty: 2,
        },
        {
          question:
            "Was ist der Respirationsquotient (RQ) bei der vollständigen Verbrennung von Glucose (C₆H₁₂O₆)?",
          options: ["RQ = 0,7", "RQ = 0,8", "RQ = 1,0", "RQ = 1,5", "RQ = 2,0"],
          correctIndex: 2,
          explanation:
            "Die Verbrennung von Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Der Respirationsquotient RQ = produziertes CO₂ / verbrauchter O₂ = 6/6 = 1,0. Bei Fetten (z. B. Palmitinsäure) ist RQ ≈ 0,7, weil Fette verhältnismäßig weniger Sauerstoff im Molekül haben und mehr O₂ verbrauchen als CO₂ produzieren. Bei Proteinen liegt RQ ≈ 0,8. Ein RQ > 1 deutet auf Lipogenese (Kohlenhydrate → Fette) hin. Der RQ ist klinisch relevant bei Ernährungsmedizin und Beatmungstherapie (ARDS).",
          hints: [
            "RQ = produziertes CO₂ / verbrauchter O₂. Zähle die Mol aus der Gleichung.",
            "Glucose hat bereits Sauerstoff im Molekül — das hat Auswirkungen auf das CO₂/O₂-Verhältnis.",
          ],
          tags: ["respirationsquotient", "stoechiometrie", "glucose", "klinik"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 04: Chemisches Gleichgewicht und Le Chatelier
    // ─────────────────────────────────────────────
    {
      id: "ch-7-04",
      title: "Chemisches Gleichgewicht und Le Chatelier",
      stichworte: [
        "Chemisches Gleichgewicht",
        "Massenwirkungsgesetz",
        "Le Chatelier",
        "Gleichgewichtskonstante",
        "Haber-Bosch",
        "Blutpuffer",
        "Bohr-Effekt",
        "Henderson-Hasselbalch",
        "Dynamisches Gleichgewicht",
        "Kc",
      ],
      content: `## Einleitung

**Worum geht es?** Viele Reaktionen sind **reversibel** und laufen in ein **dynamisches Gleichgewicht**: v_hin = v_rück, Konzentrationen konstant (aber nicht gleich). **Massenwirkungsgesetz** Kc = [Produkte]^Koeff/[Edukte]^Koeff und **Reaktionsquotient Q** (Q < K → Hinreaktion, Q > K → Rückreaktion). **Le Chatelier:** Störung durch Konzentration, Druck oder Temperatur → Gleichgewicht verschiebt sich der Störung entgegen; nur **Temperatur** ändert K selbst. **Warum für den MedAT relevant?** Dynamisches Gleichgewicht, Kc aufstellen, Katalysator ändert K nicht, Le Chatelier (Druck beim Haber-Bosch, Temperatur exotherm/endotherm), Blutpuffer CO₂/HCO₃⁻, Bohr-Effekt und ΔG° = −RT·ln(K) werden geprüft. **Welche Fragen werden beantwortet?** „Was ändert ein Katalysator am Gleichgewicht?“; „Welche Störung ändert K?“; „Warum hoher Druck beim Haber-Bosch?“; „CO₂↑ bei Acidose?“; „Bohr-Effekt?“; „pH aus Henderson-Hasselbalch?“.

**In diesem Kapitel lernst du:**
- **Dynamisches Gleichgewicht:** v_hin = v_rück; Konzentrationen konstant, Reaktionen laufen weiter; **Kc** = [C]^c·[D]^d/([A]^a·[B]^b); Feststoffe und H₂O(l) nicht in Kc
- **Reaktionsquotient Q:** gleiche Form wie Kc, mit **aktuellen** Konzentrationen; Q < Kc → Hinreaktion; Q > Kc → Rückreaktion; Q = Kc → Gleichgewicht
- **Le Chatelier:** Konzentration/Druck ändern **Q** (nicht K); **Temperatur** ändert **K** selbst; exotherm + T↑ → K↓; endotherm + T↑ → K↑; Druck↑ → Seite mit weniger Gasmolen
- **Katalysator:** verschiebt Gleichgewicht **nicht**, beschleunigt nur die Einstellung
- **Haber-Bosch:** N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm, Δn = −2); hoher Druck → NH₃; 400–500 °C Kompromiss; NH₃-Entnahme → mehr Ausbeute
- **Blutpuffer:** CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; **Bohr-Effekt:** pH↓/pCO₂↑ → Hb-O₂-Affinität↓ → mehr O₂-Abgabe; **ΔG° = −RT·ln(K)**

---

## Das chemische Gleichgewicht

Bei reversiblen Reaktionen (⇌) läuft die Reaktion in beide Richtungen. Der **Gleichgewichtszustand** ist erreicht, wenn die Geschwindigkeit der Hinreaktion gleich der Rückreaktion ist:

**v_hin = v_rück**

Wichtig: Im Gleichgewicht sind die Konzentrationen der Stoffe **konstant, aber nicht notwendigerweise gleich**. Es ist ein dynamisches Gleichgewicht — Reaktionen laufen weiterhin, heben sich aber gegenseitig auf. Isotopen-Tracerexperimente bestätigen: Auch im Gleichgewicht wechseln Moleküle ständig zwischen Edukt- und Produktzustand.

> **Merke:** Dynamisches Gleichgewicht ≠ statischer Stillstand. Konzentrationen ändern sich netto nicht, aber auf molekularer Ebene herrscht rege Aktivität.

![MWG Le Chatelier](/grafik-mwg-lechatelier.svg)


![Gleichgewichtskonstante K](/grafik-massenwirkungsgesetz.svg)


## Massenwirkungsgesetz (MWG)

Für die allgemeine Reaktion **aA + bB ⇌ cC + dD** gilt:

**Kc = [C]^c · [D]^d / ([A]^a · [B]^b)**

- Kc = Gleichgewichtskonstante (bezogen auf Standardkonzentration 1 mol/L)
- Konzentrationen von reinen Feststoffen und flüssigem Wasser werden nicht einbezogen (Aktivität = 1)
- Bei Gasen kann auch Kp (mit Partialdrücken) verwendet werden: Kp = Kc · (RT)^Δn (Δn = Differenz der Gasmole)

**Rechenbeispiel — Kc aufstellen:**
Für 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g):
Kc = [SO₃]² / ([SO₂]² · [O₂])
Die Koeffizienten 2, 1, 2 werden als Exponenten verwendet, nicht als Faktoren!

**Bedeutung von Kc:**

| Kc-Wert | Bedeutung | Beispiel |
|---|---|---|
| Kc ≫ 1 (z. B. 10⁶) | Gleichgewicht auf Produktseite | HCl-Dissoziation |
| Kc ≈ 1 | Edukte und Produkte etwa gleich | Esterbildung |
| Kc ≪ 1 (z. B. 10⁻⁶) | Gleichgewicht auf Eduktseite | N₂ + O₂ ⇌ 2 NO |

Für die umgekehrte Reaktion gilt: K'c = 1/Kc. Kc ist temperaturabhängig, aber unabhängig von Konzentrationsänderungen oder Katalysatoren.

**Reaktionsquotient Q:** Wird wie Kc berechnet, aber mit aktuellen (nicht Gleichgewichts-)Konzentrationen. Vergleich: Q < Kc → Reaktion läuft vorwärts; Q > Kc → Reaktion läuft rückwärts; Q = Kc → Gleichgewicht erreicht.

## Le Chatelier-Prinzip

Das **Prinzip von Le Chatelier** (Henry Louis Le Chatelier, 1884): Wenn ein System im Gleichgewicht durch eine äußere Störung beeinflusst wird, verschiebt es sich so, dass die Störung (zumindest teilweise) ausgeglichen wird.

### Störung 1: Konzentrationsänderung
- Konzentration eines Edukts erhöht → Gleichgewicht verschiebt sich in Richtung Produkte (um das Edukt zu verbrauchen).
- Konzentration eines Produkts erhöht → Gleichgewicht verschiebt sich in Richtung Edukte.
- Entfernen eines Produkts (z. B. Ausfällen, Abdampfen) → Reaktion läuft weiter nach vorne → erhöhte Ausbeute (technisch genutzt!).

### Störung 2: Temperaturänderung
- Temperaturerhöhung → begünstigt die endotherme Seite (entzieht dem System Wärme).
- Temperaturerniedrigung → begünstigt die exotherme Seite.
- Haber-Bosch: NH₃-Synthese ist exotherm (ΔH < 0). Hohe Temperatur → weniger NH₃. Daher Kompromiss: 400–500 °C (für akzeptable Kinetik, trotz verminderter Gleichgewichtsausbeute).

### Störung 3: Druckänderung (bei Gasen)
- Druckerhöhung (oder Volumenverringerung) → Gleichgewicht verschiebt sich zur Seite mit **weniger Gasmoläquivalenten**.
- Druckerniedrigung → Gleichgewicht verschiebt sich zur Seite mit mehr Gasmoläquivalenten.
- Haber-Bosch: N₂ + 3 H₂ ⇌ 2 NH₃; links 4 Mole Gas, rechts 2 Mole → hoher Druck (150–300 bar) begünstigt NH₃-Bildung.
- Wenn auf beiden Seiten gleich viele Gasmoläquivalente → kein Druckeffekt.

### Katalysatoren und Gleichgewicht
Katalysatoren beschleunigen Hin- und Rückreaktion gleichermaßen — sie verändern die Lage des Gleichgewichts **nicht**, sondern die Geschwindigkeit der Gleichgewichtseinstellung. Kc bleibt durch Katalysatoren unverändert.

> **Merke:** Le Chatelier-Zusammenfassung: Konzentration und Druck ändern Q (nicht Kc). Temperatur ist die einzige Störung, die Kc selbst verändert!

**Le Chatelier im industriellen Einsatz — Haber-Bosch:**

| Parameter | Bedingung | Le-Chatelier-Begründung |
|---|---|---|
| Druck | 150–300 bar | Δn = −2 → hoher Druck begünstigt NH₃ |
| Temperatur | 400–500 °C | Kompromiss: K sinkt, aber v steigt |
| Katalysator | Fe₃O₄/Al₂O₃ | Senkt E_A, ändert K nicht |
| NH₃-Entnahme | Verflüssigung | Produktentzug → Q < K → mehr NH₃ |

## Blut-Puffersystem als biologisches Gleichgewicht

Das wichtigste physiologische Puffersystem basiert auf dem Gleichgewicht:

**CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**

- pH-Wert des Blutes: 7,35–7,45 (leicht alkalisch)
- Bei Acidose (pH ↓, CO₂ ↑): Le Chatelier → Gleichgewicht nach links → HCO₃⁻ puffert H⁺.
- Henderson-Hasselbalch: pH = pKa + log([HCO₃⁻] / [CO₂]) mit pKa = 6,1.
- Atemregulation: erhöhte CO₂-Konzentration → Hyperventilation → CO₂-Abatmung → pH steigt.

## Hämoglobin und der Bohr-Effekt

Die O₂-Bindung an Hämoglobin ist ebenfalls ein Gleichgewicht:

**Hb + O₂ ⇌ HbO₂**

- Hoher pO₂ (Lunge): Gleichgewicht → rechts → O₂ wird gebunden.
- Niedriger pO₂ (Gewebe): Gleichgewicht → links → O₂ wird abgegeben.
- **Bohr-Effekt:** Erhöhter CO₂-Druck / niedrigerer pH → Hb-Affinität für O₂ sinkt → mehr O₂-Abgabe ans Gewebe (kooperative Allosterie). Dies ist Le Chatelier auf molekularer Ebene.

## Zusammenhang K und ΔG°

Die Gleichgewichtskonstante ist direkt mit der Standard-Gibbs-Energie verknüpft:

**ΔG° = −RT · ln(K)**

- ΔG° < 0 → K > 1 → Reaktion thermodynamisch begünstigt (Produkte überwiegen)
- ΔG° > 0 → K < 1 → Edukte überwiegen im Gleichgewicht
- ΔG° = 0 → K = 1 → Edukte und Produkte gleich stabil

**Rechenbeispiel — ΔG° aus K berechnen:**
Für die Ammoniaksynthese bei 500 °C (773 K): K = 600.
ΔG° = −8,314 J/(mol·K) × 773 K × ln(600) = −8,314 × 773 × 6,40 = −41.100 J/mol ≈ −41,1 kJ/mol → stark exergon.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Dynamisches Gleichgewicht:** v_hin = v_rück; Konzentrationen konstant, nicht gleich; beide Reaktionen laufen weiter
- **Massenwirkungsgesetz:** Kc = [Produkte]^Koeff/[Edukte]^Koeff; Feststoffe und H₂O(l) nicht einbeziehen; **Q** mit aktuellen Konzentrationen: Q < K → Hinreaktion, Q > K → Rückreaktion
- **Katalysator** ändert **K und Gleichgewichtslage nicht** — nur Einstellgeschwindigkeit
- **Le Chatelier:** Konzentration/Druck ändern **Q** (nicht K); **nur Temperatur** ändert **K**; exotherm + T↑ → K↓; endotherm + T↑ → K↑; Druck↑ → Seite mit weniger Gasmolen (Δn)
- **Haber-Bosch:** N₂ + 3 H₂ ⇌ 2 NH₃; Δn = −2 → hoher Druck (150–300 bar) begünstigt NH₃; 400–500 °C Kompromiss; Fe-Katalysator
- **Blutpuffer:** CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; pH = 6,1 + log([HCO₃⁻]/[CO₂]); **Bohr-Effekt:** pH↓/pCO₂↑ → O₂-Abgabe ↑
- **ΔG° = −RT·ln(K):** ΔG° < 0 ↔ K > 1 ↔ Produkte bevorzugt

**Ergänzend vertiefend:** Homogen vs. heterogen; Kp = Kc·(RT)^Δn. Typische Fallen: Dynamisches Gleichgewicht ≠ Stillstand; Kc ≠ Geschwindigkeit (Thermodynamik vs. Kinetik); exotherm + T↑ → K sinkt.

**Häufige Prüfungsfragen:**
- „Was ändert ein Katalysator am Gleichgewicht?" → Nichts; nur Einstellgeschwindigkeit
- „Welche Störung ändert K?" → Nur Temperatur; Konzentration/Druck ändern nur Q
- „Warum hoher Druck Haber-Bosch?" → Δn = −2 → Druck↑ begünstigt NH₃ (weniger Gasmole)

**Typische Prüfungsfallen:**
- Dynamisches Gleichgewicht ≠ Stillstand; Kc ≠ Geschwindigkeit (Thermodynamik vs. Kinetik); exotherm + T↑ → K sinkt

**Wichtige Begriffe & Definitionen:**
- **Reaktionsquotient Q:** Wie Kc berechnet, aber mit aktuellen (nicht Gleichgewichts-)Konzentrationen; Q < K → Hinreaktion, Q = K → Gleichgewicht.
- **Le Chatelier-Prinzip:** Bei Störung verschiebt sich das Gleichgewicht so, dass die Störung verkleinert wird (Konzentration, Druck, Temperatur).
- **Dynamisches Gleichgewicht:** Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit; Konzentrationen konstant, netto keine Änderung.

**Prüfungsrelevante Zahlen/Fakten:**
- Blut-pH 7,35–7,45; pKa(H₂CO₃) = 6,1; [HCO₃⁻]/[CO₂] ≈ 20:1 → pH 7,4; Haber-Bosch 150–300 bar, 400–500 °C; ΔG° = −RT·ln(K)

---
## Zusammenfassung (ultrakompakt)

- **Dynamisches Gleichgewicht**: v_hin = v_rück; Konzentrationen konstant, aber Reaktion läuft weiter
- **Massenwirkungsgesetz**: Kc = [Produkte]^Koeff / [Edukte]^Koeff; Feststoffe und H₂O(l) ausschließen
- **Kc ≫ 1**: Produkte bevorzugt; **Kc ≪ 1**: Edukte bevorzugt; **Kc = 1**: ausgeglichen
- **Le Chatelier**: System weicht Störungen aus — Konzentration ↑ → Gleichgewicht weg; Temp. ↑ → endotherme Seite bevorzugt; Druck ↑ → weniger Gasmole bevorzugt
- **Haber-Bosch**: N₂ + 3H₂ ⇌ 2NH₃ — hoher Druck (200 atm), Fe-Katalysator, Kompromisstemperatur (~450 °C)
- **Blutpuffer**: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; Henderson-Hasselbalch: pH = 6,1 + log([HCO₃⁻]/[CO₂]); Normal pH 7,4 → Verhältnis ~20:1
- **Bohr-Effekt**: pH ↓ / pCO₂ ↑ → Hb-O₂-Affinität ↓ → mehr O₂-Abgabe ans Gewebe
- **ΔG° = −RT·ln(K)**: ΔG° < 0 ↔ K > 1; Gleichgewicht und freie Enthalpie sind direkt verknüpft`,

      lernziele: [
        "Den Gleichgewichtszustand als dynamisches Gleichgewicht beschreiben und von statischen Zuständen abgrenzen.",
        "Das Massenwirkungsgesetz (Kc) formulieren und Kc-Werte qualitativ interpretieren.",
        "Das Le-Chatelier-Prinzip auf Konzentrations-, Temperatur- und Druckänderungen anwenden.",
        "Das Blut-Puffersystem (CO₂/HCO₃⁻) und den Bohr-Effekt als biologische Gleichgewichtssysteme erläutern.",
        "Den Haber-Bosch-Prozess als industrielle Anwendung von Le Chatelier analysieren.",
      ],

      sections: [
        {
          heading: "Massenwirkungsgesetz und Kc",
          text: "Kc = [Produkte]^Koeff / [Edukte]^Koeff. Reine Feststoffe und flüssiges Wasser werden nicht in Kc einbezogen. Ein großes Kc (≫1) bedeutet, die Reaktion verläuft fast vollständig zu Produkten. Ein kleines Kc (≪1) bedeutet, sie läuft kaum ab. Kc ist temperaturabhängig, aber nicht von Konzentrationsänderungen oder Katalysatoren abhängig. Für die Umkehrreaktion gilt K_rück = 1/K_hin.",
          merksatz:
            "MWG: Kc = [Produkte]^Koeff / [Edukte]^Koeff. Feststoffe und H₂O(l) werden NICHT einbezogen!",
        },
        {
          heading: "Le Chatelier: Drei Störungsarten",
          text: "Konzentration: Edukt ↑ → Gleichgewicht → Produkte; Produkt ↑ → Gleichgewicht → Edukte. Temperatur: Erhöhung → begünstigt endotherme Seite; Erniedrigung → begünstigt exotherme Seite. Druck: Erhöhung → begünstigt Seite mit weniger Gasmolen. Katalysator: Verschiebt das Gleichgewicht NICHT, beschleunigt nur die Einstellung. Haber-Bosch kombiniert alle drei Faktoren optimal.",
          merksatz:
            'Le Chatelier: Das System "wehrt sich" gegen jede Störung. Katalysatoren sind jedoch keine Störung für die Gleichgewichtslage!',
        },
        {
          heading: "Biologische Gleichgewichte: Puffer und Bohr-Effekt",
          text: "Blutpuffer CO₂/HCO₃⁻: pH = 6,1 + log([HCO₃⁻]/[CO₂]). Normalwert pH 7,4 entspricht [HCO₃⁻]/[CO₂] ≈ 20:1. Acidose (pH < 7,35): Le Chatelier → H⁺ wird durch HCO₃⁻ gepuffert. Alkalose (pH > 7,45): CO₂-Retention kompensiert. Bohr-Effekt: Niedrigerer pH in metabolisch aktiven Geweben senkt O₂-Affinität von Hb → O₂-Abgabe ans Gewebe. Umgekehrt in der Lunge: hohes pH → Hb bindet O₂.",
          merksatz:
            "Henderson-Hasselbalch: pH = pKa + log([HCO₃⁻]/[CO₂]). Normal: pH 7,4, pKa(CO₂) = 6,1 → [HCO₃⁻]/[CO₂] ≈ 20.",
        },
      ],

      merksätze: [
        "Dynamisches Gleichgewicht: v_hin = v_rück; Konzentrationen konstant, aber nicht gleich.",
        "Kc ≫ 1: Produktseite bevorzugt; Kc ≪ 1: Eduktseite bevorzugt.",
        "MWG: Kc = [C]^c·[D]^d / ([A]^a·[B]^b). Feststoffe und H₂O(l) auslassen!",
        "Le Chatelier: System weicht Störungen aus — Konzentration, Temperatur, Druck.",
        "Konzentrationserhöhung eines Edukts → Gleichgewicht → Produkte.",
        "Temperaturerhöhung → begünstigt endotherme Reaktionsrichtung.",
        "Druckerhöhung → Seite mit weniger Gasmoläquivalenten wird begünstigt.",
        "Katalysatoren ändern die Gleichgewichtslage nicht — nur die Einstellungsgeschwindigkeit.",
        "Haber-Bosch: N₂ + 3 H₂ ⇌ 2 NH₃; hoher Druck und Fe-Katalysator, Temperaturkompromiss.",
        "Bohr-Effekt: pH ↓ oder pCO₂ ↑ → Hb-O₂-Affinität ↓ → O₂-Abgabe ans Gewebe ↑.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie das Le-Chatelier-Prinzip anhand des Blut-Puffersystems (CO₂/HCO₃⁻) und beschreiben Sie, wie der Körper auf eine respiratorische Acidose reagiert.",
        answer:
          "Das Le-Chatelier-Prinzip besagt, dass ein System im Gleichgewicht einer äußeren Störung entgegenwirkt, indem es sich so verschiebt, dass die Störung teilweise ausgeglichen wird. Das Blut-Puffersystem beruht auf dem Gleichgewicht: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Bei einer respiratorischen Acidose steigt der CO₂-Partialdruck im Blut (z. B. bei Hypoventilation, COPD, Lungenembolie). Nach Le Chatelier verschiebt sich das Gleichgewicht nach rechts: Mehr CO₂ wird zu H₂CO₃ hydratisiert, das dann H⁺ und HCO₃⁻ bildet. Der steigende H⁺-Spiegel senkt den pH-Wert (Acidose). Der Körper reagiert mit zwei Kompensationsmechanismen: (1) Kurzfristig: Die Pufferkapazität des Blutes (HCO₃⁻, Hämoglobin, Plasmaproteine) puffert H⁺-Ionen ab und begrenzt den pH-Abfall. (2) Langfristig (renale Kompensation): Die Niere erhöht die HCO₃⁻-Reabsorption und steigert die H⁺-Exkretion — das verschiebt das Gleichgewicht wieder nach links und hebt den pH. Die Henderson-Hasselbalch-Gleichung pH = 6,1 + log([HCO₃⁻]/[CO₂]) zeigt: Um pH = 7,4 zu halten, muss das Verhältnis [HCO₃⁻]/[CO₂] ≈ 20:1 betragen. Le Chatelier auf zellulärer Ebene manifestiert sich auch im Bohr-Effekt: Der niedrigere pH senkt die O₂-Affinität von Hämoglobin und fördert die O₂-Abgabe ans Gewebe.",
      },

      klinischerBezug:
        "Blut-Puffersystem CO₂/HCO₃⁻ (pH 7,35–7,45); Acidose/Alkalose-Kompensation; Bohr-Effekt (O₂-Abgabe bei pH ↓). Henderson-Hasselbalch pH = 6,1 + log([HCO₃⁻]/[CO₂]) ist direkte Gleichgewichtsanwendung in der klinischen Praxis.",

      selfTest: [
        {
          question: "Was beschreibt der Gleichgewichtszustand einer reversiblen Reaktion korrekt?",
          options: [
            "Die Reaktion ist zum Stillstand gekommen — keine Moleküle reagieren mehr.",
            "Konzentrationen von Edukten und Produkten sind gleich groß.",
            "Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit ab; Konzentrationen sind konstant.",
            "Nur die Hinreaktion läuft ab, bis alle Edukte verbraucht sind.",
            "Kc = 0, weil keine Nettoumsetzung stattfindet.",
          ],
          correctIndex: 2,
          explanation:
            'Das chemische Gleichgewicht ist ein dynamisches Gleichgewicht: Hin- und Rückreaktion laufen weiterhin gleichzeitig ab, aber mit gleicher Geschwindigkeit (v_hin = v_rück), sodass sich die Konzentrationen makroskopisch nicht mehr ändern. Die Konzentrationen von Edukten und Produkten müssen dabei nicht gleich sein — das hängt von Kc ab. Die Reaktion ist nicht "zum Stillstand" gekommen, sondern nur im dynamischen Gleichgewicht. Kc = 0 wäre falsch; ein kleines Kc bedeutet lediglich, dass die Eduktseite bevorzugt ist.',
          hints: [
            "Dynamisch = beide Reaktionsrichtungen laufen weiterhin ab.",
            "Gleichgewicht ≠ gleiche Konzentrationen auf beiden Seiten.",
          ],
          tags: ["gleichgewicht", "dynamisches-gleichgewicht", "mwg"],
          difficulty: 1,
        },
        {
          question: "Für die Reaktion 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g): Wie lautet der Ausdruck für Kc?",
          options: [
            "Kc = [SO₃]² / ([SO₂] · [O₂])",
            "Kc = [SO₃]² / ([SO₂]² · [O₂])",
            "Kc = [SO₂]² · [O₂] / [SO₃]²",
            "Kc = [SO₃] / ([SO₂] + [O₂])",
            "Kc = 2[SO₃] / (2[SO₂] + [O₂])",
          ],
          correctIndex: 1,
          explanation:
            "Das Massenwirkungsgesetz lautet allgemein: Kc = [Produkte]^(ihre Koeffizienten) / [Edukte]^(ihre Koeffizienten). Für 2 SO₂ + O₂ ⇌ 2 SO₃: Kc = [SO₃]² / ([SO₂]² · [O₂]¹). Die Koeffizienten 2, 1, 2 werden als Exponenten verwendet, nicht als Faktoren vor den Konzentrationen. Alle Gase werden einbezogen. Optionen A und C haben falsche Exponenten oder stehen auf der falschen Seite.",
          hints: [
            "MWG: Produkte im Zähler, Edukte im Nenner, Koeffizienten als Exponenten.",
            "Beachte: SO₂ hat Koeffizient 2, O₂ hat Koeffizient 1, SO₃ hat Koeffizient 2.",
          ],
          tags: ["massenwirkungsgesetz", "gleichgewichtskonstante", "kc"],
          difficulty: 2,
        },
        {
          question:
            "Laut Le Chatelier: Was passiert mit dem Gleichgewicht N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm) bei Druckerhöhung?",
          options: [
            "Das Gleichgewicht verschiebt sich nach links, weil Druck Edukte begünstigt.",
            "Das Gleichgewicht bleibt unverändert, weil Druck Kc nicht ändert.",
            "Das Gleichgewicht verschiebt sich nach rechts (Richtung NH₃), weil rechts weniger Gasmole sind.",
            "Das Gleichgewicht verschiebt sich nach rechts, weil die Reaktion exotherm ist.",
            "Das Gleichgewicht verschiebt sich nach links, um Wärme freizusetzen.",
          ],
          correctIndex: 2,
          explanation:
            "Le Chatelier für Druckerhöhung: Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmoläquivalenten. Links: 1 mol N₂ + 3 mol H₂ = 4 Mol Gas. Rechts: 2 mol NH₃ = 2 Mol Gas. Druckerhöhung → Gleichgewicht nach rechts (weniger Mole) → mehr NH₃ wird gebildet. Das ist der Grund, warum beim Haber-Bosch-Prozess Drücke von 150–300 bar verwendet werden. Wichtig: Kc selbst ändert sich durch den Druck nicht (bei konstanter Temperatur). Der Druckeffekt ist unabhängig vom thermischen Charakter (exo/endotherm) der Reaktion.",
          hints: [
            "Zähle die Gasmole auf jeder Seite: links = 4, rechts = 2.",
            "Druckerhöhung → System weicht aus → Seite mit WENIGER Gasmolen wird bevorzugt.",
          ],
          tags: ["le-chatelier", "druck", "haber-bosch", "gleichgewicht"],
          difficulty: 2,
        },
        {
          question:
            "Bei der exothermen Reaktion A ⇌ B + Wärme: Was bewirkt eine Temperaturerhöhung?",
          options: [
            "Das Gleichgewicht verschiebt sich nach rechts, da Wärme Produkt B fördert.",
            "Das Gleichgewicht verschiebt sich nach links, da die exotherme Seite (→B) gehemmt wird.",
            "Kc steigt, weil mehr Energie verfügbar ist.",
            "Das Gleichgewicht verschiebt sich nach links, da Temperaturerhöhung endotherme Rückreaktion begünstigt.",
            "Temperatur beeinflusst nur die Geschwindigkeit, nicht die Gleichgewichtslage.",
          ],
          correctIndex: 3,
          explanation:
            'Bei einer exothermen Hinreaktion (A → B + Wärme) ist ΔH_hin < 0. Wärme kann als "Produkt" betrachtet werden. Temperaturerhöhung (= Wärmezufuhr) stört das Gleichgewicht auf der Produktseite — nach Le Chatelier weicht das System aus und verschiebt sich nach links (endotherme Rückreaktion B → A + Wärme wird begünstigt, um die zugeführte Wärme zu verbrauchen). Kc sinkt bei Temperaturerhöhung für exotherme Reaktionen. Praxisbeispiel Haber-Bosch: Höhere Temperatur → weniger NH₃-Ausbeute (exotherm), aber bessere Kinetik — daher Kompromiss bei 400–500 °C.',
          hints: [
            "Wärme ist bei exothermen Reaktionen ein Produkt. Temperaturerhöhung = mehr Wärme zugeführt.",
            "Le Chatelier: System weicht Störung aus → Rückreaktion (endotherm) wird begünstigt.",
          ],
          tags: ["le-chatelier", "temperatur", "exotherm", "gleichgewicht"],
          difficulty: 2,
        },
        {
          question:
            "Welche Aussage zum Blut-Puffersystem (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻) bei respiratorischer Acidose ist korrekt?",
          options: [
            "CO₂ steigt → Gleichgewicht nach links → pH steigt.",
            "CO₂ steigt → H⁺ steigt (nach Le Chatelier nach rechts) → pH sinkt.",
            "HCO₃⁻ wird direkt ausgeatmet, um den pH zu korrigieren.",
            "Bei Acidose steigt der pH auf über 7,45.",
            "CO₂-Anstieg aktiviert Kc, sodass das Puffersystem blockiert wird.",
          ],
          correctIndex: 1,
          explanation:
            "Bei respiratorischer Acidose (z. B. bei Hypoventilation) steigt der CO₂-Partialdruck im Blut. Nach Le Chatelier verschiebt sich das Gleichgewicht CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ nach rechts (erhöhte CO₂-Konzentration auf der Eduktseite treibt Reaktion nach vorne). Die H⁺-Konzentration steigt → pH sinkt (Acidose, pH < 7,35). Der Körper kompensiert: Kurzfristig puffert HCO₃⁻; langfristig erhöht die Niere die HCO₃⁻-Reabsorption. Wichtig: Es ist CO₂, nicht HCO₃⁻, das ausgeatmet wird — CO₂ wird in der Lunge aus HCO₃⁻ + H⁺ regeneriert und exhaliert.",
          hints: [
            "CO₂ steigt = Edukt-Konzentration steigt → nach Le Chatelier: Gleichgewicht nach rechts.",
            "Nach rechts bedeutet: mehr H⁺ entsteht → was passiert mit dem pH?",
          ],
          tags: ["blutpuffer", "le-chatelier", "acidose", "co2-hco3"],
          difficulty: 3,
        },
        {
          question: "Was ist der Bohr-Effekt und welches Prinzip liegt ihm zugrunde?",
          options: [
            "Bei höherem pH bindet Hämoglobin weniger O₂ — Grundlage: Massenwirkungsgesetz.",
            "Bei niedrigerem pH und höherem CO₂ sinkt die O₂-Affinität von Hb → mehr O₂-Abgabe ans Gewebe.",
            "Bei höherem pO₂ wird O₂ stärker ans Hämoglobin gebunden — unabhängig vom pH.",
            "Bei niedrigerem pH steigt die O₂-Affinität von Hb, um Hypoxie zu verhindern.",
            "Der Bohr-Effekt beschreibt die CO₂-Aufnahme durch Erythrozyten (Carboanhydrase).",
          ],
          correctIndex: 1,
          explanation:
            "Der Bohr-Effekt (Christian Bohr, 1904): In metabolisch aktiven Geweben steigt CO₂ (aus Zellatmung) und H⁺ (aus CO₂ + H₂O → H⁺ + HCO₃⁻ und Laktat), der pH sinkt. Dies senkt die O₂-Affinität von Hämoglobin (allosterische Konformationsänderung: T-Form statt R-Form) → das Gleichgewicht Hb·O₂ ⇌ Hb + O₂ verschiebt sich nach rechts → O₂ wird ans Gewebe abgegeben. In der Lunge: hoher pO₂, niedriges CO₂, hoher pH → R-Form (hohe Affinität) → O₂-Beladung. Der Bohr-Effekt ist Le Chatelier auf molekularer Ebene im Kontext allosterischer Regulation.",
          hints: [
            "Niedriger pH in aktiven Geweben → was passiert mit Hb-O₂-Affinität?",
            "Le Chatelier: Hohes H⁺/CO₂ verschiebt Hb·O₂ ⇌ Hb + O₂ in welche Richtung?",
          ],
          tags: ["bohr-effekt", "haemoglobin", "le-chatelier", "sauerstoff"],
          difficulty: 3,
        },
        {
          question: "Kc für eine Reaktion bei 25 °C beträgt 1 × 10⁻⁸. Was bedeutet das?",
          options: [
            "Die Reaktion ist sehr schnell und vollständig.",
            "Das Gleichgewicht liegt weit auf der Produktseite.",
            "Das Gleichgewicht liegt weit auf der Eduktseite; kaum Produkt gebildet.",
            "Kc ändert sich nicht mit der Temperatur.",
            "Die Reaktion ist exotherm, weil Kc < 1.",
          ],
          correctIndex: 2,
          explanation:
            "Kc = 1 × 10⁻⁸ ist sehr viel kleiner als 1. Nach der Definition Kc = [Produkte]/[Edukte] (vereinfacht) bedeutet ein kleines Kc, dass die Konzentrationen der Edukte im Gleichgewicht viel größer sind als die der Produkte — das Gleichgewicht liegt weit auf der Eduktseite. Praktisch: Die Reaktion läuft kaum in Richtung Produkte ab. Kc hat keine direkte Aussage über die Reaktionsgeschwindigkeit (das ist Kinetik, nicht Thermodynamik). Kc ändert sich mit der Temperatur, ist aber unabhängig von Konzentrationsänderungen oder Katalysatoren. Kc sagt nichts über exo- oder endotherm aus.",
          hints: [
            "Kc ≪ 1 → Zähler (Produkte) ist viel kleiner als Nenner (Edukte).",
            "Ist das Gleichgewicht auf der Produkt- oder Eduktseite?",
          ],
          tags: ["gleichgewichtskonstante", "kc", "massenwirkungsgesetz"],
          difficulty: 2,
        },
      ],
    },
    // === from kap8-chemisches-gleichgewicht ===

    {
      id: "ch-8-01",
      title: "Reaktionsgeschwindigkeit und Aktivierungsenergie",
      stichworte: [
        "Reaktionsgeschwindigkeit",
        "Aktivierungsenergie",
        "Arrhenius-Gleichung",
        "RGT-Regel",
        "Stoßtheorie",
        "Übergangszustand",
        "Energieprofil",
        "Katalysator",
        "Geschwindigkeitskonstante",
        "Therapeutische Hypothermie",
      ],
      content: `## Einleitung

**Worum geht es?** Die **Aktivierungsenergie E_A** ist die Energiebarriere, die Reaktanten überwinden müssen, um vom Edukt- in den **Übergangszustand** und zu den Produkten zu gelangen. **Arrhenius-Gleichung** k = A·e^(−E_A/RT): k und damit die Reaktionsgeschwindigkeit steigen mit Temperatur und sinken mit E_A. **Katalysatoren** (und Enzyme) senken E_A, ohne ΔH oder ΔG zu ändern. **Warum für den MedAT relevant?** E_A ≠ ΔH, Arrhenius (was macht Katalysator?), Energieprofil (exotherm/endotherm), RGT-Regel und **therapeutische Hypothermie** (32–36 °C → langsamere Reaktionen → Neuroprotektion) sowie Fieber werden geprüft. **Welche Fragen werden beantwortet?** „Was ist E_A?“; „E_A = ΔH?“; „Was macht ein Katalysator laut Arrhenius?“; „RGT-Regel?“; „Hypothermie warum?“; „Enzymdenaturierung bei welcher Temperatur?“; „Warum Fieber schnellerer Stoffwechsel?“.

**In diesem Kapitel lernst du:**
- **Aktivierungsenergie E_A:** Energiebarriere zum Übergangszustand; **E_A ≠ ΔH** (ΔH = Nettodifferenz Edukt–Produkt)
- **Arrhenius-Gleichung:** k = A·e^(−E_A/RT); Katalysator **senkt E_A** → k steigt exponentiell; Temperatur ↑ → k ↑
- **Energieprofil:** exotherm (Produkte tiefer), endotherm (Produkte höher); E_A,hin ≠ E_A,rück
- **RGT-Regel:** +10 °C → v verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3); gilt nur bis Denaturierung (~42 °C)
- **Katalysator:** senkt E_A, ändert **nicht** ΔH, ΔG oder K; Stoßtheorie: wirksame Stöße (Energie ≥ E_A + Orientierung)
- **Therapeutische Hypothermie:** 32–36 °C → v ↓ ~30–50 % → Neuroprotektion; Fieber 40 °C → v ↑ ~30 %; >42 °C Denaturierung

---

## Reaktionsgeschwindigkeit

Die Reaktionsgeschwindigkeit v beschreibt, wie schnell sich die Konzentration einer Substanz mit der Zeit ändert. Formal gilt:

**v = Δc / Δt**

wobei Δc die Konzentrationsänderung und Δt das Zeitintervall ist. Die Einheit ist mol·L⁻¹·s⁻¹. Für Produkte ist v positiv (Konzentration steigt), für Edukte negativ (Konzentration sinkt). Da Reaktionsgeschwindigkeiten in der Regel mit der Zeit abnehmen, arbeitet man oft mit Momentangeschwindigkeiten, die als Grenzwert des Differenzenquotienten definiert sind.

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**Konzentration:** Höhere Konzentration der Reaktionspartner bedeutet mehr Teilchenkollisionen pro Zeiteinheit — die Reaktionsgeschwindigkeit steigt. Dieser Zusammenhang wird durch das empirische Geschwindigkeitsgesetz beschrieben:

**v = k · [A]^m · [B]^n**

wobei k die temperaturabhängige Geschwindigkeitskonstante und m, n die partiellen Reaktionsordnungen sind. Die Gesamtreaktionsordnung ist m + n. Eine Reaktion 1. Ordnung in [A] bedeutet: Verdoppelt man [A], verdoppelt sich v. Bei 2. Ordnung vervierfacht sich v. Die partiellen Ordnungen müssen experimentell bestimmt werden — sie ergeben sich nicht einfach aus den stöchiometrischen Koeffizienten der Bruttogleichung.

**Temperatur und die RGT-Regel:** Die Van't-Hoff-Regel (Reaktionsgeschwindigkeits-Temperatur-Regel, RGT-Regel) besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit näherungsweise verdoppelt bis verdreifacht. Der Temperaturfaktor Q₁₀ ≈ 2–3 gilt für viele chemische und biologische Reaktionen. Grund dafür ist, dass bei höherer Temperatur mehr Moleküle genug Energie besitzen, um die Aktivierungsenergie zu überwinden. Bei Enzymen gilt dies jedoch nur im physiologischen Bereich; oberhalb der optimalen Temperatur (meist 37–42 °C beim Menschen) kommt es zur Denaturierung und die Reaktionsgeschwindigkeit bricht ein.

**Oberfläche:** Bei heterogenen Reaktionen (z. B. Feststoff in Lösung) steigt die Reaktionsgeschwindigkeit mit der Kontaktfläche. Fein verteilte Feststoffe reagieren schneller als grobe Stücke. Beispiel: Staubexplosionen in Mühlen (fein verteilter Mehlstaub hat riesige Oberfläche). Klinisch: Mikronisierung von Tabletten erhöht die Bioverfügbarkeit.

**Lösungsmittel und Ionenstärke:** In wässriger Lösung beeinflussen Ionenstärke und Dielektrizitätskonstante des Lösungsmittels die effektiven Konzentrationen der Reaktanten.

> **Merke:** Fünf Einflussfaktoren auf v: (1) Konzentration, (2) Temperatur, (3) Aktivierungsenergie/Katalysator, (4) Oberfläche, (5) Lösungsmittel. Die ersten drei sind für die Prüfung am wichtigsten!

**Rechenbeispiel — RGT-Regel und Fieber:**
Grundumsatz bei 37 °C: v₁. Bei Fieber 40 °C (ΔT = 3 °C, Q₁₀ = 2,5):
v₂ = v₁ × Q₁₀^(ΔT/10) = v₁ × 2,5^(0,3) ≈ v₁ × 1,30 → ca. 30 % höherer Grundumsatz.
Das erklärt den erhöhten Kalorienverbrauch, die Tachykardie und die Tachypnoe bei Fieber.

## Aktivierungsenergie und das Arrhenius-Konzept

Damit eine Reaktion ablaufen kann, müssen die Reaktionspartner die **Aktivierungsenergie E_A** aufbringen. Diese entspricht der Energiebarriere im Reaktionskoordinatendiagramm, die Moleküle überwinden müssen, um vom Edukt- in den Übergangszustand (Aktivierungskomplex) und von dort in den Produktzustand zu gelangen.

![Energieprofil](/grafik-21-energieprofil.svg)


![Gleichgewicht und Kinetik](/grafik-mwg-lechatelier.svg)


Die **Arrhenius-Gleichung** beschreibt den quantitativen Zusammenhang:

**k = A · e^(−E_A / RT)**

- A = präexponentieller Faktor (Stoßfrequenz × Steric-Faktor)
- E_A = Aktivierungsenergie in J/mol
- R = universelle Gaskonstante (8,314 J·mol⁻¹·K⁻¹)
- T = absolute Temperatur in Kelvin

Je kleiner E_A, desto schneller läuft die Reaktion ab. Katalysatoren (inkl. Enzyme) senken E_A, ohne die Thermodynamik (ΔG der Reaktion) zu ändern.

**Rechenbeispiel — Arrhenius qualitativ:**
Zwei Reaktionen bei 37 °C (310 K): Reaktion A hat E_A = 40 kJ/mol, Reaktion B hat E_A = 80 kJ/mol.
Da E_A im negativen Exponenten steht: e^(−40.000/(8,314×310)) vs. e^(−80.000/(8,314×310))
= e^(−15,5) vs. e^(−31,0) ≈ 1,8×10⁻⁷ vs. 2,9×10⁻¹⁴
→ Reaktion A ist ~6 Millionen Mal schneller als B (bei gleichem A-Faktor)!

## Endotherme vs. exotherme Reaktionen im Energieprofil

Bei **exothermen** Reaktionen liegt das Produktniveau energetisch tiefer als das Eduktniveau (ΔH < 0). Die Aktivierungsenergie der Rückreaktion (E_A,rück) ist größer als die der Hinreaktion (E_A,hin). Es gilt: ΔH = E_A,hin − E_A,rück.

Bei **endothermen** Reaktionen ist es umgekehrt (ΔH > 0): E_A,rück < E_A,hin. Im dynamischen Gleichgewicht laufen Hin- und Rückreaktion gleichzeitig ab — das Energieprofil erklärt, warum beide Richtungen unterschiedliche Aktivierungsenergien und damit unterschiedliche Geschwindigkeitskonstanten besitzen.

> **Merke:** E_A ist NICHT gleich ΔH! E_A ist die Höhe des Energiebergs über dem Eduktniveau. ΔH ist die Nettodifferenz zwischen Edukt- und Produktniveau. Ein Katalysator senkt E_A, ohne ΔH zu ändern.

## Stoßtheorie und Übergangszustandstheorie

Die **Stoßtheorie** erklärt Reaktionsgeschwindigkeiten durch die Frequenz und Energie wirksamer Molekülkollisionen. Nicht jeder Stoß führt zur Reaktion — nur solche, bei denen (1) die kinetische Energie die Aktivierungsenergie übersteigt und (2) die räumliche Orientierung der Moleküle günstig ist. Der Anteil wirksamer Stöße ist typischerweise sehr klein (< 1 %).

Die **Übergangszustandstheorie (Eyring)** verfeinert dieses Bild: Edukte bilden zunächst einen hochenergetischen Aktivierungskomplex (Übergangszustand, ‡), der dann entweder zu Produkten zerfällt oder zurück zu Edukten. Die Theorie erlaubt die Berechnung von k aus thermodynamischen Größen (Enthalpie und Entropie der Aktivierung): k = (k_B·T/h) · e^(−ΔG‡/RT).

**Klinische Anwendung — Therapeutische Hypothermie vs. Fieber:**

| Zustand | Temperatur | Effekt auf v | Klinische Konsequenz |
|---|---|---|---|
| Hypothermie | 32–36 °C | v ↓ ~30–50 % | Neuroprotektion nach Herzstillstand |
| Normal | 37 °C | v = Normalwert | Physiologischer Stoffwechsel |
| Fieber | 40 °C | v ↑ ~30 % | Erhöhter O₂-Bedarf, Tachykardie |
| Denaturierung | > 42 °C | v bricht ein | Enzymverlust, lebensbedrohlich |

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Aktivierungsenergie E_A:** Energiebarriere zum Übergangszustand; **E_A ≠ ΔH** (E_A = Berg über Edukt, ΔH = Edukt–Produkt)
- **Arrhenius:** k = A·e^(−E_A/RT); Katalysator **senkt E_A** → k steigt; Temperatur ↑ → k ↑
- **Energieprofil:** exotherm (Produkte tiefer), endotherm (Produkte höher); Katalysator senkt E_A, nicht ΔH
- **RGT-Regel:** +10 °C → v verdoppelt bis verdreifacht (Q₁₀ ≈ 2–3); **nicht** über Denaturierung (~42 °C)
- **Katalysator** ändert **nicht** K, ΔH, ΔG — nur Reaktionsgeschwindigkeit (Kinetik)
- **Therapeutische Hypothermie:** 32–36 °C → v ↓ ~30–50 % → Neuroprotektion nach Herzstillstand
- **Fieber:** +2–3 °C → v ↑ ~20–35 %; >42 °C → Enzymdenaturierung

**Ergänzend vertiefend:** Übergangszustand, Stoßtheorie. Typische Fallen: E_A ≠ ΔH (Aktivierungsenergie vs. Reaktionsenthalpie); RGT-Regel gilt nicht über ~42 °C; Katalysator ändert nur Geschwindigkeit, nicht Thermodynamik.

**Häufige Prüfungsfragen:**
- „Was ist E_A?" → Energiebarriere zum Übergangszustand; nicht ΔH
- „Katalysator laut Arrhenius?" → Senkt E_A → k steigt exponentiell
- „Hypothermie Temperatur?" → 32–36 °C; verlangsamt Stoffwechsel, Neuroprotektion

**Typische Prüfungsfallen:**
- E_A ≠ ΔH; RGT gilt nicht über ~42 °C; Katalysator ändert nur Geschwindigkeit, nicht Thermodynamik

**Wichtige Begriffe & Definitionen:**
- **Aktivierungsenergie E_A:** Minimale Energie, die Reaktanten aufbringen müssen, um den Übergangszustand zu erreichen; im Energieprofil die Höhe des Bergs über dem Eduktniveau.
- **Arrhenius-Gleichung:** k = A·e^(−E_A/RT); beschreibt Temperatur- und E_A-Abhängigkeit der Geschwindigkeitskonstante k.
- **RGT-Regel:** Reaktionsgeschwindigkeits-Temperatur-Regel; Q₁₀ ≈ 2–3 pro 10 °C (bis zur Denaturierungstemperatur).

**Prüfungsrelevante Zahlen/Fakten:**
- Q₁₀ ≈ 2–3; Hypothermie 32–36 °C; Denaturierung >42 °C

---
## Zusammenfassung (ultrakompakt)

- **v = Δc/Δt** [mol·L⁻¹·s⁻¹]; Reaktionsgeschwindigkeit nimmt mit der Zeit ab (Edukte verbraucht)
- **Arrhenius-Gleichung**: k = A·e^(−E_A/RT) — höhere Temperatur → mehr Moleküle überschreiten E_A → k steigt exponentiell
- **RGT-Regel**: +10 °C → ca. 2–3× schneller (Q₁₀ ≈ 2–3); relevant für Fieber, Hypothermie, Kühlketten
- **Aktivierungsenergie E_A**: Energiebarriere zum Übergangszustand; ≠ ΔH; Katalysatoren senken E_A ohne ΔH zu ändern
- **Energieprofil**: exotherm: Produkte tiefer als Edukte; endotherm: Produkte höher; E_A,hin ≠ E_A,rück
- **Stoßtheorie**: Nur Stöße mit ausreichender Energie UND richtiger Orientierung → Reaktion
- **Therapeutische Hypothermie**: 32–36 °C → v ↓ ~30–50 % → Neuroprotektion; Fieber > 42 °C → Enzymdenaturierung`,

      lernziele: [
        "Die Reaktionsgeschwindigkeit formal definieren und Einflussfaktoren (Konzentration, Temperatur, Oberfläche) erläutern.",
        "Das Geschwindigkeitsgesetz v = k·[A]^m·[B]^n interpretieren und Reaktionsordnungen bestimmen.",
        "Die RGT-Regel und die Arrhenius-Gleichung qualitativ anwenden und klinische Beispiele nennen.",
        "Aktivierungsenergie im Energieprofil verorten und den Unterschied zwischen endo- und exothermen Reaktionen beschreiben.",
        "Erklären, wie Katalysatoren die Aktivierungsenergie senken, ohne die Reaktionsenthalpie zu ändern.",
      ],

      sections: [
        {
          heading: "Das Geschwindigkeitsgesetz",
          text: "Das empirische Geschwindigkeitsgesetz v = k·[A]^m·[B]^n verknüpft Reaktionsgeschwindigkeit mit Konzentrationen. Die Geschwindigkeitskonstante k ist temperaturabhängig (Arrhenius). Partielle Ordnungen m, n müssen experimentell ermittelt werden und müssen nicht den stöchiometrischen Koeffizienten entsprechen.",
          merksatz: "Merke: Die Reaktionsordnung folgt dem Experiment — nicht der Stöchiometrie!",
        },
        {
          heading: "RGT-Regel und Arrhenius",
          text: "Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3). Die Arrhenius-Gleichung k = A·e^(−E_A/RT) erklärt dies: Mehr Moleküle überschreiten bei höherer Temperatur die Energiebarriere E_A. Bei Enzymen gilt dies nur bis zur Denaturierungstemperatur.",
          merksatz: "Faustregel: +10 °C → doppelte Reaktionsgeschwindigkeit (RGT-Regel).",
        },
        {
          heading: "Aktivierungsenergie und Katalyse",
          text: "Jede Reaktion benötigt eine Mindestenergie (E_A), um den Übergangszustand zu erreichen. Katalysatoren bieten einen alternativen Reaktionsweg mit niedrigerer E_A — die Thermodynamik (ΔG, ΔH) bleibt unverändert. Enzyme als biologische Katalysatoren erreichen Beschleunigungen um Faktoren von 10⁶–10¹².",
          merksatz: "Katalysatoren ändern den Weg, nicht das Ziel: E_A sinkt, ΔG bleibt gleich.",
        },
      ],

      merksätze: [
        "v = Δc/Δt: Reaktionsgeschwindigkeit ist Konzentrationsänderung pro Zeit.",
        "Geschwindigkeitsgesetz: v = k·[A]^m·[B]^n — Ordnungen experimentell bestimmt.",
        "RGT-Regel: +10 °C → ca. 2× schnellere Reaktion (Q₁₀ ≈ 2–3).",
        "Arrhenius: k = A·e^(−E_A/RT) — höheres T, größeres k, schnellere Reaktion.",
        "E_A = Energiebarriere im Reaktionskoordinatendiagramm.",
        "Katalysator senkt E_A, ändert aber nicht ΔH oder ΔG.",
        "Exotherm: ΔH < 0, Produkte energetisch tiefer als Edukte.",
        "Endotherm: ΔH > 0, Produkte energetisch höher — Wärme wird aufgenommen.",
        "Fieber beschleunigt Enzymreaktionen — klinische Relevanz der RGT-Regel.",
        "Denaturierung von Enzymen bei T > T_opt führt zum Verlust der Katalyseaktivität.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie, wie Temperatur und Aktivierungsenergie die Reaktionsgeschwindigkeit beeinflussen, und diskutieren Sie die klinische Bedeutung dieser Zusammenhänge am Beispiel von Fieber und therapeutischer Hypothermie.",
        answer: `Die Reaktionsgeschwindigkeit hängt eng mit der Aktivierungsenergie E_A zusammen: Nur Molekülkollisionen, bei denen die kinetische Energie die Barriere E_A übersteigt, führen zu einer Reaktion. Die Arrhenius-Gleichung k = A·e^(−E_A/RT) zeigt mathematisch, dass die Geschwindigkeitskonstante k exponentiell mit der Temperatur steigt. Praktisch gilt die RGT-Regel: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3).

Klinisch ist dies von enormer Bedeutung: Bei Fieber (z. B. 40 °C statt 37 °C) steigen Stoffwechselreaktionen und der O₂-Verbrauch der Zellen erheblich an. Das Herz muss mehr pumpen, die Atemfrequenz steigt. Bei sehr hohem Fieber (> 42 °C) droht Denaturierung von Enzymen und Proteinen, was lebensbedrohlich ist.

Therapeutische Hypothermie (Kühlung auf 32–36 °C nach Herzstillstand oder bei Schädel-Hirn-Trauma) nutzt den umgekehrten Effekt: Verlangsamung des Zellstoffwechsels reduziert den O₂-Bedarf von Neuronen und schützt so vor ischämischen Schäden. Auch bei Herzoperationen am offenen Herzen wird der Patient auf ca. 28 °C gekühlt, um Organschäden während des Kreislaufstillstands zu minimieren.`,
      },

      klinischerBezug:
        "Die RGT-Regel erklärt, warum Fieber den Grundumsatz und den O₂-Bedarf steigert: Bereits 3 °C Temperaturerhöhung verdoppeln näherungsweise die Reaktionsgeschwindigkeiten in Körperzellen. Therapeutische Hypothermie nach Herzstillstand nutzt den gegenteiligen Effekt gezielt aus, um den neuronalen Stoffwechsel zu senken und Ischämieschäden zu begrenzen. Pharmakologisch nutzt man das Konzept der Aktivierungsenergie, wenn Enzymhemmer (z. B. ACE-Hemmer, COX-Inhibitoren) die Substratbindung blockieren und damit effektiv die Aktivierungsenergie für die enzymatische Reaktion erhöhen.",

      selfTest: [
        {
          question: "Welche Aussage zur Reaktionsgeschwindigkeit ist korrekt?",
          options: [
            "Die Reaktionsgeschwindigkeit ist immer konstant über den gesamten Reaktionsverlauf.",
            "Die Reaktionsgeschwindigkeit nimmt für Edukte zu und für Produkte ab.",
            "v = Δc/Δt gibt die Änderung der Konzentration pro Zeiteinheit an.",
            "Die Einheit der Reaktionsgeschwindigkeit ist mol·L.",
            "Nur Endprodukte bestimmen die Reaktionsgeschwindigkeit.",
          ],
          correctIndex: 2,
          explanation:
            "Die Reaktionsgeschwindigkeit v = Δc/Δt beschreibt die Konzentrationsänderung pro Zeiteinheit, Einheit mol·L⁻¹·s⁻¹. Sie ist für Produkte positiv (Konzentration steigt) und für Edukte negativ (Konzentration sinkt). Im Verlauf einer Reaktion nimmt v in der Regel ab, da die Konzentration der Edukte sinkt. Die anderen Optionen sind falsch: Die Geschwindigkeit ist nicht konstant, die Einheit nicht mol·L, und alle Reaktanten beeinflussen v.",
          hints: ["v = Δc/Δt — Ableitung aus der Definition", "Einheit: mol pro Liter pro Sekunde"],
          difficulty: 1,
          tags: ["reaktionsgeschwindigkeit", "definition", "einheit"],
        },
        {
          question:
            "Die RGT-Regel besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit ...",
          options: [
            "halbiert.",
            "um den Faktor 10 erhöht.",
            "ungefähr verdoppelt bis verdreifacht.",
            "nicht beeinflusst, solange kein Katalysator vorhanden ist.",
            "nur bei exothermen Reaktionen erhöht.",
          ],
          correctIndex: 2,
          explanation:
            "Die RGT-Regel (Van't-Hoff-Regel) besagt, dass Q₁₀ ≈ 2–3 ist: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit. Ursache ist, dass mehr Moleküle genug kinetische Energie besitzen, um die Aktivierungsenergie zu überwinden. Dies gilt für chemische und biologische Reaktionen im physiologischen Bereich. Bei Enzymen gilt es nur bis zur Denaturierungstemperatur. Die anderen Optionen sind falsch.",
          hints: [
            "Q₁₀ = Quotient der Geschwindigkeiten bei T+10 und T",
            "RGT = Reaktionsgeschwindigkeits-Temperatur-Regel",
          ],
          difficulty: 1,
          tags: ["rgt-regel", "temperatur", "reaktionsgeschwindigkeit"],
        },
        {
          question: "Ein Katalysator beschleunigt eine Reaktion, indem er ...",
          options: [
            "die Reaktionsenthalpie ΔH verringert.",
            "die freie Enthalpie ΔG der Reaktion verändert.",
            "einen Reaktionsweg mit niedrigerer Aktivierungsenergie bereitstellt.",
            "die Eduktkonzentrationen erhöht.",
            "die Gleichgewichtskonstante K zugunsten der Produkte verschiebt.",
          ],
          correctIndex: 2,
          explanation:
            "Katalysatoren bieten einen alternativen Reaktionsmechanismus mit niedrigerer Aktivierungsenergie E_A an. Dadurch können bei gleicher Temperatur mehr Moleküle die Energiebarriere überwinden — die Reaktion läuft schneller. Entscheidend: Katalysatoren ändern weder ΔH, noch ΔG, noch die Gleichgewichtskonstante K. Sie verändern nur die Kinetik (Geschwindigkeit), nicht die Thermodynamik. Enzyme als biologische Katalysatoren erreichen Geschwindigkeitssteigerungen von 10⁶ bis 10¹².",
          hints: [
            "Katalysatoren erscheinen links und rechts der Gleichung unverändert",
            "Thermodynamik (ΔG, K) bleibt unverändert — nur Kinetik ändert sich",
          ],
          difficulty: 2,
          tags: ["katalysator", "aktivierungsenergie", "thermodynamik"],
        },
        {
          question: "Welche Aussage zum Geschwindigkeitsgesetz v = k·[A]^m·[B]^n ist korrekt?",
          options: [
            "m und n entsprechen immer den stöchiometrischen Koeffizienten der Reaktionsgleichung.",
            "k ist unabhängig von der Temperatur.",
            "m und n müssen experimentell bestimmt werden und können auch 0 oder nicht ganzzahlig sein.",
            "Das Gesetz gilt nur für Reaktionen 1. Ordnung.",
            "v ist immer konstant, solange k konstant ist.",
          ],
          correctIndex: 2,
          explanation:
            "Die partiellen Reaktionsordnungen m und n müssen experimentell bestimmt werden — sie ergeben sich nicht aus den stöchiometrischen Koeffizienten der Bruttogleichung. Sie können ganze Zahlen, Brüche oder null sein. Die Geschwindigkeitskonstante k ist temperaturabhängig (Arrhenius-Gleichung). Das Geschwindigkeitsgesetz gilt für alle Reaktionsordnungen. Da [A] und [B] sich mit der Zeit ändern, ändert sich auch v, selbst wenn k konstant ist.",
          hints: [
            "Ordnungen folgen dem Experiment, nicht der Stöchiometrie",
            "k = temperaturabhängige Konstante (Arrhenius)",
          ],
          difficulty: 2,
          tags: ["geschwindigkeitsgesetz", "reaktionsordnung", "kinetik"],
        },
        {
          question: "Was beschreibt die Aktivierungsenergie E_A im Reaktionskoordinatendiagramm?",
          options: [
            "Die Energiedifferenz zwischen Edukten und Produkten (ΔH).",
            "Die minimale Energie, die Reaktanten aufbringen müssen, um den Übergangszustand zu erreichen.",
            "Die Energie, die bei der Reaktion freigesetzt wird.",
            "Den Schnittpunkt der Energiekurve mit der Koordinatenachse.",
            "Die Gleichgewichtskonstante der Reaktion.",
          ],
          correctIndex: 1,
          explanation:
            "Die Aktivierungsenergie E_A ist die minimale Energie, die Reaktanten aufbringen müssen, um den Übergangszustand (Aktivierungskomplex) zu erreichen. Im Energieprofil ist sie die Höhe des Energiebergs über dem Edukt-Niveau. Sie ist nicht identisch mit ΔH (Differenz zwischen Produkt- und Eduktniveau). E_A bestimmt die Reaktionsgeschwindigkeit — je größer E_A, desto langsamer die Reaktion bei gegebener Temperatur. Katalysatoren senken E_A.",
          hints: [
            "E_A = Höhe des Energiebergs über dem Eduktniveau",
            "Nicht verwechseln mit ΔH (Reaktionsenthalpie)",
          ],
          difficulty: 1,
          tags: ["aktivierungsenergie", "energieprofil", "übergangszustand"],
        },
        {
          question:
            "Bei welcher Temperatur wird therapeutische Hypothermie nach Herzstillstand eingesetzt und warum?",
          options: [
            "Erhöhung auf 42 °C, um Enzymaktivitäten zu maximieren.",
            "Senkung auf 32–36 °C, um den neuronalen Stoffwechsel zu verlangsamen.",
            "Senkung auf 20 °C, um alle Stoffwechselprozesse zu stoppen.",
            "Erhöhung auf 40 °C, um die Durchblutung zu verbessern.",
            "Keine Temperaturveränderung — nur Medikamente werden verwendet.",
          ],
          correctIndex: 1,
          explanation:
            "Therapeutische Hypothermie (32–36 °C) nach Herzstillstand nutzt die RGT-Regel: Temperatursenkung verlangsamt enzymatische Reaktionen und reduziert den O₂-Bedarf von Neuronen. Dadurch werden ischämische Schäden während der Phase reduzierter Durchblutung minimiert. Eine Kühlung auf 20 °C wäre zu extrem und würde selbst Schäden verursachen. Die Hypothermie ist bei 32–36 °C wirksam und klinisch etabliert.",
          hints: [
            "RGT-Regel: Abkühlung verlangsamt Reaktionen",
            "Ziel: Neuroprotektion durch reduzierten O₂-Bedarf",
          ],
          difficulty: 2,
          tags: ["hypothermie", "neuroprotektion", "rgt-regel"],
        },
        {
          question: "Welche Aussage zur Arrhenius-Gleichung k = A·e^(−E_A/RT) ist korrekt?",
          options: [
            "Ein größeres E_A führt bei gleicher Temperatur zu einem größeren k.",
            "Eine Temperaturerhöhung verkleinert den Betrag des Exponenten −E_A/RT und vergrößert damit k.",
            "R ist die individuelle Gaskonstante des jeweiligen Gases.",
            "A (präexponentieller Faktor) ist immer gleich 1.",
            "Die Gleichung gilt nur für endotherme Reaktionen.",
          ],
          correctIndex: 1,
          explanation:
            "In der Arrhenius-Gleichung k = A·e^(−E_A/RT) gilt: Eine Temperaturerhöhung (größeres T) macht den negativen Exponenten −E_A/RT betragsmäßig kleiner, was e^(−E_A/RT) vergrößert — also steigt k. Größeres E_A macht den Exponenten betragsmäßig größer, k sinkt. R ist die universelle Gaskonstante (8,314 J·mol⁻¹·K⁻¹), nicht individuell. A enthält Stoßfrequenz und Orientierungsfaktor. Die Gleichung gilt für alle Reaktionstypen.",
          hints: [
            "Negativer Exponent: Je weniger negativ, desto größer e^x",
            "R = 8,314 J·mol⁻¹·K⁻¹ (universell)",
          ],
          difficulty: 3,
          tags: ["arrhenius", "aktivierungsenergie", "temperatur"],
        },
        {
          question:
            "Was ändert sich bei einer Reaktion, wenn ein Enzym als Katalysator hinzugefügt wird?",
          options: [
            "Die Gleichgewichtskonstante K verschiebt sich zugunsten der Produkte.",
            "Die Reaktionsenthalpie ΔH wird negativ.",
            "Die Aktivierungsenergie sinkt, und die Reaktion läuft schneller ab.",
            "Die Eduktkonzentrationen steigen dauerhaft an.",
            "Das Reaktionsgleichgewicht liegt nicht mehr vor.",
          ],
          correctIndex: 2,
          explanation:
            "Enzyme als biologische Katalysatoren senken die Aktivierungsenergie E_A durch Bereitstellung eines alternativen Reaktionsmechanismus. Die Reaktion läuft dadurch bei Körpertemperatur mit enormer Geschwindigkeit ab. Thermodynamische Größen (ΔH, ΔG, K) bleiben unverändert — das Gleichgewicht wird nur schneller erreicht. Enzyme verbrauchen sich nicht und verändern auch Eduktkonzentrationen nicht dauerhaft.",
          hints: [
            "Enzyme ändern Kinetik, nicht Thermodynamik",
            "K bleibt unverändert — Gleichgewicht wird nur schneller erreicht",
          ],
          difficulty: 2,
          tags: ["enzym", "katalysator", "kinetik"],
        },
      ],
    },

    {
      id: "ch-8-02",
      title: "Chemisches Gleichgewicht und Massenwirkungsgesetz",
      stichworte: [
        "Dynamisches Gleichgewicht",
        "Massenwirkungsgesetz",
        "Gleichgewichtskonstante Kc",
        "Reaktionsquotient Q",
        "Kp und Kc",
        "Temperaturabhängigkeit",
        "Gibbs-Energie",
        "Hämoglobin-O₂-Bindung",
        "Michaelis-Konstante",
        "Guldberg-Waage",
      ],
      content: `## Einleitung

**Worum geht es?** Im **dynamischen Gleichgewicht** laufen Hin- und Rückreaktion mit gleicher Geschwindigkeit (v_hin = v_rück); Konzentrationen sind konstant, aber nicht gleich. **Massenwirkungsgesetz** Kc = [C]^c·[D]^d/([A]^a·[B]^b) — Koeffizienten als Exponenten; Feststoffe und H₂O(l) nicht in Kc. **Reaktionsquotient Q** mit aktuellen Konzentrationen: Q < Kc → Hinreaktion, Q > Kc → Rückreaktion. Bei Gasen **Kp** = Kc·(RT)^Δn. **Warum für den MedAT relevant?** Kc aufstellen, Q vs. K, Katalysator ändert K nicht, Temperaturabhängigkeit von K (exotherm/endotherm), ΔG° = −RT·ln(K) und Hb-O₂-Gleichgewicht werden geprüft. **Welche Fragen werden beantwortet?** „Q < Kc bedeutet?“; „H₂O im MWG?“; „Kp aus Kc?“; „Großes K = schnelle Reaktion?“; „Katalysator und Gleichgewicht?“; „ΔG° und K?“.

**In diesem Kapitel lernst du:**
- **Dynamisches Gleichgewicht:** v_hin = v_rück; Konzentrationen konstant; beide Richtungen laufen weiter
- **Massenwirkungsgesetz:** Kc = [Produkte]^Koeff/[Edukte]^Koeff; **Feststoffe und H₂O(l) nicht** einbeziehen
- **Reaktionsquotient Q:** gleiche Form wie Kc, **aktuelle** Konzentrationen; Q < Kc → Hinreaktion; Q > Kc → Rückreaktion; Q = Kc → Gleichgewicht
- **Kc-Interpretation:** Kc ≫ 1 → Produkte bevorzugt; Kc ≪ 1 → Edukte bevorzugt; **K ≠ Geschwindigkeit** (Thermodynamik vs. Kinetik)
- **Kp für Gase:** Kp = Kc·(RT)^Δn; bei Δn = 0 gilt Kp = Kc
- **Temperatur:** exotherm + T↑ → K sinkt; endotherm + T↑ → K steigt; **ΔG° = −RT·ln(K)**

---

## Das dynamische Gleichgewicht

Viele chemische Reaktionen sind reversibel: Die Produkte können wieder zu Edukten zurückreagieren. Man schreibt dies mit einem Doppelpfeil:

**A + B ⇌ C + D**

Anfänglich dominiert die Hinreaktion. Mit steigenden Produktkonzentrationen nimmt die Rückreaktion zu. Irgendwann werden Hin- und Rückreaktion gleich schnell — es stellt sich ein **dynamisches Gleichgewicht** ein. Dynamisch bedeutet: Beide Reaktionen laufen weiterhin ab, aber ihre Geschwindigkeiten sind gleich. Makroskopisch scheint die Reaktion zu stehen; mikroskopisch herrscht rege Aktivität.

Das Gleichgewicht ist kein statischer Zustand. Isotopen-Tracerexperimente zeigen, dass im Gleichgewicht ständig Moleküle zwischen Edukt- und Produktzustand wechseln — nur netto findet keine Änderung statt.

> **Merke:** Dynamisches Gleichgewicht = v_hin = v_rück. Konzentrationen sind konstant (aber nicht gleich!). Beide Reaktionsrichtungen laufen weiterhin ab.

![Gleichgewicht MWG](/grafik-mwg-lechatelier.svg)


![Massenwirkungsgesetz Kc und Kp](/grafik-massenwirkungsgesetz.svg)


**Zeitlicher Verlauf bis zum Gleichgewicht:**
- Beginn: [Edukte] hoch, [Produkte] = 0 → v_hin maximal, v_rück = 0
- Verlauf: [Edukte] sinkt, [Produkte] steigt → v_hin sinkt, v_rück steigt
- Gleichgewicht: v_hin = v_rück → Konzentrationen bleiben konstant
- Je höher E_A, desto länger dauert die Einstellung (Kinetik). Ein Katalysator beschleunigt die Einstellung, ändert aber die Lage nicht.

## Das Massenwirkungsgesetz (MWG)

Das **Massenwirkungsgesetz** (Guldberg und Waage, 1864) formuliert die quantitative Bedingung für das chemische Gleichgewicht. Für die allgemeine Reaktion:

**aA + bB ⇌ cC + dD**

gilt die Gleichgewichtskonstante K_c (konzentrationsbasiert):

**K_c = [C]^c · [D]^d / ([A]^a · [B]^b)**

Die eckigen Klammern bezeichnen Gleichgewichtskonzentrationen in mol/L, die Hochzahlen sind die stöchiometrischen Koeffizienten. Wichtig: Reine Feststoffe und flüssiges Wasser (bei wässrigen Reaktionen) tauchen nicht im MWG auf, da ihre Aktivität (näherungsweise) 1 ist.

**Beispiel (MedAT-relevant):** Für **Fe + 2 HCl ⇌ FeCl₂ + H₂** lautet das Massenwirkungsgesetz:
**K = [FeCl₂]·[H₂] / ([Fe]·[HCl]²)** — der Koeffizient 2 vor HCl wird zum Exponenten bei [HCl].

**Reaktionsquotient Q:** Zu einem beliebigen Zeitpunkt berechnet man Q mit denselben Formeln. Vergleich von Q mit K_c:
- Q < K_c: Reaktion läuft in Richtung Produkte (Hinreaktion überwiegt)
- Q > K_c: Reaktion läuft in Richtung Edukte (Rückreaktion überwiegt)
- Q = K_c: System befindet sich im Gleichgewicht

## Interpretation von K_c

Die Größe von K_c gibt Auskunft über die Lage des Gleichgewichts:

- K_c >> 1 (z. B. 10⁶): Gleichgewicht stark auf Seite der Produkte
- K_c ≈ 1: Edukte und Produkte etwa gleich
- K_c << 1 (z. B. 10⁻⁶): Gleichgewicht stark auf Seite der Edukte

Ein großes K_c bedeutet nicht, dass die Reaktion schnell abläuft — das regelt die Kinetik (Aktivierungsenergie). K_c ist eine rein thermodynamische Größe.

> **Merke:** K_c sagt, WO das Gleichgewicht liegt (Thermodynamik). E_A sagt, WIE SCHNELL es erreicht wird (Kinetik). Beides ist unabhängig!

## K_p und K_c bei Gasreaktionen

Für Gasreaktionen kann man statt Konzentrationen Partialdrücke verwenden:

**K_p = p_C^c · p_D^d / (p_A^a · p_B^b)**

Der Zusammenhang: **K_p = K_c · (RT)^Δn**

wobei Δn = (c + d) − (a + b) die Änderung der Molzahl an Gasen ist. Bei Δn = 0 ist K_p = K_c.

## Temperaturabhängigkeit von K

Die Gleichgewichtskonstante K ist temperaturabhängig:

- Bei exothermen Reaktionen (ΔH < 0): K nimmt mit steigender Temperatur ab
- Bei endothermen Reaktionen (ΔH > 0): K nimmt mit steigender Temperatur zu

## Zusammenhang K und ΔG°

**ΔG° = −RT · ln(K)**

- ΔG° < 0 → K > 1: Reaktion läuft spontan in Richtung Produkte
- ΔG° > 0 → K < 1: Reaktion läuft spontan in Richtung Edukte
- ΔG° = 0 → K = 1: Edukte und Produkte gleich stabil

Diese Beziehung verbindet die Kinetik (über K) mit der Thermodynamik (über ΔG°). K sagt etwas über die Lage des Gleichgewichts aus, aber nichts über die Reaktionsgeschwindigkeit.

## Hämoglobin und das MWG

Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin: Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Die Michaelis-Konstante K_M bei Enzymreaktionen ist ebenfalls eine Gleichgewichtskonstante und gibt die Substrataffinität von Enzymen an.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Massenwirkungsgesetz:** Kc = [C]^c·[D]^d/([A]^a·[B]^b); **Feststoffe und H₂O(l) nicht** einbeziehen; Koeffizienten = Exponenten
- **Reaktionsquotient Q:** gleiche Form wie Kc, **aktuelle** Konzentrationen; **Q < Kc** → Hinreaktion; **Q > Kc** → Rückreaktion; **Q = Kc** → Gleichgewicht
- **Katalysator** ändert **K und Gleichgewichtslage nicht**
- **Kc-Interpretation:** Kc ≫ 1 → Produkte; Kc ≪ 1 → Edukte; **K ≠ Reaktionsgeschwindigkeit** (K = Thermodynamik, E_A = Kinetik)
- **Kp:** Kp = Kc·(RT)^Δn; bei Δn = 0: Kp = Kc
- **Temperatur:** exotherm + T↑ → K sinkt; endotherm + T↑ → K steigt; **ΔG° = −RT·ln(K)** (ΔG° < 0 ↔ K > 1)
- Umkehrreaktion: K' = 1/K

**Ergänzend vertiefend:** Kc vs. Kp; Löslichkeitsprodukt Ksp. Typische Fallen: Katalysator verschiebt Gleichgewicht nicht; großes K ≠ schnelle Reaktion; Q = aktuelle Konzentrationen (Reaktionsquotient), K = Gleichgewichtskonstante.

**Häufige Prüfungsfragen:**
- „Q < Kc?" → Hinreaktion überwiegt, noch nicht im Gleichgewicht
- „H₂O im MWG?" → Nein (Aktivität ≈ 1)
- „Kp aus Kc?" → Kp = Kc·(RT)^Δn

**Typische Prüfungsfallen:**
- Katalysator verschiebt Gleichgewicht nicht; großes K ≠ schnelle Reaktion; Q = aktuelle Konzentrationen

**Wichtige Begriffe & Definitionen:**
- **Reaktionsquotient Q:** Mit aktuellen Konzentrationen wie Kc berechnet; Q < K → Hinreaktion, Q = K → Gleichgewicht.
- **Gleichgewichtskonstante Kc:** Bei Gleichgewicht konstant; nur temperaturabhängig, nicht konzentrations- oder druckabhängig.
- **Dynamisches Gleichgewicht:** v_hin = v_rück; Konzentrationen konstant; Hin- und Rückreaktion laufen weiter.

**Prüfungsrelevante Zahlen/Fakten:**
- ΔG° = −RT·ln(K); K' = 1/K für Umkehrreaktion; Kc ≫ 1 bzw. ≪ 1

---
## Zusammenfassung (ultrakompakt)

- **Dynamisches Gleichgewicht**: v_hin = v_rück; Konzentrationen konstant, aber beide Reaktionen laufen weiter
- **MWG**: Kc = [C]^c·[D]^d / ([A]^a·[B]^b); Feststoffe und H₂O(l) auslassen; Exponenten = Koeffizienten
- **Kc ≫ 1**: Produktseite bevorzugt; **Kc ≪ 1**: Eduktseite; **Kc = 1**: ausgeglichen
- **Kp = Kc·(RT)^Δn**: gilt für Gasreaktionen; bei Δn = 0 gilt Kp = Kc
- **Reaktionsquotient Q**: wie Kc, aber aktuelle Konzentrationen; Q < K → vorwärts; Q > K → rückwärts
- **ΔG° = −RT·ln(K)**: ΔG° < 0 ↔ K > 1 ↔ Reaktion thermodynamisch begünstigt
- **K und Temperatur**: exotherm: K sinkt mit T; endotherm: K steigt mit T
- **Hämoglobin**: Hb + O₂ ⇌ HbO₂; pO₂ steuert Gleichgewichtslage (Le Chatelier im Blut)`,

      lernziele: [
        "Das dynamische Gleichgewicht definieren und von einem statischen Zustand abgrenzen.",
        "Das Massenwirkungsgesetz formulieren und K_c für gegebene Reaktionen aufstellen.",
        "Den Reaktionsquotienten Q berechnen und mit K_c vergleichen, um die Reaktionsrichtung zu bestimmen.",
        "Die Bedeutung der Größe von K_c (>>1, ≈1, <<1) für die Lage des Gleichgewichts interpretieren.",
        "Den Zusammenhang zwischen K und ΔG° qualitativ erläutern.",
      ],

      sections: [
        {
          heading: "Das Massenwirkungsgesetz",
          text: "Für aA + bB ⇌ cC + dD gilt K_c = [C]^c·[D]^d / ([A]^a·[B]^b). Reine Feststoffe und Wasser (Lösungsmittel) erscheinen nicht im Ausdruck. K_c ist temperaturabhängig, aber unabhängig von Druck und Konzentrationsänderungen.",
          merksatz:
            "K_c = Produkte hoch Koeffizient / Edukte hoch Koeffizient — Feststoffe und H₂O ausklammern!",
        },
        {
          heading: "Reaktionsquotient Q vs. Gleichgewichtskonstante K",
          text: "Q wird wie K_c berechnet, aber mit aktuellen (nicht Gleichgewichts-)Konzentrationen. Q < K: Reaktion läuft vorwärts. Q > K: Reaktion läuft rückwärts. Q = K: Gleichgewicht erreicht. Der Vergleich Q vs. K ermöglicht die Vorhersage der spontanen Reaktionsrichtung.",
          merksatz: "Q < K → Produkte werden gebildet; Q > K → Edukte werden gebildet.",
        },
        {
          heading: "K und Thermodynamik",
          text: "ΔG° = −RT·ln(K) verknüpft Gleichgewichtskonstante mit Standard-Gibbs-Energie. Große K entspricht negativem ΔG° — Reaktion ist thermodynamisch günstig. Wichtig: K sagt nichts über die Reaktionsgeschwindigkeit aus (das ist Kinetik).",
          merksatz: "ΔG° < 0 ↔ K > 1 ↔ Reaktion günstig (thermodynamisch); Kinetik ist separat!",
        },
      ],

      merksätze: [
        "Dynamisches Gleichgewicht: Hin- und Rückreaktion gleich schnell — netto keine Änderung.",
        "MWG: K_c = [Produkte]^n / [Edukte]^m — stöchiometrische Koeffizienten als Exponenten.",
        "Reine Feststoffe und Wasser (Lösungsmittel) nicht in K_c aufnehmen.",
        "Q < K_c → Reaktion in Richtung Produkte; Q > K_c → Richtung Edukte.",
        "K_c >> 1: Gleichgewicht auf Produktseite; K_c << 1: auf Eduktseite.",
        "K_p = K_c·(RT)^Δn — nur bei Δn ≠ 0 verschieden.",
        "ΔG° = −RT·ln(K) — Verknüpfung von Thermodynamik und Gleichgewicht.",
        "K ist temperaturabhängig, aber nicht konzentrationsabhängig.",
        "Exotherm + höhere T → kleineres K (Gleichgewicht verschiebt zu Edukten).",
        "Hämoglobin-O₂-Bindung folgt MWG: pO₂ steuert die Lage des Gleichgewichts.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Formulieren Sie das Massenwirkungsgesetz für die Reaktion N₂(g) + 3H₂(g) ⇌ 2NH₃(g) und erläutern Sie, was ein K_c von 6×10² bei 500 °C über die Lage des Gleichgewichts aussagt. Wie ändert sich K_c, wenn die Reaktion endotherm wäre?",
        answer: `Das Massenwirkungsgesetz für N₂ + 3H₂ ⇌ 2NH₃ lautet:

K_c = [NH₃]² / ([N₂]·[H₂]³)

Ein K_c von 6×10² (= 600) ist deutlich größer als 1. Das bedeutet, im Gleichgewicht liegen die Konzentrationen auf der Produktseite (NH₃) deutlich höher als auf der Eduktseite. Das Gleichgewicht ist stark zu den Produkten hin verschoben — die Ammoniaksynthese ist thermodynamisch günstig bei 500 °C.

Allerdings sagt K_c nichts über die Reaktionsgeschwindigkeit aus: Der Kompromiss bei 500 °C ist nötig, weil bei niedrigerer Temperatur die Reaktion zwar ein noch günstigeres Gleichgewicht hat, aber kinetisch zu langsam abläuft. Der Eisenkatalysator senkt die Aktivierungsenergie und ermöglicht vernünftige Reaktionsgeschwindigkeiten.

Wäre die Reaktion endotherm (ΔH > 0), würde K_c mit steigender Temperatur zunehmen (Van't-Hoff-Gleichung). Das Gleichgewicht läge bei höherer Temperatur weiter auf Produktseite — im Gegensatz zur exothermen Realreaktion, bei der K_c mit steigender Temperatur sinkt.`,
      },

      klinischerBezug:
        "Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin (Hb + O₂ ⇌ HbO₂): In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂ — Sauerstoff wird geladen. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Im Labor nutzt man Gleichgewichtskonstanten bei Enzym-Substrat-Reaktionen (Michaelis-Konstante K_M), um Enzymaffinitäten zu vergleichen und Pharmaka zu optimieren.",

      selfTest: [
        {
          question:
            "Welcher Ausdruck ist das korrekte Massenwirkungsgesetz für 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?",
          options: [
            "K_c = [SO₂]²·[O₂] / [SO₃]²",
            "K_c = [SO₃]² / ([SO₂]²·[O₂])",
            "K_c = [SO₃] / ([SO₂]·[O₂])",
            "K_c = 2[SO₃] / (2[SO₂]·[O₂])",
            "K_c = [SO₂]·[O₂] / [SO₃]",
          ],
          correctIndex: 1,
          explanation:
            "Das MWG lautet K_c = [Produkte]^Koeffizient / [Edukte]^Koeffizient. Für 2SO₂ + O₂ ⇌ 2SO₃: K_c = [SO₃]² / ([SO₂]²·[O₂]). Die stöchiometrischen Koeffizienten (2, 1, 2) werden zu Exponenten. Die anderen Optionen verwechseln Zähler/Nenner oder berücksichtigen die Koeffizienten nicht korrekt. Koeffizienten dürfen nicht als Faktoren (z. B. 2×) in den Ausdruck eingehen — sie werden ausschließlich als Exponenten verwendet.",
          hints: [
            "Koeffizienten werden zu Exponenten im MWG",
            "Produkte im Zähler, Edukte im Nenner",
          ],
          difficulty: 2,
          tags: ["massenwirkungsgesetz", "gleichgewichtskonstante", "stöchiometrie"],
        },
        {
          question: "Für eine Reaktion gilt K_c = 0,001. Was bedeutet das für das Gleichgewicht?",
          options: [
            "Die Reaktion ist vollständig — nahezu alle Edukte werden zu Produkten.",
            "Das Gleichgewicht liegt stark auf der Seite der Edukte.",
            "Edukte und Produkte liegen in gleichen Konzentrationen vor.",
            "Die Reaktion ist sehr schnell.",
            "K_c < 1 bedeutet, die Reaktion ist verboten.",
          ],
          correctIndex: 1,
          explanation:
            "K_c = 0,001 = 10⁻³ ist deutlich kleiner als 1. Das bedeutet, im Gleichgewicht überwiegen die Edukte stark gegenüber den Produkten. K_c sagt nichts über die Reaktionsgeschwindigkeit aus. 'Verboten' ist chemisch kein Konzept im Gleichgewichtskontext. Ein vollständiger Ablauf (nahezu nur Produkte) entspräche K_c >> 1. K_c ≈ 1 würde ähnliche Konzentrationen von Edukten und Produkten bedeuten.",
          hints: [
            "K_c < 1: Gleichgewicht auf Eduktseite",
            "K_c > 1: Gleichgewicht auf Produktseite",
          ],
          difficulty: 1,
          tags: ["gleichgewichtskonstante", "lage", "edukte"],
        },
        {
          question: "Was ist der Reaktionsquotient Q und wofür wird er verwendet?",
          options: [
            "Q ist identisch mit K_c und gilt nur im Gleichgewicht.",
            "Q wird mit aktuellen Konzentrationen berechnet und mit K_c verglichen, um die Reaktionsrichtung vorherzusagen.",
            "Q ist das Produkt aller Reaktantenkonzentrationen ohne Exponenten.",
            "Q gibt die Reaktionsgeschwindigkeit an.",
            "Q ist nur für Gasreaktionen definiert.",
          ],
          correctIndex: 1,
          explanation:
            "Der Reaktionsquotient Q hat dieselbe Form wie K_c, wird aber mit den aktuellen (nicht Gleichgewichts-)Konzentrationen berechnet. Vergleich: Q < K_c → Reaktion läuft vorwärts; Q > K_c → Reaktion läuft rückwärts; Q = K_c → Gleichgewicht. Q ist ein mächtiges Werkzeug, um ohne Experiment die spontane Reaktionsrichtung vorherzusagen. Er gilt für alle Reaktionstypen.",
          hints: [
            "Q: aktuelle Konzentrationen; K_c: Gleichgewichtskonzentrationen",
            "Q < K → vorwärts; Q > K → rückwärts",
          ],
          difficulty: 2,
          tags: ["reaktionsquotient", "q-vs-k", "reaktionsrichtung"],
        },
        {
          question: "Welche Aussage zum Zusammenhang ΔG° = −RT·ln(K) ist korrekt?",
          options: [
            "Wenn K = 1, dann ist ΔG° = RT.",
            "Wenn K > 1, dann ist ΔG° negativ — die Reaktion ist thermodynamisch begünstigt.",
            "ΔG° gibt die Reaktionsgeschwindigkeit an.",
            "Wenn ΔG° > 0, dann ist K > 1.",
            "Die Formel gilt nur für endotherme Reaktionen.",
          ],
          correctIndex: 1,
          explanation:
            "Aus ΔG° = −RT·ln(K) folgt: Wenn K > 1, dann ist ln(K) > 0, also ΔG° = −RT·ln(K) < 0 — die Reaktion ist thermodynamisch begünstigt. Wenn K = 1, dann ln(1) = 0, also ΔG° = 0. Wenn ΔG° > 0, dann ln(K) < 0, also K < 1. ΔG° beschreibt Thermodynamik, nicht Kinetik. Die Formel gilt universell.",
          hints: [
            "ln(K) > 0 wenn K > 1 → ΔG° = −RT·ln(K) < 0",
            "ΔG° und Kinetik sind unabhängige Konzepte",
          ],
          difficulty: 3,
          tags: ["delta-g", "gleichgewichtskonstante", "thermodynamik"],
        },
        {
          question: "Warum erscheint Wasser (H₂O) im MWG-Ausdruck bei wässrigen Reaktionen nicht?",
          options: [
            "Weil Wasser kein Reaktant ist.",
            "Weil die Aktivität des reinen Lösungsmittels näherungsweise 1 ist und keinen Beitrag leistet.",
            "Weil H₂O immer vollständig reagiert.",
            "Weil das MWG nur für Gase gilt.",
            "Weil Wasser keine Konzentration hat.",
          ],
          correctIndex: 1,
          explanation:
            "In sehr verdünnten wässrigen Lösungen ist die Konzentration von Wasser näherungsweise konstant (ca. 55,5 mol/L) und ändert sich durch die Reaktion kaum. Formal entspricht das einer Aktivität von 1 — daher taucht H₂O im MWG-Ausdruck nicht auf. Dasselbe gilt für reine Feststoffe. Das MWG gilt für alle Aggregatzustände, nicht nur Gase.",
          hints: [
            "Aktivität des reinen Lösungsmittels ≈ 1",
            "Feststoffe und H₂O erscheinen nicht explizit im MWG-Ausdruck",
          ],
          difficulty: 2,
          tags: ["mwg", "lösungsmittel", "aktivität"],
        },
        {
          question:
            "Eine exotherme Reaktion hat bei 25 °C ein K_c = 10⁵. Was passiert mit K_c bei Erhöhung auf 100 °C?",
          options: [
            "K_c steigt weiter an, weil höhere Temperatur immer K_c erhöht.",
            "K_c bleibt konstant, da K nur von der Konzentration abhängt.",
            "K_c nimmt ab, weil bei exothermen Reaktionen höhere Temperatur das Gleichgewicht zu den Edukten verschiebt.",
            "K_c wird genau 1.",
            "K_c wird negativ.",
          ],
          correctIndex: 2,
          explanation:
            "Für exotherme Reaktionen (ΔH < 0) verschiebt eine Temperaturerhöhung das Gleichgewicht in Richtung Edukte (Le Chatelier). Mathematisch sinkt K mit steigendem T, wenn ΔH° < 0. K_c kann nie negativ werden (Quotient positiver Konzentrationen). K ist nicht konzentrationsunabhängig — es ist temperaturabhängig.",
          hints: [
            "Exotherm + Temperaturerhöhung → Gleichgewicht zu Edukten → K_c sinkt",
            "Le Chatelier: System 'flieht' vor der Wärmezufuhr",
          ],
          difficulty: 3,
          tags: ["exotherm", "temperatur", "k-änderung"],
        },
        {
          question: "Welche Reaktion entspricht K_c = [NH₃]² / ([N₂]·[H₂]³)?",
          options: [
            "NH₃ ⇌ N₂ + H₂",
            "N₂ + H₂ ⇌ NH₃",
            "N₂ + 3H₂ ⇌ 2NH₃",
            "2N₂ + 3H₂ ⇌ 2NH₃",
            "2NH₃ ⇌ N₂ + 3H₂",
          ],
          correctIndex: 2,
          explanation:
            "K_c = [NH₃]² / ([N₂]·[H₂]³) entspricht N₂ + 3H₂ ⇌ 2NH₃. NH₃ steht mit Exponent 2 im Zähler (Produkt, Koeffizient 2), N₂ mit Exponent 1 im Nenner (Edukt, Koeffizient 1), H₂ mit Exponent 3 im Nenner (Edukt, Koeffizient 3). Dies ist die Haber-Bosch-Reaktion. 2NH₃ ⇌ N₂ + 3H₂ wäre die umgekehrte Reaktion, deren K_c der Kehrwert wäre.",
          hints: [
            "Produkte im Zähler, Edukte im Nenner — Exponenten = Koeffizienten",
            "NH₃² im Zähler → NH₃ ist Produkt mit Koeffizient 2",
          ],
          difficulty: 1,
          tags: ["mwg", "haber-bosch", "stöchiometrie"],
        },
        {
          question:
            "Was bedeutet 'dynamisches Gleichgewicht' im Unterschied zu einem statischen Zustand?",
          options: [
            "Im dynamischen Gleichgewicht läuft keine Reaktion mehr ab.",
            "Im dynamischen Gleichgewicht laufen Hin- und Rückreaktion gleichzeitig ab; netto ändert sich nichts.",
            "Dynamisch bedeutet, dass sich die Konzentrationen ständig ändern.",
            "Statisches Gleichgewicht bedeutet, dass K_c = 0 ist.",
            "Dynamisches Gleichgewicht gilt nur bei Gasreaktionen.",
          ],
          correctIndex: 1,
          explanation:
            "Ein dynamisches Gleichgewicht bedeutet: Hin- und Rückreaktion laufen gleichzeitig mit gleicher Geschwindigkeit ab. Makroskopisch beobachtet man keine Konzentrationsänderung, aber mikroskopisch ist das System hochaktiv — Moleküle wechseln ständig zwischen Edukt- und Produktzustand. Isotopen-Tracerexperimente bestätigen dies. Chemische Gleichgewichte sind stets dynamisch.",
          hints: [
            "Dynamisch = beide Reaktionen laufen weiter, aber gleich schnell",
            "Netto-Änderung = 0, aber mikroskopisch aktiv",
          ],
          difficulty: 1,
          tags: ["dynamisches-gleichgewicht", "definition", "reversibel"],
        },
      ],
    },

    {
      id: "ch-8-03",
      title: "Le Chatelier-Prinzip — Störung des Gleichgewichts",
      content: `## Einleitung

**Worum geht es?** Das **Le Chatelier-Prinzip** besagt: Wird ein Gleichgewicht **gestört**, verschiebt es sich in die Richtung, die der Störung **entgegenwirkt**. **Konzentration:** Edukt ↑ → mehr Produkte; Produkt ↑ → mehr Edukte; Produktentzug → mehr Produkte. **Druck** (bei Gasen): Druck ↑ → Seite mit **weniger Gasmolen** (Δn); bei Δn = 0 kein Effekt. **Temperatur:** einzige Störung, die **K selbst** ändert — exotherm + T↑ → K sinkt (Eduktseite); endotherm + T↑ → K steigt (Produktseite). **Warum für den MedAT relevant?** Alle drei Störungsarten vorhersagen, Haber-Bosch (Druck, Temperatur, Katalysator, NH₃-Entnahme), Blutpuffer CO₂/HCO₃⁻ bei Acidose/Alkalose, Bohr-Effekt und Inertgas (konstant V = kein Effekt) werden geprüft. **Welche Fragen werden beantwortet?** „Konzentration vs. Temperatur-Effekt auf K?“; „Druckeffekt Haber-Bosch?“; „Warum 400–500 °C beim Haber-Bosch?“; „NH₃-Entnahme?“; „Inertgas bei konstantem Volumen?“; „Hyperventilation → pH?“.

**In diesem Kapitel lernst du:**
- **Le Chatelier:** Störung → Verschiebung entgegen der Störung; **Konzentration/Druck** ändern **Q** (nicht K); **Temperatur** ändert **K**
- **Konzentration:** Edukt ↑ → Produkte; Produkt ↑ → Edukte; Produktentzug → mehr Produkte (industriell genutzt)
- **Druck:** Druck ↑ → Seite mit **weniger Gasmolen** (Δn); N₂ + 3 H₂ ⇌ 2 NH₃: Δn = −2 → Druck ↑ begünstigt NH₃; Δn = 0 → kein Druckeffekt
- **Temperatur:** exotherm + T↑ → K sinkt (Eduktseite); endotherm + T↑ → K steigt (Produktseite)
- **Katalysator** verschiebt Gleichgewicht **nicht**; **Inertgas bei konstantem Volumen:** kein Effekt (Partialdrücke unverändert)
- **Haber-Bosch:** hoher Druck + 400–500 °C (Kompromiss Kinetik/Thermodynamik) + Fe-Katalysator + NH₃-Entnahme; **Blutpuffer:** CO₂ ↑ → pH↓ (Acidose); Hyperventilation → CO₂↓ → pH↑ (Alkalose)

---

## Das Prinzip von Le Chatelier

Das **Prinzip von Le Chatelier** (auch: Prinzip des kleinsten Zwangs, 1884) lautet:

> Wird ein System im chemischen Gleichgewicht durch äußere Einwirkung gestört, so verschiebt es sich in diejenige Richtung, die der Störung entgegenwirkt.

Dieses Prinzip ist eines der wichtigsten Konzepte der physikalischen Chemie — es erlaubt qualitative Vorhersagen über die Verschiebung von Gleichgewichten ohne aufwendige Berechnungen.

![Le Chatelier](/grafik-mwg-lechatelier.svg)


![Gleichgewicht und Störung](/grafik-massenwirkungsgesetz.svg)


## Konzentration als Störgröße

**Erhöhung der Eduktkonzentration:** Das System reagiert durch verstärkte Hinreaktion — mehr Produkte entstehen. Das Gleichgewicht verschiebt sich zur Produktseite.

**Erhöhung der Produktkonzentration:** Das System reagiert durch verstärkte Rückreaktion — mehr Edukte entstehen. Das Gleichgewicht verschiebt sich zur Eduktseite.

**Entnahme von Produkten:** Wenn Produkte kontinuierlich aus dem Reaktionssystem entfernt werden (z. B. durch Ausfällung, Destillation, biologischen Verbrauch), verschiebt sich das Gleichgewicht immer weiter in Richtung Produkte. Diese Strategie ist in der Industrie (z. B. Veresterung unter Wasserentzug) und in der Biochemie (Kopplung von Reaktionen) weit verbreitet.

**Quantitativ:** Eine Konzentrationsänderung ändert Q, aber nicht K_c. Das System reagiert, bis Q wieder gleich K_c ist.

## Druck als Störgröße (Gasreaktionen)

Bei Gleichgewichten mit Gasen beeinflusst der Druck die Lage des Gleichgewichts — aber nur, wenn sich die Gesamtmolzahl der Gase bei der Reaktion ändert (Δn ≠ 0).

**Druckerhöhung:** Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmolekülen. Beispiel: N₂ + 3H₂ ⇌ 2NH₃ hat Δn = 2 − (1+3) = −2. Druckerhöhung → Verschiebung zu NH₃.

**Drucksenkung:** Verschiebung zur Seite mit mehr Gasmolekülen.

**Δn = 0:** Druck hat keinen Einfluss auf die Gleichgewichtslage (z. B. H₂ + Cl₂ ⇌ 2HCl).

Zugabe eines Inertgases bei konstantem Volumen ändert die Partialdrücke der Reaktanten nicht — kein Einfluss auf das Gleichgewicht. Bei konstantem Druck und Inertgaszugabe sinken die Partialdrücke der Reaktanten → Verschiebung zur Seite mit mehr Gasmolekülen.

## Temperatur als Störgröße

Temperatur ist besonders, weil sie K_c selbst verändert (nicht nur Q):

**Exotherme Reaktionen (ΔH < 0):** Wärme ist quasi ein Produkt. Temperaturerhöhung → Gleichgewicht verschiebt sich zur Eduktseite → K_c sinkt.

**Endotherme Reaktionen (ΔH > 0):** Wärme ist quasi ein Edukt. Temperaturerhöhung → Gleichgewicht verschiebt sich zur Produktseite → K_c steigt.

Im Gegensatz zu Konzentrations- und Druckänderungen ändert die Temperatur tatsächlich den Wert von K_c.

## Haber-Bosch-Prozess als industrielles Beispiel

Die Ammoniaksynthese N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ/mol, exotherm) illustriert alle Aspekte von Le Chatelier:

- **Hoher Druck** (150–300 bar): Verschiebt Gleichgewicht zu NH₃ (Δn = −2)
- **Moderates T** (400–500 °C): Kompromiss aus Kinetik und Thermodynamik
- **Eisenkatalysator:** Senkt Aktivierungsenergie, ohne K_c zu ändern
- **Kontinuierliche NH₃-Entnahme:** Verschiebt Gleichgewicht ständig in Richtung Produkte

## Puffergleichgewichte und Le Chatelier

Blutpuffer (H₂CO₃/HCO₃⁻) funktionieren nach Le Chatelier:

CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

- Bei Säurezufuhr (H⁺ steigt): Gleichgewicht verschiebt sich links → CO₂ entsteht → Abatmung über Lunge
- Bei Basenzufuhr (H⁺ sinkt): Gleichgewicht verschiebt sich rechts → HCO₃⁻ puffert → pH stabilisiert

## Biologische Beispiele für Le Chatelier

**Sauerstofftransport:** Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂): Hinreaktion dominiert. Im Gewebe (niedriger pO₂): Rückreaktion dominiert — O₂ wird abgegeben. Le Chatelier reguliert die O₂-Abgabe automatisch dem Bedarf entsprechend.

**Calciumstoffwechsel:** Ca²⁺ + HPO₄²⁻ ⇌ CaHPO₄(s). Beim Knochenbau wird CaHPO₄ ausgefällt — Produktentzug verschiebt das Gleichgewicht in Richtung Mineralisation. Parathormon und Calcitonin steuern die Gleichgewichtslage über [Ca²⁺] im Blut.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Le Chatelier:** Störung → Verschiebung entgegen; **Konzentration/Druck** ändern **Q** (nicht K); **nur Temperatur** ändert **K**
- **Konzentration:** Edukt ↑ → Produkte; Produkt ↑ → Edukte; Produktentzug → mehr Produkte
- **Druck:** Druck ↑ → Seite mit **weniger Gasmolen** (Δn); **Δn = 0** → kein Druckeffekt (z. B. H₂ + Cl₂ ⇌ 2 HCl)
- **Temperatur:** exotherm + T↑ → K sinkt (Eduktseite); endotherm + T↑ → K steigt (Produktseite)
- **Katalysator** verschiebt Gleichgewicht **nicht**; **Inertgas bei konstantem Volumen:** kein Effekt (Partialdrücke gleich)
- **Haber-Bosch:** N₂ + 3 H₂ ⇌ 2 NH₃; Δn = −2, ΔH = −92 kJ/mol; 150–300 bar, 400–500 °C (Kompromiss), Fe-Katalysator, NH₃-Entnahme
- **Blutpuffer:** CO₂ ↑ → pH↓ (respiratorische Acidose); Hyperventilation → CO₂↓ → pH↑ (respiratorische Alkalose)

**Ergänzend vertiefend:** Kp bei Gasen. Typische Fallen: Katalysator verschiebt Gleichgewicht nicht; Inertgas bei konstantem V: kein Effekt auf Gleichgewicht; Δn = 0: kein Druckeffekt.

**Häufige Prüfungsfragen:**
- „Temperatur vs. Konzentration auf K?" → Nur Temperatur ändert K; Konzentration/Druck ändern nur Q
- „Druckeffekt Haber-Bosch?" → Δn = −2 → hoher Druck begünstigt NH₃
- „Warum 400–500 °C?" → Kompromiss: niedrige T = großes K aber langsam; 400–500 °C + Katalysator für Kinetik

**Typische Prüfungsfallen:**
- Katalysator verschiebt Gleichgewicht nicht; Inertgas bei konstantem V: kein Effekt; Δn = 0: kein Druckeffekt

**Wichtige Begriffe & Definitionen:**
- **Le Chatelier-Prinzip:** Bei Störung verschiebt sich das Gleichgewicht so, dass die Störung verkleinert wird.
- **Δn (Gase):** Differenz der Molzahl Gas (Produkte − Edukte); nur bei Δn ≠ 0 hat Druck einen Effekt.
- **Inertgas (konstant V):** Partialdrücke der Reaktanten unverändert → kein Einfluss auf Gleichgewicht.

**Prüfungsrelevante Zahlen/Fakten:**
- Haber-Bosch: Δn = −2, 150–300 bar, 400–500 °C, Fe₃O₄; Hyperventilation → Alkalose

---
## Zusammenfassung (ultrakompakt)

- **Le Chatelier**: Störung → System verschiebt sich entgegen der Störung; gilt für Konzentration, Druck, Temperatur
- **Konzentrationsänderung**: Edukt ↑ → Produkte; Produkt ↑ → Edukte; ändert Q, nicht Kc
- **Druckänderung**: Druck ↑ → Seite mit weniger Gasmolen (kleinerem Δn); bei Δn = 0 kein Einfluss
- **Temperaturänderung**: ändert Kc selbst! Exotherm: T ↑ → Kc ↓; Endotherm: T ↑ → Kc ↑
- **Haber-Bosch** (N₂ + 3H₂ ⇌ 2NH₃, exotherm, Δn = −2): hoher Druck + moderates T (400–500 °C) + Fe-Katalysator + NH₃-Entnahme
- **Blutpuffer**: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; Acidose → mehr CO₂ abatmen; Alkalose → HCO₃⁻-Reabsorption
- **Sauerstofftransport**: Hb + O₂ ⇌ HbO₂; pO₂ steuert Gleichgewichtslage automatisch
- **Katalysatoren**: verschieben das Gleichgewicht NICHT — nur die Einstellungsgeschwindigkeit`,

      lernziele: [
        "Das Prinzip von Le Chatelier präzise formulieren und auf Konzentrationsänderungen anwenden.",
        "Den Einfluss von Druckänderungen auf Gasgleichgewichte (Δn) vorhersagen.",
        "Erläutern, warum Temperaturänderungen K_c selbst verändern, während Konzentrations- und Druckänderungen nur Q verändern.",
        "Den Haber-Bosch-Prozess als Beispiel für optimierte Gleichgewichtssteuerung analysieren.",
        "Puffergleichgewichte im Blut (Carbonat-Puffersystem) mit Le Chatelier erklären.",
      ],

      sections: [
        {
          heading: "Le Chatelier: Konzentration und Druck",
          text: "Konzentrationserhöhung eines Edukts → Gleichgewicht verschiebt sich zu Produkten (Q sinkt unter K → Hinreaktion). Druckerhöhung bei Gasreaktionen → Verschiebung zur Seite mit weniger Gasmolekülen (kleineres Δn). Beide Änderungen verändern nur Q, nicht K_c selbst.",
          merksatz:
            "Le Chatelier: Das System 'flieht' immer vor der Störung — Zufuhr von Edukten → mehr Produkte.",
        },
        {
          heading: "Le Chatelier: Temperatur",
          text: "Temperaturänderung ist besonders: Sie ändert K_c selbst (nicht nur Q). Exotherme Reaktion + höhere T → K_c sinkt (Gleichgewicht zu Edukten). Endotherme Reaktion + höhere T → K_c steigt (Gleichgewicht zu Produkten). Wärme wird wie ein Reaktant/Produkt behandelt.",
          merksatz: "Temperaturerhöhung: Exotherm → K_c sinkt; Endotherm → K_c steigt.",
        },
        {
          heading: "Industrielle Anwendung: Haber-Bosch",
          text: "N₂ + 3H₂ ⇌ 2NH₃ (exotherm, Δn = −2): Hoher Druck begünstigt NH₃-Bildung. Niedrige Temperatur wäre thermodynamisch ideal (K_c groß), aber kinetisch zu langsam. Kompromiss: 400–500 °C + Eisenkatalysator + NH₃-Entnahme.",
          merksatz:
            "Haber-Bosch: Hoher Druck + moderates T + Katalysator + Produktentzug = Optimum.",
        },
      ],

      merksätze: [
        "Le Chatelier: Störung → System reagiert entgegen der Störung.",
        "Mehr Edukte → Gleichgewicht zu Produkten; mehr Produkte → zu Edukten.",
        "Produktentzug verschiebt Gleichgewicht ständig in Richtung Produkte.",
        "Druckerhöhung → Seite mit weniger Gasmolekülen (kleinerem Δn).",
        "Δn = 0: Druck hat keinen Einfluss auf Gleichgewichtslage.",
        "Inertgas bei konstantem Volumen: Kein Einfluss auf Gleichgewicht.",
        "Temperaturerhöhung → exotherm: K_c sinkt; endotherm: K_c steigt.",
        "Konzentration/Druck ändern Q; Temperatur ändert K_c selbst.",
        "Haber-Bosch nutzt hohen Druck + Katalysator + NH₃-Entnahme.",
        "Blutpuffer (CO₂/HCO₃⁻) funktioniert nach Le Chatelier: pH-Stabilisierung.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie anhand der Reaktion N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ/mol), wie sich Druckerhöhung, Temperaturerhöhung und Zugabe eines Eisenkatalysators jeweils auf die Gleichgewichtslage und K_c auswirken.",
        answer: `Druckerhöhung: Die Reaktion hat Δn = 2 − (1+3) = −2. Nach Le Chatelier verschiebt sich das Gleichgewicht bei Druckerhöhung zur Seite mit weniger Gasmolekülen — also zur Produktseite (NH₃). Q sinkt kurz unter K_c, das System reagiert durch mehr NH₃-Bildung bis Q = K_c. K_c selbst ändert sich nicht durch Druckänderungen.

Temperaturerhöhung: Da die Reaktion exotherm ist (ΔH < 0), ist Wärme quasi ein Produkt. Temperaturerhöhung → Gleichgewicht verschiebt sich zu den Edukten (Le Chatelier). K_c sinkt mit steigender Temperatur. Daher wird beim Haber-Bosch-Verfahren trotz exothermer Reaktion eine moderate Temperatur von 400–500 °C gewählt — ein Kompromiss zwischen Thermodynamik und Kinetik.

Eisenkatalysator: Der Katalysator beeinflusst weder die Gleichgewichtslage noch K_c. Er senkt lediglich die Aktivierungsenergie der Hinreaktion (und proportional auch der Rückreaktion, so dass K_c unverändert bleibt). Das Gleichgewicht wird schneller erreicht — in der Industrie erreicht man damit wirtschaftliche Ausbeuten in akzeptabler Zeit.`,
      },

      klinischerBezug:
        "Das Blut-Puffersystem CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ folgt direkt dem Prinzip von Le Chatelier: Bei metabolischer Azidose steigt [H⁺], das Gleichgewicht verschiebt sich links (CO₂ entsteht), die Atemfrequenz steigt (respiratorische Kompensation). Respiratorische Alkalose durch Hyperventilation (CO₂-Abatmung) verschiebt das Gleichgewicht rechts, [H⁺] sinkt, pH steigt. Intensivmediziner steuern Beatmungsparameter (pCO₂) gezielt, um den pH-Wert des Blutes im physiologischen Bereich (7,35–7,45) zu halten.",

      selfTest: [
        {
          question:
            "Bei der Reaktion 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) wird der Druck erhöht. Was passiert?",
          options: [
            "Das Gleichgewicht verschiebt sich zu SO₂ und O₂ (Edukte), weil mehr Mole entstehen.",
            "Das Gleichgewicht verschiebt sich zu SO₃ (Produkte), weil die Produktseite weniger Gasmoleküle hat.",
            "Der Druck hat keinen Einfluss, weil Δn = 0 ist.",
            "K_c steigt bei höherem Druck.",
            "Nur die Reaktionsgeschwindigkeit ändert sich, nicht die Gleichgewichtslage.",
          ],
          correctIndex: 1,
          explanation:
            "Für 2SO₂ + O₂ ⇌ 2SO₃ gilt: Auf der Eduktseite sind 3 Gasmoleküle (2+1), auf der Produktseite 2 (nur SO₃). Δn = 2 − 3 = −1. Nach Le Chatelier verschiebt sich das Gleichgewicht bei Druckerhöhung zur Seite mit weniger Gasmolekülen — also zur SO₃-Seite. K_c ändert sich durch Druck nicht. Dies ist die Grundlage des industriellen Contact-Prozesses zur Schwefelsäureherstellung.",
          hints: [
            "Δn = Produkt-Gasmole minus Edukt-Gasmole",
            "Druckerhöhung → Seite mit kleinerem Δn",
          ],
          difficulty: 2,
          tags: ["le-chatelier", "druck", "delta-n"],
        },
        {
          question: "Was ist das Prinzip von Le Chatelier in seiner präzisen Formulierung?",
          options: [
            "Eine Reaktion läuft immer in Richtung der Produkte, wenn Wärme zugeführt wird.",
            "Wird ein Gleichgewichtssystem gestört, verschiebt es sich so, dass die Störung verkleinert wird.",
            "Katalysatoren verschieben das Gleichgewicht zugunsten der Produkte.",
            "Bei konstanter Temperatur ist K_c unabhängig von der Konzentration.",
            "Das Gleichgewicht liegt immer auf der Seite mit den energieärmeren Stoffen.",
          ],
          correctIndex: 1,
          explanation:
            "Das Prinzip von Le Chatelier lautet: Wird ein System im Gleichgewicht gestört, reagiert es durch Verschiebung in diejenige Richtung, die der Störung entgegenwirkt. Dies gilt für Konzentrationsänderungen, Druckänderungen (bei Δn ≠ 0) und Temperaturänderungen. Katalysatoren verschieben das Gleichgewicht nicht. Das Gleichgewicht liegt nicht zwingend auf der Seite der energieärmeren Stoffe.",
          hints: [
            "Le Chatelier: 'Gegenreaktion auf Störung'",
            "Gilt für Konzentration, Druck und Temperatur",
          ],
          difficulty: 1,
          tags: ["le-chatelier", "definition", "störung"],
        },
        {
          question:
            "Für eine endotherme Reaktion A ⇌ B (ΔH = +50 kJ/mol) wird die Temperatur erhöht. Was passiert mit K_c und der Gleichgewichtslage?",
          options: [
            "K_c sinkt, Gleichgewicht verschiebt sich zu A.",
            "K_c bleibt konstant, nur die Reaktionsgeschwindigkeit steigt.",
            "K_c steigt, Gleichgewicht verschiebt sich zu B.",
            "K_c sinkt, Gleichgewicht verschiebt sich zu B.",
            "Temperaturänderungen beeinflussen K_c bei endothermen Reaktionen nicht.",
          ],
          correctIndex: 2,
          explanation:
            "Bei endothermen Reaktionen (ΔH > 0) ist Wärme quasi ein Edukt: A + Wärme ⇌ B. Temperaturerhöhung = mehr Wärme-Edukt → Gleichgewicht verschiebt sich zu B (Produktseite). K_c steigt mit der Temperatur. K_c ändert sich bei Temperaturänderungen immer — im Gegensatz zu Konzentrations- und Druckänderungen.",
          hints: [
            "Endotherm: Wärme ist 'Edukt' → Zufuhr von Wärme → mehr Produkte",
            "Van't-Hoff: ΔH > 0 + höhere T → K_c steigt",
          ],
          difficulty: 2,
          tags: ["le-chatelier", "endotherm", "temperatur"],
        },
        {
          question:
            "Im Haber-Bosch-Prozess wird NH₃ nach der Synthese kontinuierlich verflüssigt und abgezogen. Welchen Effekt hat das?",
          options: [
            "Das Gleichgewicht verschiebt sich zu N₂ und H₂ (Edukte).",
            "K_c vergrößert sich, weil NH₃ entfernt wird.",
            "Das Gleichgewicht verschiebt sich kontinuierlich zu NH₃ — höhere Ausbeute.",
            "Es hat keinen Einfluss, weil K_c konstant ist.",
            "Die Reaktion stoppt, weil kein NH₃ mehr vorhanden ist.",
          ],
          correctIndex: 2,
          explanation:
            "Durch kontinuierliche Entnahme von NH₃ sinkt [NH₃] → Q < K_c → Hinreaktion überwiegt → mehr NH₃ wird produziert → Q nähert sich wieder K_c. K_c selbst ändert sich nicht — es ist die Konzentrationsänderung, die Q unter K_c drückt. Diese Strategie ist ein klassisches Le-Chatelier-Prinzip in der industriellen Chemie.",
          hints: [
            "Produktentzug → Q < K_c → Hinreaktion bis Q = K_c",
            "K_c bleibt konstant — nur Q ändert sich durch Entnahme",
          ],
          difficulty: 2,
          tags: ["haber-bosch", "produktentzug", "le-chatelier"],
        },
        {
          question:
            "Welchen Einfluss hat die Zugabe eines Inertgases (z. B. Argon) bei konstantem Volumen auf ein Gasgleichgewicht?",
          options: [
            "Das Gleichgewicht verschiebt sich zur Seite mit mehr Gasmolekülen.",
            "Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmolekülen.",
            "Kein Einfluss, da Partialdrücke der Reaktanten unverändert bleiben.",
            "K_c steigt, weil der Gesamtdruck steigt.",
            "Die Reaktionsgeschwindigkeit halbiert sich.",
          ],
          correctIndex: 2,
          explanation:
            "Bei konstantem Volumen erhöht die Zugabe eines Inertgases den Gesamtdruck, aber die Partialdrücke der Reaktanten bleiben unverändert (p_i = n_i·RT/V; V, T, n_i konstant). Da das MWG nur Partialdrücke der Reaktanten enthält, ändert sich Q nicht — kein Einfluss auf das Gleichgewicht. Anders bei konstantem Druck: Dort sinken die Partialdrücke der Reaktanten.",
          hints: [
            "Inertgas bei konst. V: Partialdrücke der Reaktanten unverändert",
            "Unterschied: konst. Volumen vs. konst. Druck bei Inertgaszugabe",
          ],
          difficulty: 3,
          tags: ["inertgas", "partialdruck", "gleichgewicht"],
        },
        {
          question:
            "Was passiert bei Hyperventilation mit dem Blut-pH (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻)?",
          options: [
            "[CO₂] steigt → pH sinkt (Azidose).",
            "[CO₂] sinkt → Gleichgewicht verschiebt sich nach links → [H⁺] sinkt → pH steigt (Alkalose).",
            "[HCO₃⁻] steigt → pH sinkt.",
            "Keine Auswirkung, da CO₂ kein Reaktant ist.",
            "[H⁺] steigt → pH sinkt (Azidose).",
          ],
          correctIndex: 1,
          explanation:
            "Bei Hyperventilation wird mehr CO₂ abgeatmet → pCO₂ sinkt → [H₂CO₃] sinkt → Gleichgewicht verschiebt sich links → [H⁺] sinkt → pH steigt → respiratorische Alkalose. Henderson-Hasselbalch: ↓[CO₂] im Nenner → größeres [HCO₃⁻]/[CO₂] → höherer pH. Klinisch: Schwindel, Kribbeln. Therapie: Rückatmung in Tüte.",
          hints: [
            "CO₂-Abatmung → [CO₂] sinkt → Gleichgewicht nach links",
            "Weniger H⁺ → pH steigt → Alkalose",
          ],
          difficulty: 2,
          tags: ["hyperventilation", "alkalose", "le-chatelier"],
        },
        {
          question:
            "Warum wird beim Haber-Bosch-Prozess trotz exothermer Reaktion eine Temperatur von 400–500 °C gewählt?",
          options: [
            "Weil K_c bei hoher Temperatur größer ist und mehr NH₃ entsteht.",
            "Weil bei 150 °C der Druck zu hoch wäre.",
            "Weil bei niedrigen Temperaturen die Reaktion kinetisch zu langsam ist — Kompromiss zwischen K_c und Reaktionsgeschwindigkeit.",
            "Weil der Eisenkatalysator nur bei 400 °C aktiv ist.",
            "Weil NH₃ bei 150 °C nicht flüssig wird.",
          ],
          correctIndex: 2,
          explanation:
            "Bei der exothermen NH₃-Synthese sinkt K_c mit steigender Temperatur — thermodynamisch wäre tiefe Temperatur ideal für hohe NH₃-Ausbeute. Aber bei 150 °C ist die Reaktionsgeschwindigkeit extrem niedrig. Der industrielle Kompromiss bei 400–500 °C bietet ausreichend hohe Reaktionsgeschwindigkeit (Kinetik) + noch akzeptabler K_c-Wert (Thermodynamik). Der Eisenkatalysator senkt E_A und erlaubt vernünftige Geschwindigkeiten bei dieser Temperatur.",
          hints: [
            "Niedriges T: K_c groß (thermodynamisch gut), aber v klein (kinetisch schlecht)",
            "Kompromiss-Temperatur = Optimum aus Thermodynamik + Kinetik",
          ],
          difficulty: 3,
          tags: ["haber-bosch", "kinetik-thermodynamik", "kompromiss"],
        },
      ],
    },

    {
      id: "ch-8-04",
      title: "Puffersysteme und Säure-Base-Gleichgewichte",
      content: `## Einleitung

**Worum geht es?** **Puffer** sind Gemische aus schwacher Säure (HA) und konjugierter Base (A⁻); sie puffern Säure- und Basenzugaben und halten den pH stabil. **Henderson-Hasselbalch** pH = pKa + log([A⁻]/[HA]): Bei [A⁻] = [HA] gilt pH = pKa (Pufferoptimum); wirksamer Bereich pKa ± 1. **Carbonat-Puffersystem** des Blutes: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; Lunge reguliert pCO₂ (schnell), Niere [HCO₃⁻] (langsam). **Warum für den MedAT relevant?** Henderson-Hasselbalch anwenden, pH aus Verhältnis berechnen, respiratorische vs. metabolische Azidose/Alkalose, Bohr-Effekt (pH↓ → mehr O₂-Abgabe), Carboanhydrase (Zn²⁺, Acetazolamid) und BGA-Normalwerte werden geprüft. **Welche Fragen werden beantwortet?** „pH bei [A⁻]=[HA]?“; „[HCO₃⁻]/[CO₂] = 20:1 → pH?“; „Respiratorisch vs. metabolisch?“; „Hyperventilation → pH?“; „Bohr-Effekt?“; „Carboanhydrase Cofaktor?“; „Acetazolamid?“.

**In diesem Kapitel lernst du:**
- **Henderson-Hasselbalch:** pH = pKa + log([A⁻]/[HA]); Pufferoptimum bei [A⁻] = [HA] → **pH = pKa**; Bereich pKa ± 1
- **Carbonat-Puffer:** CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; **pH = 6,1 + log([HCO₃⁻]/[CO₂])**; Normal [HCO₃⁻]/[CO₂] ≈ 20:1 → pH 7,4
- **Lunge** reguliert pCO₂ (schnell, Minuten); **Niere** reguliert [HCO₃⁻] (langsam, Stunden–Tage)
- **Störungen:** Respiratorische Azidose (↑pCO₂ → pH↓); Alkalose (↓pCO₂ → pH↑); Metabolisch über HCO₃⁻
- **Bohr-Effekt:** HbO₂ + H⁺ ⇌ HHb⁺ + O₂; pH↓/pCO₂↑ → O₂-Affinität ↓ → mehr O₂-Abgabe ans Gewebe
- **Carboanhydrase:** CO₂ + H₂O ⇌ H₂CO₃ (~10⁶× beschleunigt); **Zn²⁺**-Enzym; **Acetazolamid** hemmt (Diuretikum, Glaukom)

---

## Säure-Base-Gleichgewichte: Grundlagen

In wässriger Lösung dissoziieren Säuren (HA) nach:

**HA + H₂O ⇌ H₃O⁺ + A⁻**

Die Gleichgewichtskonstante dieser Reaktion ist die **Säurekonstante K_a**:

**K_a = [H₃O⁺] · [A⁻] / [HA]**

Starke Säuren (z. B. HCl, H₂SO₄, HNO₃) haben K_a >> 1 — sie dissoziieren praktisch vollständig. Schwache Säuren (z. B. CH₃COOH, H₂CO₃, NH₄⁺) haben K_a << 1 — sie dissoziieren nur partiell. Der **pK_a-Wert** = −log(K_a) ist die gebräuchlichere Größe: Kleinere pK_a = stärkere Säure.

Für konjugierte Säure-Base-Paare gilt:

**pK_a + pK_b = 14 (bei 25 °C)**

![Puffer](/grafik-puffer.svg)


![Pufferbereich und Henderson-Hasselbalch](/grafik-puffer-henderson.svg)


## Der pH-Wert und das Ionenprodukt des Wassers

Wasser dissoziiert autoprotolytisch:

**H₂O + H₂O ⇌ H₃O⁺ + OH⁻**

K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ (bei 25 °C)

pH = −log[H₃O⁺]; bei 25 °C gilt pH + pOH = 14.

- Sauer: pH < 7
- Neutral: pH = 7
- Basisch: pH > 7

## Puffersysteme: Grundprinzip

Ein **Puffer** ist ein System, das pH-Änderungen bei Säure- oder Basenzugabe stark abdämpft. Er besteht aus einer schwachen Säure HA und ihrer konjugierten Base A⁻ in vergleichbaren Konzentrationen.

**Wirkungsweise:**
- Bei H⁺-Zugabe: A⁻ + H⁺ → HA (Base fängt Protonen auf)
- Bei OH⁻-Zugabe: HA + OH⁻ → A⁻ + H₂O (Säure gibt Protonen ab)

In beiden Fällen wird der pH-Anstieg bzw. -Abfall stark gedämpft.

## Henderson-Hasselbalch-Gleichung

Die zentrale Formel für Puffersysteme:

**pH = pK_a + log([A⁻] / [HA])**

- Bei [A⁻] = [HA]: pH = pK_a (maximale Pufferkapazität)
- Effektiver Pufferbereich: pK_a ± 1

**Beispiel Acetat-Puffer:** pK_a(Essigsäure) = 4,76 → puffert optimal bei pH ≈ 4,76.

**Beispiel Phosphat-Puffer:** H₂PO₄⁻/HPO₄²⁻, pK_a = 7,2 → wichtig für intrazelluläre Pufferung bei pH ≈ 7.

## Das Carbonat-Puffersystem des Blutes

Das wichtigste Puffersystem des menschlichen Blutes:

**CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**

Henderson-Hasselbalch für dieses System (pK_a(H₂CO₃) ≈ 6,1):

**pH = 6,1 + log([HCO₃⁻] / [CO₂(aq)])**

Im physiologischen Blut:
- [HCO₃⁻] ≈ 24 mmol/L
- [CO₂(aq)] ≈ 1,2 mmol/L (entspricht pCO₂ = 40 mmHg × 0,03)
- Verhältnis ≈ 20:1
- pH = 6,1 + log(20) = 6,1 + 1,3 = 7,4 ✓

Die Lunge reguliert [CO₂] (pCO₂) schnell (Minuten); die Niere reguliert [HCO₃⁻] langsam (Stunden bis Tage). Zusammen halten sie pH = 7,35–7,45.

## Störungen des Säure-Base-Haushalts

**Respiratorische Azidose:** ↑pCO₂ → ↑[H₂CO₃] → ↑[H⁺] → pH↓. Ursachen: Hypoventilation, COPD, Opioide. Renale Kompensation: ↑HCO₃⁻-Retention.

**Respiratorische Alkalose:** ↓pCO₂ (Hyperventilation) → ↓[H⁺] → pH↑. Kompensation: renale HCO₃⁻-Ausscheidung.

**Metabolische Azidose:** ↓[HCO₃⁻] → pH↓. Ursachen: Ketoazidose (Diabetes), Laktatazidose, Niereninsuffizienz. Kompensation: Hyperventilation (Kussmaul-Atmung, ↓pCO₂).

**Metabolische Alkalose:** ↑[HCO₃⁻] → pH↑. Ursachen: Erbrechen (HCl-Verlust), Diuretika. Kompensation: Hypoventilation (↑pCO₂).

## Hämoglobin als Puffer: Bohr-Effekt

Hämoglobin (Hb) ist nach dem Carbonat-System der zweitwichtigste Blutpuffer:

**HbO₂ + H⁺ ⇌ HHb⁺ + O₂**

Abfallendes pH (saures Milieu bei Muskelarbeit, CO₂, Laktat) → Le Chatelier → mehr O₂ wird freigesetzt → Sauerstoffversorgung des aktiven Gewebes steigt. Bei hohem pH (Lunge) verschiebt sich das Gleichgewicht links → mehr O₂ wird gebunden.

Zusätzlich beeinflusst 2,3-DPG (Diphosphoglycerat) die O₂-Affinität: Bei hohem 2,3-DPG (z. B. bei Hypoxie, Anämie) sinkt die O₂-Affinität → mehr O₂-Abgabe ins Gewebe.

## Carboanhydrase

Die **Carboanhydrase (CA)** katalysiert: CO₂ + H₂O ⇌ H₂CO₃

- Beschleunigung: ca. 10⁶-fach (k_cat ≈ 10⁶/s — eines der schnellsten Enzyme)
- Cofaktor: Zn²⁺ im aktiven Zentrum
- Vorkommen: Erythrozyten (CO₂-Transport), Nierentubuli (Säure-Base), Augenkammerwasser (Glaukompathogenese)

Ohne CA würde der CO₂-Transport im Blut und die pH-Regulierung zusammenbrechen. **Acetazolamid** hemmt CA und wird als Diuretikum und zur Glaukomtherapie eingesetzt.

## Klinische Labordiagnostik: Blutgasanalyse (BGA)

Die BGA bestimmt: pH, pCO₂, pO₂, HCO₃⁻, Base Excess (BE), O₂-Sättigung. Aus diesen Werten lassen sich alle Säure-Base-Störungen klassifizieren. Normalwerte arteriell: pH 7,35–7,45; pCO₂ 35–45 mmHg; HCO₃⁻ 22–26 mmol/L; BE ±2 mmol/L.

Der **Base Excess (BE)** gibt an, wie viel starke Säure oder Base nötig wäre, um pH 7,4 bei 37 °C und pCO₂ 40 mmHg wiederherzustellen. BE < −2 = metabolische Azidose; BE > +2 = metabolische Alkalose.

## MedAT-Fokus

**Zur gezielten Prüfungsvorbereitung** im Überblick:

**Zentral prüfungsrelevant:**
- **Henderson-Hasselbalch:** pH = pKa + log([A⁻]/[HA]); **Pufferoptimum** bei [A⁻] = [HA] → **pH = pKa**; Bereich pKa ± 1
- **Carbonat-Puffer:** CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; **pH = 6,1 + log([HCO₃⁻]/[CO₂])**; Normal **20:1** → pH 7,4; **pKa(H₂CO₃) = 6,1** (nicht 7,4!)
- **Lunge** reguliert pCO₂ (schnell); **Niere** [HCO₃⁻] (langsam)
- **Respiratorische Azidose:** ↑pCO₂ → pH↓; **Respiratorische Alkalose:** ↓pCO₂ (Hyperventilation) → pH↑; **Metabolisch** über HCO₃⁻
- **Bohr-Effekt:** pH↓/pCO₂↑ → Hb-O₂-Affinität ↓ → mehr O₂-Abgabe (Le Chatelier)
- **Carboanhydrase:** CO₂ + H₂O ⇌ H₂CO₃; **Zn²⁺**-Cofaktor; **Acetazolamid** hemmt (Diuretikum, Glaukom); ~10⁶× Beschleunigung
- **BGA:** pH 7,35–7,45; pCO₂ 35–45 mmHg; [HCO₃⁻] 22–26 mmol/L; **BE** < −2 = metabolische Azidose, > +2 = Alkalose

**Ergänzend vertiefend:** Indikator, Äquivalenzpunkt. Typische Fallen: pKa(H₂CO₃) = 6,1 (nicht 7,4); Lunge puffert schnell, Niere langsam; Azidose pH < 7,35, Alkalose > 7,45.

**Häufige Prüfungsfragen:**
- „pH mit Henderson-Hasselbalch?" → pH = pKa + log([A⁻]/[HA]); bei [A⁻]=[HA] → pH = pKa
- „[HCO₃⁻]/[CO₂] = 20:1, pKa 6,1?" → pH = 6,1 + log(20) = 7,4
- „Respiratorisch vs. metabolisch?" → Respiratorisch: pCO₂; Metabolisch: HCO₃⁻

**Typische Prüfungsfallen:**
- pKa(H₂CO₃) = 6,1, nicht 7,4; Lunge schnell, Niere langsam; Azidose pH < 7,35, Alkalose > 7,45

**Wichtige Begriffe & Definitionen:**
- **Henderson-Hasselbalch:** pH = pKa + log([Base]/[Säure]); verknüpft pH mit pKa und Konzentrationsverhältnis.
- **Pufferoptimum:** Maximale Pufferkapazität bei [A⁻] = [HA], dann pH = pKa; wirksamer Bereich pKa ± 1.
- **Bohr-Effekt:** Abnahme der O₂-Affinität von Hämoglobin bei pH↓/pCO₂↑ → mehr O₂-Abgabe ans Gewebe (Le Chatelier).
- **Base Excess (BE):** Menge Säure/Base, die nötig wäre, um pH bei pCO₂ 40 mmHg auf 7,4 zu bringen; BE < −2 = metabolische Azidose.

**Prüfungsrelevante Zahlen/Fakten:**
- Blut: pH 7,40, pCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L, 20:1; Carboanhydrase Zn²⁺, Acetazolamid; BE ±2 mmol/L

---
## Zusammenfassung (ultrakompakt)

- **pH = −log[H₃O⁺]**; Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴; pH + pOH = 14 (bei 25 °C)
- **Ka** = Säurekonstante; pKa = −log(Ka); kleinerer pKa = stärkere Säure
- **Henderson-Hasselbalch**: pH = pKa + log([A⁻]/[HA]); Pufferoptimum bei pH = pKa (Verhältnis 1:1)
- **Carbonat-Puffer**: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻; Normal: pH 7,4, pCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L; Verhältnis 20:1
- **Lunge**: reguliert pCO₂ (schnell, Minuten); **Niere**: reguliert HCO₃⁻ (langsam, Stunden–Tage)
- **Störungen**: Respiratorische Azidose: ↑pCO₂ → pH↓; Respiratorische Alkalose: ↓pCO₂ → pH↑; Metabolisch: über HCO₃⁻
- **Bohr-Effekt**: HbO₂ + H⁺ ⇌ HHb⁺ + O₂; niedriger pH → mehr O₂-Abgabe ins Gewebe
- **Carboanhydrase**: CO₂ + H₂O ⇌ H₂CO₃; Zn²⁺-Enzym; Hemmung durch Acetazolamid (Glaukom, Diurese)`,

      lernziele: [
        "Die Henderson-Hasselbalch-Gleichung formulieren und zur pH-Berechnung von Pufferlösungen anwenden.",
        "Das Carbonat-Puffersystem des Blutes beschreiben und physiologische Normalwerte nennen.",
        "Respiratorische und metabolische Azidose/Alkalose anhand von pH, pCO₂ und HCO₃⁻ unterscheiden.",
        "Den Bohr-Effekt als Le-Chatelier-Prinzip in der Hämoglobin-O₂-Bindung erläutern.",
        "Die Rolle der Carboanhydrase im CO₂-Transport und der pH-Regulierung erklären.",
      ],

      sections: [
        {
          heading: "Henderson-Hasselbalch-Gleichung",
          text: "pH = pK_a + log([A⁻]/[HA]): Der pH eines Puffers hängt vom pK_a der Säure und dem Konzentrationsverhältnis Base/Säure ab. Maximale Pufferkapazität bei [A⁻] = [HA] (pH = pK_a). Effektiver Pufferbereich: pK_a ± 1. Blut: pK_a(H₂CO₃) ≈ 6,1, [HCO₃⁻]/[CO₂] ≈ 20:1 → pH = 7,4.",
          merksatz:
            "Henderson-Hasselbalch: pH = pK_a + log(Base/Säure). Pufferoptimum bei pH = pK_a.",
        },
        {
          heading: "Das Carbonat-Puffersystem",
          text: "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: Lunge reguliert pCO₂ (schnell, Minuten), Niere reguliert [HCO₃⁻] (langsam, Stunden bis Tage). Normal: pH 7,40, pCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L. Verhältnis 20:1 bei pH 7,4.",
          merksatz: "Blut-pH: Lunge (CO₂) = kurzfristig; Niere (HCO₃⁻) = langfristig.",
        },
        {
          heading: "Störungen des Säure-Base-Haushalts",
          text: "Respiratorische Azidose: ↑pCO₂ → pH↓. Respiratorische Alkalose: ↓pCO₂ → pH↑. Metabolische Azidose: ↓HCO₃⁻ → pH↓ (Kussmaul-Atmung). Metabolische Alkalose: ↑HCO₃⁻ → pH↑. Kompensation jeweils durch das andere Organ-System.",
          merksatz:
            "Azidose: pH < 7,35. Alkalose: pH > 7,45. Respiratorisch: pCO₂. Metabolisch: HCO₃⁻.",
        },
      ],

      merksätze: [
        "Henderson-Hasselbalch: pH = pK_a + log([A⁻]/[HA]).",
        "Pufferoptimum: [A⁻] = [HA] → pH = pK_a; effizienter Bereich pK_a ± 1.",
        "Blut-Normwerte: pH 7,40, pCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L.",
        "[HCO₃⁻]/[CO₂] ≈ 20:1 → pH = 6,1 + log(20) = 7,4.",
        "Lunge: schnelle CO₂-Regulierung (Minuten); Niere: langsame HCO₃⁻-Regulierung (Stunden–Tage).",
        "Respiratorische Azidose: ↑pCO₂ → pH↓; Alkalose: ↓pCO₂ → pH↑.",
        "Metabolische Azidose: ↓HCO₃⁻ → pH↓ (Kussmaul-Atmung als Kompensation).",
        "Bohr-Effekt: niedrigeres pH → Hb gibt mehr O₂ ab (Le Chatelier).",
        "Carboanhydrase: CO₂ + H₂O ⇌ H₂CO₃ (10⁶× beschleunigt, Zn²⁺-Enzym).",
        "pK_a(H₂CO₃) ≈ 6,1 (effektiv); pK_a(H₂PO₄⁻) ≈ 7,2 (intrazellulär).",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Ein Patient hat: pH 7,28, pCO₂ 55 mmHg (Norm: 40 mmHg), HCO₃⁻ 26 mmol/L (Norm: 24 mmol/L). Klassifizieren Sie die Störung und erklären Sie den Mechanismus mithilfe des Carbonat-Puffersystems.",
        answer: `Klassifikation: pH 7,28 < 7,35 → Azidose. pCO₂ 55 mmHg erhöht → respiratorische Ursache (Hypoventilation, z. B. COPD). HCO₃⁻ 26 mmol/L leicht erhöht → beginnende metabolische Kompensation (renale HCO₃⁻-Retention).

Diagnose: Respiratorische Azidose mit beginnendem renalem Ausgleich.

Mechanismus: Erhöhtes pCO₂ verschiebt das Gleichgewicht CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ nach rechts (Le Chatelier: mehr CO₂ → mehr H₂CO₃ → mehr H⁺). Die H⁺-Konzentration steigt → pH sinkt.

Henderson-Hasselbalch-Rechnung: [CO₂(aq)] = 55 × 0,03 = 1,65 mmol/L. pH = 6,1 + log(26/1,65) = 6,1 + log(15,8) = 6,1 + 1,20 = 7,30 ≈ 7,28 (Rechnung bestätigt Befund).

Renale Kompensation: Die Niere retiniert HCO₃⁻ (erhöht [HCO₃⁻] auf 26 mmol/L), um das Verhältnis HCO₃⁻/CO₂ teilweise zu normalisieren und den pH zu heben. Vollständige Kompensation dauert Stunden bis Tage.`,
      },

      klinischerBezug:
        "Die Blutgasanalyse (BGA) ist das klinische Anwendungsinstrument der Henderson-Hasselbalch-Gleichung: pH, pCO₂ und HCO₃⁻ erlauben die exakte Klassifikation von Azidose/Alkalose und deren Ursache (respiratorisch vs. metabolisch). Carboanhydrase-Hemmer (z. B. Acetazolamid) werden als Diuretika und zur Glaukomtherapie eingesetzt — sie hemmen die CO₂-Hydratisierung in Nierentubuli und Auge. Der Bohr-Effekt ist ein direktes Le-Chatelier-Beispiel, das die Sauerstoffversorgung arbeitender Muskeln optimiert.",

      selfTest: [
        {
          question:
            "Die Henderson-Hasselbalch-Gleichung lautet pH = pK_a + log([A⁻]/[HA]). Bei welchem Verhältnis [A⁻]/[HA] gilt pH = pK_a?",
          options: [
            "[A⁻]/[HA] = 10 → log(10) = 1 → pH = pK_a + 1",
            "[A⁻]/[HA] = 0,1 → log(0,1) = −1 → pH = pK_a − 1",
            "[A⁻]/[HA] = 1 → log(1) = 0 → pH = pK_a",
            "[A⁻]/[HA] = 100 → log(100) = 2 → pH = pK_a + 2",
            "Das Verhältnis ist irrelevant für pH = pK_a.",
          ],
          correctIndex: 2,
          explanation:
            "Wenn [A⁻] = [HA], ist das Verhältnis [A⁻]/[HA] = 1. log(1) = 0. Daher: pH = pK_a + 0 = pK_a. Bei diesem Verhältnis hat der Puffer auch die größte Pufferkapazität, weil er in beide Richtungen gleich gut puffern kann. Die anderen Optionen sind zwar mathematisch korrekt für die jeweiligen Verhältnisse, aber nur [A⁻]/[HA] = 1 ergibt pH = pK_a.",
          hints: ["log(1) = 0", "pH = pK_a wenn Base = Säure-Konzentration"],
          difficulty: 1,
          tags: ["henderson-hasselbalch", "puffer", "pka"],
        },
        {
          question:
            "Das Blut-Carbonat-Puffersystem hat [HCO₃⁻] = 24 mmol/L und [CO₂(aq)] = 1,2 mmol/L (pK_a = 6,1). Welcher pH resultiert?",
          options: [
            "pH = 6,1 + log(1,2/24) = 6,1 − 1,3 = 4,8",
            "pH = 6,1 + log(24/1,2) = 6,1 + 1,3 = 7,4",
            "pH = 6,1 + log(24 + 1,2) = 6,1 + 1,4 = 7,5",
            "pH = 6,1 − log(24/1,2) = 6,1 − 1,3 = 4,8",
            "pH = pK_a = 6,1, weil [HCO₃⁻] > [CO₂].",
          ],
          correctIndex: 1,
          explanation:
            "Henderson-Hasselbalch: pH = pK_a + log([Base]/[Säure]) = 6,1 + log([HCO₃⁻]/[CO₂(aq)]) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,301 ≈ 7,4. Dies entspricht dem physiologischen Blut-pH von 7,40. Das ungewöhnlich hohe Verhältnis von 20:1 ergibt sich, weil das effektive pK_a des Systems (6,1) weit vom Ziel-pH (7,4) entfernt ist. Niere und Lunge halten dieses Verhältnis konstant.",
          hints: [
            "log(20) = log(2 × 10) = log2 + log10 ≈ 0,301 + 1 = 1,301",
            "HCO₃⁻ ist die Base, CO₂(aq) ist die Säure",
          ],
          difficulty: 2,
          tags: ["henderson-hasselbalch", "carbonat-puffer", "blut-ph"],
        },
        {
          question: "Ein Patient hyperventiliert (Panikattacke). Wie verändert sich der Blut-pH?",
          options: [
            "pH sinkt (Azidose), weil mehr CO₂ produziert wird.",
            "pH steigt (Alkalose), weil CO₂ abgeatmet wird und [H⁺] sinkt.",
            "pH bleibt konstant, weil der Puffer alle Änderungen auffängt.",
            "pH sinkt, weil HCO₃⁻ durch die Lunge ausgeschieden wird.",
            "pH steigt, weil die Niere mehr H⁺ ausscheidet.",
          ],
          correctIndex: 1,
          explanation:
            "Hyperventilation → mehr CO₂ abgeatmet → pCO₂ sinkt → [H₂CO₃] sinkt → Gleichgewicht verschiebt sich links → [H⁺] sinkt → pH steigt → respiratorische Alkalose. Henderson-Hasselbalch: ↓[CO₂] im Nenner → größeres [HCO₃⁻]/[CO₂] → höherer pH. Klinisch: Schwindel, Kribbeln, Taubheitsgefühl. Therapie: Rückatmung in Tüte erhöht [CO₂] wieder.",
          hints: [
            "Hyperventilation → weniger CO₂ im Blut → weniger H⁺",
            "Weniger H⁺ = höherer pH = Alkalose",
          ],
          difficulty: 2,
          tags: ["hyperventilation", "alkalose", "blut-ph"],
        },
        {
          question: "Was ist der Bohr-Effekt und welches biochemische Prinzip liegt ihm zugrunde?",
          options: [
            "Hämoglobin bindet bei hohem pH mehr O₂ und gibt bei niedrigem pH mehr O₂ ab — erklärt durch Le Chatelier.",
            "Hämoglobin wird bei hoher Temperatur denaturiert und gibt O₂ ab.",
            "CO₂ verdrängt O₂ aus dem Hämoglobin durch kompetitive Hemmung.",
            "Bei niedrigem pO₂ steigt der pH des Blutes.",
            "Hämoglobin puffert H⁺ nur in der Lunge, nicht im Gewebe.",
          ],
          correctIndex: 0,
          explanation:
            "Der Bohr-Effekt beschreibt: HbO₂ + H⁺ ⇌ HHb⁺ + O₂. Bei niedrigem pH (saures Gewebe durch Muskelarbeit) steigt [H⁺] → Le Chatelier → Gleichgewicht verschiebt sich rechts → mehr O₂ wird freigesetzt. Bei hohem pH (Lunge) verschiebt sich das Gleichgewicht links → mehr O₂ wird gebunden. Der Bohr-Effekt optimiert die O₂-Abgabe an aktive Gewebe automatisch.",
          hints: [
            "Bohr-Effekt: saures Milieu → mehr O₂-Abgabe vom Hb",
            "HbO₂ + H⁺ ⇌ HHb⁺ + O₂: Le Chatelier bei ↑[H⁺]",
          ],
          difficulty: 2,
          tags: ["bohr-effekt", "hämoglobin", "le-chatelier"],
        },
        {
          question:
            "Welche Störung liegt vor bei: pH 7,50, pCO₂ 30 mmHg (↓), HCO₃⁻ 22 mmol/L (leicht ↓)?",
          options: [
            "Metabolische Azidose mit respiratorischer Kompensation.",
            "Respiratorische Alkalose mit beginnendem metabolischem Ausgleich.",
            "Metabolische Alkalose mit respiratorischer Kompensation.",
            "Respiratorische Azidose ohne Kompensation.",
            "Normalbefund.",
          ],
          correctIndex: 1,
          explanation:
            "Analyse: pH 7,50 > 7,45 → Alkalose. pCO₂ 30 mmHg < 40 mmHg → respiratorische Ursache (Hyperventilation). HCO₃⁻ 22 mmol/L leicht erniedrigt → metabolische Kompensation (Niere scheidet HCO₃⁻ aus). Diagnose: Respiratorische Alkalose mit beginnendem renalem Ausgleich. Rechnung: [CO₂(aq)] = 30×0,03 = 0,9 mmol/L; pH = 6,1 + log(22/0,9) = 6,1 + 1,39 ≈ 7,49 ≈ 7,50. Ursachen: Hyperventilation, Höhenaufenthalt, Angst.",
          hints: [
            "pH ↑ + pCO₂ ↓ = respiratorische Alkalose",
            "Kompensation: Niere scheidet HCO₃⁻ aus → HCO₃⁻ leicht erniedrigt",
          ],
          difficulty: 3,
          tags: ["respiratorische-alkalose", "blutgasanalyse", "diagnostik"],
        },
        {
          question: "Warum wird Acetazolamid (Carboanhydrase-Hemmer) als Diuretikum verwendet?",
          options: [
            "Es erhöht die Natriumrückresorption im proximalen Tubulus.",
            "Es hemmt die CO₂-Hydratisierung in Nierentubuli, was HCO₃⁻-Ausscheidung erhöht und eine milde Diurese bewirkt.",
            "Es blockiert Aldosteronrezeptoren und verringert K⁺-Verlust.",
            "Es senkt die glomeruläre Filtrationsrate (GFR).",
            "Es erhöht die H⁺-Sekretion im Sammelrohr.",
          ],
          correctIndex: 1,
          explanation:
            "Carboanhydrase katalysiert CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ im proximalen Tubulus. Ohne CA kann H⁺ nicht effizient sezerniert werden, und HCO₃⁻ wird nicht rückresorbiert. Acetazolamid hemmt CA → weniger H⁺-Sekretion → weniger Na⁺/H⁺-Austausch → mehr Na⁺ im Tubulus → osmotische Diurese. Nebeneffekt: metabolische Azidose (HCO₃⁻-Verlust). Anwendung: Glaukom, Höhenkrankheit.",
          hints: [
            "CA hemmen → weniger H₂CO₃ → weniger H⁺ → weniger Na-H-Austausch → Diurese",
            "Acetazolamid erzeugt metabolische Azidose als Nebeneffekt",
          ],
          difficulty: 3,
          tags: ["acetazolamid", "carboanhydrase", "diuretikum"],
        },
        {
          question:
            "Essigsäure hat pK_a = 4,76. Eine Lösung enthält [CH₃COO⁻] = 0,1 mol/L und [CH₃COOH] = 0,01 mol/L. Welchen pH hat sie?",
          options: [
            "pH = 4,76 + log(0,01/0,1) = 4,76 − 1 = 3,76",
            "pH = 4,76 + log(0,1/0,01) = 4,76 + 1 = 5,76",
            "pH = 4,76 + log(0,1 + 0,01) = 4,80",
            "pH = 4,76 / log(0,1/0,01) = 4,76",
            "pH = 4,76 − log(0,1/0,01) = 3,76",
          ],
          correctIndex: 1,
          explanation:
            "Henderson-Hasselbalch: pH = pK_a + log([A⁻]/[HA]) = 4,76 + log(0,1/0,01) = 4,76 + log(10) = 4,76 + 1 = 5,76. Das Verhältnis Base/Säure = 10:1 → pH liegt 1 Einheit über pK_a. Wenn [A⁻] = 10×[HA], dann pH = pK_a + 1. Dies illustriert den effektiven Pufferbereich pK_a ± 1.",
          hints: [
            "log([A⁻]/[HA]) = log(0,1/0,01) = log(10) = 1",
            "pH = pK_a + 1 wenn Base 10-fach größer als Säure",
          ],
          difficulty: 2,
          tags: ["henderson-hasselbalch", "acetat-puffer", "rechnen"],
        },
        {
          question: "Welche Aussage zur Carboanhydrase ist korrekt?",
          options: [
            "Sie katalysiert die irreversible Umwandlung von CO₂ zu HCO₃⁻.",
            "Sie enthält Fe²⁺ im aktiven Zentrum.",
            "Sie beschleunigt CO₂ + H₂O ⇌ H₂CO₃ um ca. 10⁶-fach und enthält Zn²⁺.",
            "Sie wird durch Acetazolamid aktiviert.",
            "Sie ist nur in Erythrozyten vorhanden.",
          ],
          correctIndex: 2,
          explanation:
            "Carboanhydrase (CA) ist ein Zink-Metalloenzym (Zn²⁺ im aktiven Zentrum), das CO₂ + H₂O ⇌ H₂CO₃ um ca. 10⁶-fach beschleunigt (k_cat ≈ 10⁶/s). Die Reaktion ist reversibel. CA kommt in Erythrozyten, Nierentubuli, Augenkammerwasser und Magenmukosa vor. Acetazolamid hemmt CA (nicht aktiviert). Fe²⁺ ist das Metallzentrum von Hämoglobin, nicht der CA.",
          hints: [
            "CA: Zn²⁺ im aktiven Zentrum (nicht Fe)",
            "Acetazolamid = CA-Inhibitor (nicht Aktivator)",
          ],
          difficulty: 2,
          tags: ["carboanhydrase", "zink", "co2-transport"],
        },
      ],
    },
  ],
};
