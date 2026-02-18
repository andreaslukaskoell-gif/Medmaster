/**
 * Motivierende Botschaften und MedAT-Fun-Facts für Random Rewards
 * (z. B. alle ~10 richtige Antworten oder 10 % Chance)
 */

export type RewardType = "motivation" | "funfact";

export interface SurpriseMessage {
  text: string;
  type: RewardType;
}

export const MEDAT_SURPRISE_MESSAGES: SurpriseMessage[] = [
  // Motivation
  { type: "motivation", text: "Weiter so – jede Frage bringt dich dem MedAT näher!" },
  { type: "motivation", text: "Genau so! Dein Gehirn verknüpft gerade Wissen." },
  { type: "motivation", text: "Stark. Regelmäßiges Üben schlägt Kurzzeit-Büffeln." },
  { type: "motivation", text: "Richtig. Du baust dir gerade einen Wissensvorsprung auf." },
  { type: "motivation", text: "Super – so sieht Lernfortschritt aus." },
  { type: "motivation", text: "Sehr gut. Kleine Schritte führen ans Ziel." },
  { type: "motivation", text: "Genau die richtige Richtung. Weiter so!" },
  { type: "motivation", text: "Top! Jede richtige Antwort zählt im BMS." },
  { type: "motivation", text: "Perfekt getroffen. So bleibt es im Gedächtnis." },
  { type: "motivation", text: "Richtig. Du wirst mit jeder Session besser." },
  // MedAT-Fun-Facts
  { type: "funfact", text: "MedAT-Fakt: Der BMS-Teil macht etwa 40 % der Gesamtpunktzahl aus." },
  { type: "funfact", text: "MedAT-Fakt: Biologie hat die meisten Fragen – lohnt sich besonders." },
  { type: "funfact", text: "MedAT-Fakt: In Österreich gibt es vier Medizin-Unis mit eigenem Aufnahmetest." },
  { type: "funfact", text: "MedAT-Fakt: Der Test findet einmal jährlich statt – meist im Juli." },
  { type: "funfact", text: "MedAT-Fakt: KFF (kognitive Fähigkeiten) und BMS werden an einem Tag geprüft." },
  { type: "funfact", text: "MedAT-Fakt: Gute Vorbereitung über Monate schlägt Kurz-Crash-Kurse." },
  { type: "funfact", text: "MedAT-Fakt: Viele Bewerber unterschätzen Chemie und Physik – du nicht." },
  { type: "funfact", text: "MedAT-Fakt: Textverständnis und Implikationen trainieren lohnt sich doppelt." },
  { type: "funfact", text: "MedAT-Fakt: Ein konstanter Lernrhythmus hilft mehr als Mega-Sessions." },
  { type: "funfact", text: "MedAT-Fakt: Wer 50 % eines Fachs sicher beherrscht, liegt oft vor vielen anderen." },
];

const messages = MEDAT_SURPRISE_MESSAGES;

export function getRandomSurpriseMessage(): SurpriseMessage {
  return messages[Math.floor(Math.random() * messages.length)];
}

export function getRandomSurpriseMessageByType(type: RewardType): SurpriseMessage {
  const filtered = messages.filter((m) => m.type === type);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
