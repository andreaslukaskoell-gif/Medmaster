import { readFileSync as R, writeFileSync as W } from "fs";
const P = ["/Users/Luki/medmaster/src/data", "tvTextsExpanded2.ts"].join("/");
const src = R(P, "utf8");
const NL = String.fromCharCode(10);
const S6S = src.indexOf("const set6");
const S8S = src.indexOf("const set8");
const END = src.indexOf("export const");
let s67 = src.slice(S6S, S8S);
let s8to10 = src.slice(S8S, END);
const inject = (block, afterId, newQs) => {
  const idTag = "id: \"" + afterId + "\"";
  const idx = block.lastIndexOf(idTag);
  if (idx < 0) { console.error("NOT FOUND:", afterId); return block; }
  const closeIdx = block.indexOf("      ],", idx);
  if (closeIdx < 0) { console.error("NO CLOSE for", afterId); return block; }
  return block.slice(0, closeIdx) + newQs + NL + "      ]," + block.slice(closeIdx + 8);
};
const mkQ = (id, q, opts, correct, expl) => {
  const T = "        ";
  const lines = [T+"{", T+"  id: \"" + id + "\",", T+"  question: \"" + q + "\",", T+"  options: [", ...opts.map(o=>T+"    \""+o+"\","), T+"  ],", T+"  correctOption: "+correct+",", T+"  explanation: \""+expl+"\",", T+"}"];
  return NL+lines.join(NL);
};
const O_6_1_4=["Nur Antikörper und Killerzellen.","Zweistufiges Netzwerk aus angeborenem und erworbenem System; Gedächtnis bildet Impfgrundlage.","Kann durch Impfungen ersetzt werden.","Angeborenes System ist überlegen.","Autoimmunerkrankungen häufigste Folge."];
const O_6_1_5=["Beide gehören zum angeborenen System.","Beide sind redundant.","Ergänzen sich: B-Lymphozyten markieren, T-Zellen töten infizierte Zellen.","T-Zellen von B-Zellen produziert.","B-Zellen nur beim Erstkontakt aktiv."];
const O_6_2_3=["Nur für Knochenmark.","Einzigartige Fähigkeiten, großes Potenzial, viele Therapien noch in Erforschung.","iPS-Zellen haben embryonale verdraengt.","Hauptrisiko Abstoßungsreaktion.","Adulte Stammzellen wichtiger."];
const O_6_2_4=["Vollständig sicher.","Einziges Risiko ist Ethik.","Trotz Tierversuchen Risiko unkontrollierter Zellteilung; weitere Forschung nötig.","iPS risikofrei.","Tumor nur bei adulten Stammzellen."];
const O_6_3_3=["Selten und nur bei Rindern.","Neuartiger Mechanismus, stets tödlich, lange Inkubationszeit erschwert Diagnose.","Mit Antibiotika behandelbar.","Hauptübertragbarkeit Tier zu Mensch.","Prusiner sofort akzeptiert."];
const O_6_3_4=["Über Blutgefäße in alle Organe.","PrPSc faltet gesunde Prion-Proteine um, selbstverstärkende Kettenreaktion.","Immunsystem kann PrPSc eliminieren.","Durch Nervenzellen aktiv transportiert.","Ausbreitung verlangsamt sich ab kritischer Menge."];
const O_6_4_3=["Gelöstes Problem.","Globale Bedrohung durch unsachgemäßen Einsatz; ohne Gegenmaßnahmen drastisch zunehmend.","Nur MRSA gefährlich.","Antibiotika nicht mehr einsetzen.","Nur Landwirtschaft Verursacher."];
const O_6_4_4=["Antibiotika töten alle Bakterien.","Selektionsdruck begünstigt resistente Stämme, da empfindliche absterben und resistente sich vermehren.","Resistente werden langfristig empfindlich.","Nur in Landwirtschaft wirksam.","Nur durch horizontalen Gentransfer."];
const O_6_5_4=["Ciclosporin löst Abstoßung vollständig ohne Nebenwirkungen.","Ciclosporin ermöglicht Transplantationen durch T-Lymphozyten-Hemmung, erfordert aber lebenslange Einnahme mit erhöhtem Infektions- und Krebsrisiko.","Ciclosporin nur kurzfristig.","Unterdrückt gesamtes Immunsystem.","Bereits 1954 eingesetzt."];
const O_7_1_4=["Nur Sauerstoffproduktion.","Zweiphasiger Prozess; Faktoren wie Temperatur und CO2 beeinflussen Effizienz.","RuBisCO wichtigstes Pigment.","Nur C4 bei Hitze möglich.","Chlorophyll a und b austauschbar."];
const O_7_1_5=["C4 ohne Spaltöffnungen.","C4 verzichtet auf Calvin-Zyklus.","C4-Photosynthese ermöglicht effizientere CO2-Fixierung bei Hitze und umgeht Photosyntheserückgang durch Spaltöffnungsschluss.","C4 mehr Sauerstoff ohne RuBisCO.","C4 am effizientesten in gemäßigten Zonen."];
const O_7_2_3=["Nur Korallenriffe betroffen.","CO2-Aufnahme führt zur Versäuerung, bedroht marine Ökosysteme und menschliche Lebensgrundlage.","Ozeane nehmen unbegrenzt CO2 auf.","Kalkschalenbildner nicht gefährdet.","Natürlicher Vorgang."];
const O_7_2_4=["Entweder Versäuerung oder Erwärmung, nie beide.","Korallenbleiche weniger gefährlich.","Korallenriffe durch Versäuerung und Meereswärmung gleichzeitig bedroht; gefährdet Lebensraum für ein Viertel mariner Arten.","Nur tropisch oder polar betroffen.","Korallen passen sich rasch an."];
const O_7_3_3=["Hauptursache aktuellen Klimawandels.","Kühlend durch Sulfataerosole kurzfristig, erwärmend durch CO2 langfristig, negativ auf Ozonschicht.","CO2 wichtiger als Sulfataerosole.","Tambora ohne Auswirkung.","Sulfataerosole wirken jahrzehntelang."];
const O_7_3_4=["Größere SO2-Mengen tendieren zu stärkerem Kühlungseffekt.","Pinatubo stärker als Tambora.","Beide ohne messbaren Einfluss.","Tambora keine Hungersnot.","Inselvulkane generell stärker."];
const O_7_4_3=["Drift ist dasselbe wie natürliche Selektion.","Zufälliger Evolutionsmechanismus in kleinen Populationen; Gründer- und Flaschenhalseffekt führen zu Genverarmung.","Nur in Inselpolulationen relevant.","Begünstigt angepasste Allele.","Flaschenhalseffekt einziger Mechanismus."];
const O_7_4_4=["Körpergröße als Ursache.","Geringe genetische Diversität durch Flaschenhals macht Geparden anfälliger und weniger anpassungsfähig.","Bejagung veränderte Gene.","Natürliche Selektion als Ursache.","Nur anfällig für Viren."];
const O_7_5_4=["Parasiten nur schädlich.","Kein Einfluss auf Populationsdynamik.","Trotz Schädigung des Wirts wichtig für Ökosysteme; regulieren Populationen und fördern Biodiversität.","Parasitismus Übergangsform zwischen Kommensalismus und Mutualismus.","Parasiten profitieren langfristig nicht."];
const QT_6_1_4="Was ist die Hauptaussage des Textes über das Immunsystem?";
const QT_6_1_5="Welche Schlussfolgerung lässt sich über B-Lymphozyten und zytotoxische T-Zellen ziehen?";
const QT_6_2_3="Was ist die Hauptaussage des Textes über Stammzellen?";
const QT_6_2_4="Welche Schlussfolgerung lässt der Text zum Risiko der Stammzelltherapie zu?";
const QT_6_3_3="Was ist laut dem Text die Hauptaussage über Prionenerkrankungen?";
const QT_6_3_4="Welche Schlussfolgerung lässt sich über die Ausbreitung von PrPSc im Gehirn ziehen?";
const QT_6_4_3="Was ist die Hauptaussage des Textes zur Antibiotikaresistenz?";
const QT_6_4_4="Welche Schlussfolgerung lässt der Text zum Selektionsdruck durch Antibiotika zu?";
const QT_6_5_4="Welche Schlussfolgerung lässt sich über den Einsatz von Ciclosporin ziehen?";
const QT_7_1_4="Was ist die Hauptaussage des Textes über die Photosynthese?";
const QT_7_1_5="Welche Schlussfolgerung lässt sich über den Vorteil der C4-Photosynthese ziehen?";
const QT_7_2_3="Was ist die Hauptaussage des Textes zur Ozeanversäuerung?";
const QT_7_2_4="Welche Schlussfolgerung lässt sich über die doppelte Bedrohung von Korallenriffen ziehen?";
const QT_7_3_3="Was ist die Hauptaussage des Textes über Vulkanismus und Klima?";
const QT_7_3_4="Welche Schlussfolgerung lässt sich aus dem Vergleich von Tambora und Pinatubo ziehen?";
const QT_7_4_3="Was ist die Hauptaussage des Textes über genetische Drift?";
const QT_7_4_4="Welche Schlussfolgerung lässt sich über die Krankheitsanfälligkeit der Geparden ziehen?";
const QT_7_5_4="Welche Schlussfolgerung lässt sich über die ökologische Rolle von Parasiten ziehen?";
const EX_6_1_4="Der Text beschreibt das Immunsystem als zweigeteiltes System und zeigt, wie das immunologische Gedächtnis die Grundlage von Impfungen bildet.";
const EX_6_1_5="B-Lymphozyten markieren Erreger mit Antikörpern; zytotoxische T-Zellen töten infizierte Körperzellen. Beide gehören zum erworbenen Immunsystem.";
const EX_6_2_3="Der Text stellt verschiedene Stammzelltypen vor und weist auf Risiken sowie den frühen Stand vieler Therapien hin.";
const EX_6_2_4="Der Text warnt, dass das Risiko unkontrollierter Zellteilung sorgfältig erforscht werden muss und viele Therapien noch am Anfang stehen.";
const EX_6_3_3="Der Text beschreibt den einzigartigen Mechanismus der Prionen, listet bekannte Erkrankungen auf und betont die lange Inkubationszeit als Erschwernis.";
const EX_6_3_4="PrPSc faltet benachbarte normale Prion-Proteine um und löst so eine selbstverstärkende Kettenreaktion aus, die im Text beschrieben wird.";
const EX_6_4_3="Der Text nennt Antibiotikaresistenz als globale Bedrohung und betont, dass ohne Gegenmaßnahmen die Sterblichkeit drastisch steigen könnte.";
const EX_6_4_4="Selektionsdruck begünstigt resistente Stämme: empfindliche Bakterien sterben ab, resistente überleben und vermehren sich ungehindert.";
const EX_6_5_4="Ciclosporin unterdrückt die Abstoßung durch T-Lymphozyten-Hemmung, erfordert aber lebenslange Einnahme mit erhöhtem Infektions- und Krebsrisiko.";
const EX_7_1_4="Der Text beschreibt die Photosynthese als zweiphasigen Prozess und erläutert, wie Faktoren die Effizienz beeinflussen.";
const EX_7_1_5="Bei Hitze schließen Pflanzen Spaltöffnungen und die Photosyntheserate sinkt. C4-Pflanzen wie Mais ermöglichen effizientere CO2-Fixierung und umgehen dieses Problem.";
const EX_7_2_3="Der Text erklärt, wie CO2-Emissionen zur Versauerung führen, und betont die Bedrohung für marine Ökosysteme und menschliche Lebensgrundlage.";
const EX_7_2_4="Korallenriffe sind durch Versäuerung und Meereswärmung gleichzeitig bedroht. Als Lebensraum für ein Viertel mariner Arten ist die kombinierte Bedrohung besonders gravierend.";
const EX_7_3_3="Der Text beschreibt den kühlenden Sulfataerosol-Effekt, den geringen CO2-Treibhauseffekt und den negativen Einfluss auf die Ozonschicht als klimatische Wirkungen von Vulkanen.";
const EX_7_3_4="Tambora setzte 60 Mio. Tonnen SO2 frei und kühlte stärker; Pinatubo 20 Mio. Tonnen. Größere SO2-Mengen gehen tendenziell mit stärkerem Kühlungseffekt einher.";
const EX_7_4_3="Der Text definiert genetische Drift als zufälligen Mechanismus jenseits der Selektion, stärker in kleinen Populationen, mit Gründer- und Flaschenhalseffekt als Ausprägungen.";
const EX_7_4_4="Die geringe genetische Diversität der Geparden geht auf einen Flaschenhals zurück und macht sie anfälliger für Krankheiten und weniger anpassungsfähig.";
const EX_7_5_4="Parasiten schaden dem Wirt, sind aber wichtige Bestandteile von Ökosystemen, da sie die Populationsdynamik regulieren und die biologische Vielfalt fördern.";

