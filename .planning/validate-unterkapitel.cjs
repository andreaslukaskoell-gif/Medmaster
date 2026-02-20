#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PLANNING_DIR = path.join(__dirname);

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
};

// Results structure
const results = {
  total_uks: 0,
  valid_uks: 0,
  errors: [],
  stats: {
    total_questions: 0,
    total_merksaetze: 0,
    files_with_json_errors: 0,
    files_with_missing_pairs: 0,
  }
};

// Helper to add error
function addError(file, type, severity, message) {
  results.errors.push({ file, type, severity, message });
}

// Get all Bio_Kap*.md files
function getAllMarkdownFiles() {
  return fs.readdirSync(PLANNING_DIR)
    .filter(f => f.startsWith('Bio_Kap') && f.endsWith('.md'))
    .sort();
}

// Validate markdown content
function validateMarkdown(filepath) {
  const filename = path.basename(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');

  // Count MerksatzBox
  const merksatzMatches = content.match(/<MerksatzBox/g);
  const merksatzCount = merksatzMatches ? merksatzMatches.length : 0;
  results.stats.total_merksaetze += merksatzCount;

  if (merksatzCount < 4) {
    addError(filename, 'content_quality', 'warning',
      `Only ${merksatzCount} MerksatzBox found (minimum 4 expected)`);
  }

  // Check for required sections
  const requiredSections = ['EINLEITUNG', 'KERNINHALT', 'ZUSAMMENFASSUNG', 'PRAXISBEZUG'];
  const missingSections = requiredSections.filter(section => !content.includes(section));

  if (missingSections.length > 0) {
    addError(filename, 'content_structure', 'warning',
      `Missing sections: ${missingSections.join(', ')}`);
  }

  // Check for Stichwortliste
  if (!content.includes('Stichwortliste')) {
    addError(filename, 'content_structure', 'warning',
      'Missing Stichwortliste section');
  }

  // Word count check
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 500) {
    addError(filename, 'content_quality', 'warning',
      `Content too thin (${wordCount} words, minimum 500 recommended)`);
  } else if (wordCount > 3000) {
    addError(filename, 'content_quality', 'info',
      `Content verbose (${wordCount} words, maximum 3000 recommended)`);
  }

  return { merksatzCount, wordCount };
}

// Validate questions JSON
function validateQuestionsJson(filepath) {
  const filename = path.basename(filepath);

  // Check if file exists
  if (!fs.existsSync(filepath)) {
    addError(filename, 'missing_file', 'blocker',
      'Questions JSON file missing');
    return null;
  }

  let data;
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    data = JSON.parse(content);
  } catch (err) {
    addError(filename, 'format_violation', 'blocker',
      `Invalid JSON: ${err.message}`);
    results.stats.files_with_json_errors++;
    return null;
  }

  if (!Array.isArray(data)) {
    addError(filename, 'format_violation', 'blocker',
      'Questions JSON must be an array');
    return null;
  }

  const questionIds = new Set();

  data.forEach((q, idx) => {
    const qNum = idx + 1;

    // Check for required fields
    if (!q.id) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: missing 'id' field`);
    } else {
      // Check for duplicate IDs
      if (questionIds.has(q.id)) {
        addError(filename, 'format_violation', 'blocker',
          `Question ${qNum}: duplicate ID '${q.id}'`);
      }
      questionIds.add(q.id);
    }

    if (!q.question) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: missing 'question' field`);
    }

    // Check options (must be exactly 5: A-E)
    if (!q.options || !Array.isArray(q.options)) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: missing or invalid 'options' field`);
    } else if (q.options.length !== 5) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: has ${q.options.length} options (expected 5: A-E)`);
    } else {
      // Verify option IDs are A, B, C, D, E
      const optionIds = q.options.map(opt => opt.id);
      const expectedIds = ['A', 'B', 'C', 'D', 'E'];
      if (JSON.stringify(optionIds) !== JSON.stringify(expectedIds)) {
        addError(filename, 'format_violation', 'blocker',
          `Question ${qNum}: option IDs must be exactly ['A','B','C','D','E'], got [${optionIds.join(',')}]`);
      }
    }

    // Check correct answer
    if (!q.correct) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: missing 'correct' field`);
    } else if (!['A', 'B', 'C', 'D', 'E'].includes(q.correct)) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: 'correct' must be A-E, got '${q.correct}'`);
    }

    // Check explanation
    if (!q.explanation) {
      addError(filename, 'format_violation', 'blocker',
        `Question ${qNum}: missing 'explanation' field`);
    } else if (q.explanation.length < 20) {
      addError(filename, 'format_violation', 'warning',
        `Question ${qNum}: explanation too short (${q.explanation.length} chars, minimum 20)`);
    }

    // Check difficulty
    if (!q.difficulty) {
      addError(filename, 'format_violation', 'warning',
        `Question ${qNum}: missing 'difficulty' field`);
    } else if (!['easy', 'medium', 'hard'].includes(q.difficulty)) {
      addError(filename, 'format_violation', 'warning',
        `Question ${qNum}: difficulty must be easy|medium|hard, got '${q.difficulty}'`);
    }
  });

  results.stats.total_questions += data.length;

  // Check question count per UK
  if (data.length < 3) {
    addError(filename, 'content_quality', 'warning',
      `Only ${data.length} questions (minimum 3 recommended)`);
  } else if (data.length > 8) {
    addError(filename, 'content_quality', 'info',
      `${data.length} questions (maximum 8 recommended)`);
  }

  return { questionCount: data.length };
}

