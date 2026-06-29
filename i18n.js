/* HLC Club — i18n. Language is chosen by the user and follows them across countries
   (we never force it by location). Hebrew renders right-to-left. */
(function () {
  'use strict';

  var LANGS = [
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'pt', name: 'Português (Brasil)', dir: 'ltr' },
    { code: 'es', name: 'Español', dir: 'ltr' },
    { code: 'it', name: 'Italiano', dir: 'ltr' },
    { code: 'zh', name: '中文', dir: 'ltr' },
    { code: 'hi', name: 'हिन्दी', dir: 'ltr' },
    { code: 'he', name: 'עברית', dir: 'rtl' }
  ];

  var I18N = {
    en: {
      brand_sub: 'Functional eating companion', signin: 'Sign in', account: 'Account', language: 'Language',
      nav_discover: 'Discover', nav_clean: 'Clean', nav_saved: 'Saved', nav_protocols: 'Protocols', nav_teas: 'Teas',
      disc_eyebrow: 'Healthy desserts first', disc_h1: 'Eat sweet. Feel steady.', disc_p: 'Real desserts with macros, the functional “why”, clean swaps and protocols — built for cravings that love you back.', disc_search_ph: 'Search desserts, goals, ingredients', disc_recommended: 'Recommended for you',
      clean_eyebrow: 'Clean Check', clean_h1: 'Scan before you crave.', clean_p: 'See what a packaged snack is really doing — by ingredients & processing, not just calories — then make the HLC version.', clean_scan: 'Scan barcode', clean_or: 'or search by name', clean_input_ph: 'e.g. protein bar, Nutella, oat milk', clean_check_btn: 'Check it',
      clean_at_glance: 'At a glance', clean_know: 'A few things to know', clean_know_lead: 'No food panic — most packaged foods carry a couple of these. Here’s the plain why, and a cleaner path below.', clean_swaps: 'Your cleaner swaps', clean_swaps_lead: 'Same craving, better ingredients — here’s where to go instead.', clean_make_home: 'Make it at home', clean_good_to_know: 'Good to know', clean_recent: 'Recent checks', clean_clear: 'Clear',
      clean_calq: 'Calorie quality', clean_anti: '% anti-inflammatory lean', clean_contains: 'Allergens', clean_traces: 'May contain traces', clean_origin: 'Ingredient origin', clean_made: 'Made in', clean_origin_no: 'Not disclosed',
      clean_members_h: 'Scan any snack. See its real quality.', clean_members_p: 'Clean Check scores packaged food by processing & ingredients (not just calories) and shows the HLC version to make instead.', clean_unlock: 'Unlock with HLC Club',
      diet_clean: '✓ Clean food', diet_gluten: 'Gluten-free', diet_lactose: 'Lactose-free', diet_dairy: 'Dairy-free', diet_vegan: 'Vegan', diet_nosugar: 'No added sugar', diet_organic: 'Organic', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Palm-oil-free',
      saved_eyebrow: 'Your library', saved_h1: 'Favorites that remember you.', saved_p: 'Save what works for your body. Sign in to sync across every device.',
      prot_eyebrow: 'Functional programs', prot_h1: 'Protocols & Programs', prot_p: 'Guided functional protocols — buy a program, or get everything with the Club.', prot_preview: 'Preview the method · free taste', prot_support: 'Practitioner-grade support · optional',
      teas_eyebrow: 'Tea rituals', teas_h1: 'Small rituals. Big signal.', teas_p: 'Functional teas for digestion, cravings, stress and sleep.',
      rec_nutrition: 'Nutrition', rec_why: 'Why it nourishes you', rec_lens: 'Functional nutrition lens', rec_edu: 'Educational only — not medical advice.', rec_ingredients: 'Ingredients', rec_swaps: 'Make it yours · smart swaps', rec_save: 'Save favorite', rec_members_h: 'Members-only recipe', rec_members_p: 'Ingredients, method and swaps unlock with HLC Club — plus all 18 recipes and every protocol.', rec_unlock: 'Unlock with HLC Club',
      auth_h: 'Sign in or create your account', auth_p: 'No password. We email you a one-time 6-digit code.', auth_email_ph: 'you@email.com', auth_send: 'Send my code', auth_code_h: 'Enter your code', auth_code_hint: 'Check your inbox for the 6-digit code.', auth_verify: 'Verify & continue', auth_back: '← Use a different email',
      assess_eyebrow: 'Wellness check-in', assess_h: 'How have you been feeling?', assess_p: 'A quick, honest check-in — no right answers. This becomes your baseline, so we can show how far you’ve come.', assess_dis: 'A wellness check-in to personalize your experience — not a medical diagnosis.', assess_save: 'Save my baseline →',
      pay_eyebrow: 'Secure checkout', pay_go: 'Complete secure checkout →', pay_fine: 'Secured by Stripe · educational content, not medical advice',
      scan_title: 'Scan a product', scan_photo: 'Scan from photo', scan_type: 'Type name', scan_starting: 'Starting camera…', scan_point: 'Point at a barcode or QR code', scan_reading: 'Reading photo…', scan_cam: 'Camera unavailable — scan a photo or type the product name.', scan_nofind: 'No barcode or QR found in that photo. Try the live camera, or type the name.',
      lang_title: 'Choose your language', lang_sub: 'You can change it anytime. It stays with you, wherever you travel.', close: 'Close'
    },
    pt: {
      brand_sub: 'Companheiro de alimentação funcional', signin: 'Entrar', account: 'Conta', language: 'Idioma',
      nav_discover: 'Descobrir', nav_clean: 'Clean', nav_saved: 'Salvos', nav_protocols: 'Protocolos', nav_teas: 'Chás',
      disc_eyebrow: 'Sobremesas saudáveis primeiro', disc_h1: 'Coma doce. Sinta-se equilibrada.', disc_p: 'Sobremesas de verdade com macros, o “porquê” funcional, trocas limpas e protocolos — para desejos que te querem bem.', disc_search_ph: 'Busque sobremesas, objetivos, ingredientes', disc_recommended: 'Recomendado para você',
      clean_eyebrow: 'Clean Check', clean_h1: 'Escaneie antes de cair na tentação.', clean_p: 'Veja o que um snack industrializado realmente faz — por ingredientes e processamento, não só calorias — e faça a versão HLC.', clean_scan: 'Escanear código de barras', clean_or: 'ou busque pelo nome', clean_input_ph: 'ex.: barra proteica, Nutella, leite de aveia', clean_check_btn: 'Verificar',
      clean_at_glance: 'Visão geral', clean_know: 'Alguns pontos pra saber', clean_know_lead: 'Sem pânico — quase todo industrializado tem alguns destes. Aqui o porquê, com um caminho mais limpo abaixo.', clean_swaps: 'Suas trocas mais limpas', clean_swaps_lead: 'Mesmo desejo, ingredientes melhores — veja onde ir no lugar.', clean_make_home: 'Faça em casa', clean_good_to_know: 'Bom saber', clean_recent: 'Buscas recentes', clean_clear: 'Limpar',
      clean_calq: 'Qualidade da caloria', clean_anti: '% magra anti-inflamatória', clean_contains: 'Alérgenos', clean_traces: 'Pode conter traços', clean_origin: 'Origem dos ingredientes', clean_made: 'Fabricado em', clean_origin_no: 'Não informado',
      clean_members_h: 'Escaneie qualquer snack. Veja a qualidade real.', clean_members_p: 'O Clean Check avalia o industrializado por processamento e ingredientes (não só calorias) e mostra a versão HLC pra fazer no lugar.', clean_unlock: 'Liberar com o HLC Club',
      diet_clean: '✓ Alimento clean', diet_gluten: 'Sem glúten', diet_lactose: 'Sem lactose', diet_dairy: 'Sem laticínios', diet_vegan: 'Vegano', diet_nosugar: 'Sem açúcar adicionado', diet_organic: 'Orgânico', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Sem óleo de palma',
      saved_eyebrow: 'Sua biblioteca', saved_h1: 'Favoritos que lembram de você.', saved_p: 'Salve o que funciona pro seu corpo. Entre para sincronizar em todos os aparelhos.',
      prot_eyebrow: 'Programas funcionais', prot_h1: 'Protocolos & Programas', prot_p: 'Protocolos funcionais guiados — compre um programa, ou tenha tudo com o Club.', prot_preview: 'Prévia do método · degustação grátis', prot_support: 'Suporte nível profissional · opcional',
      teas_eyebrow: 'Rituais de chá', teas_h1: 'Pequenos rituais. Grande sinal.', teas_p: 'Chás funcionais para digestão, desejos, estresse e sono.',
      rec_nutrition: 'Nutrição', rec_why: 'Por que nutre você', rec_lens: 'Lente de nutrição funcional', rec_edu: 'Apenas educativo — não é orientação médica.', rec_ingredients: 'Ingredientes', rec_swaps: 'Faça do seu jeito · trocas inteligentes', rec_save: 'Salvar favorito', rec_members_h: 'Receita exclusiva de membros', rec_members_p: 'Ingredientes, modo de preparo e trocas liberam com o HLC Club — mais as 18 receitas e todos os protocolos.', rec_unlock: 'Liberar com o HLC Club',
      auth_h: 'Entre ou crie sua conta', auth_p: 'Sem senha. Enviamos um código de 6 dígitos por e-mail.', auth_email_ph: 'voce@email.com', auth_send: 'Enviar meu código', auth_code_h: 'Digite seu código', auth_code_hint: 'Confira o código de 6 dígitos na sua caixa de entrada.', auth_verify: 'Verificar e continuar', auth_back: '← Usar outro e-mail',
      assess_eyebrow: 'Check-in de bem-estar', assess_h: 'Como você tem se sentido?', assess_p: 'Um check-in rápido e honesto — não há resposta certa. Vira seu ponto de partida, pra mostrarmos o quanto você evoluiu.', assess_dis: 'Um check-in de bem-estar pra personalizar sua experiência — não é diagnóstico médico.', assess_save: 'Salvar meu ponto de partida →',
      pay_eyebrow: 'Pagamento seguro', pay_go: 'Concluir pagamento seguro →', pay_fine: 'Protegido pela Stripe · conteúdo educativo, não é orientação médica',
      scan_title: 'Escanear um produto', scan_photo: 'Escanear de uma foto', scan_type: 'Digitar nome', scan_starting: 'Iniciando câmera…', scan_point: 'Aponte para um código de barras ou QR', scan_reading: 'Lendo a foto…', scan_cam: 'Câmera indisponível — escaneie uma foto ou digite o nome.', scan_nofind: 'Nenhum código encontrado na foto. Use a câmera ao vivo ou digite o nome.',
      lang_title: 'Escolha seu idioma', lang_sub: 'Você pode mudar quando quiser. Ele fica com você, onde quer que viaje.', close: 'Fechar'
    },
    es: {
      brand_sub: 'Compañero de alimentación funcional', signin: 'Entrar', account: 'Cuenta', language: 'Idioma',
      nav_discover: 'Descubrir', nav_clean: 'Clean', nav_saved: 'Guardados', nav_protocols: 'Protocolos', nav_teas: 'Tés',
      disc_eyebrow: 'Postres saludables primero', disc_h1: 'Come dulce. Siéntete estable.', disc_p: 'Postres de verdad con macros, el “porqué” funcional, cambios limpios y protocolos — para antojos que te quieren bien.', disc_search_ph: 'Busca postres, objetivos, ingredientes', disc_recommended: 'Recomendado para ti',
      clean_eyebrow: 'Clean Check', clean_h1: 'Escanea antes del antojo.', clean_p: 'Mira qué hace de verdad un snack envasado — por ingredientes y procesamiento, no solo calorías — y haz la versión HLC.', clean_scan: 'Escanear código de barras', clean_or: 'o busca por nombre', clean_input_ph: 'ej.: barra proteica, Nutella, leche de avena', clean_check_btn: 'Verificar',
      clean_at_glance: 'De un vistazo', clean_know: 'Algunas cosas a saber', clean_know_lead: 'Sin pánico — casi todo lo envasado lleva algunos de estos. Aquí el porqué, con una opción más limpia abajo.', clean_swaps: 'Tus cambios más limpios', clean_swaps_lead: 'Mismo antojo, mejores ingredientes — aquí a dónde ir.', clean_make_home: 'Hazlo en casa', clean_good_to_know: 'Bueno saberlo', clean_recent: 'Búsquedas recientes', clean_clear: 'Borrar',
      clean_calq: 'Calidad de la caloría', clean_anti: '% magro antiinflamatorio', clean_contains: 'Alérgenos', clean_traces: 'Puede contener trazas', clean_origin: 'Origen de los ingredientes', clean_made: 'Fabricado en', clean_origin_no: 'No informado',
      clean_members_h: 'Escanea cualquier snack. Mira su calidad real.', clean_members_p: 'Clean Check evalúa lo envasado por procesamiento e ingredientes (no solo calorías) y muestra la versión HLC para hacer en su lugar.', clean_unlock: 'Desbloquear con HLC Club',
      diet_clean: '✓ Alimento clean', diet_gluten: 'Sin gluten', diet_lactose: 'Sin lactosa', diet_dairy: 'Sin lácteos', diet_vegan: 'Vegano', diet_nosugar: 'Sin azúcar añadido', diet_organic: 'Orgánico', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Sin aceite de palma',
      saved_eyebrow: 'Tu biblioteca', saved_h1: 'Favoritos que te recuerdan.', saved_p: 'Guarda lo que funciona para tu cuerpo. Entra para sincronizar en todos tus dispositivos.',
      prot_eyebrow: 'Programas funcionales', prot_h1: 'Protocolos & Programas', prot_p: 'Protocolos funcionales guiados — compra un programa, o ten todo con el Club.', prot_preview: 'Vista previa del método · prueba gratis', prot_support: 'Soporte nivel profesional · opcional',
      teas_eyebrow: 'Rituales de té', teas_h1: 'Pequeños rituales. Gran señal.', teas_p: 'Tés funcionales para digestión, antojos, estrés y sueño.',
      rec_nutrition: 'Nutrición', rec_why: 'Por qué te nutre', rec_lens: 'Lente de nutrición funcional', rec_edu: 'Solo educativo — no es consejo médico.', rec_ingredients: 'Ingredientes', rec_swaps: 'Hazlo tuyo · cambios inteligentes', rec_save: 'Guardar favorito', rec_members_h: 'Receta solo para miembros', rec_members_p: 'Ingredientes, método y cambios se desbloquean con HLC Club — además de las 18 recetas y todos los protocolos.', rec_unlock: 'Desbloquear con HLC Club',
      auth_h: 'Entra o crea tu cuenta', auth_p: 'Sin contraseña. Te enviamos un código de 6 dígitos por correo.', auth_email_ph: 'tu@email.com', auth_send: 'Enviar mi código', auth_code_h: 'Ingresa tu código', auth_code_hint: 'Busca el código de 6 dígitos en tu correo.', auth_verify: 'Verificar y continuar', auth_back: '← Usar otro correo',
      assess_eyebrow: 'Check-in de bienestar', assess_h: '¿Cómo te has sentido?', assess_p: 'Un check-in rápido y honesto — no hay respuestas correctas. Se vuelve tu punto de partida, para mostrarte cuánto avanzaste.', assess_dis: 'Un check-in de bienestar para personalizar tu experiencia — no es un diagnóstico médico.', assess_save: 'Guardar mi punto de partida →',
      pay_eyebrow: 'Pago seguro', pay_go: 'Completar pago seguro →', pay_fine: 'Protegido por Stripe · contenido educativo, no es consejo médico',
      scan_title: 'Escanear un producto', scan_photo: 'Escanear desde foto', scan_type: 'Escribir nombre', scan_starting: 'Iniciando cámara…', scan_point: 'Apunta a un código de barras o QR', scan_reading: 'Leyendo la foto…', scan_cam: 'Cámara no disponible — escanea una foto o escribe el nombre.', scan_nofind: 'No se encontró ningún código en la foto. Usa la cámara o escribe el nombre.',
      lang_title: 'Elige tu idioma', lang_sub: 'Puedes cambiarlo cuando quieras. Va contigo, donde sea que viajes.', close: 'Cerrar'
    },
    it: {
      brand_sub: 'Compagno di alimentazione funzionale', signin: 'Accedi', account: 'Account', language: 'Lingua',
      nav_discover: 'Scopri', nav_clean: 'Clean', nav_saved: 'Salvati', nav_protocols: 'Protocolli', nav_teas: 'Tè',
      disc_eyebrow: 'Prima i dolci sani', disc_h1: 'Mangia dolce. Sentiti stabile.', disc_p: 'Dolci veri con macro, il “perché” funzionale, sostituzioni pulite e protocolli — per voglie che ti vogliono bene.', disc_search_ph: 'Cerca dolci, obiettivi, ingredienti', disc_recommended: 'Consigliati per te',
      clean_eyebrow: 'Clean Check', clean_h1: 'Scansiona prima della voglia.', clean_p: 'Scopri cosa fa davvero uno snack confezionato — per ingredienti e lavorazione, non solo calorie — poi fai la versione HLC.', clean_scan: 'Scansiona codice a barre', clean_or: 'o cerca per nome', clean_input_ph: 'es.: barretta proteica, Nutella, latte d’avena', clean_check_btn: 'Verifica',
      clean_at_glance: 'In sintesi', clean_know: 'Alcune cose da sapere', clean_know_lead: 'Niente panico — quasi tutti i confezionati ne hanno qualcuno. Ecco il perché, con un’opzione più pulita sotto.', clean_swaps: 'Le tue alternative più pulite', clean_swaps_lead: 'Stessa voglia, ingredienti migliori — ecco dove andare.', clean_make_home: 'Falla in casa', clean_good_to_know: 'Buono a sapersi', clean_recent: 'Ricerche recenti', clean_clear: 'Cancella',
      clean_calq: 'Qualità della caloria', clean_anti: '% magro antinfiammatorio', clean_contains: 'Allergeni', clean_traces: 'Può contenere tracce', clean_origin: 'Origine degli ingredienti', clean_made: 'Prodotto in', clean_origin_no: 'Non indicato',
      clean_members_h: 'Scansiona qualsiasi snack. Vedi la qualità reale.', clean_members_p: 'Clean Check valuta i confezionati per lavorazione e ingredienti (non solo calorie) e mostra la versione HLC da fare.', clean_unlock: 'Sblocca con HLC Club',
      diet_clean: '✓ Alimento clean', diet_gluten: 'Senza glutine', diet_lactose: 'Senza lattosio', diet_dairy: 'Senza latticini', diet_vegan: 'Vegano', diet_nosugar: 'Senza zuccheri aggiunti', diet_organic: 'Biologico', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Senza olio di palma',
      saved_eyebrow: 'La tua libreria', saved_h1: 'Preferiti che si ricordano di te.', saved_p: 'Salva ciò che funziona per il tuo corpo. Accedi per sincronizzare su ogni dispositivo.',
      prot_eyebrow: 'Programmi funzionali', prot_h1: 'Protocolli & Programmi', prot_p: 'Protocolli funzionali guidati — compra un programma, o avrai tutto con il Club.', prot_preview: 'Anteprima del metodo · assaggio gratis', prot_support: 'Supporto di livello professionale · opzionale',
      teas_eyebrow: 'Rituali del tè', teas_h1: 'Piccoli rituali. Grande segnale.', teas_p: 'Tè funzionali per digestione, voglie, stress e sonno.',
      rec_nutrition: 'Nutrizione', rec_why: 'Perché ti nutre', rec_lens: 'Lente di nutrizione funzionale', rec_edu: 'Solo a scopo educativo — non è un consiglio medico.', rec_ingredients: 'Ingredienti', rec_swaps: 'Personalizza · sostituzioni intelligenti', rec_save: 'Salva preferito', rec_members_h: 'Ricetta solo per membri', rec_members_p: 'Ingredienti, metodo e sostituzioni si sbloccano con HLC Club — più tutte le 18 ricette e ogni protocollo.', rec_unlock: 'Sblocca con HLC Club',
      auth_h: 'Accedi o crea il tuo account', auth_p: 'Niente password. Ti inviamo un codice di 6 cifre via email.', auth_email_ph: 'tu@email.com', auth_send: 'Invia il mio codice', auth_code_h: 'Inserisci il codice', auth_code_hint: 'Controlla in posta il codice di 6 cifre.', auth_verify: 'Verifica e continua', auth_back: '← Usa un’altra email',
      assess_eyebrow: 'Check-in del benessere', assess_h: 'Come ti sei sentita?', assess_p: 'Un check-in rapido e sincero — nessuna risposta giusta. Diventa il tuo punto di partenza, per mostrarti quanta strada hai fatto.', assess_dis: 'Un check-in del benessere per personalizzare l’esperienza — non è una diagnosi medica.', assess_save: 'Salva il mio punto di partenza →',
      pay_eyebrow: 'Pagamento sicuro', pay_go: 'Completa il pagamento sicuro →', pay_fine: 'Protetto da Stripe · contenuto educativo, non è un consiglio medico',
      scan_title: 'Scansiona un prodotto', scan_photo: 'Scansiona da foto', scan_type: 'Scrivi il nome', scan_starting: 'Avvio fotocamera…', scan_point: 'Inquadra un codice a barre o QR', scan_reading: 'Lettura della foto…', scan_cam: 'Fotocamera non disponibile — scansiona una foto o scrivi il nome.', scan_nofind: 'Nessun codice trovato nella foto. Usa la fotocamera o scrivi il nome.',
      lang_title: 'Scegli la tua lingua', lang_sub: 'Puoi cambiarla quando vuoi. Resta con te, ovunque viaggi.', close: 'Chiudi'
    },
    zh: {
      brand_sub: '功能性饮食伴侣', signin: '登录', account: '账户', language: '语言',
      nav_discover: '发现', nav_clean: '检测', nav_saved: '收藏', nav_protocols: '方案', nav_teas: '茶饮',
      disc_eyebrow: '健康甜点优先', disc_h1: '吃甜，也稳。', disc_p: '真正的甜点，附带营养数据、功能性“原理”、干净替代与方案——为善待你的渴望而生。', disc_search_ph: '搜索甜点、目标、配料', disc_recommended: '为你推荐',
      clean_eyebrow: '干净检测', clean_h1: '想吃前先扫一扫。', clean_p: '看看一款包装零食的真实情况——按配料与加工程度，而不只是热量——然后做出 HLC 版本。', clean_scan: '扫描条形码', clean_or: '或按名称搜索', clean_input_ph: '例如：蛋白棒、能多益、燕麦奶', clean_check_btn: '检测',
      clean_at_glance: '一目了然', clean_know: '需要了解的几点', clean_know_lead: '别紧张——大多数包装食品都会有几项。下面是简单的原因，以及更干净的选择。', clean_swaps: '更干净的替代', clean_swaps_lead: '同样的渴望，更好的配料——看看可以选什么。', clean_make_home: '在家自制', clean_good_to_know: '值得了解', clean_recent: '最近检测', clean_clear: '清除',
      clean_calq: '热量质量', clean_anti: '% 抗炎清爽度', clean_contains: '过敏原', clean_traces: '可能含微量', clean_origin: '配料产地', clean_made: '生产地', clean_origin_no: '未标明',
      clean_members_h: '扫描任意零食，看它的真实品质。', clean_members_p: '干净检测按加工程度与配料（不只是热量）为包装食品评分，并给出可自制的 HLC 版本。', clean_unlock: '用 HLC Club 解锁',
      diet_clean: '✓ 干净食品', diet_gluten: '无麸质', diet_lactose: '无乳糖', diet_dairy: '无乳制品', diet_vegan: '纯素', diet_nosugar: '无添加糖', diet_organic: '有机', diet_kosher: '洁食', diet_halal: '清真', diet_palmfree: '无棕榈油',
      saved_eyebrow: '你的收藏库', saved_h1: '记得你的收藏。', saved_p: '收藏适合你身体的内容。登录即可在所有设备同步。',
      prot_eyebrow: '功能性课程', prot_h1: '方案与课程', prot_p: '有引导的功能性方案——单独购买，或用 Club 全部解锁。', prot_preview: '方法预览 · 免费试读', prot_support: '专业级支持 · 可选',
      teas_eyebrow: '茶仪式', teas_h1: '小仪式，大信号。', teas_p: '改善消化、渴望、压力与睡眠的功能性茶饮。',
      rec_nutrition: '营养', rec_why: '它为何滋养你', rec_lens: '功能性营养视角', rec_edu: '仅供教育参考——非医疗建议。', rec_ingredients: '配料', rec_swaps: '做成你的 · 聪明替换', rec_save: '收藏', rec_members_h: '会员专属食谱', rec_members_p: '配料、做法与替换需用 HLC Club 解锁——还有全部 18 个食谱和所有方案。', rec_unlock: '用 HLC Club 解锁',
      auth_h: '登录或创建账户', auth_p: '无需密码。我们会用邮件发送一次性 6 位验证码。', auth_email_ph: 'you@email.com', auth_send: '发送验证码', auth_code_h: '输入验证码', auth_code_hint: '请在邮箱中查收 6 位验证码。', auth_verify: '验证并继续', auth_back: '← 换一个邮箱',
      assess_eyebrow: '健康自检', assess_h: '你最近感觉如何？', assess_p: '一个快速、诚实的自检——没有标准答案。它会成为你的基线，让我们看到你的进步。', assess_dis: '用于个性化体验的健康自检——并非医疗诊断。', assess_save: '保存我的基线 →',
      pay_eyebrow: '安全结账', pay_go: '完成安全结账 →', pay_fine: '由 Stripe 保障 · 教育性内容，非医疗建议',
      scan_title: '扫描产品', scan_photo: '从照片扫描', scan_type: '输入名称', scan_starting: '正在启动相机…', scan_point: '对准条形码或二维码', scan_reading: '正在读取照片…', scan_cam: '相机不可用——请扫描照片或输入名称。', scan_nofind: '照片中未找到条码或二维码。请使用相机或输入名称。',
      lang_title: '选择你的语言', lang_sub: '随时可更改。它会跟着你，无论你去到哪里。', close: '关闭'
    },
    hi: {
      brand_sub: 'फ़ंक्शनल ईटिंग साथी', signin: 'साइन इन', account: 'खाता', language: 'भाषा',
      nav_discover: 'खोजें', nav_clean: 'क्लीन', nav_saved: 'सहेजे', nav_protocols: 'प्रोटोकॉल', nav_teas: 'चाय',
      disc_eyebrow: 'पहले हेल्दी डेज़र्ट', disc_h1: 'मीठा खाएँ। स्थिर महसूस करें।', disc_p: 'असली डेज़र्ट — मैक्रोज़, फ़ंक्शनल “क्यों”, क्लीन विकल्प और प्रोटोकॉल के साथ — ऐसी क्रेविंग के लिए जो आपका भला चाहे।', disc_search_ph: 'डेज़र्ट, लक्ष्य, सामग्री खोजें', disc_recommended: 'आपके लिए सुझाव',
      clean_eyebrow: 'क्लीन चेक', clean_h1: 'क्रेविंग से पहले स्कैन करें।', clean_p: 'देखें कि कोई पैकेज्ड स्नैक असल में क्या कर रहा है — सामग्री और प्रोसेसिंग से, सिर्फ़ कैलोरी से नहीं — फिर HLC वर्शन बनाएँ।', clean_scan: 'बारकोड स्कैन करें', clean_or: 'या नाम से खोजें', clean_input_ph: 'जैसे: प्रोटीन बार, Nutella, ओट मिल्क', clean_check_btn: 'जाँचें',
      clean_at_glance: 'एक नज़र में', clean_know: 'जानने लायक कुछ बातें', clean_know_lead: 'घबराएँ नहीं — ज़्यादातर पैकेज्ड फ़ूड में इनमें से कुछ होते हैं। नीचे सरल कारण और एक क्लीनर विकल्प है।', clean_swaps: 'आपके क्लीनर विकल्प', clean_swaps_lead: 'वही क्रेविंग, बेहतर सामग्री — इसके बजाय यह चुनें।', clean_make_home: 'घर पर बनाएँ', clean_good_to_know: 'जानना अच्छा है', clean_recent: 'हाल की जाँचें', clean_clear: 'साफ़ करें',
      clean_calq: 'कैलोरी की गुणवत्ता', clean_anti: '% एंटी-इंफ्लेमेटरी लीन', clean_contains: 'एलर्जन', clean_traces: 'अंश हो सकते हैं', clean_origin: 'सामग्री का मूल', clean_made: 'निर्मित', clean_origin_no: 'नहीं बताया गया',
      clean_members_h: 'कोई भी स्नैक स्कैन करें। असली गुणवत्ता देखें।', clean_members_p: 'क्लीन चेक पैकेज्ड फ़ूड को प्रोसेसिंग और सामग्री से आँकता है (सिर्फ़ कैलोरी से नहीं) और बनाने के लिए HLC वर्शन दिखाता है।', clean_unlock: 'HLC Club से अनलॉक करें',
      diet_clean: '✓ क्लीन फ़ूड', diet_gluten: 'ग्लूटेन-मुक्त', diet_lactose: 'लैक्टोज़-मुक्त', diet_dairy: 'डेयरी-मुक्त', diet_vegan: 'वीगन', diet_nosugar: 'बिना अतिरिक्त शक्कर', diet_organic: 'ऑर्गैनिक', diet_kosher: 'कोषर', diet_halal: 'हलाल', diet_palmfree: 'पाम-ऑयल मुक्त',
      saved_eyebrow: 'आपकी लाइब्रेरी', saved_h1: 'पसंदीदा जो आपको याद रखें।', saved_p: 'जो आपके शरीर के लिए काम करे, उसे सहेजें। हर डिवाइस पर सिंक के लिए साइन इन करें।',
      prot_eyebrow: 'फ़ंक्शनल प्रोग्राम', prot_h1: 'प्रोटोकॉल और प्रोग्राम', prot_p: 'गाइडेड फ़ंक्शनल प्रोटोकॉल — एक प्रोग्राम खरीदें, या Club के साथ सब कुछ पाएँ।', prot_preview: 'विधि की झलक · मुफ़्त ट्रायल', prot_support: 'प्रैक्टिशनर-स्तरीय सहायता · वैकल्पिक',
      teas_eyebrow: 'चाय की रस्में', teas_h1: 'छोटी रस्में। बड़ा असर।', teas_p: 'पाचन, क्रेविंग, तनाव और नींद के लिए फ़ंक्शनल चाय।',
      rec_nutrition: 'पोषण', rec_why: 'यह आपको कैसे पोषित करता है', rec_lens: 'फ़ंक्शनल न्यूट्रिशन दृष्टि', rec_edu: 'केवल शैक्षिक — चिकित्सा सलाह नहीं।', rec_ingredients: 'सामग्री', rec_swaps: 'अपने अनुसार · स्मार्ट विकल्प', rec_save: 'पसंदीदा सहेजें', rec_members_h: 'सदस्यों के लिए रेसिपी', rec_members_p: 'सामग्री, विधि और विकल्प HLC Club से अनलॉक होते हैं — साथ ही सभी 18 रेसिपी और हर प्रोटोकॉल।', rec_unlock: 'HLC Club से अनलॉक करें',
      auth_h: 'साइन इन करें या खाता बनाएँ', auth_p: 'कोई पासवर्ड नहीं। हम ईमेल पर एक बार का 6-अंकीय कोड भेजते हैं।', auth_email_ph: 'you@email.com', auth_send: 'मेरा कोड भेजें', auth_code_h: 'अपना कोड डालें', auth_code_hint: 'अपने इनबॉक्स में 6-अंकीय कोड देखें।', auth_verify: 'सत्यापित करें और आगे बढ़ें', auth_back: '← दूसरा ईमेल इस्तेमाल करें',
      assess_eyebrow: 'वेलनेस चेक-इन', assess_h: 'आप कैसा महसूस कर रही हैं?', assess_p: 'एक त्वरित, ईमानदार चेक-इन — कोई सही उत्तर नहीं। यह आपका आधार बनता है, ताकि हम दिखा सकें कि आप कितना आगे आईं।', assess_dis: 'अनुभव को निजी बनाने के लिए वेलनेस चेक-इन — चिकित्सा निदान नहीं।', assess_save: 'मेरा आधार सहेजें →',
      pay_eyebrow: 'सुरक्षित चेकआउट', pay_go: 'सुरक्षित चेकआउट पूरा करें →', pay_fine: 'Stripe द्वारा सुरक्षित · शैक्षिक सामग्री, चिकित्सा सलाह नहीं',
      scan_title: 'उत्पाद स्कैन करें', scan_photo: 'फ़ोटो से स्कैन करें', scan_type: 'नाम लिखें', scan_starting: 'कैमरा शुरू हो रहा है…', scan_point: 'बारकोड या QR पर निशाना लगाएँ', scan_reading: 'फ़ोटो पढ़ी जा रही है…', scan_cam: 'कैमरा उपलब्ध नहीं — फ़ोटो स्कैन करें या नाम लिखें।', scan_nofind: 'उस फ़ोटो में कोई बारकोड/QR नहीं मिला। कैमरा इस्तेमाल करें या नाम लिखें।',
      lang_title: 'अपनी भाषा चुनें', lang_sub: 'आप इसे कभी भी बदल सकती हैं। यह आपके साथ रहती है, आप जहाँ भी यात्रा करें।', close: 'बंद करें'
    },
    he: {
      brand_sub: 'מלווה לתזונה פונקציונלית', signin: 'כניסה', account: 'חשבון', language: 'שפה',
      nav_discover: 'גילוי', nav_clean: 'בדיקה', nav_saved: 'שמורים', nav_protocols: 'פרוטוקולים', nav_teas: 'תה',
      disc_eyebrow: 'קינוחים בריאים קודם', disc_h1: 'לאכול מתוק. להרגיש יציבה.', disc_p: 'קינוחים אמיתיים עם מאקרו, ה“למה” הפונקציונלי, תחליפים נקיים ופרוטוקולים — לחשקים שאוהבים אותך בחזרה.', disc_search_ph: 'חיפוש קינוחים, מטרות, מרכיבים', disc_recommended: 'מומלץ עבורך',
      clean_eyebrow: 'בדיקת ניקיון', clean_h1: 'סרקי לפני שמתחשק.', clean_p: 'ראי מה חטיף ארוז באמת עושה — לפי מרכיבים ועיבוד, לא רק קלוריות — ואז הכיני את גרסת HLC.', clean_scan: 'סריקת ברקוד', clean_or: 'או חיפוש לפי שם', clean_input_ph: 'למשל: חטיף חלבון, נוטלה, חלב שיבולת שועל', clean_check_btn: 'בדיקה',
      clean_at_glance: 'במבט מהיר', clean_know: 'כמה דברים שכדאי לדעת', clean_know_lead: 'בלי בהלה — ברוב המוצרים הארוזים יש כמה מאלה. הנה ההסבר הפשוט, ואפשרות נקייה יותר למטה.', clean_swaps: 'התחליפים הנקיים שלך', clean_swaps_lead: 'אותו חשק, מרכיבים טובים יותר — הנה לאן ללכת במקום.', clean_make_home: 'הכיני בבית', clean_good_to_know: 'טוב לדעת', clean_recent: 'בדיקות אחרונות', clean_clear: 'ניקוי',
      clean_calq: 'איכות הקלוריה', clean_anti: '% רזה אנטי-דלקתי', clean_contains: 'אלרגנים', clean_traces: 'עלול להכיל עקבות', clean_origin: 'מקור המרכיבים', clean_made: 'מיוצר ב', clean_origin_no: 'לא צוין',
      clean_members_h: 'סרקי כל חטיף. ראי את האיכות האמיתית.', clean_members_p: 'בדיקת הניקיון מדרגת מוצרים ארוזים לפי עיבוד ומרכיבים (לא רק קלוריות) ומציגה את גרסת HLC להכנה במקום.', clean_unlock: 'פתחי עם HLC Club',
      diet_clean: '✓ מזון נקי', diet_gluten: 'ללא גלוטן', diet_lactose: 'ללא לקטוז', diet_dairy: 'ללא מוצרי חלב', diet_vegan: 'טבעוני', diet_nosugar: 'ללא תוספת סוכר', diet_organic: 'אורגני', diet_kosher: 'כשר', diet_halal: 'חלאל', diet_palmfree: 'ללא שמן דקלים',
      saved_eyebrow: 'הספרייה שלך', saved_h1: 'מועדפים שזוכרים אותך.', saved_p: 'שמרי את מה שמתאים לגוף שלך. היכנסי לסנכרון בכל מכשיר.',
      prot_eyebrow: 'תוכניות פונקציונליות', prot_h1: 'פרוטוקולים ותוכניות', prot_p: 'פרוטוקולים פונקציונליים מודרכים — קני תוכנית, או קבלי הכול עם ה-Club.', prot_preview: 'הצצה לשיטה · טעימה חינם', prot_support: 'תמיכה ברמת מומחה · אופציונלי',
      teas_eyebrow: 'טקסי תה', teas_h1: 'טקסים קטנים. אות גדול.', teas_p: 'תה פונקציונלי לעיכול, חשקים, מתח ושינה.',
      rec_nutrition: 'תזונה', rec_why: 'למה זה מזין אותך', rec_lens: 'מבט של תזונה פונקציונלית', rec_edu: 'לחינוך בלבד — לא ייעוץ רפואי.', rec_ingredients: 'מרכיבים', rec_swaps: 'התאימי לעצמך · תחליפים חכמים', rec_save: 'שמירת מועדף', rec_members_h: 'מתכון לחברים בלבד', rec_members_p: 'מרכיבים, אופן הכנה ותחליפים נפתחים עם HLC Club — וגם כל 18 המתכונים וכל פרוטוקול.', rec_unlock: 'פתחי עם HLC Club',
      auth_h: 'התחברי או צרי חשבון', auth_p: 'בלי סיסמה. נשלח לך קוד חד-פעמי בן 6 ספרות במייל.', auth_email_ph: 'you@email.com', auth_send: 'שליחת הקוד שלי', auth_code_h: 'הזיני את הקוד', auth_code_hint: 'חפשי בתיבת הדואר את הקוד בן 6 הספרות.', auth_verify: 'אימות והמשך', auth_back: '← שימוש במייל אחר',
      assess_eyebrow: 'צ׳ק-אין של רווחה', assess_h: 'איך הרגשת לאחרונה?', assess_p: 'צ׳ק-אין מהיר וכן — אין תשובות נכונות. זה הופך לבסיס שלך, כדי שנראה כמה התקדמת.', assess_dis: 'צ׳ק-אין של רווחה להתאמה אישית — לא אבחון רפואי.', assess_save: 'שמירת הבסיס שלי →',
      pay_eyebrow: 'תשלום מאובטח', pay_go: 'השלמת תשלום מאובטח →', pay_fine: 'מאובטח ע״י Stripe · תוכן חינוכי, לא ייעוץ רפואי',
      scan_title: 'סריקת מוצר', scan_photo: 'סריקה מתמונה', scan_type: 'הקלדת שם', scan_starting: 'מפעיל מצלמה…', scan_point: 'כווני אל ברקוד או QR', scan_reading: 'קורא את התמונה…', scan_cam: 'המצלמה לא זמינה — סרקי תמונה או הקלידי שם.', scan_nofind: 'לא נמצא ברקוד או QR בתמונה. נסי מצלמה חיה, או הקלידי שם.',
      lang_title: 'בחרי את השפה שלך', lang_sub: 'אפשר לשנות בכל רגע. היא נשארת איתך, לכל מקום שתטיילי.', close: 'סגירה'
    }
  };

  // Benefits / whole-food layer keys (merged in).
  var WF = {
    en: { clean_good_why: 'Why this is good for you', wf_benefits: 'Here’s why this whole food is great for your body.', wf_vitamins: 'Vitamins', wf_minerals: 'Minerals', wf_antiox: 'Antioxidants', wf_recipes: 'Clean recipes with this', wf_whole: 'Whole food', clean_integrative: 'Integrative view', sys_endo: 'Endocrine', sys_neuro: 'Neurological', sys_horm: 'Hormonal', scan_identify: 'Identifying the food… (first time may take a moment)', scan_noid: 'Couldn’t identify it. Try the barcode, or type the name.', diet_antiinflam: '★ Anti-inflammatory', diet_antiinflam_mild: 'Anti-inflammatory', diet_detox: 'Detox support', diet_gut: 'Gut-friendly', wf_funcnote: 'These reflect compounds that support your body’s own anti-inflammatory, detox and gut systems — food as support, not a cure or treatment.' },
    pt: { clean_good_why: 'Por que isto faz bem pra você', wf_benefits: 'Veja por que esse alimento natural faz bem ao seu corpo.', wf_vitamins: 'Vitaminas', wf_minerals: 'Minerais', wf_antiox: 'Antioxidantes', wf_recipes: 'Receitas clean com isto', wf_whole: 'Alimento natural', clean_integrative: 'Visão integrativa', sys_endo: 'Endócrino', sys_neuro: 'Neurológico', sys_horm: 'Hormonal', scan_identify: 'Identificando o alimento… (a 1ª vez pode demorar um instante)', scan_noid: 'Não consegui identificar. Tente o código de barras ou digite o nome.', diet_antiinflam: '★ Anti-inflamatório', diet_antiinflam_mild: 'Anti-inflamatório', diet_detox: 'Apoio ao detox', diet_gut: 'Amigo do intestino', wf_funcnote: 'Refletem compostos que apoiam os próprios sistemas do corpo (anti-inflamatório, detox e intestino) — alimento como apoio, não cura nem tratamento.' },
    es: { clean_good_why: 'Por qué esto te hace bien', wf_benefits: 'Mira por qué este alimento natural le hace bien a tu cuerpo.', wf_vitamins: 'Vitaminas', wf_minerals: 'Minerales', wf_antiox: 'Antioxidantes', wf_recipes: 'Recetas clean con esto', wf_whole: 'Alimento natural', clean_integrative: 'Visión integrativa', sys_endo: 'Endocrino', sys_neuro: 'Neurológico', sys_horm: 'Hormonal', scan_identify: 'Identificando el alimento… (la 1ª vez puede tardar un momento)', scan_noid: 'No pude identificarlo. Prueba el código de barras o escribe el nombre.', diet_antiinflam: '★ Antiinflamatorio', diet_antiinflam_mild: 'Antiinflamatorio', diet_detox: 'Apoyo al detox', diet_gut: 'Amigo del intestino', wf_funcnote: 'Reflejan compuestos que apoyan los sistemas propios del cuerpo (antiinflamatorio, detox e intestino) — alimento como apoyo, no cura ni tratamiento.' },
    it: { clean_good_why: 'Perché ti fa bene', wf_benefits: 'Ecco perché questo alimento naturale fa bene al corpo.', wf_vitamins: 'Vitamine', wf_minerals: 'Minerali', wf_antiox: 'Antiossidanti', wf_recipes: 'Ricette clean con questo', wf_whole: 'Alimento naturale', clean_integrative: 'Visione integrativa', sys_endo: 'Endocrino', sys_neuro: 'Neurologico', sys_horm: 'Ormonale', scan_identify: 'Sto identificando l’alimento… (la prima volta può volerci un attimo)', scan_noid: 'Non sono riuscita a identificarlo. Prova il codice a barre o scrivi il nome.', diet_antiinflam: '★ Antinfiammatorio', diet_antiinflam_mild: 'Antinfiammatorio', diet_detox: 'Supporto al detox', diet_gut: 'Amico dell’intestino', wf_funcnote: 'Riflettono composti che supportano i sistemi del corpo (antinfiammatorio, detox e intestino) — cibo come supporto, non cura né trattamento.' },
    zh: { clean_good_why: '它对你有什么好处', wf_benefits: '这就是这种天然食物对身体的好处。', wf_vitamins: '维生素', wf_minerals: '矿物质', wf_antiox: '抗氧化物', wf_recipes: '用它做的干净食谱', wf_whole: '天然食物', clean_integrative: '整合视角', sys_endo: '内分泌', sys_neuro: '神经', sys_horm: '激素', scan_identify: '正在识别食物…（首次可能需要一点时间）', scan_noid: '无法识别。请试试条形码，或输入名称。', diet_antiinflam: '★ 抗炎', diet_antiinflam_mild: '抗炎', diet_detox: '排毒支持', diet_gut: '护肠', wf_funcnote: '这些反映了支持身体自身（抗炎、排毒与肠道）系统的成分——食物是支持，而非治疗或药物。' },
    hi: { clean_good_why: 'यह आपके लिए क्यों अच्छा है', wf_benefits: 'यह प्राकृतिक भोजन आपके शरीर के लिए क्यों बढ़िया है।', wf_vitamins: 'विटामिन', wf_minerals: 'खनिज', wf_antiox: 'एंटीऑक्सीडेंट', wf_recipes: 'इससे बनी क्लीन रेसिपी', wf_whole: 'प्राकृतिक भोजन', clean_integrative: 'समेकित दृष्टि', sys_endo: 'अंतःस्रावी', sys_neuro: 'तंत्रिका', sys_horm: 'हार्मोनल', scan_identify: 'भोजन पहचाना जा रहा है… (पहली बार थोड़ा समय लग सकता है)', scan_noid: 'पहचान नहीं पाया। बारकोड आज़माएँ या नाम लिखें।', diet_antiinflam: '★ सूजनरोधी', diet_antiinflam_mild: 'सूजनरोधी', diet_detox: 'डिटॉक्स सहायता', diet_gut: 'आंत-हितैषी', wf_funcnote: 'ये उन तत्वों को दर्शाते हैं जो शरीर के अपने तंत्र (सूजनरोधी, डिटॉक्स और आंत) का समर्थन करते हैं — भोजन सहायता है, इलाज नहीं।' },
    he: { clean_good_why: 'למה זה טוב לך', wf_benefits: 'הנה למה המזון הטבעי הזה מצוין לגוף שלך.', wf_vitamins: 'ויטמינים', wf_minerals: 'מינרלים', wf_antiox: 'נוגדי חמצון', wf_recipes: 'מתכונים נקיים עם זה', wf_whole: 'מזון מלא', clean_integrative: 'מבט אינטגרטיבי', sys_endo: 'אנדוקריני', sys_neuro: 'נוירולוגי', sys_horm: 'הורמונלי', scan_identify: 'מזהה את המזון… (בפעם הראשונה זה עשוי לקחת רגע)', scan_noid: 'לא הצלחתי לזהות. נסי ברקוד, או הקלידי שם.', diet_antiinflam: '★ אנטי-דלקתי', diet_antiinflam_mild: 'אנטי-דלקתי', diet_detox: 'תמיכה בניקוי רעלים', diet_gut: 'ידידותי למעיים', wf_funcnote: 'אלו משקפים רכיבים התומכים במערכות הגוף עצמו (אנטי-דלקתי, ניקוי רעלים ומעיים) — מזון כתמיכה, לא תרופה או טיפול.' }
  };
  Object.keys(WF).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], WF[l]); });

  function getLang() {
    var l = localStorage.getItem('hlc:lang');
    return l && I18N[l] ? l : '';
  }
  function detectLang() {
    var n = (navigator.language || 'en').toLowerCase();
    if (n.indexOf('pt') === 0) return 'pt';
    if (n.indexOf('es') === 0) return 'es';
    if (n.indexOf('it') === 0) return 'it';
    if (n.indexOf('zh') === 0) return 'zh';
    if (n.indexOf('hi') === 0) return 'hi';
    if (n.indexOf('he') === 0 || n.indexOf('iw') === 0) return 'he';
    return 'en';
  }
  function t(key) {
    var l = getLang() || 'en';
    return (I18N[l] && I18N[l][key]) || I18N.en[key] || key;
  }
  function dirFor(l) { var m = LANGS.find(function (x) { return x.code === l; }); return m ? m.dir : 'ltr'; }
  function applyDir(l) {
    var d = dirFor(l || getLang() || 'en');
    document.documentElement.setAttribute('dir', d);
    document.documentElement.setAttribute('lang', l || getLang() || 'en');
  }
  function applyI18n(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    root.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
  }
  function setLang(l, opts) {
    if (!I18N[l]) return;
    localStorage.setItem('hlc:lang', l);
    applyDir(l);
    applyI18n(document);
    if (!opts || !opts.silent) window.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  // Self-contained language picker overlay (no extra HTML needed).
  function buildPicker() {
    if (document.getElementById('langModal')) return;
    var cur = getLang();
    var m = document.createElement('div');
    m.className = 'modal langModal';
    m.id = 'langModal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.innerHTML =
      '<div class="langCard">' +
      '<div class="langHead"><div><div class="eyebrow">HLC Club</div><h2 class="serif" id="langTitle"></h2><p id="langSub" class="langSub"></p></div>' +
      '<button class="close" id="langClose" aria-label="Close" style="display:' + (cur ? 'block' : 'none') + '">×</button></div>' +
      '<div class="langList">' + LANGS.map(function (x) {
        return '<button class="langItem' + (x.code === cur ? ' on' : '') + '" data-lang="' + x.code + '" dir="' + x.dir + '">' +
          '<span>' + x.name + '</span>' + (x.code === cur ? '<span class="langTick">✓</span>' : '') + '</button>';
      }).join('') + '</div></div>';
    document.body.appendChild(m);
    m.querySelector('#langTitle').textContent = t('lang_title');
    m.querySelector('#langSub').textContent = t('lang_sub');
    m.querySelectorAll('.langItem').forEach(function (b) {
      b.onclick = function () { setLang(b.getAttribute('data-lang')); closePicker(); };
    });
    var c = m.querySelector('#langClose');
    if (c) c.onclick = closePicker;
  }
  function openPicker() { buildPicker(); document.getElementById('langModal').classList.add('open'); }
  function closePicker() { var m = document.getElementById('langModal'); if (m) m.classList.remove('open'); }

  // Boot: set direction + translate; first launch (no choice yet) → show picker.
  function boot() {
    var chosen = getLang();
    applyDir(chosen || detectLang());
    if (!chosen) {
      // pre-highlight the detected language but require an explicit pick
      applyI18n(document); // English defaults until they choose
      openPicker();
    } else {
      applyI18n(document);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.HLCi18n = { t: t, setLang: setLang, getLang: getLang, applyI18n: applyI18n, applyDir: applyDir, openPicker: openPicker, LANGS: LANGS };
  window.t = t;
})();
