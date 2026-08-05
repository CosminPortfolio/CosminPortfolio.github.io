const caseModules = {
  strategy: {
    label: 'Strategy & architecture',
    shortLabel: 'Campaign builds',
    cases: [
      {
        caseId: 'brand-defense', shortLabel: 'Brand defense', title: 'Brand Defense', type: 'Google Ads Search', context: 'United States · 5 pages',
        synopsis: 'A precision-led Search build for protecting branded purchase intent without mixing it with broader discovery traffic.',
        question: 'How should branded purchase intent be protected without mixing it with broader discovery traffic?',
        decision: 'Use exact and phrase match, campaign-level exclusions, a €1.50 CPC ceiling, and official-store messaging.',
        artifact: 'A paused campaign build with keyword groups, campaign controls, sitelinks, and launch checks.',
        next: 'Launch with approved brand rules, then evaluate query quality, CPC, conversion rate, and incremental value.',
        limit: 'Portfolio exercise using staged platform screens; no verified Apple campaign performance is claimed.',
        pdf: 'assets/cases/brand-defense.pdf', pages: 5, route: 'campaign-brand-defense.html',
        notion: 'Case-Study-01-Brand-Defense-3a5425578d358038afccf032fbc514bc'
      },
      {
        caseId: 'flagship-driver', shortLabel: 'Flagship driver', title: 'Flagship Driver', type: 'Google Ads Search', context: 'United States · 5 pages',
        synopsis: 'A purchase-focused flagship campaign with controlled automation, commercial query routing, and launch verification.',
        question: 'How can a flagship-product campaign capture volume without surrendering routing and budget control?',
        decision: 'Build Search directly, align each product asset to its destination, and keep the demonstration campaign paused.',
        artifact: 'A campaign setup, product sitelink system, responsive ad, and launch-verification view.',
        next: 'Validate tracking, landing pages, policy status, and query routing before any bid-strategy automation.',
        limit: 'The platform screens show a staged build rather than traffic, spend, or employer results.',
        pdf: 'assets/cases/flagship-driver.pdf', pages: 5, route: 'campaign-flagship-driver.html',
        notion: 'Case-Study-02-Flagship-Driver-3a5425578d358049b0d5c2d760b0fd96'
      },
      {
        caseId: 'mac-b2b', shortLabel: 'Mac B2B', title: 'Mac B2B & Pro Creator', type: 'Google Ads Search', context: 'United States · 6 pages',
        synopsis: 'A high-value route separating professional, fleet, procurement, developer, and creator intent from consumer traffic.',
        question: 'How should professional and business intent be separated from general consumer hardware traffic?',
        decision: 'Keep URL control, combine exact and phrase intent, and use business-specific assets and exclusions.',
        artifact: 'Automation controls, keyword architecture, technical RSA copy, negative taxonomy, and a paused build.',
        next: 'Confirm landing-page capability, sales follow-up, audience policy, and lead-quality feedback before launch.',
        limit: 'The case demonstrates campaign construction and does not claim qualified leads or sales.',
        pdf: 'assets/cases/mac-b2b-pro-creator.pdf', pages: 6, route: 'campaign-mac-b2b.html',
        notion: 'Case-Study-03-Mac-B2B-Pro-Creator-3a5425578d35804e83f0dde79467c968'
      },
      {
        caseId: 'competitor-conquesting', shortLabel: 'Conquesting', title: 'Competitor Conquesting', type: 'Google Ads Search', context: 'United States · 6 pages',
        synopsis: 'A controlled switcher route built around migration concerns, dedicated destinations, policy discipline, and exclusions.',
        question: 'How can competitor demand be addressed without relying on unsupported comparison claims?',
        decision: 'Lead with switching friction, route to a dedicated page, and isolate competitor terms and exclusions.',
        artifact: 'Campaign controls, landing-page requirements, keyword groups, RSA messaging, and negatives.',
        next: 'Confirm legal language, query economics, landing-page completion, and conversion tracking in a bounded test.',
        limit: 'The campaign is a staged scenario; competitor benchmarks and outcomes are not live observations.',
        pdf: 'assets/cases/competitor-conquesting.pdf', pages: 6, route: 'campaign-competitor.html',
        notion: 'Case-Study-04-Competitor-Conquesting-3a5425578d3580138e6fccde15a52a8d'
      },
      {
        caseId: 'performance-max', shortLabel: 'Performance Max', title: 'Performance Max Portfolio Growth', type: 'Google Ads Performance Max', context: 'United States · 6 pages',
        synopsis: 'A governed cross-channel growth layer designed to add reach without obscuring demand already owned by Search.',
        question: 'How should Performance Max add reach without obscuring the demand already owned by Search?',
        decision: 'Use a governed feed, one coherent asset group, complete creative coverage, and audience signals as inputs.',
        artifact: 'Merchant setup, asset-group configuration, creative inventory, sitelinks, and audience signals.',
        next: 'Validate the feed and tracking, establish a baseline, then test with an approved budget and holdout logic.',
        limit: 'The case shows controllable inputs, not incremental lift or verified production performance.',
        pdf: 'assets/cases/performance-max-growth.pdf', pages: 6, route: 'campaign-performance-max.html',
        notion: 'Case-Study-05-Performance-Max-Portfolio-Growth-3a5425578d35808e8ff1e772e67855c6'
      }
    ]
  },
  measurement: {
    label: 'Technical setup & measurement',
    shortLabel: 'Technical cases',
    cases: [
      {
        caseId: 'gtm-consent', shortLabel: 'GTM & consent', title: 'GTM Architecture & Consent Governance', type: 'GTM · Consent Mode v2', context: 'Technical blueprint · 3 pages',
        synopsis: 'A governed container, event-trigger, release, and Consent Mode architecture with an engineering-ready commerce payload.',
        question: 'How should container responsibilities, consent states, and commerce-event triggers be separated?',
        decision: 'Use a clear tag taxonomy, default-denied consent, event-driven triggers, and named releases.',
        artifact: 'A tag taxonomy, trigger model, release history, and engineering-ready add_to_cart payload contract.',
        next: 'Run GTM Preview and GA4 DebugView, then compare event payloads with the commerce backend.',
        limit: 'Public identifiers are withheld; the implementation model is presented as a portfolio blueprint.',
        pdf: 'assets/measurement/gtm-consent.pdf', pages: 3, route: 'measurement-gtm-consent.html',
        notion: 'Case-Study-01-GTM-Architecture-Consent-Governance-3a9425578d3580c4ad80fc5f28a7e2e3'
      },
      {
        caseId: 'cross-domain', shortLabel: 'Cross-domain', title: 'Stream Architecture & Cross-Domain Linker', type: 'GA4 web stream', context: 'Technical blueprint · 2 pages',
        synopsis: 'A session-continuity blueprint covering linker behavior, referral exclusions, internal traffic, and retention.',
        question: 'How can sessions and attribution remain intact when a commerce journey crosses domains?',
        decision: 'Configure linked domains, preserve the _gl parameter, exclude payment referrals, and govern internal traffic.',
        artifact: 'A stream-governance blueprint covering linker behavior, referral exclusions, traffic filters, and retention.',
        next: 'Trace one test journey across every domain and confirm the same client and session identifiers persist.',
        limit: 'The document specifies the architecture; it does not claim a verified production deployment.',
        pdf: 'assets/measurement/cross-domain.pdf', pages: 2, route: 'measurement-cross-domain.html',
        notion: 'Case-Study-02-Stream-Architecture-Cross-Domain-Linker-3a9425578d3580c7ad46dba7fb0d881d'
      },
      {
        caseId: 'events-validation', shortLabel: 'Events & QA', title: 'Key Events, E-Commerce Models & Real-Time Validation', type: 'GA4 e-commerce', context: 'Technical blueprint · 3 pages',
        synopsis: 'A commerce-event contract joining funnel definitions, required item parameters, counting rules, and QA evidence.',
        question: 'How should commerce milestones and payload requirements be defined and validated end to end?',
        decision: 'Use standard events, consistent item arrays, per-event counting, and a staged GTM-to-GA4 QA sequence.',
        artifact: 'An event specification linking commerce milestones, required parameters, counting rules, and QA evidence.',
        next: 'Validate controlled test orders in GTM Preview, DebugView, GA4 reports, and backend order totals.',
        limit: 'The document demonstrates the validation method without exposing production identifiers.',
        pdf: 'assets/measurement/events-validation.pdf', pages: 3, route: 'measurement-events-validation.html',
        notion: 'Case-Study-03-Key-Events-E-Commerce-Data-Models-Real-Time-Validation-3a9425578d35800e9ad7cee65506d21d'
      },
      {
        caseId: 'custom-definitions', shortLabel: 'Custom definitions', title: 'Custom Definitions, Metrics & User Properties', type: 'GA4 schema', context: 'Technical blueprint · 2 pages',
        synopsis: 'A registration map connecting raw commerce parameters to useful event-scoped and user-scoped analysis.',
        question: 'Which parameters should become durable GA4 definitions, and at what scope?',
        decision: 'Register item_category at event scope and customer_type at user scope with consent-aware activation.',
        artifact: 'A registration map connecting raw parameters to event-scoped and user-scoped GA4 definitions.',
        next: 'Confirm values in DebugView, wait for processing, and test the dimensions in Explorations and audiences.',
        limit: 'The case documents configuration choices rather than verified production reporting outcomes.',
        pdf: 'assets/measurement/custom-definitions.pdf', pages: 2, route: 'measurement-custom-definitions.html',
        notion: 'Case-Study-04-Custom-Definitions-Metrics-User-Properties-3a9425578d358040bbfffc97d505e58e'
      },
      {
        caseId: 'bigquery', shortLabel: 'BigQuery export', title: 'BigQuery Export & Cloud Warehousing', type: 'GA4 · BigQuery', context: 'Technical blueprint · 2 pages',
        synopsis: 'An export design covering daily and intraday modes, dataset residency, warehouse ownership, and analytical use.',
        question: 'How should event-level GA4 data be exported and governed for deeper analysis?',
        decision: 'Define export mode, dataset region, ownership, cost controls, and downstream questions before activation.',
        artifact: 'An export design covering mode, dataset region, ownership, and the warehouse questions the data should answer.',
        next: 'Complete the property link, inspect the first partitions, and reconcile purchase events with GA4 totals.',
        limit: 'The document shows the setup surface; it does not claim a completed production BigQuery link.',
        pdf: 'assets/measurement/bigquery-export.pdf', pages: 2, route: 'measurement-bigquery.html',
        notion: 'Case-Study-05-BigQuery-Data-Export-Cloud-Warehousing-Integration-3a9425578d3580bf96f1dba7b02bf6b0'
      }
    ]
  },
  optimization: {
    label: 'Optimization & management',
    shortLabel: 'Optimization deliverables',
    cases: [
      {
        caseId: 'search-term-audit', shortLabel: 'Search-term audit', title: 'Search-Term Audit & Negative Keyword Log', type: 'Search query governance', context: 'Working deliverable · 2 pages',
        synopsis: 'A repeatable query-classification and exclusion workflow for locating waste without blocking valuable intent.',
        question: 'How should a large query set be classified into keep, exact, isolate, or exclude decisions?',
        decision: 'Use spend and conversion evidence, record exclusion scope, and monitor approved changes for reversals.',
        artifact: 'A query-classification log with action, exclusion scope, expected effect, owner, and review cadence.',
        next: 'Export the search-term report, document the waste calculation, apply approved changes, and monitor reversals.',
        limit: 'The query counts, spend, and projected waste are demonstration values rather than verified employer results.',
        pdf: 'assets/optimization/search-term-audit.pdf', pages: 2, route: 'optimization-search-term-audit.html',
        notion: 'Deliverable-01-Search-Term-Audit-Negative-Keyword-Log-3ab425578d35808cabb0f8240f10bdba'
      },
      {
        caseId: 'rsa-testing', shortLabel: 'RSA experiment', title: 'Responsive Search Ad A/B Testing Framework', type: 'Creative experiment', context: 'Working deliverable · 2 pages',
        synopsis: 'A controlled experiment comparing price-anchor messaging with friction-reduction messaging using commercial guardrails.',
        question: 'Does friction-reduction messaging improve conversion performance relative to a price anchor?',
        decision: 'Test one message contrast with pre-registered metrics, stopping rules, and CPA/ROAS guardrails.',
        artifact: 'A test brief with one hypothesis, controlled message matrix, primary metric, guardrails, and rollout rule.',
        next: 'Use a campaign experiment where clean allocation is required and pre-register the stopping rule.',
        limit: 'The 30-day figures are illustrative and do not represent a live employer test.',
        pdf: 'assets/optimization/rsa-testing.pdf', pages: 2, route: 'optimization-rsa-testing.html',
        notion: 'Deliverable-02-Responsive-Search-Ad-RSA-A-B-Testing-Framework-3ab425578d35801ab310ec7991fe594a'
      },
      {
        caseId: 'auction-memo', shortLabel: 'Auction response', title: 'Competitive Auction Insights Strategy Memo', type: 'Auction response', context: 'Executive deliverable · 2 pages',
        synopsis: 'A bounded response memo that separates rank pressure, budget pressure, demand movement, and competitor displacement.',
        question: 'What evidence is required before responding to a modeled decline in impression share?',
        decision: 'Confirm the source of loss before changing bids, then use constrained creative and bidding tests.',
        artifact: 'A response memo separating rank pressure, budget pressure, demand movement, and competitor displacement.',
        next: 'Pull segmented Auction Insights, confirm the source of impression-share loss, and run a bounded response test.',
        limit: 'The competitor panel and benchmark table are explicitly modeled rather than live observations.',
        pdf: 'assets/optimization/auction-memo.pdf', pages: 2, route: 'optimization-auction-memo.html',
        notion: 'Deliverable-03-Competitive-Auction-Insights-Strategy-Memo-3ab425578d35809c8bd4dc9cb45ef695'
      }
    ]
  },
  reporting: {
    label: 'Reporting & analytics',
    shortLabel: 'Dashboard cases',
    cases: [
      {
        caseId: 'fleet-executive', shortLabel: 'Fleet center', title: 'SEM Fleet Executive Center', type: 'Executive reporting', context: 'Looker Studio case · 5 pages',
        synopsis: 'A 60-second leadership reading path from fleet status to trend, device mix, risks, and campaign accountability.',
        question: 'How can leadership assess fleet health and locate the decisions that need ownership in under a minute?',
        decision: 'Use a small KPI set, one trend, device composition, and a campaign accountability matrix.',
        artifact: 'A leadership dashboard with a defined reading path from status to trend, mix, and campaign accountability.',
        next: 'Reconcile platform totals, annotate known incidents, and present one decision with an owner and review date.',
        limit: 'Revenue, conversion, and CVR figures are demonstration values rather than independently verified results.',
        pdf: 'assets/reporting/fleet-executive.pdf', pages: 5, route: 'reporting-fleet-executive.html',
        notion: 'Case-Study-01-SEM-Fleet-Executive-Center-3b2425578d358090a33cdc657b99f917'
      },
      {
        caseId: 'roas-pacing', shortLabel: 'ROAS & pacing', title: 'Executive ROAS & Budget Pacing Monitor', type: 'Finance reporting', context: 'Looker Studio case · 5 pages',
        synopsis: 'A finance-facing control surface joining spend, revenue, calculated ROAS, pacing, and campaign profitability.',
        question: 'How should finance and marketing review return and pacing without hiding attribution or volume limitations?',
        decision: 'Define ROAS explicitly, reconcile monthly totals, isolate underperformers, and require approval before reallocating.',
        artifact: 'A finance-facing control surface for spend, revenue, calculated ROAS, pacing, and campaign-level profitability.',
        next: 'Validate the calculated field, reconcile monthly totals, and require stakeholder approval before reallocating budget.',
        limit: 'Spend, revenue, and ROAS figures are demonstration values rather than independently verified results.',
        pdf: 'assets/reporting/roas-pacing.pdf', pages: 5, route: 'reporting-roas-pacing.html',
        notion: 'Case-Study-02-Executive-ROAS-Budget-Pacing-Monitor-3b2425578d35805f9a94cf842555ea64'
      },
      {
        caseId: 'funnel-attribution', shortLabel: 'Funnel pathway', title: 'Funnel Attribution & Micro-Conversion Pathway', type: 'Performance reporting', context: 'Looker Studio case · 5 pages',
        synopsis: 'A full-funnel view joining traffic, device behavior, commercial outcomes, and stacked diagnostic events.',
        question: 'How should a team interpret a funnel when multiple diagnostic events make conversions exceed clicks?',
        decision: 'Separate commercial outcomes from micro-events, surface the counting caveat, and reconcile purchases.',
        artifact: 'A journey dashboard joining traffic, device behavior, macro conversions, and stacked micro-conversion events.',
        next: 'Audit event definitions, reconcile purchases, and separate diagnostic micro-events from the commercial outcome.',
        limit: 'Traffic, conversion, and device figures are demonstration values rather than independently verified results.',
        pdf: 'assets/reporting/funnel-attribution.pdf', pages: 5, route: 'reporting-funnel-attribution.html',
        notion: 'Case-Study-03-Funnel-Attribution-Micro-Conversion-Pathway-3b2425578d3580029250c679903b9288'
      }
    ]
  }
};

