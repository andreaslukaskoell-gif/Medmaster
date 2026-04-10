import type { Kapitel } from "../types";

export const chemKap6: Kapitel = {
  id: "chem-kap3",
  title: "Chemische Bindung",
  subject: "chemie",
  icon: "🔗",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ch-6-01",
      title: "Ionenbindung — Entstehung und Eigenschaften",
      imageUrl: "/images/bms/ch-ionenbindung.webp",
      imageCaption:
        "Abb.: Elektronenübertragung von Natrium auf Chlor und das resultierende NaCl-Kristallgitter (OpenStax, CC BY 4.0)",
      stichworte: [
        "Ionenbindung",
        "Elektronenübertragung",
        "Gitterenergie",
        "Born-Haber-Kreisprozess",
        "Ionenkristall",
        "Koordinationszahl",
        "Schmelzpunkt",
        "Hydratation",
        "Elektrolyt",
        "Oktettregel",
        "Coulombsches Gesetz",
        "NaCl-Gitter",
      ],
      content: `Kochsalz schmilzt erst bei 801 °C — eine enorme Stabilität, die sich allein durch die elektrostatische Anziehung zwischen Na⁺ und Cl⁻ erklärt.

## Entstehung der Ionenbindung

Die **Ionenbindung** (heteropolare Bindung) entsteht durch vollständige **Elektronenübertragung** von einem Metall auf ein Nichtmetall. Treibende Kraft ist das Bestreben beider Atome, die stabile Edelgaskonfiguration zu erreichen (Oktettregel). Metalle haben niedrige Ionisierungsenergien und geben Elektronen leicht ab; Nichtmetalle besitzen hohe Elektronenaffinitäten (Energiegewinn bei Elektronenaufnahme) und nehmen Elektronen bereitwillig auf. Die Elektronegativitätsdifferenz (Delta-EN) zwischen den Bindungspartnern beträgt typischerweise > 1,7 auf der Pauling-Skala.

**Beispiel NaCl:**
Na (2-8-1) + Cl (2-8-7) -> Na+ (2-8) + Cl- (2-8-8)

Natrium gibt sein einzelnes Valenzelektron ab und wird zum Na+-Kation; Chlor nimmt dieses Elektron auf und wird zum Cl--Anion. Beide besitzen nun die Elektronenkonfiguration von Edelgasen (Neon bzw. Argon).

{{IMAGE}}

> **Merke:** Ionenbindungen entstehen bevorzugt zwischen Elementen der 1./2. Hauptgruppe (Metalle, niedrige IE) und der 6./7. Hauptgruppe (Nichtmetalle, hohe EA). Die EN-Differenz muss > 1,7 betragen.

**Weitere Beispiele:**
- **MgCl2:** Mg gibt 2 Elektronen ab -> Mg2+ (Ne-Konfiguration); jedes Cl nimmt 1 Elektron auf -> 2 Cl- (Ar-Konfiguration)
- **CaO:** Ca gibt 2 Elektronen ab -> Ca2+; O nimmt 2 Elektronen auf -> O2- -- beide erreichen die Ar- bzw. Ne-Konfiguration
- **Al2O3:** Aluminium gibt 3 Elektronen ab -> Al3+; hohe Ladung -> extrem hohe Gitterenergie -> Schmelzpunkt 2072 °C

{{DIAGRAM:ionic-bond}}

## Born-Haber-Kreisprozess und Gitterenergie

Die Elektronenübertragung allein erklärt noch nicht, warum Ionenverbindungen so stabil sind. Der Schlüssel liegt in der enormen Energie, die beim Zusammentreten der Ionen zum Kristallgitter frei wird.

Die **Gitterenergie** U ist die Energie, die freigesetzt wird, wenn gasförmige Ionen zu einem Ionenkristall zusammentreten. Sie ist der entscheidende Energiebeitrag bei der Ionenbindung und kann experimentell nicht direkt gemessen werden. Im Born-Haber-Kreisprozess wird die Bildungsenthalpie einer Ionenverbindung schrittweise aus messbaren Teilenthalpien berechnet:

1. Sublimationsenergie (Energie für den Übergang fest→gasförmig) des Metalls (endotherm): Na(s) -> Na(g), Delta-H = +107 kJ/mol
2. Ionisierungsenergie des Metalls (endotherm): Na(g) -> Na+(g) + e-, Delta-H = +496 kJ/mol
3. Bindungsenergie des Nichtmetalls (endotherm): 1/2 Cl2(g) -> Cl(g), Delta-H = +122 kJ/mol
4. Elektronenaffinität des Nichtmetalls (exotherm): Cl(g) + e- -> Cl-(g), Delta-H = -349 kJ/mol
5. **Gitterenergie** (stark exotherm): Na+(g) + Cl-(g) -> NaCl(s), Delta-H = -786 kJ/mol

Die Summe aller Teilschritte ergibt die Bildungsenthalpie (Wärmetonung bei Bildung aus den Elementen): Delta-Hf(NaCl) = -411 kJ/mol. Die Gitterenergie dominiert als größter exothermer Term und macht die Gesamtreaktion thermodynamisch günstig.

Je kleiner der Ionenradius und je höher die Ladung der Ionen, desto größer die Gitterenergie. Das **Coulombsche Gesetz** beschreibt die elektrostatische Kraft zwischen zwei Punktladungen:

**F = k * (q1 * q2) / r2**

wobei k die Coulomb-Konstante (8,99 * 10 hoch 9 N*m2/C2), q1 und q2 die Ladungen und r der Abstand ist. Die Gitterenergie ist proportional zu q1*q2/r. Daraus folgt:

- **Verdoppelung der Ladung beider Ionen** -> Gitterenergie **4x größer** (nicht 2x!) -> Typische Prüfungsfalle!
- **Halbierung des Ionenabstands** -> Gitterenergie **2x größer**
- **MgO vs. NaCl:** Mg2+*O2- = 4 Ladungseinheiten2 vs. Na+*Cl- = 1 -> allein durch Ladung 4x stärker; zusätzlich kleinere Radien -> Faktor ~5 insgesamt

> **Prüfungstipp:** Bei MedAT-Fragen zur Gitterenergie immer zuerst die Ladungen vergleichen (q1*q2), dann die Radien. Die häufigste Falle: Verdopplung beider Ladungen ergibt Faktor 4, nicht 2. MgO vs. NaCl ist ein Standardbeispiel.

| Verbindung | Gitterenergie (kJ/mol) | Schmelzpunkt (°C) | Begründung |
|---|---|---|---|
| NaCl | -786 | 801 | Einfach geladen, mittlere Radien |
| MgO | -3795 | 2852 | Doppelt geladen, kleine Radien |
| CaF2 | -2630 | 1418 | Ca2+ doppelt geladen, F- sehr klein |
| LiF | -1037 | 845 | Kleinste Ionen bei Einfachladung |
| KBr | -682 | 734 | Größere Ionen -> geringere Gitterenergie |

## Ionenradien -- Trends und Bedeutung

Wir haben gesehen, dass die Gitterenergie vom Produkt der Ionenladungen und vom Ionenabstand abhängt. Um Gitterenergien verschiedener Verbindungen zu vergleichen, müssen wir daher die Ionenradien kennen.

Der **Ionenradius** ist ein zentraler Parameter für Gitterenergie, Koordination und Löslichkeit. Wichtige Trends im Periodensystem:

- **Kationen sind kleiner als ihre Atome:** Elektronenverlust -> weniger Elektronenschalen oder gleiche Schale mit weniger Elektronen -> stärkere effektive Kernladung -> Kontraktion. Beispiel: Na (186 pm) -> Na+ (102 pm); Mg (160 pm) -> Mg2+ (72 pm)
- **Anionen sind größer als ihre Atome:** Elektronengewinn -> zusätzliche Abstoßung -> Expansion. Beispiel: Cl (99 pm) -> Cl- (181 pm); O (60 pm) -> O2- (140 pm)
- **Innerhalb einer Gruppe (PSE abwärts):** Ionenradien nehmen zu (zusätzliche Schalen). Li+ (76 pm) < Na+ (102 pm) < K+ (138 pm) < Rb+ (152 pm) < Cs+ (167 pm)
- **Innerhalb einer Periode (links -> rechts):** Kationenradien nehmen ab bei gleicher Ladung (steigende Kernladung). Na+ (102 pm) > Mg2+ (72 pm) > Al3+ (53,5 pm)
- **Höhere Ladung -> kleinerer Radius:** Fe2+ (78 pm) > Fe3+ (64,5 pm); Mn2+ (83 pm) > Mn4+ (53 pm)

| Ion | Radius (pm) | Edelgaskonfiguration | Ladung |
|---|---|---|---|
| Li+ | 76 | He | +1 |
| Na+ | 102 | Ne | +1 |
| K+ | 138 | Ar | +1 |
| Mg2+ | 72 | Ne | +2 |
| Ca2+ | 100 | Ar | +2 |
| Al3+ | 53,5 | Ne | +3 |
| F- | 133 | Ne | -1 |
| Cl- | 181 | Ar | -1 |
| O2- | 140 | Ne | -2 |
| S2- | 184 | Ar | -2 |

> **Merke:** Kationen schrumpfen (Elektronenverlust -> weniger Abstoßung), Anionen wachsen (Elektronengewinn -> mehr Abstoßung). Diese Radienunterschiede bestimmen direkt die Gitterenergie (Coulomb: E proportional 1/r) und die Koordinationszahl im Kristall.

**Isoelektronische Reihen** (gleiche Elektronenzahl, verschiedene Kernladung): O2- (140 pm) > F- (133 pm) > Ne (keine Ionenform) > Na+ (102 pm) > Mg2+ (72 pm) > Al3+ (53,5 pm). Je höher die Kernladungszahl bei gleicher Elektronenzahl, desto kleiner der Radius -- die steigende Kernladung zieht die Elektronen stärker an.

---

## Struktur des Ionenkristalls

Die Ionenradien bestimmen nicht nur die Gitterenergie, sondern auch die dreidimensionale Anordnung der Ionen im Kristall — und damit den Gittertyp.

Ionenverbindungen bilden **Ionengitter** mit regelmäßiger, periodischer Anordnung. Im **NaCl-Gitter** (kubisch-flächenzentriert) ist jedes Na+ von 6 Cl- umgeben und umgekehrt -- Koordinationszahl (Zahl nächster Nachbaratome) 6. Im CsCl-Gitter (kubisch-raumzentriert) beträgt die Koordinationszahl 8 (größere Ionen passen besser).

Die Packungsgeometrie hängt vom **Radienverhältnis** r+/r- ab:
- r+/r- < 0,41 -> tetraedrische Koordination (Zinkblende-Typ, KZ = 4)
- 0,41-0,73 -> oktaedrische Koordination (NaCl-Typ, KZ = 6)
- > 0,73 -> kubische Koordination (CsCl-Typ, KZ = 8)

| Gittertyp | Koordinationszahl | Radienverhältnis r+/r- | Madelung-Konstante | Beispiele |
|---|---|---|---|---|
| Zinkblende (ZnS) | 4 | < 0,41 | 1,638 | ZnS, CuCl |
| NaCl | 6 | 0,41-0,73 | 1,748 | NaCl, MgO, LiF, KBr |
| CsCl | 8 | > 0,73 | 1,763 | CsCl, CsBr, NH4Cl |
| Fluorit (CaF2) | 8 (Ca2+) / 4 (F-) | -- | 2,519 | CaF2, BaF2, UO2 |

Die **Madelung-Konstante** beschreibt die geometrische Anordnung der Ionen im Gitter und geht als Faktor in die Berechnung der Gitterenergie nach Born-Lande ein. Sie ist für jeden Gittertyp charakteristisch.

> **Merke:** Höhere Koordinationszahlen bedeuten mehr nächste Nachbarn und tendenziell höhere Gitterenergie -- allerdings nur, wenn das Radienverhältnis die entsprechende Koordination erlaubt. Das Radienverhältnis bestimmt die Kristallstruktur.

## Eigenschaften ionischer Verbindungen

Aus der Gitterstruktur und der elektrostatischen Natur der Ionenbindung lassen sich alle wichtigen Eigenschaften ionischer Verbindungen direkt ableiten.

**Hohe Schmelz- und Siedepunkte:** Die Gitterenergie muss vollständig überwunden werden. NaCl schmilzt bei 801 °C, MgO erst bei 2852 °C (höhere Gitterenergie). Zum Vergleich: Molekulare Verbindungen wie Wasser (0/100 °C) oder Ethanol (-114/78 °C) haben wesentlich niedrigere Werte, da dort nur schwache intermolekulare Kräfte überwunden werden müssen.

**Sprödigkeit:** Werden die Ionen durch mechanische Einwirkung verschoben, kommen gleichnamig geladene Ionen nebeneinander zu liegen -> elektrostatische Abstoßung -> Bruch. Ionenkristalle lassen sich nicht plastisch verformen (im Gegensatz zu Metallen, wo das Elektronengas ein Gleiten der Schichten erlaubt).

**Löslichkeit in Wasser:** Polare Wassermoleküle umhüllen die Ionen (Hydratation/Solvatation). Die **Hydratationsenthalpie** muss die Gitterenergie überwiegen, damit sich die Verbindung löst. NaCl: Gitterenergie 786 kJ/mol, Hydratationsenthalpie 783 kJ/mol -> löslich (leicht endotherm, wird durch Entropiegewinn der frei werdenden Ionen kompensiert). MgO: kaum löslich (sehr hohe Gitterenergie übersteigt Hydratationsenthalpie bei Weitem).

**Elektrische Leitfähigkeit:** Ionenkristalle leiten im Festzustand **nicht** (Ionen fixiert). Im geschmolzenen Zustand oder in wässriger Lösung bewegen sich Ionen frei -> Elektrolyte leiten Strom. Man unterscheidet starke Elektrolyte (vollständige Dissoziation/Zerfall in Ionen, z. B. NaCl, HCl) und schwache Elektrolyte (teilweise Dissoziation, z. B. CH3COOH). Wichtig für Biologie: Körperflüssigkeiten sind Elektrolytlösungen.

**Löslichkeitsregeln für Ionenverbindungen (prüfungsrelevant):**

| Regel | Löslich | Schwerlöslich/Unlöslich |
|---|---|---|
| Alkalimetall-Salze (Na+, K+) | Immer löslich | -- |
| Ammonium-Salze (NH4+) | Immer löslich | -- |
| Nitrate (NO3-) | Immer löslich | -- |
| Chloride (Cl-) | Meistens löslich | AgCl, PbCl2, Hg2Cl2 |
| Sulfate (SO42-) | Meistens löslich | BaSO4, PbSO4, CaSO4 (wenig) |
| Carbonate (CO32-) | Nur mit Na+, K+, NH4+ | CaCO3, BaCO3, MgCO3 |
| Hydroxide (OH-) | NaOH, KOH, Ca(OH)2 (wenig) | Mg(OH)2, Fe(OH)3, Al(OH)3 |
| Phosphate (PO43-) | Nur mit Na+, K+, NH4+ | Ca3(PO4)2 (Knochen!), FePO4 |

> **Merke:** Alkalimetallsalze und Nitrate sind IMMER löslich. Carbonate und Phosphate sind meist unlöslich (Ausnahme: Na+, K+, NH4+). BaSO4 ist unlöslich -> Röntgenkontrastmittel. AgCl ist unlöslich.

> **Prüfungstipp:** Die Löslichkeitsregeln werden im MedAT häufig abgefragt. Merkhilfe: „ANNa löst alles" — **A**lkalimetalle, **N**itrate, **N**H4+ sind immer löslich. BaSO4 als Röntgenkontrastmittel und AgCl als Fällungsreaktion sind Klassiker.

## Klinisch relevante Ionenverbindungen

Die Eigenschaften und Löslichkeitsregeln ionischer Verbindungen sind nicht nur Prüfungsstoff — sie haben direkte Bedeutung für den klinischen Alltag.

- **NaCl (Natriumchlorid):** physiologische Kochsalzlösung (0,9 %), Osmolalitätsregulation, Infusionstherapie
- **KCl (Kaliumchlorid):** Elektrolytsubstitution, Herzrhythmus (Hypokaliämie -> Arrhythmie)
- **CaCO3 (Calciumcarbonat):** Knochensubstanz (mit Hydroxylapatit), Antazidum
- **BaSO4 (Bariumsulfat):** Röntgenkontrastmittel (extrem geringe Löslichkeit -> nicht resorbiert, ungiftig trotz toxischer Ba2+-Ionen)

**Elektrolyt-Normwerte im Blutplasma:**

| Elektrolyt | Normalbereich | Funktion | Störung bei Mangel |
|---|---|---|---|
| Na+ | 135-145 mmol/L | Osmotischer Druck, Nervenleitung | Hyponatriämie: Hirnödem |
| K+ | 3,5-5,0 mmol/L | Membranpotenzial, Herzrhythmus | Hypokaliämie: Arrhythmie |
| Ca2+ | 2,2-2,6 mmol/L | Knochen, Gerinnung, Muskelkontraktion | Hypokalzämie: Tetanie |
| Mg2+ | 0,7-1,0 mmol/L | Enzym-Cofaktor (>300 Enzyme) | Hypomagnesiamie: Tremor |`,

      lernziele: [
        "Die Entstehung der Ionenbindung durch Elektronenübertragung und die Rolle der Edelgaskonfiguration erklären können.",
        "Den Born-Haber-Kreisprozess und den Begriff der Gitterenergie verstehen und auf konkrete Beispiele anwenden.",
        "Den Zusammenhang zwischen Ionenladung/-radius und Gitterenergie (Coulombsches Gesetz: E ∝ q₁·q₂/r) kennen.",
        "Ionenradien-Trends im PSE erklären (Kation < Atom, Anion > Atom, isoelektronische Reihen).",
        "Die typischen Eigenschaften ionischer Verbindungen (Schmelzpunkt, Sprödigkeit, Leitfähigkeit, Löslichkeit) aus der Struktur herleiten.",
        "Löslichkeitsregeln für Ionenverbindungen kennen und auf klinische Beispiele anwenden.",
        "Klinisch relevante Ionenverbindungen und Elektrolyt-Normwerte im Blutplasma nennen können.",
      ],

      sections: [
        {
          heading: "Elektronenübertragung und Edelgasregel",
          text: "Bei der Ionenbindung überträgt das Metall eines oder mehrere Valenzelektronen vollständig auf das Nichtmetall. Die Triebkraft ist die Energieabgabe durch Ausbildung der stabilen Edelgaskonfiguration. Die Ionisierungsenergie (Energieaufwand zum Entfernen des Elektrons) wird durch die Elektronenaffinität (Energiegewinn bei der Aufnahme) und vor allem die Gitterenergie mehr als kompensiert.",
          merksatz: "Metall gibt, Nichtmetall nimmt — bis beide eine Edelgashülle besitzen.",
        },
        {
          heading: "Gitterenergie und Born-Haber-Kreisprozess",
          text: "Die Gitterenergie ist die wichtigste Energiegröße bei Ionenverbindungen. Sie steigt mit zunehmender Ionenladung und abnehmendem Ionenradius. MgO hat eine etwa fünffach größere Gitterenergie als NaCl, weshalb MgO einen viel höheren Schmelzpunkt und eine viel geringere Wasserlöslichkeit aufweist. Der Born-Haber-Kreisprozess erlaubt die indirekte Berechnung der Gitterenergie über messbare Enthalpien.",
          merksatz: "Hohe Ladung + kleiner Radius = riesige Gitterenergie = hoher Schmelzpunkt.",
        },
        {
          heading: "Ionenradien und Kristallstruktur",
          text: "Kationen sind kleiner als ihre Atome (Elektronenverlust → stärkere effektive Kernladung → Kontraktion), Anionen sind größer (Elektronengewinn → mehr Abstoßung → Expansion). In isoelektronischen Reihen (gleiche Elektronenzahl) sinkt der Radius mit steigender Kernladung: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺. Das Radienverhältnis r⁺/r⁻ bestimmt die Koordinationszahl und den Gittertyp (< 0,41: KZ 4, 0,41–0,73: KZ 6, > 0,73: KZ 8).",
          merksatz:
            "Kationen schrumpfen, Anionen wachsen. Isoelektronisch: höhere Kernladung = kleinerer Radius.",
        },
        {
          heading: "Eigenschaften und klinische Relevanz",
          text: "Die Eigenschaften ionischer Verbindungen folgen direkt aus ihrer Gitterstruktur. Hohe Schmelzpunkte und Sprödigkeit sind Folge der starken, ungerichteten Coulomb-Kräfte. Löslichkeit in Wasser und elektrische Leitfähigkeit im gelösten Zustand machen Ionenverbindungen zu den wichtigsten Elektrolyten im menschlichen Körper. Elektrolytimbalancen (Na⁺, K⁺, Ca²⁺, Mg²⁺) sind häufige und lebensbedrohliche klinische Probleme.",
          merksatz: "Ionenkristall: fest und spröde; in Lösung: leitfähig und biologisch aktiv.",
        },
        {
          heading: "Löslichkeitsregeln",
          text: "Alkalimetallsalze (Na⁺, K⁺) und Nitrate (NO₃⁻) sind immer löslich. Chloride sind meistens löslich (Ausnahme: AgCl, PbCl₂). Carbonate und Phosphate sind meist unlöslich (wichtig: CaCO₃ in Knochen, Ca₃(PO₄)₂ in Hydroxylapatit). Sulfate: BaSO₄ unlöslich (Röntgenkontrastmittel). Löslichkeit = Bilanz aus Gitterenergie und Hydratationsenthalpie. NaCl löst sich, weil der Entropiegewinn der freien Ionen die leicht endotherme Enthalpie überkompensiert.",
          merksatz:
            "Alkalimetallsalze und Nitrate: IMMER löslich. Carbonate/Phosphate: meist UNlöslich.",
        },
      ],

      merksätze: [
        "Ionenbindung = vollständige Elektronenübertragung vom Metall auf das Nichtmetall.",
        "Beide Bindungspartner streben die Edelgaskonfiguration an (Oktettregel).",
        "Gitterenergie: je höher die Ladung und je kleiner der Radius, desto größer.",
        "MgO > NaCl in Gitterenergie → MgO hat höheren Schmelzpunkt und geringere Löslichkeit.",
        "Ionenkristalle leiten im festen Zustand keinen Strom (Ionen nicht beweglich).",
        "Im wässrigen Zustand dissoziieren Elektrolyte → Stromleitung durch Ionenwanderung.",
        "Sprödigkeit: Ionenverschiebung → Gleichnamige Ionen nebeneinander → Abstoßung → Bruch.",
        "Hydratationsenthalpie muss Gitterenergie annähernd überwinden, damit sich Salze lösen.",
        "Born-Haber-Kreisprozess: Gitterenergie indirekt aus Bildungsenthalpie und Teilschritten.",
        "Coulomb-Gesetz: Verdoppelt man die Ladung beider Ionen → Gitterenergie 4× größer (nicht 2×!).",
        "Kationen < Atome (Elektronenverlust → Kontraktion); Anionen > Atome (Elektronengewinn → Expansion).",
        "Isoelektronische Reihe: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ (höhere Kernladung = kleinerer Radius).",
        "Alkalimetallsalze und Nitrate: IMMER löslich; Carbonate/Phosphate: meist unlöslich.",
        "Klinisch: Na⁺, K⁺, Ca²⁺, Cl⁻ sind essentielle Elektrolyte mit engen Normalbereichen.",
      ],

      altfrage: {
        text: "Welche Aussage zur Ionenbindung in Magnesiumoxid (MgO) ist richtig?",
        options: [
          {
            id: "a",
            text: "MgO hat eine niedrigere Gitterenergie als NaCl, da Mg²⁺ kleiner ist als Na⁺.",
          },
          {
            id: "b",
            text: "Die Gitterenergie von MgO ist deutlich höher als die von NaCl, weil doppelt geladene Ionen stärker wechselwirken.",
          },
          {
            id: "c",
            text: "MgO löst sich besser in Wasser als NaCl, da die Ionen stärker hydratisiert werden.",
          },
          {
            id: "d",
            text: "Bei der Bildung von MgO gibt Sauerstoff zwei Elektronen an Magnesium ab.",
          },
          { id: "e", text: "MgO und NaCl haben nahezu identische Schmelzpunkte." },
        ],
        correctOptionId: "b",
        explanation:
          "MgO hat Gitterenergie von −3795 kJ/mol vs. NaCl −786 kJ/mol. Doppelt geladene Ionen (Mg²⁺, O²⁻) und kleinere Ionenradien ergeben ein viel stärkeres Gitter (Coulomb-Gesetz).",
      },

      klinischerBezug:
        "Ionenverbindungen sind die Grundlage der Elektrolythomöostase im menschlichen Körper: Natriumchlorid reguliert den osmotischen Druck und das Blutvolumen, Kaliumchlorid ist entscheidend für das Membranpotenzial von Herzmuskel- und Nervenzellen. Elektrolytimbalancen (Hypo-/Hyperkaliämie, Hyponatriämie) können lebensbedrohliche Herzrhythmusstörungen oder neurologische Ausfälle verursachen und erfordern sofortige Therapie.",

      selfTest: [
        {
          question:
            "Welche Energiegröße ist der entscheidende Antrieb für die Bildung von Ionenkristallen?",
          options: [
            "Ionisierungsenergie",
            "Gitterenergie",
            "Elektronenaffinität",
            "Sublimationsenergie",
            "Bindungsenergie",
          ],
          correctIndex: 1,
          explanation:
            "Die Gitterenergie ist die bei der Bildung des Ionenkristalls aus gasförmigen Ionen freigesetzte Energie und stellt den größten exothermen Beitrag im Born-Haber-Kreisprozess dar. Obwohl Ionisierungsenergie und Sublimation endotherm sind, überwiegt die stark exotherme Gitterenergie, sodass die Gesamtreaktion exotherm verläuft. Für NaCl beträgt sie −786 kJ/mol, für MgO sogar −3795 kJ/mol.",
          hints: [
            "Denken Sie an Coulombsche Anziehung im Gitter.",
            "Es ist die Energie beim Zusammentreten gasförmiger Ionen.",
          ],
          difficulty: 2,
          tags: ["ionenbindung", "gitterenergie", "born-haber"],
        },
        {
          question: "Warum hat MgO einen deutlich höheren Schmelzpunkt als NaCl?",
          options: [
            "MgO hat eine größere Molmasse als NaCl.",
            "MgO bildet ein anderes Kristallsystem als NaCl.",
            "Mg²⁺ und O²⁻ sind höher geladen und haben kleinere Ionenradien als Na⁺ und Cl⁻.",
            "MgO enthält kovalente Bindungsanteile, die NaCl fehlen.",
            "Sauerstoff hat eine höhere Elektronegativität als Chlor.",
          ],
          correctIndex: 2,
          explanation:
            "Nach dem Coulombschen Gesetz ist die Gitterenergie proportional zu q₁·q₂/r. Mg²⁺ und O²⁻ tragen die doppelte Ladung verglichen mit Na⁺ und Cl⁻ (Faktor 4 im Zähler) und haben zudem kleinere Ionenradien (kleineres r). Beides zusammen führt zu einer rund fünffach höheren Gitterenergie von MgO (~3795 kJ/mol vs. ~786 kJ/mol für NaCl) und damit zu einem Schmelzpunkt von 2852 °C statt 801 °C.",
          hints: [
            "Coulombsches Gesetz: E ∝ q₁·q₂/r.",
            "Betrachten Sie Ladungszahlen und Ionenradien im Vergleich.",
          ],
          difficulty: 3,
          tags: ["mgo", "coulombsches-gesetz", "gitterenergie"],
        },
        {
          question: "Warum leiten Ionenkristalle im festen Zustand keinen elektrischen Strom?",
          options: [
            "Weil sie keine geladenen Teilchen besitzen.",
            "Weil die Elektronen im Gitter delokalisiert sind.",
            "Weil Ionenkristalle keine metallischen Bindungen aufweisen.",
            "Weil die Ionen im Gitter fixiert sind und sich nicht frei bewegen können.",
            "Weil der Schmelzpunkt zu hoch für Ionenmobilität ist.",
          ],
          correctIndex: 3,
          explanation:
            "Elektrischer Strom erfordert bewegliche Ladungsträger. Im festen Ionenkristall sind die Ionen in festen Gitterpositionen gebunden und können sich nicht frei bewegen. Erst beim Schmelzen oder Lösen in Wasser werden die Ionen frei beweglich und können als Ladungsträger fungieren. Dann leiten Ionenverbindungen Strom — man nennt sie dann Elektrolyte. Im festen Zustand sind sie dagegen Nichtleiter.",
          hints: [
            "Ladungsträger müssen frei beweglich sein.",
            "Im Gitter sind Ionen auf festen Positionen gebunden.",
          ],
          difficulty: 2,
          tags: ["leitfähigkeit", "elektrolyt", "ionengitter"],
        },
        {
          question:
            "Welches Salz ist aufgrund seiner sehr hohen Gitterenergie praktisch wasserunlöslich?",
          options: ["NaCl", "KCl", "NaF", "CaCl₂", "MgO"],
          correctIndex: 4,
          explanation:
            "MgO hat eine Gitterenergie von etwa −3795 kJ/mol, da Mg²⁺ und O²⁻ doppelt geladen und verhältnismäßig klein sind. Die Hydratationsenthalpie der Ionen reicht nicht aus, diese enorme Gitterenergie zu überwinden, weshalb MgO in Wasser kaum löslich ist. NaCl, KCl und CaCl₂ dagegen haben deutlich niedrigere Gitterenergien, die von den Hydratationsenthalpien kompensiert werden — sie sind gut wasserlöslich.",
          hints: [
            "Löslichkeit: Hydratationsenthalpie muss Gitterenergie überwinden.",
            "Höhere Ladung → höhere Gitterenergie → schlechtere Löslichkeit.",
          ],
          difficulty: 3,
          tags: ["löslichkeit", "gitterenergie", "hydratation"],
        },
        {
          question: "Im NaCl-Kristallgitter ist jedes Na⁺-Ion von wie vielen Cl⁻-Ionen umgeben?",
          options: ["6", "4", "8", "12", "2"],
          correctIndex: 0,
          explanation:
            "Im NaCl-Gitter (kubisch-flächenzentriert) beträgt die Koordinationszahl 6: Jedes Na⁺-Ion ist von 6 Cl⁻-Ionen oktaedrisch umgeben und umgekehrt. Dies ergibt sich aus dem Radienverhältnis r⁺/r⁻ = 102/181 ≈ 0,56, das im Bereich 0,41–0,73 liegt (oktaedrische Koordination). Im CsCl-Gitter hingegen beträgt die Koordinationszahl 8, da das Radienverhältnis über 0,73 liegt.",
          hints: [
            "NaCl-Gitter: kubisch-flächenzentriert.",
            "Koordinationszahl hängt vom Radienverhältnis ab.",
          ],
          difficulty: 3,
          tags: ["nacl-gitter", "koordinationszahl", "radienverhältnis"],
        },
        {
          question:
            "Welcher Schritt im Born-Haber-Kreisprozess für NaCl ist stark exotherm und macht die Gesamtreaktion günstig?",
          options: [
            "Sublimation von Natrium",
            "Gitterenergieterm",
            "Spaltung von Cl₂",
            "Ionisierung von Natrium",
            "Elektronenaffinität von Chlor",
          ],
          correctIndex: 1,
          explanation:
            "Im Born-Haber-Kreisprozess sind Sublimation, Ionisierung und Bindungsspaltung endotherm, während die Elektronenaffinität von Chlor moderat exotherm ist. Der mit Abstand größte exotherme Beitrag kommt von der Gitterenergie (−786 kJ/mol für NaCl), die beim Zusammenfügen der gasförmigen Ionen zum Kristallgitter freigesetzt wird. Ohne diesen Beitrag wäre die Bildung von NaCl aus den Elementen thermodynamisch ungünstig.",
          hints: [
            "Zerlegen Sie den Kreisprozess in seine Teilschritte.",
            "Welcher Schritt setzt Energie frei statt aufzunehmen?",
          ],
          difficulty: 3,
          tags: ["born-haber", "gitterenergie", "exotherm"],
        },
        {
          question:
            "Welche klinische Bedeutung hat die Ionenbindung von Calciumfluorid (CaF₂) für den Zahnschmelz?",
          options: [
            "CaF₂ erhöht die Löslichkeit des Zahnschmelzes in Säure.",
            "CaF₂ katalysiert die Remineralisation durch Enzyme.",
            "Fluorid-Ionen ersetzen Hydroxyl-Gruppen im Hydroxylapatit und bilden stabileres Fluorapatit.",
            "Fluorid blockiert Calciumkanäle in Schmelzoberflächen.",
            "CaF₂ neutralisiert Säure im Mundraum direkt.",
          ],
          correctIndex: 2,
          explanation:
            "Zahnschmelz besteht hauptsächlich aus Hydroxylapatit [Ca₁₀(PO₄)₆(OH)₂]. Fluorid-Ionen (aus CaF₂ oder Natriumfluorid) können Hydroxyl-Gruppen (OH⁻) im Kristallgitter ersetzen und bilden Fluorapatit [Ca₁₀(PO₄)₆F₂]. Fluorapatit hat eine höhere Gitterenergie als Hydroxylapatit und ist deutlich säurestabiler (geringere Löslichkeit in schwachen Säuren). Deshalb schützt Fluorid den Zahnschmelz vor Karies — ein direkter Nutzen ionischer Bindungsprinzipien in der Zahnmedizin.",
          hints: [
            "Fluorapatit vs. Hydroxylapatit — was ist der Unterschied?",
            "Höhere Gitterenergie → höhere Säurestabilität.",
          ],
          difficulty: 3,
          tags: ["calciumfluorid", "zahnschmelz", "fluorapatit"],
        },
        {
          question: "Welche Aussage über Sprödigkeit von Ionenkristallen ist korrekt?",
          options: [
            "Ionenkristalle sind plastisch verformbar, da Ionen gleiten können.",
            "Sprödigkeit entsteht, weil Elektronen im Gitter delokalisiert sind.",
            "Ionenkristalle sind weich, weil die Coulombkräfte schwach sind.",
            "Bei Krafteinwirkung kommen gleichnamig geladene Ionen nebeneinander zu liegen, was zur Abstoßung und zum Bruch führt.",
            "Sprödigkeit ist eine Folge der niedrigen Gitterenergie.",
          ],
          correctIndex: 3,
          explanation:
            "Wenn auf einen Ionenkristall eine Scherkraft wirkt, werden Ionenschichten gegeneinander verschoben. Dabei kommen plötzlich Ionen gleicher Ladung nebeneinander zu liegen. Die elektrostatische Abstoßung zwischen gleichnamig geladenen Ionen überwiegt die Anziehung, und der Kristall bricht entlang der Gleitebene. Dieses Verhalten steht im Gegensatz zu Metallen, wo delokalisierte Elektronen das Gleiten von Schichten erlauben, ohne Abstoßung zu erzeugen (Duktilität).",
          hints: [
            "Was passiert bei einer Ionenverschiebung mit den Ladungsverteilungen?",
            "Vergleich mit metallischen Bindungen: Warum sind Metalle nicht spröde?",
          ],
          difficulty: 3,
          tags: ["sprödigkeit", "ionenkristall", "scherkraft"],
        },
        {
          question:
            "Welche Aussagen sind richtig?\n\n1. Die Gitterenergie ist der wichtigste exotherme Beitrag im Born-Haber-Kreisprozess.\n2. Ionenkristalle leiten im festen Zustand keinen elektrischen Strom, weil die Ionen im Gitter fixiert sind.\n3. Die Gitterenergie steigt mit steigender Ionenladung und sinkendem Ionenradius (Coulombsches Gesetz).\n4. Ionenkristalle sind plastisch verformbar wie Metalle.\n5. NaCl hat eine Koordinationszahl von 6 (jedes Na⁺ ist von 6 Cl⁻ umgeben).",
          options: ["Nur 1 und 4", "Nur 2 und 5", "Nur 1, 2, 3 und 5", "Nur 2, 3 und 4", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussagen 1, 2, 3 und 5 sind korrekt: Die Gitterenergie (z. B. −786 kJ/mol für NaCl) ist der größte exotherme Beitrag (1). Im festen Zustand sind Ionen fixiert und können keinen Strom leiten (2). Die Gitterenergie ist proportional zu q₁·q₂/r nach Coulomb (3). NaCl hat oktaedrische Koordination mit KZ = 6 (5). Aussage 4 ist falsch — Ionenkristalle sind spröde, nicht plastisch verformbar: Bei Scherkraft kommen gleichnamige Ionen nebeneinander zu liegen, die Abstoßung führt zum Bruch.",
          difficulty: 3,
          tags: ["typ-k", "ionenbindung", "gitterenergie"],
        },
      ],
      diagram: "ionic-bond",
    },

    {
      id: "ch-6-02",
      title: "Kovalente Bindung — Polarität und Hybridisierung",
      imageUrl: "/images/bms/ch-kovalente-bindung.webp",
      imageCaption:
        "Abb.: Kovalente Bindungen — gemeinsame Elektronenpaare in H–H, O=O und CO₂ (OpenStax, CC BY 4.0)",
      stichworte: [
        "Kovalente Bindung",
        "Elektronegativität",
        "Bindungspolarität",
        "VSEPR-Modell",
        "Hybridisierung",
        "sp3",
        "sp2",
        "sp",
        "Sigma-Bindung",
        "Pi-Bindung",
        "Dipolmoment",
        "Resonanz",
      ],
      content: `Während bei der Ionenbindung Elektronen vollständig übertragen werden, gibt es eine zweite fundamentale Bindungsart: die kovalente Bindung, bei der Atome Elektronenpaare gemeinsam nutzen. Sie ist der häufigste Bindungstyp in der organischen Chemie und in biologischen Molekülen.

## Grundprinzip der kovalenten Bindung

Zwei Wasserstoffatome teilen sich ein Elektronenpaar — und bilden damit die einfachste kovalente Bindung überhaupt. Die **kovalente Bindung** (homöopolare oder Elektronenpaar-Bindung) entsteht durch **gemeinsame Nutzung von Elektronenpaaren** zwischen Atomen ähnlicher oder gleicher Elektronegativität. Im Gegensatz zur Ionenbindung werden Elektronen nicht übertragen, sondern geteilt. Die bindenden Elektronen halten sich bevorzugt im Bereich zwischen den Atomkernen auf und senken dort die potenzielle Energie des Systems. Der Energiegewinn durch die Bindungsbildung beträgt typischerweise 150–1000 kJ/mol.

{{IMAGE}}

Lewis-Schreibweise (Darstellung der Valenzelektronen als Punkte/Striche): Einfachbindung (—), Doppelbindung (=), Dreifachbindung (≡). Das bindende Elektronenpaar wird durch einen Strich dargestellt, freie Elektronenpaare durch Punkte. Die **Oktettregel** gilt auch hier: Jedes Atom strebt 8 Valenzelektronen an (Ausnahme: H mit 2, Be mit 4, B mit 6).

{{DIAGRAM:covalent-bond}}

**Ausnahmen von der Oktettregel:**
- **H, He:** Duett-Regel (nur 2 Elektronen nötig, 1s-Orbital)
- **Be, B:** Elektronenmangel-Verbindungen (BeCl₂: 4 VE, BF₃: 6 VE → Lewis-Säuren/Elektronenpaarakzeptoren, reagieren gerne mit Elektronenpaardonoren)
- **Elemente der 3. Periode und höher:** Können die Oktett-Regel überschreiten (d-Orbitale verfügbar): PCl₅ (10 VE), SF₆ (12 VE)
- **Radikale:** Ungerade Elektronenzahl → ein ungepaartes Elektron (NO, NO₂) → besonders reaktiv

**Koordinative (dative) Bindung:**
Ein Atom stellt beide Elektronen des bindenden Paares bereit (Elektronenpaardonor → Akzeptor). Schreibweise: A→B. Beispiele:
- NH₃ + BF₃ → H₃N→BF₃ (N: Donor, B: Akzeptor)
- CO (Kohlenmonoxid): C←O (O stellt das Bindungspaar bereit); CO bindet an Fe²⁺ im Hämoglobin → CO-Vergiftung (200× stärkere Bindung als O₂)
- H₃O⁺ (Hydronium-Ion): H₂O + H⁺ → H₃O⁺ (O ist der Donor, H⁺ hat kein eigenes Elektronenpaar)
- Metallkomplexe: Zn²⁺ in Carboanhydrase, Fe²⁺ im Häm, Cu²⁺ in Cytochrom-c-Oxidase

> **Merke:** Ionenbindung = Elektronenübertragung (ΔEN > 1,7); kovalente Bindung = Elektronenteilung (ΔEN < 1,7). Der Übergang ist fließend — polare kovalente Bindungen liegen dazwischen. Koordinative Bindung: ein Partner stellt beide Elektronen (Donor → Akzeptor). Biologisch hochrelevant: CO-Vergiftung, Metallkomplexe in Enzymen.

**Prüfungsrelevant — kovalent vs. ionisch:** **Kovalent** aufgebaut: Verbindungen aus Nichtmetallen mit gemeinsamer Elektronenpaarbindung, z. B. **H₂O₂** (Wasserstoffperoxid), H₂O, CO₂, NH₃, CH₄, HCl (als Gas). **Ionisch:** Metall–Nichtmetall, z. B. **NaCl**, **Fe₂O₃**, **CuCl₂**, **AlCl₃**, **MgO**. MedAT: „Welche Verbindung ist kovalent?" → **H₂O₂**; NaCl, Fe₂O₃, CuCl₂ sind ionisch.

**Faustregel:** Nichtmetall + Nichtmetall → kovalent; Metall + Nichtmetall → ionisch (bei ΔEN > 1,7) oder polar kovalent (ΔEN 0,4–1,7). Übergangsmetallverbindungen können Mischcharakter haben (z. B. AlCl₃ hat signifikanten kovalenten Anteil trotz formaler Ionenbindung).

> **Prüfungstipp:** „Welche Verbindung ist kovalent aufgebaut?" — Schnellcheck: Sind beide Bindungspartner Nichtmetalle? Dann kovalent. H₂O₂, CO₂, NH₃ = kovalent. NaCl, MgO, CaCl₂ = ionisch. Vorsicht bei HCl: als Gas kovalent, in Wasser dissoziiert (starke Säure).

**Bindungslänge und Bindungsenergie:** Kürzere Bindungen sind stärker. Einfachbindung C–C: 154 pm, 347 kJ/mol; Doppelbindung C=C: 134 pm, 614 kJ/mol; Dreifachbindung C≡C: 120 pm, 839 kJ/mol. Die Dreifachbindung ist die kürzeste und stärkste, aber nicht dreimal so stark wie die Einfachbindung (π-Bindungen sind schwächer als σ).

| Bindung | Bindungslänge (pm) | Bindungsenergie (kJ/mol) | Bindungsordnung | Biologisches Beispiel |
|---|---|---|---|---|
| C–C | 154 | 347 | 1 | Alkane, Fettsäuren |
| C=C | 134 | 614 | 2 | Alkene, cis-Ölsäure (Δ9) |
| C≡C | 120 | 839 | 3 | Ethin (selten biologisch) |
| C–O | 143 | 360 | 1 | Alkohole, Glycosidische Bindung |
| C=O | 123 | 745 | 2 | Carbonylgruppe, Peptidbindung |
| C–N | 147 | 305 | 1 | Amine, Aminosäuren |
| C=N | 127 | 615 | 2 | Schiff-Base (Retinal-Lysin) |
| O–H | 96 | 463 | 1 | Wasser, Alkohole, Carbonsäuren |
| N–H | 101 | 391 | 1 | Ammoniak, Amide, Peptidbindung |
| C–H | 109 | 413 | 1 | Methan, Kohlenwasserstoffe |
| P–O | 163 | 335 | 1 | ATP, Phosphodiester-Rückgrat |
| S–S | 205 | 266 | 1 | Disulfidbrücke (Cys–Cys) |

> **Merke:** Kürzere Bindungen = stärkere Bindungen. Doppelbindungen sind kürzer und stärker als Einfachbindungen, Dreifachbindungen noch mehr. Aber die zweite (π-)Bindung ist schwächer als die erste (σ-)Bindung, da die seitliche Orbitalüberlappung geringer ist.

Die **Stärke der π-Bindung** lässt sich aus der Differenz berechnen: Energie der Doppelbindung minus Energie der Einfachbindung. Für C=C: 614 − 347 = 267 kJ/mol für die π-Bindung (deutlich schwächer als die σ-Bindung mit 347 kJ/mol). Die zweite π-Bindung in C≡C: 839 − 614 = 225 kJ/mol — noch schwächer, da die Elektronendichte auf engem Raum konzentriert ist.

---

## Elektronegativität und Bindungspolarität

Bisher haben wir kovalente Bindungen betrachtet, bei denen Elektronen gleichmäßig geteilt werden. In der Realität sind Bindungselektronen jedoch fast nie perfekt symmetrisch verteilt — und genau das bestimmt die Polarität.

**Elektronegativität (EN)** ist das Maß für die Fähigkeit eines Atoms in einer kovalenten Bindung, die gemeinsamen Bindungselektronen anzuziehen. Die am häufigsten verwendete Skala ist die **Pauling-Skala** (Linus Pauling, 1932), die auf Bindungsenergiedifferenzen basiert. Fluor hat als elektronegativstes Element den Wert 4,0.

**Trends der Elektronegativität im PSE:**
- **Innerhalb einer Periode (links → rechts):** EN steigt (steigende Kernladung bei gleicher Schale). Li (1,0) → Be (1,5) → B (2,0) → C (2,5) → N (3,0) → O (3,5) → F (4,0)
- **Innerhalb einer Gruppe (oben → unten):** EN sinkt (zusätzliche Elektronenschalen → größerer Atomradius → schwächere Anziehung). F (4,0) > Cl (3,0) > Br (2,8) > I (2,5)
- **Edelgase:** Keine EN definiert (bilden unter Normalbedingungen keine Bindungen)
- **Metalle:** Niedrige EN (Na: 0,9; K: 0,8; Ca: 1,0; Fe: 1,8) → geben Elektronen leicht ab
- **Nichtmetalle:** Hohe EN (F: 4,0; O: 3,5; N: 3,0; Cl: 3,0) → ziehen Elektronen stark an

| Element | EN (Pauling) | Häufig in Biologie | Relevanz |
|---|---|---|---|
| F | 4,0 | Fluorapatit (Zahnschmelz) | Elektronegativstes Element |
| O | 3,5 | H₂O, C=O, Phosphat | H-Brücken-Donor/Akzeptor |
| N | 3,0 | NH₃, Aminogruppe, Basen | H-Brücken in DNA/Proteinen |
| Cl | 3,0 | HCl, NaCl, Cl⁻ | Häufigstes Anion im Körper |
| S | 2,5 | Cys, Met, Disulfid | Schwache H-Brücken mit S–H |
| C | 2,5 | Rückgrat aller Biomoleküle | C–H nahezu unpolar (ΔEN 0,4) |
| H | 2,1 | H₂O, Säuren, Biomoleküle | H-Brücken-Donor bei N–H, O–H |
| Na | 0,9 | Na⁺ (Elektrolyt) | Bildet Ionenbindungen |

| ΔEN-Bereich | Bindungstyp | Beispiele |
|---|---|---|
| < 0,4 | Unpolar kovalent | H₂ (0,0), C–C (0,0), C–H (0,4) |
| 0,4–1,7 | Polar kovalent | O–H (1,4), N–H (0,9), C–O (1,0), C–Cl (0,5) |
| > 1,7 | Ionisch | Na–Cl (2,1), K–F (3,1), Ca–O (2,5) |

> **Merke:** Die EN steigt im PSE nach rechts oben (Fluor = Maximum 4,0). Metalle links unten geben Elektronen ab (niedrige EN), Nichtmetalle rechts oben ziehen Elektronen an (hohe EN). Der Übergang von kovalent zu ionisch ist fließend — die ΔEN-Grenzen sind Richtwerte, keine scharfen Grenzen.

Bei polaren kovalenten Bindungen sind die Elektronen zum elektronegativeren Atom hin verschoben → **Partialladungen** (δ+ und δ−) → **Dipolmoment** (Maß für die Ladungstrennung im Molekül) μ = q · d (in Debye, D). Die C–H-Bindung (ΔEN = 0,4) gilt als nahezu unpolar, weshalb Kohlenwasserstoffe hydrophob sind.

**Dipolmoment μ:** Produkt aus Ladung (q) und Abstand (d). Einheit: Debye (D), wobei 1 D = 3,336 × 10⁻³⁰ C·m. Polare Bindungen mit großem ΔEN und großem Bindungsabstand haben große Dipolmomente. Das Gesamtdipolmoment eines Moleküls ist die Vektorsumme aller Bindungsdipole — entscheidend ist die Geometrie (siehe Molekülpolarität).

**Ionisierungsenergie (IE) und Elektronenaffinität (EA) — Ergänzung:**
- **Ionisierungsenergie:** Energie, die nötig ist, um ein Elektron aus einem neutralen Atom zu entfernen. IE steigt im PSE nach rechts oben (Na: 496 kJ/mol → F: 1681 kJ/mol). Niedrige IE → leichte Kationenbildung (Metalle). Hohe IE → keine Kationenbildung (Edelgase).
- **Elektronenaffinität:** Energie, die freigesetzt wird, wenn ein neutrales Atom ein Elektron aufnimmt. EA ist am höchsten bei den Halogenen (Cl: −349 kJ/mol, F: −328 kJ/mol). Edelgase haben EA ≈ 0 (stabile Konfiguration).
- **Zusammenhang mit EN:** Elemente mit hoher IE und hoher EA haben auch hohe EN → ziehen Bindungselektronen stark an (F, O, Cl). Metalle mit niedriger IE und geringer EA haben niedrige EN → bilden bevorzugt Kationen.

> **Merke:** EN, IE und EA hängen zusammen und zeigen ähnliche PSE-Trends (steigen nach rechts oben). Hohe EN + hohe EA = starkes Nichtmetall (F, O, Cl). Niedrige IE + niedrige EN = typisches Metall (Na, K, Ca).

**Die polarste Bindung** unter mehreren Optionen hat die **größte Elektronegativitätsdifferenz (ΔEN)**. Beispiele: P–O (ΔEN ≈ 1,3), Li–H (≈ 1,1), C–Cl (≈ 0,5), H–C (≈ 0,4). Bei ionischen Bindungen (z. B. Ca–Cl, ΔEN > 1,7) ist die Polarität maximal (vollständige Ladungstrennung).

## Molekülpolarität

Von der Bindungspolarität einzelner Bindungen gelangen wir nun zur entscheidenden Frage: Ist das gesamte Molekül polar oder unpolar? Hier spielt die räumliche Anordnung eine zentrale Rolle.

Ein Molekül ist **polar**, wenn es Bindungsdipole besitzt UND diese sich nicht gegenseitig aufheben. Die Geometrie ist entscheidend:

- **H₂O** (gewinkelt, 104,5°): beide O–H-Dipole zeigen in dieselbe Richtung → stark polar (μ = 1,85 D)
- **CO₂** (linear, 180°): beide C=O-Dipole heben sich auf → unpolar (μ = 0)
- **NH₃** (pyramidal): resultierendes Dipolmoment → polar (μ = 1,47 D)
- **CCl₄** (tetraedrisch): alle C–Cl-Dipole symmetrisch → unpolar (μ = 0)
- **CHCl₃** (Chloroform): C–Cl-Dipole nicht symmetrisch → polar (μ = 1,01 D)

> **Merke:** Polare Bindungen ≠ polares Molekül! Entscheidend ist, ob sich die Dipolvektoren geometrisch aufheben (CO₂, CCl₄) oder addieren (H₂O, NH₃).

> **Prüfungstipp:** „Welches Molekül ist polar?" ist eine MedAT-Standardfrage. Strategie: Erst Bindungspolarität prüfen (ΔEN), dann Geometrie (symmetrisch → unpolar trotz polarer Bindungen). CO₂ und CCl₄ sind die häufigsten Fallen.

**Löslichkeitsprinzip:** „Gleiches löst Gleiches" (similia similibus solvuntur) — polare Moleküle lösen sich in polaren Lösungsmitteln (Wasser), unpolare in unpolaren (Hexan, Benzol). Dies bestimmt die Bioverfügbarkeit von Pharmaka und den Transport von Stoffen durch Biomembranen.

**Prüfungsrelevante Polaritätsbeispiele:**

| Molekül | Polare Bindungen? | Geometrie | Polar? | Begründung |
|---|---|---|---|---|
| H₂O | Ja (O–H, ΔEN=1,4) | Gewinkelt (104,5°) | **Ja** | Dipole addieren sich |
| CO₂ | Ja (C=O, ΔEN=1,0) | Linear (180°) | **Nein** | Dipole heben sich auf |
| NH₃ | Ja (N–H, ΔEN=0,9) | Pyramidal (107°) | **Ja** | Resultierender Dipol |
| CCl₄ | Ja (C–Cl, ΔEN=0,5) | Tetraedrisch | **Nein** | Symmetrisch → aufgehoben |
| CHCl₃ | Ja (C–Cl, C–H) | Tetraedrisch (verzerrt) | **Ja** | Asymmetrisch → nicht aufgehoben |
| BF₃ | Ja (B–F, ΔEN=2,0) | Trigonal planar | **Nein** | Symmetrisch → aufgehoben |
| NF₃ | Ja (N–F, ΔEN=1,0) | Pyramidal | **Ja** | Freies EP + asymmetrisch |

> **Merke:** Symmetrische Moleküle (CO₂, CCl₄, BF₃, SF₆) sind unpolar trotz polarer Bindungen. Freie Elektronenpaare am Zentralatom brechen die Symmetrie (H₂O, NH₃, NF₃) → polares Molekül.

---

## VSEPR-Modell (Valence Shell Electron Pair Repulsion)

Wir haben gesehen, dass die Molekülgeometrie entscheidend für die Polarität ist. Doch wie kann man die Geometrie eines Moleküls vorhersagen? Genau dafür gibt es das VSEPR-Modell.

Das VSEPR-Modell sagt die **Molekülgeometrie** voraus: Elektronenpaare (bindende und freie) stoßen sich ab und nehmen die Anordnung mit maximalem Abstand ein. Freie Elektronenpaare nehmen mehr Raum ein als bindende → verringern die Bindungswinkel stärker. Die Abstoßungsstärke folgt der Reihenfolge: frei-frei > frei-bindend > bindend-bindend.

| EP gesamt | Freie EP | Geometrie | Beispiel | Winkel |
|---|---|---|---|---|
| 2 | 0 | Linear | BeCl₂, CO₂ | 180° |
| 3 | 0 | Trigonal planar | BF₃ | 120° |
| 3 | 1 | Gewinkelt | SO₂ | ~119° |
| 4 | 0 | Tetraedrisch | CH₄ | 109,5° |
| 4 | 1 | Trigonal pyramidal | NH₃ | 107° |
| 4 | 2 | Gewinkelt | H₂O | 104,5° |

**Schritt-für-Schritt: VSEPR anwenden**
1. **Lewis-Struktur** zeichnen (Valenzelektronen verteilen, Oktettregel beachten)
2. **Elektronenpaare zählen** am Zentralatom: bindende + freie EP
3. **Ideale Geometrie** ablesen: 2 EP → linear, 3 → trigonal, 4 → tetraedrisch
4. **Freie EP berücksichtigen:** Molekülgeometrie ergibt sich aus der Atomanordnung (freie EP „sehen" wir nicht, sie drücken aber die bindenden Paare zusammen)

**Beispiel H₂O:**
1. Lewis-Struktur: O hat 6 VE → 2 bindend (O–H), 2 frei
2. 4 EP gesamt → Elektronengeometrie: Tetraeder
3. 2 freie EP → Molekülgeometrie: **gewinkelt**
4. Winkel: 104,5° (kleiner als 109,5°, weil freie EP stärker abstoßen)

**Beispiel SO₂:**
1. Lewis-Struktur: S hat 6 VE → 2 Doppelbindungen zu O + 1 freies EP
2. 3 EP-Bereiche → Elektronengeometrie: trigonal planar
3. 1 freies EP → Molekülgeometrie: **gewinkelt**
4. Winkel: ~119° (eine freie EP drückt leicht)

> **Merke:** Die VSEPR-Methode funktioniert in 4 Schritten: Lewis → EP zählen → Elektronenanordnung → Molekülgeometrie. Freie Elektronenpaare verkleinern die Winkel, weil sie mehr Raum beanspruchen.

---

## Hybridisierung

Das VSEPR-Modell sagt Geometrien voraus, erklärt aber nicht, warum Kohlenstoff vier gleichwertige Bindungen bildet, obwohl seine Orbitale unterschiedlich sind. Hier kommt die Hybridisierung ins Spiel.

Kohlenstoff hat die Konfiguration 2s² 2p² — eigentlich nur 2 ungepaarte Elektronen. Aber um 4 gleichwertige Bindungen zu bilden, „mischt" es ein s- mit drei p-Orbitalen zu vier identischen sp³-Hybriden. Das kostet Energie (Promotion), die durch die 4 stabilen Bindungen mehr als kompensiert wird. Dieses Prinzip — **Hybridisierung** — erklärt die Geometrie von Kohlenstoff- (und anderen) Verbindungen durch Mischung von Atomorbitalen zu energieäquivalenten **Hybridorbitalen**. Die Zahl der Hybridorbitale entspricht der Zahl der gemischten Atomorbitale.

**sp³-Hybridisierung** (Methan, CH₄):
Ein s-Orbital + drei p-Orbitale → vier sp³-Hybridorbitale → tetraedrische Anordnung (109,5°). Alle Bindungen sind Sigma-Bindungen (σ). Beispiele: Alkane, gesättigte Kohlenwasserstoffe, Wasser (O ist sp³), Aminosäuren (Cα). Biologisch: Das sp³-Kohlenstoffatom in Aminosäuren ist das Chiralitätszentrum (außer Glycin).

**Warum sp³ bei Kohlenstoff?** Im Grundzustand hat C die Konfiguration 1s² 2s² 2p² — nur 2 ungepaarte Elektronen. Durch Promotion (2s¹ 2p³) entstehen 4 ungepaarte Elektronen, die zu 4 gleichwertigen sp³-Hybridorbitalen gemischt werden. Der Energieaufwand der Promotion (~400 kJ/mol) wird durch die Bildung von 4 statt 2 Bindungen (~4 × 413 kJ/mol für C–H) mehr als kompensiert.

**sp²-Hybridisierung** (Ethen, C₂H₄):
Ein s + zwei p → drei sp²-Hybridorbitale (trigonal planar, 120°) + ein unhybridisiertes p-Orbital senkrecht zur Ebene → π-Bindung. Doppelbindung = 1 σ + 1 π. Beispiele: Alkene, Benzol (sp², delokalisiertes π-System), Carbonyl-Gruppe C=O. Biologisch: Die Peptidbindung (–CO–NH–) ist sp²-hybridisiert → planar, keine freie Rotation → bestimmt Proteinstruktur.

**Warum sp² bei Carbonyl-C?** Der Carbonyl-Kohlenstoff bildet 3 σ-Bindungen (zu O, und zu 2 weiteren Atomen) + 1 π-Bindung zu O. Die sp²-Hybridisierung ermöglicht trigonal planare Anordnung (120°) und ein unhybridisiertes p-Orbital für die π-Bindung. Dies ist der Grund, warum die Peptidbindung planar ist — das N-Elektronenpaar kann in das π-System konjugieren.

**sp-Hybridisierung** (Ethin, C₂H₂):
Ein s + ein p → zwei sp-Hybridorbitale (linear, 180°) + zwei unhybridisierte p-Orbitale → zwei π-Bindungen. Dreifachbindung = 1 σ + 2 π. Beispiele: Alkine, CO₂ (C ist sp-hybridisiert), HCN (Blausäure). In CO₂ bildet der sp-hybridisierte Kohlenstoff je eine σ- und π-Bindung zu jedem Sauerstoff → linear, unpolar trotz polarer Bindungen.

**Zusammenfassung der Hybridisierungstypen:**

| Hybridisierung | Orbitalmischung | Hybridorbitale | Geometrie | Winkel | Unhybridisierte p | Bindungstyp | Beispiele |
|---|---|---|---|---|---|---|---|
| sp³ | 1s + 3p | 4 | Tetraedrisch | 109,5° | 0 | 4σ | CH₄, NH₃, H₂O, Cα von AS |
| sp² | 1s + 2p | 3 | Trigonal planar | 120° | 1 | 3σ + 1π | C₂H₄, Benzol, C=O, Peptidbindung |
| sp | 1s + 1p | 2 | Linear | 180° | 2 | 2σ + 2π | C₂H₂, CO₂, HCN |

**Hybridisierung erkennen — Schnellregel für die Prüfung:**
- Zähle die **σ-Bindungen + freien Elektronenpaare** am Zentralatom
- 4 → sp³ (Tetraeder)
- 3 → sp² (trigonal planar)
- 2 → sp (linear)
- Beispiel Wasser: O hat 2 σ-Bindungen (O–H) + 2 freie EP = 4 → sp³ → gewinkelt (wegen 2 freier EP)
- Beispiel Carbonyl-C: 3 σ-Bindungen + 0 freie EP = 3 → sp² → trigonal planar

> **Merke:** Die Hybridisierung bestimmt die Geometrie und damit die biologische Funktion. sp³ = Chiralitätszentrum (Aminosäuren); sp² = Planarität (Peptidbindung, Aromaten); sp = Linearität (CO₂, Nitrile). Die Schnellregel: Summe aus σ-Bindungen + freien EP = Zahl der Hybridorbitale.

> **Prüfungstipp:** Im MedAT kommt häufig: „Welche Hybridisierung hat Atom X?" Schnellregel anwenden: σ-Bindungen + freie EP zählen. Wasser: O hat 2σ + 2 freie EP = 4 → sp³. Carbonyl-C: 3σ + 0 = 3 → sp². CO₂-C: 2σ + 0 = 2 → sp.

---

## Sigma- und Pi-Bindungen

Bei der Hybridisierung haben wir bereits von σ- und π-Bindungen gesprochen. Nun schauen wir uns diese beiden grundlegenden Bindungstypen genauer an — denn sie erklären, warum Doppelbindungen die freie Rotation verhindern und warum Cis-Trans-Isomerie überhaupt existiert.

- **σ-Bindung (Sigma):** Überlappung der Orbitale **entlang der Bindungsachse** (axial, Kopf-an-Kopf); immer vorhanden; freie Rotation um die σ-Bindungsachse möglich; stärkere Überlappung → stärkere Bindung. σ-Bindungen können aus s-s, s-p, p-p, sp³-sp³, sp²-sp² oder sp-sp Überlappung entstehen.
- **π-Bindung (Pi):** **laterale Überlappung** der p-Orbitale seitlich der Bindungsachse; verhindert freie Rotation (Cis-Trans-Isomerie!); schwächer als σ, da geringere Überlappung (die Elektronendichte liegt ober- und unterhalb der Bindungsachse, nicht dazwischen).

**Zählung von σ- und π-Bindungen in Molekülen:**
- Einfachbindung (C–C, C–H, O–H): **1 σ** (immer nur σ)
- Doppelbindung (C=C, C=O): **1 σ + 1 π**
- Dreifachbindung (C≡C, C≡N): **1 σ + 2 π**

| Molekül | σ-Bindungen | π-Bindungen | Gesamt | Freie Rotation? |
|---|---|---|---|---|
| Ethan (C₂H₆) | 7 (1 C–C + 6 C–H) | 0 | 7 | Ja (um C–C) |
| Ethen (C₂H₄) | 5 (1 C=C(σ) + 4 C–H) | 1 | 6 | Nein (π blockiert) |
| Ethin (C₂H₂) | 3 (1 C≡C(σ) + 2 C–H) | 2 | 5 | Nein (2 π blockieren) |
| Benzol (C₆H₆) | 12 (6 C–C(σ) + 6 C–H) | 3 (delokalisiert) | 15 | Nein (Ring) |
| Essigsäure (CH₃COOH) | 7 | 1 (C=O) | 8 | Ja (um C–C) |

Bindungsstärken: C–C (347 kJ/mol, 154 pm) < C=C (614 kJ/mol, 134 pm) < C≡C (839 kJ/mol, 120 pm). Die Differenz zwischen Einfach- und Doppelbindung (267 kJ/mol) gibt die Stärke der π-Bindung an. Die zweite π-Bindung in der Dreifachbindung ist mit 225 kJ/mol nochmals schwächer.

**Biologische Konsequenzen der π-Bindung:**
- **Peptidbindung:** Partielle π-Bindung zwischen C und N (Resonanz) → Planarität → α-Helix und β-Faltblatt nur möglich, weil φ- und ψ-Winkel rotieren können, die Peptidbindung selbst aber nicht
- **Cis-Trans-Isomerie bei Fettsäuren:** π-Bindung bei Δ9 in Ölsäure → cis-Konfiguration → Knick → Membranfluidität. Trans-Fettsäuren (industrielle Hydrierung) → gerade Kette → kardiovaskuläres Risiko
- **Retinal (Sehprozess):** Licht isomerisiert die π-Bindung von 11-cis-Retinal zu all-trans-Retinal → Konformationsänderung von Rhodopsin → Nervensignal → Sehen
- **Aromatische Systeme:** Delokalisierte π-Elektronen in Purin- und Pyrimidinbasen → π-Stacking in DNA → Stabilisierung der Doppelhelix

> **Merke:** Jede Mehrfachbindung enthält genau eine σ-Bindung. Die π-Bindung(en) kommen hinzu und verhindern Rotation. Cis-Trans-Isomerie ist nur bei Doppelbindungen möglich, nicht bei Einfach- oder Dreifachbindungen. Prüfungsklassiker: „Wie viele σ- und π-Bindungen hat Molekül X?" → Einfachbindungen zählen als σ, jede Mehrfachbindung = 1σ + (n-1)π.

## Resonanz und mesomere Grenzstrukturen

In vielen Molekülen lässt sich die Elektronenverteilung nicht durch eine einzige Lewis-Struktur korrekt beschreiben. Stattdessen wird die tatsächliche Struktur als Überlagerung (Hybrid) mehrerer Grenzstrukturen dargestellt — das Konzept der Resonanz.

**Regeln für Resonanzstrukturen:**
1. Nur π-Elektronen und freie Elektronenpaare werden verschoben — σ-Gerüst bleibt unverändert
2. Alle Grenzstrukturen müssen die gleiche Zahl an Elektronen haben
3. Atompositionen ändern sich nicht (keine Umlagerung!)
4. Die reale Struktur liegt energetisch **tiefer** als jede einzelne Grenzstruktur → **Resonanzstabilisierung**

**Wichtige Beispiele:**

- **Benzol (C₆H₆):** 6 C-Atome im Ring, alle sp²-hybridisiert; die 6 π-Elektronen über den gesamten Ring delokalisiert → stabiles aromatisches System. Resonanzenergie: ~150 kJ/mol → erklärt die besondere Stabilität gegenüber Additionsreaktionen. Alle C–C-Bindungen sind gleichwertig (Bindungsordnung 1,5; Länge 140 pm — zwischen Einfach- 154 pm und Doppelbindung 134 pm).

- **Carbonat (CO₃²⁻):** 3 gleichwertige C–O-Bindungen (zwischen Einfach- und Doppelbindung); Bindungsordnung 4/3. Alle C–O-Abstände identisch (129 pm, zwischen Einfach- 143 pm und Doppelbindung 123 pm). Drei äquivalente Grenzstrukturen, in denen jeweils eine andere C–O-Bindung als Doppelbindung dargestellt wird.

- **Carboxylgruppe –COOH:** im Carboxylat-Anion –COO⁻ ist die negative Ladung über beide Sauerstoffe delokalisiert → Stabilisierung des Anions → erklärt die relativ hohe Acidität von Carbonsäuren (pKa ~4,8 für Essigsäure — viel saurer als Alkohole, pKa ~16). Die Resonanzstabilisierung des Anions verschiebt das Gleichgewicht in Richtung Dissoziation.

- **Peptidbindung (–CO–NH–):** Delokalisierung des N-Elektronenpaars ins C=O-π-System → partieller Doppelbindungscharakter (Bindungsordnung ~1,4) → Planarität und eingeschränkte Rotation. Grenzstrukturen: C=O / C–N⁻ ↔ C–O⁻ / C=N⁺. Die C–N-Bindung ist kürzer als erwartet (132 pm statt 147 pm für reine Einfachbindung), die C=O-Bindung länger (124 pm statt 123 pm für reine Doppelbindung).

- **Ozon (O₃):** Gewinkelt, 2 äquivalente O–O-Bindungen (Bindungsordnung 1,5). Resonanz zwischen zwei Grenzstrukturen mit alternierenden Einfach-/Doppelbindungen.

**Aromatizität — Sonderfall der Resonanz:**
Ein Molekül ist aromatisch (besonders stabil), wenn es die **Hückel-Regel** (Kriterium für Aromatizität) erfüllt: zyklisch, planar, konjugiert, mit **4n+2 π-Elektronen** (n = 0, 1, 2, ...). Benzol: 6 π-Elektronen (n = 1) → aromatisch. Cyclooctatetraen (C₈H₈): 8 π-Elektronen → antiaromatisch (4n, instabil), daher nicht planar. Biologisch aromatisch: Purine (A, G), Pyrimidine (C, T, U), Tryptophan, Phenylalanin, Tyrosin, Histidin.

> **Merke:** Resonanzstrukturen (z. B. Benzol, Peptidbindung) sind nicht real existierend — der tatsächliche Zustand ist ein Hybrid. Delokalisierung = Stabilisierung. Benzol reagiert deshalb lieber durch Substitution als Addition. Aromatizität (Hückel: 4n+2 π-Elektronen) ist der stärkste Stabilisierungseffekt durch Resonanz.`,

      lernziele: [
        "Den Unterschied zwischen Ionenbindung und kovalenter Bindung sowie den Zusammenhang mit der Elektronegativitätsdifferenz erklären.",
        "Das VSEPR-Modell anwenden und Molekülgeometrien vorhersagen können.",
        "Hybridisierungstypen (sp, sp², sp³) mit Geometrie, Bindungswinkel und biologischen Beispielen verknüpfen.",
        "Zwischen σ- und π-Bindungen unterscheiden und deren Bedeutung für Doppel- und Dreifachbindungen erläutern.",
        "Molekülpolarität aus Bindungspolarität und Geometrie ableiten und mit der Löslichkeit in Biologie verbinden.",
      ],

      sections: [
        {
          heading: "Elektronegativität und Bindungspolarität",
          text: "Die Elektronegativitätsdifferenz zwischen zwei bindenden Atomen bestimmt den Charakter der Bindung: unpolares Kovalent (ΔEN < 0,4), polares Kovalent (0,4–1,7) oder ionisch (> 1,7). Partialladungen entstehen, wenn Elektronen zum elektronegativeren Atom verschoben werden. Die Molekülpolarität hängt zusätzlich von der Geometrie ab — symmetrische Moleküle wie CO₂ oder CCl₄ sind trotz polarer Bindungen unpolar, weil sich die Dipole aufheben.",
          merksatz: "ΔEN < 0,4 → unpolar; 0,4–1,7 → polar kovalent; > 1,7 → ionisch.",
        },
        {
          heading: "VSEPR und Molekülgeometrie",
          text: "Das VSEPR-Modell basiert auf der Abstoßung aller Elektronenpaare (bindend und frei) in der Valenzschale. Freie Elektronenpaare stoßen stärker ab als bindende, weil sie nicht durch einen zweiten Kern fixiert werden — dadurch verringern sie die Bindungswinkel. Das erklärt, warum der H–O–H-Winkel in Wasser (104,5°) kleiner ist als der H–N–H-Winkel in Ammoniak (107°) und kleiner als der ideale Tetraederwinkel (109,5°).",
          merksatz: "Freie Elektronenpaare drängen bindende Paare zusammen → kleinere Winkel.",
        },
        {
          heading: "Hybridisierung und biologische Relevanz",
          text: "Hybridorbitale entstehen durch mathematische Mischung von s- und p-Atomorbitalen. sp³: Tetraeder (Aminosäuren, gesättigte Fettsäuren); sp²: trigonal planar (Peptidgruppe, Aromaten, Carbonylgruppen); sp: linear (Nitrile, CO). Die Peptidgruppe (–CO–NH–) ist sp²-hybridisiert, was ihr partiellen Doppelbindungscharakter verleiht — sie ist planar und kann nicht frei rotieren, was die Sekundärstruktur von Proteinen (α-Helix, β-Faltblatt) direkt beeinflusst.",
          merksatz:
            "Hybridisierung = Mischung: sp hat 50 % s-Charakter → 180°; sp² 33 % → 120°; sp³ 25 % → 109,5°. Mehr s-Anteil = größerer Winkel.",
        },
        {
          heading: "Sigma- und Pi-Bindungen",
          text: "Jede kovalente Einfachbindung ist eine σ-Bindung (axiale Überlappung). Doppelbindungen bestehen aus 1 σ + 1 π, Dreifachbindungen aus 1 σ + 2 π. Die π-Bindung entsteht durch laterale Überlappung paralleler p-Orbitale und ist schwächer als σ. Sie verhindert die freie Rotation um die Bindungsachse und ist damit der Grund für Cis-Trans-Isomerie bei Alkenen und die Rigidität aromatischer Ringe und der Peptidbindung.",
          merksatz: "Einfachbindung = σ; Doppelbindung = σ + π; π verhindert freie Rotation.",
        },
        {
          heading: "Koordinative Bindung und Metallkomplexe",
          text: "Bei der koordinativen (dativen) Bindung stellt ein Atom (Donor) beide Elektronen des Bindungspaares zur Verfügung, das andere (Akzeptor) nimmt sie auf. Biologisch hochrelevant: CO bindet koordinativ an Fe²⁺ im Hämoglobin (200× stärker als O₂ → CO-Vergiftung). Zn²⁺ in Carboanhydrase nutzt koordinative Bindungen zu His-Resten. Cisplatin (Pt-Komplex) bildet koordinative Bindungen mit DNA und wird in der Krebstherapie eingesetzt.",
          merksatz:
            "Koordinative Bindung: Donor stellt beide e⁻ → CO+Hämoglobin, Zn²⁺+Enzym, Pt+DNA.",
        },
        {
          heading: "EN-Differenz und Bindungstyp",
          text: "Die Elektronegativitätsdifferenz zwischen zwei Atomen bestimmt den Bindungscharakter.",
          table: {
            headers: ["EN-Differenz", "Bindungstyp"],
            rows: [
              ["< 0,4", "Unpolare kovalente Bindung (z. B. H₂, C–C)"],
              ["0,4–1,7", "Polare kovalente Bindung (z. B. H₂O, HCl)"],
              ["> 1,7", "Ionenbindung (z. B. NaCl, EN-Diff = 2,1)"],
            ],
          },
        },
        {
          heading: "VSEPR-Modell: Elektronenpaare und Geometrie",
          text: "Das VSEPR-Modell sagt Molekülgeometrien anhand der Elektronenpaar-Abstoßung voraus.",
          table: {
            headers: ["Elektronenpaare gesamt", "Freie EP", "Geometrie", "Beispiel", "Winkel"],
            rows: [
              ["2", "0", "linear", "BeCl₂, CO₂", "180°"],
              ["3", "0", "trigonal planar", "BF₃", "120°"],
              ["3", "1", "gewinkelt", "SO₂", "~119°"],
              ["4", "0", "tetraedrisch", "CH₄", "109,5°"],
              ["4", "1", "trigonal pyramidal", "NH₃", "107°"],
              ["4", "2", "gewinkelt", "H₂O", "104,5°"],
              ["5", "0", "trigonal bipyramidal", "PCl₅", "90°/120°"],
              ["6", "0", "oktaedrisch", "SF₆", "90°"],
            ],
          },
        },
      ],

      merksätze: [
        "Kovalente Bindung: Elektronenpaar wird gemeinsam genutzt (nicht übertragen).",
        "Elektronegativitätsdifferenz > 1,7: ionische Bindung; 0,4–1,7: polar kovalent.",
        "EN steigt im PSE nach rechts oben: F (4,0) > O (3,5) > N = Cl (3,0) > C (2,5) > H (2,1).",
        "Polare Bindungen + asymmetrische Geometrie = polares Molekül (z. B. H₂O).",
        "CO₂ ist trotz polarer C=O-Bindungen unpolar (linear, Dipole heben sich auf).",
        "VSEPR: Elektronenpaare stoßen sich ab → maximaler Abstand → Geometrie.",
        "Freie Elektronenpaare verkleinern Bindungswinkel stärker als bindende Paare.",
        "Mehr s-Charakter = größerer Winkel: sp (50 % s) → 180°, sp² (33 % s) → 120°, sp³ (25 % s) → 109,5°.",
        "Hybridisierung erkennen: σ-Bindungen + freie EP zählen: 4 → sp³, 3 → sp², 2 → sp.",
        "π-Bindung verhindert freie Rotation → Cis-Trans-Isomerie, Rigidität der Peptidbindung.",
        "Benzol: sp², delokalisiertes π-System → aromatisch, besonders stabil (4n+2 π-Elektronen).",
        "Dreifachbindung (C≡C) ≠ 3× Einfachbindung: σ stark, π schwächer.",
        "Koordinative Bindung: ein Partner stellt beide Elektronen (CO→Fe im Hämoglobin, Zn²⁺ in Enzymen).",
        "Kürzere Bindung = stärkere Bindung: C≡C (120 pm, 839 kJ) > C=C (134 pm, 614 kJ) > C–C (154 pm, 347 kJ).",
      ],

      altfrage: {
        text: "Welche Aussage zum Vergleich von H₂O und CO₂ ist richtig?",
        options: [
          { id: "a", text: "CO₂ ist ein polares Molekül, da die C=O-Bindungen polar sind." },
          { id: "b", text: "H₂O ist unpolar, weil Sauerstoff zwei freie Elektronenpaare besitzt." },
          {
            id: "c",
            text: "CO₂ ist trotz polarer Bindungen unpolar, weil die lineare Geometrie die Dipole aufhebt.",
          },
          {
            id: "d",
            text: "H₂O hat einen kleineren Bindungswinkel als CO₂, weil es sp²-hybridisiert ist.",
          },
          {
            id: "e",
            text: "Beide Moleküle sind unpolar und diffundieren gleich gut durch Membranen.",
          },
        ],
        correctOptionId: "c",
        explanation:
          "CO₂ ist linear (180°), die beiden C=O-Dipole heben sich auf → Gesamtdipolmoment = 0. H₂O ist gewinkelt (104,5°, sp³), Dipole addieren sich → polares Molekül.",
      },

      klinischerBezug:
        "Die sp²-Hybridisierung der Peptidbindung (–CO–NH–) verleiht ihr partiellen Doppelbindungscharakter und damit Planarität, was direkte Auswirkungen auf die Proteinfaltung (α-Helix, β-Faltblatt) hat und therapeutisch in der Entwicklung von Proteaseinhibitoren genutzt wird. Die Polarität von Wasser ist die Grundlage für seine Funktion als Lösungsmittel im Blutplasma und ermöglicht den Transport von Elektrolyten, Hormonen und Pharmaka.",

      selfTest: [
        {
          question: "Welche Geometrie nimmt das Ammoniak-Molekül (NH₃) gemäß VSEPR an?",
          options: ["Linear", "Trigonal planar", "Tetraedrisch", "Gewinkelt", "Trigonal pyramidal"],
          correctIndex: 4,
          explanation:
            "Stickstoff in NH₃ hat 4 Elektronenpaare in der Valenzschale: 3 bindende (N–H) und 1 freies Elektronenpaar. Gemäß VSEPR nehmen 4 Elektronenpaare tetraedrische Anordnung ein (ideal 109,5°). Da ein Paar frei ist, ist die resultierende Molekülgeometrie (Atomanordnung) trigonal pyramidal. Das freie Elektronenpaar drückt die drei bindenden Paare etwas zusammen → Winkel 107° statt 109,5°. Ammoniak ist deshalb polar (μ = 1,47 D).",
          hints: [
            "Zählen Sie bindende + freie Elektronenpaare am Zentralatom.",
            "Ein freies Elektronenpaar → Geometrie ≠ Elektronenanordnung.",
          ],
          difficulty: 2,
          tags: ["vsepr", "nh3", "molekülgeometrie"],
        },
        {
          question: "Warum ist CO₂ trotz polarer C=O-Bindungen ein unpolares Molekül?",
          options: [
            "Weil die lineare Geometrie bewirkt, dass sich die beiden Dipole aufheben.",
            "Weil CO₂ keine freien Elektronenpaare besitzt.",
            "Weil C und O ähnliche Elektronegativitäten haben.",
            "Weil CO₂ sp²-hybridisiert ist und eine ebene Struktur hat.",
            "Weil CO₂ kein permanentes Dipolmoment aufbauen kann, da es ein Gas ist.",
          ],
          correctIndex: 0,
          explanation:
            "CO₂ ist linear (Kohlenstoff sp-hybridisiert, 180°). Die beiden C=O-Bindungen sind zwar polar (ΔEN ≈ 1,0), aber die Dipolvektoren zeigen in genau entgegengesetzte Richtungen und heben sich vollständig auf — das Gesamtdipolmoment ist null. CO₂ ist daher unpolar, obwohl es polare Bindungen enthält. Dieses Beispiel verdeutlicht, dass Molekülpolarität von der Geometrie abhängt, nicht nur von der Bindungspolarität.",
          hints: [
            "Zeichnen Sie die Dipolvektoren beider C=O-Bindungen.",
            "Linear bedeutet: beide Dipole zeigen in entgegengesetzte Richtungen.",
          ],
          difficulty: 3,
          tags: ["co2", "molekülpolarität", "dipole"],
        },
        {
          question: "Welche Hybridisierung liegt am Kohlenstoff der Carbonylgruppe (C=O) vor?",
          options: ["sp³", "sp²", "sp", "p", "sd²"],
          correctIndex: 1,
          explanation:
            "In der Carbonylgruppe (z. B. in Aldehyden, Ketonen, Carbonsäuren, Amiden) ist der Kohlenstoff sp²-hybridisiert. Er hat drei sp²-Hybridorbitale (120°, trigonal planar) für die σ-Bindungen und ein unhybridisiertes p-Orbital senkrecht zur Ebene, das die π-Bindung mit dem Sauerstoff bildet. Die sp²-Hybridisierung der Carbonylgruppe ist entscheidend für die Reaktivität von Aldehyden und Ketonen sowie für den planaren Charakter der Peptidbindung.",
          hints: [
            "Wie viele Bindungspartner hat der Carbonyl-Kohlenstoff insgesamt?",
            "C=O: Doppelbindung → welche Hybridisierung erlaubt eine π-Bindung?",
          ],
          difficulty: 3,
          tags: ["hybridisierung", "sp2", "carbonylgruppe"],
        },
        {
          question: "Was verhindert die freie Rotation um eine C=C-Doppelbindung?",
          options: [
            "Die höhere Bindungsenergie der Doppelbindung gegenüber der Einfachbindung.",
            "Die σ-Bindung, die eine starre Achse bildet.",
            "Die π-Bindung, deren laterale p-Orbitalüberlappung bei Rotation aufgebrochen werden müsste.",
            "Die sp²-Hybridisierung, die einen starren Ring erzeugt.",
            "Elektrostatische Abstoßung der Substituenten.",
          ],
          correctIndex: 2,
          explanation:
            "Die π-Bindung entsteht durch laterale (seitliche) Überlappung zweier paralleler p-Orbitale senkrecht zur Bindungsachse. Bei einer Rotation um die C=C-Achse müssten diese p-Orbitale aus der parallelen Ausrichtung herausgedreht werden, was die π-Überlappung und damit die π-Bindung zerstören würde (kostet ~270 kJ/mol). Daher ist freie Rotation nicht möglich, und es entstehen stabile Cis- und Trans-Isomere (z. B. cis/trans-Ölsäure vs. Elaidinsäure), die unterschiedliche biologische Eigenschaften haben.",
          hints: [
            "σ-Bindung: axiale Überlappung; π-Bindung: laterale Überlappung.",
            "Was passiert mit der p-Orbitalüberlappung bei Rotation?",
          ],
          difficulty: 3,
          tags: ["pi-bindung", "rotation", "cis-trans-isomerie"],
        },
        {
          question: "Welche Molekülgeometrie hat Methan (CH₄)?",
          options: ["Trigonal planar", "Linear", "Oktaedrisch", "Tetraedrisch", "Gewinkelt"],
          correctIndex: 3,
          explanation:
            "Kohlenstoff in CH₄ ist sp³-hybridisiert: ein 2s-Orbital und drei 2p-Orbitale mischen zu vier gleichwertigen sp³-Hybridorbitalen. Diese stoßen sich gegenseitig ab und nehmen die tetraedrische Anordnung mit Bindungswinkeln von 109,5° ein. Da kein freies Elektronenpaar vorhanden ist, entspricht die Molekülgeometrie der Elektronenanordnung: perfekter Tetraeder. Die sp³-Hybridisierung findet sich in allen Alkanen und bei Stickstoff in Aminen, Sauerstoff in Ethern usw.",
          hints: [
            "sp³: vier Hybridorbitale, keine freien Paare.",
            "Was ist der Bindungswinkel im idealen Tetraeder?",
          ],
          difficulty: 2,
          tags: ["sp3", "methan", "tetraeder"],
        },
        {
          question:
            "Ein Lösungsmittel löst Fette gut, aber keine Salze. Welche Eigenschaft beschreibt dieses Lösungsmittel am besten?",
          options: ["Polar, protisch", "Polar, aprotisch", "Ionisch", "Amphiphil", "Unpolar"],
          correctIndex: 4,
          explanation:
            'Das Prinzip "Gleiches löst Gleiches" (similia similibus solvuntur) besagt, dass polare Substanzen in polaren Lösungsmitteln und unpolare Substanzen in unpolaren Lösungsmitteln löslich sind. Fette (Triglyceride) sind unpolar, weil die langen Kohlenwasserstoffketten keine permanenten Dipole haben. Salze dagegen sind ionisch und lösen sich nur in polaren Lösungsmitteln (Wasser) durch Hydratation. Ein Lösungsmittel, das Fette löst, aber keine Salze, muss unpolar sein (z. B. Hexan, Dichlormethan).',
          hints: [
            "Similia similibus solvuntur — Gleiches löst Gleiches.",
            "Sind Fette polar oder unpolar?",
          ],
          difficulty: 2,
          tags: ["löslichkeit", "unpolar", "similia-similibus"],
        },
        {
          question:
            "Die Peptidbindung (–CO–NH–) kann nicht frei rotieren und ist planar. Was ist die chemische Ursache?",
          options: [
            "Das freie Elektronenpaar des Stickstoffs ist in ein delokalisiertes π-System mit der Carbonylgruppe einbezogen, was partiellen Doppelbindungscharakter und Planarität erzeugt.",
            "Die Peptidbindung ist eine Ionenbindung zwischen C und N.",
            "Die sp³-Hybridisierung von C und N verhindert Rotation.",
            "Wasserstoffbrücken zwischen CO und NH fixieren die Bindung.",
            "Die hohe Bindungsenergie der C–N-Einfachbindung macht Rotation unmöglich.",
          ],
          correctIndex: 0,
          explanation:
            "Das freie Elektronenpaar am Stickstoff der Amidgruppe kann mit dem π-System der benachbarten Carbonylgruppe konjugieren (mesomere Grenzstruktur: C=N⁺ und C–O⁻). Dadurch erhält die C–N-Bindung partiellen Doppelbindungscharakter (Bindungsordnung ~1,4), was die Rotation stark einschränkt. Alle vier Atome der Peptidbindung (C, O, N, H) liegen in einer Ebene (sp²-Hybridisierung aller Beteiligten). Diese Planarität ist die strukturelle Grundlage für die regulären Sekundärstrukturen α-Helix und β-Faltblatt in Proteinen.",
          hints: [
            "Delokalisierung des N-Elektronenpaars in das π-System.",
            "Partielle Doppelbindung → eingeschränkte Rotation → Planarität.",
          ],
          difficulty: 3,
          tags: ["peptidbindung", "resonanz", "planarität"],
        },
        {
          question: "Welches Molekül hat eine lineare Geometrie aufgrund von sp-Hybridisierung?",
          options: ["H₂O", "C₂H₂ (Ethin)", "CH₄", "NH₃", "SO₂"],
          correctIndex: 1,
          explanation:
            "In Ethin (C₂H₂, Acetylen) ist jeder Kohlenstoff sp-hybridisiert: ein s- und ein p-Orbital mischen zu zwei sp-Hybridorbitalen (linear, 180°). Die beiden übrigen p-Orbitale an jedem C bilden je eine π-Bindung, sodass die C≡C-Dreifachbindung aus 1 σ + 2 π besteht. Das Molekül ist vollständig linear. Acetylen ist ein wichtiges Beispiel für sp-Hybridisierung; weitere sind HCN (Blausäure) und CO₂ (bei Kohlenstoff).",
          hints: [
            "sp-Hybridisierung: zwei Hybridorbitale, 180°.",
            "Welches Molekül enthält eine Dreifachbindung?",
          ],
          difficulty: 3,
          tags: ["sp-hybridisierung", "ethin", "linear"],
        },
        {
          question:
            "Wie viele σ-Bindungen und wie viele π-Bindungen enthält das Ethen-Molekül (C₂H₄)?",
          options: [
            "4 σ-Bindungen und 2 π-Bindungen",
            "6 σ-Bindungen und 0 π-Bindungen",
            "5 σ-Bindungen und 1 π-Bindung",
            "3 σ-Bindungen und 2 π-Bindungen",
            "4 σ-Bindungen und 1 π-Bindung",
          ],
          correctIndex: 2,
          explanation:
            "Ethen (C₂H₄) enthält eine C=C-Doppelbindung und vier C–H-Einfachbindungen. Die Doppelbindung besteht aus 1 σ + 1 π. Jede der vier C–H-Bindungen ist eine σ-Bindung. Insgesamt: 5 σ-Bindungen (1 C–C(σ) + 4 C–H) und 1 π-Bindung. Die π-Bindung entsteht durch laterale Überlappung der unhybridisierten p-Orbitale senkrecht zur sp²-Ebene und verhindert die freie Rotation um die C=C-Achse → Grundlage der Cis-Trans-Isomerie.",
          hints: [
            "Einfachbindungen = σ; Doppelbindung = σ + π.",
            "Zählen Sie alle Bindungen im Molekül einzeln.",
          ],
          difficulty: 3,
          tags: ["sigma-pi", "ethen", "bindungszählung"],
        },
        {
          question:
            "Welche Aussage über die Elektronegativität (EN) im Periodensystem ist korrekt?",
          options: [
            "Die EN nimmt innerhalb einer Periode von links nach rechts ab.",
            "Sauerstoff hat die höchste EN aller Elemente.",
            "Die EN nimmt innerhalb einer Gruppe von oben nach unten zu.",
            "Fluor hat mit 4,0 die höchste EN; innerhalb einer Periode steigt die EN nach rechts.",
            "Metalle haben eine höhere EN als Nichtmetalle.",
          ],
          correctIndex: 3,
          explanation:
            "Die Elektronegativität nach Pauling steigt im Periodensystem von links nach rechts (zunehmende Kernladung bei gleicher Schale zieht Bindungselektronen stärker an) und von unten nach oben (weniger Elektronenschalen → kleinerer Atomradius → stärkere Anziehung). Fluor (Gruppe 17, Periode 2) hat daher die höchste EN aller Elemente mit 4,0, gefolgt von Sauerstoff (3,5), Stickstoff und Chlor (je 3,0). Metalle (links unten im PSE) haben niedrige EN-Werte und geben Elektronen bevorzugt ab.",
          hints: [
            "Wo im PSE ist Fluor — rechts oben!",
            "Trend: steigende Kernladung → stärkere Anziehung der Bindungselektronen.",
          ],
          difficulty: 2,
          tags: ["elektronegativität", "pauling", "periodensystem"],
        },
        {
          question: "Welche Bindung ist aufgrund der Elektronegativitätsdifferenz am polarsten?",
          options: [
            "C–H (ΔEN ≈ 0,4)",
            "C–N (ΔEN ≈ 0,5)",
            "C–O (ΔEN ≈ 1,0)",
            "C–C (ΔEN = 0,0)",
            "C–F (ΔEN ≈ 1,5)",
          ],
          correctIndex: 4,
          explanation:
            "Die Polarität einer kovalenten Bindung wird durch die Elektronegativitätsdifferenz (ΔEN) bestimmt. Je größer ΔEN, desto polarer die Bindung und desto stärker die Partialladungen (δ+ und δ−). C–F hat die größte ΔEN (4,0 − 2,5 = 1,5) und ist daher die polarste der aufgelisteten Bindungen. C–C ist komplett unpolar (ΔEN = 0), C–H fast unpolar (0,4). Beachte: Ab ΔEN > 1,7 spricht man von ionischer Bindung (z. B. Na–Cl: 2,1).",
          hints: [
            "Polarität = Elektronegativitätsdifferenz.",
            "Fluor hat die höchste EN aller Elemente.",
          ],
          difficulty: 2,
          tags: ["polarität", "elektronegativität", "delta-en"],
        },
        {
          question: "Welche Aussage über kovalente Bindungen und Molekülgeometrie ist FALSCH?",
          options: [
            "CO₂ ist trotz polarer C=O-Bindungen ein unpolares Molekül, weil sich die Dipolvektoren in der linearen Geometrie aufheben.",
            "Die π-Bindung in einer C=C-Doppelbindung verhindert die freie Rotation um die Bindungsachse.",
            "NH₃ hat gemäß VSEPR eine trigonal-planare Molekülgeometrie, da Stickstoff drei Bindungspartner hat.",
            "In der Peptidbindung bewirkt die Konjugation des N-Elektronenpaars mit der Carbonylgruppe partiellen Doppelbindungscharakter und Planarität.",
            "sp²-hybridisierte Kohlenstoffatome bilden drei σ-Bindungen und ein unhybridisiertes p-Orbital für die π-Bindung.",
          ],
          correctIndex: 2,
          explanation:
            "Aussage C ist FALSCH: NH₃ hat NICHT trigonal-planare, sondern trigonal-pyramidale Molekülgeometrie. Stickstoff hat zwar drei Bindungspartner (H), aber zusätzlich ein freies Elektronenpaar. Die vier Elektronenpaare nehmen tetraedrische Anordnung ein, aber da ein Paar frei ist, resultiert eine trigonal-pyramidale Atomgeometrie mit einem Bindungswinkel von 107° (statt 120° bei trigonal planar). Alle anderen Aussagen sind korrekt.",
          difficulty: 3,
          tags: ["falsch-aussage", "kovalente-bindung", "vsepr"],
        },
      ],
      diagram: "covalent-bond",
    },

    {
      id: "ch-6-03",
      title: "Van-der-Waals, Wasserstoffbrücken und Metallbindung",
      imageUrl: "/images/bms/ch-wasserstoffbruecken.webp",
      imageCaption:
        "Abb.: Wasserstoffbrücken zwischen Wassermolekülen — O–H···O-Wechselwirkungen im H₂O-Netzwerk (OpenStax, CC BY 4.0)",
      stichworte: [
        "Van-der-Waals-Kräfte",
        "London-Dispersionskräfte",
        "Dipol-Dipol",
        "Dipol-Dipol-Wechselwirkung",
        "Wasserstoffbrücken",
        "H-Brücken-Donor",
        "H-Brücken-Akzeptor",
        "Metallbindung",
        "Elektronengas",
        "Bändermodell",
        "Bandlücke",
        "Halbleiter",
        "Dichteanomalie",
        "DNA-Basenpaarung",
        "Polarisierbarkeit",
        "Siedepunkt",
        "Membranfluidität",
        "Stärke-Hierarchie",
        "Ion-Dipol",
        "Kollagen",
      ],
      content: `Ionenbindung und kovalente Bindung halten Atome innerhalb eines Moleküls zusammen. Doch was entscheidet, ob ein Stoff bei Raumtemperatur fest, flüssig oder gasförmig ist? Dafür sind die schwächeren Kräfte zwischen den Molekülen verantwortlich — die intermolekularen Wechselwirkungen.

## Überblick: Zwischenmolekulare Kräfte

Warum siedet Wasser erst bei 100 °C, obwohl es leichter ist als H₂S (Sdp. −60 °C)? Die Antwort liegt in den **intermolekularen Wechselwirkungen** — Kräfte zwischen Molekülen, die Aggregatszustand, Siedepunkt, Löslichkeit und Viskosität bestimmen. In der Biologie sind sie ebenso fundamental: Sie halten die DNA-Doppelhelix zusammen, falten Proteine und ermöglichen Enzym-Substrat-Erkennung.

{{IMAGE}}

**Zentrale Unterscheidung — intramolekular vs. intermolekular:**

| Eigenschaft | Intramolekulare Bindungen | Intermolekulare Kräfte |
|---|---|---|
| Definition | Halten Atome **im Molekül** zusammen | Wirken **zwischen Molekülen** |
| Beispiele | Kovalent, ionisch, metallisch | London, Dipol-Dipol, H-Brücken |
| Stärke | 150–1000 kJ/mol | 0,1–40 kJ/mol |
| Einfluss auf | Chemische Eigenschaften, Reaktivität | Physikalische Eigenschaften (Sdp., Löslichkeit) |
| Brechen erfordert | Chemische Reaktion | Physikalische Zustandsänderung |

Entscheidend: Beim **Verdampfen** von Wasser werden nur die intermolekularen H-Brücken gebrochen (40,7 kJ/mol pro Mol), **nicht** die kovalenten O–H-Bindungen (463 kJ/mol pro Bindung). Beim Schmelzen von NaCl wird die ionische Bindung (Gitterenergie) überwunden. Beim Denaturieren von Proteinen werden intermolekulare Kräfte (H-Brücken, hydrophober Effekt) gestört, die kovalenten Peptidbindungen bleiben intakt.

> **Merke:** Intermolekulare Kräfte sind 10–100-fach schwächer als kovalente Bindungen, bestimmen aber Aggregatszustand, Siedepunkt und biologische Erkennung. Verdampfen = Brechen intermolekularer Kräfte (NICHT kovalenter Bindungen!).

## Van-der-Waals-Kräfte (London-Dispersionskräfte)

**London-Dispersionskräfte** (Fritz London, 1930) entstehen durch kurzlebige, induzierte Dipole: Quantenmechanische Elektronenfluktuation erzeugt instantane Dipolmomente, die in benachbarten Atomen weitere Dipole induzieren (induzierter Dipol–induzierter Dipol). Sie wirken zwischen **allen** Atomen und Molekülen (auch unpolaren) und sind die einzigen intermolekularen Kräfte in unpolaren Substanzen (Edelgase, Kohlenwasserstoffe, Lipide).

**Mechanismus im Detail:**
1. Die Elektronenwolke eines Atoms fluktuiert ständig → zu einem Zeitpunkt ist die Elektronendichte asymmetrisch verteilt → temporärer (instantaner) Dipol
2. Dieser Dipol induziert in benachbarten Atomen ebenfalls einen Dipol (die Elektronenwolke des Nachbarn wird polarisiert)
3. Die beiden temporären Dipole ziehen sich kurzzeitig an
4. Diese Fluktuation wiederholt sich ständig → im Mittel eine schwache, aber stets vorhandene Anziehung

Einflussfaktoren:
- **Polarisierbarkeit** (Verformbarkeit der Elektronenwolke durch äußere Felder)**:** Größere Atome/Moleküle mit mehr Elektronen sind stärker polarisierbar → stärkere Dispersionskräfte. Beispiel: He siedet bei −269 °C, Xe bei −108 °C (mehr Elektronen). Iod (I₂) ist bei Raumtemperatur ein Feststoff — die hohe Polarisierbarkeit der 106 Elektronen erzeugt starke London-Kräfte.
- **Kontaktfläche:** Längerkettige, unverzweigte Moleküle haben größere Kontaktfläche → stärkere Wechselwirkung (n-Pentan siedet bei 36 °C; Neopentan bei 9,5 °C trotz gleicher Summenformel C₅H₁₂).
- **Abstandsabhängigkeit:** London-Kräfte fallen mit r⁻⁶ ab — sie wirken nur auf sehr kurze Distanzen (< 500 pm).

| Edelgas | Elektronenzahl | Siedepunkt (°C) | London-Kräfte |
|---|---|---|---|
| He | 2 | −269 | Extrem schwach |
| Ne | 10 | −246 | Sehr schwach |
| Ar | 18 | −186 | Schwach |
| Kr | 36 | −153 | Mittel |
| Xe | 54 | −108 | Stärker |

**London-Kräfte in biologischen Membranen:** Die Lipiddoppelschicht wird primär durch den hydrophoben Effekt stabilisiert, aber London-Kräfte zwischen den parallelen Kohlenwasserstoffketten der Fettsäuren tragen wesentlich zum Zusammenhalt bei. Gesättigte Fettsäuren mit geraden Ketten können sich dichter packen → stärkere London-Kräfte → höhere Membranrigidität. Cholesterol reguliert die Membranfluidität, indem es London-Kräfte zwischen Fettsäureketten verstärkt (bei hoher T) oder abschwächt (bei niedriger T).

**Siedepunktvergleich — Einfluss der intermolekularen Kräfte:**

| Substanz | Molmasse (g/mol) | Siedepunkt (°C) | Dominierende Kraft | Erklärung |
|---|---|---|---|---|
| He | 4 | −269 | London (minimal) | Nur 2 Elektronen, kaum polarisierbar |
| CH₄ (Methan) | 16 | −161 | London | Klein, unpolar, geringe Polarisierbarkeit |
| C₂H₆ (Ethan) | 30 | −89 | London | Mehr Elektronen/Kontaktfläche als CH₄ |
| C₅H₁₂ (n-Pentan) | 72 | 36 | London | Große Kontaktfläche → starke London |
| Neopentan | 72 | 9,5 | London (schwächer) | Gleiche MM, aber kugelförmig → weniger Kontakt |
| HCl | 36,5 | −85 | London + Dipol-Dipol | Polar (μ = 1,08 D) → zusätzliche Kraft |
| Aceton | 58 | 56 | London + Dipol-Dipol | Stark polar (μ = 2,88 D) |
| Ethanol | 46 | 78 | London + H-Brücken | O–H kann H-Brücken bilden |
| H₂O | 18 | 100 | London + H-Brücken | 4 H-Brücken pro Molekül → anomal hoch |
| HF | 20 | 19,5 | London + H-Brücken (stärkste) | F–H···F: stärkste H-Brücke (25–40 kJ/mol) |
| Essigsäure | 60 | 118 | London + H-Brücken + Dimere | Bildet H-Brücken-Dimere → besonders hoher Sdp. |
| NaCl | 58,5 | 1465 | Ionisch | Ionengitter: extrem starke Coulomb-Kräfte |

> **Merke:** Der Siedepunkt steigt mit der Stärke der intermolekularen Kräfte: London (niedrigste Sdp.) < Dipol-Dipol < H-Brücken < ionisch (höchste Sdp.). Bei gleicher Kraft entscheidet die Molmasse und Kontaktfläche. H₂O siedet bei 100 °C trotz MM = 18 — nur durch H-Brücken erklärbar!

> **Prüfungstipp:** Siedepunkt-Vergleichsfragen sind MedAT-Klassiker. Vorgehen: (1) Welche intermolekularen Kräfte wirken? (2) H-Brücken möglich → höherer Sdp. (3) Bei gleichen Kräften: größere Molmasse/Kontaktfläche → höherer Sdp. Beispiel: Ethanol (78 °C) vs. Dimethylether (−24 °C) — gleiche Summenformel, aber nur Ethanol bildet H-Brücken.

---

## Dipol-Dipol-Wechselwirkungen

London-Kräfte wirken zwischen allen Molekülen. Besitzen Moleküle jedoch ein permanentes Dipolmoment, kommt eine weitere, stärkere Kraft hinzu.

**Mechanismus:** Die partiell positive Seite (δ+) eines polaren Moleküls orientiert sich bevorzugt zur partiell negativen Seite (δ−) des Nachbarmoleküls. Diese elektrostatische Anziehung ist stärker als reine London-Kräfte, aber schwächer als Wasserstoffbrücken.

**Stärke der Dipol-Dipol-Wechselwirkung hängt ab von:**
- **Größe des Dipolmoments:** Je polarer die Bindung (größerer ΔEN), desto stärker die Wechselwirkung
- **Orientierung:** Maximale Anziehung bei antiparalleler Ausrichtung der Dipole (Kopf-Schwanz)
- **Temperatur:** Bei hohen Temperaturen überwiegt die thermische Bewegung die Orientierung → Dipol-Dipol-Kräfte werden schwächer (im Gegensatz zu London-Kräften, die temperaturunabhängig sind)
- **Abstandsabhängigkeit:** r⁻³ (schnellerer Abfall als Ion-Dipol, aber langsamer als London)

**Beispiele für Dipol-Dipol-Wechselwirkungen:**
- **HCl** (μ = 1,08 D): siedet bei −85 °C, obwohl ähnliche Masse wie Ar (das bei −186 °C siedet) → Dipol-Dipol + London > nur London
- **Aceton** (CH₃COCH₃, μ = 2,88 D): siedet bei 56 °C, deutlich höher als Butan (−1 °C, ähnliche Masse, unpolar)
- **Chlormethan** (CH₃Cl, μ = 1,87 D): siedet bei −24 °C, höher als Ethan (−89 °C)

> **Merke:** Dipol-Dipol-Kräfte wirken zusätzlich zu London-Kräften bei polaren Molekülen. Je größer das permanente Dipolmoment und je niedriger die Temperatur, desto stärker ist die Wechselwirkung. Für unpolare Moleküle spielen sie keine Rolle — dort dominieren ausschließlich London-Kräfte.

{{DIAGRAM:intermolecular-forces}}

Ein Spezialfall ist die **Keesom-Wechselwirkung** (Anziehung zwischen zwei permanenten Dipolen) und die **Debye-Wechselwirkung** (permanenter Dipol erzeugt induzierten Dipol im Nachbarmolekül). Alle drei Beiträge (London + Keesom + Debye) werden zusammen als **Van-der-Waals-Kräfte** bezeichnet, wobei London-Kräfte fast immer den größten Anteil ausmachen.

| Van-der-Waals-Typ | Beteiligte Dipole | Stärke | Beispiel |
|---|---|---|---|
| London-Dispersion | Instantan ↔ induziert | 0,1–10 kJ/mol | Alle Moleküle (He, CH₄, Fette) |
| Keesom | Permanent ↔ permanent | 1–5 kJ/mol | HCl, Aceton, CHCl₃ |
| Debye | Permanent → induziert | 0,5–2 kJ/mol | HCl neben Ar; H₂O neben O₂ |

---

## Hierarchie der intermolekularen Kräfte — Stärkenvergleich

Nachdem wir London-Kräfte und Dipol-Dipol-Wechselwirkungen kennengelernt haben, ordnen wir nun alle Wechselwirkungstypen in eine Gesamthierarchie ein — von den schwächsten bis zu den stärksten.

Die **Stärkehierarchie** der Wechselwirkungen ist entscheidend für das Verständnis chemischer und biologischer Phänomene:

| Rang | Wechselwirkung | Stärke (kJ/mol) | Voraussetzung | Abstandsabhängigkeit | Beispiel |
|---|---|---|---|---|---|
| 1 | Kovalente Bindung | 150–1000 | Elektronenpaar | — | C–C, C=O, Peptidbindung |
| 2 | Ionische Bindung | 200–1000 | Entgegengesetzte Ionen | r⁻¹ | NaCl (786), MgO (3795) |
| 3 | Ion-Dipol | 50–200 | Ion + polares Molekül | r⁻² | Na⁺ in H₂O (Hydratation) |
| 4 | Wasserstoffbrücke | 10–40 | D–H···A (N,O,F) | r⁻² (gerichtet) | H₂O, DNA, α-Helix |
| 5 | Dipol-Dipol | 1–5 | Permanente Dipole | r⁻³ | HCl, Aceton |
| 6 | London-Dispersion | 0,1–10 | Alle Moleküle | r⁻⁶ | Edelgase, Alkane, Lipide |

**Faustregel für Siedepunkte:** kovalent >> Ionengitter > H-Brücken > Dipol-Dipol > London (bei ähnlicher Molmasse). In der Realität überlappen sich die Bereiche: Große Moleküle mit vielen London-Kräften (z. B. langkettige Alkane) können höhere Siedepunkte haben als kleine polare Moleküle.

**Prüfungsrelevante Abgrenzung:**
- Kovalente Bindung und Ionenbindung: **intramolekular** (halten Atome zusammen)
- H-Brücken, Dipol-Dipol, London: **intermolekular** (halten Moleküle zusammen)
- Ion-Dipol: Grenzfall (hält Ionen in Lösung)

---

**Ion-Dipol-Wechselwirkungen:** Wirken zwischen Ionen und polaren Molekülen — Grundlage der Hydratation/Solvatation. Na⁺ wird von den partiell negativen Sauerstoffatomen des Wassers umgeben (Hydratationszahl ~6), Cl⁻ von den partiell positiven Wasserstoffatomen. Diese Wechselwirkung ist der stärkste intermolekulare Krafttyp und ermöglicht das Lösen von Salzen in Wasser. Die Hydratationsenthalpie von Na⁺ beträgt −406 kJ/mol, von Cl⁻ −377 kJ/mol — zusammen fast so groß wie die Gitterenergie von NaCl (−786 kJ/mol).

## Wasserstoffbrückenbindungen (H-Brücken)

In der Hierarchie der intermolekularen Kräfte nehmen Wasserstoffbrücken eine besondere Stellung ein: Sie sind deutlich stärker als gewöhnliche Dipol-Dipol-Kräfte und spielen in der Biologie eine herausragende Rolle.

Die stärkste intermolekulare Kraft (außer Ionenbindungen) ist die Wasserstoffbrücke. Wasserstoffbrücken sind die wichtigste intermolekulare Kraft in biologischen Systemen — stärker als Dipol-Dipol-Kräfte und London-Kräfte. Sie erklären die Anomalien des Wassers, die DNA-Basenpaarung und die Proteinstruktur.

**Definition:** Wasserstoffbrücken entstehen, wenn ein Wasserstoff, der kovalent an ein hochelektronegatives Atom gebunden ist (N, O, F — „Donor"), elektrostatisch mit dem freien Elektronenpaar eines anderen elektronegativen Atoms („Akzeptor") wechselwirkt.

Schreibweise: **D–H···A** (D = Donor, A = Akzeptor; ··· = H-Brücke)

Bedingungen:
1. Donor: H kovalent an N, O oder F gebunden (stark polarisiertes H → δ+)
2. Akzeptor: N, O oder F mit freiem Elektronenpaar (hohe EN, kleiner Atomradius)
3. Geometrie: möglichst linear (180°) → stärkste Brücke; Abweichungen bis ~30° toleriert

**Die wichtigsten H-Brücken-Typen in der Biochemie:**

| H-Brücke | Typische Stärke (kJ/mol) | Biologisches Beispiel |
|---|---|---|
| **O–H···O** | 20–29 | Wasser–Wasser; Cellulose-Mikrofibrillen; Serin/Threonin in Proteinen |
| **O–H···N** | 15–25 | Tyrosin-OH als Donor an His-N in Enzymaktivzentren |
| **N–H···O** | 10–20 | α-Helix (Peptidbindung NH···O=C); β-Faltblatt; DNA-Basenpaarung |
| **N–H···N** | 10–15 | DNA: Adenin-NH₂···N7-Guanin; Histidin-Wechselwirkungen |
| **F–H···F** | 25–40 | Stärkste H-Brücke (HF: Sdp. 19,5 °C trotz MM = 20 g/mol!) |
| **O–H···F** | 20–30 | Fluorapatit im Zahnschmelz; Fluorid in wässriger Lösung |

**Energie:** 10–40 kJ/mol (viel stärker als reine van-der-Waals, aber schwächer als kovalente Bindungen). H-Brücken haben teilweise kovalenten Charakter (Elektronendichte wird geteilt). Trotzdem kollektiv enorm wichtig, da viele H-Brücken gleichzeitig wirken können — ein Protein kann Hunderte von H-Brücken enthalten.

**Warum sind H-Brücken so viel stärker als Dipol-Dipol?**
1. Wasserstoff hat keine inneren Elektronenschalen (nur 1 Elektron) → wenn H an N/O/F gebunden ist, liegt der positive Kern fast unabgeschirmt → extrem starke Anziehung zum Akzeptor-Elektronenpaar
2. Der kleine Radius des H-Atoms erlaubt einen sehr kurzen Abstand zum Akzeptor (≈160–200 pm für die H···A-Distanz)
3. Die Wechselwirkung hat partiellen kovalenten Charakter (Überlappung von Orbitalen)

> **Merke:** Nur N, O und F sind elektronegativ genug für starke H-Brücken. Schwefel (S–H) und Chlor (Cl) bilden nur sehr schwache H-Brücken (S–H···O: ~5 kJ/mol, biologisch vernachlässigbar). C–H-Gruppen sind normalerweise keine Donoren — außer in speziellen Fällen (C–H···π-Wechselwirkungen in aromatischen Systemen).

### H-Brücken in DNA, Proteinen und Wasser — Detailbetrachtung

**DNA-Basenpaarung im Detail:**
- **Adenin–Thymin (A–T):** 2 H-Brücken:
  - N6–H···O4 (Adenin-NH₂ als Donor, Thymin-C=O als Akzeptor)
  - N1···H–N3 (Adenin-N als Akzeptor, Thymin-NH als Donor)
  - Energie: ~8 kJ/mol pro H-Brücke → ~16 kJ/mol pro Basenpaar
- **Guanin–Cytosin (G–C):** 3 H-Brücken:
  - O6···H–N4 (Guanin-C=O als Akzeptor, Cytosin-NH₂ als Donor)
  - N1–H···N3 (Guanin-NH als Donor, Cytosin-N als Akzeptor)
  - N2–H···O2 (Guanin-NH₂ als Donor, Cytosin-C=O als Akzeptor)
  - Energie: ~24 kJ/mol pro Basenpaar → GC-reiche DNA ist ~50 % stabiler pro Paar
- **Konsequenz:** Die Schmelztemperatur (Tm) der DNA steigt linear mit dem GC-Gehalt. Faustregel: Tm ≈ 69,3 + 0,41 × (%GC) °C. Thermophile Organismen (Thermus aquaticus, Taq-Polymerase!) haben GC-reiche Genome.

**Proteinstruktur im Detail:**
- **α-Helix:** Rechtsgängig; H-Brücke zwischen C=O(i) und N–H(i+4); 3,6 Aminosäuren pro Windung; Ganghöhe 0,54 nm; alle CO-Gruppen zeigen in eine Richtung → Helixdipol. Häufig in Transmembranproteinen (7-TM bei GPCR).
- **β-Faltblatt:** H-Brücken zwischen benachbarten Strängen (parallel oder antiparallel); antiparallele β-Sheets haben lineare H-Brücken (stärker) → stabiler als parallele. Häufig in Seide (Fibroin) und Antikörper-Domänen.
- **Kollagen-Tripelhelix:** Spezialfall: 3 Ketten, verknüpft durch H-Brücken; Glycin an jeder dritten Position (Gly-X-Y); Hydroxyprolin (Y-Position) bildet zusätzliche H-Brücken → Stabilität; Vitamin-C-Mangel → keine Hydroxylierung → Skorbut (instabiles Kollagen).

> **Merke:** Die spezifische Basenpaarung der DNA (A–T: 2 H-Brücken, G–C: 3) ist die Grundlage der genetischen Information. In Proteinen bestimmen H-Brücken die Sekundärstruktur (α-Helix, β-Faltblatt, Kollagen). Beide Systeme nutzen die mittlere Stärke von H-Brücken: stark genug für Stabilität, schwach genug für enzymatische Trennung/Entfaltung.

> **Prüfungstipp:** „Warum ist GC-reiche DNA stabiler?" wird regelmäßig gefragt. Antwort: 3 vs. 2 H-Brücken pro Basenpaar. Merkhilfe: **G**–**C** = **3** Brücken (beide Buchstaben haben 3 Striche), **A**–**T** = **2** Brücken.

### Anomalie des Wassers

Wasser siedet bei 100 °C (H₂O, MM = 18 g/mol), während H₂S bei −60 °C siedet (MM = 34 g/mol). H₂O bildet bis zu 4 Wasserstoffbrücken pro Molekül (2 als Donor über die O–H-Bindungen, 2 als Akzeptor über die beiden freien Elektronenpaare am O). Daher:
- **Ungewöhnlich hoher Siedepunkt:** Ohne H-Brücken müsste Wasser bei ca. −80 °C sieden (Extrapolation aus H₂Te, H₂Se, H₂S)
- **Hohe Verdampfungsenthalpie** (40,7 kJ/mol bei 100 °C) → wichtig für Thermoregulation (Schwitzen kühlt effizient: ~580 kcal/L)
- **Dichte-Anomalie:** Eis (0 °C, 0,917 g/cm³) ist weniger dicht als flüssiges Wasser (4 °C, 1,000 g/cm³). Im Eis bildet sich ein hexagonales Gitter mit offenen Kanälen → geringere Packungsdichte → Eis schwimmt → Gewässer frieren von oben → aquatisches Leben überlebt
- **Hohe Wärmekapazität** (4,18 J/g·K) → Wasser ist ein ausgezeichneter Temperaturpuffer (Ozeanklima, Bluttemperatur)
- **Hohe Oberflächenspannung** (72,8 mN/m bei 20 °C — höchste aller Flüssigkeiten außer Quecksilber): H-Brücken an der Oberfläche → Kapillareffekt in Pflanzen (Xylem-Transport bis >100 m Höhe in Mammutbäumen), Alveolarstabilität (Surfactant reduziert Oberflächenspannung → verhindert Kollaps der Lungenbläschen → Frühgeborene ohne Surfactant: Atemnotsyndrom)
- **Kohäsion und Adhäsion:** H-Brücken zwischen Wassermolekülen (Kohäsion) erzeugen eine zusammenhängende Wassersäule; H-Brücken zwischen Wasser und Gefäßwänden (Adhäsion) ermöglichen den Kapillareffekt (Meniskus)

**Vergleich der Hydride der Gruppe 16 (Chalkogene):**

| Hydrid | Molmasse (g/mol) | Siedepunkt (°C) | H-Brücken? |
|---|---|---|---|
| H₂O | 18 | 100 | Ja (4 pro Molekül, O–H···O) |
| H₂S | 34 | −60 | Nein (S zu wenig EN, zu großer Radius) |
| H₂Se | 81 | −41 | Nein |
| H₂Te | 130 | −2 | Nein (nur London-Kräfte) |

Ohne H-Brücken müsste Wasser bei ca. −80 °C sieden (Extrapolation der Reihe H₂Te → H₂Se → H₂S). Der tatsächliche Siedepunkt von 100 °C ist eine Anomalie von +180 °C — vollständig durch H-Brücken erklärbar.

**Analoge Anomalien bei den Hydriden anderer Gruppen:**

| Gruppe | H-Brücken-Hydrid | Siedepunkt | Erwarteter Sdp. (Extrapolation) | Anomalie |
|---|---|---|---|---|
| 16 (Chalkogene) | H₂O | 100 °C | ca. −80 °C | +180 °C |
| 17 (Halogene) | HF | 19,5 °C | ca. −90 °C | +110 °C |
| 15 (Pniktogene) | NH₃ | −33 °C | ca. −90 °C | +57 °C |

Die Anomalie ist bei H₂O am größten (4 H-Brücken pro Molekül), bei HF ebenfalls stark (stärkste einzelne H-Brücke, aber nur 2 pro Molekül: 1 Donor, 3 Akzeptoren wegen 3 freier EP → Ketten statt Netzwerk). Bei NH₃ ist die Anomalie am kleinsten (1 freies EP = 1 Akzeptor, 3 Donoren → weniger H-Brücken pro Molekül als bei H₂O).

---

### Biologische Bedeutung der Wasserstoffbrücken

**DNA-Doppelhelix:** Adenin (A) bildet 2 H-Brücken mit Thymin (T); Guanin (G) bildet 3 H-Brücken mit Cytosin (C). GC-reiche DNA ist thermisch stabiler (Tm höher). Denaturierung durch Hitze bricht H-Brücken → Stränge trennen sich. Klinisch: GC-Gehalt bestimmt Primerdesign in der PCR.

**Proteinstruktur:**
- α-Helix: H-Brücke zwischen C=O der Aminosäure i und N–H der Aminosäure i+4 entlang der Helix.
- β-Faltblatt: H-Brücken zwischen parallelen oder antiparallelen Strängen.
- Tertiärstruktur: H-Brücken an Oberfläche und im Inneren stabilisieren die Faltung.

**Enzymkatalyse:** Aktives Zentrum: H-Brücken orientieren Substrat, stabilisieren Übergangszustände und ermöglichen stereoselektive Katalyse. Im aktiven Zentrum der Serinproteasen bildet das katalytische Triad (Ser-His-Asp) ein H-Brücken-Netzwerk.

### Denaturierung — wenn H-Brücken brechen

**Denaturierung** ist der Verlust der dreidimensionalen Struktur eines Proteins (oder einer Nukleinsäure) unter Erhalt der Primärstruktur (Peptidbindungen bleiben intakt). Der Vorgang zerstört Sekundär-, Tertiär- und Quartärstruktur — also genau jene Ebenen, die maßgeblich durch H-Brücken, hydrophobe Wechselwirkungen und Salzbrücken stabilisiert werden.

**Auslöser der Denaturierung:**

| Faktor | Mechanismus | Beispiel |
|---|---|---|
| **Hitze (>42 °C)** | Thermische Energie übersteigt H-Brücken-Energie → Bindungen brechen statistisch | Kochen eines Eis: Albumin denaturiert irreversibel (trüb, fest) |
| **Extremer pH** | H⁺/OH⁻ protonieren/deprotonieren Seitenketten → Salzbrücken + H-Brücken gestört | Magensäure (pH 1–2) denaturiert Nahrungsproteine → Pepsin spaltet |
| **Harnstoff (6–8 M)** | Konkurriert mit intramolekularen H-Brücken des Proteins → Entfaltung | Laborstandard: Harnstoff-PAGE, Protein-Aufreinigung |
| **Detergenzien (SDS)** | Amphiphile Moleküle zerstören hydrophobe Kerne + H-Brücken-Netzwerk | SDS-PAGE: linearisiert Proteine für Gelelektrophorese |
| **Schwermetalle** | Pb²⁺, Hg²⁺, Ag⁺ binden an −SH-Gruppen → Disulfidbrücken + Konformation gestört | Quecksilbervergiftung: Enzyminaktivierung |
| **Organische Lösungsmittel** | Ethanol, Aceton verdrängen Wasser → hydrophobe Wechselwirkungen gestört | Ethanol 70 %: Desinfektion durch Proteindenaturierung |

Hitze, extreme pH-Werte oder Schwermetalle zerstören die Wasserstoffbrücken in Proteinen → **Denaturierung** (Verlust der 3D-Struktur und Funktion, Primärstruktur bleibt intakt). Ab ca. 42 °C werden auch humane Proteine zunehmend denaturiert (Hitzschlag).

> **Merke:** Denaturierung = Strukturverlust durch Brechen nichtkovalenter Bindungen (H-Brücken, hydrophobe WW, Salzbrücken), NICHT der Peptidbindungen.

**Renaturierung vs. irreversible Denaturierung:**
- **Reversibel:** Kleine Proteine (<100 AS) können sich nach Entfernen des Denaturierungsmittels spontan zurückfalten (Anfinsen-Experiment: Ribonuklease A). Die Aminosäuresequenz enthält alle Informationen für die korrekte Faltung.
- **Irreversibel:** Große Proteine, aggregierte Proteine (gekochtes Ei), Prionen. Chaperone (Hsp70, Hsp90, GroEL/GroES) assistieren in der Zelle bei der korrekten Faltung und verhindern Aggregation.
- **Fehlfaltung:** Prionen (PrPˢᶜ) induzieren Umfaltung von PrPᶜ (α-Helix → β-Faltblatt) → unlösliche Amyloid-Aggregate → Creutzfeldt-Jakob-Krankheit, BSE. Auch bei Alzheimer (Aβ-Aggregate) und Parkinson (α-Synuclein) spielen H-Brücken-vermittelte β-Faltblatt-Fehlfaltungen eine zentrale Rolle.

---

**Weitere biologische Beispiele für H-Brücken:**
- **Cellulose:** β-1,4-Glucanketten, verknüpft durch O–H···O-Brücken → hohe Zugfestigkeit (Holz, Baumwolle).
- **Kohlenhydrat-Erkennung:** Lektine erkennen spezifische Kohlenhydrate an Zelloberflächen über H-Brücken → Immunabwehr, Blutgruppenbestimmung.

**Tabellarischer Überblick: H-Brücken in biologischen Systemen:**

| System | H-Brücken-Typ | Funktion | Konsequenz bei Störung |
|---|---|---|---|
| DNA-Basenpaarung | N–H···O, N–H···N | Komplementäre Basenpaarung A–T/G–C | Denaturierung → Replikationsfehler |
| α-Helix | N–H···O=C (i→i+4) | Lokale Sekundärstruktur | Entfaltung → Funktionsverlust |
| β-Faltblatt | N–H···O=C (Strang-Strang) | Flächige Sekundärstruktur | Amyloid-Fehlfaltung (Alzheimer) |
| Kollagen | N–H···O (Gly-X-Y) | Tripelhelix → Zugfestigkeit | Skorbut (Vitamin-C-Mangel) |
| Wasser | O–H···O | 3D-Netzwerk → alle Anomalien | — (Wasser ohne H-Brücken wäre gasförmig bei RT) |
| Enzym-Substrat | Diverse | Spezifische Erkennung, Katalyse | Kompetitive Hemmung |

**Wasser als Lösungsmittel — H-Brücken in der Solvatation:**
Wasser löst polare und ionische Substanzen durch Ausbildung von H-Brücken (und Ion-Dipol-Wechselwirkungen) mit dem gelösten Stoff. Die Hydratation von Glucose z. B. erfolgt über H-Brücken zwischen den zahlreichen OH-Gruppen der Glucose und den Wassermolekülen. Harnstoff (hohe H-Brücken-Kapazität: 4 Donoren, 1 Akzeptor) wirkt als Denaturierungsmittel, weil er mit den intramolekularen H-Brücken des Proteins konkurriert.

**Van-der-Waals-Kräfte in Zellmembranen:**
Die Integrität der Lipiddoppelschicht hängt nicht nur vom hydrophoben Effekt ab, sondern auch von London-Kräften zwischen den parallel angeordneten Fettsäureketten. Gesättigte Ketten packen sich dicht → stärkere London-Kräfte → rigidere Membran. Cis-ungesättigte Ketten erzeugen Knicke → lockere Packung → schwächere London-Kräfte → fluidere Membran. Cholesterol füllt Lücken zwischen ungesättigten Ketten und erhöht die Ordnung → bei 37 °C moduliert es die Membranfluidität optimal für die Zellfunktion.

| Fettsäure-Typ | Packung | London-Kräfte | Membranfluidität |
|---|---|---|---|
| Gesättigt (z. B. Palmitinsäure 16:0) | Dicht, parallel | Stark | Niedrig (rigide) |
| Cis-ungesättigt (z. B. Ölsäure 18:1) | Locker (Knick) | Schwächer | Hoch (fluid) |
| Trans-ungesättigt (z. B. Elaidinsäure) | Nahezu gerade | Stark (wie gesättigt) | Niedrig (pathologisch) |
| + Cholesterol | Lücken gefüllt | Reguliert | Optimal bei 37 °C |

## Metallbindung

Einen völlig anderen Bindungstyp finden wir bei Metallen — hier teilen sich nicht zwei Atome ein Elektronenpaar, sondern alle Valenzelektronen gehören dem gesamten Gitter gemeinsam.

### Elektronengasmodell (Drude-Modell)

**Modell:** Im Metall befinden sich die Metallatome im Gitter, ihre Valenzelektronen sind jedoch **delokalisiert** und bilden ein „Elektronengas" oder „Elektronenmeer", das sich frei durch das gesamte Gitter bewegt. Die positiven Metallionen (Rumpfionen) werden durch das Elektronengas zusammengehalten — die Bindung ist **ungerichtet** und **nicht gesättigt** (im Gegensatz zur kovalenten Bindung).

Die Bindungsstärke hängt ab von:
- **Anzahl der Valenzelektronen:** Mehr Valenzelektronen → dichteres Elektronengas → stärkere Bindung. Alkalimetalle (1 VE): weich, niedrige Schmelzpunkte; Übergangsmetalle (d-Elektronen): hart, hohe Schmelzpunkte.
- **Atomradius/Gitterabstand:** Kleinere Atome → dichtere Packung → stärkere metallische Bindung.
- **Kristallstruktur:** Kubisch-flächenzentriert (Cu, Au, Al) und hexagonal dichteste Packung (Zn, Mg) haben Koordinationszahl 12; kubisch-raumzentriert (Fe, W, Cr) hat KZ 8.

### Bändermodell (vereinfacht)

Das **Bändermodell** verfeinert das Elektronengas-Bild: In einem Kristall überlappen die Atomorbitale zu quasi-kontinuierlichen Energiebändern (Valenz- und Leitungsband). Die **Bandlücke** (Energiedifferenz dazwischen) bestimmt die Leitfähigkeit:

- **Metall:** Keine Bandlücke (Bänder überlappen) → sofortige Leitung. Leitfähigkeit sinkt bei steigender T (Gitterschwingungen streuen Elektronen).
- **Halbleiter** (Si, Ge): Kleine Bandlücke (0,1–3 eV) → Leitfähigkeit steigt mit T (mehr Elektronen überspringen die Lücke) — Gegenteil von Metallen!
- **Isolator** (Diamant, NaCl): Große Bandlücke (> 3 eV) → keine Leitung.

> **Merke:** Bandlücke bestimmt Leiter/Halbleiter/Isolator. Metall: Leitfähigkeit sinkt mit T; Halbleiter: steigt mit T — diese Gegenläufigkeit ist MedAT-relevant.

### Eigenschaften aus dem Elektronengas-Modell

**Elektrische Leitfähigkeit:** Das Elektronengas bewegt sich frei → exzellente Stromleitung ohne Ionenbewegung (anders als Elektrolyte). Kupfer, Silber, Gold: beste Leiter. Die Leitfähigkeit sinkt bei steigender Temperatur (mehr Gitterschwingungen → mehr Streuung der Elektronen → höherer Widerstand). Bestes Leitfähigkeitsranking: Ag > Cu > Au > Al > Fe.

**Wärmeleitfähigkeit:** Freie Elektronen transportieren thermische Energie schnell durch das Metall (Wiedemann-Franz-Gesetz: gute elektrische Leiter sind auch gute Wärmeleiter). Daher fühlt sich Metall kalt an — es leitet Wärme schnell von der Hand weg.

**Duktilität (Verformbarkeit):** Metallschichten können gegeneinander gleiten, ohne dass die Bindung bricht — das Elektronengas „schmiert" die Ionenschichten. Kein Bruch wie bei Ionenkristallen. Dies ermöglicht das Walzen, Ziehen und Schmieden von Metallen. Gold ist das duktilste Metall (1 g → 1 km Draht).

**Glanz:** Freie Elektronen können Lichtquanten (Photonen) aller sichtbaren Wellenlängen absorbieren und reemittieren → metallischer Glanz. Gold und Kupfer absorbieren bestimmte Wellenlängen bevorzugt → Farbigkeit (relativistische Effekte bei Au).

**Schmelzpunkte:** Variieren stark je nach Zahl und Bindungsstärke der Valenzelektronen.

| Metall | Valenzelektronen | Schmelzpunkt (°C) | Eigenschaft |
|---|---|---|---|
| Cs | 1 (s¹) | 28,5 | Weichstes Alkalimetall |
| Na | 1 (s¹) | 97,8 | Weich, reaktiv |
| Al | 3 (s²p¹) | 660 | Leicht, guter Leiter |
| Cu | 1 (d¹⁰s¹) | 1085 | Bester Alltagsleiter |
| Fe | 2 (d⁶s²) | 1538 | Hauptbestandteil Stahl |
| W | 6 (d⁴s²) | 3422 | Höchster Schmelzpunkt aller Metalle |

**Legierungen:** Mischungen von Metallen (oder Metall + Nichtmetall, z. B. Stahl = Fe + C). Eigenschaften können gezielt verändert werden (Härte, Korrosionsresistenz). Medizinisch relevant: Titan-Legierungen für Implantate (biokompatibel, korrosionsbeständig, nicht toxisch), Amalgam (Hg + Ag/Sn/Cu) in der Zahnmedizin (historisch, zunehmend durch Komposite ersetzt), Kobalt-Chrom-Molybdän für Gelenkprothesen.

**Medizinisch relevante Metalle und Metallverbindungen:**

| Metall | Medizinische Anwendung | Bindungsprinzip |
|---|---|---|
| Fe (Eisen) | Hämoglobin (Fe²⁺ im Häm), Myoglobin, Cytochrome | Koordinative Bindung im Porphyrinring |
| Cu (Kupfer) | Ceruloplasmin, Cytochrom-c-Oxidase | Redox-aktives Übergangsmetall |
| Zn (Zink) | >300 Enzyme (Carboanhydrase, Zinkfinger-Proteine) | Lewis-Säure im aktiven Zentrum |
| Ti (Titan) | Implantate (Hüfte, Zähne), Schrauben | Metallisch + Oxidschicht (TiO₂ = biokompatibel) |
| Pt (Platin) | Cisplatin (Krebstherapie) | Koordinative Bindung an DNA (Quervernetzung) |
| Au (Gold) | Auranofin (Rheumatherapie, historisch) | Koordinative Bindung an Thiolgruppen |
| Li (Lithium) | Stimmungsstabilisator bei bipolarer Störung | Li⁺ interferiert mit Signaltransduktion |
| Gd (Gadolinium) | MRT-Kontrastmittel (Gd-DTPA) | Paramagnetisch → verkürzt T1-Relaxationszeit |

**Supraleitung:** Einige Metalle zeigen bei sehr niedrigen Temperaturen Widerstand von exakt null (z. B. Nb unter 9,3 K). Medizinisch relevant: Supraleitende Magnete in **MRT-Geräten** (NbTi-Legierungen bei 4 K, Kühlung mit flüssigem Helium). Halbleiter (Si) sind Grundlage der Medizinelektronik (CT-Detektoren, Pulsoximeter, EKG).

---

### Vergleich der drei Bindungstypen

| Eigenschaft | Ionenbindung | Kovalente Bindung | Metallbindung |
|---|---|---|---|
| Bindungsprinzip | Elektronenübertragung | Elektronenpaarteilung | Delokalisiertes Elektronengas |
| Typische Partner | Metall + Nichtmetall | Nichtmetall + Nichtmetall | Metall + Metall |
| Gerichtetheit | Ungerichtet | Gerichtet (Winkel) | Ungerichtet |
| Schmelzpunkt | Hoch (800–3000 °C) | Niedrig bis mittel | Variabel (28–3422 °C) |
| Leitfähigkeit (fest) | Nein | Nein | Ja (Elektronengas) |
| Leitfähigkeit (flüssig) | Ja (Ionen) | Nein | Ja (Elektronengas) |
| Mechanik | Hart, spröde | Weich (molekular) | Duktil, verformbar |
| Löslichkeit (H₂O) | Oft gut | Variabel | Unlöslich |

> **Merke:** Metallbindung = delokalisiertes Elektronengas → erklärt ALLE metallischen Eigenschaften: Leitfähigkeit (Elektronen fließen), Duktilität (Schichten gleiten ohne Bruch), Glanz (Elektronen reflektieren Licht). Die Bindungsstärke steigt mit der Zahl der Valenzelektronen und sinkt mit dem Atomradius.`,

      lernziele: [
        "Die drei Arten von van-der-Waals-Kräften (London, Dipol-Dipol, Debye) unterscheiden und deren Abhängigkeit von Polarisierbarkeit, Molekülgröße und Temperatur erklären.",
        "Wasserstoffbrückenbindungen definieren, Donor- und Akzeptor-Atome benennen und die wichtigsten H-Brücken-Typen (O–H···O, N–H···O, F–H···F) mit biologischen Beispielen verknüpfen.",
        "Die Anomalien des Wassers (Siedepunkt, Dichte-Anomalie, hohe Wärmekapazität) mit der Fähigkeit zur H-Brückenbildung verknüpfen.",
        "Das Elektronengas-Modell und das Bändermodell der Metallbindung beschreiben und daraus metallische Eigenschaften sowie den Unterschied zu Halbleitern und Isolatoren ableiten.",
        "Die Stärke-Hierarchie aller Wechselwirkungen (kovalent >> H-Brücke > Dipol-Dipol > London) kennen und biologische Konsequenzen ableiten.",
        "Die Rolle von London-Kräften in Biomembranen erklären und den Einfluss gesättigter vs. ungesättigter Fettsäuren auf die Membranfluidität beschreiben.",
      ],

      sections: [
        {
          heading: "London-Dispersionskräfte und Dipol-Dipol-Wechselwirkungen",
          text: "London-Kräfte entstehen durch spontane Elektronenfluktuation (instantane Dipole) und wirken zwischen allen Molekülen. Ihre Stärke wächst mit der Polarisierbarkeit (Molekülgröße, Elektronenzahl) und der Kontaktfläche (Verzweigung verringert Kontaktfläche → niedrigerer Siedepunkt). Dipol-Dipol-Wechselwirkungen wirken zusätzlich zwischen permanenten Dipolen und erhöhen Siedepunkte polarer Substanzen über den Erwartungswert aufgrund ihrer Masse.",
          merksatz:
            "Je größer und unverzweigter das Molekül, desto stärker die London-Kräfte und höher der Siedepunkt.",
        },
        {
          heading: "Wasserstoffbrücken: Donor, Akzeptor, biologische Relevanz",
          text: "Wasserstoffbrücken sind die stärkste intermolekulare Kraft in biologischen Systemen. Nur H, das an N, O oder F gebunden ist, kann als Donor agieren (stark genug polarisiert). Als Akzeptor wirken N, O oder F mit freiem Elektronenpaar. In der DNA-Doppelhelix sind H-Brücken für die spezifische Basenpaarung (A-T: 2 Brücken; G-C: 3 Brücken) verantwortlich. In Proteinen bestimmen sie Sekundär- (α-Helix, β-Faltblatt) und Tertiärstruktur.",
          merksatz:
            "H-Brücke: H kovalent an N/O/F → wechselwirkt mit freiem Elektronenpaar an N/O/F.",
        },
        {
          heading: "Anomalien des Wassers",
          text: "Wasser zeigt mehrere anomale Eigenschaften, die auf sein H-Brückennetzwerk zurückgehen: extrem hoher Siedepunkt für seine Molmasse, hohe Verdampfungswärme (Thermoregulation durch Schwitzen), hohe Wärmekapazität (Temperaturpuffer), Dichte-Anomalie (Eis schwimmt auf Wasser → Schutz aquatischer Ökosysteme im Winter). Diese Eigenschaften machen Wasser zum universellen Lösungsmittel und zum Lebensmedium schlechthin.",
          merksatz:
            "Wasser: 4 H-Brücken pro Molekül → Anomalien in Siedepunkt, Dichte, Wärmekapazität.",
        },
        {
          heading: "Metallbindung: Elektronengas- und Bändermodell",
          text: "Im Metall sind Valenzelektronen über das gesamte Gitter delokalisiert (Elektronengas). Diese Delokalisierung erklärt alle charakteristischen Metalleigenschaften: elektrische und thermische Leitfähigkeit (freie Elektronen), Duktilität (Gleiten ohne Bruch, weil Elektronengas die Schichten zusammenhält), metallischer Glanz (freie Elektronen reflektieren alle sichtbaren Wellenlängen). Das Bändermodell verfeinert dies: Bei Metallen überlappen Valenz- und Leitungsband (keine Bandlücke → sofortige Leitung). Bei Halbleitern gibt es eine kleine Bandlücke (Leitung steigt mit T), bei Isolatoren eine große (keine Leitung).",
          merksatz:
            "Elektronengas = frei bewegliche Valenzelektronen → Leitfähigkeit + Duktilität + Glanz. Bandlücke bestimmt Leiter/Halbleiter/Isolator.",
        },
        {
          heading: "Dipol-Dipol-Wechselwirkungen",
          text: "Dipol-Dipol-Kräfte wirken zwischen Molekülen mit permanentem Dipolmoment. Die positive Seite eines Dipols orientiert sich zur negativen Seite des Nachbarmoleküls. Stärke: 1–5 kJ/mol, abhängig von Dipolmoment, Orientierung und Temperatur. Bei steigender Temperatur wird die thermische Bewegung stärker als die Orientierung → Dipol-Dipol-Kräfte werden schwächer. Zusammen mit London- und Debye-Kräften bilden sie die Van-der-Waals-Kräfte.",
          merksatz:
            "Dipol-Dipol: positive Seite zieht negative an; stärker als London, schwächer als H-Brücken; temperaturabhängig.",
        },
        {
          heading: "Hierarchie und Vergleich aller Wechselwirkungen",
          text: "Die Stärkehierarchie der Wechselwirkungen: kovalent ≈ ionisch >> Ion-Dipol >> H-Brücke >> Dipol-Dipol >> London. Kovalente und Ionenbindungen sind intramolekular (halten Atome zusammen). H-Brücken, Dipol-Dipol und London sind intermolekular (halten Moleküle zusammen). Für Siedepunkte und Löslichkeit sind die intermolekularen Kräfte entscheidend.",
          table: {
            headers: ["Wechselwirkung", "Stärke (kJ/mol)", "Voraussetzung", "Beispiele"],
            rows: [
              [
                "London-Dispersion",
                "0,1–10",
                "Alle Moleküle",
                "CH₄, Edelgase, Lipide, Fettsäureketten",
              ],
              ["Dipol-Dipol", "1–5", "Permanente Dipole", "HCl, Aceton, CHCl₃"],
              [
                "Wasserstoffbrücke",
                "10–40",
                "D–H mit N,O,F; Akzeptor N,O,F",
                "H₂O, DNA, α-Helix, Cellulose",
              ],
              ["Ion-Dipol", "50–200", "Ion + polares Molekül", "Na⁺ in H₂O, Hydratation"],
              ["Ionisch", "200–1000", "Entgegengesetzte Ionen", "NaCl, MgO, CaF₂"],
              ["Kovalent", "150–1000", "Elektronenpaare", "C–C, C=O, Peptidbindung"],
            ],
          },
        },
        {
          heading: "London-Kräfte in Biomembranen",
          text: "Die Lipiddoppelschicht wird durch London-Kräfte zwischen parallel angeordneten Fettsäureketten zusammengehalten. Gesättigte Ketten packen dicht → starke London-Kräfte → rigide Membran. Cis-ungesättigte Ketten haben Knicke → lockere Packung → schwächere London-Kräfte → fluidere Membran. Cholesterol füllt Lücken und reguliert Fluidität. Trans-Fettsäuren (kein Knick) packen wie gesättigt → pathologisch erhöhte Membranrigidität.",
          merksatz:
            "Membranfluidität: gesättigt = rigide (starke London); cis-ungesättigt = fluid (schwache London); Cholesterol = Regulator.",
        },
      ],

      merksätze: [
        "London-Kräfte steigen mit Molmasse und Kontaktfläche — Verzweigung senkt Kontaktfläche → niedrigerer Siedepunkt.",
        "Stärke-Hierarchie: kovalent ≈ ionisch >> Ion-Dipol >> H-Brücke >> Dipol-Dipol >> London.",
        "H-Brücke: nur N, O, F als Donor/Akzeptor; stärkste einzelne H-Brücke: F–H···F (25–40 kJ/mol).",
        "DNA: A–T = 2 H-Brücken; G–C = 3 → GC-reich = thermisch stabiler.",
        "Wasser: 4 H-Brücken pro Molekül → anomal hoher Siedepunkt, Dichteanomalie, hohe Wärmekapazität.",
        "Metallbindung: delokalisiertes Elektronengas → Leitfähigkeit, Duktilität, Glanz; Ionenkristall dagegen spröde.",
        "Bandlücke: keine = Metall; klein = Halbleiter (Leitfähigkeit steigt mit T); groß = Isolator.",
      ],

      altfrage: {
        text: "Warum ist GC-reiche DNA thermisch stabiler als AT-reiche DNA?",
        options: [
          {
            id: "a",
            text: "Guanin und Cytosin bilden kovalente Bindungen, Adenin und Thymin nur ionische.",
          },
          {
            id: "b",
            text: "GC-Paare haben 3 Wasserstoffbrücken, AT-Paare nur 2 — mehr Energie zum Aufbrechen nötig.",
          },
          { id: "c", text: "GC-Paare sind durch Disulfidbrücken zusätzlich stabilisiert." },
          {
            id: "d",
            text: "AT-Paare haben ein höheres Molekulargewicht und destabilisieren die Helix.",
          },
          {
            id: "e",
            text: "GC-reiche DNA hat eine größere Windungstiefe, was die Stabilität erhöht.",
          },
        ],
        correctOptionId: "b",
        explanation:
          "G-C: 3 H-Brücken, A-T: 2 H-Brücken. Mehr H-Brücken = höhere Schmelztemperatur (Tm). Klinisch relevant für PCR-Primer-Design.",
      },

      klinischerBezug:
        "Wasserstoffbrücken in der DNA-Doppelhelix (A-T: 2; G-C: 3) sind die molekulare Grundlage für die Spezifität der Basenpaarung bei Replikation und Transkription; GC-reiche Promotor-Bereiche und die thermische Stabilität von DNA werden durch H-Brücken-Statistik bestimmt und sind klinisch relevant für PCR-Diagnostik und Gentechnik. Die hohe Wärmekapazität und Verdampfungswärme des Wassers ermöglichen die Thermoregulation des Menschen durch Schwitzen (Verdampfung von ~580 kcal/L Schweiß). London-Kräfte bestimmen die Membranfluidität: Gesättigte Fettsäuren → rigide, ungesättigte → fluid; Cholesterol moduliert bei 37 °C. Das Bändermodell erklärt die Funktion von Halbleitern in medizinischen Geräten (Si-Detektoren in CT, Photodioden in Pulsoximetern). Supraleitende NbTi-Magnete in MRT-Geräten basieren auf dem quantenmechanischen Phänomen der Cooper-Paar-Bildung bei 4 K.",

      selfTest: [
        {
          question: "Welche intermolekulare Kraft wirkt zwischen Edelgasatomen (z. B. Helium, He)?",
          options: [
            "London-Dispersionskraft",
            "Wasserstoffbrückenbindung",
            "Ionische Wechselwirkung",
            "Dipol-Dipol-Wechselwirkung",
            "Kovalente Bindung",
          ],
          correctIndex: 0,
          explanation:
            "Edelgasatome sind unpolar, besitzen keine permanenten Dipole und bilden keine Wasserstoffbrücken. Die einzige intermolekulare Kraft zwischen ihnen sind London-Dispersionskräfte (van-der-Waals), die durch instantane Elektronenfluktuation entstehen. Obwohl diese Kräfte sehr schwach sind (He siedet bei −269 °C, nahe 0 K), sind sie die Ursache dafür, dass Edelgase überhaupt verflüssigt werden können. Mit größerer Elektronenzahl (Kr, Xe) werden London-Kräfte stärker und die Siedepunkte steigen.",
          hints: [
            "Edelgase sind vollständig unpolar.",
            "Welche Kraft wirkt auch bei komplett unpolaren Teilchen?",
          ],
          difficulty: 2,
          tags: ["london-kräfte", "edelgase", "van-der-waals"],
        },
        {
          question:
            "Warum hat n-Pentan (unverzweigt) einen höheren Siedepunkt als Neopentan (stark verzweigt), obwohl beide die Summenformel C₅H₁₂ haben?",
          options: [
            "n-Pentan ist polarer als Neopentan.",
            "n-Pentan hat eine größere Kontaktfläche → stärkere London-Kräfte.",
            "n-Pentan hat mehr Wasserstoffbrücken.",
            "Neopentan hat eine höhere Molmasse.",
            "n-Pentan bildet Dipol-Dipol-Wechselwirkungen, Neopentan nicht.",
          ],
          correctIndex: 1,
          explanation:
            "n-Pentan und Neopentan (2,2-Dimethylpropan) haben identische Summenformel C₅H₁₂, also gleiche Elektronenzahl und Polarisierbarkeit. Der Unterschied liegt in der Gestalt: n-Pentan ist kettenartig gestreckt und bietet eine große Kontaktfläche für London-Kräfte. Neopentan ist kugelförmig kompakt (niedrige Kontaktfläche). Stärkere London-Kräfte bei n-Pentan → höherer Siedepunkt (36 °C vs. 9,5 °C für Neopentan). Dieses Prinzip erklärt auch, warum unverzweigte Fettsäuren höhere Schmelzpunkte haben.",
          hints: [
            "Beide Moleküle sind unpolar → nur London-Kräfte.",
            "Was beeinflusst die Stärke von London-Kräften außer der Elektronenzahl?",
          ],
          difficulty: 3,
          tags: ["london-kräfte", "verzweigung", "kontaktfläche"],
        },
        {
          question:
            "Welche Bedingungen muss ein Atom erfüllen, um als Wasserstoffbrücken-Donor zu fungieren?",
          options: [
            "Es muss ein freies Elektronenpaar besitzen.",
            "Es muss ein Metall sein.",
            "Es muss ein Wasserstoffatom kovalent an N, O oder F gebunden haben.",
            "Es muss negativ geladen sein.",
            "Es muss eine sp³-Hybridisierung aufweisen.",
          ],
          correctIndex: 2,
          explanation:
            "Ein Wasserstoffbrücken-Donor ist ein Atom, das ein Wasserstoffatom kovalent an ein hochelektronegatives Atom (N, O oder F) gebunden trägt. Das H-Atom ist durch die starke Elektronegativität des gebundenen Atoms stark positiv polarisiert (δ+) und kann dann elektrostatisch mit einem freien Elektronenpaar eines Akzeptors (ebenfalls N, O oder F) wechselwirken. Ohne die kovalente D–H-Bindung (D = N, O, F) wäre H nicht ausreichend polarisiert und könnte keine echte H-Brücke bilden.",
          hints: [
            "Donor = liefert das H; Akzeptor = liefert das freie Elektronenpaar.",
            "Nur N, O, F sind elektronegativ genug für H-Brücken.",
          ],
          difficulty: 2,
          tags: ["wasserstoffbrücken", "donor", "akzeptor"],
        },
        {
          question:
            "Warum bildet Guanin-Cytosin (G-C) ein stabileres Basenpaar als Adenin-Thymin (A-T) in der DNA?",
          options: [
            "G-C-Basenpaare sind kovalent verknüpft, A-T-Paare nicht.",
            "G-C-Paare liegen tiefer in der Helix vergraben.",
            "G und C sind größere Moleküle mit stärkeren London-Kräften.",
            "G-C-Paare haben 3 Wasserstoffbrücken, A-T-Paare nur 2.",
            "A-T-Paare stoßen sich elektrostatisch ab.",
          ],
          correctIndex: 3,
          explanation:
            "In der Watson-Crick-Basenpaarung bildet Guanin mit Cytosin 3 Wasserstoffbrücken, während Adenin mit Thymin nur 2 H-Brücken ausbildet. Da jede Wasserstoffbrücke etwa 10–20 kJ/mol Energie liefert, ist das G-C-Paar stabiler. DNA-Segmente mit hohem GC-Gehalt haben daher eine höhere Schmelztemperatur (Tm). Dies ist relevant für das Primerdesign in der PCR: GC-reiche Primer benötigen höhere Anlagerungstemperaturen.",
          hints: [
            "Zählen Sie die H-Brücken pro Basenpaar.",
            "Mehr H-Brücken = mehr Energie zum Trennen nötig.",
          ],
          difficulty: 2,
          tags: ["dna", "gc-paar", "basenpaarung"],
        },
        {
          question:
            "Welche Eigenschaft der Metallbindung erklärt, dass Metalle elektrischen Strom leiten?",
          options: [
            "Metalle enthalten frei bewegliche Ionen.",
            "Die Gitterenergie ist hoch genug für Ionenmobilität.",
            "Metallkationen wandern unter Spannung wie in Elektrolytlösungen.",
            "Metalle haben kovalente Bindungen, die Elektronen transportieren.",
            "Delokalisierte Valenzelektronen (Elektronengas) können sich frei durch das Gitter bewegen.",
          ],
          correctIndex: 4,
          explanation:
            "Das Elektronengas-Modell der Metallbindung postuliert, dass Valenzelektronen von keinem einzelnen Atom festgehalten werden, sondern über das gesamte Metallgitter delokalisiert sind. Unter einer angelegten elektrischen Spannung fließen diese freien Elektronen gerichtet durch das Gitter — das ist elektrischer Strom. Im Gegensatz zu Elektrolytlösungen (Ionenstrom) oder Halbleitern (aktivierter Elektronenfluss) brauchen Metalle keine Aktivierungsenergie für die Leitfähigkeit, weshalb sie bei Raumtemperatur exzellente Leiter sind.",
          hints: [
            "Metallbindung = Elektronengas-Modell.",
            "Was ist der Träger des elektrischen Stroms in Metallen?",
          ],
          difficulty: 2,
          tags: ["metallbindung", "elektronengas", "leitfähigkeit"],
        },
        {
          question: "Warum ist Eis (H₂O, fest) weniger dicht als flüssiges Wasser bei 4 °C?",
          options: [
            "Im Eis bilden die H-Brücken ein hexagonales Gitter mit größerem Abstand zwischen den Molekülen als im flüssigen Wasser.",
            "Eis hat eine höhere Molmasse als flüssiges Wasser.",
            "Flüssiges Wasser enthält mehr gelöste Gase, die Dichte erhöhen.",
            "Eis ist amorph und hat daher weniger Ordnung als flüssiges Wasser.",
            "Die kovalenten O–H-Bindungen sind im Eis länger als im flüssigen Zustand.",
          ],
          correctIndex: 0,
          explanation:
            "Im flüssigen Wasser sind H-Brücken ständig in Bewegung und Moleküle können dichter gepackt werden. Im Eis (Hexagonaleis) bilden die Wassermoleküle ein regelmäßiges hexagonales H-Brückengitter, in dem jedes Molekül genau 4 H-Brücken zu seinen Nachbarn unterhält. Diese Gitterstruktur hat große, offene Kanäle → niedrigere Dichte als flüssiges Wasser. Bei 4 °C hat flüssiges Wasser die höchste Dichte (1,000 g/mL). Diese Dichte-Anomalie ist biologisch überlebenswichtig: Eis schwimmt auf Wasser, Gewässer frieren von oben zu, das Wasser darunter bleibt flüssig.",
          hints: [
            "Hexagonales Eisgitter: 4 H-Brücken pro Molekül, offene Struktur.",
            "Warum schwimmt Eis auf Wasser — Dichte-Vergleich?",
          ],
          difficulty: 3,
          tags: ["eis", "dichteanomalie", "wasserstoffbrücken"],
        },
        {
          question:
            "Welche Eigenschaft unterscheidet Metalle grundsätzlich von Ionenkristallen in Bezug auf mechanische Verformbarkeit?",
          options: [
            "Metalle sind spröde, Ionenkristalle sind duktil.",
            "Metalle sind duktil, weil das Elektronengas Ionenschichten zusammenhält auch nach dem Gleiten; Ionenkristalle brechen, weil Verschiebung gleichnamige Ionen nebeneinander bringt.",
            "Ionenkristalle haben niedrigere Schmelzpunkte als Metalle.",
            "Ionenkristalle haben stärkere Bindungen als Metalle.",
            "Metalle haben kovalente Bindungen, die plastische Verformung erlauben.",
          ],
          correctIndex: 1,
          explanation:
            "Wenn Metallschichten gegeneinander gleiten, bleibt das Elektronengas ständig zwischen den Metallkationen und hält sie zusammen — es gibt keine ungünstige elektrostatische Situation. Das Metall kann sich plastisch verformen (duktil/formbar) ohne zu brechen. In Ionenkristallen dagegen führt eine Verschiebung der Schichten dazu, dass gleichnamig geladene Ionen nebeneinander zu liegen kommen → elektrostatische Abstoßung → Bruch (spröde). Metalle können gewalzt, gezogen und gebogen werden, Salzkristalle brechen.",
          hints: [
            "Was passiert bei Ionenverschiebung mit den Ladungen?",
            "Elektronengas: hält immer zusammen, egal wie Ionen verschoben.",
          ],
          difficulty: 3,
          tags: ["duktilität", "metallbindung", "ionenkristall"],
        },
        {
          question:
            "Ordnen Sie folgende Wechselwirkungen nach aufsteigender Stärke (schwächste zuerst): Ionenbindung, London-Kräfte, Wasserstoffbrücke, kovalente Bindung.",
          options: [
            "London < Ionenbindung < Wasserstoffbrücke < kovalent",
            "Wasserstoffbrücke < London < Ionenbindung < kovalent",
            "London < Wasserstoffbrücke < Ionenbindung < kovalent",
            "London < Wasserstoffbrücke < kovalent < Ionenbindung",
            "London = Wasserstoffbrücke < Ionenbindung < kovalent",
          ],
          correctIndex: 2,
          explanation:
            "Die korrekte Reihenfolge nach aufsteigender Stärke ist: London-Dispersionskräfte (0,1–10 kJ/mol) < Wasserstoffbrücken (10–40 kJ/mol) < Ionenbindung (200–1000 kJ/mol) < kovalente Bindung (150–1000 kJ/mol, je nach Bindung). Hinweis: Ionenbindung und kovalente Bindung überlappen sich im Bereich, aber starke kovalente Mehrfachbindungen können Ionenbindungen übertreffen. Wasserstoffbrücken sind trotz ihrer geringen Einzelstärke kollektiv in biologischen Makromolekülen dominierend.",
          hints: [
            "London: instantane Dipole, sehr schwach.",
            "H-Brücken: stärker als London, aber schwächer als echte Bindungen.",
          ],
          difficulty: 3,
          tags: ["wechselwirkungen", "reihenfolge", "stärke"],
        },
        {
          question:
            "Warum leiten Halbleiter (z. B. Silizium) bei höherer Temperatur besser als bei niedriger — im Gegensatz zu Metallen?",
          options: [
            "Halbleiter haben mehr Valenzelektronen als Metalle.",
            "Die Ionenbeweglichkeit in Halbleitern steigt mit der Temperatur.",
            "Halbleiter werden bei hoher Temperatur zu Metallen.",
            "Bei Halbleitern müssen Elektronen die Bandlücke überwinden, was bei höherer Temperatur leichter wird; bei Metallen gibt es keine Bandlücke, aber mehr Gitterschwingungen streuen die Elektronen.",
            "Halbleiter haben bei niedrigen Temperaturen zu viele freie Elektronen, die sich gegenseitig stören.",
          ],
          correctIndex: 3,
          explanation:
            "Im Bändermodell haben Halbleiter eine kleine Bandlücke (z. B. Si: 1,1 eV) zwischen Valenz- und Leitungsband. Bei niedrigen Temperaturen befinden sich fast alle Elektronen im Valenzband und können keinen Strom leiten. Bei steigender Temperatur erhalten Elektronen genügend thermische Energie, um die Bandlücke zu überspringen und ins Leitungsband zu gelangen → Leitfähigkeit steigt. Bei Metallen überlappen die Bänder bereits (keine Lücke), aber steigende Temperatur erhöht die Gitterschwingungen (Phononen), die die freien Elektronen streuen → Widerstand steigt, Leitfähigkeit sinkt.",
          hints: [
            "Bandlücke: Energie, die Elektronen zum Leiten brauchen.",
            "Temperatureffekt: Metalle und Halbleiter verhalten sich gegensätzlich.",
          ],
          difficulty: 3,
          tags: ["bändermodell", "halbleiter", "temperatur"],
        },
        {
          question:
            "Welche intermolekulare Kraft ist hauptsächlich für den Zusammenhalt der Fettsäureketten in einer Zellmembran verantwortlich?",
          options: [
            "Wasserstoffbrücken zwischen den Kohlenwasserstoffketten",
            "Kovalente Bindungen zwischen den Lipidmolekülen",
            "Dipol-Dipol-Kräfte zwischen den gesättigten Ketten",
            "Ionische Wechselwirkungen zwischen den Fettsäureköpfen",
            "London-Dispersionskräfte zwischen den parallel angeordneten Kohlenwasserstoffketten",
          ],
          correctIndex: 4,
          explanation:
            "Die Kohlenwasserstoffketten der Phospholipide sind unpolar — sie besitzen keine permanenten Dipole und können keine H-Brücken bilden. Die einzige intermolekulare Kraft zwischen ihnen sind London-Dispersionskräfte. Da die Ketten parallel angeordnet sind und große Kontaktflächen bieten, sind diese London-Kräfte in Summe beträchtlich. Gesättigte Ketten packen dichter → stärkere London-Kräfte → rigidere Membran. Cis-ungesättigte Ketten haben Knicke → lockere Packung → schwächere London-Kräfte → fluidere Membran.",
          hints: [
            "Kohlenwasserstoffketten sind unpolar — welche Kräfte wirken bei unpolaren Molekülen?",
            "Kontaktfläche beeinflusst die Stärke der London-Kräfte.",
          ],
          difficulty: 3,
          tags: ["london-kräfte", "membran", "fettsäuren"],
        },
        {
          question: "Welche Aussage über Dipol-Dipol-Wechselwirkungen ist korrekt?",
          options: [
            "Dipol-Dipol-Wechselwirkungen wirken nur zwischen Molekülen mit permanentem Dipolmoment und werden bei höherer Temperatur schwächer.",
            "Dipol-Dipol-Kräfte werden bei steigender Temperatur stärker, weil sich die Moleküle schneller bewegen.",
            "Dipol-Dipol-Kräfte wirken zwischen allen Molekülen, auch unpolaren.",
            "Dipol-Dipol-Kräfte sind stärker als Wasserstoffbrücken.",
            "Dipol-Dipol-Kräfte erfordern das Vorhandensein von Ionen.",
          ],
          correctIndex: 0,
          explanation:
            "Dipol-Dipol-Wechselwirkungen erfordern permanente Dipolmomente — sie wirken nur zwischen polaren Molekülen (z. B. HCl, Aceton, CHCl₃). Bei steigender Temperatur wird die thermische Bewegung stärker als die bevorzugte antiparallele Orientierung der Dipole → die Dipol-Dipol-Kräfte werden effektiv schwächer. Dies unterscheidet sie von London-Kräften, die temperaturunabhängig sind. Dipol-Dipol-Kräfte (1–5 kJ/mol) sind schwächer als Wasserstoffbrücken (10–40 kJ/mol), aber stärker als reine London-Kräfte bei Molekülen gleicher Größe.",
          hints: [
            "Permanente Dipole: nur bei polaren Molekülen.",
            "Höhere Temperatur → stärkere thermische Bewegung → weniger Orientierung.",
          ],
          difficulty: 3,
          tags: ["dipol-dipol", "temperatur", "polare-moleküle"],
        },
        {
          question:
            "Bei welcher Temperatur beginnt beim Menschen die irreversible Proteindenaturierung mit Organversagen?",
          options: [
            "Ab 37 °C — jede Temperaturerhöhung ist schädlich",
            "Ab ca. 42 °C — Hitzschlag mit massiver Proteindenaturierung in Leber, Niere und Gehirn",
            "Ab 40 °C — alle Proteine denaturieren sofort",
            "Ab 38 °C — daher ist jedes Fieber gefährlich",
            "Erst ab 50 °C — der Körper toleriert problemlos bis 49 °C",
          ],
          correctIndex: 1,
          explanation:
            "Humane Proteine sind auf 37 °C optimiert und tolerieren moderate Fieberschübe (38–41 °C) — Fieber ist sogar ein Abwehrmechanismus, da bakterielle Enzyme bei diesen Temperaturen bereits Aktivität verlieren. Ab ca. 42 °C beginnt jedoch massive Denaturierung auch menschlicher Proteine: H-Brücken und hydrophobe Wechselwirkungen brechen vermehrt → Enzyme verlieren Funktion → Organversagen (Hitzschlag). Die Grenze ist nicht scharf, aber klinisch gilt: Kerntemperatur >42 °C = lebensbedrohlich.",
          hints: [
            "Fieber bis 41 °C kann der Körper kompensieren — ab wann wird es kritisch?",
            "Denaturierung betrifft H-Brücken und hydrophobe WW, nicht Peptidbindungen.",
          ],
          difficulty: 3,
          tags: ["denaturierung", "fieber", "hitzschlag"],
        },
        {
          question: "Was passiert bei der Denaturierung eines Proteins auf molekularer Ebene?",
          options: [
            "Peptidbindungen werden hydrolytisch gespalten → einzelne Aminosäuren entstehen",
            "Disulfidbrücken und Peptidbindungen werden gleichzeitig gespalten",
            "Nichtkovalente Bindungen (H-Brücken, hydrophobe WW, Salzbrücken) brechen → Sekundär-/Tertiärstruktur geht verloren, Primärstruktur bleibt erhalten",
            "Die Aminosäuresequenz wird verändert → neue Primärstruktur entsteht",
            "Kovalente C–C-Bindungen im Proteinrückgrat brechen → Fragmente entstehen",
          ],
          correctIndex: 2,
          explanation:
            "Denaturierung zerstört die dreidimensionale Konformation (Sekundär-, Tertiär-, Quartärstruktur), indem nichtkovalente Wechselwirkungen (H-Brücken, hydrophobe Effekte, Salzbrücken, van-der-Waals-Kräfte) gebrochen werden. Die kovalenten Peptidbindungen der Primärstruktur bleiben intakt — das ist der entscheidende Unterschied zur Proteolyse (enzymatische Spaltung). Denaturierte Proteine verlieren ihre biologische Funktion, können aber unter günstigen Bedingungen renaturieren (Anfinsen-Experiment: Ribonuklease A).",
          hints: [
            "Welche Bindungen bestimmen die 3D-Struktur? Sind es kovalente oder nichtkovalente?",
            "Primärstruktur = Aminosäuresequenz. Bleibt sie bei Denaturierung erhalten?",
          ],
          difficulty: 2,
          tags: ["denaturierung", "proteinstruktur", "nichtkovalent"],
        },
      ],
    },

    // ch-6-04 archiviert → _archiv/chemie/kap6-bindung-archived-uks.ts (NOT explicitly in MedAT scope)
  ],
};
