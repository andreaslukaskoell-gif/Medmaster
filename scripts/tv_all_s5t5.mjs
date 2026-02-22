import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
function ins(src, targetId, newQsText) {
  const marker = 'id: "' + targetId + '"';
  const idx = src.indexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + targetId + "\n"); return src; }
  const CLOSE_PAT = NL + "        }," + NL + "      ],";
  const closeQ = src.indexOf(CLOSE_PAT, idx);
  if (closeQ < 0) { process.stderr.write("NO CLOSE for " + targetId + "\n"); return src; }
  const insertPos = closeQ + NL.length + "        },".length;
  return src.slice(0, insertPos) + newQsText + src.slice(insertPos);
}
function q(id, question, opts, correct, expl) {
  const T = "        ";
  return NL + T + "{" + NL +
    T + "  id: " + JSON.stringify(id) + "," + NL +
    T + "  question: " + JSON.stringify(question) + "," + NL +
    T + "  options: [" + NL +
    opts.map(o => T + "    " + JSON.stringify(o) + ",").join(NL) + NL +
    T + "  ]," + NL +
    T + "  correctOption: " + correct + "," + NL +
    T + "  explanation:" + NL +
    T + "    " + JSON.stringify(expl) + "," + NL +
    T + "}";
}
// SET 5 - process from bottom to top to preserve positions
// tv5-t5: q3,q4,q5
src = ins(src, "tv5-t5-q2",
  q("tv5-t5-q3","Was ist laut Text die 'pluralistische Ignoranz'?",
    ["Die Annahme, dass niemand sonst um Hilfe bitten wird",
     "Das Ph\u00E4nomen, dass Menschen in mehrdeutigen Situationen das Verhalten anderer beobachten und \u2013 wenn niemand reagiert \u2013 die Situation als nicht bedrohlich interpretieren",
     "Die \u00DCberzeugung, dass in einer gro\u00DFen Gruppe immer jemand anderes helfen wird",
     "Die kollektive Ignoranz einer Gruppe gegen\u00FCber gesellschaftlichen Problemen",
     "Die Tendenz, bei offensichtlichen Notf\u00E4llen trotzdem nicht einzugreifen"],
    1,"Der Text erkl\u00E4rt: \u201EIn mehrdeutigen Situationen beobachten Menschen das Verhalten anderer, um die Lage einzusch\u00E4tzen. Wenn niemand reagiert, interpretieren alle die Situation als nicht bedrohlich.\u201C") +
  q("tv5-t5-q4","Welchen historischen Fall inspirierte laut Text die Erforschung des Bystander-Effekts?",
    ["Den Fall eines Kindes, das im Stra\u00DFenverkehr verunglt\u00FCckte",
     "Die Ermordung von Kitty Genovese in New York, bei der Medienberichte behaupteten, 38 Nachbarn h\u00E4tten ohne einzugreifen zugesehen",
     "Ein Laborexperiment mit elektrischen Schocks",
     "Eine \u00DCberschwemmungskatastrophe ohne Helfer",
     "Eine Studie \u00FCber Kinder auf Schulh\u00F6fen"],
    1,"Der Text beschreibt: \u201EIm Jahr 1964 wurde die junge New Yorkerin Kitty Genovese vor ihrem Wohnhaus ermordet. Medienberichte behaupteten, 38 Nachbarn h\u00E4tten den Angriff beobachtet, ohne einzugreifen.\u201C") +
  q("tv5-t5-q5","Was ist laut Text die 'Bewertungsangst' als Mechanismus des Bystander-Effekts?",
    ["Die Angst vor k\u00F6rperlicher Verletzung beim Eingreifen",
     "Die Sorge, durch Eingreifen in einer Nicht-Notfallsituation sich zu blamieren",
     "Die Angst, von der Polizei als T\u00E4ter verd\u00E4chtigt zu werden",
     "Die Bef\u00FCrchtung, die notleidende Person durch Hilfe zu verletzen",
     "Die Angst vor sozialen Konsequenzen durch Nicht-Helfen"],
    1,"Im Text hei\u00DFt es: \u201EDrittens die Bewertungsangst: Menschen f\u00FCrchten, sich durch unangemessenes Eingreifen in einer Nicht-Notfallsituation zu blamieren.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv5-t5 done, len:", src.length);
