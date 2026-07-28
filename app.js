// HLC Club — app logic. Talks to the Worker API for real auth, favorites sync, and Stripe checkout.
(() => {
  const API = /localhost|127\.0\.0\.1/.test(location.hostname)
    ? 'http://localhost:8787'
    : 'https://hlcapp-api.ambrainvestimentos.workers.dev';
  const CLUB = 'hlc-club';
  const STRIPE_PK = 'pk_live_51PCN4JDaaq6By5Hj8QD9gEGEvIFvHYeaUI1HDTCFESjx5kyg5l7wGJmv2g8GsDOoghyesiYUfWXFlYslRWBeXupr00zWQwdePI'; // public, shared US acct
  const ADMINS = new Set(['julsgarcia@gmail.com', 'juliagarciaus@gmail.com', 'ambrainvestimentos@gmail.com', 'info@healthyfoodrecipesclub.com']);
  const isAdmin = () => ADMINS.has((state.user?.email || '').toLowerCase());

  // --- Shop the ingredients (affiliate commerce) ---
  const HLC_AMAZON_TAG = 'healthyfo01ba-20';
  const HLC_INSTACART_URL = 'https://www.instacart.com/store/s?k='; // TODO: replace with real Instacart partner/affiliate deep link
  function fireEvent(kind, detail) {
    try {
      fetch(API + '/api/event', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(detail == null ? { kind } : { kind, detail }) }).catch(() => {});
    } catch (e) {}
  }
  // Turn a recipe ingredient line into buyable search terms (split multi-item lines, strip quantities/prep notes).
  function shopTerm(part) {
    let s = String(part).trim();
    s = s.replace(/\([^)]*\)/g, ' ');                                  // (crust), (70%+), (vegan)
    s = s.replace(/,[^,]*$/, '');                                       // trailing ", soaked" / ", to roll"
    s = s.replace(/\s+(to (top|roll|serve|dip|drizzle|garnish)|as needed)\b.*$/i, '');
    s = s.replace(/^[\s\d½¼¾⅓⅔⅛⅜⅝⅞~+.-]+/, '');                         // leading quantities
    s = s.replace(/^(cups?|tbsp|tbs|tsp|g|kg|oz|ml|l|shot|shots|cloves?|pinch|jar|handful|of)\b\.?\s*/i, '');
    s = s.replace(/^of\s+/i, '');
    return s.replace(/\s+/g, ' ').trim();
  }
  function shopItems(r) {
    const out = [];
    (r && r.ingredients || []).forEach((line) => {
      String(line).split('·').forEach((part) => {
        const label = part.trim(); const term = shopTerm(part);
        if (term) out.push({ label, term });
      });
    });
    return out;
  }
  function shopBlock(r) {
    const items = shopItems(r);
    if (!items.length) return '';
    const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
    const rows = items.map((it) => {
      const url = 'https://www.amazon.com/s?k=' + encodeURIComponent(it.term) + '&tag=' + encodeURIComponent(HLC_AMAZON_TAG);
      return `<li><span class="shopIng">${esc(it.label)}</span><a class="shopBuy" href="${url}" target="_blank" rel="noopener nofollow sponsored" data-shop="${esc(r.id)}"><span>Amazon</span>${arrow}</a></li>`;
    }).join('');
    const deliverUrl = HLC_INSTACART_URL + encodeURIComponent(items.map((it) => it.term).join(' '));
    const cart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h2l2 12h9l2-8H7"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="16.5" cy="19.5" r="1.3"/></svg>';
    return `
      <div class="shopHead"><h3>Shop these ingredients</h3><span class="shopDisc">Affiliate links — HLC may earn a small commission, at no cost to you.</span></div>
      <ul class="shopList">${rows}</ul>
      <a class="btn shopDeliver" href="${deliverUrl}" target="_blank" rel="noopener nofollow sponsored" data-shop="${esc(r.id)}">${cart}<span>Get it delivered · Instacart</span></a>`;
  }

  const RECIPES = window.HLC_RECIPES || [];
  // Localize a recipe for display: merge its per-language i18n over the English base
  // (translations only override text fields; id/image/level/macros/goals/daypart stay).
  function curLang() { try { return localStorage.getItem('hlc:lang') || 'en'; } catch { return 'en'; } }
  function L(r) { const lang = curLang(); if (lang === 'en' || !r || !r.i18n || !r.i18n[lang]) return r; return Object.assign({}, r, r.i18n[lang]); }
  const TEAS = [
    { title: 'Peppermint Ginger Reset', tcm: 'Warming', for: ['Bloating', 'After dinner'], ingredients: 'Fresh ginger, peppermint, lemon peel, hot water', steep: '5–7 min', why: 'Ginger and peppermint are traditionally used to ease digestive comfort; the warm ritual helps close the kitchen after dinner.' },
    { title: 'Cinnamon Cacao Calm', tcm: 'Warming', for: ['Sweet cravings', 'Evening'], ingredients: 'Cacao, cinnamon, almond milk, pinch of salt', steep: 'Warm 4 min', why: 'A sweet cup that satisfies the craving ritual — cacao polyphenols and cinnamon, no sugar spiral.' },
    { title: 'Lemon Mineral Morning', tcm: 'Neutral', for: ['Hydration', 'Before coffee'], ingredients: 'Warm water, lemon, tiny pinch sea salt', steep: 'Ready', why: 'A gentle morning cue that hydrates before caffeine and gives a soft mineral start to the day.' },
    { title: 'Fennel After-Meal', tcm: 'Warming', for: ['Bloating', 'Heaviness'], ingredients: 'Fennel seeds, hot water', steep: '8–10 min', why: 'Fennel is a classic post-meal carminative in traditional use — soothing when meals feel heavy.' },
    { title: 'Chamomile Wind-Down', tcm: 'Cooling', for: ['Sleep', 'Stress'], ingredients: 'Chamomile flowers, hot water, optional honey', steep: '5 min', why: 'A calming evening ritual traditionally used to settle the mind and ease into rest.' },
    { title: 'Turmeric Ginger Glow', tcm: 'Warming', for: ['Anti-inflammatory', 'Immunity'], ingredients: 'Turmeric, ginger, black pepper, coconut milk', steep: 'Warm 5 min', why: 'Turmeric with a pinch of black pepper and warming ginger — a comforting anti-inflammatory cup.' }
  ];
  const GOALS = ['All', 'Energy', 'Protein', 'Gut health', 'Anti-inflammatory', 'Sleep', 'Focus', 'Satiety', 'Sweet cravings'];
  const DAYPARTS = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drink', 'Dessert'];
  // Onboarding wellness assessment — baseline check-in (not a diagnosis).
  const ASSESS_Q = [
    { key: 'energy', label: 'Energy through the day', lo: 'Often drained', hi: 'Energized' },
    { key: 'sleep', label: 'Sleep quality', lo: 'Restless', hi: 'Deep & restful' },
    { key: 'focus', label: 'Focus & clarity', sub: 'The opposite of brain fog', lo: 'Foggy', hi: 'Sharp' },
    { key: 'digestion', label: 'Digestion & comfort', lo: 'Uneasy', hi: 'Comfortable' },
    { key: 'inflammation', label: 'Aches, stiffness or puffiness', sub: 'Joints, hands, face — your inflammation baseline', lo: 'Often', hi: 'Rarely' }
  ];
  const WGOALS = ['More energy', 'Less bloating', 'Less inflammation', 'Better sleep', 'Sweet cravings', 'Clearer mind'];
  const WGOAL_MAP = { 'More energy': ['Energy', 'Protein'], 'Less bloating': ['Gut health'], 'Less inflammation': ['Anti-inflammatory'], 'Better sleep': ['Sleep', 'Anti-inflammatory'], 'Sweet cravings': ['Sweet cravings'], 'Clearer mind': ['Focus', 'Protein'] };
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
    set cleanHistory(v) { localStorage.setItem('hlc:cleanhist', JSON.stringify((v || []).slice(0, 12))); },
    get week() { try { return JSON.parse(localStorage.getItem('hlc:week')) || null; } catch { return null; } },
    set week(v) { v ? localStorage.setItem('hlc:week', JSON.stringify(v)) : localStorage.removeItem('hlc:week'); },
    get streak() { try { return JSON.parse(localStorage.getItem('hlc:streak')) || { count: 0, last: null, best: 0 }; } catch { return { count: 0, last: null, best: 0 }; } },
    set streak(v) { localStorage.setItem('hlc:streak', JSON.stringify(v)); },
    get log() { try { return JSON.parse(localStorage.getItem('hlc:log')) || {}; } catch { return {}; } },
    set log(v) { localStorage.setItem('hlc:log', JSON.stringify(v)); }
  };

  const state = {
    view: 'discover',
    query: '',
    goal: 'All',
    daypart: 'All',
    week: store.week,
    weekDay: null,
    log: store.log,
    oura: null,
    user: null,
    favorites: new Set(store.localFavs),
    entitlements: new Set(),
    selected: null,
    authIntent: null,
    assessment: null,
    pendingCheckout: null,
    pendingPay: null,
    coach: { messages: [], busy: false }
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

  // Beneficial ingredients spotted by name → why they're good for the body.
  const BENEFITS = [
    [['oat', 'aveia', 'avena'], 'Oats', 'Beta-glucan fibre that lowers cholesterol and steadies blood sugar.'],
    [['almond', 'amêndoa', 'walnut', 'nut', 'noz', 'cashew', 'pistachio'], 'Nuts', 'Healthy fats, vitamin E and magnesium for heart, brain and skin.'],
    [['olive oil', 'azeite'], 'Olive oil', 'Polyphenols + monounsaturated fat — anti-inflammatory and heart-protective.'],
    [['turmeric', 'curcuma', 'cúrcuma'], 'Turmeric', 'Curcumin, one of the strongest natural anti-inflammatory compounds.'],
    [['ginger', 'gengibre'], 'Ginger', 'Gingerol — calms inflammation and soothes digestion.'],
    [['cinnamon', 'canela'], 'Cinnamon', 'May help steady blood sugar and add sweetness without sugar.'],
    [['cocoa', 'cacao', 'cacau', 'dark chocolate'], 'Cacao', 'Flavanol antioxidants that support blood flow and mood.'],
    [['blueberr', 'strawberr', 'raspberr', 'berry', 'berries', 'morango', 'frutas vermelhas', 'açaí', 'acai'], 'Berries', 'Anthocyanin antioxidants that fight inflammation and protect cells.'],
    [['green tea', 'matcha', 'chá verde'], 'Green tea', 'EGCG antioxidants that support metabolism and calm.'],
    [['chia', 'flax', 'linhaça', 'linseed'], 'Chia / flax', 'Omega-3 ALA plus fibre for the gut and heart.'],
    [['spinach', 'kale', 'espinafre', 'couve', 'greens'], 'Leafy greens', 'Folate, vitamin K and antioxidants with very few calories.'],
    [['avocado', 'abacate'], 'Avocado', 'Monounsaturated fat, potassium and fibre that keep you full.'],
    [['yogurt', 'yoghurt', 'iogurte', 'kefir'], 'Yogurt / kefir', 'Live probiotics that support a healthy gut microbiome.'],
    [['garlic', 'alho'], 'Garlic', 'Allicin — supports immunity and cardiovascular health.'],
    [['salmon', 'salmão', 'sardine', 'mackerel'], 'Oily fish', 'Omega-3 EPA/DHA — anti-inflammatory, good for heart and brain.']
  ];
  function goodItems(p) {
    const out = []; const seen = new Set();
    const push = (name, why) => { const k = name.toLowerCase(); if (seen.has(k)) return; seen.add(k); out.push({ name, why }); };
    const ing = (p.ingredients_text || '').toLowerCase();
    for (const [keys, name, why] of BENEFITS) { if (keys.some((k) => ing.includes(k))) push(name, why); }
    const n = p.nutriments || {};
    if ((n.fiber_100g ?? 0) >= 5) push('High in fibre', 'Feeds your gut bacteria and steadies blood sugar.');
    if ((n.proteins_100g ?? 0) >= 10) push('High in protein', 'Keeps you full and supports muscle.');
    if (p.nova_group && p.nova_group <= 2) push('Minimally processed', 'Close to whole food — your body recognizes it.');
    return out;
  }

  // Single-ingredient / whole-food knowledge base: benefits, nutrients, antioxidants + clean recipes.
  const WHOLE_FOODS = [
    { keys: ['strawberr', 'morango', 'fresa', 'fragole'], name: 'Strawberries', vitamins: ['Vitamin C', 'Folate (B9)', 'Vitamin K'], minerals: ['Manganese', 'Potassium'], antioxidants: ['Anthocyanins', 'Ellagic acid', 'Quercetin'], benefits: ['Vitamin C and anthocyanins fight inflammation and protect skin and cells.', 'Polyphenols help steady blood sugar after meals.', 'Heart-friendly: linked to lower LDL cholesterol and blood pressure.'], recipeIds: ['strawberry-bonbons', 'berry-cheesecake'] },
    { keys: ['blueberr', 'mirtilo', 'arándano'], name: 'Blueberries', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Manganese'], antioxidants: ['Anthocyanins', 'Pterostilbene'], benefits: ['Among the highest antioxidant fruits — protective for brain and memory.', 'Support healthy blood sugar and blood vessels.'], recipeIds: ['berry-cheesecake'] },
    { keys: ['banana', 'plátano'], name: 'Banana', vitamins: ['Vitamin B6', 'Vitamin C'], minerals: ['Potassium', 'Magnesium'], antioxidants: ['Dopamine', 'Catechins'], benefits: ['Potassium supports healthy blood pressure and muscle function.', 'Resistant starch and fibre feed gut bacteria and give steady energy.'], recipeIds: [] },
    { keys: ['avocado', 'abacate', 'aguacate'], name: 'Avocado', vitamins: ['Vitamin K', 'Folate', 'Vitamin E'], minerals: ['Potassium', 'Magnesium'], antioxidants: ['Lutein', 'Zeaxanthin'], benefits: ['Monounsaturated fat supports heart health and keeps you full.', 'Helps your body absorb fat-soluble vitamins from other foods.'], recipeIds: [] },
    { keys: ['almond', 'amêndoa', 'almendra'], name: 'Almonds', vitamins: ['Vitamin E', 'Riboflavin (B2)'], minerals: ['Magnesium', 'Manganese', 'Calcium'], antioxidants: ['Vitamin E', 'Flavonoids'], benefits: ['Vitamin E and healthy fats protect heart and skin.', 'Magnesium supports blood sugar and relaxed muscles.'], recipeIds: ['pb-fudge'] },
    { keys: ['spinach', 'espinafre', 'espinaca'], name: 'Spinach', vitamins: ['Vitamin K', 'Vitamin A', 'Folate'], minerals: ['Iron', 'Magnesium'], antioxidants: ['Lutein', 'Zeaxanthin', 'Quercetin'], benefits: ['Vitamin K and nitrates support bones, blood pressure and circulation.', 'Lutein protects the eyes; very nutrient-dense for few calories.'], recipeIds: [] },
    { keys: ['oat', 'aveia', 'avena'], name: 'Oats', vitamins: ['B1 (Thiamin)', 'B5'], minerals: ['Manganese', 'Phosphorus', 'Magnesium'], antioxidants: ['Avenanthramides'], benefits: ['Beta-glucan fibre lowers cholesterol and steadies blood sugar.', 'Avenanthramides are anti-inflammatory and soothe the gut.'], recipeIds: [] },
    { keys: ['ginger', 'gengibre', 'jengibre'], name: 'Ginger', vitamins: ['Vitamin B6'], minerals: ['Magnesium', 'Potassium'], antioxidants: ['Gingerol', 'Shogaol'], benefits: ['Gingerol eases nausea, bloating and inflammation.', 'Supports digestion and circulation.'], recipeIds: [] },
    { keys: ['turmeric', 'cúrcuma', 'curcuma'], name: 'Turmeric', vitamins: ['Vitamin B6'], minerals: ['Manganese', 'Iron'], antioxidants: ['Curcumin'], benefits: ['Curcumin is a powerful anti-inflammatory and antioxidant.', 'Best absorbed with black pepper and a little fat.'], recipeIds: [] },
    { keys: ['egg', 'ovo', 'huevo'], name: 'Eggs', vitamins: ['B12', 'Vitamin D', 'Choline'], minerals: ['Selenium', 'Iodine'], antioxidants: ['Lutein', 'Zeaxanthin'], benefits: ['Complete protein with choline for brain and metabolism.', 'Lutein and zeaxanthin protect the eyes.'], recipeIds: [] },
    { keys: ['salmon', 'salmão', 'salmón'], name: 'Salmon', vitamins: ['B12', 'Vitamin D', 'B6'], minerals: ['Selenium', 'Potassium'], antioxidants: ['Astaxanthin'], benefits: ['Omega-3 EPA/DHA are anti-inflammatory and support heart and brain.', 'Astaxanthin is a potent antioxidant for skin and cells.'], recipeIds: [] },
    { keys: ['sweet potato', 'batata doce', 'batata-doce', 'boniato'], name: 'Sweet potato', vitamins: ['Vitamin A (beta-carotene)', 'Vitamin C'], minerals: ['Potassium', 'Manganese'], antioxidants: ['Beta-carotene', 'Anthocyanins'], benefits: ['Beta-carotene supports immunity, skin and eyes.', 'Slow carbs and fibre give steady energy.'], recipeIds: [] },
    { keys: ['dark chocolate', 'chocolate amargo', 'cacao', 'cacau', 'cocoa'], name: 'Cacao / dark chocolate', vitamins: ['B2', 'B3'], minerals: ['Magnesium', 'Iron', 'Copper'], antioxidants: ['Flavanols', 'Catechins'], benefits: ['Flavanols support blood flow, blood pressure and mood.', 'Magnesium-rich — choose 70%+ with low added sugar.'], recipeIds: ['brigadeiro', 'fudge-brownie'] },
    { keys: ['greek yogurt', 'iogurte', 'yogur', 'yogurt', 'kefir'], name: 'Greek yogurt / kefir', vitamins: ['B12', 'Riboflavin'], minerals: ['Calcium', 'Phosphorus'], antioxidants: ['—'], benefits: ['Live probiotics support a healthy gut microbiome and digestion.', 'High protein keeps you full and supports muscle.'], recipeIds: ['berry-cheesecake'] },
    { keys: ['chia', 'linhaça', 'flax', 'linseed'], name: 'Chia / flax seeds', vitamins: ['B1'], minerals: ['Calcium', 'Magnesium', 'Phosphorus'], antioxidants: ['Lignans', 'Caffeic acid'], benefits: ['Omega-3 ALA and soluble fibre support gut, heart and fullness.', 'Lignans have antioxidant and hormone-balancing effects.'], recipeIds: [] },
    // — fruits —
    { keys: ['apple', 'maçã', 'manzana', 'mela'], name: 'Apple', vitamins: ['Vitamin C'], minerals: ['Potassium'], antioxidants: ['Quercetin', 'Catechins', 'Chlorogenic acid'], benefits: ['Pectin fibre feeds gut bacteria and steadies blood sugar.', 'Quercetin supports the heart and lowers inflammation.'], recipeIds: [] },
    { keys: ['orange', 'laranja', 'naranja'], name: 'Orange', vitamins: ['Vitamin C', 'Folate', 'Thiamin'], minerals: ['Potassium'], antioxidants: ['Hesperidin', 'Beta-cryptoxanthin'], benefits: ['Loaded with vitamin C for immunity and collagen.', 'Flavonoids support blood vessels and blood pressure.'], recipeIds: [] },
    { keys: ['lemon', 'limão', 'limón'], name: 'Lemon', vitamins: ['Vitamin C'], minerals: ['Potassium'], antioxidants: ['Hesperidin', 'Limonene'], benefits: ['Vitamin C and citrate support immunity and may lower kidney-stone risk.', 'Polyphenols aid digestion.'], recipeIds: ['lemon-tart'] },
    { keys: ['mango', 'manga'], name: 'Mango', vitamins: ['Vitamin C', 'Vitamin A', 'Folate'], minerals: ['Copper', 'Potassium'], antioxidants: ['Beta-carotene', 'Mangiferin'], benefits: ['Beta-carotene and vitamin C support skin, eyes and immunity.', 'Enzymes and fibre aid digestion.'], recipeIds: [] },
    { keys: ['pineapple', 'abacaxi', 'piña', 'ananas'], name: 'Pineapple', vitamins: ['Vitamin C'], minerals: ['Manganese'], antioxidants: ['Bromelain', 'Flavonoids'], benefits: ['Bromelain enzyme aids digestion and lowers inflammation.', 'Manganese supports bones and metabolism.'], recipeIds: [] },
    { keys: ['watermelon', 'melancia', 'sandía'], name: 'Watermelon', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], antioxidants: ['Lycopene', 'Citrulline'], benefits: ['Hydrating; lycopene supports heart and skin.', 'Citrulline supports blood flow.'], recipeIds: [] },
    { keys: ['grape', 'uva'], name: 'Grapes', vitamins: ['Vitamin K', 'Vitamin C'], minerals: ['Potassium'], antioxidants: ['Resveratrol', 'Anthocyanins'], benefits: ['Resveratrol supports heart and longevity pathways.', 'Polyphenols protect blood vessels.'], recipeIds: [] },
    { keys: ['kiwi'], name: 'Kiwi', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Potassium'], antioxidants: ['Lutein', 'Polyphenols'], benefits: ['Very high vitamin C for immunity.', 'Fibre and the enzyme actinidin ease digestion and sleep.'], recipeIds: [] },
    { keys: ['pomegranate', 'romã', 'granada'], name: 'Pomegranate', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Potassium'], antioxidants: ['Punicalagins', 'Anthocyanins'], benefits: ['Punicalagins are powerful antioxidants for heart and arteries.', 'Anti-inflammatory polyphenols.'], recipeIds: [] },
    { keys: ['papaya', 'mamão'], name: 'Papaya', vitamins: ['Vitamin C', 'Vitamin A', 'Folate'], minerals: ['Potassium'], antioxidants: ['Beta-carotene', 'Lycopene'], benefits: ['Papain enzyme aids digestion.', 'Carotenoids support skin and eyes.'], recipeIds: [] },
    { keys: ['raspberr', 'framboesa', 'frambuesa'], name: 'Raspberries', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Manganese'], antioxidants: ['Ellagic acid', 'Anthocyanins'], benefits: ['High fibre and ellagic acid, gentle on blood sugar.', 'Anthocyanins fight inflammation.'], recipeIds: ['berry-cheesecake'] },
    { keys: ['blackberr', 'amora', 'mora'], name: 'Blackberries', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Manganese'], antioxidants: ['Anthocyanins', 'Ellagic acid'], benefits: ['Deep antioxidants for brain and cell protection.', 'Fibre supports the gut.'], recipeIds: [] },
    { keys: ['cherry', 'cereja', 'cereza'], name: 'Cherries', vitamins: ['Vitamin C'], minerals: ['Potassium'], antioxidants: ['Anthocyanins', 'Melatonin'], benefits: ['Anthocyanins lower inflammation; natural melatonin supports sleep.'], recipeIds: [] },
    { keys: ['coconut', 'coco'], name: 'Coconut', vitamins: ['Folate'], minerals: ['Manganese', 'Copper', 'Iron'], antioxidants: ['Phenolic acids'], benefits: ['MCT fats give quick energy; fibre supports the gut.'], recipeIds: ['coconut-kisses'] },
    { keys: ['grapefruit', 'toranja', 'pomelo'], name: 'Grapefruit', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], antioxidants: ['Naringin', 'Lycopene'], benefits: ['Low-sugar citrus with antioxidants; may support metabolism. (Can interact with some medications.)'], recipeIds: [] },
    // — vegetables —
    { keys: ['broccoli', 'brócolis', 'brócoli'], name: 'Broccoli', vitamins: ['Vitamin C', 'Vitamin K', 'Folate'], minerals: ['Potassium'], antioxidants: ['Sulforaphane', 'Lutein'], benefits: ['Sulforaphane supports detox pathways and lowers inflammation.', 'Fibre and vitamin C for gut and immunity.'], recipeIds: [] },
    { keys: ['kale', 'couve'], name: 'Kale', vitamins: ['Vitamin K', 'Vitamin A', 'Vitamin C'], minerals: ['Calcium', 'Manganese'], antioxidants: ['Lutein', 'Quercetin', 'Kaempferol'], benefits: ['Extremely nutrient-dense; vitamin K for bones, lutein for eyes.'], recipeIds: [] },
    { keys: ['carrot', 'cenoura', 'zanahoria'], name: 'Carrot', vitamins: ['Vitamin A', 'Vitamin K', 'Biotin'], minerals: ['Potassium'], antioxidants: ['Beta-carotene', 'Lutein'], benefits: ['Beta-carotene supports eyes, skin and immunity.'], recipeIds: [] },
    { keys: ['tomato', 'tomate'], name: 'Tomato', vitamins: ['Vitamin C', 'Vitamin K', 'Folate'], minerals: ['Potassium'], antioxidants: ['Lycopene', 'Beta-carotene'], benefits: ['Lycopene supports heart and skin (even better absorbed cooked).'], recipeIds: [] },
    { keys: ['bell pepper', 'pimentão', 'pimiento'], name: 'Bell pepper', vitamins: ['Vitamin C', 'Vitamin A', 'B6'], minerals: ['Potassium'], antioxidants: ['Beta-carotene', 'Quercetin'], benefits: ['Exceptionally high vitamin C for immunity and collagen.'], recipeIds: [] },
    { keys: ['cucumber', 'pepino'], name: 'Cucumber', vitamins: ['Vitamin K'], minerals: ['Potassium'], antioxidants: ['Flavonoids', 'Cucurbitacins'], benefits: ['Hydrating and low-calorie; supports skin and digestion.'], recipeIds: [] },
    { keys: ['beet', 'beterraba', 'remolacha'], name: 'Beetroot', vitamins: ['Folate'], minerals: ['Manganese', 'Potassium'], antioxidants: ['Betalains', 'Nitrates'], benefits: ['Dietary nitrates support blood flow and blood pressure.', 'Betalains are anti-inflammatory.'], recipeIds: [] },
    { keys: ['cauliflower', 'couve-flor', 'coliflor'], name: 'Cauliflower', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Potassium'], antioxidants: ['Glucosinolates', 'Sulforaphane'], benefits: ['Cruciferous compounds support detox; fibre for the gut.'], recipeIds: [] },
    { keys: ['onion', 'cebola', 'cebolla'], name: 'Onion', vitamins: ['Vitamin C', 'B6'], minerals: ['Manganese'], antioxidants: ['Quercetin', 'Sulfur compounds'], benefits: ['Quercetin and prebiotics support heart and gut.'], recipeIds: [] },
    { keys: ['mushroom', 'cogumelo', 'champiñón'], name: 'Mushrooms', vitamins: ['B vitamins', 'Vitamin D'], minerals: ['Selenium', 'Copper'], antioxidants: ['Ergothioneine', 'Selenium'], benefits: ['Ergothioneine is a unique antioxidant; supports immunity.'], recipeIds: [] },
    { keys: ['pumpkin', 'abóbora', 'calabaza'], name: 'Pumpkin', vitamins: ['Vitamin A', 'Vitamin C'], minerals: ['Potassium'], antioxidants: ['Beta-carotene', 'Alpha-carotene'], benefits: ['Beta-carotene for eyes, skin and immunity.'], recipeIds: [] },
    { keys: ['asparagus', 'aspargo', 'espárrago'], name: 'Asparagus', vitamins: ['Vitamin K', 'Folate'], minerals: ['Copper'], antioxidants: ['Glutathione', 'Rutin'], benefits: ['Prebiotic fibre and folate; a gentle natural diuretic.'], recipeIds: [] },
    { keys: ['cabbage', 'repolho'], name: 'Cabbage', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Manganese'], antioxidants: ['Glucosinolates', 'Anthocyanins'], benefits: ['Cruciferous; supports digestion and detox.'], recipeIds: [] },
    { keys: ['celery', 'aipo', 'apio'], name: 'Celery', vitamins: ['Vitamin K'], minerals: ['Potassium'], antioxidants: ['Apigenin', 'Luteolin'], benefits: ['Apigenin and potassium support blood pressure; hydrating.'], recipeIds: [] },
    { keys: ['zucchini', 'abobrinha', 'calabacín'], name: 'Zucchini', vitamins: ['Vitamin C', 'B6'], minerals: ['Potassium'], antioxidants: ['Lutein', 'Zeaxanthin'], benefits: ['Light and hydrating; lutein for eyes.'], recipeIds: [] },
    // — legumes —
    { keys: ['lentil', 'lentilha', 'lenteja'], name: 'Lentils', vitamins: ['Folate', 'B1'], minerals: ['Iron', 'Magnesium', 'Zinc'], antioxidants: ['Polyphenols'], benefits: ['Plant protein + fibre steady blood sugar and feed the gut.', 'Iron and folate for energy.'], recipeIds: [] },
    { keys: ['chickpea', 'grão-de-bico', 'garbanzo'], name: 'Chickpeas', vitamins: ['Folate', 'B6'], minerals: ['Iron', 'Magnesium'], antioxidants: ['Polyphenols'], benefits: ['Protein and fibre for fullness and steady energy.'], recipeIds: [] },
    { keys: ['black bean', 'feijão', 'frijol'], name: 'Beans', vitamins: ['Folate'], minerals: ['Iron', 'Magnesium'], antioxidants: ['Anthocyanins'], benefits: ['Resistant starch and fibre feed gut bacteria; steady blood sugar.'], recipeIds: [] },
    { keys: ['edamame', 'soy', 'soja'], name: 'Edamame / soy', vitamins: ['Folate', 'Vitamin K'], minerals: ['Iron', 'Magnesium'], antioxidants: ['Isoflavones'], benefits: ['Complete plant protein; isoflavones support hormones and heart.'], recipeIds: [] },
    // — nuts & seeds —
    { keys: ['walnut', 'noz', 'nuez'], name: 'Walnuts', vitamins: ['B6'], minerals: ['Magnesium', 'Copper'], antioxidants: ['Omega-3 ALA', 'Polyphenols'], benefits: ['Plant omega-3 for brain and heart; anti-inflammatory.'], recipeIds: [] },
    { keys: ['cashew', 'castanha de caju', 'anacardo'], name: 'Cashews', vitamins: ['Vitamin K'], minerals: ['Magnesium', 'Copper', 'Zinc'], antioxidants: ['Polyphenols'], benefits: ['Magnesium and healthy fats for heart and muscles.'], recipeIds: [] },
    { keys: ['pumpkin seed', 'semente de abóbora', 'pepita'], name: 'Pumpkin seeds', vitamins: ['Vitamin E'], minerals: ['Magnesium', 'Zinc', 'Iron'], antioxidants: ['Vitamin E', 'Carotenoids'], benefits: ['Zinc and magnesium for immunity, sleep and hormones.'], recipeIds: [] },
    { keys: ['sunflower seed', 'semente de girassol', 'girasol'], name: 'Sunflower seeds', vitamins: ['Vitamin E', 'B1'], minerals: ['Magnesium', 'Selenium'], antioxidants: ['Vitamin E'], benefits: ['Vitamin E protects skin and cells.'], recipeIds: [] },
    { keys: ['sesame', 'gergelim', 'sésamo'], name: 'Sesame seeds', vitamins: ['B1'], minerals: ['Calcium', 'Iron', 'Magnesium'], antioxidants: ['Sesamin', 'Lignans'], benefits: ['Calcium and lignans support bones and hormones.'], recipeIds: [] },
    { keys: ['brazil nut', 'castanha do pará', 'nuez de brasil'], name: 'Brazil nuts', vitamins: ['Vitamin E'], minerals: ['Selenium', 'Magnesium'], antioxidants: ['Selenium'], benefits: ['One nut covers daily selenium for thyroid and antioxidant defense.'], recipeIds: [] },
    { keys: ['peanut', 'amendoim', 'maní', 'cacahuete'], name: 'Peanuts', vitamins: ['Niacin', 'Folate', 'Vitamin E'], minerals: ['Magnesium'], antioxidants: ['Resveratrol'], benefits: ['Protein and healthy fats for fullness.'], recipeIds: ['pb-fudge'] },
    { keys: ['pistachio', 'pistache'], name: 'Pistachios', vitamins: ['B6'], minerals: ['Potassium', 'Copper'], antioxidants: ['Lutein', 'Zeaxanthin'], benefits: ['Protein, fibre and eye-protective antioxidants.'], recipeIds: [] },
    // — grains —
    { keys: ['quinoa'], name: 'Quinoa', vitamins: ['Folate', 'B6'], minerals: ['Magnesium', 'Iron', 'Manganese'], antioxidants: ['Quercetin', 'Kaempferol'], benefits: ['Complete plant protein with all amino acids; naturally gluten-free.'], recipeIds: [] },
    { keys: ['brown rice', 'arroz integral'], name: 'Brown rice', vitamins: ['B1', 'B6'], minerals: ['Magnesium', 'Manganese'], antioxidants: ['Phenolic acids'], benefits: ['Whole-grain fibre for steady energy and gut health.'], recipeIds: [] },
    // — proteins —
    { keys: ['chicken', 'frango', 'pollo'], name: 'Chicken breast', vitamins: ['B6', 'B3', 'B12'], minerals: ['Selenium', 'Phosphorus'], antioxidants: ['—'], benefits: ['Lean complete protein for muscle and satiety.'], recipeIds: [] },
    { keys: ['beef', 'carne', 'res'], name: 'Beef', vitamins: ['B12', 'B6'], minerals: ['Iron', 'Zinc', 'Selenium'], antioxidants: ['—'], benefits: ['Highly absorbable iron, zinc and B12 for energy and immunity.'], recipeIds: [] },
    { keys: ['tuna', 'atum', 'atún'], name: 'Tuna', vitamins: ['B12', 'Vitamin D', 'B3'], minerals: ['Selenium', 'Iodine'], antioxidants: ['—'], benefits: ['Lean protein with omega-3 and selenium.'], recipeIds: [] },
    { keys: ['sardine', 'sardinha', 'sardina'], name: 'Sardines', vitamins: ['B12', 'Vitamin D'], minerals: ['Calcium', 'Selenium'], antioxidants: ['Omega-3 EPA/DHA'], benefits: ['Omega-3, calcium and vitamin D for heart and bones.'], recipeIds: [] },
    { keys: ['shrimp', 'camarão', 'camarón'], name: 'Shrimp', vitamins: ['B12'], minerals: ['Selenium', 'Iodine', 'Zinc'], antioxidants: ['Astaxanthin'], benefits: ['Lean protein with the antioxidant astaxanthin.'], recipeIds: [] },
    { keys: ['tofu'], name: 'Tofu', vitamins: ['Folate'], minerals: ['Calcium', 'Iron', 'Magnesium'], antioxidants: ['Isoflavones'], benefits: ['Plant protein with isoflavones; supports heart and hormones.'], recipeIds: [] },
    // — fats, spices & ferments —
    { keys: ['olive oil', 'azeite', 'aceite de oliva'], name: 'Olive oil', vitamins: ['Vitamin E', 'Vitamin K'], minerals: ['—'], antioxidants: ['Oleocanthal', 'Polyphenols'], benefits: ['Oleocanthal is anti-inflammatory like ibuprofen; heart-protective monounsaturated fat.'], recipeIds: [] },
    { keys: ['cinnamon', 'canela'], name: 'Cinnamon', vitamins: ['—'], minerals: ['Manganese'], antioxidants: ['Cinnamaldehyde', 'Polyphenols'], benefits: ['May help steady blood sugar and adds sweetness without sugar.'], recipeIds: [] },
    { keys: ['matcha', 'green tea', 'chá verde', 'té verde'], name: 'Matcha / green tea', vitamins: ['—'], minerals: ['Manganese'], antioxidants: ['EGCG', 'Catechins', 'L-theanine'], benefits: ['EGCG antioxidants with L-theanine for calm focus and metabolism.'], recipeIds: [] },
    { keys: ['black pepper', 'pimenta do reino', 'pimienta'], name: 'Black pepper', vitamins: ['—'], minerals: ['Manganese'], antioxidants: ['Piperine'], benefits: ['Piperine boosts absorption of curcumin and other nutrients.'], recipeIds: [] },
    { keys: ['kimchi'], name: 'Kimchi', vitamins: ['Vitamin K', 'Vitamin C'], minerals: ['Iron'], antioxidants: ['Probiotics'], benefits: ['Fermented probiotics support gut and immunity.'], recipeIds: [] },
    { keys: ['sauerkraut', 'chucrute'], name: 'Sauerkraut', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Iron'], antioxidants: ['Probiotics'], benefits: ['Fermented fibre and probiotics for gut health.'], recipeIds: [] },
    // — anti-inflammatory powerhouses & gaps —
    { keys: ['mackerel', 'cavala', 'caballa'], name: 'Mackerel', vitamins: ['B12', 'Vitamin D'], minerals: ['Selenium'], antioxidants: ['Omega-3 EPA/DHA'], benefits: ['One of the richest omega-3 fish — strongly anti-inflammatory for heart and brain.'], recipeIds: [] },
    { keys: ['anchovy', 'anchova', 'anchoa'], name: 'Anchovies', vitamins: ['B12', 'Niacin'], minerals: ['Selenium', 'Calcium'], antioxidants: ['Omega-3 EPA/DHA'], benefits: ['Tiny but loaded with anti-inflammatory omega-3 and minerals.'], recipeIds: [] },
    { keys: ['hemp seed', 'hemp', 'cânhamo'], name: 'Hemp seeds', vitamins: ['Vitamin E'], minerals: ['Magnesium', 'Zinc', 'Iron'], antioxidants: ['Omega-3 ALA', 'Polyphenols'], benefits: ['Balanced omega-3:6 and complete protein; anti-inflammatory and filling.'], recipeIds: [] },
    { keys: ['arugula', 'rúcula', 'rocket'], name: 'Arugula', vitamins: ['Vitamin K', 'Folate', 'Vitamin A'], minerals: ['Calcium'], antioxidants: ['Glucosinolates', 'Nitrates'], benefits: ['Cruciferous greens with nitrates for blood flow and anti-inflammatory glucosinolates.'], recipeIds: [] },
    { keys: ['chard', 'acelga'], name: 'Swiss chard', vitamins: ['Vitamin K', 'Vitamin A', 'Vitamin C'], minerals: ['Magnesium', 'Potassium'], antioxidants: ['Betalains', 'Flavonoids'], benefits: ['Betalains and magnesium support anti-inflammatory balance and blood sugar.'], recipeIds: [] },
    { keys: ['bok choy', 'pak choi'], name: 'Bok choy', vitamins: ['Vitamin C', 'Vitamin K', 'Vitamin A'], minerals: ['Calcium', 'Potassium'], antioxidants: ['Glucosinolates', 'Quercetin'], benefits: ['Cruciferous; quercetin and vitamin C calm inflammation.'], recipeIds: [] },
    { keys: ['watercress', 'agrião', 'berro'], name: 'Watercress', vitamins: ['Vitamin K', 'Vitamin C', 'Vitamin A'], minerals: ['Calcium'], antioxidants: ['Glucosinolates', 'Lutein'], benefits: ['One of the most nutrient-dense greens; anti-inflammatory glucosinolates.'], recipeIds: [] },
    { keys: ['artichoke', 'alcachofra', 'alcachofa'], name: 'Artichoke', vitamins: ['Folate', 'Vitamin C', 'Vitamin K'], minerals: ['Magnesium'], antioxidants: ['Cynarin', 'Polyphenols', 'Silymarin'], benefits: ['Among the highest-antioxidant vegetables; supports liver and digestion.'], recipeIds: [] },
    { keys: ['leek', 'alho-poró', 'puerro'], name: 'Leek', vitamins: ['Vitamin K', 'Vitamin A'], minerals: ['Manganese'], antioxidants: ['Kaempferol', 'Allicin', 'Polyphenols'], benefits: ['Allium prebiotics and kaempferol support gut and blood vessels.'], recipeIds: [] },
    { keys: ['fennel', 'erva-doce', 'funcho', 'hinojo'], name: 'Fennel', vitamins: ['Vitamin C'], minerals: ['Potassium', 'Manganese'], antioxidants: ['Anethole', 'Quercetin'], benefits: ['Anethole eases bloating and has anti-inflammatory action.'], recipeIds: [] },
    { keys: ['rosemary', 'alecrim', 'romero'], name: 'Rosemary', vitamins: ['—'], minerals: ['—'], antioxidants: ['Rosmarinic acid', 'Carnosic acid'], benefits: ['Rosmarinic acid is strongly anti-inflammatory and supports memory.'], recipeIds: [] },
    { keys: ['oregano', 'orégano', 'orégão'], name: 'Oregano', vitamins: ['Vitamin K'], minerals: ['Iron', 'Manganese'], antioxidants: ['Carvacrol', 'Thymol', 'Rosmarinic acid'], benefits: ['Carvacrol is antimicrobial and anti-inflammatory; very high antioxidant density.'], recipeIds: [] },
    { keys: ['basil', 'manjericão', 'albahaca'], name: 'Basil', vitamins: ['Vitamin K', 'Vitamin A'], minerals: ['Manganese'], antioxidants: ['Eugenol', 'Flavonoids'], benefits: ['Eugenol calms inflammation; supports digestion and mood.'], recipeIds: [] },
    { keys: ['parsley', 'salsa', 'salsinha'], name: 'Parsley', vitamins: ['Vitamin K', 'Vitamin C', 'Vitamin A'], minerals: ['Iron'], antioxidants: ['Apigenin', 'Luteolin'], benefits: ['Apigenin is anti-inflammatory; rich in vitamin K and C.'], recipeIds: [] },
    { keys: ['cilantro', 'coentro'], name: 'Cilantro', vitamins: ['Vitamin K', 'Vitamin A'], minerals: ['—'], antioxidants: ['Quercetin', 'Polyphenols'], benefits: ['Quercetin and polyphenols support detox and lower inflammation.'], recipeIds: [] },
    { keys: ['clove', 'cravo', 'clavo'], name: 'Cloves', vitamins: ['Vitamin K'], minerals: ['Manganese'], antioxidants: ['Eugenol'], benefits: ['Among the highest antioxidant spices; eugenol is potently anti-inflammatory.'], recipeIds: [] },
    { keys: ['seaweed', 'nori', 'alga', 'kelp'], name: 'Seaweed', vitamins: ['Folate', 'Vitamin K'], minerals: ['Iodine', 'Iron', 'Calcium'], antioxidants: ['Fucoxanthin', 'Polyphenols'], benefits: ['Iodine for the thyroid; fucoxanthin is anti-inflammatory.'], recipeIds: [] },
    { keys: ['miso'], name: 'Miso', vitamins: ['Vitamin K', 'B vitamins'], minerals: ['Manganese', 'Zinc'], antioxidants: ['Probiotics', 'Isoflavones'], benefits: ['Fermented probiotics plus isoflavones for gut and hormone balance.'], recipeIds: [] },
    { keys: ['cottage cheese', 'queijo cottage', 'requeijão'], name: 'Cottage cheese', vitamins: ['B12', 'Riboflavin'], minerals: ['Calcium', 'Phosphorus', 'Selenium'], antioxidants: ['—'], benefits: ['Slow casein protein keeps you full overnight; calcium for bones.'], recipeIds: [] },
    { keys: ['kombucha'], name: 'Kombucha', vitamins: ['B vitamins'], minerals: ['—'], antioxidants: ['Probiotics', 'Polyphenols'], benefits: ['Fermented tea with probiotics and tea polyphenols for the gut (watch added sugar).'], recipeIds: [] }
  ];
  function wholeFoodMatch(text) {
    const t2 = String(text || '').toLowerCase();
    if (!t2) return null;
    return WHOLE_FOODS.find((w) => w.keys.some((k) => t2.includes(k))) || null;
  }

  // Integrative lens: how each element (vitamin/mineral/antioxidant) supports the
  // endocrine, neurological and hormonal systems. Benefits of the ELEMENTS, applied to the food.
  const ELEMENT_SYSTEMS = [
    [['magnesium'], { endo: 'insulin sensitivity & blood-sugar control', neuro: 'calms the nervous system and supports sleep', horm: 'helps regulate cortisol, the stress hormone' }],
    [['vitamin d'], { endo: 'supports insulin function', neuro: 'mood and cognition', horm: 'a building block for sex hormones' }],
    [['selenium'], { endo: 'converts thyroid hormone to its active form', horm: 'thyroid balance' }],
    [['iodine'], { endo: 'raw material for thyroid hormones' }],
    [['zinc'], { endo: 'thyroid and insulin', horm: 'testosterone and fertility', neuro: 'neurotransmitter signaling' }],
    [['b6'], { neuro: 'makes serotonin, dopamine and GABA', horm: 'eases PMS by balancing estrogen and progesterone' }],
    [['b12'], { neuro: 'nerve health, focus and energy' }],
    [['folate'], { neuro: 'neurotransmitter synthesis and mood', horm: 'supports estrogen metabolism' }],
    [['omega-3', 'omega 3', 'dha', 'epa', ' ala'], { neuro: 'brain structure and mood', endo: 'insulin sensitivity and lower inflammation', horm: 'building blocks for hormones' }],
    [['choline'], { neuro: 'makes acetylcholine for memory' }],
    [['potassium'], { endo: 'blood pressure and adrenal balance' }],
    [['anthocyanin', 'flavanol', 'flavonoid', 'catechin', 'polyphenol', 'pterostilbene'], { neuro: 'more blood flow to the brain, memory', endo: 'steadier blood sugar' }],
    [['vitamin c'], { endo: 'helps lower cortisol after stress', horm: 'supports the adrenal glands' }],
    [['curcumin'], { neuro: 'raises BDNF for brain health and mood', endo: 'improves insulin sensitivity' }],
    [['vitamin e'], { neuro: 'protects brain cells', horm: 'reproductive support' }],
    [['calcium'], { neuro: 'nerve signaling', horm: 'eases PMS symptoms' }],
    [['beta-carotene', 'vitamin a'], { horm: 'thyroid and reproductive health' }],
    [['manganese'], { endo: 'blood sugar and thyroid support' }],
    [['iron'], { neuro: 'oxygen to the brain for focus', endo: 'thyroid function' }],
    [['gingerol', 'shogaol'], { endo: 'supports blood-sugar balance', neuro: 'eases nausea via the gut-brain axis' }],
    [['astaxanthin', 'lutein', 'zeaxanthin'], { neuro: 'protects brain and eyes from oxidative stress' }]
  ];
  function integrativeSystems(wf) {
    const pool = [].concat(wf.vitamins || [], wf.minerals || [], wf.antioxidants || []).join(' | ').toLowerCase();
    const b = { endo: [], neuro: [], horm: [] };
    const add = (s, v) => { if (v && b[s].indexOf(v) === -1) b[s].push(v); };
    for (const [keys, sys] of ELEMENT_SYSTEMS) {
      if (keys.some((k) => pool.includes(k))) { add('endo', sys.endo); add('neuro', sys.neuro); add('horm', sys.horm); }
    }
    const txt = (wf.benefits || []).join(' ').toLowerCase();
    if (/probiotic|kefir|yogurt|iogurte/.test(txt)) { add('neuro', 'feeds the gut-brain axis for mood'); add('horm', 'supports estrogen balance via the gut'); }
    if (/fibre|fiber|beta-glucan/.test(txt)) add('endo', 'slows sugar absorption for steadier insulin');
    return b;
  }
  // Anti-inflammatory rating from a food's compounds (scales across the whole base).
  const ANTI_INFLAM_COMPOUNDS = ['omega-3', 'omega 3', 'dha', 'epa', ' ala', 'curcumin', 'gingerol', 'shogaol', 'anthocyanin', 'polyphenol', 'flavanol', 'flavonoid', 'catechin', 'egcg', 'oleocanthal', 'sulforaphane', 'glucosinolate', 'quercetin', 'resveratrol', 'ellagic', 'punicalagin', 'lycopene', 'astaxanthin', 'betalain', 'probiotic', 'sesamin', 'lignan', 'allicin', 'l-theanine'];
  function antiInflamLevel(wf) {
    const pool = [].concat(wf.antioxidants || [], wf.benefits || []).join(' ').toLowerCase();
    const n = ANTI_INFLAM_COMPOUNDS.filter((k) => pool.includes(k)).length;
    const explicit = /anti-inflammat|inflammation|inflamm/.test(pool);
    if (n >= 2 || (explicit && n >= 1)) return 'high';
    if (n >= 1 || explicit) return 'med';
    return '';
  }
  // Foods that SUPPORT the body's own detox pathways (liver/gut/kidneys) — support, not "cure".
  const DETOX_COMPOUNDS = ['glucosinolate', 'sulforaphane', 'cynarin', 'silymarin', 'chlorophyll', 'betalain', 'allicin', 'indole', 'fucoxanthin'];
  function detoxSupport(wf) {
    const pool = [].concat(wf.antioxidants || [], wf.benefits || []).join(' ').toLowerCase();
    return /detox|liver|cleanse|kidney/.test(pool) || DETOX_COMPOUNDS.some((k) => pool.includes(k));
  }
  // Foods that support gut barrier & microbiome (the body's first line vs. pathogens) — support, not "cure".
  function gutSupport(wf) {
    const pool = [].concat(wf.antioxidants || [], wf.benefits || []).join(' ').toLowerCase();
    return /probiotic|prebiotic|fermented|microbiome|gut|beta-glucan|inulin|fibre|fiber/.test(pool);
  }
  function functionalTags(wf) {
    const out = [];
    const ai = antiInflamLevel(wf);
    if (ai === 'high') out.push(['clean', t('diet_antiinflam')]);
    else if (ai === 'med') out.push(['', t('diet_antiinflam_mild')]);
    if (detoxSupport(wf)) out.push(['', t('diet_detox')]);
    if (gutSupport(wf)) out.push(['', t('diet_gut')]);
    return out;
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
  // Inflammation load + the anti-inflammatory swap for each driver (reuses the brand's blog swaps).
  function inflammationLoad(p) {
    const n = p.nutriments || {}; const ing = (p.ingredients_text || '').toLowerCase();
    const nova = p.nova_group; const sugars = n.sugars_100g ?? n.sugars ?? 0;
    const drivers = []; let pts = 0;
    if (sugars > 22) { drivers.push({ name: `Added sugar — ${Math.round(sugars)}g/100g`, swap: 'fresh berries, or cinnamon, ginger & vanilla for sweetness without the spike' }); pts += 2; }
    else if (sugars > 10) { drivers.push({ name: `Added sugar — ${Math.round(sugars)}g/100g`, swap: 'a touch of dates or fruit instead of refined sugar' }); pts += 1; }
    if (['sunflower oil', 'soybean oil', 'canola', 'rapeseed', 'vegetable oil', 'corn oil', 'palm oil'].some((k) => ing.includes(k))) { drivers.push({ name: 'Refined seed / vegetable oils (omega-6)', swap: 'extra-virgin olive oil, avocado or coconut oil' }); pts += 2; }
    if (/high fructose|glucose syrup|corn syrup|glucose-fructose/.test(ing)) { drivers.push({ name: 'High-fructose / glucose syrup', swap: 'whole fruit, or make the HLC version below' }); pts += 1; }
    if (/hydrogenated/.test(ing)) { drivers.push({ name: 'Hydrogenated oils (trans fat)', swap: 'real butter, olive oil or a nut butter' }); pts += 2; }
    if (/nitrite|\bnitrate|bacon|sausage|salami|\bham\b/.test(ing)) { drivers.push({ name: 'Cured meat (nitrites)', swap: 'fresh fish, eggs or legumes' }); pts += 1; }
    const badAdd = harmfulItems(p).filter((h) => h.sev === 'bad').length;
    if (badAdd) { drivers.push({ name: `${badAdd} additive${badAdd > 1 ? 's' : ''} worth skipping`, swap: 'a short, real-food ingredient list' }); pts += badAdd >= 3 ? 2 : 1; }
    if (nova >= 4) { pts += 1; if (!drivers.length) drivers.push({ name: 'Ultra-processed (NOVA 4)', swap: 'a less-processed option, or make it at home' }); }
    pts -= Math.min(ANTI_INFLAM.filter((k) => ing.includes(k)).length, 2);
    const level = pts >= 3 ? 'high' : pts >= 1 ? 'moderate' : 'low';
    return { level, drivers };
  }
  function boostTips(p) {
    const ing = (p.ingredients_text || '').toLowerCase(); const n = p.nutriments || {}; const tips = [];
    if (/turmeric|cúrcuma|curcuma/.test(ing)) tips.push('Add a pinch of black pepper and a little fat — it makes turmeric’s curcumin far more absorbable.');
    if ((n.sugars_100g ?? 0) > 10) tips.push('Pair it with protein or a healthy fat (nuts, yogurt) to blunt the blood-sugar spike.');
    tips.push('Enjoy it after a meal rather than on an empty stomach for a gentler glucose curve.');
    return tips.slice(0, 2);
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
    // Adopt the server-side week plan (source of truth across devices); if the server has
    // none but this device just built one, push it up.
    if (data.week && data.week.days) { state.week = data.week; store.week = data.week; }
    else if (state.week) { pushWeekState(); }
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
    openPayReview({ plan }, { title: 'HLC Club Membership', sub: plan === 'annual' ? 'Annual — 2 months free' : 'Monthly · cancel anytime', price: plan === 'annual' ? '$69 / year' : '$9 / month', included: [`${RECIPES.length}+ recipes — breakfast to dessert, new weekly`, 'Every protocol', 'Clean Check scanner', 'Meal planning & favorites sync'] });
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

  /* ---- store-grade states: illustrated empty, error+retry, skeleton loaders ---- */
  const STATE_ICON = {
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z"/></svg>',
    box: '<svg viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"/></svg>',
    plate: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/></svg>',
    offline: '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M18.4 15.4A4 4 0 0016 8h-1.26A6 6 0 006 8.5M4.6 9.6A4 4 0 006 17h9"/></svg>'
  };
  const refreshSvg = '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 11-3-6.7L21 8M21 3.5V8h-4.5"/></svg>';
  function emptyBox(icon, title, body) {
    return `<div class="empty">${STATE_ICON[icon] || ''}<b>${esc(title)}</b>${esc(body)}</div>`;
  }
  // Error state with a retry affordance. `retryAttr` is a data-* attribute wired via delegation.
  function errorBox(title, body, retryAttr) {
    return `<div class="empty err">${STATE_ICON.offline}<b>${esc(title)}</b><span class="ebody">${esc(body)}</span>`
      + (retryAttr ? `<button class="btn ghost retry" ${retryAttr}>${refreshSvg}<span>Try again</span></button>` : '')
      + `</div>`;
  }
  // Skeleton that mirrors the real Clean Check result (scanned header → score → flags).
  function cleanSkeleton() {
    const flags = Array.from({ length: 4 }, () => `<div class="skFlag"><span class="sk skDot"></span><div style="flex:1"><div class="sk skLine" style="width:42%"></div></div><div class="sk skLine" style="width:38px;height:9px"></div></div>`).join('');
    return `<div aria-hidden="true">
      <div class="skScan"><div class="sk skThumb"></div><div style="flex:1"><div class="sk skLine" style="width:30%;height:9px"></div><div class="sk skLine" style="width:64%;margin-top:9px;height:15px"></div></div></div>
      <div class="skRow"><div class="sk skRing"></div><div style="flex:1"><div class="sk skLine" style="width:44%;height:20px;border-radius:20px"></div><div class="sk skLine" style="width:92%;margin-top:11px"></div><div class="sk skLine" style="width:74%;margin-top:7px"></div></div></div>
      <div class="sk" style="height:9px;margin:6px 0 16px;border-radius:6px"></div>
      ${flags}
    </div><span class="sr-only">Checking product…</span>`;
  }
  function plateSkeleton() {
    return `<div aria-hidden="true"><div class="skRow"><div class="sk skRing"></div><div style="flex:1"><div class="sk skLine" style="width:46%;height:20px;border-radius:20px"></div><div class="sk skLine" style="width:88%;margin-top:11px"></div></div></div>
      <div class="skPlate"><span class="sk skPill"></span><span class="sk skPill" style="width:104px"></span><span class="sk skPill" style="width:76px"></span></div></div><span class="sr-only">Reading your plate…</span>`;
  }

  function filtered() {
    const q = state.query.toLowerCase();
    return RECIPES.filter((r) => {
      const lr = L(r);
      const text = [r.title, r.desc, r.goals.join(' '), r.tags.join(' '), r.ingredients.join(' '), lr.title, lr.desc, (lr.ingredients || []).join(' ')].join(' ').toLowerCase();
      const dp = r.daypart || 'dessert';
      const matchQ = !q || text.includes(q);
      const matchG = state.goal === 'All' || r.goals.includes(state.goal);
      const matchD = state.daypart === 'All' || dp === state.daypart.toLowerCase();
      return matchQ && matchG && matchD;
    });
  }

  function macroBar(m) {
    const cells = [['kcal', m.kcal], ['protein', m.protein], ['carbs', m.carbs], ['fat', m.fat], ['fiber', m.fiber]];
    return `<div class="macros">${cells.map(([k, v], i) => `<div class="mc${i === 0 ? ' hl' : ''}"><b>${esc(v)}</b><span>${k}</span></div>`).join('')}</div>`;
  }

  function card(r) {
    r = L(r);
    const locked = r.level === 'club' && !isMember();
    return `<article class="recipe${locked ? ' locked' : ''}" data-open="${r.id}">
      <div class="thumb" data-ph="${esc((r.title[0] || 'H').toUpperCase())}"><img src="${r.image}" alt="${esc(r.title)}" loading="lazy" onerror="this.closest('.thumb').classList.add('noimg');this.remove()"/>
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
    el('daypartChips').innerHTML = DAYPARTS.map((d) => `<button class="chip ${d === state.daypart ? 'active' : ''}" data-daypart="${d}">${window.t ? window.t('dp_' + d.toLowerCase()) : d}</button>`).join('');
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
    el('recipeList').innerHTML = list.length ? list.map(card).join('') : emptyBox('search', 'Nothing here yet', 'Try another goal or search.');
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
  const assessDraft = { energy: 0, sleep: 0, focus: 0, digestion: 0, inflammation: 0, goals: new Set() };
  function openAssessment() {
    const a = state.assessment;
    assessDraft.energy = a?.energy || 0; assessDraft.sleep = a?.sleep || 0; assessDraft.focus = a?.focus || 0; assessDraft.digestion = a?.digestion || 0; assessDraft.inflammation = a?.inflammation || 0;
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
      const data = await api('/api/assessment', { method: 'POST', body: { energy: assessDraft.energy, sleep: assessDraft.sleep, focus: assessDraft.focus, digestion: assessDraft.digestion, inflammation: assessDraft.inflammation, goals: [...assessDraft.goals] } });
      applyAccount(data); closeAssess(); render(); toast('Baseline saved — your app is tuned to you.');
    } catch { toast('Could not save — try again.'); } finally { el('assessSave').disabled = false; }
  }

  function renderSaved() {
    const favs = RECIPES.filter((r) => isFav(r.id));
    el('savedList').innerHTML = favs.length ? favs.map(card).join('')
      : emptyBox('heart', 'No favorites yet', `Tap the star on any recipe and it lives here${loggedIn() ? '' : ' — sign in to sync across devices'}.`);
  }
  /* ---------------------- My Week (plan -> grocery -> scan loop) ---------------------- */
  const WEEK_DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const WEEK_SLOTS = ['breakfast', 'lunch', 'dinner', 'snack', 'drink'];
  const weekTodayIdx = () => (new Date().getDay() + 6) % 7; // Mon=0 .. Sun=6
  const wt = (k, f) => (window.t && window.t(k) !== k) ? window.t(k) : f;
  const cartSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4h2l2 12h9l2-8H7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="16.5" cy="19.5" r="1.3"/></svg>';
  const scanSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3M4 12h16" stroke-linecap="round"/></svg>';
  const swapSvg = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h12l-3-3M20 16H8l3 3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function pickForSlot(slot, count) {
    const tuned = tunedGoals();
    const pool = RECIPES.filter((r) => (r.daypart || '') === slot);
    if (!pool.length) return [];
    const scored = pool.map((r) => ({ id: r.id, s: (r.goals || []).some((g) => tuned.includes(g)) ? 1 : 0, k: Math.random() }));
    scored.sort((a, b) => (b.s - a.s) || (a.k - b.k));
    const ordered = scored.map((x) => x.id);
    const out = [];
    for (let i = 0; i < count; i++) out.push(ordered[i % ordered.length]);
    return out;
  }
  function ensureFreeTaste(days) {
    // Guarantee at least one FREE (unlockable) meal each day so guests taste real value.
    const freeBySlot = {};
    WEEK_SLOTS.forEach((s) => { freeBySlot[s] = RECIPES.filter((r) => (r.daypart || '') === s && r.level === 'free').map((r) => r.id); });
    days.forEach((day) => {
      const hasFree = WEEK_SLOTS.some((s) => { const r = RECIPES.find((x) => x.id === day[s]); return r && r.level === 'free'; });
      if (hasFree) return;
      for (const s of WEEK_SLOTS) { if (freeBySlot[s].length) { day[s] = freeBySlot[s][Math.floor(Math.random() * freeBySlot[s].length)]; break; } }
    });
    return days;
  }
  function buildWeek() {
    const picks = {}; WEEK_SLOTS.forEach((s) => { picks[s] = pickForSlot(s, 7); });
    const days = WEEK_DAYS.map((_, i) => { const day = {}; WEEK_SLOTS.forEach((s) => { day[s] = picks[s][i] || null; }); return day; });
    return { built: new Date().toISOString(), days: ensureFreeTaste(days) };
  }
  function pushWeekState() {
    if (!loggedIn() || !state.week) return;
    try { api('/api/state', { method: 'PUT', body: { week: state.week } }).catch(() => {}); } catch (e) {}
  }
  function generateWeek() {
    state.week = buildWeek(); store.week = state.week; state.weekDay = weekTodayIdx();
    fireEvent('week', 'generate'); renderWeek(); renderToday(); pushWeekState();
  }
  function swapWeekSlot(dayIdx, slot) {
    if (!state.week || !state.week.days[dayIdx]) return;
    const cur = state.week.days[dayIdx][slot];
    const others = RECIPES.filter((r) => (r.daypart || '') === slot && r.id !== cur).map((r) => r.id);
    if (!others.length) return;
    state.week.days[dayIdx][slot] = others[Math.floor(Math.random() * others.length)];
    store.week = state.week; renderWeek(); renderToday(); pushWeekState();
  }
  function weekPlanRecipes() {
    const seen = new Set(), ids = [];
    (state.week && state.week.days || []).forEach((d) => WEEK_SLOTS.forEach((s) => { if (d[s] && !seen.has(d[s])) { seen.add(d[s]); ids.push(d[s]); } }));
    return ids.map((id) => RECIPES.find((r) => r.id === id)).filter(Boolean);
  }
  const GROCERY_SKIP = /^(sea salt|salt|black pepper|pepper|salt and pepper|water|cold water|hot water|warm water|ice|ice cubes)\b/i;
  function groceryKey(term) {
    let s = term.toLowerCase().trim();
    s = s.replace(/\bto taste\b/g, '').replace(/[.,]/g, ' ');
    s = s.replace(/^(ripe|large|small|medium|fresh|frozen|organic|raw|cooked|chopped|sliced|diced|minced|ground|shredded|unsweetened|plain|extra)\s+/g, '');
    s = s.replace(/s\b/, ''); // crude singularize
    return s.replace(/\s+/g, ' ').trim();
  }
  function weekGrocery() {
    const recs = weekPlanRecipes();
    const unlocked = recs.filter((r) => !(r.level === 'club' && !isMember()));
    const map = new Map();
    unlocked.forEach((r) => shopItems(r).forEach((it) => {
      if (!it.term || GROCERY_SKIP.test(it.term) || /\bto taste\b/i.test(it.label)) return;
      const key = groceryKey(it.term); if (!key || map.has(key)) return;
      map.set(key, { term: it.term, label: it.label });
    }));
    return { items: [...map.values()], lockedCount: recs.length - unlocked.length };
  }
  function mealBtn(id, dayIdx, slot) {
    const r0 = RECIPES.find((x) => x.id === id);
    const label = wt('dp_' + slot, slot);
    if (!r0) return `<div class="wmeal"><span class="wmealSlot">${label}</span><div class="wmealCard empty">—</div></div>`;
    const r = L(r0);
    const locked = r.level === 'club' && !isMember();
    return `<div class="wmeal"><span class="wmealSlot">${label}</span>
      <button class="wmealCard${locked ? ' locked' : ''}" data-open="${r.id}">
        <img src="${r.image}" alt="" loading="lazy" onerror="this.closest('.wmealCard').classList.add('noimg');this.remove()"/>
        <span class="wmealT">${esc(r.title)}</span><em>${locked ? (lockSvg + ' Club') : (r.macros.kcal + ' kcal')}</em>
      </button>
      <button class="wmealSwap" data-wswap="${dayIdx}:${slot}" aria-label="Swap">${swapSvg}</button></div>`;
  }
  function renderWeek() {
    const card = el('weekCard'); const sc = el('weekSaved');
    if (!card) return;
    if (!state.week) {
      card.innerHTML = `<div class="weekEmpty"><div class="eyebrow">${wt('week_eyebrow', 'Your week')}</div>
        <h3 class="serif">${wt('week_empty_h', 'A week that fits your goal')}</h3>
        <p>${wt('week_empty_p', 'Auto-build a 7-day plan — breakfast, lunch and dinner tuned to you — then get it as one grocery list.')}</p>
        <button class="btn fill" data-weekgen>${wt('week_build', 'Build my week')}</button></div>`;
      if (sc) sc.innerHTML = '';
      return;
    }
    if (state.weekDay == null) state.weekDay = weekTodayIdx();
    const di = state.weekDay, day = state.week.days[di] || {};
    const strip = WEEK_DAYS.map((d, i) => `<button class="wday${i === di ? ' active' : ''}${i === weekTodayIdx() ? ' today' : ''}" data-wday="${i}">${wt('wd_' + d, d.slice(0, 3).toUpperCase())}</button>`).join('');
    const meals = WEEK_SLOTS.map((s) => mealBtn(day[s], di, s)).join('');
    const dayRecs = WEEK_SLOTS.map((s) => RECIPES.find((r) => r.id === day[s])).filter(Boolean);
    const dKcal = dayRecs.reduce((a, r) => a + (parseInt(r.macros.kcal) || 0), 0);
    const dProt = dayRecs.reduce((a, r) => a + (parseInt(r.macros.protein) || 0), 0);
    const total = dayRecs.length ? `<div class="wDayTotal"><span>${wt('week_day_total', 'Your day')}</span><b>~${dKcal} kcal · ${dProt}g ${wt('week_protein', 'protein')}</b></div>` : '';
    card.innerHTML = `<div class="weekHead"><div class="eyebrow">${wt('week_eyebrow', 'Your week')}</div><button class="wLink" data-weekgen>${swapSvg}<span>${wt('week_reroll', 'Reshuffle')}</span></button></div>
      <div class="wstrip">${strip}</div><div class="wmeals">${meals}</div>${total}
      <button class="btn em wGrocery" data-weekgrocery>${cartSvg}<span>${wt('week_grocery', 'Grocery list for the week')}</span></button>`;
    if (sc) sc.innerHTML = `<button class="weekMini" data-weekgoto><div><div class="eyebrow">${wt('week_eyebrow', 'Your week')}</div><b>${wt('week_mini', 'Your 7-day plan')}</b><span>${weekPlanRecipes().length} ${wt('week_meals', 'meals planned')}</span></div><span class="wArrow">›</span></button>`;
  }
  function openGrocery() {
    if (!state.week) return;
    const g = weekGrocery();
    const rows = g.items.map((it) => `<li><label class="gcheck"><input type="checkbox"/><span>${esc(it.label)}</span></label><a class="gBuy" href="https://www.amazon.com/s?k=${encodeURIComponent(it.term)}&tag=${encodeURIComponent(HLC_AMAZON_TAG)}" target="_blank" rel="noopener nofollow sponsored" data-shop="week">Amazon</a></li>`).join('');
    const deliver = HLC_INSTACART_URL + encodeURIComponent(g.items.map((it) => it.term).join(' '));
    const lockNote = g.lockedCount ? `<p class="gLock">${lockSvg}<span>${g.lockedCount} ${wt('week_grocery_locked', 'club meals — join the Club for their full ingredient list.')}</span></p>` : '';
    el('groceryBody').innerHTML = `<div class="sheetTop"><div><div class="eyebrow">${wt('week_eyebrow', 'Your week')}</div><h2 class="serif">${wt('week_grocery_h', 'Your grocery list')}</h2></div><button class="close" data-grocery-close aria-label="Close">×</button></div>
      <p class="gSub">${g.items.length} ${wt('week_grocery_items', 'ingredients across your plan')}</p>
      <ul class="gList">${rows || '<li class="gEmpty">' + wt('week_grocery_empty', 'Build your week to get a grocery list.') + '</li>'}</ul>${lockNote}
      <a class="btn fill" href="${deliver}" target="_blank" rel="noopener nofollow sponsored" data-shop="week">${cartSvg}<span>${wt('week_grocery_deliver', 'Get it all delivered · Instacart')}</span></a>
      <button class="btn em wScan" data-weekscan>${scanSvg}<span>${wt('week_grocery_scan', 'Scan while you shop')}</span></button>`;
    el('groceryModal').classList.add('open');
  }
  function closeGrocery() { el('groceryModal').classList.remove('open'); }

  const flameSvg = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3c1 3-1 4-2 6a4 4 0 108 0c0-2-1-3-1-5 3 2 5 5 5 9a7 7 0 11-14 0c0-3 2-6 4-10z" stroke-linejoin="round"/></svg>';
  window.__hlcPh = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a4e34"/><stop offset="1" stop-color="#0e2a1d"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/></svg>');
  const ouraSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" style="flex:none"><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="3.3"/></svg>';
  function bumpStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const s = store.streak;
    if (s.last === today) return s;
    const yest = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.count = (s.last === yest) ? (s.count || 0) + 1 : 1;
    s.last = today; s.best = Math.max(s.best || 0, s.count);
    store.streak = s; return s;
  }
  function renderStreak() {
    const pill = el('streakPill'); if (!pill) return;
    const s = store.streak;
    if (!s.count) { pill.innerHTML = ''; return; }
    const best = s.best > s.count ? ` · ${wt('streak_best', 'best')} ${s.best}` : '';
    pill.innerHTML = `<span class="streakChip">${flameSvg}<b>${s.count}</b><span>${wt('streak_days', 'day streak')}${best}</span></span>`;
  }

  /* ------------------------- Today check-in (accountability) ------------------------- */
  const checkSvg = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const last7 = () => { const o = []; for (let i = 6; i >= 0; i--) o.push(new Date(Date.now() - i * 864e5).toISOString().slice(0, 10)); return o; };
  const dayLogged = (d) => { const l = state.log[d]; return !!(l && (l.energy || l.water || (l.meals && Object.values(l.meals).some(Boolean)))); };
  function setLog(patch) { const k = todayKey(); state.log[k] = Object.assign({}, state.log[k], patch); store.log = state.log; }
  function weightTrend() {
    const days = Object.keys(state.log).filter((d) => state.log[d] && state.log[d].weight != null).sort();
    const k = todayKey(); const todayW = (state.log[k] || {}).weight;
    if (todayW == null) return null;
    const prior = days.filter((d) => d < k).pop();
    if (!prior) return null;
    const d = todayW - state.log[prior].weight;
    if (Math.abs(d) < 0.1) return { dir: 'flat', delta: '0' };
    return { dir: d < 0 ? 'down' : 'up', delta: Math.abs(d).toFixed(1) };
  }
  function renderToday() {
    const card = el('todayCard'); if (!card) return;
    const k = todayKey(); const log = state.log[k] || {};
    const day = (state.week && state.week.days) ? state.week.days[weekTodayIdx()] : null;
    const meals = day ? WEEK_SLOTS.filter((s) => day[s]) : [];
    const mealRow = meals.length
      ? meals.map((s) => { const on = log.meals && log.meals[s]; return `<button class="tChip${on ? ' on' : ''}" data-tmeal="${s}">${checkSvg}<span>${wt('dp_' + s, s)}</span></button>`; }).join('')
      : `<button class="tBuild" data-weekgen>${wt('today_noplan', 'Build your week to check off meals')}</button>`;
    const energies = [['low', wt('energy_low', 'Low')], ['ok', wt('energy_ok', 'OK')], ['great', wt('energy_great', 'Great')]];
    const eRow = energies.map(([v, l]) => `<button class="tEnergy${log.energy === v ? ' on' : ''}" data-tenergy="${v}">${esc(l)}</button>`).join('');
    const water = log.water || 0;
    const trend = weightTrend();
    const strip = last7().map((d) => `<span class="tDot${dayLogged(d) ? ' on' : ''}${d === k ? ' today' : ''}"></span>`).join('');
    const doneCount = last7().filter(dayLogged).length;
    card.innerHTML = `<div class="todayHead"><div class="eyebrow">${wt('today_h', 'Today')}</div><span class="todayCount">${doneCount}/7 ${wt('today_days', 'days logged')}</span></div>
      <div class="tStrip">${strip}</div>
      <div class="tRow"><span class="tLabel">${wt('today_meals', 'Meals')}</span><div class="tChips">${mealRow}</div></div>
      <div class="tRow"><span class="tLabel">${wt('today_energy', 'Energy')}</span><div class="tChips">${eRow}</div></div>
      <div class="tRow"><span class="tLabel">${wt('today_water', 'Water')}</span><div class="tWater"><button data-twater="-1" aria-label="less">−</button><b>${water} ${wt('today_cups', 'cups')}</b><button data-twater="1" aria-label="more">+</button></div></div>
      <div class="tRow"><span class="tLabel">${wt('today_weight', 'Weight')}</span><div class="tWeight"><input type="number" inputmode="decimal" id="tWeightIn" value="${log.weight != null ? log.weight : ''}" placeholder="—"/><span class="tUnit">${wt('today_wunit', 'lb')}</span>${trend ? `<span class="tTrend ${trend.dir}">${trend.dir === 'down' ? '▾' : trend.dir === 'up' ? '▴' : '•'} ${trend.delta}</span>` : ''}</div></div>`;
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
  /* ------------------------------- AI Coach -------------------------------- */
  // The flagship companion. Talks to the LIVE worker POST /api/coach (auth required):
  //   body {messages:[{role,content}]} -> {ok, reply, suggest:[keyword,...max 3]}.
  // We map each `suggest` keyword to a REAL in-app recipe/tea so the reply is actionable.
  const FREE_COACH_PER_DAY = 5;   // signed-in, non-member
  const FREE_COACH_GUEST = 2;     // a taste before creating an account (value before the wall)
  const coachLimit = () => (loggedIn() ? FREE_COACH_PER_DAY : FREE_COACH_GUEST);
  const coachKey = () => 'hlc:coachfree:' + new Date().toISOString().slice(0, 10);
  const coachFreeUsed = () => +(localStorage.getItem(coachKey()) || 0);
  const coachFreeLeft = () => Math.max(0, coachLimit() - coachFreeUsed());
  const bumpCoachFree = () => localStorage.setItem(coachKey(), coachFreeUsed() + 1);
  const COACH_CHIPS = ['Why am I bloated?', 'Dairy-free dessert', 'More energy', 'What should I eat today?', 'Sweet cravings', 'Better sleep'];
  // Classify a message into a NON-PII topic keyword for the anonymous intelligence signal.
  const COACH_TOPICS = [
    [/bloat|gas|distend/, 'bloating'], [/energy|tired|fatigue|crash|sluggish|afternoon/, 'energy'],
    [/sleep|insomnia|rest|wind.?down/, 'sleep'], [/crav|sweet|sugar|dessert|chocolate/, 'cravings'],
    [/gut|digest|stomach|ibs|constipat|reflux/, 'digestion'], [/inflam|joint|pain|stiff|ache|puffy/, 'inflammation'],
    [/weight|fat loss|slim|glp|satiety|appetite/, 'weight'], [/dairy|lactose/, 'dairy-free'],
    [/hormon|pms|cycle|menopaus|pcos|estrogen/, 'hormones'], [/stress|anxi|mood|calm|cortisol/, 'stress'],
    [/skin|acne|hair|nail/, 'skin'], [/breakfast|lunch|dinner|snack|meal|recipe|cook|eat today/, 'meal-ideas']
  ];
  function coachTopic(text) {
    const s = String(text || '').toLowerCase();
    for (const [re, cat] of COACH_TOPICS) if (re.test(s)) return cat;
    return 'general';
  }
  const teaSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 10h11a3 3 0 010 6h-1M5 10v5a4 4 0 004 4h2a4 4 0 004-4M8 4v2M11 4v2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // Map a coach suggestion keyword -> a real recipe or tea already in the app (always resolves).
  // Proactive Coach: read the user's recent check-in log + streak and open with a
  // personalized, functional-nutrition insight (educational tone, never medical).
  function coachInsight() {
    // Oura sleep (freshest, most relevant) takes priority when connected.
    if (state.oura && state.oura.sleep && typeof state.oura.sleep.score === 'number' && state.oura.sleep.score < 70) {
      const pool = RECIPES.filter((r) => r.daypart === 'breakfast' && (r.goals || []).includes('Energy'));
      return { msg: wt('coach_ins_sleep', 'Your Oura sleep score was on the lower side last night. Go gentle and steady today — a protein-forward breakfast helps blunt the afternoon crash.'), suggest: pool.slice(0, 3).map((r) => r.id) };
    }
    const logs = last7().slice(-3).map((d) => state.log[d]).filter(Boolean);
    const todayLog = state.log[todayKey()] || {};
    const lowE = logs.filter((l) => l.energy === 'low').length;
    if (lowE >= 2) {
      let pool = RECIPES.filter((r) => r.daypart === 'breakfast' && ((r.goals || []).includes('Energy') || (r.goals || []).includes('Protein')));
      if (pool.length < 2) pool = RECIPES.filter((r) => (r.daypart || '') !== 'dessert' && (r.goals || []).includes('Protein'));
      return { msg: wt('coach_ins_energy', "I noticed a couple of low-energy days. Anchoring your morning with protein and steadier carbs tends to help — here are a couple from your kitchen."), suggest: pool.slice(0, 3).map((r) => r.id) };
    }
    if (logs.length && (todayLog.water || 0) < 3) {
      return { msg: wt('coach_ins_water', "Gentle nudge — you're a little under on water today. A glass now can ease cravings and the afternoon dip."), suggest: [] };
    }
    const s = store.streak;
    if (s.count >= 3) return { msg: `${s.count} ${wt('coach_ins_streak', 'days logged in a row — lovely consistency. Want ideas to keep it feeling fresh?')}`, suggest: [] };
    return null;
  }
  function coachSuggestMatch(kw) {
    const k = String(kw || '').toLowerCase().trim(); if (!k) return null;
    const byId = RECIPES.find((r) => r.id === k); if (byId) return { type: 'recipe', r: byId };
    const words = k.split(/\s+/).filter((w) => w.length > 3);
    const isTea = /\btea\b|infusion|chamomile|peppermint|fennel|steep|brew|ritual/.test(k);
    const teaMatch = () => TEAS.find((te) => {
      const hay = (te.title + ' ' + te.for.join(' ') + ' ' + te.ingredients + ' ' + te.why).toLowerCase();
      return te.title.toLowerCase().split(/\s+/).some((w) => w.length > 3 && k.includes(w)) || words.some((w) => hay.includes(w));
    });
    const recMatch = () => {
      const meta = (r) => [r.title, r.goals.join(' '), r.tags.join(' ')].join(' ').toLowerCase();
      return RECIPES.find((r) => meta(r).includes(k)) || RECIPES.find((r) => words.some((w) => meta(r).includes(w)))
        || RECIPES.find((r) => words.some((w) => r.ingredients.join(' ').toLowerCase().includes(w)));
    };
    if (isTea) { const te = teaMatch(); if (te) return { type: 'tea', tea: te }; const r = recMatch(); if (r) return { type: 'recipe', r }; }
    else { const r = recMatch(); if (r) return { type: 'recipe', r }; const te = teaMatch(); if (te) return { type: 'tea', tea: te }; }
    return { type: 'recipe', r: cleanAlt(k) }; // graceful fallback — always a real recipe
  }
  function coachSugsHtml(suggest) {
    if (!Array.isArray(suggest) || !suggest.length) return '';
    const seen = new Set(); const cards = [];
    for (const kw of suggest.slice(0, 5)) {
      const m = coachSuggestMatch(kw); if (!m) continue;
      const id = m.type + ':' + (m.type === 'recipe' ? m.r.id : m.tea.title);
      if (seen.has(id)) continue; seen.add(id);
      if (m.type === 'recipe') {
        const r = L(m.r);
        cards.push(`<button class="coachSug" data-open="${esc(r.id)}"><img class="csThumb" src="${esc(r.image)}" alt="" loading="lazy" onerror="this.onerror=null;this.src=window.__hlcPh"/><span class="csInfo"><b>${esc(r.title)}</b><span>Recipe · ${esc(r.macros.kcal)} kcal</span></span><span class="csGo">→</span></button>`);
      } else {
        const te = m.tea;
        cards.push(`<button class="coachSug" data-coachtea="1"><span class="csIcon">${teaSvg}</span><span class="csInfo"><b>${esc(te.title)}</b><span>Tea ritual · ${esc(te.for.slice(0, 2).join(' · '))}</span></span><span class="csGo">→</span></button>`);
      }
    }
    return cards.length ? `<div class="coachSugHint">From your HLC kitchen</div>${cards.join('')}` : '';
  }
  const coachAvatar = '<span class="coachAv" aria-hidden="true"></span>';
  function coachMsgHtml(m) {
    if (m.role === 'user') return `<div class="cmWrap user"><div class="cmsg user">${esc(m.content)}</div></div>`;
    return `<div class="cmWrap coach"><div class="coachWho">${coachAvatar}<span><b>HLC Coach</b><small>Functional nutrition · educational</small></span></div><div class="cmsg coach">${esc(m.content)}</div>${coachSugsHtml(m.suggest)}</div>`;
  }
  function renderCoach() {
    const gate = el('coachGate'); const app = el('coachApp'); if (!gate || !app) return;
    // Guests taste the Coach right here (composer visible) — the wall only appears once the
    // free taste is spent, and it invites sign-in rather than hiding the conversation.
    gate.style.display = 'none';
    app.style.display = 'flex';
    const c = state.coach;
    const member = isMember();
    const guest = !loggedIn();
    const blocked = !member && coachFreeLeft() <= 0;

    // 1) Thread
    const thread = el('coachThread');
    const ins = c.messages.length ? null : coachInsight();
    let html = c.messages.length
      ? c.messages.map(coachMsgHtml).join('')
      : ins
        ? `<div class="coachEmpty"><span class="coachAv"></span><h3>${wt('coach_ins_h', 'A note from your Coach')}</h3><p>${esc(ins.msg)}</p></div>${coachSugsHtml(ins.suggest)}`
        : `<div class="coachEmpty"><span class="coachAv"></span><h3>Hi, I'm your HLC Coach</h3><p>Tell me how you've been feeling or what you're craving — I'll point you to something nourishing to make right now.</p></div>`;
    if (c.busy) html += `<div class="cmWrap coach"><div class="coachWho">${coachAvatar}<span><b>HLC Coach</b><small>Thinking…</small></span></div><div class="cmsg coach"><span class="ctyping"><i></i><i></i><i></i></span></div></div>`;
    if (blocked) html += guest
      ? `<div class="paywall" style="margin-top:14px"><div class="eyebrow">${esc(t('coach_eyebrow'))}</div><h3>${esc(t('coach_wall_h'))}</h3><p>${esc(t('coach_wall_p'))}</p><button class="btn fill" data-coachsignin="1">${esc(t('coach_wall_cta'))}</button></div>`
      : `<div class="paywall" style="margin-top:14px"><div class="eyebrow">${esc(t('rec_members_h'))}</div><h3>You've used today's free Coach chats</h3><p>Club members chat with the Coach without limits — plus every protocol, unlimited scans and saved history.</p><button class="btn fill" data-tab="protocols">${esc(t('clean_unlock'))}</button></div>`;
    thread.innerHTML = html;

    // 2) Quick-start chips — only on a fresh, open thread
    const chips = el('coachChips');
    chips.innerHTML = (!c.messages.length && !c.busy && !blocked)
      ? COACH_CHIPS.map((q) => `<button class="coachChip" data-coachask="${esc(q)}">${esc(q)}</button>`).join('')
      : '';

    // 3) Quota line (members unlimited; guests see it's free, no account needed)
    const quota = el('coachQuota');
    if (member || blocked) quota.textContent = '';
    else { const left = coachFreeLeft(); quota.textContent = left > 0 ? `${left} free Coach chat${left === 1 ? '' : 's'} left today${guest ? ' · no account needed' : ''}` : ''; }

    // 4) Composer state
    const input = el('coachInput'); const send = el('coachSend');
    if (input) { input.disabled = blocked; input.placeholder = blocked ? (guest ? t('coach_ph_guest_blocked') : 'Join HLC Club to keep chatting…') : t('coach_ph'); }
    if (send) send.disabled = blocked || c.busy;
  }
  function coachAutoGrow(elm) { if (!elm) return; elm.style.height = 'auto'; elm.style.height = Math.min(elm.scrollHeight, 120) + 'px'; }
  function coachScrollEnd() {
    if (state.view !== 'coach') return;
    const th = el('coachThread'); const last = th && th.lastElementChild;
    if (last) last.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  const MEAL_TODAY_RE = /\b(eat today|today.*(eat|meal|menu|plan)|what.*(eat|cook|meal)|meal plan|my plan|plano( de)? hoje|hoje.*(com(er|o)|refei)|o que.*com(er|o)|cardápio|card[aá]pio)\b/i;
  function coachAnswerToday() {
    // Local, instant, free: answer "what should I eat today" from the user's OWN plan.
    const c = state.coach;
    if (state.week && state.week.days) {
      const day = state.week.days[weekTodayIdx()] || {};
      const meals = WEEK_SLOTS.map((s) => RECIPES.find((r) => r.id === day[s])).filter(Boolean);
      if (meals.length) {
        const line = meals.map((r) => { const v = L(r); return `${wt('dp_' + v.daypart, v.daypart)} — ${v.title}`; }).join('; ');
        c.messages.push({ role: 'assistant', content: `${wt('coach_today_intro', "Here's your plan for today")}: ${line}. ${wt('coach_today_tap', 'Tap one to open it, or reshuffle from Discover.')}`, suggest: meals.map((r) => r.id) });
        return true;
      }
    }
    c.messages.push({ role: 'assistant', content: wt('coach_today_none', 'You don\'t have a week plan yet — tap "Build my week" on Discover and I\'ll tailor breakfast, lunch and dinner to your goals.'), suggest: [] });
    return true;
  }
  async function sendCoach(raw) {
    const text = String(raw || '').trim().slice(0, 600);
    const c = state.coach;
    if (!text || c.busy) return;
    if (MEAL_TODAY_RE.test(text)) { // answer from the user's plan — no LLM, no quota
      c.messages.push({ role: 'user', content: text });
      const inp = el('coachInput'); if (inp) { inp.value = ''; coachAutoGrow(inp); }
      logSignal('coach', 'meal-ideas'); coachAnswerToday();
      renderCoach(); coachScrollEnd(); return;
    }
    if (!isMember() && coachFreeLeft() <= 0) return renderCoach(); // warm wall (guest taste spent, or non-member out of free)
    c.messages.push({ role: 'user', content: text });
    logSignal('coach', coachTopic(text)); // anonymous, non-PII topic
    if (!isMember()) bumpCoachFree();
    const input = el('coachInput'); if (input) { input.value = ''; coachAutoGrow(input); }
    c.busy = true; renderCoach(); coachScrollEnd();
    try {
      const payload = c.messages.map((m) => ({ role: m.role, content: m.content }));
      const data = await api('/api/coach', { method: 'POST', body: { messages: payload } });
      c.messages.push({ role: 'assistant', content: data.reply || "I'm here — tell me a little more and I'll point you to something nourishing.", suggest: Array.isArray(data.suggest) ? data.suggest : [] });
    } catch (e) {
      const err = e && e.data && e.data.error;
      if (e.status === 429 || err === 'guest_limit') { try { localStorage.setItem(coachKey(), String(coachLimit())); } catch (_) {} }
      const msg = e.status === 401 ? 'Please sign in again to keep chatting with your Coach.'
        : (e.status === 429 || err === 'guest_limit') ? t('coach_wall_p')
          : (e.status === 503 || err === 'coach_unavailable') ? 'Your Coach is resting for a moment — please try again shortly.'
            : "I couldn't reach the kitchen just now. Try that again in a moment.";
      c.messages.push({ role: 'assistant', content: msg, suggest: [] });
    } finally {
      c.busy = false; renderCoach(); coachScrollEnd();
    }
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
  // Clean Check = the free acquisition hook (Open Food Facts = $0). Non-members get
  // a small daily allowance; the wall lands on DEPTH, not on first touch.
  const FREE_CLEAN_PER_DAY = 3;
  const cleanKey = () => 'hlc:cleanfree:' + new Date().toISOString().slice(0, 10);
  const cleanFreeUsed = () => +(localStorage.getItem(cleanKey()) || 0);
  const cleanFreeLeft = () => Math.max(0, FREE_CLEAN_PER_DAY - cleanFreeUsed());
  const bumpCleanFree = () => localStorage.setItem(cleanKey(), cleanFreeUsed() + 1);
  function quotaText() {
    const left = cleanFreeLeft();
    return left > 0 ? `${left} free scan${left === 1 ? '' : 's'} left today` : 'Last free scan today · members go unlimited';
  }
  function renderClean() {
    const member = isMember();
    const blocked = !member && cleanFreeLeft() <= 0;
    el('cleanGate').style.display = blocked ? 'block' : 'none';
    el('cleanTool').style.display = blocked ? 'none' : 'block';
    if (blocked) {
      el('cleanGate').innerHTML = `<div class="paywall"><div class="eyebrow">${esc(t('rec_members_h'))}</div><h3>You've used today's free scans</h3><p>Members scan unlimited — plus full plate macros, saved history and cleaner swaps.</p><button class="btn fill" data-tab="protocols">${esc(t('clean_unlock'))}</button></div>`;
      return;
    }
    renderCleanHistory();
    if (!member) {
      let line = el('cleanQuotaLine');
      if (!line) { el('cleanTool').insertAdjacentHTML('afterbegin', '<div id="cleanQuotaLine" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);font-weight:600;margin:0 0 12px"></div>'); line = el('cleanQuotaLine'); }
      line.textContent = quotaText();
    } else {
      const line = el('cleanQuotaLine'); if (line) line.remove();
    }
  }
  function runCleanCheck() {
    const q = el('cleanInput').value.trim();
    if (q) lookupClean('q=' + encodeURIComponent(q), `“${q}”`, q);
  }
  function lookupBarcode(code) {
    setView('clean');
    lookupClean('barcode=' + encodeURIComponent(code), `barcode ${code}`);
  }
  async function lookupClean(query, label, term) {
    state._lastClean = { query, label, term }; // remembered for the error-state retry
    el('cleanResult').innerHTML = cleanSkeleton();
    try {
      const data = await api('/api/clean?' + query);
      if (!isMember()) { bumpCleanFree(); const l = el('cleanQuotaLine'); if (l) l.textContent = quotaText(); }
      // Name search → a candidate LIST to pick from (never a blind top-1 like "almox grillburger").
      if (data.results) {
        if (!data.results.length) {
          const wf0 = wholeFoodMatch(term || '');
          if (wf0) { logSignal('scan', wf0.name); renderWholeFood(wf0); addCleanHistory({ query, label, name: wf0.name, brand: '', img: '', score: 92 }); return; }
          el('cleanResult').innerHTML = emptyBox('box', t('clean_nomatch_h'), t('clean_nomatch_p')); return;
        }
        renderCleanPicker(data.results, data.corrected);
        return;
      }
      const p = data.product;
      const wf = wholeFoodMatch(term || (p && p.product_name) || '');
      if (!p || !p.product_name) {
        if (wf) { logSignal('scan', wf.name); renderWholeFood(wf); addCleanHistory({ query, label, name: wf.name, brand: '', img: '', score: 92 }); return; }
        el('cleanResult').innerHTML = emptyBox('box', t('clean_nomatch_h'), t('clean_nomatch_p')); return;
      }
      logSignal('scan', scanDetail(p, wf)); // anonymous: a food category / brand, never a person
      renderCleanResult(p, data.alternatives || [], wf);
      addCleanHistory({ query, label, name: p.product_name, brand: p.brands || '', img: p.image_small_url || '', score: cleanScore(p).score });
    } catch (e) {
      el('cleanResult').innerHTML = errorBox('Could not reach the food database', 'Check your connection and try again.', 'data-clean-retry');
    }
  }
  // A tap-to-choose list for name searches — the user picks the exact product, then we run
  // the full Clean Check on its barcode. Fixes the old "blind top-1 = wrong product" bug.
  function renderCleanPicker(results, corrected) {
    const rows = results.map((r) => `<button class="arow" data-pickcode="${esc(r.code)}" data-pickname="${esc(r.product_name)}"><div class="apic">${r.image_small_url ? `<img src="${esc(r.image_small_url)}" alt="" loading="lazy"/>` : ''}</div><div class="ainfo"><h3>${esc(r.product_name)}</h3><div class="amini">${esc(r.brands || '')}</div></div><span class="ago">→</span></button>`).join('');
    const note = corrected ? `<p style="font-size:12.5px;color:var(--mut);margin:2px 2px 12px">${esc(t('clean_showing_for'))} <b style="color:var(--cream)">${esc(corrected)}</b></p>` : '';
    el('cleanResult').innerHTML = `<div class="sec-h">${esc(t('clean_pick'))}</div>${note}${rows}`;
  }
  // Reduce a scanned product to an ANONYMOUS aggregate signal: a whole-food name, else the
  // most-specific canonical category slug, else the brand. Never a person or a barcode.
  function scanDetail(p, wf) {
    if (wf && wf.name) return wf.name;
    const canon = (p.categories_tags || []).filter((tg) => /^en:[a-z0-9-]+$/.test(tg));
    if (canon.length) return canon[canon.length - 1].replace(/^en:/, '').replace(/-/g, ' ');
    const brand = Array.isArray(p.brands) ? p.brands[0] : String(p.brands || '').split(',')[0];
    return (brand || '').trim() || null;
  }
  function recipeRow(r) {
    r = L(r);
    return `<button class="arow" data-open="${r.id}"><div class="apic"><img src="${r.image}" alt=""/></div><div class="ainfo"><h3>${esc(r.title)}</h3><div class="amini">${esc(r.tags.slice(0, 2).join(' · '))}</div></div><span class="ago">→</span></button>`;
  }
  function systemsHtml(wf) {
    const b = integrativeSystems(wf);
    const rows = [];
    if (b.endo.length) rows.push(['endo', t('sys_endo'), b.endo.slice(0, 3).join('; ')]);
    if (b.neuro.length) rows.push(['neuro', t('sys_neuro'), b.neuro.slice(0, 3).join('; ')]);
    if (b.horm.length) rows.push(['horm', t('sys_horm'), b.horm.slice(0, 3).join('; ')]);
    if (!rows.length) return '';
    return `<div class="sec-h">${esc(t('clean_integrative'))}</div><div class="sysList">${rows.map((r) => `<div class="sysRow"><span class="sysIco ${r[0]}">${esc(r[1])}</span><p>${esc(r[2])}</p></div>`).join('')}</div>`;
  }
  function wholeFoodHtml(wf) {
    const recs = (wf.recipeIds || []).map((id) => RECIPES.find((r) => r.id === id)).filter(Boolean);
    const tags = functionalTags(wf);
    const tagsHtml = tags.length ? `<div class="diet">${tags.map(([c, l]) => `<span class="dchip ${c}">${esc(l)}</span>`).join('')}</div>` : '';
    return `<div class="sec-h">${esc(wf.name)}</div><p class="leadp">${esc(t('wf_benefits'))}</p>
      ${tagsHtml}
      <ul class="wfben">${wf.benefits.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <div class="src">${esc(t('wf_funcnote'))}</div>
      <div class="wfgrid">
        <div class="wfcol"><h5>${esc(t('wf_vitamins'))}</h5><p>${esc(wf.vitamins.join(', '))}</p></div>
        <div class="wfcol"><h5>${esc(t('wf_minerals'))}</h5><p>${esc(wf.minerals.join(', '))}</p></div>
        <div class="wfcol"><h5>${esc(t('wf_antiox'))}</h5><p>${esc(wf.antioxidants.join(', '))}</p></div>
      </div>
      ${systemsHtml(wf)}
      ${recs.length ? `<div class="sec-h">${esc(t('wf_recipes'))}</div>${recs.map(recipeRow).join('')}` : ''}`;
  }
  function goodHtml(p) {
    const g = goodItems(p);
    if (!g.length) return '';
    return `<div class="sec-h">${esc(t('clean_good_why'))}</div>${g.map((x) => `<div class="harm good"><div class="ht"><div class="htop"><b>${esc(x.name)}</b></div><small>${esc(x.why)}</small></div></div>`).join('')}`;
  }
  function renderWholeFood(wf) {
    el('cleanResult').innerHTML = `
      <div class="scanned"><div class="sthumb">◍</div><div class="st"><div class="sbr">${esc(t('wf_whole'))}</div><div class="snm">${esc(wf.name)}</div></div></div>
      <div class="diet"><span class="dchip clean">${esc(t('diet_clean'))}</span></div>
      ${wholeFoodHtml(wf)}
      <div class="cwhy"><div class="src">Data & nutrition · educational, not medical advice.</div></div>`;
  }
  function renderCleanResult(p, alternatives = [], wf = null) {
    const q2 = cleanScore(p);
    const alt = cleanAlt(p.product_name); const altL = L(alt);
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
    const swapsHtml = `<div class="sec-h">${esc(t('clean_swaps'))}</div><p class="leadp">${esc(t('clean_swaps_lead'))}</p>${brandRows}<button class="arow" data-open="${alt.id}"><div class="apic"><img src="${alt.image}" alt=""/></div><div class="ainfo"><h3>${esc(t('clean_make_home'))} · ${esc(altL.title)}</h3><div class="amini"><b style="color:${altQ.band.color}">Quality ${altQ.score}</b> · whole-food · ${esc(altL.tags.slice(0, 2).join(' · '))}</div></div><span class="ago">→</span></button>${brandRows ? `<div class="src">Cleaner options in the same category · Open Food Facts.</div>` : ''}`;
    const detailRows = [];
    if (diet.allergens.length) detailRows.push(`<div class="orow bad"><span>${esc(t('clean_contains'))}</span><b>${esc(diet.allergens.join(', '))}</b></div>`);
    if (diet.traces.length) detailRows.push(`<div class="orow warn"><span>${esc(t('clean_traces'))}</span><b>${esc(diet.traces.join(', '))}</b></div>`);
    if (orig.origins.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_origin'))}</span><b>${esc(orig.origins.join(', '))}</b></div>`);
    if (orig.made.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_made'))}</span><b>${esc(orig.made.join(', '))}</b></div>`);
    if (!orig.origins.length && !orig.made.length) detailRows.push(`<div class="orow"><span>${esc(t('clean_origin'))}</span><b class="mut">${esc(t('clean_origin_no'))}</b></div>`);
    const detailsHtml = `<div class="sec-h">${esc(t('clean_good_to_know'))}</div><div class="origin">${detailRows.join('')}</div>`;
    // Inflammation load + per-driver anti-inflammatory swap (features 1/2/6).
    const inf = inflammationLoad(p);
    const infColor = inf.level === 'high' ? '#e2675f' : inf.level === 'moderate' ? '#d9a441' : '#4caf6a';
    const inflammationHtml = `<div class="sec-h">${esc(t('clean_inflammation'))}</div>
      <div class="inflRow"><span class="inflBadge" style="background:${infColor}">${esc(t('infl_' + inf.level))}</span><p class="leadp" style="margin:0">${esc(t('clean_inflammation_lead'))}</p></div>
      ${inf.drivers.map((d) => `<div class="harm warn"><div class="ht"><div class="htop"><b>${esc(d.name)}</b></div><small>↪ ${esc(t('clean_swap_to'))} ${esc(d.swap)}</small></div></div>`).join('')}`;
    // Make it work harder (feature 4).
    const tips = boostTips(p);
    const tipsHtml = tips.length ? `<div class="sec-h">${esc(t('clean_boost'))}</div>${tips.map((x) => `<div class="tipRow"><span class="tipDot">✦</span><p>${esc(x)}</p></div>`).join('')}` : '';
    // Anti-Inflammatory Foundation cross-sell when the load isn't low (feature 5).
    const protoCta = inf.level !== 'low' ? `<button class="arow ctaProto" data-tab="protocols"><div class="apic"><img src="/assets/covers/cover-protocol-anti-inflammatory.png" alt=""/></div><div class="ainfo"><h3>${esc(t('clean_proto_cta'))}</h3><div class="amini">${esc(t('clean_proto_sub'))}</div></div><span class="ago">→</span></button>` : '';
    el('cleanResult').innerHTML = `
      <div class="scanned"><div class="sthumb">${p.image_small_url ? `<img src="${p.image_small_url}" alt=""/>` : '◍'}</div><div class="st"><div class="sbr">${esc(p.brands || 'Product')}</div><div class="snm">${esc(p.product_name)}</div></div></div>
      <div class="scoreRow">${ringHtml(q2.score, q2.band.color)}<div class="slab"><span class="sbadge" style="background:${q2.band.color}">${q2.band.label}</span><p class="summary">${esc(summary)}</p></div></div>
      ${dietHtml}
      <div class="qbalance"><div class="qb-lbls"><span>${esc(t('clean_calq'))}</span><span>${q2.antiPct}${esc(t('clean_anti'))}</span></div><div class="qb-track"><i style="width:${q2.antiPct}%"></i></div></div>
      <div class="sec-h">${esc(t('clean_at_glance'))}</div>
      ${q2.flags.map((f) => `<div class="flag ${f.k}"><span class="fdot"></span><div class="ft">${esc(f.t)}<small>${esc(f.s)}</small></div><span class="fv">${esc(f.v)}</span></div>`).join('')}
      ${goodHtml(p)}
      ${wf ? wholeFoodHtml(wf) : ''}
      ${inflammationHtml}
      ${harmHtml}
      ${tipsHtml}
      ${swapsHtml}
      ${protoCta}
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
    box.querySelectorAll('.chItem').forEach((b) => { b.onclick = () => { const h = store.cleanHistory[+b.dataset.hi]; if (h) lookupClean(h.query, h.label || `“${h.name}”`, h.name); }; });
  }

  // ---- Rate my plate (anti-inflammatory plate score) ----
  const INFLAM_FOODS = [
    [['soda', 'soft drink', 'refrigerante', 'refresco', 'coke', 'cola'], 'Soda'],
    [['candy', 'sweets', 'doce', 'dulce', 'gummy', 'lollipop'], 'Candy'],
    [['fried', 'fritura', 'frito', 'fries', 'batata frita'], 'Fried food'],
    [['white bread', 'pão branco', 'pan blanco', 'white rice', 'arroz branco'], 'Refined carbs'],
    [['processed meat', 'bacon', 'sausage', 'salsicha', 'embutido', 'ham', 'presunto', 'salami', 'hot dog'], 'Processed meat'],
    [['chips', 'crisps', 'salgadinho', 'doritos'], 'Chips'],
    [['fast food', 'burger', 'hambúrguer', 'pizza', 'nugget'], 'Fast food'],
    [['alcohol', 'beer', 'wine', 'álcool', 'cerveja', 'vinho', 'drink'], 'Alcohol'],
    [['ice cream', 'sorvete', 'helado'], 'Ice cream'],
    [['pastry', 'cake', 'bolo', 'doughnut', 'donut', 'cookie', 'biscoito'], 'Pastry / cake'],
    [['margarine', 'margarina', 'vegetable oil', 'óleo de soja', 'seed oil'], 'Refined oils'],
    [['energy drink', 'energético'], 'Energy drink']
  ];
  let plate = [];
  function classifyPlateFood(name) {
    const wf = wholeFoodMatch(name);
    if (wf) { const ai = antiInflamLevel(wf); const w = ai === 'high' ? 2 : ai === 'med' ? 1 : (detoxSupport(wf) || gutSupport(wf)) ? 1 : 0; return { name: wf.name, w, kind: w >= 1 ? 'good' : 'neutral' }; }
    const tl = name.toLowerCase();
    for (const [keys, label] of INFLAM_FOODS) { if (keys.some((k) => tl.includes(k))) return { name: label, w: -2, kind: 'inflam' }; }
    return { name: name.replace(/\b\w/g, (c) => c.toUpperCase()), w: 0, kind: 'neutral' };
  }
  function addPlateFood(name) {
    name = String(name || '').trim(); if (!name) return;
    const it = classifyPlateFood(name);
    if (plate.some((x) => x.name.toLowerCase() === it.name.toLowerCase())) return;
    plate.push(it); renderPlate();
  }
  function renderPlate() {
    const sugg = el('plateSugg'); const items = el('plateItems'); const res = el('plateResult');
    if (!items) return;
    const SUGG = ['Salmon', 'Blueberries', 'Spinach', 'Turmeric', 'Olive oil', 'Walnuts', 'Avocado', 'Green tea'];
    sugg.innerHTML = `<div class="plateSuggRow">${SUGG.filter((s) => !plate.some((p) => p.name.toLowerCase() === s.toLowerCase())).slice(0, 6).map((s) => `<button class="suggChip" type="button" data-add="${esc(s)}">+ ${esc(s)}</button>`).join('')}</div>`;
    sugg.querySelectorAll('[data-add]').forEach((b) => { b.onclick = () => addPlateFood(b.dataset.add); });
    items.innerHTML = plate.length ? `<div class="plateChips">${plate.map((it, i) => `<span class="plateChip ${it.kind}">${esc(it.name)}<button type="button" data-rm="${i}" aria-label="remove">×</button></span>`).join('')}</div>` : '';
    items.querySelectorAll('[data-rm]').forEach((b) => { b.onclick = () => { plate.splice(+b.dataset.rm, 1); renderPlate(); }; });
    if (!plate.length) { res.innerHTML = ''; plateNutrition = null; return; }
    const sum = plate.reduce((a, x) => a + x.w, 0);
    const score = clamp(Math.round(50 + sum * 9), 5, 99);
    const bnd = band(score);
    const good = plate.filter((x) => x.kind === 'good');
    const bad = plate.filter((x) => x.kind === 'inflam');
    const tip = bad.length ? t('plate_tip_swap') : good.length >= 3 ? t('plate_tip_great') : t('plate_tip_add');
    const nu = plateNutrition;
    const calHtml = (nu && nu.kcal) ? `<div class="calCard"><div class="calBig"><b>${nu.kcal}</b><span>${esc(t('plate_kcal'))}</span></div><div class="macros"><span><b>${nu.protein}g</b>${esc(t('mac_protein'))}</span><span><b>${nu.carbs}g</b>${esc(t('mac_carbs'))}</span><span><b>${nu.fat}g</b>${esc(t('mac_fat'))}</span></div><div class="src">${esc(t('plate_est_note'))}</div></div>` : '';
    res.innerHTML = `
      ${calHtml}
      <div class="scoreRow">${ringHtml(score, bnd.color)}<div class="slab"><span class="sbadge" style="background:${bnd.color}">${esc(bnd.label)}</span><p class="summary">${esc(t('plate_summary'))}</p></div></div>
      ${good.length ? `<div class="sec-h">${esc(t('plate_lifting'))}</div><div class="diet">${good.map((x) => `<span class="dchip clean">${esc(x.name)}</span>`).join('')}</div>` : ''}
      ${bad.length ? `<div class="sec-h">${esc(t('plate_weighing'))}</div><div class="diet">${bad.map((x) => `<span class="dchip" style="color:#f0b8b3;background:rgba(226,103,95,.14);border-color:rgba(226,103,95,.4)">${esc(x.name)}</span>`).join('')}</div>` : ''}
      <div class="tipRow"><span class="tipDot">✦</span><p>${esc(tip)}</p></div>
      ${score < 70 ? `<button class="arow ctaProto" data-tab="protocols"><div class="apic"><img src="/assets/covers/cover-protocol-anti-inflammatory.png" alt=""/></div><div class="ainfo"><h3>${esc(t('clean_proto_cta'))}</h3><div class="amini">${esc(t('clean_proto_sub'))}</div></div><span class="ago">→</span></button>` : ''}`;
  }
  // Scan a whole plate. Primary: server vision (foods + portion + calories/macros, Workers AI).
  // Fallback: on-device SigLIP multi-label (foods only, no calories) so it always works.
  let plateNutrition = null;
  async function scanPlate(file) {
    if (!file) return;
    const note = el('plateNote'); if (note) note.textContent = t('scan_identify');
    const pr = el('plateResult'); const showedSkel = !!pr && !plate.length; // skeleton only when nothing's on the plate yet
    if (showedSkel) pr.innerHTML = plateSkeleton();
    try {
      const res = await fetch(API + '/api/plate-vision', { method: 'POST', headers: store.token ? { authorization: `Bearer ${store.token}`, 'content-type': 'application/octet-stream' } : { 'content-type': 'application/octet-stream' }, body: file });
      if (res.ok) {
        const data = await res.json();
        const items = (data.items || []).filter((x) => x.name);
        if (items.length) {
          plateNutrition = items.reduce((a, x) => ({ kcal: a.kcal + (x.kcal || 0), protein: a.protein + (x.protein || 0), carbs: a.carbs + (x.carbs || 0), fat: a.fat + (x.fat || 0) }), { kcal: 0, protein: 0, carbs: 0, fat: 0 });
          items.forEach((x) => addPlateFood(x.name));
          if (note) note.textContent = t('plate_found').replace('{n}', items.length);
          return;
        }
      }
      await scanPlateLocal(file, note);
    } catch (e) {
      try { await scanPlateLocal(file, note); } catch (e2) { if (note) note.textContent = t('scan_noid'); }
    } finally {
      if (showedSkel && !plate.length && pr) pr.innerHTML = ''; // nothing recognized → drop the skeleton
    }
  }
  async function scanPlateLocal(file, note) {
    let url = '';
    try {
      if (!tfLib) tfLib = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2');
      tfLib.env.allowLocalModels = false;
      if (!foodClf) foodClf = await tfLib.pipeline('zero-shot-image-classification', 'Xenova/siglip-base-patch16-224');
      url = URL.createObjectURL(file);
      const labels = WHOLE_FOODS.map((w) => 'a photo of ' + w.name.toLowerCase()).concat(['a packaged or processed food product', 'a plain background', 'a person', 'a document or text']);
      const out = await foodClf(url, labels);
      const foods = out.filter((o) => { const i = labels.indexOf(o.label); return i > -1 && i < WHOLE_FOODS.length; });
      let picked = foods.filter((o) => o.score >= 0.10).slice(0, 6);
      if (!picked.length && foods[0] && foods[0].score >= 0.06) picked = [foods[0]];
      if (!picked.length) { if (note) note.textContent = t('plate_noid'); return; }
      picked.forEach((o) => addPlateFood(WHOLE_FOODS[labels.indexOf(o.label)].name));
      if (note) note.textContent = t('plate_found').replace('{n}', picked.length);
    } catch (e) { if (note) note.textContent = t('scan_noid'); }
    finally { if (url) URL.revokeObjectURL(url); }
  }
  function setCleanMode(mode) {
    const prod = mode !== 'plate';
    el('ccProduct').style.display = prod ? 'block' : 'none';
    el('ccPlate').style.display = prod ? 'none' : 'block';
    el('ccTabProduct').classList.toggle('active', prod);
    el('ccTabPlate').classList.toggle('active', !prod);
    if (!prod) renderPlate();
  }

  /* ------------------------- barcode / QR / photo scanner ------------------- */
  let scanner = null;
  // Load the scanner lib from our OWN origin first (instant, SW-precached, works on flaky
  // store wifi / offline); fall back to the CDN only if the vendored copy is ever missing.
  async function ensureScanner() {
    if (window.Html5Qrcode) return;
    try { await loadScript('/vendor/html5-qrcode.min.js'); }
    catch (e) { await loadScript('https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'); }
  }
  // Prefer the phone's NATIVE BarcodeDetector (Android/Chrome) — far more reliable on real 1D
  // grocery barcodes than the JS decoder; html5-qrcode falls back to the JS decoder otherwise.
  const scanConfig = () => ({ formatsToSupport: scanFormats(), experimentalFeatures: { useBarCodeDetectorIfSupported: true }, verbose: false });
  let scanNudgeT = null;
  // Route to the most reliable capture per device: Android/Chrome has a great NATIVE live
  // detector → live scan; iOS Safari has none (JS decoder misses real 1D barcodes) → go
  // straight to a sharp native-camera PHOTO and decode that still (much higher hit-rate).
  function startBarcodeCapture() {
    if ('BarcodeDetector' in window) return startScan();
    const f = el('scanFile'); if (f) f.click(); else startScan();
  }
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
      await ensureScanner();
      scanner = new window.Html5Qrcode('reader', scanConfig());
      // Scan box scaled to the actual viewfinder so it fills the screen proportionally
      // (a wide band for barcodes, tall enough for QR) instead of a small landscape strip.
      const big = (w, h) => ({ width: Math.round(w * 0.82), height: Math.round(h * (h >= w ? 0.5 : 0.62)) });
      await scanner.start({ facingMode: 'environment' }, { fps: 12, qrbox: big, aspectRatio: undefined },
        (text) => onScanText(text),
        () => {});
      el('scanStatus').textContent = t('scan_point');
      // If a live scan hasn't landed in a few seconds, point to the more reliable photo path.
      clearTimeout(scanNudgeT);
      scanNudgeT = setTimeout(() => { const s = el('scanStatus'); if (s && el('scanModal').classList.contains('open')) s.textContent = t('scan_hint_photo'); }, 9000);
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
      await ensureScanner();
      try { if (scanner) { await scanner.stop(); } } catch {}
      const fileScanner = new window.Html5Qrcode('readerFile', scanConfig());
      const text = await fileScanner.scanFile(file, false);
      try { await fileScanner.clear(); } catch {}
      onScanText(text);
    } catch (e) {
      // No barcode read → guide the user. We do NOT load the heavy on-device model here:
      // on iPhone it froze while downloading. A sharp, filled-frame retry or the name
      // search (which now returns a pick-list) are the reliable paths.
      el('scanStatus').textContent = t('scan_nofind');
    }
  }
  // On-device SigLIP (transformers.js) — kept ONLY as the offline fallback for "Rate my
  // plate" (scanPlateLocal). Deliberately NOT used for product scanning: on iPhone it froze
  // while downloading the model, so the product path guides to retry / name-search instead.
  let foodClf = null, tfLib = null;
  async function stopScan() {
    clearTimeout(scanNudgeT);
    el('scanModal').classList.remove('open');
    try { if (scanner) { await scanner.stop(); scanner.clear(); } } catch {}
    scanner = null;
  }
  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  }

  // Staggered card entrance plays only on an explicit view switch (see setView),
  // never on the many in-place re-renders (fav toggle, goal filter, sync) — so the
  // list stays calm. render() clears the flag; setView re-arms it after painting.
  function triggerReveal() {
    const sec = document.querySelector('.section.active');
    if (!sec || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    sec.classList.remove('reveal');
    void sec.offsetWidth; // reflow so the animation restarts cleanly
    sec.classList.add('reveal');
  }

  function render() {
    document.querySelectorAll('.section.reveal').forEach((s) => s.classList.remove('reveal'));
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === state.view));
    document.querySelectorAll('.section').forEach((s) => s.classList.toggle('active', s.dataset.view === state.view));
    el('accountBtn').textContent = state.user ? (state.user.name || state.user.email.split('@')[0]) : (window.t ? window.t('signin') : 'Sign in');
    el('accountBtn').classList.toggle('member', isMember());
    renderStreak(); renderToday(); renderDiscover(); renderWeek(); renderClean(); renderSaved(); renderProtocols(); renderProtocolDays(); renderSupplements(); renderTeas(); renderCoach();
  }

  function parseSwap(s) {
    const parts = String(s).split(/→|->/);
    const left = (parts[0] || '').trim();
    const right = (parts.slice(1).join('→') || '').trim();
    return { left, right: right || left };
  }
  function renderIngredients(r, applied) {
    const swaps = (r.swaps || []).map(parseSwap);
    el('modalIngredients').innerHTML = r.ingredients.map((ing) => {
      let hit = null;
      applied.forEach((idx) => {
        const sw = swaps[idx]; if (!sw || !sw.right) return;
        const key = (sw.left.split(/[^a-zA-Z]+/).filter(Boolean)[0] || '').toLowerCase();
        if (key && ing.toLowerCase().includes(key)) hit = sw;
      });
      const body = hit ? `<s>${esc(ing)}</s> <em class="swapNew">→ ${esc(hit.right)}</em>` : esc(ing);
      return `<li>${body}</li>`;
    }).join('');
  }
  function renderSwaps(r) {
    const swaps = (r.swaps || []).map(parseSwap);
    const applied = state._swapsApplied || new Set();
    el('modalSwaps').innerHTML = swaps.map((sw, i) => sw.right && sw.right !== sw.left
      ? `<button class="swapBtn ${applied.has(i) ? 'on' : ''}" data-swap="${i}"><span class="sfrom">${esc(sw.left)}</span><i>→</i><span class="sto">${esc(sw.right)}</span></button>`
      : `<div class="swapBtn" style="cursor:default"><span class="sto">${esc(sw.left)}</span></div>`
    ).join('');
  }

  function openRecipe(id) {
    const base = RECIPES.find((x) => x.id === id); if (!base) return;
    const r = L(base);
    state.selected = r;
    logSignal('recipe', r.id); // anonymous: which recipe drew interest

    const locked = r.level === 'club' && !isMember();
    const mi = el('modalImg'); mi.src = r.image; mi.alt = r.title;
    mi.onerror = () => {
      mi.onerror = null;
      const ch = esc((r.title[0] || 'H').toUpperCase());
      mi.src = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a4e34"/><stop offset="1" stop-color="#0e2a1d"/></linearGradient></defs><rect width="640" height="400" fill="url(#g)"/><text x="320" y="238" font-family="Georgia,serif" font-size="150" fill="#d8b46a" fill-opacity="0.85" text-anchor="middle">${ch}</text></svg>`);
    };
    const dpLabel = r.daypart && window.t ? window.t('dp_' + r.daypart) : (r.daypart ? r.daypart[0].toUpperCase() + r.daypart.slice(1) : '');
    el('modalTag').textContent = [dpLabel, r.goals[0], `makes ${r.makes}`].filter(Boolean).join(' · ');
    el('modalTitle').textContent = r.title;
    el('modalDesc').textContent = r.desc;
    el('modalTags').innerHTML = r.tags.map((t) => `<span>${esc(t)}</span>`).join('');
    el('modalMacros').innerHTML = macroBar(r.macros);
    const q = recipeQuality(base);
    el('modalQuality').innerHTML = `<span class="qdot" style="background:${q.band.color}"></span><b style="color:${q.band.color}">Quality ${q.score}</b><span>${q.band.label} · quality of calories, not just the count</span>`;
    el('modalWhy').textContent = r.why;
    if (locked) {
      el('modalLocked').style.display = 'block';
      el('modalDetail').style.display = 'none';
    } else {
      el('modalLocked').style.display = 'none';
      el('modalDetail').style.display = 'block';
      state._swapsApplied = new Set();
      renderIngredients(r, state._swapsApplied);
      const sw = el('modalStepsWrap');
      if (Array.isArray(r.steps) && r.steps.length) { el('modalSteps').innerHTML = r.steps.map((x) => `<li>${esc(x)}</li>`).join(''); sw.style.display = 'block'; }
      else sw.style.display = 'none';
      el('modalShop').innerHTML = shopBlock(base);
      renderSwaps(r);
    }
    el('modalFav').textContent = isFav(r.id) ? 'Remove favorite' : 'Save favorite';
    el('recipeModal').classList.add('open');
  }
  function closeModal() { el('recipeModal').classList.remove('open'); }

  /* --------------------------------- events -------------------------------- */
  function setView(v) { state.view = v; window.scrollTo({ top: 0, behavior: 'smooth' }); render(); triggerReveal(); }

  document.addEventListener('click', (e) => {
    const t = e.target;
    const shopLink = t.closest('[data-shop]'); if (shopLink) fireEvent('shop', shopLink.dataset.shop); // affiliate intent; let the link open normally
    if (t.closest('[data-clean-retry]')) { const c = state._lastClean; if (c) lookupClean(c.query, c.label, c.term); return; }
    const pickEl = t.closest('[data-pickcode]'); if (pickEl) return lookupClean('barcode=' + encodeURIComponent(pickEl.dataset.pickcode), pickEl.dataset.pickname || '', pickEl.dataset.pickname || '');
    const cAsk = t.closest('[data-coachask]'); if (cAsk) return sendCoach(cAsk.dataset.coachask);
    const cTea = t.closest('[data-coachtea]'); if (cTea) { setView('protocols'); setTimeout(() => { const tl = el('teaList'); if (tl) tl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 140); return; }
    const cSignin = t.closest('[data-coachsignin]'); if (cSignin) return openAuth('coach');
    const oDot = t.closest('[data-onbdot]'); if (oDot) return onbGo(+oDot.dataset.onbdot);
    const oGo = t.closest('[data-onbgo]'); if (oGo) { const v = oGo.dataset.onbgo; closeOnb(true); if (v === 'auth') return openAuth('onboard'); return setView(v); }
    const tab = t.closest('[data-tab]'); if (tab) return setView(tab.dataset.tab);
    const goal = t.closest('[data-goal]'); if (goal) { state.goal = goal.dataset.goal; return renderDiscover(); }
    const dpc = t.closest('[data-daypart]'); if (dpc) { state.daypart = dpc.dataset.daypart; return renderDiscover(); }
    const swBtn = t.closest('[data-swap]'); if (swBtn) { const i = +swBtn.dataset.swap; const s = state._swapsApplied || (state._swapsApplied = new Set()); s.has(i) ? s.delete(i) : s.add(i); const r = state.selected; if (r) { renderIngredients(r, s); renderSwaps(r); } return; }
    const fav = t.closest('[data-fav]'); if (fav) { e.stopPropagation(); return toggleFav(fav.dataset.fav); }
    if (t.closest('[data-oura-connect]')) { (async () => { try { const r = await api('/api/oura/connect'); if (r && r.url) location.href = r.url; else toast(wt('oura_soon', 'Oura connect is not available yet.')); } catch (e) { toast(wt('oura_err', "Couldn't start Oura connect.")); } })(); return; }
    if (t.closest('[data-oura-disconnect]')) { (async () => { try { await api('/api/oura', { method: 'DELETE' }); state.oura = null; renderWearables(); toast(wt('oura_off', 'Oura disconnected.')); } catch (e) {} })(); return; }
    const tMeal = t.closest('[data-tmeal]'); if (tMeal) { const s = tMeal.dataset.tmeal; const cur = (state.log[todayKey()] || {}).meals || {}; setLog({ meals: Object.assign({}, cur, { [s]: !cur[s] }) }); return renderToday(); }
    const tEn = t.closest('[data-tenergy]'); if (tEn) { setLog({ energy: tEn.dataset.tenergy }); return renderToday(); }
    const tW = t.closest('[data-twater]'); if (tW) { const w = (state.log[todayKey()] || {}).water || 0; setLog({ water: Math.max(0, Math.min(20, w + (+tW.dataset.twater))) }); return renderToday(); }
    if (t.closest('[data-weekgen]')) return generateWeek();
    const wday = t.closest('[data-wday]'); if (wday) { state.weekDay = +wday.dataset.wday; return renderWeek(); }
    const wsw = t.closest('[data-wswap]'); if (wsw) { const [di, sl] = wsw.dataset.wswap.split(':'); return swapWeekSlot(+di, sl); }
    if (t.closest('[data-weekgrocery]')) return openGrocery();
    if (t.closest('[data-grocery-close]')) return closeGrocery();
    if (t.closest('[data-weekscan]')) { closeGrocery(); return setView('clean'); }
    if (t.closest('[data-weekgoto]')) { setView('discover'); setTimeout(() => { const w = el('weekCard'); if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 140); return; }
    const open = t.closest('[data-open]'); if (open) return openRecipe(open.dataset.open);
    const plan = t.closest('[data-plan]'); if (plan) return joinClub(plan.dataset.plan);
    const buy = t.closest('[data-buy]'); if (buy) return buyProtocol(buy.dataset.buy);
    const dl = t.closest('[data-dl]'); if (dl) { const [f, ti] = dl.dataset.dl.split('::'); return downloadPaid(f, ti); }
    const aval = t.closest('[data-aval]'); if (aval) { assessDraft[aval.closest('[data-akey]').dataset.akey] = +aval.dataset.aval; return renderAssessment(); }
    const agoal = t.closest('[data-agoal]'); if (agoal) { const g = agoal.dataset.agoal; assessDraft.goals.has(g) ? assessDraft.goals.delete(g) : assessDraft.goals.add(g); return renderAssessment(); }
    if (t.closest('#wellStart') || t.closest('[data-assess]')) return openAssessment();
  });

  el('accountBtn').onclick = () => { if (loggedIn()) openAccount(); else openAuth(); };
  let searchSignalT;
  document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'tWeightIn') { const v = parseFloat(e.target.value); setLog({ weight: isNaN(v) ? undefined : v }); renderToday(); }
  });
  el('searchInput').oninput = (e) => {
    state.query = e.target.value; renderDiscover();
    // Debounced so we log the settled term (a topic), not every keystroke. Anonymous, no PII.
    clearTimeout(searchSignalT);
    const term = e.target.value.trim().toLowerCase();
    if (term.length >= 3) searchSignalT = setTimeout(() => logSignal('search', term), 900);
  };
  el('cleanSearch').onclick = runCleanCheck;
  el('cleanInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') runCleanCheck(); });
  el('cleanScanBtn').onclick = startBarcodeCapture;
  el('ccTabProduct').onclick = () => setCleanMode('product');
  el('ccTabPlate').onclick = () => setCleanMode('plate');
  el('plateInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') { addPlateFood(e.target.value); e.target.value = ''; } });
  el('platePhotoBtn').onclick = () => el('plateFile').click();
  el('plateFile').onchange = (e) => { const f = e.target.files && e.target.files[0]; e.target.value = ''; scanPlate(f); };
  el('scanClose').onclick = stopScan;
  el('scanPhotoBtn').onclick = () => el('scanFile').click();
  el('scanFile').onchange = (e) => { const f = e.target.files && e.target.files[0]; e.target.value = ''; scanFromPhoto(f); };
  el('scanTypeBtn').onclick = () => { stopScan(); setView('clean'); const i = el('cleanInput'); if (i) setTimeout(() => i.focus(), 50); };
  if (el('coachSend')) el('coachSend').onclick = () => sendCoach(el('coachInput').value);
  if (el('coachInput')) {
    const ci = el('coachInput');
    ci.addEventListener('input', () => coachAutoGrow(ci));
    ci.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendCoach(ci.value); } });
  }
  if (el('langBtn')) el('langBtn').onclick = () => { if (window.HLCi18n) window.HLCi18n.openPicker(); };
  window.addEventListener('langchange', () => { try { render(); maybeOnboard(); } catch (e) {} });
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
      <div id="accWearables"></div>
      <button class="btn em" id="accHowto">${window.t('howto')}</button>
      <button class="btn ghost" id="accOut">Sign out</button>
      <button class="accDelete" id="accDelete">Delete my account & data</button>`;
    el('accountModal').classList.add('open');
    el('accClose').onclick = () => el('accountModal').classList.remove('open');
    if (el('accJoin')) el('accJoin').onclick = () => { el('accountModal').classList.remove('open'); setView('protocols'); };
    if (el('accHowto')) el('accHowto').onclick = () => { el('accountModal').classList.remove('open'); openOnb(true); };
    el('accOut').onclick = () => { el('accountModal').classList.remove('open'); signOut(); };
    el('accDelete').onclick = deleteMyAccount;
    renderWearables();
  }
  async function renderWearables() {
    const box = el('accWearables'); if (!box) return;
    let st; try { st = await api('/api/oura/status'); } catch (e) { box.innerHTML = ''; return; }
    if (!st || !st.configured) { box.innerHTML = ''; return; } // hidden until Oura app is registered
    box.innerHTML = st.connected
      ? `<div class="wearRow on"><span>${ouraSvg}<b>${wt('oura_connected', 'Oura Ring connected')}</b></span><button class="wearBtn" data-oura-disconnect>${wt('oura_disconnect', 'Disconnect')}</button></div>`
      : `<button class="btn em wearConnect" data-oura-connect>${ouraSvg}<span>${wt('oura_connect', 'Connect your Oura Ring')}</span></button>`;
  }
  async function deleteMyAccount() {
    if (!loggedIn()) return;
    if (!confirm('Permanently delete your account and all your data (favorites, wellness check-in, membership)? This cannot be undone.')) return;
    try {
      await api('/api/account', { method: 'DELETE' });
      el('accountModal').classList.remove('open');
      try { localStorage.removeItem('hlc:favorites'); localStorage.removeItem('hlc:cleanhist'); } catch {}
      signOut();
      toast('Your account and data have been deleted.');
    } catch (e) {
      toast('Could not delete right now — try again, or email info@healthyfoodrecipesclub.com.');
    }
  }
  el('accountModal').onclick = (e) => { if (e.target.id === 'accountModal') el('accountModal').classList.remove('open'); };

  /* ----------------------------- first-run tutorial ------------------------ */
  // A skippable, replayable walkthrough of every superpower (Scan · Coach · Recipes ·
  // Rituals) ending in a clear "start free" choice. Shows once, after a language is
  // chosen; replay from Account. Uses window.t so it follows the chosen language.
  const ONB_KEY = 'hlc:onboarded';
  const tr = (k) => (window.t ? window.t(k) : k);
  const ONB_SCAN = '<svg class="onbIcon" viewBox="0 0 24 24"><path d="M4 7V5a1 1 0 011-1h2M17 4h2a1 1 0 011 1v2M20 17v2a1 1 0 01-1 1h-2M7 20H5a1 1 0 01-1-1v-2M4 12h16" stroke-linecap="round"/></svg>';
  const ONB_COACH = '<span class="onbCoachDot"><svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 01-10.9 6.7L4 19.5l1.3-4.1A7.5 7.5 0 1120 11.5z" stroke-linejoin="round"/><path d="M9 11h6M9 13.6h4" stroke-linecap="round"/></svg></span>';
  const ONB_TEA = '<svg class="onbIcon" viewBox="0 0 24 24"><path d="M5 10h11a3 3 0 010 6h-1M5 10v5a4 4 0 004 4h2a4 4 0 004-4M8 4v2M11 4v2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ONB_PLAN = '<svg class="onbIcon" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9.5h16M8 3v4M16 3v4" stroke-linecap="round"/></svg>';
  const ONB_TRACK = '<svg class="onbIcon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.4 12.2l2.4 2.4 4.7-5.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ONB_SLIDES = [
    ['onb1_eyebrow', 'onb1_h', 'onb1_p', '<div class="onbArt onbGlow"><span class="onbMark">H</span></div>'],
    ['onb2_eyebrow', 'onb2_h', 'onb2_p', '<div class="onbArt">' + ONB_PLAN + '</div>'],
    ['onb3_eyebrow', 'onb3_h', 'onb3_p', '<div class="onbArt">' + ONB_TRACK + '</div>'],
    ['onb4_eyebrow', 'onb4_h', 'onb4_p', '<div class="onbArt">' + ONB_COACH + '</div>']
  ];
  const ONB_COUNT = ONB_SLIDES.length + 1; // + the final CTA slide
  let onbIdx = 0;
  function buildOnb() {
    if (el('onbModal')) return;
    const slides = ONB_SLIDES.map(([eb, h, p, art]) =>
      `<div class="onbSlide">${art}<div class="onbEb">${esc(tr(eb))}</div><h2 class="onbH serif">${esc(tr(h))}</h2><p class="onbP">${esc(tr(p))}</p></div>`).join('') +
      `<div class="onbSlide onbFinal"><div class="onbArt onbGlow"><span class="onbMark">H</span></div>` +
      `<h2 class="onbH serif">${esc(tr('onb_cta_h'))}</h2><p class="onbP">${esc(tr('onb_cta_p'))}</p>` +
      `<div class="onbActions"><button class="btn fill" data-onbgo="clean">${esc(tr('onb_go_scan'))}</button>` +
      `<button class="btn em" data-onbgo="coach">${esc(tr('onb_go_coach'))}</button>` +
      `<button class="btn em" data-onbgo="discover">${esc(tr('onb_go_recipes'))}</button></div>` +
      `<button class="onbSignin" data-onbgo="auth">${esc(tr('onb_have_account'))}</button></div>`;
    const dots = Array.from({ length: ONB_COUNT }, (_, i) => `<span class="onbDot${i === 0 ? ' on' : ''}" data-onbdot="${i}"></span>`).join('');
    const m = document.createElement('div');
    m.className = 'onb'; m.id = 'onbModal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', 'HLC Club tour');
    m.innerHTML = `<div class="onbCard"><button class="onbSkip" id="onbSkip">${esc(tr('onb_skip'))}</button>` +
      `<div class="onbViewport"><div class="onbTrack" id="onbTrack">${slides}</div></div>` +
      `<div class="onbDots">${dots}</div><button class="btn fill onbNext" id="onbNext">${esc(tr('onb_next'))}</button></div>`;
    document.body.appendChild(m);
    el('onbSkip').onclick = () => closeOnb(true);
    el('onbNext').onclick = () => onbGo(onbIdx + 1);
    const vp = m.querySelector('.onbViewport'); let sx = 0, sy = 0;
    vp.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    vp.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) onbGo(onbIdx + (dx < 0 ? 1 : -1)); });
  }
  function onbGo(i) {
    onbIdx = Math.max(0, Math.min(ONB_COUNT - 1, i));
    if (el('onbTrack')) el('onbTrack').style.transform = `translateX(${-onbIdx * 100}%)`;
    document.querySelectorAll('[data-onbdot]').forEach((d, idx) => d.classList.toggle('on', idx === onbIdx));
    const nx = el('onbNext'); if (!nx) return; const last = onbIdx === ONB_COUNT - 1;
    nx.style.display = last ? 'none' : 'block';
    nx.textContent = onbIdx === ONB_COUNT - 2 ? tr('onb_start') : tr('onb_next');
  }
  function openOnb(force) {
    if (!force && localStorage.getItem(ONB_KEY)) return;
    if (!(window.HLCi18n && HLCi18n.getLang())) return; // wait for an explicit language choice
    buildOnb(); onbIdx = 0; onbGo(0);
    requestAnimationFrame(() => { const m = el('onbModal'); if (m) m.classList.add('open'); });
    logSignal('onboard', force ? 'replay' : 'start');
  }
  function closeOnb(done) {
    const m = el('onbModal'); if (m) m.classList.remove('open');
    if (done) { try { localStorage.setItem(ONB_KEY, '1'); } catch (e) {} }
  }
  function maybeOnboard() { try { openOnb(false); } catch (e) {} }

  /* ---------------------------------- boot --------------------------------- */
  async function boot() {
    bumpStreak();
    render();
    triggerReveal();
    if (store.token) {
      try { applyAccount(await api('/api/me')); render(); }
      catch (e) { if (e.status === 401) { store.token = ''; state.user = null; render(); } }
    }
    await handleCheckoutReturn();
    // Oura connect return + pull the latest sleep/readiness into the Coach
    try {
      const oq = new URLSearchParams(location.search).get('oura');
      if (oq) { history.replaceState({}, '', location.pathname); if (oq === 'connected') toast(wt('oura_ok', 'Oura Ring connected.')); }
      if (loggedIn()) api('/api/oura/data').then((d) => { if (d && d.connected) { state.oura = d; renderCoach(); } }).catch(() => {});
    } catch (e) {}
    logSignal('view'); // pageview
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
    maybeOnboard();
  }
  boot();

  // First-party, ANONYMOUS aggregate signal. `detail` is ONLY ever a category / recipe id /
  // search term / topic keyword — never a person (the events table has no user_id).
  // Fire-and-forget; hoisted so any handler above can call it.
  function logSignal(kind, detail) {
    const body = detail ? { kind, detail: String(detail).slice(0, 64) } : { kind };
    fetch(API + '/api/event', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => {});
  }
})();
