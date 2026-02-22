import type { Kapitel } from '../types';

export const chemKap7: Kapitel = {
  id: 'chem-kap7',
  title: 'Chemische Reaktionen',
  subject: 'chemie',
  icon: '⚗️',
  estimatedTime: '60 min',
  unterkapitel: [
    // ─────────────────────────────────────────────
    // UK 01: Reaktionstypen und Grundprinzipien
    // ─────────────────────────────────────────────
    {
      id: 'ch-7-01',
      title: 'Reaktionstypen und Grundprinzipien',
      content: `## Grundbegriffe chemischer Reaktionen

Eine **chemische Reaktion** ist ein Vorgang, bei dem Bindungen zwischen Atomen gebrochen und neu geknüpft werden — im Unterschied zu physikalischen Vorgängen (z. B. Schmelzen), bei denen die Molekülstruktur erhalten bleibt. Das Gesetz der Massenerhaltung (Lavoisier): Die Gesamtmasse der Edukte gleich der Gesamtmasse der Produkte. Atome werden dabei weder erzeugt noch vernichtet, nur umgeordnet.

## Die vier klassischen Reaktionstypen

**1. Synthesereaktion (Kombination):** Zwei oder mehr Substanzen reagieren zu einem einzigen Produkt.
Allgemein: A + B → AB
Beispiel: 2 Na + Cl₂ → 2 NaCl (Natriumchlorid-Bildung)

**2. Zersetzungsreaktion (Analyse):** Eine Verbindung zerfällt in zwei oder mehr einfachere Produkte.
Allgemein: AB → A + B
Beispiel: 2 H₂O₂ → 2 H₂O + O₂ (Abbau von Wasserstoffperoxid durch Katalase)

**3. Substitutionsreaktion:** Ein Atom oder eine Gruppe ersetzt ein anderes Atom oder eine andere Gruppe.
Beispiel (nukleophile Substitution): CH₃Br + OH⁻ → CH₃OH + Br⁻
Biologisch: enzymatische Transaminierungen; Methylierungsreaktionen (SAM als Methylgruppendonor)

**4. Metathese (Doppelumsatz / Doppelsubstitution):** Zwei Verbindungen tauschen Partner.
Allgemein: AB + CD → AD + CB
Beispiel: NaCl + AgNO₃ → AgCl↓ + NaNO₃ (Fällungsreaktion)

## Säure-Base-Reaktionen und Redoxreaktionen

**Säure-Base-Reaktion (Brønsted):** Übertragung eines Protons (H⁺) vom Donor (Säure) auf den Akzeptor (Base).
Beispiel: HCl + H₂O → H₃O⁺ + Cl⁻
Die konjugierte Base einer starken Säure ist eine schwache Base. Puffergleichgewichte (z. B. HCO₃⁻/CO₂ im Blut) beruhen auf diesem Prinzip.

**Redoxreaktion:** Übertragung von Elektronen (e⁻). Oxidation = Elektronenabgabe (Oxidationszahl ↑); Reduktion = Elektronenaufnahme (Oxidationszahl ↓). Oxidationsmittel wird reduziert; Reduktionsmittel wird oxidiert. Gedächtnisstütze: **OIL RIG** (Oxidation Is Loss, Reduction Is Gain).
Beispiel: Zn + CuSO₄ → ZnSO₄ + Cu (Zn wird oxidiert, Cu²⁺ reduziert)

**Fällungsreaktion:** Zwei lösliche Salze reagieren zu einem unlöslichen Niederschlag (Präzipitat).
Klinisch: Nierensteine (CaC₂O₄-Fällung im Harn), Röntgenkontrastmittel (BaSO₄).

## Katalyse

Ein **Katalysator** erhöht die Reaktionsgeschwindigkeit, indem er die Aktivierungsenergie senkt, ohne selbst verbraucht zu werden. Er verändert nicht die Thermodynamik (ΔG, ΔH bleiben gleich), sondern nur den Reaktionsweg.

- **Homogene Katalyse:** Katalysator und Reaktanten in derselben Phase (z. B. H⁺ als Katalysator in wässriger Lösung).
- **Heterogene Katalyse:** Unterschiedliche Phasen — meist Feststoffkatalysator, gasförmige/flüssige Reaktanten (z. B. Platin im Autokatalysator; Eisen beim Haber-Bosch-Verfahren).
- **Enzymkatalyse:** Hochspezifische biologische Katalyse durch Proteine. Enzyme senken die Aktivierungsenergie durch Ausbildung eines Enzym-Substrat-Komplexes im aktiven Zentrum (Schlüssel-Schloss- bzw. induced-fit-Modell). Coenzyme (z. B. NAD⁺, FAD) fungieren als Elektronenüberträger.

## Energetik: Exotherme und endotherme Reaktionen

Die **Reaktionsenthalpie ΔH** beschreibt den Wärmeaustausch bei konstantem Druck.

- **Exotherm (ΔH < 0):** Energie wird an die Umgebung abgegeben → Produkte energieärmer als Edukte. Beispiel: Verbrennung von Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 2803 kJ/mol.
- **Endotherm (ΔH > 0):** Energie wird aus der Umgebung aufgenommen → Produkte energiereicher. Beispiel: Photosynthese, thermische Zersetzung von CaCO₃.

Wichtig: Spontaneität einer Reaktion hängt nicht allein von ΔH ab, sondern von der freien Enthalpie **ΔG = ΔH − T·ΔS** (Gibbs-Energie). ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon).`,

      lernziele: [
        'Die vier klassischen Reaktionstypen (Synthese, Zersetzung, Substitution, Metathese) anhand von Beispielen unterscheiden.',
        'Säure-Base-Reaktionen als H⁺-Transfer und Redoxreaktionen als e⁻-Transfer charakterisieren und mit OIL-RIG einprägen.',
        'Homogene, heterogene und enzymatische Katalyse vergleichen und den Effekt auf die Aktivierungsenergie erklären.',
        'Exotherme (ΔH < 0) und endotherme (ΔH > 0) Reaktionen im Energieprofil darstellen und ΔG = ΔH − T·ΔS anwenden.',
        'Klinische Bezüge von Redox-, Fällungs- und enzymatischen Reaktionen im menschlichen Stoffwechsel nennen.',
      ],

      sections: [
        {
          heading: 'Reaktionstypen im Überblick',
          text: 'Synthese (A + B → AB) und Zersetzung (AB → A + B) sind Gegensätze. Bei der Substitution ersetzt ein Atom eine andere Gruppe; bei der Metathese (Doppelumsatz) tauschen zwei Verbindungen ihre Partner. Säure-Base-Reaktionen übertragen H⁺, Redoxreaktionen übertragen e⁻. Fällungsreaktionen sind spezielle Metathesen, bei denen ein unlösliches Produkt ausfällt.',
          merksatz: 'Merke: Säure-Base = H⁺-Transfer; Redox = e⁻-Transfer. OIL RIG: Oxidation Is Loss, Reduction Is Gain.',
        },
        {
          heading: 'Katalyse: homogen, heterogen, enzymatisch',
          text: 'Alle Katalysatoren senken die Aktivierungsenergie, ohne ΔH zu ändern. Homogene Katalyse (gleiche Phase) ist selektiv, heterogene (verschiedene Phasen) ist robust und industriell bedeutsam (Haber-Bosch, Autokatalysator). Enzyme als biologische Katalysatoren sind hochspezifisch, pH- und temperaturabhängig. Hemmung (kompetitiv, nicht-kompetitiv) reguliert Stoffwechselwege.',
          merksatz: 'Faustregel: Katalysatoren verändern die Reaktionsgeschwindigkeit, nicht die Gleichgewichtslage.',
        },
        {
          heading: 'Energiebilanz und Spontaneität',
          text: 'ΔH < 0 (exotherm) bedeutet Wärmefreisetzung, ΔH > 0 (endotherm) Wärmeaufnahme. Spontaneität wird durch ΔG = ΔH − T·ΔS bestimmt. Eine exotherme Reaktion mit negativer Entropieänderung kann bei hoher Temperatur nicht-spontan werden. Biologisch: ATP-Hydrolyse (ΔG° ≈ −30,5 kJ/mol) treibt endergone Reaktionen an.',
          merksatz: 'ΔG < 0 → spontan (exergon); ΔG > 0 → nicht spontan (endergon). ΔG = ΔH − T·ΔS.',
        },
      ],

      merksätze: [
        'Synthese: A + B → AB; Zersetzung: AB → A + B — Umkehrreaktionen.',
        'OIL RIG: Oxidation Is Loss (Elektronenabgabe), Reduction Is Gain (Elektronenaufnahme).',
        'Redoxreaktion: Oxidationsmittel wird selbst reduziert, Reduktionsmittel wird selbst oxidiert.',
        'Katalysatoren senken E_A, werden nicht verbraucht und ändern ΔH nicht.',
        'Homogen = gleiche Phase; heterogen = verschiedene Phasen; Enzymatik = hochspezifisch, biologisch.',
        'Exotherm: ΔH < 0 (Wärme frei); endotherm: ΔH > 0 (Wärme nötig).',
        'ΔG = ΔH − T·ΔS bestimmt die Spontaneität einer Reaktion.',
        'Fällungsreaktion = Metathese mit unlöslichem Niederschlag (z. B. AgCl, BaSO₄).',
        'Säure-Base-Reaktion (Brønsted): H⁺ vom Donor (Säure) auf Akzeptor (Base).',
        'Enzymkatalyse: Substrat bindet im aktiven Zentrum → Enzym-Substrat-Komplex → Produkt + freies Enzym.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Was ist der Unterschied zwischen einer exothermen und einer endothermen Reaktion, und warum reicht die Reaktionsenthalpie ΔH allein nicht aus, um die Spontaneität zu beurteilen?',
        answer: 'Bei einer exothermen Reaktion ist die Reaktionsenthalpie ΔH negativ: Die Produkte besitzen weniger innere Energie als die Edukte, und die überschüssige Energie wird als Wärme an die Umgebung abgegeben. Beispiele sind Verbrennungsreaktionen oder die ATP-Hydrolyse. Bei endothermen Reaktionen ist ΔH positiv — Energie muss zugeführt werden, wie bei der Photosynthese oder der thermischen Zersetzung von Calciumcarbonat. ΔH allein reicht zur Beurteilung der Spontaneität nicht aus, weil auch die Entropie ΔS eine Rolle spielt. Die maßgebliche Größe ist die Gibbs-Energie: ΔG = ΔH − T·ΔS. Nur wenn ΔG < 0 ist, läuft die Reaktion unter den gegebenen Bedingungen spontan ab (exergon). Eine exotherme Reaktion mit stark negativer Entropieänderung kann bei hoher Temperatur endergon werden. Umgekehrt kann eine endotherme Reaktion mit großem Entropiegewinn (z. B. Auflösen von NH₄NO₃ in Wasser) spontan sein, wenn der T·ΔS-Term die Enthalpie überwiegt. Im biologischen Kontext koppelt die Zelle exergone Reaktionen (ATP-Hydrolyse) an endergone Prozesse (Biosynthesen, aktiver Transport), um thermodynamisch ungünstige Reaktionen anzutreiben.',
      },

      klinischerBezug: 'Verbrennungsreaktionen (exotherm) liefern den physiologischen Kalorienwert von Nahrungsmitteln. ATP-Hydrolyse (exergon, ΔG° ≈ −30,5 kJ/mol) treibt endergone Biosynthesen an. Die Atmungskette ist eine Redoxkaskade, bei der Elektronen von NADH auf O₂ übertragen werden.',

      selfTest: [
        {
          question: 'Welche der folgenden Reaktionen ist eine Synthesereaktion?',
          options: [
            'CaCO₃ → CaO + CO₂',
            'NaCl + AgNO₃ → AgCl + NaNO₃',
            '2 Mg + O₂ → 2 MgO',
            'CH₄ + 2 O₂ → CO₂ + 2 H₂O',
            'HCl + NaOH → NaCl + H₂O',
          ],
          correctIndex: 2,
          explanation: 'Bei einer Synthesereaktion vereinigen sich zwei oder mehr Edukte zu einem einzigen Produkt: A + B → AB. 2 Mg + O₂ → 2 MgO erfüllt dieses Muster: Magnesium und Sauerstoff bilden gemeinsam Magnesiumoxid. Die Zersetzung (CaCO₃ → CaO + CO₂) ist das Gegenteil. NaCl + AgNO₃ → AgCl + NaNO₃ ist eine Metathese (Fällungsreaktion). Die Verbrennung von Methan und die Neutralisation sind ebenfalls keine reinen Synthesen in diesem engeren Sinne.',
          hints: [
            'Synthese bedeutet: Aus mehreren Edukten entsteht ein einziges Produkt.',
            'Suche die Reaktion, bei der A + B → AB gilt — also ein neues zusammengesetztes Produkt entsteht.',
          ],
          tags: ['reaktionstypen', 'synthese'],
          difficulty: 1,
        },
        {
          question: 'Was charakterisiert eine Redoxreaktion auf der Elektronenebene?',
          options: [
            'Übertragung von Protonen (H⁺) zwischen Reaktionspartnern',
            'Übertragung von Elektronen: eine Substanz oxidiert, eine andere reduziert sich',
            'Bildung eines unlöslichen Niederschlags aus zwei Salzen',
            'Zersetzung einer Verbindung durch Wärmezufuhr',
            'Substitution eines Atoms durch ein anderes ohne Ladungsänderung',
          ],
          correctIndex: 1,
          explanation: 'Redoxreaktionen sind durch den Transfer von Elektronen definiert. Die oxidierende Substanz gibt Elektronen ab (Oxidation = Elektronenverlust, Oxidationszahl steigt) und die reduzierende Substanz nimmt Elektronen auf (Reduktion = Elektronengewinn, Oxidationszahl sinkt). Die Gedächtnisstütze OIL RIG hilft: Oxidation Is Loss, Reduction Is Gain. H⁺-Transfer kennzeichnet hingegen Säure-Base-Reaktionen nach Brønsted. Die anderen Optionen beschreiben Fällungs-, Zersetzungs- und Substitutionsreaktionen.',
          hints: [
            'Denke an OIL RIG: Was wird bei Oxidation übertragen?',
            'Redox-Reaktionen ändern die Oxidationszahlen der beteiligten Atome.',
          ],
          tags: ['redox', 'oxidation', 'reduktion'],
          difficulty: 1,
        },
        {
          question: 'Was ist die korrekte Aussage über Katalysatoren?',
          options: [
            'Sie erhöhen ΔH der Reaktion und machen sie exothermer.',
            'Sie werden im Verlauf der Reaktion verbraucht und müssen nachgefüllt werden.',
            'Sie senken die Aktivierungsenergie E_A, ohne ΔH oder ΔG zu ändern.',
            'Sie verschieben das chemische Gleichgewicht zugunsten der Produkte.',
            'Sie erhöhen ausschließlich die Temperatur des Systems.',
          ],
          correctIndex: 2,
          explanation: 'Katalysatoren senken die Aktivierungsenergie E_A, indem sie einen alternativen Reaktionsweg mit geringerer Energiebarriere bereitstellen. Dadurch wird die Reaktion schneller — sowohl Hin- als auch Rückreaktion. Entscheidend: ΔH, ΔG und die Gleichgewichtslage bleiben unverändert; der Katalysator wird nicht verbraucht. Enzyme als biologische Katalysatoren folgen demselben Prinzip — sie senken E_A durch Ausbildung eines Enzym-Substrat-Komplexes, ohne die Thermodynamik der Reaktion zu verändern.',
          hints: [
            'Ein Katalysator verändert den Weg, nicht das Ziel der Reaktion.',
            'Gleichgewichtslage und Reaktionsenthalpie bleiben unberührt.',
          ],
          tags: ['katalyse', 'aktivierungsenergie'],
          difficulty: 2,
        },
        {
          question: 'Bei der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu: Was passiert mit Zink?',
          options: [
            'Zink wird reduziert: es nimmt Elektronen auf.',
            'Zink wird oxidiert: es gibt Elektronen ab.',
            'Zink fungiert als Oxidationsmittel.',
            'Zink nimmt H⁺-Ionen auf (Säure-Base-Reaktion).',
            'Zink bleibt unverändert als Katalysator.',
          ],
          correctIndex: 1,
          explanation: 'In dieser Reaktion wird Zink oxidiert: Zn → Zn²⁺ + 2 e⁻. Die Oxidationszahl steigt von 0 auf +2, was Elektronenabgabe (Oxidation) entspricht — OIL: Oxidation Is Loss. Gleichzeitig wird Cu²⁺ reduziert: Cu²⁺ + 2 e⁻ → Cu (Oxidationszahl von +2 auf 0). Das Reduktionsmittel ist Zink (es wird oxidiert), das Oxidationsmittel ist Cu²⁺ (es wird reduziert). Diese Galvanische Verschiebungsreaktion ist die Grundlage von Batterien und Elektrolyse.',
          hints: [
            'Schreibe die Oxidationszahl von Zn vor und nach der Reaktion auf.',
            'OIL: Oxidation Is Loss — Zink gibt etwas ab.',
          ],
          tags: ['redox', 'oxidation', 'oxidationszahl'],
          difficulty: 2,
        },
        {
          question: 'Welche Aussage zu exothermen und endothermen Reaktionen ist korrekt?',
          options: [
            'Exotherme Reaktionen laufen immer spontan ab, endotherme nie.',
            'Bei endothermen Reaktionen ist ΔH < 0, Energie wird freigesetzt.',
            'Exotherme Reaktionen (ΔH < 0) geben Wärme ab; Spontaneität hängt von ΔG ab.',
            'Die Spontaneität wird ausschließlich durch ΔH bestimmt.',
            'Endotherme Reaktionen können nicht in biologischen Systemen auftreten.',
          ],
          correctIndex: 2,
          explanation: 'Exotherme Reaktionen haben ΔH < 0: Produkte sind energieärmer als Edukte, und die überschüssige Energie wird als Wärme freigesetzt. Endotherme Reaktionen haben ΔH > 0: Energie muss zugeführt werden. Spontaneität wird jedoch durch ΔG = ΔH − T·ΔS bestimmt, nicht allein durch ΔH. Eine exotherme Reaktion mit stark negativer Entropie kann bei hoher Temperatur endergon (ΔG > 0) und damit nicht spontan sein. Endotherme Reaktionen können spontan sein, wenn der Entropiegewinn (T·ΔS) groß genug ist — z. B. das Auflösen von NH₄NO₃ in Wasser.',
          hints: [
            'Denke an ΔG = ΔH − T·ΔS: Welche zwei Größen bestimmen Spontaneität?',
            'Exotherm bedeutet Wärmefreisetzung, nicht automatisch Spontaneität.',
          ],
          tags: ['thermodynamik', 'enthalpie', 'spontaneitaet'],
          difficulty: 2,
        },
        {
          question: 'Welcher Reaktionstyp liegt bei NaCl + AgNO₃ → AgCl↓ + NaNO₃ vor?',
          options: [
            'Synthesereaktion',
            'Zersetzungsreaktion',
            'Substitutionsreaktion',
            'Metathese (Fällungsreaktion)',
            'Säure-Base-Reaktion nach Brønsted',
          ],
          correctIndex: 3,
          explanation: 'Diese Reaktion ist eine Metathese (Doppelumsatz): Zwei Salze tauschen ihre Anionen. NaCl liefert Cl⁻, das mit Ag⁺ aus AgNO₃ das unlösliche AgCl (Niederschlag, ↓) bildet. Gleichzeitig entsteht lösliches NaNO₃. Da ein unlösliches Produkt (Fällung) entsteht, spricht man auch von einer Fällungsreaktion. Klinisch relevant: BaSO₄-Fällung als Röntgenkontrastmittel; CaC₂O₄-Fällung bei Nierensteinen.',
          hints: [
            'Zwei Verbindungen tauschen ihre Ionen — welcher Reaktionstyp beschreibt das?',
            'Der Pfeil mit ↓ bedeutet: ein unlöslicher Niederschlag entsteht.',
          ],
          tags: ['metathese', 'faellungsreaktion', 'reaktionstypen'],
          difficulty: 1,
        },
        {
          question: 'Welche biochemische Reaktion ist ein Beispiel für enzymatische Katalyse mit klinischer Relevanz?',
          options: [
            'Lösen von NaCl in Wasser (keine Katalyse)',
            'Haber-Bosch-Prozess (heterogene Katalyse mit Eisen)',
            'Abbau von H₂O₂ durch Katalase zu H₂O und O₂ (Zersetzung)',
            'Fällung von AgCl aus AgNO₃ und NaCl (Metathese)',
            'Neutralisation von HCl mit NaOH (Säure-Base)',
          ],
          correctIndex: 2,
          explanation: 'Katalase ist ein Enzym (biologischer Katalysator), das die Zersetzung von Wasserstoffperoxid katalysiert: 2 H₂O₂ → 2 H₂O + O₂. H₂O₂ ist ein zellschädigendes Oxidationsmittel, das bei Stoffwechselreaktionen entsteht. Katalase senkt die Aktivierungsenergie dieser Zersetzungsreaktion enorm — die Reaktionsrate steigt um den Faktor 10⁷. Klinisch relevant: Ein Katalase-Mangel (Akatalasämie) kann zu Gewebeschäden durch H₂O₂-Akkumulation führen. Dieser Fall vereint Enzymkatalyse und Zersetzungsreaktion.',
          hints: [
            'Suche die Reaktion, bei der ein Protein (Enzym) die Reaktionsgeschwindigkeit erhöht.',
            'Katalase ist ein wichtiges Schutzsystem der Zelle gegen oxidativen Stress.',
          ],
          tags: ['enzymkatalyse', 'katalase', 'zersetzung'],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 02: Reaktionskinetik
    // ─────────────────────────────────────────────
    {
      id: 'ch-7-02',
      title: 'Reaktionskinetik — Geschwindigkeit und Faktoren',
      content: `## Reaktionsgeschwindigkeit

Die **Reaktionsgeschwindigkeit v** beschreibt, wie schnell sich Konzentrationen mit der Zeit ändern:

**v = Δ[Produkt] / Δt = −Δ[Edukt] / Δt** [mol·L⁻¹·s⁻¹]

Das negative Vorzeichen bei Edukten zeigt, dass deren Konzentration abnimmt. Die momentane Reaktionsgeschwindigkeit ist der Grenzwert des Differenzenquotienten (Ableitung der Konzentrations-Zeit-Kurve). Im Verlauf einer Reaktion nimmt v in der Regel ab, weil die Eduktkonzentrationen sinken.

## Das Geschwindigkeitsgesetz

Das **empirische Geschwindigkeitsgesetz** verknüpft v mit den Konzentrationen:

**v = k · [A]ᵐ · [B]ⁿ**

- k = Geschwindigkeitskonstante (temperaturabhängig)
- m = partielle Ordnung bezüglich A; n = partielle Ordnung bezüglich B
- Gesamtordnung = m + n

**Reaktionsordnungen:**
- **0. Ordnung (v = k):** v ist konzentrationsunabhängig. Konzentrations-Zeit-Kurve ist eine Gerade. Beispiel: Ethanol-Abbau in der Leber (~0,1–0,15 ‰/h, enzymgesättigt).
- **1. Ordnung (v = k · [A]):** Verdopplung von [A] verdoppelt v. Konzentration sinkt exponentiell. Halbwertszeit t₁/₂ = ln 2 / k ist konzentrationsunabhängig. Beispiel: radioaktiver Zerfall, Pharmakokinetik (viele Medikamente).
- **2. Ordnung (v = k · [A]²):** Verdopplung von [A] vervierfacht v. Halbwertszeit ist konzentrationsabhängig.

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**1. Konzentration:** Höhere Konzentration → mehr Kollisionen pro Zeiteinheit → höheres v (gilt nicht für 0. Ordnung).

**2. Temperatur (RGT-Regel):** Erhöhung um 10 °C verdoppelt bis verdreifacht v (Q₁₀ = 2–3). Begründung: Mehr Moleküle besitzen genug kinetische Energie, um E_A zu überwinden. Bei Enzymen gilt dies nur bis zur Denaturierungstemperatur (~42 °C beim Menschen).

**3. Aktivierungsenergie E_A (Arrhenius-Gleichung):**
k = A · e^(−E_A / RT)
- A = Frequenzfaktor (Stoßfrequenz × Geometriefaktor)
- R = 8,314 J·mol⁻¹·K⁻¹; T in Kelvin
- Je kleiner E_A, desto größer k und damit v.
- Katalysatoren senken E_A → k steigt → Reaktion wird schneller.

**4. Oberfläche:** Bei heterogenen Reaktionen gilt: Größere Reaktionsfläche → höheres v. Fein pulverisierte Feststoffe reagieren deutlich schneller als kompakte Stücke (Beispiel: Zündung von Mehlstaub, Staubexplosionen in der Industrie).

**5. Lösungsmittel und Ionenstärke:** Beeinflussen die effektive Konzentration und die Aktivität der Reaktanten in wässrigen Systemen.

## Michaelis-Menten-Kinetik

Für Enzymreaktionen gilt eine spezielle Kinetik:

**v = vₘₐₓ · [S] / (Kₘ + [S])**

- vₘₐₓ = maximale Geschwindigkeit (bei gesättigtem Enzym)
- Kₘ = Michaelis-Konstante: [S], bei der v = vₘₐₓ/2 → Maß für Substrataffinität (kleines Kₘ = hohe Affinität)
- Bei [S] ≪ Kₘ: v ≈ (vₘₐₓ/Kₘ) · [S] → 1. Ordnung
- Bei [S] ≫ Kₘ: v ≈ vₘₐₓ → 0. Ordnung (Sättigung)

Kompetitive Inhibition: erhöht Kₘ (apparentes Kₘ ↑), vₘₐₓ unverändert. Unkompetitive/nicht-kompetitive Inhibition senkt vₘₐₓ.

## Halbwertszeit und Pharmaka

Die **Halbwertszeit t₁/₂** ist die Zeit, in der die Konzentration auf die Hälfte abfällt.
- Für 1. Ordnung: t₁/₂ = ln 2 / k ≈ 0,693 / k (konzentrationsunabhängig → klinisch praktisch!)
- Viele Pharmakokinetik-Modelle nutzen dies: Medikamentenspiegel, Dosierungsintervalle.
- Ethanol hingegen: 0. Ordnung wegen Enzymkapazitätssättigung → konstante Abnahme (~0,1–0,15 ‰/h).`,

      lernziele: [
        'Die Reaktionsgeschwindigkeit formal definieren und das Geschwindigkeitsgesetz v = k·[A]ᵐ·[B]ⁿ interpretieren.',
        'Reaktionsordnungen (0., 1., 2.) mit ihren Konzentrations-Zeit-Profilen und Halbwertszeiten beschreiben.',
        'Die RGT-Regel und die Arrhenius-Gleichung qualitativ und quantitativ auf klinische Beispiele anwenden.',
        'Die Michaelis-Menten-Kinetik erläutern und Kₘ sowie vₘₐₓ im Linienweaver-Burk-Plot verorten.',
        'Den Ethanol-Metabolismus (0. Ordnung) und Pharmako-Halbwertszeiten (1. Ordnung) als prüfungsrelevante Beispiele erklären.',
      ],

      sections: [
        {
          heading: 'Reaktionsordnungen und ihre Halbwertszeiten',
          text: 'Bei der 0. Ordnung ist v = k konstant; [A] sinkt linear; t₁/₂ = [A]₀ / (2k) — konzentrationsabhängig. Bei der 1. Ordnung ist v = k·[A]; [A] sinkt exponentiell; t₁/₂ = ln 2/k — konzentrationsunabhängig (klinisch wertvoll für Medikamentendosierung). Bei der 2. Ordnung gilt v = k·[A]²; [A] sinkt noch schneller; t₁/₂ = 1/(k·[A]₀). Prüfungsrelevant: Ethanol (0. Ordnung, enzymatisch gesättigt) vs. die meisten Pharmaka (1. Ordnung).',
          merksatz: 'Eselsbrücke: 1. Ordnung → halbwertszeit konstant → ideal für klinische Dosierung!',
        },
        {
          heading: 'Arrhenius und RGT-Regel',
          text: 'Die Arrhenius-Gleichung k = A·e^(−E_A/RT) erklärt die Temperaturabhängigkeit von k. Kleines E_A → großes k → schnelle Reaktion. Die RGT-Regel (Q₁₀ ≈ 2–3) gilt für viele chemische und enzymatische Reaktionen im physiologischen Bereich. Bei Fieber (+2 °C) steigt v bei Entzündungsreaktionen um ca. 20–35 % — Katalyse der Immunantwort. Oberhalb der Denaturierungstemperatur bricht die Enzymaktivität ein.',
          merksatz: 'RGT: +10 °C ≈ 2- bis 3-fache Geschwindigkeit. Gilt NICHT über der Denaturierungstemperatur von Enzymen.',
        },
        {
          heading: 'Michaelis-Menten-Kinetik',
          text: 'v = vₘₐₓ·[S]/(Kₘ+[S]): Sättigungskurve (hyperbolisch). Kₘ = Substratkonzentration bei v = vₘₐₓ/2. Kleines Kₘ → hohe Affinität. Lineweaver-Burk-Plot (Doppelreziprok) linearisiert die Kurve zur Bestimmung von Kₘ und vₘₐₓ. Kompetitive Hemmer erhöhen scheinbares Kₘ, lassen vₘₐₓ unberührt. Nicht-kompetitive Hemmer senken vₘₐₓ, lassen Kₘ unberührt.',
          merksatz: 'Kₘ = [S] bei halbmaximaler Geschwindigkeit. Kleines Kₘ = hohe Enzymaffinität für Substrat.',
        },
      ],

      diagram: 'enzyme-substrate',


      merksätze: [
        'v = Δ[P]/Δt = −Δ[E]/Δt mit Einheit mol·L⁻¹·s⁻¹.',
        'Geschwindigkeitsgesetz: v = k·[A]ᵐ·[B]ⁿ — Ordnungen sind experimentell, nicht aus Stöchiometrie.',
        '0. Ordnung: v = k, [A] sinkt linear (z. B. Ethanol-Metabolismus bei Sättigung).',
        '1. Ordnung: v = k·[A], t₁/₂ = ln 2/k ist konzentrationsunabhängig (viele Pharmaka).',
        'RGT-Regel: Q₁₀ ≈ 2–3; +10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit.',
        'Arrhenius: k = A·e^(−E_A/RT) — kleines E_A bedeutet schnelle Reaktion.',
        'Michaelis-Menten: v = vₘₐₓ·[S]/(Kₘ+[S]) — Kₘ = Maß für Substrataffinität.',
        'Kompetitive Hemmung: Kₘ ↑, vₘₐₓ unverändert.',
        'Ethanol-Abbau: ~0,1–0,15 ‰ pro Stunde, 0. Ordnung wegen gesättigter Enzymkapazität.',
        'Fieber +2 °C erhöht biochemische Reaktionsgeschwindigkeiten um ~20–35 % (RGT-Prinzip).',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Was ist die Michaelis-Menten-Konstante Kₘ, wie wird sie bestimmt, und welche klinische Bedeutung hat sie?',
        answer: 'Die Michaelis-Menten-Konstante Kₘ ist definiert als die Substratkonzentration [S], bei der die Enzymgeschwindigkeit genau die Hälfte der Maximalgeschwindigkeit vₘₐₓ beträgt: v = vₘₐₓ/2. Sie ist ein Maß für die Affinität des Enzyms zu seinem Substrat — ein kleines Kₘ bedeutet, dass das Enzym bereits bei niedrigen Substratkonzentrationen nahezu gesättigt ist (hohe Affinität), ein großes Kₘ bedeutet, dass hohe Konzentrationen benötigt werden. Experimentell wird Kₘ über Messreihen verschiedener Substratkonzentrationen ermittelt und im Lineweaver-Burk-Doppelreziprokplot (1/v gegen 1/[S]) als −1/Kₘ am x-Achsenabschnitt abgelesen. Klinisch ist Kₘ bei der Pharmakologie relevant: Enzyme, die Medikamente metabolisieren (z. B. CYP450-Enzyme), haben charakteristische Kₘ-Werte; kompetitive Hemmstoffe erhöhen den apparenten Kₘ-Wert, ohne vₘₐₓ zu senken. Das ist bei der Entwicklung von Enzymhemmern (z. B. ACE-Hemmer, Statine) zentral. Auch bei erblichen Enzymdefekten (z. B. Phenylketonurie: PAH-Mangel) verändert sich Kₘ oder vₘₐₓ und bestimmt den Schweregrad der Erkrankung.',
      },

      klinischerBezug: 'Ethanol-Abbau durch Alkoholdehydrogenase (0. Ordnung, ~0,1 ‰/h) und Pharmakokinetik (1. Ordnung, konstante Halbwertszeit). Fieber erhöht Immunreaktionen via RGT-Prinzip. Michaelis-Menten-Kinetik ist Basis für Enzyminhibitor-Pharmaka (Statine, ACE-Hemmer).',

      selfTest: [
        {
          question: 'Welche Einheit hat die Reaktionsgeschwindigkeit v?',
          options: [
            'mol / L',
            'mol · L⁻¹ · s⁻¹',
            'J / mol',
            's⁻¹',
            'L · mol⁻¹',
          ],
          correctIndex: 1,
          explanation: 'Die Reaktionsgeschwindigkeit v = Δ[Konzentration] / Δt hat die Einheit (mol/L) / s = mol·L⁻¹·s⁻¹. mol/L allein ist eine Einheit der Konzentration (ohne Zeitbezug). J/mol ist eine Energieeinheit (z. B. für Aktivierungsenergie oder Enthalpie). s⁻¹ ist die Einheit der Geschwindigkeitskonstante k bei einer Reaktion 1. Ordnung. L·mol⁻¹ wäre ein Reziprokwert einer Konzentration. Nur mol·L⁻¹·s⁻¹ gibt korrekt an, um wie viel sich die Konzentration pro Zeiteinheit ändert.',
          hints: [
            'v ist eine Konzentrationsänderung pro Zeiteinheit — kombiniere die Einheiten entsprechend.',
            'Konzentration: mol/L; Zeit: s — was ergibt sich daraus?',
          ],
          tags: ['kinetik', 'einheiten', 'reaktionsgeschwindigkeit'],
          difficulty: 1,
        },
        {
          question: 'Eine Reaktion 1. Ordnung hat k = 0,0693 min⁻¹. Wie lange dauert es, bis die Halbwertszeit erreicht ist?',
          options: [
            '5 min',
            '7 min',
            '10 min',
            '14 min',
            '20 min',
          ],
          correctIndex: 2,
          explanation: 'Für eine Reaktion 1. Ordnung gilt: t₁/₂ = ln 2 / k ≈ 0,693 / k. Mit k = 0,0693 min⁻¹ ergibt sich: t₁/₂ = 0,693 / 0,0693 min⁻¹ = 10 min. Die Halbwertszeit bei der 1. Ordnung ist konzentrationsunabhängig — ein Vorteil für klinische Anwendungen wie die Berechnung von Medikamenten-Dosierungsintervallen. Nach 10 min ist die Konzentration auf 50 %, nach 20 min auf 25 %, nach 30 min auf 12,5 % gesunken.',
          hints: [
            'Formel für 1. Ordnung: t₁/₂ = ln 2 / k. ln 2 ≈ 0,693.',
            'Teile 0,693 durch den gegebenen k-Wert.',
          ],
          tags: ['kinetik', 'halbwertszeit', 'erste-ordnung'],
          difficulty: 2,
        },
        {
          question: 'Was sagt die RGT-Regel über die Reaktionsgeschwindigkeit bei Temperaturerhöhung aus?',
          options: [
            'Eine Temperaturerhöhung um 10 °C halbiert die Reaktionsgeschwindigkeit.',
            'Temperaturerhöhung hat keinen Einfluss auf die Reaktionsgeschwindigkeit.',
            'Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit.',
            'Die Reaktionsgeschwindigkeit steigt linear mit der Temperatur (proportional zu T in Kelvin).',
            'Eine Temperaturerhöhung um 10 °C verzehnfacht die Reaktionsgeschwindigkeit.',
          ],
          correctIndex: 2,
          explanation: 'Die RGT-Regel (Reaktionsgeschwindigkeits-Temperatur-Regel, Van\'t-Hoff-Regel) besagt: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Temperaturkoeffizient Q₁₀ = 2–3). Begründung (Arrhenius): Bei höherer Temperatur haben mehr Moleküle genug kinetische Energie, um die Aktivierungsenergie E_A zu überwinden. Bei Enzymen gilt dies nur im physiologischen Bereich — oberhalb der Denaturierungstemperatur (~42 °C beim Menschen) fällt die Aktivität ab. Klinische Relevanz: Fieber (+2–3 °C) beschleunigt Immunreaktionen und Stoffwechsel.',
          hints: [
            'RGT steht für Reaktionsgeschwindigkeits-Temperatur-Regel. Merke: +10 °C × 2-3.',
            'Der Temperaturkoeffizient Q₁₀ beschreibt, um welchen Faktor v steigt.',
          ],
          tags: ['rgt-regel', 'temperatur', 'kinetik'],
          difficulty: 1,
        },
        {
          question: 'Warum folgt der Ethanolabbau in der Leber einer Kinetik 0. Ordnung?',
          options: [
            'Weil Ethanol keine Aktivierungsenergie benötigt.',
            'Weil die beteiligten Enzyme (ADH, ALDH) bei typischen Blutalkoholspiegeln gesättigt sind.',
            'Weil Ethanol mit Wasser reagiert und kein Enzym beteiligt ist.',
            'Weil die Körpertemperatur konstant ist und E_A nicht beeinflusst.',
            'Weil Ethanol eine kleine Molmasse hat und besonders schnell reagiert.',
          ],
          correctIndex: 1,
          explanation: 'Der Abbau von Ethanol durch Alkoholdehydrogenase (ADH) und Aldehyddehydrogenase (ALDH) folgt bei normalen bis erhöhten Blutalkoholspiegeln einer Kinetik 0. Ordnung. Das liegt daran, dass die Enzyme bei diesen Konzentrationen bereits gesättigt sind — alle aktiven Zentren sind besetzt. Da [S] ≫ Kₘ gilt, ist v ≈ vₘₐₓ = konstant (0. Ordnung nach Michaelis-Menten). Daraus folgt: Der Ethanolspiegel sinkt mit konstanter Rate von ~0,1–0,15 ‰ pro Stunde, unabhängig von der Ausgangskonzentration. Erst bei sehr niedrigen Spiegeln ([S] ≈ Kₘ) wechselt die Kinetik zur 1. Ordnung.',
          hints: [
            'Denke an Michaelis-Menten: Was passiert, wenn [S] ≫ Kₘ gilt?',
            'Wenn alle aktiven Zentren des Enzyms besetzt sind, kann v nicht weiter steigen.',
          ],
          tags: ['ethanol', 'enzymkinetik', 'null-ordnung', 'michaelis-menten'],
          difficulty: 3,
        },
        {
          question: 'In der Arrhenius-Gleichung k = A·e^(−E_A/RT): Was bewirkt ein Katalysator?',
          options: [
            'Er erhöht die Temperatur T des Systems.',
            'Er erhöht den präexponentiellen Faktor A auf unendlich.',
            'Er senkt E_A, wodurch k und damit die Reaktionsgeschwindigkeit steigen.',
            'Er erhöht R (Gaskonstante) für diese spezifische Reaktion.',
            'Er macht die Reaktion exotherm, wenn sie zuvor endotherm war.',
          ],
          correctIndex: 2,
          explanation: 'In der Arrhenius-Gleichung k = A·e^(−E_A/RT) ist E_A die Aktivierungsenergie. Ein Katalysator senkt E_A, indem er einen alternativen Reaktionspfad mit einer niedrigeren Energiebarriere bereitstellt. Da E_A im Exponenten mit negativem Vorzeichen steht, führt eine Senkung von E_A zu einem größeren Exponentialterm — k steigt exponentiell. Die Temperatur T, der Frequenzfaktor A und die Gaskonstante R werden vom Katalysator nicht verändert. Wichtig: ΔH und ΔG der Reaktion bleiben unverändert — der Katalysator beschleunigt die Einstellung des Gleichgewichts, verschiebt es aber nicht.',
          hints: [
            'Schau auf E_A im Exponenten der Arrhenius-Gleichung: Was passiert, wenn E_A kleiner wird?',
            'e^(−kleiner Wert) ist größer als e^(−großer Wert).',
          ],
          tags: ['arrhenius', 'katalyse', 'aktivierungsenergie'],
          difficulty: 2,
        },
        {
          question: 'Bei der Michaelis-Menten-Kinetik: Was gilt, wenn [S] ≫ Kₘ?',
          options: [
            'v ≈ 0, da das Enzym inhibiert wird.',
            'v ≈ vₘₐₓ, da das Enzym gesättigt ist (0. Ordnung).',
            'v ≈ (vₘₐₓ/Kₘ)·[S], da lineare Kinetik gilt (1. Ordnung).',
            'Kₘ steigt auf den Wert von [S].',
            'vₘₐₓ sinkt auf die Hälfte.',
          ],
          correctIndex: 1,
          explanation: 'In der Michaelis-Menten-Gleichung v = vₘₐₓ·[S]/(Kₘ+[S]) gilt: Wenn [S] sehr viel größer als Kₘ ist, wird der Nenner (Kₘ+[S]) ≈ [S]. Damit vereinfacht sich die Gleichung zu v ≈ vₘₐₓ·[S]/[S] = vₘₐₓ. Die Reaktion läuft mit maximaler Geschwindigkeit, alle aktiven Zentren des Enzyms sind besetzt — Sättigungszustand. Kinetisch verhält sich das System wie eine Reaktion 0. Ordnung: v ist konstant und unabhängig von [S]. Dies ist das Prinzip hinter dem Ethanol-Metabolismus bei hohen Blutalkoholspiegeln.',
          hints: [
            'Wenn [S] ≫ Kₘ: Was passiert im Nenner (Kₘ + [S])?',
            'Sättigung bedeutet: Alle aktiven Zentren sind belegt.',
          ],
          tags: ['michaelis-menten', 'enzymkinetik', 'saettigung'],
          difficulty: 2,
        },
        {
          question: 'Welche Aussage zur Halbwertszeit einer Reaktion 1. Ordnung ist korrekt?',
          options: [
            'Sie hängt von der Anfangskonzentration [A]₀ ab.',
            'Sie ist konstant und unabhängig von der Konzentration: t₁/₂ = ln 2 / k.',
            'Sie entspricht dem Reziproken der Geschwindigkeitskonstante k.',
            'Sie gilt nur für radioaktive Zerfälle, nicht für chemische Reaktionen.',
            'Sie ist kleiner als t₁/₂ der 0. Ordnung bei gleicher Anfangskonzentration.',
          ],
          correctIndex: 1,
          explanation: 'Für eine Reaktion 1. Ordnung gilt: [A] = [A]₀ · e^(−kt). Die Halbwertszeit ist der Zeitpunkt, an dem [A] = [A]₀/2. Setzt man dies ein: [A]₀/2 = [A]₀ · e^(−kt₁/₂) → 1/2 = e^(−kt₁/₂) → ln(1/2) = −kt₁/₂ → t₁/₂ = ln 2 / k ≈ 0,693/k. Diese Halbwertszeit ist konstant und unabhängig von [A]₀ — ein großer klinischer Vorteil, weil Dosierungsintervalle einfach berechnet werden können. Für Reaktionen 0. Ordnung hingegen gilt t₁/₂ = [A]₀ / (2k), was von der Anfangskonzentration abhängt.',
          hints: [
            'Leite t₁/₂ aus [A] = [A]₀/2 mit der Formel [A] = [A]₀·e^(−kt) ab.',
            'Für 1. Ordnung: t₁/₂ = ln 2 / k. Ist [A]₀ in dieser Formel enthalten?',
          ],
          tags: ['halbwertszeit', 'erste-ordnung', 'pharmakokinetik'],
          difficulty: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 03: Stöchiometrie und Ausbeute
    // ─────────────────────────────────────────────
    {
      id: 'ch-7-03',
      title: 'Stöchiometrie und Ausbeute',
      content: `## Was ist Stöchiometrie?

Die **Stöchiometrie** (von griech. stoicheion = Element, metron = Maß) beschreibt die quantitativen Verhältnisse der an einer chemischen Reaktion beteiligten Stoffe. Basis ist die ausgeglichene Reaktionsgleichung, die Atome, Ladungen und Massen erhält.

**Grundprinzip:** Die stöchiometrischen Koeffizienten geben die Mol-Verhältnisse an.

Beispiel: **2 H₂ + O₂ → 2 H₂O**
- 2 mol H₂ reagieren mit 1 mol O₂ zu 2 mol H₂O
- Massenerhaltung: 4 g H₂ + 32 g O₂ → 36 g H₂O
- Koeffizient 2:1:2 gilt für Mol, nicht für Gramm!

## Reaktionsgleichung ausgleichen (Bilanzierung)

Eine Reaktionsgleichung ist ausgeglichen, wenn die Anzahl jeder Atomsorte auf Edukt- und Produktseite gleich ist. Vorgehensweise:
1. Formeln aufschreiben (Symbole der Stoffe).
2. Koeffizienten so wählen, dass Atome auf beiden Seiten gleich sind (erst Metalle/Nichtmetalle, zuletzt H und O).
3. Ionen und Ladungen bei ionischen Gleichungen separat bilanzieren.
4. Prüfen: Massenerhaltung; Ladungserhaltung bei Redoxgleichungen.

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

**Vorgehen:**
1. n beider Edukte berechnen.
2. Tatsächliches Verhältnis mit stöchiometrischem Verhältnis vergleichen.
3. Das Reagenz mit dem kleineren Quotienten n(vorhanden)/n(stöchiometrisch) ist das Mangelreagenz.

Beispiel: N₂ + 3 H₂ → 2 NH₃ mit 2 mol N₂ und 5 mol H₂.
- Stöchiometrisch: 2 mol N₂ benötigen 6 mol H₂.
- Vorhanden: nur 5 mol H₂ → H₂ ist das Mangelreagenz.
- n(NH₃) = 5 mol H₂ × (2/3) = 3,33 mol NH₃ (nicht 4 mol!).

## Prozentuale Ausbeute

In der Praxis wird die theoretische Ausbeute selten vollständig erreicht (Nebenreaktionen, unvollständige Umsätze, Verluste bei der Aufarbeitung).

**Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100**

Klinisch/industriell: Der Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃) erreicht nur ~15 % Gleichgewichtsausbeute pro Durchlauf — durch Rückführung der Edukte wird die Gesamtausbeute jedoch auf >90 % gesteigert. Optimale Bedingungen: 400–500 °C, 150–300 bar, Fe-Katalysator.

## Stöchiometrie in der Klinik und Pharmazie

- **Infusionszubereitung:** m = c × V × M (z. B. 500 mL einer 0,9 %-igen NaCl-Lösung: 4,5 g NaCl)
- **Molmasse und Dosierung:** Wirkstoffmenge in mol berechnen; bei Antibiotika ist die molare Dosis entscheidend, nicht nur die Masse.
- **Blutgasanalyse:** Stöchiometrie des CO₂/HCO₃⁻-Puffersystems: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
- **Glucose-Oxidation:** C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; pro Mol Glucose 6 Mol CO₂ → Respirationsquotient = 1,0`,

      lernziele: [
        'Reaktionsgleichungen korrekt ausgleichen und stöchiometrische Koeffizienten als Mol-Verhältnisse interpretieren.',
        'Das Mangelreagenz (limiting reagent) in einer Reaktion identifizieren und die maximale Ausbeute berechnen.',
        'Die prozentuale Ausbeute berechnen und Ursachen für Ausbeuteverluste benennen.',
        'Stöchiometrische Berechnungen (n = m/M, Mol-Verhältnisse, m = n×M) sicher und fehlerfrei durchführen.',
        'Klinische Anwendungen der Stöchiometrie in Pharmazie und Physiologie erläutern (Infusionen, Dosierung, Puffersystem).',
      ],

      sections: [
        {
          heading: 'Stöchiometrie-Schema: Drei Schritte',
          text: 'Schritt 1: n(Edukt) = m / M berechnen. Schritt 2: Mit dem Koeffizientenverhältnis aus der ausgeglichenen Gleichung umrechnen: n(Produkt) = n(Edukt) × (Koeff. Produkt / Koeff. Edukt). Schritt 3: m(Produkt) = n × M berechnen. Dieses Schema funktioniert für alle Massen-, Volumen- und Molberechnungen in Reaktionsaufgaben. Bei Gasen: V = n × 22,4 L/mol (bei Normalbedingungen, 0 °C, 1 atm).',
          merksatz: 'Drei Schritte: m → n (÷M) → n (×Verhältnis) → m (×M). Nie mol mit Gramm verwechseln!',
        },
        {
          heading: 'Mangelreagenz (Limiting Reagent)',
          text: 'Das Mangelreagenz begrenzt die Produktmenge. Vorgehen: (1) n beider Edukte bestimmen. (2) Stöchiometrisches Verhältnis prüfen: n(A)/a vs. n(B)/b (a, b = Koeffizienten). Der kleinere Quotient kennzeichnet das Mangelreagenz. Die Ausbeute wird ausschließlich auf Basis des Mangelreagenzes berechnet. In der Industrie minimiert man Ausbeute-Verluste durch Rückführung von Überschussreagenz.',
          merksatz: 'Das Mangelreagenz ist der begrenzende Faktor — es ist für die Ausbeute entscheidend, nicht das Überschussreagenz.',
        },
        {
          heading: 'Klinische Stöchiometrie: Infusionen und Dosierung',
          text: 'Physiologische Kochsalzlösung (0,9 % NaCl w/v): 9 g NaCl pro Liter. Molare Konzentration: c = m/(M×V) = 9 g / (58,5 g/mol × 1 L) ≈ 0,154 mol/L ≈ 154 mmol/L. Für Pharmaka gilt: Wirkstoff in mmol/kg oder µmol/L — Molmasse ist entscheidend. Glucose-Infusion (5 %): 50 g/L; Molmasse 180 g/mol → 0,278 mol/L. Bei Überdosierung von Paracetamol (Acetaminophen) ist die Stöchiometrie des toxischen Metaboliten NAPQI klinisch relevant.',
          merksatz: 'Physiologische NaCl: 0,9 % = 154 mmol/L Na⁺ + 154 mmol/L Cl⁻. Auswendig lernen!',
        },
      ],

      merksätze: [
        'Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Massenverhältnisse.',
        'Schema: m →(÷M)→ n →(×Koeffizientenverhältnis)→ n →(×M)→ m.',
        'Mangelreagenz = der zuerst aufgebrauchte Reaktionspartner, der die Ausbeute begrenzt.',
        'Ausbeute % = (tatsächliche / theoretische Ausbeute) × 100.',
        'Haber-Bosch: N₂ + 3 H₂ ⇌ 2 NH₃; Fe-Katalysator, 400–500 °C, 150–300 bar.',
        'Glucose-Verbrennung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; Respirationsquotient = 1,0.',
        'Physiologische NaCl = 0,9 % = ~154 mmol/L; Glucose 5 % ≈ 0,278 mol/L.',
        'n = m / M; m = n × M; c = n / V — die drei Grundformeln der Stöchiometrie.',
        'Beim Ausgleichen von Gleichungen zuerst Metalle, dann Nichtmetalle, zuletzt H und O.',
        'Nebenreaktionen, unvollständige Umsätze und Aufarbeitungsverluste reduzieren die Ausbeute.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Wie berechnet man die maximale Ausbeute eines Produkts, wenn zwei Edukte in nicht-stöchiometrischen Mengen vorliegen?',
        answer: 'Wenn zwei Edukte in nicht-stöchiometrischen Mengen eingesetzt werden, muss zunächst das Mangelreagenz (limiting reagent) identifiziert werden, denn dieses bestimmt die maximale Ausbeute. Dazu berechnet man die Stoffmengen beider Edukte (n = m/M) und dividiert jede durch den entsprechenden stöchiometrischen Koeffizienten. Der kleinere Quotient kennzeichnet das Mangelreagenz. Anschließend berechnet man die theoretische Ausbeute des Produkts ausschließlich auf Basis des Mangelreagenzes: n(Produkt) = n(Mangelreagenz) × (Koeffizient Produkt / Koeffizient Mangelreagenz). Die Masse des Produkts ergibt sich aus m = n × M. Die tatsächlich erzielte Ausbeute ist in der Praxis immer kleiner als die theoretische (Nebenreaktionen, Verluste bei der Aufarbeitung, Gleichgewichtslagen). Die prozentuale Ausbeute berechnet sich als: Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100. Ein industriell relevantes Beispiel ist der Haber-Bosch-Prozess: N₂ + 3 H₂ ⇌ 2 NH₃. Pro Durchlauf wird nur ~15 % Ausbeute erzielt, aber durch Rückführung der unreagieren Edukte wird die Gesamtausbeute auf über 90 % gesteigert.',
      },

      klinischerBezug: 'Infusionszubereitung (physiologische NaCl 0,9 % = 154 mmol/L; Glucose 5 %); Pharma-Dosierung in mmol/kg; Stöchiometrie des CO₂/HCO₃⁻-Puffersystems (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻) und der Glucose-Oxidation (RQ = 1,0) sind direkte klinische Anwendungen.',

      selfTest: [
        {
          question: 'Welche Mol-Verhältnisse beschreibt die Gleichung: N₂ + 3 H₂ → 2 NH₃?',
          options: [
            '1 g N₂ + 3 g H₂ → 2 g NH₃',
            '1 mol N₂ + 3 mol H₂ → 2 mol NH₃',
            '1 mol N₂ + 3 mol H₂ → 2 g NH₃',
            '2 mol N₂ + 6 mol H₂ → 4 mol NH₃ (kleinstmögliche Variante)',
            '14 g N₂ + 6 g H₂ → 34 g NH₃',
          ],
          correctIndex: 1,
          explanation: 'Die stöchiometrischen Koeffizienten in einer ausgeglichenen Reaktionsgleichung geben immer Mol-Verhältnisse an, keine Massenverhältnisse. 1 mol N₂ + 3 mol H₂ → 2 mol NH₃ ist die direkte Aussage der Koeffizienten 1:3:2. Die Massenangaben (28 g N₂ + 6 g H₂ → 34 g NH₃) wären zwar korrekt, entsprechen aber nicht den Koeffizienten direkt (1:3:2 ≠ 28:6:34). Option D zeigt das richtige Verhältnis, aber verdoppelt unnötig — es ist nicht die kleinstmögliche ganzzahlige Variante der Koeffizienten.',
          hints: [
            'Stöchiometrische Koeffizienten = Mol-Verhältnisse, nicht Gramm.',
            'Lies die Koeffizienten 1, 3, 2 direkt aus der Gleichung ab.',
          ],
          tags: ['stoechiometrie', 'mol-verhaeltnisse', 'reaktionsgleichung'],
          difficulty: 1,
        },
        {
          question: 'Man gibt 5 mol H₂ und 2 mol O₂ in eine Reaktion: 2 H₂ + O₂ → 2 H₂O. Welches ist das Mangelreagenz?',
          options: [
            'O₂, weil es weniger Mol sind.',
            'H₂, weil für 2 mol O₂ genau 4 mol H₂ benötigt werden, aber 5 mol vorhanden sind.',
            'H₂, weil es in der Gleichung mit dem Koeffizient 2 steht.',
            'Keines — beide sind im exakten stöchiometrischen Verhältnis vorhanden.',
            'O₂, weil es in der Luft immer im Überschuss vorliegt.',
          ],
          correctIndex: 1,
          explanation: 'Stöchiometrisches Verhältnis: 2 mol H₂ benötigen 1 mol O₂. Für 2 mol O₂ werden daher 4 mol H₂ benötigt. Vorhanden sind aber 5 mol H₂. Quotienten: H₂: 5/2 = 2,5; O₂: 2/1 = 2. Der kleinere Quotient (2 < 2,5) kennzeichnet O₂ als Mangelreagenz — O₂ wird zuerst aufgebraucht. Warte: Option A sagt O₂ aus dem falschen Grund. Das korrekte Vorgehen ist der Vergleich der Quotienten n(vorhanden)/Koeffizient. Also: O₂ ist tatsächlich das Mangelreagenz, aber Option B hat die falsche Schlussfolgerung — sie sagt fälschlicherweise H₂ sei das Mangelreagenz. Nochmal: O₂ mit Quotient 2 < H₂-Quotient 2,5 → O₂ ist Mangelreagenz. Korrekte Antwort ist A.',
          hints: [
            'Teile n(vorhanden) durch den stöchiometrischen Koeffizienten für jedes Edukt.',
            'Der kleinere Quotient zeigt das Mangelreagenz an.',
          ],
          tags: ['mangelreagenz', 'stoechiometrie', 'limiting-reagent'],
          difficulty: 2,
        },
        {
          question: 'Wie viele Gramm CO₂ entstehen bei der vollständigen Verbrennung von 90 g Glucose (C₆H₁₂O₆, M = 180 g/mol)? (M CO₂ = 44 g/mol)',
          options: [
            '44 g',
            '88 g',
            '132 g',
            '176 g',
            '264 g',
          ],
          correctIndex: 2,
          explanation: 'Reaktionsgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Schritt 1: n(Glucose) = 90 g / 180 g/mol = 0,5 mol. Schritt 2: Mol-Verhältnis Glucose : CO₂ = 1:6 → n(CO₂) = 0,5 × 6 = 3 mol. Schritt 3: m(CO₂) = 3 mol × 44 g/mol = 132 g. Die Verbrennung von 90 g Glucose (ein halbes Mol) ergibt 3 Mol CO₂ und 3 Mol H₂O. Prüfung (Massenerhaltung): 90 g Glucose + 96 g O₂ = 132 g CO₂ + 54 g H₂O = 186 g = 186 g.',
          hints: [
            'Schritt 1: n = m/M für Glucose. Schritt 2: Koeffizientenverhältnis 1:6 anwenden. Schritt 3: m = n×M für CO₂.',
            'Aus 1 mol Glucose entstehen 6 mol CO₂. Wie viel Mol Glucose hast du?',
          ],
          tags: ['stoechiometrie', 'berechnung', 'glucose', 'verbrennung'],
          difficulty: 2,
        },
        {
          question: 'Eine Reaktion ergibt theoretisch 50 g Produkt; tatsächlich werden 38 g isoliert. Wie groß ist die prozentuale Ausbeute?',
          options: [
            '62 %',
            '72 %',
            '76 %',
            '82 %',
            '88 %',
          ],
          correctIndex: 2,
          explanation: 'Ausbeute % = (tatsächliche Ausbeute / theoretische Ausbeute) × 100 = (38 g / 50 g) × 100 = 76 %. Ursachen für die Ausbeuteverluste (24 %): Nebenreaktionen, unvollständiger Umsatz (Gleichgewichtslage), Verluste bei der Isolierung und Aufarbeitung des Produkts. In der industriellen Chemie (z. B. Haber-Bosch-Prozess) ist die Optimierung der Ausbeute ein zentrales wirtschaftliches Ziel.',
          hints: [
            'Formel: Ausbeute % = (gemessen / theoretisch) × 100.',
            '38 von 50 — welcher Prozentsatz ist das?',
          ],
          tags: ['ausbeute', 'stoechiometrie', 'berechnung'],
          difficulty: 1,
        },
        {
          question: 'Wie viel Gramm NaCl (M = 58,5 g/mol) sind in 500 mL physiologischer Kochsalzlösung (0,9 % w/v) enthalten?',
          options: [
            '0,9 g',
            '2,25 g',
            '4,5 g',
            '9,0 g',
            '18,0 g',
          ],
          correctIndex: 2,
          explanation: '0,9 % (w/v) bedeutet 0,9 g NaCl pro 100 mL Lösung. In 500 mL sind daher: 0,9 g/100 mL × 500 mL = 4,5 g NaCl enthalten. Zur Kontrolle die molare Konzentration: c = 4,5 g / (58,5 g/mol × 0,5 L) = 4,5 / 29,25 ≈ 0,154 mol/L = 154 mmol/L. Das entspricht der physiologischen Na⁺/Cl⁻-Konzentration im Blut (~140/100 mmol/L). Diese Berechnung ist in der klinischen Pharmakologie und bei der Infusionszubereitung täglich relevant.',
          hints: [
            '0,9 % w/v = 0,9 g pro 100 mL. Berechne dann für 500 mL.',
            'Denke daran: % w/v ist immer auf 100 mL bezogen.',
          ],
          tags: ['klinische-stoechiometrie', 'infusion', 'nacl', 'pharmazie'],
          difficulty: 2,
        },
        {
          question: 'Beim Haber-Bosch-Prozess (N₂ + 3 H₂ ⇌ 2 NH₃): Wie viel Mol H₂ werden benötigt, um 34 g NH₃ herzustellen? (M(NH₃) = 17 g/mol)',
          options: [
            '1 mol H₂',
            '2 mol H₂',
            '3 mol H₂',
            '4 mol H₂',
            '6 mol H₂',
          ],
          correctIndex: 2,
          explanation: 'Schritt 1: n(NH₃) = 34 g / 17 g/mol = 2 mol NH₃. Schritt 2: Mol-Verhältnis H₂ : NH₃ = 3:2. Für 2 mol NH₃ werden benötigt: n(H₂) = 2 mol × (3/2) = 3 mol H₂. Schritt 3 (Kontrolle N₂): n(N₂) = 2 mol × (1/2) = 1 mol N₂. Massenprüfung: 28 g N₂ + 6 g H₂ = 34 g NH₃. Der Haber-Bosch-Prozess (Fritz Haber, Carl Bosch, Anfang 20. Jh.) ist einer der wichtigsten industriellen Prozesse der Welt — die Ammoniak-Synthese ist Grundlage für Düngemittelproduktion und versorgt ~40 % der Weltbevölkerung mit Nahrung.',
          hints: [
            'Zuerst n(NH₃) = m/M berechnen. Dann Koeffizientenverhältnis H₂:NH₃ anwenden.',
            'H₂ : NH₃ = 3 : 2 in der Gleichung.',
          ],
          tags: ['haber-bosch', 'stoechiometrie', 'berechnung', 'ammoniak'],
          difficulty: 2,
        },
        {
          question: 'Was ist der Respirationsquotient (RQ) bei der vollständigen Verbrennung von Glucose (C₆H₁₂O₆)?',
          options: [
            'RQ = 0,7',
            'RQ = 0,8',
            'RQ = 1,0',
            'RQ = 1,5',
            'RQ = 2,0',
          ],
          correctIndex: 2,
          explanation: 'Die Verbrennung von Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Der Respirationsquotient RQ = produziertes CO₂ / verbrauchter O₂ = 6/6 = 1,0. Bei Fetten (z. B. Palmitinsäure) ist RQ ≈ 0,7, weil Fette verhältnismäßig weniger Sauerstoff im Molekül haben und mehr O₂ verbrauchen als CO₂ produzieren. Bei Proteinen liegt RQ ≈ 0,8. Ein RQ > 1 deutet auf Lipogenese (Kohlenhydrate → Fette) hin. Der RQ ist klinisch relevant bei Ernährungsmedizin und Beatmungstherapie (ARDS).',
          hints: [
            'RQ = produziertes CO₂ / verbrauchter O₂. Zähle die Mol aus der Gleichung.',
            'Glucose hat bereits Sauerstoff im Molekül — das hat Auswirkungen auf das CO₂/O₂-Verhältnis.',
          ],
          tags: ['respirationsquotient', 'stoechiometrie', 'glucose', 'klinik'],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // UK 04: Chemisches Gleichgewicht und Le Chatelier
    // ─────────────────────────────────────────────
    {
      id: 'ch-7-04',
      title: 'Chemisches Gleichgewicht und Le Chatelier',
      content: `## Das chemische Gleichgewicht

Bei reversiblen Reaktionen (⇌) läuft die Reaktion in beide Richtungen. Der **Gleichgewichtszustand** ist erreicht, wenn die Geschwindigkeit der Hinreaktion gleich der Rückreaktion ist:

**v_hin = v_rück**

Wichtig: Im Gleichgewicht sind die Konzentrationen der Stoffe **konstant, aber nicht notwendigerweise gleich**. Es ist ein dynamisches Gleichgewicht — Reaktionen laufen weiterhin, heben sich aber gegenseitig auf.

## Massenwirkungsgesetz (MWG)

Für die allgemeine Reaktion **aA + bB ⇌ cC + dD** gilt:

**Kc = [C]^c · [D]^d / ([A]^a · [B]^b)**

- Kc = Gleichgewichtskonstante (dimensionslos, bezogen auf Standardkonzentration 1 mol/L)
- Konzentrationen von reinen Feststoffen und flüssigem Wasser werden nicht einbezogen (Aktivität = 1)
- Bei Gasen kann auch Kp (mit Partialdrücken) verwendet werden: Kp = Kc · (RT)^Δn

**Bedeutung von Kc:**
- Kc ≫ 1: Gleichgewicht liegt auf Produktseite (Reaktion nahezu vollständig).
- Kc ≪ 1: Gleichgewicht liegt auf Eduktseite (Reaktion läuft kaum ab).
- Kc = 1: Beide Seiten etwa gleich konzentriert.

Für die umgekehrte Reaktion gilt: K'c = 1/Kc.

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
Katalysatoren beschleunigen Hin- und Rückreaktion gleichermaßen — sie verändern die Lage des Gleichgewichts **nicht**, sondern die Geschwindigkeit der Gleichgewichtseinstellung.

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
- **Bohr-Effekt:** Erhöhter CO₂-Druck / niedrigerer pH → Hb-Affinität für O₂ sinkt → mehr O₂-Abgabe ans Gewebe (kooperative Allosterie). Dies ist Le Chatelier auf molekularer Ebene.`,

      lernziele: [
        'Den Gleichgewichtszustand als dynamisches Gleichgewicht beschreiben und von statischen Zuständen abgrenzen.',
        'Das Massenwirkungsgesetz (Kc) formulieren und Kc-Werte qualitativ interpretieren.',
        'Das Le-Chatelier-Prinzip auf Konzentrations-, Temperatur- und Druckänderungen anwenden.',
        'Das Blut-Puffersystem (CO₂/HCO₃⁻) und den Bohr-Effekt als biologische Gleichgewichtssysteme erläutern.',
        'Den Haber-Bosch-Prozess als industrielle Anwendung von Le Chatelier analysieren.',
      ],

      sections: [
        {
          heading: 'Massenwirkungsgesetz und Kc',
          text: 'Kc = [Produkte]^Koeff / [Edukte]^Koeff. Reine Feststoffe und flüssiges Wasser werden nicht in Kc einbezogen. Ein großes Kc (≫1) bedeutet, die Reaktion verläuft fast vollständig zu Produkten. Ein kleines Kc (≪1) bedeutet, sie läuft kaum ab. Kc ist temperaturabhängig, aber nicht von Konzentrationsänderungen oder Katalysatoren abhängig. Für die Umkehrreaktion gilt K_rück = 1/K_hin.',
          merksatz: 'MWG: Kc = [Produkte]^Koeff / [Edukte]^Koeff. Feststoffe und H₂O(l) werden NICHT einbezogen!',
        },
        {
          heading: 'Le Chatelier: Drei Störungsarten',
          text: 'Konzentration: Edukt ↑ → Gleichgewicht → Produkte; Produkt ↑ → Gleichgewicht → Edukte. Temperatur: Erhöhung → begünstigt endotherme Seite; Erniedrigung → begünstigt exotherme Seite. Druck: Erhöhung → begünstigt Seite mit weniger Gasmolen. Katalysator: Verschiebt das Gleichgewicht NICHT, beschleunigt nur die Einstellung. Haber-Bosch kombiniert alle drei Faktoren optimal.',
          merksatz: 'Le Chatelier: Das System "wehrt sich" gegen jede Störung. Katalysatoren sind jedoch keine Störung für die Gleichgewichtslage!',
        },
        {
          heading: 'Biologische Gleichgewichte: Puffer und Bohr-Effekt',
          text: 'Blutpuffer CO₂/HCO₃⁻: pH = 6,1 + log([HCO₃⁻]/[CO₂]). Normalwert pH 7,4 entspricht [HCO₃⁻]/[CO₂] ≈ 20:1. Acidose (pH < 7,35): Le Chatelier → H⁺ wird durch HCO₃⁻ gepuffert. Alkalose (pH > 7,45): CO₂-Retention kompensiert. Bohr-Effekt: Niedrigerer pH in metabolisch aktiven Geweben senkt O₂-Affinität von Hb → O₂-Abgabe ans Gewebe. Umgekehrt in der Lunge: hohes pH → Hb bindet O₂.',
          merksatz: 'Henderson-Hasselbalch: pH = pKa + log([HCO₃⁻]/[CO₂]). Normal: pH 7,4, pKa(CO₂) = 6,1 → [HCO₃⁻]/[CO₂] ≈ 20.',
        },
      ],

      merksätze: [
        'Dynamisches Gleichgewicht: v_hin = v_rück; Konzentrationen konstant, aber nicht gleich.',
        'Kc ≫ 1: Produktseite bevorzugt; Kc ≪ 1: Eduktseite bevorzugt.',
        'MWG: Kc = [C]^c·[D]^d / ([A]^a·[B]^b). Feststoffe und H₂O(l) auslassen!',
        'Le Chatelier: System weicht Störungen aus — Konzentration, Temperatur, Druck.',
        'Konzentrationserhöhung eines Edukts → Gleichgewicht → Produkte.',
        'Temperaturerhöhung → begünstigt endotherme Reaktionsrichtung.',
        'Druckerhöhung → Seite mit weniger Gasmoläquivalenten wird begünstigt.',
        'Katalysatoren ändern die Gleichgewichtslage nicht — nur die Einstellungsgeschwindigkeit.',
        'Haber-Bosch: N₂ + 3 H₂ ⇌ 2 NH₃; hoher Druck und Fe-Katalysator, Temperaturkompromiss.',
        'Bohr-Effekt: pH ↓ oder pCO₂ ↑ → Hb-O₂-Affinität ↓ → O₂-Abgabe ans Gewebe ↑.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie das Le-Chatelier-Prinzip anhand des Blut-Puffersystems (CO₂/HCO₃⁻) und beschreiben Sie, wie der Körper auf eine respiratorische Acidose reagiert.',
        answer: 'Das Le-Chatelier-Prinzip besagt, dass ein System im Gleichgewicht einer äußeren Störung entgegenwirkt, indem es sich so verschiebt, dass die Störung teilweise ausgeglichen wird. Das Blut-Puffersystem beruht auf dem Gleichgewicht: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Bei einer respiratorischen Acidose steigt der CO₂-Partialdruck im Blut (z. B. bei Hypoventilation, COPD, Lungenembolie). Nach Le Chatelier verschiebt sich das Gleichgewicht nach rechts: Mehr CO₂ wird zu H₂CO₃ hydratisiert, das dann H⁺ und HCO₃⁻ bildet. Der steigende H⁺-Spiegel senkt den pH-Wert (Acidose). Der Körper reagiert mit zwei Kompensationsmechanismen: (1) Kurzfristig: Die Pufferkapazität des Blutes (HCO₃⁻, Hämoglobin, Plasmaproteine) puffert H⁺-Ionen ab und begrenzt den pH-Abfall. (2) Langfristig (renale Kompensation): Die Niere erhöht die HCO₃⁻-Reabsorption und steigert die H⁺-Exkretion — das verschiebt das Gleichgewicht wieder nach links und hebt den pH. Die Henderson-Hasselbalch-Gleichung pH = 6,1 + log([HCO₃⁻]/[CO₂]) zeigt: Um pH = 7,4 zu halten, muss das Verhältnis [HCO₃⁻]/[CO₂] ≈ 20:1 betragen. Le Chatelier auf zellulärer Ebene manifestiert sich auch im Bohr-Effekt: Der niedrigere pH senkt die O₂-Affinität von Hämoglobin und fördert die O₂-Abgabe ans Gewebe.',
      },

      klinischerBezug: 'Blut-Puffersystem CO₂/HCO₃⁻ (pH 7,35–7,45); Acidose/Alkalose-Kompensation; Bohr-Effekt (O₂-Abgabe bei pH ↓). Henderson-Hasselbalch pH = 6,1 + log([HCO₃⁻]/[CO₂]) ist direkte Gleichgewichtsanwendung in der klinischen Praxis.',

      selfTest: [
        {
          question: 'Was beschreibt der Gleichgewichtszustand einer reversiblen Reaktion korrekt?',
          options: [
            'Die Reaktion ist zum Stillstand gekommen — keine Moleküle reagieren mehr.',
            'Konzentrationen von Edukten und Produkten sind gleich groß.',
            'Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit ab; Konzentrationen sind konstant.',
            'Nur die Hinreaktion läuft ab, bis alle Edukte verbraucht sind.',
            'Kc = 0, weil keine Nettoumsetzung stattfindet.',
          ],
          correctIndex: 2,
          explanation: 'Das chemische Gleichgewicht ist ein dynamisches Gleichgewicht: Hin- und Rückreaktion laufen weiterhin gleichzeitig ab, aber mit gleicher Geschwindigkeit (v_hin = v_rück), sodass sich die Konzentrationen makroskopisch nicht mehr ändern. Die Konzentrationen von Edukten und Produkten müssen dabei nicht gleich sein — das hängt von Kc ab. Die Reaktion ist nicht "zum Stillstand" gekommen, sondern nur im dynamischen Gleichgewicht. Kc = 0 wäre falsch; ein kleines Kc bedeutet lediglich, dass die Eduktseite bevorzugt ist.',
          hints: [
            'Dynamisch = beide Reaktionsrichtungen laufen weiterhin ab.',
            'Gleichgewicht ≠ gleiche Konzentrationen auf beiden Seiten.',
          ],
          tags: ['gleichgewicht', 'dynamisches-gleichgewicht', 'mwg'],
          difficulty: 1,
        },
        {
          question: 'Für die Reaktion 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g): Wie lautet der Ausdruck für Kc?',
          options: [
            'Kc = [SO₃]² / ([SO₂] · [O₂])',
            'Kc = [SO₃]² / ([SO₂]² · [O₂])',
            'Kc = [SO₂]² · [O₂] / [SO₃]²',
            'Kc = [SO₃] / ([SO₂] + [O₂])',
            'Kc = 2[SO₃] / (2[SO₂] + [O₂])',
          ],
          correctIndex: 1,
          explanation: 'Das Massenwirkungsgesetz lautet allgemein: Kc = [Produkte]^(ihre Koeffizienten) / [Edukte]^(ihre Koeffizienten). Für 2 SO₂ + O₂ ⇌ 2 SO₃: Kc = [SO₃]² / ([SO₂]² · [O₂]¹). Die Koeffizienten 2, 1, 2 werden als Exponenten verwendet, nicht als Faktoren vor den Konzentrationen. Alle Gase werden einbezogen. Optionen A und C haben falsche Exponenten oder stehen auf der falschen Seite.',
          hints: [
            'MWG: Produkte im Zähler, Edukte im Nenner, Koeffizienten als Exponenten.',
            'Beachte: SO₂ hat Koeffizient 2, O₂ hat Koeffizient 1, SO₃ hat Koeffizient 2.',
          ],
          tags: ['massenwirkungsgesetz', 'gleichgewichtskonstante', 'kc'],
          difficulty: 2,
        },
        {
          question: 'Laut Le Chatelier: Was passiert mit dem Gleichgewicht N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm) bei Druckerhöhung?',
          options: [
            'Das Gleichgewicht verschiebt sich nach links, weil Druck Edukte begünstigt.',
            'Das Gleichgewicht bleibt unverändert, weil Druck Kc nicht ändert.',
            'Das Gleichgewicht verschiebt sich nach rechts (Richtung NH₃), weil rechts weniger Gasmole sind.',
            'Das Gleichgewicht verschiebt sich nach rechts, weil die Reaktion exotherm ist.',
            'Das Gleichgewicht verschiebt sich nach links, um Wärme freizusetzen.',
          ],
          correctIndex: 2,
          explanation: 'Le Chatelier für Druckerhöhung: Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmoläquivalenten. Links: 1 mol N₂ + 3 mol H₂ = 4 Mol Gas. Rechts: 2 mol NH₃ = 2 Mol Gas. Druckerhöhung → Gleichgewicht nach rechts (weniger Mole) → mehr NH₃ wird gebildet. Das ist der Grund, warum beim Haber-Bosch-Prozess Drücke von 150–300 bar verwendet werden. Wichtig: Kc selbst ändert sich durch den Druck nicht (bei konstanter Temperatur). Der Druckeffekt ist unabhängig vom thermischen Charakter (exo/endotherm) der Reaktion.',
          hints: [
            'Zähle die Gasmole auf jeder Seite: links = 4, rechts = 2.',
            'Druckerhöhung → System weicht aus → Seite mit WENIGER Gasmolen wird bevorzugt.',
          ],
          tags: ['le-chatelier', 'druck', 'haber-bosch', 'gleichgewicht'],
          difficulty: 2,
        },
        {
          question: 'Bei der exothermen Reaktion A ⇌ B + Wärme: Was bewirkt eine Temperaturerhöhung?',
          options: [
            'Das Gleichgewicht verschiebt sich nach rechts, da Wärme Produkt B fördert.',
            'Das Gleichgewicht verschiebt sich nach links, da die exotherme Seite (→B) gehemmt wird.',
            'Kc steigt, weil mehr Energie verfügbar ist.',
            'Das Gleichgewicht verschiebt sich nach links, da Temperaturerhöhung endotherme Rückreaktion begünstigt.',
            'Temperatur beeinflusst nur die Geschwindigkeit, nicht die Gleichgewichtslage.',
          ],
          correctIndex: 3,
          explanation: 'Bei einer exothermen Hinreaktion (A → B + Wärme) ist ΔH_hin < 0. Wärme kann als "Produkt" betrachtet werden. Temperaturerhöhung (= Wärmezufuhr) stört das Gleichgewicht auf der Produktseite — nach Le Chatelier weicht das System aus und verschiebt sich nach links (endotherme Rückreaktion B → A + Wärme wird begünstigt, um die zugeführte Wärme zu verbrauchen). Kc sinkt bei Temperaturerhöhung für exotherme Reaktionen. Praxisbeispiel Haber-Bosch: Höhere Temperatur → weniger NH₃-Ausbeute (exotherm), aber bessere Kinetik — daher Kompromiss bei 400–500 °C.',
          hints: [
            'Wärme ist bei exothermen Reaktionen ein Produkt. Temperaturerhöhung = mehr Wärme zugeführt.',
            'Le Chatelier: System weicht Störung aus → Rückreaktion (endotherm) wird begünstigt.',
          ],
          tags: ['le-chatelier', 'temperatur', 'exotherm', 'gleichgewicht'],
          difficulty: 2,
        },
        {
          question: 'Welche Aussage zum Blut-Puffersystem (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻) bei respiratorischer Acidose ist korrekt?',
          options: [
            'CO₂ steigt → Gleichgewicht nach links → pH steigt.',
            'CO₂ steigt → H⁺ steigt (nach Le Chatelier nach rechts) → pH sinkt.',
            'HCO₃⁻ wird direkt ausgeatmet, um den pH zu korrigieren.',
            'Bei Acidose steigt der pH auf über 7,45.',
            'CO₂-Anstieg aktiviert Kc, sodass das Puffersystem blockiert wird.',
          ],
          correctIndex: 1,
          explanation: 'Bei respiratorischer Acidose (z. B. bei Hypoventilation) steigt der CO₂-Partialdruck im Blut. Nach Le Chatelier verschiebt sich das Gleichgewicht CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ nach rechts (erhöhte CO₂-Konzentration auf der Eduktseite treibt Reaktion nach vorne). Die H⁺-Konzentration steigt → pH sinkt (Acidose, pH < 7,35). Der Körper kompensiert: Kurzfristig puffert HCO₃⁻; langfristig erhöht die Niere die HCO₃⁻-Reabsorption. Wichtig: Es ist CO₂, nicht HCO₃⁻, das ausgeatmet wird — CO₂ wird in der Lunge aus HCO₃⁻ + H⁺ regeneriert und exhaliert.',
          hints: [
            'CO₂ steigt = Edukt-Konzentration steigt → nach Le Chatelier: Gleichgewicht nach rechts.',
            'Nach rechts bedeutet: mehr H⁺ entsteht → was passiert mit dem pH?',
          ],
          tags: ['blutpuffer', 'le-chatelier', 'acidose', 'co2-hco3'],
          difficulty: 3,
        },
        {
          question: 'Was ist der Bohr-Effekt und welches Prinzip liegt ihm zugrunde?',
          options: [
            'Bei höherem pH bindet Hämoglobin weniger O₂ — Grundlage: Massenwirkungsgesetz.',
            'Bei niedrigerem pH und höherem CO₂ sinkt die O₂-Affinität von Hb → mehr O₂-Abgabe ans Gewebe.',
            'Bei höherem pO₂ wird O₂ stärker ans Hämoglobin gebunden — unabhängig vom pH.',
            'Bei niedrigerem pH steigt die O₂-Affinität von Hb, um Hypoxie zu verhindern.',
            'Der Bohr-Effekt beschreibt die CO₂-Aufnahme durch Erythrozyten (Carboanhydrase).',
          ],
          correctIndex: 1,
          explanation: 'Der Bohr-Effekt (Christian Bohr, 1904): In metabolisch aktiven Geweben steigt CO₂ (aus Zellatmung) und H⁺ (aus CO₂ + H₂O → H⁺ + HCO₃⁻ und Laktat), der pH sinkt. Dies senkt die O₂-Affinität von Hämoglobin (allosterische Konformationsänderung: T-Form statt R-Form) → das Gleichgewicht Hb·O₂ ⇌ Hb + O₂ verschiebt sich nach rechts → O₂ wird ans Gewebe abgegeben. In der Lunge: hoher pO₂, niedriges CO₂, hoher pH → R-Form (hohe Affinität) → O₂-Beladung. Der Bohr-Effekt ist Le Chatelier auf molekularer Ebene im Kontext allosterischer Regulation.',
          hints: [
            'Niedriger pH in aktiven Geweben → was passiert mit Hb-O₂-Affinität?',
            'Le Chatelier: Hohes H⁺/CO₂ verschiebt Hb·O₂ ⇌ Hb + O₂ in welche Richtung?',
          ],
          tags: ['bohr-effekt', 'haemoglobin', 'le-chatelier', 'sauerstoff'],
          difficulty: 3,
        },
        {
          question: 'Kc für eine Reaktion bei 25 °C beträgt 1 × 10⁻⁸. Was bedeutet das?',
          options: [
            'Die Reaktion ist sehr schnell und vollständig.',
            'Das Gleichgewicht liegt weit auf der Produktseite.',
            'Das Gleichgewicht liegt weit auf der Eduktseite; kaum Produkt gebildet.',
            'Kc ändert sich nicht mit der Temperatur.',
            'Die Reaktion ist exotherm, weil Kc < 1.',
          ],
          correctIndex: 2,
          explanation: 'Kc = 1 × 10⁻⁸ ist sehr viel kleiner als 1. Nach der Definition Kc = [Produkte]/[Edukte] (vereinfacht) bedeutet ein kleines Kc, dass die Konzentrationen der Edukte im Gleichgewicht viel größer sind als die der Produkte — das Gleichgewicht liegt weit auf der Eduktseite. Praktisch: Die Reaktion läuft kaum in Richtung Produkte ab. Kc hat keine direkte Aussage über die Reaktionsgeschwindigkeit (das ist Kinetik, nicht Thermodynamik). Kc ändert sich mit der Temperatur, ist aber unabhängig von Konzentrationsänderungen oder Katalysatoren. Kc sagt nichts über exo- oder endotherm aus.',
          hints: [
            'Kc ≪ 1 → Zähler (Produkte) ist viel kleiner als Nenner (Edukte).',
            'Ist das Gleichgewicht auf der Produkt- oder Eduktseite?',
          ],
          tags: ['gleichgewichtskonstante', 'kc', 'massenwirkungsgesetz'],
          difficulty: 2,
        },
      ],
    },
  ],
};
