#!/usr/bin/env node
const PI = Math.PI;
function rd(n) { return Math.round(n * 10) / 10; }

function polyV(n, cx, cy, r) {
  return Array.from({length: n}, (_, i) => {
    const a = -PI/2 + (2*PI*i)/n;
    return [rd(cx + r*Math.cos(a)), rd(cy + r*Math.sin(a))];
  });
}

function pts2path(pts) {
  return 'M ' + pts.map(p => `${p[0]} ${p[1]}`).join(' L ') + ' Z';
}

function rotPts(pts, angle, cx, cy) {
  const c = Math.cos(angle), s = Math.sin(angle);
  return pts.map(([x,y]) => [
    rd(cx + (x-cx)*c - (y-cy)*s),
    rd(cy + (x-cx)*s + (y-cy)*c)
  ]);
}

function sectorPath(cx, cy, r, a1, a2) {
  const x1 = rd(cx+r*Math.cos(a1)), y1 = rd(cy+r*Math.sin(a1));
  const x2 = rd(cx+r*Math.cos(a2)), y2 = rd(cy+r*Math.sin(a2));
  const la = (a2-a1) > PI ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${la} 1 ${x2} ${y2} Z`;
}

function circPath(cx, cy, r) {
  return `M ${rd(cx+r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx-r)} ${cy} A ${r} ${r} 0 1 1 ${rd(cx+r)} ${cy} Z`;
}

// 13 FIGURE OUTLINES (200x200)
const F = {};
F.dreieck = pts2path(polyV(3, 100, 110, 85));
F.quadrat = 'M 35 35 L 165 35 L 165 165 L 35 165 Z';
F.parallelogramm = 'M 55 50 L 175 50 L 145 150 L 25 150 Z';
F.trapez = 'M 65 50 L 135 50 L 175 150 L 25 150 Z';
F.raute = 'M 100 20 L 175 100 L 100 180 L 25 100 Z';
F.fuenfeck = pts2path(polyV(5, 100, 105, 82));
F.sechseck = pts2path(polyV(6, 100, 100, 82));
F.siebeneck = pts2path(polyV(7, 100, 100, 82));
F.achteck = pts2path(polyV(8, 100, 100, 80));
F.viertelkreis = 'M 40 160 L 40 30 A 130 130 0 0 1 170 160 Z';
F.halbkreis = `M ${rd(100-80)} 130 A 80 80 0 0 0 ${rd(100+80)} 130 Z`;
F.dreiviertelkreis = (() => {
  const cx=100,cy=100,r=80,a1=PI/4,a2=-PI/4;
  return `M ${cx} ${cy} L ${rd(cx+r*Math.cos(a1))} ${rd(cy+r*Math.sin(a1))} A ${r} ${r} 0 1 0 ${rd(cx+r*Math.cos(a2))} ${rd(cy+r*Math.sin(a2))} Z`;
})();
F.vollkreis = circPath(100, 100, 80);

const ALL_KEYS = Object.keys(F);

// PIECE GENERATORS
function makePolygonPieces(n, numPieces, rots) {
  const cx=60, cy=55, r=40;
  const verts = polyV(n, cx, cy, r);
  const perG = Math.floor(n/numPieces), extra = n%numPieces;
  const pieces = []; let idx=0;
  for (let g=0; g<numPieces; g++) {
    const cnt = perG + (g<extra?1:0);
    const pts = [[cx,cy]];
    for (let j=0; j<=cnt; j++) pts.push(verts[(idx+j)%n]);
    pieces.push(pts); idx+=cnt;
  }
  return pieces.map((pts,i) => pts2path(rotPts(pts, rots[i]||0, cx, cy)));
}

function makeCircleSectors(numPieces, totalAngle, startA, rots, cx=60, cy=55, r=40) {
  const slice = totalAngle/numPieces;
  return Array.from({length:numPieces}, (_,i) => {
    const a1=startA+i*slice, a2=a1+slice, rot=rots[i]||0;
    return sectorPath(cx, cy, r, a1+rot, a2+rot);
  });
}

function makeQuadPieces(v4, numPieces, rots) {
  const cx=60, cy=55, center=[cx,cy];
  if (numPieces===3) {
    const pieces = [
      [v4[0],v4[1],center], [v4[1],v4[2],center], [v4[2],v4[3],v4[0],center]
    ];
    return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
  }
  if (numPieces===4) {
    const pieces = [];
    for (let i=0;i<4;i++) pieces.push([center,v4[i],v4[(i+1)%4]]);
    return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
  }
  if (numPieces===5) {
    const mid=[ rd((v4[0][0]+v4[1][0])/2), rd((v4[0][1]+v4[1][1])/2) ];
    const pieces = [
      [center,v4[0],mid],[center,mid,v4[1]],
      [center,v4[1],v4[2]],[center,v4[2],v4[3]],[center,v4[3],v4[0]]
    ];
    return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
  }
  if (numPieces===6) {
    // Split two sides at midpoints
    const mid01=[ rd((v4[0][0]+v4[1][0])/2), rd((v4[0][1]+v4[1][1])/2) ];
    const mid23=[ rd((v4[2][0]+v4[3][0])/2), rd((v4[2][1]+v4[3][1])/2) ];
    const pieces = [
      [center,v4[0],mid01],[center,mid01,v4[1]],
      [center,v4[1],v4[2]],[center,v4[2],mid23],
      [center,mid23,v4[3]],[center,v4[3],v4[0]]
    ];
    return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
  }
  if (numPieces===7) {
    // Split three sides at midpoints
    const mid01=[ rd((v4[0][0]+v4[1][0])/2), rd((v4[0][1]+v4[1][1])/2) ];
    const mid12=[ rd((v4[1][0]+v4[2][0])/2), rd((v4[1][1]+v4[2][1])/2) ];
    const mid23=[ rd((v4[2][0]+v4[3][0])/2), rd((v4[2][1]+v4[3][1])/2) ];
    const pieces = [
      [center,v4[0],mid01],[center,mid01,v4[1]],
      [center,v4[1],mid12],[center,mid12,v4[2]],
      [center,v4[2],mid23],[center,mid23,v4[3]],
      [center,v4[3],v4[0]]
    ];
    return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
  }
  return [];
}

// TASK SPECS for fz-16 to fz-30
const SPECS = [
  // fz-16 to fz-20: leicht (3 Teile)
  { id:'fz-16', correct:'halbkreis', diff:'leicht',
    gen:()=>makeCircleSectors(3,PI,PI,[PI/2,5*PI/4,11*PI/6]) },
  { id:'fz-17', correct:'raute', diff:'leicht',
    gen:()=>makeQuadPieces([[60,15],[100,55],[60,95],[20,55]],3,[PI/5,4*PI/5,3*PI/2]) },
  { id:'fz-18', correct:'dreiviertelkreis', diff:'leicht',
    gen:()=>makeCircleSectors(3,3*PI/2,PI/4,[PI/3,11*PI/6,PI]) },
  { id:'fz-19', correct:'quadrat', diff:'leicht',
    gen:()=>makeQuadPieces([[25,20],[95,20],[95,85],[25,85]],3,[2*PI/3,7*PI/6,PI/12]) },
  { id:'fz-20', correct:'dreieck', diff:'leicht',
    gen:()=>makePolygonPieces(3,3,[PI/2,7*PI/6,11*PI/6]) },

  // fz-21 to fz-25: mittel (4-5 Teile)
  { id:'fz-21', correct:'achteck', diff:'mittel',
    gen:()=>makePolygonPieces(8,5,[PI/3,2*PI/3,PI,4*PI/3,5*PI/3]) },
  { id:'fz-22', correct:'fuenfeck', diff:'mittel',
    gen:()=>makePolygonPieces(5,5,[PI/4,3*PI/4,5*PI/4,7*PI/4,PI/8]) },
  { id:'fz-23', correct:'vollkreis', diff:'mittel',
    gen:()=>makeCircleSectors(5,2*PI,0,[PI/5,3*PI/5,PI,7*PI/5,9*PI/5]) },
  { id:'fz-24', correct:'trapez', diff:'mittel',
    gen:()=>makeQuadPieces([[38,22],[82,22],[100,88],[18,88]],4,[PI/6,2*PI/3,7*PI/6,5*PI/3]) },
  { id:'fz-25', correct:'sechseck', diff:'mittel',
    gen:()=>makePolygonPieces(6,5,[PI/4,PI/2,PI,3*PI/2,7*PI/4]) },

  // fz-26 to fz-30: schwer (6-7 Teile)
  { id:'fz-26', correct:'siebeneck', diff:'schwer',
    gen:()=>makePolygonPieces(7,7,[PI/14,3*PI/14,5*PI/14,PI,9*PI/7,11*PI/7,13*PI/7]) },
  { id:'fz-27', correct:'dreiviertelkreis', diff:'schwer',
    gen:()=>makeCircleSectors(6,3*PI/2,PI/4,[PI/8,3*PI/8,5*PI/8,7*PI/8,9*PI/8,11*PI/8]) },
  { id:'fz-28', correct:'achteck', diff:'schwer',
    gen:()=>makePolygonPieces(8,7,[PI/16,3*PI/8,5*PI/8,7*PI/8,9*PI/8,11*PI/8,13*PI/8]) },
  { id:'fz-29', correct:'parallelogramm', diff:'schwer',
    gen:()=>makeQuadPieces([[28,22],[92,22],[82,88],[18,88]],7,[PI/7,2*PI/7,4*PI/7,6*PI/7,8*PI/7,10*PI/7,12*PI/7]) },
  { id:'fz-30', correct:'fuenfeck', diff:'schwer',
    gen:()=>{
      // 5-gon into 6 pieces: split into 5 triangular sectors + split one
      const cx=60,cy=55,r=40;
      const verts=polyV(5,cx,cy,r);
      const center=[cx,cy];
      const mid01=[rd((verts[0][0]+verts[1][0])/2),rd((verts[0][1]+verts[1][1])/2)];
      const pieces=[
        [center,verts[0],mid01],[center,mid01,verts[1]],
        [center,verts[1],verts[2]],[center,verts[2],verts[3]],
        [center,verts[3],verts[4]],[center,verts[4],verts[0]]
      ];
      const rots=[PI/10,3*PI/5,11*PI/10,8*PI/5,PI/4,3*PI/4];
      return pieces.map((p,i)=>pts2path(rotPts(p,rots[i]||0,cx,cy)));
    }},
];

// Option selection: correct + 7 distractors (different seed range from fz-1-15)
function makeOptions(correctKey, seed) {
  const others = ALL_KEYS.filter(k=>k!==correctKey);
  const sh = [...others];
  let s = seed;
  for (let i=sh.length-1;i>0;i--) {
    s=(s*1664525+1013904223)&0x7fffffff;
    const j=s%(i+1); [sh[i],sh[j]]=[sh[j],sh[i]];
  }
  const dist = sh.slice(0,7);
  const pos = Math.abs(seed*7+3)%8;
  const keys = [...dist];
  keys.splice(pos,0,correctKey);
  return {
    options: keys.map((k,i)=>({
      id: String.fromCharCode(97+i),
      paths: [F[k]],
      fill: 'none'
    })),
    correctId: String.fromCharCode(97+pos)
  };
}

const EXPL = {
  vollkreis:'Die Teile ergeben zusammengesetzt einen Vollkreis.',
  halbkreis:'Die Teile ergeben zusammengesetzt einen Halbkreis.',
  viertelkreis:'Die Teile ergeben zusammengesetzt einen Viertelkreis.',
  dreiviertelkreis:'Die Teile ergeben zusammengesetzt einen Dreiviertelkreis.',
  dreieck:'Die Teile ergeben zusammengesetzt ein gleichseitiges Dreieck.',
  quadrat:'Die Teile ergeben zusammengesetzt ein Quadrat.',
  fuenfeck:'Die Teile ergeben zusammengesetzt ein regelmäßiges Fünfeck (Pentagon).',
  sechseck:'Die Teile ergeben zusammengesetzt ein regelmäßiges Sechseck (Hexagon).',
  siebeneck:'Die Teile ergeben zusammengesetzt ein regelmäßiges Siebeneck (Heptagon).',
  achteck:'Die Teile ergeben zusammengesetzt ein regelmäßiges Achteck (Oktagon).',
  parallelogramm:'Die Teile ergeben zusammengesetzt ein Parallelogramm.',
  trapez:'Die Teile ergeben zusammengesetzt ein Trapez.',
  raute:'Die Teile ergeben zusammengesetzt eine Raute.',
};

const tasks = SPECS.map((sp,i) => {
  const piecePaths = sp.gen();
  const {options, correctId} = makeOptions(sp.correct, (i+15)*19+73);
  return { id:sp.id, pieces:piecePaths.map(p=>({path:p,fill:'#ffffff'})),
    options, correctOptionId:correctId, difficulty:sp.diff,
    explanation:EXPL[sp.correct] };
});

function esc(s){return s.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n');}

let out = '';
for (const t of tasks) {
  out += `  {\n    id: "${t.id}",\n    pieces: [\n`;
  for (const p of t.pieces) {
    out += `      { path: "${esc(p.path)}", fill: "${p.fill}" },\n`;
  }
  out += `    ],\n    options: [\n`;
  for (const o of t.options) {
    out += `      { id: "${o.id}", paths: ["${esc(o.paths[0])}"], fill: "${o.fill}" },\n`;
  }
  out += `    ],\n    correctOptionId: "${t.correctOptionId}",\n`;
  out += `    difficulty: "${t.difficulty}",\n`;
  out += `    explanation: "${esc(t.explanation)}",\n  },\n`;
}

process.stdout.write(out);
