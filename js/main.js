function toggleNav(){
  const links=document.getElementById('navLinks');
  const btn=document.querySelector('.nav-toggle');
  const isOpen=links.classList.toggle('open');
  if(btn) btn.setAttribute('aria-expanded', isOpen?'true':'false');
}
document.addEventListener('click', (e)=>{
  const links=document.getElementById('navLinks');
  const btn=document.querySelector('.nav-toggle');
  if(!links||!btn) return;
  const inside = links.contains(e.target)||btn.contains(e.target);
  if(!inside && links.classList.contains('open')){
    links.classList.remove('open'); btn.setAttribute('aria-expanded','false');
  }
});
