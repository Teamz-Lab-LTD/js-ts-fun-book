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
    primary:'#D9FE06',secondary:'#4ECDC4',tertiary:'#FF6B6B',quaternary:'#45B7D1',
    purple:'#A78BFA',orange:'#FB923C',pink:'#F472B6',
    grid:d?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)',
    gridStrong:d?'rgba(255,255,255,0.15)':'rgba(0,0,0,0.12)',
    axis:d?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.4)',
    text:d?'#FFFFFF':'#1a1a1a',
    textMuted:d?'rgba(255,255,255,0.6)':'rgba(0,0,0,0.5)',
    bg:d?'#1D1F25':'#FFFFFF',
    surface:d?'#12151A':'#F8F9FA',
    fill:d?'rgba(217,254,6,0.08)':'rgba(217,254,6,0.15)',
    fillSecondary:d?'rgba(78,205,196,0.12)':'rgba(78,205,196,0.15)',
    fillTertiary:d?'rgba(255,107,107,0.12)':'rgba(255,107,107,0.15)'
  };
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

    // Info
    ctx.font='500 12px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='left';
    ctx.fillText('ব্যাসার্ধ: '+r.toFixed(1)+' | ব্যাস: '+(2*r).toFixed(1)+' | পরিধি: '+(2*Math.PI*r).toFixed(1)+' | ক্ষেত্রফল: '+(Math.PI*r*r).toFixed(1),10,h-10);
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

  const xRange=config.xRange||[-10,10];
  const yRange=config.yRange||[-10,10];
  const equations=config.equations||[];
  const points=config.points||[];
  const eqColors=['#D9FE06','#4ECDC4','#FF6B6B','#45B7D1','#A78BFA'];

  function toCanvas(x,y){
    return{
      cx:((x-xRange[0])/(xRange[1]-xRange[0]))*w,
      cy:h-((y-yRange[0])/(yRange[1]-yRange[0]))*h
    };
  }

  function draw(){
    const c=C();
    ctx.clearRect(0,0,w,h);

    // Grid
    ctx.strokeStyle=c.grid;ctx.lineWidth=0.5;
    const xStep=calcStep(xRange[1]-xRange[0]);
    const yStep=calcStep(yRange[1]-yRange[0]);
    for(let x=Math.ceil(xRange[0]/xStep)*xStep;x<=xRange[1];x+=xStep){
      const{cx}=toCanvas(x,0);
      ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,h);ctx.stroke();
    }
    for(let y=Math.ceil(yRange[0]/yStep)*yStep;y<=yRange[1];y+=yStep){
      const{cy}=toCanvas(0,y);
      ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(w,cy);ctx.stroke();
    }

    // Axes
    const origin=toCanvas(0,0);
    ctx.strokeStyle=c.axis;ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(0,origin.cy);ctx.lineTo(w,origin.cy);ctx.stroke(); // X-axis
    ctx.beginPath();ctx.moveTo(origin.cx,0);ctx.lineTo(origin.cx,h);ctx.stroke(); // Y-axis

    // Axis labels
    ctx.font='500 10px Poppins,sans-serif';ctx.fillStyle=c.textMuted;ctx.textAlign='center';
    for(let x=Math.ceil(xRange[0]/xStep)*xStep;x<=xRange[1];x+=xStep){
      if(Math.abs(x)<0.001) continue;
      const{cx}=toCanvas(x,0);
      ctx.fillText(formatNum(x),cx,origin.cy+14);
    }
    ctx.textAlign='right';
    for(let y=Math.ceil(yRange[0]/yStep)*yStep;y<=yRange[1];y+=yStep){
      if(Math.abs(y)<0.001) continue;
      const{cy}=toCanvas(0,y);
      ctx.fillText(formatNum(y),origin.cx-6,cy+4);
    }

    // Origin label
    ctx.textAlign='right';ctx.fillText('O',origin.cx-6,origin.cy+14);

    // X/Y labels
    ctx.font='700 12px Poppins,sans-serif';ctx.fillStyle=c.text;
    ctx.textAlign='left';ctx.fillText('x',w-16,origin.cy-6);
    ctx.textAlign='center';ctx.fillText('y',origin.cx+14,14);

    // Plot equations
    equations.forEach((eq,idx)=>{
      ctx.strokeStyle=eqColors[idx%eqColors.length];
      ctx.lineWidth=2.5;
      ctx.beginPath();
      let started=false;
      const fn=parseEquation(eq);
      if(!fn) return;
      for(let px=0;px<w;px++){
        const x=xRange[0]+(px/w)*(xRange[1]-xRange[0]);
        const y=fn(x);
        if(isNaN(y)||!isFinite(y)||y<yRange[0]-5||y>yRange[1]+5){started=false;continue;}
        const{cx,cy}=toCanvas(x,y);
        if(!started){ctx.moveTo(cx,cy);started=true;}
        else ctx.lineTo(cx,cy);
      }
      ctx.stroke();

      // Equation label
      ctx.font='600 11px Poppins,sans-serif';
      ctx.fillStyle=eqColors[idx%eqColors.length];
      ctx.textAlign='left';
      const labelY=22+idx*18;
      ctx.fillText(eq,8,labelY);
    });

    // Plot points
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
  }

  draw();
  const observer=new MutationObserver(draw);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
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
  const barColors=['#D9FE06','#4ECDC4','#FF6B6B','#45B7D1','#A78BFA','#FB923C','#F472B6','#34D399'];

  function draw(){
    const c=C();
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

    // Trig values
    if(showTrig){
      const sinVal=Math.sin(rad);
      const cosVal=Math.cos(rad);
      const tanVal=Math.tan(rad);
      ctx.font='600 12px Poppins,sans-serif';ctx.textAlign='left';
      ctx.fillStyle=c.tertiary;ctx.fillText('sin θ = '+sinVal.toFixed(3),10,24);
      ctx.fillStyle=c.secondary;ctx.fillText('cos θ = '+cosVal.toFixed(3),10,42);
      ctx.fillStyle=c.quaternary;ctx.fillText('tan θ = '+(Math.abs(tanVal)>100?'∞':tanVal.toFixed(3)),10,60);
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
  angle:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20L12 4l10 16"/><path d="M6 16h12"/></svg>'
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
  angle:'কোণ — টেনে ঘুরাও ও ত্রিকোণমিতি দেখো'
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

      // Determine icon and title
      let icon=ICONS.geometry;
      let title=TITLES[type]||'ইন্টারেক্টিভ';
      if(isGraph) icon=ICONS.graph;
      else if(isNumberLine) icon=ICONS.numberLine;
      else if(isVenn) icon=ICONS.venn;
      else if(isChart) icon=ICONS.chart;
      else if(isAngle) icon=ICONS.angle;

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
    });
  }
};

})();
