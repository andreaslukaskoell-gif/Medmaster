// BMS Command Center - Local-only developer tool for BMS content quality review.
// SECURITY NOTE: This is an offline tool that only loads our own bms-playground-data.json.
// All user-visible text is escaped via esc() before DOM insertion.
// innerHTML is used intentionally because we render structured markdown/HTML from our own data.
// This file is NOT served to end users and NOT part of the production build.

var DATA = {};
var ALL_UKS = [];
var state = { subject: 'all', filter: 'all', search: '', selectedUK: null, contentTab: 'content', sortCol: 'id', sortDir: 1 };

var SUBJECTS = ['biologie', 'chemie', 'physik', 'mathematik'];
var SUBJECT_LABELS = { biologie: 'Biologie', chemie: 'Chemie', physik: 'Physik', mathematik: 'Mathematik' };
var SUBJECT_COLORS = { biologie: 'var(--bio)', chemie: 'var(--chem)', physik: 'var(--phys)', mathematik: 'var(--math)' };
var FILTERS = [
  { id: 'all', label: 'Alle' }, { id: 'issues', label: 'Mit Issues' },
  { id: 'short', label: 'Unter 800 Woerter' }, { id: 'no-merksaetze', label: 'Wenig Merksaetze' },
  { id: 'no-stichworte', label: 'Ohne Stichworte' }, { id: 'no-diagram', label: 'Ohne Diagramm' },
  { id: 'no-altfrage', label: 'Ohne Altfrage' }, { id: 'no-klinbezug', label: 'Ohne Klin. Bezug' }
];

function esc(s) {
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(String(s)));
  return d.innerHTML;
}

function scoreUK(uk) {
  var s = 0, issues = [];
  if (uk.words >= 800) s++; else issues.push({ sev: 'high', msg: 'Nur ' + uk.words + ' Woerter (min 800)' });
  if (uk.words >= 1000) s++; else if (uk.words >= 800) issues.push({ sev: 'low', msg: uk.words + ' Woerter (ideal 1000+)' });
  if ((uk.stichworte || []).length >= 8) s++; else issues.push({ sev: (uk.stichworte && uk.stichworte.length) ? 'med' : 'high', msg: (uk.stichworte || []).length + ' Stichworte (min 8)' });
  if (uk.selfTestCount >= 5) s++; else issues.push({ sev: 'high', msg: uk.selfTestCount + ' SelfTest (min 5)' });
  if (uk.merksaetzeCount >= 3) s++; else issues.push({ sev: 'high', msg: uk.merksaetzeCount + ' Merksaetze (min 3)' });
  if (uk.hasAltfrage) s++; else issues.push({ sev: 'med', msg: 'Keine Altfrage' });
  if (uk.hasKlinBezug) s++; else issues.push({ sev: 'med', msg: 'Kein Klinischer Bezug' });
  return { score: s, max: 7, pct: Math.round(s / 7 * 100), issues: issues };
}

function matchFilter(uk, filter) {
  switch (filter) {
    case 'all': return true;
    case 'issues': return scoreUK(uk).issues.length > 0;
    case 'short': return uk.words < 800;
    case 'no-merksaetze': return uk.merksaetzeCount < 3;
    case 'no-stichworte': return (uk.stichworte || []).length === 0;
    case 'no-diagram': return !uk.hasDiagram;
    case 'no-altfrage': return !uk.hasAltfrage;
    case 'no-klinbezug': return !uk.hasKlinBezug;
  }
  return true;
}

function getFilteredUKs() {
  var uks = state.subject === 'all' ? ALL_UKS : (DATA[state.subject] || []);
  if (state.filter !== 'all') uks = uks.filter(function(uk) { return matchFilter(uk, state.filter); });
  if (state.search) {
    var q = state.search.toLowerCase();
    uks = uks.filter(function(uk) { return uk.id.toLowerCase().indexOf(q) >= 0 || uk.title.toLowerCase().indexOf(q) >= 0 || uk.kapitelTitle.toLowerCase().indexOf(q) >= 0; });
  }
  return uks;
}

