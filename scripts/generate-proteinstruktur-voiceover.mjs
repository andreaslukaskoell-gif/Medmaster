#!/usr/bin/env node
/**
 * generate-proteinstruktur-voiceover.mjs
 * TTS voice-over for ProteinstrukturExplainer reel.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const VIDEO_PUBLIC = resolve(ROOT, "video", "public");
const TMP_DIR = resolve(ROOT, ".tmp-protein-vo");
const MODEL_PATH = resolve(ROOT, "video", "tts-models", "de_DE-thorsten-medium.onnx");

const FPS = 30;

const SCRIPT = [
  { text: "H-Brücken stabilisieren die Tertiärstruktur.", pause: "short" },
  { text: "Falsch.", pause: "short" },
  { text: "Genau diese Falle kommt im MedAT. Und fast alle tappen rein.", pause: "dramatic" },
  { text: "Jede Ebene hat ihre eigene Stabilisierung. Vier Ebenen. Vier Regeln.", pause: "dramatic" },
  { text: "Primärstruktur. Das ist die Aminosäuresequenz, die Reihenfolge der Bausteine.", pause: "short" },
  { text: "Gehalten von Peptidbindungen. Kovalent. Unzerstörbar ohne Enzyme.", pause: "long" },
  { text: "Sekundärstruktur. Hier faltet sich das Rückgrat in regelmäßige Muster.", pause: "short" },
  { text: "Alpha-Helix und Beta-Faltblatt. Stabilisiert durch H-Brücken im Peptidrückgrat.", pause: "long" },
  { text: "Tertiärstruktur. Die gesamte dreidimensionale Form einer Polypeptidkette.", pause: "short" },
  { text: "Stabilisiert durch Seitenketten-Wechselwirkungen. Hydrophobe Kräfte, Ionenbindungen, und Disulfidbrücken.", pause: "long" },
  { text: "Quartärstruktur. Mehrere Ketten lagern sich zusammen.", pause: "short" },
  { text: "Bestes Beispiel: Hämoglobin, ein Tetramer aus vier Untereinheiten.", pause: "long" },
  { text: "Merke: Sequenz, Rückgrat, Seitenketten, Untereinheiten. In dieser Reihenfolge.", pause: "dramatic" },
  { text: "Speicher dir das. medmaster punkt at.", pause: "long" },
];

const PAUSE_DURATIONS = { short: 0.25, long: 0.55, dramatic: 0.80 };

console.log("Generating Proteinstruktur voice-over...\n");

if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true, force: true });
mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(VIDEO_PUBLIC, { recursive: true });

// Step 1: TTS
console.log("  [1/5] Generating TTS...");
const segmentFiles = [];
for (let i = 0; i < SCRIPT.length; i++) {
  const outWav = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-raw.wav`);
  generateTTS(SCRIPT[i].text, outWav);
  segmentFiles.push(outWav);
  process.stdout.write(`    ${i + 1}/${SCRIPT.length}\r`);
}
console.log(`    ${SCRIPT.length}/${SCRIPT.length} done`);

// Step 2: Normalize
console.log("  [2/5] Normalizing...");
const normalizedFiles = [];
for (let i = 0; i < segmentFiles.length; i++) {
  const outFile = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-norm.wav`);
  normalizeAudio(segmentFiles[i], outFile);
  normalizedFiles.push(outFile);
}

// Step 3: Measure
console.log("  [3/5] Measuring durations...");
const durations = normalizedFiles.map((f) => getAudioDuration(f));

// Step 4: Assemble
console.log("  [4/5] Assembling...");
const { assembledFile, subtitleTimings, totalDuration } = assembleAudio(normalizedFiles, durations);

// Step 5: Fade-out
console.log("  [5/5] Fade-out...");
const outputPath = resolve(VIDEO_PUBLIC, "proteinstruktur-voice-only.wav");
addFadeOut(assembledFile, outputPath, totalDuration);

rmSync(TMP_DIR, { recursive: true, force: true });

console.log(`\n  Done: video/public/proteinstruktur-voice-only.wav`);
console.log(`  Duration: ${totalDuration.toFixed(1)}s (${Math.round(totalDuration * FPS)} frames)`);
console.log(`\n  Subtitle timings:`);
for (const sub of subtitleTimings) {
  console.log(`    ${sub.startFrame}–${sub.endFrame}: "${sub.text.replace(/\n/g, "\\n")}"`);
}

// ── TTS ───────────────────────────────────────────────────────────────────────
function generateTTS(text, outputPath) {
  const escaped = text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
  const pythonCode = `
import wave, array
from piper import PiperVoice
from piper.config import SynthesisConfig
voice = PiperVoice.load('${MODEL_PATH}')
syn_config = SynthesisConfig(length_scale=1.22, noise_scale=0.3, noise_w_scale=0.3)
audio_data = bytearray()
sample_rate = None
for chunk in voice.synthesize('${escaped}', syn_config=syn_config):
    audio_data.extend(chunk.audio_int16_bytes)
    if sample_rate is None: sample_rate = chunk.sample_rate
if sample_rate is None: sample_rate = 22050
samples = array.array('h', bytes(audio_data))
scaled = array.array('h', [max(-32768, min(32767, int(s * 0.85))) for s in samples])
with wave.open('${outputPath}', 'w') as wf:
    wf.setnchannels(1); wf.setsampwidth(2); wf.setframerate(sample_rate); wf.writeframes(scaled.tobytes())
`;
  execFileSync("python3", ["-c", pythonCode], { cwd: ROOT, stdio: ["pipe", "pipe", "pipe"], timeout: 30000 });
}

function normalizeAudio(inputPath, outputPath) {
  let mI = "-16", mTP = "-3", mLRA = "7", mT = "-26";
  try {
    execFileSync("ffmpeg", ["-i", inputPath, "-af", "loudnorm=I=-16:TP=-3:LRA=7:print_format=json", "-f", "null", "/dev/null"], { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
  } catch (err) {
    const output = (err.stderr || "") + (err.stdout || "");
    const m = output.match(/\{[\s\S]*?"input_i"[\s\S]*?\}/);
    if (m) { try { const s = JSON.parse(m[0]); mI = s.input_i || mI; mTP = s.input_tp || mTP; mLRA = s.input_lra || mLRA; mT = s.input_thresh || mT; } catch {} }
  }
  execFileSync("ffmpeg", ["-y", "-i", inputPath, "-af", `loudnorm=I=-16:TP=-3:LRA=7:measured_I=${mI}:measured_TP=${mTP}:measured_LRA=${mLRA}:measured_thresh=${mT}:linear=true`, "-ar", "22050", "-ac", "1", outputPath], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}

function getAudioDuration(filePath) {
  return parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", filePath], { encoding: "utf-8", timeout: 5000 }).trim());
}

function assembleAudio(normalizedFiles, durations) {
  const timeline = [];
  let t = 0;
  for (let i = 0; i < normalizedFiles.length; i++) {
    timeline.push({ file: normalizedFiles[i], startTime: t, endTime: t + durations[i], duration: durations[i], text: SCRIPT[i].text, pauseAfter: PAUSE_DURATIONS[SCRIPT[i].pause] || 0.3 });
    t += durations[i] + (PAUSE_DURATIONS[SCRIPT[i].pause] || 0.3);
  }
  const totalDuration = t + 1.0;
  const inputs = []; const filterParts = [];
  for (let i = 0; i < timeline.length; i++) { inputs.push("-i", timeline[i].file); filterParts.push(`[${i}:a]aresample=22050[s${i}]`); }
  const concatParts = [];
  for (let i = 0; i < timeline.length; i++) {
    concatParts.push(`[s${i}]`);
    if (i < timeline.length - 1) { filterParts.push(`anullsrc=r=22050:cl=mono[sil${i}_raw]`, `[sil${i}_raw]atrim=0:${timeline[i].pauseAfter}[sil${i}]`); concatParts.push(`[sil${i}]`); }
  }
  filterParts.push(`anullsrc=r=22050:cl=mono[tail_raw]`, `[tail_raw]atrim=0:1.0[tail]`);
  concatParts.push(`[tail]`);
  filterParts.push(`${concatParts.join("")}concat=n=${concatParts.length}:v=0:a=1[out]`);
  const assembledFile = resolve(TMP_DIR, "assembled.wav");
  execFileSync("ffmpeg", ["-y", ...inputs, "-filter_complex", filterParts.join(";"), "-map", "[out]", "-ar", "22050", "-ac", "1", assembledFile], { stdio: ["pipe", "pipe", "pipe"], timeout: 60000 });
  const subtitleTimings = timeline.map((seg) => {
    const startFrame = Math.round(seg.startTime * FPS);
    const endFrame = Math.round(seg.endTime * FPS);
    let text = seg.text;
    if (text.length > 35) { const mid = Math.floor(text.length / 2); let bp = -1; for (let o = 0; o < 15; o++) { for (const c of [",", ".", ";", " "]) { if (mid + o < text.length && text[mid + o] === c) { bp = mid + o + (c === " " ? 0 : 1); break; } if (mid - o >= 0 && text[mid - o] === c) { bp = mid - o + (c === " " ? 0 : 1); break; } } if (bp >= 0) break; } if (bp > 0 && bp < text.length - 3) text = text.slice(0, bp).trim() + "\n" + text.slice(bp).trim(); }
    return { text, startFrame, endFrame };
  });
  return { assembledFile, subtitleTimings, totalDuration };
}

function addFadeOut(inputPath, outputPath, totalDuration) {
  execFileSync("ffmpeg", ["-y", "-i", inputPath, "-af", `afade=t=out:st=${Math.max(0, totalDuration - 1.5)}:d=1.0`, "-ar", "22050", "-ac", "1", outputPath], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}
