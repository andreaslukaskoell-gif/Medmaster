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
      content: `Chemische Reaktionen lassen sich in mehrere grundlegende Typen einteilen, die jeweils charakteristische Merkmale aufweisen. Bei der **Synthese** (Aufbaureaktion) verbinden sich zwei oder mehr Ausgangsstoffe zu einem neuen, komplexeren Produkt. Ein klassisches Beispiel ist die Bildung von Wasser aus Wasserstoff und Sauerstoff: 2 H₂ + O₂ → 2 H₂O. Synthesereaktionen spielen in der Natur und in der Industrie eine zentrale Rolle, etwa bei der Herstellung von Ammoniak im Haber-Bosch-Verfahren (N₂ + 3 H₂ → 2 NH₃). Die Umkehrung der Synthese ist die **Analyse** (Zersetzungsreaktion), bei der ein komplexer Stoff in einfachere Bestandteile zerlegt wird. Ein Beispiel ist die thermische Zersetzung von Calciumcarbonat: CaCO₃ → CaO + CO₂.

Die **Umsetzungsreaktion** (auch Austausch- oder Doppeltauschreaktion genannt) beschreibt Reaktionen, bei denen die Bestandteile zweier Verbindungen untereinander ausgetauscht werden. Ein typisches Beispiel ist die Fällung von Bariumsulfat: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2 NaCl. Diese Reaktion ist auch in der analytischen Chemie von großer Bedeutung, da Bariumsulfat als schwerlöslicher Niederschlag ausfällt und zum Nachweis von Sulfat-Ionen verwendet wird. Umsetzungsreaktionen laufen oft in wässriger Lösung ab und werden durch die Löslichkeitsregeln der beteiligten Salze gesteuert.

**Verbrennungen** sind eine besondere Form der Oxidationsreaktion, bei der ein Stoff mit Sauerstoff unter Freisetzung von Energie (Wärme und Licht) reagiert. Man unterscheidet die vollständige Verbrennung, bei der organische Stoffe zu CO₂ und H₂O oxidiert werden, von der unvollständigen Verbrennung, bei der auch CO oder Ruß (elementarer Kohlenstoff) entstehen können. Die vollständige Verbrennung von Methan lautet: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Im menschlichen Körper laufen analoge Oxidationsprozesse kontrolliert in der Zellatmung ab, wobei Glucose schrittweise oxidiert und die freiwerdende Energie in Form von ATP gespeichert wird.`,
      merksätze: [
        'Synthese = Aufbau (A + B → AB), Analyse = Zerlegung (AB → A + B), Umsetzung = Partnertausch (AB + CD → AD + CB).',
        'Verbrennungen sind exotherme Oxidationsreaktionen mit Sauerstoff — vollständig entstehen CO₂ + H₂O, unvollständig auch CO oder Ruß.'
      ],
      altfrage: {
        question: 'Welche Reaktionsart liegt vor, wenn Calciumcarbonat beim Erhitzen in Calciumoxid und Kohlenstoffdioxid zerfällt?',
        answer: 'Es handelt sich um eine Analyse (Zersetzungsreaktion), da ein komplexer Stoff in einfachere Bestandteile zerlegt wird: CaCO₃ → CaO + CO₂.'
      },
      klinischerBezug: 'Bei einer Kohlenmonoxid-Vergiftung (CO) bindet CO mit ca. 200-fach höherer Affinität als O₂ an Hämoglobin und blockiert so den Sauerstofftransport. CO entsteht bei unvollständiger Verbrennung — daher die Gefahr bei defekten Gasthermen oder Bränden in geschlossenen Räumen.',
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
      content: `Jede chemische Reaktion ist mit einer Energieänderung verbunden. Bei **exothermen Reaktionen** wird Energie an die Umgebung abgegeben — die Enthalpie der Produkte ist geringer als die der Edukte, sodass ΔH < 0 gilt. Typische Beispiele sind Verbrennungen und Neutralisationsreaktionen. Bei **endothermen Reaktionen** wird hingegen Energie aus der Umgebung aufgenommen (ΔH > 0), wie etwa bei der thermischen Zersetzung von Kalkstein oder der Fotosynthese. Die Reaktionsenthalpie ΔH gibt die bei konstantem Druck umgesetzte Wärmemenge an und wird in kJ/mol angegeben. Nach dem Satz von Hess ist die Gesamtenthalpieänderung einer Reaktion unabhängig vom Reaktionsweg — sie hängt nur vom Anfangs- und Endzustand ab.

Die **Aktivierungsenergie** (Eₐ) ist die Mindestenergie, die aufgebracht werden muss, damit eine Reaktion abläuft. Selbst exotherme Reaktionen benötigen eine anfängliche Energiezufuhr, um den sogenannten Übergangszustand zu erreichen. Ein Streichholz muss beispielsweise erst gerieben werden (Reibungsenergie als Aktivierungsenergie), bevor die exotherme Verbrennung selbständig weiterläuft. In einem Energiediagramm bildet die Aktivierungsenergie den „Hügel“ zwischen Edukten und Produkten. Je höher Eₐ, desto langsamer verläuft die Reaktion bei gegebener Temperatur, da weniger Moleküle die notwendige kinetische Energie besitzen.

**Katalysatoren** beschleunigen chemische Reaktionen, indem sie die Aktivierungsenergie herabsetzen, ohne selbst verbraucht zu werden. Sie bieten einen alternativen Reaktionsweg mit niedrigerer Energiebarriere. Man unterscheidet homogene Katalysatoren (gleiche Phase wie die Reaktanden, z. B. Säurekatalyse in Lösung) und heterogene Katalysatoren (andere Phase, z. B. Platinoberfläche im Autoabgaskatalysator). In der Biochemie übernehmen Enzyme die Rolle von Katalysatoren — sie können Reaktionen um den Faktor 10⁶ bis 10¹² beschleunigen. Wichtig: Ein Katalysator verändert nicht die Gleichgewichtslage einer Reaktion, sondern beschleunigt lediglich die Einstellung des Gleichgewichts, indem er sowohl Hin- als auch Rückreaktion gleichermaßen beschleunigt.`,
      merksätze: [
        'Exotherm: ΔH < 0 (Energie wird frei) — Endotherm: ΔH > 0 (Energie wird aufgenommen). Satz von Hess: ΔH ist wegunabhängig!',
        'Katalysatoren senken die Aktivierungsenergie, verschieben aber NICHT das Gleichgewicht — sie beschleunigen nur die Gleichgewichtseinstellung.'
      ],
      altfrage: {
        question: 'Wie wirkt ein Katalysator auf die Aktivierungsenergie und die Gleichgewichtslage einer Reaktion?',
        answer: 'Ein Katalysator senkt die Aktivierungsenergie und beschleunigt so die Reaktion, verändert aber nicht die thermodynamische Gleichgewichtslage (ΔG bleibt gleich). Er beschleunigt Hin- und Rückreaktion gleichermaßen.'
      },
      klinischerBezug: 'Der menschliche Körper nutzt Enzyme als biologische Katalysatoren. Ohne Enzyme würden lebenswichtige Reaktionen wie die Glucoseoxidation extrem langsam ablaufen. Enzymdefekte können zu Stoffwechselerkrankungen führen — z. B. führt ein Mangel an Phenylalanin-Hydroxylase zur Phenylketonurie (PKU), bei der sich Phenylalanin toxisch im Körper anreichert.',
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
      content: `Die **Reaktionskinetik** befasst sich mit der Geschwindigkeit chemischer Reaktionen. Die Reaktionsgeschwindigkeit v beschreibt die Konzentrationsänderung eines Stoffes pro Zeiteinheit: v = -Δ[Edukt]/Δt = +Δ[Produkt]/Δt. Sie wird in mol/(L·s) angegeben. Die Geschwindigkeit einer Reaktion hängt von mehreren Faktoren ab und ist nicht mit der thermodynamischen Triebkraft (ΔG) zu verwechseln — eine Reaktion kann thermodynamisch begünstigt, aber kinetisch gehemmt sein (z. B. die Verbrennung von Diamant zu CO₂ bei Raumtemperatur).

Mehrere **Einflussfaktoren** bestimmen die Reaktionsgeschwindigkeit: (1) **Temperatur** — eine Temperaturerhöhung erhöht die kinetische Energie der Teilchen, sodass mehr Moleküle die Aktivierungsenergie überschreiten. Die **RGT-Regel** (Reaktionsgeschwindigkeit-Temperatur-Regel, auch van-'t-Hoff-Regel) besagt, dass eine Temperaturerhöhung um 10 °C die Reaktionsgeschwindigkeit ungefähr verdoppelt bis verdreifacht (Faktor 2–3). (2) **Konzentration** — höhere Konzentration bedeutet mehr Teilchen pro Volumen und damit häufigere Zusammenstöße. (3) **Zerteilungsgrad** — fein verteilte Feststoffe bieten eine größere Oberfläche und reagieren schneller (z. B. Eisenpulver vs. Eisenblock). (4) **Katalysatoren** — sie bieten einen alternativen Reaktionsweg mit niedrigerer Aktivierungsenergie.

Das **Geschwindigkeitsgesetz** einer Reaktion wird experimentell ermittelt und hat die allgemeine Form v = k · [A]ᵐ · [B]ⁿ, wobei k die Geschwindigkeitskonstante ist und m sowie n die Reaktionsordnungen bezüglich der Edukte A und B darstellen. Die Gesamtreaktionsordnung ergibt sich als m + n. Bei Reaktionen erster Ordnung (v = k · [A]) hängt die Geschwindigkeit linear von der Konzentration eines Edukts ab — ein Beispiel ist der radioaktive Zerfall. Bei Reaktionen zweiter Ordnung (v = k · [A]²) verdoppelt sich die Geschwindigkeit bei Verdopplung der Konzentration auf das Vierfache. Die Geschwindigkeitskonstante k ist stark temperaturabhängig und folgt der Arrhenius-Gleichung: k = A · e^(-Eₐ/RT), wobei A der präexponentielle Faktor, Eₐ die Aktivierungsenergie, R die Gaskonstante und T die absolute Temperatur ist.`,
      merksätze: [
        'RGT-Regel: +10 °C ≈ doppelte bis dreifache Reaktionsgeschwindigkeit. Faktoren: Temperatur, Konzentration, Zerteilungsgrad, Katalysator.',
        'Geschwindigkeitsgesetz v = k · [A]ᵐ · [B]ⁿ — die Exponenten m und n werden experimentell bestimmt, NICHT aus der Reaktionsgleichung abgelesen!'
      ],
      altfrage: {
        question: 'Um welchen Faktor ändert sich die Reaktionsgeschwindigkeit ungefähr, wenn die Temperatur um 30 °C erhöht wird (RGT-Regel, Faktor 2)?',
        answer: 'Nach der RGT-Regel (Faktor 2 pro 10 °C): 2³ = 8-fache Reaktionsgeschwindigkeit bei einer Temperaturerhöhung um 30 °C.'
      },
      klinischerBezug: 'Die RGT-Regel erklärt, warum Fieber den Stoffwechsel beschleunigt und warum therapeutische Hypothermie (Kühlung auf ~33 °C) nach einem Herzstillstand eingesetzt wird — die verlangsamten biochemischen Reaktionen reduzieren den Sauerstoffbedarf des Gehirns und begrenzen so Hirnschäden.',
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
      content: `Viele chemische Reaktionen sind **reversibel** — sie laufen sowohl in Hin- als auch in Rückrichtung ab. Das **chemische Gleichgewicht** ist ein dynamischer Zustand, in dem die Geschwindigkeit der Hinreaktion gleich der Geschwindigkeit der Rückreaktion ist (v_hin = v_rück). Makroskopisch scheint keine Veränderung stattzufinden, mikroskopisch reagieren die Stoffe jedoch ständig weiter. Für die allgemeine Reaktion aA + bB ⇌ cC + dD lautet die **Gleichgewichtskonstante**: K = ([C]ᶜ · [D]ᵈ) / ([A]ᵃ · [B]ᵇ). Ein großer K-Wert (K >> 1) bedeutet, dass das Gleichgewicht auf der Produktseite liegt; ein kleiner K-Wert (K << 1) bedeutet, dass die Edukte überwiegen.

Das **Prinzip von Le Chatelier** (Prinzip des kleinsten Zwangs) beschreibt, wie ein System im Gleichgewicht auf äußere Störungen reagiert: Das Gleichgewicht verschiebt sich stets so, dass die Störung teilweise kompensiert wird. Konkret bedeutet das: (1) **Konzentration** — Zugabe eines Edukts verschiebt das Gleichgewicht nach rechts (zu den Produkten), Entfernung eines Produkts ebenfalls. (2) **Druck** (bei Gasreaktionen) — eine Druckerhöhung verschiebt das Gleichgewicht zur Seite mit weniger Gasteilchen. Beispiel: N₂ + 3 H₂ ⇌ 2 NH₃ — links 4 mol Gas, rechts 2 mol Gas → Druckerhöhung begünstigt die NH₃-Bildung. (3) **Temperatur** — eine Temperaturerhöhung begünstigt die endotherme Richtung, eine Temperaturerniedrigung die exotherme. Wichtig: Die Temperatur ändert den K-Wert, Konzentration und Druck verschieben nur die Gleichgewichtslage bei konstantem K.

Die Gleichgewichtskonstante K hängt mit der freien Enthalpie über die Beziehung ΔG° = -R·T·ln(K) zusammen. Ist ΔG° negativ, ist K > 1 und die Produkte werden bevorzugt gebildet. Ist ΔG° positiv, ist K < 1 und die Edukte überwiegen. Diese Beziehung verknüpft die Thermodynamik direkt mit der Lage des Gleichgewichts. Für das Haber-Bosch-Verfahren zur Ammoniaksynthese folgt daraus: Hoher Druck (verschiebt Gleichgewicht zur Produktseite) und moderate Temperatur (Kompromiss zwischen Gleichgewichtslage und Reaktionsgeschwindigkeit) bei Verwendung eines Eisenkatalysators sind optimale Bedingungen. Der Katalysator beschleunigt die Einstellung des Gleichgewichts, verändert K aber nicht.`,
      merksätze: [
        'Le Chatelier: Das Gleichgewicht weicht einer Störung aus — Konzentrationszugabe → Verbrauch, Druckerhöhung → weniger Teilchen, Temperaturerhöhung → endotherme Richtung.',
        'K = [Produkte]/[Edukte] mit Exponenten. Nur Temperaturänderung verändert K — Konzentration, Druck und Katalysator ändern K nicht!'
      ],
      altfrage: {
        question: 'Wie verschiebt sich das Gleichgewicht der Reaktion N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm) bei Druckerhöhung und Temperaturerniedrigung?',
        answer: 'Beides verschiebt das Gleichgewicht nach rechts (zur Produktseite): Druckerhöhung begünstigt die Seite mit weniger Gasteilchen (2 statt 4 mol), Temperaturerniedrigung begünstigt die exotherme Richtung (Hinreaktion).'
      },
      klinischerBezug: 'Das Kohlensäure-Bicarbonat-Gleichgewicht im Blut (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻) folgt dem Prinzip von Le Chatelier: Bei verstärkter CO₂-Produktion (z. B. bei Belastung) verschiebt sich das Gleichgewicht nach rechts, der pH sinkt. Die Lunge kompensiert durch vermehrte CO₂-Abatmung und verschiebt das Gleichgewicht zurück nach links.',
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
