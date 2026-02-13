import type { Kapitel } from '../types';

export const bioKap2: Kapitel = {
  id: 'bio-kap2',
  title: 'Körper des Menschen',
  subject: 'biologie',
  icon: '🫀',
  estimatedTime: '90 Minuten',
  unterkapitel: [
    // ==================== 2.1 ====================
    {
      id: 'bio-kap2-1',
      title: 'Herz',
      content: `Das Herz ist eine Muskelpumpe, faustgroß, 250–350 g schwer. Es liegt im **Mediastinum** (Raum zwischen den Lungen) leicht links versetzt. Vier Kammern: rechter Vorhof + rechte Kammer (Lungenkreislauf), linker Vorhof + linke Kammer (Körperkreislauf). Die linke Kammer hat die dickste Wand — sie pumpt gegen den hohen Widerstand im Körperkreislauf.

Herzwand dreischichtig: **Endokard** (innere Auskleidung, glatte Oberfläche), **Myokard** (Herzmuskelschicht, macht die Arbeit), **Epikard** (äußere Schicht). Um alles rum: **Perikard** (Herzbeutel), schützt und minimiert Reibung.

Vier Klappen = Einbahnstraßen für das Blut. Merkregel "Tri-Mi-Pu-Ao": **Trikuspidalklappe** (3 Segel, zwischen rechtem Vorhof und rechter Kammer) → **Pulmonalklappe** (Taschenklappe am Ausgang der rechten Kammer zur Lunge) → **Mitralklappe** (2 Segel, zwischen linkem Vorhof und linker Kammer) → **Aortenklappe** (Taschenklappe am Ausgang der linken Kammer). Die zwei **Segelklappen** (Trikuspidal, Mitral) haben **Sehnenfäden** (Chordae tendineae), die an **Papillarmuskeln** fixiert sind — sonst würden sie nach oben umklappen. Die **Taschenklappen** brauchen keine Sehnenfäden, die schließen passiv durch Blutrückstrom.

Blutfluss durchs Herz: Sauerstoffarmes Blut aus dem Körper → obere + untere **Hohlvene** (Vena cava) → rechter Vorhof → Trikuspidalklappe → rechte Kammer → Pulmonalklappe → **Truncus pulmonalis** (Lungenarterie) → Lunge (O₂ rein, CO₂ raus) → vier **Lungenvenen** → linker Vorhof → Mitralklappe → linke Kammer → Aortenklappe → **Aorta** → Körperkreislauf.

**Herzzeitvolumen** (HZV) = wie viel Blut pro Minute. Formel: Schlagvolumen × Herzfrequenz = 70 mL × 70/min ≈ 5 L/min in Ruhe. Bei Belastung bis 25 L/min. Die **Koronararterien** (rechte + linke) entspringen direkt über der Aortenklappe und versorgen das Herz selbst mit Blut.`,
      diagram: 'heart-anatomy',
      merksätze: [
        'Merke: Blutfluss durch die 4 Herzklappen: Trikuspidalklappe (rechts AV) → Pulmonalklappe (rechts Tasche) → Mitralklappe (links AV) → Aortenklappe (links Tasche). Segelklappen = AV-Klappen, Taschenklappen = Semilunarklappen.',
        'Linke Kammer = dickste Wand (pumpt gegen hohen Widerstand in den Körperkreislauf). Herzzeitvolumen = Schlagvolumen × Herzfrequenz ≈ 70 mL × 70/min = ca. 5 L/min.'
      ],
      altfrage: {
        question: 'Welche Herzklappe liegt zwischen dem linken Vorhof und der linken Kammer?',
        answer: 'Die Mitralklappe (Bikuspidalklappe) mit zwei Segeln. Sie verhindert den Rückfluss von Blut aus der linken Kammer in den linken Vorhof während der Systole. Die Trikuspidalklappe mit drei Segeln befindet sich auf der rechten Seite.'
      },
      klinischerBezug: '**Myokardinfarkt** (Herzinfarkt): Eine Koronararterie verschließt sich durch einen Thrombus auf einer atherosklerotischen Plaque. Häufigste Stelle: **RIVA** (Ramus interventricularis anterior) der linken Koronararterie → **Vorderwandinfarkt**. Sauerstoffmangel → Herzmuskel stirbt ab. Leitsymptome: retrosternaler Brustschmerz mit Ausstrahlung in linken Arm, Atemnot (Dyspnoe), Schwitzen, Todesangst. Zeitfenster kritisch: "Time is muscle" — je schneller Revaskularisation (Herzkatheter), desto weniger Schaden.',
      selfTest: [
        {
          question: 'Wie viele Segel besitzt die Mitralklappe?',
          options: [
            'Eins',
            'Zwei',
            'Drei',
            'Vier',
            'Fünf'
          ],
          correctIndex: 1,
          explanation: 'Die Mitralklappe (Bikuspidalklappe) hat zwei Segel. Die Trikuspidalklappe hat dagegen drei Segel – daher der Name (tri = drei).'
        },
        {
          question: 'Welches Herzzeitvolumen hat ein gesunder Erwachsener in Ruhe ungefähr?',
          options: [
            'Ca. 1 L/min',
            'Ca. 3 L/min',
            'Ca. 5 L/min',
            'Ca. 10 L/min',
            'Ca. 15 L/min'
          ],
          correctIndex: 2,
          explanation: 'Das Herzzeitvolumen in Ruhe beträgt ca. 5 L/min (Schlagvolumen 70 mL × Herzfrequenz 70/min). Unter Belastung kann es auf bis zu 25 L/min ansteigen.'
        },
        {
          question: 'Wohin pumpt die rechte Herzkammer das Blut?',
          options: [
            'In die Aorta',
            'In die obere Hohlvene',
            'In den Truncus pulmonalis (Lungenkreislauf)',
            'In die linke Kammer',
            'In die Koronararterien'
          ],
          correctIndex: 2,
          explanation: 'Die rechte Kammer pumpt sauerstoffarmes Blut durch die Pulmonalklappe in den Truncus pulmonalis und damit in den Lungenkreislauf, wo der Gasaustausch stattfindet.'
        }
      ]
    },
    // ==================== 2.2 ====================
    {
      id: 'bio-kap2-2',
      title: 'Erregungsleitungssystem',
      content: `Das Herz schlägt von selbst — **Autorhythmie** (Autonomie). Spezielle Herzmuskelzellen erzeugen elektrische Impulse und leiten sie weiter. Chef ist der **Sinusknoten** (Nodus sinuatrialis) im rechten Vorhof nahe der Einmündung der oberen Hohlvene. Er feuert 60–80 Impulse/min (typisch 70) — der natürliche Schrittmacher. Sympathikus macht ihn schneller (positiv chronotrop), **Parasympathikus** (N. vagus) bremst (negativ chronotrop).

Erregungsweg: Sinusknoten → Erregung breitet sich über Vorhofmuskulatur aus → **AV-Knoten** (Atrioventrikularknoten) am Übergang zwischen Vorhöfen und Kammern. Der AV-Knoten ist der Filter: Er verzögert die Erregung um 0,1 s (**AV-Verzögerung**), damit die Vorhöfe Zeit haben, ihr Blut in die Kammern zu pumpen, bevor die Kammern kontrahieren. Eigenfrequenz des AV-Knotens: 40–50/min (sekundärer Schrittmacher bei Sinusknoten-Ausfall).

Vom AV-Knoten geht's über das **His-Bündel** (einzige elektrische Verbindung zwischen Vorhof und Kammer, durchdringt das Herzskelett) → das His-Bündel teilt sich im Septum in rechten und linken **Tawara-Schenkel** → am Ende verzweigen sich die **Purkinje-Fasern** (Eigenfrequenz 25–40/min, tertiärer Schrittmacher). Sie leiten die Erregung blitzschnell und gleichmäßig an die gesamte Kammermuskulatur — von innen nach außen (endokardial → epikardial).

Hierarchie der Schrittmacher: Sinusknoten (60–80/min) > AV-Knoten (40–50/min) > Purkinje-Fasern (25–40/min). Fällt der Chef aus, übernimmt der Stellvertreter mit niedrigerer Frequenz.`,
      diagram: 'cardiac-conduction',
      merksätze: [
        'Merke: Erregungsleitung: Sinusknoten (60-80/min, primärer Schrittmacher) → AV-Knoten (40-50/min, Verzögerung 0,1 s) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern (25-40/min).',
        'AV-Verzögerung = ca. 0,1 s – damit die Vorhöfe sich vollständig entleeren können, bevor die Kammern kontrahieren.'
      ],
      altfrage: {
        question: 'Was ist die Eigenfrequenz des Sinusknotens?',
        answer: 'Der Sinusknoten hat eine Eigenfrequenz von 60–80/min (typisch 70/min). Er ist der primäre Schrittmacher. Bei Ausfall übernimmt der AV-Knoten mit 40–50/min, und bei dessen Ausfall die Purkinje-Fasern mit 25–40/min.'
      },
      klinischerBezug: '**AV-Block III°** (totaler AV-Block): Die Erregung kommt nicht mehr von den Vorhöfen zu den Kammern durch. Vorhöfe schlagen in Sinusfrequenz (z.B. 70/min), Kammern schlagen langsam in Eigenfrequenz der Purkinje-Fasern (25–40/min) — völlig unabhängig voneinander. Folge: Bradykardie, reduziertes Herzzeitvolumen → Schwindel, Synkope (**Adams-Stokes-Anfall**: kurze Bewusstlosigkeit wegen Minderperfusion des Gehirns), Herzinsuffizienz. Therapie: Implantation eines künstlichen Herzschrittmachers.',
      selfTest: [
        {
          question: 'Wo befindet sich der Sinusknoten?',
          options: [
            'Im linken Vorhof an der Einmündung der Lungenvenen',
            'Im rechten Vorhof nahe der Einmündung der Vena cava superior',
            'Im Kammerseptum unterhalb der Aortenklappe',
            'An der Herzspitze im linken Ventrikel',
            'Im His-Bündel zwischen den Tawara-Schenkeln'
          ],
          correctIndex: 1,
          explanation: 'Der Sinusknoten liegt im rechten Vorhof nahe der Einmündung der oberen Hohlvene (Vena cava superior). Er ist der primäre Schrittmacher des Herzens.'
        },
        {
          question: 'Welche Funktion hat die AV-Verzögerung?',
          options: [
            'Sie beschleunigt die Herzfrequenz bei Belastung',
            'Sie ermöglicht die vollständige Entleerung der Vorhöfe vor der Kammerkontraktion',
            'Sie verhindert Vorhofflimmern',
            'Sie leitet die Erregung direkt an die Purkinje-Fasern weiter',
            'Sie synchronisiert die Kontraktion beider Vorhöfe'
          ],
          correctIndex: 1,
          explanation: 'Die AV-Verzögerung von ca. 0,1 Sekunden stellt sicher, dass die Vorhöfe ihr Blut vollständig in die Kammern entleeren können, bevor die Kammerkontraktion (Systole) beginnt.'
        },
        {
          question: 'Welche Eigenfrequenz haben die Purkinje-Fasern?',
          options: [
            '60–80/min',
            '40–50/min',
            '25–40/min',
            '100–120/min',
            '10–15/min'
          ],
          correctIndex: 2,
          explanation: 'Die Purkinje-Fasern haben eine Eigenfrequenz von nur 25–40/min und dienen als tertiärer Schrittmacher. Dies zeigt die hierarchische Abnahme der Frequenz: Sinusknoten > AV-Knoten > Purkinje-Fasern.'
        }
      ]
    },
    // ==================== 2.3 ====================
    {
      id: 'bio-kap2-3',
      title: 'Blutkreislauf',
      content: `Zwei Kreisläufe hintereinander: großer **Körperkreislauf** (Systemkreislauf) und kleiner **Lungenkreislauf** (Pulmonalkreislauf). Linke Kammer pumpt sauerstoffreiches Blut über die **Aorta** in den Körper → Arterien verzweigen sich zu **Arteriolen** → **Kapillaren** (Austausch von O₂, CO₂, Nährstoffen) → **Venolen** → Venen → obere + untere **Hohlvene** → zurück zum rechten Vorhof. Rechte Kammer pumpt sauerstoffarmes Blut über die Lungenarterien zur Lunge → in der Lunge: CO₂ raus, O₂ rein → über Lungenvenen zurück zum linken Vorhof.

**Arterien** = vom Herzen weg. Dreischichtige Wand: **Tunica intima** (Endothel, innen), **Tunica media** (glatte Muskulatur + elastische Fasern, dick), **Tunica adventitia** (Bindegewebe, außen). Herznahe Arterien (z.B. Aorta) = **elastischer Typ**, dehnen sich in der Systole und federn in der Diastole zurück (**Windkesseleffekt**) → pulsatiler Blutfluss wird geglättet. Herzferne Arterien = **muskulärer Typ**, regulieren durch Kontraktion (Vasokonstriktion) und Erschlaffung (Vasodilatation) den peripheren Widerstand → Blutdruckverteilung.

**Venen** = zum Herzen hin. Dünne Wände, niedriger Druck. Haben **Venenklappen** (Rückschlagventile) gegen Rückfluss. Venöser Rücktransport wird unterstützt durch: **Muskelpumpe** (Wadenmuskeln pressen Venen aus), **Atempumpe** (Einatmen saugt Blut an), Venenpuls.

**Kapillaren**: dünnste Gefäße, 5–10 µm Durchmesser, nur eine Zellschicht (Endothel) dick → hier findet der Stoffaustausch statt. O₂ und Nährstoffe raus, CO₂ und Abfallstoffe rein.

Blutdruck: Normal 120/80 mmHg. Systolischer Wert (120) = Druck bei Kontraktion. Diastolischer Wert (80) = Druck bei Erschlaffung. Formel: **Blutdruck = Herzzeitvolumen × totaler peripherer Widerstand (TPR)**. TPR wird hauptsächlich in den Arteriolen reguliert.

**Wichtige Ausnahme**: Lungenvenen führen sauerstoffreiches Blut (nicht sauerstoffarmes wie andere Venen), Lungenarterien führen sauerstoffarmes Blut (nicht sauerstoffreiches wie andere Arterien).`,
      diagram: 'blutkreislauf',
      merksätze: [
        'Merke: Arterien = vom Herzen weg (A wie „ab"), Venen = zum Herzen hin. Ausnahme: Lungenvenen führen sauerstoffreiches Blut, Lungenarterien führen sauerstoffarmes Blut!',
        'Blutdruck = Herzzeitvolumen × totaler peripherer Widerstand. Normwert: 120/80 mmHg. Der Windkesseleffekt der Aorta glättet die pulsatile Strömung.'
      ],
      altfrage: {
        question: 'Welches Gefäß führt sauerstoffreiches Blut von der Lunge zum Herzen?',
        answer: 'Die Lungenvenen (Venae pulmonales) führen sauerstoffreiches Blut von der Lunge zum linken Vorhof. Dies ist die wichtigste Ausnahme: Venen führen normalerweise sauerstoffarmes Blut, aber die Lungenvenen transportieren oxygeniertes Blut.'
      },
      klinischerBezug: '**Arterielle Hypertonie** (Bluthochdruck ≥140/90 mmHg): Risikofaktor Nr. 1 für Herzinfarkt, Schlaganfall, Niereninsuffizienz, periphere arterielle Verschlusskrankheit (pAVK). Oft symptomlos ("silent killer"), schädigt langfristig Gefäße. **Krampfadern** (Varizen): Venenklappen insuffizient → Blut staut sich in oberflächlichen Beinvenen → Venen erweitern sich. Folgen: Ödeme (Schwellungen), Hautveränderungen, im schlimmsten Fall **Ulcus cruris venosum** (offenes Bein) — chronische Wunde am Unterschenkel.',
      selfTest: [
        {
          question: 'Wo wird der periphere Widerstand hauptsächlich reguliert?',
          options: [
            'In den Kapillaren',
            'In den Arteriolen',
            'In den großen Venen',
            'In der Aorta',
            'In den Lungenvenen'
          ],
          correctIndex: 1,
          explanation: 'Die Arteriolen sind die Widerstandsgefäße des Kreislaufsystems. Durch Vasokonstriktion und Vasodilatation regulieren sie den totalen peripheren Widerstand und damit den Blutdruck.'
        },
        {
          question: 'Welche Aussage über den Lungenkreislauf ist korrekt?',
          options: [
            'Lungenarterien führen sauerstoffreiches Blut',
            'Lungenvenen führen sauerstoffarmes Blut',
            'Lungenarterien führen sauerstoffarmes Blut zur Lunge',
            'Der Lungenkreislauf beginnt im linken Vorhof',
            'Lungenarterien und Lungenvenen führen beide gemischtes Blut'
          ],
          correctIndex: 2,
          explanation: 'Die Lungenarterien führen sauerstoffarmes Blut von der rechten Herzkammer zur Lunge. Die Lungenvenen führen das sauerstoffangereicherte Blut zurück zum linken Vorhof.'
        },
        {
          question: 'Was versteht man unter dem Windkesseleffekt?',
          options: [
            'Die Venenklappen verhindern den Rückfluss des Blutes',
            'Die elastischen herznahen Arterien glätten den pulsatilen Blutfluss',
            'Die Kapillaren ermöglichen den Gasaustausch',
            'Die Muskelpumpe unterstützt den venösen Rücktransport',
            'Die Kapillaren filtern das Blutplasma in das Interstitium'
          ],
          correctIndex: 1,
          explanation: 'Der Windkesseleffekt beschreibt die Eigenschaft der elastischen herznahen Arterien (v. a. Aorta), sich während der Systole zu dehnen und in der Diastole zurückzufedern, wodurch ein kontinuierlicher Blutfluss entsteht.'
        }
      ]
    },
    // ==================== 2.4 ====================
    {
      id: 'bio-kap2-4',
      title: 'Blut & Blutbestandteile',
      content: `Blut = flüssiges Gewebe, 7–8 % des Körpergewichts, 4–6 L bei Erwachsenen. Zentrifugiert man Blut, trennt es sich: 55 % **Blutplasma** (flüssig), 45 % zelluläre Bestandteile (**Hämatokrit**).

**Blutplasma**: 90 % Wasser + gelöste Proteine + Elektrolyte + Nährstoffe + Hormone. Wichtigstes Protein: **Albumin** (hält den onkotischen Druck aufrecht — verhindert, dass zu viel Flüssigkeit ins Gewebe austritt). **Fibrinogen** = Vorstufe von Fibrin, zentral für Blutgerinnung. Plasma ohne Gerinnungsfaktoren = **Serum**.

**Erythrozyten** (rote Blutkörperchen): 4,5–5,5 Mio./µL. Bikonkave Scheiben (maximiert Oberfläche), ohne Zellkern, ohne Mitochondrien. Hauptjob: O₂-Transport via **Hämoglobin** (Hb) — ein Hb-Molekül bindet 4 O₂-Moleküle. Lebensdauer: 120 Tage, dann Abbau in der Milz (**Hämolyse**). Hb wird zu **Bilirubin** abgebaut → Leber konjugiert es → Ausscheidung über Galle. Neubildung (**Erythropöse**) im roten Knochenmark, gesteuert durch **Erythropötin** (EPO) aus der Niere (bei Sauerstoffmangel hochreguliert).

**Leukozyten** (weiße Blutkörperchen): 4.000–10.000/µL. Immunsystem. Unterteilt in: **Granulozyten** (neutrophile 60–70 %, eosinophile 2–4 %, basophile <1 %), **Monozyten** (3–8 %, werden im Gewebe zu Makrophagen), **Lymphozyten** (20–30 %, T-Zellen + B-Zellen + NK-Zellen). **Neutrophile** = erste Verteidigungslinie gegen Bakterien (Phagozytose). **Eosinophile** = Parasitenabwehr + allergische Reaktionen. **Basophile** = setzen Histamin + Heparin frei.

Merkregel für Leukozyten-Häufigkeit: "Never Let Monkeys Eat Bananas" — Neutrophile > Lymphozyten > Monozyten > Eosinophile > Basophile.

**Thrombozyten** (Blutplättchen): 150.000–400.000/µL. Kernlose Zellfragmente aus Megakaryozyten. Rolle: Blutstillung (**Hämostase**). Lagern sich an verletzte Gefäßwände an (Adhäsion) → aktivieren sich gegenseitig (Aggregation) → bilden zusammen mit Gerinnungsfaktoren einen stabilen Thrombus.`,
      diagram: 'blutbestandteile',
      merksätze: [
        'Erythrozyten: 120 Tage Lebensdauer, bikonkav, kernlos, Hämoglobin bindet 4× O₂, Abbau in der Milz, Bildung im Knochenmark durch EPO.',
        'Leukozyten-Reihenfolge nach Häufigkeit: „Never Let Monkeys Eat Bananas" – Neutrophile (60–70 %) > Lymphozyten (20–30 %) > Monozyten (3–8 %) > Eosinophile (2–4 %) > Basophile (<1 %).'
      ],
      altfrage: {
        question: 'Wie lange beträgt die durchschnittliche Lebensdauer eines Erythrozyten?',
        answer: 'Erythrozyten haben eine durchschnittliche Lebensdauer von etwa 120 Tagen. Der Abbau erfolgt hauptsächlich in der Milz. Das dabei anfallende Hämoglobin wird zu Bilirubin abgebaut, das in der Leber konjugiert und über die Galle ausgeschieden wird.'
      },
      klinischerBezug: '**Anämie** (Blutarmut): Verminderte O₂-Transportkapazität. Ursachen: **Eisenmangel** (häufigste Form, mikrozytäre Anämie — kleine, blasse Erythrozyten; z.B. durch chronische Blutung oder Menstruation), **Vitamin-B₁₂- oder Folsäuremangel** (megaloblastäre Anämie — große, unreife Erythrozyten), hämolytische Erkrankungen (vorzeitiger Abbau). Symptome: Müdigkeit, Blässe, Leistungsminderung, Tachykardie. **Thrombozytopenie** (<150.000/µL): Gestörte Blutgerinnung → Petechien (punktförmige Hautblutungen), erhöhte Blutungsneigung (z.B. Nasenbluten, blaue Flecken). Ursachen: Knochenmarkerkrankungen, Medikamente, Autoimmunerkrankungen (ITP).',
      selfTest: [
        {
          question: 'Welcher Anteil des Blutes entfällt auf das Blutplasma?',
          options: [
            'Ca. 25 %',
            'Ca. 45 %',
            'Ca. 55 %',
            'Ca. 75 %',
            'Ca. 90 %'
          ],
          correctIndex: 2,
          explanation: 'Das Blutplasma macht etwa 55 % des Blutvolumens aus, die zellulären Bestandteile (Hämatokrit) etwa 45 %. Der Hämatokrit gibt den prozentualen Anteil der Erythrozyten am Gesamtblutvolumen an.'
        },
        {
          question: 'Welches Hormon stimuliert die Erythropöse?',
          options: [
            'Insulin',
            'Erythropötin (EPO)',
            'Thrombopoietin',
            'Aldosteron',
            'Cortisol'
          ],
          correctIndex: 1,
          explanation: 'Erythropötin (EPO) wird hauptsächlich in der Niere produziert und stimuliert die Erythropöse im Knochenmark, insbesondere bei Sauerstoffmangel (Hypoxie).'
        },
        {
          question: 'Welche Leukozyten sind am häufigsten im Blut vertreten?',
          options: [
            'Lymphozyten',
            'Eosinophile Granulozyten',
            'Neutrophile Granulozyten',
            'Monozyten',
            'Basophile Granulozyten'
          ],
          correctIndex: 2,
          explanation: 'Neutrophile Granulozyten machen 60–70 % aller Leukozyten aus und sind die erste Verteidigungslinie gegen bakterielle Infektionen durch Phagozytose.'
        }
      ]
    },
    // ==================== 2.5 ====================
    {
      id: 'bio-kap2-5',
      title: 'Blutgruppen',
      content: `Das **ABO-System** ist das wichtigste Blutgruppensystem (Karl Landsteiner, 1901). Basiert auf **Antigenen** (Glykoproteine) auf Erythrozyten und **Antikörpern** im Plasma. Vier Blutgruppen: A, B, AB, 0.

Regel: Man hat Antikörper gegen die Antigene, die man NICHT besitzt.

**Blutgruppe A**: Antigen A auf Erythrozyten + Anti-B im Plasma.
**Blutgruppe B**: Antigen B auf Erythrozyten + Anti-A im Plasma.
**Blutgruppe AB**: Antigene A + B, keine Antikörper → **Universalempfänger** (für Erythrozytenkonzentrate).
**Blutgruppe 0**: keine Antigene, Anti-A + Anti-B → **Universalspender** (für Erythrozytenkonzentrate).

Vererbung: **I^A** und **I^B** kodominant, beide dominant über **i** (Blutgruppe 0).

**Rhesus-System**: Wichtigstes Antigen = **D-Antigen**. Rh+ (ca. 85 %) = D-Antigen vorhanden, Rh− = D-Antigen fehlt. Unterschied zu ABO: Rh− Personen haben KEINE natürlichen Anti-D-Antikörper — diese bilden sich erst nach Kontakt mit Rh+ Blut (**Sensibilisierung**).

Klinisch wichtig in der Schwangerschaft: Rh− Mutter + Rh+ Kind → bei Geburt kann fetales Blut in mütterlichen Kreislauf gelangen → Mutter bildet Anti-D. Bei nächster Schwangerschaft mit Rh+ Kind können diese Anti-D die Plazenta passieren und fetale Erythrozyten angreifen (**Morbus hämolyticus neonatorum**). Prophylaxe: Rh− Müttern wird **Anti-D-Immunglobulin** (Rhesus-Prophylaxe) gegeben → zerstört fetale Erythrozyten, bevor das mütterliche Immunsystem sie erkennt.

Vor Transfusion: **Kreuzprobe** (Verträglichkeitsprobe). **Major-Kreuzprobe**: Empfängerserum (Antikörper) + Spendererythrozyten (Antigene). **Minor-Kreuzprobe**: Spenderserum + Empfängererythrozyten. Kommt es zur **Agglutination** (Verklumpung) → inkompatibel, Transfusion verboten.

**Fehltransfusion** = medizinischer Notfall. Antikörper greifen Spendererythrozyten an → massive **Hämolyse** → Fieber, Schüttelfrost, Flankenschmerzen, dunkler Urin (Hämoglobinurie), Schock, akutes Nierenversagen, **DIC** (disseminierte intravasale Gerinnung). Häufigste Ursache: Verwechslung am Patientenbett → deshalb ist **Bedside-Test** (letzte Kontrolle direkt am Patienten) gesetzlich vorgeschrieben.`,
      diagram: 'blood-groups',
      merksätze: [
        'ABO-Regel: Jede Blutgruppe hat Antikörper gegen die Antigene, die sie NICHT besitzt. AB = kein Antikörper (Universalempfänger), 0 = kein Antigen (Universalspender für Erythrozytenkonzentrate).',
        'Rhesus: Rh− hat KEINE natürlichen Antikörper – Sensibilisierung erst nach Kontakt. Klinisch wichtig: Rh-negative Mutter + Rh-positives Kind → Anti-D-Prophylaxe!'
      ],
      altfrage: {
        question: 'Welche Blutgruppe wird als Universalspender bezeichnet und warum?',
        answer: 'Blutgruppe 0 Rh-negativ gilt als Universalspender für Erythrozytenkonzentrate, da die Erythrozyten weder A- noch B-Antigene noch das D-Antigen tragen und daher von keinem der gängigen Antikörper angegriffen werden. Es ist jedoch wichtig zu beachten, dass das Plasma von Blutgruppe 0 Anti-A- und Anti-B-Antikörper enthält.'
      },
      klinischerBezug: '**AB0-inkompatible Transfusion**: Medizinischer Notfall. Innerhalb von Minuten: Fieber, Schüttelfrost, Flankenschmerzen (Nierenregion), **Hämoglobinurie** (dunkler "Coca-Cola"-Urin durch freies Hämoglobin), Schock, **akutes Nierenversagen** (Hämoglobin verstopft Nierentubuli), **DIC** (unkontrollierte Gerinnung + Blutung gleichzeitig). Häufigste Ursache: **Verwechslung am Patientenbett** — falscher Patient bekommt fremde Konserve. Prävention: **Bedside-Test** unmittelbar vor Transfusion (gesetzlich vorgeschrieben, nicht delegierbar). Bei jedem Schritt: 4-Augen-Prinzip, Identitätskontrolle.',
      selfTest: [
        {
          question: 'Welche Antikörper besitzt eine Person mit Blutgruppe A?',
          options: [
            'Anti-A',
            'Anti-B',
            'Anti-A und Anti-B',
            'Keine Antikörper',
            'Anti-D'
          ],
          correctIndex: 1,
          explanation: 'Blutgruppe A hat Antigen A auf den Erythrozyten und Anti-B-Antikörper im Plasma. Die Regel: Man hat Antikörper gegen die Antigene, die man NICHT besitzt.'
        },
        {
          question: 'Warum ist der Rhesusfaktor besonders in der Schwangerschaft wichtig?',
          options: [
            'Rh-positive Mütter bilden immer Antikörper gegen das Kind',
            'Rh-negative Mütter können nach Sensibilisierung Anti-D bilden, die das Rh-positive Kind schädigen',
            'Der Rhesusfaktor bestimmt die Blutgruppe des Kindes',
            'Rh-negative Kinder sind immer gefährdet',
            'Der Rhesusfaktor wird nur über das X-Chromosom vererbt'
          ],
          correctIndex: 1,
          explanation: 'Wenn eine Rh-negative Mutter nach der ersten Schwangerschaft mit einem Rh-positiven Kind sensibilisiert wird, können Anti-D-Antikörper in einer Folgeschwangerschaft die fetalen Erythrozyten angreifen (Morbus hämolyticus neonatorum).'
        },
        {
          question: 'Was wird bei der Major-Kreuzprobe geprüft?',
          options: [
            'Spenderserum gegen Empfängererythrozyten',
            'Empfängerserum gegen Spendererythrozyten',
            'Spender-DNA gegen Empfänger-DNA',
            'Beide Blutproben werden gemischt und die Gerinnung gemessen',
            'Empfängerplasma gegen Spenderplasma'
          ],
          correctIndex: 1,
          explanation: 'Bei der Major-Kreuzprobe wird das Empfängerserum (enthält die Antikörper des Patienten) mit den Spendererythrozyten gemischt. Kommt es zur Agglutination, ist die Transfusion inkompatibel.'
        }
      ]
    },
    // ==================== 2.6 ====================
    {
      id: 'bio-kap2-6',
      title: 'Atmungssystem',
      content: `Die Lunge besteht aus zwei Flügeln: rechts 3 Lappen, links 2 (weil das Herz Platz braucht). In den rund 300 Millionen **Alveolen** (Lungenbläschen) findet der Gasaustausch statt — O₂ rein, CO₂ raus, per einfacher Diffusion über die hauchdünne **Blut-Luft-Schranke** (nur 0,2–0,5 µm).

Atemluft gelangt über obere Atemwege (Nase, Rachen = **Pharynx**, Kehlkopf = **Larynx**) in die unteren Atemwege. In der Nase: Luft wird angewärmt, befeuchtet, gereinigt (**mukoziliäre Clearance** — Flimmerhärchen + Schleim transportieren Partikel raus). Im Larynx: **Stimmlippen** (Stimmbänder) + **Epiglottis** (klappt beim Schlucken zu → verhindert Aspiration von Nahrung in die Luftröhre).

**Trachea** (Luftröhre): hufeisenförmige Knorpelspangen halten sie offen. Teilt sich auf Höhe des 4.–5. Brustwirbels in rechten und linken **Hauptbronchus** (**Bifurcatio tracheae**). Rechter Hauptbronchus: kürzer, weiter, steiler → Fremdkörper (z.B. Erdnuss) rutschen häufiger nach rechts.

Bronchien verzweigen sich immer weiter → Lappen-, Segment-, Subsegmentbronchien → **Bronchiolen** (kein Knorpel mehr, glatte Muskulatur reguliert den Luftstrom) → terminale Bronchiolen → respiratorische Bronchiolen → **Alveolargänge** → Alveolen. Gesamtoberfläche: 80–120 m² — gigantisch für Gasaustausch.

Alveolarwand: **Typ-I-Pneumozyten** (flach, 95 % der Oberfläche, für Gasaustausch) + **Typ-II-Pneumozyten** (produzieren **Surfactant**). Surfactant = Gemisch aus Phospholipiden + Proteinen, setzt Oberflächenspannung herab → verhindert Kollaps der Alveolen beim Ausatmen (**Atelektase**).

Gasaustausch: Diffusion entlang Partialdruckgradienten. O₂ diffundiert aus Alveolarluft (pO₂ ≈ 100 mmHg) ins Blut (pO₂ ≈ 40 mmHg). CO₂ diffundiert umgekehrt.

Atemvolumina (Spirometrie): **Atemzugvolumen** (Tidalvolumen) = 500 mL in Ruhe. **Inspiratorisches Reservevolumen** ≈ 3.000 mL, **exspiratorisches Reservevolumen** ≈ 1.100 mL, **Residualvolumen** ≈ 1.200 mL (bleibt immer in der Lunge). **Vitalkapazität** (maximal ausatembares Volumen nach maximaler Einatmung) ≈ 4.600 mL. Atemfrequenz: 12–20/min. Atemminutenvolumen ≈ 6–8 L/min.`,
      diagram: 'atmungssystem',
      merksätze: [
        'Rechter Hauptbronchus: kürzer, weiter, steiler → Fremdkörper gelangen häufiger nach rechts. 300 Mio. Alveolen ≈ 100 m² Gasaustauschfläche.',
        'Surfactant (Typ-II-Pneumozyten) senkt die Oberflächenspannung → verhindert Alveolarkollaps. Atemzugvolumen = 500 mL, Vitalkapazität ≈ 4.600 mL.'
      ],
      altfrage: {
        question: 'Welche Funktion hat das Surfactant in den Alveolen?',
        answer: 'Surfactant wird von Typ-II-Pneumozyten produziert und setzt die Oberflächenspannung in den Alveolen herab. Dadurch wird verhindert, dass die Alveolen bei der Ausatmung kollabieren (Atelektase). Bei Frühgeborenen kann ein Surfactant-Mangel zum Atemnotsyndrom des Neugeborenen (IRDS) führen.'
      },
      klinischerBezug: '**Asthma bronchiale**: Chronische Entzündung der Atemwege → reversible Bronchokonstriktion (Verkrampfung der Bronchialmuskulatur) + Schleimhautödem + Hypersekretion von Schleim → Obstruktion → erschwertes Ausatmen, Giemen (pfeifendes Atemgeräusch), Dyspnoe (Atemnot). Trigger: Allergene, Anstrengung, kalte Luft. Therapie: β₂-Sympathomimetika (Bronchodilatation), inhalative Corticosteroide (Entzündungshemmung). **Atemnotsyndrom des Neugeborenen (IRDS)**: Bei Frühgeborenen (<35. SSW) produzieren Typ-II-Pneumozyten noch nicht genug Surfactant → Alveolen kollabieren → schwere Atemnot. Therapie: Surfactant-Substitution, Beatmung.',
      selfTest: [
        {
          question: 'Wie viele Alveolen enthält die menschliche Lunge ungefähr?',
          options: [
            'Ca. 30 Millionen',
            'Ca. 300 Millionen',
            'Ca. 3 Milliarden',
            'Ca. 30 Milliarden',
            'Ca. 3 Millionen'
          ],
          correctIndex: 1,
          explanation: 'Die Lunge enthält etwa 300 Millionen Alveolen mit einer Gesamtoberfläche von ca. 80–120 m², was den effizienten Gasaustausch ermöglicht.'
        },
        {
          question: 'Welcher Zelltyp produziert das Surfactant?',
          options: [
            'Typ-I-Pneumozyten',
            'Typ-II-Pneumozyten',
            'Alveolarmakrophagen',
            'Clara-Zellen',
            'Becherzellen der Bronchien'
          ],
          correctIndex: 1,
          explanation: 'Typ-II-Pneumozyten produzieren das Surfactant. Typ-I-Pneumozyten sind flache Zellen, die 95 % der Alveolaroberfläche bedecken und für den Gasaustausch zuständig sind.'
        },
        {
          question: 'Wie groß ist das Atemzugvolumen (Tidalvolumen) in Ruhe?',
          options: [
            'Ca. 150 mL',
            'Ca. 500 mL',
            'Ca. 1.200 mL',
            'Ca. 3.000 mL',
            'Ca. 2.000 mL'
          ],
          correctIndex: 1,
          explanation: 'Das Atemzugvolumen beträgt in Ruhe ca. 500 mL. Davon gelangen ca. 350 mL in die Alveolen (Alveolarventilation), ca. 150 mL verbleiben im anatomischen Totraum.'
        }
      ]
    },
    // ==================== 2.7 ====================
    {
      id: 'bio-kap2-7',
      title: 'Verdauungssystem',
      content: `Verdauung beginnt im Mund. Zähne zerkleinern mechanisch, Speicheldrüsen (Parotis, Submandibularis, Sublingualis) produzieren 1–1,5 L Speichel/Tag. Speichel enthält **Amylase** (Ptyalin) → spaltet Stärke zu Maltose — Kohlenhydratverdauung startet also bereits im Mund. Außerdem: Lysozym (antibakteriell), Muzine (Gleitfähigkeit), Bicarbonat (Pufferung). Nahrungsbrei (**Bolus**) wird geschluckt → über Rachen + **Ösophagus** (Speiseröhre) per **Peristaltik** in den Magen. Unterer Ösophagussphinkter verhindert Rückfluss von Magensäure.

**Magen**: Fassungsvermögen 1,5–2 L. Funktionen: Reservoir, Durchmischer, Proteinverdauer. Magenschleimhaut hat spezialisierte Zellen: **Belegzellen** (Parietalzellen) → produzieren **Salzsäure** (HCl, pH 1–2) + **Intrinsic Factor** (für Vitamin-B₁₂-Resorption im Ileum). **Hauptzellen** → produzieren **Pepsinogen** (wird durch HCl zu **Pepsin** aktiviert, spaltet Proteine). **Nebenzellen** → produzieren Schleim + Bicarbonat (schützen Magenschleimhaut vor Selbstverdauung). Nahrungsbrei (**Chymus**) wird portionsweise durch den **Pylorus** (Magenpförtner) in das **Duodenum** (Zwölffingerdarm) abgegeben.

**Dünndarm** (Duodenum, Jejunum, Ileum): 3–5 m lang, Hauptort der Verdauung + Resorption. Oberfläche 600-fach vergrößert durch **Kerckring-Falten** + **Zotten** (Villi) + **Mikrovilli** (Bürstensaum) → ca. 200 m². Im Duodenum münden **Ductus pancreaticus** (Pankreassaft) + **Ductus choledochus** (Galle) gemeinsam an der **Papilla Vateri**.

Pankreasenzyme: **Trypsin** + **Chymotrypsin** (Proteinverdauung), **Pankreaslipase** (Fettverdauung), **Pankreasamylase** (Stärkeverdauung). **Gallensäuren** (aus Leber) emulgieren Fette → bilden **Mizellen** → ermöglichen Fettresorption.

**Leber** = zentrales Stoffwechselorgan: Synthese von Plasmaproteinen, Glykogenspeicherung, Harnstoffbildung (Ammoniakentgiftung), Galleproduktion, Medikamentenmetabolismus (**First-Pass-Effekt**). **Pankreas**: exokrin (Verdauungsenzyme) + endokrin (**Langerhans-Inseln**: B-Zellen → Insulin, A-Zellen → Glukagon).

**Dickdarm** (Colon): Wasserresorption + Elektrolytresorption, beherbergt **Darmflora** (Mikrobiom), formt Stuhl. Rektum speichert Stuhl bis zur Ausscheidung über Analkanal.`,
      diagram: 'verdauungssystem',
      merksätze: [
        'Enzymzuordnung: Mund = Amylase (Stärke), Magen = Pepsin (Proteine), Dünndarm = Trypsin/Chymotrypsin (Proteine) + Lipase (Fette) + Amylase (Stärke). Die Kohlenhydratverdauung beginnt im Mund!',
        'Merke: Magenzelltypen: Belegzellen = HCl + Intrinsic Factor (für Vit. B12). Hauptzellen = Pepsinogen (wird durch HCl zu Pepsin aktiviert). Nebenzellen = Schleim (Schleimhautschutz).'
      ],
      altfrage: {
        question: 'Wo beginnt die Verdauung von Kohlenhydraten?',
        answer: 'Die Kohlenhydratverdauung beginnt bereits in der Mundhöhle durch die Speichelamylase (Ptyalin), die Stärke zu Maltose und Dextrinen spaltet. Im Magen wird die Amylase durch die Salzsäure inaktiviert. Im Dünndarm wird die Stärkeverdauung durch die Pankreasamylase fortgesetzt.'
      },
      klinischerBezug: '**Gastroösophagealer Reflux (GERD)**: Unterer Ösophagussphinkter insuffizient → Magensäure fließt in die Speiseröhre zurück → Sodbrennen (retrosternales Brennen), saures Aufstoßen. Langfristig: **Barrett-Ösophagus** (Schleimhautumbau, Krebsrisiko). **Ulcus ventriculi/duodeni** (Magen-/Zwölffingerdarmgeschwür): Schleimhautbarriere gestört → Säure greift Schleimhaut an. Hauptursachen: **Helicobacter pylori** (Bakterium, produziert Urease → neutralisiert Magensäure lokal), **NSAR** (nicht-steroidale Antirheumatika wie Ibuprofen, hemmen schützende Prostaglandine). Symptome: Schmerzen, oft nüchtern oder nachts. **Perniziöse Anämie**: Intrinsic-Factor-Mangel (z.B. bei Autoimmungastritis) → Vitamin-B₁₂-Malabsorption → megaloblastäre Anämie + neurologische Schäden.',
      selfTest: [
        {
          question: 'Welche Zellen produzieren die Salzsäure im Magen?',
          options: [
            'Hauptzellen',
            'Nebenzellen',
            'Belegzellen (Parietalzellen)',
            'G-Zellen',
            'Enterochromaffine Zellen'
          ],
          correctIndex: 2,
          explanation: 'Die Belegzellen (Parietalzellen) produzieren sowohl die Salzsäure (HCl) als auch den Intrinsic Factor. Die Hauptzellen bilden Pepsinogen, die Nebenzellen schützenden Schleim.'
        },
        {
          question: 'Welches Enzym spaltet Fette im Dünndarm?',
          options: [
            'Amylase',
            'Pepsin',
            'Trypsin',
            'Pankreaslipase',
            'Laktase'
          ],
          correctIndex: 3,
          explanation: 'Die Pankreaslipase spaltet Fette (Triglyceride) in Fettsäuren und Monoglyceride. Die Gallensäuren emulgieren die Fette zuvor und bilden Mizellen, die die Resorption ermöglichen.'
        },
        {
          question: 'Wie wird die Resorptionsfläche im Dünndarm vergrößert?',
          options: [
            'Durch Haustra und Tänien',
            'Durch Kerckring-Falten, Zotten und Mikrovilli',
            'Durch Krypten und Becherzellen',
            'Durch Peyer-Plaques und Lymphfollikel',
            'Durch Tänien und Appendices epiploicae'
          ],
          correctIndex: 1,
          explanation: 'Die Oberfläche des Dünndarms wird durch drei Strukturebenen vergrößert: Kerckring-Falten (makroskopisch), Zotten/Villi (mikroskopisch) und Mikrovilli (Bürstensaum). Dies ergibt eine Gesamtfläche von ca. 200 m².'
        }
      ]
    },
    // ==================== 2.8 ====================
    {
      id: 'bio-kap2-8',
      title: 'Nervensystem Grundlagen',
      content: `Nervensystem = Steuerungs- + Kommunikationssystem des Körpers. Anatomisch unterteilt: **ZNS** (Zentralnervensystem = Gehirn + Rückenmark) + **PNS** (peripheres Nervensystem = alle Nerven außerhalb des ZNS).

**ZNS**: Geschützt durch Knochen (Schädel, Wirbelsäule) + **Hirnhäute** (Meningen: Dura mater, Arachnoidea, Pia mater) + **Liquor cerebrospinalis** (ca. 150 mL Hirnwasser). Gehirn umfasst: **Großhirn** (Cerebrum, höhere kognitive Funktionen), **Zwischenhirn** (Diencephalon mit Thalamus + Hypothalamus), **Kleinhirn** (Cerebellum, Koordination + Gleichgewicht), **Mittelhirn** (Mesencephalon), **Hirnstamm** (Pons + Medulla oblongata, lebenswichtige Funktionen wie Atmung + Kreislauf). **PNS**: 12 Hirnnervenpaare + 31 Spinalnervenpaare.

Funktionell: **Somatisches Nervensystem** (willkürliche Motorik der Skelettmuskulatur + bewusste Sensorik) + **vegetatives Nervensystem** (VNS, unbewusste Steuerung innerer Organe).

**Vegetatives Nervensystem** = autonom, steuert glatte Muskulatur, Herzmuskel, Drüsen. Drei Anteile: **Sympathikus** (fight or flight, Stressreaktion), **Parasympathikus** (rest and digest, Ruhe + Verdauung), **enterisches Nervensystem** (ca. 100 Mio. Neuronen im Darm, "Bauchhirn", reguliert Darmmotilität weitgehend autonom).

**Sympathikus**: Ursprung thorakolumbal (Th1–L2). Neurotransmitter: präganglionär Acetylcholin, postganglionär **Noradrenalin** (Ausnahme: Schweißdrüsen → Acetylcholin). Wirkungen: Pupillenerweiterung (**Mydriasis**), **Bronchodilatation** (Bronchien weit), Herzfrequenz ↑ (positiv chronotrop), Blutdruck ↑, Magen-Darm-Motilität ↓, Glykogenolyse in Leber (Blutzucker ↑).

**Parasympathikus**: Ursprung kraniosakral (Hirnstamm: N. III, VII, IX, X + sakral S2–S4). Neurotransmitter: prä- + postganglionär **Acetylcholin**. Wichtigster Nerv: **N. vagus** (X. Hirnnerv, ca. 75 % der parasympathischen Innervation). Wirkungen: Pupillenverengung (**Miosis**), **Bronchokonstriktion** (Bronchien eng), Herzfrequenz ↓ (negativ chronotrop), Magen-Darm-Motilität ↑, Sekretion ↑, Blasenentleerung.

Sympathikus + Parasympathikus = Gegenspieler (Antagonisten) an den meisten Organen.`,
      diagram: 'nervensystem-übersicht',
      sections: [
        {
          heading: 'Sympathikus vs Parasympathikus Vergleich',
          text: 'Die beiden Anteile des vegetativen Nervensystems wirken antagonistisch und halten ein dynamisches Gleichgewicht aufrecht.',
          table: {
            headers: ['Merkmal', 'Sympathikus', 'Parasympathikus'],
            rows: [
              ['Funktion', 'Fight or flight (Stress)', 'Rest and digest (Ruhe)'],
              ['Ursprung', 'Thorakolumbal (Th1–L2)', 'Kraniosakral (Hirnstamm + S2–S4)'],
              ['Neurotransmitter präganglionär', 'Acetylcholin', 'Acetylcholin'],
              ['Neurotransmitter postganglionär', 'Noradrenalin (außer Schweißdrüsen)', 'Acetylcholin'],
              ['Pupille', 'Mydriasis (weit)', 'Miosis (eng)'],
              ['Bronchien', 'Bronchodilatation (weit)', 'Bronchokonstriktion (eng)'],
              ['Herzfrequenz', 'Erhöhung (positiv chronotrop)', 'Senkung (negativ chronotrop)'],
              ['Blutdruck', 'Erhöhung', 'Senkung'],
              ['Magen-Darm-Motilität', 'Hemmung', 'Förderung'],
              ['Speichelfluss', 'Wenig, zähflüssig', 'Viel, dünnflüssig'],
              ['Blasenmuskel', 'Erschlaffung (Harnverhalt)', 'Kontraktion (Entleerung)'],
              ['Schweißproduktion', 'Förderung (Acetylcholin!)', 'Keine direkte Wirkung']
            ]
          }
        }
      ],
      merksätze: [
        'Sympathikus = „fight or flight": Herz schneller, Bronchien weit, Pupillen weit, Verdauung gehemmt. Parasympathikus = „rest and digest": Herz langsamer, Bronchien eng, Pupillen eng, Verdauung aktiv.',
        'Sympathikus: thorakolumbal (Th1–L2), postganglionär Noradrenalin. Parasympathikus: kraniosakral (Hirnstamm + S2–S4), immer Acetylcholin.'
      ],
      altfrage: {
        question: 'Welcher Neurotransmitter wird postganglionär im Sympathikus verwendet?',
        answer: 'Postganglionär verwendet der Sympathikus Noradrenalin (Ausnahme: Schweißdrüsen verwenden Acetylcholin). Präganglionär verwenden sowohl Sympathikus als auch Parasympathikus Acetylcholin. Der Parasympathikus nutzt auch postganglionär Acetylcholin.'
      },
      klinischerBezug: '**Phäochromozytom**: Tumor des Nebennierenmarks, produziert massiv Katecholamine (Adrenalin + Noradrenalin) → Überaktivierung des Sympathikus. Symptome: anfallsartige Hypertonie (Blutdruck schießt hoch), **Tachykardie**, massives Schwitzen, Kopfschmerzen, Todesangst. Klassische Trias: Kopfschmerzen + Schwitzen + Tachykardie. Diagnostik: Katecholamine/Metanephrine im 24h-Urin. Therapie: operative Entfernung. **Anticholinergika** (z.B. **Atropin**): blockieren muskarinerge Acetylcholinrezeptoren → hemmen Parasympathikus. Anwendung: Pupillenerweiterung in der Augenheilkunde, Notfallmedikament bei Bradykardie (Herzfrequenz ↑), Gegenmittel bei Vergiftung mit Cholinesterasehemmern (z.B. Organophosphate).',
      selfTest: [
        {
          question: 'Was bewirkt der Sympathikus am Herzen?',
          options: [
            'Senkung der Herzfrequenz',
            'Steigerung der Herzfrequenz und Kontraktionskraft',
            'Keine Wirkung auf das Herz',
            'Verengung der Koronargefäße',
            'Verlängerung der AV-Überleitungszeit'
          ],
          correctIndex: 1,
          explanation: 'Der Sympathikus wirkt am Herzen positiv chronotrop (frequenzsteigernd), positiv inotrop (kontraktionskraftsteigernd) und positiv dromotrop (überleitungsbeschleunigend) über Noradrenalin an β₁-Rezeptoren.'
        },
        {
          question: 'Welcher Hirnnerv ist der Hauptnerv des Parasympathikus?',
          options: [
            'N. facialis (VII)',
            'N. trigeminus (V)',
            'N. vagus (X)',
            'N. hypoglossus (XII)',
            'N. accessorius (XI)'
          ],
          correctIndex: 2,
          explanation: 'Der Nervus vagus (X. Hirnnerv) ist der wichtigste parasympathische Nerv. Er innerviert Herz, Lunge und den Großteil des Gastrointestinaltrakts und ist für ca. 75 % der parasympathischen Innervation verantwortlich.'
        },
        {
          question: 'Aus welchen Strukturen besteht das ZNS?',
          options: [
            'Hirnnerven und Spinalnerven',
            'Gehirn und Rückenmark',
            'Sympathikus und Parasympathikus',
            'Ganglien und periphere Nerven',
            'Hypothalamus und Nebennierenmark'
          ],
          correctIndex: 1,
          explanation: 'Das Zentralnervensystem (ZNS) besteht aus Gehirn (Encephalon) und Rückenmark (Medulla spinalis). Alle Nervenstrukturen außerhalb des ZNS gehören zum peripheren Nervensystem (PNS).'
        }
      ]
    },
    // ==================== 2.9 ====================
    {
      id: 'bio-kap2-9',
      title: 'Neuron & Aktionspotential',
      content: `**Neuron** (Nervenzelle) = Grundbaustein des Nervensystems. Besteht aus: **Soma** (Zellkörper mit Zellkern, metabolisches Zentrum), **Dendriten** (kurze, verzweigte Fortsätze, empfangen Signale), **Axon** (langer Fortsatz, leitet Impulse weiter, von mm bis >1 m). Am **Axonhügel** (Ursprung des Axons) werden eingehende Signale integriert — Schwellenwert erreicht → Aktionspotential ausgelöst.

Viele Axone sind mit **Myelinscheide** isoliert (gebildet von **Schwann-Zellen** im PNS, **Oligodendrozyten** im ZNS). Zwischen den Myelinsegmenten: **Ranvier-Schnürringe** → hier findet **saltatorische Erregungsleitung** (springend von Schnürring zu Schnürring) statt. Geschwindigkeit: bis 120 m/s bei dicken myelinisierten Fasern vs. 0,5–2 m/s bei unmyelinisierten Fasern.

**Ruhemembranpotential**: ca. −70 mV (innen negativ). Ursache: unterschiedliche Ionenverteilung. K⁺ innen hoch (ca. 140 mmol/L), außen niedrig (ca. 4 mmol/L). Na⁺ außen hoch (ca. 145 mmol/L), innen niedrig (ca. 12 mmol/L). **Na⁺/K⁺-ATPase** pumpt aktiv 3 Na⁺ raus + 2 K⁺ rein (elektrogen, netto eine positive Ladung raus). In Ruhe ist die Membran vor allem für K⁺ durchlässig (Leckkanäle) → K⁺ strömt raus → innen wird negativ. Ruhepotential liegt nahe dem Kalium-Gleichgewichtspotential (ca. −90 mV nach Nernst), aber wegen geringer Na⁺-Leitfähigkeit etwas weniger negativ (−70 mV).

**Aktionspotential**: Wird ausgelöst bei Schwellenwert ca. −55 mV. **Alles-oder-Nichts-Prinzip**: Schwelle erreicht → vollständiges Aktionspotential, sonst gar nichts.

Ablauf: **(1) Depolarisation**: Spannungsgesteuerte Na⁺-Kanäle öffnen schnell → Na⁺ strömt rein → Membranpotential steigt auf ca. +30 mV (**Overshoot**). Na⁺-Kanäle inaktivieren sich nach ca. 1 ms. **(2) Repolarisation**: Spannungsgesteuerte K⁺-Kanäle öffnen verzögert → K⁺ strömt raus → Potential kehrt zurück. **(3) Hyperpolarisation** (Nachpotential): K⁺-Kanäle schließen verzögert → kurzzeitig ca. −80 mV.

**Absolute Refraktärzeit**: Während des Aktionspotentials kein neues AP auslösbar (Na⁺-Kanäle inaktiviert). **Relative Refraktärzeit**: Stärkerer Reiz nötig. Garantiert unidirektionale Weiterleitung entlang des Axons.`,
      diagram: 'action-potential',
      merksätze: [
        'Ruhepotential = −70 mV (K⁺-Ausstrom dominiert). Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein. Schwellenwert ≈ −55 mV → Alles-oder-Nichts-Prinzip.',
        'Aktionspotential-Phasen: Depolarisation (Na⁺ rein, +30 mV) → Repolarisation (K⁺ raus) → Hyperpolarisation (−80 mV) → Ruhepotential (−70 mV).'
      ],
      altfrage: {
        question: 'Welcher Ionenstrom ist für die Depolarisation beim Aktionspotential verantwortlich?',
        answer: 'Der Natriumeinstrom (Na⁺) durch spannungsgesteuerte Natriumkanäle ist für die Depolarisation verantwortlich. Na⁺ strömt entlang seines elektrochemischen Gradienten in die Zelle und verschiebt das Membranpotential von −70 mV auf ca. +30 mV (Overshoot).'
      },
      klinischerBezug: '**Lokalanästhetika** (z.B. **Lidocain**, Procain): blockieren spannungsgesteuerte Na⁺-Kanäle → keine Depolarisation möglich → Aktionspotential-Weiterleitung in Schmerzfasern blockiert → lokale Schmerzausschaltung. Anwendung: Zahnmedizin, kleine OPs, Geburtshilfe (Periduralanästhesie). **Multiple Sklerose (MS)**: Autoimmunerkrankung, bei der körpereigene Immunzellen die Myelinscheiden im ZNS angreifen und zerstören (**Demyelinisierung**) → saltatorische Erregungsleitung gestört oder unmöglich → Signalweiterleitung verlangsamt/blockiert. Symptome (sehr variabel): Sehstörungen (Optikusneuritis), Lähmungen, Sensibilitätsstörungen (Kribbeln, Taubheit), Fatigue, Koordinationsstörungen. Verlauf schubförmig oder chronisch-progredient.',
      selfTest: [
        {
          question: 'Wie groß ist das Ruhemembranpotential eines Neurons?',
          options: [
            'Ca. −30 mV',
            'Ca. −55 mV',
            'Ca. −70 mV',
            'Ca. −90 mV',
            'Ca. +30 mV'
          ],
          correctIndex: 2,
          explanation: 'Das Ruhemembranpotential beträgt ca. −70 mV. Es wird hauptsächlich durch den K⁺-Ausstrom durch Leckkanäle bestimmt und liegt nahe dem Kalium-Gleichgewichtspotential (−90 mV).'
        },
        {
          question: 'Wie viele Na⁺-Ionen transportiert die Na⁺/K⁺-ATPase pro Pumpzyklus nach außen?',
          options: [
            '2 Na⁺',
            '3 Na⁺',
            '4 Na⁺',
            '5 Na⁺',
            '1 Na⁺'
          ],
          correctIndex: 1,
          explanation: 'Die Na⁺/K⁺-ATPase pumpt pro ATP-Verbrauch 3 Na⁺ nach außen und 2 K⁺ nach innen. Da netto eine positive Ladung nach außen transportiert wird, ist die Pumpe elektrogen.'
        },
        {
          question: 'Was versteht man unter saltatorischer Erregungsleitung?',
          options: [
            'Kontinuierliche Weiterleitung entlang des gesamten Axons',
            'Springende Erregungsleitung von Schnürring zu Schnürring',
            'Rückwärtige Erregungsleitung vom Axon zum Soma',
            'Weiterleitung über chemische Synapsen',
            'Erregungsleitung durch Gap Junctions zwischen Neuronen'
          ],
          correctIndex: 1,
          explanation: 'Bei der saltatorischen Erregungsleitung „springt" das Aktionspotential von Ranvier-Schnürring zu Schnürring, da nur dort Ionenkanäle vorhanden sind. Dies ist deutlich schneller als die kontinuierliche Leitung in unmyelinisierten Fasern.'
        }
      ]
    },
    // ==================== 2.10 ====================
    {
      id: 'bio-kap2-10',
      title: 'Synapse & Neurotransmitter',
      content: `**Synapse** = Kontaktstelle zwischen Neuronen oder zwischen Neuron und Effektorzelle (z.B. Muskel). Zwei Typen: **chemische Synapsen** (häufigste, übertragen via Neurotransmitter) + **elektrische Synapsen** (Gap Junctions, direkte elektrische Kopplung, schnell, keine Modulation, z.B. Herzmuskel).

Chemische Synapse besteht aus: **präsynaptisches Endknöpfchen** (Bouton, enthält synaptische Vesikel mit Neurotransmittern), **synaptischer Spalt** (ca. 20–40 nm breit), **postsynaptische Membran** (mit Rezeptoren).

**Synaptische Übertragung** — Ablauf:
**(1)** Aktionspotential erreicht präsynaptisches Terminal.
**(2)** Spannungsgesteuerte **Ca²⁺-Kanäle** öffnen → Ca²⁺ strömt rein.
**(3)** Ca²⁺-Einstrom ist der Schlüssel: bewirkt Fusion der Vesikel mit Membran (**Exozytose**) → Neurotransmitter werden in synaptischen Spalt freigesetzt.
**(4)** Neurotransmitter diffundieren über Spalt, binden an Rezeptoren auf postsynaptischer Membran.
**(5)** Bindung öffnet Ionenkanäle oder aktiviert Second-Messenger-Kaskaden → postsynaptisches Potential entsteht.
**(6)** Beendigung: enzymatischer Abbau (z.B. **Acetylcholinesterase** spaltet Acetylcholin), **Reuptake** (Wiederaufnahme ins präsynaptische Terminal) oder Diffusion.

**EPSP** (exzitatorisches postsynaptisches Potential): Depolarisation → erhöht Wahrscheinlichkeit eines AP.
**IPSP** (inhibitorisches postsynaptisches Potential): Hyperpolarisation → senkt Wahrscheinlichkeit eines AP.
Am Axonhügel werden alle EPSPs + IPSPs summiert (**Integration**) → Schwelle erreicht → AP ausgelöst.

Wichtige Neurotransmitter:
**Acetylcholin** (ACh): neuromuskuläre Endplatte, Parasympathikus.
**Noradrenalin + Adrenalin**: Sympathikus, Aufmerksamkeit.
**Dopamin**: Belohnung, Motorik (Verlust bei Parkinson).
**Serotonin**: Stimmung, Schlaf.
**GABA** (γ-Aminobuttersäure): wichtigster hemmender Neurotransmitter im ZNS.
**Glutamat**: wichtigster erregender Neurotransmitter im ZNS.
**Endorphine**: körpereigene Schmerzhemmung.

Balance zwischen Erregung (Glutamat) und Hemmung (GABA) ist entscheidend für normale Gehirnfunktion.`,
      diagram: 'synapse',
      merksätze: [
        'Calcium (Ca²⁺) ist der Schlüssel zur Neurotransmitterfreisetzung: Kein Ca²⁺-Einstrom → keine Exozytose → keine synaptische Übertragung.',
        'Glutamat = wichtigster erregender Neurotransmitter (EPSP). GABA = wichtigster hemmender Neurotransmitter (IPSP). Acetylcholin = neuromuskuläre Endplatte + Parasympathikus.'
      ],
      altfrage: {
        question: 'Welche Rolle spielt Calcium bei der synaptischen Übertragung?',
        answer: 'Calcium (Ca²⁺) strömt bei Ankunft des Aktionspotentials über spannungsgesteuerte Ca²⁺-Kanäle in das präsynaptische Terminal. Der Ca²⁺-Einstrom ist der entscheidende Auslöser für die Fusion der synaptischen Vesikel mit der Membran (Exozytose) und damit für die Freisetzung der Neurotransmitter in den synaptischen Spalt.'
      },
      klinischerBezug: '**Myasthenia gravis**: Autoimmunerkrankung, bei der **Autoantikörper gegen Acetylcholinrezeptoren** an der neuromuskulären Endplatte gebildet werden → Rezeptoren werden blockiert/zerstört → Signalübertragung vom Nerv auf Muskel gestört. Symptome: **belastungsabhängige Muskelschwäche** (bessert sich nach Ruhe), typischerweise zuerst Augenmuskeln betroffen → Ptosis (hängendes Augenlid), Doppelbilder. Diagnostik: Tensilon-Test (Cholinesterasehemmer bessert Symptome vorübergehend), Antikörpernachweis. Therapie: Cholinesterasehemmer, Immunsuppression. **SSRI** (Selektive Serotonin-Wiederaufnahmehemmer, z.B. **Fluoxetin**, Sertralin): hemmen Reuptake von Serotonin → erhöhte Serotonin-Konzentration im synaptischen Spalt → antidepressive Wirkung. **Morbus Parkinson**: Degeneration **dopaminerger Neuronen** in der **Substantia nigra** (Mittelhirn) → Dopaminmangel in den Basalganglien → Bewegungsstörungen. Kardinalsymptome: **Akinese** (Bewegungsarmut), **Rigor** (Muskelsteifigkeit), **Ruhetremor** (Zittern in Ruhe, bessert sich bei Bewegung), posturale Instabilität. Therapie: L-Dopa (Dopamin-Vorstufe, kann Blut-Hirn-Schranke passieren).',
      selfTest: [
        {
          question: 'Welcher Neurotransmitter wirkt an der neuromuskulären Endplatte?',
          options: [
            'Noradrenalin',
            'Dopamin',
            'Acetylcholin',
            'GABA',
            'Glutamat'
          ],
          correctIndex: 2,
          explanation: 'Acetylcholin (ACh) ist der Neurotransmitter an der motorischen Endplatte. Es bindet an nikotinische Acetylcholinrezeptoren auf der Muskelfaser und löst eine Depolarisation und damit eine Muskelkontraktion aus.'
        },
        {
          question: 'Was ist der wichtigste hemmende Neurotransmitter im ZNS?',
          options: [
            'Glutamat',
            'GABA (γ-Aminobuttersäure)',
            'Serotonin',
            'Dopamin',
            'Endorphine'
          ],
          correctIndex: 1,
          explanation: 'GABA (γ-Aminobuttersäure) ist der wichtigste inhibitorische Neurotransmitter im ZNS. Er erzeugt IPSPs durch Öffnung von Chloridkanälen, was zur Hyperpolarisation führt. Glutamat ist dagegen der wichtigste exzitatorische Neurotransmitter.'
        },
        {
          question: 'Was passiert, wenn der Ca²⁺-Einstrom in das präsynaptische Terminal blockiert wird?',
          options: [
            'Die Neurotransmitterfreisetzung wird verstärkt',
            'Die Neurotransmitterfreisetzung wird verhindert',
            'Das Ruhepotential wird positiver',
            'Die Myelinscheide wird abgebaut',
            'Die postsynaptischen Rezeptoren werden desensibilisiert'
          ],
          correctIndex: 1,
          explanation: 'Ohne Ca²⁺-Einstrom können die synaptischen Vesikel nicht mit der präsynaptischen Membran fusionieren (keine Exozytose). Es werden keine Neurotransmitter freigesetzt und die synaptische Übertragung ist blockiert.'
        }
      ]
    },
    // ==================== 2.11 ====================
    {
      id: 'bio-kap2-11',
      title: 'Niere & Homöostase',
      content: `Nieren: paarig, bohnenförmig, ca. 11 cm lang, je 150 g, liegen retroperitoneal (hinter dem Bauchfell). Multifunktionsorgane: Blutfiltration + Urinbildung, Wasser- + Elektrolythaushalt, Säure-Basen-Haushalt, Ausscheidung harnpflichtiger Substanzen (Harnstoff, Kreatinin, Harnsäure), Blutdruckregulation (**RAAS** = Renin-Angiotensin-Aldosteron-System), endokrine Funktionen (**Erythropötin** für Blutbildung, Aktivierung von Vitamin D für Calciumhaushalt).

Aufbau: **Nierenrinde** (Cortex, enthält Glomeruli + proximale/distale Tubuli) + **Nierenmark** (Medulla, enthält Henle-Schleifen + Sammelrohre). Funktionseinheit: **Nephron** — jede Niere hat ca. 1 Million Nephrone.

**Nephron** besteht aus: **Nierenkörperchen** (Glomerulus + **Bowman-Kapsel**) + **Tubulussystem** (proximaler Tubulus, **Henle-Schleife**, distaler Tubulus, Sammelrohr).

Im **Glomerulus**: Blut wird filtriert. Filtrationsdruck drückt Wasser + kleine Moleküle (Glukose, Aminosäuren, Elektrolyte, Harnstoff) aus Blut in Bowman-Kapsel. Blutzellen + große Proteine bleiben zurück. **GFR** (glomeruläre Filtrationsrate) = 120 mL/min ≈ 180 L Primärharn/Tag. Davon 99 % rückresorbiert → nur 1–2 L Endharn/Tag.

**Proximaler Tubulus**: ca. 65 % von Na⁺, Wasser, Glukose, Aminosäuren rückresorbiert. **Henle-Schleife**: **Gegenstromprinzip** baut osmotischen Gradienten im Nierenmark auf → ermöglicht Harnkonzentrierung. **Distaler Tubulus + Sammelrohr**: Feinregulation unter hormoneller Kontrolle.

**Hormonelle Regulation**:
**(1) ADH** (Antidiuretisches Hormon = Vasopressin): Produktion im Hypothalamus, Speicherung im Hypophysenhinterlappen. Freisetzung bei erhöhter Plasmaosmolalität oder Volumenmangel → bewirkt Einbau von **Aquaporin-2**-Wasserkanälen in Sammelrohre → mehr Wasser rückresorbiert → konzentrierter Urin. ADH-Mangel (**Diabetes insipidus**) → bis zu 20 L verdünnter Urin/Tag.

**(2) Aldosteron**: Produktion in Nebennierenrinde (Zona glomerulosa), reguliert durch **RAAS**. Steigert Na⁺-Rückresorption + K⁺-Sekretion im distalen Tubulus + Sammelrohr. Wasser folgt Na⁺ osmotisch → Wasserretention → Blutdruck ↑. RAAS wird aktiviert bei niedrigem Blutdruck oder Volumenmangel.`,
      diagram: 'nephron',
      merksätze: [
        'GFR = 120 mL/min → 180 L Primärharn/Tag → 99 % Rückresorption → 1–2 L Endharn. Jede Niere hat ca. 1 Mio. Nephrone.',
        'ADH = Wasser rückresorbieren (Aquaporin-2 im Sammelrohr). Aldosteron = Na⁺ rückresorbieren + K⁺ sezernieren (distaler Tubulus). Merke: „ADH = Antidiuretisch = Hält Wasser zurück".'
      ],
      altfrage: {
        question: 'Wie viel Primärharn produzieren die Nieren pro Tag?',
        answer: 'Die Nieren filtrieren täglich etwa 180 Liter Primärharn (GFR ≈ 120 mL/min × 60 min × 24 h). Durch Rückresorption von ca. 99 % entstehen nur 1–2 Liter Endharn (Urin). Der Großteil der Rückresorption findet im proximalen Tubulus statt.'
      },
      klinischerBezug: '**Chronische Niereninsuffizienz (CKD)**: GFR sinkt fortschreitend ab → Niere kann ihre Funktionen nicht mehr erfüllen. Folgen: **Urämie** (harnpflichtige Substanzen akkumulieren im Blut → Übelkeit, Verwirrtheit, Juckreiz), Ödeme (Wasser- + Salzretention), **Hyperkaliämie** (erhöhtes K⁺ → Herzrhythmusstörungen), **metabolische Azidose** (H⁺-Retention), **renale Anämie** (EPO-Mangel). Endstadium (**terminale Niereninsuffizienz**): Dialyse oder Nierentransplantation notwendig. **ACE-Hemmer** (z.B. Enalapril, Ramipril): blockieren Angiotensin-Converting-Enzyme → hemmen RAAS → Blutdruck ↓, Nachlast ↓. Anwendung: Hypertonie, Herzinsuffizienz, Nierenschutz bei Diabetes. Cave: Hyperkaliämie (Aldosteron ↓ → K⁺-Retention), trockener Reizhusten (Bradykinin-Akkumulation).',
      selfTest: [
        {
          question: 'Welches Hormon fördert den Einbau von Wasserkanälen im Sammelrohr?',
          options: [
            'Aldosteron',
            'ADH (Vasopressin)',
            'Erythropötin',
            'Renin',
            'Parathormon'
          ],
          correctIndex: 1,
          explanation: 'ADH (Antidiuretisches Hormon / Vasopressin) bewirkt den Einbau von Aquaporin-2-Wasserkanälen in die Sammelrohre, wodurch mehr Wasser rückresorbiert wird und der Urin konzentrierter wird.'
        },
        {
          question: 'Wie groß ist die glomeruläre Filtrationsrate (GFR) bei einem Gesunden?',
          options: [
            'Ca. 12 mL/min',
            'Ca. 60 mL/min',
            'Ca. 120 mL/min',
            'Ca. 500 mL/min',
            'Ca. 30 mL/min'
          ],
          correctIndex: 2,
          explanation: 'Die GFR beträgt beim Gesunden ca. 120 mL/min. Das entspricht etwa 180 Litern Primärharn pro Tag, von denen 99 % rückresorbiert werden.'
        },
        {
          question: 'Was bewirkt Aldosteron in der Niere?',
          options: [
            'Hemmung der Natriumrückresorption',
            'Steigerung der Na⁺-Rückresorption und K⁺-Sekretion',
            'Hemmung der Wasserrückresorption',
            'Steigerung der GFR',
            'Förderung der Calciumrückresorption im proximalen Tubulus'
          ],
          correctIndex: 1,
          explanation: 'Aldosteron steigert im distalen Tubulus und Sammelrohr die Rückresorption von Na⁺ (und damit Wasser) und fördert die Sekretion von K⁺. Es wird durch das RAAS reguliert und erhöht den Blutdruck.'
        }
      ]
    },
    // ==================== 2.12 ====================
    {
      id: 'bio-kap2-12',
      title: 'Hormonsystem',
      content: `**Endokrines System** (Hormonsystem): steuert Körperfunktionen zusammen mit Nervensystem — langsamer, aber nachhaltiger. **Hormone** = chemische Botenstoffe, von endokrinen Drüsen ins Blut abgegeben, wirken an spezifischen Rezeptoren der Zielzellen.

Drei Hormontypen:
**(1) Peptidhormone** (z.B. Insulin, ADH): wasserlöslich, binden an Membranrezeptoren, wirken über **Second-Messenger** (z.B. cAMP).
**(2) Steroidhormone** (z.B. Cortisol, Östrogen, Testosteron): lipophil, durchdringen Membran, wirken über intrazelluläre Rezeptoren als Transkriptionsfaktoren (verändern Genexpression).
**(3) Aminosäurederivate** (z.B. Schilddrüsenhormone T₃/T₄, Katecholamine Adrenalin/Noradrenalin).

**Hypothalamus-Hypophysen-Achse** = übergeordnetes Steuerungszentrum. Hypothalamus sezerniert **Releasing-Hormone** (stimulierend) + **Inhibiting-Hormone** (hemmend) → über Portalgefäße zum **Hypophysenvorderlappen** (Adenohypophyse) → Freisetzung glandotroper Hormone (= Hormone, die andere Drüsen steuern).

Regulationsprinzip: **negative Rückkopplung** (Feedback). Hoher Hormonspiegel hemmt übergeordnete Ebenen (Hypothalamus + Hypophyse).

Beispiel **Schilddrüsenachse**: Hypothalamus → **TRH** (Thyreotropin-Releasing-Hormon) → Hypophyse → **TSH** (Thyreoidea-stimulierendes Hormon) → Schilddrüse → **T₃ + T₄** (Thyroxin). Erhöhte T₃/T₄-Spiegel hemmen TRH + TSH (negative Rückkopplung). Schilddrüsenhormone: steigern Grundumsatz, Wärmeproduktion, Herzfrequenz, essentiell für kindliche Hirnentwicklung.

**Blutzuckerregulation** (Pankreas): **Insulin** (B-Zellen der Langerhans-Inseln) senkt Blutzucker → fördert Glukoseaufnahme in Zellen, Glykogensynthese, Lipogenese. **Glukagon** (A-Zellen) erhöht Blutzucker → Glykogenolyse + Glukoneogenese in Leber.

**Nebenniere**: zwei Teile mit unterschiedlichen Funktionen.
**Nebennierenrinde** (drei Zonen von außen nach innen, Merkregel "Salz, Zucker, Sex"):
— **Zona glomerulosa** → **Aldosteron** (Mineralocorticoid, Wasser-/Salzhaushalt)
— **Zona fasciculata** → **Cortisol** (Glucocorticoid, Stresshormon, entzündungshemmend, Blutzucker ↑)
— **Zona reticularis** → **Androgene** (z.B. DHEA, Sexualhormone)

Cortisolsekretion: reguliert über **HPA-Achse** (Hypothalamus → CRH → Hypophyse → ACTH → Nebenniere → Cortisol), zirkadianer Rhythmus (Maximum morgens).

**Nebennierenmark**: produziert **Katecholamine** (80 % Adrenalin, 20 % Noradrenalin), funktionell Teil des Sympathikus.

Weitere endokrine Organe: **Nebenschilddrüsen** (Parathormon → Calciumhaushalt), **Epiphyse** (Melatonin → Schlaf-Wach-Rhythmus), **Gonaden** (Östrogen, Progesteron, Testosteron → Geschlechtsentwicklung + Reproduktion).`,
      diagram: 'hormonsystem',
      merksätze: [
        'Negative Rückkopplung: Hoher Hormonspiegel → hemmt übergeordnete Ebene (Hypothalamus/Hypophyse). Schilddrüsenachse: Hypothalamus (TRH) → Hypophyse (TSH) → Schilddrüse (T₃/T₄) → hemmt TRH + TSH.',
        'Merke: Nebennierenrinde von außen nach innen: „Salz, Zucker, Sex" — Zona glomerulosa (Aldosteron = Salz), Zona fasciculata (Cortisol = Zucker), Zona reticularis (Androgene = Sex). Insulin (B-Zellen) senkt, Glukagon (A-Zellen) erhöht den Blutzucker.'
      ],
      altfrage: {
        question: 'Wie reguliert die Hypothalamus-Hypophysen-Schilddrüsen-Achse den T₃/T₄-Spiegel?',
        answer: 'Der Hypothalamus sezerniert TRH, das die Hypophyse zur TSH-Freisetzung anregt. TSH stimuliert die Schilddrüse zur T₃/T₄-Produktion. Erhöhte T₃/T₄-Spiegel hemmen die Freisetzung von TRH und TSH (negative Rückkopplung), sodass der Hormonspiegel in einem engen Bereich gehalten wird.'
      },
      klinischerBezug: '**Diabetes mellitus Typ 1**: Autoimmunerkrankung, **B-Zellen** des Pankreas werden zerstört → **absoluter Insulinmangel**. Beginn meist im Kindes-/Jugendalter. Symptome: Hyperglykämie → Polyurie (viel Urin), Polydipsie (viel Durst), Gewichtsverlust. Lebensbedrohliche Komplikation: **diabetische Ketoazidose** (Insulinmangel → Körper verbrennt Fett → Ketonkörper → Azidose). Therapie: **Insulin-Substitution** (lebenslang). **Diabetes mellitus Typ 2**: **Insulinresistenz** der Zielzellen (Muskel, Fett, Leber reagieren schlecht auf Insulin) + relativer Insulinmangel (Pankreas kompensiert nicht ausreichend). Meist Erwachsenenalter, assoziiert mit Übergewicht, Bewegungsmangel. Therapie: Lebensstiländerung, Metformin, evtl. Insulin. **Hyperthyreose** (z.B. **Morbus Basedow**): **TSH-Rezeptor-Autoantikörper** stimulieren Schilddrüse unkontrolliert → T₃/T₄ ↑↑. Symptome: Tachykardie, Gewichtsverlust trotz gutem Appetit, Nervosität, Schwitzen, **Exophthalmus** (hervorstehende Augen bei M. Basedow). **Morbus Cushing**: **Cortisolüberschuss** (z.B. durch ACTH-produzierenden Hypophysentumor oder Nebennierentumor). Symptome: **Stammfettsucht** (Fett an Rumpf, nicht an Extremitäten), **Vollmondgesicht**, **Stiernacken**, rote **Striae** (Dehnungsstreifen), Osteoporose, Muskelschwäche, Diabetes, Hypertonie.',
      selfTest: [
        {
          question: 'Welches Hormon senkt den Blutzuckerspiegel?',
          options: [
            'Glukagon',
            'Cortisol',
            'Insulin',
            'Adrenalin',
            'Somatostatin'
          ],
          correctIndex: 2,
          explanation: 'Insulin wird von den B-Zellen der Langerhans-Inseln des Pankreas produziert und senkt den Blutzucker durch Förderung der Glukoseaufnahme in die Zellen, Glykogensynthese und Lipogenese. Glukagon, Cortisol und Adrenalin erhöhen dagegen den Blutzucker.'
        },
        {
          question: 'Was produziert die Zona fasciculata der Nebennierenrinde?',
          options: [
            'Aldosteron',
            'Cortisol',
            'Androgene (DHEA)',
            'Adrenalin',
            'Thyroxin (T₄)'
          ],
          correctIndex: 1,
          explanation: 'Die Zona fasciculata der Nebennierenrinde produziert Glucocorticoide, hauptsächlich Cortisol. Merkhilfe: „GFR" von außen nach innen – Glomerulosa (Aldosteron), Fasciculata (Cortisol), Reticularis (Androgene).'
        },
        {
          question: 'Welches Prinzip reguliert die meisten Hormonachsen?',
          options: [
            'Positive Rückkopplung',
            'Negative Rückkopplung (Feedback)',
            'Feed-forward-Mechanismus',
            'Allosterische Regulation',
            'Parakrine Signalweiterleitung'
          ],
          correctIndex: 1,
          explanation: 'Die meisten Hormonachsen werden durch negative Rückkopplung reguliert: Ein hoher Hormonspiegel hemmt die übergeordneten Regulationsebenen (Hypothalamus und Hypophyse), sodass der Hormonspiegel in einem engen physiologischen Bereich gehalten wird.'
        }
      ]
    },
    // ==================== 2.13 ====================
    {
      id: 'bio-kap2-13',
      title: 'Bewegungsapparat',
      content: `Bewegungsapparat = passiv (Knochen, Knorpel, Gelenke, Bänder) + aktiv (Skelettmuskulatur, Sehnen). Skelett: ca. 206 Knochen. Funktionen: Stütze, Schutz (Schädel, Thorax), Bewegung (Hebel für Muskeln), Blutbildung (Knochenmark), Mineralspeicher (Calcium, Phosphat).

Knochenformen: **Röhrenknochen** (z.B. Femur, Humerus), **platte Knochen** (z.B. Schädelknochen, Sternum), **kurze Knochen** (z.B. Handwurzel), **irreguläre Knochen** (z.B. Wirbel), **Sesambeine** (z.B. Patella).

Röhrenknochen-Aufbau: **Diaphyse** (Schaft, kompakte Knochensubstanz = **Compacta**), **Epiphysen** (Knochenenden, schwammartige Struktur = **Spongiosa**), **Metaphyse** (Wachstumszone bei Kindern, **Epiphysenfuge**). Innere Markhöhle: gelbes (Fett) oder rotes (blutbildendes) Knochenmark.

**Skelettmuskulatur**: ca. 40 % des Körpergewichts, ermöglicht willkürliche Bewegung. Muskelfasern: vielkernig, quergestreift, bestehen aus **Myofibrillen**. Myofibrillen = viele **Sarkomere** hintereinander. **Sarkomer** = kleinste kontraktile Einheit, begrenzt von zwei **Z-Scheiben**.

Sarkomer-Aufbau: dünne **Aktinfilamente** + dicke **Myosinfilamente**. Querstreifung entsteht durch regelmäßige Anordnung: **A-Bande** (dunkel, Myosin), **I-Bande** (hell, nur Aktin), **H-Zone** (Mitte der A-Bande, nur Myosin), **M-Linie** (Mitte des Sarkomers, verbindet Myosin).

**Gleitfilamenttheorie** (Huxley & Huxley, 1954): Bei Kontraktion gleiten Aktin + Myosin ineinander → Sarkomer verkürzt sich. Die Filamente selbst werden NICHT kürzer.

**Mechanismus der Muskelkontraktion**:
**(1)** Aktionspotential erreicht neuromuskuläre Endplatte → Acetylcholin freigesetzt → AP in Muskelfaser.
**(2)** AP breitet sich über **T-Tubuli** ins Innere aus → Ca²⁺-Freisetzung aus **sarkoplasmatischem Retikulum**.
**(3)** Ca²⁺ bindet an **Troponin C** auf Aktinfilament → Konformationsänderung → **Tropomyosin** wird verschoben → Myosinbindungsstellen auf Aktin werden frei.
**(4)** **Myosinköpfe** binden an Aktin (**Querbrückenbildung**).
**(5)** Unter ATP-Verbrauch: Myosinkopf kippt (**Kraftschlag**) → zieht Aktinfilament zur Sarkomermitte → Sarkomer verkürzt sich.
**(6)** ATP bindet an Myosinkopf → Querbrücke löst sich. Zyklus wiederholt sich.

ATP-Rolle: (a) Kraftschlag, (b) Lösen der Querbrücke. Ohne ATP bleibt Myosinkopf am Aktin haften → **Totenstarre** (Rigor mortis).

Erschlaffung: Ca²⁺ wird aktiv zurück ins sarkoplasmatische Retikulum gepumpt (**SERCA-Pumpe**) → Troponin nimmt ursprüngliche Form an → Myosinbindungsstellen blockiert.`,
      diagram: 'sarkomer',
      merksätze: [
        'Gleitfilamenttheorie: Aktin und Myosin gleiten ineinander → Sarkomer verkürzt sich, Filamente selbst werden NICHT kürzer. ATP wird für Kraftschlag UND Lösen der Querbrücke benötigt.',
        'Kontraktionsauslöser: Ca²⁺ aus dem sarkoplasmatischen Retikulum bindet an Troponin C → Tropomyosin verschiebt sich → Myosinbindungsstellen auf Aktin werden frei → Querbrückenbildung.'
      ],
      altfrage: {
        question: 'Was ist die kleinste kontraktile Einheit des Skelettmuskels?',
        answer: 'Das Sarkomer ist die kleinste kontraktile Einheit. Es wird von zwei Z-Scheiben begrenzt und enthält Aktin- (dünn) und Myosinfilamente (dick). Bei der Kontraktion gleiten die Filamente ineinander (Gleitfilamenttheorie), wodurch sich das Sarkomer verkürzt.'
      },
      klinischerBezug: '**Duchenne-Muskeldystrophie**: X-chromosomal rezessive Erbkrankheit (betrifft fast nur Jungen). Fehlendes Protein **Dystrophin** verbindet Myofibrillen mit Zellmembran. Ohne Dystrophin: Muskelfasern gehen bei Kontraktion zugrunde → fortschreitende Muskelschwäche. Symptome: beginnt im Kindesalter (2–5 Jahre), proximale Muskelschwäche (Watschelgang, Gowers-Zeichen = Patient zieht sich an eigenen Beinen hoch), **Pseudohypertrophie** der Waden (Fett- + Bindegewebsvermehrung), Herzmuskel betroffen → Kardiomyopathie. Verlauf: progredient, meist im jungen Erwachsenenalter letal. **Totenstarre** (Rigor mortis): Nach Tod stoppt ATP-Produktion → Myosinköpfe bleiben fest an Aktin gebunden (Querbrücken können nicht gelöst werden) → Muskulatur versteift. Beginnt 2–4 h post mortem, Maximum nach 12–24 h, löst sich nach 48–60 h (Proteinzerfall). **Osteoporose**: Systemische Skeletterkrankung, **verminderte Knochendichte** + gestörte Mikroarchitektur → erhöhte Frakturgefahr. Hauptrisiko: postmenopausale Frauen (Östrogenmangel → erhöhter Knochenabbau). Typische Frakturen: Wirbelkörper (Kompressionsfrakturen), proximaler Femur (Schenkelhalsfraktur), distaler Radius. Prävention: Calcium + Vitamin D, Bewegung. Therapie: Bisphosphonate (hemmen Osteoklasten).',
      selfTest: [
        {
          question: 'Welches Ion ist der direkte Auslöser der Muskelkontraktion?',
          options: [
            'Na⁺',
            'K⁺',
            'Ca²⁺',
            'Mg²⁺',
            'Cl⁻'
          ],
          correctIndex: 2,
          explanation: 'Calcium (Ca²⁺) wird aus dem sarkoplasmatischen Retikulum freigesetzt und bindet an Troponin C, was die Myosinbindungsstellen auf dem Aktin freilegt und die Querbrückenbildung ermöglicht.'
        },
        {
          question: 'Was passiert bei der Gleitfilamenttheorie?',
          options: [
            'Aktin- und Myosinfilamente werden kürzer',
            'Aktin- und Myosinfilamente gleiten ineinander, ohne sich zu verkürzen',
            'Nur die Myosinfilamente kontrahieren',
            'Die Z-Scheiben lösen sich auf',
            'Titin-Filamente ziehen die Sarkomere passiv zusammen'
          ],
          correctIndex: 1,
          explanation: 'Bei der Gleitfilamenttheorie gleiten die Aktin- und Myosinfilamente ineinander (die Überlappung nimmt zu), aber die einzelnen Filamente selbst werden nicht kürzer. Dadurch verkürzt sich das Sarkomer insgesamt.'
        },
        {
          question: 'Warum ist ATP für die Muskelerschlaffung notwendig?',
          options: [
            'ATP aktiviert Troponin',
            'ATP wird für die Ca²⁺-Freisetzung benötigt',
            'ATP löst die Bindung des Myosinkopfes vom Aktin (Querbrücke)',
            'ATP hemmt die Na⁺/K⁺-ATPase',
            'ATP phosphoryliert die Aktinfilamente'
          ],
          correctIndex: 2,
          explanation: 'ATP ist nötig, um die Querbrücke zwischen Myosinkopf und Aktin zu lösen. Ohne ATP bleibt der Myosinkopf fest am Aktin gebunden – dies erklärt die Totenstarre (Rigor mortis) nach dem Tod.'
        }
      ]
    },
    // ==================== 2.14 ====================
    {
      id: 'bio-kap2-14',
      title: 'Sinnesorgane',
      content: `**Auge**: Sehsinn. Drei Schichten: äußere (**Sklera**/Lederhaut, vorne transparent = **Cornea**/Hornhaut), mittlere (**Uvea**: Iris + Ziliarkörper + Choroidea), innere (**Retina**/Netzhaut). Licht tritt durch Cornea ein → vordere Augenkammer (Kammerwasser) → **Linse** (bündelt) → **Glaskörper** → Retina.

**Iris** = Blende, reguliert Pupillendurchmesser (Lichteinfall). **Akkommodation** = Scharfstellung. Nahsicht: **Ziliarmuskel** kontrahiert → **Zonulafasern** entspannen → Linse wird kugeliger (Eigenelastizität) → stärkere Brechkraft. Fernsicht: Ziliarmuskel entspannt → Zonulafasern gespannt → Linse flach.

**Retina** (Netzhaut): enthält **Fotorezeptoren**. **Stäbchen** (ca. 120 Mio.): hochempfindlich, Schwarz-Weiß-Sehen, Dämmerungssehen, enthalten **Rhodopsin**. **Zapfen** (ca. 6 Mio.): Farbsehen bei Tageslicht, drei Typen (S = blau/short, M = grün/medium, L = rot/long). **Fovea centralis** (Macula lutea) = Stelle des schärfsten Sehens, höchste Zapfendichte.

**Ohr**: Hören + Gleichgewicht. Drei Teile: **Außenohr** (Ohrmuschel + äußerer Gehörgang), **Mittelohr** (Paukenhöhle + Gehörknöchelchen: **Hammer/Malleus**, **Amboss/Incus**, **Steigbügel/Stapes**), **Innenohr** (**Cochlea**/Schnecke für Hören, **Vestibularorgan** für Gleichgewicht).

Hörvorgang: Schallwellen → **Trommelfell** vibriert → Gehörknöchelchenkette verstärkt mechanisch (ca. 20-fach, **Impedanzanpassung**) → Steigbügel überträgt auf **ovales Fenster** → Schwingungen in **Perilymphe** der Cochlea. Im **Corti-Organ** (auf **Basilarmembran**): Schwingungen scheren **Stereozilien** der **Haarzellen** gegen **Tektorialmembran** ab → Depolarisation → Nervenimpulse → **N. vestibulocochlearis** (VIII) → Gehirn.

**Tonotopie** der Basilarmembran: Hohe Frequenzen an Schneckenbasis (steif), tiefe Frequenzen an Schneckenspitze (**Helicotrema**, flexibel).

**Hautsinne**: Tastsinn, Temperatursinn, Schmerz, Druck. Spezialisierte Rezeptoren: **Meissner-Körperchen** (Berührung, Fingerkuppen), **Pacini-Körperchen** (Druck + Vibration, tiefe Dermis), **Ruffini-Körperchen** (Dehnung, langsam adaptierend), **Merkel-Zellen** (feiner Druck + Textur), **freie Nervenendigungen** (Schmerz + Temperatur).

**Thermorezeptoren**: Kälterezeptoren (**Krause-Endkolben**) + Wärmerezeptoren (Ruffini-Körperchen). **Nozizeptoren** (Schmerzrezeptoren): freie Nervenendigungen, **polymodal** (reagieren auf mechanische, thermische, chemische Reize). Schmerzweiterleitung: **Aδ-Fasern** (myelinisiert, schnell, scharfer Erstschmerz) + **C-Fasern** (unmyelinisiert, langsam, dumpfer Zweitschmerz).

**Gate-Control-Theorie**: Berührungsafferenzen (Aβ-Fasern) hemmen Schmerzweiterleitung im Rückenmark → erklärt, warum Reiben einer schmerzenden Stelle lindert.`,
      diagram: 'sinnesorgane',
      merksätze: [
        'Auge: Stäbchen (120 Mio., Schwarz-Weiß, Dämmerung) vs. Zapfen (6 Mio., Farbe, Tageslicht). Akkommodation: Ziliarmuskel kontrahiert → Linse kugeliger → Nahsicht.',
        'Ohr: Schall → Trommelfell → Gehörknöchelchen (Hammer–Amboss–Steigbügel) → ovales Fenster → Cochlea → Haarzellen (Corti-Organ) → N. vestibulocochlearis → Gehirn.'
      ],
      altfrage: {
        question: 'Welche Fotorezeptoren sind für das Farbsehen verantwortlich?',
        answer: 'Die Zapfen (Coni) sind für das Farbsehen bei ausreichender Helligkeit verantwortlich. Es gibt drei Typen: S-Zapfen (blau, kurzwellig), M-Zapfen (grün, mittelwellig) und L-Zapfen (rot, langwellig). Die Stäbchen dienen dem Schwarz-Weiß-Sehen und Dämmerungssehen und enthalten den Sehfarbstoff Rhodopsin.'
      },
      klinischerBezug: '**Presbyopie** (Altersweitsichtigkeit): Linse verliert mit Alter ihre Elastizität → Akkommodationsfähigkeit ↓ → Nahsehen erschwert. Typisch ab 45 Jahren. Korrektur: Lesebrille (Sammellinse). **Rot-Grün-Blindheit** (häufigste Farbenblindheit): X-chromosomal rezessiv vererbt → betrifft ca. 8 % der Männer, nur ca. 0,4 % der Frauen. M- oder L-Zapfen fehlen oder defekt → Unterscheidung Rot/Grün schwierig. **Hörsturz**: Plötzlicher, einseitiger **sensorineuraler Hörverlust** (Innenohr/Hörnerv betroffen). Ursache oft unklar (Durchblutungsstörung des Innenohrs?, virale Infektion?). Symptome: plötzlicher Hörverlust (Sekunden bis Stunden), evtl. Tinnitus, Schwindel. Diagnostik: Audiometrie (Tonaudiogramm). Therapie: Glucocorticoide (umstritten), spontane Besserung in 50–70 %. **Lärmschwerhörigkeit**: Chronische Lärmexposition (>85 dB über lange Zeit) → Schädigung der empfindlichen Haarzellen im Corti-Organ → irreversibler Hörverlust. Typisch: zuerst hohe Frequenzen betroffen (4.000 Hz, "c5-Senke" im Audiogramm). Prävention: Gehörschutz.',
      selfTest: [
        {
          question: 'Was passiert bei der Akkommodation für die Nahsicht?',
          options: [
            'Der Ziliarmuskel entspannt sich und die Linse wird flach',
            'Der Ziliarmuskel kontrahiert sich und die Linse wird kugeliger',
            'Die Iris verengt sich und die Pupille wird kleiner',
            'Die Retina verschiebt sich nach vorne',
            'Die Cornea verändert ihre Krümmung aktiv'
          ],
          correctIndex: 1,
          explanation: 'Bei der Nahakkommodation kontrahiert sich der Ziliarmuskel, die Zonulafasern entspannen sich und die Linse nimmt durch ihre Eigenelastizität eine kugelige Form an (stärkere Brechkraft). Bei Fernsicht ist es umgekehrt.'
        },
        {
          question: 'Welches Gehörknöchelchen ist direkt mit dem ovalen Fenster verbunden?',
          options: [
            'Hammer (Malleus)',
            'Amboss (Incus)',
            'Steigbügel (Stapes)',
            'Trommelfell',
            'Rundes Fenster'
          ],
          correctIndex: 2,
          explanation: 'Der Steigbügel (Stapes) ist das kleinste Knöchelchen und direkt mit dem ovalen Fenster verbunden. Die Kette lautet: Trommelfell → Hammer → Amboss → Steigbügel → ovales Fenster → Cochlea.'
        },
        {
          question: 'Wo werden hohe Frequenzen in der Cochlea wahrgenommen?',
          options: [
            'An der Schneckenspitze (Helicotrema)',
            'An der Schneckenbasis (nahe dem ovalen Fenster)',
            'Gleichmäßig über die gesamte Basilarmembran',
            'Im Vestibularorgan',
            'Im mittleren Abschnitt der Basilarmembran'
          ],
          correctIndex: 1,
          explanation: 'Hohe Frequenzen werden an der Schneckenbasis wahrgenommen, wo die Basilarmembran schmal und steif ist. Tiefe Frequenzen werden an der Schneckenspitze (Helicotrema) wahrgenommen, wo die Membran breit und flexibel ist (Tonotopie).'
        }
      ]
    }
  ]
};
