export async function shareText(text: string, title = "Medmaster"): Promise<void> {
  try {
    if (navigator.share) {
      await navigator.share({ title, text });
    } else {
      await navigator.clipboard.writeText(text);
      // Caller should show toast feedback
    }
  } catch {
    // User cancelled or not supported — silently ignore
  }
}

export function getStreakShareText(days: number): string {
  return `🔥 ${days} Tage Streak auf Medmaster!\nIch lerne täglich für den MedAT — schon ${days} Tage in Folge!\n👉 medmaster.app`;
}

export function getBadgeShareText(badgeName: string, badgeTier?: string): string {
  const tierEmoji = badgeTier === "gold" ? "🥇" : badgeTier === "silver" ? "🥈" : "🥉";
  return `${tierEmoji} Ich hab gerade das Badge "${badgeName}" auf Medmaster verdient!\nKostenlose MedAT-Vorbereitung: medmaster.app 🧠`;
}

export function getLevelShareText(level: number, levelName: string): string {
  return `⬆️ Level ${level} erreicht — ${levelName}!\nWeiter zu Level ${level + 1} auf Medmaster!\nmedmaster.app 🧠`;
}

export function getWrappedShareText(stats: {
  month: string;
  questionsAnswered: number;
  correctRate: number;
  longestStreak: number;
  topPercentile: number;
}): string {
  return `📊 Mein BMS-${stats.month} auf Medmaster:\n✅ ${stats.questionsAnswered} Fragen beantwortet (${stats.correctRate}% richtig)\n🔥 ${stats.longestStreak} Tage Streak\n🏆 Top ${stats.topPercentile}% aller Nutzer\nmedmaster.app 🧠`;
}
