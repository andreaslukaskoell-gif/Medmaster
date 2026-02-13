import type { Kapitel } from '../types';

export const chemKap7: Kapitel = {
  id: 'chem-kap7',
  title: 'Chemische Reaktionen',
  subject: 'chemie',
  icon: '💥',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap7-1',
      title: 'Reaktionstypen',
      content: `Chemische Reaktionen lassen sich in grundlegende Typen einteilen.

**Synthese** (Aufbaureaktion): Zwei oder mehr Stoffe verbinden sich zu einem komplexeren Produkt. Beispiel: 2 H₂ + O₂ → 2 H₂O. Im **Haber-Bosch-Verfahren** entsteht Ammoniak: N₂ + 3 H₂ → 2 NH₃.

**Analyse** (Zersetzung): Ein komplexer Stoff zerfällt in einfachere Bestandteile. Beispiel: Thermische Zersetzung von Calciumcarbonat: CaCO₃ → CaO + CO₂.

**Umsetzung** (Doppeltausch): Die Bestandteile zweier Verbindungen tauschen untereinander aus. Beispiel: Fällung von Bariumsulfat: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2 NaCl. BaSO₄ ist schwerlöslich und fällt als Niederschlag aus. Diese Reaktion wird zum Nachweis von Sulfat-Ionen verwendet.

**Verbrennung**: Oxidationsreaktion mit Sauerstoff unter Freisetzung von Energie (Wärme und Licht). Bei **vollständiger Verbrennung** entstehen CO₂ und H₂O. Bei **unvollständiger Verbrennung** entstehen auch CO oder Ruß (elementarer Kohlenstoff). Vollständige Verbrennung von Methan: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Im Körper läuft die Zellatmung analog ab: Glucose wird schrittweise oxidiert, die Energie wird als ATP gespeichert.`,
      merksätze: [
        'Synthese = Aufbau (A + B → AB), Analyse = Zerlegung (AB → A + B), Umsetzung = Partnertausch (AB + CD → AD + CB).',
        'Verbrennungen sind exotherme Oxidationsreaktionen mit Sauerstoff — vollständig entstehen CO₂ + H₂O, unvollständig auch CO oder Ruß.'
      ],
      altfrage: {
        question: 'Welche Reaktionsart liegt vor, wenn Calciumcarbonat beim Erhitzen in Calciumoxid und Kohlenstoffdioxid zerfällt?',
        answer: 'Es handelt sich um eine Analyse (Zersetzungsreaktion), da ein komplexer Stoff in einfachere Bestandteile zerlegt wird: CaCO₃ → CaO + CO₂.'
      },
      klinischerBezug: 'Bei einer **Kohlenmonoxid-Vergiftung** (CO) bindet CO mit etwa 200-fach höherer Affinität als O₂ an Hämoglobin. Es entsteht **Carboxyhämoglobin** (COHb), das keinen Sauerstoff transportieren kann. Der Sauerstofftransport wird blockiert. CO entsteht bei unvollständiger Verbrennung. Gefahrenquellen: defekte Gasthermen, Brände in geschlossenen Räumen, Autoabgase in Garagen. Symptome: Kopfschmerz, Schwindel, Übelkeit, Bewusstlosigkeit. Therapie: Hochdosis-Sauerstoff (100 % O₂), evtl. hyperbare Sauerstofftherapie. Prävention: CO-Melder.',
      selfTest: [
        {
          question: 'Welche Reaktionsgleichung beschreibt eine Synthese?',
          options: [
            '2 H₂ + O₂ → 2 H₂O',
            'CaCO₃ → CaO + CO₂',
            'BaCl₂ + Na₂SO₄ → BaSO₄ + 2 NaCl',
            'CH₄ + 2 O₂ → CO₂ + 2 H₂O',
            'NaCl → Na⁺ + Cl⁻'
          ],
          correctIndex: 0,
          explanation: 'Bei der Synthese verbinden sich einfache Stoffe (H₂ und O₂) zu einem komplexeren Produkt (H₂O). Die zweite Gleichung ist eine Analyse, die dritte eine Umsetzung, die vierte eine Verbrennung.'
        },
        {
          question: 'Was entsteht bei der vollständigen Verbrennung von Kohlenwasserstoffen?',
          options: [
            'CO und H₂',
            'CO₂ und H₂O',
            'C und H₂O',
            'CO und H₂O',
            'CO₂ und H₂'
          ],
          correctIndex: 1,
          explanation: 'Bei vollständiger Verbrennung werden Kohlenwasserstoffe komplett zu CO₂ und H₂O oxidiert. Nur bei unvollständiger Verbrennung (Sauerstoffmangel) entstehen CO oder Ruß.'
        },
        {
          question: 'Welche Aussage zur Umsetzungsreaktion ist korrekt?',
          options: [
            'Es verbinden sich zwei Elemente zu einer Verbindung.',
            'Ein Stoff wird in seine Bestandteile zerlegt.',
            'Zwei Verbindungen tauschen ihre Bestandteile aus.',
            'Ein Stoff reagiert mit Sauerstoff.',
            'Ein Stoff wird durch Wasser zersetzt.'
          ],
          correctIndex: 2,
          explanation: 'Bei einer Umsetzungsreaktion (Doppeltauschreaktion) tauschen zwei Verbindungen ihre Bestandteile aus: AB + CD → AD + CB. Die anderen Optionen beschreiben Synthese, Analyse bzw. Verbrennung.'
        }
      ]
    },
    {
      id: 'chem-kap7-2',
      title: 'Energetik',
      content: `Jede chemische Reaktion ist mit einer Energieänderung verbunden.

**Exotherme Reaktionen** geben Energie an die Umgebung ab. ΔH < 0 (negativ). Die Enthalpie der Produkte ist geringer als die der Edukte. Beispiele: Verbrennungen, Neutralisationen.

**Endotherme Reaktionen** nehmen Energie aus der Umgebung auf. ΔH > 0 (positiv). Beispiele: thermische Zersetzung von Kalkstein, Fotosynthese.

Die **Reaktionsenthalpie** ΔH gibt die bei konstantem Druck umgesetzte Wärmemenge an (Einheit: kJ/mol). Nach dem **Satz von Hess** ist die Gesamtenthalpieänderung wegunabhängig. Sie hängt nur vom Anfangs- und Endzustand ab.

Die **Aktivierungsenergie** (Eₐ) ist die Mindestenergie, die zum Start einer Reaktion nötig ist. Selbst exotherme Reaktionen benötigen eine anfängliche Energiezufuhr, um den **Übergangszustand** zu erreichen. Beispiel: Ein Streichholz muss gerieben werden (Reibungsenergie als Aktivierungsenergie), bevor die exotherme Verbrennung selbständig weiterläuft. Im Energiediagramm bildet Eₐ den „Hügel" zwischen Edukten und Produkten. Je höher Eₐ, desto langsamer die Reaktion bei gegebener Temperatur.

**Katalysatoren** beschleunigen Reaktionen, indem sie die Aktivierungsenergie senken. Sie werden selbst nicht verbraucht. Sie bieten einen alternativen Reaktionsweg mit niedrigerer Energiebarriere. **Homogene Katalysatoren**: gleiche Phase wie die Reaktanden (z. B. Säurekatalyse in Lösung). **Heterogene Katalysatoren**: andere Phase (z. B. Platinoberfläche im Autoabgaskatalysator). In der Biochemie sind **Enzyme** Katalysatoren. Sie beschleunigen Reaktionen um den Faktor 10⁶ bis 10¹². Wichtig: Ein Katalysator verändert nicht die Gleichgewichtslage. Er beschleunigt nur die Einstellung des Gleichgewichts (Hin- und Rückreaktion gleichermaßen).`,
      merksätze: [
        'Exotherm: ΔH < 0 (Energie wird frei) — Endotherm: ΔH > 0 (Energie wird aufgenommen). Satz von Hess: ΔH ist wegunabhängig!',
        'Katalysatoren senken die Aktivierungsenergie, verschieben aber NICHT das Gleichgewicht — sie beschleunigen nur die Gleichgewichtseinstellung.'
      ],
      altfrage: {
        question: 'Wie wirkt ein Katalysator auf die Aktivierungsenergie und die Gleichgewichtslage einer Reaktion?',
        answer: 'Ein Katalysator senkt die Aktivierungsenergie und beschleunigt so die Reaktion, verändert aber nicht die thermodynamische Gleichgewichtslage (ΔG bleibt gleich). Er beschleunigt Hin- und Rückreaktion gleichermaßen.'
      },
      klinischerBezug: 'Der Körper nutzt **Enzyme** als biologische Katalysatoren. Ohne Enzyme würden lebenswichtige Reaktionen extrem langsam ablaufen. Die **Glucoseoxidation** (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O) würde ohne Enzyme Tage dauern. Enzymdefekte führen zu Stoffwechselerkrankungen. Beispiel: **Phenylketonurie** (PKU) – Mangel an **Phenylalanin-Hydroxylase**. Phenylalanin kann nicht zu Tyrosin abgebaut werden. Es reichert sich toxisch im Blut an und schädigt das sich entwickelnde Gehirn. Unbehandelt droht geistige Behinderung. Neugeborenen-Screening erkennt PKU. Therapie: phenylalaninarme Diät (lebenslang). Ein weiteres Beispiel: **Laktoseintoleranz** – Mangel an Laktase, dem Enzym zum Abbau von Laktose.',
      selfTest: [
        {
          question: 'Welche Aussage zu exothermen Reaktionen ist richtig?',
          options: [
            'ΔH > 0, es wird Energie aufgenommen.',
            'ΔH < 0, es wird Energie an die Umgebung abgegeben.',
            'Die Produkte haben mehr Enthalpie als die Edukte.',
            'Exotherme Reaktionen benötigen keine Aktivierungsenergie.',
            'Die Entropie nimmt bei exothermen Reaktionen immer ab.'
          ],
          correctIndex: 1,
          explanation: 'Bei exothermen Reaktionen ist ΔH negativ, da die Produkte energieärmer sind als die Edukte. Die Differenz wird als Wärme freigesetzt. Auch exotherme Reaktionen benötigen eine Aktivierungsenergie.'
        },
        {
          question: 'Was besagt der Satz von Hess?',
          options: [
            'Die Reaktionsgeschwindigkeit ist proportional zur Temperatur.',
            'Die Gesamtenthalpieänderung ist unabhängig vom Reaktionsweg.',
            'Katalysatoren erhöhen die Gleichgewichtskonstante.',
            'Endotherme Reaktionen laufen nicht freiwillig ab.',
            'Die Reaktionsenthalpie hängt vom verwendeten Katalysator ab.'
          ],
          correctIndex: 1,
          explanation: 'Der Satz von Hess (Hessscher Wärmesatz) besagt, dass die Enthalpieänderung einer Reaktion nur vom Anfangs- und Endzustand abhängt, nicht vom Weg dorthin. So kann man ΔH aus Teilreaktionen berechnen.'
        },
        {
          question: 'Welche Aussage über Katalysatoren ist FALSCH?',
          options: [
            'Sie senken die Aktivierungsenergie.',
            'Sie werden bei der Reaktion nicht verbraucht.',
            'Sie verschieben das chemische Gleichgewicht zugunsten der Produkte.',
            'Enzyme sind biologische Katalysatoren.',
            'Sie erhöhen die Aktivierungsenergie der Rückreaktion.'
          ],
          correctIndex: 2,
          explanation: 'Katalysatoren verschieben das Gleichgewicht NICHT. Sie beschleunigen nur die Einstellung des Gleichgewichts, indem sie Hin- und Rückreaktion gleichermaßen beschleunigen. Die Gleichgewichtskonstante K bleibt unverändert.'
        }
      ]
    },
    {
      id: 'chem-kap7-3',
      title: 'Reaktionskinetik',
      content: `Die **Reaktionskinetik** befasst sich mit der Geschwindigkeit chemischer Reaktionen. Die **Reaktionsgeschwindigkeit** v beschreibt die Konzentrationsänderung pro Zeiteinheit: v = -Δ[Edukt]/Δt = +Δ[Produkt]/Δt (Einheit: mol/(L·s)). Achtung: Reaktionsgeschwindigkeit ist nicht gleich thermodynamische Triebkraft (ΔG). Eine Reaktion kann thermodynamisch begünstigt, aber kinetisch gehemmt sein (z. B. Verbrennung von Diamant zu CO₂ bei Raumtemperatur).

**Einflussfaktoren** auf die Reaktionsgeschwindigkeit:

1. **Temperatur**: Temperaturerhöhung steigert die kinetische Energie der Teilchen. Mehr Moleküle überschreiten die Aktivierungsenergie. Die **RGT-Regel** (Reaktionsgeschwindigkeit-Temperatur-Regel, auch van-'t-Hoff-Regel): +10 °C ≈ doppelte bis dreifache Reaktionsgeschwindigkeit (Faktor 2–3).

2. **Konzentration**: Höhere Konzentration bedeutet mehr Teilchen pro Volumen. Häufigere Zusammenstöße. Schnellere Reaktion.

3. **Zerteilungsgrad**: Fein verteilte Feststoffe haben eine größere Oberfläche. Sie reagieren schneller (z. B. Eisenpulver vs. Eisenblock).

4. **Katalysatoren**: Sie bieten einen alternativen Reaktionsweg mit niedrigerer Aktivierungsenergie.

Das **Geschwindigkeitsgesetz** wird experimentell ermittelt: v = k · [A]ᵐ · [B]ⁿ. k ist die Geschwindigkeitskonstante, m und n sind die Reaktionsordnungen. Die Gesamtreaktionsordnung ist m + n. Bei **Reaktionen 1. Ordnung** (v = k · [A]) ist die Geschwindigkeit proportional zu [A]. Beispiel: radioaktiver Zerfall. Bei **Reaktionen 2. Ordnung** (v = k · [A]²) verdoppelt sich v bei Verdopplung von [A] auf das Vierfache. Die Geschwindigkeitskonstante k ist temperaturabhängig und folgt der **Arrhenius-Gleichung**: k = A · e^(-Eₐ/RT). A ist der präexponentielle Faktor, Eₐ die Aktivierungsenergie, R die Gaskonstante, T die absolute Temperatur.`,
      merksätze: [
        'RGT-Regel: +10 °C ≈ doppelte bis dreifache Reaktionsgeschwindigkeit. Faktoren: Temperatur, Konzentration, Zerteilungsgrad, Katalysator.',
        'Geschwindigkeitsgesetz v = k · [A]ᵐ · [B]ⁿ — die Exponenten m und n werden experimentell bestimmt, NICHT aus der Reaktionsgleichung abgelesen!'
      ],
      altfrage: {
        question: 'Um welchen Faktor ändert sich die Reaktionsgeschwindigkeit ungefähr, wenn die Temperatur um 30 °C erhöht wird (RGT-Regel, Faktor 2)?',
        answer: 'Nach der RGT-Regel (Faktor 2 pro 10 °C): 2³ = 8-fache Reaktionsgeschwindigkeit bei einer Temperaturerhöhung um 30 °C.'
      },
      klinischerBezug: 'Die RGT-Regel erklärt, warum **Fieber** den Stoffwechsel beschleunigt. Bei 40 °C (statt 37 °C) laufen biochemische Reaktionen etwa 1,3-fach schneller ab. Der Energieverbrauch steigt. Umgekehrt wird **therapeutische Hypothermie** (Kühlung auf ~33 °C) nach einem **Herzstillstand** eingesetzt. Die verlangsamten biochemischen Reaktionen reduzieren den Sauerstoffbedarf des Gehirns. Hirnschäden werden begrenzt. Die Hypothermie wird für 12–24 h aufrechterhalten, dann erfolgt eine langsame Wiedererwärmung. Auch bei Organtransplantationen werden Organe gekühlt gelagert, um den Stoffwechsel zu verlangsamen und Zellschäden zu minimieren.',
      selfTest: [
        {
          question: 'Welcher Faktor beeinflusst die Reaktionsgeschwindigkeit NICHT direkt?',
          options: [
            'Temperatur',
            'Konzentration der Edukte',
            'Gleichgewichtskonstante K',
            'Anwesenheit eines Katalysators',
            'Zerteilungsgrad der Edukte'
          ],
          correctIndex: 2,
          explanation: 'Die Gleichgewichtskonstante K beschreibt die Lage des Gleichgewichts, nicht die Geschwindigkeit. Temperatur, Konzentration und Katalysatoren beeinflussen direkt die Reaktionsgeschwindigkeit.'
        },
        {
          question: 'Wie ändert sich die Geschwindigkeit einer Reaktion 2. Ordnung (v = k·[A]²), wenn [A] verdreifacht wird?',
          options: [
            'v wird 3-mal so groß',
            'v wird 6-mal so groß',
            'v wird 9-mal so groß',
            'v bleibt gleich',
            'v wird 27-mal so groß'
          ],
          correctIndex: 2,
          explanation: 'Bei v = k·[A]² führt eine Verdreifachung von [A] zu v = k·(3[A])² = 9·k·[A]². Die Geschwindigkeit wird also 9-mal so groß.'
        },
        {
          question: 'Was beschreibt die Arrhenius-Gleichung?',
          options: [
            'Den Zusammenhang zwischen Gleichgewichtskonstante und Temperatur',
            'Die Abhängigkeit der Geschwindigkeitskonstante k von der Temperatur',
            'Die Beziehung zwischen Enthalpie und Entropie',
            'Die Konzentrationsabhängigkeit der Reaktionsgeschwindigkeit',
            'Die Druckabhängigkeit des chemischen Gleichgewichts'
          ],
          correctIndex: 1,
          explanation: 'Die Arrhenius-Gleichung k = A · e^(-Eₐ/RT) beschreibt, wie die Geschwindigkeitskonstante k mit der Temperatur T zusammenhängt. Sie zeigt, dass höhere Temperaturen zu größerem k und damit schnelleren Reaktionen führen.'
        }
      ]
    },
    {
      id: 'chem-kap7-4',
      title: 'Chemisches Gleichgewicht',
      content: `Viele chemische Reaktionen sind **reversibel**. Sie laufen in Hin- und Rückrichtung ab. Das **chemische Gleichgewicht** ist ein dynamischer Zustand: v_hin = v_rück. Makroskopisch scheint keine Veränderung stattzufinden, mikroskopisch reagieren die Stoffe ständig weiter.

Für aA + bB ⇌ cC + dD gilt die **Gleichgewichtskonstante**: K = ([C]ᶜ · [D]ᵈ) / ([A]ᵃ · [B]ᵇ). K >> 1: Gleichgewicht liegt auf der Produktseite. K << 1: Edukte überwiegen.

Das **Prinzip von Le Chatelier** (Prinzip des kleinsten Zwangs): Das Gleichgewicht verschiebt sich so, dass die Störung teilweise kompensiert wird.

1. **Konzentration**: Zugabe eines Edukts verschiebt das Gleichgewicht nach rechts (zu den Produkten). Entfernung eines Produkts ebenfalls.

2. **Druck** (bei Gasreaktionen): Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasteilchen. Beispiel: N₂ + 3 H₂ ⇌ 2 NH₃ (links 4 mol Gas, rechts 2 mol Gas). Druckerhöhung begünstigt NH₃-Bildung.

3. **Temperatur**: Temperaturerhöhung begünstigt die endotherme Richtung. Temperaturerniedrigung begünstigt die exotherme Richtung.

Wichtig: Nur Temperaturänderung verändert den K-Wert. Konzentration und Druck verschieben nur die Gleichgewichtslage bei konstantem K.

Die Gleichgewichtskonstante hängt mit der freien Enthalpie zusammen: ΔG° = -R·T·ln(K). ΔG° negativ → K > 1 (Produkte bevorzugt). ΔG° positiv → K < 1 (Edukte überwiegen).

Beispiel **Haber-Bosch-Verfahren** (Ammoniaksynthese): Hoher Druck (verschiebt Gleichgewicht zur Produktseite) und moderate Temperatur (Kompromiss zwischen Gleichgewichtslage und Reaktionsgeschwindigkeit) bei Verwendung eines Eisenkatalysators sind optimal. Der Katalysator beschleunigt die Gleichgewichtseinstellung, verändert K aber nicht.`,
      merksätze: [
        'Le Chatelier: Das Gleichgewicht weicht einer Störung aus — Konzentrationszugabe → Verbrauch, Druckerhöhung → weniger Teilchen, Temperaturerhöhung → endotherme Richtung.',
        'K = [Produkte]/[Edukte] mit Exponenten. Nur Temperaturänderung verändert K — Konzentration, Druck und Katalysator ändern K nicht!'
      ],
      altfrage: {
        question: 'Wie verschiebt sich das Gleichgewicht der Reaktion N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm) bei Druckerhöhung und Temperaturerniedrigung?',
        answer: 'Beides verschiebt das Gleichgewicht nach rechts (zur Produktseite): Druckerhöhung begünstigt die Seite mit weniger Gasteilchen (2 statt 4 mol), Temperaturerniedrigung begünstigt die exotherme Richtung (Hinreaktion).'
      },
      klinischerBezug: 'Das **Kohlensäure-Bicarbonat-Gleichgewicht** im Blut folgt dem Prinzip von Le Chatelier: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Bei verstärkter CO₂-Produktion (z. B. bei Belastung) verschiebt sich das Gleichgewicht nach rechts, der pH sinkt. Die Lunge kompensiert durch vermehrte CO₂-Abatmung und verschiebt das Gleichgewicht zurück nach links. Bei **Hyperventilation** (übermäßige Atmung) wird zu viel CO₂ abgeatmet, das Gleichgewicht verschiebt sich nach links, der pH steigt (**respiratorische Alkalose**). Symptome: Kribbeln, Schwindel, Tetanie. Bei **Hypoventilation** (unzureichende Atmung) steigt der CO₂-Partialdruck, das Gleichgewicht verschiebt sich nach rechts, der pH sinkt (**respiratorische Azidose**). Beispiel: chronisch obstruktive Lungenerkrankung (COPD).',
      selfTest: [
        {
          question: 'Was beschreibt die Gleichgewichtskonstante K?',
          options: [
            'Die Geschwindigkeit der Hinreaktion',
            'Das Verhältnis der Produkt- zu Eduktkonzentrationen im Gleichgewicht',
            'Die Aktivierungsenergie der Reaktion',
            'Die Enthalpieänderung der Reaktion',
            'Die Stoffmenge der Produkte in Mol'
          ],
          correctIndex: 1,
          explanation: 'K gibt das Verhältnis der Konzentrationen von Produkten zu Edukten im Gleichgewichtszustand an, jeweils potenziert mit den stöchiometrischen Koeffizienten.'
        },
        {
          question: 'Welche Störung verändert den Zahlenwert der Gleichgewichtskonstante K?',
          options: [
            'Zugabe eines Edukts',
            'Druckerhöhung',
            'Temperaturänderung',
            'Zugabe eines Katalysators',
            'Volumenänderung des Reaktionsgefäßes'
          ],
          correctIndex: 2,
          explanation: 'Nur eine Temperaturänderung verändert den Zahlenwert von K (gemäß ΔG° = -RT·ln K). Konzentrations- und Druckänderungen verschieben die Gleichgewichtslage, aber K bleibt gleich. Katalysatoren ändern K ebenfalls nicht.'
        },
        {
          question: 'Für die Reaktion A(g) ⇌ 2 B(g): Wie wirkt sich eine Druckerhöhung aus?',
          options: [
            'Das Gleichgewicht verschiebt sich nach rechts (zu B).',
            'Das Gleichgewicht verschiebt sich nach links (zu A).',
            'Es hat keinen Einfluss, da gleich viele Mol vorliegen.',
            'Die Reaktion stoppt vollständig.',
            'Der Wert der Gleichgewichtskonstante K verdoppelt sich.'
          ],
          correctIndex: 1,
          explanation: 'Links: 1 mol Gas (A), rechts: 2 mol Gas (2 B). Druckerhöhung begünstigt die Seite mit weniger Gasteilchen → Gleichgewicht verschiebt sich nach links zu A.'
        }
      ]
    }
  ]
};
