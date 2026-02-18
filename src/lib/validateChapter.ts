
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function logContentError(path: string, message: string, value?: unknown) {
  console.error("[Content-Schema]", path, "—", message, value !== undefined ? "→" : "", value);
}

/**
 * Prüft ein Unterkapitel auf Pflichtfelder und Struktur.
 * Loggt jeden Fehler in die Konsole (F12), damit du sofort siehst, wo im JSON der Fehler liegt.
 */
export function validateUnterkapitel(uk: unknown, pathPrefix = "Unterkapitel"): ValidationResult {
  const errors: string[] = [];

  if (uk == null || typeof uk !== "object") {
    logContentError(pathPrefix, "muss ein Objekt sein", uk);
    return { valid: false, errors: [`${pathPrefix}: muss ein Objekt sein`] };
  }

  const o = uk as Record<string, unknown>;

  if (typeof o.id !== "string" || o.id.trim() === "") {
    errors.push(`${pathPrefix}.id: Pflichtfeld, nicht leerer String`);
    logContentError(`${pathPrefix}.id`, "Pflichtfeld (string, nicht leer)", o.id);
  }

  if (typeof o.title !== "string" || o.title.trim() === "") {
    errors.push(`${pathPrefix}.title: Pflichtfeld, nicht leerer String`);
    logContentError(`${pathPrefix}.title`, "Pflichtfeld (string, nicht leer)", o.title);
  }

  if (o.content !== undefined && typeof o.content !== "string") {
    errors.push(`${pathPrefix}.content: muss string sein`);
    logContentError(`${pathPrefix}.content`, "muss string sein", o.content);
  }

  if (!Array.isArray(o.merksätze)) {
    errors.push(`${pathPrefix}.merksätze: Pflichtfeld, muss Array sein`);
    logContentError(`${pathPrefix}.merksätze`, "Pflichtfeld (array)", o.merksätze);
  }

  if (o.selfTest !== undefined && !Array.isArray(o.selfTest)) {
    errors.push(`${pathPrefix}.selfTest: muss Array sein`);
    logContentError(`${pathPrefix}.selfTest`, "muss Array sein", o.selfTest);
  }

  if (o.sections !== undefined && o.sections !== null) {
    if (!Array.isArray(o.sections)) {
      errors.push(`${pathPrefix}.sections: muss Array sein, wenn gesetzt`);
      logContentError(`${pathPrefix}.sections`, "muss Array sein", o.sections);
    } else {
      (o.sections as unknown[]).forEach((section, i) => {
        const sectionPath = `${pathPrefix}.sections[${i}]`;
        if (section == null || typeof section !== "object") {
          errors.push(`${sectionPath}: muss Objekt mit heading und text sein`);
          logContentError(sectionPath, "muss Objekt sein", section);
        } else {
          const s = section as Record<string, unknown>;
          if (typeof s.heading !== "string") {
            errors.push(`${sectionPath}.heading: Pflichtfeld (string)`);
            logContentError(`${sectionPath}.heading`, "Pflichtfeld (string)", s.heading);
          }
          if (typeof s.text !== "string") {
            errors.push(`${sectionPath}.text: Pflichtfeld (string)`);
            logContentError(`${sectionPath}.text`, "Pflichtfeld (string)", s.text);
          }
        }
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Prüft ein Kapitel auf Pflichtfelder (id, title, unterkapitel).
 * Loggt jeden Fehler in die Konsole.
 */
export function validateKapitel(kapitel: unknown, pathPrefix = "Kapitel"): ValidationResult {
  const errors: string[] = [];

  if (kapitel == null || typeof kapitel !== "object") {
    logContentError(pathPrefix, "muss ein Objekt sein", kapitel);
    return { valid: false, errors: [`${pathPrefix}: muss ein Objekt sein`] };
  }

  const k = kapitel as Record<string, unknown>;

  if (typeof k.id !== "string" || k.id.trim() === "") {
    errors.push(`${pathPrefix}.id: Pflichtfeld, nicht leerer String`);
    logContentError(`${pathPrefix}.id`, "Pflichtfeld (string, nicht leer)", k.id);
  }

  if (typeof k.title !== "string" || k.title.trim() === "") {
    errors.push(`${pathPrefix}.title: Pflichtfeld, nicht leerer String`);
    logContentError(`${pathPrefix}.title`, "Pflichtfeld (string, nicht leer)", k.title);
  }

  if (!Array.isArray(k.unterkapitel)) {
    errors.push(`${pathPrefix}.unterkapitel: Pflichtfeld, muss Array sein`);
    logContentError(`${pathPrefix}.unterkapitel`, "Pflichtfeld (array)", k.unterkapitel);
  } else {
    (k.unterkapitel as unknown[]).forEach((uk, i) => {
      const res = validateUnterkapitel(uk, `${pathPrefix}.unterkapitel[${i}]`);
      if (!res.valid) errors.push(...res.errors);
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
