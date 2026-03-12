// ============================================
// MATH INTERACTIVE PLUGIN — Teamz Lab Learning
// Injected via COURSE_CONFIG.plugins for math courses
// SOLID: Open/Closed — learn.html unchanged, features added externally
// ============================================
(function(){
'use strict';

// === Theme-aware colors ===
function isDark(){return document.documentElement.getAttribute('data-theme')!=='light';}
function C(){
  const d=isDark();
  return{
    // Dark mode: bright colors on dark bg. Light mode: dark/rich colors on white bg.
    primary:d?'#7CB3FF':'#1a5fb4',       // blue
    secondary:d?'#4ECDC4':'#0d7377',     // teal
    tertiary:d?'#FF6B6B':'#c01c28',      // red
    quaternary:d?'#45B7D1':'#1a73a7',    // cyan-blue
    purple:d?'#A78BFA':'#6c3db8',
    orange:d?'#FB923C':'#c64600',
    pink:d?'#F472B6':'#a8318e',
    grid:d?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)',
    gridStrong:d?'rgba(255,255,255,0.15)':'rgba(0,0,0,0.12)',
    axis:d?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.4)',
    text:d?'#FFFFFF':'#1a1a1a',
    textMuted:d?'rgba(255,255,255,0.6)':'rgba(0,0,0,0.5)',
    bg:d?'#1D1F25':'#FFFFFF',
    surface:d?'#12151A':'#F8F9FA',
    fill:d?'rgba(124,179,255,0.1)':'rgba(26,95,180,0.08)',
    fillSecondary:d?'rgba(78,205,196,0.12)':'rgba(13,115,119,0.08)',
    fillTertiary:d?'rgba(255,107,107,0.12)':'rgba(192,28,40,0.08)'
  };
}
// Equation/chart color palettes — theme-aware
function eqPalette(){
  var d=isDark();
  return d
    ?['#7CB3FF','#4ECDC4','#FF6B6B','#45B7D1','#A78BFA']
    :['#1a5fb4','#0d7377','#c01c28','#1a73a7','#6c3db8'];
}
function chartPalette(){
  var d=isDark();
  return d
    ?['#7CB3FF','#4ECDC4','#FF6B6B','#45B7D1','#A78BFA','#FB923C','#F472B6','#34D399']
    :['#1a5fb4','#0d7377','#c01c28','#1a73a7','#6c3db8','#c64600','#a8318e','#1c8648'];
}

// === Live Info Panel Helper ===
// Creates/updates an educational info panel below the canvas showing formulas & live values
function updateInfoPanel(container,lines){
  var panel=container.querySelector('.interactive-info-panel');
  if(!panel){
    panel=document.createElement('div');
    panel.className='interactive-info-panel';
    var body=container.querySelector('.interactive-area__body');
    if(body) body.appendChild(panel);
    else container.appendChild(panel);
  }
  panel.innerHTML=lines.map(function(l){
    if(l.type==='formula') return '<div class="info-formula">'+l.text+'</div>';
    if(l.type==='value') return '<div class="info-value"><span class="info-label">'+l.label+'</span> <span class="info-num">'+l.value+'</span></div>';
    if(l.type==='hint') return '<div class="info-hint">'+l.text+'</div>';
    return '<div class="info-value">'+l.text+'</div>';
  }).join('');
}

// === High-DPI Canvas Helper ===
function createHiDPICanvas(w,h){
  const canvas=document.createElement('canvas');
  const dpr=window.devicePixelRatio||1;
  canvas.width=w*dpr;canvas.height=h*dpr;
  canvas.style.width=w+'px';canvas.style.height=h+'px';
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);
  canvas._logicalW=w;canvas._logicalH=h;
  return{canvas,ctx,dpr};
}

// ============================================
// 1. STEP-BY-STEP SOLUTION REVEALER
// Transforms code blocks with "ধাপ" patterns
// ============================================
function initStepReveal(container){
  const playground=container.querySelector('.playground');
  if(!playground) return;
  const codeBlock=playground.querySelector('.code-block');
  if(!codeBlock) return;
  const raw=codeBlock.textContent;

  // Detect step patterns
  const hasSteps=/(?:ধাপ\s*[০-৯\d]+|Step\s*\d+)[:\s।—\-]/i.test(raw);
  // Also detect numbered example patterns like উদাহরণ ১, উদাহরণ ২
  const hasExamples=/(?:উদাহরণ\s*[০-৯\d]+|Example\s*\d+)[:\s।—\-]/i.test(raw);
  if(!hasSteps&&!hasExamples) return;

  // Parse into steps
  const lines=raw.split('\n');
  const steps=[];
  let currentStep=null;
  const stepRe=/^(?:ধাপ\s*[০-৯\d]+|Step\s*\d+|উদাহরণ\s*[০-৯\d]+|Example\s*\d+)[:\s।—\-]/i;

  lines.forEach(line=>{
    const trimmed=line.trim();
    if(stepRe.test(trimmed)){
      if(currentStep) steps.push(currentStep);
      // Split title from rest
      const colonIdx=trimmed.search(/[:\s।—\-]/);
      currentStep={title:trimmed,lines:[]};
    }else if(currentStep){
      currentStep.lines.push(line);
    }else{
      // Preamble — create as first step
      if(!steps.length&&trimmed){
        if(!currentStep) currentStep={title:'সমস্যা',lines:[line],isPreamble:true};
        else currentStep.lines.push(line);
      }
    }
  });
  if(currentStep) steps.push(currentStep);
  if(steps.length<2) return;

  // Build step reveal UI
  const wrapper=document.createElement('div');
  wrapper.className='step-reveal';

  // Progress dots
  let dotsHtml='<div class="step-reveal__progress">';
  steps.forEach((_,i)=>{dotsHtml+='<div class="step-reveal__dot" data-step="'+i+'"></div>';});
  dotsHtml+='</div>';

  // Step cards
  let stepsHtml='';
  steps.forEach((s,i)=>{
    const cls=i===0?'step-reveal__step revealed current':'step-reveal__step hidden';
    const content=s.lines.join('\n').trim();
    stepsHtml+='<div class="'+cls+'" data-step="'+i+'">';
    stepsHtml+='<div class="step-reveal__label">'+escHtml(s.title)+'</div>';
    if(content) stepsHtml+='<div class="step-reveal__content">'+escHtml(content)+'</div>';
    stepsHtml+='</div>';
  });

  // Controls
  const ctrlHtml='<div class="step-reveal__actions">'+
    '<button class="step-reveal__btn step-reveal__btn--next" onclick="window.__stepRevealNext(this)">'+
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><polyline points="9 18 15 12 9 6"/></svg> পরের ধাপ</button>'+
    '<button class="step-reveal__btn step-reveal__btn--reset" onclick="window.__stepRevealReset(this)">'+
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 105.34-9.34L1 10"/></svg> আবার দেখো</button>'+
    '<button class="step-reveal__btn step-reveal__btn--all" onclick="window.__stepRevealAll(this)">সব দেখো</button>'+
    '<span class="step-reveal__counter">১/'+toBanglaNum(steps.length)+'</span>'+
    '</div>';

  wrapper.innerHTML=dotsHtml+stepsHtml+ctrlHtml;

  // Replace the playground content (keep the header)
  const playgroundHeader=playground.querySelector('.playground-header');
  // Also check for walkthrough container
  const existingContent=playground.querySelector('.code-block')||playground.querySelector('.walkthrough-container');
  if(existingContent){
    existingContent.replaceWith(wrapper);
  }
  // Update first dot
  const firstDot=wrapper.querySelector('.step-reveal__dot');
  if(firstDot) firstDot.classList.add('done','current');
}

// Step reveal global handlers
window.__stepRevealNext=function(btn){
  const reveal=btn.closest('.step-reveal');
  if(!reveal) return;
  const steps=reveal.querySelectorAll('.step-reveal__step');
  const dots=reveal.querySelectorAll('.step-reveal__dot');
  let currentIdx=-1;
  steps.forEach((s,i)=>{if(s.classList.contains('current')) currentIdx=i;});
  const nextIdx=currentIdx+1;
  if(nextIdx>=steps.length) return;

  // Reveal next step
  steps[nextIdx].classList.remove('hidden');
  steps[nextIdx].classList.add('revealed','current');
  if(currentIdx>=0) steps[currentIdx].classList.remove('current');
  dots[nextIdx].classList.add('done','current');
  if(currentIdx>=0) dots[currentIdx].classList.remove('current');

  // Update counter
  const counter=reveal.querySelector('.step-reveal__counter');
  if(counter) counter.textContent=toBanglaNum(nextIdx+1)+'/'+toBanglaNum(steps.length);

  // Scroll into view
  steps[nextIdx].scrollIntoView({behavior:'smooth',block:'nearest'});

  // Disable button if last
  if(nextIdx>=steps.length-1) btn.style.opacity='0.4';
};

window.__stepRevealReset=function(btn){
  const reveal=btn.closest('.step-reveal');
  if(!reveal) return;
  const steps=reveal.querySelectorAll('.step-reveal__step');
  const dots=reveal.querySelectorAll('.step-reveal__dot');
  steps.forEach((s,i)=>{
    if(i===0){s.className='step-reveal__step revealed current';}
    else{s.className='step-reveal__step hidden';}
  });
  dots.forEach((d,i)=>{
    d.classList.remove('done','current');
    if(i===0) d.classList.add('done','current');
  });
  const counter=reveal.querySelector('.step-reveal__counter');
  if(counter) counter.textContent='১/'+toBanglaNum(steps.length);
  const nextBtn=reveal.querySelector('.step-reveal__btn--next');
  if(nextBtn) nextBtn.style.opacity='1';
};

window.__stepRevealAll=function(btn){
  const reveal=btn.closest('.step-reveal');
  if(!reveal) return;
  const steps=reveal.querySelectorAll('.step-reveal__step');
  const dots=reveal.querySelectorAll('.step-reveal__dot');
  steps.forEach(s=>{s.className='step-reveal__step revealed';});
  steps[steps.length-1].classList.add('current');
  dots.forEach(d=>{d.classList.add('done');d.classList.remove('current');});
  dots[dots.length-1].classList.add('current');
  const counter=reveal.querySelector('.step-reveal__counter');
  if(counter) counter.textContent=toBanglaNum(steps.length)+'/'+toBanglaNum(steps.length);
  const nextBtn=reveal.querySelector('.step-reveal__btn--next');
  if(nextBtn) nextBtn.style.opacity='0.4';
};

