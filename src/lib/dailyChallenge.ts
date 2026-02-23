import { alleKapitel } from "@/data/bmsKapitel";

export interface DailyChallenge {
  date: string; // YYYY-MM-DD
  questionId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  fach: string; // kapitel.subject
  kapitelTitle: string;
}

export interface DailyChallengeResult {
  date: string;
  solved: boolean;
  correctOnAttempt: number | null; // 1, 2, 3 or null=failed
  xpEarned: number;
}

// Deterministic: same date → same question for everyone
function getDateSeed(dateStr: string): number {
  return Math.abs(dateStr.split("").reduce((acc, c) => acc * 31 + c.charCodeAt(0), 0));
}

function getAllBMSQuestions() {
  return alleKapitel.flatMap((kapitel) =>
    kapitel.unterkapitel.flatMap((uk) =>
      uk.selfTest.map((q, idx) => ({
        questionId: `${uk.id}-${idx}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        fach: kapitel.subject,
        kapitelTitle: kapitel.title,
      }))
    )
  );
}

export function getTodayDateStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDailyQuestion(): DailyChallenge | null {
  const questions = getAllBMSQuestions();
  if (questions.length === 0) return null;
  const today = getTodayDateStr();
  const seed = getDateSeed(today);
  const q = questions[seed % questions.length];
  return { date: today, ...q };
}

export function getXPForAttempt(attempt: number): number {
  if (attempt === 1) return 100;
  if (attempt === 2) return 75;
  if (attempt === 3) return 50;
  return 25; // wrong all 3 times
}

const STORAGE_PREFIX = "daily_challenge_";

export function saveDailyResult(result: DailyChallengeResult): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + result.date, JSON.stringify(result));
  } catch {}
}

export function getTodaysResult(): DailyChallengeResult | null {
  try {
    const today = getTodayDateStr();
    const raw = localStorage.getItem(STORAGE_PREFIX + today);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function generateShareText(result: DailyChallengeResult): string {
  const date = new Date().toLocaleDateString("de-AT", { day: "numeric", month: "long" });
  let emoji = "🟥🟥🟥";
  if (result.correctOnAttempt === 1) emoji = "🟩⬜⬜";
  else if (result.correctOnAttempt === 2) emoji = "🟥🟩⬜";
  else if (result.correctOnAttempt === 3) emoji = "🟥🟥🟩";

  if (result.solved) {
    return `🎯 BMS des Tages – ${date}\n${emoji}\n\nIn ${result.correctOnAttempt}/3 Versuchen gelöst! +${result.xpEarned} XP\n\nKostenlose MedAT-Vorbereitung: medmaster.app 🧠`;
  }
  return `🎯 BMS des Tages – ${date}\n${emoji}\n\nHard one today! Morgen klappt's 💪\n\nmedmaster.app 🧠`;
}

export function getCountdownToMidnight(): string {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