// Inject set6 new questions
s67 = inject(s67, "tv6-1-q3", mkQ("tv6-1-q4",QT_6_1_4,O_6_1_4,1,EX_6_1_4)+","+mkQ("tv6-1-q5",QT_6_1_5,O_6_1_5,2,EX_6_1_5)+",");
s67 = inject(s67, "tv6-2-q2", mkQ("tv6-2-q3",QT_6_2_3,O_6_2_3,1,EX_6_2_3)+","+mkQ("tv6-2-q4",QT_6_2_4,O_6_2_4,2,EX_6_2_4)+",");
s67 = inject(s67, "tv6-3-q2", mkQ("tv6-3-q3",QT_6_3_3,O_6_3_3,1,EX_6_3_3)+","+mkQ("tv6-3-q4",QT_6_3_4,O_6_3_4,1,EX_6_3_4)+",");
s67 = inject(s67, "tv6-4-q2", mkQ("tv6-4-q3",QT_6_4_3,O_6_4_3,1,EX_6_4_3)+","+mkQ("tv6-4-q4",QT_6_4_4,O_6_4_4,1,EX_6_4_4)+",");
s67 = inject(s67, "tv6-5-q3", mkQ("tv6-5-q4",QT_6_5_4,O_6_5_4,1,EX_6_5_4)+",");
// Inject set7 new questions
s67 = inject(s67, "tv7-1-q3", mkQ("tv7-1-q4",QT_7_1_4,O_7_1_4,1,EX_7_1_4)+","+mkQ("tv7-1-q5",QT_7_1_5,O_7_1_5,2,EX_7_1_5)+",");
s67 = inject(s67, "tv7-2-q2", mkQ("tv7-2-q3",QT_7_2_3,O_7_2_3,1,EX_7_2_3)+","+mkQ("tv7-2-q4",QT_7_2_4,O_7_2_4,2,EX_7_2_4)+",");
s67 = inject(s67, "tv7-3-q2", mkQ("tv7-3-q3",QT_7_3_3,O_7_3_3,1,EX_7_3_3)+","+mkQ("tv7-3-q4",QT_7_3_4,O_7_3_4,0,EX_7_3_4)+",");
s67 = inject(s67, "tv7-4-q2", mkQ("tv7-4-q3",QT_7_4_3,O_7_4_3,1,EX_7_4_3)+","+mkQ("tv7-4-q4",QT_7_4_4,O_7_4_4,1,EX_7_4_4)+",");
s67 = inject(s67, "tv7-5-q3", mkQ("tv7-5-q4",QT_7_5_4,O_7_5_4,2,EX_7_5_4)+",");

