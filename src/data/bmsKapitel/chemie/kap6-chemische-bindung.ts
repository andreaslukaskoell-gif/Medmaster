// @ts-nocheck
import type { Kapitel } from "../types";

export const chemKap6: Kapitel = {
  id: "chem-kap6",
  title: "Chemische Bindung",
  subject: "chemie",
  icon: "🔗",
  estimatedTime: "90 min",
  unterkapitel: [
    {
      id: "ch-6-01",
      title: "Ionenbindung — Entstehung und Eigenschaften",
      content: `## Entstehung der Ionenbindung

Die **Ionenbindung** (heteropolare Bindung) entsteht durch vollständige **Elektronenübertragung** von einem Metall auf ein Nichtmetall. Treibende Kraft ist das Bestreben beider Atome, die stabile Edelgaskonfiguration zu erreichen (Oktettregel). Metalle haben niedrige Ionisierungsenergien und geben Elektronen leicht ab; Nichtmetalle besitzen hohe Elektronenaffinitäten und nehmen Elektronen bereitwillig auf.

**Beispiel NaCl:**
Na (2-8-1) + Cl (2-8-7) → Na⁺ (2-8) + Cl⁻ (2-8-8)

Natrium gibt sein einzelnes Valenzelektron ab und wird zum Na⁺-Kation; Chlor nimmt dieses Elektron auf und wird zum Cl⁻-Anion. Beide besitzen nun die Elektronenkonfiguration von Edelgasen (Neon bzw. Argon).

## Born-Haber-Kreisprozess und Gitterenergie

Die **Gitterenergie** U ist die Energie, die freigesetzt wird, wenn gasförmige Ionen zu einem Ionenkristall zusammentreten. Sie ist der entscheidende Energiebeitrag bei der Ionenbindung. Im Born-Haber-Kreisprozess wird die Bildungsenthalpie einer Ionenverbindung schrittweise aus Teilenthalpien berechnet:

1. Sublimationsenergie des Metalls (endotherm)
2. Ionisierungsenergie des Metalls (endotherm)
3. Bindungsenergie des Nichtmetalls (endotherm, ½ Cl₂ → Cl)
4. Elektronenaffinität des Nichtmetalls (exotherm)
5. **Gitterenergie** (stark exotherm)

Für NaCl: Gitterenergie ≈ −786 kJ/mol. Je kleiner der Ionenradius und je höher die Ladung der Ionen, desto größer die Gitterenergie (Coulombsches Gesetz: E ∝ q₁·q₂/r).

Vergleich: MgO hat eine Gitterenergie von ≈ −3795 kJ/mol (Mg²⁺ und O²⁻ — doppelte Ladung, kleinere Ionen → viel stärker als NaCl).

## Struktur des Ionenkristalls

Ionenverbindungen bilden **Ionengitter** mit regelmäßiger, periodischer Anordnung. Im **NaCl-Gitter** (kubisch-flächenzentriert) ist jedes Na⁺ von 6 Cl⁻ umgeben und umgekehrt — Koordinationszahl 6. Im CsCl-Gitter (kubisch-raumzentriert) beträgt die Koordinationszahl 8 (größere Ionen passen besser).

Die Packungsgeometrie hängt vom **Radienverhältnis** r⁺/r⁻ ab:
- r⁺/r⁻ < 0,41 → tetraedrische Koordination (Zinkblende-Typ)
- 0,41–0,73 → oktaedrische Koordination (NaCl-Typ)
- > 0,73 → kubische Koordination (CsCl-Typ)

## Eigenschaften ionischer Verbindungen

**Hohe Schmelz- und Siedepunkte:** Die Gitterenergie muss vollständig überwunden werden. NaCl schmilzt bei 801 °C, MgO erst bei 2852 °C (höhere Gitterenergie).

**Sprödigkeit:** Werden die Ionen durch mechanische Einwirkung verschoben, kommen gleichnamig geladene Ionen nebeneinander zu liegen → elektrostatische Abstoßung → Bruch. Ionenkristalle lassen sich nicht plastisch verformen (im Gegensatz zu Metallen).

**Löslichkeit in Wasser:** Polare Wassermoleküle umhüllen die Ionen (Hydratation/Solvatation). Die **Hydratationsenthalpie** muss die Gitterenergie überwiegen, damit sich die Verbindung löst. NaCl: Gitterenergie 786 kJ/mol, Hydratationsenthalpie 783 kJ/mol → löslich. MgO: kaum löslich (sehr hohe Gitterenergie).

**Elektrische Leitfähigkeit:** Ionenkristalle leiten im Festzustand **nicht** (Ionen fixiert). Im geschmolzenen Zustand oder in wässriger Lösung bewegen sich Ionen frei → Elektrolyte leiten Strom. Wichtig für Biologie: Körperflüssigkeiten sind Elektrolytlösungen.

## Klinisch relevante Ionenverbindungen

- **NaCl (Natriumchlorid):** physiologische Kochsalzlösung (0,9 %), Osmolalitätsregulation
- **KCl (Kaliumchlorid):** Elektrolytsubstitution, Herzrhythmus
- **CaCO₃ (Calciumcarbonat):** Knochensubstanz (mit Hydroxylapatit), Antazidum
- **MgO:** Antazidum, Laxans
- **CaF₂ (Calciumfluorid):** Zahnschmelzstruktur; Fluorid stabilisiert den Schmelz
- **FeSO₄ (Eisensulfat):** Eisen(II)-Supplement bei Eisenmangelanämie`,

      lernziele: [
        "Die Entstehung der Ionenbindung durch Elektronenübertragung und die Rolle der Edelgaskonfiguration erklären können.",
        "Den Born-Haber-Kreisprozess und den Begriff der Gitterenergie verstehen und auf konkrete Beispiele anwenden.",
        "Den Zusammenhang zwischen Ionenladung/-radius und Gitterenergie (Coulombsches Gesetz) kennen.",
        "Die typischen Eigenschaften ionischer Verbindungen (Schmelzpunkt, Sprödigkeit, Leitfähigkeit, Löslichkeit) aus der Struktur herleiten.",
        "Klinisch relevante Ionenverbindungen und ihre Bedeutung im menschlichen Körper nennen können.",
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
          heading: "Eigenschaften und klinische Relevanz",
          text: "Die Eigenschaften ionischer Verbindungen folgen direkt aus ihrer Gitterstruktur. Hohe Schmelzpunkte und Sprödigkeit sind Folge der starken, ungerichteten Coulomb-Kräfte. Löslichkeit in Wasser und elektrische Leitfähigkeit im gelösten Zustand machen Ionenverbindungen zu den wichtigsten Elektrolyten im menschlichen Körper. Elektrolytimbalancen (Na⁺, K⁺, Ca²⁺, Mg²⁺) sind häufige und lebensbedrohliche klinische Probleme.",
          merksatz: "Ionenkristall: fest und spröde; in Lösung: leitfähig und biologisch aktiv.",
        },
      ],

      diagram: "ionic-bond",

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
        "Klinisch: Na⁺, K⁺, Ca²⁺, Cl⁻ sind essentielle Elektrolyte mit engen Normalbereichen.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        frage:
          "Erläutern Sie die Ionenbindung am Beispiel von Magnesiumoxid (MgO). Gehen Sie dabei auf die Entstehung, die Gitterenergie und die daraus resultierenden Eigenschaften ein und vergleichen Sie mit NaCl.",
        antwort: `Magnesiumoxid entsteht durch vollständige Elektronenübertragung von Magnesium auf Sauerstoff. Magnesium (Gruppe 2) gibt 2 Valenzelektronen ab und wird zum Mg²⁺-Kation (Elektronenkonfiguration von Neon). Sauerstoff (Gruppe 16) nimmt 2 Elektronen auf und wird zum O²⁻-Anion (ebenfalls Neon-Konfiguration).

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
      content: `## Grundprinzip der kovalenten Bindung

Die **kovalente Bindung** (homöopolare oder Elektronenpaar-Bindung) entsteht durch **gemeinsame Nutzung von Elektronenpaaren** zwischen Atomen ähnlicher oder gleicher Elektronegativität. Im Gegensatz zur Ionenbindung werden Elektronen nicht übertragen, sondern geteilt. Die bindenden Elektronen halten sich bevorzugt im Bereich zwischen den Atomkernen auf und senken dort die potenzielle Energie des Systems.

Lewis-Schreibweise: Einfachbindung (—), Doppelbindung (=), Dreifachbindung (≡). Das bindende Elektronenpaar wird durch einen Strich dargestellt, freie Elektronenpaare durch Punkte.

## Elektronegativität und Bindungspolarität

**Elektronegativität (EN)** ist das Maß für die Fähigkeit eines Atoms, Bindungselektronen anzuziehen (Pauling-Skala: F = 4,0; O = 3,5; N = 3,0; Cl = 3,0; C = 2,5; H = 2,1; Na = 0,9).

Bei polaren kovalenten Bindungen sind die Elektronen zum elektronegativeren Atom hin verschoben → **Partialladungen** (δ+ und δ−) → **Dipolmoment** μ = q · d (in Debye, D).

## Molekülpolarität

Ein Molekül ist **polar**, wenn es Bindungsdipole besitzt UND diese sich nicht gegenseitig aufheben. Geometrie entscheidend:

- **H₂O** (gewinkelt, 104,5°): beide O–H-Dipole zeigen in dieselbe Richtung → stark polar (μ = 1,85 D)
- **CO₂** (linear, 180°): beide C=O-Dipole heben sich auf → unpolar (μ = 0)
- **NH₃** (pyramidal): resultierendes Dipolmoment → polar (μ = 1,47 D)
- **CCl₄** (tetraedrisch): alle C–Cl-Dipole symmetrisch → unpolar (μ = 0)

Polar: „Gleiches löst Gleiches" — polare Moleküle lösen sich in polaren Lösungsmitteln (Wasser), unpolare in unpolaren (Hexan, Benzol).

## VSEPR-Modell (Valence Shell Electron Pair Repulsion)

Das VSEPR-Modell sagt die **Molekülgeometrie** voraus: Elektronenpaare (bindende und freie) stoßen sich ab und nehmen die Anordnung mit maximalem Abstand ein. Freie Elektronenpaare nehmen mehr Raum ein als bindende → verringern die Bindungswinkel stärker.

## Hybridisierung

Hybridisierung erklärt die Geometrie von Kohlenstoff- (und anderen) Verbindungen durch Mischung von Atomorbitalen zu energieäquivalenten **Hybridorbitalen**.

**sp³-Hybridisierung** (Methan, CH₄):
Ein s-Orbital + drei p-Orbitale → vier sp³-Hybridorbitale → tetraedrische Anordnung (109,5°). Alle Bindungen sind Sigma-Bindungen (σ). Beispiele: Alkane, gesättigte Kohlenwasserstoffe, Wasser (O ist sp³).

**sp²-Hybridisierung** (Ethen, C₂H₄):
Ein s + zwei p → drei sp²-Hybridorbitale (trigonal planar, 120°) + ein unhybridisiertes p-Orbital senkrecht zur Ebene → π-Bindung. Doppelbindung = 1 σ + 1 π. Beispiele: Alkene, Benzol (sp², delokalisiertes π-System), Carbonyl-Gruppe C=O.

**sp-Hybridisierung** (Ethin, C₂H₂):
Ein s + ein p → zwei sp-Hybridorbitale (linear, 180°) + zwei unhybridisierte p-Orbitale → zwei π-Bindungen. Dreifachbindung = 1 σ + 2 π. Beispiele: Alkine, CO₂, HCN.

## Sigma- und Pi-Bindungen

- **σ-Bindung:** Überlappung der Orbitale entlang der Bindungsachse; immer vorhanden; freie Rotation möglich.
- **π-Bindung:** laterale Überlappung der p-Orbitale seitlich der Bindungsachse; verhindert freie Rotation (Cis-Trans-Isomerie!); schwächer als σ.

Bindungsstärken: C–C (347 kJ/mol) < C=C (614 kJ/mol) < C≡C (839 kJ/mol). Die Dreifachbindung ist die stärkste, aber nicht dreimal so stark wie die Einfachbindung (wegen schwächerer π-Bindungen).

## Resonanz und mesomere Grenzstrukturen

Manche Moleküle können nicht durch eine einzige Lewis-Struktur beschrieben werden:

- **Benzol (C₆H₆):** 6 C-Atome im Ring, alle sp²-hybridisiert; π-Elektronen über den gesamten Ring delokalisiert → stabiles aromatisches System.
- **Carbonat (CO₃²⁻):** 3 gleichwertige C–O-Bindungen (zwischen Einfach- und Doppelbindung); Bindungsordnung 4/3.
- **Carboxylgruppe –COOH:** im Carboxylat-Anion –COO⁻ delokalisiert.

Delokalisierung stabilisiert Moleküle (Resonanzenergie). Aromatizität ist ein Sonderfall mit besonderer Stabilität.`,

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

      diagram: "covalent-bond",

      merksätze: [
        "Kovalente Bindung: Elektronenpaar wird gemeinsam genutzt (nicht übertragen).",
        "Elektronegativitätsdifferenz > 1,7: ionische Bindung; 0,4–1,7: polar kovalent.",
        "Polare Bindungen + asymmetrische Geometrie = polares Molekül (z. B. H₂O).",
        "CO₂ ist trotz polarer C=O-Bindungen unpolar (linear, Dipole heben sich auf).",
        "VSEPR: Elektronenpaare stoßen sich ab → maximaler Abstand → Geometrie.",
        "Freie Elektronenpaare verkleinern Bindungswinkel stärker als bindende Paare.",
        "sp³: 109,5° Tetraeder; sp²: 120° planar; sp: 180° linear.",
        "π-Bindung verhindert freie Rotation → Cis-Trans-Isomerie, Rigidität der Peptidbindung.",
        "Benzol: sp², delokalisiertes π-System → aromatisch, besonders stabil.",
        "Dreifachbindung (C≡C) ≠ 3× Einfachbindung: σ stark, π schwächer.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        frage:
          "Erklären Sie anhand von Wasser (H₂O) und Kohlendioxid (CO₂) den Unterschied zwischen Bindungspolarität und Molekülpolarität. Welche Folgen hat dies für die physikalischen und biologischen Eigenschaften dieser Moleküle?",
        antwort: `Sowohl H₂O als auch CO₂ enthalten polare kovalente Bindungen: In H₂O beträgt die EN-Differenz O–H ≈ 1,4 (O: 3,5; H: 2,1), in CO₂ beträgt die EN-Differenz C=O ≈ 1,0 (O: 3,5; C: 2,5). Beide Moleküle besitzen also polare Bindungen.

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
      ],
    },

    {
      id: "ch-6-03",
      title: "Van-der-Waals, Wasserstoffbrücken und Metallbindung",
      content: `## Überblick: Zwischenmolekulare Kräfte

Neben den intramolekularen Bindungen (Ionen-, kovalente, Metallbindung) bestimmen **intermolekulare Wechselwirkungen** (van-der-Waals-Kräfte, Wasserstoffbrücken, Dipol-Dipol) die physikalischen Eigenschaften von Stoffen: Aggregatszustand, Siedepunkt, Löslichkeit, Viskosität. In der Biologie sind sie ebenso fundamental — sie bestimmen Proteinstruktur, DNA-Doppelhelix und Enzym-Substrat-Wechselwirkungen.

## Van-der-Waals-Kräfte (London-Dispersionskräfte)

**London-Dispersionskräfte** entstehen durch kurzlebige, induzierte Dipole: Quantenmechanische Elektronenfluktuation erzeugt instantane Dipolmomente, die in benachbarten Atomen weitere Dipole induzieren. Sie wirken zwischen **allen** Atomen und Molekülen (auch unpolaren) und sind die einzigen intermolekularen Kräfte in unpolaren Substanzen.

Einflussfaktoren:
- **Polarisierbarkeit:** Größere Atome/Moleküle mit mehr Elektronen sind stärker polarisierbar → stärkere Dispersionskräfte.
- **Kontaktfläche:** Längerkettige, unverzweigte Moleküle haben größere Kontaktfläche → stärkere Wechselwirkung (n-Butan siedet bei −0,5 °C; Isobutan bei −11,7 °C trotz gleicher Summenformel).

Stärke: London-Kräfte (0,1–10 kJ/mol) < Dipol-Dipol (~5 kJ/mol) < Wasserstoffbrücken (~10–40 kJ/mol) << kovalente Bindungen (150–1000 kJ/mol).

**Dipol-Dipol-Wechselwirkungen:** Zwischen polaren Molekülen; positive Seite eines Dipols zieht negative Seite des Nachbardipols an. Beispiel: HCl (siedet bei −85 °C, obwohl ähnliche Masse wie Ar, das bei −186 °C siedet).

## Wasserstoffbrückenbindungen (H-Brücken)

**Definition:** Wasserstoffbrücken entstehen, wenn ein Wasserstoff, der kovalent an ein hochelektronegatives Atom gebunden ist (N, O, F — „Donor"), elektrostatisch mit dem freien Elektronenpaar eines anderen elektronegativen Atoms („Akzeptor") wechselwirkt.

Schreibweise: **D–H···A** (D = Donor, A = Akzeptor; ··· = H-Brücke)

Bedingungen:
1. Donor: H kovalent an N, O oder F gebunden
2. Akzeptor: N, O oder F mit freiem Elektronenpaar
3. Geometrie: möglichst linear (180°) → stärkste Brücke

**Energie:** 10–40 kJ/mol (viel stärker als reine van-der-Waals, aber schwächer als kovalente Bindungen). Trotzdem kollektiv enorm wichtig, da viele H-Brücken gleichzeitig wirken können.

### Anomalie des Wassers

Wasser siedet bei 100 °C (H₂O, MM = 18 g/mol), während H₂S bei −60 °C siedet (MM = 34 g/mol). H₂O bildet bis zu 4 Wasserstoffbrücken pro Molekül (2 als Donor, 2 als Akzeptor durch die beiden freien Elektronenpaare am O). Daher:
- Ungewöhnlich hoher Siedepunkt
- Hohe Verdampfungsenthalpie (44 kJ/mol bei 25 °C) → wichtig für Thermoregulation (Schwitzen)
- Dichte-Anomalie: Eis (0 °C) ist weniger dicht als flüssiges Wasser (4 °C) → Eis schwimmt, Gewässer frieren von oben → Lebewesen überleben unter Eis
- Hohe Wärmekapazität (4,18 J/g·K) → Wasser ist ein ausgezeichneter Temperaturpuffer

### Biologische Bedeutung der Wasserstoffbrücken

**DNA-Doppelhelix:** Adenin (A) bildet 2 H-Brücken mit Thymin (T); Guanin (G) bildet 3 H-Brücken mit Cytosin (C). GC-reiche DNA ist thermisch stabiler (Tm höher). Denaturierung durch Hitze bricht H-Brücken → Stränge trennen sich.

**Proteinstruktur:**
- α-Helix: H-Brücke zwischen C=O der Aminosäure i und N–H der Aminosäure i+4 entlang der Helix.
- β-Faltblatt: H-Brücken zwischen parallelen oder antiparallelen Strängen.
- Tertiärstruktur: H-Brücken an Oberfläche und im Inneren stabilisieren die Faltung.

**Enzymkatalyse:** Aktives Zentrum: H-Brücken orientieren Substrat, stabilisieren Übergangszustände und ermöglichen stereoselektive Katalyse.

**Pharmaka:** H-Brücken-Donoren und -Akzeptoren sind entscheidend für Lipinski's Rule of Five (Bioverfügbarkeit): ≤5 HBD, ≤10 HBA.

## Metallbindung

**Modell:** Im Metall befinden sich die Metallatome im Gitter, ihre Valenzelektronen sind jedoch **delokalisiert** und bilden ein „Elektronengas" oder „Elektronenmeer", das sich frei durch das gesamte Gitter bewegt. Die positiven Metallionen (Rumpfionen) werden durch das Elektronengas zusammengehalten.

**Eigenschaften aus dem Elektronengas-Modell:**

**Elektrische Leitfähigkeit:** Das Elektronengas bewegt sich frei → exzellente Stromleitung ohne Ionenbewegung (anders als Elektrolyte). Kupfer, Silber, Gold: beste Leiter.

**Wärmeleitfähigkeit:** Freie Elektronen transportieren thermische Energie schnell durch das Metall.

**Duktilität (Verformbarkeit):** Metallschichten können gegeneinander gleiten, ohne dass die Bindung bricht — das Elektronengas „schmiert" die Ionenschichten. Kein Bruch wie bei Ionenkristallen.

**Glanz:** Freie Elektronen können Lichtquanten (Photonen) aller sichtbaren Wellenlängen absorbieren und reemittieren → metallischer Glanz.

**Schmelzpunkte:** Variieren stark. Caesium: 28,5 °C (wenige schwach gebundene Valenzelektronen), Wolfram: 3422 °C (sechs d-Elektronen, starkes Elektronengas, dichtes Gitter).

**Legierungen:** Mischungen von Metallen (oder Metall + Nichtmetall, z. B. Stahl = Fe + C). Eigenschaften können gezielt verändert werden (Härte, Korrosionsresistenz).

`,

      lernziele: [
        "Die drei Arten von van-der-Waals-Kräften unterscheiden und deren Abhängigkeit von Polarisierbarkeit und Molekülgeometrie erklären.",
        "Wasserstoffbrückenbindungen definieren, Donor- und Akzeptor-Atome benennen und Beispiele aus der Biologie geben (DNA, Proteine, Wasser).",
        "Die Anomalien des Wassers (Siedepunkt, Dichte-Anomalie, hohe Wärmekapazität) mit der Fähigkeit zur H-Brückenbildung verknüpfen.",
        "Das Elektronengas-Modell der Metallbindung beschreiben und daraus metallische Eigenschaften (Leitfähigkeit, Duktilität, Glanz) ableiten.",
        "Die Stärken verschiedener intermolekularer Wechselwirkungen vergleichen und biologische Konsequenzen ableiten.",
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
          heading: "Metallbindung und Elektronengas-Modell",
          text: "Im Metall sind Valenzelektronen über das gesamte Gitter delokalisiert (Elektronengas). Diese Delokalisierung erklärt alle charakteristischen Metalleigenschaften: elektrische und thermische Leitfähigkeit (freie Elektronen), Duktilität (Gleiten ohne Bruch, weil Elektronengas die Schichten zusammenhält), metallischer Glanz (freie Elektronen reflektieren alle sichtbaren Wellenlängen). Dies unterscheidet Metalle fundamental von Ionenkristallen (spröde) und Molekülkristallen.",
          merksatz:
            "Elektronengas = frei bewegliche Valenzelektronen → Leitfähigkeit + Duktilität + Glanz.",
        },
        {
          heading: "Vergleich intermolekularer Kräfte",
          text: "Übersicht der intermolekularen Wechselwirkungen nach Stärke, Voraussetzung und Beispielen.",
          table: {
            headers: ["Wechselwirkung", "Stärke (kJ/mol)", "Voraussetzung", "Beispiele"],
            rows: [
              ["London-Dispersion", "0,1–10", "Alle Moleküle", "CH₄, Edelgase, Lipide"],
              ["Dipol-Dipol", "1–5", "Polare Moleküle", "HCl, Aceton"],
              ["Wasserstoffbrücke", "10–40", "D–H mit N,O,F; Akzeptor N,O,F", "H₂O, DNA, Proteine"],
              ["Ionisch", "200–1000", "Entgegengesetzte Ionen", "NaCl, KCl"],
              ["Kovalent", "150–1000", "Elektronenpaare", "C–C, C=O"],
            ],
          },
        },
      ],

      merksätze: [
        "London-Kräfte: wirken zwischen ALLEN Molekülen, entstehen durch instantane Dipole.",
        "Größere Moleküle = höhere Polarisierbarkeit = stärkere London-Kräfte.",
        "Verzweigung verringert Kontaktfläche → schwächere London-Kräfte → niedrigerer Siedepunkt.",
        "Dipol-Dipol: nur zwischen polaren Molekülen; stärker als London bei ähnlicher Masse.",
        "H-Brücke: H–N/O/F als Donor; N/O/F mit freiem EP als Akzeptor.",
        "DNA: A-T = 2 H-Brücken; G-C = 3 H-Brücken → GC-reich = thermisch stabiler.",
        "Wasser: bis zu 4 H-Brücken → anomal hoher Siedepunkt, Dichte-Anomalie des Eises.",
        "Metallbindung: delokalisiertes Elektronengas → Leitfähigkeit, Duktilität, Glanz.",
        "Ionenkristall: spröde (Verschiebung → Abstoßung gleicher Ladungen); Metall: duktil (Elektronengas gleitet mit).",
        "H-Brücken: 10–40 kJ/mol; schwächer als kovalent, aber kollektiv enorm wichtig in Biomolekülen.",
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        frage:
          "Erklären Sie die Bedeutung der Wasserstoffbrückenbindungen für die Struktur und Funktion der DNA-Doppelhelix. Warum ist GC-reiche DNA thermisch stabiler als AT-reiche DNA?",
        antwort: `Die DNA-Doppelhelix wird durch Wasserstoffbrücken zwischen den komplementären Basenpaaren auf den gegenüberliegenden Strängen zusammengehalten. Adenin (A) paart mit Thymin (T) über 2 Wasserstoffbrücken, Guanin (G) paart mit Cytosin (C) über 3 Wasserstoffbrücken. Die H-Brücken folgen der spezifischen Geometrie der Basenpaare: Donoren (N–H oder O–H) wechselwirken mit Akzeptoren (N oder O mit freiem Elektronenpaar) in präzise ausgerichteter Weise, was die Basenpaarspezifität garantiert.

GC-Paare sind thermisch stabiler als AT-Paare, weil sie 3 Wasserstoffbrücken bilden statt 2. Bei der Denaturierung (Schmelztemperatur Tm) der DNA werden diese H-Brücken aufgebrochen. Regionen mit hohem GC-Gehalt benötigen mehr thermische Energie (höheres Tm), da pro Basenpaar im Durchschnitt mehr H-Brücken zu lösen sind. Dies ist klinisch relevant: PCR-Primer-Design berücksichtigt GC-Gehalt zur Optimierung der Anlagerungstemperatur. Auch die Denaturierung von Pathogen-DNA durch Hitze (Sterilisation) basiert auf diesem Prinzip.

Zusätzlich zu den H-Brücken stabilisieren π-π-Stapelwechselwirkungen (London-Kräfte zwischen aromatischen Ringen der Basen) die Doppelhelix. Beide Kräfte zusammen machen die DNA-Helix hochstabil, aber dennoch durch Enzyme (Helikasen, Topoisomerasen) kontrolliert entwindbar.`,
      },

      klinischerBezug:
        "Wasserstoffbrücken in der DNA-Doppelhelix (A-T: 2; G-C: 3) sind die molekulare Grundlage für die Spezifität der Basenpaarung bei Replikation und Transkription; GC-reiche Promotor-Bereiche und die thermische Stabilität von DNA werden durch H-Brücken-Statistik bestimmt und sind klinisch relevant für PCR-Diagnostik und Gentechnik. Die hohe Wärmekapazität und Verdampfungswärme des Wassers ermöglichen die Thermoregulation des Menschen durch Schwitzen (Verdampfung von ~580 kcal/L Schweiß).",

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
      ],
    },

    {
      id: "ch-6-04",
      title: "Chemische Bindungen in biologischen Molekülen",
      content: `## Bindungstypen in Biomolekülen

Lebende Systeme sind chemische Systeme, die auf einer fein abgestimmten Hierarchie von Bindungen basieren. **Kovalente Bindungen** (stark, gerichtet) bauen die Primärstruktur der Makromoleküle auf. **Nichtkovalente Wechselwirkungen** (schwächer, reversibel) bestimmen die dreidimensionale Struktur und Funktion. Das Zusammenspiel beider Klassen ermöglicht die molekulare Dynamik, die Leben ausmacht.

## Kohlenhydrate (Zucker und Polysaccharide)

Monosaccharide (Glucose, Fructose, Ribose) sind durch sp³-hybridisierte C-Atome aufgebaut. Die **Ringform** (Pyranosen, Furanosen) entsteht durch intramolekulare Halbacetalbildung. Das **anomere Kohlenstoffatom** (C1) kann α- oder β-Konfiguration einnehmen — entscheidend für biologische Funktion:

- **α-glycosidische Bindung** (Stärke, Glykogen): leicht spaltbar durch Amylase → Energielieferant
- **β-glycosidische Bindung** (Cellulose): Menschen und die meisten Tiere besitzen keine Cellulase → unverdaulich → Ballaststoff

Polysaccharide werden durch **glycosidische Bindungen** (kovalent, zwischen Hydroxyl-Gruppen) verknüpft. Verzweigungen (Glykogen: alle 8–12 Glu-Einheiten, α-1,6) erhöhen Löslichkeit und Zugänglichkeit für Enzyme.

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

## Aminosäuren, Peptide und Proteinstruktur

Aminosäuren haben eine **Aminogruppe** (–NH₂, Donor für H-Brücken) und eine **Carboxylgruppe** (–COOH, Akzeptor) sowie eine variable **Seitenkette** (R-Gruppe, bestimmt Eigenschaften).

**Peptidbindung** (–CO–NH–): kovalente Bindung zwischen Carboxyl des einen und Amino des nächsten AAs. Wie beschrieben: sp²-hybridisiert, partieller Doppelbindungscharakter, planar → gerichtet rigide Kette.

**Hierarchie der Proteinstruktur:**
- **Primär:** Aminosäuresequenz (kovalente Peptidbindungen)
- **Sekundär:** lokale Faltung (α-Helix, β-Faltblatt) durch H-Brücken der Peptidbindungen
- **Tertiär:** Gesamtfaltung (H-Brücken, hydrophober Effekt, van-der-Waals, Disulfidbrücken, Salzbrücken)
- **Quartär:** Assoziation mehrerer Ketten (Hämoglobin: 4 Untereinheiten) durch nichtkovalente Wechselwirkungen

**Disulfidbrücken (–S–S–):** Kovalente Bindung zwischen zwei Cystein-Seitenketten → stabilisiert extrazelluläre Proteine (Antikörper, Insulin) gegen Denaturierung.

**Salzbrücken:** Ionische Wechselwirkung zwischen gegengleich geladenen Seitenketten (Lys⁺/Arg⁺ mit Asp⁻/Glu⁻) → stabilisieren Tertiärstruktur.

**Denaturierung:** Störung der nichtkovalenten Wechselwirkungen (Hitze, pH-Änderung, Detergenzien) → Entfaltung → Funktionsverlust. Denaturierungsmittel: Harnstoff (unterbricht H-Brücken), SDS (Detergenz, stört hydrophoben Effekt), hohe Temperaturen.

## Nukleinsäuren (DNA und RNA)

**Kovalentes Rückgrat:** Phosphodiesterbindungen verbinden Zucker (Desoxyribose in DNA, Ribose in RNA) über Phosphatgruppen (negativ geladen) → hydrophiles, negativ geladenes Rückgrat.

**Basenstapelung (π-Stacking):** London-Dispersionskräfte zwischen den aromatischen Basenringen in der Helix-Innenseite stabilisieren die DNA zusätzlich zu H-Brücken. Energiebeitrag ~10–40 kJ/mol pro Basenpaar.

**Topologie:** DNA existiert in zellulär superspiralisierter Form (Supercoiling) — Topoisomerasen regulieren die Topologie. Wichtige Angriffspunkte für Antibiotika (Gyraseinhibitoren: Fluorchinolone) und Krebstherapeutika (Topoisomerase-II-Inhibitoren: Doxorubicin).

**RNA-Struktur:** RNA ist einsträngig, kann aber intramolekular H-Brücken bilden → Sekundärstrukturen (Haarnadelschleifen, Stamm-Schleifen) → tRNA, rRNA, Ribozyme, microRNA.

## Enzyme: Bindung und Katalyse

Enzyme sind Proteine (Ausnahme: Ribozyme = RNA) mit einem **aktiven Zentrum**, das durch nichtkovalente Wechselwirkungen das Substrat spezifisch bindet:
- H-Brücken: orientieren das Substrat
- Hydrophober Effekt: hydrophobe Substratteile im hydrophoben Pocket
- van-der-Waals: optimale Raumfüllung (induced fit)
- Ionische Wechselwirkungen: Ladungskomplementarität

**Induced Fit:** Das Enzym verändert seine Konformation beim Substratbinden — optimale Bindung erst nach Konformationsänderung. Inhibitoren können kompetitiv (blockieren aktives Zentrum) oder allosterisch (ändern Enzymstruktur fern vom aktiven Zentrum) wirken.

## Pharmakologische Bindungen

Arzneimittel wirken über **molekulare Erkennung** an Rezeptoren, Enzymen oder Nukleinsäuren. Bindungsarten:

- **Reversible Bindung** (meist nichtkovalent: H-Brücken, ionisch, van-der-Waals): reversible Hemmstoffe, günstig für steuerbare Pharmakotherapie
- **Irreversible Bindung** (kovalent): z. B. Aspirin (kovalente Acetylierung der COX), Penicillin (kovalente Acylierung der Transpeptidase), Protonenpumpenhemmer (Omeprazol, kovalente Bindung an H⁺/K⁺-ATPase)

Lipinski's Rule of Five für orale Bioverfügbarkeit: MW ≤ 500, logP ≤ 5, H-Brücken-Donoren ≤ 5, H-Brücken-Akzeptoren ≤ 10. Pharmaka müssen ausreichend polar für Löslichkeit und Transport, aber nicht zu polar, um Membranen zu durchqueren.`,

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
        frage:
          "Beschreiben Sie die Kräfte, die zur Proteinfaltung und Stabilisierung der Tertiärstruktur von Proteinen beitragen. Welche Rolle spielen kovalente und nichtkovalente Wechselwirkungen, und was passiert bei der Denaturierung?",
        antwort: `Die Tertiärstruktur eines Proteins — seine einzigartige dreidimensionale Faltung — wird durch ein komplexes Zusammenspiel verschiedener Bindungstypen stabilisiert:

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
