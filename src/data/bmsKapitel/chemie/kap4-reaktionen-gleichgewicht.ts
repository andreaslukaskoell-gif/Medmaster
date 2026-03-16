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
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption: "Abb.: Grundlegende Reaktionstypen in der Chemie (OpenStax, CC BY 4.0)",
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
      content: `Jede chemische Reaktion folgt denselben Grundprinzipien: Energie muss investiert werden (Aktivierungsenergie), und am Ende ist die Welt energetisch anders als vorher. Bevor wir die verschiedenen Reaktionstypen katalogisieren, verstehen wir zuerst die drei Grundfragen, die jede Reaktion beantworten muss: **Läuft sie ab? Wie schnell? Und was passiert dabei?**

{{DIAGRAM:reaction-types}}

## 1. Was treibt Reaktionen an? — Die Gibbs-Energie

Eine chemische Reaktion ist ein Vorgang, bei dem Bindungen zwischen Atomen gebrochen und neu geknüpft werden. Atome werden dabei weder erzeugt noch vernichtet (Massenerhaltung, Lavoisier 1789). Aber warum laufen manche Reaktionen von selbst ab und andere nicht?

Die Antwort liegt in der **Gibbs-Energie** (freie Enthalpie):

**ΔG = ΔH − T·ΔS**

Diese Gleichung hat drei Bestandteile, die zusammenspielen:

- **ΔH (Enthalpie, Reaktionswärme):** Wird Wärme frei (ΔH < 0, exotherm) oder muss Wärme zugeführt werden (ΔH > 0, endotherm)? Exotherme Reaktionen setzen Energie frei, weil die Produkte energieärmere Bindungen haben als die Edukte.
- **ΔS (Entropie, Unordnung):** Nimmt die Unordnung zu (ΔS > 0, z. B. Gas entsteht) oder ab (ΔS < 0, z. B. zwei Gase bilden einen Feststoff)? Die Natur „bevorzugt" Unordnung — ein positives ΔS treibt Reaktionen an.
- **T (Temperatur in Kelvin):** Verstärkt den Entropie-Beitrag. Bei hoher Temperatur wird T·ΔS groß und kann ΔH überstimmen.

**Spontan (exergon)** heißt: ΔG < 0. **Nicht spontan (endergon):** ΔG > 0.

Damit ergeben sich vier Szenarien:

| ΔH | ΔS | ΔG | Beispiel |
|----|----|----|----------|
| < 0 (exotherm) | > 0 (mehr Unordnung) | **immer < 0** → spontan bei jeder T | Verbrennung von Glucose |
| < 0 (exotherm) | < 0 (weniger Unordnung) | bei **niedriger T** spontan | Gefrieren von Wasser |
| > 0 (endotherm) | > 0 (mehr Unordnung) | bei **hoher T** spontan | Auflösen von NH₄NO₃ in Wasser |
| > 0 (endotherm) | < 0 (weniger Unordnung) | **nie spontan** | Diamantsynthese unter Normaldruck |

> **Merke:** ΔG = ΔH − T·ΔS bestimmt, ob eine Reaktion spontan abläuft. Exotherm (ΔH < 0) hilft, ist aber nicht genug — auch die Entropie entscheidet. „Exotherm = spontan" ist eine klassische MedAT-Falle.

**Rechenbeispiel — Energiebilanz:**
Verbrennung von 1 mol Ethanol: C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O; ΔH = −1367 kJ/mol.
Bei 46 g Ethanol (= 1 mol) werden 1367 kJ frei. Physiologischer Brennwert: 29,7 kJ/g (= 7,1 kcal/g) — fast doppelt so viel wie Kohlenhydrate (4 kcal/g).

**Satz von Hess:** Die Reaktionsenthalpie ist wegunabhängig — nur Anfangs- und Endzustand zählen. ΔH_gesamt = ΣΔH_Teilschritte. Das erlaubt die Berechnung unbekannter ΔH-Werte aus Bildungsenthalpien.

Biologisch nutzt die Zelle **energetische Kopplung**: Die exergone ATP-Hydrolyse (ΔG° ≈ −30,5 kJ/mol) treibt endergone Biosynthesen an — so werden thermodynamisch ungünstige Prozesse möglich.

---

## 2. Was bestimmt die Geschwindigkeit? — Aktivierungsenergie und Katalyse

Dass eine Reaktion spontan ist (ΔG < 0), sagt nichts darüber, wie schnell sie abläuft. Holz verbrennt spontan an Luft (ΔG << 0), aber ohne Streichholz passiert nichts. Der Grund: Jede Reaktion muss eine **Aktivierungsenergie E_A** (Energiebarriere, die Edukte überwinden müssen) überwinden — die Energiebarriere zwischen Edukten und dem Übergangszustand.

{{IMAGE}}

Drei Faktoren bestimmen die Geschwindigkeit:

**Temperatur:** Höhere Temperatur → mehr Teilchen haben genug Energie, um E_A zu überschreiten. Faustregel (RGT-Regel): +10 °C verdoppelt bis verdreifacht die Geschwindigkeit.

**Konzentration:** Mehr Teilchen → mehr Zusammenstöße → mehr Reaktion (gilt nicht bei Enzym-Sättigung, 0. Ordnung).

**Katalysator:** Senkt E_A, indem er einen alternativen Reaktionsweg bereitstellt.

---

### Katalyse im Detail — Warum beide Richtungen schneller werden

Ein **Katalysator** senkt die Aktivierungsenergie, ohne selbst verbraucht zu werden und ohne ΔG oder ΔH zu verändern. Aber warum beschleunigt er Hin- UND Rückreaktion gleichermaßen?

Der Schlüssel liegt im Energieprofil: Die Aktivierungsenergie ist eine Barriere, die von beiden Seiten überwunden werden muss — von den Edukten zum Übergangszustand, aber auch von den Produkten zurück zum Übergangszustand. Senkt ein Katalysator die Barriere, ist sie von **beiden Seiten** niedriger. Deshalb kann ein Katalysator das Gleichgewicht nicht verschieben — er verkürzt nur die Zeit, bis es sich einstellt.

| Eigenschaft | Homogene Katalyse | Heterogene Katalyse | Enzymkatalyse |
|---|---|---|---|
| Phase | Katalysator in gleicher Phase | Verschiedene Phasen (fest/flüssig) | Wässrig (Protein + Substrat) |
| Selektivität | Mäßig | Variabel | Extrem hoch (Schlüssel-Schloss) |
| Beispiel | H⁺ in Lösung, NO (Ozon) | Fe beim Haber-Bosch, Pt im Auto | Katalase, Pepsin |
| Beschleunigung | 10²–10⁴ | 10³–10⁶ | 10⁶–10¹² |

Enzyme senken E_A durch den Enzym-Substrat-Komplex im aktiven Zentrum (induced-fit-Modell). Coenzyme (z. B. NAD⁺, FAD) fungieren als Elektronenüberträger.

> **Merke:** Katalysatoren senken E_A von beiden Seiten der Barriere → Hin- und Rückreaktion werden gleichermaßen beschleunigt. Gleichgewichtslage und ΔG bleiben unverändert.

---

## 3. Grundbegriffe und Reaktionsgleichungen

Jede chemische Reaktion lässt sich in einer Reaktionsgleichung darstellen:

- **Edukte (Reaktanten):** Ausgangsstoffe links vom Pfeil
- **Produkte:** Entstehende Stoffe rechts vom Pfeil
- **Stöchiometrische Koeffizienten:** Ganzzahlige Mol-Verhältnisse, die die Massenerhaltung sichern
- **Reaktionspfeil:** → (irreversibel) bzw. ⇌ (reversibel, Gleichgewicht)

---

## 4. Die Reaktionstypen — Anwendung der Prinzipien

Mit dem Verständnis von Energie (ΔG), Geschwindigkeit (E_A) und Katalyse können wir nun die Reaktionstypen als Muster der Atom-Umordnung einordnen:

### Die vier klassischen Typen

| Typ | Schema | Was passiert? | Wie erkennen? |
|-----|--------|---------------|---------------|
| **Synthese** | A + B → AB | Zwei Stoffe vereinigen sich | Weniger Produkte als Edukte |
| **Zersetzung** | AB → A + B | Ein Stoff zerfällt | Mehr Produkte als Edukte |
| **Substitution** | A + BC → AC + B | Ein Atom ersetzt ein anderes | Gleich viele Edukte/Produkte, Austausch |
| **Metathese** | AB + CD → AD + CB | Zwei Verbindungen tauschen Partner | Doppelter Partnertausch |

**Synthese:** 2 Na + Cl₂ → 2 NaCl. Biologisch: Kondensationsreaktionen (Peptid-, Esterbindung). Klinisch: Harnstoffsynthese im Harnstoffzyklus.

**Zersetzung (Analyse):** 2 H₂O₂ → 2 H₂O + O₂ (katalysiert durch Katalase). Klinisch: Katalase-Mangel (Akatalasämie) → Gewebeschäden durch H₂O₂-Akkumulation in der Mundschleimhaut.

**Substitution:** Ein Atom oder eine Gruppe ersetzt eine andere.
- *Nukleophile Substitution (Sₙ):* Elektronenreicher Angreifer (Nukleophil) ersetzt Abgangsgruppe. CH₃Br + OH⁻ → CH₃OH + Br⁻
- *Elektrophile Substitution:* Typisch für Aromaten (Nitrierung von Benzol)
- *Radikalische Substitution:* Über Radikale (Teilchen mit ungepaarten Elektronen), z. B. CH₄ + Cl₂ → CH₃Cl + HCl
- Biologisch: Transaminierungen (ALT, AST), Methylierungen (SAM als Methylgruppendonor)

**Metathese (Doppelumsatz):** NaCl + AgNO₃ → AgCl↓ + NaNO₃. Treibende Kraft: Bildung eines schwerlöslichen Niederschlags, eines Gases oder von Wasser.

> **Prüfungstipp:** Im MedAT wird oft eine Gleichung gegeben → Reaktionstyp bestimmen. Strategie: Zähle Edukte/Produkte und frage, was übertragen wird (Atome? Protonen? Elektronen?).

---

### Die zwei fundamentalen Transferreaktionen

Neben den vier klassischen Typen gibt es zwei übergeordnete Klassen, die nach dem **was übertragen wird** eingeteilt sind:

**Säure-Base-Reaktion (Brønsted, 1923) = H⁺-Transfer:**
Die Säure gibt ein Proton (H⁺) an die Base ab. Beispiel: HCl + H₂O → H₃O⁺ + Cl⁻. Konjugierte Paare: HCl/Cl⁻, NH₄⁺/NH₃, H₂CO₃/HCO₃⁻. Puffergleichgewichte (HCO₃⁻/CO₂ im Blut) beruhen auf diesem Prinzip.

**Redoxreaktion = e⁻-Transfer:**
Oxidation = Elektronenabgabe (Oxidationszahl ↑). Reduktion = Elektronenaufnahme (Oxidationszahl ↓). Gedächtnisstütze: **OIL RIG** — Oxidation Is Loss, Reduction Is Gain.

Wichtige Verwechslungsfalle: Das **Oxidationsmittel** wird selbst reduziert (nimmt e⁻ auf). Das **Reduktionsmittel** wird selbst oxidiert (gibt e⁻ ab).

> **Merke:** Säure-Base = H⁺-Transfer. Redox = e⁻-Transfer. Das sind die zwei fundamentalen Reaktionsklassen der Biochemie. OIL RIG: Oxidation Is Loss, Reduction Is Gain.

**Rechenbeispiel — Oxidationszahlen bestimmen:**
Zn + CuSO₄ → ZnSO₄ + Cu
- Zn: 0 → +2 (Oxidation, gibt 2 e⁻ ab → Reduktionsmittel)
- Cu: +2 → 0 (Reduktion, nimmt 2 e⁻ auf → Oxidationsmittel)
- S und O: unverändert (+6 bzw. −2)

Biologisch: Die Atmungskette ist eine Kaskade von Redoxreaktionen — Elektronen wandern von NADH (E° = −0,32 V) über Cytochrome auf O₂ (E° = +0,82 V). Die Spannung ΔE° = 1,14 V treibt die ATP-Synthese an.

---

### Fällungsreaktionen

Ein Spezialfall der Metathese: Zwei lösliche Salze reagieren zu einem unlöslichen **Niederschlag (Präzipitat)**. Die Löslichkeit wird durch das Löslichkeitsprodukt K_sp beschrieben — ist das Ionenprodukt Q > K_sp, fällt der Stoff aus.

Klinisch relevant:
- **Nierensteine:** CaC₂O₄-Fällung bei Hyperoxalurie (erhöhter Oxalatausscheidung)
- **Röntgenkontrastmittel:** BaSO₄ — unlöslich, daher nicht toxisch trotz Ba²⁺
- **Gichtanfall:** Harnsäurekristall-Fällung in Gelenken

> **Prüfungstipp:** „Welches ist das Oxidationsmittel?" ist eine MedAT-Klassikerfalle. Das Oxidationsmittel wird selbst reduziert. Immer zuerst Oxidationszahlen bestimmen, dann zuordnen.`,

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

      altfrage: {
        text: "Welche Aussage zur Gibbs-Energie (ΔG = ΔH − T·ΔS) ist richtig?",
        options: [
          { id: "a", text: "Eine Reaktion läuft spontan ab, wenn ΔG > 0" },
          { id: "b", text: "Exotherme Reaktionen sind immer spontan" },
          { id: "c", text: "Eine Reaktion ist spontan (exergon), wenn ΔG < 0" },
          { id: "d", text: "Die Entropie ΔS hat keinen Einfluss auf die Spontaneität" },
          { id: "e", text: "Endotherme Reaktionen können niemals spontan ablaufen" },
        ],
        correctOptionId: "c",
        explanation:
          "Eine Reaktion läuft spontan ab, wenn ΔG < 0 (exergon). ΔH allein reicht nicht: Endotherme Reaktionen mit großem Entropiegewinn (z. B. NH₄NO₃ lösen) können spontan sein, wenn T·ΔS den positiven ΔH-Term überwiegt.",
      },

      klinischerBezug:
        "Verbrennungsreaktionen (exotherm) liefern den physiologischen Kalorienwert von Nahrungsmitteln. ATP-Hydrolyse (exergon, ΔG° ≈ −30,5 kJ/mol) treibt endergone Biosynthesen an. Die Atmungskette ist eine Redoxkaskade, bei der Elektronen von NADH auf O₂ übertragen werden.",

      selfTest: [
        {
          question: "Welche der folgenden Reaktionen ist eine Synthesereaktion?",
          options: [
            "CaCO₃ → CaO + CO₂",
            "NaCl + AgNO₃ → AgCl + NaNO₃",
            "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
            "2 Mg + O₂ → 2 MgO",
            "HCl + NaOH → NaCl + H₂O",
          ],
          correctIndex: 3,
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
            "Substitution eines Atoms durch ein anderes ohne Ladungsänderung",
            "Bildung eines unlöslichen Niederschlags aus zwei Salzen",
            "Zersetzung einer Verbindung durch Wärmezufuhr",
            "Übertragung von Elektronen: eine Substanz oxidiert, eine andere reduziert sich",
          ],
          correctIndex: 4,
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
            "Sie senken die Aktivierungsenergie E_A, ohne ΔH oder ΔG zu ändern.",
            "Sie werden im Verlauf der Reaktion verbraucht und müssen nachgefüllt werden.",
            "Sie erhöhen ΔH der Reaktion und machen sie exothermer.",
            "Sie verschieben das chemische Gleichgewicht zugunsten der Produkte.",
            "Sie erhöhen ausschließlich die Temperatur des Systems.",
          ],
          correctIndex: 0,
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
          tags: ["thermodynamik", "enthalpie", "spontaneität"],
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
            "Neutralisation von HCl mit NaOH (Säure-Base)",
            "Fällung von AgCl aus AgNO₃ und NaCl (Metathese)",
            "Abbau von H₂O₂ durch Katalase zu H₂O und O₂ (Zersetzung)",
          ],
          correctIndex: 4,
          explanation:
            "Katalase ist ein Enzym (biologischer Katalysator), das die Zersetzung von Wasserstoffperoxid katalysiert: 2 H₂O₂ → 2 H₂O + O₂. H₂O₂ ist ein zellschädigendes Oxidationsmittel, das bei Stoffwechselreaktionen entsteht. Katalase senkt die Aktivierungsenergie dieser Zersetzungsreaktion enorm — die Reaktionsrate steigt um den Faktor 10⁷. Klinisch relevant: Ein Katalase-Mangel (Akatalasämie) kann zu Gewebeschäden durch H₂O₂-Akkumulation führen. Dieser Fall vereint Enzymkatalyse und Zersetzungsreaktion.",
          hints: [
            "Suche die Reaktion, bei der ein Protein (Enzym) die Reaktionsgeschwindigkeit erhöht.",
            "Katalase ist ein wichtiges Schutzsystem der Zelle gegen oxidativen Stress.",
          ],
          tags: ["enzymkatalyse", "katalase", "zersetzung"],
          difficulty: 3,
        },
        {
          question:
            "Welche Aussagen sind richtig?\n\n1. Bei einer Redoxreaktion werden Elektronen von einem Reaktionspartner auf einen anderen übertragen.\n2. Das Oxidationsmittel wird selbst oxidiert.\n3. Eine Säure-Base-Reaktion nach Brønsted ist durch H⁺-Übertragung charakterisiert.\n4. Katalysatoren senken die Aktivierungsenergie und verschieben das chemische Gleichgewicht zugunsten der Produkte.\n5. Bei einer exothermen Reaktion ist ΔH < 0.",
          options: ["Nur 1 und 2", "Nur 2 und 4", "Nur 1, 3 und 5", "Nur 1, 2 und 3", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussagen 1, 3 und 5 sind korrekt: Redoxreaktionen beinhalten Elektronentransfer (1). Brønsted-Säure-Base-Reaktionen sind durch Protonenübertragung definiert (3). Exotherme Reaktionen haben ΔH < 0 (5). Aussage 2 ist falsch — das Oxidationsmittel wird selbst reduziert (es nimmt Elektronen auf). Aussage 4 ist falsch — Katalysatoren senken zwar E_A, verschieben aber NICHT das Gleichgewicht; sie beschleunigen Hin- und Rückreaktion gleichermaßen.",
          difficulty: 2,
          tags: ["typ-k", "redox", "säure-base"],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 02: Reaktionskinetik
    // ─────────────────────────────────────────────
    {
      id: "ch-7-02",
      title: "Reaktionskinetik — Geschwindigkeit und Faktoren",
      imageUrl: "/images/bms/ch-enzymatische-reaktion.jpg",
      imageCaption: "Abb.: Enzym-Substrat-Komplex und katalysierte Reaktion (OpenStax, CC BY 4.0)",
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
      content: `Ob eine Reaktion thermodynamisch möglich ist, sagt noch nichts darüber aus, wie schnell sie abläuft. Die Reaktionskinetik beantwortet genau diese Frage — und ist damit die Grundlage für das Verständnis von Enzymwirkung, Medikamentenabbau und Haltbarkeit.

## Reaktionsgeschwindigkeit

Warum baut die Leber Alkohol mit konstanter Rate ab, während Medikamente exponentiell aus dem Blut verschwinden? Die Antwort liegt in der Reaktionskinetik. Die **Reaktionsgeschwindigkeit v** beschreibt, wie schnell sich Konzentrationen mit der Zeit ändern:

**v = Δ[Produkt] / Δt = −Δ[Edukt] / Δt** [mol·L⁻¹·s⁻¹]

Das negative Vorzeichen bei Edukten zeigt, dass deren Konzentration abnimmt. Die momentane Reaktionsgeschwindigkeit ist der Grenzwert des Differenzenquotienten (Steigung der Sekante) (Ableitung der Konzentrations-Zeit-Kurve). Im Verlauf einer Reaktion nimmt v in der Regel ab, weil die Eduktkonzentrationen sinken.


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

> **Prüfungstipp:** Die Halbwertszeit-Formeln der 0. und 1. Ordnung werden im MedAT besonders gerne abgefragt. Merke: t₁/₂ = ln 2/k (1. Ordnung, konzentrationsunabhängig) vs. t₁/₂ = [A]₀/(2k) (0. Ordnung, konzentrationsabhängig). Das Paradebeispiel: Ethanol = 0. Ordnung, Medikamente = 1. Ordnung.

- **0. Ordnung (v = k):** v konzentrationsunabhängig. [A] sinkt linear. Halbwertszeit t₁/₂ = [A]₀/(2k) — konzentrationsabhängig. Beispiel: Ethanol-Abbau in der Leber (~0,1–0,15 ‰/h, enzymgesättigt durch ADH/ALDH, Alkohol-/Aldehyddehydrogenase).
- **1. Ordnung (v = k · [A]):** Verdopplung von [A] verdoppelt v. [A] = [A]₀ · e^(−kt), sinkt exponentiell. t₁/₂ = ln 2/k ≈ 0,693/k ist konzentrationsunabhängig. Beispiel: radioaktiver Zerfall, Pharmakokinetik (Lehre vom Arzneimittelabbau im Körper).
- **2. Ordnung (v = k · [A]²):** Verdopplung von [A] vervierfacht v. t₁/₂ = 1/(k·[A]₀) — konzentrationsabhängig.

**Rechenbeispiel — Halbwertszeit 1. Ordnung:**
Medikament mit k = 0,0693 h⁻¹. t₁/₂ = 0,693 / 0,0693 = 10 h. Nach 10 h: 50 %. Nach 20 h: 25 %. Nach 30 h: 12,5 %. Steady-State nach ~5 Halbwertszeiten (< 3 % Rest).

{{IMAGE}}

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**1. Konzentration:** Höhere Konzentration → mehr Kollisionen pro Zeiteinheit → höheres v (gilt nicht für 0. Ordnung). Grundlage: Stoßtheorie — nur wirksame Zusammenstöße (Energie ≥ E_A + richtige Orientierung) führen zur Reaktion.

**2. Temperatur (RGT-Regel):** Erhöhung um 10 °C verdoppelt bis verdreifacht v (Q₁₀ = 2–3). Begründung: Maxwell-Boltzmann-Verteilung (Geschwindigkeitsverteilung der Teilchen) verschiebt sich — mehr Moleküle überschreiten E_A. Bei Enzymen gilt dies nur bis zur Denaturierungstemperatur (~42 °C beim Menschen).

**Rechenbeispiel — RGT:** v₂₀°C = 2 mmol/s, Q₁₀ = 2,5. Bei 40 °C (+20 °C): v = 2 × 2,5² = 12,5 mmol/s — über 6× schneller.

**3. Aktivierungsenergie E_A (Arrhenius-Gleichung, beschreibt Temperaturabhängigkeit von k):**
k = A · e^(−E_A / RT)
- A = Frequenzfaktor (Stoßfrequenz × Geometriefaktor)
- R = 8,314 J·mol⁻¹·K⁻¹; T in Kelvin
- Je kleiner E_A, desto größer k und damit v.
- Katalysatoren senken E_A → k steigt exponentiell → Reaktion wird schneller.
- E_A ist die Differenz zwischen Eduktniveau und Übergangszustand — nicht identisch mit ΔH!

**4. Oberfläche:** Bei heterogenen Reaktionen: Größere Kontaktfläche → höheres v. Fein pulverisierte Feststoffe reagieren deutlich schneller (Staubexplosionen). Klinisch: Mikronisierung (Zerkleinerung in Mikropartikel) von Tabletten erhöht die Bioverfügbarkeit (Anteil des Wirkstoffs, der ins Blut gelangt) schlecht löslicher Wirkstoffe.

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
| Unkompetitiv | ↓ | ↓ | nein | Lithium/IMPase (Inositolmonophosphatase) |

> **Prüfungstipp:** Im MedAT wird die kompetitive vs. nicht-kompetitive Hemmung sehr häufig gefragt. Schlüsselfrage: „Durch Substratüberschuss aufhebbar?" — Ja = kompetitiv (Kₘ↑, vₘₐₓ gleich), Nein = nicht-kompetitiv (Kₘ gleich, vₘₐₓ↓). Lineweaver-Burk: Kompetitiv dreht am x-Achsenabschnitt, nicht-kompetitiv am y-Achsenabschnitt.

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

      altfrage: {
        text: "Was beschreibt die Michaelis-Menten-Konstante Kₘ?",
        options: [
          { id: "a", text: "Die maximale Reaktionsgeschwindigkeit vₘₐₓ" },
          {
            id: "b",
            text: "Die Substratkonzentration, bei der die Reaktionsgeschwindigkeit vₘₐₓ/2 beträgt",
          },
          { id: "c", text: "Die Gleichgewichtskonstante der Gesamtreaktion" },
          { id: "d", text: "Die Aktivierungsenergie der enzymatischen Reaktion" },
          { id: "e", text: "Die Anzahl der aktiven Zentren pro Enzymmolekül" },
        ],
        correctOptionId: "b",
        explanation:
          "Kₘ ist die Substratkonzentration [S], bei der v = vₘₐₓ/2. Ein kleines Kₘ bedeutet hohe Affinität (Sättigung schon bei niedrigen [S]). Kompetitive Hemmstoffe erhöhen den apparenten Kₘ, ohne vₘₐₓ zu verändern.",
      },

      klinischerBezug:
        "Ethanol-Abbau durch Alkoholdehydrogenase (0. Ordnung, ~0,1 ‰/h) und Pharmakokinetik (1. Ordnung, konstante Halbwertszeit). Fieber erhöht Immunreaktionen via RGT-Prinzip. Michaelis-Menten-Kinetik ist Basis für Enzyminhibitor-Pharmaka (Statine, ACE-Hemmer).",

      selfTest: [
        {
          question: "Welche Einheit hat die Reaktionsgeschwindigkeit v?",
          options: ["mol · L⁻¹ · s⁻¹", "mol / L", "J / mol", "s⁻¹", "L · mol⁻¹"],
          correctIndex: 0,
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
          options: ["5 min", "10 min", "7 min", "14 min", "20 min"],
          correctIndex: 1,
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
            "Weil die Körpertemperatur konstant ist und E_A nicht beeinflusst.",
            "Weil Ethanol mit Wasser reagiert und kein Enzym beteiligt ist.",
            "Weil die beteiligten Enzyme (ADH, ALDH) bei typischen Blutalkoholspiegeln gesättigt sind.",
            "Weil Ethanol eine kleine Molmasse hat und besonders schnell reagiert.",
          ],
          correctIndex: 3,
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
            "Er macht die Reaktion exotherm, wenn sie zuvor endotherm war.",
            "Er erhöht R (Gaskonstante) für diese spezifische Reaktion.",
            "Er senkt E_A, wodurch k und damit die Reaktionsgeschwindigkeit steigen.",
          ],
          correctIndex: 4,
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
            "v ≈ vₘₐₓ, da das Enzym gesättigt ist (0. Ordnung).",
            "v ≈ 0, da das Enzym inhibiert wird.",
            "v ≈ (vₘₐₓ/Kₘ)·[S], da lineare Kinetik gilt (1. Ordnung).",
            "Kₘ steigt auf den Wert von [S].",
            "vₘₐₓ sinkt auf die Hälfte.",
          ],
          correctIndex: 0,
          explanation:
            "In der Michaelis-Menten-Gleichung v = vₘₐₓ·[S]/(Kₘ+[S]) gilt: Wenn [S] sehr viel größer als Kₘ ist, wird der Nenner (Kₘ+[S]) ≈ [S]. Damit vereinfacht sich die Gleichung zu v ≈ vₘₐₓ·[S]/[S] = vₘₐₓ. Die Reaktion läuft mit maximaler Geschwindigkeit, alle aktiven Zentren des Enzyms sind besetzt — Sättigungszustand. Kinetisch verhält sich das System wie eine Reaktion 0. Ordnung: v ist konstant und unabhängig von [S]. Dies ist das Prinzip hinter dem Ethanol-Metabolismus bei hohen Blutalkoholspiegeln.",
          hints: [
            "Wenn [S] ≫ Kₘ: Was passiert im Nenner (Kₘ + [S])?",
            "Sättigung bedeutet: Alle aktiven Zentren sind belegt.",
          ],
          tags: ["michaelis-menten", "enzymkinetik", "sättigung"],
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
        {
          question: "Welche Aussage über Reaktionskinetik ist FALSCH?",
          options: [
            "Die RGT-Regel besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit verdoppelt bis verdreifacht.",
            "Die Halbwertszeit einer Reaktion 1. Ordnung ist konzentrationsunabhängig: t₁/₂ = ln 2 / k.",
            "In der Arrhenius-Gleichung k = A·e^(−E_A/RT) führt eine Senkung von E_A zu einem kleineren k-Wert.",
            "Bei der Michaelis-Menten-Kinetik gilt: Wenn [S] ≫ Kₘ, dann ist v ≈ vₘₐₓ (Sättigungskinetik, 0. Ordnung).",
            "Der Ethanolabbau folgt bei üblichen Blutalkoholspiegeln einer Kinetik 0. Ordnung, weil die Enzyme ADH und ALDH gesättigt sind.",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist FALSCH: In der Arrhenius-Gleichung k = A·e^(−E_A/RT) steht E_A mit negativem Vorzeichen im Exponenten. Eine Senkung von E_A macht den Exponenten weniger negativ, was zu einem GRÖSSEREN e-Wert und damit einem GRÖSSEREN k führt — nicht einem kleineren. Genau das ist der Effekt eines Katalysators: E_A sinkt → k steigt → Reaktion wird schneller. Alle anderen Aussagen sind korrekt.",
          difficulty: 2,
          tags: ["falsch-aussage", "kinetik", "arrhenius"],
        },
      ],
      diagram: "enzyme-substrate",
    },

    // ch-7-03 archiviert → _archiv/chemie/kap4-archived-uks.ts (Duplikat von ch-3s-02 + beyond Stichwortliste scope)
    // ch-7-04 entfernt (Duplikat — Inhalt in ch-8-02 + ch-8-03 ausfuehrlicher)
    // ch-8-01 entfernt (Duplikat — Inhalt in ch-7-02 als Superset enthalten)

    {
      id: "ch-8-02",
      title: "Chemisches Gleichgewicht und Massenwirkungsgesetz",
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption: "Abb.: Chemisches Gleichgewicht und Massenwirkungsgesetz (OpenStax, CC BY 4.0)",
      diagram: "equilibrium",
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
      content: `Viele chemische Reaktionen laufen nicht bis zur vollständigen Umsetzung der Edukte, sondern stellen sich auf einen Gleichgewichtszustand ein. Dieses Konzept erklärt, warum Puffer funktionieren, wie der Körper den Blut-pH reguliert und weshalb Enzyme ihre Substrate nie vollständig umsetzen.

## Das dynamische Gleichgewicht

Sauerstoffabgabe im Gewebe, Pufferwirkung im Blut, Enzym-Substrat-Bindung — all diese Prozesse beruhen auf chemischen Gleichgewichten. Viele chemische Reaktionen sind reversibel: Die Produkte können wieder zu Edukten zurückreagieren. Man schreibt dies mit einem Doppelpfeil:

**A + B ⇌ C + D**

Anfänglich dominiert die Hinreaktion. Mit steigenden Produktkonzentrationen nimmt die Rückreaktion zu. Irgendwann werden Hin- und Rückreaktion gleich schnell — es stellt sich ein **dynamisches Gleichgewicht** ein. Dynamisch bedeutet: Beide Reaktionen laufen weiterhin ab, aber ihre Geschwindigkeiten sind gleich. Makroskopisch scheint die Reaktion zu stehen; mikroskopisch herrscht rege Aktivität.

Das Gleichgewicht ist kein statischer Zustand. Isotopen-Tracerexperimente zeigen, dass im Gleichgewicht ständig Moleküle zwischen Edukt- und Produktzustand wechseln — nur netto findet keine Änderung statt.

> **Merke:** Dynamisches Gleichgewicht = v_hin = v_rück. Konzentrationen sind konstant (aber nicht gleich!). Beide Reaktionsrichtungen laufen weiterhin ab.


**Zeitlicher Verlauf bis zum Gleichgewicht:**
- Beginn: [Edukte] hoch, [Produkte] = 0 → v_hin maximal, v_rück = 0
- Verlauf: [Edukte] sinkt, [Produkte] steigt → v_hin sinkt, v_rück steigt
- Gleichgewicht: v_hin = v_rück → Konzentrationen bleiben konstant
- Je höher E_A, desto länger dauert die Einstellung (Kinetik). Ein Katalysator beschleunigt die Einstellung, ändert aber die Lage nicht.

{{DIAGRAM:equilibrium}}

## Das Massenwirkungsgesetz (MWG)

Das **Massenwirkungsgesetz** (Guldberg und Waage, 1864) formuliert die quantitative Bedingung für das chemische Gleichgewicht. Für die allgemeine Reaktion:

**aA + bB ⇌ cC + dD**

gilt die Gleichgewichtskonstante K_c (konzentrationsbasiert):

**K_c = [C]^c · [D]^d / ([A]^a · [B]^b)**

Die eckigen Klammern bezeichnen Gleichgewichtskonzentrationen in mol/L, die Hochzahlen sind die stöchiometrischen Koeffizienten. Wichtig: Reine Feststoffe und flüssiges Wasser (bei wässrigen Reaktionen) tauchen nicht im MWG auf, da ihre Aktivität (näherungsweise) 1 ist.

**Beispiel (MedAT-relevant):** Für **N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)** lautet das Massenwirkungsgesetz:
**K = [NH₃]² / ([N₂]·[H₂]³)** — die stöchiometrischen Koeffizienten werden zu Exponenten.

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

> **Prüfungstipp:** Im MedAT wird gerne gefragt: „K_c = 10⁻⁴ — was bedeutet das?" Antwort: Gleichgewicht stark auf Eduktseite. Zweite Falle: „Großes K_c = schnelle Reaktion?" — Nein! K beschreibt Lage, nicht Geschwindigkeit. Auch: Koeffizienten werden zu Exponenten im MWG, nicht zu Faktoren.

## K_p und K_c bei Gasreaktionen

Für Gasreaktionen ist es praktischer, mit Drücken statt Konzentrationen zu arbeiten — K_p beschreibt das gleiche Gleichgewicht wie K_c, nur in Druckeinheiten. Für Gasreaktionen kann man statt Konzentrationen Partialdrücke verwenden:

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

Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin: Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂ — Sauerstoff wird geladen. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Hämoglobin zeigt dabei **Kooperativität**: Die Bindung des ersten O₂ erleichtert die Bindung der nächsten → sigmoidale (S-förmige) Bindungskurve statt hyperbeler Kurve. Le Chatelier steuert so die O₂-Abgabe automatisch nach Bedarf.

> **Prüfungstipp:** Feststoffe und Wasser (als Lösungsmittel) erscheinen NICHT im MWG-Ausdruck — ihre Aktivität ist näherungsweise 1. Diese Regel wird im MedAT gerne als Stolperfalle eingebaut.`,

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
        "Egal wie viel Edukt du zugibst — K ändert sich nicht. Die Lage verschiebt sich, aber das Gleichgewicht 'weiß' seinen Wert.",
        "Exotherm + höhere T → kleineres K (Gleichgewicht verschiebt zu Edukten).",
        "Hämoglobin-O₂-Bindung folgt MWG: pO₂ steuert die Lage des Gleichgewichts.",
      ],

      altfrage: {
        text: "Wie lautet der korrekte Ausdruck für die Gleichgewichtskonstante K_c der Reaktion N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?",
        options: [
          { id: "a", text: "K_c = [N₂]·[H₂]³ / [NH₃]²" },
          { id: "b", text: "K_c = [NH₃]² / ([N₂]·[H₂]³)" },
          { id: "c", text: "K_c = [NH₃] / ([N₂]·[H₂])" },
          { id: "d", text: "K_c = 2[NH₃] / ([N₂] + 3[H₂])" },
          { id: "e", text: "K_c = [N₂]·[H₂] / [NH₃]" },
        ],
        correctOptionId: "b",
        explanation:
          "Das Massenwirkungsgesetz setzt Produkte in den Zähler und Edukte in den Nenner, jeweils potenziert mit den stöchiometrischen Koeffizienten: K_c = [NH₃]² / ([N₂]·[H₂]³). Option A ist der Kehrwert (K der Rückreaktion).",
      },

      klinischerBezug:
        "Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin (Hb + O₂ ⇌ HbO₂): In der Lunge (hoher pO₂) liegt Q < K → Sauerstoff wird geladen. Im Gewebe (niedriger pO₂) gilt Q > K → O₂ wird abgegeben. Kooperativität (sigmoidale Bindungskurve) ermöglicht eine besonders effiziente O₂-Abgabe im Gewebe.",

      selfTest: [
        {
          question:
            "Welcher Ausdruck ist das korrekte Massenwirkungsgesetz für 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?",
          options: [
            "K_c = [SO₂]²·[O₂] / [SO₃]²",
            "K_c = [SO₂]·[O₂] / [SO₃]",
            "K_c = [SO₃] / ([SO₂]·[O₂])",
            "K_c = 2[SO₃] / (2[SO₂]·[O₂])",
            "K_c = [SO₃]² / ([SO₂]²·[O₂])",
          ],
          correctIndex: 4,
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
            "Das Gleichgewicht liegt stark auf der Seite der Edukte.",
            "Die Reaktion ist vollständig — nahezu alle Edukte werden zu Produkten.",
            "Edukte und Produkte liegen in gleichen Konzentrationen vor.",
            "Die Reaktion ist sehr schnell.",
            "K_c < 1 bedeutet, die Reaktion ist verboten.",
          ],
          correctIndex: 0,
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
            "ΔG° gibt die Reaktionsgeschwindigkeit an.",
            "Wenn K > 1, dann ist ΔG° negativ — die Reaktion ist thermodynamisch begünstigt.",
            "Wenn ΔG° > 0, dann ist K > 1.",
            "Die Formel gilt nur für endotherme Reaktionen.",
          ],
          correctIndex: 2,
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
            "Weil das MWG nur für Gase gilt.",
            "Weil H₂O immer vollständig reagiert.",
            "Weil die Aktivität des reinen Lösungsmittels näherungsweise 1 ist und keinen Beitrag leistet.",
            "Weil Wasser keine Konzentration hat.",
          ],
          correctIndex: 3,
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
            "K_c wird negativ.",
            "K_c wird genau 1.",
            "K_c nimmt ab, weil bei exothermen Reaktionen höhere Temperatur das Gleichgewicht zu den Edukten verschiebt.",
          ],
          correctIndex: 4,
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
            "N₂ + 3H₂ ⇌ 2NH₃",
            "N₂ + H₂ ⇌ NH₃",
            "NH₃ ⇌ N₂ + H₂",
            "2N₂ + 3H₂ ⇌ 2NH₃",
            "2NH₃ ⇌ N₂ + 3H₂",
          ],
          correctIndex: 0,
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
      imageUrl: "/images/bms/ch-chemische-reaktionen.jpg",
      imageCaption:
        "Abb.: Le Chatelier-Prinzip und Gleichgewichtsverschiebung (OpenStax, CC BY 4.0)",
      content: `Wenn ein chemisches Gleichgewicht einmal eingestellt ist, bleibt es nicht zwingend dort stehen. Temperatur, Druck und Konzentrationsänderungen können das Gleichgewicht verschieben — und genau dieses Verhalten beschreibt eines der nützlichsten Prinzipien der Chemie.

## Das Prinzip von Le Chatelier

Wie steuert der Körper den Blut-pH, obwohl ständig Säuren und Basen anfallen? Die Antwort liefert das Prinzip von Le Chatelier. Das **Prinzip von Le Chatelier** (auch: Prinzip des kleinsten Zwangs, 1884) lautet:

> Wird ein System im chemischen Gleichgewicht durch äußere Einwirkung gestört, so verschiebt es sich in diejenige Richtung, die der Störung entgegenwirkt.

Dieses Prinzip ist eines der wichtigsten Konzepte der physikalischen Chemie — es erlaubt qualitative Vorhersagen über die Verschiebung von Gleichgewichten ohne aufwendige Berechnungen.


{{DIAGRAM:le-chatelier}}

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

> **Prüfungstipp:** Kernunterschied für den MedAT: Konzentrations- und Druckänderungen ändern nur Q (nicht K). Temperaturänderungen ändern K selbst. Häufige Frage: „Was passiert mit K bei Druckerhöhung?" — Antwort: Nichts! Nur die Lage des Gleichgewichts verschiebt sich.

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

> **Prüfungstipp:** Le Chatelier wird im MedAT oft über das Blutpuffer-System abgefragt: „Was passiert bei Hyperventilation?" → CO₂ sinkt → Gleichgewicht nach links → weniger H⁺ → pH steigt → Alkalose. Auch der Haber-Bosch-Prozess ist Dauerbrenner (Druck, Temperatur, Katalysator — was ändert K, was nicht?).

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

      altfrage: {
        text: "Wie wirkt sich ein Katalysator auf das chemische Gleichgewicht aus?",
        options: [
          { id: "a", text: "Er verschiebt das Gleichgewicht auf die Produktseite" },
          { id: "b", text: "Er erhöht die Gleichgewichtskonstante K_c" },
          { id: "c", text: "Er beschleunigt die Hinreaktion, aber nicht die Rückreaktion" },
          {
            id: "d",
            text: "Er beschleunigt die Gleichgewichtseinstellung, ohne K_c oder die Gleichgewichtslage zu ändern",
          },
          { id: "e", text: "Er senkt die Reaktionsenthalpie ΔH" },
        ],
        correctOptionId: "d",
        explanation:
          "Ein Katalysator senkt die Aktivierungsenergie von Hin- und Rückreaktion gleichermaßen. Er ändert weder K_c noch die Gleichgewichtslage, sondern beschleunigt nur die Einstellung des Gleichgewichts. Beim Haber-Bosch-Verfahren ermöglicht der Fe-Katalysator wirtschaftliche Ausbeuten.",
      },

      klinischerBezug:
        "Das Blut-Puffersystem CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ folgt direkt dem Prinzip von Le Chatelier: Bei metabolischer Azidose steigt [H⁺], das Gleichgewicht verschiebt sich links (CO₂ entsteht), die Atemfrequenz steigt (respiratorische Kompensation). Respiratorische Alkalose durch Hyperventilation (CO₂-Abatmung) verschiebt das Gleichgewicht rechts, [H⁺] sinkt, pH steigt. Intensivmediziner steuern Beatmungsparameter (pCO₂) gezielt, um den pH-Wert des Blutes im physiologischen Bereich (7,35–7,45) zu halten.",

      selfTest: [
        {
          question:
            "Bei der Reaktion 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) wird der Druck erhöht. Was passiert?",
          options: [
            "Das Gleichgewicht verschiebt sich zu SO₂ und O₂ (Edukte), weil mehr Mole entstehen.",
            "Der Druck hat keinen Einfluss, weil Δn = 0 ist.",
            "Das Gleichgewicht verschiebt sich zu SO₃ (Produkte), weil die Produktseite weniger Gasmoleküle hat.",
            "K_c steigt bei höherem Druck.",
            "Nur die Reaktionsgeschwindigkeit ändert sich, nicht die Gleichgewichtslage.",
          ],
          correctIndex: 2,
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
            "Bei konstanter Temperatur ist K_c unabhängig von der Konzentration.",
            "Katalysatoren verschieben das Gleichgewicht zugunsten der Produkte.",
            "Wird ein Gleichgewichtssystem gestört, verschiebt es sich so, dass die Störung verkleinert wird.",
            "Das Gleichgewicht liegt immer auf der Seite mit den energieärmeren Stoffen.",
          ],
          correctIndex: 3,
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
            "Temperaturänderungen beeinflussen K_c bei endothermen Reaktionen nicht.",
            "K_c sinkt, Gleichgewicht verschiebt sich zu B.",
            "K_c steigt, Gleichgewicht verschiebt sich zu B.",
          ],
          correctIndex: 4,
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
            "Das Gleichgewicht verschiebt sich kontinuierlich zu NH₃ — höhere Ausbeute.",
            "K_c vergrößert sich, weil NH₃ entfernt wird.",
            "Das Gleichgewicht verschiebt sich zu N₂ und H₂ (Edukte).",
            "Es hat keinen Einfluss, weil K_c konstant ist.",
            "Die Reaktion stoppt, weil kein NH₃ mehr vorhanden ist.",
          ],
          correctIndex: 0,
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
            "Kein Einfluss, da Partialdrücke der Reaktanten unverändert bleiben.",
            "Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmolekülen.",
            "K_c steigt, weil der Gesamtdruck steigt.",
            "Die Reaktionsgeschwindigkeit halbiert sich.",
          ],
          correctIndex: 1,
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
            "[HCO₃⁻] steigt → pH sinkt.",
            "[CO₂] sinkt → Gleichgewicht verschiebt sich nach links → [H⁺] sinkt → pH steigt (Alkalose).",
            "Keine Auswirkung, da CO₂ kein Reaktant ist.",
            "[H⁺] steigt → pH sinkt (Azidose).",
          ],
          correctIndex: 2,
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
            "Weil der Eisenkatalysator nur bei 400 °C aktiv ist.",
            "Weil bei niedrigen Temperaturen die Reaktion kinetisch zu langsam ist — Kompromiss zwischen K_c und Reaktionsgeschwindigkeit.",
            "Weil NH₃ bei 150 °C nicht flüssig wird.",
          ],
          correctIndex: 3,
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
      imageUrl: "/images/bms/ch-atp.jpg",
      imageCaption: "Abb.: ATP-Struktur und Energieübertragung in der Zelle (OpenStax, CC BY 4.0)",
      stichworte: [
        "Enthalpie",
        "Entropie",
        "Gibbs-Energie",
        "exotherm",
        "endotherm",
        "Hess'scher Satz",
        "Bildungsenthalpie",
        "Spontaneität",
        "Delta-G",
        "Delta-H",
        "Delta-S",
      ],
      content: `Die Thermodynamik beantwortet die grundlegendste Frage der Chemie: Warum laufen manche Reaktionen von selbst ab, andere aber nicht? Drei Größen — Enthalpie, Entropie und Gibbs-Energie — bilden zusammen das Werkzeug, das jede Reaktion thermodynamisch einordnet.

## Enthalpie (ΔH) — Wärme bei konstantem Druck

Warum kühlt ein Kältepack, obwohl kein Strom fließt? Warum kann dein Körper aus einfachen Aminosäuren riesige Proteine aufbauen, obwohl das thermodynamisch „bergauf" geht? Drei Größen liefern die Antwort: Enthalpie, Entropie und Gibbs-Energie. Wer sie versteht, versteht die Triebkraft hinter jeder Reaktion — von der Verbrennung im Bunsenbrenner bis zur ATP-Synthese in der Mitochondrienmembran.

Die **Enthalpie** H ist eine thermodynamische Zustandsgröße (Zustandsgröße bedeutet: ihr Wert hängt nur vom aktuellen Zustand ab, nicht davon, wie das System dorthin gelangt ist). Die Enthalpieänderung ΔH beschreibt die Wärmemenge, die bei konstantem Druck zwischen System und Umgebung ausgetauscht wird.

**Exotherme Reaktionen (ΔH < 0):** Das System gibt Wärme an die Umgebung ab — die Produkte sind energieärmer als die Edukte. Du spürst das als Erwärmung. Beispiele: Verbrennung von Methan (ΔH = −890 kJ/mol), Neutralisation starker Säuren und Basen (ΔH ≈ −57 kJ/mol), Kristallisation aus einer übersättigten Lösung.

**Endotherme Reaktionen (ΔH > 0):** Das System nimmt Wärme aus der Umgebung auf — die Produkte sind energiereicher als die Edukte. Du spürst das als Abkühlung. Beispiele: Auflösung von NH₄NO₃ in Wasser (Kältepack, ΔH = +25,7 kJ/mol), thermische Zersetzung von CaCO₃ zu CaO + CO₂ (ΔH = +178 kJ/mol), Photosynthese.

{{IMAGE}}

{{DIAGRAM:energy-diagram}}

### Bildungsenthalpie (ΔH_f°)

Die **Standard-Bildungsenthalpie** ΔH_f° gibt die Enthalpieänderung an, wenn 1 mol einer Verbindung aus ihren Elementen im Standardzustand (25 °C, 1 bar) gebildet wird. Per Definition gilt: ΔH_f° = 0 für jedes Element in seinem stabilsten Zustand (z. B. O₂(g), C(Graphit), Fe(s), N₂(g)). Das ist der Referenzpunkt — wie die Nullmarke auf einem Thermometer.

Wichtige Bildungsenthalpien:
| Verbindung | ΔH_f° (kJ/mol) |
|---|---|
| H₂O(l) | −285,8 |
| CO₂(g) | −393,5 |
| NH₃(g) | −46,1 |
| CH₄(g) | −74,8 |
| C₆H₁₂O₆(s) (Glucose) | −1274 |

### Hess'scher Satz (Satz der konstanten Wärmesumme)

**Formulierung:** Die Enthalpieänderung einer Reaktion hängt nur vom Anfangs- und Endzustand ab, nicht vom Reaktionsweg. Man kann ΔH also über beliebige Zwischenstufen berechnen — ob die Reaktion in einem Schritt oder in zehn Teilschritten abläuft, das Gesamt-ΔH ist identisch.

**Berechnung über Bildungsenthalpien:**
ΔH°(Reaktion) = Σ ΔH_f°(Produkte) − Σ ΔH_f°(Edukte)

**Beispiel — Verbrennung von Methan:**
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

ΔH° = [ΔH_f°(CO₂) + 2·ΔH_f°(H₂O)] − [ΔH_f°(CH₄) + 2·ΔH_f°(O₂)]
ΔH° = [−393,5 + 2·(−285,8)] − [−74,8 + 0]
ΔH° = −965,1 − (−74,8) = **−890,3 kJ/mol**

Der Hess'sche Satz ist besonders nützlich, wenn ΔH einer Reaktion nicht direkt messbar ist — etwa bei der Bildung von Benzol aus Kohlenstoff und Wasserstoff, die im Labor nie sauber in einem Schritt abläuft.

### Kalorische Verwertung von Nährstoffen

Im Körper werden Nährstoffe oxidiert. Der physiologische Brennwert (kalorische Verwertung) gibt an, wie viel Energie pro Gramm freigesetzt wird:

| Nährstoff | Brennwert | Warum? |
|---|---|---|
| Fett | **9 kcal/g** (37,7 kJ/g) | Hoher H-Anteil, stark reduziert → viel Oxidationsenergie |
| Kohlenhydrate | **4 kcal/g** (16,7 kJ/g) | Teilweise bereits oxidiert (C-OH-Gruppen) |
| Protein | **4 kcal/g** (16,7 kJ/g) | Ähnlich wie KH; N wird als Harnstoff ausgeschieden (nicht vollständig oxidiert) |
| Ethanol | **7 kcal/g** (29,3 kJ/g) | Zwischen Fett und KH; klinisch relevant bei Alkoholikern |

Fett liefert also pro Gramm mehr als doppelt so viel Energie wie Kohlenhydrate oder Protein. Der Grund: Fettsäuren sind stark reduziert (viele C-H-Bindungen), sodass bei der Oxidation besonders viel Energie frei wird.

> **Merke:** ΔH < 0 = exotherm (Wärme frei), ΔH > 0 = endotherm (Wärme aufgenommen). Bildungsenthalpie von Elementen im Standardzustand ist per Definition 0. Der Hess'sche Satz erlaubt die Berechnung von ΔH über Umwege. Fett liefert 9 kcal/g — mehr als doppelt so viel wie KH oder Protein (je 4 kcal/g).

---

## Entropie (ΔS) — Maß für Unordnung

Die **Entropie** S quantifiziert die Anzahl der möglichen Mikrozustände (Anordnungen auf molekularer Ebene) eines Systems. Boltzmann fasste das in einer berühmten Gleichung zusammen: **S = k_B · ln W** (k_B = Boltzmann-Konstante, W = Anzahl der Mikrozustände). Vereinfacht: Entropie misst, wie viele verschiedene Wege es gibt, die Energie und Materie im System zu verteilen — je mehr Möglichkeiten, desto größer S.

**Entropie steigt (ΔS > 0) bei:**
- **Auflösung eines Feststoffs** → Ionen verlassen das geordnete Kristallgitter und verteilen sich in Lösung
- **Gasentwicklung** → enorm viel mehr Mikrozustände durch Volumenvergrößerung
- **Temperaturerhöhung** → Teilchen bewegen sich schneller, besetzen mehr Energieniveaus
- **Vergrößerung der Teilchenzahl** → z. B. 2 NH₃ → N₂ + 3 H₂ (2 Mol → 4 Mol Gas)

**Entropie sinkt (ΔS < 0) bei:**
- Kristallisation (flüssig → fest → weniger Bewegungsfreiheit)
- Polymerisation (viele kleine Monomere → ein großes Polymer)
- Assoziation (zwei getrennte Teilchen → ein Komplex)

**Warum löst sich Zucker in Wasser?** Obwohl keine Ladungen entstehen, ist ΔS_Mischung > 0: Die Saccharose-Moleküle verteilen sich zwischen den Wassermolekülen, und die Gesamtzahl der möglichen Anordnungen steigt drastisch. Diese Mischungsentropie ist die treibende Kraft hinter vielen Lösevorgängen.

### Zweiter Hauptsatz der Thermodynamik

Die Gesamtentropie des Universums (System + Umgebung) nimmt bei jedem spontanen Vorgang zu: **ΔS_Universum = ΔS_System + ΔS_Umgebung > 0**. Ein lokaler Entropierückgang (z. B. Bildung eines geordneten Kristalls) ist nur möglich, wenn die Umgebung gleichzeitig mehr Entropie gewinnt — etwa durch die freigesetzte Kristallisationswärme.

**Dritter Hauptsatz:** Bei T = 0 K (absolutem Nullpunkt) ist die Entropie eines perfekten Kristalls S = 0. Das ist der absolute Referenzpunkt, von dem aus man absolute Entropiewerte berechnen kann.

> **Merke:** ΔS > 0 = mehr Unordnung → begünstigt Spontaneität. ΔS < 0 = mehr Ordnung → hemmt Spontaneität. Die Gesamtentropie des Universums kann nie abnehmen (2. Hauptsatz). Mischungsentropie erklärt, warum sich Stoffe auch ohne Energiegewinn vermischen.

---

## Gibbs-Energie (ΔG) — das Entscheidungskriterium

Enthalpie und Entropie sind zwei konkurrierende Triebkräfte. Die **Gibbs-Energie** (auch: freie Enthalpie, benannt nach Josiah Willard Gibbs) fasst beide in einer einzigen Gleichung zusammen, die direkt sagt, ob eine Reaktion spontan abläuft:

**ΔG = ΔH − T · ΔS**

| ΔG | Bedeutung |
|---|---|
| < 0 | Reaktion läuft spontan ab (**exergon**) |
| > 0 | Reaktion läuft nicht spontan ab (**endergon**) |
| = 0 | System befindet sich im **Gleichgewicht** |

Wichtig: „Spontan" heißt thermodynamisch begünstigt — es sagt nichts über die Geschwindigkeit aus. Diamant → Graphit ist spontan (ΔG < 0), dauert aber Millionen Jahre ohne Katalysator. Die Geschwindigkeit bestimmt die Kinetik (Aktivierungsenergie Ea), nicht die Thermodynamik.

### Die vier Fälle der Spontaneität

| Fall | ΔH | ΔS | ΔG | Spontaneität |
|---|---|---|---|---|
| 1 | < 0 (exotherm) | > 0 (mehr Unordnung) | Immer < 0 | **Immer spontan** bei jeder Temperatur |
| 2 | > 0 (endotherm) | < 0 (mehr Ordnung) | Immer > 0 | **Nie spontan** bei keiner Temperatur |
| 3 | < 0 (exotherm) | < 0 (mehr Ordnung) | T-abhängig | Spontan bei **tiefen T** (|ΔH| > T·|ΔS|) |
| 4 | > 0 (endotherm) | > 0 (mehr Unordnung) | T-abhängig | Spontan bei **hohen T** (T·ΔS > ΔH) |

**Fall 1 — Verbrennung:** exotherm + Gasentwicklung → bei jeder Temperatur spontan.
**Fall 2 — Photosynthese:** endotherm + höhere Ordnung (CO₂ + H₂O → Glucose) → braucht ständig Lichtenergie.
**Fall 3 — Gefrieren von Wasser:** exotherm (Kristallisationswärme frei), aber ΔS < 0 (flüssig → fest) → nur unter 0 °C spontan.
**Fall 4 — Auflösung von NH₄NO₃:** endotherm (Kältepack!), aber ΔS stark positiv → bei Raumtemperatur spontan, weil T·ΔS > ΔH.

### Umkehrtemperatur

Bei den temperaturabhängigen Fällen 3 und 4 gibt es eine **Umkehrtemperatur** T*, bei der ΔG exakt 0 wird:

**T* = ΔH / ΔS**

Oberhalb von T* (Fall 4) bzw. unterhalb von T* (Fall 3) wechselt die Spontaneität. Für Wasser: T* = ΔH_Schmelz / ΔS_Schmelz = 6,01 kJ / 0,022 kJ/K = 273 K = 0 °C — genau der Schmelzpunkt!

> **Merke:** ΔG = ΔH − T·ΔS entscheidet allein über Spontaneität. Fall 1 (exo + ΔS > 0) = immer spontan. Fall 2 (endo + ΔS < 0) = nie spontan. Fälle 3 und 4 sind temperaturabhängig → Umkehrtemperatur T* = ΔH/ΔS. Einheiten-Falle: ΔH oft in kJ, ΔS in J → vor Einsetzen ΔS durch 1000 teilen!

---

## Rechenbeispiel: Verbrennung von Methan

CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

Gegeben: ΔH° = −890 kJ/mol; ΔS° = −242 J/(mol·K) = −0,242 kJ/(mol·K)

Bei T = 298 K:
ΔG° = ΔH° − T · ΔS° = −890 − 298 · (−0,242) = −890 + 72,1 = **−817,9 kJ/mol**

ΔG° ist stark negativ → die Verbrennung ist thermodynamisch sehr günstig. Obwohl ΔS negativ ist (H₂O wird flüssig → weniger Unordnung), dominiert der große exotherme ΔH-Term bei weitem. Trotzdem braucht die Reaktion eine Zündung (Aktivierungsenergie) — Thermodynamik sagt, OB eine Reaktion ablaufen kann, Kinetik sagt, WIE SCHNELL.

---

## ΔG°' — biochemische Standardbedingungen

In der Chemie gelten als Standardbedingungen: 25 °C, 1 bar, alle Stoffe in 1 mol/L Konzentration, pH nicht festgelegt. Aber im Körper herrscht immer pH 7 — und das macht einen gewaltigen Unterschied, weil H⁺-Ionen an vielen biochemischen Reaktionen beteiligt sind.

Deshalb hat die Biochemie eigene Standardbedingungen definiert, gekennzeichnet durch den Strich ('):

| Parameter | ΔG° (chemisch) | ΔG°' (biochemisch) |
|---|---|---|
| Temperatur | 25 °C (298 K) | 25 °C (298 K) |
| Druck | 1 bar | 1 bar |
| Konzentration | alle 1 mol/L | alle 1 mol/L |
| **pH** | **nicht festgelegt** | **pH 7** (c(H⁺) = 10⁻⁷ mol/L) |
| **Wasser** | Aktivität = 1 | **55,5 mol/L** (reines Wasser als Lösungsmittel) |

Warum ist das wichtig? Bei pH 0 wäre c(H⁺) = 1 mol/L — das ist 10⁷-mal mehr als bei pH 7. Für Reaktionen, an denen H⁺ beteiligt ist (und das sind fast alle biochemischen Reaktionen), verschiebt sich ΔG dadurch um **−39,9 kJ/mol pro H⁺**. ATP-Hydrolyse hat z. B. unter chemischen Standardbedingungen ΔG° = −35,7 kJ/mol, unter biochemischen ΔG°' = −30,5 kJ/mol.

In der MedAT-Vorbereitung und in Biochemie-Lehrbüchern wird fast immer ΔG°' verwendet. Wenn einfach „ΔG°" steht, ist im biochemischen Kontext meist ΔG°' gemeint.

> **Merke:** ΔG°' = biochemische Standardbedingungen (pH 7, 25 °C, 1 mol/L, Wasser als Lösungsmittel). Der Strich (') zeigt an: pH ist auf 7 fixiert. In der Biochemie ist ΔG°' der Standardwert — nicht ΔG°.

---

## ATP als Energiewährung der Zelle

Adenosintriphosphat (ATP) ist das zentrale Molekül der biologischen Energieübertragung. Seine Hydrolyse (Spaltung durch Wasser) setzt unter biochemischen Standardbedingungen erhebliche Energie frei:

**ATP + H₂O → ADP + Pᵢ (anorganisches Phosphat)**
**ΔG°' = −30,5 kJ/mol**

Warum ist dieser Wert so stark negativ? Drei Gründe:
1. **Ladungsabstoßung:** Die drei eng benachbarten negativen Phosphatgruppen stoßen sich ab. Nach der Spaltung sinkt die elektrostatische Abstoßung.
2. **Resonanzstabilisierung:** Die Produkte ADP und Pᵢ haben mehr Resonanzstrukturen als ATP — sie sind stabiler.
3. **Hydratation:** ADP und Pᵢ werden besser hydratisiert (von Wassermolekülen umgeben) als ATP.

### Energetische Kopplung

Im Körper laufen viele Reaktionen ab, die thermodynamisch „bergauf" gehen (ΔG > 0). Sie können nur stattfinden, wenn sie an eine exergone Reaktion gekoppelt werden — meist die ATP-Hydrolyse:

**Beispiel — Phosphorylierung von Glucose** (erster Schritt der Glykolyse):
- Glucose + Pᵢ → Glucose-6-phosphat: ΔG°' = **+13,8 kJ/mol** (endergon, allein nicht spontan)
- ATP → ADP + Pᵢ: ΔG°' = **−30,5 kJ/mol** (exergon)
- **Gekoppelt:** Glucose + ATP → Glucose-6-phosphat + ADP: ΔG°' = +13,8 + (−30,5) = **−16,7 kJ/mol** (exergon!)

Die Zelle überträgt dabei die Phosphatgruppe direkt vom ATP auf die Glucose — das Enzym Hexokinase katalysiert diese Phosphorylierung. Die Gesamtreaktion ist exergon, weil |ΔG°'_ATP| > |ΔG°'_endergon|.

Weitere Beispiele für ATP-getriebene Prozesse: Muskelkontraktion (Myosin-ATPase), aktiver Ionentransport (Na⁺/K⁺-ATPase verbraucht ~25 % des Ruhe-ATPs), Proteinbiosynthese (4 ATP-Äquivalente pro Peptidbindung), DNA-Replikation.

> **Merke:** ATP-Hydrolyse liefert ΔG°' = −30,5 kJ/mol. Endergone Reaktionen werden durch Kopplung an ATP-Hydrolyse ermöglicht: ΔG_gesamt = ΔG_endergon + ΔG_ATP < 0. Die Phosphatgruppe wird dabei oft direkt übertragen (Phosphorylierung).

---

## Thermodynamische Kopplung im Stoffwechsel

Die ATP-Kopplung ist kein Einzelfall, sondern ein durchgängiges Prinzip des Stoffwechsels. Ganze Stoffwechselwege funktionieren nur, weil einzelne endergone Schritte durch stark exergone Schritte thermodynamisch „mitgezogen" werden.

### Glykolyse — Gesamtbilanz

Die Glykolyse (Abbau von Glucose zu 2 Pyruvat) hat 10 Einzelschritte. Manche davon sind endergon (z. B. Schritt 4: Aldolase, ΔG°' = +23,8 kJ/mol), aber die Gesamtbilanz ist exergon:

**Glucose + 2 NAD⁺ + 2 ADP + 2 Pᵢ → 2 Pyruvat + 2 NADH + 2 ATP + 2 H₂O**
**ΔG°' = −74,0 kJ/mol**

Die drei irreversiblen (stark exergonen) Schritte — Hexokinase (−16,7), Phosphofructokinase (−14,2) und Pyruvatkinase (−31,4 kJ/mol) — treiben den gesamten Weg voran.

### Citratzyklus

Ähnlich im Citratzyklus: Die Gesamtbilanz ist exergon (ΔG°' ≈ −40 kJ/mol pro Acetyl-CoA), obwohl einzelne Schritte endergon sind. Die Citrat-Synthase (ΔG°' = −31,4 kJ/mol) ist der erste und stärkste Zugmotor.

### Enzyme ändern ΔG nicht — nur Ea

Ein häufiges Missverständnis: Enzyme machen Reaktionen nicht thermodynamisch günstiger. Sie senken nur die **Aktivierungsenergie** (Ea) — den Energieberg, den die Reaktanten überwinden müssen, um zu Produkten zu werden. ΔG bleibt identisch, ob mit oder ohne Enzym.

Analogie: Ein Tunnel durch einen Berg ändert nicht den Höhenunterschied zwischen den zwei Seiten (ΔG), aber er senkt die Höhe, die du überwinden musst (Ea). Die Reaktion läuft mit Enzym schneller ab, aber die Gleichgewichtslage verschiebt sich nicht.

Das bedeutet auch: Ein Enzym kann eine thermodynamisch unmögliche Reaktion (ΔG > 0) nicht möglich machen — dafür braucht es Kopplung an eine exergone Reaktion (z. B. ATP-Hydrolyse).

> **Merke:** Stoffwechselwege funktionieren durch Kopplung: Stark exergone Schritte treiben endergone Schritte an. Enzyme senken nur Ea, nicht ΔG — sie beschleunigen, verschieben aber nicht das Gleichgewicht. Eine thermodynamisch unmögliche Reaktion braucht Energiekopplung, kein besseres Enzym.

---

## Klinische Bezüge

### Grundumsatz und Harris-Benedict-Gleichung

Der **Grundumsatz** (Basal Metabolic Rate, BMR) ist der Energieverbrauch des Körpers in völliger Ruhe — die Energie, die für Atmung, Herzschlag, Ionenpumpen, Körpertemperatur und Zellerhalt benötigt wird. Er wird durch indirekte Kalorimetrie (Messung des O₂-Verbrauchs und der CO₂-Produktion) bestimmt.

Die **Harris-Benedict-Gleichung** schätzt den Grundumsatz:
- Männer: BMR = 66,5 + 13,75 · Gewicht(kg) + 5,003 · Größe(cm) − 6,755 · Alter(J)
- Frauen: BMR = 655,1 + 9,563 · Gewicht(kg) + 1,850 · Größe(cm) − 4,676 · Alter(J)

Typische Werte: ~1500–1800 kcal/Tag (Männer), ~1200–1500 kcal/Tag (Frauen). Muskulöse Personen haben höheren Grundumsatz, weil Muskelgewebe metabolisch aktiver ist als Fettgewebe.

### Kalorimetrie

Die **direkte Kalorimetrie** misst die Wärmeabgabe eines Organismus in einer isolierten Kammer. Die **indirekte Kalorimetrie** ist klinisch gebräuchlicher: Aus dem O₂-Verbrauch und der CO₂-Produktion wird über den respiratorischen Quotienten (RQ = CO₂/O₂) berechnet, welcher Nährstoff gerade verbrannt wird (RQ Fett ≈ 0,7; KH ≈ 1,0; Protein ≈ 0,8).

### Fieber und Stoffwechsel

Pro Grad Celsius Temperaturerhöhung steigt der Stoffwechsel um ca. **13 %** (van-'t-Hoff-Regel, auch RGT-Regel für biologische Systeme). Bei 40 °C Fieber (3 °C über normal) ist der Grundumsatz also ca. 40 % erhöht. Deshalb verlieren Fieberpatienten rasch Gewicht und brauchen mehr Flüssigkeit und Kalorien.

Thermodynamisch erklärt: Bei höherem T steigt T·ΔS → ΔG wird für exergone Reaktionen noch negativer, und die Reaktionsgeschwindigkeit steigt exponentiell (Arrhenius-Gleichung: k = A · e^(−Ea/RT)). Allerdings droht ab ~42 °C Enzymdenaturierung — die Proteine verlieren ihre Tertiärstruktur und damit ihre katalytische Funktion.

> **Merke:** Grundumsatz ≈ 1500 kcal/Tag (geschlechtsabhängig), geschätzt mit Harris-Benedict. Indirekte Kalorimetrie misst O₂-Verbrauch/CO₂-Produktion. Fieber steigert den Stoffwechsel um ~13 %/°C — bei 40 °C ist der Grundumsatz ca. 40 % erhöht. Ab 42 °C droht Enzymdenaturierung.`,

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
        text: "Eine Reaktion hat ΔH° = +57,2 kJ/mol und ΔS° = +175,8 J/(mol·K). Bei welcher Temperatur wird sie spontan?",
        options: [
          { id: "a", text: "Bei allen Temperaturen" },
          { id: "b", text: "Bei keiner Temperatur" },
          { id: "c", text: "Unterhalb von ca. 52 °C" },
          { id: "d", text: "Oberhalb von ca. 52 °C (325 K)" },
          { id: "e", text: "Nur bei 0 °C" },
        ],
        correctOptionId: "d",
        explanation:
          "Bei ΔH > 0 und ΔS > 0 wird ΔG = ΔH − T·ΔS negativ, sobald T·ΔS > ΔH. Die Umkehrtemperatur T* = ΔH/ΔS = 57200/175,8 ≈ 325 K ≈ 52 °C. Oberhalb davon ist die Reaktion spontan (exergon).",
      },

      klinischerBezug:
        "Die ATP-Hydrolyse (ATP → ADP + Pᵢ, ΔG° = −30,5 kJ/mol) ist die zentrale exergone Reaktion der Zelle. Endergone Prozesse (Muskelkontraktion, aktiver Ionentransport, Proteinbiosynthese) werden thermodynamisch möglich, indem sie an ATP-Hydrolyse gekoppelt werden. Bei Hypothermie sinkt T → ΔG wird negativer für exotherme Reaktionen, aber enzymatische Reaktionen werden kinetisch langsamer (Arrhenius). Fieber erhöht T → ΔG für endotherme Reaktionen wird günstiger, aber Enzymdenaturierung droht ab 42°C.",

      selfTest: [
        {
          question: "Was bedeutet ΔG < 0 für eine chemische Reaktion?",
          options: [
            "Die Reaktion ist exotherm.",
            "Die Reaktion befindet sich im Gleichgewicht.",
            "Die Reaktion läuft sehr schnell ab.",
            "Die Entropie nimmt ab.",
            "Die Reaktion läuft spontan ab (exergon).",
          ],
          correctIndex: 4,
          explanation:
            "ΔG < 0 bedeutet, dass die Reaktion thermodynamisch spontan (exergon) ist. Das heißt nicht, dass sie schnell abläuft — das hängt von der Aktivierungsenergie ab (Kinetik). Exotherm (ΔH < 0) ist nicht dasselbe wie exergon (ΔG < 0), weil die Entropie mitentscheidet.",
          hints: [
            "Spontan = thermodynamisch begünstigt, nicht Geschwindigkeit",
            "ΔG kombiniert ΔH UND ΔS",
          ],
          difficulty: 1,
          tags: ["gibbs-energie", "spontaneität", "exergon"],
        },
        {
          question: "Welche Reaktion ist bei JEDER Temperatur spontan?",
          options: [
            "ΔH < 0, ΔS > 0",
            "ΔH < 0, ΔS < 0",
            "ΔH > 0, ΔS > 0",
            "ΔH > 0, ΔS < 0",
            "ΔH = 0, ΔS = 0",
          ],
          correctIndex: 0,
          explanation:
            "Wenn ΔH < 0 (exotherm) und ΔS > 0 (mehr Unordnung), dann ist ΔG = ΔH − T·ΔS immer negativ: ein negativer ΔH minus ein positiver T·ΔS-Term ergibt immer einen negativen Wert. Beispiel: Verbrennung (exotherm + Gasentwicklung).",
          hints: [
            "ΔG = ΔH − T·ΔS: Wann ist das IMMER negativ?",
            "Negativ minus positiv = immer negativ",
          ],
          difficulty: 2,
          tags: ["vier-faelle", "spontaneität", "temperatur"],
        },
        {
          question:
            "Berechne ΔH für die Reaktion C(s) + O₂(g) → CO₂(g), wenn ΔHf°(CO₂) = −393,5 kJ/mol.",
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
            "NH₄NO₃ löst sich in Wasser endotherm auf (ΔH > 0). Trotzdem ist der Vorgang spontan. Warum?",
          options: [
            "Weil die Aktivierungsenergie niedrig ist.",
            "Weil ein Katalysator die Reaktion beschleunigt.",
            "Weil die Entropiezunahme (ΔS > 0) groß genug ist, sodass T·ΔS > ΔH und ΔG < 0.",
            "Weil die Lösung Wärme abgibt.",
            "Weil ΔG bei endothermen Reaktionen immer negativ ist.",
          ],
          correctIndex: 2,
          explanation:
            "Das ist ein klassischer Fall 4: ΔH > 0, ΔS > 0. Die Ionen verteilen sich in Lösung → stark erhöhte Unordnung (ΔS >> 0). Bei Raumtemperatur ist T·ΔS > ΔH, also ΔG = ΔH − T·ΔS < 0. Die Reaktion ist spontan, OBWOHL sie endotherm ist.",
          hints: [
            "Was treibt die Reaktion an, wenn es nicht die Wärme ist?",
            "Ionen in Lösung = viel mehr Unordnung als im Kristallgitter",
          ],
          difficulty: 2,
          tags: ["entropie", "endotherm-spontan", "ammoniumnitrat"],
        },
        {
          question:
            "Für eine Reaktion gilt: ΔH = −100 kJ/mol, ΔS = −200 J/(mol·K). Ab welcher Temperatur ist die Reaktion NICHT mehr spontan?",
          options: [
            "Ab 200 K",
            "Die Reaktion ist bei jeder Temperatur spontan",
            "Ab 0,5 K",
            "Ab 500 K",
            "Die Reaktion ist bei keiner Temperatur spontan",
          ],
          correctIndex: 3,
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