// SET 8 options
const O_8_1_3=["Glutamat und GABA im Gleichgewicht.","Alle Neurotransmitter werden nach Signal abgebaut.","Neurotransmitter werden durch enzymatischen Abbau, Wiederaufnahme oder Diffusion aus dem synaptischen Spalt entfernt.","Serotonin reguliert die Wiederaufnahme aller Neurotransmitter.","Aktionspotenzial wird in Vesikel gespeichert."];
const O_8_1_4=["Einziges Problem ist GABA-Mangel.","Neurotransmitter-Ungleichgewichte sind selten und klinisch irrelevant.","Chemische Botenstoffe übertragen Signale an Synapsen; Ungleichgewichte führen zu neuropsychiatrischen Erkrankungen und bilden Ansatzpunkte für Psychopharmaka.","Glutamat ist der einzige Neurotransmitter im Gehirn.","Dopamin hat keine Auswirkungen auf Bewegung."];
const O_8_2_4=["CAR-T-Zellen sind vollkommen risikofrei.","CAR-T-Therapie hat keine Nebenwirkungen.","Die hohen Kosten und der Zytokinsturm sind zentrale Herausforderungen, die den breiten Einsatz der CAR-T-Therapie begrenzen.","CAR-T-Therapie wirkt nur bei festen Tumoren.","CAR-T-Zellen werden nach der Therapie vom Körper abgebaut."];
const O_8_3_3=["Doudna und Charpentier erfanden CRISPR als Waffe gegen Bakterien.","CRISPR-Cas9 wurde 2020 erstmals an Pflanzen angewendet.","CRISPR-Cas9 ist ein vielseitiges Genomwerkzeug, das aus einem bakteriellen Abwehrsystem entwickelt wurde und Anwendungen in Landwirtschaft, Forschung und Medizin bietet.","CRISPR-Cas9 kann nur Gensequenzen löschen, nicht ersetzen.","Keimbahnedierung ist weltweit erlaubt."];
const O_8_3_4=["Die Guide-RNA kann beliebige Zielsequenzen erkennen, weil Cas9 ohne sie nicht funktioniert.","Da Cas9 die DNA an der Zielsequenz schneidet und zelleigene Reparaturmechanismen die Bearbeitung ermöglichen, lässt sich jedes beliebige Gen gezielt verändern.","CRISPR funktioniert nur in Bakterienzellen.","Die Guide-RNA ist immer identisch, unabhängig von der Zielsequenz.","Cas9 kann nur DNA schneiden, nicht reparieren."];
const O_8_4_4=["Nur aktive Sterbehilfe ist ethisch problematisch.","Alle Sterbehilfeformen sind weltweit verboten.","Die rechtliche und ethische Bewertung von aktiver und passiver Sterbehilfe unterscheidet sich erheblich zwischen Ländern und Kulturen, was globale Standards erschwert.","Palliativmedizin und Sterbehilfe sind identisch.","Der Arzt entscheidet allein über Sterbehilfe."];
const O_8_5_3=["Forensische Medizin ist ausschließlich für Mordermittlungen zuständig.","Genetischer Fingerabdruck ist seit 1970 in Verwendung.","Forensische Medizin wendet medizinisches Wissen auf rechtliche Fragen an; DNA-Analyse ermöglicht eindeutige Identifikation, wirft aber Persönlichkeitsschutzfragen auf.","Totenflecke entstehen durch chemische Reaktionen, nicht durch Blutabsinken.","Die Obduktion ist in Österreich verboten."];
const O_8_5_4=["Totenflecke fixieren sich sofort nach dem Tod.","Totenflecke entstehen durch Blutabsinken in tiefer liegende Körperpartien, sind anfänglich wegdrückbar und fixieren sich nach 12-24 Stunden.","Totenflecke sind dauerhaft wegdrückbar.","Totenflecke entstehen nur bei Kälte.","Totenflecke und Totenstarre treten gleichzeitig auf."];

