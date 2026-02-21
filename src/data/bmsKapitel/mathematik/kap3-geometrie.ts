import type { Kapitel } from '../types';

export const mathKap3: Kapitel = {
  id: 'math-kap3',
  title: 'Geometrie',
  subject: 'mathematik',
  icon: '📐',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ma-3-01',
      title: 'Ebene Geometrie — Winkel, Dreiecke und Kreise',
      content: `# Ebene Geometrie — Winkel, Dreiecke und Kreise

Die ebene Geometrie beschäftigt sich mit zweidimensionalen Figuren und ihren Eigenschaften. Für den MedAT sind insbesondere Dreiecksberechnungen und Kreisgeometrie relevant, da sie in der Anatomie (Querschnittsflächen von Gefäßen), der Physiologie (Kreisförmige Strukturen wie Erythrozyten) und der Bildgebung (CT-Querschnitte) vorkommen.

## Winkel und ihre Beziehungen

Ein Vollwinkel beträgt 360°, ein gestreckter Winkel 180°, ein rechter Winkel 90°, ein spitzer Winkel liegt zwischen 0° und 90°, ein stumpfer Winkel zwischen 90° und 180°.

Wichtige Winkelbeziehungen:
- **Scheitelwinkel:** Zwei sich schneidende Geraden bilden Scheitelwinkel, die gleich groß sind (α = α').
- **Nebenwinkel:** Benachbarte Winkel an einer Geraden ergänzen sich zu 180°.
- **Stufenwinkel (Wechselwinkel):** Bei parallelen Geraden mit Schnittgerade: gleich große Winkel auf derselben Seite (F-Winkel) oder der Wechselseite (Z-Winkel).
- **Supplementärwinkel:** Zwei Winkel, die zusammen 180° ergeben.
- **Komplementärwinkel:** Zwei Winkel, die zusammen 90° ergeben.

## Das Dreieck

Das Dreieck ist die grundlegendste Flächenfigur. Die Innenwinkelsumme beträgt immer 180° — für jedes beliebige Dreieck in der Ebene. Das ist ein fundamentaler Satz der euklidischen Geometrie.

**Dreiecksarten:**
- Gleichseitiges Dreieck: alle Seiten und Winkel gleich (60°-60°-60°)
- Gleichschenkliges Dreieck: zwei gleiche Seiten, zwei gleiche Basiswinkel
- Rechtwinkliges Dreieck: ein Winkel genau 90°; Seiten: zwei Katheten (a, b) und Hypotenuse (c)
- Stumpfwinkliges Dreieck: ein Winkel > 90°
- Spitzwinkliges Dreieck: alle Winkel < 90°

**Flächenformel:** A = ½ × Grundlinie × Höhe = ½ × g × h. Die Höhe muss senkrecht zur Grundlinie stehen.

## Der Satz des Pythagoras

Im rechtwinkligen Dreieck gilt: a² + b² = c², wobei c die Hypotenuse (längste Seite, gegenüber dem rechten Winkel) ist. Dieser Satz ist eine der wichtigsten mathematischen Formeln überhaupt. Er erlaubt die Berechnung der dritten Seite, wenn zwei Seiten bekannt sind.

Typische pythagoräische Tripel: (3, 4, 5); (5, 12, 13); (8, 15, 17). Merke: 3² + 4² = 9 + 16 = 25 = 5².

Umkehrung: Wenn a² + b² = c², dann ist das Dreieck rechtwinklig. Diese Umkehrung ist am MedAT manchmal relevant.

## Kreisgeometrie

Der Kreis mit Radius r hat:
- Umfang: U = 2πr = πd (d = Durchmesser = 2r)
- Fläche: A = πr²

π ≈ 3,14159... Für Näherungsrechnungen: π ≈ 3,14 oder π ≈ 22/7.

**Bogenlänge:** Der Bogen eines Kreissektors mit Winkel α (in Grad) hat die Länge b = (α/360°) × 2πr. In Bogenmaß (Radiant): b = r × α_rad.

**Kreissektor-Fläche:** A_Sektor = (α/360°) × πr².

**Satz des Thales:** Der Peripheriewinkel über dem Durchmesser eines Kreises ist immer 90°. Anders gesagt: Wenn A und B die Endpunkte eines Durchmessers sind und C ein beliebiger Punkt auf dem Kreis, ist der Winkel ACB = 90°. Dieser Satz hat praktische Bedeutung in der Konstruktionslehre.

## Medizinische Anwendungen

Kreisförmige Querschnitte spielen in der Medizin eine große Rolle. Das Gesetz von Hagen-Poiseuille beschreibt den Blutfluss durch Gefäße: Q ∝ r⁴. Eine Halbierung des Gefäßradius reduziert den Fluss auf 1/16! Die Fläche eines Gefäßquerschnitts (A = πr²) bestimmt den Widerstand und damit den Blutdruck. In der Radiologie werden CT-Querschnittsflächen von Tumoren oder Organen gemessen.`,
      lernziele: [
        'Winkelbeziehungen (Scheitelwinkel, Neben-, Stufenwinkel) benennen und berechnen',
        'Den Satz des Pythagoras anwenden und pythagoräische Tripel kennen',
        'Flächeninhalt und Umfang von Dreiecken und Kreisen berechnen',
        'Bogenlänge und Kreissektor-Fläche berechnen',
      ],
      sections: [
        {
          heading: 'Winkel — Grundbegriffe und Beziehungen',
          text: 'Vollwinkel 360°, Halbkreis 180°, rechter Winkel 90°. Scheitelwinkel sind gleich groß (entstehen beim Schnitt zweier Geraden). Supplementärwinkel ergänzen sich zu 180°, Komplementärwinkel zu 90°. Bei parallelen Geraden gilt: Stufenwinkel (F-Winkel) sind gleich, Wechselwinkel (Z-Winkel) sind gleich. Diese Beziehungen sind die Basis für Beweise in der Geometrie und erscheinen in Trigonometrieaufgaben wieder.',
          merksatz: 'Innenwinkelsumme im Dreieck = 180°; beim Viereck = 360° (= 2 Dreiecke)',
        },
        {
          heading: 'Pythagoras und rechtwinkliges Dreieck',
          text: 'a² + b² = c² — nur im rechtwinkligen Dreieck! Häufiger Fehler: Pythagoras auf alle Dreiecke anwenden. Die Hypotenuse c ist immer die Seite gegenüber dem rechten Winkel und damit die längste Seite. Typische MedAT-Aufgabe: Gegeben zwei Seiten, finde die dritte. Praktische Tripel auswendig kennen: (3,4,5), (5,12,13), (6,8,10 = 2×(3,4,5)). In der Anatomie: Pythagoras erscheint bei der Berechnung diagonaler Abstände in der Bildgebung.',
        },
        {
          heading: 'Kreisformeln und medizinische Bedeutung',
          text: 'Kreisumfang U = 2πr, Fläche A = πr². Der Radius geht quadratisch in die Fläche ein — das ist der Kern des Hagen-Poiseuille-Gesetzes. Ein Arteriosklerose-bedingtes Lumen von 50% bedeutet nur noch 25% der ursprünglichen Querschnittsfläche. Bei A = πr² ist eine Halbierung von r eine Vierteilung von A. Diese geometrische Tatsache hat enorme klinische Konsequenzen: Der Strömungswiderstand steigt (nach Poiseuille: R ∝ 1/r⁴), was zu Hypertonie führen kann.',
        },
      ],
      merksätze: [
        'Pythagoras NUR im rechtwinkligen Dreieck: a² + b² = c² (c = Hypotenuse)',
        'Kreis: Umfang U = 2πr; Fläche A = πr²; Radius geht quadratisch in A ein',
        'Innenwinkelsumme Dreieck = 180°; Satz des Thales: Halbkreisperipherie = 90°',
      ],
      altfrage: {
        question: 'Ein Koronararterie hat einen Innendurchmesser von 4 mm. Nach einer Stenose beträgt der Durchmesser noch 2 mm. Um das Wievielfache hat sich die Querschnittsfläche verändert?',
        answer: 'Ursprüngliche Fläche: A₁ = π(2 mm)² = 4π mm². Neue Fläche: A₂ = π(1 mm)² = π mm². Verhältnis: A₂/A₁ = π/4π = 1/4. Die Querschnittsfläche hat sich auf ein Viertel reduziert. Achtung: Der Radius halbiert sich (von 2 mm auf 1 mm), aber die Fläche wird auf 1/4 reduziert (Faktor r²).',
      },
      klinischerBezug: 'Das Gesetz von Hagen-Poiseuille beschreibt den Volumenstrom durch ein Gefäß: Q = (π × r⁴ × ΔP) / (8 × η × L). Der Radius geht zur vierten Potenz ein — das bedeutet, eine Halbierung des Gefäßradius reduziert den Fluss auf 1/16 (6,25%)! Dieses geometrische Faktum erklärt, warum selbst moderate Stenosen (Einengungen) einen dramatischen Effekt auf die Organdurchblutung haben und warum die Revaskularisierung (z.B. Ballondilatation, Stent) so wirksam ist.',
      selfTest: [
        {
          question: 'Ein rechtwinkliges Dreieck hat Katheten a = 6 cm und b = 8 cm. Wie lang ist die Hypotenuse c?',
          options: ['10 cm', '14 cm', '100 cm', '7 cm', '√20 cm'],
          correctIndex: 0,
          explanation: 'c² = a² + b² = 36 + 64 = 100 → c = √100 = 10 cm. Das ist das bekannte pythagoräische Tripel (6, 8, 10) = 2×(3, 4, 5).',
          hints: ['Pythagoras: a² + b² = c². c² = 6² + 8² = 36 + 64.', '√100 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Fläche hat ein Kreis mit Radius 5 cm? (π ≈ 3,14)',
          options: ['78,5 cm²', '31,4 cm²', '15,7 cm²', '25 cm²', '157 cm²'],
          correctIndex: 0,
          explanation: 'A = π × r² = 3,14 × 25 = 78,5 cm². Achtung: Es geht r² in die Formel ein, nicht r. 5² = 25, dann × π.',
          hints: ['A = π × r². Was ist 5²?', '3,14 × 25 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Die Innenwinkelsumme eines Fünfecks beträgt?',
          options: ['540°', '360°', '720°', '180°', '450°'],
          correctIndex: 0,
          explanation: 'Ein n-Eck hat Innenwinkelsumme (n−2) × 180°. Für n=5: (5−2) × 180° = 3 × 180° = 540°. Das Fünfeck kann in 3 Dreiecke zerlegt werden.',
          hints: ['Formel: (n−2) × 180° für ein n-Eck. n = 5.', '(5−2) × 180° = 3 × 180°.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie lang ist der Bogen eines Kreises mit r = 10 cm bei einem Mittelpunktswinkel von 90°?',
          options: ['5π cm', '10π cm', '20π cm', '2,5π cm', '100π cm'],
          correctIndex: 0,
          explanation: 'Bogenlänge = (α/360°) × 2πr = (90/360) × 2π × 10 = (1/4) × 20π = 5π cm ≈ 15,7 cm. 90° entspricht einem Viertelkreis, also einem Viertel des Gesamtumfangs.',
          hints: ['Bogenlänge = (α/360°) × Gesamtumfang. 90°/360° = 1/4.', '(1/4) × 2π × 10 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'In einem rechtwinkligen Dreieck gilt der Satz des Thales: Wo liegt die Hypotenuse relativ zum Umkreis?',
          options: ['Sie ist der Durchmesser des Umkreises', 'Sie geht durch den Mittelpunkt', 'Sie ist die kürzeste Seite', 'Sie halbiert den Umkreis tangential', 'Sie liegt außerhalb des Umkreises'],
          correctIndex: 0,
          explanation: 'Nach dem Satz des Thales: Wenn ein Winkel in einem Dreieck ein Halbkreis-Peripheriewinkel ist (= 90°), dann ist die gegenüberliegende Seite der Durchmesser des Umkreises. Umgekehrt: die Hypotenuse eines rechtwinkligen Dreiecks ist stets der Durchmesser des Umkreises.',
          hints: ['Satz des Thales: Peripheriewinkel über dem Durchmesser = 90°.', 'Das rechtwinklige Dreieck hat seinen rechten Winkel auf dem Halbkreisbogen — seine Hypotenuse ist der Durchmesser.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Dreieck hat die Winkel 40° und 75°. Wie groß ist der dritte Winkel?',
          options: ['65°', '75°', '115°', '180°', '45°'],
          correctIndex: 0,
          explanation: 'Innenwinkelsumme = 180°. Dritter Winkel = 180° − 40° − 75° = 65°. Probe: 40° + 75° + 65° = 180°. Das Dreieck ist spitzwinklig (alle Winkel unter 90°).',
          hints: ['Innenwinkelsumme = 180°. Bekannte Winkel: 40° + 75°.', '180° − (40° + 75°) = ?'],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-3-02',
      title: 'Körper — Volumen und Oberfläche',
      content: `# Körper — Volumen und Oberfläche

Die Berechnung von Volumina und Oberflächen dreidimensionaler Körper ist nicht nur Prüfungsstoff, sondern hat direkte medizinische Bedeutung: Lungenvolumen, Herzvolumen, Gallensteinvolumen, Tumorvolumen — all das sind klinisch relevante Größen, für die geometrische Formeln genutzt werden.

## Quader

Der Quader (Rechteckige Box) hat Länge l, Breite b und Höhe h.
- Volumen: V = l × b × h
- Oberfläche: O = 2(lb + lh + bh) — drei verschiedene Paare von Seiten, jeweils doppelt

Spezialfall Würfel: l = b = h = a → V = a³; O = 6a².

Beispiel: Ein Quader mit 3 cm × 4 cm × 5 cm hat V = 60 cm³ und O = 2(12+15+20) = 2×47 = 94 cm².

## Zylinder

Der Zylinder hat Radius r und Höhe h.
- Volumen: V = π × r² × h (= Kreisfläche × Höhe)
- Mantelfläche: M = 2π × r × h (= Umfang × Höhe; das "Ausrollen" des Zylindermantels ergibt ein Rechteck)
- Gesamtoberfläche: O = M + 2 × Grundfläche = 2πrh + 2πr²

In der Medizin: Ein Blutgefäß ähnelt einem Zylinder. Sein Volumen V = πr²L (L = Länge) ist relevant für die Berechnung des Blutvolumens in einem Organsystem.

## Kegel

Der Kegel hat Radius r, Höhe h und Slant Height (Mantellinie) s = √(r² + h²).
- Volumen: V = ⅓ × π × r² × h (ein Drittel des Zylindervolumens gleicher Basis und Höhe)
- Mantelfläche: M = π × r × s
- Gesamtoberfläche: O = πrs + πr²

Merksatz: Das Kegelvolumen ist genau ein Drittel des entsprechenden Zylindervolumens. Das gilt analog für Pyramide und Quader: V_Pyramide = ⅓ × Grundfläche × Höhe.

## Kugel

Die Kugel mit Radius r hat:
- Volumen: V = (4/3) × π × r³
- Oberfläche: O = 4 × π × r²

Die Kugelformel ist die kompakteste: Der Radius geht kubisch ins Volumen und quadratisch in die Oberfläche ein. Eine Verdopplung des Radius verachtfacht das Volumen (2³ = 8) und vervierfacht die Oberfläche (2² = 4).

In der Medizin: Gallensteine, Nierensteine und viele Tumoren werden als Kugeln angenähert. Das Volumen eines Tumors mit Durchmesser 2 cm: V = (4/3)π(1 cm)³ = 4,19 cm³. Eine Verdopplung des Durchmessers (auf 4 cm, Radius 2 cm) würde das Volumen auf 33,5 cm³ verachtfachen!

## Pyramide

Die Pyramide hat Grundfläche G und Höhe h.
- Volumen: V = ⅓ × G × h

Die Grundfläche kann ein beliebiges Vieleck sein (Quadrat, Rechteck, Dreieck...).

## Klinische Bezüge

Lungenvolumina: Das totale Lungenvolumen (TLC) beträgt ~6 L, die Vitalkapazität ~4,5 L. Anatomisch ist die Lunge kein einfacher Körper, aber CT-basierte Volumetrie approximiert Lungenabschnitte mit ellipsoiden oder zylindrischen Formen. Das Herzvolumen (~900 mL) wird echokardiografisch aus einer modifizierten Kugelformel geschätzt. Nierensteine werden mit dem Produkt dreier Durchmesser und einem Korrekturfaktor volumetriert.`,
      lernziele: [
        'Volumen und Oberfläche von Quader, Zylinder, Kegel und Kugel berechnen',
        'Das Verhältnis Kegel-Volumen zu Zylinder-Volumen (1:3) kennen',
        'Den Einfluss des Radius auf Volumen und Oberfläche der Kugel erklären',
      ],
      sections: [
        {
          heading: 'Quader und Würfel',
          text: 'V = l×b×h; O = 2(lb+lh+bh). Beim Würfel vereinfacht sich alles: V = a³, O = 6a². Ein häufiger Fehler ist, die Oberfläche falsch zu berechnen — es gibt 6 Flächen (drei Paare je 2). In der Medizin: Zelldimensionen werden oft als quaderförmig angenähert. Ein Hepatozyt (Leberzelle) ist ca. 20 μm × 20 μm × 20 μm (annähernd würfelförmig) mit V ≈ 8000 μm³.',
          merksatz: 'Quader-Oberfläche O = 2(lb+lh+bh) — je 2 gleiche gegenüberliegende Flächen',
        },
        {
          heading: 'Zylinder, Kegel und Pyramide',
          text: 'Zylinder: V = πr²h (Kreis × Höhe), O = 2πr(h+r). Kegel: V = (1/3)πr²h — ein Drittel des Zylinders! Pyramide: V = (1/3)×G×h. Das "Drittel" ist keine Zufälligkeit, sondern eine tiefe geometrische Wahrheit: Man kann einen Würfel in exakt 3 Pyramiden zerlegen. In der Bildgebung werden kegelförmige Strukturen wie der Herzspitze oder Gewebszipfel mit Kegelformeln angenähert.',
        },
        {
          heading: 'Kugel — das effizienteste Volumen',
          text: 'V = (4/3)πr³; O = 4πr². Die Kugel hat unter allen Körpern das günstigste Volumen/Oberfläche-Verhältnis (V/O = r/3). Das ist biologisch relevant: Zellen, Gallensteine, viele Zellkerne, Fetttröpfchen — all diese Strukturen sind kugelförmig, weil die Kugelform die Oberfläche (und damit den Materialaufwand) bei gegebenem Volumen minimiert. Das Tumorvolumen wird klinisch oft als V = (π/6) × L × W × H (drei senkrechte Achsen) abgeschätzt.',
        },
      ],
      merksätze: [
        'Kegel/Pyramide = 1/3 × (enstprechender Zylinder/Quader gleicher Basis und Höhe)',
        'Kugel: V = (4/3)πr³; O = 4πr²; Radius-Verdopplung → Volumen ×8, Oberfläche ×4',
        'Zylinder: V = πr²h; Mantel = 2πrh; Gesamtoberfläche = 2πr(h+r)',
      ],
      altfrage: {
        question: 'Ein Tumor hat einen Durchmesser von 3 cm und wird als Kugel angenähert. Wie groß ist sein Volumen? (π ≈ 3,14)',
        answer: 'Radius r = 1,5 cm. V = (4/3) × π × r³ = (4/3) × 3,14 × (1,5)³ = (4/3) × 3,14 × 3,375 = 4,189 × 3,375 ≈ 14,1 cm³. Der Tumor hat ein Volumen von ca. 14 cm³. (Exakt: 4,5π cm³ ≈ 14,14 cm³)',
      },
      klinischerBezug: 'In der Onkologie wird das Tumorvolumen für die Therapieplanung und -kontrolle berechnet. Bei der RECIST-Kriterien (Response Evaluation Criteria in Solid Tumors) wird der längste Tumordurchmesser gemessen. Eine Abnahme um ≥ 30% gilt als partielles Ansprechen. Da das Volumen mit r³ skaliert, entspricht eine 30%ige Längenabnahme einer Volumenreduktion auf (0,7)³ ≈ 34% des Ausgangsvolumens — eine Abnahme um 66% des Volumens! Diese geometrische Relation verdeutlicht, warum Längenmessungen das Tumorgeschehen gut repräsentieren.',
      selfTest: [
        {
          question: 'Ein Zylinder hat r = 3 cm und h = 10 cm. Wie groß ist sein Volumen? (π ≈ 3,14)',
          options: ['282,6 cm³', '188,4 cm³', '94,2 cm³', '31,4 cm³', '942 cm³'],
          correctIndex: 0,
          explanation: 'V = π × r² × h = 3,14 × 9 × 10 = 282,6 cm³. Schritt 1: r² = 9. Schritt 2: 3,14 × 9 = 28,26. Schritt 3: × 10 = 282,6.',
          hints: ['V = π × r² × h. r² = 3² = 9.', '3,14 × 9 × 10 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Kugel hat den Radius 6 cm. Wie groß ist ihre Oberfläche? (π ≈ 3,14)',
          options: ['452,16 cm²', '904,32 cm²', '113,04 cm²', '288 cm²', '150,72 cm²'],
          correctIndex: 0,
          explanation: 'O = 4 × π × r² = 4 × 3,14 × 36 = 452,16 cm². Schritt 1: r² = 36. Schritt 2: 4 × 3,14 = 12,56. Schritt 3: 12,56 × 36 = 452,16.',
          hints: ['O = 4πr². r² = 6² = 36.', '4 × 3,14 × 36 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Kegel hat dieselbe Grundfläche und Höhe wie ein Zylinder mit V = 90 cm³. Wie groß ist das Kegelvolumen?',
          options: ['30 cm³', '45 cm³', '270 cm³', '60 cm³', '90 cm³'],
          correctIndex: 0,
          explanation: 'Das Kegelvolumen ist genau 1/3 des entsprechenden Zylindervolumens (bei gleicher Grundfläche und Höhe). V_Kegel = (1/3) × 90 = 30 cm³.',
          hints: ['Wie verhält sich Kegel zu Zylinder mit gleicher Basis und Höhe?', 'V_Kegel = (1/3) × V_Zylinder.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Kugel verdoppelt ihren Radius. Um das Wievielfache steigt ihr Volumen?',
          options: ['8-fach', '2-fach', '4-fach', '6-fach', '3-fach'],
          correctIndex: 0,
          explanation: 'V = (4/3)πr³. Bei doppeltem Radius r → 2r: V_neu = (4/3)π(2r)³ = (4/3)π × 8r³ = 8 × V_alt. Das Volumen steigt auf das 8-Fache (2³ = 8). Dies gilt für alle Größen, die kubisch vom Radius abhängen.',
          hints: ['V proportional zu r³. Was ist (2r)³?', '(2r)³ = 2³ × r³ = 8r³.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Würfel hat die Kantenlänge 4 cm. Wie groß ist seine Oberfläche?',
          options: ['96 cm²', '64 cm²', '48 cm²', '16 cm²', '24 cm²'],
          correctIndex: 0,
          explanation: 'Würfeloberfläche O = 6a² = 6 × 4² = 6 × 16 = 96 cm². Ein Würfel hat 6 gleiche quadratische Seiten mit je a² Fläche.',
          hints: ['Ein Würfel hat 6 gleiche quadratische Seiten. Jede hat Fläche a².', 'O = 6 × 4² = 6 × 16.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein zylindrisches Blutgefäß hat r = 2 mm und Länge 15 cm = 150 mm. Welches Volumen Blut enthält es? (π ≈ 3,14)',
          options: ['1884 mm³', '942 mm³', '3768 mm³', '628 mm³', '471 mm³'],
          correctIndex: 0,
          explanation: 'V = π × r² × h = 3,14 × 4 × 150 = 1884 mm³ ≈ 1,884 mL. Schritt 1: r² = 4. Schritt 2: 3,14 × 4 × 150 = 12,56 × 150 = 1884.',
          hints: ['V = π × r² × Länge. r = 2 mm, Länge = 150 mm.', '3,14 × 4 × 150 = ?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-3-03',
      title: 'Ähnlichkeit, Trigonometrie und Koordinatengeometrie',
      content: `# Ähnlichkeit, Trigonometrie und Koordinatengeometrie

Trigonometrie und Koordinatengeometrie erweitern die ebene Geometrie auf Berechnungen mit Winkeln und im Koordinatensystem. Diese Konzepte verbinden sich in der Medizin: Die EKG-Herzachse wird in Grad angegeben, Ultraschall-Winkel bestimmen Bildauflösungen, und Distanzberechnungen in der 3D-Anatomie nutzen Koordinatengeometrie.

## Ähnlichkeit

Zwei Figuren sind ähnlich, wenn sie dieselbe Form, aber verschiedene Größen haben. Der Streckungsfaktor k gibt das Verhältnis entsprechender Seiten an.

Bei ähnlichen Figuren:
- Entsprechende Strecken: Verhältnis k (linear)
- Entsprechende Flächen: Verhältnis k² (quadratisch)
- Entsprechende Volumina: Verhältnis k³ (kubisch)

Beispiel: Zwei geometrisch ähnliche Tumoren, einer doppelt so groß (k=2). Der kleinere hat V = 5 cm³. Der größere hat V = 5 × 2³ = 40 cm³.

## Trigonometrie im rechtwinkligen Dreieck

Die drei trigonometrischen Grundfunktionen sind im rechtwinkligen Dreieck wie folgt definiert (Mnemonik: SOH-CAH-TOA):

- **sin(α) = Gegenkathete / Hypotenuse** (S = G/H)
- **cos(α) = Ankathete / Hypotenuse** (C = A/H)
- **tan(α) = Gegenkathete / Ankathete = sin(α)/cos(α)** (T = G/A)

SOH-CAH-TOA: Sin = Opposite/Hypotenuse; Cos = Adjacent/Hypotenuse; Tan = Opposite/Adjacent.

## Wichtige Winkelwerte

| Winkel | sin | cos | tan |
|--------|-----|-----|-----|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | 1/√3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | ∞ |

Merkhilfen: sin(30°) = 1/2 (einfachster Wert); sin(60°) = cos(30°) = √3/2; sin(45°) = cos(45°) = √2/2 ≈ 0,707.

## Koordinatengeometrie

Im kartesischen Koordinatensystem (x, y) gelten folgende Formeln:

**Abstand zwischen zwei Punkten P₁(x₁,y₁) und P₂(x₂,y₂):**
d = √((x₂−x₁)² + (y₂−y₁)²)

Das ist der Satz des Pythagoras im Koordinatensystem: Die Differenzen der Koordinaten sind die Katheten, der Abstand ist die Hypotenuse.

**Mittelpunkt zwischen P₁ und P₂:**
M = ((x₁+x₂)/2, (y₁+y₂)/2)

**Geradengleichung:** y = mx + b, wobei m die Steigung (m = tan(α)) und b der y-Achsenabschnitt ist.

**Steigung zwischen zwei Punkten:** m = (y₂−y₁) / (x₂−x₁)

Zwei Geraden sind parallel, wenn sie dieselbe Steigung haben (m₁ = m₂). Sie sind senkrecht zueinander, wenn m₁ × m₂ = −1.

## Klinische Anwendungen

Die EKG-Herzachse wird als Winkel angegeben (z.B. 60° = normale Achse, >90° = Rechtstyp). In der Doppler-Sonographie hängt die gemessene Strömungsgeschwindigkeit vom Messwinkel ab: v_gemessen = v_real × cos(α). Bei α = 60° wird nur cos(60°) = 0,5 der tatsächlichen Geschwindigkeit erfasst — eine systematische Unterschätzung. Daher soll der Doppler-Winkel unter 60° gehalten werden.`,
      lernziele: [
        'Den Streckungsfaktor k und seinen Einfluss auf Fläche (k²) und Volumen (k³) anwenden',
        'sin, cos, tan im rechtwinkligen Dreieck definieren und berechnen (SOH-CAH-TOA)',
        'Wichtige Winkelwerte (30°, 45°, 60°) auswendig kennen',
        'Abstand, Mittelpunkt und Geradengleichung im Koordinatensystem berechnen',
      ],
      sections: [
        {
          heading: 'Ähnlichkeit und Streckungsfaktor',
          text: 'Ähnliche Figuren haben identische Winkel und proportionale Seiten. Der Streckungsfaktor k gilt: Seiten × k, Flächen × k², Volumina × k³. Das ist die geometrische Erklärung für das Skalierungsverhalten biologischer Organismen: Wenn ein Tier doppelt so groß ist (k=2), hat es 4× die Körperoberfläche, aber 8× das Volumen. Das Verhältnis Oberfläche/Volumen sinkt — das erklärt, warum kleine Tiere (Mäuse) einen höheren Grundumsatz pro kg haben als große (Elefanten).',
          merksatz: 'Ähnlichkeit: Längen × k, Flächen × k², Volumina × k³',
        },
        {
          heading: 'SOH-CAH-TOA — Trigonometrie merken',
          text: 'SOH: Sin = Gegenkathete/Hypotenuse. CAH: Cos = Ankathete/Hypotenuse. TOA: Tan = Gegenkathete/Ankathete. Die "Gegenkathete" ist die dem Winkel α gegenüberliegende Kathete; die "Ankathete" liegt am Winkel α an. sin²(α) + cos²(α) = 1 ist die wichtigste trigonometrische Identität. Tan kann man immer aus sin und cos berechnen: tan = sin/cos.',
        },
        {
          heading: 'Koordinatengeometrie — Abstand und Steigung',
          text: 'Abstand d = √((Δx)² + (Δy)²) — Pythagoras im Koordinatensystem. Steigung m = Δy/Δx = tan(Neigungswinkel). Eine horizontale Gerade hat m=0; eine vertikale Gerade hat undefinierte Steigung (senkrechte Gerade). Senkrechte Geraden: m₁ × m₂ = −1, also m₂ = −1/m₁ (negativer Kehrwert). Diese Beziehung erscheint in der Geometrie bei der Konstruktion von Senkrechten und in der Analysis bei Normalen zu Kurven.',
        },
      ],
      merksätze: [
        'SOH-CAH-TOA: sin=Gegenkathete/Hyp; cos=Ankathete/Hyp; tan=sin/cos',
        'sin(30°)=0,5; sin(45°)=cos(45°)=√2/2≈0,707; sin(60°)=√3/2≈0,866',
        'Abstand im Koordinatensystem: d = √((x₂−x₁)² + (y₂−y₁)²)',
      ],
      altfrage: {
        question: 'Ein Dachträger bildet mit der Horizontalen einen Winkel von 30°. Die Hypotenuse (Dachseite) ist 10 m lang. Wie hoch ist der Dachfirst (Gegenkathete)?',
        answer: 'sin(30°) = Gegenkathete / Hypotenuse → Gegenkathete = Hypotenuse × sin(30°) = 10 m × 0,5 = 5 m. Der Dachfirst ist 5 m hoch. Zur Kontrolle: cos(30°) = Ankathete/10 → Ankathete = 10 × √3/2 ≈ 8,66 m. Pythagoras: 5² + 8,66² ≈ 25 + 75 = 100 = 10².',
      },
      klinischerBezug: 'In der Doppler-Sonographie wird die Blutflussgeschwindigkeit über den Dopplereffekt gemessen. Die gemessene Frequenzverschiebung hängt vom Winkel zwischen Schallstrahl und Gefäßachse ab: v = c × Δf / (2 × f₀ × cos(α)). Bei α = 0° (Schall parallel zum Gefäß) wird cos(0°) = 1 — maximale Genauigkeit. Bei α = 90° wird cos(90°) = 0 — kein Dopplersignal! Daher: Doppler-Winkel immer unter 60° halten (cos(60°) = 0,5). Diese trigonometrische Abhängigkeit ist klinisch essentiell für korrekte Flussmessungen.',
      selfTest: [
        {
          question: 'Was ergibt sin(60°)?',
          options: ['√3/2', '1/2', '√2/2', '1', '√3'],
          correctIndex: 0,
          explanation: 'sin(60°) = √3/2 ≈ 0,866. Im 30-60-90-Dreieck mit Hypotenuse 2: Gegenkathete zu 60° ist √3, zu 30° ist 1. sin(60°) = √3/2.',
          hints: ['Im 30-60-90-Dreieck (Hypotenuse 2, kürzere Kathete 1, längere √3).', 'sin(60°) = Gegenkathete zu 60° / Hypotenuse = √3/2.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Der Abstand zwischen P₁(1, 2) und P₂(4, 6) beträgt?',
          options: ['5', '7', '√7', '3', '25'],
          correctIndex: 0,
          explanation: 'd = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5. Das ist das pythagoräische Tripel (3, 4, 5). Δx = 3, Δy = 4, d = 5.',
          hints: ['Abstandsformel: d = √((Δx)² + (Δy)²). Δx = 4−1, Δy = 6−2.', '√(3² + 4²) = √(9+16) = √25 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Gerade hat Steigung m = 3 und geht durch (0, 2). Was ist die Gleichung?',
          options: ['y = 3x + 2', 'y = 2x + 3', 'y = 3x − 2', 'y = x + 5', 'y = 3x'],
          correctIndex: 0,
          explanation: 'Geradengleichung: y = mx + b. Steigung m = 3; b = y-Achsenabschnitt = 2 (da die Gerade bei x=0 den Wert 2 hat). Gleichung: y = 3x + 2.',
          hints: ['y = mx + b. m = 3 ist gegeben.', 'Der Punkt (0, 2) liegt auf der Geraden → y = 2 wenn x = 0 → b = 2.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Zwei ähnliche Nieren haben Längen 10 cm und 15 cm. Wie verhält sich ihr Volumen?',
          options: ['8 : 27', '2 : 3', '4 : 9', '10 : 15', '1 : 3'],
          correctIndex: 0,
          explanation: 'Streckungsfaktor k = 15/10 = 3/2. Volumenverhältnis = k³ = (3/2)³ = 27/8. Das Verhältnis V₁:V₂ = 8:27. Volumina skalieren kubisch mit dem Längenmaßstab.',
          hints: ['Streckungsfaktor k = 15/10 = 1,5. Volumenverhältnis = k³.', '(3/2)³ = 27/8.'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was ergibt tan(45°)?',
          options: ['1', '√2/2', '√3', '0', '√2'],
          correctIndex: 0,
          explanation: 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1. Im gleichschenkligen rechtwinkligen Dreieck (45-45-90) sind beide Katheten gleich lang, daher ist das Verhältnis Gegenkathete/Ankathete = 1.',
          hints: ['tan = sin/cos. Bei 45° gilt sin(45°) = cos(45°).', 'Gleiches geteilt durch Gleiches = 1.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Gerade hat Steigung m₁ = 2. Welche Steigung hat eine senkrechte Gerade?',
          options: ['−1/2', '2', '−2', '1/2', '1'],
          correctIndex: 0,
          explanation: 'Senkrechte Geraden: m₁ × m₂ = −1. m₂ = −1/m₁ = −1/2. Die Steigung der senkrechten Geraden ist der negative Kehrwert der ursprünglichen Steigung.',
          hints: ['Bedingung für senkrechte Geraden: m₁ × m₂ = −1.', 'm₂ = −1/m₁ = −1/2.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
