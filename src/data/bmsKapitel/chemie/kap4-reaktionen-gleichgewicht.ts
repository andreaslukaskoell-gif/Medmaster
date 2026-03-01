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
      content: `## Grundbegriffe chemischer Reaktionen

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

{{DIAGRAM:periodic-table}}

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

{{DIAGRAM:ionic-bond}}

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

Wichtig: Spontaneität einer Reaktion hängt nicht allein von ΔH ab, sondern von der freien Enthalpie **ΔG = ΔH − T·ΔS** (Gibbs-Energie). ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon). Im Körper koppelt die Zelle exergone Reaktionen (ATP-Hydrolyse, ΔG° ≈ −30,5 kJ/mol) an endergone Biosynthesen, um thermodynamisch ungünstige Prozesse anzutreiben (energetische Kopplung).`,


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
      content: `## Reaktionsgeschwindigkeit

Die **Reaktionsgeschwindigkeit v** beschreibt, wie schnell sich Konzentrationen mit der Zeit ändern:

**v = Δ[Produkt] / Δt = −Δ[Edukt] / Δt** [mol·L⁻¹·s⁻¹]

Das negative Vorzeichen bei Edukten zeigt, dass deren Konzentration abnimmt. Die momentane Reaktionsgeschwindigkeit ist der Grenzwert des Differenzenquotienten (Ableitung der Konzentrations-Zeit-Kurve). Im Verlauf einer Reaktion nimmt v in der Regel ab, weil die Eduktkonzentrationen sinken.

{{DIAGRAM:thermodynamics}}

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

{{DIAGRAM:enzyme-substrate}}

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
- Klinisch: Ibuprofen (t₁/₂ ≈ 2 h, häufige Gabe) vs. Amlodipin (t₁/₂ ≈ 35 h, 1× täglich). Dosierungsintervall ≈ 1–2 × t₁/₂.`,


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
      content: `## Was ist Stöchiometrie?

Die **Stöchiometrie** (von griech. stoicheion = Element, metron = Maß) beschreibt die quantitativen Verhältnisse der an einer chemischen Reaktion beteiligten Stoffe. Basis ist die ausgeglichene Reaktionsgleichung, die Atome, Ladungen und Massen erhält. Die Stöchiometrie ist das mathematische Fundament der Chemie und essenziell für Dosierungen in der Medizin.

{{DIAGRAM:periodic-table}}

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

{{DIAGRAM:periodic-table}}

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

Beispiel: 50 g theoretisch, 38 g tatsächlich → (38/50) × 100 = 76 %.

> **Merke:** Die theoretische Ausbeute ist immer die Obergrenze. In der Realität wird sie durch Nebenreaktionen, Gleichgewichtslage und Verluste bei der Isolierung unterschritten.

Klinisch/industriell: Der Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃) erreicht nur ~15 % Gleichgewichtsausbeute pro Durchlauf — durch Rückführung der Edukte wird die Gesamtausbeute jedoch auf >90 % gesteigert. Optimale Bedingungen: 400–500 °C, 150–300 bar, Fe-Katalysator. Fritz Haber und Carl Bosch erhielten für diesen Prozess jeweils den Nobelpreis — er versorgt heute ~40 % der Weltbevölkerung mit Nahrung (Düngemittel).

## Stöchiometrie in der Klinik und Pharmazie

- **Infusionszubereitung:** m = c × V × M (z. B. 500 mL einer 0,9 %-igen NaCl-Lösung: 4,5 g NaCl)
- **Molmasse und Dosierung:** Wirkstoffmenge in mol berechnen; bei Antibiotika ist die molare Dosis entscheidend, nicht nur die Masse
- **Blutgasanalyse:** Stöchiometrie des CO₂/HCO₃⁻-Puffersystems: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
- **Glucose-Oxidation:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; pro Mol Glucose 6 Mol CO₂ → Respirationsquotient = 1,0

Beispiel NaCl 0,9 %: 9 g NaCl pro 1 L → c = 9 / 58,5 = 0,154 mol/L ≈ 154 mmol/L (nahe dem Plasma-Na⁺ von ~140 mmol/L).

**Respirationsquotienten verschiedener Nährstoffe:**

| Nährstoff | RQ (CO₂/O₂) | Brennwert |
|---|---|---|
| Kohlenhydrate | 1,0 | 4,1 kcal/g |
| Fette | ~0,7 | 9,3 kcal/g |
| Proteine | ~0,8 | 4,1 kcal/g |
| Ethanol | 0,67 | 7,1 kcal/g |

Klinisch: RQ > 1,0 deutet auf Lipogenese hin (Umwandlung von Kohlenhydraten in Fett, vermehrte CO₂-Produktion). Bei Beatmungspatienten kann dies die CO₂-Elimination erschweren — relevant für die Ernährungstherapie bei ARDS.`,


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
          correctIndex: 0,
          explanation:
            "Stöchiometrisches Verhältnis: 2 mol H₂ benötigen 1 mol O₂. Quotienten: H₂: 5/2 = 2,5; O₂: 2/1 = 2. Der kleinere Quotient (2 < 2,5) kennzeichnet O₂ als Mangelreagenz — O₂ wird zuerst aufgebraucht. Für 2 mol O₂ werden 4 mol H₂ verbraucht; 1 mol H₂ bleibt übrig. Option A nennt O₂ korrekt als Mangelreagenz.",
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

    // ch-7-04 entfernt (Duplikat — Inhalt in ch-8-02 + ch-8-03 ausfuehrlicher)
    // ch-8-01 entfernt (Duplikat — Inhalt in ch-7-02 als Superset enthalten)

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
      content: `## Das dynamische Gleichgewicht

Viele chemische Reaktionen sind reversibel: Die Produkte können wieder zu Edukten zurückreagieren. Man schreibt dies mit einem Doppelpfeil:

**A + B ⇌ C + D**

Anfänglich dominiert die Hinreaktion. Mit steigenden Produktkonzentrationen nimmt die Rückreaktion zu. Irgendwann werden Hin- und Rückreaktion gleich schnell — es stellt sich ein **dynamisches Gleichgewicht** ein. Dynamisch bedeutet: Beide Reaktionen laufen weiterhin ab, aber ihre Geschwindigkeiten sind gleich. Makroskopisch scheint die Reaktion zu stehen; mikroskopisch herrscht rege Aktivität.

Das Gleichgewicht ist kein statischer Zustand. Isotopen-Tracerexperimente zeigen, dass im Gleichgewicht ständig Moleküle zwischen Edukt- und Produktzustand wechseln — nur netto findet keine Änderung statt.

> **Merke:** Dynamisches Gleichgewicht = v_hin = v_rück. Konzentrationen sind konstant (aber nicht gleich!). Beide Reaktionsrichtungen laufen weiterhin ab.

{{DIAGRAM:enzyme-substrate}}

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

{{DIAGRAM:thermodynamics}}

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

Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin: Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Die Michaelis-Konstante K_M bei Enzymreaktionen ist ebenfalls eine Gleichgewichtskonstante und gibt die Substrataffinität von Enzymen an.`,


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
      content: `## Das Prinzip von Le Chatelier

Das **Prinzip von Le Chatelier** (auch: Prinzip des kleinsten Zwangs, 1884) lautet:

> Wird ein System im chemischen Gleichgewicht durch äußere Einwirkung gestört, so verschiebt es sich in diejenige Richtung, die der Störung entgegenwirkt.

Dieses Prinzip ist eines der wichtigsten Konzepte der physikalischen Chemie — es erlaubt qualitative Vorhersagen über die Verschiebung von Gleichgewichten ohne aufwendige Berechnungen.

{{DIAGRAM:thermodynamics}}

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

{{DIAGRAM:ph-scale}}

Blutpuffer (H₂CO₃/HCO₃⁻) funktionieren nach Le Chatelier:

CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

- Bei Säurezufuhr (H⁺ steigt): Gleichgewicht verschiebt sich links → CO₂ entsteht → Abatmung über Lunge
- Bei Basenzufuhr (H⁺ sinkt): Gleichgewicht verschiebt sich rechts → HCO₃⁻ puffert → pH stabilisiert

## Biologische Beispiele für Le Chatelier

**Sauerstofftransport:** Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂): Hinreaktion dominiert. Im Gewebe (niedriger pO₂): Rückreaktion dominiert — O₂ wird abgegeben. Le Chatelier reguliert die O₂-Abgabe automatisch dem Bedarf entsprechend.

**Calciumstoffwechsel:** Ca²⁺ + HPO₄²⁻ ⇌ CaHPO₄(s). Beim Knochenbau wird CaHPO₄ ausgefällt — Produktentzug verschiebt das Gleichgewicht in Richtung Mineralisation. Parathormon und Calcitonin steuern die Gleichgewichtslage über [Ca²⁺] im Blut.

> **Merke:** Le Chatelier: Wird ein Gleichgewicht gestört, verschiebt es sich so, dass die Störung verkleinert wird. Konzentrations- und Druckänderungen ändern nur Q, nicht K — nur Temperatur ändert K selbst.

> **Merke:** Haber-Bosch (N₂ + 3H₂ ⇌ 2NH₃): Hoher Druck begünstigt Produkte (Δn = −2), moderate Temperatur ist Kompromiss zwischen Thermodynamik und Kinetik. Katalysatoren verschieben das Gleichgewicht nie — sie beschleunigen nur die Einstellung.`,


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

    // ─────────────────────────────────────────────
    // UK 05: Thermodynamik — Enthalpie, Entropie, Gibbs-Energie
    // ─────────────────────────────────────────────
    {
      id: "ch-7-05",
      title: "Thermodynamik — Enthalpie, Entropie, Gibbs-Energie",
      stichworte: [
        "Enthalpie",
        "Entropie",
        "Gibbs-Energie",
        "exotherm",
        "endotherm",
        "Hess'scher Satz",
        "Bildungsenthalpie",
        "Spontaneitaet",
        "Delta-G",
        "Delta-H",
        "Delta-S",
      ],
      content: `## Enthalpie (ΔH) — Wärme bei konstantem Druck

Die **Enthalpie** H ist eine thermodynamische Zustandsgröße. Die Enthalpieänderung ΔH einer Reaktion beschreibt die Wärmemenge, die bei konstantem Druck ausgetauscht wird.

**Exotherme Reaktionen (ΔH < 0):** Das System gibt Wärme an die Umgebung ab. Die Produkte haben weniger Enthalpie als die Edukte. Beispiele: Verbrennung von Methan (ΔH = −890 kJ/mol), Neutralisation starker Säuren/Basen (ΔH ≈ −57 kJ/mol), Kristallisation.

**Endotherme Reaktionen (ΔH > 0):** Das System nimmt Wärme aus der Umgebung auf. Die Produkte haben mehr Enthalpie als die Edukte. Beispiele: Auflösung von NH₄NO₃ in Wasser (Kältepack, ΔH = +25,7 kJ/mol), thermische Zersetzung von CaCO₃ (ΔH = +178 kJ/mol), Photosynthese.

### Bildungsenthalpie (ΔH_f°)

Die **Standard-Bildungsenthalpie** ΔH_f° ist die Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus den Elementen in ihrem Standardzustand (25°C, 1 bar). Per Definition gilt: ΔH_f° = 0 für Elemente in ihrem stabilsten Zustand (z. B. O₂(g), C(Graphit), Fe(s)).

Wichtige Bildungsenthalpien:
| Verbindung | ΔH_f° (kJ/mol) |
|---|---|
| H₂O(l) | −285,8 |
| CO₂(g) | −393,5 |
| NH₃(g) | −46,1 |
| CH₄(g) | −74,8 |
| C₆H₁₂O₆(s) | −1274 |

{{DIAGRAM:covalent-bond}}

### Hess'scher Satz (Satz der konstanten Wärmesumme)

**Formulierung:** Die Enthalpieänderung einer Reaktion hängt nur vom Anfangs- und Endzustand ab, nicht vom Reaktionsweg. Das bedeutet: Man kann ΔH über beliebige Zwischenstufen berechnen.

**Berechnung über Bildungsenthalpien:**
ΔH°(Reaktion) = Σ ΔH_f°(Produkte) − Σ ΔH_f°(Edukte)

**Beispiel — Verbrennung von Methan:**
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

ΔH° = [ΔH_f°(CO₂) + 2·ΔH_f°(H₂O)] − [ΔH_f°(CH₄) + 2·ΔH_f°(O₂)]
ΔH° = [−393,5 + 2·(−285,8)] − [−74,8 + 0]
ΔH° = −965,1 − (−74,8) = **−890,3 kJ/mol**

Der Hess'sche Satz ist besonders nützlich, wenn ΔH einer Reaktion nicht direkt messbar ist (z. B. Bildung von Benzol aus Kohlenstoff und Wasserstoff).

> **Merke:** ΔH < 0 = exotherm (System gibt Wärme ab); ΔH > 0 = endotherm (System nimmt Wärme auf). Die Bildungsenthalpie von Elementen im Standardzustand ist per Definition 0. Der Hess'sche Satz erlaubt die Berechnung von ΔH über Umwege.

---

## Entropie (ΔS) — Maß für Unordnung

Die **Entropie** S ist ein Maß für die Anzahl der möglichen Mikrozustände eines Systems (Boltzmann: S = k_B · ln W). Vereinfacht: Entropie misst die „Unordnung" oder „Verteilung von Energie und Materie".

**Entropie steigt (ΔS > 0) bei:**
- Auflösung eines Feststoffs → Ionen verteilen sich in Lösung (geordnetes Gitter → ungeordnet)
- Gasentwicklung → enorm viel mehr Mikrozustände (Volumenvergrößerung)
- Temperaturerhöhung → Teilchen bewegen sich schneller, mehr Energiezustände
- Vergrößerung der Teilchenzahl → z. B. 2 NH₃ → N₂ + 3 H₂ (2 Mol → 4 Mol Gas)

**Entropie sinkt (ΔS < 0) bei:**
- Kristallisation (flüssig → fest)
- Polymerisation (viele Monomere → ein Polymer)
- Assoziation (2 Teilchen → 1 Komplex)

**Dritter Hauptsatz der Thermodynamik:** Bei T = 0 K (absolutem Nullpunkt) ist die Entropie eines perfekten Kristalls S = 0. Dies ermöglicht die Berechnung absoluter Entropien.

---

## Gibbs-Energie (ΔG) — das Entscheidungskriterium

Die **Gibbs-Energie** (auch: freie Enthalpie) kombiniert beide Triebkräfte in einer einzigen Größe:

**ΔG = ΔH − T · ΔS**

| ΔG | Bedeutung |
|---|---|
| < 0 | Reaktion ist spontan (exergon) |
| > 0 | Reaktion ist nicht spontan (endergon) |
| = 0 | System im Gleichgewicht |

{{DIAGRAM:ph-scale}}

### Die vier Fälle der Spontaneität

| Fall | ΔH | ΔS | ΔG | Spontaneität |
|---|---|---|---|---|
| 1 | < 0 (exotherm) | > 0 (mehr Unordnung) | Immer < 0 | **Immer spontan** bei jeder Temperatur |
| 2 | > 0 (endotherm) | < 0 (mehr Ordnung) | Immer > 0 | **Nie spontan** bei keiner Temperatur |
| 3 | < 0 (exotherm) | < 0 (mehr Ordnung) | T-abhängig | Spontan bei **tiefen T** (|ΔH| > T·|ΔS|) |
| 4 | > 0 (endotherm) | > 0 (mehr Unordnung) | T-abhängig | Spontan bei **hohen T** (T·ΔS > ΔH) |

**Fall 1 — Beispiel:** Verbrennung (exotherm + Gasentwicklung → mehr Unordnung)
**Fall 2 — Beispiel:** Photosynthese (endotherm + Ordnung steigt → braucht Lichtenergie)
**Fall 3 — Beispiel:** Gefrieren von Wasser (exotherm, aber weniger Unordnung → nur unter 0°C spontan)
**Fall 4 — Beispiel:** Auflösung von NH₄NO₃ (endotherm, aber mehr Unordnung → spontan bei Raumtemperatur)

### Umkehrtemperatur

Bei den temperaturabhängigen Fällen 3 und 4 gibt es eine **Umkehrtemperatur** T*, bei der ΔG = 0:

T* = ΔH / ΔS

Oberhalb (Fall 4) bzw. unterhalb (Fall 3) dieser Temperatur wechselt die Spontaneität.

---

## Rechenbeispiel: Verbrennung von Methan

CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

Gegeben: ΔH° = −890 kJ/mol; ΔS° = −242 J/(mol·K) = −0,242 kJ/(mol·K)

Bei T = 298 K:
ΔG° = ΔH° − T · ΔS° = −890 − 298 · (−0,242) = −890 + 72,1 = **−817,9 kJ/mol**

**Interpretation:** ΔG° ist stark negativ → die Verbrennung ist bei Raumtemperatur thermodynamisch sehr günstig. Obwohl ΔS negativ ist (weniger Gasmoleküle: 3 → 3, aber H₂O wird flüssig → weniger Unordnung), dominiert der große exotherme ΔH-Term. Die Reaktion braucht aber eine Aktivierungsenergie (Zündung) — Thermodynamik sagt nur, OB eine Reaktion ablaufen kann, nicht WIE SCHNELL (das ist Kinetik).

**Achtung Einheiten:** ΔH wird oft in kJ/mol angegeben, ΔS in J/(mol·K). Vor dem Einsetzen in ΔG = ΔH − T·ΔS muss ΔS in kJ/(mol·K) umgerechnet werden (÷ 1000).

---

## Klinische Anwendung: ATP und gekoppelte Reaktionen

Die Hydrolyse von ATP zu ADP + Pᵢ hat ΔG° = −30,5 kJ/mol (exergon). Im Körper werden endergone Reaktionen (z. B. Muskelkontraktion, aktiver Transport, Biosynthesen) an ATP-Hydrolyse **gekoppelt**, sodass die Gesamtreaktion exergon wird:

Gesamtes ΔG = ΔG(endergone Reaktion) + ΔG(ATP-Hydrolyse)

Solange |ΔG(ATP)| > |ΔG(endergon)|, ist ΔG_gesamt < 0 → die gekoppelte Reaktion läuft spontan ab. Das ist das thermodynamische Prinzip der Bioenergetik.

> **Merke:** ΔG = ΔH − T·ΔS. Nur ΔG < 0 heißt spontan. Exotherm allein reicht nicht — die Entropie zählt mit! Die vier Fälle auswendig lernen: exotherm+ΔS>0 → immer; endotherm+ΔS<0 → nie; Rest → temperaturabhängig.

> **Merke:** Einheiten-Falle: ΔH in kJ, ΔS in J → vor Rechnung ΔS durch 1000 teilen. ATP-Kopplung: endergone + exergone Reaktion → ΔG_gesamt < 0 wenn |ΔG_ATP| > |ΔG_endergon|.`,


      lernziele: [
        "Die Begriffe Enthalpie, Entropie und Gibbs-Energie definieren und voneinander abgrenzen.",
        "Den Hess'schen Satz formulieren und Reaktionsenthalpien aus Bildungsenthalpien berechnen.",
        "Die Gibbs-Gleichung ΔG = ΔH − T·ΔS anwenden und die vier Fälle der Spontaneität erklären.",
        "Begründen, warum 'exotherm' nicht automatisch 'spontan' bedeutet.",
        "Gekoppelte Reaktionen (ATP-Hydrolyse) thermodynamisch erklären.",
      ],

      sections: [
        {
          heading: "Enthalpie und Hess'scher Satz",
          text: "ΔH beschreibt den Wärmeaustausch bei konstantem Druck. Exotherm (ΔH < 0): Produkte energieärmer. Endotherm (ΔH > 0): Produkte energiereicher. Der Hess'sche Satz besagt: ΔH hängt nur vom Anfangs- und Endzustand ab (wegunabhängig). Berechnung: ΔH = Σ ΔH_f°(Produkte) − Σ ΔH_f°(Edukte).",
          merksatz:
            "Hess'scher Satz: ΔH ist wegunabhängig — egal ob direkt oder über Zwischenstufen, das Ergebnis ist gleich.",
        },
        {
          heading: "Entropie als zweite Triebkraft",
          text: "Entropie (ΔS) misst die Unordnung. Sie steigt bei Auflösung, Gasentwicklung und Temperaturerhöhung. Die Entropie ist die zweite Triebkraft neben der Enthalpie: Manchmal laufen endotherme Reaktionen spontan ab, weil die Entropiezunahme groß genug ist (z. B. Auflösung von NH₄NO₃).",
          merksatz:
            "ΔS > 0 = mehr Unordnung → begünstigt Spontaneität. ΔS < 0 = mehr Ordnung → hemmt Spontaneität.",
        },
        {
          heading: "Gibbs-Energie und die vier Fälle",
          text: "ΔG = ΔH − T·ΔS kombiniert beide Triebkräfte. Vier Fälle: (1) ΔH<0 + ΔS>0 → immer spontan; (2) ΔH>0 + ΔS<0 → nie spontan; (3) ΔH<0 + ΔS<0 → bei tiefen T spontan; (4) ΔH>0 + ΔS>0 → bei hohen T spontan. Umkehrtemperatur: T* = ΔH/ΔS.",
          merksatz:
            "ΔG < 0 = spontan (exergon). ΔG > 0 = nicht spontan (endergon). ΔG = 0 = Gleichgewicht.",
        },
      ],

      merksätze: [
        "ΔH < 0 = exotherm (Wärme frei); ΔH > 0 = endotherm (Wärme aufnehmen).",
        "Bildungsenthalpie von Elementen im Standardzustand = 0 per Definition.",
        "Hess'scher Satz: ΔH(Reaktion) = Σ ΔH_f°(Produkte) − Σ ΔH_f°(Edukte).",
        "Entropie steigt bei: Auflösung, Gasentwicklung, Temperaturerhöhung, mehr Teilchen.",
        "ΔG = ΔH − T·ΔS — nur ΔG entscheidet über Spontaneität.",
        "Vier Fälle: exo+ΔS>0 → immer; endo+ΔS<0 → nie; Rest → T-abhängig.",
        "Spontan ≠ schnell! Kinetik (Aktivierungsenergie) ist separat.",
        "Einheiten-Falle: ΔH in kJ, ΔS in J → umrechnen vor Einsetzen.",
        "ATP-Kopplung: endergon + exergon → ΔG_gesamt < 0.",
      ],

      altfrage: {
        question:
          "Für die Reaktion N₂O₄(g) → 2 NO₂(g) gilt: ΔH° = +57,2 kJ/mol und ΔS° = +175,8 J/(mol·K). Berechnen Sie ΔG° bei 25°C und bei 50°C und beurteilen Sie die Spontaneität.",
        answer: `Bei 25°C (298 K):
ΔG° = ΔH° − T·ΔS° = 57,2 kJ − 298 K · 0,1758 kJ/K = 57,2 − 52,4 = +4,8 kJ/mol
ΔG° > 0 → nicht spontan bei 25°C.

Bei 50°C (323 K):
ΔG° = 57,2 − 323 · 0,1758 = 57,2 − 56,8 = +0,4 kJ/mol
Immer noch knapp nicht spontan, aber fast im Gleichgewicht.

Umkehrtemperatur: T* = ΔH/ΔS = 57200/175,8 ≈ 325 K ≈ 52°C.
Ab ca. 52°C ist ΔG < 0 → die Dissoziation von N₂O₄ wird spontan.

Dies ist ein Fall 4 (ΔH > 0, ΔS > 0): endotherm mit Entropiezunahme → bei hohen Temperaturen spontan. Die Entropie steigt, weil aus 1 Gasmolekül 2 werden. Der T·ΔS-Term wächst mit der Temperatur und überwiegt schließlich den positiven ΔH-Term.`,
      },

      klinischerBezug:
        "Die ATP-Hydrolyse (ATP → ADP + Pᵢ, ΔG° = −30,5 kJ/mol) ist die zentrale exergone Reaktion der Zelle. Endergone Prozesse (Muskelkontraktion, aktiver Ionentransport, Proteinbiosynthese) werden thermodynamisch möglich, indem sie an ATP-Hydrolyse gekoppelt werden. Bei Hypothermie sinkt T → ΔG wird negativer für exotherme Reaktionen, aber enzymatische Reaktionen werden kinetisch langsamer (Arrhenius). Fieber erhöht T → ΔG für endotherme Reaktionen wird günstiger, aber Enzymdenaturierung droht ab 42°C.",

      selfTest: [
        {
          question: "Was bedeutet ΔG < 0 fuer eine chemische Reaktion?",
          options: [
            "Die Reaktion ist exotherm.",
            "Die Reaktion laeuft spontan ab (exergon).",
            "Die Reaktion laeuft sehr schnell ab.",
            "Die Entropie nimmt ab.",
            "Die Reaktion befindet sich im Gleichgewicht.",
          ],
          correctIndex: 1,
          explanation:
            "ΔG < 0 bedeutet, dass die Reaktion thermodynamisch spontan (exergon) ist. Das heisst nicht, dass sie schnell ablaeuft — das haengt von der Aktivierungsenergie ab (Kinetik). Exotherm (ΔH < 0) ist nicht dasselbe wie exergon (ΔG < 0), weil die Entropie mitentscheidet.",
          hints: [
            "Spontan = thermodynamisch beguenstigt, nicht Geschwindigkeit",
            "ΔG kombiniert ΔH UND ΔS",
          ],
          difficulty: 1,
          tags: ["gibbs-energie", "spontaneitaet", "exergon"],
        },
        {
          question: "Welche Reaktion ist bei JEDER Temperatur spontan?",
          options: [
            "ΔH > 0, ΔS < 0",
            "ΔH < 0, ΔS < 0",
            "ΔH > 0, ΔS > 0",
            "ΔH < 0, ΔS > 0",
            "ΔH = 0, ΔS = 0",
          ],
          correctIndex: 3,
          explanation:
            "Wenn ΔH < 0 (exotherm) und ΔS > 0 (mehr Unordnung), dann ist ΔG = ΔH − T·ΔS immer negativ: ein negativer ΔH minus ein positiver T·ΔS-Term ergibt immer einen negativen Wert. Beispiel: Verbrennung (exotherm + Gasentwicklung).",
          hints: [
            "ΔG = ΔH − T·ΔS: Wann ist das IMMER negativ?",
            "Negativ minus positiv = immer negativ",
          ],
          difficulty: 2,
          tags: ["vier-faelle", "spontaneitaet", "temperatur"],
        },
        {
          question:
            "Berechne ΔH fuer die Reaktion C(s) + O₂(g) → CO₂(g), wenn ΔHf°(CO₂) = −393,5 kJ/mol.",
          options: [
            "+393,5 kJ/mol",
            "−393,5 kJ/mol",
            "0 kJ/mol",
            "−787 kJ/mol",
            "Kann ohne weitere Daten nicht berechnet werden",
          ],
          correctIndex: 1,
          explanation:
            "Nach dem Hess'schen Satz: ΔH = Σ ΔHf°(Produkte) − Σ ΔHf°(Edukte) = ΔHf°(CO₂) − [ΔHf°(C) + ΔHf°(O₂)] = −393,5 − [0 + 0] = −393,5 kJ/mol. C(Graphit) und O₂(g) sind Elemente im Standardzustand → ΔHf° = 0.",
          hints: [
            "Bildungsenthalpie von Elementen im Standardzustand = 0",
            "Hess: ΔH = Produkte minus Edukte",
          ],
          difficulty: 2,
          tags: ["hess", "bildungsenthalpie", "rechnung"],
        },
        {
          question:
            "NH₄NO₃ loest sich in Wasser endotherm auf (ΔH > 0). Trotzdem ist der Vorgang spontan. Warum?",
          options: [
            "Weil die Aktivierungsenergie niedrig ist.",
            "Weil ein Katalysator die Reaktion beschleunigt.",
            "Weil die Entropiezunahme (ΔS > 0) gross genug ist, sodass T·ΔS > ΔH und ΔG < 0.",
            "Weil die Loesung Waerme abgibt.",
            "Weil ΔG bei endothermen Reaktionen immer negativ ist.",
          ],
          correctIndex: 2,
          explanation:
            "Das ist ein klassischer Fall 4: ΔH > 0, ΔS > 0. Die Ionen verteilen sich in Loesung → stark erhoehte Unordnung (ΔS >> 0). Bei Raumtemperatur ist T·ΔS > ΔH, also ΔG = ΔH − T·ΔS < 0. Die Reaktion ist spontan, OBWOHL sie endotherm ist.",
          hints: [
            "Was treibt die Reaktion an, wenn es nicht die Waerme ist?",
            "Ionen in Loesung = viel mehr Unordnung als im Kristallgitter",
          ],
          difficulty: 2,
          tags: ["entropie", "endotherm-spontan", "ammoniumnitrat"],
        },
        {
          question:
            "Fuer eine Reaktion gilt: ΔH = −100 kJ/mol, ΔS = −200 J/(mol·K). Ab welcher Temperatur ist die Reaktion NICHT mehr spontan?",
          options: [
            "Ab 200 K",
            "Ab 500 K",
            "Ab 0,5 K",
            "Die Reaktion ist bei jeder Temperatur spontan",
            "Die Reaktion ist bei keiner Temperatur spontan",
          ],
          correctIndex: 1,
          explanation:
            "ΔG = 0 bei der Umkehrtemperatur T* = ΔH/ΔS = (−100 kJ)/(−0,200 kJ/K) = 500 K. Unterhalb von 500 K: |ΔH| > T·|ΔS| → ΔG < 0 (spontan). Oberhalb von 500 K: T·|ΔS| > |ΔH| → ΔG > 0 (nicht spontan). Das ist Fall 3: exotherm + ΔS < 0 → bei tiefen T spontan.",
          hints: [
            "Umkehrtemperatur: T* = ΔH/ΔS (Einheiten beachten!)",
            "ΔS in kJ umrechnen: −200 J = −0,200 kJ",
          ],
          difficulty: 3,
          tags: ["umkehrtemperatur", "rechnung", "fall-3"],
        },
      ],
    },
  ],
};