// SET 9 options
const O_9_1_3=["Klimawandel betrifft nur tropische Regionen.","Nur Hitzewellen sind relevant.","Der Klimawandel gefährdet die Gesundheit direkt durch Hitzestress und indirekt durch Ausbreitung von Krankheiten, Luftqualitätsverschlechterung und psychische Folgen.","Klimawandel hat keine Auswirkungen auf Infektionskrankheiten.","Nur ältere Menschen sind durch Klimawandel gefährdet."];
const O_9_1_4=["Dengue-Fieber ist in Europa endemisch.","Die Tigermücke überträgt nur Malaria.","Weil erwärmte Regionen nun für Wärme-liebende Vektoren wie die Tigermücke geeignet sind, breiten sich Tropenkrankheiten in bisher verschonte Gebiete aus.","Dengue-Fieber wird nur durch direkte Berührung übertragen.","Nur Malaria wird durch Klimawandel beeinflusst."];
const O_9_2_4=["Die Spanische Grippe betraf nur ältere Menschen.","Pandemien sind durch moderne Medizin vollständig vermeidbar.","Pandemien werden durch Zoonosen wahrscheinlicher; Ungleichheiten bei Impfstoffverteilung und Fehlinformationen erschwerten die COVID-19-Bekämpfung.","mRNA-Impfstoffe sind die einzige wirksame Schutzmaßnahme gegen Pandemien.","Der Schwarze Tod hatte keine sozialen Folgen."];
const O_9_3_3=["PNI untersucht nur die Auswirkungen von Stress auf Verdauung.","PNI hat keine klinische Relevanz.","PNI belegt, dass Psyche, Nervensystem und Immunsystem eng verbunden sind; positive Interventionen können das Immunsystem verbessern.","Chronischer Stress stärkt das Immunsystem.","Das Immunsystem ist vollständig autonom."];
const O_9_3_4=["Nur Cortisol vermittelt Stress-Immunverbindung.","Chronischer Stress hat keinen Einfluss auf Impfansprechen.","Da chronischer Stress über HPA-Achse und autonomes Nervensystem das Immunsystem schwächt, ist ein ganzheitlicher Behandlungsansatz mit psychologischen Interventionen sinnvoll.","Achtsamkeit hat keinen Einfluss auf das Immunsystem.","Das autonome Nervensystem ist nicht mit lymphatischen Organen verbunden."];
const O_9_4_3=["Nanomedizin ist ausschließlich für Diagnostik.","Nanopartikel sind vollkommen sicher.","Nanomedizin nutzt Nanoskala-Eigenschaften für gezieltes Drug Delivery und verbesserte Diagnostik, birgt aber noch nicht vollständig verstandene Toxizitätsrisiken.","EPR-Effekt betrifft nur gesundes Gewebe.","Nanopartikel werden sofort vom Körper ausgeschieden."];
const O_9_4_4=["Ligandfunktionalisierung ist bei Nanopartikeln unwirksam.","Nanopartikel können nicht in Tumorgewebe eindringen.","Da Nanopartikel durch den EPR-Effekt in Tumorgewebe angereichert werden und zusätzlich mit Liganden funktionalisiert werden können, ergibt sich eine zweistufige Zielgerichtetheit.","EPR-Effekt betrifft alle Gewebe gleich.","Liganden erhöhen die Toxizität der Nanopartikel."];
const O_9_5_3=["Sucht ist eine Frage mangelnder Willenskraft.","Sucht betrifft nur das Dopaminsystem.","Sucht ist eine chronische Hirnerkrankung; neuroadaptive Veränderungen in Belohnungssystem und präfrontalem Kortex erklären den Kontrollverlust trotz negativer Folgen.","Sucht kann allein durch Medikamente geheilt werden.","Das mesolimbische System ist nicht an Sucht beteiligt."];
const O_9_5_4=["Alkohol blockiert die Dopamin-Wiederaufnahme wie Kokain.","Opioide steigern direkt die Dopaminfreisetzung aus Vesikeln.","Da Alkohol und Opioide hemmende Interneuronen unterdrücken, wirken sie indirekt; ihre Wirkweise unterscheidet sich von direkter Dopaminbeeinflussung durch Kokain oder Amphetamine.","Alle Suchtmittel wirken durch denselben Mechanismus.","Alkohol hat keine Wirkung auf das mesolimbische System."];