// ============================================
// 2. GEOMETRY CANVAS
// Draws interactive triangles, circles, quadrilaterals, etc.
// ============================================
function drawGeometry(container,config){
  const w=Math.min(container.offsetWidth-32,500);
  const h=Math.round(w*0.75);
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  const c=C();
  const type=config.shape||'triangle';
  let pts=(config.vertices||[]).map(p=>({x:p.x,y:p.y}));
  const labels=config.labels||[];
  const showAngles=config.showAngles!==false;
  const showSides=config.showSides!==false;
  const showGrid=config.showGrid!==false;

  // Default shapes if no vertices provided
  if(!pts.length){
    const cx=w/2,cy=h/2;
    if(type==='triangle') pts=[{x:cx-120,y:cy+80},{x:cx+120,y:cy+80},{x:cx,y:cy-100}];
    else if(type==='circle') pts=[{x:cx,y:cy},{x:cx+80,y:cy}]; // center, point on circle
    else if(type==='quadrilateral') pts=[{x:cx-100,y:cy-60},{x:cx+100,y:cy-60},{x:cx+120,y:cy+80},{x:cx-80,y:cy+80}];
    else if(type==='rectangle') pts=[{x:cx-110,y:cy-60},{x:cx+110,y:cy-60},{x:cx+110,y:cy+60},{x:cx-110,y:cy+60}];
    else if(type==='parallelogram') pts=[{x:cx-80,y:cy+60},{x:cx+80,y:cy+60},{x:cx+120,y:cy-60},{x:cx-40,y:cy-60}];
  }

  let dragging=-1;

  function dist(a,b){return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);}
  function midpoint(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2};}
  function angle(a,b,c){
    const ba={x:a.x-b.x,y:a.y-b.y};
    const bc={x:c.x-b.x,y:c.y-b.y};
    const dot=ba.x*bc.x+ba.y*bc.y;
    const cross=ba.x*bc.y-ba.y*bc.x;
    return Math.atan2(Math.abs(cross),dot)*180/Math.PI;
  }

  function draw(){
    const c=C();
    ctx.clearRect(0,0,w,h);

    // Grid
    if(showGrid){
      ctx.strokeStyle=c.grid;ctx.lineWidth=0.5;
      for(let x=0;x<w;x+=20){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
      for(let y=0;y<h;y+=20){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    }

    if(type==='circle'&&pts.length>=2){
      drawCircleShape(ctx,pts,labels,c,showAngles,showSides);
      // Circle info panel
      var cr=dist(pts[0],pts[1]);
      updateInfoPanel(container,[
        {type:'formula',text:'📐 পরিধি = 2πr, ক্ষেত্রফল = πr²'},
        {type:'value',label:'ব্যাসার্ধ (r) =',value:cr.toFixed(1)},
        {type:'value',label:'ব্যাস (d=2r) =',value:(2*cr).toFixed(1)},
        {type:'value',label:'পরিধি (2πr) =',value:(2*Math.PI*cr).toFixed(1)},
        {type:'value',label:'ক্ষেত্রফল (πr²) =',value:(Math.PI*cr*cr).toFixed(1)+' বর্গ একক'},
        {type:'hint',text:'💡 বিন্দু টানো — ব্যাসার্ধ বদলালে ক্ষেত্রফল r² হারে বাড়ে!'}
      ]);
      return;
    }

    if(pts.length<3) return;

    // Fill
    ctx.beginPath();
    ctx.moveTo(pts[0].x,pts[0].y);
    for(let i=1;i<pts.length;i++) ctx.lineTo(pts[i].x,pts[i].y);
    ctx.closePath();
    ctx.fillStyle=c.fill;
    ctx.fill();

    // Edges
    ctx.strokeStyle=c.primary;ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(pts[0].x,pts[0].y);
    for(let i=1;i<pts.length;i++) ctx.lineTo(pts[i].x,pts[i].y);
    ctx.closePath();
    ctx.stroke();

    // Side lengths
    if(showSides){
      ctx.font='600 13px Poppins,sans-serif';ctx.fillStyle=c.secondary;ctx.textAlign='center';
      for(let i=0;i<pts.length;i++){
        const j=(i+1)%pts.length;
        const d=dist(pts[i],pts[j]);
        const m=midpoint(pts[i],pts[j]);
        // Offset label away from center
        const cx=pts.reduce((s,p)=>s+p.x,0)/pts.length;
        const cy=pts.reduce((s,p)=>s+p.y,0)/pts.length;
        const dx=m.x-cx,dy=m.y-cy;
        const len=Math.sqrt(dx*dx+dy*dy)||1;
        ctx.fillText(d.toFixed(1),m.x+dx/len*16,m.y+dy/len*16+4);
      }
    }

    // Angles
    if(showAngles&&pts.length>=3){
      ctx.font='500 11px Poppins,sans-serif';ctx.fillStyle=c.tertiary;
      for(let i=0;i<pts.length;i++){
        const prev=pts[(i-1+pts.length)%pts.length];
        const curr=pts[i];
        const next=pts[(i+1)%pts.length];
        const a=angle(prev,curr,next);
        // Draw arc
        const r=20;
        const a1=Math.atan2(prev.y-curr.y,prev.x-curr.x);
        const a2=Math.atan2(next.y-curr.y,next.x-curr.x);
        ctx.strokeStyle=c.tertiary;ctx.lineWidth=1.5;
        ctx.beginPath();ctx.arc(curr.x,curr.y,r,Math.min(a1,a2),Math.max(a1,a2));ctx.stroke();
        // Label
        const mid=(a1+a2)/2;
        ctx.fillText(a.toFixed(0)+'°',curr.x+Math.cos(mid)*32,curr.y+Math.sin(mid)*32+4);
      }
    }

    // Vertices
    pts.forEach((p,i)=>{
      ctx.beginPath();ctx.arc(p.x,p.y,7,0,Math.PI*2);
      ctx.fillStyle=dragging===i?c.primary:c.secondary;
      ctx.fill();
      ctx.strokeStyle=c.bg;ctx.lineWidth=2;ctx.stroke();
      // Label
      if(labels[i]){
        ctx.font='700 14px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
        const cx=pts.reduce((s,pt)=>s+pt.x,0)/pts.length;
        const cy=pts.reduce((s,pt)=>s+pt.y,0)/pts.length;
        const dx=p.x-cx,dy=p.y-cy;
        const len=Math.sqrt(dx*dx+dy*dy)||1;
        ctx.fillText(labels[i],p.x+dx/len*18,p.y+dy/len*18+5);
      }
    });

    // === LIVE FORMULA PANEL ===
    var infoLines=[];
    if(type==='triangle'&&pts.length===3){
      var sA=dist(pts[1],pts[2]),sB=dist(pts[0],pts[2]),sC=dist(pts[0],pts[1]);
      var s=(sA+sB+sC)/2;
      var area=Math.sqrt(Math.max(0,s*(s-sA)*(s-sB)*(s-sC)));
      var angA=angle(pts[2],pts[0],pts[1]),angB=angle(pts[0],pts[1],pts[2]),angC=angle(pts[1],pts[2],pts[0]);
      infoLines.push({type:'formula',text:'📐 হেরনের সূত্র: ক্ষেত্রফল = √(s(s-a)(s-b)(s-c))'});
      infoLines.push({type:'value',label:'বাহু a =',value:sA.toFixed(1)});
      infoLines.push({type:'value',label:'b =',value:sB.toFixed(1)});
      infoLines.push({type:'value',label:'c =',value:sC.toFixed(1)});
      infoLines.push({type:'value',label:'s (অর্ধপরিসীমা) =',value:s.toFixed(1)});
      infoLines.push({type:'value',label:'পরিসীমা =',value:(sA+sB+sC).toFixed(1)});
      infoLines.push({type:'value',label:'ক্ষেত্রফল =',value:area.toFixed(1)+' বর্গ একক'});
      infoLines.push({type:'value',label:'∠A =',value:angA.toFixed(1)+'°'});
      infoLines.push({type:'value',label:'∠B =',value:angB.toFixed(1)+'°'});
      infoLines.push({type:'value',label:'∠C =',value:angC.toFixed(1)+'°'});
      infoLines.push({type:'value',label:'কোণের যোগফল =',value:(angA+angB+angC).toFixed(1)+'°'});
      infoLines.push({type:'hint',text:'💡 শীর্ষবিন্দু টেনে দেখো — কোণের যোগফল সবসময় ১৮০° থাকে!'});
    }else if((type==='quadrilateral'||type==='rectangle'||type==='parallelogram')&&pts.length===4){
      var sides=[dist(pts[0],pts[1]),dist(pts[1],pts[2]),dist(pts[2],pts[3]),dist(pts[3],pts[0])];
      var peri=sides[0]+sides[1]+sides[2]+sides[3];
      // Shoelace area
      var areaQ=Math.abs((pts[0].x*(pts[1].y-pts[3].y)+pts[1].x*(pts[2].y-pts[0].y)+pts[2].x*(pts[3].y-pts[1].y)+pts[3].x*(pts[0].y-pts[2].y))/2);
      var angles4=[];
      for(var ai=0;ai<4;ai++) angles4.push(angle(pts[(ai-1+4)%4],pts[ai],pts[(ai+1)%4]));
      infoLines.push({type:'formula',text:'📐 শোলেস সূত্র: ক্ষেত্রফল = ½|Σ(xᵢyᵢ₊₁ − xᵢ₊₁yᵢ)|'});
      infoLines.push({type:'value',label:'বাহু:',value:sides.map(function(s){return s.toFixed(1);}).join(', ')});
      infoLines.push({type:'value',label:'পরিসীমা =',value:peri.toFixed(1)});
      infoLines.push({type:'value',label:'ক্ষেত্রফল =',value:areaQ.toFixed(1)+' বর্গ একক'});
      infoLines.push({type:'value',label:'কোণ:',value:angles4.map(function(a){return a.toFixed(1)+'°';}).join(', ')});
      infoLines.push({type:'value',label:'কোণের যোগফল =',value:angles4.reduce(function(s,a){return s+a;},0).toFixed(1)+'°'});
      infoLines.push({type:'hint',text:'💡 বিন্দু সরাও — চতুর্ভুজের কোণের যোগফল সবসময় ৩৬০°!'});
    }
    if(infoLines.length) updateInfoPanel(container,infoLines);
  }

  function drawCircleShape(ctx,pts,labels,c,showAngles,showSides){
    const center=pts[0],edge=pts[1];
    const r=dist(center,edge);

    // Circle
    ctx.beginPath();ctx.arc(center.x,center.y,r,0,Math.PI*2);
    ctx.fillStyle=c.fill;ctx.fill();
    ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.stroke();

    // Radius line
    ctx.beginPath();ctx.moveTo(center.x,center.y);ctx.lineTo(edge.x,edge.y);
    ctx.strokeStyle=c.secondary;ctx.lineWidth=1.5;ctx.stroke();

    // Radius label
    if(showSides){
      const m=midpoint(center,edge);
      ctx.font='600 13px Poppins,sans-serif';ctx.fillStyle=c.secondary;ctx.textAlign='center';
      ctx.fillText('r='+r.toFixed(1),m.x,m.y-8);
    }

    // Diameter line (dashed)
    const dx=edge.x-center.x,dy=edge.y-center.y;
    const opp={x:center.x-dx,y:center.y-dy};
    ctx.setLineDash([5,5]);
    ctx.beginPath();ctx.moveTo(opp.x,opp.y);ctx.lineTo(edge.x,edge.y);
    ctx.strokeStyle=c.tertiary;ctx.lineWidth=1;ctx.stroke();
    ctx.setLineDash([]);

    // Center point
    ctx.beginPath();ctx.arc(center.x,center.y,5,0,Math.PI*2);
    ctx.fillStyle=c.primary;ctx.fill();
    ctx.font='700 13px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
    ctx.fillText(labels[0]||'O',center.x,center.y-12);

    // Edge point
    ctx.beginPath();ctx.arc(edge.x,edge.y,5,0,Math.PI*2);
    ctx.fillStyle=c.secondary;ctx.fill();
    if(labels[1]){
      ctx.fillStyle=c.text;ctx.fillText(labels[1],edge.x+12,edge.y-8);
    }
  }

  // Drag interaction
  function getCanvasPos(e){
    const rect=canvas.getBoundingClientRect();
    const touch=e.touches?e.touches[0]:e;
    return{x:touch.clientX-rect.left,y:touch.clientY-rect.top};
  }

  canvas.addEventListener('mousedown',function(e){
    const pos=getCanvasPos(e);
    pts.forEach((p,i)=>{if(dist(p,pos)<15) dragging=i;});
  });
  canvas.addEventListener('touchstart',function(e){
    e.preventDefault();
    const pos=getCanvasPos(e);
    pts.forEach((p,i)=>{if(dist(p,pos)<20) dragging=i;});
  },{passive:false});

  function onMove(e){
    if(dragging<0) return;
    const pos=getCanvasPos(e);
    pts[dragging].x=Math.max(10,Math.min(w-10,pos.x));
    pts[dragging].y=Math.max(10,Math.min(h-10,pos.y));
    draw();
  }
  canvas.addEventListener('mousemove',onMove);
  canvas.addEventListener('touchmove',function(e){e.preventDefault();onMove(e);},{passive:false});

  function stopDrag(){dragging=-1;draw();}
  canvas.addEventListener('mouseup',stopDrag);
  canvas.addEventListener('mouseleave',stopDrag);
  canvas.addEventListener('touchend',stopDrag);

  draw();

  // Redraw on theme change
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 3. GRAPH PLOTTER
// Interactive coordinate plane with equations
// ============================================
function drawGraph(container,config){
  const w=Math.min(container.offsetWidth-32,500);
  const h=Math.round(w*0.85);
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  // Mutable view ranges for pan/zoom
  let xMin=config.xRange?config.xRange[0]:-10;
  let xMax=config.xRange?config.xRange[1]:10;
  let yMin=config.yRange?config.yRange[0]:-10;
  let yMax=config.yRange?config.yRange[1]:10;
  const equations=config.equations||[];
  const points=config.points||[];
  // Use theme-aware palette (recalculated on each draw)
  var eqColors=eqPalette();

  // Mouse state
  let mouseX=-1,mouseY=-1;
  let panning=false,panStartX=0,panStartY=0,panXMin=0,panXMax=0,panYMin=0,panYMax=0;

  // Parsed equation functions (cached)
  const parsedEqs=equations.map(eq=>({text:eq,fn:parseEquation(eq)}));

  function toCanvas(x,y){
    return{
      cx:((x-xMin)/(xMax-xMin))*w,
      cy:h-((y-yMin)/(yMax-yMin))*h
    };
  }
  function fromCanvas(cx,cy){
    return{
      x:xMin+(cx/w)*(xMax-xMin),
      y:yMin+((h-cy)/h)*(yMax-yMin)
    };
  }

  function draw(){
    const c=C();
    eqColors=eqPalette();
    ctx.clearRect(0,0,w,h);

    // Grid
    ctx.strokeStyle=c.grid;ctx.lineWidth=0.5;
    const xStep=calcStep(xMax-xMin);
    const yStep=calcStep(yMax-yMin);
    for(let x=Math.ceil(xMin/xStep)*xStep;x<=xMax;x+=xStep){
      const{cx}=toCanvas(x,0);
      ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,h);ctx.stroke();
    }
    for(let y=Math.ceil(yMin/yStep)*yStep;y<=yMax;y+=yStep){
      const{cy}=toCanvas(0,y);
      ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(w,cy);ctx.stroke();
    }

    // Axes
    const origin=toCanvas(0,0);
    ctx.strokeStyle=c.axis;ctx.lineWidth=1.5;
    if(origin.cy>=0&&origin.cy<=h){ctx.beginPath();ctx.moveTo(0,origin.cy);ctx.lineTo(w,origin.cy);ctx.stroke();}
    if(origin.cx>=0&&origin.cx<=w){ctx.beginPath();ctx.moveTo(origin.cx,0);ctx.lineTo(origin.cx,h);ctx.stroke();}

    // Axis labels
    ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='center';
    for(let x=Math.ceil(xMin/xStep)*xStep;x<=xMax;x+=xStep){
      if(Math.abs(x)<0.001) continue;
      const{cx}=toCanvas(x,0);
      const axY=Math.max(12,Math.min(h-4,origin.cy+14));
      ctx.fillText(formatNum(x),cx,axY);
    }
    ctx.textAlign='right';
    for(let y=Math.ceil(yMin/yStep)*yStep;y<=yMax;y+=yStep){
      if(Math.abs(y)<0.001) continue;
      const{cy}=toCanvas(0,y);
      const axX=Math.max(22,Math.min(w-4,origin.cx-6));
      ctx.fillText(formatNum(y),axX,cy+4);
    }

    // Origin
    if(origin.cx>10&&origin.cx<w-10&&origin.cy>10&&origin.cy<h-10){
      ctx.textAlign='right';ctx.fillText('O',origin.cx-6,origin.cy+14);
    }
    // X/Y arrows
    ctx.font='700 12px Poppins,sans-serif';ctx.fillStyle=c.text;
    ctx.textAlign='left';ctx.fillText('x',w-16,Math.max(12,Math.min(h-4,origin.cy-6)));
    ctx.textAlign='center';ctx.fillText('y',Math.max(14,Math.min(w-14,origin.cx+14)),14);

    // Plot equations
    parsedEqs.forEach((eq,idx)=>{
      if(!eq.fn) return;
      ctx.strokeStyle=eqColors[idx%eqColors.length];
      ctx.lineWidth=2.5;
      ctx.beginPath();
      let started=false;
      for(let px=0;px<w;px++){
        const x=xMin+(px/w)*(xMax-xMin);
        const y=eq.fn(x);
        if(isNaN(y)||!isFinite(y)||y<yMin-(yMax-yMin)*0.5||y>yMax+(yMax-yMin)*0.5){started=false;continue;}
        const{cx,cy}=toCanvas(x,y);
        if(!started){ctx.moveTo(cx,cy);started=true;}
        else ctx.lineTo(cx,cy);
      }
      ctx.stroke();

      // Equation label
      ctx.font='600 11px Poppins,sans-serif';
      ctx.fillStyle=eqColors[idx%eqColors.length];
      ctx.textAlign='left';
      ctx.fillText(eq.text,8,22+idx*18);
    });

    // Plot fixed points
    points.forEach(p=>{
      const{cx,cy}=toCanvas(p.x,p.y);
      ctx.beginPath();ctx.arc(cx,cy,5,0,Math.PI*2);
      ctx.fillStyle=p.color||c.tertiary;ctx.fill();
      ctx.strokeStyle=c.bg;ctx.lineWidth=2;ctx.stroke();
      if(p.label){
        ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='left';
        ctx.fillText(p.label,cx+8,cy-6);
      }else{
        ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='left';
        ctx.fillText('('+p.x+','+p.y+')',cx+8,cy-6);
      }
    });

    // === CROSSHAIR & TRACE ===
    if(mouseX>=0&&mouseX<=w&&mouseY>=0&&mouseY<=h&&!panning){
      const m=fromCanvas(mouseX,mouseY);

      // Crosshair lines (dashed)
      ctx.setLineDash([4,4]);ctx.strokeStyle=c.textMuted;ctx.lineWidth=0.8;
      ctx.beginPath();ctx.moveTo(mouseX,0);ctx.lineTo(mouseX,h);ctx.stroke();
      ctx.beginPath();ctx.moveTo(0,mouseY);ctx.lineTo(w,mouseY);ctx.stroke();
      ctx.setLineDash([]);

      // Coordinate tooltip at cursor
      ctx.font='600 11px Poppins,sans-serif';ctx.textAlign='left';
      const label='('+m.x.toFixed(2)+', '+m.y.toFixed(2)+')';
      const tw=ctx.measureText(label).width+8;
      const tx=mouseX+12+tw>w?mouseX-tw-4:mouseX+12;
      const ty=mouseY-10<0?mouseY+20:mouseY-10;
      ctx.fillStyle=c.bg;ctx.globalAlpha=0.85;
      ctx.fillRect(tx-4,ty-12,tw,18);
      ctx.globalAlpha=1;ctx.fillStyle=c.text;
      ctx.fillText(label,tx,ty);

      // Trace dots on each equation at this x
      var graphInfoLines=[{type:'formula',text:'📊 x = '+m.x.toFixed(2)+' এ সমীকরণের মান:'}];
      parsedEqs.forEach((eq,idx)=>{
        if(!eq.fn) return;
        const yVal=eq.fn(m.x);
        if(isNaN(yVal)||!isFinite(yVal)) return;
        const{cx,cy}=toCanvas(m.x,yVal);

        graphInfoLines.push({type:'value',label:eq.text+' →',value:'y = '+yVal.toFixed(3)});

        if(cy<-20||cy>h+20) return;

        // Dot on curve
        ctx.beginPath();ctx.arc(cx,cy,6,0,Math.PI*2);
        ctx.fillStyle=eqColors[idx%eqColors.length];ctx.fill();
        ctx.strokeStyle=c.bg;ctx.lineWidth=2;ctx.stroke();

        // y-value label
        const yLabel='y='+yVal.toFixed(2);
        const yw=ctx.measureText(yLabel).width+8;
        const ylx=cx+10+yw>w?cx-yw-4:cx+10;
        ctx.font='500 10px Poppins,sans-serif';
        ctx.fillStyle=c.bg;ctx.globalAlpha=0.85;
        ctx.fillRect(ylx-3,cy-16,yw,16);
        ctx.globalAlpha=1;ctx.fillStyle=eqColors[idx%eqColors.length];
        ctx.fillText(yLabel,ylx,cy-4);
      });
      graphInfoLines.push({type:'hint',text:'💡 x বদলালে y কিভাবে বদলায় লক্ষ্য করো — এটাই ফাংশনের আচরণ!'});
      updateInfoPanel(container,graphInfoLines);
    }else{
      // Default info when not hovering
      var defaultInfo=[{type:'formula',text:'📊 সমীকরণ: '+equations.join(' , ')}];
      defaultInfo.push({type:'hint',text:'💡 মাউস ঘুরাও → প্রতিটি x-এ y-এর মান দেখো | টেনে সরাও | স্ক্রল করে জুম করো'});
      updateInfoPanel(container,defaultInfo);
    }
  }

  // === MOUSE/TOUCH EVENTS ===
  function getPos(e){
    const rect=canvas.getBoundingClientRect();
    const touch=e.touches?e.touches[0]:e;
    return{x:touch.clientX-rect.left,y:touch.clientY-rect.top};
  }

  // Hover — crosshair trace
  canvas.addEventListener('mousemove',function(e){
    const p=getPos(e);
    if(panning){
      const dx=(p.x-panStartX)/w*(panXMax-panXMin);
      const dy=-(p.y-panStartY)/h*(panYMax-panYMin);
      xMin=panXMin-dx;xMax=panXMax-dx;
      yMin=panYMin-dy;yMax=panYMax-dy;
      draw();return;
    }
    mouseX=p.x;mouseY=p.y;
    draw();
  });
  canvas.addEventListener('mouseleave',function(){mouseX=-1;mouseY=-1;panning=false;draw();});

  // Pan — drag to move the view
  canvas.addEventListener('mousedown',function(e){
    const p=getPos(e);
    panning=true;panStartX=p.x;panStartY=p.y;
    panXMin=xMin;panXMax=xMax;panYMin=yMin;panYMax=yMax;
    canvas.style.cursor='grabbing';
  });
  canvas.addEventListener('mouseup',function(){panning=false;canvas.style.cursor='crosshair';});

  // Touch pan
  canvas.addEventListener('touchstart',function(e){
    e.preventDefault();
    const p=getPos(e);
    panning=true;panStartX=p.x;panStartY=p.y;
    panXMin=xMin;panXMax=xMax;panYMin=yMin;panYMax=yMax;
  },{passive:false});
  canvas.addEventListener('touchmove',function(e){
    e.preventDefault();
    const p=getPos(e);
    if(panning){
      const dx=(p.x-panStartX)/w*(panXMax-panXMin);
      const dy=-(p.y-panStartY)/h*(panYMax-panYMin);
      xMin=panXMin-dx;xMax=panXMax-dx;
      yMin=panYMin-dy;yMax=panYMax-dy;
      draw();
    }
  },{passive:false});
  canvas.addEventListener('touchend',function(){panning=false;});

  // Zoom — scroll wheel
  canvas.addEventListener('wheel',function(e){
    e.preventDefault();
    const p=getPos(e);
    const m=fromCanvas(p.x,p.y);
    const factor=e.deltaY>0?1.15:0.87; // zoom out / zoom in
    const newXSpan=(xMax-xMin)*factor;
    const newYSpan=(yMax-yMin)*factor;
    // Zoom centered on mouse position
    const xRatio=(m.x-xMin)/(xMax-xMin);
    const yRatio=(m.y-yMin)/(yMax-yMin);
    xMin=m.x-xRatio*newXSpan;xMax=m.x+(1-xRatio)*newXSpan;
    yMin=m.y-yRatio*newYSpan;yMax=m.y+(1-yRatio)*newYSpan;
    draw();
  },{passive:false});

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

  // Add reset button to controls
  const controls=document.createElement('div');
  controls.className='interactive-area__controls';
  controls.innerHTML='<button class="interactive-area__btn" onclick="this.__resetGraph()">রিসেট</button>'+
    '<span class="interactive-area__info">মাউস ঘুরাও → স্থানাঙ্ক দেখো | টেনে নাও → সরাও | স্ক্রল → জুম</span>';
  controls.querySelector('button').__resetGraph=function(){
    xMin=config.xRange?config.xRange[0]:-10;xMax=config.xRange?config.xRange[1]:10;
    yMin=config.yRange?config.yRange[0]:-10;yMax=config.yRange?config.yRange[1]:10;
    draw();
  };
  container.appendChild(controls);
}

function parseEquation(eq){
  // Parse "y = ..." format
  let expr=eq.replace(/^y\s*=\s*/i,'').trim();
  // Replace common math notation with JS
  expr=expr.replace(/(\d)(x)/g,'$1*x');
  expr=expr.replace(/\^/g,'**');
  expr=expr.replace(/√\(([^)]+)\)/g,'Math.sqrt($1)');
  expr=expr.replace(/sin\(/g,'Math.sin(');
  expr=expr.replace(/cos\(/g,'Math.cos(');
  expr=expr.replace(/tan\(/g,'Math.tan(');
  expr=expr.replace(/abs\(/g,'Math.abs(');
  expr=expr.replace(/π/g,'Math.PI');
  try{return new Function('x','return '+expr);}
  catch(e){return null;}
}

function calcStep(range){
  if(range<=5) return 0.5;
  if(range<=10) return 1;
  if(range<=20) return 2;
  if(range<=50) return 5;
  return 10;
}
function formatNum(n){return Math.abs(n-Math.round(n))<0.001?Math.round(n).toString():n.toFixed(1);}

// ============================================
// 4. NUMBER LINE
// Interactive number line for real numbers, sets
// ============================================
function drawNumberLine(container,config){
  const w=Math.min(container.offsetWidth-32,500);
  const h=80;
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  const range=config.range||[-5,5];
  const points=config.points||[];
  const intervals=config.intervals||[];
  const step=config.step||1;

  function toX(val){return 40+((val-range[0])/(range[1]-range[0]))*(w-80);}

  function draw(){
    const c=C();
    ctx.clearRect(0,0,w,h);
    const y=h/2;

    // Intervals (shaded regions)
    intervals.forEach(iv=>{
      const x1=toX(iv.from);
      const x2=toX(iv.to);
      ctx.fillStyle=iv.color||c.fill;
      ctx.fillRect(x1,y-12,x2-x1,24);
      if(iv.label){
        ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='center';
        ctx.fillText(iv.label,(x1+x2)/2,y-18);
      }
    });

    // Main line
    ctx.strokeStyle=c.axis;ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(20,y);ctx.lineTo(w-20,y);ctx.stroke();
    // Arrows
    ctx.beginPath();ctx.moveTo(w-20,y);ctx.lineTo(w-28,y-5);ctx.lineTo(w-28,y+5);ctx.closePath();ctx.fillStyle=c.axis;ctx.fill();
    ctx.beginPath();ctx.moveTo(20,y);ctx.lineTo(28,y-5);ctx.lineTo(28,y+5);ctx.closePath();ctx.fill();

    // Tick marks
    ctx.strokeStyle=c.gridStrong;ctx.lineWidth=1;
    ctx.font='500 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
    for(let v=Math.ceil(range[0]/step)*step;v<=range[1];v+=step){
      const x=toX(v);
      ctx.beginPath();ctx.moveTo(x,y-6);ctx.lineTo(x,y+6);ctx.stroke();
      ctx.fillText(toBanglaNum(v),x,y+22);
    }

    // Points
    points.forEach(p=>{
      const x=toX(p.value);
      ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);
      ctx.fillStyle=p.color||c.primary;ctx.fill();
      ctx.strokeStyle=c.bg;ctx.lineWidth=2;ctx.stroke();
      if(p.label){
        ctx.font='600 12px Poppins,sans-serif';ctx.fillStyle=p.color||c.primary;ctx.textAlign='center';
        ctx.fillText(p.label,x,y-14);
      }
    });

    // Info panel
    var nlInfo=[];
    if(points.length){
      nlInfo.push({type:'formula',text:'📊 সংখ্যারেখায় চিহ্নিত বিন্দু:'});
      points.forEach(function(p){
        nlInfo.push({type:'value',label:(p.label||'বিন্দু')+' =',value:toBanglaNum(p.value)});
      });
      if(points.length>1){
        var sorted=points.slice().sort(function(a,b){return a.value-b.value;});
        var diff=sorted[sorted.length-1].value-sorted[0].value;
        nlInfo.push({type:'value',label:'দূরত্ব =',value:toBanglaNum(diff)});
      }
    }
    if(intervals.length){
      intervals.forEach(function(iv){
        nlInfo.push({type:'value',label:(iv.label||'ব্যবধান')+':',value:toBanglaNum(iv.from)+' থেকে '+toBanglaNum(iv.to)});
      });
    }
    if(nlInfo.length) updateInfoPanel(container,nlInfo);
  }

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 5. VENN DIAGRAM
// For set theory lessons
// ============================================
function drawVenn(container,config){
  const w=Math.min(container.offsetWidth-32,400);
  const h=Math.round(w*0.7);
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  const sets=config.sets||[{label:'A'},{label:'B'}];
  const highlight=config.highlight||''; // 'union','intersection','difference','complement'

  function draw(){
    const c=C();
    ctx.clearRect(0,0,w,h);
    const cx=w/2,cy=h/2-5;
    const r=Math.min(w,h)*0.28;
    const offset=r*0.55;

    // Universal set rectangle
    ctx.strokeStyle=c.gridStrong;ctx.lineWidth=1.5;ctx.setLineDash([5,5]);
    ctx.strokeRect(15,15,w-30,h-30);ctx.setLineDash([]);
    ctx.font='500 12px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='right';
    ctx.fillText('U',w-22,30);

    const x1=cx-offset,x2=cx+offset;

    // Highlight regions
    if(highlight==='union'){
      ctx.globalAlpha=0.15;
      ctx.beginPath();ctx.arc(x1,cy,r,0,Math.PI*2);ctx.fillStyle=c.primary;ctx.fill();
      ctx.beginPath();ctx.arc(x2,cy,r,0,Math.PI*2);ctx.fillStyle=c.primary;ctx.fill();
      ctx.globalAlpha=1;
    }else if(highlight==='intersection'){
      ctx.save();
      ctx.beginPath();ctx.arc(x1,cy,r,0,Math.PI*2);ctx.clip();
      ctx.beginPath();ctx.arc(x2,cy,r,0,Math.PI*2);ctx.fillStyle=c.primary;ctx.globalAlpha=0.25;ctx.fill();
      ctx.restore();ctx.globalAlpha=1;
    }else if(highlight==='differenceA'){
      ctx.save();
      ctx.beginPath();ctx.arc(x1,cy,r,0,Math.PI*2);ctx.clip();
      ctx.beginPath();ctx.rect(0,0,w,h);ctx.arc(x2,cy,r,0,Math.PI*2,true);ctx.fillStyle=c.secondary;ctx.globalAlpha=0.2;ctx.fill();
      ctx.restore();ctx.globalAlpha=1;
    }

    // Circle A
    ctx.beginPath();ctx.arc(x1,cy,r,0,Math.PI*2);
    ctx.strokeStyle=c.primary;ctx.lineWidth=2.5;ctx.stroke();

    // Circle B
    ctx.beginPath();ctx.arc(x2,cy,r,0,Math.PI*2);
    ctx.strokeStyle=c.secondary;ctx.lineWidth=2.5;ctx.stroke();

    // Labels
    ctx.font='700 18px Poppins,sans-serif';ctx.textAlign='center';
    ctx.fillStyle=c.primary;ctx.fillText(sets[0].label||'A',x1-r*0.45,cy+5);
    ctx.fillStyle=c.secondary;ctx.fillText(sets[1].label||'B',x2+r*0.45,cy+5);

    // Set contents
    ctx.font='500 11px Poppins,sans-serif';ctx.fillStyle=c.text;
    if(sets[0].elements){
      const onlyA=(sets[0].elements||[]).filter(e=>!(sets[1].elements||[]).includes(e));
      ctx.fillText(onlyA.join(', '),x1-r*0.35,cy+25);
    }
    if(sets[1].elements){
      const onlyB=(sets[1].elements||[]).filter(e=>!(sets[0].elements||[]).includes(e));
      ctx.fillText(onlyB.join(', '),x2+r*0.35,cy+25);
    }
    // Intersection
    if(sets[0].elements&&sets[1].elements){
      const inter=(sets[0].elements||[]).filter(e=>(sets[1].elements||[]).includes(e));
      if(inter.length){
        ctx.fillStyle=c.tertiary;
        ctx.fillText(inter.join(', '),cx,cy+5);
      }
    }

    // Operation label
    if(config.operationLabel){
      ctx.font='600 13px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
      ctx.fillText(config.operationLabel,cx,h-8);
    }

    // Info panel
    var vInfo=[];
    if(sets[0].elements&&sets[1].elements){
      var setA=sets[0].elements||[];
      var setB=sets[1].elements||[];
      var inter=setA.filter(function(e){return setB.includes(e);});
      var union=[].concat(setA);
      setB.forEach(function(e){if(!union.includes(e)) union.push(e);});
      var onlyA=setA.filter(function(e){return !setB.includes(e);});
      var onlyB=setB.filter(function(e){return !setA.includes(e);});
      vInfo.push({type:'formula',text:'📐 সেট অপারেশন:'});
      vInfo.push({type:'value',label:(sets[0].label||'A')+' =',value:'{'+setA.join(', ')+'}'});
      vInfo.push({type:'value',label:(sets[1].label||'B')+' =',value:'{'+setB.join(', ')+'}'});
      vInfo.push({type:'value',label:'A ∩ B (ছেদ) =',value:inter.length?'{'+inter.join(', ')+'}':'∅ (শূন্য সেট)'});
      vInfo.push({type:'value',label:'A ∪ B (সংযোগ) =',value:'{'+union.join(', ')+'}'});
      vInfo.push({type:'value',label:'A − B =',value:onlyA.length?'{'+onlyA.join(', ')+'}':'∅'});
      vInfo.push({type:'value',label:'n(A∪B) =',value:'n(A)+n(B)−n(A∩B) = '+setA.length+'+'+setB.length+'−'+inter.length+' = '+union.length});
      vInfo.push({type:'hint',text:'💡 n(A∪B) = n(A) + n(B) − n(A∩B) — এটাই সেট তত্ত্বের মূল সূত্র!'});
    }
    if(vInfo.length) updateInfoPanel(container,vInfo);
  }

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 6. BAR / PIE CHART (Statistics lessons)
// ============================================
function drawChart(container,config){
  const w=Math.min(container.offsetWidth-32,480);
  const h=Math.round(w*0.65);
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  const type=config.chartType||'bar';
  const data=config.data||[];
  // Theme-aware chart colors
  var barColors=chartPalette();

  function draw(){
    const c=C();
    barColors=chartPalette();
    ctx.clearRect(0,0,w,h);

    if(type==='bar'){
      const maxVal=Math.max(...data.map(d=>d.value));
      const barW=Math.min(40,(w-80)/data.length-8);
      const startX=50;
      const chartH=h-50;

      // Y-axis
      ctx.strokeStyle=c.axis;ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(startX,10);ctx.lineTo(startX,chartH);ctx.lineTo(w-10,chartH);ctx.stroke();

      // Bars
      data.forEach((d,i)=>{
        const x=startX+12+i*(barW+8);
        const barH=(d.value/maxVal)*(chartH-30);
        const y=chartH-barH;
        ctx.fillStyle=barColors[i%barColors.length];
        ctx.beginPath();
        // Rounded top
        const r=Math.min(4,barW/4);
        ctx.moveTo(x,chartH);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
        ctx.lineTo(x+barW-r,y);ctx.quadraticCurveTo(x+barW,y,x+barW,y+r);
        ctx.lineTo(x+barW,chartH);ctx.closePath();ctx.fill();

        // Value
        ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
        ctx.fillText(d.value.toString(),x+barW/2,y-6);
        // Label
        ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;
        ctx.fillText(d.label,x+barW/2,chartH+14);
      });
    }else if(type==='pie'){
      const total=data.reduce((s,d)=>s+d.value,0);
      const cx=w/2,cy=h/2;
      const r=Math.min(w,h)*0.35;
      let startAngle=-Math.PI/2;

      data.forEach((d,i)=>{
        const sliceAngle=(d.value/total)*Math.PI*2;
        ctx.beginPath();ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,r,startAngle,startAngle+sliceAngle);
        ctx.closePath();
        ctx.fillStyle=barColors[i%barColors.length];ctx.fill();
        ctx.strokeStyle=c.bg;ctx.lineWidth=2;ctx.stroke();

        // Label
        const midAngle=startAngle+sliceAngle/2;
        const lx=cx+Math.cos(midAngle)*(r*0.65);
        const ly=cy+Math.sin(midAngle)*(r*0.65);
        ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.bg;ctx.textAlign='center';
        ctx.fillText(Math.round(d.value/total*100)+'%',lx,ly+4);

        startAngle+=sliceAngle;
      });

      // Legend
      ctx.textAlign='left';
      data.forEach((d,i)=>{
        const lx=10,ly=h-8-((data.length-1-i)*16);
        ctx.fillStyle=barColors[i%barColors.length];
        ctx.fillRect(lx,ly-8,10,10);
        ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.text;
        ctx.fillText(d.label,lx+14,ly);
      });
    }

    // Info panel for charts
    var chartInfo=[];
    var total=data.reduce(function(s,d){return s+d.value;},0);
    var maxD=data.reduce(function(a,b){return a.value>b.value?a:b;},{value:0});
    var minD=data.reduce(function(a,b){return a.value<b.value?a:b;},{value:Infinity});
    var avg=total/data.length;
    chartInfo.push({type:'formula',text:'📊 পরিসংখ্যান:'});
    chartInfo.push({type:'value',label:'মোট =',value:total.toFixed(1)});
    chartInfo.push({type:'value',label:'গড় =',value:avg.toFixed(1)});
    chartInfo.push({type:'value',label:'সর্বোচ্চ =',value:maxD.label+' ('+maxD.value+')'});
    chartInfo.push({type:'value',label:'সর্বনিম্ন =',value:minD.label+' ('+minD.value+')'});
    data.forEach(function(d){
      chartInfo.push({type:'value',label:d.label+':',value:d.value+' ('+((d.value/total)*100).toFixed(1)+'%)'});
    });
    chartInfo.push({type:'hint',text:'💡 শতকরা হার = (মান ÷ মোট) × ১০০'});
    updateInfoPanel(container,chartInfo);
  }

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 7. ANGLE VISUALIZER (Trigonometry)
// ============================================
function drawAngle(container,config){
  const w=Math.min(container.offsetWidth-32,400);
  const h=w;
  const{canvas,ctx}=createHiDPICanvas(w,h);
  const body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  let angleDeg=config.angle||45;
  const showTrig=config.showTrig!==false;
  let draggingAngle=false;

  function draw(){
    const c=C();
    ctx.clearRect(0,0,w,h);
    const cx=w/2,cy=h/2;
    const r=Math.min(w,h)*0.35;
    const rad=angleDeg*Math.PI/180;
    const px=cx+r*Math.cos(-rad);
    const py=cy-r*Math.sin(rad); // canvas y is flipped

    // Unit circle
    ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle=c.gridStrong;ctx.lineWidth=1.5;ctx.stroke();

    // Axes
    ctx.strokeStyle=c.axis;ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(cx-r-20,cy);ctx.lineTo(cx+r+20,cy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,cy-r-20);ctx.lineTo(cx,cy+r+20);ctx.stroke();

    // Angle arc
    ctx.beginPath();ctx.arc(cx,cy,r*0.25,0,-rad,rad>0);
    ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.stroke();

    // Angle label
    ctx.font='700 14px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='center';
    const labelR=r*0.35;
    ctx.fillText(angleDeg.toFixed(0)+'°',cx+labelR*Math.cos(-rad/2),cy-labelR*Math.sin(rad/2)+5);

    // Radius line
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(px,py);
    ctx.strokeStyle=c.primary;ctx.lineWidth=2.5;ctx.stroke();

    // sin line (vertical)
    ctx.beginPath();ctx.moveTo(px,cy);ctx.lineTo(px,py);
    ctx.strokeStyle=c.tertiary;ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);

    // cos line (horizontal)
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(px,cy);
    ctx.strokeStyle=c.secondary;ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);

    // Point on circle
    ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);
    ctx.fillStyle=c.primary;ctx.fill();

    // Trig values on canvas
    if(showTrig){
      const sinVal=Math.sin(rad);
      const cosVal=Math.cos(rad);
      const tanVal=Math.tan(rad);
      ctx.font='600 12px Poppins,sans-serif';ctx.textAlign='left';
      ctx.fillStyle=c.tertiary;ctx.fillText('sin θ = '+sinVal.toFixed(3),10,24);
      ctx.fillStyle=c.secondary;ctx.fillText('cos θ = '+cosVal.toFixed(3),10,42);
      ctx.fillStyle=c.quaternary;ctx.fillText('tan θ = '+(Math.abs(tanVal)>100?'∞':tanVal.toFixed(3)),10,60);

      // Info panel with formulas & educational context
      var angleType=angleDeg<90?'সূক্ষ্মকোণ (acute)':angleDeg===90?'সমকোণ (right)':angleDeg<180?'স্থূলকোণ (obtuse)':'প্রবৃদ্ধকোণ (reflex)';
      var infoLines=[
        {type:'formula',text:'📐 একক বৃত্তে: sin θ = লম্ব/অতিভুজ, cos θ = ভূমি/অতিভুজ, tan θ = sin/cos'},
        {type:'value',label:'θ =',value:angleDeg.toFixed(1)+'° ('+angleType+')'},
        {type:'value',label:'রেডিয়ান =',value:rad.toFixed(3)+' rad'},
        {type:'value',label:'sin θ =',value:sinVal.toFixed(4)},
        {type:'value',label:'cos θ =',value:cosVal.toFixed(4)},
        {type:'value',label:'tan θ =',value:Math.abs(tanVal)>1000?'∞ (অসংজ্ঞায়িত)':tanVal.toFixed(4)},
        {type:'value',label:'sin²θ + cos²θ =',value:(sinVal*sinVal+cosVal*cosVal).toFixed(4)+' (সবসময় ১!)'},
        {type:'hint',text:'💡 বিন্দু ঘুরাও — ৩০°, ৪৫°, ৬০°, ৯০° এ sin/cos-এর বিশেষ মান দেখো!'}
      ];
      updateInfoPanel(container,infoLines);
    }
  }

  // Drag to change angle
  function getAngle(e){
    const rect=canvas.getBoundingClientRect();
    const touch=e.touches?e.touches[0]:e;
    const mx=touch.clientX-rect.left-w/2;
    const my=-(touch.clientY-rect.top-h/2);
    return Math.atan2(my,mx)*180/Math.PI;
  }

  canvas.addEventListener('mousedown',function(e){draggingAngle=true;angleDeg=Math.max(0,getAngle(e));draw();});
  canvas.addEventListener('touchstart',function(e){e.preventDefault();draggingAngle=true;angleDeg=Math.max(0,getAngle(e));draw();},{passive:false});
  canvas.addEventListener('mousemove',function(e){if(!draggingAngle)return;angleDeg=Math.max(0,getAngle(e));draw();});
  canvas.addEventListener('touchmove',function(e){if(!draggingAngle)return;e.preventDefault();angleDeg=Math.max(0,getAngle(e));draw();},{passive:false});
  canvas.addEventListener('mouseup',function(){draggingAngle=false;});
  canvas.addEventListener('mouseleave',function(){draggingAngle=false;});
  canvas.addEventListener('touchend',function(){draggingAngle=false;});

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 8. SLIDER — Universal formula explorer
// Drag sliders, see formulas change in real-time
// ============================================
function drawSlider(container,config){
  var sliders=config.sliders||[];
  var formulas=config.formulas||[];
  var hint=config.hint||'';
  var visual=config.visual||''; // 'square','cube','exponent','none'
  var body=container.querySelector('.interactive-area__body')||container;

  // Build slider HTML
  var html='<div class="slider-explorer">';

  // Slider controls
  html+='<div class="slider-controls">';
  sliders.forEach(function(s,i){
    var val=s.value||s.min||1;
    html+='<div class="slider-row">';
    html+='<label class="slider-label">'+escHtml(s.label)+' = <span class="slider-val" data-idx="'+i+'">'+val+'</span></label>';
    html+='<input type="range" class="slider-input" data-idx="'+i+'" min="'+(s.min||0)+'" max="'+(s.max||10)+'" step="'+(s.step||1)+'" value="'+val+'">';
    html+='</div>';
  });
  html+='</div>';

  // Formula display
  html+='<div class="slider-formulas"></div>';

  // Visual area (canvas for algebraSquare etc)
  if(visual&&visual!=='none'){
    html+='<div class="slider-visual"></div>';
  }

  html+='</div>';
  body.innerHTML+=html;

  var explorer=body.querySelector('.slider-explorer');
  var inputs=explorer.querySelectorAll('.slider-input');
  var vals=explorer.querySelectorAll('.slider-val');
  var formulaDiv=explorer.querySelector('.slider-formulas');
  var visualDiv=explorer.querySelector('.slider-visual');

  function getValues(){
    var v={};
    inputs.forEach(function(inp,i){
      v[sliders[i].label]=parseFloat(inp.value);
    });
    return v;
  }

  function evalFormula(expr,v){
    try{
      var keys=Object.keys(v);
      var values=keys.map(function(k){return v[k];});
      var fn=new Function(keys.join(','),'return '+expr);
      var result=fn.apply(null,values);
      if(typeof result==='number') return isFinite(result)?result.toFixed(result===Math.floor(result)?0:3):'\u221E';
      return String(result);
    }catch(e){return '?';}
  }

  function update(){
    var v=getValues();
    // Update value displays
    inputs.forEach(function(inp,i){
      vals[i].textContent=inp.value;
    });

    // Update formulas
    var fHtml='';
    formulas.forEach(function(f){
      var result=evalFormula(f.expr,v);
      fHtml+='<div class="slider-formula-row"><span class="slider-formula-label">'+escHtml(f.label)+' =</span> <span class="slider-formula-result">'+result+'</span></div>';
    });
    if(hint) fHtml+='<div class="info-hint">'+hint+'</div>';
    formulaDiv.innerHTML=fHtml;

    // Visual: algebraic square
    if(visual==='square'&&visualDiv){
      drawAlgebraSquareVisual(visualDiv,v.a||v[sliders[0].label]||3,v.b||v[sliders[1].label]||2);
    }else if(visual==='cube'&&visualDiv){
      drawAlgebraCubeVisual(visualDiv,v.a||v[sliders[0].label]||2,v.b||v[sliders[1].label]||1);
    }else if(visual==='exponent'&&visualDiv){
      drawExponentVisual(visualDiv,v);
    }else if(visual==='proportion'&&visualDiv){
      drawProportionVisual(visualDiv,v);
    }
  }

  inputs.forEach(function(inp){
    inp.addEventListener('input',update);
  });

  update();

  // Theme change
  var observer=new MutationObserver(update);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// Algebra Square Visual: shows (a+b)² = a² + 2ab + b² as colored rectangles
function drawAlgebraSquareVisual(container,a,b){
  container.innerHTML='';
  var size=Math.min(280,container.offsetWidth-20);
  var{canvas,ctx}=createHiDPICanvas(size,size);
  container.appendChild(canvas);
  var c=C();
  var total=a+b;
  var scale=size/total;
  var aw=a*scale,bw=b*scale;

  // a² square
  ctx.fillStyle=c.fill;ctx.fillRect(0,0,aw,aw);
  ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.strokeRect(0,0,aw,aw);
  ctx.font='700 13px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='center';
  ctx.fillText('a\u00B2='+(a*a).toFixed(0),aw/2,aw/2+5);

  // b² square
  ctx.fillStyle=c.fillTertiary;ctx.fillRect(aw,aw,bw,bw);
  ctx.strokeStyle=c.tertiary;ctx.lineWidth=2;ctx.strokeRect(aw,aw,bw,bw);
  ctx.fillStyle=c.tertiary;
  ctx.fillText('b\u00B2='+(b*b).toFixed(0),aw+bw/2,aw+bw/2+5);

  // ab rectangles (two)
  ctx.fillStyle=c.fillSecondary;
  ctx.fillRect(aw,0,bw,aw);ctx.fillRect(0,aw,aw,bw);
  ctx.strokeStyle=c.secondary;ctx.lineWidth=1.5;
  ctx.strokeRect(aw,0,bw,aw);ctx.strokeRect(0,aw,aw,bw);
  ctx.fillStyle=c.secondary;
  ctx.fillText('ab='+(a*b).toFixed(0),aw+bw/2,aw/2+5);
  ctx.fillText('ab='+(a*b).toFixed(0),aw/2,aw+bw/2+5);

  // Dimension labels
  ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
  ctx.fillText('a='+a.toFixed(0),aw/2,size+0);
  ctx.fillText('b='+b.toFixed(0),aw+bw/2,size+0);
  ctx.save();ctx.translate(0,0);ctx.rotate(-Math.PI/2);
  ctx.fillText('a='+a.toFixed(0),-aw/2,-4);
  ctx.fillText('b='+b.toFixed(0),-(aw+bw/2),-4);
  ctx.restore();
}

// Algebra Cube Visual: simplified 3D representation
function drawAlgebraCubeVisual(container,a,b){
  container.innerHTML='';
  var w=Math.min(300,container.offsetWidth-20);
  var h=Math.round(w*0.8);
  var{canvas,ctx}=createHiDPICanvas(w,h);
  container.appendChild(canvas);
  var c=C();
  var total=a+b;
  var scale=Math.min(w*0.5,h*0.5)/total;
  var aw=a*scale,bw=b*scale;
  var ox=w*0.15,oy=h*0.65;
  var dx=0.35,dy=-0.35; // 3D offset ratio

  // Front face (a+b)²
  ctx.fillStyle=c.fill;ctx.fillRect(ox,oy-aw-bw,aw+bw,aw+bw);
  ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.strokeRect(ox,oy-aw-bw,aw+bw,aw+bw);
  // a² portion
  ctx.fillStyle=c.fill;ctx.fillRect(ox,oy-aw-bw,aw,aw);
  ctx.strokeStyle=c.primary;ctx.lineWidth=1;ctx.strokeRect(ox,oy-aw-bw,aw,aw);
  ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='center';
  ctx.fillText('a\u00B3',ox+aw/2,oy-aw-bw+aw/2+4);
  // Labels
  ctx.fillStyle=c.text;
  ctx.fillText('(a+b)\u00B3 = a\u00B3+3a\u00B2b+3ab\u00B2+b\u00B3',w/2,h-8);
  ctx.fillText((total*total*total).toFixed(0)+' = '+(a*a*a).toFixed(0)+'+'+
    (3*a*a*b).toFixed(0)+'+'+(3*a*b*b).toFixed(0)+'+'+(b*b*b).toFixed(0),w/2,h+6);
}

// Exponent Visual: show base^exp as growing bars
function drawExponentVisual(container,v){
  container.innerHTML='';
  var w=Math.min(320,container.offsetWidth-20);
  var h=120;
  var{canvas,ctx}=createHiDPICanvas(w,h);
  container.appendChild(canvas);
  var c=C();
  var base=v.base||v[Object.keys(v)[0]]||2;
  var maxExp=6;
  var maxVal=Math.pow(Math.abs(base),maxExp);
  if(maxVal===0||!isFinite(maxVal)) maxVal=1;
  var barW=(w-40)/(maxExp+1)-4;
  var colors=chartPalette();

  for(var i=0;i<=maxExp;i++){
    var val=Math.pow(base,i);
    var barH=Math.min(h-30,Math.abs(val)/maxVal*(h-30));
    if(barH<2) barH=2;
    var x=20+i*(barW+4);
    ctx.fillStyle=colors[i%colors.length];
    ctx.fillRect(x,h-20-barH,barW,barH);
    ctx.font='500 9px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
    ctx.fillText(base+'^'+i,x+barW/2,h-6);
    ctx.font='600 9px Poppins,sans-serif';ctx.fillStyle=c.text;
    var valStr=Math.abs(val)>9999?val.toExponential(1):val.toFixed(val===Math.floor(val)?0:2);
    ctx.fillText(valStr,x+barW/2,h-22-barH);
  }
}

// Proportion Visual: linked bars showing a:b = c:d
function drawProportionVisual(container,v){
  container.innerHTML='';
  var w=Math.min(320,container.offsetWidth-20);
  var h=80;
  var{canvas,ctx}=createHiDPICanvas(w,h);
  container.appendChild(canvas);
  var c=C();
  var keys=Object.keys(v);
  var vals=keys.map(function(k){return v[k];});
  var maxVal=Math.max.apply(null,vals)||1;
  var barH=16;
  var colors=chartPalette();

  keys.forEach(function(k,i){
    var barW=(v[k]/maxVal)*(w-80);
    var y=8+i*(barH+10);
    ctx.fillStyle=colors[i%colors.length];
    ctx.fillRect(40,y,barW,barH);
    ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='right';
    ctx.fillText(k,36,y+barH-3);
    ctx.textAlign='left';ctx.fillText(v[k].toString(),44+barW,y+barH-3);
  });
}

// ============================================
// 9. HEIGHT-DISTANCE VISUALIZER
// For trigonometry application: elevation/depression angles
// ============================================
function drawHeightDistance(container,config){
  var w=Math.min(container.offsetWidth-32,500);
  var h=Math.round(w*0.65);
  var{canvas,ctx}=createHiDPICanvas(w,h);
  var body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  var angleDeg=config.angle||30;
  var objectHeight=config.height||50;
  var objectLabel=config.objectLabel||'ভবন';
  var draggingHD=false;

  function draw(){
    var c=C();
    ctx.clearRect(0,0,w,h);
    var ground=h-40;
    var rad=angleDeg*Math.PI/180;

    // Ground
    ctx.strokeStyle=c.axis;ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(20,ground);ctx.lineTo(w-20,ground);ctx.stroke();

    // Building
    var bx=w*0.7,bw=40;
    var buildH=Math.min(ground-30,objectHeight*2);
    ctx.fillStyle=c.fill;ctx.fillRect(bx-bw/2,ground-buildH,bw,buildH);
    ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.strokeRect(bx-bw/2,ground-buildH,bw,buildH);
    // Windows
    for(var wy=ground-buildH+15;wy<ground-10;wy+=25){
      ctx.fillStyle=c.fillSecondary;ctx.fillRect(bx-12,wy,8,10);ctx.fillRect(bx+4,wy,8,10);
    }

    // Observer
    var dist=buildH/Math.tan(rad);
    var ox=Math.max(60,bx-dist);
    var eyeY=ground-20;

    // Person (stick figure)
    ctx.strokeStyle=c.secondary;ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(ox,eyeY-12,6,0,Math.PI*2);ctx.stroke(); // head
    ctx.beginPath();ctx.moveTo(ox,eyeY-6);ctx.lineTo(ox,eyeY+12);ctx.stroke(); // body
    ctx.beginPath();ctx.moveTo(ox-8,eyeY+20);ctx.lineTo(ox,eyeY+12);ctx.lineTo(ox+8,eyeY+20);ctx.stroke(); // legs

    // Line of sight
    ctx.setLineDash([6,4]);ctx.strokeStyle=c.tertiary;ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(ox,eyeY);ctx.lineTo(bx,ground-buildH);ctx.stroke();
    ctx.setLineDash([]);

    // Horizontal line from eye
    ctx.setLineDash([3,3]);ctx.strokeStyle=c.textMuted;ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(ox,eyeY);ctx.lineTo(bx,eyeY);ctx.stroke();
    ctx.setLineDash([]);

    // Angle arc
    var arcR=35;
    ctx.beginPath();
    var a1=0;
    var a2=-Math.atan2(buildH-(ground-eyeY),bx-ox);
    ctx.arc(ox,eyeY,arcR,a2,a1);
    ctx.strokeStyle=c.primary;ctx.lineWidth=2;ctx.stroke();

    // Angle label
    ctx.font='700 13px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='left';
    ctx.fillText('\u03B8='+angleDeg.toFixed(0)+'\u00B0',ox+arcR+4,eyeY-8);

    // Height label
    ctx.save();ctx.translate(bx+bw/2+14,ground-buildH/2);ctx.rotate(-Math.PI/2);
    ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='center';
    ctx.fillText('h='+buildH.toFixed(0),0,0);
    ctx.restore();

    // Distance label
    ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.secondary;ctx.textAlign='center';
    ctx.fillText('d='+(bx-ox).toFixed(0),ox+(bx-ox)/2,ground+16);

    // Object label
    ctx.font='700 12px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
    ctx.fillText(objectLabel,bx,ground-buildH-10);

    // Info panel
    var actualDist=bx-ox;
    var tanTheta=Math.tan(rad);
    updateInfoPanel(container,[
      {type:'formula',text:'\uD83D\uDCD0 tan \u03B8 = \u0989\u099A\u09CD\u099A\u09A4\u09BE/\u09A6\u09C2\u09B0\u09A4\u09CD\u09AC = h/d'},
      {type:'value',label:'\u0989\u09A8\u09CD\u09A8\u09A4\u09BF \u0995\u09CB\u09A3 (\u03B8) =',value:angleDeg.toFixed(1)+'\u00B0'},
      {type:'value',label:'tan \u03B8 =',value:tanTheta.toFixed(4)},
      {type:'value',label:'\u0989\u099A\u09CD\u099A\u09A4\u09BE (h) =',value:buildH.toFixed(1)},
      {type:'value',label:'\u09A6\u09C2\u09B0\u09A4\u09CD\u09AC (d) =',value:actualDist.toFixed(1)},
      {type:'value',label:'h = d \u00D7 tan\u03B8 =',value:(actualDist*tanTheta).toFixed(1)},
      {type:'hint',text:'\uD83D\uDCA1 \u0995\u09CB\u09A3 \u09AC\u09A6\u09B2\u09BE\u0993 \u2014 \u09A6\u09C7\u0996\u09CB tan\u03B8 \u09AC\u09BE\u09A1\u09BC\u09B2\u09C7 \u0989\u099A\u09CD\u099A\u09A4\u09BE \u0995\u09BF\u09AD\u09BE\u09AC\u09C7 \u09AC\u09BE\u09A1\u09BC\u09C7!'}
    ]);
  }

  // Drag to change angle
  function getAngleHD(e){
    var rect=canvas.getBoundingClientRect();
    var touch=e.touches?e.touches[0]:e;
    var mx=touch.clientX-rect.left;
    var my=touch.clientY-rect.top;
    var ground=h-40;
    var eyeY=ground-20;
    var bx=w*0.7;
    // Calculate angle from observer eye to mouse
    var dx=bx-60;
    var dy=eyeY-my;
    if(dy<0) dy=0;
    var ang=Math.atan2(dy,dx)*180/Math.PI;
    return Math.max(5,Math.min(80,ang));
  }

  canvas.addEventListener('mousedown',function(e){draggingHD=true;angleDeg=getAngleHD(e);draw();});
  canvas.addEventListener('touchstart',function(e){e.preventDefault();draggingHD=true;angleDeg=getAngleHD(e);draw();},{passive:false});
  canvas.addEventListener('mousemove',function(e){if(!draggingHD)return;angleDeg=getAngleHD(e);draw();});
  canvas.addEventListener('touchmove',function(e){if(!draggingHD)return;e.preventDefault();angleDeg=getAngleHD(e);draw();},{passive:false});
  canvas.addEventListener('mouseup',function(){draggingHD=false;});
  canvas.addEventListener('mouseleave',function(){draggingHD=false;});
  canvas.addEventListener('touchend',function(){draggingHD=false;});

  canvas.style.cursor='pointer';
  draw();
  var observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 10. SIMILAR TRIANGLES
// Two linked triangles showing proportional sides
// ============================================
function drawSimilarTriangle(container,config){
  var w=Math.min(container.offsetWidth-32,500);
  var h=Math.round(w*0.55);
  var{canvas,ctx}=createHiDPICanvas(w,h);
  var body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  var ratio=config.ratio||1.5;
  var draggingRatio=false;

  function draw(){
    var c=C();
    ctx.clearRect(0,0,w,h);

    // Triangle 1 (fixed, left side)
    var t1={A:{x:40,y:h-30},B:{x:170,y:h-30},C:{x:100,y:40}};
    // Triangle 2 (scaled, right side)
    var cx2=w*0.65;
    var s=ratio;
    var t2={
      A:{x:cx2-(130*s)/2,y:h-30},
      B:{x:cx2+(130*s)/2,y:h-30},
      C:{x:cx2-(130*s)/2+60*s,y:h-30-(h-70)*s}
    };
    // Clamp t2 to canvas
    if(t2.B.x>w-10) t2.B.x=w-10;
    if(t2.C.y<10) t2.C.y=10;

    function dist(a,b){return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);}

    // Draw triangle helper
    function drawTri(t,col,label){
      ctx.beginPath();ctx.moveTo(t.A.x,t.A.y);ctx.lineTo(t.B.x,t.B.y);ctx.lineTo(t.C.x,t.C.y);ctx.closePath();
      ctx.fillStyle=col+'15';ctx.fill();
      ctx.strokeStyle=col;ctx.lineWidth=2;ctx.stroke();

      // Side labels
      var sAB=dist(t.A,t.B).toFixed(0);
      var sBC=dist(t.B,t.C).toFixed(0);
      var sCA=dist(t.C,t.A).toFixed(0);
      ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=col;ctx.textAlign='center';
      ctx.fillText(sAB,(t.A.x+t.B.x)/2,t.A.y+16);
      ctx.fillText(sBC,(t.B.x+t.C.x)/2+8,(t.B.y+t.C.y)/2);
      ctx.fillText(sCA,(t.C.x+t.A.x)/2-8,(t.C.y+t.A.y)/2);

      // Label
      ctx.font='700 14px Poppins,sans-serif';ctx.fillStyle=c.text;
      var centX=(t.A.x+t.B.x+t.C.x)/3;
      var centY=(t.A.y+t.B.y+t.C.y)/3;
      ctx.fillText(label,centX,centY+5);
    }

    drawTri(t1,c.primary,'\u25B3ABC');
    drawTri(t2,c.secondary,'\u25B3DEF');

    // Ratio indicator
    ctx.font='700 13px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='center';
    ctx.fillText('\u0985\u09A8\u09C1\u09AA\u09BE\u09A4: '+ratio.toFixed(2)+':1',w/2,20);

    // Scale slider hint
    ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;
    ctx.fillText('\u2190 \u099F\u09C7\u09A8\u09C7 \u099B\u09CB\u099F/\u09AC\u09A1\u09BC \u0995\u09B0\u09CB \u2192',w/2,h-6);

    // Info panel
    var ab1=dist(t1.A,t1.B),bc1=dist(t1.B,t1.C),ca1=dist(t1.C,t1.A);
    var ab2=dist(t2.A,t2.B),bc2=dist(t2.B,t2.C),ca2=dist(t2.C,t2.A);
    updateInfoPanel(container,[
      {type:'formula',text:'\uD83D\uDCD0 \u09B8\u09A6\u09C3\u09B6 \u09A4\u09CD\u09B0\u09BF\u09AD\u09C1\u099C: \u09AC\u09BE\u09B9\u09C1\u09B0 \u0985\u09A8\u09C1\u09AA\u09BE\u09A4 \u09B8\u09AE\u09BE\u09A8'},
      {type:'value',label:'AB/DE =',value:(ab2/ab1).toFixed(3)},
      {type:'value',label:'BC/EF =',value:(bc2/bc1).toFixed(3)},
      {type:'value',label:'CA/FD =',value:(ca2/ca1).toFixed(3)},
      {type:'value',label:'\u0985\u09A8\u09C1\u09AA\u09BE\u09A4 =',value:ratio.toFixed(2)},
      {type:'hint',text:'\uD83D\uDCA1 \u09AE\u09BE\u0989\u09B8 \u099F\u09C7\u09A8\u09C7 \u0985\u09A8\u09C1\u09AA\u09BE\u09A4 \u09AC\u09A6\u09B2\u09BE\u0993 \u2014 \u09A6\u09C7\u0996\u09CB \u09B8\u09AC \u09AC\u09BE\u09B9\u09C1\u09B0 \u0985\u09A8\u09C1\u09AA\u09BE\u09A4 \u09B8\u09AC\u09B8\u09AE\u09AF\u09BC \u09B8\u09AE\u09BE\u09A8!'}
    ]);
  }

  // Drag to change ratio
  canvas.addEventListener('mousedown',function(){draggingRatio=true;});
  canvas.addEventListener('touchstart',function(e){e.preventDefault();draggingRatio=true;},{passive:false});
  function onMoveRatio(e){
    if(!draggingRatio) return;
    var rect=canvas.getBoundingClientRect();
    var touch=e.touches?e.touches[0]:e;
    var mx=touch.clientX-rect.left;
    ratio=0.5+((mx/w)*2);
    ratio=Math.max(0.3,Math.min(2.5,ratio));
    draw();
  }
  canvas.addEventListener('mousemove',onMoveRatio);
  canvas.addEventListener('touchmove',function(e){e.preventDefault();onMoveRatio(e);},{passive:false});
  canvas.addEventListener('mouseup',function(){draggingRatio=false;});
  canvas.addEventListener('mouseleave',function(){draggingRatio=false;});
  canvas.addEventListener('touchend',function(){draggingRatio=false;});

  canvas.style.cursor='ew-resize';
  draw();
  var observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// 11. PROPORTION BAR — linked proportional bars
// ============================================
function drawProportionBar(container,config){
  var w=Math.min(container.offsetWidth-32,480);
  var h=Math.round(w*0.4);
  var{canvas,ctx}=createHiDPICanvas(w,h);
  var body=container.querySelector('.interactive-area__body')||container;
  body.appendChild(canvas);

  var pairs=config.pairs||[{a:2,b:3},{a:4,b:6}];
  var labels=config.labels||['a:b','c:d'];
  var draggingPB=-1;

  function draw(){
    var c=C();
    ctx.clearRect(0,0,w,h);
    var barH=24;
    var maxVal=0;
    pairs.forEach(function(p){maxVal=Math.max(maxVal,p.a,p.b);});
    var scale=(w-120)/maxVal;
    var colors=chartPalette();

    pairs.forEach(function(p,i){
      var y=20+i*(barH*2+20);
      // Bar A
      var bw1=p.a*scale;
      ctx.fillStyle=colors[0];ctx.fillRect(60,y,bw1,barH);
      ctx.font='600 11px Poppins,sans-serif';ctx.fillStyle=c.text;ctx.textAlign='right';
      ctx.fillText(labels[i]?labels[i].split(':')[0]||'a':'a',55,y+barH-6);
      ctx.textAlign='left';ctx.fillText(p.a.toFixed(1),62+bw1,y+barH-6);
      // Bar B
      var bw2=p.b*scale;
      ctx.fillStyle=colors[1];ctx.fillRect(60,y+barH+4,bw2,barH);
      ctx.textAlign='right';ctx.fillText(labels[i]?labels[i].split(':')[1]||'b':'b',55,y+barH*2-2);
      ctx.textAlign='left';ctx.fillText(p.b.toFixed(1),62+bw2,y+barH*2-2);
      // Ratio
      ctx.font='700 12px Poppins,sans-serif';ctx.fillStyle=c.primary;ctx.textAlign='center';
      ctx.fillText((p.a/p.b).toFixed(3),w-40,y+barH+2);
    });

    // Check if ratios are equal
    if(pairs.length>=2){
      var r1=pairs[0].a/pairs[0].b;
      var r2=pairs[1].a/pairs[1].b;
      var equal=Math.abs(r1-r2)<0.01;
      updateInfoPanel(container,[
        {type:'formula',text:'\uD83D\uDCD0 \u09B8\u09AE\u09BE\u09A8\u09C1\u09AA\u09BE\u09A4: a/b = c/d \u2192 ad = bc'},
        {type:'value',label:pairs[0].a.toFixed(1)+'/'+pairs[0].b.toFixed(1)+' =',value:r1.toFixed(4)},
        {type:'value',label:pairs[1].a.toFixed(1)+'/'+pairs[1].b.toFixed(1)+' =',value:r2.toFixed(4)},
        {type:'value',label:'\u09B8\u09AE\u09BE\u09A8?',value:equal?'\u2713 \u09B9\u09CD\u09AF\u09BE\u0981! \u09B8\u09AE\u09BE\u09A8\u09C1\u09AA\u09BE\u09A4\u09BF\u0995':'\u2717 \u09A8\u09BE, \u09B8\u09AE\u09BE\u09A8\u09C1\u09AA\u09BE\u09A4\u09BF\u0995 \u09A8\u09AF\u09BC'},
        {type:'value',label:'\u0995\u09CD\u09B0\u09B8 \u0997\u09C1\u09A3: ad=',value:(pairs[0].a*pairs[1].b).toFixed(1)+', bc='+(pairs[0].b*pairs[1].a).toFixed(1)},
        {type:'hint',text:'\uD83D\uDCA1 ad = bc \u09B9\u09B2\u09C7\u0987 \u09B8\u09AE\u09BE\u09A8\u09C1\u09AA\u09BE\u09A4\u09BF\u0995!'}
      ]);
    }
  }

  draw();
  var observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function escHtml(s){
  const d=document.createElement('div');d.textContent=s;return d.innerHTML;
}

function toBanglaNum(n){
  const banglaDigits=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).replace(/\d/g,d=>banglaDigits[parseInt(d)]);
}

// Build interactive area wrapper
function createInteractiveWrapper(title,iconSvg){
  const area=document.createElement('div');
  area.className='interactive-area';
  area.innerHTML=
    '<div class="interactive-area__header">'+
    (iconSvg||'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2l20 20M22 2L2 22"/><circle cx="12" cy="12" r="10"/></svg>')+
    ' <span>'+(title||'ইন্টারেক্টিভ ভিজ্যুয়ালাইজেশন')+'</span>'+
    '<span class="interactive-area__info">টেনে নিয়ে দেখো (drag to interact)</span>'+
    '</div>'+
    '<div class="interactive-area__body"></div>';
  return area;
}

// SVG icons for headers
const ICONS={
  geometry:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 20 2 20"/></svg>',
  graph:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
  numberLine:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="18" y1="8" x2="18" y2="16"/></svg>',
  venn:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>',
  chart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg>',
  angle:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20L12 4l10 16"/><path d="M6 16h12"/></svg>',
  slider:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="8" x2="20" y2="8"/><circle cx="10" cy="8" r="2"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="14" cy="16" r="2"/></svg>',
  heightDistance:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="4" width="6" height="16"/><line x1="2" y1="20" x2="22" y2="20"/><line x1="4" y1="16" x2="14" y2="4" stroke-dasharray="3 2"/></svg>',
  similar:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 16 9 16 6 8"/><polygon points="12 16 22 16 17 4"/></svg>',
  proportion:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="12" height="4" rx="1"/><rect x="2" y="14" width="8" height="4" rx="1"/></svg>'
};

// Interactive type title mapping
const TITLES={
  triangle:'ত্রিভুজ — শীর্ষবিন্দু টেনে দেখো',
  circle:'বৃত্ত — বিন্দু টেনে ব্যাসার্ধ বদলাও',
  quadrilateral:'চতুর্ভুজ — শীর্ষবিন্দু টেনে দেখো',
  rectangle:'আয়তক্ষেত্র — কোণ টেনে দেখো',
  parallelogram:'সামান্তরিক — শীর্ষবিন্দু টেনে দেখো',
  graph:'লেখচিত্র — সমীকরণ দেখো',
  numberLine:'সংখ্যারেখা',
  venn:'ভেনচিত্র',
  bar:'বার চার্ট',
  pie:'পাই চার্ট',
  angle:'কোণ — টেনে ঘুরাও ও ত্রিকোণমিতি দেখো',
  slider:'সূত্র এক্সপ্লোরার — মান বদলাও ও ফলাফল দেখো',
  heightDistance:'উচ্চতা ও দূরত্ব — কোণ বদলাও',
  similarTriangle:'সদৃশ ত্রিভুজ — অনুপাত বদলাও',
  proportionBar:'অনুপাত তুলনা'
};

// ============================================
// MAIN RENDER HOOK
// Called by learn.html after every lesson render
// ============================================
window.__onLessonRender=function(lesson,contentEl){
  // 1. Step-by-step revealer for math solutions
  initStepReveal(contentEl);

  // 2. Interactive visualization if lesson has interactive config
  if(lesson.interactive){
    const interactives=Array.isArray(lesson.interactive)?lesson.interactive:[lesson.interactive];

    interactives.forEach(function(config){
      const type=config.type||config.shape||'';
      const geoTypes=['triangle','circle','quadrilateral','rectangle','parallelogram'];
      const isGeo=geoTypes.includes(type);
      const isGraph=type==='graph';
      const isNumberLine=type==='numberLine';
      const isVenn=type==='venn';
      const isChart=type==='bar'||type==='pie';
      const isAngle=type==='angle';
      const isSlider=type==='slider';
      const isHeightDist=type==='heightDistance';
      const isSimilar=type==='similarTriangle';
      const isProportion=type==='proportionBar';

      // Determine icon and title
      let icon=ICONS.geometry;
      let title=TITLES[type]||'ইন্টারেক্টিভ';
      if(isGraph) icon=ICONS.graph;
      else if(isNumberLine) icon=ICONS.numberLine;
      else if(isVenn) icon=ICONS.venn;
      else if(isChart) icon=ICONS.chart;
      else if(isAngle) icon=ICONS.angle;
      else if(isSlider) icon=ICONS.slider;
      else if(isHeightDist) icon=ICONS.heightDistance;
      else if(isSimilar) icon=ICONS.similar;
      else if(isProportion) icon=ICONS.proportion;

      if(config.title) title=config.title;

      // Create wrapper
      const area=createInteractiveWrapper(title,icon);

      // Insert after the "What Is / Real World" section
      const twoCol=contentEl.querySelector('.two-col');
      const whyPrompt=contentEl.querySelector('.why-prompt');
      const insertTarget=whyPrompt||twoCol;
      if(insertTarget&&insertTarget.parentNode){
        insertTarget.parentNode.insertBefore(area,insertTarget.nextSibling);
      }else{
        contentEl.appendChild(area);
      }

      // Draw
      if(isGeo) drawGeometry(area,config);
      else if(isGraph) drawGraph(area,config);
      else if(isNumberLine) drawNumberLine(area,config);
      else if(isVenn) drawVenn(area,config);
      else if(isChart) drawChart(area,{chartType:type,data:config.data});
      else if(isAngle) drawAngle(area,config);
      else if(isSlider) drawSlider(area,config);
      else if(isHeightDist) drawHeightDistance(area,config);
      else if(isSimilar) drawSimilarTriangle(area,config);
      else if(isProportion) drawProportionBar(area,config);
    });
  }
};

})();
