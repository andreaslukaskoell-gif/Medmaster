#!/usr/bin/env node
/**
 * generate-blutgruppen-voiceover.mjs
 *
 * Generates TTS voice-over for BlutgruppenExplainer reel.
 * Pipeline: TTS (piper) → normalize (ffmpeg) → assemble with pauses → fade-out
 * Output: video/public/blutgruppen-voice-only.wav
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const VIDEO_PUBLIC = resolve(ROOT, "video", "public");
const TMP_DIR = resolve(ROOT, ".tmp-blutgruppen-vo");
const MODEL_PATH = resolve(ROOT, "video", "tts-models", "de_DE-thorsten-medium.onnx");

const FPS = 30;

// Script segments with pause types
// Matches the storyboard timing from BlutgruppenExplainer.tsx
const SCRIPT = [
  { text: "Blutgruppe A hat Anti-A-Antikörper.", pause: "short" },
  { text: "Falsch.", pause: "short" },
  { text: "Und genau das kreuzen die meisten im MedAT an.", pause: "dramatic" },
  { text: "Die Regel ist simpel: Du hast immer Antikörper gegen das, was du nicht hast.", pause: "dramatic" },
  { text: "Blutgruppe A hat das A-Antigen auf den Erythrozyten.", pause: "short" },
  { text: "Und Anti-B im Plasma.", pause: "long" },
  { text: "Blutgruppe B hat das B-Antigen, und Anti-A im Plasma.", pause: "long" },
  { text: "AB hat beide Antigene, und gar keine Antikörper.", pause: "short" },
  { text: "Deshalb ist AB der Universalempfänger.", pause: "long" },
  { text: "Und Blutgruppe Null?", pause: "short" },
  { text: "Keine Antigene. Aber Anti-A und Anti-B im Plasma.", pause: "short" },
  { text: "Null kann an alle spenden. Universalspender.", pause: "dramatic" },
  { text: "Merke: Antigen auf der Zelle, Antikörper im Plasma, immer gegeneinander.", pause: "long" },
  { text: "Speicher dir das. medmaster punkt at.", pause: "long" },
];

const PAUSE_DURATIONS = {
  short: 0.25,
  long: 0.55,
  dramatic: 0.80,
};

// ── Main ──────────────────────────────────────────────────────────────────────
console.log("Generating Blutgruppen voice-over...\n");

// Clean up tmp
if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true, force: true });
mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(VIDEO_PUBLIC, { recursive: true });

// Step 1: Generate TTS per sentence
console.log("  [1/5] Generating TTS per sentence...");
const segmentFiles = [];
for (let i = 0; i < SCRIPT.length; i++) {
  const outWav = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-raw.wav`);
  generateTTS(SCRIPT[i].text, outWav);
  segmentFiles.push(outWav);
  process.stdout.write(`    ${i + 1}/${SCRIPT.length} done\r`);
}
console.log(`    ${SCRIPT.length}/${SCRIPT.length} done`);

// Step 2: Normalize each segment
console.log("  [2/5] Normalizing audio segments...");
const normalizedFiles = [];
for (let i = 0; i < segmentFiles.length; i++) {
  const outFile = resolve(TMP_DIR, `seg-${String(i).padStart(3, "0")}-norm.wav`);
  normalizeAudio(segmentFiles[i], outFile);
  normalizedFiles.push(outFile);
}

// Step 3: Measure durations
console.log("  [3/5] Measuring segment durations...");
const durations = normalizedFiles.map((f) => getAudioDuration(f));

// Step 4: Assemble with pauses
console.log("  [4/5] Assembling audio with strategic pauses...");
const { assembledFile, subtitleTimings, totalDuration } = assembleAudio(normalizedFiles, durations);

// Step 5: Fade-out and final output
console.log("  [5/5] Adding fade-out...");
const outputPath = resolve(VIDEO_PUBLIC, "blutgruppen-voice-only.wav");
addFadeOut(assembledFile, outputPath, totalDuration);

// Cleanup
rmSync(TMP_DIR, { recursive: true, force: true });

// Print results
console.log(`\n  Done: video/public/blutgruppen-voice-only.wav`);
console.log(`  Duration: ${totalDuration.toFixed(1)}s (${Math.round(totalDuration * FPS)} frames)`);
console.log(`\n  Subtitle timings (for Root.tsx):`);
for (const sub of subtitleTimings) {
  console.log(`    ${sub.startFrame}–${sub.endFrame}: "${sub.text.replace(/\n/g, "\\n")}"`);
}

// ── TTS via piper ─────────────────────────────────────────────────────────────
function generateTTS(text, outputPath) {
  const escaped = text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");

  const pythonCode = `
import wave, array
from piper import PiperVoice
from piper.config import SynthesisConfig

model_path = '${MODEL_PATH}'
voice = PiperVoice.load(model_path)

syn_config = SynthesisConfig(
    length_scale=1.22,
    noise_scale=0.3,
    noise_w_scale=0.3
)

text = '${escaped}'
audio_data = bytearray()
sample_rate = None

for chunk in voice.synthesize(text, syn_config=syn_config):
    audio_data.extend(chunk.audio_int16_bytes)
    if sample_rate is None:
        sample_rate = chunk.sample_rate

if sample_rate is None:
    sample_rate = 22050

# Apply volume scaling (0.85)
samples = array.array('h', bytes(audio_data))
scaled = array.array('h', [max(-32768, min(32767, int(s * 0.85))) for s in samples])

with wave.open('${outputPath}', 'w') as wf:
    wf.setnchannels(1)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    wf.writeframes(scaled.tobytes())
`;

  execFileSync("python3", ["-c", pythonCode], {
    cwd: ROOT,
    stdio: ["pipe", "pipe", "pipe"],
    timeout: 30000,
  });
}

// ── Audio normalization (two-pass loudnorm) ───────────────────────────────────
function normalizeAudio(inputPath, outputPath) {
  let measured_I = "-16", measured_TP = "-3", measured_LRA = "7", measured_thresh = "-26";

  try {
    execFileSync("ffmpeg", [
      "-i", inputPath,
      "-af", "loudnorm=I=-16:TP=-3:LRA=7:print_format=json",
      "-f", "null", "/dev/null",
    ], { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
  } catch (err) {
    const output = (err.stderr || "") + (err.stdout || "");
    const jsonMatch = output.match(/\{[\s\S]*?"input_i"[\s\S]*?\}/);
    if (jsonMatch) {
      try {
        const stats = JSON.parse(jsonMatch[0]);
        measured_I = stats.input_i || measured_I;
        measured_TP = stats.input_tp || measured_TP;
        measured_LRA = stats.input_lra || measured_LRA;
        measured_thresh = stats.input_thresh || measured_thresh;
      } catch { /* defaults */ }
    }
  }

  execFileSync("ffmpeg", [
    "-y", "-i", inputPath,
    "-af",
    `loudnorm=I=-16:TP=-3:LRA=7:measured_I=${measured_I}:measured_TP=${measured_TP}:measured_LRA=${measured_LRA}:measured_thresh=${measured_thresh}:linear=true`,
    "-ar", "22050", "-ac", "1",
    outputPath,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}

// ── Get audio duration ────────────────────────────────────────────────────────
function getAudioDuration(filePath) {
  const result = execFileSync("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "csv=p=0",
    filePath,
  ], { encoding: "utf-8", timeout: 5000 });
  return parseFloat(result.trim());
}

