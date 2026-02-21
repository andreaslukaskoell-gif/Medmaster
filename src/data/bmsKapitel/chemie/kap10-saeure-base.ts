import type { Kapitel } from '../types';

export const chemKap10: Kapitel = {
  id: 'chem-kap10',
  title: "Säure-Base",
  subject: 'chemie',
  icon: '🧫',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'ch-10-01',
      title: "Säure-Base-Definitionen und pH-Wert",
      content: `# Säure-Base-Definitionen und pH-Wert

## Historische Entwicklung der Säure-Base-Theorie

Die Säure-Base-Chemie hat im Laufe der Wissenschaftsgeschichte mehrere konzeptionelle Erweiterungen erfahren. Die älteste und engste Definition stammt von **Arrhenius** (1884): Säuren sind Substanzen, die in wässriger Lösung H⁺-Ionen (Protonen) freisetzen, Basen sind Substanzen, die OH⁻-Ionen freisetzen. Diese Definition ist nur auf wässrige Lösungen anwendbar und erklärt beispielsweise nicht, warum Ammoniak (NH₃) basisch reagiert, obwohl es keine OH⁻-Gruppe enthält.

## Die Brønsted-Lowry-Definition

**Johannes Nicolaus Brønsted** (1923) erweiterte das Konzept grundlegend:

- **Säure** = Protonendonator: gibt ein Proton (H⁺) ab
- **Base** = Protonenakzeptor: nimmt ein Proton (H⁺) auf

Diese Definition gilt auch für nicht-wässrige Lösungen und erklärt Protonenübertragungsreaktionen umfassend. Jede Säure-Base-Reaktion ist nach Brønsted eine **Protonenübertragung** zwischen einem Donor und einem Akzeptor.

Beispiel:
\`\`\`
CH₃COOH  +  H₂O  ⇌  CH₃COO⁻  +  H₃O⁺
 Säure₁     Base₂     Base₁      Säure₂
\`\`\`

Aus jeder Säure entsteht nach Protonenabgabe die **korrespondierende (konjugierte) Base** – und umgekehrt. Säure und ihre korrespondierende Base unterscheiden sich immer genau um ein H⁺.

**Starke Säure** → **schwache korrespondierende Base** (und umgekehrt). Je leichter eine Säure Protonen abgibt, desto stabiler (schwächer) ist die entstehende Basis.

**Amphotere Teilchen (Ampholyte)** können sowohl als Säure als auch als Base reagieren. Wichtigstes Beispiel: Wasser (H₂O) und Hydrogencarbonat (HCO₃⁻).

## Die Lewis-Definition

**Gilbert N. Lewis** (1923) formulierte die allgemeinste Säure-Base-Definition:

- **Lewis-Säure** = Elektronenpaarakzeptor (nimmt ein Elektronenpaar auf)
- **Lewis-Base** = Elektronenpaardonor (gibt ein Elektronenpaar ab)

Diese Definition ist die weiteste und umfasst auch Reaktionen ohne Protonentransfer. Beispiele für Lewis-Säuren: BF₃, AlCl₃, Metallkationen (Fe³⁺, Cu²⁺). Lewis-Säuren haben oft ein unbesetztes Orbital. Alle Brønsted-Säuren sind auch Lewis-Säuren, aber nicht umgekehrt.

Wichtige Lewis-Säure-Base-Reaktion:
\`\`\`
BF₃ + :NH₃ → F₃B←NH₃  (Addukt)
Lewis-S.  Lewis-B.
\`\`\`

## Das Ionenprodukt des Wassers (Kw) und die Autoprotolyse

Wasser ist ein Amphoproton – es kann selbst mit sich selbst reagieren:

\`\`\`
H₂O + H₂O ⇌ H₃O⁺ + OH⁻
\`\`\`

Diese Reaktion heißt **Autoprotolyse** des Wassers. Das Gleichgewicht liegt weit auf der linken Seite (Wasser ionisiert kaum). Das **Ionenprodukt des Wassers** ist:

**K_W = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² (bei 25 °C)**

In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7 (neutral bei 25 °C).

K_W ist **temperaturabhängig**: Bei höherer Temperatur steigt K_W (Autoprotolyse ist endotherm). Bei 37 °C (Körpertemperatur) ist K_W ≈ 2,4 × 10⁻¹⁴, sodass der Neutralpunkt bei pH ≈ 6,8 liegt. „Neutral" bedeutet also nicht immer pH = 7, sondern [H₃O⁺] = [OH⁻].

## Definition und Berechnung des pH-Werts

Der **pH-Wert** ist der negative dekadische Logarithmus der Hydronium-Ionen-Konzentration:

**pH = −log₁₀[H₃O⁺]**

Daraus folgt: **[H₃O⁺] = 10⁻pH**

Analog: **pOH = −log₁₀[OH⁻]** und **pH + pOH = pK_W = 14** (bei 25 °C)

### pH-Skala (bei 25 °C)
| pH | [H₃O⁺] (mol/L) | Charakter |
|-----|-----------------|-----------|
| 0   | 1               | stark sauer |
| 3   | 10⁻³            | sauer |
| 7   | 10⁻⁷            | neutral |
| 11  | 10⁻¹¹           | basisch |
| 14  | 10⁻¹⁴           | stark basisch |

Eine **Veränderung um eine pH-Einheit** bedeutet eine **10-fache Änderung** der H₃O⁺-Konzentration (logarithmische Skala!).

## Klinischer Kontext: Blut-pH

Der Blut-pH des Menschen liegt im Normbereich bei **7,35–7,45**. Eine Abweichung nach unten heißt **Azidose** (< 7,35), nach oben **Alkalose** (> 7,45). Diese engen Grenzen sind lebenswichtig, da Enzymstrukturen und Proteinfunktionen pH-sensitiv sind. Schon bei pH < 7,0 oder pH > 7,7 besteht Lebensgefahr.`,
      lernziele: [
        "Die Säure-Base-Definitionen nach Arrhenius, Brønsted-Lowry und Lewis erklären und vergleichen können",
        "Korrespondierende Säure-Base-Paare identifizieren und den Begriff Ampholyt erklären",
        "Das Ionenprodukt des Wassers Kw und die Autoprotolyse beschreiben",
        "Den pH-Wert berechnen und die logarithmische pH-Skala interpretieren",
        "Den Zusammenhang pH + pOH = 14 anwenden"
      ],
      sections: [
        {
          heading: "Brønsted-Lowry vs. Lewis: Die zwei wichtigsten Definitionen",
          text: "Brønsted definiert Säuren und Basen über den Protonentransfer, Lewis über den Elektronenpaar-Transfer. Für den MedAT-H ist die Brønsted-Definition zentral: Säure = Protonendonor, Base = Protonenakzeptor. Lewis-Säuren (z. B. Fe³⁺, AlCl₃) haben ein unbesetztes Orbital und akzeptieren Elektronenpaare ohne H⁺-Transfer. Alle Brønsted-Säuren sind auch Lewis-Säuren, aber nicht umgekehrt.",
          merksatz: "Brønsted: Säure gibt H⁺ ab, Base nimmt H⁺ auf. Lewis: Säure nimmt Elektronenpaar auf, Base gibt es ab."
        },
        {
          heading: "Korrespondierende Paare und Ampholyte",
          text: "Eine Brønsted-Säure HA gibt ein Proton ab und wird zur korrespondierenden Base A⁻. HA und A⁻ bilden ein konjugiertes Paar. Je stärker die Säure, desto schwächer die korrespondierende Base. Ampholyte wie Wasser (H₂O) oder Hydrogencarbonat (HCO₃⁻) können sowohl Protonen abgeben als auch aufnehmen – sie sind gleichzeitig Brønsted-Säure und Brønsted-Base.",
          merksatz: "Starke Säure → schwache korrespondierende Base (und umgekehrt). pKs(Säure) + pKb(korr. Base) = 14."
        },
        {
          heading: "pH-Berechnung und Ionenprodukt",
          text: "Das Ionenprodukt Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴ (25 °C) ist die Grundlage aller pH-Berechnungen. pH = −log[H₃O⁺], also [H₃O⁺] = 10⁻pH. Bei 25 °C gilt pH + pOH = 14. Kw steigt mit der Temperatur: Bei 37 °C Kw ≈ 2,4 × 10⁻¹⁴ → Neutralpunkt bei pH ≈ 6,8. Eine Veränderung um 1 pH-Einheit = Faktor 10 in der H₃O⁺-Konzentration.",
          merksatz: "pH = −log[H₃O⁺] | pH + pOH = 14 | Kw = 10⁻¹⁴ | Neutral: pH = 7 nur bei 25 °C."
        }
      ],
      diagram: 'ph-scale',

      merksätze: [
        "Brønsted-Säure = Protonendonor (gibt H⁺ ab); Brønsted-Base = Protonenakzeptor (nimmt H⁺ auf).",
        "Lewis-Säure = Elektronenpaarakzeptor; Lewis-Base = Elektronenpaardonor – ohne zwingenden H⁺-Transfer.",
        "Korrespondierendes Paar: HA und A⁻ unterscheiden sich um genau ein H⁺.",
        "Starke Säure → schwache korrespondierende Base; schwache Säure → starke korrespondierende Base.",
        "Ampholyt (Amphoteres Teilchen): kann sowohl H⁺ abgeben als auch aufnehmen. Beispiele: H₂O, HCO₃⁻, HPO₄²⁻.",
        "Autoprotolyse des Wassers: 2 H₂O ⇌ H₃O⁺ + OH⁻; Kw = 10⁻¹⁴ bei 25 °C.",
        "pH = −log[H₃O⁺]; eine pH-Einheit = Faktor 10 in der H₃O⁺-Konzentration.",
        "pH + pOH = 14 (bei 25 °C); gilt aus Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴.",
        "Blut-pH normal: 7,35–7,45. Azidose: < 7,35; Alkalose: > 7,45.",
        "Kw ist temperaturabhängig – bei 37 °C liegt der Neutralpunkt bei pH ≈ 6,8, nicht bei 7,0."
      ],
      altfrage: {
        question: "Erläutern Sie die drei historischen Säure-Base-Definitionen (Arrhenius, Brønsted-Lowry, Lewis) und erklären Sie, warum die Lewis-Definition die allgemeinste ist. Geben Sie für jede Definition ein Beispiel.",
        answer: "Die Arrhenius-Definition (1884) ist die engste: Säuren liefern in Wasser H⁺-Ionen (z. B. HCl → H⁺ + Cl⁻), Basen liefern OH⁻-Ionen (z. B. NaOH → Na⁺ + OH⁻). Diese Definition ist auf wässrige Systeme beschränkt und kann nicht erklären, warum NH₃ basisch reagiert.\n\nBrønsted und Lowry (1923) erweiterten das Konzept auf Protonenübertragungen: Säure = Protonendonor, Base = Protonenakzeptor. Die Definition gilt auch in nicht-wässrigen Medien. Beispiel: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ – Wasser ist hier die Säure (gibt H⁺ ab), NH₃ die Base (nimmt H⁺ auf). Jede Säure hat eine korrespondierende Base, die aus ihr durch Protonenabgabe entsteht.\n\nLewis (1923) formulierte die allgemeinste Definition über Elektronenpaare: Lewis-Säure = Elektronenpaarakzeptor, Lewis-Base = Elektronenpaardonor. Beispiel: BF₃ (Lewis-Säure, hat leeres Orbital) + NH₃ (Lewis-Base, hat freies Elektronenpaar) → Addukt F₃B←NH₃. Diese Definition umfasst Reaktionen ganz ohne H⁺-Beteiligung, z. B. Metallkomplexe. Alle Brønsted-Säuren sind auch Lewis-Säuren (H⁺ ist ein Elektronenpaarakzeptor), aber nicht alle Lewis-Säuren sind Brønsted-Säuren (BF₃ hat kein abzugebendes Proton)."
      },
      klinischerBezug: "Der Blut-pH von 7,35–7,45 muss präzise aufrechterhalten werden, da Enzyme und Membranproteine pH-sensitiv sind; bereits pH-Abweichungen von ±0,1 Einheiten können schwerwiegende physiologische Folgen haben. Im Säure-Base-Haushalt des Körpers spielen alle drei Definitionen eine Rolle: Brønsted-Konzept für Puffersysteme (HCO₃⁻/H₂CO₃), Lewis-Konzept für Metallionen-Komplexe (Hämoglobin-Fe²⁺ als Lewis-Säure, das O₂ als Lewis-Base bindet).",
      selfTest: [
        {
          question: "Nach Brønsted-Lowry reagiert Ammoniak (NH₃) mit Wasser. Welche Rolle nimmt NH₃ dabei ein?",
          options: [
            "NH₃ ist eine Brønsted-Säure, weil es ein Proton abgibt",
            "NH₃ ist eine Brønsted-Base, weil es ein Proton aufnimmt",
            "NH₃ ist eine Lewis-Säure, weil es ein Elektronenpaar akzeptiert",
            "NH₃ ist ein Ampholyt, weil es sowohl Proton gibt als auch nimmt",
            "NH₃ reagiert nicht mit Wasser nach Brønsted"
          ],
          correctIndex: 1,
          explanation: "Nach Brønsted-Lowry ist NH₃ eine Base, weil es ein Proton (H⁺) vom Wasser aufnimmt: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. NH₃ ist der Protonenakzeptor (Base), H₂O der Protonendonor (Säure). Die korrespondierenden Paare sind: NH₄⁺/NH₃ und H₂O/OH⁻. NH₃ ist zwar eine Lewis-Base (Elektronenpaardonor über das freie Elektronenpaar am N), aber in dieser Reaktion mit Wasser ist die Brønsted-Beschreibung als Protonenakzeptor maßgeblich.",
          hints: ["Brønsted-Base = Protonenakzeptor (nimmt H⁺ auf)", "NH₃ + H₂O → NH₄⁺ + OH⁻: Wer gibt H⁺ ab, wer nimmt es auf?"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Die Autoprotolyse des Wassers bei 25 °C ergibt ein Ionenprodukt. Welches ist korrekt?",
          options: [
            "Kw = [H₂O]² = 10⁻¹⁴ mol²/L²",
            "Kw = [H₃O⁺] · [OH⁻] = 10⁻⁷ mol²/L²",
            "Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L²",
            "Kw = [H⁺] / [OH⁻] = 10⁻¹⁴",
            "Kw = [H₃O⁺]² = 10⁻¹⁴ mol²/L²"
          ],
          correctIndex: 2,
          explanation: "Das Ionenprodukt des Wassers ist Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² bei 25 °C. In reinem Wasser sind beide Konzentrationen gleich: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L, Produkt = 10⁻¹⁴. Die Konzentration des Wassers selbst (ca. 55,5 mol/L) wird in Kw nicht aufgeführt, da sie nahezu konstant ist und in die Gleichgewichtskonstante eingearbeitet wurde. Kw ist temperaturabhängig – er steigt bei Erwärmung, da die Autoprotolyse endotherm ist.",
          hints: ["Kw = Produkt aus [H₃O⁺] und [OH⁻], nicht Quotient", "In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Eine wässrige Lösung hat [H₃O⁺] = 10⁻³ mol/L. Welcher pH-Wert liegt vor und wie hoch ist [OH⁻]?",
          options: [
            "pH = 3; [OH⁻] = 10⁻¹¹ mol/L",
            "pH = 3; [OH⁻] = 10⁻⁷ mol/L",
            "pH = 11; [OH⁻] = 10⁻³ mol/L",
            "pH = 3; [OH⁻] = 10⁻³ mol/L",
            "pH = −3; [OH⁻] = 10⁻¹⁴ mol/L"
          ],
          correctIndex: 0,
          explanation: "pH = −log[H₃O⁺] = −log(10⁻³) = 3. Für [OH⁻]: Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴, also [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L. Probe: pH + pOH = 3 + 11 = 14 ✓. Die Lösung ist sauer (pH < 7). Die logarithmische Beziehung zwischen pH und [H₃O⁺] ist fundamental: Eine Änderung um 1 pH-Einheit bedeutet eine 10-fache Änderung der H₃O⁺-Konzentration.",
          hints: ["pH = −log[H₃O⁺]; pOH = −log[OH⁻]; pH + pOH = 14", "Kw = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ → [OH⁻] = 10⁻¹⁴ / [H₃O⁺]"],
          difficulty: 1,
          tags: []
        },
        {
          question: "BF₃ reagiert mit NH₃ zu einem Addukt. Nach welcher Definition ist BF₃ eine Säure?",
          options: [
            "Nach Arrhenius, weil BF₃ H⁺-Ionen liefert",
            "Nach Brønsted, weil BF₃ ein Proton abgibt",
            "Nach Lewis, weil BF₃ ein Elektronenpaar akzeptiert",
            "Nach Lewis, weil BF₃ ein Elektronenpaar abgibt",
            "BF₃ ist nach keiner Definition eine Säure"
          ],
          correctIndex: 2,
          explanation: "BF₃ ist eine Lewis-Säure, weil es ein leeres p-Orbital am Boratom besitzt und daher ein freies Elektronenpaar von NH₃ (Lewis-Base) akzeptieren kann: BF₃ + :NH₃ → F₃B←NH₃. Bei dieser Reaktion wird kein Proton übertragen – sie ist daher nach Brønsted-Lowry keine Säure-Base-Reaktion. Die Lewis-Definition ist die weiteste: Sie umfasst alle Elektronenpaar-Übertragungen, auch ohne H⁺-Beteiligung.",
          hints: ["Lewis-Säure = Elektronenpaarakzeptor (hat leeres Orbital)", "BF₃ hat kein H⁺ abzugeben → keine Brønsted-Säure"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Das korrespondierende (konjugierte) Säure-Base-Paar von H₂PO₄⁻ als Säure ist:",
          options: [
            "H₃PO₄ / H₂PO₄⁻",
            "H₂PO₄⁻ / HPO₄²⁻",
            "HPO₄²⁻ / PO₄³⁻",
            "H₃PO₄ / HPO₄²⁻",
            "H₂PO₄⁻ / PO₄³⁻"
          ],
          correctIndex: 1,
          explanation: "Wenn H₂PO₄⁻ als Säure fungiert, gibt es ein Proton ab: H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻. Das korrespondierende Paar ist H₂PO₄⁻ (Säure) / HPO₄²⁻ (korrespondierende Base). Korrespondierende Paare unterscheiden sich immer um genau ein H⁺. H₂PO₄⁻ ist ein Ampholyt: es kann auch als Base reagieren und H⁺ aufnehmen (→ H₃PO₄). Dies ist relevant für den physiologischen Phosphatpuffer (pKs₂ ≈ 7,2), der im Urin und intrazellulär wichtig ist.",
          hints: ["Korrespondierende Paare: Säure ⇌ H⁺ + korrespondierende Base", "H₂PO₄⁻ − H⁺ = HPO₄²⁻"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Wasser bei 37 °C hat ein größeres Kw als bei 25 °C. Welche Aussage über den pH-Neutralpunkt bei 37 °C ist korrekt?",
          options: [
            "Der Neutralpunkt liegt bei pH = 7, unverändert",
            "Der Neutralpunkt liegt bei pH > 7, Wasser wird basischer",
            "Der Neutralpunkt liegt bei pH < 7 (ca. 6,8), Wasser bleibt aber neutral",
            "Der Neutralpunkt hängt nur von der Konzentration ab, nicht von der Temperatur",
            "Wasser ist bei 37 °C sauer, weil [H₃O⁺] > [OH⁻]"
          ],
          correctIndex: 2,
          explanation: "Bei 37 °C beträgt Kw ≈ 2,4 × 10⁻¹⁴, daher [H₃O⁺] = [OH⁻] = √(2,4 × 10⁻¹⁴) ≈ 1,55 × 10⁻⁷ mol/L → pH ≈ 6,81. Der Neutralpunkt liegt also bei ca. 6,8, nicht bei 7. Trotzdem ist reines Wasser bei 37 °C neutral, denn [H₃O⁺] = [OH⁻]. 'Neutral' bedeutet immer [H₃O⁺] = [OH⁻], nicht automatisch pH = 7. Dieser Unterschied ist klinisch relevant: Physiologische Prozesse laufen bei Körpertemperatur ab, wo der Neutralpunkt leicht verschoben ist.",
          hints: ["Neutral bedeutet [H₃O⁺] = [OH⁻], nicht zwingend pH = 7", "Kw steigt mit Temperatur → √Kw steigt → pH des Neutralpunkts sinkt"],
          difficulty: 3,
          tags: []
        },
        {
          question: "HCO₃⁻ (Hydrogencarbonat) ist ein Ampholyt. In welchen beiden Reaktionen zeigt sich das?",
          options: [
            "Als Säure: HCO₃⁻ → H⁺ + CO₃²⁻; als Base: HCO₃⁻ + H⁺ → H₂CO₃",
            "Als Säure: HCO₃⁻ → 2H⁺ + CO₃²⁻; als Base: HCO₃⁻ → OH⁻ + CO₂",
            "Als Säure: HCO₃⁻ + OH⁻ → CO₂ + H₂O; als Base: HCO₃⁻ → H₂O + CO₂",
            "Als Säure und Base: HCO₃⁻ ⇌ H₂CO₃ ⇌ CO₂ + H₂O (nur eine Richtung)",
            "HCO₃⁻ ist kein Ampholyt, es reagiert nur als Base"
          ],
          correctIndex: 0,
          explanation: "HCO₃⁻ ist ein klassischer Ampholyt (amphoteres Teilchen): Als Brønsted-Säure gibt es ein Proton ab: HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (pKs ≈ 10,3). Als Brønsted-Base nimmt es ein Proton auf: HCO₃⁻ + H⁺ → H₂CO₃ (bzw. CO₂ + H₂O). Diese Amphoterie ist für den Kohlensäure-Bicarbonat-Puffer im Blut entscheidend: HCO₃⁻ kann sowohl zugesetzte Säure als auch zugesetzte Base abpuffern, indem es in die entsprechende Richtung reagiert.",
          hints: ["Ampholyt = kann sowohl H⁺ abgeben als auch aufnehmen", "HCO₃⁻ als Säure → CO₃²⁻; als Base → H₂CO₃"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Eine Lösung hat pH = 5. Um welchen Faktor ist ihre H₃O⁺-Konzentration höher als bei pH = 8?",
          options: [
            "Faktor 3",
            "Faktor 30",
            "Faktor 1000",
            "Faktor 10000",
            "Faktor 100"
          ],
          correctIndex: 2,
          explanation: "Bei pH 5: [H₃O⁺] = 10⁻⁵ mol/L. Bei pH 8: [H₃O⁺] = 10⁻⁸ mol/L. Verhältnis: 10⁻⁵ / 10⁻⁸ = 10³ = 1000. Die Differenz von 3 pH-Einheiten entspricht dem Faktor 10³ = 1000. Der Unterschied ist nicht additiv (3-fach), sondern multiplikativ (10³-fach), da der pH-Wert eine logarithmische Skala ist. Diese Eigenschaft ist klinisch relevant: Kleine pH-Unterschiede (z. B. im Blut: 7,35 vs. 7,45) entsprechen bedeutsamen Unterschieden in der H₃O⁺-Konzentration.",
          hints: ["Differenz von n pH-Einheiten = Faktor 10ⁿ in der H₃O⁺-Konzentration", "10⁻⁵ / 10⁻⁸ = 10^(8−5) = 10³"],
          difficulty: 2,
          tags: []
        }
      ]
    },

    {
      id: 'ch-10-02',
      title: "Starke und schwache Säuren/Basen – Ka, Kb, pKa",
      content: `# Starke und schwache Säuren/Basen: Ka, Kb, pKa

## Starke Säuren: Vollständige Dissoziation

**Starke Säuren** dissoziieren in wässriger Lösung vollständig (nahezu irreversibel). Das bedeutet: Alle Säuremoleküle geben ihr Proton an das Wasser ab.

Beispiele starker Säuren:
| Säure | Name | pKa |
|-------|------|-----|
| HCl  | Salzsäure | ≈ −7 |
| HBr  | Bromwasserstoffsäure | ≈ −9 |
| HI   | Iodwasserstoffsäure | ≈ −10 |
| HNO₃ | Salpetersäure | ≈ −1,4 |
| H₂SO₄ | Schwefelsäure (1. Stufe) | ≈ −3 |
| HClO₄ | Perchlorsäure | ≈ −10 |

Für starke Säuren gilt: **[H₃O⁺] = c(Säure)** (vollständige Dissoziation, kein Gleichgewicht). Der pH berechnet sich direkt: **pH = −log c(Säure)**.

Beispiel: 0,01 mol/L HCl → [H₃O⁺] = 0,01 = 10⁻² mol/L → **pH = 2**

## Schwache Säuren: Gleichgewichtige Dissoziation

**Schwache Säuren** dissoziieren nur teilweise. Es stellt sich ein Gleichgewicht ein:

\`\`\`
HA  +  H₂O  ⇌  H₃O⁺  +  A⁻
\`\`\`

Die **Säurekonstante Ka** (auch Ks) beschreibt dieses Gleichgewicht:

$$K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]}$$

(Konzentration des Wassers ist konstant und wird in Ka eingearbeitet.)

Je größer Ka, desto stärker die Säure. Der **pKa = −log Ka** ist praktischer:

- **pKa < 0**: starke Säure
- **pKa = 0–4**: mittelstarke Säure
- **pKa = 4–10**: schwache Säure
- **pKa > 10**: sehr schwache Säure

### Wichtige schwache Säuren und ihre pKa-Werte:
| Säure | pKa |
|-------|-----|
| Essigsäure (CH₃COOH) | 4,75 |
| Kohlensäure (H₂CO₃) | 6,35 |
| Ammoniumion (NH₄⁺) | 9,25 |
| Hydrogencarbonat (HCO₃⁻) | 10,33 |
| Wasser (H₂O) | 15,74 |
| Ethanol (C₂H₅OH) | 16 |

## pH-Berechnung für schwache Säuren

Für eine schwache Säure HA der Konzentration c₀ gilt mit dem Dissoziationsgrad α:

**Vereinfachte Formel** (gilt für α << 1, d. h. schwache Säure):

$$[\text{H}_3\text{O}^+] = \sqrt{K_a \cdot c_0}$$

**pH = ½ · (pKa − log c₀)**

Beispiel: 0,1 mol/L Essigsäure (pKa = 4,75):
- [H₃O⁺] = √(10⁻⁴·⁷⁵ × 0,1) = √(10⁻⁵·⁷⁵) = 10⁻²·⁸⁷⁵ ≈ 1,33 × 10⁻³ mol/L
- pH ≈ 2,87

## Mehrprotonige Säuren (polyprotische Säuren)

Säuren können mehrere Protonen stufenweise abgeben. Jede Stufe hat eine eigene Säurekonstante, die bei jeder folgenden Stufe kleiner wird:

**Phosphorsäure H₃PO₄:**
- pKa1 ≈ 2,15 (H₃PO₄ ⇌ H⁺ + H₂PO₄⁻)
- pKa2 ≈ 7,20 (H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻) ← wichtig für Phosphatpuffer
- pKa3 ≈ 12,35 (HPO₄²⁻ ⇌ H⁺ + PO₄³⁻)

**Kohlensäure H₂CO₃:**
- pKa1 ≈ 6,35 (H₂CO₃ ⇌ H⁺ + HCO₃⁻) ← wichtig für Blutpuffer
- pKa2 ≈ 10,33 (HCO₃⁻ ⇌ H⁺ + CO₃²⁻)

## Starke Basen: NaOH, KOH

Starke Basen dissoziieren vollständig. [OH⁻] = c(Base).

pOH = −log[OH⁻]; pH = 14 − pOH

Beispiel: 0,001 mol/L NaOH → [OH⁻] = 10⁻³ mol/L → pOH = 3 → pH = 11

## Schwache Basen und Kb

Schwache Basen (z. B. NH₃, Amine) reagieren teilweise mit Wasser:

\`\`\`
B  +  H₂O  ⇌  BH⁺  +  OH⁻
\`\`\`

**Basenkonstante:** $K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$

**pKb = −log Kb**

Beziehung zwischen korrespondierendem Paar: **pKa(Säure) + pKb(korr. Base) = pKw = 14**

Beispiel: NH₃ hat pKb = 4,75 → korrespondierende Säure NH₄⁺ hat pKa = 9,25.

## Klinische Relevanz

Im Blut agieren viele biologisch wichtige Moleküle als schwache Säuren oder Basen: CO₂/H₂CO₃ (pKa ≈ 6,1 im physiologischen Kontext), Phosphat (pKa2 ≈ 7,2), Proteine (Histidinreste pKa ≈ 6). Diese schwachen Säure-Base-Paare bilden die Grundlage der Puffersysteme des Blutes.`,
      lernziele: [
        "Den Unterschied zwischen starken und schwachen Säuren anhand der Dissoziation und Ka/pKa erklären",
        "Den pH starker Säuren und Basen direkt berechnen",
        "Den pH schwacher Säuren mit der Näherungsformel pH = ½(pKa − log c₀) berechnen",
        "Mehrprotonige Säuren und ihre stufenweise Dissoziation beschreiben",
        "Die Beziehung pKa + pKb = 14 anwenden"
      ],
      sections: [
        {
          heading: "Starke vs. schwache Säuren: Was ist der Unterschied?",
          text: "Starke Säuren dissoziieren vollständig (Dissoziationsgrad α ≈ 1): In 0,1 mol/L HCl liegen nahezu keine HCl-Moleküle mehr vor, nur H₃O⁺ und Cl⁻. Der pH = −log c(HCl) direkt. Schwache Säuren dissoziieren nur teilweise (α << 1): In 0,1 mol/L Essigsäure dissoziieren nur ca. 1,3 % der Moleküle. Zur pH-Berechnung braucht man Ka. Merkhilfe: Starke Säure → keine HA-Moleküle mehr; schwache Säure → Gleichgewicht mit viel HA.",
          merksatz: "Starke Säure: [H₃O⁺] = c₀, pH = −log c₀. Schwache Säure: [H₃O⁺] = √(Ka · c₀), pH = ½(pKa − log c₀)."
        },
        {
          heading: "Ka, pKa und Säurestärke",
          text: "Ka ist die Gleichgewichtskonstante der Dissoziation: Ka = [H₃O⁺][A⁻]/[HA]. Großes Ka → starke Dissoziation → starke Säure. pKa = −log Ka: kleiner pKa = starke Säure. Starke Säuren wie HCl haben pKa ≈ −7, schwache wie CH₃COOH pKa ≈ 4,75, sehr schwache wie NH₄⁺ pKa ≈ 9,25. Beim Halbäquivalenzpunkt einer Titration gilt pH = pKa (Henderson-Hasselbalch bei gleicher Säure- und Basekonzentration).",
          merksatz: "pKa < 0: starke Säure. pKa 4–7: schwache Säure. pKa > 10: sehr schwache Säure. Kleineres pKa = stärkere Säure."
        },
        {
          heading: "Mehrprotonige Säuren: Stufenweise Dissoziation",
          text: "Polyprotische Säuren geben ihre Protonen schrittweise ab. Jede Stufe hat eine eigene Ka, die kleiner wird: Ka1 > Ka2 > Ka3. Der erste Schritt ist immer der leichteste (aus neutralem Molekül), spätere Schritte schwieriger (aus negativer Spezies). Für Puffer nutzt man meist das Paar aus der am physiologisch relevanten pKa-Stufe. Beispiel: H₃PO₄ nutzt pKa2 = 7,2 für den Phosphatpuffer (HPO₄²⁻/H₂PO₄⁻) im Blut und Urin.",
          merksatz: "Polyprotische Säure: Ka1 >> Ka2 >> Ka3. Der pH einer Lösung wird meist durch Ka1 dominiert."
        }
      ],
      diagram: 'ph-scale',

      merksätze: [
        "Starke Säuren: HCl, HBr, HI, HNO₃, H₂SO₄ (1. Stufe), HClO₄ – alle dissoziieren vollständig.",
        "Schwache Säuren dissoziieren teilweise: Ka-Wert bestimmt das Gleichgewicht.",
        "pKa = −log Ka: Je kleiner pKa, desto stärker die Säure.",
        "pH starke Säure: pH = −log c₀ (direkt, vollständige Dissoziation).",
        "pH schwache Säure (Näherung): pH = ½ · (pKa − log c₀).",
        "pKa(Säure) + pKb(korrespondierende Base) = 14 bei 25 °C.",
        "Starke Base (NaOH): [OH⁻] = c₀; pOH = −log c₀; pH = 14 − pOH.",
        "H₃PO₄: pKa1 ≈ 2,1; pKa2 ≈ 7,2; pKa3 ≈ 12,4 – stufenweise Dissoziation.",
        "H₂CO₃: pKa1 ≈ 6,35; pKa2 ≈ 10,33 – Basis des Blutpuffers.",
        "Am Halbäquivalenzpunkt einer Titration: pH = pKa der schwachen Säure."
      ],
      altfrage: {
        question: "Erklären Sie den Begriff der Säurekonstante Ka und des pKa-Werts. Wie berechnet man den pH-Wert einer 0,1 mol/L Essigsäure-Lösung (pKa = 4,75)? Warum unterscheidet sich dieser pH-Wert von dem einer 0,1 mol/L Salzsäure-Lösung?",
        answer: "Die Säurekonstante Ka beschreibt das Gleichgewicht der Protonenabgabe einer schwachen Säure HA in Wasser: Ka = [H₃O⁺][A⁻]/[HA]. Je größer Ka, desto weiter liegt das Gleichgewicht auf der rechten Seite (stärkere Dissoziation, stärkere Säure). Der pKa = −log Ka ist ein praktischer logarithmischer Maßstab: Kleinerer pKa = stärkere Säure.\n\nFür Essigsäure (pKa = 4,75, Ka ≈ 1,78 × 10⁻⁵):\nMit der Näherungsformel für schwache Säuren: [H₃O⁺] = √(Ka · c₀) = √(1,78 × 10⁻⁵ × 0,1) = √(1,78 × 10⁻⁶) ≈ 1,33 × 10⁻³ mol/L. pH ≈ −log(1,33 × 10⁻³) ≈ 2,87.\n\nFür Salzsäure (starke Säure, vollständige Dissoziation): [H₃O⁺] = c₀ = 0,1 mol/L → pH = 1.\n\nDer Unterschied: Salzsäure dissoziiert vollständig (alle HCl-Moleküle liefern H₃O⁺), Essigsäure nur zu ca. 1,3 % (nur wenige CH₃COOH-Moleküle dissoziieren). Obwohl beide die gleiche Ausgangskonzentration haben, ist der pH der Essigsäure fast 2 Einheiten höher – ein Faktor 100 in der H₃O⁺-Konzentration. Dies verdeutlicht: Konzentration ≠ Säurestärke."
      },
      klinischerBezug: "Im Blut sind fast alle biologisch aktiven Säure-Base-Paare schwache Säuren: CO₂/HCO₃⁻ (pKa ≈ 6,1), H₂PO₄⁻/HPO₄²⁻ (pKa ≈ 7,2) und Histidinreste in Proteinen (pKa ≈ 6). Ihre partiellen Dissoziationsgleichgewichte erlauben das Abpuffern von H⁺-Veränderungen. Starke Säuren wie HCl (Magensäure, pH ≈ 1–2) dissoziieren vollständig und würden ohne Schutzschicht das Gewebe zerstören.",
      selfTest: [
        {
          question: "Welcher pKa-Wert kennzeichnet eine starke Säure?",
          options: [
            "pKa = 12",
            "pKa = 7",
            "pKa = 4,75",
            "pKa = −3",
            "pKa = 9,25"
          ],
          correctIndex: 3,
          explanation: "Ein stark negativer pKa-Wert kennzeichnet eine starke Säure. Schwefelsäure (H₂SO₄) hat pKa ≈ −3, Salzsäure (HCl) pKa ≈ −7, Perchlorsäure pKa ≈ −10. Diese Säuren dissoziieren praktisch vollständig. pKa = 4,75 gehört zu Essigsäure (schwach), pKa = 9,25 zu NH₄⁺ (sehr schwach), pKa = 12 ist eine sehr schwache Säure. Merkreihe: HClO₄ > HI > HBr > HCl > H₂SO₄ (1. Stufe) > HNO₃ – alle starke Säuren.",
          hints: ["Je kleiner pKa (auch negativ), desto stärker die Säure", "Starke Säuren: pKa << 0; schwache Säuren: pKa > 2"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Berechnen Sie den pH einer 0,01 mol/L HNO₃-Lösung (starke Säure).",
          options: [
            "pH = 1",
            "pH = 2",
            "pH = 3",
            "pH = 12",
            "pH = 7"
          ],
          correctIndex: 1,
          explanation: "HNO₃ ist eine starke Säure und dissoziiert vollständig: HNO₃ → H⁺ + NO₃⁻. Daher: [H₃O⁺] = c(HNO₃) = 0,01 mol/L = 10⁻² mol/L. pH = −log(10⁻²) = 2. Die vollständige Dissoziation ist das Schlüsselprinzip für starke Säuren: Es gibt keine HNO₃-Moleküle mehr in Lösung, nur H₃O⁺ und NO₃⁻. Bei schwachen Säuren wäre der pH höher, da nicht alle Moleküle dissoziieren.",
          hints: ["HNO₃ ist eine starke Säure → vollständige Dissoziation → [H₃O⁺] = c₀", "pH = −log(0,01) = −log(10⁻²) = 2"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Eine schwache Säure HA hat Ka = 10⁻⁵. Welcher pKa ergibt sich, und wie groß ist der pH einer 0,1 mol/L Lösung (Näherung)?",
          options: [
            "pKa = 5; pH = 3",
            "pKa = 5; pH = 3,5",
            "pKa = 5; pH = 5",
            "pKa = −5; pH = 3",
            "pKa = 5; pH = 2,5"
          ],
          correctIndex: 0,
          explanation: "pKa = −log(10⁻⁵) = 5. Für den pH: Näherungsformel für schwache Säuren: pH = ½ · (pKa − log c₀) = ½ · (5 − log 0,1) = ½ · (5 − (−1)) = ½ · 6 = 3. Alternativ: [H₃O⁺] = √(Ka · c₀) = √(10⁻⁵ × 10⁻¹) = √(10⁻⁶) = 10⁻³ mol/L → pH = 3. Die Näherung gilt, wenn die Dissoziation << c₀ ist (hier: 10⁻³ << 0,1 ✓).",
          hints: ["pKa = −log Ka; Näherung: pH = ½(pKa − log c₀)", "[H₃O⁺] = √(Ka · c₀) = √(10⁻⁵ · 10⁻¹) = 10⁻³"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ammoniak (NH₃) hat pKb = 4,75. Welchen pKa hat das konjugierte Ammoniumion (NH₄⁺)?",
          options: [
            "pKa = 4,75",
            "pKa = 9,25",
            "pKa = 14",
            "pKa = 7",
            "pKa = −4,75"
          ],
          correctIndex: 1,
          explanation: "Es gilt: pKa(Säure) + pKb(korrespondierende Base) = pKw = 14 (bei 25 °C). Also: pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75 = 9,25. NH₄⁺ ist eine schwache Säure (pKa = 9,25), NH₃ ist eine schwache Base (pKb = 4,75). Das konjugierte Paar NH₄⁺/NH₃ unterscheidet sich um genau ein H⁺. Diese Beziehung gilt immer für korrespondierende Säure-Base-Paare und folgt aus Ks × Kb = Kw.",
          hints: ["pKa(korr. Säure) + pKb(korr. Base) = 14", "pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Phosphorsäure H₃PO₄ ist eine dreistufige Säure mit pKa1 ≈ 2,1, pKa2 ≈ 7,2, pKa3 ≈ 12,4. Welche Spezies dominiert bei pH 7?",
          options: [
            "H₃PO₄ (undissoziiert)",
            "H₂PO₄⁻ und HPO₄²⁻ (ungefähr gleich)",
            "HPO₄²⁻ (fast vollständig)",
            "PO₄³⁻ (vollständig deprotoniert)",
            "H₂PO₄⁻ (dominiert)"
          ],
          correctIndex: 1,
          explanation: "Bei pH 7 liegt das System nahe am pKa2 ≈ 7,2. Nach Henderson-Hasselbalch gilt bei pH = pKa: [A⁻]/[HA] = 1, also gleiche Mengen beider Spezies. Bei pH 7 (etwas unter pKa2 = 7,2) überwiegt leicht H₂PO₄⁻ gegenüber HPO₄²⁻, aber beide sind in ähnlicher Konzentration vorhanden. Dies macht das H₂PO₄⁻/HPO₄²⁻-Paar ideal für den physiologischen Phosphatpuffer bei pH ≈ 7–7,4. H₃PO₄ ist bei pH 7 praktisch nicht mehr vorhanden (weit über pKa1 = 2,1).",
          hints: ["Bei pH = pKa liegt das Gleichgewicht 50:50 zwischen Säure und korrespondierender Base", "pKa2 der Phosphorsäure ≈ 7,2 liegt nah an pH 7"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Eine 0,1 mol/L NaOH-Lösung (starke Base) hat welchen pH-Wert?",
          options: [
            "pH = 1",
            "pH = 7",
            "pH = 12",
            "pH = 13",
            "pH = 14"
          ],
          correctIndex: 3,
          explanation: "NaOH ist eine starke Base, dissoziiert vollständig: [OH⁻] = 0,1 mol/L = 10⁻¹ mol/L. pOH = −log(10⁻¹) = 1. pH = 14 − pOH = 14 − 1 = 13. Bei 0,1 mol/L starker Base ist pH = 13, nicht 14 (das wäre 1 mol/L NaOH: [OH⁻] = 1 mol/L, pOH = 0, pH = 14). Der Unterschied zwischen pH 12, 13 und 14 entspricht jeweils einer 10-fachen Änderung der OH⁻-Konzentration.",
          hints: ["NaOH: [OH⁻] = c₀; pOH = −log c₀; pH = 14 − pOH", "0,1 = 10⁻¹ → pOH = 1 → pH = 13"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Warum nimmt die Säurestärke bei mehrprotonigen Säuren von Stufe zu Stufe ab?",
          options: [
            "Weil die Molekülmasse mit jeder Deprotonierung sinkt",
            "Weil das Ion mit jeder Protonabgabe negativer wird und das nächste H⁺ fester hält",
            "Weil die Konzentration der Säure sinkt",
            "Weil die Reaktionstemperatur sinkt",
            "Weil mehr Wasser verbraucht wird"
          ],
          correctIndex: 1,
          explanation: "Bei polyprotischen Säuren wird jedes weitere Proton von einer negativ geladenen Spezies abgegeben. Ein negatives Ion hält Protonen deutlich stärker (elektrostatische Anziehung) als ein neutrales Molekül. Deshalb: Ka1 >> Ka2 >> Ka3. Bei H₃SO₄ → H₂SO₄ → HSO₄⁻ → SO₄²⁻ nimmt die Ladung zu, und jede Stufe ist schwerer zu deprotonieren. Der gleiche Effekt gilt für H₃PO₄ (pKa1 ≈ 2,1; pKa2 ≈ 7,2; pKa3 ≈ 12,4) – jede Stufe ist um ca. 5 pKa-Einheiten schwächer.",
          hints: ["Negative Ladung stabilisiert H⁺ im Molekül → schwieriger abzuspalten", "Ka1 >> Ka2: erste Stufe aus neutralem Molekül, zweite aus negativem Ion"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Methylamin (CH₃NH₂) ist eine schwache Base mit pKb = 3,36. Eine wässrige Lösung von Methylaminhydrochlorid (CH₃NH₃⁺Cl⁻) reagiert:",
          options: [
            "Neutral (pH = 7), weil es ein Salz ist",
            "Basisch (pH > 7), weil Methylamin eine Base ist",
            "Sauer (pH < 7), weil CH₃NH₃⁺ eine schwache Säure ist",
            "Sauer (pH < 7), weil Cl⁻ sauer reagiert",
            "Basisch (pH > 7), weil HCl eine starke Säure war"
          ],
          correctIndex: 2,
          explanation: "Methylaminhydrochlorid enthält das Kation CH₃NH₃⁺ (konjugierte Säure zum Methylamin) und Cl⁻ (konjugierte Base der starken Säure HCl). Cl⁻ reagiert neutral (Salz starker Säure). CH₃NH₃⁺ ist die konjugierte Säure einer schwachen Base: pKa(CH₃NH₃⁺) = 14 − pKb(CH₃NH₂) = 14 − 3,36 = 10,64. CH₃NH₃⁺ ist also eine sehr schwache Säure und gibt leicht Protonen ab → Lösung reagiert sauer (pH < 7). Allgemein: Salz einer schwachen Base mit starker Säure → saure Lösung.",
          hints: ["Salz der schwachen Base + starke Säure → saure Lösung (konjugierte Säure ist schwach sauer)", "pKa(CH₃NH₃⁺) = 14 − pKb(CH₃NH₂)"],
          difficulty: 3,
          tags: []
        }
      ]
    },

    {
      id: 'ch-10-03',
      title: "Puffersysteme und Henderson-Hasselbalch",
      content: `# Puffersysteme und die Henderson-Hasselbalch-Gleichung

## Was ist ein Puffer?

Ein **Puffersystem** ist eine Lösung, die pH-Änderungen bei Zugabe kleiner Mengen Säure oder Base minimiert. Puffer bestehen aus einem **schwachen Säure-Base-Paar**:

- Einer **schwachen Säure (HA)** – neutralisiert zugesetzte Basen
- Ihrer **konjugierten Base (A⁻)** – neutralisiert zugesetzte Säuren

Reaktionen beim Puffern:
\`\`\`
Zugabe von H⁺:  A⁻ + H⁺ → HA          (Base fängt Säure ab)
Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O  (Säure fängt Base ab)
\`\`\`

## Die Henderson-Hasselbalch-Gleichung

Die zentrale Gleichung für Puffersysteme:

$$\text{pH} = \text{p}K_a + \log \frac{[\text{A}^-]}{[\text{HA}]}$$

**Bedeutung der Terme:**
- pKa: Säurestärke der schwachen Säure im Puffer
- [A⁻]/[HA]: Verhältnis von konjugierter Base zu schwacher Säure
- Bei [A⁻] = [HA] (Verhältnis = 1): log(1) = 0 → **pH = pKa**

**Pufferbereich:** pH = pKa ± 1 (effektiver Pufferbereich)

Außerhalb dieses Bereichs kann das System kaum noch puffern.

### Herleitung aus Ka:
Ka = [H₃O⁺][A⁻]/[HA] → [H₃O⁺] = Ka · [HA]/[A⁻]
→ −log[H₃O⁺] = −log Ka + log([A⁻]/[HA])
→ pH = pKa + log([A⁻]/[HA]) ✓

## Pufferkapazität

Die **Pufferkapazität** β gibt an, wie viel Säure oder Base ein Puffer aufnehmen kann, bevor der pH sich stark ändert. Sie ist:

- Am **größten bei pH = pKa** (gleiche Mengen HA und A⁻)
- Proportional zur **Gesamtkonzentration** des Puffersystems (c = [HA] + [A⁻])
- **Begrenzt**: Ist entweder HA oder A⁻ verbraucht, versagt der Puffer

**Praktische Konsequenz:** Ein konzentrierterer Puffer kann mehr Säure/Base abpuffern, ändert aber den pH bei Verdünnung (nur wenn beide Komponenten gleich verdünnt werden, bleibt pH konstant).

## Das Carbonat-Puffersystem im Blut

Das wichtigste Puffersystem im Blut ist das **Kohlensäure-Bicarbonat-System**:

\`\`\`
CO₂(g)  ⇌  CO₂(aq)  +  H₂O  ⇌  H₂CO₃  ⇌  H⁺  +  HCO₃⁻
\`\`\`

Der effektive pKa im physiologischen Kontext (berücksichtigt CO₂-Hydratation) beträgt **≈ 6,1**.

Henderson-Hasselbalch für Blut:
$$7,4 = 6,1 + \log \frac{[\text{HCO}_3^-]}{[\text{CO}_2]}$$

$$\log \frac{[\text{HCO}_3^-]}{[\text{CO}_2]} = 1,3 \Rightarrow \frac{[\text{HCO}_3^-]}{[\text{CO}_2]} \approx 20:1$$

Normalwerte im arteriellen Blut:
- [HCO₃⁻] ≈ 24 mmol/L
- pCO₂ ≈ 40 mmHg (entspricht ~1,2 mmol/L gelöstem CO₂)
- pH ≈ 7,4

**Regulation:**
- Lunge: reguliert CO₂ (schnell, Minuten)
- Niere: reguliert HCO₃⁻ (langsam, Stunden bis Tage)

## Der Phosphatpuffer

Das Phosphat-Puffersystem (H₂PO₄⁻/HPO₄²⁻, pKa ≈ 7,2) ist im Blutplasma weniger wichtig, aber entscheidend im **Urin** und **intrazellulär**:

\`\`\`
H₂PO₄⁻  ⇌  H⁺  +  HPO₄²⁻     pKa ≈ 7,2
\`\`\`

Bei pH 7,4 überwiegt HPO₄²⁻ (~80 %) über H₂PO₄⁻ (~20 %).

## Proteinpuffer

Proteine (besonders Hämoglobin und Plasmaproteine) sind die **quantitativ wichtigsten** Puffer im Blut. Die ionisierbaren Seitenketten der Aminosäuren, v. a. **Histidin** (pKa ≈ 6), fungieren als Säure-Base-Paare. Hämoglobin wirkt im Erythrozyten als Puffer, besonders beim Bohr-Effekt (H⁺ stabilisiert deoxy-Hb).

## Klinische Puffersysteme im Überblick

| Puffersystem | pKa | Wichtigste Lokalisation |
|---|---|---|
| H₂CO₃/HCO₃⁻ | 6,1 (eff.) | Blutplasma |
| H₂PO₄⁻/HPO₄²⁻ | 7,2 | Intrazelluläres Milieu, Urin |
| Hämoglobin-Puffer | ≈ 6–8 | Erythrozyten |
| Plasmaprotein-Puffer | ≈ 6–8 | Blutplasma |

## Klinisch: Azidose und Alkalose durch Pufferversagen

Der Carbonat-Puffer kann versagen, wenn:
- **CO₂ steigt** (respiratorische Azidose: z. B. Hyperventilationsausfall, COPD)
- **HCO₃⁻ sinkt** (metabolische Azidose: z. B. Ketoazidose, Laktazidose, Nierenversagen)
- **CO₂ sinkt** (respiratorische Alkalose: Hyperventilation)
- **HCO₃⁻ steigt** (metabolische Alkalose: z. B. Erbrechen, Diuretika)`,
      lernziele: [
        "Die Henderson-Hasselbalch-Gleichung anwenden und den pH von Pufferlösungen berechnen",
        "Den Pufferbereich (pH = pKa ± 1) und die Pufferkapazität erklären",
        "Das Carbonat-Puffersystem des Blutes mit der Henderson-Hasselbalch-Gleichung analysieren",
        "Die Rolle von Phosphat- und Proteinpuffern im Körper beschreiben",
        "Azidose und Alkalose auf das Versagen des Carbonat-Puffersystems zurückführen"
      ],
      sections: [
        {
          heading: "Henderson-Hasselbalch: Die Formel verstehen",
          text: "pH = pKa + log([A⁻]/[HA]) gilt für jedes konjugierte Säure-Base-Paar. Bei [A⁻] = [HA] ist log(1) = 0, also pH = pKa. Erhöht man [A⁻] (mehr Base), steigt pH. Erhöht man [HA] (mehr Säure), sinkt pH. Der effektive Pufferbereich liegt bei pH = pKa ± 1 (Verhältnis 10:1 bis 1:10). Klinisch: Blut-pH 7,4 = pKa(6,1) + log(20) = 6,1 + 1,3 = 7,4.",
          merksatz: "pH = pKa + log([Base]/[Säure]). Bei pH = pKa: 50:50-Verhältnis. Pufferbereich: pKa ± 1."
        },
        {
          heading: "Das Blut-Carbonat-System: Lunge und Niere als Regulatoren",
          text: "Blut-pH 7,4 hält das System bei [HCO₃⁻]/[CO₂] ≈ 20:1 aufrecht. Die Lunge reguliert CO₂ innerhalb von Minuten (schnelle Kompensation): Hyperventilation → CO₂ sinkt → pH steigt. Die Niere reguliert HCO₃⁻ über Stunden bis Tage (langsame Kompensation): mehr H⁺-Ausscheidung und HCO₃⁻-Reabsorption. Respiratorische Störungen werden renal kompensiert und umgekehrt.",
          merksatz: "Lunge reguliert CO₂ (schnell), Niere reguliert HCO₃⁻ (langsam). pKa(eff.) = 6,1 für Blutpuffer."
        },
        {
          heading: "Pufferkapazität: Warum Konzentration wichtig ist",
          text: "Die Pufferkapazität ist proportional zur Konzentration beider Pufferkomponenten. Ein Puffer bei pH = pKa hat maximale Kapazität (beide Komponenten vorhanden). Ist eine Komponente erschöpft (nur noch HA oder nur noch A⁻), versagt der Puffer. Klinisch: Bei metabolischer Azidose wird HCO₃⁻ verbraucht (puffert H⁺ zu H₂CO₃ → CO₂) → Pufferkapazität nimmt ab → pH sinkt trotz Kompensation.",
          merksatz: "Pufferkapazität maximal bei pH = pKa. Konzentriertere Puffer = höhere Kapazität. Begrenzt: Erschöpfung möglich."
        }
      ],
      merksätze: [
        "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) – die wichtigste Puffergleichung.",
        "Bei [A⁻] = [HA] gilt pH = pKa (Halbäquivalenzpunkt; maximale Pufferkapazität).",
        "Pufferbereich: pH = pKa ± 1 (Verhältnis 1:10 bis 10:1).",
        "Blut-Puffersystem: H₂CO₃/HCO₃⁻, pKa(eff.) ≈ 6,1; pH 7,4 → [HCO₃⁻]/[CO₂] ≈ 20:1.",
        "Lunge reguliert CO₂ schnell; Niere reguliert HCO₃⁻ langsam.",
        "Phosphatpuffer (H₂PO₄⁻/HPO₄²⁻, pKa ≈ 7,2): wichtig intrazellulär und im Urin.",
        "Proteine (Hämoglobin, Histidinreste) sind quantitativ wichtigste Puffer im Blut.",
        "Zugabe von H⁺: A⁻ + H⁺ → HA. Zugabe von OH⁻: HA + OH⁻ → A⁻ + H₂O.",
        "Azidose: pH < 7,35; Alkalose: pH > 7,45 – Pufferversagen oder Überbelastung.",
        "Pufferkapazität erschöpft → pH fällt/steigt stark → medizinischer Notfall."
      ],
      altfrage: {
        question: "Erklären Sie anhand der Henderson-Hasselbalch-Gleichung, warum das Carbonat-Puffersystem trotz eines pKa von 6,1 den Blut-pH bei 7,4 puffern kann, und wie Lunge und Niere zur Regulation beitragen.",
        answer: "Die Henderson-Hasselbalch-Gleichung lautet: pH = pKa + log([HCO₃⁻]/[CO₂]). Für das Blut: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]), also log([HCO₃⁻]/[CO₂]) = 1,3, d. h. das Verhältnis [HCO₃⁻]/[CO₂] ≈ 20:1. Obwohl der pKa (6,1) weit vom Blut-pH (7,4) entfernt liegt und der optimale Pufferbereich eigentlich bei pKa ± 1 = 5,1–7,1 wäre, ist das System effektiv, weil beide Komponenten reguliert werden können.\n\nDie **Lunge** reguliert CO₂ schnell (innerhalb von Minuten) über die Ventilation: Azidose → Hyperventilation → CO₂ sinkt → Nenner kleiner → Verhältnis steigt → pH steigt (respiratorische Kompensation). Alkalose → Hypoventilation → CO₂ steigt → pH sinkt.\n\nDie **Niere** reguliert HCO₃⁻ langsam (Stunden bis Tage): Bei Azidose scheidet die Niere mehr H⁺ aus (als NH₄⁺ und titrierbarer Säure) und reabsorbiert mehr HCO₃⁻ → Zähler steigt → pH steigt. Bei Alkalose umgekehrt.\n\nDie Kombination aus schneller respiratorischer und langsamer renaler Kompensation macht das System besonders flexibel und zum wichtigsten Blutpuffer. Die hohen Konzentrationen (HCO₃⁻ ≈ 24 mmol/L) verleihen dem System zudem eine große Pufferkapazität."
      },
      klinischerBezug: "Die Henderson-Hasselbalch-Gleichung ist das Fundament der klinischen Blutgasanalyse: pH = 6,1 + log([HCO₃⁻]/[pCO₂ × 0,0307]). Eine respiratorische Azidose (pCO₂ ↑, z. B. bei COPD) wird renal durch HCO₃⁻-Retention kompensiert; eine metabolische Azidose (HCO₃⁻ ↓, z. B. Ketoazidose) wird respiratorisch durch Hyperventilation (Kussmaul-Atmung, CO₂ ↓) kompensiert. Diese gegenläufige Kompensation ist diagnostisch zentral zur Unterscheidung primärer und kompensatorischer Störungen.",
      selfTest: [
        {
          question: "Ein Puffersystem aus Essigsäure (pKa = 4,75) enthält [CH₃COO⁻] = 0,1 mol/L und [CH₃COOH] = 0,01 mol/L. Welcher pH liegt vor?",
          options: [
            "pH = 3,75",
            "pH = 4,75",
            "pH = 5,75",
            "pH = 6,75",
            "pH = 7,4"
          ],
          correctIndex: 2,
          explanation: "pH = pKa + log([A⁻]/[HA]) = 4,75 + log(0,1/0,01) = 4,75 + log(10) = 4,75 + 1 = 5,75. Das Verhältnis [Base]/[Säure] = 10:1 verschiebt den pH um +1 pKa-Einheit nach oben. Bei 1:1 wäre pH = pKa = 4,75; bei 100:1 wäre pH = 4,75 + 2 = 6,75. Die Henderson-Hasselbalch-Gleichung erlaubt diese direkte Berechnung, ohne Ka explizit umzurechnen.",
          hints: ["pH = pKa + log([A⁻]/[HA])", "log(10) = 1 → pH = 4,75 + 1"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Welche der folgenden Aussagen zur Pufferkapazität ist FALSCH?",
          options: [
            "Die Pufferkapazität ist am größten, wenn pH = pKa",
            "Eine konzentriertere Pufferlösung hat eine größere Pufferkapazität",
            "Ein Puffer kann unbegrenzt viel Säure oder Base neutralisieren",
            "Die Pufferkapazität nimmt ab, wenn das Verhältnis [A⁻]/[HA] sehr groß oder sehr klein wird",
            "Der effektive Pufferbereich liegt bei pH = pKa ± 1"
          ],
          correctIndex: 2,
          explanation: "Ein Puffer kann NICHT unbegrenzt Säure oder Base aufnehmen – das ist die falsche Aussage. Die Pufferkapazität ist begrenzt durch die Mengen der vorhandenen Pufferkomponenten. Wird HA vollständig zu A⁻ umgewandelt (bei Zugabe von Base) oder A⁻ vollständig zu HA (bei Zugabe von Säure), ist die Kapazität erschöpft. Alle anderen Aussagen sind korrekt: Maximale Kapazität bei pH = pKa, konzentriertere Puffer puffern mehr, effektiver Pufferbereich bei pKa ± 1.",
          hints: ["Puffer haben endliche Kapazität – erschöpfbar", "Maximale Kapazität bei pH = pKa, nicht unbegrenzt"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Das Blut hat pH 7,4, der effektive pKa des Carbonat-Systems beträgt 6,1. Wie hoch ist das Verhältnis [HCO₃⁻]/[CO₂]?",
          options: [
            "1:1",
            "10:1",
            "20:1",
            "100:1",
            "7,4:6,1"
          ],
          correctIndex: 2,
          explanation: "Henderson-Hasselbalch: 7,4 = 6,1 + log([HCO₃⁻]/[CO₂]). log([HCO₃⁻]/[CO₂]) = 7,4 − 6,1 = 1,3. [HCO₃⁻]/[CO₂] = 10^1,3 ≈ 20. Das Verhältnis ist ≈ 20:1 (nicht 10:1, was einem Unterschied von genau 1 pH-Einheit entsprechen würde). Normalwerte: [HCO₃⁻] ≈ 24 mmol/L, gelöstes CO₂ ≈ 1,2 mmol/L (bei pCO₂ = 40 mmHg). Das asymmetrische Verhältnis 20:1 erklärt, warum das System auf Säurezugabe empfindlicher reagiert als auf Basenzugabe.",
          hints: ["7,4 = 6,1 + log(x) → log(x) = 1,3 → x = 10^1,3 ≈ 20", "10^1 = 10; 10^1,3 ≈ 20"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ein Patient hat pH 7,2, pCO₂ = 30 mmHg (erniedrigt). Was für eine Störung liegt vor?",
          options: [
            "Respiratorische Azidose",
            "Metabolische Alkalose",
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Respiratorische Alkalose",
            "Kein Säure-Base-Problem"
          ],
          correctIndex: 2,
          explanation: "pH 7,2 < 7,35 → Azidose. pCO₂ = 30 mmHg (normal: 35–45 mmHg) → erniedrigt → Hyperventilation. Bei einer primären respiratorischen Azidose wäre pCO₂ erhöht. Hier ist pCO₂ erniedrigt – das ist eine respiratorische Kompensation: Die Hyperventilation versucht, durch CO₂-Abatmung den pH zu heben. Primäre Störung: metabolische Azidose (HCO₃⁻ ↓). Kompensation: respiratorisch (pCO₂ ↓ durch Hyperventilation). Klinisches Beispiel: Diabetische Ketoazidose mit Kussmaul-Atmung.",
          hints: ["pH < 7,35 = Azidose; pCO₂ erniedrigt = Hyperventilation (Kompensation)", "Primäre Störung: wo liegt die Ursache? Kompensation: entgegengesetzt"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Warum liegt der pKa des Carbonat-Puffers effektiv bei 6,1, obwohl die reine Kohlensäure H₂CO₃ pKa1 ≈ 6,35 hat?",
          options: [
            "Weil die Niere den pKa verändert",
            "Weil gelöstes CO₂ in die Pufferrechnung einbezogen wird und [CO₂] >> [H₂CO₃] ist",
            "Weil Hämoglobin den pKa senkt",
            "Weil der pH-Wert des Blutes den pKa beeinflusst",
            "Weil der Ionenstärke-Effekt im Blut den pKa senkt"
          ],
          correctIndex: 1,
          explanation: "Im Blut ist die Konzentration von gelöstem CO₂ viel größer als die von H₂CO₃ (das Hydratationsgleichgewicht CO₂ + H₂O ⇌ H₂CO₃ liegt weit auf der CO₂-Seite, Verhältnis ca. 700:1). Wenn man in der Pufferrechnung nicht [H₂CO₃] allein, sondern [CO₂(aq)] + [H₂CO₃] ≈ [CO₂(aq)] als Nenner verwendet (was physiologisch sinnvoll ist, da CO₂ der regulierbare Parameter ist), ergibt sich ein effektiver pKa von 6,1 statt 6,35. Dieser effektive pKa wird mit 6,1 angegeben und ist für die Henderson-Hasselbalch-Gleichung im Blutkontext zu verwenden.",
          hints: ["CO₂(aq) >> H₂CO₃; effektiver Nenner ist CO₂(gesamt)", "pKa(eff) = 6,1 gilt für [HCO₃⁻]/[CO₂(aq)] – der in der Klinik verwendete Wert"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Man bereitet einen Phosphatpuffer bei pH 7,4 mit dem Paar H₂PO₄⁻/HPO₄²⁻ (pKa = 7,2) vor. Welches Molverhältnis [HPO₄²⁻]/[H₂PO₄⁻] ist erforderlich?",
          options: [
            "Etwa 0,16:1 (mehr H₂PO₄⁻)",
            "Genau 1:1",
            "Etwa 1,58:1 (mehr HPO₄²⁻)",
            "Etwa 10:1",
            "Genau 7,4:7,2"
          ],
          correctIndex: 2,
          explanation: "Henderson-Hasselbalch: 7,4 = 7,2 + log([HPO₄²⁻]/[H₂PO₄⁻]). log([HPO₄²⁻]/[H₂PO₄⁻]) = 0,2. [HPO₄²⁻]/[H₂PO₄⁻] = 10^0,2 ≈ 1,58. Es überwiegt HPO₄²⁻ leicht (etwa 61 % HPO₄²⁻, 39 % H₂PO₄⁻). Bei pKa = 7,2 und pH = 7,4 (0,2 pH-Einheiten über pKa) gilt: etwas mehr als 50 % liegen als Base vor. Bei pKa 7,2 ist dieser Puffer ideal für physiologische pH-Werte und wird für Laborpuffer verwendet.",
          hints: ["7,4 = 7,2 + log(x) → log(x) = 0,2 → x = 10^0,2 ≈ 1,58", "10^0,2 ≈ 1,58 (da 10^0 = 1 und 10^1 = 10)"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Warum ist der Phosphatpuffer (pKa ≈ 7,2) im Blutplasma weniger wichtig als intrazellulär, obwohl sein pKa ideal für pH 7,4 wäre?",
          options: [
            "Weil Phosphat zu schnell reagiert und das System instabil macht",
            "Weil die Phosphatkonzentration im Plasma sehr niedrig ist (~1 mmol/L) verglichen mit HCO₃⁻ (~24 mmol/L)",
            "Weil Phosphat nur im sauren Milieu als Puffer wirkt",
            "Weil Phosphat mit Kalzium reagiert und ausfällt",
            "Weil Phosphat durch die Niere vollständig entfernt wird"
          ],
          correctIndex: 1,
          explanation: "Obwohl pKa ≈ 7,2 ideal nahe am physiologischen pH liegt, ist die Phosphatkonzentration im Blutplasma sehr niedrig (ca. 1 mmol/L), verglichen mit HCO₃⁻ (ca. 24 mmol/L). Die Pufferkapazität ist proportional zur Konzentration der Pufferkomponenten. Intrazellulär hingegen sind Phosphatkonzentrationen höher (ca. 10–40 mmol/L), weshalb der Phosphatpuffer dort eine bedeutende Rolle spielt. Zusätzlich ist der Carbonatpuffer durch die Regulierbarkeit von CO₂ über die Lunge besonders leistungsfähig.",
          hints: ["Pufferkapazität ∝ Konzentration der Pufferkomponenten", "Plasma: [HCO₃⁻] ≈ 24 mmol/L >> [Phosphat] ≈ 1 mmol/L"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Welches Ergebnis hat die Henderson-Hasselbalch-Gleichung, wenn [A⁻]/[HA] = 100:1?",
          options: [
            "pH = pKa − 2",
            "pH = pKa − 1",
            "pH = pKa",
            "pH = pKa + 1",
            "pH = pKa + 2"
          ],
          correctIndex: 4,
          explanation: "pH = pKa + log([A⁻]/[HA]) = pKa + log(100) = pKa + 2. Beim Verhältnis 100:1 (100-facher Überschuss der Baseform) liegt der pH 2 Einheiten über dem pKa. Bei 10:1 wäre pH = pKa + 1; bei 1:1 pH = pKa; bei 1:10 pH = pKa − 1; bei 1:100 pH = pKa − 2. Dies verdeutlicht den Pufferbereich: Außerhalb von pKa ± 1 (also 1:10 bis 10:1) ist eine Komponente so stark verarmt, dass kaum noch Pufferung möglich ist.",
          hints: ["log(100) = log(10²) = 2", "pH = pKa + log(100) = pKa + 2"],
          difficulty: 1,
          tags: []
        }
      ]
    },

    {
      id: 'ch-10-04',
      title: "Titrationskurven, Indikatoren und klinische Anwendung",
      content: `# Titrationskurven, Indikatoren und klinische Anwendung

## Grundprinzip der Titration

Eine **Titration** ist ein analytisches Verfahren zur quantitativen Bestimmung einer unbekannten Konzentration. Eine Lösung bekannter Konzentration (Titrant, in der Bürette) wird einer Lösung unbekannter Konzentration (Analyt, in dem Erlenmeyerkolben) tropfenweise zugegeben, bis die Reaktion vollständig ist.

**Äquivalenzpunkt**: Der Punkt, an dem stöchiometrisch genauso viele Moles Titrant wie Analyt vorhanden sind.

**Berechnung:** n(Säure) = n(Base) → c₁ · V₁ = c₂ · V₂

## Titrationskurven: Vier wichtige Fälle

### 1. Starke Säure mit starker Base (z. B. HCl mit NaOH)

- Äquivalenzpunkt bei **pH = 7** (Salz NaCl reagiert neutral)
- Steiler pH-Sprung um den Äquivalenzpunkt (ca. pH 3–11 in enger Volumenspanne)
- Indikatoren: **Phenolphthalein** (pH 8–10) oder **Methylorange** (pH 3,1–4,4) geeignet

### 2. Schwache Säure mit starker Base (z. B. CH₃COOH mit NaOH)

- Äquivalenzpunkt bei **pH > 7** (basisch, weil Acetat CH₃COO⁻ basisch hydrolysiert)
- Am Halbäquivalenzpunkt (Volumen = ½ Äquivalenzvolumen): **pH = pKa** der Säure
- Pufferbereich sichtbar: flache Kurve um pKa ± 1
- Indikator: **Phenolphthalein** geeignet (Umschlag im Basischen)

### 3. Starke Säure mit schwacher Base (z. B. HCl mit NH₃)

- Äquivalenzpunkt bei **pH < 7** (sauer, weil NH₄⁺ sauer hydrolysiert)
- Indikator: **Methylorange** geeignet (Umschlag im Sauren)

### 4. Schwache Säure mit schwacher Base

- Kein klarer Äquivalenzpunkt (schwacher pH-Sprung)
- In der Praxis vermieden, Indikatoren ungeeignet

### Mehrprotonige Säuren (z. B. H₃PO₄ mit NaOH)

Zeigen **mehrere Äquivalenzpunkte** (einen pro Protonierungsstufe). Bei H₃PO₄ gibt es drei Äquivalenzpunkte und zwei erkennbare Pufferbereiche.

## Indikatoren: Schwache Säuren mit Farbunterschied

Indikatoren (HIn) sind selbst schwache Säuren, deren Protonierungs- und Deprotonierungsform unterschiedliche Farben haben:

\`\`\`
HIn  ⇌  H⁺  +  In⁻
(Farbe 1)      (Farbe 2)
\`\`\`

Der Farbumschlag erfolgt beim **pKa(HIn)**. Im Bereich **pKa ± 1** sieht man eine Mischfarbe.

### Wichtige Indikatoren:
| Indikator | Umschlagsbereich | Farbe sauer | Farbe basisch |
|-----------|-----------------|-------------|----------------|
| Methylorange | 3,1–4,4 | Rot | Gelb |
| Methylrot | 4,4–6,2 | Rot | Gelb |
| Lackmus (Litmus) | 5,0–8,0 | Rot | Blau |
| Bromthymolblau | 6,0–7,6 | Gelb | Blau |
| Phenolphthalein | 8,2–10,0 | Farblos | Rot-violett |
| Thymolblau | 8,0–9,6 | Gelb | Blau |

**Auswahl des Indikators:** Der Indikator muss so gewählt werden, dass sein Umschlagsbereich mit dem pH am Äquivalenzpunkt übereinstimmt.

## Klinische Säure-Base-Pathophysiologie

Der normale Blut-pH liegt bei **7,35–7,45**. Vier primäre Störungen sind zu unterscheiden:

### Respiratorische Azidose
- **Ursache:** Hypoventilation → CO₂ ↑ (pCO₂ > 45 mmHg)
- **pH:** < 7,35 (Azidose)
- **Kompensation:** Niere erhöht HCO₃⁻-Reabsorption (langsam, Tage)
- **Beispiele:** COPD, Sedierung, Atemmuskellähmung

### Respiratorische Alkalose
- **Ursache:** Hyperventilation → CO₂ ↓ (pCO₂ < 35 mmHg)
- **pH:** > 7,45 (Alkalose)
- **Kompensation:** Niere erhöht HCO₃⁻-Ausscheidung
- **Beispiele:** Angst, Höhenkrankheit, Fieber

### Metabolische Azidose
- **Ursache:** HCO₃⁻ ↓ oder H⁺-Überschuss
- **pH:** < 7,35
- **Kompensation:** Hyperventilation → CO₂ ↓ (Kussmaul-Atmung)
- **Beispiele:** Ketoazidose (Diabetes), Laktazidose, Nierenversagen, Diarrhö
- **Anionenlücke:** AG = Na⁺ − (Cl⁻ + HCO₃⁻) normal 8–16 mEq/L; erhöhte AG bei Keto-/Laktazidose

### Metabolische Alkalose
- **Ursache:** HCO₃⁻ ↑ oder H⁺-Verlust
- **pH:** > 7,45
- **Kompensation:** Hypoventilation → CO₂ ↑
- **Beispiele:** Erbrechen (HCl-Verlust), Diuretika-Einnahme, übermäßige NaHCO₃-Zufuhr

## Zusammenfassung: Blutgasanalyse-Interpretation

| Störung | pH | pCO₂ | HCO₃⁻ |
|---------|-----|------|--------|
| Resp. Azidose | ↓ | ↑ | ↑ (kompensatorisch) |
| Resp. Alkalose | ↑ | ↓ | ↓ (kompensatorisch) |
| Met. Azidose | ↓ | ↓ (kompensatorisch) | ↓ |
| Met. Alkalose | ↑ | ↑ (kompensatorisch) | ↑ |

## Normwerte für Blutgasanalyse (BGA)
- pH: 7,35–7,45
- pCO₂: 35–45 mmHg
- pO₂: 75–100 mmHg (arteriell)
- HCO₃⁻: 22–26 mmol/L
- Base Excess (BE): −2 bis +2 mmol/L`,
      lernziele: [
        "Titrationskurven für starke und schwache Säure/Base-Kombinationen beschreiben und den Äquivalenzpunkt lokalisieren",
        "Den pH am Äquivalenzpunkt vorhersagen (neutral, sauer oder basisch) und begründen",
        "Den passenden Indikator für eine gegebene Titration auswählen",
        "Die vier primären Säure-Base-Störungen (respiratorisch/metabolisch, Azidose/Alkalose) erklären und anhand von BGA-Werten identifizieren",
        "Kompensationsmechanismen von Lunge und Niere beschreiben"
      ],
      sections: [
        {
          heading: "Titrationskurven: Äquivalenzpunkt und pH-Sprung",
          text: "Bei der Titration starker Säure mit starker Base liegt der Äquivalenzpunkt bei pH 7 (NaCl reagiert neutral). Bei schwacher Säure mit starker Base liegt er im Basischen (pH > 7), weil das entstehende Salz (z. B. Natriumacetat) basisch hydrolysiert. Am Halbäquivalenzpunkt gilt pH = pKa – das ist der Pufferbereich. Der steile pH-Sprung um den Äquivalenzpunkt ist charakteristisch und erlaubt die Indikatorwahl. Je schwächer die Säure oder Base, desto weniger steil der Sprung.",
          merksatz: "Starke Säure + starke Base → Äquivalenzpunkt pH 7. Schwache Säure + starke Base → pH > 7. Schwache Base + starke Säure → pH < 7."
        },
        {
          heading: "Indikatoren: Auswahl nach Äquivalenzpunkt",
          text: "Indikatoren sind selbst schwache Säuren (HIn ⇌ H⁺ + In⁻) mit zwei verschiedenfarbigen Formen. Der Umschlag findet bei pKa(HIn) statt. Der Indikator muss im Umschlagsbereich des Äquivalenzpunkts liegen. Für starke Säure/starke Base: Phenolphthalein (8–10) oder Methylorange (3–4) möglich, weil der pH-Sprung beide Bereiche überquert. Für schwache Säure/starke Base: nur Phenolphthalein (basischer Äquivalenzpunkt). Für starke Säure/schwache Base: nur Methylorange oder Methylrot.",
          merksatz: "Indikatorwahl: pKa(Indikator) ≈ pH am Äquivalenzpunkt. Phenolphthalein für basische, Methylorange für saure Äquivalenzpunkte."
        },
        {
          heading: "Klinische Azidose und Alkalose: BGA-Interpretation",
          text: "Vier primäre Störungen: (1) Respiratorische Azidose: pH ↓, pCO₂ ↑ → renale Kompensation (HCO₃⁻ ↑). (2) Respiratorische Alkalose: pH ↑, pCO₂ ↓ → renale Kompensation (HCO₃⁻ ↓). (3) Metabolische Azidose: pH ↓, HCO₃⁻ ↓ → respiratorische Kompensation (pCO₂ ↓, Kussmaul-Atmung). (4) Metabolische Alkalose: pH ↑, HCO₃⁻ ↑ → respiratorische Kompensation (pCO₂ ↑). Die primäre Störung und die Kompensation verändern sich immer in dieselbe Richtung (CO₂ und HCO₃⁻ ändern sich gleichsinnig bei Kompensation).",
          merksatz: "pH ↓ = Azidose. pH ↑ = Alkalose. Primär CO₂-Änderung = respiratorisch. Primär HCO₃⁻-Änderung = metabolisch."
        }
      ],
      merksätze: [
        "Titration: n(Säure) = n(Base) am Äquivalenzpunkt → c₁V₁ = c₂V₂.",
        "Starke Säure + starke Base: Äquivalenzpunkt pH = 7 (neutrales Salz).",
        "Schwache Säure + starke Base: Äquivalenzpunkt pH > 7 (basisches Salz hydrolysiert).",
        "Am Halbäquivalenzpunkt einer schwachen Säure: pH = pKa.",
        "Indikatoren: schwache Säuren mit zwei Farbformen; Umschlag bei pKa(Indikator).",
        "Phenolphthalein: farblos (sauer) → rot-violett (basisch), Umschlag pH 8,2–10,0.",
        "Methylorange: rot (sauer) → gelb (basisch), Umschlag pH 3,1–4,4.",
        "Blut-pH 7,35–7,45; pCO₂ 35–45 mmHg; HCO₃⁻ 22–26 mmol/L – Normwerte.",
        "Respiratorische Azidose: pCO₂ ↑, pH ↓ (z. B. COPD); renale Kompensation: HCO₃⁻ ↑.",
        "Metabolische Azidose: HCO₃⁻ ↓, pH ↓ (z. B. Ketoazidose); respiratorische Kompensation: pCO₂ ↓ (Kussmaul)."
      ],
      altfrage: {
        question: "Beschreiben Sie den Verlauf der Titrationskurve bei der Titration einer schwachen Säure (z. B. Essigsäure, pKa = 4,75) mit Natronlauge. Auf welchen pH-Wert setzt der Äquivalenzpunkt, und welcher Indikator ist geeignet?",
        answer: "Die Titrationskurve der Essigsäure mit NaOH beginnt bei einem relativ flachen Anfangs-pH (für 0,1 mol/L CH₃COOH ca. pH 2,87). Zu Beginn der Titration (0 bis ca. 50 % des Äquivalenzvolumens) steigt der pH nur langsam an – dies ist der Pufferbereich, in dem sowohl CH₃COOH als auch CH₃COO⁻ vorhanden sind. Am Halbäquivalenzpunkt (50 % des Äquivalenzvolumens hinzugefügt) gilt pH = pKa = 4,75, da [CH₃COOH] = [CH₃COO⁻].\n\nNachdem etwa 90–100 % des Äquivalenzvolumens zugegeben wurden, steigt der pH rasch an (steiler pH-Sprung). Am Äquivalenzpunkt liegt der pH nicht bei 7, sondern im basischen Bereich (ca. pH 8,9 für 0,1 mol/L CH₃COONa). Das ist so, weil das entstehende Natriumacetat (CH₃COONa) in Wasser basisch hydrolysiert: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ – Acetat ist die konjugierte Base der schwachen Essigsäure und ist eine mittelstarke Base.\n\nDa der Äquivalenzpunkt im basischen Bereich (pH ≈ 8–9) liegt, ist **Phenolphthalein** (Umschlagsbereich pH 8,2–10,0) der geeignete Indikator: Er schlägt genau in diesem Bereich von farblos nach rot-violett um. Methylorange (Umschlag pH 3,1–4,4) wäre ungeeignet, da es im Pufferbereich der Essigsäure umschlägt, nicht am Äquivalenzpunkt."
      },
      klinischerBezug: "Die Unterscheidung der vier primären Säure-Base-Störungen (respiratorisch/metabolisch × Azidose/Alkalose) ist eine Kernkompetenz der klinischen Medizin. Bei einer Blutgasanalyse (BGA) bestimmt man pH, pCO₂ und HCO₃⁻: pH < 7,35 bei pCO₂ > 45 mmHg ist respiratorische Azidose (z. B. COPD-Exazerbation), pH < 7,35 bei HCO₃⁻ < 22 mmol/L ist metabolische Azidose (z. B. Ketoazidose; Kussmaul-Atmung als Kompensation). Die gleichzeitige Beurteilung des Kompensationsstatus erlaubt die Diagnose primärer und sekundärer Störungen.",
      selfTest: [
        {
          question: "Bei der Titration von 25 mL HCl (unbekannte Konzentration) werden 20 mL NaOH (0,1 mol/L) verbraucht. Wie groß ist c(HCl)?",
          options: [
            "0,05 mol/L",
            "0,08 mol/L",
            "0,1 mol/L",
            "0,125 mol/L",
            "0,2 mol/L"
          ],
          correctIndex: 1,
          explanation: "Am Äquivalenzpunkt gilt: n(HCl) = n(NaOH) (1:1-Stöchiometrie). n(NaOH) = c × V = 0,1 mol/L × 0,020 L = 0,002 mol. n(HCl) = 0,002 mol. c(HCl) = n/V = 0,002 mol / 0,025 L = 0,08 mol/L. Merke: c₁V₁ = c₂V₂ gilt nur bei einbasigen Säuren und einsäurigen Basen (1:1-Stöchiometrie). Bei zweiprotoniger Säure wie H₂SO₄ wäre das Verhältnis 1:2, also c(H₂SO₄) = c(NaOH) × V(NaOH) / (2 × V(H₂SO₄)).",
          hints: ["n(HCl) = n(NaOH) am Äquivalenzpunkt", "c(HCl) = n/V = (0,1 × 0,020) / 0,025"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Welcher Indikator ist für die Titration von Essigsäure (pKa = 4,75) mit NaOH am besten geeignet?",
          options: [
            "Methylorange (Umschlag pH 3,1–4,4)",
            "Methylrot (Umschlag pH 4,4–6,2)",
            "Lackmus (Umschlag pH 5,0–8,0)",
            "Phenolphthalein (Umschlag pH 8,2–10,0)",
            "Bromthymolblau (Umschlag pH 6,0–7,6)"
          ],
          correctIndex: 3,
          explanation: "Bei der Titration einer schwachen Säure (Essigsäure) mit einer starken Base (NaOH) liegt der Äquivalenzpunkt im Basischen (pH ≈ 8–9, weil Acetat basisch hydrolysiert). Daher braucht man einen Indikator, der in diesem basischen Bereich umschlägt: Phenolphthalein (Umschlag pH 8,2–10,0) ist ideal. Methylorange schlägt im sauren Bereich um (pH 3,1–4,4) – das liegt im Pufferbereich der Essigsäure, nicht am Äquivalenzpunkt. Bromthymolblau (6–7,6) liegt zu nah am neutralen Bereich.",
          hints: ["Äquivalenzpunkt schwache Säure + starke Base: pH > 7", "Indikator muss im pH-Bereich des Äquivalenzpunkts umschlagen"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Bei der Titration von NH₃ (schwache Base, pKb = 4,75) mit HCl (starke Säure) liegt der Äquivalenzpunkt bei:",
          options: [
            "pH = 7 (neutral)",
            "pH > 7 (basisch)",
            "pH < 7 (sauer)",
            "pH = pKb = 4,75",
            "pH = 14"
          ],
          correctIndex: 2,
          explanation: "Bei der Titration einer schwachen Base (NH₃) mit einer starken Säure (HCl) entsteht am Äquivalenzpunkt das Salz NH₄Cl. NH₄⁺ ist die konjugierte Säure der schwachen Base NH₃ und reagiert sauer: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. pKa(NH₄⁺) = 14 − pKb(NH₃) = 14 − 4,75 = 9,25. Der pH am Äquivalenzpunkt liegt sauer, ca. bei pH = 5–5,5 (für 0,1 mol/L NH₄Cl). Geeigneter Indikator: Methylorange oder Methylrot (Umschlag im Sauren).",
          hints: ["Schwache Base + starke Säure → Salz hydrolysiert sauer", "NH₄⁺ ist konjugierte Säure von NH₃ → saure Lösung am Äquivalenzpunkt"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ein Patient hat folgende BGA-Werte: pH = 7,52, pCO₂ = 30 mmHg, HCO₃⁻ = 24 mmol/L. Welche Störung liegt vor?",
          options: [
            "Metabolische Alkalose",
            "Respiratorische Alkalose (unkompensiert)",
            "Respiratorische Azidose",
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Keine Störung"
          ],
          correctIndex: 1,
          explanation: "pH 7,52 > 7,45 → Alkalose. pCO₂ = 30 mmHg < 35 mmHg (erniedrigt) → CO₂ wird abgeatmet → Hyperventilation. HCO₃⁻ = 24 mmol/L (normal). Primäre Störung: pCO₂ erniedrigt → respiratorische Alkalose. Da HCO₃⁻ noch normal ist, keine renale Kompensation → unkompensiert. Bei kompensierter respiratorischer Alkalose würde die Niere HCO₃⁻ ausscheiden (HCO₃⁻ ↓). Ursachen: Hyperventilation bei Angst, Schmerz, Höhe, Sepsis. Behandlung: Ursache beheben, evtl. CO₂-Rückatmung.",
          hints: ["pH > 7,45 = Alkalose; pCO₂ erniedrigt = respiratorisch primär", "HCO₃⁻ normal → keine renale Kompensation → unkompensiert"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ein diabetischer Patient mit schlechter Einstellung hat pH 7,22, pCO₂ = 25 mmHg, HCO₃⁻ = 10 mmol/L. Welche Diagnose und welches klinische Zeichen der Kompensation sind zu erwarten?",
          options: [
            "Respiratorische Azidose; Oligurie als Kompensation",
            "Metabolische Azidose; Kussmaul-Atmung als respiratorische Kompensation",
            "Metabolische Alkalose; Hypoventilation als Kompensation",
            "Respiratorische Alkalose; renale HCO₃⁻-Retention als Kompensation",
            "Gemischte Störung ohne erkennbare Kompensation"
          ],
          correctIndex: 1,
          explanation: "pH 7,22 < 7,35 → Azidose. HCO₃⁻ = 10 mmol/L (normal 22–26) → stark erniedrigt → primär metabolische Azidose. pCO₂ = 25 mmHg (normal 35–45) → erniedrigt → respiratorische Kompensation durch Hyperventilation. Klinisches Zeichen: Kussmaul-Atmung (tiefe, regelmäßige, geräuschvolle Atemzüge) – charakteristisch für die diabetische Ketoazidose. Bei der Ketoazidose sind Ketonkörper (β-Hydroxybutyrat, Acetoacetat) starke Säuren, die HCO₃⁻ verbrauchen. Behandlung: Insulin, Flüssigkeit, Elektrolytausgleich.",
          hints: ["HCO₃⁻ ↓ → metabolische Störung; pCO₂ ↓ → respiratorische Kompensation", "Ketoazidose → Kussmaul-Atmung (tiefe Hyperventilation als Kompensation)"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was versteht man unter dem Halbäquivalenzpunkt bei der Titration einer schwachen Säure, und welchen Wert hat der pH dort?",
          options: [
            "Der Punkt, an dem die Hälfte des Titranten zugegeben wurde und pH = 7",
            "Der Punkt, an dem [HA] = [A⁻] und pH = pKa der schwachen Säure",
            "Der Äquivalenzpunkt selbst, bei pH > 7",
            "Der Punkt, an dem der Indikator umschlägt",
            "Der Punkt, an dem [OH⁻] = [H₃O⁺]"
          ],
          correctIndex: 1,
          explanation: "Der Halbäquivalenzpunkt liegt bei der Hälfte des Äquivalenzvolumens (also wenn halb so viel Base zugegeben wurde wie am Äquivalenzpunkt nötig). An diesem Punkt ist genau die Hälfte der Säure HA zur konjugierten Base A⁻ neutralisiert worden: [HA] = [A⁻]. Nach Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0 = pKa. Am Halbäquivalenzpunkt ist also pH = pKa der schwachen Säure. Dieser Punkt ist diagnostisch wichtig: Man kann pKa einer unbekannten Säure durch Titration bestimmen.",
          hints: ["Halbäquivalenz: halb neutralisiert → [HA] = [A⁻]", "Henderson-Hasselbalch: bei [HA] = [A⁻] → log(1) = 0 → pH = pKa"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Phenolphthalein ist farblos bei pH 7 und rot-violett bei pH 10. Es selbst ist eine schwache Säure mit pKa ≈ 9,1. Bei welchem pH findet der Farbumschlag statt?",
          options: [
            "Bei pH = 7 (neutral)",
            "Bei pH = 14 (maximal basisch)",
            "Bei pH ≈ 9,1 (= pKa des Indikators)",
            "Bei pH = 7,4 (Blut-pH)",
            "Der Umschlag hängt nicht vom pKa ab"
          ],
          correctIndex: 2,
          explanation: "Indikatoren sind schwache Säuren (HIn). Der Farbumschlag findet in der Nähe des pKa des Indikators statt. Bei pH << pKa überwiegt HIn (saure, farblose Form). Bei pH >> pKa überwiegt In⁻ (basische, rote Form). Bei pH = pKa sind [HIn] = [In⁻]: man sieht eine Mischfarbe, und das ist der Mittelpunkt des Umschlagsbereichs (pKa ± 1). Für Phenolphthalein mit pKa ≈ 9,1 ist der Umschlagsbereich 8,1–10,1. Dies erklärt, warum Phenolphthalein für Titrationen mit basischem Äquivalenzpunkt geeignet ist.",
          hints: ["Indikator-Umschlag bei pH ≈ pKa(Indikator)", "HIn (farblos) ⇌ H⁺ + In⁻ (farbig): Gleichgewicht bestimmt Farbe"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ein Patient mit chronischer Niereninsuffizienz hat pH 7,30, pCO₂ = 32 mmHg, HCO₃⁻ = 15 mmol/L. Welche Störung liegt vor?",
          options: [
            "Respiratorische Azidose mit metabolischer Kompensation",
            "Metabolische Alkalose",
            "Metabolische Azidose mit respiratorischer Kompensation",
            "Respiratorische Alkalose mit metabolischer Kompensation",
            "Normalbefund"
          ],
          correctIndex: 2,
          explanation: "pH 7,30 < 7,35 → Azidose. HCO₃⁻ = 15 mmol/L < 22 mmol/L → stark erniedrigt → primär metabolische Ursache (Niere kann H⁺ nicht ausreichend ausscheiden und HCO₃⁻ nicht regenerieren). pCO₂ = 32 mmHg < 35 mmHg → erniedrigt → respiratorische Kompensation (Hyperventilation). Diagnose: Metabolische Azidose mit respiratorischer Kompensation, typisch für chronische Niereninsuffizienz. Die Niere ist hier die Ursache (kann keine Säuren ausscheiden), nicht die Kompensationsorgane. Behandlung: Natriumbicarbonat-Substitution, renale Ersatztherapie.",
          hints: ["HCO₃⁻ erniedrigt → primär metabolisch; pCO₂ erniedrigt → respiratorische Kompensation", "Chronische Niereninsuffizienz → HCO₃⁻ ↓ (Niere kann Säure nicht ausscheiden)"],
          difficulty: 3,
          tags: []
        }
      ]
    }
  ]
};
