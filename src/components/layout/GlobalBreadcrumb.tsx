import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb, getDefaultBreadcrumbs } from "@/contexts/BreadcrumbContext";

export function GlobalBreadcrumb() {
  const location = useLocation();
  const { breadcrumbs } = useBreadcrumb();
  const items = breadcrumbs ?? getDefaultBreadcrumbs(location.pathname);

  if (!items.length) return null;

  return (
    <Breadcrumb className="flex-1 min-w-0 basis-0" aria-label="Navigationspfad">
      <BreadcrumbList className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={i} className="contents">
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast && !item.href ? (
                  <BreadcrumbPage className="text-midnight dark:text-slate-100 font-medium truncate max-w-[120px] sm:max-w-[200px]">
                    {item.label}
                  </BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.href}
                      className="hover:text-primary-500 truncate max-w-[120px] sm:max-w-[200px]"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-midnight dark:text-slate-100 font-medium truncate max-w-[120px] sm:max-w-[200px]">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
