import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface StrategyGuide {
  title: string;
  sections: { heading: string; content: string }[];
}

interface Props {
  guide: StrategyGuide;
  onBack: () => void;
}

/**
 * Shared strategy guide renderer used by KFF, TV, and SEK.
 * Displays a titled guide with accordion-style section cards.
 */
export default function StrategyGuideView({ guide, onBack }: Props) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>
      <h1 className="text-2xl font-bold text-[var(--text-primary)]">{guide.title}</h1>
      {guide.sections.map((s, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{s.heading}</h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {s.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
