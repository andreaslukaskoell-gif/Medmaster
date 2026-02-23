// =============================================================================
// tvTextsExpanded.ts - MedAT Textverständnis (TV) Expanded Data
// 5 Sets x 5 Texte x 12 Fragen pro Set = 60 Fragen insgesamt
// =============================================================================

export interface TVTextMC {
  id: string;
  title: string;
  content: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctOption: number;
    explanation: string;
  }[];
}

export interface TVTextSet {
  id: string;
  name: string;
  difficulty: "leicht" | "mittel" | "schwer";
  texts: TVTextMC[];
  // total questions across all 5 texts = 12
}

// ---------------------------------------------------------------------------
// SET 1 - LEICHT
// ---------------------------------------------------------------------------
const set1: TVTextSet = {
  id: "tv-set-1",
  name: "Textverständnis Set 1",
  difficulty: "leicht",
  texts: [
    {
      id: "tv1-text1",
      title: "Die Bedeutung des Schlafs",
      content:
        "Schlaf ist ein grundlegendes biologisches Bedürfnis, das für die körperliche und geistige " +
        "Gesundheit unerlässlich ist. Während des Schlafs durchläuft der Körper mehrere Phasen, " +
        "darunter den Leichtschlaf, den Tiefschlaf und den sogenannten REM-Schlaf (Rapid Eye Movement). " +
        "Jede Phase hat eine spezifische Funktion. Im Tiefschlaf werden Wachstumshormone ausgeschüttet, " +
        "die für die Reparatur von Gewebe und die Stärkung des Immunsystems verantwortlich sind. " +
        "Der REM-Schlaf hingegen spielt eine zentrale Rolle bei der Verarbeitung von Erinnerungen " +
        "und dem Lernen. Studien zeigen, dass Erwachsene im Durchschnitt sieben bis neun Stunden " +
        "Schlaf pro Nacht benötigen, wobei der individülle Bedarf variieren kann. Chronischer " +
        "Schlafmangel wird mit einem erhöhten Risiko für Herz-Kreislauf-Erkrankungen, Diabetes, " +
        "Adipositas und psychische Störungen in Verbindung gebracht. Auch die kognitive " +
        "Leistungsfähigkeit leidet: Konzentration, Reaktionszeit und Entscheidungsfähigkeit nehmen " +
        "bereits nach einer einzigen Nacht mit weniger als sechs Stunden Schlaf messbar ab. " +
        "Experten empfehlen daher, auf eine regelmäßige Schlafenszeit zu achten und elektronische " +
        "Geräte mindestens eine Stunde vor dem Zubettgehen beiseitezulegen, da das blaue Licht " +
        "der Bildschirme die Produktion des Schlafhormons Melatonin hemmt.",
      questions: [
        {
          id: "tv1-t1-q1",
          question: "Welche Funktion wird im Text dem Tiefschlaf zugeschrieben?",
          options: [
            "Verarbeitung von Erinnerungen und Förderung des Lernens",
            "Ausschüttung von Wachstumshormonen zur Gewebereparatur und Immunstärkung",
            "Regulierung der Körpertemperatur während der Nacht",
            "Steigerung der Melatoninproduktion im Gehirn",
            "Verbesserung der Reaktionszeit am nächsten Tag",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201EIm Tiefschlaf werden Wachstumshormone ausgeschüttet, die für die Reparatur von Gewebe und die Stärkung des Immunsystems verantwortlich sind.\u201C",
        },
        {
          id: "tv1-t1-q2",
          question:
            "Warum wird empfohlen, vor dem Schlafengehen elektronische Geräte beiseitezulegen?",
          options: [
            "Weil die Geräte elektromagnetische Strahlung abgeben, die den Tiefschlaf verhindert",
            "Weil das blaue Licht der Bildschirme die Melatoninproduktion hemmt",
            "Weil die Geräusche der Geräte den Leichtschlaf stören",
            "Weil die Geräte die Raumtemperatur erhöhen und den Schlaf erschweren",
            "Weil soziale Medien Stress verursachen, der das Einschlafen verzögert",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt als Grund, dass \u201Edas blaue Licht der Bildschirme die Produktion des Schlafhormons Melatonin hemmt\u201C.",
        },
        {
          id: "tv1-t1-q3",
          question: "Welche Aussage über Schlafmangel geht aus dem Text hervor?",
          options: [
            "Schlafmangel führt immer zu Adipositas",
            "Bereits eine Nacht mit weniger als sechs Stunden Schlaf beeinträchtigt die kognitive Leistung",
            "Schlafmangel kann durch Koffein vollständig kompensiert werden",
            "Nur chronischer Schlafmangel von mehr als einem Monat hat gesundheitliche Folgen",
            "Schlafmangel betrifft ausschließlich ältere Erwachsene",
          ],
          correctOption: 1,
          explanation:
            "Der Text besagt: \u201EKonzentration, Reaktionszeit und Entscheidungsfähigkeit nehmen bereits nach einer einzigen Nacht mit weniger als sechs Stunden Schlaf messbar ab.\u201C",
        },
      ],
    },
    {
      id: "tv1-text2",
      title: "Die Seidenstraße",
      content:
        "Die Seidenstraße war ein Netzwerk antiker Handelsrouten, das den Osten mit dem Westen " +
        "verband und sich über mehr als 6.000 Kilometer erstreckte. Der Name geht auf den " +
        "deutschen Geografen Ferdinand von Richthofen zurück, der den Begriff 1877 prägte. " +
        "Hauptsächlich wurden Seide, Gewürze, Edelsteine, Metalle und Keramik transportiert, " +
        "doch die Bedeutung der Seidenstraße ging weit über den Warenhandel hinaus. Sie war " +
        "auch ein Kanal für den Austausch von Ideen, Religionen, Technologien und kulturellen " +
        "Praktiken. Der Buddhismus verbreitete sich über die Seidenstraße von Indien nach China " +
        "und Zentralasien, während der Islam später ähnliche Wege nahm. Krankheitserreger " +
        "reisten ebenfalls entlang dieser Routen \u2013 so wird vermutet, dass die Pest im " +
        "14. Jahrhundert über Handelswege aus Zentralasien nach Europa gelangte. Die Seidenstraße " +
        "verlor ab dem 15. Jahrhundert an Bedeutung, als europäische Seemächte zunehmend den " +
        "Seehandel ausbauten und so alternative Transportwege etablierten.",
      questions: [
        {
          id: "tv1-t2-q1",
          question: "Wer prägte laut Text den Begriff \u201ESeidenstraße\u201C?",
          options: [
            "Marco Polo, der venezianische Händler",
            "Ein chinesischer Kaiser der Han-Dynastie",
            "Der deutsche Geograf Ferdinand von Richthofen",
            "Ein arabischer Kartograf des 12. Jahrhunderts",
            "Alexander von Humboldt während seiner Asienreise",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt \u201Eden deutschen Geografen Ferdinand von Richthofen, der den Begriff 1877 prägte\u201C.",
        },
        {
          id: "tv1-t2-q2",
          question:
            "Welcher Grund wird im Text für den Bedeutungsverlust der Seidenstraße genannt?",
          options: [
            "Kriege zwischen China und dem Römischen Reich zerstörten die Routen",
            "Die Erfindung der Eisenbahn machte Karawanenhandel überflüssig",
            "Europäische Seemächte etablierten alternative Transportwege über den Seehandel",
            "Die Klimaveränderung führte zur Austrocknung der zentralasiatischen Oasen",
            "Die Produktion von Seide wurde in Europa selbst aufgenommen",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es: \u201EDie Seidenstraße verlor ab dem 15. Jahrhundert an Bedeutung, als europäische Seemächte zunehmend den Seehandel ausbauten.\u201C",
        },
        {
          id: "tv1-t2-q3",
          question: "Welche Rolle spielte die Seidenstraße laut Text neben dem Warenhandel?",
          options: [
            "Sie diente ausschließlich dem militärischen Nachschub zwischen Ost und West",
            "Sie war ein Kanal für den Austausch von Ideen, Religionen, Technologien und kulturellen Praktiken",
            "Sie wurde nur für den Transport von Seide und Gewürzen genutzt",
            "Sie verband ausschließlich China mit dem Römischen Reich",
            "Sie war ein reines Pilgernetzwerk für buddhistische Mönche",
          ],
          correctOption: 1,
          explanation:
            "Der Text besagt: \u201ESie war auch ein Kanal für den Austausch von Ideen, Religionen, Technologien und kulturellen Praktiken.\u201C",
        },
      ],
    },
    {
      id: "tv1-text3",
      title: "Die Wiener Kaffeehauskultur",
      content:
        "Das Wiener Kaffeehaus ist weit mehr als ein Ort zum Kaffeetrinken \u2013 es ist eine " +
        "Institution, die seit 2011 zum immateriellen UNESCO-Kulturerbe Österreichs zählt. " +
        "Die Tradition reicht bis ins späte 17. Jahrhundert zurück, als nach der zweiten " +
        "Belagerung Wiens durch die Osmanen im Jahr 1683 angeblich Säcke mit Kaffeebohnen " +
        "zurückgelassen wurden. Das Wiener Kaffeehaus zeichnet sich durch eine besondere " +
        "Atmosphäre aus: Marmortische, Thonet-Stühle, Zeitungsständer mit internationaler " +
        "Presse und die Tradition, stundenlang bei einer einzigen Tasse Kaffee verweilen zu " +
        "dürfen. Historisch war das Kaffeehaus ein Treffpunkt für Intellektülle, Künstler und " +
        "Schriftsteller. Persönlichkeiten wie Sigmund Freud, Arthur Schnitzler und Stefan Zweig " +
        "waren regelmäßige Gäste. Zum Kaffee wird traditionell ein Glas Wasser serviert, das " +
        "unaufgefordert nachgefüllt wird. Die bekanntesten Kaffeespezialitäten sind der " +
        "Einspänner \u2013 ein Mokka im Glas mit Schlagobers \u2013 und die Wiener Melange, die aus " +
        "Kaffee und aufgeschäumter Milch besteht. Trotz der Konkurrenz moderner Kaffeeketten " +
        "haben viele traditionelle Kaffeehäuser überlebt und ziehen sowohl Einheimische als auch " +
        "Touristen an.",
      questions: [
        {
          id: "tv1-t3-q1",
          question: "Seit wann zählt die Wiener Kaffeehauskultur laut Text zum UNESCO-Kulturerbe?",
          options: ["Seit 1683", "Seit 1999", "Seit 2003", "Seit 2011", "Seit 2017"],
          correctOption: 3,
          explanation:
            "Der Text nennt das Jahr 2011 als den Zeitpunkt der Aufnahme ins immaterielle UNESCO-Kulturerbe Österreichs.",
        },
        {
          id: "tv1-t3-q2",
          question: "Was ist laut Text ein \u201EEinspänner\u201C?",
          options: [
            "Ein Kaffee mit aufgeschäumter Milch",
            "Ein schwarzer Kaffee ohne Zucker",
            "Ein Mokka im Glas mit Schlagobers",
            "Ein kalter Kaffee mit Eiswürfeln",
            "Ein doppelter Espresso mit Kakaopulver",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird der Einspänner beschrieben als \u201Eein Mokka im Glas mit Schlagobers\u201C.",
        },
      ],
    },
    {
      id: "tv1-text4",
      title: "Wie funktioniert GPS?",
      content:
        "Das Global Positioning System, kurz GPS, ist ein satellitengestütztes Navigationssystem, " +
        "das ursprünglich vom US-Militär entwickelt wurde und seit den 1990er-Jahren auch zivil " +
        "genutzt werden kann. Es besteht aus mindestens 24 Satelliten, die die Erde in einer Höhe " +
        "von etwa 20.200 Kilometern umkreisen. Jeder Satellit sendet kontinuierlich Signale aus, " +
        "die seine genaue Position und die aktülle Uhrzeit enthalten. Ein GPS-Empfänger auf der " +
        "Erde empfängt diese Signale und berechnet anhand der Laufzeit der Signale den Abstand zu " +
        "jedem Satelliten. Um eine dreidimensionale Position \u2013 also Längengrad, Breitengrad und " +
        "Höhe \u2013 zu bestimmen, benötigt der Empfänger Signale von mindestens vier Satelliten. " +
        "Dieses Prinzip wird als Trilateration bezeichnet. Die Genauigkeit von zivilen GPS-Geräten " +
        "liegt heute typischerweise bei wenigen Metern, kann jedoch durch ergänzende Systeme wie " +
        "DGPS (Differential GPS) auf wenige Zentimeter verbessert werden. GPS wird nicht nur zur " +
        "Navigation verwendet, sondern auch in der Landwirtschaft, der Vermessungstechnik, der " +
        "Logistik und sogar in der Erdbebenforschung, wo kleinste Verschiebungen tektonischer " +
        "Platten gemessen werden können.",
      questions: [
        {
          id: "tv1-t4-q1",
          question:
            "Wie viele Satellitensignale benötigt ein GPS-Empfänger laut Text für eine dreidimensionale Positionsbestimmung?",
          options: [
            "Mindestens zwei Satellitensignale",
            "Mindestens drei Satellitensignale",
            "Mindestens vier Satellitensignale",
            "Genau sechs Satellitensignale",
            "Alle 24 Satellitensignale gleichzeitig",
          ],
          correctOption: 2,
          explanation:
            "Der Text besagt: \u201EUm eine dreidimensionale Position \u2026 zu bestimmen, benötigt der Empfänger Signale von mindestens vier Satelliten.\u201C",
        },
        {
          id: "tv1-t4-q2",
          question: "Welche Angaben sind laut Text in den Signalen der GPS-Satelliten enthalten?",
          options: [
            "Die Windgeschwindigkeit und Temperatur in der Atmosphäre",
            "Die genaue Position des Satelliten und die aktülle Uhrzeit",
            "Die Position des Empfängers und die geschätzte Entfernung",
            "Die Umlaufgeschwindigkeit des Satelliten und seine Höhe",
            "Die Koordinaten des nächsten Satelliten in der Umlaufbahn",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201EJeder Satellit sendet kontinuierlich Signale aus, die seine genaue Position und die aktülle Uhrzeit enthalten.\u201C",
        },
      ],
    },
    {
      id: "tv1-text5",
      title: "Warum gähnen wir?",
      content:
        "Gähnen ist ein reflexartiger Vorgang, bei dem der Mund weit geöffnet und tief eingeatmet " +
        "wird, gefolgt von einem langsamen Ausatmen. Obwohl fast alle Wirbeltiere gähnen \u2013 von " +
        "Fischen über Vögel bis hin zu Säugetieren \u2013, ist die genaue Ursache wissenschaftlich " +
        "noch nicht vollständig geklärt. Eine weit verbreitete, aber inzwischen weitgehend " +
        "widerlegte Hypothese besagt, dass Gähnen dazu dient, den Sauerstoffgehalt im Blut zu " +
        "erhöhen. Neuere Forschungen legen stattdessen nahe, dass Gähnen primär der Kühlung des " +
        "Gehirns dient. Durch das tiefe Einatmen wird kühlere Luft aufgenommen, die über die " +
        "Nasennebenhöhlen und die Blutgefäße die Temperatur des Gehirns reguliert. Diese " +
        "Thermoregulationshypothese wird durch die Beobachtung gestützt, dass Menschen in " +
        "wärmeren Umgebungen häufiger gähnen als in kühlen. Besonders bekannt ist das Phänomen " +
        "des ansteckenden Gähnens: Sieht man eine andere Person gähnen, steigt die " +
        "Wahrscheinlichkeit, selbst zu gähnen, erheblich. Dieses Verhalten wird mit Empathie in " +
        "Verbindung gebracht \u2013 Studien zeigen, dass ansteckendes Gähnen bei Menschen mit höherer " +
        "Empathiefähigkeit häufiger auftritt und bei Kindern unter vier Jahren sowie bei Menschen " +
        "mit bestimmten neurologischen Störungen seltener beobachtet wird.",
      questions: [
        {
          id: "tv1-t5-q1",
          question: "Welche neuere Erklärung für das Gähnen wird im Text vorgestellt?",
          options: [
            "Gähnen dient der Erhöhung des Sauerstoffgehalts im Blut",
            "Gähnen ist ein sozialer Reflex zur Stärkung von Gruppenbindungen",
            "Gähnen dient primär der Kühlung des Gehirns",
            "Gähnen trainiert die Kiefermuskulatur und beugt Verspannungen vor",
            "Gähnen signalisiert anderen Gruppenmitgliedern Müdigkeit",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt: \u201ENeuere Forschungen legen stattdessen nahe, dass Gähnen primär der Kühlung des Gehirns dient.\u201C",
        },
        {
          id: "tv1-t5-q2",
          question: "Welcher Zusammenhang mit ansteckendem Gähnen wird im Text beschrieben?",
          options: [
            "Es tritt häufiger bei Müdigkeit und Schlafmangel auf",
            "Es steht in Zusammenhang mit Empathiefähigkeit",
            "Es wird durch den Sauerstoffmangel in geschlossenen Räumen ausgelöst",
            "Es ist bei Männern häufiger als bei Frauen",
            "Es tritt nur bei erwachsenen Menschen auf",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201EDieses Verhalten wird mit Empathie in Verbindung gebracht \u2013 Studien zeigen, dass ansteckendes Gähnen bei Menschen mit höherer Empathiefähigkeit häufiger auftritt.\u201C",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SET 2 - LEICHT
// ---------------------------------------------------------------------------
const set2: TVTextSet = {
  id: "tv-set-2",
  name: "Textverständnis Set 2",
  difficulty: "leicht",
  texts: [
    {
      id: "tv2-text1",
      title: "Das Blutgruppensystem",
      content:
        "Das bekannteste Blutgruppensystem ist das AB0-System, das 1901 vom österreichischen " +
        "Arzt Karl Landsteiner entdeckt wurde. Es unterscheidet vier Hauptblutgruppen: A, B, AB " +
        "und 0. Die Einteilung basiert auf dem Vorhandensein bestimmter Antigene auf der " +
        "Oberfläche der roten Blutkörperchen. Menschen mit Blutgruppe A tragen das A-Antigen, " +
        "Menschen mit Blutgruppe B das B-Antigen, Menschen mit Blutgruppe AB beide Antigene und " +
        "Menschen mit Blutgruppe 0 keines der beiden. Zusätzlich besitzt das Blutplasma " +
        "Antikörper gegen die jeweils fehlenden Antigene: Blutgruppe A hat Anti-B-Antikörper, " +
        "Blutgruppe B hat Anti-A-Antikörper, Blutgruppe 0 hat beide Antikörper und Blutgruppe " +
        "AB hat keine. Bei einer Bluttransfusion muss die Verträglichkeit beachtet werden, da " +
        "die Antikörper des Empfängers die fremden roten Blutkörperchen verklumpen lassen können, " +
        "was lebensbedrohlich ist. Menschen mit Blutgruppe 0 gelten als Universalspender für " +
        "rote Blutkörperchen, da ihre Erythrozyten keine A- oder B-Antigene tragen. Neben dem " +
        "AB0-System gibt es den Rhesusfaktor, der ebenfalls von Landsteiner mitentdeckt wurde " +
        "und bei Schwangerschaften eine besondere Rolle spielt, wenn Mutter und Kind " +
        "unterschiedliche Rhesusfaktoren haben.",
      questions: [
        {
          id: "tv2-t1-q1",
          question: "Welche Antikörper besitzt laut Text eine Person mit Blutgruppe 0?",
          options: [
            "Nur Anti-A-Antikörper",
            "Nur Anti-B-Antikörper",
            "Sowohl Anti-A- als auch Anti-B-Antikörper",
            "Weder Anti-A- noch Anti-B-Antikörper",
            "Anti-AB-Antikörper als Einzelmolekül",
          ],
          correctOption: 2,
          explanation:
            "Der Text besagt: \u201EBlutgruppe 0 hat beide Antikörper\u201C \u2013 also sowohl Anti-A als auch Anti-B.",
        },
        {
          id: "tv2-t1-q2",
          question: "Warum gelten Personen mit Blutgruppe 0 laut Text als Universalspender?",
          options: [
            "Weil ihr Plasma keine Antikörper enthält",
            "Weil ihre Erythrozyten keine A- oder B-Antigene tragen",
            "Weil sie den häufigsten Rhesusfaktor besitzen",
            "Weil ihr Blut die meisten Gerinnungsfaktoren enthält",
            "Weil ihre roten Blutkörperchen besonders klein und flexibel sind",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201Eda ihre Erythrozyten keine A- oder B-Antigene tragen\u201C.",
        },
        {
          id: "tv2-t1-q3",
          question: "Wann und von wem wurde das AB0-Blutgruppensystem laut Text entdeckt?",
          options: [
            "1877 von Ferdinand von Richthofen",
            "1901 vom österreichischen Arzt Karl Landsteiner",
            "1920 von Edward Thorndike in den USA",
            "1945 von einem internationalen Forscherteam",
            "1899 von einem britischen Chirurgen",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt: „das AB0-System, das 1901 vom österreichischen Arzt Karl Landsteiner entdeckt wurde“.",
        },
      ],
    },
    {
      id: "tv2-text2",
      title: "Das Bienensterben",
      content:
        "Seit Beginn des 21. Jahrhunderts beobachten Wissenschaftler weltweit einen alarmierenden " +
        "Rückgang der Bienenpopulationen. Dieses Phänomen, das als Colony Collapse Disorder (CCD) " +
        "bekannt wurde, äußert sich darin, dass Arbeiterbienen plötzlich und ohne erkennbare " +
        "Ursache ihren Stock verlassen und nicht zurückkehren. Die Ursachen sind vielfältig und " +
        "wirken vermutlich zusammen: Pestizide aus der Landwirtschaft, insbesondere Neonicotinoide, " +
        "schädigen das Nervensystem der Bienen und beeinträchtigen ihre Orientierungsfähigkeit. " +
        "Parasiten wie die Varroamilbe schwächen die Bienenvölker zusätzlich, indem sie sich von " +
        "der Körperflüssigkeit der Bienen ernähren und Viren übertragen. Der Verlust von " +
        "Blühflächen durch intensive Landwirtschaft reduziert das Nahrungsangebot, und der " +
        "Klimawandel verschiebt die Blühzeiten von Pflanzen, sodass sie nicht mehr mit den " +
        "Aktivitätszyklen der Bienen übereinstimmen. Die Folgen des Bienensterbens sind " +
        "weitreichend: Etwa 75 Prozent der weltweit wichtigsten Nutzpflanzen sind zumindest " +
        "teilweise auf die Bestäubung durch Insekten angewiesen. Ein anhaltender Rückgang der " +
        "Bienen könnte daher erhebliche Auswirkungen auf die globale Nahrungsmittelproduktion haben.",
      questions: [
        {
          id: "tv2-t2-q1",
          question: "Wie äußert sich Colony Collapse Disorder laut Text?",
          options: [
            "Die Bienenkönigin stirbt und das Volk löst sich auf",
            "Die Bienen produzieren keinen Honig mehr und verhungern",
            "Arbeiterbienen verlassen plötzlich den Stock und kehren nicht zurück",
            "Die Larven entwickeln sich nicht mehr zu erwachsenen Bienen",
            "Die Bienenstöcke werden von Varroamilben vollständig zerstört",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt CCD so: \u201Edass Arbeiterbienen plötzlich und ohne erkennbare Ursache ihren Stock verlassen und nicht zurückkehren\u201C.",
        },
        {
          id: "tv2-t2-q2",
          question:
            "Welchen Prozentsatz der Nutzpflanzen nennt der Text als von Insektenbestäubung abhängig?",
          options: [
            "Etwa 25 Prozent",
            "Etwa 50 Prozent",
            "Etwa 60 Prozent",
            "Etwa 75 Prozent",
            "Etwa 90 Prozent",
          ],
          correctOption: 3,
          explanation:
            "Im Text steht: \u201EEtwa 75 Prozent der weltweit wichtigsten Nutzpflanzen sind zumindest teilweise auf die Bestäubung durch Insekten angewiesen.\u201C",
        },
      ],
    },
    {
      id: "tv2-text3",
      title: "Der kindliche Spracherwerb",
      content:
        "Der Erwerb der Muttersprache gehört zu den bemerkenswertesten Leistungen des " +
        "menschlichen Gehirns. Bereits im Mutterleib können Föten Sprachlaute wahrnehmen und " +
        "zeigen nach der Geburt eine Präferenz für die Stimme der Mutter. In den ersten " +
        "Lebensmonaten durchlaufen Säuglinge eine Phase des universellen Lautunterscheidens: " +
        "Sie können Laute aller Sprachen der Welt voneinander unterscheiden, eine Fähigkeit, " +
        "die im Laufe des ersten Lebensjahres auf die Laute der Umgebungssprache eingeengt " +
        "wird. Mit etwa sechs Monaten beginnen Kinder zu lallen, zunächst mit einfachen " +
        "Silbenwiederholungen wie \u201Ebababa\u201C. Die ersten verständlichen Wörter erscheinen " +
        "typischerweise zwischen dem zehnten und vierzehnten Lebensmonat. Um den zweiten " +
        "Geburtstag herum verfügen die meisten Kinder über einen aktiven Wortschatz von " +
        "etwa 50 bis 200 Wörtern und beginnen, Zwei-Wort-Sätze zu bilden. Die sogenannte " +
        "Wortschatzexplosion, bei der Kinder täglich mehrere neue Wörter lernen, setzt " +
        "typischerweise zwischen dem 18. und 24. Lebensmonat ein. Bis zum Schuleintritt " +
        "beherrschen die meisten Kinder die grundlegende Grammatik ihrer Muttersprache " +
        "weitgehend fehlerfrei, obwohl sie nie formalen Grammatikunterricht erhalten haben.",
      questions: [
        {
          id: "tv2-t3-q1",
          question:
            "Was wird im Text über die Fähigkeit von Säuglingen zur Lautunterscheidung gesagt?",
          options: [
            "Sie können von Geburt an nur die Laute ihrer Muttersprache unterscheiden",
            "Sie können anfangs Laute aller Sprachen unterscheiden, verlieren diese Fähigkeit aber im ersten Lebensjahr",
            "Sie erwerben die Fähigkeit zur Lautunterscheidung erst mit dem Lallen ab sechs Monaten",
            "Sie können nur Vokale, aber keine Konsonanten unterscheiden",
            "Sie können Laute erst ab dem dritten Lebensmonat wahrnehmen",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt: \u201ESie können Laute aller Sprachen der Welt voneinander unterscheiden, eine Fähigkeit, die im Laufe des ersten Lebensjahres auf die Laute der Umgebungssprache eingeengt wird.\u201C",
        },
        {
          id: "tv2-t3-q2",
          question: "Wann setzt laut Text die sogenannte Wortschatzexplosion typischerweise ein?",
          options: [
            "Zwischen dem 6. und 10. Lebensmonat",
            "Zwischen dem 10. und 14. Lebensmonat",
            "Zwischen dem 18. und 24. Lebensmonat",
            "Zwischen dem 24. und 36. Lebensmonat",
            "Erst nach dem dritten Geburtstag",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es: \u201EDie sogenannte Wortschatzexplosion \u2026 setzt typischerweise zwischen dem 18. und 24. Lebensmonat ein.\u201C",
        },
      ],
    },
    {
      id: "tv2-text4",
      title: "Urbanisierung weltweit",
      content:
        "Im Jahr 1950 lebten nur etwa 30 Prozent der Weltbevölkerung in Städten. Heute sind " +
        "es mehr als 56 Prozent, und die Vereinten Nationen prognostizieren, dass bis 2050 " +
        "fast 70 Prozent der Menschen in urbanen Räumen wohnen werden. Die Gründe für diese " +
        "Landflucht sind vielfältig: Städte bieten in der Regel bessere Bildungs- und " +
        "Beschäftigungsmöglichkeiten, eine umfassendere Gesundheitsversorgung und eine größere " +
        "kulturelle Vielfalt. Gleichzeitig bringt die rasche Urbanisierung erhebliche " +
        "Herausforderungen mit sich. In vielen Entwicklungsländern wachsen Städte schneller als " +
        "die Infrastruktur, was zur Entstehung informeller Siedlungen führt, in denen Menschen " +
        "ohne Zugang zu sauberem Wasser, Abwasserentsorgung und Elektrizität leben. Auch in " +
        "Industrieländern zeigt Urbanisierung Schattenseiten: steigende Mietpreise verdrängen " +
        "einkommensschwache Bevölkerungsgruppen aus den Innenstädten, ein Phänomen, das als " +
        "Gentrifizierung bekannt ist. Darüber hinaus tragen Städte überproportional zum " +
        "Klimawandel bei, da sie für etwa 70 Prozent der globalen CO\u2082-Emissionen verantwortlich " +
        "sind. Nachhaltige Stadtplanung \u2013 etwa durch den Ausbau öffentlicher Verkehrsmittel, " +
        "Grünflächen und energieeffizienter Gebäude \u2013 gilt daher als eine der zentralen " +
        "Aufgaben des 21. Jahrhunderts.",
      questions: [
        {
          id: "tv2-t4-q1",
          question: "Was versteht man laut Text unter Gentrifizierung?",
          options: [
            "Den Bau moderner Hochhäuser in Vorstädten",
            "Die Verdrängung einkommensschwacher Bevölkerungsgruppen aus den Innenstädten durch steigende Mieten",
            "Die Abwanderung junger Menschen aus ländlichen Gebieten",
            "Die Entstehung informeller Siedlungen in Entwicklungsländern",
            "Die gezielte Ansiedlung von Industriebetrieben in Wohngebieten",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt Gentrifizierung als Phänomen, bei dem \u201Esteigende Mietpreise einkommensschwache Bevölkerungsgruppen aus den Innenstädten verdrängen\u201C.",
        },
        {
          id: "tv2-t4-q2",
          question:
            "Welchen Anteil an den globalen CO\u2082-Emissionen schreibt der Text den Städten zu?",
          options: [
            "Etwa 30 Prozent",
            "Etwa 40 Prozent",
            "Etwa 56 Prozent",
            "Etwa 70 Prozent",
            "Etwa 85 Prozent",
          ],
          correctOption: 3,
          explanation:
            "Im Text steht: \u201Eda sie für etwa 70 Prozent der globalen CO\u2082-Emissionen verantwortlich sind\u201C.",
        },
        {
          id: "tv2-t4-q3",
          question: "Welche Prognose der Vereinten Nationen wird im Text erwähnt?",
          options: [
            "Bis 2050 werden 56 Prozent der Menschen in Städten leben",
            "Bis 2050 werden fast 70 Prozent der Menschen in urbanen Räumen wohnen",
            "Bis 2100 werden alle Menschen in Megastädten leben",
            "Bis 2030 wird die Landflucht gestoppt sein",
            "Bis 2050 werden mehr Menschen auf dem Land als in der Stadt leben",
          ],
          correctOption: 1,
          explanation:
            "Der Text sagt: \u201Edie Vereinten Nationen prognostizieren, dass bis 2050 fast 70 Prozent der Menschen in urbanen Räumen wohnen werden\u201C.",
        },
      ],
    },
    {
      id: "tv2-text5",
      title: "Sokrates und die Mäeutik",
      content:
        "Sokrates, der um 469 v. Chr. in Athen geboren wurde, gilt als einer der Begründer " +
        "der abendländischen Philosophie, obwohl er selbst keine schriftlichen Werke " +
        "hinterließ. Sein Denken ist hauptsächlich durch die Dialoge seines Schülers Platon " +
        "überliefert. Sokrates' Methode, die als Mäeutik oder \u201EHebammenkunst\u201C bezeichnet wird, " +
        "bestand darin, durch gezieltes Fragen sein Gegenüber dazu zu bringen, eigene Einsichten " +
        "zu entwickeln. Er verglich sich dabei mit einer Hebamme, die nicht selbst gebiert, " +
        "sondern anderen bei der Geburt hilft \u2013 in seinem Fall bei der \u201EGeburt\u201C von Erkenntnis. " +
        "Sokrates behauptete von sich selbst, nichts zu wissen, und sah gerade in diesem " +
        "Bewusstsein des eigenen Nicht-Wissens einen Vorteil gegenüber jenen, die fälschlich " +
        "glaubten, im Besitz sicherer Wahrheiten zu sein. Diese Haltung brachte ihm jedoch " +
        "auch Feinde ein. Im Jahr 399 v. Chr. wurde er wegen angeblicher Verführung der Jugend " +
        "und Gottlosigkeit angeklagt und zum Tode durch den Schierlingsbecher verurteilt. " +
        "Obwohl ihm die Flucht ermöglicht worden wäre, entschied sich Sokrates, das Urteil " +
        "anzunehmen, da er die Gesetze der Stadt nicht brechen wollte.",
      questions: [
        {
          id: "tv2-t5-q1",
          question: "Was versteht man laut Text unter der \u201EMäeutik\u201C des Sokrates?",
          options: [
            "Eine Methode, bei der der Lehrer dem Schüler die richtige Antwort vorgibt",
            "Eine Methode des gezielten Fragens, um das Gegenüber zu eigenen Einsichten zu führen",
            "Eine rhetorische Technik, um politische Gegner in Debatten zu besiegen",
            "Eine Form der Meditation, die zur inneren Erleuchtung führen soll",
            "Eine schriftliche Lehrmethode, die Sokrates in seinen Büchern beschrieb",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt die Mäeutik als Methode, \u201Edurch gezieltes Fragen sein Gegenüber dazu zu bringen, eigene Einsichten zu entwickeln\u201C.",
        },
        {
          id: "tv2-t5-q2",
          question: "Warum lehnte Sokrates laut Text die Möglichkeit zur Flucht ab?",
          options: [
            "Weil er glaubte, nach dem Tod in einer besseren Welt zu leben",
            "Weil er die Gesetze der Stadt nicht brechen wollte",
            "Weil er zu alt und krank für eine Flucht war",
            "Weil seine Schüler ihm davon abrieten",
            "Weil er seine Unschuld beweisen wollte",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201Eda er die Gesetze der Stadt nicht brechen wollte\u201C.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SET 3 - MITTEL
// ---------------------------------------------------------------------------
const set3: TVTextSet = {
  id: "tv-set-3",
  name: "Textverständnis Set 3",
  difficulty: "mittel",
  texts: [
    {
      id: "tv3-text1",
      title: "Der Placebo-Effekt in der Medizin",
      content:
        "Der Placebo-Effekt bezeichnet die messbare Verbesserung des Gesundheitszustands eines " +
        "Patienten, die nicht auf die pharmakologische Wirkung eines Medikaments zurückzuführen " +
        "ist, sondern auf die Erwartungshaltung und den Glauben an die Wirksamkeit einer " +
        "Behandlung. In klinischen Studien erhalten Kontrollgruppen häufig Placebos \u2013 " +
        "Scheinmedikamente ohne Wirkstoff \u2013, um die tatsächliche Wirkung eines neuen Medikaments " +
        "vom Placebo-Effekt abzugrenzen. Erstaunlicherweise zeigen Placebos in manchen Bereichen " +
        "erhebliche Wirkungen: Bei Schmerzstudien berichten bis zu 30 Prozent der " +
        "Placebo-Empfänger über eine deutliche Schmerzlinderung. Neurowissenschaftliche " +
        "Untersuchungen haben gezeigt, dass Placebos tatsächlich die Ausschüttung körpereigener " +
        "Schmerzmittel \u2013 sogenannter Endorphine \u2013 anregen können. Interessant ist auch, dass die " +
        "Darreichungsform den Placebo-Effekt beeinflusst: Injektionen wirken stärker als " +
        "Tabletten, teure Placebos stärker als billige, und auch die Farbe von Kapseln spielt " +
        "eine Rolle \u2013 rote Kapseln werden als stimulierend, blaue als beruhigend wahrgenommen. " +
        "Ethisch umstritten ist die bewusste Verabreichung von Placebos in der klinischen " +
        "Praxis. Neuere Studien zeigen jedoch, dass sogenannte offene Placebos \u2013 bei denen der " +
        "Patient weiß, dass er ein Placebo erhält \u2013 in einigen Fällen dennoch wirksam sein " +
        "können, was die bisherige Annahme in Frage stellt, dass Täuschung eine notwendige " +
        "Voraussetzung für den Placebo-Effekt sei.",
      questions: [
        {
          id: "tv3-t1-q1",
          question: "Welche Erkenntnis über offene Placebos wird im Text beschrieben?",
          options: [
            "Offene Placebos sind immer wirksamer als verdeckte Placebos",
            "Offene Placebos funktionieren nur bei Schmerzpatienten",
            "Offene Placebos können in einigen Fällen wirksam sein, obwohl der Patient über das Placebo informiert ist",
            "Offene Placebos sind ethisch unumstritten und werden flächendeckend eingesetzt",
            "Offene Placebos lösen keine Endorphinausschüttung aus",
          ],
          correctOption: 2,
          explanation:
            "Der Text besagt: \u201Esogenannte offene Placebos \u2013 bei denen der Patient weiß, dass er ein Placebo erhält \u2013 in einigen Fällen dennoch wirksam sein können\u201C.",
        },
        {
          id: "tv3-t1-q2",
          question: "Welchen Einfluss hat laut Text die Darreichungsform auf den Placebo-Effekt?",
          options: [
            "Die Darreichungsform hat keinen messbaren Einfluss auf den Placebo-Effekt",
            "Tabletten wirken stärker als Injektionen, da sie einfacher einzunehmen sind",
            "Injektionen wirken stärker als Tabletten, und auch Preis und Farbe spielen eine Rolle",
            "Nur die Farbe, nicht aber die Form der Verabreichung beeinflusst den Effekt",
            "Der Placebo-Effekt tritt ausschließlich bei intravenöser Gabe auf",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es: \u201EInjektionen wirken stärker als Tabletten, teure Placebos stärker als billige, und auch die Farbe von Kapseln spielt eine Rolle.\u201C",
        },
      ],
    },
    {
      id: "tv3-text2",
      title: "Quantencomputer und ihre Möglichkeiten",
      content:
        "Während klassische Computer Informationen in Form von Bits verarbeiten, die entweder " +
        "den Zustand 0 oder 1 annehmen können, nutzen Quantencomputer sogenannte Qubits. " +
        "Das Besondere an Qubits ist, dass sie sich dank des quantenmechanischen Prinzips der " +
        "Superposition gleichzeitig in mehreren Zuständen befinden können \u2013 also gewissermaßen " +
        "0 und 1 zugleich sein können, bis sie gemessen werden. Ein weiteres zentrales Prinzip " +
        "ist die Verschränkung: Zwei verschränkte Qubits sind so miteinander verbunden, dass " +
        "der Zustand des einen den Zustand des anderen unmittelbar beeinflusst, unabhängig von " +
        "der räumlichen Entfernung. Diese Eigenschaften ermöglichen es Quantencomputern, " +
        "bestimmte Berechnungen exponentiell schneller durchzuführen als klassische Computer. " +
        "Potenzielle Anwendungsfelder umfassen die Simulation von Molekülen für die " +
        "Medikamentenentwicklung, die Optimierung komplexer logistischer Systeme und die " +
        "Kryptografie. Allerdings stehen Quantencomputer noch vor erheblichen technischen " +
        "Herausforderungen. Qubits sind extrem empfindlich gegenüber Umgebungseinflüssen wie " +
        "Temperatur und elektromagnetischer Strahlung, weshalb sie in der Regel bei " +
        "Temperaturen nahe dem absoluten Nullpunkt \u2013 also bei etwa minus 273 Grad Celsius \u2013 " +
        "betrieben werden müssen. Fehlerraten sind derzeit noch hoch, und die Entwicklung " +
        "fehlerkorrigierender Verfahren gilt als eine der größten Herausforderungen auf dem " +
        "Weg zu praxistauglichen Quantencomputern.",
      questions: [
        {
          id: "tv3-t2-q1",
          question: "Was unterscheidet laut Text Qubits von klassischen Bits?",
          options: [
            "Qubits können nur den Zustand 0 annehmen, während Bits 0 oder 1 sein können",
            "Qubits können sich dank Superposition gleichzeitig in mehreren Zuständen befinden",
            "Qubits arbeiten langsamer, sind dafür aber energieeffizienter als Bits",
            "Qubits speichern Informationen dauerhaft, während Bits sie nur temporär halten",
            "Qubits benötigen keine elektrische Energie, um Informationen zu verarbeiten",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt: \u201EQubits \u2026 können sich dank des quantenmechanischen Prinzips der Superposition gleichzeitig in mehreren Zuständen befinden.\u201C",
        },
        {
          id: "tv3-t2-q2",
          question:
            "Welche technische Herausforderung bei Quantencomputern wird im Text NICHT genannt?",
          options: [
            "Die Empfindlichkeit der Qubits gegenüber Umgebungseinflüssen",
            "Die Notwendigkeit extrem niedriger Betriebstemperaturen",
            "Die derzeit hohen Fehlerraten",
            "Die Entwicklung fehlerkorrigierender Verfahren",
            "Der hohe Stromverbrauch der Quantenprozessoren",
          ],
          correctOption: 4,
          explanation:
            "Der hohe Stromverbrauch wird im Text nicht als Herausforderung genannt. Die anderen Optionen werden alle explizit erwähnt.",
        },
        {
          id: "tv3-t2-q3",
          question: "Welches Anwendungsfeld für Quantencomputer wird im Text erwähnt?",
          options: [
            "Die automatische Übersetzung natürlicher Sprachen",
            "Die Steuerung autonomer Fahrzeuge",
            "Die Simulation von Molekülen für die Medikamentenentwicklung",
            "Die Erkennung von Gesichtern in Echtzeit",
            "Die Vorhersage von Börsenkursen",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt explizit \u201Edie Simulation von Molekülen für die Medikamentenentwicklung\u201C als Anwendungsfeld.",
        },
      ],
    },
    {
      id: "tv3-text3",
      title: "Mikroplastik in der Umwelt",
      content:
        "Als Mikroplastik werden Kunststoffpartikel mit einer Größe von weniger als fünf " +
        "Millimetern bezeichnet. Man unterscheidet zwischen primärem Mikroplastik, das " +
        "industriell in dieser Größe hergestellt wird \u2013 beispielsweise als Schleifmittel in " +
        "Kosmetikprodukten oder als Granulat für die Kunststoffproduktion \u2013, und sekundärem " +
        "Mikroplastik, das durch den Zerfall größerer Kunststoffteile entsteht. Wind, Wellen " +
        "und UV-Strahlung zersetzen Plastikabfälle in immer kleinere Fragmente, ohne sie " +
        "chemisch vollständig abzubauen. Mikroplastik wurde inzwischen in nahezu allen " +
        "Ökosystemen nachgewiesen: in Ozeanen, Flüssen, Böden, in arktischem Eis und sogar " +
        "in der Luft. Über die Nahrungskette gelangt es in die Körper von Tieren und Menschen. " +
        "Studien haben Mikroplastik in menschlichem Blut, in der Plazenta schwangerer Frauen " +
        "und in der Muttermilch gefunden. Die gesundheitlichen Auswirkungen sind noch nicht " +
        "abschließend geklärt, doch es gibt Hinweise darauf, dass Mikroplastikpartikel " +
        "Entzündungsreaktionen auslösen, Schadstoffe wie Weichmacher und Schwermetalle binden " +
        "und transportieren und möglicherweise das Hormonsystem beeinflussen können. Die " +
        "Europäische Union hat auf diese Erkenntnisse reagiert und ein schrittweises Verbot von " +
        "absichtlich zugesetztem Mikroplastik in Produkten beschlossen, das ab 2023 stufenweise " +
        "in Kraft tritt.",
      questions: [
        {
          id: "tv3-t3-q1",
          question:
            "Was ist laut Text der Unterschied zwischen primärem und sekundärem Mikroplastik?",
          options: [
            "Primäres Mikroplastik ist größer als fünf Millimeter, sekundäres kleiner",
            "Primäres wird industriell in kleiner Größe hergestellt, sekundäres entsteht durch Zerfall größerer Kunststoffteile",
            "Primäres ist biologisch abbaubar, sekundäres nicht",
            "Primäres kommt nur in Ozeanen vor, sekundäres nur an Land",
            "Primäres ist für den Menschen ungefährlich, sekundäres hingegen toxisch",
          ],
          correctOption: 1,
          explanation:
            "Der Text unterscheidet: primäres Mikroplastik wird \u201Eindustriell in dieser Größe hergestellt\u201C, sekundäres \u201Eentsteht durch den Zerfall größerer Kunststoffteile\u201C.",
        },
        {
          id: "tv3-t3-q2",
          question:
            "Welche möglichen gesundheitlichen Auswirkungen von Mikroplastik werden im Text genannt?",
          options: [
            "Ausschließlich allergische Hautreaktionen",
            "Störungen des Sehvermögens und des Gehörs",
            "Entzündungsreaktionen, Transport von Schadstoffen und mögliche Beeinflussung des Hormonsystems",
            "Akute Vergiftungserscheinungen und Organversagen",
            "Ausschließlich Krebserkrankungen der Atemwege",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt: \u201EEntzündungsreaktionen auslösen, Schadstoffe wie Weichmacher und Schwermetalle binden und transportieren und möglicherweise das Hormonsystem beeinflussen.\u201C",
        },
      ],
    },
    {
      id: "tv3-text4",
      title: "Die Industrielle Revolution und ihre Folgen",
      content:
        "Die Industrielle Revolution, die in der zweiten Hälfte des 18. Jahrhunderts in " +
        "Großbritannien begann, markiert einen der tiefgreifendsten Umbrüche in der " +
        "Menschheitsgeschichte. Die Erfindung und Weiterentwicklung der Dampfmaschine durch " +
        "James Watt ermöglichte es erstmals, mechanische Energie in großem Maßstab zu nutzen, " +
        "was die Textilproduktion, den Bergbau und das Transportwesen revolutionierte. Die " +
        "Folgen waren weitreichend und ambivalent. Einerseits führte die Industrialisierung " +
        "zu einem enormen Anstieg der Produktivität und langfristig zu einem höheren " +
        "Lebensstandard für breite Bevölkerungsschichten. Andererseits waren die sozialen " +
        "Kosten zunächst erheblich: Millionen von Landarbeitern strömten in die Städte, wo " +
        "sie unter miserablen Bedingungen in Fabriken arbeiteten \u2013 Arbeitstage von 14 bis " +
        "16 Stunden, Kinderarbeit und fehlender Arbeitsschutz waren die Regel. Die " +
        "Umweltverschmutzung nahm drastisch zu; Flüsse wurden zu Abwasserkanälen und die " +
        "Luftqualität in Industriestädten war gesundheitsschädlich. Als Reaktion auf diese " +
        "Missstände entstanden Arbeiterbewegungen und Gewerkschaften, die schrittweise " +
        "Verbesserungen erkämpften: kürzere Arbeitszeiten, ein Verbot der Kinderarbeit und " +
        "erste Ansätze einer Sozialgesetzgebung. Die Industrielle Revolution legte damit " +
        "nicht nur den Grundstein für die moderne Wirtschaft, sondern auch für den modernen " +
        "Sozialstaat.",
      questions: [
        {
          id: "tv3-t4-q1",
          question: "Welche Rolle spielte James Watt laut Text in der Industriellen Revolution?",
          options: [
            "Er erfand die erste Textilfabrik in Großbritannien",
            "Er entwickelte die Dampfmaschine weiter und ermöglichte die Nutzung mechanischer Energie im großen Maßstab",
            "Er gründete die erste Gewerkschaft zum Schutz der Arbeiter",
            "Er initiierte die erste Sozialgesetzgebung in England",
            "Er erfand die Eisenbahn und revolutionierte damit den Personenverkehr",
          ],
          correctOption: 1,
          explanation:
            "Der Text besagt: \u201EDie Erfindung und Weiterentwicklung der Dampfmaschine durch James Watt ermöglichte es erstmals, mechanische Energie in großem Maßstab zu nutzen.\u201C",
        },
        {
          id: "tv3-t4-q2",
          question:
            "Welche Reaktion auf die Missstände der Industrialisierung wird im Text beschrieben?",
          options: [
            "Die Rückkehr der Arbeiter in die Landwirtschaft",
            "Die Entstehung von Arbeiterbewegungen und Gewerkschaften, die Verbesserungen erkämpften",
            "Die vollständige Abschaffung der Fabrikarbeit durch Gesetze",
            "Die Einführung von Maschinen, die keine menschliche Arbeit mehr erforderten",
            "Ein europaweites Verbot der Dampfmaschine aus Sicherheitsgründen",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt: \u201EAls Reaktion auf diese Missstände entstanden Arbeiterbewegungen und Gewerkschaften, die schrittweise Verbesserungen erkämpften.\u201C",
        },
        {
          id: "tv3-t4-q3",
          question: "Wie beschreibt der Text die Folgen der Industriellen Revolution insgesamt?",
          options: [
            "Als ausschließlich positiv für alle Bevölkerungsschichten",
            "Als katastrophal und ohne jegliche Vorteile",
            "Als ambivalent \u2013 mit Produktivitätssteigerungen einerseits und erheblichen sozialen Kosten andererseits",
            "Als unbedeutend für die weitere gesellschaftliche Entwicklung",
            "Als kurzfristiges Phänomen, das sich innerhalb weniger Jahre wieder umkehrte",
          ],
          correctOption: 2,
          explanation:
            "Der Text verwendet das Wort \u201Eambivalent\u201C und beschreibt sowohl positive Aspekte (Produktivitätsanstieg) als auch negative (soziale Kosten).",
        },
      ],
    },
    {
      id: "tv3-text5",
      title: "Warum Musik Emotionen auslöst",
      content:
        "Musik hat die bemerkenswerte Fähigkeit, starke emotionale Reaktionen hervorzurufen \u2013 " +
        "von Freude und Euphorie bis hin zu Trauer und Nostalgie. Neurowissenschaftliche " +
        "Untersuchungen zeigen, dass beim Hören von als angenehm empfundener Musik das " +
        "Belohnungssystem des Gehirns aktiviert wird, insbesondere der Nucleus accumbens, " +
        "der auch bei anderen Belohnungsreizen wie Nahrung oder sozialer Interaktion eine " +
        "Rolle spielt. Dabei wird der Neurotransmitter Dopamin ausgeschüttet, was das " +
        "Glücksgefühl erklärt, das viele Menschen beim Musikhören empfinden. Besonders " +
        "intensiv sind die emotionalen Reaktionen an sogenannten musikalischen Höhepunkten \u2013 " +
        "Momenten, in denen eine Melodie eine erwartete Auflösung erreicht oder eine unerwartete " +
        "harmonische Wendung nimmt. Dieses Wechselspiel aus Erwartung und Überraschung scheint " +
        "ein Schlüsselelement der emotionalen Wirkung von Musik zu sein. Kulturelle Prägung " +
        "spielt ebenfalls eine Rolle: Dur-Tonarten werden in westlichen Kulturen typischerweise " +
        "als fröhlich empfunden, Moll-Tonarten als traurig, doch diese Zuordnung ist nicht " +
        "universell. Studien mit Angehörigen isolierter Gemeinschaften, die mit westlicher " +
        "Musik nicht vertraut waren, zeigten, dass die emotionale Interpretation von Dur und " +
        "Moll kulturell erlernt und nicht angeboren ist.",
      questions: [
        {
          id: "tv3-t5-q1",
          question:
            "Was zeigen laut Text die Studien mit Angehörigen isolierter Gemeinschaften über die Wahrnehmung von Dur und Moll?",
          options: [
            "Dass alle Menschen Dur als fröhlich und Moll als traurig empfinden",
            "Dass die emotionale Interpretation von Dur und Moll kulturell erlernt und nicht angeboren ist",
            "Dass isolierte Gemeinschaften keine emotionale Reaktion auf Musik zeigen",
            "Dass Moll-Tonarten universell als bedrohlich wahrgenommen werden",
            "Dass Dur-Tonarten in allen Kulturen beruhigend wirken",
          ],
          correctOption: 1,
          explanation:
            "Der Text stellt fest: \u201Edie emotionale Interpretation von Dur und Moll kulturell erlernt und nicht angeboren ist\u201C.",
        },
        {
          id: "tv3-t5-q2",
          question: "Was passiert laut Text an \u201Emusikalischen Höhepunkten\u201C?",
          options: [
            "Das Gehirn schaltet in einen Ruhezustand, um die Musik besser zu verarbeiten",
            "Eine Melodie erreicht eine erwartete Auflösung oder nimmt eine unerwartete harmonische Wendung",
            "Der Zuhörer verliert vorübergehend das Zeitgefühl",
            "Die Herzfrequenz des Zuhörers sinkt deutlich ab",
            "Der Nucleus accumbens wird vollständig deaktiviert",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt musikalische Höhepunkte als \u201EMomente, in denen eine Melodie eine erwartete Auflösung erreicht oder eine unerwartete harmonische Wendung nimmt\u201C.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SET 4 - MITTEL
// ---------------------------------------------------------------------------
const set4: TVTextSet = {
  id: "tv-set-4",
  name: "Textverständnis Set 4",
  difficulty: "mittel",
  texts: [
    {
      id: "tv4-text1",
      title: "Epigenetik: Gene und Umwelt",
      content:
        "Die Epigenetik untersucht Veränderungen der Genaktivität, die nicht auf Änderungen " +
        "der DNA-Sequenz selbst zurückgehen, sondern auf chemische Modifikationen, die " +
        "bestimmen, ob und wie stark ein Gen abgelesen wird. Die bekannteste dieser " +
        "Modifikationen ist die DNA-Methylierung, bei der Methylgruppen an bestimmte Stellen " +
        "der DNA angelagert werden und so das Ablesen eines Gens unterdrücken können. Auch " +
        "Veränderungen an Histonen \u2013 den Proteinen, um die die DNA gewickelt ist \u2013 beeinflussen " +
        "die Genaktivität. Das Revolutionäre an der Epigenetik ist die Erkenntnis, dass " +
        "Umweltfaktoren wie Ernährung, Stress, Schadstoffbelastung und soziale Erfahrungen " +
        "epigenetische Veränderungen hervorrufen können. Tierversuche haben gezeigt, dass " +
        "Stress bei trächtigen Mäusen epigenetische Veränderungen im Nachwuchs bewirken kann, " +
        "die dessen Stressreaktion dauerhaft beeinflusst. Noch bemerkenswerter ist die " +
        "Beobachtung, dass manche epigenetischen Veränderungen über Generationen hinweg " +
        "weitergegeben werden können \u2013 ein Phänomen, das als transgenerationale epigenetische " +
        "Vererbung bezeichnet wird. Diese Erkenntnisse haben auch Auswirkungen auf die Medizin: " +
        "Fehlregulierte epigenetische Mechanismen werden mit der Entstehung von Krebs, " +
        "Autoimmunerkrankungen und psychischen Störungen in Verbindung gebracht, und " +
        "epigenetische Therapien sind ein wachsendes Forschungsfeld.",
      questions: [
        {
          id: "tv4-t1-q1",
          question:
            "Was versteht man laut Text unter transgenerationaler epigenetischer Vererbung?",
          options: [
            "Die Weitergabe von Mutationen in der DNA-Sequenz an die nächste Generation",
            "Die Weitergabe epigenetischer Veränderungen über Generationen hinweg",
            "Die Vererbung erworbener körperlicher Merkmale wie Muskelmasse",
            "Die Übertragung von Viren von einer Generation zur nächsten",
            "Die Vererbung von Verhaltensweisen durch Nachahmung der Eltern",
          ],
          correctOption: 1,
          explanation:
            "Der Text definiert: \u201Emanche epigenetischen Veränderungen über Generationen hinweg weitergegeben werden können \u2013 ein Phänomen, das als transgenerationale epigenetische Vererbung bezeichnet wird\u201C.",
        },
        {
          id: "tv4-t1-q2",
          question: "Was ist laut Text die Funktion der DNA-Methylierung?",
          options: [
            "Sie verändert die DNA-Sequenz durch Einfügen neuer Basenpaare",
            "Sie lagert Methylgruppen an die DNA an und kann so das Ablesen eines Gens unterdrücken",
            "Sie repariert beschädigte DNA-Abschnitte nach Strahlenbelastung",
            "Sie beschleunigt die Zellteilung durch Aktivierung aller Gene",
            "Sie schützt die DNA vor dem Abbau durch Enzyme",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201Ebei der Methylgruppen an bestimmte Stellen der DNA angelagert werden und so das Ablesen eines Gens unterdrücken können\u201C.",
        },
        {
          id: "tv4-t1-q3",
          question: "Welche medizinische Relevanz der Epigenetik wird im Text beschrieben?",
          options: [
            "Epigenetik hat ausschließlich Bedeutung für die Pflanzenforschung",
            "Fehlregulierte epigenetische Mechanismen werden mit Krebs, Autoimmunerkrankungen und psychischen Störungen in Verbindung gebracht",
            "Epigenetik kann genutzt werden, um die DNA-Sequenz gezielt umzuschreiben",
            "Epigenetische Therapien haben alle herkömmlichen Krebsbehandlungen ersetzt",
            "Epigenetik ist nur relevant für Erkrankungen des Nervensystems",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt: \u201EFehlregulierte epigenetische Mechanismen werden mit der Entstehung von Krebs, Autoimmunerkrankungen und psychischen Störungen in Verbindung gebracht.\u201C",
        },
      ],
    },
    {
      id: "tv4-text2",
      title: "Der Utilitarismus als ethische Theorie",
      content:
        "Der Utilitarismus ist eine ethische Theorie, die im 18. und 19. Jahrhundert " +
        "maßgeblich von den britischen Philosophen Jeremy Bentham und John Stuart Mill " +
        "entwickelt wurde. Ihr Grundprinzip lautet, dass eine Handlung dann moralisch richtig " +
        "ist, wenn sie das größtmögliche Glück für die größtmögliche Zahl von Menschen " +
        "hervorbringt. Bentham formulierte das \u201EPrinzip der Nützlichkeit\u201C und versuchte, Glück " +
        "quantitativ zu messen \u2013 anhand von Kriterien wie Intensität, Dauer, Gewissheit und " +
        "Nähe eines Vergnügens. Mill modifizierte diesen Ansatz, indem er zwischen höheren und " +
        "niederen Freuden unterschied: Intellektülle und moralische Freuden seien qualitativ " +
        "wertvoller als rein körperliche. Der Utilitarismus hatte großen Einfluss auf " +
        "Gesetzgebung und Sozialpolitik, da er eine rationale Grundlage für die Bewertung " +
        "politischer Maßnahmen bietet. Kritiker wenden jedoch ein, dass die Theorie individülle " +
        "Rechte zugunsten des Gesamtwohls opfern könnte: Wenn die Folter eines Einzelnen das " +
        "Leid vieler verhindert, wäre sie nach streng utilitaristischer Logik gerechtfertigt. " +
        "Zudem sei es praktisch unmöglich, alle Konsequenzen einer Handlung vorherzusehen und " +
        "das Glück verschiedener Menschen vergleichend zu quantifizieren. Moderne Varianten " +
        "wie der Regelutilitarismus versuchen diese Probleme zu lösen, indem sie nicht " +
        "einzelne Handlungen, sondern allgemeine Handlungsregeln nach ihrem Nutzen bewerten.",
      questions: [
        {
          id: "tv4-t2-q1",
          question: "Worin unterschied sich Mills Ansatz laut Text von dem Benthams?",
          options: [
            "Mill lehnte das Prinzip der Nützlichkeit vollständig ab",
            "Mill unterschied zwischen höheren und niederen Freuden und bewertete intellektülle Freuden als qualitativ wertvoller",
            "Mill forderte, Glück ausschließlich anhand der Dauer zu messen",
            "Mill wandte sich gegen jede Form der quantitativen Messung von Glück",
            "Mill beschränkte den Utilitarismus auf ökonomische Fragestellungen",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt: \u201EMill modifizierte diesen Ansatz, indem er zwischen höheren und niederen Freuden unterschied: Intellektülle und moralische Freuden seien qualitativ wertvoller als rein körperliche.\u201C",
        },
        {
          id: "tv4-t2-q2",
          question:
            "Wie versucht der Regelutilitarismus laut Text die Probleme des klassischen Utilitarismus zu lösen?",
          options: [
            "Indem er das Glücksprinzip durch ein Gerechtigkeitsprinzip ersetzt",
            "Indem er nicht einzelne Handlungen, sondern allgemeine Handlungsregeln nach ihrem Nutzen bewertet",
            "Indem er nur die Folgen für die handelnde Person berücksichtigt",
            "Indem er Glück rein quantitativ anhand von Benthams Kriterien misst",
            "Indem er individülle Rechte über das Gemeinwohl stellt",
          ],
          correctOption: 1,
          explanation:
            "Der Text besagt: \u201Eindem sie nicht einzelne Handlungen, sondern allgemeine Handlungsregeln nach ihrem Nutzen bewerten\u201C.",
        },
      ],
    },
    {
      id: "tv4-text3",
      title: "Das Phänomen Déjà-vu",
      content:
        "Fast jeder Mensch hat schon einmal ein Déjà-vu erlebt \u2013 das intensive Gefühl, eine " +
        "Situation bereits zuvor erlebt zu haben, obwohl sie objektiv neu ist. Der Begriff " +
        "stammt aus dem Französischen und bedeutet wörtlich \u201Eschon gesehen\u201C. Studien zufolge " +
        "berichten etwa 60 bis 80 Prozent der Bevölkerung, mindestens einmal ein Déjà-vu " +
        "gehabt zu haben. Das Phänomen tritt besonders häufig bei jungen Erwachsenen auf und " +
        "nimmt mit zunehmendem Alter ab. Die genauen Ursachen sind wissenschaftlich noch nicht " +
        "abschließend geklärt, doch eine führende Hypothese erklärt Déjà-vus als eine Art " +
        "Gedächtnisfehler: Normalerweise wird eine neue Erfahrung zunächst wahrgenommen und " +
        "dann als Erinnerung gespeichert. Bei einem Déjà-vu könnte es zu einer Fehlfunktion " +
        "kommen, bei der das Gehirn eine aktülle Wahrnehmung fälschlicherweise als " +
        "Erinnerung einstuft. Eine andere Theorie besagt, dass Déjà-vus auftreten, wenn " +
        "die aktülle Umgebung einer früheren ähnelt, die nicht mehr bewusst erinnert wird. " +
        "Das Gehirn erkennt die Ähnlichkeit unbewusst, ohne die konkrete Quelle benennen zu " +
        "können. Bemerkenswert ist, dass Déjà-vus bei Epilepsiepatienten mit Temporallappenepilepsie " +
        "deutlich häufiger auftreten und dort sogar als Vorboten eines epileptischen " +
        "Anfalls gelten können, was die Beteiligung des Temporallappens an diesem Phänomen " +
        "nahelegt.",
      questions: [
        {
          id: "tv4-t3-q1",
          question: "Bei welcher Personengruppe treten Déjà-vus laut Text besonders häufig auf?",
          options: [
            "Bei Kindern unter zehn Jahren",
            "Bei jungen Erwachsenen",
            "Bei Personen über 65 Jahre",
            "Ausschließlich bei Epilepsiepatienten",
            "Bei Menschen mit chronischem Schlafmangel",
          ],
          correctOption: 1,
          explanation:
            "Der Text stellt fest: \u201EDas Phänomen tritt besonders häufig bei jungen Erwachsenen auf und nimmt mit zunehmendem Alter ab.\u201C",
        },
        {
          id: "tv4-t3-q2",
          question:
            "Welche führende Hypothese zur Erklärung von Déjà-vus wird im Text vorgestellt?",
          options: [
            "Déjà-vus sind Erinnerungen an Erlebnisse aus einem früheren Leben",
            "Déjà-vus entstehen durch einen Gedächtnisfehler, bei dem das Gehirn eine aktülle Wahrnehmung fälschlicherweise als Erinnerung einstuft",
            "Déjà-vus werden durch einen kurzzeitigen Sauerstoffmangel im Gehirn verursacht",
            "Déjà-vus sind immer Vorboten epileptischer Anfälle",
            "Déjà-vus entstehen durch den Konsum bestimmter Nahrungsmittel",
          ],
          correctOption: 1,
          explanation:
            "Im Text wird erklärt: \u201Ebei der das Gehirn eine aktülle Wahrnehmung fälschlicherweise als Erinnerung einstuft\u201C.",
        },
      ],
    },
    {
      id: "tv4-text4",
      title: "Der Halo-Effekt in der Sozialpsychologie",
      content:
        "Der Halo-Effekt, erstmals 1920 vom amerikanischen Psychologen Edward Thorndike " +
        "beschrieben, ist eine kognitive Verzerrung, bei der ein einzelnes positives Merkmal " +
        "einer Person die Wahrnehmung ihrer anderen Eigenschaften beeinflusst. Der Name leitet " +
        "sich vom Heiligenschein (englisch: halo) ab, der eine Person umgibt und alles in " +
        "günstigem Licht erscheinen lässt. Ein klassisches Beispiel: Attraktive Menschen werden " +
        "häufig auch als intelligenter, kompetenter und vertrauenswürdiger eingeschätzt, obwohl " +
        "es keinen objektiven Zusammenhang zwischen Aussehen und diesen Eigenschaften gibt. " +
        "Der Halo-Effekt wirkt auch in die umgekehrte Richtung \u2013 ein einzelnes negatives " +
        "Merkmal kann dazu führen, dass eine Person insgesamt negativer beurteilt wird, was " +
        "als Horn-Effekt bezeichnet wird. In Bewerbungsverfahren hat der Halo-Effekt besondere " +
        "Relevanz: Ein souveräner erster Eindruck kann dazu führen, dass Schwächen des " +
        "Bewerbers übersehen werden, während ein unsicheres Auftreten die Wahrnehmung " +
        "vorhandener Stärken trübt. Auch in der Markenwahrnehmung spielt der Effekt eine " +
        "Rolle \u2013 ein erfolgreiches Produkt eines Unternehmens kann die Bewertung aller " +
        "anderen Produkte derselben Marke positiv beeinflussen. Strukturierte Interviews " +
        "und standardisierte Bewertungskriterien werden als Maßnahmen empfohlen, um den " +
        "Halo-Effekt in professionellen Kontexten zu reduzieren.",
      questions: [
        {
          id: "tv4-t4-q1",
          question: "Was wird im Text als \u201EHorn-Effekt\u201C bezeichnet?",
          options: [
            "Die Tendenz, den ersten Eindruck nach kurzer Zeit zu revidieren",
            "Die Verzerrung, bei der ein einzelnes negatives Merkmal die Gesamtbeurteilung einer Person verschlechtert",
            "Die Überbewertung akustischer Signale in der Kommunikation",
            "Die Neigung, bei Bewerbungsgesprächen nur auf die Stimme zu achten",
            "Die unbewusste Nachahmung der Körpersprache des Gegenübers",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt: \u201Eein einzelnes negatives Merkmal kann dazu führen, dass eine Person insgesamt negativer beurteilt wird, was als Horn-Effekt bezeichnet wird\u201C.",
        },
        {
          id: "tv4-t4-q2",
          question:
            "Welche Maßnahmen werden laut Text empfohlen, um den Halo-Effekt zu reduzieren?",
          options: [
            "Bewerbungsgespräche vollständig durch schriftliche Tests zu ersetzen",
            "Ausschließlich anonyme Bewerbungsverfahren einzusetzen",
            "Strukturierte Interviews und standardisierte Bewertungskriterien",
            "Die Anzahl der Interviewer auf eine Person zu beschränken",
            "Bewerbungsfotos in jedem Fall zu verbieten",
          ],
          correctOption: 2,
          explanation:
            "Im Text steht: \u201EStrukturierte Interviews und standardisierte Bewertungskriterien werden als Maßnahmen empfohlen.\u201C",
        },
      ],
    },
    {
      id: "tv4-text5",
      title: "Auftauender Permafrost und Klimawandel",
      content:
        "Permafrost ist Boden, der über mindestens zwei aufeinanderfolgende Jahre hinweg " +
        "ununterbrochen gefroren bleibt. Er bedeckt etwa ein Viertel der Landoberfläche der " +
        "Nordhalbkugel, vor allem in Sibirien, Alaska, Kanada und Skandinavien. Der Permafrost " +
        "enthält enorme Mengen an organischem Material \u2013 abgestorbene Pflanzenreste und " +
        "Tierkadaver, die über Jahrtausende unter Luftabschluss konserviert wurden. " +
        "Wissenschaftler schätzen, dass im Permafrost etwa 1.500 Gigatonnen Kohlenstoff " +
        "gespeichert sind \u2013 fast doppelt so viel wie in der gesamten Erdatmosphäre. Durch " +
        "die globale Erwärmung taut der Permafrost in vielen Regionen auf, und " +
        "Mikroorganismen beginnen, das freigesetzte organische Material zu zersetzen. Dabei " +
        "entstehen die Treibhausgase Kohlendioxid und Methan. Methan ist als Treibhausgas " +
        "etwa 80-mal wirksamer als CO\u2082 über einen Zeitraum von 20 Jahren. Die Freisetzung " +
        "dieser Gase kann die Erderwärmung weiter beschleunigen, was wiederum mehr Permafrost " +
        "zum Auftauen bringt \u2013 ein Rückkopplungsmechanismus, der als Permafrost-Klima-Rückkopplung " +
        "bezeichnet wird. Neben den klimatischen Folgen hat das Auftauen des Permafrosts " +
        "auch direkte Auswirkungen auf die Infrastruktur: In betroffenen Regionen werden " +
        "Gebäude, Straßen und Pipelines destabilisiert, da der Untergrund seine Festigkeit " +
        "verliert.",
      questions: [
        {
          id: "tv4-t5-q1",
          question: "Welcher Rückkopplungsmechanismus wird im Text beschrieben?",
          options: [
            "Mehr Niederschlag führt zu mehr Vegetation, die mehr CO\u2082 aufnimmt",
            "Auftauender Permafrost setzt Treibhausgase frei, die die Erwärmung verstärken, was weiteres Auftauen verursacht",
            "Steigende Meeresspiegel kühlen die Atmosphäre durch erhöhte Verdunstung ab",
            "Mehr Sonnenstrahlung reflektiert an freigewordenen Eisflächen und kühlt die Erde",
            "Die Zersetzung organischen Materials erzeugt Wärme, die den Permafrost von innen auftaut",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt: \u201EDie Freisetzung dieser Gase kann die Erderwärmung weiter beschleunigen, was wiederum mehr Permafrost zum Auftauen bringt.\u201C",
        },
        {
          id: "tv4-t5-q2",
          question: "Wie viel Kohlenstoff ist laut Text im Permafrost gespeichert?",
          options: [
            "Etwa 500 Gigatonnen \u2013 halb so viel wie in der Atmosphäre",
            "Etwa 800 Gigatonnen \u2013 genauso viel wie in der Atmosphäre",
            "Etwa 1.500 Gigatonnen \u2013 fast doppelt so viel wie in der Erdatmosphäre",
            "Etwa 3.000 Gigatonnen \u2013 dreimal so viel wie in der Atmosphäre",
            "Etwa 10.000 Gigatonnen \u2013 zehnmal so viel wie in den Ozeanen",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt: \u201Eetwa 1.500 Gigatonnen Kohlenstoff \u2026 fast doppelt so viel wie in der gesamten Erdatmosphäre\u201C.",
        },
        {
          id: "tv4-t5-q3",
          question: "Welche nicht-klimatische Folge des auftauenden Permafrosts nennt der Text?",
          options: [
            "Die Ausbreitung tropischer Krankheiten in nördlichen Regionen",
            "Die Destabilisierung von Gebäuden, Straßen und Pipelines",
            "Das Aussterben aller Tierarten in den betroffenen Gebieten",
            "Die Versalzung des Grundwassers durch freigesetzte Mineralien",
            "Die Bildung neuer Wüstengebiete in Sibirien und Alaska",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201EIn betroffenen Regionen werden Gebäude, Straßen und Pipelines destabilisiert, da der Untergrund seine Festigkeit verliert.\u201C",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SET 5 - SCHWER
// ---------------------------------------------------------------------------
const set5: TVTextSet = {
  id: "tv-set-5",
  name: "Textverständnis Set 5",
  difficulty: "schwer",
  texts: [
    {
      id: "tv5-text1",
      title: "Der Nocebo-Effekt und seine Mechanismen",
      content:
        "Während der Placebo-Effekt beschreibt, wie positive Erwartungen zu einer " +
        "Verbesserung des Gesundheitszustands führen können, bezeichnet der Nocebo-Effekt das " +
        "umgekehrte Phänomen: Negative Erwartungen oder Befürchtungen können tatsächlich " +
        "körperliche Beschwerden hervorrufen oder verstärken. Der Begriff leitet sich vom " +
        "Lateinischen \u201Enocebo\u201C ab, was \u201Eich werde schaden\u201C bedeutet. Ein eindrückliches " +
        "Beispiel liefert eine Studie, in der Patienten über mögliche Nebenwirkungen eines " +
        "Medikaments aufgeklärt wurden: Diejenigen, die ausführlich über mögliche Kopfschmerzen " +
        "informiert wurden, berichteten dreimal häufiger über Kopfschmerzen als eine " +
        "Vergleichsgruppe, die dieselbe Substanz ohne diese Information erhielt \u2013 obwohl " +
        "beide Gruppen in Wirklichkeit ein Placebo bekamen. Neurobiologisch wird der " +
        "Nocebo-Effekt mit der Aktivierung der Hypothalamus-Hypophysen-Nebennierenrinden-Achse " +
        "und einer verstärkten Ausschüttung des Stresshormons Cortisol in Verbindung gebracht. " +
        "Zudem scheinen angstbedingte Signalwege im Gehirn die Schmerzwahrnehmung zu " +
        "verstärken. Für die ärztliche Praxis ergibt sich daraus ein ethisches Dilemma: " +
        "Ärzte sind einerseits zur vollständigen Aufklärung über Nebenwirkungen verpflichtet, " +
        "andererseits kann genau diese Aufklärung über den Nocebo-Effekt Beschwerden hervorrufen, " +
        "die ohne sie nicht aufgetreten wären. Einige Forscher plädieren daher für eine " +
        "kontextsensitive Aufklärung, die Risiken nennt, ohne negative Erwartungen " +
        "übermäßig zu verstärken.",
      questions: [
        {
          id: "tv5-t1-q1",
          question:
            "Welches ethische Dilemma für Ärzte ergibt sich laut Text aus dem Nocebo-Effekt?",
          options: [
            "Ärzte müssen entscheiden, ob sie Placebos oder echte Medikamente verschreiben",
            "Die Pflicht zur Aufklärung über Nebenwirkungen kann durch den Nocebo-Effekt genau die Beschwerden hervorrufen, die sie benennt",
            "Ärzte müssen abwägen, ob sie den Patienten überhaupt behandeln sollen",
            "Die Kosten der Behandlung stehen im Widerspruch zur Wirksamkeit der Therapie",
            "Ärzte dürfen keine Studien mehr durchführen, die den Nocebo-Effekt auslösen könnten",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt: \u201EÄrzte sind einerseits zur vollständigen Aufklärung über Nebenwirkungen verpflichtet, andererseits kann genau diese Aufklärung über den Nocebo-Effekt Beschwerden hervorrufen.\u201C",
        },
        {
          id: "tv5-t1-q2",
          question:
            "Welche neurobiologischen Mechanismen des Nocebo-Effekts werden im Text genannt?",
          options: [
            "Eine verminderte Dopaminausschüttung im Nucleus accumbens",
            "Die Aktivierung der HPA-Achse, verstärkte Cortisolausschüttung und angstbedingte Verstärkung der Schmerzwahrnehmung",
            "Eine Überproduktion von Endorphinen, die zu Unwohlsein führt",
            "Die Hemmung der Melatoninproduktion durch negative Gedanken",
            "Eine Fehlfunktion des Immunsystems durch psychischen Stress",
          ],
          correctOption: 1,
          explanation:
            "Im Text werden genannt: \u201EAktivierung der Hypothalamus-Hypophysen-Nebennierenrinden-Achse, verstärkte Ausschüttung des Stresshormons Cortisol und angstbedingte Signalwege, die die Schmerzwahrnehmung verstärken\u201C.",
        },
        {
          id: "tv5-t1-q3",
          question: "Was zeigte die im Text beschriebene Studie zu Nebenwirkungsinformation?",
          options: [
            "Patienten, die kein Placebo erhielten, hatten weniger Kopfschmerzen als die Placebo-Gruppe",
            "Patienten, die über mögliche Kopfschmerzen aufgeklärt wurden, berichteten dreimal häufiger darüber \u2013 obwohl alle ein Placebo erhielten",
            "Nur Patienten mit Vorerkrankungen waren vom Nocebo-Effekt betroffen",
            "Die Information über Nebenwirkungen eliminierte alle tatsächlichen Nebenwirkungen",
            "Beide Gruppen berichteten gleich häufig über Kopfschmerzen",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt: \u201EDiejenigen, die ausführlich über mögliche Kopfschmerzen informiert wurden, berichteten dreimal häufiger über Kopfschmerzen \u2026 obwohl beide Gruppen in Wirklichkeit ein Placebo bekamen.\u201C",
        },
      ],
    },
    {
      id: "tv5-text2",
      title: "Die Sapir-Whorf-Hypothese: Sprache und Denken",
      content:
        "Die nach den Linguisten Edward Sapir und Benjamin Lee Whorf benannte Hypothese " +
        "postuliert, dass die Sprache, die ein Mensch spricht, sein Denken und seine " +
        "Wahrnehmung der Welt beeinflusst oder sogar bestimmt. In ihrer starken Fassung \u2013 " +
        "dem linguistischen Determinismus \u2013 behauptet die Hypothese, dass Sprache das Denken " +
        "determiniert: Was sprachlich nicht ausgedrückt werden kann, könne auch nicht gedacht " +
        "werden. Diese starke Version gilt heute als widerlegt, da Menschen offensichtlich auch " +
        "Gedanken haben, für die ihnen Worte fehlen. Die schwache Fassung \u2013 der linguistische " +
        "Relativismus \u2013 besagt hingegen lediglich, dass Sprache das Denken beeinflusst, ohne " +
        "es vollständig zu bestimmen. Für diese Position gibt es durchaus empirische Belege. " +
        "So unterscheiden Sprecher von Sprachen mit vielen Farbwörtern bestimmte Farbnuancen " +
        "schneller als Sprecher von Sprachen mit weniger Farbbezeichnungen. In der " +
        "australischen Sprache Kuuk Thaayorre gibt es keine Begriffe für \u201Elinks\u201C und \u201Erechts\u201C; " +
        "stattdessen werden absolute Himmelsrichtungen verwendet. Sprecher dieser Sprache " +
        "verfügen über einen bemerkenswert präzisen inneren Kompass, den Sprecher europäischer " +
        "Sprachen in dieser Ausprägung nicht besitzen. Kritiker wenden ein, dass solche " +
        "Unterschiede nicht notwendigerweise auf die Sprache selbst zurückzuführen sind, " +
        "sondern möglicherweise auf kulturelle Praktiken und Umweltbedingungen, die sowohl " +
        "die Sprache als auch die kognitiven Fähigkeiten unabhängig voneinander formen.",
      questions: [
        {
          id: "tv5-t2-q1",
          question:
            "Worin besteht laut Text der Unterschied zwischen der starken und der schwachen Fassung der Sapir-Whorf-Hypothese?",
          options: [
            "Die starke Fassung bezieht sich auf gesprochene, die schwache auf geschriebene Sprache",
            "Die starke Fassung behauptet, Sprache determiniere das Denken vollständig, die schwache sieht lediglich einen Einfluss",
            "Die starke Fassung wurde von Sapir, die schwache von Whorf formuliert",
            "Die starke Fassung gilt für alle Sprachen, die schwache nur für europäische",
            "Die starke Fassung bezieht sich auf Grammatik, die schwache auf Wortschatz",
          ],
          correctOption: 1,
          explanation:
            "Der Text unterscheidet: Die starke Version behauptet, \u201ESprache das Denken determiniert\u201C, die schwache besagt, \u201Edass Sprache das Denken beeinflusst, ohne es vollständig zu bestimmen\u201C.",
        },
        {
          id: "tv5-t2-q2",
          question: "Welchen Einwand der Kritiker gegen die Sapir-Whorf-Hypothese nennt der Text?",
          options: [
            "Dass Sprache überhaupt keinen Einfluss auf das Denken hat",
            "Dass kognitive Unterschiede möglicherweise auf kulturelle Praktiken und Umweltbedingungen zurückzuführen sind, die Sprache und Kognition unabhängig formen",
            "Dass die genannten Studien methodisch fehlerhaft durchgeführt wurden",
            "Dass nur tote Sprachen aussagekräftige Vergleiche ermöglichen",
            "Dass alle Sprachen im Grunde dasselbe System von Farbwörtern besitzen",
          ],
          correctOption: 1,
          explanation:
            "Der Text schildert: \u201EKritiker wenden ein, dass solche Unterschiede \u2026 möglicherweise auf kulturelle Praktiken und Umweltbedingungen zurückzuführen sind, die sowohl die Sprache als auch die kognitiven Fähigkeiten unabhängig voneinander formen.\u201C",
        },
      ],
    },
    {
      id: "tv5-text3",
      title: "Algorithmische Voreingenommenheit",
      content:
        "Algorithmen treffen zunehmend Entscheidungen, die das Leben von Menschen direkt " +
        "beeinflussen: Sie wählen aus, welche Nachrichten wir sehen, sie bewerten " +
        "Kreditwürdigkeit, sie filtern Bewerbungen und sie unterstützen Richter bei " +
        "Prognosen über die Rückfallwahrscheinlichkeit von Straftätern. Die verbreitete " +
        "Annahme, dass Algorithmen objektiver urteilen als Menschen, erweist sich jedoch " +
        "als trügerisch. Algorithmen lernen aus historischen Daten, und wenn diese Daten " +
        "systematische Verzerrungen enthalten \u2013 etwa weil bestimmte Bevölkerungsgruppen in " +
        "der Vergangenheit diskriminiert wurden \u2013, reproduziert und verstärkt der Algorithmus " +
        "diese Diskriminierung. Ein bekanntes Beispiel betrifft ein Einstellungsprogramm eines " +
        "großen Technologieunternehmens, das männliche Bewerber systematisch bevorzugte, weil " +
        "es auf Daten trainiert worden war, die den überwiegend männlichen Einstellungserfolg " +
        "der Vergangenheit widerspiegelten. Besonders problematisch ist, dass algorithmische " +
        "Entscheidungen oft intransparent sind \u2013 die komplexen Berechnungen eines neuronalen " +
        "Netzwerks sind selbst für Experten nicht immer nachvollziehbar, weshalb man von einer " +
        "\u201EBlack Box\u201C spricht. Ansätze zur Lösung umfassen die Entwicklung von Methoden zur " +
        "Erklärbarkeit von KI-Entscheidungen (Explainable AI), regelmäßige Audits " +
        "algorithmischer Systeme auf Diskriminierung, die Diversifizierung von " +
        "Trainingsdatensätzen und gesetzliche Regulierung. Die Europäische Union hat mit dem " +
        "AI Act einen Rechtsrahmen geschaffen, der risikoreiche KI-Anwendungen strengeren " +
        "Anforderungen an Transparenz und Fairness unterwirft.",
      questions: [
        {
          id: "tv5-t3-q1",
          question: "Warum können Algorithmen laut Text bestehende Diskriminierung verstärken?",
          options: [
            "Weil Algorithmen absichtlich so programmiert werden, bestimmte Gruppen zu benachteiligen",
            "Weil Algorithmen aus historischen Daten lernen, die bereits systematische Verzerrungen enthalten",
            "Weil Algorithmen keine moralischen Grundsätze programmiert bekommen können",
            "Weil die Rechenleistung für faire Algorithmen nicht ausreicht",
            "Weil Algorithmen nur von Männern entwickelt werden",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt: \u201EAlgorithmen lernen aus historischen Daten, und wenn diese Daten systematische Verzerrungen enthalten \u2026 reproduziert und verstärkt der Algorithmus diese Diskriminierung.\u201C",
        },
        {
          id: "tv5-t3-q2",
          question: "Was bedeutet der Begriff \u201EBlack Box\u201C im Kontext des Textes?",
          options: [
            "Ein physisches Gerät, das Algorithmen sicher verwahrt",
            "Ein Flugschreiber, der algorithmische Entscheidungen aufzeichnet",
            "Die Tatsache, dass die komplexen Berechnungen neuronaler Netzwerke selbst für Experten oft nicht nachvollziehbar sind",
            "Eine spezielle Verschlüsselungstechnik zum Schutz von Nutzerdaten",
            "Ein Testverfahren, bei dem Algorithmen ohne Zugang zu externen Daten arbeiten",
          ],
          correctOption: 2,
          explanation:
            "Der Text nutzt \u201EBlack Box\u201C für die Intransparenz: \u201Edie komplexen Berechnungen eines neuronalen Netzwerks sind selbst für Experten nicht immer nachvollziehbar\u201C.",
        },
        {
          id: "tv5-t3-q3",
          question: "Welche Regulierungsmaßnahme der EU wird im Text erwähnt?",
          options: [
            "Ein vollständiges Verbot aller KI-Anwendungen ab 2025",
            "Die Einführung einer Steuer auf algorithmische Entscheidungen",
            "Der AI Act, der risikoreiche KI-Anwendungen strengeren Transparenz- und Fairness-Anforderungen unterwirft",
            "Die Verpflichtung, alle Algorithmen als Open Source zu veröffentlichen",
            "Ein Moratorium für die Forschung an neuronalen Netzwerken",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt: \u201EDie Europäische Union hat mit dem AI Act einen Rechtsrahmen geschaffen, der risikoreiche KI-Anwendungen strengeren Anforderungen an Transparenz und Fairness unterwirft.\u201C",
        },
      ],
    },
    {
      id: "tv5-text4",
      title: "Chronobiologie: Die innere Uhr des Menschen",
      content:
        "Jeder Mensch besitzt eine innere Uhr, die nahezu alle Körperfunktionen in einem " +
        "zirkadianen Rhythmus steuert \u2013 einem Zyklus von ungefähr 24 Stunden. Der zentrale " +
        "Taktgeber befindet sich im suprachiasmatischen Nucleus (SCN), einer winzigen " +
        "Ansammlung von etwa 20.000 Nervenzellen im Hypothalamus, direkt oberhalb der " +
        "Kreuzung der Sehnerven. Licht, das über die Netzhaut aufgenommen wird, synchronisiert " +
        "den SCN mit dem Tag-Nacht-Rhythmus der Umwelt. Neben diesem zentralen Taktgeber " +
        "besitzen praktisch alle Körperzellen eigene periphere Uhren, die durch den SCN " +
        "koordiniert werden. Die Chronobiologie hat gezeigt, dass der Zeitpunkt einer " +
        "medizinischen Behandlung deren Wirksamkeit beeinflussen kann \u2013 ein Forschungsfeld, " +
        "das als Chronopharmakologie bezeichnet wird. So wirken bestimmte Blutdruckmedikamente " +
        "effektiver, wenn sie abends statt morgens eingenommen werden, weil der Blutdruck einem " +
        "zirkadianen Muster folgt. Auch die individülle Veranlagung zum Chronotyp \u2013 ob jemand " +
        "eine \u201ELerche\u201C (Frühtyp) oder eine \u201EEule\u201C (Spättyp) ist \u2013 wird maßgeblich durch " +
        "genetische Faktoren bestimmt. Gesellschaftlich sind Spättypen oft benachteiligt, da " +
        "Schul- und Arbeitszeiten typischerweise frühe Anfangszeiten vorsehen. Studien zeigen, " +
        "dass ein späterer Schulbeginn die schulischen Leistungen und das Wohlbefinden von " +
        "jugendlichen Spättypen signifikant verbessern kann.",
      questions: [
        {
          id: "tv5-t4-q1",
          question: "Was versteht man laut Text unter Chronopharmakologie?",
          options: [
            "Die Erforschung, wie Medikamente die innere Uhr zurücksetzen können",
            "Das Forschungsfeld, das untersucht, wie der Zeitpunkt einer medizinischen Behandlung deren Wirksamkeit beeinflusst",
            "Die Entwicklung von Medikamenten, die speziell für Nachtschichtarbeiter bestimmt sind",
            "Die Untersuchung, wie lange Medikamente im Körper wirksam bleiben",
            "Die Erforschung chronischer Erkrankungen, die durch Medikamente verursacht werden",
          ],
          correctOption: 1,
          explanation:
            "Der Text definiert: \u201Eder Zeitpunkt einer medizinischen Behandlung deren Wirksamkeit beeinflussen kann \u2013 ein Forschungsfeld, das als Chronopharmakologie bezeichnet wird\u201C.",
        },
        {
          id: "tv5-t4-q2",
          question: "Warum sind Spättypen laut Text gesellschaftlich oft benachteiligt?",
          options: [
            "Weil sie häufiger an Schlafstörungen leiden als Frühtypen",
            "Weil Schul- und Arbeitszeiten typischerweise frühe Anfangszeiten vorsehen, die ihrem Rhythmus widersprechen",
            "Weil sie genetisch weniger leistungsfähig sind als Frühtypen",
            "Weil sie weniger Stunden Schlaf benötigen und dadurch übermüdet sind",
            "Weil ihre innere Uhr nicht durch Licht synchronisiert werden kann",
          ],
          correctOption: 1,
          explanation:
            "Im Text heißt es: \u201EGesellschaftlich sind Spättypen oft benachteiligt, da Schul- und Arbeitszeiten typischerweise frühe Anfangszeiten vorsehen.\u201C",
        },
      ],
    },
    {
      id: "tv5-text5",
      title: "Der Bystander-Effekt: Verantwortungsdiffusion in Gruppen",
      content:
        "Im Jahr 1964 wurde die junge New Yorkerin Kitty Genovese vor ihrem Wohnhaus " +
        "ermordet. Medienberichte behaupteten, 38 Nachbarn hätten den Angriff beobachtet, " +
        "ohne einzugreifen oder die Polizei zu rufen. Obwohl sich diese Darstellung später " +
        "als übertrieben herausstellte, inspirierte der Fall die Psychologen John Darley und " +
        "Bibb Latané zu einer Reihe von Experimenten, die den sogenannten Bystander-Effekt " +
        "wissenschaftlich belegten: Die Wahrscheinlichkeit, dass eine Person in einer " +
        "Notsituation hilft, sinkt paradoxerweise mit der Anzahl der anwesenden Personen. " +
        "Darley und Latané identifizierten mehrere Mechanismen, die diesem Effekt zugrunde " +
        "liegen. Erstens die Verantwortungsdiffusion: Je mehr Menschen anwesend sind, desto " +
        "weniger fühlt sich jeder Einzelne persönlich verantwortlich, da die Verantwortung " +
        "sich auf alle Anwesenden verteilt. Zweitens die pluralistische Ignoranz: In " +
        "mehrdeutigen Situationen beobachten Menschen das Verhalten anderer, um die Lage " +
        "einzuschätzen. Wenn niemand reagiert, interpretieren alle die Situation als nicht " +
        "bedrohlich. Drittens die Bewertungsangst: Menschen fürchten, sich durch " +
        "unangemessenes Eingreifen in einer Nicht-Notfallsituation zu blamieren. " +
        "Interventionsprogramme nutzen dieses Wissen, indem sie Menschen darin schulen, " +
        "direkt eine bestimmte Person um Hilfe zu bitten, anstatt allgemein um Hilfe zu rufen " +
        "\u2013 denn wird eine Einzelperson direkt angesprochen, wird die Verantwortungsdiffusion " +
        "aufgehoben.",
      questions: [
        {
          id: "tv5-t5-q1",
          question: "Welche drei Mechanismen des Bystander-Effekts werden im Text identifiziert?",
          options: [
            "Angst, Gleichgültigkeit und Unwissenheit",
            "Verantwortungsdiffusion, pluralistische Ignoranz und Bewertungsangst",
            "Soziale Konformität, Autoritätshörigkeit und Gruppendenken",
            "Empathiemangel, kognitive Überlastung und Stressreaktion",
            "Desensibilisierung, moralische Abstumpfung und Hilflosigkeit",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt drei Mechanismen: \u201EVerantwortungsdiffusion\u201C, \u201Epluralistische Ignoranz\u201C und \u201EBewertungsangst\u201C.",
        },
        {
          id: "tv5-t5-q2",
          question: "Welche praktische Maßnahme gegen den Bystander-Effekt wird im Text genannt?",
          options: [
            "Strengere Gesetze, die Unterlassene Hilfeleistung härter bestrafen",
            "Die direkte Ansprache einer bestimmten Person um Hilfe, statt allgemein um Hilfe zu rufen",
            "Die Installation von Überwachungskameras in öffentlichen Bereichen",
            "Die Ausbildung aller Bürger in Erster Hilfe",
            "Die Reduzierung der Gruppengröße in öffentlichen Räumen",
          ],
          correctOption: 1,
          explanation:
            "Der Text empfiehlt: \u201Edirekt eine bestimmte Person um Hilfe zu bitten, anstatt allgemein um Hilfe zu rufen \u2013 denn wird eine Einzelperson direkt angesprochen, wird die Verantwortungsdiffusion aufgehoben.\u201C",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const tvTextSets: TVTextSet[] = [set1, set2, set3, set4, set5];
