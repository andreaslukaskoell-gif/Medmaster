export const fragenPart4 = [
  {
    id: 'ch-q-151',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Bei der Reaktion von Zink mit Salzsäure (HCl) entsteht Wasserstoffgas. Welche Aussage über die Oxidationszahlen ist korrekt?',
    optionen: [
      'Zink wird oxidiert, seine Oxidationszahl steigt von 0 auf +2',
      'Wasserstoff wird oxidiert, seine Oxidationszahl steigt von -1 auf 0',
      'Chlor wird reduziert, seine Oxidationszahl sinkt von 0 auf -1',
      'Zink wird reduziert, seine Oxidationszahl sinkt von +2 auf 0',
      'Wasserstoff wird weder oxidiert noch reduziert'
    ],
    korrekteAntwort: 0,
    erklaerung: 'Zink (Zn) geht von der Oxidationszahl 0 (elementar) zu +2 (Zn²⁺) über und gibt dabei Elektronen ab - das ist Oxidation. Wasserstoff wird von +1 (in HCl) zu 0 (in H₂) reduziert, indem es Elektronen aufnimmt.',
    strategieTipp: 'Bei Redoxreaktionen immer die Änderung der Oxidationszahlen verfolgen: Oxidation = Erhöhung, Reduktion = Erniedrigung. Merksatz: OIL RIG (Oxidation Is Loss, Reduction Is Gain - bezogen auf Elektronen).'
  },
  {
    id: 'ch-q-152',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Aussage über Oxidation und Reduktion ist richtig?',
    optionen: [
      'Oxidation ist die Aufnahme von Elektronen',
      'Reduktion ist die Abgabe von Elektronen',
      'Oxidation und Reduktion können unabhängig voneinander ablaufen',
      'Bei einer Redoxreaktion werden Elektronen vom Reduktionsmittel auf das Oxidationsmittel übertragen',
      'Das Oxidationsmittel wird selbst oxidiert'
    ],
    korrekteAntwort: 3,
    erklaerung: 'Bei Redoxreaktionen gibt das Reduktionsmittel Elektronen ab (wird oxidiert) und das Oxidationsmittel nimmt Elektronen auf (wird reduziert). Beide Prozesse laufen immer gekoppelt ab - Elektronen können nicht einfach verschwinden.',
    strategieTipp: 'Das Reduktionsmittel reduziert andere Stoffe, wird dabei aber selbst oxidiert. Das Oxidationsmittel oxidiert andere Stoffe, wird dabei aber selbst reduziert - klingt paradox, ist aber logisch!'
  },
  {
    id: 'ch-q-153',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Bestimmen Sie die Oxidationszahl von Schwefel in H₂SO₄ (Schwefelsäure).',
    optionen: [
      '+2',
      '+4',
      '+6',
      '+8',
      '-2'
    ],
    korrekteAntwort: 2,
    erklaerung: 'In H₂SO₄: H hat +1, O hat -2. Die Summe muss 0 ergeben (neutrales Molekül). Rechnung: 2(+1) + x + 4(-2) = 0 → 2 + x - 8 = 0 → x = +6. Schwefel hat in Schwefelsäure die Oxidationszahl +6.',
    strategieTipp: 'Bei der Berechnung von Oxidationszahlen: H ist fast immer +1, O fast immer -2. Die Summe aller Oxidationszahlen entspricht der Gesamtladung des Teilchens (bei Molekülen also 0).'
  },
  {
    id: 'ch-q-154',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei der Reaktion MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O handelt es sich um eine Halbrektion. Wie ändert sich die Oxidationszahl von Mangan?',
    optionen: [
      'Von +4 auf +2 (Reduktion um 2)',
      'Von +6 auf +2 (Reduktion um 4)',
      'Von +7 auf +2 (Reduktion um 5)',
      'Von +5 auf +2 (Reduktion um 3)',
      'Von +8 auf +2 (Reduktion um 6)'
    ],
    korrekteAntwort: 2,
    erklaerung: 'In MnO₄⁻: 4 Sauerstoffatome mit je -2 = -8, Gesamtladung -1, also Mn = +7. In Mn²⁺: Oxidationszahl +2. Die Änderung beträgt 7 - 2 = 5, was der Anzahl der aufgenommenen Elektronen entspricht. Dies ist eine Reduktion.',
    strategieTipp: 'Bei Permanganat (MnO₄⁻) hat Mangan immer die Oxidationszahl +7. Die Anzahl der übertragenen Elektronen entspricht der Änderung der Oxidationszahl. Das hilft beim Aufstellen von Redoxgleichungen.'
  },
  {
    id: 'ch-q-155',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter einem galvanischen Element?',
    optionen: [
      'Eine Apparatur zur Durchführung von Elektrolysen',
      'Eine Vorrichtung zur chemischen Erzeugung von elektrischer Energie',
      'Ein Gerät zur Messung von pH-Werten',
      'Eine Methode zur Trennung von Ionengemischen',
      'Ein Katalysator für Redoxreaktionen'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Ein galvanisches Element (z.B. Batterie) wandelt chemische Energie aus freiwillig ablaufenden Redoxreaktionen in elektrische Energie um. Die Elektronen fließen dabei vom unedleren zum edleren Metall durch einen äußeren Stromkreis.',
    strategieTipp: 'Unterscheide: Galvanisches Element = Chemie → Strom (Batterie), Elektrolyse = Strom → Chemie (erzwungene Reaktion). Beides sind elektrochemische Vorgänge, aber in entgegengesetzter Richtung.'
  },
  {
    id: 'ch-q-156',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'In einem Daniell-Element (Zink-Kupfer-Element) fungiert die Zinkelektrode als Anode. Welcher Prozess läuft dort ab?',
    optionen: [
      'Zn²⁺ + 2e⁻ → Zn (Reduktion)',
      'Zn → Zn²⁺ + 2e⁻ (Oxidation)',
      'Cu²⁺ + 2e⁻ → Cu (Reduktion)',
      'Cu → Cu²⁺ + 2e⁻ (Oxidation)',
      'Es findet kein Elektronentransfer statt'
    ],
    korrekteAntwort: 1,
    erklaerung: 'An der Anode findet Oxidation statt. Zink ist unedler als Kupfer und gibt daher Elektronen ab: Zn → Zn²⁺ + 2e⁻. Die Elektronen fließen durch den äußeren Stromkreis zur Kupfer-Kathode, wo Cu²⁺ reduziert wird.',
    strategieTipp: 'Merksatz: An der Anode läuft Oxidation ab, an der Kathode Reduktion. Im galvanischen Element ist die Anode der Minuspol (Elektronenquelle), bei der Elektrolyse ist sie der Pluspol!'
  },
  {
    id: 'ch-q-157',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Das Standardpotenzial einer Halbrektion beträgt E° = -0,76 V für Zn²⁺/Zn und E° = +0,34 V für Cu²⁺/Cu. Welche Spannung liefert ein Daniell-Element unter Standardbedingungen?',
    optionen: [
      '0,42 V',
      '0,76 V',
      '1,10 V',
      '1,44 V',
      '0,34 V'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Die Zellspannung E°(Zelle) berechnet sich aus: E°(Kathode) - E°(Anode) = 0,34 V - (-0,76 V) = 0,34 V + 0,76 V = 1,10 V. Kupfer ist edler (positiver), wird reduziert (Kathode). Zink ist unedler (negativer), wird oxidiert (Anode).',
    strategieTipp: 'Zellspannung = E°(edler) - E°(unedler). Das edlere Metall (positiveres Potenzial) wird reduziert, das unedlere oxidiert. Eine positive Zellspannung bedeutet, dass die Reaktion freiwillig abläuft.'
  },
  {
    id: 'ch-q-158',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was beschreibt die elektrochemische Spannungsreihe?',
    optionen: [
      'Die Reihenfolge der Elemente nach ihrer Elektronegativität',
      'Die Anordnung von Redoxpaaren nach ihrem Standardpotenzial',
      'Die Löslichkeit von Metallsalzen in Wasser',
      'Die Reaktivität von Nichtmetallen mit Sauerstoff',
      'Die Bindungsenergien in Metallgittern'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Die Spannungsreihe ordnet Redoxpaare nach ihrem Standardpotenzial E°. Oben stehen edle Metalle (positives E°, schwache Reduktionsmittel), unten unedle Metalle (negatives E°, starke Reduktionsmittel). Sie erlaubt Vorhersagen über Redoxreaktionen.',
    strategieTipp: 'Edle Metalle (Au, Pt, Cu) stehen oben in der Reihe - sie werden leicht reduziert, aber ungern oxidiert. Unedle Metalle (Li, Na, Zn) stehen unten - sie werden leicht oxidiert, sind gute Reduktionsmittel.'
  },
  {
    id: 'ch-q-159',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter Elektrolyse?',
    optionen: [
      'Die spontane Reaktion in einem galvanischen Element',
      'Die erzwungene Redoxreaktion durch elektrischen Strom',
      'Die Messung von Redoxpotenzialen',
      'Die Leitfähigkeitsmessung von Elektrolytlösungen',
      'Die Neutralisation von Säuren und Basen'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Bei der Elektrolyse wird durch Anlegen einer externen Spannung eine nicht-freiwillige Redoxreaktion erzwungen. Beispiel: Zersetzung von Wasser in H₂ und O₂. Elektrische Energie wird in chemische Energie umgewandelt - umgekehrt zum galvanischen Element.',
    strategieTipp: 'Elektrolyse benötigt Energie (Stromzufuhr), galvanisches Element liefert Energie. Bei der Elektrolyse ist die Anode der Pluspol (Oxidation), die Kathode der Minuspol (Reduktion).'
  },
  {
    id: 'ch-q-160',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Bei der Elektrolyse einer Natriumchloridlösung entsteht an der Anode hauptsächlich Chlorgas. Welche Reaktion läuft dort ab?',
    optionen: [
      '2 Cl⁻ → Cl₂ + 2e⁻',
      'Cl₂ + 2e⁻ → 2 Cl⁻',
      'Na⁺ + e⁻ → Na',
      '2 H₂O → O₂ + 4 H⁺ + 4e⁻',
      'H₂O + 2e⁻ → H₂ + 2 OH⁻'
    ],
    korrekteAntwort: 0,
    erklaerung: 'An der Anode (Pluspol) findet Oxidation statt. Chlorid-Ionen geben Elektronen ab: 2 Cl⁻ → Cl₂ + 2e⁻. Obwohl auch Wasser oxidiert werden könnte, wird bei ausreichender Chlorid-Konzentration bevorzugt Chlor gebildet (kinetische Gründe).',
    strategieTipp: 'An der Anode werden Anionen oxidiert (geben Elektronen ab). Bei mehreren Möglichkeiten bestimmen Potenzial und Überspannung, welche Reaktion bevorzugt abläuft. Chlorid wird leichter oxidiert als Wasser.'
  },
  {
    id: 'ch-q-161',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die Nernst-Gleichung beschreibt die Abhängigkeit des Redoxpotenzials von den Konzentrationen. Welcher Faktor ist NICHT in der Nernst-Gleichung enthalten?',
    optionen: [
      'Das Standardpotenzial E°',
      'Die Temperatur T',
      'Die Konzentration der beteiligten Spezies',
      'Die Anzahl der übertragenen Elektronen n',
      'Die Viskosität der Lösung'
    ],
    korrekteAntwort: 4,
    erklaerung: 'Die Nernst-Gleichung lautet: E = E° + (RT/nF) × ln(cox/cred). Sie enthält E° (Standardpotenzial), T (Temperatur), n (Elektronenzahl), R (Gaskonstante), F (Faraday-Konstante) und die Konzentrationen. Die Viskosität spielt keine Rolle.',
    strategieTipp: 'Die Nernst-Gleichung zeigt: Erhöht man die Konzentration der oxidierten Form, steigt das Potenzial. Bei Standardbedingungen (alle Konzentrationen 1 mol/L, 25°C) vereinfacht sich E zu E°.'
  },
  {
    id: 'ch-q-162',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Metall schützt Eisen am besten vor Korrosion durch kathodischen Schutz?',
    optionen: [
      'Kupfer (E° = +0,34 V)',
      'Silber (E° = +0,80 V)',
      'Zink (E° = -0,76 V)',
      'Gold (E° = +1,50 V)',
      'Platin (E° = +1,18 V)'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Zink ist unedler als Eisen (E° = -0,44 V) und wird daher bevorzugt oxidiert. Es dient als "Opferanode" und schützt das Eisen vor Korrosion. Edlere Metalle (Cu, Ag, Au, Pt) würden die Korrosion beschleunigen, da Eisen dann als Anode fungieren würde.',
    strategieTipp: 'Beim kathodischen Schutz muss das Schutzmetall unedler sein als das zu schützende Metall. Das unedlere Metall wird bevorzugt oxidiert und "opfert" sich, während das edlere geschützt wird.'
  },
  {
    id: 'ch-q-163',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei der Elektrolyse von geschmolzenem Aluminiumoxid (Al₂O₃) wird Aluminium gewonnen. Wie viele Elektronen sind nötig, um ein Mol Aluminium zu erzeugen?',
    optionen: [
      '1 Mol Elektronen',
      '2 Mol Elektronen',
      '3 Mol Elektronen',
      '4 Mol Elektronen',
      '6 Mol Elektronen'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Die Reduktion von Aluminium verläuft: Al³⁺ + 3e⁻ → Al. Für 1 Mol Aluminium werden 3 Mol Elektronen benötigt. Dies entspricht 3 × 96485 C = 289455 C (Ladungsmenge nach Faraday-Gesetz).',
    strategieTipp: 'Die Anzahl der benötigten Elektronen entspricht der Oxidationszahl des Metalls. Al³⁺ braucht 3 Elektronen, Cu²⁺ braucht 2, Na⁺ braucht 1. Das Faraday-Gesetz verknüpft Stoffmenge und Ladung: Q = n × z × F.'
  },
  {
    id: 'ch-q-164',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Bei welchem Prozess wird ein Gegenstand mit einer dünnen Metallschicht überzogen?',
    optionen: [
      'Elektrolyse zur Metallgewinnung',
      'Galvanisieren (Galvanotechnik)',
      'Korrosion',
      'Hydrometallurgie',
      'Pyrometallurgie'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Beim Galvanisieren wird durch Elektrolyse eine dünne Metallschicht auf einen Gegenstand aufgebracht. Der zu beschichtende Gegenstand dient als Kathode, wo Metallionen aus der Lösung reduziert werden und sich abscheiden (z.B. Verchromen, Verzinken).',
    strategieTipp: 'Galvanotechnik ist eine Anwendung der Elektrolyse. Der Gegenstand ist die Kathode (Reduktion), dort scheiden sich Metallatome ab. Die Anode besteht oft aus dem Beschichtungsmetall und löst sich dabei auf.'
  },
  {
    id: 'ch-q-165',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über die Standardwasserstoffelektrode ist korrekt?',
    optionen: [
      'Sie hat per Definition ein Standardpotenzial von +1,00 V',
      'Sie hat per Definition ein Standardpotenzial von 0,00 V',
      'Sie verwendet flüssigen Wasserstoff bei -253°C',
      'Sie misst nur die Potenziale von Metallen',
      'Sie arbeitet ohne Platinkatalysator'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Die Standardwasserstoffelektrode (SHE) hat per Definition E° = 0,00 V. Sie besteht aus Platin (Katalysator), umspült von H₂-Gas (1 bar) in H⁺-Lösung (1 mol/L, 25°C). Alle anderen Potenziale werden relativ zu ihr gemessen.',
    strategieTipp: 'Die Wasserstoffelektrode ist der Bezugspunkt für alle Redoxpotenziale. Reaktion: 2 H⁺ + 2e⁻ ⇌ H₂. Positive E°-Werte bedeuten edler als H₂, negative Werte unedler als H₂.'
  },
  {
    id: 'ch-q-166',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei einer Redoxreaktion reagieren Permanganat-Ionen (MnO₄⁻) mit Eisen(II)-Ionen in saurer Lösung. Wie viele Fe²⁺-Ionen werden pro MnO₄⁻-Ion oxidiert?',
    optionen: [
      '1',
      '3',
      '5',
      '7',
      '8'
    ],
    korrekteAntwort: 2,
    erklaerung: 'MnO₄⁻ nimmt 5 Elektronen auf (Mn: +7 → +2), Fe²⁺ gibt 1 Elektron ab (Fe: +2 → +3). Für den Elektronenausgleich werden 5 Fe²⁺ pro MnO₄⁻ benötigt. Gesamtreaktion: MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O.',
    strategieTipp: 'Bei Redoxgleichungen: Anzahl aufgenommener Elektronen = Anzahl abgegebener Elektronen. MnO₄⁻ ist ein starkes Oxidationsmittel, besonders in saurer Lösung. Permanganat-Titrationen nutzen die violett → farblos Änderung.'
  },
  {
    id: 'ch-q-167',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Halbzellenreaktionspaar hat das negativste Standardpotenzial und ist damit das stärkste Reduktionsmittel?',
    optionen: [
      'Au³⁺/Au (E° = +1,50 V)',
      'Cu²⁺/Cu (E° = +0,34 V)',
      'H⁺/H₂ (E° = 0,00 V)',
      'Zn²⁺/Zn (E° = -0,76 V)',
      'Li⁺/Li (E° = -3,04 V)'
    ],
    korrekteAntwort: 4,
    erklaerung: 'Lithium hat das negativste Standardpotenzial (-3,04 V) und ist damit das stärkste Reduktionsmittel (gibt am leichtesten Elektronen ab). Je negativer das Potenzial, desto unedler das Metall und desto stärker die reduzierende Wirkung.',
    strategieTipp: 'Spannungsreihe: Negatives E° = starkes Reduktionsmittel (wird leicht oxidiert), positives E° = starkes Oxidationsmittel (wird leicht reduziert). Alkali- und Erdalkalimetalle sind sehr starke Reduktionsmittel.'
  },
  {
    id: 'ch-q-168',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist die Kathode in einem elektrochemischen System?',
    optionen: [
      'Die Elektrode, an der Oxidation stattfindet',
      'Die Elektrode, an der Reduktion stattfindet',
      'Immer der Pluspol',
      'Immer der Minuspol',
      'Die Elektrode mit dem höheren Potenzial in jedem Fall'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Die Kathode ist definiert als die Elektrode, an der Reduktion (Elektronenaufnahme) stattfindet. Im galvanischen Element ist sie der Pluspol, bei der Elektrolyse der Minuspol. Die Definition bezieht sich auf den Prozess, nicht auf die Polarität.',
    strategieTipp: 'Merksatz: Kathode = Reduktion (beide haben "e" am Ende in der Eselsbrücke "Katze reduziert"). Bei galvanischen Elementen: Kathode = Plus, bei Elektrolyse: Kathode = Minus. Der Prozess (Reduktion) bleibt gleich!'
  },
  {
    id: 'ch-q-169',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Beim Laden eines Bleiakkumulators wird die folgende Reaktion umgekehrt: Pb + PbO₂ + 2 H₂SO₄ → 2 PbSO₄ + 2 H₂O. Welche Aussage über den Ladevorgang ist korrekt?',
    optionen: [
      'PbSO₄ wird an beiden Elektroden zu Pb reduziert',
      'PbSO₄ wird an der negativen Elektrode zu Pb reduziert, an der positiven zu PbO₂ oxidiert',
      'H₂SO₄ wird verbraucht und seine Konzentration nimmt ab',
      'Es handelt sich um einen spontanen Prozess',
      'Wasser wird in H₂ und O₂ zerlegt'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Beim Laden (Elektrolyse) wird die Entladereaktion umgekehrt. An der negativen Elektrode: PbSO₄ + 2e⁻ → Pb + SO₄²⁻ (Reduktion). An der positiven: PbSO₄ + 2 H₂O → PbO₂ + 4 H⁺ + SO₄²⁻ + 2e⁻ (Oxidation). Schwefelsäure wird regeneriert.',
    strategieTipp: 'Bleiakkumulator: Beim Entladen läuft die Reaktion freiwillig ab (galvanisches Element), beim Laden wird sie durch Stromzufuhr umgekehrt (Elektrolyse). Die Schwefelsäurekonzentration nimmt beim Laden zu, beim Entladen ab.'
  },
  {
    id: 'ch-q-170',
    stichwortId: 'ch-11-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Bedingung muss erfüllt sein, damit eine Redoxreaktion freiwillig abläuft?',
    optionen: [
      'Die Zellspannung E muss negativ sein',
      'Die Zellspannung E muss positiv sein',
      'Die Temperatur muss über 100°C liegen',
      'Die Konzentration aller Stoffe muss 1 mol/L betragen',
      'Das Redoxpotenzial muss gleich null sein'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Eine positive Zellspannung (E > 0) bedeutet, dass ΔG < 0 (freie Enthalpie negativ) und die Reaktion freiwillig abläuft. Bei E < 0 ist ΔG > 0 und die Reaktion läuft nur durch Energiezufuhr ab (Elektrolyse).',
    strategieTipp: 'E > 0 ↔ ΔG < 0 ↔ freiwillige Reaktion. Je größer E, desto stärker die Tendenz der Reaktion. Die Beziehung ist: ΔG = -nFE, wobei n = Elektronenzahl, F = Faraday-Konstante.'
  },
  {
    id: 'ch-q-171',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist die allgemeine Formel der Alkane (gesättigte Kohlenwasserstoffe)?',
    optionen: [
      'CₙH₂ₙ₊₂',
      'CₙH₂ₙ',
      'CₙH₂ₙ₋₂',
      'CₙHₙ',
      'CₙH₂ₙ₊₁'
    ],
    korrekteAntwort: 0,
    erklaerung: 'Alkane sind gesättigte Kohlenwasserstoffe mit nur Einfachbindungen. Die allgemeine Summenformel lautet CₙH₂ₙ₊₂. Beispiele: Methan CH₄ (n=1), Ethan C₂H₆ (n=2), Propan C₃H₈ (n=3).',
    strategieTipp: 'Merke die Formeln: Alkane CₙH₂ₙ₊₂ (nur Einfachbindungen), Alkene CₙH₂ₙ (eine Doppelbindung), Alkine CₙH₂ₙ₋₂ (eine Dreifachbindung). Mit jeder zusätzlichen Mehrfachbindung oder jedem Ring verliert man 2 H-Atome.'
  },
  {
    id: 'ch-q-172',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welcher Name bezeichnet das Alkan mit 5 Kohlenstoffatomen korrekt?',
    optionen: [
      'Propan',
      'Butan',
      'Pentan',
      'Hexan',
      'Heptan'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Die systematische Benennung der Alkane: Methan (C1), Ethan (C2), Propan (C3), Butan (C4), Pentan (C5), Hexan (C6), Heptan (C7), Octan (C8), Nonan (C9), Decan (C10). Pentan hat die Formel C₅H₁₂.',
    strategieTipp: 'Lerne die ersten 10 Alkane auswendig - sie bilden die Basis für die Benennung aller organischen Verbindungen. Die griechischen/lateinischen Zahlenpräfixe (Meth-, Eth-, Prop-, But-, Pent-...) werden immer wieder verwendet.'
  },
  {
    id: 'ch-q-173',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist charakteristisch für Alkene?',
    optionen: [
      'Sie enthalten mindestens eine C≡C-Dreifachbindung',
      'Sie enthalten mindestens eine C=C-Doppelbindung',
      'Sie enthalten nur C-C-Einfachbindungen',
      'Sie enthalten einen aromatischen Ring',
      'Sie enthalten immer eine Hydroxylgruppe (-OH)'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Alkene sind ungesättigte Kohlenwasserstoffe mit mindestens einer C=C-Doppelbindung. Die einfachsten Alkene: Ethen (C₂H₄), Propen (C₃H₆), Buten (C₄H₈). Sie haben die allgemeine Formel CₙH₂ₙ.',
    strategieTipp: 'Alkene erkennt man an der Endung "-en" (Ethen, Propen). Sie sind reaktiver als Alkane wegen der Doppelbindung und gehen typischerweise Additionsreaktionen ein (z.B. Bromwasser-Test).'
  },
  {
    id: 'ch-q-174',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Wie lautet die Summenformel von Ethin (Acetylen)?',
    optionen: [
      'C₂H₂',
      'C₂H₄',
      'C₂H₆',
      'C₃H₄',
      'C₃H₆'
    ],
    korrekteAntwort: 0,
    erklaerung: 'Ethin (Acetylen) hat eine C≡C-Dreifachbindung und die Formel C₂H₂. Es ist das einfachste Alkin. Die Struktur ist linear: H-C≡C-H. Ethin wird zum Autogenschweißen verwendet (sehr hohe Flammentemperatur).',
    strategieTipp: 'Alkine haben die Endung "-in" und die allgemeine Formel CₙH₂ₙ₋₂. Die Dreifachbindung macht sie sehr reaktiv. Ethin ist ein wichtiges Beispiel - merke C₂H₂!'
  },
  {
    id: 'ch-q-175',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Benzol (C₆H₆) ist ein Aromat. Welche Aussage über seine Struktur ist korrekt?',
    optionen: [
      'Es enthält drei lokalisierte Doppelbindungen',
      'Es hat eine delokalisierte π-Elektronenwolke über dem gesamten Ring',
      'Die C-C-Bindungslängen alternieren zwischen kurz und lang',
      'Es reagiert bevorzugt durch Additionsreaktionen',
      'Es ist ein lineares Molekül'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Benzol hat eine planare, hexagonale Ringstruktur mit delokalisierten π-Elektronen. Alle C-C-Bindungen sind gleichlang (zwischen Einfach- und Doppelbindung). Diese Mesomerie-Stabilisierung (aromatische Stabilität) macht Benzol besonders stabil und unreaktiv gegenüber Additionen.',
    strategieTipp: 'Aromaten (wie Benzol) sind durch Mesomerie stabilisiert. Sie gehen bevorzugt Substitutionsreaktionen ein (Erhaltung des aromatischen Systems), nicht Additionen. Die 6 π-Elektronen erfüllen die Hückel-Regel (4n+2, n=1).'
  },
  {
    id: 'ch-q-176',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche funktionelle Gruppe kennzeichnet Alkohole?',
    optionen: [
      'Carbonylgruppe (C=O)',
      'Carboxylgruppe (-COOH)',
      'Hydroxylgruppe (-OH)',
      'Aminogruppe (-NH₂)',
      'Estergruppe (-COO-)'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Alkohole enthalten die Hydroxylgruppe (-OH) an einem Kohlenstoffatom. Beispiele: Methanol (CH₃OH), Ethanol (C₂H₅OH), Propanol (C₃H₇OH). Die -OH-Gruppe macht Alkohole polar und wasserlöslich (kleine Alkohole).',
    strategieTipp: 'Die funktionelle Gruppe bestimmt die chemischen Eigenschaften. Hydroxylgruppe = Alkohol (Endung -ol). Nicht verwechseln mit Phenolen, bei denen -OH direkt am aromatischen Ring hängt!'
  },
  {
    id: 'ch-q-177',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was unterscheidet einen primären von einem sekundären Alkohol?',
    optionen: [
      'Die Anzahl der OH-Gruppen im Molekül',
      'Die Kettenlänge des Kohlenwasserstoffrests',
      'Die Anzahl der Kohlenstoffatome, die am C-Atom mit der OH-Gruppe gebunden sind',
      'Die Löslichkeit in Wasser',
      'Der Siedepunkt'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Primärer Alkohol: Das C-Atom mit -OH ist an 1 weiteres C-Atom gebunden (z.B. Ethanol). Sekundärer Alkohol: an 2 C-Atome gebunden (z.B. 2-Propanol). Tertiärer Alkohol: an 3 C-Atome gebunden (z.B. 2-Methyl-2-propanol).',
    strategieTipp: 'Die Klassifizierung ist wichtig für Oxidationsreaktionen: Primäre Alkohole → Aldehyde → Carbonsäuren, sekundäre → Ketone, tertiäre sind nicht oxidierbar (außer unter drastischen Bedingungen).'
  },
  {
    id: 'ch-q-178',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche funktionelle Gruppe ist charakteristisch für Aldehyde?',
    optionen: [
      '-COOH',
      '-CHO (Carbonylgruppe am Kettenende)',
      '-CO- (Carbonylgruppe in der Kette)',
      '-OH',
      '-COO-'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Aldehyde haben eine Carbonylgruppe (C=O) am Ende der Kohlenstoffkette: R-CHO. Die Carbonylgruppe ist an mindestens ein H-Atom gebunden. Beispiele: Methanal/Formaldehyd (HCHO), Ethanal/Acetaldehyd (CH₃CHO). Endung: -al.',
    strategieTipp: 'Aldehyde vs. Ketone: Beide haben C=O, aber bei Aldehyden steht sie am Kettenende (min. 1 H am C=O), bei Ketonen in der Kette (keine H am C=O). Aldehyde sind leichter oxidierbar als Ketone.'
  },
  {
    id: 'ch-q-179',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welches Oxidationsprodukt entsteht bei der vollständigen Oxidation von Ethanol (primärer Alkohol)?',
    optionen: [
      'Ethan',
      'Ethen',
      'Ethanal (Acetaldehyd)',
      'Ethansäure (Essigsäure)',
      'Diethylether'
    ],
    korrekteAntwort: 3,
    erklaerung: 'Die Oxidation verläuft stufenweise: Ethanol (C₂H₅OH) → Ethanal (CH₃CHO, Aldehyd) → Ethansäure (CH₃COOH, Carbonsäure). Bei vollständiger Oxidation entsteht die Carbonsäure. Milde Oxidation stoppt beim Aldehyd.',
    strategieTipp: 'Oxidationsstufen organischer Verbindungen: Alkohol → Aldehyd → Carbonsäure (für primäre Alkohole). Bei sekundären Alkoholen: Alkohol → Keton (keine weitere Oxidation). Reagenzien: KMnO₄, K₂Cr₂O₇.'
  },
  {
    id: 'ch-q-180',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche funktionelle Gruppe charakterisiert Ketone?',
    optionen: [
      'Hydroxylgruppe (-OH)',
      'Carbonylgruppe in der Kohlenstoffkette (-CO-)',
      'Carbonylgruppe am Kettenende (-CHO)',
      'Carboxylgruppe (-COOH)',
      'Aminogruppe (-NH₂)'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Ketone haben eine Carbonylgruppe (C=O) innerhalb der Kohlenstoffkette, gebunden an zwei Kohlenstoffatome (R-CO-R\'). Beispiel: Propanon/Aceton (CH₃-CO-CH₃). Endung: -on. Ketone sind weniger reaktiv als Aldehyde.',
    strategieTipp: 'Carbonylverbindungen: -CHO = Aldehyd (am Ende), -CO- = Keton (in der Mitte). Ketone können nicht weiter oxidiert werden (im Gegensatz zu Aldehyden), daher kein positiver Fehling-Test.'
  },
  {
    id: 'ch-q-181',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche allgemeine Struktur haben Carbonsäuren?',
    optionen: [
      'R-OH',
      'R-CHO',
      'R-CO-R\'',
      'R-COOH',
      'R-COO-R\''
    ],
    korrekteAntwort: 3,
    erklaerung: 'Carbonsäuren haben die Carboxylgruppe -COOH (Kombination aus Carbonyl C=O und Hydroxyl -OH). Beispiele: Methansäure/Ameisensäure (HCOOH), Ethansäure/Essigsäure (CH₃COOH). Sie sind sauer durch Abspaltung von H⁺.',
    strategieTipp: 'Carboxylgruppe -COOH ist charakteristisch für organische Säuren. Endung: -säure. Sie sind schwache Säuren (pKₐ meist 3-5). Die Säurestärke wird durch den Rest R beeinflusst (elektronenanziehende Gruppen erhöhen Säurestärke).'
  },
  {
    id: 'ch-q-182',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was entsteht bei der Reaktion einer Carbonsäure mit einem Alkohol unter Wasserabspaltung?',
    optionen: [
      'Ein Aldehyd',
      'Ein Keton',
      'Ein Ester',
      'Ein Amin',
      'Ein Ether'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Bei der Veresterung reagiert eine Carbonsäure (R-COOH) mit einem Alkohol (R\'-OH) zu einem Ester (R-COO-R\') und Wasser. Reaktion: R-COOH + R\'-OH ⇌ R-COO-R\' + H₂O. Katalysator: meist konz. Schwefelsäure.',
    strategieTipp: 'Esterbildung ist eine Kondensationsreaktion (Wasserabspaltung). Ester haben charakteristische, oft angenehme Gerüche (Fruchtaromen). Die Umkehrreaktion ist die Esterspaltung (Verseifung mit Base oder Hydrolyse mit Säure).'
  },
  {
    id: 'ch-q-183',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welcher IUPAC-Name ist korrekt für CH₃-COO-C₂H₅?',
    optionen: [
      'Ethylmethanoat',
      'Ethylethanoat',
      'Methylpropanoat',
      'Propylmethanoat',
      'Ethylpropanoat'
    ],
    korrekteAntwort: 1,
    erklaerung: 'CH₃-COO-C₂H₅ ist Ethylethanoat (Ethylacetat). Benennung: [Alkylrest vom Alkohol] + [Name der Säure mit -oat]. Ethanoat kommt von Ethansäure (CH₃COOH), Ethyl vom Ethanol (C₂H₅OH). Trivialname: Essigsäureethylester.',
    strategieTipp: 'Bei Estern: Erst den Alkylrest (vom Alkohol), dann den Säurerest (mit -oat statt -säure). Beispiel: Methyl-propanoat stammt aus Methanol + Propansäure. Die Esterbindung ist -COO-.'
  },
  {
    id: 'ch-q-184',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche funktionelle Gruppe kennzeichnet Amine?',
    optionen: [
      '-OH',
      '-COOH',
      '-NH₂',
      '-CHO',
      '-SH'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Amine enthalten die Aminogruppe -NH₂ (primär), -NH- (sekundär) oder -N< (tertiär). Sie sind organische Derivate des Ammoniaks (NH₃). Beispiele: Methylamin (CH₃NH₂), Dimethylamin ((CH₃)₂NH). Amine sind basisch.',
    strategieTipp: 'Aminogruppe -NH₂ macht Verbindungen basisch (kann Protonen aufnehmen). Amine riechen oft nach Fisch oder Ammoniak. Wichtig in Biologie: Aminosäuren haben -NH₂ und -COOH!'
  },
  {
    id: 'ch-q-185',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was versteht man unter Strukturisomerie?',
    optionen: [
      'Moleküle mit gleicher Summenformel, aber unterschiedlicher räumlicher Anordnung',
      'Moleküle mit gleicher Summenformel, aber unterschiedlicher Verknüpfung der Atome',
      'Moleküle mit unterschiedlicher Summenformel, aber gleichen funktionellen Gruppen',
      'Moleküle mit gleicher Struktur, aber unterschiedlichen physikalischen Eigenschaften',
      'Moleküle mit gleicher Massenzahl'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Strukturisomere (Konstitutionsisomere) haben die gleiche Summenformel, aber unterschiedliche Verknüpfung der Atome. Beispiel: Butan (CH₃-CH₂-CH₂-CH₃) und 2-Methylpropan ((CH₃)₂CH-CH₃) haben beide C₄H₁₀, aber verschiedene Strukturen.',
    strategieTipp: 'Isomeriearten: Strukturisomerie (unterschiedliche Verknüpfung) vs. Stereoisomerie (gleiche Verknüpfung, unterschiedliche räumliche Anordnung). Bei größeren Molekülen gibt es viele mögliche Strukturisomere.'
  },
  {
    id: 'ch-q-186',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Wie viele Strukturisomere gibt es für die Summenformel C₅H₁₂?',
    optionen: [
      '2',
      '3',
      '4',
      '5',
      '6'
    ],
    korrekteAntwort: 1,
    erklaerung: 'C₅H₁₂ hat 3 Strukturisomere: 1) n-Pentan (unverzweigt), 2) 2-Methylbutan (Isopropan), 3) 2,2-Dimethylpropan (Neopentan). Alle haben die gleiche Summenformel, aber unterschiedliche Verzweigungen und damit unterschiedliche Eigenschaften.',
    strategieTipp: 'Bei der Suche nach Isomeren systematisch vorgehen: Erst unverzweigte Kette, dann Verzweigungen. Mit steigender C-Zahl steigt die Anzahl der Isomere stark (C₁₀H₂₂ hat schon 75 Isomere!).'
  },
  {
    id: 'ch-q-187',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über die Reaktivität von Kohlenwasserstoffen ist korrekt?',
    optionen: [
      'Alkane sind reaktiver als Alkene',
      'Alkene sind reaktiver als Alkane wegen der Doppelbindung',
      'Alkine sind weniger reaktiv als Alkane',
      'Aromaten sind reaktiver als Alkene',
      'Alle Kohlenwasserstoffe haben die gleiche Reaktivität'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Alkene sind wegen der C=C-Doppelbindung reaktiver als Alkane. Die π-Bindung ist schwächer und kann leicht gespalten werden (Additionsreaktionen). Alkane haben nur stabile σ-Bindungen und gehen hauptsächlich Substitutionsreaktionen ein.',
    strategieTipp: 'Reaktivität: Alkine > Alkene > Alkane. Mehrfachbindungen sind Angriffspunkte für Additionsreaktionen. Aromaten sind wegen der Mesomerie-Stabilisierung unreaktiver als erwartet (bevorzugen Substitution).'
  },
  {
    id: 'ch-q-188',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist das Hauptprodukt bei der Addition von Brom an Ethen?',
    optionen: [
      'Brommethan',
      'Bromethan',
      '1,2-Dibromethan',
      '1,1-Dibromethan',
      'Monobromethen'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Bei der Bromaddition an Ethen (C₂H₄) wird die Doppelbindung gespalten und je ein Bromatom addiert: C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-Dibromethan). Die orange Bromfarbe verschwindet - das ist der Bromwasser-Test für Doppelbindungen.',
    strategieTipp: 'Additionsreaktionen an Doppelbindungen: Die π-Bindung wird aufgebrochen, zwei Atome/Gruppen werden addiert. Bromwasser-Entfärbung ist ein Nachweis für C=C-Bindungen.'
  },
  {
    id: 'ch-q-189',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei der Addition von HBr an Propen kann nach der Markovnikov-Regel vorhergesagt werden, welches Produkt bevorzugt entsteht. Welches ist das Hauptprodukt?',
    optionen: [
      '1-Brompropan',
      '2-Brompropan',
      '1,2-Dibrompropan',
      '1,3-Dibrompropan',
      'Es entstehen beide Isomere zu gleichen Teilen'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Nach Markovnikov: Das H-Atom addiert sich an das C-Atom der Doppelbindung, das bereits mehr H-Atome hat. Bei Propen (CH₃-CH=CH₂) addiert H an CH₂, Br an CH → 2-Brompropan (CH₃-CHBr-CH₃) ist das Hauptprodukt.',
    strategieTipp: 'Markovnikov-Regel: "Wer hat, dem wird gegeben" - das H geht zum H-reicheren C-Atom. Grund: Es entsteht das stabilere Carbokation als Zwischenprodukt (sekundär > primär). Anti-Markovnikov-Addition möglich mit Peroxiden.'
  },
  {
    id: 'ch-q-190',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Reaktion ist typisch für Alkane?',
    optionen: [
      'Addition',
      'Eliminierung',
      'Radikalische Substitution',
      'Elektrophile Substitution',
      'Nucleophile Addition'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Alkane gehen hauptsächlich radikalische Substitutionsreaktionen ein (z.B. Halogenierung). Bei UV-Licht oder hohen Temperaturen werden H-Atome durch Halogenatome ersetzt: CH₄ + Cl₂ → CH₃Cl + HCl (Kettenreaktion über Radikale).',
    strategieTipp: 'Alkane sind relativ unreaktiv (nur σ-Bindungen). Radikalische Substitution braucht Energie (UV-Licht). Ablauf: Initiierung (Radikalbildung) → Kettenreaktion (Propagation) → Kettenabbruch (Rekombination).'
  },
  {
    id: 'ch-q-191',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über Aromaten ist korrekt?',
    optionen: [
      'Sie addieren leicht Halogene wie Alkene',
      'Sie gehen bevorzugt elektrophile Substitutionsreaktionen ein',
      'Sie sind gesättigte Kohlenwasserstoffe',
      'Sie haben keine π-Elektronen',
      'Sie sind immer unpolar'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Aromaten gehen bevorzugt elektrophile Substitutionsreaktionen ein (nicht Addition!), um das stabile aromatische System zu erhalten. Beispiele: Nitrierung, Sulfonierung, Halogenierung (mit Katalysator), Friedel-Crafts-Alkylierung.',
    strategieTipp: 'Aromaten bewahren ihre Aromatizität! Daher Substitution statt Addition. Die elektrophile aromatische Substitution ist der wichtigste Reaktionstyp. Erstsubstituenten dirigieren weitere Substitutionen (ortho/meta/para).'
  },
  {
    id: 'ch-q-192',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Wie nennt man Kohlenwasserstoffe, die nur aus Kohlenstoff und Wasserstoff bestehen?',
    optionen: [
      'Carbide',
      'Kohlenwasserstoffe',
      'Kohlenstoffdioxid-Derivate',
      'Carbohydrate',
      'Carbonsäuren'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Verbindungen, die nur aus C und H bestehen, heißen Kohlenwasserstoffe. Sie sind die einfachsten organischen Verbindungen. Untergruppen: Alkane, Alkene, Alkine, Aromaten. Beispiele: Methan, Ethen, Benzol.',
    strategieTipp: 'Kohlenwasserstoffe sind die Basis der organischen Chemie. Alle anderen organischen Verbindungen leiten sich davon ab durch Einführung funktioneller Gruppen (O, N, S, Halogene etc.).'
  },
  {
    id: 'ch-q-193',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Molekül hat die Summenformel C₃H₆. Welche Strukturen sind möglich?',
    optionen: [
      'Nur Propen (ein Alken)',
      'Nur Cyclopropan (ein Cycloalkan)',
      'Propen oder Cyclopropan',
      'Propan oder Propin',
      'Nur Propin (ein Alkin)'
    ],
    korrekteAntwort: 2,
    erklaerung: 'C₃H₆ entspricht der Formel CₙH₂ₙ. Das kann ein Alken (Propen, CH₃-CH=CH₂) oder ein Cycloalkan (Cyclopropan, Dreieck) sein. Beide haben die gleiche Summenformel, aber unterschiedliche Strukturen (Strukturisomere).',
    strategieTipp: 'Gleiche Summenformel kann verschiedene Strukturen bedeuten: CₙH₂ₙ = Alkene ODER Cycloalkane. Beide haben 2 H weniger als Alkane (CₙH₂ₙ₊₂). Ring und Doppelbindung sind äquivalent bezüglich der H-Anzahl.'
  },
  {
    id: 'ch-q-194',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Eigenschaft nimmt in der homologen Reihe der Alkane mit steigender Kettenlänge zu?',
    optionen: [
      'Wasserlöslichkeit',
      'Siedepunkt',
      'Reaktivität',
      'Polarität',
      'Lichtgeschwindigkeit'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Mit steigender Molekülgröße nehmen die Van-der-Waals-Kräfte zu, daher steigt der Siedepunkt. Methan (C₁): -162°C, Pentan (C₅): 36°C, Decan (C₁₀): 174°C. Wasserlöslichkeit und Polarität nehmen ab (zunehmend hydrophob).',
    strategieTipp: 'Trends in homologen Reihen: Längere Kette → höherer Siedepunkt, höhere Viskosität, geringere Wasserlöslichkeit. Verzweigung senkt den Siedepunkt (weniger Kontaktfläche für Van-der-Waals-Kräfte).'
  },
  {
    id: 'ch-q-195',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Hybridisierung haben die Kohlenstoffatome in Ethin (Acetylen)?',
    optionen: [
      'sp³',
      'sp²',
      'sp',
      'sp³d',
      'Keine Hybridisierung'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Bei der Dreifachbindung in Ethin (H-C≡C-H) sind die C-Atome sp-hybridisiert. Ein s- und ein p-Orbital bilden zwei sp-Hybridorbitale (linear, 180°). Die beiden übrigen p-Orbitale bilden zwei π-Bindungen.',
    strategieTipp: 'Hybridisierung: sp³ = Einfachbindung (Tetraeder, 109,5°), sp² = Doppelbindung (trigonal, 120°), sp = Dreifachbindung (linear, 180°). Die Geometrie folgt aus der Hybridisierung.'
  },
  {
    id: 'ch-q-196',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was entsteht bei der Dehydratisierung (Wasserabspaltung) von Ethanol mit konz. Schwefelsäure bei ca. 170°C?',
    optionen: [
      'Ethan',
      'Ethen',
      'Ethin',
      'Diethylether',
      'Ethansäure'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Bei der intramolekularen Dehydratisierung von Ethanol entsteht Ethen: C₂H₅OH → C₂H₄ + H₂O. Das ist eine Eliminierungsreaktion. Bei niedrigerer Temperatur (140°C) entsteht durch intermolekulare Dehydratisierung Diethylether.',
    strategieTipp: 'Alkohol-Dehydratisierung: Hohe Temperatur → Alken (Eliminierung), niedrige Temperatur → Ether (Kondensation). Konz. H₂SO₄ wirkt als Katalysator/Wasserentzug. Umkehrung: Hydratisierung von Alkenen zu Alkoholen.'
  },
  {
    id: 'ch-q-197',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Verbindungsklasse entsteht bei der Oxidation eines primären Alkohols als erstes Produkt?',
    optionen: [
      'Keton',
      'Aldehyd',
      'Carbonsäure',
      'Ester',
      'Ether'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Primäre Alkohole werden zuerst zu Aldehyden oxidiert: R-CH₂OH → R-CHO. Bei weiterer Oxidation entsteht eine Carbonsäure: R-CHO → R-COOH. Sekundäre Alkohole werden zu Ketonen oxidiert (keine weitere Oxidation).',
    strategieTipp: 'Oxidationsstufen: Primärer Alkohol → Aldehyd → Carbonsäure. Sekundärer Alkohol → Keton (Ende). Tertiärer Alkohol → nicht oxidierbar. Reagenzien: KMnO₄, K₂Cr₂O₇ (starke Oxidation), CuO (milde Oxidation).'
  },
  {
    id: 'ch-q-198',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über Ester ist korrekt?',
    optionen: [
      'Sie entstehen aus Aldehyden und Ketonen',
      'Sie haben meist unangenehme Gerüche',
      'Sie sind die Produkte der Reaktion von Carbonsäuren mit Alkoholen',
      'Sie sind starke Säuren',
      'Sie enthalten eine Aminogruppe'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Ester (R-COO-R\') entstehen durch Veresterung: Carbonsäure + Alkohol → Ester + Wasser. Sie haben oft fruchtartige, angenehme Gerüche und sind wichtig als Aromastoffe, Lösungsmittel und in Fetten (Triglyceride sind Ester).',
    strategieTipp: 'Ester erkennt man an der -COO- Gruppe. Sie sind neutral (keine Säuren). Veresterung ist reversibel - die Rückreaktion ist die Ester-Hydrolyse (Verseifung). Ester sind hydrophober als die Ausgangs-Carbonsäuren.'
  },
  {
    id: 'ch-q-199',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Wie viele primäre, sekundäre und tertiäre Kohlenstoffatome hat 2-Methylpentan?',
    optionen: [
      '4 primär, 1 sekundär, 1 tertiär',
      '3 primär, 2 sekundär, 1 tertiär',
      '5 primär, 1 sekundär, 0 tertiär',
      '2 primär, 3 sekundär, 1 tertiär',
      '4 primär, 2 sekundär, 0 tertiär'
    ],
    korrekteAntwort: 0,
    erklaerung: '2-Methylpentan: CH₃-CH(CH₃)-CH₂-CH₂-CH₃. Primär (an 1 C): C1, C2\' (Methyl), C4, C5 = 4. Sekundär (an 2 C): C3 = 1. Tertiär (an 3 C): C2 = 1. Total: 4 primär, 1 sekundär, 1 tertiär.',
    strategieTipp: 'Klassifizierung von C-Atomen: primär (an 1 C gebunden), sekundär (an 2 C), tertiär (an 3 C), quartär (an 4 C). Wichtig für Reaktivität (z.B. Radikalstabilität, Carbokation-Stabilität: tertiär > sekundär > primär).'
  },
  {
    id: 'ch-q-200',
    stichwortId: 'ch-12-01',
    fach: 'chemie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Reaktion ist charakteristisch für Carbonsäuren?',
    optionen: [
      'Addition an die Carbonylgruppe',
      'Protonenabgabe (Säure-Base-Reaktion)',
      'Radikalische Substitution',
      'Elektrophile Addition',
      'Nucleophile Substitution am Aromaten'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Carbonsäuren sind Säuren und geben Protonen ab: R-COOH ⇌ R-COO⁻ + H⁺. Sie bilden mit Basen Salze (Carboxylate). Weitere typische Reaktionen: Veresterung mit Alkoholen, Bildung von Säurechloriden, Amid-Bildung mit Aminen.',
    strategieTipp: 'Carbonsäuren sind schwache Säuren (pKₐ 3-5). Sie sind saurer als Alkohole oder Phenole wegen der Mesomerie-Stabilisierung des Carboxylat-Anions. Mit Alkoholen entstehen Ester, mit Aminen Amide.'
  }
];
