/**
 * Kurze Sounds per Web Audio API (keine externen Dateien).
 * – Klick bei richtiger Antwort
 * – Level-Up Fanfare
 */

let audioContext: AudioContext | null = null;

function getContext(): AudioContext {
  if (!audioContext) audioContext = new AudioContext();
  return audioContext;
}

/**
 * Kurzer, befriedigender Klick bei richtiger Antwort.
 */
export function playCorrectAnswerSound(): void {
  try {
    const ctx = getContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.05);
    osc.type = "sine";
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch {
    // ignore
  }
}

/**
 * Kurze Level-Up Fanfare (zwei Töne, positiv).
 */
export function playLevelUpSound(): void {
  try {
    const ctx = getContext();
    const now = ctx.currentTime;
    const playTone = (freq: number, start: number, duration: number, gainVal: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(freq, start);
      osc.type = "sine";
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(gainVal, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.start(start);
      osc.stop(start + duration);
    };
    playTone(523.25, now, 0.15, 0.2);
    playTone(659.25, now + 0.1, 0.2, 0.22);
    playTone(783.99, now + 0.22, 0.25, 0.18);
  } catch {
    // ignore
  }
}
