/**
 * Emotionen erkennen — Set 4 (30 Aufgaben, ee-4-01 bis ee-4-30)
 * Schwerpunkt: SCHWER (difficulty 2–3) — ambivalente Situationen,
 * bei denen mehrere Emotionen gleichzeitig plausibel sind und die
 * Abgrenzung wahrscheinlich/unwahrscheinlich subtil ist.
 * Alltagsszenarien, offizielles MedAT-Format (5 Emotionen pro Aufgabe).
 */

import type { EmotionenErkennenTask } from "./sekDataNew";

export const emotionenErkennenSet4: EmotionenErkennenTask[] = [
  // ─── Difficulty 2 (mittel): 10 Aufgaben ────────────────────────
  {
    id: "ee-4-01",
    difficulty: 2,
    situation:
      "Anna hat nach jahrelanger Pflege ihren schwer kranken Vater verloren. In den Wochen danach bemerkt sie, dass sie abends zum ersten Mal seit langem wieder durchschlafen kann und wieder Energie für eigene Hobbys hat.",
    emotionen: [
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-02",
    difficulty: 2,
    situation:
      "Michael hat bei einer Firmenfeier erfahren, dass sein Teamkollege befördert wurde, obwohl Michael selbst mehr Überstunden gemacht und bessere Ergebnisse erzielt hat. Der Kollege bedankt sich bei Michael und sagt, dass er ohne seine Hilfe nie so weit gekommen wäre.",
    emotionen: [
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-03",
    difficulty: 2,
    situation:
      "Sabine hat sich nach langem Überlegen von ihrem Partner getrennt, weil sie sich in der Beziehung nicht mehr wohlgefühlt hat. Ihr Ex-Partner hat die Trennung sofort akzeptiert und schon am nächsten Tag sein Profil auf einer Dating-App erstellt.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-04",
    difficulty: 2,
    situation:
      "Klaus hat als Ersatzfahrer überraschend die Chance bekommen, beim jährlichen Firmen-Kartrennen zu starten. Er gewinnt das Rennen souverän. Danach sagt sein Chef beiläufig, dass der eigentliche Fahrer sicher noch schneller gewesen wäre.",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-05",
    difficulty: 2,
    situation:
      "Theresa hat einen Wochenendtrip mit ihrer besten Freundin geplant. Am Tag davor sagt die Freundin ab und postet gleichzeitig Fotos von einem Ausflug mit einer anderen Gruppe. Als Theresa nachfragt, sagt die Freundin, es habe sich spontan ergeben.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Eifersucht", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-06",
    difficulty: 2,
    situation:
      "Jürgen hat jahrelang als Kellner gearbeitet und sich nebenbei zum Sommelier weitergebildet. Bei der Abschlussprüfung besteht er als Bester seines Jahrgangs. Sein Vater sagt am Telefon: ‚Naja, ein richtiger Beruf ist das trotzdem nicht.'",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-07",
    difficulty: 2,
    situation:
      "Elisabeth hat nach monatelanger Jobsuche endlich ein Angebot bekommen. Der Job ist in einer anderen Stadt, was bedeutet, dass sie ihre betagte Mutter, die sie regelmäßig besucht, nur noch selten sehen kann. Die Mutter sagt, sie solle unbedingt annehmen.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-08",
    difficulty: 2,
    situation:
      "Wolfgang hat seinem Nachbarn monatelang geholfen, den Garten zu renovieren. Als Wolfgang selbst Hilfe beim Umzug braucht, sagt der Nachbar, er habe leider keine Zeit. Beim Umzugstag sieht Wolfgang den Nachbarn im Garten sitzen und Bier trinken.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-09",
    difficulty: 2,
    situation:
      "Christine hat beim Blutspenden erfahren, dass sie eine seltene Blutgruppe hat. Der Arzt erklärt ihr, dass ihr Blut besonders wertvoll ist und sie regelmäßig spenden sollte. Christine hat eigentlich Angst vor Nadeln und ist nur gegangen, weil eine Freundin sie überredet hat.",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-10",
    difficulty: 2,
    situation:
      "Franz hat bei einer Familienfeier erfahren, dass sein Bruder seit einem Jahr heimlich mit Franz' bester Freundin zusammen ist. Beide haben es ihm verschwiegen, weil sie befürchteten, er würde es nicht gutheißen.",
    emotionen: [
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },

  // ─── Difficulty 3 (schwer): 20 Aufgaben ────────────────────────
  {
    id: "ee-4-11",
    difficulty: 3,
    situation:
      "Maria hat ihren todkranken Mann ein Jahr lang zu Hause gepflegt. Nach seinem Tod erfährt sie beim Durchgehen seiner E-Mails, dass er kurz vor seiner Diagnose eine Affäre hatte. Er hatte die Affäre beendet und sich intensiv um die Beziehung bemüht.",
    emotionen: [
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Verwirrung", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-12",
    difficulty: 3,
    situation:
      "Peter hat seine Tochter jahrelang beim Geigenüben unterstützt und tausende Euro in Unterricht investiert. Beim Vorspiel in der Musikschule spielt sie fehlerfrei und bekommt standing ovations. Hinterher sagt sie vor allen: ‚Ich war trotz meiner Eltern erfolgreich, nicht wegen ihnen.'",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Verletzung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-13",
    difficulty: 3,
    situation:
      "Katharina bekommt nach Jahren der Unfruchtbarkeitsbehandlung endlich ein positives Testergebnis. Am selben Tag erzählt ihr ihre Schwester strahlend, dass sie ebenfalls schwanger ist — ungeplant und im dritten Monat.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-14",
    difficulty: 3,
    situation:
      "Georg erfährt, dass sein Sohn die Familientradition bricht und statt Medizin Kunst studieren will. Die Großeltern sind entsetzt, aber Georg sieht das Talent seines Sohnes. Seine Frau sagt, er solle den Sohn überreden, ‚vernünftig' zu studieren.",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Sorge", correct: "wahrscheinlich" },
      { name: "Innerer Konflikt", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-15",
    difficulty: 3,
    situation:
      "Helga hat in einer Selbsthilfegruppe für Angehörige von Suchtkranken endlich den Mut gefunden, über ihre Erfahrungen zu sprechen. Danach kommt eine Teilnehmerin zu ihr und sagt: ‚Das klingt doch nicht so schlimm — mein Mann war viel schlimmer.'",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-16",
    difficulty: 3,
    situation:
      "Friedrich hat seinem besten Freund vor fünf Jahren 5.000 Euro geliehen. Der Freund hat das Geld nie zurückgezahlt. Jetzt postet der Freund Fotos von einer Luxusreise und schreibt dazu: ‚Endlich gönn ich mir was.'",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-17",
    difficulty: 3,
    situation:
      "Barbara hat nach einem Schlaganfall monatelang an ihrer Rehabilitation gearbeitet und kann endlich wieder kurze Strecken ohne Gehhilfe laufen. Beim Familientreffen sagt ihre Schwiegermutter: ‚Du siehst aus, als hättest du dich noch gar nicht richtig erholt.'",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Verletzung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-18",
    difficulty: 3,
    situation:
      "Karl hat als Freiwilliger im Hochwasserschutz gearbeitet und wurde von der Gemeinde öffentlich geehrt. In der Lokalzeitung wird sein Name falsch geschrieben und stattdessen sein Nachbar als Haupthelfer dargestellt, der erst am letzten Tag kurz vorbeigekommen war.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-19",
    difficulty: 3,
    situation:
      "Ingrid hat ihre Tochter jahrelang gegen den Willen der Familie verteidigt, als diese mit einer Frau eine Beziehung einging. Nach sieben Jahren trennt sich die Tochter und sagt, sie sei nun mit einem Mann zusammen. Ingrid fragt sich, ob die ganzen Familienkonflikte umsonst waren.",
    emotionen: [
      { name: "Verwirrung", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-20",
    difficulty: 3,
    situation:
      "Otto hat sein Leben lang als Tischler gearbeitet und nie viel verdient. Bei einer Erbschaft erhält er überraschend 200.000 Euro von einer entfernten Tante. Seine erwachsenen Kinder melden sich plötzlich täglich und machen Vorschläge, was er mit dem Geld tun sollte.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Misstrauen", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-21",
    difficulty: 3,
    situation:
      "Brigitte hat ihren Job gekündigt, um ihre demenzkranke Mutter zu pflegen. Nach zwei Jahren stirbt die Mutter. Brigittes Geschwister, die sich nie an der Pflege beteiligt haben, fordern bei der Erbteilung gleiche Anteile und sagen, Brigitte habe ja ohnehin umsonst bei der Mutter gewohnt.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-22",
    difficulty: 3,
    situation:
      "Erwin hat seinen Sohn nach dem Studienabbruch bei sich aufgenommen und ihm eine Stelle in seiner Firma verschafft. Nach sechs Monaten kündigt der Sohn per SMS und schreibt, er wolle ‚sein eigenes Ding machen' — als Influencer.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Sorge", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-23",
    difficulty: 3,
    situation:
      "Monika hat nach ihrer Scheidung erstmals jemanden auf einer Dating-Plattform getroffen. Das Date verläuft wunderbar, aber beim Abschied erwähnt der Mann beiläufig, dass er noch verheiratet sei und sich ‚gerade in Trennung' befinde.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-24",
    difficulty: 3,
    situation:
      "Hans hat bei einem Segelunfall einem Fremden das Leben gerettet und wurde dafür in der Zeitung gelobt. Zwei Wochen später wird er von der Person, die er gerettet hat, auf Schadensersatz verklagt, weil er ihr beim Herausziehen aus dem Wasser versehentlich die Schulter ausgekugelt hat.",
    emotionen: [
      { name: "Fassungslosigkeit", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-25",
    difficulty: 3,
    situation:
      "Gertrud hat 30 Jahre lang in einem Familienbetrieb gearbeitet und wurde immer als ‚Teil der Familie' bezeichnet. Bei der Pensionierung bekommt sie einen Blumenstrauß und eine Standardkarte. Ihr Nachfolger, der erst drei Monate im Unternehmen ist, bekommt zur Einstandsfeier eine teure Uhr.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-26",
    difficulty: 3,
    situation:
      "Rudolf hat nach dem Tod seiner Frau begonnen, ehrenamtlich Deutsch für Geflüchtete zu unterrichten. Ein Schüler, dem er besonders geholfen hat, besteht die B2-Prüfung und bekommt einen guten Job. Bei der Feier bedankt sich der Schüler bei allen — nur Rudolf erwähnt er nicht.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Verletzung", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-27",
    difficulty: 3,
    situation:
      "Silvia hat für ihre Firma einen wichtigen Kunden gewonnen, der den Jahresumsatz um 20 % steigern wird. In der Vorstandssitzung wird der Erfolg ihrem Abteilungsleiter zugeschrieben. Der Abteilungsleiter nimmt die Anerkennung an und zwinkert Silvia zu.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-28",
    difficulty: 3,
    situation:
      "Ernst hat sein Haus verkauft, um seiner Tochter das Medizinstudium im Ausland zu finanzieren. Nach zwei Semestern bricht sie ab und sagt, sie habe nie Ärztin werden wollen, sondern habe sich nur beworben, damit er stolz auf sie ist.",
    emotionen: [
      { name: "Schock", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-29",
    difficulty: 3,
    situation:
      "Hedwig hat ihrem Enkel über Jahre hinweg bei jedem Besuch Geschenke mitgebracht und ihn finanziell unterstützt. Als sie im Krankenhaus liegt, erfährt sie, dass der Enkel die geschenkten Wertgegenstände verkauft hat, um sich ein neues Smartphone zu kaufen.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-4-30",
    difficulty: 3,
    situation:
      "Margarete hat jahrzehntelang jeden Sonntag für die Familie gekocht. Am Muttertag sagt ihre Schwiegertochter beiläufig, dass die Kinder das Sonntagsessen bei ihr besser finden. Margaretes Sohn schweigt dazu und scrollt auf seinem Handy.",
    emotionen: [
      { name: "Verletzung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
];
