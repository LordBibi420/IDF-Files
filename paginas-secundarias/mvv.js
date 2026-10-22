const calma=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('.foto').forEach(f=>{
  if(calma)return;
  f.addEventListener('pointermove',e=>{const r=f.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;f.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});
  f.addEventListener('pointerleave',()=>f.style.transform='');
});
document.querySelectorAll('.card button').forEach(b=>b.addEventListener('click',()=>{
  const c=b.closest('.card'),abre=!c.hasAttribute('data-abierto');
  c.toggleAttribute('data-abierto',abre);b.setAttribute('aria-expanded',abre);
}));
const ano=document.getElementById('ano');
if(ano){const s=()=>{const p=(ano.value-2026)/5;ano.closest('.tiempo').querySelector('output').textContent=ano.value==2026?'Hoy':ano.value;document.querySelector('.foto').style.setProperty('--p',p)};ano.addEventListener('input',s);s()}
const bm=document.getElementById('btnMenu'),nv=document.getElementById('navPrincipal');
if(bm)bm.addEventListener('click',()=>bm.setAttribute('aria-expanded',nv.classList.toggle('abierto')));