function scoreColor(pct) { return pct >= 85 ? 'var(--ok)' : pct >= 60 ? 'var(--warn)' : 'var(--err)'; }
function statusIcon(uk) { var r = scoreUK(uk); if (r.pct >= 85) return '\u2713'; if (r.issues.some(function(i){return i.sev==='high';})) return '\u2717'; return '!'; }

function setHTML(el, html) {
  if (typeof el === 'string') el = document.getElementById(el);
  if (el) el.innerHTML = html; // Safe: all content escaped via esc(), local-only tool
}

function renderNav() {
  var uks = getFilteredUKs();
  var groups = {};
  uks.forEach(function(uk) {
    if (!groups[uk.kapitelId]) groups[uk.kapitelId] = { title: uk.kapitelTitle, subject: uk.subject, uks: [] };
    groups[uk.kapitelId].uks.push(uk);
  });
  var html = '';
  Object.keys(groups).forEach(function(kapId) {
    var grp = groups[kapId];
    var scores = grp.uks.map(function(uk) { return scoreUK(uk).pct; });
    var avgScore = Math.round(scores.reduce(function(a,b){return a+b;}, 0) / scores.length);
    var isOpen = state.selectedUK && grp.uks.some(function(uk) { return uk.id === state.selectedUK.id; });
    html += '<div class="kap-group ' + (isOpen ? 'open' : '') + '" data-kap="' + esc(kapId) + '">';
    html += '<div class="kap-header ' + (isOpen ? 'open' : '') + '" onclick="toggleKap(this)">';
    html += '<span class="arrow">\u25B6</span>';
    html += '<span class="kap-title" style="color:' + SUBJECT_COLORS[grp.subject] + '">' + esc(grp.title) + '</span>';
    html += '<span class="kap-score" style="background:' + scoreColor(avgScore) + '20;color:' + scoreColor(avgScore) + '">' + avgScore + '%</span>';
    html += '</div><div class="kap-uks">';
    grp.uks.forEach(function(uk) {
      var pct = scoreUK(uk).pct;
      var icon = statusIcon(uk);
      var iconColor = pct >= 85 ? 'var(--ok)' : pct >= 60 ? 'var(--warn)' : 'var(--err)';
      var isActive = state.selectedUK && state.selectedUK.id === uk.id;
      html += '<div class="uk-item ' + (isActive ? 'active' : '') + '" onclick="selectUK(\'' + esc(uk.id) + '\')">';
      html += '<span class="status" style="color:' + (isActive ? 'white' : iconColor) + '">' + icon + '</span>';
      html += '<span class="uk-title">' + esc(uk.id) + ': ' + esc(uk.title) + '</span>';
      html += '<span class="uk-score">' + pct + '%</span></div>';
    });
    html += '</div></div>';
  });
  setHTML('navTree', html || '<div style="padding:20px;color:var(--fg3);text-align:center">Keine Ergebnisse</div>');
  var baseUks = state.subject === 'all' ? ALL_UKS : (DATA[state.subject] || []);
  var fHtml = '<h3>Filter</h3>';
  FILTERS.forEach(function(f) {
    var count = baseUks.filter(function(uk) { return matchFilter(uk, f.id); }).length;
    fHtml += '<button class="filter-btn ' + (state.filter === f.id ? 'active' : '') + '" onclick="setFilter(\'' + f.id + '\')">' + esc(f.label) + '<span class="count">' + count + '</span></button>';
  });
  setHTML('navFilters', fHtml);
  document.getElementById('navStats').textContent = getFilteredUKs().length + '/' + baseUks.length + ' UKs angezeigt';
  document.getElementById('headerStats').textContent = ALL_UKS.length + ' Unterkapitel \u00B7 4 Faecher';
}

