interface GlossaryTermProps {
  term: string;
  className?: string;
}

/**
 * Renders a glossary term as plain text (no tooltip).
 */
export function GlossaryTerm({ term, className }: GlossaryTermProps) {
  return <span className={className}>{term}</span>;
}
