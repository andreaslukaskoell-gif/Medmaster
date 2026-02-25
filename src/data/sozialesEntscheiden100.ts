// 100 Soziales-Entscheiden-Aufgaben nach offiziellem MedAT-Vorbild
// Situation + 5 Überlegungen A–E, idealRank 1–5 (theoretische Rangordnung)

import type { SozialesEntscheidenTask } from "@/data/sekDataNew";

export const sozialesEntscheiden100: SozialesEntscheidenTask[] = [
  {
    id: "se-3-01",
    difficulty: 1,
    dilemma:
      "Lisa findet im Bus eine Geldbörse mit 80 Euro und einer Karte des Besitzers. Sie ist unsicher, ob sie die Börse abgeben soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Lisa bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem anderen schaden, wenn ich sein Geld behalte, und wäre es nicht fair?",
        idealRank: 1,
      },
      { text: "Würde es meine Pflicht sein, gefundenes Eigentum zurückzugeben?", idealRank: 2 },
      { text: "Würden andere an meiner Stelle die Börse beim Fundbüro abgeben?", idealRank: 3 },
      { text: "Könnte ich das Geld gut gebrauchen?", idealRank: 4 },
      { text: "Würde der Besitzer mich finden oder anzeigen können?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-02",
    difficulty: 1,
    dilemma:
      "Tom hat in einer Prüfung die Lösung einer Aufgabe von seinem Nachbarn abgeschrieben. Der Professor hat es nicht bemerkt. Tom ist unsicher, ob er sich melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Tom bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich durch mein Schweigen andere benachteiligen, die ehrlich waren?",
        idealRank: 1,
      },
      {
        text: "Würde ich die Pflicht haben, die Wahrheit zu sagen und meinen Betrug zuzugeben?",
        idealRank: 2,
      },
      { text: "Würden Kommilitonen an meiner Stelle sich melden?", idealRank: 3 },
      { text: "Würde ich durch ein Geständnis die Prüfung verlieren?", idealRank: 4 },
      { text: "Könnte der Professor es später noch herausfinden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-03",
    difficulty: 2,
    dilemma:
      "Maria arbeitet in einer Bäckerei und nimmt sich abends oft übrig gebliebene Brötchen mit, obwohl es nicht erlaubt ist. Die Chefin hat es noch nie angesprochen. Maria ist unsicher. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Maria bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich durch mein Verhalten der Chefin oder dem Betrieb schaden?", idealRank: 1 },
      {
        text: "Würde es die Regel sein, dass man nur mit Erlaubnis etwas mitnehmen darf?",
        idealRank: 2,
      },
      { text: "Würden andere Mitarbeiter an meiner Stelle dasselbe tun?", idealRank: 3 },
      { text: "Brauche ich die Ersparnis beim Essen?", idealRank: 4 },
      { text: "Würde jemand mich erwischen oder melden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-04",
    difficulty: 1,
    dilemma:
      "Ein Kunde in einem Geschäft bemerkt, dass die Kassiererin ihm versehentlich einen Artikel nicht berechnet hat. Er ist unsicher, ob er darauf hinweisen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Kassiererin für den Fehler haften müssen und dadurch Schaden erleiden?",
        idealRank: 1,
      },
      {
        text: "Würde es meine Pflicht sein, einen offensichtlichen Fehler zu korrigieren?",
        idealRank: 2,
      },
      { text: "Würden andere Kunden an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Würde ich mir den Betrag sparen?", idealRank: 4 },
      { text: "Könnte man mich beim Verlassen des Ladens noch anhalten?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-05",
    difficulty: 2,
    dilemma:
      "Sophie hat einen Vertrag unterschrieben, merkt aber, dass ein Absatz für sie nachteilig ist. Der andere Teil hat den Fehler möglicherweise übersehen. Sophie ist unsicher, ob sie darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Sophie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den anderen unfair benachteiligen, wenn ich den Fehler ausnutze?",
        idealRank: 1,
      },
      { text: "Sollte man in Verträgen fair und transparent handeln?", idealRank: 2 },
      { text: "Würde der andere an meiner Stelle mich darauf hinweisen?", idealRank: 3 },
      { text: "Würde der Vertrag mir Vorteile bringen, wenn ich schweige?", idealRank: 4 },
      { text: "Könnte der Vertrag später angefochten werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-06",
    difficulty: 1,
    dilemma:
      "Felix hat beim Online-Shopping versehentlich doppelt bestellt. Nur eine Lieferung ist angekommen; die zweite wurde als verloren gemeldet. Er könnte die zweite Lieferung nachfordern oder den Fehler melden. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Felix bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Händler unrechtmäßig schaden, wenn ich die doppelte Lieferung behalte?",
        idealRank: 1,
      },
      {
        text: "Würde es ehrlich sein, den eigenen Fehler zu melden und nur das Bezahlte zu behalten?",
        idealRank: 2,
      },
      { text: "Würden andere in meiner Situation den Händler informieren?", idealRank: 3 },
      { text: "Hätte ich gerne die doppelte Ware?", idealRank: 4 },
      { text: "Könnte der Händler die doppelte Bestellung nachverfolgen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-07",
    difficulty: 2,
    dilemma:
      "In einer Wohngemeinschaft wird das Putzen nicht gerecht verteilt. Jana hat mehr gemacht als die anderen. Sie überlegt, ob sie weniger putzen soll, bis die anderen sich beteiligen. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Jana bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ein faires Miteinander erfordern, dass ich das Gespräch suche, statt einfach aufzuhören?",
        idealRank: 1,
      },
      { text: "Sollte in einer WG jeder seinen fairen Anteil übernehmen?", idealRank: 2 },
      { text: "Würden die anderen an meiner Stelle auch so handeln?", idealRank: 3 },
      { text: "Wäre es für mich angenehmer, weniger zu putzen?", idealRank: 4 },
      { text: "Würde es Streit geben, wenn ich weniger mache?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-08",
    difficulty: 1,
    dilemma:
      "Ein Arbeitnehmer bemerkt, dass sein Arbeitgeber bei der Steuererklärung Fehler macht, die dem Arbeitgeber Vorteile bringen. Er ist unsicher, ob er etwas sagen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitnehmer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Gesellschaft durch Steuerbetrug geschädigt und andere ungerecht belastet?",
        idealRank: 1,
      },
      {
        text: "Würde es die Pflicht eines jeden sein, Steuerbetrug nicht zu decken?",
        idealRank: 2,
      },
      {
        text: "Würden andere Mitarbeiter an meiner Stelle den Arbeitgeber darauf ansprechen?",
        idealRank: 3,
      },
      { text: "Würde ich meinen Job riskieren, wenn ich etwas sage?", idealRank: 4 },
      { text: "Könnte ich als Mitwisser haftbar gemacht werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-09",
    difficulty: 2,
    dilemma:
      "Bei einer Gruppenarbeit an der Uni hat ein Teammitglied fast nichts beigetragen, will aber den gleichen Anteil an der Note. Die anderen sind unsicher, ob sie den Dozenten informieren sollen. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die die Gruppe bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde es fair gegenüber den anderen sein, die tatsächlich gearbeitet haben?",
        idealRank: 1,
      },
      { text: "Sollte eine Bewertung die tatsächliche Leistung widerspiegeln?", idealRank: 2 },
      {
        text: "Würde der Dozent an unserer Stelle erwarten, dass man Trittbrettfahren meldet?",
        idealRank: 3,
      },
      {
        text: "Würden wir eine bessere Note bekommen, wenn seine Leistung nicht zählt?",
        idealRank: 4,
      },
      { text: "Könnte er uns später beschuldigen oder Stress machen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-10",
    difficulty: 1,
    dilemma:
      "Ein Kind findet im Supermarkt eine kleine Packung Süßigkeiten und steckt sie ein, ohne zu bezahlen. Die Mutter bemerkt es erst zu Hause. Sie ist unsicher, wie sie reagieren soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die die Mutter bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Kind und dem Geschäft gerecht werden, wenn ich die Sache zurückbringe und erkläre?",
        idealRank: 1,
      },
      { text: "Würde es die Regel sein, dass man nur bezahlte Dinge mitnimmt?", idealRank: 2 },
      { text: "Würden andere Eltern an meiner Stelle mit dem Kind zurückgehen?", idealRank: 3 },
      { text: "Wäre es mir unangenehm oder aufwendig, zurückzufahren?", idealRank: 4 },
      { text: "Würde das Geschäft das überhaupt mitbekommen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-11",
    difficulty: 2,
    dilemma:
      "Ein Mitarbeiter erfährt, dass ein Kollege intern vertrauliche Informationen an einen Konkurrenten weitergegeben hat. Er ist unsicher, ob er es melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mitarbeiter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würden die Firma und die Kollegen durch den Verrat geschädigt?", idealRank: 1 },
      {
        text: "Würde es die Pflicht sein, Vertrauensbruch und illegales Verhalten zu melden?",
        idealRank: 2,
      },
      { text: "Würden andere Mitarbeiter an meiner Stelle es der Führung sagen?", idealRank: 3 },
      { text: "Hätte ich persönlich Nachteile, wenn ich mich einmische?", idealRank: 4 },
      { text: "Könnte man mir vorwerfen, ich hätte es verschwiegen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-12",
    difficulty: 1,
    dilemma:
      "Anna hat im Restaurant zu viel Wechselgeld bekommen und es erst draußen bemerkt. Sie ist unsicher, ob sie zurückgeht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die Anna bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Kellnerin oder der Betreiber für den Fehler einstehen müssen?",
        idealRank: 1,
      },
      { text: "Würde es meine Pflicht sein, zu viel erhaltenes Geld zurückzugeben?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle das Geld zurückbringen?", idealRank: 3 },
      { text: "Könnte ich das Geld gut gebrauchen?", idealRank: 4 },
      { text: "Würde das Restaurant mich verfolgen oder anzeigen können?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-13",
    difficulty: 2,
    dilemma:
      "Bei einer Ausschreibung bemerkt ein Bewerber einen Fehler in den Unterlagen des Mitbewerbers, der den Mitbewerber disqualifizieren würde. Er ist unsicher, ob er es der Firma melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Bewerber bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde es fair gegenüber allen Bewerbern sein, wenn Fehler bekannt werden?",
        idealRank: 1,
      },
      { text: "Sollte eine Ausschreibung nach gleichen Regeln für alle laufen?", idealRank: 2 },
      { text: "Würde der Mitbewerber an meiner Stelle meinen Fehler melden?", idealRank: 3 },
      { text: "Würde ich bessere Chancen haben, wenn der andere rausfällt?", idealRank: 4 },
      { text: "Könnte es als Petzen gelten und mir schaden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-14",
    difficulty: 1,
    dilemma:
      "Ein Fahrgast bemerkt, dass er beim Ticketkauf aus Versehen eine ermäßigte Karte gelöst hat, obwohl er nicht berechtigt ist. Er ist unsicher, ob er das beim Kontrolleur zugeben soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Fahrgast bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verkehrsbetrieb und damit der Allgemeinheit schaden?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, den richtigen Tarif zu zahlen?", idealRank: 2 },
      { text: "Würden andere Fahrgäste an meiner Stelle den Fehler korrigieren?", idealRank: 3 },
      { text: "Würde ich Geld sparen, wenn ich schweige?", idealRank: 4 },
      { text: "Würde die Kontrolle mich erwischen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-15",
    difficulty: 2,
    dilemma:
      "Eine Freundin bittet um ein unehrliches Arbeitszeugnis, damit sie einen neuen Job bekommt. Man weiß, dass sie oft unzuverlässig war. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die man bei seiner Entscheidung anstellen könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den neuen Arbeitgeber und künftige Kollegen täuschen und schaden?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, in Zeugnissen die Wahrheit zu sagen?", idealRank: 2 },
      { text: "Würden andere an meiner Stelle die Freundin ablehnen?", idealRank: 3 },
      { text: "Würde ich die Freundschaft verlieren, wenn ich ablehne?", idealRank: 4 },
      { text: "Könnte ich haftbar gemacht werden, wenn das Zeugnis auffliegt?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-16",
    difficulty: 1,
    dilemma:
      "Jemand hat im Hotel das Minibar-Getränk genutzt und den leeren Behälter versteckt, um nicht zu zahlen. Er ist unsicher, ob er es bei der Abreise angibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Hotel unrechtmäßig etwas vorenthalten?", idealRank: 1 },
      {
        text: "Würde es selbstverständlich sein, verbrauchte Leistungen zu bezahlen?",
        idealRank: 2,
      },
      { text: "Würden andere Gäste an meiner Stelle es angeben?", idealRank: 3 },
      { text: "Würde ich die Rechnung niedriger halten?", idealRank: 4 },
      { text: "Wird das Zimmer vor der Abreise geprüft?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-17",
    difficulty: 2,
    dilemma:
      "Ein Lehrer bemerkt, dass eine Kollegin bei der Benotung bestimmte Schüler systematisch bevorzugt. Er ist unsicher, ob er es der Schulleitung melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Lehrer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden die benachteiligten Schüler und die Gerechtigkeit darunter leiden?",
        idealRank: 1,
      },
      { text: "Sollte Benotung objektiv und fair sein?", idealRank: 2 },
      { text: "Würden andere Kollegen an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich mir Feinde unter den Kollegen machen?", idealRank: 4 },
      { text: "Könnte die Kollegin mich anschwärzen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-18",
    difficulty: 1,
    dilemma:
      "Beim Umtausch gibt die Verkäuferin versehentlich zu viel zurück. Der Kunde ist unsicher, ob er es meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde die Verkäuferin für den Fehler einstehen müssen?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, zu viel Wechselgeld zurückzugeben?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle es zurückgeben?", idealRank: 3 },
      { text: "Könnte ich das Geld gebrauchen?", idealRank: 4 },
      { text: "Würde die Kasse am Abend nicht stimmen und man mich finden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-19",
    difficulty: 2,
    dilemma:
      "Ein Vereinsmitglied erfährt, dass der Kassenwart Geld für private Zwecke verwendet hat. Er ist unsicher, ob er es dem Vorstand melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die das Mitglied bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würden die anderen Mitglieder und der Verein geschädigt?", idealRank: 1 },
      { text: "Würde es die Pflicht sein, Veruntreuung anzuzeigen?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle es dem Vorstand sagen?", idealRank: 3 },
      { text: "Hätte ich Nachteile im Verein, wenn ich petze?", idealRank: 4 },
      { text: "Könnte man mir vorwerfen, ich hätte weggeschaut?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-20",
    difficulty: 1,
    dilemma:
      "Ein Paketbote liefert ein Paket beim Nachbarn ab, obwohl der Empfänger nicht da war. Der Nachbar behält das Paket und öffnet es aus Neugier. Er ist unsicher, ob er es dem Empfänger sofort geben soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Nachbar bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Empfänger schaden oder sein Vertrauen missbrauchen?", idealRank: 1 },
      {
        text: "Würde es die Pflicht sein, anvertraute Pakete unversehrt und ungeöffnet zu übergeben?",
        idealRank: 2,
      },
      { text: "Würden andere Nachbarn an meiner Stelle das Paket nicht öffnen?", idealRank: 3 },
      { text: "Bin ich neugierig, was drin ist?", idealRank: 4 },
      { text: "Würde der Empfänger merken, dass es geöffnet wurde?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-21",
    difficulty: 2,
    dilemma:
      "Eine Person hat im Fitnessstudio einen Schaden an Geräten verursacht, ohne dass es jemand gesehen hat. Sie ist unsicher, ob sie es melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde der Betreiber zu Unrecht für den Schaden aufkommen müssen?", idealRank: 1 },
      { text: "Würde es fair sein, für verursachte Schäden einzustehen?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich zur Kasse gebeten werden?", idealRank: 4 },
      { text: "Gibt es Kameras oder Zeugen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-22",
    difficulty: 1,
    dilemma:
      "Ein Arbeitnehmer bekommt versehentlich doppelt Gehalt überwiesen. Er ist unsicher, ob er es dem Arbeitgeber meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitnehmer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich der Firma unrechtmäßig Geld vorenthalten?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, einen Überweisungsfehler zu melden?", idealRank: 2 },
      { text: "Würden andere Arbeitnehmer an meiner Stelle es melden?", idealRank: 3 },
      { text: "Könnte ich das Geld gut gebrauchen?", idealRank: 4 },
      { text: "Würde die Buchhaltung den Fehler bemerken und es zurückfordern?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-23",
    difficulty: 2,
    dilemma:
      "Ein Student hat in der Bibliothek ein Buch ausgeliehen und es verloren. Er erwägt, zu behaupten, er hätte es zurückgegeben. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Student bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich die Bibliothek und andere Nutzer schädigen, wenn ich die Wahrheit verschweige?",
        idealRank: 1,
      },
      {
        text: "Würde es ehrlich sein, den Verlust zu melden und für Ersatz einzustehen?",
        idealRank: 2,
      },
      { text: "Würden andere Studenten an meiner Stelle den Verlust zugeben?", idealRank: 3 },
      { text: "Würde ich eine hohe Ersatzgebühr sparen?", idealRank: 4 },
      {
        text: "Könnte die Bibliothek nachweisen, dass ich es nicht zurückgegeben habe?",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-3-24",
    difficulty: 1,
    dilemma:
      "Eine Kundin bemerkt, dass die Verkäuferin ihr beim Einkauf einen Artikel zu wenig berechnet hat. Sie ist unsicher, ob sie darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die die Kundin bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Verkäuferin oder der Laden für den Fehler einstehen müssen?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, den korrekten Preis zu zahlen?", idealRank: 2 },
      { text: "Würden andere Kundinnen an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Spare ich Geld, wenn ich schweige?", idealRank: 4 },
      { text: "Wird die Kasse stimmen und man mich ansprechen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-25",
    difficulty: 2,
    dilemma:
      "Ein Mieter hat seine Kaution zurückbekommen, obwohl er die Wohnung beschädigt hat. Die Vermieterin hat es übersehen. Er ist unsicher, ob er es von sich aus anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mieter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich der Vermieterin unrecht tun, wenn ich den Schaden verschweige?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, für verursachte Schäden aufzukommen?", idealRank: 2 },
      { text: "Würden andere Mieter an meiner Stelle den Schaden melden?", idealRank: 3 },
      { text: "Würde ich die Kaution behalten können?", idealRank: 4 },
      { text: "Kann sie den Schaden später noch geltend machen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-26",
    difficulty: 1,
    dilemma:
      "Beim Tanken bemerkt jemand, dass die Zapfsäule einen niedrigeren Betrag anzeigt, als er getankt hat. Er könnte den niedrigeren Betrag zahlen. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich die Tankstelle oder den Betreiber um den Betrag bringen?", idealRank: 1 },
      {
        text: "Würde es meine Pflicht sein, den tatsächlich getankten Betrag zu zahlen?",
        idealRank: 2,
      },
      {
        text: "Würden andere Autofahrer an meiner Stelle den richtigen Betrag zahlen?",
        idealRank: 3,
      },
      { text: "Würde ich Geld sparen?", idealRank: 4 },
      { text: "Wird die Kasse am Ende des Tages kontrolliert?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-27",
    difficulty: 2,
    dilemma:
      "Ein Kollege erzählt in der Pause einen rassistischen Witz. Man ist unsicher, ob man etwas sagen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die man bei seiner Entscheidung anstellen könnte, sein?",
    aussagen: [
      {
        text: "Würde ich durch Schweigen andere verletzen und Rassismus still billigen?",
        idealRank: 1,
      },
      {
        text: "Würde es die Norm sein, diskriminierendes Verhalten nicht zu tolerieren?",
        idealRank: 2,
      },
      { text: "Würden andere Kollegen an meiner Stelle widersprechen?", idealRank: 3 },
      { text: "Würde ich unangenehm auffallen oder Konflikt riskieren?", idealRank: 4 },
      { text: "Könnte es mir beruflich schaden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-28",
    difficulty: 1,
    dilemma:
      "Jemand hat im Urlaub ein Handtuch vom Hotel mitgenommen. Er ist unsicher, ob er es zurück schicken oder den Wert ersetzen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Hotel unrechtmäßig Eigentum vorenthalten?", idealRank: 1 },
      {
        text: "Würde es selbstverständlich sein, nichts mitgehen zu lassen, was einem nicht gehört?",
        idealRank: 2,
      },
      { text: "Würden andere Gäste an meiner Stelle das Handtuch zurückschicken?", idealRank: 3 },
      { text: "Könnte ich das Handtuch gut gebrauchen?", idealRank: 4 },
      { text: "Wird das Hotel nachfragen oder die Kreditkarte belasten?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-29",
    difficulty: 2,
    dilemma:
      "Eine Person hat im Supermarkt aus Versehen eine teure Ware in die Tasche gesteckt und an der Kasse nicht vorgezeigt. Sie ist unsicher, ob sie zurückgeht und bezahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Geschäft und den Preisen für alle schaden?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, für alle Waren zu zahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Gibt es Kameras oder könnte man mich identifizieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-30",
    difficulty: 1,
    dilemma:
      "Ein Handwerker hat einen Rechnungsfehler zu seinen Gunsten entdeckt. Der Kunde hat es noch nicht bemerkt. Der Handwerker ist unsicher, ob er es korrigiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Handwerker bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Kunden zu Unrecht mehr berechnen?", idealRank: 1 },
      { text: "Würde es ehrlich sein, nur den vereinbarten Betrag zu verlangen?", idealRank: 2 },
      { text: "Würden andere Handwerker an meiner Stelle den Fehler korrigieren?", idealRank: 3 },
      { text: "Würde ich mehr verdienen, wenn ich schweige?", idealRank: 4 },
      { text: "Könnte der Kunde die Rechnung prüfen und reklamieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-31",
    difficulty: 2,
    dilemma:
      "Ein Elternteil erfährt, dass das Kind in der Schule gemobbt wird. Die Schule scheint nicht einzugreifen. Es überlegt, ob es die Schulleitung unter Druck setzen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die das Elternteil bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde das Wohl des Kindes und anderer Betroffener ein entschiedenes Vorgehen erfordern?",
        idealRank: 1,
      },
      { text: "Sollte die Schule für den Schutz aller Schüler sorgen?", idealRank: 2 },
      { text: "Würden andere Eltern an meiner Stelle so handeln?", idealRank: 3 },
      { text: "Hätte ich Angst vor Konflikten oder Nachteilen für mein Kind?", idealRank: 4 },
      { text: "Könnte das Kind noch mehr gemobbt werden, wenn ich mich einmische?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-32",
    difficulty: 1,
    dilemma:
      "Beim Online-Banking wird festgestellt, dass eine Überweisung doppelt ausgeführt wurde und der Empfänger den Betrag doppelt erhalten hat. Man ist unsicher, ob man die Bank oder den Empfänger informiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die man bei seiner Entscheidung anstellen könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Empfänger unrecht tun, wenn ich den Fehler nicht melde und er das Geld behält?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, einen Überweisungsfehler zu korrigieren?", idealRank: 2 },
      { text: "Würden andere an meiner Stelle die Bank informieren?", idealRank: 3 },
      { text: "Wäre es mir unangenehm, den Empfänger zu kontaktieren?", idealRank: 4 },
      { text: "Wird die Bank den Fehler von sich aus bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-33",
    difficulty: 2,
    dilemma:
      "Ein Vereinsvorsitzender erfährt, dass ein langjähriges Mitglied andere Mitglieder belästigt hat. Er ist unsicher, ob er den Ausschluss einleiten soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden die Betroffenen und das Klima im Verein Schutz und Konsequenz erfordern?",
        idealRank: 1,
      },
      { text: "Sollte ein Verein solche Verhaltensweisen nicht dulden?", idealRank: 2 },
      { text: "Würden andere Vorstände an meiner Stelle den Ausschluss betreiben?", idealRank: 3 },
      { text: "Würde ich Unruhe oder Konflikte im Verein auslösen?", idealRank: 4 },
      { text: "Könnte das Mitglied mich oder den Verein angreifen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-34",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Café zu wenig bezahlt und es erst später bemerkt. Sie ist unsicher, ob sie zurückgeht und den Rest bezahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde das Café durch den fehlenden Betrag geschädigt?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, den vollen Betrag zu zahlen?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Wird die Kasse am Abend nicht stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-35",
    difficulty: 2,
    dilemma:
      "Ein Arbeitgeber bemerkt, dass ein Mitarbeiter Überstunden falsch angegeben hat. Er ist unsicher, ob er es anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitgeber bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich die Firma und andere Mitarbeiter unfair behandeln, wenn ich es durchgehen lasse?",
        idealRank: 1,
      },
      { text: "Sollte Abrechnung ehrlich und nachvollziehbar sein?", idealRank: 2 },
      { text: "Würden andere Arbeitgeber an meiner Stelle das Gespräch suchen?", idealRank: 3 },
      { text: "Würde ich einen Konflikt oder Kündigung riskieren?", idealRank: 4 },
      { text: "Könnte ich rechtlich Probleme bekommen, wenn ich es ignoriere?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-36",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Flohmarkt einen Artikel gekauft und bemerkt zu Hause, dass zu viel Wechselgeld im Portemonnaie ist. Er ist unsicher, ob er den Verkäufer kontaktieren soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verkäufer unrecht tun, wenn ich das Geld behalte?", idealRank: 1 },
      { text: "Würde es fair sein, zu viel erhaltenes Geld zurückzugeben?", idealRank: 2 },
      { text: "Würden andere Käufer an meiner Stelle das Geld zurückgeben?", idealRank: 3 },
      { text: "Könnte ich das Geld gebrauchen?", idealRank: 4 },
      { text: "Wird der Verkäufer mich wiedererkennen oder finden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-37",
    difficulty: 2,
    dilemma:
      "Ein Arzt bemerkt, dass ein Kollege einen Befund falsch dokumentiert hat, was den Patienten begünstigt. Er ist unsicher, ob er es melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arzt bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden andere Patienten oder Versicherungen durch die Falschdokumentation geschädigt?",
        idealRank: 1,
      },
      {
        text: "Würde es die ärztliche Pflicht sein, Dokumentation wahrheitsgemäß zu halten?",
        idealRank: 2,
      },
      { text: "Würden andere Ärzte an meiner Stelle es ansprechen?", idealRank: 3 },
      { text: "Würde ich den Kollegen und das Arbeitsklima belasten?", idealRank: 4 },
      { text: "Könnte ich als Mitwisser haftbar werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-38",
    difficulty: 1,
    dilemma:
      "Ein Kind hat beim Spielen beim Nachbarn etwas kaputt gemacht. Die Eltern sind unsicher, ob sie es dem Nachbarn sagen und den Schaden ersetzen. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die die Eltern bei ihrer Entscheidung angestellt haben könnten, sein?",
    aussagen: [
      {
        text: "Würde ich dem Nachbarn gerecht werden und dem Kind Verantwortung vorleben?",
        idealRank: 1,
      },
      { text: "Würde es richtig sein, für verursachte Schäden einzustehen?", idealRank: 2 },
      { text: "Würden andere Eltern an meiner Stelle den Schaden melden?", idealRank: 3 },
      { text: "Wäre es teuer oder unangenehm?", idealRank: 4 },
      { text: "Wird der Nachbar es überhaupt bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-39",
    difficulty: 2,
    dilemma:
      "Ein Bewerber hat in seinem Lebenslauf eine Ausbildung angegeben, die er nicht abgeschlossen hat. Er wurde eingestellt. Er ist unsicher, ob er es dem Arbeitgeber noch mitteilen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den Arbeitgeber täuschen und anderen Bewerbern unrecht tun?",
        idealRank: 1,
      },
      { text: "Würde es ehrlich sein, die Wahrheit über den Abschluss zu sagen?", idealRank: 2 },
      { text: "Würden andere Arbeitnehmer an meiner Stelle es zugeben?", idealRank: 3 },
      { text: "Würde ich meinen Job verlieren?", idealRank: 4 },
      { text: "Könnte es bei einer Prüfung auffliegen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-40",
    difficulty: 1,
    dilemma:
      "Beim Einkaufen wird eine Ware doppelt gescannt und doppelt berechnet. Der Kunde bemerkt es erst zu Hause. Er ist unsicher, ob er zurückgeht und die Gutschrift verlangt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich zu Recht eine Rückerstattung verlangen, die mir zusteht?", idealRank: 1 },
      { text: "Würde es fair sein, nur den tatsächlichen Betrag zu zahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle reklamieren?", idealRank: 3 },
      { text: "Ist mir der Weg zurück zu mühsam?", idealRank: 4 },
      {
        text: "Wird der Laden den Fehler von sich aus bemerken und mich kontaktieren?",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-3-41",
    difficulty: 2,
    dilemma:
      "Eine Person hat einen Fundgegenstand behalten, obwohl sie den Besitzer ermitteln könnte. Sie ist unsicher, ob sie ihn zurückgibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verlierer schaden und ihm sein Eigentum vorenthalten?", idealRank: 1 },
      {
        text: "Würde es die Regel sein, gefundene Dinge zurückzugeben oder beim Fundbüro abzugeben?",
        idealRank: 2,
      },
      { text: "Würden andere an meiner Stelle den Besitzer ermitteln?", idealRank: 3 },
      { text: "Könnte ich den Gegenstand gut gebrauchen?", idealRank: 4 },
      { text: "Könnte der Besitzer mich finden oder anzeigen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-42",
    difficulty: 1,
    dilemma:
      "Ein Kellner bemerkt, dass ein Gast zu viel Trinkgeld gegeben hat, vermutlich aus Versehen. Er ist unsicher, ob er darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kellner bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den Gast unfair behandeln, wenn ich das Extra-Geld behalte?",
        idealRank: 1,
      },
      {
        text: "Würde es ehrlich sein, bei einem offensichtlichen Irrtum nachzufragen?",
        idealRank: 2,
      },
      { text: "Würden andere Kellner an meiner Stelle den Gast darauf hinweisen?", idealRank: 3 },
      { text: "Könnte ich das Trinkgeld gut gebrauchen?", idealRank: 4 },
      { text: "Wird der Gast es später bemerken und verlangen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-43",
    difficulty: 2,
    dilemma:
      "Ein Nachbar lädt laute Musik abends über die erlaubte Zeit. Man ist unsicher, ob man die Polizei rufen oder zuerst das Gespräch suchen soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die man bei seiner Entscheidung anstellen könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den Nachbarn und die Nachbarschaft fair behandeln, wenn ich zuerst rede?",
        idealRank: 1,
      },
      { text: "Sollte man Konflikte nachbarschaftlich lösen, wo möglich?", idealRank: 2 },
      { text: "Würden andere Nachbarn an meiner Stelle zuerst klingeln?", idealRank: 3 },
      { text: "Hätte ich Angst vor Streit oder Rache?", idealRank: 4 },
      { text: "Könnte ich anonym die Polizei rufen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-44",
    difficulty: 1,
    dilemma:
      "Jemand hat im Kino versehentlich die Karte eines anderen Kinogasts mitgenommen und seine eigene liegengelassen. Er ist unsicher, ob er zurückgeht und tauscht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem anderen schaden, wenn er seine Karte nicht findet?", idealRank: 1 },
      { text: "Würde es fair sein, den Irrtum zu korrigieren?", idealRank: 2 },
      { text: "Würden andere Kinogäste an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Ist mir der Film wichtiger als der Tausch?", idealRank: 4 },
      { text: "Wird der andere mich im Kino finden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-45",
    difficulty: 2,
    dilemma:
      "Ein Vereinsmitglied hat einen Unfall verursacht und niemand hat es gesehen. Es ist unsicher, ob es sich meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die es bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Geschädigten und der Versicherung gerecht werden, wenn ich mich melde?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, für verursachte Schäden einzustehen?", idealRank: 2 },
      { text: "Würden andere an meiner Stelle sich melden?", idealRank: 3 },
      { text: "Würde ich hohe Kosten oder Ärger haben?", idealRank: 4 },
      { text: "Gibt es Zeugen oder Beweise?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-46",
    difficulty: 1,
    dilemma:
      "Eine Person hat beim Online-Händler einen Artikel erhalten, der defekt ist. Sie könnte behaupten, er sei nie angekommen, und Ersatz verlangen. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den Händler betrügen und andere Kunden durch höhere Preise schädigen?",
        idealRank: 1,
      },
      {
        text: "Würde es ehrlich sein, nur Ersatz oder Reparatur für den defekten Artikel zu verlangen?",
        idealRank: 2,
      },
      { text: "Würden andere Kunden an meiner Stelle den Defekt melden?", idealRank: 3 },
      { text: "Hätte ich gerne einen zweiten Artikel umsonst?", idealRank: 4 },
      { text: "Könnte der Händler den Defekt nachweisen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-47",
    difficulty: 2,
    dilemma:
      "Ein Lehrer bemerkt, dass ein Schüler bei einer Hausaufgabe abgeschrieben hat. Er ist unsicher, ob er die Arbeit mit null bewertet oder den Schüler nur ermahnt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Lehrer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den anderen Schülern und der Gerechtigkeit gerecht werden?",
        idealRank: 1,
      },
      { text: "Sollte akademische Integrität konsequent bewertet werden?", idealRank: 2 },
      { text: "Würden andere Lehrer an meiner Stelle so handeln?", idealRank: 3 },
      { text: "Würde ich dem Schüler und den Eltern Ärger machen?", idealRank: 4 },
      { text: "Könnte der Schüler oder die Eltern sich beschweren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-48",
    difficulty: 1,
    dilemma:
      "Beim Bezahlen mit Karte wird die Transaktion doppelt ausgeführt. Der Kunde bemerkt es am Kontoauszug. Er ist unsicher, ob er die Bank oder den Händler informiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich zu Recht eine Rückbuchung verlangen?", idealRank: 1 },
      { text: "Würde es selbstverständlich sein, nur einmal zu zahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle reklamieren?", idealRank: 3 },
      { text: "Ist mir der Aufwand zu groß?", idealRank: 4 },
      { text: "Wird die Bank den Fehler von sich aus korrigieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-49",
    difficulty: 2,
    dilemma:
      "Ein Arbeitnehmer wird gebeten, in einer E-Mail einen Sachverhalt so darzustellen, dass er den Arbeitgeber begünstigt, obwohl er weiß, dass es nicht ganz stimmt. Er ist unsicher. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich Dritte oder den Empfänger täuschen und schaden?", idealRank: 1 },
      {
        text: "Würde es die Pflicht sein, in der Kommunikation die Wahrheit zu sagen?",
        idealRank: 2,
      },
      {
        text: "Würden andere Mitarbeiter an meiner Stelle die Formulierung ablehnen?",
        idealRank: 3,
      },
      { text: "Würde ich meinen Vorgesetzten verärgern?", idealRank: 4 },
      { text: "Könnte die E-Mail später als Beweis gegen mich verwendet werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-50",
    difficulty: 1,
    dilemma:
      "Jemand hat im Schwimmbad die Badeordnung verletzt (z. B. Essen am Beckenrand). Ein Angestellter hat es nicht gesehen. Die Person ist unsicher, ob sie sich beim nächsten Besuch selbst meldet oder still bleibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Betrieb und den anderen Gästen gerecht werden, wenn ich es zugebe?",
        idealRank: 1,
      },
      { text: "Würde es die Regel sein, sich an die Hausordnung zu halten?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich einen Verweis oder Hausverbot riskieren?", idealRank: 4 },
      { text: "Wird es überhaupt jemand erfahren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-51",
    difficulty: 2,
    dilemma:
      "Eine Person hat im Restaurant einen teuren Wein bestellt; die Kellnerin bringt versehentlich eine teurere Flasche. Der Gast ist unsicher, ob er es anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Gast bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich das Restaurant oder die Kellnerin unfair belasten?", idealRank: 1 },
      { text: "Würde es ehrlich sein, nur den bestellten Preis zu zahlen?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle den Irrtum melden?", idealRank: 3 },
      { text: "Bekäme ich den besseren Wein zum gleichen Preis?", idealRank: 4 },
      { text: "Wird die Inventur den Fehler bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-52",
    difficulty: 1,
    dilemma:
      "Ein Fahrgast hat im Bus kein Ticket gelöst und wird nicht kontrolliert. Er ist unsicher, ob er beim Aussteigen trotzdem ein Ticket kauft. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Fahrgast bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verkehrsbetrieb und damit allen Nutzern schaden?", idealRank: 1 },
      { text: "Würde es die Pflicht sein, für die Fahrt zu zahlen?", idealRank: 2 },
      { text: "Würden andere Fahrgäste an meiner Stelle ein Ticket kaufen?", idealRank: 3 },
      { text: "Spare ich den Fahrpreis?", idealRank: 4 },
      { text: "Wird beim Aussteigen noch kontrolliert?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-53",
    difficulty: 2,
    dilemma:
      "Ein Arbeitnehmer hat einen Fehler gemacht, der dem Unternehmen Schaden verursacht hat. Niemand hat es ihm zugeordnet. Er ist unsicher, ob er sich bei seinem Vorgesetzten meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich Verantwortung übernehmen und dem Unternehmen helfen, den Schaden zu begrenzen?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, für eigene Fehler einzustehen?", idealRank: 2 },
      { text: "Würden andere Mitarbeiter an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich meinen Job oder mein Ansehen riskieren?", idealRank: 4 },
      { text: "Könnte man den Fehler mir später zuordnen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-54",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Bäcker zu wenig Kleingeld bekommen und es erst zu Hause bemerkt. Er ist unsicher, ob er zurückgeht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Bäckerei oder die Kassiererin für den Fehler einstehen müssen?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, den korrekten Betrag zu verlangen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Ist mir der Weg zu weit für den Betrag?", idealRank: 4 },
      { text: "Wird die Kasse am Abend stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-55",
    difficulty: 2,
    dilemma:
      "Ein Student hat in einer Prüfung eine Formel auf dem Arm notiert und nicht genutzt. Er ist unsicher, ob er es dem Prüfer meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Student bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich die Fairness gegenüber anderen und die Prüfungsordnung achten?",
        idealRank: 1,
      },
      {
        text: "Würde es die Regel sein, in Prüfungen keine unerlaubten Hilfen zu haben?",
        idealRank: 2,
      },
      { text: "Würden andere Studenten an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich durchgefallen sein, wenn ich es genutzt hätte?", idealRank: 4 },
      { text: "Könnte der Prüfer es später bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-56",
    difficulty: 1,
    dilemma:
      "Eine Kundin bemerkt, dass die Verkäuferin ihr beim Umtausch zu viel erstattet hat. Sie ist unsicher, ob sie darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die die Kundin bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde die Verkäuferin oder der Laden für den Fehler haften?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, zu viel Erstattung zurückzugeben?", idealRank: 2 },
      { text: "Würden andere Kundinnen an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Könnte ich das Geld gebrauchen?", idealRank: 4 },
      { text: "Wird die Kasse am Abend nicht stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-57",
    difficulty: 2,
    dilemma:
      "Ein Elternteil erfährt, dass das Kind in einer Klassenarbeit abgeschrieben hat. Die Lehrerin hat es nicht bemerkt. Es ist unsicher, ob es die Lehrerin informieren soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die das Elternteil bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Kind und der Schule gerecht werden, wenn ich Ehrlichkeit vorlebe?",
        idealRank: 1,
      },
      { text: "Würde es richtig sein, Betrug nicht zu decken?", idealRank: 2 },
      { text: "Würden andere Eltern an meiner Stelle die Lehrerin informieren?", idealRank: 3 },
      { text: "Würde das Kind eine schlechtere Note oder Ärger bekommen?", idealRank: 4 },
      { text: "Könnte es später auffliegen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-58",
    difficulty: 1,
    dilemma:
      "Jemand hat im Park einen Hund ohne Leine laufen lassen, obwohl Leinenpflicht gilt. Ein Ranger ist in der Nähe. Die Person ist unsicher, ob sie den Hund anleint. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würden andere Besucher und Tiere durch die Leinenpflicht geschützt?", idealRank: 1 },
      { text: "Würde es die Regel sein, sich an die Parkordnung zu halten?", idealRank: 2 },
      { text: "Würden andere Hundebesitzer an meiner Stelle den Hund anleinen?", idealRank: 3 },
      { text: "Finde ich es schöner, wenn der Hund frei läuft?", idealRank: 4 },
      { text: "Wird der Ranger mich erwischen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-59",
    difficulty: 2,
    dilemma:
      "Ein Mitarbeiter bemerkt, dass ein Kollege private Ausgaben über die Firma abrechnet. Er ist unsicher, ob er es melden soll. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mitarbeiter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würden die Firma und die Kollegen durch Betrug geschädigt?", idealRank: 1 },
      { text: "Würde es die Pflicht sein, solches Verhalten zu melden?", idealRank: 2 },
      { text: "Würden andere Mitarbeiter an meiner Stelle es der Führung sagen?", idealRank: 3 },
      { text: "Würde ich als Petze gelten oder den Kollegen verlieren?", idealRank: 4 },
      { text: "Könnte ich als Mitwisser Probleme bekommen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-60",
    difficulty: 1,
    dilemma:
      "Beim Einkaufen fällt einer Person auf, dass sie an der Selbstbedienungskasse einen Artikel nicht gescannt hat. Sie ist unsicher, ob sie zurückgeht und bezahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Laden um den Betrag bringen?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, alle Waren zu bezahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Gibt es Kameras oder Kontrollen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-61",
    difficulty: 2,
    dilemma:
      "Eine Person hat im Urlaub einen Mietwagen leicht beschädigt. Die Vermietung hat es bei der Rückgabe nicht bemerkt. Sie ist unsicher, ob sie es meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich der Vermietung und dem nächsten Mieter gerecht werden, wenn ich den Schaden melde?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, für verursachte Schäden einzustehen?", idealRank: 2 },
      { text: "Würden andere Mieter an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich eine hohe Reparaturrechnung bekommen?", idealRank: 4 },
      { text: "Wird die Vermietung den Schaden bei der nächsten Inspektion finden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-62",
    difficulty: 1,
    dilemma:
      "Ein Gast in einem Hotel bemerkt, dass die Minirechnung im Zimmer einen Fehler enthält und zu niedrig ist. Er ist unsicher, ob er es bei der Abreise anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Gast bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Hotel unrecht tun, wenn ich den Fehler ausnutze?", idealRank: 1 },
      { text: "Würde es ehrlich sein, den korrekten Betrag zu zahlen?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Spare ich Geld?", idealRank: 4 },
      { text: "Wird die Abrechnung am Ende geprüft?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-63",
    difficulty: 2,
    dilemma:
      "Ein Vereinsmitglied hat versehentlich vertrauliche Informationen an Außenstehende weitergegeben. Es ist unsicher, ob es dem Vorstand davon berichtet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die das Mitglied bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden der Verein und andere Mitglieder durch die Weitergabe geschädigt?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, einen Vertrauensbruch zu melden?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle es dem Vorstand sagen?", idealRank: 3 },
      { text: "Würde ich Ärger oder einen Rüffel bekommen?", idealRank: 4 },
      { text: "Könnte es später herauskommen und mir vorgeworfen werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-64",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Spendenaufruf versehentlich einen Betrag doppelt überwiesen. Er ist unsicher, ob er die Organisation informiert und um Rücküberweisung bittet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich zu Recht nur einmal spenden wollen?", idealRank: 1 },
      { text: "Würde es fair sein, einen Überweisungsfehler zu korrigieren?", idealRank: 2 },
      { text: "Würden andere Spender an meiner Stelle um Rückbuchung bitten?", idealRank: 3 },
      { text: "Wäre der doppelte Betrag für die Organisation nicht auch gut?", idealRank: 4 },
      { text: "Wird die Organisation den Fehler von sich aus bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-65",
    difficulty: 2,
    dilemma:
      "Ein Arbeitgeber bemerkt, dass ein Bewerber in der Probezeit gut performt, aber im Lebenslauf eine Sache erfunden hat. Er ist unsicher, ob er die Stelle trotzdem entfristet oder den Betrug anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitgeber bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde Vertrauen und Ehrlichkeit die Grundlage des Arbeitsverhältnisses sein?",
        idealRank: 1,
      },
      { text: "Sollte man auf Wahrheit in Bewerbungsunterlagen bestehen?", idealRank: 2 },
      { text: "Würden andere Arbeitgeber an meiner Stelle den Betrug ansprechen?", idealRank: 3 },
      { text: "Verliere ich einen fähigen Mitarbeiter?", idealRank: 4 },
      { text: "Könnte es später rechtliche Folgen haben?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-66",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Café ein Getränk bestellt und bemerkt beim Bezahlen, dass die Kellnerin es nicht auf die Rechnung gesetzt hat. Sie ist unsicher, ob sie darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde die Kellnerin oder das Café für den Fehler einstehen müssen?", idealRank: 1 },
      {
        text: "Würde es meine Pflicht sein, alle konsumierten Leistungen zu bezahlen?",
        idealRank: 2,
      },
      { text: "Würden andere Gäste an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Wird die Kasse am Abend stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-67",
    difficulty: 2,
    dilemma:
      "Ein Mieter bemerkt, dass die Nebenkostenabrechnung einen Fehler enthält, der ihn begünstigt. Die Vermieterin hat es nicht bemerkt. Er ist unsicher, ob er es anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mieter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich der Vermieterin unrecht tun, wenn ich den Fehler ausnutze?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, die korrekten Nebenkosten zu zahlen?", idealRank: 2 },
      { text: "Würden andere Mieter an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Spare ich Geld?", idealRank: 4 },
      { text: "Kann sie die Abrechnung später korrigieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-68",
    difficulty: 1,
    dilemma:
      "Beim Umtausch eines Artikels gibt die Verkäuferin versehentlich den vollen Kaufpreis zurück, obwohl der Artikel schon benutzt wurde. Der Kunde ist unsicher, ob er darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Laden oder die Verkäuferin unfair belasten?", idealRank: 1 },
      {
        text: "Würde es die Regel sein, bei Umtausch nur den zustehenden Betrag zu verlangen?",
        idealRank: 2,
      },
      { text: "Würden andere Kunden an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Bekäme ich mehr Geld zurück?", idealRank: 4 },
      { text: "Wird die Kasse geprüft?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-69",
    difficulty: 2,
    dilemma:
      "Ein Arzt bemerkt, dass ein Kollege eine Behandlung dokumentiert hat, die so nicht stattgefunden hat, um Abrechnungen zu rechtfertigen. Er ist unsicher, ob er es meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arzt bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden Krankenkassen und Patienten durch Abrechnungsbetrug geschädigt?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, Betrug anzuzeigen?", idealRank: 2 },
      { text: "Würden andere Ärzte an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich den Kollegen und das Team belasten?", idealRank: 4 },
      { text: "Könnte ich als Mitwisser haftbar werden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-70",
    difficulty: 1,
    dilemma:
      "Jemand hat im Fitnessstudio die Nutzungszeit überschritten und wurde nicht darauf hingewiesen. Er ist unsicher, ob er es beim nächsten Mal von sich aus anspricht oder die Gebühr nachzahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Studio gerecht werden, wenn ich die Nutzung korrekt abrechne?",
        idealRank: 1,
      },
      { text: "Würde es die Regel sein, sich an die vereinbarten Zeiten zu halten?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle nachzahlen?", idealRank: 3 },
      { text: "Spare ich Geld?", idealRank: 4 },
      { text: "Wird das Studio die Nutzung nachvollziehen können?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-71",
    difficulty: 2,
    dilemma:
      "Eine Person hat beim Verkauf eines Gebrauchtwagens einen Mangel verschwiegen. Der Käufer hat den Mangel noch nicht bemerkt. Die Person ist unsicher, ob sie ihn vor der Übergabe anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Käufer täuschen und ihm schaden?", idealRank: 1 },
      {
        text: "Würde es beim Verkauf die Pflicht sein, bekannte Mängel offenzulegen?",
        idealRank: 2,
      },
      { text: "Würden andere Verkäufer an meiner Stelle den Mangel nennen?", idealRank: 3 },
      { text: "Bekäme ich einen höheren Preis, wenn ich schweige?", idealRank: 4 },
      { text: "Kann der Käufer später Gewährleistung geltend machen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-72",
    difficulty: 1,
    dilemma:
      "Ein Fahrgast hat im Zug keine Fahrkarte gelöst und wird nicht kontrolliert. Er ist unsicher, ob er am Zielbahnhof ein Ticket nachlöst. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Fahrgast bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verkehrsunternehmen und allen Fahrgästen schaden?", idealRank: 1 },
      { text: "Würde es die Pflicht sein, für die Fahrt zu zahlen?", idealRank: 2 },
      { text: "Würden andere Fahrgäste an meiner Stelle ein Ticket kaufen?", idealRank: 3 },
      { text: "Spare ich den Fahrpreis?", idealRank: 4 },
      { text: "Wird am Ausstieg kontrolliert?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-73",
    difficulty: 2,
    dilemma:
      "Ein Arbeitnehmer hat einen Kunden versehentlich falsch beraten; der Kunde hat dadurch einen Nachteil. Es ist noch nicht aufgeflogen. Der Arbeitnehmer ist unsicher, ob er es dem Kunden und dem Chef meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den Kunden und die Firma fair behandeln, wenn ich den Fehler zugebe?",
        idealRank: 1,
      },
      { text: "Würde es die Pflicht sein, für Beratungsfehler einzustehen?", idealRank: 2 },
      { text: "Würden andere Mitarbeiter an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich Ärger oder Abmahnung bekommen?", idealRank: 4 },
      { text: "Könnte der Kunde den Fehler später bemerken und reklamieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-74",
    difficulty: 1,
    dilemma:
      "Beim Einkauf im Supermarkt bemerkt eine Person, dass sie an der Kasse einen Gutschein doppelt eingelöst hat – die Kassiererin hat es zugelassen. Sie ist unsicher, ob sie es anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Supermarkt oder die Kassiererin unfair belasten?", idealRank: 1 },
      { text: "Würde es die Regel sein, einen Gutschein nur einmal zu nutzen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Hätte ich den Vorteil gerne?", idealRank: 4 },
      { text: "Wird die Kasse am Abend stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-75",
    difficulty: 2,
    dilemma:
      "Ein Lehrer bemerkt, dass eine Kollegin bei der Notenvergabe nach Sympathie entscheidet. Er ist unsicher, ob er es der Schulleitung meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Lehrer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden die benachteiligten Schüler und die Gerechtigkeit darunter leiden?",
        idealRank: 1,
      },
      { text: "Sollte Benotung objektiv und nach Leistung erfolgen?", idealRank: 2 },
      { text: "Würden andere Kollegen an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich Konflikte mit der Kollegin riskieren?", idealRank: 4 },
      { text: "Könnte sie mich anschwärzen oder blockieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-76",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Bäcker ein Brötchen mehr in die Tüte bekommen und es erst zu Hause bemerkt. Er ist unsicher, ob er zurückgeht und den Betrag nachzahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Bäcker den Betrag vorenthalten?", idealRank: 1 },
      { text: "Würde es fair sein, für alle mitgenommenen Waren zu zahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den kleinen Betrag?", idealRank: 4 },
      { text: "Wird der Bäcker den Fehler bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-77",
    difficulty: 2,
    dilemma:
      "Ein Vereinsmitglied hat bei einer Wahl seine Stimme doppelt abgegeben (z. B. online und vor Ort). Es ist unsicher, ob es den Wahlleiter informiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die es bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich die demokratische Fairness und die anderen Wähler beeinträchtigen?",
        idealRank: 1,
      },
      { text: "Würde es die Regel sein, dass jeder nur eine Stimme hat?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle es melden?", idealRank: 3 },
      { text: "Hätte ich gerne mehr Einfluss auf das Ergebnis?", idealRank: 4 },
      { text: "Könnte die doppelte Stimmabgabe auffallen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-78",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Restaurant bemerkt, dass die Rechnung einen nicht bestellten Posten enthält. Sie hat schon bezahlt. Sie ist unsicher, ob sie reklamiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich zu Recht nur das Bezahlte verlangen, was ich bestellt habe?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, nur den korrekten Betrag zu zahlen?", idealRank: 2 },
      { text: "Würden andere Gäste an meiner Stelle reklamieren?", idealRank: 3 },
      { text: "Ist mir der Aufwand zu groß?", idealRank: 4 },
      { text: "Wird die Kellnerin den Fehler von sich aus bemerken?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-79",
    difficulty: 2,
    dilemma:
      "Ein Arbeitnehmer hat von einem Kunden ein Geschenk angenommen, obwohl die Firma es verbietet. Er ist unsicher, ob er es meldet oder zurückgibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich die Neutralität und das Vertrauen der Firma verletzen?", idealRank: 1 },
      { text: "Würde es die Firmenrichtlinie sein, keine Geschenke anzunehmen?", idealRank: 2 },
      {
        text: "Würden andere Mitarbeiter an meiner Stelle das Geschenk zurückgeben?",
        idealRank: 3,
      },
      { text: "Möchte ich das Geschenk behalten?", idealRank: 4 },
      { text: "Könnte es bei einer Prüfung auffallen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-80",
    difficulty: 1,
    dilemma:
      "Beim Tanken hat jemand den falschen Zapfsäulen-Betrag bezahlt – zu wenig. Er ist unsicher, ob er zurückgeht und den Rest bezahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich die Tankstelle um den Betrag bringen?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, den getankten Betrag zu zahlen?", idealRank: 2 },
      { text: "Würden andere Autofahrer an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Wird die Kasse am Ende des Tages kontrolliert?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-81",
    difficulty: 2,
    dilemma:
      "Ein Mieter hat die Kaution zurückbekommen, obwohl er die Küche beschädigt hat. Die Vermieterin hat es bei der Übergabe nicht angemerkt. Er ist unsicher, ob er es von sich aus anspricht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mieter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich der Vermieterin unrecht tun, wenn ich den Schaden verschweige?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, für verursachte Schäden aufzukommen?", idealRank: 2 },
      { text: "Würden andere Mieter an meiner Stelle den Schaden melden?", idealRank: 3 },
      { text: "Würde ich einen Teil der Kaution verlieren?", idealRank: 4 },
      { text: "Kann sie den Schaden später noch reklamieren?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-82",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Kino eine Karte für einen ermäßigten Tarif gelöst, obwohl sie nicht berechtigt ist. Sie ist unsicher, ob sie beim nächsten Mal den vollen Preis zahlt oder es zugibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Kino Einnahmen vorenthalten?", idealRank: 1 },
      { text: "Würde es die Regel sein, den zutreffenden Tarif zu zahlen?", idealRank: 2 },
      { text: "Würden andere Besucher an meiner Stelle den vollen Preis zahlen?", idealRank: 3 },
      { text: "Spare ich Geld?", idealRank: 4 },
      { text: "Wird beim Einlass kontrolliert?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-83",
    difficulty: 2,
    dilemma:
      "Ein Student hat in einer Gruppenarbeit einen Teil von einer anderen Quelle übernommen ohne Quellenangabe. Die anderen Gruppenmitglieder wissen es nicht. Er ist unsicher, ob er es vor der Abgabe zugibt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich die anderen Gruppenmitglieder und die Dozenten täuschen?", idealRank: 1 },
      { text: "Würde es die akademische Regel sein, Quellen anzugeben?", idealRank: 2 },
      { text: "Würden andere Studenten an meiner Stelle es zugeben?", idealRank: 3 },
      { text: "Würde die Gruppe eine schlechtere Note bekommen?", idealRank: 4 },
      { text: "Könnte es als Plagiat auffallen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-84",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Einkaufen an der Kasse zu wenig zurückbekommen und es erst draußen bemerkt. Er ist unsicher, ob er zurückgeht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Kassiererin oder der Laden für den Fehler einstehen müssen?",
        idealRank: 1,
      },
      { text: "Würde es mein Recht sein, den korrekten Betrag zu verlangen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Ist mir der Weg zurück zu mühsam?", idealRank: 4 },
      { text: "Wird die Kasse am Abend stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-85",
    difficulty: 2,
    dilemma:
      "Ein Arbeitgeber bemerkt, dass ein Bewerber in der Bewerbung ein Praktikum erfunden hat. Der Bewerber wurde schon eingeladen. Der Arbeitgeber ist unsicher, ob er das Vorstellungsgespräch absagt oder den Bewerber konfrontiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitgeber bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich anderen ehrlichen Bewerbern und der Firma gerecht werden?", idealRank: 1 },
      { text: "Sollte man auf wahrheitsgemäße Bewerbungen bestehen?", idealRank: 2 },
      {
        text: "Würden andere Arbeitgeber an meiner Stelle die Einladung zurückziehen?",
        idealRank: 3,
      },
      { text: "Verpasse ich vielleicht einen guten Kandidaten?", idealRank: 4 },
      { text: "Könnte es später rechtliche Konsequenzen haben?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-86",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Bus eine Geldbörse gefunden und den Inhalt durchgesehen. Sie könnte den Besitzer über eine Adresse im Portemonnaie kontaktieren. Sie ist unsicher. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich dem Verlierer helfen und ihm sein Eigentum zurückgeben?", idealRank: 1 },
      { text: "Würde es die Regel sein, Fundsachen zurückzugeben oder abzuliefern?", idealRank: 2 },
      { text: "Würden andere Finder an meiner Stelle den Besitzer kontaktieren?", idealRank: 3 },
      { text: "Könnte ich das Geld gebrauchen?", idealRank: 4 },
      { text: "Könnte der Besitzer mich über die Bankkarte finden?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-87",
    difficulty: 2,
    dilemma:
      "Ein Kollege hat einen Fehler gemacht, der einem Kunden Nachteile bringt. Der Kunde hat es noch nicht bemerkt. Man ist unsicher, ob man den Kollegen darauf anspricht oder den Kunden informiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die man bei seiner Entscheidung anstellen könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Kunden gerecht werden, wenn der Fehler korrigiert wird?",
        idealRank: 1,
      },
      { text: "Sollte man Kunden nicht schaden und Fehler beheben?", idealRank: 2 },
      { text: "Würden andere Kollegen an meiner Stelle den Kollegen ansprechen?", idealRank: 3 },
      { text: "Würde ich den Kollegen bloßstellen?", idealRank: 4 },
      { text: "Könnte der Kunde später reklamieren und ich als Mitwisser gelten?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-88",
    difficulty: 1,
    dilemma:
      "Beim Online-Kauf wurde ein Artikel doppelt geliefert. Der Kunde hat nur einen bestellt. Er ist unsicher, ob er den Händler informiert und die zweite Sendung zurückschickt oder abholen lässt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich dem Händler unrecht tun, wenn ich die doppelte Lieferung behalte?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, nur das Bestellte zu behalten?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle den Händler informieren?", idealRank: 3 },
      { text: "Hätte ich gerne den doppelten Artikel?", idealRank: 4 },
      { text: "Wird der Händler die doppelte Sendung nachverfolgen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-89",
    difficulty: 2,
    dilemma:
      "Ein Vereinsvorstand erfährt, dass ein Mitglied andere Mitglieder belästigt hat. Es gibt keine formelle Beschwerde. Er ist unsicher, ob er das Mitglied anspricht oder die Betroffenen zuerst fragt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden die Betroffenen und das Klima im Verein Schutz und Klarheit brauchen?",
        idealRank: 1,
      },
      { text: "Sollte ein Verein Belästigung nicht dulden?", idealRank: 2 },
      { text: "Würden andere Vorstände an meiner Stelle handeln?", idealRank: 3 },
      { text: "Würde ich einen Konflikt oder Austritte riskieren?", idealRank: 4 },
      { text: "Könnte das Mitglied mich oder den Verein angreifen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-90",
    difficulty: 1,
    dilemma:
      "Jemand hat in einer Bibliothek ein Buch ausgeliehen und es stark beschädigt. Er könnte behaupten, es sei schon so gewesen. Er ist unsicher. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich die Bibliothek und künftige Nutzer schädigen?", idealRank: 1 },
      { text: "Würde es fair sein, für verursachte Schäden zu zahlen?", idealRank: 2 },
      { text: "Würden andere Nutzer an meiner Stelle den Schaden melden?", idealRank: 3 },
      { text: "Würde ich eine Ersatzgebühr zahlen müssen?", idealRank: 4 },
      { text: "Kann die Bibliothek beweisen, dass ich es war?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-91",
    difficulty: 2,
    dilemma:
      "Ein Arbeitnehmer bemerkt, dass ein Kollege Arbeitszeit betrügerisch erfasst. Er ist unsicher, ob er es der Personalabteilung meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würden die Firma und die Kollegen durch den Betrug geschädigt?", idealRank: 1 },
      { text: "Würde es die Pflicht sein, Zeitenbetrug zu melden?", idealRank: 2 },
      { text: "Würden andere Mitarbeiter an meiner Stelle es melden?", idealRank: 3 },
      { text: "Würde ich als Petze gelten?", idealRank: 4 },
      { text: "Könnte ich als Mitwisser Probleme bekommen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-92",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Supermarkt an der Selbstbedienungskasse einen Artikel vergessen zu wiegen und zu scannen. Sie ist unsicher, ob sie zurückgeht und bezahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Supermarkt um den Betrag bringen?", idealRank: 1 },
      { text: "Würde es meine Pflicht sein, alle Waren zu scannen und zu bezahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle zurückgehen?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Gibt es Kontrollen oder Kameras?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-93",
    difficulty: 2,
    dilemma:
      "Ein Lehrer hat einen Schüler bei einer Prüfung abschreiben sehen, aber nicht eingegriffen. Er ist unsicher, ob er die Arbeit nachträglich mit null bewertet oder den Vorfall meldet. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Lehrer bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich den anderen Schülern und der Gerechtigkeit gerecht werden?",
        idealRank: 1,
      },
      { text: "Sollte Betrug in Prüfungen konsequent geahndet werden?", idealRank: 2 },
      { text: "Würden andere Lehrer an meiner Stelle so handeln?", idealRank: 3 },
      { text: "Würde ich dem Schüler und den Eltern Ärger machen?", idealRank: 4 },
      {
        text: "Könnte ich mich rechtfertigen müssen, warum ich nicht eingegriffen habe?",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-3-94",
    difficulty: 1,
    dilemma:
      "Beim Bezahlen im Geschäft bemerkt der Kunde, dass die Kassiererin einen Artikel nicht berechnet hat. Er ist unsicher, ob er darauf hinweist. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Kunde bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde die Kassiererin oder der Laden für den Fehler einstehen müssen?",
        idealRank: 1,
      },
      { text: "Würde es fair sein, alle Waren zu bezahlen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle den Fehler melden?", idealRank: 3 },
      { text: "Spare ich den Betrag?", idealRank: 4 },
      { text: "Wird die Kasse am Abend stimmen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-95",
    difficulty: 2,
    dilemma:
      "Ein Mieter hat die Wohnung beim Auszug nicht vollständig gereinigt, obwohl es im Vertrag steht. Die Vermieterin hat es bei der Übergabe nicht beanstandet. Er ist unsicher, ob er von sich aus noch einmal putzen geht. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Mieter bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich der Vermieterin und dem nächsten Mieter gerecht werden?", idealRank: 1 },
      { text: "Würde es vertragsgemäß sein, die Wohnung sauber zu übergeben?", idealRank: 2 },
      { text: "Würden andere Mieter an meiner Stelle nachputzen?", idealRank: 3 },
      { text: "Wäre es mir zu aufwendig?", idealRank: 4 },
      { text: "Kann sie eine Reinigungspauschale von der Kaution abziehen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-96",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Einkaufen einen Pfandbon nicht abgegeben und das Pfandgeld behalten. Er ist unsicher, ob er beim nächsten Einkauf den Bon abgibt oder den Betrag „spendet“. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Laden oder das System unfair behandeln?", idealRank: 1 },
      {
        text: "Würde es die Regel sein, Pfand nur gegen Rückgabe der Flaschen zu erhalten?",
        idealRank: 2,
      },
      { text: "Würden andere Kunden an meiner Stelle den Bon abgeben?", idealRank: 3 },
      { text: "Spare ich den kleinen Betrag?", idealRank: 4 },
      { text: "Wird der Bon ablaufen oder ungültig?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-97",
    difficulty: 2,
    dilemma:
      "Ein Arbeitgeber bemerkt, dass ein Mitarbeiter krank feiert, obwohl er gesund ist. Er ist unsicher, ob er das anspricht oder einen Arztbericht verlangt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die der Arbeitgeber bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würden die Firma und die Kollegen durch unberechtigten Krankenstand geschädigt?",
        idealRank: 1,
      },
      { text: "Sollte Arbeitszeit ehrlich erfasst werden?", idealRank: 2 },
      { text: "Würden andere Arbeitgeber an meiner Stelle nachfragen?", idealRank: 3 },
      { text: "Würde ich einen Konflikt mit dem Mitarbeiter riskieren?", idealRank: 4 },
      { text: "Kann ich einen Arztbericht verlangen oder nachweisen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-98",
    difficulty: 1,
    dilemma:
      "Eine Person hat im Restaurant ein Gericht zurückgehen lassen und behauptet, es sei kalt gewesen, obwohl es in Ordnung war. Sie hat ein neues bekommen. Sie ist unsicher, ob sie beim Bezahlen beide Gerichte bezahlt oder nur eines. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die sie bei ihrer Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich das Restaurant unfair belasten?", idealRank: 1 },
      {
        text: "Würde es fair sein, nur das zu bezahlen, was man tatsächlich in Anspruch genommen hat, und nicht täuschen?",
        idealRank: 2,
      },
      { text: "Würden andere Gäste an meiner Stelle beide Gerichte bezahlen?", idealRank: 3 },
      { text: "Spare ich den Preis des zweiten Gerichts?", idealRank: 4 },
      { text: "Wird die Kellnerin beide Gerichte auf die Rechnung setzen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-99",
    difficulty: 2,
    dilemma:
      "Ein Vereinsmitglied hat bei einer Abstimmung mehrfach abgestimmt (z. B. für sich und für ein abwesendes Mitglied). Es ist unsicher, ob es den Wahlleiter informiert. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die es bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      {
        text: "Würde ich die anderen Mitglieder und die demokratische Abstimmung beeinträchtigen?",
        idealRank: 1,
      },
      { text: "Würde es die Regel sein, dass jedes Mitglied nur eine Stimme hat?", idealRank: 2 },
      { text: "Würden andere Mitglieder an meiner Stelle es melden?", idealRank: 3 },
      { text: "Hätte ich gerne mehr Einfluss?", idealRank: 4 },
      { text: "Könnte die doppelte Stimme auffallen?", idealRank: 5 },
    ],
  },
  {
    id: "se-3-100",
    difficulty: 1,
    dilemma:
      "Jemand hat beim Online-Händler einen Rabattcode verwendet, der eigentlich abgelaufen war, aber noch funktioniert hat. Er ist unsicher, ob er die Bestellung so lässt oder den vollen Preis zahlt. Wie relevant sollten Ihrer Meinung nach die folgenden Überlegungen, die er bei seiner Entscheidung angestellt haben könnte, sein?",
    aussagen: [
      { text: "Würde ich den Händler zu Unrecht um den Rabatt bringen?", idealRank: 1 },
      { text: "Würde es fair sein, nur gültige Rabatte zu nutzen?", idealRank: 2 },
      { text: "Würden andere Kunden an meiner Stelle den vollen Preis zahlen?", idealRank: 3 },
      { text: "Spare ich den Rabatt?", idealRank: 4 },
      { text: "Wird der Händler den Fehler bemerken und die Bestellung stornieren?", idealRank: 5 },
    ],
  },
];
