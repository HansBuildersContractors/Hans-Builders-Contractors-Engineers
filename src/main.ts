import { setupCarousel } from './carousel.js';
import { regions } from './data.js';

const header = document.querySelector<HTMLElement>('#site-header')!;
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
const menu=document.querySelector<HTMLDialogElement>('#mobile-menu')!;
const trigger=document.querySelector<HTMLButtonElement>('.menu-toggle')!;
trigger.addEventListener('click',()=>{menu.showModal();trigger.setAttribute('aria-expanded','true');document.body.classList.add('dialog-open');});
menu.querySelector('.menu-close')!.addEventListener('click',()=>menu.close());
menu.addEventListener('close',()=>{trigger.setAttribute('aria-expanded','false');document.body.classList.remove('dialog-open');});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>menu.close()));

document.querySelectorAll<HTMLButtonElement>('[data-region]').forEach(button=>button.addEventListener('click',()=>{
 const region=regions[Number(button.dataset.region)];
 document.querySelectorAll<HTMLButtonElement>('[data-region]').forEach(b=>{const selected=b.dataset.region===button.dataset.region;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 document.querySelector('#region-name')!.textContent=region.name;
 document.querySelector('#region-label')!.textContent=region.label;
 document.querySelector('#region-description')!.textContent=region.detail;
}));

const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches){
 document.documentElement.classList.add('js-motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
 if(matchMedia('(pointer:fine)').matches){
  document.querySelectorAll<HTMLElement>('.capability-card').forEach(card=>{
   card.addEventListener('pointermove',event=>{if(reduced.matches)return;const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*3}deg) rotateY(${x*3}deg)`;});
   card.addEventListener('pointerleave',()=>{card.style.transform='';});
  });
 }
}
setupCarousel();
