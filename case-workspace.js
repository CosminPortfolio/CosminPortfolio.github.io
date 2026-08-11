const workSection = document.querySelector('#work');
const template = document.querySelector('#case-content-template');
const panelHost = document.querySelector('.case-panels');
const moduleTabs = [...document.querySelectorAll('[data-case-tab]')];
const routeLinks = [...document.querySelectorAll('[data-route-case]')];

if (!workSection || !template || !panelHost || !moduleTabs.length) {
  throw new Error('Case-study workspace markup is incomplete.');
}

const moduleOrder = ['strategy', 'measurement', 'optimization', 'reporting'];
const moduleLabels = {
  strategy: 'Search strategy',
  measurement: 'Measurement',
  optimization: 'Optimization',
  reporting: 'Reporting'
};

const cases = [...template.content.querySelectorAll('[data-case-article]')].map((article, index) => {
  const evidence = article.querySelector('img');
  return {
    article,
    moduleId: article.dataset.module,
    caseId: article.dataset.caseId,
    title: article.dataset.cardTitle,
    summary: article.dataset.cardSummary,
    number: String(index + 1).padStart(2, '0'),
    evidenceSrc: evidence?.getAttribute('src') || '',
    evidenceAlt: evidence?.getAttribute('alt') || ''
  };
});

const casesByModule = Object.fromEntries(
  moduleOrder.map((moduleId) => [moduleId, cases.filter((item) => item.moduleId === moduleId)])
);

const moduleBriefs = Object.fromEntries(
  moduleOrder.map((moduleId) => {
    const source = panelHost.querySelector(`[data-case-panel="${moduleId}"]`);
    if (!source) return [moduleId, null];
    const brief = source.cloneNode(true);
    brief.removeAttribute('id');
    brief.removeAttribute('role');
    brief.removeAttribute('aria-labelledby');
    brief.removeAttribute('data-case-panel');
    brief.removeAttribute('hidden');
    brief.className = 'module-brief';
    return [moduleId, brief];
  })
);

const moduleBriefHost = document.createElement('div');
moduleBriefHost.className = 'module-brief-host';
moduleBriefHost.setAttribute('aria-label', 'Search strategy overview');

const workspace = document.createElement('div');
workspace.className = 'proof-workspace';

const indexPanel = document.createElement('section');
indexPanel.className = 'proof-index-panel';
indexPanel.setAttribute('aria-labelledby', 'proof-index-title');
indexPanel.innerHTML = `
  <header class="proof-index-header">
    <h3 id="proof-index-title">Search strategy</h3>
    <p>5 case studies</p>
  </header>
`;

const caseIndex = document.createElement('div');
caseIndex.className = 'proof-index';
caseIndex.setAttribute('role', 'tablist');
caseIndex.setAttribute('aria-label', 'Case studies in the selected category');

const reader = document.createElement('section');
reader.className = 'case-reader';
reader.id = 'case-reader';
reader.setAttribute('role', 'tabpanel');
reader.setAttribute('aria-live', 'polite');

cases.forEach((item, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'proof-card';
  button.dataset.caseSelect = item.caseId;
  button.dataset.module = item.moduleId;
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', 'false');
  button.setAttribute('aria-controls', reader.id);
  button.tabIndex = index === 0 ? 0 : -1;
  button.innerHTML = `
    <span class="proof-card__number">${item.number}</span>
    <span class="proof-card__image">${item.evidenceSrc ? `<img src="${item.evidenceSrc}" alt="" loading="lazy" decoding="async">` : '<i aria-hidden="true"></i>'}</span>
    <strong>${item.title}</strong>
    <small>${item.summary}</small>
  `;
  caseIndex.append(button);
});

indexPanel.append(caseIndex);
workspace.append(indexPanel, reader);
panelHost.replaceChildren(moduleBriefHost, workspace);
panelHost.hidden = false;
panelHost.id = 'case-workspace-region';

moduleTabs.forEach((tab) => {
  tab.setAttribute('aria-controls', panelHost.id);
  const count = casesByModule[tab.dataset.caseTab]?.length || 0;
  const detail = tab.querySelector('small');
  if (detail) detail.textContent = `${count} case ${count === 1 ? 'study' : 'studies'}`;
});

const state = {
  moduleId: 'strategy',
  caseId: casesByModule.strategy[0].caseId
};