const workSection = document.querySelector('#work');
const template = document.querySelector('#case-workspace-template');
const panels = Object.fromEntries([...document.querySelectorAll('[data-case-panel]')].map((panel) => [panel.dataset.casePanel, panel]));
const moduleTabs = [...document.querySelectorAll('[data-case-tab]')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!workSection || !template || !Object.keys(panels).length) {
  throw new Error('Case-study workspace markup is incomplete.');
}

Object.values(panels).forEach((panel) => {
  const overview = document.createElement('div');
  overview.className = 'case-panel__overview';
  while (panel.firstChild) overview.append(panel.firstChild);
  panel.append(overview);
});

const workspace = template.content.firstElementChild.cloneNode(true);
const ui = {
  module: workspace.querySelector('[data-workspace-module]'),
  count: workspace.querySelector('[data-workspace-count]'),
  close: workspace.querySelector('[data-workspace-close]'),
  selector: workspace.querySelector('[data-case-selector]'),
  title: workspace.querySelector('[data-case-title]'),
  meta: workspace.querySelector('[data-case-meta]'),
  synopsis: workspace.querySelector('[data-case-synopsis]'),
  limit: workspace.querySelector('[data-case-limit]'),
  question: workspace.querySelector('[data-case-question]'),
  decision: workspace.querySelector('[data-case-decision]'),
  artifact: workspace.querySelector('[data-case-artifact]'),
  next: workspace.querySelector('[data-case-next]'),
  standalone: workspace.querySelector('[data-case-standalone]'),
  open: workspace.querySelector('[data-document-open]'),
  download: workspace.querySelector('[data-document-download]'),
  fullscreen: workspace.querySelector('[data-document-fullscreen]'),
  viewer: workspace.querySelector('[data-document-viewer]'),
  stage: workspace.querySelector('[data-document-stage]'),
  status: workspace.querySelector('[data-document-status]'),
  canvas: workspace.querySelector('[data-document-canvas]'),
  error: workspace.querySelector('[data-document-error]'),
  previous: workspace.querySelector('[data-page-previous]'),
  nextPage: workspace.querySelector('[data-page-next]'),
  indicator: workspace.querySelector('[data-page-indicator]'),
  thumbnails: workspace.querySelector('[data-document-thumbnails]')
};

