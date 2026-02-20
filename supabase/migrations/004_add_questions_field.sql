-- Add questions field to bms_subchapters
-- Required for BMS content migration (stores quiz questions as JSONB array)

ALTER TABLE bms_subchapters
ADD COLUMN IF NOT EXISTS questions JSONB DEFAULT '[]'::jsonb;

-- Add comment for documentation
COMMENT ON COLUMN bms_subchapters.questions IS 'Quiz questions for this subchapter (array of question objects)';
