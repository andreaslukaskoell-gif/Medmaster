import { readFileSync, writeFileSync } from "fs";
const FILE = "/Users/Luki/medmaster/src/data/tvTextsExpanded.ts";
let src = readFileSync(FILE, "utf8");
const NL = "\n";
function ins(src, lastId, qs) {
  const marker = 'id: "' + lastId + '"';
  const idx = src.lastIndexOf(marker);
  if (idx < 0) { process.stderr.write("NOT FOUND: " + lastId + "\n"); return src; }
  const closeQ = src.indexOf(NL + "        }," + NL + "      ],", idx);
  if (closeQ < 0) { process.stderr.write("NO CLOSE for " + lastId + "\n"); return src; }
  const insertPos = closeQ + (NL + "        },").length;
  return src.slice(0, insertPos) + qs + src.slice(insertPos);
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

src = ins(src, "tv1-t5-q2",
  q("tv1-t5-q3",
    "Bei welchen Personengruppen tritt ansteckendes G\u00E4hnen laut Text seltener auf?",
    ["Bei \u00E4lteren Menschen \u00FCber 70 Jahren",
     "Bei Kindern unter vier Jahren und Menschen mit bestimmten neurologischen St\u00F6rungen",
     "Bei Frauen im Vergleich zu M\u00E4nnern",
     "Bei Menschen in w\u00E4rmeren Klimazonen",
     "Bei Menschen mit besonders hoher Intelligenz"],
    1,
    "Der Text nennt: \u201Ebei Kindern unter vier Jahren sowie bei Menschen mit bestimmten neurologischen St\u00F6rungen seltener beobachtet wird.\u201C") +
  q("tv1-t5-q4",
    "Was belegt laut Text die Thermoregulationshypothese des G\u00E4hnens?",
    ["Menschen g\u00E4hnen nach k\u00F6rperlicher Anstrengung h\u00E4ufiger",
     "G\u00E4hnen tritt ausschlie\u00DFlich vor dem Einschlafen auf",
     "Menschen in w\u00E4rmeren Umgebungen g\u00E4hnen h\u00E4ufiger als in k\u00FChlen",
     "Fische und V\u00F6gel g\u00E4hnen nicht, nur S\u00E4ugetiere",
     "G\u00E4hnen erh\u00F6ht den Sauerstoffgehalt im Blut messbar"],
    2,
    "Im Text hei\u00DFt es: \u201EDiese Thermoregulationshypothese wird durch die Beobachtung gest\u00FCtzt, dass Menschen in w\u00E4rmeren Umgebungen h\u00E4ufiger g\u00E4hnen als in k\u00FChlen.\u201C") +
  q("tv1-t5-q5",
    "Welche verbreitete Hypothese \u00FCber das G\u00E4hnen gilt laut Text als weitgehend widerlegt?",
    ["G\u00E4hnen dient der K\u00FChlung des Gehirns",
     "G\u00E4hnen ist ein soziales Signal zur Kommunikation von Ersch\u00F6pfung",
     "G\u00E4hnen dient dazu, den Sauerstoffgehalt im Blut zu erh\u00F6hen",
     "G\u00E4hnen tritt bei allen Wirbeltieren auf",
     "Ansteckendes G\u00E4hnen ist mit Empathie verbunden"],
    2,
    "Der Text beschreibt: \u201EEine weit verbreitete, aber inzwischen weitgehend widerlegte Hypothese besagt, dass G\u00E4hnen dazu dient, den Sauerstoffgehalt im Blut zu erh\u00F6hen.\u201C"));

writeFileSync(FILE, src, "utf8");
console.log("tv1-t5 done, length:", src.length);
