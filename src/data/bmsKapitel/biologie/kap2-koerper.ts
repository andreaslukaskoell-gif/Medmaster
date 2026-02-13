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
      content: `Das menschliche Herz ist ein muskuläres Hohlorgan von etwa faustgroßer Dimension, das im Mediastinum des Brustkorbs leicht links der Mittellinie liegt. Es wiegt beim Erwachsenen zwischen 250 und 350 Gramm und besteht aus vier Kammern: dem rechten Vorhof (Atrium dextrum), der rechten Kammer (Ventriculus dexter), dem linken Vorhof (Atrium sinistrum) und der linken Kammer (Ventriculus sinister). Die Herzwand ist dreischichtig aufgebaut: das Endokard (innere Auskleidung), das Myokard (Herzmuskelschicht) und das Epikard (äußere Schicht). Das Herz wird vom Perikard (Herzbeutel) umgeben, das eine schützende und reibungsmindernde Funktion erfüllt. Die linke Kammer besitzt eine deutlich dickere Muskelwand als die rechte Kammer, da sie das Blut in den großen Körperkreislauf pumpen muss und somit gegen einen höheren Widerstand arbeitet.

Die vier Herzklappen sorgen als Ventile dafür, dass das Blut nur in eine Richtung fließt. Man unterscheidet zwei Segelklappen (Atrioventrikularklappen) und zwei Taschenklappen (Semilunarklappen). Die Merkregel „Tri-Mi-Pu-Ao“ beschreibt die Anordnung im Blutfluss: Die Trikuspidalklappe liegt zwischen rechtem Vorhof und rechter Kammer und besitzt drei Segel. Die Mitralklappe (Bikuspidalklappe) trennt den linken Vorhof von der linken Kammer und besitzt zwei Segel. Die Pulmonalklappe befindet sich am Übergang von der rechten Kammer zum Truncus pulmonalis, und die Aortenklappe am Übergang der linken Kammer in die Aorta. Die Segelklappen werden durch Sehnenfäden (Chordae tendineae) an den Papillarmuskeln fixiert, um ein Zurückschlagen der Klappen zu verhindern. Die Taschenklappen hingegen besitzen keine Sehnenfäden und schließen passiv durch den Rückstrom des Blutes.

Der Blutfluss durch das Herz folgt einem festgelegten Weg: Sauerstoffarmes Blut gelangt über die obere und untere Hohlvene (Vena cava superior und inferior) in den rechten Vorhof, passiert die Trikuspidalklappe und fließt in die rechte Kammer. Von dort wird es durch die Pulmonalklappe in den Lungenkreislauf gepumpt. In der Lunge wird das Blut mit Sauerstoff angereichert und fließt über die vier Lungenvenen zurück in den linken Vorhof. Durch die Mitralklappe gelangt es in die linke Kammer, die es schließlich durch die Aortenklappe in die Aorta und damit in den großen Kreislauf auswirft. Das Herzzeitvolumen (Cardiac Output) beträgt in Ruhe etwa 5 Liter pro Minute und ergibt sich aus dem Schlagvolumen (ca. 70 mL) multipliziert mit der Herzfrequenz (ca. 70/min). Die Koronararterien (Arteria coronaria dextra und sinistra) versorgen das Herz selbst mit Blut und entspringen direkt oberhalb der Aortenklappe aus der Aorta.`,
      diagram: 'heart-anatomy',
      merksaetze: [
        'Tri-Mi-Pu-Ao: Trikuspidalklappe → Mitralklappe → Pulmonalklappe → Aortenklappe – die Reihenfolge der Klappen im Blutfluss von rechts nach links.',
        'Linke Kammer = dickste Wand (pumpt gegen hohen Widerstand in den Körperkreislauf). Herzzeitvolumen = Schlagvolumen × Herzfrequenz ≈ 70 mL × 70/min = ca. 5 L/min.'
      ],
      altfrage: {
        question: 'Welche Herzklappe liegt zwischen dem linken Vorhof und der linken Kammer?',
        answer: 'Die Mitralklappe (Bikuspidalklappe) mit zwei Segeln. Sie verhindert den Rückfluss von Blut aus der linken Kammer in den linken Vorhof während der Systole. Die Trikuspidalklappe mit drei Segeln befindet sich auf der rechten Seite.'
      },
      klinischerBezug: 'Bei einem Myokardinfarkt (Herzinfarkt) verschließt sich eine Koronararterie – meist durch einen Thrombus auf einer atherosklerotischen Plaque. Der betroffene Herzmuskelabschnitt wird nicht mehr mit Sauerstoff versorgt und stirbt ab. Die häufigste Lokalisation betrifft den Ramus interventricularis anterior (RIVA) der linken Koronararterie (Vorderwandinfarkt). Typische Symptome sind retrosternaler Brustschmerz mit Ausstrahlung in den linken Arm, Dyspnoe und Schweißausbruch.',
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
      content: `Das Erregungsleitungssystem des Herzens besteht aus spezialisierten Herzmuskelzellen, die in der Lage sind, elektrische Impulse zu erzeugen und weiterzuleiten. Im Gegensatz zur regulären Skelettmuskulatur kann das Herz eigenständig Erregungen generieren – diese Eigenschaft wird als Autorhythmie oder Autonomie bezeichnet. Der primäre Taktgeber ist der Sinusknoten (Nodus sinuatrialis), der im rechten Vorhof nahe der Einmündung der oberen Hohlvene liegt. Er erzeugt in Ruhe eine Frequenz von etwa 60–80 Impulsen pro Minute (typischerweise 70/min) und wird daher als „natürlicher Schrittmacher“ des Herzens bezeichnet. Der Sinusknoten wird stark durch das vegetative Nervensystem moduliert: Der Sympathikus erhöht die Frequenz (positiv chronotrop), der Parasympathikus (Nervus vagus) senkt sie (negativ chronotrop).

Die Erregung breitet sich vom Sinusknoten über die Vorhofmuskulatur zum Atrioventrikularknoten (AV-Knoten) aus, der an der Grenze zwischen Vorhöfen und Kammern im Vorhofseptum nahe der Trikuspidalklappe liegt. Der AV-Knoten hat eine entscheidende Filterfunktion: Er verzögert die Erregungsleitung um etwa 0,1 Sekunden (AV-Verzögerung), damit die Vorhöfe ihr Blut vollständig in die Kammern entleeren können, bevor die Kammerkontraktion einsetzt. Die Eigenfrequenz des AV-Knotens beträgt nur 40–50/min – er dient als sekundärer Schrittmacher, falls der Sinusknoten ausfällt. Vom AV-Knoten setzt sich die Erregung über das His-Bündel (Fasciculus atrioventricularis) fort, das die einzige elektrische Verbindung zwischen Vorhof- und Kammermuskulatur darstellt und das Herzskelett durchdringt.

Das His-Bündel teilt sich im Kammerseptum in den rechten und linken Tawara-Schenkel auf, die an den Innenwänden der jeweiligen Kammer entlanglaufen. Der linke Tawara-Schenkel teilt sich weiter in einen vorderen und einen hinteren Faszikel. Die Tawara-Schenkel enden in den Purkinje-Fasern, einem weit verzweigten Netzwerk, das die Erregung schnell und gleichmäßig auf die gesamte Kammermuskulatur überträgt. Die Eigenfrequenz der Purkinje-Fasern liegt bei nur 25–40/min (tertiärer Schrittmacher). Die Erregungsleitung erfolgt von endokardial nach epikardial, also von innen nach außen. Diese hierarchische Anordnung der Schrittmacherzentren gewährleistet, dass das Herz auch bei Ausfall höherer Zentren weiter schlagen kann, allerdings mit zunehmend niedrigerer Frequenz.`,
      diagram: 'cardiac-conduction',
      merksaetze: [
        'Hierarchie der Schrittmacher: Sinusknoten (60–80/min) → AV-Knoten (40–50/min) → Purkinje-Fasern (25–40/min). Merke: „SAP“ – Sinus, AV, Purkinje – die Frequenz sinkt stufenweise.',
        'AV-Verzögerung = ca. 0,1 s – damit die Vorhöfe sich vollständig entleeren können, bevor die Kammern kontrahieren.'
      ],
      altfrage: {
        question: 'Was ist die Eigenfrequenz des Sinusknotens?',
        answer: 'Der Sinusknoten hat eine Eigenfrequenz von 60–80/min (typisch 70/min). Er ist der primäre Schrittmacher. Bei Ausfall übernimmt der AV-Knoten mit 40–50/min, und bei dessen Ausfall die Purkinje-Fasern mit 25–40/min.'
      },
      klinischerBezug: 'Bei einem AV-Block III° (totaler AV-Block) ist die Erregungsleitung zwischen Vorhöfen und Kammern vollständig unterbrochen. Die Vorhöfe schlagen in Sinusfrequenz, die Kammern in einer langsamen Eigenfrequenz (tertiärer Schrittmacher, 25–40/min). Dies kann zu Schwindel, Synkopen (Adams-Stokes-Anfälle) und Herzinsuffizienz führen. Die Therapie besteht in der Implantation eines künstlichen Herzschrittmachers.',
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
      content: `Der menschliche Blutkreislauf ist ein geschlossenes System, das aus zwei hintereinandergeschalteten Kreisläufen besteht: dem großen Körperkreislauf (Systemkreislauf) und dem kleinen Lungenkreislauf (Pulmonalkreislauf). Der große Kreislauf beginnt in der linken Herzkammer, die das sauerstoffreiche Blut über die Aorta in den gesamten Körper pumpt. Das Blut durchfließt die Arterien, die sich zu immer kleineren Arteriolen und schließlich zu Kapillaren verzweigen, wo der Stoff- und Gasaustausch mit dem Gewebe stattfindet. Anschließend sammelt sich das nun sauerstoffarme Blut in den Venolen und Venen und gelangt über die obere und untere Hohlvene zurück zum rechten Vorhof. Der kleine Kreislauf führt das sauerstoffarme Blut von der rechten Kammer über die Lungenarterien zur Lunge, wo Kohlendioxid abgegeben und Sauerstoff aufgenommen wird. Das sauerstoffreiche Blut fließt dann über die Lungenvenen zurück zum linken Vorhof.

Arterien und Venen unterscheiden sich grundlegend in ihrem Aufbau und ihrer Funktion. Arterien führen das Blut vom Herzen weg und besitzen eine dicke, elastische und muskuläre Wand mit drei Schichten: Tunica intima (Endothel), Tunica media (glatte Muskulatur und elastische Fasern) und Tunica adventitia (Bindegewebe). Herznahe Arterien (z. B. Aorta) sind vom elastischen Typ und dienen als Windkessel – sie dehnen sich während der Systole und geben die gespeicherte Energie während der Diastole ab, wodurch ein kontinuierlicher Blutfluss gewährleistet wird. Herzferne Arterien sind vom muskulären Typ und regulieren durch Vasokonstriktion und Vasodilatation den peripheren Widerstand und damit die Blutdruckverteilung. Venen führen das Blut zum Herzen zurück, haben dünnere Wände und besitzen Venenklappen, die als Rückschlagventile den Rückfluss verhindern. Der venöse Rücktransport wird durch die Muskelpumpe, die Atempumpe und den Venenpuls unterstützt.

Die Kapillaren sind die dünnsten Gefäße des Kreislaufsystems mit einem Durchmesser von nur 5–10 µm und einer Wand aus einer einzigen Endothelzellschicht. Hier findet der eigentliche Stoff- und Gasaustausch statt – Sauerstoff und Nährstoffe diffundieren ins Gewebe, während Kohlendioxid und Stoffwechselprodukte aufgenommen werden. Der Blutdruck wird als systolischer und diastolischer Wert angegeben: Der Normalwert liegt bei 120/80 mmHg. Der systolische Wert entspricht dem Druck während der Kammerkontraktion, der diastolische Wert dem Druck während der Erschlaffungsphase. Der mittlere arterielle Druck (MAD) berechnet sich näherungsweise als: MAD ≈ diastolischer Druck + ⅓ × (systolischer Druck − diastolischer Druck). Ein wichtiges Konzept ist der totale periphere Widerstand (TPR), der maßgeblich in den Arteriolen reguliert wird und zusammen mit dem Herzzeitvolumen den Blutdruck bestimmt: Blutdruck = HZV × TPR.`,
      diagram: 'blutkreislauf',
      merksaetze: [
        'Merke: Arterien = vom Herzen weg (A wie „ab“), Venen = zum Herzen hin. Ausnahme: Lungenvenen führen sauerstoffreiches Blut, Lungenarterien führen sauerstoffarmes Blut!',
        'Blutdruck = Herzzeitvolumen × totaler peripherer Widerstand. Normwert: 120/80 mmHg. Der Windkesseleffekt der Aorta glättet die pulsatile Strömung.'
      ],
      altfrage: {
        question: 'Welches Gefäß führt sauerstoffreiches Blut von der Lunge zum Herzen?',
        answer: 'Die Lungenvenen (Venae pulmonales) führen sauerstoffreiches Blut von der Lunge zum linken Vorhof. Dies ist die wichtigste Ausnahme: Venen führen normalerweise sauerstoffarmes Blut, aber die Lungenvenen transportieren oxygeniertes Blut.'
      },
      klinischerBezug: 'Arterielle Hypertonie (Bluthochdruck, ≥140/90 mmHg) ist einer der wichtigsten Risikofaktoren für Herzinfarkt, Schlaganfall, Niereninsuffizienz und periphere arterielle Verschlusskrankheit. Bei Krampfadern (Varizen) sind die Venenklappen insuffizient, sodass es zu einem Rückstau des Blutes in den oberflächlichen Beinvenen kommt. Dies kann zu Ödemen, Hautveränderungen und im schlimmsten Fall zu einem offenen Bein (Ulcus cruris venosum) führen.',
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
      content: `Blut ist ein flüssiges Gewebe, das etwa 7–8 % des Körpergewichts ausmacht – bei einem Erwachsenen entspricht das einem Blutvolumen von 4–6 Litern. Durch Zentrifugation lässt sich Blut in seine Bestandteile trennen: Etwa 55 % entfallen auf das Blutplasma (flüssiger Anteil) und etwa 45 % auf die zellulären Bestandteile (Hämatokrit). Das Blutplasma besteht zu etwa 90 % aus Wasser und enthält gelöste Proteine (Albumin, Globuline, Fibrinogen), Elektrolyte (Na⁺, K⁺, Ca²⁺, Cl⁻), Nährstoffe, Hormone, Stoffwechselprodukte und gelöste Gase. Albumin ist das häufigste Plasmaprotein und spielt eine zentrale Rolle bei der Aufrechterhaltung des kolloidosmotischen Drucks (onkotischer Druck), der verhindert, dass zu viel Flüssigkeit aus den Kapillaren ins Gewebe austritt. Fibrinogen ist der Vorläufer des Fibrins und essentiell für die Blutgerinnung. Blutplasma ohne Gerinnungsfaktoren wird als Serum bezeichnet.

Die Erythrozyten (rote Blutkörperchen) machen den Großteil der zellulären Bestandteile aus – ein Mikroliter Blut enthält etwa 4,5–5,5 Millionen Erythrozyten. Sie sind bikonkave Scheiben ohne Zellkern und ohne Mitochondrien, was ihre Oberfläche maximiert und den Gasaustausch optimiert. Ihre Hauptaufgabe ist der Sauerstofftransport mittels Hämoglobin (Hb), einem eisenhaltigen Protein, das pro Molekül vier Sauerstoffmoleküle binden kann. Die Lebensdauer der Erythrozyten beträgt etwa 120 Tage, danach werden sie vor allem in der Milz abgebaut (Hämolyse). Der Hämoglobinabbau liefert Bilirubin, das in der Leber konjugiert und über die Galle ausgeschieden wird. Die Bildung neuer Erythrozyten (Erythropoese) findet im roten Knochenmark statt und wird durch das Hormon Erythropoetin (EPO) aus der Niere stimuliert, insbesondere bei Sauerstoffmangel (Hypoxie).

Die Leukozyten (weiße Blutkörperchen, 4.000–10.000/µL) sind die Zellen des Immunsystems und lassen sich in Granulozyten (neutrophile, eosinophile, basophile), Monozyten und Lymphozyten unterteilen. Neutrophile Granulozyten (60–70 %) sind die häufigsten Leukozyten und die „erste Verteidigungslinie“ gegen bakterielle Infektionen durch Phagozytose. Eosinophile (2–4 %) sind besonders bei Parasitenabwehr und allergischen Reaktionen aktiv, basophile Granulozyten (<1 %) setzen Histamin und Heparin frei. Monozyten differenzieren im Gewebe zu Makrophagen und dendritischen Zellen. Lymphozyten umfassen T-Zellen (zelluläre Immunantwort), B-Zellen (Antikörperproduktion) und NK-Zellen (natürliche Killerzellen). Die Thrombozyten (Blutplättchen, 150.000–400.000/µL) sind kernlose Zellfragmente aus Megakaryozyten und spielen eine zentrale Rolle bei der Blutstillung (Hämostase). Sie lagern sich an verletzte Gefäßwände an (Adhäsion), aktivieren sich gegenseitig (Aggregation) und bilden zusammen mit dem Gerinnungssystem einen stabilen Thrombus.`,
      diagram: 'blutbestandteile',
      merksaetze: [
        'Erythrozyten: 120 Tage Lebensdauer, bikonkav, kernlos, Hämoglobin bindet 4× O₂, Abbau in der Milz, Bildung im Knochenmark durch EPO.',
        'Leukozyten-Reihenfolge nach Häufigkeit: „Never Let Monkeys Eat Bananas“ – Neutrophile (60–70 %) > Lymphozyten (20–30 %) > Monozyten (3–8 %) > Eosinophile (2–4 %) > Basophile (<1 %).'
      ],
      altfrage: {
        question: 'Wie lange beträgt die durchschnittliche Lebensdauer eines Erythrozyten?',
        answer: 'Erythrozyten haben eine durchschnittliche Lebensdauer von etwa 120 Tagen. Der Abbau erfolgt hauptsächlich in der Milz. Das dabei anfallende Hämoglobin wird zu Bilirubin abgebaut, das in der Leber konjugiert und über die Galle ausgeschieden wird.'
      },
      klinischerBezug: 'Bei Anämie (Blutarmut) ist die Sauerstofftransportkapazität des Blutes vermindert, entweder durch zu wenige Erythrozyten oder zu wenig Hämoglobin. Häufige Ursachen sind Eisenmangel (mikrozytäre Anämie), Vitamin-B₁₂- oder Folsäuremangel (megaloblastäre Anämie), chronische Blutungen oder hämolytische Erkrankungen. Bei einer Thrombozytopenie (< 150.000/µL) ist die Blutgerinnung beeinträchtigt, es kommt zu Petechien (punktförmige Hautblutungen) und erhöhter Blutungsneigung.',
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
          question: 'Welches Hormon stimuliert die Erythropoese?',
          options: [
            'Insulin',
            'Erythropoetin (EPO)',
            'Thrombopoietin',
            'Aldosteron',
            'Cortisol'
          ],
          correctIndex: 1,
          explanation: 'Erythropoetin (EPO) wird hauptsächlich in der Niere produziert und stimuliert die Erythropoese im Knochenmark, insbesondere bei Sauerstoffmangel (Hypoxie).'
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
      content: `Das ABO-Blutgruppensystem ist das klinisch wichtigste Blutgruppensystem und wurde 1901 von Karl Landsteiner entdeckt. Es basiert auf der Anwesenheit bestimmter Antigene (Glykoproteine) auf der Oberfläche der Erythrozyten und den korrespondierenden Antikörpern im Blutplasma. Es gibt vier Hauptblutgruppen: A, B, AB und 0. Menschen mit Blutgruppe A haben das Antigen A auf ihren Erythrozyten und Anti-B-Antikörper im Plasma. Blutgruppe B bedeutet Antigen B und Anti-A-Antikörper. Blutgruppe AB besitzt beide Antigene, aber keine Antikörper (Universalempfänger für Erythrozytenkonzentrate). Blutgruppe 0 hat keine Antigene, aber beide Antikörper (Anti-A und Anti-B) – diese Personen gelten als Universalspender für Erythrozytenkonzentrate. Die Vererbung folgt einem kodominanten Muster: Die Allele I^A und I^B sind kodominant zueinander und beide dominant über i (Blutgruppe 0).

Das Rhesus-System ist das zweitwichtigste Blutgruppensystem. Das klinisch relevanteste Antigen ist das D-Antigen (Rhesusfaktor D). Menschen, die das D-Antigen auf ihren Erythrozyten tragen, sind Rhesus-positiv (Rh+, ca. 85 % der Bevölkerung); fehlt es, sind sie Rhesus-negativ (Rh−). Im Gegensatz zum ABO-System besitzen Rh-negative Personen keine natürlichen Anti-D-Antikörper – diese bilden sich erst nach Kontakt mit Rh-positivem Blut (Sensibilisierung). Dies ist besonders relevant in der Schwangerschaft: Wenn eine Rh-negative Mutter ein Rh-positives Kind trägt, kann es bei der Geburt zur Sensibilisierung kommen. Bei einer erneuten Schwangerschaft mit einem Rh-positiven Kind können die mütterlichen Anti-D-Antikörper die Plazenta passieren und die fetalen Erythrozyten angreifen (Morbus haemolyticus neonatorum). Zur Prophylaxe wird Rh-negativen Müttern Anti-D-Immunglobulin verabreicht.

Vor jeder Bluttransfusion müssen die Blutgruppe des Empfängers und des Spenders bestimmt und eine Kreuzprobe (Verträglichkeitsprobe) durchgeführt werden. Bei der Kreuzprobe wird das Empfängerserum (enthält Antikörper) mit den Spendererythrozyten (enthalten Antigene) gemischt (Major-Kreuzprobe) und umgekehrt (Minor-Kreuzprobe). Tritt eine Agglutination (Verklumpung) auf, ist die Transfusion inkompatibel. Bei einer Fehltransfusion können die Antikörper des Empfängers die Spendererythrozyten angreifen und eine hämolytische Transfusionsreaktion auslösen – eine lebensbedrohliche Komplikation mit massiver Hämolyse, Nierenversagen und disseminierter intravasaler Gerinnung (DIC). Neben ABO und Rhesus gibt es weitere Blutgruppensysteme wie Kell, Duffy und Kidd, die klinisch ebenfalls relevant sein können.`,
      diagram: 'blood-groups',
      merksaetze: [
        'ABO-Regel: Jede Blutgruppe hat Antikörper gegen die Antigene, die sie NICHT besitzt. AB = kein Antikörper (Universalempfänger), 0 = kein Antigen (Universalspender für Erythrozytenkonzentrate).',
        'Rhesus: Rh− hat KEINE natürlichen Antikörper – Sensibilisierung erst nach Kontakt. Klinisch wichtig: Rh-negative Mutter + Rh-positives Kind → Anti-D-Prophylaxe!'
      ],
      altfrage: {
        question: 'Welche Blutgruppe wird als Universalspender bezeichnet und warum?',
        answer: 'Blutgruppe 0 Rh-negativ gilt als Universalspender für Erythrozytenkonzentrate, da die Erythrozyten weder A- noch B-Antigene noch das D-Antigen tragen und daher von keinem der gängigen Antikörper angegriffen werden. Es ist jedoch wichtig zu beachten, dass das Plasma von Blutgruppe 0 Anti-A- und Anti-B-Antikörper enthält.'
      },
      klinischerBezug: 'Eine AB0-inkompatible Transfusion ist ein medizinischer Notfall. Innerhalb weniger Minuten können Fieber, Schüttelfrost, Flankenschmerzen, Hämoglobinurie (dunkler Urin), Schock und akutes Nierenversagen auftreten. Die häufigste Ursache ist eine Verwechslung am Patientenbett (Bedside-Test-Fehler). Der Bedside-Test – eine letzte Kontrolle direkt am Patientenbett vor der Transfusion – ist daher gesetzlich vorgeschrieben und darf nicht delegiert werden.',
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
          explanation: 'Wenn eine Rh-negative Mutter nach der ersten Schwangerschaft mit einem Rh-positiven Kind sensibilisiert wird, können Anti-D-Antikörper in einer Folgeschwangerschaft die fetalen Erythrozyten angreifen (Morbus haemolyticus neonatorum).'
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
      content: `Das Atmungssystem dient dem Gasaustausch: der Aufnahme von Sauerstoff (O₂) aus der Atemluft und der Abgabe von Kohlendioxid (CO₂) als Stoffwechselendprodukt. Die Atemluft gelangt über die oberen Atemwege (Nase, Nasennebenhöhlen, Pharynx, Larynx) in die unteren Atemwege. In der Nasenhöhle wird die Luft angewärmt, befeuchtet und durch Nasenhaare und die Schleimhaut (mukoziliäre Clearance) von Partikeln gereinigt. Der Kehlkopf (Larynx) enthält die Stimmlippen (Stimmbänder) und die Epiglottis, die beim Schlucken den Eingang zur Trachea verschließt und so eine Aspiration von Nahrung verhindert. Die Trachea (Luftröhre) ist durch hufeisenförmige Knorpelspangen offen gehalten und teilt sich auf Höhe des 4.–5. Brustwirbels in den rechten und linken Hauptbronchus (Bifurcatio tracheae). Der rechte Hauptbronchus ist kürzer, weiter und steiler als der linke, weshalb aspirierte Fremdkörper häufiger in den rechten Bronchus gelangen.

Die Bronchien verzweigen sich weiter in Lappen-, Segment- und Subsegmentbronchien und schließlich in die Bronchiolen. Ab den Bronchiolen fehlt der Knorpel in der Wand, und die glatte Muskulatur gewinnt an Bedeutung für die Regulation des Luftstroms. Die terminalen Bronchiolen gehen in die respiratorischen Bronchiolen über, die schließlich in die Alveolargänge (Ductus alveolares) und die Alveolen (Lungenbläschen) münden. Die Lunge enthält etwa 300 Millionen Alveolen mit einer Gesamtoberfläche von ca. 80–120 m² – eine enorme Fläche für den Gasaustausch. Die Alveolarwand besteht aus Typ-I-Pneumozyten (flache Zellen, 95 % der Oberfläche, für den Gasaustausch) und Typ-II-Pneumozyten (produzieren Surfactant). Das Surfactant ist ein Gemisch aus Phospholipiden und Proteinen, das die Oberflächenspannung in den Alveolen herabsetzt und so deren Kollabieren (Atelektase) verhindert.

Der Gasaustausch in den Alveolen erfolgt durch Diffusion entlang von Partialdruckgradienten über die alveolokapilläre Membran (Blut-Luft-Schranke), die nur etwa 0,2–0,5 µm dünn ist. Sauerstoff diffundiert aus der Alveolarluft (pO₂ ≈ 100 mmHg) ins Blut (pO₂ ≈ 40 mmHg), während CO₂ in umgekehrter Richtung diffundiert. Die Atemvolumina werden mit der Spirometrie gemessen: Das Atemzugvolumen (Tidalvolumen) beträgt in Ruhe ca. 500 mL, das inspiratorische Reservevolumen ca. 3.000 mL, das exspiratorische Reservevolumen ca. 1.100 mL und das Residualvolumen ca. 1.200 mL. Die Vitalkapazität (maximales Volumen, das nach maximaler Einatmung ausgeatmet werden kann) ergibt sich aus Atemzugvolumen + inspiratorisches + exspiratorisches Reservevolumen ≈ 4.600 mL. Die Totalkapazität umfasst zusätzlich das Residualvolumen. Die Atemfrequenz eines Erwachsenen liegt in Ruhe bei 12–20 Atemzügen pro Minute, das Atemminutenvolumen (Atemzugvolumen × Atemfrequenz) bei etwa 6–8 L/min.`,
      diagram: 'atmungssystem',
      merksaetze: [
        'Rechter Hauptbronchus: kürzer, weiter, steiler → Fremdkörper gelangen häufiger nach rechts. 300 Mio. Alveolen ≈ 100 m² Gasaustauschfläche.',
        'Surfactant (Typ-II-Pneumozyten) senkt die Oberflächenspannung → verhindert Alveolarkollaps. Atemzugvolumen = 500 mL, Vitalkapazität ≈ 4.600 mL.'
      ],
      altfrage: {
        question: 'Welche Funktion hat das Surfactant in den Alveolen?',
        answer: 'Surfactant wird von Typ-II-Pneumozyten produziert und setzt die Oberflächenspannung in den Alveolen herab. Dadurch wird verhindert, dass die Alveolen bei der Ausatmung kollabieren (Atelektase). Bei Frühgeborenen kann ein Surfactant-Mangel zum Atemnotsyndrom des Neugeborenen (IRDS) führen.'
      },
      klinischerBezug: 'Bei Asthma bronchiale kommt es zu einer chronischen Entzündung der Atemwege mit reversibler Bronchokonstriktion, Schleimhautödem und Hypersekretion von Schleim. Die Folge ist eine Obstruktion der Atemwege mit erschwerter Ausatmung, Giemen und Dyspnoe. Das Atemnotsyndrom des Neugeborenen (IRDS) bei Frühgeborenen entsteht durch Surfactant-Mangel, da die Typ-II-Pneumozyten erst ab der 35. Schwangerschaftswoche ausreichend Surfactant produzieren.',
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
      content: `Das Verdauungssystem (Gastrointestinaltrakt) hat die Aufgabe, Nahrung mechanisch zu zerkleinern, chemisch aufzuspalten und die entstandenen Nährstoffe zu resorbieren. Die Verdauung beginnt bereits in der Mundhöhle: Die Zähne zerkleinern die Nahrung mechanisch, während die Speicheldrüsen (Glandula parotis, submandibularis, sublingualis) täglich 1–1,5 Liter Speichel produzieren. Der Speichel enthält das Enzym Amylase (Ptyalin), das Stärke zu Maltose und Dextrinen spaltet – die Kohlenhydratverdauung beginnt also bereits im Mund. Der Speichel enthält außerdem Lysozym (antibakteriell), Muzine (Gleitfähigkeit) und Bicarbonat (Pufferung). Der geformte Nahrungsbrei (Bolus) wird durch den Schluckakt über den Pharynx und Ösophagus (Speiseröhre) mittels peristaltischer Wellen in den Magen transportiert. Der untere Ösophagussphinkter verhindert normalerweise den Rückfluss von Magensäure.

Der Magen hat ein Fassungsvermögen von 1,5–2 Litern und dient als Reservoir, Durchmischer und Proteinverdauer. Die Magenschleimhaut enthält verschiedene Zelltypen: Die Belegzellen (Parietalzellen) produzieren Salzsäure (HCl, pH 1–2) und den Intrinsic Factor (für die Vitamin-B₁₂-Resorption im Ileum). Die Hauptzellen sezernieren Pepsinogen, das durch die Salzsäure zu Pepsin aktiviert wird – einer Protease, die Proteine zu Polypeptiden spaltet. Die Nebenzellen bilden Schleim und Bicarbonat zum Schutz der Magenschleimhaut vor der Selbstverdauung. Der Nahrungsbrei (Chymus) wird portionsweise durch den Pylorus (Magenpförtner) in das Duodenum (Zwölffingerdarm) abgegeben. Im Duodenum münden der Ductus pancreaticus (Pankreassaft) und der Ductus choledochus (Gallenflüssigkeit) gemeinsam an der Papilla Vateri.

Der Dünndarm (Duodenum, Jejunum, Ileum) ist mit 3–5 Metern Länge der Hauptort der Verdauung und Resorption. Seine Oberfläche wird durch Kerckring-Falten, Zotten (Villi) und Mikrovilli um das 600-Fache vergrößert (ca. 200 m²). Im Dünndarm wirken die Pankreasenzyme: Trypsin und Chymotrypsin (Proteinverdauung), Pankreaslipase (Fettverdauung) und Pankreasamylase (Stärkeverdauung). Die Gallensäuren der Leber emulgieren die Fette und bilden Mizellen, die die Fettresorption ermöglichen. Die Leber ist das zentrale Stoffwechselorgan: Sie synthetisiert Plasmaproteine, speichert Glykogen, bildet Harnstoff (Ammoniakentgiftung), produziert Galle und metabolisiert Medikamente (First-Pass-Effekt). Das Pankreas hat neben der exokrinen Funktion (Verdauungsenzyme) auch eine endokrine Funktion: Die Langerhans-Inseln produzieren Insulin (B-Zellen) und Glukagon (A-Zellen). Der Dickdarm (Colon) resorbiert Wasser und Elektrolyte, beherbergt die Darmflora (Mikrobiom) und formt den Stuhl. Im Rektum wird der Stuhl gespeichert und über den Analkanal ausgeschieden.`,
      diagram: 'verdauungssystem',
      merksaetze: [
        'Enzymzuordnung: Mund = Amylase (Stärke), Magen = Pepsin (Proteine), Dünndarm = Trypsin/Chymotrypsin (Proteine) + Lipase (Fette) + Amylase (Stärke). Die Kohlenhydratverdauung beginnt im Mund!',
        'Belegzellen = HCl + Intrinsic Factor. Hauptzellen = Pepsinogen. Nebenzellen = Schleim. Merke: „BHN – Belegzellen Hauptzellen Nebenzellen – Säure Enzyme Schutz“.'
      ],
      altfrage: {
        question: 'Wo beginnt die Verdauung von Kohlenhydraten?',
        answer: 'Die Kohlenhydratverdauung beginnt bereits in der Mundhöhle durch die Speichelamylase (Ptyalin), die Stärke zu Maltose und Dextrinen spaltet. Im Magen wird die Amylase durch die Salzsäure inaktiviert. Im Dünndarm wird die Stärkeverdauung durch die Pankreasamylase fortgesetzt.'
      },
      klinischerBezug: 'Gastroösophagealer Reflux (GERD) entsteht durch eine Insuffizienz des unteren Ösophagussphinkters, wodurch Magensäure in die Speiseröhre zurückfließt und Sodbrennen verursacht. Bei Ulcus ventriculi oder duodeni (Magen-/Zwölffingerdarmgeschwür) ist die Schleimhautbarriere gestört – häufige Ursachen sind Helicobacter-pylori-Infektion und NSAR-Einnahme. Ein Mangel an Intrinsic Factor (z. B. bei Autoimmungastritis) führt zur perniziösen Anämie durch Vitamin-B₁₂-Malabsorption.',
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
            'Durch Haustra und Taenien',
            'Durch Kerckring-Falten, Zotten und Mikrovilli',
            'Durch Krypten und Becherzellen',
            'Durch Peyer-Plaques und Lymphfollikel',
            'Durch Taenien und Appendices epiploicae'
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
      content: `Das Nervensystem ist das zentrale Steuerungs- und Kommunikationssystem des Körpers. Es wird anatomisch in das Zentralnervensystem (ZNS) und das periphere Nervensystem (PNS) unterteilt. Das ZNS besteht aus Gehirn (Encephalon) und Rückenmark (Medulla spinalis) und ist von Knochen (Schädel und Wirbelsäule), Hirnhäuten (Meningen: Dura mater, Arachnoidea, Pia mater) und Liquor cerebrospinalis (ca. 150 mL) umgeben und geschützt. Das Gehirn umfasst das Großhirn (Cerebrum, höhere kognitive Funktionen), das Zwischenhirn (Diencephalon mit Thalamus und Hypothalamus), das Kleinhirn (Cerebellum, Koordination und Gleichgewicht), das Mittelhirn (Mesencephalon) und den Hirnstamm (Pons und Medulla oblongata, lebenswichtige Funktionen wie Atmung und Kreislaufregulation). Das PNS umfasst alle Nerven außerhalb des ZNS: 12 Hirnnervenpaare und 31 Spinalnervenpaare, die Informationen zwischen ZNS und Peripherie übertragen.

Funktionell unterscheidet man das somatische und das vegetative (autonome) Nervensystem. Das somatische Nervensystem steuert die willkürliche Motorik der Skelettmuskulatur und leitet bewusste Sinneswahrnehmungen (Sensorik) weiter. Es ist für die bewusste Interaktion mit der Umwelt zuständig. Das vegetative Nervensystem (VNS) hingegen reguliert unbewusst die Funktion der inneren Organe, der glatten Muskulatur, des Herzmuskels und der Drüsen. Es arbeitet weitgehend autonom und wird in drei Anteile unterteilt: Sympathikus, Parasympathikus und das enterische Nervensystem (Darmnervensystem mit ca. 100 Millionen Neuronen, auch „Bauchhirn“ genannt). Der Sympathikus und Parasympathikus wirken in den meisten Organen als Gegenspieler (Antagonisten), wobei der Sympathikus eher „fight or flight“ (Stressreaktion) und der Parasympathikus „rest and digest“ (Ruhe und Verdauung) vermittelt.

Der Sympathikus hat seinen Ursprung im thorakolumbalen Rückenmark (Th1–L2) und verwendet als Neurotransmitter präganglionär Acetylcholin und postganglionär Noradrenalin (Ausnahme: Schweißdrüsen → Acetylcholin). Seine Wirkungen umfassen: Pupillenerweiterung (Mydriasis), Bronchodilatation, Herzfrequenzsteigerung (positiv chronotrop), Blutdruckerhöhung, Hemmung der Magen-Darm-Motilität und Glykogenolyse in der Leber. Der Parasympathikus hat seinen Ursprung im Hirnstamm (Hirnnerven III, VII, IX, X – besonders der Nervus vagus) und im sakralen Rückenmark (S2–S4). Er verwendet sowohl prä- als auch postganglionär Acetylcholin. Seine Wirkungen sind: Pupillenverengung (Miosis), Bronchokonstriktion, Herzfrequenzsenkung (negativ chronotrop), Förderung der Magen-Darm-Motilität und Sekretion, Anregung der Blasenentleerung. Das enterische Nervensystem kann weitgehend unabhängig vom ZNS die Darmmotilität und Sekretion steuern.`,
      diagram: 'nervensystem-uebersicht',
      merksaetze: [
        'Sympathikus = „fight or flight“: Herz schneller, Bronchien weit, Pupillen weit, Verdauung gehemmt. Parasympathikus = „rest and digest“: Herz langsamer, Bronchien eng, Pupillen eng, Verdauung aktiv.',
        'Sympathikus: thorakolumbal (Th1–L2), postganglionär Noradrenalin. Parasympathikus: kraniosakral (Hirnstamm + S2–S4), immer Acetylcholin.'
      ],
      altfrage: {
        question: 'Welcher Neurotransmitter wird postganglionär im Sympathikus verwendet?',
        answer: 'Postganglionär verwendet der Sympathikus Noradrenalin (Ausnahme: Schweißdrüsen verwenden Acetylcholin). Präganglionär verwenden sowohl Sympathikus als auch Parasympathikus Acetylcholin. Der Parasympathikus nutzt auch postganglionär Acetylcholin.'
      },
      klinischerBezug: 'Beim Phäochromozytom, einem katecholaminproduzierenden Tumor des Nebennierenmarks, kommt es zu einer Überaktivierung des Sympathikus mit anfallsartigem Bluthochdruck, Tachykardie, Schwitzen und Kopfschmerzen. Anticholinergika (z. B. Atropin) blockieren die Wirkung des Parasympathikus und werden z. B. in der Augenheilkunde zur Pupillenerweiterung oder als Notfallmedikament bei einer Bradykardie eingesetzt.',
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
      content: `Das Neuron (Nervenzelle) ist die funktionelle Grundeinheit des Nervensystems. Es besteht aus dem Zellkörper (Soma oder Perikaryon), den Dendriten und dem Axon. Das Soma enthält den Zellkern und die meisten Organellen; es ist das metabolische Zentrum der Nervenzelle. Die Dendriten sind kurze, baumartig verzweigte Fortsätze, die Signale von anderen Neuronen oder Sinnesrezeptoren empfangen. Das Axon ist ein langer Fortsatz (von wenigen Millimetern bis über einen Meter), der elektrische Impulse vom Soma zum Axonende (Synapse) weiterleitet. Am Axonhügel (Ursprung des Axons) werden die eingehenden Signale integriert und ein Aktionspotential ausgelöst, wenn der Schwellenwert erreicht wird. Viele Axone sind von einer Myelinscheide umhüllt, die von Schwann-Zellen (im PNS) oder Oligodendrozyten (im ZNS) gebildet wird. Zwischen den Myelinsegmenten liegen die Ranvier-Schnürringe, an denen die saltatorische (springende) Erregungsleitung stattfindet, die eine deutlich schnellere Signalweiterleitung ermöglicht (bis zu 120 m/s bei dicken myelinisierten Fasern gegenüber 0,5–2 m/s bei unmyelinisierten Fasern).

Im Ruhezustand hat ein Neuron ein Ruhemembranpotential von etwa −70 mV (Innenseite negativ gegenüber der Außenseite). Dieses Potential wird hauptsächlich durch die unterschiedliche Verteilung von Ionen aufgebaut und aufrechterhalten: Die Kaliumkonzentration ist intrazellulär hoch (ca. 140 mmol/L) und extrazellulär niedrig (ca. 4 mmol/L), während es bei Natrium umgekehrt ist (extrazellulär ca. 145 mmol/L, intrazellulär ca. 12 mmol/L). Die Na⁺/K⁺-ATPase pumpt aktiv 3 Na⁺-Ionen nach außen und 2 K⁺-Ionen nach innen (elektrogen, da netto eine positive Ladung nach außen transportiert wird). In Ruhe ist die Membran vor allem für K⁺ durchlässig (Kalium-Leckkanäle), sodass K⁺ entlang seines Konzentrationsgefälles nach außen strömt und die Innenseite negativ wird. Das Ruhepotential liegt nahe dem Kalium-Gleichgewichtspotential (Nernst-Gleichung: ca. −90 mV), wird aber durch die geringe Natriumleitfähigkeit etwas weniger negativ (−70 mV).

Ein Aktionspotential wird ausgelöst, wenn das Membranpotential den Schwellenwert von ca. −55 mV erreicht. Es folgt dem Alles-oder-Nichts-Prinzip: Entweder wird die Schwelle erreicht und ein vollständiges Aktionspotential ausgelöst, oder es passiert nichts. In der Depolarisationsphase öffnen sich spannungsgesteuerte Natriumkanäle schnell, Na⁺ strömt in die Zelle und das Potential steigt auf etwa +30 mV (Overshoot). Die Natriumkanäle inaktivieren sich nach ca. 1 ms automatisch. In der Repolarisationsphase öffnen sich verzögert spannungsgesteuerte Kaliumkanäle, K⁺ strömt aus der Zelle und das Potential kehrt zum Ruhewert zurück. Es folgt oft eine kurze Hyperpolarisation (Nachpotential, ca. −80 mV), da die Kaliumkanäle verzögert schließen. Während der absoluten Refraktärzeit (während des Aktionspotentials) ist kein neues Aktionspotential auslösbar, während der relativen Refraktärzeit ist ein stärkerer Reiz nötig. Dies garantiert die unidirektionale Weiterleitung des Signals entlang des Axons.`,
      diagram: 'action-potential',
      merksaetze: [
        'Ruhepotential = −70 mV (K⁺-Ausstrom dominiert). Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein. Schwellenwert ≈ −55 mV → Alles-oder-Nichts-Prinzip.',
        'Aktionspotential-Phasen: Depolarisation (Na⁺ rein, +30 mV) → Repolarisation (K⁺ raus) → Hyperpolarisation (−80 mV) → Ruhepotential (−70 mV).'
      ],
      altfrage: {
        question: 'Welcher Ionenstrom ist für die Depolarisation beim Aktionspotential verantwortlich?',
        answer: 'Der Natriumeinstrom (Na⁺) durch spannungsgesteuerte Natriumkanäle ist für die Depolarisation verantwortlich. Na⁺ strömt entlang seines elektrochemischen Gradienten in die Zelle und verschiebt das Membranpotential von −70 mV auf ca. +30 mV (Overshoot).'
      },
      klinischerBezug: 'Lokalanästhetika (z. B. Lidocain) blockieren die spannungsgesteuerten Natriumkanäle und verhindern so die Depolarisation und Weiterleitung von Aktionspotentialen in Schmerzfasern. Multiple Sklerose (MS) ist eine Autoimmunerkrankung, bei der die Myelinscheiden im ZNS entzündlich zerstört werden (Demyelinisierung). Dadurch wird die saltatorische Erregungsleitung gestört, was zu neurologischen Ausfällen wie Sehstörungen, Lähmungen und Sensibilitätsstörungen führt.',
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
      content: `Die Synapse ist die Kontaktstelle zwischen zwei Neuronen oder zwischen einem Neuron und einer Effektorzelle (z. B. Muskelzelle). Man unterscheidet chemische und elektrische Synapsen. Chemische Synapsen sind der häufigste Typ im menschlichen Nervensystem und übertragen Signale über Neurotransmitter. Sie bestehen aus dem präsynaptischen Endknöpfchen (Bouton), dem synaptischen Spalt (ca. 20–40 nm breit) und der postsynaptischen Membran. Im präsynaptischen Terminal befinden sich synaptische Vesikel, die mit Neurotransmittern gefüllt sind. Elektrische Synapsen (Gap Junctions) ermöglichen dagegen eine direkte elektrische Kopplung zwischen zwei Zellen über Connexone und sind besonders schnell, erlauben aber keine Signalmodulation. Sie kommen z. B. in der Herzmuskulatur und in der glatten Muskulatur vor.

Die synaptische Übertragung an chemischen Synapsen läuft in mehreren Schritten ab: (1) Ein Aktionspotential erreicht das präsynaptische Endknöpfchen. (2) Spannungsgesteuerte Calciumkanäle (Ca²⁺) öffnen sich und Ca²⁺ strömt in das Terminal. (3) Der Calciumeinstrom bewirkt die Fusion der synaptischen Vesikel mit der präsynaptischen Membran (Exozytose) und die Freisetzung der Neurotransmitter in den synaptischen Spalt. (4) Die Neurotransmitter diffundieren über den synaptischen Spalt und binden an spezifische Rezeptoren auf der postsynaptischen Membran. (5) Diese Bindung öffnet Ionenkanäle oder aktiviert Second-Messenger-Kaskaden und erzeugt ein postsynaptisches Potential. (6) Die Wirkung wird beendet durch enzymatischen Abbau (z. B. Acetylcholinesterase), Wiederaufnahme (Reuptake) in das präsynaptische Terminal oder Diffusion aus dem synaptischen Spalt. Calcium spielt also die entscheidende Schlüsselrolle bei der Neurotransmitterfreisetzung.

Man unterscheidet erregende (exzitatorische) und hemmende (inhibitorische) Synapsen. Erregende Synapsen erzeugen ein EPSP (exzitatorisches postsynaptisches Potential), das die postsynaptische Membran depolarisiert und die Wahrscheinlichkeit eines Aktionspotentials erhöht. Hemmende Synapsen erzeugen ein IPSP (inhibitorisches postsynaptisches Potential), das die Membran hyperpolarisiert und ein Aktionspotential unwahrscheinlicher macht. Am Axonhügel werden alle eingehenden EPSPs und IPSPs räumlich und zeitlich summiert (Integration). Wichtige Neurotransmitter sind: Acetylcholin (neuromuskuläre Endplatte, Parasympathikus), Noradrenalin und Adrenalin (Sympathikus, Aufmerksamkeit), Dopamin (Belohnung, Motorik), Serotonin (Stimmung, Schlaf), GABA (wichtigster hemmender Neurotransmitter im ZNS), Glutamat (wichtigster erregender Neurotransmitter im ZNS) und Endorphine (körpereigene Schmerzhemmung). Die Balance zwischen erregenden und hemmenden Neurotransmittern ist entscheidend für die normale Gehirnfunktion.`,
      diagram: 'synapse',
      merksaetze: [
        'Calcium (Ca²⁺) ist der Schlüssel zur Neurotransmitterfreisetzung: Kein Ca²⁺-Einstrom → keine Exozytose → keine synaptische Übertragung.',
        'Glutamat = wichtigster erregender Neurotransmitter (EPSP). GABA = wichtigster hemmender Neurotransmitter (IPSP). Acetylcholin = neuromuskuläre Endplatte + Parasympathikus.'
      ],
      altfrage: {
        question: 'Welche Rolle spielt Calcium bei der synaptischen Übertragung?',
        answer: 'Calcium (Ca²⁺) strömt bei Ankunft des Aktionspotentials über spannungsgesteuerte Ca²⁺-Kanäle in das präsynaptische Terminal. Der Ca²⁺-Einstrom ist der entscheidende Auslöser für die Fusion der synaptischen Vesikel mit der Membran (Exozytose) und damit für die Freisetzung der Neurotransmitter in den synaptischen Spalt.'
      },
      klinischerBezug: 'Bei der Myasthenia gravis bildet der Körper Autoantikörper gegen die Acetylcholinrezeptoren an der neuromuskulären Endplatte. Dadurch wird die Signalübertragung vom Nerv auf den Muskel gestört, was zu belastungsabhängiger Muskelschwäche führt. SSRI (Selektive Serotonin-Wiederaufnahmehemmer, z. B. Fluoxetin) hemmen den Reuptake von Serotonin und erhöhen so dessen Konzentration im synaptischen Spalt – sie werden als Antidepressiva eingesetzt. Bei Morbus Parkinson degenerieren dopaminerge Neuronen in der Substantia nigra, was zu Bewegungsarmut (Akinese), Muskelsteifigkeit (Rigor) und Ruhetremor führt.',
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
      content: `Die Nieren sind paarige, bohnenförmige Organe im Retroperitonealraum, die etwa 11 cm lang und 150 g schwer sind. Sie erfüllen zentrale Aufgaben der Homöostase: Filtration des Blutes und Bildung des Urins, Regulation des Wasser- und Elektrolythaushalts, Regulation des Säure-Basen-Haushalts, Ausscheidung harnpflichtiger Substanzen (Harnstoff, Kreatinin, Harnsäure), Blutdruckregulation (Renin-Angiotensin-Aldosteron-System) und endokrine Funktionen (Erythropoetin-Produktion, Aktivierung von Vitamin D). Die Niere ist in Rinde (Cortex) und Mark (Medulla) gegliedert. Die Nierenrinde enthält die Glomeruli und die proximalen/distalen Tubuli, das Nierenmark enthält die Henle-Schleifen und Sammelrohre. Die funktionelle Grundeinheit der Niere ist das Nephron – jede Niere besitzt etwa 1 Million Nephrone.

Ein Nephron besteht aus dem Nierenkörperchen (Glomerulus mit Bowman-Kapsel) und dem Tubulussystem (proximaler Tubulus, Henle-Schleife, distaler Tubulus, Sammelrohr). Im Glomerulus wird das Blut filtriert: Durch den Filtrationsdruck werden Wasser und kleine gelöste Stoffe (Glukose, Aminosäuren, Elektrolyte, Harnstoff) aus dem Blut in die Bowman-Kapsel gedrückt, während Blutzellen und große Proteine zurückgehalten werden. Die glomeruläre Filtrationsrate (GFR) beträgt beim Gesunden etwa 120 mL/min bzw. ca. 180 Liter Primärharn pro Tag. Davon werden jedoch 99 % rückresorbiert – es entstehen nur 1–2 Liter Endharn (Urin) pro Tag. Im proximalen Tubulus werden ca. 65 % des Natriums, Wassers, Glukose und Aminosäuren rückresorbiert. In der Henle-Schleife wird durch das Gegenstromprinzip ein osmotischer Gradient im Nierenmark aufgebaut, der für die Harnkonzentrierung entscheidend ist. Der distale Tubulus und das Sammelrohr dienen der Feinregulation unter hormoneller Kontrolle.

Die hormonelle Regulation der Nierenfunktion erfolgt hauptsächlich durch zwei Hormone: ADH (Antidiuretisches Hormon, Vasopressin) wird im Hypothalamus produziert und im Hypophysenhinterlappen gespeichert. Bei erhöhter Plasmaosmolalität oder Volumenmangel wird ADH freigesetzt und bewirkt den Einbau von Aquaporin-2-Wasserkanälen in die Sammelrohre, wodurch mehr Wasser rückresorbiert wird und ein konzentrierter Urin entsteht. Bei ADH-Mangel (Diabetes insipidus) werden bis zu 20 Liter verdünnter Urin pro Tag ausgeschieden. Aldosteron wird in der Nebennierenrinde (Zona glomerulosa) produziert und durch das Renin-Angiotensin-Aldosteron-System (RAAS) reguliert. Es steigert die Na⁺-Rückresorption und K⁺-Sekretion im distalen Tubulus und Sammelrohr. Da Wasser dem Natrium osmotisch folgt, führt Aldosteron auch zu einer vermehrten Wasserretention und damit zu einer Blutdruckerhöhung. Das RAAS wird aktiviert, wenn die Niere einen verminderten Blutdruck oder Volumenmangel registriert.`,
      diagram: 'nephron',
      merksaetze: [
        'GFR = 120 mL/min → 180 L Primärharn/Tag → 99 % Rückresorption → 1–2 L Endharn. Jede Niere hat ca. 1 Mio. Nephrone.',
        'ADH = Wasser rückresorbieren (Aquaporin-2 im Sammelrohr). Aldosteron = Na⁺ rückresorbieren + K⁺ sezernieren (distaler Tubulus). Merke: „ADH = Antidiuretisch = Hält Wasser zurück“.'
      ],
      altfrage: {
        question: 'Wie viel Primärharn produzieren die Nieren pro Tag?',
        answer: 'Die Nieren filtrieren täglich etwa 180 Liter Primärharn (GFR ≈ 120 mL/min × 60 min × 24 h). Durch Rückresorption von ca. 99 % entstehen nur 1–2 Liter Endharn (Urin). Der Großteil der Rückresorption findet im proximalen Tubulus statt.'
      },
      klinischerBezug: 'Bei chronischer Niereninsuffizienz (CKD) sinkt die GFR fortschreitend ab, harnpflichtige Substanzen akkumulieren im Blut (Urämie) und die Niere kann ihre regulatorischen Funktionen nicht mehr ausüben. Es kommt zu Ödemen, Hyperkaliämie, metabolischer Azidose und renaler Anämie (Erythropoetin-Mangel). Im Endstadium ist eine Dialyse oder Nierentransplantation notwendig. ACE-Hemmer blockieren das RAAS und werden zur Therapie von Bluthochdruck und Herzinsuffizienz eingesetzt.',
      selfTest: [
        {
          question: 'Welches Hormon fördert den Einbau von Wasserkanälen im Sammelrohr?',
          options: [
            'Aldosteron',
            'ADH (Vasopressin)',
            'Erythropoetin',
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
      content: `Das endokrine System (Hormonsystem) steuert zusammen mit dem Nervensystem die Körperfunktionen, arbeitet jedoch langsamer und nachhaltiger. Hormone sind chemische Botenstoffe, die von endokrinen Drüsen in das Blut abgegeben werden und an spezifischen Rezeptoren ihrer Zielzellen wirken. Man unterscheidet drei Hauptgruppen: Peptidhormone (z. B. Insulin, ADH – wasserlöslich, binden an Membranrezeptoren und wirken über Second-Messenger-Systeme wie cAMP), Steroidhormone (z. B. Cortisol, Östrogen, Testosteron – lipophil, durchdringen die Membran und wirken über intrazelluläre Rezeptoren als Transkriptionsfaktoren) und Aminosäurederivate (z. B. Schilddrüsenhormone T₃/T₄, Katecholamine Adrenalin/Noradrenalin). Die Hypothalamus-Hypophysen-Achse ist das übergeordnete Steuerungszentrum: Der Hypothalamus sezerniert Releasing- und Inhibiting-Hormone, die über das Portalgefäßsystem den Hypophysenvorderlappen (Adenohypophyse) erreichen und dort die Freisetzung glandotroper Hormone steuern.

Die Hypothalamus-Hypophysen-Achse funktioniert nach dem Prinzip der negativen Rückkopplung (Feedback). Ein Beispiel ist die Schilddrüsenachse: Der Hypothalamus sezerniert TRH (Thyreotropin-Releasing-Hormon), das den Hypophysenvorderlappen zur Freisetzung von TSH (Thyreoidea-stimulierendes Hormon) anregt. TSH stimuliert die Schilddrüse zur Produktion von T₃ und T₄ (Thyroxin). Erhöhte T₃/T₄-Spiegel hemmen wiederum die Freisetzung von TRH und TSH (negative Rückkopplung) – so wird ein Gleichgewicht aufrechterhalten. Die Schilddrüsenhormone steigern den Grundumsatz, die Wärmeproduktion, die Herzfrequenz und sind essentiell für die kindliche Hirnentwicklung. Ein weiteres wichtiges Hormonsystem ist die Regulation des Blutzuckerspiegels durch Insulin und Glukagon aus dem Pankreas: Insulin (B-Zellen der Langerhans-Inseln) senkt den Blutzucker, indem es die Glukoseaufnahme in die Zellen fördert, die Glykogensynthese und Lipogenese stimuliert. Glukagon (A-Zellen) erhöht den Blutzucker durch Glykogenolyse und Glukoneogenese in der Leber.

Die Nebenniere besteht aus Rinde und Mark mit unterschiedlichen Funktionen. Die Nebennierenrinde produziert in drei Zonen verschiedene Steroide: Zona glomerulosa → Mineralocorticoide (Aldosteron, Wasser-/Salzhaushalt), Zona fasciculata → Glucocorticoide (Cortisol, Stresshormon, Entzündungshemmung, Blutzuckererhöhung), Zona reticularis → Androgene (DHEA, Sexualhormone). Die Cortisolsekretion wird über die HPA-Achse (Hypothalamus → CRH → Hypophyse → ACTH → Nebenniere → Cortisol) reguliert und zeigt einen zirkadianen Rhythmus mit einem Maximum am Morgen. Das Nebennierenmark produziert Katecholamine (Adrenalin 80 %, Noradrenalin 20 %) und ist funktionell Teil des Sympathikus. Weitere wichtige endokrine Organe sind die Nebenschilddrüsen (Parathormon – Calciumhaushalt), die Epiphyse (Melatonin – Schlaf-Wach-Rhythmus) und die Gonaden (Östrogen, Progesteron, Testosteron – Geschlechtsentwicklung und Reproduktion).`,
      diagram: 'hormonsystem',
      merksaetze: [
        'Negative Rückkopplung: Hoher Hormonspiegel → hemmt übergeordnete Ebene (Hypothalamus/Hypophyse). Schilddrüsenachse: Hypothalamus (TRH) → Hypophyse (TSH) → Schilddrüse (T₃/T₄) → hemmt TRH + TSH.',
        'Insulin senkt Blutzucker (B-Zellen), Glukagon erhöht Blutzucker (A-Zellen). Nebennierenrinde: „GFR“ – Glomerulosa (Aldosteron) → Fasciculata (Cortisol) → Reticularis (Androgene).'
      ],
      altfrage: {
        question: 'Wie reguliert die Hypothalamus-Hypophysen-Schilddrüsen-Achse den T₃/T₄-Spiegel?',
        answer: 'Der Hypothalamus sezerniert TRH, das die Hypophyse zur TSH-Freisetzung anregt. TSH stimuliert die Schilddrüse zur T₃/T₄-Produktion. Erhöhte T₃/T₄-Spiegel hemmen die Freisetzung von TRH und TSH (negative Rückkopplung), sodass der Hormonspiegel in einem engen Bereich gehalten wird.'
      },
      klinischerBezug: 'Diabetes mellitus Typ 1 ist eine Autoimmunerkrankung, bei der die insulinproduzierenden B-Zellen des Pankreas zerstört werden – es besteht ein absoluter Insulinmangel. Bei Diabetes mellitus Typ 2 liegt eine Insulinresistenz der Zielzellen vor, oft kombiniert mit einem relativen Insulinmangel. Bei der Hyperthyreose (z. B. Morbus Basedow) wird die Schilddrüse durch TSH-Rezeptor-Autoantikörper stimuliert, was zu Tachykardie, Gewichtsverlust, Nervosität und Exophthalmus führt. Morbus Cushing entsteht durch Cortisolüberschuss und zeigt Stammfettsucht, Vollmondgesicht, Striae, Osteoporose und Muskelschwäche.',
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
      content: `Der Bewegungsapparat gliedert sich in einen passiven Anteil (Knochen, Knorpel, Gelenke, Bänder) und einen aktiven Anteil (Skelettmuskulatur, Sehnen). Das menschliche Skelett besteht aus etwa 206 Knochen und erfüllt Stütz-, Schutz- und Bewegungsfunktionen sowie die Blutbildung im Knochenmark und die Mineralspeicherung (v. a. Calcium und Phosphat). Knochen lassen sich nach Form in Röhrenknochen (z. B. Femur, Humerus), platte Knochen (z. B. Schädelknochen, Sternum), kurze Knochen (z. B. Handwurzelknochen), irreguläre Knochen (z. B. Wirbel) und Sesambeine (z. B. Patella) einteilen. Der Aufbau eines Röhrenknochens zeigt die Diaphyse (Schaft aus kompakter Knochensubstanz, Compacta), die Epiphysen (Knochenenden aus Spongiosa, schwammartig) und die Metaphyse (Wachstumszone bei Kindern, Epiphysenfuge). Im Inneren der Diaphyse befindet sich die Markhöhle mit dem gelben (Fett-) oder roten (blutbildenden) Knochenmark.

Die Skelettmuskulatur macht etwa 40 % des Körpergewichts aus und ermöglicht die willkürliche Bewegung. Skelettmuskelfasern sind vielkernige, quergestreifte Zellen, die aus Myofibrillen aufgebaut sind. Die Myofibrillen bestehen aus sich wiederholenden funktionellen Einheiten, den Sarkomeren – der kleinsten kontraktilen Einheit des Muskels. Ein Sarkomer wird von zwei Z-Scheiben begrenzt und enthält dünne Aktinfilamente und dicke Myosinfilamente. Die Querstreifung ergibt sich aus der regelmäßigen Anordnung: Die A-Bande (anisotrop, dunkel) enthält Myosinfilamente, die I-Bande (isotrop, hell) enthält nur Aktinfilamente, die H-Zone in der Mitte der A-Bande enthält nur Myosin, und die M-Linie in der Mitte des Sarkomers verbindet die Myosinfilamente. Bei der Kontraktion gleiten die Aktin- und Myosinfilamente ineinander, ohne sich zu verkürzen – dies ist die Gleitfilamenttheorie (Sliding-Filament-Theorie), die 1954 von Huxley und Huxley vorgestellt wurde.

Der molekulare Mechanismus der Muskelkontraktion läuft wie folgt ab: Ein Aktionspotential erreicht die neuromuskuläre Endplatte, Acetylcholin wird freigesetzt und löst ein Aktionspotential in der Muskelfaser aus. Dieses breitet sich über die T-Tubuli ins Innere aus und bewirkt die Freisetzung von Ca²⁺ aus dem sarkoplasmatischen Retikulum. Ca²⁺ bindet an Troponin C auf dem Aktinfilament, was eine Konformationsänderung bewirkt und die Myosinbindungsstellen auf dem Aktin freilegt (Tropomyosin wird verschoben). Die Myosinköpfe binden an Aktin (Querbrückenbildung), kippen unter ATP-Verbrauch (Kraftschlag) und ziehen die Aktinfilamente zur Sarkomermitte – das Sarkomer verkürzt sich. ATP wird benötigt sowohl für den Kraftschlag als auch für das Lösen der Querbrücke (ohne ATP bleibt der Myosinkopf am Aktin gebunden – dies erklärt die Totenstarre/Rigor mortis). Die Erschlaffung erfolgt, wenn Ca²⁺ aktiv in das sarkoplasmatische Retikulum zurückgepumpt wird (SERCA-Pumpe), Troponin seine ursprüngliche Konformation einnimmt und die Myosinbindungsstellen wieder blockiert werden.`,
      diagram: 'sarkomer',
      merksaetze: [
        'Gleitfilamenttheorie: Aktin und Myosin gleiten ineinander → Sarkomer verkürzt sich, Filamente selbst werden NICHT kürzer. ATP wird für Kraftschlag UND Lösen der Querbrücke benötigt.',
        'Kontraktionsauslöser: Ca²⁺ aus dem sarkoplasmatischen Retikulum bindet an Troponin C → Tropomyosin verschiebt sich → Myosinbindungsstellen auf Aktin werden frei → Querbrückenbildung.'
      ],
      altfrage: {
        question: 'Was ist die kleinste kontraktile Einheit des Skelettmuskels?',
        answer: 'Das Sarkomer ist die kleinste kontraktile Einheit. Es wird von zwei Z-Scheiben begrenzt und enthält Aktin- (dünn) und Myosinfilamente (dick). Bei der Kontraktion gleiten die Filamente ineinander (Gleitfilamenttheorie), wodurch sich das Sarkomer verkürzt.'
      },
      klinischerBezug: 'Bei der Duchenne-Muskeldystrophie (X-chromosomal rezessiv) fehlt das Protein Dystrophin, das die Myofibrillen mit der Zellmembran verbindet. Dies führt zu fortschreitender Muskelschwäche, die typischerweise im Kindesalter beginnt. Die Totenstarre (Rigor mortis) nach dem Tod entsteht, weil ohne ATP die Myosinköpfe fest an Aktin gebunden bleiben und die Querbrücken nicht gelöst werden können. Osteoporose ist eine systemische Skeletterkrankung mit verminderter Knochendichte und erhöhter Frakturgefahr, die besonders postmenopausale Frauen betrifft (Östrogenmangel).',
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
      content: `Die Sinnesorgane ermöglichen die Wahrnehmung von Reizen aus der Umwelt und dem Körperinneren. Das Auge ist das Organ des Sehsinns und besteht aus drei Schichten: der äußeren Augenhaut (Sklera/Hornhaut – Cornea), der mittleren Augenhaut (Uvea mit Iris, Ziliarkörper und Choroidea) und der inneren Augenhaut (Retina/Netzhaut). Licht tritt durch die Cornea ein, passiert die vordere Augenkammer (mit Kammerwasser), wird von der Linse gebündelt und auf die Retina projiziert. Die Iris reguliert als Blende den Lichteinfall durch Veränderung des Pupillendurchmessers. Die Akkommodation ermöglicht die Scharfstellung auf unterschiedliche Entfernungen: Der Ziliarmuskel kontrahiert sich bei Nahsicht, die Zonulafasern entspannen sich und die Linse wird durch ihre Eigenelastizität kugeliger (stärkere Brechkraft). Bei Fernsicht ist der Ziliarmuskel entspannt, die Zonulafasern sind gespannt und ziehen die Linse flach. In der Retina befinden sich die Fotorezeptoren: Stäbchen (ca. 120 Millionen, hochempfindlich, für Schwarz-Weiß-Sehen und Dämmerungssehen) und Zapfen (ca. 6 Millionen, für Farbsehen bei Tageslicht, drei Typen: rot, grün, blau). Die höchste Zapfendichte und damit die Stelle des schärfsten Sehens ist die Fovea centralis (Macula lutea).

Das Ohr dient dem Hören und dem Gleichgewichtssinn. Es gliedert sich in Außenohr (Ohrmuschel, äußerer Gehörgang), Mittelohr (Paukenhöhle mit Gehörknöchelchen: Hammer/Malleus, Amboss/Incus, Steigbügel/Stapes) und Innenohr (Cochlea/Schnecke für das Hören, Vestibularorgan für das Gleichgewicht). Schallwellen versetzen das Trommelfell in Schwingungen, die über die Gehörknöchelchenkette mechanisch verstärkt werden (Impedanzanpassung, Verstärkungsfaktor ca. 20-fach). Der Steigbügel überträgt die Schwingungen auf das ovale Fenster und damit auf die Perilymphe der Cochlea. In der Cochlea befindet sich das Corti-Organ auf der Basilarmembran. Die Schwingungen der Basilarmembran bewirken eine Abscherung der Stereozilien der Haarzellen gegen die Tektorialmembran, was zur Depolarisation der Haarzellen und zur Generierung von Nervenimpulsen führt, die über den Nervus vestibulocochlearis (VIII. Hirnnerv) zum Gehirn geleitet werden. Die Tonotopie der Basilarmembran ermöglicht die Frequenzunterscheidung: Hohe Frequenzen werden an der Schneckenbasis, tiefe Frequenzen an der Schneckenspitze (Helicotrema) wahrgenommen.

Die Hautsinne umfassen Tastsinn (Mechanorezeption), Temperatursinn (Thermorezeption), Schmerzempfindung (Nozizeption) und Drucksinn. In der Haut befinden sich verschiedene spezialisierte Rezeptoren: Meissner-Körperchen (Berührung, in haarlosen Hautarealen wie Fingerkuppen), Pacini-Körperchen (Druck und Vibration, in der tiefen Dermis), Ruffini-Körperchen (Dehnung, langsam adaptierend), Merkel-Zellen (feiner Druck und Textur) sowie freie Nervenendigungen (Schmerz und Temperatur). Thermorezeptoren werden in Kälterezeptoren (Krause-Endkolben, reagieren auf Abkühlung) und Wärmerezeptoren (Ruffini-Körperchen) unterteilt. Nozizeptoren (Schmerzrezeptoren) sind freie Nervenendigungen, die auf gewebeschädigende Reize reagieren – sie sind polymodal, d. h. sie können auf mechanische, thermische und chemische Reize ansprechen. Die Schmerzweiterleitung erfolgt über schnelle Aδ-Fasern (myelinisiert, scharfer Erstschmerz) und langsame C-Fasern (unmyelinisiert, dumpfer Zweitschmerz). Die Gate-Control-Theorie erklärt, warum Reiben einer schmerzenden Stelle den Schmerz lindert: Berührungsafferenzen (Aβ-Fasern) können die Schmerzweiterleitung im Rückenmark hemmen.`,
      diagram: 'sinnesorgane',
      merksaetze: [
        'Auge: Stäbchen (120 Mio., Schwarz-Weiß, Dämmerung) vs. Zapfen (6 Mio., Farbe, Tageslicht). Akkommodation: Ziliarmuskel kontrahiert → Linse kugeliger → Nahsicht.',
        'Ohr: Schall → Trommelfell → Gehörknöchelchen (Hammer–Amboss–Steigbügel) → ovales Fenster → Cochlea → Haarzellen (Corti-Organ) → N. vestibulocochlearis → Gehirn.'
      ],
      altfrage: {
        question: 'Welche Fotorezeptoren sind für das Farbsehen verantwortlich?',
        answer: 'Die Zapfen (Coni) sind für das Farbsehen bei ausreichender Helligkeit verantwortlich. Es gibt drei Typen: S-Zapfen (blau, kurzwellig), M-Zapfen (grün, mittelwellig) und L-Zapfen (rot, langwellig). Die Stäbchen dienen dem Schwarz-Weiß-Sehen und Dämmerungssehen und enthalten den Sehfarbstoff Rhodopsin.'
      },
      klinischerBezug: 'Bei der Presbyopie (Altersweitsichtigkeit) verliert die Linse mit zunehmendem Alter ihre Elastizität, sodass die Akkommodationsfähigkeit abnimmt und nahes Sehen erschwert wird. Rot-Grün-Blindheit (häufigste Form der Farbenblindheit) wird X-chromosomal rezessiv vererbt und betrifft ca. 8 % der Männer. Beim Hörsturz kommt es zu einem plötzlichen, einseitigen sensorineuralen Hörverlust, dessen Ursache oft unklar bleibt (möglicherweise Durchblutungsstörung des Innenohrs). Lärmschwerhörigkeit entsteht durch Schädigung der empfindlichen Haarzellen im Corti-Organ bei dauerhafter Lärmexposition.',
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
