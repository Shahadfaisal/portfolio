/* ===== EDIT YOUR CONTENT HERE ===== */
const LINKS={cv:"assets/shahadFaisal_CV.pdf",email:"shahadfaisal00@gmail.com",linkedin:"http://www.linkedin.com/in/shahad-faisal-1872b5340",github:"https://github.com/Shahadfaisal"}; // cv: add your CV file URL
const PROJECTS=[
 {id:"taabat",c:"#9be3b5",logo:"assets/images/taabat/logo.png",logoBg:"#ffffff",shots:["assets/images/taabat/1.png","assets/images/taabat/2.png","assets/images/taabat/3.png"],ratio:"546/1080",name:"Taabat",type:"Graduation Project",sum:"AI-powered smart farming app that classifies fruit, detects ripeness and predicts yield.",roles:["Developed Python scripts for image dataset cleaning and preprocessing for AI fruit classification","Designed and implemented Flutter frontend screens","Built and integrated the Supabase database with the app"],tech:["Python","Flutter (Dart)","Supabase","YOLOv8","EfficientNet-B1","EfficientNet-B0","TensorFlow Lite","FastAPI","GitHub","Postman","Pytest"],github:"https://github.com/DanaAlmoraie/TabaatApp",figma:"https://www.figma.com/design/ce2Rlgu3Ze2vhzB5KV2qgS/Taabat-app?node-id=0-1&t=1hHdWf4dzP1KXTgZ-1",
  overview:"Taabat is an AI-powered smart farming mobile app aligned with Saudi Vision 2030. It classifies fruits and date varieties, detects ripeness stages and predicts crop yield from environmental data, for farmers, shoppers and small-scale sellers. Graduation project at the University of Jeddah by a team of five, supervised by Dr. Fatmah Assiri.",
  problem:"Agricultural losses, limited transparency between farmers and shoppers, and a need for data-driven farming decisions.",
  solution:"A mobile app with AI models for fruit and date classification, ripeness detection and yield prediction, plus farm management and reminders.",
  process:"Scrum in five sprints tracked in Jira. Team stack: Flutter app, FastAPI backend, Supabase for database and authentication, and a YOLOv8n model deployed with TensorFlow Lite. Team-reported model accuracy: fruit classifier 0.92, date classifier 0.77, Medjool ripeness 0.98.",
  challenges:"No ripening datasets exist for dates, so yield prediction was limited to fruit types with weather-linked datasets."},
 {id:"kidcoin",c:"#9db4ff",logo:"assets/images/kidcoin/logo.png",logoBg:"#ffffff",shots:["assets/images/kidcoin/1.png","assets/images/kidcoin/2.png","assets/images/kidcoin/3.png"],ratio:"528/1068",name:"KidCoin",type:"Budget Management App",sum:"Space-themed Android app teaching children aged 9–14 to save, budget and spend wisely.",roles:["Developed Flutter frontend interfaces","Contributed to backend functionality"],tech:["Flutter","Slack","Jira"],github:"https://github.com/deemaoaloufi/KidCoin_App.git",
  overview:"KidCoin is an Android app for children aged 9–14 that teaches saving, budgeting and smart spending through games and a space-themed experience. Parents monitor progress and set reward goals. Built by a team of six for the Software Process Models course (2024–2025).",
  problem:"Children often lack financial literacy, and many families struggle to teach money management.",
  solution:"An interactive app with activities, games and real-life simulations. Children track spending and receive budget tips; parents add children, set rewards and view progress reports.",
  process:"Agile sprints managed in Jira, with Slack for communication, GitHub for code, Figma for interfaces and Lucidchart for the use case and class diagrams."},
 {id:"trackify",c:"#ffbe8a",logo:"assets/images/trackify/logo.png",logoBg:"#e8702a",shots:["assets/images/trackify/1.png","assets/images/trackify/2.png","assets/images/trackify/3.png"],ratio:"510/1080",name:"Trackify",type:"Mobile Application",sum:"Route, maintenance and speed assistant for truck drivers in Saudi Arabia.",roles:["Developed application interfaces","Integrated Firebase authentication and database","Scrum Master and pair programmer on the map and routing work (OSMDroid, OSRM API)"],tech:["Java","XML","Firebase","OSMDroid","OSRM API","OpenStreetMap","Android Studio IDE","API Integration"],github:"https://github.com/DanaAlmoraie/Trackify",
  overview:"Trackify is an Android app for truck drivers and fleet operations. Drivers register and log in, enter a start and end point, and get the best route with live speed, remaining distance and estimated arrival time, plus a maintenance page for oil, tires and brakes. Built for CCSW 431 Mobile Programming at the University of Jeddah by a team of three.",
  problem:"Drivers struggle to follow the assigned route, forget required maintenance and find it hard to keep a safe speed, which raises the chance of delays and vehicle issues.",
  solution:"Firebase sign-up and login, route entry with the best path drawn on an OpenStreetMap map (OSMDroid with the OSRM routing API), live speed, remaining distance and time, and a maintenance dashboard showing remaining kilometres and days before oil, tire and brake service.",
  process:"Three Scrum sprints with stand-up meetings, rotating Scrum Master and client roles and pair programming: (1) registration and login, (2) route entry and map display, (3) maintenance status. Each sprint had written test cases covering registration, login, routing and maintenance, all recorded as passed.",
  challenges:"Firebase needed troubleshooting before it linked to the app; the OSRM API initially refused requests until coordinate formatting was fixed; and a Firebase date-format mismatch had to be resolved for the maintenance calculations."},
 {id:"furtails",c:"#ffb3a7",logo:"assets/images/furtails/logo.png",logoBg:"#ffffff",shots:["assets/images/furtails/1.png","assets/images/furtails/2.png","assets/images/furtails/3.png"],ratio:"1400/788",name:"FurTails",type:"Pet Care Website",sum:"One place for pet owners: grooming, personalised meals and pet profiles.",roles:["Developed frontend pages","Integrated APIs to support website functionality"],tech:["HTML","CSS","JavaScript","API Integration","MongoDB"],github:"https://github.com/Joudj7tam/FURTAILS.git",
  overview:"FurTails brings grooming services, personalised feeding plans and custom pet profiles into one website for cat and dog owners. Built by a team of three.",
  problem:"Pet owners juggle separate services for grooming, meals and keeping track of their pets’ care.",
  solution:"Professional grooming packages, meal preparation services, multi-pet profile management and a care history tracker.",
  process:"Frontend in HTML, CSS and JavaScript; backend with Node.js and Express.js; MongoDB with Mongoose; email-based authentication; API routes tested with Thunder Client."},
 {id:"vitafit",c:"#ff9f7a",logo:"assets/images/vitafit/logo.png",logoBg:"#f98b63",shots:["assets/images/vitafit/1.png","assets/images/vitafit/2.png"],ratio:"522/1064",name:"VitaFit",type:"Health & Lifestyle App",proto:true,sum:"Design prototype of a one-stop health and fitness platform.",roles:["Designed UI prototypes using Figma","Contributed to requirements analysis and the Architecture Specification Report (ASR)"],tech:["Figma","UX research"],demo:"https://www.figma.com/design/wnASKB85fc4RUHV6cNjDUo/VitaFit?node-id=0%3A1&t=U881TcJaSLZuoOPp-1",
  overview:"VitaFit is a design prototype of a one-stop platform for health and fitness: a nursery for children, healthy meal ordering, professional support and workout programs. It is a Figma prototype, not a built application. Team of five.",
  problem:"From 100+ survey responses: 72% of respondents lacked the experience to calculate their calorie needs, and users reported difficulty organising healthy meals and finding childcare while exercising.",
  solution:"Reliable trainers and nutrition experts, healthy meal delivery, a certified nursery, and workout plans users can choose or customise.",
  process:"Interviews and a questionnaire, then needs, insights and tasks, low-fidelity sketches and a high-fidelity Figma prototype."},
 {id:"rayready",c:"#caa6ff",logo:"assets/images/rayready/logo.png",logoBg:"#ffffff",shots:["assets/images/rayready/1.png","assets/images/rayready/2.png"],ratio:"1400/788",name:"RayReady",type:"IoT Project",sum:"Wearable that alerts caregivers when heat or UV is unsafe for children with sensitive skin.",roles:[],tech:["NodeMCU ESP8266","Arduino IDE","ThingSpeak","IFTTT"],
  overview:"RayReady is a child safety wristband built from a NodeMCU (ESP8266), a DHT11 temperature sensor, a UV sensor, a GPS module and a red LED. A working hardware prototype was built.",
  problem:"Children with conditions such as eczema, vitiligo or albinism are vulnerable to UV and heat, and guardians may not notice in time.",
  solution:"Sends an SMS alert with the child’s location when temperature exceeds 30°C or the UV index goes above 3, lights a red LED, and logs readings to the cloud.",
  process:"Programmed in the Arduino IDE; readings stored and visualised on ThingSpeak; SMS alerts automated through IFTTT. Future ideas: heart rate sensor, waterproofing, solar charging and an activity tracker."}
];
const SKILLS={Programming:["Python","Java","JavaScript","Dart"],"Mobile & Frontend":["Flutter","HTML","CSS"],"Backend & Database":["MySQL","Firebase","MongoDB","Supabase"],"Data Processing":["Data Cleaning","Image Preprocessing"],"Tools & Technologies":["Git","GitHub","JUnit","Figma","API Integration"]};
const ACH=[
 {n:"Raqeem",e:"Heritage Innovation Hackathon, Jun 2026",s:"2nd Place",b:"",d:["AI-powered heritage platform concept to document and translate Saudi archaeological inscriptions","Built around a unified national database for research and public participation","I conducted market and competitor analysis"]},
 {n:"MindTalker",e:"Global OSH Hackathon, Feb–Mar 2025",s:"AI workplace communication assistant",b:"Prototype",d:["Proposed an AI-powered assistant to improve workplace communication in high-stress situations","Designed to analyze personality patterns and communication styles to provide personalized guidance","Offers real-time conversation analysis, response suggestions, and periodic performance reports"]},
 {n:"Baseer",e:"Launchpad Bootcamp Hackathon, Sep 2024",s:"Top 15",b:"Concept",d:["Smart security solution using AI for identity verification and remote access","Combines facial recognition with a secure delivery box to prevent package theft","Prioritizes privacy through local data processing and offline functionality"]},
 {n:"Guider",e:"Boussala Hackathon, 2024",s:"AI-powered tourism application",b:"Concept",d:["Smart tour guide for Red Sea visitors with interactive maps","Hotel, restaurant, car and activity booking","Personalised AI recommendations and responsible-tourism guidance"]}];
