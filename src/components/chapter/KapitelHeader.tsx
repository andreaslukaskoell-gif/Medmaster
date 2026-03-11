interface KapitelHeaderProps {
  icon: string;
  subject: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  readingTime?: string;
  level?: string;
  frequency?: string;
}

export function KapitelHeader({
  icon,
  subject,
  chapterNumber,
  title,
  subtitle,
  readingTime = "~45 Minuten",
  level = "Grundlage",
  frequency = "Häufig geprüft",
}: KapitelHeaderProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full">
          {subject} • {chapterNumber}
        </span>
      </div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{title}</h1>
      <p className="text-[var(--muted)] mb-4">{subtitle}</p>
      <div className="flex gap-6 text-sm text-[var(--muted)]">
        <span>⏱ {readingTime}</span>
        <span>📊 {level}</span>
        <span>🎯 {frequency}</span>
      </div>
    </div>
  );
}
