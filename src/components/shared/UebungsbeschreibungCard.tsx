/**
 * Zeigt eine einheitliche Übungsbeschreibung: Ablauf, Aufbau/Struktur, Bewertung.
 * Verwendet für BMS, KFF, SEK und TV.
 */
import { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  getUebungsbeschreibung,
  type UebungsbeschreibungId,
  type Uebungsbeschreibung,
} from "@/data/uebungsbeschreibungen";

type Props = {
  /** ID der Übung (z. B. "bms", "tv-ueben") */
  id: UebungsbeschreibungId;
  /** Optional: kompakt und einklappbar */
  collapsible?: boolean;
  /** Optional: Standard eingeklappt */
  defaultCollapsed?: boolean;
  /** Optionale zusätzliche CSS-Klasse */
  className?: string;
};

export function UebungsbeschreibungCard({
  id,
  collapsible = false,
  defaultCollapsed = false,
  className,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const u: Uebungsbeschreibung = getUebungsbeschreibung(id);

  const header = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
        <Info className="w-4 h-4 text-primary" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{u.title}</h3>
      {collapsible && (
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="ml-auto p-1 rounded text-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          aria-expanded={!collapsed}
        >
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      )}
    </div>
  );

  const body = (
    <div className="space-y-4 text-sm">
      <section>
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Ablauf</h4>
        <p className="text-muted leading-relaxed">{u.ablauf}</p>
      </section>
      <section>
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Aufbau & Struktur</h4>
        <p className="text-muted leading-relaxed">{u.aufbauStruktur}</p>
      </section>
      <section>
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Bewertung</h4>
        <p className="text-muted leading-relaxed">{u.bewertung}</p>
      </section>
    </div>
  );

  return (
    <Card className={className}>
      <CardContent className="pt-5 pb-5">
        {collapsible ? (
          <>
            <div
              role="button"
              tabIndex={0}
              onClick={collapsible ? () => setCollapsed((c) => !c) : undefined}
              onKeyDown={(e) => {
                if (collapsible && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setCollapsed((c) => !c);
                }
              }}
              className="cursor-pointer"
            >
              {header}
            </div>
            {!collapsed && <div className="mt-4 pl-10">{body}</div>}
          </>
        ) : (
          <>
            {header}
            <div className="mt-4 pl-10">{body}</div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
