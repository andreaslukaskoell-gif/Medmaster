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
// tv4-t2: q3,q4,q5
src = ins(src, "tv4-t2-q2",
  q("tv4-t2-q3",
    "Was ist laut Text das Grundprinzip des Utilitarismus?",
    ["Eine Handlung ist moralisch richtig, wenn sie den Handelnden selbst gl\u00FCcklich macht",
     "Eine Handlung ist moralisch richtig, wenn sie Gottes Geboten entspricht",
     "Eine Handlung ist moralisch richtig, wenn sie das gr\u00F6\u00DFtm\u00F6gliche Gl\u00FCck f\u00FCr die gr\u00F6\u00DFtm\u00F6gliche Zahl von Menschen hervorbringt",
     "Eine Handlung ist moralisch richtig, wenn sie einer universellen Pflicht entspricht",
     "Eine Handlung ist moralisch richtig, wenn sie die Tugend der handelnden Person f\u00F6rdert"],
    2,
    "Der Text beschreibt: \u201EIhr Grundprinzip lautet, dass eine Handlung dann moralisch richtig ist, wenn sie das gr\u00F6\u00DFtm\u00F6gliche Gl\u00FCck f\u00FCr die gr\u00F6\u00DFtm\u00F6gliche Zahl von Menschen hervorbringt.\u201C") +
  q("tv4-t2-q4",
    "Welche Kritik am Utilitarismus wird im Text vorgebracht?",
    ["Der Utilitarismus ist zu religi\u00F6s orientiert",
     "Der Utilitarismus k\u00F6nnte individuelle Rechte zugunsten des Gesamtwohls opfern \u2013 etwa wenn Folter das Leid vieler verhindert",
     "Der Utilitarismus ist zu kompliziert, um in der Praxis angewendet zu werden",
     "Der Utilitarismus bevorzugt immer die wohlhabende Mehrheit",
     "Der Utilitarismus vernachl\u00E4ssigt \u00F6konomische Faktoren"],
    1,
    "Der Text bringt vor: \u201Edass die Theorie individuelle Rechte zugunsten des Gesamtwohls opfern k\u00F6nnte: Wenn die Folter eines Einzelnen das Leid vieler verhindert, w\u00E4re sie nach streng utilitaristischer Logik gerechtfertigt.\u201C") +
  q("tv4-t2-q5",
    "Nach welchen Kriterien versuchte Bentham laut Text Gl\u00FCck zu messen?",
    ["Nach sozialem Status, Reichtum und Bildung",
     "Nach Intensit\u00E4t, Dauer, Gewissheit und N\u00E4he eines Vergn\u00FCgens",
     "Nach dem Nutzen f\u00FCr die Gesellschaft im Ganzen",
     "Nach dem Grad der \u00DCbereinstimmung mit moralischen Normen",
     "Nach der H\u00E4ufigkeit positiver sozialer Interaktionen"],
    1,
    "Im Text hei\u00DFt es: \u201EBentham formulierte das Prinzip der N\u00FCtzlichkeit und versuchte, Gl\u00FCck quantitativ zu messen \u2013 anhand von Kriterien wie Intensit\u00E4t, Dauer, Gewissheit und N\u00E4he eines Vergn\u00FCgens.\u201C"));
writeFileSync(FILE, src, "utf8");
console.log("tv4-t2 done, len:", src.length);
