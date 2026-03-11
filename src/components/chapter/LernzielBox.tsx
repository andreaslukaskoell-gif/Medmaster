interface LernzielBoxProps {
  items: string[];
}

export function LernzielBox({ items }: LernzielBoxProps) {
  return (
    <div className="bg-[var(--surface)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 mb-8">
      <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        🎯 Lernziele — Nach diesem Kapitel kannst du:
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-1">✓</span>
            <span className="text-[var(--text-primary)] text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