function renderDashboard() {
  var html = '<div class="dashboard"><div class="dash-cards">';
  SUBJECTS.forEach(function(subj) {
    var uks = DATA[subj] || [];
    var scores = uks.map(function(uk) { return scoreUK(uk).pct; });
    var avg = scores.length ? Math.round(scores.reduce(function(a,b){return a+b;},0) / scores.length) : 0;
    var ic = uks.filter(function(uk) { return scoreUK(uk).issues.length > 0; }).length;
    html += '<div class="dash-card" data-s="' + subj + '" onclick="setSubject(\'' + subj + '\')">';
    html += '<div class="dc-subject">' + esc(SUBJECT_LABELS[subj]) + '</div>';
    html += '<div class="dc-score" style="color:' + scoreColor(avg) + '">' + avg + '%</div>';
    html += '<div class="dc-bar"><div class="dc-bar-fill" style="width:' + avg + '%;background:' + SUBJECT_COLORS[subj] + '"></div></div>';
    html += '<div class="dc-stats"><span>' + uks.length + ' UKs</span><span style="color:' + (ic ? 'var(--warn)' : 'var(--ok)') + '">' + ic + ' Issues</span></div></div>';
  });
  html += '</div>';
  html += '<div class="dash-heatmap"><h3>Quality Heatmap</h3><div class="heatmap-grid">';
  var hmUks = getFilteredUKs();
  hmUks.forEach(function(uk) {
    var pct = scoreUK(uk).pct;
    html += '<div class="heatmap-cell" style="background:' + scoreColor(pct) + '" onclick="selectUK(\'' + esc(uk.id) + '\')">';
    html += '<div class="tooltip">' + esc(uk.id) + ': ' + esc(uk.title) + ' (' + pct + '%)</div></div>';
  });
  html += '</div></div>';
  html += '<table class="dash-table"><thead><tr>';
  html += '<th onclick="sortTable(\'id\')">ID</th><th onclick="sortTable(\'title\')">Titel</th>';
  html += '<th onclick="sortTable(\'subject\')">Fach</th><th onclick="sortTable(\'words\')">Woerter</th>';
  html += '<th onclick="sortTable(\'merksaetze\')">Merks.</th><th onclick="sortTable(\'stichworte\')">Stichw.</th>';
  html += '<th onclick="sortTable(\'selftest\')">SelfTest</th><th onclick="sortTable(\'score\')">Score</th><th>Issues</th>';
  html += '</tr></thead><tbody>';
  hmUks.slice().sort(function(a, b) {
    var va, vb;
    switch (state.sortCol) {
      case 'id': va = a.id; vb = b.id; break;
      case 'title': va = a.title; vb = b.title; break;
      case 'subject': va = a.subject; vb = b.subject; break;
      case 'words': va = a.words; vb = b.words; break;
      case 'merksaetze': va = a.merksaetzeCount; vb = b.merksaetzeCount; break;
      case 'stichworte': va = (a.stichworte||[]).length; vb = (b.stichworte||[]).length; break;
      case 'selftest': va = a.selfTestCount; vb = b.selfTestCount; break;
      case 'score': va = scoreUK(a).pct; vb = scoreUK(b).pct; break;
      default: va = a.id; vb = b.id;
    }
    if (typeof va === 'string') return state.sortDir * va.localeCompare(vb);
    return state.sortDir * (va - vb);
  }).forEach(function(uk) {
    var r = scoreUK(uk);
    html += '<tr onclick="selectUK(\'' + esc(uk.id) + '\')">';
    html += '<td style="font-weight:600;color:' + SUBJECT_COLORS[uk.subject] + '">' + esc(uk.id) + '</td>';
    html += '<td>' + esc(uk.title) + '</td>';
    html += '<td>' + esc(SUBJECT_LABELS[uk.subject]) + '</td>';
    html += '<td style="color:' + (uk.words >= 800 ? 'var(--ok)' : 'var(--err)') + '">' + uk.words + '</td>';
    html += '<td style="color:' + (uk.merksaetzeCount >= 3 ? 'var(--ok)' : 'var(--err)') + '">' + uk.merksaetzeCount + '</td>';
    html += '<td style="color:' + ((uk.stichworte||[]).length >= 8 ? 'var(--ok)' : (uk.stichworte||[]).length > 0 ? 'var(--warn)' : 'var(--err)') + '">' + (uk.stichworte||[]).length + '</td>';
    html += '<td style="color:' + (uk.selfTestCount >= 5 ? 'var(--ok)' : 'var(--err)') + '">' + uk.selfTestCount + '</td>';
    html += '<td><span class="score-badge" style="background:' + scoreColor(r.pct) + '25;color:' + scoreColor(r.pct) + '">' + r.pct + '%</span></td>';
    html += '<td style="color:' + (r.issues.length ? 'var(--warn)' : 'var(--ok)') + '">' + r.issues.length + '</td></tr>';
  });
  html += '</tbody></table></div>';
  setHTML('contentArea', html);
  var totalOK = ALL_UKS.filter(function(uk) { return scoreUK(uk).pct >= 85; }).length;
  var totalWords = ALL_UKS.reduce(function(s, uk) { return s + uk.words; }, 0);
  var avgScore = Math.round(ALL_UKS.map(function(uk) { return scoreUK(uk).pct; }).reduce(function(a,b){return a+b;},0) / ALL_UKS.length);
  setHTML('actionPanel',
    '<div class="action-section"><h3>Gesamtuebersicht</h3>' + renderScoreRing(avgScore) + '</div>'
    + '<div class="action-section"><h3>Statistiken</h3>'
    + checkItem(true, 'Unterkapitel', ALL_UKS.length)
    + checkItem(true, 'Score >= 85%', totalOK)
    + checkItem(ALL_UKS.length - totalOK === 0, 'Mit Issues', ALL_UKS.length - totalOK)
    + checkItem(true, 'Gesamtwoerter', totalWords.toLocaleString('de'))
    + '</div>'
    + '<div class="action-section"><h3>Batch-Aktionen</h3>'
    + '<button class="action-btn" onclick="batchPrompt(\'no-stichworte\')">Stichworte-Prompt (alle ohne)</button>'
    + '<button class="action-btn secondary" onclick="batchPrompt(\'short\')">Kurze UKs erweitern</button>'
    + '<button class="action-btn secondary" onclick="batchPrompt(\'no-merksaetze\')">Merksaetze ergaenzen</button></div>'
  );
}

