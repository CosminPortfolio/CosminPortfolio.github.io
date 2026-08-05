const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const tabs = [...document.querySelectorAll('[data-case-tab]')];
const panels = [...document.querySelectorAll('[data-case-panel]')];
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const routeLinks = [...document.querySelectorAll('[data-route-case]')];

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

const selectCase = (name, focus = false) => {
  tabs.forEach((tab) => {
    const selected = tab.dataset.caseTab === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.casePanel !== name;
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCase(tab.dataset.caseTab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    tabs[nextIndex].click();
    tabs[nextIndex].focus();
  });
});

routeLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    selectCase(link.dataset.routeCase);
    document.querySelector('#work')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
    history.replaceState(null, '', '#work');
  });
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

document.querySelector('[data-year]').textContent = new Date().getFullYear();
