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
      nav_discover: 'Discover', nav_clean: 'Clean', nav_saved: 'Saved', nav_protocols: 'Protocols', nav_teas: 'Teas', nav_coach: 'Coach',
      coach_eyebrow: 'Your AI Coach', coach_h1: 'A companion that knows your body.', coach_p: 'Ask about bloating, cravings, energy, or what to eat today — warm, functional guidance that points you to real recipes and rituals.', coach_ph: 'Ask your Coach anything…', coach_disc: 'Educational functional-nutrition guidance — not medical advice, diagnosis or treatment. In a crisis (US) call or text 988.',
      disc_eyebrow: 'Healthy desserts first', disc_h1: 'Eat sweet. Feel steady.', disc_p: 'Real desserts with macros, the functional “why”, clean swaps and protocols — built for cravings that love you back.', disc_search_ph: 'Search desserts, goals, ingredients', disc_recommended: 'Recommended for you',
      clean_eyebrow: 'Clean Check', clean_h1: 'Scan before you crave.', clean_p: 'See what a packaged snack is really doing — by ingredients & processing, not just calories — then make the HLC version.', clean_scan: 'Scan barcode', clean_or: 'or search by name', clean_input_ph: 'e.g. protein bar, Nutella, oat milk', clean_check_btn: 'Check it',
      clean_at_glance: 'At a glance', clean_know: 'A few things to know', clean_know_lead: 'No food panic — most packaged foods carry a couple of these. Here’s the plain why, and a cleaner path below.', clean_swaps: 'Your cleaner swaps', clean_swaps_lead: 'Same craving, better ingredients — here’s where to go instead.', clean_make_home: 'Make it at home', clean_good_to_know: 'Good to know', clean_recent: 'Recent checks', clean_clear: 'Clear',
      clean_calq: 'Calorie quality', clean_anti: '% anti-inflammatory lean', clean_contains: 'Allergens', clean_traces: 'May contain traces', clean_origin: 'Ingredient origin', clean_made: 'Made in', clean_origin_no: 'Not disclosed',
      clean_members_h: 'Scan any snack. See its real quality.', clean_members_p: 'Clean Check scores packaged food by processing & ingredients (not just calories) and shows the HLC version to make instead.', clean_unlock: 'Unlock with HLC Club',
      diet_clean: '✓ Clean food', diet_gluten: 'Gluten-free', diet_lactose: 'Lactose-free', diet_dairy: 'Dairy-free', diet_vegan: 'Vegan', diet_nosugar: 'No added sugar', diet_organic: 'Organic', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Palm-oil-free',
      saved_eyebrow: 'Your library', saved_h1: 'Favorites that remember you.', saved_p: 'Save what works for your body. Sign in to sync across every device.',
      prot_eyebrow: 'Functional programs', prot_h1: 'Rituals & Protocols', prot_p: 'Guided functional protocols — buy a program, or get everything with the Club.', prot_preview: 'Preview the method · free taste', prot_support: 'Practitioner-grade support · optional',
      teas_eyebrow: 'Tea rituals', teas_h1: 'Small rituals. Big signal.', teas_p: 'Functional teas for digestion, cravings, stress and sleep.',
      rec_nutrition: 'Nutrition', rec_why: 'Why it nourishes you', rec_lens: 'Functional nutrition lens', rec_edu: 'Educational only — not medical advice.', rec_ingredients: 'Ingredients', rec_swaps: 'Make it yours · smart swaps', rec_save: 'Save favorite', rec_members_h: 'Members-only recipe', rec_members_p: 'Ingredients, method and swaps unlock with HLC Club — plus all 18 recipes and every protocol.', rec_unlock: 'Unlock with HLC Club',
      auth_h: 'Sign in or create your account', auth_p: 'No password. We email you a one-time 6-digit code.', auth_email_ph: 'you@email.com', auth_send: 'Send my code', auth_code_h: 'Enter your code', auth_code_hint: 'Check your inbox for the 6-digit code.', auth_verify: 'Verify & continue', auth_back: '← Use a different email',
      assess_eyebrow: 'Wellness check-in', assess_h: 'How have you been feeling?', assess_p: 'A quick, honest check-in — no right answers. This becomes your baseline, so we can show how far you’ve come.', assess_dis: 'A wellness check-in to personalize your experience — not a medical diagnosis.', assess_save: 'Save my baseline →',
      pay_eyebrow: 'Secure checkout', pay_go: 'Complete secure checkout →', pay_fine: 'Secured by Stripe · educational content, not medical advice',
      scan_title: 'Scan a product', scan_photo: 'Scan from photo', plate_club: 'You have used the free plate scans for today. The Club has unlimited scanning.', plate_busy: 'A lot of people are scanning today — try again tomorrow, or join the Club for unlimited.', plate_local_ask: 'Server unavailable. Your phone can try on its own, but it downloads about 200 MB the first time.', plate_local_go: 'Recognize on my phone', scan_code: 'Type the number', scan_code_go: 'Look up', scan_code_ask: 'Type the digits printed under the barcode.', scan_code_bad: 'That number does not check out — read the digits again.', scan_type: 'Type name', scan_starting: 'Starting camera…', scan_point: 'Point at a barcode or QR code', scan_reading: 'Reading photo…', scan_cam: 'Camera unavailable — scan a photo or type the product name.', scan_nofind: 'No barcode or QR found in that photo. Try the live camera, or type the name.',
      lang_title: 'Choose your language', lang_sub: 'You can change it anytime. It stays with you, wherever you travel.', close: 'Close'
    },
    pt: {
      brand_sub: 'Companheiro de alimentação funcional', signin: 'Entrar', account: 'Conta', language: 'Idioma',
      nav_discover: 'Descobrir', nav_clean: 'Clean', nav_saved: 'Salvos', nav_protocols: 'Protocolos', nav_teas: 'Chás',
      disc_eyebrow: 'Sobremesas saudáveis primeiro', disc_h1: 'Coma doce. Sinta equilíbrio.', disc_p: 'Sobremesas de verdade com macros, o “porquê” funcional, trocas limpas e protocolos — para desejos que te querem bem.', disc_search_ph: 'Busque sobremesas, objetivos, ingredientes', disc_recommended: 'Recomendado para você',
      clean_eyebrow: 'Clean Check', clean_h1: 'Escaneie antes de cair na tentação.', clean_p: 'Veja o que um snack industrializado realmente faz — por ingredientes e processamento, não só calorias — e faça a versão HLC.', clean_scan: 'Escanear código de barras', clean_or: 'ou busque pelo nome', clean_input_ph: 'ex.: barra proteica, Nutella, leite de aveia', clean_check_btn: 'Verificar',
      clean_at_glance: 'Visão geral', clean_know: 'Alguns pontos pra saber', clean_know_lead: 'Sem pânico — quase todo industrializado tem alguns destes. Aqui o porquê, com um caminho mais limpo abaixo.', clean_swaps: 'Suas trocas mais limpas', clean_swaps_lead: 'Mesmo desejo, ingredientes melhores — veja onde ir no lugar.', clean_make_home: 'Faça em casa', clean_good_to_know: 'Bom saber', clean_recent: 'Buscas recentes', clean_clear: 'Limpar',
      clean_calq: 'Qualidade da caloria', clean_anti: '% magra anti-inflamatória', clean_contains: 'Alérgenos', clean_traces: 'Pode conter traços', clean_origin: 'Origem dos ingredientes', clean_made: 'Fabricado em', clean_origin_no: 'Não informado',
      clean_members_h: 'Escaneie qualquer snack. Veja a qualidade real.', clean_members_p: 'O Clean Check avalia o industrializado por processamento e ingredientes (não só calorias) e mostra a versão HLC pra fazer no lugar.', clean_unlock: 'Liberar com o HLC Club',
      diet_clean: '✓ Alimento clean', diet_gluten: 'Sem glúten', diet_lactose: 'Sem lactose', diet_dairy: 'Sem laticínios', diet_vegan: 'Vegano', diet_nosugar: 'Sem açúcar adicionado', diet_organic: 'Orgânico', diet_kosher: 'Kosher', diet_halal: 'Halal', diet_palmfree: 'Sem óleo de palma',
      saved_eyebrow: 'Sua biblioteca', saved_h1: 'Favoritos que lembram de você.', saved_p: 'Salve o que funciona pro seu corpo. Entre para sincronizar em todos os aparelhos.',
      prot_eyebrow: 'Programas funcionais', prot_h1: 'Rituais & Protocolos', prot_p: 'Protocolos funcionais guiados — compre um programa, ou tenha tudo com o Club.', prot_preview: 'Prévia do método · degustação grátis', prot_support: 'Suporte nível profissional · opcional',
      teas_eyebrow: 'Rituais de chá', teas_h1: 'Pequenos rituais. Grande sinal.', teas_p: 'Chás funcionais para digestão, desejos, estresse e sono.',
      rec_nutrition: 'Nutrição', rec_why: 'Por que nutre você', rec_lens: 'Lente de nutrição funcional', rec_edu: 'Apenas educativo — não é orientação médica.', rec_ingredients: 'Ingredientes', rec_swaps: 'Faça do seu jeito · trocas inteligentes', rec_save: 'Salvar favorito', rec_members_h: 'Receita exclusiva de membros', rec_members_p: 'Ingredientes, modo de preparo e trocas liberam com o HLC Club — mais as 18 receitas e todos os protocolos.', rec_unlock: 'Liberar com o HLC Club',
      auth_h: 'Entre ou crie sua conta', auth_p: 'Sem senha. Enviamos um código de 6 dígitos por e-mail.', auth_email_ph: 'voce@email.com', auth_send: 'Enviar meu código', auth_code_h: 'Digite seu código', auth_code_hint: 'Confira o código de 6 dígitos na sua caixa de entrada.', auth_verify: 'Verificar e continuar', auth_back: '← Usar outro e-mail',
      assess_eyebrow: 'Check-in de bem-estar', assess_h: 'Como você tem se sentido?', assess_p: 'Um check-in rápido e honesto — não há resposta certa. Vira seu ponto de partida, pra mostrarmos o quanto você evoluiu.', assess_dis: 'Um check-in de bem-estar pra personalizar sua experiência — não é diagnóstico médico.', assess_save: 'Salvar meu ponto de partida →',
      pay_eyebrow: 'Pagamento seguro', pay_go: 'Concluir pagamento seguro →', pay_fine: 'Protegido pela Stripe · conteúdo educativo, não é orientação médica',
      scan_title: 'Escanear um produto', scan_photo: 'Escanear de uma foto', plate_club: 'Você usou os scans de prato grátis de hoje. No Club é ilimitado.', plate_busy: 'Muita gente escaneando hoje — tente amanhã, ou entre no Club para ilimitado.', plate_local_ask: 'Servidor indisponível. Seu celular pode tentar sozinho, mas baixa cerca de 200 MB na primeira vez.', plate_local_go: 'Reconhecer no meu celular', scan_code: 'Digitar o número', scan_code_go: 'Buscar', scan_code_ask: 'Digite os números impressos embaixo do código de barras.', scan_code_bad: 'Esse número não confere — confira os dígitos.', scan_type: 'Digitar nome', scan_starting: 'Iniciando câmera…', scan_point: 'Aponte para um código de barras ou QR', scan_reading: 'Lendo a foto…', scan_cam: 'Câmera indisponível — escaneie uma foto ou digite o nome.', scan_nofind: 'Nenhum código encontrado na foto. Use a câmera ao vivo ou digite o nome.',
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
      scan_title: 'Escanear un producto', scan_photo: 'Escanear desde foto', plate_club: 'Usaste los escaneos de plato gratis de hoy. En el Club es ilimitado.', plate_busy: 'Hoy hay mucha gente escaneando — prueba mañana, o entra al Club.', plate_local_ask: 'Servidor no disponible. Tu teléfono puede intentarlo, pero descarga unos 200 MB la primera vez.', plate_local_go: 'Reconocer en mi teléfono', scan_code: 'Escribir el número', scan_code_go: 'Buscar', scan_code_ask: 'Escribe los números impresos debajo del código de barras.', scan_code_bad: 'Ese número no cuadra — revisa los dígitos.', scan_type: 'Escribir nombre', scan_starting: 'Iniciando cámara…', scan_point: 'Apunta a un código de barras o QR', scan_reading: 'Leyendo la foto…', scan_cam: 'Cámara no disponible — escanea una foto o escribe el nombre.', scan_nofind: 'No se encontró ningún código en la foto. Usa la cámara o escribe el nombre.',
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
      scan_title: 'Scansiona un prodotto', scan_photo: 'Scansiona da foto', plate_club: 'Hai usato le scansioni di piatto gratuite di oggi. Nel Club è illimitato.', plate_busy: 'Oggi scansionano in tanti — riprova domani, o entra nel Club.', plate_local_ask: 'Server non disponibile. Il telefono può provare da solo, ma scarica circa 200 MB la prima volta.', plate_local_go: 'Riconosci sul telefono', scan_code: 'Scrivi il numero', scan_code_go: 'Cerca', scan_code_ask: 'Scrivi le cifre stampate sotto il codice a barre.', scan_code_bad: 'Il numero non torna — ricontrolla le cifre.', scan_type: 'Scrivi il nome', scan_starting: 'Avvio fotocamera…', scan_point: 'Inquadra un codice a barre o QR', scan_reading: 'Lettura della foto…', scan_cam: 'Fotocamera non disponibile — scansiona una foto o scrivi il nome.', scan_nofind: 'Nessun codice trovato nella foto. Usa la fotocamera o scrivi il nome.',
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
      scan_title: '扫描产品', scan_photo: '从照片扫描', plate_club: '今天的免费餐盘识别已用完。加入 Club 可无限使用。', plate_busy: '今天使用的人很多——请明天再试，或加入 Club。', plate_local_ask: '服务器不可用。手机可以自行识别，但首次需下载约 200 MB。', plate_local_go: '在手机上识别', scan_code: '输入条码数字', scan_code_go: '查询', scan_code_ask: '请输入条形码下方印刷的数字。', scan_code_bad: '该数字校验不通过 — 请重新核对。', scan_type: '输入名称', scan_starting: '正在启动相机…', scan_point: '对准条形码或二维码', scan_reading: '正在读取照片…', scan_cam: '相机不可用——请扫描照片或输入名称。', scan_nofind: '照片中未找到条码或二维码。请使用相机或输入名称。',
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
      scan_title: 'उत्पाद स्कैन करें', scan_photo: 'फ़ोटो से स्कैन करें', plate_club: 'आज के मुफ़्त प्लेट स्कैन खत्म हो गए। Club में असीमित है।', plate_busy: 'आज बहुत लोग स्कैन कर रहे हैं — कल फिर देखें, या Club लें।', plate_local_ask: 'सर्वर उपलब्ध नहीं। फ़ोन खुद कोशिश कर सकता है, पर पहली बार लगभग 200 MB डाउनलोड होगा।', plate_local_go: 'फ़ोन पर पहचानें', scan_code: 'नंबर लिखें', scan_code_go: 'खोजें', scan_code_ask: 'बारकोड के नीचे छपे अंक लिखें।', scan_code_bad: 'यह नंबर मेल नहीं खाता — अंक दोबारा देखें।', scan_type: 'नाम लिखें', scan_starting: 'कैमरा शुरू हो रहा है…', scan_point: 'बारकोड या QR पर निशाना लगाएँ', scan_reading: 'फ़ोटो पढ़ी जा रही है…', scan_cam: 'कैमरा उपलब्ध नहीं — फ़ोटो स्कैन करें या नाम लिखें।', scan_nofind: 'उस फ़ोटो में कोई बारकोड/QR नहीं मिला। कैमरा इस्तेमाल करें या नाम लिखें।',
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
      scan_title: 'סריקת מוצר', scan_photo: 'סריקה מתמונה', plate_club: 'ניצלת את סריקות הצלחת החינמיות של היום. ב-Club זה ללא הגבלה.', plate_busy: 'הרבה אנשים סורקים היום — נסי מחר, או הצטרפי ל-Club.', plate_local_ask: 'השרת לא זמין. הטלפון יכול לנסות לבד, אבל יוריד כ-200 MB בפעם הראשונה.', plate_local_go: 'לזהות בטלפון', scan_code: 'הקלדת המספר', scan_code_go: 'חיפוש', scan_code_ask: 'הקלידי את הספרות המודפסות מתחת לברקוד.', scan_code_bad: 'המספר לא מסתדר — בדקי את הספרות.', scan_type: 'הקלדת שם', scan_starting: 'מפעיל מצלמה…', scan_point: 'כווני אל ברקוד או QR', scan_reading: 'קורא את התמונה…', scan_cam: 'המצלמה לא זמינה — סרקי תמונה או הקלידי שם.', scan_nofind: 'לא נמצא ברקוד או QR בתמונה. נסי מצלמה חיה, או הקלידי שם.',
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

  // Inflammation layer keys (Clean Check).
  var INFL = {
    en: { clean_inflammation: 'Inflammation load', clean_inflammation_lead: 'How much this tilts your body toward inflammation — and the easy swaps to lower it.', infl_high: 'High', infl_moderate: 'Moderate', infl_low: 'Low', clean_swap_to: 'try', clean_boost: 'Make it work harder', clean_proto_cta: 'Calm the inflammation at the source', clean_proto_sub: 'Anti-Inflammatory Foundation protocol →' },
    pt: { clean_inflammation: 'Carga inflamatória', clean_inflammation_lead: 'O quanto isto inclina seu corpo à inflamação — e as trocas fáceis pra baixar.', infl_high: 'Alta', infl_moderate: 'Moderada', infl_low: 'Baixa', clean_swap_to: 'troque por', clean_boost: 'Faça render mais', clean_proto_cta: 'Acalme a inflamação na origem', clean_proto_sub: 'Protocolo Anti-Inflamatório →' },
    es: { clean_inflammation: 'Carga inflamatoria', clean_inflammation_lead: 'Cuánto inclina tu cuerpo hacia la inflamación — y los cambios fáciles para bajarla.', infl_high: 'Alta', infl_moderate: 'Moderada', infl_low: 'Baja', clean_swap_to: 'cámbialo por', clean_boost: 'Que rinda más', clean_proto_cta: 'Calma la inflamación desde la raíz', clean_proto_sub: 'Protocolo Antiinflamatorio →' },
    it: { clean_inflammation: 'Carico infiammatorio', clean_inflammation_lead: 'Quanto spinge il corpo verso l’infiammazione — e gli scambi facili per abbassarla.', infl_high: 'Alto', infl_moderate: 'Moderato', infl_low: 'Basso', clean_swap_to: 'prova', clean_boost: 'Fallo rendere di più', clean_proto_cta: 'Calma l’infiammazione alla radice', clean_proto_sub: 'Protocollo Antinfiammatorio →' },
    zh: { clean_inflammation: '炎症负荷', clean_inflammation_lead: '这会让身体多偏向炎症——以及降低它的简单替换。', infl_high: '高', infl_moderate: '中', infl_low: '低', clean_swap_to: '换成', clean_boost: '让它更有益', clean_proto_cta: '从源头平息炎症', clean_proto_sub: '抗炎基础方案 →' },
    hi: { clean_inflammation: 'सूजन भार', clean_inflammation_lead: 'यह शरीर को सूजन की ओर कितना झुकाता है — और इसे घटाने के आसान विकल्प।', infl_high: 'अधिक', infl_moderate: 'मध्यम', infl_low: 'कम', clean_swap_to: 'इसके बदले लें', clean_boost: 'इसे और बेहतर बनाएँ', clean_proto_cta: 'सूजन को जड़ से शांत करें', clean_proto_sub: 'सूजनरोधी फाउंडेशन प्रोटोकॉल →' },
    he: { clean_inflammation: 'עומס דלקתי', clean_inflammation_lead: 'כמה זה מטה את הגוף לכיוון דלקת — והחלפות הקלות שמורידות אותו.', infl_high: 'גבוה', infl_moderate: 'בינוני', infl_low: 'נמוך', clean_swap_to: 'נסי', clean_boost: 'שיעבוד חזק יותר', clean_proto_cta: 'הרגיעי את הדלקת מהשורש', clean_proto_sub: 'פרוטוקול אנטי-דלקתי →' }
  };
  Object.keys(INFL).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], INFL[l]); });

  // Rate-my-plate tool keys.
  var PLATE = {
    en: { cc_product: 'Scan or search', cc_plate: 'Rate my plate', plate_lead: 'Add what you ate today — we’ll score how anti-inflammatory your plate is, and what to add next.', plate_ph: 'add a food — e.g. salmon, berries, white bread', plate_summary: 'Your plate’s anti-inflammatory score. Add more greens, omega-3 and color to lift it.', plate_lifting: 'Lifting you up', plate_weighing: 'Weighing you down', plate_tip_swap: 'Swap one inflammatory item for an anti-inflammatory one — salmon, leafy greens, berries or olive oil.', plate_tip_great: 'Beautiful, anti-inflammatory plate — this is exactly the pattern that calms the body.', plate_tip_add: 'Add an anti-inflammatory hero — oily fish, leafy greens, berries, turmeric or extra-virgin olive oil.' },
    pt: { cc_product: 'Escanear ou buscar', cc_plate: 'Avalie seu prato', plate_lead: 'Adicione o que você comeu hoje — a gente pontua o quanto seu prato é anti-inflamatório e o que somar.', plate_ph: 'adicione um alimento — ex.: salmão, frutas vermelhas, pão branco', plate_summary: 'O score anti-inflamatório do seu prato. Some folhas, ômega-3 e cor pra subir.', plate_lifting: 'Puxando pra cima', plate_weighing: 'Puxando pra baixo', plate_tip_swap: 'Troque um item inflamatório por um anti-inflamatório — salmão, folhas verdes, frutas vermelhas ou azeite.', plate_tip_great: 'Prato lindo e anti-inflamatório — é exatamente o padrão que acalma o corpo.', plate_tip_add: 'Adicione um herói anti-inflamatório — peixe gordo, folhas verdes, frutas vermelhas, cúrcuma ou azeite extravirgem.' },
    es: { cc_product: 'Escanear o buscar', cc_plate: 'Evalúa tu plato', plate_lead: 'Agrega lo que comiste hoy — puntuamos qué tan antiinflamatorio es tu plato y qué sumar.', plate_ph: 'agrega un alimento — ej.: salmón, frutos rojos, pan blanco', plate_summary: 'El puntaje antiinflamatorio de tu plato. Suma verdes, omega-3 y color para subirlo.', plate_lifting: 'Te elevan', plate_weighing: 'Te pesan', plate_tip_swap: 'Cambia un alimento inflamatorio por uno antiinflamatorio — salmón, verdes, frutos rojos o aceite de oliva.', plate_tip_great: 'Plato hermoso y antiinflamatorio — justo el patrón que calma el cuerpo.', plate_tip_add: 'Agrega un héroe antiinflamatorio — pescado azul, verdes, frutos rojos, cúrcuma o aceite de oliva virgen extra.' },
    it: { cc_product: 'Scansiona o cerca', cc_plate: 'Valuta il piatto', plate_lead: 'Aggiungi ciò che hai mangiato oggi — valutiamo quanto è antinfiammatorio il tuo piatto e cosa aggiungere.', plate_ph: 'aggiungi un alimento — es.: salmone, frutti di bosco, pane bianco', plate_summary: 'Il punteggio antinfiammatorio del tuo piatto. Aggiungi verdure, omega-3 e colore per alzarlo.', plate_lifting: 'Ti sollevano', plate_weighing: 'Ti appesantiscono', plate_tip_swap: 'Sostituisci un alimento infiammatorio con uno antinfiammatorio — salmone, verdure, frutti di bosco o olio d’oliva.', plate_tip_great: 'Piatto bellissimo e antinfiammatorio — proprio lo schema che calma il corpo.', plate_tip_add: 'Aggiungi un eroe antinfiammatorio — pesce grasso, verdure, frutti di bosco, curcuma o olio extravergine.' },
    zh: { cc_product: '扫描或搜索', cc_plate: '评估我的餐盘', plate_lead: '添加你今天吃的——我们会评估你的餐盘有多抗炎，以及还能加什么。', plate_ph: '添加食物——如三文鱼、莓果、白面包', plate_summary: '你餐盘的抗炎得分。多加绿叶菜、omega-3 和色彩来提升。', plate_lifting: '为你加分', plate_weighing: '拖你后腿', plate_tip_swap: '把一个促炎食物换成抗炎的——三文鱼、绿叶菜、莓果或橄榄油。', plate_tip_great: '漂亮的抗炎餐盘——正是让身体平静的模式。', plate_tip_add: '加一个抗炎主力——多脂鱼、绿叶菜、莓果、姜黄或特级初榨橄榄油。' },
    hi: { cc_product: 'स्कैन या खोजें', cc_plate: 'मेरी थाली आँकें', plate_lead: 'आज जो खाया जोड़ें — हम आँकेंगे कि आपकी थाली कितनी सूजनरोधी है और आगे क्या जोड़ें।', plate_ph: 'भोजन जोड़ें — जैसे सैल्मन, बेरी, सफेद ब्रेड', plate_summary: 'आपकी थाली का सूजनरोधी स्कोर। हरी सब्ज़ियाँ, ओमेगा-3 और रंग जोड़कर बढ़ाएँ।', plate_lifting: 'आपको ऊपर उठाते', plate_weighing: 'आपको नीचे खींचते', plate_tip_swap: 'एक सूजन बढ़ाने वाला आइटम सूजनरोधी से बदलें — सैल्मन, हरी सब्ज़ियाँ, बेरी या जैतून तेल।', plate_tip_great: 'सुंदर, सूजनरोधी थाली — यही पैटर्न शरीर को शांत करता है।', plate_tip_add: 'एक सूजनरोधी नायक जोड़ें — तैलीय मछली, हरी सब्ज़ियाँ, बेरी, हल्दी या एक्स्ट्रा-वर्जिन जैतून तेल।' },
    he: { cc_product: 'סריקה או חיפוש', cc_plate: 'דרגי את הצלחת', plate_lead: 'הוסיפי מה שאכלת היום — נדרג כמה הצלחת שלך אנטי-דלקתית, ומה כדאי להוסיף.', plate_ph: 'הוסיפי מאכל — למשל סלמון, פירות יער, לחם לבן', plate_summary: 'הציון האנטי-דלקתי של הצלחת. הוסיפי ירקות ירוקים, אומגה-3 וצבע כדי להעלות.', plate_lifting: 'מרימים אותך', plate_weighing: 'מכבידים עלייך', plate_tip_swap: 'החליפי פריט דלקתי באנטי-דלקתי — סלמון, ירקות עליים, פירות יער או שמן זית.', plate_tip_great: 'צלחת יפה ואנטי-דלקתית — בדיוק הדפוס שמרגיע את הגוף.', plate_tip_add: 'הוסיפי גיבור אנטי-דלקתי — דג שמן, ירקות עליים, פירות יער, כורכום או שמן זית כתית מעולה.' }
  };
  Object.keys(PLATE).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], PLATE[l]); });
  var PLATE2 = {
    en: { plate_scan: 'Scan my plate', plate_or: 'or add foods manually', plate_found: 'Found {n} foods — here’s your plate', plate_noid: 'Couldn’t read the plate. Try a clearer photo, or add foods manually.' },
    pt: { plate_scan: 'Escanear meu prato', plate_or: 'ou adicione alimentos manualmente', plate_found: '{n} alimentos encontrados — eis seu prato', plate_noid: 'Não consegui ler o prato. Tente uma foto mais nítida ou adicione manualmente.' },
    es: { plate_scan: 'Escanear mi plato', plate_or: 'o agrega alimentos manualmente', plate_found: '{n} alimentos encontrados — este es tu plato', plate_noid: 'No pude leer el plato. Prueba una foto más clara o agrega manualmente.' },
    it: { plate_scan: 'Scansiona il mio piatto', plate_or: 'o aggiungi alimenti manualmente', plate_found: '{n} alimenti trovati — ecco il tuo piatto', plate_noid: 'Non sono riuscita a leggere il piatto. Prova una foto più nitida o aggiungi manualmente.' },
    zh: { plate_scan: '扫描我的餐盘', plate_or: '或手动添加食物', plate_found: '找到 {n} 种食物——这是你的餐盘', plate_noid: '无法识别餐盘。请拍更清晰的照片，或手动添加。' },
    hi: { plate_scan: 'मेरी थाली स्कैन करें', plate_or: 'या भोजन मैन्युअल रूप से जोड़ें', plate_found: '{n} खाद्य पदार्थ मिले — यह रही आपकी थाली', plate_noid: 'थाली नहीं पढ़ पाया। साफ़ फ़ोटो लें या मैन्युअल रूप से जोड़ें।' },
    he: { plate_scan: 'סריקת הצלחת שלי', plate_or: 'או הוסיפי מאכלים ידנית', plate_found: 'נמצאו {n} מאכלים — הנה הצלחת שלך', plate_noid: 'לא הצלחתי לקרוא את הצלחת. נסי תמונה ברורה יותר, או הוסיפי ידנית.' }
  };
  Object.keys(PLATE2).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], PLATE2[l]); });
  var CAL = {
    en: { plate_kcal: 'calories', mac_protein: 'Protein', mac_carbs: 'Carbs', mac_fat: 'Fat', plate_est_note: 'Estimated from your photo — portions are approximate.' },
    pt: { plate_kcal: 'calorias', mac_protein: 'Proteína', mac_carbs: 'Carbo', mac_fat: 'Gordura', plate_est_note: 'Estimado pela sua foto — porções são aproximadas.' },
    es: { plate_kcal: 'calorías', mac_protein: 'Proteína', mac_carbs: 'Carbo', mac_fat: 'Grasa', plate_est_note: 'Estimado por tu foto — las porciones son aproximadas.' },
    it: { plate_kcal: 'calorie', mac_protein: 'Proteine', mac_carbs: 'Carbo', mac_fat: 'Grassi', plate_est_note: 'Stimato dalla tua foto — le porzioni sono approssimative.' },
    zh: { plate_kcal: '卡路里', mac_protein: '蛋白质', mac_carbs: '碳水', mac_fat: '脂肪', plate_est_note: '根据照片估算——份量为近似值。' },
    hi: { plate_kcal: 'कैलोरी', mac_protein: 'प्रोटीन', mac_carbs: 'कार्ब्स', mac_fat: 'वसा', plate_est_note: 'आपकी फ़ोटो से अनुमानित — मात्रा अनुमानित है।' },
    he: { plate_kcal: 'קלוריות', mac_protein: 'חלבון', mac_carbs: 'פחמימות', mac_fat: 'שומן', plate_est_note: 'הערכה מהתמונה — הכמויות מקורבות.' }
  };
  Object.keys(CAL).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], CAL[l]); });

  // Nav "Rituals" (Protocols + Teas merged) + first-run tutorial. nav_rituals & the
  // short button keys exist for every language (a missing key would render the raw key);
  // full slide prose ships EN+PT (launch markets US+BR) and falls back to EN elsewhere.
  var ONB = {
    en: {
      nav_rituals: 'Rituals', howto: 'How HLC works',
      onb_skip: 'Skip', onb_next: 'Next', onb_start: 'Start free', onb_have_account: 'I already have an account',
      onb1_eyebrow: 'Welcome to HLC Club', onb1_h: 'Eat for how you want to feel.', onb1_p: 'Your functional-nutrition companion — real food, real reasons, zero guilt.',
      onb2_eyebrow: 'Plan · tuned to you', onb2_h: 'Your week, already planned.', onb2_p: 'A 7-day plan of real meals — breakfast to dessert — tuned to your goals, turned into one tap-to-shop grocery list.',
      onb3_eyebrow: 'Track · every day', onb3_h: 'Show up for yourself, daily.', onb3_p: 'Check off your meals, log energy, water and weight, and keep your streak — your whole week at a glance.',
      onb4_eyebrow: 'Coach · knows you', onb4_h: 'A coach that actually knows you.', onb4_p: 'Your Coach opens knowing your plan and how you’ve been feeling — and points you to real recipes and clean swaps. Scan any food, too.',
      onb_cta_h: 'Ready when you are.', onb_cta_p: 'No card needed — jump into whatever you feel like right now.', onb_go_scan: 'Scan a snack', onb_go_coach: 'Meet your Coach', onb_go_recipes: 'Browse recipes'
    },
    pt: {
      nav_rituals: 'Rituais', howto: 'Como o HLC funciona',
      onb_skip: 'Pular', onb_next: 'Avançar', onb_start: 'Começar grátis', onb_have_account: 'Já tenho conta',
      onb1_eyebrow: 'Bem-vinda ao HLC Club', onb1_h: 'Coma para se sentir como você quer.', onb1_p: 'Seu companheiro de nutrição funcional — comida de verdade, motivos de verdade, zero culpa.',
      onb2_eyebrow: 'Plano · sob medida', onb2_h: 'Sua semana, já planejada.', onb2_p: 'Um plano de 7 dias de comida de verdade — do café à sobremesa — sob medida pros seus objetivos, virando uma lista de compras num toque.',
      onb3_eyebrow: 'Acompanhe · todo dia', onb3_h: 'Apareça por você, todo dia.', onb3_p: 'Marque suas refeições, registre energia, água e peso, e mantenha seu streak — a semana inteira num olhar.',
      onb4_eyebrow: 'Coach · te conhece', onb4_h: 'Um coach que conhece você de verdade.', onb4_p: 'Seu Coach abre sabendo seu plano e como você tem se sentido — e aponta receitas de verdade e trocas limpas. E escaneia qualquer comida também.',
      onb_cta_h: 'Pronta quando você estiver.', onb_cta_p: 'Sem cartão — vá direto para o que te apetece agora.', onb_go_scan: 'Escanear um snack', onb_go_coach: 'Conhecer seu Coach', onb_go_recipes: 'Ver receitas'
    },
    es: { nav_rituals: 'Rituales', howto: 'Cómo funciona HLC', onb_skip: 'Saltar', onb_next: 'Siguiente', onb_start: 'Empezar gratis', onb_have_account: 'Ya tengo cuenta', onb_go_scan: 'Escanear un snack', onb_go_coach: 'Conoce tu Coach', onb_go_recipes: 'Ver recetas' },
    it: { nav_rituals: 'Rituali', howto: 'Come funziona HLC', onb_skip: 'Salta', onb_next: 'Avanti', onb_start: 'Inizia gratis', onb_have_account: 'Ho già un account', onb_go_scan: 'Scansiona uno snack', onb_go_coach: 'Conosci il Coach', onb_go_recipes: 'Vedi le ricette' },
    zh: { nav_rituals: '仪式', howto: 'HLC 如何运作', onb_skip: '跳过', onb_next: '下一步', onb_start: '免费开始', onb_have_account: '我已有账户', onb_go_scan: '扫描零食', onb_go_coach: '认识你的教练', onb_go_recipes: '浏览食谱' },
    hi: { nav_rituals: 'अनुष्ठान', howto: 'HLC कैसे काम करता है', onb_skip: 'छोड़ें', onb_next: 'आगे', onb_start: 'मुफ़्त शुरू करें', onb_have_account: 'मेरा खाता पहले से है', onb_go_scan: 'स्नैक स्कैन करें', onb_go_coach: 'अपना कोच जानें', onb_go_recipes: 'रेसिपी देखें' },
    he: { nav_rituals: 'טקסים', howto: 'איך HLC עובד', onb_skip: 'דלג', onb_next: 'הבא', onb_start: 'התחילי בחינם', onb_have_account: 'כבר יש לי חשבון', onb_go_scan: 'סרקי חטיף', onb_go_coach: 'הכירי את הקואץ׳', onb_go_recipes: 'עיון במתכונים' }
  };
  Object.keys(ONB).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], ONB[l]); });

  // Guest Coach taste — the warm wall shown after the free messages are spent (all languages).
  var COACHW = {
    en: { coach_wall_h: 'Keep chatting with your Coach', coach_wall_p: 'Create a free account and your Coach keeps going — tuned to your goals, with your history saved.', coach_wall_cta: 'Sign in / Join free', coach_ph_guest_blocked: 'Sign in to keep chatting…' },
    pt: { coach_wall_h: 'Continue com seu Coach', coach_wall_p: 'Crie uma conta grátis e seu Coach continua — no seu ritmo, com seu histórico salvo.', coach_wall_cta: 'Entrar / Criar grátis', coach_ph_guest_blocked: 'Entre para continuar…' },
    es: { coach_wall_h: 'Sigue con tu Coach', coach_wall_p: 'Crea una cuenta gratis y tu Coach continúa — a tu ritmo, con tu historial guardado.', coach_wall_cta: 'Entrar / Únete gratis', coach_ph_guest_blocked: 'Entra para seguir…' },
    it: { coach_wall_h: 'Continua col tuo Coach', coach_wall_p: 'Crea un account gratis e il tuo Coach prosegue — sui tuoi obiettivi, con lo storico salvato.', coach_wall_cta: 'Accedi / Iscriviti gratis', coach_ph_guest_blocked: 'Accedi per continuare…' },
    zh: { coach_wall_h: '继续和你的教练聊', coach_wall_p: '创建免费账户，教练继续陪你——贴合你的目标，并保存聊天记录。', coach_wall_cta: '登录 / 免费加入', coach_ph_guest_blocked: '登录后继续…' },
    hi: { coach_wall_h: 'अपने कोच के साथ जारी रखें', coach_wall_p: 'मुफ़्त खाता बनाएँ और आपका कोच चलता रहे — आपके लक्ष्यों पर, इतिहास सहेजा हुआ।', coach_wall_cta: 'साइन इन / मुफ़्त जुड़ें', coach_ph_guest_blocked: 'जारी रखने के लिए साइन इन करें…' },
    he: { coach_wall_h: 'המשיכי עם הקואץ׳ שלך', coach_wall_p: 'צרי חשבון חינם והקואץ׳ ממשיך — לפי המטרות שלך, עם היסטוריה שמורה.', coach_wall_cta: 'כניסה / הצטרפי חינם', coach_ph_guest_blocked: 'התחברי כדי להמשיך…' }
  };
  Object.keys(COACHW).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], COACHW[l]); });

  // Scanner: nudge to the more reliable photo path when a live scan stalls (all languages).
  var SCANHINT = {
    en: { scan_hint_photo: "Not reading? Tap “Scan from photo” for a sharp shot — or type the name." },
    pt: { scan_hint_photo: "Não lê? Toque em “Escanear de uma foto” pra uma foto nítida — ou digite o nome." },
    es: { scan_hint_photo: "¿No lee? Toca “Escanear desde foto” para una foto nítida — o escribe el nombre." },
    it: { scan_hint_photo: "Non legge? Tocca “Scansiona da foto” per uno scatto nitido — o scrivi il nome." },
    zh: { scan_hint_photo: "读不出？点“从照片扫描”拍一张清晰照片——或输入名称。" },
    hi: { scan_hint_photo: "नहीं पढ़ रहा? साफ़ फ़ोटो के लिए “फ़ोटो से स्कैन करें” दबाएँ — या नाम लिखें।" },
    he: { scan_hint_photo: "לא קורא? הקישי “סריקה מתמונה” לצילום חד — או הקלידי שם." }
  };
  Object.keys(SCANHINT).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], SCANHINT[l]); });

  // Clean Check name-search: pick from a list of real matches (all languages).
  var CLEANPICK = {
    en: { clean_pick: 'Pick your product', clean_nomatch_h: 'No match found', clean_nomatch_p: 'Try fewer words or the brand — or scan the barcode.', clean_showing_for: 'Showing results for' },
    pt: { clean_pick: 'Escolha seu produto', clean_nomatch_h: 'Nada encontrado', clean_nomatch_p: 'Tente menos palavras ou a marca — ou escaneie o código de barras.', clean_showing_for: 'Mostrando resultados para' },
    es: { clean_pick: 'Elige tu producto', clean_nomatch_h: 'Sin coincidencias', clean_nomatch_p: 'Prueba menos palabras o la marca — o escanea el código de barras.', clean_showing_for: 'Mostrando resultados para' },
    it: { clean_pick: 'Scegli il prodotto', clean_nomatch_h: 'Nessuna corrispondenza', clean_nomatch_p: 'Prova con meno parole o la marca — o scansiona il codice a barre.', clean_showing_for: 'Risultati per' },
    zh: { clean_pick: '选择你的产品', clean_nomatch_h: '未找到匹配', clean_nomatch_p: '试试更少的词或品牌名——或扫描条形码。', clean_showing_for: '显示结果：' },
    hi: { clean_pick: 'अपना उत्पाद चुनें', clean_nomatch_h: 'कोई मिलान नहीं', clean_nomatch_p: 'कम शब्द या ब्रांड आज़माएँ — या बारकोड स्कैन करें।', clean_showing_for: 'परिणाम:' },
    he: { clean_pick: 'בחרי את המוצר', clean_nomatch_h: 'לא נמצאה התאמה', clean_nomatch_p: 'נסי פחות מילים או את המותג — או סרקי ברקוד.', clean_showing_for: 'תוצאות עבור' }
  };
  Object.keys(CLEANPICK).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], CLEANPICK[l]); });

  // Daypart filter + recipe method (steps) + broadened copy (catalog is no longer desserts-only).
  var DPV = {
    en: { dp_all: 'All', dp_breakfast: 'Breakfast', dp_lunch: 'Lunch', dp_dinner: 'Dinner', dp_snack: 'Snack', dp_drink: 'Drink', dp_dessert: 'Dessert', rec_steps: 'Method', disc_search_ph: 'Search recipes, goals, ingredients', rec_members_p: 'Ingredients, method and swaps unlock with HLC Club — plus every recipe and protocol.' },
    pt: { dp_all: 'Tudo', dp_breakfast: 'Café da manhã', dp_lunch: 'Almoço', dp_dinner: 'Jantar', dp_snack: 'Lanche', dp_drink: 'Bebida', dp_dessert: 'Sobremesa', rec_steps: 'Modo de preparo', disc_search_ph: 'Busque receitas, objetivos, ingredientes', rec_members_p: 'Ingredientes, modo de preparo e trocas liberam com o HLC Club — além de todas as receitas e protocolos.' },
    es: { dp_all: 'Todo', dp_breakfast: 'Desayuno', dp_lunch: 'Almuerzo', dp_dinner: 'Cena', dp_snack: 'Snack', dp_drink: 'Bebida', dp_dessert: 'Postre', rec_steps: 'Preparación', disc_search_ph: 'Busca recetas, objetivos, ingredientes', rec_members_p: 'Ingredientes, preparación y sustituciones se desbloquean con HLC Club — más todas las recetas y protocolos.' },
    it: { dp_all: 'Tutto', dp_breakfast: 'Colazione', dp_lunch: 'Pranzo', dp_dinner: 'Cena', dp_snack: 'Spuntino', dp_drink: 'Bevanda', dp_dessert: 'Dolce', rec_steps: 'Preparazione', disc_search_ph: 'Cerca ricette, obiettivi, ingredienti', rec_members_p: 'Ingredienti, preparazione e sostituzioni si sbloccano con HLC Club — più tutte le ricette e i protocolli.' },
    zh: { dp_all: '全部', dp_breakfast: '早餐', dp_lunch: '午餐', dp_dinner: '晚餐', dp_snack: '零食', dp_drink: '饮品', dp_dessert: '甜点', rec_steps: '做法', disc_search_ph: '搜索食谱、目标、食材', rec_members_p: '配料、做法和替换方案随 HLC Club 解锁 — 还有全部食谱和方案。' },
    hi: { dp_all: 'सभी', dp_breakfast: 'नाश्ता', dp_lunch: 'दोपहर का भोजन', dp_dinner: 'रात का भोजन', dp_snack: 'स्नैक', dp_drink: 'पेय', dp_dessert: 'मिठाई', rec_steps: 'विधि', disc_search_ph: 'रेसिपी, लक्ष्य, सामग्री खोजें', rec_members_p: 'सामग्री, विधि और स्वैप HLC Club के साथ अनलॉक होते हैं — साथ में हर रेसिपी और प्रोटोकॉल।' },
    he: { dp_all: 'הכול', dp_breakfast: 'ארוחת בוקר', dp_lunch: 'ארוחת צהריים', dp_dinner: 'ארוחת ערב', dp_snack: 'חטיף', dp_drink: 'משקה', dp_dessert: 'קינוח', rec_steps: 'אופן הכנה', disc_search_ph: 'חיפוש מתכונים, מטרות, מרכיבים', rec_members_p: 'המרכיבים, אופן ההכנה וההחלפות נפתחים עם HLC Club — יחד עם כל המתכונים והפרוטוקולים.' }
  };
  Object.keys(DPV).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], DPV[l]); });

  // My Week — 7-day plan -> one grocery list -> scan loop.
  var WEEK = {
    en: {
      wd_mon: 'MON', wd_tue: 'TUE', wd_wed: 'WED', wd_thu: 'THU', wd_fri: 'FRI', wd_sat: 'SAT', wd_sun: 'SUN',
      week_eyebrow: 'Your week', week_empty_h: 'A week that fits your goal', week_empty_p: 'Auto-build a 7-day plan — breakfast, lunch and dinner tuned to you — then get it as one grocery list.', week_build: 'Build my week', week_reroll: 'Reshuffle',
      week_mini: 'Your 7-day plan', week_meals: 'meals planned', week_day_total: 'Your day', week_protein: 'protein',
      week_grocery: 'Grocery list for the week', week_grocery_h: 'Your grocery list', week_grocery_items: 'ingredients across your plan', week_grocery_deliver: 'Get it all delivered · Instacart', week_grocery_scan: 'Scan while you shop', week_grocery_locked: 'club meals — join the Club for their full ingredient list.', week_grocery_empty: 'Build your week to get a grocery list.',
      disc_eyebrow: 'Functional food, all day', disc_p: 'Real food, breakfast to dessert — tuned to how you want to feel.',
      streak_days: 'day streak', streak_best: 'best',
      nav_today: 'Today', nav_recipes: 'Recipes', nav_scan: 'Scan', nav_you: 'You',
      today_eyebrow: 'Your day', today_h1: 'Today, with you.', today_p: 'Your plan, your check-in, your streak — one calm place to show up for yourself.',
      today_coach_generic: 'Bloated, low on energy, or craving something? Ask your Coach — it knows your plan and your day.', today_coach_cta: 'Ask your Coach',
      you_programs: 'Programs & Rituals', you_programs_sub: 'Guided protocols + tea rituals',
      rec_addweek: 'Add to my week', rec_addpick: 'Add to', rec_added: 'Added', rec_added_to: 'Added to', rec_serves: 'servings', rec_share: 'Share', rec_share_text: "A HLC recipe you'll love", shared_copied: 'Link copied — share it anywhere.',
      start_h: 'Get started', start_skip: 'Skip', start_week: 'Build your week', start_log: 'Log your first day', start_coach: 'Ask your Coach anything', start_done: "You're all set — a beautiful start.",
      prog_h: 'Your progress', prog_best: 'best', prog_logged: 'days logged', prog_weight: 'Weight',
      today_h: 'Today', today_days: 'days logged', today_meals: 'Meals', today_energy: 'Energy', today_water: 'Water', today_cups: 'cups', today_weight: 'Weight', today_wunit: 'lb', today_noplan: 'Build your week to check off meals', energy_low: 'Low', energy_ok: 'OK', energy_great: 'Great',
      coach_today_intro: "Here's your plan for today", coach_today_tap: 'Tap one to open it, or reshuffle from Discover.', coach_today_none: 'You don\'t have a week plan yet — tap "Build my week" on Discover and I\'ll tailor breakfast, lunch and dinner to your goals.',
      pay_engaged: "You've already planned your week and started tracking — this unlocks the whole companion.", pay_note: 'Your whole functional-nutrition companion, in one membership.',
      oura_connect: 'Connect your Oura Ring', oura_connected: 'Oura Ring connected', oura_disconnect: 'Disconnect', oura_soon: 'Oura connect is not available yet.', oura_err: "Couldn't start Oura connect.", oura_off: 'Oura disconnected.', oura_ok: 'Oura Ring connected.',
      coach_ins_sleep_lead: 'Go gentle and steady today — your sleep dipped.', coach_ins_sleep: "Short sleep nudges up cortisol, your body's built-in alarm hormone, along with your hunger signals, so quick-sugar cravings hit by afternoon. A protein-forward breakfast steadies your blood sugar and softens that crash.",
      coach_ins_h: 'A note from your Coach', coach_ins_energy_lead: 'Anchor your morning with protein.', coach_ins_energy: "A couple of low-energy days lately. Protein plus steadier carbs at breakfast keeps your blood-sugar curve slower and flatter — fewer spikes, fewer crashes, more even energy — so your morning holds. Here are a couple from your kitchen.", coach_ins_water_lead: 'Have a glass of water.', coach_ins_water: "You're a little under today — and even mild dehydration reads to your brain as tiredness and hunger, so a glass now can quiet cravings and ease the afternoon dip.", coach_ins_streak_lead: 'days in a row — lovely consistency.', coach_ins_streak_why: 'Want ideas to keep it feeling fresh?'
    },
    pt: {
      wd_mon: 'SEG', wd_tue: 'TER', wd_wed: 'QUA', wd_thu: 'QUI', wd_fri: 'SEX', wd_sat: 'SÁB', wd_sun: 'DOM',
      week_eyebrow: 'Sua semana', week_empty_h: 'Uma semana que encaixa no seu objetivo', week_empty_p: 'Monte um plano de 7 dias — café, almoço e jantar tunados pra você — e receba tudo numa lista de compras só.', week_build: 'Montar minha semana', week_reroll: 'Refazer',
      week_mini: 'Seu plano de 7 dias', week_meals: 'refeições planejadas', week_day_total: 'Seu dia', week_protein: 'proteína',
      week_grocery: 'Lista de compras da semana', week_grocery_h: 'Sua lista de compras', week_grocery_items: 'ingredientes no seu plano', week_grocery_deliver: 'Receba tudo em casa · Instacart', week_grocery_scan: 'Escanear enquanto compra', week_grocery_locked: 'refeições do Club — assine pra ver a lista completa delas.', week_grocery_empty: 'Monte sua semana pra gerar a lista.',
      disc_eyebrow: 'Comida funcional, o dia todo', disc_p: 'Comida de verdade, do café à sobremesa — afinada em como você quer se sentir.',
      streak_days: 'dias seguidos', streak_best: 'recorde',
      nav_today: 'Hoje', nav_recipes: 'Receitas', nav_scan: 'Scan', nav_you: 'Você',
      today_eyebrow: 'Seu dia', today_h1: 'Hoje, com você.', today_p: 'Seu plano, seu check-in, seu streak — um lugar calmo pra aparecer por você.',
      today_coach_generic: 'Inchada, sem energia, ou com desejo de algo? Pergunte ao seu Coach — ele conhece seu plano e seu dia.', today_coach_cta: 'Falar com o Coach',
      you_programs: 'Programas & Rituais', you_programs_sub: 'Protocolos guiados + rituais de chá',
      rec_addweek: 'Adicionar à minha semana', rec_addpick: 'Adicionar em', rec_added: 'Adicionado', rec_added_to: 'Adicionado a', rec_serves: 'porções', rec_share: 'Compartilhar', rec_share_text: 'Uma receita HLC que você vai amar', shared_copied: 'Link copiado — compartilhe onde quiser.',
      start_h: 'Comece por aqui', start_skip: 'Pular', start_week: 'Monte sua semana', start_log: 'Registre seu primeiro dia', start_coach: 'Pergunte algo ao seu Coach', start_done: 'Tudo pronto — que começo lindo.',
      prog_h: 'Seu progresso', prog_best: 'recorde', prog_logged: 'dias registrados', prog_weight: 'Peso',
      today_h: 'Hoje', today_days: 'dias registrados', today_meals: 'Refeições', today_energy: 'Energia', today_water: 'Água', today_cups: 'copos', today_weight: 'Peso', today_wunit: 'kg', today_noplan: 'Monte sua semana pra marcar as refeições', energy_low: 'Baixa', energy_ok: 'OK', energy_great: 'Ótima',
      coach_today_intro: 'Seu plano de hoje', coach_today_tap: 'Toque em um pra abrir, ou refaça no Discover.', coach_today_none: 'Você ainda não tem plano da semana — toque em "Montar minha semana" no Discover que eu ajusto café, almoço e jantar aos seus objetivos.',
      pay_engaged: 'Você já planejou sua semana e começou a se acompanhar — isso libera o companion inteiro.', pay_note: 'Todo o seu companheiro de nutrição funcional, numa assinatura só.',
      oura_connect: 'Conectar seu Oura Ring', oura_connected: 'Oura Ring conectado', oura_disconnect: 'Desconectar', oura_soon: 'A conexão com o Oura ainda não está disponível.', oura_err: 'Não consegui iniciar a conexão com o Oura.', oura_off: 'Oura desconectado.', oura_ok: 'Oura Ring conectado.',
      coach_ins_sleep_lead: 'Vá com calma e firmeza hoje — seu sono caiu.', coach_ins_sleep: 'Dormir pouco eleva o cortisol, o hormônio de alarme do corpo, junto com os sinais de fome, e por isso bate vontade de açúcar rápido à tarde. Um café da manhã rico em proteína estabiliza a glicose e suaviza essa queda.',
      coach_ins_h: 'Um recado do seu Coach', coach_ins_energy_lead: 'Ancore a manhã com proteína.', coach_ins_energy: 'Alguns dias de energia baixa por aqui. Proteína com carboidratos mais estáveis no café da manhã deixa a curva de glicose mais lenta e plana — menos picos, menos quedas, energia mais constante — e a manhã se sustenta. Separei um par da sua cozinha.', coach_ins_water_lead: 'Beba um copo de água.', coach_ins_water: 'Você está um pouco abaixo hoje — e mesmo uma desidratação leve o cérebro lê como cansaço e fome, então um copo agora acalma os desejos e alivia a queda da tarde.', coach_ins_streak_lead: 'dias seguidos — que consistência linda.', coach_ins_streak_why: 'Quer ideias pra manter leve?'
    }
  };
  Object.keys(WEEK).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], WEEK[l]); });

  var WFDISC = {
    en: { wf_disclaimer: 'Data & nutrition · educational, not medical advice.' },
    pt: { wf_disclaimer: 'Dados & nutrição · educativo, não é conselho médico.' },
    es: { wf_disclaimer: 'Datos y nutrición · educativo, no es consejo médico.' },
    it: { wf_disclaimer: 'Dati e nutrizione · a scopo educativo, non è un consiglio medico.' },
    zh: { wf_disclaimer: '数据与营养 · 仅供科普，非医疗建议。' },
    hi: { wf_disclaimer: 'डेटा और पोषण · जानकारी के लिए, चिकित्सकीय सलाह नहीं।' },
    he: { wf_disclaimer: 'נתונים ותזונה · מידע חינוכי, לא ייעוץ רפואי.' }
  };
  Object.keys(WFDISC).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], WFDISC[l]); });

  var ONB2 = {
    en: {
      onb_goals_eyebrow: 'Let’s make this yours', onb_goals_h: 'What would you love to feel?', onb_goals_p: 'Pick what matters — we’ll tune your recipes, plan and Coach to it.',
      onbg_energy: 'More energy', onbg_sleep: 'Better sleep', onbg_bloat: 'Less bloating', onbg_inflam: 'Less inflammation', onbg_crave: 'Fewer sweet cravings', onbg_focus: 'A clearer mind',
      onb_energy_eyebrow: 'One quick read', onb_energy_h: 'How’s your energy most days?', onb_energy_low: 'Low', onb_energy_ok: 'Okay', onb_energy_great: 'Great',
      onb_reveal_btn: 'See my starting point',
      onb_rev_eyebrow: 'Made for you', onb_rev_h: 'Your starting point is ready.',
      onb_rev_goals: 'Tuned to {goals} — your recipes, plan and Coach now lean into it.',
      onb_rev_generic: 'Your recipes, plan and Coach are ready whenever you are.',
      onb_rev_first: 'Your first recipe', onb_rev_coach: 'Your Coach already knows your goals.', onb_rev_cta: 'Start with this'
    },
    pt: {
      onb_goals_eyebrow: 'Vamos deixar do seu jeito', onb_goals_h: 'O que você adoraria sentir?', onb_goals_p: 'Escolha o que importa — vamos afinar suas receitas, plano e Coach pra isso.',
      onbg_energy: 'Mais energia', onbg_sleep: 'Dormir melhor', onbg_bloat: 'Menos inchaço', onbg_inflam: 'Menos inflamação', onbg_crave: 'Menos vontade de doce', onbg_focus: 'Mente mais clara',
      onb_energy_eyebrow: 'Uma pergunta rápida', onb_energy_h: 'Como está sua energia na maioria dos dias?', onb_energy_low: 'Baixa', onb_energy_ok: 'Ok', onb_energy_great: 'Ótima',
      onb_reveal_btn: 'Ver meu ponto de partida',
      onb_rev_eyebrow: 'Feito pra você', onb_rev_h: 'Seu ponto de partida está pronto.',
      onb_rev_goals: 'Afinado em {goals} — suas receitas, plano e Coach já se voltam pra isso.',
      onb_rev_generic: 'Suas receitas, plano e Coach estão prontos quando você estiver.',
      onb_rev_first: 'Sua primeira receita', onb_rev_coach: 'Seu Coach já conhece seus objetivos.', onb_rev_cta: 'Começar com esta'
    }
  };
  Object.keys(ONB2).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], ONB2[l]); });

  var THERO = {
    en: { today_hero_tuned: 'Tuned to your goals', today_hero_pick: "Today's pick", today_hero_cta: 'Cook this' },
    pt: { today_hero_tuned: 'Afinado nos seus objetivos', today_hero_pick: 'A escolha de hoje', today_hero_cta: 'Cozinhar esta' }
  };
  Object.keys(THERO).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], THERO[l]); });

  var DISCUX = {
    en: {
      disc_goals_toggle: 'Goals', clean_ideas_h: 'Make this instead', clean_ideas_sub: 'Recipe', saved_hint: 'Tap the star on any recipe to save it here.', saved_hint_sync: '— sign in to sync across devices.',
      coach_cold_h: "Hi, I'm your HLC Coach", coach_cold_p: "Tell me how you've been feeling or what you're craving — I'll point you to something nourishing to make right now.",
      coach_used_h: "You've used today's free Coach chats", coach_used_p: 'Club members chat with the Coach without limits — plus every protocol, unlimited scans and saved history.',
      coach_left_one: '{n} free Coach chat left today', coach_left_many: '{n} free Coach chats left today', coach_no_account: 'no account needed',
      coach_chip_bloat: 'Why am I bloated?', coach_chip_dessert: 'Dairy-free dessert', coach_chip_energy: 'More energy', coach_chip_eat_today: 'What should I eat today?', coach_chip_cravings: 'Sweet cravings', coach_chip_sleep: 'Better sleep'
    },
    pt: {
      disc_goals_toggle: 'Objetivos', clean_ideas_h: 'Faça isto em vez disso', clean_ideas_sub: 'Receita', saved_hint: 'Toque na estrela de qualquer receita para salvar aqui.', saved_hint_sync: '— entre pra sincronizar entre aparelhos.',
      coach_eyebrow: 'Seu Coach de IA', coach_h1: 'Um companheiro que conhece seu corpo.', coach_p: 'Pergunte sobre inchaço, desejos, energia ou o que comer hoje — orientação funcional e acolhedora que te leva a receitas e rituais reais.', coach_ph: 'Pergunte qualquer coisa ao seu Coach…', coach_disc: 'Orientação educativa de nutrição funcional — não é conselho médico, diagnóstico ou tratamento. Em crise (EUA), ligue ou envie SMS para 988.',
      coach_cold_h: 'Oi, eu sou seu Coach da HLC', coach_cold_p: 'Me conte como você está se sentindo ou o que está desejando — vou te indicar algo nutritivo pra fazer agora mesmo.',
      coach_used_h: 'Você usou suas conversas grátis do Coach hoje', coach_used_p: 'Membros do Club conversam com o Coach sem limites — além de todos os protocolos, scans ilimitados e histórico salvo.',
      coach_left_one: '{n} conversa grátis com o Coach hoje', coach_left_many: '{n} conversas grátis com o Coach hoje', coach_no_account: 'sem precisar de conta',
      coach_chip_bloat: 'Por que estou inchada?', coach_chip_dessert: 'Sobremesa sem lactose', coach_chip_energy: 'Mais energia', coach_chip_eat_today: 'O que eu como hoje?', coach_chip_cravings: 'Vontade de doce', coach_chip_sleep: 'Dormir melhor'
    }
  };
  Object.keys(DISCUX).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], DISCUX[l]); });

  // Celebration copy — earned-delight moments (day fully logged, streak milestones).
  var CELEB = {
    en: {
      start_done_h: "You're all set.",
      celebrate_day_h: 'Beautiful — today is fully logged.', celebrate_day_p: 'Every meal, your energy, your water. That consistency is what changes how you feel.',
      celebrate_streak_h: 'days strong.', celebrate_streak_p: "You're building a real rhythm — your body notices."
    },
    pt: {
      start_done_h: 'Tudo pronto.',
      celebrate_day_h: 'Lindo — hoje está completo.', celebrate_day_p: 'Cada refeição, sua energia, sua água. Essa consistência é o que muda como você se sente.',
      celebrate_streak_h: 'dias seguidos.', celebrate_streak_p: 'Você está construindo um ritmo de verdade — seu corpo percebe.'
    }
  };
  Object.keys(CELEB).forEach(function (l) { if (I18N[l]) Object.assign(I18N[l], CELEB[l]); });

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
