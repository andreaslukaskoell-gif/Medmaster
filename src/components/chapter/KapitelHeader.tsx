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
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
          {subject} • {chapterNumber}
        </span>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-teal-100 mb-4">{subtitle}</p>
      <div className="flex gap-6 text-sm text-teal-200">
        <span>⏱ {readingTime}</span>
        <span>📊 {level}</span>
        <span>🎯 {frequency}</span>
      </div>
    </div>
  );
}
