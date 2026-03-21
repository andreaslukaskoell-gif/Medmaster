import type { TVOffiziellText } from "./tvOffiziell";

// =============================================================================
// tvAussagenSet1.ts – Aussagen-Kombination questions for TV Sets 1 & 2
// 10 Texte × 2–3 Fragen = 25 Fragen
// =============================================================================

export const tvAussagenSet1: TVOffiziellText[] = [
  // ---------------------------------------------------------------------------
  // SET 1 – Text 1: Die Bedeutung des Schlafs
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-01",
    title: "Die Bedeutung des Schlafs",
    text: `Schlaf ist ein grundlegendes biologisches Bedürfnis, das für die körperliche und geistige Gesundheit unerlässlich ist. Während des Schlafs durchläuft der Körper mehrere Phasen, darunter den Leichtschlaf, den Tiefschlaf und den sogenannten REM-Schlaf (Rapid Eye Movement). Jede Phase hat eine spezifische Funktion. Im Tiefschlaf werden Wachstumshormone ausgeschüttet, die für die Reparatur von Gewebe und die Stärkung des Immunsystems verantwortlich sind. Der REM-Schlaf hingegen spielt eine zentrale Rolle bei der Verarbeitung von Erinnerungen und dem Lernen. Studien zeigen, dass Erwachsene im Durchschnitt sieben bis neun Stunden Schlaf pro Nacht benötigen, wobei der individuelle Bedarf variieren kann. Chronischer Schlafmangel wird mit einem erhöhten Risiko für Herz-Kreislauf-Erkrankungen, Diabetes, Adipositas und psychische Störungen in Verbindung gebracht. Auch die kognitive Leistungsfähigkeit leidet: Konzentration, Reaktionszeit und Entscheidungsfähigkeit nehmen bereits nach einer einzigen Nacht mit weniger als sechs Stunden Schlaf messbar ab. Experten empfehlen daher, auf eine regelmäßige Schlafenszeit zu achten und elektronische Geräte mindestens eine Stunde vor dem Zubettgehen beiseitezulegen, da das blaue Licht der Bildschirme die Produktion des Schlafhormons Melatonin hemmt.`,
    fragen: [
      {
        id: "tv-a1-01-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Im REM-Schlaf werden Wachstumshormone ausgeschüttet, die das Immunsystem stärken.",
          },
          {
            nr: 2,
            text: "Bereits eine einzige Nacht mit weniger als sechs Stunden Schlaf kann die kognitive Leistung messbar beeinträchtigen.",
          },
          {
            nr: 3,
            text: "Blaues Licht von Bildschirmen fördert die Produktion von Melatonin.",
          },
          {
            nr: 4,
            text: "Chronischer Schlafmangel wird mit einem erhöhten Risiko für Herz-Kreislauf-Erkrankungen in Verbindung gebracht.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "C", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "D", beschreibung: "Nur Aussagen 1, 2 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Wachstumshormone werden im Tiefschlaf ausgeschüttet, nicht im REM-Schlaf – der REM-Schlaf ist für Erinnerungsverarbeitung und Lernen zuständig. Aussage 2 ist korrekt: Der Text sagt explizit, dass Konzentration, Reaktionszeit und Entscheidungsfähigkeit bereits nach einer einzigen Nacht mit weniger als sechs Stunden Schlaf messbar abnehmen. Aussage 3 ist falsch: Blaues Licht hemmt die Melatoninproduktion, es fördert sie nicht. Aussage 4 ist korrekt: Der Text nennt Herz-Kreislauf-Erkrankungen explizit als eines der Risiken chronischen Schlafmangels.",
      },
      {
        id: "tv-a1-01-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Alle Erwachsenen benötigen exakt acht Stunden Schlaf pro Nacht.",
          },
          {
            nr: 2,
            text: "Der Schlaf besteht aus mehreren Phasen, darunter Leichtschlaf, Tiefschlaf und REM-Schlaf.",
          },
          {
            nr: 3,
            text: "Experten empfehlen, elektronische Geräte mindestens eine Stunde vor dem Schlafengehen beiseitezulegen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist falsch: Der Text nennt sieben bis neun Stunden als Durchschnitt und betont, dass der individuelle Bedarf variieren kann – es gibt keine exakte Angabe von acht Stunden für alle. Aussage 2 ist korrekt: Der Text listet explizit Leichtschlaf, Tiefschlaf und REM-Schlaf als Phasen auf. Aussage 3 ist korrekt: Der Text empfiehlt, elektronische Geräte mindestens eine Stunde vor dem Zubettgehen beiseitezulegen.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 1 – Text 2: Die Seidenstraße
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-02",
    title: "Die Seidenstraße",
    text: `Die Seidenstraße war ein Netzwerk antiker Handelsrouten, das den Osten mit dem Westen verband und sich über mehr als 6.000 Kilometer erstreckte. Der Name geht auf den deutschen Geografen Ferdinand von Richthofen zurück, der den Begriff 1877 prägte. Hauptsächlich wurden Seide, Gewürze, Edelsteine, Metalle und Keramik transportiert, doch die Bedeutung der Seidenstraße ging weit über den Warenhandel hinaus. Sie war auch ein Kanal für den Austausch von Ideen, Religionen, Technologien und kulturellen Praktiken. Der Buddhismus verbreitete sich über die Seidenstraße von Indien nach China und Zentralasien, während der Islam später ähnliche Wege nahm. Krankheitserreger reisten ebenfalls entlang dieser Routen – so wird vermutet, dass die Pest im 14. Jahrhundert über Handelswege aus Zentralasien nach Europa gelangte. Die Seidenstraße verlor ab dem 15. Jahrhundert an Bedeutung, als europäische Seemächte zunehmend den Seehandel ausbauten und so alternative Transportwege etablierten.`,
    fragen: [
      {
        id: "tv-a1-02-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: 'Der Begriff "Seidenstraße" wurde von einem chinesischen Historiker geprägt.',
          },
          {
            nr: 2,
            text: "Über die Seidenstraße wurden auch Ideen, Religionen und Technologien ausgetauscht.",
          },
          {
            nr: 3,
            text: "Die Pest gelangte gesichert über die Seidenstraße von Zentralasien nach Europa.",
          },
          {
            nr: 4,
            text: "Die Seidenstraße verlor ab dem 15. Jahrhundert an Bedeutung.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Der Begriff wurde vom deutschen Geografen Ferdinand von Richthofen geprägt, nicht von einem chinesischen Historiker. Aussage 2 ist korrekt: Der Text nennt explizit den Austausch von Ideen, Religionen, Technologien und kulturellen Praktiken. Aussage 3 ist falsch: Der Text sagt, es wird "vermutet" – es handelt sich um eine Vermutung, nicht um eine gesicherte Tatsache. Aussage 4 ist korrekt: Der Text nennt das 15. Jahrhundert als Beginn des Bedeutungsverlusts.',
      },
      {
        id: "tv-a1-02-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Seidenstraße erstreckte sich über mehr als 6.000 Kilometer.",
          },
          {
            nr: 2,
            text: "Der Buddhismus verbreitete sich über die Seidenstraße von China nach Indien.",
          },
          {
            nr: 3,
            text: "Der Seehandel europäischer Seemächte trug zum Bedeutungsverlust der Seidenstraße bei.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist korrekt: Der Text nennt explizit "mehr als 6.000 Kilometer". Aussage 2 ist falsch: Der Text sagt, der Buddhismus verbreitete sich von Indien nach China und Zentralasien – die Richtung ist umgekehrt dargestellt. Aussage 3 ist korrekt: Der Text erklärt, dass europäische Seemächte den Seehandel ausbauten und so alternative Transportwege etablierten.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 1 – Text 3: Die Wiener Kaffeehauskultur
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-03",
    title: "Die Wiener Kaffeehauskultur",
    text: `Das Wiener Kaffeehaus ist weit mehr als ein Ort zum Kaffeetrinken – es ist eine Institution, die seit 2011 zum immateriellen UNESCO-Kulturerbe Österreichs zählt. Die Tradition reicht bis ins späte 17. Jahrhundert zurück, als nach der zweiten Belagerung Wiens durch die Osmanen im Jahr 1683 angeblich Säcke mit Kaffeebohnen zurückgelassen wurden. Das Wiener Kaffeehaus zeichnet sich durch eine besondere Atmosphäre aus: Marmortische, Thonet-Stühle, Zeitungsständer mit internationaler Presse und die Tradition, stundenlang bei einer einzigen Tasse Kaffee verweilen zu dürfen. Historisch war das Kaffeehaus ein Treffpunkt für Intellektuelle, Künstler und Schriftsteller. Persönlichkeiten wie Sigmund Freud, Arthur Schnitzler und Stefan Zweig waren regelmäßige Gäste. Zum Kaffee wird traditionell ein Glas Wasser serviert, das unaufgefordert nachgefüllt wird. Die bekanntesten Kaffeespezialitäten sind der Einspänner – ein Mokka im Glas mit Schlagobers – und die Wiener Melange, die aus Kaffee und aufgeschäumter Milch besteht. Trotz der Konkurrenz moderner Kaffeeketten haben viele traditionelle Kaffeehäuser überlebt und ziehen sowohl Einheimische als auch Touristen an.`,
    fragen: [
      {
        id: "tv-a1-03-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Wiener Kaffeehauskultur wurde 2011 zum materiellen UNESCO-Welterbe erklärt.",
          },
          {
            nr: 2,
            text: "Der Einspänner ist ein Mokka im Glas mit Schlagobers.",
          },
          {
            nr: 3,
            text: "Gustav Klimt war ein regelmäßiger Gast im Wiener Kaffeehaus.",
          },
          {
            nr: 4,
            text: "Zum Kaffee wird traditionell ein Glas Wasser serviert, das unaufgefordert nachgefüllt wird.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Der Text spricht vom "immateriellen UNESCO-Kulturerbe", nicht vom materiellen Welterbe – ein wichtiger Unterschied. Aussage 2 ist korrekt: Der Text definiert den Einspänner als "Mokka im Glas mit Schlagobers". Aussage 3 ist falsch: Der Text nennt Sigmund Freud, Arthur Schnitzler und Stefan Zweig als regelmäßige Gäste, nicht Gustav Klimt. Aussage 4 ist korrekt: Der Text erwähnt explizit, dass Wasser unaufgefordert nachgefüllt wird.',
      },
      {
        id: "tv-a1-03-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Kaffeebohnen gelangten nachweislich durch die osmanische Belagerung 1683 nach Wien.",
          },
          {
            nr: 2,
            text: "Die Wiener Melange besteht aus Kaffee und aufgeschäumter Milch.",
          },
          {
            nr: 3,
            text: "Alle traditionellen Kaffeehäuser sind der Konkurrenz moderner Kaffeeketten zum Opfer gefallen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Alle Aussagen sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Nur Aussage 2 ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist falsch: Der Text sagt "angeblich Säcke mit Kaffeebohnen zurückgelassen wurden" – das Wort "angeblich" zeigt, dass es keine gesicherte Tatsache ist. Aussage 2 ist korrekt: Der Text beschreibt die Wiener Melange als Kaffee mit aufgeschäumter Milch. Aussage 3 ist falsch: Der Text sagt, dass "viele traditionelle Kaffeehäuser überlebt haben" – sie sind also nicht alle verschwunden.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 1 – Text 4: Wie funktioniert GPS?
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-04",
    title: "Wie funktioniert GPS?",
    text: `Das Global Positioning System, kurz GPS, ist ein satellitengestütztes Navigationssystem, das ursprünglich vom US-Militär entwickelt wurde und seit den 1990er-Jahren auch zivil genutzt werden kann. Es besteht aus mindestens 24 Satelliten, die die Erde in einer Höhe von etwa 20.200 Kilometern umkreisen. Jeder Satellit sendet kontinuierlich Signale aus, die seine genaue Position und die aktuelle Uhrzeit enthalten. Ein GPS-Empfänger auf der Erde empfängt diese Signale und berechnet anhand der Laufzeit der Signale den Abstand zu jedem Satelliten. Um eine dreidimensionale Position – also Längengrad, Breitengrad und Höhe – zu bestimmen, benötigt der Empfänger Signale von mindestens vier Satelliten. Dieses Prinzip wird als Trilateration bezeichnet. Die Genauigkeit von zivilen GPS-Geräten liegt heute typischerweise bei wenigen Metern, kann jedoch durch ergänzende Systeme wie DGPS (Differential GPS) auf wenige Zentimeter verbessert werden. GPS wird nicht nur zur Navigation verwendet, sondern auch in der Landwirtschaft, der Vermessungstechnik, der Logistik und sogar in der Erdbebenforschung, wo kleinste Verschiebungen tektonischer Platten gemessen werden können.`,
    fragen: [
      {
        id: "tv-a1-04-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Für eine dreidimensionale Positionsbestimmung sind Signale von mindestens drei Satelliten erforderlich.",
          },
          {
            nr: 2,
            text: "GPS wurde ursprünglich vom US-Militär entwickelt.",
          },
          {
            nr: 3,
            text: "Die Genauigkeit von zivilen GPS-Geräten liegt typischerweise bei wenigen Metern.",
          },
          {
            nr: 4,
            text: "Die GPS-Satelliten umkreisen die Erde in einer Höhe von etwa 20.200 Kilometern.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "B", beschreibung: "Alle Aussagen sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist falsch: Der Text nennt mindestens vier Satelliten, nicht drei. Aussage 2 ist korrekt: Der Text sagt explizit, GPS wurde "ursprünglich vom US-Militär entwickelt". Aussage 3 ist korrekt: "Die Genauigkeit von zivilen GPS-Geräten liegt heute typischerweise bei wenigen Metern." Aussage 4 ist korrekt: Der Text nennt "eine Höhe von etwa 20.200 Kilometern".',
      },
      {
        id: "tv-a1-04-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "GPS-Satelliten senden Signale mit ihrer genauen Position und der aktuellen Uhrzeit.",
          },
          {
            nr: 2,
            text: "Das Prinzip der Positionsbestimmung bei GPS heißt Triangulation.",
          },
          {
            nr: 3,
            text: "In der Erdbebenforschung werden mit GPS kleinste Verschiebungen tektonischer Platten gemessen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist korrekt: Der Text beschreibt, dass jeder Satellit Signale mit seiner genauen Position und der aktuellen Uhrzeit sendet. Aussage 2 ist falsch: Der Text verwendet den Begriff "Trilateration", nicht "Triangulation" – das sind zwei verschiedene Verfahren. Aussage 3 ist korrekt: Der Text erwähnt explizit die Erdbebenforschung als Anwendungsgebiet.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 1 – Text 5: Warum gähnen wir?
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-05",
    title: "Warum gähnen wir?",
    text: `Gähnen ist ein reflexartiger Vorgang, bei dem der Mund weit geöffnet und tief eingeatmet wird, gefolgt von einem langsamen Ausatmen. Obwohl fast alle Wirbeltiere gähnen – von Fischen über Vögel bis hin zu Säugetieren –, ist die genaue Ursache wissenschaftlich noch nicht vollständig geklärt. Eine weit verbreitete, aber inzwischen weitgehend widerlegte Hypothese besagt, dass Gähnen dazu dient, den Sauerstoffgehalt im Blut zu erhöhen. Neuere Forschungen legen stattdessen nahe, dass Gähnen primär der Kühlung des Gehirns dient. Durch das tiefe Einatmen wird kühlere Luft aufgenommen, die über die Nasennebenhöhlen und die Blutgefäße die Temperatur des Gehirns reguliert. Diese Thermoregulationshypothese wird durch die Beobachtung gestützt, dass Menschen in wärmeren Umgebungen häufiger gähnen als in kühlen. Besonders bekannt ist das Phänomen des ansteckenden Gähnens: Sieht man eine andere Person gähnen, steigt die Wahrscheinlichkeit, selbst zu gähnen, erheblich. Dieses Verhalten wird mit Empathie in Verbindung gebracht – Studien zeigen, dass ansteckendes Gähnen bei Menschen mit höherer Empathiefähigkeit häufiger auftritt und bei Kindern unter vier Jahren sowie bei Menschen mit bestimmten neurologischen Störungen seltener beobachtet wird.`,
    fragen: [
      {
        id: "tv-a1-05-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Gähnen dient nachweislich dazu, den Sauerstoffgehalt im Blut zu erhöhen.",
          },
          {
            nr: 2,
            text: "Ansteckendes Gähnen tritt bei Menschen mit höherer Empathiefähigkeit häufiger auf.",
          },
          {
            nr: 3,
            text: "Gähnen kommt nur bei Säugetieren vor.",
          },
          {
            nr: 4,
            text: "Die Thermoregulationshypothese wird dadurch gestützt, dass Menschen in wärmeren Umgebungen häufiger gähnen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 4 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Die Sauerstoff-Hypothese gilt laut Text als "weitgehend widerlegt". Aussage 2 ist korrekt: Der Text sagt explizit, dass ansteckendes Gähnen bei Menschen mit höherer Empathiefähigkeit häufiger auftritt. Aussage 3 ist falsch: Der Text erwähnt, dass "fast alle Wirbeltiere" gähnen – von Fischen über Vögel bis hin zu Säugetieren. Aussage 4 ist korrekt: Der Text nennt das häufigere Gähnen in wärmeren Umgebungen als Stütze der Thermoregulationshypothese.',
      },
      {
        id: "tv-a1-05-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Ursache des Gähnens ist wissenschaftlich vollständig geklärt.",
          },
          {
            nr: 2,
            text: "Ansteckendes Gähnen wird bei Kindern unter vier Jahren seltener beobachtet.",
          },
          {
            nr: 3,
            text: "Neuere Forschungen legen nahe, dass Gähnen der Kühlung des Gehirns dient.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist falsch: Der Text betont, dass die genaue Ursache "wissenschaftlich noch nicht vollständig geklärt" ist. Aussage 2 ist korrekt: Der Text nennt Kinder unter vier Jahren als Gruppe, bei der ansteckendes Gähnen seltener beobachtet wird. Aussage 3 ist korrekt: "Neuere Forschungen legen stattdessen nahe, dass Gähnen primär der Kühlung des Gehirns dient."',
      },
      {
        id: "tv-a1-05-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Beim Gähnen wird kühlere Luft aufgenommen, die über die Nasennebenhöhlen die Gehirntemperatur reguliert.",
          },
          {
            nr: 2,
            text: "Das Phänomen des ansteckenden Gähnens tritt bei allen Menschen gleich häufig auf.",
          },
          {
            nr: 3,
            text: "Gähnen ist ein reflexartiger Vorgang, bei dem der Mund weit geöffnet wird.",
          },
          {
            nr: 4,
            text: "Menschen mit bestimmten neurologischen Störungen gähnen häufiger als gesunde Menschen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 3 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist korrekt: Der Text beschreibt, dass kühlere Luft über die Nasennebenhöhlen und Blutgefäße die Gehirntemperatur reguliert. Aussage 2 ist falsch: Der Text zeigt, dass Empathiefähigkeit, Alter und neurologische Störungen die Häufigkeit beeinflussen. Aussage 3 ist korrekt: "Gähnen ist ein reflexartiger Vorgang, bei dem der Mund weit geöffnet und tief eingeatmet wird." Aussage 4 ist falsch: Der Text sagt, ansteckendes Gähnen wird bei Menschen mit neurologischen Störungen seltener beobachtet, nicht häufiger.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 2 – Text 1: Das Blutgruppensystem
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-06",
    title: "Das Blutgruppensystem",
    text: `Das bekannteste Blutgruppensystem ist das AB0-System, das 1901 vom österreichischen Arzt Karl Landsteiner entdeckt wurde. Es unterscheidet vier Hauptblutgruppen: A, B, AB und 0. Die Einteilung basiert auf dem Vorhandensein bestimmter Antigene auf der Oberfläche der roten Blutkörperchen. Menschen mit Blutgruppe A tragen das A-Antigen, Menschen mit Blutgruppe B das B-Antigen, Menschen mit Blutgruppe AB beide Antigene und Menschen mit Blutgruppe 0 keines der beiden. Zusätzlich besitzt das Blutplasma Antikörper gegen die jeweils fehlenden Antigene: Blutgruppe A hat Anti-B-Antikörper, Blutgruppe B hat Anti-A-Antikörper, Blutgruppe 0 hat beide Antikörper und Blutgruppe AB hat keine. Bei einer Bluttransfusion muss die Verträglichkeit beachtet werden, da die Antikörper des Empfängers die fremden roten Blutkörperchen verklumpen lassen können, was lebensbedrohlich ist. Menschen mit Blutgruppe 0 gelten als Universalspender für rote Blutkörperchen, da ihre Erythrozyten keine A- oder B-Antigene tragen. Neben dem AB0-System gibt es den Rhesusfaktor, der ebenfalls von Landsteiner mitentdeckt wurde und bei Schwangerschaften eine besondere Rolle spielt, wenn Mutter und Kind unterschiedliche Rhesusfaktoren haben.`,
    fragen: [
      {
        id: "tv-a1-06-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Menschen mit Blutgruppe AB besitzen sowohl Anti-A- als auch Anti-B-Antikörper.",
          },
          {
            nr: 2,
            text: "Das AB0-System wurde 1901 von Karl Landsteiner entdeckt.",
          },
          {
            nr: 3,
            text: "Menschen mit Blutgruppe 0 gelten als Universalspender, da ihre Erythrozyten keine A- oder B-Antigene tragen.",
          },
          {
            nr: 4,
            text: "Der Rhesusfaktor wurde unabhängig von Landsteiner entdeckt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "A",
        explanation:
          'Aussage 1 ist falsch: Der Text sagt, Blutgruppe AB hat keine Antikörper – nicht beide. Aussage 2 ist korrekt: Der Text nennt explizit 1901 und Karl Landsteiner. Aussage 3 ist korrekt: Der Text beschreibt Blutgruppe 0 als Universalspender, da ihre Erythrozyten keine A- oder B-Antigene tragen. Aussage 4 ist falsch: Der Text sagt, der Rhesusfaktor wurde "ebenfalls von Landsteiner mitentdeckt" – also nicht unabhängig von ihm.',
      },
      {
        id: "tv-a1-06-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Blutgruppe A besitzt Anti-A-Antikörper im Plasma.",
          },
          {
            nr: 2,
            text: "Bei einer inkompatiblen Bluttransfusion können die Antikörper des Empfängers die fremden Blutkörperchen verklumpen lassen.",
          },
          {
            nr: 3,
            text: "Der Rhesusfaktor spielt bei Schwangerschaften eine besondere Rolle, wenn Mutter und Kind unterschiedliche Rhesusfaktoren haben.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Keine der Aussagen ist richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Blutgruppe A besitzt Anti-B-Antikörper (Antikörper gegen das fehlende Antigen), nicht Anti-A-Antikörper. Aussage 2 ist korrekt: Der Text erklärt, dass Antikörper des Empfängers fremde Blutkörperchen verklumpen lassen können. Aussage 3 ist korrekt: Der Text nennt die Schwangerschaftsrelevanz bei unterschiedlichen Rhesusfaktoren explizit.",
      },
      {
        id: "tv-a1-06-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Einteilung der Blutgruppen basiert auf Antigenen auf der Oberfläche der weißen Blutkörperchen.",
          },
          {
            nr: 2,
            text: "Blutgruppe 0 besitzt sowohl Anti-A- als auch Anti-B-Antikörper.",
          },
          {
            nr: 3,
            text: "Karl Landsteiner war ein österreichischer Arzt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Keine der Aussagen ist richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist falsch: Die Einteilung basiert auf Antigenen auf der Oberfläche der roten Blutkörperchen, nicht der weißen. Aussage 2 ist korrekt: Der Text sagt explizit, Blutgruppe 0 hat beide Antikörper. Aussage 3 ist korrekt: Der Text bezeichnet Landsteiner als "österreichischen Arzt".',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 2 – Text 2: Das Bienensterben
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-07",
    title: "Das Bienensterben",
    text: `Seit Beginn des 21. Jahrhunderts beobachten Wissenschaftler weltweit einen alarmierenden Rückgang der Bienenpopulationen. Dieses Phänomen, das als Colony Collapse Disorder (CCD) bekannt wurde, äußert sich darin, dass Arbeiterbienen plötzlich und ohne erkennbare Ursache ihren Stock verlassen und nicht zurückkehren. Die Ursachen sind vielfältig und wirken vermutlich zusammen: Pestizide aus der Landwirtschaft, insbesondere Neonicotinoide, schädigen das Nervensystem der Bienen und beeinträchtigen ihre Orientierungsfähigkeit. Parasiten wie die Varroamilbe schwächen die Bienenvölker zusätzlich, indem sie sich von der Körperflüssigkeit der Bienen ernähren und Viren übertragen. Der Verlust von Blühflächen durch intensive Landwirtschaft reduziert das Nahrungsangebot, und der Klimawandel verschiebt die Blühzeiten von Pflanzen, sodass sie nicht mehr mit den Aktivitätszyklen der Bienen übereinstimmen. Die Folgen des Bienensterbens sind weitreichend: Etwa 75 Prozent der weltweit wichtigsten Nutzpflanzen sind zumindest teilweise auf die Bestäubung durch Insekten angewiesen. Ein anhaltender Rückgang der Bienen könnte daher erhebliche Auswirkungen auf die globale Nahrungsmittelproduktion haben.`,
    fragen: [
      {
        id: "tv-a1-07-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Colony Collapse Disorder äußert sich darin, dass die Bienenkönigin den Stock verlässt.",
          },
          {
            nr: 2,
            text: "Neonicotinoide schädigen das Nervensystem der Bienen.",
          },
          {
            nr: 3,
            text: "Etwa 75 Prozent der wichtigsten Nutzpflanzen sind zumindest teilweise auf Insektenbestäubung angewiesen.",
          },
          {
            nr: 4,
            text: "Die Varroamilbe überträgt Viren auf Bienenvölker.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "B", beschreibung: "Nur Aussage 3 ist richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist falsch: Bei CCD verlassen die Arbeiterbienen den Stock, nicht die Bienenkönigin. Aussage 2 ist korrekt: Der Text sagt, Neonicotinoide "schädigen das Nervensystem der Bienen". Aussage 3 ist korrekt: "Etwa 75 Prozent der weltweit wichtigsten Nutzpflanzen" – direkt im Text. Aussage 4 ist korrekt: Die Varroamilbe "ernährt sich von der Körperflüssigkeit der Bienen und überträgt Viren".',
      },
      {
        id: "tv-a1-07-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Ursachen des Bienensterbens sind eindeutig geklärt und auf einen einzigen Faktor zurückzuführen.",
          },
          {
            nr: 2,
            text: "Der Klimawandel verschiebt die Blühzeiten von Pflanzen, was die Bienen beeinträchtigt.",
          },
          {
            nr: 3,
            text: "Intensive Landwirtschaft reduziert das Nahrungsangebot der Bienen durch den Verlust von Blühflächen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist falsch: Der Text betont, die Ursachen seien "vielfältig" und wirken "vermutlich zusammen" – es handelt sich nicht um einen einzigen Faktor. Aussage 2 ist korrekt: Der Text nennt verschobene Blühzeiten durch den Klimawandel explizit. Aussage 3 ist korrekt: "Der Verlust von Blühflächen durch intensive Landwirtschaft reduziert das Nahrungsangebot."',
      },
      {
        id: "tv-a1-07-q3",
        frageText:
          "Welche der folgenden Aussagen l\u00E4sst/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Varroamilbe sch\u00E4digt Bienen, indem sie sich von deren K\u00F6rperfl\u00FCssigkeit ern\u00E4hrt.",
          },
          {
            nr: 2,
            text: "Das Bienensterben wird ausschlie\u00DFlich seit dem 20. Jahrhundert beobachtet.",
          },
          {
            nr: 3,
            text: "Neonicotinoide beeintr\u00E4chtigen die Orientierungsf\u00E4higkeit der Bienen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist korrekt: Der Text sagt, die Varroamilbe "ern\u00E4hrt sich von der K\u00F6rperfl\u00FCssigkeit der Bienen". Aussage 2 ist falsch: Der Text spricht von "Beginn des 21. Jahrhunderts", nicht des 20. Jahrhunderts. Aussage 3 ist korrekt: "Neonicotinoide sch\u00E4digen das Nervensystem der Bienen und beeintr\u00E4chtigen ihre Orientierungsf\u00E4higkeit."',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 2 – Text 3: Der kindliche Spracherwerb
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-08",
    title: "Der kindliche Spracherwerb",
    text: `Der Erwerb der Muttersprache gehört zu den bemerkenswertesten Leistungen des menschlichen Gehirns. Bereits im Mutterleib können Föten Sprachlaute wahrnehmen und zeigen nach der Geburt eine Präferenz für die Stimme der Mutter. In den ersten Lebensmonaten durchlaufen Säuglinge eine Phase des universellen Lautunterscheidens: Sie können Laute aller Sprachen der Welt voneinander unterscheiden, eine Fähigkeit, die im Laufe des ersten Lebensjahres auf die Laute der Umgebungssprache eingeengt wird. Mit etwa sechs Monaten beginnen Kinder zu lallen, zunächst mit einfachen Silbenwiederholungen wie "bababa". Die ersten verständlichen Wörter erscheinen typischerweise zwischen dem zehnten und vierzehnten Lebensmonat. Um den zweiten Geburtstag herum verfügen die meisten Kinder über einen aktiven Wortschatz von etwa 50 bis 200 Wörtern und beginnen, Zwei-Wort-Sätze zu bilden. Die sogenannte Wortschatzexplosion, bei der Kinder täglich mehrere neue Wörter lernen, setzt typischerweise zwischen dem 18. und 24. Lebensmonat ein. Bis zum Schuleintritt beherrschen die meisten Kinder die grundlegende Grammatik ihrer Muttersprache weitgehend fehlerfrei, obwohl sie nie formalen Grammatikunterricht erhalten haben.`,
    fragen: [
      {
        id: "tv-a1-08-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Säuglinge können von Geburt an nur die Laute ihrer Muttersprache unterscheiden.",
          },
          {
            nr: 2,
            text: "Die Wortschatzexplosion setzt typischerweise zwischen dem 18. und 24. Lebensmonat ein.",
          },
          {
            nr: 3,
            text: "Die ersten verständlichen Wörter erscheinen typischerweise zwischen dem zehnten und vierzehnten Lebensmonat.",
          },
          {
            nr: 4,
            text: "Föten können bereits im Mutterleib Sprachlaute wahrnehmen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "B", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist falsch: Säuglinge können anfangs Laute aller Sprachen der Welt unterscheiden – diese Fähigkeit wird erst im Laufe des ersten Lebensjahres auf die Umgebungssprache eingeengt. Aussage 2 ist korrekt: Die Wortschatzexplosion wird explizit zwischen dem 18. und 24. Monat verortet. Aussage 3 ist korrekt: Der Text nennt den zehnten bis vierzehnten Monat. Aussage 4 ist korrekt: "Bereits im Mutterleib können Föten Sprachlaute wahrnehmen."',
      },
      {
        id: "tv-a1-08-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Grammatik der Muttersprache wird hauptsächlich durch formalen Unterricht erworben.",
          },
          {
            nr: 2,
            text: "Um den zweiten Geburtstag verfügen die meisten Kinder über einen Wortschatz von etwa 50 bis 200 Wörtern.",
          },
          {
            nr: 3,
            text: "Das Lallen beginnt mit etwa sechs Monaten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist falsch: Der Text sagt das Gegenteil – Kinder beherrschen die Grammatik "obwohl sie nie formalen Grammatikunterricht erhalten haben". Aussage 2 ist korrekt: "Um den zweiten Geburtstag herum verfügen die meisten Kinder über einen aktiven Wortschatz von etwa 50 bis 200 Wörtern." Aussage 3 ist korrekt: "Mit etwa sechs Monaten beginnen Kinder zu lallen."',
      },
      {
        id: "tv-a1-08-q3",
        frageText:
          "Welche der folgenden Aussagen l\u00E4sst/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Neugeborene zeigen nach der Geburt eine Pr\u00E4ferenz f\u00FCr die Stimme der Mutter.",
          },
          {
            nr: 2,
            text: "Die F\u00E4higkeit zum universellen Lautunterscheiden bleibt bis ins Erwachsenenalter erhalten.",
          },
          {
            nr: 3,
            text: "Um den zweiten Geburtstag beginnen Kinder, Zwei-Wort-S\u00E4tze zu bilden.",
          },
          {
            nr: 4,
            text: "Die Wortschatzexplosion setzt erst nach dem dritten Geburtstag ein.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 2 und 4 sind richtig." },
          { key: "B", beschreibung: "Alle Aussagen sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussage 1 ist richtig." },
          { key: "E", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
        ],
        correctOptionId: "E",
        explanation:
          'Aussage 1 ist korrekt: Der Text sagt, F\u00F6ten zeigen "nach der Geburt eine Pr\u00E4ferenz f\u00FCr die Stimme der Mutter". Aussage 2 ist falsch: Die F\u00E4higkeit wird "im Laufe des ersten Lebensjahres auf die Laute der Umgebungssprache eingeengt" \u2013 sie bleibt also nicht erhalten. Aussage 3 ist korrekt: "Um den zweiten Geburtstag herum \u2026 beginnen, Zwei-Wort-S\u00E4tze zu bilden." Aussage 4 ist falsch: Die Wortschatzexplosion setzt zwischen dem 18. und 24. Lebensmonat ein, also vor dem dritten Geburtstag.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 2 – Text 4: Urbanisierung weltweit
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-09",
    title: "Urbanisierung weltweit",
    text: `Im Jahr 1950 lebten nur etwa 30 Prozent der Weltbevölkerung in Städten. Heute sind es mehr als 56 Prozent, und die Vereinten Nationen prognostizieren, dass bis 2050 fast 70 Prozent der Menschen in urbanen Räumen wohnen werden. Die Gründe für diese Landflucht sind vielfältig: Städte bieten in der Regel bessere Bildungs- und Beschäftigungsmöglichkeiten, eine umfassendere Gesundheitsversorgung und eine größere kulturelle Vielfalt. Gleichzeitig bringt die rasche Urbanisierung erhebliche Herausforderungen mit sich. In vielen Entwicklungsländern wachsen Städte schneller als die Infrastruktur, was zur Entstehung informeller Siedlungen führt, in denen Menschen ohne Zugang zu sauberem Wasser, Abwasserentsorgung und Elektrizität leben. Auch in Industrieländern zeigt Urbanisierung Schattenseiten: steigende Mietpreise verdrängen einkommensschwache Bevölkerungsgruppen aus den Innenstädten, ein Phänomen, das als Gentrifizierung bekannt ist. Darüber hinaus tragen Städte überproportional zum Klimawandel bei, da sie für etwa 70 Prozent der globalen CO₂-Emissionen verantwortlich sind. Nachhaltige Stadtplanung – etwa durch den Ausbau öffentlicher Verkehrsmittel, Grünflächen und energieeffizienter Gebäude – gilt daher als eine der zentralen Aufgaben des 21. Jahrhunderts.`,
    fragen: [
      {
        id: "tv-a1-09-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Im Jahr 1950 lebten etwa 56 Prozent der Weltbevölkerung in Städten.",
          },
          {
            nr: 2,
            text: "Gentrifizierung beschreibt die Verdrängung einkommensschwacher Gruppen aus Innenstädten durch steigende Mieten.",
          },
          {
            nr: 3,
            text: "Städte sind für etwa 70 Prozent der globalen CO₂-Emissionen verantwortlich.",
          },
          {
            nr: 4,
            text: "Die Vereinten Nationen prognostizieren, dass bis 2050 fast 70 Prozent der Menschen in Städten leben werden.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          {
            key: "B",
            beschreibung: "Nur Aussage 4 ist richtig.",
          },
          { key: "C", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2, 3 und 4 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist falsch: 1950 waren es etwa 30 Prozent, nicht 56 Prozent – 56 Prozent ist der heutige Wert. Aussage 2 ist korrekt: Der Text definiert Gentrifizierung genau so. Aussage 3 ist korrekt: "Sie sind für etwa 70 Prozent der globalen CO₂-Emissionen verantwortlich." Aussage 4 ist korrekt: Die UN-Prognose von fast 70 Prozent bis 2050 wird explizit genannt.',
      },
      {
        id: "tv-a1-09-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "In Entwicklungsländern wachsen Städte schneller als die Infrastruktur.",
          },
          {
            nr: 2,
            text: "Städte bieten in der Regel schlechtere Bildungsmöglichkeiten als ländliche Gebiete.",
          },
          {
            nr: 3,
            text: "Nachhaltige Stadtplanung umfasst unter anderem den Ausbau öffentlicher Verkehrsmittel und Grünflächen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          'Aussage 1 ist korrekt: "In vielen Entwicklungsländern wachsen Städte schneller als die Infrastruktur." Aussage 2 ist falsch: Der Text sagt das Gegenteil – Städte bieten "bessere Bildungs- und Beschäftigungsmöglichkeiten". Aussage 3 ist korrekt: Der Text nennt Ausbau öffentlicher Verkehrsmittel, Grünflächen und energieeffizienter Gebäude als Beispiele nachhaltiger Stadtplanung.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SET 2 – Text 5: Sokrates und die Mäeutik
  // ---------------------------------------------------------------------------
  {
    id: "tv-a1-10",
    title: "Sokrates und die Mäeutik",
    text: `Sokrates, der um 469 v. Chr. in Athen geboren wurde, gilt als einer der Begründer der abendländischen Philosophie, obwohl er selbst keine schriftlichen Werke hinterließ. Sein Denken ist hauptsächlich durch die Dialoge seines Schülers Platon überliefert. Sokrates" Methode, die als Mäeutik oder "Hebammenkunst" bezeichnet wird, bestand darin, durch gezieltes Fragen sein Gegenüber dazu zu bringen, eigene Einsichten zu entwickeln. Er verglich sich dabei mit einer Hebamme, die nicht selbst gebiert, sondern anderen bei der Geburt hilft – in seinem Fall bei der "Geburt" von Erkenntnis. Sokrates behauptete von sich selbst, nichts zu wissen, und sah gerade in diesem Bewusstsein des eigenen Nicht-Wissens einen Vorteil gegenüber jenen, die fälschlich glaubten, im Besitz sicherer Wahrheiten zu sein. Diese Haltung brachte ihm jedoch auch Feinde ein. Im Jahr 399 v. Chr. wurde er wegen angeblicher Verführung der Jugend und Gottlosigkeit angeklagt und zum Tode durch den Schierlingsbecher verurteilt. Obwohl ihm die Flucht ermöglicht worden wäre, entschied sich Sokrates, das Urteil anzunehmen, da er die Gesetze der Stadt nicht brechen wollte.`,
    fragen: [
      {
        id: "tv-a1-10-q1",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Sokrates hinterließ zahlreiche schriftliche Werke, die sein Denken dokumentieren.",
          },
          {
            nr: 2,
            text: "Die Mäeutik besteht darin, durch gezieltes Fragen eigene Einsichten beim Gegenüber zu fördern.",
          },
          {
            nr: 3,
            text: "Sokrates wurde 399 v. Chr. wegen Verführung der Jugend und Gottlosigkeit angeklagt.",
          },
          {
            nr: 4,
            text: "Sokrates floh aus Athen, um dem Todesurteil zu entgehen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist falsch: Der Text sagt explizit, Sokrates hinterließ "keine schriftlichen Werke". Aussage 2 ist korrekt: Die Mäeutik wird als Methode des gezielten Fragens beschrieben, um eigene Einsichten zu fördern. Aussage 3 ist korrekt: Der Text nennt 399 v. Chr. und die Anklage wegen "Verführung der Jugend und Gottlosigkeit". Aussage 4 ist falsch: Sokrates entschied sich gerade, das Urteil anzunehmen und nicht zu fliehen.',
      },
      {
        id: "tv-a1-10-q2",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Sokrates verglich sich mit einem Lehrer, der seinem Schüler die Wahrheit mitteilt.",
          },
          {
            nr: 2,
            text: 'Sokrates" Denken ist hauptsächlich durch die Dialoge Platons überliefert.',
          },
          {
            nr: 3,
            text: "Sokrates nahm sein Todesurteil an, weil er die Gesetze der Stadt nicht brechen wollte.",
          },
          {
            nr: 4,
            text: "Sokrates sah sein Bewusstsein des eigenen Nicht-Wissens als Nachteil an.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussagen 1 und 4 sind richtig." },
          { key: "B", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1, 2 und 3 sind richtig." },
          { key: "D", beschreibung: "Nur Aussagen 2 und 3 sind richtig." },
          { key: "E", beschreibung: "Alle Aussagen sind richtig." },
        ],
        correctOptionId: "D",
        explanation:
          'Aussage 1 ist falsch: Sokrates verglich sich mit einer Hebamme, die bei der Geburt von Erkenntnis hilft – nicht mit einem Lehrer, der Wahrheit mitteilt. Das Bild betont gerade, dass Erkenntnis im Gegenüber selbst entsteht. Aussage 2 ist korrekt: "Sein Denken ist hauptsächlich durch die Dialoge seines Schülers Platon überliefert." Aussage 3 ist korrekt: "da er die Gesetze der Stadt nicht brechen wollte." Aussage 4 ist falsch: Er sah das Nicht-Wissen als Vorteil, nicht als Nachteil.',
      },
      {
        id: "tv-a1-10-q3",
        frageText:
          "Welche der folgenden Aussagen lässt/lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Sokrates wurde um 469 v. Chr. in Athen geboren.",
          },
          {
            nr: 2,
            text: "Sokrates wurde von allen Athenern für seine Methode bewundert.",
          },
          {
            nr: 3,
            text: "Sokrates wurde zum Tode durch den Schierlingsbecher verurteilt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur Aussage 2 ist richtig." },
          { key: "B", beschreibung: "Nur Aussagen 1 und 3 sind richtig." },
          { key: "C", beschreibung: "Nur Aussagen 1 und 2 sind richtig." },
          { key: "D", beschreibung: "Alle Aussagen sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          'Aussage 1 ist korrekt: "Sokrates, der um 469 v. Chr. in Athen geboren wurde." Aussage 2 ist falsch: Der Text sagt, seine Haltung "brachte ihm jedoch auch Feinde ein" – er wurde also nicht von allen bewundert. Aussage 3 ist korrekt: Der Text nennt explizit den Tod durch den Schierlingsbecher.',
      },
    ],
  },
];
