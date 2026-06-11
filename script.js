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
  if (window.scrollY > 50) {
    nav.style.padding = '1rem 5vw';
    nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    nav.style.padding = '1.5rem 5vw';
    nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
  }
});
