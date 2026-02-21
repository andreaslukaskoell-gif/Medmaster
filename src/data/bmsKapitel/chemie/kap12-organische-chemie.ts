import type { Kapitel } from '../types';

export const chemKap12: Kapitel = {
  id: "chem-kap12",
  title: "Organische Chemie",
  subject: "chemie",
  icon: "🫧",
  estimatedTime: "60 min",
  unterkapitel: [
    {
      id: "ch-12-01",
      title: "Kohlenwasserstoffe — Alkane, Alkene, Alkine",
      content: `## Alkane — Gesättigte Kohlenwasserstoffe

Alkane (Paraffine) haben die allgemeine Formel **C_nH_(2n+2)** und enthalten nur Einfachbindungen (C-C und C-H). Alle C-Atome sind sp³-hybridisiert (tetraedrisch).

**Nomenklatur (Grundreihe):**
- Methan CH₄, Ethan C₂H₆, Propan C₃H₈, Butan C₄H₁₀, Pentan C₅H₁₂
- Hexan, Heptan, Octan, Nonan, Dekan C₁₀H₂₂

**Eigenschaften:** Unpolar, hydrophob, brennbar. Siedepunkt steigt mit Kettenlänge. Chemisch träge (daher "Paraffine"). Reaktion: Radikalische Halogenierung (Substitution, nicht Addition).

## Alkene — Einfach ungesättigte Kohlenwasserstoffe

Alkene haben eine C=C-Doppelbindung (1 σ + 1 π). Formel: **C_nH_(2n)** (acyclisch). Die C=C-Atome sind sp²-hybridisiert (trigonal planar, 120°).

- Ethylen (Ethen) CH₂=CH₂: wichtiger Ausgangsstoff (Polyethylen, Ethanol)
- Propen, Buten, ...
- **Reaktionstyp: Elektrophile Addition** (Additionsreaktion an die C=C): HBr, Br₂, H₂O addieren sich an die Doppelbindung (Markovnikov-Regel: H geht an das C mit mehr H)
- Keine freie Rotation um C=C → cis/trans-Isomerie möglich

## Alkine — Zweifach ungesättigte Kohlenwasserstoffe

Alkine haben eine C≡C-Dreifachbindung (1 σ + 2 π). Formel: **C_nH_(2n-2)**. Die sp-hybridisierten C-Atome liegen linear.

- Acetylen (Ethin) HC≡CH: energiereiches Gas (Schweißen)
- Reaktion: Elektrophile Addition (zweifache Addition möglich)

## Aromaten — Benzol und Derivate

Benzol C₆H₆ ist das Grundmolekül der Aromaten. Alle C-Atome sind sp²-hybridisiert, die p-Elektronen bilden ein vollständig delokalisiertes π-System (aromatisch, stabil, Hückel-Regel: 4n+2 π-Elektronen).

**Reaktionstyp: Elektrophile aromatische Substitution (EAS):** H wird durch Elektrophil ersetzt, π-System bleibt erhalten. Beispiele: Nitrierung (→ Nitrobenzol), Sulfonierung, Halogenierung, Friedel-Crafts.`,
      lernziele: [
        "Alkane, Alkene und Alkine nach Formel, Hybridisierung und Reaktionstypen unterscheiden",
        "Die Eigenschaften von Benzol und die elektrophile aromatische Substitution erläutern",
        "Die Markovnikov-Regel bei der Additionsreaktion an Alkene anwenden",
      ],
      sections: [
        {
          heading: "Reaktionstypen im Überblick",
          text: "Die Reaktivität von Kohlenwasserstoffen hängt stark von der Bindungsart ab. Alkane (gesättigt, sp³) reagieren nur unter rauen Bedingungen (UV-Licht oder hohe Temperaturen) mit Halogenen — radikalische Substitution. Alkene (eine C=C, sp²) reagieren leicht mit Elektrophilen (H⁺, Br₂, HBr) — elektrophile Addition. Die π-Elektronen sind reaktiver als σ-Elektronen und werden von Elektrophilen angegriffen. Alkine ähneln Alkenen, können aber doppelt addieren. Benzol und Aromaten schützen ihr π-System und bevorzugen Substitution (EAS) über Addition, um die Aromatizität zu erhalten. Diese Reaktivitätsunterschiede sind für das Verständnis biologischer Moleküle (Aminosäuren mit aromatischen Resten: Phe, Tyr, Trp) wichtig.",
          merksatz: "Alkan: Substitution; Alken: Addition; Aromat: EAS (Substitution)",
        },
        {
          heading: "Aromatizität und biologische Bedeutung",
          text: "Aromatische Verbindungen besitzen nach der Hückel-Regel (4n+2 π-Elektronen, n = 0,1,2,...) besondere Stabilität durch vollständige Delokalisierung der π-Elektronen. Benzol (6 π-e⁻, n=1) ist das Paradebeispiel. Biologisch wichtig: Aromatische Aminosäuren (Phenylalanin, Tyrosin, Tryptophan) und aromatische Heterocyclen (Purine, Pyrimidine in DNA/RNA, Häm-Porphyrinring). Die planare Struktur aromatischer Systeme ermöglicht π-Stacking (z.B. zwischen DNA-Basen) und hydrophobe Wechselwirkungen. Benzol selbst ist karzinogen (hemmt Topoisomerase, DNA-Addukte).",
          merksatz: "Aromatizität: 4n+2 π-e⁻ (Hückel), planar, delokal. π-System",
        },
      ],
      merksätze: [
        "Alkan: C_nH_(2n+2), sp³; Alken: C_nH_(2n), sp², C=C",
        "Alkin: C_nH_(2n-2), sp, C≡C; Benzol: 6 π-e⁻, aromatisch",
        "Markovnikov: H+ geht an C mit mehr H",
      ],
      klinischerBezug: "Benzol ist ein Karzinogen (Leukämierisiko bei chronischer Exposition — AML). Polyzyklische aromatische Kohlenwasserstoffe (PAK, z.B. Benzpyren im Tabakrauch) werden durch Cytochrom P450 zu reaktiven Epoxiden aktiviert → DNA-Addukte → Mutationen → Karzinom.",
      altfrage: {
        question: "Was unterscheidet die radikalische Substitution der Alkane von der elektrophilen Addition der Alkene?",
        answer: "Bei der radikalischen Substitution der Alkane wird ein H-Atom durch ein Halogenatom ersetzt (C-H → C-X), ohne die Kohlenstoffkette zu verändern. Ein Radikal-Mechanismus wird benötigt (UV-Licht, hohe T). Bei der elektrophilen Addition an Alkene addiert sich ein Molekül (z.B. Br₂, HBr) an die C=C-Doppelbindung — beide Addenden werden in das Produkt eingebaut, die Doppelbindung verschwindet.",
      },
      selfTest: [
        {
          question: "Welche allgemeine Formel haben Alkane?",
          options: [
            "C_nH_(2n)",
            "C_nH_(2n+2)",
            "C_nH_(2n-2)",
            "C_nH_n",
            "C_nH_(2n-6)",
          ],
          correctIndex: 1,
          explanation: "Alkane haben die Formel C_nH_(2n+2), da jedes C-Atom vier Bindungen eingeht und bei gesättigten Ketten maximal viele H-Atome vorhanden sind. Methan (n=1): CH₄ = C₁H₄ ✓ (2×1+2=4). Ethan (n=2): C₂H₆ ✓ (2×2+2=6). Alkene C_nH_(2n) haben eine Doppelbindung weniger Wasserstoff.",
          hints: [
            "Gesättigt = nur Einfachbindungen, maximale H-Zahl",
            "Überprüfe mit Methan CH₄: n=1, 2(1)+2=4 ✓",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "An welchen Kohlenstoff addiert HBr bei der Reaktion CH₃-CH=CH₂ + HBr (Markovnikov-Regel)?",
          options: [
            "H an C3 (terminales CH₂), Br an C2 (mittleres CH)",
            "H an C2 (mittleres CH), Br an C3 (terminales CH₂)",
            "Zufällige Verteilung",
            "Kein H addiert, nur Br",
            "H an C1 (CH₃), Br an C2",
          ],
          correctIndex: 0,
          explanation: "Markovnikov-Regel: Bei Addition von HX an ein unsymmetrisches Alken addiert sich H an den Kohlenstoff mit mehr Wasserstoffatomen. In CH₃-CH=CH₂: C2 (=CH-) hat 1 H, C3 (=CH₂) hat 2 H. Also: H geht zu C3, Br geht zu C2. Produkt: CH₃-CHBr-CH₃ (2-Brompropan). Erklärung: Das sekundäre Carbokation (C2) ist stabiler als das primäre (C3).",
          hints: [
            "Markovnikov: H geht an C mit mehr H",
            "C3 hat 2 H (=CH₂), C2 hat 1 H (=CH)",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum bevorzugen Aromaten Substitution statt Addition?",
          options: [
            "Weil Aromaten keine π-Elektronen haben",
            "Weil die Aromatizität (stabiles π-System) durch Addition zerstört, durch Substitution erhalten wird",
            "Weil Aromaten sp³-hybridisiert sind",
            "Weil Addition an Benzol zu langsam ist",
            "Weil Substitution weniger Energie benötigt als Addition",
          ],
          correctIndex: 1,
          explanation: "Das aromatische π-Elektronensystem ist thermodynamisch sehr stabil (Resonanzenergie ≈ 150 kJ/mol). Eine Additionsreaktion würde das π-System zerstören (Verlust der Aromatizität). Durch elektrophile aromatische Substitution (EAS) bleibt das π-System nach der Reaktion erhalten. Deshalb bevorzugen Aromaten stark die EAS trotz energetisch möglicher Additions-reaktionen.",
          hints: [
            "Aromatizität ist sehr stabil — wie bleibt sie bei EAS erhalten?",
            "Was passiert mit dem π-System bei Addition vs. Substitution?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Hybridisierung der C-Atome in Acetylen (Ethin, HC≡CH)?",
          options: [
            "sp³ (tetraedrisch)",
            "sp² (trigonal planar)",
            "sp (linear)",
            "d²sp³ (oktaedrisch)",
            "sp³d (trigonal bipyramidal)",
          ],
          correctIndex: 2,
          explanation: "In Alkinen (C≡C) sind die beteiligten C-Atome sp-hybridisiert: zwei sp-Orbitale bilden lineare σ-Bindungen (180°), zwei unhybridisierte p-Orbitale bilden zwei π-Bindungen (die Dreifachbindung besteht aus 1 σ + 2 π). Die lineare Geometrie der sp-Hybridisierung erklärt die gestreckten Bindungswinkel (180°) in Alkinen.",
          hints: [
            "Dreifachbindung = sp-Hybridisierung",
            "sp = linear (180°), zwei p-Orbitale für zwei π-Bindungen",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Hückel-Regel: Welche der folgenden Verbindungen ist aromatisch?",
          options: [
            "Cyclobutadien (4 π-Elektronen)",
            "Benzol C₆H₆ (6 π-Elektronen)",
            "Cyclooctatetraen C₈H₈ (8 π-Elektronen)",
            "Cyclohexadien (4 π-Elektronen)",
            "Cyclopentadienyl-Kation (4 π-Elektronen)",
          ],
          correctIndex: 1,
          explanation: "Hückel-Regel: Aromatizität erfordert 4n+2 π-Elektronen (n = 0,1,2,...) in einem geschlossenen, planaren, konjugierten Ring. Benzol: 6 π-e⁻ = 4×1+2 → n=1 → aromatisch. Cyclobutadien: 4 π-e⁻ = 4×1 → antiaromatisch (destabilisiert). Cyclooctatetraen: 8 π-e⁻ = 4×2 → nicht aromatisch (weicht aus dem planaren Ring aus, nicht wirklich konjugiert).",
          hints: [
            "Hückel: 4n+2 π-Elektronen (n=0,1,2,...) = aromatisch",
            "4 oder 8 π-Elektronen = antiaromatisch oder nicht-aromatisch",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: "ch-12-02",
      title: "Funktionelle Gruppen",
      content: `## Alkohole (-OH)

Alkohole enthalten eine Hydroxylgruppe (-OH) am Kohlenstoffatom.

- **Primär (1°):** R-CH₂-OH (R = Alkylrest) — z. B. Methanol CH₃OH, Ethanol C₂H₅OH
- **Sekundär (2°):** R₂CH-OH — z. B. Isopropanol (2-Propanol)
- **Tertiär (3°):** R₃C-OH — z. B. tert-Butanol

**Reaktionen:** Oxidation von 1° → Aldehyd → Carbonsäure; 2° → Keton (nicht weiter oxidierbar mit milden Oxidationsmitteln). 3° nicht oxidierbar (kein H am C-OH). Eliminierung → Alken.

Ethanol ist amphiphil (OH polar, CH₂CH₃ unpolar). Biologisch: Leber oxidiert Ethanol via ADH (Alkohol-Dehydrogenase) → Acetaldehyd → Acetat.

## Aldehyde (-CHO)

Aldehyde haben die Formylgruppe -CHO am Ende der Kohlenstoffkette.

- Formaldehyd (Methanal) HCHO: Desinfektionsmittel, Konservierung
- Acetaldehyd (Ethanal) CH₃CHO: Zwischenprodukt des Ethanolabbaus

**Reaktion:** Oxidation zu Carbonsäure; Reaktion mit Tollens-Reagenz (Silberspiegel-Probe); Reduktion zu Alkohol.

## Ketone (-CO-)

Ketone haben eine Carbonylgruppe innerhalb der Kette: R-CO-R'.

- Aceton (Propanon) CH₃-CO-CH₃: Lösungsmittel, Ketonkörper
- Sind schwerer oxidierbar als Aldehyde (keine Fehling-Probe)

## Carbonsäuren (-COOH)

Carbonsäuren haben die Carboxylgruppe -COOH.

- Essigsäure (Ethansäure) CH₃COOH: pK_s = 4,75
- Propionsäure, Buttersäure (Fettsäuren), Oxalsäure (diprotisch)

**Reaktion:** Esterbindung (mit Alkohol + H⁺-Katalyse), Salzbildung, Reaktion mit Basen.

## Amine (-NH₂)

Amine haben eine Aminogruppe -NH₂ (primär), -NHR (sekundär), -NR₂ (tertiär).

- Methylamin CH₃NH₂: primäres Amin, basisch
- **Basische Eigenschaften:** R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻ (nimmt H⁺ auf)
- Biogen wichtig: GABA, Histamin, Dopamin, Adrenalin (alle enthalten -NH₂ oder -NH-)`,
      lernziele: [
        "Die wichtigsten funktionellen Gruppen (OH, CHO, CO, COOH, NH₂) benennen und ihre Eigenschaften beschreiben",
        "Primäre, sekundäre und tertiäre Alkohole unterscheiden und ihr Oxidationsverhalten erläutern",
        "Charakteristische Reaktionen der Carbonylverbindungen kennen",
      ],
      sections: [
        {
          heading: "Oxidationsleiter der Kohlenstoffverbindungen",
          text: "Die Kohlenstoffverbindungen können in einer Oxidationsleiter angeordnet werden, die mit zunehmender Oxidationszahl des C aufsteigt: Alkan (OZ C ≈ −2) → Alkohol (OZ C ≈ −1) → Aldehyd (OZ C = 0, primär) oder Keton → Carbonsäure (OZ C = +2) → CO₂ (OZ C = +4). Jeder Schritt ist eine Oxidation (H-Verlust oder O-Gewinn). In biologischen Systemen laufen diese Oxidationen mit NAD⁺/NADH oder FAD/FADH₂ als Elektronenakzeptoren ab. Beispiel: Ethanolabbau in der Leber: Ethanol (1°-Alkohol, ADH) → Acetaldehyd (ALDH) → Acetat (Essigsäure) → Acetyl-CoA (Citratzyklus). Ketone sind stabiler als Aldehyde gegenüber Oxidation.",
          merksatz: "Alkan → Alkohol → Aldehyd/Keton → Carbonsäure → CO₂ (Oxidationsleiter)",
        },
        {
          heading: "Amine — Basizität und klinische Relevanz",
          text: "Amine sind Lewis-Basen (freies Elektronenpaar am N) und Brønsted-Basen (können H⁺ aufnehmen). Basizität: tertiär ≈ sekundär > primär > NH₃ > Anilin (aromatisch, wegen Resonanzdelokalisierung des freien Elektronenpaars schwächste Base). In Körperflüssigkeiten sind viele Amine protoniert (R-NH₃⁺) — dies bestimmt ihre Verteilung. Für lipophile Medikamente gilt: Die unprotonierte Base (R-NH₂) kann Membranen durchqueren; die protonierte Form (R-NH₃⁺) ist gefangen. Bei saurem Urin-pH werden basische Amine (z.B. Amphetamin pK_a = 9,9) stärker protoniert und schneller ausgeschieden (ion trapping).",
          merksatz: "Amine: basisch (R-NH₂ + H⁺ → R-NH₃⁺); unprotoniert membrangängig",
        },
      ],
      merksätze: [
        "Alkohole: -OH; Oxidation: 1° → Aldehyd → COOH; 2° → Keton",
        "Aldehyd: -CHO, oxidierbar; Keton: -CO-, kaum oxidierbar",
        "Carbonsäuren: -COOH; Amine: -NH₂ (basisch, H⁺-Akzeptor)",
      ],
      klinischerBezug: "Acetongeruch bei Ketoazidose: Leber bildet Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) aus überschüssigem Acetyl-CoA bei Insulinmangel. Aceton (Keton, flüchtig) wird abgeatmet und riecht süßlich-fruchtig. Methanol-Vergiftung: ADH oxidiert Methanol → Formaldehyd (hochgiftig) → Ameisensäure → metabolische Azidose und Erblindung.",
      altfrage: {
        question: "Warum können tertiäre Alkohole nicht zu Aldehyden oder Ketonen oxidiert werden?",
        answer: "Bei der Oxidation eines Alkohols zu einem Aldehyd oder Keton muss ein H-Atom vom C-OH entfernt werden (zusammen mit dem O-H wird ein H₂ formal abgegeben). Bei tertiären Alkoholen (R₃C-OH) befindet sich kein H-Atom direkt am C-OH — daher kann diese Oxidation nicht stattfinden. Tertiäre Alkohole können nur unter drastischen Bedingungen oxidiert werden (z.B. zu Carbonsäuren durch Kettenbruch).",
      },
      selfTest: [
        {
          question: "Was entsteht bei der milden Oxidation eines primären Alkohols (z.B. Ethanol)?",
          options: [
            "Keton",
            "Carbonsäure (direkt)",
            "Aldehyd",
            "Alkan",
            "Alken",
          ],
          correctIndex: 2,
          explanation: "Primäre Alkohole (R-CH₂-OH) werden bei milder Oxidation zunächst zu Aldehyden (R-CHO) oxidiert. Bei starker Oxidation folgt die weitere Oxidation zum Carbonsäure (R-COOH). Ethanol → Acetaldehyd (ADH) → Acetat (ALDH). Sekundäre Alkohole → Ketone. Tertiäre Alkohole können nicht ohne weiteres oxidiert werden.",
          hints: [
            "Primär: R-CH₂-OH → mild oxidiert → R-CHO",
            "Erst Aldehyd, dann (stärker oxidiert) Carbonsäure",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche funktionelle Gruppe kennzeichnet Ketone?",
          options: [
            "-OH (Hydroxylgruppe)",
            "-CHO (Formylgruppe am Kettenende)",
            "-CO- (Carbonylgruppe innerhalb der Kette)",
            "-COOH (Carboxylgruppe)",
            "-NH₂ (Aminogruppe)",
          ],
          correctIndex: 2,
          explanation: "Ketone enthalten die Carbonylgruppe C=O innerhalb der Kohlenstoffkette (zwischen zwei C-Atomen): R-CO-R'. Bei Aldehyden steht die Carbonylgruppe am Kettenende (-CHO). Aceton (Propanon) CH₃-CO-CH₃ ist das einfachste Keton. Ketone sind schwerer oxidierbar als Aldehyde (keine Fehling-Probe positiv).",
          hints: [
            "Keton hat C=O IN der Kette, nicht am Ende",
            "Aldehyd: -CHO am Ende; Keton: -CO- in der Mitte",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was macht Amine basisch?",
          options: [
            "Das C-Atom im Amin gibt H⁺ ab",
            "Das freie Elektronenpaar am N-Atom nimmt H⁺ auf",
            "Amine enthalten OH-Gruppen",
            "Die N-H-Bindung ist polar und gibt OH⁻ ab",
            "Amine oxidieren Wasser",
          ],
          correctIndex: 1,
          explanation: "Amine (R-NH₂) sind Basen nach Brønsted-Lowry, weil das freie Elektronenpaar am Stickstoff H⁺ aufnehmen kann: R-NH₂ + H⁺ → R-NH₃⁺. N ist elektronegativer als C und H, hat aber ein freies Elektronenpaar (im Gegensatz zu O in Alkoholen, wo die O-H-Bindung polar ist aber das Gleichgewicht weniger auf Seite der Base liegt).",
          hints: [
            "Basen nehmen H⁺ auf — was hat N im Amin?",
            "Freies Elektronenpaar an N = Lewis-Base",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Reagenz erlaubt die Unterscheidung von Aldehyd und Keton (Aldehydnachweis)?",
          options: [
            "Bromwasser (Br₂/H₂O)",
            "Tollens-Reagenz (ammoniakalische AgNO₃-Lösung, Silberspiegel-Probe)",
            "Fehling-Lösung — beide reagieren positiv",
            "Natronlauge (NaOH) — beide reagieren gleich",
            "Salzsäure",
          ],
          correctIndex: 1,
          explanation: "Das Tollens-Reagenz (ammoniakalische AgNO₃-Lösung) ist spezifisch für Aldehyde: R-CHO reduziert Ag⁺ zu metallischem Ag (Silberspiegel an der Glaswand). Ketone reagieren nicht (nicht oxidierbar). Fehling-Lösung (Cu²⁺ → Cu₂O-Niederschlag) zeigt ebenfalls Aldehyde an (außer Benzaldehyd). Diese Tests sind klassische qualitative Nachweisreaktionen.",
          hints: [
            "Silberspiegel-Probe = Tollens-Reagenz",
            "Aldehyde oxidierbar → positiver Aldehydnachweis; Ketone nicht",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen primären, sekundären und tertiären Aminen?",
          options: [
            "Primär: 1 H, sekundär: 2 H, tertiär: 3 H am N",
            "Primär: 1 C-Substituent am N; sekundär: 2; tertiär: 3",
            "Primär: -NH₂; sekundär: -NHR; tertiär: -NR₂ (Anzahl der Alkylreste an N)",
            "Die Unterschiede beziehen sich auf die C-Kette, nicht auf N",
            "Primäre Amine sind Stickstoff-Atome ohne jede organische Bindung",
          ],
          correctIndex: 2,
          explanation: "Amine werden nach der Anzahl der organischen Reste (R) am Stickstoffatom klassifiziert: Primär (1°): R-NH₂ (ein Rest, zwei H am N), Sekundär (2°): R-NHR' (zwei Reste, ein H), Tertiär (3°): R-NR'R'' (drei Reste, kein H). Diese Klassifikation gilt analog zu Alkoholen (1°/2°/3°), aber die Zählweise bezieht sich hier auf das N-Atom.",
          hints: [
            "Grad des Amins = Anzahl der C-Reste am N",
            "NH₂ = primär; NHR = sekundär; NR₂ = tertiär",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: "ch-12-03",
      title: "Ester, Ether und Isomerie",
      content: `## Ester — Bildung und Hydrolyse

Ester entstehen durch Kondensationsreaktion (Veresterung) zwischen einer Carbonsäure (-COOH) und einem Alkohol (-OH) unter Abspaltung von Wasser (H₂O), katalysiert durch H⁺ (säurekatalysiert) oder Enzym (Lipase):

**R-COOH + HO-R' ⇌ R-COO-R' + H₂O**

- Die Esterbindung: -COO- (charakteristisch)
- Ester riechen oft fruchtig (Aromaten, Parfüm)
- Hydrolyse (Verseifung) des Esters unter Säure oder Lauge → Säure + Alkohol (basische Verseifung ist irreversibel)

**Fette als Triglyceride:** Glycerol (Propantriol) verestert mit drei Fettsäuren. Verseifung mit NaOH ergibt Seife (Na-Salze der Fettsäuren + Glycerol).

## Ether — R-O-R'

Ether haben die Struktur R-O-R' (zwei organische Reste an einem O-Atom).

- Diethylether (CH₃CH₂-O-CH₂CH₃): historisches Narkosemittel
- Ether sind chemisch wenig reaktiv (keine OH-Gruppe, kaum H-Brücken)
- Gut löslich für unpolare Substanzen, schlecht wasserlöslich
- Können Peroxide bilden (Explosionsgefahr beim Lagern)

## Konstitutionsisomerie

Konstitutionsisomere haben gleiche Summenformel, aber unterschiedliche Verknüpfung der Atome. Typen:
- **Kettenisomere** (z. B. n-Butan vs. Isobutan)
- **Stellungsisomere** (z. B. 1-Butanol vs. 2-Butanol)
- **Funktionsisomere** (z. B. Diethylether vs. 1-Butanol, beide C₄H₁₀O)

## Stereoisomerie

Stereoisomere haben gleiche Konstitution, aber unterschiedliche räumliche Anordnung.

- **cis/trans-Isomerie** (geometrische Isomerie): an C=C (Alkene) oder in Ringen. cis: gleiche Seite; trans: gegenüberliegende Seite. Natürliche ungesättigte Fettsäuren sind meist cis (z. B. Ölsäure 18:1 cis-Δ9).
- **Enantiomerie (R/S-Konfiguration):** Chirale Moleküle mit einem Stereozentrum (sp³-C mit 4 verschiedenen Gruppen). R und S sind Spiegelbilder (Enantiomere), nicht überlagbar. Drehung polarisierten Lichts: (+) und (−).
- **Chiralität:** L-Aminosäuren (S-Konfiguration bei den meisten) und D-Zucker (R-Konfiguration) sind in der Biologie die natürlichen Formen.`,
      lernziele: [
        "Esterbindung, Verseifung und Fettsäure-Glycerol-Ester (Triglyceride) erläutern",
        "Konstitutionsisomerie von Stereoisomerie unterscheiden und die Arten der Stereoisomerie benennen",
        "Chiralität und R/S-Konfiguration erklären sowie biologische Beispiele (L-Aminosäuren, D-Zucker) nennen",
      ],
      sections: [
        {
          heading: "Esterbildung und Verseifung",
          text: "Die Esterbindung (-COO-) entsteht durch Kondensation von Carbonsäure und Alkohol unter H₂O-Abspaltung. Diese Reaktion ist reversibel (Hydrolyse möglich) und wird durch Säure oder Lipase katalysiert. In der Biologie sind Ester überall: Triglyceride (Glycerol + 3 Fettsäuren), Phospholipide (Glycerol + 2 Fettsäuren + Phosphat, Esterbindung), Wachse, Steroide (Cholesterinester). Saure Hydrolyse ist reversibel, basische Verseifung (Saponifikation) ist irreversibel — das entstehende Carboxylat-Ion reagiert nicht zurück mit Alkohol. Seife (Na- oder K-Salz einer Fettsäure, amphiphil) entsteht durch alkalische Verseifung von Triglyceriden.",
          merksatz: "Veresterung: RCOOH + R'OH ⇌ RCOOR' + H₂O (reversibel)",
        },
        {
          heading: "Chiralität und biologische Bedeutung",
          text: "Ein Stereozentrum (asymmetrisches C-Atom) hat vier verschiedene Substituenten am sp³-C. Die CIP-Regel (Cahn-Ingold-Prelog) ordnet die Substituenten nach Priorität und bestimmt R (rectus, rechts) oder S (sinister, links). L-Aminosäuren haben S-Konfiguration (außer Cystein, das R ist wegen der SH-Gruppe mit höherer Priorität). D-Glucose und D-Galaktose sind R/R-Konfigurationen. Enantiomere (Spiegelbilder) haben gleiche physikalische Eigenschaften (außer optische Aktivität), aber unterschiedliche biologische Wirkungen: Thalidomid (Contergan) — R-Enantiomer: sedierend; S-Enantiomer: teratogen. L-Aminosäuren werden von Peptidasen gespalten, D-Aminosäuren kaum.",
          merksatz: "L-Aminosäuren, D-Zucker; Enantiomere: Spiegelbilder, unterschiedliche Biowirkung",
        },
      ],
      merksätze: [
        "Ester: R-COO-R', aus RCOOH + R'OH (Kondensation)",
        "Ether: R-O-R', inert; Narkosemittel (Diethylether)",
        "Chiralität: 4 versch. Gruppen am sp³-C → R oder S-Konfiguration",
      ],
      klinischerBezug: "Aspirin (Acetylsalicylsäure) enthält eine Esterbindung (Acetylgruppe). Es hydrolysiert langsam im Körper zu Salicylsäure und Essigsäure. Die Acetylierung der COX-1/2 durch die Estergruppe ist irreversibel — daher hemmt Aspirin Thrombozyten dauerhaft (keine Neusynthese möglich in kernlosen Thrombozyten).",
      altfrage: {
        question: "Was ist Chiralität und warum ist sie biologisch bedeutsam?",
        answer: "Ein chirales Molekül ist nicht mit seinem Spiegelbild deckungsgleich (nicht superimponierbar). Ursache: ein Stereozentrum (sp³-C mit vier verschiedenen Gruppen). Biologisch bedeutsam, weil Enzyme, Rezeptoren und Transporter stereoselektiv sind — sie erkennen meist nur einen Enantiomer. L-Aminosäuren und D-Zucker sind die biologisch aktiven Formen. Das Thalidomid-Beispiel zeigt: Enantiomere können unterschiedliche, auch toxische Wirkungen haben.",
      },
      selfTest: [
        {
          question: "Was entsteht bei der alkalischen Verseifung (Saponifikation) eines Triglycerids?",
          options: [
            "Drei Estermoleküle + Wasser",
            "Glycerol + drei Fettsäure-Anionen (Seife) + NaOH",
            "Glycerol + drei Fettsäure-Anionen (Seife) — NaOH wird verbraucht",
            "Drei freie Fettsäuren + Glycerol (reversibel)",
            "Phospholipide + Glycerol",
          ],
          correctIndex: 2,
          explanation: "Bei der alkalischen Verseifung (Saponifikation) hydrolysiert NaOH die Esterbindungen im Triglycerid: Triglycerid + 3 NaOH → Glycerol + 3 Fettsäure-Na-Salze (Seife). Die Reaktion ist irreversibel (da das Carboxylat-Anion nicht mit Alkohol rückverestert). NaOH wird dabei verbraucht. Die entstehenden Na-Fettsäuresalze sind Seifen (amphiphil).",
          hints: [
            "Triglycerid = Glycerol + 3 Fettsäuren (Ester)",
            "Alkalische Verseifung ist irreversibel — Carboxylat-Anion entsteht",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Sind Butanol (C₄H₉OH) und Diethylether (C₂H₅-O-C₂H₅) Isomere?",
          options: [
            "Nein, sie haben unterschiedliche Summenformeln",
            "Ja, sie sind Stereoisomere",
            "Ja, sie sind Konstitutionsisomere (Funktionsisomere) mit gleicher Formel C₄H₁₀O",
            "Ja, sie sind Enantiomere",
            "Nein, nur Verbindungen gleicher Klasse können Isomere sein",
          ],
          correctIndex: 2,
          explanation: "1-Butanol (C₄H₉OH) und Diethylether (C₂H₅-O-C₂H₅) haben beide die Summenformel C₄H₁₀O, aber unterschiedliche funktionelle Gruppen (Alkohol vs. Ether) und unterschiedliche Verknüpfung. Sie sind Konstitutionsisomere — genauer: Funktionsisomere. Sie haben sehr unterschiedliche chemische Eigenschaften (Butanol: H-Brücken, Sdp. 118 °C; Ether: kein H-Brücken, Sdp. 35 °C).",
          hints: [
            "Isomere: gleiche Summenformel, verschiedene Struktur",
            "C₄H₁₀O: zähle C, H, O für beide",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Natürliche ungesättigte Fettsäuren (z.B. Ölsäure) haben überwiegend welche Konfiguration?",
          options: [
            "trans (wie in trans-Fettsäuren aus partieller Hydrierung)",
            "cis (Doppelbindung biegt die Kette, Abstand geringer)",
            "R-Konfiguration an der Doppelbindung",
            "S-Konfiguration an der Doppelbindung",
            "Keine definierte Konfiguration",
          ],
          correctIndex: 1,
          explanation: "Natürliche ungesättigte Fettsäuren haben überwiegend cis-Konfiguration an den Doppelbindungen. Ölsäure: 18:1 cis-Δ9 (cis-Doppelbindung an Position 9). Durch die cis-Konfiguration biegt sich die Kette, was die Packung in Membranen lockert → Membranfluidität. Trans-Fettsäuren (aus industrieller partieller Hydrierung) sind geradliniger, erhöhen LDL-Cholesterol und Herzerkrankungsrisiko.",
          hints: [
            "cis = gleiche Seite (knickt die Kette ein)",
            "Natürliche Fettsäuren: cis; industriell: häufig trans",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist ein Stereozentrum (asymmetrisches C-Atom)?",
          options: [
            "Ein sp²-hybridisiertes C mit einer Doppelbindung",
            "Ein sp³-C-Atom mit vier verschiedenen Substituenten",
            "Ein C-Atom an dem Ringschluss erfolgt",
            "Ein C-Atom in aromatischen Verbindungen",
            "Ein C-Atom mit drei gleichen und einem anderen Substituenten",
          ],
          correctIndex: 1,
          explanation: "Ein Stereozentrum ist ein sp³-hybridisiertes Kohlenstoffatom, das vier verschiedene Substituenten trägt. Die tetraedrische Anordnung der vier verschiedenen Gruppen kann auf zwei nicht überlagbare Weisen erfolgen → R und S-Konfiguration (Enantiomere). Wenn zwei von vier Substituenten gleich sind, ist das C-Atom kein Stereozentrum und kein Chiralitätszentrum.",
          hints: [
            "Vier VERSCHIEDENE Gruppen an sp³-C",
            "Zwei gleiche Gruppen = kein Stereozentrum",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aussage über Enantiomere ist korrekt?",
          options: [
            "Enantiomere haben unterschiedliche Schmelzpunkte",
            "Enantiomere sind in gleichen achialen Lösungsmitteln gleich löslich und drehen polarisiertes Licht entgegengesetzt",
            "Enantiomere reagieren mit achiralen Reagenzien unterschiedlich",
            "Enantiomere haben immer unterschiedliche biologische Wirkungen",
            "Enantiomere sind durch Kristallisation leicht trennbar",
          ],
          correctIndex: 1,
          explanation: "Enantiomere haben in achiralen Medien identische physikalische Eigenschaften (gleicher Sdp., Schmp., Löslichkeit) — außer der optischen Aktivität: Sie drehen polarisiertes Licht gleich stark, aber in entgegengesetzte Richtungen ((+) bzw. (−)-Isomere). In chiralen Umgebungen (chirale Stationärphase, Enzyme, Rezeptoren) verhalten sich Enantiomere unterschiedlich. Biologische Wirkungen können gleich, unterschiedlich oder entgegengesetzt sein.",
          hints: [
            "Enantiomere = Spiegelbilder; gleiche physikalische Eigenschaften (außer Lichtdrehung)",
            "Optische Aktivität: dreht polarisiertes Licht entgegengesetzt",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: "ch-12-04",
      title: "Amine und ihre biologische Bedeutung",
      content: `## Biogene Amine

Biogene Amine entstehen enzymatisch durch Decarboxylierung von Aminosäuren (Decarboxylase) oder anderen Stoffwechselwegen. Biologisch hochaktive Verbindungen:

- **Histamin** (aus Histidin, Mastzellen): Entzündungsmediator, Vasodilatation, Magensäuresekretion (H2-Rezeptor), Allergie
- **Serotonin** (aus Tryptophan, EC-Zellen im Darm, Neuronen): Stimmung, Schlaf, GI-Motilität, Blutgerinnung
- **Dopamin** (aus Tyrosin, Substantia nigra): Belohnung, Motorik (Mangel → Parkinson)
- **Adrenalin (Epinephrin)** (aus Dopamin, Nebennierenmark): Stresshormon, β₁/β₂/α₁-Agonist (Herzfrequenz↑, Bronchodilatation, Vasokonstriktion)
- **GABA** (γ-Aminobuttersäure, aus Glutamat): wichtigster inhibitorischer Neurotransmitter
- **Acetylcholin** (kein Amin, aber aminoähnlich): Neurotransmitter an NMJ und parasympathisch

## Aminosäuren — Struktur und Eigenschaften

Die 20 proteinogenen Aminosäuren sind **α-Aminosäuren:** NH₂ und COOH am selben C-Atom (α-C), plus Seitenkette R:

**H₂N-CH(R)-COOH**

Alle sind chiral (außer Glycin, R = H), fast alle haben **L-Konfiguration**.

Klassifikation nach Seitenkette R:
- Unpolar/hydrophob: Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met
- Polar/neutral: Ser, Thr, Cys, Tyr, Asn, Gln
- Sauer (negativ bei pH 7): Asp (pK_R = 3,9), Glu (pK_R = 4,1)
- Basisch (positiv bei pH 7): Lys (pK_R = 10,5), Arg (pK_R = 12,5), His (pK_R = 6,0)

## Peptidbindung und Amidbindung

Die Peptidbindung entsteht durch Kondensation der NH₂-Gruppe einer Aminosäure mit der COOH-Gruppe einer anderen:

**-CO-NH-** (Peptidbindung = Amidbindung)

Eigenschaften der Peptidbindung:
- Partieller Doppelbindungscharakter (Resonanz N-C=O ↔ N⁺=C-O⁻)
- Planar (alle 4 Atome N-C-C=O in einer Ebene)
- Überwiegend trans-Konfiguration (R-Gruppen auf entgegengesetzter Seite)
- Nicht frei drehbar um die C-N-Bindung

## Isoelektrischer Punkt (pI)

Der isoelektrische Punkt pI ist der pH, bei dem eine Aminosäure (oder ein Protein) nach außen neutral ist (gleich viele positive und negative Ladungen).

**pI ≈ ½ (pK_s1 + pK_s2)** (für einfache Aminosäuren)

Bei pH < pI: Aminosäure positiv geladen; bei pH > pI: negativ geladen.`,
      lernziele: [
        "Wichtige biogene Amine (Histamin, Serotonin, Dopamin, Adrenalin) und ihre biologische Funktion nennen",
        "Die Struktur von α-Aminosäuren erläutern und nach Seitenkette klassifizieren",
        "Die Peptidbindung in ihren Eigenschaften (planar, trans, partieller DB-Charakter) beschreiben",
      ],
      sections: [
        {
          heading: "Katecholamine — Biosynthese und klinische Bedeutung",
          text: "Katecholamine (Dopamin, Noradrenalin, Adrenalin) entstehen aus der aromatischen Aminosäure Tyrosin. Biosynthese: Tyrosin → DOPA (durch Tyrosinhydroxylase, geschwindigkeitsbestimmend) → Dopamin (DOPA-Decarboxylase) → Noradrenalin (Dopamin-β-Hydroxylase) → Adrenalin (PNMT in Nebennierenmark). Dopaminmangel in der Substantia nigra → Parkinson (L-DOPA als Therapie). Adrenalin und Noradrenalin: Stressreaktion (fight or flight), Herzfrequenz↑, Blutdruck↑, Bronchien↑, Lipolyse↑. Abbau durch MAO (Monoaminooxidase) und COMT. MAO-Hemmer → ↑Serotonin, Dopamin, Noradrenalin → Antidepressivum.",
          merksatz: "Tyrosin → Dopamin → Noradrenalin → Adrenalin (Katecholamin-Synthese)",
        },
        {
          heading: "Isoelektrischer Punkt und Elektrophorese",
          text: "Der isoelektrische Punkt pI bestimmt das Ladungsverhalten von Aminosäuren und Proteinen bei verschiedenen pH-Werten. Bei pH = pI ist die Nettoladung null (Zwitterion). Für Aminosäuren ohne ionisierbare Seitenkette gilt: pI = ½(pK_s(NH₃⁺) + pK_s(COOH)) ≈ ½(9,2 + 2,2) = 5,7 (Glycin: pI = 5,97). Für saure Aminosäuren (Asp, Glu) liegt pI niedriger (um 3), für basische (Lys, Arg) höher (um 9–10). Bei der Gelelektrophorese wandern Proteine im elektrischen Feld: Bei pH = pI stehen sie still, bei pH > pI wandern sie zur Anode (negativ), bei pH < pI zur Kathode (positiv). Die isoelektrische Fokussierung trennt Proteine nach pI.",
          merksatz: "pI ≈ ½(pK1 + pK2); bei pI: netto neutral (Zwitterion)",
        },
      ],
      merksätze: [
        "Biogene Amine: Histamin (Entzündung), Serotonin (Stimmung), Dopamin (Motorik), Adrenalin (Stress)",
        "Peptidbindung: -CO-NH-, planar, trans, partieller Doppelbindungscharakter",
        "pI: pH mit Nettoladung null; pH < pI → positiv, pH > pI → negativ",
      ],
      klinischerBezug: "Antihistaminika (H1-Blocker wie Cetirizin, H2-Blocker wie Ranitidin): H1-Blocker bei Allergien, H2-Blocker bei Ulkus (hemmen Magensäuresekretion). SSRI (selektive Serotonin-Rückaufnahme-Hemmer, z.B. Fluoxetin) erhöhen synaptisches Serotonin → Antidepressivum. Levodopa (L-DOPA) überquert die Blut-Hirn-Schranke (Aminosäuretransporter) und wird zu Dopamin → Therapie des Parkinson.",
      altfrage: {
        question: "Warum hat die Peptidbindung partiellen Doppelbindungscharakter?",
        answer: "Das freie Elektronenpaar des Stickstoff-Atoms in der Peptidbindung (-CO-NH-) kann mit der C=O-Gruppe eine Resonanzstruktur bilden: -CO-NH- ↔ -C⁻O⁻-N⁺H-. Durch diese Resonanz hat die C-N-Bindung partiellen Doppelbindungscharakter (Bindungslänge zwischen Einfach- und Doppelbindung, 0,132 nm statt 0,147 nm für C-N-Einfachbindung). Dies macht die Bindung starr und planar — keine freie Rotation.",
      },
      selfTest: [
        {
          question: "Aus welcher Aminosäure wird Histamin durch Decarboxylierung gebildet?",
          options: [
            "Tyrosin",
            "Tryptophan",
            "Histidin",
            "Arginin",
            "Lysin",
          ],
          correctIndex: 2,
          explanation: "Histamin entsteht durch Decarboxylierung von Histidin (Histidin-Decarboxylase). Histidin hat einen Imidazolring als Seitenkette (pK_R ≈ 6,0), Histamin enthält ebenfalls diesen Ring. Histamin wirkt als Gewebshormon: H1-Rezeptoren (Entzündung, Allergie, Bronchospasmus), H2-Rezeptoren (Magensäuresekretion), H3-Rezeptoren (Neurotransmitter im ZNS).",
          hints: [
            "His-tamin enthält 'His' → Histidin",
            "Biogene Amine entstehen durch Decarboxylierung der entsprechenden Aminosäure",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage über die Peptidbindung ist FALSCH?",
          options: [
            "Die Peptidbindung ist eine Amidbindung (-CO-NH-)",
            "Die Peptidbindung hat partiellen Doppelbindungscharakter durch Resonanz",
            "Die Peptidbindung ist planar (alle 4 Atome in einer Ebene)",
            "Die Peptidbindung ist eine freie C-N-Einfachbindung mit freier Rotation",
            "Peptidbindungen nehmen überwiegend trans-Konfiguration ein",
          ],
          correctIndex: 3,
          explanation: "Die Peptidbindung hat KEINEN freien Drehbarkeitscharakter — sie ist durch den partiellen Doppelbindungscharakter (Resonanz C=O ↔ C-N⁺) planar und in der Rotation eingeschränkt. Der planare Charakter ist fundamental für die Proteinstruktur (α-Helix, β-Faltblatt). Die Rotation ist nur um die Bindungen N-Cα (Phi) und Cα-CO (Psi) möglich, nicht um die C-N-Peptidbindung selbst.",
          hints: [
            "Peptidbindung: partieller Doppelbindungscharakter = eingeschränkte Rotation",
            "Was gilt für C=C in Alkenen? Freie Rotation oder nicht?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Protein hat pI = 5,0. Welche Nettoladung hat es bei pH 7?",
          options: [
            "Positiv geladen",
            "Neutral (keine Nettoladung)",
            "Negativ geladen",
            "Alternierend positiv und negativ",
            "Keine Ladung möglich",
          ],
          correctIndex: 2,
          explanation: "Bei pH > pI ist die Nettoladung eines Proteins negativ. pI = 5,0 bedeutet: Bei pH 5 ist das Protein neutral. Bei pH 7 (> pI = 5) haben mehr Gruppen abgegeben als aufgenommen → überwiegende negative Ladung (Carboxylgruppen deprotoniert: -COO⁻, Aminogruppen können je nach pK_R protoniert oder neutral sein). Bei der Elektrophorese würde das Protein zur Anode (positiv) wandern.",
          hints: [
            "pH > pI → mehr negative Ladungen als positive → Nettolarung negativ",
            "pH < pI → positiv; pH = pI → neutral; pH > pI → negativ",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Aminosäure hat eine basische Seitenkette (pK_R > 7)?",
          options: [
            "Aspartat (Asp, pK_R = 3,9)",
            "Glutamat (Glu, pK_R = 4,1)",
            "Serin (Ser, neutral)",
            "Lysin (Lys, pK_R = 10,5)",
            "Glycin (Gly, keine ionisierbare Seitenkette)",
          ],
          correctIndex: 3,
          explanation: "Lysin hat eine ε-Aminogruppe (-NH₂ in der Seitenkette) mit pK_R = 10,5. Bei physiologischem pH 7,4 ist die Seitenkette vollständig protoniert (-NH₃⁺) → positive Ladung. Weitere basische Aminosäuren: Arginin (pK_R = 12,5, Guanidiniogruppe) und Histidin (pK_R = 6,0, Imidazol — bei pH 7,4 hauptsächlich unprotoniert, aber nahe am Physiologischen).",
          hints: [
            "Basisch = pK_R > 7; trägt bei physiologischem pH positive Ladung",
            "Lys, Arg, His sind die drei basischen Aminosäuren",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was bewirkt Dopaminmangel in der Substantia nigra?",
          options: [
            "Depression (Stimmungsmangel)",
            "Parkinson-Syndrom (Tremor, Rigor, Akinese)",
            "Schizophrenie (überschüssiges Dopamin)",
            "Alzheimer-Demenz",
            "Epilepsie",
          ],
          correctIndex: 1,
          explanation: "Dopaminerge Neurone der Substantia nigra (SN) projizieren in das Striatum (Nigrostriatale Bahn) und kontrollieren Motorik. Degenerieren über 60 % der dopaminergen Neuronen in der SN, entsteht das Parkinson-Syndrom: Tremor (Ruhetremor), Rigor (Muskelsteifigkeit), Akinese (Bewegungsarmut). Therapie: L-DOPA (Vorstufe von Dopamin, überquert Blut-Hirn-Schranke, wird zu Dopamin umgewandelt). Schizophrenie ist mit Überaktivität des dopaminergen Systems assoziiert.",
          hints: [
            "Dopamin in der Substantia nigra → Motorik",
            "L-DOPA ist die Therapie — warum kein direktes Dopamin?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
