import type { Chapter } from "./types";

export const spezialthemenChemieChapter: Chapter = {
  id: "spezialthemen-chemie",
  subject: "chemie",
  title: "Chemische Spezialthemen",
  subtitle: "Elektrochemie, Chemisches Gleichgewicht & Schwefelchemie",
  icon: "🔋",
  chapterNumber: "Kapitel 3/3",
  readingTime: "~35 Minuten",
  level: "Vertiefung",
  frequency: "Seit 2024 neu geprüft",
  overview:
    "Dieses Kapitel behandelt drei wichtige Spezialthemen der Chemie, die seit 2024 verstärkt im MedAT geprüft werden: Die Elektrochemie mit galvanischen Zellen und Elektrolyse, das chemische Gleichgewicht mit dem Prinzip von Le Chatelier sowie die Schwefelchemie mit ihren wichtigsten Verbindungen und Oxidationszahlen. Alle drei Bereiche erfordern ein solides Verständnis von Redoxreaktionen, Gleichgewichtskonzepten und anorganischer Chemie.",
  learningObjectives: [
    "Den Aufbau einer galvanischen Zelle und den Unterschied zur Elektrolyse erklären",
    "Das Prinzip von Le Chatelier auf Gleichgewichtsreaktionen anwenden",
    "Die wichtigsten Schwefelverbindungen und ihre Oxidationszahlen kennen",
    "Die Nernst-Gleichung in vereinfachter Form verstehen",
  ],

  sections: [
    // ──────────────────────────────────────────────
    // 1. Elektrochemie
    // ──────────────────────────────────────────────
    {
      heading: "Elektrochemie",
      content:
        "Die Elektrochemie beschäftigt sich mit dem Zusammenhang zwischen chemischen Reaktionen und elektrischem Strom. Im Zentrum stehen Redoxreaktionen, bei denen Elektronen von einem Stoff (Reduktionsmittel) auf einen anderen (Oxidationsmittel) übertragen werden. In der Elektrochemie werden diese Reaktionen räumlich getrennt, sodass der Elektronenfluss als elektrischer Strom genutzt oder erzwungen werden kann.\n\n" +
        "**Galvanische Zelle (Stromquelle):**\n" +
        "Eine galvanische Zelle wandelt chemische Energie in elektrische Energie um — die Redoxreaktion läuft freiwillig ab (ΔG < 0). Der Aufbau besteht aus zwei Halbzellen, die jeweils eine Elektrode und eine Elektrolytlösung enthalten. Die Halbzellen sind durch eine Salzbrücke (oder ein poröses Diaphragma) verbunden, die den Ladungsausgleich durch Ionenwanderung ermöglicht.\n\n" +
        "• Anode: Hier findet die Oxidation statt (Elektronenabgabe). In der galvanischen Zelle ist die Anode der Minuspol (–), da sie Elektronen abgibt.\n" +
        "• Kathode: Hier findet die Reduktion statt (Elektronenaufnahme). In der galvanischen Zelle ist die Kathode der Pluspol (+), da sie Elektronen aufnimmt.\n\n" +
        "**Daniell-Element — das klassische Beispiel:**\n" +
        "Das Daniell-Element ist die bekannteste galvanische Zelle. Sie besteht aus einer Zink-Halbzelle (Zn-Elektrode in ZnSO₄-Lösung) und einer Kupfer-Halbzelle (Cu-Elektrode in CuSO₄-Lösung).\n" +
        "• Anode (Oxidation): Zn → Zn²⁺ + 2e⁻ (Zink löst sich auf)\n" +
        "• Kathode (Reduktion): Cu²⁺ + 2e⁻ → Cu (Kupfer scheidet sich ab)\n" +
        "• Gesamtreaktion: Zn + Cu²⁺ → Zn²⁺ + Cu\n" +
        "• Spannung: ca. 1,10 V (unter Standardbedingungen)\n\n" +
        "**Standardpotentiale (Reduktionspotentiale):**\n" +
        "Jedes Redoxpaar (z.B. Cu²⁺/Cu oder Zn²⁺/Zn) besitzt ein Standardelektrodenpotential E°, gemessen gegen die Standard-Wasserstoffelektrode (SHE, E° = 0,00 V per Definition). Die Werte werden als Reduktionspotentiale angegeben. Ein positiveres E° bedeutet eine stärkere Tendenz zur Reduktion (= stärkeres Oxidationsmittel). Beispiele: E°(Cu²⁺/Cu) = +0,34 V, E°(Zn²⁺/Zn) = –0,76 V. Die Zellspannung ergibt sich aus: E°(Zelle) = E°(Kathode) – E°(Anode) = +0,34 – (–0,76) = +1,10 V.\n\n" +
        "**Nernst-Gleichung (vereinfacht):**\n" +
        "Die Nernst-Gleichung beschreibt die Abhängigkeit des Elektrodenpotentials von der Konzentration der beteiligten Ionen:\n" +
        "E = E° – (RT / nF) · ln(Q)\n" +
        "Dabei ist R die allgemeine Gaskonstante, T die Temperatur in Kelvin, n die Anzahl der übertragenen Elektronen, F die Faraday-Konstante (96.485 C/mol) und Q der Reaktionsquotient. Bei 25 °C vereinfacht sich dies zu: E = E° – (0,059 V / n) · log(Q).\n\n" +
        "**Elektrolyse (erzwungene Reaktion):**\n" +
        "Die Elektrolyse ist die Umkehrung der galvanischen Zelle: Durch Anlegen einer externen Spannung wird eine nicht-freiwillige Redoxreaktion erzwungen (ΔG > 0). Elektrische Energie wird in chemische Energie umgewandelt. Wichtig: Bei der Elektrolyse kehren sich die Polbezeichnungen um — die Anode ist hier der Pluspol (+) und die Kathode der Minuspol (–). Die Zuordnung Anode = Oxidation und Kathode = Reduktion bleibt jedoch IMMER gleich!\n\n" +
        "Anwendungen der Elektrolyse: Chlor-Alkali-Elektrolyse (Herstellung von Cl₂, NaOH, H₂), Galvanisierung (Beschichtung von Metallen), Aluminiumherstellung (Schmelzflusselektrolyse nach Hall-Héroult), Wasserelektrolyse (2 H₂O → 2 H₂ + O₂).\n\n" +
        "**Batterien und Akkumulatoren:**\n" +
        "Batterien sind galvanische Zellen für den Einmalgebrauch (Primärzellen, z.B. Zink-Kohle-Batterie, Alkaline-Batterie). Akkumulatoren sind wiederaufladbare galvanische Zellen (Sekundärzellen): Beim Entladen arbeiten sie als galvanische Zelle, beim Laden als Elektrolysezelle. Beispiele: Blei-Akkumulator (Autobatterie: Pb/PbO₂ in H₂SO₄), Lithium-Ionen-Akkumulator (Smartphones, Laptops).",
      vergleichsTabelle: {
        headers: ["Eigenschaft", "Galvanische Zelle", "Elektrolyse"],
        rows: [
          [
            "Energieumwandlung",
            "Chemische → Elektrische Energie",
            "Elektrische → Chemische Energie",
          ],
          ["Anode", "Minuspol (–), Oxidation", "Pluspol (+), Oxidation"],
          ["Kathode", "Pluspol (+), Reduktion", "Minuspol (–), Reduktion"],
          ["Freiwilligkeit", "Freiwillig (ΔG < 0)", "Erzwungen (ΔG > 0, externe Spannung nötig)"],
          [
            "Beispiel",
            "Daniell-Element (Zn/Cu), Batterie",
            "Chlor-Alkali-Elektrolyse, Wasserelektrolyse",
          ],
        ],
      },
      merke:
        "<strong>AnOx</strong> — <strong>An</strong>ode = <strong>Ox</strong>idation. <strong>KathRed</strong> — <strong>Kath</strong>ode = <strong>Red</strong>uktion. In der galvanischen Zelle: Anode = Minuspol, Kathode = Pluspol. Bei Elektrolyse genau umgekehrt!",
      klinik:
        "EKG-Elektroden nutzen elektrochemische Prinzipien: Ag/AgCl-Elektroden wandeln ionische Körpersignale in elektrische Signale um.",
    },

    // ──────────────────────────────────────────────
    // 2. Chemisches Gleichgewicht
    // ──────────────────────────────────────────────
    {
      heading: "Chemisches Gleichgewicht",
      content:
        "Viele chemische Reaktionen sind reversibel — das bedeutet, dass sowohl die Hinreaktion (Edukte → Produkte) als auch die Rückreaktion (Produkte → Edukte) gleichzeitig ablaufen. Nach einiger Zeit stellt sich ein dynamisches Gleichgewicht ein, bei dem die Geschwindigkeiten der Hin- und Rückreaktion gleich sind. Makroskopisch scheint die Reaktion stillzustehen, auf molekularer Ebene laufen aber beide Reaktionen ständig weiter.\n\n" +
        "**Gleichgewichtskonstante K:**\n" +
        "Für eine allgemeine reversible Reaktion aA + bB ⇌ cC + dD lautet die Gleichgewichtskonstante:\n" +
        "K = [C]ᶜ · [D]ᵈ / ([A]ᵃ · [B]ᵇ)\n" +
        "Die eckigen Klammern bezeichnen die Konzentrationen im Gleichgewicht, die Exponenten sind die stöchiometrischen Koeffizienten. Reine Feststoffe und reine Flüssigkeiten werden NICHT in den Ausdruck aufgenommen (ihre Aktivität ist per Definition 1).\n\n" +
        "• K > 1: Das Gleichgewicht liegt auf der Produktseite → die Hinreaktion ist bevorzugt.\n" +
        "• K < 1: Das Gleichgewicht liegt auf der Eduktseite → die Rückreaktion ist bevorzugt.\n" +
        "• K = 1: Edukte und Produkte liegen in vergleichbaren Konzentrationen vor.\n" +
        "• K ist temperaturabhängig! Bei einer bestimmten Temperatur ist K konstant.\n\n" +
        "**Le Chatelier — Prinzip des kleinsten Zwangs:**\n" +
        "Wenn auf ein System im Gleichgewicht ein äußerer Zwang ausgeübt wird (Änderung von Konzentration, Druck oder Temperatur), verschiebt sich das Gleichgewicht so, dass es dem Zwang entgegenwirkt. Das System „weicht dem Zwang aus“.\n\n" +
        "1) Konzentrationsänderung:\n" +
        "• Zugabe eines Edukts → Gleichgewicht verschiebt sich zu den Produkten (um das zugegebene Edukt zu verbrauchen).\n" +
        "• Zugabe eines Produkts → Gleichgewicht verschiebt sich zu den Edukten.\n" +
        "• Entfernung eines Produkts → Gleichgewicht verschiebt sich zu den Produkten (um das entfernte Produkt nachzubilden).\n" +
        "Wichtig: K ändert sich dabei NICHT — nur die Konzentrationen verschieben sich, bis Q wieder gleich K ist.\n\n" +
        "2) Druckänderung (nur bei Gasreaktionen relevant):\n" +
        "• Druckerhöhung → Gleichgewicht verschiebt sich zur Seite mit weniger Gasteilchen (weniger Mol Gas).\n" +
        "• Druckerniedrigung → Gleichgewicht verschiebt sich zur Seite mit mehr Gasteilchen.\n" +
        "• Wenn beide Seiten gleich viele Gasteilchen haben → keine Verschiebung.\n" +
        "Auch hier bleibt K unverändert.\n\n" +
        "3) Temperaturänderung:\n" +
        "• Bei exothermen Reaktionen (ΔH < 0): Temperaturerhöhung → Gleichgewicht verschiebt sich zur Rückreaktion (endotherme Richtung). K wird kleiner.\n" +
        "• Bei endothermen Reaktionen (ΔH > 0): Temperaturerhöhung → Gleichgewicht verschiebt sich zur Hinreaktion (endotherme Richtung). K wird größer.\n" +
        "Temperatur ist der einzige Faktor, der K tatsächlich verändert!\n\n" +
        "**Katalysator und Gleichgewicht:**\n" +
        "Ein Katalysator beschleunigt sowohl die Hin- als auch die Rückreaktion gleichermaßen, indem er die Aktivierungsenergie herabsetzt. Er verändert die Gleichgewichtskonstante K NICHT und verschiebt das Gleichgewicht NICHT. Das Gleichgewicht wird lediglich schneller erreicht. Dies ist eine der häufigsten Prüfungsfragen!\n\n" +
        "**Anwendungsbeispiel — Haber-Bosch-Verfahren:**\n" +
        "N₂ + 3 H₂ ⇌ 2 NH₃ (ΔH = –92 kJ/mol, exotherm)\n" +
        "Nach Le Chatelier: Hoher Druck (200–300 bar) begünstigt die Produktseite (4 Mol Gas → 2 Mol Gas). Niedrige Temperatur begünstigt die Produktseite (exotherm), aber die Reaktion wäre zu langsam → Kompromisstemperatur von ca. 400–500 °C wird gewählt. Ein Eisenkatalysator beschleunigt die Gleichgewichtseinstellung, ohne K zu ändern.",
      merke:
        "Le Chatelier: Das System <strong>weicht dem Zwang aus</strong>. Druck↑ → Seite mit <strong>weniger Gasteilchen</strong>. Temperatur↑ → <strong>endotherme</strong> Richtung. Katalysator: schneller zum GG, aber <strong>ändert K nicht</strong>!",
      altfrage:
        '"Was passiert, wenn man zu einem System im Gleichgewicht einen Katalysator gibt?" → Das Gleichgewicht wird <strong>schneller erreicht</strong>, aber die <strong>Lage des Gleichgewichts ändert sich NICHT</strong> (K bleibt gleich).',
    },

    // ──────────────────────────────────────────────
    // 3. Schwefelchemie
    // ──────────────────────────────────────────────
    {
      heading: "Schwefelchemie",
      content:
        "Schwefel (S) steht in der 6. Hauptgruppe (Gruppe 16, Chalkogene) des Periodensystems mit der Ordnungszahl 16. Er ist ein nichtmetallisches Element, das in der Natur sowohl elementar (vulkanische Gebiete) als auch in zahlreichen Verbindungen vorkommt. Schwefelverbindungen spielen in der Industrie, der Umweltchemie und der Medizin eine wichtige Rolle.\n\n" +
        "**Elementarer Schwefel — Allotropie:**\n" +
        "Schwefel bildet verschiedene allotrope Modifikationen. Die stabilste Form unter Normalbedingungen ist der rhombische Schwefel (α-Schwefel), bestehend aus kronenförmigen S₈-Ringen. Beim Erhitzen wandelt er sich in monoklinen Schwefel (β-Schwefel) um (ebenfalls S₈-Ringe, aber andere Kristallstruktur). Bei weiterem Erhitzen werden die S₈-Ringe aufgebrochen und bilden lange Schwefelketten — die Schmelze wird zähflüssig und dunkelbraun.\n\n" +
        "**Oxidationszahlen des Schwefels:**\n" +
        "Schwefel ist besonders vielseitig in seinen Oxidationszahlen. Die wichtigsten sind:\n" +
        "• –2: In Sulfiden (S²⁻) und Schwefelwasserstoff (H₂S). Schwefel ist hier das elektronegativere Atom.\n" +
        "•  0: Elementarer Schwefel (S₈).\n" +
        "• +4: In Schwefeldioxid (SO₂) und Sulfiten (SO₃²⁻). Schwefel hat eine mittlere Oxidationsstufe.\n" +
        "• +6: In Schwefeltrioxid (SO₃), Schwefelsäure (H₂SO₄) und Sulfaten (SO₄²⁻). Höchste Oxidationsstufe.\n\n" +
        "**Schwefelsäure H₂SO₄ — die wichtigste Schwefelverbindung:**\n" +
        "Schwefelsäure ist die weltweit meistproduzierte Chemikalie (ca. 260 Millionen Tonnen pro Jahr). Sie ist eine starke zweiprotonige (diprotische) Säure: Die erste Protolysestufe ist vollständig (H₂SO₄ → H⁺ + HSO₄⁻, starke Säure), die zweite Protolysestufe nur teilweise (HSO₄⁻ ⇌ H⁺ + SO₄²⁻, mittelstarke Säure, pKₛ₂ ≈ 1,9).\n" +
        "Eigenschaften: Stark hygroskopisch (wasseranziehend, wird daher als Trocknungsmittel verwendet), stark exotherme Reaktion beim Mischen mit Wasser (IMMER Säure ins Wasser geben, nie umgekehrt! — Merke: „Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure“). Konzentrierte H₂SO₄ wirkt oxidierend und verkohlend auf organische Stoffe.\n" +
        "Herstellung: Kontaktverfahren (S → SO₂ → SO₃ → H₂SO₄). Verwendung: Düngemittelproduktion, Metallverarbeitung, Batteriesäure (Bleiakkumulator), chemische Synthesen.\n\n" +
        "**Sulfate (SO₄²⁻):**\n" +
        "Salze der Schwefelsäure. Viele Sulfate sind gut wasserlöslich (z.B. Na₂SO₄, CuSO₄). Schwerlöslich sind BaSO₄ (Bariumsulfat — Röntgenkontrastmittel!) und PbSO₄. Gips (CaSO₄ · 2 H₂O) ist ein wichtiges Baumaterial und wird in der Medizin für Gipsverbände verwendet.\n\n" +
        "**Schwefeldioxid SO₂ und saurer Regen:**\n" +
        "SO₂ entsteht bei der Verbrennung schwefelhaltiger fossiler Brennstoffe. In der Atmosphäre wird es zu SO₃ oxidiert, das mit Wasser zu Schwefelsäure reagiert: SO₃ + H₂O → H₂SO₄. Dies ist eine Hauptursache für sauren Regen, der Wälder, Gewässer und Gebäude schädigt. Schwefel in SO₂ hat die Oxidationszahl +4.\n\n" +
        "**Sulfide (S²⁻) und Schwefelwasserstoff H₂S:**\n" +
        "H₂S ist ein farbloses, giftiges Gas mit dem charakteristischen Geruch nach faulen Eiern. Er ist eine schwache, zweiprotonige Säure (pKₛ₁ ≈ 7,0). Schwefel hat hier die Oxidationszahl –2. H₂S ist schon in geringen Konzentrationen (ab ca. 10 ppm) wahrnehmbar, lähmt aber in höheren Konzentrationen (ab ca. 100 ppm) den Geruchssinn — dies macht ihn besonders gefährlich, da die Warnung ausbleibt. Vorkommen: Vulkangase, Erdgas, Faulprozesse, Kanalisation.\n\n" +
        "**Sulfit (SO₃²⁻):**\n" +
        "Salze der schwefligen Säure (H₂SO₃). Sulfite werden als Konservierungsmittel in der Lebensmittelindustrie eingesetzt (z.B. in Wein, Trockenfrüchten). Sie wirken antioxidativ und antimikrobiell. Schwefel hat hier die Oxidationszahl +4.",
      vergleichsTabelle: {
        headers: ["Verbindung", "Formel", "OZ des S", "Eigenschaft"],
        rows: [
          [
            "Schwefelwasserstoff",
            "H₂S",
            "–2",
            "Giftiges Gas, Geruch nach faulen Eiern, schwache Säure",
          ],
          ["Schwefeldioxid", "SO₂", "+4", "Stechend riechendes Gas, verursacht sauren Regen"],
          ["Schwefeltrioxid", "SO₃", "+6", "Reagiert heftig mit Wasser zu H₂SO₄"],
          [
            "Schwefelsäure",
            "H₂SO₄",
            "+6",
            "Stärkste zweiprotonige Säure, stark hygroskopisch, meistproduzierte Chemikalie",
          ],
        ],
      },
      merke:
        "Schwefel-Oxidationszahlen: <strong>–2</strong> (H₂S), <strong>+4</strong> (SO₂), <strong>+6</strong> (H₂SO₄). Von –2 über 0, +4 bis +6. H₂SO₄ ist die <strong>weltweit meistproduzierte Chemikalie</strong>.",
      klinik:
        "H₂S-Vergiftung: Schon geringe Konzentrationen sind giftig (hemmt Cytochrom-c-Oxidase ähnlich wie Cyanid). Vorkommen: Kanalisation, Vulkangebiete, Industrie.",
    },
  ],

  keyFacts: [
    {
      label: "AnOx / KathRed",
      value: "Anode = Oxidation, Kathode = Reduktion (immer!)",
    },
    {
      label: "Galvanische Zelle",
      value: "Anode = Minuspol (–), Kathode = Pluspol (+)",
    },
    {
      label: "Le Chatelier",
      value: "System weicht dem Zwang aus (Gleichgewichtsverschiebung)",
    },
    {
      label: "Katalysator & K",
      value: "Ändert K nicht — beschleunigt nur die Gleichgewichtseinstellung",
    },
    {
      label: "H₂SO₄",
      value: "Stärkste zweiprotonige Säure, weltweit meistproduzierte Chemikalie",
    },
    {
      label: "S-Oxidationszahlen",
      value: "–2 (H₂S) / +4 (SO₂) / +6 (H₂SO₄)",
    },
    {
      label: "K > 1",
      value: "Gleichgewicht auf der Produktseite bevorzugt",
    },
    {
      label: "H₂S",
      value: "Giftig — hemmt Cytochrom-c-Oxidase (Atmungskette), riecht nach faulen Eiern",
    },
  ],

  selfTestQuestions: [
    {
      question: "An welcher Elektrode findet Oxidation statt?",
      options: ["Kathode", "Anode", "Beide", "Weder noch", "Abwechselnd"],
      correctIndex: 1,
      explanation:
        "AnOx — An der Anode findet Oxidation statt (Elektronenabgabe). An der Kathode findet Reduktion statt (Elektronenaufnahme). Das gilt für galvanische Zellen UND Elektrolyse.",
    },
    {
      question: "Was bewirkt ein Katalysator im chemischen Gleichgewicht?",
      options: [
        "Verschiebt K zu Produkten",
        "Verschiebt K zu Edukten",
        "Ändert K nicht, beschleunigt Einstellung",
        "Stoppt die Reaktion",
        "Erhöht nur die Hinreaktion",
      ],
      correctIndex: 2,
      explanation:
        "Ein Katalysator beschleunigt Hin- UND Rückreaktion gleichermaßen. Das Gleichgewicht wird schneller erreicht, aber die Gleichgewichtskonstante K ändert sich nicht.",
    },
    {
      question: "Welche Oxidationszahl hat Schwefel in H₂SO₄?",
      options: ["–2", "0", "+2", "+4", "+6"],
      correctIndex: 4,
      explanation:
        "H₂SO₄: H = +1 (×2 = +2), O = –2 (×4 = –8). Gesamtladung = 0. Also: +2 + S + (–8) = 0 → S = +6.",
    },
    {
      question: "Was ist das Daniell-Element?",
      options: [
        "Eine Batterie mit Lithium",
        "Eine galvanische Zelle mit Zn und Cu",
        "Eine Elektrolysezelle",
        "Eine Brennstoffzelle",
        "Ein Kondensator",
      ],
      correctIndex: 1,
      explanation:
        "Das Daniell-Element ist die klassische galvanische Zelle mit Zink-Anode (Oxidation: Zn → Zn²⁺ + 2e⁻) und Kupfer-Kathode (Reduktion: Cu²⁺ + 2e⁻ → Cu). Spannung ≈ 1,1 V.",
    },
    {
      question: "H₂S riecht nach...",
      options: ["Ammoniak", "Chlor", "Faulen Eiern", "Essig", "Ist geruchlos"],
      correctIndex: 2,
      explanation:
        "H₂S hat den charakteristischen Geruch nach faulen Eiern. Er ist schon in geringen Konzentrationen wahrnehmbar, aber in höheren Konzentrationen lähmt er den Geruchssinn — gefährlich!",
    },
  ],

  summary: [
    "Die Elektrochemie verbindet Redoxreaktionen mit elektrischem Strom. In galvanischen Zellen läuft die Reaktion freiwillig ab (chemische → elektrische Energie), bei der Elektrolyse wird sie erzwungen (elektrische → chemische Energie).",
    "Anode = Oxidation (AnOx), Kathode = Reduktion (KathRed) — das gilt IMMER. Die Polbezeichnung unterscheidet sich: Galvanische Zelle (Anode = –, Kathode = +), Elektrolyse (Anode = +, Kathode = –).",
    "Das chemische Gleichgewicht ist dynamisch: Hin- und Rückreaktion laufen gleich schnell. Die Gleichgewichtskonstante K beschreibt das Verhältnis der Konzentrationen (K > 1: Produktseite, K < 1: Eduktseite).",
    "Le Chatelier: Das System weicht dem Zwang aus. Konzentrationsänderung und Druckänderung verschieben das GG, ändern aber K nicht. Nur Temperaturänderung verändert K.",
    "Ein Katalysator beschleunigt beide Reaktionsrichtungen gleich und ändert K nicht — er sorgt nur dafür, dass das Gleichgewicht schneller erreicht wird.",
    "Schwefel zeigt Oxidationszahlen von –2 (H₂S) über 0 (S₈) und +4 (SO₂) bis +6 (H₂SO₄). H₂SO₄ ist die weltweit meistproduzierte Chemikalie und eine starke zweiprotonige Säure.",
  ],
};
