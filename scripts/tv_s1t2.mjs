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

// tv1-t2: q4, q5
src = ins(src, "tv1-t2-q3",
  q("tv1-t2-q4",
    "Welche Religion verbreitete sich laut Text \u00FCber die Seidenstra\u00DFe von Indien nach China?",
    ["Der Islam", "Das Christentum", "Der Buddhismus", "Der Hinduismus", "Der Zoroastrismus"],
    2,
    "Im Text steht: \u201EDer Buddhismus verbreitete sich \u00FCber die Seidenstra\u00DFe von Indien nach China und Zentralasien.\u201C") +
  q("tv1-t2-q5",
    "Welche Krankheit soll laut Text m\u00F6glicherweise \u00FCber die Handelswege der Seidenstra\u00DFe nach Europa gelangt sein?",
    ["Die Cholera im 19. Jahrhundert", "Die Pocken im 16. Jahrhundert",
     "Die Pest im 14. Jahrhundert", "Die Malaria im 12. Jahrhundert",
     "Der Typhus im 18. Jahrhundert"],
    2,
    "Der Text besagt: \u201Eso wird vermutet, dass die Pest im 14. Jahrhundert \u00FCber Handelswege aus Zentralasien nach Europa gelangte.\u201C"));

writeFileSync(FILE, src, "utf8");
console.log("tv1-t2 done, length:", src.length);
