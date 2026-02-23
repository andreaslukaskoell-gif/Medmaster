interface KeyFactsGridProps {
  title: string;
  facts: { label: string; value: string }[];
}

export function KeyFactsGrid({ title, facts }: KeyFactsGridProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 my-8">
      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        📋 Key Facts — {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-teal-500 font-bold mt-0.5">•</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {fact.label}:{" "}
              <strong className="text-gray-900 dark:text-gray-100">{fact.value}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