// SET 10 options
const O_10_1_3=["Evolutionäre Medizin sieht Krankheiten als unvermeidlich.","Evolutionäre Medizin lehnt jede Behandlung ab.","Evolutionäre Medizin erklärt Krankheiten als evolutionsgepraegtes Phänomen; Symptome wie Fieber können adaptiv sein und das heterozygote Sichtzellgen bietet einen Malariaschutz.","Fieber sollte immer unterdrückt werden.","Das Sichelzellgen ist global gleichmäßig verbreitet."];
const O_10_1_4=["Fieber ist grundsätzlich gefährlich und sollte immer behandelt werden.","Unterdrückung von Fieber reduziert Sterblichkeit bei Infektionen.","Da Fieber bei bestimmten Infektionen die Sterblichkeit bei Unterdrückung erhöhen kann, spricht der Text für eine differenzierte statt automatische Fieberbehandlung.","Fieber hat keine messbaren Vorteile.","Fieber ist ausschließlich ein Nebenprodukt der Infektion."];
const O_10_2_3=["Bioprinting kann bereits komplexe Organe vollständig ersetzen.","Dialyse ist keine Form des künstlichen Organersatzes.","Mechanische Systeme wie Dialyse und VADs existieren bereits; Bioprinting bietet Zukunftspotenzial, scheitert aber noch an der Vaskularisierung komplexer Organe.","VADs erzeugen einen normalen Herzrhythmus.","Künstliche Organe sind günstiger als Transplantate."];
const O_10_2_4=["Zellen können unbegrenzt weit von Blutgefäßen entfernt überleben.","Wachstumsfaktoren sind für Bioprinting irrelevant.","Da Zellen mehr als 200 Mikrometer von Blutgefäßen absterben, ist die Lösung des Vaskularisierungsproblems entscheidend für das Bioprinting komplexer Organe.","Hydrogel ersetzt die Funktion von Blutgefäßen.","Bioprinting-Organe benötigen keine Vaskularisierung."];
const O_10_3_3=["Gentherapie ist bereits vollständig sicher und breit verfügbar.","Gentherapie behandelt nur Bluterkrankungen.","Gentherapie korrigiert genetische Defekte direkt mithilfe viraler Vektoren; zugelassene Therapien zeigen beeindruckende Ergebnisse, sind aber oft extrem teuer.","Gentherapie ersetzt alle anderen Behandlungsformen.","AAV-Vektoren integrieren sich ins menschliche Genom."];
const O_10_3_4=["Da Zolgensma über 2 Mio. USD kostet, können nicht alle Patienten auf lebensrettende Gentherapien zugreifen, was die Frage der Verteilungsgerechtigkeit aufwirft.","Zolgensma ist weltweit kostenlos verfügbar.","Nur reiche Länder entwickeln Gentherapien.","Die hohen Kosten sind durch die Wirksamkeit gerechtfertigt und kein Problem.","Alle Gentherapien sind gleich teuer."];
const O_10_4_4=["CPAP ist nur für leichte Schlafapnoe geeignet.","Schlafapnoe hat keine langfristigen Herzfolgen.","Da CPAP bei 50-70% der Patienten akzeptiert wird, zeigt der Text, dass alternative Therapien wie Schienen oder Operationen wichtig sind, um alle Patienten zu erreichen.","Schienen ersetzen CPAP vollständig.","Schlafapnoe kann nur operativ behandelt werden."];
const O_10_5_4=["Tiefe Hirnstimulation ist vollkommen risikolos.","Persönlichkeit ändert sich nie durch medizinische Behandlung.","Da Tiefe Hirnstimulation die Persönlichkeit verändern kann, stellt sich die Frage, ob der Patient nach dem Eingriff noch seine ursprüngliche Zustimmung zur Therapie aufrechterhalten kann.","Tiefe Hirnstimulation hat keinerlei Einfluss auf die Psyche.","Persönlichkeitsveränderungen sind erwartete und erwünschte Nebenwirkungen."];

