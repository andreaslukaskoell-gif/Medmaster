import React from "react";

type KeyFactsGridProps = {
  title: string;
  facts: { label: string; value: string }[];
};

export const KeyFactsGrid = React.memo(function KeyFactsGrid({ title, facts }: KeyFactsGridProps) {
  return (
    <div className="bg-[var(--border)]/30 rounded-xl p-6 border border-[var(--border)] my-8">
      <h3 className="font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        📋 Key Facts — {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
            <span className="text-sm text-[var(--text-primary)]">
              {fact.label}: <strong className="text-[var(--text-primary)]">{fact.value}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
