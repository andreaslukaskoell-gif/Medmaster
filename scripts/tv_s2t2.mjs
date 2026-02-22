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

src = ins(src, "tv2-t2-q2",
  q("tv2-t2-q3",
    "Welche Wirkung haben Neonicotinoide laut Text auf Bienen?",
    ["Sie t\u00F6ten die Bienenkonigin direkt",
     "Sie verhindern die Honigproduktion vollst\u00E4ndig",
     "Sie sch\u00E4digen das Nervensystem und beeintr\u00E4chtigen die Orientierungsf\u00E4higkeit der Bienen",
     "Sie f\u00F6rdern die Verbreitung der Varroa-Milbe",
     "Sie zerst\u00F6ren die Bl\u00FChfl\u00E4chen, von denen Bienen abh\u00E4ngig sind"],
    2,
    "Der Text erkl\u00E4rt: \u201EPestizide aus der Landwirtschaft, insbesondere Neonicotinoide, sch\u00E4digen das Nervensystem der Bienen und beeintr\u00E4chtigen ihre Orientierungsf\u00E4higkeit.\u201C") +
  q("tv2-t2-q4",
    "Wie sch\u00E4digt die Varroamilbe laut Text die Bienenvolker?",
    ["Sie zerst\u00F6rt die Waben und vernichtet damit die Honigvorr\u00E4te",
     "Sie t\u00F6tet die Bienenk\u00F6nigin durch Giftstoffe",
     "Sie ern\u00E4hrt sich von der K\u00F6rperfl\u00FCssigkeit der Bienen und \u00FCbertr\u00E4gt Viren",
     "Sie verstopft die Atemwege der Bienen",
     "Sie bef\u00E4llt ausschlie\u00DFlich die Larven und verhindert deren Entwicklung"],
    2,
    "Im Text hei\u00DFt es: \u201EParasiten wie die Varroamilbe schw\u00E4chen die Bienenvolker zus\u00E4tzlich, indem sie sich von der K\u00F6rperfl\u00FCssigkeit der Bienen ern\u00E4hren und Viren \u00FCbertragen.\u201C") +
  q("tv2-t2-q5",
    "Welche Auswirkung des Klimawandels auf Bienen wird im Text beschrieben?",
    ["Der Klimawandel erh\u00F6ht die Temperatur und totet Bienen direkt durch Hitzestress",
     "Der Klimawandel verschiebt die Bl\u00FChzeiten von Pflanzen, sodass sie nicht mehr mit den Aktivit\u00E4tszyklen der Bienen \u00FCbereinstimmen",
     "Der Klimawandel f\u00FChrt zu mehr St\u00FCrmen, die Bienenst\u00F6cke zerst\u00F6ren",
     "Der Klimawandel f\u00F6rdert das Wachstum der Varroamilbe durch w\u00E4rmere Winter",
     "Der Klimawandel erh\u00F6ht den Pestizideinsatz in der Landwirtschaft"],
    1,
    "Der Text besagt: \u201Eder Klimawandel verschiebt die Bl\u00FChzeiten von Pflanzen, sodass sie nicht mehr mit den Aktivit\u00E4tszyklen der Bienen \u00FCbereinstimmen.\u201C"));

writeFileSync(FILE, src, "utf8");
console.log("tv2-t2 done, length:", src.length);
