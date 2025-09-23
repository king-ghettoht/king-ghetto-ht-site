function toggleNav(){document.getElementById('navLinks').classList.toggle('show');}
/* === Nav mobile toggle === */
function toggleNav(){
  const links = document.getElementById('navLinks');
  const btn = document.querySelector('.nav-toggle');
  const isOpen = links.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Cerrar el menú al hacer click en un enlace o fuera
document.addEventListener('click', (e)=>{
  const links = document.getElementById('navLinks');
  const btn = document.querySelector('.nav-toggle');
  if (!links || !btn) return;
  const clickedInsideMenu = links.contains(e.target) || btn.contains(e.target);
  if (!clickedInsideMenu && links.classList.contains('open')){
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// Cerrar con ESC
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape'){
    const links = document.getElementById('navLinks');
    const btn = document.querySelector('.nav-toggle');
    if (links && links.classList.contains('open')){
      links.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }
});
