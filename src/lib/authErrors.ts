const ERROR_MAP: Record<string, string> = {
  "Invalid login credentials":
    "E-Mail oder Passwort ist falsch. Probier es nochmal oder nutze Google Login.",
  "Email not confirmed": "Deine E-Mail wurde noch nicht bestätigt. Versuche Google Login.",
  "User already registered":
    "Diese E-Mail ist bereits registriert. Melde dich an oder nutze Google Login.",
  "already been registered":
    "Diese E-Mail ist bereits registriert. Melde dich an oder nutze Google Login.",
  "Signup requires a valid password": "Bitte gib ein Passwort mit mindestens 8 Zeichen ein.",
  "Unable to validate email address: invalid format": "Bitte gib eine gültige E-Mail-Adresse ein.",
  "Email rate limit exceeded": "Zu viele Versuche. Warte ein paar Minuten und probier es nochmal.",
  "over_email_send_rate_limit": "Zu viele E-Mails gesendet. Bitte warte ein paar Minuten.",
  "For security purposes, you can only request this after":
    "Aus Sicherheitsgründen musst du kurz warten. Probier es in ein paar Sekunden nochmal.",
  "Auth session missing!": "Sitzung abgelaufen. Bitte melde dich erneut an.",
  "New password should be different from the old password.":
    "Das neue Passwort muss sich vom alten unterscheiden.",
  "Password should be at least 6 characters": "Passwort muss mindestens 8 Zeichen haben.",
  "Password should be at least 8 characters": "Passwort muss mindestens 8 Zeichen haben.",
  "Password should contain at least one character of each":
    "Passwort muss Groß- und Kleinbuchstaben sowie eine Zahl enthalten.",
  "weak_password": "Passwort ist zu schwach. Verwende mindestens 8 Zeichen mit Groß-/Kleinbuchstaben und Zahlen.",
  "User not found": "Kein Konto mit dieser E-Mail gefunden.",
  "Token has expired or is invalid": "Der Link ist abgelaufen. Bitte fordere einen neuen an.",
  "flow_state_not_found": "Der Link ist abgelaufen. Bitte fordere einen neuen an.",
  "otp_expired": "Der Anmeldelink ist abgelaufen. Bitte fordere einen neuen an.",
  "invalid_credentials": "E-Mail oder Passwort ist falsch.",
  "same_password": "Das neue Passwort muss sich vom alten unterscheiden.",
  "reauthentication_needed": "Bitte melde dich erneut an, bevor du dein Passwort ändern kannst.",
  signup_blocked:
    "Dieses Konto wurde auf Wunsch dauerhaft gelöscht und kann nicht erneut erstellt werden. Bei Fragen wende dich an support@medmaster.at.",
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
