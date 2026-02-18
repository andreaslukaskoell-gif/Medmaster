-- KFF Test-Ergebnisse (Einzelaufgaben + Simulationen) pro User
-- Für Dashboard und Auswertung aus Supabase

CREATE TABLE IF NOT EXISTS kff_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  result_type TEXT NOT NULL CHECK (result_type IN ('single', 'simulation')),
  subtest_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_kff_results_user ON kff_results(user_id);
CREATE INDEX IF NOT EXISTS idx_kff_results_created ON kff_results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_kff_results_subtest ON kff_results(subtest_type);

COMMENT ON TABLE kff_results IS 'KFF-Ergebnisse: single = eine Aufgabe (KFFResult), simulation = komplette Simulation (SimulationResult)';

-- RLS
ALTER TABLE kff_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "kff_results_select_own" ON kff_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "kff_results_insert_own" ON kff_results FOR INSERT WITH CHECK (auth.uid() = user_id);
-- Kein UPDATE/DELETE nötig (Ergebnisse sind unveränderlich)
