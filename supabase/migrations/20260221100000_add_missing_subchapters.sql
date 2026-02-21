-- ============================================================
-- Add missing bms_chapters and bms_subchapters
-- for Chemie, Mathematik, Physik + missing Bio UKs
-- IDs match local TS files: chem-kap*, phys-kap*, math-kap*
-- ============================================================

-- ============================================================
-- CHAPTERS
-- ============================================================

INSERT INTO bms_chapters (id, title, subject, icon, order_index)
VALUES
  -- Bio missing (kap7 = Gentechnik/Biotechnologie)
  ('bio-kap7', 'Gentechnik & Biotechnologie', 'biologie', '🧫', 7),

  -- Chemie (IDs match local TS: chem-kap*)
  ('chem-kap1',  'Atombau und Teilchenmodelle',    'chemie', '⚛️', 1),
  ('chem-kap2',  'Quantenphysik und Strahlung',    'chemie', '🌊', 2),
  ('chem-kap3',  'Gase und Gasgesetze',             'chemie', '💨', 3),
  ('chem-kap4',  'Aggregatzustände',                'chemie', '🧊', 4),
  ('chem-kap5',  'Periodensystem',                  'chemie', '📊', 5),
  ('chem-kap6',  'Chemische Bindungen',             'chemie', '🔗', 6),
  ('chem-kap7',  'Stöchiometrie',                   'chemie', '⚖️', 7),
  ('chem-kap8',  'Reaktionskinetik & Gleichgewicht','chemie', '⚡', 8),
  ('chem-kap9',  'Anorganische Stoffe',             'chemie', '🧪', 9),
  ('chem-kap10', 'Säure-Base-Chemie',               'chemie', '🧫', 10),
  ('chem-kap11', 'Elektrochemie & Redox',           'chemie', '🔋', 11),
  ('chem-kap12', 'Organische Chemie',               'chemie', '🔬', 12),
  ('chem-kap13', 'Biomoleküle',                     'chemie', '🧬', 13),

  -- Mathematik (IDs match local TS: math-kap*)
  ('math-kap1', 'Zehnerpotenzen & Notation',   'mathematik', '🔢', 1),
  ('math-kap2', 'Grundrechenarten & Algebra',  'mathematik', '➕', 2),
  ('math-kap3', 'Geometrie',                    'mathematik', '📐', 3),
  ('math-kap4', 'Einheiten & Maßsysteme',      'mathematik', '📏', 4),
  ('math-kap5', 'Funktionen & Analysis',       'mathematik', '📈', 5),
  ('math-kap6', 'Vektoren',                     'mathematik', '➡️', 6),

  -- Physik (IDs match local TS: phys-kap*)
  ('phys-kap1', 'SI-Einheiten & Größen',         'physik', '📏', 1),
  ('phys-kap2', 'Mechanik',                       'physik', '⚙️', 2),
  ('phys-kap3', 'Schwingungen & Wellen',         'physik', '〰️', 3),
  ('phys-kap4', 'Wärmelehre',                    'physik', '🌡️', 4),
  ('phys-kap5', 'Elektrizität & Magnetismus',    'physik', '⚡', 5),
  ('phys-kap6', 'Optik',                         'physik', '🔭', 6),
  ('phys-kap7', 'Atomphysik & Strahlung',       'physik', '☢️', 7)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- BIO: Missing subchapters (chapter_id = bio-kap*)
-- ============================================================
INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('bio-7-01',  'bio-kap7', 'PCR — Prinzip, Ablauf und klinische Anwendung', '# PCR', '[]', 1),
  ('bio-7-02',  'bio-kap7', 'DNA-Sequenzierung und Genomanalyse',            '# DNA-Sequenzierung', '[]', 2),
  ('bio-7-04',  'bio-kap7', 'Genetischer Fingerabdruck',                     '# Genetischer Fingerabdruck', '[]', 4),
  ('bio-7-05',  'bio-kap7', 'Gentechnisch veränderte Organismen',            '# GVO', '[]', 5),
  ('bio-7-06',  'bio-kap7', 'Klonierung',                                    '# Klonierung', '[]', 6),
  ('bio-9-07',  'bio-kap9', 'Hominidenevolution',                            '# Hominidenevolution', '[]', 7),
  ('bio-11-04', 'bio-kap11','Rhesusfaktor und Rhesusinkompatibilität',       '# Rhesusfaktor', '[]', 4)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- CHEMIE: All subchapters (chapter_id = chem-kap*)
