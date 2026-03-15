#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const VIDEO_PUBLIC = resolve(ROOT, "video", "public");
const TMP_DIR = resolve(ROOT, ".tmp-immun-vo");
const MODEL_PATH = resolve(ROOT, "video", "tts-models", "de_DE-thorsten-medium.onnx");
const FPS = 30;

const SCRIPT = [
  { text: "NK-Zellen gehören zur erworbenen Immunität.", pause: "short" },
  { text: "Falsch.", pause: "short" },
  { text: "NK-Zellen sind angeboren. Und im MedAT kostet dich das Punkte.", pause: "dramatic" },
  { text: "Dein Immunsystem hat zwei Arme. Angeboren und erworben. Verschiedene Zellen, verschiedene Aufgaben.", pause: "dramatic" },
  { text: "Angeborene Abwehr. Sie reagiert sofort.", pause: "short" },
  { text: "Haut und Schleimhaut sind die erste Barriere.", pause: "short" },
  { text: "Makrophagen fressen Erreger und präsentieren Antigene.", pause: "long" },
  { text: "NK-Zellen töten Zellen, die kein MHC-eins mehr zeigen. Missing Self.", pause: "long" },
  { text: "Und das Komplementsystem markiert und zerstört Pathogene direkt.", pause: "long" },
  { text: "Erworbene Abwehr. Sie braucht Tage, ist aber hochspezifisch.", pause: "short" },
  { text: "T-Helferzellen koordinieren alles. Zytotoxische T-Zellen töten infizierte Zellen.", pause: "long" },
  { text: "B-Zellen werden zu Plasmazellen und produzieren Antikörper.", pause: "long" },
  { text: "Und Gedächtniszellen sorgen dafür, dass die zweite Antwort schneller kommt.", pause: "dramatic" },
  { text: "Merke: Angeboren ist schnell, ohne Gedächtnis. Erworben ist langsam, mit Gedächtnis.", pause: "dramatic" },
  { text: "Speicher dir das. medmaster punkt at.", pause: "long" },
];

const PAUSE_DURATIONS = { short: 0.25, long: 0.55, dramatic: 0.80 };

console.log("Generating Immunantwort voice-over...\n");
if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true, force: true });
mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(VIDEO_PUBLIC, { recursive: true });

console.log("  [1/5] TTS...");
const segFiles = [];
for (let i = 0; i < SCRIPT.length; i++) {
  const out = resolve(TMP_DIR, `seg-${String(i).padStart(3,"0")}-raw.wav`);
  generateTTS(SCRIPT[i].text, out);
  segFiles.push(out);
  process.stdout.write(`    ${i+1}/${SCRIPT.length}\r`);
}
console.log(`    ${SCRIPT.length}/${SCRIPT.length} done`);

console.log("  [2/5] Normalizing...");
const normFiles = [];
for (let i = 0; i < segFiles.length; i++) {
  const out = resolve(TMP_DIR, `seg-${String(i).padStart(3,"0")}-norm.wav`);
  normalizeAudio(segFiles[i], out);
  normFiles.push(out);
}

console.log("  [3/5] Measuring...");
const durations = normFiles.map(f => getAudioDuration(f));

console.log("  [4/5] Assembling...");
const { assembledFile, subtitleTimings, totalDuration } = assembleAudio(normFiles, durations);

console.log("  [5/5] Fade-out...");
const outputPath = resolve(VIDEO_PUBLIC, "immunantwort-voice-only.wav");
addFadeOut(assembledFile, outputPath, totalDuration);
rmSync(TMP_DIR, { recursive: true, force: true });

console.log(`\n  Done: video/public/immunantwort-voice-only.wav`);
console.log(`  Duration: ${totalDuration.toFixed(1)}s (${Math.round(totalDuration * FPS)} frames)`);
console.log(`\n  Subtitle timings:`);
for (const s of subtitleTimings) console.log(`    ${s.startFrame}–${s.endFrame}: "${s.text.replace(/\n/g,"\\n")}"`);

function generateTTS(text, outputPath) {
  const escaped = text.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n");
  execFileSync("python3", ["-c", `
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
`], { cwd: ROOT, stdio: ["pipe","pipe","pipe"], timeout: 30000 });
}

