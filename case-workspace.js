const workSection = document.querySelector('#work');
const template = document.querySelector('#case-content-template');
const panels = Object.fromEntries(
  [...document.querySelectorAll('[data-case-panel]')].map((panel) => [panel.dataset.casePanel, panel])
);
const moduleTabs = [...document.querySelectorAll('[data-case-tab]')];
const routeLinks = [...document.querySelectorAll('[data-route-case]')];

if (!workSection || !template || !Object.keys(panels).length) {
  throw new Error('Case-study gallery markup is incomplete.');
}

const articles = [...template.content.querySelectorAll('[data-case-article]')];
const modules = {};

articles.forEach((article) => {
  const moduleId = article.dataset.module;
  modules[moduleId] ??= [];
  modules[moduleId].push({
    caseId: article.dataset.caseId,
    title: article.dataset.cardTitle,
    summary: article.dataset.cardSummary,
    article
  });
});

const surfaces = {};

Object.entries(panels).forEach(([moduleId, panel]) => {
  const overview = document.createElement('div');
  overview.className = 'case-panel__overview';
  while (panel.firstChild) overview.append(panel.firstChild);

  const caseArea = document.createElement('section');
  caseArea.className = 'case-area';
  caseArea.setAttribute('aria-labelledby', `case-gallery-title-${moduleId}`);

  const galleryHeader = document.createElement('header');
  galleryHeader.className = 'case-area__header';
  galleryHeader.innerHTML = `
    <h4 id="case-gallery-title-${moduleId}">Choose a case</h4>
    <p>${modules[moduleId].length} complete ${modules[moduleId].length === 1 ? 'case' : 'cases'} · one opens below</p>
  `;

  const gallery = document.createElement('div');
  gallery.className = 'case-gallery';
  gallery.setAttribute('role', 'tablist');
  gallery.setAttribute('aria-label', `Cases in ${moduleId}`);

  const reader = document.createElement('div');
  reader.className = 'case-reader';
  reader.id = `case-reader-${moduleId}`;
  reader.setAttribute('role', 'tabpanel');
  reader.setAttribute('aria-live', 'polite');

  modules[moduleId].forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'case-card';
    button.dataset.caseSelect = item.caseId;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', 'false');
    button.setAttribute('aria-controls', reader.id);
    button.tabIndex = index === 0 ? 0 : -1;
    button.innerHTML = `
      <strong>${item.title}</strong>
      <span>${item.summary}</span>
      <small>Read case <i aria-hidden="true">→</i></small>
    `;
    gallery.append(button);
  });

  caseArea.append(galleryHeader, gallery, reader);
  panel.append(overview, caseArea);
  surfaces[moduleId] = { panel, gallery, reader };
});

const state = {
  moduleId: 'strategy',
  caseId: modules.strategy[0].caseId,
  suppressModuleClick: false
};

