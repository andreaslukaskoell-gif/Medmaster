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
      content: `Hoden liegen im Skrotum außerhalb der Bauchhöhle. Grund: **Spermatogenese** (Spermienbildung) braucht 35 °C, also 2 °C kühler als Körperkern. Die Hoden bestehen aus 250–300 Lobuli testis mit Tubuli seminiferi contorti (gewundene Samenkanälchen).

**Spermatogenese** läuft ab Pubertät lebenslang, dauert 64 Tage. Start: Spermatogonien (diploid, 2n) teilen sich mitotisch zu primären Spermatozyten (2n). Meiose I: Aus primären Spermatozyten entstehen sekundäre Spermatozyten (haploid, 1n). Meiose II: Aus sekundären Spermatozyten werden Spermatiden. **Spermiogenese** formt Spermatiden zu reifen Spermien um: Kopf mit Akrosom und Zellkern, Mittelstück mit Mitochondrien (Energie), Schwanz mit Flagellum (Bewegung). **Sertoli-Zellen** ernähren die reifenden Keimzellen und bilden die Blut-Hoden-Schranke.

Hormonelle Steuerung über Hypothalamus-Hypophysen-Gonaden-Achse: **GnRH** (Gonadotropin-Releasing-Hormon) aus dem Hypothalamus triggert FSH und LH aus der Adenohypophyse. **LH** stimuliert Leydig-Zellen zur Testosteronproduktion. **Testosteron** ist das wichtigste männliche Hormon (Androgen) und fördert Spermatogenese, Bartwuchs, tiefe Stimme, Muskelmasse. **FSH** wirkt auf Sertoli-Zellen. Negativer Feedback: Testosteron und Inhibin B (aus Sertoli-Zellen) hemmen die Gonadotropinfreisetzung.`,
      merksätze: [
        'Spermatogenese läuft ab der Pubertät kontinuierlich ab und dauert ca. 64 Tage — sie erfordert eine Temperatur von ca. 35 °C (daher Lage der Hoden im Skrotum).',
        'LH stimuliert Leydig-Zellen → Testosteron; FSH stimuliert Sertoli-Zellen → Unterstützung der Spermatogenese.'
      ],
      altfrage: {
        question: 'Welche Zellen im Hoden produzieren Testosteron und durch welches Hormon werden sie stimuliert?',
        answer: 'Die Leydig-Zellen (interstitielle Zellen) produzieren Testosteron. Sie werden durch LH (luteinisierendes Hormon) aus der Adenohypophyse stimuliert.'
      },
      klinischerBezug: 'Bei **Kryptorchismus** (Hodenhochstand) verbleiben die Hoden in der Bauchhöhle. 37 °C statt 35 °C schädigen die Spermatogenese → Infertilität. Das Risiko für Hodentumoren (Seminom, Nicht-Seminom) steigt um Faktor 5–10. Therapie: **Orchidopexie** (operative Verlagerung ins Skrotum) idealerweise vor dem 12.–18. Lebensmonat, um Langzeitschäden zu minimieren.',
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
      content: `**Ovarien** (Eierstöcke) sind paarig, mandelförmig, liegen intraperitoneal. Sie sind exokrine Drüsen (geben Eizellen ab) und endokrine Drüsen (produzieren Östrogen und Progesteron). Innere Organe: Ovarien, Eileiter (Tubae uterinae), Uterus, Vagina. Äußere Organe (Vulva): Labia majora, Labia minora, Klitoris.

**Oogenese** (Eizellreifung) läuft diskontinuierlich: Oogonien vermehren sich pränatal mitotisch und treten in Meiose I ein, arretieren aber im Diktyotän-Stadium der Prophase I. Bei Geburt hat ein Mädchen 1–2 Millionen Primärfollikel, durch **Atresie** (Abbau) sinkt die Zahl bis zur Pubertät auf 300.000–400.000. Ab Pubertät reifen pro Zyklus mehrere Follikel, meist wird nur einer dominant. Der LH-Peak löst die Ovulation aus: Meiose I wird abgeschlossen → sekundäre Oozyte (1n) + erstes Polkörperchen. Meiose II arretiert in Metaphase II und wird erst bei Befruchtung durch ein Spermium vollendet. Im Leben einer Frau ovulieren nur 400–500 Eizellen.

**Uterus** (Gebärmutter): birnenförmig, muskulär. Aufbau: Fundus, Corpus, Cervix. Wandschichten: **Endometrium** (Schleimhaut, hormonabhängig), **Myometrium** (glatte Muskulatur, Wehen), **Perimetrium** (seröser Überzug). Das Endometrium besteht aus der **Funktionalis** (wird zyklisch abgestoßen bei Menstruation) und der **Basalis** (bleibt erhalten, regeneriert Funktionalis). **Eileiter** fangen die Eizelle mit Fimbrien auf, Zilienschlag und Peristaltik transportieren sie zum Uterus. Befruchtung findet in der Ampulla des Eileiters statt.`,
      merksätze: [
        'Oogenese ist diskontinuierlich: Arretierung in Prophase I (pränatal), Meiose I wird erst bei Ovulation abgeschlossen, Meiose II erst bei Befruchtung.',
        'Das Endometrium besteht aus der hormonabhängigen Funktionalis (wird zyklisch abgestoßen) und der Basalis (bleibt erhalten und regeneriert die Funktionalis).'
      ],
      altfrage: {
        question: 'In welchem Stadium der Meiose arretieren die Oozyten bis zur Ovulation?',
        answer: 'Die Oozyten arretieren im Diktyotän-Stadium der Prophase I der Meiose. Erst durch den LH-Peak vor der Ovulation wird die Meiose I abgeschlossen.'
      },
      klinischerBezug: '**Tubargravidität** (Eileiterschwangerschaft): Blastozyste nistet sich im Eileiter statt im Uterus ein. Der Eileiter kann das wachsende Gewebe nicht aufnehmen → Ruptur mit intraabdomineller Blutung ab etwa 6.–8. SSW. Klassische Trias: einseitiger Unterbauchschmerz, vaginale Blutung, positiver Schwangerschaftstest. Notfall! Diagnostik: Transvaginaler Ultraschall + β-hCG-Verlauf. Therapie: Methotrexat (Chemotherapie) bei früher Diagnose oder Laparoskopie (Salpingotomie/-ektomie).',
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
      content: `Der Menstruationszyklus dauert durchschnittlich 28 Tage (21–35 Tage sind normal). Zählung ab dem ersten Tag der Menstruationsblutung. Zwei parallele Zyklen: **Ovarialzyklus** (Follikelphase, Ovulation, Lutealphase) und **Uterinzyklus** (Menstruationsphase, Proliferationsphase, Sekretionsphase). Steuerung über Hypothalamus-Hypophysen-Gonaden-Achse mit GnRH, FSH, LH, Östrogen, Progesteron.

**Follikelphase** (Tag 1–14): Menstruation startet. **FSH** lässt mehrere Follikel reifen, meist wird einer dominant (Graaf-Follikel). **Granulosazellen** produzieren zunehmend Östradiol. Steigendes Östrogen hemmt FSH (negativer Feedback) → konkurrierende Follikel sterben ab. Ab Schwellenkonzentration löst Östrogen den **LH-Peak** aus (positiver Feedback, Tag 13). 24–36 Stunden nach LH-Peak platzt der Graaf-Follikel → **Ovulation**. Die sekundäre Oozyte (mit Polkörperchen + Corona radiata) wird freigesetzt und von den Fimbrien des Eileiters aufgefangen.

**Lutealphase** (Tag 15–28): Der kollabierte Follikel wird unter LH-Einfluss zum **Corpus luteum** (Gelbkörper). Dieser produziert viel Progesteron + etwas Östrogen. **Progesteron** bewirkt sekretorische Umwandlung des Endometriums: Drüsen werden geschlängelt, Stroma ödematös, Glykogen wird eingelagert → optimal für Blastozysten-Implantation. Progesteron hemmt über negativen Feedback GnRH/LH/FSH. Ohne Befruchtung degeneriert das Corpus luteum nach 12–14 Tagen zum **Corpus albicans** (Narbe). Progesteron + Östrogen fallen ab → Vasokonstriktion der Spiralarterien im Endometrium → Ischämie → Abstoßung der Funktionalis → Menstruationsblutung. FSH steigt wieder an, neuer Zyklus beginnt.`,
      diagram: 'menstrual-cycle',
      merksätze: [
        'Merke zum positiven Feedback: Östrogen hemmt zunächst FSH/LH (negativer Feedback), löst aber ab einer Schwellenkonzentration den LH-Peak aus (positiver Feedback) → Ovulation.',
        'Die Lutealphase ist mit ca. 14 Tagen relativ konstant — die Zykluslänge variiert hauptsächlich durch Unterschiede in der Follikelphase.'
      ],
      altfrage: {
        question: 'Was löst die Ovulation aus und wie lange nach dem auslösenden Signal findet sie statt?',
        answer: 'Der LH-Peak (ausgelöst durch positiven Östrogen-Feedback bei Erreichen einer Schwellenkonzentration) löst die Ovulation aus. Sie findet ca. 24–36 Stunden nach dem LH-Peak statt.'
      },
      klinischerBezug: 'Die **hormonelle Kontrazeption** (Pille) nutzt synthetische Östrogen- + Gestagen-Analoga. Wirkung: (1) Negativer Feedback auf Hypothalamus/Hypophyse → FSH/LH werden unterdrückt → kein Follikelwachstum, keine Ovulation. (2) **Zervixschleim** wird zäh → Barriere für Spermien. (3) Endometrium wird gehemmt → ungünstig für Implantation. Beispiel: Ethinylestradiol (Östrogen) + Levonorgestrel (Gestagen). Pearl-Index: 0,1–0,9 bei perfekter Anwendung.',
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
      content: `**Befruchtung** (Fertilisation) findet in der Ampulla des Eileiters statt. Spermien durchdringen die **Corona radiata** (Granulosazellschicht) mit Hyaluronidase aus dem Akrosom. Spermium bindet an **Zona pellucida** (Glykoproteinschicht, Rezeptor: ZP3) → **Akrosomreaktion**: Akrosom setzt proteolytische Enzyme (u.a. Akrosin) frei, die ein Loch in die Zona pellucida verdauen. Spermium fusioniert mit Oozytenmembran → **Kortikalreaktion**: Kortikale Granula exozytieren und verändern die Zona pellucida chemisch (**Zona-Reaktion**) → kein weiteres Spermium kann eindringen (verhindert **Polyspermie**). Eizelle vollendet Meiose II, bildet zweites Polkörperchen.

Nach Verschmelzung der haploiden Vorkerne (Pronuklei) entsteht die diploide **Zygote** (2n = 46 Chromosomen). **Furchungsteilungen** (schnelle mitotische Teilungen ohne Zellwachstum) beginnen nach ca. 30 h. Tag 3: 16-Zell-Stadium = **Morula** (lat. morus = Maulbeere). Tag 4–5: Flüssigkeitseinlagerung → **Blastozyste**: Hohlkugel mit **Trophoblast** (äußere Zellschicht, wird später Plazentaanteile bilden) und **Embryoblast** (innere Zellmasse, wird Embryo). Tag 6–7: **Implantation** (Nidation) in das sekretorisch umgewandelte Endometrium. Trophoblast differenziert sich in **Synzytiotrophoblast** (invasiv, produziert HCG) und **Zytotrophoblast**.

Woche 3: **Gastrulation** — aus der zweiblättrigen Keimscheibe entstehen drei Keimblätter: **Ektoderm** (Nervensystem, Epidermis, Sinnesorgane), **Mesoderm** (Skelett, Muskulatur, Herz-Kreislauf-System, Nieren, Bindegewebe), **Entoderm** (Darmepithel, Leber, Pankreas, Lunge). Eselsbrücke: EMS. Ab Woche 4: **Organogenese**. **Neurulation**: Ektoderm bildet Neuralrohr (Vorläufer von Gehirn + Rückenmark). Herz beginnt zu schlagen, Somiten (Ursegmente) bilden sich aus Mesoderm. Woche 3–8: Empfindlichste Phase für teratogene Schädigungen.`,
      merksätze: [
        'Entwicklungsreihenfolge: Zygote → Morula (16 Zellen, Tag 3) → Blastozyste (Tag 4–5, mit Trophoblast und Embryoblast) → Implantation (Tag 6–7) → Gastrulation (3. Woche).',
        'Merke: Drei Keimblätter — Ektoderm (Nervensystem, Epidermis, Sinnesorgane), Mesoderm (Muskulatur, Skelett, Herz, Nieren, Blut), Entoderm (Darmepithel, Leber, Pankreas, Lunge, Schilddrüse).'
      ],
      altfrage: {
        question: 'Welcher Mechanismus verhindert nach dem Eindringen des ersten Spermiums die Polyspermie?',
        answer: 'Die Kortikalreaktion: Nach dem Spermieneintritt werden kortikale Granula exozytiert, die die Zona pellucida chemisch verändern (Zona-Reaktion), sodass keine weiteren Spermien binden und eindringen können.'
      },
      klinischerBezug: '**Neuralrohrdefekte** wie **Spina bifida** (offener Rücken) oder **Anenzephalie** entstehen durch unvollständigen Verschluss des Neuralrohrs in Woche 3–4. **Folsäure-Supplementierung** (mindestens 0,4 mg/Tag, ab 4 Wochen vor Konzeption) reduziert das Risiko um bis zu 70 %. Mechanismus: Folsäure ist Cofaktor für Nukleotidsynthese und DNA-Methylierung. Bei Hochrisiko (vorheriger Neuralrohrdefekt): 4–5 mg/Tag. Screening: Mütterliches α-Fetoprotein (AFP) erhöht, Ultraschall.',
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
      content: `Schwangerschaft dauert ab Befruchtung 266 Tage, ab letzter Menstruation 280 Tage (40 Schwangerschaftswochen = SSW). Drei Trimester. Trimester 1 (Woche 1–12): Organogenese, Plazentabildung, fetaler Kreislauf. **HCG** (humanes Choriongonadotropin) vom Synzytiotrophoblasten erhält das **Corpus luteum graviditatis** aufrecht → Progesteron bleibt hoch → keine Menstruation. HCG verdoppelt sich alle 48 h, Maximum Woche 10–12, fällt danach ab (Plazenta übernimmt Progesteronproduktion). HCG ist Grundlage des Schwangerschaftstests.

**Plazenta** (Mutterkuchen) ist Schnittstelle zwischen mütterlichem und fetalem Kreislauf ohne direkte Vermischung (**Plazentaschranke**). Austausch von O₂, Nährstoffen, CO₂, Stoffwechselprodukten per Diffusion + aktivem Transport. Ab Trimester 2 übernimmt Plazenta endokrine Funktion: Progesteron, Östrogen, **HPL** (humanes Plazentalaktogen). Trimester 2 (Woche 13–26): Fetus wächst stark, Organe reifen, Kindsbewegungen spürbar (Woche 18–20). Trimester 3 (Woche 27–40): **Lungenreifung** (Surfactant-Produktion ab Woche 34–35 durch Typ-II-Pneumozyten), Unterhautfettgewebe, Kopfdrehung ins Becken (Schädellage).

**Geburt** (Partus): **Oxytocin** aus Hypothalamus/Neurohypophyse stimuliert Myometriumkontraktionen (Wehen). **Prostaglandine** fördern Zervixreifung (Erweichung + Verkürzung). Drei Phasen: (1) **Eröffnungsphase**: Muttermund öffnet sich von 0 auf 10 cm durch regelmäßige Wehen (längste Phase, Erstgebärende: 8–12 h). (2) **Austreibungsphase**: Bei vollständig eröffnetem Muttermund bis Geburt des Kindes (30 min bis 1 h). (3) **Nachgeburtsphase**: Ausstoßung der Plazenta + Eihäute (15–30 min). Postpartal: Oxytocin fördert Uterusinvolution (Rückbildung), Milchejektionsreflex (Stillen), Mutter-Kind-Bindung.`,
      merksätze: [
        'HCG erhält das Corpus luteum graviditatis → Progesteron bleibt hoch → keine Menstruation. Ab der 10.–12. Woche übernimmt die Plazenta die Progesteronproduktion.',
        'Drei Geburtsphasen: Eröffnungsphase (Muttermund 0→10 cm), Austreibungsphase (Kind wird geboren), Nachgeburtsphase (Plazenta wird ausgestoßen).'
      ],
      altfrage: {
        question: 'Warum bleibt der Gelbkörper in der Frühschwangerschaft bestehen und welches Hormon ist dafür verantwortlich?',
        answer: 'HCG (humanes Choriongonadotropin) aus dem Synzytiotrophoblasten stimuliert den Gelbkörper (Corpus luteum graviditatis) und verhindert dessen Rückbildung. Dadurch bleibt die Progesteronproduktion aufrecht, was die Aufrechterhaltung des Endometriums und damit der Schwangerschaft sichert.'
      },
      klinischerBezug: '**Rhesus-Inkompatibilität**: Rh-negative Mutter trägt Rh-positives Kind aus. Erste Schwangerschaft meist problemlos. Bei Geburt gelangen fetale Erythrozyten in mütterlichen Kreislauf → mütterliche Antikörperbildung (Anti-D-IgG). Zweite Schwangerschaft mit Rh-positivem Kind: IgG-Antikörper passieren Plazenta → **Morbus hämolyticus neonatorum** (fetale Hämolyse) → Anämie, Ikterus, Hydrops fetalis. Prophylaxe: **Anti-D-Immunglobulin** (Rhophylac, Rhesonativ) in SSW 28–30 und innerhalb 72 h post partum → bindet fetale Rh-positive Erys → verhindert mütterliche Sensibilisierung.',
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
