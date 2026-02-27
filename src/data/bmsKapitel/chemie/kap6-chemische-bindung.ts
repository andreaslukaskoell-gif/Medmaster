// @ts-nocheck
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
      content: `## Einleitung

Warum steht an jedem Krankenbett ein Beutel mit NaCl-Lösung — und warum löst sich dieses Salz überhaupt so gut in Wasser? Die Antwort führt zur **Ionenbindung**: Natrium übergibt sein Valenzelektron komplett an Chlor, und die entstehenden Na⁺- und Cl⁻-Ionen ordnen sich in einem Kristallgitter an, das durch enorme elektrostatische Kräfte zusammengehalten wird. Diese **Gitterenergie** bestimmt Schmelzpunkt, Härte und Löslichkeit — und erklärt, warum MgO bei 2852 °C schmilzt, während NaCl bereits bei 801 °C flüssig wird.

**In diesem Kapitel lernst du:**
- wie die Ionenbindung durch vollständige Elektronenübertragung entsteht und warum Metall-Nichtmetall-Paare besonders stabil sind
- warum doppelte Ladung und kleinerer Radius die Gitterenergie drastisch erhöhen (Coulomb-Gesetz)
- wie der Born-Haber-Kreisprozess die Gitterenergie indirekt berechnet
- warum Ionenkristalle hart, aber spröde sind und erst in Lösung oder Schmelze Strom leiten

---

## Entstehung der Ionenbindung

Die **Ionenbindung** (heteropolare Bindung) entsteht durch vollständige **Elektronenübertragung** von einem Metall auf ein Nichtmetall. Treibende Kraft ist das Bestreben beider Atome, die stabile Edelgaskonfiguration zu erreichen (Oktettregel). Metalle haben niedrige Ionisierungsenergien und geben Elektronen leicht ab; Nichtmetalle besitzen hohe Elektronenaffinitäten und nehmen Elektronen bereitwillig auf. Die Elektronegativitätsdifferenz (ΔEN) zwischen den Bindungspartnern beträgt typischerweise > 1,7 auf der Pauling-Skala.

**Beispiel NaCl:**
Na (2-8-1) + Cl (2-8-7) → Na⁺ (2-8) + Cl⁻ (2-8-8)

Natrium gibt sein einzelnes Valenzelektron ab und wird zum Na⁺-Kation; Chlor nimmt dieses Elektron auf und wird zum Cl⁻-Anion. Beide besitzen nun die Elektronenkonfiguration von Edelgasen (Neon bzw. Argon).

> **Merke:** Ionenbindungen entstehen bevorzugt zwischen Elementen der 1./2. Hauptgruppe (Metalle, niedrige IE) und der 6./7. Hauptgruppe (Nichtmetalle, hohe EA). Die EN-Differenz muss > 1,7 betragen.

{{DIAGRAM:periodic-table}}

**Weitere Beispiele:**
- **MgCl₂:** Mg gibt 2 Elektronen ab → Mg²⁺ (Ne-Konfiguration); jedes Cl nimmt 1 Elektron auf → 2 Cl⁻ (Ar-Konfiguration)
- **CaO:** Ca gibt 2 Elektronen ab → Ca²⁺; O nimmt 2 Elektronen auf → O²⁻ — beide erreichen die Ar- bzw. Ne-Konfiguration
- **Al₂O₃:** Aluminium gibt 3 Elektronen ab → Al³⁺; hohe Ladung → extrem hohe Gitterenergie → Schmelzpunkt 2072 °C

{{DIAGRAM:atomic-orbitals}}

## Born-Haber-Kreisprozess und Gitterenergie

Die **Gitterenergie** U ist die Energie, die freigesetzt wird, wenn gasförmige Ionen zu einem Ionenkristall zusammentreten. Sie ist der entscheidende Energiebeitrag bei der Ionenbindung und kann experimentell nicht direkt gemessen werden. Im Born-Haber-Kreisprozess wird die Bildungsenthalpie einer Ionenverbindung schrittweise aus messbaren Teilenthalpien berechnet:

1. Sublimationsenergie des Metalls (endotherm): Na(s) → Na(g), ΔH = +107 kJ/mol
2. Ionisierungsenergie des Metalls (endotherm): Na(g) → Na⁺(g) + e⁻, ΔH = +496 kJ/mol
3. Bindungsenergie des Nichtmetalls (endotherm): ½ Cl₂(g) → Cl(g), ΔH = +122 kJ/mol
4. Elektronenaffinität des Nichtmetalls (exotherm): Cl(g) + e⁻ → Cl⁻(g), ΔH = −349 kJ/mol
5. **Gitterenergie** (stark exotherm): Na⁺(g) + Cl⁻(g) → NaCl(s), ΔH = −786 kJ/mol

Die Summe aller Teilschritte ergibt die Bildungsenthalpie: ΔHf(NaCl) = −411 kJ/mol. Die Gitterenergie dominiert als größter exothermer Term und macht die Gesamtreaktion thermodynamisch günstig.

Je kleiner der Ionenradius und je höher die Ladung der Ionen, desto größer die Gitterenergie. Das **Coulombsche Gesetz** beschreibt die elektrostatische Kraft zwischen zwei Punktladungen:

**F = k · (q₁ · q₂) / r²**

wobei k die Coulomb-Konstante (8,99 × 10⁹ N·m²/C²), q₁ und q₂ die Ladungen und r der Abstand ist. Die Gitterenergie ist proportional zu q₁·q₂/r. Daraus folgt:

- **Verdoppelung der Ladung beider Ionen** → Gitterenergie **4× größer** (nicht 2×!) → Typische Prüfungsfalle!
- **Halbierung des Ionenabstands** → Gitterenergie **2× größer**
- **MgO vs. NaCl:** Mg²⁺·O²⁻ = 4 Ladungseinheiten² vs. Na⁺·Cl⁻ = 1 → allein durch Ladung 4× stärker; zusätzlich kleinere Radien → Faktor ~5 insgesamt

{{DIAGRAM:ionic-bond}}

| Verbindung | Gitterenergie (kJ/mol) | Schmelzpunkt (°C) | Begründung |
|---|---|---|---|
| NaCl | −786 | 801 | Einfach geladen, mittlere Radien |
| MgO | −3795 | 2852 | Doppelt geladen, kleine Radien |
| CaF₂ | −2630 | 1418 | Ca²⁺ doppelt geladen, F⁻ sehr klein |
| LiF | −1037 | 845 | Kleinste Ionen bei Einfachladung |
| KBr | −682 | 734 | Größere Ionen → geringere Gitterenergie |

## Ionenradien — Trends und Bedeutung

Der **Ionenradius** ist ein zentraler Parameter für Gitterenergie, Koordination und Löslichkeit. Wichtige Trends im Periodensystem:

- **Kationen sind kleiner als ihre Atome:** Elektronenverlust → weniger Elektronenschalen oder gleiche Schale mit weniger Elektronen → stärkere effektive Kernladung → Kontraktion. Beispiel: Na (186 pm) → Na⁺ (102 pm); Mg (160 pm) → Mg²⁺ (72 pm)
- **Anionen sind größer als ihre Atome:** Elektronengewinn → zusätzliche Abstoßung → Expansion. Beispiel: Cl (99 pm) → Cl⁻ (181 pm); O (60 pm) → O²⁻ (140 pm)
- **Innerhalb einer Gruppe (PSE abwärts):** Ionenradien nehmen zu (zusätzliche Schalen). Li⁺ (76 pm) < Na⁺ (102 pm) < K⁺ (138 pm) < Rb⁺ (152 pm) < Cs⁺ (167 pm)
- **Innerhalb einer Periode (links → rechts):** Kationenradien nehmen ab bei gleicher Ladung (steigende Kernladung). Na⁺ (102 pm) > Mg²⁺ (72 pm) > Al³⁺ (53,5 pm)
- **Höhere Ladung → kleinerer Radius:** Fe²⁺ (78 pm) > Fe³⁺ (64,5 pm); Mn²⁺ (83 pm) > Mn⁴⁺ (53 pm)

| Ion | Radius (pm) | Edelgaskonfiguration | Ladung |
|---|---|---|---|
| Li⁺ | 76 | He | +1 |
| Na⁺ | 102 | Ne | +1 |
| K⁺ | 138 | Ar | +1 |
| Mg²⁺ | 72 | Ne | +2 |
| Ca²⁺ | 100 | Ar | +2 |
| Al³⁺ | 53,5 | Ne | +3 |
| F⁻ | 133 | Ne | −1 |
| Cl⁻ | 181 | Ar | −1 |
| O²⁻ | 140 | Ne | −2 |
| S²⁻ | 184 | Ar | −2 |

> **Merke:** Kationen schrumpfen (Elektronenverlust → weniger Abstoßung), Anionen wachsen (Elektronengewinn → mehr Abstoßung). Diese Radienunterschiede bestimmen direkt die Gitterenergie (Coulomb: E ∝ 1/r) und die Koordinationszahl im Kristall.

**Isoelektronische Reihen** (gleiche Elektronenzahl, verschiedene Kernladung): O²⁻ (140 pm) > F⁻ (133 pm) > Ne (keine Ionenform) > Na⁺ (102 pm) > Mg²⁺ (72 pm) > Al³⁺ (53,5 pm). Je höher die Kernladungszahl bei gleicher Elektronenzahl, desto kleiner der Radius — die steigende Kernladung zieht die Elektronen stärker an.

---

## Struktur des Ionenkristalls

Ionenverbindungen bilden **Ionengitter** mit regelmäßiger, periodischer Anordnung. Im **NaCl-Gitter** (kubisch-flächenzentriert) ist jedes Na⁺ von 6 Cl⁻ umgeben und umgekehrt — Koordinationszahl 6. Im CsCl-Gitter (kubisch-raumzentriert) beträgt die Koordinationszahl 8 (größere Ionen passen besser).

Die Packungsgeometrie hängt vom **Radienverhältnis** r⁺/r⁻ ab:
- r⁺/r⁻ < 0,41 → tetraedrische Koordination (Zinkblende-Typ, KZ = 4)
- 0,41–0,73 → oktaedrische Koordination (NaCl-Typ, KZ = 6)
- \\> 0,73 → kubische Koordination (CsCl-Typ, KZ = 8)

| Gittertyp | Koordinationszahl | Radienverhältnis r⁺/r⁻ | Madelung-Konstante | Beispiele |
|---|---|---|---|---|
| Zinkblende (ZnS) | 4 | < 0,41 | 1,638 | ZnS, CuCl |
| NaCl | 6 | 0,41–0,73 | 1,748 | NaCl, MgO, LiF, KBr |
| CsCl | 8 | > 0,73 | 1,763 | CsCl, CsBr, NH₄Cl |
| Fluorit (CaF₂) | 8 (Ca²⁺) / 4 (F⁻) | — | 2,519 | CaF₂, BaF₂, UO₂ |

Die **Madelung-Konstante** beschreibt die geometrische Anordnung der Ionen im Gitter und geht als Faktor in die Berechnung der Gitterenergie nach Born-Landé ein. Sie ist für jeden Gittertyp charakteristisch.

> **Merke:** Höhere Koordinationszahlen bedeuten mehr nächste Nachbarn und tendenziell höhere Gitterenergie — allerdings nur, wenn das Radienverhältnis die entsprechende Koordination erlaubt. Das Radienverhältnis bestimmt die Kristallstruktur.

## Eigenschaften ionischer Verbindungen

**Hohe Schmelz- und Siedepunkte:** Die Gitterenergie muss vollständig überwunden werden. NaCl schmilzt bei 801 °C, MgO erst bei 2852 °C (höhere Gitterenergie). Zum Vergleich: Molekulare Verbindungen wie Wasser (0/100 °C) oder Ethanol (−114/78 °C) haben wesentlich niedrigere Werte, da dort nur schwache intermolekulare Kräfte überwunden werden müssen.

**Sprödigkeit:** Werden die Ionen durch mechanische Einwirkung verschoben, kommen gleichnamig geladene Ionen nebeneinander zu liegen → elektrostatische Abstoßung → Bruch. Ionenkristalle lassen sich nicht plastisch verformen (im Gegensatz zu Metallen, wo das Elektronengas ein Gleiten der Schichten erlaubt).

**Löslichkeit in Wasser:** Polare Wassermoleküle umhüllen die Ionen (Hydratation/Solvatation). Die **Hydratationsenthalpie** muss die Gitterenergie überwiegen, damit sich die Verbindung löst. NaCl: Gitterenergie 786 kJ/mol, Hydratationsenthalpie 783 kJ/mol → löslich (leicht endotherm, wird durch Entropiegewinn der frei werdenden Ionen kompensiert). MgO: kaum löslich (sehr hohe Gitterenergie übersteigt Hydratationsenthalpie bei Weitem).

**Elektrische Leitfähigkeit:** Ionenkristalle leiten im Festzustand **nicht** (Ionen fixiert). Im geschmolzenen Zustand oder in wässriger Lösung bewegen sich Ionen frei → Elektrolyte leiten Strom. Man unterscheidet starke Elektrolyte (vollständige Dissoziation, z. B. NaCl, HCl) und schwache Elektrolyte (teilweise Dissoziation, z. B. CH₃COOH). Wichtig für Biologie: Körperflüssigkeiten sind Elektrolytlösungen.

**Bildung von Kristallwasser:** Viele Ionenverbindungen lagern Wassermoleküle in ihre Gitterstruktur ein (Hydrate), z. B. CuSO₄·5H₂O (blau) vs. wasserfreies CuSO₄ (weiß). Das Kristallwasser stabilisiert das Gitter zusätzlich durch Koordination an die Kationen.

**Löslichkeitsregeln für Ionenverbindungen (prüfungsrelevant):**

| Regel | Löslich | Schwerlöslich/Unlöslich |
|---|---|---|
| Alkalimetall-Salze (Na⁺, K⁺) | Immer löslich | — |
| Ammonium-Salze (NH₄⁺) | Immer löslich | — |
| Nitrate (NO₃⁻) | Immer löslich | — |
| Chloride (Cl⁻) | Meistens löslich | AgCl, PbCl₂, Hg₂Cl₂ |
| Sulfate (SO₄²⁻) | Meistens löslich | BaSO₄, PbSO₄, CaSO₄ (wenig) |
| Carbonate (CO₃²⁻) | Nur mit Na⁺, K⁺, NH₄⁺ | CaCO₃, BaCO₃, MgCO₃ |
| Hydroxide (OH⁻) | NaOH, KOH, Ca(OH)₂ (wenig) | Mg(OH)₂, Fe(OH)₃, Al(OH)₃ |
| Phosphate (PO₄³⁻) | Nur mit Na⁺, K⁺, NH₄⁺ | Ca₃(PO₄)₂ (Knochen!), FePO₄ |

> **Merke:** Alkalimetallsalze und Nitrate sind IMMER löslich. Carbonate und Phosphate sind meist unlöslich (Ausnahme: Na⁺, K⁺, NH₄⁺). BaSO₄ ist unlöslich → Röntgenkontrastmittel. AgCl ist unlöslich → Credé-Prophylaxe nutzt dies therapeutisch.

## Klinisch relevante Ionenverbindungen

- **NaCl (Natriumchlorid):** physiologische Kochsalzlösung (0,9 %), Osmolalitätsregulation, Infusionstherapie
- **KCl (Kaliumchlorid):** Elektrolytsubstitution, Herzrhythmus (Hypokaliämie → Arrhythmie)
- **CaCO₃ (Calciumcarbonat):** Knochensubstanz (mit Hydroxylapatit), Antazidum, Phosphatbinder bei Niereninsuffizienz
- **MgO/Mg(OH)₂:** Antazidum, Laxans; Mg²⁺ wichtig als Cofaktor für >300 Enzyme
- **CaF₂ (Calciumfluorid):** Zahnschmelzstruktur; Fluorid-Ionen ersetzen OH⁻ im Hydroxylapatit → stabileres Fluorapatit
- **FeSO₄ (Eisensulfat):** Eisen(II)-Supplement bei Eisenmangelanämie
- **BaSO₄ (Bariumsulfat):** Röntgenkontrastmittel (extrem geringe Löslichkeit → nicht resorbiert, ungiftig trotz toxischer Ba²⁺-Ionen)
- **AgNO₃ (Silbernitrat):** Credé-Prophylaxe (historisch), antimikrobielle Wirkung

> **Merke:** NaCl, KCl, CaCl₂ → gut löslich (mittlere Gitterenergie); MgO, Al₂O₃ → kaum löslich (extrem hohe Gitterenergie, hohe Ionenladungen). Klinisch: Na⁺, K⁺, Ca²⁺, Cl⁻ sind essentielle Elektrolyte mit engen Normalbereichen.

**Elektrolyt-Normwerte im Blutplasma (prüfungsrelevant):**

| Elektrolyt | Normalbereich | Funktion | Störung bei Mangel |
|---|---|---|---|
| Na⁺ | 135–145 mmol/L | Osmotischer Druck, Nervenleitung | Hyponatriämie: Hirnödem, Verwirrtheit |
| K⁺ | 3,5–5,0 mmol/L | Membranpotenzial, Herzrhythmus | Hypokaliämie: Arrhythmie, Muskelschwäche |
| Ca²⁺ | 2,2–2,6 mmol/L (gesamt) | Knochen, Gerinnung, Muskelkontraktion | Hypokalzämie: Tetanie, Krämpfe |
| Mg²⁺ | 0,7–1,0 mmol/L | Enzym-Cofaktor (>300 Enzyme), ATP-Bindung | Hypomagnesiämie: Arrhythmie, Tremor |
| Cl⁻ | 96–106 mmol/L | Säure-Base-Haushalt, Osmolalität | Hypochlorämie: metabol. Alkalose |
| HCO₃⁻ | 22–26 mmol/L | Puffersystem (CO₂/HCO₃⁻) | Azidose/Alkalose |
| PO₄³⁻ | 0,8–1,5 mmol/L | ATP, DNA, Knochen (Hydroxylapatit) | Hypophosphatämie: Muskelschwäche |

---

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Warum hat MgO einen viel höheren Schmelzpunkt als NaCl? → Doppelte Ladung beider Ionen + kleinerer Radius → ~5x größere Gitterenergie
- Warum leitet NaCl-Kristall keinen Strom? → Ionen sind im Gitter fixiert; erst in Lösung oder Schmelze frei beweglich
- Welcher Schritt im Born-Haber-Kreisprozess ist am stärksten exotherm? → Gitterenergie (Zusammentritt der Ionen zum Kristall)
- Welches Ion ist größer: Na⁺ oder Cl⁻? → Cl⁻ (181 pm vs. 102 pm) — Anionen sind immer größer als Kationen gleicher Periode
- Warum ist BaSO₄ ein sicheres Kontrastmittel? → Extrem geringe Löslichkeit → Ba²⁺ wird nicht resorbiert → ungiftig trotz toxischer Ba²⁺-Ionen
- Isoelektronische Reihe O²⁻, F⁻, Na⁺, Mg²⁺ — welches Ion ist am kleinsten? → Mg²⁺ (höchste Kernladung bei gleicher Elektronenzahl)

**Typische Fallen:**
- Gitterenergie ist nicht Hydratationsenthalpie — für Löslichkeit müssen beide bilanziert werden
- Ionenkristalle sind hart, aber spröde (nicht weil sie schwach gebunden sind, sondern weil gleichnamige Ladungen sich abstoßen)
- Coulomb: Verdoppelt man die Ladung beider Ionen, wird E 4x größer (nicht 2x) — häufiger Rechenfehler!
- Kationen sind KLEINER als ihre Atome, Anionen GRÖSSER — nicht umgekehrt!
- Isoelektronische Ionen: höhere Kernladung = kleinerer Radius (nicht größerer!)
- NaCl löst sich in Wasser nur weil ΔS > 0 (Entropiegewinn) die leicht endotherme Enthalpie kompensiert

**Prüfungsrelevante Zahlen:**
- NaCl: Gitterenergie −786 kJ/mol, Schmelzpunkt 801 °C, KZ 6
- MgO: Gitterenergie −3795 kJ/mol, Schmelzpunkt 2852 °C, KZ 6
- Ionenradien: Na⁺ = 102 pm, Cl⁻ = 181 pm, Mg²⁺ = 72 pm, O²⁻ = 140 pm
- Elektrolyte: Na⁺ 135–145, K⁺ 3,5–5,0, Ca²⁺ 2,2–2,6 mmol/L

## Zusammenfassung (ultrakompakt)

- **Ionenbindung**: vollständige Elektronenübertragung Metall → Nichtmetall; beide erreichen Edelgaskonfiguration
- **Triebkraft**: Gitterenergie überwiegt Ionisierungsenergie + Elektronenaffinität → Reaktion exotherm
- **Coulomb-Gesetz**: F ∝ q₁·q₂/r²; Gitterenergie ∝ q₁·q₂/r → hohe Ladung + kleiner Radius → riesige Gitterenergie
- **Born-Haber-Kreisprozess**: indirekte Berechnung der Gitterenergie aus messbaren Enthalpien (5 Teilschritte)
- **Ionenradien**: Kationen < Atome (Elektronenverlust → Kontraktion); Anionen > Atome (Elektronengewinn → Expansion)
- **Isoelektronische Reihe**: gleiche Elektronenzahl → höhere Kernladung = kleinerer Radius (O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺)
- **Koordinationszahl**: r⁺/r⁻ bestimmt KZ (< 0,41 → KZ 4; 0,41–0,73 → KZ 6; > 0,73 → KZ 8)
- **Eigenschaften**: hohe Schmelzpunkte, spröde, im Festzustand Nichtleiter; in Lösung → Elektrolyte leiten Strom
- **Löslichkeit**: Hydratationsenthalpie muss Gitterenergie kompensieren; Alkalimetallsalze/Nitrate immer löslich
- **Klinisch**: Na⁺, K⁺, Ca²⁺, Cl⁻ sind essentielle Elektrolyte; Imbalancen → Arrhythmie, Muskelkrämpfe, Tetanie`,

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

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erläutern Sie die Ionenbindung am Beispiel von Magnesiumoxid (MgO). Gehen Sie dabei auf die Entstehung, die Gitterenergie und die daraus resultierenden Eigenschaften ein und vergleichen Sie mit NaCl.",
        answer: `Magnesiumoxid entsteht durch vollständige Elektronenübertragung von Magnesium auf Sauerstoff. Magnesium (Gruppe 2) gibt 2 Valenzelektronen ab und wird zum Mg²⁺-Kation (Elektronenkonfiguration von Neon). Sauerstoff (Gruppe 16) nimmt 2 Elektronen auf und wird zum O²⁻-Anion (ebenfalls Neon-Konfiguration).

Die Gitterenergie von MgO beträgt etwa −3795 kJ/mol, verglichen mit −786 kJ/mol bei NaCl. Dieser enorme Unterschied erklärt sich durch das Coulombsche Gesetz: Die potenzielle Energie zwischen Ionen ist proportional zum Produkt der Ladungen (q₁·q₂) und umgekehrt proportional zum Abstand (r). Bei MgO wirken doppelt geladene Ionen mit zudem kleinerem Ionenradius (Mg²⁺: 72 pm, O²⁻: 140 pm vs. Na⁺: 102 pm, Cl⁻: 181 pm), was zu einem rund fünffach stärkeren Gitter führt.

Die Folgen für die Eigenschaften sind gravierend: MgO schmilzt erst bei 2852 °C (NaCl: 801 °C), ist praktisch wasserunlöslich (NaCl sehr gut löslich) und findet daher Verwendung als Hochtemperaturwerkstoff. Medizinisch wird MgO als Antazidum eingesetzt, da es magensäureneutralisierend wirkt, ohne sich vollständig zu lösen.`,
      },

      klinischerBezug:
        "Ionenverbindungen sind die Grundlage der Elektrolythomöostase im menschlichen Körper: Natriumchlorid reguliert den osmotischen Druck und das Blutvolumen, Kaliumchlorid ist entscheidend für das Membranpotenzial von Herzmuskel- und Nervenzellen. Elektrolytimbalancen (Hypo-/Hyperkaliämie, Hyponatriämie) können lebensbedrohliche Herzrhythmusstörungen oder neurologische Ausfälle verursachen und erfordern sofortige Therapie.",

      selfTest: [
        {
          question:
            "Welche Energiegröße ist der entscheidende Antrieb für die Bildung von Ionenkristallen?",
          options: [
            "Ionisierungsenergie",
            "Elektronenaffinität",
            "Gitterenergie",
            "Sublimationsenergie",
            "Bindungsenergie",
          ],
          correctIndex: 2,
          explanation:
            "Die Gitterenergie ist die bei der Bildung des Ionenkristalls aus gasförmigen Ionen freigesetzte Energie und stellt den größten exothermen Beitrag im Born-Haber-Kreisprozess dar. Obwohl Ionisierungsenergie und Sublimation endotherm sind, überwiegt die stark exotherme Gitterenergie, sodass die Gesamtreaktion exotherm verläuft. Für NaCl beträgt sie −786 kJ/mol, für MgO sogar −3795 kJ/mol.",
          hints: [
            "Denken Sie an Coulombsche Anziehung im Gitter.",
            "Es ist die Energie beim Zusammentreten gasförmiger Ionen.",
          ],
          difficulty: 1,
          tags: ["ionenbindung", "gitterenergie", "born-haber"],
        },
        {
          question: "Warum hat MgO einen deutlich höheren Schmelzpunkt als NaCl?",
          options: [
            "MgO hat eine größere Molmasse als NaCl.",
            "Mg²⁺ und O²⁻ sind höher geladen und haben kleinere Ionenradien als Na⁺ und Cl⁻.",
            "MgO bildet ein anderes Kristallsystem als NaCl.",
            "MgO enthält kovalente Bindungsanteile, die NaCl fehlen.",
            "Sauerstoff hat eine höhere Elektronegativität als Chlor.",
          ],
          correctIndex: 1,
          explanation:
            "Nach dem Coulombschen Gesetz ist die Gitterenergie proportional zu q₁·q₂/r. Mg²⁺ und O²⁻ tragen die doppelte Ladung verglichen mit Na⁺ und Cl⁻ (Faktor 4 im Zähler) und haben zudem kleinere Ionenradien (kleineres r). Beides zusammen führt zu einer rund fünffach höheren Gitterenergie von MgO (~3795 kJ/mol vs. ~786 kJ/mol für NaCl) und damit zu einem Schmelzpunkt von 2852 °C statt 801 °C.",
          hints: [
            "Coulombsches Gesetz: E ∝ q₁·q₂/r.",
            "Betrachten Sie Ladungszahlen und Ionenradien im Vergleich.",
          ],
          difficulty: 2,
          tags: ["mgo", "coulombsches-gesetz", "gitterenergie"],
        },
        {
          question: "Warum leiten Ionenkristalle im festen Zustand keinen elektrischen Strom?",
          options: [
            "Weil sie keine geladenen Teilchen besitzen.",
            "Weil die Elektronen im Gitter delokalisiert sind.",
            "Weil die Ionen im Gitter fixiert sind und sich nicht frei bewegen können.",
            "Weil Ionenkristalle keine metallischen Bindungen aufweisen.",
            "Weil der Schmelzpunkt zu hoch für Ionenmobilität ist.",
          ],
          correctIndex: 2,
          explanation:
            "Elektrischer Strom erfordert bewegliche Ladungsträger. Im festen Ionenkristall sind die Ionen in festen Gitterpositionen gebunden und können sich nicht frei bewegen. Erst beim Schmelzen oder Lösen in Wasser werden die Ionen frei beweglich und können als Ladungsträger fungieren. Dann leiten Ionenverbindungen Strom — man nennt sie dann Elektrolyte. Im festen Zustand sind sie dagegen Nichtleiter.",
          hints: [
            "Ladungsträger müssen frei beweglich sein.",
            "Im Gitter sind Ionen auf festen Positionen gebunden.",
          ],
          difficulty: 1,
          tags: ["leitfähigkeit", "elektrolyt", "ionengitter"],
        },
        {
          question:
            "Welches Salz ist aufgrund seiner sehr hohen Gitterenergie praktisch wasserunlöslich?",
          options: ["NaCl", "KCl", "NaF", "MgO", "CaCl₂"],
          correctIndex: 3,
          explanation:
            "MgO hat eine Gitterenergie von etwa −3795 kJ/mol, da Mg²⁺ und O²⁻ doppelt geladen und verhältnismäßig klein sind. Die Hydratationsenthalpie der Ionen reicht nicht aus, diese enorme Gitterenergie zu überwinden, weshalb MgO in Wasser kaum löslich ist. NaCl, KCl und CaCl₂ dagegen haben deutlich niedrigere Gitterenergien, die von den Hydratationsenthalpien kompensiert werden — sie sind gut wasserlöslich.",
          hints: [
            "Löslichkeit: Hydratationsenthalpie muss Gitterenergie überwinden.",
            "Höhere Ladung → höhere Gitterenergie → schlechtere Löslichkeit.",
          ],
          difficulty: 2,
          tags: ["löslichkeit", "gitterenergie", "hydratation"],
        },
        {
          question: "Im NaCl-Kristallgitter ist jedes Na⁺-Ion von wie vielen Cl⁻-Ionen umgeben?",
          options: ["4", "6", "8", "12", "2"],
          correctIndex: 1,
          explanation:
            "Im NaCl-Gitter (kubisch-flächenzentriert) beträgt die Koordinationszahl 6: Jedes Na⁺-Ion ist von 6 Cl⁻-Ionen oktaedrisch umgeben und umgekehrt. Dies ergibt sich aus dem Radienverhältnis r⁺/r⁻ = 102/181 ≈ 0,56, das im Bereich 0,41–0,73 liegt (oktaedrische Koordination). Im CsCl-Gitter hingegen beträgt die Koordinationszahl 8, da das Radienverhältnis über 0,73 liegt.",
          hints: [
            "NaCl-Gitter: kubisch-flächenzentriert.",
            "Koordinationszahl hängt vom Radienverhältnis ab.",
          ],
          difficulty: 2,
          tags: ["nacl-gitter", "koordinationszahl", "radienverhältnis"],
        },
        {
          question:
            "Welcher Schritt im Born-Haber-Kreisprozess für NaCl ist stark exotherm und macht die Gesamtreaktion günstig?",
          options: [
            "Sublimation von Natrium",
            "Ionisierung von Natrium",
            "Spaltung von Cl₂",
            "Gitterenergieterm",
            "Elektronenaffinität von Chlor",
          ],
          correctIndex: 3,
          explanation:
            "Im Born-Haber-Kreisprozess sind Sublimation, Ionisierung und Bindungsspaltung endotherm, während die Elektronenaffinität von Chlor moderat exotherm ist. Der mit Abstand größte exotherme Beitrag kommt von der Gitterenergie (−786 kJ/mol für NaCl), die beim Zusammenfügen der gasförmigen Ionen zum Kristallgitter freigesetzt wird. Ohne diesen Beitrag wäre die Bildung von NaCl aus den Elementen thermodynamisch ungünstig.",
          hints: [
            "Zerlegen Sie den Kreisprozess in seine Teilschritte.",
            "Welcher Schritt setzt Energie frei statt aufzunehmen?",
          ],
          difficulty: 2,
          tags: ["born-haber", "gitterenergie", "exotherm"],
        },
        {
          question:
            "Welche klinische Bedeutung hat die Ionenbindung von Calciumfluorid (CaF₂) für den Zahnschmelz?",
          options: [
            "CaF₂ erhöht die Löslichkeit des Zahnschmelzes in Säure.",
            "Fluorid-Ionen ersetzen Hydroxyl-Gruppen im Hydroxylapatit und bilden stabileres Fluorapatit.",
            "CaF₂ katalysiert die Remineralisation durch Enzyme.",
            "Fluorid blockiert Calciumkanäle in Schmelzoberflächen.",
            "CaF₂ neutralisiert Säure im Mundraum direkt.",
          ],
          correctIndex: 1,
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
            "Bei Krafteinwirkung kommen gleichnamig geladene Ionen nebeneinander zu liegen, was zur Abstoßung und zum Bruch führt.",
            "Ionenkristalle sind weich, weil die Coulombkräfte schwach sind.",
            "Sprödigkeit ist eine Folge der niedrigen Gitterenergie.",
          ],
          correctIndex: 2,
          explanation:
            "Wenn auf einen Ionenkristall eine Scherkraft wirkt, werden Ionenschichten gegeneinander verschoben. Dabei kommen plötzlich Ionen gleicher Ladung nebeneinander zu liegen. Die elektrostatische Abstoßung zwischen gleichnamig geladenen Ionen überwiegt die Anziehung, und der Kristall bricht entlang der Gleitebene. Dieses Verhalten steht im Gegensatz zu Metallen, wo delokalisierte Elektronen das Gleiten von Schichten erlauben, ohne Abstoßung zu erzeugen (Duktilität).",
          hints: [
            "Was passiert bei einer Ionenverschiebung mit den Ladungsverteilungen?",
            "Vergleich mit metallischen Bindungen: Warum sind Metalle nicht spröde?",
          ],
          difficulty: 2,
          tags: ["sprödigkeit", "ionenkristall", "scherkraft"],
        },
      ],
    },

    {
      id: "ch-6-02",
      title: "Kovalente Bindung — Polarität und Hybridisierung",
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
      content: `## Einleitung

CO₂ hat zwei stark polare C=O-Bindungen — trotzdem ist das Molekül insgesamt unpolar. H₂O hat ebenfalls polare Bindungen — und ist extrem polar. Der Unterschied? Die **Geometrie**. Genau hier zeigt sich die Stärke der kovalenten Bindung: Atome teilen sich Elektronenpaare, und die räumliche Anordnung dieser Paare bestimmt Gestalt, Polarität und Funktion des Moleküls. Von der Peptidbindung in Proteinen bis zur Doppelbindung in Fettsäuren — die kovalente Chemie ist das Fundament der Biochemie.

**In diesem Kapitel lernst du:**
- warum Atome bei kovalenter Bindung Elektronen teilen statt übertragen und wie die Elektronegativitätsdifferenz den Bindungscharakter bestimmt
- wie VSEPR die Molekülgestalt vorhersagt und warum freie Elektronenpaare die Bindungswinkel verkleinern
- was Hybridisierung (sp³, sp², sp) über Geometrie und biologische Funktion verrät
- worin sich σ- und π-Bindungen unterscheiden und warum π-Bindungen die freie Rotation verhindern

---

## Grundprinzip der kovalenten Bindung

{{DIAGRAM:covalent-bond}}

Die **kovalente Bindung** (homöopolare oder Elektronenpaar-Bindung) entsteht durch **gemeinsame Nutzung von Elektronenpaaren** zwischen Atomen ähnlicher oder gleicher Elektronegativität. Im Gegensatz zur Ionenbindung werden Elektronen nicht übertragen, sondern geteilt. Die bindenden Elektronen halten sich bevorzugt im Bereich zwischen den Atomkernen auf und senken dort die potenzielle Energie des Systems. Der Energiegewinn durch die Bindungsbildung beträgt typischerweise 150–1000 kJ/mol.

Lewis-Schreibweise: Einfachbindung (—), Doppelbindung (=), Dreifachbindung (≡). Das bindende Elektronenpaar wird durch einen Strich dargestellt, freie Elektronenpaare durch Punkte. Die **Oktettregel** gilt auch hier: Jedes Atom strebt 8 Valenzelektronen an (Ausnahme: H mit 2, Be mit 4, B mit 6).

**Ausnahmen von der Oktettregel:**
- **H, He:** Duett-Regel (nur 2 Elektronen nötig, 1s-Orbital)
- **Be, B:** Elektronenmangel-Verbindungen (BeCl₂: 4 VE, BF₃: 6 VE → Lewis-Säuren, reagieren gerne mit Elektronenpaardonoren)
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

Bei polaren kovalenten Bindungen sind die Elektronen zum elektronegativeren Atom hin verschoben → **Partialladungen** (δ+ und δ−) → **Dipolmoment** μ = q · d (in Debye, D). Die C–H-Bindung (ΔEN = 0,4) gilt als nahezu unpolar, weshalb Kohlenwasserstoffe hydrophob sind.

**Dipolmoment μ:** Produkt aus Ladung (q) und Abstand (d). Einheit: Debye (D), wobei 1 D = 3,336 × 10⁻³⁰ C·m. Polare Bindungen mit großem ΔEN und großem Bindungsabstand haben große Dipolmomente. Das Gesamtdipolmoment eines Moleküls ist die Vektorsumme aller Bindungsdipole — entscheidend ist die Geometrie (siehe Molekülpolarität).

**Ionisierungsenergie (IE) und Elektronenaffinität (EA) — Ergänzung:**
- **Ionisierungsenergie:** Energie, die nötig ist, um ein Elektron aus einem neutralen Atom zu entfernen. IE steigt im PSE nach rechts oben (Na: 496 kJ/mol → F: 1681 kJ/mol). Niedrige IE → leichte Kationenbildung (Metalle). Hohe IE → keine Kationenbildung (Edelgase).
- **Elektronenaffinität:** Energie, die freigesetzt wird, wenn ein neutrales Atom ein Elektron aufnimmt. EA ist am höchsten bei den Halogenen (Cl: −349 kJ/mol, F: −328 kJ/mol). Edelgase haben EA ≈ 0 (stabile Konfiguration).
- **Zusammenhang mit EN:** Elemente mit hoher IE und hoher EA haben auch hohe EN → ziehen Bindungselektronen stark an (F, O, Cl). Metalle mit niedriger IE und geringer EA haben niedrige EN → bilden bevorzugt Kationen.

> **Merke:** EN, IE und EA hängen zusammen und zeigen ähnliche PSE-Trends (steigen nach rechts oben). Hohe EN + hohe EA = starkes Nichtmetall (F, O, Cl). Niedrige IE + niedrige EN = typisches Metall (Na, K, Ca).

**Die polarste Bindung** unter mehreren Optionen hat die **größte Elektronegativitätsdifferenz (ΔEN)**. Beispiele: P–O (ΔEN ≈ 1,3), Li–H (≈ 1,1), C–Cl (≈ 0,5), H–C (≈ 0,4). Bei ionischen Bindungen (z. B. Ca–Cl, ΔEN > 1,7) ist die Polarität maximal (vollständige Ladungstrennung).

## Molekülpolarität

Ein Molekül ist **polar**, wenn es Bindungsdipole besitzt UND diese sich nicht gegenseitig aufheben. Die Geometrie ist entscheidend:

- **H₂O** (gewinkelt, 104,5°): beide O–H-Dipole zeigen in dieselbe Richtung → stark polar (μ = 1,85 D)
- **CO₂** (linear, 180°): beide C=O-Dipole heben sich auf → unpolar (μ = 0)
- **NH₃** (pyramidal): resultierendes Dipolmoment → polar (μ = 1,47 D)
- **CCl₄** (tetraedrisch): alle C–Cl-Dipole symmetrisch → unpolar (μ = 0)
- **CHCl₃** (Chloroform): C–Cl-Dipole nicht symmetrisch → polar (μ = 1,01 D)

> **Merke:** Polare Bindungen ≠ polares Molekül! Entscheidend ist, ob sich die Dipolvektoren geometrisch aufheben (CO₂, CCl₄) oder addieren (H₂O, NH₃).

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

{{DIAGRAM:atomic-orbitals}}

Bisher haben wir mit dem VSEPR-Modell die Molekülgeometrie aus der Elektronenpaar-Abstoßung abgeleitet. Um zu verstehen, **warum** Kohlenstoff vier gleichwertige Bindungen bilden kann (obwohl er nur 2 ungepaarte Elektronen im Grundzustand hat), brauchen wir das Konzept der **Hybridisierung**.

Hybridisierung erklärt die Geometrie von Kohlenstoff- (und anderen) Verbindungen durch Mischung von Atomorbitalen zu energieäquivalenten **Hybridorbitalen**. Die Zahl der Hybridorbitale entspricht der Zahl der gemischten Atomorbitale. Der Energieaufwand für die Promotion (Anhebung eines Elektrons aus dem s- in ein p-Orbital) wird durch die Bildung stärkerer Bindungen mehr als kompensiert.

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

---

## Sigma- und Pi-Bindungen

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

Bisher haben wir gesehen, dass σ-Bindungen die freie Rotation erlauben und π-Bindungen sie verhindern. Doch manche Moleküle lassen sich nicht durch eine einzige Lewis-Struktur beschreiben — die π-Elektronen sind über mehrere Atome **delokalisiert**. Der tatsächliche Zustand ist ein **Resonanzhybrid** (Mischung aller Grenzstrukturen). Die Grenzstrukturen sind nur Hilfskonstruktionen — das reale Molekül hat Eigenschaften, die zwischen allen Grenzstrukturen liegen.

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
Ein Molekül ist aromatisch (besonders stabil), wenn es die **Hückel-Regel** erfüllt: zyklisch, planar, konjugiert, mit **4n+2 π-Elektronen** (n = 0, 1, 2, ...). Benzol: 6 π-Elektronen (n = 1) → aromatisch. Cyclooctatetraen (C₈H₈): 8 π-Elektronen → antiaromatisch (4n, instabil), daher nicht planar. Biologisch aromatisch: Purine (A, G), Pyrimidine (C, T, U), Tryptophan, Phenylalanin, Tyrosin, Histidin.

> **Merke:** Resonanzstrukturen (z. B. Benzol, Peptidbindung) sind nicht real existierend — der tatsächliche Zustand ist ein Hybrid. Delokalisierung = Stabilisierung. Benzol reagiert deshalb lieber durch Substitution als Addition. Aromatizität (Hückel: 4n+2 π-Elektronen) ist der stärkste Stabilisierungseffekt durch Resonanz.

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Ist CO₂ polar oder unpolar? → Polare Bindungen, aber lineare Geometrie → Dipole heben sich auf → unpolar
- Welche Hybridisierung hat der Kohlenstoff der Peptidbindung? → sp² (Carbonyl mit Doppelbindung zu O)
- Warum ist NH₃ trigonal pyramidal und nicht tetraedrisch? → 3 Bindungspaare + 1 freies EP → Molekülgeometrie pyramidal
- Wie viele σ- und π-Bindungen hat Ethen (C₂H₄)? → 5σ + 1π (1 C–C σ, 4 C–H σ, 1 π)
- Welches Atom hat die höchste EN? → Fluor (4,0); dann O (3,5), N und Cl (3,0)
- Welche Bindung ist am polarsten: C–H, C–O, C–N, C–F? → C–F (ΔEN = 1,5)

**Typische Fallen:**
- Polare Bindungen ergeben nicht automatisch ein polares Molekül — symmetrische Geometrie kann Dipole aufheben (CO₂, CCl₄)
- VSEPR gibt die Elektronenanordnung inklusive freier EP — die Molekülgeometrie bezieht sich nur auf die Atomposition
- π-Bindung verhindert freie Rotation → Cis-Trans-Isomerie nur bei Doppelbindungen möglich
- EN-Trend im PSE: steigt nach rechts oben → Fluor ist das elektronegativste Element (4,0), nicht Sauerstoff!
- Hybridisierung erkennen: σ-Bindungen + freie EP zählen: 4 = sp³, 3 = sp², 2 = sp
- C–H-Bindung (ΔEN = 0,4) ist nahezu unpolar → Kohlenwasserstoffe sind hydrophob

**Prüfungsrelevante Zahlen:**
- EN-Werte: F = 4,0, O = 3,5, N = Cl = 3,0, C = 2,5, H = 2,1, Na = 0,9
- Bindungswinkel: sp³ = 109,5°, sp² = 120°, sp = 180°; H₂O = 104,5°, NH₃ = 107°
- Bindungsenergien: C–C = 347, C=C = 614, C≡C = 839, C=O = 745, O–H = 463 kJ/mol
- Dipolmomente: H₂O = 1,85 D, NH₃ = 1,47 D, CO₂ = 0 D, CCl₄ = 0 D

## Zusammenfassung (ultrakompakt)

- **Kovalente Bindung**: Elektronenteilung (nicht Übertragung); ΔEN < 1,7; entsteht zwischen Nichtmetallen
- **EN im PSE**: steigt nach rechts oben; F = 4,0 (Maximum); ΔEN bestimmt Bindungscharakter
- **ΔEN-Skala**: < 0,4 unpolar; 0,4–1,7 polar kovalent; > 1,7 ionisch
- **Molekülpolarität**: polare Bindungen + asymmetrische Geometrie = polares Molekül (H₂O ≠ CO₂!)
- **VSEPR**: Elektronenpaare stoßen sich ab; freie EP > bindende EP → kleinere Winkel; sp³ = 109,5°, sp² = 120°, sp = 180°
- **Hybridisierung**: sp³ (Tetraeder, Alkane, Cα-Atom), sp² (trigonal, Carbonyl, Peptidbindung), sp (linear, C≡N, CO₂)
- **σ und π**: Einfachbindung = σ; Doppel = σ+π; Dreifach = σ+2π; π verhindert Rotation → Cis-Trans-Isomerie
- **Bindungsenergie**: kürzere Bindung = stärkere Bindung; C≡C (839) > C=C (614) > C–C (347 kJ/mol)
- **Peptidbindung**: sp²-hybridisiert, partieller Doppelbindungscharakter, planar → bestimmt Proteinsekundärstruktur
- **Resonanz**: Delokalisierung von π-Elektronen → Stabilisierung; Benzol (150 kJ/mol Resonanzenergie); Peptidbindung (partieller Doppelbindungscharakter)
- **Aromatizität**: Hückel-Regel: 4n+2 π-Elektronen, zyklisch, planar, konjugiert → besondere Stabilität (Benzol, Purine, Pyrimidine)
- **Koordinative Bindung**: ein Atom stellt beide e⁻ bereit (CO→Fe²⁺ im Hämoglobin → CO-Vergiftung; Zn²⁺ in Enzymen)
- **Retinal**: Lichtisomerisierung von cis zu trans an einer π-Bindung → Sehprozess
- **IE/EA/EN**: Steigen alle nach rechts oben im PSE; hohe EN + EA = Nichtmetall; niedrige IE + EN = Metall`,

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
          merksatz: "sp³ = Tetraeder; sp² = planar (Doppelbindung); sp = linear (Dreifachbindung).",
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
        "sp³: 109,5° Tetraeder; sp²: 120° planar; sp: 180° linear.",
        "Hybridisierung erkennen: σ-Bindungen + freie EP zählen: 4 → sp³, 3 → sp², 2 → sp.",
        "π-Bindung verhindert freie Rotation → Cis-Trans-Isomerie, Rigidität der Peptidbindung.",
        "Benzol: sp², delokalisiertes π-System → aromatisch, besonders stabil (4n+2 π-Elektronen).",
        "Dreifachbindung (C≡C) ≠ 3× Einfachbindung: σ stark, π schwächer.",
        "Koordinative Bindung: ein Partner stellt beide Elektronen (CO→Fe im Hämoglobin, Zn²⁺ in Enzymen).",
        "Kürzere Bindung = stärkere Bindung: C≡C (120 pm, 839 kJ) > C=C (134 pm, 614 kJ) > C–C (154 pm, 347 kJ).",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie anhand von Wasser (H₂O) und Kohlendioxid (CO₂) den Unterschied zwischen Bindungspolarität und Molekülpolarität. Welche Folgen hat dies für die physikalischen und biologischen Eigenschaften dieser Moleküle?",
        answer: `Sowohl H₂O als auch CO₂ enthalten polare kovalente Bindungen: In H₂O beträgt die EN-Differenz O–H ≈ 1,4 (O: 3,5; H: 2,1), in CO₂ beträgt die EN-Differenz C=O ≈ 1,0 (O: 3,5; C: 2,5). Beide Moleküle besitzen also polare Bindungen.

Der entscheidende Unterschied liegt in der Geometrie: CO₂ ist linear (sp-hybridisierter Kohlenstoff, 180°), sodass sich die beiden C=O-Dipole exakt aufheben — Gesamtdipolmoment = 0, das Molekül ist unpolar. H₂O hingegen ist gewinkelt (sp³-hybridisierter Sauerstoff, 104,5°, zwei freie Elektronenpaare), sodass die beiden O–H-Dipole in die gleiche Richtung zeigen und sich addieren — Gesamtdipolmoment 1,85 D, das Molekül ist stark polar.

Die biologischen Folgen sind enorm: Wasser ist das universelle Lösungsmittel für polare und ionische Substanzen (Elektrolyte, Zucker, Aminosäuren), bildet Wasserstoffbrücken und hat dadurch außergewöhnlich hohe Siedepunkte und Verdampfungswärme (wichtig für Thermoregulation). CO₂ dagegen ist unpolar, diffundiert leicht durch lipophile Membranen, passiert die Blut-Hirn-Schranke und wird als Atemgas ausgeschieden — seine Unpolarität ist für den Gastransport essentiell.`,
      },

      klinischerBezug:
        "Die sp²-Hybridisierung der Peptidbindung (–CO–NH–) verleiht ihr partiellen Doppelbindungscharakter und damit Planarität, was direkte Auswirkungen auf die Proteinfaltung (α-Helix, β-Faltblatt) hat und therapeutisch in der Entwicklung von Proteaseinhibitoren genutzt wird. Die Polarität von Wasser ist die Grundlage für seine Funktion als Lösungsmittel im Blutplasma und ermöglicht den Transport von Elektrolyten, Hormonen und Pharmaka.",

      selfTest: [
        {
          question: "Welche Geometrie nimmt das Ammoniak-Molekül (NH₃) gemäß VSEPR an?",
          options: ["Linear", "Trigonal planar", "Tetraedrisch", "Trigonal pyramidal", "Gewinkelt"],
          correctIndex: 3,
          explanation:
            "Stickstoff in NH₃ hat 4 Elektronenpaare in der Valenzschale: 3 bindende (N–H) und 1 freies Elektronenpaar. Gemäß VSEPR nehmen 4 Elektronenpaare tetraedrische Anordnung ein (ideal 109,5°). Da ein Paar frei ist, ist die resultierende Molekülgeometrie (Atomanordnung) trigonal pyramidal. Das freie Elektronenpaar drückt die drei bindenden Paare etwas zusammen → Winkel 107° statt 109,5°. Ammoniak ist deshalb polar (μ = 1,47 D).",
          hints: [
            "Zählen Sie bindende + freie Elektronenpaare am Zentralatom.",
            "Ein freies Elektronenpaar → Geometrie ≠ Elektronenanordnung.",
          ],
          difficulty: 1,
          tags: ["vsepr", "nh3", "molekülgeometrie"],
        },
        {
          question: "Warum ist CO₂ trotz polarer C=O-Bindungen ein unpolares Molekül?",
          options: [
            "Weil C und O ähnliche Elektronegativitäten haben.",
            "Weil CO₂ keine freien Elektronenpaare besitzt.",
            "Weil die lineare Geometrie bewirkt, dass sich die beiden Dipole aufheben.",
            "Weil CO₂ sp²-hybridisiert ist und eine ebene Struktur hat.",
            "Weil CO₂ kein permanentes Dipolmoment aufbauen kann, da es ein Gas ist.",
          ],
          correctIndex: 2,
          explanation:
            "CO₂ ist linear (Kohlenstoff sp-hybridisiert, 180°). Die beiden C=O-Bindungen sind zwar polar (ΔEN ≈ 1,0), aber die Dipolvektoren zeigen in genau entgegengesetzte Richtungen und heben sich vollständig auf — das Gesamtdipolmoment ist null. CO₂ ist daher unpolar, obwohl es polare Bindungen enthält. Dieses Beispiel verdeutlicht, dass Molekülpolarität von der Geometrie abhängt, nicht nur von der Bindungspolarität.",
          hints: [
            "Zeichnen Sie die Dipolvektoren beider C=O-Bindungen.",
            "Linear bedeutet: beide Dipole zeigen in entgegengesetzte Richtungen.",
          ],
          difficulty: 2,
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
          difficulty: 2,
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
          difficulty: 2,
          tags: ["pi-bindung", "rotation", "cis-trans-isomerie"],
        },
        {
          question: "Welche Molekülgeometrie hat Methan (CH₄)?",
          options: ["Trigonal planar", "Linear", "Tetraedrisch", "Oktaedrisch", "Gewinkelt"],
          correctIndex: 2,
          explanation:
            "Kohlenstoff in CH₄ ist sp³-hybridisiert: ein 2s-Orbital und drei 2p-Orbitale mischen zu vier gleichwertigen sp³-Hybridorbitalen. Diese stoßen sich gegenseitig ab und nehmen die tetraedrische Anordnung mit Bindungswinkeln von 109,5° ein. Da kein freies Elektronenpaar vorhanden ist, entspricht die Molekülgeometrie der Elektronenanordnung: perfekter Tetraeder. Die sp³-Hybridisierung findet sich in allen Alkanen und bei Stickstoff in Aminen, Sauerstoff in Ethern usw.",
          hints: [
            "sp³: vier Hybridorbitale, keine freien Paare.",
            "Was ist der Bindungswinkel im idealen Tetraeder?",
          ],
          difficulty: 1,
          tags: ["sp3", "methan", "tetraeder"],
        },
        {
          question:
            "Ein Lösungsmittel löst Fette gut, aber keine Salze. Welche Eigenschaft beschreibt dieses Lösungsmittel am besten?",
          options: ["Polar, protisch", "Polar, aprotisch", "Unpolar", "Amphiphil", "Ionisch"],
          correctIndex: 2,
          explanation:
            'Das Prinzip "Gleiches löst Gleiches" (similia similibus solvuntur) besagt, dass polare Substanzen in polaren Lösungsmitteln und unpolare Substanzen in unpolaren Lösungsmitteln löslich sind. Fette (Triglyceride) sind unpolar, weil die langen Kohlenwasserstoffketten keine permanenten Dipole haben. Salze dagegen sind ionisch und lösen sich nur in polaren Lösungsmitteln (Wasser) durch Hydratation. Ein Lösungsmittel, das Fette löst, aber keine Salze, muss unpolar sein (z. B. Hexan, Dichlormethan).',
          hints: [
            "Similia similibus solvuntur — Gleiches löst Gleiches.",
            "Sind Fette polar oder unpolar?",
          ],
          difficulty: 1,
          tags: ["löslichkeit", "unpolar", "similia-similibus"],
        },
        {
          question:
            "Die Peptidbindung (–CO–NH–) kann nicht frei rotieren und ist planar. Was ist die chemische Ursache?",
          options: [
            "Die Peptidbindung ist eine Ionenbindung zwischen C und N.",
            "Das freie Elektronenpaar des Stickstoffs ist in ein delokalisiertes π-System mit der Carbonylgruppe einbezogen, was partiellen Doppelbindungscharakter und Planarität erzeugt.",
            "Die sp³-Hybridisierung von C und N verhindert Rotation.",
            "Wasserstoffbrücken zwischen CO und NH fixieren die Bindung.",
            "Die hohe Bindungsenergie der C–N-Einfachbindung macht Rotation unmöglich.",
          ],
          correctIndex: 1,
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
          options: ["H₂O", "NH₃", "CH₄", "C₂H₂ (Ethin)", "SO₂"],
          correctIndex: 3,
          explanation:
            "In Ethin (C₂H₂, Acetylen) ist jeder Kohlenstoff sp-hybridisiert: ein s- und ein p-Orbital mischen zu zwei sp-Hybridorbitalen (linear, 180°). Die beiden übrigen p-Orbitale an jedem C bilden je eine π-Bindung, sodass die C≡C-Dreifachbindung aus 1 σ + 2 π besteht. Das Molekül ist vollständig linear. Acetylen ist ein wichtiges Beispiel für sp-Hybridisierung; weitere sind HCN (Blausäure) und CO₂ (bei Kohlenstoff).",
          hints: [
            "sp-Hybridisierung: zwei Hybridorbitale, 180°.",
            "Welches Molekül enthält eine Dreifachbindung?",
          ],
          difficulty: 2,
          tags: ["sp-hybridisierung", "ethin", "linear"],
        },
        {
          question:
            "Wie viele σ-Bindungen und wie viele π-Bindungen enthält das Ethen-Molekül (C₂H₄)?",
          options: [
            "4 σ-Bindungen und 2 π-Bindungen",
            "5 σ-Bindungen und 1 π-Bindung",
            "6 σ-Bindungen und 0 π-Bindungen",
            "3 σ-Bindungen und 2 π-Bindungen",
            "4 σ-Bindungen und 1 π-Bindung",
          ],
          correctIndex: 1,
          explanation:
            "Ethen (C₂H₄) enthält eine C=C-Doppelbindung und vier C–H-Einfachbindungen. Die Doppelbindung besteht aus 1 σ + 1 π. Jede der vier C–H-Bindungen ist eine σ-Bindung. Insgesamt: 5 σ-Bindungen (1 C–C(σ) + 4 C–H) und 1 π-Bindung. Die π-Bindung entsteht durch laterale Überlappung der unhybridisierten p-Orbitale senkrecht zur sp²-Ebene und verhindert die freie Rotation um die C=C-Achse → Grundlage der Cis-Trans-Isomerie.",
          hints: [
            "Einfachbindungen = σ; Doppelbindung = σ + π.",
            "Zählen Sie alle Bindungen im Molekül einzeln.",
          ],
          difficulty: 2,
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
          difficulty: 1,
          tags: ["elektronegativität", "pauling", "periodensystem"],
        },
        {
          question: "Welche Bindung ist aufgrund der Elektronegativitätsdifferenz am polarsten?",
          options: [
            "C–H (ΔEN ≈ 0,4)",
            "C–N (ΔEN ≈ 0,5)",
            "C–O (ΔEN ≈ 1,0)",
            "C–F (ΔEN ≈ 1,5)",
            "C–C (ΔEN = 0,0)",
          ],
          correctIndex: 3,
          explanation:
            "Die Polarität einer kovalenten Bindung wird durch die Elektronegativitätsdifferenz (ΔEN) bestimmt. Je größer ΔEN, desto polarer die Bindung und desto stärker die Partialladungen (δ+ und δ−). C–F hat die größte ΔEN (4,0 − 2,5 = 1,5) und ist daher die polarste der aufgelisteten Bindungen. C–C ist komplett unpolar (ΔEN = 0), C–H fast unpolar (0,4). Beachte: Ab ΔEN > 1,7 spricht man von ionischer Bindung (z. B. Na–Cl: 2,1).",
          hints: [
            "Polarität = Elektronegativitätsdifferenz.",
            "Fluor hat die höchste EN aller Elemente.",
          ],
          difficulty: 1,
          tags: ["polarität", "elektronegativität", "delta-en"],
        },
      ],
    },

    {
      id: "ch-6-03",
      title: "Van-der-Waals, Wasserstoffbrücken und Metallbindung",
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
      content: `## Einleitung

Warum siedet Wasser erst bei 100 °C, obwohl das vergleichbar schwere H₂S schon bei −60 °C gasförmig ist? Die Antwort: **Wasserstoffbrücken**. Jedes Wassermolekül kann bis zu vier davon ausbilden und wird dadurch in ein dreidimensionales Netzwerk eingebunden. Diese „schwachen" Kräfte zwischen Molekülen bestimmen enorm viel: Sie halten die DNA-Doppelhelix zusammen (A-T: 2 H-Brücken, G-C: 3), treiben die Proteinfaltung an und sorgen dafür, dass Eis auf Seen schwimmt. Neben H-Brücken gibt es London-Dispersionskräfte und Dipol-Dipol-Wechselwirkungen — zusammen erklären sie Siedepunkte, Löslichkeiten und biologische Strukturen.

**In diesem Kapitel lernst du:**
- welche drei Arten intermolekularer Kräfte es gibt und wie sie sich in der Stärke unterscheiden (Hierarchie: kovalent >> H-Brücke > Dipol-Dipol > London)
- warum nur N, O und F als H-Brücken-Donoren wirken und welche biologischen Strukturen davon abhängen
- wie die Anomalien des Wassers (Siedepunkt, Dichteanomalie, Wärmekapazität) mit H-Brücken zusammenhängen
- wie das Elektronengas-Modell und das Bändermodell die besonderen Eigenschaften von Metallen und Halbleitern erklären
- wie Van-der-Waals-Kräfte die Membranfluidität bestimmen (gesättigt vs. ungesättigt)

---

## Überblick: Zwischenmolekulare Kräfte

{{DIAGRAM:covalent-bond}}

Neben den intramolekularen Bindungen (Ionen-, kovalente, Metallbindung) bestimmen **intermolekulare Wechselwirkungen** (van-der-Waals-Kräfte, Wasserstoffbrücken, Dipol-Dipol) die physikalischen Eigenschaften von Stoffen: Aggregatszustand, Siedepunkt, Löslichkeit, Viskosität. In der Biologie sind sie ebenso fundamental — sie bestimmen Proteinstruktur, DNA-Doppelhelix und Enzym-Substrat-Wechselwirkungen.

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
- **Polarisierbarkeit:** Größere Atome/Moleküle mit mehr Elektronen sind stärker polarisierbar → stärkere Dispersionskräfte. Beispiel: He siedet bei −269 °C, Xe bei −108 °C (mehr Elektronen). Iod (I₂) ist bei Raumtemperatur ein Feststoff — die hohe Polarisierbarkeit der 106 Elektronen erzeugt starke London-Kräfte.
- **Kontaktfläche:** Längerkettige, unverzweigte Moleküle haben größere Kontaktfläche → stärkere Wechselwirkung (n-Pentan siedet bei 36 °C; Neopentan bei 9,5 °C trotz gleicher Summenformel C₅H₁₂).
- **Abstandsabhängigkeit:** London-Kräfte fallen mit r⁻⁶ ab — sie wirken nur auf sehr kurze Distanzen (< 500 pm).

| Edelgas | Elektronenzahl | Siedepunkt (°C) | London-Kräfte |
|---|---|---|---|
| He | 2 | −269 | Extrem schwach |
| Ne | 10 | −246 | Sehr schwach |
| Ar | 18 | −186 | Schwach |
| Kr | 36 | −153 | Mittel |
| Xe | 54 | −108 | Stärker |

> **Merke:** London-Dispersionskräfte sind die **universellen** intermolekularen Kräfte — sie wirken zwischen ALLEN Molekülen und Atomen, auch komplett unpolaren. Bei großen Molekülen (Fettsäuren, Proteine, Polymere) können sie kollektiv beträchtliche Stärke erreichen. Sie sind der Grund, warum auch unpolare Substanzen kondensieren und erstarren können.

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

---

## Dipol-Dipol-Wechselwirkungen

Bisher haben wir gesehen, dass London-Kräfte zwischen allen Molekülen wirken — auch unpolaren. **Dipol-Dipol-Wechselwirkungen** kommen als zusätzliche Kraft hinzu, wenn Moleküle ein **permanentes Dipolmoment** besitzen (also polare Moleküle mit asymmetrischer Ladungsverteilung).

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

Ein Spezialfall ist die **Keesom-Wechselwirkung** (permanenter Dipol–permanenter Dipol) und die **Debye-Wechselwirkung** (permanenter Dipol–induzierter Dipol). Alle drei Beiträge (London + Keesom + Debye) werden zusammen als **Van-der-Waals-Kräfte** bezeichnet, wobei London-Kräfte fast immer den größten Anteil ausmachen.

| Van-der-Waals-Typ | Beteiligte Dipole | Stärke | Beispiel |
|---|---|---|---|
| London-Dispersion | Instantan ↔ induziert | 0,1–10 kJ/mol | Alle Moleküle (He, CH₄, Fette) |
| Keesom | Permanent ↔ permanent | 1–5 kJ/mol | HCl, Aceton, CHCl₃ |
| Debye | Permanent → induziert | 0,5–2 kJ/mol | HCl neben Ar; H₂O neben O₂ |

> **Merke:** „Van-der-Waals-Kräfte" ist der Oberbegriff für alle drei Typen (London + Keesom + Debye). In der Praxis dominieren London-Kräfte fast immer — selbst bei polaren Molekülen machen sie oft >50 % der gesamten intermolekularen Wechselwirkung aus. Nur bei sehr kleinen, stark polaren Molekülen (HF, H₂O) überwiegen H-Brücken.

---

## Hierarchie der intermolekularen Kräfte — Stärkenvergleich

Um das Verhalten von Stoffen in Natur und Biochemie zu verstehen, ist eine klare **Stärkehierarchie** der Wechselwirkungen essentiell:

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

> **Merke:** Die Hierarchie der Kräfte: kovalent ≈ ionisch >> Ion-Dipol >> H-Brücke >> Dipol-Dipol >> London. Für Siedepunkte und Löslichkeit sind die intermolekularen Kräfte entscheidend. In der Biochemie dominieren H-Brücken und der hydrophobe Effekt (London-Kräfte) die molekulare Erkennung.

---

**Ion-Dipol-Wechselwirkungen:** Wirken zwischen Ionen und polaren Molekülen — Grundlage der Hydratation/Solvatation. Na⁺ wird von den partiell negativen Sauerstoffatomen des Wassers umgeben (Hydratationszahl ~6), Cl⁻ von den partiell positiven Wasserstoffatomen. Diese Wechselwirkung ist der stärkste intermolekulare Krafttyp und ermöglicht das Lösen von Salzen in Wasser. Die Hydratationsenthalpie von Na⁺ beträgt −406 kJ/mol, von Cl⁻ −377 kJ/mol — zusammen fast so groß wie die Gitterenergie von NaCl (−786 kJ/mol).

## Wasserstoffbrückenbindungen (H-Brücken)

Um das Verhalten von Wasser, DNA und Proteinen zu verstehen, sind Wasserstoffbrücken die wichtigste intermolekulare Kraft überhaupt. Sie sind stärker als Dipol-Dipol-Kräfte und London-Kräfte und erklären die meisten Anomalien biologisch relevanter Moleküle.

**Definition:** Wasserstoffbrücken entstehen, wenn ein Wasserstoff, der kovalent an ein hochelektronegatives Atom gebunden ist (N, O, F — „Donor"), elektrostatisch mit dem freiem Elektronenpaar eines anderen elektronegativen Atoms („Akzeptor") wechselwirkt.

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

> **Merke:** H₂O > HF > NH₃ in der Stärke der Siedepunkt-Anomalie. H₂O bildet das stärkste 3D-Netzwerk (4 H-Brücken: 2 Donor + 2 Akzeptor). NH₃ und HF bilden eher Ketten. Daher siedet H₂O bei 100 °C, obwohl es die kleinste Molmasse in der Reihe hat.

---

### Biologische Bedeutung der Wasserstoffbrücken

**DNA-Doppelhelix:** Adenin (A) bildet 2 H-Brücken mit Thymin (T); Guanin (G) bildet 3 H-Brücken mit Cytosin (C). GC-reiche DNA ist thermisch stabiler (Tm höher). Denaturierung durch Hitze bricht H-Brücken → Stränge trennen sich. Klinisch: GC-Gehalt bestimmt Primerdesign in der PCR.

**Proteinstruktur:**
- α-Helix: H-Brücke zwischen C=O der Aminosäure i und N–H der Aminosäure i+4 entlang der Helix.
- β-Faltblatt: H-Brücken zwischen parallelen oder antiparallelen Strängen.
- Tertiärstruktur: H-Brücken an Oberfläche und im Inneren stabilisieren die Faltung.

**Enzymkatalyse:** Aktives Zentrum: H-Brücken orientieren Substrat, stabilisieren Übergangszustände und ermöglichen stereoselektive Katalyse. Im aktiven Zentrum der Serinproteasen bildet das katalytische Triad (Ser-His-Asp) ein H-Brücken-Netzwerk.

**Weitere biologische Beispiele für H-Brücken:**
- **Cellulose-Mikrofibrillen:** Hunderte paralleler β-1,4-Glucanketten, verknüpft durch O–H···O-Brücken → enorme Zugfestigkeit (stärker als Stahl bezogen auf die Dichte). Baumwolle, Holz, Papier — alles H-Brücken-basiert.
- **Kohlenhydrat-Erkennung:** Lektine (Zucker-bindende Proteine) erkennen spezifische Kohlenhydrate an Zelloberflächen über H-Brücken → Immunabwehr, Blutgruppenbestimmung (Anti-A/B-Antikörper), Infektionsprozesse (Bakterien-Lektine binden an Darm-Glykoproteine).
- **Wasser-Kanal Aquaporin:** Selektiv permeabel für H₂O, aber nicht für H₃O⁺ (Hydronium). Mechanismus: Die H-Brücken-Kette wird im Inneren des Kanals unterbrochen — Wasser passiert einzeln, Protonen können die H-Brücken-Kette nicht durchlaufen (Grotthuss-Mechanismus blockiert).
- **Anästhesie:** Inhalationsanästhetika (Sevofluran, Desfluran) wirken u. a. durch Störung von H-Brücken an GABA-Rezeptoren und Ionenkanälen → veränderte Protein-Konformation → Bewusstlosigkeit.

**Pharmaka:** H-Brücken-Donoren und -Akzeptoren sind entscheidend für Lipinski's Rule of Five (Bioverfügbarkeit): ≤5 HBD, ≤10 HBA. Zu viele H-Brücken-Gruppen → schlechte Membranpermeabilität.

**Tabellarischer Überblick: H-Brücken in biologischen Systemen:**

| System | H-Brücken-Typ | Funktion | Konsequenz bei Störung |
|---|---|---|---|
| DNA-Basenpaarung | N–H···O, N–H···N | Komplementäre Basenpaarung A–T/G–C | Denaturierung → Replikationsfehler |
| α-Helix | N–H···O=C (i→i+4) | Lokale Sekundärstruktur | Entfaltung → Funktionsverlust |
| β-Faltblatt | N–H···O=C (Strang-Strang) | Flächige Sekundärstruktur | Amyloid-Fehlfaltung (Alzheimer) |
| Kollagen | N–H···O (Gly-X-Y) | Tripelhelix → Zugfestigkeit | Skorbut (Vitamin-C-Mangel) |
| Wasser | O–H···O | 3D-Netzwerk → alle Anomalien | — (Wasser ohne H-Brücken wäre gasförmig bei RT) |
| Cellulose | O–H···O (Ketten) | Mikrofibrillen → Reißfestigkeit | — |
| Enzym-Substrat | Diverse | Spezifische Erkennung, Katalyse | Kompetitive Hemmung |

**Wasser als Lösungsmittel — H-Brücken in der Solvatation:**
Wasser löst polare und ionische Substanzen durch Ausbildung von H-Brücken (und Ion-Dipol-Wechselwirkungen) mit dem gelösten Stoff. Die Hydratation von Glucose z. B. erfolgt über H-Brücken zwischen den zahlreichen OH-Gruppen der Glucose und den Wassermolekülen. Aminosäuren an der Proteinoberfläche werden ebenfalls durch H-Brücken mit Wasser stabilisiert. Das erklärt auch, warum Harnstoff (hohe H-Brücken-Kapazität: 4 Donoren, 1 Akzeptor) als Denaturierungsmittel wirkt — er konkurriert erfolgreich mit den intramolekularen H-Brücken des Proteins.

**Van-der-Waals-Kräfte in Zellmembranen:**
Die Integrität der Lipiddoppelschicht hängt nicht nur vom hydrophoben Effekt ab, sondern auch von London-Kräften zwischen den parallel angeordneten Fettsäureketten. Gesättigte Ketten packen sich dicht → stärkere London-Kräfte → rigidere Membran. Cis-ungesättigte Ketten erzeugen Knicke → lockere Packung → schwächere London-Kräfte → fluidere Membran. Cholesterol füllt Lücken zwischen ungesättigten Ketten und erhöht die Ordnung → bei 37 °C moduliert es die Membranfluidität optimal für die Zellfunktion.

| Fettsäure-Typ | Packung | London-Kräfte | Membranfluidität |
|---|---|---|---|
| Gesättigt (z. B. Palmitinsäure 16:0) | Dicht, parallel | Stark | Niedrig (rigide) |
| Cis-ungesättigt (z. B. Ölsäure 18:1) | Locker (Knick) | Schwächer | Hoch (fluid) |
| Trans-ungesättigt (z. B. Elaidinsäure) | Nahezu gerade | Stark (wie gesättigt) | Niedrig (pathologisch) |
| + Cholesterol | Lücken gefüllt | Reguliert | Optimal bei 37 °C |

{{DIAGRAM:ionic-bond}}

## Metallbindung

Bisher haben wir Ionenbindung (Elektronenübertragung) und kovalente Bindung (Elektronenteilung) besprochen. Die dritte Hauptbindungsart — die **Metallbindung** — unterscheidet sich fundamental von beiden: Hier werden Valenzelektronen nicht zwischen Atomen geteilt oder übertragen, sondern **kollektiv von allen Atomen im Gitter geteilt**.

### Elektronengasmodell (Drude-Modell)

**Modell:** Im Metall befinden sich die Metallatome im Gitter, ihre Valenzelektronen sind jedoch **delokalisiert** und bilden ein „Elektronengas" oder „Elektronenmeer", das sich frei durch das gesamte Gitter bewegt. Die positiven Metallionen (Rumpfionen) werden durch das Elektronengas zusammengehalten — die Bindung ist **ungerichtet** und **nicht gesättigt** (im Gegensatz zur kovalenten Bindung).

Die Bindungsstärke hängt ab von:
- **Anzahl der Valenzelektronen:** Mehr Valenzelektronen → dichteres Elektronengas → stärkere Bindung. Alkalimetalle (1 VE): weich, niedrige Schmelzpunkte; Übergangsmetalle (d-Elektronen): hart, hohe Schmelzpunkte.
- **Atomradius/Gitterabstand:** Kleinere Atome → dichtere Packung → stärkere metallische Bindung.
- **Kristallstruktur:** Kubisch-flächenzentriert (Cu, Au, Al) und hexagonal dichteste Packung (Zn, Mg) haben Koordinationszahl 12; kubisch-raumzentriert (Fe, W, Cr) hat KZ 8.

### Bändermodell (vereinfacht)

Das **Bändermodell** ist die quantenmechanisch korrektere Beschreibung: Wenn N Atome im Metallkristall ihre Atomorbitale überlappen, spalten diese in N eng benachbarte Energieniveaus auf — die Energieniveaus liegen so dicht, dass sie praktisch ein **kontinuierliches Band** bilden.

- **Valenzband:** enthält die Valenzelektronen
- **Leitungsband:** höheres Energieband, in dem sich Elektronen frei bewegen können
- **Bandlücke (Bandgap):** Energiedifferenz zwischen Valenz- und Leitungsband

| Material | Bandlücke | Leitfähigkeit | Beispiele |
|---|---|---|---|
| Metall | Keine (Bänder überlappen) | Exzellent | Cu, Au, Ag, Fe |
| Halbmetall | Minimal | Gering | Bi, Sb, Graphit |
| Halbleiter | Klein (0,1–3 eV) | Mittel (T-abhängig) | Si (1,1 eV), Ge (0,7 eV) |
| Isolator | Groß (> 3 eV) | Keine | Diamant (5,5 eV), NaCl, Glas |

Bei **Metallen** überlappen Valenz- und Leitungsband → Elektronen können ohne Energieaufwand in höhere Zustände wechseln → sofortige Stromleitung bei angelegter Spannung. Bei **Halbleitern** müssen Elektronen die (kleine) Bandlücke überwinden → Leitfähigkeit steigt mit Temperatur (Gegenteil von Metallen!). Bei **Isolatoren** ist die Bandlücke zu groß → keine Leitung.

> **Merke:** Im Bändermodell bestimmt die Bandlücke, ob ein Stoff leitet: Keine Lücke = Metall (Leiter); kleine Lücke = Halbleiter; große Lücke = Isolator. Halbleiter leiten besser bei hoher Temperatur (Gegenteil von Metallen!).

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

### Supraleitung und besondere Metallphänomene (Vertiefung)

Einige Metalle zeigen bei sehr niedrigen Temperaturen **Supraleitung**: Der elektrische Widerstand sinkt schlagartig auf exakt null (z. B. Quecksilber unter 4,2 K, Niob unter 9,3 K). Im supraleitenden Zustand bilden Elektronen Cooper-Paare, die sich widerstandsfrei durch das Gitter bewegen. Medizinisch relevant: Supraleitende Magnete in **MRT-Geräten** (NbTi-Legierungen bei 4 K → extrem starke, homogene Magnetfelder von 1,5–7 Tesla). Die Kühlung erfolgt mit flüssigem Helium (4,2 K).

**Halbleiter in der Medizintechnik:**
- **Photodioden** (Si, Ge): Detektoren in CT-Scannern, Röntgengeräten, Pulsoximetern
- **Transistoren** (Si): Grundlage aller medizinischen Elektronik (EKG, EEG, Beatmungsgeräte)
- **LEDs** (GaN, InGaN): Phototherapie bei Neugeborenenikterus (Blaulicht 460 nm → Bilirubinabbau)
- **Piezoelektrische Kristalle** (Quarz, Bariumtitanat): Ultraschallsonden (1–20 MHz) → Bildgebung

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

> **Merke:** Metallbindung = delokalisiertes Elektronengas → erklärt ALLE metallischen Eigenschaften: Leitfähigkeit (Elektronen fließen), Duktilität (Schichten gleiten ohne Bruch), Glanz (Elektronen reflektieren Licht). Die Bindungsstärke steigt mit der Zahl der Valenzelektronen und sinkt mit dem Atomradius.

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Welche Kräfte wirken zwischen unpolaren Molekülen? → Ausschließlich London-Dispersionskräfte (instantane Dipole)
- Warum siedet H₂O bei 100 °C, H₂S bei −60 °C? → H₂O bildet starke H-Brücken (O elektronegativ genug); S nicht
- Wie viele H-Brücken bilden A-T vs. G-C? → A-T: 2, G-C: 3 → GC-reiche DNA ist stabiler
- Ordnen Sie nach Stärke: kovalent > ionisch > Ion-Dipol > H-Brücke > Dipol-Dipol > London
- Warum leiten Metalle besser bei niedriger Temperatur? → Weniger Gitterschwingungen → weniger Elektronenstreuung
- Warum werden gesättigte Fette bei RT fest? → Gerade Ketten → dichte Packung → starke London-Kräfte

**Typische Fallen:**
- H-Brücken nur mit N, O, F als Donor — nicht Schwefel, nicht C-H (C nicht elektronegativ genug)
- Eis ist leichter als Wasser (Dichteanomalie) — merken: Eis schwimmt
- Verzweigung verringert die Kontaktfläche → schwächere London-Kräfte → niedrigerer Siedepunkt
- Halbleiter leiten bei hoher T besser (Gegenteil von Metallen!) — Bandlücke wird leichter überwunden
- Dipol-Dipol ≠ H-Brücke: H-Brücken sind ein Spezialfall, deutlich stärker als normale Dipol-Dipol-Kräfte
- Van-der-Waals ist der Oberbegriff (London + Dipol-Dipol + Debye), nicht nur London!

## Zusammenfassung (ultrakompakt)

- **Stärke-Hierarchie**: kovalent ≈ ionisch >> Ion-Dipol >> H-Brücke >> Dipol-Dipol >> London
- **London-Kräfte**: wirken zwischen ALLEN Molekülen; ↑ Elektronenzahl + ↑ Kontaktfläche → ↑ Stärke; einzige Kraft bei unpolaren Stoffen
- **Dipol-Dipol**: nur bei polaren Molekülen; T-abhängig (schwächer bei hoher T); 1–5 kJ/mol
- **Wasserstoffbrücke**: H kovalent an N, O oder F → wechselwirkt mit freiem EP an N, O oder F; 10–40 kJ/mol; stärkste: F–H···F
- **DNA**: A–T: 2 H-Brücken; G–C: 3 H-Brücken; GC-reiche DNA stabiler (höhere Schmelztemperatur)
- **Proteinstruktur**: α-Helix (H-Brücke i→i+4), β-Faltblatt (Strang-zu-Strang); Sekundärstruktur = H-Brücken
- **Dichteanomalie des Wassers**: Eis leichter als flüssiges Wasser (4 °C = dichtestes); Seen frieren von oben
- **Biomembranen**: London-Kräfte zwischen Fettsäureketten; gesättigt = rigide; cis-ungesättigt = fluid; Cholesterol = Regulator
- **Metallbindung**: Elektronengas → Leitfähigkeit, Duktilität, Glanz; Bindungsstärke ∝ Valenzelektronenzahl
- **Bändermodell**: keine Bandlücke = Metall (Leiter); kleine = Halbleiter (↑T → ↑Leitung); große = Isolator
- **3 Bindungstypen verglichen**: Ionenbindung (Metall+NM, Übertragung, spröde); kovalent (NM+NM, Teilung, gerichtet); Metallbindung (Metall+Metall, Elektronengas, duktil)
- **Medizinische Metalle**: Fe (Hämoglobin), Zn (>300 Enzyme), Ti (Implantate), Pt (Cisplatin), Gd (MRT-Kontrastmittel)`,

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
        "London-Kräfte: wirken zwischen ALLEN Molekülen, entstehen durch instantane Dipole.",
        "Größere Moleküle = höhere Polarisierbarkeit = stärkere London-Kräfte.",
        "Verzweigung verringert Kontaktfläche → schwächere London-Kräfte → niedrigerer Siedepunkt.",
        "Dipol-Dipol: nur zwischen polaren Molekülen; stärker als London bei ähnlicher Masse; T-abhängig.",
        "Stärke-Hierarchie: kovalent ≈ ionisch >> Ion-Dipol >> H-Brücke >> Dipol-Dipol >> London.",
        "H-Brücke: H–N/O/F als Donor; N/O/F mit freiem EP als Akzeptor.",
        "Stärkste H-Brücke: F–H···F (25–40 kJ/mol); häufigste in Biologie: N–H···O und O–H···O.",
        "DNA: A-T = 2 H-Brücken; G-C = 3 H-Brücken → GC-reich = thermisch stabiler.",
        "Wasser: bis zu 4 H-Brücken → anomal hoher Siedepunkt, Dichte-Anomalie des Eises.",
        "London-Kräfte in Membranen: gesättigte Ketten → dichte Packung → rigide; cis-ungesättigt → Knick → fluid.",
        "Metallbindung: delokalisiertes Elektronengas → Leitfähigkeit, Duktilität, Glanz.",
        "Bändermodell: Metall = keine Bandlücke; Halbleiter = kleine Lücke; Isolator = große Lücke.",
        "Ionenkristall: spröde (Verschiebung → Abstoßung gleicher Ladungen); Metall: duktil (Elektronengas gleitet mit).",
        "H-Brücken: 10–40 kJ/mol; schwächer als kovalent, aber kollektiv enorm wichtig in Biomolekülen.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Erklären Sie die Bedeutung der Wasserstoffbrückenbindungen für die Struktur und Funktion der DNA-Doppelhelix. Warum ist GC-reiche DNA thermisch stabiler als AT-reiche DNA?",
        answer: `Die DNA-Doppelhelix wird durch Wasserstoffbrücken zwischen den komplementären Basenpaaren auf den gegenüberliegenden Strängen zusammengehalten. Adenin (A) paart mit Thymin (T) über 2 Wasserstoffbrücken, Guanin (G) paart mit Cytosin (C) über 3 Wasserstoffbrücken. Die H-Brücken folgen der spezifischen Geometrie der Basenpaare: Donoren (N–H oder O–H) wechselwirken mit Akzeptoren (N oder O mit freiem Elektronenpaar) in präzise ausgerichteter Weise, was die Basenpaarspezifität garantiert.

GC-Paare sind thermisch stabiler als AT-Paare, weil sie 3 Wasserstoffbrücken bilden statt 2. Bei der Denaturierung (Schmelztemperatur Tm) der DNA werden diese H-Brücken aufgebrochen. Regionen mit hohem GC-Gehalt benötigen mehr thermische Energie (höheres Tm), da pro Basenpaar im Durchschnitt mehr H-Brücken zu lösen sind. Dies ist klinisch relevant: PCR-Primer-Design berücksichtigt GC-Gehalt zur Optimierung der Anlagerungstemperatur. Auch die Denaturierung von Pathogen-DNA durch Hitze (Sterilisation) basiert auf diesem Prinzip.

Zusätzlich zu den H-Brücken stabilisieren π-π-Stapelwechselwirkungen (London-Kräfte zwischen aromatischen Ringen der Basen) die Doppelhelix. Beide Kräfte zusammen machen die DNA-Helix hochstabil, aber dennoch durch Enzyme (Helikasen, Topoisomerasen) kontrolliert entwindbar.`,
      },

      klinischerBezug:
        "Wasserstoffbrücken in der DNA-Doppelhelix (A-T: 2; G-C: 3) sind die molekulare Grundlage für die Spezifität der Basenpaarung bei Replikation und Transkription; GC-reiche Promotor-Bereiche und die thermische Stabilität von DNA werden durch H-Brücken-Statistik bestimmt und sind klinisch relevant für PCR-Diagnostik und Gentechnik. Die hohe Wärmekapazität und Verdampfungswärme des Wassers ermöglichen die Thermoregulation des Menschen durch Schwitzen (Verdampfung von ~580 kcal/L Schweiß). London-Kräfte bestimmen die Membranfluidität: Gesättigte Fettsäuren → rigide, ungesättigte → fluid; Cholesterol moduliert bei 37 °C. Das Bändermodell erklärt die Funktion von Halbleitern in medizinischen Geräten (Si-Detektoren in CT, Photodioden in Pulsoximetern). Supraleitende NbTi-Magnete in MRT-Geräten basieren auf dem quantenmechanischen Phänomen der Cooper-Paar-Bildung bei 4 K.",

      selfTest: [
        {
          question: "Welche intermolekulare Kraft wirkt zwischen Edelgasatomen (z. B. Helium, He)?",
          options: [
            "Dipol-Dipol-Wechselwirkung",
            "Wasserstoffbrückenbindung",
            "Ionische Wechselwirkung",
            "London-Dispersionskraft",
            "Kovalente Bindung",
          ],
          correctIndex: 3,
          explanation:
            "Edelgasatome sind unpolar, besitzen keine permanenten Dipole und bilden keine Wasserstoffbrücken. Die einzige intermolekulare Kraft zwischen ihnen sind London-Dispersionskräfte (van-der-Waals), die durch instantane Elektronenfluktuation entstehen. Obwohl diese Kräfte sehr schwach sind (He siedet bei −269 °C, nahe 0 K), sind sie die Ursache dafür, dass Edelgase überhaupt verflüssigt werden können. Mit größerer Elektronenzahl (Kr, Xe) werden London-Kräfte stärker und die Siedepunkte steigen.",
          hints: [
            "Edelgase sind vollständig unpolar.",
            "Welche Kraft wirkt auch bei komplett unpolaren Teilchen?",
          ],
          difficulty: 1,
          tags: ["london-kräfte", "edelgase", "van-der-waals"],
        },
        {
          question:
            "Warum hat n-Pentan (unverzweigt) einen höheren Siedepunkt als Neopentan (stark verzweigt), obwohl beide die Summenformel C₅H₁₂ haben?",
          options: [
            "n-Pentan ist polarer als Neopentan.",
            "n-Pentan hat mehr Wasserstoffbrücken.",
            "n-Pentan hat eine größere Kontaktfläche → stärkere London-Kräfte.",
            "Neopentan hat eine höhere Molmasse.",
            "n-Pentan bildet Dipol-Dipol-Wechselwirkungen, Neopentan nicht.",
          ],
          correctIndex: 2,
          explanation:
            "n-Pentan und Neopentan (2,2-Dimethylpropan) haben identische Summenformel C₅H₁₂, also gleiche Elektronenzahl und Polarisierbarkeit. Der Unterschied liegt in der Gestalt: n-Pentan ist kettenartig gestreckt und bietet eine große Kontaktfläche für London-Kräfte. Neopentan ist kugelförmig kompakt (niedrige Kontaktfläche). Stärkere London-Kräfte bei n-Pentan → höherer Siedepunkt (36 °C vs. 9,5 °C für Neopentan). Dieses Prinzip erklärt auch, warum unverzweigte Fettsäuren höhere Schmelzpunkte haben.",
          hints: [
            "Beide Moleküle sind unpolar → nur London-Kräfte.",
            "Was beeinflusst die Stärke von London-Kräften außer der Elektronenzahl?",
          ],
          difficulty: 2,
          tags: ["london-kräfte", "verzweigung", "kontaktfläche"],
        },
        {
          question:
            "Welche Bedingungen muss ein Atom erfüllen, um als Wasserstoffbrücken-Donor zu fungieren?",
          options: [
            "Es muss ein freies Elektronenpaar besitzen.",
            "Es muss ein Wasserstoffatom kovalent an N, O oder F gebunden haben.",
            "Es muss ein Metall sein.",
            "Es muss negativ geladen sein.",
            "Es muss eine sp³-Hybridisierung aufweisen.",
          ],
          correctIndex: 1,
          explanation:
            "Ein Wasserstoffbrücken-Donor ist ein Atom, das ein Wasserstoffatom kovalent an ein hochelektronegatives Atom (N, O oder F) gebunden trägt. Das H-Atom ist durch die starke Elektronegativität des gebundenen Atoms stark positiv polarisiert (δ+) und kann dann elektrostatisch mit einem freien Elektronenpaar eines Akzeptors (ebenfalls N, O oder F) wechselwirken. Ohne die kovalente D–H-Bindung (D = N, O, F) wäre H nicht ausreichend polarisiert und könnte keine echte H-Brücke bilden.",
          hints: [
            "Donor = liefert das H; Akzeptor = liefert das freie Elektronenpaar.",
            "Nur N, O, F sind elektronegativ genug für H-Brücken.",
          ],
          difficulty: 1,
          tags: ["wasserstoffbrücken", "donor", "akzeptor"],
        },
        {
          question:
            "Warum bildet Guanin-Cytosin (G-C) ein stabileres Basenpaar als Adenin-Thymin (A-T) in der DNA?",
          options: [
            "G-C-Basenpaare sind kovalent verknüpft, A-T-Paare nicht.",
            "G-C-Paare haben 3 Wasserstoffbrücken, A-T-Paare nur 2.",
            "G und C sind größere Moleküle mit stärkeren London-Kräften.",
            "G-C-Paare liegen tiefer in der Helix vergraben.",
            "A-T-Paare stoßen sich elektrostatisch ab.",
          ],
          correctIndex: 1,
          explanation:
            "In der Watson-Crick-Basenpaarung bildet Guanin mit Cytosin 3 Wasserstoffbrücken, während Adenin mit Thymin nur 2 H-Brücken ausbildet. Da jede Wasserstoffbrücke etwa 10–20 kJ/mol Energie liefert, ist das G-C-Paar stabiler. DNA-Segmente mit hohem GC-Gehalt haben daher eine höhere Schmelztemperatur (Tm). Dies ist relevant für das Primerdesign in der PCR: GC-reiche Primer benötigen höhere Anlagerungstemperaturen.",
          hints: [
            "Zählen Sie die H-Brücken pro Basenpaar.",
            "Mehr H-Brücken = mehr Energie zum Trennen nötig.",
          ],
          difficulty: 1,
          tags: ["dna", "gc-paar", "basenpaarung"],
        },
        {
          question:
            "Welche Eigenschaft der Metallbindung erklärt, dass Metalle elektrischen Strom leiten?",
          options: [
            "Metalle enthalten frei bewegliche Ionen.",
            "Die Gitterenergie ist hoch genug für Ionenmobilität.",
            "Delokalisierte Valenzelektronen (Elektronengas) können sich frei durch das Gitter bewegen.",
            "Metalle haben kovalente Bindungen, die Elektronen transportieren.",
            "Metallkationen wandern unter Spannung wie in Elektrolytlösungen.",
          ],
          correctIndex: 2,
          explanation:
            "Das Elektronengas-Modell der Metallbindung postuliert, dass Valenzelektronen von keinem einzelnen Atom festgehalten werden, sondern über das gesamte Metallgitter delokalisiert sind. Unter einer angelegten elektrischen Spannung fließen diese freien Elektronen gerichtet durch das Gitter — das ist elektrischer Strom. Im Gegensatz zu Elektrolytlösungen (Ionenstrom) oder Halbleitern (aktivierter Elektronenfluss) brauchen Metalle keine Aktivierungsenergie für die Leitfähigkeit, weshalb sie bei Raumtemperatur exzellente Leiter sind.",
          hints: [
            "Metallbindung = Elektronengas-Modell.",
            "Was ist der Träger des elektrischen Stroms in Metallen?",
          ],
          difficulty: 1,
          tags: ["metallbindung", "elektronengas", "leitfähigkeit"],
        },
        {
          question: "Warum ist Eis (H₂O, fest) weniger dicht als flüssiges Wasser bei 4 °C?",
          options: [
            "Eis hat eine höhere Molmasse als flüssiges Wasser.",
            "Im Eis bilden die H-Brücken ein hexagonales Gitter mit größerem Abstand zwischen den Molekülen als im flüssigen Wasser.",
            "Flüssiges Wasser enthält mehr gelöste Gase, die Dichte erhöhen.",
            "Eis ist amorph und hat daher weniger Ordnung als flüssiges Wasser.",
            "Die kovalenten O–H-Bindungen sind im Eis länger als im flüssigen Zustand.",
          ],
          correctIndex: 1,
          explanation:
            "Im flüssigen Wasser sind H-Brücken ständig in Bewegung und Moleküle können dichter gepackt werden. Im Eis (Hexagonaleis) bilden die Wassermoleküle ein regelmäßiges hexagonales H-Brückengitter, in dem jedes Molekül genau 4 H-Brücken zu seinen Nachbarn unterhält. Diese Gitterstruktur hat große, offene Kanäle → niedrigere Dichte als flüssiges Wasser. Bei 4 °C hat flüssiges Wasser die höchste Dichte (1,000 g/mL). Diese Dichte-Anomalie ist biologisch überlebenswichtig: Eis schwimmt auf Wasser, Gewässer frieren von oben zu, das Wasser darunter bleibt flüssig.",
          hints: [
            "Hexagonales Eisgitter: 4 H-Brücken pro Molekül, offene Struktur.",
            "Warum schwimmt Eis auf Wasser — Dichte-Vergleich?",
          ],
          difficulty: 2,
          tags: ["eis", "dichteanomalie", "wasserstoffbrücken"],
        },
        {
          question:
            "Welche Eigenschaft unterscheidet Metalle grundsätzlich von Ionenkristallen in Bezug auf mechanische Verformbarkeit?",
          options: [
            "Metalle sind spröde, Ionenkristalle sind duktil.",
            "Ionenkristalle haben niedrigere Schmelzpunkte als Metalle.",
            "Metalle sind duktil, weil das Elektronengas Ionenschichten zusammenhält auch nach dem Gleiten; Ionenkristalle brechen, weil Verschiebung gleichnamige Ionen nebeneinander bringt.",
            "Ionenkristalle haben stärkere Bindungen als Metalle.",
            "Metalle haben kovalente Bindungen, die plastische Verformung erlauben.",
          ],
          correctIndex: 2,
          explanation:
            "Wenn Metallschichten gegeneinander gleiten, bleibt das Elektronengas ständig zwischen den Metallkationen und hält sie zusammen — es gibt keine ungünstige elektrostatische Situation. Das Metall kann sich plastisch verformen (duktil/formbar) ohne zu brechen. In Ionenkristallen dagegen führt eine Verschiebung der Schichten dazu, dass gleichnamig geladene Ionen nebeneinander zu liegen kommen → elektrostatische Abstoßung → Bruch (spröde). Metalle können gewalzt, gezogen und gebogen werden, Salzkristalle brechen.",
          hints: [
            "Was passiert bei Ionenverschiebung mit den Ladungen?",
            "Elektronengas: hält immer zusammen, egal wie Ionen verschoben.",
          ],
          difficulty: 2,
          tags: ["duktilität", "metallbindung", "ionenkristall"],
        },
        {
          question:
            "Ordnen Sie folgende Wechselwirkungen nach aufsteigender Stärke (schwächste zuerst): Ionenbindung, London-Kräfte, Wasserstoffbrücke, kovalente Bindung.",
          options: [
            "London < Wasserstoffbrücke < Ionenbindung < kovalent",
            "Wasserstoffbrücke < London < Ionenbindung < kovalent",
            "London < Ionenbindung < Wasserstoffbrücke < kovalent",
            "London < Wasserstoffbrücke < kovalent < Ionenbindung",
            "London = Wasserstoffbrücke < Ionenbindung < kovalent",
          ],
          correctIndex: 0,
          explanation:
            "Die korrekte Reihenfolge nach aufsteigender Stärke ist: London-Dispersionskräfte (0,1–10 kJ/mol) < Wasserstoffbrücken (10–40 kJ/mol) < Ionenbindung (200–1000 kJ/mol) < kovalente Bindung (150–1000 kJ/mol, je nach Bindung). Hinweis: Ionenbindung und kovalente Bindung überlappen sich im Bereich, aber starke kovalente Mehrfachbindungen können Ionenbindungen übertreffen. Wasserstoffbrücken sind trotz ihrer geringen Einzelstärke kollektiv in biologischen Makromolekülen dominierend.",
          hints: [
            "London: instantane Dipole, sehr schwach.",
            "H-Brücken: stärker als London, aber schwächer als echte Bindungen.",
          ],
          difficulty: 2,
          tags: ["wechselwirkungen", "reihenfolge", "stärke"],
        },
        {
          question:
            "Warum leiten Halbleiter (z. B. Silizium) bei höherer Temperatur besser als bei niedriger — im Gegensatz zu Metallen?",
          options: [
            "Halbleiter haben mehr Valenzelektronen als Metalle.",
            "Bei Halbleitern müssen Elektronen die Bandlücke überwinden, was bei höherer Temperatur leichter wird; bei Metallen gibt es keine Bandlücke, aber mehr Gitterschwingungen streuen die Elektronen.",
            "Halbleiter werden bei hoher Temperatur zu Metallen.",
            "Die Ionenbeweglichkeit in Halbleitern steigt mit der Temperatur.",
            "Halbleiter haben bei niedrigen Temperaturen zu viele freie Elektronen, die sich gegenseitig stören.",
          ],
          correctIndex: 1,
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
            "London-Dispersionskräfte zwischen den parallel angeordneten Kohlenwasserstoffketten",
            "Ionische Wechselwirkungen zwischen den Fettsäureköpfen",
            "Dipol-Dipol-Kräfte zwischen den gesättigten Ketten",
          ],
          correctIndex: 2,
          explanation:
            "Die Kohlenwasserstoffketten der Phospholipide sind unpolar — sie besitzen keine permanenten Dipole und können keine H-Brücken bilden. Die einzige intermolekulare Kraft zwischen ihnen sind London-Dispersionskräfte. Da die Ketten parallel angeordnet sind und große Kontaktflächen bieten, sind diese London-Kräfte in Summe beträchtlich. Gesättigte Ketten packen dichter → stärkere London-Kräfte → rigidere Membran. Cis-ungesättigte Ketten haben Knicke → lockere Packung → schwächere London-Kräfte → fluidere Membran.",
          hints: [
            "Kohlenwasserstoffketten sind unpolar — welche Kräfte wirken bei unpolaren Molekülen?",
            "Kontaktfläche beeinflusst die Stärke der London-Kräfte.",
          ],
          difficulty: 2,
          tags: ["london-kräfte", "membran", "fettsäuren"],
        },
        {
          question: "Welche Aussage über Dipol-Dipol-Wechselwirkungen ist korrekt?",
          options: [
            "Dipol-Dipol-Kräfte wirken zwischen allen Molekülen, auch unpolaren.",
            "Dipol-Dipol-Kräfte werden bei steigender Temperatur stärker, weil sich die Moleküle schneller bewegen.",
            "Dipol-Dipol-Wechselwirkungen wirken nur zwischen Molekülen mit permanentem Dipolmoment und werden bei höherer Temperatur schwächer.",
            "Dipol-Dipol-Kräfte sind stärker als Wasserstoffbrücken.",
            "Dipol-Dipol-Kräfte erfordern das Vorhandensein von Ionen.",
          ],
          correctIndex: 2,
          explanation:
            "Dipol-Dipol-Wechselwirkungen erfordern permanente Dipolmomente — sie wirken nur zwischen polaren Molekülen (z. B. HCl, Aceton, CHCl₃). Bei steigender Temperatur wird die thermische Bewegung stärker als die bevorzugte antiparallele Orientierung der Dipole → die Dipol-Dipol-Kräfte werden effektiv schwächer. Dies unterscheidet sie von London-Kräften, die temperaturunabhängig sind. Dipol-Dipol-Kräfte (1–5 kJ/mol) sind schwächer als Wasserstoffbrücken (10–40 kJ/mol), aber stärker als reine London-Kräfte bei Molekülen gleicher Größe.",
          hints: [
            "Permanente Dipole: nur bei polaren Molekülen.",
            "Höhere Temperatur → stärkere thermische Bewegung → weniger Orientierung.",
          ],
          difficulty: 2,
          tags: ["dipol-dipol", "temperatur", "polare-moleküle"],
        },
      ],
    },

    {
      id: "ch-6-04",
      title: "Chemische Bindungen in biologischen Molekülen",
      stichworte: [
        "Glycosidische Bindung",
        "Peptidbindung",
        "Phosphodiesterbindung",
        "Disulfidbrücke",
        "Hydrophober Effekt",
        "Proteinstruktur",
        "Denaturierung",
        "Lipid-Bilayer",
        "Enzymkatalyse",
        "Lipinski-Regel",
        "Salzbrücke",
        "Trans-Fettsäuren",
      ],
      content: `## Einleitung

Warum kann der Mensch Stärke verdauen, aber keine Cellulose — obwohl beide aus den gleichen Glucosemolekülen bestehen? Der Unterschied liegt in einem einzigen Bindungswinkel: **α-glycosidisch** (Stärke) vs. **β-glycosidisch** (Cellulose). Unsere α-Amylase erkennt nur die α-Verknüpfung. Solche feinen Unterschiede in **kovalenten Bindungen** bestimmen die gesamte Biologie: Die planare Peptidbindung erzwingt die Sekundärstruktur von Proteinen, Disulfidbrücken stabilisieren Insulin, und **nichtkovalente Wechselwirkungen** treiben die Proteinfaltung und DNA-Basenpaarung.

**In diesem Kapitel lernst du:**
- welche kovalenten Bindungstypen in Biomolekülen vorkommen und warum die Peptidbindung planar ist
- warum α- und β-glycosidische Bindung über Verdaulichkeit entscheiden
- wie nichtkovalente Wechselwirkungen (H-Brücken, hydrophober Effekt, Salzbrücken) die dreidimensionale Struktur bestimmen
- warum Denaturierung die Primärstruktur intakt lässt und was den hydrophoben Effekt wirklich antreibt

---

## Bindungstypen in Biomolekülen

{{DIAGRAM:functional-groups}}

Lebende Systeme sind chemische Systeme, die auf einer fein abgestimmten Hierarchie von Bindungen basieren. **Kovalente Bindungen** (stark, gerichtet, 150–1000 kJ/mol) bauen die Primärstruktur der Makromoleküle auf — sie werden bei der Biosynthese enzymatisch geknüpft und bleiben unter physiologischen Bedingungen stabil. **Nichtkovalente Wechselwirkungen** (schwächer, 0,1–40 kJ/mol, reversibel) bestimmen die dreidimensionale Struktur und Funktion. Das Zusammenspiel beider Klassen ermöglicht die molekulare Dynamik, die Leben ausmacht: Proteine falten sich, DNA wird repliziert, Enzyme katalysieren Reaktionen.

> **Merke:** Kovalente Bindungen = Gerüst (stabil); nichtkovalente Wechselwirkungen = Feineinstellung (flexibel, reversibel). Beide zusammen ergeben die biologische Funktion.

## Kohlenhydrate (Zucker und Polysaccharide)

Monosaccharide (Glucose, Fructose, Ribose) sind durch sp³-hybridisierte C-Atome aufgebaut. Die **Ringform** (Pyranosen, Furanosen) entsteht durch intramolekulare Halbacetalbildung. Das **anomere Kohlenstoffatom** (C1) kann α- oder β-Konfiguration einnehmen — entscheidend für biologische Funktion:

- **α-glycosidische Bindung** (Stärke, Glykogen): leicht spaltbar durch Amylase → Energielieferant
- **β-glycosidische Bindung** (Cellulose): Menschen und die meisten Tiere besitzen keine Cellulase → unverdaulich → Ballaststoff

Polysaccharide werden durch **glycosidische Bindungen** (kovalent, zwischen Hydroxyl-Gruppen) verknüpft. Diese Bindungen entstehen unter Wasserabspaltung (Kondensation) und werden durch Hydrolyse wieder gespalten. Verzweigungen (Glykogen: alle 8–12 Glu-Einheiten, α-1,6) erhöhen Löslichkeit und Zugänglichkeit für Enzyme — daher kann Glykogen schneller mobilisiert werden als unverzweigte Amylose.

| Polysaccharid | Bindung | Verzweigung | Funktion | Enzym zur Spaltung |
|---|---|---|---|---|
| Amylose | α-1,4 | Keine | Pflanzlicher Speicher | α-Amylase |
| Amylopektin | α-1,4 + α-1,6 | Alle 24–30 Einheiten | Pflanzlicher Speicher | α-Amylase + Debranching |
| Glykogen | α-1,4 + α-1,6 | Alle 8–12 Einheiten | Tierischer Speicher | Glykogenphosphorylase |
| Cellulose | β-1,4 | Keine | Strukturpolysaccharid | Cellulase (nicht beim Menschen) |

Wasserstoffbrücken zwischen OH-Gruppen benachbarter Celluloseketten → Mikrofibrillen → hohe Reißfestigkeit. Stärke: lose Knäuel durch α-Bindungswinkel, leichter für Enzyme zugänglich.

## Lipide und hydrophober Effekt

Fettsäuren bestehen aus einer langen **Kohlenwasserstoffkette** (unpolar, nur London-Kräfte) und einer **Carboxylgruppe** (polar, ionisierbar). In wässriger Lösung verhalten sich Fettsäuren **amphiphil**: Der polare Kopf ist hydrophil (wechselwirkt mit Wasser), der unpolare Schwanz ist hydrophob.

**Hydrophober Effekt:** Unpolare Moleküle aggregieren in Wasser nicht wegen gegenseitiger Anziehung, sondern weil ihre Anwesenheit das Wassernetzwerk stört (Entropieverlust durch geordnetes Wasser um unpolare Gruppen → Hydratationsschale). Aggregation minimiert die Oberfläche → maximiert Entropie des Wassers → thermodynamisch begünstigt.

Konsequenzen:
- **Membranen:** Phospholipid-Doppelschicht (Lipid-Bilayer) → Barriere für polare Moleküle; Proteine, Ionen, ATP können nicht frei durch
- **Micellen:** Amphiphile in kugelförmiger Anordnung (Detergenzien, Gallensäuren zur Fettemulsifikation)
- **Proteinfalten:** Hydrophobe Aminosäuren im Proteininneren vergraben → treibende Kraft der Proteinfaltung

**Gesättigte vs. ungesättigte Fettsäuren:**
- Gesättigt (Palmitinsäure, 16:0): gerade Kette → dichte Packung, starke London-Kräfte → hoher Schmelzpunkt, fest bei RT (tierische Fette)
- Einfach ungesättigt (Ölsäure, 18:1 cis-Δ9): Knick durch cis-Doppelbindung → lockere Packung, schwächere London-Kräfte → niedrigerer Schmelzpunkt, flüssig bei RT (Olivenöl)
- Trans-Fettsäuren (Elaidinsäure): kein Knick → ähnliche Packung wie gesättigt → erhöhtes kardiovaskuläres Risiko

{{DIAGRAM:covalent-bond}}

## Aminosäuren, Peptide und Proteinstruktur

Aminosäuren haben eine **Aminogruppe** (–NH₂, Donor für H-Brücken) und eine **Carboxylgruppe** (–COOH, Akzeptor) sowie eine variable **Seitenkette** (R-Gruppe, bestimmt Eigenschaften).

**Peptidbindung** (–CO–NH–): kovalente Bindung zwischen Carboxyl des einen und Amino des nächsten AAs, unter Abspaltung von H₂O (Kondensation). Die Peptidbindung ist sp²-hybridisiert mit partiellem Doppelbindungscharakter (Resonanz des N-Elektronenpaars ins C=O-π-System → Bindungsordnung ~1,4). Daher ist sie planar und kann nicht frei rotieren — die Rotationsfreiheit beschränkt sich auf die φ- und ψ-Winkel um die Cα-Atome (Ramachandran-Diagramm).

> **Merke:** Die Peptidbindung ist die wichtigste kovalente Bindung in Proteinen. Ihre Planarität durch sp²-Hybridisierung bestimmt die möglichen Sekundärstrukturen (α-Helix, β-Faltblatt).

**Hierarchie der Proteinstruktur:**
- **Primär:** Aminosäuresequenz (kovalente Peptidbindungen)
- **Sekundär:** lokale Faltung (α-Helix, β-Faltblatt) durch H-Brücken der Peptidbindungen
- **Tertiär:** Gesamtfaltung (H-Brücken, hydrophober Effekt, van-der-Waals, Disulfidbrücken, Salzbrücken)
- **Quartär:** Assoziation mehrerer Ketten (Hämoglobin: 4 Untereinheiten) durch nichtkovalente Wechselwirkungen

**Disulfidbrücken (–S–S–):** Kovalente Bindung zwischen zwei Cystein-Seitenketten → stabilisiert extrazelluläre Proteine (Antikörper, Insulin) gegen Denaturierung.

**Salzbrücken:** Ionische Wechselwirkung zwischen gegengleich geladenen Seitenketten (Lys⁺/Arg⁺ mit Asp⁻/Glu⁻) → stabilisieren Tertiärstruktur.

**Denaturierung:** Störung der nichtkovalenten Wechselwirkungen (Hitze, pH-Änderung, Detergenzien) → Entfaltung → Funktionsverlust. Die Primärstruktur (kovalente Peptidbindungen) bleibt intakt. Denaturierungsmittel und ihre Wirkmechanismen:
- **Hitze (>60 °C):** Erhöhte kinetische Energie überwindet H-Brücken und hydrophobe Wechselwirkungen
- **Harnstoff (6–8 M):** Unterbricht H-Brücken, konkurriert mit intramolekularen H-Brücken
- **SDS (Natriumdodecylsulfat):** Detergenz, stört hydrophoben Effekt und entfaltet das Protein
- **Extreme pH-Werte:** Protonierung/Deprotonierung von Seitenketten → Salzbrücken und H-Brücken gestört
- **β-Mercaptoethanol/DTT:** Reduziert Disulfidbrücken (kovalent!) → zusätzliche Destabilisierung

Klinisch: Autoklav-Sterilisation (121 °C, 15 min) denaturiert alle mikrobiellen Proteine irreversibel. Prionen (fehlgefaltete Proteine) sind jedoch extrem hitzeresistent.

## Nukleinsäuren (DNA und RNA)

**Kovalentes Rückgrat:** Phosphodiesterbindungen verbinden Zucker (Desoxyribose in DNA, Ribose in RNA) über Phosphatgruppen (negativ geladen) → hydrophiles, negativ geladenes Rückgrat.

**Basenstapelung (π-Stacking):** London-Dispersionskräfte zwischen den aromatischen Basenringen in der Helix-Innenseite stabilisieren die DNA zusätzlich zu H-Brücken. Energiebeitrag ~10–40 kJ/mol pro Basenpaar.

**Topologie:** DNA existiert in zellulär superspiralisierter Form (Supercoiling) — Topoisomerasen regulieren die Topologie. Wichtige Angriffspunkte für Antibiotika (Gyraseinhibitoren: Fluorchinolone) und Krebstherapeutika (Topoisomerase-II-Inhibitoren: Doxorubicin).

**RNA-Struktur:** RNA ist einsträngig, kann aber intramolekular H-Brücken bilden → Sekundärstrukturen (Haarnadelschleifen, Stamm-Schleifen) → tRNA, rRNA, Ribozyme, microRNA.

{{DIAGRAM:enzyme-substrate}}

## Enzyme: Bindung und Katalyse

Enzyme sind Proteine (Ausnahme: Ribozyme = RNA) mit einem **aktiven Zentrum**, das durch nichtkovalente Wechselwirkungen das Substrat spezifisch bindet:
- H-Brücken: orientieren das Substrat
- Hydrophober Effekt: hydrophobe Substratteile im hydrophoben Pocket
- van-der-Waals: optimale Raumfüllung (induced fit)
- Ionische Wechselwirkungen: Ladungskomplementarität

**Induced Fit:** Das Enzym verändert seine Konformation beim Substratbinden — optimale Bindung erst nach Konformationsänderung. Die Komplementarität zwischen Enzym und Substrat wird nicht durch eine einzelne starke Bindung erreicht, sondern durch die Summe vieler schwacher nichtkovalenter Wechselwirkungen (typisch: 10–20 H-Brücken, zahlreiche van-der-Waals-Kontakte, 1–3 Salzbrücken, hydrophobe Taschen).

**Inhibitionstypen und ihre Bindungsmechanismen:**
- **Kompetitiv:** Inhibitor bindet im aktiven Zentrum (gleiche Stelle wie Substrat); durch Substratüberschuss verdrängbar; Km erhöht, Vmax unverändert. Beispiel: Methotrexat hemmt Dihydrofolatreduktase (kompetitiv zu Folat → Krebstherapie).
- **Nicht-kompetitiv:** Inhibitor bindet an anderer Stelle (allosterisch); nicht durch Substratüberschuss verdrängbar; Km unverändert, Vmax erniedrigt. Beispiel: Schwermetalle (Pb²⁺, Hg²⁺) binden an Cysteine und verändern Enzymkonformation.
- **Irreversibel:** Kovalente Bindung an das Enzym; dauerhaft inaktiviert. Beispiel: Aspirin (Acetylierung von COX-Ser530), Organophosphate (Sarin → irreversible Acetylcholinesterase-Hemmung → Nervengift).

> **Merke:** Enzymhemmung nutzt die gleichen Bindungsprinzipien: Kompetitive Inhibitoren ahmen das Substrat nach (ähnliche H-Brücken, van-der-Waals); irreversible Inhibitoren bilden kovalente Bindungen (z. B. Aspirin acetyliert Serin). Die Art der Bindung bestimmt die Dauer der Wirkung.

## Pharmakologische Bindungen

Arzneimittel wirken über **molekulare Erkennung** an Rezeptoren, Enzymen oder Nukleinsäuren. Bindungsarten:

- **Reversible Bindung** (meist nichtkovalent: H-Brücken, ionisch, van-der-Waals): reversible Hemmstoffe, günstig für steuerbare Pharmakotherapie
- **Irreversible Bindung** (kovalent): z. B. Aspirin (kovalente Acetylierung der COX), Penicillin (kovalente Acylierung der Transpeptidase), Protonenpumpenhemmer (Omeprazol, kovalente Bindung an H⁺/K⁺-ATPase)

Lipinski's Rule of Five für orale Bioverfügbarkeit: MW ≤ 500, logP ≤ 5, H-Brücken-Donoren ≤ 5, H-Brücken-Akzeptoren ≤ 10. Pharmaka müssen ausreichend polar für Löslichkeit und Transport, aber nicht zu polar, um Membranen zu durchqueren.

> **Merke:** Reversible Pharmaka: nichtkovalent → steuerbar (Dosierung möglich). Irreversible Pharmaka: kovalent → wirken bis zur Neusynthese des Targets (z. B. Aspirin hemmt Thrombozytenfunktion für ~10 Tage, bis neue Thrombozyten gebildet werden).

## MedAT-Fokus

**Typische Prüfungsfragen:**
- Warum kann der Mensch Cellulose nicht verdauen? → β-1,4-glycosidische Bindung; kein menschliches Enzym (Cellulase) vorhanden
- Was treibt die Proteinfaltung an? → Hydrophober Effekt (entropisch — Freisetzung geordneten Hydratationswassers)
- Was passiert bei Denaturierung mit der Primärstruktur? → Nichts — Peptidbindungen (kovalent) bleiben intakt

**Typische Fallen:**
- Hydrophober Effekt ist entropisch, nicht enthalpisch — die Triebkraft ist der Entropiegewinn des Wassers
- Denaturierung ist nicht Hydrolyse: Peptidbindungen werden erst durch Proteasen gespalten
- α-glycosidisch (Stärke, verdaulich) vs. β-glycosidisch (Cellulose, unverdaulich) — kleiner Winkelunterschied, große Konsequenz

## Zusammenfassung (ultrakompakt)

- **Kovalente Bindungen** (150–1000 kJ/mol): Gerüst der Biomoleküle — Peptidbindung, Phosphodiesterbindung (DNA/RNA), glycosidische Bindung; enzymatisch spaltbar
- **Disulfidbrücke** (~250 kJ/mol): –SH + –SH → –S–S–; stabilisiert Proteinstruktur (Insulin, Antikörper); reduzierbar durch DTT/NADPH
- **Salzbrücken** (20–200 kJ/mol): ionische Wechselwirkung z.B. Lys⁺···Asp⁻; pH-sensitiv
- **Wasserstoffbrücken** (10–40 kJ/mol): DNA-Basenpaarung (A–T: 2; G–C: 3), α-Helix, β-Faltblatt; temperaturabhängig
- **Hydrophober Effekt** (entropisch): unpolare Gruppen aggregieren → Wasser wird freigesetzt → Entropiegewinn → Proteinfaltung, Membranbildung
- **Van-der-Waals** (0,1–10 kJ/mol): π-Stacking in DNA, Induced Fit; abstandsabhängig
- **α vs. β glycosidisch**: α-1,4 (Stärke/Glykogen) = verdaulich; β-1,4 (Cellulose) = unverdaulich
- **Proteinstrukturen**: Primär (kovalent) → Sekundär (H-Brücken) → Tertiär (alle Kräfte) → Quartär (nichtkovalente Assoziation)
- **Denaturierung**: nichtkovalente Wechselwirkungen gestört → Funktionsverlust; Primärstruktur (Peptidbindungen) bleibt intakt
- **Lipinski Ro5**: MW ≤ 500, logP ≤ 5, HBD ≤ 5, HBA ≤ 10 → orale Bioverfügbarkeit; Balance polar/unpolar
- **Nukleinsäure-Rückgrat**: Phosphodiesterbindung (kovalent, negativ geladen); Basenstapelung: π-Stacking (London) + H-Brücken (Basenpaarung)`,

      lernziele: [
        "Die Rolle kovalenter und nichtkovalenter Bindungen in biologischen Makromolekülen (Proteine, Nukleinsäuren, Lipide, Kohlenhydrate) erklären.",
        "Den hydrophoben Effekt als entropische Triebkraft der Membranbildung und Proteinfaltung verstehen.",
        "Die vier Ebenen der Proteinstruktur und die jeweils verantwortlichen Bindungstypen beschreiben.",
        "Die Bedeutung der Bindungschemie für Pharmakadesign (reversible vs. irreversible Bindung, Lipinski) erläutern.",
        "Den Unterschied zwischen α- und β-glycosidischen Bindungen und ihre biologischen Konsequenzen (Stärke vs. Cellulose) kennen.",
      ],

      sections: [
        {
          heading: "Glycosidische Bindungen in Kohlenhydraten",
          text: "Monosaccharide werden durch glycosidische Bindungen zu Di- und Polysacchariden verknüpft. Die Stereochemie der Bindung (α oder β) am anomeren Kohlenstoff (C1) bestimmt die Gesamtstruktur und biologische Funktion des Polysaccharids. α-1,4-Bindungen in Stärke ergeben eine spiralförmige Helix, leicht verdaulich. β-1,4-Bindungen in Cellulose ergeben gestreckte Ketten mit starken intra- und intermolekularen H-Brücken, unverdaulich für Menschen.",
          merksatz:
            "α-glycosidisch = verdaulich (Stärke/Glykogen); β-glycosidisch = unverdaulich (Cellulose).",
        },
        {
          heading: "Hydrophober Effekt und Membranstruktur",
          text: "Der hydrophobe Effekt ist keine direkte Anziehung zwischen unpolaren Molekülen, sondern eine entropische Triebkraft: Wenn unpolare Moleküle aggregieren, wird Wasser freigesetzt, das vorher in geordneten Hydratationsschalen gefangen war — der Entropiegewinn des Wassers treibt die Aggregation an. Phospholipide mit polarem Kopf und unpolarem Schwanz bilden daher spontan Doppelschichten (Bilayer) in wässriger Umgebung: das thermodynamisch günstigste Arrangement.",
          merksatz:
            "Hydrophober Effekt: Aggregation unpolarer Gruppen → Entropiegewinn des Wassers → treibt Membranbildung und Proteinfaltung.",
        },
        {
          heading: "Hierarchie der Proteinstruktur",
          text: "Proteine zeigen vier Strukturebenen: Primär (Aminosäuresequenz, kovalent), Sekundär (α-Helix und β-Faltblatt durch H-Brücken), Tertiär (Gesamtfaltung durch H-Brücken, hydrophoben Effekt, van-der-Waals, Disulfid, Salzbrücken) und Quartär (Assoziation mehrerer Polypeptidketten). Die Primärsequenz kodiert alle höheren Strukturebenen (Anfinsen-Dogma). Denaturierungsmittel stören selektiv nichtkovalente Wechselwirkungen und belassen die Primärstruktur intakt.",
          merksatz:
            "Primär: kovalent; Sekundär: H-Brücken; Tertiär: alles zusammen; Quartär: mehrere Ketten.",
        },
        {
          heading: "Pharmakologie der Bindungen",
          text: "Arzneimittel binden an Zielstrukturen über nichtkovalente (reversible) oder kovalente (irreversible) Bindungen. Reversible Bindungen ermöglichen dosierbare, steuerbare Pharmakotherapie. Irreversible Bindungen sind für bestimmte Anwendungen gewünscht: Aspirin acetyliert COX irreversibel (Thrombozyten bilden kein neues COX → anhaltende Thrombozytenaggregationshemmung über die Lebensdauer der Thrombozyten ~10 Tage). Lipinski's Rule of Five fasst die Bindungseigenschaften für orale Bioverfügbarkeit zusammen.",
          merksatz:
            "Reversible Hemmung: nichtkovalent, steuerbar; irreversibel: kovalent, dauerhaft (z. B. Aspirin-COX).",
        },
      ],

      merksätze: [
        "α-glycosidisch (Stärke) = Amylase spaltet = Energiespeicher; β-glycosidisch (Cellulose) = Ballaststoff.",
        "Hydrophober Effekt: entropisch getrieben; unpolare Gruppen aggregieren → Entropiegewinn des Wassers.",
        "Phospholipid-Bilayer: Selbstorganisation durch hydrophoben Effekt → Grundlage aller Biomembranen.",
        "Gesättigte Fettsäuren: gerade Kette → dichte Packung → feste Fette; ungesättigt (cis): Knick → flüssig.",
        "Trans-Fettsäuren: kein Knick → erhöhtes Atheroskleroserisiko.",
        "Peptidbindung: sp², planar, partieller Doppelbindungscharakter → bestimmt Proteinstruktur.",
        "Proteindenaturierung: nichtkovalente Wechselwirkungen gestört → Funktionsverlust (Primärstruktur bleibt).",
        "Disulfidbrücken (Cys–Cys): kovalent, stabilisieren extrazelluläre Proteine (Antikörper, Insulin).",
        "Aspirin: irreversible kovalente Acetylierung von COX-1/COX-2 → dauerhafter Effekt.",
        "Lipinski Rule of Five: MW ≤ 500, logP ≤ 5, HBD ≤ 5, HBA ≤ 10 → orale Bioverfügbarkeit.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie die Kräfte, die zur Proteinfaltung und Stabilisierung der Tertiärstruktur von Proteinen beitragen. Welche Rolle spielen kovalente und nichtkovalente Wechselwirkungen, und was passiert bei der Denaturierung?",
        answer: `Die Tertiärstruktur eines Proteins — seine einzigartige dreidimensionale Faltung — wird durch ein komplexes Zusammenspiel verschiedener Bindungstypen stabilisiert:

Kovalente Bindungen: Disulfidbrücken (–S–S–) zwischen Cystein-Resten sind die einzige kovalente (nicht-Rückgrat) Stabilisierungskraft der Tertiärstruktur. Sie sind besonders wichtig in Proteinen, die in oxidativen Umgebungen vorkommen (extrazelluläre Proteine, Antikörper, Insulin).

Nichtkovalente Wechselwirkungen (dominierend):
1. Hydrophober Effekt: die stärkste Triebkraft der Faltung. Hydrophobe Aminosäuren (Leu, Ile, Val, Phe) werden ins Proteininnere gedrängt, weg vom Wasser. Der Entropiegewinn des Wassers ist die primäre Triebkraft.
2. Wasserstoffbrücken: zwischen polaren Seitenketten und dem Peptidrückgrat; stützen Sekundärstrukturen und Schleifen.
3. Ionische Wechselwirkungen (Salzbrücken): zwischen geladenen Seitenketten (Lys⁺, Arg⁺, His⁺ mit Asp⁻, Glu⁻); stärker im Proteininneren, wo kein Wasser konkurriert.
4. Van-der-Waals-Kräfte: sorgen für dichte Packung im Proteininneren (optimale Raumfüllung).

Denaturierung: Wird ein Protein erhitzt, mit Säure/Base, Harnstoff oder Detergenzien behandelt, werden die nichtkovalenten Wechselwirkungen gestört. Das Protein entfaltet sich — es verliert seine Sekundär- und Tertiärstruktur sowie seine Funktion. Die Primärstruktur (Sequenz, kovalente Peptidbindungen) bleibt intakt. Nach Entfernung des Denaturierungsmittels kann das Protein theoretisch renaturieren (Anfinsen-Experiment mit RNase A). In der Klinik nutzt man Denaturierung bei Sterilisation (Hitze, Autoklavieren) und in der Diagnostik (SDS-PAGE).`,
      },

      klinischerBezug:
        "Die Irreversibilität der COX-Hemmung durch Aspirin (kovalente Acetylierung) ist pharmakologisch genutzt: Da Thrombozyten kernlos sind und kein neues COX-1 synthetisieren können, hält die Thrombozytenaggregationshemmung für die gesamte Lebensdauer der Thrombozyten (ca. 10 Tage) an — Grundlage der niedrigdosierten Aspirintherapie bei kardiovaskulärem Risiko. Proteindenaturierung durch Hitze ist die Grundlage der Sterilisation im Autoklaven (121 °C, 15 min), wobei Mikroorganismen durch Entfaltung ihrer essentiellen Enzyme abgetötet werden.",

      selfTest: [
        {
          question:
            "Warum können Menschen Cellulose nicht verdauen, obwohl Stärke und Cellulose beide aus Glucose aufgebaut sind?",
          options: [
            "Cellulose hat eine viel höhere Molmasse als Stärke.",
            "Cellulose enthält β-1,4-glycosidische Bindungen, für die menschliche Verdauungsenzyme (Amylasen) keine Spezifität besitzen.",
            "Cellulose ist in Wasser unlöslich und kann daher nicht aufgenommen werden.",
            "Stärke enthält mehr Glucose-Einheiten pro Kette.",
            "Cellulose wird durch den Magen denaturiert und ist daher unverdaulich.",
          ],
          correctIndex: 1,
          explanation:
            "Stärke (Amylose und Amylopektin) enthält α-1,4-glycosidische Bindungen, die durch menschliche α-Amylase gespalten werden können. Cellulose enthält β-1,4-glycosidische Bindungen. Durch den Unterschied in der Stereochemie am anomeren C1 (α vs. β) unterscheidet sich die räumliche Anordnung der Glucoseketten grundlegend. Menschliche Verdauungsenzyme haben keine Komplementarität für β-1,4-Bindungen (keine Cellulase) → Cellulose ist unverdaulich → wirkt als Ballaststoff. Wiederkäuer können Cellulose durch Mikroorganismen im Pansen abbauen.",
          hints: [
            "α- vs. β-glycosidische Bindung: gleiche Atome, andere Stereochemie.",
            "Enzymspezifität: Amylase passt nur zu α-Bindungen.",
          ],
          difficulty: 1,
          tags: ["cellulose", "glycosidische-bindung", "amylase"],
        },
        {
          question: "Was ist die primäre thermodynamische Triebkraft des hydrophoben Effekts?",
          options: [
            "Direkte Anziehungskräfte zwischen unpolaren Molekülen.",
            "Enthalpiegewinn durch van-der-Waals-Wechselwirkungen zwischen Kohlenwasserstoffketten.",
            "Entropiegewinn des Wassers, wenn geordnete Hydratationsschalen um unpolare Moleküle aufgelöst werden.",
            "Elektrostatische Abstoßung polarer Wassermoleküle von unpolaren Gruppen.",
            "Minimierung der freien Energie durch Ausbildung kovalenter Bindungen.",
          ],
          correctIndex: 2,
          explanation:
            "Der hydrophobe Effekt ist primär entropisch getrieben, nicht enthalpisch. Wenn unpolare Moleküle in Wasser gelöst sind, ordnen sich die umgebenden Wassermoleküle in hochgeordneten Hydratationsschalen (Käfigstrukturen) um sie herum — das kostet Entropie (ΔS < 0). Wenn unpolare Moleküle aggregieren, werden diese geordneten Wasserschalen aufgelöst und die Wassermoleküle gewinnen Freiheitsgrade (ΔS > 0). Dieser Entropiegewinn des Wassers ist die treibende Kraft, die Lipide zur Aggregation in Membranen und hydrophobe Aminosäuren ins Proteininnere treibt.",
          hints: [
            "Hydrophober Effekt: über Entropie des Wassers, nicht Anziehung der unpolaren Gruppen.",
            "Was passiert mit geordneten Hydratationsschalen bei Aggregation?",
          ],
          difficulty: 2,
          tags: ["hydrophober-effekt", "entropie", "membranbildung"],
        },
        {
          question: "Welcher Bindungstyp stabilisiert die α-Helix-Sekundärstruktur in Proteinen?",
          options: [
            "Disulfidbrücken zwischen Cystein-Seitenketten.",
            "Kovalente Bindungen im Peptidrückgrat.",
            "Wasserstoffbrücken zwischen der C=O-Gruppe der Aminosäure i und der N–H-Gruppe der Aminosäure i+4.",
            "Ionische Wechselwirkungen zwischen Seitenketten.",
            "Van-der-Waals-Kräfte zwischen hydrophoben Seitenketten.",
          ],
          correctIndex: 2,
          explanation:
            "Die α-Helix wird durch intramolekulare Wasserstoffbrücken stabilisiert: Die Carbonylgruppe (C=O) der Peptidbindung der Aminosäure i bildet eine H-Brücke mit der N–H-Gruppe der Peptidbindung der Aminosäure i+4 (d. h. 4 Aminosäuren weiter in der Sequenz). Pro Windung der Helix (~3,6 Aminosäuren) entstehen regelmäßig H-Brücken, die die Helixachse stabilisieren. Alle Carbonyl-Gruppen zeigen in eine Richtung, alle NH-Gruppen in die andere → polares Helixmoment. α-Helices sind häufig in Transmembranproteinen (z. B. 7 Transmembranhelices bei GPCR).",
          hints: [
            "Sekundärstruktur: lokale, regelmäßige Struktur durch H-Brücken.",
            "α-Helix: H-Brücke von C=O(i) zu N-H(i+4).",
          ],
          difficulty: 2,
          tags: ["alpha-helix", "sekundärstruktur", "wasserstoffbrücken"],
        },
        {
          question:
            "Aspirin hemmt Cyclooxygenase (COX) irreversibel. Was ist die chemische Grundlage dieser Irreversibilität?",
          options: [
            "Aspirin bildet ionische Bindungen mit dem aktiven Zentrum.",
            "Aspirin verdrängt das Substrat kompetitiv ohne Ablösung.",
            "Aspirin überträgt kovalent eine Acetylgruppe auf Serin-530 der COX (Acetylierung), was nicht mehr rückgängig gemacht werden kann.",
            "Aspirin denaturiert die COX durch hydrophoben Effekt.",
            "Aspirin bildet Disulfidbrücken mit Cystein-Resten in der COX.",
          ],
          correctIndex: 2,
          explanation:
            "Aspirin (Acetylsalicylsäure) überträgt seine Acetylgruppe auf den Hydroxyl-Sauerstoff von Serin-530 im Kanal der Cyclooxygenase (Acetylierung, nukleophile Acylsubstitution). Die resultierende kovalente O-Acetyl-Serinmodifikation blockiert dauerhaft den Zugang des Arachidonsäure-Substrats zum katalytischen Zentrum. Da die kovalente Bindung unter physiologischen Bedingungen nicht hydrolysiert wird, bleibt das Enzym dauerhaft inaktiv. In kernlosen Thrombozyten wird kein neues COX-1 synthetisiert — der Effekt hält für die gesamte Thrombozytenliebensdauer (ca. 10 Tage) an.",
          hints: [
            "Irreversibel = kovalente Bindung.",
            "Welches Reagenz kann Hydroxylgruppen acetylieren?",
          ],
          difficulty: 2,
          tags: ["aspirin", "cox", "irreversible-hemmung"],
        },
        {
          question:
            "Warum haben cis-ungesättigte Fettsäuren (z. B. Ölsäure) niedrigere Schmelzpunkte als gesättigte Fettsäuren gleicher Kettenlänge?",
          options: [
            "Ungesättigte Fettsäuren haben weniger C-Atome.",
            "Die cis-Doppelbindung erzeugt einen Knick in der Kette → lockere Packung → schwächere London-Kräfte → niedrigerer Schmelzpunkt.",
            "Cis-Fettsäuren bilden mehr Wasserstoffbrücken.",
            "Ungesättigte Fettsäuren sind polarer als gesättigte.",
            "Die höhere Molmasse gesättigter Fettsäuren erhöht deren Schmelzpunkt.",
          ],
          correctIndex: 1,
          explanation:
            "Die cis-Konfiguration einer Doppelbindung erzeugt einen starren Knick (~30°) in der Fettsäurekette, weil die π-Bindung freie Rotation verhindert und beide Wasserstoffatome auf derselben Seite liegen. Dieser Knick verhindert die dichte parallele Packung der Kohlenwasserstoffketten. Schwächere intermolekulare London-Kräfte → geringere Energie zum Schmelzen nötig → niedrigerer Schmelzpunkt. Ölsäure (18:1 cis-Δ9) schmilzt bei 13 °C, Stearinsäure (18:0) bei 70 °C. Trans-Fettsäuren haben keinen Knick und verhalten sich ähnlich wie gesättigte.",
          hints: [
            "cis-Doppelbindung: beide H auf derselben Seite → Knick.",
            "Knick verhindert dichte Packung → schwächere London-Kräfte.",
          ],
          difficulty: 2,
          tags: ["fettsäuren", "cis-ungesättigt", "schmelzpunkt"],
        },
        {
          question: "Was beschreibt Lipinski's Rule of Five (Ro5) für Arzneimittel?",
          options: [
            "Pharmaka müssen genau 5 Aminosäuren als Bindemotive haben.",
            "Pharmaka mit MW ≤ 500 Da, logP ≤ 5, ≤ 5 H-Brücken-Donoren und ≤ 10 H-Brücken-Akzeptoren haben wahrscheinlich gute orale Bioverfügbarkeit.",
            "Pharmaka müssen mindestens 5 aromatische Ringe aufweisen.",
            "Pharmaka dürfen maximal 5 Chiralitätszentren besitzen.",
            "Pharmaka müssen mit mindestens 5 verschiedenen Bindungstypen an ihren Rezeptor binden.",
          ],
          correctIndex: 1,
          explanation:
            "Lipinski's Rule of Five (1997) ist eine Faustregel für die orale Bioverfügbarkeit von Arzneimitteln. Ein Pharmakon mit MW > 500 Da, logP > 5 (zu lipophil), > 5 H-Brücken-Donoren (NH, OH) oder > 10 H-Brücken-Akzeptoren (N, O) wird wahrscheinlich schlecht resorbiert. Zu polare Moleküle (viele HBD/HBA) können Zellmembranen nicht passieren; zu unpolare (hoher logP) lösen sich nicht ausreichend in wässriger Körperflüssigkeit. Ausnahmen: Substrate für Transporter (Antibiotika, Vitamine). Biologika (Antikörper) fallen nicht unter die Ro5.",
          hints: [
            "Ro5 = Gleichgewicht zwischen Wasser- und Fettlöslichkeit.",
            "Was limitiert die orale Aufnahme — zu polar oder zu unpolar?",
          ],
          difficulty: 2,
          tags: ["lipinski", "bioverfügbarkeit", "pharmaka"],
        },
        {
          question: "Welche Bindungsart verbindet die Nucleotide in einem DNA-Strang miteinander?",
          options: [
            "Wasserstoffbrücken",
            "Ionische Bindungen über Mg²⁺",
            "Van-der-Waals-Kräfte",
            "Phosphodiesterbindungen (kovalent)",
            "Disulfidbrücken",
          ],
          correctIndex: 3,
          explanation:
            "Das Rückgrat eines DNA-Stranges wird durch Phosphodiesterbindungen gebildet: Eine Phosphatgruppe ist kovalent über eine Esterbindung (3'- und 5'-Position) mit je zwei Desoxyribose-Zuckermolekülen verbunden. Diese kovalenten Bindungen verleihen dem Strang seine mechanische Stabilität. Die Wasserstoffbrücken zwischen komplementären Basen halten hingegen die zwei antiparallelen Stränge der Doppelhelix zusammen — sie können durch Helikasen enzymatisch oder durch Hitze aufgetrennt werden, ohne die Primärstruktur der Einzelstränge zu zerstören.",
          hints: [
            "Rückgrat = Zucker-Phosphat-Kette; Basenpaare = zwischen den Strängen.",
            "Esterbindung zwischen Phosphat und Zucker = Phosphodiester.",
          ],
          difficulty: 1,
          tags: ["dna", "phosphodiesterbindung", "nukleotide"],
        },
        {
          question:
            "Welche Aminosäure-Seitenkette ist in der Lage, kovalente Disulfidbrücken zu bilden, die die Tertiärstruktur von Proteinen stabilisieren?",
          options: [
            "Serin (Ser)",
            "Threonin (Thr)",
            "Cystein (Cys)",
            "Methionin (Met)",
            "Histidin (His)",
          ],
          correctIndex: 2,
          explanation:
            "Cystein (Cys) besitzt eine Thiolgruppe (–SH) in seiner Seitenkette. Zwei Cysteine können unter oxidativen Bedingungen durch Oxidation ihrer Thiolgruppen eine kovalente Disulfidbrücke (–S–S–) bilden: 2 R–SH → R–S–S–R + 2H⁺ + 2e⁻. Disulfidbrücken sind die einzigen kovalenten (nicht-Peptidrückgrat) Querverbindungen in Proteinen und sind besonders häufig in sekretierten und extrazellulären Proteinen (Antikörper, Insulin, RNase A), da das extrazelluläre Milieu oxidativer ist als das Zytoplasma. Sie verleihen dem Protein erhöhte thermische und chemische Stabilität.",
          hints: [
            "Welche Aminosäure hat eine –SH-Gruppe?",
            "Oxidation zweier Thiole ergibt eine Disulfidbrücke.",
          ],
          difficulty: 1,
          tags: ["cystein", "disulfidbrücke", "tertiärstruktur"],
        },
      ],
    },
  ],
};