const CERT=[["Artificial Intelligence Fundamentals","IBM SkillsBuild","2026"],["UX/UI","Satr, Tuwaiq Academy","2026"],["Build Native Mobile Apps with Flutter","Udacity","2025"],["Overview of IoT Technologies","Huawei CRA Training Program","2024"]];
/* ================================== */
const PAGES=['home','about','projects','skills','experience','achievements','certifications','contact'];
async function load(){
 const main=document.getElementById('main');let parts;
 try{parts=await Promise.all(PAGES.map(p=>fetch('pages/'+p+'.html').then(r=>{if(!r.ok)throw new Error(p);return r.text()})))}
 catch(e){main.innerHTML='<p style="padding:120px 20px">Could not load page content. Serve the site over http (GitHub Pages, Vercel or a local server).</p>';return}
 main.innerHTML=parts.join('\n');
 init();
 const h=location.hash.slice(1),el=h&&document.getElementById(h);if(el)el.scrollIntoView();
}
function init(){
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const link=(u,t,c='btn')=>u?`<a class="${c}" href="${u}" target="_blank" rel="noopener">${t}</a>`:`<a class="${c}" aria-disabled="true" title="Add this link in the LINKS settings">${t}</a>`;
$('#pg').innerHTML=PROJECTS.map(p=>`<a class="card proj rv" href="#${p.id}">${p.logo?`<img class="clogo" src="${p.logo}" alt="">`:''}<span class="tl">${p.type}${p.proto?'<span class="badge">Design prototype</span>':''}</span><h3>${p.name}</h3><p>${p.sum}</p>${p.tech.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}<div class="more">${p.roles.length?`<b>My contributions</b><ul>${p.roles.map(r=>`<li>${r}</li>`).join('')}</ul>`:''}<p style="margin:8px 0 0;color:var(--p);font-weight:600">Open case study</p></div></a>`).join('');
$('#ach').innerHTML=ACH.map((a,i)=>`<article class="hp rv" tabindex="0"><div class="col"><span class="no">0${i+1}</span><h3>${a.n}</h3></div><div class="ex"><div><span class="tag">${a.s}</span>${a.b?`<span class="badge">${a.b}</span>`:''}</div><div><h3>${a.n}</h3><p>${a.e}</p></div><ul>${a.d.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('');
$('#cert').innerHTML=CERT.map(c=>`<div class="cr rv"><span class="yr">${c[2]}</span><div><h3>${c[0]}</h3><p>${c[1]}</p></div></div>`).join('');
$('#cb').innerHTML=link(LINKS.email&&'mailto:'+LINKS.email,'Email me','btn main')+link(LINKS.linkedin,'LinkedIn')+link(LINKS.github,'GitHub')+link(LINKS.cv,'Download resume');
if(LINKS.cv){const c=$('#cv');c.href=LINKS.cv;c.target='_blank'}else{$('#cv').setAttribute('aria-disabled','true');$('#cv').title='Add your CV link in LINKS'}
// skills constellation
function drawSkills(){const ks=Object.keys(SKILLS),el=$('#sk');let ln='',nd='',ls='';
 ks.forEach((k,i)=>{const t=(-90+i*360/ks.length)*Math.PI/180,hx=50+27*Math.cos(t),hy=50+34*Math.sin(t),m=SKILLS[k].length;
  ln+=`<line data-g="${i}" x1="50" y1="50" x2="${hx}" y2="${hy}"/>`;nd+=`<button class="hub" data-g="${i}" style="left:${hx}%;top:${hy}%">${k}</button>`;
  SKILLS[k].forEach((s,j)=>{const d=hx>=50?1:-1,sx=hx+d*12,sy=hy+(j-(m-1)/2)*8;
   ln+=`<line data-g="${i}" x1="${hx}" y1="${hy}" x2="${sx}" y2="${sy}"/>`;nd+=`<span class="sn${d<0?' l':''}" data-g="${i}" style="left:${sx}%;top:${sy}%;--d:${(i*3+j)*.12}s;--b:${(i+j)*-1.1}s">${s}</span>`});
  ls+=`<div class="sl rv"><h3>${k}</h3><p>${SKILLS[k].map(s=>`<span>${s}</span>`).join('')}</p></div>`});
 el.innerHTML=`<div class="sk-map"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${ln}</svg><i class="core"></i>${nd}</div><div class="sk-list">${ls}</div>`;
 const set=g=>{el.classList.toggle('focus',g!=null);el.querySelectorAll('[data-g]').forEach(x=>x.classList.toggle('on',x.dataset.g===g))};
 el.addEventListener('pointerover',e=>{const x=e.target.closest('[data-g]');set(x?x.dataset.g:null)});el.addEventListener('pointerleave',()=>set(null));
 el.addEventListener('focusin',e=>{const x=e.target.closest('[data-g]');set(x?x.dataset.g:null)});el.addEventListener('focusout',()=>set(null))}
function equalize(){const els=[...document.querySelectorAll('#pg .proj')];els.forEach(e=>e.style.minHeight='');const h=Math.max(...els.map(e=>e.offsetHeight));els.forEach(e=>e.style.minHeight=h+'px')}
function countUp(){const c=$('[data-count]');if(!c)return;new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();const t=+c.dataset.count;if(RM)return;const s=performance.now();(function f(n){const p=Math.min(1,(n-s)/1500);c.textContent=(t*(1-Math.pow(1-p,3))).toFixed(2);if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.4}).observe(c)}
// case study view
const cs=$('#case');
function route(){const id=location.hash.slice(1),i=PROJECTS.findIndex(x=>x.id==id),p=PROJECTS[i];
 if(p){const n3=PROJECTS.length,F=v=>v?`<p>${v}</p>`:'',
  bt=[p.github&&link(p.github,'GitHub repository'),p.figma&&link(p.figma,'Figma design'),p.demo&&link(p.demo,'Figma prototype')].filter(Boolean).join(''),
  sh=p.shots&&p.shots.length?p.shots.slice(0,3):[null,null,null],n=sh.length,
  album=sh.map((u,k)=>`<figure class="shot${u?'':' empty'}" style="--i:${k};--n:${n}">${u?`<img src="${u}" alt="${p.name} screenshot ${k+1}" loading="lazy">`:`Screenshot ${k+1}`}</figure>`).join(''),
  logo=p.logo?`<img src="${p.logo}" alt="${p.name} logo">`:'Logo',
  roles=p.roles.length?`<ul class="pl">${p.roles.map(r=>`<li>${r}</li>`).join('')}</ul>`:'',
  secs=[['Project overview',F(p.overview),'lead'],['Problem statement',F(p.problem)],['Proposed solution',F(p.solution)],['My role &amp; contributions',roles],['Development process',F(p.process)],['Challenges &amp; solutions',F(p.challenges),'warn']].filter(x=>x[1]).map((x,k)=>`<section class="csec ${x[2]||''}" style="--d:${k*90}ms"><span class="num">${String(k+1).padStart(2,'0')}</span><h3>${x[0]}</h3>${x[1]}</section>`).join(''),
  nx=PROJECTS[(i+1)%n3],pv=PROJECTS[(i+n3-1)%n3];
 $('#ci').innerHTML=`<div class="cprog"></div><a class="btn" href="#projects">&larr; Back to projects</a>
 <header class="chero" style="--ac:${p.c||'#a78bfa'}"><i class="blob b1"></i><i class="blob b2"></i><div class="clogo-tile${p.logo?' has':''}"${p.logoBg?` style="background:${p.logoBg}"`:''}>${logo}</div>
 <div class="ctitle"><span class="tl">${p.type}</span>${p.proto?'<span class="badge">Design prototype, not a built application</span>':''}<h2>${p.name}</h2><p class="csum">${p.sum}</p></div></header>
 <div class="album" tabindex="0" style="--ac:${p.c||'#a78bfa'};--ar:${p.ratio||'9/16'}" aria-label="${p.name} screenshots">${album}</div><p class="hint">Hover or tap the album to spread it out</p>
 <div class="cgrid" style="--ac:${p.c||'#a78bfa'}"><aside class="facts"><h4>Technologies</h4>${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}${bt?`<h4>Links</h4><div class="btns col">${bt}</div>`:''}</aside><div class="csecs">${secs}</div></div>
 <div class="cnext" role="navigation" aria-label="More projects"><a href="#${pv.id}"><small>&larr; Previous</small>${pv.name}</a><a href="#${nx.id}"><small>Next &rarr;</small>${nx.name}</a></div>`;
 cs.classList.add('on');cs.scrollTop=0;document.title=p.name+' — Shahad Alghamdi';cs.querySelector('a').focus({preventScroll:true})}
 else{cs.classList.remove('on');document.title='Shahad Alghamdi — Software Engineer'}}
addEventListener('hashchange',route);
cs.addEventListener('scroll',()=>{const b=cs.querySelector('.cprog');if(b)b.style.width=cs.scrollTop/Math.max(1,cs.scrollHeight-cs.clientHeight)*100+'%'},{passive:true});
$('#ci').addEventListener('click',e=>{const al=e.target.closest('.album');if(al)al.classList.toggle('open')});
$('#ci').addEventListener('keydown',e=>{const al=e.target.closest('.album');if(al&&(e.key==='Enter'||e.key===' ')){e.preventDefault();al.classList.toggle('open')}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function observe(){document.querySelectorAll('.rv:not(.in)').forEach(n=>RM?n.classList.add('in'):io.observe(n))}
// tilt + light
function bindTilt(){if(RM)return;document.querySelectorAll('.card').forEach(c=>{if(c._t)return;c._t=1;
 c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform=`perspective(800px) rotateY(${(x-.5)*8}deg) rotateX(${(.5-y)*8}deg) scale(1.04)`;c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%')});
 c.addEventListener('pointerleave',()=>c.style.transform='')})}
let mx=0,my=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1;document.body.style.setProperty('--mx',(mx+1)/2);document.body.style.setProperty('--my',(my+1)/2);document.querySelector('.bg').style.setProperty('--mx',(mx+1)/2);document.querySelector('.bg').style.setProperty('--my',(my+1)/2)});
// parallax
const o1=$('.o1'),o2=$('.o2');
if(!RM)addEventListener('scroll',()=>{const y=scrollY;o1.style.transform=`translateY(${y*-.12}px)`;o2.style.transform=`translateY(${y*-.25}px)`},{passive:true});
// 3D hero
(function(){const cv=$('#gl');try{
 const R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
 const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,50);C.position.z=5.2;
 const g=new THREE.SphereGeometry(1.15,96,96),base=g.attributes.position.array.slice();
 const m=new THREE.MeshPhysicalMaterial({color:0xc9b6ff,metalness:.25,roughness:.12,clearcoat:1,clearcoatRoughness:.05,emissive:0x3a2a7a,emissiveIntensity:.25});
 const b=new THREE.Mesh(g,m);S.add(b);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(1.6,.035,24,200),new THREE.MeshPhysicalMaterial({color:0xffb7d5,roughness:.1,clearcoat:1}));ring.rotation.x=1.2;S.add(ring);
 S.add(new THREE.AmbientLight(0xffffff,.65));
 const L1=new THREE.PointLight(0xff9cc7,2.2,20);L1.position.set(3,2,4);const L2=new THREE.PointLight(0x8f7bff,2,20);L2.position.set(-3,-2,3);const L3=new THREE.PointLight(0xffffff,1.6,20);S.add(L1,L2,L3);
 function size(){const w=cv.clientWidth,h=cv.clientHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}size();addEventListener('resize',size);
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
 const p=g.attributes.position,n=p.count;
 function frame(t){t*=.001;if(RM)t=0;
  for(let i=0;i<n;i++){const x=base[i*3],y=base[i*3+1],z=base[i*3+2],d=1+.13*(Math.sin(x*2.1+t*1.1)+Math.sin(y*2.4+t*1.4)+Math.sin(z*1.9+t*.9))/3*2;p.setXYZ(i,x*d,y*d,z*d)}
  p.needsUpdate=true;g.computeVertexNormals();
  b.rotation.y=t*.25+mx*.4;b.rotation.x=my*.3;ring.rotation.z=t*.3;ring.rotation.y=mx*.3;
  L3.position.set(mx*4,-my*3,3);R.render(S,C)}
 if(RM)frame(0);else(function loop(t){requestAnimationFrame(loop);if(vis&&!document.hidden)frame(t)})(0);
}catch(e){cv.style.cssText+=';background:radial-gradient(circle at 40% 35%,#fff,#c9b6ff 45%,#ff9cc7);border-radius:50%;opacity:.7'}})();
drawSkills();observe();bindTilt();countUp();equalize();addEventListener("resize",equalize);if(document.fonts)document.fonts.ready.then(equalize);route();
}
load();