// ── Assemble segments with pauses ─────────────────────────────────────────────
function assembleAudio(normalizedFiles, durations) {
  const timeline = [];
  let currentTime = 0;

  for (let i = 0; i < normalizedFiles.length; i++) {
    const startTime = currentTime;
    const endTime = startTime + durations[i];
    const pauseDuration = PAUSE_DURATIONS[SCRIPT[i].pause] || 0.3;

    timeline.push({
      file: normalizedFiles[i],
      startTime,
      endTime,
      duration: durations[i],
      text: SCRIPT[i].text,
      pauseAfter: pauseDuration,
    });

    currentTime = endTime + pauseDuration;
  }

  const totalDuration = currentTime + 1.0; // +1s for fade-out tail

  // Build ffmpeg filter
  const inputs = [];
  const filterParts = [];

  for (let i = 0; i < timeline.length; i++) {
    inputs.push("-i", timeline[i].file);
    filterParts.push(`[${i}:a]aresample=22050[s${i}]`);
  }

  const concatParts = [];
  for (let i = 0; i < timeline.length; i++) {
    concatParts.push(`[s${i}]`);
    if (i < timeline.length - 1) {
      const silLabel = `sil${i}`;
      filterParts.push(
        `anullsrc=r=22050:cl=mono[${silLabel}_raw]`,
        `[${silLabel}_raw]atrim=0:${timeline[i].pauseAfter}[${silLabel}]`
      );
      concatParts.push(`[${silLabel}]`);
    }
  }

  // Tail silence for fade
  filterParts.push(
    `anullsrc=r=22050:cl=mono[tail_raw]`,
    `[tail_raw]atrim=0:1.0[tail]`
  );
  concatParts.push(`[tail]`);

  const nSegments = concatParts.length;
  filterParts.push(`${concatParts.join("")}concat=n=${nSegments}:v=0:a=1[out]`);

  const assembledFile = resolve(TMP_DIR, "assembled.wav");

  execFileSync("ffmpeg", [
    "-y",
    ...inputs,
    "-filter_complex", filterParts.join(";"),
    "-map", "[out]",
    "-ar", "22050", "-ac", "1",
    assembledFile,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 60000 });

  // Build subtitle timings
  const subtitleTimings = timeline.map((seg) => {
    const startFrame = Math.round(seg.startTime * FPS);
    const endFrame = Math.round(seg.endTime * FPS);
    return { text: formatSubtitle(seg.text), startFrame, endFrame };
  });

  return { assembledFile, subtitleTimings, totalDuration };
}

// ── Format subtitle (line break for long text) ───────────────────────────────
function formatSubtitle(text) {
  if (text.length <= 35) return text;
  const mid = Math.floor(text.length / 2);
  let bp = -1;
  for (let off = 0; off < 15; off++) {
    for (const c of [",", ".", ";", ":", " "]) {
      if (mid + off < text.length && text[mid + off] === c) { bp = mid + off + (c === " " ? 0 : 1); break; }
      if (mid - off >= 0 && text[mid - off] === c) { bp = mid - off + (c === " " ? 0 : 1); break; }
    }
    if (bp >= 0) break;
  }
  if (bp > 0 && bp < text.length - 3) {
    return text.slice(0, bp).trim() + "\n" + text.slice(bp).trim();
  }
  return text;
}

// ── Add fade-out ──────────────────────────────────────────────────────────────
function addFadeOut(inputPath, outputPath, totalDuration) {
  const fadeStart = Math.max(0, totalDuration - 1.5);
  execFileSync("ffmpeg", [
    "-y", "-i", inputPath,
    "-af", `afade=t=out:st=${fadeStart}:d=1.0`,
    "-ar", "22050", "-ac", "1",
    outputPath,
  ], { stdio: ["pipe", "pipe", "pipe"], timeout: 15000 });
}
