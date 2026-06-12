// ── Modal de Vídeo ──
function openModal(src, desc) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const descEl = document.getElementById('modalDesc');
  video.querySelector('source').src = src;
  video.load();
  video.play();
  descEl.textContent = desc;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  video.querySelector('source').src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Mobile Menu ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── Scroll Animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Staggered Children ──
document.querySelectorAll('.services-grid, .testi-grid, .process-steps').forEach(parent => {
  [...parent.querySelectorAll('.fade-up')].forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── Nav Scroll Effect ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
