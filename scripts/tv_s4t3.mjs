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
// tv4-t3: q3,q4,q5
src = ins(src, "tv4-t3-q2",
  q("tv4-t3-q3",
    "Was bedeutet der Begriff 'D\u00E9j\u00E0-vu' w\u00F6rtlich laut Text?",
    ["Bereits geh\u00F6rt",
     "Schon gesehen",
     "Wieder erlebt",
     "Schon gewusst",
     "Bereits gesp\u00FCrt"],
    1,
    "Der Text erkl\u00E4rt: \u201EDer Begriff stammt aus dem Franz\u00F6sischen und bedeutet w\u00F6rtlich 'schon gesehen'.\u201C") +
  q("tv4-t3-q4",
    "Welche alternative Theorie zu D\u00E9j\u00E0-vus wird im Text neben dem Ged\u00E4chtnisFehler-Modell vorgestellt?",
    ["D\u00E9j\u00E0-vus entstehen durch kurze Bewusstseinspausen w\u00E4hrend des Schlafs",
     "D\u00E9j\u00E0-vus sind Erinnerungen an vergangene Leben",
     "D\u00E9j\u00E0-vus treten auf, wenn die aktuelle Umgebung einer fr\u00FCheren \u00E4hnelt, die nicht mehr bewusst erinnert wird",
     "D\u00E9j\u00E0-vus werden durch bestimmte Duftstoffe ausgel\u00F6st",
     "D\u00E9j\u00E0-vus entstehen durch einen Kurzschluss im visuellen Kortex"],
    2,
    "Im Text steht: \u201EEine andere Theorie besagt, dass D\u00E9j\u00E0-vus auftreten, wenn die akt\u00FClle Umgebung einer fr\u00FCheren \u00E4hnelt, die nicht mehr bewusst erinnert wird.\u201C") +
  q("tv4-t3-q5",
    "Welcher Befund bei Epilepsiepatienten weist laut Text auf eine Beteiligung des Temporallappens hin?",
    ["Epilepsiepatienten haben deutlich schlechtere Erinnerungen an D\u00E9j\u00E0-vus",
     "D\u00E9j\u00E0-vus treten bei Temporallappenepilepsie deutlich h\u00E4ufiger auf und k\u00F6nnen als Vorboten eines epileptischen Anfalls gelten",
     "Epilepsiepatienten erleben keine echten D\u00E9j\u00E0-vus, nur Halluzinationen",
     "Der Temporallappen ist der einzige Teil des Gehirns, der beim D\u00E9j\u00E0-vu aktiv ist",
     "Epilepsiepatienten k\u00F6nnen D\u00E9j\u00E0-vus durch Konzentration unterdr\u00FCcken"],
    1,
    "Der Text besagt: \u201ED\u00E9j\u00E0-vus bei Epilepsiepatienten mit Temporallappenepilepsie deutlich h\u00E4ufiger auftreten und dort sogar als Vorboten eines epileptischen Anfalls gelten k\u00F6nnen, was die Beteiligung des Temporallappens an diesem Ph\u00E4nomen nahelegt.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv4-t3 done, len:", src.length);
