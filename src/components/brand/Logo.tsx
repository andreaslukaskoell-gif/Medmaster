/**
 * MedMaster Logo Component
 *
 * Variants:
 * - "icon"     → M monogram only (square)
 * - "full"     → Icon + "MedMaster" wordmark
 * - "wordmark" → Text only, no icon
 */

type LogoVariant = "icon" | "full" | "wordmark";

type LogoProps = {
  variant?: LogoVariant;
  size?: number;
  className?: string;
};

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#1b3ea7" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="64" height="64" rx="14" fill="url(#logo-bg)" />
      <rect width="64" height="32" rx="14" fill="white" opacity="0.06" />

      {/* M letterform */}
      <path
        d="M16 50 L16 18 L25 18 L32 31 L39 18 L48 18 L48 50 L41 50 L41 30 L34 43 L30 43 L23 30 L23 50 Z"
        fill="white"
      />

      {/* Medical cross accent */}
      <g transform="translate(46.5, 14)">
        <rect x="-1.5" y="-5" width="3" height="10" rx="1" fill="#60a5fa" />
        <rect x="-5" y="-1.5" width="10" height="3" rx="1" fill="#60a5fa" />
      </g>
    </svg>
  );
}

export function Logo({ variant = "full", size = 32, className }: LogoProps) {
  if (variant === "icon") {
    return (
      <span className={className} role="img" aria-label="MedMaster">
        <LogoIcon size={size} />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span
        className={`font-extrabold tracking-tight ${className ?? ""}`}
        style={{ fontSize: size * 0.85 }}
        aria-label="MedMaster"
      >
        <span className="text-[var(--text-primary)]">Med</span>
        <span style={{ color: "#1b3ea7" }}>Master</span>
      </span>
    );
  }

  // "full" — icon + wordmark
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`} aria-label="MedMaster">
      <LogoIcon size={size} />
      <span
        className="font-extrabold tracking-tight text-[var(--text-primary)]"
        style={{ fontSize: size * 0.85 }}
      >
        Med<span style={{ color: "#1b3ea7" }}>Master</span>
      </span>
    </span>
  );
}
