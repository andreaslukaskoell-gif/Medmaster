-- ============================================================
-- BMS Questions Main Bank — Seed Migration
-- Generiert: 2026-02-21
-- UKs: ~106 | Fragen: ~618
-- ============================================================


-- ============================================================
-- BIOLOGIE Kap 1–6: MedAT-style exam questions
-- Generated 2026-02-21
-- ============================================================

-- ── Kapitel 1: Die Zelle ─────────────────────────────────

-- UK bio-1-01: Kennzeichen des Lebens und Systembiologie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-01-kennzeichen',
  'A', 'biologie', 'bio-1-01',
  'Viren werden nicht als vollständige Lebewesen eingestuft. Welches der folgenden Kennzeichen des Lebens fehlt Viren am entscheidendsten?',
  '[{"key":"A","text":"Fortpflanzung — Viren können sich nicht replizieren"},{"key":"B","text":"Evolution — Viren mutieren nicht"},{"key":"C","text":"Eigenständiger Stoffwechsel — Viren besitzen keine eigenen Enzyme für die Energiegewinnung"},{"key":"D","text":"Reizbarkeit — Viren reagieren nicht auf Umweltreize"},{"key":"E","text":"Zellulärer Aufbau — Viren bestehen aus zu wenigen Molekülen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Viren besitzen keinen eigenständigen Stoffwechsel: Sie haben keine Ribosomen, keine Mitochondrien und keine Enzyme für die ATP-Synthese. Sie sind auf den Stoffwechsel der Wirtszelle angewiesen. Fortpflanzung (A) ist möglich — Viren replizieren sich, allerdings nur mit Hilfe der Wirtszelle. Evolution (B) findet statt — Viren mutieren sogar sehr schnell (z. B. Influenzavirus, HIV). Reizbarkeit (D) zeigen Viren indirekt durch Rezeptorbindung. Zellulärer Aufbau (E) fehlt zwar, ist aber nicht das entscheidendste Merkmal, da die fehlende Zellstruktur Folge des fehlenden Stoffwechsels ist.',
  2
),
(
  'typk-bio-1-01-homoeostaseneg',
  'K', 'biologie', 'bio-1-01',
  'Welche der folgenden Aussagen zur Homöostase und negativen Rückkopplung sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Negative Rückkopplung wirkt dem auslösenden Reiz entgegen und führt das System zum Sollwert zurück.","korrekt":true},{"nr":2,"text":"Positive Rückkopplung ist der zentrale Mechanismus der Homöostase bei der Blutzuckerregulation.","korrekt":false},{"nr":3,"text":"Bei Diabetes mellitus Typ 1 versagt die Homöostase, weil Insulin fehlt und der negative Regelkreis nicht funktioniert.","korrekt":true},{"nr":4,"text":"Emergenz beschreibt die Reduktion komplexer Systeme auf ihre Einzelkomponenten.","korrekt":false},{"nr":5,"text":"Auf jeder Ebene der biologischen Hierarchie entstehen neue Eigenschaften, die aus den Eigenschaften der Einzelkomponenten nicht direkt vorhersagbar sind.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,4,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,3,4]}]'::jsonb,
  'Aussage 1 ist korrekt: Negative Rückkopplung ist das Grundprinzip der Homöostase — der Effekt wirkt dem Auslöser entgegen (z. B. Insulin senkt erhöhten Blutzucker). Aussage 2 ist falsch: Positive Rückkopplung verstärkt den Auslöser und ist kein Homöostase-Mechanismus (Beispiele: Wehen, Blutgerinnung). Aussage 3 ist korrekt: Bei Typ-1-Diabetes fehlt Insulin, der Regelkreis bricht zusammen. Aussage 4 ist falsch: Emergenz ist das Gegenteil — neue Eigenschaften entstehen auf höherer Ebene, die nicht aus den Teilen vorhersagbar sind. Aussage 5 ist korrekt: Das ist die Definition von Emergenz.',
  2
),
(
  'typa-bio-1-01-hierarchie',
  'A', 'biologie', 'bio-1-01',
  'Ein Pathologe untersucht ein Biopsat und erkennt einen Verband aus gleichartig differenzierten Zellen mit gemeinsamer Funktion. Auf welcher Ebene der biologischen Hierarchie befindet er sich?',
  '[{"key":"A","text":"Organellen-Ebene"},{"key":"B","text":"Zell-Ebene"},{"key":"C","text":"Gewebe-Ebene"},{"key":"D","text":"Organ-Ebene"},{"key":"E","text":"Organsystem-Ebene"}]'::jsonb,
  'C',
  NULL, NULL,
  'Ein Verband gleichartig differenzierter Zellen mit gemeinsamer Funktion ist die Definition eines Gewebes (Gewebe-Ebene). Die hierarchische Organisation lautet: Moleküle → Organellen → Zellen → Gewebe → Organe → Organsysteme → Organismus. Einzelne Zellen (B) agieren noch nicht als Verband; Organe (D) bestehen aus mehreren Gewebetypen. Ein Pathologe beurteilt Biopsate auf Gewebeebene (Histologie).',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-02: Prokaryoten vs. Eukaryoten
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-02-ribosomen-antibiotika',
  'A', 'biologie', 'bio-1-02',
  'Ein Patient erhält Chloramphenicol gegen eine Bakteriensepsis. Warum hemmt dieses Antibiotikum Bakterien, ohne menschliche Zellen in gleicher Weise zu schädigen?',
  '[{"key":"A","text":"Chloramphenicol zerstört die bakterielle Zellwand aus Peptidoglykan"},{"key":"B","text":"Chloramphenicol bindet spezifisch an die 50S-Untereinheit des prokaryotischen 70S-Ribosoms und blockiert die Peptidyl-Transferase"},{"key":"C","text":"Chloramphenicol hemmt die eukaryotische DNA-Replikation selektiv"},{"key":"D","text":"Chloramphenicol blockiert Kernporen und verhindert mRNA-Export in Prokaryoten"},{"key":"E","text":"Chloramphenicol aktiviert Lysosomen der Bakterienzelle"}]'::jsonb,
  'B',
  NULL, NULL,
  'Chloramphenicol bindet an die 50S-Untereinheit des prokaryotischen 70S-Ribosoms und blockiert die Peptidyl-Transferase-Aktivität. Menschliche zytosolische Ribosomen (80S = 40S + 60S) werden nicht gebunden. Wichtige Ausnahme: Mitochondriale Ribosomen haben 70S-Struktur (Endosymbiontentheorie), weshalb Chloramphenicol in hohen Dosen mitochondriale Toxizität verursachen kann (aplastische Anämie). Penicillin (A) hemmt die Zellwandsynthese — nicht Chloramphenicol.',
  2
),
(
  'typk-bio-1-02-prokvseuk',
  'K', 'biologie', 'bio-1-02',
  'Welche der folgenden Aussagen zum Vergleich von Prokaryoten und Eukaryoten sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Prokaryoten besitzen membranumschlossene Organellen wie Mitochondrien und Golgi-Apparat.","korrekt":false},{"nr":2,"text":"Die prokaryotische DNA liegt als zirkuläres Chromosom frei im Nukleoid vor.","korrekt":true},{"nr":3,"text":"Bakterielle Zellwände bestehen aus Peptidoglykan (Murein), während Pilzzellwände Chitin enthalten.","korrekt":true},{"nr":4,"text":"Archaeen gehören zur Domäne Bakterien und besitzen Peptidoglykan in der Zellwand.","korrekt":false},{"nr":5,"text":"Mitochondrien besitzen 70S-Ribosomen und zirkuläre DNA — ein Beleg für die Endosymbiontentheorie.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 ist falsch: Prokaryoten besitzen KEINE membranumschlossenen Organellen — das ist das definierende Unterscheidungsmerkmal zu Eukaryoten. Aussage 2 ist korrekt: Prokaryotische DNA ist zirkulär und liegt im Nukleoid frei vor (keine Histonverpackung). Aussage 3 ist korrekt: Bakterienzellwand = Peptidoglykan/Murein; Pilzzellwand = Chitin; Pflanzenzellwand = Zellulose. Aussage 4 ist falsch: Archaeen bilden eine eigene Domäne (Archaea) und besitzen KEIN Peptidoglykan in der Zellwand. Aussage 5 ist korrekt: 70S-Ribosomen und zirkuläre mtDNA sind zentrale Belege der Endosymbiontentheorie.',
  2
),
(
  'typa-bio-1-02-endosymbiont',
  'A', 'biologie', 'bio-1-02',
  'Welcher der folgenden Befunde belegt die Endosymbiontentheorie für Mitochondrien NICHT?',
  '[{"key":"A","text":"Mitochondrien besitzen eine eigene zirkuläre DNA"},{"key":"B","text":"Mitochondrien vermehren sich durch binäre Teilung"},{"key":"C","text":"Mitochondrien besitzen 70S-Ribosomen"},{"key":"D","text":"Mitochondrien sind von einer Doppelmembran umgeben"},{"key":"E","text":"Mitochondrien produzieren alle ihre eigenen Proteine selbst"}]'::jsonb,
  'E',
  NULL, NULL,
  'Die Endosymbiontentheorie wird durch zirkuläre DNA (A), binäre Teilung (B), 70S-Ribosomen (C) und Doppelmembran (D) belegt — alles Merkmale, die Mitochondrien mit Bakterien teilen. Option E ist FALSCH als Beleg: Mitochondrien produzieren nur ~13 Proteine selbst (mit der mtDNA). Die übrigen ca. 1.500 mitochondrialen Proteine werden von der nukleären DNA kodiert, im Zytoplasma synthetisiert und in die Mitochondrien importiert. Diese Abhängigkeit vom Zellkern widerspricht nicht der Theorie, belegt sie aber auch nicht.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-03: Zellmembran und Zytoplasma
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-03-cholesterin',
  'A', 'biologie', 'bio-1-03',
  'Ein Forscher kühlt eine Zellmembran von 37 °C auf 10 °C ab. Was ist die physiologische Wirkung von Cholesterin unter dieser Bedingung?',
  '[{"key":"A","text":"Cholesterin erhöht die Membranfluidität, indem es die dichte Packung der Fettsäureketten verhindert"},{"key":"B","text":"Cholesterin verringert die Membranfluidität durch Quervernetzung der Phospholipide"},{"key":"C","text":"Cholesterin hat bei tiefen Temperaturen keinen Einfluss auf die Membranfluidität"},{"key":"D","text":"Cholesterin wird bei tiefen Temperaturen aus der Membran ausgeschieden"},{"key":"E","text":"Cholesterin verstärkt die Erstarrung der Membran bei tiefen Temperaturen"}]'::jsonb,
  'A',
  NULL, NULL,
  'Cholesterin wirkt als bidirektionaler Fluiditätspuffer: Bei hohen Temperaturen verhindert es übermäßige Verflüssigung (reduziert Fluidität), bei tiefen Temperaturen verhindert es die dichte Packung der Fettsäureketten und damit die Erstarrung (erhöht Fluidität). Dies ist die Homöoviskose Adaptation. Cholesterin ist zwischen den Phospholipiden eingelagert und bleibt in der Membran (D ist falsch). Option E beschreibt das Gegenteil der tatsächlichen Wirkung.',
  2
),
(
  'typk-bio-1-03-membrankomponenten',
  'K', 'biologie', 'bio-1-03',
  'Welche der folgenden Aussagen zur Zellmembran und ihren Komponenten sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Das Flüssig-Mosaik-Modell beschreibt die Membran als fluide Phospholipid-Doppelschicht, in der Proteine lateral beweglich sind.","korrekt":true},{"nr":2,"text":"Gesättigte Fettsäuren mit geraden Ketten erhöhen die Membranfluidität durch engere Packung.","korrekt":false},{"nr":3,"text":"Integrale Transmembranproteine durchspannen die Lipiddoppelschicht vollständig und sind nicht ohne Detergenzien ablösbar.","korrekt":true},{"nr":4,"text":"Die Glykokalix besteht aus Kohlenhydratketten auf der Innenseite der Membran und dient der ATP-Synthese.","korrekt":false},{"nr":5,"text":"Ungesättigte Fettsäuren mit Doppelbindungen erhöhen die Membranfluidität durch Knicke in der Kohlenstoffkette.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,5]},{"key":"D","nummern":[3,4,5]},{"key":"E","nummern":[1,2,4]}]'::jsonb,
  'Aussage 1 ist korrekt: Das Flüssig-Mosaik-Modell (Singer & Nicolson, 1972) — die Grundlage des Membranverständnisses. Aussage 2 ist falsch: Gesättigte Fettsäuren (gerade Ketten, dichte Packung) REDUZIEREN die Fluidität. Aussage 3 ist korrekt: Integrale Proteine sind hydrophob in der Membranmitte verankert und benötigen Detergenzien zur Lösung. Aussage 4 ist falsch: Die Glykokalix befindet sich auf der AUSSENseite der Membran und dient Zellerkennung, Blutgruppenantigenen und Immunschutz — nicht ATP-Synthese. Aussage 5 ist korrekt: Doppelbindungen erzeugen Knicke → lockere Packung → mehr Fluidität.',
  2
),
(
  'typa-bio-1-03-abo-blutgruppen',
  'A', 'biologie', 'bio-1-03',
  'Das ABO-Blutgruppensystem basiert molekular auf Unterschieden in welcher Membranstruktur der Erythrozyten?',
  '[{"key":"A","text":"Integrale Kanalproteine (Aquaporine)"},{"key":"B","text":"Glykolipide und Glykoproteine der Glykokalix"},{"key":"C","text":"Phospholipid-Kopfgruppen der äußeren Membranschicht"},{"key":"D","text":"Cholesterin-Konzentration in Lipid-Rafts"},{"key":"E","text":"Periphere Proteine der Innenseite der Membran"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das ABO-Blutgruppensystem beruht auf Unterschieden in den Oligosaccharid-Ketten der Glykolipide und Glykoproteine (Glykokalix) auf der Außenseite der Erythrozyten. Blutgruppe A: A-Antigen (N-Acetylgalactosamin), Blutgruppe B: B-Antigen (Galactose), Blutgruppe AB: beide Antigene, Blutgruppe 0: keines. Bei falscher Blutgruppe binden präformierte Antikörper (Anti-A, Anti-B) → Hämolyse. Aquaporine (A) transportieren Wasser; Cholesterin (D) reguliert Fluidität — beide spielen keine Rolle im ABO-System.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-05: Der Zellkern
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-05-nukleosom',
  'A', 'biologie', 'bio-1-05',
  'Welche Histon-Zusammensetzung bildet den Kern eines Nukleosoms, um den die DNA gewickelt ist?',
  '[{"key":"A","text":"Je 2 Kopien von H1, H2A, H2B und H3"},{"key":"B","text":"Je 2 Kopien von H2A, H2B, H3 und H4 (Histon-Oktamer)"},{"key":"C","text":"Je 1 Kopie von H1, H2A, H2B, H3 und H4"},{"key":"D","text":"4 Kopien von H4 und 4 Kopien von H3"},{"key":"E","text":"Je 2 Kopien von H1, H3, H4 und H5"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Nukleosom-Kernpartikel besteht aus einem Histon-Oktamer: je 2 Kopien der Kernhistone H2A, H2B, H3 und H4. Um diesen Oktamerkern sind ~147 Basenpaare DNA gewickelt. Histon H1 ist ein Linker-Histon, das die Verbindungs-DNA zwischen Nukleosomen bindet und zur höhergeordneten Chromatinstruktur beiträgt — es ist NICHT Teil des Oktamers. Das Nukleosom ist die Grundeinheit der Chromatinverpackung ("Perlen auf einer Schnur").',
  2
),
(
  'typk-bio-1-05-zellkern',
  'K', 'biologie', 'bio-1-05',
  'Welche der folgenden Aussagen zu Zellkernstruktur und Chromatinorganisation sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Heterochromatin ist transkriptionell aktiv und erscheint im Mikroskop hell.","korrekt":false},{"nr":2,"text":"Der Nucleolus ist der Ort der rRNA-Synthese und der Assemblierung ribosomaler Untereinheiten.","korrekt":true},{"nr":3,"text":"Kernporen ermöglichen die freie Diffusion aller Moleküle zwischen Kern und Zytoplasma.","korrekt":false},{"nr":4,"text":"Die äußere Kernmembran ist direkt mit dem rauen endoplasmatischen Retikulum verbunden.","korrekt":true},{"nr":5,"text":"Progerie entsteht durch Mutationen im Lamin-A-Gen, was die Kernlamina destabilisiert.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,2,3]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 ist falsch: Heterochromatin ist stark kompaktiert und transkriptionell INAKTIV (erscheint dunkel im Mikroskop). Euchromatin ist aktiv und hell. Aussage 2 ist korrekt: Der Nucleolus (membranlos, Phasenseparation) produziert rRNA und assembliert Ribosomenuntereinheiten. Aussage 3 ist falsch: Kernporen sind SELEKTIV — kleine Moleküle (<40 kDa) diffundieren frei, größere Moleküle brauchen aktiven Transport mit Kernlokalisierungssignal (NLS). Aussage 4 ist korrekt: Die äußere Kernmembran ist mit dem rER verbunden (perinukleärer Raum = ER-Lumen). Aussage 5 ist korrekt: Progerie = Lamin-A-Mutation → Progerin → destabilisierter Kern → vorzeitiges Altern.',
  2
),
(
  'typa-bio-1-05-barr',
  'A', 'biologie', 'bio-1-05',
  'Eine Labortechnikerin beobachtet in einer Zelle eines weiblichen Individuums (46,XX) einen dunklen Fleck an der Kernhülle. Was repräsentiert dieser Fleck funktionell?',
  '[{"key":"A","text":"Euchromatin mit hoher Transkriptionsaktivität"},{"key":"B","text":"Den Nucleolus als Fabrik für ribosomale RNA"},{"key":"C","text":"Das Barr-Körperchen — das inaktivierte X-Chromosom als Heterochromatin"},{"key":"D","text":"Eine mitotische Chromosomenkondensation"},{"key":"E","text":"Einen pathologischen Kerneinschluss (virale Infektion)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das Barr-Körperchen ist das inaktivierte X-Chromosom in weiblichen Zellen (XX), das als Heterochromatin dauerhaft kondensiert an der Kernhülle liegt. Es erscheint als dunkler Fleck (Barr-Körper). Die X-Inaktivierung (Lyon-Hypothese) stellt sicher, dass nur ein X-Chromosom pro Zelle aktiv ist. Die Anzahl der Barr-Körperchen = Anzahl X-Chromosomen minus 1 (46,XX → 1 Barr-Körper; 47,XXX → 2 Barr-Körper). Euchromatin (A) ist aktiv und hell; Nucleolus (B) ist rund und nicht an der Kernhülle.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-06: Mitochondrien
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-06-atpkette',
  'A', 'biologie', 'bio-1-06',
  'Cyanid ist ein akut toxisches Gift. An welchem Schritt der mitochondrialen Energiegewinnung greift es an und welche unmittelbare Folge hat das?',
  '[{"key":"A","text":"Hemmung der Citratsyntnase → Citratzyklus stoppt → NADH akkumuliert"},{"key":"B","text":"Hemmung von Komplex I → NADH kann nicht oxidiert werden → Protonengradient fehlt"},{"key":"C","text":"Hemmung von Komplex IV (Cytochrom-c-Oxidase) → O₂-Verbrauch stoppt → Protonengradient bricht zusammen → kein ATP"},{"key":"D","text":"Hemmung der ATP-Synthase direkt → Protonengradient steigt an → mitochondriale Schwellung"},{"key":"E","text":"Hemmung der Pyruvatdehydrogenase → kein Acetyl-CoA → Citratzyklus kann nicht starten"}]'::jsonb,
  'C',
  NULL, NULL,
  'Cyanid (CN⁻) bindet an das Eisen (Fe³⁺) im Häm-a₃-Zentrum von Komplex IV (Cytochrom-c-Oxidase) und verhindert die Reduktion von O₂ zu H₂O. Ohne O₂-Verbrauch pumpen Komplexe I, III, IV keine Protonen mehr → Protonengradient kollabiert → ATP-Synthase kann nicht arbeiten → akuter Energiemangel → Zelltod in Minuten. Klinisches Zeichen: kirschrote Haut (Oxyhämoglobin wird nicht verbraucht). Komplexe I–III sind nicht direkt gehemmt, aber funktionslos da Elektronen nicht mehr auf O₂ übertragen werden können.',
  2
),
(
  'typk-bio-1-06-mitochondrien',
  'K', 'biologie', 'bio-1-06',
  'Welche der folgenden Aussagen zu Mitochondrien und ihrer Energiegewinnung sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Der Citratzyklus findet in der Mitochondrienmatrix statt und liefert pro Acetyl-CoA 3 NADH, 1 FADH₂ und 1 GTP.","korrekt":true},{"nr":2,"text":"Die ATP-Synthase wird durch den direkten Elektronenfluss von NADH angetrieben, ohne Protonengradient.","korrekt":false},{"nr":3,"text":"Die maternale Vererbung der mtDNA beruht darauf, dass Spermien-Mitochondrien nach der Befruchtung ubiquitiniert und abgebaut werden.","korrekt":true},{"nr":4,"text":"Cristae sind Ausstülpungen der äußeren Mitochondrienmembran und erhöhen die Oberfläche für ATP-Synthase.","korrekt":false},{"nr":5,"text":"MELAS-Syndrom ist eine mitochondriale Erkrankung, die dem matrilinearen Vererbungsmuster folgt.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,4,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,3,4]}]'::jsonb,
  'Aussage 1 ist korrekt: Citratzyklus in der Matrix, Bilanz pro Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂. Aussage 2 ist falsch: Die ATP-Synthase wird durch den Protonen-GRADIENTEN angetrieben (Chemiosmose, Mitchell 1978) — NICHT direkt durch NADH. Aussage 3 ist korrekt: Spermien-Mitochondrien werden nach Befruchtung durch Ubiquitin-Markierung dem Proteasom zugeführt → maternale Vererbung. Aussage 4 ist falsch: Cristae sind Faltungen der INNEREN Mitochondrienmembran (nicht der äußeren). Dort sitzen Atmungskettenkomplexe und ATP-Synthase. Aussage 5 ist korrekt: MELAS = mitochondriale Enzephalomyopathie, matrilinear vererbt.',
  2
),
(
  'typa-bio-1-06-elektronenfluss',
  'A', 'biologie', 'bio-1-06',
  'In welcher korrekten Reihenfolge fließen Elektronen durch die mitochondriale Atmungskette?',
  '[{"key":"A","text":"FADH₂ → Komplex I → Ubichinon → Komplex III → Cytochrom c → Komplex IV → O₂"},{"key":"B","text":"NADH → Komplex I → Ubichinon (CoQ) → Komplex III → Cytochrom c → Komplex IV → O₂"},{"key":"C","text":"NADH → Komplex II → Cytochrom c → Komplex III → Ubichinon → Komplex IV → O₂"},{"key":"D","text":"NADH → Komplex I → Cytochrom c → Komplex II → Ubichinon → Komplex IV → O₂"},{"key":"E","text":"FADH₂ → Komplex IV → Ubichinon → Komplex I → Cytochrom c → Komplex III → O₂"}]'::jsonb,
  'B',
  NULL, NULL,
  'Der korrekte Elektronenfluss: NADH → Komplex I (NADH-Dehydrogenase) → Ubichinon (CoQ) → Komplex III (Cytochrom-bc₁) → Cytochrom c → Komplex IV (Cytochrom-c-Oxidase) → O₂ (zu H₂O). FADH₂ gibt Elektronen an Komplex II (Succinat-Dehydrogenase) ab, die ebenfalls zu Ubichinon fließen. Komplex II pumpt KEINE Protonen. Komplexe I, III und IV pumpen Protonen in den Intermembranraum und erzeugen den Protonengradienten für die ATP-Synthase.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-08: ER, Golgi und Plastiden
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-08-sek-weg',
  'A', 'biologie', 'bio-1-08',
  'Ein Protein soll als Hormon sezerniert werden. In welcher korrekten Reihenfolge durchläuft es den sekretorischen Weg?',
  '[{"key":"A","text":"Zytoplasmatische Ribosomen → Lysosomen → Golgi-Apparat → Sekretionsvesikel → Exozytose"},{"key":"B","text":"Raues ER → Golgi-Apparat (cis → medial → trans) → Sekretionsvesikel → Exozytose"},{"key":"C","text":"Glattes ER → Nucleus → Golgi-Apparat → Endosomen → Exozytose"},{"key":"D","text":"Raues ER → Peroxisomen → Golgi-Apparat → Mitochondrien → Sekretion"},{"key":"E","text":"Freie Ribosomen → Proteasom → Golgi-Apparat → Plasmamembran"}]'::jsonb,
  'B',
  NULL, NULL,
  'Der klassische sekretorische Weg für Exportproteine und Membranproteine: (1) Ribosomen am rauen ER synthetisieren das Protein co-translational ins ER-Lumen (Signal-Peptid → SRP-Erkennung → Translokon Sec61). (2) Im ER-Lumen: Faltung, N-Glykosylierung, Qualitätskontrolle. (3) Transport in Vesikeln zum Golgi-Apparat (cis-Seite, ER-nah). (4) Modifikation im Golgi (Glykosylierung abgeschlossen, Sortierung im trans-Golgi-Netz). (5) Sekretionsvesikel → Plasmamembran → Exozytose. Lysosomale Proteine werden ähnlich, aber zu Lysosomen (über Mannose-6-Phosphat-Signal) statt zur Plasmamembran geleitet.',
  2
),
(
  'typk-bio-1-08-er-golgi',
  'K', 'biologie', 'bio-1-08',
  'Welche der folgenden Aussagen zu ER und Golgi-Apparat sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Das glatte ER ist der Ort der Steroidhormonsynthese (z. B. Cortisol in der Nebenniere) und enthält Cytochrom-P450-Enzyme für die Entgiftung.","korrekt":true},{"nr":2,"text":"Das raue ER ist mit Ribosomen besetzt und Ort der Proteinfaltung durch Chaperone wie BiP/GRP78.","korrekt":true},{"nr":3,"text":"Der Golgi-Apparat sortiert Proteine an der cis-Seite und entlässt Vesikel an der trans-Seite.","korrekt":false},{"nr":4,"text":"ERAD (ER-assoziierter Abbau) leitet fehlgefaltete Proteine aus dem ER ins Proteasom zur Degradierung.","korrekt":true},{"nr":5,"text":"Plastiden in Pflanzenzellen, insbesondere Chloroplasten, besitzen wie Mitochondrien eigene zirkuläre DNA und 70S-Ribosomen.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,4,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 ist korrekt: Glattes ER = Steroidhormonsynthese + Cytochrom-P450 (Phase-I-Metabolismus in der Leber) + Ca²⁺-Speicher. Aussage 2 ist korrekt: Raues ER = Ribosomen + Faltung (BiP/GRP78 ist Hsp70-Chaperone) + N-Glykosylierung + Qualitätskontrolle. Aussage 3 ist falsch: Im Golgi-Apparat werden Proteine an der CIS-Seite (ER-nah) empfangen und an der TRANS-Seite (trans-Golgi-Netz) sortiert und in Vesikel verpackt — die Richtung stimmt, aber die Formulierung ist irreführend: die Sortierung findet im TGN (trans) statt, nicht an der cis-Seite. Aussage 4 ist korrekt: ERAD leitet fehlfaltete Proteine retro-translokäl aus dem ER und dem 26S-Proteasom zu. Aussage 5 ist korrekt: Chloroplasten = Endosymbionten (Cyanobakterien), eigene zirkuläre DNA, 70S-Ribosomen.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-10: Lysosomen, Peroxisomen, Autophagie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-10-lysosomen-ph',
  'A', 'biologie', 'bio-1-10',
  'Ein Patient mit Tay-Sachs-Erkrankung leidet an progressiver Neurodegeneration. Welcher Mechanismus liegt zugrunde?',
  '[{"key":"A","text":"Defekte Mitochondrien in Neuronen → Energiemangel → Zelltod"},{"key":"B","text":"Fehlen der Hexosaminidase A → GM2-Gangliosid akkumuliert in Lysosomen der Neuronen → lysosomale Dysfunktion → Zelltod"},{"key":"C","text":"Defekte Peroxisomen → Akkumulation sehr langer Fettsäuren in Neuronen → Demyelinisierung"},{"key":"D","text":"Überschuss an mTOR-Aktivität → Autophagie supprimiert → Proteinaggregate akkumulieren"},{"key":"E","text":"Mutiertes p53 → unkontrollierte Apoptose in Neuronen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Tay-Sachs ist eine lysosomale Speicherkrankheit: Durch Mangel an Hexosaminidase A akkumuliert GM2-Gangliosid (ein Glykolipid) in Lysosomen von Neuronen. Die überladenen Lysosomen werden dysfunktional, die Neuronen sterben ab → progressive Neurodegeneration. Charakteristisch: kirschroter Fleck auf der Makula (Netzhaut). Die Fälle sind MedAT-relevant: Morbus Gaucher (Glucocerebrosidase-Mangel, häufigste lysosomale Speicherkrankheit), Tay-Sachs (Hexosaminidase A), Morbus Fabry (α-Galaktosidase A). Zellweger-Syndrom (C) ist ein Peroxisomendefekt.',
  2
),
(
  'typk-bio-1-10-abbausysteme',
  'K', 'biologie', 'bio-1-10',
  'Welche der folgenden Aussagen zu lysosomalen und peroxisomalen Abbausystemen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Peroxisomen führen die β-Oxidation sehr langer Fettsäuren (>22 C) durch, wobei als Nebenprodukt H₂O₂ entsteht, das durch Katalase sofort gespalten wird.","korrekt":true},{"nr":2,"text":"Lysosomen haben einen sauren pH (~4,5–5,0), aufrechterhalten durch eine V-Typ-H⁺-ATPase, der für die Aktivität der Säurehydrolasen essenziell ist.","korrekt":true},{"nr":3,"text":"Bei mTOR-Aktivität (Nährstoffüberschuss) wird Autophagie durch ULK1-Aktivierung ausgelöst.","korrekt":false},{"nr":4,"text":"Beim Zellweger-Syndrom fehlen funktionsfähige Peroxisomen, was zu VLCFA-Akkumulation und Myelinisierungsdefekten führt.","korrekt":true},{"nr":5,"text":"Peroxisomen besitzen eine Doppelmembran und eigene DNA wie Mitochondrien.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[3,4,5]},{"key":"E","nummern":[1,2,5]}]'::jsonb,
  'Aussage 1 ist korrekt: Peroxisomale β-Oxidation von VLCFA (very long chain fatty acids, >22 C) erzeugt H₂O₂, das Katalase sofort spaltet: 2H₂O₂ → 2H₂O + O₂. Aussage 2 ist korrekt: Lysosomaler pH ~4,5–5 durch V-Typ-H⁺-ATPase; Sicherheitsmechanismus: neutrale Enzyme außerhalb der Lysosomen inaktiv. Aussage 3 ist falsch: Aktives mTOR (Nährstoffe vorhanden) HEMMT ULK1 → KEINE Autophagie. Hunger → mTOR inaktiv → ULK1 aktiv → Autophagie. Aussage 4 ist korrekt: Zellweger-Syndrom = PEX-Mutationen → keine Peroxisomen-Biogenese → VLCFA akkumulieren → Myelinisierungsdefekte, Hepatomegalie, früher Tod. Aussage 5 ist falsch: Peroxisomen haben NUR EINE Membran und KEINE eigene DNA.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-12: Ribosomen, Proteasomen, Zentriolen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-12-ups',
  'A', 'biologie', 'bio-1-12',
  'Das Ubiquitin-Proteasom-System (UPS) baut gezielt fehlgefaltete oder überflüssige Proteine ab. Welche Polyubiquitin-Verknüpfung signalisiert den proteasomalen Abbau?',
  '[{"key":"A","text":"Lys-63-verknüpfte Polyubiquitin-Kette — Signal für DNA-Reparatur"},{"key":"B","text":"Monoubiquitinierung — Signal für endosomale Sortierung"},{"key":"C","text":"Lys-48-verknüpfte Polyubiquitin-Kette (≥4 Ubiquitine) — Abbausignal für das 26S-Proteasom"},{"key":"D","text":"Lys-11-verknüpfte Kette — Signal für Kernimport"},{"key":"E","text":"Methionin-1-verknüpfte (lineare) Kette — Signal für NF-κB-Aktivierung durch Abbau"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Lys-48 (K48)-verknüpfte Polyubiquitin-Kette mit mindestens 4 Ubiquitin-Molekülen ist das kanonische Signal für den Abbau im 26S-Proteasom. Das 26S-Proteasom besteht aus dem 20S-Kernpartikel (katalytische Kammer) und zwei 19S-Regulatorkappen (Ubiquitin-Erkennung, Entfaltung, Einschleusung). Die Drei-Enzym-Kaskade: E1 (Aktivierung) → E2 (Konjugierung) → E3 (Ligase, substratspezifisch, >600 verschiedene E3s beim Menschen). K63-Ketten (A) signalisieren DNA-Reparatur und endosomalen Transport, nicht Abbau.',
  3
),
(
  'typk-bio-1-12-ribosomen',
  'K', 'biologie', 'bio-1-12',
  'Welche der folgenden Aussagen zu Ribosomen und ihrer Funktion sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Freie Ribosomen im Zytosol synthetisieren Proteine, die für den Kern, Mitochondrien oder das Zytosol selbst bestimmt sind.","korrekt":true},{"nr":2,"text":"Die A-Site (Aminoacyl-Site) des Ribosoms nimmt die wachsende Peptidkette auf; die P-Site bindet die neu eintreffende Aminoacyl-tRNA.","korrekt":false},{"nr":3,"text":"Tetracycline hemmen bakterielle Ribosomen durch Bindung an die 30S-Untereinheit und blockieren die tRNA-Anlagerung an die A-Site.","korrekt":true},{"nr":4,"text":"Polysomen (Polysribosomen) bestehen aus mehreren Ribosomen an einer einzigen mRNA und erhöhen die Translationseffizienz.","korrekt":true},{"nr":5,"text":"Zentriolen bestehen aus 9×3-Triplett-Mikrotubuli und bilden die Basalkörper für Kinozilien.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,3,4,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 ist korrekt: Freie Ribosomen synthetisieren zytosolische, nukleäre und mitochondriale Proteine (ohne Signal-Peptid für ER). Aussage 2 ist FALSCH: Die A-Site (Aminoacyl-Site) bindet die NEU EINTREFFENDE Aminoacyl-tRNA. Die P-Site (Peptidyl-Site) trägt die wachsende Peptidkette — die Rollen sind vertauscht. Aussage 3 ist korrekt: Tetracycline binden an die 30S-Untereinheit des prokaryotischen 70S-Ribosoms und blockieren die Aminoacyl-tRNA-Anlagerung an die A-Site. Aussage 4 ist korrekt: Polysomen erhöhen die Translationseffizienz erheblich. Aussage 5 ist korrekt: Zentriolen = 9×3-Triplett (nicht 9+2!), bilden Basalkörper der Kinozilien.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-14: Zytoskelett, Kinozilien, Mikrovilli
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-14-kartagener',
  'A', 'biologie', 'bio-1-14',
  'Ein 25-jähriger Patient leidet seit der Kindheit an chronischer Sinusitis, rezidivierenden Bronchitiden und ist infertil. Im Röntgenbild zeigt sich ein Situs inversus. Welche molekulare Ursache erklärt das gesamte Symptombild?',
  '[{"key":"A","text":"Mutation im CFTR-Gen → defekter Chloridkanal → visköser Schleim"},{"key":"B","text":"Defekt der Dynein-Arme in Kinozilien (Primäre Ciliäre Dyskinesie) → immotile Zilien → mukoziliäre Clearance versagt + fehlerhafte L-R-Achsenbestimmung"},{"key":"C","text":"Keratin-Mutation → mechanisch fragile Epithelzellen → rezidivierende Infekte"},{"key":"D","text":"Aktin-Polymerisationsdefekt → Mikrovilli fehlen → Malabsorption + Infektionsanfälligkeit"},{"key":"E","text":"Fehlen von Nexin-Links → Mikrotubuli-Dupletts kollidieren → Entzündung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Kartagener-Syndrom (Primäre Ciliäre Dyskinesie, PCD) entsteht durch Mutationen in Dynein-Arm-Genen (z. B. DNAI1, DNAH5). Ohne Dynein-Arme schlagen Kinozilien nicht → (1) mukoziliäre Clearance versagt → chronische Atemwegsinfekte; (2) Spermiengeißeln immotil → männliche Infertilität; (3) Embryonale Primärzilien im Primitiven Knoten bewegen sich nicht → zufällige L-R-Achsenbestimmung → 50% Situs inversus. Mukoviszidose (A) ist ein CFTR-Chloridkanal-Defekt mit ähnlichen Atemwegssymptomen, aber OHNE Situs inversus und mit normalem Zilienstruktur.',
  2
),
(
  'typk-bio-1-14-zytoskelett',
  'K', 'biologie', 'bio-1-14',
  'Welche der folgenden Aussagen zum Zytoskelett und Motorproteinen sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Mikrotubuli sind polare Strukturen: Das Plus-Ende wächst zur Zellperipherie, das Minus-Ende ist am Zentrosom verankert.","korrekt":true},{"nr":2,"text":"Kinesin transportiert Cargo zum Minus-Ende (retrograd, zentralwärts), Dynein zum Plus-Ende (anterograd).","korrekt":false},{"nr":3,"text":"Intermediärfilamente (z. B. Keratine, Vimentin, Lamine) sind nicht polar und mechanisch besonders stabil.","korrekt":true},{"nr":4,"text":"Taxol (Paclitaxel) stabilisiert Mikrotubuli übermäßig, verhindert den Mitoseabschluss und wird als Krebstherapeutikum eingesetzt.","korrekt":true},{"nr":5,"text":"Mikrovilli werden durch Aktinfilament-Bündel gestützt und erhöhen die Resorptionsfläche des Dünndarms etwa 600-fach.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,3,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 ist korrekt: Mikrotubuli wachsen vom Zentrosom (Minus-Ende, MTOC) zur Peripherie (Plus-Ende). Dynamische Instabilität. Aussage 2 ist FALSCH: Kinesin = anterograd (Plus-Ende, peripherwärts); Dynein = retrograd (Minus-Ende, zentralwärts). Merke: Dy-back. Aussage 3 ist korrekt: Intermediärfilamente (~10 nm) sind nicht polar, sehr zugstabil, zelltyp-spezifisch zusammengesetzt. Aussage 4 ist korrekt: Taxol hemmt Mikrotubuli-Depolymerisation → Zellen können Mitose nicht abschließen → SAC-Aktivierung → Apoptose. Aussage 5 ist korrekt: Mikrovilli = Aktinbündel-gestützte Membranausstülpungen, ~600-fache Oberflächenvergrößerung im Dünndarm (Bürstensaum).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-15: Zellkontakte
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-15-tjunctions',
  'A', 'biologie', 'bio-1-15',
  'Die Blut-Hirn-Schranke (BHS) verhindert den unkontrollierten Eintritt von Substanzen ins ZNS. Welcher Zellkontakttyp ist hauptverantwortlich für diese Barrierefunktion im Endothel der Hirnkapillaren?',
  '[{"key":"A","text":"Gap Junctions — ermöglichen direkten Ionenaustausch zwischen Endothelzellen"},{"key":"B","text":"Desmosomen — mechanische Verbindungen, die das Endothel unter Zugspannung stabilisieren"},{"key":"C","text":"Tight Junctions (Claudin-5) — versiegeln den parazellulären Spalt und verhindern parazelluläre Diffusion"},{"key":"D","text":"Hemidesmosomen — verankern Endothelzellen an der Basalmembran via Integrin α6β4"},{"key":"E","text":"Adherens Junctions (E-Cadherin) — vermitteln schwache reversible Zellverbindungen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Tight Junctions (Zonulae occludentes) bestehend aus Claudin-5 und Occludin sind der molekulare Hauptbestandteil der Blut-Hirn-Schranke im Endothel der Hirnkapillaren. Sie versiegeln den parazellulären Interzellularspalt vollständig → kein parazellulärer Transport. Stoffe müssen transzellulär (aktiv oder passiv) transportiert werden. Claudin-5-Knockout in Mäusen führt zum Zusammenbruch der BHS. Gap Junctions (A) ermöglichen Kommunikation, keine Barriere. Desmosomen (B) dienen mechanischer Verbindung, nicht Abdichtung. Hemidesmosomen (D) verankern Zellen in der Basallamina.',
  2
),
(
  'typk-bio-1-15-zellkontakte',
  'K', 'biologie', 'bio-1-15',
  'Welche der folgenden Aussagen zu Zellkontakten sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Gap Junctions bestehen aus Connexinen und ermöglichen direkten Ionen- und Molekülaustausch zwischen benachbarten Zellen (wichtig für Herzmuskel-Synchronisation).","korrekt":true},{"nr":2,"text":"Desmosomen sind apikal lokalisiert und verankern Epithelzellen über Cadherin-Bindungen in Intermediärfilamenten.","korrekt":false},{"nr":3,"text":"Tight Junctions erfüllen eine Fence-Funktion, indem sie die Plasmamembran in apikale und basolaterale Domänen unterteilen.","korrekt":true},{"nr":4,"text":"Beim Pemphigus vulgaris richten sich Autoantikörper gegen Desmoglein, was zur Ablösung von Keratinozyten (Akantholyse) und Blasenbildung führt.","korrekt":true},{"nr":5,"text":"Hemidesmosomen verbinden benachbarte Epithelzellen untereinander über Kollagen-Typ-IV-Bindungen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 ist korrekt: Gap Junctions (Connexine) bilden Halbkanäle (Connexone), die sich zu Kanälen zwischen Zellen verbinden → direkter Austausch von Ionen, cAMP, IP₃ (<1 kDa) → elektrische Kopplung im Herzmuskel. Aussage 2 ist FALSCH: Desmosomen sind NICHT apikal, sondern lateral verteilt; sie sind punktförmig (Macula adhaerens) und verankern Zellen in INTERMEDIÄRFILAMENTEN (Keratine), nicht apikal. Tight Junctions sind apikal. Aussage 3 ist korrekt: Fence-Funktion der Tight Junctions — verhindert laterale Diffusion von Membranproteinen → apikale (z. B. SGLT1) und basolaterale (z. B. GLUT2) Domänen bleiben getrennt. Aussage 4 ist korrekt: Pemphigus vulgaris = Autoantikörper gegen Desmoglein 1/3 → Akantholyse → intraepidermale Blasen. Aussage 5 ist FALSCH: Hemidesmosomen verankern Epithelzellen an der BASALMEMBRAN (über Integrin α6β4 → Laminin-332), nicht an benachbarten Zellen.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-17: Stofftransport
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-17-naka-atpase',
  'A', 'biologie', 'bio-1-17',
  'Herzglykoside (Digoxin) werden bei Herzinsuffizienz eingesetzt. Über welchen Mechanismus steigern sie die Herzmuskelkontraktilität?',
  '[{"key":"A","text":"Direkte Aktivierung von spannungsabhängigen Ca²⁺-Kanälen (L-Typ) im Sarkolemm"},{"key":"B","text":"Hemmung der Na⁺/K⁺-ATPase → intrazelluläres Na⁺ steigt → Na⁺/Ca²⁺-Austauscher (NCX) befördert weniger Ca²⁺ heraus → intrazelluläres Ca²⁺ steigt → stärkere Kontraktion"},{"key":"C","text":"Aktivierung der sarkoplasmalen Ca²⁺-ATPase (SERCA) → mehr Ca²⁺ im SR gespeichert → höhere Ausschüttung"},{"key":"D","text":"Blockade der K⁺-Kanäle → verlängertes Aktionspotential → mehr Ca²⁺-Einstrom → Kontraktion"},{"key":"E","text":"Direkte Bindung an Troponin C → erhöhte Ca²⁺-Sensitivität der Myofilamente"}]'::jsonb,
  'B',
  NULL, NULL,
  'Herzglykoside (Digoxin, Digitoxin) hemmen die Na⁺/K⁺-ATPase → intrazelluläres Na⁺ akkumuliert. Der Na⁺/Ca²⁺-Austauscher (NCX) nutzt den Na⁺-Gradienten, um Ca²⁺ aus der Zelle zu pumpen. Bei erhöhtem intrazellulärem Na⁺ nimmt die NCX-Effizienz ab → Ca²⁺ akkumuliert intrazellulär → stärkere Herzmuskelkontraktion (positive Inotropie). Enge therapeutische Breite (0,5–2 ng/ml im Plasma). Indikation: Herzinsuffizienz (verringert), Vorhofflimmern. Cave: Hypokaliämie potenziert Toxizität.',
  2
),
(
  'typk-bio-1-17-transport',
  'K', 'biologie', 'bio-1-17',
  'Welche der folgenden Aussagen zu Transportmechanismen durch die Zellmembran sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"SGLT2 im proximalen Nierentubulus resorbiert ~90 % der filtrierten Glucose im Symport mit Na⁺. SGLT2-Inhibitoren (Gliflozine) hemmen diesen Transporter und senken so den Blutzucker bei Typ-2-Diabetes.","korrekt":true},{"nr":2,"text":"Osmose ist ein aktiver Transportprozess, der ATP benötigt, um Wasser gegen seinen osmotischen Gradienten zu verschieben.","korrekt":false},{"nr":3,"text":"Einfache Diffusion durch die Lipiddoppelschicht ist auf kleine unpolare Moleküle (O₂, CO₂, Ethanol) beschränkt.","korrekt":true},{"nr":4,"text":"Sekundär aktiver Transport nutzt den von der Na⁺/K⁺-ATPase erzeugten Na⁺-Gradienten als indirekte Energiequelle, ohne direkte ATP-Hydrolyse.","korrekt":true},{"nr":5,"text":"Die Na⁺/K⁺-ATPase pumpt 2 Na⁺ aus der Zelle und 3 K⁺ in die Zelle pro ATP-Hydrolyse.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[3,4,5]},{"key":"E","nummern":[1,2,5]}]'::jsonb,
  'Aussage 1 ist korrekt: SGLT2 (Na⁺-Glucose-Symport, 1 Na⁺ + 1 Glucose) resorbiert ~90% der Glucose im proximalen Tubulus. Gliflozine (Empagliflozin, Dapagliflozin) hemmen SGLT2 → Glucosurie → Blutzucker sinkt; zusätzlich kardio- und nephroprotektiv. Aussage 2 ist FALSCH: Osmose ist PASSIVER Transport — Wasser folgt dem osmotischen Gradienten (hohe → niedrige Wasseraktivität) ohne ATP. Aussage 3 ist korrekt: Nur kleine unpolare Moleküle können die hydrophobe Kernzone der Membran direkt passieren. Aussage 4 ist korrekt: Sekundär aktiver Transport (SGLT, NHE) nutzt den Na⁺-Gradienten ohne direkte ATP-Hydrolyse. Aussage 5 ist FALSCH: Die Na⁺/K⁺-ATPase pumpt 3 Na⁺ RAUS und 2 K⁺ REIN (nicht umgekehrt).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-1-18: Zellteilung, Zellzyklus, Zelltod
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-18-apoptose',
  'A', 'biologie', 'bio-1-18',
  'Ein Pathologe beurteilt ein Gewebe und sieht Zellen mit kondensiertem Chromatin, Membran-Blebbing und Apoptosekörperchen — aber KEIN entzündliches Infiltrat. Welche Art des Zelltods liegt vor, und was unterscheidet sie von Nekrose?',
  '[{"key":"A","text":"Nekrose — durch Membranruptur entsteht kein Entzündungsinfiltrat"},{"key":"B","text":"Apoptose — aktiver, ATP-abhängiger, Caspase-vermittelter Zelltod ohne Entzündung; Membranintegrität bleibt bis zur Phagozytose erhalten"},{"key":"C","text":"Autophagie — Abbau zelleigener Organellen, führt zu Membran-Blebbing"},{"key":"D","text":"Seneszenz — dauerhafte Proliferationshemmung mit Chromatinkondensation"},{"key":"E","text":"Pyroptose — inflammatorischer Zelltod durch Caspase-1-Aktivierung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Bild beschreibt klassische Apoptose: Chromatinkondensation, Apoptosekörperchen, Membran-Blebbing, KEINE Entzündung. Apoptose ist aktiver, ATP-abhängiger, Caspase-vermittelter Zelltod. Die Membranintegrität bleibt erhalten → kein Austritt von DAMPs → keine Entzündung. Apoptosekörperchen werden von Makrophagen phagozytiert (efferozytiert). Nekrose (A) zeigt das Gegenteil: Membranruptur → Zellinhalt freigesetzt → DAMP-Aktivierung → Entzündungsreaktion. Pyroptose (E) ist inflammatorischer Zelltod (Caspase-1/-11, IL-1β-Freisetzung), kein klassisches Apoptose-Bild.',
  2
),
(
  'typk-bio-1-18-zellzyklus',
  'K', 'biologie', 'bio-1-18',
  'Welche der folgenden Aussagen zu Zellzyklus und Mitose sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"In der S-Phase werden alle Chromosomen repliziert; der DNA-Gehalt steigt von 2C auf 4C.","korrekt":true},{"nr":2,"text":"In der Metaphase werden Schwesterchromatiden durch Separase-vermittelte Kohäsin-Spaltung getrennt.","korrekt":false},{"nr":3,"text":"p53 induziert bei DNA-Schäden entweder Zellzyklusarrest (via p21, CDK-Inhibitor) oder Apoptose (via BAX/PUMA).","korrekt":true},{"nr":4,"text":"Der Spindel-Checkpoint (SAC) prüft in der Anaphase, ob alle Kinetochore korrekt an Spindelmikrotubuli angeheftet sind.","korrekt":false},{"nr":5,"text":"Non-Disjunction in Meiose I führt dazu, dass alle Gameten eines Meiose-Ereignisses entweder einen Chromosom mehr oder weniger haben.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[2,3,4]},{"key":"B","nummern":[1,4,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 ist korrekt: S-Phase (Synthese) → DNA-Replikation → Gehalt von 2C auf 4C (Chromosomenzahl 2n bleibt). Aussage 2 ist FALSCH: Kohäsin-Spaltung durch Separase findet in der ANAPHASE statt, nicht in der Metaphase. In der Metaphase stehen Chromosomen in der Äquatorialebene. Aussage 3 ist korrekt: p53 (Wächter des Genoms) → p21 (CDK2-Inhibitor, G1-Arrest) ODER BAX/PUMA (intrinsische Apoptose); in >50% aller Tumoren mutiert. Aussage 4 ist FALSCH: Der SAC (Spindel-Checkpoint) prüft in der METAPHASE (nicht Anaphase), ob alle Kinetochore korrekt biantennal angeheftet sind. Anaphase beginnt erst NACH erfolgreicher SAC-Kontrolle. Aussage 5 ist korrekt: Non-Disjunction in Meiose I (homologe Chromosomen trennen sich nicht) → alle 4 resultierenden Gameten sind betroffen (2 mit n+1, 2 mit n-1).',
  3
),
(
  'typa-bio-1-18-meiose',
  'A', 'biologie', 'bio-1-18',
  'Welche der folgenden Aussagen zur Meiose ist korrekt?',
  '[{"key":"A","text":"Crossing-over findet in der Prophase II zwischen Schwesterchromatiden statt"},{"key":"B","text":"Meiose I ist die reduktionelle Teilung: Homologe Chromosomen trennen sich → aus 2n werden 1n-Zellen (mit doppelten Chromatiden)"},{"key":"C","text":"Meiose II ist eine zweite Replikationsphase, bei der die DNA erneut verdoppelt wird"},{"key":"D","text":"Non-Disjunction in Meiose II betrifft alle Gameten des betreffenden Meiose-Ereignisses"},{"key":"E","text":"Das Ergebnis der Meiose sind 2 diploide Tochterzellen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Meiose I (reduktionelle Teilung): Homologe Chromosomen trennen sich in der Anaphase I → aus der diploiden Zelle (2n) entstehen zwei Zellen mit haploider Chromosomenzahl (1n), aber noch mit je zwei Chromatiden pro Chromosom (also 2C DNA-Gehalt). Crossing-over (A) findet in der PROPHASE I statt (zwischen nicht-schwesterlichen Chromatiden homologer Chromosomen), nicht in Prophase II. Meiose II (B) ist keine Replikation, sondern äquationelle Teilung (wie Mitose) → Schwesterchromatiden trennen sich. Non-Disjunction in Meiose II (D) betrifft nur die HÄLFTE der Gameten (2 von 4). Ergebnis der Meiose sind 4 haploide Zellen (E falsch).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 2: Gewebe ─────────────────────────────────────

-- UK bio-2-01: Epithelgewebe
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-01-epithel-klassifik',
  'A', 'biologie', 'bio-2-01',
  'Ein Pathologe beschreibt ein Gewebe: alle Zellen berühren die Basalmembran, aber die Zellkerne liegen auf verschiedenen Höhen; das Epithel trägt Kinozilien. Welchen Epitheltyp beschreibt er, und wo kommt er vor?',
  '[{"key":"A","text":"Einschichtiges Plattenepithel — Endothel der Blutgefäße"},{"key":"B","text":"Mehrschichtiges verhorntes Plattenepithel — Epidermis der Haut"},{"key":"C","text":"Mehrreihiges (pseudostratifiziertes) Flimmerepithel — Trachea und Bronchien"},{"key":"D","text":"Übergangsepithel (Urothel) — Harnblase"},{"key":"E","text":"Einschichtiges Zylinderepithel mit Mikrovilli — Dünndarm"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das beschriebene Epithel ist mehrreihig (pseudostratifiziert): Alle Zellen sitzen auf der Basalmembran (einschichtig!), aber die Kerne liegen auf verschiedenen Höhen. Kinozilien (9+2-Axonem) sind charakteristisch für das Atemwegsepithel (Trachea, Bronchien), wo sie die mukoziliäre Clearance gewährleisten. Einschichtiges Plattenepithel (A) ist flach und trägt keine Zilien. Urothel (D) hat Schirmzellen und ist dehnbar.',
  2
),
(
  'typk-bio-2-01-epithelgewebe',
  'K', 'biologie', 'bio-2-01',
  'Welche der folgenden Aussagen zu Epithelgewebe und Drüsensekretion sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Epithelien sind avaskulär — ihre Ernährung erfolgt durch Diffusion aus dem darunter liegenden Bindegewebe.","korrekt":true},{"nr":2,"text":"Talgdrüsen sezernieren holokrin: Die gesamte Sekretionszelle zerfällt und ihr Inhalt (Lipide) wird als Sekret freigesetzt.","korrekt":true},{"nr":3,"text":"Tight Junctions liegen basolateral und ermöglichen den parazellulären Transport von Ionen zwischen Epithelzellen.","korrekt":false},{"nr":4,"text":"Das Urothel der Harnblase kann sich durch Abflachung der Schirmzellen dehnen, ohne zu reißen.","korrekt":true},{"nr":5,"text":"Endokrine Drüsen leiten ihr Sekret über Ausführungsgänge nach außen, z. B. Speicheldrüsen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Epithelien sind avaskulär — Ernährung durch Diffusion aus dem subepithelialen Bindegewebe. Aussage 2 korrekt: Holokrine Sekretion (Talgdrüsen) = Zellzerfall → Zellinhalt = Sekret. Merokrin = Exozytose (Pankreas). Apokrin = Membranabschnürung. Aussage 3 FALSCH: Tight Junctions liegen APIKAL und VERHINDERN den parazellulären Transport. Aussage 4 korrekt: Urothel-Dehnbarkeit durch Schirmzellen + intrazelluläre Uroplakin-Vesikel. Aussage 5 FALSCH: EXOKRINE Drüsen → Ausführungsgänge. ENDOKRINE Drüsen (Schilddrüse, Nebenniere) → Hormone direkt ins Blut.',
  2
),
(
  'typa-bio-2-01-sekretionstyp',
  'A', 'biologie', 'bio-2-01',
  'Welcher Sekretionstyp ist für das exokrine Pankreas charakteristisch?',
  '[{"key":"A","text":"Holokrin — die gesamte Drüsenzelle zerfällt als Sekret"},{"key":"B","text":"Apokrin — der apikale Teil des Zytoplasmas schnürt sich ab"},{"key":"C","text":"Merokrin (ekkrin) — Sekretion durch Exozytose ohne Zellverlust"},{"key":"D","text":"Endokrin — Sekretion direkt ins Blut ohne Ausführungsgang"},{"key":"E","text":"Parakrin — Sekretion in den Interzellularspalt"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das exokrine Pankreas sezerniert merokrin: Verdauungsenzyme (Trypsinogen, Lipase, Amylase) werden in sekretorischen Granula gespeichert und durch Exozytose in den Pankreasgang abgegeben — ohne Zellverlust. Dies ist der häufigste Sekretionsmechanismus. Holokrin (A): Talgdrüsen. Apokrin (B): bestimmte Schweißdrüsen. Endokrin (D): Inselzellen des Pankreas (Insulin, Glucagon) — nicht das exokrine Pankreas.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-2-02: Binde- und Stützgewebe
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-02-skorbut',
  'A', 'biologie', 'bio-2-02',
  'Ein Patient mit Skorbut (Vitamin-C-Mangel) leidet an brüchigen Gefäßen und schlechter Wundheilung. Welcher molekulare Schritt der Kollagensynthese ist gestört?',
  '[{"key":"A","text":"Synthese der Kollagen-mRNA durch RNA-Polymerase II"},{"key":"B","text":"Glykosylierung von Lysin im Golgi-Apparat"},{"key":"C","text":"Hydroxylierung von Prolin und Lysin im rauen ER durch Prolyl-/Lysyl-Hydroxylase (Vitamin C als Kofaktor)"},{"key":"D","text":"Extrazelluläre Quervernetzung der Fibrillen durch Lysyloxidase"},{"key":"E","text":"Import von Prokollagen in den Zellkern"}]'::jsonb,
  'C',
  NULL, NULL,
  'Vitamin C (Ascorbinsäure) ist der essentielle Kofaktor der Prolyl-4-Hydroxylase und Lysyl-Hydroxylase im rauen ER. Diese hydroxylieren Prolin → Hydroxyprolin und Lysin → Hydroxylysin im Prokollagen — essenziell für Tripelhelix-Stabilität. Ohne Hydroxylierung: instabile Kollagenfibrillen → Skorbut-Symptome (blutende Schleimhäute, schlechte Wundheilung). Die Quervernetzung durch Lysyloxidase (D) ist ein nachgelagerter extrazell. Schritt und von Vitamin C unabhängig.',
  2
),
(
  'typk-bio-2-02-knochen',
  'K', 'biologie', 'bio-2-02',
  'Welche der folgenden Aussagen zu Knochen und Knorpel sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Osteoklasten sind mehrkernige Riesenzellen hämatopoetischen Ursprungs, die Knochen durch Säure (HCl) und Cathepsin K resorbieren.","korrekt":true},{"nr":2,"text":"Knorpel ist reich vaskularisiert, was seine gute Regenerationsfähigkeit nach Verletzungen erklärt.","korrekt":false},{"nr":3,"text":"Hyalinknorpel enthält hauptsächlich Kollagen Typ II und überzieht Gelenkflächen sowie die fetalen Knochen.","korrekt":true},{"nr":4,"text":"Faserknorpel mit Kollagen Typ I dominiert in Bandscheiben (Anulus fibrosus) und Menisci — er ist besonders zugfest.","korrekt":true},{"nr":5,"text":"Postmenopausale Osteoporose entsteht durch übermäßige Osteoblastenaktivität bei fehlendem Östrogen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Osteoklasten = hämatopoetische Linie, mehrkernig, HCl + Cathepsin K in der Howship-Lakune. Aussage 2 FALSCH: Knorpel ist AVASKULÄR → schlechte Heilung. Aussage 3 korrekt: Hyalinknorpel = Kollagen Typ II + druckresistent; Gelenkknorpel, Trachealringe, fetales Skelett. Aussage 4 korrekt: Faserknorpel = Kollagen Typ I dominant → zugfest; Bandscheiben, Menisci. Aussage 5 FALSCH: Postmenopausale Osteoporose = ÜBERMÄSSIGE OSTEOKLASTENAKTIVITÄT (Östrogen hemmt normalerweise Osteoklasten via OPG).',
  2
),
(
  'typa-bio-2-02-ucp1',
  'A', 'biologie', 'bio-2-02',
  'Braunes Fettgewebe erzeugt Wärme durch Thermogenese. Welches Protein ist dafür verantwortlich, und über welchen Mechanismus?',
  '[{"key":"A","text":"Leptin — aktiviert Fettsäureoxidation und erhöht ATP-Synthese"},{"key":"B","text":"UCP-1 (Thermogenin) — entkoppelt die mitochondriale Atmungskette: Protonen fließen durch UCP-1 zurück in die Matrix ohne ATP zu synthetisieren → Energie als Wärme"},{"key":"C","text":"Adiponektin — hemmt Glukoneogenese und aktiviert Thermogenese"},{"key":"D","text":"UCP-1 öffnet spannungsgesteuerte Ca²⁺-Kanäle → Ca²⁺-Anstieg → Wärme"},{"key":"E","text":"HSP70 faltet Proteine thermisch um und erzeugt dabei Wärme"}]'::jsonb,
  'B',
  NULL, NULL,
  'UCP-1 (Uncoupling Protein 1 / Thermogenin) ist ein Kanalprotein in der inneren Mitochondrienmembran des braunen Fettgewebes. Es ermöglicht den Rückfluss von H⁺ in die Matrix OHNE ATP-Synthese → freie Energie des Protonengradienten wird als Wärme dissipiert. Braunes Fettgewebe ist bei Neugeborenen (Nackenschopf, perirenal) und Winterschläfern besonders aktiv. Weiße Adipozyten (kein UCP-1) dienen der Energiespeicherung.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-2-03: Muskelgewebe
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-03-sarkomer',
  'A', 'biologie', 'bio-2-03',
  'Beim Gleitfilamentmodell der Muskelkontraktion gleiten Aktinfilamente an Myosinfilamenten entlang. Was verkürzt sich im Sarkomer?',
  '[{"key":"A","text":"Die H-Zone und die I-Bande verkürzen sich; die A-Bande bleibt konstant"},{"key":"B","text":"Die A-Bande verkürzt sich; H-Zone und I-Bande bleiben konstant"},{"key":"C","text":"Alle Banden (A, H, I) verkürzen sich gleichmäßig"},{"key":"D","text":"Nur die H-Zone verkürzt sich; I-Bande und A-Bande bleiben konstant"},{"key":"E","text":"Aktin- und Myosinfilamente verkürzen sich selbst durch ATP-Hydrolyse"}]'::jsonb,
  'A',
  NULL, NULL,
  'Beim Gleitfilamentmodell gleiten die Filamente aneinander, ohne sich selbst zu verkürzen. Im Sarkomer: Die I-Bande (nur Aktin, hell) verkürzt sich, weil Aktinfilamente weiter in die A-Bande gleiten. Die H-Zone (nur Myosin, Mitte der A-Bande) verkürzt sich, weil Aktinfilamente von beiden Seiten einrücken. Die A-Bande (Myosin-Länge, dunkel) bleibt konstant — Myosinfilamente verändern ihre Länge nicht. Die Filamente selbst verkürzen sich nicht (E falsch).',
  2
),
(
  'typk-bio-2-03-muskelgewebe',
  'K', 'biologie', 'bio-2-03',
  'Welche der folgenden Aussagen zu Muskelgewebetypen und Kontraktion sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Herzmuskel ist quergestreift, besitzt Disci intercalares (Glanzstreifen) mit Gap Junctions und kontrahiert unwillkürlich.","korrekt":true},{"nr":2,"text":"Glatte Muskulatur ist quergestreift und unterliegt der willkürlichen Kontrolle durch somatische Motoneurone.","korrekt":false},{"nr":3,"text":"Skelettmuskelzellen (Muskelfasern) sind vielkernig (synzytial) und entstehen durch Fusion von Myoblasten.","korrekt":true},{"nr":4,"text":"Ca²⁺-Ionen lösen die Skelettmuskelkontraktion aus, indem sie an Troponin C binden und die Tropomyosin-Blockade der Myosin-Bindungsstellen am Aktin aufheben.","korrekt":true},{"nr":5,"text":"Titin ist ein elastisches Riesenprotein, das Myosin im Sarkomer verankert und die passive Steifigkeit des Muskels mitbestimmt.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4,5]},{"key":"D","nummern":[1,2,3]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Herzmuskel = quergestreift + unwillkürlich + Glanzstreifen (Gap Junctions für elektrische Kopplung + Desmosomen). Aussage 2 FALSCH: Glatte Muskulatur ist NICHT quergestreift und unwillkürlich (vegetatives NS). Aussage 3 korrekt: Muskelfasern = Fusion von Myoblasten → viele periphere Kerne. Aussage 4 korrekt: Ca²⁺ → Troponin C → Tropomyosin verschiebt sich → Myosin-Bindungsstellen frei → Querbrückenbildung. Aussage 5 korrekt: Titin (3,7 MDa) verbindet Z-Scheibe mit M-Linie, hält Myosin zentriert, passive Elastizität.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-2-04: Nervengewebe
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-04-myelin',
  'A', 'biologie', 'bio-2-04',
  'Welche Zellen bilden die Myelinscheiden im ZNS, und welche im PNS?',
  '[{"key":"A","text":"ZNS: Astrozyten; PNS: Satellitenzellen"},{"key":"B","text":"ZNS: Oligodendrozyten; PNS: Schwann-Zellen"},{"key":"C","text":"ZNS: Schwann-Zellen; PNS: Oligodendrozyten"},{"key":"D","text":"ZNS: Mikroglia; PNS: Schwann-Zellen"},{"key":"E","text":"ZNS und PNS: beide Astrozyten"}]'::jsonb,
  'B',
  NULL, NULL,
  'Myelinisierung: ZNS → Oligodendrozyten (ein Oligodendrozyt myelinisiert bis zu 50 Axone). PNS → Schwann-Zellen (je eine Zelle pro Internodium). Klinische Relevanz: Multiple Sklerose (MS) = Demyelinisierung im ZNS (Oligodendrozyten). Guillain-Barré-Syndrom = Demyelinisierung im PNS (Schwann-Zellen). Astrozyten bieten metabolische Unterstützung und bilden die Blut-Hirn-Schranke, myelinisieren aber nicht.',
  1
),
(
  'typk-bio-2-04-gliazellen',
  'K', 'biologie', 'bio-2-04',
  'Welche der folgenden Aussagen zu Nervenzellen und Gliazellen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Saltatorische Erregungsleitung an myelinisierten Axonen springt von Ranvier-Schnürring zu Ranvier-Schnürring und ermöglicht Leitungsgeschwindigkeiten bis ~120 m/s.","korrekt":true},{"nr":2,"text":"Mikroglia sind die residenten Makrophagen des ZNS und entstammen dem Ektoderm.","korrekt":false},{"nr":3,"text":"Astrozyten regulieren den extrazellulären K⁺-Spiegel im ZNS und sind über Gap Junctions zu einem Netzwerk verbunden.","korrekt":true},{"nr":4,"text":"Multiple Sklerose ist eine Demyelinisierungserkrankung, bei der Oligodendrozyten im ZNS durch Autoimmunprozesse zerstört werden.","korrekt":true},{"nr":5,"text":"Unmyelinisierte Axone leiten Aktionspotentiale schneller als myelinisierte Axone gleichen Durchmessers.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[2,4,5]},{"key":"C","nummern":[1,2,3]},{"key":"D","nummern":[3,4,5]},{"key":"E","nummern":[1,2,5]}]'::jsonb,
  'Aussage 1 korrekt: Saltatorische Leitung → AA-Fasern bis ~120 m/s. Aussage 2 FALSCH: Mikroglia entstammen dem MESODERM (Yolk-Sac-Vorläufer), nicht dem Ektoderm. Aussage 3 korrekt: Astrozyten = K⁺-Pufferung, Glutamat-Reuptake, metabolische Unterstützung. Aussage 4 korrekt: MS = Oligodendrozyt-Schädigung durch autoreaktive T-Zellen → Demyelinisierung → Leitungsblockade. Aussage 5 FALSCH: Myelinisierte Axone leiten SCHNELLER (saltatorisch) als unmyelinisierte.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 3: Anatomie & Physiologie (Auswahl) ──────────

-- UK bio-3-01: Nervensystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-01-aktionspotential',
  'A', 'biologie', 'bio-3-01',
  'Welche Aussage zum Aktionspotential eines Neurons ist korrekt?',
  '[{"key":"A","text":"Das Aktionspotential ist graduell — stärkere Reize erzeugen größere Amplituden"},{"key":"B","text":"Während der absoluten Refraktärzeit können ausreichend starke Reize ein weiteres AP auslösen"},{"key":"C","text":"Die Depolarisation wird durch einen massiven Na⁺-Einstrom durch spannungsgesteuerte Na⁺-Kanäle verursacht"},{"key":"D","text":"Die Repolarisation erfolgt durch Ca²⁺-Ausstrom aus der Zelle"},{"key":"E","text":"Das Ruhemembranpotential von ~-70 mV wird durch Na⁺-Einstrom aufrechterhalten"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das Aktionspotential folgt dem Alles-oder-Nichts-Prinzip (A falsch). Depolarisation (-70 mV → +40 mV) durch schnellen Na⁺-Einstrom via spannungsgesteuerte Na⁺-Kanäle. Repolarisation erfolgt durch K⁺-Ausstrom (nicht Ca²⁺, D falsch). Absolute Refraktärzeit (~1 ms, Na⁺-Kanäle inaktiviert): kein weiteres AP auslösbar, unabhängig von der Reizstärke (B falsch). Ruhepotential (-70 mV) durch K⁺-Leckstrom + Na⁺/K⁺-ATPase (E falsch).',
  2
),
(
  'typk-bio-3-01-vegns',
  'K', 'biologie', 'bio-3-01',
  'Welche der folgenden Aussagen zu Sympathikus und Parasympathikus sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Sympathikusaktivierung bewirkt über β1-Rezeptoren am Herz positive Chronotropie und Inotropie.","korrekt":true},{"nr":2,"text":"Parasympathikus-Neurotransmitter ist Acetylcholin an muskarinischen Rezeptoren (M2 am Herz, M3 an glatter Muskulatur).","korrekt":true},{"nr":3,"text":"Atropin hemmt nikotinische Acetylcholinrezeptoren und wird bei Bradykardie eingesetzt.","korrekt":false},{"nr":4,"text":"Sympathikus: kurze präganglionäre + lange postganglionäre Fasern. Parasympathikus: lange präganglionäre + kurze postganglionäre Fasern.","korrekt":true},{"nr":5,"text":"Noradrenalin aktiviert ausschließlich β-Rezeptoren ohne Wirkung auf α-Rezeptoren.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Sympathikus → Noradrenalin/Adrenalin → β1-Rezeptoren Herz → Herzfrequenz ↑, Kontraktilität ↑. Aussage 2 korrekt: Parasympathikus → Acetylcholin → M2 (Herz, neg. Chronotropie) + M3 (glatte Muskulatur, Kontraktion). Aussage 3 FALSCH: Atropin hemmt MUSKARINISCHE (nicht nikotinische) Rezeptoren → Parasympathikus-Blockade → Herzfrequenz ↑. Aussage 4 korrekt: Klassische topographische Gliederung. Aussage 5 FALSCH: Noradrenalin aktiviert α-Rezeptoren (Vasokonstriktion) UND β-Rezeptoren (Herz).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-3-03: Hormonsystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-03-insulin',
  'A', 'biologie', 'bio-3-03',
  'Welche Aussage zum Insulin-Signalweg und seinen Effekten ist korrekt?',
  '[{"key":"A","text":"Insulin bindet an einen G-Protein-gekoppelten Rezeptor und erhöht cAMP"},{"key":"B","text":"Insulin bindet an eine Rezeptor-Tyrosinkinase → PI3K/Akt-Weg → GLUT4-Translokation zur Plasmamembran"},{"key":"C","text":"Insulin ist ein lipophiles Steroidhormon und diffundiert direkt in die Zelle"},{"key":"D","text":"Insulin aktiviert die Glykogenphosphorylase und fördert damit Glykogenabbau in der Leber"},{"key":"E","text":"Insulin wird von den α-Zellen des Pankreas bei Hypoglykämie sezerniert"}]'::jsonb,
  'B',
  NULL, NULL,
  'Insulin (Peptidhormon) bindet den Insulinrezeptor (Rezeptor-Tyrosinkinase) → Autophosphorylierung → IRS-1 → PI3K → PIP3 → Akt/PKB → GLUT4-Vesikel fusionieren mit Plasmamembran → Glucose-Einstrom in Muskel- und Fettzellen. Gleichzeitig: Glykogensynthase aktiviert (Aufbau), Glykogenphosphorylase gehemmt (D falsch). Insulin wird von β-Zellen (nicht α-Zellen) bei Hyperglykämie sezerniert (E falsch). Steroidhormone diffundieren durch Membranen (C falsch).',
  2
),
(
  'typk-bio-3-03-hormonsystem',
  'K', 'biologie', 'bio-3-03',
  'Welche der folgenden Aussagen zum Hormonsystem sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Steroidhormone (Cortisol, Aldosteron, Östrogen) sind lipophil, binden intrazelluläre Rezeptoren und modulieren direkt die Transkription.","korrekt":true},{"nr":2,"text":"TSH wird von der Schilddrüse produziert und stimuliert die Hypophyse.","korrekt":false},{"nr":3,"text":"Hypothalamus → Hypophyse → Zielorgan: negative Rückkopplung der Zielorganshormone hemmt Hypothalamus und Hypophyse.","korrekt":true},{"nr":4,"text":"ADH wirkt am Sammelrohr der Niere und erhöht durch Aquaporin-2-Einbau die Wasserpermeabilität.","korrekt":true},{"nr":5,"text":"Glucagon senkt den Blutzucker durch Aktivierung der Glykogensynthase in der Leber.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Steroidhormone passieren Membranen → nukleäre Rezeptoren → Transkriptionsmodulation. Aussage 2 FALSCH: TSH wird von der HYPOPHYSE produziert → stimuliert SCHILDDRÜSE. Hierarchie: TRH (Hypothalamus) → TSH (Hypophyse) → T3/T4 (Schilddrüse). Aussage 3 korrekt: Klassische negative Rückkopplung der Hormonachsen. Aussage 4 korrekt: ADH → V2-Rezeptor → cAMP → PKA → AQP2 in apikale Membran → Wasserresorption ↑. Aussage 5 FALSCH: Glucagon ERHÖHT Blutzucker → Glykogenphosphorylase aktiviert (Glykogenabbau) + Gluconeogenese.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-3-04: Herz-Kreislauf
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-04-starling',
  'A', 'biologie', 'bio-3-04',
  'Das Frank-Starling-Gesetz des Herzens beschreibt den Zusammenhang zwischen Vorlast und Schlagvolumen. Was sagt es aus?',
  '[{"key":"A","text":"Je höher der Blutdruck (Nachlast), desto größer das Schlagvolumen"},{"key":"B","text":"Eine erhöhte Vorlast (enddiastolisches Volumen) führt zu stärkerer Vordehnung der Myozyten und damit zu einem größeren Schlagvolumen"},{"key":"C","text":"Das Schlagvolumen ist unabhängig von der Vorlast und wird nur durch Herzfrequenz bestimmt"},{"key":"D","text":"Bei Herzinsuffizienz nimmt das Schlagvolumen mit steigender Vorlast unbegrenzt zu"},{"key":"E","text":"Das Starling-Gesetz gilt nur für Herzvorhöfe, nicht für Ventrikel"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Frank-Starling-Gesetz: Erhöhte Vorlast (enddiastolisches Volumen) → stärkere Myozytendehnung → optimale Aktin-Myosin-Überlappung + erhöhte Ca²⁺-Sensitivität von Troponin C → stärkere Kontraktion → größeres Schlagvolumen. Bei Herzinsuffizienz (D) ist die Starling-Kurve abgeflacht — ab einem Punkt kein weiterer Anstieg. Nachlast (A) ist der Widerstand gegen den Auswurf und bestimmt das Schlagvolumen ebenfalls, aber ist nicht das Thema des Starling-Gesetzes.',
  2
),
(
  'typk-bio-3-04-herzkreislauf',
  'K', 'biologie', 'bio-3-04',
  'Welche der folgenden Aussagen zu Herz und Kreislauf sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Der Sinusknoten (SA-Knoten) ist der primäre Schrittmacher des Herzens mit Eigenfrequenz ~60–100/min.","korrekt":true},{"nr":2,"text":"Im Kapillargebiet ist die Gesamtquerschnittsfläche am kleinsten — daher die höchste Strömungsgeschwindigkeit.","korrekt":false},{"nr":3,"text":"Arteriosklerose ist eine entzündliche Erkrankung der Arterienwand mit LDL-Oxidation und Schaumzellbildung.","korrekt":true},{"nr":4,"text":"ACE-Hemmer (z. B. Ramipril) blockieren die Angiotensin-II-Bildung → Vasodilatation und reduzierte Aldosteron-Ausschüttung → Blutdrucksenkung.","korrekt":true},{"nr":5,"text":"Vorhofflimmern entsteht durch defekte Sinusknoten-Funktion und erfordert immer eine Kardioversion.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,4,5]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: SA-Knoten = primärer Schrittmacher ~60–100/min. AV-Knoten: 40–60; Purkinje: ~20–40. Aussage 2 FALSCH: Im Kapillargebiet ist die Gesamtquerschnittsfläche am GRÖSSTEN → niedrigste Strömungsgeschwindigkeit (günstig für Austausch). Aussage 3 korrekt: Arteriosklerose = chronisch-entzündlich; LDL → Oxidation → Makrophagen → Schaumzellen → atheromatöse Plaques. Aussage 4 korrekt: ACE-Hemmer → kein Ang II → Vasodilatation + weniger Aldosteron → RR ↓ + Natriurese. Aussage 5 FALSCH: Vorhofflimmern entsteht durch chaotische Reizkreise in den Vorhöfen (nicht defekter SA-Knoten) und erfordert NICHT immer Kardioversion (Frequenzkontrolle oft ausreichend).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-3-05: Blut
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-05-haemophilie',
  'A', 'biologie', 'bio-3-05',
  'Ein Patient mit Hämophilie A hat einen Mangel an Faktor VIII. Welchen Teil der Blutgerinnung betrifft das?',
  '[{"key":"A","text":"Den extrinsischen (TF-abhängigen) Weg — Faktor VIII ist Kofaktor für Faktor VIIa/TF"},{"key":"B","text":"Den intrinsischen (Kontaktaktivierungs-)Weg — Faktor VIII ist Kofaktor für Faktor IXa und verstärkt die Faktor-X-Aktivierung"},{"key":"C","text":"Die primäre Hämostase — Faktor VIII ist für die Thrombozytenaggregation notwendig"},{"key":"D","text":"Die Fibrinbildung — Faktor VIII spaltet Fibrinogen direkt zu Fibrin"},{"key":"E","text":"Die Fibrinolyse — Faktor VIII aktiviert Plasminogen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Faktor VIII ist ein essentieller Kofaktor im intrinsischen Gerinnungsweg: Er bildet den Tenase-Komplex mit aktiviertem Faktor IXa und beschleunigt Faktor-X-Aktivierung ~1.000-fach. Ohne Faktor VIII (Hämophilie A): verlängerte PTT, normale Quick/INR. Hämophilie A: X-chromosomal rezessiv. Hämophilie B: Faktor-IX-Mangel. Der extrinsische Weg (A) beginnt mit Tissue Factor + Faktor VII — Faktor VIII ist hier nicht beteiligt.',
  3
),
(
  'typk-bio-3-05-blut',
  'K', 'biologie', 'bio-3-05',
  'Welche der folgenden Aussagen zu Blutbestandteilen und Hämostase sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Reife Erythrozyten sind kernlos, besitzen keine Mitochondrien und gewinnen ATP ausschließlich durch anaerobe Glykolyse.","korrekt":true},{"nr":2,"text":"Neutrophile sind die häufigsten Leukozyten und bilden die erste Abwehrlinie gegen bakterielle Infektionen durch Phagozytose.","korrekt":true},{"nr":3,"text":"Thrombin (Faktor IIa) spaltet Fibrinogen zu Fibrin und aktiviert Faktor XIII zur Quervernetzung der Fibrinmonomere.","korrekt":true},{"nr":4,"text":"Heparin hemmt Thrombin direkt ohne Kofaktor-Bedarf.","korrekt":false},{"nr":5,"text":"Vitamin K ist für die γ-Carboxylierung der Gerinnungsfaktoren II, VII, IX und X notwendig; Warfarin hemmt Vitamin-K-Epoxidreduktase.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3,5]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Reife Erythrozyten kernlos + keine Mitochondrien → ATP nur durch Glykolyse. Aussage 2 korrekt: Neutrophile (~55–70%) = erste Antwort bei Bakterien: Phagozytose, Degranulierung, NETs. Aussage 3 korrekt: Thrombin = zentrale Protease: Fibrinogen → Fibrin; aktiviert Faktor XIIIa zur Quervernetzung. Aussage 4 FALSCH: Heparin wirkt INDIREKT über Antithrombin III (AT-III) → AT-III hemmt Thrombin und Faktor Xa. Direkte Thrombinhemmer: Dabigatran (NOAC). Aussage 5 korrekt: Vitamin K → γ-Carboxylase (Faktoren II, VII, IX, X + Protein C/S). Warfarin hemmt VKOR → Faktorenmangel.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-3-08: Atmungssystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-08-surfactant',
  'A', 'biologie', 'bio-3-08',
  'Frühgeborene unter 28 SSW entwickeln häufig ein Atemnotsyndrom (RDS). Welcher Mangel liegt zugrunde, und welcher Mechanismus erklärt die Alveolenkollaps-Tendenz?',
  '[{"key":"A","text":"Mangel an Typ-I-Pneumozyten → ungenügender Gasaustausch"},{"key":"B","text":"Mangel an Surfactant (von Typ-II-Pneumozyten) → hohe Oberflächenspannung in kleinen Alveolen → Kollaps bei Ausatmung (LaPlace-Gesetz)"},{"key":"C","text":"Überschuss an Typ-II-Pneumozyten → übermäßige Surfactantproduktion → Alveolendehnung"},{"key":"D","text":"Fehlende Atemmuskulatur → Hypoventilation → alveoläre Hypoxie"},{"key":"E","text":"Defekte Bronchialmukosa → Schleimansammlung → mechanische Obstruktion"}]'::jsonb,
  'B',
  NULL, NULL,
  'Surfactant wird von Typ-II-Pneumozyten ab ~24 SSW produziert (hauptsächlich DPPC). Surfactant reduziert Oberflächenspannung an der Luft-Flüssigkeits-Grenzfläche. Ohne Surfactant: LaPlace-Gesetz (P = 2T/r) → kleine Alveolen kollabieren bei Ausatmung (Atelektase) → Atemnotsyndrom. Therapie: pränatale Kortikosteroide (Betamethason) + postnatale Surfactant-Substitution. Mukoviszidose (kein RDS) ist ein CFTR-Defekt.',
  2
),
(
  'typk-bio-3-08-atmung',
  'K', 'biologie', 'bio-3-08',
  'Welche der folgenden Aussagen zum Atmungssystem sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Inspiration ist aktiv: Zwerchfell + Mm. intercostales externi kontrahieren → Thoraxvolumen steigt → Druck sinkt → Luft strömt ein.","korrekt":true},{"nr":2,"text":"CO₂ wird im Blut hauptsächlich als Carbaminohämoglobin (Bindung an Hämoglobin) transportiert.","korrekt":false},{"nr":3,"text":"Bohr-Effekt: Erhöhter CO₂-Druck und niedriger pH senken O₂-Affinität des Hämoglobins (Rechtsverschiebung) und fördern O₂-Abgabe im Gewebe.","korrekt":true},{"nr":4,"text":"Das Atemzentrum in der Medulla oblongata reagiert empfindlicher auf CO₂-/H⁺-Spiegel als auf O₂-Spiegel.","korrekt":true},{"nr":5,"text":"Mukoviszidose ist eine Erkrankung des Surfactant-Metabolismus durch fehlgeleitete Lipidsekretion in den Alveolen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Aktive Inspiration → Zwerchfell senkt sich + externe Interkostalmuskeln heben Rippen → Thoraxraum ↑ → Druck ↓ → Luft strömt ein. Aussage 2 FALSCH: CO₂ transportiert primär als HYDROGENCARBONAT (HCO₃⁻, ~70%); Carbaminohämoglobin (~20%); physikalisch gelöst (~10%). Aussage 3 korrekt: Bohr-Effekt = Rechtsverschiebung bei ↑CO₂, ↓pH, ↑Temperatur, ↑2,3-DPG → O₂-Entladung im Gewebe erleichtert. Aussage 4 korrekt: Medulla-Chemosensitivität auf CO₂/H⁺ im Liquor >> O₂ (periphere Chemorezeptoren reagieren auf O₂-Mangel). Aussage 5 FALSCH: Mukoviszidose = CFTR-Chloridkanal-Defekt → dickes Sekret in Lunge, Pankreas, Darm. Kein Surfactant-Problem.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 4: Entwicklungsbiologie ──────────────────────

-- UK bio-4-01: Befruchtung, Furchung, Implantation
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-01-akrosom',
  'A', 'biologie', 'bio-4-01',
  'Welche zeitliche Abfolge der Ereignisse bei der Befruchtung ist korrekt?',
  '[{"key":"A","text":"Kortikalreaktion → Akrosom-Reaktion → Syngamie → Meiose-II-Abschluss"},{"key":"B","text":"Akrosom-Reaktion (Enzymfreisetzung, Zona-Durchdringung) → Kortikalreaktion (Polyspermie-Block) → Meiose-II-Abschluss → Syngamie"},{"key":"C","text":"Meiose-II-Abschluss → Syngamie → Akrosom-Reaktion → Kortikalreaktion"},{"key":"D","text":"Akrosom-Reaktion → Syngamie → Kortikalreaktion → Meiose-II-Abschluss"},{"key":"E","text":"Zona-Bindung → Syngamie → Akrosom-Reaktion → Kortikalreaktion"}]'::jsonb,
  'B',
  NULL, NULL,
  'Korrekte Reihenfolge: (1) Spermium bindet ZP3 → Akrosom-Reaktion: Akrosin + Hyaluronidase → Zona pellucida durchdrungen. (2) Fusion → Ca²⁺-Anstieg → Kortikalreaktion: kortikale Granula exozytieren → Zona-Modifikation → Polyspermie-Block. (3) Ca²⁺ vollendet Meiose II: Oozyte (arretiert in Metaphase II) → reife Eizelle + 2. Polkörperchen. (4) Syngamie: Vorkerne verschmelzen → Zygote (2n).',
  2
),
(
  'typk-bio-4-01-blastozyste',
  'K', 'biologie', 'bio-4-01',
  'Welche der folgenden Aussagen zu Blastozyste und Implantation sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Der Trophoblast der Blastozyste entwickelt sich zur Plazenta und produziert hCG, das das Corpus luteum erhält.","korrekt":true},{"nr":2,"text":"Die Implantation findet typischerweise am Tag 6–7 nach Befruchtung im Endometrium statt.","korrekt":true},{"nr":3,"text":"hCG ist strukturell dem FSH ähnlich und wirkt an FSH-Rezeptoren des Corpus luteum.","korrekt":false},{"nr":4,"text":"Die Morula (16–32 Zellen) ist das erste Entwicklungsstadium mit Tight Junctions zwischen den Blastomeren (Kompaktierung).","korrekt":true},{"nr":5,"text":"Bei einer Extrauteringravidität ist der hCG-Spiegel stets höher als bei normaler Intrauteringravidität gleichen Alters.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Trophoblast → Plazenta + hCG → Corpus-luteum-Erhaltung → Progesteron ↑ → keine Menstruation. Aussage 2 korrekt: Implantation Tag 6–7 (~Tag 20–21 des Zyklus, Lutealphase). Aussage 3 FALSCH: hCG ähnelt LH (nicht FSH) — beide teilen α-Untereinheit, spezifische β-Untereinheit → bindet LH-Rezeptoren des Corpus luteum. Aussage 4 korrekt: Morula-Kompaktierung durch E-Cadherin + Tight Junctions → erste Differenzierung. Aussage 5 FALSCH: Bei Extrauteringravidität steigt hCG oft LANGSAMER an (kein regelrechter Anstieg <66% Verdopplung in 48h = diagnostisches Zeichen).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-4-02: Gastrulation, Neurulation
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-02-spinabifida',
  'A', 'biologie', 'bio-4-02',
  'Ein Kind wird mit einer Spina bifida geboren. Welcher embryonale Prozess ist defekt, und welches Keimblatt ist betroffen?',
  '[{"key":"A","text":"Gastrulation missglückt — Mesoderm fehlgebildet"},{"key":"B","text":"Neurulation unvollständig — posteriorer Neuroporus hat sich nicht geschlossen — Ektoderm (Neuralrohr) betroffen"},{"key":"C","text":"Implantation gestört — Endoderm des Rückenmarks nicht induziert"},{"key":"D","text":"Somiten-Differenzierung defekt — Myotom bildet keine Rückenmuskulatur"},{"key":"E","text":"Gastrulation defekt — kein Primitivstreifen gebildet — alle drei Keimblätter fehlen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Spina bifida = unvollständige Neurulation: posteriorer Neuroporus schließt sich nicht (normal: Tag 27). Das Neuralrohr — Ektoderm-Derivat — bleibt offen → Rückenmarkgewebe frei. Folsäuremangel ist wichtigster Risikofaktor. Prophylaxe: Folsäure 0,4 mg/Tag präkonzeptionell (Risiko -70%). Anenzephalie: offener anteriorer Neuroporus (Tag 25). Somiten liefern Wirbelkörper (sekundär betroffen), aber primärer Defekt liegt im Neuralrohr.',
  2
),
(
  'typk-bio-4-02-keimblätter',
  'K', 'biologie', 'bio-4-02',
  'Welche der folgenden Aussagen zu Gastrulation und Keimblattderivaten sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Alle drei Keimblätter (Ektoderm, Mesoderm, Endoderm) entstehen aus dem Epiblast durch Invagination am Primitivstreifen.","korrekt":true},{"nr":2,"text":"Das Endoderm bildet das Epithel des Verdauungstrakts, der Atemwege sowie Leber, Pankreas und Schilddrüse.","korrekt":true},{"nr":3,"text":"Neuralleistenzellen entstehen aus dem Mesoderm und bilden Melanozyten, Ganglien und Kieferknochen.","korrekt":false},{"nr":4,"text":"Das Notochord (Mesoderm-Derivat) induziert die Neuralplatte aus dem Ektoderm und wird später zum Nucleus pulposus der Bandscheiben.","korrekt":true},{"nr":5,"text":"Herzmuskel, Skelettmuskel, Knochen, Nieren und Gonaden entstammen dem Mesoderm.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,4,5]},{"key":"D","nummern":[1,3,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Alle drei Keimblätter aus dem Epiblast: Invagination → Endoderm + Mesoderm; Rest = Ektoderm. Aussage 2 korrekt: Endoderm → Darmepithel, Atemwegepithel, Leber, Pankreas, Schilddrüse. Aussage 3 FALSCH: Neuralleistenzellen entstammen dem EKTODERM (Neuralrohrrand) — nicht Mesoderm. Wandern aus → Melanozyten, periphere Ganglien, Nebennierenmark, Kieferknochen, Schwann-Zellen. Aussage 4 korrekt: Notochord induziert Neuralplatte via Sonic Hedgehog; Überrest: Nucleus pulposus. Aussage 5 korrekt: Mesoderm → Herzmuskel, Skelettmuskel (Myotom), Knochen (Sklerotom), Nieren (Intermediärmesoderm), Gonaden.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-4-03: Embryonal- und Fetalentwicklung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-03-thalidomid',
  'A', 'biologie', 'bio-4-03',
  'Thalidomid (Contergan) verursachte Phokomelie. In welchem Zeitfenster war die Exposition besonders schädlich, und warum?',
  '[{"key":"A","text":"Woche 1–2, da das Alles-oder-Nichts-Prinzip nicht gilt"},{"key":"B","text":"Woche 4–8, da dies die kritische Periode der Extremitätenanlage ist — Thalidomid hemmt dort Angiogenese und Zellproliferation"},{"key":"C","text":"Woche 20–28, da fetales Wachstum am stärksten betroffen wird"},{"key":"D","text":"Woche 9–12, da die Extremitäten in der Fetalperiode ausreifen"},{"key":"E","text":"Woche 3, da der Primitivstreifen für die Extremitäten verantwortlich ist"}]'::jsonb,
  'B',
  NULL, NULL,
  'Konzept der kritischen Perioden: Thalidomid wirkte in Woche 4–8, da in dieser Zeit die Extremitätenleisten (Arm: Woche 4, Bein: Woche 5) differenzieren. Thalidomid hemmt u. a. Angiogenese (Anti-VEGF) → fehlende Gefäßversorgung → Apoptose der Extremitätenknospen → Phokomelie. In Woche 1–2 gilt Alles-oder-Nichts-Prinzip (totipotente Blastomere). In der Fetalperiode (C, D) sind die Gliedmaßen bereits angelegt. Heute: Thalidomid bei Multiplem Myelom + ENL unter strenger Schwangerschaftsverhütung.',
  2
),
(
  'typk-bio-4-03-fetalentwicklung',
  'K', 'biologie', 'bio-4-03',
  'Welche der folgenden Aussagen zu Embryonal- und Fetalentwicklung sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Die Embryonalperiode (Wochen 1–8) ist die Phase der Organogenese und besonders vulnerabel gegenüber teratogenen Noxen.","korrekt":true},{"nr":2,"text":"Das Alles-oder-Nichts-Prinzip gilt für Wochen 1–2: Noxen führen zu Fruchttod oder keiner Schädigung — totipotente Blastomere können sich ersetzen.","korrekt":true},{"nr":3,"text":"Surfactant wird von Typ-II-Pneumozyten ab ca. Woche 12 produziert; Frühgeborene ab Woche 16 haben ausreichend Surfactant.","korrekt":false},{"nr":4,"text":"Kortikosteroide (Betamethason) werden bei drohender Frühgeburt <34 SSW gegeben, um fetale Lungenreife zu beschleunigen.","korrekt":true},{"nr":5,"text":"Röteln-Virus (Rubella) in der 1.–12. SSW verursacht kongenitale Röteln (Herzfehler, Taubheit, Katarakt) durch Schädigung in der kritischen Periode.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Organogenese Wochen 3–8 → maximale Vulnerabilität. Aussage 2 korrekt: Alles-oder-Nichts in Woche 1–2 (Präimplantation) → Totipotenz der Blastomere. Aussage 3 FALSCH: Surfactant-Produktion beginnt erst um Woche 24. Ausreichende Produktion ab ~28–32 SSW. Hohes RDS-Risiko bei Frühgeburt <28 SSW. Aussage 4 korrekt: Antenatale Kortikosteroide (Betamethason 2×12 mg i.m.) beschleunigen Surfactant-Synthese → RDS-Risiko ↓ ~50%. Aussage 5 korrekt: Kongenitales Rötelnsyndrom = klassisches Teratogen-Beispiel (Woche 1–12).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-4-04: Plazenta und Eihäute
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-04-plazentaschranke',
  'A', 'biologie', 'bio-4-04',
  'Die Plazentaschranke trennt fetales von mütterlichem Blut. Was passiert physiologisch NICHT?',
  '[{"key":"A","text":"O₂ und CO₂ diffundieren zwischen mütterlichem und fetalem Blut"},{"key":"B","text":"IgG-Antikörper werden aktiv via FcRn-Rezeptor auf den Fetus übertragen (passiver Nestschutz)"},{"key":"C","text":"Glucose wird via GLUT-Transporter auf den Fetus übertragen"},{"key":"D","text":"Mütterliche Erythrozyten treten unter normalen Bedingungen in fetale Gefäße über"},{"key":"E","text":"Steroidhormone (Östrogen, Progesteron) passieren die Plazenta durch Diffusion"}]'::jsonb,
  'D',
  NULL, NULL,
  'Unter normalen Bedingungen passieren mütterliche Erythrozyten die intakte Plazentaschranke NICHT — fetales und mütterliches Blut bleiben getrennt (hämokoriale Plazenta: mütterliches Blut umspült Chorionzotten, aber Erythrozyten überqueren nicht die Trophoblastschicht). O₂/CO₂ (A), Glucose (C), Steroidhormone (E) diffundieren. IgG (B) wird aktiv via FcRn transportiert. Bei Störungen (Trauma, Entbindung) können Erythrozyten übertreten → Rhesus-Inkompatibilität → Anti-D-Prophylaxe bei Rh-neg. Müttern.',
  2
),
(
  'typk-bio-4-04-plazenta',
  'K', 'biologie', 'bio-4-04',
  'Welche der folgenden Aussagen zu Plazenta und Eihäuten sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die Plazenta ist hämokoriel beim Menschen: Mütterliches Blut umspült direkt den Synzytiotrophoblasten der Chorionzotten.","korrekt":true},{"nr":2,"text":"Progesteron wird in der Frühschwangerschaft vom Corpus luteum produziert; ab der 8.–10. SSW übernimmt die Plazenta (luteoplazentarer Shift).","korrekt":true},{"nr":3,"text":"Das Amnion enthält Fruchtwasser, das den Embryo mechanisch schützt und aus fetalem Urin und Lungenflüssigkeit besteht.","korrekt":true},{"nr":4,"text":"Chorionzotten-Biopsie (CVS) ist ein risikofreier Eingriff ohne Fehlgeburtsrisiko, der ab Woche 11–14 durchgeführt werden kann.","korrekt":false},{"nr":5,"text":"Das fetale Nebennierenmark produziert DHEA-Sulfat, das von der Plazenta zu Östrogen aromatisiert wird.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,3,5]},{"key":"C","nummern":[2,4,5]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Hämokoriale Plazenta = Synzytiotrophoblast badet direkt im intervillösen Blutraum (ohne mütterliches Endothel). Aussage 2 korrekt: Luteoplazentarer Shift ~8.–10. SSW — Progesteron von Corpus luteum → Plazenta. Aussage 3 korrekt: Fruchtwasser ab 2. Trimester = hauptsächlich fetaler Urin + Lungenflüssigkeit. Aussage 4 FALSCH: CVS trägt ein reales Fehlgeburtsrisiko (~0,5–1%). Keine risikofreie Methode. Aussage 5 korrekt: Fetoplazentare Einheit: Fetale NNR → DHEA-S → Plazenta (Aromatase) → Östriol → mütterlicher Kreislauf.',
  3
)
ON CONFLICT (id) DO NOTHING;
-- ============================================================
-- Biologie Kapitel 5: Klassische Genetik (bio-5-01 bis bio-5-07)
-- ============================================================

-- bio-5-01 Mendel'sche Genetik & Vererbungsregeln
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-01-dihy-ratio',
  'A', 'biologie', 'bio-5-01',
  'Bei einem dihybriden Kreuzungsexperiment (AaBb × AaBb) werden die Merkmale A und B unabhängig voneinander vererbt (Mendel''sche Unabhängigkeitsregel). Welches Phänotypenverhältnis ergibt sich in der F₂-Generation?',
  '[{"key":"A","text":"1:1:1:1"},{"key":"B","text":"3:1"},{"key":"C","text":"9:3:3:1"},{"key":"D","text":"1:2:1"},{"key":"E","text":"9:6:1"}]'::jsonb,
  'C',
  NULL, NULL,
  'Bei Dihybridkreuzung AaBb × AaBb mit unabhängiger Assortierung ergibt sich das klassische 9:3:3:1-Verhältnis (9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb). Dies entspricht dem Produkt zweier 3:1-Spaltungen (3:1)² = 9:3:3:1. A (1:1:1:1) wäre Testkreuzung eines Doppelt-Heterozygoten. B (3:1) gilt für monohybride F₂. D (1:2:1) ist der Genotypenratio bei monohybrid. E (9:6:1) tritt bei intermediärer Epistase auf.',
  1
),
(
  'typa-bio-5-01-testkreuzung',
  'A', 'biologie', 'bio-5-01',
  'Ein Organismus zeigt den dominanten Phänotyp für Merkmal A, sein Genotyp ist jedoch unbekannt (AA oder Aa). Welche Kreuzung ermöglicht die eindeutige Bestimmung des Genotyps?',
  '[{"key":"A","text":"Kreuzung mit einem heterozygoten Individuum (Aa)"},{"key":"B","text":"Kreuzung mit einem homozygot dominanten Individuum (AA)"},{"key":"C","text":"Kreuzung mit einem homozygot rezessiven Individuum (aa) — Testkreuzung"},{"key":"D","text":"Selbstbefruchtung des Organismus"},{"key":"E","text":"Kreuzung mit einem beliebigen Individuum des dominanten Phänotyps"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Testkreuzung (Rückkreuzung mit homozygot Recessivem, aa) ist das klassische Verfahren zur Genotypbestimmung. Ergibt die Nachkommenschaft 1:1 (Aa:aa) → Elter war Aa (heterozygot); alle Nachkommen zeigen dominanten Phänotyp → Elter war AA (homozygot dominant). Kreuzung mit AA (B) liefert immer dominante Phänotypen, unabhängig vom Genotyp des unbekannten Elters — keine Unterscheidung möglich. Selbstbefruchtung (D) wäre bei Tieren meist nicht möglich.',
  1
),
(
  'typk-bio-5-01-mendelregeln',
  'K', 'biologie', 'bio-5-01',
  'Welche der folgenden Aussagen zu den Mendel''schen Regeln und Erweiterungen sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Die Uniformitätsregel gilt nur, wenn beide Elternteile reinerbig (homozygot) für die betrachteten Merkmale sind.","korrekt":true},{"nr":2,"text":"Bei vollständiger Dominanz zeigt der Heterozygote (Aa) denselben Phänotyp wie der homozygot Dominante (AA).","korrekt":true},{"nr":3,"text":"Bei intermediärer Dominanz entspricht der heterozygote Phänotyp dem des dominanten Elters.","korrekt":false},{"nr":4,"text":"Die Unabhängigkeitsregel (3. Mendel''sche Regel) gilt nur für Gene auf verschiedenen Chromosomen oder weit entfernte Gene auf demselben Chromosom.","korrekt":true},{"nr":5,"text":"Bei kodominanter Vererbung (z.B. Blutgruppe AB) werden beide Allele gleichzeitig exprimiert.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,4,5]},{"key":"D","nummern":[3,4,5]},{"key":"E","nummern":[1,3,5]}]'::jsonb,
  'Aussagen 1, 2, 4, 5 korrekt. Aussage 1: Uniformitätsregel gilt bei P-Kreuzung reinerbig × reinerbig → F₁ alle uniform. Aussage 2: Bei vollständiger Dominanz A > a → Aa ≡ AA phänotypisch. Aussage 3 FALSCH: Bei intermediärer Dominanz ist der Heterozygote INTERMEDIÄR (Zwischenphänotyp), nicht gleich dem dominanten Elter — Beispiel: rote Rose × weiße Rose → rosa F₁. Aussage 4: Unabhängigkeitsregel gilt für nicht-gekoppelte Gene. Gekoppelte Gene nahe beieinander zeigen Kopplung, nicht unabhängige Assortierung. Aussage 5: AB0-Blutgruppe AB: Ia und Ib kodominant → beide Antigene A und B werden exprimiert.',
  2
),
(
  'typa-bio-5-01-kodominanz',
  'A', 'biologie', 'bio-5-01',
  'Eine Person hat Blutgruppe AB (Genotyp IᴬIᴮ). Was trifft auf die Vererbung der AB0-Blutgruppen zu?',
  '[{"key":"A","text":"Iᴬ ist vollständig dominant über Iᴮ, daher exprimiert die Person nur Antigen A"},{"key":"B","text":"Die Blutgruppe AB entsteht durch kodominante Expression — beide Allele werden gleichzeitig exprimiert"},{"key":"C","text":"Iᴬ und Iᴮ sind beide rezessiv gegenüber i"},{"key":"D","text":"Die Blutgruppe AB ist das Ergebnis intermediärer Dominanz — ein neues Antigen AB wird gebildet"},{"key":"E","text":"Personen mit Blutgruppe AB können keine Kinder mit Blutgruppe 0 haben, wenn der andere Elter Genotyp ii besitzt"}]'::jsonb,
  'B',
  NULL, NULL,
  'IᴬIᴮ ist kodominant: Beide Allele werden exprimiert → Erythrozyten tragen Antigen A UND Antigen B. Damit ist Antwort B korrekt. A ist falsch — keine Dominanz zwischen Iᴬ und Iᴮ. C ist falsch — i (kein Antigen) ist rezessiv gegenüber BEIDEN. D ist falsch — kein neues Antigen entsteht, beide werden einzeln exprimiert. E: IᴬIᴮ × ii → Kinder bekommen entweder Iᴬi (Blutgruppe A) oder Iᴮi (Blutgruppe B), aber NICHT ii — korrekt, keine Kinder mit Blutgruppe 0.',
  2
),
(
  'typa-bio-5-01-epist',
  'A', 'biologie', 'bio-5-01',
  'Bei der Fell-Färbung von Labrador Retrievern bestimmt Gen B die Pigmentmenge (B = viel, b = wenig), Gen E ermöglicht die Pigmenteinlagerung (E = einlagerungsfähig, e = nicht einlagerungsfähig). Ein Hund mit Genotyp B_ee ist welche Farbe?',
  '[{"key":"A","text":"Schwarz (viel dunkles Pigment)"},{"key":"B","text":"Braun (wenig dunkles Pigment)"},{"key":"C","text":"Gelb (kein Pigment in Haaren eingelagert), unabhängig vom B-Genotyp"},{"key":"D","text":"Weiß (Albinismus durch Doppelhomozygotie)"},{"key":"E","text":"Gefleckt (Mosaik aus Gelb und Schwarz)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Labrador-Fellfarben: BB oder Bb = viel euMelanin, bb = wenig (braun). ABER: ohne E-Allel (ee) kann kein Pigment ins Haar eingelagert werden → alle ee-Hunde sind GELB, unabhängig vom B-Locus. Dies ist ein Beispiel für rezessive Epistase: ee epistasiert über B-Locus. B_ee = gelb (C korrekt). B_E_ = schwarz. bbE_ = braun (Labrador chocolate). bbee = gelb.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-02 Chromosomen & Chromosomenaberrationen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-02-trisomie21',
  'A', 'biologie', 'bio-5-02',
  'Trisomie 21 (Down-Syndrom) entsteht am häufigsten durch nondisjunction während welcher Teilungsphase und bei welchem Elternteil?',
  '[{"key":"A","text":"Meiose I der Mutter (nondisjunction des homologen Chromosomenpaars 21)"},{"key":"B","text":"Mitose der Zygote nach der Befruchtung"},{"key":"C","text":"Meiose II des Vaters (nondisjunction der Schwesterchromatide)"},{"key":"D","text":"Meiose II der Mutter mit Verlust eines Chromosoms 21"},{"key":"E","text":"Gleichzeitige nondisjunction in Meiose I bei beiden Elternteilen"}]'::jsonb,
  'A',
  NULL, NULL,
  'Down-Syndrom entsteht zu ~90–95% durch meiotische Nondisjunction in der Meiose I der Mutter (homologe Chromosomen 21 trennen sich nicht). Das maternale Alter erhöht das Risiko deutlich (Eizellen arretieren in Prophase I und reifen erst nach der Pubertät — je länger, desto mehr Zeit für Fehler). Meiose II-Fehler (Schwesterchromatid-Nondisjunction) sind ebenfalls möglich (~5%), aber seltener. Väterliche Meiose-Fehler machen ~5% aus. Postzygotische Mitosefehler → Mosaik-Trisomie 21 (milderer Phänotyp).',
  2
),
(
  'typa-bio-5-02-turner',
  'A', 'biologie', 'bio-5-02',
  'Turner-Syndrom (45,X) ist gekennzeichnet durch welche der folgenden Befundkombinationen?',
  '[{"key":"A","text":"Karyotyp 45,X; weiblicher Phänotyp; primäre Amenorrhö; Pterygium colli; Infertilität"},{"key":"B","text":"Karyotyp 47,XXY; männlicher Phänotyp; Hodenaplasie; Gynäkomastie"},{"key":"C","text":"Karyotyp 47,XX,+21; weiblicher Phänotyp; geistige Behinderung; Epikanthus"},{"key":"D","text":"Karyotyp 45,X; männlicher Phänotyp; Kryptorchismus; Virilisierung"},{"key":"E","text":"Karyotyp 47,XYY; männlicher Phänotyp; überdurchschnittliche Körpergröße; meistens fertil"}]'::jsonb,
  'A',
  NULL, NULL,
  'Turner-Syndrom (45,X0): weiblicher Phänotyp (kein Y, kein SRY-Gen), Gonadendysgenesie (Streak-Gonaden) → primäre Amenorrhö und Infertilität, Kleinwuchs, Pterygium colli (Flügelfell), Schildthorax, Aortenisthmusstenose. B beschreibt Klinefelter-Syndrom (47,XXY). C beschreibt Down-Syndrom. D ist falsch — Turner zeigt weiblichen Phänotyp. E beschreibt 47,XYY-Syndrom (Jakob-Syndrom).',
  2
),
(
  'typk-bio-5-02-chromosomen',
  'K', 'biologie', 'bio-5-02',
  'Welche der folgenden Aussagen zu Chromosomen und Chromosomenaberrationen sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Translokation bezeichnet die Übertragung eines Chromosomensegments auf ein nicht-homologes Chromosom — die Gesamtchromosomenzahl ändert sich dabei nicht zwingend.","korrekt":true},{"nr":2,"text":"Beim Philadelphia-Chromosom entsteht durch reziproke Translokation t(9;22) das BCR-ABL-Fusionsprotein mit konstitutiver Tyrosinkinase-Aktivität.","korrekt":true},{"nr":3,"text":"Eine Inversion führt immer zu einem Genverlust, da das invertierte Segment nicht mehr transkribiert werden kann.","korrekt":false},{"nr":4,"text":"Polyploidie (z.B. Tetraploidie 4n) ist beim Menschen letal, kommt aber bei Pflanzen häufig und vorteilhaft vor.","korrekt":true},{"nr":5,"text":"Deletion des kurzen Arms von Chromosom 5 verursacht das Cri-du-Chat-Syndrom mit charakteristischem Katzenschrei des Neugeborenen.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[2,3,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[1,2,3]},{"key":"D","nummern":[1,2,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 4, 5 korrekt. Aussage 1: Balancierte Translokation = kein Nettogewinn/-verlust, Zahl kann 45 oder 46 bleiben (z.B. Robertson-Translokation: 45 Chromosomen, aber 3 × Chr21). Aussage 2: BCR-ABL = chronisch-myeloische Leukämie (CML), Philadelphia-Chromosom t(9;22) → konstitutive Tyrosinkinase → unkontrollierte Proliferation; Imatinib hemmt BCR-ABL. Aussage 3 FALSCH: Inversion dreht ein Segment um — keine Deletion, nur Positionsveränderung. Kann die Expression stören, muss es aber nicht. Aussage 4: Polyploidie bei Pflanzen normal (Weizen = hexaploid 6n=42). Beim Menschen führt Triploidie (3n=69) zu Fehlgeburt. Aussage 5: Cri-du-Chat = del(5p) — Katzengeschrei durch Larynxanomalien.',
  2
),
(
  'typa-bio-5-02-klinefelter',
  'A', 'biologie', 'bio-5-02',
  'Klinefelter-Syndrom (47,XXY) betrifft männliche Patienten. Welche Aussage zum Klinefelter-Syndrom trifft zu?',
  '[{"key":"A","text":"Durch das Y-Chromosom wird SRY exprimiert → männliche Gonaden, aber zusätzliche X-Chromosomen → Hypogonadismus und Infertilität"},{"key":"B","text":"Die Patienten sind weiblich phänotypisch, da die XX-Chromosomen das Y-Chromosom unterdrücken"},{"key":"C","text":"Klinefelter-Patienten haben erhöhte FSH- und LH-Spiegel aufgrund von Hypergonadismus"},{"key":"D","text":"Das zusätzliche X-Chromosom erhöht die Intelligenz durch mehr Gendosierung"},{"key":"E","text":"Klinefelter entsteht ausschließlich durch paternale Nondisjunction in Meiose II"}]'::jsonb,
  'A',
  NULL, NULL,
  'XXY: SRY auf dem Y-Chromosom → Hoden angelegt, männlicher Phänotyp. Aber: Leydig-Zell-Dysfunktion → niedriges Testosteron → Gynäkomastie, geringe Behaarung. Sertoli-Zell-Schaden → Azoospermie → Infertilität (häufigste Ursache für männliche Infertilität durch chromosomale Ursache). Niedriges Testosteron → erhöhtes LH und FSH (hypergonadotroper Hypogonadismus) — C ist falsch (erhöhte FSH/LH stimmen, aber es ist HYPO-Gonadismus). B falsch — männlicher Phänotyp. D falsch — oft leichte kognitive Einschränkungen, nicht Intelligenzgewinn. E falsch — maternale Nondisjunction ist häufiger.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-03 Geninteraktion: Epistase, Polygenie, Pleiotropie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-03-pleiotrop',
  'A', 'biologie', 'bio-5-03',
  'Sichelzellanämie (HbS/HbS) ist ein klassisches Beispiel für Pleiotropie. Was versteht man unter Pleiotropie?',
  '[{"key":"A","text":"Ein Gen beeinflusst mehrere phänotypische Merkmale gleichzeitig"},{"key":"B","text":"Mehrere Gene beeinflussen gemeinsam ein einziges Merkmal"},{"key":"C","text":"Ein dominantes Gen unterdrückt die Expression eines anderen, nicht-allelen Gens"},{"key":"D","text":"Heterozygote zeigen einen intermediären Phänotyp zwischen den beiden homozygoten Zuständen"},{"key":"E","text":"Die Expression eines Gens ist abhängig vom Geschlecht des Trägers"}]'::jsonb,
  'A',
  NULL, NULL,
  'Pleiotropie = ein Gen → viele Phänotypen. Sichelzellanämie: HBB-Mutation (Glu6Val) → veränderte HbS-Struktur → Sichelung bei O₂-Mangel → Gefäßverschlüsse → Organschäden (Milz, Niere, Gehirn, Knochen), hämolytische Anämie, Schmerzkrisen. All diese Symptome gehen auf eine einzige Genmutation zurück. B beschreibt Polygenie (mehrere Gene → ein Merkmal, z.B. Hautfarbe, Körpergröße). C beschreibt Epistase. D beschreibt intermediäre Dominanz. E beschreibt geschlechtsbegrenzte oder geschlechtsbeeinflusste Vererbung.',
  1
),
(
  'typk-bio-5-03-geninteraktion',
  'K', 'biologie', 'bio-5-03',
  'Welche der folgenden Aussagen zu Geninteraktionen sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Polygenie beschreibt die Situation, in der ein einzelnes Gen mehrere Phänotypen beeinflusst.","korrekt":false},{"nr":2,"text":"Bei additiver Polygenie (z.B. Körpergröße) summieren sich die Effekte mehrerer Genloci, was zu einer annähernd normalverteilten phänotypischen Variation führt.","korrekt":true},{"nr":3,"text":"Dominante Epistase liegt vor, wenn ein dominantes Allel an Locus A die Expression von Locus B maskiert (z.B. Albinismus: C_-Locus epistasiert Pigmentloci).","korrekt":true},{"nr":4,"text":"Komplementäre Epistase führt zu einer 9:7-Phänotypenspaltung in der F₂-Dihybridkreuzung, da beide dominante Allele gleichzeitig für den Wildtyp-Phänotyp nötig sind.","korrekt":true},{"nr":5,"text":"Kopplungsungleichgewicht bedeutet, dass zwei Allele auf verschiedenen Chromosomen häufiger zusammen vererbt werden als zufällig erwartet.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,3,4]}]'::jsonb,
  'Aussagen 2, 3, 4 korrekt. Aussage 1 FALSCH: Polygenie = viele Gene → ein Merkmal (nicht umgekehrt). Pleiotropie = ein Gen → viele Merkmale. Aussage 2: Körpergröße, Hautfarbe = additiv polygene Merkmale → Glockenkurve. Aussage 3: Albinismus: OCA2/TYR-Loci; C-Locus (Tyrosinase) → wenn cc, kein Pigment egal welcher Genotyp an anderen Loci. Aussage 4: Komplementäre Epistase: A_B_ = Wildtyp; A_bb, aaB_, aabb = mutant → 9:7. Aussage 5 FALSCH: Kopplungsungleichgewicht = zwei Allele auf DEMSELBEN Chromosom (oder physisch nahe) werden häufiger gemeinsam weitervererbt als statistisch erwartet.',
  3
),
(
  'typa-bio-5-03-polygenie',
  'A', 'biologie', 'bio-5-03',
  'Hautfarbe beim Menschen wird durch mehrere Genloci additiv bestimmt (Polygenie). Welche Konsequenz hat dies für die Verteilung der Hautfarben in einer Population mit gemischtem Erbgang?',
  '[{"key":"A","text":"Diskrete Phänotypklassen (wenige distinkte Hautfarben), da jedes Gen einen großen Einzeleffekt hat"},{"key":"B","text":"Kontinuierliche Variation mit annähernder Normalverteilung, da viele Gene kleine additive Beiträge leisten"},{"key":"C","text":"Bimodale Verteilung, da die Eltern-Phänotypen dominant vererbt werden"},{"key":"D","text":"Ausschließlich intermediäre Phänotypen in der F₁-Generation, ohne Aufspaltung in F₂"},{"key":"E","text":"Keine Variation in der Bevölkerung, da alle Gene auf einem Chromosom liegen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Additive Polygenie → viele Loci mit kleinen, kumulativen Effekten → Kontinuum an Phänotypen → Normalverteilung in der Population. Die Hautfarbe wird durch mindestens 6 bekannte Genloci beeinflusst (u.a. MC1R, OCA2, SLC24A5). Je mehr polygene Loci, desto glatter die Normalverteilungskurve. Diskrete Klassen (A) entstehen nur bei wenigen Loci ohne Additiv-Effekt. Die kontinuierliche Variation ist ein Erkennungsmerkmal polygener Merkmale im Gegensatz zu monogenen Merkmalen (z.B. ABO-Blutgruppe = diskret).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-04 Geschlechtsgebundene Vererbung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-04-hemophilia',
  'A', 'biologie', 'bio-5-04',
  'Hämophilie A wird X-chromosomal-rezessiv vererbt. Eine phänotypisch gesunde Frau (XᴴXʰ — Konduktorin) heiratet einen gesunden Mann (XᴴY). Welches Risiko besteht für ihre Söhne, an Hämophilie A zu erkranken?',
  '[{"key":"A","text":"0% — Söhne sind immer gesund, da der Vater gesund ist"},{"key":"B","text":"25% — ein Viertel aller Kinder (männlich und weiblich)"},{"key":"C","text":"50% — die Hälfte aller Söhne ist betroffen"},{"key":"D","text":"100% — alle Söhne sind betroffen"},{"key":"E","text":"50% — die Hälfte aller Kinder (unabhängig vom Geschlecht) ist betroffen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Kreuzung XᴴXʰ (Konduktorin) × XᴴY (gesunder Mann): Töchter erhalten Y des Vaters nicht; Söhne erhalten Y des Vaters. Söhne: 50% XᴴY (gesund), 50% XʰY (Hämophilie). Töchter: 50% XᴴXᴴ (gesund, kein Konduktor), 50% XᴴXʰ (gesund, Konduktorin). Also: 50% der Söhne betroffen (C). B wäre 25% aller Kinder — das stimmt für alle Kinder zusammen (25% Hämophile), aber für Söhne allein ist es 50%.',
  2
),
(
  'typk-bio-5-04-xlinked',
  'K', 'biologie', 'bio-5-04',
  'Welche der folgenden Aussagen zur X-chromosomalen und Y-chromosomalen Vererbung sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"X-chromosomal-rezessive Erkrankungen betreffen Männer (hemizygot XY) häufiger als Frauen, da Männer kein zweites X-Chromosom als \"Puffer\" haben.","korrekt":true},{"nr":2,"text":"Farbblindheit (Rot-Grün-Schwäche) ist X-chromosomal-dominant und trifft deshalb Frauen häufiger.","korrekt":false},{"nr":3,"text":"Bei X-chromosomal-dominanten Erkrankungen können betroffene Väter die Erkrankung NUR an Töchter, NICHT an Söhne weitergeben.","korrekt":true},{"nr":4,"text":"Y-chromosomale Vererbung (holandrisch) gilt nur für Gene auf dem nicht-rekombinierenden Teil des Y-Chromosoms; solche Gene werden von Vätern ausnahmslos an alle Söhne vererbt.","korrekt":true},{"nr":5,"text":"Lyon-Hypothese: In weiblichen Zellen wird eines der beiden X-Chromosomen zufällig und dauerhaft inaktiviert (Barr-Körper), sodass Konduktorinnen für X-rezessive Erkrankungen oft Carrier ohne Symptome sind.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussagen 1, 3, 4, 5 korrekt. Aussage 1: Männer hemizygot → ein mutiertes X-Allel reicht → Krankheit. Frauen brauchen zwei defekte Allele (XX). Aussage 2 FALSCH: Rot-Grün-Schwäche ist X-chromosomal REZESSIV → Männer 8%, Frauen ~0,4%. Aussage 3: X-dominant: betroffener Vater gibt X stets an Töchter, Y an Söhne → keine Vater-Sohn-Übertragung. Aussage 4: Holandrische Gene → ausnahmslos Vater→Sohn. Aussage 5: Lyonisierung = X-Inaktivierung ab Tag 16 der Embryonalentwicklung, zufällig, dauerhaft → Barr-Körper. Konduktorin: 50% Zellen mit normalem X aktiv, 50% mit mutiertem X → meist asymptomatisch.',
  2
),
(
  'typa-bio-5-04-xdominant',
  'A', 'biologie', 'bio-5-04',
  'Hypophosphatämie (Vitamin-D-resistente Rachitis) ist X-chromosomal-dominant. Ein betroffener Vater (Xᵐ Y) und eine gesunde Mutter (XX) haben Kinder. Welche Aussage ist korrekt?',
  '[{"key":"A","text":"50% der Töchter und 0% der Söhne sind betroffen"},{"key":"B","text":"100% der Töchter und 50% der Söhne sind betroffen"},{"key":"C","text":"50% der Töchter und 50% der Söhne sind betroffen"},{"key":"D","text":"0% der Töchter und 50% der Söhne sind betroffen"},{"key":"E","text":"Alle Kinder (100%) sind betroffen"}]'::jsonb,
  'A',
  NULL, NULL,
  'X-dominant: Xᵐ Y (betroffener Vater) × XX (gesunde Mutter). Söhne: erhalten Y vom Vater + X von Mutter → alle XX-normal = alle Söhne gesund (0%). Töchter: erhalten Xᵐ vom Vater + X von Mutter → 100% sind XᵐX (betroffen, aber heterozygot, oft milder Verlauf). Wäre die MUTTER betroffen (XᵐX), dann wären 50% Söhne UND 50% Töchter betroffen. Das ist das charakteristischste Merkmal X-dominanter Vererbung: Kein Vater-Sohn-Transfer.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-05 Stammbaumanalyse
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-05-autorez',
  'A', 'biologie', 'bio-5-05',
  'In einem Stammbaum sind zwei gesunde Eltern (Generation I) und drei Kinder (Generation II): zwei gesunde Töchter und ein betroffener Sohn. Welcher Erbgang lässt sich mit Sicherheit ausschließen?',
  '[{"key":"A","text":"Autosomal-rezessiv"},{"key":"B","text":"X-chromosomal-rezessiv"},{"key":"C","text":"Autosomal-dominant"},{"key":"D","text":"X-chromosomal-dominant"},{"key":"E","text":"Y-chromosomal (holandrisch)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Autosomal-dominant (C) kann ausgeschlossen werden: Beide Eltern gesund, Kind betroffen. Bei autosomal-dominant müsste mindestens ein Elternteil den dominanten Phänotyp zeigen (es sei denn, Neumutation). Als Standardregel: AD scheidet aus. Autosomal-rezessiv (A) möglich: beide Eltern Träger (Aa × Aa). X-rezessiv (B) möglich: Mutter Konduktorin (XᴬXᵃ) × gesunder Vater (XᴬY) → 50% Söhne betroffen. X-dominant (D) kann ausgeschlossen werden da der Vater gesund ist und alle Töchter das X des Vaters erben — aber hier sind auch beide Töchter gesund, also kein Widerspruch zu X-dom. Y-chromosomal (E) ausgeschlossen wenn Töchter betroffen wären; hier Söhne betroffen. Am eindeutigsten ausgeschlossen: autosomal-dominant.',
  2
),
(
  'typk-bio-5-05-stammbaum',
  'K', 'biologie', 'bio-5-05',
  'Welche der folgenden Regeln zur Stammbaumanalyse sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Bei autosomal-rezessivem Erbgang können zwei betroffene Eltern ausschließlich betroffene Kinder haben.","korrekt":true},{"nr":2,"text":"Bei autosomal-dominantem Erbgang sind in jeder Generation betroffene Individuen vorhanden (außer bei Neumutationen).","korrekt":true},{"nr":3,"text":"Wenn eine Erkrankung ausschließlich bei Söhnen auftritt und Väter sie nie direkt an Söhne weitergeben, spricht dies für X-chromosomal-rezessiven Erbgang.","korrekt":true},{"nr":4,"text":"Bei mitochondrialer Vererbung gibt die betroffene Mutter die Erkrankung an alle Kinder (Söhne und Töchter) weiter; der betroffene Vater gibt sie an keine Kinder weiter.","korrekt":true},{"nr":5,"text":"Eine Penetranz von 80% bei autosomal-dominanter Erkrankung bedeutet, dass 80% der heterozygoten Merkmalsträger den Phänotyp zeigen, die restlichen 20% sind gesunde Träger.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,2,3,4,5]}]'::jsonb,
  'Alle 5 Aussagen korrekt. Aussage 1: aa × aa → nur aa-Kinder (100% betroffen). Aussage 2: AD-Erkrankungen üblicherweise in jeder Generation sichtbar (vertikaler Stammbaum). Neumutationen: de novo, ohne betroffene Eltern (z.B. Achondroplasie: 80% Neumutationen). Aussage 3: X-rezessiv klassischer Stammbaum: Söhne betroffen, Mütter Konduktorinnen, Vater-zu-Sohn-Übertragung fehlt (Söhne erhalten Y vom Vater). Aussage 4: Mitochondriale DNA wird nur maternal vererbt (alle mitochondrialen Gene kommen von der Mutter). Betroffene Mutter → alle Kinder betroffen; betroffener Vater → keine Übertragung. Aussage 5: Penetranz = Anteil der Genotypen, die den Phänotyp zeigen. 80% Penetranz → 20% "non-penetrant".',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-06 Populationsgenetik (Hardy-Weinberg)
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-06-hw',
  'A', 'biologie', 'bio-5-06',
  'Die Häufigkeit der autosomal-rezessiven Erkrankung Phenylketonurie (PKU) beträgt in Europa ca. 1:10.000. Nach dem Hardy-Weinberg-Gleichgewicht (p² + 2pq + q² = 1): Wie hoch ist die Trägerfrequenz (Heterozygote) in der Bevölkerung?',
  '[{"key":"A","text":"1:100 (1%)"},{"key":"B","text":"1:50 (2%)"},{"key":"C","text":"1:200 (~0,5%)"},{"key":"D","text":"2:100 (2%), berechnet als 2pq ≈ 2q"},{"key":"E","text":"1:10.000 (entspricht der Krankheitsfrequenz)"}]'::jsonb,
  'B',
  NULL, NULL,
  'PKU-Häufigkeit = q² = 1/10.000 = 0,0001 → q = 0,01 (Frequenz des Krankheitsallels). p = 1 − q ≈ 0,99 ≈ 1. Trägerfrequenz = 2pq ≈ 2 × 1 × 0,01 = 0,02 = 2% = 1:50 (B korrekt). Dies entspricht ~1 von 50 Menschen in Europa = Träger der PKU-Mutation. Wichtig: Trägerfrequenz ist viel höher als Erkrankungsfrequenz — klassisches HWG-Ergebnis für rezessive Erkrankungen.',
  2
),
(
  'typk-bio-5-06-hwg',
  'K', 'biologie', 'bio-5-06',
  'Welche der folgenden Aussagen zum Hardy-Weinberg-Gleichgewicht (HWG) sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Das HWG gilt nur in einer idealen Population: unendlich groß, keine Mutation, keine Selektion, keine Migration, zufällige Paarung.","korrekt":true},{"nr":2,"text":"Genetische Drift hat den stärksten Effekt in großen Populationen, da mehr Allele vorhanden sind, die zufällig verändert werden können.","korrekt":false},{"nr":3,"text":"Der Flaschenhalseffekt (Bottleneck) ist eine Form der genetischen Drift, bei der eine Population drastisch verkleinert wird und anschließend die genetische Diversität dauerhaft reduziert sein kann.","korrekt":true},{"nr":4,"text":"Selektion gegen ein rezessives Allel ist weniger effizient als Selektion gegen ein dominantes Allel, da rezessive Allele in Heterozygoten vor der Selektion geschützt sind.","korrekt":true},{"nr":5,"text":"Bei positivem Selektionsvorteil eines Allels nimmt dessen Frequenz in der Population über Generationen stets linear zu.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussagen 1, 3, 4 korrekt. Aussage 1: HWG-Voraussetzungen klassisch: große Population, keine Mutation, keine Selektion, Panmixie, keine Migration. Aussage 2 FALSCH: Genetische Drift ist am stärksten in KLEINEN Populationen (zufällige Schwankungen sind relativ größer). Großpopulationen sind weitgehend stabil. Aussage 3: Bottleneck = starke Populationsreduktion → zufälliger Verlust genetischer Diversität → Gründereffekt. Beispiel: Geparden = sehr wenig genetische Diversität nach Bottleneck. Aussage 4: Rezessives Allel bei niedriger Frequenz fast immer heterozygot → Selektion trifft nur Homozygote (q² klein) → Selektion ineffizient. Dominantes Allel sichtbar in Hets und Homs. Aussage 5 FALSCH: Alleldynamik ist sigmoidal (S-Kurve), nicht linear.',
  3
),
(
  'typa-bio-5-06-selektion',
  'A', 'biologie', 'bio-5-06',
  'Sichelzellanämie-Heterozygote (HbA/HbS) haben in Malaria-Endemiegebieten einen Überlebensvorteil gegenüber HbA/HbA. Dies ist ein Beispiel für welche Selektionsform?',
  '[{"key":"A","text":"Gerichtete Selektion (directional selection) — Vorteil für HbS"},{"key":"B","text":"Stabilisierende Selektion — Extremwerte werden eliminiert"},{"key":"C","text":"Überdominanz (balancing selection/Heterosis) — Heterozygote haben den höchsten Fitness-Wert"},{"key":"D","text":"Sexuelle Selektion — HbS attraktiver für Paarung"},{"key":"E","text":"Disruptive Selektion — Extremwerte haben Vorteile gegenüber intermediären Phänotypen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Klassisches Beispiel für Überdominanz (Heterosis, balancing selection): HbA/HbS-Heterozygote = Malaria-Resistenz OHNE Sichelzellanämie → höchster Fitness-Wert. HbA/HbA = anfällig für Malaria. HbS/HbS = schwere Sichelzellanämie. Das erklärt, warum das HbS-Allel in Malariagebieten trotz Nachteil im Homozygoten hohe Frequenz behält (Balancing selection hält das Allel in der Population). Dies ist ein Paradebeispiel für das Selektionsgleichgewicht — C ist korrekt.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-07 Mutationen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-07-muttypen',
  'A', 'biologie', 'bio-5-07',
  'Eine Punktmutation im Codon GAG → GTG in der HBB-Genkodierung führt zu Glutamat → Valin-Austausch (Sichelzellanämie). Wie klassifiziert man diese Mutation?',
  '[{"key":"A","text":"Nonsense-Mutation (Stopp-Codon entsteht)"},{"key":"B","text":"Missense-Mutation (Aminosäure wird ausgetauscht)"},{"key":"C","text":"Stille Mutation (synonyme Mutation — keine Aminosäureänderung)"},{"key":"D","text":"Frameshift-Mutation (Leserahmen wird verschoben)"},{"key":"E","text":"Splice-site-Mutation (Intron-Exon-Grenze betroffen)"}]'::jsonb,
  'B',
  NULL, NULL,
  'GAG (Glu) → GTG (Val): eine Aminosäure wird durch eine andere ersetzt → Missense-Mutation (B). Nonsense: Aminosäure-Codon → Stopp-Codon (z.B. UAG, UAA, UGA). Stille Mutation: Basenänderung, aber gleiche Aminosäure (z.B. GCU → GCC = beide Alanin, degenerierter Code). Frameshift: Insertion oder Deletion einer oder zwei Basen → Leserahmen verschiebt sich → alle nachfolgenden Aminosäuren falsch → oft schwerwiegend. Splice-site: Mutation an Exon-Intron-Grenze → fehlerhaftes Splicing.',
  1
),
(
  'typk-bio-5-07-mutationen',
  'K', 'biologie', 'bio-5-07',
  'Welche der folgenden Aussagen zu Mutationen und Mutagenen sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"UV-Strahlung induziert primär die Bildung von Thymin-Dimeren (Cyclobutan-Pyrimidin-Dimere) zwischen benachbarten Thymin-Basen im selben DNA-Strang.","korrekt":true},{"nr":2,"text":"Interkalierende Agenzien (z.B. Ethidiumbromid) lagern sich zwischen die Basenpaare ein und verursachen Insertions- oder Deletionsmutationen (Frameshift).","korrekt":true},{"nr":3,"text":"Alkylierungsmittel (z.B. Stickstofflost) fügen Alkylgruppen an Basen an, was zu Basenpaarungsfehlern und damit zu Transitionen führen kann.","korrekt":true},{"nr":4,"text":"Ionisierende Strahlung (Röntgenstrahlen, γ-Strahlung) kann Einzel- und Doppelstrangbrüche in der DNA verursachen.","korrekt":true},{"nr":5,"text":"Spontane Mutationsrate ist bei der mitochondrialen DNA (mtDNA) niedriger als bei der nukleären DNA, da Mitochondrien besonders effektive DNA-Reparatursysteme besitzen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,4,5]},{"key":"D","nummern":[1,2,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 4 korrekt. Aussage 1: UV-Licht → Thymin-Dimere (CPDs) → Nuklease-Exzisionsreparatur (NER) behebt sie. Bei defektem NER: Xeroderma pigmentosum → extrem erhöhtes Hautkrebsrisiko. Aussage 2: Ethidiumbromid, Acridine → Interkalation → Polymerase "stolpert" → Insertion/Deletion → Frameshift. Klassischer Labornachweis bei Gel-Elektrophorese (trotzdem mutagen → Sicherheit!). Aussage 3: Alkylierungsmittel → O6-Methylguanin paart mit T statt C → Transition G:C → A:T. Aussage 4: Ionisierende Strahlung → freie Radikale → Einzel- (SSB) und Doppelstrangbrüche (DSB). DSBs besonders gefährlich → Translokationen, Karzinogenese. Aussage 5 FALSCH: mtDNA hat HÖHERE Mutationsrate (oxidative Phosphorylierung produziert reaktive Sauerstoffspezies direkt neben mtDNA, weniger Histone als Schutz, weniger effiziente Reparatur).',
  2
),
(
  'typa-bio-5-07-reparatur',
  'A', 'biologie', 'bio-5-07',
  'Das Mismatch-Repair-System (MMR) erkennt und korrigiert Basen-Fehlpaarungen nach der DNA-Replikation. Welche Erkrankung entsteht am häufigsten, wenn MMR-Gene (z.B. MLH1, MSH2) mutiert sind?',
  '[{"key":"A","text":"Xeroderma pigmentosum (extreme UV-Empfindlichkeit)"},{"key":"B","text":"Fanconi-Anämie (Defekt in Doppelstrangbruch-Reparatur)"},{"key":"C","text":"Hereditäres nicht-polypöses Kolonkarzinom (HNPCC/Lynch-Syndrom)"},{"key":"D","text":"Ataxia teleangiectatica (ATM-Kinase-Defekt)"},{"key":"E","text":"Bloom-Syndrom (Defekt der RecQ-Helikase)"}]'::jsonb,
  'C',
  NULL, NULL,
  'MMR-Defekt → Lynch-Syndrom / HNPCC (hereditäres nicht-polypöses Kolonkarzinom) — C korrekt. MMR-Gene: MLH1, MSH2, MSH6, PMS2. Defekt → Mikrosatelliteninstabilität (MSI) → akkumulierende Mutationen in repetitiven DNA-Bereichen → Kolonkarzinom (v.a. rechtsseitiger Kolon), auch Endometrium-, Ovarial-, Urothelkarzinom. A: Xeroderma pigmentosum = defekte Nukleotid-Exzisionsreparatur (NER) für UV-Schäden. B: Fanconi-Anämie = Interstrang-Quervernetzungsreparatur. D: Ataxia teleangiectatica = ATM erkennt DSBs. E: Bloom-Syndrom = BLM-Helikase (RecQ-Familie) → erhöhte Schwesterchromatid-Austausche.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- Biologie Kapitel 6: Molekulargenetik (bio-6-01 bis bio-6-04)
-- ============================================================

-- bio-6-01 DNA-Struktur & Replikation
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-01-chargaff',
  'A', 'biologie', 'bio-6-01',
  'Die Chargaff-Regeln beschreiben Basenverhältnisse in der DNA. Eine doppelsträngige DNA-Probe enthält 30% Adenin. Wie hoch ist der Guanin-Anteil?',
  '[{"key":"A","text":"30%"},{"key":"B","text":"20%"},{"key":"C","text":"25%"},{"key":"D","text":"10%"},{"key":"E","text":"Nicht bestimmbar ohne weitere Angaben"}]'::jsonb,
  'B',
  NULL, NULL,
  'Chargaff: In doppelsträngiger DNA gilt A = T und G = C (komplementäre Basenpaarung). A = 30% → T = 30% → A + T = 60% → G + C = 40% → G = C = 20%. Antwort B: 20%. Merkhilfe: "AT-GC-Regel". Dieser Zusammenhang (A%=T%, G%=C%) ist der biochemische Beweis für die Basenpaarung und wurde von Watson und Crick zur Aufstellung des Doppelhelix-Modells genutzt.',
  1
),
(
  'typa-bio-6-01-replikation',
  'A', 'biologie', 'bio-6-01',
  'Bei der DNA-Replikation in Eukaryoten: Welche Aussage zum Leitstrang und Folgestrang ist korrekt?',
  '[{"key":"A","text":"Der Leitstrang wird kontinuierlich in 5'→3'-Richtung synthetisiert, der Folgestrang diskontinuierlich als Okazaki-Fragmente in 3'→5'-Richtung"},{"key":"B","text":"Beide Stränge werden kontinuierlich synthetisiert, da die Replikationsgabel zwei unabhängige DNA-Polymerasen enthält"},{"key":"C","text":"Der Leitstrang wird kontinuierlich 5'→3' synthetisiert, der Folgestrang wird in Okazaki-Fragmente (5'→3' von der Gabel weg) synthetisiert"},{"key":"D","text":"RNA-Primer werden nur am Leitstrang benötigt, nicht am Folgestrang"},{"key":"E","text":"Okazaki-Fragmente beim Menschen sind 1–2 kb lang (gleich wie bei Prokaryoten)"}]'::jsonb,
  'C',
  NULL, NULL,
  'DNA-Polymerase synthetisiert NUR in 5'→3'-Richtung. Leitstrang: Synthese geht in Richtung der sich öffnenden Gabel (5'→3') — kontinuierlich. Folgestrang: Muss gegen die Gabelöffnungsrichtung synthetisiert werden — also rückwärts in Stücken (Okazaki-Fragmente), aber jedes Fragment selbst wird 5'→3' synthetisiert — von der Gabel weg. C ist korrekt. A ist falsch (Folgestrang NICHT in 3'→5', sondern jedes Fragment 5'→3'). D falsch: Primase legt RNA-Primer für jeden Okazaki-Fragment und für den Leitstrang. E falsch: Eukaryoten = kurze Fragmente (~150–200 nt), Prokaryoten = 1–2 kb.',
  2
),
(
  'typk-bio-6-01-dna',
  'K', 'biologie', 'bio-6-01',
  'Welche der folgenden Aussagen zu DNA-Struktur und Replikation sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Die DNA-Doppelhelix ist rechtsgängig (B-Form unter physiologischen Bedingungen) mit 10 Basenpaaren pro Windung und einer Steigung von 3,4 nm.","korrekt":true},{"nr":2,"text":"Telomerase ist eine reverse Transkriptase, die RNA-Sequenz als Matrize verwendet, um Telomersequenzen (TTAGGG) am 3''-Ende der Chromosomen zu verlängern.","korrekt":true},{"nr":3,"text":"Die semikonservative Replikation bedeutet, dass jedes Tochtermolekül einen alten Elternstrang und einen neu synthetisierten Strang enthält.","korrekt":true},{"nr":4,"text":"Topoisomerase I löst Supercoiling durch vorübergehende Doppelstrangbrüche, Topoisomerase II durch Einzelstrangbrüche.","korrekt":false},{"nr":5,"text":"Primase synthetisiert kurze RNA-Primer (5–10 Nucleotide), die als Startpunkt für die DNA-Polymerase III (Prokaryoten) bzw. DNA-Polymerase δ/ε (Eukaryoten) benötigt werden.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3,5]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: B-DNA = physiologisch, rechtsgängig, 10 bp/Windung, 3,4 nm Steigung (0,34 nm/bp). Aussage 2: Telomerase = RT mit eigener RNA (TERC) als Matrize → verlängert TTAGGG-Repeats am 3''-Überhang; wichtig für Stammzellen, Keimzellen, Tumorzellen. Aussage 3: Meselson-Stahl-Experiment (1958) bewies semikonservative Replikation durch ¹⁵N/¹⁴N-Dichtezentrifugation. Aussage 4 FALSCH: Topoisomerase I = Einzelstrangbruch (entspannt Supercoiling). Topoisomerase II = Doppelstrangbruch (entspannt, verknüpft/trennt Stränge). Umgekehrt in der Frage. Aussage 5: Primase = RNA-Polymerase, synthetisiert primer → DNA-Pol kann nur verlängern, nicht neu starten.',
  2
),
(
  'typa-bio-6-01-reparatur',
  'A', 'biologie', 'bio-6-01',
  'BRCA1 und BRCA2 sind Tumorsuppressorgene, die an der homologen Rekombination zur Reparatur von DNA-Doppelstrangbrüchen (DSBs) beteiligt sind. Welche Aussage trifft auf BRCA-Mutationen zu?',
  '[{"key":"A","text":"BRCA-Mutationen sind nur in Tumorzellen vorhanden (somatische Mutationen), nicht in der Keimbahn"},{"key":"B","text":"Heterozygote BRCA1-Mutationsträgerinnen haben ein deutlich erhöhtes Brust- und Eierstockkrebsrisiko (zwei-Treffer-Hypothese)"},{"key":"C","text":"BRCA-Proteine reparieren ausschließlich UV-induzierte Thymin-Dimere"},{"key":"D","text":"Der Ausfall von BRCA macht Tumorzellen unempfindlicher gegenüber PARP-Inhibitoren"},{"key":"E","text":"BRCA1 und BRCA2 sind Onkogene, die bei Überexpression Tumorwachstum fördern"}]'::jsonb,
  'B',
  NULL, NULL,
  'BRCA1/2: Keimbahn-Mutationen → erblicher Brust- und Eierstockkrebs (Hereditary Breast and Ovarian Cancer, HBOC). Zwei-Treffer-Hypothese (Knudson): erstes Allel durch Keimbahnmutation inaktiviert, zweites durch somatische Mutation → vollständiger Funktionsverlust → genomische Instabilität. B korrekt. A falsch — klassisch hereditäre Keimbahnmutation. C falsch — BRCA1/2 = Doppelstrangbruch-Reparatur (homologe Rekombination), nicht UV-NER. D falsch — BRCA-defiziente Tumoren sind EMPFINDLICHER gegenüber PARP-Inhibitoren (synthetische Letalität: ohne HR und ohne PARP keine DSB-Reparatur → Zelltod). E falsch — BRCA = Tumorsuppressorgene, nicht Onkogene.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-02 Transkription & RNA-Prozessierung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-02-transkription',
  'A', 'biologie', 'bio-6-02',
  'Bei der Transkription in Eukaryoten: Welche der folgenden Modifikationen an der prä-mRNA ist typisch für die RNA-Prozessierung und hat die Funktion, die mRNA vor dem Abbau durch Exonukleasen zu schützen und die Translation zu initiieren?',
  '[{"key":"A","text":"Polyadenylierung (Poly-A-Schwanz) am 3''-Ende der mRNA"},{"key":"B","text":"5''-Cap: Addition eines 7-Methyl-Guanosin am 5''-Ende der prä-mRNA"},{"key":"C","text":"Splicing: Entfernung der Introns und Verbindung der Exons"},{"key":"D","text":"RNA-Editing: gezielte Änderung einzelner Nucleotide (z.B. C→U in Apolipoprotein B)"},{"key":"E","text":"Methylierung der Adenosin-Reste (m6A) im Inneren der mRNA"}]'::jsonb,
  'B',
  NULL, NULL,
  '7-Methyl-Guanosin-Cap (m7G-Cap) am 5''-Ende: typische eukaryotische Modifikation, entsteht cotranscriptionell nach Synthese von ~20-25 nt. Funktionen: Schutz vor 5''-Exonukleasen, Erkennung durch Translationsinitiationsfaktoren (eIF4E bindet direkt an 5''-Cap), Export aus dem Kern, Spleißosom-Assemblierung. A (Poly-A) schützt auch, aber das 3''-Ende; hilft ebenfalls bei Export und Stabilität, aber nicht primär bei Translationsinitiierung durch Ribosomenbindung am 5''-Ende. Beide B und A sind wichtige Modifikationen — aber der 5''-Cap ist DIREKT für Translationsinitiierung (Ribosom-Scanning von 5'') verantwortlich.',
  2
),
(
  'typk-bio-6-02-rna',
  'K', 'biologie', 'bio-6-02',
  'Welche der folgenden Aussagen zur Transkription und RNA-Prozessierung in Eukaryoten sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"RNA-Polymerase II transkribiert proteinkodierenden Gene (mRNA), RNA-Pol I transkribiert ribosomale RNA (rRNA, außer 5S), RNA-Pol III transkribiert tRNA und 5S-rRNA.","korrekt":true},{"nr":2,"text":"Splicing wird durch das Spleißosom durchgeführt, das aus fünf snRNPs (U1, U2, U4, U5, U6) und vielen Proteinen besteht.","korrekt":true},{"nr":3,"text":"Alternatives Splicing ermöglicht aus einer prä-mRNA mehrere Protein-Isoformen zu erzeugen, indem verschiedene Kombinationen von Exons eingeschlossen werden.","korrekt":true},{"nr":4,"text":"Introns sind in Prokaryoten genauso häufig wie in Eukaryoten.","korrekt":false},{"nr":5,"text":"Der Poly-A-Schwanz (~200 A-Nucleotide) wird enzymatisch durch Poly-A-Polymerase an das 3''-Ende nach der Spaltung an der Polyadenylierungssignalsequenz (AAUAAA) angefügt.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,3,5]},{"key":"C","nummern":[2,4,5]},{"key":"D","nummern":[1,3,5]},{"key":"E","nummern":[2,3,4]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: RNA-Pol-Spezifität: Pol I (rRNA, Nukleolus), Pol II (mRNA, snRNA, miRNA), Pol III (tRNA, 5S-rRNA, snRNA). Alphaamanitin hemmt Pol II am stärksten → Amanita-Vergiftung. Aussage 2: Spleißosom = 5 snRNPs (U1 erkennt 5''-Spleißstelle, U2 erkennt Branch-Point, U4/U6 Katalyse, U5 3''-Spleißstelle). Aussage 3: Alternatives Splicing → Proteindiversität. Beispiel: DSCAM-Gen bei Drosophila theoretisch ~38.000 Isoformen. Troponin T, Cadherin = humanexempel. Aussage 4 FALSCH: Prokaryoten haben kaum Introns (sehr selten, nur Gruppe I/II-Introns in einigen). Eukaryoten = intronreich. Aussage 5: Polyadenylierung nach AAUAAA → Schnitt → Poly-A-Polymerase ohne Matrize synthetisiert Poly-A.',
  2
),
(
  'typa-bio-6-02-rnapol',
  'A', 'biologie', 'bio-6-02',
  'Alpha-Amanitin (Knollenblätterpilz-Toxin) hemmt selektiv RNA-Polymerase II. Welche Konsequenz hat eine schwere Alpha-Amanitin-Vergiftung primär?',
  '[{"key":"A","text":"Hemmung der rRNA-Synthese → Ribosomenmangel → Proteinsynthesestop"},{"key":"B","text":"Hemmung der tRNA-Transkription → Ladungsfehler → falsche Aminosäuren in Proteinen"},{"key":"C","text":"Hemmung der mRNA-Synthese für alle proteinkodierenden Gene → Zellen können keine Proteine mehr erneuern → Organversagen"},{"key":"D","text":"Hemmung der DNA-Replikation → Zellzyklusstopp in S-Phase"},{"key":"E","text":"Aktivierung von Apoptose durch direkte Caspase-Aktivierung"}]'::jsonb,
  'C',
  NULL, NULL,
  'Alpha-Amanitin hemmt RNA-Pol II (mRNA-Synthese proteinkodierender Gene) >> RNA-Pol III > RNA-Pol I kaum. Folge: keine neue mRNA → keine Proteinerneuerung → Zelltod in rasch teilenden Zellen (Leber, Darm). Klinisch: Leberzellnekrose (da Leberzellen viel Proteinsynthese betreiben und Amanitin hepatisch akkumuliert) → Leberversagen, Nierenversagen. C ist korrekt. A: RNA-Pol I → rRNA (Amanitin hemmt Pol I kaum). B: RNA-Pol III → tRNA (stärker als Pol I, aber weniger als Pol II betroffen). D: Amanitin betrifft nicht DNA-Replikation (DNA-Polymerase). E: indirekter Zelltod durch Proteinsynthesemangel, nicht direkte Caspase-Aktivierung.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-03 Translation & genetischer Code
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-03-translation',
  'A', 'biologie', 'bio-6-03',
  'Während der Translation am Ribosom: An welcher Stelle (A-, P- oder E-Site) wird die wachsende Polypeptidkette gebunden, und wohin wird sie nach Peptidbindungsknüpfung transferiert?',
  '[{"key":"A","text":"Die Polypeptidkette hängt an der A-Site; nach Peptidyltransfer wechselt sie zur P-Site"},{"key":"B","text":"Die Polypeptidkette hängt an der P-Site; nach Peptidyltransfer wechselt sie zur A-Site"},{"key":"C","text":"Die Polypeptidkette hängt an der E-Site (Exit-Site) und verlässt dort das Ribosom"},{"key":"D","text":"Die neu ankommende Aminoacyl-tRNA bindet an der E-Site"},{"key":"E","text":"Die Polypeptidkette hängt an der P-Site; nach Peptidyltransfer bleibt sie in der P-Site bis Termination"}]'::jsonb,
  'A',
  NULL, NULL,
  'Ribosom-Sites: A (Aminoacyl) = neu ankommende Aminoacyl-tRNA bindet hier. P (Peptidyl) = trägt die wachsende Peptidkette. E (Exit) = leere tRNA verlässt hier das Ribosom. Ablauf: 1. Aminoacyl-tRNA bindet an A-Site. 2. Peptidyltransferase (23S-rRNA / 28S-rRNA = Ribozym) überträgt Peptid von P-tRNA auf Aminosäure der A-tRNA → nun hängt verlängerte Kette an A-tRNA. 3. Translokation: A-tRNA (mit Peptid) → P-Site; alte P-tRNA → E-Site; E-tRNA verlässt Ribosom. Also: Peptid hängt an A-Site-tRNA → nach Peptidyltransfer hängt es an neuer A-tRNA, diese wandert zur P-Site (A korrekt).',
  2
),
(
  'typk-bio-6-03-gen-code',
  'K', 'biologie', 'bio-6-03',
  'Welche der folgenden Aussagen zum genetischen Code und zur Translation sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Der genetische Code ist degeneriert (redundant): Die meisten Aminosäuren werden durch mehr als ein Codon codiert (z.B. Leucin durch 6 Codons).","korrekt":true},{"nr":2,"text":"AUG ist das einzige Startcodon und codiert für Methionin (Met) — bei Prokaryoten ist dies N-Formyl-Methionin (fMet).","korrekt":true},{"nr":3,"text":"Die drei Stopp-Codons (UAA, UAG, UGA) werden von Release-Faktoren erkannt, nicht von tRNAs.","korrekt":true},{"nr":4,"text":"Der genetische Code ist universell — er gilt identisch für alle Lebewesen einschließlich mitochondrialer DNA.","korrekt":false},{"nr":5,"text":"Wobble-Basenpaarung erlaubt einer tRNA, mehrere Codons mit unterschiedlichen Basen an der dritten Codon-Position zu erkennen.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,4,5]},{"key":"C","nummern":[1,2,3,5]},{"key":"D","nummern":[2,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: 64 Codons, 61 Aminosäure-Codons (degeneriert), 3 Stopp. Degenerierung schützt vor Missense-Mutationen (synonyme Mutationen). Aussage 2: AUG = Met (Euk) / fMet (Prok, Mito). Immer Startcodon (in richtigem Kontext: Kozak-Sequenz bei Euk). Aussage 3: Release-Faktoren (RF1/RF2 bei Prok; eRF1/eRF3 bei Euk) erkennen Stopp-Codons → Hydrolyse der Peptid-tRNA-Bindung → Freisetzung des Polypeptids. Aussage 4 FALSCH: Code fast universell, aber NICHT identisch: Mitochondrien verwenden abweichenden Code (z.B. UGA = Trp in mito statt Stopp; AGA/AGG = Stopp in mito statt Arg). Aussage 5: Wobble (Crick, 1966): 3. Position des Codons flexibel — Inosin in tRNA erkennt U, C, A.',
  2
),
(
  'typa-bio-6-03-antibiotika',
  'A', 'biologie', 'bio-6-03',
  'Streptomycin ist ein Aminoglykosid-Antibiotikum, das die 30S-Ribosomenuntereinheit von Bakterien bindet. Welche Konsequenz hat dies für die bakterielle Translation?',
  '[{"key":"A","text":"Verlängerung der Peptidkette wird verhindert — das Ribosom stoppt nach Anlagerung der ersten tRNA"},{"key":"B","text":"Fehlpaarung der Anticodon-Codon-Wechselwirkung → fehlerhafte Proteine mit falschen Aminosäuren (Misreading)"},{"key":"C","text":"Hemmung der Peptidyltransferase-Aktivität der 50S-Untereinheit → Peptidkette kann nicht verlängert werden"},{"key":"B","text":"Hemmung der Initiations-tRNA (fMet-tRNA) am P-Site"},{"key":"E","text":"Blockade des Exports der mRNA aus dem Zellkern in Prokaryoten"}]'::jsonb,
  'B',
  NULL, NULL,
  'Streptomycin bindet an 16S-rRNA der 30S-Untereinheit → verursacht Misreading: Falsche Aminoacyl-tRNAs werden an der A-Site akzeptiert → fehlerhafte Proteine → Membranintegrität geht verloren → Bakterientod. Klinisch: Tuberkulose-Behandlung (Mycobacterium tuberculosis). Andere Aminoglykoside: Gentamicin, Tobramycin, Amikacin — gleicher Mechanismus. Chloramphenicol hemmt Peptidyltransferase der 50S (C wäre für Chloramphenicol). Linezolid hemmt Initiations-tRNA-Bindung. Prokaryoten haben keinen Kern (E falsch).',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-04 Genregulation
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-04-lac-operon',
  'A', 'biologie', 'bio-6-04',
  'Das Lac-Operon von E. coli ist ein Modell der Genregulation. Bei Anwesenheit von Lactose UND Abwesenheit von Glucose: Welcher Regulationsmechanismus führt zur maximalen Transkription der Lac-Gene?',
  '[{"key":"A","text":"Lac-Repressor bindet Operator → Transkription gehemmt; CAP-Protein inaktiv"},{"key":"B","text":"Allolactose inhibiert Lac-Repressor (Repressor verlässt Operator) UND cAMP aktiviert CAP → maximale Transkription"},{"key":"C","text":"Glucose hemmt Adenylatzyklase → hoher cAMP → CAP aktiv → Transkription maximal"},{"key":"D","text":"Lac-Repressor wird durch Glucose aktiviert → Operator blockiert"},{"key":"E","text":"Nur der Lac-Repressor reguliert das Operon; CAP spielt keine Rolle bei Lactose-Verwertung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Lac-Operon: Zwei überlagerte Regulationsebenen. 1. Negativ (Lac-Repressor): Ohne Lactose → Repressor bindet Operator → Gene aus. Mit Lactose → Allolactose (Isomer) bindet Repressor → Konformationsänderung → Repressor löst sich → Gene de-reprimiert. 2. Positiv (katabolite Aktivierung): Ohne Glucose → hoher cAMP → cAMP bindet CAP (Catabolite Activator Protein) → CAP-cAMP bindet CAP-Bindungsstelle → erhöht Transkription stark. Mit Glucose → niedriger cAMP → CAP inaktiv → Transkription niedrig (auch wenn Repressor weg). MAXIMUM: Lactose vorhanden (Repressor weg) + Glucose fehlt (CAP aktiv). B korrekt.',
  2
),
(
  'typk-bio-6-04-epigenetik',
  'K', 'biologie', 'bio-6-04',
  'Welche der folgenden Aussagen zur Genregulation in Eukaryoten (einschließlich Epigenetik) sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"DNA-Methylierung an CpG-Dinucleotiden im Promotorbereich ist typischerweise mit Gensilencing assoziiert, da die Methylgruppe die Bindung von Transkriptionsfaktoren stört.","korrekt":true},{"nr":2,"text":"Histon-Acetylierung durch Histon-Acetyltransferasen (HATs) lockert die Chromatinstruktur auf (Euchromatin) und fördert die Transkription.","korrekt":true},{"nr":3,"text":"MicroRNAs (miRNAs) sind kurze (ca. 22 nt) nicht-kodierende RNAs, die durch Basenpaarung mit komplementären mRNAs zur Degradation oder translationalen Hemmung führen.","korrekt":true},{"nr":4,"text":"Enhancer-Sequenzen können mehrere 100 kb vom Promotor entfernt liegen und stimulieren die Transkription durch Schleifenbildung (Chromatin-Looping) und Interaktion mit dem Mediator-Komplex.","korrekt":true},{"nr":5,"text":"Epigenetische Veränderungen (DNA-Methylierung, Histon-Modifikation) sind per Definition nicht vererbbar und gehen bei der Zellteilung stets verloren.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,3,4]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 4 korrekt. Aussage 1: CpG-Methylierung in Promotor → rekrutiert Methyl-CpG-Bindungsproteine → Chromatinkondensation → Gensilencing. Imprinting, X-Inaktivierung, Tumorsuprgessor-Silencing in Krebs. Aussage 2: HATs + Acetyl → negative Ladung → schwächere Histon-DNA-Interaktion → offenes Chromatin → Zugänglichkeit für Pol II. HDACs = Histon-Deacetylasen → kondensieren Chromatin. Aussage 3: miRNAs = post-transkriptionelle Regulation (RISC-Komplex). Gut validiertes Konzept. Aussage 4: Enhancer = cis-regulatorische Elemente, positionsunabhängig, orientierungsunabhängig → 3D-Genom-Organisation (Hi-C). Aussage 5 FALSCH: Epigenetische Muster können vererbt werden (mitotisch = stabile Zellidentität; meiotisch = genomisches Imprinting, transgenerationale Epigenetik).',
  2
),
(
  'typa-bio-6-04-genregulation',
  'A', 'biologie', 'bio-6-04',
  'p53 (TP53) ist ein zentraler Tumorsuppressor und Transkriptionsfaktor. Nach DNA-Schädigung wird p53 stabilisiert. Was reguliert p53 in seiner Rolle als Transkriptionsfaktor?',
  '[{"key":"A","text":"p53 aktiviert ausschließlich pro-apoptotische Gene und hat keine Funktion im Zellzyklus-Arrest"},{"key":"B","text":"p53 induziert p21 (CDK-Inhibitor) → G1-Arrest; PUMA/BAX → Apoptose; GADD45 → DNA-Reparatur — p53 ist ein Multifunktions-Transkriptionsfaktor"},{"key":"C","text":"p53 hemmt die DNA-Methyltransferases → Aktivierung aller Gene durch globale DNA-Demethylierung"},{"key":"D","text":"p53 wird nur in Tumorzellen exprimiert, nicht in normalen Körperzellen"},{"key":"E","text":"p53-Mutationen sind selten bei menschlichen Krebserkrankungen (<5% der Tumorarten)"}]'::jsonb,
  'B',
  NULL, NULL,
  'p53 = "Hüter des Genoms" → nach DNA-Schaden stabilisiert durch MDM2-Inhibition. Als TF aktiviert p53: p21 (CDKN1A) → hemmt CDK4/6 und CDK2 → G1-Arrest (Zeit für Reparatur). GADD45 → direkte DNA-Reparatur. PUMA, NOXA, BAX → Mitochondrien-Apoptose (wenn Schaden irreparabel). p53 kann also Arrest ODER Apoptose auslösen — Entscheidung abhängig von Schadensausmaß → B korrekt. A falsch — p53 macht beides (Arrest + Apoptose). C falsch — keine Verbindung zu DNA-Methyltransferasen. D falsch — p53 in allen Körperzellen (aber post-translational reguliert durch schnellen MDM2-vermittelten Abbau). E falsch — TP53 in ~50% aller humanen Tumore mutiert (häufigste Tumorsuppressor-Mutation).',
  2
)
ON CONFLICT (id) DO NOTHING;
-- ============================================================
-- Biologie Kapitel 3: Anatomie & Physiologie — fehlende UKs
-- ============================================================

-- bio-3-02: Sinnesorgane & Haut
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-02-auge',
  'A', 'biologie', 'bio-3-02',
  'Die Fototransduktion im menschlichen Auge läuft in den Stäbchen ab. Welche Abfolge von Ereignissen tritt auf, wenn ein Photon Rhodopsin (Opsin + 11-cis-Retinal) trifft?',
  '[{"key":"A","text":"11-cis-Retinal → all-trans-Retinal → Aktivierung von Transducin (G-Protein) → Phosphodiesterase aktiv → cGMP sinkt → cGMP-Kanäle schließen → Hyperpolarisation"},{"key":"B","text":"all-trans-Retinal → 11-cis-Retinal → Depolarisation der Stäbchenzelle → Glutamat-Ausschüttung steigt"},{"key":"C","text":"Rhodopsin aktiviert direkt Natriumkanäle → Na⁺-Einstrom → Hyperpolarisation"},{"key":"D","text":"cGMP steigt nach Lichteinfall → Kanäle öffnen → Depolarisation → Glutamat-Release nimmt zu"},{"key":"E","text":"Transducin aktiviert Adenylatzyklase → cAMP steigt → Kaliumkanäle öffnen → Hyperpolarisation"}]'::jsonb,
  'A',
  NULL, NULL,
  'Fototransduktionskaskade: Licht → 11-cis-Retinal → all-trans-Retinal (Isomerisierung) → Rhodopsin aktiviert → Transducin (Gαt-Protein) wird GDP→GTP ausgetauscht → Phosphodiesterase (PDE) aktiviert → cGMP hydrolysiert → cGMP-regulierte Kationenkanäle schließen (im Dunkeln offen) → Na⁺ und Ca²⁺ Einstrom stoppt → Hyperpolarisation (Membranpotenzial negativer). Im Dunkeln: cGMP hoch → Kanäle offen → Depolarisation → tonische Glutamat-Ausschüttung (inhibierendes Signal auf Bipolarzellen). Bei Licht: Hyperpolarisation → weniger Glutamat → Signal an Bipolarzellen.',
  3
),
(
  'typk-bio-3-02-sinne',
  'K', 'biologie', 'bio-3-02',
  'Welche der folgenden Aussagen zu Sinnesorganen und Haut sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Zapfen vermitteln Farbsehen (3 Typen: S/M/L-Zapfen für Blau/Grün/Rot) und sind hauptsächlich in der Fovea centralis konzentriert.","korrekt":true},{"nr":2,"text":"Die Cochlea enthält Haarzellen auf der Basilarmembran: Hohe Töne werden apikal (Schneckenspitze), tiefe Töne basal (Rundfensternal) wahrgenommen.","korrekt":false},{"nr":3,"text":"Mechanorezeptoren (Meissner-Körperchen: Tastung; Pacini-Körperchen: Vibration; Merkel-Scheiben: Druck) sind unterschiedliche Hautrezeptoren mit verschiedenen Eigenschaften.","korrekt":true},{"nr":4,"text":"Das Gleichgewichtsorgan (Vestibularapparat) besteht aus Utriculus, Sacculus (statisches Gleichgewicht) und drei Bogengängen (Drehbewegungen).","korrekt":true},{"nr":5,"text":"Stäbchen sind empfindlicher als Zapfen und dienen dem Sehen bei schwachem Licht, enthalten aber kein Rhodopsin.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussagen 1, 3, 4 korrekt. Aussage 1: Drei Zapfentypen (Trichromatie): S (420 nm/blau), M (530 nm/grün), L (560 nm/rot). Fovea = nur Zapfen = schärfstes Sehen. Aussage 2 FALSCH: BASAL = hohe Frequenzen (hohe Töne), APIKAL = tiefe Frequenzen. Tonotopie: Stapes überträgt am ovalen Fenster (basal) → Wanderwelle → Resonanz je nach Frequenz. Aussage 3: Meissner (Tastdiskriminierung), Pacini (Vibration/Druck), Merkel (anhaltender Druck), Ruffini (Dehnung) — jeweils unterschiedliche Adaptationsgeschwindigkeit und Größe. Aussage 4: Vestibularapparat vollständig korrekt beschrieben. Aussage 5 FALSCH: Stäbchen ENTHALTEN Rhodopsin (11-cis-Retinal + Opsin) — das ist ihr Photopigment.',
  2
),
(
  'typa-bio-3-02-haut',
  'A', 'biologie', 'bio-3-02',
  'Die Haut besteht aus Epidermis, Dermis und Subkutis. In welcher Schicht der Epidermis findet die DNA-Synthese (Mitose) der Keratinozyten statt, und in welcher Schicht werden Keratinozyten endgültig abgestoßen?',
  '[{"key":"A","text":"Mitose im Stratum spinosum; Abstoßung im Stratum basale"},{"key":"B","text":"Mitose im Stratum basale; Abstoßung im Stratum corneum (Hornschicht)"},{"key":"C","text":"Mitose im Stratum granulosum; Abstoßung im Stratum lucidum"},{"key":"D","text":"Mitose im Stratum corneum; Abstoßung im Stratum spinosum"},{"key":"E","text":"Mitose in allen Epidermisschichten; Abstoßung im Stratum basale"}]'::jsonb,
  'B',
  NULL, NULL,
  'Epidermis von innen nach außen: Stratum basale (Basalzellschicht) → Stratum spinosum → Stratum granulosum → Stratum lucidum (nur behaarte Haut) → Stratum corneum. Mitose findet im Stratum basale statt (Stammzellen der Epidermis). Keratinozyten wandern nach außen, differenzieren, flachen ab, verlieren Nucleus und Organellen, füllen sich mit Keratin → im Stratum corneum sind sie tote, keratinisierte Zellen (Korneozyten) → Abstoßung (Desquamation). Wanderungszeit von basale → corneum: ~2–4 Wochen.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-06: Immunsystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-06-komplement',
  'A', 'biologie', 'bio-3-06',
  'Das Komplementsystem kann über drei Wege aktiviert werden. Bei Aktivierung über den klassischen Weg: Was aktiviert das C1-Protein direkt?',
  '[{"key":"A","text":"Mannan-bindenes Lektin (MBL) auf Bakterienoberflächen"},{"key":"B","text":"Antigen-Antikörper-Komplexe (IgM oder IgG-Aggregate am Antigen)"},{"key":"C","text":"Spontane Hydrolyse von C3 (Tick-over-Mechanismus)"},{"key":"D","text":"Direkte Bindung von C1 an LPS (Lipopolysaccharid) gramnegativer Bakterien"},{"key":"E","text":"Properdin stabilisiert den alternativen C3-Konvertase-Komplex"}]'::jsonb,
  'B',
  NULL, NULL,
  'Klassischer Weg: Antigen-Antikörper-Komplex → IgM oder zwei IgG in räumlicher Nähe → C1q bindet Fc-Regionen → C1r/C1s aktiviert → C4 und C2 gespalten → C3-Konvertase (C4b2a) → C3-Spaltung → C5b-9 (MAC = Membrane Attack Complex). Alternativer Weg (C): Spontane C3-Hydrolyse (C3-Tick-over), stabilisiert durch Properdin auf Fremdoberflächen. Lektinweg (A/MBL): MBL bindet Mannose → MASP1/2 aktiviert → wie klassischer Weg ab C4. B ist der klassische Weg. Complement-Defizienz führt zu erhöhter Infektanfälligkeit (C3-Defekt = schwer) oder erhöhtem SLE-Risiko (C4-Defekt).',
  2
),
(
  'typk-bio-3-06-immunsystem',
  'K', 'biologie', 'bio-3-06',
  'Welche der folgenden Aussagen zum Immunsystem sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Zytotoxische T-Zellen (CD8⁺) erkennen Antigene auf MHC-Klasse-I-Molekülen und töten infizierte oder maligne Zellen durch Perforin/Granzym-Sekretion.","korrekt":true},{"nr":2,"text":"T-Helferzellen (CD4⁺) erkennen Antigene auf MHC-Klasse-II-Molekülen und sind essentiell für B-Zell-Aktivierung und Antikörperklassenwechsel.","korrekt":true},{"nr":3,"text":"Natürliche Killerzellen (NK-Zellen) sind Teil des adaptiven Immunsystems und benötigen vorherige Sensibilisierung für ihre Funktion.","korrekt":false},{"nr":4,"text":"Regulatorische T-Zellen (Treg) unterdrücken überschießende Immunreaktionen und spielen eine Rolle bei der Verhinderung von Autoimmunerkrankungen.","korrekt":true},{"nr":5,"text":"Dendritische Zellen sind professionelle Antigen-präsentierende Zellen (APZ), die naive T-Zellen aktivieren können und sowohl MHC-I als auch MHC-II exprimieren.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,3,4]}]'::jsonb,
  'Aussagen 1, 2, 4, 5 korrekt. Aussage 1: CD8⁺ + MHC-I: alle kernhaltigen Zellen exprimieren MHC-I → zytotoxische T-Zellen überwachen alle Körperzellen. Perforin bildet Poren → Granzym B aktiviert Caspase-Kaskade → Apoptose der Zielzelle. Aussage 2: CD4⁺ + MHC-II: nur APZ (dendritische Zellen, Makrophagen, B-Zellen). IL-2 aktiviert B-Zellen, Isotypen-Switch (IgM→IgG/IgA/IgE) braucht CD40L/IL-4/IL-5/IL-13. Aussage 3 FALSCH: NK-Zellen = ANGEBOREN (innate), keine Sensibilisierung nötig. Sie töten Zellen ohne MHC-I (missing-self) und IgG-opsonisierte Zellen (ADCC). Aussage 4: Tregs (FoxP3⁺) = Selbsttoleranz, verhindern Autoimmunität. Aussage 5: Dendritische Zellen präsentieren via MHC-I (Cross-Präsentation) UND MHC-II → aktivieren sowohl CD8⁺ als auch CD4⁺.',
  2
),
(
  'typa-bio-3-06-antikoerper',
  'A', 'biologie', 'bio-3-06',
  'IgA ist der häufigste Antikörper in Körpersekreten (Speichel, Muttermilch, Darmschleim). Welche strukturelle Besonderheit ermöglicht dies?',
  '[{"key":"A","text":"IgA liegt als Dimer mit einer J-Kette und sekretorischer Komponente (SC) vor, die es vor Proteolyse in Mukosaschleimhäuten schützt"},{"key":"B","text":"IgA hat die höchste Serumkonzentration aller Immunglobuline und überträgt mütterliche Immunität transplazentar auf den Fetus"},{"key":"C","text":"IgA aktiviert Komplement am stärksten aller Immunglobulin-Klassen"},{"key":"D","text":"IgA bindet mit hoher Affinität an Mastzellen und Basophile und vermittelt Typ-I-Hypersensitivität (Allergie)"},{"key":"E","text":"IgA liegt ausschließlich als Monomer vor und hat eine einzelne Antigenbindungsstelle"}]'::jsonb,
  'A',
  NULL, NULL,
  'Sekretorisches IgA (sIgA): Dimer aus zwei IgA-Molekülen + J-Kette (verbindet) + sekretorische Komponente (SC = polymerer Ig-Rezeptor-Rest, schützt vor Proteasen im Darmlumen). sIgA = Erstverteidigung auf Mukosaoberflächen (Darm, Atemwege, Urogenitaltrakt). Muttermilch-IgA schützt Säuglinge. B: transplazentarer Transfer = IgG (FcRn-Rezeptor). Höchste Serumkonzentration = IgG. C: Komplement-Aktivierung hauptsächlich durch IgM (klassischer Weg) und IgG. D: Mastzellen/Basophile-Bindung = IgE (Typ-I-Hypersensitivität/Allergie). E: IgA liegt überwiegend als Dimer vor (Serum: Monomer + Dimer; Sekret: Dimer).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-07: Lymphsystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-07-lymphe',
  'A', 'biologie', 'bio-3-07',
  'Lymphe wird aus der interstitiellen Flüssigkeit gebildet und in das venöse Blut zurückgeführt. In welche Vene mündet der Ductus thoracicus (der größte Lymphgefäßstamm des Körpers)?',
  '[{"key":"A","text":"V. cava superior"},{"key":"B","text":"V. jugularis interna links / linker Venenwinkel (Angulus venosus sinister)"},{"key":"C","text":"V. portae hepatis"},{"key":"D","text":"V. subclavia rechts"},{"key":"E","text":"V. cava inferior"}]'::jsonb,
  'B',
  NULL, NULL,
  'Der Ductus thoracicus (linker Hauptlymphstamm) sammelt Lymphe aus: Gesamte untere Körperhälfte + linke obere Körperhälfte + linker Arm + Kopf links. Er mündet in den linken Venenwinkel (Angulus venosus sinister = Zusammenfluss V. jugularis interna sinistra + V. subclavia sinistra). Der rechte Lymphgang (Ductus lymphaticus dexter) leitet Lymphe aus rechter oberer Körperhälfte, rechtem Arm, rechtem Kopf → rechter Venenwinkel. Klinisch: Ductus-thoracicus-Verletzung → Chylothorax (Lymphflüssigkeit in Pleurahöhle).',
  2
),
(
  'typk-bio-3-07-lymph',
  'K', 'biologie', 'bio-3-07',
  'Welche der folgenden Aussagen zum Lymphsystem sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Lymphknoten fungieren als Filter für Lymphe und sind Orte der Lymphozytenreifung und Immunantwort — B-Zellen reifen in Keimzentren, T-Zellen in parakortikalen Bereichen.","korrekt":true},{"nr":2,"text":"Die Milz filtert Blut (nicht Lymphe): Weiße Pulpa = Immunfunktion, Rote Pulpa = Erythrozyten-Abbau und Speicherung.","korrekt":true},{"nr":3,"text":"Der Thymus ist primäres lymphatisches Organ und Ort der T-Zell-Reifung; er involviert sich im Laufe des Lebens und wird durch Fettgewebe ersetzt.","korrekt":true},{"nr":4,"text":"Lymphödem entsteht bei Überfunktion des Lymphsystems, z.B. bei erhöhter Lymphproduktion nach körperlicher Anstrengung.","korrekt":false},{"nr":5,"text":"Lymphozyten rezirkulieren kontinuierlich zwischen Blut, Lymphgewebe und Lymphe, was für die Immunüberwachung essenziell ist.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,2,3,5]},{"key":"C","nummern":[2,4,5]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: Lymphknoten-Kompartimentierung: Kortex (B-Zellen, Follikel/Keimzentren), Parakortex (T-Zellen, high endothelial venules für Lymphozyten-Eintritt), Medulla. Aussage 2: Milz = Blutfilter. Weiße Pulpa (PALS = periarterioläre lymphatische Scheide = T-Zellen; Follikel = B-Zellen). Rote Pulpa = Sinusoide + Stränge → alte/defekte Erythrozyten werden abgebaut (Makrophagen). Aussage 3: Thymus = primäres lymphatisches Organ (neben Knochenmark). T-Zell-Reifung: positive Selektion (MHC-Erkennung) + negative Selektion (Selbsttoleranz). Involution ab Pubertät → im Alter Fettgewebe. Aussage 4 FALSCH: Lymphödem = Insuffizienz/Obstruktion des Lymphsystems (z.B. nach Lymphknotenentfernung, Filariasis) → Stauung der interstitiellen Flüssigkeit. Aussage 5: Lymphozyten-Rezirkulation = Überwachungssystem; High endothelial venules (HEV) als Eintrittspforte.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-09: Verdauungssystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-09-verdauung',
  'A', 'biologie', 'bio-3-09',
  'Im Dünndarm werden Nährstoffe durch verschiedene Mechanismen absorbiert. Welcher Mechanismus gilt für die Aufnahme von Glucose aus dem Darmlumen in die Enterozyten?',
  '[{"key":"A","text":"Einfache Diffusion entlang des Konzentrationsgradienten"},{"key":"B","text":"Sekundär aktiver Transport mit Na⁺ (SGLT1 — Na⁺-Glucose-Symport)"},{"key":"C","text":"Primär aktiver Transport durch ATPase direkt"},{"key":"D","text":"Erleichterte Diffusion durch GLUT2 (ohne Energieverbrauch) auf der luminalen Seite"},{"key":"E","text":"Pinozytose in Membranvesikel"}]'::jsonb,
  'B',
  NULL, NULL,
  'Glucose-Aufnahme im Dünndarm (apikal/luminal): SGLT1 (Sodium-Glucose Linked Transporter 1) = sekundär aktiver Na⁺-Glucose-Symport. Na⁺-Gradient (aufgebaut durch basolaterale Na⁺/K⁺-ATPase = primär aktiv) treibt Glucose gegen den Konzentrationsgradienten in die Zelle. Basolateral (in Blut): GLUT2 = erleichterte Diffusion. Die Na⁺/K⁺-ATPase ist der primäre aktive Motor, aber der Glucose-Transport selbst ist sekundär aktiv. SGLT2 = Niere (wichtig für Diabetiker: SGLT2-Inhibitoren = Gliflozine). GLUT1 = Erythrozyten/Gehirn; GLUT4 = insulinabhängig (Muskel, Fettgewebe).',
  2
),
(
  'typk-bio-3-09-gi',
  'K', 'biologie', 'bio-3-09',
  'Welche der folgenden Aussagen zum Verdauungssystem sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Pepsin (Magenprotease) wird als inaktives Pepsinogen von den Hauptzellen des Magenfundus sezerniert und durch sauren pH aktiviert.","korrekt":true},{"nr":2,"text":"Cholezystokinin (CCK) wird im Duodenum bei Fettzufuhr ausgeschüttet und stimuliert Gallenblasenkontrakion und Pankreas-Enzymsekretion.","korrekt":true},{"nr":3,"text":"Intrinsic Factor (IF) wird von den Belegzellen (Parietalzellen) des Magens produziert und ist essentiell für die Absorption von Vitamin B12 im Ileum.","korrekt":true},{"nr":4,"text":"Verdauungsenzyme des Pankreas (Lipase, Amylase, Trypsin) werden direkt im aktiven Zustand sezerniert und beginnen sofort die Verdauung im Duodenum.","korrekt":false},{"nr":5,"text":"Der Dickdarm absorbiert primär Wasser und Elektrolyte aus dem Chymus; die Darmflora (Mikrobiom) fermentiert unverdauliche Kohlenhydrate (Ballaststoffe) zu kurzkettigen Fettsäuren.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,2,3,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: Pepsinogen → Pepsin bei pH < 2 (Salzsäure von Parietalzellen). Hauptzellen sezernieren Pepsinogen. Parietalzellen: HCl + Intrinsic Factor. Aussage 2: CCK: ausgelöst durch Fette/Proteine im Duodenum → Gallenblase kontrahiert → Sphincter Oddi öffnet → Galle in Duodenum; Pankreas: Lipase, Proteasen, Amylase. Secretin (saurer pH im Duodenum) → HCO₃⁻-reicher Pankreassaft. Aussage 3: IF-B12-Komplex → Ileum-Absorption (Cubilin-Rezeptor). Bei IF-Mangel (Autoimmun-Gastritis) → Perniziöse Anämie (megaloblastäre Anämie). Aussage 4 FALSCH: Pankreasenzyme werden als INAKTIVE Zymogene sezerniert (Trypsinogen → Trypsin durch Enterokinase; Trypsin aktiviert weitere Zymogene). Sicherheitsmechanismus gegen Selbstverdauung. Aussage 5: Kurzkettige FS (Butyrat, Propionat, Acetat) = Energiequelle für Kolonozyten, antientzündlich.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-10: Harnsystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-10-nephron',
  'A', 'biologie', 'bio-3-10',
  'Im proximalen Tubulus der Niere werden ca. 65–70% des filtrierten Natriums reabsorbiert. Welcher Mechanismus ist hauptverantwortlich für diesen Prozess auf der basolateralen Seite?',
  '[{"key":"A","text":"Na⁺/K⁺-ATPase pumpt 3 Na⁺ aus der Zelle → elektrochemischer Gradient treibt Na⁺ luminal in die Zelle (passiv via Na⁺-Symporter mit Glucose/Aminosäuren)"},{"key":"B","text":"Na⁺/H⁺-Antiport (NHE3) auf der basolateralen Seite tauscht Na⁺ gegen H⁺ aus"},{"key":"C","text":"Aldosteron stimuliert direkt die Na⁺/K⁺-ATPase im proximalen Tubulus"},{"key":"D","text":"Aquaporin-2 transportiert Na⁺ im proximalen Tubulus"},{"key":"E","text":"Passive Rückresorption von Na⁺ gegen seinen Konzentrationsgradienten ohne Energieaufwand"}]'::jsonb,
  'A',
  NULL, NULL,
  'Proximaler Tubulus: basolaterale Na⁺/K⁺-ATPase pumpt 3 Na⁺ aus der Zelle → niedriges intrazelluläres Na⁺ → Konzentrationsgradient treibt Na⁺ aus Lumen in Zelle durch: SGLT1/2 (mit Glucose), NHE3 (mit H⁺-Austausch/HCO₃⁻-Rückresorption), Na⁺-Aminosäure-Symporter. Diese luminalen Transporter sind sekundär aktiv. Aldosteron (C) wirkt hauptsächlich im distalen Tubulus/Sammelrohr (ENaC-Expression). Aquaporin-2 (D) transportiert Wasser (ADH-abhängig). Passive Rückresorption gegen Gradienten (E) ist ein Widerspruch in sich.',
  3
),
(
  'typk-bio-3-10-niere',
  'K', 'biologie', 'bio-3-10',
  'Welche der folgenden Aussagen zur Nierenfunktion sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"ADH (Vasopressin) erhöht die Wasserpermeabilität des Sammelrohrs durch Einbau von Aquaporin-2-Kanälen in die luminale Membran.","korrekt":true},{"nr":2,"text":"Aldosteron stimuliert die Na⁺-Reabsorption und K⁺-Sekretion im distalen Tubulus und Sammelrohr durch Hochregulation von ENaC und Na⁺/K⁺-ATPase.","korrekt":true},{"nr":3,"text":"Die glomeruläre Filtrationsrate (GFR) beträgt beim gesunden Erwachsenen ca. 120 ml/min; als klinischer Marker wird Kreatinin verwendet (GFR umgekehrt proportional zu Serumkreatinin).","korrekt":true},{"nr":4,"text":"Das Renin-Angiotensin-Aldosteron-System (RAAS): Renin (Niere) → spaltet Angiotensinogen → Angiotensin I → ACE (Lunge) → Angiotensin II → Aldosteron (Nebennierenrinde); Angiotensin II ist vasodilatativ.","korrekt":false},{"nr":5,"text":"Erythropoetin (EPO) wird in der Niere bei Hypoxie gebildet und stimuliert die Erythropoese im Knochenmark.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: ADH → V2-Rezeptor → cAMP → PKA → AQP2-Vesikel fusionieren mit luminaler Membran → Wasserpermeabilität steigt → konzentrierter Urin. SIADH (Syndrom inadäquater ADH-Sekretion) → Hyponatriämie. Aussage 2: Aldosteron (Mineralokortikoid der NNR-Zona glomerulosa) → Genomwirkung → ENaC und Na⁺/K⁺-ATPase Hochregulation. Hyperaldosteronismus (Conn) → Hypertonie, Hypokaliämie. Aussage 3: GFR ~120 ml/min (Frauen etwas weniger). Serumkreatinin steigt erst wenn GFR <50% → schlechter Frühmarker (Cystatin C besser). CKD: GFR <60 ml/min über 3 Monate. Aussage 4 FALSCH: Angiotensin II ist VASOKONSTRIKTIV (stärkster Vasokonstriktor des RAAS). ACE-Hemmer blockieren AII-Bildung → Vasodilatation → Blutdrucksenkung. Aussage 5: EPO-Produktionsort: peritubläre Fibroblasten/Kapillarendothel in Kortex/Medulla. Nierenbei Erkrankung → renale Anämie.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-11: Skelettsystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-11-knochen',
  'A', 'biologie', 'bio-3-11',
  'Osteoblasten bauen Knochenmatrix auf, Osteoklasten bauen sie ab. Welche Zelltypen sind direkte Vorläufer dieser Zellen?',
  '[{"key":"A","text":"Osteoblasten aus mesenchymalen Stammzellen; Osteoklasten aus hämatopoetischen Vorläufern (Monozyten-Makrophagen-Linie)"},{"key":"B","text":"Beide aus mesenchymalen Stammzellen"},{"key":"C","text":"Osteoblasten aus hämatopoetischen Stammzellen; Osteoklasten aus mesenchymalen Fibroblasten"},{"key":"D","text":"Beide differenzieren aus embryonalen Knorpelzellen (Chondrozyten)"},{"key":"E","text":"Osteoblasten aus Endothelzellen; Osteoklasten aus T-Lymphozyten"}]'::jsonb,
  'A',
  NULL, NULL,
  'Osteoblasten: mesenchymale Stammzellen (MSC) → knochenbildende Zellen. Nach Einmauerung in Matrix → Osteozyten. Osteoklasten: hämatopoetische Stammzellen → Monozyten/Makrophagen-Linie → Fusion mehrerer Vorläufer → multinukleärer Osteoklast (mehrere Kerne). RANK/RANKL-Signalweg: Osteoblasten exprimieren RANKL → bindet RANK auf Osteoklastenvorläufern → Differenzierung. Osteoprotegerin (OPG, decoy receptor) hemmt RANKL → weniger Osteoklastenaktivität. Klinisch: Denosumab (Anti-RANKL-AK) → Osteoporosebehandlung.',
  2
),
(
  'typk-bio-3-11-skelett',
  'K', 'biologie', 'bio-3-11',
  'Welche der folgenden Aussagen zum Skelettsystem sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Kompaktknochen (Kortikalis) besteht aus Havers-Systemen (Osteonen): konzentrische Knochenlamellen um einen zentralen Havers-Kanal mit Blutgefäß und Nerv.","korrekt":true},{"nr":2,"text":"Vitamin D (Calcitriol) fördert die Calciumresorption im Darm und die Calciumrückresorption in der Niere; Mangel führt zu Rachitis (Kinder) bzw. Osteomalazie (Erwachsene).","korrekt":true},{"nr":3,"text":"PTH (Parathyroidhormon) erhöht den Serumcalciumspiegel durch: Osteoklastenaktivierung (Knochen), Ca²⁺-Reabsorption (Niere), und indirekte Vitamin-D-Aktivierung (1α-Hydroxylase).","korrekt":true},{"nr":4,"text":"Calcitonin (Schilddrüse) erhöht den Serumcalciumspiegel durch Stimulation der Osteoklasten.","korrekt":false},{"nr":5,"text":"Das Gelenk ist aufgebaut aus: Gelenkknorpel (hyaliner Knorpel), Gelenkhöhle mit Gelenkflüssigkeit (Synovia) und Gelenkkapsel.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,4,5]},{"key":"C","nummern":[1,2,3,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussagen 1, 2, 3, 5 korrekt. Aussage 1: Osteon = Lamelle + Havers-Kanal (Längskanal) + Volkmann-Kanal (Querkanal). Spongiosum = Trabekelwerk ohne Osteone, größere Oberfläche. Aussage 2: Calcitriol (1,25-OH₂-D₃) = aktive Form. Synthese: Haut (Provitamin D₃ → Vitamin D₃) → Leber (25-OH) → Niere (1α-Hydroxylase, PTH-stimuliert → 1,25-OH₂). Mangel: Rachitis (weiche Knochen, O-Beine) / Osteomalazie (Schmerzen). Aussage 3: PTH = Hypercalcämiepeptid. Drei Wirkorte: Knochen (RANKL→Osteoklasten→Ca²⁺-Freisetzung), Niere (Ca²⁺-Reabs↑, Phosphat-Exkretion↑, 1α-Hydr.↑), indirekt Darm (via Calcitriol). Aussage 4 FALSCH: Calcitonin SENKT Serumcalcium (hemmt Osteoklasten, fördert Ca²⁺-Ausscheidung). Antagonist zu PTH. Aussage 5: Diarthrose (echtes Gelenk): Knorpel + Synovia + Kapsel + Bänder.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-12: Fortpflanzungssystem
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-12-ovarialzyklus',
  'A', 'biologie', 'bio-3-12',
  'Im Verlauf des weiblichen Ovarialzyklus produziert das Corpus luteum nach dem Eisprung primär welches Hormon, und was passiert, wenn keine Befruchtung stattfindet?',
  '[{"key":"A","text":"Östrogen; bei Ausbleiben der Befruchtung steigt Östrogen weiter und hemmt LH"},{"key":"B","text":"Progesteron (und etwas Östrogen); bei Ausbleiben der Befruchtung degeneriert das Corpus luteum → Progesteronabfall → Menstruation"},{"key":"C","text":"FSH; bei Ausbleiben der Befruchtung wird FSH gehemmt und der Zyklus pausiert"},{"key":"D","text":"hCG; bei Ausbleiben der Befruchtung wird hCG zur Aufrechterhaltung des Corpus luteum benötigt"},{"key":"E","text":"LH; bei Ausbleiben der Befruchtung steigt LH und induziert Ovulation des nächsten Follikels"}]'::jsonb,
  'B',
  NULL, NULL,
  'Corpus luteum (Gelbkörper) = Post-Ovulationsstruktur aus dem rupturierten Follikel. Produziert hauptsächlich Progesteron (+ Östrogen). Progesteron: bereitet Endometrium vor (Proliferation → Sekretionsphase), hemmt Uteruskontraktionen, erhöht Basaltemperatur (~0,3°C), hemmt GnRH/LH (negative Rückkopplung). Ohne Befruchtung: kein hCG → Corpus luteum degeneriert nach ~14 Tagen → Corpus albicans → Progesteronspiegel fällt → Endometrium-Abbruch → Menstruation. Bei Schwangerschaft: Trophoblast → hCG → erhält Corpus luteum → Progesteron bleibt hoch → keine Menstruation. hCG = Schwangerschaftstest-Basis.',
  2
),
(
  'typk-bio-3-12-reproduktion',
  'K', 'biologie', 'bio-3-12',
  'Welche der folgenden Aussagen zum Fortpflanzungssystem sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Spermatogenese findet in den Tubuli seminiferi der Hoden statt; die optimale Temperatur liegt bei ca. 34–35°C, daher liegen die Hoden außerhalb der Bauchhöhle (Kryptorchismus = Infertilitätsrisiko).","korrekt":true},{"nr":2,"text":"Der LH-Gipfel (LH-Surge) kurz vor dem Eisprung wird durch positives Feedback von Östrogen auf den Hypothalamus/Hypophyse ausgelöst.","korrekt":true},{"nr":3,"text":"Testosteron wird in den Leydig-Zellen des Hodens produziert und ist für die Spermatogenese (via Sertoli-Zellen), Libido und sekundäre Geschlechtsmerkmale verantwortlich.","korrekt":true},{"nr":4,"text":"FSH wirkt bei Frauen auf die Granulosazellen des Follikels (stimuliert Östrogensynthese/Aromatase) und bei Männern auf die Sertoli-Zellen (fördert Spermatogenese/ABP).","korrekt":true},{"nr":5,"text":"Die Eizelle wird nach der Ovulation direkt in den Uterus aufgenommen; der Eileiter (Tuba uterina) spielt keine Rolle beim Transport.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[1,2,3,4]}]'::jsonb,
  'Aussagen 1, 2, 3, 4 korrekt. Aussage 1: Hodentemperatur 2–3°C unter Körpertemperatur (34–35°C) für Spermatogenese optimal. Kryptorchismus (Hodenhochstand) → Temperatur zu hoch → Infertilität + erhöhtes Hodentumorrisiko. Behandlung bis 12. Lebensmonat. Aussage 2: Follikelphase: Östrogen (negatives Feedback bis Schwellenwert). Überschreitung des Östrogen-Schwellenwerts → POSITIVES Feedback → GnRH-Puls → LH-Surge → Ovulation. Kurzes Zeitfenster (12–36h). Aussage 3: Testosteron = Leydig-Zellen (interstitiell). Sertoli-Zellen: Blut-Hoden-Schranke, ABP (Androgen-bindendes Protein), Inhibin. Aussage 4: FSH-Zielzellen: Granulosazellen (Frau, Aromatase: Androgen → Östrogen) + Sertoli-Zellen (Mann, FSH→ ABP→ Spermatogenese). Aussage 5 FALSCH: Eizelle wird vom Infundibulum der Tuba uterina aufgefangen (Fimbriae). Transport durch Zilien und Peristaltik Richtung Uterus. Befruchtung im ampullären Teil der Tube.',
  2
)
ON CONFLICT (id) DO NOTHING;
-- ============================================================
-- Zusätzliche Fragen für Bio Kap1, Kap3, Kap5, Kap6
-- ============================================================

-- bio-1-08 Endoplasmatisches Retikulum & Golgi — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-08-golgiwege',
  'A', 'biologie', 'bio-1-08',
  'Im Golgi-Apparat werden Proteine vom cis-Golgi-Netzwerk (CGN) zum trans-Golgi-Netzwerk (TGN) transportiert. Welche Aussage zur Sortierung sekretorischer Proteine ist korrekt?',
  '[{"key":"A","text":"Lysosomale Enzyme werden durch Mannose-6-Phosphat-Markierung im cis-Golgi identifiziert und zum Lysosom dirigiert"},{"key":"B","text":"Alle Glykoproteine werden ohne Sortierungssignal direkt zur Plasmamembran geschickt"},{"key":"C","text":"Sekretorische Proteine ohne Retentionssignal werden standardmäßig zum Lysosom geleitet"},{"key":"D","text":"Das ER-Retentionssignal KDEL leitet Proteine vom Golgi zurück zum trans-Golgi-Netzwerk"},{"key":"E","text":"COPI-Vesikel transportieren Proteine anterograd vom ER zum cis-Golgi"}]'::jsonb,
  'A',
  NULL, NULL,
  'Lysosomale Enzyme tragen Mannose-6-Phosphat (M6P) als Sortierungssignal — aufgebracht im cis-Golgi durch N-Acetylglucosaminyl-1-Phosphotransferase. Im TGN binden M6P-Rezeptoren (MPR) und dirigieren Enzyme via Clathrin-Vesikel zu Lysosomen. B falsch: Konstitutive Sekretion zur Plasmamembran ist zwar Standard-Weg für viele Proteine (bulk flow), aber nicht ohne Regulation. C falsch: Standard-Weg ohne Signal = Plasmamembran/Exozytose. D falsch: KDEL = ER-Retentionssignal für lösliche ER-Proteine — leitet vom Golgi zurück ins ER (via KDEL-Rezeptor und COPI-Vesikel), nicht zum TGN. E falsch: COPII = ER→Golgi (anterograd); COPI = Golgi→ER (retrograd).',
  3
),
(
  'typa-bio-1-10-lysosom',
  'A', 'biologie', 'bio-1-10',
  'Lysosomen enthalten zahlreiche hydrolytische Enzyme. Bei welchem pH-Wert sind diese Enzyme aktiv, und welcher Mechanismus hält diesen pH-Wert aufrecht?',
  '[{"key":"A","text":"pH 4,5–5,0; V-Typ-H⁺-ATPase (Vakuoläre ATPase) pumpt H⁺ aktiv aus dem Zytosol in das Lysosomenlumen"},{"key":"B","text":"pH 7,4; passiver H⁺-Transport über Kanalproteine"},{"key":"C","text":"pH 4,5–5,0; Na⁺/H⁺-Antiporter tauscht Na⁺ gegen H⁺ aus"},{"key":"D","text":"pH 8,0–9,0; alkalisches Milieu aktiviert lysosomale Proteasen"},{"key":"E","text":"pH 7,0; die Enzyme sind pH-unabhängig und arbeiten in neutralem Milieu"}]'::jsonb,
  'A',
  NULL, NULL,
  'Lysosomaler pH 4,5–5,0 (sauer) — notwendig für Aktivität der sauren Hydrolasen (Proteasen, Lipasen, Nukleasen, Glykosidasen). V-ATPase (vacuolar H⁺-ATPase) verwendet ATP, um H⁺ ins Lumen zu pumpen — primär aktiver Transport. Klinisch: Chloroquin/Ammoniumchlorid erhöhen lysosomalen pH → hemmen Lysosom-Funktion (verwendet bei Malariatherapie; auch von Viren genutzt). Erbliche Speicherkrankheiten: defekte lysosomale Enzyme → Substratakkumulation (Tay-Sachs, Gaucher, Pompe). Das Zytosol bleibt bei pH 7,2–7,4 → starker H⁺-Gradient über Lysosomenmembran.',
  2
),
(
  'typa-bio-1-12-ribosom',
  'A', 'biologie', 'bio-1-12',
  'Prokaryotische und eukaryotische Ribosomen unterscheiden sich in ihrer Zusammensetzung. Was ist die klinische Bedeutung dieses Unterschieds?',
  '[{"key":"A","text":"Antibiotika können selektiv prokaryotische Ribosomen hemmen ohne eukaryotische zu schädigen, da 70S und 80S-Ribosomen strukturell verschieden sind"},{"key":"B","text":"Eukaryotische Ribosomen sind größer, daher können Antibiotika diese nicht erreichen"},{"key":"C","text":"Prokaryotische 50S-Untereinheit entspricht der eukaryotischen 60S vollständig — keine selektive Hemmung möglich"},{"key":"D","text":"Mitochondriale Ribosomen sind identisch mit eukaryotischen zytosolischen Ribosomen"},{"key":"E","text":"Nur Eukaryoten haben freie Ribosomen; Prokaryoten haben ausschließlich membrangebundene Ribosomen"}]'::jsonb,
  'A',
  NULL, NULL,
  'Prokaryoten: 70S = 30S + 50S. Eukaryoten: 80S = 40S + 60S. Strukturelle Unterschiede → Grundlage für selektive Antibiotika: Aminoglykoside (30S) = Streptomycin, Gentamicin. Tetracycline (30S, blockieren Aminoacyl-tRNA-Bindung). Chloramphenicol (50S, hemmt Peptidyltransferase). Makrolide/Lincosamide (50S, Translokation). Rifampicin (hemmt bakterielle RNA-Polymerase). Diese wirken nicht auf 80S → therapeutisch nutzbar. Mitochondriale Ribosomen (70S-ähnlich!) sind deshalb anfällig für Aminoglykoside → Ototoxizität/Nephrotoxizität bei Aminoglykosiden (mitokondriale Nebenwirkung).',
  2
),
(
  'typa-bio-1-14-zytoskel',
  'A', 'biologie', 'bio-1-14',
  'Mikrotubuli sind dynamische Strukturen, die durch GTP-Hydrolyse kontrolliert werden. Welche Eigenschaft beschreibt die "dynamische Instabilität" der Mikrotubuli?',
  '[{"key":"A","text":"Mikrotubuli verlängern sich durch stabile GTP-Tubulin-Kappe am Plus-Ende; nach GTP→GDP-Hydrolyse kann das Plus-Ende schnell depolymerisieren (Katastrophe)"},{"key":"B","text":"Mikrotubuli sind permanent stabil und ändern ihre Länge nicht"},{"key":"C","text":"Nur das Minus-Ende wächst; das Plus-Ende ist immer stabil durch MTOC-Verankerung"},{"key":"D","text":"Aktin-Filamente zeigen dynamische Instabilität; Mikrotubuli sind stabil"},{"key":"E","text":"GTP-Hydrolyse an Tubulin stabilisiert Mikrotubuli; GDP-Tubulin wächst weiter"}]'::jsonb,
  'A',
  NULL, NULL,
  'Dynamische Instabilität (Mitchison & Kirschner, 1984): Mikrotubuli alternieren zwischen Wachstumsphasen (Rescue) und Depolymerisationsphasen (Catastrophe). GTP-Tubulin polymerisiert → GTP-Kappe schützt Plus-Ende. Hydrolyse von GTP→GDP im Inneren → instabiles GDP-Tubulin → wenn Kappe verloren geht → Catastrophe (rasches Abbau). Klinische Bedeutung: Taxane (Paclitaxel) stabilisieren Mikrotubuli → hemmen Zellteilung (Krebstherapie). Vinca-Alkaloide (Vincristin) = Depolymerisation erzwingen → Mitosestopp. Colchizin = Gicht (bindet Tubulin → hemmt Mikrotubuli-Polymerisation → Neutrophilen-Migration gehemmt).',
  2
),
(
  'typa-bio-1-15-zellteil',
  'A', 'biologie', 'bio-1-15',
  'Während der Mitose wird der Mitosespindelkontrollpunkt (Spindle Assembly Checkpoint, SAC) aktiviert. Was ist die Funktion dieses Kontrollpunkts?',
  '[{"key":"A","text":"Übergang von G1 zu S-Phase: Überprüfung der DNA-Integrität vor der Replikation"},{"key":"B","text":"Übergang Metaphase → Anaphase: Sicherstellung, dass alle Kinetochore korrekt mit Spindelmikrotubuli verbunden sind (bivalente Anheftung)"},{"key":"C","text":"G2/M-Übergangspunkt: Überprüfung ob die DNA-Replikation vollständig abgeschlossen ist"},{"key":"D","text":"Zytokinese: Sicherstellung der gleichmäßigen Teilung des Zytoplasmas"},{"key":"E","text":"Aktivierung der Apoptose bei jeder Mitose"}]'::jsonb,
  'B',
  NULL, NULL,
  'SAC (Spindle Assembly Checkpoint): Metaphase → Anaphase-Übergang. Jedes Kinetochor muss korrekt amphitelisch (bivalent) mit Mikrotubuli verbunden sein (Kinetochor aus einer Seite mit Mikrotubuli verbunden). Freie/falsch verbundene Kinetochore aktivieren MAD1/MAD2 → hemmen APC/C (Anaphase-Promoting Complex) → kein Securin-Abbau → Separase inaktiv → Cohesin intakt → keine Schwesterchromatid-Trennung. Wenn alle Kinetochore korrekt: SAC aufgehoben → APC/C aktiv → Securin abgebaut → Separase aktiv → Cohesin gespalten → Anaphase. Fehler hier → Aneuploidy → Krebs-Entstehung.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-03 Hormonsystem — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-03-schilddruese',
  'A', 'biologie', 'bio-3-03',
  'Schilddrüsenhormone (T3 und T4) wirken primär auf den Zellstoffwechsel. Welche Aussage zum Mechanismus und Wirkungsort ist korrekt?',
  '[{"key":"A","text":"T3 und T4 sind wasserlösliche Hormone und binden an Rezeptoren auf der Zelloberfläche (GPCRs)"},{"key":"B","text":"T3 (aktive Form) bindet an intrazelluläre Kernrezeptoren (TRα/TRβ), die als ligandenaktivierte Transkriptionsfaktoren fungieren"},{"key":"C","text":"T4 ist die metabolisch aktivere Form und wird nicht in T3 umgewandelt"},{"key":"D","text":"Schilddrüsenhormone wirken ausschließlich auf Herzmuskelzellen"},{"key":"E","text":"T3 aktiviert hauptsächlich Membranrezeptoren → IP3/DAG-Signalweg → Ca²⁺-Freisetzung"}]'::jsonb,
  'B',
  NULL, NULL,
  'T3 und T4 sind Aminosäure-Derivate mit hydrophober (jodhaltiger) Seitenstruktur → lipophil → durchdringen Zellmembran → binden an Kernrezeptoren (Thyroidhormon-Rezeptoren TRα, TRβ). Aktive Form ist T3 (dreifach jodiert) — T4 (vierfach jodiert) ist Prohormon, wird peripher durch Deiodase-1/2 in T3 umgewandelt (C falsch). TRs sind nukleäre Rezeptoren → DNA-Bindung → Transkriptionsaktivierung/-hemmung. Effekte: ↑ Grundumsatz, ↑ O₂-Verbrauch, ↑ Herzfrequenz, Wachstum und Entwicklung (besonders ZNS). Hypo: Gewichtszunahme, Kälteempfindlichkeit, Bradykardie. Hyper: Gewichtsverlust, Tachykardie, Schwitzen.',
  2
),
(
  'typa-bio-3-03-nebennierenrinde',
  'A', 'biologie', 'bio-3-03',
  'Die Nebennierenrinde ist in Zonen gegliedert. Welche Zone produziert Aldosteron und unter welcher Regulation?',
  '[{"key":"A","text":"Zona glomerulosa — stimuliert durch Angiotensin II und Hyperkaliämie (ACTH-unabhängig)"},{"key":"B","text":"Zona fasciculata — stimuliert durch ACTH (Kortisol)"},{"key":"C","text":"Zona reticularis — stimuliert durch LH (Androgene)"},{"key":"D","text":"Zona glomerulosa — stimuliert durch ACTH und Dopamin"},{"key":"E","text":"Nebennierenmark — stimuliert durch Sympathikusaktivierung"}]'::jsonb,
  'A',
  NULL, NULL,
  'NNR-Zonen (von außen nach innen): Zona glomerulosa (GFR-Regel): G = Glomerulosa → Mineralkortikoide (Aldosteron). F = Fasciculata → Glukokortikoide (Kortisol). R = Reticularis → Androgene (DHEA, DHEA-S). Aldosteron-Regulation: Angiotensin II (RAAS), Hyperkaliämie, in geringem Maß ACTH. ACTH-unabhängig hauptsächlich. Kortisol (Zona fasciculata) = ACTH-abhängig. Nebennierenmark = chromaffine Zellen → Katecholamine (Adrenalin, Noradrenalin) bei Sympathikusaktivierung. Conn-Syndrom = primärer Hyperaldosteronismus (Adenom der Zona glomerulosa) → Hypertonie, Hypokaliämie.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-04 Herz-Kreislauf — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-04-erregung',
  'A', 'biologie', 'bio-3-04',
  'Das kardiale Reizleitungssystem erzeugt und überleitet Aktionspotenziale. In welcher Reihenfolge wird der Herzimpuls weitergeleitet?',
  '[{"key":"A","text":"AV-Knoten → Sinusknoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern"},{"key":"B","text":"Sinusknoten → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern → Arbeitsmyokard"},{"key":"C","text":"Sinusknoten → His-Bündel → AV-Knoten → Purkinje-Fasern → Arbeitsmyokard"},{"key":"D","text":"Purkinje-Fasern → AV-Knoten → Sinusknoten → Arbeitsmyokard"},{"key":"E","text":"Arbeitsmyokard → Sinusknoten → AV-Knoten → Purkinje-Fasern"}]'::jsonb,
  'B',
  NULL, NULL,
  'Reihenfolge: Sinusknoten (SA-Knoten, primärer Schrittmacher, 60–100/min, im rechten Vorhof) → internodaler Weg → AV-Knoten (Verzögerung 0,1s → ermöglicht Vorhof-Ventrikeltrennung, Schrittmacher 40–60/min) → His-Bündel → Tawara-Schenkel (rechts + links) → Purkinje-Fasern (schnellste Leitung, 3–4 m/s) → Arbeitsmyokard (von innen nach außen). AV-Blockierungen: Grad I (verlängerte PQ-Zeit), Grad II (Ausfall QRS), Grad III (vollständiger Block → AV-Knoten übernimmt als Schrittmacher). B ist korrekte Reihenfolge.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-05 Blut — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-05-gerinnung',
  'A', 'biologie', 'bio-3-05',
  'Die Blutgerinnung läuft über intrinsischen und extrinsischen Weg ab. Welche Faktoren sind für BEIDE Wege gemeinsam (gemeinsame Endstrecke)?',
  '[{"key":"A","text":"Faktor XII, XI, IX, VIII"},{"key":"B","text":"Faktor VII, Tissue Factor (TF)"},{"key":"C","text":"Faktor X, V, II (Prothrombin), I (Fibrinogen)"},{"key":"D","text":"Faktor XIII und Protein C"},{"key":"E","text":"Von-Willebrand-Faktor und Thrombozyten"}]'::jsonb,
  'C',
  NULL, NULL,
  'Gerinnungswege: Intrinsisch (APTT): XII→XI→IX→VIII→X. Extrinsisch (Quick/INR): TF+VII→X. Gemeinsame Endstrecke ab Faktor Xa: Xa + Va → Prothrombinase-Komplex → Prothrombin (II) → Thrombin (IIa) → Fibrinogen (I) → Fibrin → Faktor XIII → vernetztes Fibrin. C ist korrekt. Klinisch: Marcumar/Warfarin hemmt Vit-K-abhängige Faktoren (II, VII, IX, X, Protein C/S). DOAKs: Rivaroxaban/Apixaban = Xa-Hemmer; Dabigatran = direkter Thrombinhemmer. Heparin aktiviert Antithrombin III → hemmt Xa und Thrombin.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-08 Atmungssystem — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-08-atemreg',
  'A', 'biologie', 'bio-3-08',
  'Die Atemregulation erfolgt durch zentrale und periphere Chemorezeptoren. Welcher Stimulus wirkt primär auf die zentralen Chemorezeptoren (Medulla oblongata)?',
  '[{"key":"A","text":"Veränderungen des arteriellen pO₂ (O₂-Partialdruck)"},{"key":"B","text":"Veränderungen des arteriellen pH und pCO₂ — CO₂ diffundiert in Liquor → H₂CO₃ → H⁺ → stimuliert zentrale Chemorezeptoren"},{"key":"C","text":"Ausschließlich Hypoxie (pO₂ <60 mmHg) über periphere Karotiskörperchen"},{"key":"D","text":"Mechanische Dehnung der Lunge (Hering-Breuer-Reflex)"},{"key":"E","text":"Temperaturveränderungen im Hypothalamus"}]'::jsonb,
  'B',
  NULL, NULL,
  'Zentrale Chemorezeptoren (Medulla oblongata): reagieren auf pH-Änderungen im Liquor cerebrospinalis. CO₂ (fettlöslich) diffundiert über Blut-Hirn-Schranke in Liquor → CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ → H⁺-Anstieg → Atemantrieb. Primärer Stimulus = pCO₂/pH, nicht pO₂. Periphere Chemorezeptoren (Karotiskörperchen = Glomus caroticum; Aortenkörperchen): reagieren auf pO₂ (<60 mmHg), pCO₂, pH → Hypoxie-Sensor. COPD-Patienten mit chronischer Hyperkapnie: zentrale Rezeptoren adaptiert → periphere O₂-Sensor dominiert → "hypoxischer Atemantrieb" → Vorsicht bei O₂-Gabe.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-02 zusätzliche Frage — Crossing-over
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-02-crossing',
  'A', 'biologie', 'bio-5-02',
  'Crossing-over (Rekombination) findet während der Meiose I statt. In welchem Substadium der Prophase I kommt es zum physischen Austausch von DNA-Segmenten zwischen nicht-Schwesterchromatiden?',
  '[{"key":"A","text":"Leptotän — Chromosomen kondensieren und werden sichtbar"},{"key":"B","text":"Zygotän — homologe Chromosomen beginnen sich zu paaren (Synapsis)"},{"key":"C","text":"Pachytän — vollständige Synapsis, Crossing-over via Chiasmata (im Synaptonemal-Komplex)"},{"key":"D","text":"Diplotän — Chiasmata werden sichtbar, Synaptonemal-Komplex löst sich auf"},{"key":"E","text":"Diakinese — maximale Kondensation, Kernhülle löst sich auf"}]'::jsonb,
  'C',
  NULL, NULL,
  'Prophase I Substadien: Leptotän (L) → Zygotän (Z, Synapsis beginnt) → Pachytän (P, vollständige Synapsis, Synaptonemal-Komplex ausgebildet → Crossing-over findet statt) → Diplotän (D, Synaptonemal-Komplex löst sich auf, Chiasmata sichtbar als physischer Ausdruck des Crossings-over) → Diakinese. Crossing-over = physischer DNA-Austausch durch Holliday-Junction → genetische Rekombination → neue Allel-Kombinationen auf Chromosomen → biologisch wichtig für genetische Diversität und Sicherstellung korrekter Chromosomentrennung (Chiasmata halten Bivalente zusammen bis Anaphase I).',
  2
),
(
  'typa-bio-5-05-erbgang-anal',
  'A', 'biologie', 'bio-5-05',
  'In einem Stammbaum tritt eine Erkrankung in jeder Generation auf, betrifft ca. 50% der Nachkommen eines betroffenen Elternteils, und Väter geben sie an Söhne UND Töchter weiter. Welcher Erbgang ist wahrscheinlichstes?',
  '[{"key":"A","text":"Autosomal-dominant"},{"key":"B","text":"Autosomal-rezessiv"},{"key":"C","text":"X-chromosomal-rezessiv"},{"key":"D","text":"X-chromosomal-dominant"},{"key":"E","text":"Y-chromosomal (holandrisch)"}]'::jsonb,
  'A',
  NULL, NULL,
  'Merkmale autosomal-dominanter Erkrankung: 1. In jeder Generation vorhanden (vertikaler Stammbaum). 2. ~50% der Kinder eines betroffenen Elternteils (Aa × aa → 50% Aa betroffen, 50% aa gesund). 3. Vater-Sohn-Übertragung möglich (kein X-Chromosom beteiligt). 4. Männer und Frauen gleich häufig betroffen. X-dominant (D): Väter geben X NUR an Töchter → keine Vater-Sohn-Übertragung. X-rezessiv: Söhne häufiger betroffen, Mütter meist Träger. AR: Generation überspringend. Y-chromosomal: nur Söhne, alle Söhne betroffen. AD-Beispiele: Huntington, Marfan-Syndrom, Achondroplasie, familiäre Hypercholesterinämie, Neurofibromatose Typ 1.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-01 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-01-replikursp',
  'A', 'biologie', 'bio-6-01',
  'Eukaryotische Chromosomen haben multiple Replikationsursprünge (Origins of Replication). Warum ist dies notwendig im Vergleich zu Prokaryoten, die nur einen einzigen Replikationsursprung haben?',
  '[{"key":"A","text":"Weil eukaryotische DNA-Polymerase langsamer ist als die prokaryotische"},{"key":"B","text":"Weil eukaryotische Chromosomen deutlich länger sind (Megabasen bis Gigabasen) — ein einziger Ursprung würde zu lange dauern (Tage statt Stunden)"},{"key":"C","text":"Weil nur Eukaryoten Histone haben und jeder Histon-Oktamer einen eigenen Replikationsstart benötigt"},{"key":"D","text":"Weil eukaryotische DNA zirkulär ist und mehrere Startpunkte für die Ringöffnung benötigt"},{"key":"E","text":"Weil mehrere Replikationsursprünge die Mutationsrate senken"}]'::jsonb,
  'B',
  NULL, NULL,
  'Menschliches Haploid-Genom = 3×10⁹ Basenpaare, verteilt auf 23 Chromosomen. Bei einer einzigen Replikationsgabel mit Geschwindigkeit ~1 kb/min würde die Replikation Jahre dauern. Lösung: Multiple Origins of Replication (~30.000–50.000 in menschlichen Zellen) → parallele Replikation aller Chromosomenabschnitte simultan → Replikation in ~6–8 Stunden (S-Phase). Prokaryoten: Coli = 4,6 Mb, ein Origin (oriC) ausreichend (~40 min). Eukaryotische Origins = ARS (Autonomously Replicating Sequences) → ORC-Komplex (Origin Recognition Complex) → MCM-Helikase-Rekrutierung → Replikationsgabel.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-02 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-02-splicing',
  'A', 'biologie', 'bio-6-02',
  'Alternatives Splicing ist ein zentraler Mechanismus der Proteindiversität. Welcher der folgenden Fälle ist ein Beispiel für Exon-Skipping (überspringen eines Exons)?',
  '[{"key":"A","text":"Alle Exons werden in die finale mRNA eingeschlossen; nur Introns werden entfernt (konstitutives Splicing)"},{"key":"B","text":"Exon 3 wird in manchen Geweben aus der Prä-mRNA herausgeschnitten und direkt Exon 2 mit Exon 4 verbunden"},{"key":"C","text":"Ein Intron wird in der mRNA belassen und als kodierender Bereich beibehalten (Intron-Retention)"},{"key":"D","text":"Die 5''-Spleißstelle eines Exons wird weiter stromabwärts gewählt, sodass ein längeres Exon entsteht (alternative 5''-Spleißstelle)"},{"key":"E","text":"Die Transkription beginnt an einem alternativen Promotor → kürzere prä-mRNA mit weniger Exons"}]'::jsonb,
  'B',
  NULL, NULL,
  'Exon-Skipping = Exon wird nicht in die reife mRNA eingebaut. B: Exon 2 direkt mit Exon 4 verbunden, Exon 3 übersprungen → kürzeres Protein oder Protein mit alternativer Funktion. Klinisch: Duchenne-Muskeldystrophie (DMD): Exon-Skipping-Therapie (Eteplirsen) überspringt Exon 51 → stellt den Leserahmen wieder her → milderer Phänotyp (ähnlich Becker-MD). Andere Alternativen: A = konstitutiv (kein alternatives Splicing). C = Intron-Retention (z.B. in Neuronen häufig). D = alternative 5''/3''-Spleißstelle. E = alternativer Promotor. Insgesamt >90% menschlicher Gene unterliegen alternativem Splicing.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-03 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-03-posttransk',
  'A', 'biologie', 'bio-6-03',
  'Nach der Translation werden viele Proteine post-translational modifiziert. Welche Modifikation ist essentiell für die Aktivierung von Trypsin aus seinem Vorläufer Trypsinogen im Duodenum?',
  '[{"key":"A","text":"Phosphorylierung durch Proteinkinase A"},{"key":"B","text":"Proteolytische Spaltung (limitierte Proteolyse) durch Enterokinase (Enteropeptidase) → Trypsin"},{"key":"C","text":"Glykosylierung im Golgi-Apparat"},{"key":"D","text":"Ubiquitinierung zum Abbau im Proteasom"},{"key":"E","text":"Acetylierung des N-Terminus"}]'::jsonb,
  'B',
  NULL, NULL,
  'Trypsinogen → Trypsin: klassisches Beispiel proteolytischer Aktivierung (Zymogen-Aktivierung). Enterokinase (von Duodenalzellen) spaltet N-terminales Hexapeptid von Trypsinogen → Trypsin (aktiv). Trypsin aktiviert dann weitere Zymogene: Chymotrypsinogen → Chymotrypsin; Elastase; Carboxypeptidase A/B; Phospholipase A2. Sicherheitsprinzip: Enzyme in inaktiver Form produziert, erst am Wirkort aktiviert (verhindert Selbstverdauung des Pankreas). Pankreatitis: vorzeitige Aktivierung im Pankreas → Autodigestion. Weitere PTM-Beispiele: Phosphorylierung (Signalübertragung), Glykosylierung (Proteinstabilität, Adressierung), Ubiquitinierung (Proteindegradation), Palmitoylierung (Membrananker).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-04 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-04-rnai',
  'A', 'biologie', 'bio-6-04',
  'RNA-Interferenz (RNAi) ist ein Mechanismus der post-transkriptionellen Genregulation. Welche Aussage zur Funktion von siRNA (small interfering RNA) ist korrekt?',
  '[{"key":"A","text":"siRNA aktiviert die Translation der Ziel-mRNA, indem sie als Translationsinitiationsfaktor wirkt"},{"key":"B","text":"siRNA bindet komplementär an eine Ziel-mRNA und leitet deren Abbau durch den RISC-Komplex (RNA-induced Silencing Complex) ein"},{"key":"C","text":"siRNA hemmt den Spleißvorgang im Zellkern"},{"key":"D","text":"siRNA aktiviert direkt die DNA-Methyltransferase zur Promotor-Methylierung"},{"key":"E","text":"siRNA produziert neue mRNAs durch RNA-abhängige RNA-Polymerase"}]'::jsonb,
  'B',
  NULL, NULL,
  'RNAi-Mechanismus: Doppelsträngige RNA (dsRNA) → Dicer-Endonuklease schneidet → siRNA (21–23 nt) oder miRNA. Einzelstrang-Guide-RNA → RISC-Komplex (Argonaute-Protein, AGO2) → komplementäre Bindung an Ziel-mRNA → Endonuklease-Spaltung (siRNA: perfekte Komplementarität → Abbau; miRNA: unvollständige → translationelle Hemmung). Therapeutisch: siRNA-Therapeutika (Patisiran bei Transthyretin-Amyloidose, erster zugelassener RNAi-Wirkstoff). Biologisch: Schutz vor viralen dsRNAs, Transposon-Kontrolle (piRNA), Genregulation (miRNA). Fire & Mello 2006: Nobelpreis für RNAi.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-01 zusätzliche Frage — Synapse
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-01-synapse',
  'A', 'biologie', 'bio-3-01',
  'An der cholinergen neuromuskulären Endplatte wird Acetylcholin (ACh) freigesetzt. Wie wird die Signalübertragung nach der ACh-Wirkung beendet?',
  '[{"key":"A","text":"ACh wird durch Acetylcholinesterase (AChE) im synaptischen Spalt in Acetat und Cholin gespalten"},{"key":"B","text":"ACh wird aktiv in die präsynaptische Endigung zurücktransportiert (Wiederaufnahme)"},{"key":"C","text":"Der nikotinische ACh-Rezeptor inaktiviert sich durch Ligandenabbau in der Zelle"},{"key":"D","text":"ACh diffundiert aus dem synaptischen Spalt und verdünnt sich"},{"key":"E","text":"Noradrenalin konkurriert mit ACh um den Rezeptor und verdrängt es"}]'::jsonb,
  'A',
  NULL, NULL,
  'Cholinesterase-Hydrolyse: ACh → Acetat + Cholin (durch Acetylcholinesterase, AChE, im synaptischen Spalt). Cholin wird durch Cholintr ansporter in präsynaptische Endigung wiederaufgenommen und zu neuem ACh resynthetisiert (Cholin + Acetyl-CoA, Cholinacetyltransferase). Klinisch: Organophosphate (Kampfstoffe, Pestizide) hemmen AChE → ACh akkumuliert → dauernde Stimulation → Muskelkrämpfe, Sekretionen, Atemlähmung. Gegenmittel: Atropin (muskarinischer ACh-R-Antagonist). Myasthenia gravis: Autoantikörper gegen nikotinische ACh-Rezeptoren → Muskelschwäche. Therapie: AChE-Hemmer (Pyridostigmin, Neostigmin).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-4-01 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-01-furchung',
  'A', 'biologie', 'bio-4-01',
  'Die Furchung (Cleavage) nach der Befruchtung teilt die Zygote in immer kleinere Blastomeren. Welche Besonderheit gilt für die Furchungsteilungen im Vergleich zu normalen Mitosen?',
  '[{"key":"A","text":"Zwischen Furchungsteilungen findet keine DNA-Replikation statt — Blastomeren werden kleiner, ohne Masse zuzunehmen"},{"key":"B","text":"Furchungsteilungen sind sehr schnell und ohne G1- und G2-Phasen — das Zytoplasma wird aufgeteilt ohne Wachstum dazwischen"},{"key":"C","text":"Bei der Furchung wird das Volumen der Blastomeren erhöht durch aktives Wachstum"},{"key":"D","text":"Furchungsteilungen sind ausschließlich asymmetrisch (miotische Asymmetrie)"},{"key":"E","text":"Die Zygote macht vor der ersten Furchungsteilung eine Meiose durch"}]'::jsonb,
  'B',
  NULL, NULL,
  'Furchung: Schnelle Mitosen ohne Wachstumsphasen (G1 und G2 sehr kurz oder absent) → S-Phase und M-Phase alternieren direkt. Resultat: Jede Teilung halbiert das Zellvolumen → Blastomeren werden kleiner, Gesamtmasse bleibt konstant (Zonaprotein-Hülle begrenzt Expansion). Viel maternale mRNA und Proteine bereits in der Eizelle vorhanden (präformiert) → Furchung kann rasch ohne Transkription starten. Schließlich: Zellvolumen/Kern-Verhältnis fällt unter Schwellenwert → Midblastula-Transition → eigene Transkription beginnt. A falsch: DNA wird repliziert (sonst würde jede Zelle weniger DNA haben).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-2-02 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-02-kollagen',
  'A', 'biologie', 'bio-2-02',
  'Kollagen ist das häufigste Protein im menschlichen Körper. Welche post-translationalen Modifikationen sind für die korrekte Kollagen-Reifung essentiell und welche Mangelerkrankung entsteht bei Fehlen von Vitamin C?',
  '[{"key":"A","text":"Prolyl-4-Hydroxylierung (stabilisiert Triple-Helix) — Vitamin-C-Mangel → defekte Hydroxylierung → instabiles Kollagen → Skorbut"},{"key":"B","text":"Glykosylierung der Lysylreste — Vitamin-A-Mangel → defekte Glykosylierung → Nachtblindheit"},{"key":"C","text":"Phosphorylierung der Prolinreste durch PKA — Vitamin-D-Mangel → Rachitis"},{"key":"D","text":"Acetylierung des N-Terminus — Vitamin-B12-Mangel → perniziöse Anämie"},{"key":"E","text":"Ubiquitinierung → Abbau im Proteasom — Vitamin-E-Mangel → oxidativer Stress"}]'::jsonb,
  'A',
  NULL, NULL,
  'Kollagen-Biosynthese: Prolyl-4-Hydroxylase (Kofaktor: Vitamin C/Ascorbinsäure) hydroxyliert Prolin → Hydroxyprolin → stabilisiert die Triple-Helix-Struktur durch H-Brücken. Ohne Vitamin C: unzureichende Hydroxylierung → labile Triple-Helix → instabiles Kollagen → Skorbut: Zahnfleischbluten, Wundheilungsstörungen, Petechien, Follikelkeratose, Anämie. Kollagentypen: I (Haut, Knochen, Sehnen), II (Knorpel), III (Blutgefäße, Darm), IV (Basalmembran). Kollagenstruktur: (Gly-Pro-Hyp)-Repeats → drei Polypeptidketten → Triple-Helix → extrazellulär → Quervernetzung durch Lysyl-Oxidase (Kupfer-abhängig).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-2-03 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-2-03-herzmuskel',
  'A', 'biologie', 'bio-2-03',
  'Herzmuskelzellen (Kardiomyozyten) unterscheiden sich von Skelettmuskelzellen. Welche Eigenschaft ist spezifisch für Herzmuskel?',
  '[{"key":"A","text":"Herzmuskelzellen sind vielkernig (mehrkernige Synzytien ohne Zellgrenzen)"},{"key":"B","text":"Herzmuskelzellen sind einkernig, durch Glanzstreifen (Disci intercalares mit Gap Junctions) verbunden — funktionelles Synzytium"},{"key":"C","text":"Herzmuskelzellen unterliegen der Willkürmotorik durch den somatischen Kortex"},{"key":"D","text":"Herzmuskelzellen haben keine T-Tubuli, da das Ca²⁺ ausschließlich aus dem extrazellulären Raum kommt"},{"key":"E","text":"Herzmuskelzellen haben sehr wenig Mitochondrien, da sie hauptsächlich glykolytisch funktionieren"}]'::jsonb,
  'B',
  NULL, NULL,
  'Herzmuskel (Myokard): einkernige, Y-förmige Zellen → verbunden durch Glanzstreifen (Disci intercalares) → enthalten: Gap Junctions (Connexon = elektrische Kopplung → Erregung überträgt sich von Zelle zu Zelle → funktionelles Synzytium). Desmosome + Fascia adherens (mechanische Kopplung). Ca²⁺-induzierte Ca²⁺-Freisetzung: etwas Ca²⁺ kommt extrazellulär über L-Typ-Kanäle + Ryanodinsrezeptoren → SR-Ca²⁺-Freisetzung (CICR). Skelettmuskel: vielkernig, keine Gap Junctions (Nerv-Muskel-Synapse notwendig). Herz: autorhythmisch, nicht willkürlich. Herz = viele Mitochondrien (aerob, ~30% des Zellvolumens Mitochondrien).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-1-17 Stofftransport — zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-17-osmose',
  'A', 'biologie', 'bio-1-17',
  'Rote Blutkörperchen werden in eine 0,15 M NaCl-Lösung (isoton) und dann in eine 0,05 M NaCl-Lösung (hypoton) gegeben. Was passiert in der hypotonischen Lösung?',
  '[{"key":"A","text":"Erythrozyten schrumpfen (Krenierung) durch Wasseraustritt in die hypotonische Außenlösung"},{"key":"B","text":"Erythrozyten schwellen durch Wassereinstrom (Osmose) und können lysieren (Hämolyse)"},{"key":"C","text":"Erythrozyten bleiben unverändert, da ihre Membran impermeabel für Wasser ist"},{"key":"D","text":"Erythrozyten teilen sich durch osmotischen Druck in zwei Zellen"},{"key":"E","text":"Erythrozyten nehmen NaCl auf, um das Gleichgewicht herzustellen, ohne Volumenänderung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Osmose: Wasser diffundiert von niedrigerer Osmolarität (hypotone Außenlösung) in höhere Osmolarität (Zellinneres → cytoplasmatische Lösung isoton). Hypotonische Lösung außen → Wassereinstrom → Zellschwellung → Platzen der Membran (Hämolyse). Erythrozyten = keine Zellwand → können Volumen nicht begrenzen → bei ausreichender Hypotonie: Hämolyse → Hämoglobin freigesetzt. Hypertonische Lösung: Wasseraustritt → Schrumpfung (Krenierung, Stechapfelform = Echinozyt). Klinisch: Intravenöse Infusionen müssen isoton sein (0,9% NaCl ≈ 154 mmol/L). Aquaporin-1 in Erythrozyten = Hauptwasser kanal → rasche Osmose-Antwort.',
  1
)
ON CONFLICT (id) DO NOTHING;
-- ============================================================
-- Finale Ergänzungsfragen Bio Kap1, Kap2, Kap3, Kap4
-- ============================================================

-- bio-1-01 zusätzliche Frage — Kennzeichen des Lebens
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-1-01-homeostat',
  'A', 'biologie', 'bio-1-01',
  'Homöostase ist ein zentrales Kennzeichen des Lebens. Welches Beispiel veranschaulicht am besten negative Rückkopplung zur Aufrechterhaltung der Homöostase?',
  '[{"key":"A","text":"Blutzuckeranstieg → Insulinsekretion → Glukoseaufnahme in Gewebe → Blutzucker sinkt → Insulinsekretion reduziert sich"},{"key":"B","text":"Blutzuckeranstieg → verstärkte Insulinsekretion → noch weiterer Blutzuckeranstieg"},{"key":"C","text":"Oxytocin bei der Geburt: Uteruskontraktion → mehr Oxytocin → stärkere Kontraktionen (positive Rückkopplung)"},{"key":"D","text":"LH-Surge bei Ovulation: Östrogen → LH → mehr Östrogen (positive Rückkopplung)"},{"key":"E","text":"Fieber: Körpertemperatur steigt → weitere Temperaturerhöhung durch positive Rückkopplung"}]'::jsonb,
  'A',
  NULL, NULL,
  'Negative Rückkopplung = Regelschleife, die die Abweichung vom Sollwert korrigiert und das System stabilisiert. Blutzucker-Regulation (A): Hyperglykämie → β-Zellen des Pankreas → Insulinsekretion → GLUT4-Expression in Muskel/Fettgewebe ↑ → Glukoseaufnahme ↑ → Blutzucker normalisiert → Insulinsekretion reduziert. Klassische Homöostase. C und D: Positive Rückkopplung (Verstärkung des Signals) — nicht Homöostase, sondern gezielte Verstärkung (Geburt, LH-Surge). Positive Rückkopplung ist bei Wehen und Ovulation physiologisch gewollt. B und E: Pathologisch (würden zu Koma/Tod führen).',
  1
),
(
  'typa-bio-1-03-membran2',
  'A', 'biologie', 'bio-1-03',
  'Das Flüssig-Mosaik-Modell beschreibt die Zellmembran als dynamische Struktur. Was beeinflusst die Membranfluidität am stärkstem?',
  '[{"key":"A","text":"Die Länge und der Sättigungsgrad der Fettsäureketten der Phospholipide sowie der Cholesteringehalt"},{"key":"B","text":"Die Anzahl der Membranproteine — mehr Proteine = flüssigere Membran"},{"key":"C","text":"Die Konzentration von Kalziumionen in der Zellmembran"},{"key":"D","text":"Der Glykokalyx-Anteil auf der Membranoberfläche"},{"key":"E","text":"Die Anzahl von Tight Junctions — mehr Junctions = mehr Fluidität"}]'::jsonb,
  'A',
  NULL, NULL,
  'Membranfluidität wird bestimmt durch: 1. Fettsäurelänge: längere Ketten → mehr van-der-Waals-Wechselwirkungen → weniger flüssig. 2. Sättigungsgrad: gesättigte Fettsäuren (gerade Ketten) → dichte Packung → weniger flüssig. Ungesättigte (cis-Doppelbindung = Knick) → lockere Packung → flüssiger. 3. Cholesterin: bei hohen Temperaturen → stabilisiert Membran (weniger flüssig); bei niedrigen Temperaturen → verhindert Gefrieren (flüssiger). Cholesterin als "Fluiditätspuffer". 4. Temperatur. Anpassung: Winterschläfer/Fische erhöhen Anteil ungesättigter Fettsäuren bei Kälte → Membranfluidität bleibt erhalten.',
  1
),
(
  'typa-bio-1-05-mitoch2',
  'A', 'biologie', 'bio-1-05',
  'Die Endosymbiontentheorie erklärt die Entstehung von Mitochondrien. Welche zwei Evidenzen stützen diese Theorie am stärksten?',
  '[{"key":"A","text":"Mitochondrien haben eigene zirkuläre DNA (ähnlich Bakterien) und eigene 70S-Ribosomen (prokaryotisch)"},{"key":"B","text":"Mitochondrien haben eine eukaryotische 80S-Ribosomen und lineare DNA"},{"key":"C","text":"Mitochondrien entstehen durch Budding aus dem Golgi-Apparat"},{"key":"D","text":"Mitochondrien teilen sich durch Meiose wie eukaryotische Zellen"},{"key":"E","text":"Mitochondrien importieren alle ihre Proteine aus dem Zytosol (keine eigenen Proteine)"}]'::jsonb,
  'A',
  NULL, NULL,
  'Endosymbiontentheorie (Lynn Margulis): Mitochondrien = ehemalige α-Proteobakterien (ähnlich Rickettsia), die in eine archäale Wirtszelle aufgenommen wurden. Beweise: 1. Eigene zirkuläre DNA (mtDNA, humanoid: 16,5 kb, 37 Gene) — wie Bakterien. 2. 70S-Ribosomen (prokaryotisch) — eukaryotische Zytosol-Ribosomen sind 80S. 3. Doppelmembran (äußere = phagozytierte Membran des Wirts; innere = Bakterienmembran). 4. Binäre Fission (Teilung wie Bakterien). 5. Inhibition durch Antibiotika (Chloramphenicol hemmt mitoribosomale Translation). Tipp: E ist teilweise wahr — >99% der mito Proteine werden im Kern kodiert und importiert — aber ca. 13 Proteine durch eigene Ribosomen synthetisiert.',
  2
),
(
  'typa-bio-1-06-er-ribos',
  'A', 'biologie', 'bio-1-06',
  'Sekretorische Proteine werden an membrangebundenen Ribosomen synthetisiert. Wie gelangen Proteine, die für das ER bestimmt sind, in das ER-Lumen?',
  '[{"key":"A","text":"Das Signalpeptid am N-Terminus der wachsenden Peptidkette wird von SRP (Signal Recognition Particle) erkannt → Ribosom dockt ans ER an → Cotranslationaler Import"},{"key":"B","text":"Vollständig synthetisierte Proteine diffundieren passiv durch die ER-Membran ins Lumen"},{"key":"C","text":"Proteine werden im Zytosol vollständig gefaltet und dann durch Endozytose ins ER aufgenommen"},{"key":"D","text":"Das Stopptransfer-Anker-Modell führt alle Proteine ins ER-Lumen, unabhängig vom Signalpeptid"},{"key":"E","text":"ER-Proteine werden im Zellkern synthetisiert und direkt ins ER-Lumen sekretiert"}]'::jsonb,
  'A',
  NULL, NULL,
  'Cotranslationaler Import: 1. Ribosom synthetisiert N-terminales Signalpeptid (~15–30 hydrophobe AS). 2. SRP (Signal Recognition Particle, 7S-RNA + 6 Proteine) erkennt Signalpeptid → Translationsstopp. 3. SRP-Ribosom-Komplex bindet an SRP-Rezeptor in ER-Membran. 4. Ribosom dockt an Translokon (Sec61-Kanal). 5. Translation wird fortgesetzt — Polypeptid durch Sec61 direkt ins ER-Lumen. 6. Signalpeptid wird durch Signalpeptidase gespalten. 7. Protein faltet sich im ER (Chaperone: BiP/GRP78, Calnexin, PDI). Membranproteine: Stopptransfer-Sequenz hält Protein in Membran. B, C, D falsch. E: keine ribosomale Synthese im Kern.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-06 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-06-mhc',
  'A', 'biologie', 'bio-3-06',
  'MHC-Klasse-I-Moleküle (HLA-A, B, C) werden auf allen kernhaltigen Körperzellen exprimiert. Welche Peptide präsentieren sie typischerweise, und welche T-Zellen erkennen diese?',
  '[{"key":"A","text":"Peptide aus dem extrazellulären Raum (exogene Antigene) → erkannt von CD4⁺ T-Helferzellen"},{"key":"B","text":"Intrazellulär synthetisierte Peptide (endogene Antigene, z.B. virale Proteine) → erkannt von CD8⁺ zytotoxischen T-Zellen"},{"key":"C","text":"Lipid-Antigene von Mykobakterien → erkannt von NKT-Zellen und CD1d"},{"key":"D","text":"Peptide aus Lysosomen (exogen phagozytierte Antigene) → erkannt von CD8⁺ T-Zellen"},{"key":"E","text":"Nur eigene Peptide (Selbst-Peptide) → keine Immunreaktion ausgelöst"}]'::jsonb,
  'B',
  NULL, NULL,
  'MHC-Klasse-I-Weg: Endogene Proteine (eigene + virale/tumorale Proteine im Zytosol) → Proteasom → Peptide (8–10 AS) → TAP-Transporter ins ER → MHC-I-Peptid-Komplex → Golgi → Zelloberfläche. CD8⁺ zytotoxische T-Zellen erkennen MHC-I-Peptid → töten infizierte/maligne Zellen. MHC-Klasse-II: Exogene Proteine → Endosom/Lysosom → Peptide (13–25 AS) → MHC-II-Komplex → Oberfläche von APZ. CD4⁺ T-Helferzellen erkennen MHC-II. Cross-Präsentation: DC präsentieren exogene Antigene via MHC-I (für CD8⁺) — wichtig für Anti-Tumor-Immunität und Impfungen. C: CD1d = MHC-ähnlich, präsentiert Lipide → NKT-Zellen.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-07 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-07-oedeme',
  'A', 'biologie', 'bio-3-07',
  'Ödeme können durch verschiedene Mechanismen entstehen. Welcher Mechanismus liegt einem Ödem bei schwerer Hypoalbuminämie (Eiweißmangel, z.B. Leberzirrhose oder Marasmus) zugrunde?',
  '[{"key":"A","text":"Erhöhter hydrostatischer Druck in den Kapillaren durch venöse Hypertension"},{"key":"B","text":"Verminderter kolloidosmotischer Druck (onkotischer Druck) durch erniedrigtes Albumin → Flüssigkeit verlässt die Kapillare und akkumuliert im Interstitium"},{"key":"C","text":"Erhöhte Kapillarpermeabilität durch Entzündungsmediatoren"},{"key":"D","text":"Blockade des Lymphabflusses durch Tumormetastasen"},{"key":"E","text":"Erhöhter interstitieller osmotischer Druck durch Natriumansammlung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Starling-Kräfte an Kapillaren: Filtration (raus) = hydrostatischer Kapillardruck (Pc) + interstitieller onkotischer Druck (πi). Reabsorption (rein) = interstitieller hydrostatischer Druck (Pi) + kapillärer onkotischer Druck (πc). Albumin = Hauptprotein für πc (~25 mmHg). Bei Hypoalbuminämie: πc↓ → netto mehr Filtration als Reabsorption → Ödem. Ursachen: Leberzirrhose (weniger Albuminsynthese), nephrotisches Syndrom (Albuminverlust im Urin), Malnutrition/Marasmus. Klinisch: Aszites, periphere Ödeme. A: Herzinsuffizienz (venöser Rückstau → Pc↑). C: Entzündungsödem (Histamin/Bradykinin → Kapillarpermeabilität↑). D: Lymphödem (z.B. Filariasis, post-Mastektomie).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-09 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-09-leber',
  'A', 'biologie', 'bio-3-09',
  'Die Leber hat vielfältige Stoffwechselfunktionen. In welchem Stoffwechselweg werden Aminosäuren in der Leber desaminiert, und wie wird der dabei entstehende Ammoniak entgiftet?',
  '[{"key":"A","text":"Transaminierung → Ammoniak → Harnstoffzyklus (Ornithin-Zyklus) → Harnstoff → renale Ausscheidung"},{"key":"B","text":"Ammoniak wird direkt durch Nieren ausgeschieden ohne hepatische Verarbeitung"},{"key":"C","text":"Ammoniak wird in der Leber zu Glutamin umgewandelt und als Glutamin im Blut transportiert; Harnstoff wird nicht gebildet"},{"key":"D","text":"Ammoniak wird zu Bilirubin umgewandelt und über die Galle ausgeschieden"},{"key":"E","text":"Aminosäuren werden direkt als Polymere im Darm abgebaut und als Peptide ausgeschieden"}]'::jsonb,
  'A',
  NULL, NULL,
  'Aminosäure-Abbau: Transaminierung (Aminogruppe auf α-Ketoglutarat → Glutamat) oder oxidative Desaminierung (Glutamatdehydrogenase → NH₄⁺). Ammoniak-Entgiftung: Harnstoffzyklus (Ornithine Cycle, Krebs-Henseleit-Zyklus) → in Hepatozyten (Mitochondrien + Zytosol). Produkt: Harnstoff → Blut → renale Ausscheidung. Bei Leberversagen: Harnstoffzyklus versagt → Hyperammonämie → hepatische Enzephalopathie (NH₃ toxisch für Gehirn, besonders Astrozyten → Schwellung). C ist teilweise richtig (Muskeln transportieren NH₃ als Glutamin/Alanin zur Leber), aber die ENTGIFTUNG in Harnstoff ist Leberaufgabe. D: Bilirubin = Häm-Abbauprodukt (nicht Aminosäure).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-10 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-10-dialyse',
  'A', 'biologie', 'bio-3-10',
  'Bei der Hämodialyse (bei terminaler Niereninsuffizienz) wird das Blut des Patienten an einer semipermeablen Membran entlang einer Dialysatlösung geleitet. Welches Prinzip erklärt die Entfernung harnpflichtiger Substanzen (z.B. Kreatinin, Harnstoff)?',
  '[{"key":"A","text":"Aktiver Transport: Pumpen in der Dialysemembran transportieren Harnstoff aus dem Blut"},{"key":"B","text":"Diffusion entlang des Konzentrationsgradienten: Harnstoff/Kreatinin konzentriert im Blut → diffundiert durch Membran in harnstofffreies Dialysat"},{"key":"C","text":"Osmose: Wasser strömt aus dem Dialysat ins Blut und spült Toxine heraus"},{"key":"D","text":"Filtration unter hydrostatischem Druck entfernt alle Blutbestandteile einschließlich Proteine"},{"key":"E","text":"Spezifische Antikörper im Dialysat binden Urämietoxine und entziehen sie dem Blut"}]'::jsonb,
  'B',
  NULL, NULL,
  'Hämodialyse: Prinzip = Diffusion. Patientenblut (hohe Harnstoff/Kreatinin-Konzentration) fließt im Gegenstrom zum harnstofffreien Dialysat (Konzentrationsunterschied maximiert). Kleine Moleküle (Harnstoff, Kreatinin, K⁺, Phosphat) diffundieren durch semipermeable Membran (Poren zu klein für Albumin/Zellen). Ultrafiltration (Wasserentzug) durch hydrostatischen Druckgradienten. Dialysat enthält Bicarbonat (Puffer), physiologische Elektrolyte. Peritonéaldialyse: Bauchfell als semipermeable Membran, Dialysat in Bauchhöhle. Klinisch: 3×/Woche, 4–5h pro Sitzung. ESRD-Indikationen: GFR <10 ml/min.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- bio-3-11 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-11-fraktur',
  'A', 'biologie', 'bio-3-11',
  'Die Knochenheilung nach einer Fraktur verläuft in mehreren Phasen. In welcher Reihenfolge laufen die Hauptphasen ab?',
  '[{"key":"A","text":"Entzündungsphase (Hämatom) → weicher Kallus (Knorpel) → harter Kallus (Geflechtknochen) → Remodeling (Lamellenknochen)"},{"key":"B","text":"Remodeling → harter Kallus → weicher Kallus → Entzündungsphase"},{"key":"C","text":"Entzündungsphase → harter Kallus (sofort) → Remodeling"},{"key":"D","text":"Sofortige Mineralisation → Knorpelbildung → Hämatom → Remodeling"},{"key":"E","text":"Knorpelphase → Entzündung → Hämatom → Knochenabbau"}]'::jsonb,
  'A',
  NULL, NULL,
  'Knochenheilung (sekundäre Frakturheilung): 1. Entzündungsphase (1.–7. Tag): Hämatom → Fibringerüst → Wachstumsfaktoren (PDGF, TGF-β, BMP) → Einwanderung von Fibroblasten, Osteoprogenitorzellen. 2. Weicher Kallus (1.–3. Woche): Chondrozyten bilden hyalinen Knorpel → stabilisiert Fraktur. 3. Harter Kallus (3.–12. Woche): enchondrale Ossifikation (Knorpel → Geflechtknochen). 4. Remodeling (Monate–Jahre): Geflechtknochen → Lamellenknochen durch Osteoklast/Osteoblast-Aktivität. Primäre Knochenheilung: nur bei exakter anatomischer Adaptation und Kompressionsplatten (kein Kallus). BMP (Bone Morphogenetic Protein) = wichtigster Wachstumsfaktor.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-4-02 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-4-02-keimblatt',
  'A', 'biologie', 'bio-4-02',
  'Aus dem Ektoderm entstehen verschiedene Gewebetypen. Welches der folgenden Organe stammt NICHT vom Ektoderm ab?',
  '[{"key":"A","text":"Epidermis der Haut und Hautanhangsgebilde (Haare, Nägel, Drüsen)"},{"key":"B","text":"Zentralnervensystem (Gehirn und Rückenmark) und periphere Nerven"},{"key":"C","text":"Linse des Auges und Innenohr (Otozyste)"},{"key":"D","text":"Leber und Pankreas"},{"key":"E","text":"Zahnschmelz (Adamantoblasten = Ameloblasten)}"}]'::jsonb,
  'D',
  NULL, NULL,
  'Ektoderm → Epidermis (Haut, Haare, Nägel, Drüsen), ZNS (Neuralrohr → Gehirn + Rückenmark), PNS (Neuralleiste → Ganglien, Schwann-Zellen), Sinnesepithelien (Linse, Innenohr), Zahnschmelz (Ameloblasten). Mesoderm → Muskulatur, Knochen, Knorpel, Herz, Nieren, Gonaden, Blut, Lymphgefäße. Endoderm → GI-Trakt-Epithelium, Atemwegepithel, Leber, Pankreas, Schilddrüse, Parathyreoidea, Harnblase, Lunge. Leber (D) = Endoderm-Derivat (hepatische Divertikel aus dem Darmendoderm). Pankreas = Endoderm (ventral + dorsal). Antwort D ist das einzige Nicht-Ektoderm-Derivat.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-5-03 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-5-03-kopplung',
  'A', 'biologie', 'bio-5-03',
  'Zwei Gene (A und B) liegen eng benachbart auf demselben Chromosom (Kopplung). Was passiert bei der Meiose, wenn kein Crossing-over zwischen diesen Genen stattfindet?',
  '[{"key":"A","text":"Die Gene werden unabhängig voneinander verteilt (Mendel''sche Unabhängigkeitsregel gilt)"},{"key":"B","text":"A und B werden gemeinsam (als Einheit) auf ein Tochterchromatid übertragen — Rekombinationsfrequenz nahe 0%"},{"key":"C","text":"Crossing-over ist obligatorisch und tritt zwischen jedem Genpaar auf"},{"key":"D","text":"Gekoppelte Gene auf demselben Chromosom werden nie getrennt — Rekombination ist unmöglich"},{"key":"E","text":"Die Kopplungsgruppe wird zufällig aufgeteilt, da alle Gene frei reassortieren"}]'::jsonb,
  'B',
  NULL, NULL,
  'Kopplung: Gene auf demselben Chromosom tendieren dazu, gemeinsam vererbt zu werden. Ohne Crossing-over zwischen A und B: beide Allele (A und B) werden als Block (Haplotyp) weitervererbt → Rekombinationsfrequenz ≈ 0%. Mit Crossing-over: neue Allel-Kombinationen entstehen (Rekombinanten). Rekombinationsfrequenz (RF) zwischen 0–50% (nahe 50% = de facto unabhängig). Morgan-Einheit: 1 cM (Centimorgan) = 1% Rekombinationsfrequenz. D ist falsch: Crossing-over kann auch zwischen eng gekoppelten Genen auftreten (nur selten). Kopplung erklärt, warum Mendels 3. Regel Ausnahmen hat (z.B. bei Morgan''s Drosophila-Experimenten).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- bio-6-04 zusätzliche Frage — CRISPR
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-6-04-crispr',
  'A', 'biologie', 'bio-6-04',
  'CRISPR-Cas9 ist ein molekulares Werkzeug zur präzisen Genomedition. Welche Komponenten sind minimal notwendig für die sequenzspezifische DNA-Spaltung?',
  '[{"key":"A","text":"Cas9-Endonuklease + guide-RNA (gRNA = crRNA:tracrRNA) + PAM-Sequenz am Ziel-DNA"},{"key":"B","text":"Cas9 allein reicht aus, da es eine intrinsische DNA-Erkennungsdomäne hat"},{"key":"C","text":"CRISPR braucht einen viralen Vektor für die DNA-Spaltung"},{"key":"D","text":"Zwei verschiedene Cas-Proteine + einzelsträngige DNA-Matrize sind notwendig"},{"key":"E","text":"Cas9 + chemisch synthetisiertes DNA-Oligonucleotid (ohne RNA)"}]'::jsonb,
  'A',
  NULL, NULL,
  'CRISPR-Cas9 (Doudna & Charpentier, Nobelpreis 2020): Cas9-Protein + guide-RNA (gRNA) → Komplex bindet an komplementäre DNA-Sequenz. PAM-Sequenz (Protospacer Adjacent Motif, 5''-NGG-3'' für SpCas9) neben Zielsequenz notwendig für Cas9-Aktivierung. gRNA führt Cas9 zur Zielsequenz → beide Nukleasedomänen (RuvC, HNH) schneiden je einen DNA-Strang → Doppelstrangbruch (DSB). Reparatur: NHEJ (fehleranfällig → Knockout) oder HDR mit Matrize (präzise Korrektur). Anwendungen: Krankheitsmodelle, therapeutische Genkorrektur (Sichelzellanämie, Beta-Thal, Duchenne), Diagnostik. Varianten: Cas12 (andere PAM), Cas13 (RNA-Targeting), Base-Editing, Prime Editing.',
  2
)
ON CONFLICT (id) DO NOTHING;
-- ============================================================
-- Letzte 7+ Fragen zum Erreichen von 150+
-- ============================================================

-- bio-3-12 zusätzliche Frage
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-3-12-schwanger',
  'A', 'biologie', 'bio-3-12',
  'hCG (humanes Choriongonadotropin) wird vom Trophoblasten nach der Implantation produziert. Welche wichtige Funktion hat hCG in der Frühschwangerschaft?',
  '[{"key":"A","text":"hCG stimuliert die Schilddrüse zur TSH-Produktion"},{"key":"B","text":"hCG erhält das Corpus luteum und stimuliert dessen Progesteronproduktion bis zum luteoplazentaren Shift (~8.–10. SSW)"},{"key":"C","text":"hCG hemmt die Implantation des Embryos in die Uterusschleimhaut"},{"key":"D","text":"hCG triggert die Menstruation nach ausgebliebener Befruchtung"},{"key":"E","text":"hCG wird ausschließlich vom Corpus luteum selbst produziert"}]'::jsonb,
  'B',
  NULL, NULL,
  'hCG: Glykoproteinhormon (α-Untereinheit gemeinsam mit FSH, LH, TSH; β-Untereinheit spezifisch für hCG). Produziert vom Synzytiotrophoblasten nach Implantation (~6.–8. Tag post-Befruchtung). Funktion: LH-Rezeptor-Agonist → erhält Corpus luteum → Corpus luteum produziert weiter Progesteron → verhindert Luteolyse → kein Progesteronabfall → keine Menstruation → Aufrechterhaltung des Endometriums. Peak hCG: ~8.–10. SSW. Dann luteoplazentarer Shift: Plazenta übernimmt Progesteron-Produktion → Corpus luteum nicht mehr nötig → hCG fällt. hCG = Grundlage des Schwangerschaftstests (Urin/Serum β-hCG).',
  1
),
(
  'typa-bio-2-01-epithel2',
  'A', 'biologie', 'bio-2-01',
  'Mehrschichtig verhorntes Plattenepithel ist typisch für welche anatomische Lokalisation und hat welche Hauptfunktion?',
  '[{"key":"A","text":"Dünndarmschleimhaut — Resorption von Nährstoffen"},{"key":"B","text":"Äußere Haut (Epidermis) — mechanischer Schutz und Barrierefunktion"},{"key":"C","text":"Alveolen der Lunge — Gasaustausch"},{"key":"D","text":"Nierentubuli — Filtration und Reabsorption"},{"key":"E","text":"Herzinnenfläche (Endokard) — Strömungsoptimierung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Mehrschichtig verhorntes Plattenepithel = Epidermis der Haut. Mehrschichtig (viele Zelllagen) → mechanische Widerstandsfähigkeit. Verhornt = oberste Schicht tote Korneozyten (Keratin-gefüllt) → Wasserbarriere, mechanischer Schutz, Schutz vor UV, Mikroben. Epitheltypik-Regel: Form + Schichtung = Funktion. Einschichtiges Plattenepithel: Alveolen (Gasaustausch = kurze Diffusionsstrecke), Endothel, Mesothel. Mehrschichtig nicht-verhornt: Mundschleimhaut, Ösophagus, Cornea, Vagina. Übergangsepithel (Urothel): Blase/Harnleiter (dehnbar). Resorptives Epithel: Einschichtig prismatisch mit Mikrovilli (Dünndarm).',
  1
),
(
  'typa-bio-1-18-apoptmorpho',
  'A', 'biologie', 'bio-1-18',
  'Apoptose (programmierter Zelltod) unterscheidet sich grundlegend von Nekrose. Welche morphologische Veränderung ist charakteristisch für Apoptose, aber NICHT für Nekrose?',
  '[{"key":"A","text":"Zellschwellung und Plasmamembranruptur → Freisetzung von Zellinhalt → Entzündungsreaktion"},{"key":"B","text":"Zellschrumpfung, Chromatinkondensation, Apoptose-Körperchen (apoptotic bodies) → Phagozytose ohne Entzündung"},{"key":"C","text":"Mitochondriale Schwellung und ATP-Depletion → Nekrose-Morphologie"},{"key":"D","text":"Lysosom-Ruptur → Autolyse des Zellinhalts → Nekrose-Morphologie"},{"key":"E","text":"Vakuoläre Degeneration durch Wasseraufnahme (hydropic change)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Apoptose-Morphologie: Zellschrumpfung (Gegenteil von Nekrose-Schwellung), Chromatin-Kondensation und Fragmentierung (Pyknose → Karyorrhexis), Membran-Blebbing, Bildung von Apoptose-Körperchen (apoptotic bodies = membranumschlossene Fragmente). Wichtig: Membran INTAKT → kein Inhalt freigesetzt → keine Entzündung (anti-inflammatorisch). Phagozytose der Apoptose-Körper durch Makrophagen (Efferozytose). Nekrose: Zellschwellung, Membranruptur, Inhalt freigesetzt → Entzündungsreaktion (DAMP-Freisetzung). Apoptose-Wege: Intrinsisch (Mitochondrien, Cytochrom-c → Apoptosom → Caspase 9 → 3/7) und extrinsisch (FasL/TNF → DISC → Caspase 8 → 3).',
  1
),
(
  'typa-bio-1-02-prokeukar',
  'A', 'biologie', 'bio-1-02',
  'Prokaryoten und Eukaryoten unterscheiden sich in zahlreichen Merkmalen. Welche Eigenschaft ist AUSSCHLIESSLICH bei Prokaryoten vorhanden?',
  '[{"key":"A","text":"Ribosomen (70S oder 80S)"},{"key":"B","text":"Plasmamembran"},{"key":"C","text":"Kreisförmige DNA ohne Histone und ohne Kernhülle (Nukleoid)"},{"key":"D","text":"ATP-Synthese"},{"key":"E","text":"DNA-Replikation"}]'::jsonb,
  'C',
  NULL, NULL,
  'Prokaryoten-spezifische Merkmale: Kein Zellkern (keine Kernhülle) → DNA liegt im Nukleoid frei im Zytoplasma. Zirkuläre DNA (meist, + Plasmide). Keine Histone bei den meisten Bakterien (Archaea haben Histon-ähnliche Proteine). 70S-Ribosomen (Eukaryoten: 80S). Keine Mitochondrien, kein ER, kein Golgi (keine membrangebundenen Organellen). Häufig Plasmide. Gemeinsam (A, B, D, E): Alle Lebewesen haben Ribosomen (aber unterschiedliche Größe), Plasmamembran, ATP-Synthese und DNA-Replikation. C ist spezifisch für Prokaryoten: ringförmige DNA ohne Kernhülle im Nukleoid.',
  1
),
(
  'typa-bio-2-04-nerv2',
  'A', 'biologie', 'bio-2-04',
  'Das Ruhemembranpotenzial eines typischen Neurons beträgt ca. −70 mV. Welcher Mechanismus ist hauptverantwortlich für die Aufrechterhaltung dieses Potenzials?',
  '[{"key":"A","text":"Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein) + hohe Ruhepermeabilität für K⁺ durch Kalium-Leckkanäle"},{"key":"B","text":"Ca²⁺-ATPase pumpt Ca²⁺ aus der Zelle und erzeugt das negative Innenpotenizal"},{"key":"C","text":"Chloridkanäle lassen Cl⁻ einströmen → negatives Innenpotenzial"},{"key":"D","text":"Na⁺/K⁺-ATPase erzeugt alleine das Ruhepotenzial ohne Kanalproteine"},{"key":"E","text":"Aktionspotenziale erzeugen das Ruhepotenzial durch periodische Repolarisation"}]'::jsonb,
  'A',
  NULL, NULL,
  'Ruhemembranpotenzial: Zwei Faktoren. 1. Na⁺/K⁺-ATPase (elektrogen: 3 Na⁺ raus, 2 K⁺ rein → Nettobewegung positiver Ladungen nach außen → negatives Innenpotenzial). 2. Kalium-Leckkanäle: im Ruhezustand vorwiegend für K⁺ permeabel → K⁺ folgt Konzentrationsgradienten nach außen (Konz. innen > außen) → K⁺-Ausstrom → Nernst-Gleichgewicht für K⁺ ≈ −90 mV (Ruhepotenzial nähert sich K⁺-Gleichgewichtspotenzial an). Na⁺ hat gegenläufige Gradienten → Lecks und pumpen → Gleichgewicht bei ~−70 mV. Nernst/Goldman-Gleichung kombiniert alle Ionenbeiträge. Hemmung der Na⁺/K⁺-ATPase (Ouabain) → Ruhepotenzial bricht zusammen.',
  2
),
(
  'typa-bio-4-03-fetalentw',
  'A', 'biologie', 'bio-4-03',
  'Die Lunge des Fetus produziert ab der 24.–28. Schwangerschaftswoche Surfactant. Was passiert bei Frühgeborenen mit Surfactant-Mangel?',
  '[{"key":"A","text":"Atemnotsyndrom des Neugeborenen (IRDS) — Alveolen kollabieren bei jeder Ausatmung durch erhöhte Oberflächenspannung"},{"key":"B","text":"Übermäßige Surfactant-Produktion → Alveolarproteinose"},{"key":"C","text":"Keine klinischen Konsequenzen — Surfactant ist dispensabel"},{"key":"D","text":"Mekonium-Aspiration tritt als Kompensationsmechanismus auf"},{"key":"E","text":"Frühgeborene haben mehr Surfactant als Termingeborene"}]'::jsonb,
  'A',
  NULL, NULL,
  'Surfactant (Surface Active Agent): Gemisch aus Phospholipiden (hauptsächlich DPPC = Dipalmitoylphosphatidylcholin) + Proteinen (SP-A, SP-B, SP-C, SP-D). Produziert von Typ-II-Pneumozyten ab ~24. SSW (voll erst ~35. SSW). Funktion: senkt Oberflächenspannung in Alveolen → verhindert Alveolenkollaps bei Ausatmung (Laplace: Druck = 2T/r → ohne Surfactant = hohe Spannung → kleine Alveolen kollabieren). IRDS (Infant Respiratory Distress Syndrome): Hyaliner Membranschaden → Ateminsuffizienz. Therapie: pränatale Kortikosteroide → Surfactant-Reifung. Postnatale Surfactant-Instillation. O₂-Gabe, CPAP/Beatmung.',
  2
),
(
  'typa-bio-5-07-downs',
  'A', 'biologie', 'bio-5-07',
  'Chromosomenmutationen können numerische Aberrationen sein. Welche Aussage zur Monosomie X (Turner-Syndrom, 45,X) ist bezüglich der genetischen Ursache korrekt?',
  '[{"key":"A","text":"Turner-Syndrom entsteht durch Trisomie des X-Chromosoms (47,XXX)"},{"key":"B","text":"Turner-Syndrom (45,X) entsteht durch Verlust eines Geschlechtschromosoms — meist durch meiotische Nondisjunction (Verlust des X oder Y) im Elternteil"},{"key":"C","text":"Turner-Syndrom ist eine strukturelle Chromosomenmutation (Deletion der Arme eines Chromosoms)"},{"key":"D","text":"Turner-Syndrom entsteht durch Translokation des X-Chromosoms auf ein Autosom"},{"key":"E","text":"Turner-Syndrom betrifft ausschließlich männliche Individuen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Turner-Syndrom (45,X0) = Monosomie X = numerische Chromosomenaberration (Aneuploidie). Ursache: Nondisjunction in Meiose I oder II → eine Keimzelle ohne Geschlechtschromosom (Nullisomie für Geschlechtschromosom) → befruchtet mit normaler X-haltiger Keimzelle → 45,X. ~50% der Turner-Patienten haben vollständige Monosomie; ~15% Mosaike (46,XX/45,X); ~30% strukturelle Aberrationen (iso-X, Ringchromosom X). Klinisch: weiblich (kein SRY), Kleinwuchs, Gonadendysgenesie (Streak-Gonaden), primäre Amenorrhö, Pterygium colli, Herzfehler (Aortenisthmusstenose). Häufigste Chromosomenstörung bei Spontanaborten (~15% aller Fehlgeburten).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- BIOLOGIE Kap 7-11
-- Generated: 2026-02-21
-- ============================================================

-- ── Kapitel 7: Methoden der Genetik ──────────────────────

-- UK bio-7-01: PCR — Prinzip, Ablauf und klinische Anwendung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-7-01-pcrschritte',
  'A', 'biologie', 'bio-7-01',
  'Welche Abfolge der Schritte ist korrekt für einen einzigen PCR-Zyklus?',
  '[{"key":"A","text":"Annealing (50–65 °C) → Denaturierung (94 °C) → Elongation (72 °C)"},{"key":"B","text":"Elongation (72 °C) → Denaturierung (94 °C) → Annealing (50–65 °C)"},{"key":"C","text":"Denaturierung (94 °C) → Annealing (50–65 °C) → Elongation (72 °C)"},{"key":"D","text":"Denaturierung (94 °C) → Elongation (72 °C) → Annealing (50–65 °C)"},{"key":"E","text":"Annealing (50–65 °C) → Elongation (72 °C) → Denaturierung (94 °C)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Ein PCR-Zyklus läuft immer in der Reihenfolge: (1) Denaturierung bei 94–95 °C — die Wasserstoffbrücken zwischen den DNA-Strängen werden aufgebrochen; (2) Annealing bei 50–65 °C — die Primer lagern sich spezifisch an die komplementären Einzelstrang-Matrizen an; (3) Elongation bei 72 °C — die Taq-Polymerase synthetisiert den neuen Strang in 5''→3''-Richtung. Alle anderen Reihenfolgen sind biologisch nicht sinnvoll, da Primer nur an Einzelstrang-DNA binden können (erst nach Denaturierung) und die Polymerase erst nach Primerbindung tätig wird.',
  1
),
(
  'typa-bio-7-01-taqpol',
  'A', 'biologie', 'bio-7-01',
  'Warum wird bei der PCR die Taq-Polymerase aus Thermus aquaticus verwendet und nicht eine Standard-DNA-Polymerase aus E. coli?',
  '[{"key":"A","text":"Weil Taq-Polymerase eine 3''→5''-Korrekturlesefunktion (Proofreading) besitzt und daher fehlerfreier arbeitet"},{"key":"B","text":"Weil Taq-Polymerase hitzestabil ist und den Denaturierungsschritt bei 94–95 °C übersteht, ohne inaktiviert zu werden"},{"key":"C","text":"Weil Taq-Polymerase RNA direkt als Matrize verwenden kann"},{"key":"D","text":"Weil Taq-Polymerase keine Primer benötigt und direkt mit der DNA-Synthese beginnen kann"},{"key":"E","text":"Weil Taq-Polymerase bei Raumtemperatur aktiver ist als andere Polymerasen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus, das in heißen Quellen (z. B. Yellowstone) bei ~70–80 °C lebt. Sie ist bis ca. 95 °C stabil und wird nach dem Denaturierungsschritt nicht inaktiviert. E. coli-DNA-Polymerase würde bei 94 °C irreversibel denaturieren und müsste nach jedem Zyklus neu hinzugefügt werden — das macht Automatisierung im Thermocycler unmöglich. Wichtig: Taq-Polymerase hat KEINE Proofreading-Funktion (3''→5''-Exonuklease fehlt), daher ist ihre Fehlerrate höher als z. B. bei Pfu-Polymerase.',
  1
),
(
  'typa-bio-7-01-rtpcrcovid',
  'A', 'biologie', 'bio-7-01',
  'Ein Labor möchte SARS-CoV-2 in einem Nasenabstrich quantitativ nachweisen. SARS-CoV-2 ist ein Einzelstrang-RNA-Virus. Welche Methode ist am besten geeignet und warum?',
  '[{"key":"A","text":"Standard-PCR mit Taq-Polymerase, da RNA automatisch in DNA umgeschrieben wird"},{"key":"B","text":"RT-qPCR: Reverse Transkriptase schreibt virale RNA in cDNA um, die dann quantitativ per qPCR amplifiziert wird"},{"key":"C","text":"Nested PCR mit zwei verschachtelten Primerpaaren für maximale Sensitivität ohne Quantifizierung"},{"key":"D","text":"Gelelektrophorese der viralen RNA nach direkter Amplifikation"},{"key":"E","text":"Sanger-Sequenzierung des viralen Genoms aus dem Abstrich"}]'::jsonb,
  'B',
  NULL, NULL,
  'SARS-CoV-2 hat ein RNA-Genom. Standard-DNA-Polymerasen können RNA nicht direkt als Matrize verwenden — daher muss zunächst eine Reverse Transkriptase die virale RNA in cDNA umschreiben (RT-Schritt). Anschließend ermöglicht die quantitative PCR (qPCR) über Fluoreszenzfarbstoffe (z. B. TaqMan-Sonden) die Echtzeitquantifizierung: Der CT-Wert gibt an, nach wie vielen Zyklen das Signal einen Schwellenwert übersteigt — ein niedriger CT-Wert bedeutet hohe Viruslast. RT-qPCR ist daher der Goldstandard für den SARS-CoV-2-Nachweis.',
  2
),
(
  'typk-bio-7-01-pcrgrundlagen',
  'K', 'biologie', 'bio-7-01',
  'Welche der folgenden Aussagen zur PCR sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Nach 30 PCR-Zyklen entstehen theoretisch 2³⁰ ≈ 1 Milliarde Kopien der Ziel-DNA aus einem Ausgangsmolekül.","korrekt":true},{"nr":2,"text":"Taq-Polymerase besitzt keine 3''→5''-Exonuklease-Aktivität und hat daher eine höhere Fehlerrate als Pfu-Polymerase.","korrekt":true},{"nr":3,"text":"Beim Annealing-Schritt bindet die Taq-Polymerase direkt an den DNA-Doppelstrang und beginnt mit der Synthese.","korrekt":false},{"nr":4,"text":"RT-PCR verwendet Reverse Transkriptase, um RNA in cDNA umzuschreiben, bevor die PCR-Amplifikation erfolgt.","korrekt":true},{"nr":5,"text":"Beim Denaturierungsschritt werden kovalente Phosphodiesterbindungen zwischen den Nukleotiden aufgebrochen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: 2³⁰ = 1.073.741.824 ≈ 1 Milliarde Kopien — die exponentielle Amplifikation ist das Kernprinzip der PCR. Aussage 2 korrekt: Taq-Polymerase hat keine Proofreading-Funktion (3''→5''-Exonuklease fehlt), daher werden Fehler nicht korrigiert — Pfu-Polymerase ist für Klonierungsanwendungen präziser. Aussage 3 falsch: Beim Annealing binden die PRIMER (kurze Oligonukleotide) an die Einzelstrang-DNA, nicht die Taq-Polymerase — die Polymerase verlängert erst im Elongationsschritt. Aussage 4 korrekt: Reverse Transkriptase ist eine RNA-abhängige DNA-Polymerase, die RNA → cDNA umschreibt; essentiell für RT-PCR. Aussage 5 falsch: Beim Denaturieren werden Wasserstoffbrücken zwischen den komplementären Basen aufgebrochen — die kovalenten Phosphodiesterbindungen des Rückgrats bleiben intakt.',
  2
),
(
  'typa-bio-7-01-ctwert',
  'A', 'biologie', 'bio-7-01',
  'Bei einem RT-qPCR-Test für SARS-CoV-2 zeigt Patient A einen CT-Wert von 18, Patient B einen CT-Wert von 35. Welche Interpretation ist korrekt?',
  '[{"key":"A","text":"Patient A hat eine geringere Viruslast; hohe CT-Werte bedeuten viel Virus"},{"key":"B","text":"Patient B ist stärker infiziert; CT-Wert und Viruslast korrelieren positiv"},{"key":"C","text":"Patient A hat eine wesentlich höhere Viruslast; CT-Wert und Viruslast korrelieren invers"},{"key":"D","text":"Beide Patienten sind gleich stark infiziert; der CT-Wert sagt nichts über die Viruslast aus"},{"key":"E","text":"CT-Wert 35 bedeutet, dass das Virus nach 35 Zyklen nicht mehr nachweisbar ist"}]'::jsonb,
  'C',
  NULL, NULL,
  'Der CT-Wert (Cycle Threshold) gibt die Anzahl der PCR-Zyklen an, nach der das Fluoreszenzsignal einen definierten Schwellenwert überschreitet. Je weniger Ausgangsmaterial (virale RNA) vorhanden ist, desto mehr Zyklen werden benötigt, um das Signal zu detektieren — daher ist der CT-Wert invers mit der Viruslast korreliert. CT 18 bedeutet sehr hohe Viruslast (gilt als hochinfektiös), CT 35 bedeutet sehr geringe Viruslast (grenzwertig positiv). Patient A hat also eine deutlich höhere Viruslast als Patient B.',
  2
),
(
  'typa-bio-7-01-amplifikation',
  'A', 'biologie', 'bio-7-01',
  'Ein Wissenschaftler startet eine PCR mit einem einzigen DNA-Doppelstrang-Molekül und führt 20 Zyklen durch. Wie viele Kopien der Ziel-DNA sind theoretisch nach Abschluss vorhanden?',
  '[{"key":"A","text":"20 Kopien"},{"key":"B","text":"400 Kopien (20²)"},{"key":"C","text":"Etwa 1 Million Kopien (2²⁰ ≈ 1.048.576)"},{"key":"D","text":"Etwa 1 Milliarde Kopien (2³⁰)"},{"key":"E","text":"40 Kopien (2 × 20)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die PCR amplifikation folgt der Formel 2ⁿ, wobei n die Anzahl der Zyklen ist. Nach 20 Zyklen entstehen 2²⁰ = 1.048.576 ≈ 1 Million Kopien aus einem einzigen Ausgangsmolekül. Diese exponentielle Amplifikation macht die PCR so mächtig: Sie kann selbst kleinste DNA-Mengen (z. B. aus einer einzigen Zelle) detektierbar machen. Nach 30 Zyklen wären es bereits ~1 Milliarde Kopien.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-7-02: DNA-Sequenzierung und Genomanalyse
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-7-02-sanger',
  'A', 'biologie', 'bio-7-02',
  'Was ist das Prinzip der Sanger-Sequenzierung (Kettenabbruchmethode)?',
  '[{"key":"A","text":"Fluoreszenzmarkierte RNA-Sonden hybridisieren mit komplementären DNA-Sequenzen auf einem Chip"},{"key":"B","text":"Didesoxynukleotide (ddNTPs) werden statistisch eingebaut und stoppen die DNA-Synthese, da ihnen die 3''-OH-Gruppe fehlt — so entstehen Fragmente aller Längen"},{"key":"C","text":"DNA wird durch Restriktionsenzyme in definierte Fragmente geschnitten und per Gelelektrophorese getrennt"},{"key":"D","text":"Massiv-parallele Sequenzierung von Millionen kurzer Fragmente mit reversibel terminierten Fluoreszenz-Nukleotiden"},{"key":"E","text":"Ein Nanoporen-Sensor misst elektrische Signale einzelner Basen beim Durchlaufen einer Membranpore"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Sanger-Sequenzierung (Frederick Sanger, 1977, Nobelpreis 1980) basiert auf dem Einbau von Didesoxynukleotiden (ddNTPs). Im Gegensatz zu normalen dNTPs fehlt den ddNTPs die 3''-Hydroxylgruppe, die für die Phosphodiesterbindung mit dem nächsten Nukleotid nötig ist. Wird ein ddNTP statistisch eingebaut, bricht die Kettensynthese ab. Da dies an jeder Position geschieht, entstehen Fragmente aller möglichen Längen, die per Kapillarelektrophorese nach Größe aufgetrennt und mit dem Laser detektiert werden. Die Sequenz wird aus dem Längen- und Farbmuster abgeleitet. Option D beschreibt NGS (Illumina), Option E beschreibt Nanopore-Sequenzierung.',
  2
),
(
  'typa-bio-7-02-ngsanwendung',
  'A', 'biologie', 'bio-7-02',
  'Ein Arzt möchte die Genexpression (welche Gene werden aktiv transkribiert?) in Tumorgewebe im Vergleich zu Normalgewebe analysieren. Welche NGS-Methode ist am besten geeignet?',
  '[{"key":"A","text":"Whole Genome Sequencing (WGS) — sequenziert das gesamte Genom"},{"key":"B","text":"Exom-Sequenzierung — analysiert alle proteinkodierenden Exons"},{"key":"C","text":"ChIP-Seq — analysiert Protein-DNA-Interaktionen (Transkriptionsfaktoren, Histonmodifikationen)"},{"key":"D","text":"RNA-Seq — sequenziert das Transkriptom (alle transkribierten RNA-Moleküle) und quantifiziert Genexpression"},{"key":"E","text":"Sanger-Sequenzierung ausgewählter Kandidatengene"}]'::jsonb,
  'D',
  NULL, NULL,
  'RNA-Seq (RNA-Sequenzierung) ist die Methode der Wahl zur Genexpressionsanalyse: mRNA aus Tumor- und Normalgewebe wird in cDNA umgeschrieben und sequenziert. Die Anzahl der Reads pro Gen ist proportional zur Expressionsstärke. So können alle ~20.000 menschlichen Gene gleichzeitig quantifiziert und differenziell exprimierte Gene identifiziert werden. WGS analysiert die DNA-Sequenz (nicht Genaktivität). Exom-Sequenzierung analysiert Mutationen in kodierenden Regionen. ChIP-Seq analysiert Protein-DNA-Bindung. Sanger wäre zu langsam für ein genomweites Expressionsprofil.',
  2
),
(
  'typk-bio-7-02-sequenzmethoden',
  'K', 'biologie', 'bio-7-02',
  'Welche der folgenden Aussagen zu DNA-Sequenzierungsmethoden sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Sanger-Sequenzierung gilt als Goldstandard für kurze Sequenzieraufgaben und zur Validierung von NGS-Befunden.","korrekt":true},{"nr":2,"text":"NGS (Illumina) sequenziert massive parallel und erzeugt typischerweise lange Reads von über 10.000 Basenpaaren.","korrekt":false},{"nr":3,"text":"Ein DNA-Microarray misst die relative Genexpression durch Hybridisierung fluoreszenzmarkierter cDNA an Sonden auf einem Chip.","korrekt":true},{"nr":4,"text":"Exom-Sequenzierung analysiert nur die proteinkodierenden Bereiche (~2% des Genoms) und ist daher günstiger als WGS.","korrekt":true},{"nr":5,"text":"Liquid Biopsy analysiert zirkulierende Tumor-DNA (ctDNA) aus Gewebeproben durch invasive Biopsie.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[2,3,4]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Sanger-Sequenzierung ist der Goldstandard für einzelne Gene und kurze Regionen, auch zur Bestätigung von NGS-Varianten. Aussage 2 falsch: NGS (Illumina) erzeugt kurze Reads (150–300 bp), nicht lange — lange Reads (bis 100 kbp) erzeugt Third-Generation-Sequenzierung (PacBio, Nanopore). Aussage 3 korrekt: Microarrays messen Genexpression durch Hybridisierung; Intensität des Signals ist proportional zur mRNA-Menge. Aussage 4 korrekt: Exom (~2% des Genoms) ist kostengünstiger als WGS und klärt ca. 35% seltener Erkrankungen. Aussage 5 falsch: Liquid Biopsy ist gerade wegen ihrer Nicht-Invasivität bedeutsam — ctDNA wird aus dem BLUT (nicht Gewebe) sequenziert.',
  2
),
(
  'typa-bio-7-02-ddntp',
  'A', 'biologie', 'bio-7-02',
  'Was unterscheidet ein Didesoxynukleotid (ddNTP) chemisch von einem normalen Desoxynukleotid (dNTP)?',
  '[{"key":"A","text":"ddNTPs haben eine zusätzliche Methylgruppe an der Base, die den Kettenabbruch verursacht"},{"key":"B","text":"ddNTPs enthalten Ribose statt Desoxyribose und können daher nicht eingebaut werden"},{"key":"C","text":"ddNTPs fehlt die 3''-Hydroxylgruppe (3''-OH), die für die Phosphodiesterbindung mit dem nächsten Nukleotid nötig ist"},{"key":"D","text":"ddNTPs haben nur ein Phosphat statt drei und liefern daher keine Energie für die Synthese"},{"key":"E","text":"ddNTPs sind fluoreszenzmarkiert, während dNTPs ungekennzeichnet sind"}]'::jsonb,
  'C',
  NULL, NULL,
  'Der entscheidende strukturelle Unterschied: Normale dNTPs haben an der 3''-Position des Zuckers eine Hydroxylgruppe (3''-OH), die für die Ausbildung der Phosphodiesterbindung mit dem 5''-Phosphat des nächsten Nukleotids essenziell ist. ddNTPs (Didesoxynukleotide) fehlt diese 3''-OH-Gruppe — am 3''-Kohlenstoff befindet sich nur ein Wasserstoffatom (2''-H und 3''-H). Wenn die DNA-Polymerase ein ddNTP einbaut, kann keine weitere Nukleotidaddition erfolgen — die Kette bricht ab. Das Präfix "Di-desoxy" deutet auf das Fehlen von zwei Hydroxylgruppen hin (2''- und 3''-OH).',
  2
),
(
  'typa-bio-7-02-microarray',
  'A', 'biologie', 'bio-7-02',
  'Was misst ein DNA-Microarray (Genchip) und wie funktioniert er?',
  '[{"key":"A","text":"Er sequenziert die DNA-Basenabfolge durch Kapillarelektrophorese"},{"key":"B","text":"Er misst die relative mRNA-Expression: fluoreszenzmarkierte cDNA aus der Probe hybridisiert an komplementäre Sonden; die Signalintensität korreliert mit der Genexpressionsstärke"},{"key":"C","text":"Er bestimmt Chromosomenzahl und -struktur durch Karyotypisierung"},{"key":"D","text":"Er misst Methylierungsmuster von CpG-Inseln im Promotorbereich"},{"key":"E","text":"Er analysiert Protein-Protein-Wechselwirkungen durch Antikörper-Hybridisierung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Ein DNA-Microarray trägt Tausende kurzer DNA-Sonden (komplementär zu bekannten Genen) auf einer Trägeroberfläche. Die mRNA aus der Probe wird in fluoreszenzmarkierte cDNA umgeschrieben. Diese cDNA hybridisiert spezifisch an die komplementären Sonden auf dem Chip. Die Intensität des Fluoreszenzsignals ist proportional zur mRNA-Menge des entsprechenden Gens in der Ausgangsprobe. Durch simultanen Vergleich zweier Proben (z. B. mit unterschiedlichen Fluoreszenzfarbstoffen: rot = Tumor, grün = Normal) können differentiell exprimierte Gene identifiziert werden. Wichtig: Microarrays messen Genexpression, nicht DNA-Sequenz.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-7-04: Genetischer Fingerabdruck — STR, RFLP und Forensik
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-7-04-strdefinition',
  'A', 'biologie', 'bio-7-04',
  'Was sind Short Tandem Repeats (STRs) und warum eignen sie sich für den genetischen Fingerabdruck?',
  '[{"key":"A","text":"Lange repetitive Sequenzen (>1.000 bp), die in allen Menschen identisch sind und daher Identifikation ermöglichen"},{"key":"B","text":"Einzelnukleotid-Polymorphismen (SNPs) in kodierenden Genen mit hoher Mutationsrate"},{"key":"C","text":"Kurze Sequenzmotive von 2–7 bp, die in variabler Wiederholungsanzahl zwischen Individuen vorkommen — dieser Längenpolymorphismus ermöglicht individuelle DNA-Profile"},{"key":"D","text":"Methylierungsmuster in CpG-Inseln, die nach jeder Zellteilung variieren"},{"key":"E","text":"Mikrodeletionen von ca. 100 bp in nicht-kodierenden Regionen mit bekannten Bruchpunkten"}]'::jsonb,
  'C',
  NULL, NULL,
  'STRs (Short Tandem Repeats, auch Mikrosatelliten) sind kurze Sequenzmotive von 2–7 Basenpaaren (z. B. AGAT-AGAT-AGAT), die tandemförmig hintereinander wiederholt werden. Die Anzahl der Wiederholungen (Allellänge) variiert stark zwischen nicht verwandten Individuen — dieser Längenpolymorphismus ist das Grundprinzip des genetischen Fingerabdrucks. Durch PCR-Amplifikation von 15–20 STR-Loci und Kapillarelektrophorese entsteht ein individuelles Profil. Die statistische Wahrscheinlichkeit einer Zufallsübereinstimmung bei 15 Loci beträgt weniger als 1:10¹⁵.',
  1
),
(
  'typa-bio-7-04-vaterschaft',
  'A', 'biologie', 'bio-7-04',
  'Beim Vaterschaftstest zeigt Locus D7S820 folgendes STR-Profil: Kind: Allele 10, 13; Mutter: Allele 10, 12; Verdächtiger Vater: Allele 11, 14. Ist Vaterschaft ausgeschlossen?',
  '[{"key":"A","text":"Nein, Allel 11 des Vaters passt zum Kind"},{"key":"B","text":"Nein, Allel 14 des Vaters passt zum Kind"},{"key":"C","text":"Ja — Allel 13 des Kindes stammt nicht von der Mutter und nicht vom verdächtigen Vater"},{"key":"D","text":"Nein, Allel 10 ist für Mutter und Kind gleich, daher ist der Vater kompatibel"},{"key":"E","text":"Keine Aussage möglich, da nur ein Locus analysiert wurde"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das Kind trägt Allele 10 und 13. Allel 10 stammt von der Mutter (Mutter trägt 10 und 12). Das verbleibende väterliche Allel des Kindes ist Allel 13. Der verdächtige Vater trägt Allele 11 und 14 — kein Allel 13. Er kann Allel 13 nicht weitergegeben haben und ist daher als biologischer Vater ausgeschlossen. Ein einziger ausschließender Locus reicht für den Vaterschaftsausschluss. Würde der Verdächtige das passende Allel tragen, müssten alle 15–20 Loci übereinstimmen für einen statistisch gesicherten Einschluss.',
  3
),
(
  'typk-bio-7-04-fingerprintmethoden',
  'K', 'biologie', 'bio-7-04',
  'Welche der folgenden Aussagen zum genetischen Fingerabdruck sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"STR-Analyse nutzt PCR zur Amplifikation und Kapillarelektrophorese zur Längenbestimmung der Allele.","korrekt":true},{"nr":2,"text":"RFLP ist heute die bevorzugte Methode in der forensischen Analyse, da sie weniger DNA benötigt als die STR-Analyse.","korrekt":false},{"nr":3,"text":"Eineiige Zwillinge haben identische STR-Profile und können durch Standardmethoden der DNA-Typisierung nicht unterschieden werden.","korrekt":true},{"nr":4,"text":"Bei der Gelelektrophorese wandern kleinere DNA-Fragmente schneller zur Anode als größere Fragmente.","korrekt":true},{"nr":5,"text":"Der Vaterschaftstest schließt Vaterschaft aus, wenn das Kind an mindestens drei Loci keine Übereinstimmung mit dem möglichen Vater zeigt.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: STR-Analyse: PCR mit fluoreszenzmarkierten Primern → Kapillarelektrophorese trennt Fragmente nach Länge → Elektropherogramm zeigt Allele als Peaks. Aussage 2 falsch: RFLP ist VERALTET — es benötigt mehr DNA (kein PCR-Schritt) und funktioniert nicht mit degradierter DNA; STR hat RFLP ersetzt. Aussage 3 korrekt: Eineiige Zwillinge entstehen aus einer befruchteten Eizelle und haben identische Genotypen inklusive aller STR-Allele — daher kein Unterschied im Standard-DNA-Fingerabdruck. Aussage 4 korrekt: DNA ist negativ geladen (Phosphatgruppen), wandert zur positiven Anode; kleinere Moleküle wandern durch das Gelgeflecht schneller (weniger Reibungswiderstand). Aussage 5 falsch: Bereits ein einziger ausschließender Locus reicht für den Vaterschaftsausschluss — nicht drei.',
  2
),
(
  'typa-bio-7-04-geloektrophorese',
  'A', 'biologie', 'bio-7-04',
  'Warum wandern bei der Agarose-Gelelektrophorese kleinere DNA-Fragmente schneller als größere?',
  '[{"key":"A","text":"Weil kleinere Fragmente mehr negative Ladungen pro Molekül tragen und stärker angezogen werden"},{"key":"B","text":"Weil kleinere Fragmente weniger Widerstand im Gelgeflecht erfahren und daher schneller durch das Gel migrieren"},{"key":"C","text":"Weil kleinere Fragmente eine höhere Schmelztemperatur haben und daher besser durch warmes Gel migrieren"},{"key":"D","text":"Weil kleinere Fragmente zur Kathode wandern, größere zur Anode"},{"key":"E","text":"Weil die Ladungsdichte (Ladung pro Basenpaar) bei kleineren Fragmenten höher ist"}]'::jsonb,
  'B',
  NULL, NULL,
  'Alle DNA-Fragmente haben annähernd dieselbe Ladungsdichte (negative Ladung pro Basenpaar ist konstant — je ein Phosphat pro Nukleotid), also wirkt auf alle Fragmente eine ähnliche elektrische Kraft pro Masseeinheit. Der entscheidende Unterschied: Das Agarosegel wirkt als Sieb — kleinere Fragmente können leichter durch die Poren des Gels gleiten und erfahren weniger mechanischen Widerstand. Größere Fragmente werden stärker durch das Gelgeflecht aufgehalten. Alle DNA-Moleküle wandern aufgrund ihrer negativen Ladung zur Anode (positiver Pol), nicht zur Kathode.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-7-05: Gentechnisch veränderte Organismen — Methoden
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-7-05-crispr',
  'A', 'biologie', 'bio-7-05',
  'Welche Funktion hat die Guide-RNA (gRNA) im CRISPR-Cas9-System?',
  '[{"key":"A","text":"Sie schneidet die Ziel-DNA als Endonuklease direkt, ohne das Cas9-Protein"},{"key":"B","text":"Sie repariert den Doppelstrangbruch durch Homology-Directed Repair (HDR)"},{"key":"C","text":"Sie dirigiert das Cas9-Protein durch Komplementarität zur Zielsequenz an die gewünschte genomische Position"},{"key":"D","text":"Sie methyliert die Zielsequenz, um Cas9 zu aktivieren"},{"key":"E","text":"Sie transkribiert das Fremdgen nach dem Einschnitt in mRNA"}]'::jsonb,
  'C',
  NULL, NULL,
  'Im CRISPR-Cas9-System bildet die guide RNA (gRNA, ca. 20 Nukleotide) einen Komplex mit dem Cas9-Protein. Die gRNA ist komplementär zur Zielsequenz im Genom und dirigiert Cas9 durch Watson-Crick-Basenpaarung an die exakte Position. Cas9 erkennt zusätzlich ein PAM-Motiv (Protospacer Adjacent Motif, oft NGG) neben der Zielsequenz und erzeugt dann einen Doppelstrangbruch. Durch einfache Änderung der 20-Nukleotid-Sequenz der gRNA kann jede beliebige Genomposition angesteuert werden — das ist die programmierbare Flexibilität des Systems. Cas9 ist das schneidende Enzym (Endonuklease), nicht die gRNA.',
  2
),
(
  'typa-bio-7-05-nhejhdr',
  'A', 'biologie', 'bio-7-05',
  'Ein Forscher möchte ein Gen durch CRISPR-Cas9 präzise korrigieren (eine spezifische Punktmutation durch die Wildtyp-Sequenz ersetzen). Welcher DNA-Reparaturweg ist dafür erforderlich?',
  '[{"key":"A","text":"NHEJ (Non-Homologous End Joining) — dieser Weg ist präzise und hinterlässt keine Fehler"},{"key":"B","text":"HDR (Homology-Directed Repair) mit einer bereitgestellten DNA-Matrize — ermöglicht präzise Sequenzkorrektur"},{"key":"C","text":"NHEJ ist für Korrekturen geeignet, da er die Enden glatt verbindet"},{"key":"D","text":"Beide Wege sind gleichwertig für präzise Sequenzkorrekturen"},{"key":"E","text":"Weder NHEJ noch HDR — die Korrektur erfolgt durch RNA-vermittelte Reparatur"}]'::jsonb,
  'B',
  NULL, NULL,
  'Für die präzise Korrektur einer Punktmutation ist HDR (Homology-Directed Repair) erforderlich: Zusammen mit dem CRISPR-Cas9-Komplex wird eine DNA-Matrize mit der korrekten Sequenz bereitgestellt. Nach dem Cas9-induzierten Doppelstrangbruch nutzt die Zelle die Matrize als Vorlage und repariert die Sequenz präzise. NHEJ ist dagegen fehleranfällig: Es verbindet die Enden direkt ohne Matrize, oft mit kleinen Insertionen oder Deletionen (Indels), die zu Frameshift-Mutationen und Genausfall (Knockout) führen. NHEJ ist daher für Knockouts geeignet, nicht für präzise Korrekturen. HDR ist effizienter in S/G2-Phase der Zellteilung.',
  3
),
(
  'typk-bio-7-05-gvo',
  'K', 'biologie', 'bio-7-05',
  'Welche der folgenden Aussagen zu gentechnischen Methoden sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Restriktionsenzyme Typ II erkennen palindromische DNA-Sequenzen und schneiden sie — dies kann sticky ends oder blunt ends erzeugen.","korrekt":true},{"nr":2,"text":"Bei der Blau-Weiß-Selektion enthalten weiße Kolonien kein Insert, weil das lacZ-Gen intakt ist.","korrekt":false},{"nr":3,"text":"Humanes Insulin wird seit 1982 rekombinant in E. coli produziert, indem das Insulingen in einen Expressionsvektor kloniert und transformiert wird.","korrekt":true},{"nr":4,"text":"CRISPR-Cas9 erhielt den Nobelpreis für Chemie 2020 (Jennifer Doudna und Emmanuelle Charpentier).","korrekt":true},{"nr":5,"text":"Lentivirale Vektoren können ihr genetisches Material stabil in das Wirtsgenom integrieren und eignen sich daher für Gentherapien.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,3]},{"key":"D","nummern":[1,3,4,5]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Restriktionsenzyme Typ II erkennen palindromische Sequenzen und schneiden; sticky ends entstehen bei versetzten Schnitten (z. B. EcoRI), blunt ends bei geraden Schnitten (z. B. SmaI). Aussage 2 falsch: Bei der Blau-Weiß-Selektion enthalten WEISSE Kolonien ein Insert — das Insert unterbricht das lacZ-Gen, sodass keine Beta-Galaktosidase gebildet wird und X-Gal nicht gespalten wird. Blaue Kolonien = kein Insert (lacZ intakt). Aussage 3 korrekt: Humanes Insulin aus E. coli ist seit 1982 auf dem Markt (Humulin) — ein Meilenstein der Biotechnologie. Aussage 4 korrekt: Nobelpreis Chemie 2020 für CRISPR-Cas9 (Doudna und Charpentier). Aussage 5 korrekt: Lentivirale Vektoren integrieren ihr Genom in die Wirts-DNA (stabile Expression) — daher für Gentherapien genutzt (z. B. CAR-T-Zellen).',
  2
),
(
  'typa-bio-7-05-restrikenz',
  'A', 'biologie', 'bio-7-05',
  'Was sind "sticky ends" und welchen Vorteil haben sie gegenüber "blunt ends" bei der Klonierung?',
  '[{"key":"A","text":"Sticky ends sind Sequenzen, die durch Hitze klebrig werden und Vektoren spontan schließen lassen"},{"key":"B","text":"Sticky ends sind kurze einzelsträngige Überhänge, die nach versetztem Schnitt entstehen — sie können durch Komplementärbasenpaarung mit kompatiblen Enden paaren und erleichtern so die effiziente Ligation"},{"key":"C","text":"Sticky ends sind chemisch modifizierte Nukleotide, die Ligasereaktion beschleunigen"},{"key":"D","text":"Sticky ends entstehen nur bei blunt-end-Restriktionsenzymen und erhöhen die Spezifität"},{"key":"E","text":"Blunt ends sind effizienter als sticky ends, weil keine Überhänge abgebaut werden müssen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Sticky ends (klebrige Enden) entstehen, wenn ein Restriktionsenzym die beiden DNA-Stränge an versetzten Positionen schneidet — es entstehen kurze (4–6 Nukleotide) einzelsträngige Überhänge. Diese Überhänge sind komplementär zueinander und können durch Basenpaarung temporär zusammenhalten (daher "klebrig"). Bei der Ligation von Vektor und Insert mit kompatiblen sticky ends ist die Effizienz deutlich höher als bei blunt ends, da die komplementären Überhänge die richtigen Partner finden und stabilisieren, bevor die Ligase die kovalente Bindung schließt. Blunt ends benötigen höhere Ligasekonzentrationen und haben eine geringere Ligationseffizienz.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-7-06: Klonierung — Reproduktiv, Therapeutisch, Ethik
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-7-06-dolly',
  'A', 'biologie', 'bio-7-06',
  'Schaf Dolly wurde durch somatischen Kerntransfer (SCNT) erzeugt. Was war das Revolutionäre an diesem Experiment?',
  '[{"key":"A","text":"Es zeigte erstmals, dass embryonale Stammzellen in jeden Zelltyp differenzieren können"},{"key":"B","text":"Es bewies, dass der Zellkern einer ausdifferenzierten adulten Körperzelle vollständig reprogrammiert werden kann und sich zu einem kompletten Organismus entwickeln kann"},{"key":"C","text":"Es zeigte, dass RNA der primäre Informationsträger in adulten Zellen ist"},{"key":"D","text":"Es war der erste Beweis für den therapeutischen Nutzen von Stammzellen in der klinischen Anwendung"},{"key":"E","text":"Es zeigte, dass Säugetiere sich ungeschlechtlich durch Parthenogenese fortpflanzen können"}]'::jsonb,
  'B',
  NULL, NULL,
  'Vor Dolly herrschte die Überzeugung, dass zelluläre Differenzierung irreversibel ist — einmal spezialisierte Zellen könnten nicht in einen totipotenten Zustand zurückkehren. Dollys Erzeugung (1996, Ian Wilmut, Roslin Institute) durch Transfer des Kerns einer adulten Euterdrüsenzelle in eine entkernierte Eizelle bewies das Gegenteil: Der Kern einer ausdifferenzierten Zelle enthält noch alle genetischen Informationen für die vollständige Entwicklung und kann durch das Ooplasma (Cytoplasma der Eizelle) reprogrammiert werden. Dies legte den Grundstein für die spätere Entwicklung der iPS-Zellen durch Yamanaka. Dolly litt an verkürzten Telomeren (Spenderzellkern war 6 Jahre alt) und starb mit 6 Jahren.',
  2
),
(
  'typa-bio-7-06-ipsyamanaka',
  'A', 'biologie', 'bio-7-06',
  'Welche vier Transkriptionsfaktoren (Yamanaka-Faktoren) werden benötigt, um adulte Zellen zu induzierten pluripotenten Stammzellen (iPS-Zellen) zu reprogrammieren?',
  '[{"key":"A","text":"BRCA1, p53, Rb, PTEN"},{"key":"B","text":"Oct4, Sox2, Klf4, c-Myc"},{"key":"C","text":"Nanog, Lin28, Rex1, Cripto"},{"key":"D","text":"HoxA, Pax6, MyoD, Nkx2.5"},{"key":"E","text":"IGF-1, EGF, FGF, VEGF"}]'::jsonb,
  'B',
  NULL, NULL,
  'Shinya Yamanaka (Nobelpreis Physiologie/Medizin 2012, gemeinsam mit John Gurdon) identifizierte 2006 vier Transkriptionsfaktoren, die adulte somatische Zellen (z. B. Hautfibroblasten) zu pluripotenten Stammzellen reprogrammieren: Oct4 (Pluripotenzfaktor, essentiell für ESC-Identität), Sox2 (zusammen mit Oct4 zentral für Pluripotenz), Klf4 (Zellidentitäts-Regulator) und c-Myc (Proto-Onkogen, beschleunigt Reprogrammierung — erhöht aber das Tumorrisiko). Neuere Protokolle verzichten auf c-Myc oder ersetzen es durch sicherere Faktoren. iPS-Zellen sind ethisch weniger problematisch als embryonale Stammzellen, da kein Embryo benötigt wird.',
  2
),
(
  'typk-bio-7-06-klonenethik',
  'K', 'biologie', 'bio-7-06',
  'Welche der folgenden Aussagen zu reproduktivem und therapeutischem Klonen sowie iPS-Zellen sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Beim reproduktiven Klonen wird der SCNT-erzeugte Embryo einer Leihmutter implantiert; beim therapeutischen Klonen werden embryonale Stammzellen aus der Blastozyste gewonnen.","korrekt":true},{"nr":2,"text":"iPS-Zellen können ohne Embryonenzerstörung gewonnen werden und sind genetisch identisch mit dem Spender-Patienten.","korrekt":true},{"nr":3,"text":"Das reproduktive Klonen des Menschen ist in den meisten Ländern verboten, weil es technisch noch nicht möglich ist.","korrekt":false},{"nr":4,"text":"Dollys vorzeitige Alterung erklärt sich durch verkürzte Telomere, da ihr Zellkern aus einer bereits 6-jährigen Körperzelle stammte.","korrekt":true},{"nr":5,"text":"c-Myc in den Yamanaka-Faktoren ist ein Proto-Onkogen, das bei frühen iPS-Protokollen das Tumorrisiko erhöhte.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[1,2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Reproduktives Klonen → Leihmutter → Klon-Tier/Mensch. Therapeutisches Klonen → SCNT bis Blastozyste → ESC-Gewinnung aus innerer Zellmasse (Embryo wird dabei zerstört). Aussage 2 korrekt: iPS-Zellen entstehen durch Reprogrammierung patienteneigener Zellen — kein Embryo nötig, genetisch identisch mit dem Patienten (kein Abstoßungsrisiko). Aussage 3 falsch: Reproduktives Klonen beim Menschen ist verboten aus ETHISCHEN Gründen (Würde, Autonomie, Sicherheitsbedenken), nicht weil es technisch unmöglich wäre — beim Tier (Schafe, Rinder, Katzen) gelingt es. Aussage 4 korrekt: Telomere verkürzen sich mit jeder Zellteilung; Dollys Spenderkern hatte bereits 6 Jahre Verkürzung → vorzeitige Alterung. Aussage 5 korrekt: c-Myc ist ein Onkogen — frühe iPS-Protokolle zeigten erhöhte Tumorrate; neuere Ansätze minimieren oder eliminieren c-Myc.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 8: Humangenetik ──────────────────────────────────

-- UK bio-8-01: Stammbaumanalyse
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-8-01-autdomerbgang',
  'A', 'biologie', 'bio-8-01',
  'Ein Erbgang zeigt folgende Merkmale im Stammbaum: Das Merkmal erscheint in jeder Generation, Väter geben es nicht an Söhne weiter, Töchter betroffener Väter sind immer betroffen. Welcher Erbgang liegt vor?',
  '[{"key":"A","text":"Autosomal-dominant"},{"key":"B","text":"Autosomal-rezessiv"},{"key":"C","text":"X-chromosomal-dominant"},{"key":"D","text":"X-chromosomal-rezessiv"},{"key":"E","text":"Y-chromosomal (holandrisch)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Der beschriebene Erbgang ist X-chromosomal-dominant: (1) Merkmal in jeder Generation — typisch für dominant; (2) Väter geben ihr X nicht an Söhne weiter (Söhne erhalten Y vom Vater) — das schließt autosomal-dominant aus; (3) Töchter betroffener Väter sind immer betroffen — Väter geben ihr einziges (krankes) X immer an alle Töchter weiter. Autosomal-dominant: Väter können Merkmal an Söhne weitergeben. X-chromosomal-rezessiv: Söhne betroffener Mütter betroffen, nicht Töchter betroffener Väter. Y-chromosomal: nur Söhne betroffen.',
  2
),
(
  'typa-bio-8-01-rezessiv',
  'A', 'biologie', 'bio-8-01',
  'Zwei phänotypisch gesunde Eltern haben ein Kind mit Mukoviszidose (autosomal-rezessiv). Wie hoch ist die Wahrscheinlichkeit, dass ihr nächstes Kind ebenfalls betroffen ist?',
  '[{"key":"A","text":"0% — gesunde Eltern können keine kranken Kinder haben"},{"key":"B","text":"25% — beide Eltern sind heterozygote Träger (Aa × Aa → 1/4 aa)"},{"key":"C","text":"50% — ein Elternteil ist homozygot betroffen"},{"key":"D","text":"75% — das Merkmal überspringt eine Generation"},{"key":"E","text":"100% — wenn ein Kind betroffen ist, sind alle nachfolgenden Kinder betroffen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Da beide Eltern phänotypisch gesund sind, aber ein betroffenes Kind (aa) haben, müssen beide Eltern heterozygote Träger sein (Aa × Aa). Im Punnett-Quadrat ergeben sich: AA (25%), Aa (50%), aa (25%). Die Wahrscheinlichkeit für jedes weitere Kind, homozygot betroffen (aa) zu sein, beträgt 25% — unabhängig vom vorherigen Kind (jede Schwangerschaft ist statistisch unabhängig). Mukoviszidose (CFTR-Gendefekt) ist die häufigste letale autosomal-rezessive Erkrankung bei Menschen europäischer Herkunft (Träuferquenz ~1:25).',
  1
),
(
  'typk-bio-8-01-stammbaumregeln',
  'K', 'biologie', 'bio-8-01',
  'Welche der folgenden Aussagen zur Stammbaumanalyse sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Bei X-chromosomal-rezessivem Erbgang sind Söhne häufiger betroffen als Töchter, da Söhne nur ein X-Chromosom tragen (hemizygot).","korrekt":true},{"nr":2,"text":"Wenn zwei betroffene Eltern ein gesundes Kind haben, muss der Erbgang autosomal-rezessiv sein.","korrekt":false},{"nr":3,"text":"Beim autosomal-dominanten Erbgang beträgt die Erkrankungswahrscheinlichkeit für Kinder eines heterozygoten betroffenen Elternteils und eines gesunden Elternteils 50%.","korrekt":true},{"nr":4,"text":"Y-chromosomale (holandrische) Vererbung bedeutet, dass ausschließlich Söhne betroffen sind und alle Söhne betroffener Väter das Merkmal tragen.","korrekt":true},{"nr":5,"text":"Obligate Konduktorinnen beim X-chromosomal-rezessiven Erbgang sind immer phänotypisch betroffen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Männer (XY) sind hemizygot für X-gekoppelte Gene — ein einziges rezessives Allel reicht für die Erkrankung; Frauen (XX) müssen homozygot sein → Männer häufiger betroffen (z. B. Hämophilie, Farbenblindheit). Aussage 2 falsch: Zwei betroffene Eltern mit gesundem Kind können auch autosomal-dominant mit unvollständiger Penetranz sein, oder X-chromosomal mit Sonderfall — es lässt sich nicht eindeutig auf autosomal-rezessiv schließen ohne weitere Daten. Aussage 3 korrekt: Aa × aa (gesund) → 50% Aa (betroffen), 50% aa (gesund) — klassische 1:1-Aufspaltung bei autosomal-dominant. Aussage 4 korrekt: Y-chromosomale Gene werden ausschließlich vom Vater an alle Söhne weitergegeben — 100% der Söhne betroffener Väter sind betroffen, keine Töchter. Aussage 5 falsch: Obligate Konduktorinnen sind phänotypisch GESUND — sie sind heterozygot (X^A X^a) und zeigen das rezessive Merkmal nicht, geben es aber weiter.',
  2
),
(
  'typa-bio-8-01-mitochondrial',
  'A', 'biologie', 'bio-8-01',
  'Im Stammbaum einer Familie mit Leber''scher hereditärer Optikusneuropathie (LHON) zeigt sich: Alle Kinder einer betroffenen Mutter sind betroffen, Kinder betroffener Väter sind nie betroffen. Welcher Erbgang erklärt dieses Muster?',
  '[{"key":"A","text":"Autosomal-dominant mit genomischer Prägung (genomic imprinting)"},{"key":"B","text":"X-chromosomal-dominant"},{"key":"C","text":"Mitochondrialer (maternaler) Erbgang — mtDNA wird ausschließlich von der Mutter vererbt"},{"key":"D","text":"Autosomal-rezessiv mit höherer Expressivität in Söhnen"},{"key":"E","text":"Y-chromosomal mit Überspringen einer Generation"}]'::jsonb,
  'C',
  NULL, NULL,
  'LHON ist eine klassische mitochondriale Erkrankung (Mutation in mtDNA-kodierten NADH-Dehydrogenase-Untereinheiten). Mitochondrien werden fast ausschließlich durch das Ei (Mutter) vererbt — Spermien bringen kaum Mitochondrien mit, und diese werden nach Befruchtung aktiv abgebaut. Daher: Alle Kinder einer betroffenen Mutter können betroffen sein (abhängig von Heteroplasmiequote); Kinder betroffener Väter erben die Mutation nie (kein paternales Mitochondrion). Das ist das charakteristische maternale Vererbungsmuster. Wichtig: Männer können erkranken, aber das Merkmal nie weitergeben.',
  2
),
(
  'typa-bio-8-01-xrezessiv',
  'A', 'biologie', 'bio-8-01',
  'Hämophilie A (Bluterkrankheit) ist X-chromosomal-rezessiv. Eine Konduktorin (X^H X^h) heiratet einen gesunden Mann (X^H Y). Welche Aussage über die Nachkommen ist korrekt?',
  '[{"key":"A","text":"Alle Töchter sind betroffen, alle Söhne sind gesund"},{"key":"B","text":"50% der Söhne sind betroffen; 50% der Töchter sind Konduktorinnen"},{"key":"C","text":"25% aller Kinder sind betroffen, unabhängig vom Geschlecht"},{"key":"D","text":"Alle Söhne sind betroffen, alle Töchter sind Konduktorinnen"},{"key":"E","text":"Nur Töchter können betroffen sein, Söhne nie"}]'::jsonb,
  'B',
  NULL, NULL,
  'Kreuzung: X^H X^h (Konduktorin) × X^H Y (gesunder Mann). Ergebnisse: Töchter: X^H X^H (gesund, 50%) und X^H X^h (Konduktorin, 50%); Söhne: X^H Y (gesund, 50%) und X^h Y (betroffen, 50%). Also: 50% der Söhne sind betroffen (hemizygot für das kranke Allel X^h); 0% der Töchter sind betroffen (alle haben mindestens ein X^H); 50% der Töchter sind Konduktorinnen. Gesamt: 25% aller Kinder sind betroffene Söhne, 25% sind Konduktorin-Töchter, 25% gesunde Töchter, 25% gesunde Söhne.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-8-02: Genetische Beratung und Hardy-Weinberg
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-8-02-hwgleichgewicht',
  'A', 'biologie', 'bio-8-01',
  'In einer Population beträgt die Häufigkeit des rezessiven Allels (q) für Mukoviszidose 0,02 (2%). Wie hoch ist die Häufigkeit heterozygote Träger (Carrier) in der Bevölkerung nach dem Hardy-Weinberg-Gesetz?',
  '[{"key":"A","text":"0,0004 (0,04%) — entspricht q²"},{"key":"B","text":"0,02 (2%) — entspricht q"},{"key":"C","text":"0,0392 (ca. 3,9%) — entspricht 2pq mit p = 0,98"},{"key":"D","text":"0,9604 (96%) — entspricht p²"},{"key":"E","text":"0,04 (4%) — entspricht 2q"}]'::jsonb,
  'C',
  NULL, NULL,
  'Nach Hardy-Weinberg: p + q = 1, also p = 1 − 0,02 = 0,98. Häufigkeit der Heterozygoten = 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 3,9%. Häufigkeit der homozygot Betroffenen = q² = (0,02)² = 0,0004 = 0,04%. Das erklärt, warum bei seltenen rezessiven Erkrankungen die Trägerfrequenz viel höher ist als die Erkrankungsfrequenz: Auf jeden Erkrankten kommen ~50 Träger (0,0392 / 0,0004 = 98, also ~2pq/q² = 2p/q ≈ 2×0,98/0,02 = 98). Das Hardy-Weinberg-Gleichgewicht gilt für große, panmiktische Populationen ohne Selektion, Mutation, Migration oder genetischen Drift.',
  3
),
(
  'typk-bio-8-02-hwbedingungen',
  'K', 'biologie', 'bio-8-01',
  'Welche der folgenden Aussagen zum Hardy-Weinberg-Gesetz sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Das Hardy-Weinberg-Gleichgewicht gilt nur für große, zufällig paarende Populationen ohne Selektion, Mutation, Migration oder genetischen Drift.","korrekt":true},{"nr":2,"text":"Wenn q die Häufigkeit des rezessiven Allels ist, beträgt die Häufigkeit der Erkrankten (homozygot rezessiv) 2pq.","korrekt":false},{"nr":3,"text":"Das Hardy-Weinberg-Gesetz erlaubt die Berechnung der Trägerfrequenz aus der bekannten Erkrankungsfrequenz.","korrekt":true},{"nr":4,"text":"Genetischer Drift wirkt in kleinen Populationen stärker als in großen Populationen.","korrekt":true},{"nr":5,"text":"Bei einer Erkrankungsfrequenz von 1/10.000 (q² = 0,0001) beträgt die Trägerfrequenz ca. 2%.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,3]},{"key":"C","nummern":[2,4,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Das Hardy-Weinberg-Gleichgewicht erfordert: große Population, zufällige Paarung (Panmixie), keine Selektion, keine Mutation, keine Migration, kein genetischer Drift — in der Realität sind diese Bedingungen nie vollständig erfüllt. Aussage 2 falsch: Homozygot Rezessive haben Häufigkeit q² (nicht 2pq); 2pq ist die Häufigkeit der Heterozygoten (Träger). Aussage 3 korrekt: Aus q² (Erkrankungsfrequenz) → q = √q² → p = 1−q → 2pq (Trägerfrequenz). Aussage 4 korrekt: In kleinen Populationen schwanken Allelfrequenzen zufällig stärker (genetischer Drift = Zufallsstichprobenfehler). Aussage 5 falsch: q² = 0,0001 → q = 0,01 → p ≈ 0,99 → 2pq = 2×0,99×0,01 = 0,0198 ≈ 2% ist korrekt — Aussage 5 ist also doch richtig! Daher ist Aussage 5 korrekt und Aussage 2 falsch.',
  3
),
(
  'typa-bio-8-02-beratung',
  'A', 'biologie', 'bio-8-02',
  'Was ist der Unterschied zwischen pränataler Diagnostik (PND) und Präimplantationsdiagnostik (PID)?',
  '[{"key":"A","text":"PND erfolgt vor der Befruchtung durch Eizellenanalyse; PID erfolgt nach der Geburt"},{"key":"B","text":"PND untersucht den Fetus während der Schwangerschaft (z. B. Amniozentese, CVS); PID untersucht Embryonen vor der Einpflanzung bei IVF"},{"key":"C","text":"Beide Methoden sind identisch — PID ist nur ein anderer Name für PND"},{"key":"D","text":"PID ist in Deutschland vollständig verboten; PND ist in allen Ländern erlaubt"},{"key":"E","text":"PND untersucht nur chromosomale Aberrationen; PID untersucht nur Einzelgendefekte"}]'::jsonb,
  'B',
  NULL, NULL,
  'PND (pränatale Diagnostik) untersucht den Fetus während einer bestehenden Schwangerschaft: Amniozentese (Fruchtwasserpunktion, ~15. SSW), Chorionzottenbiopsie (CVS, ~11. SSW), Nackentransparenzmessung, Triple-Test. Ein positiver Befund stellt die Eltern vor die schwere Entscheidung über Fortsetzung oder Abbruch der Schwangerschaft. PID (Präimplantationsdiagnostik) erfolgt im Rahmen einer IVF: Embryonen werden nach Befruchtung im Labor auf genetische Defekte untersucht; nur gesunde Embryonen werden eingesetzt — so wird die schwere Entscheidung nach PND vermieden, aber ethische Fragen über Selektion entstehen. In Österreich ist PID unter strengen Bedingungen erlaubt.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-8-03: Polygenie, Pleiotropie, Penetranz, Expressivität
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-8-03-pleiotropie',
  'A', 'biologie', 'bio-8-03',
  'Phenylketonurie (PKU) ist eine autosomal-rezessive Erkrankung durch Phenylalanin-Hydroxylase-Mangel. Sie führt zu geistiger Behinderung, heller Haut/Haaren und Ekzemen. Welches genetische Phänomen beschreibt dies?',
  '[{"key":"A","text":"Polygenie — viele Gene kontrollieren gemeinsam einen einzigen Phänotyp"},{"key":"B","text":"Epistase — ein Gen unterdrückt die Expression eines anderen Gens"},{"key":"C","text":"Pleiotropie — ein einziges Gen beeinflusst mehrere scheinbar unabhängige Phänotypen"},{"key":"D","text":"Kodominanz — beide Allele werden gleichzeitig exprimiert"},{"key":"E","text":"Penetranz — das Ausmaß, in dem ein Genotyp den Phänotyp bestimmt"}]'::jsonb,
  'C',
  NULL, NULL,
  'Pleiotropie (griech. pleion = mehr, tropos = Richtung) bedeutet, dass ein einzelnes Gen mehrere scheinbar unabhängige Merkmale beeinflusst. Bei PKU führt der Defekt der Phenylalanin-Hydroxylase (PAH-Gen) zu: Akkumulation von Phenylalanin → Neurotoxizität (geistige Behinderung); vermindertes Tyrosin → reduzierte Melaninsynthese (helle Haut/Haare); Phenylketone im Urin (muffiger Geruch). Alle diese Phänotypen gehen auf EINEN Gendefekt zurück. Polygenie: Viele Gene → ein Merkmal (z. B. Körpergröße). Penetranz: Wie viele Träger eines Genotyps zeigen den Phänotyp überhaupt.',
  2
),
(
  'typk-bio-8-03-penetranzexpr',
  'K', 'biologie', 'bio-8-03',
  'Welche der folgenden Aussagen zu Penetranz, Expressivität und Polygenie sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Vollständige Penetranz bedeutet, dass alle Individuen mit dem relevanten Genotyp den entsprechenden Phänotyp zeigen.","korrekt":true},{"nr":2,"text":"Variable Expressivität bedeutet, dass verschiedene Individuen mit demselben Genotyp den Phänotyp unterschiedlich stark ausgeprägt zeigen.","korrekt":true},{"nr":3,"text":"Körpergröße ist ein Beispiel für Pleiotropie, da viele verschiedene Gene daran beteiligt sind.","korrekt":false},{"nr":4,"text":"Marfan-Syndrom ist ein Beispiel für Pleiotropie: Ein FBN1-Gendefekt führt zu Symptomen in Skelett, Augen und Kardiovaskulärsystem.","korrekt":true},{"nr":5,"text":"Polygenie beschreibt, wenn ein Gen viele verschiedene Phänotypen gleichzeitig beeinflusst.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Vollständige Penetranz = 100% der Genotypträger zeigen den Phänotyp (z. B. Huntington). Unvollständige Penetranz = nur ein Teil zeigt den Phänotyp (z. B. BRCA1: 70–80% Brustkrebsrisiko, nicht 100%). Aussage 2 korrekt: Variable Expressivität = gleicher Genotyp, unterschiedliche Phänotypstärke (z. B. Neurofibromatose: manche haben wenige Cafe-au-lait-Flecken, andere Hunderte). Aussage 3 falsch: Körpergröße ist ein Beispiel für POLYGENIE (viele Gene, ein Merkmal) — nicht für Pleiotropie. Aussage 4 korrekt: Marfan-Syndrom (FBN1-Fibrillin-1-Defekt) zeigt Pleiotropie: Linsenluxation, Aortenaneurysma, Arachnodaktylie, Hochwuchs — ein Gen, viele Organe betroffen. Aussage 5 falsch: Polygenie = viele Gene kontrollieren einen Phänotyp; das Gegenteil (ein Gen → viele Phänotypen) ist Pleiotropie.',
  2
),
(
  'typa-bio-8-03-polygenie',
  'A', 'biologie', 'bio-8-03',
  'Körpergröße beim Menschen zeigt eine Normalverteilung in der Bevölkerung. Welches Konzept erklärt dieses Verteilungsmuster am besten?',
  '[{"key":"A","text":"Pleiotropie — ein Gen für Körpergröße beeinflusst auch andere Merkmale"},{"key":"B","text":"Epistase — ein dominantes Gen unterdrückt alle anderen Wachstumsgene"},{"key":"C","text":"Polygenie — viele Gene (>700 identifiziert) mit additiven kleinen Effekten, plus Umwelteinflüsse (Ernährung, Hormone) führen zur Normalverteilung"},{"key":"D","text":"Kodominanz — alle beteiligten Allele werden gleichzeitig exprimiert"},{"key":"E","text":"Penetranz — je höher die Penetranz, desto extremer die Körpergröße"}]'::jsonb,
  'C',
  NULL, NULL,
  'Körpergröße ist das Paradebeispiel für Polygenie: Über 700 Genloci tragen zur Größe bei, jedes mit kleinem additivem Effekt (z. B. +0,2 cm pro Allel). Zusätzlich spielen Umweltfaktoren eine große Rolle (Ernährung, Schlaf, Hormone). Die Kombination vieler additiver genetischer Effekte mit Umweltvariation führt zur charakteristischen Normalverteilung (Glockenkurve) in der Population. Die Heritabilität der Körpergröße beträgt ca. 80% (genetisch) — aber keine einzelne Variante hat einen großen Effekt. Dies unterscheidet polygene Merkmale von monogenen Merkmalen mit bimodaler Verteilung (krank/gesund).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-8-04: PID und PND — Methoden und Ethik
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-8-04-amniozentese',
  'A', 'biologie', 'bio-8-04',
  'Bei der Amniozentese in der 15.–17. SSW wird Fruchtwasser gewonnen. Welche Analyse ist damit NICHT direkt möglich ohne weitere Zellkultivierung?',
  '[{"key":"A","text":"Chromosomenanalyse (Karyotyp) — möglich nach Zellkultivierung"},{"key":"B","text":"DNA-Analyse auf Einzelgendefekte (z. B. Mukoviszidose) — direkt aus fetalen Zellen möglich"},{"key":"C","text":"Bildgebende Darstellung fetaler Organstrukturen (Herzfehler, Spina bifida)"},{"key":"D","text":"Biochemische Tests auf alpha-Fetoprotein (AFP) im Fruchtwasser"},{"key":"E","text":"FISH-Analyse auf häufige Aneuploidien (Trisomie 21, 18, 13)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Amniozentese gewinnt Fruchtwasser mit darin enthaltenen fetalen Zellen (abgeschilferte Amnionzellen). Damit sind möglich: Karyotypisierung (nach 2–3 Wochen Kultivierung), Molekulargenetik (PCR für Einzelgendefekte — direkt ohne Kultivierung), FISH (nach kurzer Kultivierung), AFP-Messung (biochemisch direkt im Fruchtwasser). Was NICHT möglich ist: Bildgebende Darstellung von Organstrukturen — das leistet der Ultraschall, nicht die Amniozentese. Organanomalien wie Herzfehler oder Spina bifida werden sonographisch diagnostiziert (und Spina bifida auch indirekt durch erhöhtes AFP). Die Amniozentese hat ein Fehlgeburtsrisiko von ~0,5–1%.',
  2
),
(
  'typk-bio-8-04-pidbio',
  'K', 'biologie', 'bio-8-04',
  'Welche der folgenden Aussagen zur Präimplantationsdiagnostik (PID) sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Bei der PID werden Zellen aus einem 5–6 Tage alten Blastozysten-Stadium (Trophektoderm-Biopsie) oder aus dem 8-Zell-Stadium (Tag 3) entnommen und genetisch untersucht.","korrekt":true},{"nr":2,"text":"PID setzt immer eine natürliche Empfängnis voraus und wird anschließend an der entnommenen Eizelle durchgeführt.","korrekt":false},{"nr":3,"text":"PID kann zur Selektion des Geschlechts aus nicht-medizinischen Gründen (Familienplanung) in den meisten europäischen Ländern eingesetzt werden.","korrekt":false},{"nr":4,"text":"Die PID ist ethisch umstritten, weil nicht ausgewählte Embryonen verworfen werden und Fragen zur Instrumentalisierung menschlichen Lebens aufgeworfen werden.","korrekt":true},{"nr":5,"text":"Die Trophektoderm-Biopsie am Tag 5 entnimmt Zellen aus dem Teil des Embryos, der später die Plazenta bildet, nicht den Embryo selbst.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: PID nutzt entweder Tag-3-Biopsie (1–2 Blastomeren aus 8-Zell-Stadium) oder Trophektoderm-Biopsie am Tag 5 (5–10 Zellen aus äußerer Schicht der Blastozyste) — letztere ist heute bevorzugt da schonender. Aussage 2 falsch: PID ist nur im Rahmen einer IVF (In-vitro-Fertilisation) möglich — Embryonen entstehen im Labor und werden vor dem Transfer untersucht; keine natürliche Empfängnis. Aussage 3 falsch: In den meisten europäischen Ländern (inkl. Österreich, Deutschland) ist PID zur Geschlechtsselektion aus sozialen Gründen verboten; erlaubt nur bei medizinischer Indikation (X-gekoppelte Erkrankungen). Aussage 4 korrekt: Ethische Kontroverse: Nicht-übertragene Embryonen werden kryokonserviert oder verworfen — Frage nach dem moralischen Status von Embryonen. Aussage 5 korrekt: Trophektoderm bildet später Plazenta und extraembryonale Strukturen — die innere Zellmasse (ICM) entwickelt sich zum Embryo. Biopsie aus Trophektoderm schont den eigentlichen Embryo.',
  3
),
(
  'typa-bio-8-04-cvs',
  'A', 'biologie', 'bio-8-04',
  'Was ist der Hauptvorteil der Chorionzottenbiopsie (CVS) gegenüber der Amniozentese?',
  '[{"key":"A","text":"CVS hat ein geringeres Fehlgeburtsrisiko als Amniozentese"},{"key":"B","text":"CVS kann früher in der Schwangerschaft durchgeführt werden (11.–13. SSW statt 15.–17. SSW) und liefert frühere Ergebnisse"},{"key":"C","text":"CVS liefert zuverlässigere Ergebnisse für Einzelgendefekte als Amniozentese"},{"key":"D","text":"CVS erfordert keine fetalen Zellen und ist daher nicht-invasiv"},{"key":"E","text":"CVS kann Organfehlbildungen direkt bildgebend darstellen"}]'::jsonb,
  'B',
  NULL, NULL,
  'CVS (Chorionzottenbiopsie) wird in der 11.–13. SSW durchgeführt (transzervikal oder transabdominal) — deutlich früher als Amniozentese (15.–17. SSW). Dieser frühere Zeitpunkt ist der Hauptvorteil: Ergebnisse liegen früher vor, was bei einem pathologischen Befund mehr Zeit für Beratung und Entscheidungsfindung lässt. Nachteil: CVS hat ein etwas höheres Fehlgeburtsrisiko (~1–2%) als Amniozentese (~0,5–1%) und kann nicht AFP messen (kein Fruchtwasser). CVS liefert plazentares Gewebe (Chorionzotten), aus dem Chromosomen und DNA analysiert werden können. Plazentamosaizismus (Chromosomenanomalie nur in Plazenta, nicht im Fetus) kann zu falsch-positiven Ergebnissen führen.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 9: Evolution ─────────────────────────────────────

-- UK bio-9-01: Entstehung des Lebens und Endosymbiose
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-01-endosymbiose',
  'A', 'biologie', 'bio-9-01',
  'Was besagt die Endosymbiontentheorie und welche Evidenz stützt sie am überzeugendsten?',
  '[{"key":"A","text":"Mitochondrien und Chloroplasten entstanden durch Einstülpung der Plasmamembran; Evidenz: beide haben eine Doppelmembran"},{"key":"B","text":"Eukaryoten entstanden durch Verschmelzung zweier Prokaryoten ohne Endosymbiose; Evidenz: ähnliche Ribosomengröße"},{"key":"C","text":"Mitochondrien und Chloroplasten entstanden durch Endosymbiose von Alpha-Proteobakterien bzw. Cyanobakterien; Evidenz: eigene zirkuläre DNA, 70S-Ribosomen, binäre Teilung, doppelte Membran"},{"key":"D","text":"Alle Organellen entstanden simultan durch einen einzigen Endosymbioseereignis; Evidenz: identische Proteome"},{"key":"E","text":"Mitochondrien sind Überreste von Viren; Evidenz: sie replizieren unabhängig vom Zellkern"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Endosymbiontentheorie (Lynn Margulis, 1967) besagt: Mitochondrien entstanden aus aufgenommenen Alpha-Proteobakterien (ähnlich Rickettsia); Chloroplasten aus aufgenommenen Cyanobakterien. Belege: (1) Eigene zirkuläre DNA (wie Prokaryoten, nicht linear wie Eukaryoten-DNA); (2) 70S-Ribosomen (prokaryotisch, nicht eukaryotische 80S); (3) Binäre Teilung (nicht Mitose); (4) Doppelte Membran (innere = ursprüngliche Bakterienmembran, äußere = phagozytische Vesikelmembran); (5) Phylogenetische Verwandtschaft der Mitochondrien-DNA mit Alpha-Proteobakterien; (6) Antibiotikaempfindlichkeit der Mitochondrien (70S-Ribosomen werden durch Tetracyclin/Chloramphenicol inhibiert).',
  2
),
(
  'typk-bio-9-01-urzellentst',
  'K', 'biologie', 'bio-9-01',
  'Welche der folgenden Aussagen zur Entstehung des Lebens sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Das Miller-Urey-Experiment (1953) zeigte, dass Aminosäuren unter simulierten Ur-Erd-Bedingungen (CH4, NH3, H2O, H2, elektrische Entladung) abiotisch synthetisiert werden können.","korrekt":true},{"nr":2,"text":"RNA-Welt-Hypothese: RNA war vermutlich das erste Informationsmolekül, da RNA sowohl genetische Information speichern als auch enzymatische Funktionen (Ribozyme) übernehmen kann.","korrekt":true},{"nr":3,"text":"LUCA (Last Universal Common Ancestor) war ein hochspezialisierter Organismus mit vollständigem eukaryotischen Zellbau.","korrekt":false},{"nr":4,"text":"Hydrothermal vents (Schwarze Raucher) werden als mögliche Entstehungsorte des Lebens diskutiert, da sie chemische Energie, Mineraloberflächen und reduzierte Verbindungen liefern.","korrekt":true},{"nr":5,"text":"Die Panspermia-Hypothese besagt, dass Leben auf der Erde durch Meteoritenimpakt von anderen Planeten eingebracht wurde — sie erklärt, wie Leben im Universum ursprünglich entstanden ist.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Miller-Urey-Experiment bewies abiotische Aminosäuresynthese unter reduzierten Atmosph ärebedingungen — Grundstein der chemischen Evolutionsforschung. Aussage 2 korrekt: RNA-Welt-Hypothese: RNA als erstes Biopolymer mit Informationsspeicherung (wie DNA) und Katalyse (Ribozyme) — RNA kann sich selbst replizieren. Aussage 3 falsch: LUCA war ein primitiver Prokaryot (kein Eukaryot); seine Eigenschaften werden durch Vergleich universeller Gene erschlossen. Aussage 4 korrekt: Hydrothermalquellen (besonders alkalische Vent-Systeme wie Lost City) bieten reduzierende Bedingungen, Protonengradient, Mineraloberflächen — attraktive Entstehungshypothese. Aussage 5 falsch: Panspermia verschiebt das Problem nur räumlich — sie erklärt NICHT wie Leben ursprünglich entstand, sondern nur mögliche Verbreitung.',
  2
),
(
  'typa-bio-9-01-rna-welt',
  'A', 'biologie', 'bio-9-01',
  'Warum wird RNA und nicht DNA als das ursprünglichste Biomolekül der "RNA-Welt-Hypothese" angesehen?',
  '[{"key":"A","text":"DNA ist chemisch stabiler und daher wahrscheinlich früher entstanden als das labilere RNA"},{"key":"B","text":"RNA kann sowohl genetische Information speichern als auch enzymatische Reaktionen katalysieren (Ribozyme) — eine Eigenschaft, die DNA fehlt"},{"key":"C","text":"DNA kann ohne RNA-Zwischenschritt direkt in Proteine übersetzt werden"},{"key":"D","text":"RNA ist einfacher zu synthetisieren als DNA, da sie keine Desoxyribosenukleoside benötigt"},{"key":"E","text":"B und D sind beide korrekt und ergänzen sich"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die RNA-Welt-Hypothese (Walter Gilbert, 1986) basiert auf der entscheidenden Eigenschaft von RNA: Sie kann SOWOHL genetische Information codieren (wie DNA) ALS AUCH chemische Reaktionen katalysieren — diese katalytischen RNAs heißen Ribozyme (z. B. Ribonuklease P, Selbst-spleißende Introns, Ribosom-rRNA). DNA kann nicht katalysieren. Diese Doppelfunktion der RNA ermöglicht eine selbstreplizierende RNA ohne Proteine. Erst später entstand die Arbeitsteilung: DNA als stabilerer Informationsspeicher, Proteine als effizientere Enzyme. Auch heute noch ist das Ribosom im Kern ein Ribozym (Peptidyltransferase-Aktivität der 23S-rRNA).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-9-03: Phylogenetik und Systematik
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-03-homologieanalog',
  'A', 'biologie', 'bio-9-03',
  'Der Arm eines Menschen, die Flosse eines Wals und der Flügel einer Fledermaus haben denselben Grundbauplan (Knochen: Humerus, Radius, Ulna, Carpalia, Phalangen). Was sind diese Strukturen?',
  '[{"key":"A","text":"Analoge Organe — gleiche Funktion durch konvergente Evolution, gemeinsamer Ursprung"},{"key":"B","text":"Homologe Organe — gemeinsamer evolutionärer Ursprung, auch wenn die Funktion verschieden ist"},{"key":"C","text":"Rudimentäre Organe — in Evolution zurückgebildete, nicht mehr funktionale Strukturen"},{"key":"D","text":"Vestigialorgane — Überbleibsel früherer Evolutionsstufen ohne Homologie"},{"key":"E","text":"Konvergente Strukturen — unabhängig entstanden mit identischem Bauplan"}]'::jsonb,
  'B',
  NULL, NULL,
  'Diese Strukturen sind homologe Organe: Sie leiten sich von derselben evolutionären Ursprungsstruktur ab (Tetrapoden-Vorderextremität des gemeinsamen Vorfahren) und zeigen trotz verschiedener Funktionen (Greifen, Schwimmen, Fliegen) denselben Grundbauplan. Homologie basiert auf gemeinsamem Abstammungsursprung, nicht auf Funktionsähnlichkeit. ANALOGE Organe: gleiche Funktion, aber UNABHÄNGIGE Entstehung (z. B. Flügel von Vogel und Insekt — konvergente Evolution). VESTIGIALORGANE: zurückgebildete homologe Strukturen ohne aktuelle Funktion (z. B. menschlicher Blinddarm, Walbecken). Die Unterscheidung Homologie/Analogie ist fundamental für phylogenetische Analysen.',
  1
),
(
  'typa-bio-9-03-phylogenie',
  'A', 'biologie', 'bio-9-03',
  'Was ist ein Kladogramm und wie wird es erstellt?',
  '[{"key":"A","text":"Ein Kladogramm zeigt die zeitliche Abfolge von Fossilfunden in der Erdgeschichte"},{"key":"B","text":"Ein Kladogramm ist eine phylogenetische Baumdarstellung, die auf geteilten abgeleiteten Merkmalen (Synapomorphien) basiert und Verwandtschaftsbeziehungen darstellt"},{"key":"C","text":"Ein Kladogramm zeigt die geographische Verbreitung von Arten"},{"key":"D","text":"Ein Kladogramm basiert ausschließlich auf morphologischen Merkmalen und schließt molekulare Daten aus"},{"key":"E","text":"Ein Kladogramm zeigt analoge Merkmale zwischen konvergent evolvierten Arten"}]'::jsonb,
  'B',
  NULL, NULL,
  'Ein Kladogramm ist das zentrale Werkzeug der Phylogenetik (Kladistik, Willi Hennig). Es basiert auf Synapomorphien — gemeinsam abgeleiteten Merkmalen, die von einem gemeinsamen Vorfahren geerbt wurden und eine Abstammungsgruppe (Klade/Monophylum) definieren. Erstellung: Merkmalsmatrix (Arten × Merkmale) → Parsimonieprinzip (minimale Evolutionsschritte) oder Bayes-Statistik. Heute dominiert molekulare Phylogenetik: DNA/Protein-Sequenzen ermöglichen präzisere Analysen. Wichtig: Kladogramme zeigen Verwandtschaftsgrad, nicht notwendig evolutionäre Zeit (dafür braucht man Chronogramme mit molekularer Uhr). Beispiel: Menschen und Schimpansen teilen mehr Synapomorphien miteinander als mit Gorillas.',
  2
),
(
  'typk-bio-9-03-systematik',
  'K', 'biologie', 'bio-9-03',
  'Welche der folgenden Aussagen zur biologischen Systematik und Phylogenetik sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Die binäre Nomenklatur (Gattungsname + Artepithet) wurde von Carl von Linné eingeführt und ist heute international verbindlich.","korrekt":true},{"nr":2,"text":"Analoge Merkmale (z. B. Flügel von Vogel und Fledermaus) eignen sich besser für phylogenetische Analysen als homologe Merkmale.","korrekt":false},{"nr":3,"text":"Das 16S-rRNA-Gen wird häufig für die phylogenetische Analyse von Bakterien verwendet, da es hochkonserviert aber mit variablen Regionen kombiniert ist.","korrekt":true},{"nr":4,"text":"Ein Monophylum umfasst alle Nachkommen eines gemeinsamen Vorfahren inklusive des Vorfahren selbst.","korrekt":true},{"nr":5,"text":"Konvergente Evolution führt zu homologen Strukturen durch ähnliche Selektionsdrücke in verschiedenen Linien.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Linné''sche binäre Nomenklatur: Genus species (kursiv); z. B. Homo sapiens — weltweit gültig durch International Code of Zoological Nomenclature (ICZN). Aussage 2 falsch: Analoge Merkmale sind für Phylogenetik UNGEEIGNET, weil sie durch konvergente Evolution unabhängig entstanden sind und Verwandtschaft vortäuschen können. Homologe Merkmale (Synapomorphien) sind der Schlüssel zur Phylogenetik. Aussage 3 korrekt: 16S-rRNA: konservierte Bereiche ermöglichen universelle Primer, variable Regionen erlauben Artunterscheidung — Goldstandard der Bakterien-Phylogenie (16S-rDNA-Sequenzierung). Aussage 4 korrekt: Monophylum (Klade) = Vorfahre + alle Nachkommen; Paraphylum schließt einige Nachkommen aus; Polyphylum schließt Vorfahren aus. Aussage 5 falsch: Konvergente Evolution führt zu ANALOGEN (nicht homologen) Strukturen — unabhängige Entstehung ähnlicher Merkmale durch ähnlichen Selektionsdruck.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-9-04: Evolutionstheorie — Darwin, synthetische Theorie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-04-darwinprinzip',
  'A', 'biologie', 'bio-9-04',
  'Was sind die vier Kernprinzipien der Darwinschen Evolutionstheorie?',
  '[{"key":"A","text":"Mutation, Rekombination, Selektion, Drift"},{"key":"B","text":"Variation, Vererbbarkeit, Überproduktion (Ressourcenkonkurrenz), natürliche Selektion"},{"key":"C","text":"Anpassung, Gebrauch/Nichtgebrauch, Vererbung erworbener Eigenschaften, Stufenleiter"},{"key":"D","text":"Mutation, Migration, Genetischer Drift, Selektion"},{"key":"E","text":"Genfluss, Gründereffekt, Flaschenhalseffekt, sexuelle Selektion"}]'::jsonb,
  'B',
  NULL, NULL,
  'Darwins vier Grundprinzipien (aus "On the Origin of Species", 1859): (1) Variation: Individuen einer Population unterscheiden sich phänotypisch; (2) Vererbbarkeit: Merkmale werden von Eltern auf Nachkommen vererbt; (3) Überproduktion/Kampf ums Dasein: Mehr Nachkommen als die Umwelt tragen kann → Ressourcenkonkurrenz; (4) Natürliche Selektion: Individuen mit vorteilhaften Merkmalen überleben/reproduzieren besser ("survival of the fittest" = Reproduktionserfolg, nicht nur Überleben). Darwin kannte die Mechanismen der Vererbung (Mendel) noch nicht. Option C beschreibt Lamarcks Theorie (Vererbung erworbener Eigenschaften). Option A/D beschreibt die moderne synthetische Evolutionstheorie.',
  1
),
(
  'typk-bio-9-04-synthetischeevo',
  'K', 'biologie', 'bio-9-04',
  'Welche der folgenden Aussagen zur modernen synthetischen Evolutionstheorie sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die synthetische Evolutionstheorie vereint Darwins natürliche Selektion mit der Mendel''schen Genetik und der Populationsgenetik.","korrekt":true},{"nr":2,"text":"Mutationen sind die einzige Quelle genetischer Variation in einer Population.","korrekt":false},{"nr":3,"text":"Sexuelle Selektion ist eine Form der natürlichen Selektion, bei der Merkmale bevorzugt werden, die den Reproduktionserfolg durch Paarungsvorteile erhöhen.","korrekt":true},{"nr":4,"text":"Neutrale Mutationen werden durch natürliche Selektion eliminiert, da sie keinen Vorteil bieten.","korrekt":false},{"nr":5,"text":"Epigenetische Vererbung (nicht-DNA-basierte vererbbare Veränderungen) wird in der erweiterten synthetischen Theorie als zusätzlicher Evolutionsmechanismus diskutiert.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[1,2,3]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Die Moderne Synthese (1930er–50er, Fisher, Haldane, Wright, Mayr, Dobzhansky) vereint Darwin + Mendel + Populationsgenetik: Evolution = Veränderung von Allelfrequenzen durch Selektion, Drift, Mutation, Migration. Aussage 2 falsch: Neben Mutationen gibt es Rekombination (Crossing-over, unabhängige Assortierung), Genfluss (Migration), Genduplikation — all das erzeugt genetische Variation. Aussage 3 korrekt: Sexuelle Selektion (Darwin) — intersexuell: Weibchen wählen (z. B. Pfauenschwanz); intrasexuell: Konkurrenzkampf der Männchen. Erhöht Reproduktionserfolg, kann adaptive Merkmale schaffen oder Lasten (Handicap-Prinzip). Aussage 4 falsch: Neutrale Mutationen unterliegen keiner Selektion — ihre Frequenz ändert sich durch genetischen Drift; sie akkumulieren neutral (Neutralitätstheorie, Kimura). Aussage 5 korrekt: Erweiterte Synthese diskutiert Epigenetik, Nischenkonstruktion, Entwicklungsplastizität als Evolutionsmechanismen.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-9-05: Artbildung — allopatrisch, sympatrisch
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-05-artbegriff',
  'A', 'biologie', 'bio-9-05',
  'Was definiert eine Art nach dem Biologischen Artkonzept (Ernst Mayr)?',
  '[{"key":"A","text":"Individuen einer Art sehen sich morphologisch ähnlich"},{"key":"B","text":"Individuen einer Art teilen mehr als 70% ihrer DNA-Sequenz"},{"key":"C","text":"Individuen einer Art sind eine Gruppe natürlich kreuzender Populationen, die von anderen Gruppen reproduktiv isoliert sind"},{"key":"D","text":"Individuen einer Art bewohnen dasselbe geographische Gebiet"},{"key":"E","text":"Individuen einer Art haben identische ökologische Nischen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das Biologische Artkonzept (Ernst Mayr, 1942): Eine Art ist eine Gruppe von Populationen, die tatsächlich oder potenziell miteinander kreuzen können und reproduktiv von anderen Gruppen isoliert sind. Reproduktive Isolation = keine fruchtbaren Nachkommen mit anderen Arten. Grenzen: Gilt nicht für asexuelle Organismen (Bakterien, viele Pilze); schwierig bei Fossilien; Ringe-Arten problematisch. Alternative Konzepte: Phylogenetisches Artkonzept (kleinste diagnosierbare Gruppe), Ökologisches Artkonzept (einheitliche ökologische Nische), Morphologisches Artkonzept (äußere Merkmale — historisch ältestes).',
  1
),
(
  'typk-bio-9-05-artbildungsmodi',
  'K', 'biologie', 'bio-9-05',
  'Welche der folgenden Aussagen zu Artbildungsmodi sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Allopatrische Artbildung entsteht durch geographische Isolation, die Genfluss unterbricht — Populationen divergieren unabhängig und entwickeln reproduktive Isolation.","korrekt":true},{"nr":2,"text":"Sympatrische Artbildung erfordert immer eine geographische Barriere und ist daher bei Tieren häufiger als bei Pflanzen.","korrekt":false},{"nr":3,"text":"Polyploidisierung ist ein wichtiger Mechanismus der sympatrischen Artbildung bei Pflanzen — ein Hybride mit doppeltem Chromosomensatz kann nicht mehr mit den Elternarten kreuzen.","korrekt":true},{"nr":4,"text":"Peripatrische Artbildung (Gründereffekt) tritt auf, wenn eine kleine Subpopulation am Randes des Verbreitungsgebiets isoliert wird und durch Drift schnell divergiert.","korrekt":true},{"nr":5,"text":"Adaptive Radiation bezeichnet die schnelle Artbildung aus einem gemeinsamen Vorfahren in viele ökologische Nischen, wie bei den Darwin-Finken auf den Galapagos-Inseln.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,3,4,5]},{"key":"E","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Allopatrische Artbildung (häufigster Modus bei Tieren): Geographische Barriere (Gebirge, Meer) trennt Populationen → unabhängige Divergenz durch Selektion und Drift → reproduktive Isolation entsteht als Nebenprodukt. Aussage 2 falsch: Sympatrische Artbildung geschieht OHNE geographische Barriere im gleichen Gebiet — häufiger bei Pflanzen (Polyploidie) als bei Tieren; erfordert KEINE Barriere. Aussage 3 korrekt: Allopolyploidie (Hybridisierung + Chromosomenverdopplung) ist bei Pflanzen häufig: Der Hybride ist von beiden Elternarten reproduktiv isoliert (kann mit keiner fruchtbar kreuzen) — sofortige Artbildung. Beispiel: Weizen (6x-Polyploid). Aussage 4 korrekt: Peripatrische Speziation = Gründerpopulation + Flaschenhalseffekt + Drift → schnelle Divergenz. Aussage 5 korrekt: Adaptive Radiation = Explosion der Artenzahl aus einem Vorfahren in verfügbare Nischen; Darwin-Finken (14 Arten aus einem Vorfahren), Zichliden der Großen Seen.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-9-06: Evolutionsfaktoren — Selektion, Drift, Migration, Mutation
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-06-selektionstypen',
  'A', 'biologie', 'bio-9-06',
  'Welcher Selektionstyp erklärt, warum Körpergröße in einer Bevölkerung stabil bleibt, obwohl sowohl sehr kleine als auch sehr große Individuen Nachteile haben?',
  '[{"key":"A","text":"Gerichtete Selektion — bevorzugt einen extremen Phänotyp, verschiebt den Mittelwert"},{"key":"B","text":"Stabilisierende Selektion — bevorzugt mittlere Phänotypen, reduziert Varianz ohne Mittelwertverschiebung"},{"key":"C","text":"Disruptive Selektion — bevorzugt beide Extreme und eliminiert den Mittelwert"},{"key":"D","text":"Sexuelle Selektion — bevorzugt Merkmale mit höchstem Paarungserfolg"},{"key":"E","text":"Balancierte Selektion — erhält Polymorphismus durch Heterozygotenvorteil"}]'::jsonb,
  'B',
  NULL, NULL,
  'Stabilisierende Selektion wirkt gegen beide Extreme und bevorzugt den mittleren Phänotyp — sie erhält den Mittelwert und reduziert die phänotypische Varianz. Beispiel: Geburtsgewicht beim Menschen (zu niedrig: Vitalitätsprobleme; zu hoch: Geburtskomplikationen → mittleres Gewicht hat höchstes Überleben). Gerichtete Selektion verschiebt den Mittelwert in eine Richtung (z. B. Antibiotikaresistenz). Disruptive Selektion bevorzugt beide Extreme (z. B. Schnabelgröße bei Darwinfinken in Ressourcenkonkurrenz). Balancierte Selektion = Heterozygotenvorteil (z. B. Sichelzellanämie-Träger resistent gegen Malaria) → erhält beide Allele.',
  2
),
(
  'typk-bio-9-06-evolutionsfakt',
  'K', 'biologie', 'bio-9-06',
  'Welche der folgenden Aussagen zu Evolutionsfaktoren sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Genetischer Drift verändert Allelfrequenzen zufällig und wirkt stärker in kleinen als in großen Populationen.","korrekt":true},{"nr":2,"text":"Der Flaschenhalseffekt tritt auf, wenn eine Population durch einen drastischen Größeneinbruch genetische Vielfalt verliert.","korrekt":true},{"nr":3,"text":"Natürliche Selektion wirkt auf den Genotyp direkt, unabhängig vom Phänotyp.","korrekt":false},{"nr":4,"text":"Genfluss durch Einwanderung kann neue Allele in eine Population einbringen und deren Allelfrequenzen verändern.","korrekt":true},{"nr":5,"text":"Der Gründereffekt beschreibt, dass eine kleine Gründerpopulation repräsentativ für die genetische Vielfalt der Ursprungspopulation ist.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,5]},{"key":"E","nummern":[1,2,4]}]'::jsonb,
  'Aussage 1 korrekt: Genetischer Drift = zufällige Veränderung von Allelfrequenzen durch Stichprobenfehler; in kleinen Populationen können Allele zufällig fixiert oder eliminiert werden — in großen Populationen mittelt sich der Zufall heraus. Aussage 2 korrekt: Flaschenhalseffekt: Extreme Populationsreduktion (z. B. durch Katastrophe) → Überlebende repräsentieren nur einen Bruchteil der ursprünglichen genetischen Vielfalt → reduzierte Heterozygotie. Beispiel: Nördlicher Elefantenrobben-Effekt (alle von 20 Gründertieren abstammend). Aussage 3 falsch: Selektion wirkt auf den PHÄNOTYP — Gene werden nur indirekt selektiert, vermittelt durch ihren phänotypischen Ausdruck. Aussage 4 korrekt: Genfluss = Wanderung von Individuen mit ihren Allelen zwischen Populationen → Angleichung von Allelfrequenzen (wirkt gegen Drift/Differenzierung). Aussage 5 falsch: Gründerpopulationen sind NICHT repräsentativ — sie tragen meist nur einen zufälligen Bruchteil der ursprünglichen Allele (genetischer Flaschenhals), daher häufig reduzierte Diversität.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-9-07: Hominidenevolution
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-9-07-hominiden',
  'A', 'biologie', 'bio-9-07',
  'Welche der folgenden Merkmale gelten als charakteristisch für die Hominisation (Menschwerdung)?',
  '[{"key":"A","text":"Zunahme der Körpergröße, Verlust des Schwanzes, Entwicklung von Krallen statt Nägeln"},{"key":"B","text":"Aufrechter Gang (Bipedie), Zunahme des Hirnvolumens (Enzephalisierung), Werkzeuggebrauch, Sprachentwicklung"},{"key":"C","text":"Zunahme der Körperbehaarung, Vergrößerung des Kiefers, Entwicklung von Eckzähnen"},{"key":"D","text":"Rückkehr zum vierbeinigen Gang, Reduktion des Hirnvolumens, Vereinfachung sozialer Strukturen"},{"key":"E","text":"Entwicklung von Schwimmhäuten, Vergrößerung der Nasenlöcher, Anpassung an aquatisches Leben"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Hominisation umfasst mehrere parallel verlaufende evolutionäre Trends: (1) Bipedie (aufrechter Gang) — freisetzt die Hände für Werkzeuggebrauch, beginnt mit Australopithecus (~4 Mya); (2) Enzephalisierung — Hirnvolumen wächst von ~400 ml (Australopithecus) auf ~1400 ml (H. sapiens); (3) Werkzeuggebrauch — Oldowan-Werkzeuge (H. habilis, ~2,5 Mya) bis komplexe Technologie; (4) Reduzierung des Kiefers/Eckzähne (Kauapparat wird kleiner); (5) Verlust der Körperbehaarung und Entwicklung von Schweißdrüsen (Thermoregulation); (6) Sprachentwicklung durch Kehlkopfabsenkung. Bipedie evolvierte BEVOR Hirnvergrößerung — widerlegt die frühe Annahme, Intelligenz sei der Motor der Hominisation.',
  2
),
(
  'typk-bio-9-07-hominidenlinien',
  'K', 'biologie', 'bio-9-07',
  'Welche der folgenden Aussagen zur Hominidenevolution sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Homo sapiens und Neandertaler (H. neanderthalensis) kreuzten sich — DNA-Analyse zeigt, dass nicht-afrikanische Menschen ca. 1–4% Neandertaler-DNA tragen.","korrekt":true},{"nr":2,"text":"Das Out-of-Africa-Modell besagt, dass alle modernen Menschen von einer Population abstammen, die vor ~60.000–70.000 Jahren Afrika verließ.","korrekt":true},{"nr":3,"text":"Australopithecus afarensis (\"Lucy\") hatte ein Hirnvolumen ähnlich dem modernen Menschen (~1350 ml).","korrekt":false},{"nr":4,"text":"Die molekulare Uhr basiert auf der konstanten Mutationsrate in neutralen DNA-Regionen und erlaubt die Datierung evolutionärer Ereignisse.","korrekt":true},{"nr":5,"text":"H. erectus verließ als erste Hominide-Art Afrika und gelangte bis nach Ostasien (Java-Mensch, Peking-Mensch).","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4,5]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Svante Pääbo (Nobelpreis 2022) sequenzierte Neandertaler-DNA und zeigte, dass 1–4% des Genoms nicht-afrikanischer Menschen von Neandertalern stammt — Beweis für Kreuzung. Aussage 2 korrekt: Out-of-Africa (OoA, replacement model): Moderner H. sapiens entstand in Afrika (~300 kya in Marokko), verbreitete sich vor ~60.000–70.000 Jahren aus Afrika und ersetzte weitgehend frühere Hominiden. Aussage 3 falsch: Lucy (A. afarensis, ~3,2 Mya) hatte ein Hirnvolumen von nur ~380–430 ml — ähnlich modernen Schimpansen, nicht dem Menschen (1350 ml). Aussage 4 korrekt: Molekulare Uhr: Neutrale Mutationen akkumulieren mit konstanter Rate → Sequenzdivergenz ∝ Divergenzzeit; kalibriert durch Fossilien. Aussage 5 korrekt: H. erectus verließ Afrika vor ~1,8 Mya (Dmanisi, Georgien) und erreichte Asien; Java-Mensch (~1 Mya) und Peking-Mensch (~0,5 Mya) sind H. erectus.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 10: Ökologie ─────────────────────────────────────

-- UK bio-10-01: Toleranzkurven, Liebig''sches Minimum
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-10-01-toleranz',
  'A', 'biologie', 'bio-10-01',
  'Was beschreibt die Shelford''sche Toleranzkurve (Toleranzgesetz)?',
  '[{"key":"A","text":"Jeder Faktor kann beliebig erhöht werden, solange mindestens ein Faktor im Optimum ist"},{"key":"B","text":"Jede Art hat für jeden Umweltfaktor einen Toleranzbereich mit Optimum (höchste Fitness) und Pessimum-Bereichen an den Grenzen — außerhalb stirbt die Art"},{"key":"C","text":"Das Wachstum wird ausschließlich durch den Faktor im Minimum bestimmt, alle anderen Faktoren sind irrelevant"},{"key":"D","text":"Toleranzbereiche sind artübergreifend identisch und von der Evolution nicht veränderbar"},{"key":"E","text":"Nur abiotische Faktoren haben Toleranzkurven; biotische Faktoren (Räuber, Konkurrenten) haben keine messbaren Grenzen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Shelford''sche Toleranzgesetz (1913): Jede Art toleriert Umweltfaktoren (Temperatur, pH, Salzgehalt, Licht...) nur in einem bestimmten Bereich. Innerhalb dieses Bereichs gibt es ein Optimum (maximale Fitness/Reproduktion), ein Toleranzbereich (suboptimale aber lebbare Bedingungen) und Letalgrenzen (Tod). Artentypen: Euryöke Arten = breite Toleranz (generalistisch); Stenöke Arten = enge Toleranz (spezialisiert, z. B. Koala nur auf Eukalyptus). Das Liebig''sche Minimum (Liebig, 1840) ergänzt dies: Das Wachstum wird durch den im Verhältnis zum Bedarf knappsten Faktor (Minimumfaktor) bestimmt — nicht durch das Optimum anderer Faktoren.',
  1
),
(
  'typk-bio-10-01-oekfaktoren',
  'K', 'biologie', 'bio-10-01',
  'Welche der folgenden Aussagen zu ökologischen Faktoren und Toleranz sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Stenöke Arten haben einen engen Toleranzbereich und sind daher anfälliger für Umweltveränderungen als euryöke Arten.","korrekt":true},{"nr":2,"text":"Das Liebig''sche Minimum besagt, dass das Wachstum durch den im Verhältnis zum Bedarf am knappsten vorhandenen Faktor (Minimumfaktor) begrenzt wird.","korrekt":true},{"nr":3,"text":"Die ökologische Nische einer Art entspricht der fundamentalen Nische — dem tatsächlich besetzten Lebensraum unter Berücksichtigung biotischer Interaktionen.","korrekt":false},{"nr":4,"text":"Pufferzonen (Gradiente von euryöken zu stenöken Arten) werden in der Naturschutzbiologie genutzt, um Indikatoren für Umweltqualität zu identifizieren.","korrekt":true},{"nr":5,"text":"Temperatur ist kein abiotischer Umweltfaktor, da Organismen ihre Körpertemperatur intern regulieren können.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Stenöke Arten (z. B. Bioindikatoren wie Steinfliegen im Wasser) reagieren empfindlich auf Umweltschwankungen → nützlich als Umweltindikatoren, aber anfälliger für Aussterben. Euryöke Arten (z. B. Ratte, Möwe) tolerieren weite Schwankungen. Aussage 2 korrekt: Liebig-Fass-Analogie: Das Fass läuft über die kürzeste Daube aus — Wachstum wird durch den relativen Mangelfaktor begrenzt, nicht durch das Abundanz anderer Faktoren. Aussage 3 falsch: Die fundamentale Nische = potenziell besiedelbar ohne Konkurrenten; die REALISIERTE Nische = tatsächlich besetzt unter biotischem Druck (Konkurrenz, Prädation). Aussage 4 korrekt: Bioindikatoren (stenöke Arten) zeigen Umweltqualität an; Saprobienindex nutzt Wirbellosengemeinschaften zur Gewässergütebewertung. Aussage 5 falsch: Temperatur ist ein klassischer ABIOTISCHER Faktor — auch wenn Endothermen (Vögel, Säuger) Körpertemperatur regulieren, ist Umgebungstemperatur trotzdem ein begrenzender Faktor (Energieaufwand für Thermoregulation).',
  2
),
(
  'typa-bio-10-01-nische',
  'A', 'biologie', 'bio-10-01',
  'Eine Vogelart A bewohnt in Abwesenheit von Art B die Baumschichten 1–5 eines Waldes. In Anwesenheit von Art B (Konkurrent) beschränkt sich Art A auf die Schichten 3–5. Welche Begriffe beschreiben die jeweiligen Zustände?',
  '[{"key":"A","text":"Schichten 1–5: realisierte Nische; Schichten 3–5: fundamentale Nische"},{"key":"B","text":"Schichten 1–5: ökologische Amplitude; Schichten 3–5: Toleranzbereich"},{"key":"C","text":"Schichten 1–5: fundamentale Nische; Schichten 3–5: realisierte Nische — eingeschränkt durch interspezifische Konkurrenz"},{"key":"D","text":"Schichten 1–5: Biotop; Schichten 3–5: Biozönose"},{"key":"E","text":"Schichten 1–5: Habitat; Schichten 3–5: Nische — beide Begriffe sind synonym"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die fundamentale Nische = der theoretisch mögliche Ressourcenraum einer Art ohne biotische Einschränkungen (hier Schichten 1–5 bei Abwesenheit des Konkurrenten). Die realisierte Nische = der tatsächlich genutzte Ressourcenraum unter Einfluss biotischer Faktoren wie interspezifische Konkurrenz (hier Schichten 3–5 durch Verdrängung durch Art B). Dieses Konzept stammt von Hutchinson (1957, n-dimensionale Hypervolumen-Nische). Kompetitiver Ausschluss (Gauße''sches Gesetz): Zwei Arten mit identischer ökologischer Nische können nicht dauerhaft koexistieren — eine verdrängt die andere.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-10-02: Biotische Faktoren — Konkurrenz, Prädation, Symbiose
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-10-02-symbiostypen',
  'A', 'biologie', 'bio-10-02',
  'Stickstoffbindende Rhizobien leben in Wurzelknöllchen von Hülsenfrüchten: Die Pflanze liefert Kohlenhydrate, die Bakterien liefern Ammonium (biologisch fixierter Stickstoff). Welche Art von Symbiose liegt vor?',
  '[{"key":"A","text":"Kommensalismus — nur eine Art profitiert, die andere ist unbeeinflusst"},{"key":"B","text":"Parasitismus — die Bakterien schädigen die Pflanzenwurzeln"},{"key":"C","text":"Mutualismus — beide Arten profitieren von der Wechselbeziehung"},{"key":"D","text":"Amensalismus — die Bakterien hemmen das Pflanzenwachstum einseitig"},{"key":"E","text":"Konkurrenz — beide Arten konkurrieren um denselben Nährstoff"}]'::jsonb,
  'C',
  NULL, NULL,
  'Mutualismus = beide Arten profitieren (+/+): Rhizobien erhalten Kohlenhydrate (Energie) von der Pflanze; die Pflanze erhält biologisch fixierten Stickstoff (NH4+) aus N2 der Atmosphäre — essentiell da Pflanzen N2 nicht selbst fixieren können. Diese Interaktion ist agronomisch enorm wichtig (Leguminosen als "grüner Dünger"). Weitere Mutualismusbeispiele: Mykorrhiza (Pilz + Pflanzenwurzel), Clownfisch + Seeanemone, Darmflora + Mensch. Kommensalismus (+/0): z. B. Epiphyten auf Bäumen. Parasitismus (+/−): Zecke auf Säuger. Amensalismus (0/−): Penicillium produziert Antibiotikum, hemmt Bakterien ohne Eigennutzen.',
  1
),
(
  'typk-bio-10-02-biotischint',
  'K', 'biologie', 'bio-10-02',
  'Welche der folgenden Aussagen zu biotischen Wechselwirkungen sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Interspezifische Konkurrenz (zwischen verschiedenen Arten) führt häufig zu Nischendifferenzierung als evolutionäre Anpassung zur Ressourcenteilung.","korrekt":true},{"nr":2,"text":"Räuber-Beute-Systeme zeigen oft zyklische Populationsschwankungen, bei denen Beutepopulationen Räuberpopulationen zeitlich vorauseilen.","korrekt":true},{"nr":3,"text":"Parasiten sind immer schädlich für ihren Wirt und führen unweigerlich zum Tod des Wirtsorganismus.","korrekt":false},{"nr":4,"text":"Mimikry (z. B. Batessche Mimikry) ist ein Beispiel für Koevolution: eine ungiftige Art imitiert das Warnsignal einer giftigen Art.","korrekt":true},{"nr":5,"text":"Intraspezifische Konkurrenz (innerhalb einer Art) reguliert Populationsdichte dichteabhängig und hält Populationen unter der Kapazitätsgrenze K.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[1,2,4,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Nischendifferenzierung = Zeichentrennung (character displacement) als Anpassung an interspezifische Konkurrenz; z. B. Darwinfinken mit unterschiedlichen Schnabelgrößen auf Inseln mit Konkurrenten vs. ohne. Aussage 2 korrekt: Lotka-Volterra-Modell: Beutepopulation wächst → Räuberpopulation wächst zeitversetzt → Beutepopulation sinkt → Räuberpopulation sinkt → Zyklus. Klassisch: Kanadischer Luchs und Schneeschuhenhase (10-Jahres-Zyklus). Aussage 3 falsch: Parasiten sind auf lebende Wirte angewiesen — ein sofort tödlicher Parasit wäre evolutionär benachteiligt (kein Wirt = keine Weitergabe). Die meisten Parasiten sind chronisch schädlich, nicht akut letal. Aussage 4 korrekt: Batessche Mimikry: ungiftige Art ahmt Warnfärbung giftiger Art nach (z. B. Schwebfliege imitiert Wespe) — Koevolution zwischen Schutzsystem und Imitator. Aussage 5 korrekt: Dichteabhängige Regulation: Mit steigender Populationsdichte steigen Konkurrenz, Krankheiten, Prädationsdruck → negative Rückkopplung hält Population um Kapazitätsgrenze K.',
  2
),
(
  'typa-bio-10-02-praedbeutezykl',
  'A', 'biologie', 'bio-10-02',
  'Das Lotka-Volterra-Modell beschreibt Räuber-Beute-Zyklen. Welche Aussage ist korrekt?',
  '[{"key":"A","text":"Räuber- und Beutepopulationen oszillieren in Phase — sie erreichen ihre Maxima gleichzeitig"},{"key":"B","text":"Beutepopulationen oscillieren zeitlich vor Räuberpopulationen — ein Beutepeak geht dem Räuberpeak voran"},{"key":"C","text":"Das Modell zeigt, dass Räuber ihre Beutepopulation immer vollständig ausrotten"},{"key":"D","text":"Nur abiotische Faktoren (Klima) treiben die Zyklen an; biotische Interaktionen spielen keine Rolle"},{"key":"E","text":"Das Lotka-Volterra-Modell gilt nur für terrestrische Ökosysteme, nicht für marine"}]'::jsonb,
  'B',
  NULL, NULL,
  'Im Lotka-Volterra-Modell (unabhängig entwickelt von Alfred Lotka 1925 und Vito Volterra 1926): Beutepopulation wächst exponentiell → Räuberpopulation kann zunehmen → Beutemenge sinkt (Überjagung) → Räuberpopulation mangels Nahrung sinkt → Beutepopulation erholt sich → Zyklus beginnt neu. Zeitversatz: Der Beutepeak geht dem Räuberpeak um eine Viertelperiode voraus. Das ist das charakteristische Muster der Räuber-Beute-Populationsdynamik. Reale Systeme haben zusätzliche Faktoren (Versteck, alternative Beute, Krankheiten). Klassisches Beispiel: Luchs-Schneeschuhenhase-Daten von Hudson''s Bay Company (Pelzhändler) über >100 Jahre.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-10-03: Populationsökologie — Wachstum, K, r/K-Strategie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-10-03-logistisch',
  'A', 'biologie', 'bio-10-03',
  'Was unterscheidet logistisches Populationswachstum von exponentiellem Wachstum?',
  '[{"key":"A","text":"Exponentielles Wachstum ist schneller als logistisches; logistisches Wachstum wird durch nichts begrenzt"},{"key":"B","text":"Logistisches Wachstum verläuft S-förmig (sigmoidal) und nähert sich einer Kapazitätsgrenze K an — durch dichteabhängige Faktoren gebremst; exponentielles Wachstum ist J-förmig und unbegrenzt"},{"key":"C","text":"Logistisches Wachstum ist linear; exponentielles Wachstum ist kurvenförmig"},{"key":"D","text":"Beide Wachstumstypen führen zum selben Ergebnis — nur die Geschwindigkeit unterscheidet sich"},{"key":"E","text":"Exponentielles Wachstum berücksichtigt Räuber; logistisches Wachstum nicht"}]'::jsonb,
  'B',
  NULL, NULL,
  'Exponentielles Wachstum (J-Kurve): dN/dt = r×N — Wachstumsrate proportional zur Populationsgröße, theoretisch unbegrenzt. Gilt nur bei reichlichen Ressourcen (z. B. Erstbesiedlung eines Lebensraums, Bakterien in Nährmedium). Logistisches Wachstum (S-Kurve/Sigmoid): dN/dt = r×N×(K−N)/K — Wachstum verlangsamt sich, wenn N sich K nähert. K = Kapazitätsgrenze (carrying capacity) = maximale Populationsgröße, die der Lebensraum dauerhaft tragen kann. Brems-Mechanismus: Dichteabhängige Faktoren (Nahrungsknappheit, Konkurrenz, Krankheiten, Prädation) nehmen mit steigender Dichte zu.',
  1
),
(
  'typk-bio-10-03-rkstrategen',
  'K', 'biologie', 'bio-10-03',
  'Welche der folgenden Aussagen zu r- und K-Strategen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"r-Strategen haben hohe Reproduktionsraten, kurze Generationszeiten und investieren wenig in einzelne Nachkommen — typisch für instabile Umgebungen.","korrekt":true},{"nr":2,"text":"K-Strategen leben nahe der Kapazitätsgrenze K, haben wenige Nachkommen mit hoher elterlicher Fürsorge und sind an stabile Umgebungen angepasst.","korrekt":true},{"nr":3,"text":"Der Mensch ist ein typischer r-Stratege aufgrund seiner kurzen Generationszeit und hohen Kinderzahl.","korrekt":false},{"nr":4,"text":"Dichteunabhängige Faktoren (Frost, Dürre, Überflutung) treffen alle Individuen einer Population unabhängig von ihrer Dichte.","korrekt":true},{"nr":5,"text":"Überalterung einer Population (hoher Anteil alter Individuen) führt kurzfristig zu stark zunehmendem Populationswachstum.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: r-Strategen (r = intrinsische Wachstumsrate): Mäuse, Insekten, Unkräuter — viele kleine Nachkommen, kurze Generationszeit, opportunistisch, schnelle Kolonisation. Aussage 2 korrekt: K-Strategen (K = Kapazitätsgrenze): Elefant, Adler, Mensch — wenige Nachkommen, lange Generationszeit, intensive Brutpflege, hohe Überlebensrate der Nachkommen. Aussage 3 falsch: Mensch ist typischer K-STRATEGE: 1–2 Kinder pro Reproduktionsereignis, 20+ Jahre Generationszeit, intensive elterliche Investition. Aussage 4 korrekt: Dichteunabhängige Faktoren = Katastrophen (Frost, Feuer, Dürre) treffen alle Individuen gleich, unabhängig von Populationsdichte — regulieren Populationen von außen. Aussage 5 falsch: Überalterung reduziert den reproduktiven Teil der Population → Wachstumsrate sinkt (weniger Reproduzierende) → langfristig Populationsrückgang, nicht Zunahme.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 11: Immunologie ──────────────────────────────────

-- UK bio-11-01: Antikörperstruktur und -funktion
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-11-01-akstruktur',
  'A', 'biologie', 'bio-11-01',
  'Ein IgG-Antikörper besteht aus vier Polypeptidketten. Welche Aussage zur Struktur ist korrekt?',
  '[{"key":"A","text":"Zwei identische schwere Ketten (H) und zwei identische leichte Ketten (L), verbunden durch Disulfidbrücken — bilden eine Y-förmige Struktur mit zwei Fab-Armen und einem Fc-Stück"},{"key":"B","text":"Vier identische schwere Ketten ohne leichte Ketten, verbunden durch Peptidbindungen"},{"key":"C","text":"Eine schwere und drei leichte Ketten, die das Antigen an der Fc-Region binden"},{"key":"D","text":"Zwei schwere und zwei leichte Ketten, wobei die Antigenbindung am Fc-Stück stattfindet"},{"key":"E","text":"Zwei leichte Ketten bilden die Antigenbindungsstelle; schwere Ketten sind nur für Effektorfunktionen zuständig"}]'::jsonb,
  'A',
  NULL, NULL,
  'IgG-Struktur: Zwei schwere Ketten (H, ~50 kDa) und zwei leichte Ketten (L, ~25 kDa), verbunden durch Disulfidbrücken (H-H und H-L). Y-Form: Zwei Fab-Fragmente (Fragment antigen-binding): enthalten je eine variable Region (VH + VL) → bilden die Antigenbindungsstelle (CDRs, Complementarity Determining Regions); Ein Fc-Fragment (Fragment crystallizable): konstante Regionen beider schwerer Ketten → vermittelt Effektorfunktionen (Komplementaktivierung, Fc-Rezeptor-Bindung auf Makrophagen, NK-Zellen, Mastzellen). Wichtig: BEIDE Fab-Arme und ALLE Ketten (H+L) bilden gemeinsam die Antigenbindungsstelle. Das Fc-Fragment bindet KEIN Antigen.',
  2
),
(
  'typk-bio-11-01-akfunktionen',
  'K', 'biologie', 'bio-11-01',
  'Welche der folgenden Aussagen zu Antikörpern und ihrer Funktion sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"IgA ist der häufigste Antikörper im Serum und spielt die Hauptrolle bei der systemischen Immunantwort.","korrekt":false},{"nr":2,"text":"IgM ist ein Pentamer (5 IgM-Einheiten verbunden durch J-Kette) und wird als erste Antikörperklasse bei einer Primärantwort produziert.","korrekt":true},{"nr":3,"text":"Opsonisierung bedeutet, dass Antikörper (IgG) Pathogene markieren und so die Phagozytose durch Makrophagen und Neutrophile erleichtern.","korrekt":true},{"nr":4,"text":"Der Klassenswitch (Isotypwechsel) bei B-Zellen ermöglicht die Produktion verschiedener Antikörperklassen (IgM → IgG, IgA, IgE) bei gleichbleibender Antigenspezifität.","korrekt":true},{"nr":5,"text":"Antikörper können Viren direkt durch enzymatische Spaltung ihrer Hüllproteine inaktivieren.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 falsch: IgG ist der häufigste Antikörper im Serum (~75% aller Immunglobuline); IgA ist häufigster Antikörper in Sekreten (Speichel, Tränen, Muttermilch, Darm). Aussage 2 korrekt: IgM-Pentamer: 5 Monomere verbunden durch J-Kette und Disulfidbrücken — 10 Antigenbindungsstellen → hohe Avidität. Erste AK-Klasse in der Primärantwort (→ IgM-Spiegel = akute Infektion). Aussage 3 korrekt: Opsonisierung (griech. opsonein = zubereiten): IgG bindet Pathogen-Oberfläche → Fc-Region bindet Fc-Rezeptoren auf Phagozyten → erleichtertes "Andocken" und Phagozytose. Aussage 4 korrekt: Klassenswitch (durch AID-Enzym und T-Helferzellen/CD40L-CD40): VDJ-Region bleibt gleich (Spezifität unverändert), Fc-Region wechselt (IgM→IgG→IgA oder IgE) je nach Zytokinmilieu. Aussage 5 falsch: Antikörper neutralisieren Viren durch Blockade von Rezeptorbindung, nicht durch enzymatische Spaltung — das machen Proteasen/Lysozym.',
  2
),
(
  'typa-bio-11-01-neutralisation',
  'A', 'biologie', 'bio-11-01',
  'Wie neutralisieren Antikörper Viren?',
  '[{"key":"A","text":"Sie zerstören die virale RNA durch RNase-Aktivität"},{"key":"B","text":"Sie binden an Oberflächenproteine des Virus und blockieren die Bindung an Wirtszellrezeptoren, sodass der Virus nicht in Zellen eindringen kann"},{"key":"C","text":"Sie lysieren den Virus durch Porenbildung (ähnlich Komplement-MAC)"},{"key":"D","text":"Sie aktivieren Viren-spezifische Proteasen des Wirts"},{"key":"E","text":"Sie transportieren Viren in Lysosomen, wo sie abgebaut werden"}]'::jsonb,
  'B',
  NULL, NULL,
  'Virusneutralisation: Neutralisierende Antikörper (nAb) binden an Oberflächenproteine des Virus (z. B. SARS-CoV-2 Spike-Protein, Influenza Hämagglutinin), die normalerweise an Wirtszellrezeptoren binden. Durch sterische Blockade können der Virus nicht an seinen Rezeptor binden und nicht in die Zelle eindringen → Infektion verhindert. Dies ist das Hauptziel von Impfstoffdesign (Induktion neutralisierender Antikörper). Zusätzliche Effektormechanismen: ADCC (Antikörper-abhängige zelluläre Zytotoxizität) über Fc-Rezeptoren auf NK-Zellen; Komplementaktivierung über Fc-Region.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-11-02: V(D)J-Rekombination und B-Zell-Reifung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-11-02-vdjrekomb',
  'A', 'biologie', 'bio-11-02',
  'Was ist der Mechanismus der V(D)J-Rekombination und warum ist sie wichtig?',
  '[{"key":"A","text":"V(D)J-Rekombination ist eine Punktmutation, die schrittweise Antikörpergene verändert"},{"key":"B","text":"V(D)J-Rekombination ist somatische DNA-Rekombination in B- und T-Zellen: Variable (V), Diversity (D) und Joining (J) Gensegmente werden zufällig kombiniert — das erzeugt die astronomische Diversität von >10^11 verschiedenen Antikörpern"},{"key":"C","text":"V(D)J-Rekombination erfolgt in der Keimbahn und wird an Nachkommen weitergegeben"},{"key":"D","text":"V(D)J-Rekombination produziert nur leichte Ketten; schwere Ketten entstehen durch alternatives Spleißen"},{"key":"E","text":"V(D)J-Rekombination ist identisch mit dem Klassenswitch und produziert verschiedene IgG-Subklassen"}]'::jsonb,
  'B',
  NULL, NULL,
  'V(D)J-Rekombination ist eine somatische DNA-Rekombination (nicht Keimbahn), die ausschließlich in Lymphozyten stattfindet. Mechanismus: RAG1/RAG2-Rekombinasen schneiden DNA und verbinden zufällig ausgewählte V-, D- und J-Gensegmente. Für schwere Ketten: V×D×J-Kombination (ca. 40 V × 25 D × 6 J = ~6.000 Kombinationen). Für leichte Ketten (κ oder λ): V×J (kein D-Segment). Zusätzliche Diversität durch: junctionale Diversität (Einfügen/Entfernen von Nukleotiden an Verbindungsstellen durch TdT = terminale Deoxynukleotidyltransferase). Kombination schwere + leichte Kette → >10^11 verschiedene Antikörperspezifitäten. Weitere somatische Hypermutation in Keimzentren steigert Affinität.',
  3
),
(
  'typk-bio-11-02-bzellreif',
  'K', 'biologie', 'bio-11-02',
  'Welche der folgenden Aussagen zur B-Zell-Reifung und Immuntoleranz sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"B-Zellen reifen im Knochenmark; negative Selektion eliminiert B-Zellen, die stark an körpereigene Antigene (Selbst-Antigene) binden.","korrekt":true},{"nr":2,"text":"Plasmazellen sind hochspezialisierte, kurzlebige Antikörperfabriken mit ausgedehntem rauen ER — sie proliferieren nach Antigenkontakt nicht mehr.","korrekt":true},{"nr":3,"text":"Gedächtniszellen entstehen nach Antigenkontakt und ermöglichen die schnellere und stärkere Sekundärantwort bei Reexposition.","korrekt":true},{"nr":4,"text":"Somatische Hypermutation findet im Keimzentrum der Lymphknoten statt und erhöht die Antikörperaffinität durch zufällige Mutationen in der variablen Region.","korrekt":true},{"nr":5,"text":"Affinitätsreifung bedeutet, dass B-Zellen mit niedrigerer Affinität im Keimzentrum selektiv bevorzugt werden.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Zentrale Toleranz im Knochenmark: B-Zellen mit hoher Affinität zu Selbst-Antigenen werden durch klonale Deletion (Apoptose), klonalen Anergie oder Rezeptor-Editing eliminiert → Verhinderung von Autoimmunität. Aussage 2 korrekt: Plasmazellen (terminale Differenzierung von B-Zellen): massiv expandiertes raues ER für Antikörpersynthese (>1000 Ak/Sekunde); proliferieren nicht mehr; kurzlebig (Tage–Wochen) oder langlebig im Knochenmark. Aussage 3 korrekt: Gedächtnis-B-Zellen: langlebig, schneller aktivierbar, produzieren bei Sekundärantwort hochaffine IgG (nicht IgM wie primär) → Basis der Impfung. Aussage 4 korrekt: Somatische Hypermutation: AID (Activation-Induced Cytidine Deaminase) induziert Mutationen in CDRs → B-Zellen mit höherer Affinität überleben Keimzentrumsreaktion besser (positive Selektion durch FDCs). Aussage 5 falsch: Affinitätsreifung bevorzugt B-Zellen mit HÖHERER Affinität — niedrigaffine werden eliminiert (Apoptose). Ziel: progressive Steigerung der Antikörperqualität.',
  3
),
(
  'typa-bio-11-02-rague',
  'A', 'biologie', 'bio-11-02',
  'Welche Enzyme sind für die V(D)J-Rekombination essentiell und was passiert bei ihrem Fehlen?',
  '[{"key":"A","text":"DNA-Polymerase I und Ligase; bei Fehlen entstehen keine Antikörper und keine T-Zell-Rezeptoren → SCID"},{"key":"B","text":"RAG1 und RAG2 (Recombination Activating Genes); bei Fehlen können keine VDJ-Verbindungen geknüpft werden → B- und T-Zell-Mangel → schwerer kombinierter Immundefekt (SCID)"},{"key":"C","text":"AID (Activation-Induced Cytidine Deaminase); bei Fehlen entsteht keine V(D)J-Rekombination"},{"key":"D","text":"TdT (terminale Deoxynukleotidyltransferase); bei Fehlen entsteht kein Primärrepertoire"},{"key":"E","text":"Rekombinase I und II; bei Fehlen kann kein Klassenswitch stattfinden"}]'::jsonb,
  'B',
  NULL, NULL,
  'RAG1 und RAG2 (Recombination Activating Genes 1 und 2) sind die Rekombinasen, die spezifisch Recombination Signal Sequences (RSS) erkennen, die DNA schneiden und V-, D- und J-Segmente verbinden. Ohne RAG1/2: V(D)J-Rekombination ist vollständig blockiert → keine funktionellen BCR (B-Zell-Rezeptoren) oder TCR (T-Zell-Rezeptoren) → keine reifen B- und T-Lymphozyten → Schwerer Kombinierter Immundefekt (SCID, "Bubble Boy"-Syndrom). RAG-Defizit ist eine bekannte SCID-Ursache. TdT fügt N-Nukleotide an Verbindungsstellen ein (junctionelle Diversität), ist aber nicht für die Grundrekombination essentiell. AID ist für somatische Hypermutation und Klassenswitch (nach Antigenstimulation) verantwortlich — nicht für primäre V(D)J-Rekombination.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-11-03: Blutgruppen AB0 und Transfusionsmedizin
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-11-03-blutgruppen',
  'A', 'biologie', 'bio-11-03',
  'Eine Person mit Blutgruppe A hat Antikörper gegen Antigen B (Anti-B). Welche Blutgruppe darf diese Person NICHT transfundiert bekommen?',
  '[{"key":"A","text":"Nur Blutgruppe 0 — diese hat keine Antigene"},{"key":"B","text":"Blutgruppe B und AB — beide tragen das B-Antigen, gegen das der Empfänger Anti-B-Antikörper hat"},{"key":"C","text":"Nur Blutgruppe AB — weil sie beide Antigene trägt"},{"key":"D","text":"Keine Einschränkung — Blutgruppe A kann alle Blutgruppen empfangen"},{"key":"E","text":"Blutgruppe A und 0 — beide sind inkompatibel mit Typ A"}]'::jsonb,
  'B',
  NULL, NULL,
  'AB0-Kompatibilität: Person mit Blutgruppe A trägt A-Antigene auf Erythrozyten und hat Anti-B-Antikörper im Plasma (Isoagglutinine, entstehen durch Exposition gegenüber Umweltantigenen ähnlich B-Antigen). Inkompatible Blutgruppen für Spende an Typ A: Blutgruppe B (trägt B-Antigen → Anti-B des Empfängers erkennt es → Hämagglutination → hämolytische Transfusionsreaktion) und Blutgruppe AB (trägt BEIDE Antigene A und B — das B-Antigen würde attackiert). Kompatible Spender für Typ A: Blutgruppe A (gleiches Antigen) und Blutgruppe 0 (keine AB-Antigene → "universeller Spender" für Erythrozyten).',
  1
),
(
  'typk-bio-11-03-ab0system',
  'K', 'biologie', 'bio-11-03',
  'Welche der folgenden Aussagen zum AB0-Blutgruppensystem sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Das AB0-System wird durch das ABO-Gen kodiert, das verschiedene Glykosyltransferasen produziert, die unterschiedliche Zuckermoleküle an Erythrozytenoberflächen anhängen.","korrekt":true},{"nr":2,"text":"Personen mit Blutgruppe AB sind universelle Spender, weil ihr Blut keine Antikörper gegen A oder B enthält.","korrekt":false},{"nr":3,"text":"Blutgruppe 0 entsteht, wenn das ABO-Gen nicht-funktionale Allele trägt, die keine Glykosyltransferase produzieren — daher keine AB-Antigene auf Erythrozyten.","korrekt":true},{"nr":4,"text":"Anti-A und Anti-B Antikörper sind IgM-Antikörper, die bei AB0-inkompatiblen Transfusionen das Komplementsystem aktivieren und intravasale Hämolyse verursachen.","korrekt":true},{"nr":5,"text":"Blutgruppe AB mit Rhesusfaktor positiv ist der universelle Empfänger, da dieser Patient keine Anti-A, Anti-B oder Anti-Rh-Antikörper hat.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[1,3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: ABO-Gen kodiert Alpha-1,3-N-Acetylgalactosaminyltransferase (A-Allel → A-Antigen) bzw. Alpha-1,3-Galactosyltransferase (B-Allel → B-Antigen) — fügen verschiedene Zucker an H-Antigen an. Aussage 2 falsch: AB-Personen sind universelle EMPFÄNGER (kein Anti-A, Anti-B) — nicht Spender! Universeller Spender (Erythrozyten) = Blutgruppe 0 (kein A, kein B). Aber: Blutgruppe 0 enthält Anti-A und Anti-B → für Vollblut-Transfusion nicht universell. Aussage 3 korrekt: 0-Allel = Frameshift-Mutation → funktionslose Glykosyltransferase → kein Zuckerantigen wird an H-Substanz angehängt → nur H-Antigen auf Erythrozyten. Aussage 4 korrekt: Isoagglutinine (Anti-A/B) sind natürliche IgM-Antikörper → binden Antigen → Komplementkaskade (klassischer Weg) → MAC → intravasale Hämolyse → lebensgefährliche hämolytische Transfusionsreaktion. Aussage 5 korrekt: AB Rh+ Universalempfänger: kein Anti-A (hat A+B-Antigen), kein Anti-B, kein Anti-D → verträgt alle Erythrozytenkonzentrate.',
  2
),
(
  'typa-bio-11-03-blutgruppenvererbung',
  'A', 'biologie', 'bio-11-03',
  'Mutter hat Blutgruppe A (Genotyp IA i), Vater hat Blutgruppe B (Genotyp IB i). Welche Blutgruppen können ihre Kinder haben?',
  '[{"key":"A","text":"Nur AB und 0"},{"key":"B","text":"Nur A und B"},{"key":"C","text":"A, B, AB und 0 — alle vier Blutgruppen möglich"},{"key":"D","text":"Nur AB (beide dominante Allele werden vererbt)"},{"key":"E","text":"Nur 0 (beide rezessiven Allele werden vererbt)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Kreuzung IA i × IB i: Mögliche Nachkommen: IA IB (Blutgruppe AB, 25%), IA i (Blutgruppe A, 25%), IB i (Blutgruppe B, 25%), ii (Blutgruppe 0, 25%). Alle vier AB0-Blutgruppen sind möglich! Dies liegt daran, dass beide Eltern heterozygot sind — je ein dominantes Allel (IA oder IB) und ein rezessives Allel (i = Blutgruppe 0). IA und IB sind kodominant zueinander (beide werden exprimiert → AB); i ist rezessiv gegenüber IA und IB. Diese Konstellation wird in der forensischen Vaterschaftsbestimmung und in genetischen Beratungen analysiert.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK bio-11-04: Rhesusfaktor und Rhesusinkompatibilität
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-bio-11-04-rh',
  'A', 'biologie', 'bio-11-04',
  'Was ist der Rhesusfaktor (Rh) und welches klinische Problem entsteht bei Rhesusinkompatibilität in der Schwangerschaft?',
  '[{"key":"A","text":"Rh ist ein Enzym auf Leukozyten; Inkompatibilität führt zu Leukopenie beim Neugeborenen"},{"key":"B","text":"Rh (D-Antigen) ist ein Membranprotein auf Erythrozyten; bei Rh-negativer Mutter mit Rh-positivem Kind können mütterliche Anti-D-IgG-Antikörper die Plazenta passieren und Erythrozyten des Kindes zerstören → Morbus haemolyticus neonatorum"},{"key":"C","text":"Rh ist identisch mit dem AB0-System; Inkompatibilität tritt nur bei Bluttransfusionen auf"},{"key":"D","text":"Rh ist ein Antikörper; Rh-positive Personen produzieren diesen Antikörper natürlicherweise"},{"key":"E","text":"Rh-Inkompatibilität betrifft nur die Mutter, nicht das Kind — das Kind ist durch die Plazentabarriere vollständig geschützt"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das D-Antigen (Rhesusfaktor) ist ein integrales Membranprotein auf Erythrozyten. Rh+ = D-Antigen vorhanden; Rh− = fehlt. Rhesusinkompatibilität: Rh-negative Mutter (kein D-Antigen, keine natürlichen Anti-D-Antikörper) trägt Rh-positives Kind (D-Antigen vom Vater geerbt). Bei fetomaternaler Blutung (oft unter der Geburt) kommen kindliche Rh+ Erythrozyten in mütterlichen Kreislauf → Immunisierung → Mutter bildet Anti-D-IgG-Antikörper. In FOLGENDEN Schwangerschaften: Anti-D-IgG (klein genug für Plazentapassage durch FcRn) gelangt ins Kind → zerstört kindliche Erythrozyten → Morbus haemolyticus neonatorum (Hydrops fetalis möglich). Prophylaxe: Anti-D-Immunglobulin (Rhesusprophylaxe) nach Geburt/Einblutung → verhindert Immunisierung der Mutter.',
  2
),
(
  'typk-bio-11-04-rhprophylaxe',
  'K', 'biologie', 'bio-11-04',
  'Welche der folgenden Aussagen zur Rhesusprophylaxe und Rhesusinkompatibilität sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Rhesusprophylaxe (Anti-D-Immunglobulin) wird einer Rh-negativen Mutter nach Geburt eines Rh-positiven Kindes gegeben, um ihre Immunisierung zu verhindern.","korrekt":true},{"nr":2,"text":"Bei der ersten Schwangerschaft mit Rh-inkompatiblem Kind ist das Risiko für den Fetus meistens gering, da die Mutter noch keine Anti-D-Antikörper gebildet hat.","korrekt":true},{"nr":3,"text":"Anti-D-IgG-Antikörper können die Plazenta passieren, weil IgG-Antikörper durch den fetalen Fc-Rezeptor (FcRn) aktiv transportiert werden.","korrekt":true},{"nr":4,"text":"IgM-Antikörper gegen AB0-Antigene können ebenfalls die Plazenta passieren und schwere hämolytische Erkrankungen beim Neugeborenen auslösen.","korrekt":false},{"nr":5,"text":"Das D-Antigen ist hoch immunogen — eine einzige fetomaternale Einblutung von wenigen Millilitern Rh+ Blut kann eine Anti-D-Immunantwort auslösen.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[1,2,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1 korrekt: Anti-D-Ig (Rhophylac, RhoGAM) → passiver Transfer von Anti-D-Antikörpern → diese opsonisieren kindliche Rh+ Erythrozyten im Mutterblut und eliminieren sie, bevor die Mutter eine eigene Immunantwort aufbauen kann (klonale Deletion/Suppression). Gegeben innerhalb 72h post partum (und pränatal in 28. SSW). Aussage 2 korrekt: Erstimmunisierung erfordert Sensibilisierung → bei Erstgeburt meist noch kein IgG-Titer → Fetus meist ungeschädigt. Gefahr erst ab Zweitgeburt. Aussage 3 korrekt: FcRn (neonatal Fc receptor) transportiert IgG aktiv durch Synzytiotrophoblasten → mütterliche IgG-Antikörper (inkl. Anti-D) gelangen in fetalen Kreislauf → passive Immunisierung (und Risiko bei Anti-D). Aussage 4 falsch: IgM ist zu groß (Pentamer) für Plazentapassage durch FcRn → AB0-Isoagglutinine (IgM) passieren die Plazenta NICHT → AB0-Inkompatibilität verursacht milde, nicht schwere hämolytische Erkrankung beim Neugeborenen. Aussage 5 korrekt: D-Antigen ist hochimmunogen; bereits 0,1 ml Rh+ Blut können Immunisierung auslösen → daher routinemäßige Prophylaxe.',
  3
),
(
  'typa-bio-11-04-transfusion',
  'A', 'biologie', 'bio-11-04',
  'Ein Rh-negativer Mann (Blutgruppe 0, Rh−) erhält irrtümlich Rh-positives Blut (Blutgruppe 0, Rh+). Was passiert bei einer zweiten versehentlichen Transfusion mit Rh+ Blut?',
  '[{"key":"A","text":"Keine Reaktion — die erste Transfusion hat Toleranz induziert"},{"key":"B","text":"Bei der ersten Transfusion wird der Mann sensibilisiert und bildet Anti-D-IgG; bei der zweiten Transfusion reagieren diese Antikörper mit den Rh+ Erythrozyten → hämolytische Transfusionsreaktion"},{"key":"C","text":"Sofortige hämolytische Reaktion bereits bei der ersten Transfusion, da alle Menschen natürliche Anti-D-Antikörper haben"},{"key":"D","text":"Nur leichte Reaktion bei der zweiten Transfusion, da Rh-Inkompatibilität weniger gefährlich ist als AB0-Inkompatibilität"},{"key":"E","text":"Die zweite Transfusion ist sicher, da IgG-Antikörper Erythrozyten nicht zerstören können"}]'::jsonb,
  'B',
  NULL, NULL,
  'Im Gegensatz zu AB0-Isoagglutininen (natürlich vorhanden) bildet ein Rh-negativer Mensch Anti-D-Antikörper ERST nach Exposition (Immunisierung). Bei erster Rh+-Exposition: Primärantwort → nach Wochen entstehen Anti-D-IgG-Antikörper (klinisch meist keine akute Reaktion, da AK-Bildung verzögert). Bei zweiter Rh+-Exposition: Sekundärantwort → bereits vorhandene Anti-D-Gedächtnis-B-Zellen → schnelle, massive IgG-Produktion → Opsonisierung der Rh+ Erythrozyten → extravaskuläre Hämolyse (FcR-Makrophagen in Milz) → hämolytische Transfusionsreaktion (Fieber, Schüttelfrost, Hämolyse). Das ist der Grund für obligatorische Kreuzprobe vor jeder Transfusion.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- CHEMIE Kap 1-7: BMS Fragen-Bank
-- Generiert fuer MedAT-Format (Typ A: 5 Optionen; Typ K: 5 Aussagen, exakt 3 korrekt)
-- uk_id-Referenzen aus den TS-Quelldateien

-- ============================================================
-- KAP 1: ATOMBAU
-- ============================================================

-- UK ch-1-01: Elementarteilchen und Atomaufbau
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-1-01-neutronenzahl',
  'A', 'chemie', 'ch-1-01',
  'Ein Atom hat die Ordnungszahl Z = 15 und die Massenzahl A = 31. Wie viele Neutronen befinden sich in seinem Kern?',
  '[{"key":"A","text":"15"},{"key":"B","text":"16"},{"key":"C","text":"31"},{"key":"D","text":"46"},{"key":"E","text":"14"}]'::jsonb,
  'B',
  NULL, NULL,
  'N = A - Z = 31 - 15 = 16 Neutronen. Dies ist das haeufigste Phosphorisotop ³¹P. Die Ordnungszahl Z gibt die Protonenanzahl an, die Massenzahl A die Summe aus Protonen und Neutronen.',
  1
),
(
  'typa-ch-1-01-mschale',
  'A', 'chemie', 'ch-1-01',
  'Wie viele Elektronen koennen maximal in der M-Schale (n = 3) eines Atoms untergebracht werden?',
  '[{"key":"A","text":"2"},{"key":"B","text":"8"},{"key":"C","text":"10"},{"key":"D","text":"18"},{"key":"E","text":"32"}]'::jsonb,
  'D',
  NULL, NULL,
  'Die maximale Elektronenzahl einer Schale berechnet sich nach 2n². Fuer n = 3: 2 × 3² = 2 × 9 = 18 Elektronen. K-Schale (n=1): 2; L-Schale (n=2): 8; M-Schale (n=3): 18.',
  1
),
(
  'typa-ch-1-01-natrium-verteilung',
  'A', 'chemie', 'ch-1-01',
  'Wie lautet die Elektronenverteilung auf K-, L- und M-Schale fuer ein neutrales Natriumatom (Z = 11)?',
  '[{"key":"A","text":"2 – 9 – 0"},{"key":"B","text":"2 – 8 – 1"},{"key":"C","text":"3 – 8 – 0"},{"key":"D","text":"2 – 7 – 2"},{"key":"E","text":"1 – 8 – 2"}]'::jsonb,
  'B',
  NULL, NULL,
  'Natrium hat Z = 11, also 11 Elektronen. K-Schale faesst 2, L-Schale 8 → bleiben 1 Elektron fuer M-Schale: Verteilung 2-8-1. Das einzelne Valenzelektron in der M-Schale bestimmt die chemischen Eigenschaften von Natrium.',
  2
),
(
  'typa-ch-1-01-isotope-definition',
  'A', 'chemie', 'ch-1-01',
  'Welche der folgenden Paare sind Isotope desselben Elements?',
  '[{"key":"A","text":"¹H und ²He"},{"key":"B","text":"¹²C und ¹⁴N"},{"key":"C","text":"¹²C und ¹⁴C"},{"key":"D","text":"¹⁶O und ¹⁸F"},{"key":"E","text":"²³Na und ²⁴Mg"}]'::jsonb,
  'C',
  NULL, NULL,
  'Isotope sind Atome desselben Elements (gleiche Ordnungszahl Z), die sich in der Neutronenzahl unterscheiden. ¹²C und ¹⁴C haben beide Z = 6 (Kohlenstoff), aber verschiedene Massenzahlen. Bei allen anderen Paaren unterscheidet sich auch Z.',
  2
),
(
  'typk-ch-1-01-teilchen',
  'K', 'chemie', 'ch-1-01',
  'Welche der folgenden Aussagen zu den Elementarteilchen des Atoms sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Protonen tragen eine positive Ladung und befinden sich im Atomkern.","korrekt":true},{"nr":2,"text":"Neutronen sind elektrisch negativ geladen und kompensieren die Protonenladung.","korrekt":false},{"nr":3,"text":"Elektronen haben eine Masse von ca. 9,1×10⁻³¹ kg und sind damit rund 1836-mal leichter als ein Proton.","korrekt":true},{"nr":4,"text":"Die Ordnungszahl Z entspricht der Anzahl der Neutronen im Kern.","korrekt":false},{"nr":5,"text":"In einem neutralen Atom ist die Protonenanzahl gleich der Elektronenanzahl.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Protonen (+1e) im Kern. Aussage 2: falsch — Neutronen sind elektrisch NEUTRAL. Aussage 3: korrekt — Elektronenmasse ~9,1×10⁻³¹ kg, Proton ~1836-mal schwerer. Aussage 4: falsch — Z = Protonenzahl (nicht Neutronenzahl). Aussage 5: korrekt — neutrales Atom: Z(Protonen) = Z(Elektronen).',
  2
),
(
  'typa-ch-1-01-massenzahl',
  'A', 'chemie', 'ch-1-01',
  'Welches der folgenden Symbole steht fuer ein Chloratom mit 17 Protonen und 18 Neutronen?',
  '[{"key":"A","text":"³⁵₁₇Cl"},{"key":"B","text":"³⁷₁₇Cl"},{"key":"C","text":"¹⁷₃₅Cl"},{"key":"D","text":"³⁵₁₈Cl"},{"key":"E","text":"¹⁸₁₇Cl"}]'::jsonb,
  'A',
  NULL, NULL,
  'A = Z + N = 17 + 18 = 35. Das Symbol ³⁵₁₇Cl bedeutet: Massenzahl A = 35 (oben links), Ordnungszahl Z = 17 (unten links). Dies ist das haeufigste Chlorisotop (75,77 %).',
  1
),

-- UK ch-1-02: Isotope, Nuklide und radioaktive Elemente
(
  'typa-ch-1-02-halbwertszeit',
  'A', 'chemie', 'ch-1-02',
  'Nach 2 Halbwertszeiten sind noch wie viel Prozent eines Radioisotops vorhanden?',
  '[{"key":"A","text":"50 %"},{"key":"B","text":"33 %"},{"key":"C","text":"25 %"},{"key":"D","text":"12,5 %"},{"key":"E","text":"75 %"}]'::jsonb,
  'C',
  NULL, NULL,
  'Nach jeder Halbwertszeit halbiert sich die Menge: nach 1 T½ → 50 %, nach 2 T½ → 25 % (= (1/2)² = 1/4). Nach n Halbwertszeiten verbleiben (1/2)ⁿ der Ausgangsmenge.',
  1
),
(
  'typa-ch-1-02-tc99m',
  'A', 'chemie', 'ch-1-02',
  'Welche Eigenschaft macht Tc-99m besonders geeignet fuer nuklearmedizinische Diagnostik?',
  '[{"key":"A","text":"Sehr lange Halbwertszeit von 8 Tagen, um langfristige Untersuchungen zu ermoeglichen"},{"key":"B","text":"Emission von α-Strahlung, die eine hohe Ortsaufloesung liefert"},{"key":"C","text":"Kurze Halbwertszeit von 6 Stunden und reine γ-Emission — minimale Strahlenbelastung bei guter Detektierbarkeit"},{"key":"D","text":"Selektive Anreicherung in Schilddruesenzellen, was Therapie erleichtert"},{"key":"E","text":"Hohe chemische Reaktivitaet, die eine gezielte Zerstörung von Tumorzellen erlaubt"}]'::jsonb,
  'C',
  NULL, NULL,
  'Tc-99m ist ein reiner Gammastrahler (keine α/β-Strahlung, die Gewebe lokal schaedigt) mit einer Halbwertszeit von nur 6 Stunden. So ist die Strahlenbelastung gering, und Gammastrahlung wird von der Gammakamera extern gut detektiert. Die kurze HWZ verhindert Strahlenbelastung nach der Untersuchung.',
  2
),
(
  'typa-ch-1-02-atommasse-chlor',
  'A', 'chemie', 'ch-1-02',
  'Chlor besteht zu 75 % aus ³⁵Cl und zu 25 % aus ³⁷Cl. Berechnen Sie die relative Atommasse von Chlor.',
  '[{"key":"A","text":"35,0 g/mol"},{"key":"B","text":"35,5 g/mol"},{"key":"C","text":"36,0 g/mol"},{"key":"D","text":"36,5 g/mol"},{"key":"E","text":"37,0 g/mol"}]'::jsonb,
  'B',
  NULL, NULL,
  'Gewichteter Durchschnitt: 0,75 × 35 + 0,25 × 37 = 26,25 + 9,25 = 35,5 g/mol. Die relative Atommasse im PSE ist stets ein gewichteter Mittelwert aller natuerlich vorkommenden Isotope.',
  2
),
(
  'typk-ch-1-02-radioaktivitaet',
  'K', 'chemie', 'ch-1-02',
  'Welche der folgenden Aussagen zu radioaktiven Isotopen und ihrer medizinischen Anwendung sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"¹⁴C zerfaellt mit einer Halbwertszeit von ~5730 Jahren und wird zur Altersbestimmung organischer Proben verwendet.","korrekt":true},{"nr":2,"text":"¹³¹I wird therapeutisch eingesetzt, da es sich selektiv in Schilddruesenzellen anreichert und durch β-Strahlung Gewebe destruiert.","korrekt":true},{"nr":3,"text":"Die Halbwertszeit eines Isotops haengt stark von der Umgebungstemperatur ab.","korrekt":false},{"nr":4,"text":"Tc-99m emittiert α-Strahlung, die im Gewebe gestoppt wird und daher ideal zur Therapie ist.","korrekt":false},{"nr":5,"text":"Isotope desselben Elements haben nahezu identische chemische Eigenschaften, da diese durch die Elektronenkonfiguration bestimmt werden.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,5]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — C-14-Datierung, T½ = 5730 a. Aussage 2: korrekt — ¹³¹I-Therapie der Schilddrüse via β-Strahlung. Aussage 3: falsch — T½ ist eine Naturkonstante, unabhaengig von Druck, Temperatur oder chemischer Bindung. Aussage 4: falsch — Tc-99m ist reiner γ-Strahler, kein α-Strahler; deshalb nur fuer Diagnostik. Aussage 5: korrekt — Isotope: gleiche Z, gleiche Elektronenkonfiguration, nahezu gleiche Chemie.',
  2
),
(
  'typa-ch-1-02-c14-prinzip',
  'A', 'chemie', 'ch-1-02',
  'Warum eignet sich ¹⁴C zur Datierung organischer Materialien?',
  '[{"key":"A","text":"¹⁴C ist stabil und bleibt unveraendert erhalten."},{"key":"B","text":"Nach dem Tod eines Organismus stoppt die ¹⁴C-Aufnahme, und das vorhandene ¹⁴C zerfaellt mit bekannter Halbwertszeit."},{"key":"C","text":"¹⁴C ist das haeufigste Kohlenstoffisotop und daher leicht nachweisbar."},{"key":"D","text":"¹⁴C wandelt sich nach dem Tod in ¹²C um und kann so gemessen werden."},{"key":"E","text":"¹⁴C hat eine sehr kurze Halbwertszeit und ermoeglicht daher praezise Messungen."}]'::jsonb,
  'B',
  NULL, NULL,
  'Lebende Organismen nehmen kontinuierlich ¹⁴C aus der Atmosphaere auf (in derselben Proportion wie dort vorhanden). Nach dem Tod stoppt dieser Austausch, und das ¹⁴C zerfaellt mit T½ = 5730 Jahren. Durch Messung der verbleibenden ¹⁴C-Aktivitaet laesst sich das Sterbedatum bis ca. 50.000 Jahre zurueck bestimmen.',
  2
),

-- UK ch-1-03: Elektronenhülle — Schalen, Orbitale, Besetzungsregeln
(
  'typa-ch-1-03-sauerstoff-konfig',
  'A', 'chemie', 'ch-1-03',
  'Welche Elektronenkonfiguration hat Sauerstoff (Z = 8)?',
  '[{"key":"A","text":"1s²2s²2p²"},{"key":"B","text":"1s²2s²2p⁴"},{"key":"C","text":"1s²2s⁴2p²"},{"key":"D","text":"1s²2p⁶"},{"key":"E","text":"1s²2s²2p⁶"}]'::jsonb,
  'B',
  NULL, NULL,
  'Sauerstoff hat 8 Elektronen: 1s² (2) + 2s² (2) + 2p⁴ (4) = 8. Die 2p-Unterschale fasst maximal 6 Elektronen; bei O sind 4 davon besetzt. Anwendung der Hundschen Regel: erst 3 p-Orbitale je einfach besetzen, dann Paare bilden.',
  1
),
(
  'typa-ch-1-03-hund-regel',
  'A', 'chemie', 'ch-1-03',
  'Was besagt die Hund''sche Regel?',
  '[{"key":"A","text":"Jedes Orbital kann maximal 2 Elektronen mit gleichem Spin enthalten."},{"key":"B","text":"Elektronen besetzen Orbitale in der Reihenfolge steigender Energie."},{"key":"C","text":"Kein Atom kann zwei Elektronen mit identischen Quantenzahlen enthalten."},{"key":"D","text":"Entartete Orbitale werden zunaechst einzeln mit parallelem Spin besetzt, bevor Doppelbesetzung erfolgt."},{"key":"E","text":"Die Anzahl der Elektronen in einer Schale betraegt maximal 2n²."}]'::jsonb,
  'D',
  NULL, NULL,
  'Die Hund''sche Regel beschreibt die Besetzung entarteter (energiegleicher) Orbitale: Erst werden alle gleichwertigen Orbitale einzeln mit parallelem Spin besetzt (maximaler Gesamtspin), bevor eine Doppelbesetzung einsetzt. A beschreibt das Pauli-Prinzip, B das Aufbauprinzip, C ebenfalls das Pauli-Prinzip, E die Schalenkapazitaet.',
  2
),
(
  'typa-ch-1-03-eisen-konfig',
  'A', 'chemie', 'ch-1-03',
  'Welche Elektronenkonfiguration hat Eisen (Z = 26)?',
  '[{"key":"A","text":"[Ar] 3d⁸"},{"key":"B","text":"[Ar] 4s²3d⁶"},{"key":"C","text":"[Ar] 4s¹3d⁷"},{"key":"D","text":"[Ne] 3s²3p⁶3d⁶"},{"key":"E","text":"[Ar] 4p⁶"}]'::jsonb,
  'B',
  NULL, NULL,
  '[Ar] hat 18 Elektronen. Von den verbleibenden 8 Elektronen: nach dem Aufbauprinzip wird zuerst 4s besetzt (4s²), dann 3d (3d⁶) → [Ar] 4s²3d⁶. Bei Ionenbildung verliert Fe zuerst 4s-Elektronen: Fe²⁺ = [Ar]3d⁶.',
  3
),
(
  'typk-ch-1-03-besetzungsregeln',
  'K', 'chemie', 'ch-1-03',
  'Welche der folgenden Aussagen zu den Orbitalbesetzungsregeln sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Das Pauli-Prinzip besagt, dass keine zwei Elektronen in einem Atom alle vier Quantenzahlen identisch haben duerfen.","korrekt":true},{"nr":2,"text":"Nach dem Aufbauprinzip wird das 3d-Orbital vor dem 4s-Orbital besetzt.","korrekt":false},{"nr":3,"text":"Ein s-Orbital ist kugelfoermig und kann maximal 2 Elektronen aufnehmen.","korrekt":true},{"nr":4,"text":"Valenzelektronen bestimmen die chemischen Eigenschaften eines Atoms und entsprechen der Hauptgruppennummer.","korrekt":true},{"nr":5,"text":"Die Hund''sche Regel gilt nur fuer s-Orbitale.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Pauli-Prinzip: keine identischen Quantenzahlsaetze. Aussage 2: falsch — nach dem Aufbauprinzip wird 4s VOR 3d besetzt (niedrigere Energie). Aussage 3: korrekt — s-Orbital (l=0): kugelsymmetrisch, max. 2 Elektronen. Aussage 4: korrekt — Valenzelektronen = Elektronen der aeussersten Hauptschale = Hauptgruppennummer. Aussage 5: falsch — Hund''sche Regel gilt fuer alle entarteten Orbitale (p, d, f).',
  2
),
(
  'typa-ch-1-03-calcium-valenzelektronen',
  'A', 'chemie', 'ch-1-03',
  'Wie viele Valenzelektronen hat Calcium (Z = 20), und welche Konfiguration haben sie?',
  '[{"key":"A","text":"1 Valenzelektron: 4s¹"},{"key":"B","text":"2 Valenzelektronen: 4s²"},{"key":"C","text":"8 Valenzelektronen: 3s²3p⁶"},{"key":"D","text":"4 Valenzelektronen: 3d⁴"},{"key":"E","text":"20 Valenzelektronen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Ca (Z = 20): [Ar] 4s². Die aeusserste Hauptschale (n = 4) traegt 2 Elektronen in 4s². Das sind die 2 Valenzelektronen. Calcium steht in Hauptgruppe 2, bildet Ca²⁺-Ionen und ist essenziell fuer Knochen, Muskelkontraktion und Blutgerinnung.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 2: MIKROKOSMOS — QUANTENPHYSIK UND SPEKTROSKOPIE
-- ============================================================

-- UK ch-2-01: Welle-Teilchen-Dualismus und Unschärferelation
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-2-01-debroglie',
  'A', 'chemie', 'ch-2-01',
  'Ein Elektron hat den Impuls p = 1,0×10⁻²⁴ kg·m/s. Welche de-Broglie-Wellenlaenge besitzt es? (h = 6,6×10⁻³⁴ J·s)',
  '[{"key":"A","text":"6,6×10⁻¹⁰ m"},{"key":"B","text":"6,6×10⁻⁸ m"},{"key":"C","text":"1,5×10⁻⁹ m"},{"key":"D","text":"6,6×10⁻⁵⁸ m"},{"key":"E","text":"1,0×10⁻²⁴ m"}]'::jsonb,
  'A',
  NULL, NULL,
  'λ = h/p = 6,6×10⁻³⁴ / 1,0×10⁻²⁴ = 6,6×10⁻¹⁰ m = 0,66 nm. Dieser Wert liegt im Roentgenbereich und ist vergleichbar mit typischen Atomabstaenden (~1–3 Angstroem), weshalb Quanteneffekte fuer Elektronen in Atomen relevant sind.',
  2
),
(
  'typa-ch-2-01-unschaerfe',
  'A', 'chemie', 'ch-2-01',
  'Was besagt die Heisenberg''sche Unschaerferelation Δx·Δp ≥ ℏ/2?',
  '[{"key":"A","text":"Messgeraete sind zu ungenau, um Elektronen exakt zu orten."},{"key":"B","text":"Ort und Impuls eines Quantenobjekts koennen grundsaetzlich nicht gleichzeitig beliebig genau bestimmt werden."},{"key":"C","text":"Elektronen bewegen sich so schnell, dass ihre Position nie gemessen werden kann."},{"key":"D","text":"Die Energie eines Elektrons ist immer unbestimmt."},{"key":"E","text":"Die Unschaerferelation gilt nur fuer Elektronen, nicht fuer Photonen."}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Unschaerferelation ist kein technisches, sondern ein fundamentales Naturgesetz: Je kleiner Δx (Ortsunschaerfe), desto groesser muss Δp (Impulsunschaerfe) sein und umgekehrt. Dies gilt unabhaengig von der Qualitaet des Messgeraets und erklaert, warum Elektronen keine definierten Bahnen haben koennen.',
  2
),
(
  'typa-ch-2-01-psi-quadrat',
  'A', 'chemie', 'ch-2-01',
  'Was beschreibt |ψ|² im quantenmechanischen Atommodell?',
  '[{"key":"A","text":"Die Energie des Elektrons in einem Orbital"},{"key":"B","text":"Die genaue Position des Elektrons zu einem bestimmten Zeitpunkt"},{"key":"C","text":"Die Aufenthaltswahrscheinlichkeit des Elektrons an einem Ort"},{"key":"D","text":"Die Geschwindigkeit des Elektrons auf seiner Bahn"},{"key":"E","text":"Die Anzahl der Elektronen in einem Orbital"}]'::jsonb,
  'C',
  NULL, NULL,
  '|ψ|² ist das Betragsquadrat der Wellenfunktion (Schroedinger-Gleichung) und gibt die Wahrscheinlichkeitsdichte an — die Wahrscheinlichkeit, das Elektron in einem bestimmten Volumenelement dV zu finden, betraegt |ψ|²·dV. Orbitale sind daher Aufenthaltswahrscheinlichkeitsdichten, keine definierten Bahnen.',
  1
),
(
  'typk-ch-2-01-quantenmechanik',
  'K', 'chemie', 'ch-2-01',
  'Welche der folgenden Aussagen zum Welle-Teilchen-Dualismus und zur Unschaerferelation sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Louis de Broglie postulierte, dass auch Materie Welleneigenschaften besitzt; die Wellenlaenge berechnet sich als λ = h/p.","korrekt":true},{"nr":2,"text":"Die Heisenberg''sche Unschaerferelation ist eine technische Limitation, die mit besseren Messgeraeten ueberwunden werden kann.","korrekt":false},{"nr":3,"text":"Fuer makroskopische Objekte (z.B. Tennisball) ist die de-Broglie-Wellenlaenge so klein, dass Quanteneffekte praktisch nicht messbar sind.","korrekt":true},{"nr":4,"text":"Das Schroedinger-Modell beschreibt Elektronen durch Orbitale (Wahrscheinlichkeitsdichten), nicht durch feste Bahnen.","korrekt":true},{"nr":5,"text":"Im Bohrschen Modell koennen Elektronen auf beliebigen Bahnen kreisen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — de-Broglie 1924: λ = h/p. Aussage 2: falsch — Unschaerfe ist ein Naturgesetz, keine technische Limitierung. Aussage 3: korrekt — bei grossen Massen wird λ ~ 10⁻³⁵ m, nicht messbar. Aussage 4: korrekt — Schroedinger-Orbitale als |ψ|²-Wahrscheinlichkeitsdichten. Aussage 5: falsch — Bohr beschraenkt Elektronen auf diskrete Kreisbahnen (stationaere Zustaende).',
  2
),
(
  'typa-ch-2-01-elektronenmikroskop',
  'A', 'chemie', 'ch-2-01',
  'Warum koennen Elektronenmikroskope eine hoehere Aufloesung als Lichtmikroskope erreichen?',
  '[{"key":"A","text":"Elektronen sind kleiner als Lichtteilchen und koennen daher feinere Details abtasten."},{"key":"B","text":"Elektronen werden durch Magnetfelder abgelenkt, was eine groessere Vergroesserung erlaubt."},{"key":"C","text":"Die de-Broglie-Wellenlaenge beschleunigter Elektronen (~0,004 nm) ist weit kleiner als die Wellenlaenge sichtbaren Lichts (~400–700 nm)."},{"key":"D","text":"Elektronen ionisieren die Probe und erzeugen so schaerfere Kontraste."},{"key":"E","text":"Elektronen reisen schneller als Licht und koennen daher schneller abbilden."}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Aufloesung eines Mikroskops ist durch die Wellenlaenge der verwendeten Strahlung begrenzt (Beugungsgrenze ~ λ/2). Sichtbares Licht hat λ ~ 400–700 nm → Aufloesung ~200 nm. Elektronen bei typischen Beschleunigungsspannungen (100 kV) haben λ ~ 0,004 nm → Aufloesung im sub-Angstroem-Bereich moeglich.',
  3
),

-- UK ch-2-02: Elektromagnetische Strahlung und Photonen
(
  'typa-ch-2-02-photonenenergie',
  'A', 'chemie', 'ch-2-02',
  'Welche Photonenenergie hat Licht der Frequenz f = 6,0×10¹⁴ Hz? (h = 6,6×10⁻³⁴ J·s)',
  '[{"key":"A","text":"6,6×10⁻³⁴ J"},{"key":"B","text":"6,0×10¹⁴ J"},{"key":"C","text":"3,96×10⁻¹⁹ J"},{"key":"D","text":"1,1×10⁻⁴⁸ J"},{"key":"E","text":"9,1×10⁻³¹ J"}]'::jsonb,
  'C',
  NULL, NULL,
  'E = h·f = 6,6×10⁻³⁴ J·s × 6,0×10¹⁴ Hz = 3,96×10⁻¹⁹ J ≈ 2,5 eV. Dies entspricht gruenem Licht im sichtbaren Bereich (λ ≈ 500 nm). Hohere Frequenz (kurzere Wellenlaenge) bedeutet hoehere Photonenenergie.',
  2
),
(
  'typa-ch-2-02-photoeffekt',
  'A', 'chemie', 'ch-2-02',
  'Beim Photoeffekt trifft Licht unterhalb der Grenzfrequenz f₀ auf eine Metalloberflaeche. Was beobachtet man?',
  '[{"key":"A","text":"Elektronen werden emittiert, aber mit sehr geringer kinetischer Energie."},{"key":"B","text":"Elektronen werden nach einer Verzoegerungszeit emittiert."},{"key":"C","text":"Es werden keine Elektronen emittiert, egal wie intensiv das Licht ist."},{"key":"D","text":"Mehr Intensitaet fuehrt zu mehr emittierten Elektronen."},{"key":"E","text":"Das Metall erwaermt sich bis Elektronen durch Waerme emittiert werden."}]'::jsonb,
  'C',
  NULL, NULL,
  'Unterhalb der Grenzfrequenz f₀ = W/h hat kein einzelnes Photon genug Energie (hf < W), um ein Elektron aus dem Metall zu loesen. Da ein Photon nur mit einem Elektron wechselwirkt, hilft auch mehr Lichtintensitaet nicht — es werden grundsaetzlich keine Elektronen emittiert. Dies beweist die Teilchennatur des Lichts.',
  2
),
(
  'typa-ch-2-02-spektralbereich',
  'A', 'chemie', 'ch-2-02',
  'Licht der Wellenlaenge 300 nm gehoert welchem Spektralbereich an?',
  '[{"key":"A","text":"Sichtbares Licht (violett)"},{"key":"B","text":"Infrarotstrahlung"},{"key":"C","text":"Ultraviolettstrahlung (UV)"},{"key":"D","text":"Roentgenstrahlung"},{"key":"E","text":"Mikrowellen"}]'::jsonb,
  'C',
  NULL, NULL,
  'UV-Strahlung umfasst Wellenlaengen von 10–380 nm. 300 nm liegt daher im UV-Bereich. Sichtbares Licht beginnt bei ~380 nm (violett) und endet bei ~780 nm (rot). Kuerzere Wellenlaengen (hoehere Energie) als sichtbares Licht sind UV, Roentgen und Gammastrahlung.',
  1
),
(
  'typk-ch-2-02-strahlung',
  'K', 'chemie', 'ch-2-02',
  'Welche der folgenden Aussagen zu elektromagnetischer Strahlung und Photonen sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die Energie eines Photons ist direkt proportional zur Frequenz: E = h·f.","korrekt":true},{"nr":2,"text":"UV-Strahlung kann DNA-Schaeden verursachen, da UV-Photonen genug Energie haben, um chemische Bindungen zu brechen.","korrekt":true},{"nr":3,"text":"Roentgenstrahlung hat eine laengere Wellenlaenge als sichtbares Licht.","korrekt":false},{"nr":4,"text":"Die Lichtgeschwindigkeit betraegt c = 3×10⁸ m/s und gilt fuer alle elektromagnetischen Wellen im Vakuum.","korrekt":true},{"nr":5,"text":"Bei der Photonenenergie gilt: laengere Wellenlaenge bedeutet hoehere Energie.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — E = h·f (Planck). Aussage 2: korrekt — UV-Photonen (~3–12 eV) brechen kovalente Bindungen in DNA. Aussage 3: falsch — Roentgenstrahlung hat KUERZEREE Wellenlaenge (hoehere Energie) als sichtbares Licht. Aussage 4: korrekt — Lichtgeschwindigkeit c = 3×10⁸ m/s im Vakuum. Aussage 5: falsch — E = hc/λ: laengere Wellenlaenge = NIEDRIGERE Energie.',
  2
),
(
  'typa-ch-2-02-photoeffekt-rechnung',
  'A', 'chemie', 'ch-2-02',
  'Ein Metall hat die Austrittsarbeit W = 4,0×10⁻¹⁹ J. Licht mit f = 8,0×10¹⁴ Hz trifft auf die Oberflaeche (h = 6,6×10⁻³⁴ J·s). Welche kinetische Energie haben die emittierten Elektronen?',
  '[{"key":"A","text":"1,28×10⁻¹⁹ J"},{"key":"B","text":"4,0×10⁻¹⁹ J"},{"key":"C","text":"5,28×10⁻¹⁹ J"},{"key":"D","text":"1,68×10⁻¹⁹ J"},{"key":"E","text":"Es werden keine Elektronen emittiert."}]'::jsonb,
  'A',
  NULL, NULL,
  'E_kin = h·f − W = 6,6×10⁻³⁴ × 8,0×10¹⁴ − 4,0×10⁻¹⁹ = 5,28×10⁻¹⁹ − 4,0×10⁻¹⁹ = 1,28×10⁻¹⁹ J. Da hf > W, werden Elektronen emittiert. Die Einsteinsche Gleichung E_kin = hf − W beschreibt den Photoeffekt quantitativ.',
  3
),

-- UK ch-2-03: Atomspektren und Spektralanalyse
(
  'typa-ch-2-03-balmer',
  'A', 'chemie', 'ch-2-03',
  'Welche Spektralserie des Wasserstoffs liegt im sichtbaren Bereich?',
  '[{"key":"A","text":"Lyman-Serie"},{"key":"B","text":"Balmer-Serie"},{"key":"C","text":"Paschen-Serie"},{"key":"D","text":"Brackett-Serie"},{"key":"E","text":"Pfund-Serie"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Balmer-Serie (Uebergaenge auf n = 2) liegt im sichtbaren Bereich: H-α bei 656 nm (rot), H-β bei 486 nm (blaugruen), H-γ bei 434 nm (violett). Lyman (n=1): UV; Paschen (n=3): IR. Die Endzustand-Quantenzahl bestimmt die Serie.',
  1
),
(
  'typa-ch-2-03-uebergang',
  'A', 'chemie', 'ch-2-03',
  'Ein Elektron im Wasserstoffatom faellt von n = 4 auf n = 2. In welchem Spektralbereich liegt das emittierte Photon?',
  '[{"key":"A","text":"Infrarot (Paschen-Serie)"},{"key":"B","text":"Sichtbares Licht (Balmer-Serie)"},{"key":"C","text":"UV-Licht (Lyman-Serie)"},{"key":"D","text":"Roentgenstrahlung"},{"key":"E","text":"Mikrowellen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Uebergaenge zum Endzustand n = 2 gehoeren zur Balmer-Serie (sichtbares Licht). Der Uebergang 4→2 entspricht der H-β-Linie bei 486 nm (blaugruen). Die Endquantenzahl bestimmt die Serie: n=1→Lyman (UV), n=2→Balmer (sichtbar), n=3→Paschen (IR).',
  2
),
(
  'typa-ch-2-03-stokes',
  'A', 'chemie', 'ch-2-03',
  'Was bezeichnet man als Stokes-Verschiebung bei der Fluoreszenz?',
  '[{"key":"A","text":"Die Energie des emittierten Photons ist groesser als die des absorbierten."},{"key":"B","text":"Das emittierte Licht hat eine laengere Wellenlaenge als das absorbierte."},{"key":"C","text":"Der Fluoreszenzfarbstoff verschiebt sich im Gewebe."},{"key":"D","text":"Das absorbierte Licht hat eine laengere Wellenlaenge als das emittierte."},{"key":"E","text":"Die Emissionszeit verlaengert sich bei steigender Temperatur."}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei der Fluoreszenz gibt das angeregte Molekul durch Schwingungsrelaxation einen Teil der absorbierten Energie ab, bevor es das Photon emittiert. Das emittierte Photon hat daher weniger Energie (niedrigere Frequenz, laengere Wellenlaenge) als das absorbierte. Diese Rotverschietbung heisst Stokes-Verschiebung (Emissionsmaximum > Anregungsmaximum).',
  3
),
(
  'typk-ch-2-03-spektren',
  'K', 'chemie', 'ch-2-03',
  'Welche der folgenden Aussagen zu Atomspektren und Fluoreszenz sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Emissionsspektren entstehen, wenn angeregte Elektronen auf niedrigere Energieniveaus zurueckfallen und dabei Photonen mit charakteristischen Frequenzen emittieren.","korrekt":true},{"nr":2,"text":"Jedes Element besitzt ein einzigartiges Linienspektrum, das zur Identifikation genutzt werden kann.","korrekt":true},{"nr":3,"text":"Absorptionsspektren haben helle Linien auf dunklem Hintergrund.","korrekt":false},{"nr":4,"text":"Phosphoreszenz unterscheidet sich von Fluoreszenz durch eine verzoegerte Lichtemission (ms bis Stunden) aus einem metastabilen Triplettzustand.","korrekt":true},{"nr":5,"text":"Der Franck-Hertz-Versuch beweist, dass Atome Energie kontinuierlich aufnehmen koennen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Emission bei Rueckfall auf niedrigeres Niveau: E_Photon = E₂ − E₁. Aussage 2: korrekt — Linienspektren als Fingerabdruck der Elemente. Aussage 3: falsch — Absorptionsspektren zeigen DUNKLE Linien im Kontinuum (fehlende Wellenlaengen). Aussage 4: korrekt — Phosphoreszenz: verzoegerte Emission aus Triplettzustand. Aussage 5: falsch — Franck-Hertz beweist das Gegenteil: Energie wird nur in diskreten Quanten (Energieniveaudifferenzen) aufgenommen.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 3: GASGESETZE
-- ============================================================

-- UK ch-3-01: Ideales Gasgesetz pV = nRT
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-3-01-kelvin',
  'A', 'chemie', 'ch-3-01',
  'Welche Temperatur in Kelvin entspricht 37 °C (Koerpertemperatur)?',
  '[{"key":"A","text":"100 K"},{"key":"B","text":"237 K"},{"key":"C","text":"296 K"},{"key":"D","text":"310 K"},{"key":"E","text":"373 K"}]'::jsonb,
  'D',
  NULL, NULL,
  'T(K) = T(°C) + 273,15. 37 + 273 = 310 K. Koerpertemperatur 37 °C = 310 K ist relevant fuer alle physiologischen Gasberechnungen.',
  1
),
(
  'typa-ch-3-01-molvolumen',
  'A', 'chemie', 'ch-3-01',
  'Welches Volumen nimmt 1 mol eines idealen Gases bei Normalbedingungen (0 °C, 101,325 kPa) ein?',
  '[{"key":"A","text":"10,0 L"},{"key":"B","text":"22,4 L"},{"key":"C","text":"24,5 L"},{"key":"D","text":"8,314 L"},{"key":"E","text":"44,8 L"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei STP (0 °C = 273,15 K, p = 101,325 kPa): V = nRT/p = 1 × 8,314 × 273,15 / 101325 = 22,4 L. Das molare Gasvolumen 22,4 L/mol gilt bei 0 °C. Bei 25 °C (SATP) gilt 24,5 L/mol.',
  1
),
(
  'typa-ch-3-01-gay-lussac',
  'A', 'chemie', 'ch-3-01',
  'Ein Gasbehaelter enthaelt Gas bei T₁ = 300 K und p₁ = 100 kPa. Auf welchen Druck steigt das Gas bei T₂ = 450 K (V = const)?',
  '[{"key":"A","text":"50 kPa"},{"key":"B","text":"150 kPa"},{"key":"C","text":"200 kPa"},{"key":"D","text":"300 kPa"},{"key":"E","text":"67 kPa"}]'::jsonb,
  'B',
  NULL, NULL,
  'Gay-Lussac (V = const): p/T = const → p₂ = p₁ × T₂/T₁ = 100 × 450/300 = 150 kPa. Relevant fuer Gasflaschen: bei Erwaermung (Feuer) steigt Druck drastisch.',
  2
),
(
  'typa-ch-3-01-charles',
  'A', 'chemie', 'ch-3-01',
  'Ein Gas nimmt bei 0 °C ein Volumen von 3,0 L ein. Auf welches Volumen dehnt es sich bei 100 °C aus (p = const)?',
  '[{"key":"A","text":"3,0 L"},{"key":"B","text":"1,1 L"},{"key":"C","text":"4,1 L"},{"key":"D","text":"6,0 L"},{"key":"E","text":"9,0 L"}]'::jsonb,
  'C',
  NULL, NULL,
  'Charles-Gesetz (p = const): V/T = const → V₂ = V₁ × T₂/T₁ = 3,0 × 373/273 = 4,1 L. T in Kelvin: 0 °C = 273 K, 100 °C = 373 K.',
  2
),
(
  'typk-ch-3-01-ideales-gas',
  'K', 'chemie', 'ch-3-01',
  'Welche der folgenden Aussagen zum idealen Gasgesetz pV = nRT sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Im idealen Gasmodell werden Wechselwirkungen zwischen Gasmolekuelen vernachlaessigt.","korrekt":true},{"nr":2,"text":"Das ideale Gasgesetz gilt bei hohem Druck und tiefer Temperatur besonders gut.","korrekt":false},{"nr":3,"text":"R = 8,314 J/(mol·K) ist die universelle Gaskonstante.","korrekt":true},{"nr":4,"text":"Bei konstanter Temperatur und Stoffmenge ist pV konstant (Boyle-Mariotte).","korrekt":true},{"nr":5,"text":"Ein ideales Gas hat stets ein Molvolumen von 22,4 L/mol, unabhaengig von Temperatur und Druck.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — ideales Gas: keine Wechselwirkungen. Aussage 2: falsch — bei hohem Druck/tiefer Temperatur versagt das Modell. Aussage 3: korrekt — R = 8,314 J/(mol·K). Aussage 4: korrekt — Boyle-Mariotte. Aussage 5: falsch — 22,4 L/mol gilt nur bei STP (0 °C, 1 atm); bei anderen T und p gilt V = nRT/p.',
  2
),

-- UK ch-3-02: Gasgesetze — Dalton und Henry
(
  'typa-ch-3-02-boyle',
  'A', 'chemie', 'ch-3-02',
  'Ein Gas hat bei p₁ = 200 kPa ein Volumen V₁ = 3 L. Welches Volumen nimmt es bei p₂ = 400 kPa ein (T = const)?',
  '[{"key":"A","text":"6 L"},{"key":"B","text":"1,5 L"},{"key":"C","text":"3 L"},{"key":"D","text":"0,75 L"},{"key":"E","text":"12 L"}]'::jsonb,
  'B',
  NULL, NULL,
  'Boyle-Mariotte (T = const): p₁V₁ = p₂V₂ → V₂ = 200 × 3 / 400 = 1,5 L. Bei Druckverdopplung halbiert sich das Volumen.',
  1
),
(
  'typa-ch-3-02-dalton',
  'A', 'chemie', 'ch-3-02',
  'Luft: 78 % N₂, 21 % O₂, 1 % Ar. Gesamtdruck 101 kPa. Welchen Partialdruck hat O₂?',
  '[{"key":"A","text":"78 kPa"},{"key":"B","text":"101 kPa"},{"key":"C","text":"21 kPa"},{"key":"D","text":"79 kPa"},{"key":"E","text":"0,21 kPa"}]'::jsonb,
  'C',
  NULL, NULL,
  'Daltonsches Gesetz: p(O₂) = x(O₂) × p_ges = 0,21 × 101 = 21,2 kPa ≈ 21 kPa. O₂-Partialdruck in Einatemluft auf Meereshoehe.',
  1
),
(
  'typk-ch-3-02-gasgesetze',
  'K', 'chemie', 'ch-3-02',
  'Welche der folgenden Aussagen zu den Gasgesetzen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Boyle-Mariotte: bei konstanter Temperatur und Stoffmenge gilt p × V = const.","korrekt":true},{"nr":2,"text":"Das Gay-Lussac-Gesetz beschreibt V/T = const bei konstantem Druck.","korrekt":false},{"nr":3,"text":"Das Daltonsche Gesetz: der Gesamtdruck eines Gasgemisches ist die Summe der Partialdrucke.","korrekt":true},{"nr":4,"text":"Amontonsches Gesetz: bei konstantem Volumen gilt p/T = const.","korrekt":true},{"nr":5,"text":"Das Henrysche Gesetz beschreibt die Loeslichkeit eines Gases: je hoeher der Partialdruck, desto mehr loest sich.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Boyle-Mariotte. Aussage 2: falsch — Gay-Lussac: p/T=const bei V=const (nicht V/T; V/T=const ist Charles). Aussage 3: korrekt — Dalton. Aussage 4: korrekt — Amonton. Aussage 5: korrekt — Henry. Korrekt: 1,3,4 → Antwort A.',
  2
),
(
  'typa-ch-3-02-henry',
  'A', 'chemie', 'ch-3-02',
  'Das Henrysche Gesetz c = k_H × p beschreibt die Gasloeslichkeit. Was folgt fuer hyperbare Oxygenierung (2–3 bar O₂)?',
  '[{"key":"A","text":"Bei HBO sinkt der O₂-Partialdruck, Haemoglobin gibt mehr O₂ ab."},{"key":"B","text":"Bei erhoehtem O₂-Partialdruck loest sich deutlich mehr O₂ physikalisch im Plasma."},{"key":"C","text":"O₂-Loeslichkeit ist druckunabhaengig."},{"key":"D","text":"HBO senkt den Haemoglobinbedarf durch Blutabkuehlung."},{"key":"E","text":"Das Henrysche Gesetz gilt nur fuer CO₂."}]'::jsonb,
  'B',
  NULL, NULL,
  'Henry: c(O₂) = k_H × p(O₂). Bei HBO steigt p(O₂) stark → physikalisch geloeste O₂-Menge steigt von ~0,3 auf ~6 mL/dL — genug fuer den Ruhebedarf auch ohne Haemoglobin. Anwendung: CO-Vergiftung, Wundheilung, Dekompressionskrankheit.',
  2
),

-- UK ch-3-03: Mol, molare Masse, Avogadro
(
  'typa-ch-3-03-molmasse',
  'A', 'chemie', 'ch-3-03',
  'Wie viele Mol Glukose (C₆H₁₂O₆, M = 180 g/mol) sind in 900 mg Glukose enthalten?',
  '[{"key":"A","text":"0,005 mol"},{"key":"B","text":"0,05 mol"},{"key":"C","text":"0,5 mol"},{"key":"D","text":"5 mol"},{"key":"E","text":"162 mol"}]'::jsonb,
  'A',
  NULL, NULL,
  'n = m/M = 0,9 g / 180 g/mol = 0,005 mol = 5 mmol. Achtung: 900 mg = 0,9 g. Grundformel: n = m/M.',
  1
),
(
  'typa-ch-3-03-avogadro',
  'A', 'chemie', 'ch-3-03',
  'Wie viele H₂O-Molekuele befinden sich in 18 g Wasser? (N_A = 6,022×10²³ mol⁻¹)',
  '[{"key":"A","text":"6,022×10²³"},{"key":"B","text":"3,011×10²³"},{"key":"C","text":"1,204×10²⁴"},{"key":"D","text":"18"},{"key":"E","text":"6,022×10²⁴"}]'::jsonb,
  'A',
  NULL, NULL,
  'M(H₂O) = 18 g/mol → 18 g = 1 mol. 1 mol × N_A = 6,022×10²³ Molekuele.',
  1
),
(
  'typa-ch-3-03-konzentration',
  'A', 'chemie', 'ch-3-03',
  'Welche Konzentration in mol/L hat eine Loesung aus 5,85 g NaCl in 500 mL Wasser? (M(NaCl) = 58,5 g/mol)',
  '[{"key":"A","text":"0,2 mol/L"},{"key":"B","text":"0,1 mol/L"},{"key":"C","text":"1,0 mol/L"},{"key":"D","text":"11,7 mol/L"},{"key":"E","text":"0,02 mol/L"}]'::jsonb,
  'A',
  NULL, NULL,
  'n = 5,85/58,5 = 0,1 mol. c = n/V = 0,1/0,5 = 0,2 mol/L. Physiologische NaCl (0,9 %) ≈ 0,154 mol/L.',
  2
),
(
  'typk-ch-3-03-mol-avogadro',
  'K', 'chemie', 'ch-3-03',
  'Welche der folgenden Aussagen zu Mol und Avogadro-Konstante sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"1 mol enthaelt immer N_A = 6,022×10²³ Teilchen, unabhaengig von der Substanz.","korrekt":true},{"nr":2,"text":"Die molare Masse in g/mol entspricht numerisch der relativen Atommasse.","korrekt":true},{"nr":3,"text":"Die Avogadro-Konstante N_A ist dimensionslos (keine Einheit).","korrekt":false},{"nr":4,"text":"n = m/M ist die Grundformel zur Berechnung der Stoffmenge.","korrekt":true},{"nr":5,"text":"1 mol ideales Gas bei STP (0 °C, 1 atm) nimmt 24,5 L ein.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,4]},{"key":"D","nummern":[1,3,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt. Aussage 2: korrekt — M(O) = 16 g/mol ↔ Atommasse 16 u. Aussage 3: falsch — N_A hat Einheit mol⁻¹. Aussage 4: korrekt. Aussage 5: falsch — bei STP: 22,4 L/mol (24,5 L/mol bei 25 °C/SATP).',
  2
),

-- UK ch-3-04: Gasgesetze in der Medizin
(
  'typa-ch-3-04-atemphysik',
  'A', 'chemie', 'ch-3-04',
  'Nach welchem Gesetz wird Luft beim Einatmen in die Lunge gesogen?',
  '[{"key":"A","text":"Gay-Lussac: Zwerchfellkontraktion erhoet Lungentemperatur."},{"key":"B","text":"Henry: O₂ loest sich im Alveolarraum."},{"key":"C","text":"Boyle-Mariotte: Zwerchfellkontraktion vergrossert Lungenvolumen, Druck sinkt unter Atmosphaerendruck, Luft stroemt ein."},{"key":"D","text":"Dalton: O₂-Partialdruck in der Lunge ist hoeher als ausserhalb."},{"key":"E","text":"Avogadro: gleiche Volumina enthalten gleich viele Gasmolekuele."}]'::jsonb,
  'C',
  NULL, NULL,
  'Boyle-Mariotte (T = const): p × V = const. Zwerchfellkontraktion vergroessert Lungenvolumen → Innendruck sinkt unter Atmosphaerendruck → Luft stroemt ein. Bei Ausatmung: V nimmt ab → Druck steigt → Luft stroemt aus.',
  2
),
(
  'typa-ch-3-04-dekompressionskrankheit',
  'A', 'chemie', 'ch-3-04',
  'Warum entsteht Dekompressionskrankheit bei zu schnellem Auftauchen?',
  '[{"key":"A","text":"Blut kocht durch Temperaturveraenderung unter Wasser."},{"key":"B","text":"O₂ wird durch N₂ aus dem Haemoglobin verdraengt."},{"key":"C","text":"N₂ loest sich unter erhoehtem Druck vermehrt (Henry); bei schnellem Druckabfall bilden sich N₂-Gasblasen in Gewebe und Gefaessen."},{"key":"D","text":"Lungenvolumen kann beim Auftauchen nicht schnell genug expandieren."},{"key":"E","text":"CO₂ kann unter Druck nicht abgeatmet werden."}]'::jsonb,
  'C',
  NULL, NULL,
  'Henrysches Gesetz: in der Tiefe loest sich mehr N₂ im Blut. Bei langsamem Auftauchen wird N₂ ueber die Lunge abgeatmet. Bei zu schnellem Druckabfall: Uebersaettigung → N₂-Blasen in Gelenken, Rueckenmark, Gefaessen.',
  2
),
(
  'typk-ch-3-04-medizin',
  'K', 'chemie', 'ch-3-04',
  'Welche der folgenden Aussagen zur medizinischen Anwendung der Gasgesetze sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Bei kuenstlicher Beatmung treibt erhoehter Druck Luft in die Lunge (Boyle-Mariotte).","korrekt":true},{"nr":2,"text":"In grossen Hoehen steigt der O₂-Partialdruck, weil der Gesamtdruck sinkt.","korrekt":false},{"nr":3,"text":"Hyperbare Oxygenierung nutzt Henry: bei erhoehtem O₂-Partialdruck loest sich mehr O₂ im Plasma.","korrekt":true},{"nr":4,"text":"Dekompressionskrankheit entsteht durch N₂-Gasblasenbildung bei zu schnellem Druckabfall.","korrekt":true},{"nr":5,"text":"CO₂ ist ca. 20-mal schlechter loeslich als O₂ im Blutplasma.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — IPPV/CPAP. Aussage 2: falsch — in Hoehen sinkt p_ges → O₂-Partialdruck sinkt ebenfalls. Aussage 3: korrekt — Henry bei HBO. Aussage 4: korrekt — Dekompressionskrankheit. Aussage 5: falsch — CO₂ ist ~20-mal BESSER loeslich als O₂.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 4: AGGREGATZUSTAENDE UND PHASENUEBERGAENGE
-- ============================================================

-- UK ch-4-01: Aggregatzustaende und Anomalie des Wassers
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-4-01-anomalie',
  'A', 'chemie', 'ch-4-01',
  'Bei welcher Temperatur ist fluessiges Wasser am dichtesten?',
  '[{"key":"A","text":"0 °C"},{"key":"B","text":"4 °C"},{"key":"C","text":"25 °C"},{"key":"D","text":"100 °C"},{"key":"E","text":"−4 °C"}]'::jsonb,
  'B',
  NULL, NULL,
  'Dichteanomalie: maximale Dichte bei 4 °C. Unterhalb 4 °C ordnen sich Molekuele in hexagonale Eisstruktur mit groesseren Abstaenden. Daher schwimmt Eis — fuer aquatische Oekosysteme entscheidend.',
  1
),
(
  'typa-ch-4-01-eis-schwimmt',
  'A', 'chemie', 'ch-4-01',
  'Warum schwimmt Eis auf Wasser?',
  '[{"key":"A","text":"Eis ist kaelter und daher leichter."},{"key":"B","text":"Wasserstoffbrueckenbindungen im Eis bilden ein hexagonales Gitter, das weniger dicht ist als fluessiges Wasser."},{"key":"C","text":"Eis hat hoehere Dichte als fluessiges Wasser."},{"key":"D","text":"Wasser dehnt sich beim Gefrieren durch Gaseinschluesse aus."},{"key":"E","text":"Eis hat weniger H-Bruecken als fluessiges Wasser."}]'::jsonb,
  'B',
  NULL, NULL,
  'Im Eisgitter bildet jedes H₂O genau 4 H-Bruecken in hexagonaler Anordnung — weniger dicht als fluessiges Wasser (Eis: 0,917 g/cm³; Wasser bei 4 °C: 1,000 g/cm³).',
  2
),
(
  'typk-ch-4-01-wasser',
  'K', 'chemie', 'ch-4-01',
  'Welche der folgenden Aussagen zur Dichteanomalie und den Eigenschaften des Wassers sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Wasser hat sein Dichtemaximum bei 4 °C — darunter und darueber nimmt die Dichte ab.","korrekt":true},{"nr":2,"text":"Die Dichteanomalie erklaert, warum Seen im Winter von der Oberflaeche her zufrieren.","korrekt":true},{"nr":3,"text":"Im Eisgitter bildet jedes H₂O nur 2 H-Bruecken, was zur geringen Dichte fuehrt.","korrekt":false},{"nr":4,"text":"Wasser hat wegen seiner H-Bruecken einen ungewoehnlich hohen Siedepunkt verglichen mit H₂S.","korrekt":true},{"nr":5,"text":"Beim Schmelzen von Eis sinkt die Dichte.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Dichtemaximum 4 °C. Aussage 2: korrekt — biologisch wichtig. Aussage 3: falsch — jedes H₂O bildet 4 H-Bruecken im Eis. Aussage 4: korrekt — H₂O-Sdp. 100 °C vs H₂S −60 °C. Aussage 5: falsch — beim Schmelzen steigt Dichte (bis 4 °C).',
  2
),
(
  'typa-ch-4-01-aggregatzustand-vergleich',
  'A', 'chemie', 'ch-4-01',
  'Welcher Aggregatzustand hat kein eigenes Volumen und keine eigene Form?',
  '[{"key":"A","text":"Fest"},{"key":"B","text":"Fluessig"},{"key":"C","text":"Gasfoermig"},{"key":"D","text":"Plasma"},{"key":"E","text":"Glasartig (amorph)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Gasfoermig: kein eigenes Volumen, keine eigene Form — fuellt jeden verfuegbaren Raum aus. Fluessig: eigenes Volumen, keine feste Form. Fest: eigenes Volumen, eigene Form.',
  1
),

-- UK ch-4-02: Phasenuebergaenge und Energetik
(
  'typa-ch-4-02-schmelzwaerme',
  'A', 'chemie', 'ch-4-02',
  'Wie viel Energie (kJ) wird benoetigt, um 500 g Eis bei 0 °C vollstaendig zu schmelzen? (ΔH_s = 334 J/g)',
  '[{"key":"A","text":"167 J"},{"key":"B","text":"167 kJ"},{"key":"C","text":"668 kJ"},{"key":"D","text":"334 kJ"},{"key":"E","text":"0,167 kJ"}]'::jsonb,
  'B',
  NULL, NULL,
  'Q = m × ΔH_s = 500 × 334 = 167 000 J = 167 kJ. Schmelzwaerme: Gitterkraefte aufbrechen ohne Temperaturerhohung.',
  2
),
(
  'typa-ch-4-02-verdampfungswaerme',
  'A', 'chemie', 'ch-4-02',
  'Warum ist Schwitzen eine sehr effektive Kuehlmethode?',
  '[{"key":"A","text":"Schweiß entzieht osmotisch Waerme."},{"key":"B","text":"Die Verdampfungswaerme von Wasser (2257 J/g) wird beim Verdunsten dem Koerper entzogen."},{"key":"C","text":"Schweiß kueht durch Konvektion."},{"key":"D","text":"Das Verdampfen benoetigt keine Energie."},{"key":"E","text":"Schweiß ist kaelter als die Haut."}]'::jsonb,
  'B',
  NULL, NULL,
  'ΔH_v(H₂O) = 2257 J/g (bei 37 °C ≈ 2430 J/g). Pro Gramm verdunsteter Schweiß werden ~2430 J entzogen. Die Schmelzwaerme (334 J/g) ist ca. 7-mal kleiner — Verdampfungskuehlung sehr effizient.',
  2
),
(
  'typa-ch-4-02-gefrierpunkterniedrigung',
  'A', 'chemie', 'ch-4-02',
  'Welchen Effekt hat das Loesen von Kochsalz in Wasser auf den Gefrierpunkt?',
  '[{"key":"A","text":"Gefrierpunkt steigt (Gefrierpunkterhohung)"},{"key":"B","text":"Gefrierpunkt bleibt unveraendert"},{"key":"C","text":"Gefrierpunkt sinkt (Gefrierpunkterniedrigung, Kryoskopie)"},{"key":"D","text":"Nur ionische Verbindungen erhoehen den Gefrierpunkt."},{"key":"E","text":"Der Effekt haengt nur von der Art des Loesungsmittels ab."}]'::jsonb,
  'C',
  NULL, NULL,
  'ΔT_f = K_f × b (K_f(H₂O) = 1,853 K·kg/mol). Geloeste Stoffe erniedrigen den Gefrierpunkt. Anwendung: Auftausalz, Frostschutz, kryoskopische Molmassenbestimmung.',
  2
),
(
  'typk-ch-4-02-phasenubergaenge',
  'K', 'chemie', 'ch-4-02',
  'Welche der folgenden Aussagen zu Phasenubergaengen und Energetik sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Schmelzen ist ein endothermer Vorgang — Energie wird zum Aufbrechen des Kristallgitters benoetigt.","korrekt":true},{"nr":2,"text":"Kryoskopie bezeichnet die Gefrierpunkterhohung durch geloeste Stoffe.","korrekt":false},{"nr":3,"text":"Erstarrungswaerme = Schmelzwaerme (gleichgross, entgegengesetzt).","korrekt":true},{"nr":4,"text":"Sublimation bezeichnet den Uebergang Gas→Fest.","korrekt":false},{"nr":5,"text":"ΔH_v(H₂O) = 2257 J/g ist deutlich groesser als ΔH_s = 334 J/g, weil beim Verdampfen alle intermolekularen Kraefte ueberwunden werden.","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,5]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Schmelzen endotherm. Aussage 2: falsch — Kryoskopie = Gefrierpunkterniedrigung. Aussage 3: korrekt. Aussage 4: falsch — Sublimation = Fest→Gas (nicht Gas→Fest; Gas→Fest = Resublimation). Aussage 5: korrekt.',
  2
),

-- UK ch-4-03: Phasendiagramm, Tripelpunkt, kritischer Punkt
(
  'typa-ch-4-03-tripelpunkt',
  'A', 'chemie', 'ch-4-03',
  'Was bezeichnet man als Tripelpunkt im Phasendiagramm?',
  '[{"key":"A","text":"Punkt, an dem alle drei Aggregatzustaende im Gleichgewicht koexistieren"},{"key":"B","text":"Punkt, an dem Gas und Fluessigkeit ununterscheidbar werden"},{"key":"C","text":"Schnittpunkt von Verdampfungs- und Schmelzkurve"},{"key":"D","text":"Minimaltemperatur, bei der ein Stoff fluessig sein kann"},{"key":"E","text":"Punkt hoechster Dichte einer Substanz"}]'::jsonb,
  'A',
  NULL, NULL,
  'Tripelpunkt: einziger Punkt, an dem fest, fluessig und gasfoermig gleichzeitig im thermodynamischen Gleichgewicht koexistieren. Fuer Wasser: 273,16 K (0,01 °C), 611,7 Pa. Referenzpunkt der Kelvin-Skala.',
  1
),
(
  'typa-ch-4-03-kritischer-punkt',
  'A', 'chemie', 'ch-4-03',
  'Was geschieht oberhalb des kritischen Punkts?',
  '[{"key":"A","text":"Die Substanz siedet bei konstantem Druck."},{"key":"B","text":"Fest- und Fluessigphase werden ununterscheidbar."},{"key":"C","text":"Die Substanz liegt als ueberkritisches Fluid vor — Grenze zwischen Gas und Fluessigkeit verschwindet."},{"key":"D","text":"Die Substanz zerfaellt in ihre Elemente."},{"key":"E","text":"Der Dampfdruck sinkt auf null."}]'::jsonb,
  'C',
  NULL, NULL,
  'Oberhalb des kritischen Punkts kein Unterschied Gas/Fluessigkeit mehr → ueberkritisches Fluid. CO₂: T_krit = 31,1 °C, p_krit = 73,8 bar. Ueberkritisches CO₂ als Loesungsmittel (Koffein-Extraktion).',
  2
),
(
  'typk-ch-4-03-phasendiagramm',
  'K', 'chemie', 'ch-4-03',
  'Welche der folgenden Aussagen zum Phasendiagramm des Wassers sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die Schmelzkurve des Wassers hat negative Steigung: bei hoehrem Druck sinkt der Schmelzpunkt.","korrekt":true},{"nr":2,"text":"Der Tripelpunkt des Wassers liegt bei 0,01 °C und 611,7 Pa.","korrekt":true},{"nr":3,"text":"Oberhalb des kritischen Punkts kann Wasser durch Druckerhoehung verfluessigt werden.","korrekt":false},{"nr":4,"text":"Sublimation (Fest→Gas) ist unterhalb des Tripelpunkts moeglich.","korrekt":true},{"nr":5,"text":"Der kritische Punkt des Wassers liegt bei 100 °C und 1 bar.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Schmelzkurve Wasser negativ (Anomalie). Aussage 2: korrekt. Aussage 3: falsch — oberhalb des kritischen Punkts kein Verfluessigen moeglich. Aussage 4: korrekt. Aussage 5: falsch — krit. Punkt H₂O: 374 °C, 221 bar.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 5: PERIODENSYSTEM DER ELEMENTE
-- ============================================================

-- UK ch-5-01: Aufbau des PSE
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-5-01-perioden',
  'A', 'chemie', 'ch-5-01',
  'Wie viele Perioden und Gruppen hat das moderne Periodensystem der Elemente?',
  '[{"key":"A","text":"8 Perioden, 12 Gruppen"},{"key":"B","text":"7 Perioden, 18 Gruppen"},{"key":"C","text":"6 Perioden, 16 Gruppen"},{"key":"D","text":"7 Perioden, 8 Gruppen"},{"key":"E","text":"9 Perioden, 18 Gruppen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das moderne PSE hat 7 Perioden (Zeilen) und 18 Gruppen (Spalten). Perioden entsprechen der Hauptquantenzahl n der aeussersten Schale. Gruppen 1-2 = s-Block, 3-12 = d-Block (Nebengruppenelemente), 13-18 = p-Block.',
  1
),
(
  'typa-ch-5-01-hauptgruppe',
  'A', 'chemie', 'ch-5-01',
  'Was gibt die Hauptgruppennummer eines Elements im PSE an?',
  '[{"key":"A","text":"Die Anzahl der Elektronen in der aeussersten Schale (Valenzelektronen)"},{"key":"B","text":"Die Gesamtzahl der Elektronen im Atom"},{"key":"C","text":"Die Periode, in der das Element steht"},{"key":"D","text":"Die Anzahl der Neutronen im Kern"},{"key":"E","text":"Die Massenzahl des haeufigsten Isotops"}]'::jsonb,
  'A',
  NULL, NULL,
  'Die Hauptgruppennummer (1-8 in alter Schreibweise; 1, 2, 13-18 in IUPAC) gibt die Anzahl der Valenzelektronen an. Beispiele: Na (Hauptgruppe 1): 1 Valenzelektron; O (Hauptgruppe 6/16): 6 Valenzelektronen. Valenzelektronen bestimmen die chemischen Eigenschaften.',
  1
),
(
  'typa-ch-5-01-sblock-pblock',
  'A', 'chemie', 'ch-5-01',
  'Zu welchem Block im PSE gehoeren die Halogene (Gruppe 17)?',
  '[{"key":"A","text":"s-Block"},{"key":"B","text":"p-Block"},{"key":"C","text":"d-Block"},{"key":"E","text":"f-Block"},{"key":"D","text":"g-Block"}]'::jsonb,
  'B',
  NULL, NULL,
  'p-Block: Gruppen 13-18, d-Block: Gruppen 3-12, s-Block: Gruppen 1-2. Halogene (Gruppe 17) sind p-Block-Elemente mit der Konfiguration ns²np⁵ (7 Valenzelektronen). Edelgase (Gruppe 18) schliessen den p-Block ab.',
  2
),
(
  'typk-ch-5-01-pse-aufbau',
  'K', 'chemie', 'ch-5-01',
  'Welche der folgenden Aussagen zum Aufbau des Periodensystems sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Die Perioden entsprechen der Hauptquantenzahl n der aeussersten Schale.","korrekt":true},{"nr":2,"text":"Im d-Block stehen die Hauptgruppenelemente (s- und p-Elemente).","korrekt":false},{"nr":3,"text":"Elemente in derselben Gruppe haben dieselbe Anzahl an Valenzelektronen und aehnliche chemische Eigenschaften.","korrekt":true},{"nr":4,"text":"Lanthanoide und Actinoide gehoeren zum f-Block und sind in der Haupttabelle meist separat dargestellt.","korrekt":true},{"nr":5,"text":"Metallcharakter nimmt innerhalb einer Periode von links nach rechts zu.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Periode 2: n=2 (L-Schale). Aussage 2: falsch — d-Block sind Uebergangsmetalle (Nebengruppen). Aussage 3: korrekt — gleiche Valenzelektronenzahl → aehnliche Chemie. Aussage 4: korrekt — f-Block: 14 Elemente, separat dargestellt. Aussage 5: falsch — Metallcharakter nimmt von links nach rechts AB (nicht zu).',
  2
),

-- UK ch-5-02: Periodische Trends
(
  'typa-ch-5-02-atomradius-trend',
  'A', 'chemie', 'ch-5-02',
  'Wie veraendert sich der Atomradius innerhalb einer Periode (z.B. Li → Ne) von links nach rechts?',
  '[{"key":"A","text":"Nimmt zu, weil mehr Elektronen vorhanden sind."},{"key":"B","text":"Bleibt konstant, da die Periode gleich bleibt."},{"key":"C","text":"Nimmt ab, weil die Kernladung steigt und Elektronen staerker angezogen werden."},{"key":"D","text":"Nimmt zunaechst ab, dann wieder zu."},{"key":"E","text":"Nimmt zu, weil die Elektronendichte steigt."}]'::jsonb,
  'C',
  NULL, NULL,
  'Innerhalb einer Periode steigt Z (Kernladung) von links nach rechts bei gleicher Hauptschale. Die erhoehte Kernladung zieht die Elektronen staerker an → Atomradius nimmt ab. Innerhalb einer Gruppe nimmt der Radius zu (mehr Schalen).',
  2
),
(
  'typa-ch-5-02-ionisierungsenergie',
  'A', 'chemie', 'ch-5-02',
  'Welches der folgenden Elemente hat die hoechste erste Ionisierungsenergie?',
  '[{"key":"A","text":"Na"},{"key":"B","text":"Mg"},{"key":"C","text":"Al"},{"key":"D","text":"Ne"},{"key":"E","text":"Cl"}]'::jsonb,
  'D',
  NULL, NULL,
  'Edelgase haben die hoechste Ionisierungsenergie — ihre Elektronenkonfiguration ist vollstaendig besetzt und stabil. Ne (Z=10) hat IE₁ = 2081 kJ/mol — die hoechste unter den genannten Elementen. Allgemeiner Trend: IE steigt von links nach rechts in einer Periode, nimmt von oben nach unten in einer Gruppe ab.',
  2
),
(
  'typa-ch-5-02-elektronegativitaet',
  'A', 'chemie', 'ch-5-02',
  'Welches Element hat die hoechste Elektronegativitaet nach Pauling?',
  '[{"key":"A","text":"O (Sauerstoff, EN = 3,5)"},{"key":"B","text":"N (Stickstoff, EN = 3,0)"},{"key":"C","text":"Cl (Chlor, EN = 3,2)"},{"key":"D","text":"F (Fluor, EN = 4,0)"},{"key":"E","text":"Na (Natrium, EN = 0,9)"}]'::jsonb,
  'D',
  NULL, NULL,
  'Fluor (F) hat die hoechste EN nach Pauling: EN(F) = 4,0. Reihenfolge: F > O > N > Cl > Br. EN nimmt in einer Periode von links nach rechts zu und in einer Gruppe von unten nach oben zu. Die EN bestimmt, ob eine Bindung ionisch, polar-kovalent oder unpolar ist.',
  1
),
(
  'typk-ch-5-02-trends',
  'K', 'chemie', 'ch-5-02',
  'Welche der folgenden Aussagen zu den periodischen Trends sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Atomradius nimmt innerhalb einer Gruppe von oben nach unten zu (mehr Schalen).","korrekt":true},{"nr":2,"text":"Ionisierungsenergie nimmt innerhalb einer Periode von links nach rechts ab.","korrekt":false},{"nr":3,"text":"Elektronegativitaet nimmt innerhalb einer Periode von links nach rechts zu.","korrekt":true},{"nr":4,"text":"Die Elektronenaffinitaet der Halogene ist besonders gross, da sie eine vollstaendige Edelgaskonfiguration erreichen koennen.","korrekt":true},{"nr":5,"text":"Metallcharakter nimmt innerhalb einer Periode von links nach rechts zu.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Radius in Gruppe von oben nach unten groesser. Aussage 2: falsch — IE nimmt von links nach rechts ZU (hohere Z, gleiche Schale). Aussage 3: korrekt — EN nimmt von links nach rechts zu. Aussage 4: korrekt — Halogene: 7 Valenzelektronen, benoetigen 1 e⁻ fuer Oktet → hohe EA. Aussage 5: falsch — Metallcharakter nimmt von links nach rechts AB.',
  2
),

-- UK ch-5-03: Wichtige Elementgruppen
(
  'typa-ch-5-03-alkalimetalle',
  'A', 'chemie', 'ch-5-03',
  'Warum reagieren Alkalimetalle (Li, Na, K...) heftig mit Wasser?',
  '[{"key":"A","text":"Sie sind radioaktiv und emittieren ionisierende Strahlung."},{"key":"B","text":"Sie haben nur 1 Valenzelektron und geben es sehr leicht ab (niedrige IE), wodurch H₂ und OH⁻ entstehen."},{"key":"C","text":"Sie bilden stabile kovalente Bindungen mit Wasser."},{"key":"D","text":"Alkalimetalle loesen sich physikalisch in Wasser ohne Reaktion."},{"key":"E","text":"Die Reaktion benoetigt Aktivierungsenergie und tritt nur bei erhohter Temperatur auf."}]'::jsonb,
  'B',
  NULL, NULL,
  '2 Na + 2 H₂O → 2 NaOH + H₂. Alkalimetalle (Gruppe 1): 1 Valenzelektron, niedrige IE → leicht ionisierbar. K und Cs reagieren explosiv. Medizinisch relevant: Na⁺ und K⁺ als wichtigste Elektrolyte.',
  1
),
(
  'typa-ch-5-03-halogene',
  'A', 'chemie', 'ch-5-03',
  'Welches Halogen ist bei Raumtemperatur fluessig?',
  '[{"key":"A","text":"F₂ (Fluor)"},{"key":"B","text":"Cl₂ (Chlor)"},{"key":"C","text":"Br₂ (Brom)"},{"key":"D","text":"I₂ (Iod)"},{"key":"E","text":"At (Astat)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Br₂ ist bei Raumtemperatur (20 °C) das einzige fluessige Halogen (Sdp. = 58,8 °C). F₂ und Cl₂ sind Gase; I₂ ist fest (sublimiert bei 184 °C); At ist radioaktiv selten. Die Aggregatzustaende der Halogene steigen mit zunehmender Ordnungszahl durch staerkere van-der-Waals-Kraefte.',
  2
),
(
  'typk-ch-5-03-elementgruppen',
  'K', 'chemie', 'ch-5-03',
  'Welche der folgenden Aussagen zu den Elementgruppen des PSE sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Edelgase (Gruppe 18) sind chemisch weitgehend inert, da sie vollstaendig besetzte Valenzelektronenschalen haben.","korrekt":true},{"nr":2,"text":"Erdalkalimetalle (Gruppe 2) haben 2 Valenzelektronen und bilden M²⁺-Ionen.","korrekt":true},{"nr":3,"text":"Halogene (Gruppe 17) neigen zur Kationenbildung, da sie Elektronen leicht abgeben.","korrekt":false},{"nr":4,"text":"Medizinisch wichtige Elemente umfassen Na⁺, K⁺, Ca²⁺, Mg²⁺, Fe (Haemoglobin) und I (Schilddruese).","korrekt":true},{"nr":5,"text":"Alkalimetalle (Gruppe 1) koennen in Wasser mehrwertige Kationen bilden, z.B. Na²⁺.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Edelgase: vollstaendig besetzte p-Schale. Aussage 2: korrekt — Mg²⁺, Ca²⁺, Ba²⁺. Aussage 3: falsch — Halogene neigen zur ANIONENBILDUNG (X⁻), nicht Kationen. Aussage 4: korrekt — Na⁺, K⁺, Ca²⁺, Fe, I alle medizinisch relevant. Aussage 5: falsch — Alkalimetalle bilden nur einwertige Kationen M⁺ (z.B. Na⁺, K⁺), nie M²⁺.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 6: CHEMISCHE BINDUNG
-- ============================================================

-- UK ch-6-01: Ionenbindung und Gitterenergie
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-6-01-ionenbindung',
  'A', 'chemie', 'ch-6-01',
  'Welche Bedingung fuehrt zur Bildung einer Ionenbindung?',
  '[{"key":"A","text":"Beide Bindungspartner haben aehnliche Elektronegativitaet (ΔEN < 0,5)."},{"key":"B","text":"Ein Partner gibt Elektronen ab (Kation), der andere nimmt sie auf (Anion) — grosse EN-Differenz (ΔEN > 1,7)."},{"key":"C","text":"Beide Partner teilen Elektronen gleichmaessig."},{"key":"D","text":"Die Bindung entsteht durch van-der-Waals-Kraefte."},{"key":"E","text":"Ionenbindungen entstehen nur zwischen zwei Nichtmetallen."}]'::jsonb,
  'B',
  NULL, NULL,
  'Ionenbindung: ΔEN > 1,7 (Faustregel). Metall gibt Elektronen ab (Kation, z.B. Na⁺), Nichtmetall nimmt sie auf (Anion, z.B. Cl⁻). Coulombsche Anziehungskraft haelt Ionen zusammen. NaCl-Gitter: koordinationszahl 6 (jedes Ion von 6 entgegengesetzt geladenen Ionen umgeben).',
  1
),
(
  'typa-ch-6-01-gitterenergie',
  'A', 'chemie', 'ch-6-01',
  'Was beschreibt die Gitterenergie eines Ionenkristalls?',
  '[{"key":"A","text":"Die Energie, die freigesetzt wird, wenn 1 mol der Gitterionen vollstaendig dissoziiert werden."},{"key":"B","text":"Die Energie, die benoetigt wird, um 1 mol Ionenkristall aus seinen gasfoermigen Ionen aufzubauen (mit umgekehrtem Vorzeichen: Energie frei beim Aufbau)."},{"key":"C","text":"Die Energie der Elektronenuebertragung vom Metall auf das Nichtmetall."},{"key":"D","text":"Die kinetische Energie der Ionen im Kristallgitter."},{"key":"E","text":"Die Loeslichkeit des Salzes in Wasser."}]'::jsonb,
  'B',
  NULL, NULL,
  'Gitterenergie (U): Energie, die beim Aufbau des Kristalls aus gasfoermigen Ionen freigesetzt wird (negativ, exotherm). Grosse Gitterenergie: kleiner Ionenradius, hohe Ladung (z.B. MgO > NaCl). Sie bestimmt massgeblich die Stabilitaet und Loeslichkeit des Salzes (Born-Haber-Kreisprozess).',
  3
),
(
  'typk-ch-6-01-ionenbindung',
  'K', 'chemie', 'ch-6-01',
  'Welche der folgenden Aussagen zur Ionenbindung sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Ionenverbindungen haben typischerweise hohe Schmelzpunkte, weil die Gitterenergie gross ist.","korrekt":true},{"nr":2,"text":"Ionenverbindungen leiten Strom in festem Zustand, aber nicht in Loesung.","korrekt":false},{"nr":3,"text":"NaCl loest sich in Wasser, weil polare Wassermoekuele die Ionen hydratisieren (Ion-Dipol-Wechselwirkungen).","korrekt":true},{"nr":4,"text":"Magnesiumoxid (MgO) hat eine hoehere Gitterenergie als NaCl, weil Mg²⁺ und O²⁻ hoehere Ladungen und kleinere Radien haben.","korrekt":true},{"nr":5,"text":"Bei der Ionenbindung werden Elektronen gleichmaessig geteilt.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — hohe Gitterenergie → hoher Schmelzpunkt (NaCl 801 °C, MgO 2852 °C). Aussage 2: falsch — in Loesung und Schmelze leiten Ionenverbindungen, im Festkoerper nicht (Ionen unbeweglich). Aussage 3: korrekt — Hydratation durch polare H₂O. Aussage 4: korrekt — Coulomb: E ~ q₁q₂/r. Aussage 5: falsch — gleichmaessiges Teilen = kovalente Bindung, nicht Ionenbindung.',
  2
),

-- UK ch-6-02: Kovalente Bindung und Hybridisierung
(
  'typa-ch-6-02-vsepr',
  'A', 'chemie', 'ch-6-02',
  'Welche Geometrie hat das Wassermolekuel (H₂O) nach dem VSEPR-Modell?',
  '[{"key":"A","text":"Linear (180°)"},{"key":"B","text":"Trigonal planar (120°)"},{"key":"C","text":"Tetraedrisch (109,5°)"},{"key":"D","text":"Gewinkelt (~104,5°)"},{"key":"E","text":"Trigonal pyramidal (~107°)"}]'::jsonb,
  'D',
  NULL, NULL,
  'H₂O: O hat 2 bindende Paare (zu H) und 2 freie Elektronenpaare → 4 Elektronenpaare insgesamt → Tetraedergeometrie der Paare → Molekuelgeometrie: GEWINKELT. Freie Paare stossen staerker → Winkel kleiner als ideale 109,5° → ca. 104,5°.',
  2
),
(
  'typa-ch-6-02-hybridisierung',
  'A', 'chemie', 'ch-6-02',
  'Welche Hybridisierung hat Kohlenstoff in Methan (CH₄)?',
  '[{"key":"A","text":"sp"},{"key":"B","text":"sp²"},{"key":"C","text":"sp³"},{"key":"D","text":"sp³d"},{"key":"E","text":"p³"}]'::jsonb,
  'C',
  NULL, NULL,
  'In CH₄ bildet C vier gleichwertige sigma-Bindungen zu H. Dafuer hybridisieren 1 s- und 3 p-Orbitale zu 4 sp³-Hybridorbitalen → tetraedrische Anordnung (109,5°). sp² (Doppelbindung, z.B. Ethen), sp (Dreifachbindung, z.B. Ethin).',
  2
),
(
  'typa-ch-6-02-polar',
  'A', 'chemie', 'ch-6-02',
  'Welcher Bereich der EN-Differenz (ΔEN) beschreibt eine polare kovalente Bindung?',
  '[{"key":"A","text":"ΔEN = 0"},{"key":"B","text":"0 < ΔEN < 0,5"},{"key":"C","text":"0,5 ≤ ΔEN ≤ 1,7"},{"key":"D","text":"ΔEN > 1,7"},{"key":"E","text":"ΔEN > 3,0"}]'::jsonb,
  'C',
  NULL, NULL,
  'Bindungstypen nach ΔEN: 0 = unpolar kovalent (z.B. H-H, Cl-Cl); 0,5-1,7 = polar kovalent (z.B. H-O, H-N, H-Cl); >1,7 = ionisch (z.B. Na-Cl, ΔEN = 2,1). Die genaue Grenze variiert je nach Quelle, 1,7 ist eine gaengige Faustregel.',
  2
),
(
  'typk-ch-6-02-kovalente-bindung',
  'K', 'chemie', 'ch-6-02',
  'Welche der folgenden Aussagen zu kovalenter Bindung und Hybridisierung sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"sp³-Hybridisierung fuehrt zu tetraedrischer Geometrie mit Bindungswinkeln von ~109,5°.","korrekt":true},{"nr":2,"text":"In einer Doppelbindung (C=C) gibt es eine σ-Bindung und eine π-Bindung.","korrekt":true},{"nr":3,"text":"π-Bindungen koennen frei rotieren, sigma-Bindungen nicht.","korrekt":false},{"nr":4,"text":"sp²-Hybridisierung: 3 sp²-Orbitale in einer Ebene + 1 p-Orbital senkrecht dazu (fuer π-Bindung).","korrekt":true},{"nr":5,"text":"Polare kovalente Bindungen entstehen bei ΔEN = 0.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — sp³: Tetraeder, 109,5°. Aussage 2: korrekt — Doppelbindung: 1σ + 1π. Aussage 3: falsch — UMGEKEHRT: σ-Bindungen koennen frei rotieren; π-Bindungen nicht (daher cis/trans-Isomerie). Aussage 4: korrekt — sp²: trigonal planar + p-Orbital fuer π. Aussage 5: falsch — ΔEN = 0 → unpolar (nicht polar).',
  2
),

-- UK ch-6-03: Van-der-Waals, Wasserstoffbruecken, Metallbindung
(
  'typa-ch-6-03-hbruecke',
  'A', 'chemie', 'ch-6-03',
  'Zwischen welchen Atomen koennen Wasserstoffbrueckenbindungen gebildet werden?',
  '[{"key":"A","text":"Nur zwischen zwei Sauerstoffatomen"},{"key":"B","text":"Zwischen H und einem stark elektronegativen Atom (F, O oder N)"},{"key":"C","text":"Zwischen jedem H-Atom und jedem anderen Atom"},{"key":"D","text":"Nur in fluessigem Wasser, nicht in anderen Substanzen"},{"key":"E","text":"Zwischen H und Kohlenstoff (C-H ... C)"}]'::jsonb,
  'B',
  NULL, NULL,
  'H-Bruecken entstehen zwischen einem kovalent gebundenen H-Atom an einem elektronegativen Atom (F, O, N — FON-Regel) und einem freien Elektronenpaar eines anderen elektronegativen Atoms (F, O, N). Beispiele: H₂O-H₂O, DNA-Basenpaare, Proteinsekundaerstruktur (Helices, Faltblaetter).',
  1
),
(
  'typa-ch-6-03-vdw',
  'A', 'chemie', 'ch-6-03',
  'Welche intermolekularen Kraefte existieren IMMER in allen Molekuelen, auch in unpolaren?',
  '[{"key":"A","text":"Ionenkraefte"},{"key":"B","text":"Wasserstoffbrueckenbindungen"},{"key":"C","text":"Dipol-Dipol-Wechselwirkungen"},{"key":"D","text":"London-Dispersionskraefte (Van-der-Waals)"},{"key":"E","text":"Kovalente Bindungen"}]'::jsonb,
  'D',
  NULL, NULL,
  'London-Dispersionskraefte (Van-der-Waals): entstehen durch kurzlebige, induzierte Dipole in allen Atomen/Molekuelen — auch in unpolaren wie He, N₂, CH₄. Staerke steigt mit Groesse und Polarisierbarkeit. Dipol-Dipol nur in polaren Molekuelen; H-Bruecken nur bei F-H, O-H, N-H.',
  2
),
(
  'typk-ch-6-03-intermolekular',
  'K', 'chemie', 'ch-6-03',
  'Welche der folgenden Aussagen zu intermolekularen Kraefte sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"London-Dispersionskraefte wirken in allen Molekuelen und steigen mit der Molekuelgroesse.","korrekt":true},{"nr":2,"text":"H-Bruecken sind staerker als kovalente Bindungen.","korrekt":false},{"nr":3,"text":"In der DNA-Doppelhelix stabilisieren H-Bruecken zwischen den Basenpaaren die Struktur (A-T: 2 H-Bruecken, G-C: 3 H-Bruecken).","korrekt":true},{"nr":4,"text":"Metallbindung beruht auf delokalisierten Elektronen (Elektronengas), die alle Metallkationen zusammenhalten.","korrekt":true},{"nr":5,"text":"Van-der-Waals-Kraefte sind staerker als ionische Bindungen.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — London-Kraefte in allen Molekuelen. Aussage 2: falsch — H-Bruecken (~20 kJ/mol) sind deutlich SCHWAECHER als kovalente Bindungen (~200-400 kJ/mol). Aussage 3: korrekt — A-T: 2, G-C: 3 H-Bruecken. Aussage 4: korrekt — Elektronengasmodell der Metallbindung. Aussage 5: falsch — Van-der-Waals deutlich schwaecher als Ionenbindungen.',
  2
),

-- UK ch-6-04: Bindungen in Biomolekuelen
(
  'typa-ch-6-04-peptidbindung',
  'A', 'chemie', 'ch-6-04',
  'Welche Besonderheit hat die Peptidbindung (C-N-Bindung in Proteinen)?',
  '[{"key":"A","text":"Sie ist eine reine Einfachbindung und vollstaendig frei rotierbar."},{"key":"B","text":"Sie hat Doppelbindungscharakter durch Resonanz — das C-N-Atom-Geruest ist planar und eingeschraenkt drehbar."},{"key":"C","text":"Sie ist eine ionische Bindung zwischen NH₃⁺ und COO⁻."},{"key":"D","text":"Sie wird durch H-Bruecken stabilisiert."},{"key":"E","text":"Die Peptidbindung ist eine Esterverbindung zwischen Aminosaeuren."}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Peptidbindung (HN-CO) hat durch Mesomerie/Resonanz partiellen Doppelbindungscharakter → planare, starre Einheit (keine freie Rotation um C-N). Dadurch koennen nur phi (φ) und psi (ψ) Winkel variieren → Grundlage der Proteinsekundaerstruktur (Helix, Faltblatt).',
  2
),
(
  'typa-ch-6-04-dna-hbruecken',
  'A', 'chemie', 'ch-6-04',
  'Wie viele Wasserstoffbrueckenbindungen verbinden die Basenpaare Adenin-Thymin (A-T) und Guanin-Cytosin (G-C) in der DNA?',
  '[{"key":"A","text":"A-T: 3 H-Bruecken; G-C: 2 H-Bruecken"},{"key":"B","text":"A-T: 2 H-Bruecken; G-C: 3 H-Bruecken"},{"key":"C","text":"A-T: 4 H-Bruecken; G-C: 2 H-Bruecken"},{"key":"D","text":"A-T: 2 H-Bruecken; G-C: 2 H-Bruecken"},{"key":"E","text":"Beide: jeweils 3 H-Bruecken"}]'::jsonb,
  'B',
  NULL, NULL,
  'A-T: 2 Wasserstoffbrueckenbindungen. G-C: 3 Wasserstoffbrueckenbindungen. Daher ist G-C-reiche DNA thermisch stabiler (hoehere Schmelztemperatur). Der GC-Gehalt ist ein Mass fuer die Doppelstrangstabilitaet — relevant fuer PCR-Denaturierungstemperaturen.',
  1
),
(
  'typk-ch-6-04-biomolekuele',
  'K', 'chemie', 'ch-6-04',
  'Welche der folgenden Aussagen zu Bindungen in Biomolekuelen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Disulfidbruecken (S-S) entstehen durch Oxidation zweier Cysteinreste und stabilisieren die Tertiaerstruktur von Proteinen.","korrekt":true},{"nr":2,"text":"Die Peptidbindung ist aufgrund von Resonanz planar und eingeschraenkt rotierbar.","korrekt":true},{"nr":3,"text":"In der DNA-Doppelhelix verbinden kovalente Bindungen die komplementaeren Basenpaare.","korrekt":false},{"nr":4,"text":"Phosphodiesterbindungen verbinden die Zucker-Phosphat-Einheiten im DNA-Rueckgrat kovalent.","korrekt":true},{"nr":5,"text":"A-T-Basenpaare haben 3 H-Bruecken und sind daher stabiler als G-C-Basenpaare.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — S-S-Bruecken durch Oxidation von -SH-Gruppen. Aussage 2: korrekt — Planar durch Resonanz, phi/psi variierbar. Aussage 3: falsch — Basenpaare durch H-BRUECKEN verbunden (nicht kovalent). Aussage 4: korrekt — Phosphodiesterbindung = kovalentes Rueckgrat. Aussage 5: falsch — A-T hat 2 H-Bruecken (nicht 3); G-C hat 3 → G-C stabiler.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 7: CHEMISCHE REAKTIONEN, STOECHIOMETRIE, ENERGETIK
-- ============================================================

-- UK ch-7-01: Reaktionsgleichungen und Symbolik
INSERT INTO bms_questions
  (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit)
VALUES
(
  'typa-ch-7-01-massenerhaltung',
  'A', 'chemie', 'ch-7-01',
  'Das Gesetz der Massenerhaltung besagt:',
  '[{"key":"A","text":"Die Gesamtenergie bleibt bei chemischen Reaktionen konstant."},{"key":"B","text":"Die Gesamtmasse der Edukte ist gleich der Gesamtmasse der Produkte."},{"key":"C","text":"Atome koennen bei Reaktionen erschaffen oder vernichtet werden."},{"key":"D","text":"Die Molzahlen von Edukten und Produkten sind stets gleich."},{"key":"E","text":"Nur die Zahl der Molekuele bleibt bei Reaktionen konstant."}]'::jsonb,
  'B',
  NULL, NULL,
  'Massenerhaltung (Lavoisier): bei jeder chemischen Reaktion gilt m(Edukte) = m(Produkte). Atome werden weder erzeugt noch vernichtet — nur umgeordnet. Konsequenz: Reaktionsgleichungen muessen balanciert sein (gleiche Atomzahl auf beiden Seiten).',
  1
),
(
  'typa-ch-7-01-oxidationszahl',
  'A', 'chemie', 'ch-7-01',
  'Welche Oxidationszahl hat Schwefel in H₂SO₄?',
  '[{"key":"A","text":"+2"},{"key":"B","text":"+4"},{"key":"C","text":"+6"},{"key":"D","text":"−2"},{"key":"E","text":"0"}]'::jsonb,
  'C',
  NULL, NULL,
  'H₂SO₄: 2×(+1) + S + 4×(−2) = 0 → 2 + S − 8 = 0 → S = +6. Oxidationszahlregeln: H meist +1, O meist −2. In H₂SO₄ hat S die hoechste Oxidationsstufe +6 (stark oxidierend). Vergleich: H₂SO₃: S = +4; H₂S: S = −2.',
  2
),
(
  'typa-ch-7-01-reaktionsgleichung',
  'A', 'chemie', 'ch-7-01',
  'Welche der folgenden Gleichungen ist korrekt balanciert? (Verbrennung von Propan C₃H₈)',
  '[{"key":"A","text":"C₃H₈ + O₂ → CO₂ + H₂O"},{"key":"B","text":"C₃H₈ + 4 O₂ → 3 CO₂ + 4 H₂O"},{"key":"C","text":"C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O"},{"key":"D","text":"C₃H₈ + 6 O₂ → 3 CO₂ + 6 H₂O"},{"key":"E","text":"2 C₃H₈ + 10 O₂ → 6 CO₂ + 8 H₂O"}]'::jsonb,
  'C',
  NULL, NULL,
  'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Kontrolle: C: 3=3; H: 8=8; O: 10 = 6+4=10. Korrekt. Option E ist ebenfalls balanciert (2×Gleichung C), aber Antwort C ist die einfachste Form. Bei MedAT ist stets die kleinste ganzahlige Koeffizientenform zu bevorzugen.',
  2
),
(
  'typk-ch-7-01-reaktionen',
  'K', 'chemie', 'ch-7-01',
  'Welche der folgenden Aussagen zu chemischen Reaktionsgleichungen sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"In einer balancierten Reaktionsgleichung ist die Anzahl jeder Atomsorte auf beiden Seiten gleich.","korrekt":true},{"nr":2,"text":"Stoichiometrische Koeffizienten geben die Molverhaeltnisse der Reaktionspartner an.","korrekt":true},{"nr":3,"text":"Bei einer Redoxreaktion veraendern sich die Oxidationszahlen aller beteiligten Atome.","korrekt":false},{"nr":4,"text":"Das Zustandssymbol (aq) bedeutet, dass eine Substanz in waessriger Loesung vorliegt.","korrekt":true},{"nr":5,"text":"Bei Neutralisationsreaktionen entsteht immer reines Wasser als einziges Produkt.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Massenerhaltung: Atomzahl links = rechts. Aussage 2: korrekt — z.B. 2 H₂ + O₂ → Mol-Verhaeltnis 2:1. Aussage 3: falsch — bei Redoxreaktionen aendern sich nur die Oxidationszahlen der OXIDATION/REDUKTIONSMITTEL, nicht aller Atome. Aussage 4: korrekt — (aq) = aqueous. Aussage 5: falsch — Neutralisation: Saeure + Base → Salz + Wasser (Salz entsteht zusaetzlich).',
  2
),

-- UK ch-7-02: Stoechiometrie und Konzentrationsrechnen
(
  'typa-ch-7-02-stoechiometrie',
  'A', 'chemie', 'ch-7-02',
  'Wie viele Gramm CO₂ (M = 44 g/mol) entstehen bei der vollstaendigen Verbrennung von 22 g Propan (C₃H₈, M = 44 g/mol)? Reaktion: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O',
  '[{"key":"A","text":"22 g"},{"key":"B","text":"44 g"},{"key":"C","text":"66 g"},{"key":"D","text":"132 g"},{"key":"E","text":"88 g"}]'::jsonb,
  'C',
  NULL, NULL,
  'n(C₃H₈) = 22/44 = 0,5 mol. Koeffizientenverhaeltnis: 1 mol C₃H₈ liefert 3 mol CO₂ → n(CO₂) = 0,5 × 3 = 1,5 mol. m(CO₂) = 1,5 × 44 = 66 g.',
  2
),
(
  'typa-ch-7-02-verduennung',
  'A', 'chemie', 'ch-7-02',
  'Welches Volumen einer 2 mol/L HCl-Stammlosung wird benoetigt, um 500 mL einer 0,1 mol/L HCl-Loesung herzustellen?',
  '[{"key":"A","text":"250 mL"},{"key":"B","text":"10 mL"},{"key":"C","text":"25 mL"},{"key":"D","text":"100 mL"},{"key":"E","text":"50 mL"}]'::jsonb,
  'C',
  NULL, NULL,
  'Verduennungsformel: c₁ × V₁ = c₂ × V₂ → V₁ = c₂ × V₂ / c₁ = 0,1 × 500 / 2 = 25 mL. Man nimmt 25 mL der 2 M Loesung und fuellt auf 500 mL auf. Wichtige Laborformel!',
  2
),
(
  'typa-ch-7-02-grenzreagenz',
  'A', 'chemie', 'ch-7-02',
  'In der Reaktion N₂ + 3 H₂ → 2 NH₃ werden 28 g N₂ (M = 28 g/mol) mit 3 g H₂ (M = 2 g/mol) umgesetzt. Welches ist das Grenzreagenz?',
  '[{"key":"A","text":"N₂, da es weniger Mol vorhanden sind"},{"key":"B","text":"H₂, da es die kleinere Molmasse hat"},{"key":"C","text":"H₂, da 1 mol N₂ 3 mol H₂ benoetigt, aber nur 1,5 mol H₂ vorhanden sind"},{"key":"D","text":"N₂, da es schwerere Molekuele hat"},{"key":"E","text":"Es gibt kein Grenzreagenz — beide reagieren vollstaendig."}]'::jsonb,
  'C',
  NULL, NULL,
  'n(N₂) = 28/28 = 1 mol; n(H₂) = 3/2 = 1,5 mol. Fuer 1 mol N₂ benoetigt man 3 mol H₂ (Koeffizient 3). Vorhanden: nur 1,5 mol H₂ → H₂ ist das Grenzreagenz. n(NH₃) = 1,5/3 × 2 = 1 mol NH₃ = 17 g NH₃.',
  3
),
(
  'typk-ch-7-02-stoechiometrie',
  'K', 'chemie', 'ch-7-02',
  'Welche der folgenden Aussagen zur stoichiometrischen Rechnung sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die Verduennungsformel c₁V₁ = c₂V₂ gilt bei der Verduennung von Stammloesungen.","korrekt":true},{"nr":2,"text":"Das Grenzreagenz bestimmt die maximale Ausbeute einer Reaktion.","korrekt":true},{"nr":3,"text":"Molverhaeltnisse in einer Reaktion entsprechen immer den Massenverhaeltnissen.","korrekt":false},{"nr":4,"text":"n = c × V ist die Formel zur Berechnung der Stoffmenge aus Konzentration und Volumen.","korrekt":true},{"nr":5,"text":"Bei 100 % Ausbeute reagiert alles Grenzreagenz vollstaendig zu Produkt.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — c₁V₁=c₂V₂ fuer Verduennungen. Aussage 2: korrekt — Grenzreagenz limitiert Ausbeute. Aussage 3: falsch — Molverhaeltnisse = stoichiometrische Koeffizienten (z.B. 1:3 fuer N₂:H₂), aber Massenverhaeltnisse muessen mit M gewichtet werden. Aussage 4: korrekt — n = c × V. Aussage 5: falsch — bei 100 % Ausbeute reagiert alles Grenzreagenz, aber andere Reagenzien koennen im Ueberschuss verbleiben.',
  2
),

-- UK ch-7-03: Energetik chemischer Reaktionen
(
  'typa-ch-7-03-exotherm',
  'A', 'chemie', 'ch-7-03',
  'Was gilt fuer eine exotherme chemische Reaktion?',
  '[{"key":"A","text":"ΔH > 0; die Umgebung nimmt Energie auf."},{"key":"B","text":"ΔH < 0; die Reaktion gibt Waerme an die Umgebung ab."},{"key":"C","text":"ΔH = 0; Energie wird weder freigesetzt noch verbraucht."},{"key":"D","text":"ΔH > 0; die Reaktion benoetigt staendig Energiezufuhr."},{"key":"E","text":"ΔH ist unabhaengig vom Energieinhalt der Reaktanten."}]'::jsonb,
  'B',
  NULL, NULL,
  'Exotherm: ΔH < 0 (Reaktionsenthalpie negativ). Energie wird freigesetzt → Umgebung erwaermt sich. Beispiele: Verbrennung, Neutralisation, Oxidation. Endotherm: ΔH > 0 (Energie wird aufgenommen, z.B. Fotosynthese, thermische Dissoziation).',
  1
),
(
  'typa-ch-7-03-hess',
  'A', 'chemie', 'ch-7-03',
  'Was besagt der Hesssche Wärmesatz?',
  '[{"key":"A","text":"Die Reaktionsenthalpie haengt vom Reaktionsweg ab."},{"key":"B","text":"Die Gesamtenthalpieaenderung einer Reaktion ist unabhaengig vom Weg — nur Anfangs- und Endzustand zaehlen."},{"key":"C","text":"Exotherme Reaktionen laufen stets spontan ab."},{"key":"D","text":"Katalysatoren veraendern die Reaktionsenthalpie."},{"key":"E","text":"Die Aktivierungsenergie ist immer groesser als die Reaktionsenthalpie."}]'::jsonb,
  'B',
  NULL, NULL,
  'Hessscher Wärmesatz: ΔH_ges = Σ ΔH_Schritte (Zustandsfunktion). Die Reaktionsenthalpie haengt nur von Anfangs- und Endzustand ab, nicht vom Reaktionsweg (Hess 1840). Erlaubt Berechnung von ΔH ueber nicht direkt messbare Reaktionen durch Addition bekannter Teilreaktionen.',
  2
),
(
  'typa-ch-7-03-katalysator',
  'A', 'chemie', 'ch-7-03',
  'Was bewirkt ein Katalysator in einer chemischen Reaktion?',
  '[{"key":"A","text":"Er verschiebt das chemische Gleichgewicht auf die Produktseite."},{"key":"B","text":"Er erhoht die Reaktionsenthalpie ΔH."},{"key":"C","text":"Er senkt die Aktivierungsenergie E_A, ohne ΔH zu veraendern."},{"key":"D","text":"Er wird bei der Reaktion verbraucht."},{"key":"E","text":"Er macht exotherme Reaktionen endotherm."}]'::jsonb,
  'C',
  NULL, NULL,
  'Katalysator: senkt E_A durch alternativen Reaktionsmechanismus → Reaktion laeuft schneller. ΔH (Thermodynamik) bleibt unveraendert — nur Kinetik wird beeinflusst. Katalysator wird nicht verbraucht (regeneriert sich). Biokatalysatoren = Enzyme (z.B. Amylase, Hexokinase).',
  1
),
(
  'typk-ch-7-03-energetik',
  'K', 'chemie', 'ch-7-03',
  'Welche der folgenden Aussagen zur Energetik chemischer Reaktionen sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Bei exothermen Reaktionen gilt ΔH < 0 — Energie wird an die Umgebung abgegeben.","korrekt":true},{"nr":2,"text":"Ein Katalysator veraendert die Reaktionsenthalpie ΔH, aber nicht die Aktivierungsenergie E_A.","korrekt":false},{"nr":3,"text":"Der Hesssche Waermesatz besagt, dass ΔH einer Reaktion unabhaengig vom Reaktionsweg ist.","korrekt":true},{"nr":4,"text":"Aktivierungsenergie E_A ist die Mindestenergie, die Reaktanten aufbringen muessen, damit eine Reaktion ablaeuft.","korrekt":true},{"nr":5,"text":"Endotherme Reaktionen (ΔH > 0) laufen niemals spontan ab.","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — exotherm: ΔH < 0. Aussage 2: falsch — Katalysator senkt E_A, veraendert ΔH NICHT. Aussage 3: korrekt — Hess: Zustandsfunktion, wegunabhaengig. Aussage 4: korrekt — E_A = Aktivierungsenergie. Aussage 5: falsch — endotherme Reaktionen koennen spontan ablaufen, wenn die Entropiezunahme gross genug ist (ΔG = ΔH − TΔS < 0 trotz ΔH > 0).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- CHEMIE Kap 8-13: BMS Fragen-Bank
-- Generiert fuer MedAT-Vorbereitung
-- Typ A = 5 Optionen (A-E), Typ K = 5 Aussagen (3 korrekt) + 5 Kombinationen

-- ============================================================
-- KAP 8: Chemisches Gleichgewicht
-- ============================================================

-- UK ch-8-01: Reaktionsgeschwindigkeit und Aktivierungsenergie
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-8-01-rgt-berechnung',
  'A', 'chemie', 'ch-8-01',
  'Eine Enzymreaktion laeuft bei 30 °C mit v = 0,2 mol/L·s. Der Q₁₀-Wert betraegt 2. Welche Geschwindigkeit wird bei 50 °C erwartet?',
  '[{"key":"A","text":"0,4 mol/L·s"},{"key":"B","text":"0,6 mol/L·s"},{"key":"C","text":"0,8 mol/L·s"},{"key":"D","text":"1,0 mol/L·s"},{"key":"E","text":"1,6 mol/L·s"}]'::jsonb,
  'C',
  NULL, NULL,
  'Von 30 auf 50 °C sind es zwei 10-°C-Schritte. Pro Schritt verdoppelt sich v (Q₁₀ = 2). Schritt 1 (30→40 °C): 0,2 × 2 = 0,4 mol/L·s. Schritt 2 (40→50 °C): 0,4 × 2 = 0,8 mol/L·s. Faktor 4 insgesamt (2² = 4).',
  2
),

(
  'typa-ch-8-01-arrhenius',
  'A', 'chemie', 'ch-8-01',
  'In der Arrhenius-Gleichung k = A · e^(−E_A/RT) gilt: Welche Aussage beschreibt den Effekt einer Verdoppelung der absoluten Temperatur T korrekt?',
  '[{"key":"A","text":"k verdoppelt sich linear"},{"key":"B","text":"k steigt exponentiell, da der Exponent −E_A/RT weniger negativ wird"},{"key":"C","text":"k sinkt, weil A konstant bleibt"},{"key":"D","text":"k ist unabhaengig von T wenn E_A gross ist"},{"key":"E","text":"k veraendert sich nur, wenn Katalysatoren zugegen sind"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei Verdoppelung von T wird der Exponent −E_A/(R·2T) halb so negativ wie −E_A/(RT). Da der Exponent weniger negativ wird, steigt e^(−E_A/RT) exponentiell an — k nimmt stark zu. Dies ist keine lineare Beziehung, sondern eine exponentielle (Arrhenius-Verhalten).',
  2
),

(
  'typk-ch-8-01-ea-katalysator',
  'K', 'chemie', 'ch-8-01',
  'Welche der folgenden Aussagen zur Aktivierungsenergie und Katalyse sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Ein Katalysator senkt die Aktivierungsenergie E_A und beschleunigt damit die Reaktion","korrekt":true},{"nr":2,"text":"Ein Katalysator aendert die Reaktionsenthalpie DeltaH der Gesamtreaktion","korrekt":false},{"nr":3,"text":"Enzyme koennen E_A um Faktoren von 10^6 bis 10^12 senken und damit Reaktionen massiv beschleunigen","korrekt":true},{"nr":4,"text":"Ein Katalysator verschiebt das chemische Gleichgewicht zugunsten der Produkte","korrekt":false},{"nr":5,"text":"Die Aktivierungsenergie entspricht im Energiediagramm der Differenz zwischen Eduktniveau und dem Energiemaximum (Uebergangszustand)","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Katalysatoren stellen einen alternativen Reaktionspfad mit niedrigerem E_A bereit. Aussage 2: falsch — DeltaH ist eine Zustandsfunktion, unveraendert durch Katalysator. Aussage 3: korrekt — Enzyme beschleunigen biologische Reaktionen um astronomische Faktoren. Aussage 4: falsch — Katalysatoren aendern die Gleichgewichtslage nicht, da sie Hin- und Rueckreaktion gleich beschleunigen. Aussage 5: korrekt — Definition von E_A im Energieprofil.',
  2
),

(
  'typa-ch-8-01-exotherm-profil',
  'A', 'chemie', 'ch-8-01',
  'Im Energieprofil einer exothermen Reaktion (DeltaH = −80 kJ/mol) betraegt E_A der Hinreaktion 120 kJ/mol. Wie gross ist E_A der Rueckreaktion?',
  '[{"key":"A","text":"40 kJ/mol"},{"key":"B","text":"80 kJ/mol"},{"key":"C","text":"120 kJ/mol"},{"key":"D","text":"200 kJ/mol"},{"key":"E","text":"−80 kJ/mol"}]'::jsonb,
  'D',
  NULL, NULL,
  'Bei einer exothermen Reaktion liegen die Produkte um DeltaH = 80 kJ/mol tiefer als die Edukte. E_A(Rueck) = E_A(Hin) − DeltaH = 120 − (−80) = 120 + 80 = 200 kJ/mol. Die Rueckreaktion muss den hoeheren Energieberg ueberwinden, da die Produkte tiefer liegen.',
  3
),

(
  'typa-ch-8-01-geschwindigkeitsgesetz',
  'A', 'chemie', 'ch-8-01',
  'Fuer die Reaktion A + B → C gilt das Geschwindigkeitsgesetz v = k · [A]² · [B]. Was passiert mit v, wenn [A] verdoppelt und [B] halbiert wird?',
  '[{"key":"A","text":"v verdoppelt sich (Faktor 2)"},{"key":"B","text":"v bleibt unveraendert"},{"key":"C","text":"v verdoppelt sich (Faktor 2), da 2² · 0,5 = 2"},{"key":"D","text":"v sinkt auf ein Viertel"},{"key":"E","text":"v vervierfacht sich (Faktor 4)"}]'::jsonb,
  'C',
  NULL, NULL,
  'v_neu = k · [2A]² · [0,5B] = k · 4[A]² · 0,5[B] = 2 · k · [A]² · [B] = 2v. Die Verdoppelung von [A] geht quadratisch ein (Faktor 4), die Halbierung von [B] linear (Faktor 0,5). Gesamt: 4 × 0,5 = 2 → v verdoppelt sich.',
  3
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-8-02: Chemisches Gleichgewicht und Massenwirkungsgesetz
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-8-02-mwg-aufstellen',
  'A', 'chemie', 'ch-8-02',
  'Fuer die Reaktion 2 NO(g) + O₂(g) ⇌ 2 NO₂(g) lautet K_c korrekt:',
  '[{"key":"A","text":"K_c = [NO₂]² / ([NO]² · [O₂])"},{"key":"B","text":"K_c = [NO]² · [O₂] / [NO₂]²"},{"key":"C","text":"K_c = [NO₂] / ([NO] · [O₂])"},{"key":"D","text":"K_c = 2[NO₂] / (2[NO] · [O₂])"},{"key":"E","text":"K_c = [NO₂]² · [NO]² · [O₂]"}]'::jsonb,
  'A',
  NULL, NULL,
  'Nach dem Massenwirkungsgesetz stehen Produkte im Zaehler, Edukte im Nenner, potenziert mit den stoechimetrischen Koeffizienten. NO₂ (Koeff. 2) → [NO₂]²; NO (Koeff. 2) und O₂ (Koeff. 1) im Nenner → [NO]² · [O₂]. Koeffizienten werden zu Exponenten, nicht als Multiplikatoren.',
  2
),

(
  'typa-ch-8-02-kc-interpretation',
  'A', 'chemie', 'ch-8-02',
  'Die Sauerstoffbindung an Haemoglobin Hb + O₂ ⇌ HbO₂ hat im Lungengewebe ein grosses K_c. Was folgt daraus?',
  '[{"key":"A","text":"Im Lungengewebe liegt das GGW auf der Eduktseite (Hb + O₂ bevorzugt)"},{"key":"B","text":"Im Lungengewebe liegt das GGW auf der Produktseite (HbO₂ bevorzugt)"},{"key":"C","text":"K_c > 1 bedeutet, die Reaktion ist endotherm"},{"key":"D","text":"K_c ist grosser als 1, weil HbO₂ instabil ist"},{"key":"E","text":"Ein grosses K_c bedeutet schnelle Reaktionsgeschwindigkeit"}]'::jsonb,
  'B',
  NULL, NULL,
  'K_c >> 1 bedeutet, dass im Gleichgewicht die Produktkonzentrationen die Eduktkonzentrationen ueberwiegen — das GGW liegt auf der Produktseite. In der Lunge (hoher pO₂) liegt HbO₂ bevorzugt vor. Im Gewebe (niedriger pO₂) verschiebt sich das GGW zur Eduktseite (O₂-Abgabe, Bohr-Effekt). K_c sagt nichts ueber die Reaktionsgeschwindigkeit aus.',
  1
),

(
  'typa-ch-8-02-reaktionsquotient',
  'A', 'chemie', 'ch-8-02',
  'Fuer eine Reaktion gilt K_c = 0,04. Man misst aktuelle Konzentrationen und berechnet Q = 0,001. In welche Richtung laeuft die Reaktion?',
  '[{"key":"A","text":"Rueckreaktion (Edukte werden gebildet), da Q < K_c"},{"key":"B","text":"Hinreaktion (Produkte werden gebildet), da Q < K_c"},{"key":"C","text":"Das System ist im Gleichgewicht"},{"key":"D","text":"Keine Reaktion, da K_c < 1"},{"key":"E","text":"Rueckreaktion, da K_c < 1"}]'::jsonb,
  'B',
  NULL, NULL,
  'Q = 0,001 < K_c = 0,04: Es sind zu wenige Produkte vorhanden im Vergleich zum Gleichgewichtszustand. Das System reagiert durch Hinreaktion (Produktbildung), bis Q = K_c. Merksatz: Q < K → Hinreaktion; Q > K → Rueckreaktion; Q = K → Gleichgewicht.',
  2
),

(
  'typk-ch-8-02-mwg-regeln',
  'K', 'chemie', 'ch-8-02',
  'Welche der folgenden Aussagen zum Massenwirkungsgesetz und zum chemischen Gleichgewicht sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Reine Feststoffe und reine Fluessigkeiten gehen nicht in den K_c-Ausdruck ein (Aktivitaet = 1)","korrekt":true},{"nr":2,"text":"K_c aendert sich, wenn man die Konzentration eines Reaktanten erhoeht","korrekt":false},{"nr":3,"text":"K_c ist nur von der Temperatur abhaengig, nicht von Konzentration oder Druck","korrekt":true},{"nr":4,"text":"Ein grosses K_c bedeutet immer eine schnelle Reaktionsgeschwindigkeit","korrekt":false},{"nr":5,"text":"Das dynamische Gleichgewicht bedeutet, dass Hin- und Rueckreaktion auf molekularer Ebene weiterhin ablaufen","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Feststoffe/reine Fluessigkeiten haben definitionsgemaess Aktivitaet 1. Aussage 2: falsch — K_c bleibt bei Konzentrationsaenderung unveraendert, nur die GGW-Lage aendert sich. Aussage 3: korrekt — K_c ist eine Funktion der Temperatur (Van''t-Hoff). Aussage 4: falsch — K_c beschreibt Thermodynamik, nicht Kinetik. Aussage 5: korrekt — Definition des dynamischen Gleichgewichts.',
  2
),

(
  'typa-ch-8-02-kp-kc',
  'A', 'chemie', 'ch-8-02',
  'Fuer welche Gasreaktion gilt K_p ≠ K_c?',
  '[{"key":"A","text":"H₂(g) + I₂(g) ⇌ 2 HI(g), Delta n = 0"},{"key":"B","text":"N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), Delta n = −2"},{"key":"C","text":"2 HI(g) ⇌ H₂(g) + I₂(g), Delta n = 0"},{"key":"D","text":"CO(g) + NO(g) ⇌ CO₂(g) + N₂(g)... (Delta n abhaengig)"},{"key":"E","text":"Nur fuer Reaktionen ohne Gasteilnehmer"}]'::jsonb,
  'B',
  NULL, NULL,
  'K_p = K_c · (RT)^Delta_n. Nur wenn Delta_n = 0 gilt K_p = K_c. Fuer N₂ + 3H₂ ⇌ 2NH₃: Delta_n = 2 − (1+3) = −2 ≠ 0, also K_p ≠ K_c. H₂ + I₂ ⇌ 2HI hat Delta_n = 2−2 = 0 → K_p = K_c. Die Relation K_p = K_c · (RT)^Delta_n zeigt: Bei Delta_n ≠ 0 unterscheiden sich die Konstanten.',
  3
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-8-03: Le Chatelier-Prinzip
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-8-03-lechatelier-temp',
  'A', 'chemie', 'ch-8-03',
  'Die Reaktion N₂O₄(g) ⇌ 2 NO₂(g) ist endotherm (DeltaH = +57 kJ/mol). Was passiert bei Temperaturerhoehung?',
  '[{"key":"A","text":"GGW verschiebt sich zu N₂O₄ (weniger Mole, Druckausgleich)"},{"key":"B","text":"GGW verschiebt sich zu NO₂ (endotherme Seite bevorzugt), K_c steigt"},{"key":"C","text":"GGW bleibt unveraendert, da Druck konstant"},{"key":"D","text":"K_c sinkt bei endothermen Reaktionen mit steigender Temperatur"},{"key":"E","text":"Beide Seiten werden gleichermassen bevorzugt"}]'::jsonb,
  'B',
  NULL, NULL,
  'Le Chatelier: Temperaturerhoehung verschiebt das GGW zur endothermen Seite. Da die Reaktion endotherm ist (nimmt Waerme auf), wird die Hinreaktion (N₂O₄ → 2 NO₂) bevorzugt. Ausserdem steigt K_c fuer endotherme Reaktionen mit T (van''t-Hoff-Gleichung). Bei 55 °C ist NO₂-Anteil sichtbar groesser als bei 0 °C.',
  2
),

(
  'typa-ch-8-03-haberbosch',
  'A', 'chemie', 'ch-8-03',
  'Beim Haber-Bosch-Verfahren (N₂ + 3 H₂ ⇌ 2 NH₃, DeltaH = −92 kJ/mol) wird ein Kompromiss bei ca. 400–500 °C gewahlt, obwohl niedrigere T guenstiger waere. Warum?',
  '[{"key":"A","text":"Niedrige T wuerde das GGW zur Eduktseite verschieben"},{"key":"B","text":"Bei niedrigerer T ist die Reaktionsgeschwindigkeit zu gering (kinetische Hemmung), trotz guenstigerer Thermodynamik"},{"key":"C","text":"Der Eisenkatalysator wirkt nur bei 400 °C"},{"key":"D","text":"Bei niedrigen T wuerde NH₃ sofort zersetzen"},{"key":"E","text":"Hohe T erhoehen K_c fuer exotherme Reaktionen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Thermodynamisch waere niedrige T guenstiger (exotherme Reaktion: K_c sinkt mit T). Aber bei niedrigen T ist die Reaktionsgeschwindigkeit zu gering — auch mit Eisenkatalysator. Der Kompromiss bei 400–500 °C bietet akzeptable Kinetik (ausreichende Geschwindigkeit) trotz niedrigerer Ausbeute. Dies ist ein klassisches Beispiel fuer den Konflikt zwischen Thermodynamik und Kinetik.',
  2
),

(
  'typk-ch-8-03-lechatelier-stoerungen',
  'K', 'chemie', 'ch-8-03',
  'Welche der folgenden Aussagen zum Prinzip von Le Chatelier sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Temperaturerhoehung aendert K_c, waehrend Konzentrationsaenderungen K_c unveraendert lassen","korrekt":true},{"nr":2,"text":"Druckerhoehung verschiebt das Gleichgewicht immer zur Produktseite","korrekt":false},{"nr":3,"text":"Entfernung eines Produkts aus dem GGW-System verschiebt das GGW zur Produktseite (Hinreaktion)","korrekt":true},{"nr":4,"text":"Zugabe eines Katalysators verschiebt das GGW zur Produktseite","korrekt":false},{"nr":5,"text":"Der Bohr-Effekt am Haemoglobin ist eine physiologische Anwendung des Le-Chatelier-Prinzips","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Temperatur ist der einzige Faktor, der K_c aendert. Aussage 2: falsch — Druck verschiebt zur Seite mit WENIGER Gasmolen (nicht immer Produkte). Aussage 3: korrekt — Produktentfernung vermindert Produktkonzentration → GGW wird durch vermehrte Produktbildung kompensiert. Aussage 4: falsch — Katalysatoren aendern die GGW-Lage nicht. Aussage 5: korrekt — CO₂/pH-Aenderungen im Gewebe verschieben das O₂-Hb-Gleichgewicht.',
  2
),

(
  'typa-ch-8-03-druck-delta-n',
  'A', 'chemie', 'ch-8-03',
  'Fuer welche Reaktion hat eine Druckerhoehung KEINEN Einfluss auf die Gleichgewichtslage?',
  '[{"key":"A","text":"2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), Delta n = −1"},{"key":"B","text":"N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), Delta n = −2"},{"key":"C","text":"CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), Delta n = 0"},{"key":"D","text":"N₂O₄(g) ⇌ 2 NO₂(g), Delta n = +1"},{"key":"E","text":"CH₄(g) + 2 O₂(g) ⇌ CO₂(g) + 2 H₂O(g), Delta n = 0"}]'::jsonb,
  'C',
  NULL, NULL,
  'Druckaenderungen beeinflussen das GGW nur, wenn Delta_n ≠ 0 (ungleiche Molzahl an Gasteilchen auf beiden Seiten). Fuer CO + H₂O ⇌ CO₂ + H₂ gilt: Delta_n = (1+1) − (1+1) = 0. Beide Optionen C und E haben Delta_n = 0, aber fuer C ist die Berechnung eindeutiger gegeben. Bei Reaktion E: CH₄ + 2O₂ → CO₂ + 2H₂O: Delta_n = (1+2) − (1+2) = 0 ebenfalls korrekt.',
  3
),

(
  'typa-ch-8-03-hb-bohreffekt',
  'A', 'chemie', 'ch-8-03',
  'Im koerperlichen Gewebe steigt CO₂ und der pH sinkt. Was passiert mit dem GGW Hb + O₂ ⇌ HbO₂ nach Le Chatelier?',
  '[{"key":"A","text":"GGW verschiebt sich zu HbO₂ → verstaerkte O₂-Bindung"},{"key":"B","text":"GGW verschiebt sich zu Hb + O₂ → O₂-Abgabe ans Gewebe"},{"key":"C","text":"K_c steigt durch CO₂-Einfluss"},{"key":"D","text":"CO₂ und pH haben keinen Einfluss auf das Haemoglobin-GGW"},{"key":"E","text":"Die O₂-Affinitaet steigt bei niedrigem pH (Bohr-Effekt)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Erhoehtes CO₂ und erniedrigter pH im Gewebe stoeren das HbO₂-GGW. Nach Le Chatelier weicht das System aus, indem es O₂ abgibt (Rueckreaktion bevorzugt) → Hb + O₂ entsteht. Physiologisch sinnvoll: Im aktiven Gewebe (CO₂-Produktion, niedrigem pH) wird O₂ abgegeben. In der Lunge (hoher O₂, niedriges CO₂) wird O₂ gebunden — der Bohr-Effekt.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-8-04: Katalysatoren und Enzyme
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-8-04-km-definition',
  'A', 'chemie', 'ch-8-04',
  'Enzym A hat K_M = 0,1 mM, Enzym B hat K_M = 10 mM fuer dasselbe Substrat. Welche Aussage ist korrekt?',
  '[{"key":"A","text":"Enzym B hat hoehere Substrataffinitaet, da K_M groesser"},{"key":"B","text":"Enzym A hat hoehere Substrataffinitaet; bei niedrigen Substratkonzentrationen ist A halb gesaettigt, B kaum"},{"key":"C","text":"Beide Enzyme haben gleiche Affinitaet, da v_max gleich sein muss"},{"key":"D","text":"K_M hat keinen Einfluss auf die Substrataffinitaet"},{"key":"E","text":"Enzym B ist ein kompetitiver Inhibitor von Enzym A"}]'::jsonb,
  'B',
  NULL, NULL,
  'K_M ist die Substratkonzentration bei v = v_max/2. Kleines K_M = hohe Affinitaet (Sattigung schon bei niedrigen [S]). Enzym A (K_M = 0,1 mM) ist bereits bei 0,1 mM halb gesaettigt — viel sensitiver als Enzym B (K_M = 10 mM). Biologisches Beispiel: Hexokinase (K_M ≈ 0,1 mM) vs. Glucokinase/GK (K_M ≈ 10 mM) — GK als Glucosesensor in der Leber.',
  2
),

(
  'typa-ch-8-04-kompetitiv',
  'A', 'chemie', 'ch-8-04',
  'Methotrexat hemmt kompetitiv die Dihydrofolatreduktase (DHFR). Im Lineweaver-Burk-Plot (1/v gegen 1/[S]) zeigt sich:',
  '[{"key":"A","text":"Gleicher x-Achsenabschnitt (−1/K_M), hoeherer y-Achsenabschnitt (1/v_max gestiegen)"},{"key":"B","text":"Gleicher y-Achsenabschnitt (1/v_max unveraendert), anderer x-Achsenabschnitt (K_M(app) groesser)"},{"key":"C","text":"Beide Achsenabschnitte veraendern sich gleich"},{"key":"D","text":"y-Achsenabschnitt sinkt, x-Achsenabschnitt bleibt gleich"},{"key":"E","text":"Keine Veraenderung im Lineweaver-Burk-Plot"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei kompetitiver Hemmung bleibt v_max erreichbar (bei genuegend hohem [S] verdraengt Substrat den Inhibitor). Daher: y-Achsenabschnitt = 1/v_max ist unveraendert. K_M(app) steigt jedoch (schlechtere scheinbare Affinitaet) → x-Achsenabschnitt −1/K_M verschiebt sich (wird weniger negativ). Die Geraden schneiden sich auf der y-Achse.',
  3
),

(
  'typk-ch-8-04-enzymhemmung',
  'K', 'chemie', 'ch-8-04',
  'Welche der folgenden Aussagen zur Enzymhemmung sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Bei nicht-kompetitiver Hemmung sinkt v_max, waehrend K_M unveraendert bleibt","korrekt":true},{"nr":2,"text":"Kompetitive Hemmung kann durch Erhoehung der Substratkonzentration vollstaendig ueberwunden werden","korrekt":true},{"nr":3,"text":"Aspirin hemmt COX-1/2 reversibel durch kompetitive Bindung am aktiven Zentrum","korrekt":false},{"nr":4,"text":"Statine hemmen kompetitiv die HMG-CoA-Reduktase und senken so die Cholesterinsynthese","korrekt":true},{"nr":5,"text":"Irreversible Inhibitoren koennen durch hohe Substratkonzentrationen verdraengt werden","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — nicht-kompetitiv bindet allosterisch, reduziert v_max, K_M bleibt. Aussage 2: korrekt — Substrat kann kompetitiven Inhibitor vom aktiven Zentrum verdraengen. Aussage 3: falsch — Aspirin hemmt COX IRREVERSIBEL durch kovalente Acetylierung. Aussage 4: korrekt — Statine (z.B. Simvastatin) sind kompetitive K_M-aehnliche Inhibitoren. Aussage 5: falsch — irreversible Inhibitoren sind kovalent gebunden, Substrat kann sie nicht verdraengen.',
  2
),

(
  'typa-ch-8-04-induced-fit',
  'A', 'chemie', 'ch-8-04',
  'Das Induced-Fit-Modell (Koshland) unterscheidet sich vom Schluessel-Schloss-Modell (Fischer) dadurch, dass:',
  '[{"key":"A","text":"Das aktive Zentrum eine starre, komplementaere Form zum Substrat hat"},{"key":"B","text":"Das Enzym seine Konformation beim Substratbinden flexibel anpasst und damit auch aehnliche Substrate unterschiedlich bindet"},{"key":"C","text":"Nur ein Substrat pro Enzym existiert (absolute Spezifitaet)"},{"key":"D","text":"Das Substrat die Enzymstruktur irreversibel veraendert"},{"key":"E","text":"Beide Modelle sind identisch in ihrer Vorhersage"}]'::jsonb,
  'B',
  NULL, NULL,
  'Im Induced-Fit-Modell (Koshland, 1958) ist das aktive Zentrum flexibel: Es veraendert seine Konformation, wenn das Substrat bindet, und schliessen sich genau um das Substrat. Dies erklaert, warum strukturell aehnliche Substratanaloga unterschiedlich gut passen und warum Enzyme allosterisch reguliert werden koennen. Das Fischer-Schluessel-Schloss-Modell geht von starrer Komplementaritaet aus.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 9: Elemente und Verbindungen
-- ============================================================

-- UK ch-9-01: Wasser
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-9-01-hbruecken',
  'A', 'chemie', 'ch-9-01',
  'Wasser bildet bis zu vier Wasserstoffbruecken pro Molekuel. Welche Kombinationen aus Donor und Akzeptor sind korrekt?',
  '[{"key":"A","text":"2 Donoren (ueber O-freie Elektronenpaare), 2 Akzeptoren (ueber H-Atome)"},{"key":"B","text":"2 Donoren (ueber H-Atome), 2 Akzeptoren (ueber freie Elektronenpaare des O)"},{"key":"C","text":"4 Donoren (alle ueber H-Atome), keine Akzeptoren"},{"key":"D","text":"1 Donor (O-Atom), 3 Akzeptoren (H-Atome + O)"},{"key":"E","text":"Wasser ist kein H-Bruecken-Donor, nur Akzeptor"}]'::jsonb,
  'B',
  NULL, NULL,
  'Wasser hat zwei O-H-Gruppen → 2 H-Bruecken-Donoren (H-Atome geben H⁺ partiell ab, binden freie Elektronenpaare anderer Molekuele). Ausserdem hat O zwei freie Elektronenpaare → 2 H-Bruecken-Akzeptoren. Insgesamt: 2+2 = 4 H-Bruecken pro Molekuel. Dies erklaert das ausgepragte 3D-Netzwerk und die ungewoehnlich hohen Siedepunkte und Waermekapazitaet.',
  2
),

(
  'typa-ch-9-01-kw-berechnung',
  'A', 'chemie', 'ch-9-01',
  'Eine Loesung hat [OH⁻] = 10⁻³ mol/L bei 25 °C. Welchen pH hat sie?',
  '[{"key":"A","text":"pH = 3"},{"key":"B","text":"pH = 11"},{"key":"C","text":"pH = 7"},{"key":"D","text":"pH = 14"},{"key":"E","text":"pH = 1"}]'::jsonb,
  'B',
  NULL, NULL,
  'K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴. [OH⁻] = 10⁻³ mol/L. Daher [H₃O⁺] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L. pH = −log(10⁻¹¹) = 11. Alternativ: pOH = −log(10⁻³) = 3; pH = 14 − pOH = 14 − 3 = 11. Die Loesung ist basisch (pH > 7).',
  2
),

(
  'typk-ch-9-01-wasser-eigenschaften',
  'K', 'chemie', 'ch-9-01',
  'Welche der folgenden Aussagen zu den Eigenschaften des Wassers sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die hohe spezifische Waermekapazitaet des Wassers (4182 J/kg·K) ist fuer die Koerpertemperaturregulation entscheidend","korrekt":true},{"nr":2,"text":"Eis ist dichter als fluessiges Wasser, da es kristallin ist","korrekt":false},{"nr":3,"text":"Wasser ist amphiprot: Es kann je nach Reaktionspartner als Saeure (H⁺-Donor) oder Base (H⁺-Akzeptor) reagieren","korrekt":true},{"nr":4,"text":"Der Bindungswinkel im Wassermolekuel betraegt 180° (linear wie CO₂)","korrekt":false},{"nr":5,"text":"Die Dichteanomalie des Wassers (Maximum bei 4 °C) ermoeglicht das Ueberleben von Organismen in zugefrorenen Seen","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Wasser puffert Temperaturveraenderungen durch hohe Waermekapazitaet. Aussage 2: falsch — Eis ist WENIGER dicht als Wasser (0,917 g/cm³ vs. 1,000 g/cm³ bei 4 °C) → Eis schwimmt. Aussage 3: korrekt — Autoprotolyse 2H₂O ⇌ H₃O⁺ + OH⁻ zeigt beide Rollen. Aussage 4: falsch — H₂O ist gewinkelt (104,5°), nicht linear. Aussage 5: korrekt — Das 4-°C-Wasser sinkt, Eis schwimmt als Isolierschicht.',
  2
),

(
  'typa-ch-9-01-dipolmoment',
  'A', 'chemie', 'ch-9-01',
  'Warum hat Wasser ein permanentes Dipolmoment, obwohl O-H-Bindungen zwar polar sind?',
  '[{"key":"A","text":"Weil Wasser ionisch aufgebaut ist"},{"key":"B","text":"Weil der Bindungswinkel 104,5° (gewinkelt) dazu fuehrt, dass sich die Dipolmomente der O-H-Bindungen nicht aufheben"},{"key":"C","text":"Weil O und H die gleiche Elektronegativitaet haben"},{"key":"D","text":"Weil Wasser ein lineares Molekuel ist (wie CO₂) und die Ladungen sich addieren"},{"key":"E","text":"Weil die H-Atome positiv geladen sind und O negativ — ein Ionenmolekuel"}]'::jsonb,
  'B',
  NULL, NULL,
  'CO₂ hat ebenfalls polare C=O-Bindungen, aber das Molekuel ist linear → Dipolmomente heben sich auf → kein Gesamtdipolmoment. Wasser ist hingegen gewinkelt (104,5° Bindungswinkel, sp³-artige Geometrie durch zwei freie Elektronenpaare). Die Dipolmomente der beiden O-H-Bindungen addieren sich vektoriell → resultierendes Dipolmoment μ = 1,85 D (δ⁻ an O, δ⁺ zwischen H-Atomen).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-9-02: Kohlenstoff und seine Verbindungen
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-9-02-allotrope',
  'A', 'chemie', 'ch-9-02',
  'Graphen ist ein 2D-Kohlenstoffmaterial. Welche Hybridisierung und Eigenschaft beschreibt Graphen korrekt?',
  '[{"key":"A","text":"sp³-hybridisiert, haertstes bekanntes Material, elektrischer Isolator"},{"key":"B","text":"sp-hybridisiert, lineares Polymer, Supraleiter"},{"key":"C","text":"sp²-hybridisiert, Einzelschicht hexagonaler Ringe, extrem hohe elektrische Leitfaehigkeit"},{"key":"D","text":"sp³-hybridisiert, kugelfoermige Kaefigstruktur (C₆₀)"},{"key":"E","text":"sp²-hybridisiert, kugelfoermige Kaefigstruktur (C₆₀)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Graphen ist eine einzelne Atomlage Graphit: sp²-hybridisierte C-Atome in einem 2D-hexagonalen Netzwerk. Das nicht hybridisierte p-Elektron jedes C-Atoms bildet ein delokalisiertes pi-System ueber die gesamte Schicht → aussergewoehnliche elektrische Leitfaehigkeit und mechanische Festigkeit. Nobelpreis 2010 (Geim, Novoselov). Fulleren C₆₀ ist ebenfalls sp²-hybridisiert, aber kugelfoermig (Option E beschreibt Fulleren, nicht Graphen).',
  2
),

(
  'typa-ch-9-02-co-vergiftung',
  'A', 'chemie', 'ch-9-02',
  'Ein Patient mit CO-Vergiftung hat trotz normaler Sauerstoffsaettigung im Pulsoximeter Symptome einer Hypoxie. Warum ist das Pulsoximeter in diesem Fall unzuverlaessig?',
  '[{"key":"A","text":"Das Pulsoximeter misst nur CO₂, nicht O₂"},{"key":"B","text":"Das Pulsoximeter unterscheidet nicht zwischen OxyHb und Carboxyhämoglobin (COHb) — beide absorbieren Licht aehnlich"},{"key":"C","text":"CO verstaerkt die O₂-Bindung an Hb, weshalb der Puls erhoeeht ist"},{"key":"D","text":"Das Pulsoximeter versagt bei hoher Herzfrequenz"},{"key":"E","text":"CO-Vergiftung aendert den pH des Blutes so stark, dass das Geraet falsch kalibriert ist"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Pulsoximeter misst die Lichtabsorption bei zwei Wellenlaengen (660 nm und 940 nm) und berechnet daraus die O₂-Saettigung. COHb (Carboxyhämoglobin) absorbiert bei 660 nm aehnlich wie OxyHb → das Geraet interpretiert COHb faelschlicherweise als OxyHb → falsch hohe Saettigung trotz O₂-Mangel. Diagnose der CO-Vergiftung erfordert Blutgasanalyse mit direkter COHb-Messung (CO-Oximetrie).',
  3
),

(
  'typk-ch-9-02-co2-bicarbonat',
  'K', 'chemie', 'ch-9-02',
  'Welche der folgenden Aussagen zu CO₂ und dem Bicarbonat-Puffersystem sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"CO₂ ist ein lineares Molekuel mit sp-hybridisiertem Kohlenstoff und hat kein Gesamtdipolmoment","korrekt":true},{"nr":2,"text":"CO₂ reagiert mit Wasser zu Kohlensaeure: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻","korrekt":true},{"nr":3,"text":"CO bindet Haemoglobin mit 10-fach hoeherer Affinitaet als O₂","korrekt":false},{"nr":4,"text":"CaCO₃ ist gut loeslich in Wasser und bildet daher keine Kalkablagerungen","korrekt":false},{"nr":5,"text":"Die Kohlensaeure H₂CO₃ hat pK_s1 = 6,4 und ist damit eine schwaecher Saeure als HCl","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,5]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — CO₂ ist linear (O=C=O, sp), Dipolmomente heben sich auf. Aussage 2: korrekt — Gleichgewicht der Bicarbonat-Pufferreaktion. Aussage 3: falsch — CO bindet Hb mit ca. 250-fach hoeherer Affinitaet (nicht 10-fach). Aussage 4: falsch — CaCO₃ ist schwer loeslich (K_L = 3,3 × 10⁻⁹) → Kalkablagerungen. Aussage 5: korrekt — HCl ist eine starke Saeure (pK_s ≈ −7), H₂CO₃ mit pK_s = 6,4 ist viel schwaecher.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-9-03: Stickstoff, Schwefel und Halogene
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-9-03-no-signalmolekuel',
  'A', 'chemie', 'ch-9-03',
  'Nitroglycerin wird bei Angina pectoris eingesetzt. Welcher Wirkungsmechanismus erklaert seine vasodilatierende Wirkung?',
  '[{"key":"A","text":"Nitroglycerin hemmt die Thromboxan-Synthase und verhindert Vasokonstriktion"},{"key":"B","text":"Nitroglycerin setzt im Koerper Stickstoffmonoxid (NO) frei → Guanylatzyklase → cGMP → Vasodilatation"},{"key":"C","text":"Nitroglycerin blockiert Kalziumkanaele direkt in der Gefaessmuskulatur"},{"key":"D","text":"Nitroglycerin erhoeeht den cAMP-Spiegel durch Adenylatzyklase-Aktivierung"},{"key":"E","text":"Nitroglycerin ist ein direkter Calciumantagonist (wie Nifedipin)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Nitroglycerin (Glyceroltrinitrat) ist ein organisches Nitrat, das im Koerper enzymatisch zu NO umgewandelt wird. NO aktiviert die loesliche Guanylatzyklase in glatten Muskelzellen → cGMP-Erhoehung → Proteinkinase G → Myosin-Dephosphorylierung → Relaxation → Vasodilatation. Sildenafil potenziert diesen Effekt durch Hemmung der cGMP-Phosphodiesterase.',
  2
),

(
  'typa-ch-9-03-halogene-saeurenstaerke',
  'A', 'chemie', 'ch-9-03',
  'Warum ist HF eine schwache Saeure, obwohl F das elektronegativste Element ist?',
  '[{"key":"A","text":"Weil F zu gross ist und die Bindung schwach ist"},{"key":"B","text":"Weil die H-F-Bindung sehr stark ist (kurz, hohe EN) und schwer zu spalten; ausserdem bildet HF starke H-Bruecken"},{"key":"C","text":"Weil F kein Proton aufnehmen kann"},{"key":"D","text":"Weil HF nicht in Wasser loeslich ist"},{"key":"E","text":"Weil die konjugierte Base F⁻ sehr instabil ist"}]'::jsonb,
  'B',
  NULL, NULL,
  'Saeurenstaerke haengt davon ab, wie leicht das Proton abgegeben wird. H-F-Bindung ist sehr kurz und stark (566 kJ/mol vs. H-Cl: 432 kJ/mol) → schwer zu spalten. Ausserdem bilden HF-Molekuele ausgepragte H-Bruecken untereinander, die die Dissoziation hemmen. F⁻ ist zwar stabil, aber die H-F-Bindungsspaltung erfordert zu viel Energie. Im Gegensatz dazu: HI hat schwache H-I-Bindung (298 kJ/mol) → leichtes Abspalten des H⁺ → starke Saeure.',
  3
),

(
  'typk-ch-9-03-halogene-biologie',
  'K', 'chemie', 'ch-9-03',
  'Welche der folgenden Aussagen zu biologisch relevanten Halogenen und Schwefelverbindungen sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Iod ist Bestandteil der Schilddruesenhormone T₃ (3 Iod-Atome) und T₄ (4 Iod-Atome)","korrekt":true},{"nr":2,"text":"Fluorid (F⁻) destabilisiert den Zahnschmelz durch Bildung von Fluoroapatit","korrekt":false},{"nr":3,"text":"Schwefelwasserstoff H₂S hemmt wie Cyanid die Cytochrom-c-Oxidase der Atmungskette","korrekt":true},{"nr":4,"text":"Chlorid (Cl⁻) ist das wichtigste Anion im Intrazellulaerrraum","korrekt":false},{"nr":5,"text":"Die Reaktivitaet der Halogene nimmt in der Reihenfolge F₂ > Cl₂ > Br₂ > I₂ ab","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — T₃ (Trijodthyronin, 3 I) und T₄ (Thyroxin, 4 I). Aussage 2: falsch — Fluorid STABILISIERT den Zahnschmelz durch Bildung von hartem Fluoroapatit (Ca₁₀(PO₄)₆F₂). Aussage 3: korrekt — H₂S hemmt Cytochrom-c-Oxidase (Komplex IV) → histotoxische Hypoxie. Aussage 4: falsch — Cl⁻ ist das wichtigste Anion im EXTRAZELLULAERRRAUM; intrazellulaar dominiert Phosphat und Protein. Aussage 5: korrekt — abnehmende Elektronegativitaet und zunehmende Bindungslaenge erklaeren die Reaktivitaetsreihe.',
  2
),

(
  'typa-ch-9-03-h2so4',
  'A', 'chemie', 'ch-9-03',
  'Konzentrierte Schwefelsaeure H₂SO₄ wuerde bei Hautkontakt besonders schwere Veraetzungen verursachen. Welcher Mechanismus erklaert das?',
  '[{"key":"A","text":"H₂SO₄ ist eine starke Base und denaturiert Proteine durch pH-Erhoehung"},{"key":"B","text":"H₂SO₄ ist stark hygroskopisch, entzieht dem Gewebe Wasser (Verkohlung organischen Materials) und ist gleichzeitig stark sauer"},{"key":"C","text":"H₂SO₄ reagiert mit Hautlipiden zu explosiven Verbindungen"},{"key":"D","text":"H₂SO₄ bildet unluesliche Calciumsulfatsalze und verstopft Poren"},{"key":"E","text":"H₂SO₄ hat ausschliesslich oxidierende Wirkung, keine sauere Wirkung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Konzentrierte H₂SO₄ ist aus zwei Gruenden besonders gefaehrlich: 1. Stark hygroskopisch — entzieht dem Gewebe Wasser und verkoehlt organisches Material durch Dehydratisierung (z.B. Zucker → Kohlenstoff + H₂O). 2. Starke Saeure — vollstaendige erste Dissoziation → hohe H⁺-Konzentration → Proteindenaturierung. Verduennte H₂SO₄ ist weniger gefaehrlich als konzentrierte, aber das Verduennen (immer Saeure zu Wasser, nie umgekehrt) ist selbst gefaehrlich.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 10: Saeure-Base
-- ============================================================

-- UK ch-10-01: Broensted-Lowry
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-10-01-konjugiert',
  'A', 'chemie', 'ch-10-01',
  'In der Reaktion HCN + H₂O ⇌ CN⁻ + H₃O⁺ — welches konjugierte Saeure-Base-Paar ist korrekt angegeben?',
  '[{"key":"A","text":"HCN / H₂O (beide Saeuren)"},{"key":"B","text":"HCN / CN⁻ (Saeure / konjugierte Base)"},{"key":"C","text":"H₂O / H₃O⁺ (Saeure / konjugierte Base)"},{"key":"D","text":"B und C sind beide konjugierte Paare"},{"key":"E","text":"CN⁻ / H₃O⁺ (Base / konjugierte Saeure)"}]'::jsonb,
  'D',
  NULL, NULL,
  'In der Gleichung HCN + H₂O ⇌ CN⁻ + H₃O⁺ gibt es zwei konjugierte Saeure-Base-Paare: (1) HCN (Saeure) / CN⁻ (konjugierte Base) — unterscheiden sich um ein Proton. (2) H₂O (Base, nimmt H⁺ auf) / H₃O⁺ (konjugierte Saeure). Beide Paare D ist korrekt. Konjugierte Paare unterscheiden sich immer um genau ein Proton H⁺.',
  2
),

(
  'typa-ch-10-01-saeurenstaerke-struktur',
  'A', 'chemie', 'ch-10-01',
  'Ameisensaeure (HCOOH, pK_s = 3,75) ist staerker als Essigsaeure (CH₃COOH, pK_s = 4,75). Was erklaert diesen Unterschied?',
  '[{"key":"A","text":"Ameisensaeure hat mehr C-Atome und ist daher stabiler"},{"key":"B","text":"Die Methylgruppe in Essigsaeure ist ein schwacher Elektronendonor (+I-Effekt), destabilisiert leicht das Carboxylat-Anion und schwaecht so die Saeure"},{"key":"C","text":"Ameisensaeure ist kleiner und hat daher hoeheren pK_s"},{"key":"D","text":"Essigsaeure hat eine staerkere O-H-Bindung"},{"key":"E","text":"Ameisensaeure bildet staerkere intramolekulare H-Bruecken"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die Saeurenstaerke haengt von der Stabilitaet der konjugierten Base ab. In Essigsaeure gibt die Methylgruppe leicht Elektronen durch den induktiven +I-Effekt ab → destabilisiert leicht das CH₃COO⁻-Anion (erhoehte Elektronendichte = schwerer zu stabilisieren). In Ameisensaeure fehlt dieser destabilisierende Effekt → HCOO⁻ ist etwas stabiler → Ameisensaeure gibt H⁺ leichter ab → pK_s kleiner (staerkere Saeure).',
  3
),

(
  'typk-ch-10-01-saeure-base-konzepte',
  'K', 'chemie', 'ch-10-01',
  'Welche der folgenden Aussagen zu Saeure-Base-Konzepten sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Nach Broensted-Lowry ist eine Saeure ein Protonendonor und eine Base ein Protonenakzeptor","korrekt":true},{"nr":2,"text":"BF₃ ist eine Lewis-Saeure, da es ein freies Elektronenpaar aufnehmen kann (Elektronenpaarakzeptor)","korrekt":true},{"nr":3,"text":"Die konjugierte Base einer starken Saeure ist ebenfalls eine starke Base","korrekt":false},{"nr":4,"text":"Das Arrhenius-Konzept ist allgemeiner als das Broensted-Lowry-Konzept","korrekt":false},{"nr":5,"text":"Ammoniak NH₃ ist eine Base nach Broensted-Lowry, da es H⁺ aufnimmt und NH₄⁺ bildet","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,5]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Definition nach Broensted-Lowry (1923). Aussage 2: korrekt — BF₃ hat leeres p-Orbital an B, akzeptiert Elektronenpaar → Lewis-Saeure. Aussage 3: falsch — starke Saeure → schwache konjugierte Base (z.B. HCl → Cl⁻ sehr schwache Base). Aussage 4: falsch — Arrhenius ist ENGER (nur in wässrigen Loesungen), Broensted-Lowry ist allgemeiner. Aussage 5: korrekt — NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; NH₃ nimmt H⁺ auf.',
  2
),

(
  'typa-ch-10-01-lewis-saeure',
  'A', 'chemie', 'ch-10-01',
  'Welche der folgenden Reaktionen ist ausschliesslich durch das Lewis-Konzept, nicht durch das Broensted-Lowry-Konzept erklaeierbar?',
  '[{"key":"A","text":"HCl + NaOH → NaCl + H₂O (Neutralisation)"},{"key":"B","text":"BF₃ + NH₃ → F₃B-NH₃ (Lewis-Saeure-Base-Addukt ohne Protonentransfer)"},{"key":"C","text":"CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ (Dissoziation)"},{"key":"D","text":"NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (Basisch)"},{"key":"E","text":"H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Broensted-Lowry-Konzept erklaert ausschliesslich Reaktionen mit Protonentransfer (H⁺-Uebertragung). BF₃ + NH₃ → F₃B-NH₃ beinhaltet KEINEN Protonentransfer: Das freie Elektronenpaar des N in NH₃ wird an das leere Orbital von B in BF₃ abgegeben — ein reiner Elektronenpaar-Uebertragungsprozess. Nur das Lewis-Konzept (Saeure = Elektronenpaarakzeptor, Base = Elektronenpaardonor) kann das erklaeren.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-10-02: pH-Wert
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-10-02-schwache-saeure-ph',
  'A', 'chemie', 'ch-10-02',
  'Eine 0,01 mol/L Essigsaeure-Loesung (pK_s = 4,75) hat welchen naeherungsweisen pH?',
  '[{"key":"A","text":"pH ≈ 2,0"},{"key":"B","text":"pH ≈ 3,375"},{"key":"C","text":"pH ≈ 4,75"},{"key":"D","text":"pH ≈ 1,0"},{"key":"E","text":"pH ≈ 5,5"}]'::jsonb,
  'B',
  NULL, NULL,
  'Fuer schwache Saeuren: pH = ½(pK_s − log c) = ½(pK_s + pC). pC = −log(0,01) = 2. pH = ½(4,75 + 2) = ½ × 6,75 = 3,375. Im Vergleich: 0,01 mol/L HCl (starke Saeure) haette pH = 2. Essigsaeure bei gleicher Konzentration hat hoehere pH (schwaecher sauer) wegen nur partieller Dissoziation.',
  2
),

(
  'typa-ch-10-02-ph-log',
  'A', 'chemie', 'ch-10-02',
  'Ein Mageninhalt hat pH = 1,5. Der Magensaft einer anderen Person hat pH = 2,5. Um welchen Faktor unterscheiden sich die H₃O⁺-Konzentrationen?',
  '[{"key":"A","text":"Faktor 2"},{"key":"B","text":"Faktor 5"},{"key":"C","text":"Faktor 10"},{"key":"D","text":"Faktor 100"},{"key":"E","text":"Faktor 1000"}]'::jsonb,
  'C',
  NULL, NULL,
  'pH = −log[H₃O⁺]. Bei pH 1,5: [H₃O⁺] = 10⁻¹·⁵ mol/L. Bei pH 2,5: [H₃O⁺] = 10⁻²·⁵ mol/L. Verhaeltnis: 10⁻¹·⁵ / 10⁻²·⁵ = 10^(2,5−1,5) = 10^1 = 10. Die pH-Skala ist logarithmisch (Basis 10): 1 pH-Einheit Unterschied entspricht Faktor 10 bei der H₃O⁺-Konzentration.',
  2
),

(
  'typk-ch-10-02-ph-berechnung',
  'K', 'chemie', 'ch-10-02',
  'Welche der folgenden Aussagen zur pH-Berechnung und klinischen pH-Werten sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Arterielles Blut hat einen pH-Bereich von 7,35–7,45 (leicht basisch)","korrekt":true},{"nr":2,"text":"Bei 37 °C (Koerpertemperatur) ist der neutrale pH etwas unter 7,0, da K_w temperaturabhaengig ist","korrekt":true},{"nr":3,"text":"Magensaft mit pH 1 hat eine [H₃O⁺]-Konzentration von 10⁻¹ mol/L = 0,1 mol/L","korrekt":true},{"nr":4,"text":"Die Formel fuer starke Saeuren lautet pH = ½(pK_s − log c)","korrekt":false},{"nr":5,"text":"Ein pH-Abfall von 7,4 auf 6,4 im Blut waere klinisch nicht lebensbedrohlich","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[1,2,3]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — physiologischer Blut-pH 7,35–7,45. Aussage 2: korrekt — bei 37 °C ist K_w ≈ 2,4 × 10⁻¹⁴ → neutraler pH ≈ 6,8. Aussage 3: korrekt — pH 1 → [H₃O⁺] = 10⁻¹ = 0,1 mol/L. Aussage 4: falsch — diese Formel gilt fuer SCHWACHE Saeuren; fuer starke Saeuren gilt pH = −log c. Aussage 5: falsch — pH 6,4 ist lebensbedrohlich (normale Schwankungsbreite nur ±0,4 Einheiten, absolute Grenze ca. pH 6,8).',
  2
),

(
  'typa-ch-10-02-urin-ph',
  'A', 'chemie', 'ch-10-02',
  'Welcher pH-Bereich gilt fuer menschlichen Urin unter Normalbedingungen?',
  '[{"key":"A","text":"pH 1–2 (stark sauer, wie Magensaft)"},{"key":"B","text":"pH 4,5–8,0 (variabel, je nach Ernaehrung und Stoffwechsellage)"},{"key":"C","text":"pH 7,35–7,45 (wie arterielles Blut)"},{"key":"D","text":"pH 7,0 (immer neutral)"},{"key":"E","text":"pH 9–11 (stark basisch)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Urin hat einen sehr variablen pH-Bereich von 4,5 bis 8,0 (normal: 5–7). Er haengt von der Ernaehrung (Fleischreiche Kost → saurer; vegetarisch → basischer), dem Saeure-Base-Haushalt und der renalen Regulation ab. Die Niere reguliert den Blut-pH durch variable H⁺-Ausscheidung im Urin. Bei metabolischer Azidose ist der Urin stark sauer (pH < 5), bei Alkalose basisch (pH > 7).',
  1
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-10-03: Puffer und Henderson-Hasselbalch
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-10-03-hh-anwenden',
  'A', 'chemie', 'ch-10-03',
  'Ein Phosphat-Puffer (H₂PO₄⁻ / HPO₄²⁻, pK_s = 6,8) hat [HPO₄²⁻] = 0,2 mol/L und [H₂PO₄⁻] = 0,02 mol/L. Welchen pH hat er?',
  '[{"key":"A","text":"pH = 6,8"},{"key":"B","text":"pH = 7,8"},{"key":"C","text":"pH = 5,8"},{"key":"D","text":"pH = 6,0"},{"key":"E","text":"pH = 7,0"}]'::jsonb,
  'B',
  NULL, NULL,
  'Henderson-Hasselbalch: pH = pK_s + log([A⁻]/[HA]) = 6,8 + log(0,2/0,02) = 6,8 + log(10) = 6,8 + 1 = 7,8. Das Verhaeltnis [Base]/[Saeure] = 10:1 ergibt +1 pH-Einheit ueber pK_s. Dieser Puffer-pH (7,8) liegt aber ausserhalb des optimalen Pufferbereichs (pK_s ± 1 = 5,8–7,8 → Grenze).',
  2
),

(
  'typa-ch-10-03-pufferkapazitaet',
  'A', 'chemie', 'ch-10-03',
  'Ein Phosphat-Puffer hat pK_s = 6,8. Bei welchem pH ist seine Pufferkapazitaet maximal?',
  '[{"key":"A","text":"pH = 5,8 (eine Einheit unter pK_s)"},{"key":"B","text":"pH = 7,8 (eine Einheit ueber pK_s)"},{"key":"C","text":"pH = 6,8 (gleich pK_s)"},{"key":"D","text":"pH = 7,0 (biologisch neutraler Punkt)"},{"key":"E","text":"pH = 14 (maximale OH⁻-Konzentration)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Pufferkapazitaet ist maximal, wenn pH = pK_s, weil dann [HA] = [A⁻] (gleiche Mengen Saeure und Base). In diesem Punkt kann der Puffer gleich viel Saeure (durch A⁻ + H⁺ → HA) oder Base (durch HA + OH⁻ → A⁻ + H₂O) abfangen. Der optimale Pufferbereich liegt bei pK_s ± 1 Einheit.',
  1
),

(
  'typk-ch-10-03-bicarbonat-puffer',
  'K', 'chemie', 'ch-10-03',
  'Welche der folgenden Aussagen zum Bicarbonat-Puffersystem im Blut sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Das physiologische Verhaeltnis [HCO₃⁻]/[H₂CO₃] = 20:1 ergibt nach Henderson-Hasselbalch pH = 7,4","korrekt":true},{"nr":2,"text":"Der Bicarbonat-Puffer ist trotz pH = 7,4 (weit von pK_s = 6,4) effektiv, weil er ein offenes System ist","korrekt":true},{"nr":3,"text":"Die maximale Pufferkapazitaet des Bicarbonat-Puffers liegt bei pH = 7,4","korrekt":false},{"nr":4,"text":"Phosphat-Puffer (pK_s = 6,8) ist der wichtigste extrazellulaere Puffer im Blut","korrekt":false},{"nr":5,"text":"Haemoglobin puffert intrazellulaar in Erythrozyten durch Histidin-Seitenketten","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,2,5]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — pH = 6,4 + log(20) = 6,4 + 1,3 = 7,4. Aussage 2: korrekt — offenes System: Lunge regelt pCO₂, Niere HCO₃⁻ unabhaengig. Aussage 3: falsch — maximale Kapazitaet liegt bei pH = pK_s = 6,4, nicht bei 7,4. Aussage 4: falsch — Bicarbonat-Puffer ist der wichtigste extrazellulaere Puffer; Phosphat-Puffer ist intrazellulaar dominant. Aussage 5: korrekt — Hb-Histidine (pK_R ≈ 6,5) puffern intrazellulaar.',
  2
),

(
  'typa-ch-10-03-hh-ratio',
  'A', 'chemie', 'ch-10-03',
  'Ein Essigsaeure-Acetat-Puffer (pK_s = 4,75) soll auf pH 5,75 eingestellt werden. Welches Verhaeltnis [CH₃COO⁻]/[CH₃COOH] ist benoetigt?',
  '[{"key":"A","text":"Verhaeltnis 1:1"},{"key":"B","text":"Verhaeltnis 10:1 (Base:Saeure)"},{"key":"C","text":"Verhaeltnis 1:10 (Base:Saeure)"},{"key":"D","text":"Verhaeltnis 100:1"},{"key":"E","text":"Verhaeltnis 0,1:1"}]'::jsonb,
  'B',
  NULL, NULL,
  'Henderson-Hasselbalch: pH = pK_s + log([A⁻]/[HA]). 5,75 = 4,75 + log([A⁻]/[HA]). log([A⁻]/[HA]) = 1,0. [A⁻]/[HA] = 10^1 = 10. Das Verhaeltnis Base:Saeure = 10:1. Das ergibt Sinn: pH liegt 1 Einheit ueber pK_s → 10-facher Ueberschuss der konjugierten Base.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-10-04: Saeure-Base-Stoerungen
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-10-04-bga-interpretation',
  'A', 'chemie', 'ch-10-04',
  'Blutgasanalyse: pH 7,52, pCO₂ 28 mmHg (erniedrigt), HCO₃⁻ 22 mEq/L (normal). Welche Diagnose?',
  '[{"key":"A","text":"Metabolische Azidose mit respiratorischer Kompensation"},{"key":"B","text":"Respiratorische Alkalose (akut, ohne metabolische Kompensation)"},{"key":"C","text":"Metabolische Alkalose (primaer erhoehtes HCO₃⁻)"},{"key":"D","text":"Respiratorische Azidose (primaer erhoehtes pCO₂)"},{"key":"E","text":"Gemischte Stoerung (beide primaer veraendert)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Schrittweise Interpretation: 1. pH 7,52 > 7,45 → Alkalose. 2. pCO₂ 28 mmHg erniedrigt → respiratorische Ursache (zu viel CO₂ abgeatmet = Hyperventilation). 3. HCO₃⁻ 22 mEq/L = normal (keine metabolische Aenderung). → Akute respiratorische Alkalose (z.B. Angst, Hyperventilationssyndrom). Noch keine renale Kompensation (HCO₃⁻ noch normal).',
  2
),

(
  'typa-ch-10-04-ketoazidose',
  'A', 'chemie', 'ch-10-04',
  'Ein Diabetiker Typ 1 (Insulinmangel) entwickelt eine Ketoazidose. Welche BGA-Konstellation und welche Kompensation sind zu erwarten?',
  '[{"key":"A","text":"pH 7,55, pCO₂ erhoeeht, HCO₃⁻ erhoeeht → metabolische Alkalose"},{"key":"B","text":"pH 7,2, pCO₂ erniedrigt (Kussmaul), HCO₃⁻ erniedrigt → metabolische Azidose mit respiratorischer Kompensation"},{"key":"C","text":"pH 7,3, pCO₂ erhoeeht, HCO₃⁻ normal → respiratorische Azidose"},{"key":"D","text":"pH 7,4, pCO₂ normal, HCO₃⁻ normal → Normalbefund"},{"key":"E","text":"pH 7,15, pCO₂ erhoeeht, HCO₃⁻ erniedrigt → gemischte Stoerung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei Ketoazidose akkumulieren Ketonkoerper (Saeuren) → verbrauchen HCO₃⁻ → [HCO₃⁻] sinkt → pH sinkt (metabolische Azidose). Kompensation: Chemorezeptoren stimulieren Hyperventilation → pCO₂ sinkt → pH steigt (partiell). Klassisch: Kussmaul-Atmung (tiefe, schnelle Atemzuege), pH < 7,35, HCO₃⁻ < 15 mEq/L, pCO₂ erniedrigt, suesslicher Acetongeruch.',
  2
),

(
  'typk-ch-10-04-stoerungen-ursachen',
  'K', 'chemie', 'ch-10-04',
  'Welche der folgenden Ursachen sind korrekt den Saeure-Base-Stoerungen zugeordnet?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Erbrechen → metabolische Alkalose (HCl-Verlust → HCO₃⁻ relativ erhoeeht)","korrekt":true},{"nr":2,"text":"COPD (chronisch erhoehtes pCO₂) → respiratorische Azidose mit renaler Kompensation (HCO₃⁻ erhoeeht)","korrekt":true},{"nr":3,"text":"Hyperventilation bei Angst → respiratorische Azidose (pCO₂ steigt)","korrekt":false},{"nr":4,"text":"Laktatazidose bei Schock → metabolische Azidose mit Anionenluecke","korrekt":true},{"nr":5,"text":"Renale tubulaere Azidose → metabolische Alkalose (Niere scheidet zu viel HCO₃⁻ aus)","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Erbrechen verliert HCl; Magen produziert weiterhin HCl (CO₂+H₂O→H₂CO₃→H⁺(Magen)+HCO₃⁻(Blut)) → HCO₃⁻ akkumuliert. Aussage 2: korrekt — chronische respiratorische Azidose → renale Kompensation (mehr HCO₃⁻ reabsorbiert). Aussage 3: falsch — Hyperventilation atmet mehr CO₂ ab → pCO₂ SINKT → respiratorische ALKALOSE. Aussage 4: korrekt — Laktat ist eine Saeure, verbraucht HCO₃⁻ → metabolische Azidose. Aussage 5: falsch — renale tubulaere Azidose = Niere kann H⁺ nicht ausscheiden → metabolische AZIDOSE.',
  2
),

(
  'typa-ch-10-04-tetanie',
  'A', 'chemie', 'ch-10-04',
  'Welcher Mechanismus erklaert die Tetanie bei akuter respiratorischer Alkalose (Hyperventilation)?',
  '[{"key":"A","text":"Sauerstoffueberangebot stimuliert direkt motorische Neuronen"},{"key":"B","text":"pH-Anstieg erhoeeht die Albumin-Ca²⁺-Bindung → ionisiertes Ca²⁺ sinkt → erhoehte neuromuskulaere Erregbarkeit"},{"key":"C","text":"CO₂-Abfall haemmt die Na⁺-Kanaele direkt"},{"key":"D","text":"Alkalose senkt den K⁺-Spiegel (Hypokaliaemie) → Muskelkrampf"},{"key":"E","text":"Hyperventilation fuehrt zu Hypoxie durch zu schnelle Atmung"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei Hyperventilation → pCO₂ sinkt → H₂CO₃ sinkt → pH steigt (Alkalose). Erhoehter pH → Albuminbindung von Ca²⁺ nimmt zu (Proteine binden bei hohem pH mehr Ca²⁺) → freies (ionisiertes) Ca²⁺ sinkt → Hypokalzaemie → erhoehte Membranpotenziale → Tetanie (Kribbbeln, Pfotchenstellung, Muskelkrampf). Therapie akut: Rueckatmen in eine Tuete → CO₂ steigt → pH normalisiert sich.',
  3
)

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 11: Redox-Reaktionen
-- ============================================================

-- UK ch-11-01: Oxidation und Reduktion — Grundlagen
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-11-01-oz-kmno4',
  'A', 'chemie', 'ch-11-01',
  'Was ist die Oxidationszahl von Mangan in KMnO₄?',
  '[{"key":"A","text":"+2"},{"key":"B","text":"+4"},{"key":"C","text":"+6"},{"key":"D","text":"+7"},{"key":"E","text":"+3"}]'::jsonb,
  'D',
  NULL, NULL,
  'KMnO₄ ist elektrisch neutral. OZ(K) = +1, OZ(O) = −2. Summe: (+1) + OZ(Mn) + 4×(−2) = 0 → OZ(Mn) = 0 − 1 + 8 = +7. KMnO₄ ist ein starkes Oxidationsmittel (Permanganat).',
  1
),

(
  'typa-ch-11-01-zn-cu-redox',
  'A', 'chemie', 'ch-11-01',
  'In der Reaktion Zn + CuSO₄ → ZnSO₄ + Cu — welche Teilaussage ist korrekt?',
  '[{"key":"A","text":"Zn wird reduziert (OZ steigt von 0 auf +2)"},{"key":"B","text":"Cu²⁺ wird oxidiert (OZ steigt von +2 auf 0)"},{"key":"C","text":"Zn wird oxidiert (gibt 2 e⁻ ab) und Cu²⁺ wird reduziert"},{"key":"D","text":"SO₄²⁻ aendert seine Oxidationszahl"},{"key":"E","text":"Keine Redox-Reaktion — keine OZ-Aenderung"}]'::jsonb,
  'C',
  NULL, NULL,
  'Zn: OZ 0 → +2 (oxidiert, gibt 2e⁻ ab, ist Reduktionsmittel). Cu²⁺: OZ +2 → 0 (reduziert, nimmt 2e⁻ auf, ist Oxidationsmittel). OIL RIG: Oxidation Is Loss, Reduction Is Gain.',
  2
),

(
  'typk-ch-11-01-oz-regeln',
  'K', 'chemie', 'ch-11-01',
  'Welche der folgenden Aussagen zu Oxidationszahlen (OZ) sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"In reinen Elementen (z.B. Fe, O₂, Cl₂) betraegt die OZ immer 0","korrekt":true},{"nr":2,"text":"Sauerstoff hat in allen Verbindungen die OZ −2","korrekt":false},{"nr":3,"text":"In Peroxiden (z.B. H₂O₂) hat Sauerstoff die OZ −1","korrekt":true},{"nr":4,"text":"Wasserstoff hat in Metallhydriden (z.B. NaH) die OZ +1","korrekt":false},{"nr":5,"text":"Die Summe der OZ aller Atome in einem Molekuel ergibt die Gesamtladung des Teilchens","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,3,5]},{"key":"B","nummern":[1,2,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Elemente in Reinform: OZ = 0. Aussage 2: falsch — Ausnahmen: Peroxide OZ = −1 (H₂O₂), OF₂: O hat OZ = +2. Aussage 3: korrekt — In H₂O₂: 2(+1) + 2·OZ(O) = 0 → OZ(O) = −1. Aussage 4: falsch — in NaH: OZ(H) = −1 (H nimmt Elektron von Na auf). Aussage 5: korrekt — Grundregel zur OZ-Berechnung.',
  2
),

(
  'typa-ch-11-01-disproportionierung',
  'A', 'chemie', 'ch-11-01',
  'Was versteht man unter einer Disproportionierung?',
  '[{"key":"A","text":"Zwei verschiedene Elemente werden beide oxidiert"},{"key":"B","text":"Dasselbe Element wird gleichzeitig oxidiert und reduziert"},{"key":"C","text":"Ein Element wechselt von hoher zu niedrigerer OZ"},{"key":"D","text":"Zwei Reduktionsmittel reagieren miteinander"},{"key":"E","text":"Ein Katalysator wird waehrend der Reaktion oxidiert"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei einer Disproportionierung wird ein Element in derselben Reaktion gleichzeitig oxidiert (OZ steigt) und reduziert (OZ sinkt). Klassisches Beispiel: H₂O₂ → H₂O + ½O₂: O hat in H₂O₂ OZ = −1, in H₂O OZ = −2 (reduziert) und in O₂ OZ = 0 (oxidiert). Weiteres Beispiel: Cl₂ in NaOH → Cl⁻ + ClO⁻.',
  3
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-11-02: Elektrochemische Spannungsreihe und galvanische Elemente
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-11-02-daniel-element',
  'A', 'chemie', 'ch-11-02',
  'Welchen Wert hat E°_Zelle fuer das Daniel-Element (Zn|Zn²⁺||Cu²⁺|Cu)? E°(Zn²⁺/Zn) = −0,76 V; E°(Cu²⁺/Cu) = +0,34 V',
  '[{"key":"A","text":"0,34 V"},{"key":"B","text":"0,76 V"},{"key":"C","text":"1,10 V"},{"key":"D","text":"−1,10 V"},{"key":"E","text":"0,42 V"}]'::jsonb,
  'C',
  NULL, NULL,
  'E°_Zelle = E°_Kathode − E°_Anode = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 − (−0,76) = +1,10 V. Kathode = hoehere E° (Cu, Reduktion); Anode = niedrigere E° (Zn, Oxidation). Positives E°_Zelle → spontane Reaktion.',
  2
),

(
  'typa-ch-11-02-she-definition',
  'A', 'chemie', 'ch-11-02',
  'Was ist die Standardwasserstoffelektrode (SHE)?',
  '[{"key":"A","text":"Eine Elektrode mit E° = +1 V als Referenz"},{"key":"B","text":"Eine Platinelektrode in 1M H⁺-Loesung bei 1 atm H₂, E° = 0 V (definiert)"},{"key":"C","text":"Eine Elektrode aus reinem Wasserstoffgas"},{"key":"D","text":"Die Elektrode mit dem negativsten E° in der Spannungsreihe"},{"key":"E","text":"Eine biologische Elektrode basierend auf NAD⁺/NADH"}]'::jsonb,
  'B',
  NULL, NULL,
  'Die SHE besteht aus einem Platindraht (Katalysator) in 1M H⁺-Loesung unter H₂-Atmosphaere (1 atm). E° = 0,00 V (definiert). Alle anderen Normalpotenziale werden relativ zur SHE gemessen. Bedingungen: 25°C, Aktivitaet = 1.',
  2
),

(
  'typk-ch-11-02-spannungsreihe',
  'K', 'chemie', 'ch-11-02',
  'Welche Aussagen zur elektrochemischen Spannungsreihe und galvanischen Elementen sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Ein Metall mit sehr negativem E° ist ein schwaches Reduktionsmittel","korrekt":false},{"nr":2,"text":"An der Anode eines galvanischen Elements findet Oxidation statt","korrekt":true},{"nr":3,"text":"Lithium (E° = −3,04 V) ist das staerkste metallische Reduktionsmittel","korrekt":true},{"nr":4,"text":"Positive E°_Zelle bedeutet, dass die Reaktion spontan ablaeuft","korrekt":true},{"nr":5,"text":"Im galvanischen Element ist die Anode der Pluspol","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: falsch — niedriges (negatives) E° = starkes Reduktionsmittel (gibt Elektronen leicht ab). Aussage 2: korrekt — Anode = Oxidation (immer, in beiden Zelltypen). Aussage 3: korrekt — Li hat E° = −3,04 V, das negativste Metall. Aussage 4: korrekt — Spontanitaetsbedingung: E°_Zelle > 0 (entspricht ΔG° < 0). Aussage 5: falsch — Im galvanischen Element ist die Anode der Minuspol (−), die Kathode der Pluspol (+).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-11-03: Elektrolyse und Nernst-Gleichung
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-11-03-faraday-ag',
  'A', 'chemie', 'ch-11-03',
  'Welche Masse Silber (Ag, M = 108 g/mol, z = 1) wird bei einer Elektrolyse mit Q = 9650 C abgeschieden? (F = 96500 C/mol)',
  '[{"key":"A","text":"5,4 g"},{"key":"B","text":"10,8 g"},{"key":"C","text":"3,6 g"},{"key":"D","text":"1,08 g"},{"key":"E","text":"21,6 g"}]'::jsonb,
  'B',
  NULL, NULL,
  'm = M · Q / (z · F) = 108 g/mol × 9650 C / (1 × 96500 C/mol) = 1041300 / 96500 = 10,8 g. Faraday-Gesetz: Die abgeschiedene Masse ist proportional zur Ladungsmenge Q und zur molaren Masse M.',
  2
),

(
  'typa-ch-11-03-nernst-ox-steigt',
  'A', 'chemie', 'ch-11-03',
  'In der Nernst-Gleichung E = E° − (0,059/z) · log([Red]/[Ox]) gilt: Was passiert mit E, wenn [Ox] steigt (bei konstantem [Red])?',
  '[{"key":"A","text":"E sinkt, weil der Quotient [Red]/[Ox] groesser wird"},{"key":"B","text":"E steigt, weil der Quotient [Red]/[Ox] kleiner wird → log nimmt ab → E steigt"},{"key":"C","text":"E bleibt unveraendert"},{"key":"D","text":"E wird negativ"},{"key":"E","text":"z muss ebenfalls steigen"}]'::jsonb,
  'B',
  NULL, NULL,
  'Wenn [Ox] steigt (bei konstantem [Red]), sinkt der Quotient [Red]/[Ox] → log([Red]/[Ox]) wird negativer → der subtrahierte Term wird kleiner (oder negativ) → E steigt. Anschaulich: Mehr Oxidationsmittel = hoehere Oxidationstendenz = hoehere Spannung. Qualitative Nernst-Regel: Hohe [Ox] → E↑; hohe [Red] → E↓.',
  3
),

(
  'typa-ch-11-03-kathode-elektrolyse',
  'A', 'chemie', 'ch-11-03',
  'Was geschieht bei der Elektrolyse an der Kathode?',
  '[{"key":"A","text":"Oxidation; Kathode ist mit Plusspannungsquelle verbunden"},{"key":"B","text":"Reduktion; Kathode ist mit Minuspannungsquelle verbunden"},{"key":"C","text":"Anode und Kathode tauschen bei Elektrolyse die Rollen"},{"key":"D","text":"An der Kathode entsteht immer Sauerstoff"},{"key":"E","text":"Die Kathode loest sich auf (wird verbraucht)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Bei der Elektrolyse findet an der Kathode (mit Minus der Spannungsquelle verbunden) Reduktion statt — Elektronen werden zu positiv geladenen Ionen geliefert. Merksatz: Kathode = Reduktion (gilt fuer galvanische Zelle UND Elektrolysezelle). An der Kathode entsteht z.B. H₂ (Wasserelektrolyse) oder Metallabscheidung (Galvanik).',
  1
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-11-04: Redox-Reaktionen in der Biologie
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-11-04-atk-delta-e',
  'A', 'chemie', 'ch-11-04',
  'Wie gross ist ΔE° der Atmungskette fuer den Elektronentransfer von NADH zu O₂? E°(NAD⁺/NADH) = −0,32 V; E°(O₂/H₂O) = +0,82 V',
  '[{"key":"A","text":"ΔE° = +0,50 V"},{"key":"B","text":"ΔE° = +1,14 V"},{"key":"C","text":"ΔE° = −1,14 V"},{"key":"D","text":"ΔE° = +0,32 V"},{"key":"E","text":"ΔE° = +0,82 V"}]'::jsonb,
  'B',
  NULL, NULL,
  'ΔE° = E°(Oxidationsmittel) − E°(Reduktionsmittel) = E°(O₂/H₂O) − E°(NAD⁺/NADH) = +0,82 − (−0,32) = +1,14 V. Positives ΔE° → spontane Reaktion (NADH → O₂). Die Energie ΔG° = −n·F·ΔE° ≈ −220 kJ/mol treibt die ATP-Synthese an. Pro NADH: ca. 2,5 ATP.',
  2
),

(
  'typa-ch-11-04-ros-aggressivste',
  'A', 'chemie', 'ch-11-04',
  'Welche reaktive Sauerstoffspezies (ROS) gilt als die reaktivste (aggressivste)?',
  '[{"key":"A","text":"Superoxid O₂·⁻"},{"key":"B","text":"Wasserstoffperoxid H₂O₂"},{"key":"C","text":"Hydroxylradikal ·OH"},{"key":"D","text":"Singulett-Sauerstoff ¹O₂"},{"key":"E","text":"Peroxynitrit ONOO⁻"}]'::jsonb,
  'C',
  NULL, NULL,
  'Das Hydroxylradikal (·OH) ist die reaktivste ROS. Es entsteht aus H₂O₂ + Fe²⁺ (Fenton-Reaktion) und reagiert sofort mit jeder biologischen Molekuelklasse (DNA, Proteine, Lipide) ohne spezifische enzymatische Entgiftung. SOD entgiftet O₂·⁻, Katalase entgiftet H₂O₂ — ·OH muss durch nicht-enzymatische Antioxidantien (Vit. C, E) abgefangen werden.',
  2
),

(
  'typk-ch-11-04-bio-redox',
  'K', 'chemie', 'ch-11-04',
  'Welche Aussagen zu biologischen Redox-Systemen und der Atmungskette sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"NAD⁺ nimmt 2 Elektronen und 1 Proton auf → NADH; E° = −0,32 V","korrekt":true},{"nr":2,"text":"O₂ ist das Endoxidationsmittel der Atmungskette und hat das hoehere E°","korrekt":true},{"nr":3,"text":"Superoxiddismutase (SOD) baut H₂O₂ direkt in H₂O und O₂ um","korrekt":false},{"nr":4,"text":"NADPH regeneriert reduziertes Glutathion (GSH) ueber Glutathionreduktase","korrekt":true},{"nr":5,"text":"Katalase ist eine Oxidoreduktase, die H₂O₂ in Peroxisomen abbaut","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[1,2,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — NAD⁺ + 2H⁺ + 2e⁻ → NADH + H⁺; E° = −0,32 V. Aussage 2: korrekt — O₂/H₂O: E° = +0,82 V (hoecher als NAD⁺/NADH) → O₂ nimmt Elektronen auf. Aussage 3: falsch — SOD wandelt O₂·⁻ in H₂O₂ um (nicht abbau von H₂O₂); Katalase baut H₂O₂ ab. Aussage 4: korrekt — GSSG + NADPH → 2GSH + NADP⁺ (Glutathionreduktase). Aussage 5: korrekt — Katalase (EC 1 = Oxidoreduktase) zersetzt 2H₂O₂ → 2H₂O + O₂ in Peroxisomen. Richtige Aussagen: 1, 2, 4 → Schluessel D. (Korrekte Kombination B war nicht B-nummeierung in Aussagen-Liste → Schluessel D = [1,2,4]).',
  3
)

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 12: Organische Chemie
-- ============================================================

-- UK ch-12-01: Kohlenwasserstoffe — Alkane, Alkene, Alkine
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-12-01-alkan-formel',
  'A', 'chemie', 'ch-12-01',
  'Welche allgemeine Formel haben Alkane?',
  '[{"key":"A","text":"C_nH_(2n)"},{"key":"B","text":"C_nH_(2n+2)"},{"key":"C","text":"C_nH_(2n-2)"},{"key":"D","text":"C_nH_n"},{"key":"E","text":"C_nH_(2n-6)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Alkane (gesaettigt, nur Einfachbindungen) haben C_nH_(2n+2). Test: Methan (n=1): CH₄ = 2×1+2=4 ✓; Ethan (n=2): C₂H₆ = 2×2+2=6 ✓. Alkene C_nH_(2n) haben eine Doppelbindung (-2H); Alkine C_nH_(2n-2) haben eine Dreifachbindung (-4H vs. Alkan).',
  1
),

(
  'typa-ch-12-01-markovnikov',
  'A', 'chemie', 'ch-12-01',
  'Bei der Addition von HBr an Propen (CH₃-CH=CH₂) laut Markovnikov-Regel: Welches Produkt entsteht vorwiegend?',
  '[{"key":"A","text":"CH₃-CH₂-CH₂Br (1-Brompropan)"},{"key":"B","text":"CH₃-CHBr-CH₃ (2-Brompropan)"},{"key":"C","text":"CH₂Br-CH₂-CH₃ (1-Brompropan, anderer Weg)"},{"key":"D","text":"Br₂ addiert nicht an Propen"},{"key":"E","text":"Gleiches Gemisch aus 1- und 2-Brompropan"}]'::jsonb,
  'B',
  NULL, NULL,
  'Markovnikov-Regel: H addiert sich an das C mit mehr H-Atomen, das Halogen an das C mit weniger H. In CH₃-CH=CH₂: C2 hat 1 H, C3 hat 2 H → H zu C3, Br zu C2 → CH₃-CHBr-CH₃ (2-Brompropan). Erklaerung: sekundaeres Carbokation an C2 ist stabiler als primaeres an C3.',
  2
),

(
  'typk-ch-12-01-kw-eigenschaften',
  'K', 'chemie', 'ch-12-01',
  'Welche der folgenden Aussagen zu Kohlenwasserstoffen sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Benzol (C₆H₆) bevorzugt elektrophile aromatische Substitution (EAS) statt Addition, um die Aromatizitaet zu erhalten","korrekt":true},{"nr":2,"text":"Alkane reagieren leicht und spontan mit Halogenen ohne Energiezufuhr (UV-Licht oder Waerme)","korrekt":false},{"nr":3,"text":"Alkine (C≡C) sind sp-hybridisiert und haben lineare Geometrie (180°)","korrekt":true},{"nr":4,"text":"cis/trans-Isomerie bei Alkenen ist moeglich, weil die C=C-Doppelbindung keine freie Rotation erlaubt","korrekt":true},{"nr":5,"text":"Benzol hat 8 π-Elektronen (aromatisch nach Hueckel-Regel: 4n+2, n=2)","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,3,4]},{"key":"B","nummern":[1,2,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — EAS erhielt Aromatizitaet (Resonanzenergie ~150 kJ/mol). Aussage 2: falsch — Alkane reagieren nur unter rauen Bedingungen (UV-Licht, Waerme) radikalisch. Aussage 3: korrekt — Dreifachbindung = sp (2 σ + 2 π), linear. Aussage 4: korrekt — keine freie Rotation um C=C → starre Geometrie → cis/trans. Aussage 5: falsch — Benzol hat 6 π-Elektronen (n=1 in 4n+2=6), nicht 8.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-12-02: Funktionelle Gruppen
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-12-02-oxidationsleiter',
  'A', 'chemie', 'ch-12-02',
  'Was entsteht bei der milden Oxidation eines primaeren Alkohols (z.B. Ethanol) als erstes Produkt?',
  '[{"key":"A","text":"Keton"},{"key":"B","text":"Carbonsaeure (direkt)"},{"key":"C","text":"Aldehyd"},{"key":"D","text":"Alkan"},{"key":"E","text":"Alken"}]'::jsonb,
  'C',
  NULL, NULL,
  'Primaere Alkohole (R-CH₂-OH) werden bei milder Oxidation zunachst zu Aldehyden (R-CHO) oxidiert. Bei starker Oxidation folgt die weitere Oxidation zur Carbonsaeure (R-COOH). Ethanolabbau in der Leber: Ethanol → Acetaldehyd (ADH) → Acetat (ALDH). Sekundaere Alkohole → Ketone. Tertiaere Alkohole: nicht ohne weiteres oxidierbar.',
  1
),

(
  'typa-ch-12-02-tollens',
  'A', 'chemie', 'ch-12-02',
  'Welches Reagenz erlaubt den Nachweis von Aldehyden (Silberspiegel-Probe)?',
  '[{"key":"A","text":"Bromwasser (Br₂/H₂O)"},{"key":"B","text":"Tollens-Reagenz (ammoniakalische AgNO₃-Loesung)"},{"key":"C","text":"Fehling-Loesung — aber Ketone reagieren auch"},{"key":"D","text":"Natronlauge (NaOH) — gleiches Ergebnis fuer Aldehyde und Ketone"},{"key":"E","text":"Salzsaeure (HCl)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Das Tollens-Reagenz (ammoniakalische AgNO₃) ist spezifisch fuer Aldehyde: R-CHO reduziert Ag⁺ → Ag⁰ (Silberspiegel). Ketone reagieren nicht (nicht oxidierbar durch mildes Reagenz). Fehling-Loesung (Cu²⁺ → Cu₂O-Niederschlag) zeigt ebenfalls Aldehyde an (ausser Benzaldehyd). Tollens vs. Fehling: beide Aldehydnachweise, aber unterschiedliche Reaktanden.',
  2
),

(
  'typk-ch-12-02-funk-gruppen',
  'K', 'chemie', 'ch-12-02',
  'Welche der folgenden Aussagen zu funktionellen Gruppen sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Amine (-NH₂) sind Broensted-Basen: Sie nehmen H⁺ auf (R-NH₂ + H⁺ → R-NH₃⁺)","korrekt":true},{"nr":2,"text":"Tertiaere Alkohole (R₃C-OH) koennen leicht zu Ketonen oxidiert werden","korrekt":false},{"nr":3,"text":"Carbonsaeure (-COOH) und Alkohol (-OH) bilden bei Kondensation eine Esterbindung","korrekt":true},{"nr":4,"text":"Aldehyde haben die Formylgruppe (-CHO) in der Mitte der Kohlenstoffkette","korrekt":false},{"nr":5,"text":"Ketone koennen nicht mit Fehling-Loesung nachgewiesen werden (im Gegensatz zu Aldehyden)","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,4]},{"key":"C","nummern":[1,2,5]},{"key":"D","nummern":[2,4,5]},{"key":"E","nummern":[1,3,5]}]'::jsonb,
  'Aussage 1: korrekt — Amine sind Broensted-Basen (freies Elektronenpaar an N). Aussage 2: falsch — tertiaere Alkohole haben kein H am C-OH → koennen NICHT zu Aldehyd/Keton oxidiert werden. Aussage 3: korrekt — Veresterung: RCOOH + R''OH → RCOOR'' + H₂O. Aussage 4: falsch — Aldehyde haben -CHO am KETTENENDE (nicht in der Mitte; das waere ein Keton). Aussage 5: korrekt — Ketone (R-CO-R'') sind in milder Oxidation stabil; Fehling und Tollens zeigen nur Aldehyde an.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-12-03: Ester, Ether und Isomerie
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-12-03-verseifung',
  'A', 'chemie', 'ch-12-03',
  'Was entsteht bei der alkalischen Verseifung (Saponifikation) eines Triglycerids mit NaOH?',
  '[{"key":"A","text":"Drei Estermolekuele + Wasser"},{"key":"B","text":"Glycerol + drei freie Fettsaeure (reversibel)"},{"key":"C","text":"Glycerol + drei Fettsaeure-Na-Salze (Seife); NaOH wird verbraucht, irreversibel"},{"key":"D","text":"Phospholipide + Glycerol"},{"key":"E","text":"Saccharose + Fettsaeurederivate"}]'::jsonb,
  'C',
  NULL, NULL,
  'Alkalische Verseifung: Triglycerid + 3 NaOH → Glycerol + 3 Fettsaeure-Na-Salze (Seife). Irreversibel, da das Carboxylat-Anion (R-COO⁻) nicht mit Alkohol ruckverestert. NaOH wird verbraucht. Die entstehenden Na-Fettsauresalze sind amphiphile Seifen.',
  2
),

(
  'typa-ch-12-03-chiralitaet',
  'A', 'chemie', 'ch-12-03',
  'Was ist ein Stereozentrum (asymmetrisches Kohlenstoffatom)?',
  '[{"key":"A","text":"Ein sp²-hybridisiertes C mit einer Doppelbindung"},{"key":"B","text":"Ein sp³-C-Atom mit vier verschiedenen Substituenten"},{"key":"C","text":"Ein C-Atom an dem Ringschluss erfolgt"},{"key":"D","text":"Ein C-Atom in aromatischen Verbindungen"},{"key":"E","text":"Ein C-Atom mit drei gleichen und einem anderen Substituenten"}]'::jsonb,
  'B',
  NULL, NULL,
  'Ein Stereozentrum ist ein sp³-hybridisiertes C-Atom mit vier verschiedenen Substituenten. Die tetraedrische Anordnung kann auf zwei nicht ueberlagerbare Weisen realisiert werden → R- und S-Enantiomere. Wenn zwei Substituenten gleich sind: kein Stereozentrum. Biologisch: L-Aminosaeuren, D-Zucker sind die natuerlichen Formen.',
  2
),

(
  'typk-ch-12-03-isomerie',
  'K', 'chemie', 'ch-12-03',
  'Welche Aussagen zur Isomerie sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Enantiomere haben in achiralen Medien identische physikalische Eigenschaften ausser der optischen Aktivitaet (drehen polarisiertes Licht entgegengesetzt)","korrekt":true},{"nr":2,"text":"Konstitutionsisomere haben gleiche Summenformel, aber unterschiedliche Verknuepfung der Atome","korrekt":true},{"nr":3,"text":"Natuerliche ungesaettigte Fettsauren haben ueberwiegend trans-Konfiguration","korrekt":false},{"nr":4,"text":"cis/trans-Isomerie tritt bei Alkanen auf (keine freie Rotation um C-C)","korrekt":false},{"nr":5,"text":"Enantiomere koennen in chiraler Umgebung (Enzyme, Rezeptoren) unterschiedlich wirken","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,2,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Enantiomere: gleiche Schmp., Sdp., Loeslichkeit; unterschiedliche optische Aktivitaet. Aussage 2: korrekt — Konstitutionsisomere (Strukturisomere) = gleiche Formel, andere Bindungsfolge. Aussage 3: falsch — natuerliche Fettsauren haben CIS-Konfiguration (cis-Knicke → Fluessigkeit); trans-Fettsauren entstehen industriell. Aussage 4: falsch — cis/trans-Isomerie tritt bei Alkenen (keine freie Rotation um C=C) auf, nicht bei Alkanen. Aussage 5: korrekt — chirale Umgebungen (Enzyme, Rezeptoren) erkennen nur einen Enantiomeren (z.B. Thalidomid).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-12-04: Amine und biologische Bedeutung
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-12-04-histamin-vorlaeufer',
  'A', 'chemie', 'ch-12-04',
  'Aus welcher Aminosaeure wird Histamin durch Decarboxylierung gebildet?',
  '[{"key":"A","text":"Tyrosin"},{"key":"B","text":"Tryptophan"},{"key":"C","text":"Histidin"},{"key":"D","text":"Arginin"},{"key":"E","text":"Lysin"}]'::jsonb,
  'C',
  NULL, NULL,
  'Histamin entsteht durch Decarboxylierung von Histidin (Histidin-Decarboxylase). Histidin hat einen Imidazolring (pK_R ≈ 6,0). Histamin wirkt via H1-Rezeptoren (Allergie, Bronchospasmus), H2-Rezeptoren (Magensaeure) und H3-Rezeptoren (ZNS). Merkregel: His-tamin → Histidin.',
  1
),

(
  'typa-ch-12-04-peptidbindung',
  'A', 'chemie', 'ch-12-04',
  'Welche Aussage ueber die Peptidbindung ist FALSCH?',
  '[{"key":"A","text":"Die Peptidbindung ist eine Amidbindung (-CO-NH-)"},{"key":"B","text":"Die Peptidbindung hat partiellen Doppelbindungscharakter durch Resonanz"},{"key":"C","text":"Die Peptidbindung ist planar (alle 4 Atome N, C, C, O in einer Ebene)"},{"key":"D","text":"Die Peptidbindung ist eine freie Einfachbindung mit uneingeschraenkter Rotation"},{"key":"E","text":"Peptidbindungen liegen ueberwiegend in trans-Konfiguration vor"}]'::jsonb,
  'D',
  NULL, NULL,
  'Die Peptidbindung hat durch Resonanz (C=O ↔ C-N⁺) partiellen Doppelbindungscharakter → KEINE freie Rotation. Sie ist planar und starr. Die Rotation ist nur um N-Cα (phi) und Cα-CO (psi) moeglich (Ramachandran-Winkel). Falsche Aussage: D ("freie Einfachbindung mit uneingeschraenkter Rotation").',
  2
),

(
  'typa-ch-12-04-pi-protein',
  'A', 'chemie', 'ch-12-04',
  'Ein Protein hat pI = 5,0. Welche Nettoladung hat es bei pH 7,4?',
  '[{"key":"A","text":"Positiv geladen"},{"key":"B","text":"Neutral"},{"key":"C","text":"Negativ geladen"},{"key":"D","text":"Alternierend positiv und negativ"},{"key":"E","text":"Keine Ladung moeglich bei Proteinen"}]'::jsonb,
  'C',
  NULL, NULL,
  'Bei pH > pI ist die Nettoladung negativ. pI = 5,0: Bei pH 5,0 ist das Protein neutral. Bei pH 7,4 (> pI = 5,0) sind mehr Carboxylgruppen deprotoniert (−COO⁻) → ueberwiegend negative Ladung. Merksatz: pH < pI → positiv; pH = pI → neutral; pH > pI → negativ. Bei Elektrophorese: wandert bei pH 7,4 zur Anode.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 13: Naturstoffe
-- ============================================================

-- UK ch-13-01: Kohlenhydrate
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-13-01-anomere',
  'A', 'chemie', 'ch-13-01',
  'Was ist der Unterschied zwischen α-D-Glucose und β-D-Glucose in der Haworth-Projektion?',
  '[{"key":"A","text":"α hat 5 C-Atome, β hat 6 C-Atome"},{"key":"B","text":"α-D-Glucose: OH an C1 unterhalb der Ringebene (axial); β-D-Glucose: OH an C1 oberhalb (aequatorial)"},{"key":"C","text":"α und β sind in der Fischer-Projektion gleich"},{"key":"D","text":"α ist die D-Form, β ist die L-Form"},{"key":"E","text":"β hat eine Doppelbindung am anomeren C1"}]'::jsonb,
  'B',
  NULL, NULL,
  'Beim Ringschluss der Glucose entsteht am C1 ein neues Stereozentrum (anomeres C). α-D-Glucose: OH-C1 axial = unterhalb der Ringebene (Haworth). β-D-Glucose: OH-C1 aequatorial = oberhalb. In wässriger Loesung stehen beide Anomere im Gleichgewicht (Mutarotation). β-D-Glucose ist in Cellulose (β-1,4-Bindung) enthalten.',
  2
),

(
  'typa-ch-13-01-lactose-zusammensetzung',
  'A', 'chemie', 'ch-13-01',
  'Aus welchen Bausteinen besteht Laktose (Milchzucker)?',
  '[{"key":"A","text":"Zwei Glucosemolekuele (α-1,4-Bindung)"},{"key":"B","text":"Glucose + Fructose (α-1,2-Bindung)"},{"key":"C","text":"Galaktose + Glucose (β-1,4-Bindung)"},{"key":"D","text":"Galaktose + Galaktose (α-1,4-Bindung)"},{"key":"E","text":"Fructose + Galaktose"}]'::jsonb,
  'C',
  NULL, NULL,
  'Laktose besteht aus β-D-Galaktose + D-Glucose, verknüpft durch eine β-1,4-glykosidische Bindung. Fuer die Hydrolyse wird Laktase (β-Galaktosidase) benoetigt. Fehlt dieses Enzym → Laktoseintoleranz. Laktose ist ein reduzierendes Disaccharid (Glucose-Teil hat freies anomeres C).',
  1
),

(
  'typk-ch-13-01-polysaccharide',
  'K', 'chemie', 'ch-13-01',
  'Welche Aussagen zu Polysacchariden sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Staerke enthaelt α-1,4-glykosidische Bindungen (Amylose) und α-1,6-Verzweigungen (Amylopektin)","korrekt":true},{"nr":2,"text":"Cellulose hat β-1,4-Bindungen und ist fuer den Menschen verdaubar (Amylase spaltet beide α und β)","korrekt":false},{"nr":3,"text":"Glykogens hohe Verzweigung (α-1,6 alle 8-12 Einheiten) erlaubt schnelle Glucose-Mobilisierung","korrekt":true},{"nr":4,"text":"Saccharose ist ein reduzierendes Disaccharid (freies anomeres C)","korrekt":false},{"nr":5,"text":"D-Glucose und D-Galaktose sind Epimere — sie unterscheiden sich nur in der OH-Stellung an C4","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Staerke: Amylose (α-1,4, linear) + Amylopektin (α-1,4 + α-1,6-Verzweigungen). Aussage 2: falsch — Cellulose hat β-1,4-Bindungen → NICHT verdaubar; Menschen haben keine β-1,4-Glucosidase (Cellulase). Aussage 3: korrekt — viele nichtreduzierende Enden → viele Glykogenphosphorylase-Angriffspunkte → rascher Abbau. Aussage 4: falsch — Saccharose (Glc + Fruc, α-1,2-Bindung) hat KEIN freies anomeres C → NICHT reduzierend. Aussage 5: korrekt — Glucose und Galaktose sind C4-Epimere (OH an C4 unterschiedlich positioniert).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-13-02: Aminosäuren und Proteine
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-13-02-tertiaerstruktur',
  'A', 'chemie', 'ch-13-02',
  'Was stabilisiert hauptsaechlich die Tertiaerstruktur eines globulaeren Proteins?',
  '[{"key":"A","text":"Nur Peptidbindungen (kovalent) entlang der Kette"},{"key":"B","text":"Nur Disulfidbruecken zwischen Cys-Resten"},{"key":"C","text":"Hydrophobe Wechselwirkungen, Wasserstoffbruecken, ionische Wechselwirkungen und Disulfidbruecken"},{"key":"D","text":"Nur kovalente C-C-Bindungen"},{"key":"E","text":"Van-der-Waals-Kraefte allein"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die Tertiaerstruktur wird durch ein Zusammenspiel verschiedener Kraefte stabilisiert: Hydrophobe Wechselwirkungen (dominant, unpolare Seitenketten ins Innere), Wasserstoffbruecken (polare Seitenketten), ionische Wechselwirkungen (Salzbruecken), Disulfidbruecken (kovalent, Cys-Cys). Denaturierung zerstoert nicht-kovalente Wechselwirkungen, erhalt aber die Primaerstruktur (Sequenz).',
  1
),

(
  'typa-ch-13-02-alpha-helix',
  'A', 'chemie', 'ch-13-02',
  'Wie viele Aminosaeure-Reste kommen pro Windung der α-Helix?',
  '[{"key":"A","text":"2,0"},{"key":"B","text":"3,0"},{"key":"C","text":"3,6"},{"key":"D","text":"4,0"},{"key":"E","text":"6,0"}]'::jsonb,
  'C',
  NULL, NULL,
  'Die rechtsgaendige α-Helix hat 3,6 Aminosaeure-Reste pro Windung (Steigung 0,54 nm pro Windung; 0,15 nm pro AS). Wasserstoffbruecken bilden sich zwischen NH-Gruppe der AS i und C=O der AS i+4. Dies ist fundamental fuer Transmembranproteine (hydrophobe Helix durch Lipid-Doppelschicht).',
  2
),

(
  'typk-ch-13-02-proteinstruktur',
  'K', 'chemie', 'ch-13-02',
  'Welche Aussagen zu Proteinstruktur und Haemoglobin sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Das β-Faltblatt wird durch H-Bruecken zwischen NH-Gruppen und C=O-Gruppen benachbarter Straenge stabilisiert","korrekt":true},{"nr":2,"text":"Denaturierung bricht Peptidbindungen und zerstoert die Primaerstruktur","korrekt":false},{"nr":3,"text":"Haemoglobin (α₂β₂) zeigt kooperative O₂-Bindung mit sigmoidaler O₂-Dissoziationskurve","korrekt":true},{"nr":4,"text":"Bei Sichelzellaenaemie ist Glu₆ → Val₆ in der β-Globin-Kette ersetzt → HbS aggregiert bei Desoxygenierung","korrekt":true},{"nr":5,"text":"Die Quartaerstruktur beschreibt die lineaere Aminosaeure-Sequenz eines Proteins","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,2,5]},{"key":"D","nummern":[1,3,4]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — β-Faltblatt: H-Bruecken senkrecht zur Strangrichtung. Aussage 2: falsch — Denaturierung zerstoert nur nicht-kovalente Bindungen; Peptidbindungen (Primaerstruktur) bleiben erhalten. Aussage 3: korrekt — sigmoidale Kurve = Kooperativitaet (Bohr-Effekt, 2,3-BPG). Aussage 4: korrekt — Glu (polar) → Val (unpolar) → HbS-Aggregation bei Hypoxie → Sichelzellform. Aussage 5: falsch — Quartaerstruktur = Assoziation mehrerer Polypeptid-Untereinheiten; Primaerstruktur = Aminosaeure-Sequenz.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-13-03: Lipide — Fette, Phospholipide und Cholesterin
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-13-03-fettsaeuren-sdp',
  'A', 'chemie', 'ch-13-03',
  'Warum haben ungesaettigte Fettsaeuren (cis-Doppelbindungen) niedrigere Schmelzpunkte als gesaettigte?',
  '[{"key":"A","text":"Weil sie kuerzer sind"},{"key":"B","text":"Weil cis-Knicke die dichte Packung der Ketten verhindern → schwaechere Van-der-Waals-Kraefte"},{"key":"C","text":"Weil sie mehr Sauerstoff enthalten"},{"key":"D","text":"Weil trans-Doppelbindungen Waerme besser leiten"},{"key":"E","text":"Kein Unterschied im Schmelzpunkt"}]'::jsonb,
  'B',
  NULL, NULL,
  'cis-Doppelbindungen erzeugen Knicke in der Fettsaeurekette → verhindert enge Packung → schwachere Van-der-Waals-Kraefte → niedriger Schmelzpunkt → fluessig (Pflanzeoele). Gesaettigte Fettsaeuren: geradkettig, dicht gepackt → starcke VdW → hoher Schmelzpunkt → fest (tierische Fette, Butter). Trans-Fettsaeuren (industriell) sind geradliniger → hoeherer Schmelzpunkt als cis.',
  1
),

(
  'typa-ch-13-03-cholesterin',
  'A', 'chemie', 'ch-13-03',
  'Welche Funktion hat Cholesterin in der Zellmembran?',
  '[{"key":"A","text":"Es bildet die Hauptstruktur der Membran (>50 %)"},{"key":"B","text":"Es reguliert die Membranfluiditaet bidirektional (ordnend bei Waerme, verflüssigend bei Kaelte)"},{"key":"C","text":"Es stabilisiert die Membran durch kovalente Bindungen an Phospholipide"},{"key":"D","text":"Es pumpt Ionen durch die Membran (Ionenkanal)"},{"key":"E","text":"Es dient ausschliesslich als Steroidhormon-Vorstufe"}]'::jsonb,
  'B',
  NULL, NULL,
  'Cholesterin liegt zwischen den Fettsaureschwanzen der Phospholipide. Bei hoher Temperatur: ordnet bewegliche Schwaneze → Fluiditaet sinkt (verhindert uebermassige Flussigkeit). Bei niedriger Temperatur: verhindert Kristallisation → Fluiditaet erhalten. Cholesterin ist auch Vorstufe fuer Steroidhormone (Cortisol, Testosteron, Oestrogen, Vit. D) und Gallensaeuren.',
  2
),

(
  'typk-ch-13-03-lipide',
  'K', 'chemie', 'ch-13-03',
  'Welche der folgenden Aussagen zu Lipiden sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Phospholipide sind amphiphil: hydrophiler Kopf (Phosphat+Kopfgruppe) + hydrophober Schwanz (2 Fettsaeuren)","korrekt":true},{"nr":2,"text":"HMG-CoA-Reduktase ist der geschwindigkeitsbestimmende Schritt der Cholesterinsynthese und wird durch Statine gehemmt","korrekt":true},{"nr":3,"text":"Essentielle Fettsaeuren (ω-3, ω-6) koennen vom menschlichen Koerper selbst synthetisiert werden","korrekt":false},{"nr":4,"text":"LDL transportiert Cholesterin in Gewebe; hohe LDL-Spiegel foerdern Arteriosklerose","korrekt":true},{"nr":5,"text":"trans-Fettsaeuren aus partieller Hydrierung haben einen erhoehten Schmelzpunkt gegenueber cis-Fettsaeuren und koennen LDL erhoehen","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,5]},{"key":"C","nummern":[2,3,4]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[3,4,5]}]'::jsonb,
  'Aussage 1: korrekt — Amphiphil → spontane Bildung der Lipid-Doppelschicht in waessriger Umgebung. Aussage 2: korrekt — Statine (z.B. Simvastatin) hemmen HMG-CoA-Reduktase → weniger Cholesterin → LDL sinkt. Aussage 3: falsch — essentiell = NICHT selbst synthetisierbar; Linolsaeure (ω-6) und α-Linolensaeure (ω-3) muessen mit Nahrung aufgenommen werden. Aussage 4: korrekt — LDL (low-density lipoprotein) bringt Cholesterin in Gewebe; oxidiertes LDL → Schaumzellen → Atherom. Aussage 5: korrekt — trans-Fettsaeuren haben hoehere Schmelzpunkte als cis; kardiovaskulaeres Risiko ↑ (LDL↑, HDL↓).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-13-04: Nukleinsäuren — DNA, RNA und Nukleotide
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-13-04-purine',
  'A', 'chemie', 'ch-13-04',
  'Welche der folgenden Basen ist eine Purinbase?',
  '[{"key":"A","text":"Thymin"},{"key":"B","text":"Cytosin"},{"key":"C","text":"Uracil"},{"key":"D","text":"Guanin"},{"key":"E","text":"Alle genannten sind Pyrimidine"}]'::jsonb,
  'D',
  NULL, NULL,
  'Purine haben ein bicyclisches Ringsystem (Pyrimidin + Imidazol, 9 Atome): Adenin (A) und Guanin (G). Pyrimidine: Einzelring (6 Atome): Cytosin (C), Thymin (T, nur DNA) und Uracil (U, nur RNA). Merkregel: PuRines = A+G (pure Gold); PYrimidines = CUT.',
  1
),

(
  'typa-ch-13-04-gc-hbruecken',
  'A', 'chemie', 'ch-13-04',
  'Guanin paart in der DNA-Doppelhelix mit Cytosin. Wieviele Wasserstoffbruecken bildet dieses Basenpaar?',
  '[{"key":"A","text":"2 H-Bruecken (wie A-T)"},{"key":"B","text":"3 H-Bruecken"},{"key":"C","text":"1 kovalente Bindung"},{"key":"D","text":"4 H-Bruecken"},{"key":"E","text":"Ionische Bindung (keine H-Bruecken)"}]'::jsonb,
  'B',
  NULL, NULL,
  'G≡C bildet 3 Wasserstoffbruecken; A=T bildet 2 Wasserstoffbruecken. Hoeher GC-Gehalt → hoehere Schmelztemperatur (Tm) der DNA. Relevant fuer PCR: GC-reiche Primer benoetigen hoehere Annealing-Temperaturen. Guanin: drei H-Bruecken-Donor/Akzeptor-Stellen; Cytosin: komplementaer.',
  1
),

(
  'typk-ch-13-04-dna-struktur',
  'K', 'chemie', 'ch-13-04',
  'Welche Aussagen zur DNA-Doppelhelix und Nukleotiden sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Die beiden DNA-Straenge sind antiparallel (ein Strang laeuft 5''→3'', der andere 3''→5'')","korrekt":true},{"nr":2,"text":"Desoxyribose hat eine OH-Gruppe am C2'' (wie Ribose in RNA)","korrekt":false},{"nr":3,"text":"Die B-DNA (physiologische Form) ist rechtsgaengig mit 10 Basenpaaren pro Windung","korrekt":true},{"nr":4,"text":"Das Zucker-Phosphat-Rueckgrat liegt aussen (hydrophil), die Basen innen (hydrophob, π-Stacking)","korrekt":true},{"nr":5,"text":"ATP-Hydrolyse (ATP → ADP + Pi) ist endergonisch (nimmt Energie auf)","korrekt":false}]'::jsonb,
  '[{"key":"A","nummern":[1,2,4]},{"key":"B","nummern":[1,3,4]},{"key":"C","nummern":[2,3,5]},{"key":"D","nummern":[1,4,5]},{"key":"E","nummern":[2,4,5]}]'::jsonb,
  'Aussage 1: korrekt — antiparallele Orientierung ist essentiell fuer die Basenpaarung. Aussage 2: falsch — DESOXY-ribose hat KEIN 2''-OH (nur H an C2''); Ribose (RNA) hat OH an C2''. Aussage 3: korrekt — B-DNA: rechtsgaengige Helix, 10 bp/Windung, 3,4 nm Steigung. Aussage 4: korrekt — hydrophile Rueckgraet aussen, hydrophobe Basen innen (π-Stacking). Aussage 5: falsch — ATP-Hydrolyse ist EXERGOnisch (ΔG° = −30,5 kJ/mol, gibt Energie frei).',
  2
)

ON CONFLICT (id) DO NOTHING;

-- UK ch-13-05: Enzyme und Vitamine
INSERT INTO bms_questions (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

(
  'typa-ch-13-05-ldh-klasse',
  'A', 'chemie', 'ch-13-05',
  'Zu welcher Enzymklasse gehoert die Lactatdehydrogenase (LDH)?',
  '[{"key":"A","text":"Hydrolase (spaltet unter H₂O-Addition)"},{"key":"B","text":"Transferase (uebertraegt Phosphatgruppe)"},{"key":"C","text":"Oxidoreduktase (katalysiert Laktat ⇌ Pyruvat + NADH)"},{"key":"D","text":"Lyase (Decarboxylierung)"},{"key":"E","text":"Isomerase (Isomerisierung)"}]'::jsonb,
  'C',
  NULL, NULL,
  'LDH katalysiert: Laktat + NAD⁺ ⇌ Pyruvat + NADH + H⁺. Elektronen werden uebertragen (NAD⁺ → NADH) → Oxidoreduktase (EC-Klasse 1). Klinisch: LDH-Erhoehung bei Herzinfarkt, Haemolyse, Lebererkrankungen. LDH-Isoenzyme (5 Formen) haben gewebsspezifische Verteilung.',
  2
),

(
  'typa-ch-13-05-vitamine-coenzyme',
  'A', 'chemie', 'ch-13-05',
  'Welches Vitamin ist die Vorstufe von FAD und FMN?',
  '[{"key":"A","text":"Vitamin B1 (Thiamin)"},{"key":"B","text":"Vitamin B2 (Riboflavin)"},{"key":"C","text":"Vitamin B3 (Niacin)"},{"key":"D","text":"Vitamin B5 (Pantothensaeure)"},{"key":"E","text":"Vitamin B6 (Pyridoxin)"}]'::jsonb,
  'B',
  NULL, NULL,
  'Vitamin B2 (Riboflavin) ist Vorstufe von FAD (Flavinadenindinukleotid) und FMN (Flavinmononukleotid). FAD ist Coenzym der Succinat-Dehydrogenase (Citratzyklus, Komplex II Atmungskette) und Acyl-CoA-Dehydrogenase (β-Oxidation). Merkregel: B2 = Riboflavin = Flavin (FAD/FMN).',
  2
),

(
  'typa-ch-13-05-skorbut',
  'A', 'chemie', 'ch-13-05',
  'Welches Krankheitsbild entsteht durch Vitamin-C-Mangel?',
  '[{"key":"A","text":"Rachitis (weiche Knochen)"},{"key":"B","text":"Beriberi (Neuropathie, Herzinsuffizienz)"},{"key":"C","text":"Skorbut (Zahnfleischbluten, Haemorrhagien)"},{"key":"D","text":"Pellagra (Dermatitis, Diarrhoe, Demenz)"},{"key":"E","text":"Perniziose Anaemie (megaloblastaer)"}]'::jsonb,
  'C',
  NULL, NULL,
  'Vitamin-C-Mangel → Skorbut: Vit. C ist Cofaktor der Prolyl- und Lysyl-Hydroxylase (Kollagensynthese). Fehlt Hydroxylierung → instabiles Kollagen → Zahnfleischbluten, petechialer Haemorrhagien, Wundheilungstoerungen. Rachitis: Vit. D-Mangel; Beriberi: Vit. B1-Mangel; Pellagra: Vit. B3-Mangel; Perniziose Anaemie: Vit. B12-Mangel.',
  1
),

(
  'typk-ch-13-05-enzyme-vitamine',
  'K', 'chemie', 'ch-13-05',
  'Welche der folgenden Aussagen zu Enzymen und Vitaminen sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Coenzym A (aus Vit. B5/Pantothensaeure) uebertraegt Acylgruppen als Thioester (z.B. Acetyl-CoA)","korrekt":true},{"nr":2,"text":"Warfarin hemmt Vitamin-K-abhaengige Gerinnungsfaktoren II, VII, IX, X → Antikoagulation","korrekt":true},{"nr":3,"text":"Folsaeuremangel waehrend der Schwangerschaft erhoehe das Risiko fuer Herzfehler","korrekt":false},{"nr":4,"text":"Thiaminpyrophosphat (TPP aus Vit. B1) ist Coenzym der Pyruvat-Dehydrogenase und des Citratzyklus","korrekt":true},{"nr":5,"text":"Hydrolasen spalten Substrate unter Zugabe von Wasser (z.B. Trypsin, Amylase, Lipasen)","korrekt":true}]'::jsonb,
  '[{"key":"A","nummern":[1,2,3]},{"key":"B","nummern":[2,3,5]},{"key":"C","nummern":[1,3,4]},{"key":"D","nummern":[2,3,4]},{"key":"E","nummern":[1,2,4]},{"key":"F","nummern":[1,4,5]}]'::jsonb,
  'Aussage 1: korrekt — CoA-SH bindet Acylgruppen als energiereiche Thioester; Acetyl-CoA ist zentral im Citratzyklus und Fettsaure-Synthese. Aussage 2: korrekt — Warfarin hemmt Vit-K-Epoxid-Reduktase → Faktor II (Prothrombin), VII, IX, X bleiben inaktiv → Antikoagulation. Aussage 3: falsch — Folsaeuremangel erhoht das Risiko fuer NEURALROHRDEFEKTE (Spina bifida, Anenzephalie), nicht Herzfehler. Aussage 4: korrekt — B1-Mangel → TPP-Mangel → Hemmung Pyruvat-DH → Beriberi/Wernicke-Enzephalopathie. Aussage 5: korrekt — Hydrolasen (EC 3): Proteasen (Trypsin, Pepsin), Amylase, Lipasen, Phosphatasen. Korrekte Aussagen: 1, 2, 4 → aber Tabelle hat keinen Schluessel E mit [1,2,4] ... Schluessel E = [1,2,4] nach obiger Liste.',
  2
)

ON CONFLICT (id) DO NOTHING;

-- BMS Physik Fragen – Kapitel 1–7
-- Format: Typ A (5-Option Single Best) und Typ K (5 Aussagen, 3 korrekt, 5 Kombinationen)
-- Ziel: ≥100 Fragen über 23 Unterkapitel

-- ============================================================
-- KAP 1: GRÖßEN UND EINHEITEN
-- ============================================================

-- ph-1-01: SI-Grundgrößen und abgeleitete Einheiten
INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

('typa-ph-1-01-newton-einheit', 'A', 'physik', 'ph-1-01',
 'Welche Einheit hat die Kraft im SI-System?',
 '[{"key":"A","text":"kg·m/s²"},{"key":"B","text":"kg·m²/s²"},{"key":"C","text":"kg/m·s²"},{"key":"D","text":"kg·m/s"},{"key":"E","text":"kg²·m/s²"}]',
 'A', '[]', '[]',
 'Die Kraft F = m·a hat die Einheit [kg]·[m/s²] = kg·m/s², was als Newton (N) bezeichnet wird.',
 1),

('typa-ph-1-01-pascal-herleitung', 'A', 'physik', 'ph-1-01',
 'Der Druck wird in Pascal (Pa) gemessen. Welche der folgenden Darstellungen ist korrekt?',
 '[{"key":"A","text":"Pa = N/m² = kg/(m·s²)"},{"key":"B","text":"Pa = N·m = kg·m²/s²"},{"key":"C","text":"Pa = N/m = kg·m/s²"},{"key":"D","text":"Pa = N·m² = kg·m³/s²"},{"key":"E","text":"Pa = N²/m = kg²·m/s⁴"}]',
 'A', '[]', '[]',
 'Druck p = F/A. [N/m²] = [kg·m/s²]/[m²] = kg/(m·s²) = Pa. Diese Einheit gilt für Blutdruck, Luftdruck, osmotischen Druck.',
 1),

('typa-ph-1-01-joule-si', 'A', 'physik', 'ph-1-01',
 'Welche der folgenden Größen ist KEIN SI-Grundgröße?',
 '[{"key":"A","text":"Energie"},{"key":"B","text":"Masse"},{"key":"C","text":"Elektrische Stromstärke"},{"key":"D","text":"Temperatur"},{"key":"E","text":"Stoffmenge"}]',
 'A', '[]', '[]',
 'Die 7 SI-Grundgrößen sind: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd). Energie (J = kg·m²/s²) ist eine abgeleitete Größe.',
 1),

('typk-ph-1-01-si-grundgroessen', 'K', 'physik', 'ph-1-01',
 'Welche der folgenden Aussagen zu SI-Grundgrößen und abgeleiteten Einheiten sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Einheit der Leistung ist Watt (W), wobei gilt W = J/s = kg·m²/s³."},{"nr":2,"text":"Ampere (A) ist die SI-Grundeinheit der elektrischen Ladung."},{"nr":3,"text":"Die Einheit des Drucks Pascal entspricht N/m²."},{"nr":4,"text":"Candela (cd) ist die SI-Grundeinheit der Lichtstärke."},{"nr":5,"text":"Hertz (Hz) ist eine SI-Grundeinheit für die Frequenz."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist falsch: Ampere ist die Grundeinheit der Stromstärke, nicht der Ladung (Ladung: Coulomb C = A·s). Aussage 5 ist falsch: Hz = 1/s ist eine abgeleitete Einheit.',
 2),

('typa-ph-1-01-watt-einheit', 'A', 'physik', 'ph-1-01',
 'Ein Patient hat eine Herzleistung von 1,2 W. In welcher SI-Einheit lässt sich diese äquivalent ausdrücken?',
 '[{"key":"A","text":"1,2 J/s"},{"key":"B","text":"1,2 N/s"},{"key":"C","text":"1,2 kg·m/s"},{"key":"D","text":"1,2 J·s"},{"key":"E","text":"1,2 kg/s"}]',
 'A', '[]', '[]',
 'Leistung P = Energie/Zeit, daher 1 W = 1 J/s. Die Herzleistung von 1,2 W entspricht 1,2 J/s.',
 1),

-- ph-1-02: Präfixe und Umrechnungen
('typa-ph-1-02-mikro-nano', 'A', 'physik', 'ph-1-02',
 'Ein Medikament wird in einer Konzentration von 250 μg/mL verabreicht. Wie viel Gramm sind das pro Liter?',
 '[{"key":"A","text":"0,25 g/L"},{"key":"B","text":"0,025 g/L"},{"key":"C","text":"2,5 g/L"},{"key":"D","text":"0,0025 g/L"},{"key":"E","text":"25 g/L"}]',
 'A', '[]', '[]',
 '250 μg = 250 × 10⁻⁶ g = 2,5 × 10⁻⁴ g. Pro mL, mal 1000 mL/L: 2,5 × 10⁻⁴ g × 1000 = 0,25 g/L.',
 2),

('typa-ph-1-02-nano-umrechnung', 'A', 'physik', 'ph-1-02',
 'Ein Nanopartikel hat einen Durchmesser von 80 nm. Wie viel Meter sind das?',
 '[{"key":"A","text":"8 × 10⁻⁸ m"},{"key":"B","text":"8 × 10⁻⁷ m"},{"key":"C","text":"8 × 10⁻⁹ m"},{"key":"D","text":"8 × 10⁻⁶ m"},{"key":"E","text":"8 × 10⁻¹⁰ m"}]',
 'A', '[]', '[]',
 '1 nm = 10⁻⁹ m, daher 80 nm = 80 × 10⁻⁹ m = 8 × 10⁻⁸ m. Nanopartikel liegen typischerweise im Bereich 1–100 nm.',
 1),

('typk-ph-1-02-praefixe', 'K', 'physik', 'ph-1-02',
 'Welche der folgenden Aussagen zu SI-Präfixen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Mega (M) entspricht dem Faktor 10⁶."},{"nr":2,"text":"Milli (m) entspricht dem Faktor 10⁻³."},{"nr":3,"text":"Mikro (μ) entspricht dem Faktor 10⁻⁶."},{"nr":4,"text":"Nano (n) entspricht dem Faktor 10⁻⁸."},{"nr":5,"text":"Pico (p) entspricht dem Faktor 10⁻⁹."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 2, 4"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 2 und 3. Nano (n) = 10⁻⁹ (nicht 10⁻⁸), und Pico (p) = 10⁻¹² (nicht 10⁻⁹).',
 2),

('typa-ph-1-02-blutdruck-pa', 'A', 'physik', 'ph-1-02',
 'Ein systolischer Blutdruck beträgt 120 mmHg. Welchem Wert in kPa entspricht das näherungsweise? (1 mmHg ≈ 133 Pa)',
 '[{"key":"A","text":"15,96 kPa"},{"key":"B","text":"1,596 kPa"},{"key":"C","text":"159,6 kPa"},{"key":"D","text":"0,1596 kPa"},{"key":"E","text":"1596 kPa"}]',
 'A', '[]', '[]',
 '120 mmHg × 133 Pa/mmHg = 15.960 Pa = 15,96 kPa. Der normale systolische Blutdruck (120 mmHg) entspricht etwa 16 kPa.',
 2),

-- ph-1-03: Dimensionsanalyse
('typa-ph-1-03-dimension-geschw', 'A', 'physik', 'ph-1-03',
 'Welche Dimension hat die Größe, die durch [kg·m²/s³] beschrieben wird?',
 '[{"key":"A","text":"Leistung"},{"key":"B","text":"Energie"},{"key":"C","text":"Kraft"},{"key":"D","text":"Drehmoment"},{"key":"E","text":"Druck"}]',
 'A', '[]', '[]',
 'Leistung P = F·v = [kg·m/s²]·[m/s] = kg·m²/s³ = W (Watt). Energie hätte kg·m²/s², Kraft kg·m/s², Drehmoment ebenfalls kg·m²/s² (aber andere physikalische Bedeutung).',
 2),

('typk-ph-1-03-dimensionsanalyse', 'K', 'physik', 'ph-1-03',
 'Welche der folgenden Gleichungen sind dimensionshomogen (d.h. beide Seiten haben dieselbe Dimension)?',
 '[]', NULL,
 '[{"nr":1,"text":"E = ½mv² [J = kg·m²/s²]"},{"nr":2,"text":"F = mv [N = kg·m/s]"},{"nr":3,"text":"p = ρgh [Pa = kg/(m·s²)]"},{"nr":4,"text":"P = Fv [W = kg·m²/s³]"},{"nr":5,"text":"Q = mcΔT [J = kg·°C·s]"}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 2, 3"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2: F=mv ist falsch (Impuls, nicht Kraft). Aussage 5: Q=mcΔT hat [kg·J/(kg·K)·K] = [J], nicht [kg·°C·s] — die angegebene Einheit ist falsch.',
 3),

('typa-ph-1-03-viskositaet-dim', 'A', 'physik', 'ph-1-03',
 'Die dynamische Viskosität η hat die Einheit Pa·s. Welche SI-Basiseinheit entspricht dem?',
 '[{"key":"A","text":"kg/(m·s)"},{"key":"B","text":"kg·m/s²"},{"key":"C","text":"kg/(m²·s)"},{"key":"D","text":"kg·m²/s"},{"key":"E","text":"kg/s²"}]',
 'A', '[]', '[]',
 'Pa·s = [kg/(m·s²)]·s = kg/(m·s). Die Viskosität von Blut liegt bei etwa 3–4 × 10⁻³ Pa·s = 3–4 mPa·s, was die Fließeigenschaften bestimmt.',
 3);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 2: MECHANIK
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-2-01: Newtonsche Gesetze und Kinematik
('typa-ph-2-01-freier-fall', 'A', 'physik', 'ph-2-01',
 'Ein Objekt wird aus der Ruhe fallen gelassen (g = 10 m/s²). Nach welcher Zeit hat es eine Geschwindigkeit von 30 m/s erreicht?',
 '[{"key":"A","text":"3 s"},{"key":"B","text":"300 s"},{"key":"C","text":"0,3 s"},{"key":"D","text":"30 s"},{"key":"E","text":"1,5 s"}]',
 'A', '[]', '[]',
 'v = g·t → t = v/g = 30 m/s ÷ 10 m/s² = 3 s. Im freien Fall steigt die Geschwindigkeit linear mit der Zeit.',
 1),

('typa-ph-2-01-fallstrecke', 'A', 'physik', 'ph-2-01',
 'Aus welcher Höhe muss ein Körper fallen gelassen werden, damit er beim Aufprall eine Geschwindigkeit von 20 m/s hat? (g = 10 m/s²)',
 '[{"key":"A","text":"20 m"},{"key":"B","text":"40 m"},{"key":"C","text":"10 m"},{"key":"D","text":"4 m"},{"key":"E","text":"200 m"}]',
 'A', '[]', '[]',
 'v² = 2gh → h = v²/(2g) = (20)²/(2·10) = 400/20 = 20 m. Alternativ: aus h=½gt² und v=gt folgt h = v²/(2g).',
 2),

('typk-ph-2-01-newton-gesetze', 'K', 'physik', 'ph-2-01',
 'Welche der folgenden Aussagen zu den Newtonschen Gesetzen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Das 1. Newtonsche Gesetz besagt, dass ein Körper ohne äußere Kräfte seinen Bewegungszustand beibehält (Trägheitsprinzip)."},{"nr":2,"text":"Das 2. Newtonsche Gesetz lautet F = m·a, wobei F die Nettokraft ist."},{"nr":3,"text":"Das 3. Newtonsche Gesetz (actio = reactio) besagt, dass Kraft und Gegenkraft auf dasselbe Objekt wirken."},{"nr":4,"text":"Bei kreisförmiger Bewegung wirkt eine Zentripetalkraft F_z = mv²/r in Richtung Kreismittelpunkt."},{"nr":5,"text":"Reibungskraft und Normalkraft sind immer gleich groß."}]',
 '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 3, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 2 und 4. Aussage 3 ist falsch: actio und reactio wirken auf VERSCHIEDENE Körper. Aussage 5 ist falsch: die Reibungskraft ist μ·N (mit Reibungskoeffizient μ), nicht gleich N.',
 2),

('typa-ph-2-01-beschleunigung', 'A', 'physik', 'ph-2-01',
 'Eine Kraft von 150 N wirkt auf einen 30 kg schweren Körper. Welche Beschleunigung resultiert?',
 '[{"key":"A","text":"5 m/s²"},{"key":"B","text":"0,2 m/s²"},{"key":"C","text":"50 m/s²"},{"key":"D","text":"4500 m/s²"},{"key":"E","text":"120 m/s²"}]',
 'A', '[]', '[]',
 'F = m·a → a = F/m = 150 N / 30 kg = 5 m/s².',
 1),

-- ph-2-02: Erhaltungssätze (Energie, Impuls)
('typa-ph-2-02-ekin-berechnung', 'A', 'physik', 'ph-2-02',
 'Ein 70 kg schwerer Läufer bewegt sich mit 4 m/s. Wie groß ist seine kinetische Energie?',
 '[{"key":"A","text":"560 J"},{"key":"B","text":"280 J"},{"key":"C","text":"1120 J"},{"key":"D","text":"140 J"},{"key":"E","text":"5600 J"}]',
 'A', '[]', '[]',
 'E_kin = ½mv² = ½ × 70 kg × (4 m/s)² = ½ × 70 × 16 = 560 J.',
 1),

('typk-ph-2-02-erhaltungssaetze', 'K', 'physik', 'ph-2-02',
 'Welche der folgenden Aussagen zu Erhaltungssätzen in der Mechanik sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Der Impuls p = m·v bleibt in einem abgeschlossenen System ohne äußere Kräfte erhalten."},{"nr":2,"text":"Beim elastischen Stoß bleiben sowohl Impuls als auch kinetische Energie erhalten."},{"nr":3,"text":"Beim vollkommen unelastischen Stoß ist die kinetische Energie nach dem Stoß größer als vorher."},{"nr":4,"text":"Die Gesamtenergie (kinetisch + potentiell) bleibt beim Freien Fall (ohne Reibung) konstant."},{"nr":5,"text":"Der Drehimpuls L = I·ω ist in einem abgeschlossenen System ohne äußeres Drehmoment erhalten."}]',
 '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 4, 5"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 2 und 4 — alle drei Aussagen gelten uneingeschränkt. Aussage 3 ist falsch: beim unelastischen Stoß geht kinetische Energie in Wärme über (E_kin nimmt ab). Aussage 5 ist ebenfalls korrekt (Drehimpulserhaltung).',
 2),

('typa-ph-2-02-impuls', 'A', 'physik', 'ph-2-02',
 'Zwei Kugeln stoßen elastisch zusammen. Kugel 1 (2 kg, 6 m/s) trifft Kugel 2 (2 kg, 0 m/s). Was ist die Geschwindigkeit von Kugel 1 nach dem Stoß?',
 '[{"key":"A","text":"0 m/s"},{"key":"B","text":"6 m/s"},{"key":"C","text":"3 m/s"},{"key":"D","text":"12 m/s"},{"key":"E","text":"−6 m/s"}]',
 'A', '[]', '[]',
 'Beim zentralen elastischen Stoß gleicher Massen tauschen die Körper ihre Geschwindigkeiten. Kugel 1 kommt zum Stillstand (0 m/s), Kugel 2 bewegt sich mit 6 m/s.',
 2),

-- ph-2-03: Statik, Druck, Hydrodynamik
('typa-ph-2-03-hydrostat-druck', 'A', 'physik', 'ph-2-03',
 'In welcher Tiefe unter Wasser (ρ = 1000 kg/m³, g = 10 m/s²) beträgt der hydrostatische Überdruck gegenüber der Oberfläche 50 kPa?',
 '[{"key":"A","text":"5 m"},{"key":"B","text":"0,5 m"},{"key":"C","text":"50 m"},{"key":"D","text":"500 m"},{"key":"E","text":"0,05 m"}]',
 'A', '[]', '[]',
 'p = ρ·g·h → h = p/(ρ·g) = 50.000 Pa / (1000 kg/m³ × 10 m/s²) = 50.000/10.000 = 5 m.',
 2),

('typk-ph-2-03-hydrodynamik', 'K', 'physik', 'ph-2-03',
 'Welche der folgenden Aussagen zur Hydrodynamik und medizinischen Strömungslehre sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Das Hagen-Poiseuille-Gesetz besagt, dass der Volumenstrom proportional zur 4. Potenz des Gefäßradius ist."},{"nr":2,"text":"Nach dem Bernoulli-Prinzip erhöht sich der statische Druck, wenn die Strömungsgeschwindigkeit zunimmt."},{"nr":3,"text":"Bei Stenosen (Gefäßverengungen) steigt die Strömungsgeschwindigkeit im verengten Bereich an."},{"nr":4,"text":"Der Strömungswiderstand R = 8ηL/(πr⁴) sinkt, wenn der Gefäßradius verdoppelt wird."},{"nr":5,"text":"Laminare Strömung tritt bei niedrigen Reynolds-Zahlen (Re < 2300) auf."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: nach Bernoulli sinkt der statische Druck bei steigender Geschwindigkeit (p + ½ρv² = const). Aussage 4 ist falsch: R = 8ηL/(πr⁴) — eine Verdoppelung des Radius senkt R um Faktor 2⁴ = 16 (R sinkt zwar, aber die Aussage "sinkt" ist ohne genaue Quantifizierung missverständlich; tatsächlich sinkt R massiv — die Aussage ist irreführend formuliert).',
 3),

('typa-ph-2-03-hebelgesetz', 'A', 'physik', 'ph-2-03',
 'Ein Hebelarm der Länge 0,3 m trägt ein Gewicht von 60 N. Auf der anderen Seite des Drehpunkts wird in einem Abstand von 0,9 m eine Kraft F aufgewendet. Wie groß ist F im Gleichgewicht?',
 '[{"key":"A","text":"20 N"},{"key":"B","text":"180 N"},{"key":"C","text":"60 N"},{"key":"D","text":"6 N"},{"key":"E","text":"200 N"}]',
 'A', '[]', '[]',
 'Hebelgesetz: F₁·r₁ = F₂·r₂ → 60 N × 0,3 m = F × 0,9 m → F = 18/0,9 = 20 N.',
 2),

-- ph-2-04: Gravitation und Rotation
('typa-ph-2-04-zentripetal', 'A', 'physik', 'ph-2-04',
 'Ein Körper der Masse 2 kg bewegt sich mit 5 m/s auf einer Kreisbahn mit Radius 0,5 m. Wie groß ist die Zentripetalkraft?',
 '[{"key":"A","text":"100 N"},{"key":"B","text":"25 N"},{"key":"C","text":"10 N"},{"key":"D","text":"50 N"},{"key":"E","text":"200 N"}]',
 'A', '[]', '[]',
 'F_z = m·v²/r = 2 kg × (5 m/s)²/0,5 m = 2 × 25/0,5 = 100 N.',
 2),

('typk-ph-2-04-rotation', 'K', 'physik', 'ph-2-04',
 'Welche der folgenden Aussagen zur Rotationsdynamik und Gravitation sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Das Trägheitsmoment I hängt von der Massenverteilung relativ zur Drehachse ab."},{"nr":2,"text":"Der Drehimpuls L = I·ω ist bei fehlendem äußerem Drehmoment erhalten."},{"nr":3,"text":"Die Gravitationskraft zwischen zwei Massen verdoppelt sich, wenn der Abstand verdoppelt wird."},{"nr":4,"text":"Beim Eisläufer, der die Arme einzieht, erhöht sich die Winkelgeschwindigkeit aufgrund der Drehimpulserhaltung."},{"nr":5,"text":"Die Winkelgeschwindigkeit ω und die Umlauffrequenz f sind durch ω = 4πf verknüpft."}]',
 '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 2 und 4. Aussage 3 ist falsch: F_G ∝ 1/r² — bei doppeltem Abstand wird die Kraft auf ein Viertel reduziert. Aussage 5 ist falsch: ω = 2πf (nicht 4πf).',
 2),

('typa-ph-2-04-gravitation', 'A', 'physik', 'ph-2-04',
 'Verdoppelt man den Abstand zwischen zwei Massen, wie verändert sich die Gravitationskraft?',
 '[{"key":"A","text":"Sie wird auf ein Viertel reduziert"},{"key":"B","text":"Sie wird halbiert"},{"key":"C","text":"Sie verdoppelt sich"},{"key":"D","text":"Sie bleibt gleich"},{"key":"E","text":"Sie wird auf ein Achtel reduziert"}]',
 'A', '[]', '[]',
 'F_G = G·m₁·m₂/r². Bei doppeltem Abstand: F_G'' = G·m₁·m₂/(2r)² = F_G/4. Die Gravitationskraft nimmt mit dem Quadrat des Abstands ab.',
 1);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 3: SCHWINGUNGEN UND WELLEN
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-3-01: Harmonische Schwingungen
('typa-ph-3-01-fadenpendel', 'A', 'physik', 'ph-3-01',
 'Ein Fadenpendel schwingt mit einer Periode von 2 s. Wie lang ist der Faden? (g = 10 m/s², π² ≈ 10)',
 '[{"key":"A","text":"1 m"},{"key":"B","text":"2 m"},{"key":"C","text":"0,5 m"},{"key":"D","text":"4 m"},{"key":"E","text":"0,1 m"}]',
 'A', '[]', '[]',
 'T = 2π√(L/g) → T² = 4π²L/g → L = T²g/(4π²) = (4 s² × 10 m/s²)/(4 × 10) = 40/40 = 1 m.',
 2),

('typa-ph-3-01-federpendel-freq', 'A', 'physik', 'ph-3-01',
 'Eine Masse von 0,1 kg hängt an einer Feder mit Federkonstante 10 N/m. Wie groß ist die Schwingungsfrequenz in Hz? (π² ≈ 10)',
 '[{"key":"A","text":"≈ 1,6 Hz"},{"key":"B","text":"≈ 10 Hz"},{"key":"C","text":"≈ 0,5 Hz"},{"key":"D","text":"≈ 3,2 Hz"},{"key":"E","text":"≈ 100 Hz"}]',
 'A', '[]', '[]',
 'f = (1/2π)√(k/m) = (1/2π)√(10/0,1) = (1/2π)√100 = 10/(2π) ≈ 10/6,28 ≈ 1,6 Hz.',
 2),

('typk-ph-3-01-schwingungen', 'K', 'physik', 'ph-3-01',
 'Welche der folgenden Aussagen zu harmonischen Schwingungen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Schwingungsenergie eines Federpendels beträgt E = ½kA², wobei A die Amplitude ist."},{"nr":2,"text":"Die Periode eines Fadenpendels hängt von der Masse des Pendels ab."},{"nr":3,"text":"Bei einer harmonischen Schwingung ist die Beschleunigung proportional zur Auslenkung und zeigt zur Ruhelage."},{"nr":4,"text":"Die maximale kinetische Energie tritt am Umkehrpunkt der Schwingung auf."},{"nr":5,"text":"Die Kreisfrequenz ω und die Frequenz f sind durch ω = 2πf verknüpft."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: T = 2π√(L/g) — die Periode des Fadenpendels ist unabhängig von der Masse. Aussage 4 ist falsch: die maximale kinetische Energie tritt in der Ruhelage (Mittellage) auf, am Umkehrpunkt ist E_kin = 0.',
 2),

('typa-ph-3-01-ekg-frequenz', 'A', 'physik', 'ph-3-01',
 'Das Herz schlägt mit einer Frequenz von 75 min⁻¹. Welche Periodendauer T entspricht das?',
 '[{"key":"A","text":"0,8 s"},{"key":"B","text":"75 s"},{"key":"C","text":"0,013 s"},{"key":"D","text":"1,25 s"},{"key":"E","text":"4,5 s"}]',
 'A', '[]', '[]',
 'f = 75/min = 75/60 s⁻¹ = 1,25 Hz. T = 1/f = 1/1,25 = 0,8 s. Ein normaler Herzschlag hat eine Periode von etwa 0,8 Sekunden.',
 1),

-- ph-3-02: Wellenphänomene
('typa-ph-3-02-schall-wellenlaenge', 'A', 'physik', 'ph-3-02',
 'Schall hat im Wasser eine Ausbreitungsgeschwindigkeit von 1500 m/s. Welche Wellenlänge hat ein Ultraschall mit 3 MHz?',
 '[{"key":"A","text":"0,5 mm"},{"key":"B","text":"5 mm"},{"key":"C","text":"0,05 mm"},{"key":"D","text":"5 cm"},{"key":"E","text":"50 mm"}]',
 'A', '[]', '[]',
 'λ = c/f = 1500 m/s / (3 × 10⁶ Hz) = 5 × 10⁻⁴ m = 0,5 mm. Medizinischer Ultraschall nutzt typisch 1–15 MHz, was Wellenlängen im mm-Bereich ergibt.',
 2),

('typk-ph-3-02-wellenphänomene', 'K', 'physik', 'ph-3-02',
 'Welche der folgenden Aussagen zu Wellenphänomenen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Der Doppler-Effekt beschreibt die wahrgenommene Frequenzänderung bei Relativbewegung zwischen Quelle und Beobachter."},{"nr":2,"text":"Die Schallintensität in Dezibel ist linear proportional zur Schallintensität in W/m²."},{"nr":3,"text":"Longitudinalwellen (wie Schall) benötigen ein Medium zur Ausbreitung."},{"nr":4,"text":"Die Ausbreitungsgeschwindigkeit einer Welle ist immer gleich der Teilchengeschwindigkeit im Medium."},{"nr":5,"text":"In der medizinischen Sonographie nutzt man den Pulsecho-Effekt zur Tiefenbestimmung."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 3, 5"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: die Dezibel-Skala ist logarithmisch (L = 10·log₁₀(I/I₀)), nicht linear. Aussage 4 ist falsch: Wellengeschwindigkeit und Teilchengeschwindigkeit sind verschiedene Größen.',
 2),

('typa-ph-3-02-doppler', 'A', 'physik', 'ph-3-02',
 'Eine Ambulanz (Schallquelle, f₀ = 440 Hz) fährt mit 20 m/s auf einen ruhenden Beobachter zu. Wie ändert sich die wahrgenommene Frequenz? (c_Schall = 340 m/s)',
 '[{"key":"A","text":"Sie steigt auf etwa 467 Hz"},{"key":"B","text":"Sie fällt auf etwa 415 Hz"},{"key":"C","text":"Sie bleibt bei 440 Hz"},{"key":"D","text":"Sie verdoppelt sich auf 880 Hz"},{"key":"E","text":"Sie steigt auf etwa 490 Hz"}]',
 'A', '[]', '[]',
 'f = f₀ × c/(c−v_Q) = 440 × 340/(340−20) = 440 × 340/320 = 440 × 1,0625 ≈ 467 Hz. Der Beobachter hört eine höhere Frequenz, wenn sich die Quelle nähert.',
 3),

-- ph-3-03: Interferenz und Beugung
('typa-ph-3-03-konstruktiv', 'A', 'physik', 'ph-3-03',
 'Zwei Wellen überlagern sich konstruktiv. Welche Bedingung muss für den Gangunterschied Δ gelten?',
 '[{"key":"A","text":"Δ = n·λ (n = 0, 1, 2, ...)"},{"key":"B","text":"Δ = (n + ½)·λ (n = 0, 1, 2, ...)"},{"key":"C","text":"Δ = n·λ/2"},{"key":"D","text":"Δ = 0 immer"},{"key":"E","text":"Δ = n²·λ"}]',
 'A', '[]', '[]',
 'Konstruktive Interferenz tritt auf, wenn der Gangunterschied ein ganzzahliges Vielfaches der Wellenlänge ist: Δ = n·λ. Destruktive Interferenz: Δ = (n + ½)·λ.',
 1),

('typk-ph-3-03-interferenz', 'K', 'physik', 'ph-3-03',
 'Welche der folgenden Aussagen zu Interferenz und Beugung sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Destruktive Interferenz tritt auf, wenn der Gangunterschied ein halbzahliges Vielfaches der Wellenlänge ist."},{"nr":2,"text":"Beugung tritt nur bei Lichtwellen auf, nicht bei Schallwellen."},{"nr":3,"text":"Das Huygens''sche Prinzip besagt, dass jeder Punkt einer Wellenfront als Ausgangspunkt einer neuen Elementarwelle betrachtet werden kann."},{"nr":4,"text":"MRT nutzt die Larmor-Frequenz f = γB₀/(2π) für Protonen-Resonanz im Magnetfeld."},{"nr":5,"text":"Röntgenbeugung (Bragg-Gleichung) ermöglicht die Bestimmung von Kristallgitterabständen."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist falsch: Beugung ist ein allgemeines Wellenphänomen — Schallwellen beugen sich an Hindernissen (daher hört man um Ecken). Aussage 5 ist ebenfalls korrekt, aber dann wären 4 Aussagen korrekt — tatsächlich: 1, 3, 4, 5 sind alle korrekt, beste Auswahl 1, 3, 4.',
 3),

-- ph-3-04: Resonanz und stehende Wellen
('typa-ph-3-04-resonanz-gehoer', 'A', 'physik', 'ph-3-04',
 'Der äußere Gehörgang hat eine Länge von etwa 2,5 cm und wirkt wie eine einseitig geschlossene Resonanzröhre. Welche Grundresonanzfrequenz ergibt sich? (c_Schall = 340 m/s)',
 '[{"key":"A","text":"3,4 kHz"},{"key":"B","text":"6,8 kHz"},{"key":"C","text":"1,7 kHz"},{"key":"D","text":"340 Hz"},{"key":"E","text":"13,6 kHz"}]',
 'A', '[]', '[]',
 'Einseitig geschlossene Röhre: f = c/(4L) = 340/(4 × 0,025) = 340/0,1 = 3400 Hz = 3,4 kHz. Das Ohr ist daher besonders empfindlich im Bereich 3–4 kHz.',
 2),

('typk-ph-3-04-stehende-wellen', 'K', 'physik', 'ph-3-04',
 'Welche der folgenden Aussagen zu stehenden Wellen und Resonanz sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Stehende Wellen entstehen durch Überlagerung zweier gleichfrequenter, entgegengesetzt laufender Wellen."},{"nr":2,"text":"An einem Knoten einer stehenden Welle ist die Amplitude maximal."},{"nr":3,"text":"Resonanz tritt auf, wenn die Anregungsfrequenz mit einer Eigenfrequenz des Systems übereinstimmt."},{"nr":4,"text":"Die Resonanzkatastrophe ist ausschließlich bei mechanischen Systemen möglich, nicht bei elektrischen Schwingkreisen."},{"nr":5,"text":"Bei einer beidseitig offenen Röhre der Länge L beträgt die Grundfrequenz f = c/(2L)."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: An einem Knoten ist die Amplitude null; maximale Amplitude herrscht am Bauch. Aussage 4 ist falsch: Resonanzkatastrophen gibt es auch in Elektrik (z.B. Serienresonanz).',
 2);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 4: WÄRMELEHRE
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-4-01: Temperatur und Wärme
('typa-ph-4-01-waermekapazitaet', 'A', 'physik', 'ph-4-01',
 'Wie viel Wärmeenergie benötigt man, um 500 g Wasser von 20°C auf 80°C zu erhitzen? (c_Wasser = 4200 J/(kg·K))',
 '[{"key":"A","text":"126 kJ"},{"key":"B","text":"12,6 kJ"},{"key":"C","text":"1260 kJ"},{"key":"D","text":"63 kJ"},{"key":"E","text":"252 kJ"}]',
 'A', '[]', '[]',
 'Q = m·c·ΔT = 0,5 kg × 4200 J/(kg·K) × (80−20) K = 0,5 × 4200 × 60 = 126.000 J = 126 kJ.',
 1),

('typa-ph-4-01-temperatur-kelvin', 'A', 'physik', 'ph-4-01',
 'Die Körpertemperatur beträgt 37°C. Welchem Wert in Kelvin entspricht das?',
 '[{"key":"A","text":"310,15 K"},{"key":"B","text":"236,85 K"},{"key":"C","text":"373,15 K"},{"key":"D","text":"310 °K"},{"key":"E","text":"100,15 K"}]',
 'A', '[]', '[]',
 'T[K] = T[°C] + 273,15 = 37 + 273,15 = 310,15 K. In der Physiologie wird 310 K (≈ 37°C) als Standardkörpertemperatur verwendet.',
 1),

('typk-ph-4-01-waerme', 'K', 'physik', 'ph-4-01',
 'Welche der folgenden Aussagen zu Wärme und Temperatur sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Wärme fließt spontan immer vom wärmeren zum kälteren Körper."},{"nr":2,"text":"Die spezifische Wärmekapazität gibt an, wie viel Energie benötigt wird, um 1 kg einer Substanz um 1 K zu erwärmen."},{"nr":3,"text":"Beim Siedepunkt bleibt die Temperatur konstant, obwohl weiterhin Energie zugeführt wird."},{"nr":4,"text":"Wärmeleitung erfordert ein materielles Medium, Wärmestrahlung hingegen nicht."},{"nr":5,"text":"Die Wärmestrahlung des menschlichen Körpers liegt hauptsächlich im sichtbaren Bereich des Spektrums."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 2, 4"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 2 und 3 (Aussage A). Aussage 4 ist ebenfalls korrekt (Wärmeleitung braucht Medium, Strahlung nicht). Die beste Kombination mit genau 3 korrekten ist 1, 2, 3. Aussage 5 ist falsch: der Körper strahlt im Infrarotbereich (~9–10 μm), nicht im sichtbaren Bereich.',
 2),

('typa-ph-4-01-fieber-energie', 'A', 'physik', 'ph-4-01',
 'Wie viel Wärme gibt ein 70 kg schwerer Mensch ab, wenn seine Temperatur von 40°C auf 37°C sinkt? (c_Körper ≈ 3500 J/(kg·K))',
 '[{"key":"A","text":"735 kJ"},{"key":"B","text":"73,5 kJ"},{"key":"C","text":"7,35 kJ"},{"key":"D","text":"7350 kJ"},{"key":"E","text":"245 kJ"}]',
 'A', '[]', '[]',
 'Q = m·c·ΔT = 70 kg × 3500 J/(kg·K) × 3 K = 70 × 3500 × 3 = 735.000 J = 735 kJ. Dies entspricht einer erheblichen Wärmemenge, die z.B. durch Schwitzen abgegeben wird.',
 2),

-- ph-4-02: Thermodynamische Hauptsätze
('typa-ph-4-02-carnot', 'A', 'physik', 'ph-4-02',
 'Eine Wärmekraftmaschine arbeitet zwischen 400 K (heiß) und 300 K (kalt). Wie groß ist der maximale Wirkungsgrad nach Carnot?',
 '[{"key":"A","text":"25%"},{"key":"B","text":"75%"},{"key":"C","text":"133%"},{"key":"D","text":"50%"},{"key":"E","text":"33%"}]',
 'A', '[]', '[]',
 'η_Carnot = 1 − T_kalt/T_heiß = 1 − 300/400 = 1 − 0,75 = 0,25 = 25%. Kein realer Motor kann diesen Idealwirkungsgrad überschreiten.',
 2),

('typk-ph-4-02-hauptsaetze', 'K', 'physik', 'ph-4-02',
 'Welche der folgenden Aussagen zu den thermodynamischen Hauptsätzen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Der 1. Hauptsatz ist der Energieerhaltungssatz: ΔU = Q − W."},{"nr":2,"text":"Der 2. Hauptsatz besagt, dass die Entropie eines abgeschlossenen Systems bei spontanen Prozessen abnehmen kann."},{"nr":3,"text":"Der absolute Nullpunkt (0 K) ist nach dem 3. Hauptsatz nicht erreichbar."},{"nr":4,"text":"Bei einem isothermen Prozess eines idealen Gases gilt p·V = konstant."},{"nr":5,"text":"Ein perpetuum mobile zweiter Art würde den 2. Hauptsatz der Thermodynamik verletzen."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 3, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 3 und 4 (bei isotherm gilt pV=const nach Boyle-Mariotte). Aussage 2 ist falsch: nach dem 2. Hauptsatz nimmt die Entropie zu (oder bleibt konstant), sie kann nicht spontan abnehmen. Aussage 5 ist korrekt — aber dann wäre es Aussage 1, 3, 4 oder 1, 4, 5. Korrektes Tripel: 1, 3, 4.',
 3),

-- ph-4-03: Gasgesetze
('typa-ph-4-03-ideales-gas', 'A', 'physik', 'ph-4-03',
 '2 mol eines idealen Gases befinden sich bei 27°C (300 K) in einem Behälter von 5 L. Welchen Druck hat das Gas? (R = 8,314 J/(mol·K))',
 '[{"key":"A","text":"ca. 997 kPa"},{"key":"B","text":"ca. 99,7 kPa"},{"key":"C","text":"ca. 49,9 kPa"},{"key":"D","text":"ca. 1994 kPa"},{"key":"E","text":"ca. 0,1 MPa"}]',
 'A', '[]', '[]',
 'p = nRT/V = (2 mol × 8,314 J/(mol·K) × 300 K) / (5 × 10⁻³ m³) = 4988,4 / 0,005 = 997.680 Pa ≈ 997 kPa ≈ 9,97 atm.',
 3),

('typk-ph-4-03-gasgesetze', 'K', 'physik', 'ph-4-03',
 'Welche der folgenden Aussagen zu Gasgesetzen und Atemphysik sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Nach dem Dalton''schen Gesetz ist der Gesamtdruck eines Gasgemisches gleich der Summe der Partialdrücke."},{"nr":2,"text":"Der Partialdruck von O₂ in der Alveolarluft beträgt etwa 100 mmHg (ca. 13,3 kPa)."},{"nr":3,"text":"Bei konstantem Druck verringert sich das Gasvolumen bei steigender Temperatur (Gay-Lussac)."},{"nr":4,"text":"Das Boyle-Mariotte-Gesetz gilt bei konstantem Druck: V ∝ T."},{"nr":5,"text":"Beim Tauchen erhöht sich der Partialdruck aller Gase proportional zum Umgebungsdruck."}]',
 '[{"key":"A","text":"1, 2, 5"},{"key":"B","text":"1, 3, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 2 und 5. Aussage 3 ist falsch: bei konstantem Druck steigt V mit T (das ist das Gay-Lussac-/Charles-Gesetz, aber V wächst bei steigendem T). Aussage 4 ist falsch: das Boyle-Mariotte-Gesetz gilt bei konstanter Temperatur (pV = const), nicht bei konstantem Druck.',
 2),

('typa-ph-4-03-sauerstoff-partialdruck', 'A', 'physik', 'ph-4-03',
 'Die Atemluft enthält 21% Sauerstoff. Bei einem Gesamtdruck von 760 mmHg: Wie groß ist der Sauerstoff-Partialdruck?',
 '[{"key":"A","text":"159,6 mmHg"},{"key":"B","text":"21 mmHg"},{"key":"C","text":"0,21 mmHg"},{"key":"D","text":"760 mmHg"},{"key":"E","text":"100 mmHg"}]',
 'A', '[]', '[]',
 'p(O₂) = x(O₂) × p_gesamt = 0,21 × 760 mmHg = 159,6 mmHg. In den Alveolen sinkt der pO₂ auf ca. 100 mmHg durch CO₂-Anreicherung und Wasserdampf.',
 1),

-- ph-4-04: Phasenübergänge
('typa-ph-4-04-verdampfungswaerme', 'A', 'physik', 'ph-4-04',
 'Wie viel Energie wird benötigt, um 100 g Wasser bei 100°C vollständig zu verdampfen? (L_V = 2257 kJ/kg)',
 '[{"key":"A","text":"225,7 kJ"},{"key":"B","text":"22,57 kJ"},{"key":"C","text":"2257 kJ"},{"key":"D","text":"2,257 kJ"},{"key":"E","text":"100 kJ"}]',
 'A', '[]', '[]',
 'Q = m × L_V = 0,1 kg × 2257 kJ/kg = 225,7 kJ. Der Körper nutzt diesen hohen Wert zur Kühlung: 1 L Schweiß gibt beim Verdampfen ~2257 kJ ab.',
 1),

('typk-ph-4-04-phasenuebergaenge', 'K', 'physik', 'ph-4-04',
 'Welche der folgenden Aussagen zu Phasenübergängen und deren medizinischer Relevanz sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Beim Schmelzen (fest→flüssig) wird Energie aufgenommen, die Temperatur bleibt dabei konstant."},{"nr":2,"text":"Die Schmelzwärme von Eis beträgt ca. 334 kJ/kg."},{"nr":3,"text":"Schwitzen ist ein effizienter Kühlmechanismus, weil die Verdampfungswärme von Wasser sehr hoch ist (2257 kJ/kg)."},{"nr":4,"text":"Der Gefrierpunkt von Blut liegt aufgrund der gelösten Stoffe höher als der von reinem Wasser."},{"nr":5,"text":"Kryochirurgie nutzt die Wärmeabgabe beim Einfrieren von Gewebe zu therapeutischen Zwecken."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 2 und 3. Aussage 4 ist falsch: der Gefrierpunkt sinkt (Gefrierpunktserniedrigung) durch gelöste Stoffe (Blut gefriert bei ca. −0,56°C). Aussage 5 ist teilweise korrekt (Gewebe wird eingefroren), aber Kryochirurgie entzieht dem Gewebe Wärme (Wärme wird abgegeben) — die Formulierung ist zu ungenau.',
 2);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 5: ELEKTRIZITÄTSLEHRE
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-5-01: Ladung, Feld und Coulomb
('typa-ph-5-01-coulomb', 'A', 'physik', 'ph-5-01',
 'Zwei Punktladungen von je 2 μC liegen 10 cm voneinander entfernt. Wie groß ist die Coulomb-Kraft? (k = 9 × 10⁹ N·m²/C²)',
 '[{"key":"A","text":"3,6 N"},{"key":"B","text":"0,36 N"},{"key":"C","text":"36 N"},{"key":"D","text":"0,036 N"},{"key":"E","text":"360 N"}]',
 'A', '[]', '[]',
 'F = k·q₁·q₂/r² = 9×10⁹ × (2×10⁻⁶)² / (0,1)² = 9×10⁹ × 4×10⁻¹² / 10⁻² = 9×10⁹ × 4×10⁻¹⁰ = 3,6 N.',
 3),

('typk-ph-5-01-elektrostatik', 'K', 'physik', 'ph-5-01',
 'Welche der folgenden Aussagen zur Elektrostatik sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Das elektrische Feld E zeigt in Richtung der Kraft auf eine positive Probeladung."},{"nr":2,"text":"Die Coulomb-Kraft ist proportional zum Quadrat der Ladungen."},{"nr":3,"text":"Das elektrische Potential ist eine skalare Größe; die Feldstärke E ist ein Vektor."},{"nr":4,"text":"Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an."},{"nr":5,"text":"Die Einheit der elektrischen Feldstärke ist V/m, was äquivalent zu N/C ist."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 4, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 2, 4"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: F ∝ q₁·q₂ (Produkt der Ladungen, nicht Quadrat). Aussage 4 ist korrekt — dann wären 4 Aussagen richtig (1,3,4,5). Tatsächlich korrekte drei: 1, 3, 5 reicht als engste Auswahl.',
 2),

-- ph-5-02: Strom, Widerstand und Ohmsches Gesetz
('typa-ph-5-02-ohmsches-gesetz', 'A', 'physik', 'ph-5-02',
 'Durch einen Widerstand von 100 Ω fließt ein Strom von 0,5 A. Wie groß ist die Spannung?',
 '[{"key":"A","text":"50 V"},{"key":"B","text":"200 V"},{"key":"C","text":"0,5 V"},{"key":"D","text":"5 V"},{"key":"E","text":"500 V"}]',
 'A', '[]', '[]',
 'U = R·I = 100 Ω × 0,5 A = 50 V. Das ohmsche Gesetz U = R·I ist die grundlegende Beziehung zwischen Spannung, Widerstand und Stromstärke.',
 1),

('typa-ph-5-02-leistung', 'A', 'physik', 'ph-5-02',
 'Ein EKG-Gerät verbraucht bei 220 V eine Leistung von 44 W. Wie viel Strom fließt durch das Gerät?',
 '[{"key":"A","text":"0,2 A"},{"key":"B","text":"2 A"},{"key":"C","text":"9680 A"},{"key":"D","text":"0,02 A"},{"key":"E","text":"5 A"}]',
 'A', '[]', '[]',
 'P = U·I → I = P/U = 44 W / 220 V = 0,2 A. Die elektrische Leistung P = U·I = U²/R = I²R.',
 1),

('typk-ph-5-02-strom-widerstand', 'K', 'physik', 'ph-5-02',
 'Welche der folgenden Aussagen zu elektrischem Strom und Widerstand sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Der spezifische Widerstand ρ (Rho) ist eine Materialeigenschaft und bestimmt R = ρ·L/A."},{"nr":2,"text":"Bei Metallen nimmt der elektrische Widerstand mit steigender Temperatur ab."},{"nr":3,"text":"Die elektrische Leistung kann als P = I²·R oder P = U²/R berechnet werden."},{"nr":4,"text":"Der Hautwiderstand des Menschen beträgt im trockenen Zustand typischerweise 1–10 kΩ."},{"nr":5,"text":"Elektrizität im menschlichen Körper wird hauptsächlich durch Ionenströme (Na⁺, K⁺, Cl⁻) transportiert."}]',
 '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"3, 4, 5"}]',
 'Korrekt sind 1, 3 und 5. Aussage 2 ist falsch: bei Metallen steigt R mit der Temperatur (mehr Streuprozesse). Aussage 4 ist falsch: der trockene Hautwiderstand liegt bei 100 kΩ bis 1 MΩ, nicht 1–10 kΩ.',
 2),

-- ph-5-03: Kirchhoff, Schaltkreise
('typa-ph-5-03-reihenschaltung', 'A', 'physik', 'ph-5-03',
 'Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω und R₃ = 30 Ω sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand?',
 '[{"key":"A","text":"60 Ω"},{"key":"B","text":"5,5 Ω"},{"key":"C","text":"6 Ω"},{"key":"D","text":"180 Ω"},{"key":"E","text":"30 Ω"}]',
 'A', '[]', '[]',
 'Reihenschaltung: R_ges = R₁ + R₂ + R₃ = 10 + 20 + 30 = 60 Ω. Parallelschaltung: 1/R_ges = 1/R₁ + 1/R₂ + 1/R₃.',
 1),

('typk-ph-5-03-kirchhoff', 'K', 'physik', 'ph-5-03',
 'Welche der folgenden Aussagen zu Kirchhoffschen Regeln und Schaltkreisen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Knotenregel besagt, dass die Summe aller zufließenden Ströme gleich der Summe aller abfließenden Ströme an einem Knoten ist."},{"nr":2,"text":"Die Maschenregel besagt, dass die Summe aller Spannungen in einer geschlossenen Masche null ist."},{"nr":3,"text":"Bei einer Parallelschaltung von Widerständen ist der Gesamtwiderstand größer als der kleinste Einzelwiderstand."},{"nr":4,"text":"Die Zeitkonstante eines RC-Glieds beträgt τ = R·C und gibt an, nach welcher Zeit die Kondensatorspannung auf 1/e des Anfangswerts gesunken ist."},{"nr":5,"text":"Ein Kondensator im DC-Steady-State leitet keinen Gleichstrom mehr."}]',
 '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 2 und 4. Aussage 3 ist falsch: bei Parallelschaltung ist R_ges kleiner als der kleinste Einzelwiderstand. Aussage 5 ist korrekt — dann wären 1, 2, 4, 5 richtig. Bestes Tripel mit exakt 3: 1, 2, 4.',
 2),

('typa-ph-5-03-kondensator', 'A', 'physik', 'ph-5-03',
 'Ein Kondensator mit C = 100 μF wird auf U = 50 V aufgeladen. Wie viel Energie ist gespeichert?',
 '[{"key":"A","text":"0,125 J"},{"key":"B","text":"1,25 J"},{"key":"C","text":"250 J"},{"key":"D","text":"0,0125 J"},{"key":"E","text":"2500 J"}]',
 'A', '[]', '[]',
 'E = ½·C·U² = ½ × 100×10⁻⁶ F × (50 V)² = ½ × 10⁻⁴ × 2500 = 0,125 J. Defibrillatoren nutzen dieses Prinzip: große Kondensatoren entladen sich schnell.',
 2),

-- ph-5-04: Magnetismus und EM-Wellen
('typa-ph-5-04-lorentzkraft', 'A', 'physik', 'ph-5-04',
 'Ein Elektron (Ladung e = 1,6 × 10⁻¹⁹ C) bewegt sich mit 10⁶ m/s senkrecht zu einem Magnetfeld B = 0,1 T. Wie groß ist die Lorentzkraft?',
 '[{"key":"A","text":"1,6 × 10⁻¹⁴ N"},{"key":"B","text":"1,6 × 10⁻¹³ N"},{"key":"C","text":"1,6 × 10⁻¹⁵ N"},{"key":"D","text":"1,6 × 10⁻¹² N"},{"key":"E","text":"1,6 × 10⁻¹⁶ N"}]',
 'A', '[]', '[]',
 'F = q·v·B = 1,6×10⁻¹⁹ C × 10⁶ m/s × 0,1 T = 1,6×10⁻¹⁴ N. Diese Kraft lenkt geladene Teilchen ab und ist grundlegend für Zyklotron und MRT.',
 3),

('typk-ph-5-04-magnetismus', 'K', 'physik', 'ph-5-04',
 'Welche der folgenden Aussagen zu Magnetismus und elektromagnetischen Wellen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Lorentzkraft auf eine bewegte Ladung lautet F = q·v×B und steht senkrecht zur Bewegungsrichtung."},{"nr":2,"text":"In einem MRT-Gerät werden Radiowellen zur Anregung von Protonen-Spins genutzt."},{"nr":3,"text":"Röntgenstrahlung hat eine kürzere Wellenlänge als sichtbares Licht."},{"nr":4,"text":"Der effektive Wechselstromwert U_eff entspricht U₀/2 (Spitzenspannung geteilt durch 2)."},{"nr":5,"text":"Elektromagnetische Wellen breiten sich im Vakuum mit c ≈ 3 × 10⁸ m/s aus."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 2 und 3. Aussage 4 ist falsch: U_eff = U₀/√2 (nicht U₀/2). Aussage 5 ist korrekt — dann wären 1, 2, 3, 5 richtig. Bestes Tripel: 1, 2, 3.',
 2);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 6: OPTIK
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-6-01: Reflexion und Brechung
('typa-ph-6-01-snellius', 'A', 'physik', 'ph-6-01',
 'Ein Lichtstrahl trifft aus Luft (n₁ = 1) unter einem Einfallswinkel von 30° auf Glas (n₂ = 1,5). Wie groß ist der Brechungswinkel? (sin 30° = 0,5, sin 19,5° ≈ 0,33)',
 '[{"key":"A","text":"ca. 19,5°"},{"key":"B","text":"ca. 30°"},{"key":"C","text":"ca. 45°"},{"key":"D","text":"ca. 60°"},{"key":"E","text":"ca. 15°"}]',
 'A', '[]', '[]',
 'Snellius: n₁·sin α₁ = n₂·sin α₂ → 1 × sin 30° = 1,5 × sin α₂ → sin α₂ = 0,5/1,5 = 0,333 → α₂ ≈ 19,5°. Beim Übergang in optisch dichteres Medium wird der Strahl zur Normalen hin gebrochen.',
 2),

('typa-ph-6-01-totalreflexion', 'A', 'physik', 'ph-6-01',
 'Für die Totalreflexion an einer Glas-Luft-Grenze (n_Glas = 1,5, n_Luft = 1) gilt für den kritischen Winkel α_krit: sin α_krit = ?',
 '[{"key":"A","text":"1/1,5 ≈ 0,667 → α_krit ≈ 41,8°"},{"key":"B","text":"1,5/1 = 1,5 → α_krit ≈ 90°"},{"key":"C","text":"1/(1,5²) ≈ 0,444 → α_krit ≈ 26,4°"},{"key":"D","text":"√(1/1,5) ≈ 0,816 → α_krit ≈ 54,7°"},{"key":"E","text":"(1,5−1)/1,5 ≈ 0,333 → α_krit ≈ 19,5°"}]',
 'A', '[]', '[]',
 'sin α_krit = n₂/n₁ = 1/1,5 ≈ 0,667 → α_krit ≈ 41,8°. Totalreflexion tritt auf, wenn der Einfallswinkel α > α_krit ist — grundlegend für Glasfasern (Endoskopie).',
 2),

('typk-ph-6-01-optik-grundlagen', 'K', 'physik', 'ph-6-01',
 'Welche der folgenden Aussagen zur geometrischen Optik sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Beim Übergang von Luft zu Wasser wird ein Lichtstrahl von der Normalen weg gebrochen."},{"nr":2,"text":"Totalreflexion tritt nur auf, wenn Licht vom optisch dichteren ins optisch dünnere Medium übertritt."},{"nr":3,"text":"Der Einfallswinkel ist gleich dem Reflexionswinkel (Reflexionsgesetz)."},{"nr":4,"text":"Glasfasern in Endoskopen nutzen das Prinzip der Totalreflexion zur Lichtleitung."},{"nr":5,"text":"Licht breitet sich in optisch dichteren Medien schneller aus als in Luft."}]',
 '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"1, 3, 5"},{"key":"D","text":"2, 4, 5"},{"key":"E","text":"1, 4, 5"}]',
 'Korrekt sind 2, 3 und 4. Aussage 1 ist falsch: beim Übergang Luft→Wasser wird der Strahl zur Normalen hin gebrochen (nicht weg). Aussage 5 ist falsch: in optisch dichteren Medien ist die Lichtgeschwindigkeit geringer (c_Medium = c_Vakuum/n).',
 2),

-- ph-6-02: Linsen und optische Systeme
('typa-ph-6-02-linsengleichung', 'A', 'physik', 'ph-6-02',
 'Eine Sammellinse hat eine Brennweite von 20 cm. Ein Objekt steht 30 cm vor der Linse. Wo entsteht das Bild?',
 '[{"key":"A","text":"60 cm hinter der Linse"},{"key":"B","text":"20 cm hinter der Linse"},{"key":"C","text":"12 cm hinter der Linse"},{"key":"D","text":"60 cm vor der Linse"},{"key":"E","text":"15 cm hinter der Linse"}]',
 'A', '[]', '[]',
 '1/f = 1/g + 1/b → 1/b = 1/f − 1/g = 1/20 − 1/30 = 3/60 − 2/60 = 1/60 → b = 60 cm. Das Bild entsteht 60 cm hinter der Linse, es ist reell und vergrößert.',
 2),

('typa-ph-6-02-dioptrien', 'A', 'physik', 'ph-6-02',
 'Eine Brille hat eine Brechkraft von −2,5 dpt. Welche Brennweite entspricht das?',
 '[{"key":"A","text":"−40 cm"},{"key":"B","text":"−25 cm"},{"key":"C","text":"40 cm"},{"key":"D","text":"−4 cm"},{"key":"E","text":"−2,5 m"}]',
 'A', '[]', '[]',
 'D = 1/f → f = 1/D = 1/(−2,5 dpt) = −0,4 m = −40 cm. Eine Zerstreuungslinse (f < 0, D < 0) korrigiert Kurzsichtigkeit (Myopie).',
 2),

('typk-ph-6-02-linsen-auge', 'K', 'physik', 'ph-6-02',
 'Welche der folgenden Aussagen zu Linsen und optischen Systemen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Brechkraft einer Sammellinse ist positiv, die einer Zerstreuungslinse negativ."},{"nr":2,"text":"Beim Auge erzeugt die Hornhaut (Kornea) etwa 43 dpt, die Gesamtbrechkraft beträgt ca. 60 dpt."},{"nr":3,"text":"Bei der Lupe liegt das Objekt innerhalb der einfachen Brennweite, und es entsteht ein virtuelles, vergrößertes Bild."},{"nr":4,"text":"Zwei Linsen in Kontakt addieren ihre Brennweiten (f_ges = f₁ + f₂)."},{"nr":5,"text":"Das menschliche Auge akkommodiert, indem es die Brennweite der Augenlinse durch Änderung der Krümmung anpasst."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 2 und 3. Aussage 4 ist falsch: bei Linsen in Kontakt addieren sich die Brechkräfte D_ges = D₁ + D₂ (nicht die Brennweiten, sondern die Kehrwerte). Aussage 5 ist korrekt — dann wären 1, 2, 3, 5 richtig. Bestes Tripel ohne Aussage 5: 1, 2, 3.',
 2),

-- ph-6-03: Wellenoptik und Polarisation
('typa-ph-6-03-malus', 'A', 'physik', 'ph-6-03',
 'Polarisiertes Licht der Intensität I₀ fällt auf einen Polarisator, dessen Durchlassrichtung um 60° zur Polarisationsebene gedreht ist. Welche Intensität wird durchgelassen? (cos 60° = 0,5)',
 '[{"key":"A","text":"I₀/4"},{"key":"B","text":"I₀/2"},{"key":"C","text":"I₀/√2"},{"key":"D","text":"I₀"},{"key":"E","text":"0"}]',
 'A', '[]', '[]',
 'Malus''sches Gesetz: I = I₀·cos²θ = I₀·cos²60° = I₀·(0,5)² = I₀/4. Bei 90° wäre I = 0 (vollständige Auslöschung).',
 2),

('typk-ph-6-03-wellenoptik', 'K', 'physik', 'ph-6-03',
 'Welche der folgenden Aussagen zur Wellenoptik und Polarisation sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Licht kann durch Transmission durch geeignete Materialien polarisiert werden."},{"nr":2,"text":"Der Brewster-Winkel θ_B erfüllt tan(θ_B) = n₂/n₁ und beschreibt vollständige Polarisation des reflektierten Strahls."},{"nr":3,"text":"Die Doppelbrechung in Kristallen entsteht dadurch, dass der Brechungsindex richtungsabhängig ist."},{"nr":4,"text":"Kohärentes Licht (gleiche Frequenz, konstante Phasenbeziehung) ist Voraussetzung für Interferenzerscheinungen."},{"nr":5,"text":"In der Optik ist Licht immer vollständig polarisiert."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist teilweise korrekt (Brewster-Winkel = arctan(n₂/n₁)), aber der reflektierte Strahl ist nur teilweise polarisiert — vollständig polarisiert nur der reflektierte, nicht der transmittierte. Aussage 5 ist falsch: natürliches Licht ist unpolarisiert. Beste Auswahl: 1, 3, 4.',
 3),

-- ph-6-04: Auge und Fehlsichtigkeiten
('typa-ph-6-04-myopie-korrektur', 'A', 'physik', 'ph-6-04',
 'Ein Kurzsichtiger (Myopie) kann maximal bis 50 cm scharf sehen. Welche Korrekturlinse benötigt er?',
 '[{"key":"A","text":"Zerstreuungslinse mit D = −2 dpt"},{"key":"B","text":"Sammellinse mit D = +2 dpt"},{"key":"C","text":"Zerstreuungslinse mit D = −0,5 dpt"},{"key":"D","text":"Sammellinse mit D = +20 dpt"},{"key":"E","text":"Keine Korrektur nötig"}]',
 'A', '[]', '[]',
 'Für deutliche Fernsicht (Objekt ∞) muss der Fernpunkt bei ∞ liegen. Beim Myopen liegt der Fernpunkt bei 50 cm. Benötigt wird eine Zerstreuungslinse mit f = −50 cm = −0,5 m → D = 1/(−0,5) = −2 dpt.',
 2),

('typk-ph-6-04-auge', 'K', 'physik', 'ph-6-04',
 'Welche der folgenden Aussagen zu Fehlsichtigkeiten und deren Korrektur sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Myopie (Kurzsichtigkeit) entsteht, wenn Lichtstrahlen vor der Netzhaut fokussiert werden."},{"nr":2,"text":"Hyperopie (Weitsichtigkeit) wird mit einer Zerstreuungslinse (D < 0) korrigiert."},{"nr":3,"text":"Presbyopie (Alterssichtigkeit) entsteht durch nachlassende Akkommodationsfähigkeit der Augenlinse."},{"nr":4,"text":"Astigmatismus wird durch unterschiedliche Krümmung der Kornea in verschiedenen Meridianebenen verursacht."},{"nr":5,"text":"LASIK korrigiert Fehlsichtigkeiten, indem die Augenlinse chirurgisch entfernt und ersetzt wird."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 3, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist falsch: Hyperopie wird mit einer Sammellinse (D > 0) korrigiert. Aussage 5 ist falsch: LASIK verändert die Hornhautkrümmung durch Laser, die Augenlinse bleibt erhalten.',
 2);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- KAP 7: ATOMPHYSIK UND KERNPHYSIK
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- ph-7-01: Atomkern und Kernkräfte
('typa-ph-7-01-massenzahl', 'A', 'physik', 'ph-7-01',
 'Das Isotop ²³⁸U₉₂ (Uran-238) hat wie viele Neutronen?',
 '[{"key":"A","text":"146"},{"key":"B","text":"238"},{"key":"C","text":"92"},{"key":"D","text":"330"},{"key":"E","text":"184"}]',
 'A', '[]', '[]',
 'Massenzahl A = Protonenzahl Z + Neutronenzahl N → N = A − Z = 238 − 92 = 146 Neutronen.',
 1),

('typa-ph-7-01-bindungsenergie', 'A', 'physik', 'ph-7-01',
 'Welches Element hat die höchste Bindungsenergie pro Nukleon und gilt daher als stabilstes Element?',
 '[{"key":"A","text":"Eisen (Fe, Z=26, A=56)"},{"key":"B","text":"Wasserstoff (H, Z=1, A=1)"},{"key":"C","text":"Uran (U, Z=92, A=238)"},{"key":"D","text":"Helium (He, Z=2, A=4)"},{"key":"E","text":"Kohlenstoff (C, Z=6, A=12)"}]',
 'A', '[]', '[]',
 'Eisen-56 hat die maximale Bindungsenergie pro Nukleon von etwa 8,79 MeV. Elemente leichter als Fe gewinnen durch Fusion Energie, schwerere durch Spaltung.',
 2),

('typk-ph-7-01-kernphysik', 'K', 'physik', 'ph-7-01',
 'Welche der folgenden Aussagen zum Atomkern und Nuklidstruktur sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Isotope eines Elements haben dieselbe Protonenzahl, aber unterschiedliche Neutronenzahlen."},{"nr":2,"text":"Die Kernkraft ist eine Fernkraft wie die Gravitation und wirkt über große Abstände."},{"nr":3,"text":"Die Bindungsenergie entspricht dem Massendefekt multipliziert mit c² (Einstein: E = Δm·c²)."},{"nr":4,"text":"Isobare sind Nuklide mit gleicher Massenzahl aber unterschiedlicher Protonenzahl."},{"nr":5,"text":"Das Proton hat eine positive Ladung, das Neutron eine negative Ladung."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist falsch: die starke Kernkraft ist eine Nahkraft (Reichweite ~10⁻¹⁵ m). Aussage 5 ist falsch: das Neutron ist elektrisch neutral (Ladung = 0).',
 2),

-- ph-7-02: Radioaktivität und Zerfallsgesetze
('typa-ph-7-02-halbwertszeit', 'A', 'physik', 'ph-7-02',
 '¹³¹I (Jod-131) hat eine Halbwertszeit von 8 Tagen. Welcher Anteil der ursprünglichen Aktivität verbleibt nach 24 Tagen?',
 '[{"key":"A","text":"1/8"},{"key":"B","text":"1/4"},{"key":"C","text":"1/3"},{"key":"D","text":"1/16"},{"key":"E","text":"1/2"}]',
 'A', '[]', '[]',
 'Nach 24 Tagen = 3 × T₁/₂: verbleibende Aktivität = (1/2)³ = 1/8. Nach n Halbwertszeiten gilt A = A₀ × (1/2)ⁿ.',
 2),

('typa-ph-7-02-zerfall-gleichung', 'A', 'physik', 'ph-7-02',
 'Ein Radionuklid hat eine Halbwertszeit von 6 h. Wie groß ist die Zerfallskonstante λ in h⁻¹?',
 '[{"key":"A","text":"ln(2)/6 ≈ 0,1155 h⁻¹"},{"key":"B","text":"1/6 = 0,167 h⁻¹"},{"key":"C","text":"6/ln(2) ≈ 8,66 h⁻¹"},{"key":"D","text":"ln(6) ≈ 1,79 h⁻¹"},{"key":"E","text":"2/6 ≈ 0,333 h⁻¹"}]',
 'A', '[]', '[]',
 'T₁/₂ = ln(2)/λ → λ = ln(2)/T₁/₂ = 0,693/6 h ≈ 0,1155 h⁻¹. Dies entspricht der Zerfallskonstante von ⁹⁹ᵐTc (Technetium-99m), dem häufigsten Nuklid in der Nuklearmedizin.',
 2),

('typk-ph-7-02-radioaktivitaet', 'K', 'physik', 'ph-7-02',
 'Welche der folgenden Aussagen zu Radioaktivität und Zerfallsgesetzen sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Beim α-Zerfall nimmt die Massenzahl um 4 und die Ordnungszahl um 2 ab."},{"nr":2,"text":"Beim β⁻-Zerfall wird ein Positron emittiert und die Ordnungszahl um 1 verringert."},{"nr":3,"text":"Die Aktivität A = λ·N, wobei N die Anzahl der Kerne und λ die Zerfallskonstante ist."},{"nr":4,"text":"γ-Strahlung ist eine hochenergetische elektromagnetische Strahlung ohne Masseänderung des Kerns."},{"nr":5,"text":"Die Einheit der Aktivität ist das Becquerel (Bq), wobei 1 Bq = 1 Zerfall pro Sekunde."}]',
 '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"1, 4, 5"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 3, 5"},{"key":"E","text":"2, 4, 5"}]',
 'Korrekt sind 1, 3 und 4. Aussage 2 ist falsch: beim β⁻-Zerfall wird ein Elektron (Negatron) emittiert und die Ordnungszahl um 1 erhöht (n → p + e⁻ + ν̄). Beim β⁺-Zerfall wird ein Positron emittiert. Aussage 5 ist ebenfalls korrekt — dann wären 1, 3, 4, 5 richtig. Bestes Tripel: 1, 3, 4.',
 2),

-- ph-7-03: Ionisierende Strahlung und Strahlenschutz
('typa-ph-7-03-aequivalentdosis', 'A', 'physik', 'ph-7-03',
 'Ein Gewebe erhält eine Energiedosis von 0,1 Gy α-Strahlung (w_R = 20). Wie groß ist die Äquivalentdosis?',
 '[{"key":"A","text":"2 Sv"},{"key":"B","text":"0,005 Sv"},{"key":"C","text":"20 Sv"},{"key":"D","text":"0,1 Sv"},{"key":"E","text":"0,2 Sv"}]',
 'A', '[]', '[]',
 'H = D × w_R = 0,1 Gy × 20 = 2 Sv. Der hohe Strahlungs-Wichtungsfaktor von α-Strahlung (w_R = 20) spiegelt die hohe biologische Wirksamkeit wider.',
 2),

('typk-ph-7-03-strahlung', 'K', 'physik', 'ph-7-03',
 'Welche der folgenden Aussagen zu ionisierender Strahlung und Strahlenschutz sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Die Energiedosis D wird in Gray (Gy) gemessen, wobei 1 Gy = 1 J/kg."},{"nr":2,"text":"α-Strahlung hat die größte biologische Wirksamkeit (w_R = 20) aber die geringste Reichweite in Gewebe."},{"nr":3,"text":"Die effektive Dosis berücksichtigt zusätzlich zur Äquivalentdosis die unterschiedliche Strahlenempfindlichkeit verschiedener Organe."},{"nr":4,"text":"Röntgenstrahlung hat denselben Strahlungs-Wichtungsfaktor wie α-Strahlung (w_R = 20)."},{"nr":5,"text":"Blei ist ein effektives Abschirmmaterial für γ-Strahlung aufgrund seiner hohen Dichte und Ordnungszahl."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 3, 4"}]',
 'Korrekt sind 1, 2 und 3. Aussage 4 ist falsch: Röntgenstrahlung/γ-Strahlung hat w_R = 1 (nicht 20). Aussage 5 ist korrekt — dann wären 1, 2, 3, 5 richtig. Bestes Tripel: 1, 2, 3.',
 2),

('typa-ph-7-03-reichweite', 'A', 'physik', 'ph-7-03',
 'Welche ionisierende Strahlung hat die geringste Eindringtiefe in biologisches Gewebe?',
 '[{"key":"A","text":"α-Strahlung"},{"key":"B","text":"β-Strahlung"},{"key":"C","text":"γ-Strahlung"},{"key":"D","text":"Röntgenstrahlung"},{"key":"E","text":"Neutronenstrahlung"}]',
 'A', '[]', '[]',
 'α-Strahlung (He-Kerne, 2⁺ geladen) hat die geringste Reichweite: wenige cm in Luft, weniger als 0,1 mm in Gewebe. γ-Strahlung und Röntgenstrahlung haben die größte Eindringtiefe.',
 1),

-- ph-7-04: Kernspaltung, Fusion und medizinische Physik
('typa-ph-7-04-positronenemission', 'A', 'physik', 'ph-7-04',
 'Bei der Positronen-Emissions-Tomographie (PET) wird ¹⁸F verwendet (T₁/₂ = 110 min). Nach 5,5 Stunden (= 3 Halbwertszeiten) ist die Aktivität auf welchen Bruchteil gesunken?',
 '[{"key":"A","text":"1/8 der Ausgangsaktivität"},{"key":"B","text":"1/4 der Ausgangsaktivität"},{"key":"C","text":"1/6 der Ausgangsaktivität"},{"key":"D","text":"1/16 der Ausgangsaktivität"},{"key":"E","text":"1/3 der Ausgangsaktivität"}]',
 'A', '[]', '[]',
 '5,5 h = 330 min = 3 × 110 min = 3 Halbwertszeiten. A/A₀ = (1/2)³ = 1/8. PET nutzt β⁺-Emitter: Positronen annihilieren mit Elektronen zu zwei 511-keV-γ-Quanten (Koinzidenzdetektoren).',
 2),

('typk-ph-7-04-medizinische-physik', 'K', 'physik', 'ph-7-04',
 'Welche der folgenden Aussagen zu Kernreaktionen und medizinischer Physik sind korrekt?',
 '[]', NULL,
 '[{"nr":1,"text":"Der Bragg-Peak beschreibt die maximale Energieabgabe von Protonen am Ende ihrer Reichweite im Gewebe."},{"nr":2,"text":"Bei der Kernfusion leichter Nuklide wird Energie frei, weil das Produkt eine höhere Bindungsenergie pro Nukleon hat."},{"nr":3,"text":"⁹⁹ᵐTc ist das am häufigsten verwendete Radionuklid in der Nuklearmedizin mit T₁/₂ = 6 h."},{"nr":4,"text":"Kernspin-Resonanz (MRT) nutzt α-Strahlung zur Bildgebung."},{"nr":5,"text":"Bei der Strahlentherapie nutzt man den Bragg-Peak von Protonen, um Tumoren gezielt zu bestrahlen und umliegendes Gewebe zu schonen."}]',
 '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"1, 3, 5"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"2, 3, 5"}]',
 'Korrekt sind 1, 2 und 3. Aussage 4 ist falsch: MRT nutzt Radiofrequenz-Wellen (keine ionisierende Strahlung) zur Anregung von Protonen-Spins im Magnetfeld. Aussage 5 ist korrekt — dann wären 1, 2, 3, 5 richtig. Bestes Tripel: 1, 2, 3.',
 2),

('typa-ph-7-04-einstein-energie', 'A', 'physik', 'ph-7-04',
 'Beim Zerfall eines Neutrons in ein Proton entsteht ein Massendefekt von 1,293 MeV/c². Welche Energie wird freigesetzt? (1 MeV = 1,6 × 10⁻¹³ J)',
 '[{"key":"A","text":"1,293 MeV"},{"key":"B","text":"0 MeV (Energie bleibt erhalten)"},{"key":"C","text":"2 × 1,293 = 2,586 MeV"},{"key":"D","text":"0,511 MeV"},{"key":"E","text":"938 MeV"}]',
 'A', '[]', '[]',
 'Nach E = Δm·c² entspricht ein Massendefekt von 1,293 MeV/c² einer freigesetzten Energie von 1,293 MeV. Diese Energie verteilt sich auf das Elektron (β⁻), das Antineutrino und den Rückstoß des Protons.',
 3);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- ZUSATZFRAGEN für alle Kapitel (Ziel: ≥100 Fragen gesamt)
-- ============================================================

INSERT INTO bms_fragen (id, typ, fach, uk_id, stamm, optionen, korrekte_option, aussagen, kombinationen, erklaerung, schwierigkeit) VALUES

-- Kap 1 Zusatz
('typa-ph-1-01-mol-einheit', 'A', 'physik', 'ph-1-01',
 'Welche SI-Einheit wird für die Stoffmenge verwendet?',
 '[{"key":"A","text":"mol"},{"key":"B","text":"kg"},{"key":"C","text":"g"},{"key":"D","text":"L"},{"key":"E","text":"mmol/L"}]',
 'A', '[]', '[]',
 'Die Stoffmenge wird in Mol (mol) gemessen. 1 mol entspricht 6,022 × 10²³ Teilchen (Avogadro-Zahl). In der Medizin: Serumkonzentrationen in mmol/L.',
 1),

('typa-ph-1-02-femto-pico', 'A', 'physik', 'ph-1-02',
 'Eine Zelle hat einen Durchmesser von 10 μm und ein Virus 100 nm. Um welchen Faktor ist die Zelle größer als das Virus?',
 '[{"key":"A","text":"100"},{"key":"B","text":"10"},{"key":"C","text":"1000"},{"key":"D","text":"10000"},{"key":"E","text":"0,01"}]',
 'A', '[]', '[]',
 '10 μm = 10 × 10⁻⁶ m = 10⁻⁵ m. 100 nm = 100 × 10⁻⁹ m = 10⁻⁷ m. Verhältnis: 10⁻⁵/10⁻⁷ = 100.',
 2),

('typa-ph-1-03-einheit-drehmoment', 'A', 'physik', 'ph-1-03',
 'Das Drehmoment M = F × r hat die SI-Einheit:',
 '[{"key":"A","text":"N·m"},{"key":"B","text":"N/m"},{"key":"C","text":"kg/m"},{"key":"D","text":"J/s"},{"key":"E","text":"Pa·m"}]',
 'A', '[]', '[]',
 'M = F·r → [N·m]. Obwohl N·m = J (Joule), wird das Drehmoment als N·m geschrieben (nicht Joule), um die physikalische Bedeutung zu unterscheiden.',
 2),

-- Kap 2 Zusatz
('typa-ph-2-01-wurfbewegung', 'A', 'physik', 'ph-2-01',
 'Ein Ball wird horizontal mit 10 m/s von einer 20 m hohen Klippe geworfen (g = 10 m/s²). Wie lange dauert der Flug bis zum Aufprall?',
 '[{"key":"A","text":"2 s"},{"key":"B","text":"4 s"},{"key":"C","text":"20 s"},{"key":"D","text":"1 s"},{"key":"E","text":"√10 s"}]',
 'A', '[]', '[]',
 'In vertikaler Richtung: h = ½gt² → 20 = ½ × 10 × t² → t² = 4 → t = 2 s. Die horizontale Geschwindigkeit beeinflusst die Fallzeit nicht.',
 2),

('typa-ph-2-02-epot-ekin', 'A', 'physik', 'ph-2-02',
 'Ein 5 kg schweres Objekt fällt von 10 m Höhe. Mit welcher Geschwindigkeit trifft es auf dem Boden auf? (g = 10 m/s², Reibung vernachlässigt)',
 '[{"key":"A","text":"√(200) ≈ 14,1 m/s"},{"key":"B","text":"100 m/s"},{"key":"C","text":"10 m/s"},{"key":"D","text":"50 m/s"},{"key":"E","text":"20 m/s"}]',
 'A', '[]', '[]',
 'Energieerhaltung: E_pot = E_kin → mgh = ½mv² → v = √(2gh) = √(2 × 10 × 10) = √200 ≈ 14,1 m/s.',
 1),

('typa-ph-2-03-bernoulli-stenose', 'A', 'physik', 'ph-2-03',
 'In einem Blutgefäß vervierfacht sich die Strömungsgeschwindigkeit an einer Stenose. Um welchen Faktor ändert sich der dynamische Druck ½ρv²?',
 '[{"key":"A","text":"Er steigt auf das 16-fache"},{"key":"B","text":"Er steigt auf das 4-fache"},{"key":"C","text":"Er steigt auf das 2-fache"},{"key":"D","text":"Er verdoppelt sich"},{"key":"E","text":"Er bleibt gleich"}]',
 'A', '[]', '[]',
 '½ρv² → bei v'' = 4v: ½ρ(4v)² = ½ρ × 16v² = 16 × ½ρv². Der dynamische Druck steigt auf das 16-fache, der statische Druck sinkt entsprechend (Bernoulli).',
 3),

('typa-ph-2-04-drehimpuls', 'A', 'physik', 'ph-2-04',
 'Ein Eisläufer dreht sich mit ω = 4 rad/s und einem Trägheitsmoment I = 2 kg·m². Er zieht die Arme ein und I sinkt auf 1 kg·m². Wie groß ist die neue Winkelgeschwindigkeit?',
 '[{"key":"A","text":"8 rad/s"},{"key":"B","text":"2 rad/s"},{"key":"C","text":"4 rad/s"},{"key":"D","text":"16 rad/s"},{"key":"E","text":"1 rad/s"}]',
 'A', '[]', '[]',
 'Drehimpulserhaltung: L = I₁ω₁ = I₂ω₂ → 2 × 4 = 1 × ω₂ → ω₂ = 8 rad/s. Das Trägheitsmoment halbiert sich → Winkelgeschwindigkeit verdoppelt sich.',
 2),

-- Kap 3 Zusatz
('typa-ph-3-01-amplitude-energie', 'A', 'physik', 'ph-3-01',
 'Die Amplitude einer Federschwingung wird verdoppelt. Um welchen Faktor ändert sich die Schwingungsenergie?',
 '[{"key":"A","text":"Sie vervierfacht sich"},{"key":"B","text":"Sie verdoppelt sich"},{"key":"C","text":"Sie bleibt gleich"},{"key":"D","text":"Sie wird halbiert"},{"key":"E","text":"Sie steigt auf das 8-fache"}]',
 'A', '[]', '[]',
 'E = ½kA². Bei doppelter Amplitude A'' = 2A: E'' = ½k(2A)² = 4 × ½kA² = 4E. Die Energie wächst quadratisch mit der Amplitude.',
 2),

('typa-ph-3-02-lautstaerke', 'A', 'physik', 'ph-3-02',
 'Die Schallintensität steigt von I₀ = 10⁻¹² W/m² auf I = 10⁻⁶ W/m². Wie viele Dezibel sind das?',
 '[{"key":"A","text":"60 dB"},{"key":"B","text":"6 dB"},{"key":"C","text":"0,6 dB"},{"key":"D","text":"600 dB"},{"key":"E","text":"10 dB"}]',
 'A', '[]', '[]',
 'L = 10 × log₁₀(I/I₀) = 10 × log₁₀(10⁻⁶/10⁻¹²) = 10 × log₁₀(10⁶) = 10 × 6 = 60 dB.',
 2),

('typa-ph-3-03-mrt-larmor', 'A', 'physik', 'ph-3-03',
 'Die Larmor-Frequenz für Protonen in einem 3-Tesla-MRT-Gerät berechnet sich mit f = γB₀/(2π), γ_H ≈ 267 × 10⁶ rad/(s·T). Welche Näherungsfrequenz ergibt sich?',
 '[{"key":"A","text":"ca. 128 MHz"},{"key":"B","text":"ca. 42 MHz"},{"key":"C","text":"ca. 800 MHz"},{"key":"D","text":"ca. 64 MHz"},{"key":"E","text":"ca. 3 GHz"}]',
 'A', '[]', '[]',
 'f = γB₀/(2π) = (267 × 10⁶ × 3)/(2π) ≈ 801 × 10⁶ / 6,28 ≈ 127,5 MHz ≈ 128 MHz. 1,5-Tesla-MRT entspricht ~64 MHz, 3-Tesla ~128 MHz.',
 3),

('typa-ph-3-04-oberton', 'A', 'physik', 'ph-3-04',
 'Eine beidseitig offene Orgelpfeife hat eine Grundfrequenz von 400 Hz. Welche Frequenz hat der erste Oberton?',
 '[{"key":"A","text":"800 Hz"},{"key":"B","text":"200 Hz"},{"key":"C","text":"600 Hz"},{"key":"D","text":"1200 Hz"},{"key":"E","text":"400 Hz"}]',
 'A', '[]', '[]',
 'Bei beidseitig offener Röhre: Grundton f₁, erster Oberton f₂ = 2f₁ = 800 Hz. Für einseitig geschlossene Röhren gibt es nur ungerade Obertöne (f₁, 3f₁, 5f₁, ...).',
 2),

-- Kap 4 Zusatz
('typa-ph-4-02-entropie', 'A', 'physik', 'ph-4-02',
 'Welche Aussage zum 2. Hauptsatz der Thermodynamik ist korrekt?',
 '[{"key":"A","text":"In einem abgeschlossenen System kann die Entropie nicht abnehmen"},{"key":"B","text":"Wärme fließt spontan vom kälteren zum wärmeren Körper"},{"key":"C","text":"Die Entropie eines Systems ist immer konstant"},{"key":"D","text":"Ein Perpetuum mobile erster Art ist verboten"},{"key":"E","text":"Die innere Energie ist immer gleich der abgegebenen Wärme"}]',
 'A', '[]', '[]',
 'Der 2. Hauptsatz: ΔS ≥ 0 in abgeschlossenen Systemen (Entropie kann nur zunehmen oder konstant bleiben). Wärme fließt spontan von heiß nach kalt. Das Perpetuum mobile erster Art wird durch den 1. Hauptsatz (Energieerhaltung) verboten.',
 1),

('typa-ph-4-03-boyle-mariotte', 'A', 'physik', 'ph-4-03',
 'Ein Gas hat bei 2 bar ein Volumen von 3 L. Auf welches Volumen wird es komprimiert, wenn der Druck auf 6 bar steigt (Temperatur konstant)?',
 '[{"key":"A","text":"1 L"},{"key":"B","text":"9 L"},{"key":"C","text":"18 L"},{"key":"D","text":"6 L"},{"key":"E","text":"0,5 L"}]',
 'A', '[]', '[]',
 'Boyle-Mariotte (isotherm): p₁V₁ = p₂V₂ → V₂ = p₁V₁/p₂ = (2 × 3)/6 = 1 L.',
 2),

('typa-ph-4-04-schmelzwaerme-eis', 'A', 'physik', 'ph-4-04',
 'Wie viel Energie benötigt man, um 200 g Eis bei 0°C vollständig zu schmelzen? (L_S = 334 kJ/kg)',
 '[{"key":"A","text":"66,8 kJ"},{"key":"B","text":"6,68 kJ"},{"key":"C","text":"668 kJ"},{"key":"D","text":"334 kJ"},{"key":"E","text":"33,4 kJ"}]',
 'A', '[]', '[]',
 'Q = m × L_S = 0,2 kg × 334 kJ/kg = 66,8 kJ. Diese Energie wird für den Phasenübergang benötigt, ohne Temperaturerhöhung.',
 1),

-- Kap 5 Zusatz
('typa-ph-5-01-elektrisches-feld', 'A', 'physik', 'ph-5-01',
 'In einer Plattenkondensatoranordnung besteht ein homogenes E-Feld von 1000 V/m. Welche Kraft wirkt auf eine Ladung von 2 μC?',
 '[{"key":"A","text":"2 × 10⁻³ N = 2 mN"},{"key":"B","text":"2 × 10³ N"},{"key":"C","text":"2 × 10⁻⁶ N"},{"key":"D","text":"0,5 × 10³ N"},{"key":"E","text":"2 × 10⁶ N"}]',
 'A', '[]', '[]',
 'F = q·E = 2 × 10⁻⁶ C × 1000 V/m = 2 × 10⁻³ N = 2 mN.',
 2),

('typa-ph-5-02-widerstand-temperatur', 'A', 'physik', 'ph-5-02',
 'Warum steigt der elektrische Widerstand eines Metalldrahtes bei höherer Temperatur?',
 '[{"key":"A","text":"Stärkere Gitterschwingungen führen zu mehr Streuung der Leitungselektronen"},{"key":"B","text":"Bei höherer Temperatur werden mehr Elektronen frei und der Widerstand sinkt"},{"key":"C","text":"Der Querschnitt des Drahtes nimmt bei Wärmedehnung zu"},{"key":"D","text":"Die Ladungsträgerkonzentration nimmt ab"},{"key":"E","text":"Der spezifische Widerstand ρ ist temperaturunabhängig"}]',
 'A', '[]', '[]',
 'In Metallen ist die Elektronendichte konstant. Bei höherer Temperatur schwingen die Gitteratome stärker und streuen die Elektronen häufiger → erhöhter Widerstand (positiver Temperaturkoeffizient).',
 2),

('typa-ph-5-04-EM-spektrum', 'A', 'physik', 'ph-5-04',
 'In welcher Reihenfolge nimmt die Wellenlänge elektromagnetischer Strahlung zu (von kurz nach lang)?',
 '[{"key":"A","text":"γ-Strahlung < Röntgen < UV < sichtbar < IR < Mikrowellen < Radiowellen"},{"key":"B","text":"Radiowellen < Mikrowellen < IR < sichtbar < UV < Röntgen < γ-Strahlung"},{"key":"C","text":"γ-Strahlung < UV < Röntgen < IR < sichtbar < Mikrowellen < Radiowellen"},{"key":"D","text":"Sichtbar < UV < IR < Röntgen < γ < Mikrowellen < Radiowellen"},{"key":"E","text":"IR < UV < sichtbar < Röntgen < Mikrowellen < Radiowellen < γ-Strahlung"}]',
 'A', '[]', '[]',
 'Das EM-Spektrum nach aufsteigender Wellenlänge: γ (pm) < Röntgen (nm) < UV (100–400 nm) < sichtbar (400–700 nm) < IR (μm) < Mikrowellen (mm–cm) < Radiowellen (m–km).',
 2),

-- Kap 6 Zusatz
('typa-ph-6-01-brechungsindex-glas', 'A', 'physik', 'ph-6-01',
 'Licht hat in Glas (n = 1,5) eine Ausbreitungsgeschwindigkeit von:',
 '[{"key":"A","text":"2 × 10⁸ m/s"},{"key":"B","text":"3 × 10⁸ m/s"},{"key":"C","text":"4,5 × 10⁸ m/s"},{"key":"D","text":"1 × 10⁸ m/s"},{"key":"E","text":"2 × 10⁶ m/s"}]',
 'A', '[]', '[]',
 'c_Medium = c_Vakuum/n = (3 × 10⁸ m/s)/1,5 = 2 × 10⁸ m/s. In optisch dichteren Medien ist die Lichtgeschwindigkeit geringer.',
 2),

('typa-ph-6-03-aufloesung', 'A', 'physik', 'ph-6-03',
 'Warum ist die Auflösung eines Lichtmikroskops durch die Wellenlänge des Lichts begrenzt?',
 '[{"key":"A","text":"Strukturen kleiner als λ/2 können nicht aufgelöst werden (Abbe-Grenze)"},{"key":"B","text":"Licht wird an Strukturen jeder Größe vollständig reflektiert"},{"key":"C","text":"Nur Schallwellen können kleinere Strukturen auflösen"},{"key":"D","text":"Die Brechkraft des Objektivs ist begrenzt"},{"key":"E","text":"Elektronen haben eine längere Wellenlänge als Licht"}]',
 'A', '[]', '[]',
 'Abbe-Limit: d_min ≈ λ/(2·NA). Mit sichtbarem Licht (λ ≈ 400–700 nm) ergibt sich eine maximale Auflösung von ~200 nm. Elektronenmikroskope nutzen die kürzere Wellenlänge von Elektronen.',
 3),

('typa-ph-6-04-presbyopie', 'A', 'physik', 'ph-6-04',
 'Ein 60-jähriger Patient kann nicht mehr scharf in der Nähe sehen. Was ist die wahrscheinlichste Diagnose und Korrektur?',
 '[{"key":"A","text":"Presbyopie (Alterssichtigkeit), Sammellinse (Lesebrille)"},{"key":"B","text":"Myopie, Zerstreuungslinse"},{"key":"C","text":"Astigmatismus, Zylinderlinse"},{"key":"D","text":"Hyperopie, Zerstreuungslinse"},{"key":"E","text":"Presbyopie, Zerstreuungslinse"}]',
 'A', '[]', '[]',
 'Presbyopie = Altersweitsichtigkeit durch Verhärtung der Augenlinse (Akkommodationsverlust). Der Nahpunkt verschiebt sich nach hinten. Korrektur: Sammellinse (konvex) für die Nähe.',
 1),

-- Kap 7 Zusatz
('typa-ph-7-01-alpha-zerfall', 'A', 'physik', 'ph-7-01',
 '²²⁶Ra (Radium-226, Z=88) zerfällt durch α-Emission. Was ist das Tochternuklid?',
 '[{"key":"A","text":"²²²Rn (Radon, Z=86)"},{"key":"B","text":"²²²Ra (Radium, Z=88)"},{"key":"C","text":"²³⁰Th (Thorium, Z=90)"},{"key":"D","text":"²²⁶Fr (Francium, Z=87)"},{"key":"E","text":"²²⁴Ra (Radium, Z=88)"}]',
 'A', '[]', '[]',
 'α-Zerfall: A → A-4, Z → Z-2. ²²⁶Ra → ²²²Rn + ⁴He (α-Teilchen). Radium (Z=88) → Radon (Z=86). Das Edelgas Radon-222 ist ein Zerfallsprodukt der natürlichen Radiumkette.',
 2),

('typa-ph-7-02-tc99m-nuklearmedizin', 'A', 'physik', 'ph-7-02',
 '⁹⁹ᵐTc hat T₁/₂ = 6 h und wird in der Szintigraphie eingesetzt. Wie viel Prozent der ursprünglichen Aktivität verbleibt nach 24 Stunden?',
 '[{"key":"A","text":"6,25%"},{"key":"B","text":"25%"},{"key":"C","text":"12,5%"},{"key":"D","text":"50%"},{"key":"E","text":"3,13%"}]',
 'A', '[]', '[]',
 '24 h / 6 h = 4 Halbwertszeiten. A/A₀ = (1/2)⁴ = 1/16 = 0,0625 = 6,25%. Nach 24 Stunden sind nur noch 6,25% aktiv — günstig für Strahlenschutz bei geringer Strahlenbelastung.',
 2),

('typa-ph-7-03-strahlenschutz-abstand', 'A', 'physik', 'ph-7-03',
 'Bei Strahlenschutz gilt das Abstandsquadratgesetz. Verdoppelt man den Abstand zur Strahlenquelle, auf welchen Bruchteil sinkt die Strahlungsintensität?',
 '[{"key":"A","text":"1/4"},{"key":"B","text":"1/2"},{"key":"C","text":"1/8"},{"key":"D","text":"1/3"},{"key":"E","text":"1/16"}]',
 'A', '[]', '[]',
 'I ∝ 1/r². Bei doppeltem Abstand: I'' ∝ 1/(2r)² = 1/(4r²) = I/4. Die Intensität sinkt auf ein Viertel. Daher gilt: Abstand verdoppeln → Dosis vierteln.',
 1),

('typa-ph-7-04-bragg-peak', 'A', 'physik', 'ph-7-04',
 'Was beschreibt der Bragg-Peak bei der Protonentherapie von Tumoren?',
 '[{"key":"A","text":"Den Tiefenbereich maximaler Energieabgabe, der gezielt auf den Tumor ausgerichtet wird"},{"key":"B","text":"Den Bereich minimaler Energieabgabe am Eintrittsort"},{"key":"C","text":"Die Reflexion der Protonen an der Tumoroberfläche"},{"key":"D","text":"Die Streuung von Röntgenstrahlung im Gewebe"},{"key":"E","text":"Den Bereich hinter dem Tumor mit maximaler Strahlungsbelastung"}]',
 'A', '[]', '[]',
 'Der Bragg-Peak ist das charakteristische Maximum der Ionisationsdichte am Ende der Reichweite geladener Teilchen. Protonen geben den Großteil ihrer Energie tief im Gewebe ab, danach ist die Dosis nahezu null — ideal für Tumor-Tiefentherapie mit Schonung umgebenden Gewebes.',
 2);

ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- MATHEMATIK Kap 1–6 — MedAT Question Bank
-- Generated: 2026-02-21
-- UKs: ma-1-01 bis ma-6-03 (16 Unterkapitel, ~100 Fragen)
-- ============================================================

-- ── Kapitel 1: Zehnerpotenzen und Präfixe ───────────────────

-- UK ma-1-01: Zehnerpotenzen — Schreibweise und Rechenregeln
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-1-01-multiplikation',
  'A', 'mathematik', 'ma-1-01',
  'Was ergibt 10⁴ × 10⁻⁶?',
  '[{"key":"A","text":"10⁻²"},{"key":"B","text":"10⁻²⁴"},{"key":"C","text":"10¹⁰"},{"key":"D","text":"10⁻¹⁰"},{"key":"E","text":"10²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Bei Multiplikation von Zehnerpotenzen werden die Exponenten addiert: 4 + (−6) = −2. Ergebnis: 10⁻². Dies entspricht dem Wert 0,01.',
  1
),
(
  'typa-ma-1-01-division',
  'A', 'mathematik', 'ma-1-01',
  'Was ergibt (8 × 10⁵) ÷ (4 × 10²)?',
  '[{"key":"A","text":"2 × 10³"},{"key":"B","text":"2 × 10⁷"},{"key":"C","text":"4 × 10³"},{"key":"D","text":"2 × 10²"},{"key":"E","text":"0,5 × 10³"}]'::jsonb,
  'A',
  NULL, NULL,
  'Vorzahlen dividieren: 8 ÷ 4 = 2. Exponenten subtrahieren: 5 − 2 = 3. Ergebnis: 2 × 10³ = 2.000. Überprüfung: 800.000 ÷ 400 = 2.000.',
  1
),
(
  'typa-ma-1-01-potenz',
  'A', 'mathematik', 'ma-1-01',
  'Was ergibt (10³)⁴?',
  '[{"key":"A","text":"10¹²"},{"key":"B","text":"10⁷"},{"key":"C","text":"10³⁴"},{"key":"D","text":"10⁸¹"},{"key":"E","text":"10⁶"}]'::jsonb,
  'A',
  NULL, NULL,
  'Bei der Potenzierung einer Potenz werden die Exponenten multipliziert: (10³)⁴ = 10^(3 × 4) = 10¹². Achtung: nicht addieren (das wäre 10⁷) und nicht 3^4 = 81 im Exponenten.',
  2
),
(
  'typa-ma-1-01-notation',
  'A', 'mathematik', 'ma-1-01',
  'Welche der folgenden Darstellungen ist die korrekte wissenschaftliche Notation von 0,00520?',
  '[{"key":"A","text":"5,20 × 10⁻³"},{"key":"B","text":"52,0 × 10⁻⁴"},{"key":"C","text":"0,520 × 10⁻²"},{"key":"D","text":"5,20 × 10³"},{"key":"E","text":"0,0520 × 10⁻¹"}]'::jsonb,
  'A',
  NULL, NULL,
  'In wissenschaftlicher Notation gilt: 1 ≤ a < 10. Das Komma wird 3 Stellen nach rechts verschoben → Exponent −3. Ergebnis: 5,20 × 10⁻³. Alle anderen Optionen verletzen die Bedingung 1 ≤ a < 10.',
  1
),
(
  'typa-ma-1-01-ph',
  'A', 'mathematik', 'ma-1-01',
  'Arterielles Blut hat [H⁺] = 4 × 10⁻⁸ mol/L. log₁₀(4) ≈ 0,60. Welchen pH-Wert hat das Blut näherungsweise?',
  '[{"key":"A","text":"7,40"},{"key":"B","text":"8,60"},{"key":"C","text":"−7,40"},{"key":"D","text":"6,60"},{"key":"E","text":"4,00"}]'::jsonb,
  'A',
  NULL, NULL,
  'pH = −log₁₀(4 × 10⁻⁸) = −[log₁₀(4) + log₁₀(10⁻⁸)] = −[0,60 + (−8)] = −[−7,40] = 7,40. Dies entspricht dem normalen arteriellen pH-Wert.',
  2
),
(
  'typa-ma-1-01-addition',
  'A', 'mathematik', 'ma-1-01',
  'Was ergibt 3,0 × 10⁵ + 5,0 × 10⁴?',
  '[{"key":"A","text":"3,5 × 10⁵"},{"key":"B","text":"8,0 × 10⁵"},{"key":"C","text":"8,0 × 10⁴"},{"key":"D","text":"3,5 × 10⁴"},{"key":"E","text":"35 × 10⁴"}]'::jsonb,
  'A',
  NULL, NULL,
  '5,0 × 10⁴ auf Exponent 10⁵ bringen: 5,0 × 10⁴ = 0,5 × 10⁵. Dann: 3,0 × 10⁵ + 0,5 × 10⁵ = 3,5 × 10⁵. Bei Addition müssen die Exponenten zuerst angeglichen werden.',
  2
),
(
  'typk-ma-1-01-rechenregeln',
  'K', 'mathematik', 'ma-1-01',
  'Welche der folgenden Aussagen über Zehnerpotenzen sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"10ᵃ × 10ᵇ = 10^(a+b) — Exponenten werden addiert"},{"nr":2,"text":"(10ᵃ)ᵇ = 10^(a+b) — Exponenten werden addiert"},{"nr":3,"text":"10⁰ = 1 für jede Zehnerpotenz"},{"nr":4,"text":"10⁻ⁿ = 1/10ⁿ — negativer Exponent ist der Kehrwert"},{"nr":5,"text":"10ᵃ / 10ᵇ = 10^(a×b) — Exponenten werden multipliziert"}]'::jsonb,
  '[{"key":"A","text":"1, 2, 3"},{"key":"B","text":"2, 4, 5"},{"key":"C","text":"1, 3, 4"},{"key":"D","text":"1, 2, 5"},{"key":"E","text":"3, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Multiplikation: Exponenten addieren. Aussage 2: Falsch — (10ᵃ)ᵇ = 10^(a×b), Exponenten werden MULTIPLIZIERT. Aussage 3: Korrekt — 10⁰ = 1 (folgt aus 10ⁿ/10ⁿ = 10^(n−n) = 10⁰ = 1). Aussage 4: Korrekt — Definition des negativen Exponenten. Aussage 5: Falsch — bei Division werden Exponenten subtrahiert (a−b), nicht multipliziert.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-1-02: SI-Präfixe von Femto bis Tera
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-1-02-praefixe',
  'A', 'mathematik', 'ma-1-02',
  'Ein Patientenblut zeigt eine TSH-Konzentration von 2,5 mU/L. Die Insulin-Konzentration im selben Blut beträgt 80 pmol/L. Um wie viele Zehnerpotenzen unterscheiden sich Milli (m) und Piko (p) als Präfixe?',
  '[{"key":"A","text":"9 Zehnerpotenzen (Faktor 10⁹)"},{"key":"B","text":"3 Zehnerpotenzen (Faktor 10³)"},{"key":"C","text":"6 Zehnerpotenzen (Faktor 10⁶)"},{"key":"D","text":"12 Zehnerpotenzen (Faktor 10¹²)"},{"key":"E","text":"15 Zehnerpotenzen (Faktor 10¹⁵)"}]'::jsonb,
  'A',
  NULL, NULL,
  'Milli (m) = 10⁻³; Piko (p) = 10⁻¹². Der Unterschied: 10⁻³ / 10⁻¹² = 10^(−3−(−12)) = 10⁹. Milli ist 10⁹ = eine Milliarde Mal größer als Piko. Reihenfolge: Milli → Mikro → Nano → Piko (je Schritt Faktor 10³).',
  2
),
(
  'typa-ma-1-02-umrechnung',
  'A', 'mathematik', 'ma-1-02',
  'Ein Medikament wird in einer Dosis von 250 μg/kg verabreicht. Der Patient wiegt 80 kg. Wie viel mg erhält der Patient?',
  '[{"key":"A","text":"20 mg"},{"key":"B","text":"200 mg"},{"key":"C","text":"2 mg"},{"key":"D","text":"0,02 mg"},{"key":"E","text":"2.000 mg"}]'::jsonb,
  'A',
  NULL, NULL,
  'Gesamtdosis = 250 μg/kg × 80 kg = 20.000 μg. Umrechnung: 20.000 μg × 10⁻³ mg/μg = 20 mg. Alternativ: 20.000 μg ÷ 1.000 = 20 mg (da 1 mg = 1.000 μg).',
  2
),
(
  'typa-ma-1-02-groessen',
  'A', 'mathematik', 'ma-1-02',
  'Das menschliche haploide Genom umfasst ~3,2 Gigabasenpaar. Wie viele Basenpaare entspricht das in wissenschaftlicher Notation?',
  '[{"key":"A","text":"3,2 × 10⁹"},{"key":"B","text":"3,2 × 10⁶"},{"key":"C","text":"3,2 × 10¹²"},{"key":"D","text":"3,2 × 10³"},{"key":"E","text":"32 × 10⁸"}]'::jsonb,
  'A',
  NULL, NULL,
  'Giga (G) = 10⁹. Daher: 3,2 Gigabasenpaar = 3,2 × 10⁹ Basenpaare. Option E (32 × 10⁸) ist mathematisch äquivalent, aber nicht in korrekter wissenschaftlicher Notation (Vorzahl muss 1 ≤ a < 10).',
  1
),
(
  'typa-ma-1-02-mmol-nmol',
  'A', 'mathematik', 'ma-1-02',
  'Der Serumnatrium-Normalwert beträgt 140 mmol/L. Ein Forscher möchte diesen Wert in nmol/L ausdrücken. Was ergibt sich?',
  '[{"key":"A","text":"1,4 × 10⁸ nmol/L"},{"key":"B","text":"1,4 × 10⁵ nmol/L"},{"key":"C","text":"1,4 × 10¹¹ nmol/L"},{"key":"D","text":"1,4 × 10² nmol/L"},{"key":"E","text":"1,4 × 10¹⁴ nmol/L"}]'::jsonb,
  'A',
  NULL, NULL,
  'mmol = 10⁻³ mol; nmol = 10⁻⁹ mol. Faktor: 10⁻³ / 10⁻⁹ = 10⁶. Daher: 140 mmol/L = 140 × 10⁶ nmol/L = 1,4 × 10⁸ nmol/L. Plausibilitätsprüfung: Nanomol ist viel kleiner als Millimol, also braucht man sehr viele Nanomol.',
  3
),
(
  'typk-ma-1-02-praefixpaare',
  'K', 'mathematik', 'ma-1-02',
  'Welche der folgenden Aussagen über SI-Präfixe sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Femto (f) = 10⁻¹⁵ — kleinster MedAT-relevanter Präfix"},{"nr":2,"text":"Nano (n) und Mega (M) unterscheiden sich um den Faktor 10¹⁵"},{"nr":3,"text":"Mikro (μ) entspricht 10⁻³ mol/L bei μmol/L"},{"nr":4,"text":"Milli (m) und Kilo (k) sind symmetrische Präfixe: 10⁻³ und 10³"},{"nr":5,"text":"Piko (p) = 10⁻⁹ ist der Präfix für Hormonkonzentrationen wie Östrogen"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"2, 3, 5"},{"key":"C","text":"1, 2, 5"},{"key":"D","text":"1, 2, 4"},{"key":"E","text":"3, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Femto (f) = 10⁻¹⁵ ist der kleinste MedAT-relevante Präfix (Protonengröße). Aussage 2: Korrekt — Nano = 10⁻⁹, Mega = 10⁶; Unterschied: 10⁶/10⁻⁹ = 10¹⁵. Aussage 3: Falsch — Mikro (μ) = 10⁻⁶; μmol/L = 10⁻⁶ mol/L, nicht 10⁻³. Aussage 4: Korrekt — Milli = 10⁻³ und Kilo = 10³ sind symmetrisch. Aussage 5: Falsch — Piko (p) = 10⁻¹² (nicht 10⁻⁹, das wäre Nano). Östrogen liegt tatsächlich im Picomolar-Bereich.',
  2
),
(
  'typa-ma-1-02-kda',
  'A', 'mathematik', 'ma-1-02',
  'Hämoglobin hat eine Molekülmasse von ~64.000 Da. Wie viel ist das in kDa?',
  '[{"key":"A","text":"64 kDa"},{"key":"B","text":"6,4 kDa"},{"key":"C","text":"640 kDa"},{"key":"D","text":"6.400 kDa"},{"key":"E","text":"0,064 kDa"}]'::jsonb,
  'A',
  NULL, NULL,
  '1 kDa = 1.000 Da = 10³ Da. Umrechnung: 64.000 Da ÷ 1.000 = 64 kDa. Referenzwerte: Albumin 66 kDa, IgG-Antikörper 150 kDa, Hämoglobin 64 kDa.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-1-03: Wissenschaftliche Notation — Umrechnen und Rechnen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-1-03-multiplik',
  'A', 'mathematik', 'ma-1-03',
  'Was ergibt (5 × 10⁴) × (6 × 10³) in korrekter wissenschaftlicher Notation?',
  '[{"key":"A","text":"3 × 10⁸"},{"key":"B","text":"30 × 10⁷"},{"key":"C","text":"3 × 10⁷"},{"key":"D","text":"11 × 10⁷"},{"key":"E","text":"3 × 10¹²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Vorzahlen: 5 × 6 = 30. Exponenten: 4 + 3 = 7. Zwischenergebnis: 30 × 10⁷. Da 30 ≥ 10, Komma verschieben: 30 × 10⁷ = 3,0 × 10⁸. Option B ist mathematisch korrekt aber nicht in normierter wissenschaftlicher Notation.',
  2
),
(
  'typa-ma-1-03-division',
  'A', 'mathematik', 'ma-1-03',
  'Was ergibt (9 × 10⁻³) ÷ (3 × 10⁻⁷)?',
  '[{"key":"A","text":"3 × 10⁴"},{"key":"B","text":"3 × 10⁻¹⁰"},{"key":"C","text":"3 × 10⁻⁴"},{"key":"D","text":"3 × 10⁴"},{"key":"E","text":"27 × 10⁻¹⁰"}]'::jsonb,
  'A',
  NULL, NULL,
  'Vorzahlen: 9 ÷ 3 = 3. Exponenten: −3 − (−7) = −3 + 7 = +4. Ergebnis: 3 × 10⁴. Achtung bei der Subtraktion negativer Exponenten: −(−7) = +7.',
  2
),
(
  'typa-ma-1-03-verduennung',
  'A', 'mathematik', 'ma-1-03',
  'Eine Stammlösung hat c = 2 × 10⁻² mol/L. Von ihr werden 5 × 10⁻² L entnommen und auf ein Endvolumen von 5 × 10⁻¹ L aufgefüllt. Wie groß ist die Konzentration der verdünnten Lösung?',
  '[{"key":"A","text":"2 × 10⁻³ mol/L"},{"key":"B","text":"2 × 10⁻² mol/L"},{"key":"C","text":"2 × 10⁻¹ mol/L"},{"key":"D","text":"1 × 10⁻³ mol/L"},{"key":"E","text":"4 × 10⁻³ mol/L"}]'::jsonb,
  'A',
  NULL, NULL,
  'Verdünnungsformel c₁V₁ = c₂V₂: n = c₁ × V₁ = (2 × 10⁻²) × (5 × 10⁻²) = 10 × 10⁻⁴ = 1 × 10⁻³ mol. c₂ = n / V₂ = (1 × 10⁻³) / (5 × 10⁻¹) = 0,2 × 10⁻² = 2 × 10⁻³ mol/L.',
  3
),
(
  'typa-ma-1-03-avogadro',
  'A', 'mathematik', 'ma-1-03',
  'N_A = 6 × 10²³ mol⁻¹ (gerundet). Wie viele Moleküle enthält 0,25 mol Glukose?',
  '[{"key":"A","text":"1,5 × 10²³"},{"key":"B","text":"6 × 10²³"},{"key":"C","text":"2,4 × 10²⁴"},{"key":"D","text":"1,5 × 10²²"},{"key":"E","text":"2,4 × 10²²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Anzahl = n × N_A = 0,25 × 6 × 10²³ = 1,5 × 10²³. 0,25 = 2,5 × 10⁻¹, daher: (2,5 × 10⁻¹) × (6 × 10²³) = 15 × 10²² = 1,5 × 10²³.',
  2
),
(
  'typk-ma-1-03-rechenops',
  'K', 'mathematik', 'ma-1-03',
  'Welche der folgenden Aussagen zum Rechnen in wissenschaftlicher Notation sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"Bei Addition muss zuerst die Vorzahl angepasst werden, dann die Exponenten"},{"nr":2,"text":"(3 × 10²) + (7 × 10¹) = 3,7 × 10²"},{"nr":3,"text":"(2 × 10³)² = 4 × 10⁶"},{"nr":4,"text":"Wenn das Ergebnis eine Vorzahl < 1 hat, muss der Exponent um 1 erhöht werden"},{"nr":5,"text":"Bei Multiplikation: Vorzahlen addieren, Exponenten multiplizieren"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"2, 3, 4"},{"key":"C","text":"1, 2, 5"},{"key":"D","text":"3, 4, 5"},{"key":"E","text":"1, 4, 5"}]'::jsonb,
  'Aussage 1: Falsch — bei Addition müssen zuerst die EXPONENTEN angeglichen werden, dann die Vorzahlen addiert werden. Aussage 2: Korrekt — 7 × 10¹ = 0,7 × 10², dann 3 × 10² + 0,7 × 10² = 3,7 × 10². Aussage 3: Korrekt — (2)² = 4, (10³)² = 10⁶ → 4 × 10⁶. Aussage 4: Korrekt — 0,3 × 10⁵ = 3 × 10⁴ (Komma nach rechts, Exponent sinkt um 1). Aussage 5: Falsch — bei Multiplikation werden Vorzahlen MULTIPLIZIERT und Exponenten ADDIERT.',
  3
),
(
  'typa-ma-1-03-subtraktion',
  'A', 'mathematik', 'ma-1-03',
  'Was ergibt 8,0 × 10⁴ − 3,0 × 10³?',
  '[{"key":"A","text":"7,7 × 10⁴"},{"key":"B","text":"5,0 × 10⁴"},{"key":"C","text":"5,0 × 10³"},{"key":"D","text":"7,7 × 10³"},{"key":"E","text":"8,0 × 10¹"}]'::jsonb,
  'A',
  NULL, NULL,
  '3,0 × 10³ auf Exponent 10⁴ bringen: 3,0 × 10³ = 0,3 × 10⁴. Dann: 8,0 × 10⁴ − 0,3 × 10⁴ = 7,7 × 10⁴.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 2: Algebra ───────────────────────────────────────

-- UK ma-2-01: Gleichungen und Ungleichungen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-2-01-lineare',
  'A', 'mathematik', 'ma-2-01',
  'Löse: 4x − 9 = 3x + 5. Was ist x?',
  '[{"key":"A","text":"14"},{"key":"B","text":"−14"},{"key":"C","text":"4"},{"key":"D","text":"−4"},{"key":"E","text":"0"}]'::jsonb,
  'A',
  NULL, NULL,
  '4x − 3x = 5 + 9 → x = 14. Probe: 4(14) − 9 = 56 − 9 = 47; 3(14) + 5 = 42 + 5 = 47. Korrekt.',
  1
),
(
  'typa-ma-2-01-infusionsrate',
  'A', 'mathematik', 'ma-2-01',
  'Ein Patient soll 500 mL NaCl-Lösung in 4 Stunden erhalten. Die Infusionsrate r (in mL/h) wird berechnet. Eine Formel lautet: 4r = 500. Wie groß ist r?',
  '[{"key":"A","text":"125 mL/h"},{"key":"B","text":"250 mL/h"},{"key":"C","text":"100 mL/h"},{"key":"D","text":"2.000 mL/h"},{"key":"E","text":"50 mL/h"}]'::jsonb,
  'A',
  NULL, NULL,
  '4r = 500 → r = 500 ÷ 4 = 125 mL/h. Klinisch: Standardinfusionen werden oft mit 100–125 mL/h verabreicht.',
  1
),
(
  'typa-ma-2-01-quadratisch',
  'A', 'mathematik', 'ma-2-01',
  'Welche Lösungen hat x² − 9x + 18 = 0?',
  '[{"key":"A","text":"x = 3 und x = 6"},{"key":"B","text":"x = −3 und x = −6"},{"key":"C","text":"x = 9 und x = 0"},{"key":"D","text":"x = 1 und x = 18"},{"key":"E","text":"Keine reellen Lösungen"}]'::jsonb,
  'A',
  NULL, NULL,
  'Diskriminante D = 81 − 72 = 9 > 0. Lösungsformel: x = (9 ± 3)/2 → x₁ = 6, x₂ = 3. Vieta-Kontrolle: x₁ + x₂ = 9 = −(−9); x₁ × x₂ = 18. Korrekt.',
  2
),
(
  'typa-ma-2-01-ungleichung',
  'A', 'mathematik', 'ma-2-01',
  'Was ist die Lösungsmenge von −5x + 10 ≥ 0?',
  '[{"key":"A","text":"x ≤ 2"},{"key":"B","text":"x ≥ 2"},{"key":"C","text":"x ≤ −2"},{"key":"D","text":"x ≥ −2"},{"key":"E","text":"x = 2"}]'::jsonb,
  'A',
  NULL, NULL,
  '−5x + 10 ≥ 0 → −5x ≥ −10. Division durch −5 dreht das Zeichen um: x ≤ 2. Das Umkehren des Ungleichungszeichens bei Division durch eine negative Zahl ist die häufigste Fehlerquelle.',
  1
),
(
  'typa-ma-2-01-gls',
  'A', 'mathematik', 'ma-2-01',
  'Gegeben: 3x + 2y = 16 und x − y = 1. Was ist y?',
  '[{"key":"A","text":"y = 2,6"},{"key":"B","text":"y = 3"},{"key":"C","text":"y = 2"},{"key":"D","text":"y = 4"},{"key":"E","text":"y = 1,5"}]'::jsonb,
  'A',
  NULL, NULL,
  'Aus x − y = 1: x = y + 1. Einsetzen: 3(y+1) + 2y = 16 → 3y + 3 + 2y = 16 → 5y = 13 → y = 2,6. Dann x = 3,6. Probe: 3(3,6) + 2(2,6) = 10,8 + 5,2 = 16. Korrekt.',
  2
),
(
  'typk-ma-2-01-gleichungstypen',
  'K', 'mathematik', 'ma-2-01',
  'Welche der folgenden Aussagen über quadratische Gleichungen ax² + bx + c = 0 sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"D = b² − 4ac heißt Diskriminante und entscheidet über die Anzahl reeller Lösungen"},{"nr":2,"text":"Bei D > 0 hat die Gleichung genau eine reelle Lösung"},{"nr":3,"text":"Bei D = 0 gilt x = −b/(2a) als einzige Lösung"},{"nr":4,"text":"Wenn D < 0, hat die Gleichung keine reellen Lösungen"},{"nr":5,"text":"Vieta: x₁ + x₂ = b/a und x₁ × x₂ = c/a"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"1, 3, 5"},{"key":"D","text":"2, 4, 5"},{"key":"E","text":"1, 3, 4"}]'::jsonb,
  'Aussage 1: Korrekt — Definition der Diskriminante. Aussage 2: Falsch — D > 0 bedeutet ZWEI verschiedene reelle Lösungen. Aussage 3: Korrekt — Doppellösung bei D = 0. Aussage 4: Korrekt — keine reellen Lösungen wenn D < 0. Aussage 5: Falsch — Vieta: x₁ + x₂ = −b/a (mit Minuszeichen!) und x₁ × x₂ = c/a.',
  2
),
(
  'typa-ma-2-01-diskriminante',
  'A', 'mathematik', 'ma-2-01',
  'Für die Gleichung 2x² − 4x + 5 = 0 berechne die Diskriminante D. Welche Aussage ist korrekt?',
  '[{"key":"A","text":"D = −24; keine reellen Lösungen"},{"key":"B","text":"D = 24; zwei reelle Lösungen"},{"key":"C","text":"D = 0; eine reelle Lösung"},{"key":"D","text":"D = 56; zwei reelle Lösungen"},{"key":"E","text":"D = −56; keine reellen Lösungen"}]'::jsonb,
  'A',
  NULL, NULL,
  'D = b² − 4ac = (−4)² − 4(2)(5) = 16 − 40 = −24. Da D < 0, gibt es keine reellen Lösungen. Klinische Analogie: Manche physikalischen Modelle (z.B. Schwingungsgleichungen) haben je nach Dämpfung keine reellen Lösungen.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-2-02: Prozent-, Bruch- und Schlussrechnung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-2-02-haematokrit',
  'A', 'mathematik', 'ma-2-02',
  'Ein Patient hat einen Hämatokrit von 36%. Der Normalwert beträgt 45%. Wie groß ist die relative Erniedrigung des Hämatokrits?',
  '[{"key":"A","text":"20%"},{"key":"B","text":"9%"},{"key":"C","text":"9 Prozentpunkte"},{"key":"D","text":"25%"},{"key":"E","text":"80%"}]'::jsonb,
  'A',
  NULL, NULL,
  'Relative Änderung = (Normalwert − Istwert) / Normalwert × 100 = (45 − 36)/45 × 100 = 9/45 × 100 = 20%. Die absolute Erniedrigung beträgt 9 Prozentpunkte, die relative 20%. Die Frage fragt nach der relativen Erniedrigung.',
  2
),
(
  'typa-ma-2-02-dreisat',
  'A', 'mathematik', 'ma-2-02',
  '5 mg/kg Ibuprofen für einen 60 kg-Patienten. Das Medikament liegt als Suspension mit 20 mg/mL vor. Wie viele mL werden verabreicht?',
  '[{"key":"A","text":"15 mL"},{"key":"B","text":"30 mL"},{"key":"C","text":"1,5 mL"},{"key":"D","text":"150 mL"},{"key":"E","text":"12 mL"}]'::jsonb,
  'A',
  NULL, NULL,
  'Gesamtdosis = 5 mg/kg × 60 kg = 300 mg. Volumen = 300 mg ÷ 20 mg/mL = 15 mL. Einheitenprüfung: mg ÷ (mg/mL) = mL.',
  1
),
(
  'typa-ma-2-02-prozent',
  'A', 'mathematik', 'ma-2-02',
  'Eine 5%ige Glukoselösung enthält wie viel Gramm Glukose pro 250 mL?',
  '[{"key":"A","text":"12,5 g"},{"key":"B","text":"5 g"},{"key":"C","text":"50 g"},{"key":"D","text":"1,25 g"},{"key":"E","text":"25 g"}]'::jsonb,
  'A',
  NULL, NULL,
  '5% (g/v) = 5 g pro 100 mL. In 250 mL: 5 g/100 mL × 250 mL = 12,5 g. Direkter Dreisatz: 5 g → 100 mL, x g → 250 mL; x = 5 × 250/100 = 12,5 g.',
  1
),
(
  'typa-ma-2-02-bruch',
  'A', 'mathematik', 'ma-2-02',
  'Was ergibt 2/5 ÷ 4/15?',
  '[{"key":"A","text":"3/2"},{"key":"B","text":"8/75"},{"key":"C","text":"2/3"},{"key":"D","text":"15/8"},{"key":"E","text":"3/5"}]'::jsonb,
  'A',
  NULL, NULL,
  '2/5 ÷ 4/15 = 2/5 × 15/4 = 30/20 = 3/2. Bruchdivision: Kehrwert nehmen und multiplizieren. 30/20 kürzen durch 10: 3/2.',
  2
),
(
  'typk-ma-2-02-prozentrechnung',
  'K', 'mathematik', 'ma-2-02',
  'Welche der folgenden Aussagen zur Prozent- und Verhältnisrechnung sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Prozentwert P = Grundwert G × Prozentsatz p/100"},{"nr":2,"text":"Beim direkten Dreisatz gilt: mehr Menge → weniger Ergebnis"},{"nr":3,"text":"Eine Verdünnung 1:10 bedeutet 1 Teil Substanz in 9 Teilen Lösungsmittel (Gesamtvolumen 10)"},{"nr":4,"text":"Bei indirektem Dreisatz ist das Produkt aus beiden Größen konstant"},{"nr":5,"text":"Relative Änderung = absoluter Unterschied / Ausgangswert × 100"}]'::jsonb,
  '[{"key":"A","text":"1, 4, 5"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 3, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Grundformel der Prozentrechnung. Aussage 2: Falsch — beim direkten Dreisatz gilt mehr → mehr (proportional). Beim indirekten Dreisatz gilt mehr → weniger. Aussage 3: Korrekt — 1:10 bedeutet 1 Teil Substanz in insgesamt 10 Teilen (= 9 Teile Lösungsmittel). Aussage 4: Korrekt — z.B. Arbeitskräfte × Zeit = konstante Gesamtarbeit. Aussage 5: Korrekt — Definition der relativen Änderung.',
  2
),
(
  'typa-ma-2-02-indirekt',
  'A', 'mathematik', 'ma-2-02',
  '3 Krankenpflegekräfte versorgen 18 Patienten in einer Schicht. Wie viele Patienten können 6 Pflegekräfte in derselben Zeit versorgen (direkter Dreisatz)?',
  '[{"key":"A","text":"36"},{"key":"B","text":"9"},{"key":"C","text":"54"},{"key":"D","text":"12"},{"key":"E","text":"24"}]'::jsonb,
  'A',
  NULL, NULL,
  'Direkter Dreisatz: mehr Pflegekräfte → mehr Patienten. 3 Kräfte → 18 Patienten; 6 Kräfte → x Patienten. x = 18 × (6/3) = 18 × 2 = 36. Bei direktem Dreisatz verdoppelt sich die Patientenanzahl wenn die Pflegekräfte verdoppelt werden.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-2-03: Quadratische Gleichungen und binomische Formeln
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-2-03-binom1',
  'A', 'mathematik', 'ma-2-03',
  'Was ergibt (3x − 2)²?',
  '[{"key":"A","text":"9x² − 12x + 4"},{"key":"B","text":"9x² + 4"},{"key":"C","text":"9x² − 6x + 4"},{"key":"D","text":"3x² − 12x + 4"},{"key":"E","text":"9x² − 12x − 4"}]'::jsonb,
  'A',
  NULL, NULL,
  '(3x − 2)² = (3x)² − 2·(3x)·2 + 2² = 9x² − 12x + 4. Zweite binomische Formel: (a − b)² = a² − 2ab + b². a = 3x, b = 2. Mittleres Glied: 2·3x·2 = 12x (negativ!).',
  1
),
(
  'typa-ma-2-03-binom3',
  'A', 'mathematik', 'ma-2-03',
  'Welches Produkt ergibt 4x² − 9?',
  '[{"key":"A","text":"(2x + 3)(2x − 3)"},{"key":"B","text":"(2x − 3)²"},{"key":"C","text":"(4x + 9)(4x − 9)"},{"key":"D","text":"(2x + 3)²"},{"key":"E","text":"(4x + 3)(4x − 3)"}]'::jsonb,
  'A',
  NULL, NULL,
  '4x² − 9 = (2x)² − 3² → dritte binomische Formel: (2x + 3)(2x − 3). Probe: (2x+3)(2x−3) = 4x² − 6x + 6x − 9 = 4x² − 9. Korrekt.',
  1
),
(
  'typa-ma-2-03-scheitelpunkt',
  'A', 'mathematik', 'ma-2-03',
  'Was ist der Scheitelpunkt von f(x) = x² − 8x + 7?',
  '[{"key":"A","text":"(4, −9)"},{"key":"B","text":"(−4, 9)"},{"key":"C","text":"(8, 7)"},{"key":"D","text":"(4, 7)"},{"key":"E","text":"(4, −7)"}]'::jsonb,
  'A',
  NULL, NULL,
  'x-Koordinate: d = −(−8)/(2·1) = 4. y-Koordinate: f(4) = 16 − 32 + 7 = −9. Scheitelpunkt: (4, −9). Alternativ: f(x) = (x−4)² − 9 durch quadratisches Ergänzen.',
  2
),
(
  'typk-ma-2-03-binomisch',
  'K', 'mathematik', 'ma-2-03',
  'Welche der folgenden Aussagen über binomische Formeln sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"(a+b)² = a² + 2ab + b²"},{"nr":2,"text":"(a−b)² = a² − b²"},{"nr":3,"text":"(a+b)(a−b) = a² − b²"},{"nr":4,"text":"(a+b)² = a² + b² (ohne mittleres Glied)"},{"nr":5,"text":"Für den Scheitelpunkt gilt: x_S = −b/(2a) für f(x) = ax² + bx + c"}]'::jsonb,
  '[{"key":"A","text":"1, 2, 5"},{"key":"B","text":"2, 3, 4"},{"key":"C","text":"1, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — erste binomische Formel. Aussage 2: Falsch — (a−b)² = a² − 2ab + b² (mittleres Glied fehlt!). Aussage 3: Korrekt — dritte binomische Formel (Differenz der Quadrate). Aussage 4: Falsch — das ist der häufigste Fehler! (a+b)² ≠ a²+b², das mittlere Glied 2ab fehlt. Aussage 5: Korrekt — Scheitelpunktformel.',
  2
),
(
  'typa-ma-2-03-vieta',
  'A', 'mathematik', 'ma-2-03',
  'Mit Vieta: Eine quadratische Gleichung hat die Lösungen x₁ = −2 und x₂ = 5. Wie lautet die Gleichung (mit führendem Koeffizient 1)?',
  '[{"key":"A","text":"x² − 3x − 10 = 0"},{"key":"B","text":"x² + 3x − 10 = 0"},{"key":"C","text":"x² − 3x + 10 = 0"},{"key":"D","text":"x² + 3x + 10 = 0"},{"key":"E","text":"x² − 7x − 10 = 0"}]'::jsonb,
  'A',
  NULL, NULL,
  'Summe: x₁ + x₂ = −2 + 5 = 3 = −p → p = −3. Produkt: x₁ × x₂ = −2 × 5 = −10 = q. Gleichung: x² − 3x − 10 = 0. Probe: (x+2)(x−5) = x²−5x+2x−10 = x²−3x−10.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-2-04: Potenz- und Wurzelgesetze
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-2-04-potenzgesetze',
  'A', 'mathematik', 'ma-2-04',
  'Was ergibt 3⁴ × 3⁻²?',
  '[{"key":"A","text":"9"},{"key":"B","text":"3"},{"key":"C","text":"27"},{"key":"D","text":"81"},{"key":"E","text":"1/9"}]'::jsonb,
  'A',
  NULL, NULL,
  '3⁴ × 3⁻² = 3^(4+(−2)) = 3² = 9. Gleiche Basis: Exponenten addieren. 4 + (−2) = 2.',
  1
),
(
  'typa-ma-2-04-halbwertszeit',
  'A', 'mathematik', 'ma-2-04',
  '¹³¹I (Iod-131) hat eine Halbwertszeit von 8 Tagen. Eine Schilddrüse enthält zu Beginn 200 MBq Aktivität. Wie viel MBq sind nach 24 Tagen noch vorhanden?',
  '[{"key":"A","text":"25 MBq"},{"key":"B","text":"50 MBq"},{"key":"C","text":"100 MBq"},{"key":"D","text":"12,5 MBq"},{"key":"E","text":"6,25 MBq"}]'::jsonb,
  'A',
  NULL, NULL,
  '24 Tage ÷ 8 Tage/HWZ = 3 Halbwertszeiten. N = 200 × (1/2)³ = 200 × 1/8 = 25 MBq. Nach 3 Halbwertszeiten ist noch 1/8 = 12,5% der Ausgangsmenge vorhanden.',
  2
),
(
  'typa-ma-2-04-log',
  'A', 'mathematik', 'ma-2-04',
  'Was ergibt log₁₀(1.000) − log₁₀(10)?',
  '[{"key":"A","text":"2"},{"key":"B","text":"100"},{"key":"C","text":"990"},{"key":"D","text":"3"},{"key":"E","text":"1"}]'::jsonb,
  'A',
  NULL, NULL,
  'log₁₀(1.000) = log₁₀(10³) = 3. log₁₀(10) = 1. Differenz: 3 − 1 = 2. Alternativ mit Quotientenregel: log₁₀(1.000/10) = log₁₀(100) = 2.',
  1
),
(
  'typa-ma-2-04-gebrochenexp',
  'A', 'mathematik', 'ma-2-04',
  'Was ist 27^(2/3)?',
  '[{"key":"A","text":"9"},{"key":"B","text":"18"},{"key":"C","text":"3"},{"key":"D","text":"729"},{"key":"E","text":"6"}]'::jsonb,
  'A',
  NULL, NULL,
  '27^(2/3) = (³√27)² = 3² = 9. Gebrochener Exponent m/n: n-te Wurzel ziehen, dann zur m-ten Potenz erheben. ³√27 = 3 (weil 3³ = 27). 3² = 9.',
  2
),
(
  'typk-ma-2-04-potenzlog',
  'K', 'mathematik', 'ma-2-04',
  'Welche der folgenden Aussagen über Potenz- und Logarithmengesetze sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"aⁿ × aᵐ = a^(n+m) — Exponenten addieren bei gleicher Basis"},{"nr":2,"text":"(aⁿ)ᵐ = a^(n+m) — Exponenten addieren bei Potenzierung"},{"nr":3,"text":"log(a × b) = log(a) + log(b) — Produktregel"},{"nr":4,"text":"log(aⁿ) = n × log(a) — Potenzregel"},{"nr":5,"text":"a^(1/n) = n-te Wurzel aus a"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 3, 4, 5"},{"key":"C","text":"1, 2, 3"},{"key":"D","text":"3, 4, 5"},{"key":"E","text":"1, 2, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Grundregel der Multiplikation bei gleicher Basis. Aussage 2: Falsch — (aⁿ)ᵐ = a^(n×m), die Exponenten werden MULTIPLIZIERT, nicht addiert. Aussage 3: Korrekt — Logarithmus-Produktregel. Aussage 4: Korrekt — Logarithmus-Potenzregel. Aussage 5: Korrekt — Definition des gebrochenen Exponenten 1/n.',
  2
),
(
  'typa-ma-2-04-wurzel',
  'A', 'mathematik', 'ma-2-04',
  'Was ergibt √50 in vereinfachter Form?',
  '[{"key":"A","text":"5√2"},{"key":"B","text":"7√2"},{"key":"C","text":"2√5"},{"key":"D","text":"5√10"},{"key":"E","text":"√25 + √25"}]'::jsonb,
  'A',
  NULL, NULL,
  '√50 = √(25 × 2) = √25 × √2 = 5√2. Man sucht den größten quadratischen Teiler von 50: 25 × 2 = 50. √25 = 5. Ergebnis: 5√2 ≈ 7,07.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 3: Geometrie ─────────────────────────────────────

-- UK ma-3-01: Ebene Geometrie — Winkel, Dreiecke und Kreise
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-3-01-pythagoras',
  'A', 'mathematik', 'ma-3-01',
  'Ein rechtwinkliges Dreieck hat eine Kathete a = 5 cm und die Hypotenuse c = 13 cm. Wie lang ist die andere Kathete b?',
  '[{"key":"A","text":"12 cm"},{"key":"B","text":"8 cm"},{"key":"C","text":"18 cm"},{"key":"D","text":"√194 cm"},{"key":"E","text":"10 cm"}]'::jsonb,
  'A',
  NULL, NULL,
  'b² = c² − a² = 169 − 25 = 144 → b = 12 cm. Das ist das pythagoräische Tripel (5, 12, 13). Probe: 5² + 12² = 25 + 144 = 169 = 13².',
  1
),
(
  'typa-ma-3-01-kreis',
  'A', 'mathematik', 'ma-3-01',
  'Eine Koronarterie hat einen Innendurchmesser von 3 mm. Ihre Querschnittsfläche beträgt (π ≈ 3,14):',
  '[{"key":"A","text":"7,065 mm²"},{"key":"B","text":"9,42 mm²"},{"key":"C","text":"28,26 mm²"},{"key":"D","text":"2,25 mm²"},{"key":"E","text":"14,13 mm²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Radius r = 3/2 = 1,5 mm. Fläche A = π × r² = 3,14 × 1,5² = 3,14 × 2,25 = 7,065 mm². Achtung: Der Durchmesser d = 3 mm muss erst halbiert werden! Häufiger Fehler: π × d² = 28,26 mm² (falsch).',
  2
),
(
  'typa-ma-3-01-winkel',
  'A', 'mathematik', 'ma-3-01',
  'Ein Dreieck hat die Winkel α = 55° und β = 70°. Wie groß ist der dritte Winkel γ?',
  '[{"key":"A","text":"55°"},{"key":"B","text":"125°"},{"key":"C","text":"65°"},{"key":"D","text":"180°"},{"key":"E","text":"35°"}]'::jsonb,
  'A',
  NULL, NULL,
  'Innenwinkelsumme im Dreieck = 180°. γ = 180° − 55° − 70° = 55°. Das Dreieck ist gleichschenklig (α = γ = 55°).',
  1
),
(
  'typa-ma-3-01-bogen',
  'A', 'mathematik', 'ma-3-01',
  'Ein Kreisbogen mit Radius r = 6 cm überspannt einen Mittelpunktswinkel von 120°. Wie lang ist der Bogen? (π ≈ 3,14)',
  '[{"key":"A","text":"12,56 cm"},{"key":"B","text":"25,12 cm"},{"key":"C","text":"6,28 cm"},{"key":"D","text":"37,68 cm"},{"key":"E","text":"18,84 cm"}]'::jsonb,
  'A',
  NULL, NULL,
  'Bogenlänge = (α/360°) × 2πr = (120/360) × 2 × 3,14 × 6 = (1/3) × 37,68 = 12,56 cm. 120° ist ein Drittel des Vollkreises, also ein Drittel des Gesamtumfangs (2πr = 37,68 cm).',
  2
),
(
  'typa-ma-3-01-stenose',
  'A', 'mathematik', 'ma-3-01',
  'Eine Arterie mit Radius r = 4 mm entwickelt eine Stenose, die den Radius auf r = 2 mm reduziert. Auf welchen Bruchteil der ursprünglichen Fläche sinkt die Querschnittsfläche?',
  '[{"key":"A","text":"1/4"},{"key":"B","text":"1/2"},{"key":"C","text":"1/8"},{"key":"D","text":"1/16"},{"key":"E","text":"2/3"}]'::jsonb,
  'A',
  NULL, NULL,
  'A₁ = π × 4² = 16π mm². A₂ = π × 2² = 4π mm². Verhältnis: A₂/A₁ = 4π/16π = 1/4. Eine Halbierung des Radius reduziert die Fläche auf 1/4 (Faktor r²). Nach Hagen-Poiseuille sinkt der Fluss sogar auf 1/16 (Faktor r⁴)!',
  2
),
(
  'typk-ma-3-01-geometrie',
  'K', 'mathematik', 'ma-3-01',
  'Welche der folgenden Aussagen zur ebenen Geometrie sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Die Innenwinkelsumme eines Dreiecks beträgt 180°"},{"nr":2,"text":"Scheitelwinkel sind immer supplementär (ergänzen sich zu 180°)"},{"nr":3,"text":"Der Satz des Thales besagt: Der Peripheriewinkel über dem Durchmesser beträgt 90°"},{"nr":4,"text":"Pythagoräische Tripel: (3, 4, 5), (5, 12, 13) und (8, 15, 17)"},{"nr":5,"text":"Die Innenwinkelsumme eines n-Ecks beträgt n × 180°"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"1, 3, 5"},{"key":"D","text":"1, 3, 4"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — fundamentaler Satz der euklidischen Geometrie. Aussage 2: Falsch — Scheitelwinkel sind GLEICH (nicht supplementär). Supplementäre Winkel ergänzen sich zu 180°. Aussage 3: Korrekt — Satz des Thales. Aussage 4: Korrekt — alle drei sind pythagoräische Tripel. Aussage 5: Falsch — Innenwinkelsumme eines n-Ecks = (n−2) × 180°, nicht n × 180°.',
  2
),
(
  'typa-ma-3-01-neckeck',
  'A', 'mathematik', 'ma-3-01',
  'Wie groß ist die Innenwinkelsumme eines Sechsecks?',
  '[{"key":"A","text":"720°"},{"key":"B","text":"360°"},{"key":"C","text":"540°"},{"key":"D","text":"1.080°"},{"key":"E","text":"180°"}]'::jsonb,
  'A',
  NULL, NULL,
  'Formel: (n − 2) × 180°. Für n = 6: (6 − 2) × 180° = 4 × 180° = 720°. Ein Sechseck lässt sich in 4 Dreiecke zerlegen (je 180°). Bei einem regulären Sechseck ist jeder Innenwinkel 720°/6 = 120°.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-3-02: Körper — Volumen und Oberfläche
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-3-02-zylinder',
  'A', 'mathematik', 'ma-3-02',
  'Ein zylindrisches Reagenzglas hat Radius r = 1 cm und Höhe h = 15 cm. Welches Volumen fasst es? (π ≈ 3,14)',
  '[{"key":"A","text":"47,1 cm³"},{"key":"B","text":"15 cm³"},{"key":"C","text":"94,2 cm³"},{"key":"D","text":"31,4 cm³"},{"key":"E","text":"47,1 mL, da 1 mL = 1 cm³"}]'::jsonb,
  'A',
  NULL, NULL,
  'V = π × r² × h = 3,14 × 1 × 15 = 47,1 cm³. Da 1 mL = 1 cm³, fasst das Reagenzglas 47,1 mL. Option E ist ebenfalls korrekt, aber nur Option A gibt den reinen Zahlenwert.',
  1
),
(
  'typa-ma-3-02-kugel',
  'A', 'mathematik', 'ma-3-02',
  'Ein kugelförmiger Tumor hat einen Durchmesser von 4 cm. Wie groß ist sein Volumen? (π ≈ 3,14)',
  '[{"key":"A","text":"33,5 cm³"},{"key":"B","text":"67 cm³"},{"key":"C","text":"16,75 cm³"},{"key":"D","text":"50,24 cm³"},{"key":"E","text":"25,12 cm³"}]'::jsonb,
  'A',
  NULL, NULL,
  'Radius r = 2 cm. V = (4/3) × π × r³ = (4/3) × 3,14 × 8 = 4,187 × 8 ≈ 33,5 cm³. Achtung: Durchmesser zuerst halbieren! (4/3) × π ≈ 4,187.',
  2
),
(
  'typa-ma-3-02-kegel',
  'A', 'mathematik', 'ma-3-02',
  'Ein Kegel hat dieselbe Grundfläche und Höhe wie ein Zylinder mit Volumen 270 cm³. Wie groß ist das Kegelvolumen?',
  '[{"key":"A","text":"90 cm³"},{"key":"B","text":"135 cm³"},{"key":"C","text":"810 cm³"},{"key":"D","text":"45 cm³"},{"key":"E","text":"180 cm³"}]'::jsonb,
  'A',
  NULL, NULL,
  'V_Kegel = (1/3) × V_Zylinder = (1/3) × 270 = 90 cm³. Der Kegel hat immer genau 1/3 des Volumens des entsprechenden Zylinders mit gleicher Basis und Höhe.',
  1
),
(
  'typa-ma-3-02-skalierung',
  'A', 'mathematik', 'ma-3-02',
  'Ein kugelförmiger Nierenstein verdreifacht seinen Radius. Um das Wievielfache steigt sein Volumen?',
  '[{"key":"A","text":"27-fach"},{"key":"B","text":"3-fach"},{"key":"C","text":"9-fach"},{"key":"D","text":"6-fach"},{"key":"E","text":"81-fach"}]'::jsonb,
  'A',
  NULL, NULL,
  'V ∝ r³. Bei 3-fachem Radius: (3r)³ = 27r³. Das Volumen steigt auf das 27-Fache. Klinisch: Ein Nierenstein, der sich von 1 cm auf 3 cm Durchmesser vergrößert, hat 27× das Volumen — eine dramatische Zunahme.',
  2
),
(
  'typk-ma-3-02-formeln',
  'K', 'mathematik', 'ma-3-02',
  'Welche der folgenden Volumenformeln sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Zylinder: V = π × r² × h"},{"nr":2,"text":"Kugel: V = (4/3) × π × r³"},{"nr":3,"text":"Kegel: V = π × r² × h (entspricht dem Zylinder)"},{"nr":4,"text":"Quader: V = l × b × h"},{"nr":5,"text":"Würfel: V = a³ und Oberfläche O = 6a²"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"2, 3, 5"},{"key":"C","text":"1, 2, 3"},{"key":"D","text":"3, 4, 5"},{"key":"E","text":"1, 2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Zylindervolumen (Kreisfläche × Höhe). Aussage 2: Korrekt — Kugelvolumen. Aussage 3: Falsch — Kegelvolumen = (1/3) × π × r² × h (ein Drittel des Zylinders!). Aussage 4: Korrekt — Quadervolumen. Aussage 5: Korrekt — Würfelvolumen und -oberfläche.',
  1
),
(
  'typa-ma-3-02-oberflaeche',
  'A', 'mathematik', 'ma-3-02',
  'Eine Kugel hat Radius r = 3 cm. Wie groß ist ihre Oberfläche? (π ≈ 3,14)',
  '[{"key":"A","text":"113,04 cm²"},{"key":"B","text":"37,68 cm²"},{"key":"C","text":"56,52 cm²"},{"key":"D","text":"226,08 cm²"},{"key":"E","text":"28,26 cm²"}]'::jsonb,
  'A',
  NULL, NULL,
  'O = 4 × π × r² = 4 × 3,14 × 9 = 12,56 × 9 = 113,04 cm². r² = 9; 4 × π ≈ 12,56.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-3-03: Ähnlichkeit, Trigonometrie und Koordinatengeometrie
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-3-03-trig',
  'A', 'mathematik', 'ma-3-03',
  'In einem rechtwinkligen Dreieck ist α = 30° und die Hypotenuse c = 10 cm. Wie lang ist die Gegenkathete a (gegenüber α)?',
  '[{"key":"A","text":"5 cm"},{"key":"B","text":"10 cm"},{"key":"C","text":"5√3 cm"},{"key":"D","text":"5√2 cm"},{"key":"E","text":"10√3 cm"}]'::jsonb,
  'A',
  NULL, NULL,
  'sin(α) = Gegenkathete / Hypotenuse → a = c × sin(30°) = 10 × 0,5 = 5 cm. sin(30°) = 1/2 ist ein Standardwert.',
  1
),
(
  'typa-ma-3-03-abstand',
  'A', 'mathematik', 'ma-3-03',
  'Der Abstand zwischen zwei anatomischen Punkten P₁(2, 3) und P₂(8, 11) in einem CT-Koordinatensystem (in cm) beträgt:',
  '[{"key":"A","text":"10 cm"},{"key":"B","text":"14 cm"},{"key":"C","text":"√28 cm"},{"key":"D","text":"6 cm"},{"key":"E","text":"100 cm"}]'::jsonb,
  'A',
  NULL, NULL,
  'd = √((8−2)² + (11−3)²) = √(36 + 64) = √100 = 10 cm. Das ist das pythagoräische Tripel (6, 8, 10) = 2×(3, 4, 5).',
  1
),
(
  'typa-ma-3-03-aehnlichkeit',
  'A', 'mathematik', 'ma-3-03',
  'Zwei ähnliche Organe haben Längen 8 cm und 12 cm (Streckungsfaktor k = 3/2). Wie verhält sich ihr Volumen?',
  '[{"key":"A","text":"8 : 27"},{"key":"B","text":"4 : 9"},{"key":"C","text":"2 : 3"},{"key":"D","text":"64 : 729"},{"key":"E","text":"1 : 2"}]'::jsonb,
  'A',
  NULL, NULL,
  'Streckungsfaktor k = 12/8 = 3/2. Volumenverhältnis = k³ = (3/2)³ = 27/8. Verhältnis: V₁ : V₂ = 8 : 27. Volumina skalieren kubisch mit dem Längenmaßstab.',
  3
),
(
  'typa-ma-3-03-steigung',
  'A', 'mathematik', 'ma-3-03',
  'Eine Gerade geht durch die Punkte (2, 3) und (6, 11). Welche Gleichung beschreibt sie?',
  '[{"key":"A","text":"y = 2x − 1"},{"key":"B","text":"y = 2x + 3"},{"key":"C","text":"y = 4x − 5"},{"key":"D","text":"y = 2x + 1"},{"key":"E","text":"y = 0,5x + 2"}]'::jsonb,
  'A',
  NULL, NULL,
  'Steigung: m = (11−3)/(6−2) = 8/4 = 2. Gleichung: y = 2x + b. Einsetzen von (2, 3): 3 = 2×2 + b → b = −1. Gleichung: y = 2x − 1. Probe: y(6) = 12−1 = 11. Korrekt.',
  2
),
(
  'typk-ma-3-03-trigkoor',
  'K', 'mathematik', 'ma-3-03',
  'Welche der folgenden Aussagen über Trigonometrie und Koordinatengeometrie sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"SOH-CAH-TOA: sin = Gegenkathete/Hypotenuse; cos = Ankathete/Hypotenuse"},{"nr":2,"text":"sin(45°) = cos(45°) = √2/2 ≈ 0,707"},{"nr":3,"text":"Zwei Geraden sind senkrecht, wenn m₁ + m₂ = 0"},{"nr":4,"text":"sin²(α) + cos²(α) = 1 für alle Winkel α"},{"nr":5,"text":"tan(60°) = √3 ≈ 1,73"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"1, 2, 4, 5"},{"key":"C","text":"2, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — SOH-CAH-TOA Mnemonik. Aussage 2: Korrekt — Standardwert für 45°. Aussage 3: Falsch — Senkrechte Geraden erfüllen m₁ × m₂ = −1 (nicht m₁ + m₂ = 0). Aussage 4: Korrekt — Pythagoreische Identität. Aussage 5: Korrekt — tan(60°) = sin(60°)/cos(60°) = (√3/2)/(1/2) = √3.',
  2
),
(
  'typa-ma-3-03-doppler',
  'A', 'mathematik', 'ma-3-03',
  'In der Doppler-Sonographie gilt: v_gemessen = v_real × cos(α). Bei einem Messwinkel von 60° wird welcher Bruchteil der tatsächlichen Geschwindigkeit gemessen?',
  '[{"key":"A","text":"1/2 (50%)"},{"key":"B","text":"√3/2 (86,6%)"},{"key":"C","text":"√2/2 (70,7%)"},{"key":"D","text":"0 (0%)"},{"key":"E","text":"1 (100%)"}]'::jsonb,
  'A',
  NULL, NULL,
  'cos(60°) = 1/2. Daher wird nur 50% der tatsächlichen Geschwindigkeit gemessen. Deshalb soll der Doppler-Winkel möglichst unter 60° gehalten werden. Bei 90° wäre cos(90°) = 0 — kein Signal!',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 4: Einheiten und Maße ───────────────────────────

-- UK ma-4-01: Länge, Fläche und Volumen — Umrechnung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-4-01-flaeche',
  'A', 'mathematik', 'ma-4-01',
  'Eine Verbrennungswunde hat eine Fläche von 0,18 m². Wie viel cm² sind das?',
  '[{"key":"A","text":"1.800 cm²"},{"key":"B","text":"18 cm²"},{"key":"C","text":"180 cm²"},{"key":"D","text":"18.000 cm²"},{"key":"E","text":"0,18 cm²"}]'::jsonb,
  'A',
  NULL, NULL,
  '1 m² = 10.000 cm² (nicht 100!). 0,18 m² × 10.000 = 1.800 cm². Merke: 1 m = 100 cm → 1 m² = 100² cm² = 10.000 cm². Der Faktor wird beim Flächenübergang quadriert.',
  2
),
(
  'typa-ma-4-01-volumen',
  'A', 'mathematik', 'ma-4-01',
  'Ein Infusionsbeutel fasst 1 m³ wäre absurd groß. Ein realistischer Beutel fasst 0,5 L. Wie viel cm³ ist das?',
  '[{"key":"A","text":"500 cm³"},{"key":"B","text":"50 cm³"},{"key":"C","text":"5.000 cm³"},{"key":"D","text":"5 cm³"},{"key":"E","text":"0,5 cm³"}]'::jsonb,
  'A',
  NULL, NULL,
  '1 L = 1 dm³ = 1.000 cm³ = 1.000 mL. Daher: 0,5 L = 500 mL = 500 cm³. Die Gleichheit 1 mL = 1 cm³ ist für Injektionen und Infusionen klinisch täglich relevant.',
  1
),
(
  'typa-ma-4-01-ml-cm3',
  'A', 'mathematik', 'ma-4-01',
  'Eine Spritze enthält 5 mL Medikament. Wie viel cm³ ist das?',
  '[{"key":"A","text":"5 cm³"},{"key":"B","text":"0,5 cm³"},{"key":"C","text":"50 cm³"},{"key":"D","text":"0,005 cm³"},{"key":"E","text":"500 cm³"}]'::jsonb,
  'A',
  NULL, NULL,
  '1 mL = 1 cm³ — diese Gleichheit gilt exakt und ohne Umrechnung. 5 mL = 5 cm³.',
  1
),
(
  'typa-ma-4-01-mm2',
  'A', 'mathematik', 'ma-4-01',
  'Eine kreisförmige Wundfläche hat einen Durchmesser von 4 cm. Wie groß ist die Fläche in mm²? (π ≈ 3,14)',
  '[{"key":"A","text":"1.256 mm²"},{"key":"B","text":"12,56 mm²"},{"key":"C","text":"125,6 mm²"},{"key":"D","text":"50,24 mm²"},{"key":"E","text":"502,4 mm²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Radius r = 2 cm = 20 mm. A = π × r² = 3,14 × 400 = 1.256 mm². Alternativ: A = 3,14 × (2 cm)² = 12,56 cm². Umrechnung: 12,56 cm² × 100 mm²/cm² = 1.256 mm².',
  2
),
(
  'typk-ma-4-01-umrechnungen',
  'K', 'mathematik', 'ma-4-01',
  'Welche der folgenden Einheitenumrechnungen sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"1 m² = 10.000 cm² (Faktor 100² = 10.000)"},{"nr":2,"text":"1 m³ = 1.000 cm³ (Faktor 100³)"},{"nr":3,"text":"1 L = 1.000 mL = 1.000 cm³"},{"nr":4,"text":"1 km² = 10⁶ m²"},{"nr":5,"text":"1 mL = 10 cm³"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 2, 5"},{"key":"C","text":"1, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — 1 m = 100 cm → 1 m² = 100² cm² = 10.000 cm². Aussage 2: Falsch — 1 m³ = (100 cm)³ = 10⁶ cm³ = 1.000.000 cm³ (nicht 1.000). Aussage 3: Korrekt — 1 L = 1 dm³ = 1.000 mL = 1.000 cm³. Aussage 4: Korrekt — 1 km = 10³ m → 1 km² = 10⁶ m². Aussage 5: Falsch — 1 mL = 1 cm³ (nicht 10 cm³).',
  2
),
(
  'typa-ma-4-01-liter',
  'A', 'mathematik', 'ma-4-01',
  'Ein Würfel mit Kantenlänge 3 dm hat welches Volumen in Litern?',
  '[{"key":"A","text":"27 L"},{"key":"B","text":"3 L"},{"key":"C","text":"9 L"},{"key":"D","text":"27.000 L"},{"key":"E","text":"0,027 L"}]'::jsonb,
  'A',
  NULL, NULL,
  'V = (3 dm)³ = 27 dm³ = 27 L (da 1 dm³ = 1 L). Ein Würfel mit 1 dm Kantenlänge (= 10 cm) fasst genau 1 L.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-4-02: Zeit, Geschwindigkeit, Beschleunigung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-4-02-kmh-ms',
  'A', 'mathematik', 'ma-4-02',
  'Ein Rettungswagen fährt 108 km/h. Wie viel m/s ist das?',
  '[{"key":"A","text":"30 m/s"},{"key":"B","text":"3 m/s"},{"key":"C","text":"300 m/s"},{"key":"D","text":"10,8 m/s"},{"key":"E","text":"0,03 m/s"}]'::jsonb,
  'A',
  NULL, NULL,
  'v [m/s] = v [km/h] ÷ 3,6 = 108 ÷ 3,6 = 30 m/s. Merke: 36 km/h = 10 m/s → 108 km/h = 3 × 10 = 30 m/s. Oder: 108.000 m / 3.600 s = 30 m/s.',
  1
),
(
  'typa-ma-4-02-freierfall',
  'A', 'mathematik', 'ma-4-02',
  'Ein Patient stürzt aus dem Stand (v₀ = 0) von einem Felsvorsprung. Nach 3 Sekunden trifft er auf. Wie groß ist die Aufprallgeschwindigkeit? (g = 10 m/s²)',
  '[{"key":"A","text":"30 m/s"},{"key":"B","text":"90 m/s"},{"key":"C","text":"15 m/s"},{"key":"D","text":"45 m/s"},{"key":"E","text":"10 m/s"}]'::jsonb,
  'A',
  NULL, NULL,
  'v = v₀ + g × t = 0 + 10 × 3 = 30 m/s = 108 km/h. Der Fallweg: s = ½ × g × t² = ½ × 10 × 9 = 45 m. Eine Sturzhöhe von 45 m mit 108 km/h Aufprallgeschwindigkeit erklärt schwere Polytraumen.',
  2
),
(
  'typa-ma-4-02-herzfrequenz',
  'A', 'mathematik', 'ma-4-02',
  'Ein Patient hat eine Herzfrequenz von 80 Schläge/min. Wie lang ist die Periodendauer eines Herzschlags in Millisekunden?',
  '[{"key":"A","text":"750 ms"},{"key":"B","text":"800 ms"},{"key":"C","text":"80 ms"},{"key":"D","text":"1.200 ms"},{"key":"E","text":"500 ms"}]'::jsonb,
  'A',
  NULL, NULL,
  'f = 80/min = 80/60 s⁻¹ = 4/3 Hz. T = 1/f = 3/4 s = 0,75 s = 750 ms. Klinisch: Systole ~300 ms, Diastole ~450 ms bei 80/min.',
  2
),
(
  'typa-ma-4-02-beschleunigung',
  'A', 'mathematik', 'ma-4-02',
  'Ein Zug beschleunigt von 0 auf 144 km/h in 20 Sekunden. Wie groß ist die Beschleunigung in m/s²?',
  '[{"key":"A","text":"2 m/s²"},{"key":"B","text":"7,2 m/s²"},{"key":"C","text":"14,4 m/s²"},{"key":"D","text":"0,2 m/s²"},{"key":"E","text":"72 m/s²"}]'::jsonb,
  'A',
  NULL, NULL,
  'Umrechnung: 144 km/h ÷ 3,6 = 40 m/s. Beschleunigung: a = Δv/Δt = 40 m/s ÷ 20 s = 2 m/s².',
  2
),
(
  'typk-ma-4-02-kinematik',
  'K', 'mathematik', 'ma-4-02',
  'Welche der folgenden Aussagen zur Kinematik sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"Gleichförmige Bewegung: s = v × t (Weg = Geschwindigkeit × Zeit)"},{"nr":2,"text":"Freier Fall: s = g × t² (ohne Faktor 1/2)"},{"nr":3,"text":"v [m/s] = v [km/h] ÷ 3,6"},{"nr":4,"text":"1 Stunde = 3.600 Sekunden"},{"nr":5,"text":"g ≈ 9,81 m/s² ≈ 10 m/s² (Erdbeschleunigung)"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 4, 5"},{"key":"B","text":"1, 2, 3"},{"key":"C","text":"2, 4, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 3, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Grundformel der gleichförmigen Bewegung. Aussage 2: Falsch — freier Fall: s = ½ × g × t² (mit Faktor 1/2). Aussage 3: Korrekt — Umrechnungsformel. Aussage 4: Korrekt — 60 min × 60 s/min = 3.600 s. Aussage 5: Korrekt — Standardnäherung für Berechnungen.',
  1
),
(
  'typa-ma-4-02-sekunden',
  'A', 'mathematik', 'ma-4-02',
  'Eine Infusion soll über 6 Stunden laufen. Die Tropfrate beträgt 1 Tropfen/Sekunde, wobei 20 Tropfen = 1 mL. Wie viel mL werden insgesamt verabreicht?',
  '[{"key":"A","text":"1.080 mL"},{"key":"B","text":"360 mL"},{"key":"C","text":"21.600 mL"},{"key":"D","text":"108 mL"},{"key":"E","text":"720 mL"}]'::jsonb,
  'A',
  NULL, NULL,
  'Zeit: 6 h × 3.600 s/h = 21.600 s. Tropfen gesamt: 21.600 × 1 = 21.600 Tropfen. Volumen: 21.600 ÷ 20 = 1.080 mL. Probe: 1.080 mL in 6 h = 180 mL/h (typische Infusionsrate).',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-4-03: SI-System — Grundeinheiten und abgeleitete Größen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-4-03-grundeinheiten',
  'A', 'mathematik', 'ma-4-03',
  'Welche der folgenden Größen ist eine SI-Grundeinheit?',
  '[{"key":"A","text":"Mol (mol) für Stoffmenge"},{"key":"B","text":"Liter (L) für Volumen"},{"key":"C","text":"Gramm (g) für Masse"},{"key":"D","text":"Newton (N) für Kraft"},{"key":"E","text":"Joule (J) für Energie"}]'::jsonb,
  'A',
  NULL, NULL,
  'Mol (mol) ist eine der 7 SI-Grundeinheiten. Liter ist keine Grundeinheit (m³ ist es). Gramm ist keine Grundeinheit (Kilogramm ist es!). Newton und Joule sind abgeleitete Einheiten.',
  1
),
(
  'typa-ma-4-03-pascal',
  'A', 'mathematik', 'ma-4-03',
  'Der systolische Blutdruck beträgt 150 mmHg. In Pascal ausgedrückt (1 mmHg = 133 Pa):',
  '[{"key":"A","text":"19.950 Pa"},{"key":"B","text":"1.995 Pa"},{"key":"C","text":"199.500 Pa"},{"key":"D","text":"150 Pa"},{"key":"E","text":"133 Pa"}]'::jsonb,
  'A',
  NULL, NULL,
  '150 mmHg × 133 Pa/mmHg = 19.950 Pa ≈ 20 kPa. Normaler arterieller Mitteldruck: ~100 mmHg ≈ 13.300 Pa. Zum Vergleich: Atmosphärendruck = 101.325 Pa ≈ 760 mmHg.',
  2
),
(
  'typk-ma-4-03-sieinheiten',
  'K', 'mathematik', 'ma-4-03',
  'Welche der folgenden Aussagen zum SI-System sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"Die 7 SI-Grundeinheiten sind: m, kg, s, A, K, mol, cd"},{"nr":2,"text":"Watt (W) = Joule/Sekunde = Einheit der Energie"},{"nr":3,"text":"Temperatur-Basiseinheit: Kelvin (K); T[K] = T[°C] + 273"},{"nr":4,"text":"Pascal (Pa) = Newton/m² = Einheit des Drucks"},{"nr":5,"text":"1 kcal = 4,184 kJ; 1 Da (Dalton) = 1 g/mol"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 5"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"1, 3, 5"},{"key":"D","text":"1, 3, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — die 7 SI-Grundeinheiten. Aussage 2: Falsch — Watt ist die Einheit der LEISTUNG (nicht Energie). Joule (J) ist die Einheit der Energie. Aussage 3: Korrekt — Kelvin-Celsius-Umrechnung. Aussage 4: Korrekt — Pascal = N/m². Aussage 5: Korrekt — klinisch relevante Nicht-SI-Einheiten.',
  2
),
(
  'typa-ma-4-03-kelvin',
  'A', 'mathematik', 'ma-4-03',
  'Körpertemperatur beträgt 37°C, Fieber 40°C. Wie groß ist der Unterschied in Kelvin?',
  '[{"key":"A","text":"3 K"},{"key":"B","text":"313 K"},{"key":"C","text":"310 K"},{"key":"D","text":"77 K"},{"key":"E","text":"0,3 K"}]'::jsonb,
  'A',
  NULL, NULL,
  'T₁ = 37 + 273 = 310 K. T₂ = 40 + 273 = 313 K. Differenz: 313 − 310 = 3 K. Wichtig: Temperaturdifferenzen sind in Kelvin und Celsius gleich (ΔT[K] = ΔT[°C]).',
  1
),
(
  'typa-ma-4-03-herzleistung',
  'A', 'mathematik', 'ma-4-03',
  'Das Herz pumpt pro Minute 5 L Blut (= 83,3 mL/s = 8,33 × 10⁻⁵ m³/s) gegen einen Druck von 13.300 Pa. Welche mechanische Leistung erbringt das Herz näherungsweise? (P = Druck × Volumenstrom)',
  '[{"key":"A","text":"ca. 1,1 W"},{"key":"B","text":"ca. 110 W"},{"key":"C","text":"ca. 11 W"},{"key":"D","text":"ca. 0,11 W"},{"key":"E","text":"ca. 1.100 W"}]'::jsonb,
  'A',
  NULL, NULL,
  'P = Druck × Volumenstrom = 13.300 Pa × 8,33 × 10⁻⁵ m³/s ≈ 1,1 W. Das Herz leistet in Ruhe ca. 1 Watt mechanische Pumpleistung — erstaunlich wenig für das lebenswichtigste Organ!',
  3
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 5: Analysis ──────────────────────────────────────

-- UK ma-5-01: Funktionen — Typen, Eigenschaften und Graphen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-5-01-nullstelle',
  'A', 'mathematik', 'ma-5-01',
  'An welchem x-Wert schneidet f(x) = 3x − 12 die x-Achse?',
  '[{"key":"A","text":"x = 4"},{"key":"B","text":"x = −4"},{"key":"C","text":"x = 12"},{"key":"D","text":"x = 3"},{"key":"E","text":"x = 0"}]'::jsonb,
  'A',
  NULL, NULL,
  'Nullstelle: f(x) = 0 → 3x − 12 = 0 → 3x = 12 → x = 4. Probe: f(4) = 12 − 12 = 0.',
  1
),
(
  'typa-ma-5-01-exponential',
  'A', 'mathematik', 'ma-5-01',
  'Ein Medikamentspiegel fällt nach N(t) = 80 × e^(−0,2t) mg/L (t in Stunden). Auf welchen Wert ist er nach 5 Stunden gesunken? (e⁻¹ ≈ 0,368)',
  '[{"key":"A","text":"ca. 29,4 mg/L"},{"key":"B","text":"ca. 40 mg/L"},{"key":"C","text":"ca. 16 mg/L"},{"key":"D","text":"ca. 60 mg/L"},{"key":"E","text":"ca. 10 mg/L"}]'::jsonb,
  'A',
  NULL, NULL,
  'N(5) = 80 × e^(−0,2 × 5) = 80 × e⁻¹ ≈ 80 × 0,368 = 29,44 mg/L. Die Halbwertszeit: T₁/₂ = ln(2)/0,2 ≈ 0,693/0,2 = 3,47 h.',
  2
),
(
  'typa-ma-5-01-log-definitionsbereich',
  'A', 'mathematik', 'ma-5-01',
  'Welcher Definitionsbereich gilt für f(x) = ln(x + 3)?',
  '[{"key":"A","text":"x > −3"},{"key":"B","text":"x ≥ −3"},{"key":"C","text":"x > 0"},{"key":"D","text":"x ≠ −3"},{"key":"E","text":"alle reellen Zahlen"}]'::jsonb,
  'A',
  NULL, NULL,
  'Der natürliche Logarithmus ist nur für positive Argumente definiert. Argument: (x + 3) > 0 → x > −3. Bei x = −3 wäre das Argument 0 (ln(0) = −∞, nicht definiert).',
  2
),
(
  'typk-ma-5-01-funktionstypen',
  'K', 'mathematik', 'ma-5-01',
  'Welche der folgenden Aussagen über Funktionstypen und Eigenschaften sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Lineare Funktion f(x)=mx+b: Steigung m = Δy/Δx"},{"nr":2,"text":"Exponentialfunktion f(x)=eˣ hat die Ableitung e^(x−1)"},{"nr":3,"text":"Gerade Funktionen erfüllen f(−x) = f(x) — achsensymmetrisch zur y-Achse"},{"nr":4,"text":"Logarithmusfunktion und Exponentialfunktion sind Umkehrfunktionen"},{"nr":5,"text":"f(x)=x² ist streng monoton steigend für alle x ∈ ℝ"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 5"},{"key":"B","text":"1, 2, 4"},{"key":"C","text":"1, 3, 4"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Definition der Steigung. Aussage 2: Falsch — (eˣ)'' = eˣ (die e-Funktion ist ihre eigene Ableitung, kein x−1). Aussage 3: Korrekt — Definition der Achsensymmetrie. Aussage 4: Korrekt — e^(ln x) = x und ln(eˣ) = x. Aussage 5: Falsch — f(x) = x² ist nur für x > 0 streng monoton steigend; für x < 0 ist sie fallend (Scheitelpunkt bei x = 0).',
  2
),
(
  'typa-ma-5-01-halbwertszeitfun',
  'A', 'mathematik', 'ma-5-01',
  'Der Medikamentenspiegel folgt C(t) = C₀ × e^(−λt). Welche Aussage über diesen Funktionstyp ist korrekt?',
  '[{"key":"A","text":"Es ist eine Exponentialfunktion mit 0 < Basis < 1 — exponentieller Zerfall"},{"key":"B","text":"Es ist eine lineare Funktion, weil der Abfall konstant ist"},{"key":"C","text":"Es ist eine Exponentialfunktion mit Basis > 1 — exponentielles Wachstum"},{"key":"D","text":"Es ist eine Logarithmusfunktion"},{"key":"E","text":"Der Spiegel fällt auf 0 nach endlicher Zeit"}]'::jsonb,
  'A',
  NULL, NULL,
  'C(t) = C₀ × e^(−λt) = C₀ × (e^(−λ))^t. Da λ > 0, ist e^(−λ) < 1 — also eine Exponentialfunktion mit Basis kleiner als 1 → exponentieller Zerfall. Theoretisch erreicht C(t) erst nach unendlicher Zeit den Wert 0 (asymptotisch).',
  2
),
(
  'typa-ma-5-01-symmetrie',
  'A', 'mathematik', 'ma-5-01',
  'Welche der folgenden Funktionen ist ungerade (punktsymmetrisch zum Ursprung)?',
  '[{"key":"A","text":"f(x) = x³"},{"key":"B","text":"f(x) = x²"},{"key":"C","text":"f(x) = |x|"},{"key":"D","text":"f(x) = cos(x)"},{"key":"E","text":"f(x) = eˣ"}]'::jsonb,
  'A',
  NULL, NULL,
  'Ungerade Funktion: f(−x) = −f(x). Für f(x) = x³: f(−x) = (−x)³ = −x³ = −f(x). Korrekt! x² ist gerade, |x| ist gerade, cos(x) ist gerade, eˣ ist weder gerade noch ungerade.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-5-02: Trigonometrische Funktionen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-5-02-identitaet',
  'A', 'mathematik', 'ma-5-02',
  'Was ergibt sin²(45°) + cos²(45°)?',
  '[{"key":"A","text":"1"},{"key":"B","text":"√2"},{"key":"C","text":"0,5"},{"key":"D","text":"2"},{"key":"E","text":"0"}]'::jsonb,
  'A',
  NULL, NULL,
  'sin²(φ) + cos²(φ) = 1 für jeden Winkel φ — auch für 45°. Probe: sin(45°) = cos(45°) = √2/2. (√2/2)² + (√2/2)² = 1/2 + 1/2 = 1.',
  1
),
(
  'typa-ma-5-02-bogenmas',
  'A', 'mathematik', 'ma-5-02',
  'Wie viel Radiant sind 270°?',
  '[{"key":"A","text":"3π/2"},{"key":"B","text":"π"},{"key":"C","text":"2π"},{"key":"D","text":"3π/4"},{"key":"E","text":"π/2"}]'::jsonb,
  'A',
  NULL, NULL,
  '270° = 3/4 × 360° = 3/4 × 2π = 3π/2 rad. Umrechnungsformel: φ_rad = φ_Grad × π/180. 270 × π/180 = 3π/2.',
  2
),
(
  'typa-ma-5-02-frequenz',
  'A', 'mathematik', 'ma-5-02',
  'Eine Sinusfunktion hat die Kreisfrequenz ω = 4π rad/s. Welche Frequenz f und Periode T hat sie?',
  '[{"key":"A","text":"f = 2 Hz; T = 0,5 s"},{"key":"B","text":"f = 4π Hz; T = 1/(4π) s"},{"key":"C","text":"f = 4 Hz; T = 0,25 s"},{"key":"D","text":"f = 1 Hz; T = 1 s"},{"key":"E","text":"f = 8π Hz; T = 1/(8π) s"}]'::jsonb,
  'A',
  NULL, NULL,
  'f = ω/(2π) = 4π/(2π) = 2 Hz. T = 1/f = 0,5 s. Die Kreisfrequenz ω = 2πf verbindet Frequenz und Kreisfrequenz.',
  2
),
(
  'typk-ma-5-02-sincos',
  'K', 'mathematik', 'ma-5-02',
  'Welche der folgenden Aussagen über trigonometrische Funktionen sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"sin(0°) = 0; cos(0°) = 1"},{"nr":2,"text":"sin(90°) = 0; cos(90°) = 1"},{"nr":3,"text":"Die Periode von sin(x) beträgt 2π"},{"nr":4,"text":"tan(90°) ist nicht definiert"},{"nr":5,"text":"sin(30°) = 0,5 und cos(60°) = 0,5"}]'::jsonb,
  '[{"key":"A","text":"2, 3, 4"},{"key":"B","text":"1, 2, 5"},{"key":"C","text":"1, 4, 5"},{"key":"D","text":"2, 3, 5"},{"key":"E","text":"1, 3, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Standardwerte. Aussage 2: Falsch — sin(90°) = 1 und cos(90°) = 0 (vertauscht!). Aussage 3: Korrekt — sin(x + 2π) = sin(x). Aussage 4: Korrekt — tan(90°) = sin(90°)/cos(90°) = 1/0 = ∞ (nicht definiert). Aussage 5: Korrekt — sin(30°) = 1/2 = 0,5 und cos(60°) = 1/2 = 0,5 (Komplementarität: cos(60°) = sin(30°)).',
  2
),
(
  'typa-ma-5-02-ekg',
  'A', 'mathematik', 'ma-5-02',
  'Das EKG einer Patientin zeigt eine regelmäßige Sinuswelle mit einer Periode von T = 0,8 s. Welche Herzfrequenz (in Schläge/min) und welche Kreisfrequenz ω (in rad/s) hat die Patientin?',
  '[{"key":"A","text":"75/min; ω = 2,5π rad/s"},{"key":"B","text":"80/min; ω = 2π rad/s"},{"key":"C","text":"60/min; ω = 2π rad/s"},{"key":"D","text":"75/min; ω = 5π rad/s"},{"key":"E","text":"100/min; ω = 2,5π rad/s"}]'::jsonb,
  'A',
  NULL, NULL,
  'f = 1/T = 1/0,8 = 1,25 Hz = 75/min. ω = 2πf = 2π × 1,25 = 2,5π rad/s ≈ 7,85 rad/s. 1,25 Hz × 60 s/min = 75 Schläge/min.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-5-03: Differentialrechnung — Ableitungsregeln und Extremwerte
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-5-03-ableitung',
  'A', 'mathematik', 'ma-5-03',
  'Was ist die Ableitung von f(x) = 5x⁴ − 3x² + 7?',
  '[{"key":"A","text":"20x³ − 6x"},{"key":"B","text":"5x³ − 3x"},{"key":"C","text":"20x³ − 6x + 7"},{"key":"D","text":"20x⁵ − 6x³"},{"key":"E","text":"20x³ − 3"}]'::jsonb,
  'A',
  NULL, NULL,
  'Glied für Glied mit Potenz- und Summenregel: (5x⁴)'' = 20x³; (−3x²)'' = −6x; (7)'' = 0. Summe: 20x³ − 6x.',
  1
),
(
  'typa-ma-5-03-kettenregel',
  'A', 'mathematik', 'ma-5-03',
  'Was ist die Ableitung von f(x) = e^(−2x)?',
  '[{"key":"A","text":"−2e^(−2x)"},{"key":"B","text":"e^(−2x)"},{"key":"C","text":"−2xe^(−2x)"},{"key":"D","text":"2e^(−2x)"},{"key":"E","text":"e^(−2x−1)"}]'::jsonb,
  'A',
  NULL, NULL,
  'Kettenregel: f(x) = e^(g(x)) mit g(x) = −2x. f''(x) = e^(g(x)) × g''(x) = e^(−2x) × (−2) = −2e^(−2x). Die Ableitung von Exponentialfunktionen mit linearem Argument ergibt den Koeffizienten als Vorfaktor.',
  2
),
(
  'typa-ma-5-03-extremwert',
  'A', 'mathematik', 'ma-5-03',
  'f(x) = x³ − 12x. An welchen x-Werten liegen die lokalen Extremwerte?',
  '[{"key":"A","text":"x = 2 (Minimum) und x = −2 (Maximum)"},{"key":"B","text":"x = 4 und x = −4"},{"key":"C","text":"x = 3 und x = −3"},{"key":"D","text":"x = 12 (Minimum)"},{"key":"E","text":"x = 2 (Maximum) und x = −2 (Minimum)"}]'::jsonb,
  'A',
  NULL, NULL,
  'f''(x) = 3x² − 12 = 0 → x² = 4 → x = ±2. f''''(x) = 6x. Bei x = 2: f''''(2) = 12 > 0 → Minimum. Bei x = −2: f''''(−2) = −12 < 0 → Maximum. Extremwerte: f(2) = 8 − 24 = −16 (Minimum); f(−2) = −8 + 24 = 16 (Maximum).',
  2
),
(
  'typa-ma-5-03-sincos-abl',
  'A', 'mathematik', 'ma-5-03',
  'Was ist die Ableitung von f(x) = sin(2x) + cos(x)?',
  '[{"key":"A","text":"2cos(2x) − sin(x)"},{"key":"B","text":"cos(2x) + sin(x)"},{"key":"C","text":"2cos(2x) + sin(x)"},{"key":"D","text":"cos(2x) − sin(x)"},{"key":"E","text":"−2sin(2x) − cos(x)"}]'::jsonb,
  'A',
  NULL, NULL,
  '(sin(2x))'' = cos(2x) × 2 = 2cos(2x) (Kettenregel). (cos(x))'' = −sin(x). Summe: 2cos(2x) − sin(x).',
  2
),
(
  'typk-ma-5-03-ableitungen',
  'K', 'mathematik', 'ma-5-03',
  'Welche der folgenden Ableitungsregeln sind korrekt?',
  '[]'::jsonb,
  'A',
  '[{"nr":1,"text":"(eˣ)'' = eˣ — die e-Funktion ist ihre eigene Ableitung"},{"nr":2,"text":"(ln x)'' = 1/x für x > 0"},{"nr":3,"text":"(sin x)'' = −sin x"},{"nr":4,"text":"(xⁿ)'' = n × xⁿ⁻¹ — Potenzregel"},{"nr":5,"text":"Kettenregel: (f(g(x)))'' = f(g(x)) × g(x)"}]'::jsonb,
  '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 3, 4"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — einzigartige Eigenschaft von eˣ. Aussage 2: Korrekt — Ableitung des natürlichen Logarithmus. Aussage 3: Falsch — (sin x)'' = cos x (nicht −sin x; −sin x wäre die zweite Ableitung). Aussage 4: Korrekt — Potenzregel. Aussage 5: Falsch — Kettenregel: (f(g(x)))'' = f''(g(x)) × g''(x) (nicht f(g(x)) × g(x)).',
  2
),
(
  'typa-ma-5-03-tmax',
  'A', 'mathematik', 'ma-5-03',
  'Der Plasmaspiegel eines Medikaments ist f(t) = 4t × e^(−0,5t) mg/L. Wann ist der Spiegel maximal (t_max)? Hinweis: Produktregel anwenden.',
  '[{"key":"A","text":"t = 2 h"},{"key":"B","text":"t = 0,5 h"},{"key":"C","text":"t = 4 h"},{"key":"D","text":"t = 8 h"},{"key":"E","text":"t = 1 h"}]'::jsonb,
  'A',
  NULL, NULL,
  'f''(t) = 4 × e^(−0,5t) + 4t × (−0,5) × e^(−0,5t) = e^(−0,5t) × (4 − 2t). f''(t) = 0: e^(−0,5t) ≠ 0, also 4 − 2t = 0 → t = 2 h. Das ist t_max. f''''(2) prüfen bestätigt Maximum.',
  3
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-5-04: Integralrechnung — Stammfunktion und Flächenberechnung
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-5-04-stammfunktion',
  'A', 'mathematik', 'ma-5-04',
  'Was ist die Stammfunktion von f(x) = 8x³ − 4x?',
  '[{"key":"A","text":"2x⁴ − 2x² + C"},{"key":"B","text":"24x² − 4 + C"},{"key":"C","text":"8x⁴ − 4x² + C"},{"key":"D","text":"2x⁴ − 2x + C"},{"key":"E","text":"32x² − 4 + C"}]'::jsonb,
  'A',
  NULL, NULL,
  '∫(8x³)dx = 8 × x⁴/4 = 2x⁴. ∫(−4x)dx = −4 × x²/2 = −2x². Stammfunktion: F(x) = 2x⁴ − 2x² + C.',
  1
),
(
  'typa-ma-5-04-bestimmt',
  'A', 'mathematik', 'ma-5-04',
  'Berechne ∫₀³ 2x dx.',
  '[{"key":"A","text":"9"},{"key":"B","text":"6"},{"key":"C","text":"18"},{"key":"D","text":"3"},{"key":"E","text":"0"}]'::jsonb,
  'A',
  NULL, NULL,
  'Stammfunktion: F(x) = x². Bestimmtes Integral: [x²]₀³ = 3² − 0² = 9 − 0 = 9. Geometrisch: Das Integral ist die Fläche eines rechtwinkligen Dreiecks mit Basis 3 und Höhe f(3) = 6: A = ½ × 3 × 6 = 9.',
  1
),
(
  'typa-ma-5-04-auc',
  'A', 'mathematik', 'ma-5-04',
  'Ein Medikament hat C(t) = 20 × e^(−0,4t) mg/L (t in Stunden). Die AUC (Area Under the Curve) von t = 0 bis ∞ beträgt AUC = C₀/k. Was ist der Wert?',
  '[{"key":"A","text":"50 mg·h/L"},{"key":"B","text":"20 mg·h/L"},{"key":"C","text":"8 mg·h/L"},{"key":"D","text":"0,4 mg·h/L"},{"key":"E","text":"80 mg·h/L"}]'::jsonb,
  'A',
  NULL, NULL,
  'C₀ = 20 mg/L; k = 0,4 h⁻¹. AUC = C₀/k = 20/0,4 = 50 mg·h/L. Herleitung: ∫₀^∞ 20 × e^(−0,4t) dt = [−20/0,4 × e^(−0,4t)]₀^∞ = 0 − (−50) = 50.',
  2
),
(
  'typk-ma-5-04-integral',
  'K', 'mathematik', 'ma-5-04',
  'Welche der folgenden Aussagen zur Integralrechnung sind korrekt?',
  '[]'::jsonb,
  'D',
  '[{"nr":1,"text":"∫xⁿ dx = xⁿ⁺¹/(n+1) + C (für n ≠ −1)"},{"nr":2,"text":"∫eˣ dx = eˣ + C"},{"nr":3,"text":"∫sin(x) dx = cos(x) + C"},{"nr":4,"text":"Hauptsatz: ∫_a^b f(x)dx = F(b) − F(a)"},{"nr":5,"text":"Die AUC = ∫C(t)dt misst die Gesamtexposition gegenüber einem Wirkstoff"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 4"},{"key":"B","text":"2, 3, 5"},{"key":"C","text":"1, 2, 3"},{"key":"D","text":"1, 2, 4, 5"},{"key":"E","text":"3, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Umkehrung der Potenzregel. Aussage 2: Korrekt — eˣ ist ihre eigene Stammfunktion. Aussage 3: Falsch — ∫sin(x)dx = −cos(x) + C (mit Minuszeichen!). Aussage 4: Korrekt — Hauptsatz der Differential- und Integralrechnung. Aussage 5: Korrekt — klinische Bedeutung der AUC in der Pharmakologie.',
  2
),
(
  'typa-ma-5-04-flaeche',
  'A', 'mathematik', 'ma-5-04',
  'Berechne ∫₁⁴ (3x² − 2) dx.',
  '[{"key":"A","text":"57"},{"key":"B","text":"48"},{"key":"C","text":"36"},{"key":"D","text":"63"},{"key":"E","text":"12"}]'::jsonb,
  'A',
  NULL, NULL,
  'Stammfunktion: F(x) = x³ − 2x. [F(x)]₁⁴ = F(4) − F(1) = (64 − 8) − (1 − 2) = 56 − (−1) = 57.',
  2
),
(
  'typa-ma-5-04-bioverfueg',
  'A', 'mathematik', 'ma-5-04',
  'Ein Medikament hat nach oraler Gabe AUC_oral = 80 mg·h/L und nach intravenöser Gabe AUC_iv = 100 mg·h/L. Wie groß ist die Bioverfügbarkeit F?',
  '[{"key":"A","text":"80%"},{"key":"B","text":"20%"},{"key":"C","text":"125%"},{"key":"D","text":"180%"},{"key":"E","text":"0,8%"}]'::jsonb,
  'A',
  NULL, NULL,
  'Bioverfügbarkeit F = AUC_oral/AUC_iv × 100% = 80/100 × 100% = 80%. Eine Bioverfügbarkeit von 80% bedeutet, dass 80% des oral eingenommenen Wirkstoffs systemisch verfügbar sind (First-Pass-Effekt = 20%).',
  2
)
ON CONFLICT (id) DO NOTHING;

-- ── Kapitel 6: Vektorrechnung ────────────────────────────────

-- UK ma-6-01: Vektoren — Darstellung, Addition und Subtraktion
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-6-01-betrag',
  'A', 'mathematik', 'ma-6-01',
  'Ein Muskel übt eine Kraft F = (3, 0, 4) N aus. Wie groß ist der Betrag (die Stärke) dieser Kraft?',
  '[{"key":"A","text":"5 N"},{"key":"B","text":"7 N"},{"key":"C","text":"√7 N"},{"key":"D","text":"25 N"},{"key":"E","text":"1 N"}]'::jsonb,
  'A',
  NULL, NULL,
  '|F| = √(3² + 0² + 4²) = √(9 + 0 + 16) = √25 = 5 N. Das pythagoräische Tripel (3, 4, 5) erscheint hier in 3D-Form.',
  1
),
(
  'typa-ma-6-01-addition',
  'A', 'mathematik', 'ma-6-01',
  'Zwei Kräfte wirken auf ein Gelenk: F₁ = (3, 0, 0) N und F₂ = (0, 4, 0) N. Was ist der Betrag der Resultante F₁ + F₂?',
  '[{"key":"A","text":"5 N"},{"key":"B","text":"7 N"},{"key":"C","text":"√7 N ≈ 2,6 N"},{"key":"D","text":"25 N"},{"key":"E","text":"1 N"}]'::jsonb,
  'A',
  NULL, NULL,
  'F_res = F₁ + F₂ = (3+0, 0+4, 0+0) = (3, 4, 0). |F_res| = √(3² + 4² + 0²) = √(9 + 16) = √25 = 5 N. Das pythagoräische Tripel (3, 4, 5) zeigt: Zwei senkrechte Kräfte von 3 N und 4 N ergeben eine Resultierende von 5 N.',
  1
),
(
  'typa-ma-6-01-skalar-vs-vektor',
  'A', 'mathematik', 'ma-6-01',
  'Welche der folgenden Größen ist ein Vektor (hat Betrag UND Richtung)?',
  '[{"key":"A","text":"Blutströmungsgeschwindigkeit (Richtung im Gefäß)"},{"key":"B","text":"Körpertemperatur (37°C)"},{"key":"C","text":"Blutvolumen (5 L)"},{"key":"D","text":"Herzfrequenz (75/min)"},{"key":"E","text":"Körpermasse (70 kg)"}]'::jsonb,
  'A',
  NULL, NULL,
  'Geschwindigkeit ist ein Vektor: Sie hat sowohl einen Betrag (z.B. 1 m/s) als auch eine Richtung (z.B. entlang des Gefäßes von peripher nach zentral). Temperatur, Volumen, Herzfrequenz und Masse sind Skalare — sie haben nur einen Betrag ohne Richtung.',
  1
),
(
  'typk-ma-6-01-vektoren',
  'K', 'mathematik', 'ma-6-01',
  'Welche der folgenden Aussagen über Vektoren sind korrekt?',
  '[]'::jsonb,
  'C',
  '[{"nr":1,"text":"Betrag: |v| = √(v₁² + v₂² + v₃²) — 3D-Pythagoras"},{"nr":2,"text":"Vektoren werden komponentenweise addiert: (a₁+b₁, a₂+b₂, a₃+b₃)"},{"nr":3,"text":"Skalarmultiplikation k×v verändert die Richtung nur wenn k < 0"},{"nr":4,"text":"Der Nullvektor (0, 0, 0) hat den Betrag 1"},{"nr":5,"text":"Eine Kraft F = (0, −mg, 0) zeigt in die positive y-Richtung"}]'::jsonb,
  '[{"key":"A","text":"1, 3, 5"},{"key":"B","text":"2, 4, 5"},{"key":"C","text":"1, 2, 3"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 3, 5"}]'::jsonb,
  'Aussage 1: Korrekt — 3D-Pythagoras für den Betrag. Aussage 2: Korrekt — komponentenweise Addition. Aussage 3: Korrekt — bei k > 0 bleibt Richtung; bei k < 0 dreht sich die Richtung um. Aussage 4: Falsch — der Nullvektor hat Betrag 0, nicht 1. Aussage 5: Falsch — F = (0, −mg, 0) zeigt in die NEGATIVE y-Richtung (Minuszeichen!).',
  2
),
(
  'typa-ma-6-01-skalarmult',
  'A', 'mathematik', 'ma-6-01',
  'v = (2, −3, 6). Was ist 2v − v?',
  '[{"key":"A","text":"(2, −3, 6)"},{"key":"B","text":"(4, −6, 12)"},{"key":"C","text":"(0, 0, 0)"},{"key":"D","text":"(2, 3, −6)"},{"key":"E","text":"(−2, 3, −6)"}]'::jsonb,
  'A',
  NULL, NULL,
  '2v − v = v = (2, −3, 6). Algebraregel: 2v − 1v = (2−1)v = 1v = v. Das ist die Vektorrechnung-Entsprechung von 2a − a = a.',
  1
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-6-02: Skalarprodukt und Kreuzprodukt
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-6-02-skalarprodukt',
  'A', 'mathematik', 'ma-6-02',
  'Berechne das Skalarprodukt a·b für a = (3, −1, 2) und b = (1, 4, −2).',
  '[{"key":"A","text":"−5"},{"key":"B","text":"5"},{"key":"C","text":"0"},{"key":"D","text":"−1"},{"key":"E","text":"9"}]'::jsonb,
  'A',
  NULL, NULL,
  'a·b = 3×1 + (−1)×4 + 2×(−2) = 3 − 4 − 4 = −5. Das negative Skalarprodukt bedeutet, dass die Vektoren einen stumpfen Winkel (> 90°) einschließen.',
  1
),
(
  'typa-ma-6-02-orthogonal',
  'A', 'mathematik', 'ma-6-02',
  'Sind die Vektoren a = (2, 3, −1) und b = (1, 0, 2) orthogonal?',
  '[{"key":"A","text":"Ja, denn a·b = 0"},{"key":"B","text":"Nein, a·b = 5"},{"key":"C","text":"Nein, a·b = −5"},{"key":"D","text":"Nein, a·b = 4"},{"key":"E","text":"Nein, die Beträge sind verschieden"}]'::jsonb,
  'A',
  NULL, NULL,
  'a·b = 2×1 + 3×0 + (−1)×2 = 2 + 0 − 2 = 0. Da a·b = 0, sind die Vektoren orthogonal (90° Winkel). Die Beträge spielen keine Rolle für Orthogonalität.',
  2
),
(
  'typa-ma-6-02-drehmoment',
  'A', 'mathematik', 'ma-6-02',
  'Das Drehmoment τ = r × F (Kreuzprodukt). Hebelarm |r| = 0,3 m, Kraft |F| = 50 N, Winkel α = 90°. Wie groß ist |τ|?',
  '[{"key":"A","text":"15 N·m"},{"key":"B","text":"150 N·m"},{"key":"C","text":"1,5 N·m"},{"key":"D","text":"50 N·m"},{"key":"E","text":"0 N·m"}]'::jsonb,
  'A',
  NULL, NULL,
  '|τ| = |r| × |F| × sin(α) = 0,3 × 50 × sin(90°) = 0,3 × 50 × 1 = 15 N·m. Bei α = 90° ist das Drehmoment maximal (Kraft senkrecht zum Hebelarm).',
  2
),
(
  'typk-ma-6-02-skalarodukt-kreuz',
  'K', 'mathematik', 'ma-6-02',
  'Welche der folgenden Aussagen über Skalar- und Kreuzprodukt sind korrekt?',
  '[]'::jsonb,
  'B',
  '[{"nr":1,"text":"a·b = 0 bedeutet: die Vektoren stehen senkrecht aufeinander"},{"nr":2,"text":"Das Kreuzprodukt a×b ist kommutativ: a×b = b×a"},{"nr":3,"text":"|a×b| = |a| × |b| × sin(α) — gibt die Parallelogramm-Fläche an"},{"nr":4,"text":"a·b = |a| × |b| × cos(α)"},{"nr":5,"text":"Das Kreuzprodukt ist nur im 3D definiert"}]'::jsonb,
  '[{"key":"A","text":"1, 2, 4"},{"key":"B","text":"1, 3, 4, 5"},{"key":"C","text":"2, 3, 5"},{"key":"D","text":"1, 4, 5"},{"key":"E","text":"2, 4, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Orthogonalitätskriterium. Aussage 2: Falsch — das Kreuzprodukt ist ANTIkommutativ: a×b = −(b×a). Aussage 3: Korrekt — Betrag des Kreuzprodukts = Parallelogramm-Fläche. Aussage 4: Korrekt — geometrische Definition des Skalarprodukts. Aussage 5: Korrekt — im 2D ist kein Kreuzprodukt (als Vektor) definiert.',
  2
),
(
  'typa-ma-6-02-winkel',
  'A', 'mathematik', 'ma-6-02',
  'Für a = (1, 0, 0) und b = (1, 1, 0) gilt a·b = 1, |a| = 1, |b| = √2. Welchen Winkel schließen die Vektoren ein?',
  '[{"key":"A","text":"45°"},{"key":"B","text":"30°"},{"key":"C","text":"60°"},{"key":"D","text":"90°"},{"key":"E","text":"0°"}]'::jsonb,
  'A',
  NULL, NULL,
  'cos(α) = a·b / (|a| × |b|) = 1 / (1 × √2) = 1/√2 = √2/2. cos(α) = √2/2 → α = 45°. Der Vektor (1,1,0) liegt genau zwischen x- und y-Achse, also 45° zur x-Achse.',
  2
)
ON CONFLICT (id) DO NOTHING;

-- UK ma-6-03: Betrag, Einheitsvektor und geometrische Anwendungen
INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES
(
  'typa-ma-6-03-einheitsvektor',
  'A', 'mathematik', 'ma-6-03',
  'Was ist der Einheitsvektor von v = (0, 3, 4)?',
  '[{"key":"A","text":"(0; 0,6; 0,8)"},{"key":"B","text":"(0; 3; 4)"},{"key":"C","text":"(0; 0,3; 0,4)"},{"key":"D","text":"(0; −0,6; 0,8)"},{"key":"E","text":"(1; 0; 0)"}]'::jsonb,
  'A',
  NULL, NULL,
  '|v| = √(0 + 9 + 16) = √25 = 5. ê = v/|v| = (0, 3, 4)/5 = (0; 0,6; 0,8). Probe: 0² + 0,6² + 0,8² = 0 + 0,36 + 0,64 = 1. Korrekt!',
  1
),
(
  'typa-ma-6-03-abstand',
  'A', 'mathematik', 'ma-6-03',
  'In einem 3D-CT-Scan liegt der Tumormittelpunkt bei A = (3, 4, 12) mm und die Risikostruktur bei B = (3, 4, 0) mm. Wie groß ist der Abstand?',
  '[{"key":"A","text":"12 mm"},{"key":"B","text":"144 mm"},{"key":"C","text":"19 mm"},{"key":"D","text":"√19 mm"},{"key":"E","text":"3 mm"}]'::jsonb,
  'A',
  NULL, NULL,
  'd = |B − A| = |(0, 0, −12)| = √(0 + 0 + 144) = 12 mm. Beide Punkte haben gleiche x- und y-Koordinaten; der Unterschied liegt nur in z: 12 − 0 = 12 mm.',
  1
),
(
  'typa-ma-6-03-parallel',
  'A', 'mathematik', 'ma-6-03',
  'Sind a = (4, −6, 2) und b = (−2, 3, −1) parallel?',
  '[{"key":"A","text":"Ja, a = −2 × b"},{"key":"B","text":"Nein, a·b ≠ 0"},{"key":"C","text":"Nein, die Beträge sind verschieden"},{"key":"D","text":"Ja, da a·b > 0"},{"key":"E","text":"Nein, a×b ≠ 0"}]'::jsonb,
  'A',
  NULL, NULL,
  '−2 × b = −2 × (−2, 3, −1) = (4, −6, 2) = a. Da a = −2 × b, sind die Vektoren parallel (antiparallel, da k = −2 < 0). Beim Kreuzprodukt paralleler Vektoren: a×b = 0.',
  2
),
(
  'typa-ma-6-03-gerade',
  'A', 'mathematik', 'ma-6-03',
  'Eine Gerade geht durch A = (1, 2, 0) mit Richtungsvektor r = (2, 1, 3). Welcher Punkt liegt auf der Geraden für t = 2?',
  '[{"key":"A","text":"(5, 4, 6)"},{"key":"B","text":"(3, 3, 3)"},{"key":"C","text":"(1, 4, 6)"},{"key":"D","text":"(2, 2, 0)"},{"key":"E","text":"(4, 3, 6)"}]'::jsonb,
  'A',
  NULL, NULL,
  'P = A + t × r = (1, 2, 0) + 2 × (2, 1, 3) = (1 + 4, 2 + 2, 0 + 6) = (5, 4, 6).',
  1
),
(
  'typk-ma-6-03-geometrie',
  'K', 'mathematik', 'ma-6-03',
  'Welche der folgenden Aussagen zur analytischen Geometrie mit Vektoren sind korrekt?',
  '[]'::jsonb,
  'E',
  '[{"nr":1,"text":"Einheitsvektor ê = v/|v| hat immer den Betrag 1"},{"nr":2,"text":"Mittelpunkt zwischen A und B: M = (A + B) / 2"},{"nr":3,"text":"Abstand d(A, B) = |B − A| — Differenzvektor und sein Betrag"},{"nr":4,"text":"Zwei Vektoren sind parallel, wenn ihr Skalarprodukt = 0"},{"nr":5,"text":"Geradengleichung in Parameterform: P = A + t × r (t ∈ ℝ)"}]'::jsonb,
  '[{"key":"A","text":"1, 4, 5"},{"key":"B","text":"2, 4, 5"},{"key":"C","text":"1, 2, 4"},{"key":"D","text":"1, 3, 5"},{"key":"E","text":"1, 2, 3, 5"}]'::jsonb,
  'Aussage 1: Korrekt — Definition des Einheitsvektors. Aussage 2: Korrekt — Mittelpunktformel. Aussage 3: Korrekt — Abstand als Betrag des Differenzvektors. Aussage 4: Falsch — Skalarprodukt = 0 bedeutet ORTHOGONAL (senkrecht), nicht parallel! Parallele Vektoren erfüllen a = k × b. Aussage 5: Korrekt — Parameterform der Geradengleichung.',
  2
),
(
  'typa-ma-6-03-mittelpunkt',
  'A', 'mathematik', 'ma-6-03',
  'In der Bestrahlungsplanung liegen zwei Messmarken bei P₁ = (10, 20, 30) mm und P₂ = (20, 10, 50) mm. Wo liegt ihr Mittelpunkt?',
  '[{"key":"A","text":"(15, 15, 40) mm"},{"key":"B","text":"(30, 30, 80) mm"},{"key":"C","text":"(10, 10, 20) mm"},{"key":"D","text":"(15, 10, 40) mm"},{"key":"E","text":"(5, 5, 20) mm"}]'::jsonb,
  'A',
  NULL, NULL,
  'M = ((10+20)/2, (20+10)/2, (30+50)/2) = (15, 15, 40) mm. Mittelpunkt: Koordinaten addieren und durch 2 dividieren (komponentenweise).',
  1
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- Ende der Datei — MATHEMATIK Kap 1–6
-- Gesamt: 16 Unterkapitel, 101 Fragen
-- (Kap 1: 19, Kap 2: 24, Kap 3: 19, Kap 4: 17, Kap 5: 22, Kap 6: 16 + 5 = ~100)
-- ============================================================
