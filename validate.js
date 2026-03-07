const fs = require('fs');

// Load data.js by executing it in a Function context
const dataCode = fs.readFileSync('./courses/js-ts-fun-book/data.js', 'utf8');
const fn = new Function(dataCode + '\nreturn LESSONS_DATA;');
const d = fn();

console.log('=== DATA VALIDATION ===');
console.log('Lessons:', d.length);
console.log('Quizzes:', d.reduce((s,l) => s + l.quiz.length, 0));
console.log('Points:', d.reduce((s,l) => s + l.points.length, 0));

const ids = d.map(l=>l.id).sort((a,b)=>a-b);
console.log('IDs:', ids.join(','));

const missing = [];
for(let i=1;i<=49;i++) if(!ids.includes(i)) missing.push(i);
console.log('Missing IDs:', missing.length ? missing.join(',') : 'NONE');

// Check all fields
const requiredFields = ['id','title','subtitle','analogy','points','whatIs','realWorld','code','funFact','quiz','challenge','resources','eli5','codeWalkthrough','bugChallenge','difficulty','prereqs'];
const fieldIssues = [];
for (const l of d) {
  for (const f of requiredFields) {
    if (l[f] === undefined || l[f] === null) {
      fieldIssues.push(`L${l.id} missing: ${f}`);
    }
  }
  if (!['beginner','intermediate','advanced'].includes(l.difficulty)) {
    fieldIssues.push(`L${l.id} bad difficulty: ${l.difficulty}`);
  }
  if (l.prereqs) {
    for (const p of l.prereqs) {
      if (!ids.includes(p)) {
        fieldIssues.push(`L${l.id} prereq ${p} not found`);
      }
    }
  }
}
console.log('Field issues:', fieldIssues.length ? '\n  ' + fieldIssues.join('\n  ') : 'NONE');

// Check for cliche analogies
const cliches = ['recipe','blueprint','lego','building blocks','toolbox','swiss army knife'];
for (const l of d) {
  const a = l.analogy.toLowerCase();
  for (const c of cliches) {
    if (a.includes(c)) {
      console.log(`CLICHE L${l.id}: "${c}" in analogy`);
    }
  }
}

// Load config.js
const configCode = fs.readFileSync('./courses/js-ts-fun-book/config.js', 'utf8');
const fn2 = new Function(configCode + '\nreturn COURSE_CONFIG;');
const config = fn2();

// Check topicMap
const topicIds = new Set();
for (const [topic, tids] of Object.entries(config.topicMap)) {
  for (const tid of tids) {
    if (topicIds.has(tid)) console.log(`DUPLICATE topicMap: L${tid} in "${topic}"`);
    topicIds.add(tid);
  }
}
const missingFromTopic = ids.filter(id => !topicIds.has(id));
const extraInTopic = [...topicIds].filter(id => !ids.includes(id));
console.log('Missing from topicMap:', missingFromTopic.length ? missingFromTopic.join(',') : 'NONE');
console.log('Extra in topicMap:', extraInTopic.length ? extraInTopic.join(',') : 'NONE');

// Check conceptFlows
const flowIds = Object.keys(config.conceptFlows).map(Number);
const missingFlows = ids.filter(id => !flowIds.includes(id));
console.log('Missing conceptFlows:', missingFlows.length ? missingFlows.join(',') : 'NONE');

// Check for duplicate quiz questions
const dupes = [];
const allQ = [];
for (const l of d) {
  for (let qi = 0; qi < l.quiz.length; qi++) {
    const norm = l.quiz[qi].q.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim();
    allQ.push({id: l.id, qi, q: l.quiz[qi].q, norm});
  }
}
for (let i = 0; i < allQ.length; i++) {
  for (let j = i+1; j < allQ.length; j++) {
    if (allQ[i].norm === allQ[j].norm) {
      dupes.push(`L${allQ[i].id}.Q${allQ[i].qi} === L${allQ[j].id}.Q${allQ[j].qi}: "${allQ[i].q}"`);
    }
  }
}
console.log('Duplicate quizzes:', dupes.length ? '\n  ' + dupes.join('\n  ') : 'NONE');

console.log('\n=== VALIDATION COMPLETE ===');
