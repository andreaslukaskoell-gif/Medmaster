-- ============================================================
-- Phase 6 Seed: 5x TYP K Fragen für Molekulargenetik (bio-kap6)
-- UKs: bio-6-01 (DNA-Struktur/Replikation), bio-6-02 (Transkription),
--      bio-6-03 (Translation), bio-6-04 (Genregulation)
-- ============================================================

INSERT INTO bms_questions (
  id, typ, fach, uk_id, stamm,
  optionen, korrekte_option,
  aussagen, kombinationen,
  erklaerung, schwierigkeit
) VALUES

-- ── K-1: DNA-Replikation ──────────────────────────────────────
(
  'typk-bio-6-01-replikation',
  'K', 'biologie', 'bio-6-01',
  'Welche der folgenden Aussagen zur DNA-Replikation sind korrekt?',
  '[]'::jsonb,
  'A',
  '[
    {"nr":1,"text":"Die DNA-Replikation ist semikonservativ: Jeder Tochterstrang enthält einen alten und einen neuen Strang.","korrekt":true},
    {"nr":2,"text":"DNA-Polymerase kann einen neuen Strang in 3''→5''-Richtung synthetisieren.","korrekt":false},
    {"nr":3,"text":"Der Leitstrang (Leading Strand) wird kontinuierlich in Richtung der Replikationsgabel synthetisiert.","korrekt":true},
    {"nr":4,"text":"Okazaki-Fragmente entstehen am Leitstrang, da die Polymerase in beide Richtungen arbeiten kann.","korrekt":false},
    {"nr":5,"text":"RNA-Primer sind notwendig, da DNA-Polymerase keinen neuen Strang de novo beginnen kann.","korrekt":true}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[1,3,5]},
    {"key":"B","nummern":[2,3,4]},
    {"key":"C","nummern":[1,2,5]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[2,4,5]}
  ]'::jsonb,
  'Korrekt: 1, 3, 5. — (1) Semikonservativ bestätigt durch Meselson-Stahl-Experiment (N¹⁵/N¹⁴). (3) Leitstrang läuft kontinuierlich 5''→3'' in Richtung der Gabel. (5) DNA-Pol braucht 3''-OH-Ende → Primase legt RNA-Primer. Falsch: (2) DNA-Pol synthetisiert ausschließlich 5''→3''. (4) Okazaki-Fragmente entstehen am Folgestrang (Lagging Strand), nicht am Leitstrang.',
  2
),

-- ── K-2: Transkription ───────────────────────────────────────
(
  'typk-bio-6-02-transkription',
  'K', 'biologie', 'bio-6-02',
  'Welche der folgenden Aussagen zur Transkription sind korrekt?',
  '[]'::jsonb,
  'C',
  '[
    {"nr":1,"text":"Die Transkription überträgt die genetische Information von DNA in mRNA.","korrekt":true},
    {"nr":2,"text":"RNA-Polymerase benötigt einen Primer, um die mRNA-Synthese zu starten.","korrekt":false},
    {"nr":3,"text":"Die mRNA-Synthese läuft in 5''→3''-Richtung ab.","korrekt":true},
    {"nr":4,"text":"Der Matrizenstrang wird von der RNA-Polymerase in 5''→3''-Richtung abgelesen.","korrekt":false},
    {"nr":5,"text":"Bei Eukaryoten werden Introns durch Spleißen (Splicing) aus der prä-mRNA entfernt.","korrekt":true}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[2,4,5]},
    {"key":"B","nummern":[1,2,4]},
    {"key":"C","nummern":[1,3,5]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[2,3,4]}
  ]'::jsonb,
  'Korrekt: 1, 3, 5. — (1) Transkription DNA→RNA (zentrales Dogma). (3) RNA-Pol synthetisiert 5''→3''. (5) Eukaryotisches Spleißen: Introns raus, Exons bleiben. Falsch: (2) RNA-Pol braucht keinen Primer (nur DNA-Pol). (4) Matrizenstrang wird in 3''→5''-Richtung abgelesen (antiparallel zur mRNA).',
  2
),