const state = {
  open: false,
  moduleId: 'strategy',
  caseId: 'brand-defense',
  page: 1,
  routeHasCase: false,
  pdf: null,
  loadingTask: null,
  renderTask: null,
  preRenderTask: null,
  preRendered: null,
  thumbnailTasks: new Set(),
  generation: 0
};

let pdfjsPromise;
let resizeTimer;
let thumbnailObserver;
let suppressModuleChange = false;

const activeModule = () => caseModules[state.moduleId];
const activeCase = () => activeModule().cases.find((item) => item.caseId === state.caseId) || activeModule().cases[0];
const motion = (callback) => {
  if (document.startViewTransition && !prefersReducedMotion.matches) return document.startViewTransition(callback);
  callback();
  return null;
};

const hashFor = ({ includeCase = true, includePage = false } = {}) => {
  if (!includeCase) return `#case/${state.moduleId}`;
  const pagePart = includePage && state.page > 1 ? `/${state.page}` : '';
  return `#case/${state.moduleId}/${state.caseId}${pagePart}`;
};

const writeHistory = (mode, options) => {
  const hash = hashFor(options);
  if (location.hash === hash) return;
  history[`${mode}State`]({ caseWorkspace: true }, '', hash);
};

const parseHash = () => {
  const match = location.hash.match(/^#case\/([^/]+)(?:\/([^/]+))?(?:\/(\d+))?$/);
  if (!match) return null;
  const validModule = Boolean(caseModules[match[1]]);
  const moduleId = validModule ? match[1] : 'strategy';
  const module = caseModules[moduleId];
  const matchedCase = module.cases.find((item) => item.caseId === match[2]);
  const chosen = matchedCase || module.cases[0];
  const requestedPage = Number.parseInt(match[3] || '1', 10);
  const validPage = requestedPage >= 1 && requestedPage <= chosen.pages;
  return {
    moduleId,
    caseId: chosen.caseId,
    page: validPage ? requestedPage : 1,
    routeHasCase: Boolean(match[2] && matchedCase),
    canonical: validModule && (!match[2] || Boolean(matchedCase)) && validPage
  };
};

const selectModuleTab = (moduleId) => {
  const tab = moduleTabs.find((item) => item.dataset.caseTab === moduleId);
  if (tab?.getAttribute('aria-selected') !== 'true') {
    suppressModuleChange = true;
    tab.click();
    suppressModuleChange = false;
  }
};

const restoreOverview = (panel) => {
  if (!panel) return;
  panel.classList.remove('case-panel--workspace');
  const overview = panel.querySelector('.case-panel__overview');
  if (overview) overview.hidden = false;
};

const mountWorkspace = (moduleId) => {
  const currentPanel = workspace.parentElement?.closest('[data-case-panel]');
  if (currentPanel && currentPanel !== panels[moduleId]) restoreOverview(currentPanel);
  const panel = panels[moduleId];
  const overview = panel.querySelector('.case-panel__overview');
  overview.hidden = true;
  panel.classList.add('case-panel--workspace');
  panel.append(workspace);
};

const updateSelector = () => {
  const module = activeModule();
  ui.selector.replaceChildren();
  module.cases.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `case-tab-${state.moduleId}-${item.caseId}`;
    button.role = 'tab';
    button.dataset.caseId = item.caseId;
    button.setAttribute('aria-controls', 'case-evidence-panel');
    button.setAttribute('aria-selected', String(item.caseId === state.caseId));
    button.tabIndex = item.caseId === state.caseId ? 0 : -1;
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><strong>${item.shortLabel}</strong><small>${item.pages} pages</small>`;
    ui.selector.append(button);
  });
};

const updateCaseCopy = () => {
  const module = activeModule();
  const item = activeCase();
  ui.module.textContent = module.label;
  ui.count.textContent = `${module.cases.length} ${module.shortLabel.toLowerCase()}`;
  ui.title.textContent = item.title;
  ui.meta.textContent = `${item.type} · ${item.context}`;
  ui.synopsis.textContent = item.synopsis;
  ui.limit.textContent = item.limit;
  ui.question.textContent = item.question;
  ui.decision.textContent = item.decision;
  ui.artifact.textContent = item.artifact;
  ui.next.textContent = item.next;
  ui.standalone.href = item.route;
  ui.open.href = item.pdf;
  ui.download.href = item.pdf;
  ui.download.setAttribute('download', '');
  ui.canvas.setAttribute('aria-label', `${item.title}, page ${state.page} of ${item.pages}`);
};

const cancelPdfWork = async () => {
  state.renderTask?.cancel();
  state.preRenderTask?.cancel();
  state.thumbnailTasks.forEach((task) => task.cancel());
  state.thumbnailTasks.clear();
  thumbnailObserver?.disconnect();
  state.preRendered = null;
  state.renderTask = null;
  state.preRenderTask = null;
  if (state.loadingTask) {
    try { await state.loadingTask.destroy(); } catch { /* already released */ }
  } else if (state.pdf) {
    try { await state.pdf.destroy(); } catch { /* already released */ }
  }
  state.loadingTask = null;
  state.pdf = null;
};

const loadPdfJs = () => {
  if (!pdfjsPromise) {
    pdfjsPromise = import('./assets/vendor/pdfjs/pdf.min.mjs').then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('./assets/vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;
      return pdfjs;
    });
  }
  return pdfjsPromise;
};

const renderToCanvas = async (pdf, pageNumber, canvas, availableWidth, taskSetter) => {
  const page = await pdf.getPage(pageNumber);
  const base = page.getViewport({ scale: 1 });
  const cssWidth = Math.max(220, Math.min(availableWidth, base.width * 1.55));
  const viewport = page.getViewport({ scale: cssWidth / base.width });
  const outputScale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  canvas.style.width = `${Math.floor(viewport.width)}px`;
  canvas.style.height = `${Math.floor(viewport.height)}px`;
  const context = canvas.getContext('2d', { alpha: false });
  const transform = outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0];
  const task = page.render({ canvasContext: context, transform, viewport });
  taskSetter(task);
  await task.promise;
  return { cssWidth: Math.floor(viewport.width), cssHeight: Math.floor(viewport.height) };
};

const updatePageControls = () => {
  const pages = state.pdf?.numPages || activeCase().pages;
  ui.indicator.textContent = `Page ${state.page} of ${pages}`;
  ui.previous.disabled = state.page <= 1;
  ui.nextPage.disabled = state.page >= pages;
  ui.canvas.setAttribute('aria-label', `${activeCase().title}, page ${state.page} of ${pages}`);
  [...ui.thumbnails.querySelectorAll('[data-thumbnail-page]')].forEach((button) => {
    const selected = Number(button.dataset.thumbnailPage) === state.page;
    button.setAttribute('aria-current', selected ? 'page' : 'false');
    button.classList.toggle('is-active', selected);
    if (selected) {
      const targetLeft = button.offsetLeft - ((ui.thumbnails.clientWidth - button.offsetWidth) / 2);
      ui.thumbnails.scrollTo({ left: Math.max(0, targetLeft), behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    }
  });
};

const preRenderNext = () => {
  const pdf = state.pdf;
  const nextPage = state.page + 1;
  const generation = state.generation;
  if (!pdf || nextPage > pdf.numPages) return;
  const stageWidth = Math.max(220, ui.stage.clientWidth - 32);
  const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 100));
  schedule(async () => {
    if (generation !== state.generation || nextPage !== state.page + 1) return;
    const canvas = document.createElement('canvas');
    try {
      const size = await renderToCanvas(pdf, nextPage, canvas, stageWidth, (task) => { state.preRenderTask = task; });
      if (generation === state.generation && nextPage === state.page + 1) state.preRendered = { page: nextPage, canvas, stageWidth, size };
    } catch (error) {
      if (error?.name !== 'RenderingCancelledException') console.warn('Next PDF page could not be prepared.', error);
    } finally {
      state.preRenderTask = null;
    }
  });
};

const renderActivePage = async () => {
  if (!state.pdf) return;
  const generation = state.generation;
  const stageWidth = Math.max(220, ui.stage.clientWidth - 32);
  state.renderTask?.cancel();
  ui.error.hidden = true;
  ui.canvas.hidden = false;
  ui.status.hidden = false;
  ui.status.textContent = `Loading page ${state.page}…`;
  try {
    if (state.preRendered?.page === state.page && Math.abs(state.preRendered.stageWidth - stageWidth) < 8) {
      const prepared = state.preRendered;
      ui.canvas.width = prepared.canvas.width;
      ui.canvas.height = prepared.canvas.height;
      ui.canvas.style.width = `${prepared.size.cssWidth}px`;
      ui.canvas.style.height = `${prepared.size.cssHeight}px`;
      ui.canvas.getContext('2d', { alpha: false }).drawImage(prepared.canvas, 0, 0);
      state.preRendered = null;
    } else {
      await renderToCanvas(state.pdf, state.page, ui.canvas, stageWidth, (task) => { state.renderTask = task; });
    }
    if (generation !== state.generation) return;
    ui.status.textContent = `Page ${state.page} of ${state.pdf.numPages} ready.`;
    ui.status.hidden = true;
    updatePageControls();
    preRenderNext();
  } catch (error) {
    if (error?.name === 'RenderingCancelledException') return;
    console.error('PDF page rendering failed.', error);
    ui.status.hidden = true;
    ui.canvas.hidden = true;
    ui.error.hidden = false;
  } finally {
    state.renderTask = null;
  }
};

const renderThumbnail = async (canvas) => {
  if (!state.pdf || canvas.dataset.rendered || canvas.dataset.rendering) return;
  canvas.dataset.rendering = 'true';
  const pageNumber = Number(canvas.closest('[data-thumbnail-page]').dataset.thumbnailPage);
  const generation = state.generation;
  try {
    await renderToCanvas(state.pdf, pageNumber, canvas, 92, (task) => {
      state.thumbnailTasks.add(task);
      task.promise.finally(() => state.thumbnailTasks.delete(task));
    });
    if (generation === state.generation) canvas.dataset.rendered = 'true';
  } catch (error) {
    if (error?.name !== 'RenderingCancelledException') console.warn(`Thumbnail ${pageNumber} could not be rendered.`, error);
  } finally {
    delete canvas.dataset.rendering;
  }
};

const createThumbnails = () => {
  ui.thumbnails.replaceChildren();
  thumbnailObserver?.disconnect();
  thumbnailObserver = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => renderThumbnail(entry.target));
  }, { root: ui.thumbnails, rootMargin: '120px' });
  for (let page = 1; page <= state.pdf.numPages; page += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.thumbnailPage = String(page);
    button.setAttribute('aria-label', `Show page ${page}`);
    button.innerHTML = `<canvas aria-hidden="true"></canvas><span>${String(page).padStart(2, '0')}</span>`;
    ui.thumbnails.append(button);
    thumbnailObserver.observe(button.querySelector('canvas'));
  }
  updatePageControls();
};

const loadDocument = async () => {
  const item = activeCase();
  const generation = ++state.generation;
  await cancelPdfWork();
  if (generation !== state.generation) return;
  ui.status.hidden = false;
  ui.status.textContent = `Loading ${item.title}…`;
  ui.error.hidden = true;
  ui.canvas.hidden = true;
  ui.thumbnails.replaceChildren();
  updatePageControls();
  try {
    const pdfjs = await loadPdfJs();
    if (generation !== state.generation) return;
    state.loadingTask = pdfjs.getDocument({ url: item.pdf });
    state.pdf = await state.loadingTask.promise;
    state.loadingTask = null;
    if (generation !== state.generation) {
      await state.pdf.destroy();
      return;
    }
    state.page = Math.min(Math.max(state.page, 1), state.pdf.numPages);
    createThumbnails();
    await renderActivePage();
  } catch (error) {
    if (generation !== state.generation) return;
    console.error(`Could not load ${item.pdf}.`, error);
    ui.status.hidden = true;
    ui.canvas.hidden = true;
    ui.error.hidden = false;
  }
};

const setPage = (page, { updateUrl = true } = {}) => {
  const max = state.pdf?.numPages || activeCase().pages;
  const next = Math.min(Math.max(page, 1), max);
  if (next === state.page && state.pdf) return;
  state.page = next;
  if (updateUrl) writeHistory('replace', { includeCase: true, includePage: true });
  updatePageControls();
  renderActivePage();
};

const setCase = (caseId, { updateUrl = true, page = 1 } = {}) => {
  const item = activeModule().cases.find((candidate) => candidate.caseId === caseId) || activeModule().cases[0];
  state.caseId = item.caseId;
  state.page = Math.min(Math.max(page, 1), item.pages);
  state.routeHasCase = true;
  motion(() => {
    updateSelector();
    updateCaseCopy();
  });
  if (updateUrl) writeHistory('push', { includeCase: true, includePage: state.page > 1 });
  loadDocument();
};

const openWorkspace = (moduleId, caseId, { updateUrl = true, page = 1, focus = true, includeCase = Boolean(caseId) } = {}) => {
  const resolvedModule = caseModules[moduleId] ? moduleId : 'strategy';
  const module = caseModules[resolvedModule];
  const item = module.cases.find((candidate) => candidate.caseId === caseId) || module.cases[0];
  selectModuleTab(resolvedModule);
  state.open = true;
  state.moduleId = resolvedModule;
  state.caseId = item.caseId;
  state.page = Math.min(Math.max(page, 1), item.pages);
  state.routeHasCase = includeCase;
  motion(() => {
    mountWorkspace(resolvedModule);
    updateSelector();
    updateCaseCopy();
  });
  if (updateUrl) writeHistory('push', { includeCase, includePage: includeCase && state.page > 1 });
  loadDocument();
  const revealWorkspace = () => requestAnimationFrame(() => {
    workspace.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    if (focus) ui.title.focus({ preventScroll: true });
  });
  if (document.readyState === 'complete') revealWorkspace();
  else window.addEventListener('load', revealWorkspace, { once: true });
};

const closeWorkspace = ({ updateUrl = true, focus = true } = {}) => {
  if (!state.open) return;
  const panel = panels[state.moduleId];
  motion(() => {
    workspace.remove();
    restoreOverview(panel);
  });
  state.open = false;
  state.generation += 1;
  cancelPdfWork();
  if (updateUrl) history.pushState({ caseWorkspace: false }, '', '#work');
  if (focus) {
    const trigger = panel.querySelector('[data-open-workspace]');
    requestAnimationFrame(() => trigger?.focus({ preventScroll: true }));
  }
};

const changeModule = (moduleId, { updateUrl = true } = {}) => {
  if (!state.open || !caseModules[moduleId] || state.moduleId === moduleId) return;
  state.moduleId = moduleId;
  state.caseId = caseModules[moduleId].cases[0].caseId;
  state.page = 1;
  state.routeHasCase = false;
  motion(() => {
    mountWorkspace(moduleId);
    updateSelector();
    updateCaseCopy();
  });
  if (updateUrl) writeHistory('push', { includeCase: false });
  loadDocument();
};

const syncFromLocation = () => {
  const route = parseHash();
  if (!route) {
    if (state.open) closeWorkspace({ updateUrl: false, focus: false });
    return;
  }
  if (!route.canonical) {
    state.moduleId = route.moduleId;
    state.caseId = route.caseId;
    state.page = route.page;
    history.replaceState({ caseWorkspace: true }, '', hashFor({ includeCase: route.routeHasCase, includePage: route.page > 1 }));
  }
  if (!state.open || state.moduleId !== route.moduleId) {
    openWorkspace(route.moduleId, route.caseId, { updateUrl: false, page: route.page, focus: false, includeCase: route.routeHasCase });
  } else if (state.caseId !== route.caseId) {
    setCase(route.caseId, { updateUrl: false, page: route.page });
  } else if (state.page !== route.page) {
    setPage(route.page, { updateUrl: false });
  }
};

document.addEventListener('click', (event) => {
  const workspaceTrigger = event.target.closest('[data-open-workspace]');
  if (workspaceTrigger) {
    event.preventDefault();
    openWorkspace(workspaceTrigger.dataset.openWorkspace, null, { includeCase: false });
    return;
  }
  const caseTrigger = event.target.closest('[data-open-case]');
  if (caseTrigger) {
    event.preventDefault();
    openWorkspace('strategy', caseTrigger.dataset.openCase, { includeCase: true });
  }
});

ui.close.addEventListener('click', () => closeWorkspace());
ui.selector.addEventListener('click', (event) => {
  const button = event.target.closest('[data-case-id]');
  if (button) setCase(button.dataset.caseId);
});
ui.selector.addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  const buttons = [...ui.selector.querySelectorAll('[role="tab"]')];
  const index = buttons.indexOf(document.activeElement);
  if (index < 0) return;
  event.preventDefault();
  let next = index;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = buttons.length - 1;
  if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
  if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
  buttons[next].focus();
  setCase(buttons[next].dataset.caseId);
});

ui.previous.addEventListener('click', () => setPage(state.page - 1));
ui.nextPage.addEventListener('click', () => setPage(state.page + 1));
ui.thumbnails.addEventListener('click', (event) => {
  const button = event.target.closest('[data-thumbnail-page]');
  if (button) setPage(Number(button.dataset.thumbnailPage));
});
ui.viewer.addEventListener('keydown', (event) => {
  if (event.target.closest('button, a')) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); setPage(state.page - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); setPage(state.page + 1); }
});

ui.fullscreen.addEventListener('click', async () => {
  if (!document.fullscreenEnabled || !ui.viewer.requestFullscreen) {
    window.open(activeCase().pdf, '_blank', 'noopener');
    return;
  }
  if (document.fullscreenElement === ui.viewer) await document.exitFullscreen();
  else await ui.viewer.requestFullscreen();
});
document.addEventListener('fullscreenchange', () => {
  ui.fullscreen.textContent = document.fullscreenElement === ui.viewer ? 'Exit fullscreen' : 'Open fullscreen';
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => renderActivePage(), 120);
});

moduleTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (!suppressModuleChange) changeModule(tab.dataset.caseTab);
  });
});
document.querySelector('.case-tabs')?.addEventListener('keydown', (event) => {
  if (!state.open || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
  queueMicrotask(() => {
    const selected = moduleTabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
    if (selected) changeModule(selected.dataset.caseTab);
  });
});

new ResizeObserver(() => {
  if (!state.open || !state.pdf) return;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    state.preRendered = null;
    renderActivePage();
  }, 160);
}).observe(ui.stage);

window.addEventListener('popstate', syncFromLocation);
window.addEventListener('hashchange', syncFromLocation);
syncFromLocation();

export { caseModules };
