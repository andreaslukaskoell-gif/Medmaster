const ERROR_MAP: Record<string, string> = {
  "Invalid login credentials":
    "E-Mail oder Passwort ist falsch. Probier es nochmal oder nutze Google Login.",
  "Email not confirmed": "Deine E-Mail wurde noch nicht bestätigt. Versuche Google Login.",
  "User already registered":
    "Diese E-Mail ist bereits registriert. Melde dich an oder nutze Google Login.",
  "Signup requires a valid password": "Bitte gib ein Passwort mit mindestens 6 Zeichen ein.",
  "Unable to validate email address: invalid format": "Bitte gib eine gültige E-Mail-Adresse ein.",
  "Email rate limit exceeded": "Zu viele Versuche. Warte ein paar Minuten und probier es nochmal.",
  "For security purposes, you can only request this after":
    "Aus Sicherheitsgründen musst du kurz warten. Probier es in ein paar Sekunden nochmal.",
  "Auth session missing!": "Sitzung abgelaufen. Bitte melde dich erneut an.",
  "New password should be different from the old password.":
    "Das neue Passwort muss sich vom alten unterscheiden.",
  "Password should be at least 6 characters": "Passwort muss mindestens 6 Zeichen haben.",
};

export function translateAuthError(message: string): string {
  // Exact match
  if (ERROR_MAP[message]) return ERROR_MAP[message];

  // Partial match (some Supabase errors have dynamic suffixes)
  for (const [key, value] of Object.entries(ERROR_MAP)) {
    if (message.includes(key)) return value;
  }

  // Fallback: generic message to avoid leaking Supabase internals
  if (import.meta.env.DEV) return message;
  return "Ein Fehler ist aufgetreten. Bitte versuche es erneut.";
}
