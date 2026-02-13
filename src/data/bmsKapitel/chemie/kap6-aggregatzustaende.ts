import type { Kapitel } from '../types';

export const chemKap6: Kapitel = {
  id: 'chem-kap6',
  title: 'Aggregatzustände & Phasenübergänge',
  subject: 'chemie',
  icon: '🧊',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap6-uk1',
      title: 'Fest, Flüssig, Gasförmig',
      content: `Die drei klassischen Aggregatzustände der Materie – fest, flüssig und gasförmig – lassen sich durch das Teilchenmodell auf mikroskopischer Ebene erklären. Im festen Zustand sind die Teilchen (Atome, Ionen oder Moleküle) in einer regelmäßigen, geordneten Struktur angeordnet und durch starke Anziehungskräfte an ihren Plätzen fixiert. Sie können lediglich um ihre Ruhelagen schwingen (Gitterschwingungen), sich aber nicht frei bewegen. Feststoffe haben daher ein definiertes Volumen und eine definierte Form. Man unterscheidet kristalline Feststoffe mit periodisch wiederkehrender Fernordnung (z. B. NaCl, Diamant, Eis) und amorphe Feststoffe ohne regelmäßige Gitterstruktur (z. B. Glas, Kunststoffe), die als unterkühlte Flüssigkeiten betrachtet werden können. Kristalline Feststoffe haben einen scharfen Schmelzpunkt, amorphe erweichen über einen Temperaturbereich.

Im flüssigen Zustand sind die Teilchen nicht mehr an feste Gitterplätze gebunden, sondern können sich gegeneinander verschieben und bewegen. Es besteht eine Nahordnung (benachbarte Teilchen sind noch geordnet), aber keine Fernordnung. Die Anziehungskräfte zwischen den Teilchen sind zwar schwächer als im Festkörper, reichen aber aus, um die Teilchen zusammenzuhalten. Flüssigkeiten haben daher ein definiertes Volumen, aber keine eigene Form – sie nehmen die Form des Gefäßes an. Die Viskosität (Zähflüssigkeit) einer Flüssigkeit hängt von der Stärke der zwischenmolekularen Kräfte und der Temperatur ab: Stärkere Kräfte und niedrigere Temperaturen erhöhen die Viskosität. Honig ist beispielsweise bei Raumtemperatur sehr viskos aufgrund starker Wasserstoffbrücken zwischen den Zuckermolekülen, wird beim Erwärmen aber deutlich dünnflüssiger.

Im gasförmigen Zustand bewegen sich die Teilchen frei und weitgehend unabhängig voneinander mit hoher Geschwindigkeit (bei Raumtemperatur im Bereich von Hunderten Metern pro Sekunde). Die mittlere kinetische Energie der Teilchen ist proportional zur absoluten Temperatur (E_kin = 3/2 × k_B × T, mit der Boltzmann-Konstante k_B). Die Abstände zwischen den Teilchen sind sehr groß im Vergleich zu ihrer Größe, sodass die Anziehungskräfte vernachlässigbar sind (Modell des idealen Gases). Gase haben weder ein definiertes Volumen noch eine definierte Form; sie füllen jeden verfügbaren Raum vollständig aus und sind leicht komprimierbar. Der Druck eines Gases entsteht durch die Stöße der Gasteilchen gegen die Gefäßwände. Ein vierter Aggregatzustand ist das Plasma (ionisiertes Gas), das bei sehr hohen Temperaturen entsteht und in dem Atome in Ionen und freie Elektronen zerlegt sind (z. B. Sterne, Blitze, Neonröhren).`,
      merksätze: [
        'Fest: feste Gitterplätze, definiertes Volumen und Form. Flüssig: bewegliche Teilchen mit Nahordnung, definiertes Volumen, keine eigene Form. Gasförmig: frei bewegliche Teilchen, weder definiertes Volumen noch Form.',
        'Die mittlere kinetische Energie der Gasteilchen ist proportional zur absoluten Temperatur: E_kin = 3/2 × k_B × T. Kristalline Feststoffe haben einen scharfen Schmelzpunkt, amorphe erweichen über einen Temperaturbereich.'
      ],
      altfrage: {
        question: 'Was unterscheidet kristalline von amorphen Feststoffen?',
        answer: 'Kristalline Feststoffe besitzen eine regelmäßige, periodische Fernordnung der Teilchen und haben einen scharfen Schmelzpunkt. Amorphe Feststoffe haben keine regelmäßige Gitterstruktur (nur Nahordnung) und erweichen über einen Temperaturbereich. Beispiele: NaCl-Kristall vs. Glas.'
      },
      klinischerBezug: 'Die Aggregatzustände spielen in der Medizin eine vielfältige Rolle. Inhalationsnarkotika wie Sevofluran und Isofluran sind Flüssigkeiten mit niedrigem Siedepunkt, die im Verdampfer (Vaporizer) gezielt in den gasförmigen Zustand überführt und dem Atemgas beigemischt werden. Die Viskosität des Blutes (ca. 3–4 mPa·s) ist für die Hämodynamik relevant: Bei Polyzythämie (erhöhter Hämatokrit) steigt die Viskosität, was das Thromboserisiko erhöht.',
      selfTest: [
        {
          question: 'Welche Eigenschaft unterscheidet Flüssigkeiten von Gasen?',
          options: [
            'Flüssigkeiten haben ein definiertes Volumen, Gase nicht',
            'Flüssigkeiten sind nicht komprimierbar, Gase schon',
            'Beide Antworten A und B sind korrekt',
            'Es gibt keinen Unterschied auf molekularer Ebene',
            'Flüssigkeiten haben eine höhere kinetische Energie als Gase'
          ],
          correctIndex: 2,
          explanation: 'Flüssigkeiten haben ein definiertes Volumen (Teilchen werden durch zwischenmolekulare Kräfte zusammengehalten) und sind nahezu inkompressibel. Gase füllen jeden verfügbaren Raum und sind leicht komprimierbar.'
        },
        {
          question: 'Was ist ein amorphen Feststoff?',
          options: [
            'Ein Feststoff mit regelmäßiger Gitterstruktur',
            'Ein Feststoff ohne periodische Fernordnung, der über einen Temperaturbereich erweicht',
            'Ein Feststoff, der bei 0 °C schmilzt',
            'Ein Feststoff, der nur aus Metallen besteht',
            'Ein Feststoff mit besonders hoher Gitterenergie'
          ],
          correctIndex: 1,
          explanation: 'Amorphe Feststoffe besitzen keine regelmäßige, periodische Gitterstruktur (nur Nahordnung). Sie erweichen beim Erwärmen über einen Temperaturbereich statt bei einem scharfen Schmelzpunkt. Beispiel: Glas.'
        },
        {
          question: 'Die mittlere kinetische Energie von Gasteilchen ist proportional zu welcher Größe?',
          options: [
            'Dem Druck',
            'Dem Volumen',
            'Der absoluten Temperatur (in Kelvin)',
            'Der molaren Masse',
            'Der Teilchendichte im Gefäß'
          ],
          correctIndex: 2,
          explanation: 'E_kin = 3/2 × k_B × T. Die mittlere kinetische Energie der Teilchen hängt nur von der absoluten Temperatur ab, nicht von der Teilchenmasse oder anderen Größen.'
        }
      ]
    },
    {
      id: 'chem-kap6-uk2',
      title: 'Phasenübergänge',
      content: `Phasenübergänge sind Übergänge zwischen den Aggregatzuständen, die bei bestimmten Temperaturen und Drücken stattfinden. Beim Schmelzen (fest → flüssig) wird die Gitterstruktur aufgebrochen; die dafür benötigte Energie ist die Schmelzwärme (Schmelzenthalpie ΔH_fus). Der umgekehrte Vorgang, das Erstarren (flüssig → fest), gibt dieselbe Energiemenge wieder frei. Beim Verdampfen (flüssig → gasförmig) müssen die zwischenmolekularen Kräfte vollständig überwunden werden; die dafür benötigte Verdampfungswärme (Verdampfungsenthalpie ΔH_vap) ist daher deutlich größer als die Schmelzwärme. Für Wasser beträgt die Schmelzwärme 6,01 kJ/mol und die Verdampfungswärme 40,7 kJ/mol – ein Faktor von fast sieben, was die Stärke der Wasserstoffbrücken widerspiegelt. Der umgekehrte Vorgang des Verdampfens ist die Kondensation (gasförmig → flüssig).

Die Sublimation beschreibt den direkten Übergang vom festen in den gasförmigen Zustand unter Umgehung der flüssigen Phase. Dies geschieht unterhalb des Tripelpunktes (bei niedrigem Druck). Ein bekanntes Beispiel ist Trockeneis (festes CO₂), das bei Atmosphärendruck bei -78,5 °C direkt sublimiert, da der Tripelpunkt von CO₂ bei 5,18 bar liegt und somit weit über dem normalen Luftdruck. Der umgekehrte Vorgang (gasförmig → fest) wird als Resublimation (oder Deposition) bezeichnet und ist beispielsweise für die Reifbildung verantwortlich. Während eines Phasenübergangs bleibt die Temperatur trotz Energiezufuhr konstant, da die gesamte zugeführte Energie in die Überwindung der zwischenmolekularen Kräfte fließt und nicht in die Erhöhung der kinetischen Energie (Temperatur). Dies zeigt sich in den charakteristischen Plateaus einer Erwärmungskurve (Temperatur-Zeit-Diagramm bei konstanter Heizrate).

Das Phasendiagramm stellt die Stabilitätsbereiche der verschiedenen Aggregatzustände in Abhängigkeit von Druck und Temperatur grafisch dar. Es enthält drei wichtige Punkte und Kurven: Die Dampfdruckkurve trennt den flüssigen vom gasförmigen Bereich und endet am kritischen Punkt, oberhalb dessen keine Unterscheidung zwischen Flüssigkeit und Gas mehr möglich ist (überkritischer Zustand). Die Schmelzkurve trennt den festen vom flüssigen Bereich. Die Sublimationskurve trennt den festen vom gasförmigen Bereich. Am Tripelpunkt, dem Schnittpunkt aller drei Kurven, köxistieren alle drei Aggregatzustände im Gleichgewicht. Für Wasser liegt der Tripelpunkt bei 0,01 °C und 611 Pa (0,006 bar). Eine Besonderheit des Wassers ist die negative Steigung der Schmelzkurve: Da Eis eine geringere Dichte als Wasser hat, führt eine Druckerhöhung zur Erniedrigung des Schmelzpunktes (Dichteanomalie). Bei den meisten anderen Stoffen hat die Schmelzkurve eine positive Steigung.`,
      merksätze: [
        'Phasenübergänge: Schmelzen/Erstarren, Verdampfen/Kondensieren, Sublimieren/Resublimieren. Während eines Phasenübergangs bleibt die Temperatur konstant (Energie wird für Überwindung der zwischenmolekularen Kräfte benötigt).',
        'Tripelpunkt: Köxistenz aller drei Phasen. Kritischer Punkt: oberhalb keine Unterscheidung flüssig/gasförmig. Wasser-Anomalie: Schmelzkurve hat negative Steigung (Eis weniger dicht als Wasser).'
      ],
      altfrage: {
        question: 'Warum bleibt die Temperatur während eines Phasenübergangs konstant, obwohl Energie zugeführt wird?',
        answer: 'Während eines Phasenübergangs wird die zugeführte Energie vollständig zur Überwindung der zwischenmolekularen Kräfte (Schmelz- oder Verdampfungsenthalpie) verwendet, nicht zur Erhöhung der kinetischen Energie der Teilchen. Da die Temperatur ein Maß für die kinetische Energie ist, bleibt sie konstant.'
      },
      klinischerBezug: 'Die hohe Verdampfungsenthalpie des Wassers ist für die Thermoregulation des Körpers essenziell. Beim Schwitzen verdunstet Wasser auf der Hautoberfläche und entzieht dem Körper dabei 2260 kJ/kg Wärme (Verdunstungskühlung). Auch bei der Gefriertrocknung (Lyophilisation) von Medikamenten und Impfstoffen wird die Sublimation genutzt: Wasser wird unter Vakuum bei niedrigen Temperaturen direkt vom Eis zum Dampf überführt, wodurch empfindliche Proteinstrukturen erhalten bleiben.',
      selfTest: [
        {
          question: 'Welcher Phasenübergang beschreibt den direkten Übergang von fest zu gasförmig?',
          options: [
            'Verdampfen',
            'Kondensation',
            'Sublimation',
            'Schmelzen',
            'Resublimation'
          ],
          correctIndex: 2,
          explanation: 'Die Sublimation ist der direkte Übergang vom festen in den gasförmigen Zustand unter Umgehung der flüssigen Phase. Sie findet unterhalb des Tripelpunktes statt (z. B. Trockeneis).'
        },
        {
          question: 'Was ist am Tripelpunkt eines Stoffes gegeben?',
          options: [
            'Der Stoff existiert nur als Gas',
            'Alle drei Aggregatzustände köxistieren im Gleichgewicht',
            'Der Stoff hat seine maximale Dichte',
            'Es ist der Punkt, an dem der Stoff zerfällt',
            'Der Stoff erreicht seine maximale Temperatur'
          ],
          correctIndex: 1,
          explanation: 'Am Tripelpunkt (für Wasser: 0,01 °C, 611 Pa) köxistieren die feste, flüssige und gasförmige Phase im thermodynamischen Gleichgewicht. Es ist der Schnittpunkt der drei Phasengrenzlinien.'
        },
        {
          question: 'Warum hat die Schmelzkurve von Wasser eine negative Steigung?',
          options: [
            'Weil Wasser beim Gefrieren Wärme aufnimmt',
            'Weil Eis eine geringere Dichte als flüssiges Wasser hat (Dichteanomalie)',
            'Weil Wasser keine Wasserstoffbrücken bildet',
            'Weil der Tripelpunkt bei hohem Druck liegt',
            'Weil die Schmelzwärme von Wasser negativ ist'
          ],
          correctIndex: 1,
          explanation: 'Eis hat eine offene hexagonale Kristallstruktur und ist weniger dicht als Wasser. Druckerhöhung begünstigt die dichtere flüssige Phase, sodass der Schmelzpunkt bei steigendem Druck sinkt (negative Steigung der Schmelzkurve).'
        }
      ]
    },
    {
      id: 'chem-kap6-uk3',
      title: 'Lösungen',
      content: `Eine Lösung ist ein homogenes Gemisch aus mindestens zwei Komponenten: dem Lösungsmittel (Solvens, die Komponente mit dem größten Mengenanteil) und dem gelösten Stoff (Solvat). Der Lösungsvorgang selbst wird als Solvatation bezeichnet (bei Wasser als Lösungsmittel: Hydratation). Beim Lösen eines Ionenkristalls wie NaCl in Wasser umgeben die polaren Wassermoleküle die Ionen und bilden Hydrathüllen: Die negativ polarisierten Sauerstoffatome richten sich zu den Na⁺-Kationen, die positiv polarisierten Wasserstoffatome zu den Cl⁻-Anionen. Die dabei freiwerdende Hydratationsenergie muss die Gitterenergie des Kristalls kompensieren, damit der Lösungsvorgang stattfindet. Die Grundregel lautet: Ähnliches löst sich in Ähnlichem (similia similibus solvuntur) – polare Stoffe lösen sich in polaren Lösungsmitteln, unpolare in unpolaren.

Die Löslichkeit eines Stoffes gibt die maximale Menge an, die sich bei einer bestimmten Temperatur in einem Lösungsmittel lösen kann. Ist diese Grenze erreicht, liegt eine gesättigte Lösung vor; jeder weitere Zusatz des Stoffes bleibt ungelöst als Bodenkörper. Eine ungesättigte Lösung kann noch mehr Stoff aufnehmen, während eine übersättigte Lösung instabil ist und mehr gelösten Stoff enthält, als der Gleichgewichtslöslichkeit entspricht (z. B. durch langsames Abkühlen einer heißen, gesättigten Lösung). Die Löslichkeit von Feststoffen in Flüssigkeiten nimmt meist mit steigender Temperatur zu (exothermer Lösungsvorgang: Verschiebung des Gleichgewichts nach Le Chatelier). Die Löslichkeit von Gasen in Flüssigkeiten nimmt dagegen mit steigender Temperatur ab und ist proportional zum Partialdruck des Gases (Henry-Gesetz: c = kH × p).

Kolligative Eigenschaften sind physikalische Eigenschaften einer Lösung, die nur von der Konzentration der gelösten Teilchen abhängen, nicht von deren Art. Zu den kolligativen Eigenschaften gehören: (1) Die Siedepunkterhöhung (ΔT_b = K_b × b × i): Der Siedepunkt einer Lösung ist höher als der des reinen Lösungsmittels. (2) Die Gefrierpunktserniedrigung (ΔT_f = K_f × b × i): Der Gefrierpunkt sinkt. Für Wasser ist K_f = 1,86 K·kg/mol, was erklärt, warum Streusalz (NaCl) den Gefrierpunkt des Wassers senkt und Eis zum Schmelzen bringt. (3) Die Osmose und der osmotische Druck (π = c × R × T × i): Wenn eine semipermeable Membran die Lösung vom reinen Lösungsmittel trennt, strömt Lösungsmittel in die Lösung (Osmose). Der osmotische Druck ist der Druck, der aufgebracht werden muss, um den Lösungsmittelstrom zu stoppen. Der Faktor i (Van-'t-Hoff-Faktor) berücksichtigt die Dissoziation von Elektrolyten (z. B. i = 2 für NaCl, da es in Na⁺ und Cl⁻ dissoziiert).`,
      merksätze: [
        'Ähnliches löst sich in Ähnlichem: polare Stoffe in polaren Lösungsmitteln, unpolare in unpolaren. Gesättigte Lösung = Gleichgewichtszustand, maximale Löslichkeit erreicht.',
        'Kolligative Eigenschaften hängen nur von der Teilchenkonzentration ab: Siedepunkterhöhung, Gefrierpunktserniedrigung, osmotischer Druck. Van-\'t-Hoff-Faktor i berücksichtigt Dissoziation (NaCl: i = 2).'
      ],
      altfrage: {
        question: 'Was versteht man unter kolligativen Eigenschaften?',
        answer: 'Kolligative Eigenschaften sind physikalische Eigenschaften einer Lösung, die nur von der Anzahl (Konzentration) der gelösten Teilchen abhängen, nicht von deren chemischer Natur. Dazu gehören Siedepunkterhöhung, Gefrierpunktserniedrigung, Dampfdruckerniedrigung und osmotischer Druck.'
      },
      klinischerBezug: 'Die Osmose ist ein zentrales Konzept der Medizin. Die Osmolarität des Blutplasmas beträgt etwa 290 mOsmol/L. Infusionslösungen müssen isoton sein (gleiche Osmolarität wie Blut), um eine Schädigung der Erythrozyten zu vermeiden: In hypotoner Lösung schwellen Erythrozyten an und lysieren (osmotische Hämolyse), in hypertoner Lösung schrumpfen sie (Krenation). Physiologische Kochsalzlösung (0,9 % NaCl) und 5 % Glucoselösung sind isoton zum Blut. Die Gefrierpunktserniedrigung wird in der Labormedizin zur Bestimmung der Osmolalität von Körperflüssigkeiten mittels Kryoskopie genutzt.',
      selfTest: [
        {
          question: 'Warum löst sich NaCl gut in Wasser, aber nicht in Benzol?',
          options: [
            'Weil NaCl eine zu hohe molare Masse hat',
            'Weil Wasser als polares Lösungsmittel die Ionen hydratisieren kann, Benzol als unpolares Lösungsmittel nicht',
            'Weil Benzol eine höhere Dichte hat als Wasser',
            'Weil NaCl nur bei hohen Temperaturen löslich ist',
            'Weil die Gitterenergie von NaCl in Benzol größer ist'
          ],
          correctIndex: 1,
          explanation: 'Ähnliches löst sich in Ähnlichem: Das ionische NaCl löst sich in polarem Wasser, weil die Hydratationsenergie der Ionen die Gitterenergie kompensiert. Unpolares Benzol kann keine Hydrathüllen bilden.'
        },
        {
          question: 'Was passiert mit dem Gefrierpunkt einer Lösung, wenn man Salz in Wasser löst?',
          options: [
            'Er steigt',
            'Er bleibt gleich',
            'Er sinkt (Gefrierpunktserniedrigung)',
            'Er hängt von der Art des Salzes ab, nicht von der Konzentration',
            'Er schwankt periodisch je nach Salzkonzentration'
          ],
          correctIndex: 2,
          explanation: 'Das Lösen von Salz in Wasser führt zu einer Gefrierpunktserniedrigung (kolligative Eigenschaft). Je mehr Teilchen gelöst sind, desto stärker sinkt der Gefrierpunkt. Deshalb wird Streusalz gegen Eis verwendet.'
        },
        {
          question: 'Was geschieht mit Erythrozyten in einer hypotonen Lösung?',
          options: [
            'Sie schrumpfen',
            'Sie bleiben unverändert',
            'Sie schwellen an und können platzen (Hämolyse)',
            'Sie verklumpen',
            'Sie geben Wasser an die Umgebung ab'
          ],
          correctIndex: 2,
          explanation: 'In hypotoner Lösung (niedrigere Osmolarität als das Zellinnere) strömt Wasser osmotisch in die Erythrozyten ein. Sie schwellen an und können platzen (osmotische Hämolyse). Deshalb müssen Infusionen isoton sein.'
        }
      ]
    }
  ]
};
