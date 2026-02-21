import type { Kapitel } from '../types';

export const chemKap5: Kapitel = {
  id: 'chem-kap5',
  title: 'Periodensystem der Elemente',
  subject: 'chemie',
  icon: '📋',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ch-5-01',
      title: 'Aufbau und Ordnungsprinzip des PSE',
      content: `## Geschichte und Ordnungsprinzip

Das Periodensystem der Elemente (PSE) wurde unabhängig von Dmitri Mendelejew und Lothar Meyer um 1869 entwickelt, damals noch nach steigender Atommasse. Das moderne PSE ordnet Elemente nach steigender **Kernladungszahl (Ordnungszahl Z)** — von Wasserstoff (Z=1) bis zu den schwersten künstlichen Elementen (Z>118). Diese Anordnung führt zur Periodizität: Elemente mit ähnlichen chemischen Eigenschaften erscheinen in regelmäßigen Abständen.

## Perioden und Gruppen

Das PSE hat **7 Perioden** (horizontale Zeilen, entsprechen der höchsten Hauptquantenzahl n). In jeder Periode werden Elektronen auf die gleiche äußerste Schale aufgebaut.

Es gibt **18 Gruppen** (vertikale Spalten, IUPAC-Nummerierung 1-18). Elemente der gleichen Gruppe haben die gleiche Zahl an Valenzelektronen und daher ähnliche chemische Eigenschaften:
- Gruppen 1-2: s-Block (Hauptgruppen 1-2)
- Gruppen 3-12: d-Block (Übergangsmetalle / Nebengruppen)
- Gruppen 13-18: p-Block (Hauptgruppen 3-8)
- Lanthanoide / Actinoide: f-Block (unten ausgelagert)

## Metallcharakter und Trennlinie

Eine Treppenlinien-Grenze trennt Metalle (links/unten) von Nichtmetallen (rechts/oben). Halbmetalle (Metalloide) liegen an der Grenzlinie (Si, Ge, As, Sb, Te). Der **Metallcharakter nimmt zu**: von rechts nach links in einer Periode (mehr Valenzelektronen → weniger metallisch) und von oben nach unten in einer Gruppe (mehr Schalen → metallähnlicher).

## Blöcke und Orbitalbesetzung

Die Position eines Elements im PSE spiegelt direkt seine Elektronenkonfiguration wider: Im s-Block (Gruppen 1-2) wird das s-Orbital der äußersten Schale gefüllt, im p-Block (Gruppen 13-18) die p-Orbitale, im d-Block die d-Orbitale der vorletzten Schale.`,
      lernziele: [
        "Den Aufbau des PSE mit Perioden, Gruppen und Blöcken erklären",
        "Den Zusammenhang zwischen Position im PSE und Elektronenkonfiguration herstellen",
        "Den Trend des Metallcharakters im PSE beschreiben",
      ],
      sections: [
        {
          heading: "Perioden: von H bis Rn",
          text: "Die 7 Perioden entsprechen den Hauptquantenzahlen n=1 bis n=7. Periode 1 (H, He): Nur s-Orbitale, 2 Elemente. Periode 2 (Li bis Ne): s und p-Orbitale, 8 Elemente. Periode 3 (Na bis Ar): s und p-Orbitale, 8 Elemente. Periode 4 (K bis Kr): s, d und p-Orbitale, 18 Elemente (erste Übergangsmetalle 3d). Periode 5 (Rb bis Xe): s, d und p-Orbitale, 18 Elemente (4d). Periode 6 (Cs bis Rn): s, f, d und p-Orbitale, 32 Elemente (Lanthanoide 4f + 5d). Periode 7: Actinoide. Die Länge jeder Periode entspricht der maximalen Elektronenzahl der betreffenden Unterschalen: 2 (s) + 6 (p) = 8; 2+10(d)+6 = 18; 2+14(f)+10(d)+6 = 32.",
        },
        {
          heading: "Gruppen: gleiche Eigenschaften, gleiche Valenzelektronen",
          text: "Alle Elemente einer Gruppe haben die gleiche Anzahl an Valenzelektronen und zeigen daher analoge chemische Eigenschaften. Gruppe 1 (Alkalimetalle: H, Li, Na, K, Rb, Cs, Fr): 1 Valenzelektron, bilden +1-Ionen. Gruppe 17 (Halogene: F, Cl, Br, I, At): 7 Valenzelektronen, bilden -1-Ionen. Gruppe 18 (Edelgase: He, Ne, Ar, Kr, Xe, Rn): 8 Valenzelektronen (He: 2), chemisch inert. IUPAC-Nummerierung (1-18) ist heute Standard; ältere Systeme wie IA-VIIIA oder Ia-VIIIa werden noch oft verwendet. In MedAT-Aufgaben wird meist die Gruppennummer direkt angegeben.",
        },
      ],
      merksätze: [
        "PSE: 7 Perioden (horizontal, = Schalenanzahl), 18 Gruppen (vertikal, = Valenzelektronen)",
        "Metallcharakter: nimmt von rechts nach links und von oben nach unten zu",
        "s-Block: Gr.1-2; p-Block: Gr.13-18; d-Block: Gr.3-12 (Übergangsmetalle)",
      ],
      klinischerBezug: "Die Position eines Elements im PSE bestimmt seine biologische Rolle: Elemente der Gruppe 1 (Na, K) sind Elektrolyte; Gruppe 2 (Ca, Mg) bilden Knochenmaterial; Gruppe 16 (O, S) sind Hauptbestandteile biologischer Moleküle; Übergangsmetalle (Fe, Cu, Zn) sind Kofaktoren in Enzymen.",
      altfrage: {
        question: "In welchem Block des PSE steht Calcium (Z=20) und wie viele Valenzelektronen hat es?",
        answer: "Calcium steht in Gruppe 2, Periode 4, im s-Block. Seine Elektronenkonfiguration ist [Ar] 4s². Die 4s²-Elektronen sind Valenzelektronen → 2 Valenzelektronen. Calcium bildet daher typischerweise Ca²⁺-Ionen.",
      },
      selfTest: [
        {
          question: "Wie viele Perioden hat das Periodensystem?",
          options: [
            "4",
            "6",
            "7",
            "8",
            "18",
          ],
          correctIndex: 2,
          explanation: "Das PSE hat 7 Perioden (horizontale Zeilen), entsprechend den Hauptquantenzahlen n=1 bis n=7. Es hat 18 Gruppen (vertikale Spalten).",
          hints: [
            "Perioden = waagerechte Zeilen im PSE",
            "Die Periodennummer entspricht der höchsten Hauptquantenzahl",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Elemente bilden den d-Block (Übergangsmetalle) im PSE?",
          options: [
            "Gruppen 1-2",
            "Gruppen 3-12",
            "Gruppen 13-18",
            "Gruppen 1-8",
            "Gruppen 14-17",
          ],
          correctIndex: 1,
          explanation: "Der d-Block umfasst die Gruppen 3-12 (Übergangsmetalle / Nebengruppen). Hier werden d-Orbitale der vorletzten Schale aufgefüllt. Bekannte Vertreter: Fe (Gr.8), Cu (Gr.11), Zn (Gr.12).",
          hints: [
            "d-Block = Übergangsmetalle = Nebengruppen",
            "Sie liegen zwischen s-Block (Gr.1-2) und p-Block (Gr.13-18)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In welche Richtung nimmt der Metallcharakter in einer Periode (von links nach rechts) ab?",
          options: [
            "Er nimmt von links nach rechts zu",
            "Er bleibt konstant innerhalb einer Periode",
            "Er nimmt von links nach rechts ab",
            "Er zeigt kein regelmäßiges Muster in einer Periode",
            "Er erreicht ein Maximum in der Mitte der Periode",
          ],
          correctIndex: 2,
          explanation: "In einer Periode nimmt der Metallcharakter von links nach rechts ab: Links stehen reaktive Metalle (Na, Mg), in der Mitte Übergangsmetalle (falls Periode ≥4), rechts Halbmetalle, dann Nichtmetalle (P, S, Cl) und ganz rechts Edelgase. Ursache: Wachsende Kernladung zieht Elektronen stärker an → Tendenz zur Aufnahme statt Abgabe von Elektronen.",
          hints: [
            "Na ist ein Metall, Cl ist ein Nichtmetall — beide in Periode 3",
            "Metallcharakter = Tendenz, Elektronen abzugeben",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Element steht im PSE in Periode 3, Gruppe 17?",
          options: [
            "Fluor",
            "Chlor",
            "Brom",
            "Jod",
            "Schwefel",
          ],
          correctIndex: 1,
          explanation: "Periode 3 entspricht n=3 als äußerste Schale. Gruppe 17 sind die Halogene. Das Halogen der 3. Periode ist Chlor (Cl, Z=17). Fluor ist das Halogen der 2. Periode, Brom der 4. Periode.",
          hints: [
            "Halogene stehen in Gruppe 17: F, Cl, Br, I, At",
            "Periode 3: von Na (Gr.1) bis Ar (Gr.18)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Element hat die Elektronenkonfiguration [Ne] 3s² 3p¹. In welcher Gruppe und Periode steht es?",
          options: [
            "Gruppe 2, Periode 3",
            "Gruppe 13, Periode 3",
            "Gruppe 1, Periode 2",
            "Gruppe 3, Periode 3",
            "Gruppe 13, Periode 2",
          ],
          correctIndex: 1,
          explanation: "[Ne] = 10 Elektronen. Dann 3s²3p¹ = 3 weitere Elektronen → Z=13 = Aluminium. Die äußerste Schale ist n=3 → Periode 3. Die Valenzelektronen: 3s²3p¹ = 3 Valenzelektronen → Gruppe 13.",
          hints: [
            "Periodennummer = höchste Hauptquantenzahl n der Valenzelektronen",
            "Gruppenummer (p-Block): 10 + Anzahl der Valenzelektronen",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-5-02',
      title: 'Periodische Trends — Eigenschaften im PSE',
      content: `## Atomradius

Der **Atomradius** beschreibt die Größe eines Atoms (als halber Bindungsabstand zweier gleicher Atome definiert).

- **Innerhalb einer Periode (links → rechts)**: Der Atomradius nimmt ab. Die Kernladungszahl steigt, die Anzahl der Schalen bleibt gleich → stärkere Anziehung der Elektronen → kleinerer Radius. Na (186 pm) > Mg (160 pm) > Al (143 pm) > Si (111 pm) > P (107 pm) > S (105 pm) > Cl (99 pm)

- **Innerhalb einer Gruppe (oben → unten)**: Der Atomradius nimmt zu. Mit jeder Periode kommt eine weitere Elektronenschale hinzu → größerer Radius. Li (152 pm) < Na (186 pm) < K (227 pm) < Rb (248 pm)

## Ionisierungsenergie

Die **Ionisierungsenergie** (IE) ist die Energie, die benötigt wird, um einem gasförmigen Atom im Grundzustand ein Elektron zu entziehen: M(g) → M⁺(g) + e⁻.

- In der Periode: IE nimmt von links nach rechts zu (Elektronen stärker gebunden durch zunehmende Z)
- In der Gruppe: IE nimmt von oben nach unten ab (Valenzelektronen weiter vom Kern entfernt, besser abgeschirmt)

## Elektronenaffinität

Die **Elektronenaffinität** (EA) ist die Energiemenge, die freigesetzt wird, wenn ein neutrales Atom ein Elektron aufnimmt: M(g) + e⁻ → M⁻(g). Halogene (Gr.17) haben die höchsten Elektronenaffinitäten (Cl: 349 kJ/mol). Edelgase haben negative EA (endotherme Aufnahme).

## Elektronegativität (EN) nach Pauling

Die **Elektronegativität** gibt an, wie stark ein Atom in einer Bindung Elektronen anzieht. Skala von 0,7 (Fr) bis 4,0 (F). **Fluor** hat mit EN=4,0 die höchste Elektronegativität aller Elemente. Trends: In der Periode steigt EN von links nach rechts; in der Gruppe sinkt EN von oben nach unten.`,
      lernziele: [
        "Die Trends von Atomradius, Ionisierungsenergie und Elektronegativität im PSE erklären",
        "Die zugrunde liegenden Ursachen der Trends (Kernladung, Schirmung, Schalenanzahl) beschreiben",
        "Fluor als Element mit höchster Elektronegativität kennen",
      ],
      sections: [
        {
          heading: "Warum verlaufen die Trends so?",
          text: "Alle periodischen Trends haben dieselbe Ursache: das Gleichgewicht zwischen Kernladung und Abschirmung durch innere Elektronen. Die **effektive Kernladung** Z_eff = Z − σ (σ = Abschirmungskonstante) gibt an, welche Kernladung ein Valenzelektron 'spürt'. In einer Periode steigt Z, aber σ bleibt nahezu konstant (neue Elektronen derselben Schale schirmen kaum ab) → Z_eff steigt → Elektronen stärker gebunden → IE steigt, EN steigt, Radius sinkt. In einer Gruppe steigt Z, aber auch σ (neue vollständige Schalen schirmen stark ab) → Z_eff bleibt ähnlich, aber der Abstand der Valenzelektronen zum Kern wächst → IE sinkt, EN sinkt, Radius wächst.",
        },
        {
          heading: "Elektronegativität: Bedeutung für Bindungen",
          text: "Die Differenz der Elektronegativitäten ΔEN zweier gebundener Atome bestimmt den Bindungscharakter. ΔEN < 0,4: unpolare kovalente Bindung (z.B. H₂, Cl₂). 0,4 < ΔEN < 1,7: polare kovalente Bindung (z.B. H₂O: EN(O)=3,44, EN(H)=2,20, ΔEN=1,24). ΔEN > 1,7: Ionenbindung (z.B. NaCl: EN(Na)=0,93, EN(Cl)=3,16, ΔEN=2,23). Diese Grenzwerte sind nicht absolut, sondern fließend. Fluor (EN=4,0) ist so elektronegativ, dass es fast ausschließlich Ionenverbindungen oder stark polare Bindungen eingeht.",
        },
      ],
      merksätze: [
        "Atomradius: in Periode ↓ (Z wächst); in Gruppe ↑ (mehr Schalen)",
        "Ionisierungsenergie und EN: in Periode ↑; in Gruppe ↓",
        "Höchste EN: Fluor (4,0) — 'F ist am gierigsten auf Elektronen'",
      ],
      klinischerBezug: "Die Elektronegativität erklärt, warum Fluor in Pharmawirkstoffen häufig eingesetzt wird (z.B. Fluorochinolone, Fluoxetin, Flecainid): C−F-Bindungen sind stark polar aber metabolisch stabil, modifizieren Lipophilie und pKₐ der Moleküle und erhöhen häufig die Bioverfügbarkeit.",
      altfrage: {
        question: "Warum hat Natrium (Z=11) eine niedrigere Ionisierungsenergie als Neon (Z=10)?",
        answer: "Neon hat eine vollständig gefüllte L-Schale (1s²2s²2p⁶) — seine Valenzelektronen sind sehr stark gebunden. Natrium hat ein zusätzliches Elektron in der M-Schale (3s¹), das weiter vom Kern entfernt ist und durch die vollständige L-Schale stark abgeschirmt wird. Das 3s-Elektron ist daher viel leichter zu entfernen.",
      },
      selfTest: [
        {
          question: "Wie verändert sich der Atomradius innerhalb einer Gruppe von oben nach unten?",
          options: [
            "Er nimmt ab",
            "Er bleibt konstant",
            "Er nimmt zu",
            "Er zeigt kein regelmäßiges Muster",
            "Er nimmt zuerst zu, dann ab",
          ],
          correctIndex: 2,
          explanation: "In einer Gruppe (von oben nach unten) kommen neue Elektronenschalen hinzu. Mit jeder Periode steigt die äußerste Hauptquantenzahl n → die Valenzelektronen sind weiter vom Kern entfernt → der Atomradius nimmt zu.",
          hints: [
            "In einer Gruppe nimmt die Schalenzahl von oben nach unten zu",
            "Mehr Schalen = größerer Radius",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Element hat die höchste Elektronegativität?",
          options: [
            "Sauerstoff (O)",
            "Stickstoff (N)",
            "Chlor (Cl)",
            "Fluor (F)",
            "Wasserstoff (H)",
          ],
          correctIndex: 3,
          explanation: "Fluor hat mit EN = 4,0 (nach Pauling) die höchste Elektronegativität aller Elemente. Es steht in der 2. Periode, Gruppe 17 — maximale effektive Kernladung bei kleinstem Radius unter den Halogenen.",
          hints: [
            "Das Element mit der höchsten EN steht oben rechts im PSE (Edelgase ausgenommen)",
            "Die Halogene haben hohe EN — welches Halogen steht am weitesten oben?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche der folgenden Reihen zeigt Elemente mit abnehmender Ionisierungsenergie?",
          options: [
            "Na < Mg < Al",
            "F > Cl > Br",
            "Li < Na < K",
            "Ne < F < O",
            "He > Ne > Ar",
          ],
          correctIndex: 1,
          explanation: "In einer Gruppe nimmt die IE von oben nach unten ab (Valenzelektronen weiter vom Kern entfernt, stärkere Abschirmung). F, Cl, Br sind alle Halogene (Gruppe 17) → IE nimmt von F zu Br ab: F > Cl > Br.",
          hints: [
            "IE nimmt in einer Gruppe von oben nach unten ab",
            "F, Cl, Br sind alle in derselben Gruppe (17)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Bindung bildet sich zwischen Na (EN=0,93) und Cl (EN=3,16)?",
          options: [
            "Unpolare kovalente Bindung (ΔEN < 0,4)",
            "Polare kovalente Bindung (ΔEN 0,4-1,7)",
            "Ionenbindung (ΔEN > 1,7)",
            "Metallbindung",
            "Wasserstoffbrücke",
          ],
          correctIndex: 2,
          explanation: "ΔEN = 3,16 − 0,93 = 2,23 > 1,7 → Ionenbindung. Natrium gibt ein Elektron ab (Na⁺), Chlor nimmt es auf (Cl⁻). Es bildet sich das Ionengitter von NaCl (Kochsalz).",
          hints: [
            "Berechne ΔEN = EN(Cl) − EN(Na)",
            "Grenzwert für Ionenbindung: ΔEN > 1,7",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum sinkt die Ionisierungsenergie in einer Gruppe von oben nach unten?",
          options: [
            "Weil die Kernladung in einer Gruppe konstant bleibt",
            "Weil die Valenzelektronen mit zunehmender Schalenzahl weiter vom Kern entfernt und stärker abgeschirmt sind",
            "Weil in größeren Atomen mehr Elektronen vorhanden sind, die sich gegenseitig abstoßen",
            "Weil die Elektronenaffinität in einer Gruppe zunimmt",
            "Weil der Metallcharakter in einer Gruppe von oben nach unten zunimmt und Metalle niedrige IE haben",
          ],
          correctIndex: 1,
          explanation: "In einer Gruppe kommen von oben nach unten neue vollständige Elektronenschalen hinzu. Die Valenzelektronen sind dadurch weiter vom Kern entfernt (größerer Abstand) und werden von den inneren Schalen stärker abgeschirmt (höhere Abschirmungskonstante σ). Beides senkt die effektive Kernladung Z_eff, die auf Valenzelektronen wirkt → niedrigere IE.",
          hints: [
            "Mehr Schalen = Valenzelektronen weiter vom Kern",
            "Innere Schalen schirmen die Kernladung ab",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-5-03',
      title: 'Wichtige Elementgruppen',
      content: `## Alkalimetalle (Gruppe 1)

**Elemente**: Li, Na, K, Rb, Cs, Fr (H gehört formal dazu, verhält sich aber anders). **Eigenschaften**: Weiche, silbrig glänzende Metalle; 1 Valenzelektron (s¹); bilden immer +1-Ionen; sehr reaktiv (reagieren heftig mit Wasser und Luft). Reaktivität nimmt von Li bis Cs zu. Na und K sind biologisch essenzielle Elektrolyte (Nervenimpulse, Osmose).

## Erdalkalimetalle (Gruppe 2)

**Elemente**: Be, Mg, Ca, Sr, Ba, Ra. **Eigenschaften**: Härter als Alkalimetalle; 2 Valenzelektronen (s²); bilden +2-Ionen; reaktiv, aber weniger als Alkalimetalle. Medizinisch bedeutsam: **Ca²⁺** (Knochen, Muskelkontraktion, Blutgerinnung), **Mg²⁺** (ATP-Cofaktor, über 300 Enzymreaktionen). CaCO₃ ist Hauptbestandteil von Knochen und Zähnen (als Hydroxyapatit).

## Halogene (Gruppe 17)

**Elemente**: F, Cl, Br, I, At. **Eigenschaften**: 7 Valenzelektronen (s²p⁵); bilden −1-Ionen (Halogenide); starke Oxidationsmittel; reagieren mit Metallen zu Salzen (lat. 'halos' + 'gen' = Salzbilder). Reaktivität nimmt von F zu I ab (F ist das reaktivste Element überhaupt). **Jod (I)** ist essenziell für die Schilddrüsenhormone T3 und T4.

## Edelgase (Gruppe 18)

**Elemente**: He, Ne, Ar, Kr, Xe, Rn. **Eigenschaften**: Vollständig gefüllte Valenzhülle (8 Elektronen, He: 2); chemisch weitgehend inert (keine normalen chemischen Verbindungen); einatomige Gase. Anwendungen: He in der MRT-Kühlung (Supraleitung), Ar als Schutzgas bei Schweißen, Xe als Narkosemittel.

## Übergangsmetalle (Gruppen 3-12)

Medizinisch wichtige Übergangsmetalle: **Fe** (Hämoglobin, Cytochrome), **Cu** (Coeruloplasmin, Cytochromoxidase), **Zn** (> 300 Metalloenzyme, Insulin-Speicherung), **Mn** (Superoxiddismutase), **Co** (Vitamin B12), **Mo** (Xanthinoxidase).`,
      lernziele: [
        "Die wichtigen Elementgruppen (Alkalimetalle, Erdalkalimetalle, Halogene, Edelgase) mit ihren Eigenschaften beschreiben",
        "Medizinisch relevante Elemente den Gruppen zuordnen (Na, K, Ca, Mg, I, Fe, Zn)",
        "Die Ionenladungen der Hauptgruppen aus der Valenzelektronenzahl ableiten",
      ],
      sections: [
        {
          heading: "Biologisch essentielle Elemente und ihre Rollen",
          text: "Die im menschlichen Körper wichtigsten Elemente verteilen sich über das PSE: Hauptelemente (>1%): O, C, H, N (Gr. 16,14,1,15) — Grundbausteine organischer Moleküle. Mengenelemente (0,01-1%): Ca (Gr.2), P (Gr.15), K (Gr.1), S (Gr.16), Na (Gr.1), Cl (Gr.17), Mg (Gr.2). Spurenelemente (<0,01%): Fe, Zn, Cu, Mn, I, Se, Mo, Co u.a. Defizite von Spurenelementen führen zu spezifischen Mangelkrankheiten: Eisenmangel → Anämie; Jodmangel → Struma (Schilddrüsenvergrößerung); Zinkmangel → Wundheilungsstörungen, Immunschwäche; Magnesiummangel → Muskelkrämpfe, Herzrhythmusstörungen.",
        },
        {
          heading: "Halogene: Chemie und Medizin",
          text: "Halogene (Gr.17) sind aufgrund ihrer hohen Elektronegativität und Reaktivität medizinisch bedeutsam. Chlor (Cl₂) wurde als erstes Desinfektionsmittel für Trinkwasser eingesetzt und wird heute als Chlordioxid (ClO₂) und Hypochlorit (OCl⁻) verwendet. Jod (I₂ in PVP-Iod, Betaisodona) ist ein breites Antiseptikum. Fluorid (F⁻) hemmt die Zahnkaries durch Einbau in den Zahnschmelz als Fluorapatit. Fluor-haltige Arzneistoffe (Fluorine) sind ein großes Segment: Fluorochinolone (Antibiotika), Fluphenazin (Antipsychotikum), Fluorcorticoide (Steroide), 5-Fluoruracil (Zytostatikum — hemmt Thymidylatsynthase).",
        },
      ],
      merksätze: [
        "Alkalimetalle (Gr.1): +1-Ion, sehr reaktiv — Na⁺ und K⁺ sind Elektrolyte",
        "Halogene (Gr.17): -1-Ion, starke Oxidationsmittel — I essenziell für Schilddrüse",
        "Edelgase (Gr.18): vollständige Schale, inert — He für MRT, Xe als Narkose",
      ],
      klinischerBezug: "Calcium (Gruppe 2) hat im menschlichen Körper drei kritische Funktionen: Strukturfunktion in Knochen (Hydroxyapatit), Second-Messenger-Rolle in Signalkaskaden (Ca²⁺-Calmodulin), und Auslöser der Muskelkontraktion (Troponin-C). Störungen des Ca²⁺-Spiegels (Hypo-/Hyperkalzämie) führen zu neuromuskulären Symptomen.",
      altfrage: {
        question: "Warum sind Alkalimetalle so reaktiv und warum nimmt die Reaktivität von Li nach Cs zu?",
        answer: "Alkalimetalle haben nur 1 Valenzelektron, das leicht abgegeben wird → geringe Ionisierungsenergie. Von Li nach Cs nimmt die Schalenzahl zu, das Valenzelektron wird weiter vom Kern entfernt und stärker abgeschirmt → noch niedrigere IE → noch leichtere Elektronenabgabe → zunehmende Reaktivität. Cs reagiert explosionsartig mit Wasser.",
      },
      selfTest: [
        {
          question: "Welche Ionenladung bilden Erdalkalimetalle typischerweise?",
          options: [
            "+1",
            "+2",
            "+3",
            "-1",
            "-2",
          ],
          correctIndex: 1,
          explanation: "Erdalkalimetalle (Gruppe 2) haben 2 Valenzelektronen (s²). Sie geben beide ab und bilden +2-Ionen (z.B. Ca²⁺, Mg²⁺). Dies entspricht der stabilen Edelgaskonfiguration.",
          hints: [
            "Erdalkalimetalle haben 2 Valenzelektronen",
            "Sie geben diese Elektronen ab → +2-Ion",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Halogen ist für die Schilddrüsenfunktion essentiell?",
          options: [
            "Fluor",
            "Chlor",
            "Brom",
            "Jod",
            "Astat",
          ],
          correctIndex: 3,
          explanation: "Jod (I) ist ein essentielles Spurenelement für die Synthese der Schilddrüsenhormone T3 (Triiodthyronin, 3 Jodatome) und T4 (Thyroxin, 4 Jodatome). Jodmangel führt zur Hypothyreose und Struma.",
          hints: [
            "Die Schilddrüsenhormone T3 und T4 enthalten Halogenatome im Namen",
            "Das essentielle Halogen hat die niedrigste biologische Toxizität",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Warum sind Edelgase chemisch inert?",
          options: [
            "Weil sie gasförmig sind und daher nicht mit Feststoffen reagieren können",
            "Weil ihre Elektronenhülle vollständig besetzt ist und keine Tendenz zur Bildung von Bindungen besteht",
            "Weil sie radioaktiv sind und durch Strahlung stabilisiert werden",
            "Weil ihre Atommasse sehr groß ist und Reaktionen kinetisch gehemmt werden",
            "Weil sie negative Elektronenaffinität haben und Elektronen abstoßen",
          ],
          correctIndex: 1,
          explanation: "Edelgase haben vollständig gefüllte Valenzschalen (8 Elektronen; He: 2). Dieser Zustand ist energetisch besonders stabil (minimale potentielle Energie). Daher gibt es keine Triebkraft zur Bildung chemischer Bindungen durch Elektronenabgabe, -aufnahme oder -teilung.",
          hints: [
            "Die Valenzhülle der Edelgase ist vollständig besetzt",
            "Oktett = maximale Stabilität",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Übergangsmetall ist zentrales Atom im Hämoglobin und für den O₂-Transport verantwortlich?",
          options: [
            "Kupfer (Cu)",
            "Zink (Zn)",
            "Eisen (Fe)",
            "Mangan (Mn)",
            "Cobalt (Co)",
          ],
          correctIndex: 2,
          explanation: "Eisen (Fe²⁺) ist das Zentralatom der Häm-Gruppe im Hämoglobin. Es bindet reversibel O₂ (im Hämoglobin) und ist für den O₂-Transport im Blut verantwortlich. Fe-Mangel führt zur Eisenmangelanämie.",
          hints: [
            "Hämoglobin enthält 4 Häm-Gruppen, jede mit einem Metallatom",
            "Eisenmangel führt zur häufigsten Form der Anämie",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Reaktivitätsreihenfolge gilt für Alkalimetalle?",
          options: [
            "Li > Na > K > Rb > Cs",
            "Cs < Rb < K < Na < Li",
            "Na > K > Li > Rb > Cs",
            "Li < Na < K < Rb < Cs",
            "Alle Alkalimetalle sind gleich reaktiv",
          ],
          correctIndex: 3,
          explanation: "Die Reaktivität der Alkalimetalle nimmt von Li nach Cs zu (Li < Na < K < Rb < Cs), weil das Valenzelektron von oben nach unten leichter abgegeben wird (niedrigere Ionisierungsenergie durch größeren Atomradius und stärkere Abschirmung).",
          hints: [
            "Reaktivität von Alkalimetallen nimmt in der Gruppe von oben nach unten zu",
            "Cs ist das reaktivste der stabilen Alkalimetalle",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
