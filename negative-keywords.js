const library = document.querySelector('#keyword-library');
const search = document.querySelector('#keyword-search');
const status = document.querySelector('#keyword-status');

if (library && search && status) {
  fetch('assets/negative-keywords.json')
    .then((response) => {
      if (!response.ok) throw new Error('Keyword library could not be loaded.');
      return response.json();
    })
    .then((lists) => {
      const render = (query = '') => {
        const term = query.trim().toLowerCase();
        library.replaceChildren();
        let visibleKeywords = 0;
        lists.forEach((list) => {
          const matches = term ? list.keywords.filter((keyword) => keyword.toLowerCase().includes(term)) : list.keywords;
          const contextMatch = `${list.title} ${list.useCase}`.toLowerCase().includes(term);
          if (term && !contextMatch && matches.length === 0) return;
          const shown = contextMatch && matches.length === 0 ? list.keywords : matches;
          visibleKeywords += shown.length;
          const details = document.createElement('details');
          details.className = 'keyword-list';
          details.open = Boolean(term) || library.childElementCount < 3;
          const summary = document.createElement('summary');
          const title = document.createElement('strong'); title.textContent = list.title;
          const count = document.createElement('span'); count.textContent = `${shown.length} terms`;
          summary.append(title, count);
          const useCase = document.createElement('p'); useCase.className = 'keyword-list__use'; useCase.textContent = list.useCase;
          const terms = document.createElement('div'); terms.className = 'keyword-list__terms';
          shown.forEach((keyword) => { const code = document.createElement('code'); code.textContent = keyword; terms.append(code); });
          const copy = document.createElement('button'); copy.type = 'button'; copy.className = 'keyword-copy'; copy.textContent = 'Copy visible terms';
          copy.addEventListener('click', async () => { await navigator.clipboard.writeText(shown.join('\n')); copy.textContent = 'Copied'; window.setTimeout(() => { copy.textContent = 'Copy visible terms'; }, 1800); });
          details.append(summary, useCase, terms, copy); library.append(details);
        });
        const visibleLists = library.childElementCount;
        status.textContent = visibleLists ? `${visibleLists} lists · ${visibleKeywords} visible terms` : 'No lists or terms match this search.';
      };
      render();
      search.addEventListener('input', () => render(search.value));
    })
    .catch((error) => { status.textContent = error.message; });
}
