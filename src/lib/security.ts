/**
 * Security utilities — input validation, output sanitization, URL safety.
 *
 * All HTML rendered via React's innerHTML-equivalent should pass through
 * `sanitizeHtml()` even when the source is developer-controlled content,
 * as a defense-in-depth measure.
 */
import DOMPurify from "dompurify";

// ── HTML Sanitization ──

/** Sanitize HTML for safe rendering. Allows common formatting tags only. */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      "b",
      "strong",
      "i",
      "em",
      "u",
      "br",
      "p",
      "ul",
      "ol",
      "li",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "mark",
      "sub",
      "sup",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "a",
      "span",
      "div",
      "img",
      "code",
      "pre",
      "blockquote",
      "hr",
    ],
    ALLOWED_ATTR: ["class", "href", "src", "alt", "target", "rel", "width", "height"],
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ["target"],
    FORBID_ATTR: ["style", "onerror", "onload", "onclick"],
  });
}

/** Lightweight: strip ALL HTML, return plain text. */
export function stripHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

// ── Input Validation ──

const MAX_PARAM_LENGTH = 128;
const SAFE_PARAM_RE = /^[\w\-.:@+/=% ]{1,128}$/;

/** Validate and sanitize a URL query parameter (ref, UTM, etc.). */
export function sanitizeUrlParam(value: string | null): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_PARAM_LENGTH) return null;
  if (!SAFE_PARAM_RE.test(trimmed)) return null;
  return trimmed;
}

// ── URL Safety ──

const ALLOWED_REDIRECT_DOMAINS = ["buy.stripe.com", "checkout.stripe.com"];

/**
 * Validate an external redirect URL against a domain allowlist.
 * Returns the URL string if safe, null otherwise.
 */
export function validateRedirectUrl(
  urlString: string,
  allowedDomains: string[] = ALLOWED_REDIRECT_DOMAINS
): string | null {
  try {
    const url = new URL(urlString);
    if (url.protocol !== "https:") return null;
    if (!allowedDomains.some((d) => url.hostname === d || url.hostname.endsWith(`.${d}`))) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Ensure a redirect stays on the same origin (internal navigation).
 * Blocks javascript:, data:, and external URLs.
 */
export function isSafeInternalPath(path: string): boolean {
  if (!path) return false;
  if (!path.startsWith("/") || path.startsWith("//")) return false;
  const lower = path.toLowerCase();
  if (
    lower.startsWith("javascript:") ||
    lower.startsWith("data:") ||
    lower.startsWith("vbscript:")
  ) {
    return false;
  }
  // Block path traversal attempts
  if (path.includes("..")) return false;
  return true;
}

// ── Safe JSON parsing ──

/**
 * Parse JSON safely with a max-length guard to prevent oversized payloads
 * from causing memory issues. Returns null on failure.
 */
export function safeJsonParse<T = unknown>(
  raw: string,
  maxLength = 1_000_000
): T | null {
  if (!raw || raw.length > maxLength) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

// ── Timing-safe comparison (for non-crypto use in client) ──

/** Constant-time string comparison to mitigate timing attacks on token checks. */
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