// Set 8 question texts and explanations
const QT_8_1_3="Welche Schlussfolgerung lässt sich aus dem Text über die Entfernung von Neurotransmittern aus dem synaptischen Spalt ziehen?";
const QT_8_1_4="Was ist die Hauptaussage des Textes über Neurotransmitter?";
const QT_8_2_4="Welche Schlussfolgerung lässt sich über die praktischen Herausforderungen der CAR-T-Zelltherapie ziehen?";
const QT_8_3_3="Was ist die Hauptaussage des Textes über CRISPR-Cas9?";
const QT_8_3_4="Welche Schlussfolgerung lässt sich aus dem Text über die Flexibilität von CRISPR-Cas9 ziehen?";
const QT_8_4_4="Welche Schlussfolgerung lässt sich über die Bewertung von Sterbehilfe im Text ziehen?";
const QT_8_5_3="Was ist die Hauptaussage des Textes über die forensische Medizin?";
const QT_8_5_4="Welche Schlussfolgerung lässt sich aus dem Text über Totenflecke als Todeszeitindikator ziehen?";

// Set 9 question texts
const QT_9_1_3="Was ist die Hauptaussage des Textes über Klimawandel und menschliche Gesundheit?";
const QT_9_1_4="Welche Schlussfolgerung lässt sich über die Ausbreitung von Tropenkrankheiten durch den Klimawandel ziehen?";
const QT_9_2_4="Was ist die Hauptaussage des Textes über Pandemien und ihre Bekämpfung?";
const QT_9_3_3="Was ist die Hauptaussage des Textes über die Psychoneuroimmunologie?";
const QT_9_3_4="Welche Schlussfolgerung lässt sich aus dem Text über die Behandlung stressbedingter Immunschwäche ziehen?";
const QT_9_4_3="Was ist die Hauptaussage des Textes über die Nanomedizin?";
const QT_9_4_4="Welche Schlussfolgerung lässt sich über die Zielgerichtetheit von Nanopartikeln in der Krebstherapie ziehen?";
const QT_9_5_3="Was ist die Hauptaussage des Textes über die Neurobiologie der Abhängigkeit?";
const QT_9_5_4="Welche Schlussfolgerung lässt sich über den Wirkmechanismus von Alkohol und Opiaten im Vergleich zu Kokain ziehen?";

// Set 10 question texts
const QT_10_1_3="Was ist die Hauptaussage des Textes über die evolutionäre Medizin?";
const QT_10_1_4="Welche Schlussfolgerung lässt sich über die Behandlung von Fieber aus dem Text ziehen?";
const QT_10_2_3="Was ist die Hauptaussage des Textes über künstliche Organe und Bioprinting?";
const QT_10_2_4="Welche Schlussfolgerung lässt sich aus dem Text über die Bedeutung der Vaskularisierung für das Bioprinting ziehen?";
const QT_10_3_3="Was ist die Hauptaussage des Textes über die Gentherapie?";
const QT_10_3_4="Welche Schlussfolgerung lässt sich aus dem Beispiel Zolgensma über Gentherapie ziehen?";
const QT_10_4_4="Welche Schlussfolgerung lässt sich aus dem Text über die begrenzte CPAP-Akzeptanz ziehen?";
const QT_10_5_4="Welche Schlussfolgerung lässt sich aus dem Text über die ethische Problematik der Tiefen Hirnstimulation ziehen?";

