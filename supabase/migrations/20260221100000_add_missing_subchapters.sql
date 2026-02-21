-- ============================================================
-- Add missing bms_chapters and bms_subchapters
-- for Chemie, Mathematik, Physik + missing Bio UKs
-- ============================================================

-- ============================================================
-- CHAPTERS
-- ============================================================

INSERT INTO bms_chapters (id, title, subject, icon, order_index)
VALUES
  -- Bio missing (kap7 = Gentechnik/Biotechnologie)
  ('bio-kap7', 'Gentechnik & Biotechnologie', 'biologie', '🧫', 7),

  -- Chemie
  ('ch-kap1',  'Atombau und Teilchenmodelle',   'chemie', '⚛️', 1),
  ('ch-kap2',  'Quantenphysik und Strahlung',   'chemie', '🌊', 2),
  ('ch-kap3',  'Gase und Gasgesetze',            'chemie', '💨', 3),
  ('ch-kap4',  'Aggregatzustände',               'chemie', '🧊', 4),
  ('ch-kap5',  'Periodensystem',                 'chemie', '📊', 5),
  ('ch-kap6',  'Chemische Bindungen',            'chemie', '🔗', 6),
  ('ch-kap7',  'Stöchiometrie',                  'chemie', '⚖️', 7),
  ('ch-kap8',  'Reaktionskinetik & Gleichgewicht','chemie','⚡', 8),
  ('ch-kap9',  'Anorganische Stoffe',            'chemie', '🧪', 9),
  ('ch-kap10', 'Säure-Base-Chemie',              'chemie', '🧫', 10),
  ('ch-kap11', 'Elektrochemie & Redox',          'chemie', '🔋', 11),
  ('ch-kap12', 'Organische Chemie',              'chemie', '🔬', 12),
  ('ch-kap13', 'Biomoleküle',                    'chemie', '🧬', 13),

  -- Mathematik
  ('ma-kap1', 'Zehnerpotenzen & Notation',      'mathematik', '🔢', 1),
  ('ma-kap2', 'Grundrechenarten & Algebra',     'mathematik', '➕', 2),
  ('ma-kap3', 'Geometrie',                       'mathematik', '📐', 3),
  ('ma-kap4', 'Einheiten & Maßsysteme',         'mathematik', '📏', 4),
  ('ma-kap5', 'Funktionen & Analysis',          'mathematik', '📈', 5),
  ('ma-kap6', 'Vektoren',                        'mathematik', '➡️', 6),

  -- Physik
  ('ph-kap1', 'SI-Einheiten & Größen',          'physik', '📏', 1),
  ('ph-kap2', 'Mechanik',                        'physik', '⚙️', 2),
  ('ph-kap3', 'Schwingungen & Wellen',          'physik', '〰️', 3),
  ('ph-kap4', 'Wärmelehre',                     'physik', '🌡️', 4),
  ('ph-kap5', 'Elektrizität & Magnetismus',     'physik', '⚡', 5),
  ('ph-kap6', 'Optik',                          'physik', '🔭', 6),
  ('ph-kap7', 'Atomphysik & Strahlung',        'physik', '☢️', 7)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- BIO: Missing subchapters
-- ============================================================

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-7-01', 'bio-kap7', 'PCR — Prinzip, Ablauf und klinische Anwendung',
  '# PCR — Prinzip, Ablauf und klinische Anwendung', '[]', 1
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-7-02', 'bio-kap7', 'DNA-Sequenzierung und Genomanalyse',
  '# DNA-Sequenzierung und Genomanalyse', '[]', 2
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-7-04', 'bio-kap7', 'Genetischer Fingerabdruck — STR, RFLP und Forensik',
  '# Genetischer Fingerabdruck', '[]', 4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-7-05', 'bio-kap7', 'Gentechnisch veränderte Organismen — Methoden',
  '# GVO — Methoden', '[]', 5
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-7-06', 'bio-kap7', 'Klonierung — Reproduktiv, Therapeutisch, Ethik',
  '# Klonierung', '[]', 6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-9-07', 'bio-kap9', 'Hominidenevolution',
  '# Hominidenevolution', '[]', 7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index)