// Main validation logic
function validateAllFiles() {
  console.log(`${colors.blue}=== Pre-Migration Content Validation ===${colors.reset}\n`);

  const mdFiles = getAllMarkdownFiles();
  results.total_uks = mdFiles.length;

  console.log(`Found ${mdFiles.length} Unterkapitel markdown files\n`);

  mdFiles.forEach(mdFile => {
    const mdPath = path.join(PLANNING_DIR, mdFile);

    // Derive expected JSON filename
    // Bio_Kap1_UK01_Lebende_Systeme.md -> Bio_Kap1_UK01_questions.json
    const match = mdFile.match(/^(Bio_Kap\d+_UK\d+)_.*\.md$/);
    if (!match) {
      addError(mdFile, 'naming_convention', 'warning',
        'Filename does not match expected pattern Bio_KapN_UKNN_Name.md');
      return;
    }

    const baseFilename = match[1];
    const jsonFile = `${baseFilename}_questions.json`;
    const jsonPath = path.join(PLANNING_DIR, jsonFile);

    // Validate markdown
    const mdStats = validateMarkdown(mdPath);

    // Validate JSON
    const jsonStats = validateQuestionsJson(jsonPath);

    // Count as valid if no blocker errors for this UK
    const ukErrors = results.errors.filter(e =>
      (e.file === mdFile || e.file === jsonFile) && e.severity === 'blocker'
    );
    if (ukErrors.length === 0) {
      results.valid_uks++;
    }
  });

  // Print summary
  console.log(`\n${colors.blue}=== Validation Summary ===${colors.reset}\n`);
  console.log(`Total UKs: ${results.total_uks}`);
  console.log(`Valid UKs: ${colors.green}${results.valid_uks}${colors.reset}`);
  console.log(`Total Questions: ${results.stats.total_questions}`);
  console.log(`Total MerksatzBox: ${results.stats.total_merksaetze}`);
  console.log(`Avg MerksatzBox/UK: ${(results.stats.total_merksaetze / results.total_uks).toFixed(1)}\n`);

  // Group errors by severity
  const blockers = results.errors.filter(e => e.severity === 'blocker');
  const warnings = results.errors.filter(e => e.severity === 'warning');
  const info = results.errors.filter(e => e.severity === 'info');

  console.log(`${colors.red}Blockers: ${blockers.length}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${warnings.length}${colors.reset}`);
  console.log(`${colors.blue}Info: ${info.length}${colors.reset}\n`);

  // Print errors
  if (blockers.length > 0) {
    console.log(`${colors.red}=== BLOCKERS (MUST FIX) ===${colors.reset}\n`);
    blockers.forEach(e => {
      console.log(`${colors.red}[BLOCKER]${colors.reset} ${e.file}`);
      console.log(`  ${e.type}: ${e.message}\n`);
    });
  }

  if (warnings.length > 0 && warnings.length <= 20) {
    console.log(`${colors.yellow}=== WARNINGS (SHOULD FIX) ===${colors.reset}\n`);
    warnings.forEach(e => {
      console.log(`${colors.yellow}[WARNING]${colors.reset} ${e.file}`);
      console.log(`  ${e.type}: ${e.message}\n`);
    });
  } else if (warnings.length > 20) {
    console.log(`${colors.yellow}=== WARNINGS (${warnings.length} total, showing first 20) ===${colors.reset}\n`);
    warnings.slice(0, 20).forEach(e => {
      console.log(`${colors.yellow}[WARNING]${colors.reset} ${e.file}`);
      console.log(`  ${e.type}: ${e.message}\n`);
    });
  }

  // Save full report as JSON
  const reportPath = path.join(PLANNING_DIR, 'validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}\n`);

  // Exit with error if blockers found
  if (blockers.length > 0) {
    console.log(`${colors.red}❌ VALIDATION FAILED: ${blockers.length} blocker(s) must be fixed${colors.reset}\n`);
    process.exit(1);
  } else if (warnings.length > 5) {
    console.log(`${colors.yellow}⚠️  VALIDATION PASSED WITH WARNINGS: ${warnings.length} warning(s) should be addressed${colors.reset}\n`);
  } else {
    console.log(`${colors.green}✅ VALIDATION PASSED: Content is migration-ready${colors.reset}\n`);
  }
}

// Run validation
validateAllFiles();