const caseHash = (moduleId, caseId) => `#case/${moduleId}/${caseId}`;

const parseHash = () => {
  const match = location.hash.match(/^#case\/([^/]+)(?:\/([^/]+))?$/);
  if (!match) return null;
  const moduleId = casesByModule[match[1]] ? match[1] : 'strategy';
  const requested = casesByModule[moduleId].find((item) => item.caseId === match[2]);
  return {
    moduleId,
    caseId: requested?.caseId || casesByModule[moduleId][0].caseId,
    canonical: Boolean(casesByModule[match[1]]) && Boolean(requested)
  };
};

const setModuleState = (moduleId) => {
  moduleTabs.forEach((tab) => {
    const selected = tab.dataset.caseTab === moduleId;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  const categoryCases = casesByModule[moduleId];
  indexPanel.querySelector('h3').textContent = moduleLabels[moduleId];
  indexPanel.querySelector('p').textContent = `${categoryCases.length} case ${categoryCases.length === 1 ? 'study' : 'studies'}`;
  caseIndex.setAttribute('aria-label', `${moduleLabels[moduleId]} case studies`);
  moduleBriefHost.setAttribute('aria-label', `${moduleLabels[moduleId]} overview`);
  const brief = moduleBriefs[moduleId];
  if (brief) moduleBriefHost.replaceChildren(brief.cloneNode(true));
  else moduleBriefHost.replaceChildren();

  [...caseIndex.querySelectorAll('[data-case-select]')].forEach((button) => {
    button.hidden = button.dataset.module !== moduleId;
  });
};

moduleBriefHost.addEventListener('click', (event) => {
  const link = event.target.closest('[data-architecture-case]');
  if (!link) return;
  event.preventDefault();
  renderCase('strategy', link.dataset.architectureCase, { historyMode: 'push', focus: true });
});

const buildWorkflow = (caseId) => {
  const activeStep = {
    'search-term-audit': 'Negative Keyword Governance',
    'rsa-testing': 'Creative Experimentation',
    'auction-memo': 'Competitive Response'
  }[caseId];
  if (!activeStep) return null;

  const nav = document.createElement('nav');
  nav.className = 'workflow-bar';
  nav.setAttribute('aria-label', 'Optimization workflow');
  ['Search Query Intelligence', 'Negative Keyword Governance', 'Creative Experimentation', 'Competitive Response', 'Performance Lift'].forEach((label) => {
    const span = document.createElement('span');
    span.textContent = label;
    if (label === activeStep) {
      span.className = 'is-active';
      span.setAttribute('aria-current', 'step');
    }
    nav.append(span);
  });
  return nav;
};

const reportingMetrics = {
  'fleet-executive': [['$7.6M', 'Total revenue'], ['838.4K', 'Conversions'], ['784.2K', 'Clicks'], ['67.62%', 'Conversion rate']],
  'roas-pacing': [['$613.52K', 'Total spend'], ['$7.6M', 'Total revenue'], ['1,244.30%', 'Actual ROAS · 12.44x'], ['830.3K', 'Conversions']],
  'funnel-attribution': [['66.6M', 'Impressions · TOF'], ['727.8K', 'Clicks · mid-funnel'], ['830.3K', 'Conversions · BOF'], ['70.2%', 'Macro conversion rate']]
};

const addReportingMetrics = (clone, caseId) => {
  const metrics = reportingMetrics[caseId];
  if (!metrics) return;
  const board = document.createElement('div');
  board.className = 'source-metric-strip';
  board.setAttribute('aria-label', 'Source dashboard headline metrics');
  metrics.forEach(([value, label]) => {
    const item = document.createElement('div');
    item.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    board.append(item);
  });
  clone.querySelector('.full-case__header')?.append(board);
};

const addCaseNavigation = (clone, item) => {
  const categoryCases = casesByModule[item.moduleId];
  const index = categoryCases.indexOf(item);
  const previous = categoryCases[(index - 1 + categoryCases.length) % categoryCases.length];
  const next = categoryCases[(index + 1) % categoryCases.length];
  const nav = document.createElement('nav');
  nav.className = 'case-dossier-nav';
  nav.setAttribute('aria-label', 'Case study navigation');
  nav.innerHTML = `
    <a href="${caseHash(previous.moduleId, previous.caseId)}" data-case-jump="${previous.caseId}" data-module="${previous.moduleId}"><span>Previous case</span><strong>${previous.number} · ${previous.title}</strong></a>
    <a href="${caseHash(next.moduleId, next.caseId)}" data-case-jump="${next.caseId}" data-module="${next.moduleId}"><span>Next case</span><strong>${next.number} · ${next.title}</strong></a>
  `;
  clone.append(nav);
};

const renderCase = (moduleId, caseId, { historyMode = null, focus = false } = {}) => {
  const item = cases.find((candidate) => candidate.moduleId === moduleId && candidate.caseId === caseId);
  if (!item) return;

  const clone = item.article.cloneNode(true);
  const heading = clone.querySelector('h3');
  heading.id = `case-title-${moduleId}-${caseId}`;
  const proofId = document.createElement('p');
  proofId.className = 'case-proof-id';
  proofId.textContent = `Case ${item.number} of ${cases.length} · ${moduleLabels[moduleId]}`;
  clone.querySelector('.full-case__header')?.prepend(proofId);

  const workflow = buildWorkflow(caseId);
  if (workflow) clone.querySelector('.case-story')?.before(workflow);
  addReportingMetrics(clone, caseId);
  addCaseNavigation(clone, item);

  reader.setAttribute('aria-labelledby', heading.id);
  reader.replaceChildren(clone);
  setModuleState(moduleId);

  [...caseIndex.querySelectorAll('[data-case-select]')].forEach((button) => {
    const selected = button.dataset.caseSelect === caseId && button.dataset.module === moduleId;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });

  state.moduleId = moduleId;
  state.caseId = caseId;

  if (historyMode) {
    const nextHash = caseHash(moduleId, caseId);
    if (location.hash !== nextHash) history[`${historyMode}State`]({ moduleId, caseId }, '', nextHash);
  }

  if (focus) {
    requestAnimationFrame(() => {
      heading.focus({ preventScroll: true });
      reader.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }
};

caseIndex.addEventListener('click', (event) => {
  const button = event.target.closest('[data-case-select]');
  if (!button) return;
  renderCase(button.dataset.module, button.dataset.caseSelect, { historyMode: 'push', focus: true });
});

caseIndex.addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const buttons = [...caseIndex.querySelectorAll('[data-case-select]:not([hidden])')];
  const current = Math.max(0, buttons.indexOf(document.activeElement));
  const columns = window.matchMedia('(min-width: 1120px)').matches ? 4 : window.matchMedia('(min-width: 760px)').matches ? 3 : 1;
  let next = current;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = buttons.length - 1;
  if (event.key === 'ArrowRight') next = (current + 1) % buttons.length;
  if (event.key === 'ArrowLeft') next = (current - 1 + buttons.length) % buttons.length;
  if (event.key === 'ArrowDown') next = Math.min(current + columns, buttons.length - 1);
  if (event.key === 'ArrowUp') next = Math.max(current - columns, 0);
  buttons[next].focus();
});

reader.addEventListener('click', (event) => {
  const link = event.target.closest('[data-case-jump]');
  if (!link) return;
  event.preventDefault();
  renderCase(link.dataset.module, link.dataset.caseJump, { historyMode: 'push', focus: true });
});

moduleTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const moduleId = tab.dataset.caseTab;
    const caseId = state.moduleId === moduleId ? state.caseId : casesByModule[moduleId][0].caseId;
    renderCase(moduleId, caseId, { historyMode: 'push' });
  });

  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const current = moduleTabs.indexOf(tab);
    let next = current;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = moduleTabs.length - 1;
    if (event.key === 'ArrowRight') next = (current + 1) % moduleTabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + moduleTabs.length) % moduleTabs.length;
    moduleTabs[next].focus();
    moduleTabs[next].click();
  });
});

routeLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const moduleId = link.dataset.routeCase;
    renderCase(moduleId, casesByModule[moduleId][0].caseId, { historyMode: 'replace', focus: true });
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
  renderCase(initialRoute.moduleId, initialRoute.caseId);
  if (!initialRoute.canonical) {
    history.replaceState({ moduleId: initialRoute.moduleId, caseId: initialRoute.caseId }, '', caseHash(initialRoute.moduleId, initialRoute.caseId));
  }
} else {
  renderCase(state.moduleId, state.caseId);
}
