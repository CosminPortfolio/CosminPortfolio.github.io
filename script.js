const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

const setMenu = (open) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('data-open', String(open));
};

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu?.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-30% 0px -60%', threshold: [0, .2, .5] });
  sections.forEach((section) => sectionObserver.observe(section));
}

const updateHeader = () => header?.setAttribute('data-scrolled', String(window.scrollY > 24));
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
