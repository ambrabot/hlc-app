// HLC Club — app logic. Talks to the Worker API for real auth, favorites sync, and Stripe checkout.
(() => {
  const API = /localhost|127\.0\.0\.1/.test(location.hostname)
    ? 'http://localhost:8787'
    : 'https://hlcapp-api.ambrainvestimentos.workers.dev';
  const CLUB = 'hlc-club';

  const RECIPES = window.HLC_RECIPES || [];
  const TEAS = [
    { title: 'Peppermint Ginger Reset', goal: 'After dinner · bloating', copy: 'Warmth, peppermint and ginger to ease digestion and slow the evening snack loop.' },
    { title: 'Cinnamon Cacao Calm', goal: 'Dessert craving', copy: 'The ritual of a sweet cup — cacao and cinnamon — without the spiral.' },
    { title: 'Lemon Mineral Morning', goal: 'Before coffee', copy: 'A gentle morning cue with lemon and a pinch of minerals.' }
  ];
  const GOALS = ['All', 'Sweet cravings', 'Gut health', 'Anti-inflammatory', 'Protein'];
  // 7-Day Gut Reset — each day maps to real recipe atoms (day 1 is the free preview).
  const PROTOCOL = [
    { focus: 'Reset & hydrate', title: 'Gentle start', habit: 'Warm water + lemon on waking; eat slowly, chew well.', recipes: ['brigadeiro', 'churros-chia'], tea: 'Peppermint Ginger Reset, after dinner.' },
    { focus: 'Fiber foundation', title: 'Feed the flora', habit: 'Add a fiber source to every plate; aim for 30g today.', recipes: ['date-caramel', 'banoffee'], tea: 'Lemon Mineral Morning, before coffee.' },
    { focus: 'Polyphenol day', title: 'Color & cacao', habit: 'Berries + dark cacao; a 10-minute walk after lunch.', recipes: ['fudge-brownie', 'chocolate-bark'], tea: 'Cinnamon Cacao Calm, mid-afternoon.' },
    { focus: 'Protein & satisfaction', title: 'Steady energy', habit: 'Anchor each meal with protein so cravings stay quiet.', recipes: ['pb-fudge', 'twix'], tea: 'Peppermint Ginger Reset, evening.' },
    { focus: 'Anti-inflammatory', title: 'Calm the system', habit: 'Omega-3s + bright fruit; no screens 1h before bed.', recipes: ['passionfruit-mousse', 'berry-cheesecake'], tea: 'Lemon Mineral Morning.' },
    { focus: 'Gut-loving fats', title: 'Nourish & soothe', habit: 'Healthy fats + fermented food; hydrate through the day.', recipes: ['coconut-kisses', 'coconut-bonbons'], tea: 'Cinnamon Cacao Calm.' },
    { focus: 'Celebrate & sustain', title: 'Make it a rhythm', habit: 'Pick your 3 favorites from the week to keep on repeat.', recipes: ['lemon-tart', 'strawberry-bonbons'], tea: 'Your favorite ritual.' }
  ];

  const store = {
    get token() { return localStorage.getItem('hlc:token') || ''; },
    set token(v) { v ? localStorage.setItem('hlc:token', v) : localStorage.removeItem('hlc:token'); },
    get localFavs() { try { return JSON.parse(localStorage.getItem('hlc:favorites')) || []; } catch { return []; } },
    set localFavs(v) { localStorage.setItem('hlc:favorites', JSON.stringify(v)); }
  };

  const state = {
    view: 'discover',
    query: '',
    goal: 'All',
    user: null,
    favorites: new Set(store.localFavs),
    entitlements: new Set(),
    selected: null,
    authIntent: null
  };

  const $ = (s) => document.querySelector(s);
  const el = (id) => document.getElementById(id);
  const isMember = () => state.entitlements.has(CLUB);
  const isFav = (id) => state.favorites.has(id);
  const loggedIn = () => !!state.user;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ------------------------------- API client ------------------------------ */
  async function api(path, { method = 'GET', body } = {}) {
    const headers = {};
    if (body) headers['content-type'] = 'application/json';
    if (store.token) headers.authorization = `Bearer ${store.token}`;
    const res = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || 'request_failed'), { status: res.status, data });
    return data;
  }

  function applyAccount(data) {
    if (data.user) state.user = data.user;
    if (data.favorites) state.favorites = new Set(data.favorites);
    if (data.entitlements) state.entitlements = new Set(data.entitlements);
  }

  /* --------------------------------- toast --------------------------------- */
  let toastTimer;
  function toast(msg) {
    const t = el('toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ------------------------------- favorites ------------------------------- */
  async function toggleFav(id) {
    const adding = !isFav(id);
    if (adding) state.favorites.add(id); else state.favorites.delete(id);
    render();
    if (loggedIn()) {
      try {
        const data = adding
          ? await api('/api/favorites', { method: 'POST', body: { recipeId: id } })
          : await api(`/api/favorites/${encodeURIComponent(id)}`, { method: 'DELETE' });
        state.favorites = new Set(data.favorites); render();
      } catch { toast('Could not sync — try again.'); }
    } else {
      store.localFavs = [...state.favorites];
      if (adding) toast('Saved on this device. Sign in to sync everywhere.');
    }
  }

  /* ---------------------------------- auth --------------------------------- */
  function openAuth(intent) {
    state.authIntent = intent || null;
    el('authEmail').value = state.user?.email || '';
    showAuthStep('email');
    el('authModal').classList.add('open');
  }
  function closeAuth() { el('authModal').classList.remove('open'); }
  function showAuthStep(step) {
    el('authStepEmail').style.display = step === 'email' ? 'block' : 'none';
    el('authStepCode').style.display = step === 'code' ? 'block' : 'none';
    (step === 'email' ? el('authEmail') : el('authCode')).focus();
  }

  async function requestCode() {
    const email = el('authEmail').value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return toast('Enter a valid email.');
    el('authSend').disabled = true;
    try {
      const r = await api('/api/auth/request-code', { method: 'POST', body: { email } });
      state._email = email;
      el('authCodeHint').textContent = `We sent a 6-digit code to ${email}.`;
      showAuthStep('code');
      if (r.devCode) { el('authCode').value = r.devCode; el('authCodeHint').textContent = `Dev mode — code ${r.devCode} pre-filled.`; } // dev only
    } catch (e) {
      toast(e.status === 429 ? 'Too many requests — wait a bit.' : 'Could not send the code.');
    } finally { el('authSend').disabled = false; }
  }

  async function verifyCode() {
    const code = el('authCode').value.replace(/\D/g, '');
    if (code.length !== 6) return toast('Enter the 6-digit code.');
    el('authVerify').disabled = true;
    try {
      const localBefore = [...state.favorites];
      const data = await api('/api/auth/verify', { method: 'POST', body: { email: state._email, code } });
      store.token = data.token;
      applyAccount(data);
      // Merge device favorites into the account.
      for (const id of localBefore) {
        if (!state.favorites.has(id)) {
          try { const r = await api('/api/favorites', { method: 'POST', body: { recipeId: id } }); state.favorites = new Set(r.favorites); } catch {}
        }
      }
      store.localFavs = [];
      closeAuth(); render();
      toast(`Welcome${state.user.name ? ', ' + state.user.name : ''}.`);
      if (state.authIntent === 'checkout-monthly') startCheckout('monthly');
      else if (state.authIntent === 'checkout-annual') startCheckout('annual');
      state.authIntent = null;
    } catch (e) {
      toast(e.status === 401 ? 'Wrong or expired code.' : 'Could not verify.');
    } finally { el('authVerify').disabled = false; }
  }

  function signOut() { store.token = ''; state.user = null; state.entitlements = new Set(); state.favorites = new Set(store.localFavs); render(); toast('Signed out.'); }

  /* -------------------------------- checkout ------------------------------- */
  function joinClub(plan) {
    if (!loggedIn()) { openAuth('checkout-' + plan); toast('Create your account first — one tap.'); return; }
    startCheckout(plan);
  }
  async function startCheckout(plan) {
    toast('Opening secure checkout…');
    try {
      const { url } = await api('/api/checkout', { method: 'POST', body: { plan } });
      if (url) location.href = url; else toast('Checkout is not available yet.');
    } catch (e) {
      toast(e.status === 501 ? 'Checkout is being connected.' : 'Could not start checkout.');
    }
  }

  // After Stripe redirect: poll /api/me until the webhook grants the entitlement.
  async function handleCheckoutReturn() {
    const params = new URLSearchParams(location.search);
    const status = params.get('checkout');
    if (!status) return;
    history.replaceState({}, '', location.pathname);
    if (status === 'cancel') return toast('Checkout canceled.');
    if (status === 'success') {
      toast('Payment received — activating your membership…');
      for (let i = 0; i < 6 && !isMember(); i++) {
        try { applyAccount(await api('/api/me')); } catch {}
        if (isMember()) break;
        await new Promise((r) => setTimeout(r, 1500));
      }
      render();
      toast(isMember() ? 'Welcome to HLC Club — everything is unlocked.' : 'Almost there — pull to refresh in a moment.');
    }
  }

  /* -------------------------------- rendering ------------------------------- */
  const lockSvg = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>';

  function filtered() {
    const q = state.query.toLowerCase();
    return RECIPES.filter((r) => {
      const text = [r.title, r.desc, r.goals.join(' '), r.tags.join(' '), r.ingredients.join(' ')].join(' ').toLowerCase();
      const matchQ = !q || text.includes(q);
      const matchG = state.goal === 'All' || r.goals.includes(state.goal);
      return matchQ && matchG;
    });
  }

  function macroBar(m) {
    const cells = [['kcal', m.kcal], ['protein', m.protein], ['carbs', m.carbs], ['fat', m.fat], ['fiber', m.fiber]];
    return `<div class="macros">${cells.map(([k, v], i) => `<div class="mc${i === 0 ? ' hl' : ''}"><b>${esc(v)}</b><span>${k}</span></div>`).join('')}</div>`;
  }

  function card(r) {
    const locked = r.level === 'club' && !isMember();
    return `<article class="recipe${locked ? ' locked' : ''}" data-open="${r.id}">
      <div class="thumb"><img src="${r.image}" alt="${esc(r.title)}" loading="lazy"/>
        ${r.level === 'club' ? `<span class="badge ${isMember() ? 'member' : ''}">${isMember() ? 'Club' : lockSvg + ' Club'}</span>` : '<span class="badge free">Free</span>'}
        <button class="fav ${isFav(r.id) ? 'on' : ''}" data-fav="${r.id}" aria-label="Save">${isFav(r.id) ? '★' : '☆'}</button>
      </div>
      <div class="rbody">
        <b>${esc(r.title)}</b><p>${esc(r.desc)}</p>
        <div class="chips-sm">${r.goals.slice(0, 2).map((g) => `<span>${esc(g)}</span>`).join('')}<span class="kcal">${r.macros.kcal} kcal</span></div>
      </div>
    </article>`;
  }

  function renderDiscover() {
    el('goalChips').innerHTML = GOALS.map((g) => `<button class="chip ${g === state.goal ? 'active' : ''}" data-goal="${g}">${g}</button>`).join('');
    const list = filtered();
    el('recipeList').innerHTML = list.length ? list.map(card).join('') : `<div class="empty"><b>Nothing here yet</b>Try another goal or search.</div>`;
  }
  function renderSaved() {
    const favs = RECIPES.filter((r) => isFav(r.id));
    el('savedList').innerHTML = favs.length ? favs.map(card).join('')
      : `<div class="empty"><b>No favorites yet</b>Tap the star on any recipe and it lives here${loggedIn() ? '' : ' — sign in to sync across devices'}.</div>`;
  }
  function renderProtocols() {
    const member = isMember();
    el('protocolGate').innerHTML = member
      ? `<div class="unlocked">${lockSvg.replace('width="13" height="13"', 'width="15" height="15"')} <span>Member access · all protocol days unlocked below.</span></div>`
      : `<div class="paywall">
          <div class="eyebrow">HLC Club membership</div>
          <h3>Unlock every protocol, all 18 recipes, swaps & meal planning.</h3>
          <p>New functional recipes every week. Cancel anytime.</p>
          <div class="plans">
            <button class="plan" data-plan="monthly"><b>$9<span>/mo</span></b><small>Monthly</small></button>
            <button class="plan best" data-plan="annual"><span class="save">Best value</span><b>$69<span>/yr</span></b><small>2 months free</small></button>
          </div>
          <p class="fineprint">Secure checkout by Stripe · educational content, not medical advice.</p>
        </div>`;
  }
  function renderProtocolDays() {
    const member = isMember();
    el('protocolDays').innerHTML = PROTOCOL.map((d, i) => {
      const open = member || i === 0;
      const n = String(i + 1).padStart(2, '0');
      if (!open) {
        return `<article class="pday locked"><div class="pdayHead"><b>${n}</b><div><div class="eyebrow">${esc(d.focus)}</div><strong>${esc(d.title)}</strong></div>${lockSvg}</div><p class="pdayHabit locked">Unlock with HLC Club to open day ${i + 1}.</p></article>`;
      }
      const recipes = d.recipes.map((id) => RECIPES.find((r) => r.id === id)).filter(Boolean);
      return `<article class="pday"><div class="pdayHead"><b>${n}</b><div><div class="eyebrow">${esc(d.focus)}${i === 0 && !member ? ' · free preview' : ''}</div><strong>${esc(d.title)}</strong></div></div>
        <p class="pdayHabit">${esc(d.habit)}</p>
        <div class="pdayRecipes">${recipes.map((r) => `<button class="pr" data-open="${r.id}"><img src="${r.image}" alt=""/><span>${esc(r.title)}</span><em>${r.macros.kcal} kcal</em></button>`).join('')}</div>
        <div class="pdayTea">Tea ritual · ${esc(d.tea)}</div></article>`;
    }).join('');
  }
  function renderTeas() {
    el('teaList').innerHTML = TEAS.map((t) => `<article class="tea"><div><div class="eyebrow">${esc(t.goal)}</div><b>${esc(t.title)}</b><p>${esc(t.copy)}</p></div></article>`).join('');
  }

  function render() {
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === state.view));
    document.querySelectorAll('.section').forEach((s) => s.classList.toggle('active', s.dataset.view === state.view));
    el('accountBtn').textContent = state.user ? (state.user.name || state.user.email.split('@')[0]) : 'Sign in / Join';
    el('accountBtn').classList.toggle('member', isMember());
    renderDiscover(); renderSaved(); renderProtocols(); renderProtocolDays(); renderTeas();
  }

  function openRecipe(id) {
    const r = RECIPES.find((x) => x.id === id); if (!r) return;
    state.selected = r;
    const locked = r.level === 'club' && !isMember();
    el('modalImg').src = r.image; el('modalImg').alt = r.title;
    el('modalTag').textContent = `${r.goals[0]} · makes ${r.makes}`;
    el('modalTitle').textContent = r.title;
    el('modalDesc').textContent = r.desc;
    el('modalTags').innerHTML = r.tags.map((t) => `<span>${esc(t)}</span>`).join('');
    el('modalMacros').innerHTML = macroBar(r.macros);
    el('modalWhy').textContent = r.why;
    if (locked) {
      el('modalLocked').style.display = 'block';
      el('modalDetail').style.display = 'none';
    } else {
      el('modalLocked').style.display = 'none';
      el('modalDetail').style.display = 'block';
      el('modalIngredients').innerHTML = r.ingredients.map((x) => `<li>${esc(x)}</li>`).join('');
      el('modalSwaps').innerHTML = r.swaps.map((x) => `<li>${esc(x)}</li>`).join('');
    }
    el('modalFav').textContent = isFav(r.id) ? 'Remove favorite' : 'Save favorite';
    el('recipeModal').classList.add('open');
  }
  function closeModal() { el('recipeModal').classList.remove('open'); }

  /* --------------------------------- events -------------------------------- */
  function setView(v) { state.view = v; window.scrollTo({ top: 0, behavior: 'smooth' }); render(); }

  document.addEventListener('click', (e) => {
    const t = e.target;
    const tab = t.closest('[data-tab]'); if (tab) return setView(tab.dataset.tab);
    const goal = t.closest('[data-goal]'); if (goal) { state.goal = goal.dataset.goal; return renderDiscover(); }
    const fav = t.closest('[data-fav]'); if (fav) { e.stopPropagation(); return toggleFav(fav.dataset.fav); }
    const open = t.closest('[data-open]'); if (open) return openRecipe(open.dataset.open);
    const plan = t.closest('[data-plan]'); if (plan) return joinClub(plan.dataset.plan);
  });

  el('accountBtn').onclick = () => { if (loggedIn()) openAccount(); else openAuth(); };
  el('searchInput').oninput = (e) => { state.query = e.target.value; renderDiscover(); };
  el('authSend').onclick = requestCode;
  el('authVerify').onclick = verifyCode;
  el('authClose').onclick = closeAuth;
  el('authBack').onclick = () => showAuthStep('email');
  el('closeModal').onclick = closeModal;
  el('recipeModal').onclick = (e) => { if (e.target.id === 'recipeModal') closeModal(); };
  el('modalFav').onclick = () => { if (state.selected) { toggleFav(state.selected.id); el('modalFav').textContent = isFav(state.selected.id) ? 'Remove favorite' : 'Save favorite'; } };
  el('modalJoin').onclick = () => { closeModal(); setView('protocols'); };
  el('authEmail').addEventListener('keydown', (e) => { if (e.key === 'Enter') requestCode(); });
  el('authCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyCode(); });

  function openAccount() {
    const member = isMember();
    el('accountSheet').innerHTML = `
      <div class="sheetTop"><div><div class="eyebrow">Account</div><h2>${esc(state.user.email)}</h2></div><button class="close" id="accClose">×</button></div>
      <p class="accStatus ${member ? 'on' : ''}">${member ? '✦ HLC Club member — all access' : 'Free account · not a member yet'}</p>
      ${member ? '' : '<button class="btn fill" id="accJoin">See membership</button>'}
      <button class="btn ghost" id="accOut">Sign out</button>`;
    el('accountModal').classList.add('open');
    el('accClose').onclick = () => el('accountModal').classList.remove('open');
    if (el('accJoin')) el('accJoin').onclick = () => { el('accountModal').classList.remove('open'); setView('protocols'); };
    el('accOut').onclick = () => { el('accountModal').classList.remove('open'); signOut(); };
  }
  el('accountModal').onclick = (e) => { if (e.target.id === 'accountModal') el('accountModal').classList.remove('open'); };

  /* ---------------------------------- boot --------------------------------- */
  async function boot() {
    render();
    if (store.token) {
      try { applyAccount(await api('/api/me')); render(); }
      catch (e) { if (e.status === 401) { store.token = ''; state.user = null; render(); } }
    }
    await handleCheckoutReturn();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  boot();
})();