// Set 8 explanations
const EX_8_1_3="Der Text beschreibt drei Mechanismen: enzymatischen Abbau, Wiederaufnahme durch Transporterproteine und Diffusion. Ohne diese wäre eine Daueraktivierung die Folge.";
const EX_8_1_4="Der Text beschreibt Neurotransmitter als chemische Botenstoffe an Synapsen, erläutert ihre Wirkung und zeigt, wie Ungleichgewichte zu Erkrankungen führen und Angriffspunkte für Psychopharmaka bilden.";
const EX_8_2_4="Der Text nennt den Zytokinsturm und die hohen Kosten als zentrale Herausforderungen der CAR-T-Therapie, die trotz beeindruckender Wirksamkeit den breiten Einsatz begrenzen.";
const EX_8_3_3="CRISPR-Cas9 ist ein natürliches bakterielles Immunsystem, das zu einem universellen Genomwerkzeug umfunktioniert wurde und in Landwirtschaft, Forschung und Medizin eingesetzt wird.";
const EX_8_3_4="Da die Guide-RNA synthetisch für jede beliebige Zielsequenz entworfen werden kann, ist CRISPR-Cas9 ein universell einsetzbares Werkzeug zur Genombearbeitung in beliebigen Organismen.";
const EX_8_4_4="Der Text stellt fest, dass die rechtliche und ethische Bewertung von aktiver und passiver Sterbehilfe zwischen Ländern erheblich variiert, was globale Standards erschwert.";
const EX_8_5_3="Forensische Medizin verbindet medizinisches Wissen mit rechtlichen Aufgaben; DNA-Analyse revolutionierte die Identifikation, wirft aber Datenschutzfragen auf.";
const EX_8_5_4="Totenflecke entstehen durch Blutabsinken, sind anfänglich wegdrückbar und fixieren sich nach 12-24 Stunden. Dies ist ein nützlicher Zeitindikator, aber kein präzises Instrument.";

// Set 9 explanations
const EX_9_1_3="Der Text beschreibt direkte Auswirkungen wie Hitzestress und indirekte wie Ausbreitung von Vektoren, Ernährungsunsicherheit, Luftqualitätsverschlechterung und psychische Folgen.";
const EX_9_1_4="Erwärmung macht neue Gebiete für die Tigermücke geeignet, was autochthone Dengue-Fälle in Europa erklärt.";
const EX_9_2_4="Pandemien werden durch Zoonosen wahrscheinlicher; der Text zeigt, dass Ungleichheiten bei Impfstoffverteilung und Fehlinformationen zentrale Hindernisse bei der Pandemiebekämpfung sind.";
const EX_9_3_3="PNI belegt, dass Psyche, Nervensystem und Immunsystem wechselseitig verbunden sind; positive Interventionen können das Immunsystem verbessern.";
const EX_9_3_4="Da Stress über HPA-Achse und autonomes Nervensystem das Immunsystem schwächt, sprechen PNI-Erkenntnisse für ganzheitliche Behandlungsansätze.";
const EX_9_4_3="Nanomedizin nutzt Nanoskala-Eigenschaften für Drug Delivery und Diagnostik; der EPR-Effekt ermöglicht Tumoranreicherung, aber Toxizitätsrisiken sind noch nicht vollständig verstanden.";
const EX_9_4_4="EPR-Effekt ermöglicht passive Anreicherung in Tumoren; Ligand-Funktionalisierung ermöglicht aktive Zielsteuerung. Dies ergibt eine zweistufige Zielgerichtetheit.";
const EX_9_5_3="Sucht ist eine chronische Hirnerkrankung; neuroadaptive Veränderungen in Belohnungssystem und präfrontalem Kortex erklären Kontrollverlust und fortgesetzten Konsum.";
const EX_9_5_4="Alkohol und Opioide unterdrücken hemmende Interneuronen (indirekt), Kokain blockiert Dopamin-Wiederaufnahme (direkt) und Amphetamine steigern Freisetzung. Der Mechanismus unterscheidet sich.";