function renderUKDetail(uk) {
  var html = '<div class="content-header">';
  html += '<div class="content-breadcrumb">' + esc(SUBJECT_LABELS[uk.subject]) + ' \u2192 ' + esc(uk.kapitelTitle) + '</div>';
  html += '<div class="content-title">' + esc(uk.id) + ': ' + esc(uk.title) + '</div>';
  html += '<div class="content-tabs">';
  ['content','struktur','selftest','merksaetze'].forEach(function(tab) {
    var label = tab === 'content' ? 'Content' : tab === 'struktur' ? 'Struktur' : tab === 'selftest' ? 'SelfTest (' + uk.selfTestCount + ')' : 'Merksaetze (' + uk.merksaetzeCount + ')';
    html += '<button class="content-tab ' + (state.contentTab === tab ? 'active' : '') + '" onclick="setContentTab(\'' + tab + '\')">' + label + '</button>';
  });
  html += '</div></div><div class="content-body">';
  if (state.contentTab === 'content') {
    html += '<div class="md">' + renderMarkdown(uk.content) + '</div>';
    if ((uk.stichworte || []).length) {
      html += '<div class="tag-cloud" style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border)">';
      uk.stichworte.forEach(function(s) { html += '<span class="tag">' + esc(s) + '</span>'; });
      html += '</div>';
    }
  } else if (state.contentTab === 'struktur') { html += renderStruktur(uk); }
  else if (state.contentTab === 'selftest') { html += renderSelfTest(uk); }
  else if (state.contentTab === 'merksaetze') { html += renderMerksaetze(uk); }
  html += '</div>';
  setHTML('contentArea', html);
  renderActionPanel(uk);
}

