#!/usr/bin/env npx tsx
/**
 * Security check script — catches unsafe patterns in the codebase.
 * Run: npx tsx scripts/security-check.mts
 *
 * Checks:
 * 1. innerHTML assignment without sanitizeHtml/DOMPurify
 * 2. Dangerous code execution patterns
 * 3. Hardcoded secrets patterns
 * 4. localStorage.clear() usage
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const SRC_DIR = join(import.meta.dirname ?? ".", "..", "src");

type Check = {
  name: string;
  test: (content: string, lines: string[]) => string[];
};

const CHECKS: Check[] = [
  {
    name: "innerHTML without sanitization",
    test: (_content: string, lines: string[]) => {
      const issues: string[] = [];
      for (let i = 0; i < lines.length; i++) {
        if (
          lines[i].includes("__html:") &&
          !lines[i].includes("sanitizeHtml") &&
          !lines[i].includes("DOMPurify")
        ) {
          issues.push(`  line ${i + 1}: ${lines[i].trim()}`);
        }
      }
      return issues;
    },
  },
  {
    name: "Dangerous code execution",
    test: (_content: string, lines: string[]) => {
      const issues: string[] = [];
      // NOTE: This check detects eval() and dynamic Function() constructor usage.
      // These are dangerous because they can execute arbitrary code — a major injection vector.
      // This script SEARCHES FOR these patterns to flag them; it does not use them.
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith("//") || line.trim().startsWith("*")) continue;
        // Check for eval( pattern
        if (/\beval\s*\(/.test(line)) {
          issues.push(`  line ${i + 1}: ${line.trim()}`);
        }
        // Check for new Function( pattern — dynamic code generation
        if (/\bnew\s+Function\s*\(/.test(line)) {
          issues.push(`  line ${i + 1}: ${line.trim()}`);
        }
      }
      return issues;
    },
  },
  {
    name: "localStorage.clear() (wipes all user data)",
    test: (_content: string, lines: string[]) => {
      const issues: string[] = [];
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("localStorage.clear()")) {
          issues.push(`  line ${i + 1}: ${lines[i].trim()}`);
        }
      }
      return issues;
    },
  },
  {
    name: "Potential hardcoded secrets",
    test: (_content: string, lines: string[]) => {
      const issues: string[] = [];
      const patterns = [
        /(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'][^"']{8,}/i,
        /sk[-_](?:live|test)_[a-zA-Z0-9]{10,}/,
        /whsec_[a-zA-Z0-9]{10,}/,
      ];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith("//") || line.trim().startsWith("*")) continue;
        if (line.includes("import.meta.env") || line.includes("process.env")) continue;
        if (line.includes("type ") || line.includes("interface ")) continue;
        for (const p of patterns) {
          if (p.test(line)) {
            issues.push(`  line ${i + 1}: ${line.trim().slice(0, 80)}`);
            break;
          }
        }
      }
      return issues;
    },
  },
];

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === "dist") continue;
      files.push(...walk(full));
    } else if ([".ts", ".tsx", ".js", ".jsx"].includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

let totalIssues = 0;
const files = walk(SRC_DIR);

for (const check of CHECKS) {
  const found: { file: string; issues: string[] }[] = [];
  for (const file of files) {
    const content = readFileSync(file, "utf-8");
    const lines = content.split("\n");
    const issues = check.test(content, lines);
    if (issues.length > 0) {
      found.push({ file: file.replace(SRC_DIR, "src"), issues });
    }
  }
  if (found.length > 0) {
    console.error(`\n❌ ${check.name}:`);
    for (const f of found) {
      console.error(`  ${f.file}`);
      for (const issue of f.issues) console.error(`    ${issue}`);
    }
    totalIssues += found.reduce((sum, f) => sum + f.issues.length, 0);
  }
}

if (totalIssues === 0) {
  console.log("✅ Security check passed — no unsafe patterns found.");
  process.exit(0);
} else {
  console.error(`\n⚠️  Found ${totalIssues} security issue(s). Fix before deploying.`);
  process.exit(1);
}
