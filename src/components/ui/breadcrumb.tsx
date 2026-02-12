import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted mb-4">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {item.href ? (
            <Link to={item.href} onClick={item.onClick} className="hover:text-primary-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-gray-100 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