-- ── K-3: Translation ────────────────────────────────────────
(
  'typk-bio-6-03-translation',
  'K', 'biologie', 'bio-6-03',
  'Welche der folgenden Aussagen zur Translation sind korrekt?',
  '[]'::jsonb,
  'A',
  '[
    {"nr":1,"text":"Die Translation findet an Ribosomen statt und übersetzt mRNA in Aminosäureketten (Proteine).","korrekt":true},
    {"nr":2,"text":"tRNA transportiert Aminosäuren zum Ribosom — jede tRNA trägt ein spezifisches Anticodon.","korrekt":true},
    {"nr":3,"text":"Das Startcodon AUG kodiert die Aminosäure Glutamin.","korrekt":false},
    {"nr":4,"text":"Der genetische Code ist degeneriert: mehrere Codons können für dieselbe Aminosäure kodieren.","korrekt":true},
    {"nr":5,"text":"Stoppcodons (UAA, UAG, UGA) kodieren für seltene Aminosäuren wie Selenocystein.","korrekt":false}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[1,2,4]},
    {"key":"B","nummern":[1,3,5]},
    {"key":"C","nummern":[2,3,4]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[2,4,5]}
  ]'::jsonb,
  'Korrekt: 1, 2, 4. — (1) Ribosomen (rRNA + Proteine) = Translationsmaschine. (2) tRNA: Adapter Codon↔Aminosäure via Anticodon. (4) Degeneriertheit: 64 Codons für 20 AS + 3 Stop. Falsch: (3) AUG = Methionin (Met/Start), nicht Glutamin (CAA/CAG). (5) UAA/UAG/UGA = echte Stoppcodons (kein AS-Transfer), außer Selenocystein (UGA) in Spezialfällen — für MedAT: Stoppcodons kodieren keine AS.',
  2
),

-- ── K-4: Genregulation ───────────────────────────────────────
(
  'typk-bio-6-04-genregulation',
  'K', 'biologie', 'bio-6-04',
  'Welche der folgenden Aussagen zur Genregulation sind korrekt?',
  '[]'::jsonb,
  'B',
  '[
    {"nr":1,"text":"Der lac-Operon ist ein Beispiel für eine induzierbare Genexpression bei Prokaryoten.","korrekt":true},
    {"nr":2,"text":"Transkriptionsfaktoren binden an Promotorbereiche der DNA und regulieren die Genexpression.","korrekt":true},
    {"nr":3,"text":"Methylierung von Histonen führt immer zur Aktivierung der Genexpression (Euchromatin).","korrekt":false},
    {"nr":4,"text":"miRNA kann die Translation von mRNA-Zielsequenzen durch Bindung an die 3''-UTR hemmen.","korrekt":true},
    {"nr":5,"text":"Epigenetische Veränderungen sind definitionsgemäß Veränderungen in der DNA-Nucleotidsequenz.","korrekt":false}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[1,3,5]},
    {"key":"B","nummern":[1,2,4]},
    {"key":"C","nummern":[2,3,5]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[3,4,5]}
  ]'::jsonb,
  'Korrekt: 1, 2, 4. — (1) lac-Operon: Lactose = Induktor → Repressor inaktiv → Gene an. (2) TF binden cis-regulatorische Elemente (Promotor, Enhancer). (4) miRNA = posttranskriptionelle Regulation via RISC. Falsch: (3) Histonmethylierung kann aktivieren (H3K4me3) oder reprimieren (H3K9me3) — nicht universell aktivierend. (5) Epigenetik = vererbbare Genexpressions-Änderungen OHNE DNA-Sequenzänderung.',
  3
),

-- ── K-5: PCR-Methodik (Molekulargenetik, bio-6-01) ───────────
(
  'typk-bio-6-01-pcr',
  'K', 'biologie', 'bio-6-01',
  'Welche der folgenden Aussagen zur PCR (Polymerase-Kettenreaktion) sind korrekt?',
  '[]'::jsonb,
  'C',
  '[
    {"nr":1,"text":"Die PCR amplifiziert spezifische DNA-Abschnitte in vitro ohne lebende Zellen.","korrekt":true},
    {"nr":2,"text":"Taq-Polymerase ist hitzelabil und muss nach jedem Denaturierungsschritt neu zugegeben werden.","korrekt":false},
    {"nr":3,"text":"Der Annealing-Schritt (55–65 °C) ermöglicht die Hybridisierung der Primer mit der Template-DNA.","korrekt":true},
    {"nr":4,"text":"Nach n Zyklen entstehen ausgehend von einer Kopie theoretisch 2ⁿ DNA-Moleküle.","korrekt":true},
    {"nr":5,"text":"PCR kann direkt aus RNA-Templates ohne vorherige cDNA-Synthese durchgeführt werden.","korrekt":false}
  ]'::jsonb,
  '[
    {"key":"A","nummern":[2,4,5]},
    {"key":"B","nummern":[1,2,3]},
    {"key":"C","nummern":[1,3,4]},
    {"key":"D","nummern":[1,4,5]},
    {"key":"E","nummern":[2,3,5]}
  ]'::jsonb,
  'Korrekt: 1, 3, 4. — (1) PCR = in-vitro-Methode (Thermocycler, keine Zellen). (3) Annealing bei primer-spezifischer Tm (55–65 °C). (4) Exponentielle Amplifikation: 2ⁿ (daher ~10⁹ Kopien nach 30 Zyklen). Falsch: (2) Taq-Polymerase (aus Thermus aquaticus) ist hitzestabil bis >95 °C — das ist ihr Vorteil! (5) Standard-PCR braucht DNA; RNA-Templates erfordern RT-PCR (zuerst Reverse Transkription → cDNA).',
  2
)

ON CONFLICT (id) DO NOTHING;
