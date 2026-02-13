import type { Kapitel } from '../types';

export const bioKap3: Kapitel = {
  id: 'bio-kap3',
  title: 'Fortpflanzung & Entwicklung',
  subject: 'biologie',
  icon: '🧒',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    // =====================================================================
    // 3.1 Männliche Geschlechtsorgane
    // =====================================================================
    {
      id: 'bio-kap3-uk1',
      title: 'Männliche Geschlechtsorgane',
      content: `Die männlichen Geschlechtsorgane lassen sich in innere und äußere Genitalorgane unterteilen. Zu den äußeren Organen zählen der Penis und das Skrotum (Hodensack), während die inneren Organe die Hoden (Testes), die Nebenhoden (Epididymis), die Samenleiter (Ductus deferentes), die Samenbläschen (Glandulae vesiculosae), die Prostata und die Bulbourethraldrüsen (Glandulae bulbourethrales) umfassen. Die Hoden liegen im Skrotum außerhalb der Bauchhöhle, da die Spermatogenese eine Temperatur von etwa 35 °C erfordert, also rund 2 °C unter der Körperkerntemperatur. Jeder Hoden besteht aus ca. 250–300 Lobuli testis, die jeweils ein bis drei gewundene Samenkanälchen (Tubuli seminiferi contorti) enthalten.

Die Spermatogenese ist der Prozess der Spermienbildung, der ab der Pubertät kontinuierlich und lebenslang abläuft. Sie findet in den Tubuli seminiferi contorti statt und dauert etwa 64 Tage. Der Vorgang beginnt mit den Spermatogonien (diploide Stammzellen, 2n), die sich zunächst mitotisch teilen. Die primären Spermatozyten (2n) durchlaufen dann die erste meiotische Teilung (Meiose I), wobei sekundäre Spermatozyten (haploid, 1n) entstehen. Diese durchlaufen die Meiose II, aus der Spermatiden hervorgehen. In der anschließenden Spermiogenese differenzieren sich die Spermatiden zu reifen Spermatozön mit Kopf (Akrosom und Zellkern), Mittelstück (Mitochondrien für Energiebereitstellung) und Schwanz (Flagellum zur Fortbewegung). Die Sertoli-Zellen in den Tubuli seminiferi ernähren und schützen die reifenden Keimzellen und bilden die Blut-Hoden-Schranke.

Die hormonelle Regulation der männlichen Fortpflanzungsfunktion erfolgt über die Hypothalamus-Hypophysen-Gonaden-Achse. Der Hypothalamus sezerniert pulsatil GnRH (Gonadotropin-Releasing-Hormon), welches die Adenohypophyse zur Ausschüttung von FSH (follikelstimulierendes Hormon) und LH (luteinisierendes Hormon) anregt. LH stimuliert die Leydig-Zellen im Interstitium des Hodens zur Produktion von Testosteron. Testosteron ist das wichtigste männliche Sexualhormon (Androgen) und fördert die Spermatogenese, die Ausbildung der sekundären Geschlechtsmerkmale (Bartwuchs, Stimmbruchtiefe, Muskelmasse) sowie den Knochenstoffwechsel. FSH wirkt auf die Sertoli-Zellen und ist zusammen mit Testosteron für die Aufrechterhaltung der Spermatogenese essenziell. Über einen negativen Feedback-Mechanismus hemmen Testosteron und Inhibin B (aus Sertoli-Zellen) die Gonadotropinfreisetzung.`,
      merksätze: [
        'Spermatogenese läuft ab der Pubertät kontinuierlich ab und dauert ca. 64 Tage — sie erfordert eine Temperatur von ca. 35 °C (daher Lage der Hoden im Skrotum).',
        'LH stimuliert Leydig-Zellen → Testosteron; FSH stimuliert Sertoli-Zellen → Unterstützung der Spermatogenese.'
      ],
      altfrage: {
        question: 'Welche Zellen im Hoden produzieren Testosteron und durch welches Hormon werden sie stimuliert?',
        answer: 'Die Leydig-Zellen (interstitielle Zellen) produzieren Testosteron. Sie werden durch LH (luteinisierendes Hormon) aus der Adenohypophyse stimuliert.'
      },
      klinischerBezug: 'Bei einem Kryptorchismus (Hodenhochstand) verbleiben ein oder beide Hoden in der Bauchhöhle. Die dort herrschende höhere Temperatur von 37 °C schädigt die Spermatogenese und kann zu Infertilität führen. Zudem steigt das Risiko für Hodenmalignome deutlich an, weshalb eine frühzeitige operative Korrektur (Orchidopexie) empfohlen wird.',
      selfTest: [
        {
          question: 'Aus welchen Zellen entstehen durch die Meiose I die sekundären Spermatozyten?',
          options: [
            'Spermatogonien',
            'Primäre Spermatozyten',
            'Spermatiden',
            'Sertoli-Zellen',
            'Leydig-Zellen'
          ],
          correctIndex: 1,
          explanation: 'Die primären Spermatozyten (2n) durchlaufen die Meiose I und bilden die haploiden sekundären Spermatozyten (1n). Spermatogonien teilen sich mitotisch zu primären Spermatozyten.'
        },
        {
          question: 'Welche Funktion haben die Sertoli-Zellen?',
          options: [
            'Produktion von Testosteron',
            'Ernährung und Schutz der reifenden Keimzellen sowie Bildung der Blut-Hoden-Schranke',
            'Produktion von GnRH',
            'Bildung des Akrosoms der Spermien',
            'Sekretion von LH und FSH'
          ],
          correctIndex: 1,
          explanation: 'Sertoli-Zellen ernähren und schützen die sich entwickelnden Keimzellen, bilden die Blut-Hoden-Schranke und produzieren Inhibin B. Testosteron wird von Leydig-Zellen produziert.'
        },
        {
          question: 'Welches Hormon hemmt über negativen Feedback die FSH-Ausschüttung aus der Adenohypophyse?',
          options: [
            'Östrogen',
            'Progesteron',
            'Inhibin B',
            'GnRH',
            'Testosteron'
          ],
          correctIndex: 2,
          explanation: 'Inhibin B wird von den Sertoli-Zellen produziert und hemmt selektiv die FSH-Sekretion der Adenohypophyse im Sinne eines negativen Feedbacks.'
        }
      ]
    },

    // =====================================================================
    // 3.2 Weibliche Geschlechtsorgane
    // =====================================================================
    {
      id: 'bio-kap3-uk2',
      title: 'Weibliche Geschlechtsorgane',
      content: `Die weiblichen Geschlechtsorgane werden ebenfalls in innere und äußere Genitalien unterteilt. Die äußeren Genitalien (Vulva) umfassen die großen und kleinen Schamlippen (Labia majora und minora), die Klitoris und den Scheidenvorhof. Zu den inneren Organen zählen die Eierstöcke (Ovarien), die Eileiter (Tubae uterinae), die Gebärmutter (Uterus) und die Scheide (Vagina). Die Ovarien sind paarig angelegte, mandelförmige Organe, die sowohl als exokrine Drüsen (Eizellfreisetzung) als auch als endokrine Drüsen (Hormonproduktion: Östrogen, Progesteron) fungieren. Sie liegen intraperitoneal an der seitlichen Beckenwand.

Die Oogenese unterscheidet sich grundlegend von der Spermatogenese, da sie diskontinuierlich verläuft. Bereits in der Embryonalentwicklung vermehren sich die Oogonien mitotisch und treten noch pränatal in die Meiose I ein, arretieren jedoch im Diktyotän-Stadium der Prophase I. Bei Geburt besitzt ein Mädchen etwa 1–2 Millionen Primärfollikel, von denen bis zur Pubertät durch Atresie nur noch ca. 300.000–400.000 übrig bleiben. Ab der Pubertät reifen in jedem Zyklus mehrere Follikel heran, wobei in der Regel nur ein dominanter Follikel die Meiose I abschließt und dabei eine sekundäre Oozyte (1n) und ein erstes Polkörperchen bildet. Die Meiose II wird erst bei der Befruchtung durch das Spermium vollendet. Insgesamt ovulieren im Leben einer Frau nur etwa 400–500 Eizellen.

Der Uterus (Gebärmutter) ist ein birnenförmiges, muskuläres Hohlorgan, das sich in Fundus, Corpus und Cervix unterteilt. Die Uteruswand besteht aus drei Schichten: dem Endometrium (Schleimhaut, hormonabhängig), dem Myometrium (glatte Muskulatur, wichtig für Wehen) und dem Perimetrium (seröser Überzug). Das Endometrium durchläuft zyklische Veränderungen unter dem Einfluss von Östrogen und Progesteron: In der Proliferationsphase wird es unter Östrogeneinfluss aufgebaut, in der Sekretionsphase bereitet Progesteron es auf die Implantation vor. Bleibt die Befruchtung aus, sinken die Hormonspiegel, und die Funktionalis des Endometriums wird abgestoßen — es kommt zur Menstruationsblutung. Die Eileiter fangen mit ihren Fimbrien die ovulierte Eizelle auf und transportieren sie durch Zilienschlag und peristaltische Kontraktionen zum Uterus. Die Befruchtung findet typischerweise in der Ampulla des Eileiters statt.`,
      merksätze: [
        'Oogenese ist diskontinuierlich: Arretierung in Prophase I (pränatal), Meiose I wird erst bei Ovulation abgeschlossen, Meiose II erst bei Befruchtung.',
        'Das Endometrium besteht aus der hormonabhängigen Funktionalis (wird zyklisch abgestoßen) und der Basalis (bleibt erhalten und regeneriert die Funktionalis).'
      ],
      altfrage: {
        question: 'In welchem Stadium der Meiose arretieren die Oozyten bis zur Ovulation?',
        answer: 'Die Oozyten arretieren im Diktyotän-Stadium der Prophase I der Meiose. Erst durch den LH-Peak vor der Ovulation wird die Meiose I abgeschlossen.'
      },
      klinischerBezug: 'Eine Eileiterschwangerschaft (Tubargravidität) entsteht, wenn sich die befruchtete Eizelle nicht im Uterus, sondern im Eileiter einnistet. Da der Eileiter nicht für die Aufnahme eines wachsenden Embryos ausgelegt ist, kann es zu einer lebensbedrohlichen Ruptur mit intraabdomineller Blutung kommen. Typische Symptome sind einseitige Unterbauchschmerzen und vaginale Blutung bei positivem Schwangerschaftstest.',
      selfTest: [
        {
          question: 'Wie viele Primärfollikel besitzt ein Mädchen ungefähr bei der Geburt?',
          options: [
            'Ca. 400–500',
            'Ca. 50.000',
            'Ca. 1–2 Millionen',
            'Ca. 10 Millionen',
            'Ca. 100.000'
          ],
          correctIndex: 2,
          explanation: 'Bei Geburt sind ca. 1–2 Millionen Primärfollikel vorhanden. Durch Atresie sinkt die Zahl bis zur Pubertät auf ca. 300.000–400.000. Nur ca. 400–500 Eizellen ovulieren im Laufe des Lebens.'
        },
        {
          question: 'Wann wird die Meiose II der Eizelle abgeschlossen?',
          options: [
            'Noch vor der Geburt',
            'In der Pubertät',
            'Bei der Ovulation',
            'Erst bei der Befruchtung durch ein Spermium',
            'Während der Follikelreifung im Ovar'
          ],
          correctIndex: 3,
          explanation: 'Die Meiose II wird erst durch das Eindringen des Spermiums in die sekundäre Oozyte vollendet. Vorher arretiert die Eizelle in der Metaphase II.'
        },
        {
          question: 'Wo findet typischerweise die Befruchtung statt?',
          options: [
            'Im Uterus (Cavum uteri)',
            'In der Ampulla des Eileiters',
            'Im Ovar',
            'In der Cervix uteri',
            'Im Isthmus des Eileiters'
          ],
          correctIndex: 1,
          explanation: 'Die Befruchtung findet normalerweise in der Ampulla (erweiterter Teil) des Eileiters statt. Die befruchtete Eizelle wandert dann in den Uterus zur Implantation.'
        }
      ]
    },

    // =====================================================================
    // 3.3 Menstruationszyklus
    // =====================================================================
    {
      id: 'bio-kap3-uk3',
      title: 'Menstruationszyklus',
      content: `Der Menstruationszyklus ist ein hormonell gesteuerter, zyklisch wiederkehrender Vorgang, der die weibliche Fortpflanzungsfähigkeit sicherstellt. Er dauert durchschnittlich 28 Tage (Schwankungen zwischen 21 und 35 Tagen sind physiologisch) und wird konventionell ab dem ersten Tag der Menstruationsblutung gezählt. Der Zyklus lässt sich in zwei parallele Zyklen gliedern: den Ovarialzyklus (Follikelphase, Ovulation, Lutealphase) und den Uterinzyklus (Menstruationsphase, Proliferationsphase, Sekretionsphase). Beide werden von der Hypothalamus-Hypophysen-Gonaden-Achse koordiniert, wobei GnRH, FSH, LH, Östrogen und Progesteron die Schlüsselhormone darstellen.

Die Follikelphase (Tag 1–14 bei einem 28-Tage-Zyklus) beginnt mit der Menstruation. Unter FSH-Einfluss reifen mehrere Follikel im Ovar heran, wobei in der Regel nur ein dominanter Follikel zum Graaf-Follikel heranwächst. Die Granulosazellen des heranreifenden Follikels produzieren zunehmend Östradiol (wichtigstes Östrogen). Steigende Östrogenspiegel hemmen zunächst über negativen Feedback die FSH-Sekretion (unterdrücken damit die konkurrierenden Follikel), lösen aber ab einer Schwellenkonzentration einen positiven Feedback-Mechanismus auf die LH-Ausschüttung aus. Dieser LH-Peak (ca. Tag 13) ist das zentrale Signal für die Ovulation: Etwa 24–36 Stunden nach dem LH-Peak platzt der reife Graaf-Follikel und gibt die sekundäre Oozyte (mit Polkörperchen und Corona radiata) in die Bauchhöhle frei, wo sie von den Fimbrien des Eileiters aufgefangen wird.

Nach der Ovulation beginnt die Lutealphase (Tag 15–28). Der kollabierte Follikel wandelt sich unter LH-Einfluss zum Gelbkörper (Corpus luteum) um, der große Mengen Progesteron und etwas Östrogen sezerniert. Progesteron bewirkt die sekretorische Umwandlung des Endometriums: Die Drüsen werden geschlängelt, das Stroma ödematös, und Glykogen wird eingelagert — optimale Bedingungen für die Implantation einer Blastozyste. Gleichzeitig hemmt Progesteron über negativen Feedback die GnRH-Pulsatilität und damit die LH/FSH-Sekretion. Erfolgt keine Befruchtung, degeneriert der Gelbkörper nach ca. 12–14 Tagen zum Corpus albicans. Der daraus resultierende Abfall von Progesteron und Östrogen führt zur Vasokonstriktion der Spiralarterien im Endometrium, was die ischämische Abstoßung der Funktionalis und damit die Menstruationsblutung auslöst. Gleichzeitig fällt der negative Feedback weg, FSH steigt wieder an, und ein neuer Zyklus beginnt.`,
      diagram: 'menstrual-cycle',
      merksätze: [
        'Merke zum positiven Feedback: Östrogen hemmt zunächst FSH/LH (negativer Feedback), löst aber ab einer Schwellenkonzentration den LH-Peak aus (positiver Feedback) → Ovulation.',
        'Die Lutealphase ist mit ca. 14 Tagen relativ konstant — die Zykluslänge variiert hauptsächlich durch Unterschiede in der Follikelphase.'
      ],
      altfrage: {
        question: 'Was löst die Ovulation aus und wie lange nach dem auslösenden Signal findet sie statt?',
        answer: 'Der LH-Peak (ausgelöst durch positiven Östrogen-Feedback bei Erreichen einer Schwellenkonzentration) löst die Ovulation aus. Sie findet ca. 24–36 Stunden nach dem LH-Peak statt.'
      },
      klinischerBezug: 'Die hormonelle Kontrazeption ("Pille") nutzt synthetische Östrogen- und Gestagen-Analoga, um über negativen Feedback die Gonadotropinsekretion (FSH und LH) zu unterdrücken. Ohne FSH-Anstieg reift kein dominanter Follikel heran, und ohne LH-Peak findet keine Ovulation statt. Zusätzlich verdickt Gestagen den Zervixschleim (Barriere für Spermien) und hemmt den Endometriumaufbau.',
      selfTest: [
        {
          question: 'Welches Hormon ist für die sekretorische Umwandlung des Endometriums in der Lutealphase hauptverantwortlich?',
          options: [
            'FSH',
            'LH',
            'Östradiol',
            'Progesteron',
            'Testosteron'
          ],
          correctIndex: 3,
          explanation: 'Progesteron aus dem Corpus luteum bewirkt die sekretorische Transformation des Endometriums mit Drüsenschlängelung, Glykogeneinlagerung und Stromaödem — optimale Voraussetzungen für eine Implantation.'
        },
        {
          question: 'Wie lange dauert die Lutealphase ungefähr, unabhängig von der Gesamtzykluslänge?',
          options: [
            'Ca. 5 Tage',
            'Ca. 7 Tage',
            'Ca. 14 Tage',
            'Ca. 21 Tage',
            'Ca. 10 Tage'
          ],
          correctIndex: 2,
          explanation: 'Die Lutealphase ist mit ca. 14 Tagen relativ konstant. Variationen der Zykluslänge entstehen hauptsächlich durch Unterschiede in der Follikelphase.'
        },
        {
          question: 'Was passiert mit dem Gelbkörper, wenn keine Befruchtung stattfindet?',
          options: [
            'Er wird zum Corpus luteum graviditatis',
            'Er degeneriert zum Corpus albicans',
            'Er bildet sich zum Graaf-Follikel zurück',
            'Er persistiert bis zur nächsten Ovulation',
            'Er wird durch FSH in einen neuen Follikel umgewandelt'
          ],
          correctIndex: 1,
          explanation: 'Ohne Befruchtung (und damit ohne HCG-Stimulation) degeneriert der Gelbkörper nach ca. 12–14 Tagen zum narbigen Corpus albicans. Der Progesteronabfall löst die Menstruation aus.'
        }
      ]
    },

    // =====================================================================
    // 3.4 Befruchtung & Embryonalentwicklung
    // =====================================================================
    {
      id: 'bio-kap3-uk4',
      title: 'Befruchtung & Embryonalentwicklung',
      content: `Die Befruchtung (Fertilisation) ist ein mehrstufiger Prozess, der in der Ampulla des Eileiters stattfindet. Zunächst müssen die Spermien die Corona radiata (Granulosazellschicht) durchdringen, was durch Hyaluronidase aus dem Akrosom erleichtert wird. Anschließend bindet das Spermium an die Zona pellucida (Glykoproteinschicht, insbesondere ZP3-Rezeptor), was die Akrosomreaktion auslöst: Das Akrosom gibt proteolytische Enzyme (u. a. Akrosin) frei, die ein Loch in die Zona pellucida verdauen. Nach Durchdringung der Zona pellucida fusioniert die Spermienmembran mit der Oozytenmembran. Dies löst die Kortikalreaktion aus: Kortikale Granula werden exozytiert und verändern die Zona pellucida chemisch (Zona-Reaktion), sodass kein weiteres Spermium eindringen kann — ein essenzieller Mechanismus zur Verhinderung der Polyspermie. Nach der Befruchtung vollendet die Eizelle die Meiose II und bildet das zweite Polkörperchen.

Nach der Verschmelzung der haploiden Vorkerne (Pronuklei) von Spermium und Eizelle entsteht die diploide Zygote (2n = 46 Chromosomen). Die Zygote beginnt etwa 30 Stunden nach der Befruchtung mit den Furchungsteilungen — schnellen mitotischen Teilungen ohne Zellwachstum, sodass die Gesamtgröße des Embryos zunächst gleich bleibt. Nach ca. 3 Tagen liegt ein 16-Zell-Stadium vor, die sogenannte Morula (lat. morus = Maulbeere). Am 4.–5. Tag entsteht durch Flüssigkeitseinlagerung die Blastozyste: eine Hohlkugel mit einer äußeren Zellschicht (Trophoblast, wird später zur Plazenta beitragen) und einer inneren Zellmasse (Embryoblast, aus dem der eigentliche Embryo hervorgeht). Am 6.–7. Tag nach der Befruchtung implantiert (nistet) sich die Blastozyste in das sekretorisch umgewandelte Endometrium ein (Nidation). Der Trophoblast differenziert sich dabei in Synzytiotrophoblast (invasiv, produziert HCG) und Zytotrophoblast.

In der dritten Entwicklungswoche findet die Gastrulation statt — ein fundamentaler Prozess, bei dem aus der zweiblättrigen Keimscheibe die drei Keimblätter entstehen: Ektoderm, Mesoderm und Entoderm. Das Ektoderm bildet später Nervensystem, Epidermis und Sinnesorgane. Aus dem Mesoderm entwickeln sich Skelett, Muskulatur, Herz-Kreislauf-System, Nieren und Bindegewebe. Das Entoderm gibt den Epithelien des Gastrointestinaltrakts, der Lunge, der Leber und des Pankreas den Ursprung. Mithilfe der Eselsbrücke „EMS“ (Ektoderm – Mesoderm – Entoderm) lassen sich die Keimblätter gut merken. Ab der 4. Woche beginnt die Organogenese: Durch Neurulation bildet sich aus dem Ektoderm das Neuralrohr (Vorläufer von Gehirn und Rückenmark), das Herz beginnt zu schlagen, und die Somiten (Ursegmente) bilden sich aus dem Mesoderm. Die empfindlichste Phase für teratogene Schädigungen liegt zwischen der 3. und 8. Entwicklungswoche, wenn die Organogenese stattfindet.`,
      merksätze: [
        'Entwicklungsreihenfolge: Zygote → Morula (16 Zellen, Tag 3) → Blastozyste (Tag 4–5, mit Trophoblast und Embryoblast) → Implantation (Tag 6–7) → Gastrulation (3. Woche).',
        'Drei Keimblätter merken mit „EMS“: Ektoderm (Nerven, Haut), Mesoderm (Muskeln, Skelett, Herz), Entoderm (Darmepithel, Lunge, Leber).'
      ],
      altfrage: {
        question: 'Welcher Mechanismus verhindert nach dem Eindringen des ersten Spermiums die Polyspermie?',
        answer: 'Die Kortikalreaktion: Nach dem Spermieneintritt werden kortikale Granula exozytiert, die die Zona pellucida chemisch verändern (Zona-Reaktion), sodass keine weiteren Spermien binden und eindringen können.'
      },
      klinischerBezug: 'Neuralrohrdefekte wie Spina bifida (offener Rücken) oder Anenzephalie entstehen durch einen unvollständigen Verschluss des Neuralrohrs in der 3.–4. Entwicklungswoche. Die perikonzeptionelle Einnahme von Folsäure (mindestens 0,4 mg/Tag, idealerweise ab 4 Wochen vor der Konzeption) kann das Risiko für Neuralrohrdefekte um bis zu 70 % reduzieren.',
      selfTest: [
        {
          question: 'Was ist die Blastozyste und aus welchen zwei Zellpopulationen besteht sie?',
          options: [
            'Ein 8-Zell-Stadium mit inneren und äußeren Blastomeren',
            'Eine Hohlkugel mit Trophoblast (äußere Zellschicht) und Embryoblast (innere Zellmasse)',
            'Ein kompaktes Zellstadium mit Ektoderm und Entoderm',
            'Ein Follikelstadium mit Granulosazellen und Thekazellen',
            'Ein Zellstadium mit Synzytiotrophoblast und Zytotrophoblast'
          ],
          correctIndex: 1,
          explanation: 'Die Blastozyste entsteht am Tag 4–5 und besteht aus dem Trophoblasten (äußere Schicht, bildet Plazentaanteile) und dem Embryoblasten (innere Zellmasse, bildet den Embryo).'
        },
        {
          question: 'Aus welchem Keimblatt entwickelt sich das Nervensystem?',
          options: [
            'Mesoderm',
            'Entoderm',
            'Ektoderm',
            'Trophoblast',
            'Endoderm'
          ],
          correctIndex: 2,
          explanation: 'Das Nervensystem (Gehirn und Rückenmark) entwickelt sich aus dem Ektoderm durch den Prozess der Neurulation (Bildung des Neuralrohrs). Das Ektoderm bildet auch Epidermis und Sinnesorgane.'
        },
        {
          question: 'Wann nistet sich die Blastozyste normalerweise in das Endometrium ein?',
          options: [
            'Tag 1–2 nach Befruchtung',
            'Tag 3–4 nach Befruchtung',
            'Tag 6–7 nach Befruchtung',
            'Tag 14 nach Befruchtung',
            'Tag 10–12 nach Befruchtung'
          ],
          correctIndex: 2,
          explanation: 'Die Implantation (Nidation) der Blastozyste in das sekretorisch umgewandelte Endometrium erfolgt am 6.–7. Tag nach der Befruchtung.'
        }
      ]
    },

    // =====================================================================
    // 3.5 Schwangerschaft & Geburt
    // =====================================================================
    {
      id: 'bio-kap3-uk5',
      title: 'Schwangerschaft & Geburt',
      content: `Die Schwangerschaft (Gravidität) dauert vom Zeitpunkt der Befruchtung ca. 266 Tage bzw. gerechnet ab dem ersten Tag der letzten Menstruation etwa 280 Tage (40 Schwangerschaftswochen). Sie wird in drei Trimester unterteilt. Im ersten Trimester (1.–12. Woche) finden die entscheidenden Prozesse der Embryonalentwicklung statt: Organogenese, Ausbildung der Plazenta und Etablierung des fetalen Kreislaufs. Das Hormon HCG (humanes Choriongonadotropin), das vom Synzytiotrophoblasten produziert wird, erhält den Gelbkörper (Corpus luteum graviditatis) aufrecht und verhindert damit den Progesteronabfall und die Menstruation. Der HCG-Spiegel verdoppelt sich etwa alle 48 Stunden, erreicht sein Maximum in der 10.–12. Woche und fällt danach ab, da die Plazenta ab diesem Zeitpunkt selbst ausreichend Progesteron produziert. HCG ist die Grundlage des Schwangerschaftstests.

Die Plazenta (Mutterkuchen) ist ein faszinierendes Organ, das als Schnittstelle zwischen mütterlichem und fetalem Kreislauf fungiert, ohne dass die Blutkreisläufe direkt vermischt werden — man spricht von der Plazentaschranke. Sie ermöglicht den Austausch von Sauerstoff, Nährstoffen, Kohlendioxid und Stoffwechselprodukten per Diffusion und aktivem Transport. Ab dem zweiten Trimester (13.–26. Woche) übernimmt die Plazenta vollständig die endokrine Funktion und produziert Progesteron, Östrogen, HPL (humanes Plazentalaktogen) und weitere Hormone. Im zweiten Trimester wächst der Fetus stark, die Organe reifen weiter, und die Kindsbewegungen werden für die Mutter spürbar (ca. 18.–20. Woche). Im dritten Trimester (27.–40. Woche) erfolgt vor allem die Lungenreifung (Surfactant-Produktion ab der 34.–35. Woche durch Typ-II-Pneumozyten), die Zunahme des Unterhautfettgewebes und die Kopfdrehung (bei regelrechter Schädellage) ins kleine Becken.

Die Geburt (Partus) wird durch ein komplexes Zusammenspiel hormoneller und mechanischer Faktoren eingeleitet. Oxytocin aus dem Hypothalamus/Neurohypophyse stimuliert die rhythmischen Kontraktionen des Myometriums (Wehen), während Prostaglandine die Zervixreifung (Erweichung und Verkürzung) fördern. Die Geburt verläuft in drei Phasen: In der Eröffnungsphase öffnet sich der Muttermund durch regelmäßige Wehen von 0 auf 10 cm — dies ist die längste Phase (Erstgebärende: 8–12 Stunden). Die Austreibungsphase beginnt bei vollständig eröffnetem Muttermund und endet mit der Geburt des Kindes (30 Minuten bis 1 Stunde). In der Nachgeburtsphase wird die Plazenta mit den Eihäuten ausgestoßen (ca. 15–30 Minuten). Oxytocin hat auch postpartal eine wichtige Funktion: Es fördert die Uterusrückbildung (Involution), stimuliert den Milchejektionsreflex (Stillen) und stärkt die Mutter-Kind-Bindung.`,
      merksätze: [
        'HCG erhält das Corpus luteum graviditatis → Progesteron bleibt hoch → keine Menstruation. Ab der 10.–12. Woche übernimmt die Plazenta die Progesteronproduktion.',
        'Drei Geburtsphasen: Eröffnungsphase (Muttermund 0→10 cm), Austreibungsphase (Kind wird geboren), Nachgeburtsphase (Plazenta wird ausgestoßen).'
      ],
      altfrage: {
        question: 'Warum bleibt der Gelbkörper in der Frühschwangerschaft bestehen und welches Hormon ist dafür verantwortlich?',
        answer: 'HCG (humanes Choriongonadotropin) aus dem Synzytiotrophoblasten stimuliert den Gelbkörper (Corpus luteum graviditatis) und verhindert dessen Rückbildung. Dadurch bleibt die Progesteronproduktion aufrecht, was die Aufrechterhaltung des Endometriums und damit der Schwangerschaft sichert.'
      },
      klinischerBezug: 'Die Rhesus-Inkompatibilität tritt auf, wenn eine Rh-negative Mutter ein Rh-positives Kind austrägt. Beim ersten Kind kommt es selten zu Problemen, aber bei der Geburt können fetale Erythrozyten in den mütterlichen Kreislauf gelangen und eine Antikörperbildung (Anti-D-IgG) auslösen. Bei einer folgenden Schwangerschaft mit einem Rh-positiven Kind können diese IgG-Antikörper die Plazentaschranke passieren und eine fetale Hämolyse (Morbus hämolyticus neonatorum) verursachen. Die Anti-D-Prophylaxe (Gabe von Anti-D-Immunglobulin) in der 28.–30. SSW und innerhalb von 72 Stunden nach der Geburt verhindert die mütterliche Sensibilisierung.',
      selfTest: [
        {
          question: 'Welches Hormon ist die Grundlage des Schwangerschaftstests und woher stammt es?',
          options: [
            'Progesteron aus dem Corpus luteum',
            'Östradiol aus den Ovarien',
            'HCG aus dem Synzytiotrophoblasten',
            'Oxytocin aus der Neurohypophyse',
            'HPL aus der reifen Plazenta'
          ],
          correctIndex: 2,
          explanation: 'HCG (humanes Choriongonadotropin) wird vom Synzytiotrophoblasten der sich einnistenden Blastozyste produziert und ist im Urin und Blut der Schwangeren nachweisbar — es bildet die Grundlage des Schwangerschaftstests.'
        },
        {
          question: 'In welcher Schwangerschaftswoche erreicht der HCG-Spiegel sein Maximum?',
          options: [
            '4.–6. Woche',
            '10.–12. Woche',
            '20.–22. Woche',
            '36.–38. Woche',
            '6.–8. Woche'
          ],
          correctIndex: 1,
          explanation: 'Der HCG-Spiegel erreicht sein Maximum in der 10.–12. SSW und fällt danach ab, da die Plazenta ab diesem Zeitpunkt selbst ausreichend Progesteron produzieren kann.'
        },
        {
          question: 'Welche Funktion hat Oxytocin während und nach der Geburt?',
          options: [
            'Hemmung der Uteruskontraktionen und Förderung der Zervixreifung',
            'Stimulation der Myometriumkontraktionen (Wehen), Uterusinvolution und Milchejektionsreflex',
            'Produktion von Surfactant in der fetalen Lunge',
            'Aufrechterhaltung des Corpus luteum graviditatis',
            'Förderung der Zervixreifung durch Prostaglandinsynthese'
          ],
          correctIndex: 1,
          explanation: 'Oxytocin stimuliert die Kontraktionen des Myometriums (Wehen), fördert postpartal die Uterusrückbildung (Involution) und löst den Milchejektionsreflex beim Stillen aus. Es stärkt zudem die Mutter-Kind-Bindung.'
        }
      ]
    }
  ]
};
