import { projects } from './data.js';
export function setupCarousel(){
 const root=document.querySelector<HTMLElement>('.carousel')!;
 const stage=document.querySelector<HTMLElement>('#slide-stage')!;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const toggle=document.querySelector<HTMLButtonElement>('#toggle-autoplay')!;
 let current=0, paused=reduced.matches, hovered=false, focused=false, visible=false, timer:number|undefined, requestId=0;
 const loaded=new Map<string,HTMLImageElement>();
 const preload=(index:number)=>{
  const key=projects[index].key;
  if(!loaded.has(key)){const img=new Image();img.src=`./assets/${key}.webp`;loaded.set(key,img);}
  return loaded.get(key)!;
 };
 function schedule(){
  window.clearTimeout(timer);
  if(!paused&&!hovered&&!focused&&visible&&!document.hidden&&!reduced.matches)timer=window.setTimeout(()=>void show(current+1,false),7500);
 }
 function buttonState(){toggle.textContent=paused?'▷':'Ⅱ';toggle.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow');toggle.setAttribute('aria-pressed',String(paused));}
 async function show(index:number,announce=true){
  const next=(index+projects.length)%projects.length;
  const id=++requestId;
  window.clearTimeout(timer);
  const image=preload(next);
  try{await image.decode();}catch{document.querySelector('#slide-announcement')!.textContent='This image could not load. Please try another capability.';schedule();return;}
  if(id!==requestId)return;
  current=next;
  const project=projects[current];
  const newImage=image.cloneNode() as HTMLImageElement;
  newImage.className='slide-image';newImage.alt=project.alt;newImage.width=1672;newImage.height=941;
  const oldImages=Array.from(stage.querySelectorAll('img'));
  stage.append(newImage);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{newImage.classList.add('active');oldImages.forEach(img=>img.classList.remove('active'));}));
  setTimeout(()=>oldImages.forEach(img=>img.remove()),reduced.matches?0:700);
  const text:Record<string,string>={'slide-counter':String(current+1).padStart(2,'0'),'slide-eyebrow':project.eyebrow,'slide-title':project.title,'slide-description':project.description,'slide-category':project.category,'slide-capability':project.capability,'slide-expertise':project.expertise};
  Object.entries(text).forEach(([id,value])=>document.getElementById(id)!.textContent=value);
  root.querySelectorAll<HTMLButtonElement>('[data-slide]').forEach(b=>{if(Number(b.dataset.slide)===current)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});
  if(announce)document.querySelector('#slide-announcement')!.textContent=`${current+1} of ${projects.length}. ${project.title}`;
  preload((current+1)%projects.length);schedule();
 }
 document.querySelector('#previous-slide')!.addEventListener('click',()=>void show(current-1));
 document.querySelector('#next-slide')!.addEventListener('click',()=>void show(current+1));
 root.querySelectorAll<HTMLButtonElement>('[data-slide]').forEach(b=>b.addEventListener('click',()=>void show(Number(b.dataset.slide))));
 toggle.addEventListener('click',()=>{paused=!paused;buttonState();schedule();});
 root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();void show(current+(e.key==='ArrowRight'?1:-1));}});
 root.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){hovered=true;schedule();}});
 root.addEventListener('pointerleave',()=>{hovered=false;schedule();});
 root.addEventListener('focusin',()=>{focused=true;schedule();});
 root.addEventListener('focusout',()=>{setTimeout(()=>{focused=root.contains(document.activeElement);schedule();},0);});
 document.addEventListener('visibilitychange',schedule);
 reduced.addEventListener('change',()=>{paused=reduced.matches;buttonState();schedule();});
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)preload((current+1)%projects.length);schedule();},{threshold:.15});observer.observe(root);
 let startX=0,startY=0;
 stage.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;startY=e.touches[0].clientY;},{passive:true});
 stage.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.3)void show(current+(dx<0?1:-1));},{passive:true});
 buttonState();
}