function renderStruktur(uk) {
  var lines = uk.content.split('\n');
  var html = '<div style="margin-bottom:16px;font-size:12px;color:var(--fg2)">Inhaltsstruktur:</div>';
  var h2Count = 0, h3Count = 0;
  lines.forEach(function(line) {
    var m2 = line.match(/^## (.+)/); var m3 = line.match(/^### (.+)/);
    if (m2) { h2Count++; html += '<div class="struktur-item h2"><span class="struktur-badge">H2</span>' + esc(m2[1]) + '</div>'; }
    if (m3) { h3Count++; html += '<div class="struktur-item h3"><span class="struktur-badge">H3</span>' + esc(m3[1]) + '</div>'; }
  });
  var c = uk.content.toLowerCase();
  var checks = [
    { l: 'Ueberblick', f: c.indexOf('\u00fcberblick') >= 0 || c.indexOf('\u00fcbersicht') >= 0 },
    { l: 'Lernziele', f: c.indexOf('lernziel') >= 0 },
    { l: 'Merke-Blockquotes', f: c.indexOf('> **merke') >= 0 },
    { l: 'Klinischer Bezug', f: c.indexOf('klinischer bezug') >= 0 || c.indexOf('klinische') >= 0 },
    { l: 'Tabellen', f: c.indexOf('|') >= 0 && c.indexOf('---') >= 0 },
    { l: 'MedAT-Fokus', f: c.indexOf('medat') >= 0 },
  ];
  html += '<div style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border)"><div style="font-weight:600;margin-bottom:8px">Strukturpruefung</div>';
  checks.forEach(function(ch) { html += '<div class="check-item"><span class="check-icon ' + (ch.f ? 'pass' : 'fail') + '">' + (ch.f ? '\u2713' : '\u2717') + '</span><span class="check-label">' + ch.l + '</span></div>'; });
  html += '</div><div style="margin-top:12px;font-size:12px;color:var(--fg3)">' + h2Count + ' H2 \u00B7 ' + h3Count + ' H3 \u00B7 ' + uk.words + ' Woerter</div>';
  return html;
}

function renderSelfTest(uk) {
  if (!uk.selfTest || !uk.selfTest.length) return '<p style="color:var(--fg3)">Keine SelfTest-Fragen.</p>';
  var letters = 'ABCDE', html = '';
  uk.selfTest.forEach(function(q, i) {
    html += '<div class="selftest-card"><div class="selftest-q">' + (i+1) + '. ' + esc(q.question) + '</div>';
    (q.options || []).forEach(function(opt, j) {
      html += '<div class="selftest-opt ' + (j === q.correctIndex ? 'correct' : '') + '"><span class="letter">' + letters[j] + '</span>' + esc(opt) + '</div>';
    });
    if (q.explanation) html += '<div class="selftest-expl"><strong>Erklaerung:</strong> ' + esc(q.explanation) + '</div>';
    html += '</div>';
  });
  return html;
}

function renderMerksaetze(uk) {
  var html = '';
  if (uk.merksaetze && uk.merksaetze.length) {
    html += '<div style="margin-bottom:16px;font-size:12px;color:var(--fg2)">Gespeicherte Merksaetze:</div>';
    uk.merksaetze.forEach(function(m) { html += '<div class="merksatz-card">' + esc(m) + '</div>'; });
  } else { html += '<p style="color:var(--fg3);margin-bottom:16px">Keine Merksaetze.</p>'; }
  if ((uk.stichworte || []).length) {
    html += '<div style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border)"><div style="font-size:12px;color:var(--fg2);margin-bottom:8px">Stichworte (' + uk.stichworte.length + '):</div><div class="tag-cloud">';
    uk.stichworte.forEach(function(s) { html += '<span class="tag">' + esc(s) + '</span>'; });
    html += '</div></div>';
  }
  if ((uk.lernziele || []).length) {
    html += '<div style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border)"><div style="font-size:12px;color:var(--fg2);margin-bottom:8px">Lernziele (' + uk.lernziele.length + '):</div><ul style="padding-left:18px">';
    uk.lernziele.forEach(function(l) { html += '<li style="margin:4px 0;font-size:12px">' + esc(l) + '</li>'; });
    html += '</ul></div>';
  }
  return html;
}

function renderActionPanel(uk) {
  var r = scoreUK(uk);
  var html = '<div class="action-section"><h3>Quality Score</h3>' + renderScoreRing(r.pct)
    + '<div style="text-align:center;font-size:12px;color:var(--fg3)">' + r.score + '/' + r.max + ' Punkte</div></div>'
    + '<div class="action-section"><h3>Checkliste</h3>'
    + checkItem(uk.words >= 800, 'Woerter >= 800', uk.words)
    + checkItem(uk.words >= 1000, 'Woerter >= 1000', uk.words)
    + checkItem((uk.stichworte||[]).length >= 8, 'Stichworte >= 8', (uk.stichworte||[]).length)
    + checkItem(uk.selfTestCount >= 5, 'SelfTest >= 5', uk.selfTestCount)
    + checkItem(uk.merksaetzeCount >= 3, 'Merksaetze >= 3', uk.merksaetzeCount)
    + checkItem(uk.hasAltfrage, 'Altfrage', uk.hasAltfrage ? '\u2713' : '\u2014')
    + checkItem(uk.hasKlinBezug, 'Klin. Bezug', uk.hasKlinBezug ? '\u2713' : '\u2014')
    + checkItem(uk.hasDiagram, 'Diagramm', uk.hasDiagram ? '\u2713' : '\u2014')
    + '</div>';
  if (r.issues.length) {
    html += '<div class="action-section"><h3>Issues</h3>';
    r.issues.forEach(function(i) { html += '<div class="issue-item"><span class="issue-sev ' + i.sev + '">' + i.sev.toUpperCase() + '</span><span>' + esc(i.msg) + '</span></div>'; });
    html += '</div>';
  }
  html += '<div class="action-section"><h3>Aktionen</h3>'
    + '<button class="action-btn" onclick="generatePrompt(\'' + esc(uk.id) + '\')">Fix-Prompt generieren</button>'
    + '<button class="action-btn secondary" onclick="copyTS(\'' + esc(uk.id) + '\')">UK als .ts kopieren</button>'
    + '<button class="action-btn secondary" onclick="navigateToNext(\'' + esc(uk.id) + '\')">Naechstes mit Issues \u2192</button></div>';
  if (uk.altfrage) {
    html += '<div class="action-section"><h3>Altfrage</h3><div style="font-size:12px;margin-bottom:6px"><strong>Q:</strong> ' + esc(uk.altfrage.question) + '</div>'
      + '<div style="font-size:11px;color:var(--fg2)"><strong>A:</strong> ' + esc(uk.altfrage.answer) + '</div></div>';
  }
  if (uk.klinischerBezug) {
    var kbp = uk.klinischerBezug.length > 200 ? uk.klinischerBezug.substring(0, 200) + '...' : uk.klinischerBezug;
    html += '<div class="action-section"><h3>Klinischer Bezug</h3><div style="font-size:12px;line-height:1.5">' + esc(kbp) + '</div></div>';
  }
  setHTML('actionPanel', html);
}

function checkItem(pass, label, value) {
  return '<div class="check-item"><span class="check-icon ' + (pass ? 'pass' : 'fail') + '">' + (pass ? '\u2713' : '\u2717') + '</span><span class="check-label">' + esc(label) + '</span><span class="check-value">' + esc(String(value)) + '</span></div>';
}

function renderScoreRing(pct) {
  var r = 40, c = 2 * Math.PI * r, dash = c * pct / 100, color = scoreColor(pct);
  return '<div class="score-ring-wrap"><div class="score-ring"><svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="' + r + '" fill="none" stroke="var(--bg3)" stroke-width="8"/><circle cx="50" cy="50" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="8" stroke-dasharray="' + dash + ' ' + c + '" stroke-linecap="round"/></svg><div class="score-ring-text"><span class="score-ring-num" style="color:' + color + '">' + pct + '</span><span class="score-ring-label">/ 100</span></div></div></div>';
}

function renderMarkdown(md) {
  if (!md) return '';
  var html = esc(md);
  html = html.replace(/^&gt;\s?(.*)$/gm, function(_, c) { return '<blockquote>' + c + '</blockquote>'; });
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');
  html = html.replace(/^---$/gm, '<hr>');
  html = html.replace(/^\|(.+)\|$/gm, function(match) {
    if (match.match(/^\|[\s\-:|]+\|$/)) return '<!--thr-->';
    var cells = match.split('|').filter(Boolean).map(function(c){return c.trim();});
    return '<tr>' + cells.map(function(c){return '<td>'+c+'</td>';}).join('') + '</tr>';
  });
  html = html.replace(/((?:<tr>.*<\/tr>\n?)+)/g, function(block) {
    var clean = block.replace(/<!--thr-->\n?/g, '');
    if (!clean.trim()) return '';
    var rows = clean.trim().split('\n').filter(Boolean);
    if (rows.length > 1) return '<table class="md">' + rows[0].replace(/<td>/g,'<th>').replace(/<\/td>/g,'</th>') + rows.slice(1).join('') + '</table>';
    return '<table class="md">' + clean + '</table>';
  });
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
  html = html.replace(/^(?!<[hubltrp]|<\/|<!--)(.+)$/gm, '<p>$1</p>');
  html = html.replace(/<!--thr-->/g, '');
  return html;
}

function generatePrompt(ukId) {
  var uk = ALL_UKS.find(function(u){return u.id===ukId;});
  if (!uk) return;
  var r = scoreUK(uk);
  var p = 'Du bist ein MedAT-Experte. Bitte verbessere das folgende Unterkapitel:\n\n';
  p += '**Unterkapitel:** ' + uk.id + ' - ' + uk.title + '\n';
  p += '**Kapitel:** ' + uk.kapitelTitle + '\n**Fach:** ' + SUBJECT_LABELS[uk.subject] + '\n';
  p += '**Status:** ' + uk.words + ' Woerter, ' + uk.merksaetzeCount + ' Merksaetze, ' + (uk.stichworte||[]).length + ' Stichworte, ' + uk.selfTestCount + ' SelfTest\n\n**Issues:**\n';
  r.issues.forEach(function(i) { p += '- [' + i.sev.toUpperCase() + '] ' + i.msg + '\n'; });
  p += '\n**Anforderungen:**\n';
  if (uk.words < 800) p += '- Erweitere auf mind. 800 Woerter (ideal 1000+)\n';
  if ((uk.stichworte||[]).length < 8) p += '- Fuege mind. ' + (8 - (uk.stichworte||[]).length) + ' Stichworte hinzu\n';
  if (uk.merksaetzeCount < 3) p += '- Fuege mind. ' + (3 - uk.merksaetzeCount) + ' Merksaetze hinzu (> **Merke:** ...)\n';
  if (uk.selfTestCount < 5) p += '- Fuege ' + (5 - uk.selfTestCount) + ' SelfTest-Fragen hinzu (5 Optionen, 0-indexed correctIndex)\n';
  if (!uk.hasAltfrage) p += '- Fuege eine Altfrage hinzu: { question: "...", answer: "..." }\n';
  if (!uk.hasKlinBezug) p += '- Fuege klinischen Bezug hinzu\n';
  p += '\n**Struktur:** AMBOSS-Stil. 30% Fliesstext, 55% Stichpunkte, 15% Tabellen.\n';
  p += '\n**Aktueller Content:**\n```\n' + uk.content.substring(0, 3000) + '\n```';
  document.getElementById('promptTitle').textContent = 'Fix-Prompt: ' + uk.id;
  document.getElementById('promptText').value = p;
  document.getElementById('promptModal').classList.add('show');
}

function batchPrompt(filterType) {
  var baseUks = state.subject === 'all' ? ALL_UKS : (DATA[state.subject] || []);
  var uks = baseUks.filter(function(uk) { return matchFilter(uk, filterType); });
  if (!uks.length) { showToast('Keine UKs mit diesem Filter'); return; }
  var p = 'Folgende ' + uks.length + ' Unterkapitel brauchen Verbesserung:\n\nFilter: ' + FILTERS.find(function(f){return f.id===filterType;}).label + '\n\n';
  uks.forEach(function(uk) {
    var r = scoreUK(uk);
    p += '### ' + uk.id + ': ' + uk.title + '\n- ' + SUBJECT_LABELS[uk.subject] + ', ' + uk.kapitelTitle + '\n- ' + uk.words + 'w, ' + uk.merksaetzeCount + ' Merks., ' + (uk.stichworte||[]).length + ' Stichw.\n';
    r.issues.forEach(function(i) { p += '  - [' + i.sev + '] ' + i.msg + '\n'; });
    p += '\n';
  });
  document.getElementById('promptTitle').textContent = 'Batch-Prompt: ' + uks.length + ' UKs';
  document.getElementById('promptText').value = p;
  document.getElementById('promptModal').classList.add('show');
}

function copyTS(ukId) {
  var uk = ALL_UKS.find(function(u){return u.id===ukId;});
  if (!uk) return;
  var ts = '{\n  id: "' + uk.id + '",\n  title: "' + uk.title + '",\n  stichworte: ' + JSON.stringify(uk.stichworte || [], null, 4) + ',\n  content: `' + uk.content.replace(/`/g, '\\`').substring(0, 5000) + '`,\n  merksaetze: ' + JSON.stringify(uk.merksaetze || [], null, 4) + ',\n  selfTest: ' + JSON.stringify(uk.selfTest || [], null, 4) + ',\n}';
  navigator.clipboard.writeText(ts).then(function() { showToast('TypeScript kopiert!'); });
}

function navigateToNext(currentId) {
  var uks = getFilteredUKs();
  var idx = uks.findIndex(function(u){return u.id===currentId;});
  var next = uks.slice(idx + 1).find(function(uk) { return scoreUK(uk).issues.length > 0; });
  if (next) selectUK(next.id); else showToast('Keine weiteren Issues');
}

function closePrompt() { document.getElementById('promptModal').classList.remove('show'); }
function copyPrompt() { navigator.clipboard.writeText(document.getElementById('promptText').value).then(function() { showToast('Prompt kopiert!'); }); }
function showToast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(function() { t.classList.remove('show'); }, 2000); }

function setSubject(s) {
  state.subject = s; state.selectedUK = null; state.filter = 'all';
  document.querySelectorAll('.subject-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.subject === s); });
  renderNav(); renderDashboard();
}
function setFilter(f) { state.filter = f; renderNav(); if (!state.selectedUK) renderDashboard(); }
function selectUK(id) {
  state.selectedUK = ALL_UKS.find(function(u){return u.id===id;}) || null;
  state.contentTab = 'content';
  if (state.selectedUK) { renderNav(); renderUKDetail(state.selectedUK); }
}
function setContentTab(tab) { state.contentTab = tab; if (state.selectedUK) renderUKDetail(state.selectedUK); }
function toggleKap(el) { var grp = el.closest('.kap-group'); grp.classList.toggle('open'); el.classList.toggle('open'); }
function sortTable(col) { if (state.sortCol === col) state.sortDir *= -1; else { state.sortCol = col; state.sortDir = 1; } renderDashboard(); }

document.getElementById('searchBox').addEventListener('input', function(e) { state.search = e.target.value; renderNav(); if (!state.selectedUK) renderDashboard(); });
document.getElementById('closePromptBtn').addEventListener('click', closePrompt);
document.getElementById('closePromptBtn2').addEventListener('click', closePrompt);
document.getElementById('copyPromptBtn').addEventListener('click', copyPrompt);

document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  var uks = getFilteredUKs(); if (!uks.length) return;
  if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); var idx = state.selectedUK ? uks.findIndex(function(u){return u.id===state.selectedUK.id;}) : -1; var next = uks[Math.min(idx + 1, uks.length - 1)]; if (next) selectUK(next.id); }
  if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); var idx2 = state.selectedUK ? uks.findIndex(function(u){return u.id===state.selectedUK.id;}) : 1; var prev = uks[Math.max(idx2 - 1, 0)]; if (prev) selectUK(prev.id); }
  if (e.key === 'Escape') { if (document.getElementById('promptModal').classList.contains('show')) closePrompt(); else { state.selectedUK = null; renderNav(); renderDashboard(); } }
  if (e.key === 'p' && state.selectedUK) generatePrompt(state.selectedUK.id);
  if (e.key === '/' && !e.metaKey) { e.preventDefault(); document.getElementById('searchBox').focus(); }
});

async function init() {
  try {
    var res = await fetch('./bms-playground-data.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    DATA = await res.json();
    ALL_UKS = SUBJECTS.flatMap(function(s) { return DATA[s] || []; });
    renderNav();
    renderDashboard();
  } catch (err) {
    setHTML('contentArea', '<div class="welcome"><h2>Daten nicht gefunden</h2><p>Bitte zuerst ausfuehren:</p><pre style="background:var(--bg2);padding:16px;border-radius:8px;margin-top:12px;font-family:monospace;font-size:13px">npx tsx scripts/extract-bms-data.mjs</pre><p style="margin-top:8px;font-size:12px">Dann Seite neu laden.</p></div>');
  }
}
init();
