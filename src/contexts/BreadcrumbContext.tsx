import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { BreadcrumbItemConfig } from "@/components/ui/breadcrumb-wrapper";

type SetBreadcrumbs = (items: BreadcrumbItemConfig[] | null) => void;

const BreadcrumbContext = createContext<{
  breadcrumbs: BreadcrumbItemConfig[] | null;
  setBreadcrumbs: SetBreadcrumbs;
} | null>(null);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbsState] = useState<BreadcrumbItemConfig[] | null>(null);
  const setBreadcrumbs = useCallback<SetBreadcrumbs>((items) => {
    setBreadcrumbsState(items);
  }, []);
  useEffect(() => {
    setBreadcrumbsState(null);
  }, [location.pathname]);
  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const ctx = useContext(BreadcrumbContext);
  return ctx ?? { breadcrumbs: null, setBreadcrumbs: () => {} };
}

/** Derive default breadcrumb from pathname when no page has set custom ones */
export function getDefaultBreadcrumbs(pathname: string): BreadcrumbItemConfig[] {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return [{ label: "Dashboard" }];
  const labels: Record<string, string> = {
    bms: "BMS",
    kff: "KFF",
    tv: "TV",
    sek: "SEK",
    simulation: "Simulation",
    "ai-tutor": "AI-Tutor",
    lernplan: "Lernplan",
    analyse: "Analyse",
    community: "Community",
    statistik: "Statistik",
    notizen: "Notizen",
    karteikarten: "Karteikarten",
    duell: "Duell",
    stichwortliste: "Stichwortliste",
    schwachstellen: "Schwachstellen",
    preise: "Preise",
    wissencheck: "Wissenscheck",
    prognose: "Prognose",
    biologie: "Biologie",
    chemie: "Chemie",
    physik: "Physik",
    mathematik: "Mathematik",
  };
  const items: BreadcrumbItemConfig[] = [{ label: "Dashboard", href: "/" }];
  let href = "";
  for (let i = 0; i < segments.length; i++) {
    href += "/" + segments[i];
    const label = labels[segments[i]] ?? segments[i];
    const isLast = i === segments.length - 1;
    items.push(isLast ? { label } : { label, href });
  }
  return items;
}
