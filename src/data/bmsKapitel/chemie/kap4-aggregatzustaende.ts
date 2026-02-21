import type { Kapitel } from '../types';

export const chemKap4: Kapitel = {
  id: 'chem-kap4',
  title: 'Aggregatzustände',
  subject: 'chemie',
  icon: '🧊',
  estimatedTime: '40 min',
  unterkapitel: [
    {
      id: 'ch-4-01',
      title: 'Aggregatzustände und molekulare Basis',
      content: `## Die vier Aggregatzustände

Materie kann in verschiedenen Aggregatzuständen vorliegen, die sich durch die Energie und Anordnung der Teilchen unterscheiden.

**Fest (solid)**: Teilchen sind in einem geordneten Gitter angeordnet. Die Bindungskräfte überwiegen die thermische Bewegungsenergie. Teilchen schwingen um ihre Gleichgewichtslage (Gitterschwingungen), verlassen diese aber nicht. Feste Stoffe haben definiertes Volumen und definierte Form. Beispiel: Eiskristall (H₂O), NaCl-Gitter.

**Flüssig (liquid)**: Teilchen sind eng beieinander, aber nicht fest positioniert — sie können sich aneinander vorbeibewegen (Kohäsion). Flüssigkeiten haben definiertes Volumen, aber nehmen die Form ihres Behälters an. Oberflächenspannung entsteht durch ungleichmäßige Kohäsionskräfte an der Oberfläche.

**Gasförmig (gaseous)**: Teilchen bewegen sich chaotisch und unabhängig voneinander, fast ohne gegenseitige Wechselwirkungen. Gase haben kein definiertes Volumen und nehmen den gesamten verfügbaren Raum ein (Kompressibilität, Diffusion).

**Plasma**: Ionisierter Gaszustand mit freien Elektronen und Ionen — der häufigste Zustand der sichtbaren Materie im Universum (Sterne). In der Medizin: Blutplasma (biologisch, kein physikalisches Plasma).

## Anomalie des Wassers

Wasser verhält sich bei 4°C anomal: Es hat bei dieser Temperatur seine **maximale Dichte** (1,000 g/cm³). Beim Abkühlen unter 4°C nimmt die Dichte ab (Eis ist leichter als flüssiges Wasser: ρ_Eis ≈ 0,917 g/cm³). Ursache sind Wasserstoffbrückenbindungen, die im Eiskristall ein offenes hexagonales Gitter bilden. Diese Anomalie ermöglicht das Überleben aquatischer Organismen im Winter: Seen gefrieren von oben, nicht von unten.`,
      lernziele: [
        "Die vier Aggregatzustände anhand von Teilchenanordnung und -bewegung beschreiben",
        "Den Zusammenhang zwischen Energie und Aggregatzustand erklären",
        "Die Anomalie des Wassers und ihre biologische Bedeutung erläutern",
      ],
      sections: [
        {
          heading: "Molekulare Grundlage der Aggregatzustände",
          text: "Die Energiebilanz aus kinetischer Energie (Wärmebewegung) und potentieller Energie (intermolekulare Wechselwirkungen) bestimmt den Aggregatzustand. Im Festkörper überwiegt die potentielle Energie: Teilchen sitzen in Potenzialmulden und schwingen darin. In Flüssigkeiten sind kinetische und potentielle Energie ähnlich groß: Teilchen können zwar ihre Nachbarn wechseln, verlassen aber den Flüssigverband nicht. Im Gas dominiert die kinetische Energie: Teilchen bewegen sich mit hohen Geschwindigkeiten (bei 25°C: N₂ ~515 m/s, H₂O-Dampf ~640 m/s) und stoßen nur gelegentlich zusammen. Die Maxwell-Boltzmann-Verteilung beschreibt die Geschwindigkeitsverteilung der Gasteilchen.",
        },
        {
          heading: "Anomalie des Wassers und ihre Konsequenzen",
          text: "Die Dichteanomalie des Wassers hat weitreichende Konsequenzen für das Leben auf der Erde. Im Winter kühlt sich die Oberfläche von Gewässern auf 4°C ab (maximale Dichte → Wasser sinkt auf den Grund). Unter 4°C wird das Wasser wieder leichter und bleibt an der Oberfläche, wo es zu Eis gefriert. Das Eis bildet eine isolierende Decke, unter der flüssiges Wasser (4°C) verbleibt — aquatische Organismen überleben. Ohne diese Anomalie würden Seen von unten her gefrieren und vollständig erstarren. Auch im menschlichen Körper ist die Anomalie bedeutsam: Wassereis in Gefäßen (Gefriertrocknung von Gewebe) würde durch Ausdehnung Zellen zerstören.",
        },
      ],
      merksätze: [
        "Fest: geordnet, schwingt; flüssig: bewegt, kohäsiv; gasförmig: chaotisch, kompressibel",
        "Wasser: Dichtemaximum bei 4°C → Eis schwimmt → Seen gefrieren von oben",
        "Mehr Energie → höherer Aggregatzustand (fest → flüssig → gasförmig)",
      ],
      klinischerBezug: "Die Gefriertrocknung (Lyophilisation) nutzt den Aggregatzustandswechsel von Eis direkt zu Wasserdampf (Sublimation), um hitzeempfindliche Biologika (Impfstoffe, Antibiotika, Blutprodukte) schonend zu trocknen und langfristig lagerfähig zu machen.",
      altfrage: {
        question: "Warum kann ein Gewässer nicht vollständig von unten nach oben gefrieren?",
        answer: "Wegen der Dichteanomalie des Wassers sinkt Wasser von 4°C auf den Grund, da es dann die höchste Dichte hat. Wasser unter 4°C hat eine geringere Dichte und bleibt an der Oberfläche. Dort gefriert es zu Eis (ρ<1 g/cm³), das ebenfalls oben schwimmt und eine isolierende Decke bildet. Das Wasser darunter bleibt flüssig.",
      },
      selfTest: [
        {
          question: "Was charakterisiert den flüssigen Aggregatzustand auf molekularer Ebene?",
          options: [
            "Teilchen sind in einem geordneten Kristallgitter fixiert und schwingen",
            "Teilchen bewegen sich frei, sind aber durch Kohäsionskräfte zusammengehalten und haben kein Eigenvolumen",
            "Teilchen bewegen sich chaotisch und unabhängig ohne wesentliche Wechselwirkungen",
            "Teilchen sind ionisiert und bewegen sich in einem Elektronengas",
            "Teilchen haben keine kinetische Energie und bilden ein starres Netzwerk",
          ],
          correctIndex: 1,
          explanation: "Im flüssigen Zustand können Teilchen sich relativ zueinander bewegen (fließen), bleiben aber durch intermolekulare Kohäsionskräfte im Verband. Daher hat eine Flüssigkeit ein definiertes Volumen, aber keine eigene Form.",
          hints: [
            "Flüssigkeiten fließen — die Teilchen müssen sich also bewegen können",
            "Warum nimmt eine Flüssigkeit die Form ihres Behälters an?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei welcher Temperatur hat flüssiges Wasser seine maximale Dichte?",
          options: [
            "0°C",
            "4°C",
            "37°C",
            "100°C",
            "-4°C",
          ],
          correctIndex: 1,
          explanation: "Wasser hat sein Dichtemaximum bei 4°C (3,98°C genau). Dieser Effekt wird als Dichteanomalie des Wassers bezeichnet und ist auf das offene Wasserstoffbrückennetzwerk zurückzuführen.",
          hints: [
            "Die Dichteanomalie des Wassers ist ein wichtiger Merkpunkt",
            "Zwischen 0°C und 4°C nimmt die Dichte mit steigender Temperatur zu (ungewöhnlich!)",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Aussage zur Anomalie des Wassers ist korrekt?",
          options: [
            "Eis hat eine höhere Dichte als flüssiges Wasser bei 0°C",
            "Wasser dehnt sich beim Gefrieren aus, weil das Eiskristallgitter offener ist als die Flüssigkeit",
            "Die Dichte von Wasser nimmt von 0°C bis 100°C kontinuierlich zu",
            "Bei 0°C hat Wasser seine maximale Dichte",
            "Wasser gefriert bei -4°C wegen seiner Anomalie",
          ],
          correctIndex: 1,
          explanation: "Im Eiskristall bilden Wassermoleküle durch Wasserstoffbrücken ein offenes hexagonales Gitter mit mehr Abstand zwischen den Molekülen als in der Flüssigkeit. Daher ist Eis leichter (ρ≈0,917 g/cm³) als flüssiges Wasser bei 0°C (ρ≈0,9998 g/cm³).",
          hints: [
            "Eis schwimmt auf Wasser — was sagt das über ihre Dichten?",
            "Das Eiskristallgitter hat eine spezifische Struktur durch Wasserstoffbrücken",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was ist die biologische Bedeutung der Tatsache, dass Eis leichter als Wasser ist?",
          options: [
            "Pflanzen können Wasser besser aus dem Boden saugen",
            "Aquatische Organismen überleben den Winter, weil Seen von oben gefrieren und eine isolierende Eisschicht bilden",
            "Meerestiere können leichter an der Oberfläche schwimmen",
            "Wasser kann sich leichter in Dampf umwandeln",
            "Schneeflocken können durch die Luft schweben",
          ],
          correctIndex: 1,
          explanation: "Da Eis leichter als Wasser ist, friert die Oberfläche von Gewässern zuerst. Das Eis bildet eine isolierende Schicht, unter der das Wasser bei ~4°C flüssig bleibt. So überleben Fische, Mikroorganismen und andere Wasserbewohner den Winter.",
          hints: [
            "Was passiert in Seen und Teichen im Winter?",
            "Die Eisschicht wirkt wie eine Isolierschicht",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher Aggregatzustand hat ein definiertes Volumen, aber keine eigene Form?",
          options: [
            "Fest",
            "Flüssig",
            "Gasförmig",
            "Plasma",
            "Überkritisch",
          ],
          correctIndex: 1,
          explanation: "Flüssigkeiten haben ein definiertes Volumen (durch intermolekulare Kohäsionskräfte), nehmen aber die Form ihres Behälters an (keine eigene Form). Festkörper haben beides, Gase weder definiertes Volumen noch eigene Form.",
          hints: [
            "Welcher Zustand füllt seinen Behälter aus, ohne ihn zu überfüllen?",
            "Wasser in einem Glas — hat es ein eigenes Volumen? Eine eigene Form?",
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-4-02',
      title: 'Phasenübergänge — Energetik und Bedingungen',
      content: `## Phasenübergänge im Überblick

Phasenübergänge sind Zustandsänderungen zwischen den Aggregatzuständen. Sie finden bei bestimmten Temperaturen und Drücken statt und sind mit Energieänderungen verbunden (Enthalpieänderungen):

- **Schmelzen** (fest → flüssig): Schmelzenthalpie ΔH_s > 0 (endotherm)
- **Erstarren** (flüssig → fest): ΔH = −ΔH_s (exotherm)
- **Verdampfen** (flüssig → gasförmig): Verdampfungsenthalpie ΔH_v > 0 (endotherm)
- **Kondensieren** (gasförmig → flüssig): ΔH = −ΔH_v (exotherm)
- **Sublimation** (fest → gasförmig direkt): ΔH_sub = ΔH_s + ΔH_v > 0 (endotherm)
- **Resublimation** (gasförmig → fest direkt): exotherm

## Wichtige Werte für Wasser

- Schmelzenthalpie: ΔH_s(H₂O) = 6,01 kJ/mol (333 J/g)
- Verdampfungsenthalpie: ΔH_v(H₂O) = 40,7 kJ/mol (2257 J/g)
- Siedepunkt: 100°C bei 1 bar
- Schmelzpunkt: 0°C bei 1 bar

## Colligative Eigenschaften: Siedepunktserhöhung und Gefrierpunktserniedrigung

Gelöste Stoffe verändern Siedepunkt und Schmelzpunkt des Lösungsmittels. Diese kolligativen Eigenschaften hängen nur von der Teilchenkonzentration (Molalität b), nicht von der Art des gelösten Stoffs ab:

**Siedepunktserhöhung**: ΔT_s = K_s × b (K_s für Wasser: 0,512 K·kg/mol)
**Gefrierpunktserniedrigung**: ΔT_f = K_f × b (K_f für Wasser: 1,86 K·kg/mol)

Anwendung: 1 mol Glukose in 1 kg Wasser erniedrigt den Gefrierpunkt um 1,86°C. Kochsalz dissoziiert in Na⁺ und Cl⁻ (2 Teilchen) → doppelter Effekt pro mol NaCl.`,
      lernziele: [
        "Alle sechs Phasenübergänge mit ihren Energiebeiträgen nennen und Beispiele geben",
        "Schmelzenthalpie und Verdampfungsenthalpie von Wasser kennen und anwenden",
        "Siedepunktserhöhung und Gefrierpunktserniedrigung berechnen",
      ],
      sections: [
        {
          heading: "Energetik der Phasenübergänge",
          text: "Bei Phasenübergängen bleibt die Temperatur konstant, obwohl Energie zugeführt oder abgegeben wird — die Energie wird zur Änderung der intermolekularen Abstände (Phasenübergangsarbeit) verwendet, nicht zur Erwärmung. Auf einer Heizkurve (Temperatur vs. Zeit) sieht man Plateaus beim Schmelzpunkt und Siedepunkt. Die Verdampfungsenthalpie von Wasser (2257 J/g) ist außergewöhnlich hoch — Ursache sind die vielen Wasserstoffbrücken, die beim Verdampfen gebrochen werden müssen. Das ermöglicht effektive Thermoregulation: Schwitzen gibt 1 Liter Wasserdampf pro Stunde ab → 2257 kJ/h ≈ 627 W Wärmeabgabe. Sublimation tritt bei Stoffen auf, deren Flüssigphase bei Normaldruck instabil ist: Kohlendioxid (CO₂) sublimiert bei 1 bar bereits bei −78,5°C.",
        },
        {
          heading: "Kolligative Eigenschaften und medizinische Relevanz",
          text: "Kolligative Eigenschaften (Siedepunktserhöhung, Gefrierpunktserniedrigung, osmotischer Druck) hängen nur von der Teilchenanzahl pro kg Lösungsmittel (Molalität), nicht von der Art des Gelösten ab. Die Gefrierpunktserniedrigung wird klinisch genutzt: Die Osmolalität des Blutes (normal: 280-300 mosmol/kg) kann durch Kryoskopie (Messung der Gefrierpunktserniedrigung) bestimmt werden. Damit lassen sich hyperosmolare Zustände (Dehydratation, Hypernatriämie) und hypoosmolare Zustände (Wasserintoxikation) diagnostizieren. Gefrorenes Frostschutzmittel (Ethylenglykol) erniedrigt den Gefrierpunkt von Wasser — medizinisch relevant als Vergiftungsursache.",
        },
      ],
      merksätze: [
        "Schmelzen und Verdampfen sind endotherm; Erstarren und Kondensieren exotherm",
        "H₂O: ΔH_s = 334 J/g, ΔH_v = 2257 J/g — Verdampfen braucht 6,75× mehr Energie",
        "Kolligativ: ΔT_f = K_f × b — Gefrierpunkt sinkt bei gelösten Stoffen",
      ],
      klinischerBezug: "Die Osmolalitätsmessung durch Kryoskopie (Gefrierpunktserniedrigung) ist ein Standardverfahren in der klinischen Chemie: 1 mosmol/kg Blut entspricht einer Gefrierpunktserniedrigung von 0,00186°C; der normale Gefrierpunkt von Blut liegt bei ca. −0,52°C.",
      altfrage: {
        question: "Warum verdampft Wasser bei 100°C und 1 bar, aber auch bei Raumtemperatur (Verdunstung)?",
        answer: "Der Siedepunkt (100°C) ist die Temperatur, bei der der Dampfdruck des Wassers den Atmosphärendruck erreicht — das gesamte Volumen verdampft. Bei Raumtemperatur haben einzelne Wassermoleküle mit besonders hoher kinetischer Energie (Maxwell-Boltzmann-Verteilung) genug Energie, um die Wasserstoffbrücken zu überwinden und zu entweichen. Dieser Prozess (Verdunstung) ist langsamer als Sieden.",
      },
      selfTest: [
        {
          question: "Was ist die Verdampfungsenthalpie von Wasser (gerundet)?",
          options: [
            "334 J/g",
            "418 J/g",
            "2257 J/g",
            "4186 J/g",
            "100 J/g",
          ],
          correctIndex: 2,
          explanation: "Die Verdampfungsenthalpie von Wasser beträgt ~2257 J/g (40,7 kJ/mol). Sie ist viel größer als die Schmelzenthalpie (334 J/g), da beim Verdampfen alle intermolekularen Wasserstoffbrücken gebrochen werden müssen.",
          hints: [
            "Verdampfung erfordert mehr Energie als Schmelzen",
            "Die Zahl 2257 J/g ist ein wichtiger Merkwert",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was versteht man unter Sublimation?",
          options: [
            "Direkter Übergang von flüssig nach gasförmig ohne Siedepunkt",
            "Direkter Übergang von fest nach gasförmig ohne flüssige Phase",
            "Direkter Übergang von gasförmig nach fest",
            "Abkühlung unter den Siedepunkt",
            "Verdampfung unter vermindertem Druck",
          ],
          correctIndex: 1,
          explanation: "Sublimation bezeichnet den direkten Übergang vom festen in den gasförmigen Aggregatzustand, ohne die flüssige Phase zu durchlaufen. Bekannte Beispiele: Trockeneis (CO₂ sublimiert bei −78,5°C bei 1 bar), Mottenkugeln (Naphthalin), Gefriertrocknung.",
          hints: [
            "Sublimation überspringt die flüssige Phase",
            "Trockeneis 'raucht' — es sublimiert direkt",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Wie viel Energie wird zum Schmelzen von 50 g Eis bei 0°C benötigt? (ΔH_s = 334 J/g)",
          options: [
            "334 J",
            "1670 J",
            "16700 J",
            "167 J",
            "3340 J",
          ],
          correctIndex: 2,
          explanation: "Q = m × ΔH_s = 50 g × 334 J/g = 16.700 J = 16,7 kJ. Diese Energie geht ins Aufbrechen der Gitterstruktur, nicht in die Temperaturerhöhung.",
          hints: [
            "Q = m × ΔH_s",
            "50 × 334 = ?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "1 mol Glucose (M=180 g/mol) wird in 1 kg Wasser gelöst. Um wie viel sinkt der Gefrierpunkt? (K_f = 1,86 K·kg/mol)",
          options: [
            "0,186°C",
            "1,86°C",
            "18,6°C",
            "0,0186°C",
            "3,72°C",
          ],
          correctIndex: 1,
          explanation: "b = 1 mol/1 kg = 1 mol/kg. ΔT_f = K_f × b = 1,86 × 1 = 1,86°C. Glucose dissoziiert nicht (kein Elektrolyt), daher gilt der einfache Wert ohne Dissoziationsfaktor.",
          hints: [
            "ΔT_f = K_f × b (Molalität = mol/kg Lösungsmittel)",
            "Glucose dissoziiert nicht → i=1",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welcher der folgenden Vorgänge ist exotherm?",
          options: [
            "Schmelzen von Eis",
            "Verdampfen von Wasser",
            "Sublimation von Trockeneis",
            "Kondensation von Wasserdampf",
            "Lösen von Kochsalz in Wasser",
          ],
          correctIndex: 3,
          explanation: "Kondensation (gasförmig → flüssig) ist exotherm: Die intermolekularen Bindungen werden neu geknüpft, dabei wird Energie freigesetzt. ΔH_Kondensation = −ΔH_Verdampfung. Schmelzen, Verdampfen und Sublimation sind endotherm.",
          hints: [
            "Phasenübergänge zu niedrigerem Aggregatzustand setzen Energie frei",
            "Das Gegenteil von Verdampfen ist Kondensieren",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ch-4-03',
      title: 'Phasendiagramm und kritischer Punkt',
      content: `## Das Phasendiagramm

Ein Phasendiagramm stellt dar, welcher Aggregatzustand einer Substanz bei gegebener Temperatur (x-Achse) und gegebenem Druck (y-Achse) stabil ist. Es enthält drei Bereiche (Phasenfelder: fest, flüssig, gasförmig) und drei Kurven, die die Coexistenz zweier Phasen beschreiben:

1. **Schmelzkurve** (fest-flüssig-Gleichgewicht): Druckabhängigkeit des Schmelzpunkts. Bei Wasser hat die Schmelzkurve eine negative Steigung (Druckerhöhung → Schmelzpunkt sinkt — einzigartig!), bei den meisten Stoffen eine positive Steigung.

2. **Dampfdruckkurve** (flüssig-gasförmig): Zeigt den Sättigungsdampfdruck als Funktion der Temperatur. Endet am kritischen Punkt.

3. **Sublimationskurve** (fest-gasförmig): Gleichgewicht zwischen festem und gasförmigem Zustand.

## Tripelpunkt und kritischer Punkt

Der **Tripelpunkt** ist der einzige Punkt, an dem alle drei Phasen gleichzeitig im Gleichgewicht coexistieren. Für Wasser: T_tr = 273,16 K (0,01°C), p_tr = 611,73 Pa (0,006 bar). Der Tripelpunkt ist so charakteristisch, dass er zur Definition der Kelvin-Skala genutzt wurde.

Der **kritische Punkt** liegt am Ende der Dampfdruckkurve. Oberhalb der kritischen Temperatur T_c und des kritischen Drucks p_c kann keine flüssige Phase existieren. Für Wasser: T_c = 374°C, p_c = 221 bar. Oberhalb des kritischen Punkts entsteht ein **überkritisches Fluid**, das Eigenschaften von Gas und Flüssigkeit kombiniert.

## Überkritische Fluide

Überkritisches CO₂ (T_c = 31°C, p_c = 74 bar) wird als umweltfreundliches Lösungsmittel eingesetzt: Koffeinextraktion aus Kaffeebohnen, Extraktion von Aromastoffen, Pharmazie (Mikronisierung von Wirkstoffen). Überkritisches CO₂ hat die Lösekraft einer Flüssigkeit, aber die niedrige Viskosität und hohe Diffusivität eines Gases.`,
      lernziele: [
        "Das Phasendiagramm von Wasser beschreiben und Tripelpunkt sowie kritischen Punkt lokalisieren",
        "Die Schmelzkurve von Wasser als Anomalie erkennen und erklären",
        "Überkritische Fluide definieren und Anwendungsbeispiele nennen",
      ],
      sections: [
        {
          heading: "Das Phasendiagramm von Wasser im Detail",
          text: "Das Phasendiagramm von Wasser ist in mehrfacher Hinsicht ungewöhnlich. Erstens hat die Schmelzkurve eine leicht negative Steigung (dT/dp < 0), d.h. unter Druck schmilzt Eis bei etwas niedrigerer Temperatur. Das erklärt (teilweise) das Gleiten auf Schlittschuheis. Zweitens liegt der Tripelpunkt bei 0,01°C und 611 Pa — also unterhalb des Normaldrucks. Trockeneis kann daher bei Normaldruck sublimieren (kein flüssiges CO₂ bei 1 bar möglich). Drittens ist der kritische Punkt von Wasser bei 374°C und 221 bar ungewöhnlich hoch — das spiegelt die starken Wasserstoffbrücken wider. Überkritisches Wasser ist ein starkes Oxidationsmittel und wird für die Zersetzung organischer Abfälle genutzt.",
        },
        {
          heading: "Anwendungen überkritischer Fluide in der Medizin und Industrie",
          text: "Überkritisches CO₂ (scCO₂) hat ideale Extraktionseigenschaften: niedrige kritische Temperatur (31°C, schonend für Biomoleküle), gute Löslichkeit für unpolare Verbindungen, leicht durch Druckabsenkung entfernbar (keine Lösungsmittelrückstände). In der Pharmaindustrie wird scCO₂ zur Mikronisierung schlecht löslicher Wirkstoffe (z.B. RESS-Verfahren) eingesetzt — kleinere Partikel verbessern die Bioverfügbarkeit. In der Sterilisierung können Endoskope und empfindliche medizinische Geräte mit scCO₂ + Peressigsäure schonend desinfiziert werden (keine Hitze, kein giftiges Ethylenoxid). Die Gefriertrocknung (Lyophilisation) nutzt die Sublimationskurve: Bei sehr niedrigem Druck gefriert Wasser und sublimiert direkt.",
        },
      ],
      merksätze: [
        "Tripelpunkt Wasser: 0,01°C und 611 Pa — alle drei Phasen gleichzeitig",
        "Kritischer Punkt Wasser: 374°C, 221 bar — danach nur noch überkritisches Fluid",
        "Schmelzkurve Wasser: negative Steigung (Druck ↑ → Schmelzpunkt ↓) — Anomalie!",
      ],
      klinischerBezug: "Die Lyophilisation (Gefriertrocknung) nutzt das Phasendiagramm von Wasser gezielt: Durch Abkühlen unter den Gefrierpunkt und Anlegen von Vakuum (Druck unter Tripelpunkts-Druck) sublimiert das Eis direkt, ohne zu schmelzen. So werden hitzeempfindliche Impfstoffe und Blutprodukte schonend getrocknet.",
      altfrage: {
        question: "Warum existiert bei normalen Druckbedingungen (1 bar) kein flüssiges CO₂?",
        answer: "Beim Phasendiagramm von CO₂ liegt der Tripelpunkt bei −56,6°C und 5,18 bar. Bei 1 bar liegt man unterhalb des Tripelpunktdrucks, wo die flüssige Phase grundsätzlich nicht stabil ist. Daher geht festes CO₂ (Trockeneis) direkt in den Gaszustand über (Sublimation), ohne flüssig zu werden.",
      },
      selfTest: [
        {
          question: "Was ist der Tripelpunkt einer Substanz?",
          options: [
            "Die Temperatur, bei der eine Substanz drei verschiedene Kristallformen bildet",
            "Der Punkt im Phasendiagramm, an dem alle drei Aggregatzustände gleichzeitig im Gleichgewicht coexistieren",
            "Der Druck, bei dem eine Substanz drei verschiedene Dichten hat",
            "Die Temperatur und Druck, oberhalb derer keine Flüssigphase existiert",
            "Der Punkt, an dem Siedepunkt und Schmelzpunkt übereinstimmen",
          ],
          correctIndex: 1,
          explanation: "Am Tripelpunkt coexistieren fest, flüssig und gasförmig gleichzeitig im thermodynamischen Gleichgewicht. Für Wasser liegt er bei 0,01°C und 611,73 Pa — dieser Punkt ist so reproduzierbar, dass er früher zur Definition der Kelvin-Skala diente.",
          hints: [
            "Drei Phasen = drei Aggregatzustände gleichzeitig",
            "Für Wasser: 0,01°C und ~0,006 bar",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was beschreibt der kritische Punkt im Phasendiagramm?",
          options: [
            "Der Punkt, an dem alle drei Phasen gleichzeitig coexistieren",
            "Der höchste Punkt der Schmelzkurve",
            "Der Punkt, oberhalb dessen fest und flüssig nicht mehr zu unterscheiden sind",
            "Der Punkt, oberhalb dessen keine Unterscheidung zwischen Gas und Flüssigkeit mehr möglich ist",
            "Der Siedepunkt bei Normaldruck",
          ],
          correctIndex: 3,
          explanation: "Am kritischen Punkt enden die Eigenschaften von Gas und Flüssigkeit zu verschmelzen. Oberhalb von T_c und p_c gibt es nur noch ein überkritisches Fluid — kein Phasenübergang mehr zwischen Gas und Flüssigkeit möglich.",
          hints: [
            "Der kritische Punkt liegt am Ende der Dampfdruckkurve",
            "Oberhalb davon verschwimmt die Grenze zwischen Gas und Flüssigkeit",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Eigenschaft der Schmelzkurve von Wasser ist anomal?",
          options: [
            "Sie hat eine positive Steigung (Druck↑ → Schmelzpunkt↑)",
            "Sie hat eine negative Steigung (Druck↑ → Schmelzpunkt↓)",
            "Sie verläuft waagerecht (Schmelzpunkt druckunabhängig)",
            "Sie endet bei einem kritischen Punkt",
            "Sie beginnt am Siedepunkt",
          ],
          correctIndex: 1,
          explanation: "Bei den meisten Stoffen steigt der Schmelzpunkt mit dem Druck (positive Steigung). Bei Wasser sinkt der Schmelzpunkt mit steigendem Druck (negative Steigung) — weil Eis eine geringere Dichte als Wasser hat und Druck das kompaktere (flüssige) System bevorzugt.",
          hints: [
            "Wasser ist dichter als Eis — was bevorzugt Druck?",
            "Die meisten Stoffe haben positive Schmelzkurven-Steigung",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Überkritisches CO₂ wird in der Pharmaindustrie zur Extraktion eingesetzt. Warum ist scCO₂ besonders geeignet?",
          options: [
            "Weil CO₂ sehr toxisch ist und alle Keime abtötet",
            "Weil CO₂ eine sehr hohe kritische Temperatur von >200°C hat und so Extraktion im Hochtemperaturbereich ermöglicht",
            "Weil scCO₂ die Löslichkeit einer Flüssigkeit mit der niedrigen Viskosität eines Gases kombiniert und rückstandsfrei entfernbar ist",
            "Weil CO₂ nur apolare Moleküle löst und damit selektiv Verunreinigungen entfernt",
            "Weil CO₂ unter überkritischen Bedingungen Wasser ersetzt und Hydrierung ermöglicht",
          ],
          correctIndex: 2,
          explanation: "Überkritisches CO₂ kombiniert hervorragende Lösungseigenschaften (wie eine Flüssigkeit) mit hoher Diffusivität und niedriger Viskosität (wie ein Gas). Es ist nicht toxisch, nicht brennbar, und kann durch einfache Druckabsenkung rückstandsfrei entfernt werden. Die niedrige kritische Temperatur (31°C) schont hitzeempfindliche Naturstoffe.",
          hints: [
            "Kritische Temperatur von CO₂: 31°C — schonend für Naturstoffe",
            "Überkritische Fluide haben Eigenschaften von Gas UND Flüssigkeit",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welcher Zustand tritt auf, wenn Druck und Temperatur beide oberhalb des kritischen Punkts liegen?",
          options: [
            "Fester Zustand",
            "Flüssiger Zustand",
            "Gasförmiger Zustand",
            "Überkritisches Fluid",
            "Plasma",
          ],
          correctIndex: 3,
          explanation: "Oberhalb des kritischen Punkts (T > T_c und p > p_c) gibt es kein Gleichgewicht zwischen Gas und Flüssigkeit mehr. Die Substanz befindet sich im überkritischen Zustand — ein Fluid mit intermediären Eigenschaften.",
          hints: [
            "Jenseits des kritischen Punkts verschwindet die Phasengrenze Gas/Flüssigkeit",
            "Überkritisch = jenseits des kritischen Punkts",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
