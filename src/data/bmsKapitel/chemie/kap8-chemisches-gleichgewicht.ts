import type { Kapitel } from '../types';

export const chemKap8: Kapitel = {
  id: "chem-kap8",
  title: "Chemisches Gleichgewicht",
  subject: "chemie",
  icon: "⚖️",
  estimatedTime: "50 min",
  unterkapitel: [
    {
      id: "ch-8-01",
      title: "Reaktionsgeschwindigkeit und Aktivierungsenergie",
      content: `## Reaktionsgeschwindigkeit

Die Reaktionsgeschwindigkeit v beschreibt, wie schnell sich die Konzentration einer Substanz mit der Zeit ändert. Formal gilt:

**v = Δc / Δt**

wobei Δc die Konzentrationsänderung und Δt das Zeitintervall ist. Die Einheit ist mol·L⁻¹·s⁻¹. Für Produkte ist v positiv (Konzentration steigt), für Edukte negativ (Konzentration sinkt). Da Reaktionsgeschwindigkeiten in der Regel mit der Zeit abnehmen, arbeitet man oft mit Momentangeschwindigkeiten, die als Grenzwert des Differenzenquotienten definiert sind.

## Einflussfaktoren auf die Reaktionsgeschwindigkeit

**Konzentration:** Höhere Konzentration der Reaktionspartner bedeutet mehr Teilchenkollisionen pro Zeiteinheit — die Reaktionsgeschwindigkeit steigt. Dieser Zusammenhang wird durch das empirische Geschwindigkeitsgesetz beschrieben:

**v = k · [A]^m · [B]^n**

wobei k die temperaturabhängige Geschwindigkeitskonstante und m, n die partiellen Reaktionsordnungen sind. Die Gesamtreaktionsordnung ist m + n. Eine Reaktion 1. Ordnung in [A] bedeutet: Verdoppelt man [A], verdoppelt sich v. Bei 2. Ordnung vervierfacht sich v. Die partiellen Ordnungen müssen experimentell bestimmt werden — sie ergeben sich nicht einfach aus den stöchiometrischen Koeffizienten der Bruttogleichung.

**Temperatur und die RGT-Regel:** Die Van't-Hoff-Regel (Reaktionsgeschwindigkeits-Temperatur-Regel, RGT-Regel) besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit näherungsweise verdoppelt bis verdreifacht. Der Temperaturfaktor Q₁₀ ≈ 2–3 gilt für viele chemische und biologische Reaktionen. Grund dafür ist, dass bei höherer Temperatur mehr Moleküle genug Energie besitzen, um die Aktivierungsenergie zu überwinden. Bei Enzymen gilt dies jedoch nur im physiologischen Bereich; oberhalb der optimalen Temperatur (meist 37–42 °C beim Menschen) kommt es zur Denaturierung und die Reaktionsgeschwindigkeit bricht ein.

**Oberfläche:** Bei heterogenen Reaktionen (z. B. Feststoff in Lösung) steigt die Reaktionsgeschwindigkeit mit der Kontaktfläche. Fein verteilte Feststoffe reagieren schneller als grobe Stücke.

**Lösungsmittel und Ionenstärke:** In wässriger Lösung beeinflussen Ionenstärke und Dielektrizitätskonstante des Lösungsmittels die effektiven Konzentrationen der Reaktanten.

## Aktivierungsenergie und das Arrhenius-Konzept

Damit eine Reaktion ablaufen kann, müssen die Reaktionspartner die **Aktivierungsenergie E_A** aufbringen. Diese entspricht der Energiebarriere im Reaktionskoordinatendiagramm, die Moleküle überwinden müssen, um vom Edukt- in den Übergangszustand (Aktivierungskomplex) und von dort in den Produktzustand zu gelangen.

Die **Arrhenius-Gleichung** beschreibt den quantitativen Zusammenhang:

**k = A · e^(−E_A / RT)**

- A = präexponentieller Faktor (Stoßfrequenz × Steric-Faktor)
- E_A = Aktivierungsenergie in J/mol
- R = universelle Gaskonstante (8,314 J·mol⁻¹·K⁻¹)
- T = absolute Temperatur in Kelvin

Je kleiner E_A, desto schneller läuft die Reaktion ab. Katalysatoren (inkl. Enzyme) senken E_A, ohne die Thermodynamik (ΔG der Reaktion) zu ändern.

## Endotherme vs. exotherme Reaktionen im Energieprofil

Bei **exothermen** Reaktionen liegt das Produktniveau energetisch tiefer als das Eduktniveau (ΔH < 0). Die Aktivierungsenergie der Rückreaktion ist größer als die der Hinreaktion. Bei **endothermen** Reaktionen ist es umgekehrt (ΔH > 0). Im dynamischen Gleichgewicht laufen Hin- und Rückreaktion gleichzeitig ab — das Energieprofil erklärt, warum beide Richtungen unterschiedliche Aktivierungsenergien und damit unterschiedliche Geschwindigkeitskonstanten besitzen.

## Stoßtheorie und Übergangszustandstheorie

Die **Stoßtheorie** erklärt Reaktionsgeschwindigkeiten durch die Frequenz und Energie wirksamer Molekülkollisionen. Nicht jeder Stoß führt zur Reaktion — nur solche, bei denen (1) die kinetische Energie die Aktivierungsenergie übersteigt und (2) die räumliche Orientierung der Moleküle günstig ist.

Die **Übergangszustandstheorie (Eyring)** verfeinert dieses Bild: Edukte bilden zunächst einen hochenergetischen Aktivierungskomplex (Übergangszustand), der dann entweder zu Produkten zerfällt oder zurück zu Edukten. Die Theorie erlaubt die Berechnung von k aus thermodynamischen Größen (Enthalpie und Entropie der Aktivierung).`,

      lernziele: [
        "Die Reaktionsgeschwindigkeit formal definieren und Einflussfaktoren (Konzentration, Temperatur, Oberfläche) erläutern.",
        "Das Geschwindigkeitsgesetz v = k·[A]^m·[B]^n interpretieren und Reaktionsordnungen bestimmen.",
        "Die RGT-Regel und die Arrhenius-Gleichung qualitativ anwenden und klinische Beispiele nennen.",
        "Aktivierungsenergie im Energieprofil verorten und den Unterschied zwischen endo- und exothermen Reaktionen beschreiben.",
        "Erklären, wie Katalysatoren die Aktivierungsenergie senken, ohne die Reaktionsenthalpie zu ändern."
      ],

      sections: [
        {
          heading: "Das Geschwindigkeitsgesetz",
          text: "Das empirische Geschwindigkeitsgesetz v = k·[A]^m·[B]^n verknüpft Reaktionsgeschwindigkeit mit Konzentrationen. Die Geschwindigkeitskonstante k ist temperaturabhängig (Arrhenius). Partielle Ordnungen m, n müssen experimentell ermittelt werden und müssen nicht den stöchiometrischen Koeffizienten entsprechen.",
          merksatz: "Merke: Die Reaktionsordnung folgt dem Experiment — nicht der Stöchiometrie!"
        },
        {
          heading: "RGT-Regel und Arrhenius",
          text: "Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3). Die Arrhenius-Gleichung k = A·e^(−E_A/RT) erklärt dies: Mehr Moleküle überschreiten bei höherer Temperatur die Energiebarriere E_A. Bei Enzymen gilt dies nur bis zur Denaturierungstemperatur.",
          merksatz: "Faustregel: +10 °C → doppelte Reaktionsgeschwindigkeit (RGT-Regel)."
        },
        {
          heading: "Aktivierungsenergie und Katalyse",
          text: "Jede Reaktion benötigt eine Mindestenergie (E_A), um den Übergangszustand zu erreichen. Katalysatoren bieten einen alternativen Reaktionsweg mit niedrigerer E_A — die Thermodynamik (ΔG, ΔH) bleibt unverändert. Enzyme als biologische Katalysatoren erreichen Beschleunigungen um Faktoren von 10⁶–10¹².",
          merksatz: "Katalysatoren ändern den Weg, nicht das Ziel: E_A sinkt, ΔG bleibt gleich."
        }
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
        "Denaturierung von Enzymen bei T > T_opt führt zum Verlust der Katalyseaktivität."
      ],

      altfrage: {
        frage: "Erläutern Sie, wie Temperatur und Aktivierungsenergie die Reaktionsgeschwindigkeit beeinflussen, und diskutieren Sie die klinische Bedeutung dieser Zusammenhänge am Beispiel von Fieber und therapeutischer Hypothermie.",
        antwort: `Die Reaktionsgeschwindigkeit hängt eng mit der Aktivierungsenergie E_A zusammen: Nur Molekülkollisionen, bei denen die kinetische Energie die Barriere E_A übersteigt, führen zu einer Reaktion. Die Arrhenius-Gleichung k = A·e^(−E_A/RT) zeigt mathematisch, dass die Geschwindigkeitskonstante k exponentiell mit der Temperatur steigt. Praktisch gilt die RGT-Regel: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit (Q₁₀ ≈ 2–3).

Klinisch ist dies von enormer Bedeutung: Bei Fieber (z. B. 40 °C statt 37 °C) steigen Stoffwechselreaktionen und der O₂-Verbrauch der Zellen erheblich an. Das Herz muss mehr pumpen, die Atemfrequenz steigt. Bei sehr hohem Fieber (> 42 °C) droht Denaturierung von Enzymen und Proteinen, was lebensbedrohlich ist.

Therapeutische Hypothermie (Kühlung auf 32–36 °C nach Herzstillstand oder bei Schädel-Hirn-Trauma) nutzt den umgekehrten Effekt: Verlangsamung des Zellstoffwechsels reduziert den O₂-Bedarf von Neuronen und schützt so vor ischämischen Schäden. Auch bei Herzoperationen am offenen Herzen wird der Patient auf ca. 28 °C gekühlt, um Organschäden während des Kreislaufstillstands zu minimieren.`
      },

      klinischerBezug: "Die RGT-Regel erklärt, warum Fieber den Grundumsatz und den O₂-Bedarf steigert: Bereits 3 °C Temperaturerhöhung verdoppeln näherungsweise die Reaktionsgeschwindigkeiten in Körperzellen. Therapeutische Hypothermie nach Herzstillstand nutzt den gegenteiligen Effekt gezielt aus, um den neuronalen Stoffwechsel zu senken und Ischämieschäden zu begrenzen. Pharmakologisch nutzt man das Konzept der Aktivierungsenergie, wenn Enzymhemmer (z. B. ACE-Hemmer, COX-Inhibitoren) die Substratbindung blockieren und damit effektiv die Aktivierungsenergie für die enzymatische Reaktion erhöhen.",

      selfTest: [
        {
          question: "Welche Aussage zur Reaktionsgeschwindigkeit ist korrekt?",
          options: [
            "Die Reaktionsgeschwindigkeit ist immer konstant über den gesamten Reaktionsverlauf.",
            "Die Reaktionsgeschwindigkeit nimmt für Edukte zu und für Produkte ab.",
            "v = Δc/Δt gibt die Änderung der Konzentration pro Zeiteinheit an.",
            "Die Einheit der Reaktionsgeschwindigkeit ist mol·L.",
            "Nur Endprodukte bestimmen die Reaktionsgeschwindigkeit."
          ],
          correctIndex: 2,
          explanation: "Die Reaktionsgeschwindigkeit v = Δc/Δt beschreibt die Konzentrationsänderung pro Zeiteinheit, Einheit mol·L⁻¹·s⁻¹. Sie ist für Produkte positiv (Konzentration steigt) und für Edukte negativ (Konzentration sinkt). Im Verlauf einer Reaktion nimmt v in der Regel ab, da die Konzentration der Edukte sinkt. Die anderen Optionen sind falsch: Die Geschwindigkeit ist nicht konstant, die Einheit nicht mol·L, und alle Reaktanten beeinflussen v.",
          hints: ["v = Δc/Δt — Ableitung aus der Definition", "Einheit: mol pro Liter pro Sekunde"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Die RGT-Regel besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit ...",
          options: [
            "halbiert.",
            "um den Faktor 10 erhöht.",
            "ungefähr verdoppelt bis verdreifacht.",
            "nicht beeinflusst, solange kein Katalysator vorhanden ist.",
            "nur bei exothermen Reaktionen erhöht."
          ],
          correctIndex: 2,
          explanation: "Die RGT-Regel (Van't-Hoff-Regel) besagt, dass Q₁₀ ≈ 2–3 ist: Eine Temperaturerhöhung um 10 °C verdoppelt bis verdreifacht die Reaktionsgeschwindigkeit. Ursache ist, dass mehr Moleküle genug kinetische Energie besitzen, um die Aktivierungsenergie zu überwinden. Dies gilt für chemische und biologische Reaktionen im physiologischen Bereich. Bei Enzymen gilt es nur bis zur Denaturierungstemperatur. Die anderen Optionen sind falsch.",
          hints: ["Q₁₀ = Quotient der Geschwindigkeiten bei T+10 und T", "RGT = Reaktionsgeschwindigkeits-Temperatur-Regel"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Ein Katalysator beschleunigt eine Reaktion, indem er ...",
          options: [
            "die Reaktionsenthalpie ΔH verringert.",
            "die freie Enthalpie ΔG der Reaktion verändert.",
            "einen Reaktionsweg mit niedrigerer Aktivierungsenergie bereitstellt.",
            "die Eduktkonzentrationen erhöht.",
            "die Gleichgewichtskonstante K zugunsten der Produkte verschiebt."
          ],
          correctIndex: 2,
          explanation: "Katalysatoren bieten einen alternativen Reaktionsmechanismus mit niedrigerer Aktivierungsenergie E_A an. Dadurch können bei gleicher Temperatur mehr Moleküle die Energiebarriere überwinden — die Reaktion läuft schneller. Entscheidend: Katalysatoren ändern weder ΔH, noch ΔG, noch die Gleichgewichtskonstante K. Sie verändern nur die Kinetik (Geschwindigkeit), nicht die Thermodynamik. Enzyme als biologische Katalysatoren erreichen Geschwindigkeitssteigerungen von 10⁶ bis 10¹².",
          hints: ["Katalysatoren erscheinen links und rechts der Gleichung unverändert", "Thermodynamik (ΔG, K) bleibt unverändert — nur Kinetik ändert sich"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Aussage zum Geschwindigkeitsgesetz v = k·[A]^m·[B]^n ist korrekt?",
          options: [
            "m und n entsprechen immer den stöchiometrischen Koeffizienten der Reaktionsgleichung.",
            "k ist unabhängig von der Temperatur.",
            "m und n müssen experimentell bestimmt werden und können auch 0 oder nicht ganzzahlig sein.",
            "Das Gesetz gilt nur für Reaktionen 1. Ordnung.",
            "v ist immer konstant, solange k konstant ist."
          ],
          correctIndex: 2,
          explanation: "Die partiellen Reaktionsordnungen m und n müssen experimentell bestimmt werden — sie ergeben sich nicht aus den stöchiometrischen Koeffizienten der Bruttogleichung. Sie können ganze Zahlen, Brüche oder null sein. Die Geschwindigkeitskonstante k ist temperaturabhängig (Arrhenius-Gleichung). Das Geschwindigkeitsgesetz gilt für alle Reaktionsordnungen. Da [A] und [B] sich mit der Zeit ändern, ändert sich auch v, selbst wenn k konstant ist.",
          hints: ["Ordnungen folgen dem Experiment, nicht der Stöchiometrie", "k = temperaturabhängige Konstante (Arrhenius)"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was beschreibt die Aktivierungsenergie E_A im Reaktionskoordinatendiagramm?",
          options: [
            "Die Energiedifferenz zwischen Edukten und Produkten (ΔH).",
            "Die minimale Energie, die Reaktanten aufbringen müssen, um den Übergangszustand zu erreichen.",
            "Die Energie, die bei der Reaktion freigesetzt wird.",
            "Den Schnittpunkt der Energiekurve mit der Koordinatenachse.",
            "Die Gleichgewichtskonstante der Reaktion."
          ],
          correctIndex: 1,
          explanation: "Die Aktivierungsenergie E_A ist die minimale Energie, die Reaktanten aufbringen müssen, um den Übergangszustand (Aktivierungskomplex) zu erreichen. Im Energieprofil ist sie die Höhe des Energiebergs über dem Edukt-Niveau. Sie ist nicht identisch mit ΔH (Differenz zwischen Produkt- und Eduktniveau). E_A bestimmt die Reaktionsgeschwindigkeit — je größer E_A, desto langsamer die Reaktion bei gegebener Temperatur. Katalysatoren senken E_A.",
          hints: ["E_A = Höhe des Energiebergs über dem Eduktniveau", "Nicht verwechseln mit ΔH (Reaktionsenthalpie)"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Bei welcher Temperatur wird therapeutische Hypothermie nach Herzstillstand eingesetzt und warum?",
          options: [
            "Erhöhung auf 42 °C, um Enzymaktivitäten zu maximieren.",
            "Senkung auf 32–36 °C, um den neuronalen Stoffwechsel zu verlangsamen.",
            "Senkung auf 20 °C, um alle Stoffwechselprozesse zu stoppen.",
            "Erhöhung auf 40 °C, um die Durchblutung zu verbessern.",
            "Keine Temperaturveränderung — nur Medikamente werden verwendet."
          ],
          correctIndex: 1,
          explanation: "Therapeutische Hypothermie (32–36 °C) nach Herzstillstand nutzt die RGT-Regel: Temperatursenkung verlangsamt enzymatische Reaktionen und reduziert den O₂-Bedarf von Neuronen. Dadurch werden ischämische Schäden während der Phase reduzierter Durchblutung minimiert. Eine Kühlung auf 20 °C wäre zu extrem und würde selbst Schäden verursachen. Die Hypothermie ist bei 32–36 °C wirksam und klinisch etabliert.",
          hints: ["RGT-Regel: Abkühlung verlangsamt Reaktionen", "Ziel: Neuroprotektion durch reduzierten O₂-Bedarf"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Aussage zur Arrhenius-Gleichung k = A·e^(−E_A/RT) ist korrekt?",
          options: [
            "Ein größeres E_A führt bei gleicher Temperatur zu einem größeren k.",
            "Eine Temperaturerhöhung verkleinert den Betrag des Exponenten −E_A/RT und vergrößert damit k.",
            "R ist die individuelle Gaskonstante des jeweiligen Gases.",
            "A (präexponentieller Faktor) ist immer gleich 1.",
            "Die Gleichung gilt nur für endotherme Reaktionen."
          ],
          correctIndex: 1,
          explanation: "In der Arrhenius-Gleichung k = A·e^(−E_A/RT) gilt: Eine Temperaturerhöhung (größeres T) macht den negativen Exponenten −E_A/RT betragsmäßig kleiner, was e^(−E_A/RT) vergrößert — also steigt k. Größeres E_A macht den Exponenten betragsmäßig größer, k sinkt. R ist die universelle Gaskonstante (8,314 J·mol⁻¹·K⁻¹), nicht individuell. A enthält Stoßfrequenz und Orientierungsfaktor. Die Gleichung gilt für alle Reaktionstypen.",
          hints: ["Negativer Exponent: Je weniger negativ, desto größer e^x", "R = 8,314 J·mol⁻¹·K⁻¹ (universell)"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Was ändert sich bei einer Reaktion, wenn ein Enzym als Katalysator hinzugefügt wird?",
          options: [
            "Die Gleichgewichtskonstante K verschiebt sich zugunsten der Produkte.",
            "Die Reaktionsenthalpie ΔH wird negativ.",
            "Die Aktivierungsenergie sinkt, und die Reaktion läuft schneller ab.",
            "Die Eduktkonzentrationen steigen dauerhaft an.",
            "Das Reaktionsgleichgewicht liegt nicht mehr vor."
          ],
          correctIndex: 2,
          explanation: "Enzyme als biologische Katalysatoren senken die Aktivierungsenergie E_A durch Bereitstellung eines alternativen Reaktionsmechanismus. Die Reaktion läuft dadurch bei Körpertemperatur mit enormer Geschwindigkeit ab. Thermodynamische Größen (ΔH, ΔG, K) bleiben unverändert — das Gleichgewicht wird nur schneller erreicht. Enzyme verbrauchen sich nicht und verändern auch Eduktkonzentrationen nicht dauerhaft.",
          hints: ["Enzyme ändern Kinetik, nicht Thermodynamik", "K bleibt unverändert — Gleichgewicht wird nur schneller erreicht"],
          difficulty: 2,
          tags: []
        }
      ]
    },

    {
      id: "ch-8-02",
      title: "Chemisches Gleichgewicht und Massenwirkungsgesetz",
      content: `## Das dynamische Gleichgewicht

Viele chemische Reaktionen sind reversibel: Die Produkte können wieder zu Edukten zurückreagieren. Man schreibt dies mit einem Doppelpfeil:

**A + B ⇌ C + D**

Anfänglich dominiert die Hinreaktion. Mit steigenden Produktkonzentrationen nimmt die Rückreaktion zu. Irgendwann werden Hin- und Rückreaktion gleich schnell — es stellt sich ein **dynamisches Gleichgewicht** ein. Dynamisch bedeutet: Beide Reaktionen laufen weiterhin ab, aber ihre Geschwindigkeiten sind gleich. Makroskopisch scheint die Reaktion zu stehen; mikroskopisch herrscht rege Aktivität.

Das Gleichgewicht ist kein statischer Zustand. Isotopen-Tracerexperimente zeigen, dass im Gleichgewicht ständig Moleküle zwischen Edukt- und Produktzustand wechseln — nur netto findet keine Änderung statt.

## Das Massenwirkungsgesetz (MWG)

Das **Massenwirkungsgesetz** (Guldberg und Waage, 1864) formuliert die quantitative Bedingung für das chemische Gleichgewicht. Für die allgemeine Reaktion:

**aA + bB ⇌ cC + dD**

gilt die Gleichgewichtskonstante K_c (konzentrationsbasiert):

**K_c = [C]^c · [D]^d / ([A]^a · [B]^b)**

Die eckigen Klammern bezeichnen Gleichgewichtskonzentrationen in mol/L, die Hochzahlen sind die stöchiometrischen Koeffizienten. Wichtig: Reine Feststoffe und flüssiges Wasser (bei wässrigen Reaktionen) tauchen nicht im MWG auf, da ihre Aktivität (näherungsweise) 1 ist.

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

Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin: Hb + O₂ ⇌ HbO₂. In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Die Michaelis-Konstante K_M bei Enzymreaktionen ist ebenfalls eine Gleichgewichtskonstante und gibt die Substrataffinität von Enzymen an.`,

      lernziele: [
        "Das dynamische Gleichgewicht definieren und von einem statischen Zustand abgrenzen.",
        "Das Massenwirkungsgesetz formulieren und K_c für gegebene Reaktionen aufstellen.",
        "Den Reaktionsquotienten Q berechnen und mit K_c vergleichen, um die Reaktionsrichtung zu bestimmen.",
        "Die Bedeutung der Größe von K_c (>>1, ≈1, <<1) für die Lage des Gleichgewichts interpretieren.",
        "Den Zusammenhang zwischen K und ΔG° qualitativ erläutern."
      ],

      sections: [
        {
          heading: "Das Massenwirkungsgesetz",
          text: "Für aA + bB ⇌ cC + dD gilt K_c = [C]^c·[D]^d / ([A]^a·[B]^b). Reine Feststoffe und Wasser (Lösungsmittel) erscheinen nicht im Ausdruck. K_c ist temperaturabhängig, aber unabhängig von Druck und Konzentrationsänderungen.",
          merksatz: "K_c = Produkte hoch Koeffizient / Edukte hoch Koeffizient — Feststoffe und H₂O ausklammern!"
        },
        {
          heading: "Reaktionsquotient Q vs. Gleichgewichtskonstante K",
          text: "Q wird wie K_c berechnet, aber mit aktuellen (nicht Gleichgewichts-)Konzentrationen. Q < K: Reaktion läuft vorwärts. Q > K: Reaktion läuft rückwärts. Q = K: Gleichgewicht erreicht. Der Vergleich Q vs. K ermöglicht die Vorhersage der spontanen Reaktionsrichtung.",
          merksatz: "Q < K → Produkte werden gebildet; Q > K → Edukte werden gebildet."
        },
        {
          heading: "K und Thermodynamik",
          text: "ΔG° = −RT·ln(K) verknüpft Gleichgewichtskonstante mit Standard-Gibbs-Energie. Große K entspricht negativem ΔG° — Reaktion ist thermodynamisch günstig. Wichtig: K sagt nichts über die Reaktionsgeschwindigkeit aus (das ist Kinetik).",
          merksatz: "ΔG° < 0 ↔ K > 1 ↔ Reaktion günstig (thermodynamisch); Kinetik ist separat!"
        }
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
        "Hämoglobin-O₂-Bindung folgt MWG: pO₂ steuert die Lage des Gleichgewichts."
      ],

      altfrage: {
        frage: "Formulieren Sie das Massenwirkungsgesetz für die Reaktion N₂(g) + 3H₂(g) ⇌ 2NH₃(g) und erläutern Sie, was ein K_c von 6×10² bei 500 °C über die Lage des Gleichgewichts aussagt. Wie ändert sich K_c, wenn die Reaktion endotherm wäre?",
        antwort: `Das Massenwirkungsgesetz für N₂ + 3H₂ ⇌ 2NH₃ lautet:

K_c = [NH₃]² / ([N₂]·[H₂]³)

Ein K_c von 6×10² (= 600) ist deutlich größer als 1. Das bedeutet, im Gleichgewicht liegen die Konzentrationen auf der Produktseite (NH₃) deutlich höher als auf der Eduktseite. Das Gleichgewicht ist stark zu den Produkten hin verschoben — die Ammoniaksynthese ist thermodynamisch günstig bei 500 °C.

Allerdings sagt K_c nichts über die Reaktionsgeschwindigkeit aus: Der Kompromiss bei 500 °C ist nötig, weil bei niedrigerer Temperatur die Reaktion zwar ein noch günstigeres Gleichgewicht hat, aber kinetisch zu langsam abläuft. Der Eisenkatalysator senkt die Aktivierungsenergie und ermöglicht vernünftige Reaktionsgeschwindigkeiten.

Wäre die Reaktion endotherm (ΔH > 0), würde K_c mit steigender Temperatur zunehmen (Van't-Hoff-Gleichung). Das Gleichgewicht läge bei höherer Temperatur weiter auf Produktseite — im Gegensatz zur exothermen Realreaktion, bei der K_c mit steigender Temperatur sinkt.`
      },

      klinischerBezug: "Das Massenwirkungsgesetz beschreibt die O₂-Bindung an Hämoglobin (Hb + O₂ ⇌ HbO₂): In der Lunge (hoher pO₂) liegt Q < K, das Gleichgewicht verschiebt sich zu HbO₂ — Sauerstoff wird geladen. Im Gewebe (niedriger pO₂) gilt Q > K, die Reaktion läuft rückwärts, O₂ wird abgegeben. Im Labor nutzt man Gleichgewichtskonstanten bei Enzym-Substrat-Reaktionen (Michaelis-Konstante K_M), um Enzymaffinitäten zu vergleichen und Pharmaka zu optimieren.",

      selfTest: [
        {
          question: "Welcher Ausdruck ist das korrekte Massenwirkungsgesetz für 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?",
          options: [
            "K_c = [SO₂]²·[O₂] / [SO₃]²",
            "K_c = [SO₃]² / ([SO₂]²·[O₂])",
            "K_c = [SO₃] / ([SO₂]·[O₂])",
            "K_c = 2[SO₃] / (2[SO₂]·[O₂])",
            "K_c = [SO₂]·[O₂] / [SO₃]"
          ],
          correctIndex: 1,
          explanation: "Das MWG lautet K_c = [Produkte]^Koeffizient / [Edukte]^Koeffizient. Für 2SO₂ + O₂ ⇌ 2SO₃: K_c = [SO₃]² / ([SO₂]²·[O₂]). Die stöchiometrischen Koeffizienten (2, 1, 2) werden zu Exponenten. Die anderen Optionen verwechseln Zähler/Nenner oder berücksichtigen die Koeffizienten nicht korrekt. Koeffizienten dürfen nicht als Faktoren (z. B. 2×) in den Ausdruck eingehen — sie werden ausschließlich als Exponenten verwendet.",
          hints: ["Koeffizienten werden zu Exponenten im MWG", "Produkte im Zähler, Edukte im Nenner"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Für eine Reaktion gilt K_c = 0,001. Was bedeutet das für das Gleichgewicht?",
          options: [
            "Die Reaktion ist vollständig — nahezu alle Edukte werden zu Produkten.",
            "Das Gleichgewicht liegt stark auf der Seite der Edukte.",
            "Edukte und Produkte liegen in gleichen Konzentrationen vor.",
            "Die Reaktion ist sehr schnell.",
            "K_c < 1 bedeutet, die Reaktion ist verboten."
          ],
          correctIndex: 1,
          explanation: "K_c = 0,001 = 10⁻³ ist deutlich kleiner als 1. Das bedeutet, im Gleichgewicht überwiegen die Edukte stark gegenüber den Produkten. K_c sagt nichts über die Reaktionsgeschwindigkeit aus. 'Verboten' ist chemisch kein Konzept im Gleichgewichtskontext. Ein vollständiger Ablauf (nahezu nur Produkte) entspräche K_c >> 1. K_c ≈ 1 würde ähnliche Konzentrationen von Edukten und Produkten bedeuten.",
          hints: ["K_c < 1: Gleichgewicht auf Eduktseite", "K_c > 1: Gleichgewicht auf Produktseite"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Was ist der Reaktionsquotient Q und wofür wird er verwendet?",
          options: [
            "Q ist identisch mit K_c und gilt nur im Gleichgewicht.",
            "Q wird mit aktuellen Konzentrationen berechnet und mit K_c verglichen, um die Reaktionsrichtung vorherzusagen.",
            "Q ist das Produkt aller Reaktantenkonzentrationen ohne Exponenten.",
            "Q gibt die Reaktionsgeschwindigkeit an.",
            "Q ist nur für Gasreaktionen definiert."
          ],
          correctIndex: 1,
          explanation: "Der Reaktionsquotient Q hat dieselbe Form wie K_c, wird aber mit den aktuellen (nicht Gleichgewichts-)Konzentrationen berechnet. Vergleich: Q < K_c → Reaktion läuft vorwärts; Q > K_c → Reaktion läuft rückwärts; Q = K_c → Gleichgewicht. Q ist ein mächtiges Werkzeug, um ohne Experiment die spontane Reaktionsrichtung vorherzusagen. Er gilt für alle Reaktionstypen.",
          hints: ["Q: aktuelle Konzentrationen; K_c: Gleichgewichtskonzentrationen", "Q < K → vorwärts; Q > K → rückwärts"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Aussage zum Zusammenhang ΔG° = −RT·ln(K) ist korrekt?",
          options: [
            "Wenn K = 1, dann ist ΔG° = RT.",
            "Wenn K > 1, dann ist ΔG° negativ — die Reaktion ist thermodynamisch begünstigt.",
            "ΔG° gibt die Reaktionsgeschwindigkeit an.",
            "Wenn ΔG° > 0, dann ist K > 1.",
            "Die Formel gilt nur für endotherme Reaktionen."
          ],
          correctIndex: 1,
          explanation: "Aus ΔG° = −RT·ln(K) folgt: Wenn K > 1, dann ist ln(K) > 0, also ΔG° = −RT·ln(K) < 0 — die Reaktion ist thermodynamisch begünstigt. Wenn K = 1, dann ln(1) = 0, also ΔG° = 0. Wenn ΔG° > 0, dann ln(K) < 0, also K < 1. ΔG° beschreibt Thermodynamik, nicht Kinetik. Die Formel gilt universell.",
          hints: ["ln(K) > 0 wenn K > 1 → ΔG° = −RT·ln(K) < 0", "ΔG° und Kinetik sind unabhängige Konzepte"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Warum erscheint Wasser (H₂O) im MWG-Ausdruck bei wässrigen Reaktionen nicht?",
          options: [
            "Weil Wasser kein Reaktant ist.",
            "Weil die Aktivität des reinen Lösungsmittels näherungsweise 1 ist und keinen Beitrag leistet.",
            "Weil H₂O immer vollständig reagiert.",
            "Weil das MWG nur für Gase gilt.",
            "Weil Wasser keine Konzentration hat."
          ],
          correctIndex: 1,
          explanation: "In sehr verdünnten wässrigen Lösungen ist die Konzentration von Wasser näherungsweise konstant (ca. 55,5 mol/L) und ändert sich durch die Reaktion kaum. Formal entspricht das einer Aktivität von 1 — daher taucht H₂O im MWG-Ausdruck nicht auf. Dasselbe gilt für reine Feststoffe. Das MWG gilt für alle Aggregatzustände, nicht nur Gase.",
          hints: ["Aktivität des reinen Lösungsmittels ≈ 1", "Feststoffe und H₂O erscheinen nicht explizit im MWG-Ausdruck"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Eine exotherme Reaktion hat bei 25 °C ein K_c = 10⁵. Was passiert mit K_c bei Erhöhung auf 100 °C?",
          options: [
            "K_c steigt weiter an, weil höhere Temperatur immer K_c erhöht.",
            "K_c bleibt konstant, da K nur von der Konzentration abhängt.",
            "K_c nimmt ab, weil bei exothermen Reaktionen höhere Temperatur das Gleichgewicht zu den Edukten verschiebt.",
            "K_c wird genau 1.",
            "K_c wird negativ."
          ],
          correctIndex: 2,
          explanation: "Für exotherme Reaktionen (ΔH < 0) verschiebt eine Temperaturerhöhung das Gleichgewicht in Richtung Edukte (Le Chatelier). Mathematisch sinkt K mit steigendem T, wenn ΔH° < 0. K_c kann nie negativ werden (Quotient positiver Konzentrationen). K ist nicht konzentrationsunabhängig — es ist temperaturabhängig.",
          hints: ["Exotherm + Temperaturerhöhung → Gleichgewicht zu Edukten → K_c sinkt", "Le Chatelier: System 'flieht' vor der Wärmezufuhr"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Welche Reaktion entspricht K_c = [NH₃]² / ([N₂]·[H₂]³)?",
          options: [
            "NH₃ ⇌ N₂ + H₂",
            "N₂ + H₂ ⇌ NH₃",
            "N₂ + 3H₂ ⇌ 2NH₃",
            "2N₂ + 3H₂ ⇌ 2NH₃",
            "2NH₃ ⇌ N₂ + 3H₂"
          ],
          correctIndex: 2,
          explanation: "K_c = [NH₃]² / ([N₂]·[H₂]³) entspricht N₂ + 3H₂ ⇌ 2NH₃. NH₃ steht mit Exponent 2 im Zähler (Produkt, Koeffizient 2), N₂ mit Exponent 1 im Nenner (Edukt, Koeffizient 1), H₂ mit Exponent 3 im Nenner (Edukt, Koeffizient 3). Dies ist die Haber-Bosch-Reaktion. 2NH₃ ⇌ N₂ + 3H₂ wäre die umgekehrte Reaktion, deren K_c der Kehrwert wäre.",
          hints: ["Produkte im Zähler, Edukte im Nenner — Exponenten = Koeffizienten", "NH₃² im Zähler → NH₃ ist Produkt mit Koeffizient 2"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Was bedeutet 'dynamisches Gleichgewicht' im Unterschied zu einem statischen Zustand?",
          options: [
            "Im dynamischen Gleichgewicht läuft keine Reaktion mehr ab.",
            "Im dynamischen Gleichgewicht laufen Hin- und Rückreaktion gleichzeitig ab; netto ändert sich nichts.",
            "Dynamisch bedeutet, dass sich die Konzentrationen ständig ändern.",
            "Statisches Gleichgewicht bedeutet, dass K_c = 0 ist.",
            "Dynamisches Gleichgewicht gilt nur bei Gasreaktionen."
          ],
          correctIndex: 1,
          explanation: "Ein dynamisches Gleichgewicht bedeutet: Hin- und Rückreaktion laufen gleichzeitig mit gleicher Geschwindigkeit ab. Makroskopisch beobachtet man keine Konzentrationsänderung, aber mikroskopisch ist das System hochaktiv — Moleküle wechseln ständig zwischen Edukt- und Produktzustand. Isotopen-Tracerexperimente bestätigen dies. Chemische Gleichgewichte sind stets dynamisch.",
          hints: ["Dynamisch = beide Reaktionen laufen weiter, aber gleich schnell", "Netto-Änderung = 0, aber mikroskopisch aktiv"],
          difficulty: 1,
          tags: []
        }
      ]
    },

    {
      id: "ch-8-03",
      title: "Le Chatelier-Prinzip — Störung des Gleichgewichts",
      content: `## Das Prinzip von Le Chatelier

Das **Prinzip von Le Chatelier** (auch: Prinzip des kleinsten Zwangs, 1884) lautet:

> Wird ein System im chemischen Gleichgewicht durch äußere Einwirkung gestört, so verschiebt es sich in diejenige Richtung, die der Störung entgegenwirkt.

Dieses Prinzip ist eines der wichtigsten Konzepte der physikalischen Chemie — es erlaubt qualitative Vorhersagen über die Verschiebung von Gleichgewichten ohne aufwendige Berechnungen.

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

**Calciumstoffwechsel:** Ca²⁺ + HPO₄²⁻ ⇌ CaHPO₄(s). Beim Knochenbau wird CaHPO₄ ausgefällt — Produktentzug verschiebt das Gleichgewicht in Richtung Mineralisation. Parathormon und Calcitonin steuern die Gleichgewichtslage über [Ca²⁺] im Blut.`,

      lernziele: [
        "Das Prinzip von Le Chatelier präzise formulieren und auf Konzentrationsänderungen anwenden.",
        "Den Einfluss von Druckänderungen auf Gasgleichgewichte (Δn) vorhersagen.",
        "Erläutern, warum Temperaturänderungen K_c selbst verändern, während Konzentrations- und Druckänderungen nur Q verändern.",
        "Den Haber-Bosch-Prozess als Beispiel für optimierte Gleichgewichtssteuerung analysieren.",
        "Puffergleichgewichte im Blut (Carbonat-Puffersystem) mit Le Chatelier erklären."
      ],

      sections: [
        {
          heading: "Le Chatelier: Konzentration und Druck",
          text: "Konzentrationserhöhung eines Edukts → Gleichgewicht verschiebt sich zu Produkten (Q sinkt unter K → Hinreaktion). Druckerhöhung bei Gasreaktionen → Verschiebung zur Seite mit weniger Gasmolekülen (kleineres Δn). Beide Änderungen verändern nur Q, nicht K_c selbst.",
          merksatz: "Le Chatelier: Das System 'flieht' immer vor der Störung — Zufuhr von Edukten → mehr Produkte."
        },
        {
          heading: "Le Chatelier: Temperatur",
          text: "Temperaturänderung ist besonders: Sie ändert K_c selbst (nicht nur Q). Exotherme Reaktion + höhere T → K_c sinkt (Gleichgewicht zu Edukten). Endotherme Reaktion + höhere T → K_c steigt (Gleichgewicht zu Produkten). Wärme wird wie ein Reaktant/Produkt behandelt.",
          merksatz: "Temperaturerhöhung: Exotherm → K_c sinkt; Endotherm → K_c steigt."
        },
        {
          heading: "Industrielle Anwendung: Haber-Bosch",
          text: "N₂ + 3H₂ ⇌ 2NH₃ (exotherm, Δn = −2): Hoher Druck begünstigt NH₃-Bildung. Niedrige Temperatur wäre thermodynamisch ideal (K_c groß), aber kinetisch zu langsam. Kompromiss: 400–500 °C + Eisenkatalysator + NH₃-Entnahme.",
          merksatz: "Haber-Bosch: Hoher Druck + moderates T + Katalysator + Produktentzug = Optimum."
        }
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
        "Blutpuffer (CO₂/HCO₃⁻) funktioniert nach Le Chatelier: pH-Stabilisierung."
      ],

      altfrage: {
        frage: "Erläutern Sie anhand der Reaktion N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ/mol), wie sich Druckerhöhung, Temperaturerhöhung und Zugabe eines Eisenkatalysators jeweils auf die Gleichgewichtslage und K_c auswirken.",
        antwort: `Druckerhöhung: Die Reaktion hat Δn = 2 − (1+3) = −2. Nach Le Chatelier verschiebt sich das Gleichgewicht bei Druckerhöhung zur Seite mit weniger Gasmolekülen — also zur Produktseite (NH₃). Q sinkt kurz unter K_c, das System reagiert durch mehr NH₃-Bildung bis Q = K_c. K_c selbst ändert sich nicht durch Druckänderungen.

Temperaturerhöhung: Da die Reaktion exotherm ist (ΔH < 0), ist Wärme quasi ein Produkt. Temperaturerhöhung → Gleichgewicht verschiebt sich zu den Edukten (Le Chatelier). K_c sinkt mit steigender Temperatur. Daher wird beim Haber-Bosch-Verfahren trotz exothermer Reaktion eine moderate Temperatur von 400–500 °C gewählt — ein Kompromiss zwischen Thermodynamik und Kinetik.

Eisenkatalysator: Der Katalysator beeinflusst weder die Gleichgewichtslage noch K_c. Er senkt lediglich die Aktivierungsenergie der Hinreaktion (und proportional auch der Rückreaktion, so dass K_c unverändert bleibt). Das Gleichgewicht wird schneller erreicht — in der Industrie erreicht man damit wirtschaftliche Ausbeuten in akzeptabler Zeit.`
      },

      klinischerBezug: "Das Blut-Puffersystem CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ folgt direkt dem Prinzip von Le Chatelier: Bei metabolischer Azidose steigt [H⁺], das Gleichgewicht verschiebt sich links (CO₂ entsteht), die Atemfrequenz steigt (respiratorische Kompensation). Respiratorische Alkalose durch Hyperventilation (CO₂-Abatmung) verschiebt das Gleichgewicht rechts, [H⁺] sinkt, pH steigt. Intensivmediziner steuern Beatmungsparameter (pCO₂) gezielt, um den pH-Wert des Blutes im physiologischen Bereich (7,35–7,45) zu halten.",

      selfTest: [
        {
          question: "Bei der Reaktion 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) wird der Druck erhöht. Was passiert?",
          options: [
            "Das Gleichgewicht verschiebt sich zu SO₂ und O₂ (Edukte), weil mehr Mole entstehen.",
            "Das Gleichgewicht verschiebt sich zu SO₃ (Produkte), weil die Produktseite weniger Gasmoleküle hat.",
            "Der Druck hat keinen Einfluss, weil Δn = 0 ist.",
            "K_c steigt bei höherem Druck.",
            "Nur die Reaktionsgeschwindigkeit ändert sich, nicht die Gleichgewichtslage."
          ],
          correctIndex: 1,
          explanation: "Für 2SO₂ + O₂ ⇌ 2SO₃ gilt: Auf der Eduktseite sind 3 Gasmoleküle (2+1), auf der Produktseite 2 (nur SO₃). Δn = 2 − 3 = −1. Nach Le Chatelier verschiebt sich das Gleichgewicht bei Druckerhöhung zur Seite mit weniger Gasmolekülen — also zur SO₃-Seite. K_c ändert sich durch Druck nicht. Dies ist die Grundlage des industriellen Contact-Prozesses zur Schwefelsäureherstellung.",
          hints: ["Δn = Produkt-Gasmole minus Edukt-Gasmole", "Druckerhöhung → Seite mit kleinerem Δn"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was ist das Prinzip von Le Chatelier in seiner präzisen Formulierung?",
          options: [
            "Eine Reaktion läuft immer in Richtung der Produkte, wenn Wärme zugeführt wird.",
            "Wird ein Gleichgewichtssystem gestört, verschiebt es sich so, dass die Störung verkleinert wird.",
            "Katalysatoren verschieben das Gleichgewicht zugunsten der Produkte.",
            "Bei konstanter Temperatur ist K_c unabhängig von der Konzentration.",
            "Das Gleichgewicht liegt immer auf der Seite mit den energieärmeren Stoffen."
          ],
          correctIndex: 1,
          explanation: "Das Prinzip von Le Chatelier lautet: Wird ein System im Gleichgewicht gestört, reagiert es durch Verschiebung in diejenige Richtung, die der Störung entgegenwirkt. Dies gilt für Konzentrationsänderungen, Druckänderungen (bei Δn ≠ 0) und Temperaturänderungen. Katalysatoren verschieben das Gleichgewicht nicht. Das Gleichgewicht liegt nicht zwingend auf der Seite der energieärmeren Stoffe.",
          hints: ["Le Chatelier: 'Gegenreaktion auf Störung'", "Gilt für Konzentration, Druck und Temperatur"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Für eine endotherme Reaktion A ⇌ B (ΔH = +50 kJ/mol) wird die Temperatur erhöht. Was passiert mit K_c und der Gleichgewichtslage?",
          options: [
            "K_c sinkt, Gleichgewicht verschiebt sich zu A.",
            "K_c bleibt konstant, nur die Reaktionsgeschwindigkeit steigt.",
            "K_c steigt, Gleichgewicht verschiebt sich zu B.",
            "K_c sinkt, Gleichgewicht verschiebt sich zu B.",
            "Temperaturänderungen beeinflussen K_c bei endothermen Reaktionen nicht."
          ],
          correctIndex: 2,
          explanation: "Bei endothermen Reaktionen (ΔH > 0) ist Wärme quasi ein Edukt: A + Wärme ⇌ B. Temperaturerhöhung = mehr Wärme-Edukt → Gleichgewicht verschiebt sich zu B (Produktseite). K_c steigt mit der Temperatur. K_c ändert sich bei Temperaturänderungen immer — im Gegensatz zu Konzentrations- und Druckänderungen.",
          hints: ["Endotherm: Wärme ist 'Edukt' → Zufuhr von Wärme → mehr Produkte", "Van't-Hoff: ΔH > 0 + höhere T → K_c steigt"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Im Haber-Bosch-Prozess wird NH₃ nach der Synthese kontinuierlich verflüssigt und abgezogen. Welchen Effekt hat das?",
          options: [
            "Das Gleichgewicht verschiebt sich zu N₂ und H₂ (Edukte).",
            "K_c vergrößert sich, weil NH₃ entfernt wird.",
            "Das Gleichgewicht verschiebt sich kontinuierlich zu NH₃ — höhere Ausbeute.",
            "Es hat keinen Einfluss, weil K_c konstant ist.",
            "Die Reaktion stoppt, weil kein NH₃ mehr vorhanden ist."
          ],
          correctIndex: 2,
          explanation: "Durch kontinuierliche Entnahme von NH₃ sinkt [NH₃] → Q < K_c → Hinreaktion überwiegt → mehr NH₃ wird produziert → Q nähert sich wieder K_c. K_c selbst ändert sich nicht — es ist die Konzentrationsänderung, die Q unter K_c drückt. Diese Strategie ist ein klassisches Le-Chatelier-Prinzip in der industriellen Chemie.",
          hints: ["Produktentzug → Q < K_c → Hinreaktion bis Q = K_c", "K_c bleibt konstant — nur Q ändert sich durch Entnahme"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welchen Einfluss hat die Zugabe eines Inertgases (z. B. Argon) bei konstantem Volumen auf ein Gasgleichgewicht?",
          options: [
            "Das Gleichgewicht verschiebt sich zur Seite mit mehr Gasmolekülen.",
            "Das Gleichgewicht verschiebt sich zur Seite mit weniger Gasmolekülen.",
            "Kein Einfluss, da Partialdrücke der Reaktanten unverändert bleiben.",
            "K_c steigt, weil der Gesamtdruck steigt.",
            "Die Reaktionsgeschwindigkeit halbiert sich."
          ],
          correctIndex: 2,
          explanation: "Bei konstantem Volumen erhöht die Zugabe eines Inertgases den Gesamtdruck, aber die Partialdrücke der Reaktanten bleiben unverändert (p_i = n_i·RT/V; V, T, n_i konstant). Da das MWG nur Partialdrücke der Reaktanten enthält, ändert sich Q nicht — kein Einfluss auf das Gleichgewicht. Anders bei konstantem Druck: Dort sinken die Partialdrücke der Reaktanten.",
          hints: ["Inertgas bei konst. V: Partialdrücke der Reaktanten unverändert", "Unterschied: konst. Volumen vs. konst. Druck bei Inertgaszugabe"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Was passiert bei Hyperventilation mit dem Blut-pH (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻)?",
          options: [
            "[CO₂] steigt → pH sinkt (Azidose).",
            "[CO₂] sinkt → Gleichgewicht verschiebt sich nach links → [H⁺] sinkt → pH steigt (Alkalose).",
            "[HCO₃⁻] steigt → pH sinkt.",
            "Keine Auswirkung, da CO₂ kein Reaktant ist.",
            "[H⁺] steigt → pH sinkt (Azidose)."
          ],
          correctIndex: 1,
          explanation: "Bei Hyperventilation wird mehr CO₂ abgeatmet → pCO₂ sinkt → [H₂CO₃] sinkt → Gleichgewicht verschiebt sich links → [H⁺] sinkt → pH steigt → respiratorische Alkalose. Henderson-Hasselbalch: ↓[CO₂] im Nenner → größeres [HCO₃⁻]/[CO₂] → höherer pH. Klinisch: Schwindel, Kribbeln. Therapie: Rückatmung in Tüte.",
          hints: ["CO₂-Abatmung → [CO₂] sinkt → Gleichgewicht nach links", "Weniger H⁺ → pH steigt → Alkalose"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Warum wird beim Haber-Bosch-Prozess trotz exothermer Reaktion eine Temperatur von 400–500 °C gewählt?",
          options: [
            "Weil K_c bei hoher Temperatur größer ist und mehr NH₃ entsteht.",
            "Weil bei 150 °C der Druck zu hoch wäre.",
            "Weil bei niedrigen Temperaturen die Reaktion kinetisch zu langsam ist — Kompromiss zwischen K_c und Reaktionsgeschwindigkeit.",
            "Weil der Eisenkatalysator nur bei 400 °C aktiv ist.",
            "Weil NH₃ bei 150 °C nicht flüssig wird."
          ],
          correctIndex: 2,
          explanation: "Bei der exothermen NH₃-Synthese sinkt K_c mit steigender Temperatur — thermodynamisch wäre tiefe Temperatur ideal für hohe NH₃-Ausbeute. Aber bei 150 °C ist die Reaktionsgeschwindigkeit extrem niedrig. Der industrielle Kompromiss bei 400–500 °C bietet ausreichend hohe Reaktionsgeschwindigkeit (Kinetik) + noch akzeptabler K_c-Wert (Thermodynamik). Der Eisenkatalysator senkt E_A und erlaubt vernünftige Geschwindigkeiten bei dieser Temperatur.",
          hints: ["Niedriges T: K_c groß (thermodynamisch gut), aber v klein (kinetisch schlecht)", "Kompromiss-Temperatur = Optimum aus Thermodynamik + Kinetik"],
          difficulty: 3,
          tags: []
        }
      ]
    },

    {
      id: "ch-8-04",
      title: "Puffersysteme und Säure-Base-Gleichgewichte",
      content: `## Säure-Base-Gleichgewichte: Grundlagen

In wässriger Lösung dissoziieren Säuren (HA) nach:

**HA + H₂O ⇌ H₃O⁺ + A⁻**

Die Gleichgewichtskonstante dieser Reaktion ist die **Säurekonstante K_a**:

**K_a = [H₃O⁺] · [A⁻] / [HA]**

Starke Säuren (z. B. HCl, H₂SO₄, HNO₃) haben K_a >> 1 — sie dissoziieren praktisch vollständig. Schwache Säuren (z. B. CH₃COOH, H₂CO₃, NH₄⁺) haben K_a << 1 — sie dissoziieren nur partiell. Der **pK_a-Wert** = −log(K_a) ist die gebräuchlichere Größe: Kleinere pK_a = stärkere Säure.

Für konjugierte Säure-Base-Paare gilt:

**pK_a + pK_b = 14 (bei 25 °C)**

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

Der **Base Excess (BE)** gibt an, wie viel starke Säure oder Base nötig wäre, um pH 7,4 bei 37 °C und pCO₂ 40 mmHg wiederherzustellen. BE < −2 = metabolische Azidose; BE > +2 = metabolische Alkalose.`,

      lernziele: [
        "Die Henderson-Hasselbalch-Gleichung formulieren und zur pH-Berechnung von Pufferlösungen anwenden.",
        "Das Carbonat-Puffersystem des Blutes beschreiben und physiologische Normalwerte nennen.",
        "Respiratorische und metabolische Azidose/Alkalose anhand von pH, pCO₂ und HCO₃⁻ unterscheiden.",
        "Den Bohr-Effekt als Le-Chatelier-Prinzip in der Hämoglobin-O₂-Bindung erläutern.",
        "Die Rolle der Carboanhydrase im CO₂-Transport und der pH-Regulierung erklären."
      ],

      sections: [
        {
          heading: "Henderson-Hasselbalch-Gleichung",
          text: "pH = pK_a + log([A⁻]/[HA]): Der pH eines Puffers hängt vom pK_a der Säure und dem Konzentrationsverhältnis Base/Säure ab. Maximale Pufferkapazität bei [A⁻] = [HA] (pH = pK_a). Effektiver Pufferbereich: pK_a ± 1. Blut: pK_a(H₂CO₃) ≈ 6,1, [HCO₃⁻]/[CO₂] ≈ 20:1 → pH = 7,4.",
          merksatz: "Henderson-Hasselbalch: pH = pK_a + log(Base/Säure). Pufferoptimum bei pH = pK_a."
        },
        {
          heading: "Das Carbonat-Puffersystem",
          text: "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: Lunge reguliert pCO₂ (schnell, Minuten), Niere reguliert [HCO₃⁻] (langsam, Stunden bis Tage). Normal: pH 7,40, pCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L. Verhältnis 20:1 bei pH 7,4.",
          merksatz: "Blut-pH: Lunge (CO₂) = kurzfristig; Niere (HCO₃⁻) = langfristig."
        },
        {
          heading: "Störungen des Säure-Base-Haushalts",
          text: "Respiratorische Azidose: ↑pCO₂ → pH↓. Respiratorische Alkalose: ↓pCO₂ → pH↑. Metabolische Azidose: ↓HCO₃⁻ → pH↓ (Kussmaul-Atmung). Metabolische Alkalose: ↑HCO₃⁻ → pH↑. Kompensation jeweils durch das andere Organ-System.",
          merksatz: "Azidose: pH < 7,35. Alkalose: pH > 7,45. Respiratorisch: pCO₂. Metabolisch: HCO₃⁻."
        }
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
        "pK_a(H₂CO₃) ≈ 6,1 (effektiv); pK_a(H₂PO₄⁻) ≈ 7,2 (intrazellulär)."
      ],

      altfrage: {
        frage: "Ein Patient hat: pH 7,28, pCO₂ 55 mmHg (Norm: 40 mmHg), HCO₃⁻ 26 mmol/L (Norm: 24 mmol/L). Klassifizieren Sie die Störung und erklären Sie den Mechanismus mithilfe des Carbonat-Puffersystems.",
        antwort: `Klassifikation: pH 7,28 < 7,35 → Azidose. pCO₂ 55 mmHg erhöht → respiratorische Ursache (Hypoventilation, z. B. COPD). HCO₃⁻ 26 mmol/L leicht erhöht → beginnende metabolische Kompensation (renale HCO₃⁻-Retention).

Diagnose: Respiratorische Azidose mit beginnendem renalem Ausgleich.

Mechanismus: Erhöhtes pCO₂ verschiebt das Gleichgewicht CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ nach rechts (Le Chatelier: mehr CO₂ → mehr H₂CO₃ → mehr H⁺). Die H⁺-Konzentration steigt → pH sinkt.

Henderson-Hasselbalch-Rechnung: [CO₂(aq)] = 55 × 0,03 = 1,65 mmol/L. pH = 6,1 + log(26/1,65) = 6,1 + log(15,8) = 6,1 + 1,20 = 7,30 ≈ 7,28 (Rechnung bestätigt Befund).

Renale Kompensation: Die Niere retiniert HCO₃⁻ (erhöht [HCO₃⁻] auf 26 mmol/L), um das Verhältnis HCO₃⁻/CO₂ teilweise zu normalisieren und den pH zu heben. Vollständige Kompensation dauert Stunden bis Tage.`
      },

      klinischerBezug: "Die Blutgasanalyse (BGA) ist das klinische Anwendungsinstrument der Henderson-Hasselbalch-Gleichung: pH, pCO₂ und HCO₃⁻ erlauben die exakte Klassifikation von Azidose/Alkalose und deren Ursache (respiratorisch vs. metabolisch). Carboanhydrase-Hemmer (z. B. Acetazolamid) werden als Diuretika und zur Glaukomtherapie eingesetzt — sie hemmen die CO₂-Hydratisierung in Nierentubuli und Auge. Der Bohr-Effekt ist ein direktes Le-Chatelier-Beispiel, das die Sauerstoffversorgung arbeitender Muskeln optimiert.",

      selfTest: [
        {
          question: "Die Henderson-Hasselbalch-Gleichung lautet pH = pK_a + log([A⁻]/[HA]). Bei welchem Verhältnis [A⁻]/[HA] gilt pH = pK_a?",
          options: [
            "[A⁻]/[HA] = 10 → log(10) = 1 → pH = pK_a + 1",
            "[A⁻]/[HA] = 0,1 → log(0,1) = −1 → pH = pK_a − 1",
            "[A⁻]/[HA] = 1 → log(1) = 0 → pH = pK_a",
            "[A⁻]/[HA] = 100 → log(100) = 2 → pH = pK_a + 2",
            "Das Verhältnis ist irrelevant für pH = pK_a."
          ],
          correctIndex: 2,
          explanation: "Wenn [A⁻] = [HA], ist das Verhältnis [A⁻]/[HA] = 1. log(1) = 0. Daher: pH = pK_a + 0 = pK_a. Bei diesem Verhältnis hat der Puffer auch die größte Pufferkapazität, weil er in beide Richtungen gleich gut puffern kann. Die anderen Optionen sind zwar mathematisch korrekt für die jeweiligen Verhältnisse, aber nur [A⁻]/[HA] = 1 ergibt pH = pK_a.",
          hints: ["log(1) = 0", "pH = pK_a wenn Base = Säure-Konzentration"],
          difficulty: 1,
          tags: []
        },
        {
          question: "Das Blut-Carbonat-Puffersystem hat [HCO₃⁻] = 24 mmol/L und [CO₂(aq)] = 1,2 mmol/L (pK_a = 6,1). Welcher pH resultiert?",
          options: [
            "pH = 6,1 + log(1,2/24) = 6,1 − 1,3 = 4,8",
            "pH = 6,1 + log(24/1,2) = 6,1 + 1,3 = 7,4",
            "pH = 6,1 + log(24 + 1,2) = 6,1 + 1,4 = 7,5",
            "pH = 6,1 − log(24/1,2) = 6,1 − 1,3 = 4,8",
            "pH = pK_a = 6,1, weil [HCO₃⁻] > [CO₂]."
          ],
          correctIndex: 1,
          explanation: "Henderson-Hasselbalch: pH = pK_a + log([Base]/[Säure]) = 6,1 + log([HCO₃⁻]/[CO₂(aq)]) = 6,1 + log(24/1,2) = 6,1 + log(20) = 6,1 + 1,301 ≈ 7,4. Dies entspricht dem physiologischen Blut-pH von 7,40. Das ungewöhnlich hohe Verhältnis von 20:1 ergibt sich, weil das effektive pK_a des Systems (6,1) weit vom Ziel-pH (7,4) entfernt ist. Niere und Lunge halten dieses Verhältnis konstant.",
          hints: ["log(20) = log(2 × 10) = log2 + log10 ≈ 0,301 + 1 = 1,301", "HCO₃⁻ ist die Base, CO₂(aq) ist die Säure"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Ein Patient hyperventiliert (Panikattacke). Wie verändert sich der Blut-pH?",
          options: [
            "pH sinkt (Azidose), weil mehr CO₂ produziert wird.",
            "pH steigt (Alkalose), weil CO₂ abgeatmet wird und [H⁺] sinkt.",
            "pH bleibt konstant, weil der Puffer alle Änderungen auffängt.",
            "pH sinkt, weil HCO₃⁻ durch die Lunge ausgeschieden wird.",
            "pH steigt, weil die Niere mehr H⁺ ausscheidet."
          ],
          correctIndex: 1,
          explanation: "Hyperventilation → mehr CO₂ abgeatmet → pCO₂ sinkt → [H₂CO₃] sinkt → Gleichgewicht verschiebt sich links → [H⁺] sinkt → pH steigt → respiratorische Alkalose. Henderson-Hasselbalch: ↓[CO₂] im Nenner → größeres [HCO₃⁻]/[CO₂] → höherer pH. Klinisch: Schwindel, Kribbeln, Taubheitsgefühl. Therapie: Rückatmung in Tüte erhöht [CO₂] wieder.",
          hints: ["Hyperventilation → weniger CO₂ im Blut → weniger H⁺", "Weniger H⁺ = höherer pH = Alkalose"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Was ist der Bohr-Effekt und welches biochemische Prinzip liegt ihm zugrunde?",
          options: [
            "Hämoglobin bindet bei hohem pH mehr O₂ und gibt bei niedrigem pH mehr O₂ ab — erklärt durch Le Chatelier.",
            "Hämoglobin wird bei hoher Temperatur denaturiert und gibt O₂ ab.",
            "CO₂ verdrängt O₂ aus dem Hämoglobin durch kompetitive Hemmung.",
            "Bei niedrigem pO₂ steigt der pH des Blutes.",
            "Hämoglobin puffert H⁺ nur in der Lunge, nicht im Gewebe."
          ],
          correctIndex: 0,
          explanation: "Der Bohr-Effekt beschreibt: HbO₂ + H⁺ ⇌ HHb⁺ + O₂. Bei niedrigem pH (saures Gewebe durch Muskelarbeit) steigt [H⁺] → Le Chatelier → Gleichgewicht verschiebt sich rechts → mehr O₂ wird freigesetzt. Bei hohem pH (Lunge) verschiebt sich das Gleichgewicht links → mehr O₂ wird gebunden. Der Bohr-Effekt optimiert die O₂-Abgabe an aktive Gewebe automatisch.",
          hints: ["Bohr-Effekt: saures Milieu → mehr O₂-Abgabe vom Hb", "HbO₂ + H⁺ ⇌ HHb⁺ + O₂: Le Chatelier bei ↑[H⁺]"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Störung liegt vor bei: pH 7,50, pCO₂ 30 mmHg (↓), HCO₃⁻ 22 mmol/L (leicht ↓)?",
          options: [
            "Metabolische Azidose mit respiratorischer Kompensation.",
            "Respiratorische Alkalose mit beginnendem metabolischem Ausgleich.",
            "Metabolische Alkalose mit respiratorischer Kompensation.",
            "Respiratorische Azidose ohne Kompensation.",
            "Normalbefund."
          ],
          correctIndex: 1,
          explanation: "Analyse: pH 7,50 > 7,45 → Alkalose. pCO₂ 30 mmHg < 40 mmHg → respiratorische Ursache (Hyperventilation). HCO₃⁻ 22 mmol/L leicht erniedrigt → metabolische Kompensation (Niere scheidet HCO₃⁻ aus). Diagnose: Respiratorische Alkalose mit beginnendem renalem Ausgleich. Rechnung: [CO₂(aq)] = 30×0,03 = 0,9 mmol/L; pH = 6,1 + log(22/0,9) = 6,1 + 1,39 ≈ 7,49 ≈ 7,50. Ursachen: Hyperventilation, Höhenaufenthalt, Angst.",
          hints: ["pH ↑ + pCO₂ ↓ = respiratorische Alkalose", "Kompensation: Niere scheidet HCO₃⁻ aus → HCO₃⁻ leicht erniedrigt"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Warum wird Acetazolamid (Carboanhydrase-Hemmer) als Diuretikum verwendet?",
          options: [
            "Es erhöht die Natriumrückresorption im proximalen Tubulus.",
            "Es hemmt die CO₂-Hydratisierung in Nierentubuli, was HCO₃⁻-Ausscheidung erhöht und eine milde Diurese bewirkt.",
            "Es blockiert Aldosteronrezeptoren und verringert K⁺-Verlust.",
            "Es senkt die glomeruläre Filtrationsrate (GFR).",
            "Es erhöht die H⁺-Sekretion im Sammelrohr."
          ],
          correctIndex: 1,
          explanation: "Carboanhydrase katalysiert CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ im proximalen Tubulus. Ohne CA kann H⁺ nicht effizient sezerniert werden, und HCO₃⁻ wird nicht rückresorbiert. Acetazolamid hemmt CA → weniger H⁺-Sekretion → weniger Na⁺/H⁺-Austausch → mehr Na⁺ im Tubulus → osmotische Diurese. Nebeneffekt: metabolische Azidose (HCO₃⁻-Verlust). Anwendung: Glaukom, Höhenkrankheit.",
          hints: ["CA hemmen → weniger H₂CO₃ → weniger H⁺ → weniger Na-H-Austausch → Diurese", "Acetazolamid erzeugt metabolische Azidose als Nebeneffekt"],
          difficulty: 3,
          tags: []
        },
        {
          question: "Essigsäure hat pK_a = 4,76. Eine Lösung enthält [CH₃COO⁻] = 0,1 mol/L und [CH₃COOH] = 0,01 mol/L. Welchen pH hat sie?",
          options: [
            "pH = 4,76 + log(0,01/0,1) = 4,76 − 1 = 3,76",
            "pH = 4,76 + log(0,1/0,01) = 4,76 + 1 = 5,76",
            "pH = 4,76 + log(0,1 + 0,01) = 4,80",
            "pH = 4,76 / log(0,1/0,01) = 4,76",
            "pH = 4,76 − log(0,1/0,01) = 3,76"
          ],
          correctIndex: 1,
          explanation: "Henderson-Hasselbalch: pH = pK_a + log([A⁻]/[HA]) = 4,76 + log(0,1/0,01) = 4,76 + log(10) = 4,76 + 1 = 5,76. Das Verhältnis Base/Säure = 10:1 → pH liegt 1 Einheit über pK_a. Wenn [A⁻] = 10×[HA], dann pH = pK_a + 1. Dies illustriert den effektiven Pufferbereich pK_a ± 1.",
          hints: ["log([A⁻]/[HA]) = log(0,1/0,01) = log(10) = 1", "pH = pK_a + 1 wenn Base 10-fach größer als Säure"],
          difficulty: 2,
          tags: []
        },
        {
          question: "Welche Aussage zur Carboanhydrase ist korrekt?",
          options: [
            "Sie katalysiert die irreversible Umwandlung von CO₂ zu HCO₃⁻.",
            "Sie enthält Fe²⁺ im aktiven Zentrum.",
            "Sie beschleunigt CO₂ + H₂O ⇌ H₂CO₃ um ca. 10⁶-fach und enthält Zn²⁺.",
            "Sie wird durch Acetazolamid aktiviert.",
            "Sie ist nur in Erythrozyten vorhanden."
          ],
          correctIndex: 2,
          explanation: "Carboanhydrase (CA) ist ein Zink-Metalloenzym (Zn²⁺ im aktiven Zentrum), das CO₂ + H₂O ⇌ H₂CO₃ um ca. 10⁶-fach beschleunigt (k_cat ≈ 10⁶/s). Die Reaktion ist reversibel. CA kommt in Erythrozyten, Nierentubuli, Augenkammerwasser und Magenmukosa vor. Acetazolamid hemmt CA (nicht aktiviert). Fe²⁺ ist das Metallzentrum von Hämoglobin, nicht der CA.",
          hints: ["CA: Zn²⁺ im aktiven Zentrum (nicht Fe)", "Acetazolamid = CA-Inhibitor (nicht Aktivator)"],
          difficulty: 2,
          tags: []
        }
      ]
    }
  ]
};
