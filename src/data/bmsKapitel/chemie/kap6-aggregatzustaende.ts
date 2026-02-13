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
      content: `Die drei Aggregatzustände unterscheiden sich durch die Beweglichkeit der Teilchen.

**Fest**: Die Teilchen sitzen auf festen Gitterplätzen. Sie schwingen nur um ihre Ruhelage. Feststoffe haben definiertes Volumen und definierte Form. **Kristalline Feststoffe** (z. B. NaCl, Diamant, Eis) besitzen eine periodisch geordnete Fernordnung. Sie haben einen scharfen Schmelzpunkt. **Amorphe Feststoffe** (z. B. Glas, Kunststoffe) haben keine regelmäßige Gitterstruktur, nur Nahordnung. Sie erweichen über einen Temperaturbereich.

**Flüssig**: Die Teilchen sind beweglich und verschieben sich gegeneinander. Es besteht Nahordnung, aber keine Fernordnung. Anziehungskräfte halten die Teilchen zusammen, sind aber schwächer als im Festkörper. Flüssigkeiten haben definiertes Volumen, aber keine eigene Form. Sie passen sich dem Gefäß an. Die **Viskosität** (Zähflüssigkeit) hängt von den zwischenmolekularen Kräften ab. Stärkere Kräfte und niedrigere Temperaturen erhöhen die Viskosität. Honig ist bei Raumtemperatur viskos (starke Wasserstoffbrücken), beim Erwärmen wird er dünnflüssiger.

**Gasförmig**: Die Teilchen bewegen sich frei und schnell (bei Raumtemperatur Hunderte Meter pro Sekunde). Die Abstände zwischen den Teilchen sind groß, Anziehungskräfte vernachlässigbar. Die mittlere kinetische Energie ist proportional zur absoluten Temperatur: E_kin = 3/2 × k_B × T. Gase haben weder definiertes Volumen noch definierte Form. Sie füllen jeden Raum aus und sind leicht komprimierbar. Der Druck entsteht durch Teilchenstöße gegen die Gefäßwände.

Ein vierter Aggregatzustand ist das **Plasma** (ionisiertes Gas bei sehr hohen Temperaturen, z. B. Sterne, Blitze, Neonröhren).`,
      merksätze: [
        'Fest: feste Gitterplätze, definiertes Volumen und Form. Flüssig: bewegliche Teilchen mit Nahordnung, definiertes Volumen, keine eigene Form. Gasförmig: frei bewegliche Teilchen, weder definiertes Volumen noch Form.',
        'Die mittlere kinetische Energie der Gasteilchen ist proportional zur absoluten Temperatur: E_kin = 3/2 × k_B × T. Kristalline Feststoffe haben einen scharfen Schmelzpunkt, amorphe erweichen über einen Temperaturbereich.'
      ],
      altfrage: {
        question: 'Was unterscheidet kristalline von amorphen Feststoffen?',
        answer: 'Kristalline Feststoffe besitzen eine regelmäßige, periodische Fernordnung der Teilchen und haben einen scharfen Schmelzpunkt. Amorphe Feststoffe haben keine regelmäßige Gitterstruktur (nur Nahordnung) und erweichen über einen Temperaturbereich. Beispiele: NaCl-Kristall vs. Glas.'
      },
      klinischerBezug: '**Inhalationsnarkotika** wie Sevofluran und Isofluran sind Flüssigkeiten mit niedrigem Siedepunkt. Im **Vaporizer** werden sie verdampft und dem Atemgas beigemischt. Die **Blutviskosität** beträgt normal 3–4 mPa·s. Bei **Polyzythämie** (erhöhter Hämatokrit über 52 %) steigt die Viskosität deutlich. Das Blut wird zähflüssig, das Thromboserisiko steigt. Bei **Anämie** (Hämatokrit unter 36 %) sinkt die Viskosität, das Blut fließt leichter. Die Viskosität beeinflusst direkt die Hämodynamik und den peripheren Widerstand.',
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
      content: `**Phasenübergänge** sind Übergänge zwischen den Aggregatzuständen. Sie finden bei bestimmten Temperaturen und Drücken statt.

**Schmelzen** (fest → flüssig): Die Gitterstruktur wird aufgebrochen. Die benötigte Energie ist die **Schmelzwärme** (ΔH_fus). Umkehrung: **Erstarren** (flüssig → fest), setzt dieselbe Energie frei.

**Verdampfen** (flüssig → gasförmig): Die zwischenmolekularen Kräfte werden vollständig überwunden. Die **Verdampfungswärme** (ΔH_vap) ist viel größer als die Schmelzwärme. Für Wasser: ΔH_fus = 6,01 kJ/mol, ΔH_vap = 40,7 kJ/mol (Faktor ~7). Umkehrung: **Kondensation** (gasförmig → flüssig).

**Sublimation** (fest → gasförmig): Direkter Übergang unter Umgehung der flüssigen Phase. Findet unterhalb des Tripelpunktes statt. Beispiel: **Trockeneis** (festes CO₂) sublimiert bei -78,5 °C, da der Tripelpunkt bei 5,18 bar liegt (über Atmosphärendruck). Umkehrung: **Resublimation** (gasförmig → fest), z. B. Reifbildung.

Während eines Phasenübergangs bleibt die Temperatur konstant. Die zugeführte Energie fließt vollständig in die Überwindung der zwischenmolekularen Kräfte, nicht in die kinetische Energie. Daher zeigen Erwärmungskurven charakteristische Plateaus.

Das **Phasendiagramm** zeigt Stabilitätsbereiche in Abhängigkeit von Druck und Temperatur. Die **Dampfdruckkurve** trennt flüssig von gasförmig, endet am kritischen Punkt (oberhalb: überkritischer Zustand). Die **Schmelzkurve** trennt fest von flüssig. Die **Sublimationskurve** trennt fest von gasförmig. Am **Tripelpunkt** koexistieren alle drei Phasen im Gleichgewicht. Für Wasser: 0,01 °C, 611 Pa.

**Wasser-Anomalie**: Die Schmelzkurve hat eine negative Steigung. Eis ist weniger dicht als Wasser. Druckerhöhung senkt den Schmelzpunkt.`,
      merksätze: [
        'Phasenübergänge: Schmelzen/Erstarren, Verdampfen/Kondensieren, Sublimieren/Resublimieren. Während eines Phasenübergangs bleibt die Temperatur konstant (Energie wird für Überwindung der zwischenmolekularen Kräfte benötigt).',
        'Tripelpunkt: Koexistenz aller drei Phasen. Kritischer Punkt: oberhalb keine Unterscheidung flüssig/gasförmig. Wasser-Anomalie: Schmelzkurve hat negative Steigung (Eis weniger dicht als Wasser).'
      ],
      altfrage: {
        question: 'Warum bleibt die Temperatur während eines Phasenübergangs konstant, obwohl Energie zugeführt wird?',
        answer: 'Während eines Phasenübergangs wird die zugeführte Energie vollständig zur Überwindung der zwischenmolekularen Kräfte (Schmelz- oder Verdampfungsenthalpie) verwendet, nicht zur Erhöhung der kinetischen Energie der Teilchen. Da die Temperatur ein Maß für die kinetische Energie ist, bleibt sie konstant.'
      },
      klinischerBezug: 'Die hohe Verdampfungsenthalpie des Wassers (2260 kJ/kg) ist essenziell für die **Thermoregulation**. Beim **Schwitzen** verdunstet Wasser auf der Haut und entzieht dem Körper Wärme (**Verdunstungskühlung**). Bei hoher Luftfeuchtigkeit ist die Verdunstung eingeschränkt, die Kühlwirkung sinkt. Bei der **Gefriertrocknung** (Lyophilisation) von Medikamenten und Impfstoffen wird Wasser unter Vakuum bei niedrigen Temperaturen direkt vom Eis zum Dampf überführt. Proteinstrukturen bleiben erhalten, da keine flüssige Phase entsteht. Lyophilisierte Produkte (z. B. mRNA-Impfstoffe, Antikörper) sind lange haltbar und werden vor Gebrauch rekonstituiert.',
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
            'Alle drei Aggregatzustände koexistieren im Gleichgewicht',
            'Der Stoff hat seine maximale Dichte',
            'Es ist der Punkt, an dem der Stoff zerfällt',
            'Der Stoff erreicht seine maximale Temperatur'
          ],
          correctIndex: 1,
          explanation: 'Am Tripelpunkt (für Wasser: 0,01 °C, 611 Pa) koexistieren die feste, flüssige und gasförmige Phase im thermodynamischen Gleichgewicht. Es ist der Schnittpunkt der drei Phasengrenzlinien.'
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
      content: `Eine **Lösung** ist ein homogenes Gemisch aus Lösungsmittel (Solvens) und gelöstem Stoff (Solvat). Beim Lösen umgeben die Lösungsmittelmoleküle die gelösten Teilchen (**Solvatation**, bei Wasser: **Hydratation**).

Beispiel NaCl in Wasser: Die polaren Wassermoleküle umgeben die Ionen. Die negativ polarisierten Sauerstoffatome richten sich zu Na⁺, die positiv polarisierten Wasserstoffatome zu Cl⁻. Die **Hydratationsenergie** muss die **Gitterenergie** kompensieren, damit der Lösungsvorgang stattfindet. Grundregel: **Ähnliches löst sich in Ähnlichem** (similia similibus solvuntur). Polare Stoffe lösen sich in polaren Lösungsmitteln, unpolare in unpolaren.

Die **Löslichkeit** gibt die maximale Menge an, die sich bei gegebener Temperatur lösen kann. **Gesättigte Lösung**: Grenze erreicht, Bodenkörper vorhanden. **Ungesättigte Lösung**: Es kann noch mehr gelöst werden. **Übersättigte Lösung**: Instabil, mehr gelöst als der Gleichgewichtslöslichkeit entspricht. Die Löslichkeit von Feststoffen in Flüssigkeiten steigt meist mit der Temperatur. Die Löslichkeit von Gasen in Flüssigkeiten sinkt mit steigender Temperatur und ist proportional zum Partialdruck (**Henry-Gesetz**: c = kH × p).

**Kolligative Eigenschaften** hängen nur von der Konzentration der gelösten Teilchen ab, nicht von deren Art:

1. **Siedepunkterhöhung**: ΔT_b = K_b × b × i
2. **Gefrierpunktserniedrigung**: ΔT_f = K_f × b × i (für Wasser: K_f = 1,86 K·kg/mol). Beispiel: Streusalz senkt den Gefrierpunkt.
3. **Osmotischer Druck**: π = c × R × T × i. Lösungsmittel strömt durch eine semipermeable Membran in die Lösung.

Der **Van-'t-Hoff-Faktor** i berücksichtigt die Dissoziation von Elektrolyten (z. B. NaCl: i = 2, da Na⁺ + Cl⁻).`,
      merksätze: [
        'Ähnliches löst sich in Ähnlichem: polare Stoffe in polaren Lösungsmitteln, unpolare in unpolaren. Gesättigte Lösung = Gleichgewichtszustand, maximale Löslichkeit erreicht.',
        'Kolligative Eigenschaften hängen nur von der Teilchenkonzentration ab: Siedepunkterhöhung, Gefrierpunktserniedrigung, osmotischer Druck. Van-\'t-Hoff-Faktor i berücksichtigt Dissoziation (NaCl: i = 2).'
      ],
      altfrage: {
        question: 'Was versteht man unter kolligativen Eigenschaften?',
        answer: 'Kolligative Eigenschaften sind physikalische Eigenschaften einer Lösung, die nur von der Anzahl (Konzentration) der gelösten Teilchen abhängen, nicht von deren chemischer Natur. Dazu gehören Siedepunkterhöhung, Gefrierpunktserniedrigung, Dampfdruckerniedrigung und osmotischer Druck.'
      },
      klinischerBezug: 'Die **Osmolarität** des Blutplasmas beträgt etwa 290 mOsmol/L. Infusionslösungen müssen **isoton** sein (gleiche Osmolarität wie Blut). In **hypotoner Lösung** (z. B. destilliertes Wasser) schwellen Erythrozyten an und platzen (**osmotische Hämolyse**). In **hypertoner Lösung** (z. B. 3 % NaCl) schrumpfen sie (**Krenation**). **Physiologische Kochsalzlösung** (0,9 % NaCl, entspricht 154 mmol/L) und **5 % Glucoselösung** sind isoton zum Blut. Die **Gefrierpunktserniedrigung** wird in der Labormedizin zur Bestimmung der Osmolalität von Körperflüssigkeiten mittels **Kryoskopie** genutzt. Prinzip: Je mehr gelöste Teilchen, desto stärker sinkt der Gefrierpunkt.',
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