const parseHash = () => {
  const match = location.hash.match(/^#case\/([^/]+)(?:\/([^/]+))?$/);
  if (!match) return null;
  const moduleId = modules[match[1]] ? match[1] : 'strategy';
  const requestedCase = modules[moduleId].find((item) => item.caseId === match[2]);
  return {
    moduleId,
    caseId: requestedCase?.caseId || modules[moduleId][0].caseId,
    canonical: Boolean(modules[match[1]]) && (!match[2] || Boolean(requestedCase))
  };
};

const caseHash = (moduleId, caseId) => `#case/${moduleId}/${caseId}`;

const selectModule = (moduleId) => {
  const tab = moduleTabs.find((item) => item.dataset.caseTab === moduleId);
  if (!tab || tab.getAttribute('aria-selected') === 'true') return;
  state.suppressModuleClick = true;
  tab.click();
  state.suppressModuleClick = false;
};

const updateGallery = (moduleId, caseId) => {
  const buttons = [...surfaces[moduleId].gallery.querySelectorAll('[data-case-select]')];
  buttons.forEach((button) => {
    const selected = button.dataset.caseSelect === caseId;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
};

const renderCase = (moduleId, caseId, { historyMode = null, focus = false } = {}) => {
  const item = modules[moduleId]?.find((candidate) => candidate.caseId === caseId);
  if (!item) return;

  selectModule(moduleId);
  const surface = surfaces[moduleId];
  const clone = item.article.cloneNode(true);
  const heading = clone.querySelector('h3');

  Object.entries(surfaces).forEach(([candidateModule, candidateSurface]) => {
    if (candidateModule === moduleId) return;
    candidateSurface.reader.replaceChildren();
    candidateSurface.reader.removeAttribute('aria-labelledby');
  });

  heading.id = `case-title-${moduleId}-${caseId}`;
  surface.reader.setAttribute('aria-labelledby', heading.id);
  surface.reader.replaceChildren(clone);
  updateGallery(moduleId, caseId);

  state.moduleId = moduleId;
  state.caseId = caseId;

  if (historyMode) {
    const nextHash = caseHash(moduleId, caseId);
    if (location.hash !== nextHash) history[`${historyMode}State`]({ moduleId, caseId }, '', nextHash);
  }

  if (focus) {
    requestAnimationFrame(() => {
      heading.focus({ preventScroll: true });
      const bounds = heading.getBoundingClientRect();
      if (bounds.top < 88 || bounds.top > window.innerHeight * 0.82) {
        window.scrollTo({
          top: window.scrollY + bounds.top - 96,
          behavior: 'auto'
        });
      }
    });
  }
};

Object.entries(surfaces).forEach(([moduleId, surface]) => {
  surface.gallery.addEventListener('click', (event) => {
    const button = event.target.closest('[data-case-select]');
    if (!button) return;
    renderCase(moduleId, button.dataset.caseSelect, { historyMode: 'push', focus: true });
  });

  surface.gallery.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const buttons = [...surface.gallery.querySelectorAll('[data-case-select]')];
    const current = buttons.indexOf(document.activeElement);
    let next = current < 0 ? 0 : current;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (next + 1) % buttons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (next - 1 + buttons.length) % buttons.length;
    buttons[next].focus();
    renderCase(moduleId, buttons[next].dataset.caseSelect, { historyMode: 'push' });
  });
});

moduleTabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    if (state.suppressModuleClick) return;
    const moduleId = tab.dataset.caseTab;
    const currentCase = state.moduleId === moduleId ? state.caseId : modules[moduleId][0].caseId;
    const keepTabFocus = event.detail === 0 && document.activeElement === tab;
    renderCase(moduleId, currentCase, { historyMode: 'push', focus: !keepTabFocus });
  });
});

routeLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const moduleId = link.dataset.routeCase;
    renderCase(moduleId, modules[moduleId][0].caseId, { historyMode: 'replace', focus: true });
  });
});

const restoreFromLocation = ({ canonicalize = false } = {}) => {
  const route = parseHash();
  if (!route) return;
  renderCase(route.moduleId, route.caseId, { focus: true });
  if (canonicalize && !route.canonical) {
    history.replaceState({ moduleId: route.moduleId, caseId: route.caseId }, '', caseHash(route.moduleId, route.caseId));
  }
};

window.addEventListener('popstate', () => restoreFromLocation({ canonicalize: true }));
window.addEventListener('hashchange', () => restoreFromLocation({ canonicalize: true }));

const initialRoute = parseHash();
if (initialRoute) {
  renderCase(initialRoute.moduleId, initialRoute.caseId, { focus: true });
  if (!initialRoute.canonical) {
    history.replaceState(
      { moduleId: initialRoute.moduleId, caseId: initialRoute.caseId },
      '',
      caseHash(initialRoute.moduleId, initialRoute.caseId)
    );
  }
} else {
  renderCase(state.moduleId, state.caseId);
}
