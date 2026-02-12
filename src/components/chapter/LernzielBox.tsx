interface LernzielBoxProps {
  items: string[];
}

export function LernzielBox({ items }: LernzielBoxProps) {
  return (
    <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-r-xl p-6 mb-8">
      <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
        🎯 Lernziele — Nach diesem Kapitel kannst du:
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span className="text-teal-900 dark:text-teal-200 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
