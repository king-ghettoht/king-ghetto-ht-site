// js/main.js

(function () {
  // Elementos
  const navLinks = document.getElementById('navLinks');
  const nav = document.querySelector('nav.nav');
  const toggleBtn = document.querySelector('.nav-toggle');

  // Asegura que existan antes de seguir
  if (!navLinks || !nav) return;

  // Abrir / cerrar
  function openNav() {
    navLinks.classList.add('show');
  }

  function closeNav() {
    navLinks.classList.remove('show');
  }

  // Exponer para el botón inline: onclick="toggleNav()"
  window.toggleNav = function toggleNav() {
    navLinks.classList.toggle('show');
  };

  // Cerrar al hacer clic en cualquier enlace del menú
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeNav());
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Cerrar al hacer clic fuera del nav (en móvil)
  document.addEventListener('click', (e) => {
    const clickDentroDeNav = e.target.closest('nav.nav');
    const abierto = navLinks.classList.contains('show');
    // Si está abierto y el clic NO fue dentro del nav, ciérralo
    if (abierto && !clickDentroDeNav) closeNav();
  });

  // (Opcional) Evitar scroll falso cuando el menú se abre en móvil
  // Descomenta si quieres bloquear scroll del body cuando el menú está abierto
  /*
  const body = document.body;
  const observer = new MutationObserver(() => {
    if (navLinks.classList.contains('show')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });
  observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });
  */
})();