function normalizeAudio(inp, out) {
  let mI="-16",mTP="-3",mLRA="7",mT="-26";
  try { execFileSync("ffmpeg",["-i",inp,"-af","loudnorm=I=-16:TP=-3:LRA=7:print_format=json","-f","null","/dev/null"],{encoding:"utf-8",stdio:["pipe","pipe","pipe"],timeout:15000}); }
  catch(e) { const o=(e.stderr||"")+(e.stdout||""); const m=o.match(/\{[\s\S]*?"input_i"[\s\S]*?\}/); if(m){try{const s=JSON.parse(m[0]);mI=s.input_i||mI;mTP=s.input_tp||mTP;mLRA=s.input_lra||mLRA;mT=s.input_thresh||mT;}catch{}} }
  execFileSync("ffmpeg",["-y","-i",inp,"-af",`loudnorm=I=-16:TP=-3:LRA=7:measured_I=${mI}:measured_TP=${mTP}:measured_LRA=${mLRA}:measured_thresh=${mT}:linear=true`,"-ar","22050","-ac","1",out],{stdio:["pipe","pipe","pipe"],timeout:15000});
}

function getAudioDuration(f) { return parseFloat(execFileSync("ffprobe",["-v","error","-show_entries","format=duration","-of","csv=p=0",f],{encoding:"utf-8",timeout:5000}).trim()); }

function assembleAudio(normFiles, durations) {
  const timeline=[]; let t=0;
  for(let i=0;i<normFiles.length;i++){timeline.push({file:normFiles[i],startTime:t,endTime:t+durations[i],duration:durations[i],text:SCRIPT[i].text,pauseAfter:PAUSE_DURATIONS[SCRIPT[i].pause]||0.3});t+=durations[i]+(PAUSE_DURATIONS[SCRIPT[i].pause]||0.3);}
  const totalDuration=t+1.0;
  const inputs=[],filterParts=[];
  for(let i=0;i<timeline.length;i++){inputs.push("-i",timeline[i].file);filterParts.push(`[${i}:a]aresample=22050[s${i}]`);}
  const concatParts=[];
  for(let i=0;i<timeline.length;i++){concatParts.push(`[s${i}]`);if(i<timeline.length-1){filterParts.push(`anullsrc=r=22050:cl=mono[sil${i}_raw]`,`[sil${i}_raw]atrim=0:${timeline[i].pauseAfter}[sil${i}]`);concatParts.push(`[sil${i}]`);}}
  filterParts.push(`anullsrc=r=22050:cl=mono[tail_raw]`,`[tail_raw]atrim=0:1.0[tail]`);concatParts.push(`[tail]`);
  filterParts.push(`${concatParts.join("")}concat=n=${concatParts.length}:v=0:a=1[out]`);
  const assembledFile=resolve(TMP_DIR,"assembled.wav");
  execFileSync("ffmpeg",["-y",...inputs,"-filter_complex",filterParts.join(";"),"-map","[out]","-ar","22050","-ac","1",assembledFile],{stdio:["pipe","pipe","pipe"],timeout:60000});
  const subtitleTimings=timeline.map(seg=>{const sf=Math.round(seg.startTime*FPS),ef=Math.round(seg.endTime*FPS);let tx=seg.text;if(tx.length>35){const mid=Math.floor(tx.length/2);let bp=-1;for(let o=0;o<15;o++){for(const c of[","," "]){if(mid+o<tx.length&&tx[mid+o]===c){bp=mid+o+(c===" "?0:1);break;}if(mid-o>=0&&tx[mid-o]===c){bp=mid-o+(c===" "?0:1);break;}}if(bp>=0)break;}if(bp>0&&bp<tx.length-3)tx=tx.slice(0,bp).trim()+"\n"+tx.slice(bp).trim();}return{text:tx,startFrame:sf,endFrame:ef};});
  return{assembledFile,subtitleTimings,totalDuration};
}

function addFadeOut(inp, out, dur) { execFileSync("ffmpeg",["-y","-i",inp,"-af",`afade=t=out:st=${Math.max(0,dur-1.5)}:d=1.0`,"-ar","22050","-ac","1",out],{stdio:["pipe","pipe","pipe"],timeout:15000}); }
