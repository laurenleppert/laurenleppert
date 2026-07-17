// Mobile navigation toggle + a11y
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinksWrapper = document.getElementById('primary-navigation');

if (menuToggle && nav && navLinksWrapper) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu when a nav link is clicked (one-page UX)
  const navLinks = navLinksWrapper.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Footer year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Reveal-on-scroll for timeline items (gentle fade/slide)
const toReveal = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && toReveal.length) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  toReveal.forEach(el => io.observe(el));
}