VALUES (
  'bio-11-04', 'bio-kap11', 'Rhesusfaktor und Rhesusinkompatibilität',
  '# Rhesusfaktor und Rhesusinkompatibilität', '[]', 4
) ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- CHEMIE: All subchapters
-- ============================================================

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-1-01', 'ch-kap1', 'Elementarteilchen und Atomaufbau', '# Elementarteilchen und Atomaufbau', '[]', 1),
  ('ch-1-02', 'ch-kap1', 'Isotope, Nuklide und radioaktive Elemente', '# Isotope und Nuklide', '[]', 2),
  ('ch-1-03', 'ch-kap1', 'Elektronenhülle — Schalen, Orbitale, Besetzungsregeln', '# Elektronenhülle', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-2-01', 'ch-kap2', 'Welle-Teilchen-Dualismus und Unschärferelation', '# Welle-Teilchen-Dualismus', '[]', 1),
  ('ch-2-02', 'ch-kap2', 'Elektromagnetische Strahlung und Photonen', '# EM-Strahlung', '[]', 2),
  ('ch-2-03', 'ch-kap2', 'Atomspektren und Spektralanalyse', '# Atomspektren', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-3-01', 'ch-kap3', 'Ideales Gasgesetz pV = nRT', '# Ideales Gasgesetz', '[]', 1),
  ('ch-3-02', 'ch-kap3', 'Gasgesetze — Dalton und Henry', '# Gasgesetze', '[]', 2),
  ('ch-3-03', 'ch-kap3', 'Mol, molare Masse, Avogadro', '# Mol und molare Masse', '[]', 3),
  ('ch-3-04', 'ch-kap3', 'Gasgesetze in der Medizin', '# Gasgesetze in der Medizin', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-4-01', 'ch-kap4', 'Aggregatzustände und Anomalie des Wassers', '# Aggregatzustände', '[]', 1),
  ('ch-4-02', 'ch-kap4', 'Phasenübergänge und Energetik', '# Phasenübergänge', '[]', 2),
  ('ch-4-03', 'ch-kap4', 'Phasendiagramm, Tripelpunkt, kritischer Punkt', '# Phasendiagramm', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-5-01', 'ch-kap5', 'Aufbau des PSE', '# Aufbau des Periodensystems', '[]', 1),
  ('ch-5-02', 'ch-kap5', 'Periodische Trends', '# Periodische Trends', '[]', 2),
  ('ch-5-03', 'ch-kap5', 'Wichtige Elementgruppen', '# Elementgruppen', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-6-01', 'ch-kap6', 'Ionenbindung und Gitterenergie', '# Ionenbindung', '[]', 1),
  ('ch-6-02', 'ch-kap6', 'Kovalente Bindung und Hybridisierung', '# Kovalente Bindung', '[]', 2),
  ('ch-6-03', 'ch-kap6', 'Van-der-Waals, Wasserstoffbrücken, Metallbindung', '# Zwischenmolekulare Kräfte', '[]', 3),
  ('ch-6-04', 'ch-kap6', 'Bindungen in Biomolekülen', '# Bindungen in Biomolekülen', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-7-01', 'ch-kap7', 'Reaktionsgleichungen und Symbolik', '# Reaktionsgleichungen', '[]', 1),
  ('ch-7-02', 'ch-kap7', 'Stöchiometrie und Konzentrationsrechnen', '# Stöchiometrie', '[]', 2),
  ('ch-7-03', 'ch-kap7', 'Energetik chemischer Reaktionen', '# Reaktionsenthalpie', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-8-01', 'ch-kap8', 'Reaktionsgeschwindigkeit und Aktivierungsenergie', '# Reaktionskinetik', '[]', 1),
  ('ch-8-02', 'ch-kap8', 'Chemisches Gleichgewicht und Massenwirkungsgesetz', '# Chemisches Gleichgewicht', '[]', 2),
  ('ch-8-03', 'ch-kap8', 'Le Chatelier-Prinzip', '# Le Chatelier-Prinzip', '[]', 3),
  ('ch-8-04', 'ch-kap8', 'Katalysatoren und Enzyme', '# Katalysatoren', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-9-01', 'ch-kap9', 'Wasser', '# Wasser — Eigenschaften und Bedeutung', '[]', 1),
  ('ch-9-02', 'ch-kap9', 'Kohlenstoff und seine Verbindungen', '# Kohlenstoff', '[]', 2),
  ('ch-9-03', 'ch-kap9', 'Stickstoff, Schwefel und Halogene', '# N, S und Halogene', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-10-01', 'ch-kap10', 'Brønsted-Lowry Säure-Base-Theorie', '# Brønsted-Lowry', '[]', 1),
  ('ch-10-02', 'ch-kap10', 'pH-Wert', '# pH-Wert', '[]', 2),
  ('ch-10-03', 'ch-kap10', 'Puffer und Henderson-Hasselbalch', '# Puffer', '[]', 3),
  ('ch-10-04', 'ch-kap10', 'Säure-Base-Störungen', '# Säure-Base-Störungen', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-11-01', 'ch-kap11', 'Oxidation und Reduktion — Grundlagen', '# Redox-Grundlagen', '[]', 1),
  ('ch-11-02', 'ch-kap11', 'Elektrochemische Spannungsreihe und galvanische Elemente', '# Spannungsreihe', '[]', 2),
  ('ch-11-03', 'ch-kap11', 'Elektrolyse und Nernst-Gleichung', '# Elektrolyse', '[]', 3),
  ('ch-11-04', 'ch-kap11', 'Redox-Reaktionen in der Biologie', '# Biologische Redox-Reaktionen', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-12-01', 'ch-kap12', 'Kohlenwasserstoffe — Alkane, Alkene, Alkine', '# Kohlenwasserstoffe', '[]', 1),
  ('ch-12-02', 'ch-kap12', 'Funktionelle Gruppen', '# Funktionelle Gruppen', '[]', 2),
  ('ch-12-03', 'ch-kap12', 'Ester, Ether und Isomerie', '# Ester und Ether', '[]', 3),
  ('ch-12-04', 'ch-kap12', 'Amine und biologische Bedeutung', '# Amine', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ch-13-01', 'ch-kap13', 'Kohlenhydrate', '# Kohlenhydrate', '[]', 1),
  ('ch-13-02', 'ch-kap13', 'Aminosäuren und Proteine', '# Aminosäuren und Proteine', '[]', 2),
  ('ch-13-03', 'ch-kap13', 'Lipide — Fette, Phospholipide und Cholesterin', '# Lipide', '[]', 3),
  ('ch-13-04', 'ch-kap13', 'Nukleinsäuren — DNA, RNA und Nukleotide', '# Nukleinsäuren', '[]', 4),
  ('ch-13-05', 'ch-kap13', 'Enzyme und Vitamine', '# Enzyme und Vitamine', '[]', 5)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- MATHEMATIK: All subchapters
-- ============================================================

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-1-01', 'ma-kap1', 'Zehnerpotenzen — Schreibweise und Rechenregeln', '# Zehnerpotenzen', '[]', 1),
  ('ma-1-02', 'ma-kap1', 'SI-Präfixe von Femto bis Tera', '# SI-Präfixe', '[]', 2),
  ('ma-1-03', 'ma-kap1', 'Wissenschaftliche Notation — Umrechnen und Rechnen', '# Wissenschaftliche Notation', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-2-01', 'ma-kap2', 'Gleichungen und Ungleichungen', '# Gleichungen', '[]', 1),
  ('ma-2-02', 'ma-kap2', 'Prozent-, Bruch- und Schlussrechnung', '# Prozentrechnung', '[]', 2),
  ('ma-2-03', 'ma-kap2', 'Quadratische Gleichungen und binomische Formeln', '# Quadratische Gleichungen', '[]', 3),
  ('ma-2-04', 'ma-kap2', 'Potenz- und Wurzelgesetze', '# Potenzgesetze', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-3-01', 'ma-kap3', 'Ebene Geometrie — Winkel, Dreiecke und Kreise', '# Planimetrie', '[]', 1),
  ('ma-3-02', 'ma-kap3', 'Körper — Volumen und Oberfläche', '# Stereometrie', '[]', 2),
  ('ma-3-03', 'ma-kap3', 'Ähnlichkeit, Trigonometrie und Koordinatengeometrie', '# Trigonometrie', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-4-01', 'ma-kap4', 'Länge, Fläche und Volumen — Umrechnung', '# Längenumrechnungen', '[]', 1),
  ('ma-4-02', 'ma-kap4', 'Zeit, Geschwindigkeit, Beschleunigung', '# Kinematische Einheiten', '[]', 2),
  ('ma-4-03', 'ma-kap4', 'SI-System — Grundeinheiten und abgeleitete Größen', '# SI-System', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-5-01', 'ma-kap5', 'Funktionen — Typen, Eigenschaften und Graphen', '# Funktionen', '[]', 1),
  ('ma-5-02', 'ma-kap5', 'Trigonometrische Funktionen', '# Trigonometrische Funktionen', '[]', 2),
  ('ma-5-03', 'ma-kap5', 'Differentialrechnung — Ableitungsregeln und Extremwerte', '# Differentialrechnung', '[]', 3),
  ('ma-5-04', 'ma-kap5', 'Integralrechnung — Stammfunktion und Flächenberechnung', '# Integralrechnung', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ma-6-01', 'ma-kap6', 'Vektoren — Darstellung, Addition und Subtraktion', '# Vektorgrundlagen', '[]', 1),
  ('ma-6-02', 'ma-kap6', 'Skalarprodukt und Kreuzprodukt', '# Vektorprodukte', '[]', 2),
  ('ma-6-03', 'ma-kap6', 'Betrag, Einheitsvektor und geometrische Anwendungen', '# Vektorbetrag', '[]', 3)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- PHYSIK: All subchapters
-- ============================================================

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-1-01', 'ph-kap1', 'SI-Grundgrößen und abgeleitete Einheiten', '# SI-Grundgrößen', '[]', 1),
  ('ph-1-02', 'ph-kap1', 'Präfixe und Umrechnungen', '# Präfixe', '[]', 2),
  ('ph-1-03', 'ph-kap1', 'Dimensionsanalyse', '# Dimensionsanalyse', '[]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-2-01', 'ph-kap2', 'Newtonsche Gesetze und Kinematik', '# Newtonsche Gesetze', '[]', 1),
  ('ph-2-02', 'ph-kap2', 'Erhaltungssätze (Energie, Impuls)', '# Erhaltungssätze', '[]', 2),
  ('ph-2-03', 'ph-kap2', 'Statik, Druck, Hydrodynamik', '# Statik und Druck', '[]', 3),
  ('ph-2-04', 'ph-kap2', 'Gravitation und Rotation', '# Gravitation', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-3-01', 'ph-kap3', 'Harmonische Schwingungen', '# Harmonische Schwingungen', '[]', 1),
  ('ph-3-02', 'ph-kap3', 'Wellenphänomene', '# Wellen', '[]', 2),
  ('ph-3-03', 'ph-kap3', 'Interferenz und Beugung', '# Interferenz', '[]', 3),
  ('ph-3-04', 'ph-kap3', 'Resonanz und stehende Wellen', '# Resonanz', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-4-01', 'ph-kap4', 'Temperatur und Wärme', '# Temperatur und Wärme', '[]', 1),
  ('ph-4-02', 'ph-kap4', 'Thermodynamische Hauptsätze', '# Hauptsätze der Thermodynamik', '[]', 2),
  ('ph-4-03', 'ph-kap4', 'Gasgesetze', '# Gasgesetze', '[]', 3),
  ('ph-4-04', 'ph-kap4', 'Phasenübergänge', '# Phasenübergänge', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-5-01', 'ph-kap5', 'Ladung, Feld und Coulomb', '# Elektrostatik', '[]', 1),
  ('ph-5-02', 'ph-kap5', 'Strom, Widerstand und Ohmsches Gesetz', '# Gleichstrom', '[]', 2),
  ('ph-5-03', 'ph-kap5', 'Kirchhoff, Schaltkreise', '# Schaltkreise', '[]', 3),
  ('ph-5-04', 'ph-kap5', 'Magnetismus und EM-Wellen', '# Magnetismus', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-6-01', 'ph-kap6', 'Reflexion und Brechung', '# Reflexion und Brechung', '[]', 1),
  ('ph-6-02', 'ph-kap6', 'Linsen und optische Systeme', '# Linsen', '[]', 2),
  ('ph-6-03', 'ph-kap6', 'Wellenoptik und Polarisation', '# Wellenoptik', '[]', 3),
  ('ph-6-04', 'ph-kap6', 'Auge und Fehlsichtigkeiten', '# Auge', '[]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bms_subchapters (id, chapter_id, title, content, questions, order_index) VALUES
  ('ph-7-01', 'ph-kap7', 'Atomkern und Kernkräfte', '# Atomkern', '[]', 1),
  ('ph-7-02', 'ph-kap7', 'Radioaktivität und Zerfallsgesetze', '# Radioaktivität', '[]', 2),
  ('ph-7-03', 'ph-kap7', 'Ionisierende Strahlung und Strahlenschutz', '# Strahlenschutz', '[]', 3),
  ('ph-7-04', 'ph-kap7', 'Kernspaltung, Fusion und medizinische Physik', '# Kernspaltung', '[]', 4)
ON CONFLICT (id) DO NOTHING;
