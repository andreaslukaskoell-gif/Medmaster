import { Link } from "react-router-dom";

type EmptyStateIcon = "book" | "chart" | "search" | "star" | "brain";

type EmptyStateProps = {
  icon: EmptyStateIcon;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

const icons: Record<EmptyStateIcon, React.ReactNode> = {
  book: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="18"
        width="26"
        height="44"
        rx="3"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <rect
        x="44"
        y="18"
        width="26"
        height="44"
        rx="3"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <line x1="40" y1="14" x2="40" y2="66" stroke="var(--accent)" strokeWidth="2" />
      <line
        x1="17"
        y1="30"
        x2="30"
        y2="30"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="17"
        y1="36"
        x2="28"
        y2="36"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="17"
        y1="42"
        x2="32"
        y2="42"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="50"
        y1="30"
        x2="63"
        y2="30"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="50"
        y1="36"
        x2="61"
        y2="36"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="50"
        y1="42"
        x2="64"
        y2="42"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),
  chart: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="12"
        y="48"
        width="12"
        height="18"
        rx="2"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <rect
        x="28"
        y="36"
        width="12"
        height="30"
        rx="2"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <rect
        x="44"
        y="24"
        width="12"
        height="42"
        rx="2"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <rect
        x="60"
        y="14"
        width="12"
        height="52"
        rx="2"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <path
        d="M14 44 L30 32 L46 20 L62 10"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
        opacity="0.5"
      />
      <circle cx="14" cy="44" r="2.5" fill="var(--accent)" opacity="0.6" />
      <circle cx="30" cy="32" r="2.5" fill="var(--accent)" opacity="0.6" />
      <circle cx="46" cy="20" r="2.5" fill="var(--accent)" opacity="0.6" />
      <circle cx="62" cy="10" r="2.5" fill="var(--accent)" opacity="0.6" />
    </svg>
  ),
  search: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="34"
        cy="34"
        r="18"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <circle
        cx="34"
        cy="34"
        r="10"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <line
        x1="47"
        y1="47"
        x2="62"
        y2="62"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="30" cy="30" r="3" fill="var(--accent)" opacity="0.15" />
    </svg>
  ),
  star: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 12 L47.5 30 L67 32 L52 46 L56 65 L40 56 L24 65 L28 46 L13 32 L32.5 30 Z"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
        strokeLinejoin="round"
      />
      <circle
        cx="40"
        cy="40"
        r="8"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <circle cx="40" cy="40" r="3" fill="var(--accent)" opacity="0.2" />
    </svg>
  ),
  brain: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="32"
        cy="36"
        rx="14"
        ry="18"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <ellipse
        cx="48"
        cy="36"
        rx="14"
        ry="18"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--accent)"
        fillOpacity="0.1"
      />
      <path d="M40 18 L40 62" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M28 28 Q34 34 28 42"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M52 28 Q46 34 52 42"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
      <circle
        cx="40"
        cy="12"
        r="4"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="var(--accent)"
        fillOpacity="0.15"
      />
      <line x1="38" y1="10" x2="42" y2="14" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
      <line x1="42" y1="10" x2="38" y2="14" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
};

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="hero-orbs card-glass rounded-2xl p-10 max-w-md mx-auto flex flex-col items-center gap-5">
        <div className="mb-1">{icons[icon]}</div>
        <h2 className="text-xl font-semibold font-serif text-[var(--text-primary)]">{title}</h2>
        <p className="text-sm text-[var(--muted)] max-w-xs">{description}</p>
        {action && (
          <Link
            to={action.href}
            className="btn-glass mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 transition-colors"
          >
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
