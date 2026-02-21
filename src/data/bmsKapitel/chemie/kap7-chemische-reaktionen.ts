import type { Kapitel } from '../types';

export const chemKap7: Kapitel = {
  id: 'chem-kap7',
  title: 'Chemische Reaktionen und Stöchiometrie',
  subject: 'chemie',
  icon: '⚗️',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ch-7-01',
      title: 'Chemische Symbole, Formeln und Reaktionsgleichungen',
      content: `## Elementsymbole

Elementsymbole sind ein- oder zweibuchstabige Kürzel für chemische Elemente. Häufige Elemente und ihre Symbole:

- **H** (Wasserstoff), **C** (Kohlenstoff), **N** (Stickstoff), **O** (Sauerstoff)
- **Na** (Natrium, von lat. Natrium), **K** (Kalium, von lat. Kalium), **Ca** (Calcium)
- **Fe** (Eisen, von lat. Ferrum), **Cu** (Kupfer, von lat. Cuprum), **Zn** (Zink)
- **Cl** (Chlor), **S** (Schwefel), **P** (Phosphor), **Mg** (Magnesium)

## Summenformeln und Strukturformeln

**Summenformel**: Gibt Art und Anzahl der Atome an, nicht ihre Anordnung. H₂O: 2 H + 1 O. C₂H₅OH (Ethanol): 2 C, 6 H, 1 O. Summenformeln können mehrdeutig sein: C₃H₈O kann 1-Propanol oder 2-Propanol sein (Konstitutionsisomere).

**Strukturformel**: Zeigt die Anordnung der Atome und Art der Bindungen. Ermöglicht eindeutige Identifikation.

## Reaktionsgleichungen aufstellen

Reaktionsgleichungen beschreiben chemische Reaktionen: Edukte (links vom →) → Produkte (rechts). Das Gesetz der **Massenerhaltung** (Lavoisier) fordert, dass jede Atomsorte auf beiden Seiten gleich oft auftritt. Das Ausgleichen erfolgt durch Stöchiometrische Koeffizienten vor den Formeln (nicht durch Änderung der Formeln selbst!).

**Beispiel**: Verbrennung von Methan: CH₄ + 2O₂ → CO₂ + 2H₂O. Check: C: 1=1 ✓, H: 4=4 ✓, O: 4=4 ✓.

## Oxidationszahlen

Oxidationszahlen sind formal zugeordnete Ladungen in einer Verbindung. Regeln: Elementares Atom = 0; O in Verbindungen = −2 (außer Peroxide: −1); H = +1 (außer Hydride: −1); Summe der Oxidationszahlen = Gesamtladung. Beispiel: In SO₄²⁻: S + 4×(−2) = −2 → S = +6.`,
      lernziele: [
        "Die Symbole der häufigen Elemente (H, C, N, O, Na, K, Ca, Fe, Cu, Zn, Cl, S, P) kennen",
        "Reaktionsgleichungen aufstellen und mithilfe des Masserhaltungssatzes ausgleichen",
        "Oxidationszahlen in einfachen Verbindungen bestimmen",
      ],
      sections: [
        {
          heading: "Vorgehen beim Ausgleichen von Reaktionsgleichungen",
          text: "Reaktionsgleichungen werden nach einem systematischen Schema ausgeglichen: (1) Formeln aller Edukte und Produkte aufschreiben. (2) Atome einer Sorte zählen, dann ausgleichen — beginne mit dem komplexesten Molekül. (3) Wasserstoff zuletzt ausgleichen, Sauerstoff vorletzt. Beispiel: Verbrennung von Glucose: C₆H₁₂O₆ + O₂ → CO₂ + H₂O. Ausgleichen: C: 6CO₂; H: 6H₂O; O: 6+6=12 auf rechts, links: 6 aus Glucose + ? O₂. O₂: 6CO₂ + 6H₂O = 12 O-Atome, davon 6 aus Glucose → 6 O₂ fehlen → Koeffizient 6. Ergebnis: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Check: C:6=6 ✓, H:12=12 ✓, O:18=18 ✓.",
        },
        {
          heading: "Oxidationszahlen und Redoxreaktionen",
          text: "Oxidationszahlen (OZ) sind ein nützliches Hilfsmittel zur Identifikation von Redoxreaktionen. Oxidation = Erhöhung der OZ (Elektronenabgabe); Reduktion = Erniedrigung der OZ (Elektronenaufnahme). Merkhilfe: LEO GER (Loss of Electrons = Oxidation, Gain of Electrons = Reduction). Beispiel: 2Na + Cl₂ → 2NaCl. Na: 0→+1 (Oxidation), Cl: 0→-1 (Reduktion). In biochemischen Reaktionen sind NAD⁺/NADH das wichtigste Redoxpaar: NADH + H⁺ → NAD⁺ + 2H (NAD⁺ wird reduziert, nimmt 2 Elektronen und 1 Proton auf). In der Atmungskette werden diese Elektronen schließlich auf O₂ übertragen.",
        },
      ],
      merksätze: [
        "Masserhaltung: Jedes Atom rechts genauso oft wie links (Koeffizienten, nicht Indizes ändern!)",
        "Symbole merken: Fe=Eisen, Cu=Kupfer, Na=Natrium, K=Kalium, Au=Gold",
        "OZ: O=-2, H=+1 in Verbindungen; Summe = Gesamtladung",
      ],
      klinischerBezug: "Die Glucoseverbrennung C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~2870 kJ/mol ist die Grundlage des zellulären Energiestoffwechsels. Das ausgeatmete CO₂ und das gebildete Wasser entstammen direkt dieser stöchiometrischen Reaktion.",
      altfrage: {
        question: "Gleichen Sie die Reaktionsgleichung aus: Fe + O₂ → Fe₂O₃ (Eisenrost)",
        answer: "Unausgeglichen: Fe + O₂ → Fe₂O₃. Ausgleichen: Fe: 2 auf rechts → 4Fe links; O: 3 auf rechts (ungerade, O₂ paarweise) → Multiplizieren: 4Fe + 3O₂ → 2Fe₂O₃. Check: Fe: 4=4 ✓, O: 6=6 ✓.",
      },
      selfTest: [
        {
          question: "Welches Elementsymbol steht für Eisen?",
          options: [
            "Ei",
            "Ir",
            "Fe",
            "Er",
            "Fs",
          ],
          correctIndex: 2,
          explanation: "Fe kommt vom lateinischen 'Ferrum' (Eisen). Weitere Beispiele für Symbole aus dem Lateinischen: Cu (Cuprum = Kupfer), Na (Natrium), K (Kalium), Au (Aurum = Gold), Ag (Argentum = Silber).",
          hints: [
            "Viele Metall-Symbole kommen aus dem Lateinischen",
            "Fe kommt von Ferrum",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Koeffizienten balancieren die Gleichung: _H₂ + _O₂ → _H₂O?",
          options: [
            "1, 1, 1",
            "2, 1, 2",
            "1, 2, 2",
            "2, 2, 2",
            "1, 1, 2",
          ],
          correctIndex: 1,
          explanation: "2H₂ + O₂ → 2H₂O. Check: H: 4=4 ✓ (2×2=4 links, 2×2=4 rechts); O: 2=2 ✓ (1×2=2 links, 2×1=2 rechts). Die Koeffizienten 2, 1, 2 balancieren die Gleichung.",
          hints: [
            "Zähle Atome jeder Sorte auf beiden Seiten",
            "Beginne mit H₂O auf rechts, dann passe Koeffizienten an",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist die Oxidationszahl von Schwefel in H₂SO₄?",
          options: [
            "+2",
            "+4",
            "+6",
            "-2",
            "0",
          ],
          correctIndex: 2,
          explanation: "H₂SO₄ ist neutral. H = +1 (×2 = +2); O = −2 (×4 = −8). Summe muss 0 ergeben: +2 + S + (−8) = 0 → S = +6.",
          hints: [
            "Summe aller OZ = 0 (neutrale Verbindung)",
            "H=+1, O=-2; dann S ausrechnen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Gleichung stellt die vollständige Verbrennung von Propan C₃H₈ dar?",
          options: [
            "C₃H₈ + O₂ → CO₂ + H₂O",
            "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
            "2C₃H₈ + 7O₂ → 6CO₂ + 8H₂O",
            "C₃H₈ + 4O₂ → 3CO₂ + 3H₂O",
            "C₃H₈ + 3O₂ → 3CO + 4H₂O",
          ],
          correctIndex: 1,
          explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Check: C: 3=3 ✓; H: 8=8 ✓; O: 10=10 ✓ (links: 5×2=10; rechts: 3×2+4=10).",
          hints: [
            "Verbrennung: CₓHᵧ + O₂ → CO₂ + H₂O",
            "Erst C und H ausgleichen, dann O₂-Koeffizient bestimmen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage beschreibt eine Redoxreaktion korrekt?",
          options: [
            "Eine Reaktion, bei der Säure und Base reagieren",
            "Eine Reaktion, bei der Elektronen von einem Stoff auf einen anderen übertragen werden",
            "Eine Reaktion, bei der Wasser abgespalten wird",
            "Eine Reaktion, bei der Atome ihre Positionen tauschen",
            "Eine Reaktion, die nur bei hohen Temperaturen stattfindet",
          ],
          correctIndex: 1,
          explanation: "Redoxreaktionen beinhalten die Übertragung von Elektronen: Der Oxidationsmittel nimmt Elektronen auf (Reduktion, OZ sinkt), der Reduktionsmittel gibt Elektronen ab (Oxidation, OZ steigt). Merkhilfe: LEO GER (Loss of Electrons = Oxidation, Gain of Electrons = Reduction).",
          hints: [
            "Redox = Reduktion + Oxidation",
            "LEO GER: Oxidation = Elektronenabgabe, Reduktion = Elektronenaufnahme",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-7-02',
      title: 'Stöchiometrie — Mol, molare Masse und Berechnungen',
      content: `## Stöchiometrie: die Mengenlehre der Chemie

Stöchiometrie berechnet die Mengen (Masse, Volumen, Mol) von Edukten und Produkten in chemischen Reaktionen. Die Grundlage ist die **molare Masse M** (g/mol): die Masse von 1 mol einer Substanz, zahlenmäßig gleich der relativen Molekülmasse.

**Berechnung der molaren Masse**: M = Σ(Anzahl × Atommasse). Beispiele:
- M(H₂O) = 2×1 + 1×16 = 18 g/mol
- M(NaCl) = 23 + 35,5 = 58,5 g/mol
- M(CO₂) = 12 + 2×16 = 44 g/mol
- M(CaCO₃) = 40 + 12 + 3×16 = 100 g/mol

**Umrechnung**: n = m/M ↔ m = n × M ↔ M = m/n

## Konzentration und Molalität

**Molarität (molare Konzentration) c**: Stoffmenge pro Liter Lösung: c = n/V [mol/L = mol/dm³ = M]. Beispiel: 58,5 g NaCl in 1 L Wasser → n = 58,5/58,5 = 1 mol → c = 1 mol/L (1 M).

**Massenkonzentration ρ**: Masse pro Liter Lösung: ρ = m/V [g/L]. Beispiel: 9 g NaCl/L = physiologische Kochsalzlösung 0,9%.

**Löslichkeit** gibt die maximale Menge an, die sich bei bestimmten Bedingungen löst [g/L oder mol/L].

## Stöchiometrische Berechnungen

Die Koeffizienten in der Reaktionsgleichung geben die molaren Verhältnisse an. Beispiel: N₂ + 3H₂ → 2NH₃. 1 mol N₂ reagiert mit 3 mol H₂ zu 2 mol NH₃. Wenn 14 g N₂ (n=0,5 mol) eingesetzt wird: n(H₂) = 3×0,5 = 1,5 mol (= 3 g); n(NH₃) = 2×0,5 = 1 mol (= 17 g).

## Verdünnung

C₁V₁ = C₂V₂ (Konservierung der Stoffmenge bei Verdünnen). Beispiel: 10 mL einer 2 M HCl-Lösung soll auf 100 mL verdünnt werden: C₂ = C₁V₁/V₂ = 2×10/100 = 0,2 M.`,
      lernziele: [
        "Die molare Masse aus dem Periodensystem berechnen und n = m/M anwenden",
        "Molarität und Massenkonzentration unterscheiden und ineinander umrechnen",
        "Stöchiometrische Berechnungen anhand der Koeffizienten einer Reaktionsgleichung durchführen",
      ],
      sections: [
        {
          heading: "Schritt-für-Schritt Stöchiometrie",
          text: "Stöchiometrische Berechnungen folgen einem klaren Schema: (1) Reaktionsgleichung aufschreiben und ausgleichen. (2) Molare Massen berechnen. (3) Gegebene Größe in Mol umrechnen (n = m/M oder n = cV). (4) Mit Stöchiometrie-Faktor (Koeffizient) das Mol der gesuchten Substanz berechnen. (5) Mol in gewünschte Einheit zurückrechnen (m = n×M oder c = n/V). Beispiel: Wie viel Gramm CaCO₃ entstehen aus 10 g Ca(OH)₂ mit überschüssigem CO₂? Gleichung: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O. M(Ca(OH)₂)=74 g/mol; n=10/74=0,135 mol. Stöchiometrie 1:1 → n(CaCO₃)=0,135 mol. m=0,135×100=13,5 g CaCO₃.",
        },
        {
          heading: "Konzentration: Klinik und Pharmazie",
          text: "In der Medizin sind Konzentrationen von zentraler Bedeutung. Elektrolyte werden in mmol/L angegeben: Normalwerte Serum: Na⁺ 135-145 mmol/L, K⁺ 3,5-5,0 mmol/L, Ca²⁺ 2,15-2,6 mmol/L. Medikamentendosierungen: Konzentration × Volumen = Dosis (mg). Infusionslösungen: NaCl 0,9% = 9 g/L = 154 mmol/L; Glucose 5% = 50 g/L = 278 mmol/L. Puffersysteme: Bicarbonat-Puffer im Blut: HCO₃⁻ 22-26 mmol/L, pH 7,35-7,45. Die Verdünnungsformel C₁V₁ = C₂V₂ wird bei der Zubereitung von Infusionen und Medikamentenlösungen täglich angewendet.",
        },
      ],
      merksätze: [
        "n = m/M, m = n×M, M = m/n — diese drei Formen merken",
        "c = n/V [mol/L]; Massenkonzentration = m/V [g/L]",
        "Stöchiometrie: Koeffizienten = molare Verhältnisse der Reaktionspartner",
      ],
      klinischerBezug: "Die Berechnung der Osmolarität von Infusionslösungen ist klinisch essentiell: Eine isotone Lösung hat ~300 mosmol/L (entspricht Blutplasma). Hypertone Lösungen (> 300 mosmol/L) entziehen Zellen Wasser (Ödem-Therapie), hypotone Lösungen (< 300 mosmol/L) führen zu Zellquellen und drohen Hämolyse.",
      altfrage: {
        question: "Wie viel mol Glucose (M=180 g/mol) sind in 500 mL einer 5%igen Glucoselösung (50 g/L)?",
        answer: "Massenkonzentration: 50 g/L. Masse in 0,5 L: m = 50 g/L × 0,5 L = 25 g. Mol: n = m/M = 25/180 = 0,139 mol. Molare Konzentration: c = n/V = 0,139/0,5 = 0,278 mol/L = 278 mmol/L.",
      },
      selfTest: [
        {
          question: "Was ist die molare Masse von Glucose (C₆H₁₂O₆)?",
          options: [
            "144 g/mol",
            "162 g/mol",
            "180 g/mol",
            "198 g/mol",
            "216 g/mol",
          ],
          correctIndex: 2,
          explanation: "M(C₆H₁₂O₆) = 6×12 + 12×1 + 6×16 = 72 + 12 + 96 = 180 g/mol.",
          hints: [
            "M = Σ(Anzahl × Atommasse): C=12, H=1, O=16",
            "6×12 + 12×1 + 6×16 = ?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Eine Lösung hat eine Konzentration von 0,5 mol/L und ein Volumen von 200 mL. Wie viele Mol der Substanz sind enthalten?",
          options: [
            "0,1 mol",
            "0,5 mol",
            "100 mol",
            "250 mol",
            "0,25 mol",
          ],
          correctIndex: 0,
          explanation: "n = c × V = 0,5 mol/L × 0,2 L = 0,1 mol. Wichtig: 200 mL = 0,2 L.",
          hints: [
            "n = c × V (V in Liter!)",
            "200 mL = 0,2 L",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei der Reaktion 2H₂ + O₂ → 2H₂O: Wie viel Gramm H₂O entstehen aus 4 g H₂? (M(H₂)=2 g/mol, M(H₂O)=18 g/mol)",
          options: [
            "4 g",
            "18 g",
            "36 g",
            "72 g",
            "9 g",
          ],
          correctIndex: 2,
          explanation: "n(H₂) = 4/2 = 2 mol. Stöchiometrie: 2 mol H₂ → 2 mol H₂O (1:1 Verhältnis). n(H₂O) = 2 mol. m(H₂O) = 2 × 18 = 36 g.",
          hints: [
            "Koeffizient 2H₂ : 2H₂O = 1:1 molares Verhältnis",
            "n(H₂) = m/M, dann Stöchiometrie anwenden, dann m(H₂O) = n×M",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "10 mL einer 5 M HCl-Lösung werden mit Wasser auf 50 mL aufgefüllt. Was ist die neue Konzentration?",
          options: [
            "25 M",
            "10 M",
            "5 M",
            "1 M",
            "2,5 M",
          ],
          correctIndex: 3,
          explanation: "Verdünnungsformel: C₁V₁ = C₂V₂. C₂ = C₁V₁/V₂ = 5 × 10/50 = 1 M. Die Verdünnung ist um Faktor 5 (10 mL → 50 mL).",
          hints: [
            "Verdünnungsformel: C₁V₁ = C₂V₂",
            "Fünffache Volumenzunahme → fünffache Konzentrationsabnahme",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Bei der Reaktion CaCO₃ → CaO + CO₂: Welche Masse CaO (M=56 g/mol) entsteht aus 50 g CaCO₃? (M(CaCO₃)=100 g/mol)",
          options: [
            "50 g",
            "28 g",
            "56 g",
            "100 g",
            "44 g",
          ],
          correctIndex: 1,
          explanation: "n(CaCO₃) = 50/100 = 0,5 mol. Stöchiometrie 1:1 → n(CaO) = 0,5 mol. m(CaO) = 0,5 × 56 = 28 g.",
          hints: [
            "Stöchiometrie: CaCO₃ : CaO = 1:1",
            "n(CaCO₃) = m/M; n(CaO) = n(CaCO₃); m(CaO) = n × M",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-7-03',
      title: 'Energetik chemischer Reaktionen',
      content: `## Reaktionsenthalpie ΔH

Die **Enthalpie H** ist ein Maß für den Energieinhalt eines Systems. Bei chemischen Reaktionen bei konstantem Druck (typisch im Labor und im Körper) entspricht die Wärme, die ausgetauscht wird, der **Reaktionsenthalpie ΔH**.

**Exotherme Reaktionen** (ΔH < 0): Wärme wird an die Umgebung abgegeben. Das System verliert Energie. Beispiel: Verbrennung, Oxidation, Neutralisation. Die Produkte haben eine niedrigere Enthalpie als die Edukte.

**Endotherme Reaktionen** (ΔH > 0): Wärme wird aus der Umgebung aufgenommen. Das System gewinnt Energie. Beispiel: Photosynthese (ΔH ≈ +2870 kJ/mol Glucose), thermische Zersetzung.

## Hess'scher Wärmesatz

Der **Hess'sche Wärmesatz** (1840) besagt: Die Reaktionsenthalpie einer Reaktion ist unabhängig vom Reaktionsweg — sie hängt nur von den Ausgangsstoffen (Edukten) und Endstoffen (Produkten) ab (Pfadunabhängigkeit). Dies erlaubt die Berechnung von Enthalpien nicht direkt messbarer Reaktionen durch Kombination von Gleichungen: ΔH_ges = ΣΔH_Schritte.

## Standardbildungsenthalpie

Die **Standardbildungsenthalpie ΔH°f** ist die Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus den Elementen im Standardzustand (25°C, 1 bar). Per Definition: ΔH°f = 0 für Elemente im Standardzustand.

Beispiel: ΔH°f(H₂O, l) = −285,8 kJ/mol; ΔH°f(CO₂, g) = −393,5 kJ/mol.

Die Reaktionsenthalpie berechnet sich: ΔH°R = Σ ΔH°f(Produkte) − Σ ΔH°f(Edukte).

## Energiediagramm (Reaktionskoordinate)

Das Energiediagramm zeigt die Enthalpie entlang der Reaktionskoordinate: Edukte auf einem Niveau, Übergangszustand (Aktivierungskomplex) auf dem Maximum (Energie der **Aktivierungsenergie** E_A), Produkte auf einem niedrigeren (exotherm) oder höheren (endotherm) Niveau. Katalysatoren senken die Aktivierungsenergie, ändern aber nicht ΔH.`,
      lernziele: [
        "Exotherme und endotherme Reaktionen anhand von ΔH unterscheiden und erklären",
        "Den Hess'schen Wärmesatz formulieren und für Berechnungen anwenden",
        "Ein Energiediagramm einer Reaktion beschreiben und Aktivierungsenergie sowie ΔH ablesen",
      ],
      sections: [
        {
          heading: "Energiediagramm: alle Größen ablesen",
          text: "Im Energiediagramm (Enthalpie vs. Reaktionskoordinate) lassen sich alle relevanten Größen ablesen: Die Enthalpie der Edukte (H_Edukte) und Produkte (H_Produkte) sowie das Maximum (Übergangszustand, H_ÜZ). ΔH_R = H_Produkte − H_Edukte. Bei exothermen Reaktionen liegt H_Produkte tiefer: ΔH < 0, Energie wird freigesetzt. Die Aktivierungsenergie für die Hinreaktion: E_A(hin) = H_ÜZ − H_Edukte. Die Aktivierungsenergie für die Rückreaktion: E_A(rück) = H_ÜZ − H_Produkte. Ein Katalysator stellt einen anderen, energetisch günstigeren Mechanismus bereit (niedrigeres E_A), ändert aber nicht die Enthalpien der Edukte und Produkte → ΔH bleibt gleich.",
        },
        {
          heading: "Hess'scher Wärmesatz: Berechnungsbeispiel",
          text: "Mit dem Hess'schen Wärmesatz lassen sich Enthalpien durch Addition und Subtraktion von Reaktionsgleichungen berechnen. Beispiel: Gesucht ΔH für C + ½O₂ → CO. Bekannt: (1) C + O₂ → CO₂, ΔH₁=−393,5 kJ/mol; (2) CO + ½O₂ → CO₂, ΔH₂=−283,0 kJ/mol. Methode: Zielreaktion = Reaktion (1) minus Reaktion (2). ΔH = ΔH₁ − ΔH₂ = −393,5 − (−283,0) = −110,5 kJ/mol. Die direkte Messung der CO-Bildung aus Graphit ist schwierig (es entsteht immer auch CO₂), aber mit dem Hess'schen Satz problemlos berechenbar. Wichtig: Wird eine Reaktion umgekehrt, ändert sich das Vorzeichen von ΔH.",
        },
      ],
      merksätze: [
        "Exotherm: ΔH < 0, Wärme frei; endotherm: ΔH > 0, Wärme aufgenommen",
        "Hess: ΔH ist pfadunabhängig — nur Anfangs- und Endzustand zählen",
        "Katalysator: senkt E_A, ändert nicht ΔH",
      ],
      klinischerBezug: "Der Stoffwechsel ist ein Netzwerk exo- und endothermer Reaktionen. Die Verbrennung von Glucose (exotherm, ΔH≈−2870 kJ/mol) liefert Energie für endotherme Biosynthesen (z.B. Proteinsynthese). Die Körpertemperatur von 37°C resultiert aus der kontinuierlichen Wärmeabgabe dieser Stoffwechselprozesse (Grundumsatz ~80 W im Ruhezustand).",
      altfrage: {
        question: "Welchen Einfluss hat ein Enzym auf die Reaktionsenthalpie ΔH einer biochemischen Reaktion?",
        answer: "Enzyme sind biologische Katalysatoren. Wie alle Katalysatoren senken sie die Aktivierungsenergie E_A der Reaktion, indem sie einen günstigeren Reaktionsmechanismus ermöglichen. Die Reaktionsenthalpie ΔH (Differenz zwischen Edukt- und Produktenthalpie) bleibt unverändert — Enzyme ändern nicht die thermodynamischen Eigenschaften der Reaktion, nur die Kinetik (Reaktionsgeschwindigkeit).",
      },
      selfTest: [
        {
          question: "Eine Reaktion hat ΔH = −500 kJ/mol. Was bedeutet das?",
          options: [
            "Die Reaktion benötigt 500 kJ pro mol Energie",
            "Die Reaktion ist endotherm und nimmt Wärme auf",
            "Die Reaktion ist exotherm und gibt 500 kJ pro mol Wärme ab",
            "Die Produkte haben eine höhere Enthalpie als die Edukte",
            "Die Aktivierungsenergie beträgt 500 kJ/mol",
          ],
          correctIndex: 2,
          explanation: "ΔH = −500 kJ/mol bedeutet: exotherme Reaktion (ΔH < 0). Die Enthalpie des Systems sinkt um 500 kJ/mol → 500 kJ werden als Wärme an die Umgebung abgegeben. Die Produkte haben eine niedrigere Enthalpie als die Edukte.",
          hints: [
            "ΔH < 0 → exotherm (Wärme wird abgegeben)",
            "ΔH > 0 → endotherm (Wärme wird aufgenommen)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was besagt der Hess'sche Wärmesatz?",
          options: [
            "Die Reaktionsenthalpie ist proportional zur Reaktionsgeschwindigkeit",
            "Die Reaktionsenthalpie ist unabhängig vom Reaktionsweg",
            "Jede exotherme Reaktion hat denselben ΔH-Wert",
            "Katalysatoren erhöhen die Reaktionsenthalpie",
            "Enthalpie kann weder erzeugt noch vernichtet werden",
          ],
          correctIndex: 1,
          explanation: "Der Hess'sche Wärmesatz (1840) besagt, dass die gesamte Reaktionsenthalpie nur von den Anfangs- und Endzuständen (Edukte und Produkte), nicht vom Reaktionsweg abhängt. Das erlaubt die Berechnung von ΔH für Reaktionen, die nicht direkt messbar sind.",
          hints: [
            "Pfadunabhängigkeit der Enthalpie",
            "Nur Anfangs- und Endzustand bestimmen ΔH",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Standardbildungsenthalpie ΔH°f eines Elements im Standardzustand (z.B. O₂(g) bei 25°C, 1 bar)?",
          options: [
            "Hängt von der Elektronegativität des Elements ab",
            "Ist per Definition 0 kJ/mol",
            "Ist negativ für alle reaktiven Elemente",
            "Ist gleich der Verdampfungsenthalpie",
            "Ist positiv, da Elemente Energie speichern",
          ],
          correctIndex: 1,
          explanation: "Per Konvention gilt: Die Standardbildungsenthalpie aller Elemente in ihrer stabilen Form bei Standardbedingungen (25°C, 1 bar) ist genau 0 kJ/mol. Das ist die Referenz, auf die alle Bildungsenthalpien bezogen werden.",
          hints: [
            "Standardbildungsenthalpie = Bildung aus den stabilen Elementen",
            "Elemente brauchen keine Bildungsreaktion — sie sind schon in der Elementform",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Im Energiediagramm einer Reaktion ist die Aktivierungsenergie für die Hinreaktion 80 kJ/mol und für die Rückreaktion 30 kJ/mol. Was ist ΔH_R?",
          options: [
            "+110 kJ/mol",
            "-110 kJ/mol",
            "+50 kJ/mol",
            "-50 kJ/mol",
            "0 kJ/mol",
          ],
          correctIndex: 3,
          explanation: "Aus dem Energiediagramm gilt: H_Produkte = H_ÜZ − E_A,rück und H_Edukte = H_ÜZ − E_A,hin. Daher: ΔH = H_Produkte − H_Edukte = E_A,hin − E_A,rück = 80 − 30 = 50 kJ/mol. Da E_A,hin (80) > E_A,rück (30), liegen die Produkte energetisch tiefer als die Edukte — die Reaktion ist exotherm. Das Vorzeichen folgt aus der Definition: ΔH = −(E_A,hin − E_A,rück) = −50 kJ/mol.",
          hints: [
            "ΔH = H_Produkte − H_Edukte",
            "Wenn E_A,hin > E_A,rück, sind Produkte energieärmer als Edukte (exotherm)",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was verändert ein Katalysator in einer chemischen Reaktion?",
          options: [
            "Er erniedrigt die Reaktionsenthalpie ΔH",
            "Er erhöht die Aktivierungsenergie E_A",
            "Er senkt die Aktivierungsenergie E_A, ohne ΔH zu verändern",
            "Er verschiebt das Gleichgewicht zugunsten der Produkte",
            "Er erhöht die Temperatur der Reaktion",
          ],
          correctIndex: 2,
          explanation: "Katalysatoren bieten einen alternativen Reaktionsweg mit niedrigerer Aktivierungsenergie. Dadurch wird die Reaktion schneller (mehr Moleküle haben genug Energie zur Reaktion). Die Reaktionsenthalpie ΔH bleibt unverändert, da Edukte und Produkte dieselben sind. Enzyme sind biologische Katalysatoren mit denselben Eigenschaften.",
          hints: [
            "Katalysator wird bei der Reaktion nicht verbraucht",
            "ΔH hängt nur von Edukt- und Produktenthalpie ab — Katalysator ändert diese nicht",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
