// HLC Club — app logic. Talks to the Worker API for real auth, favorites sync, and Stripe checkout.
(() => {
  const API = /localhost|127\.0\.0\.1/.test(location.hostname)
    ? 'http://localhost:8787'
    : 'https://hlcapp-api.ambrainvestimentos.workers.dev';
  const CLUB = 'hlc-club';
  const STRIPE_PK = 'pk_live_51PCN4JDaaq6By5Hj8QD9gEGEvIFvHYeaUI1HDTCFESjx5kyg5l7wGJmv2g8GsDOoghyesiYUfWXFlYslRWBeXupr00zWQwdePI'; // public, shared US acct
  const ADMINS = new Set(['julsgarcia@gmail.com', 'juliagarciaus@gmail.com', 'ambrainvestimentos@gmail.com', 'info@healthyfoodrecipesclub.com']);
  const isAdmin = () => ADMINS.has((state.user?.email || '').toLowerCase());

  const RECIPES = window.HLC_RECIPES || [];
  const TEAS = [
    { title: 'Peppermint Ginger Reset', tcm: 'Warming', for: ['Bloating', 'After dinner'], ingredients: 'Fresh ginger, peppermint, lemon peel, hot water', steep: '5–7 min', why: 'Ginger and peppermint are traditionally used to ease digestive comfort; the warm ritual helps close the kitchen after dinner.' },
    { title: 'Cinnamon Cacao Calm', tcm: 'Warming', for: ['Sweet cravings', 'Evening'], ingredients: 'Cacao, cinnamon, almond milk, pinch of salt', steep: 'Warm 4 min', why: 'A sweet cup that satisfies the craving ritual — cacao polyphenols and cinnamon, no sugar spiral.' },
    { title: 'Lemon Mineral Morning', tcm: 'Neutral', for: ['Hydration', 'Before coffee'], ingredients: 'Warm water, lemon, tiny pinch sea salt', steep: 'Ready', why: 'A gentle morning cue that hydrates before caffeine and gives a soft mineral start to the day.' },
    { title: 'Fennel After-Meal', tcm: 'Warming', for: ['Bloating', 'Heaviness'], ingredients: 'Fennel seeds, hot water', steep: '8–10 min', why: 'Fennel is a classic post-meal carminative in traditional use — soothing when meals feel heavy.' },
    { title: 'Chamomile Wind-Down', tcm: 'Cooling', for: ['Sleep', 'Stress'], ingredients: 'Chamomile flowers, hot water, optional honey', steep: '5 min', why: 'A calming evening ritual traditionally used to settle the mind and ease into rest.' },
    { title: 'Turmeric Ginger Glow', tcm: 'Warming', for: ['Anti-inflammatory', 'Immunity'], ingredients: 'Turmeric, ginger, black pepper, coconut milk', steep: 'Warm 5 min', why: 'Turmeric with a pinch of black pepper and warming ginger — a comforting anti-inflammatory cup.' }
  ];
  const GOALS = ['All', 'Sweet cravings', 'Gut health', 'Anti-inflammatory', 'Protein'];
  // Onboarding wellness assessment — baseline check-in (not a diagnosis).
  const ASSESS_Q = [
    { key: 'energy', label: 'Energy through the day', lo: 'Often drained', hi: 'Energized' },
    { key: 'sleep', label: 'Sleep quality', lo: 'Restless', hi: 'Deep & restful' },
    { key: 'focus', label: 'Focus & clarity', sub: 'The opposite of brain fog', lo: 'Foggy', hi: 'Sharp' },
    { key: 'digestion', label: 'Digestion & comfort', lo: 'Uneasy', hi: 'Comfortable' }
  ];
  const WGOALS = ['More energy', 'Less bloating', 'Better sleep', 'Sweet cravings', 'Clearer mind'];
  const WGOAL_MAP = { 'More energy': ['Protein', 'Anti-inflammatory'], 'Less bloating': ['Gut health'], 'Better sleep': ['Anti-inflammatory'], 'Sweet cravings': ['Sweet cravings'], 'Clearer mind': ['Anti-inflammatory', 'Protein'] };
  function tunedGoals() { return [...new Set((state.assessment?.goals || []).flatMap((g) => WGOAL_MAP[g] || []))]; }
  // Fullscript — optional practitioner-grade supplement layer (Julia's dispensary → commission).
  // Descriptive/traditional-use only; no doses, no prescription. Guardrail: "optional · consult your provider".
  const FULLSCRIPT_URL = 'https://us.fullscript.com/welcome/healthyfoodrecipesclub';
  const SUPPLEMENTS = [
    { name: 'Probiotic blend', note: 'Supports gut flora' },
    { name: 'L-Glutamine', note: 'Gut-lining support' },
    { name: 'Digestive enzymes', note: 'With meals' },
    { name: 'Magnesium', note: 'Calm & regularity' },
    { name: 'Omega-3', note: 'Anti-inflammatory support' }
  ];
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
    set localFavs(v) { localStorage.setItem('hlc:favorites', JSON.stringify(v)); },
    get cleanHistory() { try { return JSON.parse(localStorage.getItem('hlc:cleanhist')) || []; } catch { return []; } },
    set cleanHistory(v) { localStorage.setItem('hlc:cleanhist', JSON.stringify((v || []).slice(0, 12))); }
  };

  const state = {
    view: 'discover',
    query: '',
    goal: 'All',
    user: null,
    favorites: new Set(store.localFavs),
    entitlements: new Set(),
    selected: null,
    authIntent: null,
    assessment: null,
    pendingCheckout: null,
    pendingPay: null
  };

  // ---- Quality lens engine (calories quality, not just quantity) ----
  // Anchored in NOVA processing + Nutri-Score + anti-inflammatory ingredients (DII concept).
  // Educational guide, never a medical/clinical measure.
  const ANTI_INFLAM = ['cacao', 'cocoa', 'berr', 'raspberr', 'blueberr', 'strawberr', 'almond', 'walnut', 'hazelnut', 'cashew', 'chia', 'flax', 'coconut', 'olive', 'avocado', 'ginger', 'turmeric', 'cinnamon', 'oat', 'date', 'lemon', 'pecan', 'pumpkin seed'];
  const INFLAM = ['glucose syrup', 'corn syrup', 'high fructose', 'syrup', 'maltodextrin', 'dextrose', 'palm oil', 'sunflower oil', 'soybean oil', 'canola', 'hydrogenated', 'refined', 'lecithin', 'emulsifier', 'flavour', 'flavor', 'colour', 'color', 'preservative', 'aspartame', 'sucralose'];
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const band = (s) => s >= 80 ? { label: 'Nourishing', color: '#6ee7b7' } : s >= 55 ? { label: 'Moderate', color: '#e0b04a' } : { label: 'Inflammatory', color: '#e08a6a' };

  // Score a packaged product from Open Food Facts data.
  // Curated harmful-additive reference: e-number -> [name, why it harms the body, banned/restricted where].
  const ADDITIVE_INFO = {
    e102: ['Tartrazine (Yellow 5)', 'Azo dye linked to hyperactivity in sensitive children and allergic reactions.', 'Warning label required in the EU; banned in Norway.'],
    e104: ['Quinoline Yellow', 'Synthetic dye linked to hyperactivity.', 'Banned in the US, Australia & Norway.'],
    e110: ['Sunset Yellow (Yellow 6)', 'Azo dye associated with hyperactivity and allergic responses.', 'EU warning label required; restricted in Norway.'],
    e122: ['Carmoisine (Azorubine)', 'Azo dye linked to hyperactivity.', 'Banned in the US, Japan & Norway.'],
    e124: ['Ponceau 4R', 'Azo dye associated with hyperactivity.', 'Banned in the US & Norway.'],
    e127: ['Erythrosine (Red 3)', 'Synthetic dye with thyroid-tumour concerns in animal studies.', 'Banned by the US FDA in food (2025).'],
    e129: ['Allura Red (Red 40)', 'Synthetic red dye linked to hyperactivity and attention problems in children; some people with autoimmune conditions also react to synthetic dyes.', 'EU warning label; banned in California school food.'],
    e131: ['Patent Blue', 'Synthetic dye that can cause allergic reactions.', 'Banned in the US, Australia & Norway.'],
    e133: ['Brilliant Blue', 'Synthetic dye; allergic reactions in sensitive people.', ''],
    e142: ['Green S', 'Synthetic dye.', 'Banned in the US, Canada & Japan.'],
    e150d: ['Caramel colour IV', 'May contain 4-MEI, flagged as a possible carcinogen.', ''],
    e171: ['Titanium dioxide', 'Whitener with genotoxicity (DNA-damage) concerns.', 'Banned in the European Union (2022).'],
    e211: ['Sodium benzoate', 'Can form benzene with vitamin C; linked to hyperactivity.', ''],
    e220: ['Sulphur dioxide', 'Sulphite preservative that can trigger asthma and allergic reactions.', ''],
    e249: ['Potassium nitrite', 'Forms nitrosamines; processed meats raise colorectal-cancer risk.', 'Tightly restricted in the EU.'],
    e250: ['Sodium nitrite', 'Forms nitrosamines; processed meats raise colorectal-cancer risk.', 'Tightly restricted in the EU.'],
    e251: ['Sodium nitrate', 'Linked, via nitrosamines, to processed-meat cancer risk.', 'Tightly restricted in the EU.'],
    e320: ['BHA', 'Preservative classed “possibly carcinogenic” (IARC 2B); endocrine concerns.', 'Restricted in the EU & Japan.'],
    e321: ['BHT', 'Synthetic preservative with possible endocrine and liver effects.', 'Restricted in parts of the EU.'],
    e338: ['Phosphoric acid', 'Common in colas; high intake linked to lower bone density.', ''],
    e407: ['Carrageenan', 'Thickener that may promote gut inflammation in susceptible people.', ''],
    e433: ['Polysorbate 80', 'Emulsifier shown to disrupt the gut microbiome and barrier in studies.', ''],
    e466: ['Carboxymethylcellulose', 'Emulsifier linked to gut-microbiome disruption and inflammation.', ''],
    e621: ['MSG (glutamate)', 'Flavour enhancer that triggers headaches/sensitivity in some people.', ''],
    e924: ['Potassium bromate', 'Flour improver classed as a possible human carcinogen.', 'Banned in the EU, UK, Canada & Brazil.'],
    e927a: ['Azodicarbonamide', 'Dough conditioner that degrades into a suspected carcinogen.', 'Banned in the EU & Australia.'],
    e950: ['Acesulfame K', 'Artificial sweetener with emerging gut-microbiome and glucose concerns.', ''],
    e951: ['Aspartame', 'Sweetener classed “possibly carcinogenic” (IARC 2B, 2023); headaches in some.', ''],
    e952: ['Cyclamate', 'Artificial sweetener.', 'Banned in the United States.'],
    e954: ['Saccharin', 'Artificial sweetener; may alter gut bacteria and glucose response.', ''],
    e955: ['Sucralose', 'Linked to altered gut bacteria; may form harmful compounds when heated.', '']
  };
  // Harmful ingredients spotted by name in the ingredient list: [keywords, name, why, banned-where].
  const HARMFUL_KEYWORDS = [
    [['high fructose corn syrup', 'high-fructose', 'glucose-fructose', 'corn syrup'], 'High-fructose corn syrup', 'Cheap liquid sugar tied to insulin resistance, fatty liver and weight gain.', ''],
    [['partially hydrogenated', 'hydrogenated'], 'Hydrogenated oils (trans fat)', 'Trans fats raise LDL, lower HDL and drive inflammation and heart disease.', 'Trans fats banned/limited in the US, EU & Canada.'],
    [['potassium bromate'], 'Potassium bromate', 'Flour improver classed as a possible human carcinogen.', 'Banned in the EU, UK, Canada & Brazil.'],
    [['brominated vegetable oil', 'brominated'], 'Brominated vegetable oil (BVO)', 'Bromine can accumulate in body tissue.', 'Banned in the EU & Japan; revoked in the US (2024).'],
    [['azodicarbonamide'], 'Azodicarbonamide', 'Dough conditioner that degrades into a suspected carcinogen.', 'Banned in the EU & Australia.'],
    [['palm oil'], 'Palm oil', 'Very high in saturated fat; heavy intake can raise cholesterol.', ''],
    [['maltodextrin'], 'Maltodextrin', 'High-glycemic filler that spikes blood sugar and may disturb gut bacteria.', ''],
    [['artificial flavor', 'artificial flavour', 'artificial flavoring'], 'Artificial flavouring', 'Undisclosed synthetic flavour compounds — no nutritional value.', ''],
    [['modified starch', 'modified corn starch'], 'Modified starch', 'Ultra-processed thickener; a marker of highly processed food.', ''],
    [['soybean oil', 'canola oil', 'sunflower oil', 'vegetable oil', 'vegetable fat', 'rapeseed'], 'Refined vegetable & seed oils', 'High in omega-6 and often heat/chemically refined; in excess can tip the body toward inflammation.', ''],
    [['invert sugar', 'dextrose', 'glucose syrup'], 'Added refined sugars', 'Fast-absorbing sugars that spike blood glucose and feed cravings.', '']
  ];
  // Additive class from its E-number, so we can label "Colour", "Flavour enhancer", "Sweetener"…
  function additiveCategory(e) {
    const n = parseInt(String(e).replace(/[^0-9]/g, ''), 10);
    if (!n) return 'Additive';
    if (n < 200) return 'Colour';
    if (n < 300) return 'Preservative';
    if (n < 400) return 'Antioxidant';
    if (n < 500) return 'Thickener / Emulsifier';
    if (n < 600) return 'Acidity / Anti-caking';
    if (n < 700) return 'Flavour enhancer';
    if (n >= 920 && n < 930) return 'Flour treatment';
    if (n >= 950 && n < 970) return 'Sweetener';
    return 'Additive';
  }
  function harmfulItems(p) {
    const out = []; const seen = new Set();
    const push = (name, why, banned, sev, cat) => { const k = name.toLowerCase(); if (seen.has(k)) return; seen.add(k); out.push({ name, why, banned: banned || '', sev, cat: cat || '' }); };
    for (const tag of (p.additives_tags || [])) {
      const e = String(tag).replace(/^[a-z]+:/, '').replace(/[^a-z0-9]/g, '');
      const info = ADDITIVE_INFO[e];
      if (info) push(info[0], info[1], info[2], 'bad', additiveCategory(e));
    }
    const ing = (p.ingredients_text || '').toLowerCase();
    for (const [keys, name, why, banned] of HARMFUL_KEYWORDS) {
      if (!keys.some((k) => ing.includes(k))) continue;
      const l = name.toLowerCase();
      const cat = /sugar|syrup|dextrose/.test(l) ? 'Added sugar' : /oil|palm|fat/.test(l) ? 'Fat' : /flavour|flavor/.test(l) ? 'Flavouring' : '';
      push(name, why, banned, 'warn', cat);
    }
    // Acrylamide forms in high-heat starchy foods — flagged by category (OFF has no direct field).
    const cats = (p.categories_tags || []).join(' ');
    if (/chips|crisps|french-fries|fries|fried|crackers|biscuit|cookie|breakfast-cereal|roasted|coffee|toast|rusk/.test(cats)) {
      push('Acrylamide risk', 'High-heat starchy foods (fried, baked, roasted) can form acrylamide, a probable human carcinogen.', 'EU enforces acrylamide benchmark levels.', 'warn', 'Process contaminant');
    }
    return out;
  }
  // Diet labels (gluten/lactose/dairy-free…) + declared allergens & traces.
  function dietaryInfo(p) {
    const strip = (arr) => (arr || []).map((t) => String(t).replace(/^[a-z]+:/, ''));
    const labels = strip(p.labels_tags); const ana = strip(p.ingredients_analysis_tags);
    const has = (set, ...keys) => keys.some((k) => set.includes(k));
    const good = [];
    if (has(labels, 'gluten-free', 'no-gluten') || has(ana, 'no-gluten')) good.push('diet_gluten');
    if (has(labels, 'no-lactose', 'lactose-free')) good.push('diet_lactose');
    if (has(labels, 'dairy-free', 'no-milk')) good.push('diet_dairy');
    if (has(labels, 'vegan') || has(ana, 'vegan')) good.push('diet_vegan');
    if (has(labels, 'no-added-sugar', 'no-sugar', 'without-added-sugar')) good.push('diet_nosugar');
    if (has(labels, 'organic', 'eu-organic')) good.push('diet_organic');
    if (has(labels, 'kosher')) good.push('diet_kosher');
    if (has(labels, 'halal')) good.push('diet_halal');
    if (has(ana, 'palm-oil-free')) good.push('diet_palmfree');
    const clean = (arr) => [...new Set(strip(arr).map((t) => t.replace(/-/g, ' ')))].filter(Boolean);
    return { good: [...new Set(good)], allergens: clean(p.allergens_tags), traces: clean(p.traces_tags) };
  }
  function originInfo(p) {
    const tidy = (s) => String(s || '').split(',').map((x) => x.replace(/^[a-z]+:/, '').replace(/-/g, ' ').trim()).filter(Boolean);
    const origins = p.origins ? tidy(p.origins) : (p.origins_tags || []).map((t) => String(t).replace(/^[a-z]+:/, '').replace(/-/g, ' '));
    const made = tidy(p.manufacturing_places);
    return { origins: [...new Set(origins)], made: [...new Set(made)] };
  }

  function cleanScore(p) {
    const n = p.nutriments || {};
    const nova = p.nova_group;
    const ns = (p.nutriscore_grade || '').toLowerCase();
    const ing = (p.ingredients_text || '').toLowerCase();
    const additives = (p.additives_tags || []).length;
    let score = ({ 1: 42, 2: 30, 3: 16, 4: 4 }[nova] ?? 18);
    score += ({ a: 20, b: 15, c: 10, d: 5, e: 0 }[ns] ?? 8);
    const sugars = n.sugars_100g ?? n.sugars ?? 0;
    if (sugars > 22) score -= 14; else if (sugars > 10) score -= 7;
    if ((n.fiber_100g ?? 0) >= 5) score += 6;
    if ((n.proteins_100g ?? 0) >= 10) score += 6;
    score -= clamp(additives * 3, 0, 18);
    const anti = ANTI_INFLAM.filter((k) => ing.includes(k)).length;
    const inf = INFLAM.filter((k) => ing.includes(k)).length;
    score += clamp(anti * 2, 0, 10) - clamp(inf * 2, 0, 14);
    score = Math.round(clamp(score, 3, 99));
    const antiPct = clamp(Math.round(50 + (anti - inf) * 12 + (nova ? (3 - nova) * 8 : 0)), 6, 96);
    const flags = [];
    if (nova) flags.push({ k: nova >= 4 ? 'bad' : nova === 3 ? 'warn' : 'good', t: 'Processing level', s: `NOVA ${nova} — ${['', 'unprocessed', 'few ingredients', 'processed', 'ultra-processed'][nova]}`, v: nova >= 4 ? 'High' : nova === 3 ? 'Caution' : 'Good' });
    if (sugars) flags.push({ k: sugars > 22 ? 'bad' : sugars > 10 ? 'warn' : 'good', t: 'Sugar load', s: `${Math.round(sugars)}g per 100g`, v: sugars > 22 ? 'High' : sugars > 10 ? 'Caution' : 'Good' });
    if (additives) flags.push({ k: additives > 3 ? 'bad' : 'warn', t: 'Additives', s: `${additives} additive${additives > 1 ? 's' : ''} detected`, v: 'Caution' });
    if ((n.proteins_100g ?? 0) >= 8) flags.push({ k: 'good', t: 'Protein', s: `${Math.round(n.proteins_100g)}g per 100g`, v: 'Good' });
    if (anti) flags.push({ k: 'good', t: 'Whole-food signals', s: `${anti} anti-inflammatory ingredient${anti > 1 ? 's' : ''}`, v: 'Good' });
    return { score, band: band(score), antiPct, flags };
  }

  // Quality of an owned HLC recipe atom (whole-food → high quality).
  function recipeQuality(r) {
    const ing = r.ingredients.join(' ').toLowerCase();
    const anti = ANTI_INFLAM.filter((k) => ing.includes(k)).length;
    const fiber = parseInt(r.macros.fiber, 10) || 0;
    let score = 72 + anti * 3 + (fiber >= 4 ? 6 : fiber >= 2 ? 3 : 0);
    score = Math.round(clamp(score, 70, 97));
    return { score, band: band(score), anti };
  }

  const $ = (s) => document.querySelector(s);
  const el = (id) => document.getElementById(id);
  const PROTO_CODE = 'gut-reset-7day';
  const PROTO_PRICE = 19;
  // Real product line (covers + gated PDFs in KV via /api/download).
  const PROGRAMS = {
    bundle: { code: 'gut-transformation', title: '30-Day Gut Transformation', price: 47, cover: '/assets/covers/cover-gut-transformation-paid.png', file: 'gut-transformation', blurb: 'The complete 30-day functional gut protocol + all 4 FullScript supplement protocols.' },
    free: { title: '5-Day Gut Reset', cover: '/assets/covers/cover-gut-reset-free.png', pdf: '/assets/programs/5-day-gut-reset.pdf', blurb: 'A functional 5-day reset to end bloating and rebuild energy — yours free.' },
    protocols: [
      { title: 'Gut Reset', benefit: 'Rebuild the microbiome & calm bloating', file: 'protocol-gut-reset' },
      { title: 'GLP-1 Natural Support', benefit: 'Curb cravings & support satiety, naturally', file: 'protocol-glp1' },
      { title: 'Hormonal Balance', benefit: 'Steady energy, mood & cycle support', file: 'protocol-hormonal' },
      { title: 'Anti-Inflammatory Foundation', benefit: 'Lower the inflammation load at the source', file: 'protocol-anti-inflammatory' }
    ]
  };
  const isMember = () => state.entitlements.has(CLUB);
  const hasBundle = () => isMember() || state.entitlements.has('gut-transformation');
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
    if ('assessment' in data) state.assessment = data.assessment;
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
      const intent = state.authIntent; state.authIntent = null;
      if (state.pendingPay) { const c = state.pendingPay; state.pendingPay = null; openPayReview(c.body, c.display); }
      else if (state.pendingCheckout) { const b = state.pendingCheckout; state.pendingCheckout = null; startCheckout(b); }
      else if (intent === 'assessment' || !state.assessment) openAssessment(); // onboarding baseline
    } catch (e) {
      toast(e.status === 401 ? 'Wrong or expired code.' : 'Could not verify.');
    } finally { el('authVerify').disabled = false; }
  }

  function signOut() { store.token = ''; state.user = null; state.entitlements = new Set(); state.assessment = null; state.favorites = new Set(store.localFavs); render(); toast('Signed out.'); }

  /* -------------------------------- checkout ------------------------------- */
  let payBody = null, payDisplay = null, embeddedCheckout = null;
  function openPayReview(body, d) {
    payBody = body; payDisplay = d;
    el('payReview').style.display = 'block';
    el('embedded').style.display = 'none'; el('embedded').innerHTML = '';
    el('payGo').disabled = false; el('payGo').textContent = 'Complete secure checkout →';
    el('payBody').innerHTML = `
      ${d.cover ? `<img class="payCover" src="${d.cover}" alt=""/>` : ''}
      <h2 class="serif">${esc(d.title)}</h2>
      <p class="paySub">${esc(d.sub || '')}</p>
      <div class="payPrice">${esc(d.price)}</div>
      ${d.included ? `<ul class="payList">${d.included.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}`;
    el('payModal').classList.add('open');
  }
  function joinClub(plan) {
    openPayReview({ plan }, { title: 'HLC Club Membership', sub: plan === 'annual' ? 'Annual — 2 months free' : 'Monthly · cancel anytime', price: plan === 'annual' ? '$69 / year' : '$9 / month', included: ['All 18 recipes + weekly drops', 'Every protocol', 'Clean Check scanner', 'Meal planning & favorites sync'] });
  }
  function buyProtocol(code) {
    if (code === 'gut-transformation') openPayReview({ protocol: code }, { title: '30-Day Gut Transformation', sub: 'Complete Bundle — includes all 4 FullScript protocols', price: '$47 one-time', cover: '/assets/covers/cover-gut-transformation-paid.png', included: ['30-day functional gut protocol', '4 FullScript supplement protocols', 'Lifetime PDF access'] });
    else openPayReview({ protocol: code }, { title: 'HLC Program', price: 'One-time' });
  }
  function closePay() {
    el('payModal').classList.remove('open');
    if (embeddedCheckout) { try { embeddedCheckout.destroy(); } catch {} embeddedCheckout = null; }
  }
  async function payNow() {
    if (!loggedIn()) { state.pendingPay = { body: payBody, display: payDisplay }; closePay(); openAuth('pay'); toast('Create your account first — one tap.'); return; }
    await mountEmbedded(payBody);
  }
  async function mountEmbedded(body) {
    const go = el('payGo'); go.disabled = true; const orig = go.textContent; go.textContent = 'Loading secure checkout…';
    try {
      const r = await api('/api/checkout', { method: 'POST', body: { ...body, embedded: true } });
      if (!r.clientSecret) { if (r.url) { location.href = r.url; return; } throw new Error('no_secret'); }
      if (!window.Stripe) await loadScript('https://js.stripe.com/v3/');
      if (embeddedCheckout) { try { embeddedCheckout.destroy(); } catch {} }
      embeddedCheckout = await window.Stripe(STRIPE_PK).initEmbeddedCheckout({ clientSecret: r.clientSecret });
      el('payReview').style.display = 'none';
      el('embedded').style.display = 'block';
      embeddedCheckout.mount('#embedded');
    } catch (e) {
      go.disabled = false; go.textContent = orig;
      toast(e.status === 501 ? 'Checkout is being connected.' : 'Could not load checkout — try again.');
    }
  }
  function checkoutOrAuth(body) {
    if (!loggedIn()) { state.pendingCheckout = body; openAuth('checkout'); toast('Create your account first — one tap.'); return; }
    startCheckout(body);
  }
  async function startCheckout(body) {
    toast('Opening secure checkout…');
    try {
      const { url } = await api('/api/checkout', { method: 'POST', body });
      if (url) location.href = url; else toast('Checkout is not available yet.');
    } catch (e) {
      toast(e.status === 501 ? 'Checkout is being connected.' : 'Could not start checkout.');
    }
  }
  async function downloadPaid(file, title) {
    if (!loggedIn()) { openAuth(); return toast('Sign in to download.'); }
    toast('Preparing your download…');
    try {
      const res = await fetch(API + '/api/download?file=' + encodeURIComponent(file), { headers: { authorization: `Bearer ${store.token}` } });
      if (!res.ok) return toast(res.status === 403 ? 'Unlock with the bundle or Club.' : 'Could not download.');
      const blobUrl = URL.createObjectURL(await res.blob());
      const a = document.createElement('a'); a.href = blobUrl; a.download = (title || file) + '.pdf';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch { toast('Download failed — try again.'); }
  }

  // After Stripe redirect: poll /api/me until the webhook grants the entitlement.
  async function handleCheckoutReturn() {
    const params = new URLSearchParams(location.search);
    const status = params.get('checkout');
    if (!status) return;
    history.replaceState({}, '', location.pathname);
    if (status === 'cancel') return toast('Checkout canceled.');
    if (status === 'success') {
      toast('Payment received — unlocking your access…');
      const before = state.entitlements.size;
      let grew = false;
      for (let i = 0; i < 6; i++) {
        try { applyAccount(await api('/api/me')); } catch {}
        if (state.entitlements.size > before || isMember()) { grew = true; break; }
        await new Promise((r) => setTimeout(r, 1500));
      }
      render();
      toast(grew ? 'Unlocked — enjoy.' : 'Almost there — refresh in a moment.');
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
    renderWellnessCard();
    const tuned = tunedGoals();
    let list = filtered();
    if (tuned.length && state.goal === 'All' && !state.query) {
      list = [...list].sort((a, b) => (b.goals.some((g) => tuned.includes(g)) ? 1 : 0) - (a.goals.some((g) => tuned.includes(g)) ? 1 : 0));
      el('discoverHint').textContent = state.assessment ? `Tuned to: ${state.assessment.goals.join(' · ')}` : 'personalized after your check-in';
    } else {
      el('discoverHint').textContent = '';
    }
    el('recipeList').innerHTML = list.length ? list.map(card).join('') : `<div class="empty"><b>Nothing here yet</b>Try another goal or search.</div>`;
  }
  function renderWellnessCard() {
    const c = el('wellnessCard');
    if (!loggedIn()) {
      // Guest on-ramp: surface the personalization wow + the free magnet up front.
      c.innerHTML = `<div class="welcomeCard">
        <div class="eyebrow">New here? Start free</div>
        <b class="serifTitle">Recipes tuned to your body</b>
        <p>Take the 60-second wellness check-in — we personalize your recipes and hand you the free 5-Day Gut Reset.</p>
        <button class="btn fill" data-assess>Start free check-in</button>
        <a class="btn ghost" href="/assets/programs/5-day-gut-reset.pdf" target="_blank" rel="noopener" style="text-decoration:none">Just the free guide (PDF)</a>
      </div>`;
      return;
    }
    const a = state.assessment;
    if (!a) {
      c.innerHTML = `<button class="wellPrompt" id="wellStart"><div><div class="eyebrow">60-second check-in</div><b>Personalize your HLC Club</b><p>Tell us how you've been feeling — we tune your recipes and track how far you come.</p></div><span class="ago">→</span></button>`;
      return;
    }
    const dims = [['Energy', a.energy], ['Sleep', a.sleep], ['Focus', a.focus], ['Digestion', a.digestion]];
    const days = Math.floor((Date.now() - new Date(a.createdAt).getTime()) / 86400000);
    const due = days >= 30;
    c.innerHTML = `<div class="wellCard"><div class="wellTop"><div class="eyebrow">Your wellness baseline</div><button class="wellRetake" id="wellStart">${due ? 'Re-check now' : 'Update'}</button></div>
      <div class="wellDims">${dims.map(([k, v]) => `<div><span class="wellBar"><i style="width:${(v || 0) * 20}%"></i></span><small>${k}</small></div>`).join('')}</div>
      <p class="wellNote">${due ? '30 days in — re-check to see what changed.' : `Day ${days} of 30 · we'll re-check to show your progress.`}</p></div>`;
  }
  // ---- Wellness assessment flow ----
  const assessDraft = { energy: 0, sleep: 0, focus: 0, digestion: 0, goals: new Set() };
  function openAssessment() {
    const a = state.assessment;
    assessDraft.energy = a?.energy || 0; assessDraft.sleep = a?.sleep || 0; assessDraft.focus = a?.focus || 0; assessDraft.digestion = a?.digestion || 0;
    assessDraft.goals = new Set(a?.goals || []);
    renderAssessment();
    el('assessModal').classList.add('open');
  }
  function renderAssessment() {
    el('assessBody').innerHTML = ASSESS_Q.map((q) => `
      <div class="aq"><div class="aql">${q.label}</div>${q.sub ? `<div class="aqs">${q.sub}</div>` : ''}
        <div class="ascale" data-akey="${q.key}">${[1, 2, 3, 4, 5].map((n) => `<i class="${assessDraft[q.key] >= n ? 'on' : ''}" data-aval="${n}"></i>`).join('')}</div>
        <div class="aends"><span>${q.lo}</span><span>${q.hi}</span></div></div>`).join('')
      + `<div class="aq"><div class="aql">What matters most to you?</div><div class="agoals">${WGOALS.map((g) => `<button class="gchip ${assessDraft.goals.has(g) ? 'on' : ''}" data-agoal="${g}">${g}</button>`).join('')}</div></div>`;
  }
  function closeAssess() { el('assessModal').classList.remove('open'); }
  async function saveAssessmentFlow() {
    if (!loggedIn()) { closeAssess(); openAuth('assessment'); return; }
    const answered = ASSESS_Q.some((q) => assessDraft[q.key] > 0) || assessDraft.goals.size;
    if (!answered) return toast('Tap a few answers first.');
    el('assessSave').disabled = true;
    try {
      const data = await api('/api/assessment', { method: 'POST', body: { energy: assessDraft.energy, sleep: assessDraft.sleep, focus: assessDraft.focus, digestion: assessDraft.digestion, goals: [...assessDraft.goals] } });
      applyAccount(data); closeAssess(); render(); toast('Baseline saved — your app is tuned to you.');
    } catch { toast('Could not save — try again.'); } finally { el('assessSave').disabled = false; }
  }

  function renderSaved() {
    const favs = RECIPES.filter((r) => isFav(r.id));
    el('savedList').innerHTML = favs.length ? favs.map(card).join('')
      : `<div class="empty"><b>No favorites yet</b>Tap the star on any recipe and it lives here${loggedIn() ? '' : ' — sign in to sync across devices'}.</div>`;
  }
  function renderProtocols() {
    const P = PROGRAMS;
    const owned = hasBundle();
    el('protocolGate').innerHTML = `
      <article class="bundleCard">
        <img class="bundleImg" src="/assets/hlc/oats.png" alt=""/>
        <div class="bundleBody">
          <div class="eyebrow">Complete bundle${owned ? ' · yours' : ''}</div>
          <h3 class="serifTitle">30-Day Gut Transformation</h3>
          <p>The complete 30-day functional gut protocol — plus all 4 FullScript supplement protocols below.</p>
          ${owned
            ? `<button class="btn em" data-dl="gut-transformation::30-Day Gut Transformation">Download the bundle (PDF)</button>`
            : `<div class="prodPrice">$${P.bundle.price}<span>one-time</span></div><button class="btn fill" data-buy="${P.bundle.code}">Buy the bundle — $${P.bundle.price}</button>`}
        </div>
      </article>
      ${owned ? '' : `<div class="orsep"><span>or start free</span></div>
      <article class="freeCard">
        <div class="eyebrow">Free · start here</div>
        <h3 class="serifTitle">5-Day Gut Reset</h3>
        <p>A functional 5-day reset to end bloating and rebuild energy — yours free.</p>
        <a class="btn em" href="${P.free.pdf}" target="_blank" rel="noopener" download>Download free (PDF)</a>
      </article>`}
      <div class="sec-h">${owned ? 'Your 4 protocols' : 'The 4 protocols inside'}</div>
      <div class="protoList">${P.protocols.map((p, i) => `
        <div class="protoRow">
          <span class="protoNum">${String(i + 1).padStart(2, '0')}</span>
          <div class="protoInfo"><b>${esc(p.title)}</b><small>${esc(p.benefit)}</small></div>
          ${owned ? `<button class="protoDl" data-dl="${p.file}::${esc(p.title)}">Download</button>` : `<span class="protoIn">${lockSvg}</span>`}
        </div>`).join('')}</div>
      ${owned ? '' : `<div class="orsep"><span>or get everything with the Club</span></div>
      <div class="paywall">
        <div class="eyebrow">HLC Club membership</div>
        <h3>All protocols, 18 recipes, Clean Check & meal planning.</h3>
        <p>New functional recipes every week. Cancel anytime.</p>
        <div class="plans">
          <button class="plan" data-plan="monthly"><b>$9<span>/mo</span></b><small>Monthly</small></button>
          <button class="plan best" data-plan="annual"><span class="save">Best value</span><b>$69<span>/yr</span></b><small>2 months free</small></button>
        </div>
        <p class="fineprint">Secure checkout by Stripe · educational content, not medical advice.</p>
      </div>`}`;
  }
  function renderProtocolDays() {
    el('protocolDays').innerHTML = PROTOCOL.map((d, i) => {
      const n = String(i + 1).padStart(2, '0');
      const recipes = d.recipes.map((id) => RECIPES.find((r) => r.id === id)).filter(Boolean);
      return `<article class="pday"><div class="pdayHead"><b>${n}</b><div><div class="eyebrow">${esc(d.focus)}</div><strong>${esc(d.title)}</strong></div></div>
        <p class="pdayHabit">${esc(d.habit)}</p>
        <div class="pdayRecipes">${recipes.map((r) => `<button class="pr" data-open="${r.id}"><img src="${r.image}" alt=""/><span>${esc(r.title)}</span><em>${r.macros.kcal} kcal</em></button>`).join('')}</div>
        <div class="pdayTea">Tea ritual · ${esc(d.tea)}</div></article>`;
    }).join('');
  }
  function renderTeas() {
    const tcmClass = (t) => t === 'Warming' ? 'warm' : t === 'Cooling' ? 'cool' : 'neutral';
    el('teaList').innerHTML = TEAS.map((t) => `<article class="tea">
      <div class="teaTop"><b>${esc(t.title)}</b><span class="tcm ${tcmClass(t.tcm)}">${esc(t.tcm)}</span></div>
      <div class="teaFor">${t.for.map((f) => `<span>${esc(f)}</span>`).join('')}</div>
      <p class="teaWhy">${esc(t.why)}</p>
      <div class="teaMeta"><span><b>Brew</b> ${esc(t.ingredients)}</span><span><b>Steep</b> ${esc(t.steep)}</span></div>
    </article>`).join('');
  }
  const pillSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/></svg>';
  function renderSupplements() {
    el('protocolSupps').innerHTML = `<div class="fs">${SUPPLEMENTS.map((s) => `<a class="supp" href="${FULLSCRIPT_URL}" target="_blank" rel="noopener"><span class="suppIc">${pillSvg}</span><span class="si"><b>${esc(s.name)}</b><small>${esc(s.note)} · via your Fullscript</small></span><span class="add">Shop</span></a>`).join('')}<div class="fsnote">Curated through Julia's Fullscript dispensary. Optional — talk to your provider before starting any supplement.</div></div>
      <a class="btn fill" href="${FULLSCRIPT_URL}" target="_blank" rel="noopener" style="margin-top:12px;text-decoration:none">Shop my Fullscript dispensary →</a>`;
  }

  // ---- Clean Check (Club feature) ----
  function ringHtml(score, color) {
    return `<div class="ring" style="background:conic-gradient(${color} 0 ${score}%, rgba(255,255,255,.08) ${score}% 100%)"><div class="rv"><b style="color:${color}">${score}</b><small>/100</small></div></div>`;
  }
  function cleanAlt(name) {
    const t = name.toLowerCase();
    const map = [['cooki', 'twix'], ['brownie', 'fudge-brownie'], ['cheesecake', 'berry-cheesecake'], ['caramel', 'date-caramel'], ['coconut', 'coconut-kisses'], ['peanut', 'pb-fudge'], ['lemon', 'lemon-tart'], ['strawberr', 'strawberry-bonbons'], ['bar', 'twix'], ['truffle', 'brigadeiro'], ['chocolate', 'fudge-brownie'], ['candy', 'strawberry-bonbons']];
    const hit = map.find(([k]) => t.includes(k));
    return RECIPES.find((r) => r.id === (hit ? hit[1] : 'brigadeiro')) || RECIPES[0];
  }
  function renderClean() {
    const member = isMember();
    el('cleanGate').style.display = member ? 'none' : 'block';
    el('cleanTool').style.display = member ? 'block' : 'none';
    if (!member) {
      el('cleanGate').innerHTML = `<div class="paywall"><div class="eyebrow">${esc(t('rec_members_h'))}</div><h3>${esc(t('clean_members_h'))}</h3><p>${esc(t('clean_members_p'))}</p><button class="btn fill" data-tab="protocols">${esc(t('clean_unlock'))}</button></div>`;
    } else {
      renderCleanHistory();
    }
  }
  function runCleanCheck() {
    const q = el('cleanInput').value.trim();
    if (q) lookupClean('q=' + encodeURIComponent(q), `“${q}”`);
  }
  function lookupBarcode(code) {
    setView('clean');
    lookupClean('barcode=' + encodeURIComponent(code), `barcode ${code}`);
  }
  async function lookupClean(query, label) {
    el('cleanResult').innerHTML = `<div class="empty">Checking ${esc(label)}…</div>`;
    try {
      const data = await api('/api/clean?' + query);
      const p = data.product;
      if (!p || !p.product_name) { el('cleanResult').innerHTML = `<div class="empty"><b>No product found</b>Try the barcode, or a more specific name.</div>`; return; }
      renderCleanResult(p, data.alternatives || []);
      addCleanHistory({ query, label, name: p.product_name, brand: p.brands || '', img: p.image_small_url || '', score: cleanScore(p).score });
    } catch (e) {
      el('cleanResult').innerHTML = `<div class="empty"><b>Could not reach the food database</b>Check your connection and try again.</div>`;
    }
  }
  function renderCleanResult(p, alternatives = []) {
    const q2 = cleanScore(p);
    const alt = cleanAlt(p.product_name);
    const altQ = recipeQuality(alt);
    const harm = harmfulItems(p);
    const orig = originInfo(p);
    const diet = dietaryInfo(p);
    const n = p.nutriments || {};
    const isClean = q2.score >= 80 && harm.length === 0 && (p.nova_group ? p.nova_group <= 2 : true);
    // Cross the signals into one calm, positive read.
    const summary = (() => {
      const bits = [];
      if (p.nova_group >= 4) bits.push('it leans ultra-processed');
      if ((n.sugars_100g ?? 0) > 22) bits.push('sugar runs high');
      else if ((n.sugars_100g ?? 0) > 10) bits.push('there’s a fair bit of sugar');
      if (harm.some((h) => h.sev === 'bad')) bits.push(`a few additives are worth skipping${harm.some((h) => h.banned) ? ' (one is even restricted abroad)' : ''}`);
      const issue = bits.slice(0, 2).join(' and ');
      if (q2.score >= 80) return 'Lovely pick — this is whole, real food your body recognizes. Enjoy it freely.';
      if (q2.score >= 60) return issue ? `Solid choice overall — just note ${issue}. There’s an even cleaner swap below.` : 'Solid, clean choice — nothing here to worry about.';
      if (q2.score >= 40) return `A middle-of-the-road one${issue ? `: ${issue}` : ''}. Good news — your cleaner swaps are right below.`;
      return `An easy one to upgrade${issue ? `: ${issue}` : ''}. No worries — the swaps below give you the same craving, cleaner.`;
    })();
    const chips = (isClean ? ['diet_clean'] : []).concat(diet.good);
    const dietHtml = chips.length ? `<div class="diet">${chips.map((g, i) => `<span class="dchip${isClean && i === 0 ? ' clean' : ''}">${esc(t(g))}</span>`).join('')}</div>` : '';
    const harmHtml = harm.length ? `<div class="sec-h">${esc(t('clean_know'))}</div><p class="leadp">${esc(t('clean_know_lead'))}</p>${harm.map((h) => `<div class="harm ${h.sev}"><div class="ht"><div class="htop"><b>${esc(h.name)}</b>${h.cat ? `<span class="catpill">${esc(h.cat)}</span>` : ''}</div><small>${esc(h.why)}</small>${h.banned ? `<span class="banpill">⊘ ${esc(h.banned)}</span>` : ''}</div></div>`).join('')}` : '';
    const brandRows = (alternatives && alternatives.length) ? `<div class="brands">${alternatives.map((a) => `<div class="brow"><div class="bpic">${a.img ? `<img src="${esc(a.img)}" alt=""/>` : '◍'}</div><div class="binfo"><h4>${esc(a.name)}</h4><div class="bmini">${a.brand ? esc(a.brand) + ' · ' : ''}Nutri-Score ${String(a.grade || '').toUpperCase()}</div></div><span class="bgrade g-${esc(a.grade)}">${String(a.grade || '').toUpperCase()}</span></div>`).join('')}</div>` : '';
    const swapsHtml = `<div class="sec-h">${esc(t('clean_swaps'))}</div><p class="leadp">${esc(t('clean_swaps_lead'))}</p>${brandRows}<button class="arow" data-open="${alt.id}"><div class="apic"><img src="${alt.image}" alt=""/></div><div class="ainfo"><h3>${esc(t('clean_make_home'))} · ${esc(alt.title)}</h3><div class="amini"><b style="color:${altQ.band.color}">Quality ${altQ.score}</b> · whole-food · ${esc(alt.tags.slice(0, 2).join(' · '))}</div></div><span class="ago">→</span></button>${brandRows ? `<div class="src">Cleaner options in the same category · Open Food Facts.</div>` : ''}`;
    const detailRows = [];
    if (diet.allergens.length) detailRows.push(`<div class="orow bad"><span>${esc(t('clean_contains'))}</span><b>${esc(diet.allergens.join(', '))}</b></div>`);
    if (diet.traces.length) detailRows.push(`<div class="orow warn"><span>${esc(t('clean_traces'))}</span><b>${esc(diet.traces.join(', '))}</b></div>`);
    if (orig.origins.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_origin'))}</span><b>${esc(orig.origins.join(', '))}</b></div>`);
    if (orig.made.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_made'))}</span><b>${esc(orig.made.join(', '))}</b></div>`);
    if (!orig.origins.length && !orig.made.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_origin'))}</span><b class="mut">${esc(t('clean_origin_no'))}</b></div>`);
    const detailsHtml = `<div class="sec-h">${esc(t('clean_good_to_know'))}</div><div class="origin">${detailRows.join('')}</div>`;
    el('cleanResult').innerHTML = `
      <div class="scanned"><div class="sthumb">${p.image_small_url ? `<img src="${p.image_small_url}" alt=""/>` : '◍'}</div><div class="st"><div class="sbr">${esc(p.brands || 'Product')}</div><div class="snm">${esc(p.product_name)}</div></div></div>
      <div class="scoreRow">${ringHtml(q2.score, q2.band.color)}<div class="slab"><span class="sbadge" style="background:${q2.band.color}">${q2.band.label}</span><p class="summary">${esc(summary)}</p></div></div>
      ${dietHtml}
      <div class="qbalance"><div class="qb-lbls"><span>${esc(t('clean_calq'))}</span><span>${q2.antiPct}${esc(t('clean_anti'))}</span></div><div class="qb-track"><i style="width:${q2.antiPct}%"></i></div></div>
      <div class="sec-h">${esc(t('clean_at_glance'))}</div>
      ${q2.flags.map((f) => `<div class="flag ${f.k}"><span class="fdot"></span><div class="ft">${esc(f.t)}<small>${esc(f.s)}</small></div><span class="fv">${esc(f.v)}</span></div>`).join('')}
      ${harmHtml}
      ${swapsHtml}
      ${detailsHtml}
      <div class="cwhy"><p><b>How we read it:</b> we cross processing (NOVA), Nutri-Score, sugar, additives and ingredient origin into one score, with an anti-inflammatory overlay. More whole, less processed = higher.</p><div class="src">Data: Open Food Facts · NOVA · educational, not medical advice.</div></div>`;
  }

  // ---- Clean Check search history (per device) ----
  function addCleanHistory(entry) {
    const hist = store.cleanHistory.filter((h) => h.query !== entry.query);
    hist.unshift(entry);
    store.cleanHistory = hist;
    renderCleanHistory();
  }
  function renderCleanHistory() {
    const box = el('cleanHistory'); if (!box) return;
    const hist = store.cleanHistory;
    if (!hist.length) { box.innerHTML = ''; return; }
    box.innerHTML = `<div class="chRow"><span class="chTitle">${esc(t('clean_recent'))}</span><button class="chClear" id="chClear" type="button">${esc(t('clean_clear'))}</button></div>`
      + `<div class="chList">` + hist.map((h, i) => `<button class="chItem" type="button" data-hi="${i}">${h.img ? `<img src="${esc(h.img)}" alt=""/>` : '<span class="chDot">◍</span>'}<span class="chName">${esc(h.name || h.label || h.query)}</span>${h.score != null ? `<span class="chScore">${h.score}</span>` : ''}</button>`).join('') + `</div>`;
    el('chClear').onclick = () => { store.cleanHistory = []; renderCleanHistory(); };
    box.querySelectorAll('.chItem').forEach((b) => { b.onclick = () => { const h = store.cleanHistory[+b.dataset.hi]; if (h) lookupClean(h.query, h.label || `“${h.name}”`); }; });
  }

  /* ------------------------- barcode / QR / photo scanner ------------------- */
  let scanner = null;
  function scanFormats() {
    const f = window.Html5QrcodeSupportedFormats;
    return [f.QR_CODE, f.EAN_13, f.EAN_8, f.UPC_A, f.UPC_E, f.UPC_EAN_EXTENSION, f.CODE_128, f.CODE_39, f.DATA_MATRIX];
  }
  // A scanned code can be a product barcode (digits) or a QR holding a URL/number/text.
  function onScanText(text) {
    const s = String(text || '').trim();
    if (!s) return;
    stopScan();
    const inUrl = (s.match(/(\d{8,14})/) || [])[1];      // QR/URL that embeds a GTIN
    const digits = /^\d{8,14}$/.test(s) ? s : (inUrl || s.replace(/\D/g, ''));
    if (digits && digits.length >= 8) lookupBarcode(digits);
    else { setView('clean'); lookupClean('q=' + encodeURIComponent(s), `“${s}”`); }
  }
  async function startScan() {
    el('scanModal').classList.add('open');
    el('scanStatus').textContent = t('scan_starting');
    try {
      if (!window.Html5Qrcode) await loadScript('https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js');
      scanner = new window.Html5Qrcode('reader', { formatsToSupport: scanFormats() });
      const big = (w, h) => ({ width: Math.floor(Math.min(w, h) * 0.85), height: Math.floor(Math.min(w, h) * 0.6) });
      await scanner.start({ facingMode: 'environment' }, { fps: 12, qrbox: big, aspectRatio: undefined },
        (text) => onScanText(text),
        () => {});
      el('scanStatus').textContent = t('scan_point');
    } catch (e) {
      el('scanStatus').textContent = t('scan_cam');
    }
  }
  // Read a barcode/QR from a still photo the user shoots or picks.
  async function scanFromPhoto(file) {
    if (!file) return;
    el('scanModal').classList.add('open');
    el('scanStatus').textContent = t('scan_reading');
    try {
      if (!window.Html5Qrcode) await loadScript('https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js');
      try { if (scanner) { await scanner.stop(); } } catch {}
      const fileScanner = new window.Html5Qrcode('readerFile', { formatsToSupport: scanFormats() });
      const text = await fileScanner.scanFile(file, false);
      try { await fileScanner.clear(); } catch {}
      onScanText(text);
    } catch (e) {
      el('scanStatus').textContent = t('scan_nofind');
    }
  }
  async function stopScan() {
    el('scanModal').classList.remove('open');
    try { if (scanner) { await scanner.stop(); scanner.clear(); } } catch {}
    scanner = null;
  }
  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  }

  function render() {
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === state.view));
    document.querySelectorAll('.section').forEach((s) => s.classList.toggle('active', s.dataset.view === state.view));
    el('accountBtn').textContent = state.user ? (state.user.name || state.user.email.split('@')[0]) : 'Sign in / Join';
    el('accountBtn').classList.toggle('member', isMember());
    renderDiscover(); renderClean(); renderSaved(); renderProtocols(); renderProtocolDays(); renderSupplements(); renderTeas();
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
    const q = recipeQuality(r);
    el('modalQuality').innerHTML = `<span class="qdot" style="background:${q.band.color}"></span><b style="color:${q.band.color}">Quality ${q.score}</b><span>${q.band.label} · quality of calories, not just the count</span>`;
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
    const buy = t.closest('[data-buy]'); if (buy) return buyProtocol(buy.dataset.buy);
    const dl = t.closest('[data-dl]'); if (dl) { const [f, ti] = dl.dataset.dl.split('::'); return downloadPaid(f, ti); }
    const aval = t.closest('[data-aval]'); if (aval) { assessDraft[aval.closest('[data-akey]').dataset.akey] = +aval.dataset.aval; return renderAssessment(); }
    const agoal = t.closest('[data-agoal]'); if (agoal) { const g = agoal.dataset.agoal; assessDraft.goals.has(g) ? assessDraft.goals.delete(g) : assessDraft.goals.add(g); return renderAssessment(); }
    if (t.closest('#wellStart') || t.closest('[data-assess]')) return openAssessment();
  });

  el('accountBtn').onclick = () => { if (loggedIn()) openAccount(); else openAuth(); };
  el('searchInput').oninput = (e) => { state.query = e.target.value; renderDiscover(); };
  el('cleanSearch').onclick = runCleanCheck;
  el('cleanInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') runCleanCheck(); });
  el('cleanScanBtn').onclick = startScan;
  el('scanClose').onclick = stopScan;
  el('scanPhotoBtn').onclick = () => el('scanFile').click();
  el('scanFile').onchange = (e) => { const f = e.target.files && e.target.files[0]; e.target.value = ''; scanFromPhoto(f); };
  el('scanTypeBtn').onclick = () => { stopScan(); setView('clean'); const i = el('cleanInput'); if (i) setTimeout(() => i.focus(), 50); };
  if (el('langBtn')) el('langBtn').onclick = () => { if (window.HLCi18n) window.HLCi18n.openPicker(); };
  window.addEventListener('langchange', () => { try { render(); } catch (e) {} });
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
  el('assessSave').onclick = saveAssessmentFlow;
  el('assessClose').onclick = closeAssess;
  el('payGo').onclick = payNow;
  el('payClose').onclick = closePay;
  el('payModal').onclick = (e) => { if (e.target.id === 'payModal') closePay(); };
  el('assessModal').onclick = (e) => { if (e.target.id === 'assessModal') closeAssess(); };

  function openAccount() {
    const member = isMember();
    el('accountSheet').innerHTML = `
      <div class="sheetTop"><div><div class="eyebrow">Account</div><h2>${esc(state.user.email)}</h2></div><button class="close" id="accClose">×</button></div>
      <p class="accStatus ${member ? 'on' : ''}">${member ? '✦ HLC Club member — all access' : 'Free account · not a member yet'}</p>
      ${member ? '' : '<button class="btn fill" id="accJoin">See membership</button>'}
      ${isAdmin() ? '<a class="btn fill" href="/admin.html" style="text-decoration:none">✦ Command Center (owner)</a>' : ''}
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
    fetch(API + '/api/event', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind: 'view' }) }).catch(() => {}); // pageview
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  boot();
})();
