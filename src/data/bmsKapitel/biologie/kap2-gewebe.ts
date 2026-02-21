import type { Kapitel } from '../types';

export const bioKap2: Kapitel = {
  id: 'bio-kap2',
  title: "Gewebe",
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'bio-2-01',
      title: "Epithelgewebe — Formen, Schichtungen und Funktionen",
      content: `# Epithelgewebe — Formen, Schichtungen und Funktionen

## Einleitung

**Epithelgewebe** (Epithelien) sind flächenhafte Zellverbände, die alle inneren und äußeren Körperoberflächen auskleiden. Sie bedecken die Haut, kleiden Hohlorgane aus und bilden Drüsen. Charakteristisch ist ihre **Polarität**: Die apikale Seite zeigt zum Lumen oder zur Außenwelt, die basale Seite liegt der **Basalmembran** auf. Epithelien sind **avaskulär** — ihre Versorgung erfolgt durch Diffusion aus dem darunter liegenden Bindegewebe. Epithelien regenerieren sich schnell, da Stammzellen in der Basalschicht proliferieren.

## Klassifikation

Epithelien werden nach **Form** und **Schichtung** eingeteilt. Nach Form unterscheidet man Plattenepithel (flache Zellen), kubisches Epithel (würfelförmig) und Zylinderepithel (säulenförmig). Nach Schichtung gibt es einschichtiges, mehrreihiges (pseudostratifiziertes) und mehrschichtiges Epithel.

**Einschichtiges Plattenepithel** findet sich als Endothel in Blutgefäßen und als Mesothel in Körperhöhlen — es ermöglicht rasche Diffusion. **Einschichtiges Zylinderepithel** kleidet den Dünndarm aus; apikale Mikrovilli (Bürstensaum) vergrößern die Resorptionsfläche enorm. Das **mehrreihige Flimmerepithel** in Trachea und Bronchien trägt Kinozilien (9+2-Struktur), die zusammen mit Becherzellen für die mukoziliäre Clearance sorgen.

**Mehrschichtiges verhorntes Plattenepithel** bildet die Epidermis; keratingefüllte Korneozyten bilden die äußere Schutzschicht. **Übergangsepithel (Urothel)** in Harnblase und Ureteren kann sich dehnen: Bei Blasenfüllung flachen die obersten Zellen (Schirmzellen) ab.

## Drüsenepithel

**Exokrine Drüsen** leiten ihr Sekret über Ausführungsgänge nach außen (z. B. Speicheldrüsen, Schweißdrüsen). **Endokrine Drüsen** sezernieren Hormone direkt ins Blut (z. B. Schilddrüse, Nebenniere). Nach Sekretionsmechanismus unterscheidet man merokrine (Exozytose, z. B. Pankreas), apokrine (Membranabschnürung, z. B. Schweißdrüsen) und holokrine Sekretion (Zellzerfall, z. B. Talgdrüsen).

## Zellkontakte

**Tight Junctions** (Zonulae occludentes) versiegeln den Interzellularspalt apikal, verhindern parazelluläre Diffusion und trennen apikale von basolateraler Membranzone. **Adherens Junctions** und **Desmosomen** vermitteln mechanischen Zusammenhalt. **Gap Junctions** ermöglichen direkten Ionenaustausch zwischen Zellen (wichtig für Herzmuskel, glatte Muskulatur). **Hemidesmosomen** verankern die basale Zellmembran an der Basalmembran (Integrin → Laminin/Kollagen IV).

## Klinische Bedeutung

Karzinome (Krebserkrankungen) entstehen zu ca. 85 % aus Epithelgewebe. Die Zilienstruktur ist bei **Primärer Ziliendy­skinesie** (Kartagener-Syndrom) gestört: Betroffene leiden unter chronischen Atemwegsinfektionen, Infertilität und Situs inversus. Defekte in Hemidesmosomen (z. B. Bullöses Pemphigoid) führen zu blasenbildenden Autoimmundermatosen.`,
      lernziele: [
        "Epitheltypen nach Form und Schichtung benennen und ihren Vorkommen zuordnen",
        "Polarität des Epithels, Basalmembran und wichtige Zellkontakte erklären",
        "Drüsentypen nach Sekretionsmechanismus unterscheiden und klinische Beispiele nennen",
      ],
      sections: [
        {
          heading: "Einschichtige Epithelien im Überblick",
          text: "Einschichtige Epithelien besitzen nur eine Zelllage; alle Zellen berühren die Basalmembran. Einschichtiges Plattenepithel (Endothel, Mesothel) erlaubt rasche Diffusion. Einschichtiges kubisches Epithel findet sich in Schilddrüsenfollikeln und Nierentubuli. Einschichtiges Zylinderepithel kleidet den Dünndarm und Magen aus — Mikrovilli des Dünndarms erhöhen die Resorptionsfläche auf ca. 200 m². Das mehrreihige Flimmerepithel der Atemwege ist zwar einschichtig (alle Zellen auf Basalmembran), erscheint aber durch versetzt angeordnete Kerne mehrschichtig (pseudostratifiziert). Kinozilien (Länge ca. 6 µm, 9+2-Axonemstruktur) schlagen rhythmisch und transportieren Schleim mit eingeschlossenen Partikeln rachenwärts.",
          merksatz: "Pseudostratifiziert = alle Zellen auf Basalmembran, aber Kerne auf verschiedenen Höhen.",
        },
        {
          heading: "Mehrschichtige Epithelien und Übergangsepithel",
          text: "Mehrschichtiges verhorntes Plattenepithel (Epidermis) schützt mechanisch: Stratum basale (Stammzellen, Mitose) → Stratum spinosum (Desmosomen) → Stratum granulosum (Keratohyalin) → Stratum corneum (tote Korneozyten, Keratin). Mehrschichtiges unverhorntes Plattenepithel (Ösophagus, Vagina) bleibt feucht; Kerne bleiben in obersten Schichten erhalten. Das Urothel der Harnblase ist ein Sonderfall: Bei leerer Blase sind die Schirmzellen kuppelförmig gewölbt; bei Dehnung flachen sie ab, die Uroplakin-reiche Membran faltet sich aus Vesikeln ein — das Epithel verdünnt sich, ohne zu reißen.",
          merksatz: "Verhorntes Plattenepithel (Haut) = Schutz; Urothel = Dehnbarkeit durch Schirmzellen.",
        },
        {
          heading: "Tight Junctions und Barrierefunktion",
          text: "Tight Junctions (Zonulae occludentes) bestehen aus transmembranen Proteinen (Claudine, Occludin), die den apikalen Interzellularspalt vollständig verschließen. Sie erfüllen zwei Aufgaben: Erstens verhindern sie den parazellulären Transport (Barriere), zweitens teilen sie die Plasmamembran in einen apikalen und basolateralen Abschnitt (Fence-Funktion). Dadurch können Transporter (z. B. SGLT1 apikal, GLUT2 basolateral) gezielt für gerichtete Resorption sortiert werden. Im Darm, in den Nierentubuli und in der Blut-Hirn-Schranke sind besonders dichte Tight Junctions essentiell. Störungen (z. B. Zonulin bei Zöliakie) erhöhen die intestinale Permeabilität ('leaky gut').",
          merksatz: "Tight Junctions = apikal, verschließen Interzellularspalt, ermöglichen gerichteten Transport.",
        },
      ],
      merksätze: [
        "Epithelien sind polar, avaskulär und sitzen auf einer Basalmembran.",
        "Klassifikation nach Form (Platten, kubisch, zylindrisch) UND Schichtung (ein- vs. mehrschichtig).",
        "Tight Junctions versiegeln apikal; Desmosomen halten mechanisch zusammen.",
      ],
      altfrage: {
        question: "Welches Epithel kleidet die Trachea aus und welche Funktion erfüllt es?",
        answer: "Mehrreihiges (pseudostratifiziertes) Flimmerepithel mit Kinozilien und Becherzellen. Die Kinozilien transportieren Schleimfilm mit eingeschlossenen Fremdpartikeln rachenwärts (mukoziliäre Clearance).",
      },
      klinischerBezug: "Bei Kartagener-Syndrom (Primäre Ziliendyskinesie) sind die Dynein-Arme der Kinozilien defekt — Betroffene leiden unter chronischer Bronchitis, Bronchiektasen, Infertilität und häufig Situs inversus. Karzinome entstehen zu ca. 85 % aus entartetem Epithelgewebe.",
      selfTest: [
        {
          question: "Welche Aussage über Tight Junctions ist korrekt?",
          options: [
            "Sie verbinden Epithelzellen basal mit der Basalmembran.",
            "Sie ermöglichen direkten Ionenaustausch zwischen benachbarten Zellen.",
            "Sie versiegeln den apikalen Interzellularspalt und trennen apikale von basolateraler Membrandom­äne.",
            "Sie bestehen hauptsächlich aus Kollagen Typ IV.",
            "Sie sind nur in mehrschichtigen Epithelien zu finden.",
          ],
          correctIndex: 2,
          explanation: "Tight Junctions (Claudine, Occludin) schließen den Interzellularspalt apikal und wirken als Fence, der apikale und basolaterale Membranproteine voneinander trennt. Gap Junctions (nicht Tight Junctions) ermöglichen Ionenaustausch; Hemidesmosomen verankern Zellen an der Basalmembran.",
          hints: [
            "Denk an die Lage: Tight Junctions sitzen ganz oben, apikal — was sperren sie ab?",
            "Der Begriff 'Fence-Funktion' beschreibt, was sie zusätzlich zur Barriere leisten.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welches Epithel findet sich in der Harnblase und ermöglicht deren Dehnung?",
          options: [
            "Mehrschichtiges verhorntes Plattenepithel",
            "Einschichtiges Zylinderepithel mit Mikrovilli",
            "Mehrreihiges Flimmerepithel",
            "Übergangsepithel (Urothel) mit Schirmzellen",
            "Einschichtiges kubisches Epithel",
          ],
          correctIndex: 3,
          explanation: "Das Urothel besitzt Schirmzellen, die sich bei Blasenfüllung abflachen und deren Uroplakin-reiche Membran aus intrazellulären Vesikeln eingefaltet wird. So kann die Harnblase ihr Volumen stark vergrößern, ohne zu reißen.",
          hints: [
            "Welches Epithel hat seinen Namen von der Funktion 'Übergang' zwischen verschiedenen Dehnungszuständen?",
            "Die obersten Zellen dieses Epithels sind charakteristisch gewölbt und haben einen eigenen Namen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Arzt untersucht ein Gewebe: Die Zellen sind säulenförmig, sitzen auf einer Basalmembran und tragen apikale Mikrovilli. In welchem Organ befindet man sich wahrscheinlich?",
          options: [
            "Trachea",
            "Harnblase",
            "Dünndarm",
            "Epidermis der Haut",
            "Ösophagus",
          ],
          correctIndex: 2,
          explanation: "Einschichtiges Zylinderepithel mit apikalen Mikrovilli (Bürstensaum) ist typisch für den Dünndarm. Die Mikrovilli erhöhen die Resorptionsfläche massiv. Die Trachea hat Flimmerepithel; Harnblase hat Urothel; Haut hat verhorntes Plattenepithel; Ösophagus hat unverhorntes Plattenepithel.",
          hints: [
            "Mikrovilli = Bürstensaum — welches Organ ist für Resorption von Nährstoffen spezialisiert?",
            "Säulenförmige Zellen + Mikrovilli + einschichtig: Das ist das Paradebeispiel eines Resorptionsepithels.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was kennzeichnet ein 'mehrreihiges' (pseudostratifiziertes) Epithel gegenüber einem echten mehrschichtigen Epithel?",
          options: [
            "Mehrere Zelllagen liegen übereinander, nur die unterste berührt die Basalmembran.",
            "Alle Zellen berühren die Basalmembran, aber die Kerne liegen auf verschiedenen Höhen.",
            "Es ist nur in Drüsen zu finden.",
            "Die Zellen sind immer verhornt.",
            "Es trägt ausschließlich Mikrovilli, keine Zilien.",
          ],
          correctIndex: 1,
          explanation: "Beim pseudostratifizierten Epithel berühren alle Zellen die Basalmembran (einschichtig!), aber da die Kerne auf unterschiedlichen Höhen liegen, sieht es unter dem Mikroskop mehrschichtig aus. Ein echtes mehrschichtiges Epithel hat mehrere Zelllagen, von denen nur die unterste die Basalmembran berührt.",
          hints: [
            "'Pseudo' bedeutet 'scheinbar' — was ist der scheinbare Eindruck, und was ist die Realität?",
            "Die entscheidende Frage ist: Welche Zellen berühren die Basalmembran?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Sekretionsmechanismus ist charakteristisch für Talgdrüsen?",
          options: [
            "Merokrin (Exozytose ohne Zellverlust)",
            "Apokrin (Abschnürung des apikalen Zytoplasmas)",
            "Holokrin (Zerfall der gesamten Sekretionszelle)",
            "Endokrin (Abgabe ins Blut)",
            "Parakrin (Abgabe in den Interzellularspalt)",
          ],
          correctIndex: 2,
          explanation: "Talgdrüsen sezernieren holokrin: Die gesamte Zelle füllt sich mit Lipiden und zerfällt dann — das Sekret (Talg/Sebum) ist der Zellinhalt selbst. Merokrine Sekretion (Exozytose) ist der häufigste Mechanismus (Speicheldrüsen, Pankreas). Apokrin (Membranabschnürung) findet sich z. B. in bestimmten Schweißdrüsen.",
          hints: [
            "'Holo-' bedeutet 'ganz' — was passiert mit der gesamten Zelle?",
            "Denke an den Talg: Er ist sehr öl-reich. Wie könnte eine Zelle so viel Lipid abgeben?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-2-02',
      title: "Binde- und Stützgewebe — Kollagen, Knochen und Knorpel",
      content: `# Binde- und Stützgewebe — Kollagen, Knochen und Knorpel

## Einleitung

**Bindegewebe** ist das vielfältigste Gewebe des Körpers. Im Gegensatz zu Epithelgewebe besteht es zu einem großen Teil aus **extrazellulärer Matrix (EZM)** — ein Gerüst aus Fasern und Grundsubstanz, in das Zellen eingebettet sind. Das Bindegewebe verbindet, stützt und ernährt andere Gewebe; es ist reichlich vaskularisiert. Man unterscheidet **lockeres Bindegewebe** (viele Zellen, wenige Fasern, füllt Räume), **straffes Bindegewebe** (viele Fasern, wenige Zellen, mechanische Belastung), **Fettgewebe**, **Knorpel** und **Knochen**.

## Kollagen — das häufigste Protein des Körpers

**Kollagen** ist das häufigste Strukturprotein (ca. 30 % des Gesamtproteins). Es bildet rechtsgedrehte Tripelhelices aus drei Polypeptidketten (Gly-X-Y-Wiederholungen). Es gibt über 28 Kollagentypen, von denen drei für den MedAT zentral sind:

- **Kollagen Typ I:** Häufigster Typ. Dicke Fibrillen. Vorkommen: Knochen, Sehnen, Haut, Kornea. Zugfest.
- **Kollagen Typ II:** Dünne Fibrillen. Vorkommen: Hyalinknorpel, Gelenkknorpel. Druckresistent.
- **Kollagen Typ III:** Dünne Fibrillen (Retikulinfasern). Vorkommen: Embryonales Bindegewebe, Wundheilung, Wände von Blutgefäßen und Darm. Elastisch.

Kollagensynthese: Fibroblasten → Pre-Prokollagen (raues ER) → Prokollagen (Golgi, Hydroxylierung von Pro/Lys via Vitamin C) → Tripelhelix (extrazellulär) → Fibrillen.

## Knorpel

Knorpel ist **avaskulär** (Ernährung via Diffusion) und besitzt keine Nerven. Die einzigen Zellen sind **Chondrozyten** (in Lakunen). Die EZM enthält Kollagen und Proteoglykane (Aggrekan bindet Wasser → Druckresistenz).

- **Hyalinknorpel:** Kollagen Typ II, glatte Oberfläche. Vorkommen: Gelenkknorpel, Rippenknorpel, Trachealringe, fetaler Knochen. Häufigster Knorpeltyp.
- **Faserknorpel:** Kollagen Typ I dominiert, sehr zugfest. Vorkommen: Bandscheiben (Anulus fibrosus), Menisci, Symphysis pubica.
- **Elastischer Knorpel:** Elastin-Fasern dominant. Vorkommen: Ohrmuschel, Epiglottis. Formwiederherstell­bar.

## Knochen — Aufbau und Umbau

Knochen bestehen aus organischer Matrix (Osteoid: Kollagen Typ I, ca. 35 %) und anorganischen Mineralien (Hydroxylapatit: Ca₁₀(PO₄)₆(OH)₂, ca. 65 %). Diese Kombination macht Knochen hart UND biegsam.

**Knochenaufbau:** Äußere Kompakta (Kortikalis) mit Havers-Systemen (Osteonen: konzentrischen Lamellen um Havers-Kanal mit Gefäß/Nerv) und innere Spongiosa (Trabekel-Netzwerk, Knochenmark).

**Zellen des Knochens:**
- **Osteoblasten:** Bilden neue Knochenmatrix (Osteoid), mineralisieren sie. Kommen aus mesenchymalen Stammzellen.
- **Osteozyten:** Ehemalige Osteoblasten, eingemauert in Lakunen; verbunden durch Canaliculi (Gap Junctions). Mechanosensoren.
- **Osteoklasten:** Mehrkernige Riesenzellen (aus Monozyten/Makrophagen-Linie). Bauen Knochen ab (sezernieren H⁺ und Kathepsin K in Howship-Lakunen). RANK-RANKL-System reguliert Osteoklastenaktivierung.

**Knochenumbau:** ~10 % des Skeletts werden jährlich umgebaut (Remodeling). Balance zwischen Osteoblasten (Aufbau) und Osteoklasten (Abbau). Östrogen hemmt Osteoklasten → Postmenopausale Osteoporose bei Östrogenmangel.

## Fettgewebe

**Weißes Fettgewebe:** Energiespeicher (Triglyzeride), Wärmeisolierung, mechanischer Schutz. Adipozyten haben große zentrale Lipidvakuole → Kern an den Rand gedrängt (Siegelringzellen). Endokrines Organ: sezerniert Leptin, Adiponektin.

**Braunes Fettgewebe:** Thermogenese (UCP-1/Thermogenin entkoppelt Atmungskette → Wärme). Bei Neugeborenen und Winterschläfern aktiv.`,
      lernziele: [
        "Kollagentypen I, II, III nach Vorkommen und Funktion unterscheiden",
        "Drei Knorpeltypen (Hyalin, Faser, elastisch) sowie Knochenumbau durch Osteoblasten und Osteoklasten erklären",
        "Binde- und Fettgewebetypen strukturell und funktionell einordnen",
      ],
      sections: [
        {
          heading: "Kollagentypen und ihre Vorkommen",
          text: "Kollagen ist das häufigste Protein im menschlichen Körper (ca. 30 % des Gesamtproteins). Die Tripelhelix entsteht aus drei Polypeptidketten mit Gly-X-Y-Wiederholungen. Vitamin C ist für die Hydroxylierung von Prolin und Lysin essentiell — bei Vitamin-C-Mangel (Skorbut) entstehen instabile Kollagenfibrillen. Kollagen Typ I ist zugfest und findet sich in Knochen und Sehnen. Kollagen Typ II ist druckresistent (Knorpel). Kollagen Typ III (Retikulinfasern) ist dehnbar und findet sich in Gefäßwänden und früher Wundheilung. Fibroblasten sind die Hauptproduzenten im lockeren und straffen Bindegewebe; Chondroblasten produzieren Knorpelkollagen; Osteoblasten synthetisieren Knochen-Kollagen Typ I.",
          merksatz: "Kollagen I = Knochen/Sehnen (Typ 1 = überall); Kollagen II = Knorpel (II wie Zwei-mal drücken); Kollagen III = Retikulin (IIImmobilien-Gerüst).",
        },
        {
          heading: "Knochenumbau: Osteoblasten vs. Osteoklasten",
          text: "Knochen ist dynamisches Gewebe: Ca. 10 % werden jährlich neu gebaut. Osteoblasten (mesenchymaler Ursprung) synthetisieren Osteoid (Kollagen I + Nicht-Kollagen-Proteine wie Osteocalcin) und mineralisieren es durch Hydroxylapatit-Einlagerung. Wenn Osteoblasten vollständig eingemauert sind, werden sie zu Osteozyten, die über Canaliculi kommunizieren und als Mechano­sensoren wirken. Osteoklasten (hämatopoetischer Ursprung, Makrophagen-Linie, RANKL-Signal) resorbieren Knochen: Sie versiegeln ihre 'Ruffled Border' gegen die Knochenoberfläche und sezernieren HCl (pH ~4,5) und Kathepsin K. Osteoporose entsteht, wenn die Osteoklastenaktivität die Osteoblastenaktivität überwiegt — z. B. durch Östrogenmangel nach der Menopause.",
          merksatz: "Osteoblasten BAUEN auf; Osteoklasten KLAUBEN weg (resorbieren). RANKL aktiviert Osteoklasten.",
        },
        {
          heading: "Knorpeltypen im Vergleich",
          text: "Alle drei Knorpeltypen sind avaskulär und haben nur Chondrozyten als Zellen. Hyalinknorpel (Kollagen II, blau-weißlich, glatt) überzieht Gelenkflächen und bildet das fetale Skelett; er ist druckresistent, aber bei Arthrose gefährdet. Faserknorpel (Kollagen I dominiert, weißlich, zäh) ist am zugfestesten: Er bildet Bandscheiben-Anulus und Menisci — bei Trauma kann er reißen (Meniskusriss). Elastischer Knorpel (Elastin-Fasern, gelblich) ist biegsam und kehr in seine Form zurück: Ohrmuschel und Epiglottis müssen Verformungen überstehen. Im Gegensatz zu Knochen hat Knorpel kein Periost — Reparatur ist daher limitiert.",
          merksatz: "Hyalin = Gelenk; Faser = Bandscheibe/Meniskus; Elastisch = Ohr/Epiglottis.",
        },
      ],
      merksätze: [
        "Kollagen I (Knochen, Sehnen), II (Knorpel), III (Retikulin, Gefäße) — Vitamin C für Hydroxylierung essentiell.",
        "Osteoblasten (aufbauend, mesenchymal) vs. Osteoklasten (abbauend, hämatopoetisch, RANKL).",
        "Knorpel ist avaskulär — daher schlechte Heilung; Knochen hat Blutgefäße und heilt gut.",
      ],
      altfrage: {
        question: "Welche Zellen bauen Knochen ab, und aus welcher Zelllinie stammen sie?",
        answer: "Osteoklasten bauen Knochen ab. Sie entstammen der hämatopoetischen Linie (Monozyten/Makrophagen-Vorläufer). Sie sind mehrkernig und resorbieren Knochenmatrix durch Säure (HCl) und Kathepsin K in der Howship-Lakune.",
      },
      klinischerBezug: "Osteoporose entsteht durch Ungleichgewicht zugunsten der Osteoklasten, häufig durch Östrogenmangel nach der Menopause. Therapeutisch werden Bisphosphonate (hemmen Osteoklasten) oder RANKL-Antikörper (Denosumab) eingesetzt. Bei Skorbut (Vitamin-C-Mangel) ist die Kollagensynthese gestört — Knochen, Zahnfleisch und Gefäßwände werden brüchig.",
      selfTest: [
        {
          question: "Welcher Kollagentyp ist der häufigste in Sehnen und Knochen?",
          options: [
            "Kollagen Typ II",
            "Kollagen Typ III",
            "Kollagen Typ IV",
            "Kollagen Typ I",
            "Kollagen Typ V",
          ],
          correctIndex: 3,
          explanation: "Kollagen Typ I ist das häufigste Kollagen im Körper und dominiert in Knochen, Sehnen, Haut und Kornea. Es bildet dicke Fibrillen mit hoher Zugfestigkeit. Kollagen Typ II findet sich im Knorpel; Typ III in dehnbaren Strukturen wie Gefäßwänden.",
          hints: [
            "Das häufigste Kollagen hat die kleinste Zahl — welche Nummer ist das?",
            "Sehnen müssen extrem zugfest sein: Welcher Kollagentyp ist für Zugfestigkeit bekannt?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welches Merkmal unterscheidet Faserknorpel von Hyalinknorpel?",
          options: [
            "Faserknorpel enthält Elastinfasern statt Kollagen.",
            "Faserknorpel enthält reichlich Kollagen Typ I und ist besonders zugfest.",
            "Faserknorpel ist vaskularisiert, Hyalinknorpel nicht.",
            "Hyalinknorpel enthält Kollagen Typ I, Faserknorpel Kollagen Typ II.",
            "Faserknorpel findet sich ausschließlich in der Ohrmuschel.",
          ],
          correctIndex: 1,
          explanation: "Faserknorpel enthält hauptsächlich Kollagen Typ I (wie Sehnen) und ist daher besonders zugfest. Er findet sich in Bandscheiben (Anulus fibrosus), Menisci und der Symphysis pubica — Strukturen, die hohen Zug- und Druckkräften ausgesetzt sind. Hyalinknorpel enthält Kollagen Typ II und ist druckresistent.",
          hints: [
            "Faser-Knorpel: Der Name verrät es — was sind 'Fasern' im bindegewebigen Sinne?",
            "Bandscheiben müssen sowohl Druck als auch Zug widerstehen — welcher Knorpeltyp kann das?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die Funktion von UCP-1 (Thermogenin) im braunen Fettgewebe?",
          options: [
            "Es speichert Triglyzeride in großen Lipidtröpfchen.",
            "Es entkoppelt die mitochondriale Atmungskette, sodass Energie als Wärme freigesetzt wird.",
            "Es stimuliert Osteoblasten zur Knochenbildung.",
            "Es hemmt die Lipolyse bei Kälte.",
            "Es aktiviert Osteoklasten über das RANKL-System.",
          ],
          correctIndex: 1,
          explanation: "UCP-1 (Uncoupling Protein 1 / Thermogenin) ist ein Kanalprotein in der inneren Mitochondrienmembran des braunen Fettgewebes. Es ermöglicht den Rückfluss von Protonen (H⁺) in die Mitochondrienmatrix, ohne ATP zu synthetisieren — die Energie wird stattdessen als Wärme freigesetzt (Thermogenese). Dies ist besonders bei Neugeborenen und Winterschläfern wichtig.",
          hints: [
            "'Entkoppeln' bedeutet: Was wird von was getrennt?",
            "Braunes Fettgewebe erzeugt Wärme — wie kann ein Protein das bewerkstelligen?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Vitamin C ist für die Kollagensynthese notwendig, weil es...",
          options: [
            "...die Glykosylierung von Prolin katalysiert.",
            "...für die Hydroxylierung von Prolin und Lysin in der Prokollagen-Tripelhelix benötigt wird.",
            "...Osteoklasten hemmt und damit Knochenstabilität fördert.",
            "...die Quervernetzung (Crosslinking) von Kollagenfibrillen extrazellulär ermöglicht.",
            "...als Cofaktor bei der Transkription des Kollagen-Gens dient.",
          ],
          correctIndex: 1,
          explanation: "Vitamin C (Ascorbinsäure) ist Cofaktor der Prolyl- und Lysylhydroxylase, die Prolin und Lysin in der Prokollagenkette hydroxylieren. Diese Hydroxylierungen sind essentiell für die Stabilität der Tripelhelix. Ohne Vitamin C entstehen instabile Kollagenfibrillen — klinisch resultiert Skorbut mit Zahnfleischbluten, Wundheilungsstörungen und brüchigen Gefäßen.",
          hints: [
            "Skorbut war eine Mangelkrankheit der Seefahrer — was fehlte ihnen, und was brach zusammen?",
            "Prolylhydroxylase braucht Vitamin C als Cofaktor — welcher Schritt der Kollagensynthese wird dadurch ermöglicht?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum heilt Knorpel nach Verletzungen so schlecht?",
          options: [
            "Chondrozyten sind posimitotisch und können sich nicht teilen.",
            "Knorpel enthält keine Grundsubstanz.",
            "Knorpel ist avaskulär — ohne Blutgefäße können Reparaturzellen und Nährstoffe schlecht einwandern.",
            "Knorpel besitzt zu viele Osteoklasten, die neu gebildetes Gewebe sofort abbauen.",
            "Knorpel wird durch Immunzellen aktiv abgebaut.",
          ],
          correctIndex: 2,
          explanation: "Knorpel ist avaskulär (keine Blutgefäße) und aneural. Reparaturzellen (Fibroblasten, Stammzellen) und Nährstoffe können nicht über den Blutweg einwandern. Chondrozyten teilen sich zwar prinzipiell, aber langsam. Daher ist die Regenerationskapazität sehr gering, und Knorpelschäden (z. B. Gelenkknorpel bei Arthrose) heilen kaum spontan.",
          hints: [
            "Was ist die Voraussetzung für jeden Heilungsprozess — was muss zuerst an den Schadensort gelangen?",
            "Knorpel wird durch Diffusion ernährt — was bedeutet das für die Zufuhr von Reparaturzellen?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-2-03',
      title: "Muskelgewebe — Vom Sarkomer zur Kontraktion",
      content: `# Muskelgewebe — Vom Sarkomer zur Kontraktion

## Einleitung

Muskelgewebe ist auf **Kontraktion** spezialisiert. Es gibt drei Typen: **Glatte Muskulatur** (unwillkürlich, Hohlorgane), **quergestreifte Skelettmuskulatur** (willkürlich, Bewegung) und **Herzmuskulatur** (quergestreift, unwillkürlich, Sonderstellung). Das zentrale kontraktile Element aller Muskeltypen sind Aktin- und Myosinfilamente; in der Skelett- und Herzmuskulatur sind sie hochgeordnet → sichtbare Querstreifung.

## Sarkomer — die kontraktile Einheit

Das **Sarkomer** ist die funktionelle Grundeinheit der Skelettmuskulatur. Es liegt zwischen zwei **Z-Scheiben** (Z = Zwischen). Innerhalb eines Sarkomers:

- **A-Bande** (anisotrop, dunkel): Region mit Myosinfilamenten (dick) inkl. überlappender Aktinfilamente. Bleibt bei Kontraktion gleich breit.
- **I-Bande** (isotrop, hell): Nur Aktinfilamente (dünn), ohne Myosin. Wird bei Kontraktion kürzer.
- **H-Zone:** Mittelteil der A-Bande, nur Myosin (kein Aktin). Wird bei Kontraktion kürzer (kann verschwinden).
- **M-Linie:** Mitte des Sarkomers, verankert Myosinfilamente.
- **Titin:** Elastisches Riesenprotein, verbindet Myosin mit Z-Scheibe → Ruhespannung, verhindert Überdehnung.

## Gleitfilamenttheorie

Bei Kontraktion gleiten Aktin- und Myosinfilamente aneinander vorbei — die Filamente selbst verkürzen sich nicht. Schritte:

1. **Calciumfreisetzung** aus dem sarkoplasmatischen Retikulum (SR) nach Aktionspotential.
2. **Ca²⁺ bindet Troponin C** → Konformationsänderung des Troponin-Tropomyosin-Komplexes → Myosin-Bindungsstellen auf Aktin freigegeben.
3. **Kreuzbrückenbildung:** Myosinkopf (ADP+Pi) bindet Aktin.
4. **Kraftschlag (Power Stroke):** Pi wird freigesetzt → Myosinkopf kippt → Aktin wird Richtung M-Linie gezogen.
5. **ATP-Bindung** → Myosinkopf löst sich von Aktin.
6. **ATP-Hydrolyse** → Myosinkopf wird wiedergespannt → Zyklus beginnt neu.

## Regulation durch Troponin und Tropomyosin

Im Ruhezustand bedeckt **Tropomyosin** die Myosin-Bindungsstellen auf Aktin. **Troponin** ist ein Komplex aus drei Untereinheiten: **Troponin T** (bindet Tropomyosin), **Troponin I** (inhibiert Myosin-Aktin-Interaktion) und **Troponin C** (bindet Ca²⁺). Ca²⁺-Bindung an Troponin C verschiebt Tropomyosin → Bindungsstellen frei.

**Klinisch:** Troponin I und T sind herzspezifische Isoformen → **kardiale Marker** bei Herzinfarkt (Troponin-Test).

## Motorische Einheit

Eine **motorische Einheit** besteht aus einem Alpha-Motoneuron und allen von ihm innervierten Muskelfasern. Kleine Einheiten (wenige Fasern, z. B. Augenmuskeln) ermöglichen feine Bewegungen; große Einheiten (hunderte Fasern, z. B. M. quadriceps) erzeugen Kraft. **Rekrutierung** mehr motorischer Einheiten steigert die Muskelkraft (**Spatial Summation**). **Frequenzsummation** (schnelle Reizfolge) führt zu Tetanus (maximale Kontraktion).

## Herzmuskel vs. Skelettmuskel

**Herzmuskulatur:** Quergestreift wie Skelettmuskel, aber einkernig, mit Glanzstreifen (Intercalated Discs mit Gap Junctions für elektrische Kopplung). Das Herz kontrahiert als funktionelles Synzytium. Ca²⁺-induzierte Ca²⁺-Freisetzung (CICR) aus SR durch L-Typ-Ca²⁺-Kanäle. Keine tetanische Kontraktion möglich (lange Refraktärzeit).

**Glatte Muskulatur:** Kein Sarkomer, keine Z-Scheiben. Regulation über Ca²⁺-Calmodulin → Myosin-Leichtketten-Kinase (MLCK). Langsame, anhaltende Kontraktion. Nervöse und hormonelle Kontrolle (Autonomes NS, Hormone).`,
      lernziele: [
        "Sarkomerstruktur (Z-Scheibe, A-Bande, I-Bande, H-Zone) und Veränderungen bei Kontraktion beschreiben",
        "Gleitfilamenttheorie mit Rolle von Ca²⁺, Troponin und Tropomyosin erklären",
        "Die drei Muskeltypen strukturell und funktionell vergleichen",
      ],
      sections: [
        {
          heading: "Sarkomerstruktur und Banden",
          text: "Das Sarkomer erstreckt sich von Z-Scheibe zu Z-Scheibe und misst in Ruhe ca. 2,2 µm. Die A-Bande (dunkel) enthält Myosin-Dickfilamente samt überlappenden Aktin-Dünnfilamenten und bleibt bei der Kontraktion konstant breit — denn die Myosinfilamente selbst verkürzen sich nicht. Die I-Bande (hell) besteht nur aus Aktin und wird kürzer, weil Aktin tiefer in die A-Bande hineingezogen wird. Die H-Zone (nur Myosin, kein Aktin) verschwindet bei maximaler Kontraktion. Die Z-Scheiben rücken zusammen. Titin wirkt als molekulare Feder: Es verbindet Myosin mit der Z-Scheibe und sorgt für Ruhespannung sowie den Schutz vor Überdehnung. Nebulin (parallel zu Aktin) legt die Länge der Aktinfilamente fest.",
          merksatz: "Bei Kontraktion werden I-Bande und H-Zone kürzer; A-Bande bleibt gleich.",
        },
        {
          heading: "Troponin-Tropomyosin-Schalter",
          text: "Im Ruhezustand liegt Tropomyosin in der Furche des Aktindoppelstrangs und blockiert sterisch die Myosin-Bindungsstellen. Der Troponin-Komplex fixiert Tropomyosin in dieser Blockierposition: Troponin I hemmt direkt, Troponin T verankert an Tropomyosin, Troponin C bindet Ca²⁺. Wenn ein Aktionspotential das sarkoplasmatische Retikulum (SR) erreicht, öffnen spannungsgesteuerte RyR1-Kanäle (Ryanodin-Rezeptoren), Ca²⁺ strömt aus dem SR ins Zytosol (Konzentration steigt von 0,1 µM auf ~10 µM). Ca²⁺ bindet Troponin C → Konformationsänderung des Troponin-Tropomyosin-Komplexes → Tropomyosin verschiebt sich → Myosinbindungsstellen auf Aktin freigelegt → Kreuzbrückenbildung möglich. Nach dem Aktionspotential pumpt die SR-Ca²⁺-ATPase (SERCA) Ca²⁺ zurück → Erschlaffung.",
          merksatz: "Ca²⁺ + Troponin C → Tropomyosin verschiebt sich → Myosin kann Aktin binden → Kontraktion.",
        },
        {
          heading: "Motorische Einheit und Kraftregulation",
          text: "Ein Alpha-Motoneuron bildet mit all seinen Muskelfasern eine motorische Einheit. Kleine motorische Einheiten (z. B. M. interossei: ~10 Fasern/Einheit) ermöglichen feinmotorische Kontrolle (Schreiben, Augenbe­wegungen). Große motorische Einheiten (M. gastrocnemius: bis zu 2000 Fasern) erzeugen große Kraft. Kraftsteigerung erfolgt durch zwei Mechanismen: Rekrutierung (mehr Einheiten aktivieren = Spatial Summation) und Frequenzerhöhung (Temporal/Rate Summation → Tetanus). Das NMJ (neuromuskuläre Endplatte) nutzt Acetylcholin als Neurotransmitter: ACh bindet nicotinerge Rezeptoren → Endplattenpotential → Aktionspotential → Ca²⁺-Freisetzung aus SR.",
          merksatz: "Motorische Einheit = 1 Alpha-Motoneuron + seine Muskelfasern; Kraft durch Rekrutierung und Frequenz.",
        },
      ],
      merksätze: [
        "Sarkomer: Z-Z-Grenzen; bei Kontraktion kürzer werden I-Bande und H-Zone; A-Bande bleibt konstant.",
        "Ca²⁺ → Troponin C → Tropomyosin weg → Myosin bindet Aktin → Kraftschlag nach ATP-Hydrolyse.",
        "Herzmuskel: quergestreift, einkernig, Gap Junctions in Glanzstreifen, kein Tetanus möglich.",
      ],
      altfrage: {
        question: "Warum kann der Herzmuskel im Gegensatz zur Skelettmuskulatur keinen Tetanus entwickeln?",
        answer: "Das Herzmyokard hat eine sehr lange absolute Refraktärzeit (ca. 200–300 ms), die fast so lang ist wie die mechanische Kontraktion. Dadurch kann kein neues Aktionspotential ausgelöst werden, bevor sich der Herzmuskel nicht vollständig erschlafft hat — tetanische Dauerkontrak­tion wäre für die Pumpfunktion fatal.",
      },
      klinischerBezug: "Kardiales Troponin I und T (herzspezifische Isoformen) werden bei Herzinfarkt (Myokardinfarkt) aus geschädigten Kardiomyozyten freigesetzt und sind die sensitivsten und spezifischsten Marker für myokardialen Schaden. Erhöhte Troponin-Spiegel sind innerhalb von 3–6 Stunden nach Infarkt nachweisbar.",
      selfTest: [
        {
          question: "Welche Banden des Sarkomers werden bei Muskelkontraktion kürzer?",
          options: [
            "A-Bande und I-Bande",
            "Nur die A-Bande",
            "I-Bande und H-Zone",
            "H-Zone und A-Bande",
            "Nur die Z-Scheiben-Abstände bleiben gleich",
          ],
          correctIndex: 2,
          explanation: "Bei der Kontraktion gleiten Aktin- und Myosinfilamente aneinander vorbei, ohne sich selbst zu verkürzen. Die I-Bande (nur Aktin) wird kürzer, weil Aktin tiefer in die A-Bande rutscht. Die H-Zone (nur Myosin) wird kürzer oder verschwindet, weil Aktin nun bis in die H-Zone reicht. Die A-Bande (Myosinlänge) bleibt konstant.",
          hints: [
            "Die A-Bande wird durch die Myosinfilamente definiert — verändert sich die Länge der Myosinfilamente?",
            "I-Bande = nur Aktin. Was passiert mit der I-Bande, wenn Aktin in Richtung Mitte gezogen wird?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Schritt der Kreuzbrücken-Kontraktion erfordert ATP?",
          options: [
            "Bindung des Myosinkopfes an Aktin",
            "Der Kraftschlag (Power Stroke) selbst",
            "Die Freisetzung des Myosinkopfes von Aktin nach dem Kraftschlag",
            "Calciumfreisetzung aus dem sarkoplasmatischen Retikulum",
            "Die Bindung von Ca²⁺ an Troponin C",
          ],
          correctIndex: 2,
          explanation: "ATP bindet an den Myosinkopf, nachdem der Kraftschlag vollzogen wurde — dadurch löst sich der Kopf vom Aktin (Loslassen). ATP wird dann durch ATPase zu ADP + Pi hydrolysiert, was den Myosinkopf in den gespannten Zustand zurückversetzt (Wiederaufspannen). Ohne ATP (z. B. nach dem Tod) bleibt Myosin fest an Aktin gebunden → Totenstarre (Rigor mortis).",
          hints: [
            "Was passiert bei Rigor mortis — was fehlt nach dem Tod, und warum verkrampfen die Muskeln?",
            "ATP ist nicht für den Kraftschlag nötig, sondern für das ... was danach kommt.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was unterscheidet Herzmuskulatur von Skelettmuskulatur?",
          options: [
            "Herzmuskulatur ist glatt (keine Querstreifung) und unwillkürlich.",
            "Herzmuskulatur ist quergestreift, einkernig, und Zellen sind über Gap Junctions in Glanzstreifen verbunden.",
            "Herzmuskulatur verwendet Myosin, aber kein Aktin.",
            "Herzmuskulatur wird durch Troponin nicht reguliert.",
            "Herzmuskulatur kann tetanisch kontrahieren, Skelettmuskulatur nicht.",
          ],
          correctIndex: 1,
          explanation: "Herzmuskulatur ist quergestreift (wie Skelettmuskel) aber einkernig (im Gegensatz zu mehrkernigen Skelettmuskelfasern). Kardiomyozyten sind über Glanzstreifen (Intercalated Discs) mit Gap Junctions verbunden, die elektrische Kopplung ermöglichen — das Herz kontrahiert als funktionelles Synzytium. Tetanus ist durch die lange Refraktärzeit unmöglich.",
          hints: [
            "Was ist das besondere Merkmal der Glanzstreifen im Herzmuskel?",
            "Herzmuskel ist quergestreift — aber was unterscheidet ihn vom Skelettmuskel in Bezug auf Kerne und Kopplung?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum tritt Rigor mortis (Totenstarre) nach dem Tod ein?",
          options: [
            "Troponin C bindet kein Calcium mehr, sodass Kontraktion unmöglich wird.",
            "ATP fehlt, sodass Myosinköpfe nicht von Aktin gelöst werden können.",
            "Das sarkoplasmatische Retikulum setzt unbegrenzt Calcium frei.",
            "Myosin wird nach dem Tod enzymatisch abgebaut und kann nicht kontrahieren.",
            "Totenstarre entsteht durch Oxidation der Z-Scheibe.",
          ],
          correctIndex: 1,
          explanation: "Nach dem Tod fehlt ATP-Produktion (keine Mitochondrienfunktion). ATP wird für das Lösen des Myosinkopfes von Aktin benötigt. Ohne ATP bleiben alle Myosinköpfe dauerhaft an Aktin gebunden → Rigor mortis. Gleichzeitig steigt die zytosolische Ca²⁺-Konzentration an (SR-Pumpen fallen aus), was die Kontraktion begünstigt. Nach 24–48 h löst sich der Rigor durch Proteolyse.",
          hints: [
            "Denk an den Kreuzbrückenzyklus: Welcher Schritt braucht ATP — Binden oder Lösen?",
            "Nach dem Tod fällt der Energiestoffwechsel aus. Was geschieht mit aktiven Querbrücken ohne ATP?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum werden bei Herzinfarkt Troponin-Werte im Blut gemessen?",
          options: [
            "Troponin reguliert den Herzrhythmus und steigt bei Arrhythmien an.",
            "Herzspezifische Isoformen von Troponin I und T werden aus geschädigten Kardiomyozyten freigesetzt.",
            "Troponin ist ein Hormon, das bei Ischämie vermehrt sezerniert wird.",
            "Troponin stimuliert Osteoklasten, was zu Knochenschmerzen beim Infarkt führt.",
            "Troponin-Werte steigen bei allen Muskelschäden gleichmäßig an.",
          ],
          correctIndex: 1,
          explanation: "Troponin I und T haben herzspezifische Isoformen (cTnI, cTnT), die sich strukturell von skelettmuskulären Isoformen unterscheiden. Bei Myokardinfarkt werden Kardiomyozyten geschädigt und geben cTnI/cTnT ins Blut ab. Diese steigen 3–6 h nach Infarkt an und bleiben bis zu 14 Tage erhöht — sie sind hochsensitiv und hochspezifisch für myokardialen Schaden.",
          hints: [
            "Troponin ist intrazellulär in Myozyten — warum wäre es im Blut erhöht?",
            "Was passiert mit dem Zellinhalt, wenn Kardiomyozyten absterben (nekrotisch werden)?",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-2-04',
      title: "Nervengewebe — Neuronen, Gliazellen und Myelinisierung",
      content: `# Nervengewebe — Neuronen, Gliazellen und Myelinisierung

## Einleitung

**Nervengewebe** besteht aus zwei Zelltypen: **Neuronen** (erregbare Zellen, die elektrische Signale erzeugen und weiterleiten) und **Gliazellen** (unterstützende Zellen, Myelinisierung, Ernährung, Schutz). Das Nervensystem kommuniziert über Aktionspotentiale und chemische Synapsen. Neuronen sind **postmitotisch** — sie teilen sich nach der Entwicklung praktisch nicht mehr, können aber Axone regenerieren (PNS besser als ZNS).

## Neuronenstruktur

Ein Neuron besteht aus:
- **Soma** (Zellkörper): Enthält Zellkern und Ribosomen (raues ER = Nissl-Substanz). Metabolisches Zentrum.
- **Dendriten:** Verästelte Fortsätze, die afferente Signale empfangen. Kurzreich­weitig, zahlreich.
- **Axon:** Einziger langer Fortsatz, leitet Aktionspotentiale vom Soma zum Endknöpfchen. Beginnt am **Axonhügel** (niedrigste Reizschwelle → Ort der Aktionspotential-Initiierung).
- **Endknöpfchen (Synapsen­terminals):** Präsynaptisch, enthalten synaptische Vesikel mit Neurotransmittern.

**Klassifikation** nach Anzahl der Fortsätze: Multipolar (meiste Motoneurone, Interneurone), Bipolar (Retina, Riechschleimhaut), Pseudounipolar (Spinalganglion, Schmerz-/Berührungsafferenzen).

## Gliazellen

### Im ZNS:
- **Astrozyten:** Häufigste Gliazellen. Blut-Hirn-Schranke (perivaskuläre Endfüße), Ionenpuffer (K⁺), Glutamat-Reuptake, metabolische Unterstützung. Narbenbildung nach ZNS-Verletzung (reaktive Gliose).
- **Oligodendrozyten:** Bilden Myelinscheiden im ZNS. Ein Oligodendrozyt kann bis zu 50 Axonsegmente myelinisieren. Zerstörung bei Multipler Sklerose.
- **Mikroglia:** Immunzellen des ZNS (= Makrophagen des Gehirns, aus Monozyten-Linie). Phagozytose von Zelltrümmern, Pathogenen. Aktivierung bei Neuroinflammation.
- **Ependymzellen:** Auskleidung der Hirnventrikel und des Zentralkanals; bilden und zirkulieren Liquor cerebrospinalis.

### Im PNS:
- **Schwann-Zellen:** Myelinisieren Axone im PNS. Eine Schwann-Zelle = ein Axonsegment. Bei Axonschäden regenerieren sie die Myelinscheide und leiten Axonwachstum.
- **Satellitenzellen:** Umhüllen Soma der peripheren Ganglienzellen.

## Myelinscheide und saltatorische Erregungsleitung

Die **Myelinscheide** ist eine Lipid-reiche Membranwicklung um das Axon. Sie besteht aus konzentrisch aufgerollten Schwann-Zell- (PNS) oder Oligodendrozyten-Membranen (ZNS). Zwischen benachbarten Myelinsegmenten liegen die **Ranvier-Schnürringe** (Nodes of Ranvier), wo die Axonmembran frei liegt und Na⁺-Kanäle hochkonzentriert sind.

**Saltatorische Erregungsleitung:** Das Aktionspotential "springt" von Schnürring zu Schnürring (saltare = springen). Vorteile: 1) Viel schneller als kontinuierliche Leitung (myelinisiert: bis 120 m/s; unmyelinisiert: 0,5–2 m/s). 2) Energieeffizienter (Na⁺/K⁺-ATPase nur an Schnürringen aktiv). **Elektrischer Widerstand** der Myelinscheide ist hoch (kein Ionenfluss); **Kapazität** ist niedrig → Depolarisation springt elektrotonisch schnell zum nächsten Schnürring.

## Axonaler Transport

**Antegrader Transport** (Soma → Synapse): Kinesin transportiert Organellen, Vesikel, Proteine entlang Mikrotubuli. **Retrograder Transport** (Synapse → Soma): Dynein transportiert Signalmoleküle, Recyclingmaterialien, auch Viren (Herpes, Tollwut) zurück. Axontransport ist für neuronale Funktion essentiell — Störungen führen zu neuro­degenerativen Erkrankungen (z. B. Amyloid-Ansammlungen bei Alzheimer).`,
      lernziele: [
        "Aufbau des Neurons (Soma, Axon, Dendriten, Axonhügel) und seine Funktion erklären",
        "Gliazellen des ZNS und PNS benennen und ihre Aufgaben (besonders Myelinisierung) beschreiben",
        "Saltatorische Erregungsleitung erklären und ihren Vorteil gegenüber kontinuierlicher Leitung benennen",
      ],
      sections: [
        {
          heading: "Oligodendrozyten vs. Schwann-Zellen",
          text: "Beide Zelltypen bilden Myelinscheiden, unterscheiden sich aber fundamental: Schwann-Zellen (PNS) myelinisieren jeweils ein einziges Axonsegment zwischen zwei Ranvier-Schnürringen. Bei Axonverletzung im PNS können Schwann-Zellen das Axonwachstum durch neurotrophe Faktoren (BDNF, NGF) und Leitstrukturen (Büngner-Bänder) aktiv fördern — daher regenerieren periphere Nerven besser. Oligodendrozyten (ZNS) können bis zu 50 Axonsegmente verschiedener Axone gleichzeitig myelinisieren. Im ZNS gibt es keine Büngner-Bänder und inhibierende Faktoren (Nogo-A, MAG) hemmen Axonwachstum. Bei Multipler Sklerose greifen T-Zellen Oligodendrozyten an → Demyelinisierung → Leitungsverlangsamung oder -block.",
          merksatz: "Schwann-Zelle (PNS) = 1 Segment; Oligodendrozyt (ZNS) = bis zu 50 Segmente.",
        },
        {
          heading: "Saltatorische Erregungsleitung im Detail",
          text: "Unmyelinisierte Axone leiten das Aktionspotential kontinuierlich: Jeder Punkt der Membran muss depolarisiert werden. Das ist langsam (0,5–2 m/s) und energieintensiv. Myelinisierte Axone nutzen die hohe elektrische Isolation der Myelinscheide: Zwischen den Ranvier-Schnürringen ist die Membran abgedeckt, Na⁺-Kanäle fehlen. Das Aktionspotential springt elektrotonisch (passiv, schnell) zum nächsten Schnürring, wo Na⁺-Kanäle hochkonzentriert sind und ein neues Aktionspotential auslösen. Geschwindigkeit bis 120 m/s bei großen myelinisierten Fasern (Aα-Fasern, motorisch). Die Na⁺/K⁺-ATPase muss nur an den Schnürringen pumpen — erheblich energiesparender. Bei Demyelinisierung (Multiple Sklerose) verlangsamt oder unterbricht sich die Leitung.",
          merksatz: "Saltatorisch = springen von Schnürring zu Schnürring; schneller und energiesparender.",
        },
        {
          heading: "Astrozyten und Blut-Hirn-Schranke",
          text: "Astrozyten sind die häufigsten Gliazellen und multifunktional: Ihre perivaskulären Endfüße umhüllen Hirnkapillaren vollständig und induzieren die Tight Junctions zwischen Endothelzellen — das ist die strukturelle Basis der Blut-Hirn-Schranke (BHS). Die BHS reguliert selektiv, was ins Hirngewebe gelangt (Glukose via GLUT1, viele Medikamente können nicht passieren). Astrozyten puffern extrazelluläres K⁺ (nach Aktionspotentialen angestiegen), nehmen Glutamat via EAAT-Transporter auf (verhindert exzitotoxische Schäden), recyceln es zu Glutamin und geben es an Neurone zurück (Glutamin-Glutamat-Zyklus). Bei ZNS-Verletzung bilden reaktive Astrozyten eine Glianarbe, die Axonregeneration behindert.",
          merksatz: "Astrozyten: BHS-Induktion, K⁺-Puffer, Glutamat-Reuptake, Glianarbe nach Verletzung.",
        },
      ],
      merksätze: [
        "Oligodendrozyten (ZNS) vs. Schwann-Zellen (PNS): Beide myelinisieren; Schwann-Zellen fördern PNS-Regeneration.",
        "Saltatorische Leitung: Aktionspotential springt von Ranvier-Schnürring zu Schnürring — 100× schneller als kontinuierlich.",
        "Astrozyten: Blut-Hirn-Schranke, K⁺-Puffer, Glutamat-Reuptake; Mikroglia = Makrophagen des ZNS.",
      ],
      altfrage: {
        question: "Worin unterscheiden sich Schwann-Zellen und Oligodendrozyten hinsichtlich Anzahl der myelinisierten Axonsegmente?",
        answer: "Eine Schwann-Zelle myelinisiert genau ein Axonsegment (zwischen zwei Ranvier-Schnürringen) eines einzigen Axons. Ein Oligodendrozyt kann hingegen bis zu 50 Axonsegmente verschiedener Axone gleichzeitig myelinisieren.",
      },
      klinischerBezug: "Bei Multipler Sklerose (MS) zerstören autoreaktive T-Zellen die Oligodendrozyten und Myelinscheiden im ZNS. Die resultierende Demyelinisierung verlangsamt oder blockiert die Impulsleitung und führt zu wechselnden neurologischen Ausfällen (Sehstörungen, Paresen, Sensibilitätsstörungen). Da ZNS-Regeneration limitiert ist, kommt es mit der Zeit zu dauerhaften Defiziten.",
      selfTest: [
        {
          question: "An welcher Stelle des Neurons wird ein Aktionspotential initiiert?",
          options: [
            "Am Dendritenstamm",
            "Im Soma (Zellkörper)",
            "Am Axonhügel (Axon Initial Segment)",
            "Am präsynaptischen Endknöpfchen",
            "An den Ranvier-Schnürringen",
          ],
          correctIndex: 2,
          explanation: "Der Axonhügel (Axon Initial Segment) besitzt die höchste Dichte an spannungsgesteuerten Na⁺-Kanälen und die niedrigste Reizschwelle — hier werden eintreffende Potentiale aus Dendriten und Soma summiert. Wenn der Schwellenwert (ca. -55 mV) überschritten wird, entsteht das Aktionspotential und breitet sich das Axon entlang aus.",
          hints: [
            "Welcher Teil des Neurons ist die 'Entscheidungsstelle', ob ein Aktionspotential ausgelöst wird?",
            "Am Axon beginnt die Weiterleitung — genau an seiner Basis gibt es eine spezialisierte Zone mit vielen Na⁺-Kanälen.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Gliazellen bilden die Myelinscheide im zentralen Nervensystem (ZNS)?",
          options: [
            "Astrozyten",
            "Schwann-Zellen",
            "Mikroglia",
            "Oligodendrozyten",
            "Ependymzellen",
          ],
          correctIndex: 3,
          explanation: "Im ZNS myelinisieren Oligodendrozyten die Axone. Ein einziger Oligodendrozyt kann bis zu 50 verschiedene Axonsegmente myelinisieren. Schwann-Zellen myelinisieren im peripheren Nervensystem (PNS). Mikroglia sind Immunzellen, Astrozyten stützen und bilden die BHS, Ependymzellen kleiden Hirnventrikel aus.",
          hints: [
            "Es gibt eine einfache Eselsbrücke: ZNS → die Zellen haben 'Dendro-' oder 'Oligo-' im Namen.",
            "Schwann-Zellen vs. Oligodendrozyten: Welche sind im peripheren, welche im zentralen NS?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist der Hauptvorteil der saltatorischen Erregungsleitung?",
          options: [
            "Sie erhöht die Kapazität der Axonmembran.",
            "Sie ermöglicht bidirektionale Signalweiterleitung.",
            "Sie erhöht die Leitungsgeschwindigkeit und reduziert den Energiebedarf.",
            "Sie verhindert, dass das Aktionspotential sich zurückausbreitet.",
            "Sie ermöglicht chemische Signalweiterleitung ohne Synapsen.",
          ],
          correctIndex: 2,
          explanation: "Saltatorische Leitung (Springen von Schnürring zu Schnürring) ist erheblich schneller als kontinuierliche Leitung (bis 120 m/s vs. 0,5–2 m/s). Gleichzeitig ist sie energieeffizienter, da die Na⁺/K⁺-ATPase nur an den Ranvier-Schnürringen aktiv sein muss, um das Membranpotential wiederherzustellen — nicht entlang des gesamten Axons.",
          hints: [
            "Was bedeutet 'saltare' (lateinisch springen) für die Leitungsgeschwindigkeit?",
            "Wenn die ATPase nur an wenigen Stellen (Schnürringen) pumpen muss, was spart das?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei Multipler Sklerose wird die Myelinscheide zerstört. Welche direkte Konsequenz hat das für die Erregungsleitung?",
          options: [
            "Neuronen können keine Aktionspotentiale mehr generieren.",
            "Die Erregungsleitung verlangsamt sich oder bricht ab, weil saltatorische Leitung nicht mehr möglich ist.",
            "Astrozyten übernehmen die Myelinisierung und kompensieren den Verlust.",
            "Die Synaptische Übertragung wird unterbrochen.",
            "Die Ranvier-Schnürringe verschwinden vollständig.",
          ],
          correctIndex: 1,
          explanation: "Ohne Myelinscheide kann das Aktionspotential nicht saltatorisch von Schnürring zu Schnürring springen. Stattdessen müsste es kontinuierlich geleitet werden — was extrem langsam ist. In vielen Fällen bricht die Leitung ganz ab (Leitungsblock), weil die Membrankapazität erhöht ist und die depolarisierende Strömung 'versickert' anstatt zum nächsten Schnürring zu springen. Das erklärt die neurologischen Defizite bei MS.",
          hints: [
            "Was ist die Funktion der Myelinscheide für die saltatorische Leitung? Was passiert, wenn diese fehlt?",
            "Denk an den elektrischen Widerstand: Ohne Myelin steigt die Kapazität der Membran — was geschieht mit dem Ionenstrom?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Funktion haben Astrozyten an der Blut-Hirn-Schranke?",
          options: [
            "Sie bilden die Tight Junctions direkt zwischen Blutgefäß-Endothelzellen.",
            "Sie myelinisieren die Axone nahe den Blutgefäßen.",
            "Sie induzieren mit ihren perivaskulären Endfüßen die BHS-Eigenschaften des Endothels.",
            "Sie phagozytieren Pathogene, die die BHS überwinden.",
            "Sie synthetisieren Myelin für die perivaskulären Nervenfasern.",
          ],
          correctIndex: 2,
          explanation: "Astrozyten umhüllen Hirnkapillaren mit perivaskulären Endfüßen und sezernieren Faktoren, die das Endothel zur Bildung dichter Tight Junctions induzieren. Ohne diese Induktion würden die Tight Junctions zwischen Endothelzellen nicht so dicht sein. Die Tight Junctions selbst befinden sich im Endothel, nicht in den Astrozyten — aber die Astrozyten sind entscheidend für ihre Ausbildung.",
          hints: [
            "Die BHS-Tight Junctions liegen im Endothel — welche Zellen 'flüstern' dem Endothel zu, diese zu bilden?",
            "Astrozyten haben spezialisierte Endfüße, die Blutgefäße umhüllen — was könnte das funktionell bedeuten?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