// Set 10 explanations
const EX_10_1_3="Der Text beschreibt die Mismatch-Hypothese, die Adaptive-Funktion von Fieber und den heterozygoten Malariaschutz des Sichelzellgens als Beispiele evolutionärer Medizin.";
const EX_10_1_4="Der Text stellt fest, dass Fieberunterdrückung bei bestimmten Infektionen die Sterblichkeit erhöhen kann, was eine differenzierte statt automatische Behandlung nahelegt.";
const EX_10_2_3="Mechanische Ersatzsysteme wie Dialyse und VADs existieren bereits; Bioprinting bietet großes Potenzial, scheitert aber noch an der Vaskularisierung komplexer Organe.";
const EX_10_2_4="Da Zellen mehr als 200 Mikrometer von Gefäßen absterben, ist die Vaskularisierung die entscheidende Hürde für das Bioprinting funktionaler komplexer Organe.";
const EX_10_3_3="Gentherapie korrigiert genetische Defekte durch virale Vektoren; Luxturna und Zolgensma zeigen beeindruckende Ergebnisse, sind aber durch extreme Kosten in ihrer Zugänglichkeit begrenzt.";
const EX_10_3_4="Zolgensma kostet über 2 Mio. USD, was Fragen der Zugangsgerechtigkeit aufwirft und zeigt, dass effektive Gentherapien nicht allen Patienten weltweit zur Verfügung stehen.";
const EX_10_4_4="Da nur 50-70% der Patienten CPAP langfristig akzeptieren, sind alternative Therapien wie Schienen und operative Eingriffe wichtig, um alle Patienten effektiv zu behandeln.";
const EX_10_5_4="Tiefe Hirnstimulation kann die Persönlichkeit verändern; wenn ein Patient danach seine Zustimmung widerrufen möchte, stellt sich die Frage, ob die veränderte oder ursprüngliche Persönlichkeit entscheidend ist.";

// Inject set8 new questions
s8to10 = inject(s8to10, "tv8-1-q2", mkQ("tv8-1-q3",QT_8_1_3,O_8_1_3,2,EX_8_1_3)+","+mkQ("tv8-1-q4",QT_8_1_4,O_8_1_4,2,EX_8_1_4)+",");
s8to10 = inject(s8to10, "tv8-2-q3", mkQ("tv8-2-q4",QT_8_2_4,O_8_2_4,2,EX_8_2_4)+",");
s8to10 = inject(s8to10, "tv8-3-q2", mkQ("tv8-3-q3",QT_8_3_3,O_8_3_3,2,EX_8_3_3)+","+mkQ("tv8-3-q4",QT_8_3_4,O_8_3_4,1,EX_8_3_4)+",");
s8to10 = inject(s8to10, "tv8-4-q3", mkQ("tv8-4-q4",QT_8_4_4,O_8_4_4,2,EX_8_4_4)+",");
s8to10 = inject(s8to10, "tv8-5-q2", mkQ("tv8-5-q3",QT_8_5_3,O_8_5_3,2,EX_8_5_3)+","+mkQ("tv8-5-q4",QT_8_5_4,O_8_5_4,1,EX_8_5_4)+",");

// Inject set9 new questions
s8to10 = inject(s8to10, "tv9-1-q2", mkQ("tv9-1-q3",QT_9_1_3,O_9_1_3,2,EX_9_1_3)+","+mkQ("tv9-1-q4",QT_9_1_4,O_9_1_4,2,EX_9_1_4)+",");
s8to10 = inject(s8to10, "tv9-2-q3", mkQ("tv9-2-q4",QT_9_2_4,O_9_2_4,2,EX_9_2_4)+",");
s8to10 = inject(s8to10, "tv9-3-q2", mkQ("tv9-3-q3",QT_9_3_3,O_9_3_3,2,EX_9_3_3)+","+mkQ("tv9-3-q4",QT_9_3_4,O_9_3_4,2,EX_9_3_4)+",");
s8to10 = inject(s8to10, "tv9-4-q3", mkQ("tv9-4-q4",QT_9_4_3,O_9_4_3,2,EX_9_4_3)+","+mkQ("tv9-4-q5",QT_9_4_4,O_9_4_4,2,EX_9_4_4)+",");
s8to10 = inject(s8to10, "tv9-5-q2", mkQ("tv9-5-q3",QT_9_5_3,O_9_5_3,2,EX_9_5_3)+","+mkQ("tv9-5-q4",QT_9_5_4,O_9_5_4,2,EX_9_5_4)+",");

// Inject set10 new questions
s8to10 = inject(s8to10, "tv10-1-q2", mkQ("tv10-1-q3",QT_10_1_3,O_10_1_3,2,EX_10_1_3)+","+mkQ("tv10-1-q4",QT_10_1_4,O_10_1_4,2,EX_10_1_4)+",");
s8to10 = inject(s8to10, "tv10-2-q2", mkQ("tv10-2-q3",QT_10_2_3,O_10_2_3,2,EX_10_2_3)+","+mkQ("tv10-2-q4",QT_10_2_4,O_10_2_4,2,EX_10_2_4)+",");
s8to10 = inject(s8to10, "tv10-3-q2", mkQ("tv10-3-q3",QT_10_3_3,O_10_3_3,2,EX_10_3_3)+","+mkQ("tv10-3-q4",QT_10_3_4,O_10_3_4,0,EX_10_3_4)+",");
s8to10 = inject(s8to10, "tv10-4-q3", mkQ("tv10-4-q4",QT_10_4_4,O_10_4_4,2,EX_10_4_4)+",");
s8to10 = inject(s8to10, "tv10-5-q3", mkQ("tv10-5-q4",QT_10_5_4,O_10_5_4,2,EX_10_5_4)+",");

// Reassemble and write back to tvTextsExpanded2.ts
const out = src.slice(0, S6S) + s67 + s8to10 + src.slice(END);
W(P, out, "utf8");
console.log("Done! Sets 6-10 expanded.");