-- ============================================================
INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-1-01', 'chem-kap1', 'Elementarteilchen und Atomaufbau',                    '# Elementarteilchen und Atomaufbau', '[]', 1),
  ('ch-1-02', 'chem-kap1', 'Isotope, Nuklide und radioaktive Elemente',           '# Isotope und Nuklide', '[]', 2),
  ('ch-1-03', 'chem-kap1', 'Elektronenhülle — Schalen, Orbitale, Besetzungsregeln','# Elektronenhülle', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-2-01', 'chem-kap2', 'Welle-Teilchen-Dualismus und Unschärferelation', '# Welle-Teilchen-Dualismus', '[]', 1),
  ('ch-2-02', 'chem-kap2', 'Elektromagnetische Strahlung und Photonen',      '# EM-Strahlung', '[]', 2),
  ('ch-2-03', 'chem-kap2', 'Atomspektren und Spektralanalyse',               '# Atomspektren', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-3-01', 'chem-kap3', 'Ideales Gasgesetz pV = nRT',        '# Ideales Gasgesetz', '[]', 1),
  ('ch-3-02', 'chem-kap3', 'Gasgesetze — Dalton und Henry',     '# Gasgesetze', '[]', 2),
  ('ch-3-03', 'chem-kap3', 'Mol, molare Masse, Avogadro',       '# Mol und molare Masse', '[]', 3),
  ('ch-3-04', 'chem-kap3', 'Gasgesetze in der Medizin',         '# Gasgesetze Medizin', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-4-01', 'chem-kap4', 'Aggregatzustände und Anomalie des Wassers',    '# Aggregatzustände', '[]', 1),
  ('ch-4-02', 'chem-kap4', 'Phasenübergänge und Energetik',               '# Phasenübergänge', '[]', 2),
  ('ch-4-03', 'chem-kap4', 'Phasendiagramm, Tripelpunkt, kritischer Punkt','# Phasendiagramm', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-5-01', 'chem-kap5', 'Aufbau des PSE',          '# Periodensystem', '[]', 1),
  ('ch-5-02', 'chem-kap5', 'Periodische Trends',      '# Periodische Trends', '[]', 2),
  ('ch-5-03', 'chem-kap5', 'Wichtige Elementgruppen', '# Elementgruppen', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-6-01', 'chem-kap6', 'Ionenbindung und Gitterenergie',                   '# Ionenbindung', '[]', 1),
  ('ch-6-02', 'chem-kap6', 'Kovalente Bindung und Hybridisierung',             '# Kovalente Bindung', '[]', 2),
  ('ch-6-03', 'chem-kap6', 'Van-der-Waals, Wasserstoffbrücken, Metallbindung', '# Zwischenmolekulare Kräfte', '[]', 3),
  ('ch-6-04', 'chem-kap6', 'Bindungen in Biomolekülen',                        '# Bindungen in Biomolekülen', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-7-01', 'chem-kap7', 'Reaktionsgleichungen und Symbolik',      '# Reaktionsgleichungen', '[]', 1),
  ('ch-7-02', 'chem-kap7', 'Stöchiometrie und Konzentrationsrechnen','# Stöchiometrie', '[]', 2),
  ('ch-7-03', 'chem-kap7', 'Energetik chemischer Reaktionen',        '# Reaktionsenthalpie', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-8-01', 'chem-kap8', 'Reaktionsgeschwindigkeit und Aktivierungsenergie', '# Reaktionskinetik', '[]', 1),
  ('ch-8-02', 'chem-kap8', 'Chemisches Gleichgewicht und Massenwirkungsgesetz','# Chemisches Gleichgewicht', '[]', 2),
  ('ch-8-03', 'chem-kap8', 'Le Chatelier-Prinzip',                             '# Le Chatelier', '[]', 3),
  ('ch-8-04', 'chem-kap8', 'Katalysatoren und Enzyme',                         '# Katalysatoren', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-9-01', 'chem-kap9', 'Wasser',                              '# Wasser', '[]', 1),
  ('ch-9-02', 'chem-kap9', 'Kohlenstoff und seine Verbindungen',  '# Kohlenstoff', '[]', 2),
  ('ch-9-03', 'chem-kap9', 'Stickstoff, Schwefel und Halogene',   '# N, S, Halogene', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-10-01', 'chem-kap10', 'Brønsted-Lowry Säure-Base-Theorie', '# Brønsted-Lowry', '[]', 1),
  ('ch-10-02', 'chem-kap10', 'pH-Wert',                           '# pH-Wert', '[]', 2),
  ('ch-10-03', 'chem-kap10', 'Puffer und Henderson-Hasselbalch',  '# Puffer', '[]', 3),
  ('ch-10-04', 'chem-kap10', 'Säure-Base-Störungen',              '# Säure-Base-Störungen', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-11-01', 'chem-kap11', 'Oxidation und Reduktion — Grundlagen',                    '# Redox-Grundlagen', '[]', 1),
  ('ch-11-02', 'chem-kap11', 'Elektrochemische Spannungsreihe und galvanische Elemente','# Spannungsreihe', '[]', 2),
  ('ch-11-03', 'chem-kap11', 'Elektrolyse und Nernst-Gleichung',                        '# Elektrolyse', '[]', 3),
  ('ch-11-04', 'chem-kap11', 'Redox-Reaktionen in der Biologie',                        '# Biologische Redox', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-12-01', 'chem-kap12', 'Kohlenwasserstoffe — Alkane, Alkene, Alkine', '# Kohlenwasserstoffe', '[]', 1),
  ('ch-12-02', 'chem-kap12', 'Funktionelle Gruppen',                         '# Funktionelle Gruppen', '[]', 2),
  ('ch-12-03', 'chem-kap12', 'Ester, Ether und Isomerie',                    '# Ester und Ether', '[]', 3),
  ('ch-12-04', 'chem-kap12', 'Amine und biologische Bedeutung',              '# Amine', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-13-01', 'chem-kap13', 'Kohlenhydrate',                              '# Kohlenhydrate', '[]', 1),
  ('ch-13-02', 'chem-kap13', 'Aminosäuren und Proteine',                   '# Aminosäuren', '[]', 2),
  ('ch-13-03', 'chem-kap13', 'Lipide — Fette, Phospholipide, Cholesterin', '# Lipide', '[]', 3),
  ('ch-13-04', 'chem-kap13', 'Nukleinsäuren — DNA, RNA und Nukleotide',    '# Nukleinsäuren', '[]', 4),
  ('ch-13-05', 'chem-kap13', 'Enzyme und Vitamine',                        '# Enzyme und Vitamine', '[]', 5)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- MATHEMATIK: All subchapters (chapter_id = math-kap*)
-- ============================================================
INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-1-01', 'math-kap1', 'Zehnerpotenzen — Schreibweise und Rechenregeln',      '# Zehnerpotenzen', '[]', 1),
  ('ma-1-02', 'math-kap1', 'SI-Präfixe von Femto bis Tera',                       '# SI-Präfixe', '[]', 2),
  ('ma-1-03', 'math-kap1', 'Wissenschaftliche Notation — Umrechnen und Rechnen',  '# Wissenschaftliche Notation', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-2-01', 'math-kap2', 'Gleichungen und Ungleichungen',                   '# Gleichungen', '[]', 1),
  ('ma-2-02', 'math-kap2', 'Prozent-, Bruch- und Schlussrechnung',            '# Prozentrechnung', '[]', 2),
  ('ma-2-03', 'math-kap2', 'Quadratische Gleichungen und binomische Formeln', '# Quadratische Gleichungen', '[]', 3),
  ('ma-2-04', 'math-kap2', 'Potenz- und Wurzelgesetze',                       '# Potenzgesetze', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-3-01', 'math-kap3', 'Ebene Geometrie — Winkel, Dreiecke und Kreise',         '# Planimetrie', '[]', 1),
  ('ma-3-02', 'math-kap3', 'Körper — Volumen und Oberfläche',                       '# Stereometrie', '[]', 2),
  ('ma-3-03', 'math-kap3', 'Ähnlichkeit, Trigonometrie und Koordinatengeometrie',   '# Trigonometrie', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-4-01', 'math-kap4', 'Länge, Fläche und Volumen — Umrechnung',          '# Längenumrechnungen', '[]', 1),
  ('ma-4-02', 'math-kap4', 'Zeit, Geschwindigkeit, Beschleunigung',           '# Kinematische Einheiten', '[]', 2),
  ('ma-4-03', 'math-kap4', 'SI-System — Grundeinheiten und abgeleitete Größen','# SI-System', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-5-01', 'math-kap5', 'Funktionen — Typen, Eigenschaften und Graphen',           '# Funktionen', '[]', 1),
  ('ma-5-02', 'math-kap5', 'Trigonometrische Funktionen',                             '# Trigonometrische Funktionen', '[]', 2),
  ('ma-5-03', 'math-kap5', 'Differentialrechnung — Ableitungsregeln und Extremwerte', '# Differentialrechnung', '[]', 3),
  ('ma-5-04', 'math-kap5', 'Integralrechnung — Stammfunktion und Flächenberechnung',  '# Integralrechnung', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-6-01', 'math-kap6', 'Vektoren — Darstellung, Addition und Subtraktion',  '# Vektorgrundlagen', '[]', 1),
  ('ma-6-02', 'math-kap6', 'Skalarprodukt und Kreuzprodukt',                    '# Vektorprodukte', '[]', 2),
  ('ma-6-03', 'math-kap6', 'Betrag, Einheitsvektor und geometrische Anwendungen','# Vektorbetrag', '[]', 3)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- PHYSIK: All subchapters (chapter_id = phys-kap*)
-- ============================================================
INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-1-01', 'phys-kap1', 'SI-Grundgrößen und abgeleitete Einheiten', '# SI-Grundgrößen', '[]', 1),
  ('ph-1-02', 'phys-kap1', 'Präfixe und Umrechnungen',                 '# Präfixe', '[]', 2),
  ('ph-1-03', 'phys-kap1', 'Dimensionsanalyse',                        '# Dimensionsanalyse', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-2-01', 'phys-kap2', 'Newtonsche Gesetze und Kinematik',    '# Newtonsche Gesetze', '[]', 1),
  ('ph-2-02', 'phys-kap2', 'Erhaltungssätze (Energie, Impuls)',   '# Erhaltungssätze', '[]', 2),
  ('ph-2-03', 'phys-kap2', 'Statik, Druck, Hydrodynamik',         '# Statik und Druck', '[]', 3),
  ('ph-2-04', 'phys-kap2', 'Gravitation und Rotation',            '# Gravitation', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-3-01', 'phys-kap3', 'Harmonische Schwingungen',   '# Harmonische Schwingungen', '[]', 1),
  ('ph-3-02', 'phys-kap3', 'Wellenphänomene',            '# Wellen', '[]', 2),
  ('ph-3-03', 'phys-kap3', 'Interferenz und Beugung',    '# Interferenz', '[]', 3),
  ('ph-3-04', 'phys-kap3', 'Resonanz und stehende Wellen','# Resonanz', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-4-01', 'phys-kap4', 'Temperatur und Wärme',              '# Temperatur und Wärme', '[]', 1),
  ('ph-4-02', 'phys-kap4', 'Thermodynamische Hauptsätze',       '# Hauptsätze', '[]', 2),
  ('ph-4-03', 'phys-kap4', 'Gasgesetze',                        '# Gasgesetze', '[]', 3),
  ('ph-4-04', 'phys-kap4', 'Phasenübergänge',                   '# Phasenübergänge', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-5-01', 'phys-kap5', 'Ladung, Feld und Coulomb',          '# Elektrostatik', '[]', 1),
  ('ph-5-02', 'phys-kap5', 'Strom, Widerstand und Ohmsches Gesetz','# Gleichstrom', '[]', 2),
  ('ph-5-03', 'phys-kap5', 'Kirchhoff, Schaltkreise',           '# Schaltkreise', '[]', 3),
  ('ph-5-04', 'phys-kap5', 'Magnetismus und EM-Wellen',         '# Magnetismus', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-6-01', 'phys-kap6', 'Reflexion und Brechung',         '# Reflexion und Brechung', '[]', 1),
  ('ph-6-02', 'phys-kap6', 'Linsen und optische Systeme',    '# Linsen', '[]', 2),
  ('ph-6-03', 'phys-kap6', 'Wellenoptik und Polarisation',   '# Wellenoptik', '[]', 3),
  ('ph-6-04', 'phys-kap6', 'Auge und Fehlsichtigkeiten',     '# Auge', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-7-01', 'phys-kap7', 'Atomkern und Kernkräfte',                         '# Atomkern', '[]', 1),
  ('ph-7-02', 'phys-kap7', 'Radioaktivität und Zerfallsgesetze',              '# Radioaktivität', '[]', 2),
  ('ph-7-03', 'phys-kap7', 'Ionisierende Strahlung und Strahlenschutz',       '# Strahlenschutz', '[]', 3),
  ('ph-7-04', 'phys-kap7', 'Kernspaltung, Fusion und medizinische Physik',   '# Kernspaltung', '[]', 4)
ON CONFLICT (id) DO NOTHING;
